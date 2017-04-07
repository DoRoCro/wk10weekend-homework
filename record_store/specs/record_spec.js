var Record = require('../record.js')
var a = require('assert')

var disc1 = new Record('Half Man, Half Biscuit', 'Westward Ho! Massive Letdown', 'post-punk', 9.99)

describe('Record', function () {
  it('has artist', function () {
    a.strictEqual(new Record('Artist', 'Title', 'Genre', 9.99).artist, 'Artist')
  })
  it('has title', function () {
    a.strictEqual(new Record('Artist', 'Title', 'Genre', 9.99).title, 'Title')
  })
  it('has genre', function () {
    a.strictEqual(new Record('Artist', 'Title', 'Genre', 9.99).genre, 'Genre')
  })
  it('has price', function () {
    a.strictEqual(new Record('Artist', 'Title', 'Genre', 9.99).price, 9.99)
  })
  it('can print out as string', function () {
    a.strictEqual(disc1.toString(), 'artist=Half Man, Half Biscuit\ntitle=Westward Ho! Massive Letdown\ngenre=post-punk\nprice=9.99\n')
  })
})
