'use strict'
const config = require('./index')
const db = require('mongoose')
const DB_URL = config.mongodb_url

console.log("process.env.NODE_ENV=" + process.env.NODE_ENV);
console.log(config.mongodb_url)

db.Promise = global.Promise
db.connect(DB_URL, {
    useMongoClient: true,
    /* other options */
})
db.connection.once('connected', function () {
    console.log("connected mongoodb!")
})
db.connection.on('error', function () {
    console.log('connect error');
})
db.connection.on('disconnected', function () {
    console.log('Mongoose connection disconnected')
})

module.exports = db