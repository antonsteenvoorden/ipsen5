/**
 * Created by Anton on 02/06/2016.
 */
'use strict';
var chai = require('chai');
var expect = chai.expect;

var LoginPage = require('../../pageObjects/LoginPage.js');

describe('Try to login',function(done){
  var loginPage = new LoginPage();
  this.timeout(10000);
  setTimeout(done, 10000);

  it('should open the login page', function(done) {
    loginPage.get();
    loginPage.urlContains('login').then(function(result){
      expect(result).to.equal(true);
      done();
    }).catch(function(err){
      done(err);
    });

  });

  it('should enter credentials and log in', function(done) {
    loginPage.enterCredentials('admin');
    loginPage.urlContains('dashboard').then(function(result){
      expect(result).to.equal(true);
      done();
    }).catch(function(err){
      done(err);
    });
  });

  it('should logout and land on the login page again', function(done) {
    loginPage.logOut();
    loginPage.urlContains('login').then(function(result){
      expect(result).to.equal(true);
      done();
    }).catch(function(err){
      done(err);
    });
  });

  it('should enter wrong credentials and stay on login page with alertbox', function(done) {
    loginPage.enterCredentials('false');
    loginPage.clickAlert();
    loginPage.urlContains('dashboard').then(function(result){
      expect(result).to.equal(false);
      done();
    }).catch(function(err){
      console.log(err);
      done();
    });
  });

});
