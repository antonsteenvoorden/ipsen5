/**
 * Created by Anton on 02/06/2016.
 */
var LoginPage = function() {
  var self = this;

  var credentials = {
    admin: {
      username:'test',
      password:'1234'
    },
    guest: {
      username:'anton',
      password:'sexy'
    }
  };

  var usernameField = element(by.id('login.username'));
  var passwordField = element(by.id('login.password'));
  var submitButton = element(by.id('login.submit'));

  self.get = function() {
    browser.get(browser.baseUrl + 'login');
  };

  self.enterCredentials = function(user){
    var keys = credentials[user || 'guest'];
    usernameField.sendKeys(keys.username);
    passwordField.sendKeys(keys.password);
    submitButton.click();
  };

  self.getUrl = function () {
    return browser.getCurrentUrl();
  };

  self.urlContains = function (stringToCheck) {
    return new Promise(function (fulfill, reject) {
      self.getUrl().then(function (currentUrl) {
        (currentUrl.includes(stringToCheck) ? fulfill(true) : reject(false));
      });
    });
  };

};
module.exports = LoginPage;
