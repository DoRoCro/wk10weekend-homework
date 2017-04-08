var Customer = require('../customer.js')
var a = require('assert')

var customer1 = new Customer('The Record Collector', 100)

describe('Customer', function () {
  it('has name', function () {
    a.strictEqual(customer1.name, 'The Record Collector')
  })
})
