import firebase from '../firebase/firebase.utils';
export interface IItem {
  id: number;
  name: string;
  imageUrl: string;
  price: number;
}

export interface IUser extends firebase.firestore.DocumentData {
  id?: string;
}
