var CalculatorView = Backbone.View.extend({
  template: '#calculator-template',
  events: {
    'change [name="buyPrice"]': 'setBuyPrice',
    'change [name="sellPrice"]': 'setSellPrice',
    'change [name="quantity"]': 'setQuantity'
  },

  data: function() {
    var data = this.model.toJSON();
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
    this.render();
  },

  setSellPrice: function(e) {
    this.model.set('sellPrice', e.target.value);
    this.render();
  },

  setQuantity: function(e) {
    this.model.set('quantity', e.target.value);
    this.render();
  }
});
