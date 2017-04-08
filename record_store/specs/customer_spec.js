var Customer = require('../customer.js')
var a = require('assert')

var customer1 = new Customer('The Record Collector', 100)

describe('Customer', function () {
  it('has name', function () {
    a.strictEqual(customer1.name, 'The Record Collector')
  })

  it('has cash', function () {
    a.strictEqual(customer1.cash, 100)
  })

  it('has a collection', function () {
    a.deepEqual(customer1.collection, [])
  })
})
