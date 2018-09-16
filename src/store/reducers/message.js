import { combineReducers } from 'redux';
import { FETCH_TESLA_SUCCESS, FETCH_TESLA_FAILURE, FETCH_TESLA_REQUEST } from '../actions/actionTypes';

const createMessage = () => {
    const data = (state = {}, action) => {
        switch(action.type){
        case FETCH_TESLA_SUCCESS:
            return action.data;
        default: return state;
        }
    };
    const isLoading = (state = false, action) => {
        switch (action.type){
        case FETCH_TESLA_REQUEST:
            return true;
        case FETCH_TESLA_SUCCESS:
            return false;
        case FETCH_TESLA_FAILURE:
            return false;
        default:
            return state;
        }
    };
    const errorMessage = (state = '', action) => {
        switch (action.type){
        case FETCH_TESLA_FAILURE:
            return action.errorMessage;
        case FETCH_TESLA_SUCCESS:
            return '';
        default:
            return state;
        }
    };
    return combineReducers({
        data,
        isLoading,
        errorMessage
    });
};
export default createMessage;
export const getIsLoading = state => state.isLoading;
export const getData = state => state.data;
