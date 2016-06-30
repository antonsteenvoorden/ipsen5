/**
 * Created by Anton on 02/06/2016.
 */
var MyProfilePage = function () {
  var self = this;
  var firstNameField = element(by.model('user.firstName'));
  var submit = element(by.id('myprofile.submit'));
  var dashboardButton = element(by.id('nav.home'));
  var myProfileButton = element(by.id('nav.account.myprofile'));

  self.get = function () {
    browser.get(browser.baseUrl + 'myprofile');
  };

  self.setFirstname = function (firstname) {
    firstNameField = element(by.model('user.firstName'));
    firstNameField.clear();
    firstNameField.sendKeys(firstname);
  };

  self.submit = function () {
    submit = element(by.id('myprofile.submit'));
    submit.click();
    self.goToDashboard();
  };

  self.goToDashboard = function () {
    dashboardButton = element(by.id('nav.home'));
    dashboardButton.click();
  };

  self.goToProfile = function () {
    var menuButton = element(by.id('nav.account'));
    menuButton.click();
    myProfileButton = element(by.id('nav.account.myprofile'));
    myProfileButton.click();
  };

  self.getFirstName = function() {
    browser.sleep(1000);
    var nameField = element(by.id('user.firstName'));
    return nameField;
  };


  self.getUrl = function () {
    return browser.getCurrentUrl();
  };

  self.urlContains = function (stringToCheck) {
    return new Promise(function (fulfill, reject) {
      self.getUrl().then(function (currentUrl) {
        (currentUrl.includes(stringToCheck) ? fulfill(true) : fulfill(false));
      }).catch(function (err) {
        reject(err);
      })
    });
  };

};
module.exports = MyProfilePage;
