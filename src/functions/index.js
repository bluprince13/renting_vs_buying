import fields from '../data/fields';

export const initialValues = fields.reduce((obj, item) => {
	obj[item.name] = item.value;
	return obj;
}, {});