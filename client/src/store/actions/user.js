// import * as User from '../actionTypes/UserActionTypes';
import auth from './authActions'

export const createUser = (user) => {
    return (dispatch, getState, {getFirestore}) => {
      const firestore = getFirestore();
      const profile = getState().firebase.profile;
      const userID = getState().firebase.auth.uid;
      firestore.collection('users').add({
        ...user,
        fullname: profile.fullname,
        email: profile.email,
        password: profile.password,
        phone: profile.phone,
        profilePercentageComplete: 20,
        userType: profile.userType,
        userID: userID,
        createdAt: new Date()
      }).then(() => {
        dispatch({ type: 'CREATE_USER_SUCCESS' });
      }).catch(err => {
        dispatch({ type: 'CREATE_USER_ERROR' }, err);
      });
    }
  };

// export const addUser = details => {
//     return {
//     type: User.ADD_USER,
//     details
// };
// }

// export const removeUser = index => {
//     return {
//         type: User.REMOVE_USER,
//         index
//     };
// };

// export const updateUser = (index, details) => {
//     return {
//         type: User.UPDATE_USER,
//         index,
//         details
//     }
// }