import { combineReducers } from 'redux';
import { INCREASE_SPEED, DECREASE_SPEED, INCREASE_TEMPERATURE, DECREASE_TEMPERATURE } from '../actions/actionTypes';

const createCounters = (speedValues, temperatureValues) => {
    const speed = (state = 55,action ) => {
        switch (action.type) {
        case INCREASE_SPEED: return increase(state, speedValues);
        case DECREASE_SPEED: return decrease(state, speedValues);
        default:
            return state;
        }
    };
    
    const temperature = (state = 20,action ) => {
        switch (action.type) {
        case INCREASE_TEMPERATURE: return increase(state, temperatureValues);
        case DECREASE_TEMPERATURE: return decrease(state, temperatureValues);
        default:
            return state;
        }
    };
    
    const increase = (state, values) => {
        const currentIndex = values.indexOf(state);
        return currentIndex<values.length-1?values[currentIndex+1]:state;
    };
    const decrease = (state, values) => {
        const currentIndex = values.indexOf(state);
        return currentIndex>0?values[currentIndex-1]:state;
    };
    return combineReducers({
        speed,
        temperature
    });
};
export default createCounters;
export const getSpeed = state => state.speed;
export const getTemperature = state => state.temperature;

