// Copyright (c) 2020 Ali Mugamai All rights reserved
//
// Created by: Ali Mugamai
// Created on: oct 2022
// This file contains the JS functions for index.html

"use strict"
/**
 * Check servie worker.
 */
if (navigator.serviceWorker) {
  navigator.serviceWorker.register("/ICS20-02-05-JS/sw.js", {
    scope: "/ICS20-02-05-JS/",
  })
}
/**
 * This function calculates area and perimeter of rectangle.
 */

function calculate() {
  // input
  const hours = parseInt(document.getElementById("hours_worked").value)
  const rate = parseInt(document.getElementById("hourly_rate").value)
  // process
  const pay = hours * rate * 0.82
  const taxes = hours * rate * 0.18
  // output
  document.getElementById("pay").innerHTML = `Your pay will be: $ ${pay.toFixed(
    2
  )}`
  document.getElementById(
    "governmentstake"
  ).innerHTML = `Your pay will be: $ ${taxes.toFixed(2)}`
}
