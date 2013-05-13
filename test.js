process.env.NODE_TLS_REJECT_UNAUTHORIZED = "0" // Avoids DEPTH_ZERO_SELF_SIGNED_CERT error for self-signed certs
var request = require("request");
var port = process.env.PORT || 3000;

request.get("http://localhost:" + port + "?test=http", function (err, res, body) {
    console.log(body)
});

request.get("https://localhost:4000?test=https", function (err, res, body) {
    console.log(body)
});
