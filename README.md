[![Build Status](https://travis-ci.org/telemark/tfk-dsf-normalize-contact.svg?branch=master)](https://travis-ci.org/telemark/tfk-dsf-normalize-contact)
[![Coverage Status](https://coveralls.io/repos/telemark/tfk-dsf-normalize-contact/badge.svg?branch=master&service=github)](https://coveralls.io/github/telemark/tfk-dsf-normalize-contact?branch=master)
[![Code Climate](https://codeclimate.com/github/telemark/tfk-dsf-normalize-contact/badges/gpa.svg)](https://codeclimate.com/github/telemark/tfk-dsf-normalize-contact)
[![js-standard-style](https://img.shields.io/badge/code%20style-standard-brightgreen.svg?style=flat)](https://github.com/feross/standard)
# tfk-dsf-normalize-contact

[![Greenkeeper badge](https://badges.greenkeeper.io/telemark/tfk-dsf-normalize-contact.svg)](https://greenkeeper.io/)
Maps contact information from dsf to something more useful

## Installation

From npm

```sh
$ npm install tfk-dsf-normalize-contact
```

From GitHub

```sh
$ git clone 
```

cd into directory and run setup

```sh
$ npm install
```

## Usage

```javascript
'use strict'

var normalizeContact = require('tfk-dsf-normalize-contact')
var dsf = {
  'FODT': '181171',
  'PERS': '12345',
  'INR': '18117108976',
  'FODTAR': '1971',
  'STAT-KD': '1',
  'STAT': 'BOSATT',
  'NAVN-S': 'GRÅ',
  'NAVN-F': 'GANDALF',
  'NAVN-M': 'GEORG',
  'NAVN': 'GRÅ GANDALF GEORG',
  'ADR': 'FYLKESBAKKEN 10',
  'POSTN': '3715',
  'POSTS': 'SKIEN',
  'SPES-KD': '0',
  'SPES': 'VANLIG BOSATT'
}

console.log(normalizeContact(dsf))

```

Returns

```javascript
{
  'personalIdNumber': '18117112345',
  'birthDate': '1971-11-18',
  'firstName': 'Gandalf',
  'middleName': 'Georg',
  'lastName': 'Grå',
  'fullName': 'Gandalf Georg Grå',
  'address': 'Fylkesbakken 10',
  'zip': '3715',
  'city': 'Skien'
}
```

## License
[MIT](LICENSE)