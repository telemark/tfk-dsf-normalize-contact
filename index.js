'use strict'

var capitalize = require('capitalize')
var resolveFullName = require('./lib/resolve-full-name')
var resolveBirthDate = require('./lib/resolve-birth-date')

function normalizeContact (dsf) {
  if (!dsf) {
    throw new Error('Missing required input: dsf object')
  }

  var contact = {}

  contact.firstName = capitalize.words(dsf['NAVN-F'].toLowerCase())
  contact.middleName = capitalize.words(dsf['NAVN-M'].toLowerCase())
  contact.lastName = capitalize.words(dsf['NAVN-S'].toLowerCase())
  contact.fullname = resolveFullName(contact.firstName, contact.middleName, contact.lastName)
  contact.personalIdNumber = dsf.FODT.toString() + dsf.PERS.toString()
  contact.birthDate = resolveBirthDate(dsf.FODT, dsf.FODTAR)
}
