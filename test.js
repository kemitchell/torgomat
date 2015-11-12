var React = require('react')
var Torgomat = require('./')

Function.prototype.bind = (
  Function.prototype.bind ||
  require('function-bind') )

document.addEventListener('DOMContentLoaded', function() {
  var element = document.getElementsByClassName('container')[0]
  React.render(React.createElement(Torgomat), element) })
