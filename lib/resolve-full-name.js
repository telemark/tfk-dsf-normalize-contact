'use strict'

function createFullName (first, middle, last) {
  var name
  if (middle) {
    name = first + ' ' + middle + ' ' + last
  } else {
    name = first + ' ' + last
  }

  return name
}

module.exports = createFullName
