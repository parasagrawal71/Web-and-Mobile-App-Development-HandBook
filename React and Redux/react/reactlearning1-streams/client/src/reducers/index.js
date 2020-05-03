import { combineReducers } from 'redux';
import authReducer from './authReducer';
import streamsReducer from './streamsReducer';
// import { reducer } from 'redux-form';
import { reducer as formReducer } from 'redux-form';

export default combineReducers({
    auth: authReducer,
    // form: reducer // keyname 'form' is fixed in order to use redux-form
    form: formReducer,
    streams: streamsReducer
})