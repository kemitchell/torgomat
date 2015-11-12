require('tape')('Sanity Check', function(test) {
  test.plan(1)
  require('./driver')()
    .getTitle()
    .then(function(title) {
      test.equal(title, 'Torgomat Test') })
    .end() })
