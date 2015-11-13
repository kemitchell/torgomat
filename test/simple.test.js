require('tape')('Simplest Terms', function(test) {
  test.plan(2)
  require('./driver')()
    // Render Torgomat
    .execute(function() {
      window.ReactDOM.render(
        window.React.createElement(
          window.Torgomat,
          { choices: [
              { name: 'Name',
                label: 'Your name',
                type: 'string' } ] }),
        document.getElementsByClassName('container')[0]) })
    .then()
    // Check for form showing choice.
    .isExisting('//input[@name="Name"]')
    .then(function(found) {
      test.assert(found, 'shows a "Name" input') })
    .getText('//label[@for="Name"]')
    .then(function(text) {
      test.equal(
        text, 'Your name',
        'shows label text') })
    .end() })
