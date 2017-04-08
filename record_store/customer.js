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
  },
  sellRecord: function (record, soldFor) {
    if (this.canSellRecord(record)) {
      this.cash += soldFor
      return this.collection.splice(this.findIndexInCollection(record), 1)[0]
    }
  },
  canSellRecord: function (record) {
    // can only sell records in collection
    // console.log(this.collection)
    // console.log(this.collection[(this.findIndexInCollection(record))])
    return !(this.findIndexInCollection(record) === -1)
  },
  findIndexInCollection: function (record) {
    return this.collection.findIndex(function (element) {
      return element === record
    })
  }
}

module.exports = Customer
