var React = require('react')

module.exports = React.createClass({
  displayName: 'Introduction',
  render: function() {
    return React.DOM.p(
      { className: 'introduction' },
      [ this.props.introduction ]) } })
