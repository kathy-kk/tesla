import { getTeslaResponse } from '../../service';
import { FETCH_TESLA_REQUEST, FETCH_TESLA_SUCCESS, FETCH_TESLA_FAILURE, INCREASE_SPEED, DECREASE_SPEED, INCREASE_TEMPERATURE, DECREASE_TEMPERATURE, TOGGLE_AC, CHANGE_WHEELS } from './actionTypes';

export const fetchTesla = () => {
    return async (dispatch, getState) => {
        try{
            dispatch({
                type: FETCH_TESLA_REQUEST
            });
            const responseData = await getTeslaResponse();
            dispatch({
                type: FETCH_TESLA_SUCCESS,
                data: responseData
            });
        }catch(error){
            console.log(error);
            dispatch({
                type: FETCH_TESLA_FAILURE,
                errorMessage: error.message || 'Something is wrong'
            });
        }
    };
};
export const changeWheels = (wheels) => (dispatch) => {
    dispatch({
        type: CHANGE_WHEELS,
        wheels
    });
};
export const toggleAC = () => (dispatch) => {
    dispatch({
        type: TOGGLE_AC
    });
};
export const increaseSpeed = () => (dispatch) => {
    dispatch({
        type: INCREASE_SPEED
    });
};
export const decreaseSpeed = () => (dispatch) => {
    dispatch({
        type: DECREASE_SPEED
    });
};
export const increaseTemperature = () => (dispatch) => {
    dispatch({
        type: INCREASE_TEMPERATURE
    });
};
export const decreaseTemperature = () => (dispatch) => {
    dispatch({
        type: DECREASE_TEMPERATURE
    });
};