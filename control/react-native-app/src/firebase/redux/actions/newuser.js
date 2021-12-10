import * as actionTypes from "./actionTypes";

export const setNewUser = (uid) => (dispatch) => { 
    try {
        dispatch({
            type: actionTypes.SET_NEW_USER,
            payload: uid
        })    
    } catch (error) {
        console.log(error);
    } 
};
