import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';
import { ICollection, ICollectionData, IFirebaseCollection } from '../types';

const config = {
  apiKey: process.env.REACT_APP_API_KEY,
  authDomain: process.env.REACT_APP_AUTH_DOMAIN,
  projectId: process.env.REACT_APP_PROJECT_ID,
  storageBucket: process.env.REACT_APP_STORAGE_BUCKET,
  messagingSenderId: process.env.REACT_APP_MESSAGING_ID,
  appId: process.env.REACT_APP_ID,
};

export const createUserProfileDocument = async (
  userAuth: firebase.User,
  additionalData: any
) => {
  if (!userAuth) return;

  const userRef = firestore.doc(`users/${userAuth.uid}`);
  const snapShot = await userRef.get();

  if (!snapShot.exists) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();

    try {
      await userRef.set({
        displayName,
        email,
        createdAt,
        ...additionalData,
      });
    } catch (error) {
      console.log('error creating user', error.message);
    }
  }

  return userRef;
};

export const addCollectionAndDocuments = async (
  collectionKey: string,
  objectsToAdd: IFirebaseCollection[]
) => {
  const collectionRef = firestore.collection(collectionKey);
  const batch = firestore.batch();
  objectsToAdd.forEach((collection: IFirebaseCollection) => {
    const newDocRef = collectionRef.doc();
    batch.set(newDocRef, collection);
  });

  return await batch.commit();
};

export const collectionConverter = {
  toFirestore(
    collection: IFirebaseCollection
  ): firebase.firestore.DocumentData {
    return { title: collection.title, items: collection.items };
  },

  fromFirestore(
    snapshot: firebase.firestore.QueryDocumentSnapshot,
    options: firebase.firestore.SnapshotOptions
  ): IFirebaseCollection {
    const data = snapshot.data(options)!;
    return { title: data.title, items: data.items };
  },
};

export const convertCollectionsSnapshotToMap = (
  collections: firebase.firestore.QuerySnapshot<IFirebaseCollection>
) => {
  const transformedCollections = collections.docs.map(
    (doc): ICollection => {
      const { title, items } = doc.data();

      return {
        routeName: encodeURI(title.toLowerCase()),
        id: doc.id,
        title,
        items,
      };
    }
  );

  return transformedCollections.reduce(
    (accumulator: ICollectionData, collection) => {
      accumulator[collection.title.toLowerCase()] = collection;
      return accumulator;
    },
    {}
  );
};

export const mapCollections = async () => {
  const collectionRef = await firestore
    .collection('collections')
    .withConverter(collectionConverter)
    .get();
  const collectionsMap = convertCollectionsSnapshotToMap(collectionRef);
  return collectionsMap;
};

export const getCurrentUser = () => {
  return new Promise<firebase.User | null>((resolve, reject) => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      unsubscribe();
      resolve(user);
    }, reject);
  });
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

export const googleProvider = new firebase.auth.GoogleAuthProvider();

googleProvider.setCustomParameters({ prompt: 'select_account' });

export const signInWithGoogle = () => auth.signInWithPopup(googleProvider);

export default firebase;
