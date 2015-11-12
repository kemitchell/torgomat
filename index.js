var React = require('react')

module.exports = React.createClass({
  displayName: 'Torgomat',
  propTypes: {
    choices: React.PropTypes.array,
    consequences: React.PropTypes.array,
    constants: React.PropTypes.object,
    template: React.PropTypes.object },
  render: function() {
    return React.DOM.div({}, ['hello there'])
  }
})
