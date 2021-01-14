const environment = process.env.NODE_ENV || 'production';

const config = require(`./configs/${environment}.config`);

module.exports = config;