var RecordStore = require('../record_store.js')
var a = require('assert')

var discsRUs = new RecordStore('Seedy CDs', 'Aberdeen')

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
})
