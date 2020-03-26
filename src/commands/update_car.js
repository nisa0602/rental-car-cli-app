const {Command, flags} = require('@oclif/command');
const {Car} = require('../db_car');
const {Customer} = require('../db_customer');

class UpdateCar extends Command {
    async run() {
        const {
            flags: {id, customer},
        } = this.parse(UpdateCar)
        const res = await Car.find({id: parseInt(id, 10)})
        .assign({rented: true, message:'car rented', customer:{customer}})
        .write()
        this.log(res)
    }
}

UpdateCar.description = `Mark car as rented
...
rented
`
UpdateCar.flags = {
    id: flags.string({char: 'n', description: 'car id'}),
    customer: flags.string({char: 'n', description: 'customer'})
}

module.exports = UpdateCar