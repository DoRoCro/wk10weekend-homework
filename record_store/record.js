var Record = function (artist, title, genre, price) {
  this.artist = artist
  this.title = title
  this.genre = genre
  this.price = price
}

Record.prototype = {
  toString: function () {
    var result = ''
    for (var attr of Object.keys(this)) {
      result = result + attr + '=' + this[attr] + '\n'
    }
    return result
  }
}
module.exports = Record
