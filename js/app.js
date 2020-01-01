document.onreadystatechange = () => {
  const button1 = document.getElementById("calculate-percentage");
  button1.onclick = calculatePercentage;
  const button2 = document.getElementById("calculate-target");
  button2.onclick = calculateTarget;
}

calculatePercentage = () => {
  const price1 = document.getElementById("price1").value;
  const price2 = document.getElementById("price2").value;
  const result = new Calculator().calculatePercentage(price1, price2);
  document.getElementById('percentage-result').innerText = `${result}%`;
};

calculateTarget = () => {
  const price1 = document.getElementById("price1").value;
  const percentage = document.getElementById("percentage").value;
  const result = new Calculator().calculateTarget(price1, percentage);
  document.getElementById('target-result').innerText = `${result}`;
};
