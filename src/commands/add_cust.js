const {Command, flags} = require('@oclif/command');
const {Customer} = require('../db_customer');

class AddCust extends Command {
    async run() {
        const {
            flags: {customer}
        } = this.parse(AddCust)
        const res = await Customer.push({
            // Customer,
            id: Customer.value().length,
            message: `Hello ${customer}`
        }).write()
        this.log(res)
    }
}

AddCust.description = `Adds Customers
...
New Customer
`
AddCust.flags ={
    customer: flags.string({char: 'n', description: 'customer'}),
}

module.exports = AddCust;