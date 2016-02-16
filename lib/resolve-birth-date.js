'use strict'

function resolveBirthDate (fodt, fodtaar) {
  if (!fodt) {
    throw new Error('Missing required input: fodt')
  }

  if (!fodtaar) {
    throw new Error('Missing required input: fodtaar')
  }

  var date = fodt.toString().replace(/\D/g, '')
  var year = fodtaar.toString().replace(/\D/g, '')

  if (date.length !== 6) {
    throw new Error('Wrong input: fodt must be 6 digits')
  }

  if (year.length !== 4) {
    throw new Error('Wrong input: fodtaar must be 4 digits')
  }

  return fodtaar + '-' + fodt.substr(2, 2) + '-' + fodt.substr(0, 2)
}

module.exports = resolveBirthDate
