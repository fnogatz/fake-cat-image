# fake-cat-image

Example web server to demonstrate the difference between MIME types via `Content-Type` HTTP headers and file extensions. Learning target is that file extensions in an URI might not determine the MIME type of the delivered content.

## Installation

As this module has no npm dependencies, you can simply clone this project. It is not published to npm.

## Usage

Start the server via `npm start`. You can change the port in the `package.json` file or by using `npm config set port [PORT]`. Default is `8080`.

The server provides two end points: `/cat.jpg` returns an HTML file while the inlined `/cat.html` results in the actual image file. For both URI the HTTP methods `GET` and `HEAD` are supported. All other requests return a 404 status code.

To extend both URI by a prefix you can `npm config set base [PREFIX]` or edit the `package.json`. Default is `/`.

## Licence

The `cat.jpg` image file is [public domain](http://www.photos-public-domain.com/2012/03/18/orange-and-white-kitty-close-up/). The actual project is MIT-licenced.