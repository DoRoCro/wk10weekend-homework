var Customer = require('../customer.js')
var a = require('assert')
var Record = require('../record.js')

var customer1
var disc1
var unaffordableDisc2

describe('Customer', function () {
  beforeEach('Before Each:', function () {
    customer1 = new Customer('The Record Collector', 100)
    disc1 = new Record('Half Man, Half Biscuit', 'Westward Ho! Massive Letdown', 'post-punk', 1.99)
    unaffordableDisc2 = new Record('The Beatles', 'First Pressing Vintage Love Me Do', '60s', 5010.50)
  })

  it('has name', function () {
    a.strictEqual(customer1.name, 'The Record Collector')
  })

  it('has cash', function () {
    a.strictEqual(customer1.cash, 100)
  })

  it('has a collection', function () {
    a.deepEqual(customer1.collection, [])
  })

  it('can buy within available cash', function () {
    customer1.buyRecord(disc1)
    a.strictEqual(customer1.cash, 98.01)
    customer1.buyRecord(unaffordableDisc2)
    a.strictEqual(customer1.cash, 98.01)
  })
})
