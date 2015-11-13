var React = require('react')

var StringChoice = require('./string-choice')

module.exports = React.createClass({
  displayName: 'Choice',
  render: function() {
    if (this.props.type === 'string') {
      return React.createElement(
        StringChoice,
        this.props) } } })
