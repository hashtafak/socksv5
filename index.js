const fs = require('fs');
const path = require('path');

['server', 'client', 'Agents'].forEach((f) => {
    const exp = require(`${__dirname}/lib/${f}`);

    const keys = Object.keys(exp);
    for (let i = 0, len = keys.length; i < len; i += 1) {
        exports[keys[i]] = exp[keys[i]];
    }
});

exports.auth = {};

fs.readdirSync(`${__dirname}/lib/auth`).forEach((f) => {
    exports.auth[path.basename(f, '.js')] = require(`${__dirname}/lib/auth/${f}`);
});
