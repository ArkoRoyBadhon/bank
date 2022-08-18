// function setBalance(id, total){
//         const destination = document.getElementById(id);
//         destination.innerText = total;
//     }


document.getElementById('btn-deposit').addEventListener('click', function () {
    // handle input field of deposit
    const newAmount = newInputAmount('input-deposit');

    // previous deposit amounts
    const prevAmount = previoustAmount('deposit-total');

    // calculate total amount
    const totalAmount = newAmount + prevAmount;

    // set the deposit value into 
    setIndividualvalue('deposit-total', totalAmount);

    // calculate balance area
    const prevBalance = getBalance('balance-total');
    const totalAmountDeposit = prevBalance + newAmount;
    setBalance('balance-total', totalAmountDeposit);

})