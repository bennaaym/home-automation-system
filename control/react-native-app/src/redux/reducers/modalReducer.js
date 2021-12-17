import * as actionTypes from "../actions/actionTypes"; 

const initialState = {
    modalVisible : false
}

function modalReducer(modal= initialState,action){

    const {type, payload} = action;
    let newState;

    switch (type) { 
        case actionTypes.OPEN_MODAL:
            newState = {...modal}
            newState.modalVisible = payload
            return newState
        case actionTypes.CLOSE_MODAL:
            newState = {...modal}
            newState.modalVisible = payload
            return newState
        default:
          return modal;
      }
}

export default modalReducer;