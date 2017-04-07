var RecordStore = require('../record_store.js')
var a = require('assert')
var Record = require('../record.js')

var discsRUs = new RecordStore('Seedy CDs', 'Aberdeen')
var disc1 = new Record('Half Man, Half Biscuit', 'Westward Ho! Massive Letdown', 'post-punk', 1.99)
var disc2 = new Record('Half Man, Half Biscuit', 'The Trumpton Riots', 'post-punk', 12.99)

describe('Record Store', function () {
  it('has name and city', function () {
    a.strictEqual(new RecordStore('Name', 'City').name, 'Name')
    a.strictEqual(discsRUs.city, 'Aberdeen')
  })

  it('has an inventory', function () {
    a.deepEqual(new RecordStore('Name', 'City').inventory, [])
  })

  it('has a balance starting at zero', function () {
    a.strictEqual(discsRUs.balance, 0)
  })

  it('can add records to inventory', function () {
    discsRUs.add(disc1)
    discsRUs.add(disc2)
    a.strictEqual(discsRUs.inventory.length, 2)
  })
})
