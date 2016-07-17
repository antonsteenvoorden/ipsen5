/**
 * Created by Anton on 02/06/2016.
 */
'use strict';
var chai = require('chai');
var expect = chai.expect;

var LoginPage = require('../../pageObjects/loginPage.js');
var MyProfilePage = require('../../pageObjects/myProfilePage.js');

describe('Try to login', function (done) {
  this.timeout(10000);
  setTimeout(done, 10000);

  var loginPage = new LoginPage();
  var myProfilePage = new MyProfilePage();
  var name = '';

  it('should login', function (done) {
    loginPage.get();
    loginPage.enterCredentials('admin');
    loginPage.urlContains('dashboard').then(function (result) {
      expect(result).to.equal(true);
      done();
    }).catch(function (err) {
      done(err);
    });
  });

  it('should go to my profile page', function (done) {
    myProfilePage.get();
    myProfilePage.urlContains('myprofile').then(function (result) {
      expect(result).to.equal(true);
      done();
    }).catch(function (err) {
      done(err);
    });
  });

  it('should change firstname and submit', function (done) {
    var letters = 'ABCDEFG';
    for (var i = 0; i < 5; i++)
      name += letters.charAt(Math.floor(Math.random() * letters.length));
    myProfilePage.setFirstname(name);
    myProfilePage.submit();
    done();
  });

  it('should open myprofile', function (done) {
    myProfilePage.goToProfile();
    myProfilePage.urlContains('myprofile').then(function (result) {
      expect(result).to.equal(true);
      done();
    }).catch(function (err) {
      done(err);
    });
  });

  it('should check if firstname equals the entered name', function (done) {
    myProfilePage.getFirstName().getAttribute('value').then(function (result) {
      expect(result).to.equal(name);
      done();
    });
  });
});
