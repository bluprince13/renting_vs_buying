import { CHANGE_INPUT } from '../actions/index'
import { initialValues } from '../functions'

export default (state = initialValues, action) =>  {
    switch (action.type) {
        case CHANGE_INPUT:
            return {...state, ...action.payload};
    }

    return state;
}
