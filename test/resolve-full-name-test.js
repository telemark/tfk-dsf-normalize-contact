'use strict'

var tap = require('tap')
var resolveFullName = require('../lib/resolve-full-name')

tap.throws(
  function () {
    resolveFullName()
  },
  { message: 'Missing required input: firstname' },
  'Throws if firstname not supplied'
)

tap.throws(
  function () {
    resolveFullName('firstname', 'middlename')
  },
  { message: 'Missing required input: lastname' },
  'Throws if lastname not supplied'
)

tap.equal('Gandalf Grå', resolveFullName('Gandalf', '', 'Grå'), 'It returns expected result if no middlename')

tap.equal('Gandalf Georg Grå', resolveFullName('Gandalf', 'Georg', 'Grå'), 'It returns expected result if middlename')
