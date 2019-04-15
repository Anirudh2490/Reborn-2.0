const initState = {
    users: [
        {
        fullname: "profile.fullname",
        email: "profile.email",
        password: "profile.password",
        phone: "profile.phone",
        profilePercentageComplete: 20,
        userType: "profile.userType",
        userID: 1,
        createdAt: "new Date()"
    }
    ]
}

const addUser = (state = initState, action) => {
  switch (action.type) {
    case 'CREATE_USER':
      console.log('created user successfully', action.user);
      return state;
    case 'CREATE_USER_ERROR':
      console.log('create user error', action.error);
      return state;
    default:
      return state;
  }
};

export default addUser;



// import * as User from '../actionTypes/UserActionTypes'

// const initialState = [
//     {
//         userID: 0,
//         name:"",
//         email:"",
//         phoneNumber:"",
//         phoneVerified: false,
//         emailVerified: false
//     }
// ]

// export default function USER(state=initialState, action) {
//     switch(action.type) {
//       case User.ADD_USER:
//         return [
//           ...state,
//           {
//             userID: 0,
//             name:action.name,
//             email:action.email,
//             phoneNumber:"",
//             phoneVerified: false,
//             emailVerified: false
//         }
//         ];
        
//       case User.REMOVE_USER:
//         return [
//           ...state.slice(0, action.index),
//           ...state.slice(action.index + 1)
//         ];
            
//       default:
//         return state;
//     }
//   }