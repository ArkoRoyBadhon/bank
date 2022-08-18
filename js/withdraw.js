

document.getElementById('btn-withdraw').addEventListener('click', function () {

    //prev balance
    const prevBalance = getBalance('balance-total');


    const newAmount = newInputAmount('input-withdraw');

    // 
    const prevAmount = previoustAmount('withdraw-total');

    // calculate total withdraw
    const totalWithdraw = newAmount + prevAmount;


    if (prevBalance < newAmount) {
        alert('You have not sufficient balance');
        return;
    } else {
        // set the withdraw amount 
        setIndividualvalue('withdraw-total', totalWithdraw);

        // calculate balance area

        const totalAmount = prevBalance - newAmount;
        setBalance('balance-total', totalAmount);
    }

})
