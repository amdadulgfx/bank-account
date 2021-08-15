// deposit count 
document.getElementById('deposit-button').addEventListener('click', function () {
    const depositInput = document.getElementById('deposit-input');
    const depositAmountText = depositInput.value;
    const depositAmount = parseFloat(depositAmountText);
    // console.log(depositAmount);
    const depositTotal = document.getElementById('deposit-total');
    const depositTotalText = depositTotal.innerText;
    const newDepositTotal = parseFloat(depositTotalText);
    // console.log(newDepositTotal);
    depositTotal.innerText = depositAmount + newDepositTotal;
    //update balance 
    const balanceTotal = document.getElementById('balance-total');
    const balanceTotalText = balanceTotal.innerText;
    // console.log(balanceTotalText)
    const previousBalanceTotal = parseFloat(balanceTotalText);
    const newBalanceTotal = depositAmount + previousBalanceTotal;
    balanceTotal.innerText = newBalanceTotal;
    depositInput.value = '';
});
//withdraw count 
document.getElementById('withdraw-button').addEventListener('click', function () {
    const withdrawInput = document.getElementById('withdraw-input');
    const withdrawAmountText = withdrawInput.value;
    const withdrawAmount = parseFloat(withdrawAmountText);

    const withdrawTotal = document.getElementById('withdraw-total');
    const withdrawTotalText = withdrawTotal.innerText;
    const previousWithdrawTotal = parseFloat(withdrawTotalText);
    withdrawTotal.innerText = withdrawAmount + previousWithdrawTotal;

    //update balance 
    const balanceTotal = document.getElementById('balance-total');
    const balanceTotalText = balanceTotal.innerText;
    const previousBalanceTotal = parseFloat(balanceTotalText);
    balanceTotal.innerText = previousBalanceTotal - withdrawAmount;
    //clear input amount
    withdrawInput.value = '';
})