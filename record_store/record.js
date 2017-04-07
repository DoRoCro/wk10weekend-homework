var Record = function (artist, title, genre, price) {
  this.artist = artist
  this.title = title
  this.genre = genre
  this.price = price
}

Record.prototype = {
  toString: function () {
    var result = ''
    Object.keys(this).forEach(function (attr) {
      result = result + attr + '=' + this[attr] + '\n'
    }.bind(this))
    return result
  }
}
module.exports = Record
