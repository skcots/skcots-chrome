var Trade = Backbone.Model.extend({
  defaults: function() {
    return {
      buyPrice: null,
      sellPrice: null,
      quantity: null,
      brokerageRate: 0.02,
      brokerage: 0.0,
      txnCharge: 0.0,
      sebiFees: 0.0,
      securityTxnTax: 0.0,
      serviceTaxBrokerage: 0.0,
      serviceTaxTxnCharge: 0.0,
      stampDuty: 0.0,
      buy: new Transaction(),
      sell: new Transaction(),
    }
  },

  setTransactions: function() {
    this.get('buy').set({
      'quantity': this.get('quantity'),
      'price': this.get('buyPrice'),
      'brokerageRate': this.get('brokerageRate')
    });
    this.get('sell').set({
      'quantity': this.get('quantity'),
      'price': this.get('sellPrice'),
      'brokerageRate': this.get('brokerageRate')
    });
  },

  total: function(key) {
    return this.get('buy').get(key) + this.get('sell').get(key);
  },

  calculate: function() {
    this.setTransactions();
    this.get('buy').calculate();
    this.get('sell').calculate();
    this.set('txnCharge', this.total('txnCharge'));
    this.set('sebiFees', this.total('sebiFees'));
    this.set('securityTxnTax', this.get('sell').get('securityTxnTax'));
    this.set('serviceTaxBrokerage', this.total('serviceTaxBrokerage'));
    this.set('sbcBrokerage', this.total('sbcBrokerage'));
    this.set('serviceTaxTxnCharge', this.total('serviceTaxTxnCharge'));
    this.set('stampDuty', this.total('stampDuty'));
    this.set('brokerage', this.total('brokerage'));
  }
});
