const fakerParser = require('../index');

const parse = fakerParser();

// eslint-disable-next-line no-console
console.log(parse([
	() => 1,
	{
		name: 'name/firstName',
	},
]));
