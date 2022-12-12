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
  navigator.serviceWorker.register("/ICS20-5-05-js/sw.js", {
    scope: "/ICS20-5-05-js/",
  })
}
/**
 * This function calculates area and perimeter of rectangle.
 */

function myButtonClicked() {
  // input
  const lengthA = parseFloat(document.getElementById("length_A").value)
  const lengthB = parseFloat(document.getElementById("length_B").value)
  const lengthC = parseFloat(document.getElementById("length_C").value)
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

  if (sumOfAngles == 180) {
    if (angleA == angleB && angleB == angleC) {
      document.getElementById("answers").innerHTML =
        "<p>equilateral triangle</p>"
    } else if (angleA == angleB) {
      document.getElementById("answers").innerHTML = "<p>isosceles triangle</p>"
    } else {
      document.getElementById("answers").innerHTML = "<p>scalene triangle</p>"
    }
  } else {
    document.getElementById("answers").innerHTML = "<p>not a triangle</p>"
  }
}
