/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/isomorphic-fetch/fetch-npm-browserify.js":
/*!***************************************************************!*\
  !*** ./node_modules/isomorphic-fetch/fetch-npm-browserify.js ***!
  \***************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("// the whatwg-fetch polyfill installs the fetch() function\n// on the global object (window or self)\n//\n// Return that as the export for use in Webpack, Browserify etc.\n__webpack_require__(/*! whatwg-fetch */ \"./node_modules/whatwg-fetch/fetch.js\");\nmodule.exports = self.fetch.bind(self);\n\n\n//# sourceURL=webpack://video-player/./node_modules/isomorphic-fetch/fetch-npm-browserify.js?");

/***/ }),

/***/ "./node_modules/pexels/dist/main.module.js":
/*!*************************************************!*\
  !*** ./node_modules/pexels/dist/main.module.js ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   createClient: () => (/* binding */ c)\n/* harmony export */ });\nvar t={photo:\"https://api.pexels.com/v1/\",video:\"https://api.pexels.com/videos/\",collections:\"https://api.pexels.com/v1/collections/\"};function r(r,e){var n={method:\"GET\",headers:{Accept:\"application/json\",\"Content-Type\":\"application/json\",\"User-Agent\":\"Pexels/JavaScript\",Authorization:r}},o=t[e];return function(t,r){return fetch(\"\"+o+t+\"?\"+function(t){return Object.keys(t).map(function(r){return r+\"=\"+t[r]}).join(\"&\")}(r||{}),n).then(function(t){if(!t.ok)throw new Error(t.statusText);return t.json()})}}function e(t){var e=r(t,\"collections\");return{all:function(t){return void 0===t&&(t={}),e(\"\",t)},media:function(t){var r=t.id,n=function(t,r){if(null==t)return{};var e,n,o={},i=Object.keys(t);for(n=0;n<i.length;n++)r.indexOf(e=i[n])>=0||(o[e]=t[e]);return o}(t,[\"id\"]);return e(\"\"+r,n)},featured:function(t){return void 0===t&&(t={}),e(\"featured\",t)}}}function n(t){return!(!t||!t.photos)}var o={__proto__:null,isPhotos:n,isVideos:function(t){return!(!t||!t.videos)},isError:function(t){return!!t.error}};function i(t){var e=r(t,\"photo\");return{search:function(t){return e(\"/search\",t)},curated:function(t){return void 0===t&&(t={}),e(\"/curated\",t)},show:function(t){return e(\"/photos/\"+t.id)},random:function(){try{var t=Math.floor(1e3*Math.random());return Promise.resolve(this.curated({page:t,per_page:1})).then(function(t){return n(t)?t.photos[0]:t})}catch(t){return Promise.reject(t)}}}}function u(t){var e=r(t,\"video\");return{search:function(t){return e(\"/search\",t)},popular:function(t){return void 0===t&&(t={}),e(\"/popular\",t)},show:function(t){return e(\"/videos/\"+t.id)}}}function c(t){if(!t||\"string\"!=typeof t)throw new TypeError(\"An ApiKey must be provided when initiating the Pexel's client.\");return{typeCheckers:o,photos:i(t),videos:u(t),collections:e(t)}}__webpack_require__(/*! isomorphic-fetch */ \"./node_modules/isomorphic-fetch/fetch-npm-browserify.js\");\n//# sourceMappingURL=main.module.js.map\n\n\n//# sourceURL=webpack://video-player/./node_modules/pexels/dist/main.module.js?");

/***/ }),

