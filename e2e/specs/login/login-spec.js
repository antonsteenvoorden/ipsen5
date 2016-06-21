/**
 * Created by Anton on 02/06/2016.
 */
'use strict';
var chai = require('chai');
var expect = chai.expect;

var LoginPage = require('../../pageObjects/LoginPage.js');

describe('Try to login',function(){
  var loginPage = new LoginPage();

  it('should open the login page', function(done) {
    loginPage.get();
    loginPage.urlContains('login').then(function(result){
      expect(result).to.equal(true);
      done();
    });

  });

  it('should enter credentials and log in', function(done) {
    loginPage.enterCredentials('admin');
    loginPage.urlContains('dashboard').then(function(result){
      expect(result).to.equal(true);
      done();
    });
  });

});
