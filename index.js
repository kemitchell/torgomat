var React = require('react')

var Choices = require('./choices')

module.exports = React.createClass({
  displayName: 'Torgomat',
  propTypes: {
    choices: React.PropTypes.array },
  render: function() {
    return React.DOM.div(
      { className: 'Torgomat' },
      [ React.createElement(
          Choices,
          { choices: this.props.choices }),
        React.DOM.p(null, 'Torgomat') ]) } })