/***/ "./node_modules/whatwg-fetch/fetch.js":
/*!********************************************!*\
  !*** ./node_modules/whatwg-fetch/fetch.js ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   DOMException: () => (/* binding */ DOMException),\n/* harmony export */   Headers: () => (/* binding */ Headers),\n/* harmony export */   Request: () => (/* binding */ Request),\n/* harmony export */   Response: () => (/* binding */ Response),\n/* harmony export */   fetch: () => (/* binding */ fetch)\n/* harmony export */ });\n/* eslint-disable no-prototype-builtins */\nvar g =\n  (typeof globalThis !== 'undefined' && globalThis) ||\n  (typeof self !== 'undefined' && self) ||\n  // eslint-disable-next-line no-undef\n  (typeof __webpack_require__.g !== 'undefined' && __webpack_require__.g) ||\n  {}\n\nvar support = {\n  searchParams: 'URLSearchParams' in g,\n  iterable: 'Symbol' in g && 'iterator' in Symbol,\n  blob:\n    'FileReader' in g &&\n    'Blob' in g &&\n    (function() {\n      try {\n        new Blob()\n        return true\n      } catch (e) {\n        return false\n      }\n    })(),\n  formData: 'FormData' in g,\n  arrayBuffer: 'ArrayBuffer' in g\n}\n\nfunction isDataView(obj) {\n  return obj && DataView.prototype.isPrototypeOf(obj)\n}\n\nif (support.arrayBuffer) {\n  var viewClasses = [\n    '[object Int8Array]',\n    '[object Uint8Array]',\n    '[object Uint8ClampedArray]',\n    '[object Int16Array]',\n    '[object Uint16Array]',\n    '[object Int32Array]',\n    '[object Uint32Array]',\n    '[object Float32Array]',\n    '[object Float64Array]'\n  ]\n\n  var isArrayBufferView =\n    ArrayBuffer.isView ||\n    function(obj) {\n      return obj && viewClasses.indexOf(Object.prototype.toString.call(obj)) > -1\n    }\n}\n\nfunction normalizeName(name) {\n  if (typeof name !== 'string') {\n    name = String(name)\n  }\n  if (/[^a-z0-9\\-#$%&'*+.^_`|~!]/i.test(name) || name === '') {\n    throw new TypeError('Invalid character in header field name: \"' + name + '\"')\n  }\n  return name.toLowerCase()\n}\n\nfunction normalizeValue(value) {\n  if (typeof value !== 'string') {\n    value = String(value)\n  }\n  return value\n}\n\n// Build a destructive iterator for the value list\nfunction iteratorFor(items) {\n  var iterator = {\n    next: function() {\n      var value = items.shift()\n      return {done: value === undefined, value: value}\n    }\n  }\n\n  if (support.iterable) {\n    iterator[Symbol.iterator] = function() {\n      return iterator\n    }\n  }\n\n  return iterator\n}\n\nfunction Headers(headers) {\n  this.map = {}\n\n  if (headers instanceof Headers) {\n    headers.forEach(function(value, name) {\n      this.append(name, value)\n    }, this)\n  } else if (Array.isArray(headers)) {\n    headers.forEach(function(header) {\n      if (header.length != 2) {\n        throw new TypeError('Headers constructor: expected name/value pair to be length 2, found' + header.length)\n      }\n      this.append(header[0], header[1])\n    }, this)\n  } else if (headers) {\n    Object.getOwnPropertyNames(headers).forEach(function(name) {\n      this.append(name, headers[name])\n    }, this)\n  }\n}\n\nHeaders.prototype.append = function(name, value) {\n  name = normalizeName(name)\n  value = normalizeValue(value)\n  var oldValue = this.map[name]\n  this.map[name] = oldValue ? oldValue + ', ' + value : value\n}\n\nHeaders.prototype['delete'] = function(name) {\n  delete this.map[normalizeName(name)]\n}\n\nHeaders.prototype.get = function(name) {\n  name = normalizeName(name)\n  return this.has(name) ? this.map[name] : null\n}\n\nHeaders.prototype.has = function(name) {\n  return this.map.hasOwnProperty(normalizeName(name))\n}\n\nHeaders.prototype.set = function(name, value) {\n  this.map[normalizeName(name)] = normalizeValue(value)\n}\n\nHeaders.prototype.forEach = function(callback, thisArg) {\n  for (var name in this.map) {\n    if (this.map.hasOwnProperty(name)) {\n      callback.call(thisArg, this.map[name], name, this)\n    }\n  }\n}\n\nHeaders.prototype.keys = function() {\n  var items = []\n  this.forEach(function(value, name) {\n    items.push(name)\n  })\n  return iteratorFor(items)\n}\n\nHeaders.prototype.values = function() {\n  var items = []\n  this.forEach(function(value) {\n    items.push(value)\n  })\n  return iteratorFor(items)\n}\n\nHeaders.prototype.entries = function() {\n  var items = []\n  this.forEach(function(value, name) {\n    items.push([name, value])\n  })\n  return iteratorFor(items)\n}\n\nif (support.iterable) {\n  Headers.prototype[Symbol.iterator] = Headers.prototype.entries\n}\n\nfunction consumed(body) {\n  if (body._noBody) return\n  if (body.bodyUsed) {\n    return Promise.reject(new TypeError('Already read'))\n  }\n  body.bodyUsed = true\n}\n\nfunction fileReaderReady(reader) {\n  return new Promise(function(resolve, reject) {\n    reader.onload = function() {\n      resolve(reader.result)\n    }\n    reader.onerror = function() {\n      reject(reader.error)\n    }\n  })\n}\n\nfunction readBlobAsArrayBuffer(blob) {\n  var reader = new FileReader()\n  var promise = fileReaderReady(reader)\n  reader.readAsArrayBuffer(blob)\n  return promise\n}\n\nfunction readBlobAsText(blob) {\n  var reader = new FileReader()\n  var promise = fileReaderReady(reader)\n  var match = /charset=([A-Za-z0-9_-]+)/.exec(blob.type)\n  var encoding = match ? match[1] : 'utf-8'\n  reader.readAsText(blob, encoding)\n  return promise\n}\n\nfunction readArrayBufferAsText(buf) {\n  var view = new Uint8Array(buf)\n  var chars = new Array(view.length)\n\n  for (var i = 0; i < view.length; i++) {\n    chars[i] = String.fromCharCode(view[i])\n  }\n  return chars.join('')\n}\n\nfunction bufferClone(buf) {\n  if (buf.slice) {\n    return buf.slice(0)\n  } else {\n    var view = new Uint8Array(buf.byteLength)\n    view.set(new Uint8Array(buf))\n    return view.buffer\n  }\n}\n\nfunction Body() {\n  this.bodyUsed = false\n\n  this._initBody = function(body) {\n    /*\n      fetch-mock wraps the Response object in an ES6 Proxy to\n      provide useful test harness features such as flush. However, on\n      ES5 browsers without fetch or Proxy support pollyfills must be used;\n      the proxy-pollyfill is unable to proxy an attribute unless it exists\n      on the object before the Proxy is created. This change ensures\n      Response.bodyUsed exists on the instance, while maintaining the\n      semantic of setting Request.bodyUsed in the constructor before\n      _initBody is called.\n    */\n    // eslint-disable-next-line no-self-assign\n    this.bodyUsed = this.bodyUsed\n    this._bodyInit = body\n    if (!body) {\n      this._noBody = true;\n      this._bodyText = ''\n    } else if (typeof body === 'string') {\n      this._bodyText = body\n    } else if (support.blob && Blob.prototype.isPrototypeOf(body)) {\n      this._bodyBlob = body\n    } else if (support.formData && FormData.prototype.isPrototypeOf(body)) {\n      this._bodyFormData = body\n    } else if (support.searchParams && URLSearchParams.prototype.isPrototypeOf(body)) {\n      this._bodyText = body.toString()\n    } else if (support.arrayBuffer && support.blob && isDataView(body)) {\n      this._bodyArrayBuffer = bufferClone(body.buffer)\n      // IE 10-11 can't handle a DataView body.\n      this._bodyInit = new Blob([this._bodyArrayBuffer])\n    } else if (support.arrayBuffer && (ArrayBuffer.prototype.isPrototypeOf(body) || isArrayBufferView(body))) {\n      this._bodyArrayBuffer = bufferClone(body)\n    } else {\n      this._bodyText = body = Object.prototype.toString.call(body)\n    }\n\n    if (!this.headers.get('content-type')) {\n      if (typeof body === 'string') {\n        this.headers.set('content-type', 'text/plain;charset=UTF-8')\n      } else if (this._bodyBlob && this._bodyBlob.type) {\n        this.headers.set('content-type', this._bodyBlob.type)\n      } else if (support.searchParams && URLSearchParams.prototype.isPrototypeOf(body)) {\n        this.headers.set('content-type', 'application/x-www-form-urlencoded;charset=UTF-8')\n      }\n    }\n  }\n\n  if (support.blob) {\n    this.blob = function() {\n      var rejected = consumed(this)\n      if (rejected) {\n        return rejected\n      }\n\n      if (this._bodyBlob) {\n        return Promise.resolve(this._bodyBlob)\n      } else if (this._bodyArrayBuffer) {\n        return Promise.resolve(new Blob([this._bodyArrayBuffer]))\n      } else if (this._bodyFormData) {\n        throw new Error('could not read FormData body as blob')\n      } else {\n        return Promise.resolve(new Blob([this._bodyText]))\n      }\n    }\n  }\n\n  this.arrayBuffer = function() {\n    if (this._bodyArrayBuffer) {\n      var isConsumed = consumed(this)\n      if (isConsumed) {\n        return isConsumed\n      } else if (ArrayBuffer.isView(this._bodyArrayBuffer)) {\n        return Promise.resolve(\n          this._bodyArrayBuffer.buffer.slice(\n            this._bodyArrayBuffer.byteOffset,\n            this._bodyArrayBuffer.byteOffset + this._bodyArrayBuffer.byteLength\n          )\n        )\n      } else {\n        return Promise.resolve(this._bodyArrayBuffer)\n      }\n    } else if (support.blob) {\n      return this.blob().then(readBlobAsArrayBuffer)\n    } else {\n      throw new Error('could not read as ArrayBuffer')\n    }\n  }\n\n  this.text = function() {\n    var rejected = consumed(this)\n    if (rejected) {\n      return rejected\n    }\n\n    if (this._bodyBlob) {\n      return readBlobAsText(this._bodyBlob)\n    } else if (this._bodyArrayBuffer) {\n      return Promise.resolve(readArrayBufferAsText(this._bodyArrayBuffer))\n    } else if (this._bodyFormData) {\n      throw new Error('could not read FormData body as text')\n    } else {\n      return Promise.resolve(this._bodyText)\n    }\n  }\n\n  if (support.formData) {\n    this.formData = function() {\n      return this.text().then(decode)\n    }\n  }\n\n  this.json = function() {\n    return this.text().then(JSON.parse)\n  }\n\n  return this\n}\n\n// HTTP methods whose capitalization should be normalized\nvar methods = ['CONNECT', 'DELETE', 'GET', 'HEAD', 'OPTIONS', 'PATCH', 'POST', 'PUT', 'TRACE']\n\nfunction normalizeMethod(method) {\n  var upcased = method.toUpperCase()\n  return methods.indexOf(upcased) > -1 ? upcased : method\n}\n\nfunction Request(input, options) {\n  if (!(this instanceof Request)) {\n    throw new TypeError('Please use the \"new\" operator, this DOM object constructor cannot be called as a function.')\n  }\n\n  options = options || {}\n  var body = options.body\n\n  if (input instanceof Request) {\n    if (input.bodyUsed) {\n      throw new TypeError('Already read')\n    }\n    this.url = input.url\n    this.credentials = input.credentials\n    if (!options.headers) {\n      this.headers = new Headers(input.headers)\n    }\n    this.method = input.method\n    this.mode = input.mode\n    this.signal = input.signal\n    if (!body && input._bodyInit != null) {\n      body = input._bodyInit\n      input.bodyUsed = true\n    }\n  } else {\n    this.url = String(input)\n  }\n\n  this.credentials = options.credentials || this.credentials || 'same-origin'\n  if (options.headers || !this.headers) {\n    this.headers = new Headers(options.headers)\n  }\n  this.method = normalizeMethod(options.method || this.method || 'GET')\n  this.mode = options.mode || this.mode || null\n  this.signal = options.signal || this.signal || (function () {\n    if ('AbortController' in g) {\n      var ctrl = new AbortController();\n      return ctrl.signal;\n    }\n  }());\n  this.referrer = null\n\n  if ((this.method === 'GET' || this.method === 'HEAD') && body) {\n    throw new TypeError('Body not allowed for GET or HEAD requests')\n  }\n  this._initBody(body)\n\n  if (this.method === 'GET' || this.method === 'HEAD') {\n    if (options.cache === 'no-store' || options.cache === 'no-cache') {\n      // Search for a '_' parameter in the query string\n      var reParamSearch = /([?&])_=[^&]*/\n      if (reParamSearch.test(this.url)) {\n        // If it already exists then set the value with the current time\n        this.url = this.url.replace(reParamSearch, '$1_=' + new Date().getTime())\n      } else {\n        // Otherwise add a new '_' parameter to the end with the current time\n        var reQueryString = /\\?/\n        this.url += (reQueryString.test(this.url) ? '&' : '?') + '_=' + new Date().getTime()\n      }\n    }\n  }\n}\n\nRequest.prototype.clone = function() {\n  return new Request(this, {body: this._bodyInit})\n}\n\nfunction decode(body) {\n  var form = new FormData()\n  body\n    .trim()\n    .split('&')\n    .forEach(function(bytes) {\n      if (bytes) {\n        var split = bytes.split('=')\n        var name = split.shift().replace(/\\+/g, ' ')\n        var value = split.join('=').replace(/\\+/g, ' ')\n        form.append(decodeURIComponent(name), decodeURIComponent(value))\n      }\n    })\n  return form\n}\n\nfunction parseHeaders(rawHeaders) {\n  var headers = new Headers()\n  // Replace instances of \\r\\n and \\n followed by at least one space or horizontal tab with a space\n  // https://tools.ietf.org/html/rfc7230#section-3.2\n  var preProcessedHeaders = rawHeaders.replace(/\\r?\\n[\\t ]+/g, ' ')\n  // Avoiding split via regex to work around a common IE11 bug with the core-js 3.6.0 regex polyfill\n  // https://github.com/github/fetch/issues/748\n  // https://github.com/zloirock/core-js/issues/751\n  preProcessedHeaders\n    .split('\\r')\n    .map(function(header) {\n      return header.indexOf('\\n') === 0 ? header.substr(1, header.length) : header\n    })\n    .forEach(function(line) {\n      var parts = line.split(':')\n      var key = parts.shift().trim()\n      if (key) {\n        var value = parts.join(':').trim()\n        try {\n          headers.append(key, value)\n        } catch (error) {\n          console.warn('Response ' + error.message)\n        }\n      }\n    })\n  return headers\n}\n\nBody.call(Request.prototype)\n\nfunction Response(bodyInit, options) {\n  if (!(this instanceof Response)) {\n    throw new TypeError('Please use the \"new\" operator, this DOM object constructor cannot be called as a function.')\n  }\n  if (!options) {\n    options = {}\n  }\n\n  this.type = 'default'\n  this.status = options.status === undefined ? 200 : options.status\n  if (this.status < 200 || this.status > 599) {\n    throw new RangeError(\"Failed to construct 'Response': The status provided (0) is outside the range [200, 599].\")\n  }\n  this.ok = this.status >= 200 && this.status < 300\n  this.statusText = options.statusText === undefined ? '' : '' + options.statusText\n  this.headers = new Headers(options.headers)\n  this.url = options.url || ''\n  this._initBody(bodyInit)\n}\n\nBody.call(Response.prototype)\n\nResponse.prototype.clone = function() {\n  return new Response(this._bodyInit, {\n    status: this.status,\n    statusText: this.statusText,\n    headers: new Headers(this.headers),\n    url: this.url\n  })\n}\n\nResponse.error = function() {\n  var response = new Response(null, {status: 200, statusText: ''})\n  response.ok = false\n  response.status = 0\n  response.type = 'error'\n  return response\n}\n\nvar redirectStatuses = [301, 302, 303, 307, 308]\n\nResponse.redirect = function(url, status) {\n  if (redirectStatuses.indexOf(status) === -1) {\n    throw new RangeError('Invalid status code')\n  }\n\n  return new Response(null, {status: status, headers: {location: url}})\n}\n\nvar DOMException = g.DOMException\ntry {\n  new DOMException()\n} catch (err) {\n  DOMException = function(message, name) {\n    this.message = message\n    this.name = name\n    var error = Error(message)\n    this.stack = error.stack\n  }\n  DOMException.prototype = Object.create(Error.prototype)\n  DOMException.prototype.constructor = DOMException\n}\n\nfunction fetch(input, init) {\n  return new Promise(function(resolve, reject) {\n    var request = new Request(input, init)\n\n    if (request.signal && request.signal.aborted) {\n      return reject(new DOMException('Aborted', 'AbortError'))\n    }\n\n    var xhr = new XMLHttpRequest()\n\n    function abortXhr() {\n      xhr.abort()\n    }\n\n    xhr.onload = function() {\n      var options = {\n        statusText: xhr.statusText,\n        headers: parseHeaders(xhr.getAllResponseHeaders() || '')\n      }\n      // This check if specifically for when a user fetches a file locally from the file system\n      // Only if the status is out of a normal range\n      if (request.url.indexOf('file://') === 0 && (xhr.status < 200 || xhr.status > 599)) {\n        options.status = 200;\n      } else {\n        options.status = xhr.status;\n      }\n      options.url = 'responseURL' in xhr ? xhr.responseURL : options.headers.get('X-Request-URL')\n      var body = 'response' in xhr ? xhr.response : xhr.responseText\n      setTimeout(function() {\n        resolve(new Response(body, options))\n      }, 0)\n    }\n\n    xhr.onerror = function() {\n      setTimeout(function() {\n        reject(new TypeError('Network request failed'))\n      }, 0)\n    }\n\n    xhr.ontimeout = function() {\n      setTimeout(function() {\n        reject(new TypeError('Network request timed out'))\n      }, 0)\n    }\n\n    xhr.onabort = function() {\n      setTimeout(function() {\n        reject(new DOMException('Aborted', 'AbortError'))\n      }, 0)\n    }\n\n    function fixUrl(url) {\n      try {\n        return url === '' && g.location.href ? g.location.href : url\n      } catch (e) {\n        return url\n      }\n    }\n\n    xhr.open(request.method, fixUrl(request.url), true)\n\n    if (request.credentials === 'include') {\n      xhr.withCredentials = true\n    } else if (request.credentials === 'omit') {\n      xhr.withCredentials = false\n    }\n\n    if ('responseType' in xhr) {\n      if (support.blob) {\n        xhr.responseType = 'blob'\n      } else if (\n        support.arrayBuffer\n      ) {\n        xhr.responseType = 'arraybuffer'\n      }\n    }\n\n    if (init && typeof init.headers === 'object' && !(init.headers instanceof Headers || (g.Headers && init.headers instanceof g.Headers))) {\n      var names = [];\n      Object.getOwnPropertyNames(init.headers).forEach(function(name) {\n        names.push(normalizeName(name))\n        xhr.setRequestHeader(name, normalizeValue(init.headers[name]))\n      })\n      request.headers.forEach(function(value, name) {\n        if (names.indexOf(name) === -1) {\n          xhr.setRequestHeader(name, value)\n        }\n      })\n    } else {\n      request.headers.forEach(function(value, name) {\n        xhr.setRequestHeader(name, value)\n      })\n    }\n\n    if (request.signal) {\n      request.signal.addEventListener('abort', abortXhr)\n\n      xhr.onreadystatechange = function() {\n        // DONE (success or failure)\n        if (xhr.readyState === 4) {\n          request.signal.removeEventListener('abort', abortXhr)\n        }\n      }\n    }\n\n    xhr.send(typeof request._bodyInit === 'undefined' ? null : request._bodyInit)\n  })\n}\n\nfetch.polyfill = true\n\nif (!g.fetch) {\n  g.fetch = fetch\n  g.Headers = Headers\n  g.Request = Request\n  g.Response = Response\n}\n\n\n//# sourceURL=webpack://video-player/./node_modules/whatwg-fetch/fetch.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _js_city_search__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./js/city-search */ \"./src/js/city-search.js\");\n\n\ndocument.getElementById(\"search-button\").onclick = () => {\n    (0,_js_city_search__WEBPACK_IMPORTED_MODULE_0__.getCity)();\n}\n\n//# sourceURL=webpack://video-player/./src/index.js?");

