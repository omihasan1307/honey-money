document.getElementById("btn-withdraw").addEventListener("click", function () {
  const withdrawField = document.getElementById("withdraw-field");
  const newWithdrawTotal = withdrawField.value;
  withdrawField.value = "";
  if (isNaN(parseFloat(newWithdrawTotal))) {
    alert("please provide a valid number");
    return;
  }

  const withdrawText = document.getElementById("withdraw-text");
  const previousWithdrawTotal = withdrawText.innerText;

  const balanceTotal = document.getElementById("balance-total");

  if (parseFloat(newWithdrawTotal) > parseFloat(balanceTotal.innerText)) {
    alert("Withdraw over");
    return;
  }
  const currentWithdrawTotal =
    parseFloat(newWithdrawTotal) + parseFloat(previousWithdrawTotal);
  withdrawText.innerText = currentWithdrawTotal;
  const newBalanceTotal =
    parseFloat(balanceTotal.innerText) - parseFloat(newWithdrawTotal);
  balanceTotal.innerText = newBalanceTotal;
});
