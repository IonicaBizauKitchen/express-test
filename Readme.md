This repository is trying to demonstrate two bugs:

1. Heroku doesn't deploy correctly with node_modules checked in but /bin excluded: http://stackoverflow.com/a/15559443/1935918
2. Error: DEPTH_ZERO_SELF_SIGNED_CERT with request: https://github.com/mikeal/request/issues/418#issuecomment-17676692

If you ever need to re-create the localhost certificate:

	openssl genrsa -des3 -passout pass:x -out localhost.pass.key 2048
	openssl rsa -passin pass:x -in localhost.pass.key -out localhost.key
	openssl req -new -key localhost.key -out localhost.csr
	openssl x509 -req -days 365 -in localhost.csr -signkey localhost.key -out localhost.crt

Common Name (eg, YOUR name) []:localhost

To Get it accepted on Mac:

# double-click the lock icon with an X and drag-and-drop the certificate icon to the desktop,
# open this file (ending with a .cer extension); this opens the keychain application which allows you to approve the certificate.

Please contact Dan Kohn <dan@dankohn.com> with questions.