/***/ }),

/***/ "./src/js/city-search.js":
/*!*******************************!*\
  !*** ./src/js/city-search.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   getCity: () => (/* binding */ getCity)\n/* harmony export */ });\n/* harmony import */ var _ui__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ui */ \"./src/js/ui.js\");\n/* harmony import */ var _utils_API_connect__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./utils/API-connect */ \"./src/js/utils/API-connect.js\");\n/* harmony import */ var _utils_capitalise_first_letter__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./utils/capitalise-first-letter */ \"./src/js/utils/capitalise-first-letter.js\");\n/* harmony import */ var _video_player__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./video-player */ \"./src/js/video-player.js\");\n/* harmony import */ var _utils_elements_links__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./utils/elements-links */ \"./src/js/utils/elements-links.js\");\n\n\n\n\n\n\nfunction buildDataSet(videoData, title) {\n    return {\n        id: videoData.id,\n        title: (0,_utils_capitalise_first_letter__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(title),\n        image: videoData.image,\n        file: {\n            quality: videoData.video_files[0].quality,\n            link: videoData.video_files[0].link\n        }\n    };\n}\n\nfunction getVideos(cityTitle) {\n    const query = cityTitle;\n    _utils_API_connect__WEBPACK_IMPORTED_MODULE_1__.client.videos.search({ query })\n        .then((data) => {\n            return data.videos;\n        })\n        .then((data) => {\n            // set own video list\n            const videoList = [];\n            data.forEach(video => {\n                if (video.height < video.width) {\n                    videoList.push(buildDataSet(video, query));\n                }\n            });\n            return videoList;\n        })\n        .then((data) => {\n            (0,_ui__WEBPACK_IMPORTED_MODULE_0__.clearSearchGallery)();\n            data.forEach((video) => {\n                (0,_ui__WEBPACK_IMPORTED_MODULE_0__.fillSearchGallery)(video);\n            });\n            (0,_video_player__WEBPACK_IMPORTED_MODULE_3__.setVideoIntoPlayer)(data[0].file.link);\n        })\n        .catch((err) => {\n            console.log(err);\n        })\n}\n\nfunction getCity() {\n    let searchValue = _utils_elements_links__WEBPACK_IMPORTED_MODULE_4__.searchInput.value;\n    (0,_ui__WEBPACK_IMPORTED_MODULE_0__.setNewVideoTitle)((0,_utils_capitalise_first_letter__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(searchValue));\n    getVideos(searchValue);\n}\n\n//# sourceURL=webpack://video-player/./src/js/city-search.js?");

