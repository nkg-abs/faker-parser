const { rndBetween } = require('@laufire/utils/lib');
const fakerParser = require('../index');
const { pretty } = require('@laufire/utils/debug');

const two = 2;
const three = 3;

const parse = fakerParser();

const task = () =>
	parse({
		name: 'name/firstName',
		cost: () => rndBetween(1, three),
		tasks: [
			() => rndBetween(0, two),
			task,
		],
	});

// eslint-disable-next-line no-console
console.log(pretty(task()));
