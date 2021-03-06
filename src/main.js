import $ from 'jquery'
import 'bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'
import './css/styles.css'
import CurrencyService from './currency-service'


function getMoney(response) {
  let country = $('#country').val();
  let euroConversion = $('#dollar').val() * response.conversion_rates.EUR
  let guatemalaConversion = $('#dollar').val() * response.conversion_rates.GTQ
  let hungaryConversion = $('#dollar').val() * response.conversion_rates.HUF
  let argentinaConversion = $('#dollar').val() * response.conversion_rates.ARS
  let australiaConversion = $('#dollar').val() * response.conversion_rates.AUD
  let epiCountryConversion = response.conversion_rates.KPW
  if(country === 'euro') {
    $('#results').html(`The conversion in Euros is ${euroConversion}`)
  } else if(country === 'guatemala') {
    $('#results').html(`The conversion in Guatemalan Quetzals is ${guatemalaConversion}`)
  } else if(country === 'hungary') {
    $('#results').html(`The conversion in Hungarian Forints is ${hungaryConversion}`)
  } else if(country === 'argentina') {
    $('#results').html(`The conversion in Argentinian Pesos is ${argentinaConversion}`)
  } else if(country === 'australia') {
    $('#results').html(`The conversion in Australian Dollars is ${australiaConversion}`)
  } else if(country === 'epicountry') {
    $('#results').html(`Oops! There's been an error: ${epiCountryConversion}.`)
  } else {
    $('#error').html(`Oops! There's been an error: ${response.message}.`)
  }
}






$(document).ready(function() {
  $('#money').submit(function(event) {
    event.preventDefault()
    CurrencyService.getCurrency()
      .then(function(response) {
        getMoney(response)
      })
      .catch(function(error) {
        $('#results').html(`Oops! something went wrong: ${error}`)
      })
  })
})