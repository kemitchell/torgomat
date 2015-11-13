var React = require('react')

var Choice = require('./choice')

module.exports = React.createClass({
  displayName: 'Choices',
  render: function() {
    return React.DOM.form(
      { className: 'choices' },
      this.props.choices.map(function(choice) {
        return React.createElement(Choice, choice) }) ) } })
