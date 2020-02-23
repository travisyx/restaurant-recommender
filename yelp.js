'use strict';

const yelp = require('yelp-fusion');
const client = yelp.client('p5bQJH1HPyIfJCSGlFS22FkYCWiRiDR1rQEDEfr8_MZUlzrOo4i3CEc8qVDdTdXbk1DmHJdnfuErzo4vuoS1_4tGvZB-augVp9Lg6jGaa9uV-BlBkNzho4QQP7ZRXnYx');

// client.transactionSearch('delivery', {
//     location: 'san diego'
//   }).then(response => {
//       response.jsonBody.businesses.forEach(printName);
//   }).catch(e => {
//     console.log(e);
//   });

client.autocomplete({
    text: 'pizza'
  }).then(response => {
      response.jsonBody.terms.forEach(printText);
    // console.log(response.jsonBody.terms[0].text);
  }).catch(e => {
    console.log(e);
  });
  

  
  function printName(item){
      console.log(item.name);
  }

  function printText(item){
      console.log(item.text);
  }