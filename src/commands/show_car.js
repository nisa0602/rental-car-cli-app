const {Command} = require('@oclif/command');
const chalk = require('chalk');
const {Car} = require('../db_car');
const {Customer} = require('../db_customer');

class ShowCar extends Command {
    async run() {
        // const cust = await Customer.sortBy('id').value()
        // cust.forEach(({id, customer}) => {
        //     this.log(`customer : ${id}`)
        // })
        const showed = await Car.sortBy('id').value()
        showed.forEach(({id, car, rented}) => {
            this.log(
                `${chalk.magenta(id)} ${chalk.yellowBright(car)} ${rented ? chalk.red('RENTED') : chalk.green('FREE')} `
            )
        })
    }
}

ShowCar.description = `show existing car list
...
Show all the cars
`

module.exports = ShowCar