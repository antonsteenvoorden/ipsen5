/**
 * Created by Anton on 30/06/2016.
 */
var LanguagePage = function() {
  var self = this;

  var menuButton = element(by.id('nav.settings'));
  var nlButton = element(by.id('nav.settings.nl'));
  var enButton = element(by.id('nav.settings.en'));

  self.changeToDutch = function() {
    nlButton.click();
  };

    self.changeToEnglish = function() {
    menuButton.click();
    enButton.click();
  };
  self.clickMenu = function() {
    menuButton.click();
  };

  self.getMenuLanguage = function() {
    var nltext = nlButton.element(by.tagName('span'));
    return nltext;
  }

};
module.exports = LanguagePage;
