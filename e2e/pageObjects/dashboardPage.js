/**
 * Created by Anton on 30/06/2016.
 */
var DashboardPage = function() {
  var self = this;

  var addButton = element(by.id('dashboard.add'));

  self.clickAdd = function() {
    addButton.click();
  };

  self.enterValues = function(name) {
    var nameField = element(by.model('newProcess.name'));
    var batchsizeField = element(by.model('newProcess.batchSize'));
    var hoursPerDayField = element(by.model('newProcess.hoursPerDay'));
    var piecesPerDayField = element(by.model('newProcess.piecesPerDay'));
    var versionield = element(by.model('newProcess.version'));

    nameField.sendKeys(name);
    batchsizeField.sendKeys(1);
    hoursPerDayField.sendKeys(1);
    piecesPerDayField.sendKeys(1);
    versionield.sendKeys(1);
  };

  self.submit = function() {
    var submit = element(by.id('newprocess.submit'));
    submit.click();
  };

  self.isDialogOpen = function() {
    return false;
  };

  self.clickByName = function() {
    var listOfCards = element.all(by.tagName('md-card')).then(function(items){
      listOfCards=items;
    });
    console.log(listOfCards);
    listOfCards[0].click();
  };

  self.removeByName = function() {
    var listOfCards = element.all(by.css('[ng-click="open(process)')).then(function(items){
      console.log(items);
      listOfCards=items;
    });
    var menu = listOfCards[0].element(by.css('[ng-click="$mdOpenMenu($event)"]'));
    menu.click();
    var remove = listOfCards[0].element(by.css('[ng-click="deleteProcess(process.id);]'));
    remove.click();
  };

  self.enterNewName = function() {
    var name = '';
    var letters = 'ABCDEFG';
    for (var i = 0; i < 5; i++)
      name += letters.charAt(Math.floor(Math.random() * letters.length));
    nameField.sendKeys(name);
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
module.exports = DashboardPage;
