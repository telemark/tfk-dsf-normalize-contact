'use strict'

var tap = require('tap')
var resolveBirthdate = require('../lib/resolve-birth-date')

tap.throws(
  function () {
    resolveBirthdate()
  },
  {message: 'Missing required input: fodt'},
  'Throws if fodt not supplied'
)

tap.throws(
  function () {
    resolveBirthdate('181171')
  },
  {message: 'Missing required input: fodtaar'},
  'Throws if fodtaar not supplied'
)

tap.throws(
  function () {
    resolveBirthdate('18117', '1971')
  },
  {message: 'Wrong input: fodt must be 6 digits'},
  'Throws if fodt not 6 digits'
)

tap.throws(
  function () {
    resolveBirthdate('181171', '197')
  },
  {message: 'Wrong input: fodtaar must be 4 digits'},
  'Throws if fodtaar not 4 digits'
)

tap.equal('1971-11-18', resolveBirthdate('181171', '1971'), 'It returns expected result')
