var should = require('chai').should();
var sumo = require('../lib');

describe("#deliveryReport", function(){
  var response = {};
 
  beforeEach(function(done){
 
   	sumo.deliveryReport({
      smsid :   '7A2D2AF7-6851-4D22-BD41-BD8EE94C061E', 
      shortcode : '74700'
    },  function(err, data){
          response = data;
          done();
        });

  });
 
  it("should return delivery report", function(){
    response.sent.should.equal('TRUE');
    response.smsid.should.equal('7A2D2AF7-6851-4D22-BD41-BD8EE94C061E');
    response.message.should.equal('Message successfully delivered to handset.');
  });
 
});