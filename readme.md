# Snowpack Plugin - Import Replacer

Simply replaces your imports with a minified distribution or CDN

`npm i --save-dev snowpack-plugin-import-replacer`

## WARNING! USE AT OWN RISK

This package has not been tested extensively. Do not expect it to work for every situation. Feel free to create an issue or PR in the case you have problems, solutions, ideas or feature requests. Happy caching!

Second disclaimer: [this seems like it will soon be an internal feature to skypack](https://docs.skypack.dev/plugins)

## Example

```
"plugins": [
  [
    "snowpack-plugin-skypack-replacer", {
      "modules": {
        "react-dom": "https://cdn.skypack.dev/pin/react-dom@v16.13.1-zy0G8GAHjONvAZK0I7lf/min/react-dom.js",
        "react": "./lib/react.production.min.js"
      },
      "extensions": [".js", ".jsx"]
    }
  ]
]
```
will result in the following in only files with '.js' and '.jsx' extensions.

```
import React from 'react';
import ReactDOM from 'react-dom';
```
from [/src/index.jsx](https://github.com/HexaField/snowpack-plugin-import-replacer/blob/e4776e6f842c74959c83f758095a8494d4ac205c/test/src/index.jsx#L1) be converted to

```
import React from './lib/react.production.min.js';
import ReactDOM from 'https://cdn.skypack.dev/pin/react-dom@v16.13.1-zy0G8GAHjONvAZK0I7lf/min/react-dom.js';
```

from [/build/\_dist_/index.js](https://github.com/HexaField/snowpack-plugin-import-replacer/blob/e4776e6f842c74959c83f758095a8494d4ac205c/test/build/_dist_/index.js#L4) in production builds but not development.
