// Fix bind in PhantomJS
Function.prototype.bind = (
  Function.prototype.bind ||
  require('function-bind') )

// Expose browserified modules on window so tests can reference them.
window.ReactDOM = require('react-dom')
window.React = require('react')
window.Torgomat = require('../')