/***/ }),

/***/ "./src/js/ui.js":
/*!**********************!*\
  !*** ./src/js/ui.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   clearSearchGallery: () => (/* binding */ clearSearchGallery),\n/* harmony export */   fillSearchGallery: () => (/* binding */ fillSearchGallery),\n/* harmony export */   setNewVideoTitle: () => (/* binding */ setNewVideoTitle)\n/* harmony export */ });\n/* harmony import */ var _video_player__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./video-player */ \"./src/js/video-player.js\");\n/* harmony import */ var _utils_elements_links__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./utils/elements-links */ \"./src/js/utils/elements-links.js\");\n\n\n\nfunction clearSearchGallery() {\n    _utils_elements_links__WEBPACK_IMPORTED_MODULE_1__.searchGallery.innerHTML = \"\";\n}\n\nfunction galleryElementHeader(title) {\n    const videoHeader = document.createElement(\"h2\");\n    videoHeader.classList.add(\"city-name\");\n    videoHeader.innerText = `${title}`;\n    return videoHeader;\n}\n\nfunction galleryElementPoster(id, image) {\n    const videoPoster = document.createElement(\"img\");\n    videoPoster.classList.add(\"city-img\");\n    videoPoster.src = image;\n    videoPoster.alt = id;\n    return videoPoster;\n}\n\nfunction fillSearchGallery(video) {\n    // search option container\n    const videoSelectContainer = document.createElement(\"li\");\n    videoSelectContainer.classList.add(\"city-container\");\n    // Add click event listener to the element\n    videoSelectContainer.addEventListener('click', () => {\n        (0,_video_player__WEBPACK_IMPORTED_MODULE_0__.setVideoIntoPlayer)(video.file.link);\n    });\n    // search header\n    videoSelectContainer.append(galleryElementHeader(video.title));\n    // video poster\n    videoSelectContainer.append(galleryElementPoster(video.id, video.image));\n    _utils_elements_links__WEBPACK_IMPORTED_MODULE_1__.searchGallery.appendChild(videoSelectContainer);\n}\n\nfunction setNewVideoTitle(newTitle) {\n    _utils_elements_links__WEBPACK_IMPORTED_MODULE_1__.locationHeader.innerText = newTitle;\n}\n\n//# sourceURL=webpack://video-player/./src/js/ui.js?");

