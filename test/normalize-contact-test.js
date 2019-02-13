'use strict'

const tap = require('tap')
const normalizeContact = require('../index')
const dsf = require('./data/dsf.json')
const expectedResult = require('./data/contact.json')

const dsfEmptyMiddleName = require('./data/dsf-empty-middlename.json')
const dsfNullMiddleName = require('./data/dsf-null-middlename.json')
const expectedResultEmptyMiddlename = require('./data/contact-empty-middlename.json')

tap.equal(JSON.stringify(expectedResult), JSON.stringify(normalizeContact(dsf)), 'It returns expected result')

tap.equal(JSON.stringify(expectedResultEmptyMiddlename), JSON.stringify(normalizeContact(dsfNullMiddleName)), 'It returns expected result')

tap.equal(JSON.stringify(expectedResultEmptyMiddlename), JSON.stringify(normalizeContact(dsfEmptyMiddleName)), 'It returns expected result')

tap.throws(
  function () {
    normalizeContact()
  },
  { message: 'Missing required input: dsf object' },
  'Throws if dsf object not supplied'
)
