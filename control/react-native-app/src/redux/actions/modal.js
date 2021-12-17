import * as actionTypes from "./actionTypes";

export const hideModal = () => (dispatch) => { 
    try {
        dispatch({
            type: actionTypes.CLOSE_MODAL,
            payload: false
        })    
    } catch (error) {
        console.log(error);
    } 
};

export const showModal = () => (dispatch) => { 
    try {
        dispatch({
            type: actionTypes.OPEN_MODAL,
            payload: true
        })    
    } catch (error) {
        console.log(error);
    } 
};