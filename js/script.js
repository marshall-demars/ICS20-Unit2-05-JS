// Created by: Marshall
// Created on: Mar 2022
// This file contains the JS functions for index.html

'use strict'
/**
 * This function calculates amount of money made.
 */
function calculate () {
  // input
  const hourlyRate = parseInt(document.getElementById('hourly-rate').value)
  const hoursWorked = parseInt(document.getElementById('hours-worked').value)
  const government = (1.00 - 0.18)
  
  // process
  const takeHomeIncome = (hourlyRate * hoursWorked) * government
  const taxes = (hourlyRate * hoursWorked) *  0.18
  
   // output
  document.getElementById('take-home-income').innerHTML = 'Your pay will be: $' + takeHomeIncome.toFixed(2)
  document.getElementById('government-taxes').innerHTML = 'The government will take: $' + taxes.toFixed(2)
}
