import $ from 'jquery'
import 'bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'
import './css/styles.css'
import CurrencyService from './currency-service'


function getMoney(response) {
  let country = $('#country').val();
  let euroConversion = $('#dollar').val() * response.conversion_rates.EUR
  if(response) {
    if(country === 'euro') {
      $('#results').html(`The conversion in Euros is ${euroConversion}`)
    }
  }
}





$(document).ready(function() {
  $('#money').submit(function(event) {
    event.preventDefault()
    CurrencyService.getCurrency()
      .then(function(response) {
        getMoney(response)
      })
  })
})