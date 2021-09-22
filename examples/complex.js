const fakerParser = require('../index');
const { pretty } = require('@laufire/utils/debug');

const one = 1;
const custom = {
	firstName: () => 'someone',
	helpers: {
		positive: () => one,
		negative: () => -one,
	},
};

const parse = fakerParser(custom);

// eslint-disable-next-line no-console
console.log(pretty(parse({
	name: 'firstName',
	email: 'internet/email',
	details: {
		card: 'helpers/createCard',
		demo: {
			age: 'random/number',
			test: {
				name: 'name/findName',
			},
		},
	},
	age: 'helpers/positive',
	gender: () => 'male',
	children: [
		1,
		'firstName',
	],
})));
