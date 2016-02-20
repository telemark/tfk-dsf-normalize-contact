'use strict'

var tap = require('tap')
var normalizeContact = require('../index')
var dsf = require('./data/dsf.json')
var expectedResult = require('./data/contact.json')

var dsfEmptyMiddleName = require('./data/dsf-empty-middlename.json')
var expectedResultEmptyMiddlename = require('./data/contact-empty-middlename.json')

tap.equal(JSON.stringify(expectedResult), JSON.stringify(normalizeContact(dsf)), 'It returns expected result')

tap.equal(JSON.stringify(expectedResultEmptyMiddlename), JSON.stringify(normalizeContact(dsfEmptyMiddleName)), 'It returns expected result')

tap.throws(
  function () {
    normalizeContact()
  },
  {message: 'Missing required input: dsf object'},
  'Throws if dsf object not supplied'
)
