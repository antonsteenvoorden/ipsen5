'use strict';

describe('Service: pipo', function () {

  // load the service's module
  beforeEach(module('wfpcsFrontApp'));

  // instantiate service
  var pipo;
  beforeEach(inject(function (_pipo_) {
    pipo = _pipo_;
  }));

  it('should do something', function () {
    expect(!!pipo).toBe(true);
  });

});
