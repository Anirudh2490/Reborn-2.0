import * as User from '../actionTypes/UserActionTypes'

const initialState = [
    {
        userID: 0,
        name:"",
        email:"",
        phoneNumber:"",
        phoneVerified: false,
        emailVerified: false
    }
]

export default function USER(state=initialState, action) {
    switch(action.type) {
      case User.ADD_USER:
        return [
          ...state,
          {
            userID: 0,
            name:action.name,
            email:action.email,
            phoneNumber:"",
            phoneVerified: false,
            emailVerified: false
        }
        ];
        
      case User.REMOVE_USER:
        return [
          ...state.slice(0, action.index),
          ...state.slice(action.index + 1)
        ];
            
      default:
        return state;
    }
  }