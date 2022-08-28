fetch('https://economia.awesomeapi.com.br/json/last/USD-BRL,EUR-BRL,BTC-BRL').then(function (response) {
     return response.json();
}).then(function (data) {
     console.log(data.USDBRL.low);

     const btnConvertCurrency = document.getElementById("btnConvertCurrency");

     btnConvertCurrency.onclick = () => {
          const results = document.getElementById("results");
          results.classList.remove('d-none');
          const currencyMoney = document.getElementById("currencyMoney").value.replace(',','.');
          const currencyConverted = currencyMoney * (1/data.USDBRL.low);
          document.getElementById("currencyConverted").value = "R$ " + currencyConverted.toFixed(2);
     }

});










