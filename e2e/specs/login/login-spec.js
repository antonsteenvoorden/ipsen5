/**
 * Created by Anton on 02/06/2016.
 */
'use strict';
var chai = require('chai');
var expect = chai.expect;

var LoginPage = require('../../pageObjects/LoginPage.js');

describe('Try to login',function(){
  var loginPage = new LoginPage();

  it('should open the login page', function(done){
    expect(loginPage.getTrue()).to.equal(true);
    done();
  });
});
