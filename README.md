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
$ npm run setup
```

## Usage

```javascript
'use strict'

var normalizeContact = require('tfk-dsf-normalize-contact')
var dsf = {
            "FODT": "181171",
            "PERS": "12345",
            "INR": "18117108976",
            "FODTAR": "1971",
            "STAT-KD": "1",
            "STAT": "BOSATT",
            "NAVN-S": "GRÅ",
            "NAVN-F": "GANDALF",
            "NAVN-M": "GEORG",
            "NAVN": "GRÅ GANDALF GEORG",
            "ADR": "FYLKESBAKKEN 10",
            "POSTN": "3715",
            "POSTS": "SKIEN",
            "SPES-KD": "0",
            "SPES": "VANLIG BOSATT"
          }

console.log(normalizeContact(dsf))

```

Returns

```javascript
{
  "personalIdNumber": "18117112345",
  "birthDate": "1971-11-18",
  "firstName": "Gandalf",
  "middleName": "Georg",
  "lastName": "Grå",
  "fullName": "Gandalf Georg Grå",
  "address": "Fylkesbakken 10",
  "zip": "3715",
  "city": "Skien"
}
```

## License
[MIT](LICENSE)
