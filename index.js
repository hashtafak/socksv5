const fs = require('fs');
const path = require('path');

const dir = path.resolve(__dirname);

['server', 'client', 'Agents'].forEach((f) => {
    const exp = require(`${dir}/lib/${f}`);

    const keys = Object.keys(exp);
    for (let i = 0, len = keys.length; i < len; i += 1) {
        exports[keys[i]] = exp[keys[i]];
    }
});

exports.auth = {};

fs.readdirSync(`${dir}/lib/auth`).forEach((f) => {
    exports.auth[path.basename(f, '.js')] = require(`${dir}/lib/auth/${f}`);
});
