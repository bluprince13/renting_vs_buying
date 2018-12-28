import { CHANGE_INPUT } from '../actions/index'
import fields from '../data/fields';

const allFields = Object.keys(fields).reduce(
    (arr, key) => {
        arr = arr.concat(fields[key])
        return arr
    }, []
)
export const initialValues = allFields.reduce((obj, item) => {
	obj[item.name] = item.defaultValue;
	return obj;
}, {});

export default (state = initialValues, action) => {
    switch (action.type) {
        case CHANGE_INPUT:
            return { ...state, ...action.payload };
        default:
            return state;
    }
}
