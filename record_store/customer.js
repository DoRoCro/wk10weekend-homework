var Customer = function (name, starterCash) {
  this.name = name
  this.cash = starterCash
  this.collection = []
}

Customer.prototype = {
  buyRecord: function (record) {
    // consumes record if bought, else returns it
    // experiment with mixed reutrn types...
    if (this.canBuyRecord(record)) {
      this.collection.push(record)
      this.cash -= record.price
      return true
    }
    return record
  },
  canBuyRecord: function (record) {
    return (this.cash >= record.price)
  }
}

module.exports = Customer
