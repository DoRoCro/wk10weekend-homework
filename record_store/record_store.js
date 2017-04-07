var RecordStore = function (name, city) {
  this.name = name
  this.city = city
  this.inventory = []
  this.balance = 0
}

RecordStore.prototype = {
  add: function (record) {
    this.inventory.push(record)
  },
  listInventory: function () {
    return this.inventory.reduce(function (a, b) {
      return a + b.toString() + '\n'
    }, '')
  },
  sell: function (record) {
    // find record in inventory, return if not found
    var whereItIs = this.inventory.indexOf(record)
    if (whereItIs === -1) return
    // splice out from inventory
    var sold = this.inventory.splice(whereItIs, 1)
    // update balance
    this.balance += sold[0].price
  }
}

module.exports = RecordStore
