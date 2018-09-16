import { CHANGE_WHEELS } from '../actions/actionTypes';

const wheels = (state = '19', action) => {
    switch (action.type) {
    case CHANGE_WHEELS:
        return action.wheels;
    default: return state;
    }
};
export default wheels;