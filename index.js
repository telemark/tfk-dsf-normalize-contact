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
  contact.address = capitalize.words(dsf.ADR ? dsf.ADR.toLowerCase() : '')
  contact.zip = dsf.POSTN || ''
  contact.city = capitalize.words(dsf.POSTS ? dsf.POSTS.toLowerCase() : '')
  contact.gender = dsf.KJONN ? (dsf.KJONN === 'M' ? 'Male' : 'Female') : ''
  contact.alive = dsf.STAT ? (dsf.STAT !== 'DØD' ? true : false) : ''
  contact.motherIdNumber = dsf['MOR-FODT'] ? ( dsf['MOR-FODT'].toString() + dsf['MOR-PERS'].toString() ) : ''
  contact.fatherIdNumber = dsf['FAR-FODT'] ? ( dsf['FAR-FODT'].toString() + dsf['FAR-PERS'].toString() ) : ''
  contact.spouseIdNumber = dsf['EKT-FODT'] ? ( dsf['EKT-FODT'].toString() + dsf['EKT-PERS'].toString() ) : ''
  contact.children = []
  if (dsf['Barn']) {
    contact.children = Array.isArray(dsf['Barn']) ? dsf['Barn'] : [dsf['Barn']]
    contact.children = contact.children.map( child => (
      {
        childIdNumber: child['BAR-FODT'].toString() + child['BAR-PERS'].toString()
      }
    ))
  }

  return contact
}