/***/ }),

/***/ "./src/js/utils/API-connect.js":
/*!*************************************!*\
  !*** ./src/js/utils/API-connect.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   client: () => (/* binding */ client)\n/* harmony export */ });\n/* harmony import */ var pexels__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! pexels */ \"./node_modules/pexels/dist/main.module.js\");\n/* harmony import */ var _constant__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./constant */ \"./src/js/utils/constant.js\");\n\n\n\nconst client = (0,pexels__WEBPACK_IMPORTED_MODULE_0__.createClient)(_constant__WEBPACK_IMPORTED_MODULE_1__.API_KEY);\n\n//# sourceURL=webpack://video-player/./src/js/utils/API-connect.js?");

/***/ }),

/***/ "./src/js/utils/capitalise-first-letter.js":
/*!*************************************************!*\
  !*** ./src/js/utils/capitalise-first-letter.js ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ capitalizeFirstLetter)\n/* harmony export */ });\nfunction capitalizeFirstLetter(val) {\n    return String(val).charAt(0).toUpperCase() + String(val).slice(1);\n}\n\n//# sourceURL=webpack://video-player/./src/js/utils/capitalise-first-letter.js?");

/***/ }),

/***/ "./src/js/utils/constant.js":
/*!**********************************!*\
  !*** ./src/js/utils/constant.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   API_KEY: () => (/* binding */ API_KEY)\n/* harmony export */ });\nconst API_KEY = \"4R527DqjZxkmPK0HF4oUreYwDkOvQWX0Zmqyj8Y8LCCz3spmtYpC9fWo\";\n\n//# sourceURL=webpack://video-player/./src/js/utils/constant.js?");

