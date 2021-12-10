import * as actionTypes from "../actions/actionTypes"; 

const initialState = {
    uid : ""
}

function userReducer(user= initialState,action){

    const {type, payload} = action;
    let newState;

    switch (type) { 
        case actionTypes.SET_NEW_USER:
            newState = {...user}
            newState.uid = payload
            return newState
        default:
          return user;
      }
}

export default userReducer;