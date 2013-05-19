// process.env.NODE_TLS_REJECT_UNAUTHORIZED = "0" // Avoids DEPTH_ZERO_SELF_SIGNED_CERT error for self-signed certs
var request = require("request");
var expect = require('expect.js');

describe("Mocha tests", function () {
    it("should return the correct value over http", function (done) {
		request.get("http://localhost:3000" + "?test=http", function (err, res, body) {
		    // console.log(JSON.parse(body))
			expect(JSON.parse(body).test).to.be('http')
			done();
		});
	});

    it("should return the correct value over https", function (done) {
		request.get("https://localhost:4000" + "?test=https", {rejectUnauthorized: false}, function (err, res, body) {
		    // console.log(JSON.parse(body))
			expect(JSON.parse(body).test).to.be('https')
			done();
		});
	});

    xit("should return the correct value over https", function (done) {
    	// process.env.NODE_TLS_REJECT_UNAUTHORIZED = "0" // Avoids DEPTH_ZERO_SELF_SIGNED_CERT error for self-signed certs
		request.get("https://localhost:4000" + "?test=https", function (err, res, body) {
		    console.log(JSON.parse(body))
			expect(JSON.parse(body).test).to.be('https')
			done();
		});
	});
});


		// request.get("https://localhost:4000?test=https", {rejectUnauthorized:true}, function (err, res, body) {
		//     console.log(body)
		// });
