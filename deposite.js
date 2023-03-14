document.getElementById("btn-deposite").addEventListener("click", function () {
  const depositeField = document.getElementById("deposite-field");
  const newDepositeTotal = depositeField.value;

  const depositeText = document.getElementById("deposite-text");
  const previousDepositeTotal = depositeText.innerText;

  const currentDepositeTotal =
    parseFloat(previousDepositeTotal) + parseFloat(newDepositeTotal);
  depositeText.innerText = currentDepositeTotal;

  const balanceTotal = document.getElementById("balance-total");
  const newBalanceTotal =
    parseFloat(newDepositeTotal) + parseFloat(balanceTotal.innerText);
  balanceTotal.innerText = newBalanceTotal;

  depositeField.value = "";
});
