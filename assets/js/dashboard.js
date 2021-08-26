// Get input value function
function getInputValue(inputId) {
    const input = document.getElementById(inputId);
    const inputValue = parseFloat(input.value);
    input.value = '';
    return inputValue;
}
// get total value function
function getTotalValue(totalId) {
    const totalElement = document.getElementById(totalId);
    const total = parseFloat(totalElement.innerText);
    return total;
}
// Update total value
function updateTotal(balanceId, inputAmount) {
    const prevTotal = getTotalValue(balanceId);
    const newTotal = prevTotal + inputAmount;

    // seting new total
    document.getElementById(balanceId).innerText = newTotal;
    return newTotal;
}
// Update balance
function updateBalance(totalId, inputAmount, isAdd) {

    const balanceElement = document.getElementById(totalId);
    const prevBalance = parseFloat(balanceElement.innerText);
    let newBal;
    if (isAdd == true) {
        newBal = prevBalance + inputAmount;
    } else {
        newBal = prevBalance - inputAmount;
    }
    balanceElement.innerText = newBal;
}

// Error throw function
function throwerror(error, show) {
    if (show) {
        document.getElementById(error).style.display = 'block';
    } else {
        document.getElementById(error).style.display = 'none';
    }
}
// Success throw function
function throwSuccessMessage(success, show) {
    if (show) {
        document.getElementById(success).style.display = 'block';
    } else {
        document.getElementById(success).style.display = 'none';
    }
}

// Hide message
function hideMessage(messageId, crossId){
    const message = document.getElementById(messageId);
    document.getElementById(crossId).addEventListener('click', function(){
        message.style.display = 'none';
    });
}

// handling deposit
document.getElementById('deposit-btn').addEventListener('click', function() {
    const inputAmount = getInputValue('deposit-input');

    if (inputAmount > 0) {
        updateTotal('deposit-total', inputAmount);
        updateBalance('balance-total', inputAmount, true);

        // throwerror('depo-error', false);
        throwSuccessMessage('depo-success', true);
        hideMessage('depo-success', 'depo-cross');
    } else {
        throwerror('depo-error', true);
        // throwSuccessMessage('depo-success', false);
    }
});
// handling withdraw
document.getElementById('withdraw-btn').addEventListener('click', function() {
    const inputAmount = getInputValue('withdraw-input');
    const balanceTotal = getTotalValue('balance-total');

    if (inputAmount > 0 && inputAmount <= balanceTotal) {
        updateTotal('withdraw-total', inputAmount);
        updateBalance('balance-total', inputAmount, false);

        // throwerror('withdraw-error', false);
        throwSuccessMessage('withdraw-success', true);
        hideMessage('withdraw-success', 'withdraw-cross');
    } else {
        throwerror('withdraw-error', true);
        throwSuccessMessage('withdraw-success', false);
    }

});