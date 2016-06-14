/**
 * Created by Anton on 14-6-2016.
 */
angular.module('wfpcsFrontApp')
  .service('adminService', function () {

    var self = this;
    var users = [
      {
        "customer": {
          "id": 1,
          "companyName": "MOJO",
          "address": "zernikedreef 11",
          "zipcode": "2333 CK",
          "city": "Leiden",
          "description": null
        },
        "roles": [
          {
            "name": "GUEST"
          }
        ],
        "permissions": [
          {
            "name": "CURRENTPROCESS"
          }
        ],
        "id": 2,
        "username": "test",
        "password": null,
        "firstName": "Sjaak",
        "lastName": "Roos",
        "salutation": "dhr.",
        "emailAddress": null,
        "name": "test"
      },
      {
        "customer": {
          "id": 1,
          "companyName": "MOJO",
          "address": "zernikedreef 11",
          "zipcode": "2333 CK",
          "city": "Leiden",
          "description": null
        },
        "roles": [
          {
            "name": "GUEST"
          }
        ],
        "permissions": [
          {
            "name": "CURRENTPROCESS"
          }
        ],
        "id": 2,
        "username": "test",
        "password": null,
        "firstName": "Sjaak",
        "lastName": "Roos",
        "salutation": "dhr.",
        "emailAddress": null,
        "name": "test"
      },
      {
        "customer": {
          "id": 1,
          "companyName": "MOJO",
          "address": "zernikedreef 11",
          "zipcode": "2333 CK",
          "city": "Leiden",
          "description": null
        },
        "roles": [
          {
            "name": "GUEST"
          }
        ],
        "permissions": [
          {
            "name": "CURRENTPROCESS"
          }
        ],
        "id": 2,
        "username": "test",
        "password": null,
        "firstName": "Sjaak",
        "lastName": "Roos",
        "salutation": "dhr.",
        "emailAddress": null,
        "name": "test"
      },
      {
        "customer": {
          "id": 1,
          "companyName": "MOJO",
          "address": "zernikedreef 11",
          "zipcode": "2333 CK",
          "city": "Leiden",
          "description": null
        },
        "roles": [
          {
            "name": "GUEST"
          }
        ],
        "permissions": [
          {
            "name": "CURRENTPROCESS"
          }
        ],
        "id": 2,
        "username": "test",
        "password": null,
        "firstName": "Sjaak",
        "lastName": "Roos",
        "salutation": "dhr.",
        "emailAddress": null,
        "name": "test"
      },
      {
        "customer": {
          "id": 1,
          "companyName": "MOJO",
          "address": "zernikedreef 11",
          "zipcode": "2333 CK",
          "city": "Leiden",
          "description": null
        },
        "roles": [
          {
            "name": "GUEST"
          }
        ],
        "permissions": [
          {
            "name": "CURRENTPROCESS"
          }
        ],
        "id": 2,
        "username": "test",
        "password": null,
        "firstName": "Sjaak",
        "lastName": "Roos",
        "salutation": "dhr.",
        "emailAddress": null,
        "name": "test"
      },
      {
        "customer": {
          "id": 1,
          "companyName": "MOJO",
          "address": "zernikedreef 11",
          "zipcode": "2333 CK",
          "city": "Leiden",
          "description": null
        },
        "roles": [
          {
            "name": "GUEST"
          }
        ],
        "permissions": [
          {
            "name": "CURRENTPROCESS"
          }
        ],
        "id": 2,
        "username": "test",
        "password": null,
        "firstName": "Sjaak",
        "lastName": "Roos",
        "salutation": "dhr.",
        "emailAddress": null,
        "name": "test"
      },
      {
        "customer": {
          "id": 1,
          "companyName": "MOJO",
          "address": "zernikedreef 11",
          "zipcode": "2333 CK",
          "city": "Leiden",
          "description": null
        },
        "roles": [
          {
            "name": "GUEST"
          }
        ],
        "permissions": [
          {
            "name": "CURRENTPROCESS"
          }
        ],
        "id": 2,
        "username": "test",
        "password": null,
        "firstName": "Sjaak",
        "lastName": "Roos",
        "salutation": "dhr.",
        "emailAddress": null,
        "name": "test"
      },
      {
        "customer": {
          "id": 1,
          "companyName": "MOJO",
          "address": "zernikedreef 11",
          "zipcode": "2333 CK",
          "city": "Leiden",
          "description": null
        },
        "roles": [
          {
            "name": "GUEST"
          }
        ],
        "permissions": [
          {
            "name": "CURRENTPROCESS"
          }
        ],
        "id": 2,
        "username": "test",
        "password": null,
        "firstName": "Sjaak",
        "lastName": "Roos",
        "salutation": "dhr.",
        "emailAddress": null,
        "name": "test"
      },
      {
        "customer": {
          "id": 1,
          "companyName": "MOJO",
          "address": "zernikedreef 11",
          "zipcode": "2333 CK",
          "city": "Leiden",
          "description": null
        },
        "roles": [
          {
            "name": "GUEST"
          }
        ],
        "permissions": [
          {
            "name": "CURRENTPROCESS"
          }
        ],
        "id": 2,
        "username": "test",
        "password": null,
        "firstName": "Sjaak",
        "lastName": "Roos",
        "salutation": "dhr.",
        "emailAddress": null,
        "name": "test"
      },
      {
        "customer": {
          "id": 1,
          "companyName": "MOJO",
          "address": "zernikedreef 11",
          "zipcode": "2333 CK",
          "city": "Leiden",
          "description": null
        },
        "roles": [
          {
            "name": "GUEST"
          }
        ],
        "permissions": [
          {
            "name": "CURRENTPROCESS"
          }
        ],
        "id": 2,
        "username": "test",
        "password": null,
        "firstName": "Sjaak",
        "lastName": "Roos",
        "salutation": "dhr.",
        "emailAddress": null,
        "name": "test"
      },
      {
        "customer": {
          "id": 1,
          "companyName": "MOJO",
          "address": "zernikedreef 11",
          "zipcode": "2333 CK",
          "city": "Leiden",
          "description": null
        },
        "roles": [
          {
            "name": "GUEST"
          }
        ],
        "permissions": [
          {
            "name": "CURRENTPROCESS"
          }
        ],
        "id": 2,
        "username": "test",
        "password": null,
        "firstName": "Sjaak",
        "lastName": "Roos",
        "salutation": "dhr.",
        "emailAddress": null,
        "name": "test"
      },
      {
        "customer": {
          "id": 1,
          "companyName": "MOJO",
          "address": "zernikedreef 11",
          "zipcode": "2333 CK",
          "city": "Leiden",
          "description": null
        },
        "roles": [
          {
            "name": "GUEST"
          }
        ],
        "permissions": [
          {
            "name": "CURRENTPROCESS"
          }
        ],
        "id": 2,
        "username": "test",
        "password": null,
        "firstName": "Sjaak",
        "lastName": "Roos",
        "salutation": "dhr.",
        "emailAddress": null,
        "name": "test"
      },
      {
        "customer": {
          "id": 1,
          "companyName": "MOJO",
          "address": "zernikedreef 11",
          "zipcode": "2333 CK",
          "city": "Leiden",
          "description": null
        },
        "roles": [
          {
            "name": "GUEST"
          }
        ],
        "permissions": [
          {
            "name": "CURRENTPROCESS"
          }
        ],
        "id": 2,
        "username": "test",
        "password": null,
        "firstName": "Sjaak",
        "lastName": "Roos",
        "salutation": "dhr.",
        "emailAddress": null,
        "name": "test"
      },
      {
        "customer": {
          "id": 1,
          "companyName": "MOJO",
          "address": "zernikedreef 11",
          "zipcode": "2333 CK",
          "city": "Leiden",
          "description": null
        },
        "roles": [
          {
            "name": "GUEST"
          }
        ],
        "permissions": [
          {
            "name": "CURRENTPROCESS"
          }
        ],
        "id": 2,
        "username": "test",
        "password": null,
        "firstName": "Sjaak",
        "lastName": "Roos",
        "salutation": "dhr.",
        "emailAddress": null,
        "name": "test"
      },
      {
        "customer": {
          "id": 1,
          "companyName": "MOJO",
          "address": "zernikedreef 11",
          "zipcode": "2333 CK",
          "city": "Leiden",
          "description": null
        },
        "roles": [
          {
            "name": "GUEST"
          }
        ],
        "permissions": [
          {
            "name": "CURRENTPROCESS"
          }
        ],
        "id": 2,
        "username": "test",
        "password": null,
        "firstName": "Sjaak",
        "lastName": "Roos",
        "salutation": "dhr.",
        "emailAddress": null,
        "name": "test"
      },
      {
        "customer": {
          "id": 1,
          "companyName": "MOJO",
          "address": "zernikedreef 11",
          "zipcode": "2333 CK",
          "city": "Leiden",
          "description": null
        },
        "roles": [
          {
            "name": "GUEST"
          }
        ],
        "permissions": [
          {
            "name": "CURRENTPROCESS"
          }
        ],
        "id": 2,
        "username": "test",
        "password": null,
        "firstName": "Sjaak",
        "lastName": "Roos",
        "salutation": "dhr.",
        "emailAddress": null,
        "name": "test"
      },
      {
        "customer": {
          "id": 1,
          "companyName": "MOJO",
          "address": "zernikedreef 11",
          "zipcode": "2333 CK",
          "city": "Leiden",
          "description": null
        },
        "roles": [
          {
            "name": "GUEST"
          }
        ],
        "permissions": [
          {
            "name": "CURRENTPROCESS"
          }
        ],
        "id": 2,
        "username": "test",
        "password": null,
        "firstName": "Sjaak",
        "lastName": "Roos",
        "salutation": "dhr.",
        "emailAddress": null,
        "name": "test"
      },
      {
        "customer": {
          "id": 1,
          "companyName": "MOJO",
          "address": "zernikedreef 11",
          "zipcode": "2333 CK",
          "city": "Leiden",
          "description": null
        },
        "roles": [
          {
            "name": "GUEST"
          }
        ],
        "permissions": [
          {
            "name": "CURRENTPROCESS"
          }
        ],
        "id": 2,
        "username": "test",
        "password": null,
        "firstName": "Sjaak",
        "lastName": "Roos",
        "salutation": "dhr.",
        "emailAddress": null,
        "name": "test"
      },
      {
        "customer": {
          "id": 1,
          "companyName": "MOJO",
          "address": "zernikedreef 11",
          "zipcode": "2333 CK",
          "city": "Leiden",
          "description": null
        },
        "roles": [
          {
            "name": "GUEST"
          }
        ],
        "permissions": [
          {
            "name": "CURRENTPROCESS"
          }
        ],
        "id": 2,
        "username": "test",
        "password": null,
        "firstName": "Sjaak",
        "lastName": "Roos",
        "salutation": "dhr.",
        "emailAddress": null,
        "name": "test"
      },
      {
        "customer": {
          "id": 1,
          "companyName": "MOJO",
          "address": "zernikedreef 11",
          "zipcode": "2333 CK",
          "city": "Leiden",
          "description": null
        },
        "roles": [
          {
            "name": "GUEST"
          }
        ],
        "permissions": [
          {
            "name": "CURRENTPROCESS"
          }
        ],
        "id": 2,
        "username": "test",
        "password": null,
        "firstName": "Sjaak",
        "lastName": "Roos",
        "salutation": "dhr.",
        "emailAddress": null,
        "name": "test"
      },
      {
        "customer": {
          "id": 1,
          "companyName": "MOJO",
          "address": "zernikedreef 11",
          "zipcode": "2333 CK",
          "city": "Leiden",
          "description": null
        },
        "roles": [
          {
            "name": "GUEST"
          }
        ],
        "permissions": [
          {
            "name": "CURRENTPROCESS"
          }
        ],
        "id": 2,
        "username": "test",
        "password": null,
        "firstName": "Sjaak",
        "lastName": "Roos",
        "salutation": "dhr.",
        "emailAddress": null,
        "name": "test"
      },
      {
        "customer": {
          "id": 1,
          "companyName": "MOJO",
          "address": "zernikedreef 11",
          "zipcode": "2333 CK",
          "city": "Leiden",
          "description": null
        },
        "roles": [
          {
            "name": "GUEST"
          }
        ],
        "permissions": [
          {
            "name": "CURRENTPROCESS"
          }
        ],
        "id": 2,
        "username": "test",
        "password": null,
        "firstName": "Sjaak",
        "lastName": "Roos",
        "salutation": "dhr.",
        "emailAddress": null,
        "name": "test"
      },
      {
        "customer": {
          "id": 1,
          "companyName": "MOJO",
          "address": "zernikedreef 11",
          "zipcode": "2333 CK",
          "city": "Leiden",
          "description": null
        },
        "roles": [
          {
            "name": "GUEST"
          }
        ],
        "permissions": [
          {
            "name": "CURRENTPROCESS"
          }
        ],
        "id": 4,
        "username": "test",
        "password": null,
        "firstName": "Sjaak",
        "lastName": "Roos",
        "salutation": "dhr.",
        "emailAddress": null,
        "name": "test"
      },
      {
        "customer": {
          "id": 1,
          "companyName": "MOJO",
          "address": "zernikedreef 11",
          "zipcode": "2333 CK",
          "city": "Leiden",
          "description": null
        },
        "roles": [
          {
            "name": "GUEST"
          }
        ],
        "permissions": [
          {
            "name": "CURRENTPROCESS"
          }
        ],
        "id": 4,
        "username": "test",
        "password": null,
        "firstName": "Sjaak",
        "lastName": "Roos",
        "salutation": "dhr.",
        "emailAddress": null,
        "name": "test"
      },
      {
        "customer": {
          "id": 1,
          "companyName": "NEP NEP",
          "address": "zernikedreef 1111",
          "zipcode": "1111 DD",
          "city": "Leiden",
          "description": null
        },
        "roles": [
          {
            "name": "GUEST"
          }
        ],
        "permissions": [
          {
            "name": "CURRENTPROCESS"
          }
        ],
        "id": 3,
        "username": "NEP",
        "password": null,
        "firstName": "TEST",
        "lastName": "Roos",
        "salutation": "dhr.",
        "emailAddress": null,
        "name": "test"
      }
    ];

    self.getCustomers = function (callback) {
      var uri = 'api/account/';
      //$http.get(uri)
      //  .success(function (result) {
      //    callback(result);
      //  })
      //  .error(function (message, status) {
      //    alert('Inloggen mislukt: ' + message, status);
      //  });
      callback(users);
    };

  });

