# BIMserver-JavaScript-API

A JavaScript API for the OpenSource BIMserver.

## Usage
### Static import
Download the [combined minified library](https://raw.githubusercontent.com/opensourceBIM/BIMserver-JavaScript-API/master/build/bimserverapi.js) and include it in your HTML.

```html
<script type="module" src="bimserverapi.js?_v=%VERSION%"></script>
```

The ``?_v=%VERSION%`` addition is there for efficient caching purposes. Any server system serving these files can tell the client to cache these files indefinitely.

### Import as an ES6 module
If you are using a transpiler such as [Typescript](https://www.typescriptlang.org/) or [Babel](http://babeljs.io/), or a bundler such as [Webpack](https://webpack.js.org/) or [Rollup](https://rollupjs.org/), you can import the module using the [Import](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/import) syntax.

It is also possible to load the ES6 module directly into the browser, however not all browser support this yet.

```javascript
import { BimServerClient } from './js/bimserverclient.js';
const api = new BimServerClient("../..");
api.init((client, version) => {
	console.log(version.version);
});
```

### Dynamic import
When the location on the API is not known in advance, you can use dynamic loading, in most browsers you'll need to use a "dev" version for this to work (Chrome 64 for example).

```javascript
var address = "http://addressofapi";
Promise.all([
	address + "/bimserverclient.js",
	address + "/bimserverapipromise.js"
].map(x => import(x)))
.then(([BimServerClient, BimServerApiPromise]) => {
	var api = new BimServerClient.BimServerClient("../..");
	api.init((client, version) => {
		document.getElementById("version").innerHTML = JSON.stringify(version.version, 0, 2);
	});
});
```

### Version returned from BIMserver instance
To do.

## API documentation
To do.

## Build the library
* Install [Node.js](https://nodejs.org/)
* Clone (or download and unzip) the project to your file system:
```
git clone https://github.com/opensourceBIM/BIMserver-JavaScript-API.git
```
* Go to the project directory
```
cd BIMserver-JavaScript-API
```
* Install build dependencies
```
npm install
```
* Run the build script
```
npm run build
```
The compiled file is located at ``build/bimserverapi.js``
