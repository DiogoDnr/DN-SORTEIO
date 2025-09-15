console.log("Hello, World!");


const conveterButton = document.querySelector('.convert-button');
const selectCurrency = document.querySelector('.select-currency');

const currencyName = document.querySelectorAll('.currency')[1];
const currencyFlag = document.querySelectorAll('.bandeira')[1];

function convertCurrency() {
    const inputCurrencyValue = document.querySelector('.input-curryce').value;
    const curryceValueToConvert = document.querySelector('.currency-value-to-convert');
    const curryceValueToConverted = document.querySelector('.currency-value');


    const dolartoday = 5.55;
    const eurotoday = 6.50;


    if (selectCurrency.value == 'Dolar') {
        curryceValueToConverted.innerHTML = new Intl.NumberFormat('en-US', {
            style: 'currency',
            currency: 'USD',
        }).format(inputCurrencyValue / dolartoday);
    }
    if (selectCurrency.value == 'Euro') {
        curryceValueToConverted.innerHTML = new Intl.NumberFormat('de-DE', {
            style: 'currency',
            currency: 'EUR',
        }).format(inputCurrencyValue / eurotoday);
    }

    curryceValueToConvert.innerHTML = new Intl.NumberFormat('pt-BR', {
        style: 'currency',
        currency: 'BRL',
    }).format(inputCurrencyValue);



    selectCurrency.addEventListener('change', function () {
    if (selectCurrency.value === 'Dolar') {
        currencyName.innerText = 'Dolar';
        currencyFlag.src = 'img/usa.png';
        currencyFlag.alt = 'Logo- moeda americana';
    } else if (selectCurrency.value === 'Euro') {
        currencyName.innerText = 'Euro';
        currencyFlag.src = 'img/euro.png'; // Certifique-se de ter essa imagem na pasta img
        currencyFlag.alt = 'Logo- moeda euro';
    }
});

}

conveterButton.addEventListener('click', convertCurrency)




// `R$ ${inputCurrencyValue}`;
//`US$ ${coverter.toFixed(2)}`;