function getDataCurrency(){
  const selectOfCurrency = document.getElementById('of-currency');
  const ofCurrency = selectOfCurrency.options[selectOfCurrency.selectedIndex].value;

  const selectToCurrency = document.getElementById('for-currency');
  const toCurrency = selectToCurrency.options[selectToCurrency.selectedIndex].value;

  const value = parseFloat( document.getElementById('value').value);

  return {
    ofCurrency,
    toCurrency,
    value

  }
}
function getTariff(){
  const br = 1;
  const usd = 5.235;
  const eur = 5.96;
  const clp = 0.00649;
  return {
    br,
    usd,
    eur,
    clp
  }
}

function convertBr(){
    const { ofCurrency, toCurrency, value} = getDataCurrency();
    const { br,usd, eur, clp} = getTariff();
    let sum = 0;
    let valueOne;
    let valueTwo;

    if(ofCurrency  === toCurrency ) {
      window.alert('Está selecionando a mesma moeda')

    } else if (ofCurrency === 'BR' && toCurrency === 'USD'){
        valueOne = br;
        valueTwo = usd;
        sum += (value * valueOne) / valueTwo;
        document.getElementById('text-currency').innerHTML = "BRL " + value.toFixed(2).replace('.', ',') + " =" ;
        document.getElementById('conversion').innerHTML = "USD " + sum.toFixed(2).replace('.', ',');
    } else if(ofCurrency === 'BR' && toCurrency === 'EUR'){
        valueOne = br;
        valueTwo = eur;
        sum += (value * valueOne) / valueTwo;
        document.getElementById('text-currency').innerHTML = "BRL " + value.toFixed(2).replace('.', ',') + " =" ;
        document.getElementById('conversion').innerHTML = "EUR " + sum.toFixed(2).replace('.', ',');
    } else if(ofCurrency === 'BR' && toCurrency === 'CLP'){
        valueOne = br;
        valueTwo = clp;
        sum += (value * valueOne) / valueTwo;
        document.getElementById('text-currency').innerHTML = "BRL " + value.toFixed(2).replace('.', ',') + " =" ;
        document.getElementById('conversion').innerHTML = "CLP " + sum.toFixed(4).replace('.', ',') ;

    }
  return;


}

function convertUSD(){``
  const { ofCurrency, toCurrency, value} = getDataCurrency();
  const { br,usd, eur, clp} = getTariff();
  let sum = 0;
  let valueOne;
  let valueTwo;

  if (ofCurrency === 'USD' && toCurrency === 'BR'){
      valueOne = usd;
      valueTwo = br;
      sum += (value * valueOne) / valueTwo;
      document.getElementById('text-currency').innerHTML = "USD " + value.toFixed(2).replace('.', ',') + " =" ;
      document.getElementById('conversion').innerHTML = "BRL " + sum.toFixed(2).replace('.', ',');
  } else if(ofCurrency === 'USD' && toCurrency === 'EUR'){
      valueOne = usd;
      valueTwo = eur;
      sum += (value * valueOne) / valueTwo;
      document.getElementById('text-currency').innerHTML = "USD " + value.toFixed(2).replace('.', ',') + " =" ;
      document.getElementById('conversion').innerHTML = "EUR " + sum.toFixed(2).replace('.', ',');
  } else if(ofCurrency === 'USD' && toCurrency === 'CLP'){
      valueOne = usd;
      valueTwo = clp;
      sum += (value * valueOne) / valueTwo;
      document.getElementById('text-currency').innerHTML = "USD " + value.toFixed(2).replace('.', ',') + " =" ;
      document.getElementById('conversion').innerHTML = "CLP " + sum.toFixed(4).replace('.', ',');

  }
return;


}
function convertEUR(){
  const { ofCurrency, toCurrency, value} = getDataCurrency();
  const { br,usd, eur, clp} = getTariff();
  let sum = 0;
  let valueOne;
  let valueTwo;

  if (ofCurrency === 'EUR' && toCurrency === 'BR'){
      valueOne = eur;
      valueTwo = br;
      sum += (value * valueOne) / valueTwo;
      document.getElementById('text-currency').innerHTML = "EUR " + value.toFixed(2).replace('.', ',') + " =" ;
      document.getElementById('conversion').innerHTML = "BRL " + sum.toFixed(2).replace('.', ',');
  } else if(ofCurrency === 'EUR' && toCurrency === 'USD'){
      valueOne = eur;
      valueTwo = usd;
      sum += (value * valueOne) / valueTwo;
      document.getElementById('text-currency').innerHTML = "EUR " + value.toFixed(2).replace('.', ',') + " =" ;
      document.getElementById('conversion').innerHTML = "USD " + sum.toFixed(2).replace('.', ',');
  } else if(ofCurrency === 'EUR' && toCurrency === 'CLP'){
      valueOne = eur;
      valueTwo = clp;
      sum += (value * valueOne) / valueTwo;
      document.getElementById('text-currency').innerHTML = "EUR " + value.toFixed(2).replace('.', ',') + " =" ;
      document.getElementById('conversion').innerHTML = "CLP " + sum.toFixed(4).replace('.', ',');

  }
return;


}

function convertCLP(){
  const { ofCurrency, toCurrency, value} = getDataCurrency();
  const { br,usd, eur, clp} = getTariff();
  let sum = 0;
  let valueOne;
  let valueTwo;

   if (ofCurrency === 'CLP' && toCurrency === 'BR'){
      valueOne = clp;
      valueTwo = br;
      sum += (value * valueOne) / valueTwo;
      document.getElementById('text-currency').innerHTML = "CLP " + value.toFixed(2).replace('.', ',') + " =" ;
      document.getElementById('conversion').innerHTML = "BRL " + sum.toFixed(2).replace('.', ',');
  } else if(ofCurrency === 'CLP' && toCurrency === 'USD'){
      valueOne = clp;
      valueTwo = usd;
      sum += (value * valueOne) / valueTwo;
      document.getElementById('text-currency').innerHTML = "CLP " + value.toFixed(2).replace('.', ',') + " =" ;
      document.getElementById('conversion').innerHTML = "USD " + sum.toFixed(2).replace('.', ',');
  } else if(ofCurrency === 'CLP' && toCurrency === 'EUR'){
      valueOne = clp;
      valueTwo = eur;
      sum += (value * valueOne) / valueTwo;
      document.getElementById('text-currency').innerHTML = "CLP " + value.toFixed(2).replace('.', ',') + " =" ;
      document.getElementById('conversion').innerHTML = "EUR " + sum.toFixed(4).replace('.', ',');

  }
return;


}

function toConvert(){
  convertBr();
  convertUSD();
  convertEUR();
  convertCLP();
}

