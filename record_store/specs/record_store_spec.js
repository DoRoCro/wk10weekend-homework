var RecordStore = require('../record_store.js')
var a = require('assert')

describe('Record Store', function () {
  it('has name and city', function () {
    a.strictEqual(new RecordStore('Name', 'City').name, 'Name')
    a.strictEqual(new RecordStore('Name', 'City').city, 'City')
  })
})
