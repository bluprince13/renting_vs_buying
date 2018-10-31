import ReduxQuerySync from 'redux-query-sync'
import { CHANGE_INPUT } from "../actions";
import fields from '../data/fields'

const params = fields.reduce(
    (obj, item) => {
        const { name, defaultValue } = item 
        obj[name] = {
            selector: state => state.input[name],
            action: value => ({ type: CHANGE_INPUT, payload: { [name]: value } }),
            stringToValue: string => Number.parseInt(string) || 1,
            valueToString: value => `${value}`,
            defaultValue: defaultValue,
        };
        return obj;
    }, {}
)

export default ReduxQuerySync.enhancer({
    params,
    initialTruth: 'location',
    replaceState: false,
})