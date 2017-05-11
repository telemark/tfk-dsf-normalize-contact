'use strict'

const resolveBirthDate = require('birthdate-from-id')
const capitalize = require('capitalize')
const resolveFullName = require('./lib/resolve-full-name')

module.exports = (dsf) => {
  if (!dsf) {
    throw new Error('Missing required input: dsf object')
  }

  let contact = {}

  contact.personalIdNumber = dsf.FODT.toString() + dsf.PERS.toString()
  contact.birthDate = resolveBirthDate(`${dsf.FODT}${dsf.PERS}`)
  contact.firstName = capitalize.words(dsf['NAVN-F'].toLowerCase())
  contact.middleName = dsf['NAVN-M'] && dsf['NAVN-M'].length > 0 ? capitalize.words(dsf['NAVN-M'].toLowerCase()) : ''
  contact.lastName = capitalize.words(dsf['NAVN-S'].toLowerCase())
  contact.fullName = resolveFullName(contact.firstName, contact.middleName, contact.lastName)
  contact.address = capitalize.words(dsf.ADR.toLowerCase())
  contact.zip = dsf.POSTN || ''
  contact.city = capitalize.words(dsf.POSTS.toLowerCase())

  return contact
}
