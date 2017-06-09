'use strict';

describe('Service: displayEffectService', function () {

  // load the service's module
  beforeEach(module('app'));

  // instantiate service
  var displayEffectService;
  beforeEach(inject(function (_displayEffectService_) {
    displayEffectService = _displayEffectService_;
  }));

  it('should do something', function () {
    expect(!!displayEffectService).toBe(true);
  });

});
