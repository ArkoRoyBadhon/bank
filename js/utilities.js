function newInputAmount(inputId){
    const inputField = document.getElementById(inputId);
    const inputFieldString = inputField.value;
    const inputValue = parseFloat(inputFieldString);
    inputField.value = '';
    if(isNaN(inputValue)){
        return 0;
    }
    return inputValue;
}

function previoustAmount(id){
    const fieldCatch = document.getElementById(id);
    const fieldString = fieldCatch.innerText;
    const fieldAmount = parseFloat(fieldString);
    return fieldAmount;
}

function setIndividualvalue(id, total){
    const destination = document.getElementById(id);
    destination.innerText = total;
}

function getBalance(id){
    const balanceCatch = document.getElementById(id);
    const balanceString = balanceCatch.innerText;
    const mainBalance = parseFloat(balanceString);
    return mainBalance;
}

function setBalance(id, total){
        const destination = document.getElementById(id);
        destination.innerText = total;
    }