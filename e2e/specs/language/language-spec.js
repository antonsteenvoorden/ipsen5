/**
 * Created by Anton on 02/06/2016.
 */
'use strict';
var chai = require('chai');
var expect = chai.expect;

var LoginPage = require('../../pageObjects/LoginPage.js');
var LanguagePage = require('../../pageObjects/LanguagePage.js');

describe('Try to login',function(done){
  var loginPage = new LoginPage();
  var languagePage = new LanguagePage();

  this.timeout(10000);
  setTimeout(done, 10000);

  it('should open the dashboard page', function(done) {
    loginPage.get();
    loginPage.enterCredentials('admin');
    loginPage.urlContains('dashboard').then(function(result){
      expect(result).to.equal(true);
      done();
    }).catch(function(err){
      done(err);
    });
  });

  it('should check if the language is english', function(done) {
    languagePage.clickMenu();
    languagePage.getMenuLanguage().getText().then(function(result) {
      var language = '';
      if(result === 'Nederlands') {
        language = 'nl';
      } else {
        language = 'en';
      }
      expect(language).to.equal('en');
      done();
    });
  });

  it('should change the language to dutch and check if the language is dutch', function(done) {
    languagePage.changeToDutch();
    languagePage.clickMenu();
    languagePage.getMenuLanguage().getText().then(function(result) {
      var language = '';
      if(result === 'Nederlands') {
        language = 'nl';
      } else {
        language = 'en';
      }
      expect(language).to.equal('nl');
      done();

    });


  });


});
