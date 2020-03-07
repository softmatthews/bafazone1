/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "/";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 10);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./resources/ass/js/jquery.countdown.plugins.js":
/*!******************************************************!*\
  !*** ./resources/ass/js/jquery.countdown.plugins.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

/*! Simple JavaScript Inheritance
 * By John Resig http://ejohn.org/
 * MIT Licensed.
 */
!function () {
  "use strict";

  var a = !1;
  window.JQClass = function () {}, JQClass.classes = {}, JQClass.extend = function b(c) {
    function d() {
      !a && this._init && this._init.apply(this, arguments);
    }

    var e = this.prototype;
    a = !0;
    var f = new this();
    a = !1;

    for (var g in c) {
      if ("function" == typeof c[g] && "function" == typeof e[g]) f[g] = function (a, b) {
        return function () {
          var c = this._super;

          this._super = function (b) {
            return e[a].apply(this, b || []);
          };

          var d = b.apply(this, arguments);
          return this._super = c, d;
        };
      }(g, c[g]);else if ("object" == _typeof(c[g]) && "object" == _typeof(e[g]) && "defaultOptions" === g) {
        var h,
            i = e[g],
            j = c[g],
            k = {};

        for (h in i) {
          k[h] = i[h];
        }

        for (h in j) {
          k[h] = j[h];
        }

        f[g] = k;
      } else f[g] = c[g];
    }

    return d.prototype = f, d.prototype.constructor = d, d.extend = b, d;
  };
}(),
/*! Abstract base class for collection plugins v1.0.2.
Written by Keith Wood (wood.keith{at}optusnet.com.au) December 2013.
Licensed under the MIT license (http://keith-wood.name/licence.html). */
function ($) {
  "use strict";

  function camelCase(a) {
    return a.replace(/-([a-z])/g, function (a, b) {
      return b.toUpperCase();
    });
  }

  JQClass.classes.JQPlugin = JQClass.extend({
    name: "plugin",
    defaultOptions: {},
    regionalOptions: {},
    deepMerge: !0,
    _getMarker: function _getMarker() {
      return "is-" + this.name;
    },
    _init: function _init() {
      $.extend(this.defaultOptions, this.regionalOptions && this.regionalOptions[""] || {});
      var a = camelCase(this.name);
      $[a] = this, $.fn[a] = function (b) {
        var c = Array.prototype.slice.call(arguments, 1),
            d = this,
            e = this;
        return this.each(function () {
          if ("string" == typeof b) {
            if ("_" === b[0] || !$[a][b]) throw "Unknown method: " + b;
            var f = $[a][b].apply($[a], [this].concat(c));
            if (f !== d && void 0 !== f) return e = f, !1;
          } else $[a]._attach(this, b);
        }), e;
      };
    },
    setDefaults: function setDefaults(a) {
      $.extend(this.defaultOptions, a || {});
    },
    _attach: function _attach(a, b) {
      if (a = $(a), !a.hasClass(this._getMarker())) {
        a.addClass(this._getMarker()), b = $.extend(this.deepMerge, {}, this.defaultOptions, this._getMetadata(a), b || {});
        var c = $.extend({
          name: this.name,
          elem: a,
          options: b
        }, this._instSettings(a, b));
        a.data(this.name, c), this._postAttach(a, c), this.option(a, b);
      }
    },
    _instSettings: function _instSettings(a, b) {
      return {};
    },
    _postAttach: function _postAttach(a, b) {},
    _getMetadata: function _getMetadata(elem) {
      try {
        var data = elem.data(this.name.toLowerCase()) || "";
        data = data.replace(/(\\?)'/g, function (a, b) {
          return b ? "'" : '"';
        }).replace(/([a-zA-Z0-9]+):/g, function (a, b, c) {
          var d = data.substring(0, c).match(/"/g);
          return d && d.length % 2 !== 0 ? b + ":" : '"' + b + '":';
        }).replace(/\\:/g, ":"), data = $.parseJSON("{" + data + "}");

        for (var key in data) {
          if (data.hasOwnProperty(key)) {
            var value = data[key];
            "string" == typeof value && value.match(/^new Date\(([-0-9,\s]*)\)$/) && (data[key] = eval(value));
          }
        }

        return data;
      } catch (a) {
        return {};
      }
    },
    _getInst: function _getInst(a) {
      return $(a).data(this.name) || {};
    },
    option: function option(a, b, c) {
      a = $(a);
      var d = a.data(this.name),
          e = b || {};
      return !b || "string" == typeof b && "undefined" == typeof c ? (e = (d || {}).options, e && b ? e[b] : e) : void (a.hasClass(this._getMarker()) && ("string" == typeof b && (e = {}, e[b] = c), this._optionsChanged(a, d, e), $.extend(d.options, e)));
    },
    _optionsChanged: function _optionsChanged(a, b, c) {},
    destroy: function destroy(a) {
      a = $(a), a.hasClass(this._getMarker()) && (this._preDestroy(a, this._getInst(a)), a.removeData(this.name).removeClass(this._getMarker()));
    },
    _preDestroy: function _preDestroy(a, b) {}
  }), $.JQPlugin = {
    createPlugin: function createPlugin(a, b) {
      "object" == _typeof(a) && (b = a, a = "JQPlugin"), a = camelCase(a);
      var c = camelCase(b.name);
      JQClass.classes[c] = JQClass.classes[a].extend(b), new JQClass.classes[c]();
    }
  };
}(jQuery);

/***/ }),

/***/ 10:
/*!************************************************************!*\
  !*** multi ./resources/ass/js/jquery.countdown.plugins.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\xampp3\htdocs\firstlaravel\resources\ass\js\jquery.countdown.plugins.js */"./resources/ass/js/jquery.countdown.plugins.js");


/***/ })

/******/ });