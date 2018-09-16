import { TOGGLE_AC } from '../actions/actionTypes';
const ac = (state = true, action) => {
    switch(action.type) {
    case TOGGLE_AC: return !state;
    default: return state;
    }
};
export default ac; 