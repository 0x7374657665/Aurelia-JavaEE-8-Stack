define("app",["exports","./models/aurelia-http-client-preconfigured"],function(e,t){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.App=void 0;e.App=function(){function e(){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.message="Loading..."}return e.prototype.activate=function(){var e=this;t.client.get("hello").then(function(t){var n=JSON.parse(t.response);e.message=n.message})},e}()}),define("environment",["exports"],function(e){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={debug:!1,testing:!1,host:"api/"}}),define("main",["exports","./environment"],function(e,t){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.configure=function(e){e.use.standardConfiguration().feature("resources"),n.default.debug&&e.use.developmentLogging(),n.default.testing&&e.use.plugin("aurelia-testing"),e.start().then(function(){return e.setRoot("login/login")})};var n=function(e){return e&&e.__esModule?e:{default:e}}(t)}),define("resources/index",["exports"],function(e){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.configure=function(e){}}),define("models/aurelia-http-client-preconfigured",["exports","../environment","aurelia-http-client"],function(e,t,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.client=void 0;var i=function(e){return e&&e.__esModule?e:{default:e}}(t);e.client=(new n.HttpClient).configure(function(e){e.withBaseUrl(i.default.host)})}),define("login/login",["exports","../models/aurelia-http-client-preconfigured"],function(e,t){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.Login=void 0;e.Login=function(){function e(){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.username="",this.password=""}return e.prototype.login=function(){var e={username:this.username,password:this.password};console.log("login attempted:",e),t.client.post("login",e).then(function(e){return console.log("login result:",e)})},e}()}),define("text!app.html",["module"],function(e){e.exports="<template><h1>${message}</h1></template>"}),define("text!login/login.css",["module"],function(e){e.exports="fieldset {\r\n    width: 30em;\r\n    margin: 3em auto;\r\n}\r\n\r\ninput {\r\n    width: 100%;\r\n    margin-bottom: .5em;\r\n}"}),define("text!login/login.html",["module"],function(e){e.exports='<template><require from="./login.css"></require><form submit.trigger="login()"><fieldset><input type="text" placeholder="username" value.bind="username"><br><input type="password" placeholder="password" value.bind="password"><br><button type="submit">Login</button></fieldset></form></template>'});