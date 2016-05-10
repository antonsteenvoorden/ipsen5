'use strict';

describe('Controller: PipoCtrl', function () {

  // load the controller's module
  beforeEach(module('wfpcsFrontApp'));

  var PipoCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    PipoCtrl = $controller('PipoCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(PipoCtrl.awesomeThings.length).toBe(3);
  });
});
