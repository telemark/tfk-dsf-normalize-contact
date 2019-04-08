[![Build Status](https://travis-ci.org/telemark/tfk-dsf-normalize-contact.svg?branch=master)](https://travis-ci.org/telemark/tfk-dsf-normalize-contact)
[![Coverage Status](https://coveralls.io/repos/telemark/tfk-dsf-normalize-contact/badge.svg?branch=master&service=github)](https://coveralls.io/github/telemark/tfk-dsf-normalize-contact?branch=master)
[![Code Climate](https://codeclimate.com/github/telemark/tfk-dsf-normalize-contact/badges/gpa.svg)](https://codeclimate.com/github/telemark/tfk-dsf-normalize-contact)
[![js-standard-style](https://img.shields.io/badge/code%20style-standard-brightgreen.svg?style=flat)](https://github.com/feross/standard)

# tfk-dsf-normalize-contact

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

```JavaScript
const normalizeContact = require('tfk-dsf-normalize-contact')
const dsf = {
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
  'SPES': 'VANLIG BOSATT',
  'KJONN': 'M',
  'STAT': 'BOSATT',
  'MOR-FODT': '010166',
  'MOR-PERS': '33333',
  'FAR-FODT': '020265',
  'FAR-PERS': '11111',
  'Barn': [
        {
          'BAR-FODT': '020280',
          'BAR-PERS': '99999',
          'BAR-INR': '02028099999',
          'BAR-KJO': 'M'
        },
        {
          'BAR-FODT': '040481',
          'BAR-PERS': '88888',
          'BAR-INR': '04048166666',
          'BAR-KJO': 'K'
        }
      ],
}

console.log(normalizeContact(dsf))

```

Returns

```JavaScript
{
  'personalIdNumber': '24069844444',
  'birthDate': '1998-06-24',
  'firstName': 'Gandalf',
  'middleName': 'Georg',
  'lastName': 'Grå',
  'fullName': 'Gandalf Georg Grå',
  'address': 'Oppfunnet Gate 30',
  'zip': '3717',
  'city': 'Skien',
  'gender': 'Male',
  'alive': true,
  'motherIdNumber': '01016633333',
  'fatherIdNumber': '02026511111',
  'spouseIdNumber': '',
  'children':
  [
    { 'childIdNumber': '02028099999' },
    { 'childIdNumber': '04048188888' }
  ]
}
```

## License

[MIT](LICENSE)
