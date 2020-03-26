//db.js
const low = require('lowdb');
const FileSync = require('lowdb/adapters/FileSync');
const adapter = new FileSync('db.json');
const db = low(adapter)
//set some defaults, a must when JSON file is empty
db.defaults({cars: []}).write()
const Car = db.get('cars');
// const Customer = db.get('customers');

module.exports = {
    db,
    Car,
}