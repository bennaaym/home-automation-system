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

export const setPictureUrl = (url) => (dispatch) => { 
    try {
        dispatch({
            type: actionTypes.SET_PICTURE_URL,
            payload: url
        })    
    } catch (error) {
        console.log(error);
    } 
};

export const setUserKey = (key) => (dispatch) => { 
    try {
        dispatch({
            type: actionTypes.SET_USER_KEY,
            payload: key
        })    
    } catch (error) {
        console.log(error);
    } 
};

