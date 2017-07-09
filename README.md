# webpack-basics

Install webpack globally
npm install -g webpack

webpack ./app.js bundle.js
create webpack config file webpack.config.js

use webpack command

Watch mode 
cli-> webpack --watch
config->watch: true

file protocol is not feasible need to use http protocol

webpack has its own server -> webpack-dev-server

execute webpack-dev-server by adding it in package.json scripts section-> "start": "webpack-dev-server"

to activate hot load
webpack reload the browser then the app inside an iframe if http://localhost:8080/webpack-dev-server
http://localhost:8080 actual app executing, missing auto reload
webpack-dev-server --inline defaulting to index.html we have to put http://localhost:8080/index.html(without status bar)

.require ///common js syntax

change in config file need to restart the webpack server

loaders
