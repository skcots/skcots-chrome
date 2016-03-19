var Transaction = Backbone.Model.extend({
  initialize: function() {
    this.bind('change', this.calculate);
  },

  defaults: function() {
    return {
      price: 0.0,
      quantity: 0,
      brokerageRate: 0.0,
      brokerage: 0.0,
      txnCharge: 0.0,
      sebiFees: 0.0,
      securityTxnTax: 0.0,
      serviceTaxBrokerage: 0.0,
      serviceTaxTxnCharge: 0.0,
      stampDuty: 0.0
    }
  },

  totalBrokerage: function() {
    return (this.get('brokerageRate') / 100 * this.get('price')) * this.get('quantity');
  },

  grossPrice: function() {
    return this.get('price') * this.get('quantity');
  },

  netPrice: function() {
    return this.grossPrice() + this.totalBrokerage();
  },

  calculate: function() {
    this.set('securityTxnTax', this.grossPrice() * 0.025 / 100);
    this.set('stampDuty', this.netPrice() * 0.01 / 100);
    this.set('txnCharge', this.netPrice() * 0.00275 / 100);
    this.set('sebiFees', this.netPrice() * 0.0002 / 100);
    this.set('serviceTaxTxnCharge', this.get('txnCharge') * 14.5 / 100);
    this.set('brokerage', this.totalBrokerage());
    this.set('serviceTaxBrokerage', this.totalBrokerage() * 14.5 / 100);
  }
});
