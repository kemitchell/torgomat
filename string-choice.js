var React = require('react')

module.exports = React.createClass({
  displayName: 'StringChoice',
  render: function() {
    return React.DOM.div(
      { className: 'StringChoice' },
      [ React.DOM.label(
          { htmlFor: this.props.name },
          [ this.props.label ]),
        React.DOM.input(
          { name: this.props.name,
            type: 'text' }) ]) } })
