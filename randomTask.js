const faker = require('faker');
const { result } = require('@laufire/utils/collection');

const capitalize = (str) => str.charAt(0).toUpperCase() + str.slice(1);
const randomTask = () =>
	capitalize(`${ faker.hacker.verb() } ${ faker.hacker.noun() }`);

const custom = {
	firstName: () => 'someone',
};

// eslint-disable-next-line no-console
console.log(randomTask());
// eslint-disable-next-line no-console
console.log(result(custom, 'firstName'));
