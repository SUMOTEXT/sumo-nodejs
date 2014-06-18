var should = require('chai').should();
var sumo = require('../lib');

describe("#carrierCodeLookup", function(){
  var carrier = 'none';
 
  beforeEach(function(done){
 
 	sumo.carrierCodeLookup({
			mobile: '5012589948',
			shortcode: '74700',
		}, function(data){
			carrier = data;
			done();
	});

  });
 
  it("should return carrier code", function(){
    carrier.should.equal('CINGULARUS')
  });
 
});