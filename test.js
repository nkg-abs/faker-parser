/* eslint-disable no-console */
const fakerParser = require('./index');

const one = 1;

const overides = {
	firstName: () => 'someone',
	helpers: {
		positive: () => one,
		negative: () => -one,
	},
};

const parse = fakerParser(overides);

console.log(parse({
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
}));

console.log(parse(overides.firstName));

console.log(parse([
	() => 0,
	{
		name: 'name/firstName',
	},
]));
