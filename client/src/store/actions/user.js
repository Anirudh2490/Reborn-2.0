// import * as User from '../actionTypes/UserActionTypes';


export const signUp = (user) => {
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
        dispatch({ type: 'CREATE_USER' });
      }).catch(err => {
        dispatch({ type: 'CREATE_USER_ERROR' }, err);
      });
    }
  };