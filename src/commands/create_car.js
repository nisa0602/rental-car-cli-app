//create_car.js
const {Command, flags} = require('@oclif/command');
const {Car} = require('../db_car');

class CreateCar extends Command {
    async run() {
        const {
            flags: {car},
        } = this.parse(CreateCar)
        const res = await Car.push({
            car,
            id: Car.value().length,
            rented: false,
            message: `Car ${car} saved`
        }).write()
        this.log(res)
    }
}

CreateCar.description = `Add car 
...
Add new car to the existing list
`

CreateCar.flags ={
    car: flags.string({char: 'n', description: 'car'}),
}

module.exports = CreateCar