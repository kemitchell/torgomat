require('tape')('Render Component', function(test) {
  test.plan(1)
  require('./driver')()
    .execute(function() {
      window.ReactDOM.render(
        window.React.createElement(window.Torgomat),
        document.getElementsByClassName('container')[0]) })
    .then()
    .isExisting('//*[contains(text(),"Torgomat")]')
    .then(function(found) {
      test.assert(found, 'shows text "Torgomat"') })
    .end() })
