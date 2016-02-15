'use strict'

function resolveBirthDate(fodt, fodtaar) {
  return fodtaar + '-' + fodt.substr(2, 2) + '-' + fodt.substr(0, 2)
}

module.exports = resolveBirthDate
