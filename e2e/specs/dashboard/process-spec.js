/**
 * Created by Anton on 02/06/2016.
 */
'use strict';
var chai = require('chai');
var expect = chai.expect;

var LoginPage = require('../../pageObjects/LoginPage.js');
var DashboardPage = require('../../pageObjects/DashboardPage.js');

describe('Try to login', function (done) {
  var loginPage = new LoginPage();
  var dashboardPage = new DashboardPage();
  var name = '';

  this.timeout(10000);
  setTimeout(done, 10000);

  it('should open the dashboard page', function (done) {
    loginPage.get();
    loginPage.enterCredentials('admin');
    loginPage.urlContains('dashboard').then(function (result) {
      expect(result).to.equal(true);
      done();
    }).catch(function (err) {
      done(err);
    });
  });
  it('should add a new process', function (done) {
    dashboardPage.clickAdd();

    var letters = 'ABCDEFG';
    for (var i = 0; i < 5; i++)
      name += letters.charAt(Math.floor(Math.random() * letters.length));

    dashboardPage.enterValues(name);
    dashboardPage.submit();
    browser.sleep(500);
    expect(dashboardPage.isDialogOpen()).to.equal(false);
    browser.sleep(500);
    done();
  });

  //it('should update the new process', function (done) {
  //  dashboardPage.clickByName(name);
  //  dashboardPage.enterNewName();
  //  dashboardPage.submit();
  //  done();
  //});

  //it('should remove the new process', function (done) {
  //  dashboardPage.removeByName(name);
  //  done();
  //});
});
