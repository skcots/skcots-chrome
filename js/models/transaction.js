var Transaction = Backbone.Model.extend({
  initialize: function() {
    this.bind('change', this.calculate);
  },

  defaults: function() {
    return {
      price: 0.0,
      quantity: 0,
      txnCharge: 0.0,
      sebiFees: 0.0,
      securityTxnTax: 0.0,
      serviceTaxBrokerage: 0.0,
      sbcBrokerage: 0.0,
      serviceTaxTxnCharge: 0.0,
      stampDuty: 0.0
    }
  },

  grossPrice: function() {
    return this.get('price') * this.get('quantity');
  },

  netPrice: function() {
    return this.grossPrice();
  },

  calculate: function() {
    this.set('securityTxnTax', this.netPrice() * 0.1 / 100);
    console.log(this.toJSON());
  }
});
