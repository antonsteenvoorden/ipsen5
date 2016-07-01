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
    },
    false : {
      username:'1231231',
      password:'tasdasdas'
    }
  };

  var usernameField = element(by.id('login.username'));
  var passwordField = element(by.id('login.password'));
  var submitButton = element(by.id('login.submit'));

  var navAccountButton = element(by.id('nav.account'));
  var logOutButton = element(by.id('nav.account.signout'));
  
  self.get = function() {
    browser.get(browser.baseUrl + 'login');
  };

  self.enterCredentials = function(user){
    var keys = credentials[user || 'guest'];
    usernameField.sendKeys(keys.username);
    passwordField.sendKeys(keys.password);
    submitButton.click();
  };

  self.clickAlert = function() {
    browser.wait(function () {
      return browser.switchTo().alert().then(
        function () {return true;},
        function () {return false;}
      );
    }, 3000);

    browser.switchTo().alert().accept();
  };

  self.logOut = function() {
    navAccountButton.click();
    logOutButton.click();
  };

  self.getUrl = function () {
    return browser.getCurrentUrl();
  };

  self.urlContains = function (stringToCheck) {
    return new Promise(function (fulfill, reject) {
      self.getUrl().then(function (currentUrl) {
        (currentUrl.includes(stringToCheck) ? fulfill(true) : fulfill(false));
      }).catch(function(err){
        reject(err);
      })
    });
  };

};
module.exports = LoginPage;
