var environment = process.env.NODE_ENV || 'development'
var config = require('../../knexFile')[environment]
console.log("connected to mysql database")
module.exports = require('knex')(config)