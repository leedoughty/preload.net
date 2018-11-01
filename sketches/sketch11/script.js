"use strict";

(function() {
  var greens, pinks, blues;

  function map(num, in_min, in_max, out_min, out_max) {
    return (num - in_min) * (out_max - out_min) / (in_max - in_min) + out_min;
  }

  function rgb(r, g, b) {
    return (
      "rgb(" + Math.floor(r) + ", " + Math.floor(g) + ", " + Math.floor(b) + ")"
    );
    // return `rgb(${r},${g},${b})`
  }

  function onMouseMove(event) {
    changePinkColors(event);
    changeGreenColors(event);
    changeBlueColors(event);
  }

  function changePinkColors() {
    // rgb(255, 142, 162);
    // rgb(255, 235, 59);
    var g = map(event.screenX, 0, window.innerWidth, 142, 235);
    var b = map(event.screenY, 0, window.innerHeight, 162, 59);
    var color = rgb(255, g, b);
    console.log(color);
    pinks.forEach(function(element) {
      element.style.fill = color;
    });
  }

  function changeGreenColors() {
    // rgb(14, 149, 94);
    // rgb(255,165,0)
    var r = map(event.screenX, 0, window.innerWidth, 14, 255);
    var g = map(event.screenX, 0, window.innerWidth, 149, 165);
    var b = map(event.screenX, 0, window.innerWidth, 94, 0);
    var color = rgb(r, g, b);
    greens.forEach(function(element) {
      element.style.fill = color;
    });
  }

  function changeBlueColors() {
    // rgb(72, 178, 232);
    // rgb(232, 72, 185);
    var r = map(event.screenX, 0, window.innerWidth, 72, 232);
    var g = map(event.screenX, 0, window.innerWidth, 178, 72);
    var b = map(event.screenX, 0, window.innerWidth, 232, 185);
    var color = rgb(r, g, b);
    blues.forEach(function(element) {
      element.style.fill = color;
    });
  }

  function init() {
    greens = Array.prototype.slice.call(
      document.getElementsByClassName("green")
    );
    pinks = Array.prototype.slice.call(document.getElementsByClassName("pink"));
    blues = Array.prototype.slice.call(document.getElementsByClassName("blue"));
    window.addEventListener("mousemove", onMouseMove);
  }
  init();
})();
