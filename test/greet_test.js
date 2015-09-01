'use strict';

var expect = require('chai').expect;
var greet = require(__dirname + '/../lib/greet');

describe('greet', function() {
  it('should greet someone by name', function() {
    expect(greet('someone')).to.eql('hello someone');
  });
});
