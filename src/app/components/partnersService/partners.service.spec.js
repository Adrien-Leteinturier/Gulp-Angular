'use strict';

describe('Service: partnersService', function () {

  // load the service's module
  beforeEach(module('app'));

  // instantiate service
  var partnersService;
  beforeEach(inject(function (_partnersService_) {
    partnersService = _partnersService_;
  }));

  it('should do something', function () {
    expect(!!partnersService).toBe(true);
  });


});
