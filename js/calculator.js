class Calculator {
  calculatePercentage = (price1, price2) => {
    price1 = parseFloat(price1);
    price2 = parseFloat(price2);
    return (((price2 - price1) / price1) * 100.0).toFixed(2);
  };

  calculateTarget = (price, percentage) => {
    price = parseFloat(price);
    percentage = parseFloat(percentage);
    return (price + (price * percentage / 100.0)).toFixed(2);
  };
}
