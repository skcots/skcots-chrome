var CalculatorView = Backbone.View.extend({
  template: '#calculator-template',
  events: {
    'change [name="buyPrice"]': 'setBuyPrice',
    'change [name="sellPrice"]': 'setSellPrice',
    'change [name="quantity"]': 'setQuantity',
    'change [name="brokerageRate"]': 'setBrokerageRate',
    'click [name="calculate"]': 'onCalculate'
  },

  data: function() {
    var data = this.model.toJSON();
    data.netProfit = this.model.netProfit();
    return data;
  },

  render: function () {
    var source   = $(this.template).html();
    var template = Handlebars.compile(source);
    var html = template(this.data());
    this.$el.empty().html(html);
  },

  setBuyPrice: function(e) {
    this.model.set('buyPrice', e.target.value);
  },

  setSellPrice: function(e) {
    this.model.set('sellPrice', e.target.value);
  },

  setQuantity: function(e) {
    this.model.set('quantity', e.target.value);
  },

  setBrokerageRate: function(e) {
    this.model.set('brokerageRate', e.target.value);
  },

  onCalculate: function() {
    this.model.calculate();
    this.render();
  }
});
