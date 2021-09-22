const fakerParser = require('../index');

const parse = fakerParser();

// eslint-disable-next-line no-console
console.log(parse({ email: 'internet/email' }));
