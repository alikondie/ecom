import firebase from '../firebase/firebase.utils';

export interface IItem {
  id: number;
  name: string;
  imageUrl: string;
  price: number;
  quantity?: number;
}

export interface IUser extends firebase.firestore.DocumentData {
  id?: string;
}

export interface IEmailAndPassword {
  email: string;
  password: string;
}

export interface ICurrentUser {
  currentUser: IUser | null;
  error?: string | null;
}

export interface IFirebaseCollection extends firebase.firestore.DocumentData {
  title: string;
  items: IItem[];
}

export interface ICart {
  hidden: boolean;
  cartItems: IItem[];
}

export interface ISection {
  id: number;
  title: string;
  imageUrl: string;
  linkUrl: string;
  size?: string;
}

export interface ICollectionData {
  [key: string]: ICollection;
}

export interface IDirectory {
  sections: ISection[];
}

export interface ICollection {
  id: string;
  title: string;
  routeName: string;
  items: IItem[];
}

export interface ISignupForm {
  email: string;
  password: string;
  displayName: string;
}

export interface IShop {
  collections: ICollectionData | {};
  error?: string | null;
  isLoading: boolean;
}

export type TAction =
  | { type: 'SET_CURRENT_USER'; payload: ICurrentUser }
  | { type: 'TOGGLE_CART_HIDDEN'; payload: ICart }
  | { type: 'CLEAR_CART' }
  | { type: 'ADD_ITEM'; payload: IItem }
  | { type: 'CLEAR_ITEM'; payload: IItem }
  | { type: 'REMOVE_ITEM'; payload: IItem }
  | { type: 'UPDATE_COLLECTIONS_SUCCESS'; payload: IShop }
  | { type: 'UPDATE_COLLECTIONS_ERROR'; payload: string }
  | { type: 'UPDATE_COLLECTIONS_REQUEST' }
  | { type: 'GOOGLE_SIGNIN_REQUEST' }
  | { type: 'EMAIL_SIGNIN_REQUEST'; payload: IEmailAndPassword }
  | { type: 'SIGNIN_SUCCESS'; payload: ICurrentUser }
  | { type: 'SIGNIN_ERROR'; payload: string }
  | { type: 'SIGNUP_REQUEST'; payload: ISignupForm }
  | { type: 'SIGNUP_SUCCESS' }
  | { type: 'SIGNUP_ERROR'; payload: string }
  | { type: 'CHECK_USER_SESSION' }
  | { type: 'SIGN_OUT_REQUEST' }
  | { type: 'SIGN_OUT_SUCCESS' }
  | { type: 'SIGN_OUT_ERROR'; payload: string };

export type TDispatch = (action: TAction) => void;

export interface IRootState {
  user: ICurrentUser;
  cart: ICart;
  directory: IDirectory;
  shop: IShop;
}

// export type TAction =
//   | { type: "FETCH_ACTIVITIES_SUCCESS"; payload: IActivity[] }
//   | { type: "FETCH_ACTIVITIES_REQUEST" }
//   | { type: "FETCH_ACTIVITIES_ERROR"; payload: string }
//   | { type: "FETCH_ACTIVITY_DETAIL_REQUEST" }
//   | { type: "FETCH_ACTIVITY_DETAIL_ERROR"; payload: string }
//   | { type: "FETCH_ACTIVITY_DETAIL_SUCCESS"; payload: IActivity }
//   | { type: "ARCHIVE_ACTIVITY"; payload: number }
//   | { type: "RESET_ACTIVITY"; payload: number };
