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

export default function Player(state=initialState, action) {
    switch(action.type) {
      case User.ADD_PLAYER:
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
        
      case User.REMOVE_PLAYER:
        return [
          ...state.slice(0, action.index),
          ...state.slice(action.index + 1)
        ];
        
      case User.UPDATE_PLAYER_SCORE:
        return state.map((player, index) => {
          if(index === action.index) {
            return {
              ...player,
              score: player.score + action.score
            };
          }
          return player;
        });
        
      default:
        return state;
    }
  }