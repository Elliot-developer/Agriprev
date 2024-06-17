function convertUsdToBrl() {
    const amount = document.getElementById('usd-amount').value;
    const resultDiv = document.getElementById('usd-result');

    // Taxa de câmbio fixa para demonstração (1 USD = 5.0 BRL)
    const exchangeRate = 5.35;

    if (amount === '' || isNaN(amount)) {
        resultDiv.innerHTML = 'BRL: R$ 0,00';
        return;
    }

    const convertedAmount = amount * exchangeRate;
    resultDiv.innerHTML = `BRL: R$ ${convertedAmount.toFixed(2)}`;
}

function convertEurToBrl() {
    const amount = document.getElementById('eur-amount').value;
    const resultDiv = document.getElementById('eur-result');

    // Taxa de câmbio fixa para demonstração (1 EUR = 6.5 BRL)
    const exchangeRate = 5.73;

    if (amount === '' || isNaN(amount)) {
        resultDiv.innerHTML = 'BRL: R$ 0,00';
        return;
    }

    const convertedAmount = amount * exchangeRate;
    resultDiv.innerHTML = `BRL: R$ ${convertedAmount.toFixed(2)}`;
}