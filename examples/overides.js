const fakerParser = require('../index');

const overides = {
	firstName: () => 'someone',
	internet: {
		email: () => 'overridden@email.in',
	},
};
const parse = fakerParser(overides);

// eslint-disable-next-line no-console
console.log(parse({
	name: 'firstName',
	email: 'internet/email',
	firstName: 'name/firstName',
}));
