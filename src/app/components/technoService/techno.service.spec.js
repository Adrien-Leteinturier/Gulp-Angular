'use strict';

describe('Service: technoService', function () {

  // load the service's module
  beforeEach(module('app'));

  // instantiate service
  var technoService;
  beforeEach(inject(function (_technoService_) {
    technoService = _technoService_;
  }));

  it('should do something', function () {
    expect(!!technoService).toBe(true);
  });


});
