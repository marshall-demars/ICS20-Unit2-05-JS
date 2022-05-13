// Created by: Marshall
// Created on: Mar 2022
// This file contains the JS functions for index.html

'use strict'
/**
 * This function calculates amount of money made.
 */
function calculate() {
  // input
  const hourlyRate = parseInt(document.getElementById('hourly-rate').value)
  const hoursWorked = parseInt(document.getElementById('hours-worked').value)
  const government = 1.00
  const TAX = 0.18
  
  // process
  var takeHomeIncome = (hourlyRate * hoursWorked) * government
  var taxes = (hourlyRate * hoursWorked) *  TAX
  
   // output
  document.getElementById('user-input').innerHTML = 'Your pay will be: $' + takeHomeIncome.toFixed(2) + '. The government will take: $' + taxes.toFixed(2)
}
