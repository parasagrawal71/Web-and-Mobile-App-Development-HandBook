import {
    CREATE_STREAM,
    FETCH_STREAMS,
    FETCH_STREAM,
    EDIT_STREAM,
    DELETE_STREAM,
  } from "../actions/types";
import _ from 'lodash'; 

// Object-based Reducer
export default (state = {}, action) => {
    switch(action.type) {
        case FETCH_STREAMS:
            return { ...state, ..._.mapKeys(action.payload, 'id')};
        case FETCH_STREAM:
            return {...state, [action.payload.id]: action.payload}; // [action.payload.id] is called as key interpolation
            // With no [], ERROR for x.y and 'x' will be the key name instead of value of x
        case CREATE_STREAM:
            return {...state, [action.payload.id]: action.payload};
        case EDIT_STREAM:
            return {...state, [action.payload.id]: action.payload};
        case DELETE_STREAM:
            return _.omit(state, action.payload); // payload is id itself in case of DELETE_STREAM
            // OMIT is to remove entire object with matching id
        default:
            return state;
    }
}