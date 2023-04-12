// Created by: Graydon Ezzeddin
// Created on: March 2022
// This file contains the JS functions for index.html

"use strict";
/**
 * This function calculates Volume of Triangula Pyramid.
 */
function calculate () {
  // input
  let height = parseFloat(document.getElementById('height-of-pyramid').value);
  let baseEdge = parseFloat(document.getElementById('base-edge-of-pyramid').value);


  // process
  let volume = baseEdge**2*height/3
  let baseArea= baseEdge**2
  // output
  document.getElementById('volume').innerHTML = 'Volume is: ' + volume.toFixed(2) + ' cm²'
}
document.getElementById('baseArea').innerHTML = 'Base Area is: ' + baseArea.toFixed(2) + ' cm²'
}