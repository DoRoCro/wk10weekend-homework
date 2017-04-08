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
    return !(this.findIndexInCollection(record) === -1)
  },
  findIndexInCollection: function (record) {
    // named function for findIndex
    return this.collection.findIndex(function (element) {
      return element === record
    })
  },
  collectionValue: function (genre) {
    if (!genre) {
      return this.collection.reduce(function (total, record) {
        return total + record.price
      }, 0)
    } else {
      return this.filteredRecords(genre).reduce(function (total, record) {
        return total + record.price
      }, 0)
    }
  },
  filteredRecords: function (genre) {
    return this.collection.filter(function (record) {
      return record.genre === genre
    })
  }
}

module.exports = Customer
