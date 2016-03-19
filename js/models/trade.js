var Trade = Backbone.Model.extend({
  initialize: function() {
    this.bind('change', this.setTransactions);
  },

  defaults: function() {
    return {
      buyPrice: 0.0,
      sellPrice: 0.0,
      quantity: 0.0,
      txnCharge: 0.0,
      sebiFees: 0.0,
      securityTxnTax: 0.0,
      serviceTaxBrokerage: 0.0,
      sbcBrokerage: 0.0,
      serviceTaxTxnCharge: 0.0,
      stampDuty: 0.0,
      buy: new Transaction(),
      sell: new Transaction(),
    }
  },

  setTransactions: function() {
    this.get('buy').set('quantity', this.get('quantity'));
    this.get('buy').set('price', this.get('buyPrice'));
    this.get('sell').set('quantity', this.get('quantity'));
    this.get('sell').set('price', this.get('sellPrice'));
    this.calculate();
  },

  calculate: function() {
    this.set('securityTxnTax', this.get('buy').get('securityTxnTax') + this.get('sell').get('securityTxnTax'));
  }
});
