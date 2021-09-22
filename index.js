const faker = require('faker');
const { inferType } = require('@laufire/utils/reflection');
const { range, result } = require('@laufire/utils/collection');
const { value } = require('@laufire/utils/fn');

const parser = (overides = {}) => {
	const defaultAction = (data) => data;

	const actions = {
		string: (data) => (result(overides, data) || result(faker, data))(),

		object: (data) => {
			const output = {};

			Object.keys(data).forEach((item) => {
				// eslint-disable-next-line no-use-before-define
				output[item] = parse(data[item]);
			});

			return output;
		},

		function: (fn) => fn(),

		array: ([count, template]) =>
			// eslint-disable-next-line no-use-before-define
			range(0, value(count)).map(() => parse(template)),
	};

	const parse = (data) => (actions[inferType(data)] || defaultAction)(data);

	return parse;
};

module.exports = parser;
