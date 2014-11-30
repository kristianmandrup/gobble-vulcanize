/*global describe,it*/
'use strict';
var assert = require('assert'),
  gobbleVulcanize = require('../lib/gobble-vulcanize.js');

describe('gobble-vulcanize node module.', function() {
  it('must be awesome', function() {
    assert( gobbleVulcanize.awesome(), 'awesome');
  });
});
