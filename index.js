var React = require('react')

var Introduction = require('./components/introduction')
var Choices = require('./components/choices')

module.exports = React.createClass({
  displayName: 'Torgomat',
  propTypes: {
    introduction: React.PropTypes.string,
    choices: React.PropTypes.array,
    consequences: React.PropTypes.array,
    constants: React.PropTypes.object,
    template: React.PropTypes.object },
  render: function() {
    return React.DOM.div(
      { className: 'torgomat' },
      [ React.createElement(
          Introduction,
          { introduction: this.props.introduction }),
        React.createElement(
          Choices,
          { choices: this.props.choices }),
        React.createElement(
          Consequences,
          { choices: this.props.choices }),
      ]) } })
