Handlebars.registerHelper('amount', function(value) {
  return '₹' + Math.round(value * 100) / 100;
});
