import * as actionTypes from "../actions/actionTypes"; 

const initialState = {
    uid : "",
    picture_url: ""
}

function userReducer(user= initialState,action){

    const {type, payload} = action;
    let newState;

    switch (type) { 
        case actionTypes.SET_NEW_USER:
            newState = {...user}
            newState.uid = payload
            return newState
        case actionTypes.SET_PICTURE_URL:
            newState = {...user}
            newState.picture_url = payload
            return newState
        default:
          return user;
      }
}

export default userReducer;