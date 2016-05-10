'use strict';

describe('Directive: pipo', function () {

  // load the directive's module
  beforeEach(module('wfpcsFrontApp'));

  var element,
    scope;

  beforeEach(inject(function ($rootScope) {
    scope = $rootScope.$new();
  }));

  it('should make hidden element visible', inject(function ($compile) {
    element = angular.element('<pipo></pipo>');
    element = $compile(element)(scope);
    expect(element.text()).toBe('this is the pipo directive');
  }));
});
