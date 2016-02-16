'use strict'

function createFullName (first, middle, last) {
  if (!first) {
    throw new Error('Missing required input: firstname')
  }
  if (!last) {
    throw new Error('Missing required input: lastname')
  }

  var name

  if (middle) {
    name = first + ' ' + middle + ' ' + last
  } else {
    name = first + ' ' + last
  }

  return name
}

module.exports = createFullName
