import firebase from '../firebase/firebase.utils';
import { SET_CURRENT_USER } from '../redux/Constants';
export interface IItem {
  id: number;
  name: string;
  imageUrl: string;
  price: number;
}

export interface IUser extends firebase.firestore.DocumentData {
  id?: string;
}

export interface ICurrentUser {
  currentUser: IUser;
}

export interface ICartDropdown {
  hidden: boolean;
}

export type TAction =
  | { type: 'SET_CURRENT_USER'; payload: ICurrentUser }
  | { type: 'TOGGLE_CART_HIDDEN'; payload: ICartDropdown };

export type TDispatch = (action: TAction) => void;

export interface IRootState {
  user: ICurrentUser;
  cart: ICartDropdown;
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
