import { combineReducers } from 'redux';
import createCounters, * as fromCounter from './counter';
import ac from './ac';
import createMessage, * as fromMessage from './message';
import wheels from './wheels';

const speedValues = [45,50,55,60,65,70];
const temperatureValues = [0,10,20,30,40];

const tesla = combineReducers({
    counter: createCounters(speedValues, temperatureValues),
    ac,
    wheels,
    message: createMessage()
});
export default tesla;
export const getData = (state) => fromMessage.getData(state.message);
export const getIsLoading = (state) => fromMessage.getIsLoading(state.message);
export const getSpeed = (state) =>  fromCounter.getSpeed(state.counter);
export const getTemperature = (state) => fromCounter.getTemperature(state.counter);
export const getAC = (state) => state.ac;
export const getWheels = (state) => state.wheels;