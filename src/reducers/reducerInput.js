import { CHANGE_INPUT } from '../actions/index'

export default (state = {}, action) => {
    switch (action.type) {
        case CHANGE_INPUT:
            return { ...state, ...action.payload };
        default:
            return state;
    }

    return state;
}
