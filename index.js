const faker = require("faker");
const {inferType} = require("@laufire/utils/reflection");
const {range,result} = require("@laufire/utils/collection");
const {value} = require("@laufire/utils/fn");

const parser = (overides = {}) => {
    const actions = {
        string: (value) => 
            (result(overides,value) 
                || result(faker,value))(),

        object: (value) => {
            const output = {};
            Object.keys(value).forEach((item) => 
                output[item] = parse(value[item]));
            return output;
        },
        
        function: (value) => value(),

        array: ([count,template]) => {
            let arr = [];
            for (let i = 0; i < value(count); i++) {
               arr.push(parse(template));
            }
            return arr;
        },

        number: (value) => value,
    };

    const parse = (data) => actions[inferType(data)](data);

    return parse;
};

module.exports = parser;