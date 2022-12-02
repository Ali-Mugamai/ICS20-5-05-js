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
  const lengthA = parseFloat(document.getElementById("lengthA").value)
  const lengthB = parseFloat(document.getElementById("lengthB").value)
  const lengthC = parseFloat(document.getElementById("lengthC").value)
  cpms
  // process
  const angleA =
    Math.acos(
      (lengthB ** 2 + lengthC ** 2 - lengthA ** 2) / (2 * lengthB * lengthC)
    ) *
    (180 / Math.PI)
  const angleB =
    Math.acos(
      (lengthC ** 2 + lengthA ** 2 - lengthB ** 2) / (2 * lengthC * lengthA)
    ) *
    (180 / Math.PI)
  const angleC =
    Math.acos(
      (lengthA ** 2 + lengthB ** 2 - lengthC ** 2) / (2 * lengthA * lengthB)
    ) *
    (180 / Math.PI)

  const sumOfAngles =
    Number(angleA.toFixed(2)) +
    Number(angleB.toFixed(2)) +
    Number(angleC.toFixed(2))
  // output
  document.getElementById("pay").innerHTML =
    "<p> Your pay will be:" + sumOfAngles + "</p>"
}
