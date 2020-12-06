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

// export type TAction =
//   | { type: "FETCH_ACTIVITIES_SUCCESS"; payload: IActivity[] }
//   | { type: "FETCH_ACTIVITIES_REQUEST" }
//   | { type: "FETCH_ACTIVITIES_ERROR"; payload: string }
//   | { type: "FETCH_ACTIVITY_DETAIL_REQUEST" }
//   | { type: "FETCH_ACTIVITY_DETAIL_ERROR"; payload: string }
//   | { type: "FETCH_ACTIVITY_DETAIL_SUCCESS"; payload: IActivity }
//   | { type: "ARCHIVE_ACTIVITY"; payload: number }
//   | { type: "RESET_ACTIVITY"; payload: number };
