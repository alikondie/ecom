import { Collection } from 'typescript';
import firebase from '../firebase/firebase.utils';
import { SET_CURRENT_USER } from '../redux/Constants';
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

export interface ICurrentUser {
  currentUser: IUser | null;
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
  id: number;
  title: string;
  routeName: string;
  items: IItem[];
}

export interface IShop {
  collections: ICollectionData;
}

export type TAction =
  | { type: 'SET_CURRENT_USER'; payload: ICurrentUser }
  | { type: 'TOGGLE_CART_HIDDEN'; payload: ICart }
  | { type: 'ADD_ITEM'; payload: IItem }
  | { type: 'CLEAR_ITEM'; payload: IItem }
  | { type: 'REMOVE_ITEM'; payload: IItem };

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
