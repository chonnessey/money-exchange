import $ from 'jquery'
import 'bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'
import './css/styles.css'
import CurrencyService from './currency-service'


function getMoney(response) {
  // let country = $('#country').val();
  let euroConversion = currency * response.conversion_rates.EUR
  if(response) {
    $('#results').html(`The conversion in Euros is ${euroConversion}`)
    
  }
}

let currency = $('#dollar').val()



$(document).ready(function() {
  $('#money').submit(function(event) {
    event.preventDefault()
    CurrencyService.getCurrency(currency)
      .then(function(response) {
        getMoney(response)
      })
  })
})