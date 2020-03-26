//db_customer.js
const low = require('lowdb');
const FileSync = require('lowdb/adapters/FileSync');
const adapter = new FileSync('db.json');
const db = low(adapter)
//set some defaults, a must when JSON file is empty
db.defaults({customers: []}).write()

const Customer = db.get('customers');

module.exports = {
    db,
    Customer,
}