/***/ }),

/***/ "./src/js/utils/elements-links.js":
/*!****************************************!*\
  !*** ./src/js/utils/elements-links.js ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   locationHeader: () => (/* binding */ locationHeader),\n/* harmony export */   searchGallery: () => (/* binding */ searchGallery),\n/* harmony export */   searchInput: () => (/* binding */ searchInput),\n/* harmony export */   videoPlayer: () => (/* binding */ videoPlayer)\n/* harmony export */ });\nconst searchGallery = document.getElementById(\"city-selection\");\r\nconst videoPlayer = document.getElementById(\"video-player\");\r\nconst locationHeader = document.getElementById(\"current-location\");\r\nconst searchInput = document.getElementById(\"search-field\");\n\n//# sourceURL=webpack://video-player/./src/js/utils/elements-links.js?");

/***/ }),

/***/ "./src/js/video-player.js":
/*!********************************!*\
  !*** ./src/js/video-player.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   setVideoIntoPlayer: () => (/* binding */ setVideoIntoPlayer)\n/* harmony export */ });\n/* harmony import */ var _utils_elements_links__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./utils/elements-links */ \"./src/js/utils/elements-links.js\");\n\n\nfunction setVideoIntoPlayer(videoLink) {\n    // Check if the video element exists\n    if (!_utils_elements_links__WEBPACK_IMPORTED_MODULE_0__.videoPlayer) {\n        console.error(\"No video element found\");\n        return;\n    }\n    // Update the video source\n    _utils_elements_links__WEBPACK_IMPORTED_MODULE_0__.videoPlayer.src = videoLink;\n    // Reload the video to apply the new source\n    _utils_elements_links__WEBPACK_IMPORTED_MODULE_0__.videoPlayer.load();\n    // Optionally, play the video immediately\n    _utils_elements_links__WEBPACK_IMPORTED_MODULE_0__.videoPlayer.play();\n}\n\n\n\n//# sourceURL=webpack://video-player/./src/js/video-player.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;