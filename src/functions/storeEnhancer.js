import ReduxQuerySync from 'redux-query-sync'
import { CHANGE_INPUT } from "../actions";
import fields from '../data/fields'

const allFields = Object.keys(fields).reduce(
    (arr, key) => {
        arr = arr.concat(fields[key])
        return arr
    }, []
)

const params = allFields.reduce(
    (obj, item) => {
        const { name, defaultValue } = item 
        obj[name] = {
            selector: state => state.input[name],
            action: value => ({ type: CHANGE_INPUT, payload: { [name]: value } }),
            stringToValue: string => Number(string) || 1,
            valueToString: value => `${value}`,
            defaultValue: defaultValue,
        };
        return obj;
    }, {}
)

export default ReduxQuerySync.enhancer({
    params,
    initialTruth: 'store',
    replaceState: false,
})