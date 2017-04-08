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

  it('can sell records', function () {
    customer1.buyRecord(disc1)
    customer1.buyRecord(new Record('artist', 'title', 'genre', 1.00))
    a.deepEqual(customer1.sellRecord(disc1, 2.49), disc1)
    a.strictEqual(customer1.cash, 99.50)
    a.strictEqual(customer1.collection.length, 1)
  })

  it('can return value of collection', function () {
    customer1.buyRecord(new Record('artist1', 'title', 'genre1', 1.00))
    customer1.buyRecord(new Record('artist1', 'title2', 'genre1', 2.00))
    customer1.buyRecord(new Record('artist2', 'title', 'genre2', 3.00))
    a.strictEqual(customer1.collectionValue(), 6)
  })

  it('can return value of genre in collection', function () {
    customer1.buyRecord(new Record('artist1', 'title', 'genre1', 1.00))
    customer1.buyRecord(new Record('artist1', 'title2', 'genre1', 2.00))
    customer1.buyRecord(new Record('artist2', 'title', 'genre2', 3.00))
    a.strictEqual(customer1.collectionValue('genre1'), 3)
  })

  it('can find most valuable record', function () {
    customer1.buyRecord(new Record('artist1', 'title', 'genre1', 1.00))
    customer1.buyRecord(new Record('artist1', 'title2', 'genre1', 2.00))
    customer1.buyRecord(new Record('artist2', 'title', 'genre2', 3.00))
    a.deepEqual(customer1.findMostValuableRecord(), new Record('artist2', 'title', 'genre2', 3.00))
  })

  it('find most valuable record in empty collection as empty record value -1', function () {
    a.deepEqual(customer1.findMostValuableRecord(), new Record('', '', '', -1))
  })

  it('can sort collection by value ascending / descending (in place)', function () {
    var disc1 = new Record('artist1', 'title', 'genre1', 1.00)
    var disc2 = new Record('artist1', 'title2', 'genre1', 2.00)
    var disc3 = new Record('artist2', 'title', 'genre2', 3.00)
    customer1.collection = [disc1, disc2, disc3]
    customer1.sortCollection(-1)
    a.deepEqual(customer1.collection, [disc3, disc2, disc1])
    customer1.sortCollection(1)
    a.deepEqual(customer1.collection, [disc1, disc2, disc3])
  })
})
