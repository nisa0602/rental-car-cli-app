//remove_car.js
const {Command, flags} = require('@oclif/command');
const {Car} = require('../db_car');

class RemoveCar extends Command {
    async run() {
        const {
            flags: {id},
        } = this.parse(RemoveCar)
        const res =  await Car.remove({id: parseInt(id, 10)}).write()
        this.log(res)
        
    }
}

RemoveCar.description = `Remove a car by id
... run=> ./bin/run show_car
Removes a car permanently from database by id
`

RemoveCar.flags = {
    id: flags.string({char: 'n', description: 'car id', required: true}),
}

module.exports = RemoveCar