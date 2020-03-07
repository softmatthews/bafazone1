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
/******/ 	return __webpack_require__(__webpack_require__.s = 14);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/jquery/dist/jquery.js":
/*!********************************************!*\
  !*** ./node_modules/jquery/dist/jquery.js ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/*!
 * jQuery JavaScript Library v3.4.1
 * https://jquery.com/
 *
 * Includes Sizzle.js
 * https://sizzlejs.com/
 *
 * Copyright JS Foundation and other contributors
 * Released under the MIT license
 * https://jquery.org/license
 *
 * Date: 2019-05-01T21:04Z
 */
( function( global, factory ) {

	"use strict";

	if (  true && typeof module.exports === "object" ) {

		// For CommonJS and CommonJS-like environments where a proper `window`
		// is present, execute the factory and get jQuery.
		// For environments that do not have a `window` with a `document`
		// (such as Node.js), expose a factory as module.exports.
		// This accentuates the need for the creation of a real `window`.
		// e.g. var jQuery = require("jquery")(window);
		// See ticket #14549 for more info.
		module.exports = global.document ?
			factory( global, true ) :
			function( w ) {
				if ( !w.document ) {
					throw new Error( "jQuery requires a window with a document" );
				}
				return factory( w );
			};
	} else {
		factory( global );
	}

// Pass this if window is not defined yet
} )( typeof window !== "undefined" ? window : this, function( window, noGlobal ) {

// Edge <= 12 - 13+, Firefox <=18 - 45+, IE 10 - 11, Safari 5.1 - 9+, iOS 6 - 9.1
// throw exceptions when non-strict code (e.g., ASP.NET 4.5) accesses strict mode
// arguments.callee.caller (trac-13335). But as of jQuery 3.0 (2016), strict mode should be common
// enough that all such attempts are guarded in a try block.
"use strict";

var arr = [];

var document = window.document;

var getProto = Object.getPrototypeOf;

var slice = arr.slice;

var concat = arr.concat;

var push = arr.push;

var indexOf = arr.indexOf;

var class2type = {};

var toString = class2type.toString;

var hasOwn = class2type.hasOwnProperty;

var fnToString = hasOwn.toString;

var ObjectFunctionString = fnToString.call( Object );

var support = {};

var isFunction = function isFunction( obj ) {

      // Support: Chrome <=57, Firefox <=52
      // In some browsers, typeof returns "function" for HTML <object> elements
      // (i.e., `typeof document.createElement( "object" ) === "function"`).
      // We don't want to classify *any* DOM node as a function.
      return typeof obj === "function" && typeof obj.nodeType !== "number";
  };


var isWindow = function isWindow( obj ) {
		return obj != null && obj === obj.window;
	};




	var preservedScriptAttributes = {
		type: true,
		src: true,
		nonce: true,
		noModule: true
	};

	function DOMEval( code, node, doc ) {
		doc = doc || document;

		var i, val,
			script = doc.createElement( "script" );

		script.text = code;
		if ( node ) {
			for ( i in preservedScriptAttributes ) {

				// Support: Firefox 64+, Edge 18+
				// Some browsers don't support the "nonce" property on scripts.
				// On the other hand, just using `getAttribute` is not enough as
				// the `nonce` attribute is reset to an empty string whenever it
				// becomes browsing-context connected.
				// See https://github.com/whatwg/html/issues/2369
				// See https://html.spec.whatwg.org/#nonce-attributes
				// The `node.getAttribute` check was added for the sake of
				// `jQuery.globalEval` so that it can fake a nonce-containing node
				// via an object.
				val = node[ i ] || node.getAttribute && node.getAttribute( i );
				if ( val ) {
					script.setAttribute( i, val );
				}
			}
		}
		doc.head.appendChild( script ).parentNode.removeChild( script );
	}


function toType( obj ) {
	if ( obj == null ) {
		return obj + "";
	}

	// Support: Android <=2.3 only (functionish RegExp)
	return typeof obj === "object" || typeof obj === "function" ?
		class2type[ toString.call( obj ) ] || "object" :
		typeof obj;
}
/* global Symbol */
// Defining this global in .eslintrc.json would create a danger of using the global
// unguarded in another place, it seems safer to define global only for this module



var
	version = "3.4.1",

	// Define a local copy of jQuery
	jQuery = function( selector, context ) {

		// The jQuery object is actually just the init constructor 'enhanced'
		// Need init if jQuery is called (just allow error to be thrown if not included)
		return new jQuery.fn.init( selector, context );
	},

	// Support: Android <=4.0 only
	// Make sure we trim BOM and NBSP
	rtrim = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g;

jQuery.fn = jQuery.prototype = {

	// The current version of jQuery being used
	jquery: version,

	constructor: jQuery,

	// The default length of a jQuery object is 0
	length: 0,

	toArray: function() {
		return slice.call( this );
	},

	// Get the Nth element in the matched element set OR
	// Get the whole matched element set as a clean array
	get: function( num ) {

		// Return all the elements in a clean array
		if ( num == null ) {
			return slice.call( this );
		}

		// Return just the one element from the set
		return num < 0 ? this[ num + this.length ] : this[ num ];
	},

	// Take an array of elements and push it onto the stack
	// (returning the new matched element set)
	pushStack: function( elems ) {

		// Build a new jQuery matched element set
		var ret = jQuery.merge( this.constructor(), elems );

		// Add the old object onto the stack (as a reference)
		ret.prevObject = this;

		// Return the newly-formed element set
		return ret;
	},

	// Execute a callback for every element in the matched set.
	each: function( callback ) {
		return jQuery.each( this, callback );
	},

	map: function( callback ) {
		return this.pushStack( jQuery.map( this, function( elem, i ) {
			return callback.call( elem, i, elem );
		} ) );
	},

	slice: function() {
		return this.pushStack( slice.apply( this, arguments ) );
	},

	first: function() {
		return this.eq( 0 );
	},

	last: function() {
		return this.eq( -1 );
	},

	eq: function( i ) {
		var len = this.length,
			j = +i + ( i < 0 ? len : 0 );
		return this.pushStack( j >= 0 && j < len ? [ this[ j ] ] : [] );
	},

	end: function() {
		return this.prevObject || this.constructor();
	},

	// For internal use only.
	// Behaves like an Array's method, not like a jQuery method.
	push: push,
	sort: arr.sort,
	splice: arr.splice
};

jQuery.extend = jQuery.fn.extend = function() {
	var options, name, src, copy, copyIsArray, clone,
		target = arguments[ 0 ] || {},
		i = 1,
		length = arguments.length,
		deep = false;

	// Handle a deep copy situation
	if ( typeof target === "boolean" ) {
		deep = target;

		// Skip the boolean and the target
		target = arguments[ i ] || {};
		i++;
	}

	// Handle case when target is a string or something (possible in deep copy)
	if ( typeof target !== "object" && !isFunction( target ) ) {
		target = {};
	}

	// Extend jQuery itself if only one argument is passed
	if ( i === length ) {
		target = this;
		i--;
	}

	for ( ; i < length; i++ ) {

		// Only deal with non-null/undefined values
		if ( ( options = arguments[ i ] ) != null ) {

			// Extend the base object
			for ( name in options ) {
				copy = options[ name ];

				// Prevent Object.prototype pollution
				// Prevent never-ending loop
				if ( name === "__proto__" || target === copy ) {
					continue;
				}

				// Recurse if we're merging plain objects or arrays
				if ( deep && copy && ( jQuery.isPlainObject( copy ) ||
					( copyIsArray = Array.isArray( copy ) ) ) ) {
					src = target[ name ];

					// Ensure proper type for the source value
					if ( copyIsArray && !Array.isArray( src ) ) {
						clone = [];
					} else if ( !copyIsArray && !jQuery.isPlainObject( src ) ) {
						clone = {};
					} else {
						clone = src;
					}
					copyIsArray = false;

					// Never move original objects, clone them
					target[ name ] = jQuery.extend( deep, clone, copy );

				// Don't bring in undefined values
				} else if ( copy !== undefined ) {
					target[ name ] = copy;
				}
			}
		}
	}

	// Return the modified object
	return target;
};

jQuery.extend( {

	// Unique for each copy of jQuery on the page
	expando: "jQuery" + ( version + Math.random() ).replace( /\D/g, "" ),

	// Assume jQuery is ready without the ready module
	isReady: true,

	error: function( msg ) {
		throw new Error( msg );
	},

	noop: function() {},

	isPlainObject: function( obj ) {
		var proto, Ctor;

		// Detect obvious negatives
		// Use toString instead of jQuery.type to catch host objects
		if ( !obj || toString.call( obj ) !== "[object Object]" ) {
			return false;
		}

		proto = getProto( obj );

		// Objects with no prototype (e.g., `Object.create( null )`) are plain
		if ( !proto ) {
			return true;
		}

		// Objects with prototype are plain iff they were constructed by a global Object function
		Ctor = hasOwn.call( proto, "constructor" ) && proto.constructor;
		return typeof Ctor === "function" && fnToString.call( Ctor ) === ObjectFunctionString;
	},

	isEmptyObject: function( obj ) {
		var name;

		for ( name in obj ) {
			return false;
		}
		return true;
	},

	// Evaluates a script in a global context
	globalEval: function( code, options ) {
		DOMEval( code, { nonce: options && options.nonce } );
	},

	each: function( obj, callback ) {
		var length, i = 0;

		if ( isArrayLike( obj ) ) {
			length = obj.length;
			for ( ; i < length; i++ ) {
				if ( callback.call( obj[ i ], i, obj[ i ] ) === false ) {
					break;
				}
			}
		} else {
			for ( i in obj ) {
				if ( callback.call( obj[ i ], i, obj[ i ] ) === false ) {
					break;
				}
			}
		}

		return obj;
	},

	// Support: Android <=4.0 only
	trim: function( text ) {
		return text == null ?
			"" :
			( text + "" ).replace( rtrim, "" );
	},

	// results is for internal usage only
	makeArray: function( arr, results ) {
		var ret = results || [];

		if ( arr != null ) {
			if ( isArrayLike( Object( arr ) ) ) {
				jQuery.merge( ret,
					typeof arr === "string" ?
					[ arr ] : arr
				);
			} else {
				push.call( ret, arr );
			}
		}

		return ret;
	},

	inArray: function( elem, arr, i ) {
		return arr == null ? -1 : indexOf.call( arr, elem, i );
	},

	// Support: Android <=4.0 only, PhantomJS 1 only
	// push.apply(_, arraylike) throws on ancient WebKit
	merge: function( first, second ) {
		var len = +second.length,
			j = 0,
			i = first.length;

		for ( ; j < len; j++ ) {
			first[ i++ ] = second[ j ];
		}

		first.length = i;

		return first;
	},

	grep: function( elems, callback, invert ) {
		var callbackInverse,
			matches = [],
			i = 0,
			length = elems.length,
			callbackExpect = !invert;

		// Go through the array, only saving the items
		// that pass the validator function
		for ( ; i < length; i++ ) {
			callbackInverse = !callback( elems[ i ], i );
			if ( callbackInverse !== callbackExpect ) {
				matches.push( elems[ i ] );
			}
		}

		return matches;
	},

	// arg is for internal usage only
	map: function( elems, callback, arg ) {
		var length, value,
			i = 0,
			ret = [];

		// Go through the array, translating each of the items to their new values
		if ( isArrayLike( elems ) ) {
			length = elems.length;
			for ( ; i < length; i++ ) {
				value = callback( elems[ i ], i, arg );

				if ( value != null ) {
					ret.push( value );
				}
			}

		// Go through every key on the object,
		} else {
			for ( i in elems ) {
				value = callback( elems[ i ], i, arg );

				if ( value != null ) {
					ret.push( value );
				}
			}
		}

		// Flatten any nested arrays
		return concat.apply( [], ret );
	},

	// A global GUID counter for objects
	guid: 1,

	// jQuery.support is not used in Core but other projects attach their
	// properties to it so it needs to exist.
	support: support
} );

if ( typeof Symbol === "function" ) {
	jQuery.fn[ Symbol.iterator ] = arr[ Symbol.iterator ];
}

// Populate the class2type map
jQuery.each( "Boolean Number String Function Array Date RegExp Object Error Symbol".split( " " ),
function( i, name ) {
	class2type[ "[object " + name + "]" ] = name.toLowerCase();
} );

function isArrayLike( obj ) {

	// Support: real iOS 8.2 only (not reproducible in simulator)
	// `in` check used to prevent JIT error (gh-2145)
	// hasOwn isn't used here due to false negatives
	// regarding Nodelist length in IE
	var length = !!obj && "length" in obj && obj.length,
		type = toType( obj );

	if ( isFunction( obj ) || isWindow( obj ) ) {
		return false;
	}

	return type === "array" || length === 0 ||
		typeof length === "number" && length > 0 && ( length - 1 ) in obj;
}
var Sizzle =
/*!
 * Sizzle CSS Selector Engine v2.3.4
 * https://sizzlejs.com/
 *
 * Copyright JS Foundation and other contributors
 * Released under the MIT license
 * https://js.foundation/
 *
 * Date: 2019-04-08
 */
(function( window ) {

var i,
	support,
	Expr,
	getText,
	isXML,
	tokenize,
	compile,
	select,
	outermostContext,
	sortInput,
	hasDuplicate,

	// Local document vars
	setDocument,
	document,
	docElem,
	documentIsHTML,
	rbuggyQSA,
	rbuggyMatches,
	matches,
	contains,

	// Instance-specific data
	expando = "sizzle" + 1 * new Date(),
	preferredDoc = window.document,
	dirruns = 0,
	done = 0,
	classCache = createCache(),
	tokenCache = createCache(),
	compilerCache = createCache(),
	nonnativeSelectorCache = createCache(),
	sortOrder = function( a, b ) {
		if ( a === b ) {
			hasDuplicate = true;
		}
		return 0;
	},

	// Instance methods
	hasOwn = ({}).hasOwnProperty,
	arr = [],
	pop = arr.pop,
	push_native = arr.push,
	push = arr.push,
	slice = arr.slice,
	// Use a stripped-down indexOf as it's faster than native
	// https://jsperf.com/thor-indexof-vs-for/5
	indexOf = function( list, elem ) {
		var i = 0,
			len = list.length;
		for ( ; i < len; i++ ) {
			if ( list[i] === elem ) {
				return i;
			}
		}
		return -1;
	},

	booleans = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",

	// Regular expressions

	// http://www.w3.org/TR/css3-selectors/#whitespace
	whitespace = "[\\x20\\t\\r\\n\\f]",

	// http://www.w3.org/TR/CSS21/syndata.html#value-def-identifier
	identifier = "(?:\\\\.|[\\w-]|[^\0-\\xa0])+",

	// Attribute selectors: http://www.w3.org/TR/selectors/#attribute-selectors
	attributes = "\\[" + whitespace + "*(" + identifier + ")(?:" + whitespace +
		// Operator (capture 2)
		"*([*^$|!~]?=)" + whitespace +
		// "Attribute values must be CSS identifiers [capture 5] or strings [capture 3 or capture 4]"
		"*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" + identifier + "))|)" + whitespace +
		"*\\]",

	pseudos = ":(" + identifier + ")(?:\\((" +
		// To reduce the number of selectors needing tokenize in the preFilter, prefer arguments:
		// 1. quoted (capture 3; capture 4 or capture 5)
		"('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|" +
		// 2. simple (capture 6)
		"((?:\\\\.|[^\\\\()[\\]]|" + attributes + ")*)|" +
		// 3. anything else (capture 2)
		".*" +
		")\\)|)",

	// Leading and non-escaped trailing whitespace, capturing some non-whitespace characters preceding the latter
	rwhitespace = new RegExp( whitespace + "+", "g" ),
	rtrim = new RegExp( "^" + whitespace + "+|((?:^|[^\\\\])(?:\\\\.)*)" + whitespace + "+$", "g" ),

	rcomma = new RegExp( "^" + whitespace + "*," + whitespace + "*" ),
	rcombinators = new RegExp( "^" + whitespace + "*([>+~]|" + whitespace + ")" + whitespace + "*" ),
	rdescend = new RegExp( whitespace + "|>" ),

	rpseudo = new RegExp( pseudos ),
	ridentifier = new RegExp( "^" + identifier + "$" ),

	matchExpr = {
		"ID": new RegExp( "^#(" + identifier + ")" ),
		"CLASS": new RegExp( "^\\.(" + identifier + ")" ),
		"TAG": new RegExp( "^(" + identifier + "|[*])" ),
		"ATTR": new RegExp( "^" + attributes ),
		"PSEUDO": new RegExp( "^" + pseudos ),
		"CHILD": new RegExp( "^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + whitespace +
			"*(even|odd|(([+-]|)(\\d*)n|)" + whitespace + "*(?:([+-]|)" + whitespace +
			"*(\\d+)|))" + whitespace + "*\\)|)", "i" ),
		"bool": new RegExp( "^(?:" + booleans + ")$", "i" ),
		// For use in libraries implementing .is()
		// We use this for POS matching in `select`
		"needsContext": new RegExp( "^" + whitespace + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" +
			whitespace + "*((?:-\\d)?\\d*)" + whitespace + "*\\)|)(?=[^-]|$)", "i" )
	},

	rhtml = /HTML$/i,
	rinputs = /^(?:input|select|textarea|button)$/i,
	rheader = /^h\d$/i,

	rnative = /^[^{]+\{\s*\[native \w/,

	// Easily-parseable/retrievable ID or TAG or CLASS selectors
	rquickExpr = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,

	rsibling = /[+~]/,

	// CSS escapes
	// http://www.w3.org/TR/CSS21/syndata.html#escaped-characters
	runescape = new RegExp( "\\\\([\\da-f]{1,6}" + whitespace + "?|(" + whitespace + ")|.)", "ig" ),
	funescape = function( _, escaped, escapedWhitespace ) {
		var high = "0x" + escaped - 0x10000;
		// NaN means non-codepoint
		// Support: Firefox<24
		// Workaround erroneous numeric interpretation of +"0x"
		return high !== high || escapedWhitespace ?
			escaped :
			high < 0 ?
				// BMP codepoint
				String.fromCharCode( high + 0x10000 ) :
				// Supplemental Plane codepoint (surrogate pair)
				String.fromCharCode( high >> 10 | 0xD800, high & 0x3FF | 0xDC00 );
	},

	// CSS string/identifier serialization
	// https://drafts.csswg.org/cssom/#common-serializing-idioms
	rcssescape = /([\0-\x1f\x7f]|^-?\d)|^-$|[^\0-\x1f\x7f-\uFFFF\w-]/g,
	fcssescape = function( ch, asCodePoint ) {
		if ( asCodePoint ) {

			// U+0000 NULL becomes U+FFFD REPLACEMENT CHARACTER
			if ( ch === "\0" ) {
				return "\uFFFD";
			}

			// Control characters and (dependent upon position) numbers get escaped as code points
			return ch.slice( 0, -1 ) + "\\" + ch.charCodeAt( ch.length - 1 ).toString( 16 ) + " ";
		}

		// Other potentially-special ASCII characters get backslash-escaped
		return "\\" + ch;
	},

	// Used for iframes
	// See setDocument()
	// Removing the function wrapper causes a "Permission Denied"
	// error in IE
	unloadHandler = function() {
		setDocument();
	},

	inDisabledFieldset = addCombinator(
		function( elem ) {
			return elem.disabled === true && elem.nodeName.toLowerCase() === "fieldset";
		},
		{ dir: "parentNode", next: "legend" }
	);

// Optimize for push.apply( _, NodeList )
try {
	push.apply(
		(arr = slice.call( preferredDoc.childNodes )),
		preferredDoc.childNodes
	);
	// Support: Android<4.0
	// Detect silently failing push.apply
	arr[ preferredDoc.childNodes.length ].nodeType;
} catch ( e ) {
	push = { apply: arr.length ?

		// Leverage slice if possible
		function( target, els ) {
			push_native.apply( target, slice.call(els) );
		} :

		// Support: IE<9
		// Otherwise append directly
		function( target, els ) {
			var j = target.length,
				i = 0;
			// Can't trust NodeList.length
			while ( (target[j++] = els[i++]) ) {}
			target.length = j - 1;
		}
	};
}

function Sizzle( selector, context, results, seed ) {
	var m, i, elem, nid, match, groups, newSelector,
		newContext = context && context.ownerDocument,

		// nodeType defaults to 9, since context defaults to document
		nodeType = context ? context.nodeType : 9;

	results = results || [];

	// Return early from calls with invalid selector or context
	if ( typeof selector !== "string" || !selector ||
		nodeType !== 1 && nodeType !== 9 && nodeType !== 11 ) {

		return results;
	}

	// Try to shortcut find operations (as opposed to filters) in HTML documents
	if ( !seed ) {

		if ( ( context ? context.ownerDocument || context : preferredDoc ) !== document ) {
			setDocument( context );
		}
		context = context || document;

		if ( documentIsHTML ) {

			// If the selector is sufficiently simple, try using a "get*By*" DOM method
			// (excepting DocumentFragment context, where the methods don't exist)
			if ( nodeType !== 11 && (match = rquickExpr.exec( selector )) ) {

				// ID selector
				if ( (m = match[1]) ) {

					// Document context
					if ( nodeType === 9 ) {
						if ( (elem = context.getElementById( m )) ) {

							// Support: IE, Opera, Webkit
							// TODO: identify versions
							// getElementById can match elements by name instead of ID
							if ( elem.id === m ) {
								results.push( elem );
								return results;
							}
						} else {
							return results;
						}

					// Element context
					} else {

						// Support: IE, Opera, Webkit
						// TODO: identify versions
						// getElementById can match elements by name instead of ID
						if ( newContext && (elem = newContext.getElementById( m )) &&
							contains( context, elem ) &&
							elem.id === m ) {

							results.push( elem );
							return results;
						}
					}

				// Type selector
				} else if ( match[2] ) {
					push.apply( results, context.getElementsByTagName( selector ) );
					return results;

				// Class selector
				} else if ( (m = match[3]) && support.getElementsByClassName &&
					context.getElementsByClassName ) {

					push.apply( results, context.getElementsByClassName( m ) );
					return results;
				}
			}

			// Take advantage of querySelectorAll
			if ( support.qsa &&
				!nonnativeSelectorCache[ selector + " " ] &&
				(!rbuggyQSA || !rbuggyQSA.test( selector )) &&

				// Support: IE 8 only
				// Exclude object elements
				(nodeType !== 1 || context.nodeName.toLowerCase() !== "object") ) {

				newSelector = selector;
				newContext = context;

				// qSA considers elements outside a scoping root when evaluating child or
				// descendant combinators, which is not what we want.
				// In such cases, we work around the behavior by prefixing every selector in the
				// list with an ID selector referencing the scope context.
				// Thanks to Andrew Dupont for this technique.
				if ( nodeType === 1 && rdescend.test( selector ) ) {

					// Capture the context ID, setting it first if necessary
					if ( (nid = context.getAttribute( "id" )) ) {
						nid = nid.replace( rcssescape, fcssescape );
					} else {
						context.setAttribute( "id", (nid = expando) );
					}

					// Prefix every selector in the list
					groups = tokenize( selector );
					i = groups.length;
					while ( i-- ) {
						groups[i] = "#" + nid + " " + toSelector( groups[i] );
					}
					newSelector = groups.join( "," );

					// Expand context for sibling selectors
					newContext = rsibling.test( selector ) && testContext( context.parentNode ) ||
						context;
				}

				try {
					push.apply( results,
						newContext.querySelectorAll( newSelector )
					);
					return results;
				} catch ( qsaError ) {
					nonnativeSelectorCache( selector, true );
				} finally {
					if ( nid === expando ) {
						context.removeAttribute( "id" );
					}
				}
			}
		}
	}

	// All others
	return select( selector.replace( rtrim, "$1" ), context, results, seed );
}

/**
 * Create key-value caches of limited size
 * @returns {function(string, object)} Returns the Object data after storing it on itself with
 *	property name the (space-suffixed) string and (if the cache is larger than Expr.cacheLength)
 *	deleting the oldest entry
 */
function createCache() {
	var keys = [];

	function cache( key, value ) {
		// Use (key + " ") to avoid collision with native prototype properties (see Issue #157)
		if ( keys.push( key + " " ) > Expr.cacheLength ) {
			// Only keep the most recent entries
			delete cache[ keys.shift() ];
		}
		return (cache[ key + " " ] = value);
	}
	return cache;
}

/**
 * Mark a function for special use by Sizzle
 * @param {Function} fn The function to mark
 */
function markFunction( fn ) {
	fn[ expando ] = true;
	return fn;
}

/**
 * Support testing using an element
 * @param {Function} fn Passed the created element and returns a boolean result
 */
function assert( fn ) {
	var el = document.createElement("fieldset");

	try {
		return !!fn( el );
	} catch (e) {
		return false;
	} finally {
		// Remove from its parent by default
		if ( el.parentNode ) {
			el.parentNode.removeChild( el );
		}
		// release memory in IE
		el = null;
	}
}

/**
 * Adds the same handler for all of the specified attrs
 * @param {String} attrs Pipe-separated list of attributes
 * @param {Function} handler The method that will be applied
 */
function addHandle( attrs, handler ) {
	var arr = attrs.split("|"),
		i = arr.length;

	while ( i-- ) {
		Expr.attrHandle[ arr[i] ] = handler;
	}
}

/**
 * Checks document order of two siblings
 * @param {Element} a
 * @param {Element} b
 * @returns {Number} Returns less than 0 if a precedes b, greater than 0 if a follows b
 */
function siblingCheck( a, b ) {
	var cur = b && a,
		diff = cur && a.nodeType === 1 && b.nodeType === 1 &&
			a.sourceIndex - b.sourceIndex;

	// Use IE sourceIndex if available on both nodes
	if ( diff ) {
		return diff;
	}

	// Check if b follows a
	if ( cur ) {
		while ( (cur = cur.nextSibling) ) {
			if ( cur === b ) {
				return -1;
			}
		}
	}

	return a ? 1 : -1;
}

/**
 * Returns a function to use in pseudos for input types
 * @param {String} type
 */
function createInputPseudo( type ) {
	return function( elem ) {
		var name = elem.nodeName.toLowerCase();
		return name === "input" && elem.type === type;
	};
}

/**
 * Returns a function to use in pseudos for buttons
 * @param {String} type
 */
function createButtonPseudo( type ) {
	return function( elem ) {
		var name = elem.nodeName.toLowerCase();
		return (name === "input" || name === "button") && elem.type === type;
	};
}

/**
 * Returns a function to use in pseudos for :enabled/:disabled
 * @param {Boolean} disabled true for :disabled; false for :enabled
 */
function createDisabledPseudo( disabled ) {

	// Known :disabled false positives: fieldset[disabled] > legend:nth-of-type(n+2) :can-disable
	return function( elem ) {

		// Only certain elements can match :enabled or :disabled
		// https://html.spec.whatwg.org/multipage/scripting.html#selector-enabled
		// https://html.spec.whatwg.org/multipage/scripting.html#selector-disabled
		if ( "form" in elem ) {

			// Check for inherited disabledness on relevant non-disabled elements:
			// * listed form-associated elements in a disabled fieldset
			//   https://html.spec.whatwg.org/multipage/forms.html#category-listed
			//   https://html.spec.whatwg.org/multipage/forms.html#concept-fe-disabled
			// * option elements in a disabled optgroup
			//   https://html.spec.whatwg.org/multipage/forms.html#concept-option-disabled
			// All such elements have a "form" property.
			if ( elem.parentNode && elem.disabled === false ) {

				// Option elements defer to a parent optgroup if present
				if ( "label" in elem ) {
					if ( "label" in elem.parentNode ) {
						return elem.parentNode.disabled === disabled;
					} else {
						return elem.disabled === disabled;
					}
				}

				// Support: IE 6 - 11
				// Use the isDisabled shortcut property to check for disabled fieldset ancestors
				return elem.isDisabled === disabled ||

					// Where there is no isDisabled, check manually
					/* jshint -W018 */
					elem.isDisabled !== !disabled &&
						inDisabledFieldset( elem ) === disabled;
			}

			return elem.disabled === disabled;

		// Try to winnow out elements that can't be disabled before trusting the disabled property.
		// Some victims get caught in our net (label, legend, menu, track), but it shouldn't
		// even exist on them, let alone have a boolean value.
		} else if ( "label" in elem ) {
			return elem.disabled === disabled;
		}

		// Remaining elements are neither :enabled nor :disabled
		return false;
	};
}

/**
 * Returns a function to use in pseudos for positionals
 * @param {Function} fn
 */
function createPositionalPseudo( fn ) {
	return markFunction(function( argument ) {
		argument = +argument;
		return markFunction(function( seed, matches ) {
			var j,
				matchIndexes = fn( [], seed.length, argument ),
				i = matchIndexes.length;

			// Match elements found at the specified indexes
			while ( i-- ) {
				if ( seed[ (j = matchIndexes[i]) ] ) {
					seed[j] = !(matches[j] = seed[j]);
				}
			}
		});
	});
}

/**
 * Checks a node for validity as a Sizzle context
 * @param {Element|Object=} context
 * @returns {Element|Object|Boolean} The input node if acceptable, otherwise a falsy value
 */
function testContext( context ) {
	return context && typeof context.getElementsByTagName !== "undefined" && context;
}

// Expose support vars for convenience
support = Sizzle.support = {};

/**
 * Detects XML nodes
 * @param {Element|Object} elem An element or a document
 * @returns {Boolean} True iff elem is a non-HTML XML node
 */
isXML = Sizzle.isXML = function( elem ) {
	var namespace = elem.namespaceURI,
		docElem = (elem.ownerDocument || elem).documentElement;

	// Support: IE <=8
	// Assume HTML when documentElement doesn't yet exist, such as inside loading iframes
	// https://bugs.jquery.com/ticket/4833
	return !rhtml.test( namespace || docElem && docElem.nodeName || "HTML" );
};

/**
 * Sets document-related variables once based on the current document
 * @param {Element|Object} [doc] An element or document object to use to set the document
 * @returns {Object} Returns the current document
 */
setDocument = Sizzle.setDocument = function( node ) {
	var hasCompare, subWindow,
		doc = node ? node.ownerDocument || node : preferredDoc;

	// Return early if doc is invalid or already selected
	if ( doc === document || doc.nodeType !== 9 || !doc.documentElement ) {
		return document;
	}

	// Update global variables
	document = doc;
	docElem = document.documentElement;
	documentIsHTML = !isXML( document );

	// Support: IE 9-11, Edge
	// Accessing iframe documents after unload throws "permission denied" errors (jQuery #13936)
	if ( preferredDoc !== document &&
		(subWindow = document.defaultView) && subWindow.top !== subWindow ) {

		// Support: IE 11, Edge
		if ( subWindow.addEventListener ) {
			subWindow.addEventListener( "unload", unloadHandler, false );

		// Support: IE 9 - 10 only
		} else if ( subWindow.attachEvent ) {
			subWindow.attachEvent( "onunload", unloadHandler );
		}
	}

	/* Attributes
	---------------------------------------------------------------------- */

	// Support: IE<8
	// Verify that getAttribute really returns attributes and not properties
	// (excepting IE8 booleans)
	support.attributes = assert(function( el ) {
		el.className = "i";
		return !el.getAttribute("className");
	});

	/* getElement(s)By*
	---------------------------------------------------------------------- */

	// Check if getElementsByTagName("*") returns only elements
	support.getElementsByTagName = assert(function( el ) {
		el.appendChild( document.createComment("") );
		return !el.getElementsByTagName("*").length;
	});

	// Support: IE<9
	support.getElementsByClassName = rnative.test( document.getElementsByClassName );

	// Support: IE<10
	// Check if getElementById returns elements by name
	// The broken getElementById methods don't pick up programmatically-set names,
	// so use a roundabout getElementsByName test
	support.getById = assert(function( el ) {
		docElem.appendChild( el ).id = expando;
		return !document.getElementsByName || !document.getElementsByName( expando ).length;
	});

	// ID filter and find
	if ( support.getById ) {
		Expr.filter["ID"] = function( id ) {
			var attrId = id.replace( runescape, funescape );
			return function( elem ) {
				return elem.getAttribute("id") === attrId;
			};
		};
		Expr.find["ID"] = function( id, context ) {
			if ( typeof context.getElementById !== "undefined" && documentIsHTML ) {
				var elem = context.getElementById( id );
				return elem ? [ elem ] : [];
			}
		};
	} else {
		Expr.filter["ID"] =  function( id ) {
			var attrId = id.replace( runescape, funescape );
			return function( elem ) {
				var node = typeof elem.getAttributeNode !== "undefined" &&
					elem.getAttributeNode("id");
				return node && node.value === attrId;
			};
		};

		// Support: IE 6 - 7 only
		// getElementById is not reliable as a find shortcut
		Expr.find["ID"] = function( id, context ) {
			if ( typeof context.getElementById !== "undefined" && documentIsHTML ) {
				var node, i, elems,
					elem = context.getElementById( id );

				if ( elem ) {

					// Verify the id attribute
					node = elem.getAttributeNode("id");
					if ( node && node.value === id ) {
						return [ elem ];
					}

					// Fall back on getElementsByName
					elems = context.getElementsByName( id );
					i = 0;
					while ( (elem = elems[i++]) ) {
						node = elem.getAttributeNode("id");
						if ( node && node.value === id ) {
							return [ elem ];
						}
					}
				}

				return [];
			}
		};
	}

	// Tag
	Expr.find["TAG"] = support.getElementsByTagName ?
		function( tag, context ) {
			if ( typeof context.getElementsByTagName !== "undefined" ) {
				return context.getElementsByTagName( tag );

			// DocumentFragment nodes don't have gEBTN
			} else if ( support.qsa ) {
				return context.querySelectorAll( tag );
			}
		} :

		function( tag, context ) {
			var elem,
				tmp = [],
				i = 0,
				// By happy coincidence, a (broken) gEBTN appears on DocumentFragment nodes too
				results = context.getElementsByTagName( tag );

			// Filter out possible comments
			if ( tag === "*" ) {
				while ( (elem = results[i++]) ) {
					if ( elem.nodeType === 1 ) {
						tmp.push( elem );
					}
				}

				return tmp;
			}
			return results;
		};

	// Class
	Expr.find["CLASS"] = support.getElementsByClassName && function( className, context ) {
		if ( typeof context.getElementsByClassName !== "undefined" && documentIsHTML ) {
			return context.getElementsByClassName( className );
		}
	};

	/* QSA/matchesSelector
	---------------------------------------------------------------------- */

	// QSA and matchesSelector support

	// matchesSelector(:active) reports false when true (IE9/Opera 11.5)
	rbuggyMatches = [];

	// qSa(:focus) reports false when true (Chrome 21)
	// We allow this because of a bug in IE8/9 that throws an error
	// whenever `document.activeElement` is accessed on an iframe
	// So, we allow :focus to pass through QSA all the time to avoid the IE error
	// See https://bugs.jquery.com/ticket/13378
	rbuggyQSA = [];

	if ( (support.qsa = rnative.test( document.querySelectorAll )) ) {
		// Build QSA regex
		// Regex strategy adopted from Diego Perini
		assert(function( el ) {
			// Select is set to empty string on purpose
			// This is to test IE's treatment of not explicitly
			// setting a boolean content attribute,
			// since its presence should be enough
			// https://bugs.jquery.com/ticket/12359
			docElem.appendChild( el ).innerHTML = "<a id='" + expando + "'></a>" +
				"<select id='" + expando + "-\r\\' msallowcapture=''>" +
				"<option selected=''></option></select>";

			// Support: IE8, Opera 11-12.16
			// Nothing should be selected when empty strings follow ^= or $= or *=
			// The test attribute must be unknown in Opera but "safe" for WinRT
			// https://msdn.microsoft.com/en-us/library/ie/hh465388.aspx#attribute_section
			if ( el.querySelectorAll("[msallowcapture^='']").length ) {
				rbuggyQSA.push( "[*^$]=" + whitespace + "*(?:''|\"\")" );
			}

			// Support: IE8
			// Boolean attributes and "value" are not treated correctly
			if ( !el.querySelectorAll("[selected]").length ) {
				rbuggyQSA.push( "\\[" + whitespace + "*(?:value|" + booleans + ")" );
			}

			// Support: Chrome<29, Android<4.4, Safari<7.0+, iOS<7.0+, PhantomJS<1.9.8+
			if ( !el.querySelectorAll( "[id~=" + expando + "-]" ).length ) {
				rbuggyQSA.push("~=");
			}

			// Webkit/Opera - :checked should return selected option elements
			// http://www.w3.org/TR/2011/REC-css3-selectors-20110929/#checked
			// IE8 throws error here and will not see later tests
			if ( !el.querySelectorAll(":checked").length ) {
				rbuggyQSA.push(":checked");
			}

			// Support: Safari 8+, iOS 8+
			// https://bugs.webkit.org/show_bug.cgi?id=136851
			// In-page `selector#id sibling-combinator selector` fails
			if ( !el.querySelectorAll( "a#" + expando + "+*" ).length ) {
				rbuggyQSA.push(".#.+[+~]");
			}
		});

		assert(function( el ) {
			el.innerHTML = "<a href='' disabled='disabled'></a>" +
				"<select disabled='disabled'><option/></select>";

			// Support: Windows 8 Native Apps
			// The type and name attributes are restricted during .innerHTML assignment
			var input = document.createElement("input");
			input.setAttribute( "type", "hidden" );
			el.appendChild( input ).setAttribute( "name", "D" );

			// Support: IE8
			// Enforce case-sensitivity of name attribute
			if ( el.querySelectorAll("[name=d]").length ) {
				rbuggyQSA.push( "name" + whitespace + "*[*^$|!~]?=" );
			}

			// FF 3.5 - :enabled/:disabled and hidden elements (hidden elements are still enabled)
			// IE8 throws error here and will not see later tests
			if ( el.querySelectorAll(":enabled").length !== 2 ) {
				rbuggyQSA.push( ":enabled", ":disabled" );
			}

			// Support: IE9-11+
			// IE's :disabled selector does not pick up the children of disabled fieldsets
			docElem.appendChild( el ).disabled = true;
			if ( el.querySelectorAll(":disabled").length !== 2 ) {
				rbuggyQSA.push( ":enabled", ":disabled" );
			}

			// Opera 10-11 does not throw on post-comma invalid pseudos
			el.querySelectorAll("*,:x");
			rbuggyQSA.push(",.*:");
		});
	}

	if ( (support.matchesSelector = rnative.test( (matches = docElem.matches ||
		docElem.webkitMatchesSelector ||
		docElem.mozMatchesSelector ||
		docElem.oMatchesSelector ||
		docElem.msMatchesSelector) )) ) {

		assert(function( el ) {
			// Check to see if it's possible to do matchesSelector
			// on a disconnected node (IE 9)
			support.disconnectedMatch = matches.call( el, "*" );

			// This should fail with an exception
			// Gecko does not error, returns false instead
			matches.call( el, "[s!='']:x" );
			rbuggyMatches.push( "!=", pseudos );
		});
	}

	rbuggyQSA = rbuggyQSA.length && new RegExp( rbuggyQSA.join("|") );
	rbuggyMatches = rbuggyMatches.length && new RegExp( rbuggyMatches.join("|") );

	/* Contains
	---------------------------------------------------------------------- */
	hasCompare = rnative.test( docElem.compareDocumentPosition );

	// Element contains another
	// Purposefully self-exclusive
	// As in, an element does not contain itself
	contains = hasCompare || rnative.test( docElem.contains ) ?
		function( a, b ) {
			var adown = a.nodeType === 9 ? a.documentElement : a,
				bup = b && b.parentNode;
			return a === bup || !!( bup && bup.nodeType === 1 && (
				adown.contains ?
					adown.contains( bup ) :
					a.compareDocumentPosition && a.compareDocumentPosition( bup ) & 16
			));
		} :
		function( a, b ) {
			if ( b ) {
				while ( (b = b.parentNode) ) {
					if ( b === a ) {
						return true;
					}
				}
			}
			return false;
		};

	/* Sorting
	---------------------------------------------------------------------- */

	// Document order sorting
	sortOrder = hasCompare ?
	function( a, b ) {

		// Flag for duplicate removal
		if ( a === b ) {
			hasDuplicate = true;
			return 0;
		}

		// Sort on method existence if only one input has compareDocumentPosition
		var compare = !a.compareDocumentPosition - !b.compareDocumentPosition;
		if ( compare ) {
			return compare;
		}

		// Calculate position if both inputs belong to the same document
		compare = ( a.ownerDocument || a ) === ( b.ownerDocument || b ) ?
			a.compareDocumentPosition( b ) :

			// Otherwise we know they are disconnected
			1;

		// Disconnected nodes
		if ( compare & 1 ||
			(!support.sortDetached && b.compareDocumentPosition( a ) === compare) ) {

			// Choose the first element that is related to our preferred document
			if ( a === document || a.ownerDocument === preferredDoc && contains(preferredDoc, a) ) {
				return -1;
			}
			if ( b === document || b.ownerDocument === preferredDoc && contains(preferredDoc, b) ) {
				return 1;
			}

			// Maintain original order
			return sortInput ?
				( indexOf( sortInput, a ) - indexOf( sortInput, b ) ) :
				0;
		}

		return compare & 4 ? -1 : 1;
	} :
	function( a, b ) {
		// Exit early if the nodes are identical
		if ( a === b ) {
			hasDuplicate = true;
			return 0;
		}

		var cur,
			i = 0,
			aup = a.parentNode,
			bup = b.parentNode,
			ap = [ a ],
			bp = [ b ];

		// Parentless nodes are either documents or disconnected
		if ( !aup || !bup ) {
			return a === document ? -1 :
				b === document ? 1 :
				aup ? -1 :
				bup ? 1 :
				sortInput ?
				( indexOf( sortInput, a ) - indexOf( sortInput, b ) ) :
				0;

		// If the nodes are siblings, we can do a quick check
		} else if ( aup === bup ) {
			return siblingCheck( a, b );
		}

		// Otherwise we need full lists of their ancestors for comparison
		cur = a;
		while ( (cur = cur.parentNode) ) {
			ap.unshift( cur );
		}
		cur = b;
		while ( (cur = cur.parentNode) ) {
			bp.unshift( cur );
		}

		// Walk down the tree looking for a discrepancy
		while ( ap[i] === bp[i] ) {
			i++;
		}

		return i ?
			// Do a sibling check if the nodes have a common ancestor
			siblingCheck( ap[i], bp[i] ) :

			// Otherwise nodes in our document sort first
			ap[i] === preferredDoc ? -1 :
			bp[i] === preferredDoc ? 1 :
			0;
	};

	return document;
};

Sizzle.matches = function( expr, elements ) {
	return Sizzle( expr, null, null, elements );
};

Sizzle.matchesSelector = function( elem, expr ) {
	// Set document vars if needed
	if ( ( elem.ownerDocument || elem ) !== document ) {
		setDocument( elem );
	}

	if ( support.matchesSelector && documentIsHTML &&
		!nonnativeSelectorCache[ expr + " " ] &&
		( !rbuggyMatches || !rbuggyMatches.test( expr ) ) &&
		( !rbuggyQSA     || !rbuggyQSA.test( expr ) ) ) {

		try {
			var ret = matches.call( elem, expr );

			// IE 9's matchesSelector returns false on disconnected nodes
			if ( ret || support.disconnectedMatch ||
					// As well, disconnected nodes are said to be in a document
					// fragment in IE 9
					elem.document && elem.document.nodeType !== 11 ) {
				return ret;
			}
		} catch (e) {
			nonnativeSelectorCache( expr, true );
		}
	}

	return Sizzle( expr, document, null, [ elem ] ).length > 0;
};

Sizzle.contains = function( context, elem ) {
	// Set document vars if needed
	if ( ( context.ownerDocument || context ) !== document ) {
		setDocument( context );
	}
	return contains( context, elem );
};

Sizzle.attr = function( elem, name ) {
	// Set document vars if needed
	if ( ( elem.ownerDocument || elem ) !== document ) {
		setDocument( elem );
	}

	var fn = Expr.attrHandle[ name.toLowerCase() ],
		// Don't get fooled by Object.prototype properties (jQuery #13807)
		val = fn && hasOwn.call( Expr.attrHandle, name.toLowerCase() ) ?
			fn( elem, name, !documentIsHTML ) :
			undefined;

	return val !== undefined ?
		val :
		support.attributes || !documentIsHTML ?
			elem.getAttribute( name ) :
			(val = elem.getAttributeNode(name)) && val.specified ?
				val.value :
				null;
};

Sizzle.escape = function( sel ) {
	return (sel + "").replace( rcssescape, fcssescape );
};

Sizzle.error = function( msg ) {
	throw new Error( "Syntax error, unrecognized expression: " + msg );
};

/**
 * Document sorting and removing duplicates
 * @param {ArrayLike} results
 */
Sizzle.uniqueSort = function( results ) {
	var elem,
		duplicates = [],
		j = 0,
		i = 0;

	// Unless we *know* we can detect duplicates, assume their presence
	hasDuplicate = !support.detectDuplicates;
	sortInput = !support.sortStable && results.slice( 0 );
	results.sort( sortOrder );

	if ( hasDuplicate ) {
		while ( (elem = results[i++]) ) {
			if ( elem === results[ i ] ) {
				j = duplicates.push( i );
			}
		}
		while ( j-- ) {
			results.splice( duplicates[ j ], 1 );
		}
	}

	// Clear input after sorting to release objects
	// See https://github.com/jquery/sizzle/pull/225
	sortInput = null;

	return results;
};

/**
 * Utility function for retrieving the text value of an array of DOM nodes
 * @param {Array|Element} elem
 */
getText = Sizzle.getText = function( elem ) {
	var node,
		ret = "",
		i = 0,
		nodeType = elem.nodeType;

	if ( !nodeType ) {
		// If no nodeType, this is expected to be an array
		while ( (node = elem[i++]) ) {
			// Do not traverse comment nodes
			ret += getText( node );
		}
	} else if ( nodeType === 1 || nodeType === 9 || nodeType === 11 ) {
		// Use textContent for elements
		// innerText usage removed for consistency of new lines (jQuery #11153)
		if ( typeof elem.textContent === "string" ) {
			return elem.textContent;
		} else {
			// Traverse its children
			for ( elem = elem.firstChild; elem; elem = elem.nextSibling ) {
				ret += getText( elem );
			}
		}
	} else if ( nodeType === 3 || nodeType === 4 ) {
		return elem.nodeValue;
	}
	// Do not include comment or processing instruction nodes

	return ret;
};

Expr = Sizzle.selectors = {

	// Can be adjusted by the user
	cacheLength: 50,

	createPseudo: markFunction,

	match: matchExpr,

	attrHandle: {},

	find: {},

	relative: {
		">": { dir: "parentNode", first: true },
		" ": { dir: "parentNode" },
		"+": { dir: "previousSibling", first: true },
		"~": { dir: "previousSibling" }
	},

	preFilter: {
		"ATTR": function( match ) {
			match[1] = match[1].replace( runescape, funescape );

			// Move the given value to match[3] whether quoted or unquoted
			match[3] = ( match[3] || match[4] || match[5] || "" ).replace( runescape, funescape );

			if ( match[2] === "~=" ) {
				match[3] = " " + match[3] + " ";
			}

			return match.slice( 0, 4 );
		},

		"CHILD": function( match ) {
			/* matches from matchExpr["CHILD"]
				1 type (only|nth|...)
				2 what (child|of-type)
				3 argument (even|odd|\d*|\d*n([+-]\d+)?|...)
				4 xn-component of xn+y argument ([+-]?\d*n|)
				5 sign of xn-component
				6 x of xn-component
				7 sign of y-component
				8 y of y-component
			*/
			match[1] = match[1].toLowerCase();

			if ( match[1].slice( 0, 3 ) === "nth" ) {
				// nth-* requires argument
				if ( !match[3] ) {
					Sizzle.error( match[0] );
				}

				// numeric x and y parameters for Expr.filter.CHILD
				// remember that false/true cast respectively to 0/1
				match[4] = +( match[4] ? match[5] + (match[6] || 1) : 2 * ( match[3] === "even" || match[3] === "odd" ) );
				match[5] = +( ( match[7] + match[8] ) || match[3] === "odd" );

			// other types prohibit arguments
			} else if ( match[3] ) {
				Sizzle.error( match[0] );
			}

			return match;
		},

		"PSEUDO": function( match ) {
			var excess,
				unquoted = !match[6] && match[2];

			if ( matchExpr["CHILD"].test( match[0] ) ) {
				return null;
			}

			// Accept quoted arguments as-is
			if ( match[3] ) {
				match[2] = match[4] || match[5] || "";

			// Strip excess characters from unquoted arguments
			} else if ( unquoted && rpseudo.test( unquoted ) &&
				// Get excess from tokenize (recursively)
				(excess = tokenize( unquoted, true )) &&
				// advance to the next closing parenthesis
				(excess = unquoted.indexOf( ")", unquoted.length - excess ) - unquoted.length) ) {

				// excess is a negative index
				match[0] = match[0].slice( 0, excess );
				match[2] = unquoted.slice( 0, excess );
			}

			// Return only captures needed by the pseudo filter method (type and argument)
			return match.slice( 0, 3 );
		}
	},

	filter: {

		"TAG": function( nodeNameSelector ) {
			var nodeName = nodeNameSelector.replace( runescape, funescape ).toLowerCase();
			return nodeNameSelector === "*" ?
				function() { return true; } :
				function( elem ) {
					return elem.nodeName && elem.nodeName.toLowerCase() === nodeName;
				};
		},

		"CLASS": function( className ) {
			var pattern = classCache[ className + " " ];

			return pattern ||
				(pattern = new RegExp( "(^|" + whitespace + ")" + className + "(" + whitespace + "|$)" )) &&
				classCache( className, function( elem ) {
					return pattern.test( typeof elem.className === "string" && elem.className || typeof elem.getAttribute !== "undefined" && elem.getAttribute("class") || "" );
				});
		},

		"ATTR": function( name, operator, check ) {
			return function( elem ) {
				var result = Sizzle.attr( elem, name );

				if ( result == null ) {
					return operator === "!=";
				}
				if ( !operator ) {
					return true;
				}

				result += "";

				return operator === "=" ? result === check :
					operator === "!=" ? result !== check :
					operator === "^=" ? check && result.indexOf( check ) === 0 :
					operator === "*=" ? check && result.indexOf( check ) > -1 :
					operator === "$=" ? check && result.slice( -check.length ) === check :
					operator === "~=" ? ( " " + result.replace( rwhitespace, " " ) + " " ).indexOf( check ) > -1 :
					operator === "|=" ? result === check || result.slice( 0, check.length + 1 ) === check + "-" :
					false;
			};
		},

		"CHILD": function( type, what, argument, first, last ) {
			var simple = type.slice( 0, 3 ) !== "nth",
				forward = type.slice( -4 ) !== "last",
				ofType = what === "of-type";

			return first === 1 && last === 0 ?

				// Shortcut for :nth-*(n)
				function( elem ) {
					return !!elem.parentNode;
				} :

				function( elem, context, xml ) {
					var cache, uniqueCache, outerCache, node, nodeIndex, start,
						dir = simple !== forward ? "nextSibling" : "previousSibling",
						parent = elem.parentNode,
						name = ofType && elem.nodeName.toLowerCase(),
						useCache = !xml && !ofType,
						diff = false;

					if ( parent ) {

						// :(first|last|only)-(child|of-type)
						if ( simple ) {
							while ( dir ) {
								node = elem;
								while ( (node = node[ dir ]) ) {
									if ( ofType ?
										node.nodeName.toLowerCase() === name :
										node.nodeType === 1 ) {

										return false;
									}
								}
								// Reverse direction for :only-* (if we haven't yet done so)
								start = dir = type === "only" && !start && "nextSibling";
							}
							return true;
						}

						start = [ forward ? parent.firstChild : parent.lastChild ];

						// non-xml :nth-child(...) stores cache data on `parent`
						if ( forward && useCache ) {

							// Seek `elem` from a previously-cached index

							// ...in a gzip-friendly way
							node = parent;
							outerCache = node[ expando ] || (node[ expando ] = {});

							// Support: IE <9 only
							// Defend against cloned attroperties (jQuery gh-1709)
							uniqueCache = outerCache[ node.uniqueID ] ||
								(outerCache[ node.uniqueID ] = {});

							cache = uniqueCache[ type ] || [];
							nodeIndex = cache[ 0 ] === dirruns && cache[ 1 ];
							diff = nodeIndex && cache[ 2 ];
							node = nodeIndex && parent.childNodes[ nodeIndex ];

							while ( (node = ++nodeIndex && node && node[ dir ] ||

								// Fallback to seeking `elem` from the start
								(diff = nodeIndex = 0) || start.pop()) ) {

								// When found, cache indexes on `parent` and break
								if ( node.nodeType === 1 && ++diff && node === elem ) {
									uniqueCache[ type ] = [ dirruns, nodeIndex, diff ];
									break;
								}
							}

						} else {
							// Use previously-cached element index if available
							if ( useCache ) {
								// ...in a gzip-friendly way
								node = elem;
								outerCache = node[ expando ] || (node[ expando ] = {});

								// Support: IE <9 only
								// Defend against cloned attroperties (jQuery gh-1709)
								uniqueCache = outerCache[ node.uniqueID ] ||
									(outerCache[ node.uniqueID ] = {});

								cache = uniqueCache[ type ] || [];
								nodeIndex = cache[ 0 ] === dirruns && cache[ 1 ];
								diff = nodeIndex;
							}

							// xml :nth-child(...)
							// or :nth-last-child(...) or :nth(-last)?-of-type(...)
							if ( diff === false ) {
								// Use the same loop as above to seek `elem` from the start
								while ( (node = ++nodeIndex && node && node[ dir ] ||
									(diff = nodeIndex = 0) || start.pop()) ) {

									if ( ( ofType ?
										node.nodeName.toLowerCase() === name :
										node.nodeType === 1 ) &&
										++diff ) {

										// Cache the index of each encountered element
										if ( useCache ) {
											outerCache = node[ expando ] || (node[ expando ] = {});

											// Support: IE <9 only
											// Defend against cloned attroperties (jQuery gh-1709)
											uniqueCache = outerCache[ node.uniqueID ] ||
												(outerCache[ node.uniqueID ] = {});

											uniqueCache[ type ] = [ dirruns, diff ];
										}

										if ( node === elem ) {
											break;
										}
									}
								}
							}
						}

						// Incorporate the offset, then check against cycle size
						diff -= last;
						return diff === first || ( diff % first === 0 && diff / first >= 0 );
					}
				};
		},

		"PSEUDO": function( pseudo, argument ) {
			// pseudo-class names are case-insensitive
			// http://www.w3.org/TR/selectors/#pseudo-classes
			// Prioritize by case sensitivity in case custom pseudos are added with uppercase letters
			// Remember that setFilters inherits from pseudos
			var args,
				fn = Expr.pseudos[ pseudo ] || Expr.setFilters[ pseudo.toLowerCase() ] ||
					Sizzle.error( "unsupported pseudo: " + pseudo );

			// The user may use createPseudo to indicate that
			// arguments are needed to create the filter function
			// just as Sizzle does
			if ( fn[ expando ] ) {
				return fn( argument );
			}

			// But maintain support for old signatures
			if ( fn.length > 1 ) {
				args = [ pseudo, pseudo, "", argument ];
				return Expr.setFilters.hasOwnProperty( pseudo.toLowerCase() ) ?
					markFunction(function( seed, matches ) {
						var idx,
							matched = fn( seed, argument ),
							i = matched.length;
						while ( i-- ) {
							idx = indexOf( seed, matched[i] );
							seed[ idx ] = !( matches[ idx ] = matched[i] );
						}
					}) :
					function( elem ) {
						return fn( elem, 0, args );
					};
			}

			return fn;
		}
	},

	pseudos: {
		// Potentially complex pseudos
		"not": markFunction(function( selector ) {
			// Trim the selector passed to compile
			// to avoid treating leading and trailing
			// spaces as combinators
			var input = [],
				results = [],
				matcher = compile( selector.replace( rtrim, "$1" ) );

			return matcher[ expando ] ?
				markFunction(function( seed, matches, context, xml ) {
					var elem,
						unmatched = matcher( seed, null, xml, [] ),
						i = seed.length;

					// Match elements unmatched by `matcher`
					while ( i-- ) {
						if ( (elem = unmatched[i]) ) {
							seed[i] = !(matches[i] = elem);
						}
					}
				}) :
				function( elem, context, xml ) {
					input[0] = elem;
					matcher( input, null, xml, results );
					// Don't keep the element (issue #299)
					input[0] = null;
					return !results.pop();
				};
		}),

		"has": markFunction(function( selector ) {
			return function( elem ) {
				return Sizzle( selector, elem ).length > 0;
			};
		}),

		"contains": markFunction(function( text ) {
			text = text.replace( runescape, funescape );
			return function( elem ) {
				return ( elem.textContent || getText( elem ) ).indexOf( text ) > -1;
			};
		}),

		// "Whether an element is represented by a :lang() selector
		// is based solely on the element's language value
		// being equal to the identifier C,
		// or beginning with the identifier C immediately followed by "-".
		// The matching of C against the element's language value is performed case-insensitively.
		// The identifier C does not have to be a valid language name."
		// http://www.w3.org/TR/selectors/#lang-pseudo
		"lang": markFunction( function( lang ) {
			// lang value must be a valid identifier
			if ( !ridentifier.test(lang || "") ) {
				Sizzle.error( "unsupported lang: " + lang );
			}
			lang = lang.replace( runescape, funescape ).toLowerCase();
			return function( elem ) {
				var elemLang;
				do {
					if ( (elemLang = documentIsHTML ?
						elem.lang :
						elem.getAttribute("xml:lang") || elem.getAttribute("lang")) ) {

						elemLang = elemLang.toLowerCase();
						return elemLang === lang || elemLang.indexOf( lang + "-" ) === 0;
					}
				} while ( (elem = elem.parentNode) && elem.nodeType === 1 );
				return false;
			};
		}),

		// Miscellaneous
		"target": function( elem ) {
			var hash = window.location && window.location.hash;
			return hash && hash.slice( 1 ) === elem.id;
		},

		"root": function( elem ) {
			return elem === docElem;
		},

		"focus": function( elem ) {
			return elem === document.activeElement && (!document.hasFocus || document.hasFocus()) && !!(elem.type || elem.href || ~elem.tabIndex);
		},

		// Boolean properties
		"enabled": createDisabledPseudo( false ),
		"disabled": createDisabledPseudo( true ),

		"checked": function( elem ) {
			// In CSS3, :checked should return both checked and selected elements
			// http://www.w3.org/TR/2011/REC-css3-selectors-20110929/#checked
			var nodeName = elem.nodeName.toLowerCase();
			return (nodeName === "input" && !!elem.checked) || (nodeName === "option" && !!elem.selected);
		},

		"selected": function( elem ) {
			// Accessing this property makes selected-by-default
			// options in Safari work properly
			if ( elem.parentNode ) {
				elem.parentNode.selectedIndex;
			}

			return elem.selected === true;
		},

		// Contents
		"empty": function( elem ) {
			// http://www.w3.org/TR/selectors/#empty-pseudo
			// :empty is negated by element (1) or content nodes (text: 3; cdata: 4; entity ref: 5),
			//   but not by others (comment: 8; processing instruction: 7; etc.)
			// nodeType < 6 works because attributes (2) do not appear as children
			for ( elem = elem.firstChild; elem; elem = elem.nextSibling ) {
				if ( elem.nodeType < 6 ) {
					return false;
				}
			}
			return true;
		},

		"parent": function( elem ) {
			return !Expr.pseudos["empty"]( elem );
		},

		// Element/input types
		"header": function( elem ) {
			return rheader.test( elem.nodeName );
		},

		"input": function( elem ) {
			return rinputs.test( elem.nodeName );
		},

		"button": function( elem ) {
			var name = elem.nodeName.toLowerCase();
			return name === "input" && elem.type === "button" || name === "button";
		},

		"text": function( elem ) {
			var attr;
			return elem.nodeName.toLowerCase() === "input" &&
				elem.type === "text" &&

				// Support: IE<8
				// New HTML5 attribute values (e.g., "search") appear with elem.type === "text"
				( (attr = elem.getAttribute("type")) == null || attr.toLowerCase() === "text" );
		},

		// Position-in-collection
		"first": createPositionalPseudo(function() {
			return [ 0 ];
		}),

		"last": createPositionalPseudo(function( matchIndexes, length ) {
			return [ length - 1 ];
		}),

		"eq": createPositionalPseudo(function( matchIndexes, length, argument ) {
			return [ argument < 0 ? argument + length : argument ];
		}),

		"even": createPositionalPseudo(function( matchIndexes, length ) {
			var i = 0;
			for ( ; i < length; i += 2 ) {
				matchIndexes.push( i );
			}
			return matchIndexes;
		}),

		"odd": createPositionalPseudo(function( matchIndexes, length ) {
			var i = 1;
			for ( ; i < length; i += 2 ) {
				matchIndexes.push( i );
			}
			return matchIndexes;
		}),

		"lt": createPositionalPseudo(function( matchIndexes, length, argument ) {
			var i = argument < 0 ?
				argument + length :
				argument > length ?
					length :
					argument;
			for ( ; --i >= 0; ) {
				matchIndexes.push( i );
			}
			return matchIndexes;
		}),

		"gt": createPositionalPseudo(function( matchIndexes, length, argument ) {
			var i = argument < 0 ? argument + length : argument;
			for ( ; ++i < length; ) {
				matchIndexes.push( i );
			}
			return matchIndexes;
		})
	}
};

Expr.pseudos["nth"] = Expr.pseudos["eq"];

// Add button/input type pseudos
for ( i in { radio: true, checkbox: true, file: true, password: true, image: true } ) {
	Expr.pseudos[ i ] = createInputPseudo( i );
}
for ( i in { submit: true, reset: true } ) {
	Expr.pseudos[ i ] = createButtonPseudo( i );
}

// Easy API for creating new setFilters
function setFilters() {}
setFilters.prototype = Expr.filters = Expr.pseudos;
Expr.setFilters = new setFilters();

tokenize = Sizzle.tokenize = function( selector, parseOnly ) {
	var matched, match, tokens, type,
		soFar, groups, preFilters,
		cached = tokenCache[ selector + " " ];

	if ( cached ) {
		return parseOnly ? 0 : cached.slice( 0 );
	}

	soFar = selector;
	groups = [];
	preFilters = Expr.preFilter;

	while ( soFar ) {

		// Comma and first run
		if ( !matched || (match = rcomma.exec( soFar )) ) {
			if ( match ) {
				// Don't consume trailing commas as valid
				soFar = soFar.slice( match[0].length ) || soFar;
			}
			groups.push( (tokens = []) );
		}

		matched = false;

		// Combinators
		if ( (match = rcombinators.exec( soFar )) ) {
			matched = match.shift();
			tokens.push({
				value: matched,
				// Cast descendant combinators to space
				type: match[0].replace( rtrim, " " )
			});
			soFar = soFar.slice( matched.length );
		}

		// Filters
		for ( type in Expr.filter ) {
			if ( (match = matchExpr[ type ].exec( soFar )) && (!preFilters[ type ] ||
				(match = preFilters[ type ]( match ))) ) {
				matched = match.shift();
				tokens.push({
					value: matched,
					type: type,
					matches: match
				});
				soFar = soFar.slice( matched.length );
			}
		}

		if ( !matched ) {
			break;
		}
	}

	// Return the length of the invalid excess
	// if we're just parsing
	// Otherwise, throw an error or return tokens
	return parseOnly ?
		soFar.length :
		soFar ?
			Sizzle.error( selector ) :
			// Cache the tokens
			tokenCache( selector, groups ).slice( 0 );
};

function toSelector( tokens ) {
	var i = 0,
		len = tokens.length,
		selector = "";
	for ( ; i < len; i++ ) {
		selector += tokens[i].value;
	}
	return selector;
}

function addCombinator( matcher, combinator, base ) {
	var dir = combinator.dir,
		skip = combinator.next,
		key = skip || dir,
		checkNonElements = base && key === "parentNode",
		doneName = done++;

	return combinator.first ?
		// Check against closest ancestor/preceding element
		function( elem, context, xml ) {
			while ( (elem = elem[ dir ]) ) {
				if ( elem.nodeType === 1 || checkNonElements ) {
					return matcher( elem, context, xml );
				}
			}
			return false;
		} :

		// Check against all ancestor/preceding elements
		function( elem, context, xml ) {
			var oldCache, uniqueCache, outerCache,
				newCache = [ dirruns, doneName ];

			// We can't set arbitrary data on XML nodes, so they don't benefit from combinator caching
			if ( xml ) {
				while ( (elem = elem[ dir ]) ) {
					if ( elem.nodeType === 1 || checkNonElements ) {
						if ( matcher( elem, context, xml ) ) {
							return true;
						}
					}
				}
			} else {
				while ( (elem = elem[ dir ]) ) {
					if ( elem.nodeType === 1 || checkNonElements ) {
						outerCache = elem[ expando ] || (elem[ expando ] = {});

						// Support: IE <9 only
						// Defend against cloned attroperties (jQuery gh-1709)
						uniqueCache = outerCache[ elem.uniqueID ] || (outerCache[ elem.uniqueID ] = {});

						if ( skip && skip === elem.nodeName.toLowerCase() ) {
							elem = elem[ dir ] || elem;
						} else if ( (oldCache = uniqueCache[ key ]) &&
							oldCache[ 0 ] === dirruns && oldCache[ 1 ] === doneName ) {

							// Assign to newCache so results back-propagate to previous elements
							return (newCache[ 2 ] = oldCache[ 2 ]);
						} else {
							// Reuse newcache so results back-propagate to previous elements
							uniqueCache[ key ] = newCache;

							// A match means we're done; a fail means we have to keep checking
							if ( (newCache[ 2 ] = matcher( elem, context, xml )) ) {
								return true;
							}
						}
					}
				}
			}
			return false;
		};
}

function elementMatcher( matchers ) {
	return matchers.length > 1 ?
		function( elem, context, xml ) {
			var i = matchers.length;
			while ( i-- ) {
				if ( !matchers[i]( elem, context, xml ) ) {
					return false;
				}
			}
			return true;
		} :
		matchers[0];
}

function multipleContexts( selector, contexts, results ) {
	var i = 0,
		len = contexts.length;
	for ( ; i < len; i++ ) {
		Sizzle( selector, contexts[i], results );
	}
	return results;
}

function condense( unmatched, map, filter, context, xml ) {
	var elem,
		newUnmatched = [],
		i = 0,
		len = unmatched.length,
		mapped = map != null;

	for ( ; i < len; i++ ) {
		if ( (elem = unmatched[i]) ) {
			if ( !filter || filter( elem, context, xml ) ) {
				newUnmatched.push( elem );
				if ( mapped ) {
					map.push( i );
				}
			}
		}
	}

	return newUnmatched;
}

function setMatcher( preFilter, selector, matcher, postFilter, postFinder, postSelector ) {
	if ( postFilter && !postFilter[ expando ] ) {
		postFilter = setMatcher( postFilter );
	}
	if ( postFinder && !postFinder[ expando ] ) {
		postFinder = setMatcher( postFinder, postSelector );
	}
	return markFunction(function( seed, results, context, xml ) {
		var temp, i, elem,
			preMap = [],
			postMap = [],
			preexisting = results.length,

			// Get initial elements from seed or context
			elems = seed || multipleContexts( selector || "*", context.nodeType ? [ context ] : context, [] ),

			// Prefilter to get matcher input, preserving a map for seed-results synchronization
			matcherIn = preFilter && ( seed || !selector ) ?
				condense( elems, preMap, preFilter, context, xml ) :
				elems,

			matcherOut = matcher ?
				// If we have a postFinder, or filtered seed, or non-seed postFilter or preexisting results,
				postFinder || ( seed ? preFilter : preexisting || postFilter ) ?

					// ...intermediate processing is necessary
					[] :

					// ...otherwise use results directly
					results :
				matcherIn;

		// Find primary matches
		if ( matcher ) {
			matcher( matcherIn, matcherOut, context, xml );
		}

		// Apply postFilter
		if ( postFilter ) {
			temp = condense( matcherOut, postMap );
			postFilter( temp, [], context, xml );

			// Un-match failing elements by moving them back to matcherIn
			i = temp.length;
			while ( i-- ) {
				if ( (elem = temp[i]) ) {
					matcherOut[ postMap[i] ] = !(matcherIn[ postMap[i] ] = elem);
				}
			}
		}

		if ( seed ) {
			if ( postFinder || preFilter ) {
				if ( postFinder ) {
					// Get the final matcherOut by condensing this intermediate into postFinder contexts
					temp = [];
					i = matcherOut.length;
					while ( i-- ) {
						if ( (elem = matcherOut[i]) ) {
							// Restore matcherIn since elem is not yet a final match
							temp.push( (matcherIn[i] = elem) );
						}
					}
					postFinder( null, (matcherOut = []), temp, xml );
				}

				// Move matched elements from seed to results to keep them synchronized
				i = matcherOut.length;
				while ( i-- ) {
					if ( (elem = matcherOut[i]) &&
						(temp = postFinder ? indexOf( seed, elem ) : preMap[i]) > -1 ) {

						seed[temp] = !(results[temp] = elem);
					}
				}
			}

		// Add elements to results, through postFinder if defined
		} else {
			matcherOut = condense(
				matcherOut === results ?
					matcherOut.splice( preexisting, matcherOut.length ) :
					matcherOut
			);
			if ( postFinder ) {
				postFinder( null, results, matcherOut, xml );
			} else {
				push.apply( results, matcherOut );
			}
		}
	});
}

function matcherFromTokens( tokens ) {
	var checkContext, matcher, j,
		len = tokens.length,
		leadingRelative = Expr.relative[ tokens[0].type ],
		implicitRelative = leadingRelative || Expr.relative[" "],
		i = leadingRelative ? 1 : 0,

		// The foundational matcher ensures that elements are reachable from top-level context(s)
		matchContext = addCombinator( function( elem ) {
			return elem === checkContext;
		}, implicitRelative, true ),
		matchAnyContext = addCombinator( function( elem ) {
			return indexOf( checkContext, elem ) > -1;
		}, implicitRelative, true ),
		matchers = [ function( elem, context, xml ) {
			var ret = ( !leadingRelative && ( xml || context !== outermostContext ) ) || (
				(checkContext = context).nodeType ?
					matchContext( elem, context, xml ) :
					matchAnyContext( elem, context, xml ) );
			// Avoid hanging onto element (issue #299)
			checkContext = null;
			return ret;
		} ];

	for ( ; i < len; i++ ) {
		if ( (matcher = Expr.relative[ tokens[i].type ]) ) {
			matchers = [ addCombinator(elementMatcher( matchers ), matcher) ];
		} else {
			matcher = Expr.filter[ tokens[i].type ].apply( null, tokens[i].matches );

			// Return special upon seeing a positional matcher
			if ( matcher[ expando ] ) {
				// Find the next relative operator (if any) for proper handling
				j = ++i;
				for ( ; j < len; j++ ) {
					if ( Expr.relative[ tokens[j].type ] ) {
						break;
					}
				}
				return setMatcher(
					i > 1 && elementMatcher( matchers ),
					i > 1 && toSelector(
						// If the preceding token was a descendant combinator, insert an implicit any-element `*`
						tokens.slice( 0, i - 1 ).concat({ value: tokens[ i - 2 ].type === " " ? "*" : "" })
					).replace( rtrim, "$1" ),
					matcher,
					i < j && matcherFromTokens( tokens.slice( i, j ) ),
					j < len && matcherFromTokens( (tokens = tokens.slice( j )) ),
					j < len && toSelector( tokens )
				);
			}
			matchers.push( matcher );
		}
	}

	return elementMatcher( matchers );
}

function matcherFromGroupMatchers( elementMatchers, setMatchers ) {
	var bySet = setMatchers.length > 0,
		byElement = elementMatchers.length > 0,
		superMatcher = function( seed, context, xml, results, outermost ) {
			var elem, j, matcher,
				matchedCount = 0,
				i = "0",
				unmatched = seed && [],
				setMatched = [],
				contextBackup = outermostContext,
				// We must always have either seed elements or outermost context
				elems = seed || byElement && Expr.find["TAG"]( "*", outermost ),
				// Use integer dirruns iff this is the outermost matcher
				dirrunsUnique = (dirruns += contextBackup == null ? 1 : Math.random() || 0.1),
				len = elems.length;

			if ( outermost ) {
				outermostContext = context === document || context || outermost;
			}

			// Add elements passing elementMatchers directly to results
			// Support: IE<9, Safari
			// Tolerate NodeList properties (IE: "length"; Safari: <number>) matching elements by id
			for ( ; i !== len && (elem = elems[i]) != null; i++ ) {
				if ( byElement && elem ) {
					j = 0;
					if ( !context && elem.ownerDocument !== document ) {
						setDocument( elem );
						xml = !documentIsHTML;
					}
					while ( (matcher = elementMatchers[j++]) ) {
						if ( matcher( elem, context || document, xml) ) {
							results.push( elem );
							break;
						}
					}
					if ( outermost ) {
						dirruns = dirrunsUnique;
					}
				}

				// Track unmatched elements for set filters
				if ( bySet ) {
					// They will have gone through all possible matchers
					if ( (elem = !matcher && elem) ) {
						matchedCount--;
					}

					// Lengthen the array for every element, matched or not
					if ( seed ) {
						unmatched.push( elem );
					}
				}
			}

			// `i` is now the count of elements visited above, and adding it to `matchedCount`
			// makes the latter nonnegative.
			matchedCount += i;

			// Apply set filters to unmatched elements
			// NOTE: This can be skipped if there are no unmatched elements (i.e., `matchedCount`
			// equals `i`), unless we didn't visit _any_ elements in the above loop because we have
			// no element matchers and no seed.
			// Incrementing an initially-string "0" `i` allows `i` to remain a string only in that
			// case, which will result in a "00" `matchedCount` that differs from `i` but is also
			// numerically zero.
			if ( bySet && i !== matchedCount ) {
				j = 0;
				while ( (matcher = setMatchers[j++]) ) {
					matcher( unmatched, setMatched, context, xml );
				}

				if ( seed ) {
					// Reintegrate element matches to eliminate the need for sorting
					if ( matchedCount > 0 ) {
						while ( i-- ) {
							if ( !(unmatched[i] || setMatched[i]) ) {
								setMatched[i] = pop.call( results );
							}
						}
					}

					// Discard index placeholder values to get only actual matches
					setMatched = condense( setMatched );
				}

				// Add matches to results
				push.apply( results, setMatched );

				// Seedless set matches succeeding multiple successful matchers stipulate sorting
				if ( outermost && !seed && setMatched.length > 0 &&
					( matchedCount + setMatchers.length ) > 1 ) {

					Sizzle.uniqueSort( results );
				}
			}

			// Override manipulation of globals by nested matchers
			if ( outermost ) {
				dirruns = dirrunsUnique;
				outermostContext = contextBackup;
			}

			return unmatched;
		};

	return bySet ?
		markFunction( superMatcher ) :
		superMatcher;
}

compile = Sizzle.compile = function( selector, match /* Internal Use Only */ ) {
	var i,
		setMatchers = [],
		elementMatchers = [],
		cached = compilerCache[ selector + " " ];

	if ( !cached ) {
		// Generate a function of recursive functions that can be used to check each element
		if ( !match ) {
			match = tokenize( selector );
		}
		i = match.length;
		while ( i-- ) {
			cached = matcherFromTokens( match[i] );
			if ( cached[ expando ] ) {
				setMatchers.push( cached );
			} else {
				elementMatchers.push( cached );
			}
		}

		// Cache the compiled function
		cached = compilerCache( selector, matcherFromGroupMatchers( elementMatchers, setMatchers ) );

		// Save selector and tokenization
		cached.selector = selector;
	}
	return cached;
};

/**
 * A low-level selection function that works with Sizzle's compiled
 *  selector functions
 * @param {String|Function} selector A selector or a pre-compiled
 *  selector function built with Sizzle.compile
 * @param {Element} context
 * @param {Array} [results]
 * @param {Array} [seed] A set of elements to match against
 */
select = Sizzle.select = function( selector, context, results, seed ) {
	var i, tokens, token, type, find,
		compiled = typeof selector === "function" && selector,
		match = !seed && tokenize( (selector = compiled.selector || selector) );

	results = results || [];

	// Try to minimize operations if there is only one selector in the list and no seed
	// (the latter of which guarantees us context)
	if ( match.length === 1 ) {

		// Reduce context if the leading compound selector is an ID
		tokens = match[0] = match[0].slice( 0 );
		if ( tokens.length > 2 && (token = tokens[0]).type === "ID" &&
				context.nodeType === 9 && documentIsHTML && Expr.relative[ tokens[1].type ] ) {

			context = ( Expr.find["ID"]( token.matches[0].replace(runescape, funescape), context ) || [] )[0];
			if ( !context ) {
				return results;

			// Precompiled matchers will still verify ancestry, so step up a level
			} else if ( compiled ) {
				context = context.parentNode;
			}

			selector = selector.slice( tokens.shift().value.length );
		}

		// Fetch a seed set for right-to-left matching
		i = matchExpr["needsContext"].test( selector ) ? 0 : tokens.length;
		while ( i-- ) {
			token = tokens[i];

			// Abort if we hit a combinator
			if ( Expr.relative[ (type = token.type) ] ) {
				break;
			}
			if ( (find = Expr.find[ type ]) ) {
				// Search, expanding context for leading sibling combinators
				if ( (seed = find(
					token.matches[0].replace( runescape, funescape ),
					rsibling.test( tokens[0].type ) && testContext( context.parentNode ) || context
				)) ) {

					// If seed is empty or no tokens remain, we can return early
					tokens.splice( i, 1 );
					selector = seed.length && toSelector( tokens );
					if ( !selector ) {
						push.apply( results, seed );
						return results;
					}

					break;
				}
			}
		}
	}

	// Compile and execute a filtering function if one is not provided
	// Provide `match` to avoid retokenization if we modified the selector above
	( compiled || compile( selector, match ) )(
		seed,
		context,
		!documentIsHTML,
		results,
		!context || rsibling.test( selector ) && testContext( context.parentNode ) || context
	);
	return results;
};

// One-time assignments

// Sort stability
support.sortStable = expando.split("").sort( sortOrder ).join("") === expando;

// Support: Chrome 14-35+
// Always assume duplicates if they aren't passed to the comparison function
support.detectDuplicates = !!hasDuplicate;

// Initialize against the default document
setDocument();

// Support: Webkit<537.32 - Safari 6.0.3/Chrome 25 (fixed in Chrome 27)
// Detached nodes confoundingly follow *each other*
support.sortDetached = assert(function( el ) {
	// Should return 1, but returns 4 (following)
	return el.compareDocumentPosition( document.createElement("fieldset") ) & 1;
});

// Support: IE<8
// Prevent attribute/property "interpolation"
// https://msdn.microsoft.com/en-us/library/ms536429%28VS.85%29.aspx
if ( !assert(function( el ) {
	el.innerHTML = "<a href='#'></a>";
	return el.firstChild.getAttribute("href") === "#" ;
}) ) {
	addHandle( "type|href|height|width", function( elem, name, isXML ) {
		if ( !isXML ) {
			return elem.getAttribute( name, name.toLowerCase() === "type" ? 1 : 2 );
		}
	});
}

// Support: IE<9
// Use defaultValue in place of getAttribute("value")
if ( !support.attributes || !assert(function( el ) {
	el.innerHTML = "<input/>";
	el.firstChild.setAttribute( "value", "" );
	return el.firstChild.getAttribute( "value" ) === "";
}) ) {
	addHandle( "value", function( elem, name, isXML ) {
		if ( !isXML && elem.nodeName.toLowerCase() === "input" ) {
			return elem.defaultValue;
		}
	});
}

// Support: IE<9
// Use getAttributeNode to fetch booleans when getAttribute lies
if ( !assert(function( el ) {
	return el.getAttribute("disabled") == null;
}) ) {
	addHandle( booleans, function( elem, name, isXML ) {
		var val;
		if ( !isXML ) {
			return elem[ name ] === true ? name.toLowerCase() :
					(val = elem.getAttributeNode( name )) && val.specified ?
					val.value :
				null;
		}
	});
}

return Sizzle;

})( window );



jQuery.find = Sizzle;
jQuery.expr = Sizzle.selectors;

// Deprecated
jQuery.expr[ ":" ] = jQuery.expr.pseudos;
jQuery.uniqueSort = jQuery.unique = Sizzle.uniqueSort;
jQuery.text = Sizzle.getText;
jQuery.isXMLDoc = Sizzle.isXML;
jQuery.contains = Sizzle.contains;
jQuery.escapeSelector = Sizzle.escape;




var dir = function( elem, dir, until ) {
	var matched = [],
		truncate = until !== undefined;

	while ( ( elem = elem[ dir ] ) && elem.nodeType !== 9 ) {
		if ( elem.nodeType === 1 ) {
			if ( truncate && jQuery( elem ).is( until ) ) {
				break;
			}
			matched.push( elem );
		}
	}
	return matched;
};


var siblings = function( n, elem ) {
	var matched = [];

	for ( ; n; n = n.nextSibling ) {
		if ( n.nodeType === 1 && n !== elem ) {
			matched.push( n );
		}
	}

	return matched;
};


var rneedsContext = jQuery.expr.match.needsContext;



function nodeName( elem, name ) {

  return elem.nodeName && elem.nodeName.toLowerCase() === name.toLowerCase();

};
var rsingleTag = ( /^<([a-z][^\/\0>:\x20\t\r\n\f]*)[\x20\t\r\n\f]*\/?>(?:<\/\1>|)$/i );



// Implement the identical functionality for filter and not
function winnow( elements, qualifier, not ) {
	if ( isFunction( qualifier ) ) {
		return jQuery.grep( elements, function( elem, i ) {
			return !!qualifier.call( elem, i, elem ) !== not;
		} );
	}

	// Single element
	if ( qualifier.nodeType ) {
		return jQuery.grep( elements, function( elem ) {
			return ( elem === qualifier ) !== not;
		} );
	}

	// Arraylike of elements (jQuery, arguments, Array)
	if ( typeof qualifier !== "string" ) {
		return jQuery.grep( elements, function( elem ) {
			return ( indexOf.call( qualifier, elem ) > -1 ) !== not;
		} );
	}

	// Filtered directly for both simple and complex selectors
	return jQuery.filter( qualifier, elements, not );
}

jQuery.filter = function( expr, elems, not ) {
	var elem = elems[ 0 ];

	if ( not ) {
		expr = ":not(" + expr + ")";
	}

	if ( elems.length === 1 && elem.nodeType === 1 ) {
		return jQuery.find.matchesSelector( elem, expr ) ? [ elem ] : [];
	}

	return jQuery.find.matches( expr, jQuery.grep( elems, function( elem ) {
		return elem.nodeType === 1;
	} ) );
};

jQuery.fn.extend( {
	find: function( selector ) {
		var i, ret,
			len = this.length,
			self = this;

		if ( typeof selector !== "string" ) {
			return this.pushStack( jQuery( selector ).filter( function() {
				for ( i = 0; i < len; i++ ) {
					if ( jQuery.contains( self[ i ], this ) ) {
						return true;
					}
				}
			} ) );
		}

		ret = this.pushStack( [] );

		for ( i = 0; i < len; i++ ) {
			jQuery.find( selector, self[ i ], ret );
		}

		return len > 1 ? jQuery.uniqueSort( ret ) : ret;
	},
	filter: function( selector ) {
		return this.pushStack( winnow( this, selector || [], false ) );
	},
	not: function( selector ) {
		return this.pushStack( winnow( this, selector || [], true ) );
	},
	is: function( selector ) {
		return !!winnow(
			this,

			// If this is a positional/relative selector, check membership in the returned set
			// so $("p:first").is("p:last") won't return true for a doc with two "p".
			typeof selector === "string" && rneedsContext.test( selector ) ?
				jQuery( selector ) :
				selector || [],
			false
		).length;
	}
} );


// Initialize a jQuery object


// A central reference to the root jQuery(document)
var rootjQuery,

	// A simple way to check for HTML strings
	// Prioritize #id over <tag> to avoid XSS via location.hash (#9521)
	// Strict HTML recognition (#11290: must start with <)
	// Shortcut simple #id case for speed
	rquickExpr = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]+))$/,

	init = jQuery.fn.init = function( selector, context, root ) {
		var match, elem;

		// HANDLE: $(""), $(null), $(undefined), $(false)
		if ( !selector ) {
			return this;
		}

		// Method init() accepts an alternate rootjQuery
		// so migrate can support jQuery.sub (gh-2101)
		root = root || rootjQuery;

		// Handle HTML strings
		if ( typeof selector === "string" ) {
			if ( selector[ 0 ] === "<" &&
				selector[ selector.length - 1 ] === ">" &&
				selector.length >= 3 ) {

				// Assume that strings that start and end with <> are HTML and skip the regex check
				match = [ null, selector, null ];

			} else {
				match = rquickExpr.exec( selector );
			}

			// Match html or make sure no context is specified for #id
			if ( match && ( match[ 1 ] || !context ) ) {

				// HANDLE: $(html) -> $(array)
				if ( match[ 1 ] ) {
					context = context instanceof jQuery ? context[ 0 ] : context;

					// Option to run scripts is true for back-compat
					// Intentionally let the error be thrown if parseHTML is not present
					jQuery.merge( this, jQuery.parseHTML(
						match[ 1 ],
						context && context.nodeType ? context.ownerDocument || context : document,
						true
					) );

					// HANDLE: $(html, props)
					if ( rsingleTag.test( match[ 1 ] ) && jQuery.isPlainObject( context ) ) {
						for ( match in context ) {

							// Properties of context are called as methods if possible
							if ( isFunction( this[ match ] ) ) {
								this[ match ]( context[ match ] );

							// ...and otherwise set as attributes
							} else {
								this.attr( match, context[ match ] );
							}
						}
					}

					return this;

				// HANDLE: $(#id)
				} else {
					elem = document.getElementById( match[ 2 ] );

					if ( elem ) {

						// Inject the element directly into the jQuery object
						this[ 0 ] = elem;
						this.length = 1;
					}
					return this;
				}

			// HANDLE: $(expr, $(...))
			} else if ( !context || context.jquery ) {
				return ( context || root ).find( selector );

			// HANDLE: $(expr, context)
			// (which is just equivalent to: $(context).find(expr)
			} else {
				return this.constructor( context ).find( selector );
			}

		// HANDLE: $(DOMElement)
		} else if ( selector.nodeType ) {
			this[ 0 ] = selector;
			this.length = 1;
			return this;

		// HANDLE: $(function)
		// Shortcut for document ready
		} else if ( isFunction( selector ) ) {
			return root.ready !== undefined ?
				root.ready( selector ) :

				// Execute immediately if ready is not present
				selector( jQuery );
		}

		return jQuery.makeArray( selector, this );
	};

// Give the init function the jQuery prototype for later instantiation
init.prototype = jQuery.fn;

// Initialize central reference
rootjQuery = jQuery( document );


var rparentsprev = /^(?:parents|prev(?:Until|All))/,

	// Methods guaranteed to produce a unique set when starting from a unique set
	guaranteedUnique = {
		children: true,
		contents: true,
		next: true,
		prev: true
	};

jQuery.fn.extend( {
	has: function( target ) {
		var targets = jQuery( target, this ),
			l = targets.length;

		return this.filter( function() {
			var i = 0;
			for ( ; i < l; i++ ) {
				if ( jQuery.contains( this, targets[ i ] ) ) {
					return true;
				}
			}
		} );
	},

	closest: function( selectors, context ) {
		var cur,
			i = 0,
			l = this.length,
			matched = [],
			targets = typeof selectors !== "string" && jQuery( selectors );

		// Positional selectors never match, since there's no _selection_ context
		if ( !rneedsContext.test( selectors ) ) {
			for ( ; i < l; i++ ) {
				for ( cur = this[ i ]; cur && cur !== context; cur = cur.parentNode ) {

					// Always skip document fragments
					if ( cur.nodeType < 11 && ( targets ?
						targets.index( cur ) > -1 :

						// Don't pass non-elements to Sizzle
						cur.nodeType === 1 &&
							jQuery.find.matchesSelector( cur, selectors ) ) ) {

						matched.push( cur );
						break;
					}
				}
			}
		}

		return this.pushStack( matched.length > 1 ? jQuery.uniqueSort( matched ) : matched );
	},

	// Determine the position of an element within the set
	index: function( elem ) {

		// No argument, return index in parent
		if ( !elem ) {
			return ( this[ 0 ] && this[ 0 ].parentNode ) ? this.first().prevAll().length : -1;
		}

		// Index in selector
		if ( typeof elem === "string" ) {
			return indexOf.call( jQuery( elem ), this[ 0 ] );
		}

		// Locate the position of the desired element
		return indexOf.call( this,

			// If it receives a jQuery object, the first element is used
			elem.jquery ? elem[ 0 ] : elem
		);
	},

	add: function( selector, context ) {
		return this.pushStack(
			jQuery.uniqueSort(
				jQuery.merge( this.get(), jQuery( selector, context ) )
			)
		);
	},

	addBack: function( selector ) {
		return this.add( selector == null ?
			this.prevObject : this.prevObject.filter( selector )
		);
	}
} );

function sibling( cur, dir ) {
	while ( ( cur = cur[ dir ] ) && cur.nodeType !== 1 ) {}
	return cur;
}

jQuery.each( {
	parent: function( elem ) {
		var parent = elem.parentNode;
		return parent && parent.nodeType !== 11 ? parent : null;
	},
	parents: function( elem ) {
		return dir( elem, "parentNode" );
	},
	parentsUntil: function( elem, i, until ) {
		return dir( elem, "parentNode", until );
	},
	next: function( elem ) {
		return sibling( elem, "nextSibling" );
	},
	prev: function( elem ) {
		return sibling( elem, "previousSibling" );
	},
	nextAll: function( elem ) {
		return dir( elem, "nextSibling" );
	},
	prevAll: function( elem ) {
		return dir( elem, "previousSibling" );
	},
	nextUntil: function( elem, i, until ) {
		return dir( elem, "nextSibling", until );
	},
	prevUntil: function( elem, i, until ) {
		return dir( elem, "previousSibling", until );
	},
	siblings: function( elem ) {
		return siblings( ( elem.parentNode || {} ).firstChild, elem );
	},
	children: function( elem ) {
		return siblings( elem.firstChild );
	},
	contents: function( elem ) {
		if ( typeof elem.contentDocument !== "undefined" ) {
			return elem.contentDocument;
		}

		// Support: IE 9 - 11 only, iOS 7 only, Android Browser <=4.3 only
		// Treat the template element as a regular one in browsers that
		// don't support it.
		if ( nodeName( elem, "template" ) ) {
			elem = elem.content || elem;
		}

		return jQuery.merge( [], elem.childNodes );
	}
}, function( name, fn ) {
	jQuery.fn[ name ] = function( until, selector ) {
		var matched = jQuery.map( this, fn, until );

		if ( name.slice( -5 ) !== "Until" ) {
			selector = until;
		}

		if ( selector && typeof selector === "string" ) {
			matched = jQuery.filter( selector, matched );
		}

		if ( this.length > 1 ) {

			// Remove duplicates
			if ( !guaranteedUnique[ name ] ) {
				jQuery.uniqueSort( matched );
			}

			// Reverse order for parents* and prev-derivatives
			if ( rparentsprev.test( name ) ) {
				matched.reverse();
			}
		}

		return this.pushStack( matched );
	};
} );
var rnothtmlwhite = ( /[^\x20\t\r\n\f]+/g );



// Convert String-formatted options into Object-formatted ones
function createOptions( options ) {
	var object = {};
	jQuery.each( options.match( rnothtmlwhite ) || [], function( _, flag ) {
		object[ flag ] = true;
	} );
	return object;
}

/*
 * Create a callback list using the following parameters:
 *
 *	options: an optional list of space-separated options that will change how
 *			the callback list behaves or a more traditional option object
 *
 * By default a callback list will act like an event callback list and can be
 * "fired" multiple times.
 *
 * Possible options:
 *
 *	once:			will ensure the callback list can only be fired once (like a Deferred)
 *
 *	memory:			will keep track of previous values and will call any callback added
 *					after the list has been fired right away with the latest "memorized"
 *					values (like a Deferred)
 *
 *	unique:			will ensure a callback can only be added once (no duplicate in the list)
 *
 *	stopOnFalse:	interrupt callings when a callback returns false
 *
 */
jQuery.Callbacks = function( options ) {

	// Convert options from String-formatted to Object-formatted if needed
	// (we check in cache first)
	options = typeof options === "string" ?
		createOptions( options ) :
		jQuery.extend( {}, options );

	var // Flag to know if list is currently firing
		firing,

		// Last fire value for non-forgettable lists
		memory,

		// Flag to know if list was already fired
		fired,

		// Flag to prevent firing
		locked,

		// Actual callback list
		list = [],

		// Queue of execution data for repeatable lists
		queue = [],

		// Index of currently firing callback (modified by add/remove as needed)
		firingIndex = -1,

		// Fire callbacks
		fire = function() {

			// Enforce single-firing
			locked = locked || options.once;

			// Execute callbacks for all pending executions,
			// respecting firingIndex overrides and runtime changes
			fired = firing = true;
			for ( ; queue.length; firingIndex = -1 ) {
				memory = queue.shift();
				while ( ++firingIndex < list.length ) {

					// Run callback and check for early termination
					if ( list[ firingIndex ].apply( memory[ 0 ], memory[ 1 ] ) === false &&
						options.stopOnFalse ) {

						// Jump to end and forget the data so .add doesn't re-fire
						firingIndex = list.length;
						memory = false;
					}
				}
			}

			// Forget the data if we're done with it
			if ( !options.memory ) {
				memory = false;
			}

			firing = false;

			// Clean up if we're done firing for good
			if ( locked ) {

				// Keep an empty list if we have data for future add calls
				if ( memory ) {
					list = [];

				// Otherwise, this object is spent
				} else {
					list = "";
				}
			}
		},

		// Actual Callbacks object
		self = {

			// Add a callback or a collection of callbacks to the list
			add: function() {
				if ( list ) {

					// If we have memory from a past run, we should fire after adding
					if ( memory && !firing ) {
						firingIndex = list.length - 1;
						queue.push( memory );
					}

					( function add( args ) {
						jQuery.each( args, function( _, arg ) {
							if ( isFunction( arg ) ) {
								if ( !options.unique || !self.has( arg ) ) {
									list.push( arg );
								}
							} else if ( arg && arg.length && toType( arg ) !== "string" ) {

								// Inspect recursively
								add( arg );
							}
						} );
					} )( arguments );

					if ( memory && !firing ) {
						fire();
					}
				}
				return this;
			},

			// Remove a callback from the list
			remove: function() {
				jQuery.each( arguments, function( _, arg ) {
					var index;
					while ( ( index = jQuery.inArray( arg, list, index ) ) > -1 ) {
						list.splice( index, 1 );

						// Handle firing indexes
						if ( index <= firingIndex ) {
							firingIndex--;
						}
					}
				} );
				return this;
			},

			// Check if a given callback is in the list.
			// If no argument is given, return whether or not list has callbacks attached.
			has: function( fn ) {
				return fn ?
					jQuery.inArray( fn, list ) > -1 :
					list.length > 0;
			},

			// Remove all callbacks from the list
			empty: function() {
				if ( list ) {
					list = [];
				}
				return this;
			},

			// Disable .fire and .add
			// Abort any current/pending executions
			// Clear all callbacks and values
			disable: function() {
				locked = queue = [];
				list = memory = "";
				return this;
			},
			disabled: function() {
				return !list;
			},

			// Disable .fire
			// Also disable .add unless we have memory (since it would have no effect)
			// Abort any pending executions
			lock: function() {
				locked = queue = [];
				if ( !memory && !firing ) {
					list = memory = "";
				}
				return this;
			},
			locked: function() {
				return !!locked;
			},

			// Call all callbacks with the given context and arguments
			fireWith: function( context, args ) {
				if ( !locked ) {
					args = args || [];
					args = [ context, args.slice ? args.slice() : args ];
					queue.push( args );
					if ( !firing ) {
						fire();
					}
				}
				return this;
			},

			// Call all the callbacks with the given arguments
			fire: function() {
				self.fireWith( this, arguments );
				return this;
			},

			// To know if the callbacks have already been called at least once
			fired: function() {
				return !!fired;
			}
		};

	return self;
};


function Identity( v ) {
	return v;
}
function Thrower( ex ) {
	throw ex;
}

function adoptValue( value, resolve, reject, noValue ) {
	var method;

	try {

		// Check for promise aspect first to privilege synchronous behavior
		if ( value && isFunction( ( method = value.promise ) ) ) {
			method.call( value ).done( resolve ).fail( reject );

		// Other thenables
		} else if ( value && isFunction( ( method = value.then ) ) ) {
			method.call( value, resolve, reject );

		// Other non-thenables
		} else {

			// Control `resolve` arguments by letting Array#slice cast boolean `noValue` to integer:
			// * false: [ value ].slice( 0 ) => resolve( value )
			// * true: [ value ].slice( 1 ) => resolve()
			resolve.apply( undefined, [ value ].slice( noValue ) );
		}

	// For Promises/A+, convert exceptions into rejections
	// Since jQuery.when doesn't unwrap thenables, we can skip the extra checks appearing in
	// Deferred#then to conditionally suppress rejection.
	} catch ( value ) {

		// Support: Android 4.0 only
		// Strict mode functions invoked without .call/.apply get global-object context
		reject.apply( undefined, [ value ] );
	}
}

jQuery.extend( {

	Deferred: function( func ) {
		var tuples = [

				// action, add listener, callbacks,
				// ... .then handlers, argument index, [final state]
				[ "notify", "progress", jQuery.Callbacks( "memory" ),
					jQuery.Callbacks( "memory" ), 2 ],
				[ "resolve", "done", jQuery.Callbacks( "once memory" ),
					jQuery.Callbacks( "once memory" ), 0, "resolved" ],
				[ "reject", "fail", jQuery.Callbacks( "once memory" ),
					jQuery.Callbacks( "once memory" ), 1, "rejected" ]
			],
			state = "pending",
			promise = {
				state: function() {
					return state;
				},
				always: function() {
					deferred.done( arguments ).fail( arguments );
					return this;
				},
				"catch": function( fn ) {
					return promise.then( null, fn );
				},

				// Keep pipe for back-compat
				pipe: function( /* fnDone, fnFail, fnProgress */ ) {
					var fns = arguments;

					return jQuery.Deferred( function( newDefer ) {
						jQuery.each( tuples, function( i, tuple ) {

							// Map tuples (progress, done, fail) to arguments (done, fail, progress)
							var fn = isFunction( fns[ tuple[ 4 ] ] ) && fns[ tuple[ 4 ] ];

							// deferred.progress(function() { bind to newDefer or newDefer.notify })
							// deferred.done(function() { bind to newDefer or newDefer.resolve })
							// deferred.fail(function() { bind to newDefer or newDefer.reject })
							deferred[ tuple[ 1 ] ]( function() {
								var returned = fn && fn.apply( this, arguments );
								if ( returned && isFunction( returned.promise ) ) {
									returned.promise()
										.progress( newDefer.notify )
										.done( newDefer.resolve )
										.fail( newDefer.reject );
								} else {
									newDefer[ tuple[ 0 ] + "With" ](
										this,
										fn ? [ returned ] : arguments
									);
								}
							} );
						} );
						fns = null;
					} ).promise();
				},
				then: function( onFulfilled, onRejected, onProgress ) {
					var maxDepth = 0;
					function resolve( depth, deferred, handler, special ) {
						return function() {
							var that = this,
								args = arguments,
								mightThrow = function() {
									var returned, then;

									// Support: Promises/A+ section 2.3.3.3.3
									// https://promisesaplus.com/#point-59
									// Ignore double-resolution attempts
									if ( depth < maxDepth ) {
										return;
									}

									returned = handler.apply( that, args );

									// Support: Promises/A+ section 2.3.1
									// https://promisesaplus.com/#point-48
									if ( returned === deferred.promise() ) {
										throw new TypeError( "Thenable self-resolution" );
									}

									// Support: Promises/A+ sections 2.3.3.1, 3.5
									// https://promisesaplus.com/#point-54
									// https://promisesaplus.com/#point-75
									// Retrieve `then` only once
									then = returned &&

										// Support: Promises/A+ section 2.3.4
										// https://promisesaplus.com/#point-64
										// Only check objects and functions for thenability
										( typeof returned === "object" ||
											typeof returned === "function" ) &&
										returned.then;

									// Handle a returned thenable
									if ( isFunction( then ) ) {

										// Special processors (notify) just wait for resolution
										if ( special ) {
											then.call(
												returned,
												resolve( maxDepth, deferred, Identity, special ),
												resolve( maxDepth, deferred, Thrower, special )
											);

										// Normal processors (resolve) also hook into progress
										} else {

											// ...and disregard older resolution values
											maxDepth++;

											then.call(
												returned,
												resolve( maxDepth, deferred, Identity, special ),
												resolve( maxDepth, deferred, Thrower, special ),
												resolve( maxDepth, deferred, Identity,
													deferred.notifyWith )
											);
										}

									// Handle all other returned values
									} else {

										// Only substitute handlers pass on context
										// and multiple values (non-spec behavior)
										if ( handler !== Identity ) {
											that = undefined;
											args = [ returned ];
										}

										// Process the value(s)
										// Default process is resolve
										( special || deferred.resolveWith )( that, args );
									}
								},

								// Only normal processors (resolve) catch and reject exceptions
								process = special ?
									mightThrow :
									function() {
										try {
											mightThrow();
										} catch ( e ) {

											if ( jQuery.Deferred.exceptionHook ) {
												jQuery.Deferred.exceptionHook( e,
													process.stackTrace );
											}

											// Support: Promises/A+ section 2.3.3.3.4.1
											// https://promisesaplus.com/#point-61
											// Ignore post-resolution exceptions
											if ( depth + 1 >= maxDepth ) {

												// Only substitute handlers pass on context
												// and multiple values (non-spec behavior)
												if ( handler !== Thrower ) {
													that = undefined;
													args = [ e ];
												}

												deferred.rejectWith( that, args );
											}
										}
									};

							// Support: Promises/A+ section 2.3.3.3.1
							// https://promisesaplus.com/#point-57
							// Re-resolve promises immediately to dodge false rejection from
							// subsequent errors
							if ( depth ) {
								process();
							} else {

								// Call an optional hook to record the stack, in case of exception
								// since it's otherwise lost when execution goes async
								if ( jQuery.Deferred.getStackHook ) {
									process.stackTrace = jQuery.Deferred.getStackHook();
								}
								window.setTimeout( process );
							}
						};
					}

					return jQuery.Deferred( function( newDefer ) {

						// progress_handlers.add( ... )
						tuples[ 0 ][ 3 ].add(
							resolve(
								0,
								newDefer,
								isFunction( onProgress ) ?
									onProgress :
									Identity,
								newDefer.notifyWith
							)
						);

						// fulfilled_handlers.add( ... )
						tuples[ 1 ][ 3 ].add(
							resolve(
								0,
								newDefer,
								isFunction( onFulfilled ) ?
									onFulfilled :
									Identity
							)
						);

						// rejected_handlers.add( ... )
						tuples[ 2 ][ 3 ].add(
							resolve(
								0,
								newDefer,
								isFunction( onRejected ) ?
									onRejected :
									Thrower
							)
						);
					} ).promise();
				},

				// Get a promise for this deferred
				// If obj is provided, the promise aspect is added to the object
				promise: function( obj ) {
					return obj != null ? jQuery.extend( obj, promise ) : promise;
				}
			},
			deferred = {};

		// Add list-specific methods
		jQuery.each( tuples, function( i, tuple ) {
			var list = tuple[ 2 ],
				stateString = tuple[ 5 ];

			// promise.progress = list.add
			// promise.done = list.add
			// promise.fail = list.add
			promise[ tuple[ 1 ] ] = list.add;

			// Handle state
			if ( stateString ) {
				list.add(
					function() {

						// state = "resolved" (i.e., fulfilled)
						// state = "rejected"
						state = stateString;
					},

					// rejected_callbacks.disable
					// fulfilled_callbacks.disable
					tuples[ 3 - i ][ 2 ].disable,

					// rejected_handlers.disable
					// fulfilled_handlers.disable
					tuples[ 3 - i ][ 3 ].disable,

					// progress_callbacks.lock
					tuples[ 0 ][ 2 ].lock,

					// progress_handlers.lock
					tuples[ 0 ][ 3 ].lock
				);
			}

			// progress_handlers.fire
			// fulfilled_handlers.fire
			// rejected_handlers.fire
			list.add( tuple[ 3 ].fire );

			// deferred.notify = function() { deferred.notifyWith(...) }
			// deferred.resolve = function() { deferred.resolveWith(...) }
			// deferred.reject = function() { deferred.rejectWith(...) }
			deferred[ tuple[ 0 ] ] = function() {
				deferred[ tuple[ 0 ] + "With" ]( this === deferred ? undefined : this, arguments );
				return this;
			};

			// deferred.notifyWith = list.fireWith
			// deferred.resolveWith = list.fireWith
			// deferred.rejectWith = list.fireWith
			deferred[ tuple[ 0 ] + "With" ] = list.fireWith;
		} );

		// Make the deferred a promise
		promise.promise( deferred );

		// Call given func if any
		if ( func ) {
			func.call( deferred, deferred );
		}

		// All done!
		return deferred;
	},

	// Deferred helper
	when: function( singleValue ) {
		var

			// count of uncompleted subordinates
			remaining = arguments.length,

			// count of unprocessed arguments
			i = remaining,

			// subordinate fulfillment data
			resolveContexts = Array( i ),
			resolveValues = slice.call( arguments ),

			// the master Deferred
			master = jQuery.Deferred(),

			// subordinate callback factory
			updateFunc = function( i ) {
				return function( value ) {
					resolveContexts[ i ] = this;
					resolveValues[ i ] = arguments.length > 1 ? slice.call( arguments ) : value;
					if ( !( --remaining ) ) {
						master.resolveWith( resolveContexts, resolveValues );
					}
				};
			};

		// Single- and empty arguments are adopted like Promise.resolve
		if ( remaining <= 1 ) {
			adoptValue( singleValue, master.done( updateFunc( i ) ).resolve, master.reject,
				!remaining );

			// Use .then() to unwrap secondary thenables (cf. gh-3000)
			if ( master.state() === "pending" ||
				isFunction( resolveValues[ i ] && resolveValues[ i ].then ) ) {

				return master.then();
			}
		}

		// Multiple arguments are aggregated like Promise.all array elements
		while ( i-- ) {
			adoptValue( resolveValues[ i ], updateFunc( i ), master.reject );
		}

		return master.promise();
	}
} );


// These usually indicate a programmer mistake during development,
// warn about them ASAP rather than swallowing them by default.
var rerrorNames = /^(Eval|Internal|Range|Reference|Syntax|Type|URI)Error$/;

jQuery.Deferred.exceptionHook = function( error, stack ) {

	// Support: IE 8 - 9 only
	// Console exists when dev tools are open, which can happen at any time
	if ( window.console && window.console.warn && error && rerrorNames.test( error.name ) ) {
		window.console.warn( "jQuery.Deferred exception: " + error.message, error.stack, stack );
	}
};




jQuery.readyException = function( error ) {
	window.setTimeout( function() {
		throw error;
	} );
};




// The deferred used on DOM ready
var readyList = jQuery.Deferred();

jQuery.fn.ready = function( fn ) {

	readyList
		.then( fn )

		// Wrap jQuery.readyException in a function so that the lookup
		// happens at the time of error handling instead of callback
		// registration.
		.catch( function( error ) {
			jQuery.readyException( error );
		} );

	return this;
};

jQuery.extend( {

	// Is the DOM ready to be used? Set to true once it occurs.
	isReady: false,

	// A counter to track how many items to wait for before
	// the ready event fires. See #6781
	readyWait: 1,

	// Handle when the DOM is ready
	ready: function( wait ) {

		// Abort if there are pending holds or we're already ready
		if ( wait === true ? --jQuery.readyWait : jQuery.isReady ) {
			return;
		}

		// Remember that the DOM is ready
		jQuery.isReady = true;

		// If a normal DOM Ready event fired, decrement, and wait if need be
		if ( wait !== true && --jQuery.readyWait > 0 ) {
			return;
		}

		// If there are functions bound, to execute
		readyList.resolveWith( document, [ jQuery ] );
	}
} );

jQuery.ready.then = readyList.then;

// The ready event handler and self cleanup method
function completed() {
	document.removeEventListener( "DOMContentLoaded", completed );
	window.removeEventListener( "load", completed );
	jQuery.ready();
}

// Catch cases where $(document).ready() is called
// after the browser event has already occurred.
// Support: IE <=9 - 10 only
// Older IE sometimes signals "interactive" too soon
if ( document.readyState === "complete" ||
	( document.readyState !== "loading" && !document.documentElement.doScroll ) ) {

	// Handle it asynchronously to allow scripts the opportunity to delay ready
	window.setTimeout( jQuery.ready );

} else {

	// Use the handy event callback
	document.addEventListener( "DOMContentLoaded", completed );

	// A fallback to window.onload, that will always work
	window.addEventListener( "load", completed );
}




// Multifunctional method to get and set values of a collection
// The value/s can optionally be executed if it's a function
var access = function( elems, fn, key, value, chainable, emptyGet, raw ) {
	var i = 0,
		len = elems.length,
		bulk = key == null;

	// Sets many values
	if ( toType( key ) === "object" ) {
		chainable = true;
		for ( i in key ) {
			access( elems, fn, i, key[ i ], true, emptyGet, raw );
		}

	// Sets one value
	} else if ( value !== undefined ) {
		chainable = true;

		if ( !isFunction( value ) ) {
			raw = true;
		}

		if ( bulk ) {

			// Bulk operations run against the entire set
			if ( raw ) {
				fn.call( elems, value );
				fn = null;

			// ...except when executing function values
			} else {
				bulk = fn;
				fn = function( elem, key, value ) {
					return bulk.call( jQuery( elem ), value );
				};
			}
		}

		if ( fn ) {
			for ( ; i < len; i++ ) {
				fn(
					elems[ i ], key, raw ?
					value :
					value.call( elems[ i ], i, fn( elems[ i ], key ) )
				);
			}
		}
	}

	if ( chainable ) {
		return elems;
	}

	// Gets
	if ( bulk ) {
		return fn.call( elems );
	}

	return len ? fn( elems[ 0 ], key ) : emptyGet;
};


// Matches dashed string for camelizing
var rmsPrefix = /^-ms-/,
	rdashAlpha = /-([a-z])/g;

// Used by camelCase as callback to replace()
function fcamelCase( all, letter ) {
	return letter.toUpperCase();
}

// Convert dashed to camelCase; used by the css and data modules
// Support: IE <=9 - 11, Edge 12 - 15
// Microsoft forgot to hump their vendor prefix (#9572)
function camelCase( string ) {
	return string.replace( rmsPrefix, "ms-" ).replace( rdashAlpha, fcamelCase );
}
var acceptData = function( owner ) {

	// Accepts only:
	//  - Node
	//    - Node.ELEMENT_NODE
	//    - Node.DOCUMENT_NODE
	//  - Object
	//    - Any
	return owner.nodeType === 1 || owner.nodeType === 9 || !( +owner.nodeType );
};




function Data() {
	this.expando = jQuery.expando + Data.uid++;
}

Data.uid = 1;

Data.prototype = {

	cache: function( owner ) {

		// Check if the owner object already has a cache
		var value = owner[ this.expando ];

		// If not, create one
		if ( !value ) {
			value = {};

			// We can accept data for non-element nodes in modern browsers,
			// but we should not, see #8335.
			// Always return an empty object.
			if ( acceptData( owner ) ) {

				// If it is a node unlikely to be stringify-ed or looped over
				// use plain assignment
				if ( owner.nodeType ) {
					owner[ this.expando ] = value;

				// Otherwise secure it in a non-enumerable property
				// configurable must be true to allow the property to be
				// deleted when data is removed
				} else {
					Object.defineProperty( owner, this.expando, {
						value: value,
						configurable: true
					} );
				}
			}
		}

		return value;
	},
	set: function( owner, data, value ) {
		var prop,
			cache = this.cache( owner );

		// Handle: [ owner, key, value ] args
		// Always use camelCase key (gh-2257)
		if ( typeof data === "string" ) {
			cache[ camelCase( data ) ] = value;

		// Handle: [ owner, { properties } ] args
		} else {

			// Copy the properties one-by-one to the cache object
			for ( prop in data ) {
				cache[ camelCase( prop ) ] = data[ prop ];
			}
		}
		return cache;
	},
	get: function( owner, key ) {
		return key === undefined ?
			this.cache( owner ) :

			// Always use camelCase key (gh-2257)
			owner[ this.expando ] && owner[ this.expando ][ camelCase( key ) ];
	},
	access: function( owner, key, value ) {

		// In cases where either:
		//
		//   1. No key was specified
		//   2. A string key was specified, but no value provided
		//
		// Take the "read" path and allow the get method to determine
		// which value to return, respectively either:
		//
		//   1. The entire cache object
		//   2. The data stored at the key
		//
		if ( key === undefined ||
				( ( key && typeof key === "string" ) && value === undefined ) ) {

			return this.get( owner, key );
		}

		// When the key is not a string, or both a key and value
		// are specified, set or extend (existing objects) with either:
		//
		//   1. An object of properties
		//   2. A key and value
		//
		this.set( owner, key, value );

		// Since the "set" path can have two possible entry points
		// return the expected data based on which path was taken[*]
		return value !== undefined ? value : key;
	},
	remove: function( owner, key ) {
		var i,
			cache = owner[ this.expando ];

		if ( cache === undefined ) {
			return;
		}

		if ( key !== undefined ) {

			// Support array or space separated string of keys
			if ( Array.isArray( key ) ) {

				// If key is an array of keys...
				// We always set camelCase keys, so remove that.
				key = key.map( camelCase );
			} else {
				key = camelCase( key );

				// If a key with the spaces exists, use it.
				// Otherwise, create an array by matching non-whitespace
				key = key in cache ?
					[ key ] :
					( key.match( rnothtmlwhite ) || [] );
			}

			i = key.length;

			while ( i-- ) {
				delete cache[ key[ i ] ];
			}
		}

		// Remove the expando if there's no more data
		if ( key === undefined || jQuery.isEmptyObject( cache ) ) {

			// Support: Chrome <=35 - 45
			// Webkit & Blink performance suffers when deleting properties
			// from DOM nodes, so set to undefined instead
			// https://bugs.chromium.org/p/chromium/issues/detail?id=378607 (bug restricted)
			if ( owner.nodeType ) {
				owner[ this.expando ] = undefined;
			} else {
				delete owner[ this.expando ];
			}
		}
	},
	hasData: function( owner ) {
		var cache = owner[ this.expando ];
		return cache !== undefined && !jQuery.isEmptyObject( cache );
	}
};
var dataPriv = new Data();

var dataUser = new Data();



//	Implementation Summary
//
//	1. Enforce API surface and semantic compatibility with 1.9.x branch
//	2. Improve the module's maintainability by reducing the storage
//		paths to a single mechanism.
//	3. Use the same single mechanism to support "private" and "user" data.
//	4. _Never_ expose "private" data to user code (TODO: Drop _data, _removeData)
//	5. Avoid exposing implementation details on user objects (eg. expando properties)
//	6. Provide a clear path for implementation upgrade to WeakMap in 2014

var rbrace = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,
	rmultiDash = /[A-Z]/g;

function getData( data ) {
	if ( data === "true" ) {
		return true;
	}

	if ( data === "false" ) {
		return false;
	}

	if ( data === "null" ) {
		return null;
	}

	// Only convert to a number if it doesn't change the string
	if ( data === +data + "" ) {
		return +data;
	}

	if ( rbrace.test( data ) ) {
		return JSON.parse( data );
	}

	return data;
}

function dataAttr( elem, key, data ) {
	var name;

	// If nothing was found internally, try to fetch any
	// data from the HTML5 data-* attribute
	if ( data === undefined && elem.nodeType === 1 ) {
		name = "data-" + key.replace( rmultiDash, "-$&" ).toLowerCase();
		data = elem.getAttribute( name );

		if ( typeof data === "string" ) {
			try {
				data = getData( data );
			} catch ( e ) {}

			// Make sure we set the data so it isn't changed later
			dataUser.set( elem, key, data );
		} else {
			data = undefined;
		}
	}
	return data;
}

jQuery.extend( {
	hasData: function( elem ) {
		return dataUser.hasData( elem ) || dataPriv.hasData( elem );
	},

	data: function( elem, name, data ) {
		return dataUser.access( elem, name, data );
	},

	removeData: function( elem, name ) {
		dataUser.remove( elem, name );
	},

	// TODO: Now that all calls to _data and _removeData have been replaced
	// with direct calls to dataPriv methods, these can be deprecated.
	_data: function( elem, name, data ) {
		return dataPriv.access( elem, name, data );
	},

	_removeData: function( elem, name ) {
		dataPriv.remove( elem, name );
	}
} );

jQuery.fn.extend( {
	data: function( key, value ) {
		var i, name, data,
			elem = this[ 0 ],
			attrs = elem && elem.attributes;

		// Gets all values
		if ( key === undefined ) {
			if ( this.length ) {
				data = dataUser.get( elem );

				if ( elem.nodeType === 1 && !dataPriv.get( elem, "hasDataAttrs" ) ) {
					i = attrs.length;
					while ( i-- ) {

						// Support: IE 11 only
						// The attrs elements can be null (#14894)
						if ( attrs[ i ] ) {
							name = attrs[ i ].name;
							if ( name.indexOf( "data-" ) === 0 ) {
								name = camelCase( name.slice( 5 ) );
								dataAttr( elem, name, data[ name ] );
							}
						}
					}
					dataPriv.set( elem, "hasDataAttrs", true );
				}
			}

			return data;
		}

		// Sets multiple values
		if ( typeof key === "object" ) {
			return this.each( function() {
				dataUser.set( this, key );
			} );
		}

		return access( this, function( value ) {
			var data;

			// The calling jQuery object (element matches) is not empty
			// (and therefore has an element appears at this[ 0 ]) and the
			// `value` parameter was not undefined. An empty jQuery object
			// will result in `undefined` for elem = this[ 0 ] which will
			// throw an exception if an attempt to read a data cache is made.
			if ( elem && value === undefined ) {

				// Attempt to get data from the cache
				// The key will always be camelCased in Data
				data = dataUser.get( elem, key );
				if ( data !== undefined ) {
					return data;
				}

				// Attempt to "discover" the data in
				// HTML5 custom data-* attrs
				data = dataAttr( elem, key );
				if ( data !== undefined ) {
					return data;
				}

				// We tried really hard, but the data doesn't exist.
				return;
			}

			// Set the data...
			this.each( function() {

				// We always store the camelCased key
				dataUser.set( this, key, value );
			} );
		}, null, value, arguments.length > 1, null, true );
	},

	removeData: function( key ) {
		return this.each( function() {
			dataUser.remove( this, key );
		} );
	}
} );


jQuery.extend( {
	queue: function( elem, type, data ) {
		var queue;

		if ( elem ) {
			type = ( type || "fx" ) + "queue";
			queue = dataPriv.get( elem, type );

			// Speed up dequeue by getting out quickly if this is just a lookup
			if ( data ) {
				if ( !queue || Array.isArray( data ) ) {
					queue = dataPriv.access( elem, type, jQuery.makeArray( data ) );
				} else {
					queue.push( data );
				}
			}
			return queue || [];
		}
	},

	dequeue: function( elem, type ) {
		type = type || "fx";

		var queue = jQuery.queue( elem, type ),
			startLength = queue.length,
			fn = queue.shift(),
			hooks = jQuery._queueHooks( elem, type ),
			next = function() {
				jQuery.dequeue( elem, type );
			};

		// If the fx queue is dequeued, always remove the progress sentinel
		if ( fn === "inprogress" ) {
			fn = queue.shift();
			startLength--;
		}

		if ( fn ) {

			// Add a progress sentinel to prevent the fx queue from being
			// automatically dequeued
			if ( type === "fx" ) {
				queue.unshift( "inprogress" );
			}

			// Clear up the last queue stop function
			delete hooks.stop;
			fn.call( elem, next, hooks );
		}

		if ( !startLength && hooks ) {
			hooks.empty.fire();
		}
	},

	// Not public - generate a queueHooks object, or return the current one
	_queueHooks: function( elem, type ) {
		var key = type + "queueHooks";
		return dataPriv.get( elem, key ) || dataPriv.access( elem, key, {
			empty: jQuery.Callbacks( "once memory" ).add( function() {
				dataPriv.remove( elem, [ type + "queue", key ] );
			} )
		} );
	}
} );

jQuery.fn.extend( {
	queue: function( type, data ) {
		var setter = 2;

		if ( typeof type !== "string" ) {
			data = type;
			type = "fx";
			setter--;
		}

		if ( arguments.length < setter ) {
			return jQuery.queue( this[ 0 ], type );
		}

		return data === undefined ?
			this :
			this.each( function() {
				var queue = jQuery.queue( this, type, data );

				// Ensure a hooks for this queue
				jQuery._queueHooks( this, type );

				if ( type === "fx" && queue[ 0 ] !== "inprogress" ) {
					jQuery.dequeue( this, type );
				}
			} );
	},
	dequeue: function( type ) {
		return this.each( function() {
			jQuery.dequeue( this, type );
		} );
	},
	clearQueue: function( type ) {
		return this.queue( type || "fx", [] );
	},

	// Get a promise resolved when queues of a certain type
	// are emptied (fx is the type by default)
	promise: function( type, obj ) {
		var tmp,
			count = 1,
			defer = jQuery.Deferred(),
			elements = this,
			i = this.length,
			resolve = function() {
				if ( !( --count ) ) {
					defer.resolveWith( elements, [ elements ] );
				}
			};

		if ( typeof type !== "string" ) {
			obj = type;
			type = undefined;
		}
		type = type || "fx";

		while ( i-- ) {
			tmp = dataPriv.get( elements[ i ], type + "queueHooks" );
			if ( tmp && tmp.empty ) {
				count++;
				tmp.empty.add( resolve );
			}
		}
		resolve();
		return defer.promise( obj );
	}
} );
var pnum = ( /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/ ).source;

var rcssNum = new RegExp( "^(?:([+-])=|)(" + pnum + ")([a-z%]*)$", "i" );


var cssExpand = [ "Top", "Right", "Bottom", "Left" ];

var documentElement = document.documentElement;



	var isAttached = function( elem ) {
			return jQuery.contains( elem.ownerDocument, elem );
		},
		composed = { composed: true };

	// Support: IE 9 - 11+, Edge 12 - 18+, iOS 10.0 - 10.2 only
	// Check attachment across shadow DOM boundaries when possible (gh-3504)
	// Support: iOS 10.0-10.2 only
	// Early iOS 10 versions support `attachShadow` but not `getRootNode`,
	// leading to errors. We need to check for `getRootNode`.
	if ( documentElement.getRootNode ) {
		isAttached = function( elem ) {
			return jQuery.contains( elem.ownerDocument, elem ) ||
				elem.getRootNode( composed ) === elem.ownerDocument;
		};
	}
var isHiddenWithinTree = function( elem, el ) {

		// isHiddenWithinTree might be called from jQuery#filter function;
		// in that case, element will be second argument
		elem = el || elem;

		// Inline style trumps all
		return elem.style.display === "none" ||
			elem.style.display === "" &&

			// Otherwise, check computed style
			// Support: Firefox <=43 - 45
			// Disconnected elements can have computed display: none, so first confirm that elem is
			// in the document.
			isAttached( elem ) &&

			jQuery.css( elem, "display" ) === "none";
	};

var swap = function( elem, options, callback, args ) {
	var ret, name,
		old = {};

	// Remember the old values, and insert the new ones
	for ( name in options ) {
		old[ name ] = elem.style[ name ];
		elem.style[ name ] = options[ name ];
	}

	ret = callback.apply( elem, args || [] );

	// Revert the old values
	for ( name in options ) {
		elem.style[ name ] = old[ name ];
	}

	return ret;
};




function adjustCSS( elem, prop, valueParts, tween ) {
	var adjusted, scale,
		maxIterations = 20,
		currentValue = tween ?
			function() {
				return tween.cur();
			} :
			function() {
				return jQuery.css( elem, prop, "" );
			},
		initial = currentValue(),
		unit = valueParts && valueParts[ 3 ] || ( jQuery.cssNumber[ prop ] ? "" : "px" ),

		// Starting value computation is required for potential unit mismatches
		initialInUnit = elem.nodeType &&
			( jQuery.cssNumber[ prop ] || unit !== "px" && +initial ) &&
			rcssNum.exec( jQuery.css( elem, prop ) );

	if ( initialInUnit && initialInUnit[ 3 ] !== unit ) {

		// Support: Firefox <=54
		// Halve the iteration target value to prevent interference from CSS upper bounds (gh-2144)
		initial = initial / 2;

		// Trust units reported by jQuery.css
		unit = unit || initialInUnit[ 3 ];

		// Iteratively approximate from a nonzero starting point
		initialInUnit = +initial || 1;

		while ( maxIterations-- ) {

			// Evaluate and update our best guess (doubling guesses that zero out).
			// Finish if the scale equals or crosses 1 (making the old*new product non-positive).
			jQuery.style( elem, prop, initialInUnit + unit );
			if ( ( 1 - scale ) * ( 1 - ( scale = currentValue() / initial || 0.5 ) ) <= 0 ) {
				maxIterations = 0;
			}
			initialInUnit = initialInUnit / scale;

		}

		initialInUnit = initialInUnit * 2;
		jQuery.style( elem, prop, initialInUnit + unit );

		// Make sure we update the tween properties later on
		valueParts = valueParts || [];
	}

	if ( valueParts ) {
		initialInUnit = +initialInUnit || +initial || 0;

		// Apply relative offset (+=/-=) if specified
		adjusted = valueParts[ 1 ] ?
			initialInUnit + ( valueParts[ 1 ] + 1 ) * valueParts[ 2 ] :
			+valueParts[ 2 ];
		if ( tween ) {
			tween.unit = unit;
			tween.start = initialInUnit;
			tween.end = adjusted;
		}
	}
	return adjusted;
}


var defaultDisplayMap = {};

function getDefaultDisplay( elem ) {
	var temp,
		doc = elem.ownerDocument,
		nodeName = elem.nodeName,
		display = defaultDisplayMap[ nodeName ];

	if ( display ) {
		return display;
	}

	temp = doc.body.appendChild( doc.createElement( nodeName ) );
	display = jQuery.css( temp, "display" );

	temp.parentNode.removeChild( temp );

	if ( display === "none" ) {
		display = "block";
	}
	defaultDisplayMap[ nodeName ] = display;

	return display;
}

function showHide( elements, show ) {
	var display, elem,
		values = [],
		index = 0,
		length = elements.length;

	// Determine new display value for elements that need to change
	for ( ; index < length; index++ ) {
		elem = elements[ index ];
		if ( !elem.style ) {
			continue;
		}

		display = elem.style.display;
		if ( show ) {

			// Since we force visibility upon cascade-hidden elements, an immediate (and slow)
			// check is required in this first loop unless we have a nonempty display value (either
			// inline or about-to-be-restored)
			if ( display === "none" ) {
				values[ index ] = dataPriv.get( elem, "display" ) || null;
				if ( !values[ index ] ) {
					elem.style.display = "";
				}
			}
			if ( elem.style.display === "" && isHiddenWithinTree( elem ) ) {
				values[ index ] = getDefaultDisplay( elem );
			}
		} else {
			if ( display !== "none" ) {
				values[ index ] = "none";

				// Remember what we're overwriting
				dataPriv.set( elem, "display", display );
			}
		}
	}

	// Set the display of the elements in a second loop to avoid constant reflow
	for ( index = 0; index < length; index++ ) {
		if ( values[ index ] != null ) {
			elements[ index ].style.display = values[ index ];
		}
	}

	return elements;
}

jQuery.fn.extend( {
	show: function() {
		return showHide( this, true );
	},
	hide: function() {
		return showHide( this );
	},
	toggle: function( state ) {
		if ( typeof state === "boolean" ) {
			return state ? this.show() : this.hide();
		}

		return this.each( function() {
			if ( isHiddenWithinTree( this ) ) {
				jQuery( this ).show();
			} else {
				jQuery( this ).hide();
			}
		} );
	}
} );
var rcheckableType = ( /^(?:checkbox|radio)$/i );

var rtagName = ( /<([a-z][^\/\0>\x20\t\r\n\f]*)/i );

var rscriptType = ( /^$|^module$|\/(?:java|ecma)script/i );



// We have to close these tags to support XHTML (#13200)
var wrapMap = {

	// Support: IE <=9 only
	option: [ 1, "<select multiple='multiple'>", "</select>" ],

	// XHTML parsers do not magically insert elements in the
	// same way that tag soup parsers do. So we cannot shorten
	// this by omitting <tbody> or other required elements.
	thead: [ 1, "<table>", "</table>" ],
	col: [ 2, "<table><colgroup>", "</colgroup></table>" ],
	tr: [ 2, "<table><tbody>", "</tbody></table>" ],
	td: [ 3, "<table><tbody><tr>", "</tr></tbody></table>" ],

	_default: [ 0, "", "" ]
};

// Support: IE <=9 only
wrapMap.optgroup = wrapMap.option;

wrapMap.tbody = wrapMap.tfoot = wrapMap.colgroup = wrapMap.caption = wrapMap.thead;
wrapMap.th = wrapMap.td;


function getAll( context, tag ) {

	// Support: IE <=9 - 11 only
	// Use typeof to avoid zero-argument method invocation on host objects (#15151)
	var ret;

	if ( typeof context.getElementsByTagName !== "undefined" ) {
		ret = context.getElementsByTagName( tag || "*" );

	} else if ( typeof context.querySelectorAll !== "undefined" ) {
		ret = context.querySelectorAll( tag || "*" );

	} else {
		ret = [];
	}

	if ( tag === undefined || tag && nodeName( context, tag ) ) {
		return jQuery.merge( [ context ], ret );
	}

	return ret;
}


// Mark scripts as having already been evaluated
function setGlobalEval( elems, refElements ) {
	var i = 0,
		l = elems.length;

	for ( ; i < l; i++ ) {
		dataPriv.set(
			elems[ i ],
			"globalEval",
			!refElements || dataPriv.get( refElements[ i ], "globalEval" )
		);
	}
}


var rhtml = /<|&#?\w+;/;

function buildFragment( elems, context, scripts, selection, ignored ) {
	var elem, tmp, tag, wrap, attached, j,
		fragment = context.createDocumentFragment(),
		nodes = [],
		i = 0,
		l = elems.length;

	for ( ; i < l; i++ ) {
		elem = elems[ i ];

		if ( elem || elem === 0 ) {

			// Add nodes directly
			if ( toType( elem ) === "object" ) {

				// Support: Android <=4.0 only, PhantomJS 1 only
				// push.apply(_, arraylike) throws on ancient WebKit
				jQuery.merge( nodes, elem.nodeType ? [ elem ] : elem );

			// Convert non-html into a text node
			} else if ( !rhtml.test( elem ) ) {
				nodes.push( context.createTextNode( elem ) );

			// Convert html into DOM nodes
			} else {
				tmp = tmp || fragment.appendChild( context.createElement( "div" ) );

				// Deserialize a standard representation
				tag = ( rtagName.exec( elem ) || [ "", "" ] )[ 1 ].toLowerCase();
				wrap = wrapMap[ tag ] || wrapMap._default;
				tmp.innerHTML = wrap[ 1 ] + jQuery.htmlPrefilter( elem ) + wrap[ 2 ];

				// Descend through wrappers to the right content
				j = wrap[ 0 ];
				while ( j-- ) {
					tmp = tmp.lastChild;
				}

				// Support: Android <=4.0 only, PhantomJS 1 only
				// push.apply(_, arraylike) throws on ancient WebKit
				jQuery.merge( nodes, tmp.childNodes );

				// Remember the top-level container
				tmp = fragment.firstChild;

				// Ensure the created nodes are orphaned (#12392)
				tmp.textContent = "";
			}
		}
	}

	// Remove wrapper from fragment
	fragment.textContent = "";

	i = 0;
	while ( ( elem = nodes[ i++ ] ) ) {

		// Skip elements already in the context collection (trac-4087)
		if ( selection && jQuery.inArray( elem, selection ) > -1 ) {
			if ( ignored ) {
				ignored.push( elem );
			}
			continue;
		}

		attached = isAttached( elem );

		// Append to fragment
		tmp = getAll( fragment.appendChild( elem ), "script" );

		// Preserve script evaluation history
		if ( attached ) {
			setGlobalEval( tmp );
		}

		// Capture executables
		if ( scripts ) {
			j = 0;
			while ( ( elem = tmp[ j++ ] ) ) {
				if ( rscriptType.test( elem.type || "" ) ) {
					scripts.push( elem );
				}
			}
		}
	}

	return fragment;
}


( function() {
	var fragment = document.createDocumentFragment(),
		div = fragment.appendChild( document.createElement( "div" ) ),
		input = document.createElement( "input" );

	// Support: Android 4.0 - 4.3 only
	// Check state lost if the name is set (#11217)
	// Support: Windows Web Apps (WWA)
	// `name` and `type` must use .setAttribute for WWA (#14901)
	input.setAttribute( "type", "radio" );
	input.setAttribute( "checked", "checked" );
	input.setAttribute( "name", "t" );

	div.appendChild( input );

	// Support: Android <=4.1 only
	// Older WebKit doesn't clone checked state correctly in fragments
	support.checkClone = div.cloneNode( true ).cloneNode( true ).lastChild.checked;

	// Support: IE <=11 only
	// Make sure textarea (and checkbox) defaultValue is properly cloned
	div.innerHTML = "<textarea>x</textarea>";
	support.noCloneChecked = !!div.cloneNode( true ).lastChild.defaultValue;
} )();


var
	rkeyEvent = /^key/,
	rmouseEvent = /^(?:mouse|pointer|contextmenu|drag|drop)|click/,
	rtypenamespace = /^([^.]*)(?:\.(.+)|)/;

function returnTrue() {
	return true;
}

function returnFalse() {
	return false;
}

// Support: IE <=9 - 11+
// focus() and blur() are asynchronous, except when they are no-op.
// So expect focus to be synchronous when the element is already active,
// and blur to be synchronous when the element is not already active.
// (focus and blur are always synchronous in other supported browsers,
// this just defines when we can count on it).
function expectSync( elem, type ) {
	return ( elem === safeActiveElement() ) === ( type === "focus" );
}

// Support: IE <=9 only
// Accessing document.activeElement can throw unexpectedly
// https://bugs.jquery.com/ticket/13393
function safeActiveElement() {
	try {
		return document.activeElement;
	} catch ( err ) { }
}

function on( elem, types, selector, data, fn, one ) {
	var origFn, type;

	// Types can be a map of types/handlers
	if ( typeof types === "object" ) {

		// ( types-Object, selector, data )
		if ( typeof selector !== "string" ) {

			// ( types-Object, data )
			data = data || selector;
			selector = undefined;
		}
		for ( type in types ) {
			on( elem, type, selector, data, types[ type ], one );
		}
		return elem;
	}

	if ( data == null && fn == null ) {

		// ( types, fn )
		fn = selector;
		data = selector = undefined;
	} else if ( fn == null ) {
		if ( typeof selector === "string" ) {

			// ( types, selector, fn )
			fn = data;
			data = undefined;
		} else {

			// ( types, data, fn )
			fn = data;
			data = selector;
			selector = undefined;
		}
	}
	if ( fn === false ) {
		fn = returnFalse;
	} else if ( !fn ) {
		return elem;
	}

	if ( one === 1 ) {
		origFn = fn;
		fn = function( event ) {

			// Can use an empty set, since event contains the info
			jQuery().off( event );
			return origFn.apply( this, arguments );
		};

		// Use same guid so caller can remove using origFn
		fn.guid = origFn.guid || ( origFn.guid = jQuery.guid++ );
	}
	return elem.each( function() {
		jQuery.event.add( this, types, fn, data, selector );
	} );
}

/*
 * Helper functions for managing events -- not part of the public interface.
 * Props to Dean Edwards' addEvent library for many of the ideas.
 */
jQuery.event = {

	global: {},

	add: function( elem, types, handler, data, selector ) {

		var handleObjIn, eventHandle, tmp,
			events, t, handleObj,
			special, handlers, type, namespaces, origType,
			elemData = dataPriv.get( elem );

		// Don't attach events to noData or text/comment nodes (but allow plain objects)
		if ( !elemData ) {
			return;
		}

		// Caller can pass in an object of custom data in lieu of the handler
		if ( handler.handler ) {
			handleObjIn = handler;
			handler = handleObjIn.handler;
			selector = handleObjIn.selector;
		}

		// Ensure that invalid selectors throw exceptions at attach time
		// Evaluate against documentElement in case elem is a non-element node (e.g., document)
		if ( selector ) {
			jQuery.find.matchesSelector( documentElement, selector );
		}

		// Make sure that the handler has a unique ID, used to find/remove it later
		if ( !handler.guid ) {
			handler.guid = jQuery.guid++;
		}

		// Init the element's event structure and main handler, if this is the first
		if ( !( events = elemData.events ) ) {
			events = elemData.events = {};
		}
		if ( !( eventHandle = elemData.handle ) ) {
			eventHandle = elemData.handle = function( e ) {

				// Discard the second event of a jQuery.event.trigger() and
				// when an event is called after a page has unloaded
				return typeof jQuery !== "undefined" && jQuery.event.triggered !== e.type ?
					jQuery.event.dispatch.apply( elem, arguments ) : undefined;
			};
		}

		// Handle multiple events separated by a space
		types = ( types || "" ).match( rnothtmlwhite ) || [ "" ];
		t = types.length;
		while ( t-- ) {
			tmp = rtypenamespace.exec( types[ t ] ) || [];
			type = origType = tmp[ 1 ];
			namespaces = ( tmp[ 2 ] || "" ).split( "." ).sort();

			// There *must* be a type, no attaching namespace-only handlers
			if ( !type ) {
				continue;
			}

			// If event changes its type, use the special event handlers for the changed type
			special = jQuery.event.special[ type ] || {};

			// If selector defined, determine special event api type, otherwise given type
			type = ( selector ? special.delegateType : special.bindType ) || type;

			// Update special based on newly reset type
			special = jQuery.event.special[ type ] || {};

			// handleObj is passed to all event handlers
			handleObj = jQuery.extend( {
				type: type,
				origType: origType,
				data: data,
				handler: handler,
				guid: handler.guid,
				selector: selector,
				needsContext: selector && jQuery.expr.match.needsContext.test( selector ),
				namespace: namespaces.join( "." )
			}, handleObjIn );

			// Init the event handler queue if we're the first
			if ( !( handlers = events[ type ] ) ) {
				handlers = events[ type ] = [];
				handlers.delegateCount = 0;

				// Only use addEventListener if the special events handler returns false
				if ( !special.setup ||
					special.setup.call( elem, data, namespaces, eventHandle ) === false ) {

					if ( elem.addEventListener ) {
						elem.addEventListener( type, eventHandle );
					}
				}
			}

			if ( special.add ) {
				special.add.call( elem, handleObj );

				if ( !handleObj.handler.guid ) {
					handleObj.handler.guid = handler.guid;
				}
			}

			// Add to the element's handler list, delegates in front
			if ( selector ) {
				handlers.splice( handlers.delegateCount++, 0, handleObj );
			} else {
				handlers.push( handleObj );
			}

			// Keep track of which events have ever been used, for event optimization
			jQuery.event.global[ type ] = true;
		}

	},

	// Detach an event or set of events from an element
	remove: function( elem, types, handler, selector, mappedTypes ) {

		var j, origCount, tmp,
			events, t, handleObj,
			special, handlers, type, namespaces, origType,
			elemData = dataPriv.hasData( elem ) && dataPriv.get( elem );

		if ( !elemData || !( events = elemData.events ) ) {
			return;
		}

		// Once for each type.namespace in types; type may be omitted
		types = ( types || "" ).match( rnothtmlwhite ) || [ "" ];
		t = types.length;
		while ( t-- ) {
			tmp = rtypenamespace.exec( types[ t ] ) || [];
			type = origType = tmp[ 1 ];
			namespaces = ( tmp[ 2 ] || "" ).split( "." ).sort();

			// Unbind all events (on this namespace, if provided) for the element
			if ( !type ) {
				for ( type in events ) {
					jQuery.event.remove( elem, type + types[ t ], handler, selector, true );
				}
				continue;
			}

			special = jQuery.event.special[ type ] || {};
			type = ( selector ? special.delegateType : special.bindType ) || type;
			handlers = events[ type ] || [];
			tmp = tmp[ 2 ] &&
				new RegExp( "(^|\\.)" + namespaces.join( "\\.(?:.*\\.|)" ) + "(\\.|$)" );

			// Remove matching events
			origCount = j = handlers.length;
			while ( j-- ) {
				handleObj = handlers[ j ];

				if ( ( mappedTypes || origType === handleObj.origType ) &&
					( !handler || handler.guid === handleObj.guid ) &&
					( !tmp || tmp.test( handleObj.namespace ) ) &&
					( !selector || selector === handleObj.selector ||
						selector === "**" && handleObj.selector ) ) {
					handlers.splice( j, 1 );

					if ( handleObj.selector ) {
						handlers.delegateCount--;
					}
					if ( special.remove ) {
						special.remove.call( elem, handleObj );
					}
				}
			}

			// Remove generic event handler if we removed something and no more handlers exist
			// (avoids potential for endless recursion during removal of special event handlers)
			if ( origCount && !handlers.length ) {
				if ( !special.teardown ||
					special.teardown.call( elem, namespaces, elemData.handle ) === false ) {

					jQuery.removeEvent( elem, type, elemData.handle );
				}

				delete events[ type ];
			}
		}

		// Remove data and the expando if it's no longer used
		if ( jQuery.isEmptyObject( events ) ) {
			dataPriv.remove( elem, "handle events" );
		}
	},

	dispatch: function( nativeEvent ) {

		// Make a writable jQuery.Event from the native event object
		var event = jQuery.event.fix( nativeEvent );

		var i, j, ret, matched, handleObj, handlerQueue,
			args = new Array( arguments.length ),
			handlers = ( dataPriv.get( this, "events" ) || {} )[ event.type ] || [],
			special = jQuery.event.special[ event.type ] || {};

		// Use the fix-ed jQuery.Event rather than the (read-only) native event
		args[ 0 ] = event;

		for ( i = 1; i < arguments.length; i++ ) {
			args[ i ] = arguments[ i ];
		}

		event.delegateTarget = this;

		// Call the preDispatch hook for the mapped type, and let it bail if desired
		if ( special.preDispatch && special.preDispatch.call( this, event ) === false ) {
			return;
		}

		// Determine handlers
		handlerQueue = jQuery.event.handlers.call( this, event, handlers );

		// Run delegates first; they may want to stop propagation beneath us
		i = 0;
		while ( ( matched = handlerQueue[ i++ ] ) && !event.isPropagationStopped() ) {
			event.currentTarget = matched.elem;

			j = 0;
			while ( ( handleObj = matched.handlers[ j++ ] ) &&
				!event.isImmediatePropagationStopped() ) {

				// If the event is namespaced, then each handler is only invoked if it is
				// specially universal or its namespaces are a superset of the event's.
				if ( !event.rnamespace || handleObj.namespace === false ||
					event.rnamespace.test( handleObj.namespace ) ) {

					event.handleObj = handleObj;
					event.data = handleObj.data;

					ret = ( ( jQuery.event.special[ handleObj.origType ] || {} ).handle ||
						handleObj.handler ).apply( matched.elem, args );

					if ( ret !== undefined ) {
						if ( ( event.result = ret ) === false ) {
							event.preventDefault();
							event.stopPropagation();
						}
					}
				}
			}
		}

		// Call the postDispatch hook for the mapped type
		if ( special.postDispatch ) {
			special.postDispatch.call( this, event );
		}

		return event.result;
	},

	handlers: function( event, handlers ) {
		var i, handleObj, sel, matchedHandlers, matchedSelectors,
			handlerQueue = [],
			delegateCount = handlers.delegateCount,
			cur = event.target;

		// Find delegate handlers
		if ( delegateCount &&

			// Support: IE <=9
			// Black-hole SVG <use> instance trees (trac-13180)
			cur.nodeType &&

			// Support: Firefox <=42
			// Suppress spec-violating clicks indicating a non-primary pointer button (trac-3861)
			// https://www.w3.org/TR/DOM-Level-3-Events/#event-type-click
			// Support: IE 11 only
			// ...but not arrow key "clicks" of radio inputs, which can have `button` -1 (gh-2343)
			!( event.type === "click" && event.button >= 1 ) ) {

			for ( ; cur !== this; cur = cur.parentNode || this ) {

				// Don't check non-elements (#13208)
				// Don't process clicks on disabled elements (#6911, #8165, #11382, #11764)
				if ( cur.nodeType === 1 && !( event.type === "click" && cur.disabled === true ) ) {
					matchedHandlers = [];
					matchedSelectors = {};
					for ( i = 0; i < delegateCount; i++ ) {
						handleObj = handlers[ i ];

						// Don't conflict with Object.prototype properties (#13203)
						sel = handleObj.selector + " ";

						if ( matchedSelectors[ sel ] === undefined ) {
							matchedSelectors[ sel ] = handleObj.needsContext ?
								jQuery( sel, this ).index( cur ) > -1 :
								jQuery.find( sel, this, null, [ cur ] ).length;
						}
						if ( matchedSelectors[ sel ] ) {
							matchedHandlers.push( handleObj );
						}
					}
					if ( matchedHandlers.length ) {
						handlerQueue.push( { elem: cur, handlers: matchedHandlers } );
					}
				}
			}
		}

		// Add the remaining (directly-bound) handlers
		cur = this;
		if ( delegateCount < handlers.length ) {
			handlerQueue.push( { elem: cur, handlers: handlers.slice( delegateCount ) } );
		}

		return handlerQueue;
	},

	addProp: function( name, hook ) {
		Object.defineProperty( jQuery.Event.prototype, name, {
			enumerable: true,
			configurable: true,

			get: isFunction( hook ) ?
				function() {
					if ( this.originalEvent ) {
							return hook( this.originalEvent );
					}
				} :
				function() {
					if ( this.originalEvent ) {
							return this.originalEvent[ name ];
					}
				},

			set: function( value ) {
				Object.defineProperty( this, name, {
					enumerable: true,
					configurable: true,
					writable: true,
					value: value
				} );
			}
		} );
	},

	fix: function( originalEvent ) {
		return originalEvent[ jQuery.expando ] ?
			originalEvent :
			new jQuery.Event( originalEvent );
	},

	special: {
		load: {

			// Prevent triggered image.load events from bubbling to window.load
			noBubble: true
		},
		click: {

			// Utilize native event to ensure correct state for checkable inputs
			setup: function( data ) {

				// For mutual compressibility with _default, replace `this` access with a local var.
				// `|| data` is dead code meant only to preserve the variable through minification.
				var el = this || data;

				// Claim the first handler
				if ( rcheckableType.test( el.type ) &&
					el.click && nodeName( el, "input" ) ) {

					// dataPriv.set( el, "click", ... )
					leverageNative( el, "click", returnTrue );
				}

				// Return false to allow normal processing in the caller
				return false;
			},
			trigger: function( data ) {

				// For mutual compressibility with _default, replace `this` access with a local var.
				// `|| data` is dead code meant only to preserve the variable through minification.
				var el = this || data;

				// Force setup before triggering a click
				if ( rcheckableType.test( el.type ) &&
					el.click && nodeName( el, "input" ) ) {

					leverageNative( el, "click" );
				}

				// Return non-false to allow normal event-path propagation
				return true;
			},

			// For cross-browser consistency, suppress native .click() on links
			// Also prevent it if we're currently inside a leveraged native-event stack
			_default: function( event ) {
				var target = event.target;
				return rcheckableType.test( target.type ) &&
					target.click && nodeName( target, "input" ) &&
					dataPriv.get( target, "click" ) ||
					nodeName( target, "a" );
			}
		},

		beforeunload: {
			postDispatch: function( event ) {

				// Support: Firefox 20+
				// Firefox doesn't alert if the returnValue field is not set.
				if ( event.result !== undefined && event.originalEvent ) {
					event.originalEvent.returnValue = event.result;
				}
			}
		}
	}
};

// Ensure the presence of an event listener that handles manually-triggered
// synthetic events by interrupting progress until reinvoked in response to
// *native* events that it fires directly, ensuring that state changes have
// already occurred before other listeners are invoked.
function leverageNative( el, type, expectSync ) {

	// Missing expectSync indicates a trigger call, which must force setup through jQuery.event.add
	if ( !expectSync ) {
		if ( dataPriv.get( el, type ) === undefined ) {
			jQuery.event.add( el, type, returnTrue );
		}
		return;
	}

	// Register the controller as a special universal handler for all event namespaces
	dataPriv.set( el, type, false );
	jQuery.event.add( el, type, {
		namespace: false,
		handler: function( event ) {
			var notAsync, result,
				saved = dataPriv.get( this, type );

			if ( ( event.isTrigger & 1 ) && this[ type ] ) {

				// Interrupt processing of the outer synthetic .trigger()ed event
				// Saved data should be false in such cases, but might be a leftover capture object
				// from an async native handler (gh-4350)
				if ( !saved.length ) {

					// Store arguments for use when handling the inner native event
					// There will always be at least one argument (an event object), so this array
					// will not be confused with a leftover capture object.
					saved = slice.call( arguments );
					dataPriv.set( this, type, saved );

					// Trigger the native event and capture its result
					// Support: IE <=9 - 11+
					// focus() and blur() are asynchronous
					notAsync = expectSync( this, type );
					this[ type ]();
					result = dataPriv.get( this, type );
					if ( saved !== result || notAsync ) {
						dataPriv.set( this, type, false );
					} else {
						result = {};
					}
					if ( saved !== result ) {

						// Cancel the outer synthetic event
						event.stopImmediatePropagation();
						event.preventDefault();
						return result.value;
					}

				// If this is an inner synthetic event for an event with a bubbling surrogate
				// (focus or blur), assume that the surrogate already propagated from triggering the
				// native event and prevent that from happening again here.
				// This technically gets the ordering wrong w.r.t. to `.trigger()` (in which the
				// bubbling surrogate propagates *after* the non-bubbling base), but that seems
				// less bad than duplication.
				} else if ( ( jQuery.event.special[ type ] || {} ).delegateType ) {
					event.stopPropagation();
				}

			// If this is a native event triggered above, everything is now in order
			// Fire an inner synthetic event with the original arguments
			} else if ( saved.length ) {

				// ...and capture the result
				dataPriv.set( this, type, {
					value: jQuery.event.trigger(

						// Support: IE <=9 - 11+
						// Extend with the prototype to reset the above stopImmediatePropagation()
						jQuery.extend( saved[ 0 ], jQuery.Event.prototype ),
						saved.slice( 1 ),
						this
					)
				} );

				// Abort handling of the native event
				event.stopImmediatePropagation();
			}
		}
	} );
}

jQuery.removeEvent = function( elem, type, handle ) {

	// This "if" is needed for plain objects
	if ( elem.removeEventListener ) {
		elem.removeEventListener( type, handle );
	}
};

jQuery.Event = function( src, props ) {

	// Allow instantiation without the 'new' keyword
	if ( !( this instanceof jQuery.Event ) ) {
		return new jQuery.Event( src, props );
	}

	// Event object
	if ( src && src.type ) {
		this.originalEvent = src;
		this.type = src.type;

		// Events bubbling up the document may have been marked as prevented
		// by a handler lower down the tree; reflect the correct value.
		this.isDefaultPrevented = src.defaultPrevented ||
				src.defaultPrevented === undefined &&

				// Support: Android <=2.3 only
				src.returnValue === false ?
			returnTrue :
			returnFalse;

		// Create target properties
		// Support: Safari <=6 - 7 only
		// Target should not be a text node (#504, #13143)
		this.target = ( src.target && src.target.nodeType === 3 ) ?
			src.target.parentNode :
			src.target;

		this.currentTarget = src.currentTarget;
		this.relatedTarget = src.relatedTarget;

	// Event type
	} else {
		this.type = src;
	}

	// Put explicitly provided properties onto the event object
	if ( props ) {
		jQuery.extend( this, props );
	}

	// Create a timestamp if incoming event doesn't have one
	this.timeStamp = src && src.timeStamp || Date.now();

	// Mark it as fixed
	this[ jQuery.expando ] = true;
};

// jQuery.Event is based on DOM3 Events as specified by the ECMAScript Language Binding
// https://www.w3.org/TR/2003/WD-DOM-Level-3-Events-20030331/ecma-script-binding.html
jQuery.Event.prototype = {
	constructor: jQuery.Event,
	isDefaultPrevented: returnFalse,
	isPropagationStopped: returnFalse,
	isImmediatePropagationStopped: returnFalse,
	isSimulated: false,

	preventDefault: function() {
		var e = this.originalEvent;

		this.isDefaultPrevented = returnTrue;

		if ( e && !this.isSimulated ) {
			e.preventDefault();
		}
	},
	stopPropagation: function() {
		var e = this.originalEvent;

		this.isPropagationStopped = returnTrue;

		if ( e && !this.isSimulated ) {
			e.stopPropagation();
		}
	},
	stopImmediatePropagation: function() {
		var e = this.originalEvent;

		this.isImmediatePropagationStopped = returnTrue;

		if ( e && !this.isSimulated ) {
			e.stopImmediatePropagation();
		}

		this.stopPropagation();
	}
};

// Includes all common event props including KeyEvent and MouseEvent specific props
jQuery.each( {
	altKey: true,
	bubbles: true,
	cancelable: true,
	changedTouches: true,
	ctrlKey: true,
	detail: true,
	eventPhase: true,
	metaKey: true,
	pageX: true,
	pageY: true,
	shiftKey: true,
	view: true,
	"char": true,
	code: true,
	charCode: true,
	key: true,
	keyCode: true,
	button: true,
	buttons: true,
	clientX: true,
	clientY: true,
	offsetX: true,
	offsetY: true,
	pointerId: true,
	pointerType: true,
	screenX: true,
	screenY: true,
	targetTouches: true,
	toElement: true,
	touches: true,

	which: function( event ) {
		var button = event.button;

		// Add which for key events
		if ( event.which == null && rkeyEvent.test( event.type ) ) {
			return event.charCode != null ? event.charCode : event.keyCode;
		}

		// Add which for click: 1 === left; 2 === middle; 3 === right
		if ( !event.which && button !== undefined && rmouseEvent.test( event.type ) ) {
			if ( button & 1 ) {
				return 1;
			}

			if ( button & 2 ) {
				return 3;
			}

			if ( button & 4 ) {
				return 2;
			}

			return 0;
		}

		return event.which;
	}
}, jQuery.event.addProp );

jQuery.each( { focus: "focusin", blur: "focusout" }, function( type, delegateType ) {
	jQuery.event.special[ type ] = {

		// Utilize native event if possible so blur/focus sequence is correct
		setup: function() {

			// Claim the first handler
			// dataPriv.set( this, "focus", ... )
			// dataPriv.set( this, "blur", ... )
			leverageNative( this, type, expectSync );

			// Return false to allow normal processing in the caller
			return false;
		},
		trigger: function() {

			// Force setup before trigger
			leverageNative( this, type );

			// Return non-false to allow normal event-path propagation
			return true;
		},

		delegateType: delegateType
	};
} );

// Create mouseenter/leave events using mouseover/out and event-time checks
// so that event delegation works in jQuery.
// Do the same for pointerenter/pointerleave and pointerover/pointerout
//
// Support: Safari 7 only
// Safari sends mouseenter too often; see:
// https://bugs.chromium.org/p/chromium/issues/detail?id=470258
// for the description of the bug (it existed in older Chrome versions as well).
jQuery.each( {
	mouseenter: "mouseover",
	mouseleave: "mouseout",
	pointerenter: "pointerover",
	pointerleave: "pointerout"
}, function( orig, fix ) {
	jQuery.event.special[ orig ] = {
		delegateType: fix,
		bindType: fix,

		handle: function( event ) {
			var ret,
				target = this,
				related = event.relatedTarget,
				handleObj = event.handleObj;

			// For mouseenter/leave call the handler if related is outside the target.
			// NB: No relatedTarget if the mouse left/entered the browser window
			if ( !related || ( related !== target && !jQuery.contains( target, related ) ) ) {
				event.type = handleObj.origType;
				ret = handleObj.handler.apply( this, arguments );
				event.type = fix;
			}
			return ret;
		}
	};
} );

jQuery.fn.extend( {

	on: function( types, selector, data, fn ) {
		return on( this, types, selector, data, fn );
	},
	one: function( types, selector, data, fn ) {
		return on( this, types, selector, data, fn, 1 );
	},
	off: function( types, selector, fn ) {
		var handleObj, type;
		if ( types && types.preventDefault && types.handleObj ) {

			// ( event )  dispatched jQuery.Event
			handleObj = types.handleObj;
			jQuery( types.delegateTarget ).off(
				handleObj.namespace ?
					handleObj.origType + "." + handleObj.namespace :
					handleObj.origType,
				handleObj.selector,
				handleObj.handler
			);
			return this;
		}
		if ( typeof types === "object" ) {

			// ( types-object [, selector] )
			for ( type in types ) {
				this.off( type, selector, types[ type ] );
			}
			return this;
		}
		if ( selector === false || typeof selector === "function" ) {

			// ( types [, fn] )
			fn = selector;
			selector = undefined;
		}
		if ( fn === false ) {
			fn = returnFalse;
		}
		return this.each( function() {
			jQuery.event.remove( this, types, fn, selector );
		} );
	}
} );


var

	/* eslint-disable max-len */

	// See https://github.com/eslint/eslint/issues/3229
	rxhtmlTag = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([a-z][^\/\0>\x20\t\r\n\f]*)[^>]*)\/>/gi,

	/* eslint-enable */

	// Support: IE <=10 - 11, Edge 12 - 13 only
	// In IE/Edge using regex groups here causes severe slowdowns.
	// See https://connect.microsoft.com/IE/feedback/details/1736512/
	rnoInnerhtml = /<script|<style|<link/i,

	// checked="checked" or checked
	rchecked = /checked\s*(?:[^=]|=\s*.checked.)/i,
	rcleanScript = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g;

// Prefer a tbody over its parent table for containing new rows
function manipulationTarget( elem, content ) {
	if ( nodeName( elem, "table" ) &&
		nodeName( content.nodeType !== 11 ? content : content.firstChild, "tr" ) ) {

		return jQuery( elem ).children( "tbody" )[ 0 ] || elem;
	}

	return elem;
}

// Replace/restore the type attribute of script elements for safe DOM manipulation
function disableScript( elem ) {
	elem.type = ( elem.getAttribute( "type" ) !== null ) + "/" + elem.type;
	return elem;
}
function restoreScript( elem ) {
	if ( ( elem.type || "" ).slice( 0, 5 ) === "true/" ) {
		elem.type = elem.type.slice( 5 );
	} else {
		elem.removeAttribute( "type" );
	}

	return elem;
}

function cloneCopyEvent( src, dest ) {
	var i, l, type, pdataOld, pdataCur, udataOld, udataCur, events;

	if ( dest.nodeType !== 1 ) {
		return;
	}

	// 1. Copy private data: events, handlers, etc.
	if ( dataPriv.hasData( src ) ) {
		pdataOld = dataPriv.access( src );
		pdataCur = dataPriv.set( dest, pdataOld );
		events = pdataOld.events;

		if ( events ) {
			delete pdataCur.handle;
			pdataCur.events = {};

			for ( type in events ) {
				for ( i = 0, l = events[ type ].length; i < l; i++ ) {
					jQuery.event.add( dest, type, events[ type ][ i ] );
				}
			}
		}
	}

	// 2. Copy user data
	if ( dataUser.hasData( src ) ) {
		udataOld = dataUser.access( src );
		udataCur = jQuery.extend( {}, udataOld );

		dataUser.set( dest, udataCur );
	}
}

// Fix IE bugs, see support tests
function fixInput( src, dest ) {
	var nodeName = dest.nodeName.toLowerCase();

	// Fails to persist the checked state of a cloned checkbox or radio button.
	if ( nodeName === "input" && rcheckableType.test( src.type ) ) {
		dest.checked = src.checked;

	// Fails to return the selected option to the default selected state when cloning options
	} else if ( nodeName === "input" || nodeName === "textarea" ) {
		dest.defaultValue = src.defaultValue;
	}
}

function domManip( collection, args, callback, ignored ) {

	// Flatten any nested arrays
	args = concat.apply( [], args );

	var fragment, first, scripts, hasScripts, node, doc,
		i = 0,
		l = collection.length,
		iNoClone = l - 1,
		value = args[ 0 ],
		valueIsFunction = isFunction( value );

	// We can't cloneNode fragments that contain checked, in WebKit
	if ( valueIsFunction ||
			( l > 1 && typeof value === "string" &&
				!support.checkClone && rchecked.test( value ) ) ) {
		return collection.each( function( index ) {
			var self = collection.eq( index );
			if ( valueIsFunction ) {
				args[ 0 ] = value.call( this, index, self.html() );
			}
			domManip( self, args, callback, ignored );
		} );
	}

	if ( l ) {
		fragment = buildFragment( args, collection[ 0 ].ownerDocument, false, collection, ignored );
		first = fragment.firstChild;

		if ( fragment.childNodes.length === 1 ) {
			fragment = first;
		}

		// Require either new content or an interest in ignored elements to invoke the callback
		if ( first || ignored ) {
			scripts = jQuery.map( getAll( fragment, "script" ), disableScript );
			hasScripts = scripts.length;

			// Use the original fragment for the last item
			// instead of the first because it can end up
			// being emptied incorrectly in certain situations (#8070).
			for ( ; i < l; i++ ) {
				node = fragment;

				if ( i !== iNoClone ) {
					node = jQuery.clone( node, true, true );

					// Keep references to cloned scripts for later restoration
					if ( hasScripts ) {

						// Support: Android <=4.0 only, PhantomJS 1 only
						// push.apply(_, arraylike) throws on ancient WebKit
						jQuery.merge( scripts, getAll( node, "script" ) );
					}
				}

				callback.call( collection[ i ], node, i );
			}

			if ( hasScripts ) {
				doc = scripts[ scripts.length - 1 ].ownerDocument;

				// Reenable scripts
				jQuery.map( scripts, restoreScript );

				// Evaluate executable scripts on first document insertion
				for ( i = 0; i < hasScripts; i++ ) {
					node = scripts[ i ];
					if ( rscriptType.test( node.type || "" ) &&
						!dataPriv.access( node, "globalEval" ) &&
						jQuery.contains( doc, node ) ) {

						if ( node.src && ( node.type || "" ).toLowerCase()  !== "module" ) {

							// Optional AJAX dependency, but won't run scripts if not present
							if ( jQuery._evalUrl && !node.noModule ) {
								jQuery._evalUrl( node.src, {
									nonce: node.nonce || node.getAttribute( "nonce" )
								} );
							}
						} else {
							DOMEval( node.textContent.replace( rcleanScript, "" ), node, doc );
						}
					}
				}
			}
		}
	}

	return collection;
}

function remove( elem, selector, keepData ) {
	var node,
		nodes = selector ? jQuery.filter( selector, elem ) : elem,
		i = 0;

	for ( ; ( node = nodes[ i ] ) != null; i++ ) {
		if ( !keepData && node.nodeType === 1 ) {
			jQuery.cleanData( getAll( node ) );
		}

		if ( node.parentNode ) {
			if ( keepData && isAttached( node ) ) {
				setGlobalEval( getAll( node, "script" ) );
			}
			node.parentNode.removeChild( node );
		}
	}

	return elem;
}

jQuery.extend( {
	htmlPrefilter: function( html ) {
		return html.replace( rxhtmlTag, "<$1></$2>" );
	},

	clone: function( elem, dataAndEvents, deepDataAndEvents ) {
		var i, l, srcElements, destElements,
			clone = elem.cloneNode( true ),
			inPage = isAttached( elem );

		// Fix IE cloning issues
		if ( !support.noCloneChecked && ( elem.nodeType === 1 || elem.nodeType === 11 ) &&
				!jQuery.isXMLDoc( elem ) ) {

			// We eschew Sizzle here for performance reasons: https://jsperf.com/getall-vs-sizzle/2
			destElements = getAll( clone );
			srcElements = getAll( elem );

			for ( i = 0, l = srcElements.length; i < l; i++ ) {
				fixInput( srcElements[ i ], destElements[ i ] );
			}
		}

		// Copy the events from the original to the clone
		if ( dataAndEvents ) {
			if ( deepDataAndEvents ) {
				srcElements = srcElements || getAll( elem );
				destElements = destElements || getAll( clone );

				for ( i = 0, l = srcElements.length; i < l; i++ ) {
					cloneCopyEvent( srcElements[ i ], destElements[ i ] );
				}
			} else {
				cloneCopyEvent( elem, clone );
			}
		}

		// Preserve script evaluation history
		destElements = getAll( clone, "script" );
		if ( destElements.length > 0 ) {
			setGlobalEval( destElements, !inPage && getAll( elem, "script" ) );
		}

		// Return the cloned set
		return clone;
	},

	cleanData: function( elems ) {
		var data, elem, type,
			special = jQuery.event.special,
			i = 0;

		for ( ; ( elem = elems[ i ] ) !== undefined; i++ ) {
			if ( acceptData( elem ) ) {
				if ( ( data = elem[ dataPriv.expando ] ) ) {
					if ( data.events ) {
						for ( type in data.events ) {
							if ( special[ type ] ) {
								jQuery.event.remove( elem, type );

							// This is a shortcut to avoid jQuery.event.remove's overhead
							} else {
								jQuery.removeEvent( elem, type, data.handle );
							}
						}
					}

					// Support: Chrome <=35 - 45+
					// Assign undefined instead of using delete, see Data#remove
					elem[ dataPriv.expando ] = undefined;
				}
				if ( elem[ dataUser.expando ] ) {

					// Support: Chrome <=35 - 45+
					// Assign undefined instead of using delete, see Data#remove
					elem[ dataUser.expando ] = undefined;
				}
			}
		}
	}
} );

jQuery.fn.extend( {
	detach: function( selector ) {
		return remove( this, selector, true );
	},

	remove: function( selector ) {
		return remove( this, selector );
	},

	text: function( value ) {
		return access( this, function( value ) {
			return value === undefined ?
				jQuery.text( this ) :
				this.empty().each( function() {
					if ( this.nodeType === 1 || this.nodeType === 11 || this.nodeType === 9 ) {
						this.textContent = value;
					}
				} );
		}, null, value, arguments.length );
	},

	append: function() {
		return domManip( this, arguments, function( elem ) {
			if ( this.nodeType === 1 || this.nodeType === 11 || this.nodeType === 9 ) {
				var target = manipulationTarget( this, elem );
				target.appendChild( elem );
			}
		} );
	},

	prepend: function() {
		return domManip( this, arguments, function( elem ) {
			if ( this.nodeType === 1 || this.nodeType === 11 || this.nodeType === 9 ) {
				var target = manipulationTarget( this, elem );
				target.insertBefore( elem, target.firstChild );
			}
		} );
	},

	before: function() {
		return domManip( this, arguments, function( elem ) {
			if ( this.parentNode ) {
				this.parentNode.insertBefore( elem, this );
			}
		} );
	},

	after: function() {
		return domManip( this, arguments, function( elem ) {
			if ( this.parentNode ) {
				this.parentNode.insertBefore( elem, this.nextSibling );
			}
		} );
	},

	empty: function() {
		var elem,
			i = 0;

		for ( ; ( elem = this[ i ] ) != null; i++ ) {
			if ( elem.nodeType === 1 ) {

				// Prevent memory leaks
				jQuery.cleanData( getAll( elem, false ) );

				// Remove any remaining nodes
				elem.textContent = "";
			}
		}

		return this;
	},

	clone: function( dataAndEvents, deepDataAndEvents ) {
		dataAndEvents = dataAndEvents == null ? false : dataAndEvents;
		deepDataAndEvents = deepDataAndEvents == null ? dataAndEvents : deepDataAndEvents;

		return this.map( function() {
			return jQuery.clone( this, dataAndEvents, deepDataAndEvents );
		} );
	},

	html: function( value ) {
		return access( this, function( value ) {
			var elem = this[ 0 ] || {},
				i = 0,
				l = this.length;

			if ( value === undefined && elem.nodeType === 1 ) {
				return elem.innerHTML;
			}

			// See if we can take a shortcut and just use innerHTML
			if ( typeof value === "string" && !rnoInnerhtml.test( value ) &&
				!wrapMap[ ( rtagName.exec( value ) || [ "", "" ] )[ 1 ].toLowerCase() ] ) {

				value = jQuery.htmlPrefilter( value );

				try {
					for ( ; i < l; i++ ) {
						elem = this[ i ] || {};

						// Remove element nodes and prevent memory leaks
						if ( elem.nodeType === 1 ) {
							jQuery.cleanData( getAll( elem, false ) );
							elem.innerHTML = value;
						}
					}

					elem = 0;

				// If using innerHTML throws an exception, use the fallback method
				} catch ( e ) {}
			}

			if ( elem ) {
				this.empty().append( value );
			}
		}, null, value, arguments.length );
	},

	replaceWith: function() {
		var ignored = [];

		// Make the changes, replacing each non-ignored context element with the new content
		return domManip( this, arguments, function( elem ) {
			var parent = this.parentNode;

			if ( jQuery.inArray( this, ignored ) < 0 ) {
				jQuery.cleanData( getAll( this ) );
				if ( parent ) {
					parent.replaceChild( elem, this );
				}
			}

		// Force callback invocation
		}, ignored );
	}
} );

jQuery.each( {
	appendTo: "append",
	prependTo: "prepend",
	insertBefore: "before",
	insertAfter: "after",
	replaceAll: "replaceWith"
}, function( name, original ) {
	jQuery.fn[ name ] = function( selector ) {
		var elems,
			ret = [],
			insert = jQuery( selector ),
			last = insert.length - 1,
			i = 0;

		for ( ; i <= last; i++ ) {
			elems = i === last ? this : this.clone( true );
			jQuery( insert[ i ] )[ original ]( elems );

			// Support: Android <=4.0 only, PhantomJS 1 only
			// .get() because push.apply(_, arraylike) throws on ancient WebKit
			push.apply( ret, elems.get() );
		}

		return this.pushStack( ret );
	};
} );
var rnumnonpx = new RegExp( "^(" + pnum + ")(?!px)[a-z%]+$", "i" );

var getStyles = function( elem ) {

		// Support: IE <=11 only, Firefox <=30 (#15098, #14150)
		// IE throws on elements created in popups
		// FF meanwhile throws on frame elements through "defaultView.getComputedStyle"
		var view = elem.ownerDocument.defaultView;

		if ( !view || !view.opener ) {
			view = window;
		}

		return view.getComputedStyle( elem );
	};

var rboxStyle = new RegExp( cssExpand.join( "|" ), "i" );



( function() {

	// Executing both pixelPosition & boxSizingReliable tests require only one layout
	// so they're executed at the same time to save the second computation.
	function computeStyleTests() {

		// This is a singleton, we need to execute it only once
		if ( !div ) {
			return;
		}

		container.style.cssText = "position:absolute;left:-11111px;width:60px;" +
			"margin-top:1px;padding:0;border:0";
		div.style.cssText =
			"position:relative;display:block;box-sizing:border-box;overflow:scroll;" +
			"margin:auto;border:1px;padding:1px;" +
			"width:60%;top:1%";
		documentElement.appendChild( container ).appendChild( div );

		var divStyle = window.getComputedStyle( div );
		pixelPositionVal = divStyle.top !== "1%";

		// Support: Android 4.0 - 4.3 only, Firefox <=3 - 44
		reliableMarginLeftVal = roundPixelMeasures( divStyle.marginLeft ) === 12;

		// Support: Android 4.0 - 4.3 only, Safari <=9.1 - 10.1, iOS <=7.0 - 9.3
		// Some styles come back with percentage values, even though they shouldn't
		div.style.right = "60%";
		pixelBoxStylesVal = roundPixelMeasures( divStyle.right ) === 36;

		// Support: IE 9 - 11 only
		// Detect misreporting of content dimensions for box-sizing:border-box elements
		boxSizingReliableVal = roundPixelMeasures( divStyle.width ) === 36;

		// Support: IE 9 only
		// Detect overflow:scroll screwiness (gh-3699)
		// Support: Chrome <=64
		// Don't get tricked when zoom affects offsetWidth (gh-4029)
		div.style.position = "absolute";
		scrollboxSizeVal = roundPixelMeasures( div.offsetWidth / 3 ) === 12;

		documentElement.removeChild( container );

		// Nullify the div so it wouldn't be stored in the memory and
		// it will also be a sign that checks already performed
		div = null;
	}

	function roundPixelMeasures( measure ) {
		return Math.round( parseFloat( measure ) );
	}

	var pixelPositionVal, boxSizingReliableVal, scrollboxSizeVal, pixelBoxStylesVal,
		reliableMarginLeftVal,
		container = document.createElement( "div" ),
		div = document.createElement( "div" );

	// Finish early in limited (non-browser) environments
	if ( !div.style ) {
		return;
	}

	// Support: IE <=9 - 11 only
	// Style of cloned element affects source element cloned (#8908)
	div.style.backgroundClip = "content-box";
	div.cloneNode( true ).style.backgroundClip = "";
	support.clearCloneStyle = div.style.backgroundClip === "content-box";

	jQuery.extend( support, {
		boxSizingReliable: function() {
			computeStyleTests();
			return boxSizingReliableVal;
		},
		pixelBoxStyles: function() {
			computeStyleTests();
			return pixelBoxStylesVal;
		},
		pixelPosition: function() {
			computeStyleTests();
			return pixelPositionVal;
		},
		reliableMarginLeft: function() {
			computeStyleTests();
			return reliableMarginLeftVal;
		},
		scrollboxSize: function() {
			computeStyleTests();
			return scrollboxSizeVal;
		}
	} );
} )();


function curCSS( elem, name, computed ) {
	var width, minWidth, maxWidth, ret,

		// Support: Firefox 51+
		// Retrieving style before computed somehow
		// fixes an issue with getting wrong values
		// on detached elements
		style = elem.style;

	computed = computed || getStyles( elem );

	// getPropertyValue is needed for:
	//   .css('filter') (IE 9 only, #12537)
	//   .css('--customProperty) (#3144)
	if ( computed ) {
		ret = computed.getPropertyValue( name ) || computed[ name ];

		if ( ret === "" && !isAttached( elem ) ) {
			ret = jQuery.style( elem, name );
		}

		// A tribute to the "awesome hack by Dean Edwards"
		// Android Browser returns percentage for some values,
		// but width seems to be reliably pixels.
		// This is against the CSSOM draft spec:
		// https://drafts.csswg.org/cssom/#resolved-values
		if ( !support.pixelBoxStyles() && rnumnonpx.test( ret ) && rboxStyle.test( name ) ) {

			// Remember the original values
			width = style.width;
			minWidth = style.minWidth;
			maxWidth = style.maxWidth;

			// Put in the new values to get a computed value out
			style.minWidth = style.maxWidth = style.width = ret;
			ret = computed.width;

			// Revert the changed values
			style.width = width;
			style.minWidth = minWidth;
			style.maxWidth = maxWidth;
		}
	}

	return ret !== undefined ?

		// Support: IE <=9 - 11 only
		// IE returns zIndex value as an integer.
		ret + "" :
		ret;
}


function addGetHookIf( conditionFn, hookFn ) {

	// Define the hook, we'll check on the first run if it's really needed.
	return {
		get: function() {
			if ( conditionFn() ) {

				// Hook not needed (or it's not possible to use it due
				// to missing dependency), remove it.
				delete this.get;
				return;
			}

			// Hook needed; redefine it so that the support test is not executed again.
			return ( this.get = hookFn ).apply( this, arguments );
		}
	};
}


var cssPrefixes = [ "Webkit", "Moz", "ms" ],
	emptyStyle = document.createElement( "div" ).style,
	vendorProps = {};

// Return a vendor-prefixed property or undefined
function vendorPropName( name ) {

	// Check for vendor prefixed names
	var capName = name[ 0 ].toUpperCase() + name.slice( 1 ),
		i = cssPrefixes.length;

	while ( i-- ) {
		name = cssPrefixes[ i ] + capName;
		if ( name in emptyStyle ) {
			return name;
		}
	}
}

// Return a potentially-mapped jQuery.cssProps or vendor prefixed property
function finalPropName( name ) {
	var final = jQuery.cssProps[ name ] || vendorProps[ name ];

	if ( final ) {
		return final;
	}
	if ( name in emptyStyle ) {
		return name;
	}
	return vendorProps[ name ] = vendorPropName( name ) || name;
}


var

	// Swappable if display is none or starts with table
	// except "table", "table-cell", or "table-caption"
	// See here for display values: https://developer.mozilla.org/en-US/docs/CSS/display
	rdisplayswap = /^(none|table(?!-c[ea]).+)/,
	rcustomProp = /^--/,
	cssShow = { position: "absolute", visibility: "hidden", display: "block" },
	cssNormalTransform = {
		letterSpacing: "0",
		fontWeight: "400"
	};

function setPositiveNumber( elem, value, subtract ) {

	// Any relative (+/-) values have already been
	// normalized at this point
	var matches = rcssNum.exec( value );
	return matches ?

		// Guard against undefined "subtract", e.g., when used as in cssHooks
		Math.max( 0, matches[ 2 ] - ( subtract || 0 ) ) + ( matches[ 3 ] || "px" ) :
		value;
}

function boxModelAdjustment( elem, dimension, box, isBorderBox, styles, computedVal ) {
	var i = dimension === "width" ? 1 : 0,
		extra = 0,
		delta = 0;

	// Adjustment may not be necessary
	if ( box === ( isBorderBox ? "border" : "content" ) ) {
		return 0;
	}

	for ( ; i < 4; i += 2 ) {

		// Both box models exclude margin
		if ( box === "margin" ) {
			delta += jQuery.css( elem, box + cssExpand[ i ], true, styles );
		}

		// If we get here with a content-box, we're seeking "padding" or "border" or "margin"
		if ( !isBorderBox ) {

			// Add padding
			delta += jQuery.css( elem, "padding" + cssExpand[ i ], true, styles );

			// For "border" or "margin", add border
			if ( box !== "padding" ) {
				delta += jQuery.css( elem, "border" + cssExpand[ i ] + "Width", true, styles );

			// But still keep track of it otherwise
			} else {
				extra += jQuery.css( elem, "border" + cssExpand[ i ] + "Width", true, styles );
			}

		// If we get here with a border-box (content + padding + border), we're seeking "content" or
		// "padding" or "margin"
		} else {

			// For "content", subtract padding
			if ( box === "content" ) {
				delta -= jQuery.css( elem, "padding" + cssExpand[ i ], true, styles );
			}

			// For "content" or "padding", subtract border
			if ( box !== "margin" ) {
				delta -= jQuery.css( elem, "border" + cssExpand[ i ] + "Width", true, styles );
			}
		}
	}

	// Account for positive content-box scroll gutter when requested by providing computedVal
	if ( !isBorderBox && computedVal >= 0 ) {

		// offsetWidth/offsetHeight is a rounded sum of content, padding, scroll gutter, and border
		// Assuming integer scroll gutter, subtract the rest and round down
		delta += Math.max( 0, Math.ceil(
			elem[ "offset" + dimension[ 0 ].toUpperCase() + dimension.slice( 1 ) ] -
			computedVal -
			delta -
			extra -
			0.5

		// If offsetWidth/offsetHeight is unknown, then we can't determine content-box scroll gutter
		// Use an explicit zero to avoid NaN (gh-3964)
		) ) || 0;
	}

	return delta;
}

function getWidthOrHeight( elem, dimension, extra ) {

	// Start with computed style
	var styles = getStyles( elem ),

		// To avoid forcing a reflow, only fetch boxSizing if we need it (gh-4322).
		// Fake content-box until we know it's needed to know the true value.
		boxSizingNeeded = !support.boxSizingReliable() || extra,
		isBorderBox = boxSizingNeeded &&
			jQuery.css( elem, "boxSizing", false, styles ) === "border-box",
		valueIsBorderBox = isBorderBox,

		val = curCSS( elem, dimension, styles ),
		offsetProp = "offset" + dimension[ 0 ].toUpperCase() + dimension.slice( 1 );

	// Support: Firefox <=54
	// Return a confounding non-pixel value or feign ignorance, as appropriate.
	if ( rnumnonpx.test( val ) ) {
		if ( !extra ) {
			return val;
		}
		val = "auto";
	}


	// Fall back to offsetWidth/offsetHeight when value is "auto"
	// This happens for inline elements with no explicit setting (gh-3571)
	// Support: Android <=4.1 - 4.3 only
	// Also use offsetWidth/offsetHeight for misreported inline dimensions (gh-3602)
	// Support: IE 9-11 only
	// Also use offsetWidth/offsetHeight for when box sizing is unreliable
	// We use getClientRects() to check for hidden/disconnected.
	// In those cases, the computed value can be trusted to be border-box
	if ( ( !support.boxSizingReliable() && isBorderBox ||
		val === "auto" ||
		!parseFloat( val ) && jQuery.css( elem, "display", false, styles ) === "inline" ) &&
		elem.getClientRects().length ) {

		isBorderBox = jQuery.css( elem, "boxSizing", false, styles ) === "border-box";

		// Where available, offsetWidth/offsetHeight approximate border box dimensions.
		// Where not available (e.g., SVG), assume unreliable box-sizing and interpret the
		// retrieved value as a content box dimension.
		valueIsBorderBox = offsetProp in elem;
		if ( valueIsBorderBox ) {
			val = elem[ offsetProp ];
		}
	}

	// Normalize "" and auto
	val = parseFloat( val ) || 0;

	// Adjust for the element's box model
	return ( val +
		boxModelAdjustment(
			elem,
			dimension,
			extra || ( isBorderBox ? "border" : "content" ),
			valueIsBorderBox,
			styles,

			// Provide the current computed size to request scroll gutter calculation (gh-3589)
			val
		)
	) + "px";
}

jQuery.extend( {

	// Add in style property hooks for overriding the default
	// behavior of getting and setting a style property
	cssHooks: {
		opacity: {
			get: function( elem, computed ) {
				if ( computed ) {

					// We should always get a number back from opacity
					var ret = curCSS( elem, "opacity" );
					return ret === "" ? "1" : ret;
				}
			}
		}
	},

	// Don't automatically add "px" to these possibly-unitless properties
	cssNumber: {
		"animationIterationCount": true,
		"columnCount": true,
		"fillOpacity": true,
		"flexGrow": true,
		"flexShrink": true,
		"fontWeight": true,
		"gridArea": true,
		"gridColumn": true,
		"gridColumnEnd": true,
		"gridColumnStart": true,
		"gridRow": true,
		"gridRowEnd": true,
		"gridRowStart": true,
		"lineHeight": true,
		"opacity": true,
		"order": true,
		"orphans": true,
		"widows": true,
		"zIndex": true,
		"zoom": true
	},

	// Add in properties whose names you wish to fix before
	// setting or getting the value
	cssProps: {},

	// Get and set the style property on a DOM Node
	style: function( elem, name, value, extra ) {

		// Don't set styles on text and comment nodes
		if ( !elem || elem.nodeType === 3 || elem.nodeType === 8 || !elem.style ) {
			return;
		}

		// Make sure that we're working with the right name
		var ret, type, hooks,
			origName = camelCase( name ),
			isCustomProp = rcustomProp.test( name ),
			style = elem.style;

		// Make sure that we're working with the right name. We don't
		// want to query the value if it is a CSS custom property
		// since they are user-defined.
		if ( !isCustomProp ) {
			name = finalPropName( origName );
		}

		// Gets hook for the prefixed version, then unprefixed version
		hooks = jQuery.cssHooks[ name ] || jQuery.cssHooks[ origName ];

		// Check if we're setting a value
		if ( value !== undefined ) {
			type = typeof value;

			// Convert "+=" or "-=" to relative numbers (#7345)
			if ( type === "string" && ( ret = rcssNum.exec( value ) ) && ret[ 1 ] ) {
				value = adjustCSS( elem, name, ret );

				// Fixes bug #9237
				type = "number";
			}

			// Make sure that null and NaN values aren't set (#7116)
			if ( value == null || value !== value ) {
				return;
			}

			// If a number was passed in, add the unit (except for certain CSS properties)
			// The isCustomProp check can be removed in jQuery 4.0 when we only auto-append
			// "px" to a few hardcoded values.
			if ( type === "number" && !isCustomProp ) {
				value += ret && ret[ 3 ] || ( jQuery.cssNumber[ origName ] ? "" : "px" );
			}

			// background-* props affect original clone's values
			if ( !support.clearCloneStyle && value === "" && name.indexOf( "background" ) === 0 ) {
				style[ name ] = "inherit";
			}

			// If a hook was provided, use that value, otherwise just set the specified value
			if ( !hooks || !( "set" in hooks ) ||
				( value = hooks.set( elem, value, extra ) ) !== undefined ) {

				if ( isCustomProp ) {
					style.setProperty( name, value );
				} else {
					style[ name ] = value;
				}
			}

		} else {

			// If a hook was provided get the non-computed value from there
			if ( hooks && "get" in hooks &&
				( ret = hooks.get( elem, false, extra ) ) !== undefined ) {

				return ret;
			}

			// Otherwise just get the value from the style object
			return style[ name ];
		}
	},

	css: function( elem, name, extra, styles ) {
		var val, num, hooks,
			origName = camelCase( name ),
			isCustomProp = rcustomProp.test( name );

		// Make sure that we're working with the right name. We don't
		// want to modify the value if it is a CSS custom property
		// since they are user-defined.
		if ( !isCustomProp ) {
			name = finalPropName( origName );
		}

		// Try prefixed name followed by the unprefixed name
		hooks = jQuery.cssHooks[ name ] || jQuery.cssHooks[ origName ];

		// If a hook was provided get the computed value from there
		if ( hooks && "get" in hooks ) {
			val = hooks.get( elem, true, extra );
		}

		// Otherwise, if a way to get the computed value exists, use that
		if ( val === undefined ) {
			val = curCSS( elem, name, styles );
		}

		// Convert "normal" to computed value
		if ( val === "normal" && name in cssNormalTransform ) {
			val = cssNormalTransform[ name ];
		}

		// Make numeric if forced or a qualifier was provided and val looks numeric
		if ( extra === "" || extra ) {
			num = parseFloat( val );
			return extra === true || isFinite( num ) ? num || 0 : val;
		}

		return val;
	}
} );

jQuery.each( [ "height", "width" ], function( i, dimension ) {
	jQuery.cssHooks[ dimension ] = {
		get: function( elem, computed, extra ) {
			if ( computed ) {

				// Certain elements can have dimension info if we invisibly show them
				// but it must have a current display style that would benefit
				return rdisplayswap.test( jQuery.css( elem, "display" ) ) &&

					// Support: Safari 8+
					// Table columns in Safari have non-zero offsetWidth & zero
					// getBoundingClientRect().width unless display is changed.
					// Support: IE <=11 only
					// Running getBoundingClientRect on a disconnected node
					// in IE throws an error.
					( !elem.getClientRects().length || !elem.getBoundingClientRect().width ) ?
						swap( elem, cssShow, function() {
							return getWidthOrHeight( elem, dimension, extra );
						} ) :
						getWidthOrHeight( elem, dimension, extra );
			}
		},

		set: function( elem, value, extra ) {
			var matches,
				styles = getStyles( elem ),

				// Only read styles.position if the test has a chance to fail
				// to avoid forcing a reflow.
				scrollboxSizeBuggy = !support.scrollboxSize() &&
					styles.position === "absolute",

				// To avoid forcing a reflow, only fetch boxSizing if we need it (gh-3991)
				boxSizingNeeded = scrollboxSizeBuggy || extra,
				isBorderBox = boxSizingNeeded &&
					jQuery.css( elem, "boxSizing", false, styles ) === "border-box",
				subtract = extra ?
					boxModelAdjustment(
						elem,
						dimension,
						extra,
						isBorderBox,
						styles
					) :
					0;

			// Account for unreliable border-box dimensions by comparing offset* to computed and
			// faking a content-box to get border and padding (gh-3699)
			if ( isBorderBox && scrollboxSizeBuggy ) {
				subtract -= Math.ceil(
					elem[ "offset" + dimension[ 0 ].toUpperCase() + dimension.slice( 1 ) ] -
					parseFloat( styles[ dimension ] ) -
					boxModelAdjustment( elem, dimension, "border", false, styles ) -
					0.5
				);
			}

			// Convert to pixels if value adjustment is needed
			if ( subtract && ( matches = rcssNum.exec( value ) ) &&
				( matches[ 3 ] || "px" ) !== "px" ) {

				elem.style[ dimension ] = value;
				value = jQuery.css( elem, dimension );
			}

			return setPositiveNumber( elem, value, subtract );
		}
	};
} );

jQuery.cssHooks.marginLeft = addGetHookIf( support.reliableMarginLeft,
	function( elem, computed ) {
		if ( computed ) {
			return ( parseFloat( curCSS( elem, "marginLeft" ) ) ||
				elem.getBoundingClientRect().left -
					swap( elem, { marginLeft: 0 }, function() {
						return elem.getBoundingClientRect().left;
					} )
				) + "px";
		}
	}
);

// These hooks are used by animate to expand properties
jQuery.each( {
	margin: "",
	padding: "",
	border: "Width"
}, function( prefix, suffix ) {
	jQuery.cssHooks[ prefix + suffix ] = {
		expand: function( value ) {
			var i = 0,
				expanded = {},

				// Assumes a single number if not a string
				parts = typeof value === "string" ? value.split( " " ) : [ value ];

			for ( ; i < 4; i++ ) {
				expanded[ prefix + cssExpand[ i ] + suffix ] =
					parts[ i ] || parts[ i - 2 ] || parts[ 0 ];
			}

			return expanded;
		}
	};

	if ( prefix !== "margin" ) {
		jQuery.cssHooks[ prefix + suffix ].set = setPositiveNumber;
	}
} );

jQuery.fn.extend( {
	css: function( name, value ) {
		return access( this, function( elem, name, value ) {
			var styles, len,
				map = {},
				i = 0;

			if ( Array.isArray( name ) ) {
				styles = getStyles( elem );
				len = name.length;

				for ( ; i < len; i++ ) {
					map[ name[ i ] ] = jQuery.css( elem, name[ i ], false, styles );
				}

				return map;
			}

			return value !== undefined ?
				jQuery.style( elem, name, value ) :
				jQuery.css( elem, name );
		}, name, value, arguments.length > 1 );
	}
} );


function Tween( elem, options, prop, end, easing ) {
	return new Tween.prototype.init( elem, options, prop, end, easing );
}
jQuery.Tween = Tween;

Tween.prototype = {
	constructor: Tween,
	init: function( elem, options, prop, end, easing, unit ) {
		this.elem = elem;
		this.prop = prop;
		this.easing = easing || jQuery.easing._default;
		this.options = options;
		this.start = this.now = this.cur();
		this.end = end;
		this.unit = unit || ( jQuery.cssNumber[ prop ] ? "" : "px" );
	},
	cur: function() {
		var hooks = Tween.propHooks[ this.prop ];

		return hooks && hooks.get ?
			hooks.get( this ) :
			Tween.propHooks._default.get( this );
	},
	run: function( percent ) {
		var eased,
			hooks = Tween.propHooks[ this.prop ];

		if ( this.options.duration ) {
			this.pos = eased = jQuery.easing[ this.easing ](
				percent, this.options.duration * percent, 0, 1, this.options.duration
			);
		} else {
			this.pos = eased = percent;
		}
		this.now = ( this.end - this.start ) * eased + this.start;

		if ( this.options.step ) {
			this.options.step.call( this.elem, this.now, this );
		}

		if ( hooks && hooks.set ) {
			hooks.set( this );
		} else {
			Tween.propHooks._default.set( this );
		}
		return this;
	}
};

Tween.prototype.init.prototype = Tween.prototype;

Tween.propHooks = {
	_default: {
		get: function( tween ) {
			var result;

			// Use a property on the element directly when it is not a DOM element,
			// or when there is no matching style property that exists.
			if ( tween.elem.nodeType !== 1 ||
				tween.elem[ tween.prop ] != null && tween.elem.style[ tween.prop ] == null ) {
				return tween.elem[ tween.prop ];
			}

			// Passing an empty string as a 3rd parameter to .css will automatically
			// attempt a parseFloat and fallback to a string if the parse fails.
			// Simple values such as "10px" are parsed to Float;
			// complex values such as "rotate(1rad)" are returned as-is.
			result = jQuery.css( tween.elem, tween.prop, "" );

			// Empty strings, null, undefined and "auto" are converted to 0.
			return !result || result === "auto" ? 0 : result;
		},
		set: function( tween ) {

			// Use step hook for back compat.
			// Use cssHook if its there.
			// Use .style if available and use plain properties where available.
			if ( jQuery.fx.step[ tween.prop ] ) {
				jQuery.fx.step[ tween.prop ]( tween );
			} else if ( tween.elem.nodeType === 1 && (
					jQuery.cssHooks[ tween.prop ] ||
					tween.elem.style[ finalPropName( tween.prop ) ] != null ) ) {
				jQuery.style( tween.elem, tween.prop, tween.now + tween.unit );
			} else {
				tween.elem[ tween.prop ] = tween.now;
			}
		}
	}
};

// Support: IE <=9 only
// Panic based approach to setting things on disconnected nodes
Tween.propHooks.scrollTop = Tween.propHooks.scrollLeft = {
	set: function( tween ) {
		if ( tween.elem.nodeType && tween.elem.parentNode ) {
			tween.elem[ tween.prop ] = tween.now;
		}
	}
};

jQuery.easing = {
	linear: function( p ) {
		return p;
	},
	swing: function( p ) {
		return 0.5 - Math.cos( p * Math.PI ) / 2;
	},
	_default: "swing"
};

jQuery.fx = Tween.prototype.init;

// Back compat <1.8 extension point
jQuery.fx.step = {};




var
	fxNow, inProgress,
	rfxtypes = /^(?:toggle|show|hide)$/,
	rrun = /queueHooks$/;

function schedule() {
	if ( inProgress ) {
		if ( document.hidden === false && window.requestAnimationFrame ) {
			window.requestAnimationFrame( schedule );
		} else {
			window.setTimeout( schedule, jQuery.fx.interval );
		}

		jQuery.fx.tick();
	}
}

// Animations created synchronously will run synchronously
function createFxNow() {
	window.setTimeout( function() {
		fxNow = undefined;
	} );
	return ( fxNow = Date.now() );
}

// Generate parameters to create a standard animation
function genFx( type, includeWidth ) {
	var which,
		i = 0,
		attrs = { height: type };

	// If we include width, step value is 1 to do all cssExpand values,
	// otherwise step value is 2 to skip over Left and Right
	includeWidth = includeWidth ? 1 : 0;
	for ( ; i < 4; i += 2 - includeWidth ) {
		which = cssExpand[ i ];
		attrs[ "margin" + which ] = attrs[ "padding" + which ] = type;
	}

	if ( includeWidth ) {
		attrs.opacity = attrs.width = type;
	}

	return attrs;
}

function createTween( value, prop, animation ) {
	var tween,
		collection = ( Animation.tweeners[ prop ] || [] ).concat( Animation.tweeners[ "*" ] ),
		index = 0,
		length = collection.length;
	for ( ; index < length; index++ ) {
		if ( ( tween = collection[ index ].call( animation, prop, value ) ) ) {

			// We're done with this property
			return tween;
		}
	}
}

function defaultPrefilter( elem, props, opts ) {
	var prop, value, toggle, hooks, oldfire, propTween, restoreDisplay, display,
		isBox = "width" in props || "height" in props,
		anim = this,
		orig = {},
		style = elem.style,
		hidden = elem.nodeType && isHiddenWithinTree( elem ),
		dataShow = dataPriv.get( elem, "fxshow" );

	// Queue-skipping animations hijack the fx hooks
	if ( !opts.queue ) {
		hooks = jQuery._queueHooks( elem, "fx" );
		if ( hooks.unqueued == null ) {
			hooks.unqueued = 0;
			oldfire = hooks.empty.fire;
			hooks.empty.fire = function() {
				if ( !hooks.unqueued ) {
					oldfire();
				}
			};
		}
		hooks.unqueued++;

		anim.always( function() {

			// Ensure the complete handler is called before this completes
			anim.always( function() {
				hooks.unqueued--;
				if ( !jQuery.queue( elem, "fx" ).length ) {
					hooks.empty.fire();
				}
			} );
		} );
	}

	// Detect show/hide animations
	for ( prop in props ) {
		value = props[ prop ];
		if ( rfxtypes.test( value ) ) {
			delete props[ prop ];
			toggle = toggle || value === "toggle";
			if ( value === ( hidden ? "hide" : "show" ) ) {

				// Pretend to be hidden if this is a "show" and
				// there is still data from a stopped show/hide
				if ( value === "show" && dataShow && dataShow[ prop ] !== undefined ) {
					hidden = true;

				// Ignore all other no-op show/hide data
				} else {
					continue;
				}
			}
			orig[ prop ] = dataShow && dataShow[ prop ] || jQuery.style( elem, prop );
		}
	}

	// Bail out if this is a no-op like .hide().hide()
	propTween = !jQuery.isEmptyObject( props );
	if ( !propTween && jQuery.isEmptyObject( orig ) ) {
		return;
	}

	// Restrict "overflow" and "display" styles during box animations
	if ( isBox && elem.nodeType === 1 ) {

		// Support: IE <=9 - 11, Edge 12 - 15
		// Record all 3 overflow attributes because IE does not infer the shorthand
		// from identically-valued overflowX and overflowY and Edge just mirrors
		// the overflowX value there.
		opts.overflow = [ style.overflow, style.overflowX, style.overflowY ];

		// Identify a display type, preferring old show/hide data over the CSS cascade
		restoreDisplay = dataShow && dataShow.display;
		if ( restoreDisplay == null ) {
			restoreDisplay = dataPriv.get( elem, "display" );
		}
		display = jQuery.css( elem, "display" );
		if ( display === "none" ) {
			if ( restoreDisplay ) {
				display = restoreDisplay;
			} else {

				// Get nonempty value(s) by temporarily forcing visibility
				showHide( [ elem ], true );
				restoreDisplay = elem.style.display || restoreDisplay;
				display = jQuery.css( elem, "display" );
				showHide( [ elem ] );
			}
		}

		// Animate inline elements as inline-block
		if ( display === "inline" || display === "inline-block" && restoreDisplay != null ) {
			if ( jQuery.css( elem, "float" ) === "none" ) {

				// Restore the original display value at the end of pure show/hide animations
				if ( !propTween ) {
					anim.done( function() {
						style.display = restoreDisplay;
					} );
					if ( restoreDisplay == null ) {
						display = style.display;
						restoreDisplay = display === "none" ? "" : display;
					}
				}
				style.display = "inline-block";
			}
		}
	}

	if ( opts.overflow ) {
		style.overflow = "hidden";
		anim.always( function() {
			style.overflow = opts.overflow[ 0 ];
			style.overflowX = opts.overflow[ 1 ];
			style.overflowY = opts.overflow[ 2 ];
		} );
	}

	// Implement show/hide animations
	propTween = false;
	for ( prop in orig ) {

		// General show/hide setup for this element animation
		if ( !propTween ) {
			if ( dataShow ) {
				if ( "hidden" in dataShow ) {
					hidden = dataShow.hidden;
				}
			} else {
				dataShow = dataPriv.access( elem, "fxshow", { display: restoreDisplay } );
			}

			// Store hidden/visible for toggle so `.stop().toggle()` "reverses"
			if ( toggle ) {
				dataShow.hidden = !hidden;
			}

			// Show elements before animating them
			if ( hidden ) {
				showHide( [ elem ], true );
			}

			/* eslint-disable no-loop-func */

			anim.done( function() {

			/* eslint-enable no-loop-func */

				// The final step of a "hide" animation is actually hiding the element
				if ( !hidden ) {
					showHide( [ elem ] );
				}
				dataPriv.remove( elem, "fxshow" );
				for ( prop in orig ) {
					jQuery.style( elem, prop, orig[ prop ] );
				}
			} );
		}

		// Per-property setup
		propTween = createTween( hidden ? dataShow[ prop ] : 0, prop, anim );
		if ( !( prop in dataShow ) ) {
			dataShow[ prop ] = propTween.start;
			if ( hidden ) {
				propTween.end = propTween.start;
				propTween.start = 0;
			}
		}
	}
}

function propFilter( props, specialEasing ) {
	var index, name, easing, value, hooks;

	// camelCase, specialEasing and expand cssHook pass
	for ( index in props ) {
		name = camelCase( index );
		easing = specialEasing[ name ];
		value = props[ index ];
		if ( Array.isArray( value ) ) {
			easing = value[ 1 ];
			value = props[ index ] = value[ 0 ];
		}

		if ( index !== name ) {
			props[ name ] = value;
			delete props[ index ];
		}

		hooks = jQuery.cssHooks[ name ];
		if ( hooks && "expand" in hooks ) {
			value = hooks.expand( value );
			delete props[ name ];

			// Not quite $.extend, this won't overwrite existing keys.
			// Reusing 'index' because we have the correct "name"
			for ( index in value ) {
				if ( !( index in props ) ) {
					props[ index ] = value[ index ];
					specialEasing[ index ] = easing;
				}
			}
		} else {
			specialEasing[ name ] = easing;
		}
	}
}

function Animation( elem, properties, options ) {
	var result,
		stopped,
		index = 0,
		length = Animation.prefilters.length,
		deferred = jQuery.Deferred().always( function() {

			// Don't match elem in the :animated selector
			delete tick.elem;
		} ),
		tick = function() {
			if ( stopped ) {
				return false;
			}
			var currentTime = fxNow || createFxNow(),
				remaining = Math.max( 0, animation.startTime + animation.duration - currentTime ),

				// Support: Android 2.3 only
				// Archaic crash bug won't allow us to use `1 - ( 0.5 || 0 )` (#12497)
				temp = remaining / animation.duration || 0,
				percent = 1 - temp,
				index = 0,
				length = animation.tweens.length;

			for ( ; index < length; index++ ) {
				animation.tweens[ index ].run( percent );
			}

			deferred.notifyWith( elem, [ animation, percent, remaining ] );

			// If there's more to do, yield
			if ( percent < 1 && length ) {
				return remaining;
			}

			// If this was an empty animation, synthesize a final progress notification
			if ( !length ) {
				deferred.notifyWith( elem, [ animation, 1, 0 ] );
			}

			// Resolve the animation and report its conclusion
			deferred.resolveWith( elem, [ animation ] );
			return false;
		},
		animation = deferred.promise( {
			elem: elem,
			props: jQuery.extend( {}, properties ),
			opts: jQuery.extend( true, {
				specialEasing: {},
				easing: jQuery.easing._default
			}, options ),
			originalProperties: properties,
			originalOptions: options,
			startTime: fxNow || createFxNow(),
			duration: options.duration,
			tweens: [],
			createTween: function( prop, end ) {
				var tween = jQuery.Tween( elem, animation.opts, prop, end,
						animation.opts.specialEasing[ prop ] || animation.opts.easing );
				animation.tweens.push( tween );
				return tween;
			},
			stop: function( gotoEnd ) {
				var index = 0,

					// If we are going to the end, we want to run all the tweens
					// otherwise we skip this part
					length = gotoEnd ? animation.tweens.length : 0;
				if ( stopped ) {
					return this;
				}
				stopped = true;
				for ( ; index < length; index++ ) {
					animation.tweens[ index ].run( 1 );
				}

				// Resolve when we played the last frame; otherwise, reject
				if ( gotoEnd ) {
					deferred.notifyWith( elem, [ animation, 1, 0 ] );
					deferred.resolveWith( elem, [ animation, gotoEnd ] );
				} else {
					deferred.rejectWith( elem, [ animation, gotoEnd ] );
				}
				return this;
			}
		} ),
		props = animation.props;

	propFilter( props, animation.opts.specialEasing );

	for ( ; index < length; index++ ) {
		result = Animation.prefilters[ index ].call( animation, elem, props, animation.opts );
		if ( result ) {
			if ( isFunction( result.stop ) ) {
				jQuery._queueHooks( animation.elem, animation.opts.queue ).stop =
					result.stop.bind( result );
			}
			return result;
		}
	}

	jQuery.map( props, createTween, animation );

	if ( isFunction( animation.opts.start ) ) {
		animation.opts.start.call( elem, animation );
	}

	// Attach callbacks from options
	animation
		.progress( animation.opts.progress )
		.done( animation.opts.done, animation.opts.complete )
		.fail( animation.opts.fail )
		.always( animation.opts.always );

	jQuery.fx.timer(
		jQuery.extend( tick, {
			elem: elem,
			anim: animation,
			queue: animation.opts.queue
		} )
	);

	return animation;
}

jQuery.Animation = jQuery.extend( Animation, {

	tweeners: {
		"*": [ function( prop, value ) {
			var tween = this.createTween( prop, value );
			adjustCSS( tween.elem, prop, rcssNum.exec( value ), tween );
			return tween;
		} ]
	},

	tweener: function( props, callback ) {
		if ( isFunction( props ) ) {
			callback = props;
			props = [ "*" ];
		} else {
			props = props.match( rnothtmlwhite );
		}

		var prop,
			index = 0,
			length = props.length;

		for ( ; index < length; index++ ) {
			prop = props[ index ];
			Animation.tweeners[ prop ] = Animation.tweeners[ prop ] || [];
			Animation.tweeners[ prop ].unshift( callback );
		}
	},

	prefilters: [ defaultPrefilter ],

	prefilter: function( callback, prepend ) {
		if ( prepend ) {
			Animation.prefilters.unshift( callback );
		} else {
			Animation.prefilters.push( callback );
		}
	}
} );

jQuery.speed = function( speed, easing, fn ) {
	var opt = speed && typeof speed === "object" ? jQuery.extend( {}, speed ) : {
		complete: fn || !fn && easing ||
			isFunction( speed ) && speed,
		duration: speed,
		easing: fn && easing || easing && !isFunction( easing ) && easing
	};

	// Go to the end state if fx are off
	if ( jQuery.fx.off ) {
		opt.duration = 0;

	} else {
		if ( typeof opt.duration !== "number" ) {
			if ( opt.duration in jQuery.fx.speeds ) {
				opt.duration = jQuery.fx.speeds[ opt.duration ];

			} else {
				opt.duration = jQuery.fx.speeds._default;
			}
		}
	}

	// Normalize opt.queue - true/undefined/null -> "fx"
	if ( opt.queue == null || opt.queue === true ) {
		opt.queue = "fx";
	}

	// Queueing
	opt.old = opt.complete;

	opt.complete = function() {
		if ( isFunction( opt.old ) ) {
			opt.old.call( this );
		}

		if ( opt.queue ) {
			jQuery.dequeue( this, opt.queue );
		}
	};

	return opt;
};

jQuery.fn.extend( {
	fadeTo: function( speed, to, easing, callback ) {

		// Show any hidden elements after setting opacity to 0
		return this.filter( isHiddenWithinTree ).css( "opacity", 0 ).show()

			// Animate to the value specified
			.end().animate( { opacity: to }, speed, easing, callback );
	},
	animate: function( prop, speed, easing, callback ) {
		var empty = jQuery.isEmptyObject( prop ),
			optall = jQuery.speed( speed, easing, callback ),
			doAnimation = function() {

				// Operate on a copy of prop so per-property easing won't be lost
				var anim = Animation( this, jQuery.extend( {}, prop ), optall );

				// Empty animations, or finishing resolves immediately
				if ( empty || dataPriv.get( this, "finish" ) ) {
					anim.stop( true );
				}
			};
			doAnimation.finish = doAnimation;

		return empty || optall.queue === false ?
			this.each( doAnimation ) :
			this.queue( optall.queue, doAnimation );
	},
	stop: function( type, clearQueue, gotoEnd ) {
		var stopQueue = function( hooks ) {
			var stop = hooks.stop;
			delete hooks.stop;
			stop( gotoEnd );
		};

		if ( typeof type !== "string" ) {
			gotoEnd = clearQueue;
			clearQueue = type;
			type = undefined;
		}
		if ( clearQueue && type !== false ) {
			this.queue( type || "fx", [] );
		}

		return this.each( function() {
			var dequeue = true,
				index = type != null && type + "queueHooks",
				timers = jQuery.timers,
				data = dataPriv.get( this );

			if ( index ) {
				if ( data[ index ] && data[ index ].stop ) {
					stopQueue( data[ index ] );
				}
			} else {
				for ( index in data ) {
					if ( data[ index ] && data[ index ].stop && rrun.test( index ) ) {
						stopQueue( data[ index ] );
					}
				}
			}

			for ( index = timers.length; index--; ) {
				if ( timers[ index ].elem === this &&
					( type == null || timers[ index ].queue === type ) ) {

					timers[ index ].anim.stop( gotoEnd );
					dequeue = false;
					timers.splice( index, 1 );
				}
			}

			// Start the next in the queue if the last step wasn't forced.
			// Timers currently will call their complete callbacks, which
			// will dequeue but only if they were gotoEnd.
			if ( dequeue || !gotoEnd ) {
				jQuery.dequeue( this, type );
			}
		} );
	},
	finish: function( type ) {
		if ( type !== false ) {
			type = type || "fx";
		}
		return this.each( function() {
			var index,
				data = dataPriv.get( this ),
				queue = data[ type + "queue" ],
				hooks = data[ type + "queueHooks" ],
				timers = jQuery.timers,
				length = queue ? queue.length : 0;

			// Enable finishing flag on private data
			data.finish = true;

			// Empty the queue first
			jQuery.queue( this, type, [] );

			if ( hooks && hooks.stop ) {
				hooks.stop.call( this, true );
			}

			// Look for any active animations, and finish them
			for ( index = timers.length; index--; ) {
				if ( timers[ index ].elem === this && timers[ index ].queue === type ) {
					timers[ index ].anim.stop( true );
					timers.splice( index, 1 );
				}
			}

			// Look for any animations in the old queue and finish them
			for ( index = 0; index < length; index++ ) {
				if ( queue[ index ] && queue[ index ].finish ) {
					queue[ index ].finish.call( this );
				}
			}

			// Turn off finishing flag
			delete data.finish;
		} );
	}
} );

jQuery.each( [ "toggle", "show", "hide" ], function( i, name ) {
	var cssFn = jQuery.fn[ name ];
	jQuery.fn[ name ] = function( speed, easing, callback ) {
		return speed == null || typeof speed === "boolean" ?
			cssFn.apply( this, arguments ) :
			this.animate( genFx( name, true ), speed, easing, callback );
	};
} );

// Generate shortcuts for custom animations
jQuery.each( {
	slideDown: genFx( "show" ),
	slideUp: genFx( "hide" ),
	slideToggle: genFx( "toggle" ),
	fadeIn: { opacity: "show" },
	fadeOut: { opacity: "hide" },
	fadeToggle: { opacity: "toggle" }
}, function( name, props ) {
	jQuery.fn[ name ] = function( speed, easing, callback ) {
		return this.animate( props, speed, easing, callback );
	};
} );

jQuery.timers = [];
jQuery.fx.tick = function() {
	var timer,
		i = 0,
		timers = jQuery.timers;

	fxNow = Date.now();

	for ( ; i < timers.length; i++ ) {
		timer = timers[ i ];

		// Run the timer and safely remove it when done (allowing for external removal)
		if ( !timer() && timers[ i ] === timer ) {
			timers.splice( i--, 1 );
		}
	}

	if ( !timers.length ) {
		jQuery.fx.stop();
	}
	fxNow = undefined;
};

jQuery.fx.timer = function( timer ) {
	jQuery.timers.push( timer );
	jQuery.fx.start();
};

jQuery.fx.interval = 13;
jQuery.fx.start = function() {
	if ( inProgress ) {
		return;
	}

	inProgress = true;
	schedule();
};

jQuery.fx.stop = function() {
	inProgress = null;
};

jQuery.fx.speeds = {
	slow: 600,
	fast: 200,

	// Default speed
	_default: 400
};


// Based off of the plugin by Clint Helfers, with permission.
// https://web.archive.org/web/20100324014747/http://blindsignals.com/index.php/2009/07/jquery-delay/
jQuery.fn.delay = function( time, type ) {
	time = jQuery.fx ? jQuery.fx.speeds[ time ] || time : time;
	type = type || "fx";

	return this.queue( type, function( next, hooks ) {
		var timeout = window.setTimeout( next, time );
		hooks.stop = function() {
			window.clearTimeout( timeout );
		};
	} );
};


( function() {
	var input = document.createElement( "input" ),
		select = document.createElement( "select" ),
		opt = select.appendChild( document.createElement( "option" ) );

	input.type = "checkbox";

	// Support: Android <=4.3 only
	// Default value for a checkbox should be "on"
	support.checkOn = input.value !== "";

	// Support: IE <=11 only
	// Must access selectedIndex to make default options select
	support.optSelected = opt.selected;

	// Support: IE <=11 only
	// An input loses its value after becoming a radio
	input = document.createElement( "input" );
	input.value = "t";
	input.type = "radio";
	support.radioValue = input.value === "t";
} )();


var boolHook,
	attrHandle = jQuery.expr.attrHandle;

jQuery.fn.extend( {
	attr: function( name, value ) {
		return access( this, jQuery.attr, name, value, arguments.length > 1 );
	},

	removeAttr: function( name ) {
		return this.each( function() {
			jQuery.removeAttr( this, name );
		} );
	}
} );

jQuery.extend( {
	attr: function( elem, name, value ) {
		var ret, hooks,
			nType = elem.nodeType;

		// Don't get/set attributes on text, comment and attribute nodes
		if ( nType === 3 || nType === 8 || nType === 2 ) {
			return;
		}

		// Fallback to prop when attributes are not supported
		if ( typeof elem.getAttribute === "undefined" ) {
			return jQuery.prop( elem, name, value );
		}

		// Attribute hooks are determined by the lowercase version
		// Grab necessary hook if one is defined
		if ( nType !== 1 || !jQuery.isXMLDoc( elem ) ) {
			hooks = jQuery.attrHooks[ name.toLowerCase() ] ||
				( jQuery.expr.match.bool.test( name ) ? boolHook : undefined );
		}

		if ( value !== undefined ) {
			if ( value === null ) {
				jQuery.removeAttr( elem, name );
				return;
			}

			if ( hooks && "set" in hooks &&
				( ret = hooks.set( elem, value, name ) ) !== undefined ) {
				return ret;
			}

			elem.setAttribute( name, value + "" );
			return value;
		}

		if ( hooks && "get" in hooks && ( ret = hooks.get( elem, name ) ) !== null ) {
			return ret;
		}

		ret = jQuery.find.attr( elem, name );

		// Non-existent attributes return null, we normalize to undefined
		return ret == null ? undefined : ret;
	},

	attrHooks: {
		type: {
			set: function( elem, value ) {
				if ( !support.radioValue && value === "radio" &&
					nodeName( elem, "input" ) ) {
					var val = elem.value;
					elem.setAttribute( "type", value );
					if ( val ) {
						elem.value = val;
					}
					return value;
				}
			}
		}
	},

	removeAttr: function( elem, value ) {
		var name,
			i = 0,

			// Attribute names can contain non-HTML whitespace characters
			// https://html.spec.whatwg.org/multipage/syntax.html#attributes-2
			attrNames = value && value.match( rnothtmlwhite );

		if ( attrNames && elem.nodeType === 1 ) {
			while ( ( name = attrNames[ i++ ] ) ) {
				elem.removeAttribute( name );
			}
		}
	}
} );

// Hooks for boolean attributes
boolHook = {
	set: function( elem, value, name ) {
		if ( value === false ) {

			// Remove boolean attributes when set to false
			jQuery.removeAttr( elem, name );
		} else {
			elem.setAttribute( name, name );
		}
		return name;
	}
};

jQuery.each( jQuery.expr.match.bool.source.match( /\w+/g ), function( i, name ) {
	var getter = attrHandle[ name ] || jQuery.find.attr;

	attrHandle[ name ] = function( elem, name, isXML ) {
		var ret, handle,
			lowercaseName = name.toLowerCase();

		if ( !isXML ) {

			// Avoid an infinite loop by temporarily removing this function from the getter
			handle = attrHandle[ lowercaseName ];
			attrHandle[ lowercaseName ] = ret;
			ret = getter( elem, name, isXML ) != null ?
				lowercaseName :
				null;
			attrHandle[ lowercaseName ] = handle;
		}
		return ret;
	};
} );




var rfocusable = /^(?:input|select|textarea|button)$/i,
	rclickable = /^(?:a|area)$/i;

jQuery.fn.extend( {
	prop: function( name, value ) {
		return access( this, jQuery.prop, name, value, arguments.length > 1 );
	},

	removeProp: function( name ) {
		return this.each( function() {
			delete this[ jQuery.propFix[ name ] || name ];
		} );
	}
} );

jQuery.extend( {
	prop: function( elem, name, value ) {
		var ret, hooks,
			nType = elem.nodeType;

		// Don't get/set properties on text, comment and attribute nodes
		if ( nType === 3 || nType === 8 || nType === 2 ) {
			return;
		}

		if ( nType !== 1 || !jQuery.isXMLDoc( elem ) ) {

			// Fix name and attach hooks
			name = jQuery.propFix[ name ] || name;
			hooks = jQuery.propHooks[ name ];
		}

		if ( value !== undefined ) {
			if ( hooks && "set" in hooks &&
				( ret = hooks.set( elem, value, name ) ) !== undefined ) {
				return ret;
			}

			return ( elem[ name ] = value );
		}

		if ( hooks && "get" in hooks && ( ret = hooks.get( elem, name ) ) !== null ) {
			return ret;
		}

		return elem[ name ];
	},

	propHooks: {
		tabIndex: {
			get: function( elem ) {

				// Support: IE <=9 - 11 only
				// elem.tabIndex doesn't always return the
				// correct value when it hasn't been explicitly set
				// https://web.archive.org/web/20141116233347/http://fluidproject.org/blog/2008/01/09/getting-setting-and-removing-tabindex-values-with-javascript/
				// Use proper attribute retrieval(#12072)
				var tabindex = jQuery.find.attr( elem, "tabindex" );

				if ( tabindex ) {
					return parseInt( tabindex, 10 );
				}

				if (
					rfocusable.test( elem.nodeName ) ||
					rclickable.test( elem.nodeName ) &&
					elem.href
				) {
					return 0;
				}

				return -1;
			}
		}
	},

	propFix: {
		"for": "htmlFor",
		"class": "className"
	}
} );

// Support: IE <=11 only
// Accessing the selectedIndex property
// forces the browser to respect setting selected
// on the option
// The getter ensures a default option is selected
// when in an optgroup
// eslint rule "no-unused-expressions" is disabled for this code
// since it considers such accessions noop
if ( !support.optSelected ) {
	jQuery.propHooks.selected = {
		get: function( elem ) {

			/* eslint no-unused-expressions: "off" */

			var parent = elem.parentNode;
			if ( parent && parent.parentNode ) {
				parent.parentNode.selectedIndex;
			}
			return null;
		},
		set: function( elem ) {

			/* eslint no-unused-expressions: "off" */

			var parent = elem.parentNode;
			if ( parent ) {
				parent.selectedIndex;

				if ( parent.parentNode ) {
					parent.parentNode.selectedIndex;
				}
			}
		}
	};
}

jQuery.each( [
	"tabIndex",
	"readOnly",
	"maxLength",
	"cellSpacing",
	"cellPadding",
	"rowSpan",
	"colSpan",
	"useMap",
	"frameBorder",
	"contentEditable"
], function() {
	jQuery.propFix[ this.toLowerCase() ] = this;
} );




	// Strip and collapse whitespace according to HTML spec
	// https://infra.spec.whatwg.org/#strip-and-collapse-ascii-whitespace
	function stripAndCollapse( value ) {
		var tokens = value.match( rnothtmlwhite ) || [];
		return tokens.join( " " );
	}


function getClass( elem ) {
	return elem.getAttribute && elem.getAttribute( "class" ) || "";
}

function classesToArray( value ) {
	if ( Array.isArray( value ) ) {
		return value;
	}
	if ( typeof value === "string" ) {
		return value.match( rnothtmlwhite ) || [];
	}
	return [];
}

jQuery.fn.extend( {
	addClass: function( value ) {
		var classes, elem, cur, curValue, clazz, j, finalValue,
			i = 0;

		if ( isFunction( value ) ) {
			return this.each( function( j ) {
				jQuery( this ).addClass( value.call( this, j, getClass( this ) ) );
			} );
		}

		classes = classesToArray( value );

		if ( classes.length ) {
			while ( ( elem = this[ i++ ] ) ) {
				curValue = getClass( elem );
				cur = elem.nodeType === 1 && ( " " + stripAndCollapse( curValue ) + " " );

				if ( cur ) {
					j = 0;
					while ( ( clazz = classes[ j++ ] ) ) {
						if ( cur.indexOf( " " + clazz + " " ) < 0 ) {
							cur += clazz + " ";
						}
					}

					// Only assign if different to avoid unneeded rendering.
					finalValue = stripAndCollapse( cur );
					if ( curValue !== finalValue ) {
						elem.setAttribute( "class", finalValue );
					}
				}
			}
		}

		return this;
	},

	removeClass: function( value ) {
		var classes, elem, cur, curValue, clazz, j, finalValue,
			i = 0;

		if ( isFunction( value ) ) {
			return this.each( function( j ) {
				jQuery( this ).removeClass( value.call( this, j, getClass( this ) ) );
			} );
		}

		if ( !arguments.length ) {
			return this.attr( "class", "" );
		}

		classes = classesToArray( value );

		if ( classes.length ) {
			while ( ( elem = this[ i++ ] ) ) {
				curValue = getClass( elem );

				// This expression is here for better compressibility (see addClass)
				cur = elem.nodeType === 1 && ( " " + stripAndCollapse( curValue ) + " " );

				if ( cur ) {
					j = 0;
					while ( ( clazz = classes[ j++ ] ) ) {

						// Remove *all* instances
						while ( cur.indexOf( " " + clazz + " " ) > -1 ) {
							cur = cur.replace( " " + clazz + " ", " " );
						}
					}

					// Only assign if different to avoid unneeded rendering.
					finalValue = stripAndCollapse( cur );
					if ( curValue !== finalValue ) {
						elem.setAttribute( "class", finalValue );
					}
				}
			}
		}

		return this;
	},

	toggleClass: function( value, stateVal ) {
		var type = typeof value,
			isValidValue = type === "string" || Array.isArray( value );

		if ( typeof stateVal === "boolean" && isValidValue ) {
			return stateVal ? this.addClass( value ) : this.removeClass( value );
		}

		if ( isFunction( value ) ) {
			return this.each( function( i ) {
				jQuery( this ).toggleClass(
					value.call( this, i, getClass( this ), stateVal ),
					stateVal
				);
			} );
		}

		return this.each( function() {
			var className, i, self, classNames;

			if ( isValidValue ) {

				// Toggle individual class names
				i = 0;
				self = jQuery( this );
				classNames = classesToArray( value );

				while ( ( className = classNames[ i++ ] ) ) {

					// Check each className given, space separated list
					if ( self.hasClass( className ) ) {
						self.removeClass( className );
					} else {
						self.addClass( className );
					}
				}

			// Toggle whole class name
			} else if ( value === undefined || type === "boolean" ) {
				className = getClass( this );
				if ( className ) {

					// Store className if set
					dataPriv.set( this, "__className__", className );
				}

				// If the element has a class name or if we're passed `false`,
				// then remove the whole classname (if there was one, the above saved it).
				// Otherwise bring back whatever was previously saved (if anything),
				// falling back to the empty string if nothing was stored.
				if ( this.setAttribute ) {
					this.setAttribute( "class",
						className || value === false ?
						"" :
						dataPriv.get( this, "__className__" ) || ""
					);
				}
			}
		} );
	},

	hasClass: function( selector ) {
		var className, elem,
			i = 0;

		className = " " + selector + " ";
		while ( ( elem = this[ i++ ] ) ) {
			if ( elem.nodeType === 1 &&
				( " " + stripAndCollapse( getClass( elem ) ) + " " ).indexOf( className ) > -1 ) {
					return true;
			}
		}

		return false;
	}
} );




var rreturn = /\r/g;

jQuery.fn.extend( {
	val: function( value ) {
		var hooks, ret, valueIsFunction,
			elem = this[ 0 ];

		if ( !arguments.length ) {
			if ( elem ) {
				hooks = jQuery.valHooks[ elem.type ] ||
					jQuery.valHooks[ elem.nodeName.toLowerCase() ];

				if ( hooks &&
					"get" in hooks &&
					( ret = hooks.get( elem, "value" ) ) !== undefined
				) {
					return ret;
				}

				ret = elem.value;

				// Handle most common string cases
				if ( typeof ret === "string" ) {
					return ret.replace( rreturn, "" );
				}

				// Handle cases where value is null/undef or number
				return ret == null ? "" : ret;
			}

			return;
		}

		valueIsFunction = isFunction( value );

		return this.each( function( i ) {
			var val;

			if ( this.nodeType !== 1 ) {
				return;
			}

			if ( valueIsFunction ) {
				val = value.call( this, i, jQuery( this ).val() );
			} else {
				val = value;
			}

			// Treat null/undefined as ""; convert numbers to string
			if ( val == null ) {
				val = "";

			} else if ( typeof val === "number" ) {
				val += "";

			} else if ( Array.isArray( val ) ) {
				val = jQuery.map( val, function( value ) {
					return value == null ? "" : value + "";
				} );
			}

			hooks = jQuery.valHooks[ this.type ] || jQuery.valHooks[ this.nodeName.toLowerCase() ];

			// If set returns undefined, fall back to normal setting
			if ( !hooks || !( "set" in hooks ) || hooks.set( this, val, "value" ) === undefined ) {
				this.value = val;
			}
		} );
	}
} );

jQuery.extend( {
	valHooks: {
		option: {
			get: function( elem ) {

				var val = jQuery.find.attr( elem, "value" );
				return val != null ?
					val :

					// Support: IE <=10 - 11 only
					// option.text throws exceptions (#14686, #14858)
					// Strip and collapse whitespace
					// https://html.spec.whatwg.org/#strip-and-collapse-whitespace
					stripAndCollapse( jQuery.text( elem ) );
			}
		},
		select: {
			get: function( elem ) {
				var value, option, i,
					options = elem.options,
					index = elem.selectedIndex,
					one = elem.type === "select-one",
					values = one ? null : [],
					max = one ? index + 1 : options.length;

				if ( index < 0 ) {
					i = max;

				} else {
					i = one ? index : 0;
				}

				// Loop through all the selected options
				for ( ; i < max; i++ ) {
					option = options[ i ];

					// Support: IE <=9 only
					// IE8-9 doesn't update selected after form reset (#2551)
					if ( ( option.selected || i === index ) &&

							// Don't return options that are disabled or in a disabled optgroup
							!option.disabled &&
							( !option.parentNode.disabled ||
								!nodeName( option.parentNode, "optgroup" ) ) ) {

						// Get the specific value for the option
						value = jQuery( option ).val();

						// We don't need an array for one selects
						if ( one ) {
							return value;
						}

						// Multi-Selects return an array
						values.push( value );
					}
				}

				return values;
			},

			set: function( elem, value ) {
				var optionSet, option,
					options = elem.options,
					values = jQuery.makeArray( value ),
					i = options.length;

				while ( i-- ) {
					option = options[ i ];

					/* eslint-disable no-cond-assign */

					if ( option.selected =
						jQuery.inArray( jQuery.valHooks.option.get( option ), values ) > -1
					) {
						optionSet = true;
					}

					/* eslint-enable no-cond-assign */
				}

				// Force browsers to behave consistently when non-matching value is set
				if ( !optionSet ) {
					elem.selectedIndex = -1;
				}
				return values;
			}
		}
	}
} );

// Radios and checkboxes getter/setter
jQuery.each( [ "radio", "checkbox" ], function() {
	jQuery.valHooks[ this ] = {
		set: function( elem, value ) {
			if ( Array.isArray( value ) ) {
				return ( elem.checked = jQuery.inArray( jQuery( elem ).val(), value ) > -1 );
			}
		}
	};
	if ( !support.checkOn ) {
		jQuery.valHooks[ this ].get = function( elem ) {
			return elem.getAttribute( "value" ) === null ? "on" : elem.value;
		};
	}
} );




// Return jQuery for attributes-only inclusion


support.focusin = "onfocusin" in window;


var rfocusMorph = /^(?:focusinfocus|focusoutblur)$/,
	stopPropagationCallback = function( e ) {
		e.stopPropagation();
	};

jQuery.extend( jQuery.event, {

	trigger: function( event, data, elem, onlyHandlers ) {

		var i, cur, tmp, bubbleType, ontype, handle, special, lastElement,
			eventPath = [ elem || document ],
			type = hasOwn.call( event, "type" ) ? event.type : event,
			namespaces = hasOwn.call( event, "namespace" ) ? event.namespace.split( "." ) : [];

		cur = lastElement = tmp = elem = elem || document;

		// Don't do events on text and comment nodes
		if ( elem.nodeType === 3 || elem.nodeType === 8 ) {
			return;
		}

		// focus/blur morphs to focusin/out; ensure we're not firing them right now
		if ( rfocusMorph.test( type + jQuery.event.triggered ) ) {
			return;
		}

		if ( type.indexOf( "." ) > -1 ) {

			// Namespaced trigger; create a regexp to match event type in handle()
			namespaces = type.split( "." );
			type = namespaces.shift();
			namespaces.sort();
		}
		ontype = type.indexOf( ":" ) < 0 && "on" + type;

		// Caller can pass in a jQuery.Event object, Object, or just an event type string
		event = event[ jQuery.expando ] ?
			event :
			new jQuery.Event( type, typeof event === "object" && event );

		// Trigger bitmask: & 1 for native handlers; & 2 for jQuery (always true)
		event.isTrigger = onlyHandlers ? 2 : 3;
		event.namespace = namespaces.join( "." );
		event.rnamespace = event.namespace ?
			new RegExp( "(^|\\.)" + namespaces.join( "\\.(?:.*\\.|)" ) + "(\\.|$)" ) :
			null;

		// Clean up the event in case it is being reused
		event.result = undefined;
		if ( !event.target ) {
			event.target = elem;
		}

		// Clone any incoming data and prepend the event, creating the handler arg list
		data = data == null ?
			[ event ] :
			jQuery.makeArray( data, [ event ] );

		// Allow special events to draw outside the lines
		special = jQuery.event.special[ type ] || {};
		if ( !onlyHandlers && special.trigger && special.trigger.apply( elem, data ) === false ) {
			return;
		}

		// Determine event propagation path in advance, per W3C events spec (#9951)
		// Bubble up to document, then to window; watch for a global ownerDocument var (#9724)
		if ( !onlyHandlers && !special.noBubble && !isWindow( elem ) ) {

			bubbleType = special.delegateType || type;
			if ( !rfocusMorph.test( bubbleType + type ) ) {
				cur = cur.parentNode;
			}
			for ( ; cur; cur = cur.parentNode ) {
				eventPath.push( cur );
				tmp = cur;
			}

			// Only add window if we got to document (e.g., not plain obj or detached DOM)
			if ( tmp === ( elem.ownerDocument || document ) ) {
				eventPath.push( tmp.defaultView || tmp.parentWindow || window );
			}
		}

		// Fire handlers on the event path
		i = 0;
		while ( ( cur = eventPath[ i++ ] ) && !event.isPropagationStopped() ) {
			lastElement = cur;
			event.type = i > 1 ?
				bubbleType :
				special.bindType || type;

			// jQuery handler
			handle = ( dataPriv.get( cur, "events" ) || {} )[ event.type ] &&
				dataPriv.get( cur, "handle" );
			if ( handle ) {
				handle.apply( cur, data );
			}

			// Native handler
			handle = ontype && cur[ ontype ];
			if ( handle && handle.apply && acceptData( cur ) ) {
				event.result = handle.apply( cur, data );
				if ( event.result === false ) {
					event.preventDefault();
				}
			}
		}
		event.type = type;

		// If nobody prevented the default action, do it now
		if ( !onlyHandlers && !event.isDefaultPrevented() ) {

			if ( ( !special._default ||
				special._default.apply( eventPath.pop(), data ) === false ) &&
				acceptData( elem ) ) {

				// Call a native DOM method on the target with the same name as the event.
				// Don't do default actions on window, that's where global variables be (#6170)
				if ( ontype && isFunction( elem[ type ] ) && !isWindow( elem ) ) {

					// Don't re-trigger an onFOO event when we call its FOO() method
					tmp = elem[ ontype ];

					if ( tmp ) {
						elem[ ontype ] = null;
					}

					// Prevent re-triggering of the same event, since we already bubbled it above
					jQuery.event.triggered = type;

					if ( event.isPropagationStopped() ) {
						lastElement.addEventListener( type, stopPropagationCallback );
					}

					elem[ type ]();

					if ( event.isPropagationStopped() ) {
						lastElement.removeEventListener( type, stopPropagationCallback );
					}

					jQuery.event.triggered = undefined;

					if ( tmp ) {
						elem[ ontype ] = tmp;
					}
				}
			}
		}

		return event.result;
	},

	// Piggyback on a donor event to simulate a different one
	// Used only for `focus(in | out)` events
	simulate: function( type, elem, event ) {
		var e = jQuery.extend(
			new jQuery.Event(),
			event,
			{
				type: type,
				isSimulated: true
			}
		);

		jQuery.event.trigger( e, null, elem );
	}

} );

jQuery.fn.extend( {

	trigger: function( type, data ) {
		return this.each( function() {
			jQuery.event.trigger( type, data, this );
		} );
	},
	triggerHandler: function( type, data ) {
		var elem = this[ 0 ];
		if ( elem ) {
			return jQuery.event.trigger( type, data, elem, true );
		}
	}
} );


// Support: Firefox <=44
// Firefox doesn't have focus(in | out) events
// Related ticket - https://bugzilla.mozilla.org/show_bug.cgi?id=687787
//
// Support: Chrome <=48 - 49, Safari <=9.0 - 9.1
// focus(in | out) events fire after focus & blur events,
// which is spec violation - http://www.w3.org/TR/DOM-Level-3-Events/#events-focusevent-event-order
// Related ticket - https://bugs.chromium.org/p/chromium/issues/detail?id=449857
if ( !support.focusin ) {
	jQuery.each( { focus: "focusin", blur: "focusout" }, function( orig, fix ) {

		// Attach a single capturing handler on the document while someone wants focusin/focusout
		var handler = function( event ) {
			jQuery.event.simulate( fix, event.target, jQuery.event.fix( event ) );
		};

		jQuery.event.special[ fix ] = {
			setup: function() {
				var doc = this.ownerDocument || this,
					attaches = dataPriv.access( doc, fix );

				if ( !attaches ) {
					doc.addEventListener( orig, handler, true );
				}
				dataPriv.access( doc, fix, ( attaches || 0 ) + 1 );
			},
			teardown: function() {
				var doc = this.ownerDocument || this,
					attaches = dataPriv.access( doc, fix ) - 1;

				if ( !attaches ) {
					doc.removeEventListener( orig, handler, true );
					dataPriv.remove( doc, fix );

				} else {
					dataPriv.access( doc, fix, attaches );
				}
			}
		};
	} );
}
var location = window.location;

var nonce = Date.now();

var rquery = ( /\?/ );



// Cross-browser xml parsing
jQuery.parseXML = function( data ) {
	var xml;
	if ( !data || typeof data !== "string" ) {
		return null;
	}

	// Support: IE 9 - 11 only
	// IE throws on parseFromString with invalid input.
	try {
		xml = ( new window.DOMParser() ).parseFromString( data, "text/xml" );
	} catch ( e ) {
		xml = undefined;
	}

	if ( !xml || xml.getElementsByTagName( "parsererror" ).length ) {
		jQuery.error( "Invalid XML: " + data );
	}
	return xml;
};


var
	rbracket = /\[\]$/,
	rCRLF = /\r?\n/g,
	rsubmitterTypes = /^(?:submit|button|image|reset|file)$/i,
	rsubmittable = /^(?:input|select|textarea|keygen)/i;

function buildParams( prefix, obj, traditional, add ) {
	var name;

	if ( Array.isArray( obj ) ) {

		// Serialize array item.
		jQuery.each( obj, function( i, v ) {
			if ( traditional || rbracket.test( prefix ) ) {

				// Treat each array item as a scalar.
				add( prefix, v );

			} else {

				// Item is non-scalar (array or object), encode its numeric index.
				buildParams(
					prefix + "[" + ( typeof v === "object" && v != null ? i : "" ) + "]",
					v,
					traditional,
					add
				);
			}
		} );

	} else if ( !traditional && toType( obj ) === "object" ) {

		// Serialize object item.
		for ( name in obj ) {
			buildParams( prefix + "[" + name + "]", obj[ name ], traditional, add );
		}

	} else {

		// Serialize scalar item.
		add( prefix, obj );
	}
}

// Serialize an array of form elements or a set of
// key/values into a query string
jQuery.param = function( a, traditional ) {
	var prefix,
		s = [],
		add = function( key, valueOrFunction ) {

			// If value is a function, invoke it and use its return value
			var value = isFunction( valueOrFunction ) ?
				valueOrFunction() :
				valueOrFunction;

			s[ s.length ] = encodeURIComponent( key ) + "=" +
				encodeURIComponent( value == null ? "" : value );
		};

	if ( a == null ) {
		return "";
	}

	// If an array was passed in, assume that it is an array of form elements.
	if ( Array.isArray( a ) || ( a.jquery && !jQuery.isPlainObject( a ) ) ) {

		// Serialize the form elements
		jQuery.each( a, function() {
			add( this.name, this.value );
		} );

	} else {

		// If traditional, encode the "old" way (the way 1.3.2 or older
		// did it), otherwise encode params recursively.
		for ( prefix in a ) {
			buildParams( prefix, a[ prefix ], traditional, add );
		}
	}

	// Return the resulting serialization
	return s.join( "&" );
};

jQuery.fn.extend( {
	serialize: function() {
		return jQuery.param( this.serializeArray() );
	},
	serializeArray: function() {
		return this.map( function() {

			// Can add propHook for "elements" to filter or add form elements
			var elements = jQuery.prop( this, "elements" );
			return elements ? jQuery.makeArray( elements ) : this;
		} )
		.filter( function() {
			var type = this.type;

			// Use .is( ":disabled" ) so that fieldset[disabled] works
			return this.name && !jQuery( this ).is( ":disabled" ) &&
				rsubmittable.test( this.nodeName ) && !rsubmitterTypes.test( type ) &&
				( this.checked || !rcheckableType.test( type ) );
		} )
		.map( function( i, elem ) {
			var val = jQuery( this ).val();

			if ( val == null ) {
				return null;
			}

			if ( Array.isArray( val ) ) {
				return jQuery.map( val, function( val ) {
					return { name: elem.name, value: val.replace( rCRLF, "\r\n" ) };
				} );
			}

			return { name: elem.name, value: val.replace( rCRLF, "\r\n" ) };
		} ).get();
	}
} );


var
	r20 = /%20/g,
	rhash = /#.*$/,
	rantiCache = /([?&])_=[^&]*/,
	rheaders = /^(.*?):[ \t]*([^\r\n]*)$/mg,

	// #7653, #8125, #8152: local protocol detection
	rlocalProtocol = /^(?:about|app|app-storage|.+-extension|file|res|widget):$/,
	rnoContent = /^(?:GET|HEAD)$/,
	rprotocol = /^\/\//,

	/* Prefilters
	 * 1) They are useful to introduce custom dataTypes (see ajax/jsonp.js for an example)
	 * 2) These are called:
	 *    - BEFORE asking for a transport
	 *    - AFTER param serialization (s.data is a string if s.processData is true)
	 * 3) key is the dataType
	 * 4) the catchall symbol "*" can be used
	 * 5) execution will start with transport dataType and THEN continue down to "*" if needed
	 */
	prefilters = {},

	/* Transports bindings
	 * 1) key is the dataType
	 * 2) the catchall symbol "*" can be used
	 * 3) selection will start with transport dataType and THEN go to "*" if needed
	 */
	transports = {},

	// Avoid comment-prolog char sequence (#10098); must appease lint and evade compression
	allTypes = "*/".concat( "*" ),

	// Anchor tag for parsing the document origin
	originAnchor = document.createElement( "a" );
	originAnchor.href = location.href;

// Base "constructor" for jQuery.ajaxPrefilter and jQuery.ajaxTransport
function addToPrefiltersOrTransports( structure ) {

	// dataTypeExpression is optional and defaults to "*"
	return function( dataTypeExpression, func ) {

		if ( typeof dataTypeExpression !== "string" ) {
			func = dataTypeExpression;
			dataTypeExpression = "*";
		}

		var dataType,
			i = 0,
			dataTypes = dataTypeExpression.toLowerCase().match( rnothtmlwhite ) || [];

		if ( isFunction( func ) ) {

			// For each dataType in the dataTypeExpression
			while ( ( dataType = dataTypes[ i++ ] ) ) {

				// Prepend if requested
				if ( dataType[ 0 ] === "+" ) {
					dataType = dataType.slice( 1 ) || "*";
					( structure[ dataType ] = structure[ dataType ] || [] ).unshift( func );

				// Otherwise append
				} else {
					( structure[ dataType ] = structure[ dataType ] || [] ).push( func );
				}
			}
		}
	};
}

// Base inspection function for prefilters and transports
function inspectPrefiltersOrTransports( structure, options, originalOptions, jqXHR ) {

	var inspected = {},
		seekingTransport = ( structure === transports );

	function inspect( dataType ) {
		var selected;
		inspected[ dataType ] = true;
		jQuery.each( structure[ dataType ] || [], function( _, prefilterOrFactory ) {
			var dataTypeOrTransport = prefilterOrFactory( options, originalOptions, jqXHR );
			if ( typeof dataTypeOrTransport === "string" &&
				!seekingTransport && !inspected[ dataTypeOrTransport ] ) {

				options.dataTypes.unshift( dataTypeOrTransport );
				inspect( dataTypeOrTransport );
				return false;
			} else if ( seekingTransport ) {
				return !( selected = dataTypeOrTransport );
			}
		} );
		return selected;
	}

	return inspect( options.dataTypes[ 0 ] ) || !inspected[ "*" ] && inspect( "*" );
}

// A special extend for ajax options
// that takes "flat" options (not to be deep extended)
// Fixes #9887
function ajaxExtend( target, src ) {
	var key, deep,
		flatOptions = jQuery.ajaxSettings.flatOptions || {};

	for ( key in src ) {
		if ( src[ key ] !== undefined ) {
			( flatOptions[ key ] ? target : ( deep || ( deep = {} ) ) )[ key ] = src[ key ];
		}
	}
	if ( deep ) {
		jQuery.extend( true, target, deep );
	}

	return target;
}

/* Handles responses to an ajax request:
 * - finds the right dataType (mediates between content-type and expected dataType)
 * - returns the corresponding response
 */
function ajaxHandleResponses( s, jqXHR, responses ) {

	var ct, type, finalDataType, firstDataType,
		contents = s.contents,
		dataTypes = s.dataTypes;

	// Remove auto dataType and get content-type in the process
	while ( dataTypes[ 0 ] === "*" ) {
		dataTypes.shift();
		if ( ct === undefined ) {
			ct = s.mimeType || jqXHR.getResponseHeader( "Content-Type" );
		}
	}

	// Check if we're dealing with a known content-type
	if ( ct ) {
		for ( type in contents ) {
			if ( contents[ type ] && contents[ type ].test( ct ) ) {
				dataTypes.unshift( type );
				break;
			}
		}
	}

	// Check to see if we have a response for the expected dataType
	if ( dataTypes[ 0 ] in responses ) {
		finalDataType = dataTypes[ 0 ];
	} else {

		// Try convertible dataTypes
		for ( type in responses ) {
			if ( !dataTypes[ 0 ] || s.converters[ type + " " + dataTypes[ 0 ] ] ) {
				finalDataType = type;
				break;
			}
			if ( !firstDataType ) {
				firstDataType = type;
			}
		}

		// Or just use first one
		finalDataType = finalDataType || firstDataType;
	}

	// If we found a dataType
	// We add the dataType to the list if needed
	// and return the corresponding response
	if ( finalDataType ) {
		if ( finalDataType !== dataTypes[ 0 ] ) {
			dataTypes.unshift( finalDataType );
		}
		return responses[ finalDataType ];
	}
}

/* Chain conversions given the request and the original response
 * Also sets the responseXXX fields on the jqXHR instance
 */
function ajaxConvert( s, response, jqXHR, isSuccess ) {
	var conv2, current, conv, tmp, prev,
		converters = {},

		// Work with a copy of dataTypes in case we need to modify it for conversion
		dataTypes = s.dataTypes.slice();

	// Create converters map with lowercased keys
	if ( dataTypes[ 1 ] ) {
		for ( conv in s.converters ) {
			converters[ conv.toLowerCase() ] = s.converters[ conv ];
		}
	}

	current = dataTypes.shift();

	// Convert to each sequential dataType
	while ( current ) {

		if ( s.responseFields[ current ] ) {
			jqXHR[ s.responseFields[ current ] ] = response;
		}

		// Apply the dataFilter if provided
		if ( !prev && isSuccess && s.dataFilter ) {
			response = s.dataFilter( response, s.dataType );
		}

		prev = current;
		current = dataTypes.shift();

		if ( current ) {

			// There's only work to do if current dataType is non-auto
			if ( current === "*" ) {

				current = prev;

			// Convert response if prev dataType is non-auto and differs from current
			} else if ( prev !== "*" && prev !== current ) {

				// Seek a direct converter
				conv = converters[ prev + " " + current ] || converters[ "* " + current ];

				// If none found, seek a pair
				if ( !conv ) {
					for ( conv2 in converters ) {

						// If conv2 outputs current
						tmp = conv2.split( " " );
						if ( tmp[ 1 ] === current ) {

							// If prev can be converted to accepted input
							conv = converters[ prev + " " + tmp[ 0 ] ] ||
								converters[ "* " + tmp[ 0 ] ];
							if ( conv ) {

								// Condense equivalence converters
								if ( conv === true ) {
									conv = converters[ conv2 ];

								// Otherwise, insert the intermediate dataType
								} else if ( converters[ conv2 ] !== true ) {
									current = tmp[ 0 ];
									dataTypes.unshift( tmp[ 1 ] );
								}
								break;
							}
						}
					}
				}

				// Apply converter (if not an equivalence)
				if ( conv !== true ) {

					// Unless errors are allowed to bubble, catch and return them
					if ( conv && s.throws ) {
						response = conv( response );
					} else {
						try {
							response = conv( response );
						} catch ( e ) {
							return {
								state: "parsererror",
								error: conv ? e : "No conversion from " + prev + " to " + current
							};
						}
					}
				}
			}
		}
	}

	return { state: "success", data: response };
}

jQuery.extend( {

	// Counter for holding the number of active queries
	active: 0,

	// Last-Modified header cache for next request
	lastModified: {},
	etag: {},

	ajaxSettings: {
		url: location.href,
		type: "GET",
		isLocal: rlocalProtocol.test( location.protocol ),
		global: true,
		processData: true,
		async: true,
		contentType: "application/x-www-form-urlencoded; charset=UTF-8",

		/*
		timeout: 0,
		data: null,
		dataType: null,
		username: null,
		password: null,
		cache: null,
		throws: false,
		traditional: false,
		headers: {},
		*/

		accepts: {
			"*": allTypes,
			text: "text/plain",
			html: "text/html",
			xml: "application/xml, text/xml",
			json: "application/json, text/javascript"
		},

		contents: {
			xml: /\bxml\b/,
			html: /\bhtml/,
			json: /\bjson\b/
		},

		responseFields: {
			xml: "responseXML",
			text: "responseText",
			json: "responseJSON"
		},

		// Data converters
		// Keys separate source (or catchall "*") and destination types with a single space
		converters: {

			// Convert anything to text
			"* text": String,

			// Text to html (true = no transformation)
			"text html": true,

			// Evaluate text as a json expression
			"text json": JSON.parse,

			// Parse text as xml
			"text xml": jQuery.parseXML
		},

		// For options that shouldn't be deep extended:
		// you can add your own custom options here if
		// and when you create one that shouldn't be
		// deep extended (see ajaxExtend)
		flatOptions: {
			url: true,
			context: true
		}
	},

	// Creates a full fledged settings object into target
	// with both ajaxSettings and settings fields.
	// If target is omitted, writes into ajaxSettings.
	ajaxSetup: function( target, settings ) {
		return settings ?

			// Building a settings object
			ajaxExtend( ajaxExtend( target, jQuery.ajaxSettings ), settings ) :

			// Extending ajaxSettings
			ajaxExtend( jQuery.ajaxSettings, target );
	},

	ajaxPrefilter: addToPrefiltersOrTransports( prefilters ),
	ajaxTransport: addToPrefiltersOrTransports( transports ),

	// Main method
	ajax: function( url, options ) {

		// If url is an object, simulate pre-1.5 signature
		if ( typeof url === "object" ) {
			options = url;
			url = undefined;
		}

		// Force options to be an object
		options = options || {};

		var transport,

			// URL without anti-cache param
			cacheURL,

			// Response headers
			responseHeadersString,
			responseHeaders,

			// timeout handle
			timeoutTimer,

			// Url cleanup var
			urlAnchor,

			// Request state (becomes false upon send and true upon completion)
			completed,

			// To know if global events are to be dispatched
			fireGlobals,

			// Loop variable
			i,

			// uncached part of the url
			uncached,

			// Create the final options object
			s = jQuery.ajaxSetup( {}, options ),

			// Callbacks context
			callbackContext = s.context || s,

			// Context for global events is callbackContext if it is a DOM node or jQuery collection
			globalEventContext = s.context &&
				( callbackContext.nodeType || callbackContext.jquery ) ?
					jQuery( callbackContext ) :
					jQuery.event,

			// Deferreds
			deferred = jQuery.Deferred(),
			completeDeferred = jQuery.Callbacks( "once memory" ),

			// Status-dependent callbacks
			statusCode = s.statusCode || {},

			// Headers (they are sent all at once)
			requestHeaders = {},
			requestHeadersNames = {},

			// Default abort message
			strAbort = "canceled",

			// Fake xhr
			jqXHR = {
				readyState: 0,

				// Builds headers hashtable if needed
				getResponseHeader: function( key ) {
					var match;
					if ( completed ) {
						if ( !responseHeaders ) {
							responseHeaders = {};
							while ( ( match = rheaders.exec( responseHeadersString ) ) ) {
								responseHeaders[ match[ 1 ].toLowerCase() + " " ] =
									( responseHeaders[ match[ 1 ].toLowerCase() + " " ] || [] )
										.concat( match[ 2 ] );
							}
						}
						match = responseHeaders[ key.toLowerCase() + " " ];
					}
					return match == null ? null : match.join( ", " );
				},

				// Raw string
				getAllResponseHeaders: function() {
					return completed ? responseHeadersString : null;
				},

				// Caches the header
				setRequestHeader: function( name, value ) {
					if ( completed == null ) {
						name = requestHeadersNames[ name.toLowerCase() ] =
							requestHeadersNames[ name.toLowerCase() ] || name;
						requestHeaders[ name ] = value;
					}
					return this;
				},

				// Overrides response content-type header
				overrideMimeType: function( type ) {
					if ( completed == null ) {
						s.mimeType = type;
					}
					return this;
				},

				// Status-dependent callbacks
				statusCode: function( map ) {
					var code;
					if ( map ) {
						if ( completed ) {

							// Execute the appropriate callbacks
							jqXHR.always( map[ jqXHR.status ] );
						} else {

							// Lazy-add the new callbacks in a way that preserves old ones
							for ( code in map ) {
								statusCode[ code ] = [ statusCode[ code ], map[ code ] ];
							}
						}
					}
					return this;
				},

				// Cancel the request
				abort: function( statusText ) {
					var finalText = statusText || strAbort;
					if ( transport ) {
						transport.abort( finalText );
					}
					done( 0, finalText );
					return this;
				}
			};

		// Attach deferreds
		deferred.promise( jqXHR );

		// Add protocol if not provided (prefilters might expect it)
		// Handle falsy url in the settings object (#10093: consistency with old signature)
		// We also use the url parameter if available
		s.url = ( ( url || s.url || location.href ) + "" )
			.replace( rprotocol, location.protocol + "//" );

		// Alias method option to type as per ticket #12004
		s.type = options.method || options.type || s.method || s.type;

		// Extract dataTypes list
		s.dataTypes = ( s.dataType || "*" ).toLowerCase().match( rnothtmlwhite ) || [ "" ];

		// A cross-domain request is in order when the origin doesn't match the current origin.
		if ( s.crossDomain == null ) {
			urlAnchor = document.createElement( "a" );

			// Support: IE <=8 - 11, Edge 12 - 15
			// IE throws exception on accessing the href property if url is malformed,
			// e.g. http://example.com:80x/
			try {
				urlAnchor.href = s.url;

				// Support: IE <=8 - 11 only
				// Anchor's host property isn't correctly set when s.url is relative
				urlAnchor.href = urlAnchor.href;
				s.crossDomain = originAnchor.protocol + "//" + originAnchor.host !==
					urlAnchor.protocol + "//" + urlAnchor.host;
			} catch ( e ) {

				// If there is an error parsing the URL, assume it is crossDomain,
				// it can be rejected by the transport if it is invalid
				s.crossDomain = true;
			}
		}

		// Convert data if not already a string
		if ( s.data && s.processData && typeof s.data !== "string" ) {
			s.data = jQuery.param( s.data, s.traditional );
		}

		// Apply prefilters
		inspectPrefiltersOrTransports( prefilters, s, options, jqXHR );

		// If request was aborted inside a prefilter, stop there
		if ( completed ) {
			return jqXHR;
		}

		// We can fire global events as of now if asked to
		// Don't fire events if jQuery.event is undefined in an AMD-usage scenario (#15118)
		fireGlobals = jQuery.event && s.global;

		// Watch for a new set of requests
		if ( fireGlobals && jQuery.active++ === 0 ) {
			jQuery.event.trigger( "ajaxStart" );
		}

		// Uppercase the type
		s.type = s.type.toUpperCase();

		// Determine if request has content
		s.hasContent = !rnoContent.test( s.type );

		// Save the URL in case we're toying with the If-Modified-Since
		// and/or If-None-Match header later on
		// Remove hash to simplify url manipulation
		cacheURL = s.url.replace( rhash, "" );

		// More options handling for requests with no content
		if ( !s.hasContent ) {

			// Remember the hash so we can put it back
			uncached = s.url.slice( cacheURL.length );

			// If data is available and should be processed, append data to url
			if ( s.data && ( s.processData || typeof s.data === "string" ) ) {
				cacheURL += ( rquery.test( cacheURL ) ? "&" : "?" ) + s.data;

				// #9682: remove data so that it's not used in an eventual retry
				delete s.data;
			}

			// Add or update anti-cache param if needed
			if ( s.cache === false ) {
				cacheURL = cacheURL.replace( rantiCache, "$1" );
				uncached = ( rquery.test( cacheURL ) ? "&" : "?" ) + "_=" + ( nonce++ ) + uncached;
			}

			// Put hash and anti-cache on the URL that will be requested (gh-1732)
			s.url = cacheURL + uncached;

		// Change '%20' to '+' if this is encoded form body content (gh-2658)
		} else if ( s.data && s.processData &&
			( s.contentType || "" ).indexOf( "application/x-www-form-urlencoded" ) === 0 ) {
			s.data = s.data.replace( r20, "+" );
		}

		// Set the If-Modified-Since and/or If-None-Match header, if in ifModified mode.
		if ( s.ifModified ) {
			if ( jQuery.lastModified[ cacheURL ] ) {
				jqXHR.setRequestHeader( "If-Modified-Since", jQuery.lastModified[ cacheURL ] );
			}
			if ( jQuery.etag[ cacheURL ] ) {
				jqXHR.setRequestHeader( "If-None-Match", jQuery.etag[ cacheURL ] );
			}
		}

		// Set the correct header, if data is being sent
		if ( s.data && s.hasContent && s.contentType !== false || options.contentType ) {
			jqXHR.setRequestHeader( "Content-Type", s.contentType );
		}

		// Set the Accepts header for the server, depending on the dataType
		jqXHR.setRequestHeader(
			"Accept",
			s.dataTypes[ 0 ] && s.accepts[ s.dataTypes[ 0 ] ] ?
				s.accepts[ s.dataTypes[ 0 ] ] +
					( s.dataTypes[ 0 ] !== "*" ? ", " + allTypes + "; q=0.01" : "" ) :
				s.accepts[ "*" ]
		);

		// Check for headers option
		for ( i in s.headers ) {
			jqXHR.setRequestHeader( i, s.headers[ i ] );
		}

		// Allow custom headers/mimetypes and early abort
		if ( s.beforeSend &&
			( s.beforeSend.call( callbackContext, jqXHR, s ) === false || completed ) ) {

			// Abort if not done already and return
			return jqXHR.abort();
		}

		// Aborting is no longer a cancellation
		strAbort = "abort";

		// Install callbacks on deferreds
		completeDeferred.add( s.complete );
		jqXHR.done( s.success );
		jqXHR.fail( s.error );

		// Get transport
		transport = inspectPrefiltersOrTransports( transports, s, options, jqXHR );

		// If no transport, we auto-abort
		if ( !transport ) {
			done( -1, "No Transport" );
		} else {
			jqXHR.readyState = 1;

			// Send global event
			if ( fireGlobals ) {
				globalEventContext.trigger( "ajaxSend", [ jqXHR, s ] );
			}

			// If request was aborted inside ajaxSend, stop there
			if ( completed ) {
				return jqXHR;
			}

			// Timeout
			if ( s.async && s.timeout > 0 ) {
				timeoutTimer = window.setTimeout( function() {
					jqXHR.abort( "timeout" );
				}, s.timeout );
			}

			try {
				completed = false;
				transport.send( requestHeaders, done );
			} catch ( e ) {

				// Rethrow post-completion exceptions
				if ( completed ) {
					throw e;
				}

				// Propagate others as results
				done( -1, e );
			}
		}

		// Callback for when everything is done
		function done( status, nativeStatusText, responses, headers ) {
			var isSuccess, success, error, response, modified,
				statusText = nativeStatusText;

			// Ignore repeat invocations
			if ( completed ) {
				return;
			}

			completed = true;

			// Clear timeout if it exists
			if ( timeoutTimer ) {
				window.clearTimeout( timeoutTimer );
			}

			// Dereference transport for early garbage collection
			// (no matter how long the jqXHR object will be used)
			transport = undefined;

			// Cache response headers
			responseHeadersString = headers || "";

			// Set readyState
			jqXHR.readyState = status > 0 ? 4 : 0;

			// Determine if successful
			isSuccess = status >= 200 && status < 300 || status === 304;

			// Get response data
			if ( responses ) {
				response = ajaxHandleResponses( s, jqXHR, responses );
			}

			// Convert no matter what (that way responseXXX fields are always set)
			response = ajaxConvert( s, response, jqXHR, isSuccess );

			// If successful, handle type chaining
			if ( isSuccess ) {

				// Set the If-Modified-Since and/or If-None-Match header, if in ifModified mode.
				if ( s.ifModified ) {
					modified = jqXHR.getResponseHeader( "Last-Modified" );
					if ( modified ) {
						jQuery.lastModified[ cacheURL ] = modified;
					}
					modified = jqXHR.getResponseHeader( "etag" );
					if ( modified ) {
						jQuery.etag[ cacheURL ] = modified;
					}
				}

				// if no content
				if ( status === 204 || s.type === "HEAD" ) {
					statusText = "nocontent";

				// if not modified
				} else if ( status === 304 ) {
					statusText = "notmodified";

				// If we have data, let's convert it
				} else {
					statusText = response.state;
					success = response.data;
					error = response.error;
					isSuccess = !error;
				}
			} else {

				// Extract error from statusText and normalize for non-aborts
				error = statusText;
				if ( status || !statusText ) {
					statusText = "error";
					if ( status < 0 ) {
						status = 0;
					}
				}
			}

			// Set data for the fake xhr object
			jqXHR.status = status;
			jqXHR.statusText = ( nativeStatusText || statusText ) + "";

			// Success/Error
			if ( isSuccess ) {
				deferred.resolveWith( callbackContext, [ success, statusText, jqXHR ] );
			} else {
				deferred.rejectWith( callbackContext, [ jqXHR, statusText, error ] );
			}

			// Status-dependent callbacks
			jqXHR.statusCode( statusCode );
			statusCode = undefined;

			if ( fireGlobals ) {
				globalEventContext.trigger( isSuccess ? "ajaxSuccess" : "ajaxError",
					[ jqXHR, s, isSuccess ? success : error ] );
			}

			// Complete
			completeDeferred.fireWith( callbackContext, [ jqXHR, statusText ] );

			if ( fireGlobals ) {
				globalEventContext.trigger( "ajaxComplete", [ jqXHR, s ] );

				// Handle the global AJAX counter
				if ( !( --jQuery.active ) ) {
					jQuery.event.trigger( "ajaxStop" );
				}
			}
		}

		return jqXHR;
	},

	getJSON: function( url, data, callback ) {
		return jQuery.get( url, data, callback, "json" );
	},

	getScript: function( url, callback ) {
		return jQuery.get( url, undefined, callback, "script" );
	}
} );

jQuery.each( [ "get", "post" ], function( i, method ) {
	jQuery[ method ] = function( url, data, callback, type ) {

		// Shift arguments if data argument was omitted
		if ( isFunction( data ) ) {
			type = type || callback;
			callback = data;
			data = undefined;
		}

		// The url can be an options object (which then must have .url)
		return jQuery.ajax( jQuery.extend( {
			url: url,
			type: method,
			dataType: type,
			data: data,
			success: callback
		}, jQuery.isPlainObject( url ) && url ) );
	};
} );


jQuery._evalUrl = function( url, options ) {
	return jQuery.ajax( {
		url: url,

		// Make this explicit, since user can override this through ajaxSetup (#11264)
		type: "GET",
		dataType: "script",
		cache: true,
		async: false,
		global: false,

		// Only evaluate the response if it is successful (gh-4126)
		// dataFilter is not invoked for failure responses, so using it instead
		// of the default converter is kludgy but it works.
		converters: {
			"text script": function() {}
		},
		dataFilter: function( response ) {
			jQuery.globalEval( response, options );
		}
	} );
};


jQuery.fn.extend( {
	wrapAll: function( html ) {
		var wrap;

		if ( this[ 0 ] ) {
			if ( isFunction( html ) ) {
				html = html.call( this[ 0 ] );
			}

			// The elements to wrap the target around
			wrap = jQuery( html, this[ 0 ].ownerDocument ).eq( 0 ).clone( true );

			if ( this[ 0 ].parentNode ) {
				wrap.insertBefore( this[ 0 ] );
			}

			wrap.map( function() {
				var elem = this;

				while ( elem.firstElementChild ) {
					elem = elem.firstElementChild;
				}

				return elem;
			} ).append( this );
		}

		return this;
	},

	wrapInner: function( html ) {
		if ( isFunction( html ) ) {
			return this.each( function( i ) {
				jQuery( this ).wrapInner( html.call( this, i ) );
			} );
		}

		return this.each( function() {
			var self = jQuery( this ),
				contents = self.contents();

			if ( contents.length ) {
				contents.wrapAll( html );

			} else {
				self.append( html );
			}
		} );
	},

	wrap: function( html ) {
		var htmlIsFunction = isFunction( html );

		return this.each( function( i ) {
			jQuery( this ).wrapAll( htmlIsFunction ? html.call( this, i ) : html );
		} );
	},

	unwrap: function( selector ) {
		this.parent( selector ).not( "body" ).each( function() {
			jQuery( this ).replaceWith( this.childNodes );
		} );
		return this;
	}
} );


jQuery.expr.pseudos.hidden = function( elem ) {
	return !jQuery.expr.pseudos.visible( elem );
};
jQuery.expr.pseudos.visible = function( elem ) {
	return !!( elem.offsetWidth || elem.offsetHeight || elem.getClientRects().length );
};




jQuery.ajaxSettings.xhr = function() {
	try {
		return new window.XMLHttpRequest();
	} catch ( e ) {}
};

var xhrSuccessStatus = {

		// File protocol always yields status code 0, assume 200
		0: 200,

		// Support: IE <=9 only
		// #1450: sometimes IE returns 1223 when it should be 204
		1223: 204
	},
	xhrSupported = jQuery.ajaxSettings.xhr();

support.cors = !!xhrSupported && ( "withCredentials" in xhrSupported );
support.ajax = xhrSupported = !!xhrSupported;

jQuery.ajaxTransport( function( options ) {
	var callback, errorCallback;

	// Cross domain only allowed if supported through XMLHttpRequest
	if ( support.cors || xhrSupported && !options.crossDomain ) {
		return {
			send: function( headers, complete ) {
				var i,
					xhr = options.xhr();

				xhr.open(
					options.type,
					options.url,
					options.async,
					options.username,
					options.password
				);

				// Apply custom fields if provided
				if ( options.xhrFields ) {
					for ( i in options.xhrFields ) {
						xhr[ i ] = options.xhrFields[ i ];
					}
				}

				// Override mime type if needed
				if ( options.mimeType && xhr.overrideMimeType ) {
					xhr.overrideMimeType( options.mimeType );
				}

				// X-Requested-With header
				// For cross-domain requests, seeing as conditions for a preflight are
				// akin to a jigsaw puzzle, we simply never set it to be sure.
				// (it can always be set on a per-request basis or even using ajaxSetup)
				// For same-domain requests, won't change header if already provided.
				if ( !options.crossDomain && !headers[ "X-Requested-With" ] ) {
					headers[ "X-Requested-With" ] = "XMLHttpRequest";
				}

				// Set headers
				for ( i in headers ) {
					xhr.setRequestHeader( i, headers[ i ] );
				}

				// Callback
				callback = function( type ) {
					return function() {
						if ( callback ) {
							callback = errorCallback = xhr.onload =
								xhr.onerror = xhr.onabort = xhr.ontimeout =
									xhr.onreadystatechange = null;

							if ( type === "abort" ) {
								xhr.abort();
							} else if ( type === "error" ) {

								// Support: IE <=9 only
								// On a manual native abort, IE9 throws
								// errors on any property access that is not readyState
								if ( typeof xhr.status !== "number" ) {
									complete( 0, "error" );
								} else {
									complete(

										// File: protocol always yields status 0; see #8605, #14207
										xhr.status,
										xhr.statusText
									);
								}
							} else {
								complete(
									xhrSuccessStatus[ xhr.status ] || xhr.status,
									xhr.statusText,

									// Support: IE <=9 only
									// IE9 has no XHR2 but throws on binary (trac-11426)
									// For XHR2 non-text, let the caller handle it (gh-2498)
									( xhr.responseType || "text" ) !== "text"  ||
									typeof xhr.responseText !== "string" ?
										{ binary: xhr.response } :
										{ text: xhr.responseText },
									xhr.getAllResponseHeaders()
								);
							}
						}
					};
				};

				// Listen to events
				xhr.onload = callback();
				errorCallback = xhr.onerror = xhr.ontimeout = callback( "error" );

				// Support: IE 9 only
				// Use onreadystatechange to replace onabort
				// to handle uncaught aborts
				if ( xhr.onabort !== undefined ) {
					xhr.onabort = errorCallback;
				} else {
					xhr.onreadystatechange = function() {

						// Check readyState before timeout as it changes
						if ( xhr.readyState === 4 ) {

							// Allow onerror to be called first,
							// but that will not handle a native abort
							// Also, save errorCallback to a variable
							// as xhr.onerror cannot be accessed
							window.setTimeout( function() {
								if ( callback ) {
									errorCallback();
								}
							} );
						}
					};
				}

				// Create the abort callback
				callback = callback( "abort" );

				try {

					// Do send the request (this may raise an exception)
					xhr.send( options.hasContent && options.data || null );
				} catch ( e ) {

					// #14683: Only rethrow if this hasn't been notified as an error yet
					if ( callback ) {
						throw e;
					}
				}
			},

			abort: function() {
				if ( callback ) {
					callback();
				}
			}
		};
	}
} );




// Prevent auto-execution of scripts when no explicit dataType was provided (See gh-2432)
jQuery.ajaxPrefilter( function( s ) {
	if ( s.crossDomain ) {
		s.contents.script = false;
	}
} );

// Install script dataType
jQuery.ajaxSetup( {
	accepts: {
		script: "text/javascript, application/javascript, " +
			"application/ecmascript, application/x-ecmascript"
	},
	contents: {
		script: /\b(?:java|ecma)script\b/
	},
	converters: {
		"text script": function( text ) {
			jQuery.globalEval( text );
			return text;
		}
	}
} );

// Handle cache's special case and crossDomain
jQuery.ajaxPrefilter( "script", function( s ) {
	if ( s.cache === undefined ) {
		s.cache = false;
	}
	if ( s.crossDomain ) {
		s.type = "GET";
	}
} );

// Bind script tag hack transport
jQuery.ajaxTransport( "script", function( s ) {

	// This transport only deals with cross domain or forced-by-attrs requests
	if ( s.crossDomain || s.scriptAttrs ) {
		var script, callback;
		return {
			send: function( _, complete ) {
				script = jQuery( "<script>" )
					.attr( s.scriptAttrs || {} )
					.prop( { charset: s.scriptCharset, src: s.url } )
					.on( "load error", callback = function( evt ) {
						script.remove();
						callback = null;
						if ( evt ) {
							complete( evt.type === "error" ? 404 : 200, evt.type );
						}
					} );

				// Use native DOM manipulation to avoid our domManip AJAX trickery
				document.head.appendChild( script[ 0 ] );
			},
			abort: function() {
				if ( callback ) {
					callback();
				}
			}
		};
	}
} );




var oldCallbacks = [],
	rjsonp = /(=)\?(?=&|$)|\?\?/;

// Default jsonp settings
jQuery.ajaxSetup( {
	jsonp: "callback",
	jsonpCallback: function() {
		var callback = oldCallbacks.pop() || ( jQuery.expando + "_" + ( nonce++ ) );
		this[ callback ] = true;
		return callback;
	}
} );

// Detect, normalize options and install callbacks for jsonp requests
jQuery.ajaxPrefilter( "json jsonp", function( s, originalSettings, jqXHR ) {

	var callbackName, overwritten, responseContainer,
		jsonProp = s.jsonp !== false && ( rjsonp.test( s.url ) ?
			"url" :
			typeof s.data === "string" &&
				( s.contentType || "" )
					.indexOf( "application/x-www-form-urlencoded" ) === 0 &&
				rjsonp.test( s.data ) && "data"
		);

	// Handle iff the expected data type is "jsonp" or we have a parameter to set
	if ( jsonProp || s.dataTypes[ 0 ] === "jsonp" ) {

		// Get callback name, remembering preexisting value associated with it
		callbackName = s.jsonpCallback = isFunction( s.jsonpCallback ) ?
			s.jsonpCallback() :
			s.jsonpCallback;

		// Insert callback into url or form data
		if ( jsonProp ) {
			s[ jsonProp ] = s[ jsonProp ].replace( rjsonp, "$1" + callbackName );
		} else if ( s.jsonp !== false ) {
			s.url += ( rquery.test( s.url ) ? "&" : "?" ) + s.jsonp + "=" + callbackName;
		}

		// Use data converter to retrieve json after script execution
		s.converters[ "script json" ] = function() {
			if ( !responseContainer ) {
				jQuery.error( callbackName + " was not called" );
			}
			return responseContainer[ 0 ];
		};

		// Force json dataType
		s.dataTypes[ 0 ] = "json";

		// Install callback
		overwritten = window[ callbackName ];
		window[ callbackName ] = function() {
			responseContainer = arguments;
		};

		// Clean-up function (fires after converters)
		jqXHR.always( function() {

			// If previous value didn't exist - remove it
			if ( overwritten === undefined ) {
				jQuery( window ).removeProp( callbackName );

			// Otherwise restore preexisting value
			} else {
				window[ callbackName ] = overwritten;
			}

			// Save back as free
			if ( s[ callbackName ] ) {

				// Make sure that re-using the options doesn't screw things around
				s.jsonpCallback = originalSettings.jsonpCallback;

				// Save the callback name for future use
				oldCallbacks.push( callbackName );
			}

			// Call if it was a function and we have a response
			if ( responseContainer && isFunction( overwritten ) ) {
				overwritten( responseContainer[ 0 ] );
			}

			responseContainer = overwritten = undefined;
		} );

		// Delegate to script
		return "script";
	}
} );




// Support: Safari 8 only
// In Safari 8 documents created via document.implementation.createHTMLDocument
// collapse sibling forms: the second one becomes a child of the first one.
// Because of that, this security measure has to be disabled in Safari 8.
// https://bugs.webkit.org/show_bug.cgi?id=137337
support.createHTMLDocument = ( function() {
	var body = document.implementation.createHTMLDocument( "" ).body;
	body.innerHTML = "<form></form><form></form>";
	return body.childNodes.length === 2;
} )();


// Argument "data" should be string of html
// context (optional): If specified, the fragment will be created in this context,
// defaults to document
// keepScripts (optional): If true, will include scripts passed in the html string
jQuery.parseHTML = function( data, context, keepScripts ) {
	if ( typeof data !== "string" ) {
		return [];
	}
	if ( typeof context === "boolean" ) {
		keepScripts = context;
		context = false;
	}

	var base, parsed, scripts;

	if ( !context ) {

		// Stop scripts or inline event handlers from being executed immediately
		// by using document.implementation
		if ( support.createHTMLDocument ) {
			context = document.implementation.createHTMLDocument( "" );

			// Set the base href for the created document
			// so any parsed elements with URLs
			// are based on the document's URL (gh-2965)
			base = context.createElement( "base" );
			base.href = document.location.href;
			context.head.appendChild( base );
		} else {
			context = document;
		}
	}

	parsed = rsingleTag.exec( data );
	scripts = !keepScripts && [];

	// Single tag
	if ( parsed ) {
		return [ context.createElement( parsed[ 1 ] ) ];
	}

	parsed = buildFragment( [ data ], context, scripts );

	if ( scripts && scripts.length ) {
		jQuery( scripts ).remove();
	}

	return jQuery.merge( [], parsed.childNodes );
};


/**
 * Load a url into a page
 */
jQuery.fn.load = function( url, params, callback ) {
	var selector, type, response,
		self = this,
		off = url.indexOf( " " );

	if ( off > -1 ) {
		selector = stripAndCollapse( url.slice( off ) );
		url = url.slice( 0, off );
	}

	// If it's a function
	if ( isFunction( params ) ) {

		// We assume that it's the callback
		callback = params;
		params = undefined;

	// Otherwise, build a param string
	} else if ( params && typeof params === "object" ) {
		type = "POST";
	}

	// If we have elements to modify, make the request
	if ( self.length > 0 ) {
		jQuery.ajax( {
			url: url,

			// If "type" variable is undefined, then "GET" method will be used.
			// Make value of this field explicit since
			// user can override it through ajaxSetup method
			type: type || "GET",
			dataType: "html",
			data: params
		} ).done( function( responseText ) {

			// Save response for use in complete callback
			response = arguments;

			self.html( selector ?

				// If a selector was specified, locate the right elements in a dummy div
				// Exclude scripts to avoid IE 'Permission Denied' errors
				jQuery( "<div>" ).append( jQuery.parseHTML( responseText ) ).find( selector ) :

				// Otherwise use the full result
				responseText );

		// If the request succeeds, this function gets "data", "status", "jqXHR"
		// but they are ignored because response was set above.
		// If it fails, this function gets "jqXHR", "status", "error"
		} ).always( callback && function( jqXHR, status ) {
			self.each( function() {
				callback.apply( this, response || [ jqXHR.responseText, status, jqXHR ] );
			} );
		} );
	}

	return this;
};




// Attach a bunch of functions for handling common AJAX events
jQuery.each( [
	"ajaxStart",
	"ajaxStop",
	"ajaxComplete",
	"ajaxError",
	"ajaxSuccess",
	"ajaxSend"
], function( i, type ) {
	jQuery.fn[ type ] = function( fn ) {
		return this.on( type, fn );
	};
} );




jQuery.expr.pseudos.animated = function( elem ) {
	return jQuery.grep( jQuery.timers, function( fn ) {
		return elem === fn.elem;
	} ).length;
};




jQuery.offset = {
	setOffset: function( elem, options, i ) {
		var curPosition, curLeft, curCSSTop, curTop, curOffset, curCSSLeft, calculatePosition,
			position = jQuery.css( elem, "position" ),
			curElem = jQuery( elem ),
			props = {};

		// Set position first, in-case top/left are set even on static elem
		if ( position === "static" ) {
			elem.style.position = "relative";
		}

		curOffset = curElem.offset();
		curCSSTop = jQuery.css( elem, "top" );
		curCSSLeft = jQuery.css( elem, "left" );
		calculatePosition = ( position === "absolute" || position === "fixed" ) &&
			( curCSSTop + curCSSLeft ).indexOf( "auto" ) > -1;

		// Need to be able to calculate position if either
		// top or left is auto and position is either absolute or fixed
		if ( calculatePosition ) {
			curPosition = curElem.position();
			curTop = curPosition.top;
			curLeft = curPosition.left;

		} else {
			curTop = parseFloat( curCSSTop ) || 0;
			curLeft = parseFloat( curCSSLeft ) || 0;
		}

		if ( isFunction( options ) ) {

			// Use jQuery.extend here to allow modification of coordinates argument (gh-1848)
			options = options.call( elem, i, jQuery.extend( {}, curOffset ) );
		}

		if ( options.top != null ) {
			props.top = ( options.top - curOffset.top ) + curTop;
		}
		if ( options.left != null ) {
			props.left = ( options.left - curOffset.left ) + curLeft;
		}

		if ( "using" in options ) {
			options.using.call( elem, props );

		} else {
			curElem.css( props );
		}
	}
};

jQuery.fn.extend( {

	// offset() relates an element's border box to the document origin
	offset: function( options ) {

		// Preserve chaining for setter
		if ( arguments.length ) {
			return options === undefined ?
				this :
				this.each( function( i ) {
					jQuery.offset.setOffset( this, options, i );
				} );
		}

		var rect, win,
			elem = this[ 0 ];

		if ( !elem ) {
			return;
		}

		// Return zeros for disconnected and hidden (display: none) elements (gh-2310)
		// Support: IE <=11 only
		// Running getBoundingClientRect on a
		// disconnected node in IE throws an error
		if ( !elem.getClientRects().length ) {
			return { top: 0, left: 0 };
		}

		// Get document-relative position by adding viewport scroll to viewport-relative gBCR
		rect = elem.getBoundingClientRect();
		win = elem.ownerDocument.defaultView;
		return {
			top: rect.top + win.pageYOffset,
			left: rect.left + win.pageXOffset
		};
	},

	// position() relates an element's margin box to its offset parent's padding box
	// This corresponds to the behavior of CSS absolute positioning
	position: function() {
		if ( !this[ 0 ] ) {
			return;
		}

		var offsetParent, offset, doc,
			elem = this[ 0 ],
			parentOffset = { top: 0, left: 0 };

		// position:fixed elements are offset from the viewport, which itself always has zero offset
		if ( jQuery.css( elem, "position" ) === "fixed" ) {

			// Assume position:fixed implies availability of getBoundingClientRect
			offset = elem.getBoundingClientRect();

		} else {
			offset = this.offset();

			// Account for the *real* offset parent, which can be the document or its root element
			// when a statically positioned element is identified
			doc = elem.ownerDocument;
			offsetParent = elem.offsetParent || doc.documentElement;
			while ( offsetParent &&
				( offsetParent === doc.body || offsetParent === doc.documentElement ) &&
				jQuery.css( offsetParent, "position" ) === "static" ) {

				offsetParent = offsetParent.parentNode;
			}
			if ( offsetParent && offsetParent !== elem && offsetParent.nodeType === 1 ) {

				// Incorporate borders into its offset, since they are outside its content origin
				parentOffset = jQuery( offsetParent ).offset();
				parentOffset.top += jQuery.css( offsetParent, "borderTopWidth", true );
				parentOffset.left += jQuery.css( offsetParent, "borderLeftWidth", true );
			}
		}

		// Subtract parent offsets and element margins
		return {
			top: offset.top - parentOffset.top - jQuery.css( elem, "marginTop", true ),
			left: offset.left - parentOffset.left - jQuery.css( elem, "marginLeft", true )
		};
	},

	// This method will return documentElement in the following cases:
	// 1) For the element inside the iframe without offsetParent, this method will return
	//    documentElement of the parent window
	// 2) For the hidden or detached element
	// 3) For body or html element, i.e. in case of the html node - it will return itself
	//
	// but those exceptions were never presented as a real life use-cases
	// and might be considered as more preferable results.
	//
	// This logic, however, is not guaranteed and can change at any point in the future
	offsetParent: function() {
		return this.map( function() {
			var offsetParent = this.offsetParent;

			while ( offsetParent && jQuery.css( offsetParent, "position" ) === "static" ) {
				offsetParent = offsetParent.offsetParent;
			}

			return offsetParent || documentElement;
		} );
	}
} );

// Create scrollLeft and scrollTop methods
jQuery.each( { scrollLeft: "pageXOffset", scrollTop: "pageYOffset" }, function( method, prop ) {
	var top = "pageYOffset" === prop;

	jQuery.fn[ method ] = function( val ) {
		return access( this, function( elem, method, val ) {

			// Coalesce documents and windows
			var win;
			if ( isWindow( elem ) ) {
				win = elem;
			} else if ( elem.nodeType === 9 ) {
				win = elem.defaultView;
			}

			if ( val === undefined ) {
				return win ? win[ prop ] : elem[ method ];
			}

			if ( win ) {
				win.scrollTo(
					!top ? val : win.pageXOffset,
					top ? val : win.pageYOffset
				);

			} else {
				elem[ method ] = val;
			}
		}, method, val, arguments.length );
	};
} );

// Support: Safari <=7 - 9.1, Chrome <=37 - 49
// Add the top/left cssHooks using jQuery.fn.position
// Webkit bug: https://bugs.webkit.org/show_bug.cgi?id=29084
// Blink bug: https://bugs.chromium.org/p/chromium/issues/detail?id=589347
// getComputedStyle returns percent when specified for top/left/bottom/right;
// rather than make the css module depend on the offset module, just check for it here
jQuery.each( [ "top", "left" ], function( i, prop ) {
	jQuery.cssHooks[ prop ] = addGetHookIf( support.pixelPosition,
		function( elem, computed ) {
			if ( computed ) {
				computed = curCSS( elem, prop );

				// If curCSS returns percentage, fallback to offset
				return rnumnonpx.test( computed ) ?
					jQuery( elem ).position()[ prop ] + "px" :
					computed;
			}
		}
	);
} );


// Create innerHeight, innerWidth, height, width, outerHeight and outerWidth methods
jQuery.each( { Height: "height", Width: "width" }, function( name, type ) {
	jQuery.each( { padding: "inner" + name, content: type, "": "outer" + name },
		function( defaultExtra, funcName ) {

		// Margin is only for outerHeight, outerWidth
		jQuery.fn[ funcName ] = function( margin, value ) {
			var chainable = arguments.length && ( defaultExtra || typeof margin !== "boolean" ),
				extra = defaultExtra || ( margin === true || value === true ? "margin" : "border" );

			return access( this, function( elem, type, value ) {
				var doc;

				if ( isWindow( elem ) ) {

					// $( window ).outerWidth/Height return w/h including scrollbars (gh-1729)
					return funcName.indexOf( "outer" ) === 0 ?
						elem[ "inner" + name ] :
						elem.document.documentElement[ "client" + name ];
				}

				// Get document width or height
				if ( elem.nodeType === 9 ) {
					doc = elem.documentElement;

					// Either scroll[Width/Height] or offset[Width/Height] or client[Width/Height],
					// whichever is greatest
					return Math.max(
						elem.body[ "scroll" + name ], doc[ "scroll" + name ],
						elem.body[ "offset" + name ], doc[ "offset" + name ],
						doc[ "client" + name ]
					);
				}

				return value === undefined ?

					// Get width or height on the element, requesting but not forcing parseFloat
					jQuery.css( elem, type, extra ) :

					// Set width or height on the element
					jQuery.style( elem, type, value, extra );
			}, type, chainable ? margin : undefined, chainable );
		};
	} );
} );


jQuery.each( ( "blur focus focusin focusout resize scroll click dblclick " +
	"mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave " +
	"change select submit keydown keypress keyup contextmenu" ).split( " " ),
	function( i, name ) {

	// Handle event binding
	jQuery.fn[ name ] = function( data, fn ) {
		return arguments.length > 0 ?
			this.on( name, null, data, fn ) :
			this.trigger( name );
	};
} );

jQuery.fn.extend( {
	hover: function( fnOver, fnOut ) {
		return this.mouseenter( fnOver ).mouseleave( fnOut || fnOver );
	}
} );




jQuery.fn.extend( {

	bind: function( types, data, fn ) {
		return this.on( types, null, data, fn );
	},
	unbind: function( types, fn ) {
		return this.off( types, null, fn );
	},

	delegate: function( selector, types, data, fn ) {
		return this.on( types, selector, data, fn );
	},
	undelegate: function( selector, types, fn ) {

		// ( namespace ) or ( selector, types [, fn] )
		return arguments.length === 1 ?
			this.off( selector, "**" ) :
			this.off( types, selector || "**", fn );
	}
} );

// Bind a function to a context, optionally partially applying any
// arguments.
// jQuery.proxy is deprecated to promote standards (specifically Function#bind)
// However, it is not slated for removal any time soon
jQuery.proxy = function( fn, context ) {
	var tmp, args, proxy;

	if ( typeof context === "string" ) {
		tmp = fn[ context ];
		context = fn;
		fn = tmp;
	}

	// Quick check to determine if target is callable, in the spec
	// this throws a TypeError, but we will just return undefined.
	if ( !isFunction( fn ) ) {
		return undefined;
	}

	// Simulated bind
	args = slice.call( arguments, 2 );
	proxy = function() {
		return fn.apply( context || this, args.concat( slice.call( arguments ) ) );
	};

	// Set the guid of unique handler to the same of original handler, so it can be removed
	proxy.guid = fn.guid = fn.guid || jQuery.guid++;

	return proxy;
};

jQuery.holdReady = function( hold ) {
	if ( hold ) {
		jQuery.readyWait++;
	} else {
		jQuery.ready( true );
	}
};
jQuery.isArray = Array.isArray;
jQuery.parseJSON = JSON.parse;
jQuery.nodeName = nodeName;
jQuery.isFunction = isFunction;
jQuery.isWindow = isWindow;
jQuery.camelCase = camelCase;
jQuery.type = toType;

jQuery.now = Date.now;

jQuery.isNumeric = function( obj ) {

	// As of jQuery 3.0, isNumeric is limited to
	// strings and numbers (primitives or objects)
	// that can be coerced to finite numbers (gh-2662)
	var type = jQuery.type( obj );
	return ( type === "number" || type === "string" ) &&

		// parseFloat NaNs numeric-cast false positives ("")
		// ...but misinterprets leading-number strings, particularly hex literals ("0x...")
		// subtraction forces infinities to NaN
		!isNaN( obj - parseFloat( obj ) );
};




// Register as a named AMD module, since jQuery can be concatenated with other
// files that may use define, but not via a proper concatenation script that
// understands anonymous AMD modules. A named AMD is safest and most robust
// way to register. Lowercase jquery is used because AMD module names are
// derived from file names, and jQuery is normally delivered in a lowercase
// file name. Do this after creating the global so that if an AMD module wants
// to call noConflict to hide this version of jQuery, it will work.

// Note that for maximum portability, libraries that are not jQuery should
// declare themselves as anonymous modules, and avoid setting a global if an
// AMD loader is present. jQuery is a special case. For more information, see
// https://github.com/jrburke/requirejs/wiki/Updating-existing-libraries#wiki-anon

if ( true ) {
	!(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_RESULT__ = (function() {
		return jQuery;
	}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
}




var

	// Map over jQuery in case of overwrite
	_jQuery = window.jQuery,

	// Map over the $ in case of overwrite
	_$ = window.$;

jQuery.noConflict = function( deep ) {
	if ( window.$ === jQuery ) {
		window.$ = _$;
	}

	if ( deep && window.jQuery === jQuery ) {
		window.jQuery = _jQuery;
	}

	return jQuery;
};

// Expose jQuery and $ identifiers, even in AMD
// (#7102#comment:10, https://github.com/jquery/jquery/pull/557)
// and CommonJS for browser emulators (#13566)
if ( !noGlobal ) {
	window.jQuery = window.$ = jQuery;
}




return jQuery;
} );


/***/ }),

/***/ "./node_modules/webpack/buildin/amd-options.js":
/*!****************************************!*\
  !*** (webpack)/buildin/amd-options.js ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/* WEBPACK VAR INJECTION */(function(__webpack_amd_options__) {/* globals __webpack_amd_options__ */
module.exports = __webpack_amd_options__;

/* WEBPACK VAR INJECTION */}.call(this, {}))

/***/ }),

/***/ "./node_modules/webpack/buildin/global.js":
/*!***********************************!*\
  !*** (webpack)/buildin/global.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

var g;

// This works in non-strict mode
g = (function() {
	return this;
})();

try {
	// This works if eval is allowed (see CSP)
	g = g || new Function("return this")();
} catch (e) {
	// This works if the window reference is available
	if (typeof window === "object") g = window;
}

// g can still be undefined, but nothing to do about it...
// We return undefined, instead of nothing here, so it's
// easier to handle this case. if(!global) { ...}

module.exports = g;


/***/ }),

/***/ "./node_modules/webpack/buildin/module.js":
/*!***********************************!*\
  !*** (webpack)/buildin/module.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = function(module) {
	if (!module.webpackPolyfill) {
		module.deprecate = function() {};
		module.paths = [];
		// module.parent = undefined by default
		if (!module.children) module.children = [];
		Object.defineProperty(module, "loaded", {
			enumerable: true,
			get: function() {
				return module.l;
			}
		});
		Object.defineProperty(module, "id", {
			enumerable: true,
			get: function() {
				return module.i;
			}
		});
		module.webpackPolyfill = 1;
	}
	return module;
};


/***/ }),

/***/ "./resources/ass/js/tada.js":
/*!**********************************!*\
  !*** ./resources/ass/js/tada.js ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(module, global) {var __WEBPACK_AMD_DEFINE_RESULT__;var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;var __WEBPACK_AMD_DEFINE_RESULT__;var __WEBPACK_AMD_DEFINE_RESULT__;function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

window.theme = window.theme || {};
/* ================ VENDORS ================ */

/* Simple jQuery Equal Heights @version 1.5.1. Copyright (c) 2013 Matt Banks. Dual licensed under the MIT and GPL licenses. */

!function (a) {
  a.fn.equalHeights = function () {
    var b = 0,
        c = a(this);
    return c.each(function () {
      var c = a(this).innerHeight();
      c > b && (b = c);
    }), c.css("height", b);
  }, a("[data-equal]").each(function () {
    var b = a(this),
        c = b.data("equal");
    b.find(c).equalHeights();
  });
}(jQuery);
/*!
 * enquire.js v2.1.2 - Awesome Media Queries in JavaScript
 * Copyright (c) 2014 Nick Williams - http://wicky.nillia.ms/enquire.js
 * License: MIT (http://www.opensource.org/licenses/mit-license.php)
 */

!function (a, b, c) {
  var d = window.matchMedia;
   true && module.exports ? module.exports = c(d) :  true ? !(__WEBPACK_AMD_DEFINE_RESULT__ = (function () {
    return b[a] = c(d);
  }).call(exports, __webpack_require__, exports, module),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__)) : undefined;
}("enquire", this, function (a) {
  "use strict";

  function b(a, b) {
    var c,
        d = 0,
        e = a.length;

    for (d; e > d && (c = b(a[d], d), c !== !1); d++) {
      ;
    }
  }

  function c(a) {
    return "[object Array]" === Object.prototype.toString.apply(a);
  }

  function d(a) {
    return "function" == typeof a;
  }

  function e(a) {
    this.options = a, !a.deferSetup && this.setup();
  }

  function f(b, c) {
    this.query = b, this.isUnconditional = c, this.handlers = [], this.mql = a(b);
    var d = this;
    this.listener = function (a) {
      d.mql = a, d.assess();
    }, this.mql.addListener(this.listener);
  }

  function g() {
    if (!a) throw new Error("matchMedia not present, legacy browsers require a polyfill");
    this.queries = {}, this.browserIsIncapable = !a("only all").matches;
  }

  return e.prototype = {
    setup: function setup() {
      this.options.setup && this.options.setup(), this.initialised = !0;
    },
    on: function on() {
      !this.initialised && this.setup(), this.options.match && this.options.match();
    },
    off: function off() {
      this.options.unmatch && this.options.unmatch();
    },
    destroy: function destroy() {
      this.options.destroy ? this.options.destroy() : this.off();
    },
    equals: function equals(a) {
      return this.options === a || this.options.match === a;
    }
  }, f.prototype = {
    addHandler: function addHandler(a) {
      var b = new e(a);
      this.handlers.push(b), this.matches() && b.on();
    },
    removeHandler: function removeHandler(a) {
      var c = this.handlers;
      b(c, function (b, d) {
        return b.equals(a) ? (b.destroy(), !c.splice(d, 1)) : void 0;
      });
    },
    matches: function matches() {
      return this.mql.matches || this.isUnconditional;
    },
    clear: function clear() {
      b(this.handlers, function (a) {
        a.destroy();
      }), this.mql.removeListener(this.listener), this.handlers.length = 0;
    },
    assess: function assess() {
      var a = this.matches() ? "on" : "off";
      b(this.handlers, function (b) {
        b[a]();
      });
    }
  }, g.prototype = {
    register: function register(a, e, g) {
      var h = this.queries,
          i = g && this.browserIsIncapable;
      return h[a] || (h[a] = new f(a, i)), d(e) && (e = {
        match: e
      }), c(e) || (e = [e]), b(e, function (b) {
        d(b) && (b = {
          match: b
        }), h[a].addHandler(b);
      }), this;
    },
    unregister: function unregister(a, b) {
      var c = this.queries[a];
      return c && (b ? c.removeHandler(b) : (c.clear(), delete this.queries[a])), this;
    }
  }, new g();
});
/*! Magnific Popup - v1.0.0 - 2015-03-30
* http://dimsemenov.com/plugins/magnific-popup/
* Copyright (c) 2015 Dmitry Semenov; */

!function (a) {
   true ? !(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js")], __WEBPACK_AMD_DEFINE_FACTORY__ = (a),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__)) : undefined;
}(function (a) {
  var b,
      c,
      d,
      e,
      f,
      g,
      h = "Close",
      i = "BeforeClose",
      j = "AfterClose",
      k = "BeforeAppend",
      l = "MarkupParse",
      m = "Open",
      n = "Change",
      o = "mfp",
      p = "." + o,
      q = "mfp-ready",
      r = "mfp-removing",
      s = "mfp-prevent-close",
      t = function t() {},
      u = !!window.jQuery,
      v = a(window),
      w = function w(a, c) {
    b.ev.on(o + a + p, c);
  },
      x = function x(b, c, d, e) {
    var f = document.createElement("div");
    return f.className = "mfp-" + b, d && (f.innerHTML = d), e ? c && c.appendChild(f) : (f = a(f), c && f.appendTo(c)), f;
  },
      y = function y(c, d) {
    b.ev.triggerHandler(o + c, d), b.st.callbacks && (c = c.charAt(0).toLowerCase() + c.slice(1), b.st.callbacks[c] && b.st.callbacks[c].apply(b, a.isArray(d) ? d : [d]));
  },
      z = function z(c) {
    return c === g && b.currTemplate.closeBtn || (b.currTemplate.closeBtn = a(b.st.closeMarkup.replace("%title%", b.st.tClose)), g = c), b.currTemplate.closeBtn;
  },
      A = function A() {
    a.magnificPopup.instance || (b = new t(), b.init(), a.magnificPopup.instance = b);
  },
      B = function B() {
    var a = document.createElement("p").style,
        b = ["ms", "O", "Moz", "Webkit"];
    if (void 0 !== a.transition) return !0;

    for (; b.length;) {
      if (b.pop() + "Transition" in a) return !0;
    }

    return !1;
  };

  t.prototype = {
    constructor: t,
    init: function init() {
      var c = navigator.appVersion;
      b.isIE7 = -1 !== c.indexOf("MSIE 7."), b.isIE8 = -1 !== c.indexOf("MSIE 8."), b.isLowIE = b.isIE7 || b.isIE8, b.isAndroid = /android/gi.test(c), b.isIOS = /iphone|ipad|ipod/gi.test(c), b.supportsTransition = B(), b.probablyMobile = b.isAndroid || b.isIOS || /(Opera Mini)|Kindle|webOS|BlackBerry|(Opera Mobi)|(Windows Phone)|IEMobile/i.test(navigator.userAgent), d = a(document), b.popupsCache = {};
    },
    open: function open(c) {
      var e;

      if (c.isObj === !1) {
        b.items = c.items.toArray(), b.index = 0;
        var g,
            h = c.items;

        for (e = 0; e < h.length; e++) {
          if (g = h[e], g.parsed && (g = g.el[0]), g === c.el[0]) {
            b.index = e;
            break;
          }
        }
      } else b.items = a.isArray(c.items) ? c.items : [c.items], b.index = c.index || 0;

      if (b.isOpen) return void b.updateItemHTML();
      b.types = [], f = "", b.ev = c.mainEl && c.mainEl.length ? c.mainEl.eq(0) : d, c.key ? (b.popupsCache[c.key] || (b.popupsCache[c.key] = {}), b.currTemplate = b.popupsCache[c.key]) : b.currTemplate = {}, b.st = a.extend(!0, {}, a.magnificPopup.defaults, c), b.fixedContentPos = "auto" === b.st.fixedContentPos ? !b.probablyMobile : b.st.fixedContentPos, b.st.modal && (b.st.closeOnContentClick = !1, b.st.closeOnBgClick = !1, b.st.showCloseBtn = !1, b.st.enableEscapeKey = !1), b.bgOverlay || (b.bgOverlay = x("bg").on("click" + p, function () {
        b.close();
      }), b.wrap = x("wrap").attr("tabindex", -1).on("click" + p, function (a) {
        b._checkIfClose(a.target) && b.close();
      }), b.container = x("container", b.wrap)), b.contentContainer = x("content"), b.st.preloader && (b.preloader = x("preloader", b.container, b.st.tLoading));
      var i = a.magnificPopup.modules;

      for (e = 0; e < i.length; e++) {
        var j = i[e];
        j = j.charAt(0).toUpperCase() + j.slice(1), b["init" + j].call(b);
      }

      y("BeforeOpen"), b.st.showCloseBtn && (b.st.closeBtnInside ? (w(l, function (a, b, c, d) {
        c.close_replaceWith = z(d.type);
      }), f += " mfp-close-btn-in") : b.wrap.append(z())), b.st.alignTop && (f += " mfp-align-top"), b.wrap.css(b.fixedContentPos ? {
        overflow: b.st.overflowY,
        overflowX: "hidden",
        overflowY: b.st.overflowY
      } : {
        top: v.scrollTop(),
        position: "absolute"
      }), (b.st.fixedBgPos === !1 || "auto" === b.st.fixedBgPos && !b.fixedContentPos) && b.bgOverlay.css({
        height: d.height(),
        position: "absolute"
      }), b.st.enableEscapeKey && d.on("keyup" + p, function (a) {
        27 === a.keyCode && b.close();
      }), v.on("resize" + p, function () {
        b.updateSize();
      }), b.st.closeOnContentClick || (f += " mfp-auto-cursor"), f && b.wrap.addClass(f);
      var k = b.wH = v.height(),
          n = {};

      if (b.fixedContentPos && b._hasScrollBar(k)) {
        var o = b._getScrollbarSize();

        o && (n.marginRight = o);
      }

      b.fixedContentPos && (b.isIE7 ? a("body, html").css("overflow", "hidden") : n.overflow = "hidden");
      var r = b.st.mainClass;
      return b.isIE7 && (r += " mfp-ie7"), r && b._addClassToMFP(r), b.updateItemHTML(), y("BuildControls"), a("html").css(n), b.bgOverlay.add(b.wrap).prependTo(b.st.prependTo || a(document.body)), b._lastFocusedEl = document.activeElement, setTimeout(function () {
        b.content ? (b._addClassToMFP(q), b._setFocus()) : b.bgOverlay.addClass(q), d.on("focusin" + p, b._onFocusIn);
      }, 16), b.isOpen = !0, b.updateSize(k), y(m), c;
    },
    close: function close() {
      b.isOpen && (y(i), b.isOpen = !1, b.st.removalDelay && !b.isLowIE && b.supportsTransition ? (b._addClassToMFP(r), setTimeout(function () {
        b._close();
      }, b.st.removalDelay)) : b._close());
    },
    _close: function _close() {
      y(h);
      var c = r + " " + q + " ";

      if (b.bgOverlay.detach(), b.wrap.detach(), b.container.empty(), b.st.mainClass && (c += b.st.mainClass + " "), b._removeClassFromMFP(c), b.fixedContentPos) {
        var e = {
          marginRight: ""
        };
        b.isIE7 ? a("body, html").css("overflow", "") : e.overflow = "", a("html").css(e);
      }

      d.off("keyup" + p + " focusin" + p), b.ev.off(p), b.wrap.attr("class", "mfp-wrap").removeAttr("style"), b.bgOverlay.attr("class", "mfp-bg"), b.container.attr("class", "mfp-container"), !b.st.showCloseBtn || b.st.closeBtnInside && b.currTemplate[b.currItem.type] !== !0 || b.currTemplate.closeBtn && b.currTemplate.closeBtn.detach(), b._lastFocusedEl && a(b._lastFocusedEl).focus(), b.currItem = null, b.content = null, b.currTemplate = null, b.prevHeight = 0, y(j);
    },
    updateSize: function updateSize(a) {
      if (b.isIOS) {
        var c = document.documentElement.clientWidth / window.innerWidth,
            d = window.innerHeight * c;
        b.wrap.css("height", d), b.wH = d;
      } else b.wH = a || v.height();

      b.fixedContentPos || b.wrap.css("height", b.wH), y("Resize");
    },
    updateItemHTML: function updateItemHTML() {
      var c = b.items[b.index];
      b.contentContainer.detach(), b.content && b.content.detach(), c.parsed || (c = b.parseEl(b.index));
      var d = c.type;

      if (y("BeforeChange", [b.currItem ? b.currItem.type : "", d]), b.currItem = c, !b.currTemplate[d]) {
        var f = b.st[d] ? b.st[d].markup : !1;
        y("FirstMarkupParse", f), b.currTemplate[d] = f ? a(f) : !0;
      }

      e && e !== c.type && b.container.removeClass("mfp-" + e + "-holder");
      var g = b["get" + d.charAt(0).toUpperCase() + d.slice(1)](c, b.currTemplate[d]);
      b.appendContent(g, d), c.preloaded = !0, y(n, c), e = c.type, b.container.prepend(b.contentContainer), y("AfterChange");
    },
    appendContent: function appendContent(a, c) {
      b.content = a, a ? b.st.showCloseBtn && b.st.closeBtnInside && b.currTemplate[c] === !0 ? b.content.find(".mfp-close").length || b.content.append(z()) : b.content = a : b.content = "", y(k), b.container.addClass("mfp-" + c + "-holder"), b.contentContainer.append(b.content);
    },
    parseEl: function parseEl(c) {
      var d,
          e = b.items[c];

      if (e.tagName ? e = {
        el: a(e)
      } : (d = e.type, e = {
        data: e,
        src: e.src
      }), e.el) {
        for (var f = b.types, g = 0; g < f.length; g++) {
          if (e.el.hasClass("mfp-" + f[g])) {
            d = f[g];
            break;
          }
        }

        e.src = e.el.attr("data-mfp-src"), e.src || (e.src = e.el.attr("href"));
      }

      return e.type = d || b.st.type || "inline", e.index = c, e.parsed = !0, b.items[c] = e, y("ElementParse", e), b.items[c];
    },
    addGroup: function addGroup(a, c) {
      var d = function d(_d) {
        _d.mfpEl = this, b._openClick(_d, a, c);
      };

      c || (c = {});
      var e = "click.magnificPopup";
      c.mainEl = a, c.items ? (c.isObj = !0, a.off(e).on(e, d)) : (c.isObj = !1, c.delegate ? a.off(e).on(e, c.delegate, d) : (c.items = a, a.off(e).on(e, d)));
    },
    _openClick: function _openClick(c, d, e) {
      var f = void 0 !== e.midClick ? e.midClick : a.magnificPopup.defaults.midClick;

      if (f || 2 !== c.which && !c.ctrlKey && !c.metaKey) {
        var g = void 0 !== e.disableOn ? e.disableOn : a.magnificPopup.defaults.disableOn;
        if (g) if (a.isFunction(g)) {
          if (!g.call(b)) return !0;
        } else if (v.width() < g) return !0;
        c.type && (c.preventDefault(), b.isOpen && c.stopPropagation()), e.el = a(c.mfpEl), e.delegate && (e.items = d.find(e.delegate)), b.open(e);
      }
    },
    updateStatus: function updateStatus(a, d) {
      if (b.preloader) {
        c !== a && b.container.removeClass("mfp-s-" + c), d || "loading" !== a || (d = b.st.tLoading);
        var e = {
          status: a,
          text: d
        };
        y("UpdateStatus", e), a = e.status, d = e.text, b.preloader.html(d), b.preloader.find("a").on("click", function (a) {
          a.stopImmediatePropagation();
        }), b.container.addClass("mfp-s-" + a), c = a;
      }
    },
    _checkIfClose: function _checkIfClose(c) {
      if (!a(c).hasClass(s)) {
        var d = b.st.closeOnContentClick,
            e = b.st.closeOnBgClick;
        if (d && e) return !0;
        if (!b.content || a(c).hasClass("mfp-close") || b.preloader && c === b.preloader[0]) return !0;

        if (c === b.content[0] || a.contains(b.content[0], c)) {
          if (d) return !0;
        } else if (e && a.contains(document, c)) return !0;

        return !1;
      }
    },
    _addClassToMFP: function _addClassToMFP(a) {
      b.bgOverlay.addClass(a), b.wrap.addClass(a);
    },
    _removeClassFromMFP: function _removeClassFromMFP(a) {
      this.bgOverlay.removeClass(a), b.wrap.removeClass(a);
    },
    _hasScrollBar: function _hasScrollBar(a) {
      return (b.isIE7 ? d.height() : document.body.scrollHeight) > (a || v.height());
    },
    _setFocus: function _setFocus() {
      (b.st.focus ? b.content.find(b.st.focus).eq(0) : b.wrap).focus();
    },
    _onFocusIn: function _onFocusIn(c) {
      return c.target === b.wrap[0] || a.contains(b.wrap[0], c.target) ? void 0 : (b._setFocus(), !1);
    },
    _parseMarkup: function _parseMarkup(b, c, d) {
      var e;
      d.data && (c = a.extend(d.data, c)), y(l, [b, c, d]), a.each(c, function (a, c) {
        if (void 0 === c || c === !1) return !0;

        if (e = a.split("_"), e.length > 1) {
          var d = b.find(p + "-" + e[0]);

          if (d.length > 0) {
            var f = e[1];
            "replaceWith" === f ? d[0] !== c[0] && d.replaceWith(c) : "img" === f ? d.is("img") ? d.attr("src", c) : d.replaceWith('<img src="' + c + '" class="' + d.attr("class") + '" />') : d.attr(e[1], c);
          }
        } else b.find(p + "-" + a).html(c);
      });
    },
    _getScrollbarSize: function _getScrollbarSize() {
      if (void 0 === b.scrollbarSize) {
        var a = document.createElement("div");
        a.style.cssText = "width: 99px; height: 99px; overflow: scroll; position: absolute; top: -9999px;", document.body.appendChild(a), b.scrollbarSize = a.offsetWidth - a.clientWidth, document.body.removeChild(a);
      }

      return b.scrollbarSize;
    }
  }, a.magnificPopup = {
    instance: null,
    proto: t.prototype,
    modules: [],
    open: function open(b, c) {
      return A(), b = b ? a.extend(!0, {}, b) : {}, b.isObj = !0, b.index = c || 0, this.instance.open(b);
    },
    close: function close() {
      return a.magnificPopup.instance && a.magnificPopup.instance.close();
    },
    registerModule: function registerModule(b, c) {
      c.options && (a.magnificPopup.defaults[b] = c.options), a.extend(this.proto, c.proto), this.modules.push(b);
    },
    defaults: {
      disableOn: 0,
      key: null,
      midClick: !1,
      mainClass: "",
      preloader: !0,
      focus: "",
      closeOnContentClick: !1,
      closeOnBgClick: !0,
      closeBtnInside: !0,
      showCloseBtn: !0,
      enableEscapeKey: !0,
      modal: !1,
      alignTop: !1,
      removalDelay: 0,
      prependTo: null,
      fixedContentPos: "auto",
      fixedBgPos: "auto",
      overflowY: "auto",
      closeMarkup: '<button title="%title%" type="button" class="mfp-close">&times;</button>',
      tClose: "Close (Esc)",
      tLoading: "Loading..."
    }
  }, a.fn.magnificPopup = function (c) {
    A();
    var d = a(this);
    if ("string" == typeof c) {
      if ("open" === c) {
        var e,
            f = u ? d.data("magnificPopup") : d[0].magnificPopup,
            g = parseInt(arguments[1], 10) || 0;
        f.items ? e = f.items[g] : (e = d, f.delegate && (e = e.find(f.delegate)), e = e.eq(g)), b._openClick({
          mfpEl: e
        }, d, f);
      } else b.isOpen && b[c].apply(b, Array.prototype.slice.call(arguments, 1));
    } else c = a.extend(!0, {}, c), u ? d.data("magnificPopup", c) : d[0].magnificPopup = c, b.addGroup(d, c);
    return d;
  };

  var C,
      D,
      E,
      F = "inline",
      G = function G() {
    E && (D.after(E.addClass(C)).detach(), E = null);
  };

  a.magnificPopup.registerModule(F, {
    options: {
      hiddenClass: "hide",
      markup: "",
      tNotFound: "Content not found"
    },
    proto: {
      initInline: function initInline() {
        b.types.push(F), w(h + "." + F, function () {
          G();
        });
      },
      getInline: function getInline(c, d) {
        if (G(), c.src) {
          var e = b.st.inline,
              f = a(c.src);

          if (f.length) {
            var g = f[0].parentNode;
            g && g.tagName && (D || (C = e.hiddenClass, D = x(C), C = "mfp-" + C), E = f.after(D).detach().removeClass(C)), b.updateStatus("ready");
          } else b.updateStatus("error", e.tNotFound), f = a("<div>");

          return c.inlineElement = f, f;
        }

        return b.updateStatus("ready"), b._parseMarkup(d, {}, c), d;
      }
    }
  });

  var H,
      I = "ajax",
      J = function J() {
    H && a(document.body).removeClass(H);
  },
      K = function K() {
    J(), b.req && b.req.abort();
  };

  a.magnificPopup.registerModule(I, {
    options: {
      settings: null,
      cursor: "mfp-ajax-cur",
      tError: '<a href="%url%">The content</a> could not be loaded.'
    },
    proto: {
      initAjax: function initAjax() {
        b.types.push(I), H = b.st.ajax.cursor, w(h + "." + I, K), w("BeforeChange." + I, K);
      },
      getAjax: function getAjax(c) {
        H && a(document.body).addClass(H), b.updateStatus("loading");
        var d = a.extend({
          url: c.src,
          success: function success(d, e, f) {
            var g = {
              data: d,
              xhr: f
            };
            y("ParseAjax", g), b.appendContent(a(g.data), I), c.finished = !0, J(), b._setFocus(), setTimeout(function () {
              b.wrap.addClass(q);
            }, 16), b.updateStatus("ready"), y("AjaxContentAdded");
          },
          error: function error() {
            J(), c.finished = c.loadError = !0, b.updateStatus("error", b.st.ajax.tError.replace("%url%", c.src));
          }
        }, b.st.ajax.settings);
        return b.req = a.ajax(d), "";
      }
    }
  });

  var L,
      M = function M(c) {
    if (c.data && void 0 !== c.data.title) return c.data.title;
    var d = b.st.image.titleSrc;

    if (d) {
      if (a.isFunction(d)) return d.call(b, c);
      if (c.el) return c.el.attr(d) || "";
    }

    return "";
  };

  a.magnificPopup.registerModule("image", {
    options: {
      markup: '<div class="mfp-figure"><div class="mfp-close"></div><figure><div class="mfp-img"></div><figcaption><div class="mfp-bottom-bar"><div class="mfp-title"></div><div class="mfp-counter"></div></div></figcaption></figure></div>',
      cursor: "mfp-zoom-out-cur",
      titleSrc: "title",
      verticalFit: !0,
      tError: '<a href="%url%">The image</a> could not be loaded.'
    },
    proto: {
      initImage: function initImage() {
        var c = b.st.image,
            d = ".image";
        b.types.push("image"), w(m + d, function () {
          "image" === b.currItem.type && c.cursor && a(document.body).addClass(c.cursor);
        }), w(h + d, function () {
          c.cursor && a(document.body).removeClass(c.cursor), v.off("resize" + p);
        }), w("Resize" + d, b.resizeImage), b.isLowIE && w("AfterChange", b.resizeImage);
      },
      resizeImage: function resizeImage() {
        var a = b.currItem;

        if (a && a.img && b.st.image.verticalFit) {
          var c = 0;
          b.isLowIE && (c = parseInt(a.img.css("padding-top"), 10) + parseInt(a.img.css("padding-bottom"), 10)), a.img.css("max-height", b.wH - c);
        }
      },
      _onImageHasSize: function _onImageHasSize(a) {
        a.img && (a.hasSize = !0, L && clearInterval(L), a.isCheckingImgSize = !1, y("ImageHasSize", a), a.imgHidden && (b.content && b.content.removeClass("mfp-loading"), a.imgHidden = !1));
      },
      findImageSize: function findImageSize(a) {
        var c = 0,
            d = a.img[0],
            e = function e(f) {
          L && clearInterval(L), L = setInterval(function () {
            return d.naturalWidth > 0 ? void b._onImageHasSize(a) : (c > 200 && clearInterval(L), c++, void (3 === c ? e(10) : 40 === c ? e(50) : 100 === c && e(500)));
          }, f);
        };

        e(1);
      },
      getImage: function getImage(c, d) {
        var e = 0,
            f = function f() {
          c && (c.img[0].complete ? (c.img.off(".mfploader"), c === b.currItem && (b._onImageHasSize(c), b.updateStatus("ready")), c.hasSize = !0, c.loaded = !0, y("ImageLoadComplete")) : (e++, 200 > e ? setTimeout(f, 100) : g()));
        },
            g = function g() {
          c && (c.img.off(".mfploader"), c === b.currItem && (b._onImageHasSize(c), b.updateStatus("error", h.tError.replace("%url%", c.src))), c.hasSize = !0, c.loaded = !0, c.loadError = !0);
        },
            h = b.st.image,
            i = d.find(".mfp-img");

        if (i.length) {
          var j = document.createElement("img");
          j.className = "mfp-img", c.el && c.el.find("img").length && (j.alt = c.el.find("img").attr("alt")), c.img = a(j).on("load.mfploader", f).on("error.mfploader", g), j.src = c.src, i.is("img") && (c.img = c.img.clone()), j = c.img[0], j.naturalWidth > 0 ? c.hasSize = !0 : j.width || (c.hasSize = !1);
        }

        return b._parseMarkup(d, {
          title: M(c),
          img_replaceWith: c.img
        }, c), b.resizeImage(), c.hasSize ? (L && clearInterval(L), c.loadError ? (d.addClass("mfp-loading"), b.updateStatus("error", h.tError.replace("%url%", c.src))) : (d.removeClass("mfp-loading"), b.updateStatus("ready")), d) : (b.updateStatus("loading"), c.loading = !0, c.hasSize || (c.imgHidden = !0, d.addClass("mfp-loading"), b.findImageSize(c)), d);
      }
    }
  });

  var N,
      O = function O() {
    return void 0 === N && (N = void 0 !== document.createElement("p").style.MozTransform), N;
  };

  a.magnificPopup.registerModule("zoom", {
    options: {
      enabled: !1,
      easing: "ease-in-out",
      duration: 300,
      opener: function opener(a) {
        return a.is("img") ? a : a.find("img");
      }
    },
    proto: {
      initZoom: function initZoom() {
        var a,
            c = b.st.zoom,
            d = ".zoom";

        if (c.enabled && b.supportsTransition) {
          var e,
              f,
              g = c.duration,
              j = function j(a) {
            var b = a.clone().removeAttr("style").removeAttr("class").addClass("mfp-animated-image"),
                d = "all " + c.duration / 1e3 + "s " + c.easing,
                e = {
              position: "fixed",
              zIndex: 9999,
              left: 0,
              top: 0,
              "-webkit-backface-visibility": "hidden"
            },
                f = "transition";
            return e["-webkit-" + f] = e["-moz-" + f] = e["-o-" + f] = e[f] = d, b.css(e), b;
          },
              k = function k() {
            b.content.css("visibility", "visible");
          };

          w("BuildControls" + d, function () {
            if (b._allowZoom()) {
              if (clearTimeout(e), b.content.css("visibility", "hidden"), a = b._getItemToZoom(), !a) return void k();
              f = j(a), f.css(b._getOffset()), b.wrap.append(f), e = setTimeout(function () {
                f.css(b._getOffset(!0)), e = setTimeout(function () {
                  k(), setTimeout(function () {
                    f.remove(), a = f = null, y("ZoomAnimationEnded");
                  }, 16);
                }, g);
              }, 16);
            }
          }), w(i + d, function () {
            if (b._allowZoom()) {
              if (clearTimeout(e), b.st.removalDelay = g, !a) {
                if (a = b._getItemToZoom(), !a) return;
                f = j(a);
              }

              f.css(b._getOffset(!0)), b.wrap.append(f), b.content.css("visibility", "hidden"), setTimeout(function () {
                f.css(b._getOffset());
              }, 16);
            }
          }), w(h + d, function () {
            b._allowZoom() && (k(), f && f.remove(), a = null);
          });
        }
      },
      _allowZoom: function _allowZoom() {
        return "image" === b.currItem.type;
      },
      _getItemToZoom: function _getItemToZoom() {
        return b.currItem.hasSize ? b.currItem.img : !1;
      },
      _getOffset: function _getOffset(c) {
        var d;
        d = c ? b.currItem.img : b.st.zoom.opener(b.currItem.el || b.currItem);
        var e = d.offset(),
            f = parseInt(d.css("padding-top"), 10),
            g = parseInt(d.css("padding-bottom"), 10);
        e.top -= a(window).scrollTop() - f;
        var h = {
          width: d.width(),
          height: (u ? d.innerHeight() : d[0].offsetHeight) - g - f
        };
        return O() ? h["-moz-transform"] = h.transform = "translate(" + e.left + "px," + e.top + "px)" : (h.left = e.left, h.top = e.top), h;
      }
    }
  });

  var P = "iframe",
      Q = "//about:blank",
      R = function R(a) {
    if (b.currTemplate[P]) {
      var c = b.currTemplate[P].find("iframe");
      c.length && (a || (c[0].src = Q), b.isIE8 && c.css("display", a ? "block" : "none"));
    }
  };

  a.magnificPopup.registerModule(P, {
    options: {
      markup: '<div class="mfp-iframe-scaler"><div class="mfp-close"></div><iframe class="mfp-iframe" src="//about:blank" frameborder="0" allowfullscreen></iframe></div>',
      srcAction: "iframe_src",
      patterns: {
        youtube: {
          index: "youtube.com",
          id: "v=",
          src: "//www.youtube.com/embed/%id%?autoplay=1"
        },
        vimeo: {
          index: "vimeo.com/",
          id: "/",
          src: "//player.vimeo.com/video/%id%?autoplay=1"
        },
        gmaps: {
          index: "//maps.google.",
          src: "%id%&output=embed"
        }
      }
    },
    proto: {
      initIframe: function initIframe() {
        b.types.push(P), w("BeforeChange", function (a, b, c) {
          b !== c && (b === P ? R() : c === P && R(!0));
        }), w(h + "." + P, function () {
          R();
        });
      },
      getIframe: function getIframe(c, d) {
        var e = c.src,
            f = b.st.iframe;
        a.each(f.patterns, function () {
          return e.indexOf(this.index) > -1 ? (this.id && (e = "string" == typeof this.id ? e.substr(e.lastIndexOf(this.id) + this.id.length, e.length) : this.id.call(this, e)), e = this.src.replace("%id%", e), !1) : void 0;
        });
        var g = {};
        return f.srcAction && (g[f.srcAction] = e), b._parseMarkup(d, g, c), b.updateStatus("ready"), d;
      }
    }
  });

  var S = function S(a) {
    var c = b.items.length;
    return a > c - 1 ? a - c : 0 > a ? c + a : a;
  },
      T = function T(a, b, c) {
    return a.replace(/%curr%/gi, b + 1).replace(/%total%/gi, c);
  };

  a.magnificPopup.registerModule("gallery", {
    options: {
      enabled: !1,
      arrowMarkup: '<button title="%title%" type="button" class="mfp-arrow mfp-arrow-%dir%"></button>',
      preload: [0, 2],
      navigateByImgClick: !0,
      arrows: !0,
      tPrev: "Previous (Left arrow key)",
      tNext: "Next (Right arrow key)",
      tCounter: "%curr% of %total%"
    },
    proto: {
      initGallery: function initGallery() {
        var c = b.st.gallery,
            e = ".mfp-gallery",
            g = Boolean(a.fn.mfpFastClick);
        return b.direction = !0, c && c.enabled ? (f += " mfp-gallery", w(m + e, function () {
          c.navigateByImgClick && b.wrap.on("click" + e, ".mfp-img", function () {
            return b.items.length > 1 ? (b.next(), !1) : void 0;
          }), d.on("keydown" + e, function (a) {
            37 === a.keyCode ? b.prev() : 39 === a.keyCode && b.next();
          });
        }), w("UpdateStatus" + e, function (a, c) {
          c.text && (c.text = T(c.text, b.currItem.index, b.items.length));
        }), w(l + e, function (a, d, e, f) {
          var g = b.items.length;
          e.counter = g > 1 ? T(c.tCounter, f.index, g) : "";
        }), w("BuildControls" + e, function () {
          if (b.items.length > 1 && c.arrows && !b.arrowLeft) {
            var d = c.arrowMarkup,
                e = b.arrowLeft = a(d.replace(/%title%/gi, c.tPrev).replace(/%dir%/gi, "left")).addClass(s),
                f = b.arrowRight = a(d.replace(/%title%/gi, c.tNext).replace(/%dir%/gi, "right")).addClass(s),
                h = g ? "mfpFastClick" : "click";
            e[h](function () {
              b.prev();
            }), f[h](function () {
              b.next();
            }), b.isIE7 && (x("b", e[0], !1, !0), x("a", e[0], !1, !0), x("b", f[0], !1, !0), x("a", f[0], !1, !0)), b.container.append(e.add(f));
          }
        }), w(n + e, function () {
          b._preloadTimeout && clearTimeout(b._preloadTimeout), b._preloadTimeout = setTimeout(function () {
            b.preloadNearbyImages(), b._preloadTimeout = null;
          }, 16);
        }), void w(h + e, function () {
          d.off(e), b.wrap.off("click" + e), b.arrowLeft && g && b.arrowLeft.add(b.arrowRight).destroyMfpFastClick(), b.arrowRight = b.arrowLeft = null;
        })) : !1;
      },
      next: function next() {
        b.direction = !0, b.index = S(b.index + 1), b.updateItemHTML();
      },
      prev: function prev() {
        b.direction = !1, b.index = S(b.index - 1), b.updateItemHTML();
      },
      goTo: function goTo(a) {
        b.direction = a >= b.index, b.index = a, b.updateItemHTML();
      },
      preloadNearbyImages: function preloadNearbyImages() {
        var a,
            c = b.st.gallery.preload,
            d = Math.min(c[0], b.items.length),
            e = Math.min(c[1], b.items.length);

        for (a = 1; a <= (b.direction ? e : d); a++) {
          b._preloadItem(b.index + a);
        }

        for (a = 1; a <= (b.direction ? d : e); a++) {
          b._preloadItem(b.index - a);
        }
      },
      _preloadItem: function _preloadItem(c) {
        if (c = S(c), !b.items[c].preloaded) {
          var d = b.items[c];
          d.parsed || (d = b.parseEl(c)), y("LazyLoad", d), "image" === d.type && (d.img = a('<img class="mfp-img" />').on("load.mfploader", function () {
            d.hasSize = !0;
          }).on("error.mfploader", function () {
            d.hasSize = !0, d.loadError = !0, y("LazyLoadError", d);
          }).attr("src", d.src)), d.preloaded = !0;
        }
      }
    }
  });
  var U = "retina";
  a.magnificPopup.registerModule(U, {
    options: {
      replaceSrc: function replaceSrc(a) {
        return a.src.replace(/\.\w+$/, function (a) {
          return "@2x" + a;
        });
      },
      ratio: 1
    },
    proto: {
      initRetina: function initRetina() {
        if (window.devicePixelRatio > 1) {
          var a = b.st.retina,
              c = a.ratio;
          c = isNaN(c) ? c() : c, c > 1 && (w("ImageHasSize." + U, function (a, b) {
            b.img.css({
              "max-width": b.img[0].naturalWidth / c,
              width: "100%"
            });
          }), w("ElementParse." + U, function (b, d) {
            d.src = a.replaceSrc(d, c);
          }));
        }
      }
    }
  }), function () {
    var b = 1e3,
        c = "ontouchstart" in window,
        d = function d() {
      v.off("touchmove" + f + " touchend" + f);
    },
        e = "mfpFastClick",
        f = "." + e;

    a.fn.mfpFastClick = function (e) {
      return a(this).each(function () {
        var g,
            h = a(this);

        if (c) {
          var i, j, k, l, m, n;
          h.on("touchstart" + f, function (a) {
            l = !1, n = 1, m = a.originalEvent ? a.originalEvent.touches[0] : a.touches[0], j = m.clientX, k = m.clientY, v.on("touchmove" + f, function (a) {
              m = a.originalEvent ? a.originalEvent.touches : a.touches, n = m.length, m = m[0], (Math.abs(m.clientX - j) > 10 || Math.abs(m.clientY - k) > 10) && (l = !0, d());
            }).on("touchend" + f, function (a) {
              d(), l || n > 1 || (g = !0, a.preventDefault(), clearTimeout(i), i = setTimeout(function () {
                g = !1;
              }, b), e());
            });
          });
        }

        h.on("click" + f, function () {
          g || e();
        });
      });
    }, a.fn.destroyMfpFastClick = function () {
      a(this).off("touchstart" + f + " click" + f), c && v.off("touchmove" + f + " touchend" + f);
    };
  }(), A();
});
/*
 * ScrollToFixed
 * https://github.com/bigspotteddog/ScrollToFixed
 *
 * Copyright (c) 2011 Joseph Cava-Lynch
 * MIT license
 */

(function (a) {
  a.isScrollToFixed = function (b) {
    return !!a(b).data("ScrollToFixed");
  };

  a.ScrollToFixed = function (d, i) {
    var l = this;
    l.$el = a(d);
    l.el = d;
    l.$el.data("ScrollToFixed", l);
    var c = false;
    var G = l.$el;
    var H;
    var E;
    var e;
    var y;
    var D = 0;
    var q = 0;
    var j = -1;
    var f = -1;
    var t = null;
    var z;
    var g;

    function u() {
      G.trigger("preUnfixed.ScrollToFixed");
      k();
      G.trigger("unfixed.ScrollToFixed");
      f = -1;
      D = G.offset().top;
      q = G.offset().left;

      if (l.options.offsets) {
        q += G.offset().left - G.position().left;
      }

      if (j == -1) {
        j = q;
      }

      H = G.css("position");
      c = true;

      if (l.options.bottom != -1) {
        G.trigger("preFixed.ScrollToFixed");
        w();
        G.trigger("fixed.ScrollToFixed");
      }
    }

    function n() {
      var I = l.options.limit;

      if (!I) {
        return 0;
      }

      if (typeof I === "function") {
        return I.apply(G);
      }

      return I;
    }

    function p() {
      return H === "fixed";
    }

    function x() {
      return H === "absolute";
    }

    function h() {
      return !(p() || x());
    }

    function w() {
      if (!p()) {
        t.css({
          display: G.css("display"),
          width: G.outerWidth(true),
          height: G.outerHeight(true),
          "float": G.css("float")
        });
        cssOptions = {
          "z-index": l.options.zIndex,
          position: "fixed",
          top: l.options.bottom == -1 ? s() : "",
          bottom: l.options.bottom == -1 ? "" : l.options.bottom,
          "margin-left": "0px"
        };

        if (!l.options.dontSetWidth) {
          cssOptions.width = G.width();
        }

        G.css(cssOptions);
        G.addClass(l.options.baseClassName);

        if (l.options.className) {
          G.addClass(l.options.className);
        }

        H = "fixed";
      }
    }

    function b() {
      var J = n();
      var I = q;

      if (l.options.removeOffsets) {
        I = "";
        J = J - D;
      }

      cssOptions = {
        position: "absolute",
        top: J,
        left: I,
        "margin-left": "0px",
        bottom: ""
      };

      if (!l.options.dontSetWidth) {
        cssOptions.width = G.width();
      }

      G.css(cssOptions);
      H = "absolute";
    }

    function k() {
      if (!h()) {
        f = -1;
        t.css("display", "none");
        G.css({
          "z-index": y,
          width: "",
          position: E,
          left: "",
          top: e,
          "margin-left": ""
        });
        G.removeClass("scroll-to-fixed-fixed");

        if (l.options.className) {
          G.removeClass(l.options.className);
        }

        H = null;
      }
    }

    function v(I) {
      if (I != f) {
        G.css("left", q - I);
        f = I;
      }
    }

    function s() {
      var I = l.options.marginTop;

      if (!I) {
        return 0;
      }

      if (typeof I === "function") {
        return I.apply(G);
      }

      return I;
    }

    function A() {
      if (!a.isScrollToFixed(G)) {
        return;
      }

      var K = c;

      if (!c) {
        u();
      } else {
        if (h()) {
          D = G.offset().top;
          q = G.offset().left;
        }
      }

      var I = a(window).scrollLeft();
      var L = a(window).scrollTop();
      var J = n();

      if (l.options.minWidth && a(window).width() < l.options.minWidth) {
        if (!h() || !K) {
          o();
          G.trigger("preUnfixed.ScrollToFixed");
          k();
          G.trigger("unfixed.ScrollToFixed");
        }
      } else {
        if (l.options.maxWidth && a(window).width() > l.options.maxWidth) {
          if (!h() || !K) {
            o();
            G.trigger("preUnfixed.ScrollToFixed");
            k();
            G.trigger("unfixed.ScrollToFixed");
          }
        } else {
          if (l.options.bottom == -1) {
            if (J > 0 && L >= J - s()) {
              if (!x() || !K) {
                o();
                G.trigger("preAbsolute.ScrollToFixed");
                b();
                G.trigger("unfixed.ScrollToFixed");
              }
            } else {
              if (L >= D - s()) {
                if (!p() || !K) {
                  o();
                  G.trigger("preFixed.ScrollToFixed");
                  w();
                  f = -1;
                  G.trigger("fixed.ScrollToFixed");
                }

                v(I);
              } else {
                if (!h() || !K) {
                  o();
                  G.trigger("preUnfixed.ScrollToFixed");
                  k();
                  G.trigger("unfixed.ScrollToFixed");
                }
              }
            }
          } else {
            if (J > 0) {
              if (L + a(window).height() - G.outerHeight(true) >= J - (s() || -m())) {
                if (p()) {
                  o();
                  G.trigger("preUnfixed.ScrollToFixed");

                  if (E === "absolute") {
                    b();
                  } else {
                    k();
                  }

                  G.trigger("unfixed.ScrollToFixed");
                }
              } else {
                if (!p()) {
                  o();
                  G.trigger("preFixed.ScrollToFixed");
                  w();
                }

                v(I);
                G.trigger("fixed.ScrollToFixed");
              }
            } else {
              v(I);
            }
          }
        }
      }
    }

    function m() {
      if (!l.options.bottom) {
        return 0;
      }

      return l.options.bottom;
    }

    function o() {
      var I = G.css("position");

      if (I == "absolute") {
        G.trigger("postAbsolute.ScrollToFixed");
      } else {
        if (I == "fixed") {
          G.trigger("postFixed.ScrollToFixed");
        } else {
          G.trigger("postUnfixed.ScrollToFixed");
        }
      }
    }

    var C = function C(I) {
      if (G.is(":visible")) {
        c = false;
        A();
      }
    };

    var F = function F(I) {
      !!window.requestAnimationFrame ? requestAnimationFrame(A) : A();
    };

    var B = function B() {
      var J = document.body;

      if (document.createElement && J && J.appendChild && J.removeChild) {
        var L = document.createElement("div");

        if (!L.getBoundingClientRect) {
          return null;
        }

        L.innerHTML = "x";
        L.style.cssText = "position:fixed;top:100px;";
        J.appendChild(L);
        var M = J.style.height,
            N = J.scrollTop;
        J.style.height = "3000px";
        J.scrollTop = 500;
        var I = L.getBoundingClientRect().top;
        J.style.height = M;
        var K = I === 100;
        J.removeChild(L);
        J.scrollTop = N;
        return K;
      }

      return null;
    };

    var r = function r(I) {
      I = I || window.event;

      if (I.preventDefault) {
        I.preventDefault();
      }

      I.returnValue = false;
    };

    l.init = function () {
      l.options = a.extend({}, a.ScrollToFixed.defaultOptions, i);
      y = G.css("z-index");
      l.$el.css("z-index", l.options.zIndex);
      t = a("<div />");
      H = G.css("position");
      E = G.css("position");
      e = G.css("top");

      if (h()) {
        l.$el.after(t);
      }

      a(window).bind("resize.ScrollToFixed", C);
      a(window).bind("scroll.ScrollToFixed", F);

      if ("ontouchmove" in window) {
        a(window).bind("touchmove.ScrollToFixed", A);
      }

      if (l.options.preFixed) {
        G.bind("preFixed.ScrollToFixed", l.options.preFixed);
      }

      if (l.options.postFixed) {
        G.bind("postFixed.ScrollToFixed", l.options.postFixed);
      }

      if (l.options.preUnfixed) {
        G.bind("preUnfixed.ScrollToFixed", l.options.preUnfixed);
      }

      if (l.options.postUnfixed) {
        G.bind("postUnfixed.ScrollToFixed", l.options.postUnfixed);
      }

      if (l.options.preAbsolute) {
        G.bind("preAbsolute.ScrollToFixed", l.options.preAbsolute);
      }

      if (l.options.postAbsolute) {
        G.bind("postAbsolute.ScrollToFixed", l.options.postAbsolute);
      }

      if (l.options.fixed) {
        G.bind("fixed.ScrollToFixed", l.options.fixed);
      }

      if (l.options.unfixed) {
        G.bind("unfixed.ScrollToFixed", l.options.unfixed);
      }

      if (l.options.spacerClass) {
        t.addClass(l.options.spacerClass);
      }

      G.bind("resize.ScrollToFixed", function () {
        t.height(G.height());
      });
      G.bind("scroll.ScrollToFixed", function () {
        G.trigger("preUnfixed.ScrollToFixed");
        k();
        G.trigger("unfixed.ScrollToFixed");
        A();
      });
      G.bind("detach.ScrollToFixed", function (I) {
        r(I);
        G.trigger("preUnfixed.ScrollToFixed");
        k();
        G.trigger("unfixed.ScrollToFixed");
        a(window).unbind("resize.ScrollToFixed", C);
        a(window).unbind("scroll.ScrollToFixed", F);
        G.unbind(".ScrollToFixed");
        t.remove();
        l.$el.removeData("ScrollToFixed");
      });
      C();
    };

    l.init();
  };

  a.ScrollToFixed.defaultOptions = {
    marginTop: 0,
    limit: 0,
    bottom: -1,
    zIndex: 1000,
    baseClassName: "scroll-to-fixed-fixed"
  };

  a.fn.scrollToFixed = function (b) {
    return this.each(function () {
      new a.ScrollToFixed(this, b);
    });
  };
})(jQuery);
/*

 _______     ___       ____        ___
|__   __|   / _ \     |  _ \      / _ \
   | |     / /_\ \    | | \ |    / /_\ \
   | |    / _____ \   | | | |   / _____ \
   | |   / /     \ \  | |_/ /  / /     \ \
   |_|  /_/       \_\ |____/  /_/       \_\


 Version: 1.3.15
  Author: Ken Wheeler
 Website: http://kenwheeler.github.io
    Docs: http://kenwheeler.github.io/slick
    Repo: http://github.com/kenwheeler/slick
  Issues: http://github.com/kenwheeler/slick/issues

 */


!function (a) {
  "use strict";

   true ? !(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js")], __WEBPACK_AMD_DEFINE_FACTORY__ = (a),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__)) : undefined;
}(function (a) {
  "use strict";

  var b = window.Slick || {};
  b = function () {
    function c(c, d) {
      var f,
          g,
          e = this;

      if (e.defaults = {
        accessibility: !0,
        adaptiveHeight: !1,
        appendArrows: a(c),
        appendDots: a(c),
        arrows: !0,
        asNavFor: null,
        prevArrow: '<button type="button" data-role="none" class="slick-prev">Previous</button>',
        nextArrow: '<button type="button" data-role="none" class="slick-next">Next</button>',
        autoplay: !1,
        autoplaySpeed: 3e3,
        centerMode: !1,
        centerPadding: "50px",
        cssEase: "ease",
        customPaging: function customPaging(a, b) {
          return '<button type="button" data-role="none">' + (b + 1) + "</button>";
        },
        dots: !1,
        dotsClass: "slick-dots",
        draggable: !0,
        easing: "linear",
        fade: !1,
        focusOnSelect: !1,
        infinite: !0,
        initialSlide: 0,
        lazyLoad: "ondemand",
        onBeforeChange: null,
        onAfterChange: null,
        onInit: null,
        onReInit: null,
        onSetPosition: null,
        pauseOnHover: !0,
        pauseOnDotsHover: !1,
        respondTo: "window",
        responsive: null,
        rtl: !1,
        slide: "div",
        slidesToShow: 1,
        slidesToScroll: 1,
        speed: 500,
        swipe: !0,
        swipeToSlide: !1,
        touchMove: !0,
        touchThreshold: 5,
        useCSS: !0,
        variableWidth: !1,
        vertical: !1,
        waitForAnimate: !0
      }, e.initials = {
        animating: !1,
        dragging: !1,
        autoPlayTimer: null,
        currentDirection: 0,
        currentLeft: null,
        currentSlide: 0,
        direction: 1,
        $dots: null,
        listWidth: null,
        listHeight: null,
        loadIndex: 0,
        $nextArrow: null,
        $prevArrow: null,
        slideCount: null,
        slideWidth: null,
        $slideTrack: null,
        $slides: null,
        sliding: !1,
        slideOffset: 0,
        swipeLeft: null,
        $list: null,
        touchObject: {},
        transformsEnabled: !1
      }, a.extend(e, e.initials), e.activeBreakpoint = null, e.animType = null, e.animProp = null, e.breakpoints = [], e.breakpointSettings = [], e.cssTransitions = !1, e.paused = !1, e.positionProp = null, e.respondTo = null, e.shouldClick = !0, e.$slider = a(c), e.$slidesCache = null, e.transformType = null, e.transitionType = null, e.windowWidth = 0, e.windowTimer = null, e.options = a.extend({}, e.defaults, d), e.currentSlide = e.options.initialSlide, e.originalSettings = e.options, f = e.options.responsive || null, f && f.length > -1) {
        e.respondTo = e.options.respondTo || "window";

        for (g in f) {
          f.hasOwnProperty(g) && (e.breakpoints.push(f[g].breakpoint), e.breakpointSettings[f[g].breakpoint] = f[g].settings);
        }

        e.breakpoints.sort(function (a, b) {
          return b - a;
        });
      }

      e.autoPlay = a.proxy(e.autoPlay, e), e.autoPlayClear = a.proxy(e.autoPlayClear, e), e.changeSlide = a.proxy(e.changeSlide, e), e.clickHandler = a.proxy(e.clickHandler, e), e.selectHandler = a.proxy(e.selectHandler, e), e.setPosition = a.proxy(e.setPosition, e), e.swipeHandler = a.proxy(e.swipeHandler, e), e.dragHandler = a.proxy(e.dragHandler, e), e.keyHandler = a.proxy(e.keyHandler, e), e.autoPlayIterator = a.proxy(e.autoPlayIterator, e), e.instanceUid = b++, e.htmlExpr = /^(?:\s*(<[\w\W]+>)[^>]*)$/, e.init(), e.checkResponsive();
    }

    var b = 0;
    return c;
  }(), b.prototype.addSlide = function (b, c, d) {
    var e = this;
    if ("boolean" == typeof c) d = c, c = null;else if (0 > c || c >= e.slideCount) return !1;
    e.unload(), "number" == typeof c ? 0 === c && 0 === e.$slides.length ? a(b).appendTo(e.$slideTrack) : d ? a(b).insertBefore(e.$slides.eq(c)) : a(b).insertAfter(e.$slides.eq(c)) : d === !0 ? a(b).prependTo(e.$slideTrack) : a(b).appendTo(e.$slideTrack), e.$slides = e.$slideTrack.children(this.options.slide), e.$slideTrack.children(this.options.slide).detach(), e.$slideTrack.append(e.$slides), e.$slides.each(function (b, c) {
      a(c).attr("index", b);
    }), e.$slidesCache = e.$slides, e.reinit();
  }, b.prototype.animateSlide = function (b, c) {
    var d = {},
        e = this;

    if (1 === e.options.slidesToShow && e.options.adaptiveHeight === !0 && e.options.vertical === !1) {
      var f = e.$slides.eq(e.currentSlide).outerHeight(!0);
      e.$list.animate({
        height: f
      }, e.options.speed);
    }

    e.options.rtl === !0 && e.options.vertical === !1 && (b = -b), e.transformsEnabled === !1 ? e.options.vertical === !1 ? e.$slideTrack.animate({
      left: b
    }, e.options.speed, e.options.easing, c) : e.$slideTrack.animate({
      top: b
    }, e.options.speed, e.options.easing, c) : e.cssTransitions === !1 ? a({
      animStart: e.currentLeft
    }).animate({
      animStart: b
    }, {
      duration: e.options.speed,
      easing: e.options.easing,
      step: function step(a) {
        e.options.vertical === !1 ? (d[e.animType] = "translate(" + a + "px, 0px)", e.$slideTrack.css(d)) : (d[e.animType] = "translate(0px," + a + "px)", e.$slideTrack.css(d));
      },
      complete: function complete() {
        c && c.call();
      }
    }) : (e.applyTransition(), d[e.animType] = e.options.vertical === !1 ? "translate3d(" + b + "px, 0px, 0px)" : "translate3d(0px," + b + "px, 0px)", e.$slideTrack.css(d), c && setTimeout(function () {
      e.disableTransition(), c.call();
    }, e.options.speed));
  }, b.prototype.asNavFor = function (b) {
    var c = this,
        d = null != c.options.asNavFor ? a(c.options.asNavFor).getSlick() : null;
    null != d && d.slideHandler(b, !0);
  }, b.prototype.applyTransition = function (a) {
    var b = this,
        c = {};
    c[b.transitionType] = b.options.fade === !1 ? b.transformType + " " + b.options.speed + "ms " + b.options.cssEase : "opacity " + b.options.speed + "ms " + b.options.cssEase, b.options.fade === !1 ? b.$slideTrack.css(c) : b.$slides.eq(a).css(c);
  }, b.prototype.autoPlay = function () {
    var a = this;
    a.autoPlayTimer && clearInterval(a.autoPlayTimer), a.slideCount > a.options.slidesToShow && a.paused !== !0 && (a.autoPlayTimer = setInterval(a.autoPlayIterator, a.options.autoplaySpeed));
  }, b.prototype.autoPlayClear = function () {
    var a = this;
    a.autoPlayTimer && clearInterval(a.autoPlayTimer);
  }, b.prototype.autoPlayIterator = function () {
    var a = this;
    a.options.infinite === !1 ? 1 === a.direction ? (a.currentSlide + 1 === a.slideCount - 1 && (a.direction = 0), a.slideHandler(a.currentSlide + a.options.slidesToScroll)) : (0 === a.currentSlide - 1 && (a.direction = 1), a.slideHandler(a.currentSlide - a.options.slidesToScroll)) : a.slideHandler(a.currentSlide + a.options.slidesToScroll);
  }, b.prototype.buildArrows = function () {
    var b = this;
    b.options.arrows === !0 && b.slideCount > b.options.slidesToShow && (b.$prevArrow = a(b.options.prevArrow), b.$nextArrow = a(b.options.nextArrow), b.htmlExpr.test(b.options.prevArrow) && b.$prevArrow.appendTo(b.options.appendArrows), b.htmlExpr.test(b.options.nextArrow) && b.$nextArrow.appendTo(b.options.appendArrows), b.options.infinite !== !0 && b.$prevArrow.addClass("slick-disabled"));
  }, b.prototype.buildDots = function () {
    var c,
        d,
        b = this;

    if (b.options.dots === !0 && b.slideCount > b.options.slidesToShow) {
      for (d = '<ul class="' + b.options.dotsClass + '">', c = 0; c <= b.getDotCount(); c += 1) {
        d += "<li>" + b.options.customPaging.call(this, b, c) + "</li>";
      }

      d += "</ul>", b.$dots = a(d).appendTo(b.options.appendDots), b.$dots.find("li").first().addClass("slick-active");
    }
  }, b.prototype.buildOut = function () {
    var b = this;
    b.$slides = b.$slider.children(b.options.slide + ":not(.slick-cloned)").addClass("slick-slide"), b.slideCount = b.$slides.length, b.$slides.each(function (b, c) {
      a(c).attr("index", b);
    }), b.$slidesCache = b.$slides, b.$slider.addClass("slick-slider"), b.$slideTrack = 0 === b.slideCount ? a('<div class="slick-track"/>').appendTo(b.$slider) : b.$slides.wrapAll('<div class="slick-track"/>').parent(), b.$list = b.$slideTrack.wrap('<div class="slick-list"/>').parent(), b.$slideTrack.css("opacity", 0), b.options.centerMode === !0 && (b.options.slidesToScroll = 1), a("img[data-lazy]", b.$slider).not("[src]").addClass("slick-loading"), b.setupInfinite(), b.buildArrows(), b.buildDots(), b.updateDots(), b.options.accessibility === !0 && b.$list.prop("tabIndex", 0), b.setSlideClasses("number" == typeof this.currentSlide ? this.currentSlide : 0), b.options.draggable === !0 && b.$list.addClass("draggable");
  }, b.prototype.checkResponsive = function () {
    var c,
        d,
        e,
        b = this,
        f = b.$slider.width(),
        g = window.innerWidth || a(window).width();

    if ("window" === b.respondTo ? e = g : "slider" === b.respondTo ? e = f : "min" === b.respondTo && (e = Math.min(g, f)), b.originalSettings.responsive && b.originalSettings.responsive.length > -1 && null !== b.originalSettings.responsive) {
      d = null;

      for (c in b.breakpoints) {
        b.breakpoints.hasOwnProperty(c) && e < b.breakpoints[c] && (d = b.breakpoints[c]);
      }

      null !== d ? null !== b.activeBreakpoint ? d !== b.activeBreakpoint && (b.activeBreakpoint = d, b.options = a.extend({}, b.originalSettings, b.breakpointSettings[d]), b.refresh()) : (b.activeBreakpoint = d, b.options = a.extend({}, b.originalSettings, b.breakpointSettings[d]), b.refresh()) : null !== b.activeBreakpoint && (b.activeBreakpoint = null, b.options = b.originalSettings, b.refresh());
    }
  }, b.prototype.changeSlide = function (b, c) {
    var f,
        g,
        h,
        i,
        j,
        d = this,
        e = a(b.target);

    switch (e.is("a") && b.preventDefault(), h = 0 !== d.slideCount % d.options.slidesToScroll, f = h ? 0 : (d.slideCount - d.currentSlide) % d.options.slidesToScroll, b.data.message) {
      case "previous":
        g = 0 === f ? d.options.slidesToScroll : d.options.slidesToShow - f, d.slideCount > d.options.slidesToShow && d.slideHandler(d.currentSlide - g, !1, c);
        break;

      case "next":
        g = 0 === f ? d.options.slidesToScroll : f, d.slideCount > d.options.slidesToShow && d.slideHandler(d.currentSlide + g, !1, c);
        break;

      case "index":
        var k = 0 === b.data.index ? 0 : b.data.index || a(b.target).parent().index() * d.options.slidesToScroll;
        if (i = d.getNavigableIndexes(), j = 0, i[k] && i[k] === k) if (k > i[i.length - 1]) k = i[i.length - 1];else for (var l in i) {
          if (k < i[l]) {
            k = j;
            break;
          }

          j = i[l];
        }
        d.slideHandler(k, !1, c);

      default:
        return;
    }
  }, b.prototype.clickHandler = function (a) {
    var b = this;
    b.shouldClick === !1 && (a.stopImmediatePropagation(), a.stopPropagation(), a.preventDefault());
  }, b.prototype.destroy = function () {
    var b = this;
    b.autoPlayClear(), b.touchObject = {}, a(".slick-cloned", b.$slider).remove(), b.$dots && b.$dots.remove(), b.$prevArrow && "object" != _typeof(b.options.prevArrow) && b.$prevArrow.remove(), b.$nextArrow && "object" != _typeof(b.options.nextArrow) && b.$nextArrow.remove(), b.$slides.parent().hasClass("slick-track") && b.$slides.unwrap().unwrap(), b.$slides.removeClass("slick-slide slick-active slick-center slick-visible").removeAttr("index").css({
      position: "",
      left: "",
      top: "",
      zIndex: "",
      opacity: "",
      width: ""
    }), b.$slider.removeClass("slick-slider"), b.$slider.removeClass("slick-initialized"), b.$list.off(".slick"), a(window).off(".slick-" + b.instanceUid), a(document).off(".slick-" + b.instanceUid);
  }, b.prototype.disableTransition = function (a) {
    var b = this,
        c = {};
    c[b.transitionType] = "", b.options.fade === !1 ? b.$slideTrack.css(c) : b.$slides.eq(a).css(c);
  }, b.prototype.fadeSlide = function (a, b, c) {
    var d = this;
    d.cssTransitions === !1 ? (d.$slides.eq(b).css({
      zIndex: 1e3
    }), d.$slides.eq(b).animate({
      opacity: 1
    }, d.options.speed, d.options.easing, c), d.$slides.eq(a).animate({
      opacity: 0
    }, d.options.speed, d.options.easing)) : (d.applyTransition(b), d.applyTransition(a), d.$slides.eq(b).css({
      opacity: 1,
      zIndex: 1e3
    }), d.$slides.eq(a).css({
      opacity: 0
    }), c && setTimeout(function () {
      d.disableTransition(b), d.disableTransition(a), c.call();
    }, d.options.speed));
  }, b.prototype.filterSlides = function (a) {
    var b = this;
    null !== a && (b.unload(), b.$slideTrack.children(this.options.slide).detach(), b.$slidesCache.filter(a).appendTo(b.$slideTrack), b.reinit());
  }, b.prototype.getCurrent = function () {
    var a = this;
    return a.currentSlide;
  }, b.prototype.getDotCount = function () {
    var a = this,
        b = 0,
        c = 0,
        d = 0;
    if (a.options.infinite === !0) d = Math.ceil(a.slideCount / a.options.slidesToScroll);else for (; b < a.slideCount;) {
      ++d, b = c + a.options.slidesToShow, c += a.options.slidesToScroll <= a.options.slidesToShow ? a.options.slidesToScroll : a.options.slidesToShow;
    }
    return d - 1;
  }, b.prototype.getLeft = function (a) {
    var c,
        d,
        g,
        b = this,
        e = 0;
    return b.slideOffset = 0, d = b.$slides.first().outerHeight(), b.options.infinite === !0 ? (b.slideCount > b.options.slidesToShow && (b.slideOffset = -1 * b.slideWidth * b.options.slidesToShow, e = -1 * d * b.options.slidesToShow), 0 !== b.slideCount % b.options.slidesToScroll && a + b.options.slidesToScroll > b.slideCount && b.slideCount > b.options.slidesToShow && (a > b.slideCount ? (b.slideOffset = -1 * (b.options.slidesToShow - (a - b.slideCount)) * b.slideWidth, e = -1 * (b.options.slidesToShow - (a - b.slideCount)) * d) : (b.slideOffset = -1 * b.slideCount % b.options.slidesToScroll * b.slideWidth, e = -1 * b.slideCount % b.options.slidesToScroll * d))) : a + b.options.slidesToShow > b.slideCount && (b.slideOffset = (a + b.options.slidesToShow - b.slideCount) * b.slideWidth, e = (a + b.options.slidesToShow - b.slideCount) * d), b.slideCount <= b.options.slidesToShow && (b.slideOffset = 0, e = 0), b.options.centerMode === !0 && b.options.infinite === !0 ? b.slideOffset += b.slideWidth * Math.floor(b.options.slidesToShow / 2) - b.slideWidth : b.options.centerMode === !0 && (b.slideOffset = 0, b.slideOffset += b.slideWidth * Math.floor(b.options.slidesToShow / 2)), c = b.options.vertical === !1 ? -1 * a * b.slideWidth + b.slideOffset : -1 * a * d + e, b.options.variableWidth === !0 && (g = b.slideCount <= b.options.slidesToShow || b.options.infinite === !1 ? b.$slideTrack.children(".slick-slide").eq(a) : b.$slideTrack.children(".slick-slide").eq(a + b.options.slidesToShow), c = g[0] ? -1 * g[0].offsetLeft : 0, b.options.centerMode === !0 && (g = b.options.infinite === !1 ? b.$slideTrack.children(".slick-slide").eq(a) : b.$slideTrack.children(".slick-slide").eq(a + b.options.slidesToShow + 1), c = g[0] ? -1 * g[0].offsetLeft : 0, c += (b.$list.width() - g.outerWidth()) / 2)), c;
  }, b.prototype.getNavigableIndexes = function () {
    for (var a = this, b = 0, c = 0, d = []; b < a.slideCount;) {
      d.push(b), b = c + a.options.slidesToScroll, c += a.options.slidesToScroll <= a.options.slidesToShow ? a.options.slidesToScroll : a.options.slidesToShow;
    }

    return d;
  }, b.prototype.getSlideCount = function () {
    var c,
        b = this;

    if (b.options.swipeToSlide === !0) {
      var d = null;
      return b.$slideTrack.find(".slick-slide").each(function (c, e) {
        return e.offsetLeft + a(e).outerWidth() / 2 > -1 * b.swipeLeft ? (d = e, !1) : void 0;
      }), c = Math.abs(a(d).attr("index") - b.currentSlide);
    }

    return b.options.slidesToScroll;
  }, b.prototype.init = function () {
    var b = this;
    a(b.$slider).hasClass("slick-initialized") || (a(b.$slider).addClass("slick-initialized"), b.buildOut(), b.setProps(), b.startLoad(), b.loadSlider(), b.initializeEvents(), b.updateArrows(), b.updateDots()), null !== b.options.onInit && b.options.onInit.call(this, b);
  }, b.prototype.initArrowEvents = function () {
    var a = this;
    a.options.arrows === !0 && a.slideCount > a.options.slidesToShow && (a.$prevArrow.on("click.slick", {
      message: "previous"
    }, a.changeSlide), a.$nextArrow.on("click.slick", {
      message: "next"
    }, a.changeSlide));
  }, b.prototype.initDotEvents = function () {
    var b = this;
    b.options.dots === !0 && b.slideCount > b.options.slidesToShow && a("li", b.$dots).on("click.slick", {
      message: "index"
    }, b.changeSlide), b.options.dots === !0 && b.options.pauseOnDotsHover === !0 && b.options.autoplay === !0 && a("li", b.$dots).on("mouseenter.slick", function () {
      b.paused = !0, b.autoPlayClear();
    }).on("mouseleave.slick", function () {
      b.paused = !1, b.autoPlay();
    });
  }, b.prototype.initializeEvents = function () {
    var b = this;
    b.initArrowEvents(), b.initDotEvents(), b.$list.on("touchstart.slick mousedown.slick", {
      action: "start"
    }, b.swipeHandler), b.$list.on("touchmove.slick mousemove.slick", {
      action: "move"
    }, b.swipeHandler), b.$list.on("touchend.slick mouseup.slick", {
      action: "end"
    }, b.swipeHandler), b.$list.on("touchcancel.slick mouseleave.slick", {
      action: "end"
    }, b.swipeHandler), b.$list.on("click.slick", b.clickHandler), b.options.pauseOnHover === !0 && b.options.autoplay === !0 && (b.$list.on("mouseenter.slick", function () {
      b.paused = !0, b.autoPlayClear();
    }), b.$list.on("mouseleave.slick", function () {
      b.paused = !1, b.autoPlay();
    })), b.options.accessibility === !0 && b.$list.on("keydown.slick", b.keyHandler), b.options.focusOnSelect === !0 && a(b.options.slide, b.$slideTrack).on("click.slick", b.selectHandler), a(window).on("orientationchange.slick.slick-" + b.instanceUid, function () {
      b.checkResponsive(), b.setPosition();
    }), a(window).on("resize.slick.slick-" + b.instanceUid, function () {
      a(window).width() !== b.windowWidth && (clearTimeout(b.windowDelay), b.windowDelay = window.setTimeout(function () {
        b.windowWidth = a(window).width(), b.checkResponsive(), b.setPosition();
      }, 50));
    }), a("*[draggable!=true]", b.$slideTrack).on("dragstart", function (a) {
      a.preventDefault();
    }), a(window).on("load.slick.slick-" + b.instanceUid, b.setPosition), a(document).on("ready.slick.slick-" + b.instanceUid, b.setPosition);
  }, b.prototype.initUI = function () {
    var a = this;
    a.options.arrows === !0 && a.slideCount > a.options.slidesToShow && (a.$prevArrow.show(), a.$nextArrow.show()), a.options.dots === !0 && a.slideCount > a.options.slidesToShow && a.$dots.show(), a.options.autoplay === !0 && a.autoPlay();
  }, b.prototype.keyHandler = function (a) {
    var b = this;
    37 === a.keyCode && b.options.accessibility === !0 ? b.changeSlide({
      data: {
        message: "previous"
      }
    }) : 39 === a.keyCode && b.options.accessibility === !0 && b.changeSlide({
      data: {
        message: "next"
      }
    });
  }, b.prototype.lazyLoad = function () {
    function g(b) {
      a("img[data-lazy]", b).each(function () {
        var b = a(this),
            c = a(this).attr("data-lazy");
        b.load(function () {
          b.animate({
            opacity: 1
          }, 200);
        }).css({
          opacity: 0
        }).attr("src", c).removeAttr("data-lazy").removeClass("slick-loading");
      });
    }

    var c,
        d,
        e,
        f,
        b = this;
    b.options.centerMode === !0 ? b.options.infinite === !0 ? (e = b.currentSlide + (b.options.slidesToShow / 2 + 1), f = e + b.options.slidesToShow + 2) : (e = Math.max(0, b.currentSlide - (b.options.slidesToShow / 2 + 1)), f = 2 + (b.options.slidesToShow / 2 + 1) + b.currentSlide) : (e = b.options.infinite ? b.options.slidesToShow + b.currentSlide : b.currentSlide, f = e + b.options.slidesToShow, b.options.fade === !0 && (e > 0 && e--, f <= b.slideCount && f++)), c = b.$slider.find(".slick-slide").slice(e, f), g(c), b.slideCount <= b.options.slidesToShow ? (d = b.$slider.find(".slick-slide"), g(d)) : b.currentSlide >= b.slideCount - b.options.slidesToShow ? (d = b.$slider.find(".slick-cloned").slice(0, b.options.slidesToShow), g(d)) : 0 === b.currentSlide && (d = b.$slider.find(".slick-cloned").slice(-1 * b.options.slidesToShow), g(d));
  }, b.prototype.loadSlider = function () {
    var a = this;
    a.setPosition(), a.$slideTrack.css({
      opacity: 1
    }), a.$slider.removeClass("slick-loading"), a.initUI(), "progressive" === a.options.lazyLoad && a.progressiveLazyLoad();
  }, b.prototype.postSlide = function (a) {
    var b = this;
    null !== b.options.onAfterChange && b.options.onAfterChange.call(this, b, a), b.animating = !1, b.setPosition(), b.swipeLeft = null, b.options.autoplay === !0 && b.paused === !1 && b.autoPlay();
  }, b.prototype.progressiveLazyLoad = function () {
    var c,
        d,
        b = this;
    c = a("img[data-lazy]", b.$slider).length, c > 0 && (d = a("img[data-lazy]", b.$slider).first(), d.attr("src", d.attr("data-lazy")).removeClass("slick-loading").load(function () {
      d.removeAttr("data-lazy"), b.progressiveLazyLoad();
    }).error(function () {
      d.removeAttr("data-lazy"), b.progressiveLazyLoad();
    }));
  }, b.prototype.refresh = function () {
    var b = this,
        c = b.currentSlide;
    b.destroy(), a.extend(b, b.initials), b.init(), b.changeSlide({
      data: {
        message: "index",
        index: c
      }
    }, !0);
  }, b.prototype.reinit = function () {
    var b = this;
    b.$slides = b.$slideTrack.children(b.options.slide).addClass("slick-slide"), b.slideCount = b.$slides.length, b.currentSlide >= b.slideCount && 0 !== b.currentSlide && (b.currentSlide = b.currentSlide - b.options.slidesToScroll), b.slideCount <= b.options.slidesToShow && (b.currentSlide = 0), b.setProps(), b.setupInfinite(), b.buildArrows(), b.updateArrows(), b.initArrowEvents(), b.buildDots(), b.updateDots(), b.initDotEvents(), b.options.focusOnSelect === !0 && a(b.options.slide, b.$slideTrack).on("click.slick", b.selectHandler), b.setSlideClasses(0), b.setPosition(), null !== b.options.onReInit && b.options.onReInit.call(this, b);
  }, b.prototype.removeSlide = function (a, b, c) {
    var d = this;
    return "boolean" == typeof a ? (b = a, a = b === !0 ? 0 : d.slideCount - 1) : a = b === !0 ? --a : a, d.slideCount < 1 || 0 > a || a > d.slideCount - 1 ? !1 : (d.unload(), c === !0 ? d.$slideTrack.children().remove() : d.$slideTrack.children(this.options.slide).eq(a).remove(), d.$slides = d.$slideTrack.children(this.options.slide), d.$slideTrack.children(this.options.slide).detach(), d.$slideTrack.append(d.$slides), d.$slidesCache = d.$slides, d.reinit(), void 0);
  }, b.prototype.setCSS = function (a) {
    var d,
        e,
        b = this,
        c = {};
    b.options.rtl === !0 && (a = -a), d = "left" == b.positionProp ? a + "px" : "0px", e = "top" == b.positionProp ? a + "px" : "0px", c[b.positionProp] = a, b.transformsEnabled === !1 ? b.$slideTrack.css(c) : (c = {}, b.cssTransitions === !1 ? (c[b.animType] = "translate(" + d + ", " + e + ")", b.$slideTrack.css(c)) : (c[b.animType] = "translate3d(" + d + ", " + e + ", 0px)", b.$slideTrack.css(c)));
  }, b.prototype.setDimensions = function () {
    var b = this;
    if (b.options.vertical === !1 ? b.options.centerMode === !0 && b.$list.css({
      padding: "0px " + b.options.centerPadding
    }) : (b.$list.height(b.$slides.first().outerHeight(!0) * b.options.slidesToShow), b.options.centerMode === !0 && b.$list.css({
      padding: b.options.centerPadding + " 0px"
    })), b.listWidth = b.$list.width(), b.listHeight = b.$list.height(), b.options.vertical === !1 && b.options.variableWidth === !1) b.slideWidth = Math.ceil(b.listWidth / b.options.slidesToShow), b.$slideTrack.width(Math.ceil(b.slideWidth * b.$slideTrack.children(".slick-slide").length));else if (b.options.variableWidth === !0) {
      var c = 0;
      b.slideWidth = Math.ceil(b.listWidth / b.options.slidesToShow), b.$slideTrack.children(".slick-slide").each(function () {
        c += Math.ceil(a(this).outerWidth(!0));
      }), b.$slideTrack.width(Math.ceil(c) + 1);
    } else b.slideWidth = Math.ceil(b.listWidth), b.$slideTrack.height(Math.ceil(b.$slides.first().outerHeight(!0) * b.$slideTrack.children(".slick-slide").length));
    var d = b.$slides.first().outerWidth(!0) - b.$slides.first().width();
    b.options.variableWidth === !1 && b.$slideTrack.children(".slick-slide").width(b.slideWidth - d);
  }, b.prototype.setFade = function () {
    var c,
        b = this;
    b.$slides.each(function (d, e) {
      c = -1 * b.slideWidth * d, b.options.rtl === !0 ? a(e).css({
        position: "relative",
        right: c,
        top: 0,
        zIndex: 800,
        opacity: 0
      }) : a(e).css({
        position: "relative",
        left: c,
        top: 0,
        zIndex: 800,
        opacity: 0
      });
    }), b.$slides.eq(b.currentSlide).css({
      zIndex: 900,
      opacity: 1
    });
  }, b.prototype.setHeight = function () {
    var a = this;

    if (1 === a.options.slidesToShow && a.options.adaptiveHeight === !0 && a.options.vertical === !1) {
      var b = a.$slides.eq(a.currentSlide).outerHeight(!0);
      a.$list.css("height", b);
    }
  }, b.prototype.setPosition = function () {
    var a = this;
    a.setDimensions(), a.setHeight(), a.options.fade === !1 ? a.setCSS(a.getLeft(a.currentSlide)) : a.setFade(), null !== a.options.onSetPosition && a.options.onSetPosition.call(this, a);
  }, b.prototype.setProps = function () {
    var a = this,
        b = document.body.style;
    a.positionProp = a.options.vertical === !0 ? "top" : "left", "top" === a.positionProp ? a.$slider.addClass("slick-vertical") : a.$slider.removeClass("slick-vertical"), (void 0 !== b.WebkitTransition || void 0 !== b.MozTransition || void 0 !== b.msTransition) && a.options.useCSS === !0 && (a.cssTransitions = !0), void 0 !== b.OTransform && (a.animType = "OTransform", a.transformType = "-o-transform", a.transitionType = "OTransition", void 0 === b.perspectiveProperty && void 0 === b.webkitPerspective && (a.animType = !1)), void 0 !== b.MozTransform && (a.animType = "MozTransform", a.transformType = "-moz-transform", a.transitionType = "MozTransition", void 0 === b.perspectiveProperty && void 0 === b.MozPerspective && (a.animType = !1)), void 0 !== b.webkitTransform && (a.animType = "webkitTransform", a.transformType = "-webkit-transform", a.transitionType = "webkitTransition", void 0 === b.perspectiveProperty && void 0 === b.webkitPerspective && (a.animType = !1)), void 0 !== b.msTransform && (a.animType = "msTransform", a.transformType = "-ms-transform", a.transitionType = "msTransition", void 0 === b.msTransform && (a.animType = !1)), void 0 !== b.transform && a.animType !== !1 && (a.animType = "transform", a.transformType = "transform", a.transitionType = "transition"), a.transformsEnabled = null !== a.animType && a.animType !== !1;
  }, b.prototype.setSlideClasses = function (a) {
    var c,
        d,
        e,
        f,
        b = this;
    b.$slider.find(".slick-slide").removeClass("slick-active").removeClass("slick-center"), d = b.$slider.find(".slick-slide"), b.options.centerMode === !0 ? (c = Math.floor(b.options.slidesToShow / 2), b.options.infinite === !0 && (a >= c && a <= b.slideCount - 1 - c ? b.$slides.slice(a - c, a + c + 1).addClass("slick-active") : (e = b.options.slidesToShow + a, d.slice(e - c + 1, e + c + 2).addClass("slick-active")), 0 === a ? d.eq(d.length - 1 - b.options.slidesToShow).addClass("slick-center") : a === b.slideCount - 1 && d.eq(b.options.slidesToShow).addClass("slick-center")), b.$slides.eq(a).addClass("slick-center")) : a >= 0 && a <= b.slideCount - b.options.slidesToShow ? b.$slides.slice(a, a + b.options.slidesToShow).addClass("slick-active") : d.length <= b.options.slidesToShow ? d.addClass("slick-active") : (f = b.slideCount % b.options.slidesToShow, e = b.options.infinite === !0 ? b.options.slidesToShow + a : a, b.options.slidesToShow == b.options.slidesToScroll && b.slideCount - a < b.options.slidesToShow ? d.slice(e - (b.options.slidesToShow - f), e + f).addClass("slick-active") : d.slice(e, e + b.options.slidesToShow).addClass("slick-active")), "ondemand" === b.options.lazyLoad && b.lazyLoad();
  }, b.prototype.setupInfinite = function () {
    var c,
        d,
        e,
        b = this;

    if (b.options.fade === !0 && (b.options.centerMode = !1), b.options.infinite === !0 && b.options.fade === !1 && (d = null, b.slideCount > b.options.slidesToShow)) {
      for (e = b.options.centerMode === !0 ? b.options.slidesToShow + 1 : b.options.slidesToShow, c = b.slideCount; c > b.slideCount - e; c -= 1) {
        d = c - 1, a(b.$slides[d]).clone(!0).attr("id", "").attr("index", d - b.slideCount).prependTo(b.$slideTrack).addClass("slick-cloned");
      }

      for (c = 0; e > c; c += 1) {
        d = c, a(b.$slides[d]).clone(!0).attr("id", "").attr("index", d + b.slideCount).appendTo(b.$slideTrack).addClass("slick-cloned");
      }

      b.$slideTrack.find(".slick-cloned").find("[id]").each(function () {
        a(this).attr("id", "");
      });
    }
  }, b.prototype.selectHandler = function (b) {
    var c = this,
        d = parseInt(a(b.target).parents(".slick-slide").attr("index"));
    return d || (d = 0), c.slideCount <= c.options.slidesToShow ? (c.$slider.find(".slick-slide").removeClass("slick-active"), c.$slides.eq(d).addClass("slick-active"), c.options.centerMode === !0 && (c.$slider.find(".slick-slide").removeClass("slick-center"), c.$slides.eq(d).addClass("slick-center")), c.asNavFor(d), void 0) : (c.slideHandler(d), void 0);
  }, b.prototype.slideHandler = function (a, b, c) {
    var d,
        e,
        f,
        g,
        i = null,
        j = this;
    return b = b || !1, j.animating === !0 && j.options.waitForAnimate === !0 || j.options.fade === !0 && j.currentSlide === a || j.slideCount <= j.options.slidesToShow ? void 0 : (b === !1 && j.asNavFor(a), d = a, i = j.getLeft(d), g = j.getLeft(j.currentSlide), j.currentLeft = null === j.swipeLeft ? g : j.swipeLeft, j.options.infinite === !1 && j.options.centerMode === !1 && (0 > a || a > j.getDotCount() * j.options.slidesToScroll) ? (j.options.fade === !1 && (d = j.currentSlide, c !== !0 ? j.animateSlide(g, function () {
      j.postSlide(d);
    }) : j.postSlide(d)), void 0) : j.options.infinite === !1 && j.options.centerMode === !0 && (0 > a || a > j.slideCount - j.options.slidesToScroll) ? (j.options.fade === !1 && (d = j.currentSlide, c !== !0 ? j.animateSlide(g, function () {
      j.postSlide(d);
    }) : j.postSlide(d)), void 0) : (j.options.autoplay === !0 && clearInterval(j.autoPlayTimer), e = 0 > d ? 0 !== j.slideCount % j.options.slidesToScroll ? j.slideCount - j.slideCount % j.options.slidesToScroll : j.slideCount + d : d >= j.slideCount ? 0 !== j.slideCount % j.options.slidesToScroll ? 0 : d - j.slideCount : d, j.animating = !0, null !== j.options.onBeforeChange && a !== j.currentSlide && j.options.onBeforeChange.call(this, j, j.currentSlide, e), f = j.currentSlide, j.currentSlide = e, j.setSlideClasses(j.currentSlide), j.updateDots(), j.updateArrows(), j.options.fade === !0 ? (c !== !0 ? j.fadeSlide(f, e, function () {
      j.postSlide(e);
    }) : j.postSlide(e), void 0) : (c !== !0 ? j.animateSlide(i, function () {
      j.postSlide(e);
    }) : j.postSlide(e), void 0)));
  }, b.prototype.startLoad = function () {
    var a = this;
    a.options.arrows === !0 && a.slideCount > a.options.slidesToShow && (a.$prevArrow.hide(), a.$nextArrow.hide()), a.options.dots === !0 && a.slideCount > a.options.slidesToShow && a.$dots.hide(), a.$slider.addClass("slick-loading");
  }, b.prototype.swipeDirection = function () {
    var a,
        b,
        c,
        d,
        e = this;
    return a = e.touchObject.startX - e.touchObject.curX, b = e.touchObject.startY - e.touchObject.curY, c = Math.atan2(b, a), d = Math.round(180 * c / Math.PI), 0 > d && (d = 360 - Math.abs(d)), 45 >= d && d >= 0 ? e.options.rtl === !1 ? "left" : "right" : 360 >= d && d >= 315 ? e.options.rtl === !1 ? "left" : "right" : d >= 135 && 225 >= d ? e.options.rtl === !1 ? "right" : "left" : "vertical";
  }, b.prototype.swipeEnd = function () {
    var b = this;
    if (b.dragging = !1, b.shouldClick = b.touchObject.swipeLength > 10 ? !1 : !0, void 0 === b.touchObject.curX) return !1;
    if (b.touchObject.swipeLength >= b.touchObject.minSwipe) switch (b.swipeDirection()) {
      case "left":
        b.slideHandler(b.currentSlide + b.getSlideCount()), b.currentDirection = 0, b.touchObject = {};
        break;

      case "right":
        b.slideHandler(b.currentSlide - b.getSlideCount()), b.currentDirection = 1, b.touchObject = {};
    } else b.touchObject.startX !== b.touchObject.curX && (b.slideHandler(b.currentSlide), b.touchObject = {});
  }, b.prototype.swipeHandler = function (a) {
    var b = this;
    if (!(b.options.swipe === !1 || "ontouchend" in document && b.options.swipe === !1 || b.options.draggable === !1 && -1 !== a.type.indexOf("mouse"))) switch (b.touchObject.fingerCount = a.originalEvent && void 0 !== a.originalEvent.touches ? a.originalEvent.touches.length : 1, b.touchObject.minSwipe = b.listWidth / b.options.touchThreshold, a.data.action) {
      case "start":
        b.swipeStart(a);
        break;

      case "move":
        b.swipeMove(a);
        break;

      case "end":
        b.swipeEnd(a);
    }
  }, b.prototype.swipeMove = function (a) {
    var c,
        d,
        e,
        f,
        b = this;
    return f = void 0 !== a.originalEvent ? a.originalEvent.touches : null, !b.dragging || f && 1 !== f.length ? !1 : (c = b.getLeft(b.currentSlide), b.touchObject.curX = void 0 !== f ? f[0].pageX : a.clientX, b.touchObject.curY = void 0 !== f ? f[0].pageY : a.clientY, b.touchObject.swipeLength = Math.round(Math.sqrt(Math.pow(b.touchObject.curX - b.touchObject.startX, 2))), d = b.swipeDirection(), "vertical" !== d ? (void 0 !== a.originalEvent && b.touchObject.swipeLength > 4 && a.preventDefault(), e = (b.options.rtl === !1 ? 1 : -1) * (b.touchObject.curX > b.touchObject.startX ? 1 : -1), b.swipeLeft = b.options.vertical === !1 ? c + b.touchObject.swipeLength * e : c + b.touchObject.swipeLength * (b.$list.height() / b.listWidth) * e, b.options.fade === !0 || b.options.touchMove === !1 ? !1 : b.animating === !0 ? (b.swipeLeft = null, !1) : (b.setCSS(b.swipeLeft), void 0)) : void 0);
  }, b.prototype.swipeStart = function (a) {
    var c,
        b = this;
    return 1 !== b.touchObject.fingerCount || b.slideCount <= b.options.slidesToShow ? (b.touchObject = {}, !1) : (void 0 !== a.originalEvent && void 0 !== a.originalEvent.touches && (c = a.originalEvent.touches[0]), b.touchObject.startX = b.touchObject.curX = void 0 !== c ? c.pageX : a.clientX, b.touchObject.startY = b.touchObject.curY = void 0 !== c ? c.pageY : a.clientY, b.dragging = !0, void 0);
  }, b.prototype.unfilterSlides = function () {
    var a = this;
    null !== a.$slidesCache && (a.unload(), a.$slideTrack.children(this.options.slide).detach(), a.$slidesCache.appendTo(a.$slideTrack), a.reinit());
  }, b.prototype.unload = function () {
    var b = this;
    a(".slick-cloned", b.$slider).remove(), b.$dots && b.$dots.remove(), b.$prevArrow && "object" != _typeof(b.options.prevArrow) && b.$prevArrow.remove(), b.$nextArrow && "object" != _typeof(b.options.nextArrow) && b.$nextArrow.remove(), b.$slides.removeClass("slick-slide slick-active slick-visible").css("width", "");
  }, b.prototype.updateArrows = function () {
    var b,
        a = this;
    b = Math.floor(a.options.slidesToShow / 2), a.options.arrows === !0 && a.options.infinite !== !0 && a.slideCount > a.options.slidesToShow && (a.$prevArrow.removeClass("slick-disabled"), a.$nextArrow.removeClass("slick-disabled"), 0 === a.currentSlide ? (a.$prevArrow.addClass("slick-disabled"), a.$nextArrow.removeClass("slick-disabled")) : a.currentSlide >= a.slideCount - a.options.slidesToShow && a.options.centerMode === !1 ? (a.$nextArrow.addClass("slick-disabled"), a.$prevArrow.removeClass("slick-disabled")) : a.currentSlide > a.slideCount - a.options.slidesToShow + b && a.options.centerMode === !0 && (a.$nextArrow.addClass("slick-disabled"), a.$prevArrow.removeClass("slick-disabled")));
  }, b.prototype.updateDots = function () {
    var a = this;
    null !== a.$dots && (a.$dots.find("li").removeClass("slick-active"), a.$dots.find("li").eq(Math.floor(a.currentSlide / a.options.slidesToScroll)).addClass("slick-active"));
  }, a.fn.slick = function (a) {
    var c = this;
    return c.each(function (c, d) {
      d.slick = new b(d, a);
    });
  }, a.fn.slickAdd = function (a, b, c) {
    var d = this;
    return d.each(function (d, e) {
      e.slick.addSlide(a, b, c);
    });
  }, a.fn.slickCurrentSlide = function () {
    var a = this;
    return a.get(0).slick.getCurrent();
  }, a.fn.slickFilter = function (a) {
    var b = this;
    return b.each(function (b, c) {
      c.slick.filterSlides(a);
    });
  }, a.fn.slickGoTo = function (a, b) {
    var c = this;
    return c.each(function (c, d) {
      d.slick.changeSlide({
        data: {
          message: "index",
          index: parseInt(a)
        }
      }, b);
    });
  }, a.fn.slickNext = function () {
    var a = this;
    return a.each(function (a, b) {
      b.slick.changeSlide({
        data: {
          message: "next"
        }
      });
    });
  }, a.fn.slickPause = function () {
    var a = this;
    return a.each(function (a, b) {
      b.slick.autoPlayClear(), b.slick.paused = !0;
    });
  }, a.fn.slickPlay = function () {
    var a = this;
    return a.each(function (a, b) {
      b.slick.paused = !1, b.slick.autoPlay();
    });
  }, a.fn.slickPrev = function () {
    var a = this;
    return a.each(function (a, b) {
      b.slick.changeSlide({
        data: {
          message: "previous"
        }
      });
    });
  }, a.fn.slickRemove = function (a, b) {
    var c = this;
    return c.each(function (c, d) {
      d.slick.removeSlide(a, b);
    });
  }, a.fn.slickRemoveAll = function () {
    var a = this;
    return a.each(function (a, b) {
      b.slick.removeSlide(null, null, !0);
    });
  }, a.fn.slickGetOption = function (a) {
    var b = this;
    return b.get(0).slick.options[a];
  }, a.fn.slickSetOption = function (a, b, c) {
    var d = this;
    return d.each(function (d, e) {
      e.slick.options[a] = b, c === !0 && (e.slick.unload(), e.slick.reinit());
    });
  }, a.fn.slickUnfilter = function () {
    var a = this;
    return a.each(function (a, b) {
      b.slick.unfilterSlides();
    });
  }, a.fn.unslick = function () {
    var a = this;
    return a.each(function (a, b) {
      b.slick && b.slick.destroy();
    });
  }, a.fn.getSlick = function () {
    var a = null,
        b = this;
    return b.each(function (b, c) {
      a = c.slick;
    }), a;
  };
});
/*
 FastClick: polyfill to remove click delays on browsers with touch UIs.

 @version 1.0.3
 @codingstandard ftlabs-jsv2
 @copyright The Financial Times Limited [All Rights Reserved]
 @license MIT License (see LICENSE.txt)
*/

(function () {
  "use strict";

  function e(t, r) {
    function s(e, t) {
      return function () {
        return e.apply(t, arguments);
      };
    }

    var i;
    r = r || {};
    this.trackingClick = false;
    this.trackingClickStart = 0;
    this.targetElement = null;
    this.touchStartX = 0;
    this.touchStartY = 0;
    this.lastTouchIdentifier = 0;
    this.touchBoundary = r.touchBoundary || 10;
    this.layer = t;
    this.tapDelay = r.tapDelay || 200;
    this.tapTimeout = r.tapTimeout || 700;

    if (e.notNeeded(t)) {
      return;
    }

    var o = ["onMouse", "onClick", "onTouchStart", "onTouchMove", "onTouchEnd", "onTouchCancel"];
    var u = this;

    for (var a = 0, f = o.length; a < f; a++) {
      u[o[a]] = s(u[o[a]], u);
    }

    if (n) {
      t.addEventListener("mouseover", this.onMouse, true);
      t.addEventListener("mousedown", this.onMouse, true);
      t.addEventListener("mouseup", this.onMouse, true);
    }

    t.addEventListener("click", this.onClick, true);
    t.addEventListener("touchstart", this.onTouchStart, false);
    t.addEventListener("touchmove", this.onTouchMove, false);
    t.addEventListener("touchend", this.onTouchEnd, false);
    t.addEventListener("touchcancel", this.onTouchCancel, false);

    if (!Event.prototype.stopImmediatePropagation) {
      t.removeEventListener = function (e, n, r) {
        var i = Node.prototype.removeEventListener;

        if (e === "click") {
          i.call(t, e, n.hijacked || n, r);
        } else {
          i.call(t, e, n, r);
        }
      };

      t.addEventListener = function (e, n, r) {
        var i = Node.prototype.addEventListener;

        if (e === "click") {
          i.call(t, e, n.hijacked || (n.hijacked = function (e) {
            if (!e.propagationStopped) {
              n(e);
            }
          }), r);
        } else {
          i.call(t, e, n, r);
        }
      };
    }

    if (typeof t.onclick === "function") {
      i = t.onclick;
      t.addEventListener("click", function (e) {
        i(e);
      }, false);
      t.onclick = null;
    }
  }

  var t = navigator.userAgent.indexOf("Windows Phone") >= 0;
  var n = navigator.userAgent.indexOf("Android") > 0 && !t;
  var r = /iP(ad|hone|od)/.test(navigator.userAgent) && !t;
  var i = r && /OS 4_\d(_\d)?/.test(navigator.userAgent);
  var s = r && /OS ([6-9]|\d{2})_\d/.test(navigator.userAgent);
  var o = navigator.userAgent.indexOf("BB10") > 0;

  e.prototype.needsClick = function (e) {
    switch (e.nodeName.toLowerCase()) {
      case "button":
      case "select":
      case "textarea":
        if (e.disabled) {
          return true;
        }

        break;

      case "input":
        if (r && e.type === "file" || e.disabled) {
          return true;
        }

        break;

      case "label":
      case "iframe":
      case "video":
        return true;
    }

    return /\bneedsclick\b/.test(e.className);
  };

  e.prototype.needsFocus = function (e) {
    switch (e.nodeName.toLowerCase()) {
      case "textarea":
        return true;

      case "select":
        return !n;

      case "input":
        switch (e.type) {
          case "button":
          case "checkbox":
          case "file":
          case "image":
          case "radio":
          case "submit":
            return false;
        }

        return !e.disabled && !e.readOnly;

      default:
        return /\bneedsfocus\b/.test(e.className);
    }
  };

  e.prototype.sendClick = function (e, t) {
    var n, r;

    if (document.activeElement && document.activeElement !== e) {
      document.activeElement.blur();
    }

    r = t.changedTouches[0];
    n = document.createEvent("MouseEvents");
    n.initMouseEvent(this.determineEventType(e), true, true, window, 1, r.screenX, r.screenY, r.clientX, r.clientY, false, false, false, false, 0, null);
    n.forwardedTouchEvent = true;
    e.dispatchEvent(n);
  };

  e.prototype.determineEventType = function (e) {
    if (n && e.tagName.toLowerCase() === "select") {
      return "mousedown";
    }

    return "click";
  };

  e.prototype.focus = function (e) {
    var t;

    if (r && e.setSelectionRange && e.type.indexOf("date") !== 0 && e.type !== "time" && e.type !== "month") {
      t = e.value.length;
      e.setSelectionRange(t, t);
    } else {
      e.focus();
    }
  };

  e.prototype.updateScrollParent = function (e) {
    var t, n;
    t = e.fastClickScrollParent;

    if (!t || !t.contains(e)) {
      n = e;

      do {
        if (n.scrollHeight > n.offsetHeight) {
          t = n;
          e.fastClickScrollParent = n;
          break;
        }

        n = n.parentElement;
      } while (n);
    }

    if (t) {
      t.fastClickLastScrollTop = t.scrollTop;
    }
  };

  e.prototype.getTargetElementFromEventTarget = function (e) {
    if (e.nodeType === Node.TEXT_NODE) {
      return e.parentNode;
    }

    return e;
  };

  e.prototype.onTouchStart = function (e) {
    var t, n, s;

    if (e.targetTouches.length > 1) {
      return true;
    }

    t = this.getTargetElementFromEventTarget(e.target);
    n = e.targetTouches[0];

    if (r) {
      s = window.getSelection();

      if (s.rangeCount && !s.isCollapsed) {
        return true;
      }

      if (!i) {
        if (n.identifier && n.identifier === this.lastTouchIdentifier) {
          e.preventDefault();
          return false;
        }

        this.lastTouchIdentifier = n.identifier;
        this.updateScrollParent(t);
      }
    }

    this.trackingClick = true;
    this.trackingClickStart = e.timeStamp;
    this.targetElement = t;
    this.touchStartX = n.pageX;
    this.touchStartY = n.pageY;

    if (e.timeStamp - this.lastClickTime < this.tapDelay) {
      e.preventDefault();
    }

    return true;
  };

  e.prototype.touchHasMoved = function (e) {
    var t = e.changedTouches[0],
        n = this.touchBoundary;

    if (Math.abs(t.pageX - this.touchStartX) > n || Math.abs(t.pageY - this.touchStartY) > n) {
      return true;
    }

    return false;
  };

  e.prototype.onTouchMove = function (e) {
    if (!this.trackingClick) {
      return true;
    }

    if (this.targetElement !== this.getTargetElementFromEventTarget(e.target) || this.touchHasMoved(e)) {
      this.trackingClick = false;
      this.targetElement = null;
    }

    return true;
  };

  e.prototype.findControl = function (e) {
    if (e.control !== undefined) {
      return e.control;
    }

    if (e.htmlFor) {
      return document.getElementById(e.htmlFor);
    }

    return e.querySelector("button, input:not([type=hidden]), keygen, meter, output, progress, select, textarea");
  };

  e.prototype.onTouchEnd = function (e) {
    var t,
        o,
        u,
        a,
        f,
        l = this.targetElement;

    if (!this.trackingClick) {
      return true;
    }

    if (e.timeStamp - this.lastClickTime < this.tapDelay) {
      this.cancelNextClick = true;
      return true;
    }

    if (e.timeStamp - this.trackingClickStart > this.tapTimeout) {
      return true;
    }

    this.cancelNextClick = false;
    this.lastClickTime = e.timeStamp;
    o = this.trackingClickStart;
    this.trackingClick = false;
    this.trackingClickStart = 0;

    if (s) {
      f = e.changedTouches[0];
      l = document.elementFromPoint(f.pageX - window.pageXOffset, f.pageY - window.pageYOffset) || l;
      l.fastClickScrollParent = this.targetElement.fastClickScrollParent;
    }

    u = l.tagName.toLowerCase();

    if (u === "label") {
      t = this.findControl(l);

      if (t) {
        this.focus(l);

        if (n) {
          return false;
        }

        l = t;
      }
    } else if (this.needsFocus(l)) {
      if (e.timeStamp - o > 100 || r && window.top !== window && u === "input") {
        this.targetElement = null;
        return false;
      }

      this.focus(l);
      this.sendClick(l, e);

      if (!r || u !== "select") {
        this.targetElement = null;
        e.preventDefault();
      }

      return false;
    }

    if (r && !i) {
      a = l.fastClickScrollParent;

      if (a && a.fastClickLastScrollTop !== a.scrollTop) {
        return true;
      }
    }

    if (!this.needsClick(l)) {
      e.preventDefault();
      this.sendClick(l, e);
    }

    return false;
  };

  e.prototype.onTouchCancel = function () {
    this.trackingClick = false;
    this.targetElement = null;
  };

  e.prototype.onMouse = function (e) {
    if (!this.targetElement) {
      return true;
    }

    if (e.forwardedTouchEvent) {
      return true;
    }

    if (!e.cancelable) {
      return true;
    }

    if (!this.needsClick(this.targetElement) || this.cancelNextClick) {
      if (e.stopImmediatePropagation) {
        e.stopImmediatePropagation();
      } else {
        e.propagationStopped = true;
      }

      e.stopPropagation();
      e.preventDefault();
      return false;
    }

    return true;
  };

  e.prototype.onClick = function (e) {
    var t;

    if (this.trackingClick) {
      this.targetElement = null;
      this.trackingClick = false;
      return true;
    }

    if (e.target.type === "submit" && e.detail === 0) {
      return true;
    }

    t = this.onMouse(e);

    if (!t) {
      this.targetElement = null;
    }

    return t;
  };

  e.prototype.destroy = function () {
    var e = this.layer;

    if (n) {
      e.removeEventListener("mouseover", this.onMouse, true);
      e.removeEventListener("mousedown", this.onMouse, true);
      e.removeEventListener("mouseup", this.onMouse, true);
    }

    e.removeEventListener("click", this.onClick, true);
    e.removeEventListener("touchstart", this.onTouchStart, false);
    e.removeEventListener("touchmove", this.onTouchMove, false);
    e.removeEventListener("touchend", this.onTouchEnd, false);
    e.removeEventListener("touchcancel", this.onTouchCancel, false);
  };

  e.notNeeded = function (e) {
    var t;
    var r;
    var i;

    if (typeof window.ontouchstart === "undefined") {
      return true;
    }

    r = +(/Chrome\/([0-9]+)/.exec(navigator.userAgent) || [, 0])[1];

    if (r) {
      if (n) {
        t = document.querySelector("meta[name=viewport]");

        if (t) {
          if (t.content.indexOf("user-scalable=no") !== -1) {
            return true;
          }

          if (r > 31 && document.documentElement.scrollWidth <= window.outerWidth) {
            return true;
          }
        }
      } else {
        return true;
      }
    }

    if (o) {
      i = navigator.userAgent.match(/Version\/([0-9]*)\.([0-9]*)/);

      if (i[1] >= 10 && i[2] >= 3) {
        t = document.querySelector("meta[name=viewport]");

        if (t) {
          if (t.content.indexOf("user-scalable=no") !== -1) {
            return true;
          }

          if (document.documentElement.scrollWidth <= window.outerWidth) {
            return true;
          }
        }
      }
    }

    if (e.style.msTouchAction === "none") {
      return true;
    }

    if (e.style.touchAction === "none") {
      return true;
    }

    return false;
  };

  e.attach = function (t, n) {
    return new e(t, n);
  };

  if ( true && _typeof(__webpack_require__(/*! !webpack amd options */ "./node_modules/webpack/buildin/amd-options.js")) == "object" && __webpack_require__(/*! !webpack amd options */ "./node_modules/webpack/buildin/amd-options.js")) {
    !(__WEBPACK_AMD_DEFINE_RESULT__ = (function () {
      return e;
    }).call(exports, __webpack_require__, exports, module),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
  } else if ( true && module.exports) {
    module.exports = e.attach;
    module.exports.FastClick = e;
  } else {
    window.FastClick = e;
  }
})();
/* Jonathan Snook - MIT License - https://github.com/snookca/prepareTransition */


!function (a) {
  a.fn.prepareTransition = function () {
    return this.each(function () {
      var b = a(this);
      b.one("TransitionEnd webkitTransitionEnd transitionend oTransitionEnd", function () {
        b.removeClass("is-transitioning");
      });
      var c = ["transition-duration", "-moz-transition-duration", "-webkit-transition-duration", "-o-transition-duration"];
      var d = 0;
      a.each(c, function (a, c) {
        d = parseFloat(b.css(c)) || d;
      });

      if (d != 0) {
        b.addClass("is-transitioning");
        b[0].offsetWidth;
      }
    });
  };
}(jQuery);
/* replaceUrlParam - http://stackoverflow.com/questions/7171099/how-to-replace-url-parameter-with-javascript-jquery */

function replaceUrlParam(e, r, a) {
  var n = new RegExp("(" + r + "=).*?(&|$)"),
      c = e;
  return c = e.search(n) >= 0 ? e.replace(n, "$1" + a + "$2") : c + (c.indexOf("?") > 0 ? "&" : "?") + r + "=" + a;
}

;
/**
 * @license
 * lodash 4.5.1 (Custom Build) lodash.com/license | Underscore.js 1.8.3 underscorejs.org/LICENSE
 * Build: `lodash core -o ./dist/lodash.core.js`
 */

;
(function () {
  function n(n, t) {
    for (var r = -1, e = t.length, u = n.length; ++r < e;) {
      n[u + r] = t[r];
    }

    return n;
  }

  function t(n, t, r) {
    for (var e = -1, u = n.length; ++e < u;) {
      var o = n[e],
          i = t(o);
      if (null != i && (c === an ? i === i : r(i, c))) var c = i,
          f = o;
    }

    return f;
  }

  function r(n, t, r) {
    var e;
    return r(n, function (n, r, u) {
      return t(n, r, u) ? (e = n, false) : void 0;
    }), e;
  }

  function e(n, t, r, e, u) {
    return u(n, function (n, u, o) {
      r = e ? (e = false, n) : t(r, n, u, o);
    }), r;
  }

  function u(n, t) {
    return O(t, function (t) {
      return n[t];
    });
  }

  function o(n) {
    return n && n.Object === Object ? n : null;
  }

  function i(n) {
    return vn[n];
  }

  function c(n) {
    var t = false;
    if (null != n && typeof n.toString != "function") try {
      t = !!(n + "");
    } catch (r) {}
    return t;
  }

  function f(n, t) {
    return n = typeof n == "number" || hn.test(n) ? +n : -1, n > -1 && 0 == n % 1 && (null == t ? 9007199254740991 : t) > n;
  }

  function a(n) {
    if (Y(n) && !Pn(n)) {
      if (n instanceof l) return n;

      if (En.call(n, "__wrapped__")) {
        var t = new l(n.__wrapped__, n.__chain__);
        return t.__actions__ = N(n.__actions__), t;
      }
    }

    return new l(n);
  }

  function l(n, t) {
    this.__wrapped__ = n, this.__actions__ = [], this.__chain__ = !!t;
  }

  function p(n, t, r, e) {
    var u;
    return (u = n === an) || (u = xn[r], u = (n === u || n !== n && u !== u) && !En.call(e, r)), u ? t : n;
  }

  function s(n) {
    return X(n) ? Fn(n) : {};
  }

  function h(n, t, r) {
    if (typeof n != "function") throw new TypeError("Expected a function");
    return setTimeout(function () {
      n.apply(an, r);
    }, t);
  }

  function v(n, t) {
    var r = true;
    return $n(n, function (n, e, u) {
      return r = !!t(n, e, u);
    }), r;
  }

  function y(n, t) {
    var r = [];
    return $n(n, function (n, e, u) {
      t(n, e, u) && r.push(n);
    }), r;
  }

  function _(t, r, e, u) {
    u || (u = []);

    for (var o = -1, i = t.length; ++o < i;) {
      var c = t[o];
      r > 0 && Y(c) && L(c) && (e || Pn(c) || K(c)) ? r > 1 ? _(c, r - 1, e, u) : n(u, c) : e || (u[u.length] = c);
    }

    return u;
  }

  function g(n, t) {
    return n && qn(n, t, en);
  }

  function b(n, t) {
    return y(t, function (t) {
      return Q(n[t]);
    });
  }

  function j(n, t, r, e, u) {
    return n === t ? true : null == n || null == t || !X(n) && !Y(t) ? n !== n && t !== t : m(n, t, j, r, e, u);
  }

  function m(n, t, r, e, u, o) {
    var i = Pn(n),
        f = Pn(t),
        a = "[object Array]",
        l = "[object Array]";
    i || (a = kn.call(n), "[object Arguments]" == a && (a = "[object Object]")), f || (l = kn.call(t), "[object Arguments]" == l && (l = "[object Object]"));
    var p = "[object Object]" == a && !c(n),
        f = "[object Object]" == l && !c(t);
    return !(l = a == l) || i || p ? 2 & u || (a = p && En.call(n, "__wrapped__"), f = f && En.call(t, "__wrapped__"), !a && !f) ? l ? (o || (o = []), (a = J(o, function (t) {
      return t[0] === n;
    })) && a[1] ? a[1] == t : (o.push([n, t]), t = (i ? I : q)(n, t, r, e, u, o), o.pop(), t)) : false : r(a ? n.value() : n, f ? t.value() : t, e, u, o) : $(n, t, a);
  }

  function d(n) {
    var t = _typeof(n);

    return "function" == t ? n : null == n ? cn : ("object" == t ? x : A)(n);
  }

  function w(n) {
    n = null == n ? n : Object(n);
    var t,
        r = [];

    for (t in n) {
      r.push(t);
    }

    return r;
  }

  function O(n, t) {
    var r = -1,
        e = L(n) ? Array(n.length) : [];
    return $n(n, function (n, u, o) {
      e[++r] = t(n, u, o);
    }), e;
  }

  function x(n) {
    var t = en(n);
    return function (r) {
      var e = t.length;
      if (null == r) return !e;

      for (r = Object(r); e--;) {
        var u = t[e];
        if (!(u in r && j(n[u], r[u], an, 3))) return false;
      }

      return true;
    };
  }

  function E(n, t) {
    return n = Object(n), P(t, function (t, r) {
      return r in n && (t[r] = n[r]), t;
    }, {});
  }

  function A(n) {
    return function (t) {
      return null == t ? an : t[n];
    };
  }

  function k(n, t, r) {
    var e = -1,
        u = n.length;

    for (0 > t && (t = -t > u ? 0 : u + t), r = r > u ? u : r, 0 > r && (r += u), u = t > r ? 0 : r - t >>> 0, t >>>= 0, r = Array(u); ++e < u;) {
      r[e] = n[e + t];
    }

    return r;
  }

  function N(n) {
    return k(n, 0, n.length);
  }

  function S(n, t) {
    var r;
    return $n(n, function (n, e, u) {
      return r = t(n, e, u), !r;
    }), !!r;
  }

  function T(t, r) {
    return P(r, function (t, r) {
      return r.func.apply(r.thisArg, n([t], r.args));
    }, t);
  }

  function F(n, t, r, e) {
    r || (r = {});

    for (var u = -1, o = t.length; ++u < o;) {
      var i = t[u],
          c = e ? e(r[i], n[i], i, r, n) : n[i],
          f = r,
          a = f[i];
      En.call(f, i) && (a === c || a !== a && c !== c) && (c !== an || i in f) || (f[i] = c);
    }

    return r;
  }

  function R(n) {
    return V(function (t, r) {
      var e = -1,
          u = r.length,
          o = u > 1 ? r[u - 1] : an,
          o = typeof o == "function" ? (u--, o) : an;

      for (t = Object(t); ++e < u;) {
        var i = r[e];
        i && n(t, i, e, o);
      }

      return t;
    });
  }

  function B(n) {
    return function () {
      var t = arguments,
          r = s(n.prototype),
          t = n.apply(r, t);
      return X(t) ? t : r;
    };
  }

  function D(n, t, r) {
    function e() {
      for (var o = -1, i = arguments.length, c = -1, f = r.length, a = Array(f + i), l = this && this !== wn && this instanceof e ? u : n; ++c < f;) {
        a[c] = r[c];
      }

      for (; i--;) {
        a[c++] = arguments[++o];
      }

      return l.apply(t, a);
    }

    if (typeof n != "function") throw new TypeError("Expected a function");
    var u = B(n);
    return e;
  }

  function I(n, t, r, e, u, o) {
    var i = -1,
        c = 1 & u,
        f = n.length,
        a = t.length;
    if (f != a && !(2 & u && a > f)) return false;

    for (a = true; ++i < f;) {
      var l = n[i],
          p = t[i];

      if (void 0 !== an) {
        a = false;
        break;
      }

      if (c) {
        if (!S(t, function (n) {
          return l === n || r(l, n, e, u, o);
        })) {
          a = false;
          break;
        }
      } else if (l !== p && !r(l, p, e, u, o)) {
        a = false;
        break;
      }
    }

    return a;
  }

  function $(n, t, r) {
    switch (r) {
      case "[object Boolean]":
      case "[object Date]":
        return +n == +t;

      case "[object Error]":
        return n.name == t.name && n.message == t.message;

      case "[object Number]":
        return n != +n ? t != +t : n == +t;

      case "[object RegExp]":
      case "[object String]":
        return n == t + "";
    }

    return false;
  }

  function q(n, t, r, e, u, o) {
    var i = 2 & u,
        c = en(n),
        f = c.length,
        a = en(t).length;
    if (f != a && !i) return false;

    for (var l = f; l--;) {
      var p = c[l];
      if (!(i ? p in t : En.call(t, p))) return false;
    }

    for (a = true; ++l < f;) {
      var p = c[l],
          s = n[p],
          h = t[p];

      if (void 0 !== an || s !== h && !r(s, h, e, u, o)) {
        a = false;
        break;
      }

      i || (i = "constructor" == p);
    }

    return a && !i && (r = n.constructor, e = t.constructor, r != e && "constructor" in n && "constructor" in t && !(typeof r == "function" && r instanceof r && typeof e == "function" && e instanceof e) && (a = false)), a;
  }

  function z(n) {
    var t = n ? n.length : an;

    if (W(t) && (Pn(n) || nn(n) || K(n))) {
      n = String;

      for (var r = -1, e = Array(t); ++r < t;) {
        e[r] = n(r);
      }

      t = e;
    } else t = null;

    return t;
  }

  function C(n) {
    var t = n && n.constructor,
        t = Q(t) && t.prototype || xn;
    return n === t;
  }

  function G(n) {
    return n ? n[0] : an;
  }

  function J(n, t) {
    return r(n, d(t), $n);
  }

  function M(n, t) {
    return $n(n, typeof t == "function" ? t : cn);
  }

  function P(n, t, r) {
    return e(n, d(t), r, 3 > arguments.length, $n);
  }

  function U(n, t) {
    var r;
    if (typeof t != "function") throw new TypeError("Expected a function");
    return n = Un(n), function () {
      return 0 < --n && (r = t.apply(this, arguments)), 1 >= n && (t = an), r;
    };
  }

  function V(n) {
    var t;
    if (typeof n != "function") throw new TypeError("Expected a function");
    return t = In(t === an ? n.length - 1 : Un(t), 0), function () {
      for (var r = arguments, e = -1, u = In(r.length - t, 0), o = Array(u); ++e < u;) {
        o[e] = r[t + e];
      }

      for (u = Array(t + 1), e = -1; ++e < t;) {
        u[e] = r[e];
      }

      return u[t] = o, n.apply(this, u);
    };
  }

  function H(n, t) {
    return n > t;
  }

  function K(n) {
    return Y(n) && L(n) && En.call(n, "callee") && (!Rn.call(n, "callee") || "[object Arguments]" == kn.call(n));
  }

  function L(n) {
    return null != n && !(typeof n == "function" && Q(n)) && W(zn(n));
  }

  function Q(n) {
    return n = X(n) ? kn.call(n) : "", "[object Function]" == n || "[object GeneratorFunction]" == n;
  }

  function W(n) {
    return typeof n == "number" && n > -1 && 0 == n % 1 && 9007199254740991 >= n;
  }

  function X(n) {
    var t = _typeof(n);

    return !!n && ("object" == t || "function" == t);
  }

  function Y(n) {
    return !!n && _typeof(n) == "object";
  }

  function Z(n) {
    return typeof n == "number" || Y(n) && "[object Number]" == kn.call(n);
  }

  function nn(n) {
    return typeof n == "string" || !Pn(n) && Y(n) && "[object String]" == kn.call(n);
  }

  function tn(n, t) {
    return t > n;
  }

  function rn(n) {
    return typeof n == "string" ? n : null == n ? "" : n + "";
  }

  function en(n) {
    var t = C(n);
    if (!t && !L(n)) return Dn(Object(n));
    var r,
        e = z(n),
        u = !!e,
        e = e || [],
        o = e.length;

    for (r in n) {
      !En.call(n, r) || u && ("length" == r || f(r, o)) || t && "constructor" == r || e.push(r);
    }

    return e;
  }

  function un(n) {
    for (var t = -1, r = C(n), e = w(n), u = e.length, o = z(n), i = !!o, o = o || [], c = o.length; ++t < u;) {
      var a = e[t];
      i && ("length" == a || f(a, c)) || "constructor" == a && (r || !En.call(n, a)) || o.push(a);
    }

    return o;
  }

  function on(n) {
    return n ? u(n, en(n)) : [];
  }

  function cn(n) {
    return n;
  }

  function fn(t, r, e) {
    var u = en(r),
        o = b(r, u);
    null != e || X(r) && (o.length || !u.length) || (e = r, r = t, t = this, o = b(r, en(r)));
    var i = X(e) && "chain" in e ? e.chain : true,
        c = Q(t);
    return $n(o, function (e) {
      var u = r[e];
      t[e] = u, c && (t.prototype[e] = function () {
        var r = this.__chain__;

        if (i || r) {
          var e = t(this.__wrapped__);
          return (e.__actions__ = N(this.__actions__)).push({
            func: u,
            args: arguments,
            thisArg: t
          }), e.__chain__ = r, e;
        }

        return u.apply(t, n([this.value()], arguments));
      });
    }), t;
  }

  var an,
      ln = 1 / 0,
      pn = /[&<>"'`]/g,
      sn = RegExp(pn.source),
      hn = /^(?:0|[1-9]\d*)$/,
      vn = {
    "&": "&amp;",
    "<": "&lt;",
    ">": "&gt;",
    '"': "&quot;",
    "'": "&#39;",
    "`": "&#96;"
  },
      yn = {
    "function": true,
    object: true
  },
      _n = yn[ false ? undefined : _typeof(exports)] && exports && !exports.nodeType ? exports : an,
      gn = yn[ false ? undefined : _typeof(module)] && module && !module.nodeType ? module : an,
      bn = gn && gn.exports === _n ? _n : an,
      jn = o(yn[typeof self === "undefined" ? "undefined" : _typeof(self)] && self),
      mn = o(yn[typeof window === "undefined" ? "undefined" : _typeof(window)] && window),
      dn = o(yn[_typeof(this)] && this),
      wn = o(_n && gn && (typeof global === "undefined" ? "undefined" : _typeof(global)) == "object" && global) || mn !== (dn && dn.window) && mn || jn || dn || Function("return this")(),
      On = Array.prototype,
      xn = Object.prototype,
      En = xn.hasOwnProperty,
      An = 0,
      kn = xn.toString,
      Nn = wn._,
      Sn = wn.Reflect,
      Tn = Sn ? Sn.f : an,
      Fn = Object.create,
      Rn = xn.propertyIsEnumerable,
      Bn = wn.isFinite,
      Dn = Object.keys,
      In = Math.max,
      $n = function (n, t) {
    return function (r, e) {
      if (null == r) return r;
      if (!L(r)) return n(r, e);

      for (var u = r.length, o = t ? u : -1, i = Object(r); (t ? o-- : ++o < u) && false !== e(i[o], o, i);) {
        ;
      }

      return r;
    };
  }(g),
      qn = function (n) {
    return function (t, r, e) {
      var u = -1,
          o = Object(t);
      e = e(t);

      for (var i = e.length; i--;) {
        var c = e[n ? i : ++u];
        if (false === r(o[c], c, o)) break;
      }

      return t;
    };
  }();

  Tn && !Rn.call({
    valueOf: 1
  }, "valueOf") && (w = function w(n) {
    n = Tn(n);

    for (var t, r = []; !(t = n.next()).done;) {
      r.push(t.value);
    }

    return r;
  });
  var zn = A("length"),
      Cn = V(function (t, r) {
    return Pn(t) || (t = null == t ? [] : [Object(t)]), _(r, 1), n(N(t), on);
  }),
      Gn = V(function (n, t, r) {
    return D(n, t, r);
  }),
      Jn = V(function (n, t) {
    return h(n, 1, t);
  }),
      Mn = V(function (n, t, r) {
    return h(n, Vn(t) || 0, r);
  }),
      Pn = Array.isArray,
      Un = Number,
      Vn = Number,
      Hn = R(function (n, t) {
    F(t, en(t), n);
  }),
      Kn = R(function (n, t) {
    F(t, un(t), n);
  }),
      Ln = R(function (n, t, r, e) {
    F(t, un(t), n, e);
  }),
      Qn = V(function (n) {
    return n.push(an, p), Ln.apply(an, n);
  }),
      Wn = V(function (n, t) {
    return null == n ? {} : E(n, _(t, 1));
  }),
      Xn = d;
  l.prototype = s(a.prototype), l.prototype.constructor = l, a.assignIn = Kn, a.before = U, a.bind = Gn, a.chain = function (n) {
    return n = a(n), n.__chain__ = true, n;
  }, a.compact = function (n) {
    return y(n, Boolean);
  }, a.concat = Cn, a.create = function (n, t) {
    var r = s(n);
    return t ? Hn(r, t) : r;
  }, a.defaults = Qn, a.defer = Jn, a.delay = Mn, a.filter = function (n, t) {
    return y(n, d(t));
  }, a.flatten = function (n) {
    return n && n.length ? _(n, 1) : [];
  }, a.flattenDeep = function (n) {
    return n && n.length ? _(n, ln) : [];
  }, a.iteratee = Xn, a.keys = en, a.map = function (n, t) {
    return O(n, d(t));
  }, a.matches = function (n) {
    return x(Hn({}, n));
  }, a.mixin = fn, a.negate = function (n) {
    if (typeof n != "function") throw new TypeError("Expected a function");
    return function () {
      return !n.apply(this, arguments);
    };
  }, a.once = function (n) {
    return U(2, n);
  }, a.pick = Wn, a.slice = function (n, t, r) {
    var e = n ? n.length : 0;
    return r = r === an ? e : +r, e ? k(n, null == t ? 0 : +t, r) : [];
  }, a.sortBy = function (n, t) {
    var r = 0;
    return t = d(t), O(O(n, function (n, e, u) {
      return {
        c: n,
        b: r++,
        a: t(n, e, u)
      };
    }).sort(function (n, t) {
      var r;

      n: {
        r = n.a;
        var e = t.a;

        if (r !== e) {
          var u = null === r,
              o = r === an,
              i = r === r,
              c = null === e,
              f = e === an,
              a = e === e;

          if (r > e && !c || !i || u && !f && a || o && a) {
            r = 1;
            break n;
          }

          if (e > r && !u || !a || c && !o && i || f && i) {
            r = -1;
            break n;
          }
        }

        r = 0;
      }

      return r || n.b - t.b;
    }), A("c"));
  }, a.tap = function (n, t) {
    return t(n), n;
  }, a.thru = function (n, t) {
    return t(n);
  }, a.toArray = function (n) {
    return L(n) ? n.length ? N(n) : [] : on(n);
  }, a.values = on, a.extend = Kn, fn(a, a), a.clone = function (n) {
    return X(n) ? Pn(n) ? N(n) : F(n, en(n)) : n;
  }, a.escape = function (n) {
    return (n = rn(n)) && sn.test(n) ? n.replace(pn, i) : n;
  }, a.every = function (n, t, r) {
    return t = r ? an : t, v(n, d(t));
  }, a.find = J, a.forEach = M, a.has = function (n, t) {
    return null != n && En.call(n, t);
  }, a.head = G, a.identity = cn, a.indexOf = function (n, t, r) {
    var e = n ? n.length : 0;
    r = typeof r == "number" ? 0 > r ? In(e + r, 0) : r : 0, r = (r || 0) - 1;

    for (var u = t === t; ++r < e;) {
      var o = n[r];
      if (u ? o === t : o !== o) return r;
    }

    return -1;
  }, a.isArguments = K, a.isArray = Pn, a.isBoolean = function (n) {
    return true === n || false === n || Y(n) && "[object Boolean]" == kn.call(n);
  }, a.isDate = function (n) {
    return Y(n) && "[object Date]" == kn.call(n);
  }, a.isEmpty = function (n) {
    if (L(n) && (Pn(n) || nn(n) || Q(n.splice) || K(n))) return !n.length;

    for (var t in n) {
      if (En.call(n, t)) return false;
    }

    return true;
  }, a.isEqual = function (n, t) {
    return j(n, t);
  }, a.isFinite = function (n) {
    return typeof n == "number" && Bn(n);
  }, a.isFunction = Q, a.isNaN = function (n) {
    return Z(n) && n != +n;
  }, a.isNull = function (n) {
    return null === n;
  }, a.isNumber = Z, a.isObject = X, a.isRegExp = function (n) {
    return X(n) && "[object RegExp]" == kn.call(n);
  }, a.isString = nn, a.isUndefined = function (n) {
    return n === an;
  }, a.last = function (n) {
    var t = n ? n.length : 0;
    return t ? n[t - 1] : an;
  }, a.max = function (n) {
    return n && n.length ? t(n, cn, H) : an;
  }, a.min = function (n) {
    return n && n.length ? t(n, cn, tn) : an;
  }, a.noConflict = function () {
    return wn._ === this && (wn._ = Nn), this;
  }, a.noop = function () {}, a.reduce = P, a.result = function (n, t, r) {
    return t = null == n ? an : n[t], t === an && (t = r), Q(t) ? t.call(n) : t;
  }, a.size = function (n) {
    return null == n ? 0 : (n = L(n) ? n : en(n), n.length);
  }, a.some = function (n, t, r) {
    return t = r ? an : t, S(n, d(t));
  }, a.uniqueId = function (n) {
    var t = ++An;
    return rn(n) + t;
  }, a.each = M, a.first = G, fn(a, function () {
    var n = {};
    return g(a, function (t, r) {
      En.call(a.prototype, r) || (n[r] = t);
    }), n;
  }(), {
    chain: false
  }), a.VERSION = "4.5.1", $n("pop join replace reverse split push shift sort splice unshift".split(" "), function (n) {
    var t = (/^(?:replace|split)$/.test(n) ? String.prototype : On)[n],
        r = /^(?:push|sort|unshift)$/.test(n) ? "tap" : "thru",
        e = /^(?:pop|join|replace|shift)$/.test(n);

    a.prototype[n] = function () {
      var n = arguments;
      return e && !this.__chain__ ? t.apply(this.value(), n) : this[r](function (r) {
        return t.apply(r, n);
      });
    };
  }), a.prototype.toJSON = a.prototype.valueOf = a.prototype.value = function () {
    return T(this.__wrapped__, this.__actions__);
  }, (mn || jn || {})._ = a,  true && _typeof(__webpack_require__(/*! !webpack amd options */ "./node_modules/webpack/buildin/amd-options.js")) == "object" && __webpack_require__(/*! !webpack amd options */ "./node_modules/webpack/buildin/amd-options.js") ? !(__WEBPACK_AMD_DEFINE_RESULT__ = (function () {
    return a;
  }).call(exports, __webpack_require__, exports, module),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__)) : _n && gn ? (bn && ((gn.exports = a)._ = a), _n._ = a) : wn._ = a;
}).call(this);
/*
 * Debounce function
 * based on unminified version from http://davidwalsh.name/javascript-debounce-function
 */

theme.debounce = function (n, t, u) {
  var e;
  return function () {
    var a = this,
        r = arguments,
        i = function i() {
      e = null, u || n.apply(a, r);
    },
        o = u && !e;

    clearTimeout(e), e = setTimeout(i, t), o && n.apply(a, r);
  };
};

window.theme = window.theme || {};
/**
 * Image Helper Functions
 * -----------------------------------------------------------------------------
 * A collection of functions that help with basic image operations.
 *
 */

theme.Images = function () {
  /**
   * Preloads an image in memory and uses the browsers cache to store it until needed.
   *
   * @param {Array} images - A list of image urls
   * @param {String} size - A image size attribute
   */
  function preload(images, size) {
    if (typeof images === 'string') {
      images = [images];
    }

    for (var i = 0; i < images.length; i++) {
      var image = images[i];
      this.loadImage(this.getSizedImageUrl(image, size));
    }
  }
  /**
   * Loads and caches an image in the browsers cache.
   * @param {string} path - An image url
   */


  function loadImage(path) {
    new Image().src = path;
  }
  /**
   * Swaps the src of an image for another OR returns the imageURL to the callback function
   * @param image
   * @param element
   * @param callback
   */


  function switchImage(image, element, callback) {
    var size = this.imageSize(element.src);
    var imageUrl = this.getSizedImageUrl(image.src, size);

    if (callback) {
      callback(imageUrl, image, element); // eslint-disable-line callback-return
    } else {
      element.src = imageUrl;
    }
  }
  /**
   * +++ Useful
   * Find the image attribute size
   *
   * @param {string} src
   * @returns {null}
   */


  function imageSize(src) {
    var match = src.match(/.+_((?:pico|icon|thumb|small|compact|medium|large|grande)|\d{1,4}x\d{0,4}|x\d{1,4})[_\.@]/);

    if (match !== null) {
      return match[1];
    } else {
      return null;
    }
  }
  /**
   * +++ Useful
   * Adds a size attribute to a URL
   *
   * @param src
   * @param size
   * @returns {*}
   */


  function getSizedImageUrl(src, size) {
    if (size == null) {
      return src;
    }

    if (size === 'master') {
      return this.removeProtocol(src);
    }

    var match = src.match(/\.(jpg|jpeg|gif|png|bmp|bitmap|tiff|tif)(\?v=\d+)?$/i);

    if (match != null) {
      var prefix = src.split(match[0]);
      var suffix = match[0];
      return this.removeProtocol(prefix[0] + '_' + size + suffix);
    }

    return null;
  }

  function removeProtocol(path) {
    return path.replace(/http(s)?:/, '');
  }

  return {
    preload: preload,
    loadImage: loadImage,
    switchImage: switchImage,
    imageSize: imageSize,
    getSizedImageUrl: getSizedImageUrl,
    removeProtocol: removeProtocol
  };
}();

theme.Variants = function () {
  function Variants(options) {
    this.$container = options.$container;
    this.product = options.product;
    this.selectors = options.selectors;
    this.settings = options.settings;

    var currentOptions = this._getCurrentOptions();

    this.currentVariant = this._getVariantFromOptions(currentOptions);
    $(this.selectors.singleOptionSelector).on('change', this._onSelectChange.bind(this));
  }

  Variants.prototype = _.assignIn({}, Variants.prototype, {
    _getCurrentOptions: function _getCurrentOptions() {
      var options = _.map($(this.selectors.singleOptionSelector, this.$container), function (element) {
        var $element = $(element);
        var type = $element.attr('type');

        if (type === 'radio' || type === 'checkbox') {
          if ($element[0].checked) {
            return $element.val();
          } else {
            return false;
          }
        } else {
          return $element.val();
        }
      });

      options = _.filter(options);
      return options;
    },
    _getVariantFromOptions: function _getVariantFromOptions(selectedValues) {
      var variants = this.product.variants;

      var found = _.find(variants, function (variant) {
        return selectedValues.every(function (value) {
          return variant.options.indexOf(value) !== -1;
        });
      });

      return found;
    },
    _onSelectChange: function _onSelectChange() {
      var options = this._getCurrentOptions();

      var variant = this._getVariantFromOptions(options);

      this.$container.trigger({
        type: 'variantChange',
        variant: variant
      });

      if (!variant) {
        return;
      }

      if (variant.compare_at_price > variant.price) {
        $('.product-salelabel').removeClass('hide');
      } else {
        $('.product-salelabel').addClass('hide');
      }

      this._updateMasterSelect(variant);

      this._updateImages(variant);

      this._updatePrice(variant);

      this.currentVariant = variant;

      if (this.settings.enableHistoryState) {
        this._updateHistoryState(variant);
      }
    },
    _updateImages: function _updateImages(variant) {
      var variantImage = variant.featured_image || {};
      var currentVariantImage = this.currentVariant.featured_image || {};

      if (!variant.featured_image || variantImage.src === currentVariantImage.src) {
        return;
      }

      this.$container.trigger({
        type: 'variantImageChange',
        variant: variant
      });
    },
    _updatePrice: function _updatePrice(variant) {
      if (variant.price === this.currentVariant.price && variant.compare_at_price === this.currentVariant.compare_at_price) {
        return;
      }

      this.$container.trigger({
        type: 'variantPriceChange',
        variant: variant
      });
    },
    _updateHistoryState: function _updateHistoryState(variant) {
      if (!history.pushState || !variant) {
        return;
      }

      var newurl = window.location.protocol + '//' + window.location.host + window.location.pathname + '?variant=' + variant.id;
      window.history.replaceState({
        path: newurl
      }, '', newurl);
    },
    _updateMasterSelect: function _updateMasterSelect(variant) {
      var $originalSelector = $(this.selectors.originalSelectorId);

      if (variant.featured_image != null) {
        $('#ProductPhoto img').attr("src", variant.featured_image.src);
        $('#ProductPhoto img').attr("data-image-zoom", variant.featured_image.src);
        $('#ProductPhoto img').attr("data-zoom-image", variant.featured_image.src);
        $('.zoomContainer').remove();
        $("#ProductPhotoImg").removeData('elevateZoom');
        $("#ProductPhotoImg").removeData('zoomImage');
        $("#ProductPhotoImg").elevateZoom();
      }

      if (!variant) {
        return;
      }

      $originalSelector.find('[selected]').removeAttr('selected');
      $originalSelector.find('[value=' + variant.id + ']').attr('selected', 'selected');
    }
  });
  return Variants;
}();
/* ================ MODULES ================ */

/*!
handlebars v1.3.0

Copyright (C) 2011 by Yehuda Katz

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in
all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
THE SOFTWARE.

@license
*/


var Handlebars = function () {
  var e = function () {
    "use strict";

    function t(e) {
      this.string = e;
    }

    var e;

    t.prototype.toString = function () {
      return "" + this.string;
    };

    e = t;
    return e;
  }();

  var t = function (e) {
    "use strict";

    function o(e) {
      return r[e] || "&";
    }

    function u(e, t) {
      for (var n in t) {
        if (Object.prototype.hasOwnProperty.call(t, n)) {
          e[n] = t[n];
        }
      }
    }

    function c(e) {
      if (e instanceof n) {
        return e.toString();
      } else if (!e && e !== 0) {
        return "";
      }

      e = "" + e;

      if (!s.test(e)) {
        return e;
      }

      return e.replace(i, o);
    }

    function h(e) {
      if (!e && e !== 0) {
        return true;
      } else if (l(e) && e.length === 0) {
        return true;
      } else {
        return false;
      }
    }

    var t = {};
    var n = e;
    var r = {
      "&": "&",
      "<": "&lt;",
      ">": "&gt;",
      '"': "&quot;",
      "'": "&#x27;",
      "`": "&#x60;"
    };
    var i = /[&<>"'`]/g;
    var s = /[&<>"'`]/;
    t.extend = u;
    var a = Object.prototype.toString;
    t.toString = a;

    var f = function f(e) {
      return typeof e === "function";
    };

    if (f(/x/)) {
      f = function f(e) {
        return typeof e === "function" && a.call(e) === "[object Function]";
      };
    }

    var f;
    t.isFunction = f;

    var l = Array.isArray || function (e) {
      return e && _typeof(e) === "object" ? a.call(e) === "[object Array]" : false;
    };

    t.isArray = l;
    t.escapeExpression = c;
    t.isEmpty = h;
    return t;
  }(e);

  var n = function () {
    "use strict";

    function n(e, n) {
      var r;

      if (n && n.firstLine) {
        r = n.firstLine;
        e += " - " + r + ":" + n.firstColumn;
      }

      var i = Error.prototype.constructor.call(this, e);

      for (var s = 0; s < t.length; s++) {
        this[t[s]] = i[t[s]];
      }

      if (r) {
        this.lineNumber = r;
        this.column = n.firstColumn;
      }
    }

    var e;
    var t = ["description", "fileName", "lineNumber", "message", "name", "number", "stack"];
    n.prototype = new Error();
    e = n;
    return e;
  }();

  var r = function (e, t) {
    "use strict";

    function h(e, t) {
      this.helpers = e || {};
      this.partials = t || {};
      p(this);
    }

    function p(e) {
      e.registerHelper("helperMissing", function (e) {
        if (arguments.length === 2) {
          return undefined;
        } else {
          throw new i("Missing helper: '" + e + "'");
        }
      });
      e.registerHelper("blockHelperMissing", function (t, n) {
        var r = n.inverse || function () {},
            i = n.fn;

        if (f(t)) {
          t = t.call(this);
        }

        if (t === true) {
          return i(this);
        } else if (t === false || t == null) {
          return r(this);
        } else if (a(t)) {
          if (t.length > 0) {
            return e.helpers.each(t, n);
          } else {
            return r(this);
          }
        } else {
          return i(t);
        }
      });
      e.registerHelper("each", function (e, t) {
        var n = t.fn,
            r = t.inverse;
        var i = 0,
            s = "",
            o;

        if (f(e)) {
          e = e.call(this);
        }

        if (t.data) {
          o = m(t.data);
        }

        if (e && _typeof(e) === "object") {
          if (a(e)) {
            for (var u = e.length; i < u; i++) {
              if (o) {
                o.index = i;
                o.first = i === 0;
                o.last = i === e.length - 1;
              }

              s = s + n(e[i], {
                data: o
              });
            }
          } else {
            for (var l in e) {
              if (e.hasOwnProperty(l)) {
                if (o) {
                  o.key = l;
                  o.index = i;
                  o.first = i === 0;
                }

                s = s + n(e[l], {
                  data: o
                });
                i++;
              }
            }
          }
        }

        if (i === 0) {
          s = r(this);
        }

        return s;
      });
      e.registerHelper("if", function (e, t) {
        if (f(e)) {
          e = e.call(this);
        }

        if (!t.hash.includeZero && !e || r.isEmpty(e)) {
          return t.inverse(this);
        } else {
          return t.fn(this);
        }
      });
      e.registerHelper("unless", function (t, n) {
        return e.helpers["if"].call(this, t, {
          fn: n.inverse,
          inverse: n.fn,
          hash: n.hash
        });
      });
      e.registerHelper("with", function (e, t) {
        if (f(e)) {
          e = e.call(this);
        }

        if (!r.isEmpty(e)) return t.fn(e);
      });
      e.registerHelper("log", function (t, n) {
        var r = n.data && n.data.level != null ? parseInt(n.data.level, 10) : 1;
        e.log(r, t);
      });
    }

    function v(e, t) {
      d.log(e, t);
    }

    var n = {};
    var r = e;
    var i = t;
    var s = "1.3.0";
    n.VERSION = s;
    var o = 4;
    n.COMPILER_REVISION = o;
    var u = {
      1: "<= 1.0.rc.2",
      2: "== 1.0.0-rc.3",
      3: "== 1.0.0-rc.4",
      4: ">= 1.0.0"
    };
    n.REVISION_CHANGES = u;
    var a = r.isArray,
        f = r.isFunction,
        l = r.toString,
        c = "[object Object]";
    n.HandlebarsEnvironment = h;
    h.prototype = {
      constructor: h,
      logger: d,
      log: v,
      registerHelper: function registerHelper(e, t, n) {
        if (l.call(e) === c) {
          if (n || t) {
            throw new i("Arg not supported with multiple helpers");
          }

          r.extend(this.helpers, e);
        } else {
          if (n) {
            t.not = n;
          }

          this.helpers[e] = t;
        }
      },
      registerPartial: function registerPartial(e, t) {
        if (l.call(e) === c) {
          r.extend(this.partials, e);
        } else {
          this.partials[e] = t;
        }
      }
    };
    var d = {
      methodMap: {
        0: "debug",
        1: "info",
        2: "warn",
        3: "error"
      },
      DEBUG: 0,
      INFO: 1,
      WARN: 2,
      ERROR: 3,
      level: 3,
      log: function log(e, t) {
        if (d.level <= e) {
          var n = d.methodMap[e];

          if (typeof console !== "undefined" && console[n]) {
            console[n].call(console, t);
          }
        }
      }
    };
    n.logger = d;
    n.log = v;

    var m = function m(e) {
      var t = {};
      r.extend(t, e);
      return t;
    };

    n.createFrame = m;
    return n;
  }(t, n);

  var i = function (e, t, n) {
    "use strict";

    function a(e) {
      var t = e && e[0] || 1,
          n = o;

      if (t !== n) {
        if (t < n) {
          var r = u[n],
              i = u[t];
          throw new s("Template was precompiled with an older version of Handlebars than the current runtime. " + "Please update your precompiler to a newer version (" + r + ") or downgrade your runtime to an older version (" + i + ").");
        } else {
          throw new s("Template was precompiled with a newer version of Handlebars than the current runtime. " + "Please update your runtime to a newer version (" + e[1] + ").");
        }
      }
    }

    function f(e, t) {
      if (!t) {
        throw new s("No environment passed to template");
      }

      var n = function n(e, _n2, r, i, o, u) {
        var a = t.VM.invokePartial.apply(this, arguments);

        if (a != null) {
          return a;
        }

        if (t.compile) {
          var f = {
            helpers: i,
            partials: o,
            data: u
          };
          o[_n2] = t.compile(e, {
            data: u !== undefined
          }, t);
          return o[_n2](r, f);
        } else {
          throw new s("The partial " + _n2 + " could not be compiled when running in runtime-only mode");
        }
      };

      var r = {
        escapeExpression: i.escapeExpression,
        invokePartial: n,
        programs: [],
        program: function program(e, t, n) {
          var r = this.programs[e];

          if (n) {
            r = c(e, t, n);
          } else if (!r) {
            r = this.programs[e] = c(e, t);
          }

          return r;
        },
        merge: function merge(e, t) {
          var n = e || t;

          if (e && t && e !== t) {
            n = {};
            i.extend(n, t);
            i.extend(n, e);
          }

          return n;
        },
        programWithDepth: t.VM.programWithDepth,
        noop: t.VM.noop,
        compilerInfo: null
      };
      return function (n, i) {
        i = i || {};
        var s = i.partial ? i : t,
            o,
            u;

        if (!i.partial) {
          o = i.helpers;
          u = i.partials;
        }

        var a = e.call(r, s, n, o, u, i.data);

        if (!i.partial) {
          t.VM.checkRevision(r.compilerInfo);
        }

        return a;
      };
    }

    function l(e, t, n) {
      var r = Array.prototype.slice.call(arguments, 3);

      var i = function (_i) {
        function i(_x, _x2) {
          return _i.apply(this, arguments);
        }

        i.toString = function () {
          return _i.toString();
        };

        return i;
      }(function (e, i) {
        i = i || {};
        return t.apply(this, [e, i.data || n].concat(r));
      });

      i.program = e;
      i.depth = r.length;
      return i;
    }

    function c(e, t, n) {
      var r = function r(e, _r) {
        _r = _r || {};
        return t(e, _r.data || n);
      };

      r.program = e;
      r.depth = 0;
      return r;
    }

    function h(e, t, n, r, i, o) {
      var u = {
        partial: true,
        helpers: r,
        partials: i,
        data: o
      };

      if (e === undefined) {
        throw new s("The partial " + t + " could not be found");
      } else if (e instanceof Function) {
        return e(n, u);
      }
    }

    function p() {
      return "";
    }

    var r = {};
    var i = e;
    var s = t;
    var o = n.COMPILER_REVISION;
    var u = n.REVISION_CHANGES;
    r.checkRevision = a;
    r.template = f;
    r.programWithDepth = l;
    r.program = c;
    r.invokePartial = h;
    r.noop = p;
    return r;
  }(t, n, r);

  var s = function (e, t, n, r, i) {
    "use strict";

    var s;
    var o = e;
    var u = t;
    var a = n;
    var f = r;
    var l = i;

    var c = function c() {
      var e = new o.HandlebarsEnvironment();
      f.extend(e, o);
      e.SafeString = u;
      e.Exception = a;
      e.Utils = f;
      e.VM = l;

      e.template = function (t) {
        return l.template(t, e);
      };

      return e;
    };

    var h = c();
    h.create = c;
    s = h;
    return s;
  }(r, e, n, t, i);

  var o = function (e) {
    "use strict";

    function r(e) {
      e = e || {};
      this.firstLine = e.first_line;
      this.firstColumn = e.first_column;
      this.lastColumn = e.last_column;
      this.lastLine = e.last_line;
    }

    var t;
    var n = e;
    var i = {
      ProgramNode: function ProgramNode(e, t, n, s) {
        var o, u;

        if (arguments.length === 3) {
          s = n;
          n = null;
        } else if (arguments.length === 2) {
          s = t;
          t = null;
        }

        r.call(this, s);
        this.type = "program";
        this.statements = e;
        this.strip = {};

        if (n) {
          u = n[0];

          if (u) {
            o = {
              first_line: u.firstLine,
              last_line: u.lastLine,
              last_column: u.lastColumn,
              first_column: u.firstColumn
            };
            this.inverse = new i.ProgramNode(n, t, o);
          } else {
            this.inverse = new i.ProgramNode(n, t);
          }

          this.strip.right = t.left;
        } else if (t) {
          this.strip.left = t.right;
        }
      },
      MustacheNode: function MustacheNode(e, t, n, s, o) {
        r.call(this, o);
        this.type = "mustache";
        this.strip = s;

        if (n != null && n.charAt) {
          var u = n.charAt(3) || n.charAt(2);
          this.escaped = u !== "{" && u !== "&";
        } else {
          this.escaped = !!n;
        }

        if (e instanceof i.SexprNode) {
          this.sexpr = e;
        } else {
          this.sexpr = new i.SexprNode(e, t);
        }

        this.sexpr.isRoot = true;
        this.id = this.sexpr.id;
        this.params = this.sexpr.params;
        this.hash = this.sexpr.hash;
        this.eligibleHelper = this.sexpr.eligibleHelper;
        this.isHelper = this.sexpr.isHelper;
      },
      SexprNode: function SexprNode(e, t, n) {
        r.call(this, n);
        this.type = "sexpr";
        this.hash = t;
        var i = this.id = e[0];
        var s = this.params = e.slice(1);
        var o = this.eligibleHelper = i.isSimple;
        this.isHelper = o && (s.length || t);
      },
      PartialNode: function PartialNode(e, t, n, i) {
        r.call(this, i);
        this.type = "partial";
        this.partialName = e;
        this.context = t;
        this.strip = n;
      },
      BlockNode: function BlockNode(e, t, i, s, o) {
        r.call(this, o);

        if (e.sexpr.id.original !== s.path.original) {
          throw new n(e.sexpr.id.original + " doesn't match " + s.path.original, this);
        }

        this.type = "block";
        this.mustache = e;
        this.program = t;
        this.inverse = i;
        this.strip = {
          left: e.strip.left,
          right: s.strip.right
        };
        (t || i).strip.left = e.strip.right;
        (i || t).strip.right = s.strip.left;

        if (i && !t) {
          this.isInverse = true;
        }
      },
      ContentNode: function ContentNode(e, t) {
        r.call(this, t);
        this.type = "content";
        this.string = e;
      },
      HashNode: function HashNode(e, t) {
        r.call(this, t);
        this.type = "hash";
        this.pairs = e;
      },
      IdNode: function IdNode(e, t) {
        r.call(this, t);
        this.type = "ID";
        var i = "",
            s = [],
            o = 0;

        for (var u = 0, a = e.length; u < a; u++) {
          var f = e[u].part;
          i += (e[u].separator || "") + f;

          if (f === ".." || f === "." || f === "this") {
            if (s.length > 0) {
              throw new n("Invalid path: " + i, this);
            } else if (f === "..") {
              o++;
            } else {
              this.isScoped = true;
            }
          } else {
            s.push(f);
          }
        }

        this.original = i;
        this.parts = s;
        this.string = s.join(".");
        this.depth = o;
        this.isSimple = e.length === 1 && !this.isScoped && o === 0;
        this.stringModeValue = this.string;
      },
      PartialNameNode: function PartialNameNode(e, t) {
        r.call(this, t);
        this.type = "PARTIAL_NAME";
        this.name = e.original;
      },
      DataNode: function DataNode(e, t) {
        r.call(this, t);
        this.type = "DATA";
        this.id = e;
      },
      StringNode: function StringNode(e, t) {
        r.call(this, t);
        this.type = "STRING";
        this.original = this.string = this.stringModeValue = e;
      },
      IntegerNode: function IntegerNode(e, t) {
        r.call(this, t);
        this.type = "INTEGER";
        this.original = this.integer = e;
        this.stringModeValue = Number(e);
      },
      BooleanNode: function BooleanNode(e, t) {
        r.call(this, t);
        this.type = "BOOLEAN";
        this.bool = e;
        this.stringModeValue = e === "true";
      },
      CommentNode: function CommentNode(e, t) {
        r.call(this, t);
        this.type = "comment";
        this.comment = e;
      }
    };
    t = i;
    return t;
  }(n);

  var u = function () {
    "use strict";

    var e;

    var t = function () {
      function t(e, t) {
        return {
          left: e.charAt(2) === "~",
          right: t.charAt(0) === "~" || t.charAt(1) === "~"
        };
      }

      function r() {
        this.yy = {};
      }

      var e = {
        trace: function trace() {},
        yy: {},
        symbols_: {
          error: 2,
          root: 3,
          statements: 4,
          EOF: 5,
          program: 6,
          simpleInverse: 7,
          statement: 8,
          openInverse: 9,
          closeBlock: 10,
          openBlock: 11,
          mustache: 12,
          partial: 13,
          CONTENT: 14,
          COMMENT: 15,
          OPEN_BLOCK: 16,
          sexpr: 17,
          CLOSE: 18,
          OPEN_INVERSE: 19,
          OPEN_ENDBLOCK: 20,
          path: 21,
          OPEN: 22,
          OPEN_UNESCAPED: 23,
          CLOSE_UNESCAPED: 24,
          OPEN_PARTIAL: 25,
          partialName: 26,
          partial_option0: 27,
          sexpr_repetition0: 28,
          sexpr_option0: 29,
          dataName: 30,
          param: 31,
          STRING: 32,
          INTEGER: 33,
          BOOLEAN: 34,
          OPEN_SEXPR: 35,
          CLOSE_SEXPR: 36,
          hash: 37,
          hash_repetition_plus0: 38,
          hashSegment: 39,
          ID: 40,
          EQUALS: 41,
          DATA: 42,
          pathSegments: 43,
          SEP: 44,
          $accept: 0,
          $end: 1
        },
        terminals_: {
          2: "error",
          5: "EOF",
          14: "CONTENT",
          15: "COMMENT",
          16: "OPEN_BLOCK",
          18: "CLOSE",
          19: "OPEN_INVERSE",
          20: "OPEN_ENDBLOCK",
          22: "OPEN",
          23: "OPEN_UNESCAPED",
          24: "CLOSE_UNESCAPED",
          25: "OPEN_PARTIAL",
          32: "STRING",
          33: "INTEGER",
          34: "BOOLEAN",
          35: "OPEN_SEXPR",
          36: "CLOSE_SEXPR",
          40: "ID",
          41: "EQUALS",
          42: "DATA",
          44: "SEP"
        },
        productions_: [0, [3, 2], [3, 1], [6, 2], [6, 3], [6, 2], [6, 1], [6, 1], [6, 0], [4, 1], [4, 2], [8, 3], [8, 3], [8, 1], [8, 1], [8, 1], [8, 1], [11, 3], [9, 3], [10, 3], [12, 3], [12, 3], [13, 4], [7, 2], [17, 3], [17, 1], [31, 1], [31, 1], [31, 1], [31, 1], [31, 1], [31, 3], [37, 1], [39, 3], [26, 1], [26, 1], [26, 1], [30, 2], [21, 1], [43, 3], [43, 1], [27, 0], [27, 1], [28, 0], [28, 2], [29, 0], [29, 1], [38, 1], [38, 2]],
        performAction: function performAction(n, r, i, s, o, u, a) {
          var f = u.length - 1;

          switch (o) {
            case 1:
              return new s.ProgramNode(u[f - 1], this._$);
              break;

            case 2:
              return new s.ProgramNode([], this._$);
              break;

            case 3:
              this.$ = new s.ProgramNode([], u[f - 1], u[f], this._$);
              break;

            case 4:
              this.$ = new s.ProgramNode(u[f - 2], u[f - 1], u[f], this._$);
              break;

            case 5:
              this.$ = new s.ProgramNode(u[f - 1], u[f], [], this._$);
              break;

            case 6:
              this.$ = new s.ProgramNode(u[f], this._$);
              break;

            case 7:
              this.$ = new s.ProgramNode([], this._$);
              break;

            case 8:
              this.$ = new s.ProgramNode([], this._$);
              break;

            case 9:
              this.$ = [u[f]];
              break;

            case 10:
              u[f - 1].push(u[f]);
              this.$ = u[f - 1];
              break;

            case 11:
              this.$ = new s.BlockNode(u[f - 2], u[f - 1].inverse, u[f - 1], u[f], this._$);
              break;

            case 12:
              this.$ = new s.BlockNode(u[f - 2], u[f - 1], u[f - 1].inverse, u[f], this._$);
              break;

            case 13:
              this.$ = u[f];
              break;

            case 14:
              this.$ = u[f];
              break;

            case 15:
              this.$ = new s.ContentNode(u[f], this._$);
              break;

            case 16:
              this.$ = new s.CommentNode(u[f], this._$);
              break;

            case 17:
              this.$ = new s.MustacheNode(u[f - 1], null, u[f - 2], t(u[f - 2], u[f]), this._$);
              break;

            case 18:
              this.$ = new s.MustacheNode(u[f - 1], null, u[f - 2], t(u[f - 2], u[f]), this._$);
              break;

            case 19:
              this.$ = {
                path: u[f - 1],
                strip: t(u[f - 2], u[f])
              };
              break;

            case 20:
              this.$ = new s.MustacheNode(u[f - 1], null, u[f - 2], t(u[f - 2], u[f]), this._$);
              break;

            case 21:
              this.$ = new s.MustacheNode(u[f - 1], null, u[f - 2], t(u[f - 2], u[f]), this._$);
              break;

            case 22:
              this.$ = new s.PartialNode(u[f - 2], u[f - 1], t(u[f - 3], u[f]), this._$);
              break;

            case 23:
              this.$ = t(u[f - 1], u[f]);
              break;

            case 24:
              this.$ = new s.SexprNode([u[f - 2]].concat(u[f - 1]), u[f], this._$);
              break;

            case 25:
              this.$ = new s.SexprNode([u[f]], null, this._$);
              break;

            case 26:
              this.$ = u[f];
              break;

            case 27:
              this.$ = new s.StringNode(u[f], this._$);
              break;

            case 28:
              this.$ = new s.IntegerNode(u[f], this._$);
              break;

            case 29:
              this.$ = new s.BooleanNode(u[f], this._$);
              break;

            case 30:
              this.$ = u[f];
              break;

            case 31:
              u[f - 1].isHelper = true;
              this.$ = u[f - 1];
              break;

            case 32:
              this.$ = new s.HashNode(u[f], this._$);
              break;

            case 33:
              this.$ = [u[f - 2], u[f]];
              break;

            case 34:
              this.$ = new s.PartialNameNode(u[f], this._$);
              break;

            case 35:
              this.$ = new s.PartialNameNode(new s.StringNode(u[f], this._$), this._$);
              break;

            case 36:
              this.$ = new s.PartialNameNode(new s.IntegerNode(u[f], this._$));
              break;

            case 37:
              this.$ = new s.DataNode(u[f], this._$);
              break;

            case 38:
              this.$ = new s.IdNode(u[f], this._$);
              break;

            case 39:
              u[f - 2].push({
                part: u[f],
                separator: u[f - 1]
              });
              this.$ = u[f - 2];
              break;

            case 40:
              this.$ = [{
                part: u[f]
              }];
              break;

            case 43:
              this.$ = [];
              break;

            case 44:
              u[f - 1].push(u[f]);
              break;

            case 47:
              this.$ = [u[f]];
              break;

            case 48:
              u[f - 1].push(u[f]);
              break;
          }
        },
        table: [{
          3: 1,
          4: 2,
          5: [1, 3],
          8: 4,
          9: 5,
          11: 6,
          12: 7,
          13: 8,
          14: [1, 9],
          15: [1, 10],
          16: [1, 12],
          19: [1, 11],
          22: [1, 13],
          23: [1, 14],
          25: [1, 15]
        }, {
          1: [3]
        }, {
          5: [1, 16],
          8: 17,
          9: 5,
          11: 6,
          12: 7,
          13: 8,
          14: [1, 9],
          15: [1, 10],
          16: [1, 12],
          19: [1, 11],
          22: [1, 13],
          23: [1, 14],
          25: [1, 15]
        }, {
          1: [2, 2]
        }, {
          5: [2, 9],
          14: [2, 9],
          15: [2, 9],
          16: [2, 9],
          19: [2, 9],
          20: [2, 9],
          22: [2, 9],
          23: [2, 9],
          25: [2, 9]
        }, {
          4: 20,
          6: 18,
          7: 19,
          8: 4,
          9: 5,
          11: 6,
          12: 7,
          13: 8,
          14: [1, 9],
          15: [1, 10],
          16: [1, 12],
          19: [1, 21],
          20: [2, 8],
          22: [1, 13],
          23: [1, 14],
          25: [1, 15]
        }, {
          4: 20,
          6: 22,
          7: 19,
          8: 4,
          9: 5,
          11: 6,
          12: 7,
          13: 8,
          14: [1, 9],
          15: [1, 10],
          16: [1, 12],
          19: [1, 21],
          20: [2, 8],
          22: [1, 13],
          23: [1, 14],
          25: [1, 15]
        }, {
          5: [2, 13],
          14: [2, 13],
          15: [2, 13],
          16: [2, 13],
          19: [2, 13],
          20: [2, 13],
          22: [2, 13],
          23: [2, 13],
          25: [2, 13]
        }, {
          5: [2, 14],
          14: [2, 14],
          15: [2, 14],
          16: [2, 14],
          19: [2, 14],
          20: [2, 14],
          22: [2, 14],
          23: [2, 14],
          25: [2, 14]
        }, {
          5: [2, 15],
          14: [2, 15],
          15: [2, 15],
          16: [2, 15],
          19: [2, 15],
          20: [2, 15],
          22: [2, 15],
          23: [2, 15],
          25: [2, 15]
        }, {
          5: [2, 16],
          14: [2, 16],
          15: [2, 16],
          16: [2, 16],
          19: [2, 16],
          20: [2, 16],
          22: [2, 16],
          23: [2, 16],
          25: [2, 16]
        }, {
          17: 23,
          21: 24,
          30: 25,
          40: [1, 28],
          42: [1, 27],
          43: 26
        }, {
          17: 29,
          21: 24,
          30: 25,
          40: [1, 28],
          42: [1, 27],
          43: 26
        }, {
          17: 30,
          21: 24,
          30: 25,
          40: [1, 28],
          42: [1, 27],
          43: 26
        }, {
          17: 31,
          21: 24,
          30: 25,
          40: [1, 28],
          42: [1, 27],
          43: 26
        }, {
          21: 33,
          26: 32,
          32: [1, 34],
          33: [1, 35],
          40: [1, 28],
          43: 26
        }, {
          1: [2, 1]
        }, {
          5: [2, 10],
          14: [2, 10],
          15: [2, 10],
          16: [2, 10],
          19: [2, 10],
          20: [2, 10],
          22: [2, 10],
          23: [2, 10],
          25: [2, 10]
        }, {
          10: 36,
          20: [1, 37]
        }, {
          4: 38,
          8: 4,
          9: 5,
          11: 6,
          12: 7,
          13: 8,
          14: [1, 9],
          15: [1, 10],
          16: [1, 12],
          19: [1, 11],
          20: [2, 7],
          22: [1, 13],
          23: [1, 14],
          25: [1, 15]
        }, {
          7: 39,
          8: 17,
          9: 5,
          11: 6,
          12: 7,
          13: 8,
          14: [1, 9],
          15: [1, 10],
          16: [1, 12],
          19: [1, 21],
          20: [2, 6],
          22: [1, 13],
          23: [1, 14],
          25: [1, 15]
        }, {
          17: 23,
          18: [1, 40],
          21: 24,
          30: 25,
          40: [1, 28],
          42: [1, 27],
          43: 26
        }, {
          10: 41,
          20: [1, 37]
        }, {
          18: [1, 42]
        }, {
          18: [2, 43],
          24: [2, 43],
          28: 43,
          32: [2, 43],
          33: [2, 43],
          34: [2, 43],
          35: [2, 43],
          36: [2, 43],
          40: [2, 43],
          42: [2, 43]
        }, {
          18: [2, 25],
          24: [2, 25],
          36: [2, 25]
        }, {
          18: [2, 38],
          24: [2, 38],
          32: [2, 38],
          33: [2, 38],
          34: [2, 38],
          35: [2, 38],
          36: [2, 38],
          40: [2, 38],
          42: [2, 38],
          44: [1, 44]
        }, {
          21: 45,
          40: [1, 28],
          43: 26
        }, {
          18: [2, 40],
          24: [2, 40],
          32: [2, 40],
          33: [2, 40],
          34: [2, 40],
          35: [2, 40],
          36: [2, 40],
          40: [2, 40],
          42: [2, 40],
          44: [2, 40]
        }, {
          18: [1, 46]
        }, {
          18: [1, 47]
        }, {
          24: [1, 48]
        }, {
          18: [2, 41],
          21: 50,
          27: 49,
          40: [1, 28],
          43: 26
        }, {
          18: [2, 34],
          40: [2, 34]
        }, {
          18: [2, 35],
          40: [2, 35]
        }, {
          18: [2, 36],
          40: [2, 36]
        }, {
          5: [2, 11],
          14: [2, 11],
          15: [2, 11],
          16: [2, 11],
          19: [2, 11],
          20: [2, 11],
          22: [2, 11],
          23: [2, 11],
          25: [2, 11]
        }, {
          21: 51,
          40: [1, 28],
          43: 26
        }, {
          8: 17,
          9: 5,
          11: 6,
          12: 7,
          13: 8,
          14: [1, 9],
          15: [1, 10],
          16: [1, 12],
          19: [1, 11],
          20: [2, 3],
          22: [1, 13],
          23: [1, 14],
          25: [1, 15]
        }, {
          4: 52,
          8: 4,
          9: 5,
          11: 6,
          12: 7,
          13: 8,
          14: [1, 9],
          15: [1, 10],
          16: [1, 12],
          19: [1, 11],
          20: [2, 5],
          22: [1, 13],
          23: [1, 14],
          25: [1, 15]
        }, {
          14: [2, 23],
          15: [2, 23],
          16: [2, 23],
          19: [2, 23],
          20: [2, 23],
          22: [2, 23],
          23: [2, 23],
          25: [2, 23]
        }, {
          5: [2, 12],
          14: [2, 12],
          15: [2, 12],
          16: [2, 12],
          19: [2, 12],
          20: [2, 12],
          22: [2, 12],
          23: [2, 12],
          25: [2, 12]
        }, {
          14: [2, 18],
          15: [2, 18],
          16: [2, 18],
          19: [2, 18],
          20: [2, 18],
          22: [2, 18],
          23: [2, 18],
          25: [2, 18]
        }, {
          18: [2, 45],
          21: 56,
          24: [2, 45],
          29: 53,
          30: 60,
          31: 54,
          32: [1, 57],
          33: [1, 58],
          34: [1, 59],
          35: [1, 61],
          36: [2, 45],
          37: 55,
          38: 62,
          39: 63,
          40: [1, 64],
          42: [1, 27],
          43: 26
        }, {
          40: [1, 65]
        }, {
          18: [2, 37],
          24: [2, 37],
          32: [2, 37],
          33: [2, 37],
          34: [2, 37],
          35: [2, 37],
          36: [2, 37],
          40: [2, 37],
          42: [2, 37]
        }, {
          14: [2, 17],
          15: [2, 17],
          16: [2, 17],
          19: [2, 17],
          20: [2, 17],
          22: [2, 17],
          23: [2, 17],
          25: [2, 17]
        }, {
          5: [2, 20],
          14: [2, 20],
          15: [2, 20],
          16: [2, 20],
          19: [2, 20],
          20: [2, 20],
          22: [2, 20],
          23: [2, 20],
          25: [2, 20]
        }, {
          5: [2, 21],
          14: [2, 21],
          15: [2, 21],
          16: [2, 21],
          19: [2, 21],
          20: [2, 21],
          22: [2, 21],
          23: [2, 21],
          25: [2, 21]
        }, {
          18: [1, 66]
        }, {
          18: [2, 42]
        }, {
          18: [1, 67]
        }, {
          8: 17,
          9: 5,
          11: 6,
          12: 7,
          13: 8,
          14: [1, 9],
          15: [1, 10],
          16: [1, 12],
          19: [1, 11],
          20: [2, 4],
          22: [1, 13],
          23: [1, 14],
          25: [1, 15]
        }, {
          18: [2, 24],
          24: [2, 24],
          36: [2, 24]
        }, {
          18: [2, 44],
          24: [2, 44],
          32: [2, 44],
          33: [2, 44],
          34: [2, 44],
          35: [2, 44],
          36: [2, 44],
          40: [2, 44],
          42: [2, 44]
        }, {
          18: [2, 46],
          24: [2, 46],
          36: [2, 46]
        }, {
          18: [2, 26],
          24: [2, 26],
          32: [2, 26],
          33: [2, 26],
          34: [2, 26],
          35: [2, 26],
          36: [2, 26],
          40: [2, 26],
          42: [2, 26]
        }, {
          18: [2, 27],
          24: [2, 27],
          32: [2, 27],
          33: [2, 27],
          34: [2, 27],
          35: [2, 27],
          36: [2, 27],
          40: [2, 27],
          42: [2, 27]
        }, {
          18: [2, 28],
          24: [2, 28],
          32: [2, 28],
          33: [2, 28],
          34: [2, 28],
          35: [2, 28],
          36: [2, 28],
          40: [2, 28],
          42: [2, 28]
        }, {
          18: [2, 29],
          24: [2, 29],
          32: [2, 29],
          33: [2, 29],
          34: [2, 29],
          35: [2, 29],
          36: [2, 29],
          40: [2, 29],
          42: [2, 29]
        }, {
          18: [2, 30],
          24: [2, 30],
          32: [2, 30],
          33: [2, 30],
          34: [2, 30],
          35: [2, 30],
          36: [2, 30],
          40: [2, 30],
          42: [2, 30]
        }, {
          17: 68,
          21: 24,
          30: 25,
          40: [1, 28],
          42: [1, 27],
          43: 26
        }, {
          18: [2, 32],
          24: [2, 32],
          36: [2, 32],
          39: 69,
          40: [1, 70]
        }, {
          18: [2, 47],
          24: [2, 47],
          36: [2, 47],
          40: [2, 47]
        }, {
          18: [2, 40],
          24: [2, 40],
          32: [2, 40],
          33: [2, 40],
          34: [2, 40],
          35: [2, 40],
          36: [2, 40],
          40: [2, 40],
          41: [1, 71],
          42: [2, 40],
          44: [2, 40]
        }, {
          18: [2, 39],
          24: [2, 39],
          32: [2, 39],
          33: [2, 39],
          34: [2, 39],
          35: [2, 39],
          36: [2, 39],
          40: [2, 39],
          42: [2, 39],
          44: [2, 39]
        }, {
          5: [2, 22],
          14: [2, 22],
          15: [2, 22],
          16: [2, 22],
          19: [2, 22],
          20: [2, 22],
          22: [2, 22],
          23: [2, 22],
          25: [2, 22]
        }, {
          5: [2, 19],
          14: [2, 19],
          15: [2, 19],
          16: [2, 19],
          19: [2, 19],
          20: [2, 19],
          22: [2, 19],
          23: [2, 19],
          25: [2, 19]
        }, {
          36: [1, 72]
        }, {
          18: [2, 48],
          24: [2, 48],
          36: [2, 48],
          40: [2, 48]
        }, {
          41: [1, 71]
        }, {
          21: 56,
          30: 60,
          31: 73,
          32: [1, 57],
          33: [1, 58],
          34: [1, 59],
          35: [1, 61],
          40: [1, 28],
          42: [1, 27],
          43: 26
        }, {
          18: [2, 31],
          24: [2, 31],
          32: [2, 31],
          33: [2, 31],
          34: [2, 31],
          35: [2, 31],
          36: [2, 31],
          40: [2, 31],
          42: [2, 31]
        }, {
          18: [2, 33],
          24: [2, 33],
          36: [2, 33],
          40: [2, 33]
        }],
        defaultActions: {
          3: [2, 2],
          16: [2, 1],
          50: [2, 42]
        },
        parseError: function parseError(t, n) {
          throw new Error(t);
        },
        parse: function parse(t) {
          function v(e) {
            r.length = r.length - 2 * e;
            i.length = i.length - e;
            s.length = s.length - e;
          }

          function m() {
            var e;
            e = n.lexer.lex() || 1;

            if (typeof e !== "number") {
              e = n.symbols_[e] || e;
            }

            return e;
          }

          var n = this,
              r = [0],
              i = [null],
              s = [],
              o = this.table,
              u = "",
              a = 0,
              f = 0,
              l = 0,
              c = 2,
              h = 1;
          this.lexer.setInput(t);
          this.lexer.yy = this.yy;
          this.yy.lexer = this.lexer;
          this.yy.parser = this;
          if (typeof this.lexer.yylloc == "undefined") this.lexer.yylloc = {};
          var p = this.lexer.yylloc;
          s.push(p);
          var d = this.lexer.options && this.lexer.options.ranges;
          if (typeof this.yy.parseError === "function") this.parseError = this.yy.parseError;
          var g,
              y,
              b,
              w,
              E,
              S,
              x = {},
              T,
              N,
              C,
              k;

          while (true) {
            b = r[r.length - 1];

            if (this.defaultActions[b]) {
              w = this.defaultActions[b];
            } else {
              if (g === null || typeof g == "undefined") {
                g = m();
              }

              w = o[b] && o[b][g];
            }

            if (typeof w === "undefined" || !w.length || !w[0]) {
              var L = "";

              if (!l) {
                k = [];

                for (T in o[b]) {
                  if (this.terminals_[T] && T > 2) {
                    k.push("'" + this.terminals_[T] + "'");
                  }
                }

                if (this.lexer.showPosition) {
                  L = "Parse error on line " + (a + 1) + ":\n" + this.lexer.showPosition() + "\nExpecting " + k.join(", ") + ", got '" + (this.terminals_[g] || g) + "'";
                } else {
                  L = "Parse error on line " + (a + 1) + ": Unexpected " + (g == 1 ? "end of input" : "'" + (this.terminals_[g] || g) + "'");
                }

                this.parseError(L, {
                  text: this.lexer.match,
                  token: this.terminals_[g] || g,
                  line: this.lexer.yylineno,
                  loc: p,
                  expected: k
                });
              }
            }

            if (w[0] instanceof Array && w.length > 1) {
              throw new Error("Parse Error: multiple actions possible at state: " + b + ", token: " + g);
            }

            switch (w[0]) {
              case 1:
                r.push(g);
                i.push(this.lexer.yytext);
                s.push(this.lexer.yylloc);
                r.push(w[1]);
                g = null;

                if (!y) {
                  f = this.lexer.yyleng;
                  u = this.lexer.yytext;
                  a = this.lexer.yylineno;
                  p = this.lexer.yylloc;
                  if (l > 0) l--;
                } else {
                  g = y;
                  y = null;
                }

                break;

              case 2:
                N = this.productions_[w[1]][1];
                x.$ = i[i.length - N];
                x._$ = {
                  first_line: s[s.length - (N || 1)].first_line,
                  last_line: s[s.length - 1].last_line,
                  first_column: s[s.length - (N || 1)].first_column,
                  last_column: s[s.length - 1].last_column
                };

                if (d) {
                  x._$.range = [s[s.length - (N || 1)].range[0], s[s.length - 1].range[1]];
                }

                S = this.performAction.call(x, u, f, a, this.yy, w[1], i, s);

                if (typeof S !== "undefined") {
                  return S;
                }

                if (N) {
                  r = r.slice(0, -1 * N * 2);
                  i = i.slice(0, -1 * N);
                  s = s.slice(0, -1 * N);
                }

                r.push(this.productions_[w[1]][0]);
                i.push(x.$);
                s.push(x._$);
                C = o[r[r.length - 2]][r[r.length - 1]];
                r.push(C);
                break;

              case 3:
                return true;
            }
          }

          return true;
        }
      };

      var n = function () {
        var e = {
          EOF: 1,
          parseError: function parseError(t, n) {
            if (this.yy.parser) {
              this.yy.parser.parseError(t, n);
            } else {
              throw new Error(t);
            }
          },
          setInput: function setInput(e) {
            this._input = e;
            this._more = this._less = this.done = false;
            this.yylineno = this.yyleng = 0;
            this.yytext = this.matched = this.match = "";
            this.conditionStack = ["INITIAL"];
            this.yylloc = {
              first_line: 1,
              first_column: 0,
              last_line: 1,
              last_column: 0
            };
            if (this.options.ranges) this.yylloc.range = [0, 0];
            this.offset = 0;
            return this;
          },
          input: function input() {
            var e = this._input[0];
            this.yytext += e;
            this.yyleng++;
            this.offset++;
            this.match += e;
            this.matched += e;
            var t = e.match(/(?:\r\n?|\n).*/g);

            if (t) {
              this.yylineno++;
              this.yylloc.last_line++;
            } else {
              this.yylloc.last_column++;
            }

            if (this.options.ranges) this.yylloc.range[1]++;
            this._input = this._input.slice(1);
            return e;
          },
          unput: function unput(e) {
            var t = e.length;
            var n = e.split(/(?:\r\n?|\n)/g);
            this._input = e + this._input;
            this.yytext = this.yytext.substr(0, this.yytext.length - t - 1);
            this.offset -= t;
            var r = this.match.split(/(?:\r\n?|\n)/g);
            this.match = this.match.substr(0, this.match.length - 1);
            this.matched = this.matched.substr(0, this.matched.length - 1);
            if (n.length - 1) this.yylineno -= n.length - 1;
            var i = this.yylloc.range;
            this.yylloc = {
              first_line: this.yylloc.first_line,
              last_line: this.yylineno + 1,
              first_column: this.yylloc.first_column,
              last_column: n ? (n.length === r.length ? this.yylloc.first_column : 0) + r[r.length - n.length].length - n[0].length : this.yylloc.first_column - t
            };

            if (this.options.ranges) {
              this.yylloc.range = [i[0], i[0] + this.yyleng - t];
            }

            return this;
          },
          more: function more() {
            this._more = true;
            return this;
          },
          less: function less(e) {
            this.unput(this.match.slice(e));
          },
          pastInput: function pastInput() {
            var e = this.matched.substr(0, this.matched.length - this.match.length);
            return (e.length > 20 ? "..." : "") + e.substr(-20).replace(/\n/g, "");
          },
          upcomingInput: function upcomingInput() {
            var e = this.match;

            if (e.length < 20) {
              e += this._input.substr(0, 20 - e.length);
            }

            return (e.substr(0, 20) + (e.length > 20 ? "..." : "")).replace(/\n/g, "");
          },
          showPosition: function showPosition() {
            var e = this.pastInput();
            var t = new Array(e.length + 1).join("-");
            return e + this.upcomingInput() + "\n" + t + "^";
          },
          next: function next() {
            if (this.done) {
              return this.EOF;
            }

            if (!this._input) this.done = true;
            var e, t, n, r, i, s;

            if (!this._more) {
              this.yytext = "";
              this.match = "";
            }

            var o = this._currentRules();

            for (var u = 0; u < o.length; u++) {
              n = this._input.match(this.rules[o[u]]);

              if (n && (!t || n[0].length > t[0].length)) {
                t = n;
                r = u;
                if (!this.options.flex) break;
              }
            }

            if (t) {
              s = t[0].match(/(?:\r\n?|\n).*/g);
              if (s) this.yylineno += s.length;
              this.yylloc = {
                first_line: this.yylloc.last_line,
                last_line: this.yylineno + 1,
                first_column: this.yylloc.last_column,
                last_column: s ? s[s.length - 1].length - s[s.length - 1].match(/\r?\n?/)[0].length : this.yylloc.last_column + t[0].length
              };
              this.yytext += t[0];
              this.match += t[0];
              this.matches = t;
              this.yyleng = this.yytext.length;

              if (this.options.ranges) {
                this.yylloc.range = [this.offset, this.offset += this.yyleng];
              }

              this._more = false;
              this._input = this._input.slice(t[0].length);
              this.matched += t[0];
              e = this.performAction.call(this, this.yy, this, o[r], this.conditionStack[this.conditionStack.length - 1]);
              if (this.done && this._input) this.done = false;
              if (e) return e;else return;
            }

            if (this._input === "") {
              return this.EOF;
            } else {
              return this.parseError("Lexical error on line " + (this.yylineno + 1) + ". Unrecognized text.\n" + this.showPosition(), {
                text: "",
                token: null,
                line: this.yylineno
              });
            }
          },
          lex: function lex() {
            var t = this.next();

            if (typeof t !== "undefined") {
              return t;
            } else {
              return this.lex();
            }
          },
          begin: function begin(t) {
            this.conditionStack.push(t);
          },
          popState: function popState() {
            return this.conditionStack.pop();
          },
          _currentRules: function _currentRules() {
            return this.conditions[this.conditionStack[this.conditionStack.length - 1]].rules;
          },
          topState: function topState() {
            return this.conditionStack[this.conditionStack.length - 2];
          },
          pushState: function pushState(t) {
            this.begin(t);
          }
        };
        e.options = {};

        e.performAction = function (t, n, r, i) {
          function s(e, t) {
            return n.yytext = n.yytext.substr(e, n.yyleng - t);
          }

          var o = i;

          switch (r) {
            case 0:
              if (n.yytext.slice(-2) === "\\\\") {
                s(0, 1);
                this.begin("mu");
              } else if (n.yytext.slice(-1) === "\\") {
                s(0, 1);
                this.begin("emu");
              } else {
                this.begin("mu");
              }

              if (n.yytext) return 14;
              break;

            case 1:
              return 14;
              break;

            case 2:
              this.popState();
              return 14;
              break;

            case 3:
              s(0, 4);
              this.popState();
              return 15;
              break;

            case 4:
              return 35;
              break;

            case 5:
              return 36;
              break;

            case 6:
              return 25;
              break;

            case 7:
              return 16;
              break;

            case 8:
              return 20;
              break;

            case 9:
              return 19;
              break;

            case 10:
              return 19;
              break;

            case 11:
              return 23;
              break;

            case 12:
              return 22;
              break;

            case 13:
              this.popState();
              this.begin("com");
              break;

            case 14:
              s(3, 5);
              this.popState();
              return 15;
              break;

            case 15:
              return 22;
              break;

            case 16:
              return 41;
              break;

            case 17:
              return 40;
              break;

            case 18:
              return 40;
              break;

            case 19:
              return 44;
              break;

            case 20:
              break;

            case 21:
              this.popState();
              return 24;
              break;

            case 22:
              this.popState();
              return 18;
              break;

            case 23:
              n.yytext = s(1, 2).replace(/\\"/g, '"');
              return 32;
              break;

            case 24:
              n.yytext = s(1, 2).replace(/\\'/g, "'");
              return 32;
              break;

            case 25:
              return 42;
              break;

            case 26:
              return 34;
              break;

            case 27:
              return 34;
              break;

            case 28:
              return 33;
              break;

            case 29:
              return 40;
              break;

            case 30:
              n.yytext = s(1, 2);
              return 40;
              break;

            case 31:
              return "INVALID";
              break;

            case 32:
              return 5;
              break;
          }
        };

        e.rules = [/^(?:[^\x00]*?(?=(\{\{)))/, /^(?:[^\x00]+)/, /^(?:[^\x00]{2,}?(?=(\{\{|\\\{\{|\\\\\{\{|$)))/, /^(?:[\s\S]*?--\}\})/, /^(?:\()/, /^(?:\))/, /^(?:\{\{(~)?>)/, /^(?:\{\{(~)?#)/, /^(?:\{\{(~)?\/)/, /^(?:\{\{(~)?\^)/, /^(?:\{\{(~)?\s*else\b)/, /^(?:\{\{(~)?\{)/, /^(?:\{\{(~)?&)/, /^(?:\{\{!--)/, /^(?:\{\{![\s\S]*?\}\})/, /^(?:\{\{(~)?)/, /^(?:=)/, /^(?:\.\.)/, /^(?:\.(?=([=~}\s\/.)])))/, /^(?:[\/.])/, /^(?:\s+)/, /^(?:\}(~)?\}\})/, /^(?:(~)?\}\})/, /^(?:"(\\["]|[^"])*")/, /^(?:'(\\[']|[^'])*')/, /^(?:@)/, /^(?:true(?=([~}\s)])))/, /^(?:false(?=([~}\s)])))/, /^(?:-?[0-9]+(?=([~}\s)])))/, /^(?:([^\s!"#%-,\.\/;->@\[-\^`\{-~]+(?=([=~}\s\/.)]))))/, /^(?:\[[^\]]*\])/, /^(?:.)/, /^(?:$)/];
        e.conditions = {
          mu: {
            rules: [4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32],
            inclusive: false
          },
          emu: {
            rules: [2],
            inclusive: false
          },
          com: {
            rules: [3],
            inclusive: false
          },
          INITIAL: {
            rules: [0, 1, 32],
            inclusive: true
          }
        };
        return e;
      }();

      e.lexer = n;
      r.prototype = e;
      e.Parser = r;
      return new r();
    }();

    e = t;
    return e;
  }();

  var a = function (e, t) {
    "use strict";

    function s(e) {
      if (e.constructor === i.ProgramNode) {
        return e;
      }

      r.yy = i;
      return r.parse(e);
    }

    var n = {};
    var r = e;
    var i = t;
    n.parser = r;
    n.parse = s;
    return n;
  }(u, o);

  var f = function (e) {
    "use strict";

    function r() {}

    function i(e, t, r) {
      if (e == null || typeof e !== "string" && e.constructor !== r.AST.ProgramNode) {
        throw new n("You must pass a string or Handlebars AST to Handlebars.precompile. You passed " + e);
      }

      t = t || {};

      if (!("data" in t)) {
        t.data = true;
      }

      var i = r.parse(e);
      var s = new r.Compiler().compile(i, t);
      return new r.JavaScriptCompiler().compile(s, t);
    }

    function s(e, t, r) {
      function s() {
        var n = r.parse(e);
        var i = new r.Compiler().compile(n, t);
        var s = new r.JavaScriptCompiler().compile(i, t, undefined, true);
        return r.template(s);
      }

      if (e == null || typeof e !== "string" && e.constructor !== r.AST.ProgramNode) {
        throw new n("You must pass a string or Handlebars AST to Handlebars.compile. You passed " + e);
      }

      t = t || {};

      if (!("data" in t)) {
        t.data = true;
      }

      var i;
      return function (e, t) {
        if (!i) {
          i = s();
        }

        return i.call(this, e, t);
      };
    }

    var t = {};
    var n = e;
    t.Compiler = r;
    r.prototype = {
      compiler: r,
      disassemble: function disassemble() {
        var e = this.opcodes,
            t,
            n = [],
            r,
            i;

        for (var s = 0, o = e.length; s < o; s++) {
          t = e[s];

          if (t.opcode === "DECLARE") {
            n.push("DECLARE " + t.name + "=" + t.value);
          } else {
            r = [];

            for (var u = 0; u < t.args.length; u++) {
              i = t.args[u];

              if (typeof i === "string") {
                i = '"' + i.replace("\n", "\\n") + '"';
              }

              r.push(i);
            }

            n.push(t.opcode + " " + r.join(" "));
          }
        }

        return n.join("\n");
      },
      equals: function equals(e) {
        var t = this.opcodes.length;

        if (e.opcodes.length !== t) {
          return false;
        }

        for (var n = 0; n < t; n++) {
          var r = this.opcodes[n],
              i = e.opcodes[n];

          if (r.opcode !== i.opcode || r.args.length !== i.args.length) {
            return false;
          }

          for (var s = 0; s < r.args.length; s++) {
            if (r.args[s] !== i.args[s]) {
              return false;
            }
          }
        }

        t = this.children.length;

        if (e.children.length !== t) {
          return false;
        }

        for (n = 0; n < t; n++) {
          if (!this.children[n].equals(e.children[n])) {
            return false;
          }
        }

        return true;
      },
      guid: 0,
      compile: function compile(e, t) {
        this.opcodes = [];
        this.children = [];
        this.depths = {
          list: []
        };
        this.options = t;
        var n = this.options.knownHelpers;
        this.options.knownHelpers = {
          helperMissing: true,
          blockHelperMissing: true,
          each: true,
          "if": true,
          unless: true,
          "with": true,
          log: true
        };

        if (n) {
          for (var r in n) {
            this.options.knownHelpers[r] = n[r];
          }
        }

        return this.accept(e);
      },
      accept: function accept(e) {
        var t = e.strip || {},
            n;

        if (t.left) {
          this.opcode("strip");
        }

        n = this[e.type](e);

        if (t.right) {
          this.opcode("strip");
        }

        return n;
      },
      program: function program(e) {
        var t = e.statements;

        for (var n = 0, r = t.length; n < r; n++) {
          this.accept(t[n]);
        }

        this.isSimple = r === 1;
        this.depths.list = this.depths.list.sort(function (e, t) {
          return e - t;
        });
        return this;
      },
      compileProgram: function compileProgram(e) {
        var t = new this.compiler().compile(e, this.options);
        var n = this.guid++,
            r;
        this.usePartial = this.usePartial || t.usePartial;
        this.children[n] = t;

        for (var i = 0, s = t.depths.list.length; i < s; i++) {
          r = t.depths.list[i];

          if (r < 2) {
            continue;
          } else {
            this.addDepth(r - 1);
          }
        }

        return n;
      },
      block: function block(e) {
        var t = e.mustache,
            n = e.program,
            r = e.inverse;

        if (n) {
          n = this.compileProgram(n);
        }

        if (r) {
          r = this.compileProgram(r);
        }

        var i = t.sexpr;
        var s = this.classifySexpr(i);

        if (s === "helper") {
          this.helperSexpr(i, n, r);
        } else if (s === "simple") {
          this.simpleSexpr(i);
          this.opcode("pushProgram", n);
          this.opcode("pushProgram", r);
          this.opcode("emptyHash");
          this.opcode("blockValue");
        } else {
          this.ambiguousSexpr(i, n, r);
          this.opcode("pushProgram", n);
          this.opcode("pushProgram", r);
          this.opcode("emptyHash");
          this.opcode("ambiguousBlockValue");
        }

        this.opcode("append");
      },
      hash: function hash(e) {
        var t = e.pairs,
            n,
            r;
        this.opcode("pushHash");

        for (var i = 0, s = t.length; i < s; i++) {
          n = t[i];
          r = n[1];

          if (this.options.stringParams) {
            if (r.depth) {
              this.addDepth(r.depth);
            }

            this.opcode("getContext", r.depth || 0);
            this.opcode("pushStringParam", r.stringModeValue, r.type);

            if (r.type === "sexpr") {
              this.sexpr(r);
            }
          } else {
            this.accept(r);
          }

          this.opcode("assignToHash", n[0]);
        }

        this.opcode("popHash");
      },
      partial: function partial(e) {
        var t = e.partialName;
        this.usePartial = true;

        if (e.context) {
          this.ID(e.context);
        } else {
          this.opcode("push", "depth0");
        }

        this.opcode("invokePartial", t.name);
        this.opcode("append");
      },
      content: function content(e) {
        this.opcode("appendContent", e.string);
      },
      mustache: function mustache(e) {
        this.sexpr(e.sexpr);

        if (e.escaped && !this.options.noEscape) {
          this.opcode("appendEscaped");
        } else {
          this.opcode("append");
        }
      },
      ambiguousSexpr: function ambiguousSexpr(e, t, n) {
        var r = e.id,
            i = r.parts[0],
            s = t != null || n != null;
        this.opcode("getContext", r.depth);
        this.opcode("pushProgram", t);
        this.opcode("pushProgram", n);
        this.opcode("invokeAmbiguous", i, s);
      },
      simpleSexpr: function simpleSexpr(e) {
        var t = e.id;

        if (t.type === "DATA") {
          this.DATA(t);
        } else if (t.parts.length) {
          this.ID(t);
        } else {
          this.addDepth(t.depth);
          this.opcode("getContext", t.depth);
          this.opcode("pushContext");
        }

        this.opcode("resolvePossibleLambda");
      },
      helperSexpr: function helperSexpr(e, t, r) {
        var i = this.setupFullMustacheParams(e, t, r),
            s = e.id.parts[0];

        if (this.options.knownHelpers[s]) {
          this.opcode("invokeKnownHelper", i.length, s);
        } else if (this.options.knownHelpersOnly) {
          throw new n("You specified knownHelpersOnly, but used the unknown helper " + s, e);
        } else {
          this.opcode("invokeHelper", i.length, s, e.isRoot);
        }
      },
      sexpr: function sexpr(e) {
        var t = this.classifySexpr(e);

        if (t === "simple") {
          this.simpleSexpr(e);
        } else if (t === "helper") {
          this.helperSexpr(e);
        } else {
          this.ambiguousSexpr(e);
        }
      },
      ID: function ID(e) {
        this.addDepth(e.depth);
        this.opcode("getContext", e.depth);
        var t = e.parts[0];

        if (!t) {
          this.opcode("pushContext");
        } else {
          this.opcode("lookupOnContext", e.parts[0]);
        }

        for (var n = 1, r = e.parts.length; n < r; n++) {
          this.opcode("lookup", e.parts[n]);
        }
      },
      DATA: function DATA(e) {
        this.options.data = true;

        if (e.id.isScoped || e.id.depth) {
          throw new n("Scoped data references are not supported: " + e.original, e);
        }

        this.opcode("lookupData");
        var t = e.id.parts;

        for (var r = 0, i = t.length; r < i; r++) {
          this.opcode("lookup", t[r]);
        }
      },
      STRING: function STRING(e) {
        this.opcode("pushString", e.string);
      },
      INTEGER: function INTEGER(e) {
        this.opcode("pushLiteral", e.integer);
      },
      BOOLEAN: function BOOLEAN(e) {
        this.opcode("pushLiteral", e.bool);
      },
      comment: function comment() {},
      opcode: function opcode(e) {
        this.opcodes.push({
          opcode: e,
          args: [].slice.call(arguments, 1)
        });
      },
      declare: function declare(e, t) {
        this.opcodes.push({
          opcode: "DECLARE",
          name: e,
          value: t
        });
      },
      addDepth: function addDepth(e) {
        if (e === 0) {
          return;
        }

        if (!this.depths[e]) {
          this.depths[e] = true;
          this.depths.list.push(e);
        }
      },
      classifySexpr: function classifySexpr(e) {
        var t = e.isHelper;
        var n = e.eligibleHelper;
        var r = this.options;

        if (n && !t) {
          var i = e.id.parts[0];

          if (r.knownHelpers[i]) {
            t = true;
          } else if (r.knownHelpersOnly) {
            n = false;
          }
        }

        if (t) {
          return "helper";
        } else if (n) {
          return "ambiguous";
        } else {
          return "simple";
        }
      },
      pushParams: function pushParams(e) {
        var t = e.length,
            n;

        while (t--) {
          n = e[t];

          if (this.options.stringParams) {
            if (n.depth) {
              this.addDepth(n.depth);
            }

            this.opcode("getContext", n.depth || 0);
            this.opcode("pushStringParam", n.stringModeValue, n.type);

            if (n.type === "sexpr") {
              this.sexpr(n);
            }
          } else {
            this[n.type](n);
          }
        }
      },
      setupFullMustacheParams: function setupFullMustacheParams(e, t, n) {
        var r = e.params;
        this.pushParams(r);
        this.opcode("pushProgram", t);
        this.opcode("pushProgram", n);

        if (e.hash) {
          this.hash(e.hash);
        } else {
          this.opcode("emptyHash");
        }

        return r;
      }
    };
    t.precompile = i;
    t.compile = s;
    return t;
  }(n);

  var l = function (e, t) {
    "use strict";

    function u(e) {
      this.value = e;
    }

    function a() {}

    var n;
    var r = e.COMPILER_REVISION;
    var i = e.REVISION_CHANGES;
    var s = e.log;
    var o = t;
    a.prototype = {
      nameLookup: function nameLookup(e, t) {
        var n, r;

        if (e.indexOf("depth") === 0) {
          n = true;
        }

        if (/^[0-9]+$/.test(t)) {
          r = e + "[" + t + "]";
        } else if (a.isValidJavaScriptVariableName(t)) {
          r = e + "." + t;
        } else {
          r = e + "['" + t + "']";
        }

        if (n) {
          return "(" + e + " && " + r + ")";
        } else {
          return r;
        }
      },
      compilerInfo: function compilerInfo() {
        var e = r,
            t = i[e];
        return "this.compilerInfo = [" + e + ",'" + t + "'];\n";
      },
      appendToBuffer: function appendToBuffer(e) {
        if (this.environment.isSimple) {
          return "return " + e + ";";
        } else {
          return {
            appendToBuffer: true,
            content: e,
            toString: function toString() {
              return "buffer += " + e + ";";
            }
          };
        }
      },
      initializeBuffer: function initializeBuffer() {
        return this.quotedString("");
      },
      namespace: "Handlebars",
      compile: function compile(e, t, n, r) {
        this.environment = e;
        this.options = t || {};
        s("debug", this.environment.disassemble() + "\n\n");
        this.name = this.environment.name;
        this.isChild = !!n;
        this.context = n || {
          programs: [],
          environments: [],
          aliases: {}
        };
        this.preamble();
        this.stackSlot = 0;
        this.stackVars = [];
        this.registers = {
          list: []
        };
        this.hashes = [];
        this.compileStack = [];
        this.inlineStack = [];
        this.compileChildren(e, t);
        var i = e.opcodes,
            u;
        this.i = 0;

        for (var a = i.length; this.i < a; this.i++) {
          u = i[this.i];

          if (u.opcode === "DECLARE") {
            this[u.name] = u.value;
          } else {
            this[u.opcode].apply(this, u.args);
          }

          if (u.opcode !== this.stripNext) {
            this.stripNext = false;
          }
        }

        this.pushSource("");

        if (this.stackSlot || this.inlineStack.length || this.compileStack.length) {
          throw new o("Compile completed with content left on stack");
        }

        return this.createFunctionContext(r);
      },
      preamble: function preamble() {
        var e = [];

        if (!this.isChild) {
          var t = this.namespace;
          var n = "helpers = this.merge(helpers, " + t + ".helpers);";

          if (this.environment.usePartial) {
            n = n + " partials = this.merge(partials, " + t + ".partials);";
          }

          if (this.options.data) {
            n = n + " data = data || {};";
          }

          e.push(n);
        } else {
          e.push("");
        }

        if (!this.environment.isSimple) {
          e.push(", buffer = " + this.initializeBuffer());
        } else {
          e.push("");
        }

        this.lastContext = 0;
        this.source = e;
      },
      createFunctionContext: function createFunctionContext(e) {
        var t = this.stackVars.concat(this.registers.list);

        if (t.length > 0) {
          this.source[1] = this.source[1] + ", " + t.join(", ");
        }

        if (!this.isChild) {
          for (var n in this.context.aliases) {
            if (this.context.aliases.hasOwnProperty(n)) {
              this.source[1] = this.source[1] + ", " + n + "=" + this.context.aliases[n];
            }
          }
        }

        if (this.source[1]) {
          this.source[1] = "var " + this.source[1].substring(2) + ";";
        }

        if (!this.isChild) {
          this.source[1] += "\n" + this.context.programs.join("\n") + "\n";
        }

        if (!this.environment.isSimple) {
          this.pushSource("return buffer;");
        }

        var r = this.isChild ? ["depth0", "data"] : ["Handlebars", "depth0", "helpers", "partials", "data"];

        for (var i = 0, o = this.environment.depths.list.length; i < o; i++) {
          r.push("depth" + this.environment.depths.list[i]);
        }

        var u = this.mergeSource();

        if (!this.isChild) {
          u = this.compilerInfo() + u;
        }

        if (e) {
          r.push(u);
          return Function.apply(this, r);
        } else {
          var a = "function " + (this.name || "") + "(" + r.join(",") + ") {\n  " + u + "}";
          s("debug", a + "\n\n");
          return a;
        }
      },
      mergeSource: function mergeSource() {
        var e = "",
            t;

        for (var n = 0, r = this.source.length; n < r; n++) {
          var i = this.source[n];

          if (i.appendToBuffer) {
            if (t) {
              t = t + "\n    + " + i.content;
            } else {
              t = i.content;
            }
          } else {
            if (t) {
              e += "buffer += " + t + ";\n  ";
              t = undefined;
            }

            e += i + "\n  ";
          }
        }

        return e;
      },
      blockValue: function blockValue() {
        this.context.aliases.blockHelperMissing = "helpers.blockHelperMissing";
        var e = ["depth0"];
        this.setupParams(0, e);
        this.replaceStack(function (t) {
          e.splice(1, 0, t);
          return "blockHelperMissing.call(" + e.join(", ") + ")";
        });
      },
      ambiguousBlockValue: function ambiguousBlockValue() {
        this.context.aliases.blockHelperMissing = "helpers.blockHelperMissing";
        var e = ["depth0"];
        this.setupParams(0, e);
        var t = this.topStack();
        e.splice(1, 0, t);
        this.pushSource("if (!" + this.lastHelper + ") { " + t + " = blockHelperMissing.call(" + e.join(", ") + "); }");
      },
      appendContent: function appendContent(e) {
        if (this.pendingContent) {
          e = this.pendingContent + e;
        }

        if (this.stripNext) {
          e = e.replace(/^\s+/, "");
        }

        this.pendingContent = e;
      },
      strip: function strip() {
        if (this.pendingContent) {
          this.pendingContent = this.pendingContent.replace(/\s+$/, "");
        }

        this.stripNext = "strip";
      },
      append: function append() {
        this.flushInline();
        var e = this.popStack();
        this.pushSource("if(" + e + " || " + e + " === 0) { " + this.appendToBuffer(e) + " }");

        if (this.environment.isSimple) {
          this.pushSource("else { " + this.appendToBuffer("''") + " }");
        }
      },
      appendEscaped: function appendEscaped() {
        this.context.aliases.escapeExpression = "this.escapeExpression";
        this.pushSource(this.appendToBuffer("escapeExpression(" + this.popStack() + ")"));
      },
      getContext: function getContext(e) {
        if (this.lastContext !== e) {
          this.lastContext = e;
        }
      },
      lookupOnContext: function lookupOnContext(e) {
        this.push(this.nameLookup("depth" + this.lastContext, e, "context"));
      },
      pushContext: function pushContext() {
        this.pushStackLiteral("depth" + this.lastContext);
      },
      resolvePossibleLambda: function resolvePossibleLambda() {
        this.context.aliases.functionType = '"function"';
        this.replaceStack(function (e) {
          return "typeof " + e + " === functionType ? " + e + ".apply(depth0) : " + e;
        });
      },
      lookup: function lookup(e) {
        this.replaceStack(function (t) {
          return t + " == null || " + t + " === false ? " + t + " : " + this.nameLookup(t, e, "context");
        });
      },
      lookupData: function lookupData() {
        this.pushStackLiteral("data");
      },
      pushStringParam: function pushStringParam(e, t) {
        this.pushStackLiteral("depth" + this.lastContext);
        this.pushString(t);

        if (t !== "sexpr") {
          if (typeof e === "string") {
            this.pushString(e);
          } else {
            this.pushStackLiteral(e);
          }
        }
      },
      emptyHash: function emptyHash() {
        this.pushStackLiteral("{}");

        if (this.options.stringParams) {
          this.push("{}");
          this.push("{}");
        }
      },
      pushHash: function pushHash() {
        if (this.hash) {
          this.hashes.push(this.hash);
        }

        this.hash = {
          values: [],
          types: [],
          contexts: []
        };
      },
      popHash: function popHash() {
        var e = this.hash;
        this.hash = this.hashes.pop();

        if (this.options.stringParams) {
          this.push("{" + e.contexts.join(",") + "}");
          this.push("{" + e.types.join(",") + "}");
        }

        this.push("{\n    " + e.values.join(",\n    ") + "\n  }");
      },
      pushString: function pushString(e) {
        this.pushStackLiteral(this.quotedString(e));
      },
      push: function push(e) {
        this.inlineStack.push(e);
        return e;
      },
      pushLiteral: function pushLiteral(e) {
        this.pushStackLiteral(e);
      },
      pushProgram: function pushProgram(e) {
        if (e != null) {
          this.pushStackLiteral(this.programExpression(e));
        } else {
          this.pushStackLiteral(null);
        }
      },
      invokeHelper: function invokeHelper(e, t, n) {
        this.context.aliases.helperMissing = "helpers.helperMissing";
        this.useRegister("helper");
        var r = this.lastHelper = this.setupHelper(e, t, true);
        var i = this.nameLookup("depth" + this.lastContext, t, "context");
        var s = "helper = " + r.name + " || " + i;

        if (r.paramsInit) {
          s += "," + r.paramsInit;
        }

        this.push("(" + s + ",helper " + "? helper.call(" + r.callParams + ") " + ": helperMissing.call(" + r.helperMissingParams + "))");

        if (!n) {
          this.flushInline();
        }
      },
      invokeKnownHelper: function invokeKnownHelper(e, t) {
        var n = this.setupHelper(e, t);
        this.push(n.name + ".call(" + n.callParams + ")");
      },
      invokeAmbiguous: function invokeAmbiguous(e, t) {
        this.context.aliases.functionType = '"function"';
        this.useRegister("helper");
        this.emptyHash();
        var n = this.setupHelper(0, e, t);
        var r = this.lastHelper = this.nameLookup("helpers", e, "helper");
        var i = this.nameLookup("depth" + this.lastContext, e, "context");
        var s = this.nextStack();

        if (n.paramsInit) {
          this.pushSource(n.paramsInit);
        }

        this.pushSource("if (helper = " + r + ") { " + s + " = helper.call(" + n.callParams + "); }");
        this.pushSource("else { helper = " + i + "; " + s + " = typeof helper === functionType ? helper.call(" + n.callParams + ") : helper; }");
      },
      invokePartial: function invokePartial(e) {
        var t = [this.nameLookup("partials", e, "partial"), "'" + e + "'", this.popStack(), "helpers", "partials"];

        if (this.options.data) {
          t.push("data");
        }

        this.context.aliases.self = "this";
        this.push("self.invokePartial(" + t.join(", ") + ")");
      },
      assignToHash: function assignToHash(e) {
        var t = this.popStack(),
            n,
            r;

        if (this.options.stringParams) {
          r = this.popStack();
          n = this.popStack();
        }

        var i = this.hash;

        if (n) {
          i.contexts.push("'" + e + "': " + n);
        }

        if (r) {
          i.types.push("'" + e + "': " + r);
        }

        i.values.push("'" + e + "': (" + t + ")");
      },
      compiler: a,
      compileChildren: function compileChildren(e, t) {
        var n = e.children,
            r,
            i;

        for (var s = 0, o = n.length; s < o; s++) {
          r = n[s];
          i = new this.compiler();
          var u = this.matchExistingProgram(r);

          if (u == null) {
            this.context.programs.push("");
            u = this.context.programs.length;
            r.index = u;
            r.name = "program" + u;
            this.context.programs[u] = i.compile(r, t, this.context);
            this.context.environments[u] = r;
          } else {
            r.index = u;
            r.name = "program" + u;
          }
        }
      },
      matchExistingProgram: function matchExistingProgram(e) {
        for (var t = 0, n = this.context.environments.length; t < n; t++) {
          var r = this.context.environments[t];

          if (r && r.equals(e)) {
            return t;
          }
        }
      },
      programExpression: function programExpression(e) {
        this.context.aliases.self = "this";

        if (e == null) {
          return "self.noop";
        }

        var t = this.environment.children[e],
            n = t.depths.list,
            r;
        var i = [t.index, t.name, "data"];

        for (var s = 0, o = n.length; s < o; s++) {
          r = n[s];

          if (r === 1) {
            i.push("depth0");
          } else {
            i.push("depth" + (r - 1));
          }
        }

        return (n.length === 0 ? "self.program(" : "self.programWithDepth(") + i.join(", ") + ")";
      },
      register: function register(e, t) {
        this.useRegister(e);
        this.pushSource(e + " = " + t + ";");
      },
      useRegister: function useRegister(e) {
        if (!this.registers[e]) {
          this.registers[e] = true;
          this.registers.list.push(e);
        }
      },
      pushStackLiteral: function pushStackLiteral(e) {
        return this.push(new u(e));
      },
      pushSource: function pushSource(e) {
        if (this.pendingContent) {
          this.source.push(this.appendToBuffer(this.quotedString(this.pendingContent)));
          this.pendingContent = undefined;
        }

        if (e) {
          this.source.push(e);
        }
      },
      pushStack: function pushStack(e) {
        this.flushInline();
        var t = this.incrStack();

        if (e) {
          this.pushSource(t + " = " + e + ";");
        }

        this.compileStack.push(t);
        return t;
      },
      replaceStack: function replaceStack(e) {
        var t = "",
            n = this.isInline(),
            r,
            i,
            s;

        if (n) {
          var o = this.popStack(true);

          if (o instanceof u) {
            r = o.value;
            s = true;
          } else {
            i = !this.stackSlot;
            var a = !i ? this.topStackName() : this.incrStack();
            t = "(" + this.push(a) + " = " + o + "),";
            r = this.topStack();
          }
        } else {
          r = this.topStack();
        }

        var f = e.call(this, r);

        if (n) {
          if (!s) {
            this.popStack();
          }

          if (i) {
            this.stackSlot--;
          }

          this.push("(" + t + f + ")");
        } else {
          if (!/^stack/.test(r)) {
            r = this.nextStack();
          }

          this.pushSource(r + " = (" + t + f + ");");
        }

        return r;
      },
      nextStack: function nextStack() {
        return this.pushStack();
      },
      incrStack: function incrStack() {
        this.stackSlot++;

        if (this.stackSlot > this.stackVars.length) {
          this.stackVars.push("stack" + this.stackSlot);
        }

        return this.topStackName();
      },
      topStackName: function topStackName() {
        return "stack" + this.stackSlot;
      },
      flushInline: function flushInline() {
        var e = this.inlineStack;

        if (e.length) {
          this.inlineStack = [];

          for (var t = 0, n = e.length; t < n; t++) {
            var r = e[t];

            if (r instanceof u) {
              this.compileStack.push(r);
            } else {
              this.pushStack(r);
            }
          }
        }
      },
      isInline: function isInline() {
        return this.inlineStack.length;
      },
      popStack: function popStack(e) {
        var t = this.isInline(),
            n = (t ? this.inlineStack : this.compileStack).pop();

        if (!e && n instanceof u) {
          return n.value;
        } else {
          if (!t) {
            if (!this.stackSlot) {
              throw new o("Invalid stack pop");
            }

            this.stackSlot--;
          }

          return n;
        }
      },
      topStack: function topStack(e) {
        var t = this.isInline() ? this.inlineStack : this.compileStack,
            n = t[t.length - 1];

        if (!e && n instanceof u) {
          return n.value;
        } else {
          return n;
        }
      },
      quotedString: function quotedString(e) {
        return '"' + e.replace(/\\/g, "\\\\").replace(/"/g, '\\"').replace(/\n/g, "\\n").replace(/\r/g, "\\r").replace(/\u2028/g, "\\u2028").replace(/\u2029/g, "\\u2029") + '"';
      },
      setupHelper: function setupHelper(e, t, n) {
        var r = [],
            i = this.setupParams(e, r, n);
        var s = this.nameLookup("helpers", t, "helper");
        return {
          params: r,
          paramsInit: i,
          name: s,
          callParams: ["depth0"].concat(r).join(", "),
          helperMissingParams: n && ["depth0", this.quotedString(t)].concat(r).join(", ")
        };
      },
      setupOptions: function setupOptions(e, t) {
        var n = [],
            r = [],
            i = [],
            s,
            o,
            u;
        n.push("hash:" + this.popStack());

        if (this.options.stringParams) {
          n.push("hashTypes:" + this.popStack());
          n.push("hashContexts:" + this.popStack());
        }

        o = this.popStack();
        u = this.popStack();

        if (u || o) {
          if (!u) {
            this.context.aliases.self = "this";
            u = "self.noop";
          }

          if (!o) {
            this.context.aliases.self = "this";
            o = "self.noop";
          }

          n.push("inverse:" + o);
          n.push("fn:" + u);
        }

        for (var a = 0; a < e; a++) {
          s = this.popStack();
          t.push(s);

          if (this.options.stringParams) {
            i.push(this.popStack());
            r.push(this.popStack());
          }
        }

        if (this.options.stringParams) {
          n.push("contexts:[" + r.join(",") + "]");
          n.push("types:[" + i.join(",") + "]");
        }

        if (this.options.data) {
          n.push("data:data");
        }

        return n;
      },
      setupParams: function setupParams(e, t, n) {
        var r = "{" + this.setupOptions(e, t).join(",") + "}";

        if (n) {
          this.useRegister("options");
          t.push("options");
          return "options=" + r;
        } else {
          t.push(r);
          return "";
        }
      }
    };
    var f = ("break else new var" + " case finally return void" + " catch for switch while" + " continue function this with" + " default if throw" + " delete in try" + " do instanceof typeof" + " abstract enum int short" + " boolean export interface static" + " byte extends long super" + " char final native synchronized" + " class float package throws" + " const goto private transient" + " debugger implements protected volatile" + " double import public let yield").split(" ");
    var l = a.RESERVED_WORDS = {};

    for (var c = 0, h = f.length; c < h; c++) {
      l[f[c]] = true;
    }

    a.isValidJavaScriptVariableName = function (e) {
      if (!a.RESERVED_WORDS[e] && /^[a-zA-Z_$][0-9a-zA-Z_$]*$/.test(e)) {
        return true;
      }

      return false;
    };

    n = a;
    return n;
  }(r, n);

  var c = function (e, t, n, r, i) {
    "use strict";

    var s;
    var o = e;
    var u = t;
    var a = n.parser;
    var f = n.parse;
    var l = r.Compiler;
    var c = r.compile;
    var h = r.precompile;
    var p = i;
    var d = o.create;

    var v = function v() {
      var e = d();

      e.compile = function (t, n) {
        return c(t, n, e);
      };

      e.precompile = function (t, n) {
        return h(t, n, e);
      };

      e.AST = u;
      e.Compiler = l;
      e.JavaScriptCompiler = p;
      e.Parser = a;
      e.parse = f;
      return e;
    };

    o = v();
    o.create = v;
    s = o;
    return s;
  }(s, o, a, f, l);

  return c;
}();

window.timber = window.timber || {};

timber.initCache = function () {
  timber.cache = {
    // General
    $html: $('html'),
    $body: $('body'),
    // Navigation
    $navigation: $('#AccessibleNav'),
    $mobileSubNavToggle: $('.mobile-nav__toggle-btn'),
    // Collection
    $changeView: $('.change-view'),
    // Product Page
    $productImageWrap: $('#ProductPhoto'),
    $productImage: $('#ProductPhotoImg'),
    $thumbImages: $('#ProductThumbs').find('a.product-single__thumbnail'),
    $productImageGallery: $('.gallery__item'),
    // Customer Pages
    $recoverPasswordLink: $('#RecoverPassword'),
    $hideRecoverPasswordLink: $('#HideRecoverPasswordLink'),
    $recoverPasswordForm: $('#RecoverPasswordForm'),
    $customerLoginForm: $('#CustomerLoginForm'),
    $passwordResetSuccess: $('#ResetSuccess')
  };
};

timber.init = function () {
  FastClick.attach(document.body);
  timber.initCache();
  timber.accessibleNav();
  timber.drawersInit();
  timber.responsiveVideos();
  timber.loginForms();
  timber.collectionViews();
  timber.productImageSwitch();
  timber.autosearch();
};

timber.autosearch = function () {
  var currentAjaxRequest = null;
  var searchForms = $('form[action="/search"]').css('position', 'relative').each(function () {
    var input = $(this).find('input[name="q"]');
    var offSet = input.position().top + input.innerHeight();
    $('<ul class="search-results"></ul>').css({
      'position': 'absolute',
      'left': '0px',
      'top': offSet
    }).appendTo($(this)).hide();
    input.attr('autocomplete', 'off').bind('keyup change', function () {
      var term = $(this).val();
      var form = $(this).closest('form');
      var searchURL = '/search?type=product&q=' + term;
      var resultsList = form.find('.search-results');

      if (term.length > 3 && term != $(this).attr('data-old-term')) {
        $(this).attr('data-old-term', term);
        if (currentAjaxRequest != null) currentAjaxRequest.abort();
        currentAjaxRequest = $.getJSON(searchURL + '&view=json', function (data) {
          resultsList.empty();

          if (data.results_count == 0) {
            resultsList.hide();
          } else {
            $.each(data.results, function (index, item) {
              var link = $('<a></a>').attr('href', item.url);
              link.append('<span class="thumbnail"><img src="' + item.thumbnail + '" /></span>');
              link.append('<span class="title">' + item.title + '</span>');
              link.wrap('<li></li>');
              resultsList.append(link.parent());
            });

            if (data.results_count > 10) {
              resultsList.append('<li><span class="title"><a href="' + searchURL + '">See all results (' + data.results_count + ')</a></span></li>');
            }

            resultsList.fadeIn(200);
          }
        });
      }
    });
  });
  $('body').bind('click', function () {
    $('.search-results').hide();
  });
};

timber.productImageSwitch = function () {
  if (timber.cache.$thumbImages.length) {
    timber.cache.$thumbImages.on('click', function (evt) {
      evt.preventDefault();
      var newImage = $(this).attr('href');
      var newImageId = $(this).attr('data-image-id');
      timber.switchImage(newImage, {
        id: newImageId
      }, timber.cache.$productImage);
    });
  }
};

timber.switchImage = function (src, imgObject, el) {
  var $el = $(el);
  $el.attr('src', src);
  $el.attr('data-image-id', imgObject.id);
  $el.attr('data-image-zoom', src);
  $("#ProductPhotoImg").data('zoom-image', src).elevateZoom();
};

timber.productImageZoom = function () {
  if (!timber.cache.$productImageWrap.length || timber.cache.$html.hasClass('supports-touch')) {
    return;
  }

  ;
  timber.cache.$productImageWrap.trigger('zoom.destroy');
  timber.cache.$productImageWrap.addClass('image-zoom').zoom({
    url: timber.cache.$productImage.attr('data-zoom')
  });
};

timber.productImageGallery = function () {
  if (!timber.cache.$productImageGallery.length) {
    return;
  }

  ;
  timber.cache.$productImageGallery.magnificPopup({
    type: 'image',
    mainClass: 'mfp-fade',
    closeOnBgClick: true,
    closeBtnInside: false,
    closeOnContentClick: true,
    tClose: 'Close (Esc)',
    removalDelay: 500,
    callbacks: {
      open: function open() {
        $('html').css('overflow-y', 'hidden');
      },
      close: function close() {
        $('html').css('overflow-y', '');
      }
    },
    gallery: {
      enabled: true,
      navigateByImgClick: false,
      arrowMarkup: '<button title="%title%" type="button" class="mfp-arrow mfp-arrow-%dir%"><span class="mfp-chevron mfp-chevron-%dir%"></span></button>',
      tPrev: 'Previous (Left arrow key)',
      tNext: 'Next (Right arrow key)'
    }
  });
  timber.cache.$productImage.bind('click', function () {
    var imageId = $(this).attr('data-image-id');
    timber.cache.$productImageGallery.filter('[data-image-id="' + imageId + '"]').trigger('click');
  });
};

timber.accessibleNav = function () {
  var $nav = timber.cache.$navigation,
      $allLinks = $nav.find('a'),
      $topLevel = $nav.children('li').find('a'),
      $parents = $nav.find('.site-nav--has-dropdown'),
      $subMenuLinks = $nav.find('.site-nav__dropdown').find('a'),
      activeClass = 'nav-hover',
      focusClass = 'nav-focus'; // Mouseenter

  $parents.on('mouseenter touchstart', function (evt) {
    var $el = $(this);

    if (!$el.hasClass(activeClass)) {
      // force stop the click from happening
      evt.preventDefault();
      evt.stopImmediatePropagation();
    }

    showDropdown($el);
  }); // Mouseout

  $parents.on('mouseleave', function () {
    hideDropdown($(this));
  });
  $subMenuLinks.on('touchstart', function (evt) {
    // Prevent touchstart on body from firing instead of link
    evt.stopImmediatePropagation();
  });
  $allLinks.focus(function () {
    handleFocus($(this));
  });
  $allLinks.blur(function () {
    removeFocus($topLevel);
  }); // accessibleNav private methods

  function handleFocus($el) {
    var $subMenu = $el.next('ul'),
        hasSubMenu = $subMenu.hasClass('sub-nav') ? true : false,
        isSubItem = $('.site-nav__dropdown').has($el).length,
        $newFocus = null; // Add focus class for top level items, or keep menu shown

    if (!isSubItem) {
      removeFocus($topLevel);
      addFocus($el);
    } else {
      $newFocus = $el.closest('.site-nav--has-dropdown').find('a');
      addFocus($newFocus);
    }
  }

  function showDropdown($el) {
    $el.addClass(activeClass);
    setTimeout(function () {
      timber.cache.$body.on('touchstart', function () {
        hideDropdown($el);
      });
    }, 250);
  }

  function hideDropdown($el) {
    $el.removeClass(activeClass);
    timber.cache.$body.off('touchstart');
  }

  function addFocus($el) {
    $el.addClass(focusClass);
  }

  function removeFocus($el) {
    $el.removeClass(focusClass);
  }
};

timber.drawersInit = function () {
  timber.LeftDrawer = new timber.Drawers('NavDrawer', 'left');

  if (theme.settings.cartType === 'drawer') {
    timber.RightDrawer = new timber.Drawers('CartDrawer', 'right', {});
  }
};

timber.getHash = function () {
  return window.location.hash;
};

timber.responsiveVideos = function () {
  var $iframeVideo = $('iframe[src*="youtube.com/embed"], iframe[src*="player.vimeo"]');
  var $iframeReset = $iframeVideo.add('iframe#admin_bar_iframe');
  $iframeVideo.each(function () {
    // Add wrapper to make video responsive
    if (!$(this).parents('.video-wrapper').length) {
      $(this).wrap('<div class="video-wrapper"></div>');
    }
  });
  $iframeReset.each(function () {
    // Re-set the src attribute on each iframe after page load
    // for Chrome's "incorrect iFrame content on 'back'" bug.
    // https://code.google.com/p/chromium/issues/detail?id=395791
    // Need to specifically target video and admin bar
    this.src = this.src;
  });
};

timber.loginForms = function () {
  function showRecoverPasswordForm() {
    timber.cache.$recoverPasswordForm.show();
    timber.cache.$customerLoginForm.hide();
  }

  function hideRecoverPasswordForm() {
    timber.cache.$recoverPasswordForm.hide();
    timber.cache.$customerLoginForm.show();
  }

  timber.cache.$recoverPasswordLink.on('click', function (evt) {
    evt.preventDefault();
    showRecoverPasswordForm();
  });
  timber.cache.$hideRecoverPasswordLink.on('click', function (evt) {
    evt.preventDefault();
    hideRecoverPasswordForm();
  }); // Allow deep linking to recover password form

  if (timber.getHash() == '#recover') {
    showRecoverPasswordForm();
  }
};

timber.resetPasswordSuccess = function () {
  timber.cache.$passwordResetSuccess.show();
};

timber.collectionViews = function () {
  if (timber.cache.$changeView.length) {
    timber.cache.$changeView.on('click', function () {
      var view = $(this).data('view'),
          url = document.URL,
          hasParams = url.indexOf('?') > -1;
      $(".collection-view button").removeClass("change-view--active");

      if (view == "grid") {
        $(".grid-uniform-category").removeClass("category-full-width");
        $(".grid-button").addClass("change-view--active");
      } else {
        $(".grid-uniform-category").addClass("category-full-width");
        $(".list-button").addClass("change-view--active");
      }
    });
  }
};
/*============================================================================
  Drawer modules
==============================================================================*/


timber.Drawers = function () {
  var Drawer = function Drawer(id, position, options) {
    var defaults = {
      close: '.js-drawer-close',
      open: '.js-drawer-open-' + position,
      openClass: 'js-drawer-open',
      dirOpenClass: 'js-drawer-open-' + position
    };
    this.$nodes = {
      parent: $('body, html'),
      page: $('#PageContainer'),
      moved: $('.is-moved-by-drawer')
    };
    this.config = $.extend(defaults, options);
    this.position = position;
    this.$drawer = $('#' + id);

    if (!this.$drawer.length) {
      return false;
    }

    this.drawerIsOpen = false;
    this.init();
  };

  Drawer.prototype.init = function () {
    var $openBtn = $(this.config.open); // Add aria controls

    $openBtn.attr('aria-expanded', 'false');
    $openBtn.on('click', $.proxy(this.open, this));
    this.$drawer.find(this.config.close).on('click', $.proxy(this.close, this));
  };

  Drawer.prototype.open = function (evt) {
    // Keep track if drawer was opened from a click, or called by another function
    var externalCall = false; // don't open an opened drawer

    if (this.drawerIsOpen) {
      return;
    } // Prevent following href if link is clicked


    if (evt) {
      evt.preventDefault();
    } else {
      externalCall = true;
    } // Without this, the drawer opens, the click event bubbles up to $nodes.page
    // which closes the drawer.


    if (evt && evt.stopPropagation) {
      evt.stopPropagation(); // save the source of the click, we'll focus to this on close

      this.$activeSource = $(evt.currentTarget);
    }

    if (this.drawerIsOpen && !externalCall) {
      return this.close();
    } // Add is-transitioning class to moved elements on open so drawer can have
    // transition for close animation


    this.$nodes.moved.addClass('is-transitioning');
    this.$drawer.prepareTransition();
    this.$nodes.parent.addClass(this.config.openClass + ' ' + this.config.dirOpenClass);
    this.drawerIsOpen = true; // Set focus on drawer

    Drawer.prototype.trapFocus({
      $container: this.$drawer,
      namespace: 'drawer_focus'
    }); // Run function when draw opens if set

    if (this.config.onDrawerOpen && typeof this.config.onDrawerOpen == 'function') {
      if (!externalCall) {
        this.config.onDrawerOpen();
      }
    }

    if (this.$activeSource && this.$activeSource.attr('aria-expanded')) {
      this.$activeSource.attr('aria-expanded', 'true');
    }

    this.bindEvents();
  };

  Drawer.prototype.close = function () {
    // don't close a closed drawer
    if (!this.drawerIsOpen) {
      return;
    } // deselect any focused form elements


    $(document.activeElement).trigger('blur'); // Ensure closing transition is applied to moved elements, like the nav

    this.$nodes.moved.prepareTransition({
      disableExisting: true
    });
    this.$drawer.prepareTransition({
      disableExisting: true
    });
    this.$nodes.parent.removeClass(this.config.dirOpenClass + ' ' + this.config.openClass);
    this.drawerIsOpen = false; // Remove focus on drawer

    Drawer.prototype.removeTrapFocus({
      $container: this.$drawer,
      namespace: 'drawer_focus'
    });

    if (this.$activeSource && this.$activeSource.attr('aria-expanded')) {
      this.$activeSource.attr('aria-expanded', 'false');
    }

    this.unbindEvents();
  };
  /**
   * Traps the focus in a particular container
   *
  * @param {object} options - Options to be used
  * @param {jQuery} options.$container - Container to trap focus within
  * @param {jQuery} options.$elementToFocus - Element to be focused when focus leaves container
  * @param {string} options.namespace - Namespace used for new focus event handler
  */


  Drawer.prototype.trapFocus = function (options) {
    var eventName = options.eventNamespace ? 'focusin.' + eventNamespace : 'focusin';

    if (!options.$elementToFocus) {
      options.$elementToFocus = options.$container;
      options.$container.attr('tabindex', '-1');
    }

    options.$elementToFocus.focus();
    $(document).on(eventName, function (evt) {
      if (options.$container[0] !== evt.target && !options.$container.has(evt.target).length) {
        options.$container.focus();
      }
    });
  };
  /**
   * Removes the trap of focus in a particular container
   *
   * @param {object} options - Options to be used
   * @param {jQuery} options.$container - Container to trap focus within
   * @param {string} options.namespace - Namespace used for new focus event handler
   */


  Drawer.prototype.removeTrapFocus = function (options) {
    var eventName = options.namespace ? 'focusin.' + options.namespace : 'focusin';

    if (options.$container && options.$container.length) {
      options.$container.removeAttr('tabindex');
    }

    $(document).off(eventName);
  };

  Drawer.prototype.bindEvents = function () {
    // Lock scrolling on mobile
    this.$nodes.page.on('touchmove.drawer', function () {
      return false;
    }); // Clicking out of drawer closes it

    this.$nodes.page.on('click.drawer', $.proxy(function () {
      this.close();
      return false;
    }, this)); // Pressing escape closes drawer

    this.$nodes.parent.on('keyup.drawer', $.proxy(function (evt) {
      if (evt.keyCode === 27) {
        this.close();
      }
    }, this));
  };

  Drawer.prototype.unbindEvents = function () {
    this.$nodes.page.off('.drawer');
    this.$nodes.parent.off('.drawer');
  };

  return Drawer;
}(); // Initialize Timber's JS on docready


$(timber.init);
/*
 * JS for customizing Slick.js
 *   http://kenwheeler.github.io/slick/
 *   Untouched JS in assets/slick.min.js
 */

/*
 * Run function after window resize
 * http://stackoverflow.com/questions/2854407/javascript-jquery-window-resize-how-to-fire-after-the-resize-is-completed
 */

var afterResize = function () {
  var t = {};
  return function (callback, ms, uniqueId) {
    if (!uniqueId) {
      uniqueId = "Don't call this twice without a uniqueId";
    }

    if (t[uniqueId]) {
      clearTimeout(t[uniqueId]);
    }

    t[uniqueId] = setTimeout(callback, ms);
  };
}();

var slickTheme = function (module, $) {
  'use strict'; // Public functions

  var init, onInit, beforeChange, afterChange; // Private variables

  var settings, $slider, $allSlides, $activeSlide, $slickDots, windowHeight, scrolled, $heroText, $heroImage;
  var currentActiveSlide = 0; // Private functions

  var cacheObjects, checkFirstOnIndex, setFullScreen, sizeFullScreen, setParallax, calculateParallax, slickColors, fixIE8;
  /*============================================================================
   Initialise the plugin and define global options
  ==============================================================================*/

  cacheObjects = function cacheObjects() {
    slickTheme.cache = {
      $html: $('html'),
      $window: $(window),
      $hero: $('#Hero'),
      $heroImage: $('.hero__image'),
      $headerWrapper: $('.header-wrapper')
    };
    slickTheme.vars = {
      slideClass: 'slick-slide',
      activeClass: 'slick-active',
      hiddenClass: 'hero__slide--hidden',
      heroHeaderClass: 'hero__header'
    };
  };

  init = function init(options) {
    cacheObjects(); // Default settings

    settings = {
      // User options
      $element: null,
      fullscreen: false,
      parallax: false,
      // Private settings
      isTouch: Modernizr.touch ? true : false,
      // Slack options
      arrows: false,
      dots: true,
      adaptiveHeight: true
    }; // Override defaults with arguments

    $.extend(settings, options); // Check if this hero is the first one on the home page

    settings.isFirstOnIndex = checkFirstOnIndex(); // Absolutely position header over hero as soon as possible

    if (settings.isFirstOnIndex) {
      slickTheme.cache.$headerWrapper.addClass(slickTheme.vars.heroHeaderClass);
    }
    /*
     * Init slick slider
     *   - Add any additional option changes here
     *   - https://github.com/kenwheeler/slick/#options
     */


    settings.$element.slick({
      arrows: settings.arrows,
      dots: settings.dots,
      adaptiveHeight: settings.fullscreen ? false : settings.adaptiveHeight,
      draggable: false,
      fade: true,
      //autoplay       : theme.strings.slickAuto,
      //autoplaySpeed  : theme.strings.slickAutoSpeed,
      autoplay: slickTheme.cache.$hero.data('autoplay'),
      autoplaySpeed: slickTheme.cache.$hero.data('autoplayspeed'),
      onInit: this.onInit,
      onBeforeChange: this.beforeChange,
      onAfterChange: this.afterChange
    });
  };

  checkFirstOnIndex = function checkFirstOnIndex() {
    if (settings.$element.hasClass('hero--first')) {
      return true;
    }

    ;
    return false;
  };

  onInit = function onInit(obj) {
    $slider = obj.$slider;
    $allSlides = $slider.find('.' + slickTheme.vars.slideClass);
    $activeSlide = $slider.find('.' + slickTheme.vars.activeClass);
    $slickDots = $slider.find('.slick-dots');

    if (!settings.isTouch) {
      $allSlides.addClass(slickTheme.vars.hiddenClass);
      $activeSlide.removeClass(slickTheme.vars.hiddenClass);
    }

    if (settings.fullscreen) {
      setFullScreen();
      slickColors();

      if (slickTheme.cache.$html.hasClass('lt-ie9')) {
        fixIE8();
      }
    }

    if (settings.parallax && Modernizr.csstransforms3d) {
      setParallax();
    }
  };

  beforeChange = function beforeChange(evt, currentSlide, nextSlide) {
    if (settings.fullscreen) {
      var $nextSlide = $allSlides.eq(nextSlide),
          newTextColor = $nextSlide.data('color');
      slickColors(newTextColor);
    }

    if (!settings.isTouch) {
      $allSlides.removeClass(slickTheme.vars.hiddenClass);
    } // Set upcoming slide as index


    currentActiveSlide = nextSlide; // Set new active slide to proper parallax position

    if (settings.parallax && Modernizr.csstransforms3d) {
      calculateParallax(settings.fullscreen, currentActiveSlide);
    }
  };

  afterChange = function afterChange(evt, currentSlide) {
    if (!settings.isTouch) {
      $activeSlide = $slider.find('.' + slickTheme.vars.activeClass);
      $allSlides.addClass(slickTheme.vars.hiddenClass);
      $activeSlide.removeClass(slickTheme.vars.hiddenClass);
    }
  };

  setFullScreen = function setFullScreen() {
    sizeFullScreen(); // Resize hero after screen resize

    slickTheme.cache.$window.resize(function () {
      afterResize(function () {
        sizeFullScreen();
      }, 200, 'sizeFullScreen');
    });
  };

  sizeFullScreen = function sizeFullScreen() {
    windowHeight = slickTheme.cache.$window.height();
    settings.$element.css('height', windowHeight);
  };

  setParallax = function setParallax() {
    $heroText = $('.hero__text-content');
    $heroImage = $('.hero__image');
    slickTheme.cache.$window.on('scroll', function (evt) {
      calculateParallax(settings.fullscreen, currentActiveSlide);
    });
  };

  calculateParallax = function calculateParallax(parallaxImage, currentSlide) {
    scrolled = slickTheme.cache.$window.scrollTop();
    $($heroText[currentSlide]).css({
      transform: 'translate3d(0, ' + scrolled / 8 + 'px, 0)'
    });

    if (parallaxImage) {
      $($heroImage[currentSlide]).css({
        transform: 'translate3d(0, ' + scrolled / 8 + 'px, 0)'
      });
    }
  };

  slickColors = function slickColors(color) {
    // Find the new color if one isn't sent
    if (!color) {
      var color = $('.slick-active').attr('data-color');
    } // Set an is-light or is-dark class on the header and nav dots to update colors


    if (settings.isFirstOnIndex) {
      slickTheme.cache.$headerWrapper.removeClass('is-light is-dark').addClass(color);
    } // Set an is-light or is-dark class on nav dots to update colors


    if ($slickDots.length) {
      $slickDots.removeClass('is-light is-dark').addClass(color);
    }
  };

  fixIE8 = function fixIE8() {
    // Add an -ms- filter to make background-size: cover (mostly) work
    slickTheme.cache.$heroImage.each(function () {
      var $el = $(this),
          img = $el.attr('data-image');
      $el.css({
        'background-image': 'none',
        'filter': 'progid:DXImageTransform.Microsoft.AlphaImageLoader(src="' + img + '", sizingMethod="scale")'
      });
    });
  };

  module = {
    init: init,
    onInit: onInit,
    beforeChange: beforeChange,
    afterChange: afterChange
  };
  return module;
}(slickTheme || {}, jQuery);
/* ================ Sections ================ */


window.theme = window.theme || {};

theme.DrawerMenuSection = function () {
  function DrawerMenuSection(container) {
    timber.initCache(); // close menu

    $('#NavDrawer').find('.js-drawer-close').on('click', function (evt) {
      evt.preventDefault();
      timber.LeftDrawer.close();
    });
    var $toggleBtns = timber.cache.$mobileSubNavToggle; // Setup aria attributes

    $toggleBtns.attr('aria-expanded', 'false');
    $toggleBtns.each(function (i, el) {
      var $el = $(el);
      $el.attr('aria-controls', $el.attr('data-aria-controls'));
    });
    $toggleBtns.on('click', function () {
      var $el = $(this);
      var currentlyExpanded = $el.attr('aria-expanded');
      var toggleState = false; // Updated aria-expanded value based on state pre-click

      if (currentlyExpanded === 'true') {
        $el.attr('aria-expanded', 'false');
      } else {
        $el.attr('aria-expanded', 'true');
        toggleState = true;
      } // Toggle class that expands/collapses sublist


      $el.closest('.mobile-nav__has-sublist').toggleClass('mobile-nav--expanded', toggleState);
    });
  }

  return DrawerMenuSection;
}();

theme.DrawerMenuSection.prototype = _.assignIn({}, theme.DrawerMenuSection.prototype, {
  onSelect: function onSelect() {
    timber.LeftDrawer.open();
  },
  onDeselect: function onDeselect() {
    timber.LeftDrawer.close();
  }
});
window.theme = window.theme || {};

theme.Product = function () {
  function Product(container) {
    var $window = $(window);
    this.settings = {
      productPageLoad: false,
      preloadImage: false,
      enableHistoryState: true,
      namespace: '.productSection'
    };
    this.selectors = {
      productImages: '.product-single__photos',
      productImagePhoto: '.product-single__photo',
      productImage: '#ProductPhotoImg',
      addToCart: '.AddToCart',
      productPrice: '#ProductPrice',
      priceA11y: '#PriceA11y',
      comparePrice: '#ComparePrice',
      comparePriceA11y: '#ComparePriceA11y',
      priceWrapper: '.product-single__price--wrapper',
      quantityElements: '.js-quantity-selector, label + .js-qty',
      addToCartText: '.AddToCartText',
      originalSelectorId: '#ProductSelect',
      singleOptionSelector: '.single-option-selector__radio',
      radioWrapper: '.radio-wrapper',
      meta: '.product-single__meta',
      productWrapper: '.product-single'
    };
    var $container = this.$container = $(container);
    var sectionId = $container.attr('data-section-id');

    if (!$('#ProductJson-' + sectionId).html()) {
      return;
    }

    this.productSingleObject = JSON.parse(document.getElementById('ProductJson-' + sectionId).innerHTML);
    this.zoomType = $container.data('image-zoom-type');
    this.initBreakpoints();
    this.stringOverrides();
    this.initProductVariant();
    this.initStickyProductMeta();

    if (this.zoomType && theme.settings.zoomEnable) {
      this.productImageZoom();
    }

    $window.on('load' + this.settings.namespace, theme.initStickyProductMeta).on('resize' + this.settings.namespace, theme.debounce(this.initStickyProductMeta, 150).bind(this));
  }

  Product.prototype = _.assignIn({}, Product.prototype, {
    initProductVariant: function initProductVariant() {
      var options = {
        $container: this.$container,
        settings: this.settings,
        selectors: this.selectors,
        product: this.productSingleObject
      };
      this.variants = new theme.Variants(options);
      this.$container.on('variantChange' + this.settings.namespace, this.productPage.bind(this));
      this.$container.on('variantImageChange' + this.settings.namespace, this.showVariantImage.bind(this));
    },
    initBreakpoints: function initBreakpoints() {
      var self = this;

      if (!$('html').hasClass('lt-ie9')) {
        enquire.register(theme.variables.mediaQuerySmall, {
          match: function match() {
            self.createImageCarousel();

            if (!self.settings.zoomEnable && $(self.selectors.productImagePhoto).length) {
              // remove event handlers for product zoom on mobile
              $(self.selectors.productImagePhoto).off();
            }
          },
          unmatch: function unmatch() {
            self.destroyImageCarousel();

            if (self.settings.zoomEnable) {
              // reinit product zoom
              this.productImageZoom();
            }
          }
        });
      }
    },
    stringOverrides: function stringOverrides() {
      // Override defaults in theme.strings with potential
      // template overrides
      theme.productStrings = theme.productStrings || {};
      $.extend(theme.strings, theme.productStrings);
    },
    resizeElements: function resizeElements() {
      $(this.selectors.productGridImages).imagesLoaded(function () {
        $(this.selectors.productGridImages).css('height', 'auto').equalHeights();
      });
    },
    showVariantImage: function showVariantImage(evt) {
      var variant = evt.variant;
      var $newImage = $('.product-single__photo[data-image-id="' + variant.featured_image.id + '"]');
      var imageIndex;

      if (theme.variables.bpSmall) {
        // Switch carousel slide, unless it's the first photo on load
        imageIndex = $newImage.parent().attr('index'); // Navigate to slide unless it's the first photo on load
        // If there is no index, slider is not initalized.

        if (_.isUndefined(imageIndex)) {
          return;
        }

        if (imageIndex !== 0 || theme.variables.productPageLoad) {
          $(this.selectors.productImages).slickGoTo(imageIndex);
        }
      } else {
        imageIndex = $newImage.parent().index(); // Scroll to/reorder image unless it's the first photo on load

        if (imageIndex !== 0 || theme.variables.productPageLoad) {
          if (theme.variables.productPageSticky) {
            // Scroll to variant image
            $('html, body').animate({//scrollTop: $newImage.offset().top
            }, 250);
          } else {
            // Move selected variant image to top
            $newImage.parent().prependTo($(this.selectors.productImages));
          }
        }
      }

      if (!theme.variables.productPageLoad) {
        theme.variables.productPageLoad = true;
      }
    },
    productImageZoom: function productImageZoom() {
      if (!$(this.selectors.productImagePhoto).length || theme.variables.bpSmall) {
        return;
      }

      $(this.selectors.productImagePhoto).magnificPopup({
        type: 'image',
        mainClass: 'mfp-fade',
        closeOnBgClick: true,
        closeBtnInside: false,
        closeOnContentClick: true,
        removalDelay: 500,
        gallery: {
          enabled: true,
          navigateByImgClick: false,
          arrowMarkup: '<button title="%title%" type="button" class="mfp-arrow mfp-arrow-%dir%"><span class="mfp-chevron mfp-chevron-%dir%"></span></button>',
          tPrev: theme.strings.zoomPrev,
          tNext: theme.strings.zoomNext
        }
      });
    },
    createImageCarousel: function createImageCarousel() {
      if (!$(this.selectors.productImages).length || $(this.selectors.productImagePhoto).length < 2) {
        return;
      }

      $(this.selectors.productImages).slick({
        arrows: false,
        dots: true,
        adaptiveHeight: true
      });
    },
    destroyImageCarousel: function destroyImageCarousel() {
      if (!$(this.selectors.productImages).length) {
        return;
      }

      $(this.selectors.productImages).unslick();
    },
    productPage: function productPage(evt) {
      var moneyFormat = theme.strings.moneyFormat;
      var variant = evt.variant;
      var translations = theme.strings;

      if (variant) {
        // Select a valid variant if available
        if (variant.available) {
          // Available, enable the submit button, change text, show quantity elements
          $(this.selectors.addToCart).removeClass('disabled').prop('disabled', false);
          $(this.selectors.addToCartText).html(translations.addToCart);
          $(this.selectors.quantityElements).show();
        } else {
          // Sold out, disable the submit button, change text, hide quantity elements
          $(this.selectors.addToCart).addClass('disabled').prop('disabled', true);
          $(this.selectors.addToCartText).html(translations.soldOut);
          $(this.selectors.quantityElements).hide();
        }

        $(this.selectors.productPrice).html(theme.Currency.formatMoney(variant.price, moneyFormat)).show(); // Also update and show the product's compare price if necessary

        if (variant.compare_at_price > variant.price) {
          $(this.selectors.comparePrice).html(theme.Currency.formatMoney(variant.compare_at_price, moneyFormat));
          $(this.selectors.priceWrapper).show();
          $(this.selectors.productPrice).addClass('on-sale');
          $(this.selectors.comparePriceA11y).attr('aria-hidden', 'false');
          $(this.selectors.priceA11y).attr('aria-hidden', 'false');
        } else {
          $(this.selectors.priceWrapper).hide();
          $(this.selectors.productPrice).removeClass('on-sale');
          $(this.selectors.comparePriceA11y).attr('aria-hidden', 'true');
        }
      } else {
        // The variant doesn't exist, disable submit button.
        // This may be an error or notice that a specific variant is not available.
        // To only show available variants, implement linked product options:
        $(this.selectors.addToCart).addClass('disabled').prop('disabled', true);
        $(this.selectors.addToCartText).html(translations.unavailable);
        $(this.selectors.quantityElements).hide();
      }
    },
    initStickyProductMeta: function initStickyProductMeta() {
      var $meta = $(this.selectors.meta);
      var $wrapper = $(this.selectors.productWrapper);

      if ($meta.find('#html-product-reviews').length) {
        theme.variables.productPageSticky = false;
        return;
      }

      if (!$meta.length || $(this.selectors.productImagePhoto).length < 2) {
        return;
      } // Don't bother on IE8


      if ($('html').hasClass('lt-ie9')) {
        return;
      } // Force detatch if already detached. Prevent layout issues.


      $meta.trigger('detach.ScrollToFixed'); // Detach and stop if on mobile breakpoint

      if (theme.variables.bpSmall) {
        return;
      }

      var productCopyHeight = $meta.outerHeight();
      var productImagesHeight = $(this.selectors.productImages).height();
      /*============================================================================
        Calculate when to detach fixed element to avoid content overlap.
        Subtract product copy height from the limit because plugin uses offset().top
      ==============================================================================*/

      var calcLimit = $wrapper.offset().top + $wrapper.height();
      calcLimit -= productCopyHeight; // Init sticky if desc shorter than images and fits in viewport

      if (productCopyHeight < productImagesHeight && productCopyHeight < $(window).height()) {
        theme.variables.productPageSticky = true;
        $meta.scrollToFixed({
          limit: calcLimit
        });
      } else {
        theme.variables.productPageSticky = false;
      }
    },
    onUnload: function onUnload() {
      this.$container.off(this.settings.namespace);
      this.destroyImageCarousel();
    }
  });
  return Product;
}();

window.theme = window.theme || {};

theme.Collection = function () {
  function Collection(container) {
    this.selectors = {
      productGridImages: '.grid-uniform .grid-product__image-wrapper',
      $productGridRows: $('.collage-grid__row'),
      productGridPhotosLarge: '.grid__item--large .grid-product__image-link',
      $collectionImage: $('.collection-hero__image')
    };
    var $container = this.$container = $(container);
    this.gridType = $container.data('grid-type');
    this.selectors.$collectionImage.addClass('is-init'); // Enable parallax effect if 3d transforms are supported

    if (!Modernizr.csstransforms3d) {
      return;
    }

    theme.cache.$window.on('scroll', function (evt) {
      var scrolled = theme.cache.$window.scrollTop();
      theme.cache.$collectionImage.css({
        'transform': 'translate3d(0, ' + scrolled / 4.5 + 'px, 0)'
      });
    });
    this.init();
  }

  Collection.prototype = _.assignIn({}, Collection.prototype, {
    init: function init() {
      this.cacheSelectors();

      if (this.gridType === 'collage') {
        this.initCollageGrid();
      } else if (this.gridType === 'grid') {
        this.equalHeights();
      }
    },
    cacheSelectors: function cacheSelectors() {
      cache = {
        $window: $(window),
        $productGridImages: $(this.selectors.productGridImages),
        $productGridRows: $(this.selectors.productGridRows),
        $productGridPhotosLarge: $(this.selectors.productGridPhotosLarge)
      };
    },
    equalHeights: function equalHeights() {
      cache.$window.on('load', resizeElements());
      cache.$window.on('resize', afterResize(function () {
        resizeElements();
      }, 250, 'equal-heights'));

      function resizeElements() {
        cache.$productGridImages.css('height', 'auto').equalHeights();
      }
    },
    initCollageGrid: function initCollageGrid() {
      if (!cache.$productGridRows.length) {
        return;
      }

      ;
      this.collageGridHeights();
      cache.$window.on('resize', theme.debounce(this.collageGridHeights, 500));
    },
    collageGridHeights: function collageGridHeights() {
      if (theme.variables.bpSmall || !cache.$productGridRows.length) {
        return;
      } // calculate image heights for each row of grid images


      for (var i = cache.$productGridRows.length - 1; i >= 0; i--) {
        var $currentRow = $(cache.$productGridRows[i]);
        var $smallImages = $currentRow.find('.grid__item--small .grid-product__image-wrapper');
        var $largeImageWrapper = $currentRow.find('.grid__item--large .grid-product__image-wrapper');
        var $largeImage = $largeImageWrapper.find('.grid-product__image-link'); // calculate the bottom edge of the small image

        var smallImageOffset = $smallImages[1].offsetTop + $smallImages[1].offsetHeight; // calculate the bottom edge of the large image for the row

        var largeImageOffset = $largeImageWrapper[0].offsetTop + $largeImageWrapper[0].offsetHeight; // Depending on which image is lower, increase or decrease the large
        // image size

        if (smallImageOffset > largeImageOffset) {
          var largeImageHeight = $largeImage.height() + (smallImageOffset - largeImageOffset);
        } else {
          var largeImageHeight = $largeImage.height() - (largeImageOffset - smallImageOffset);
        }

        ;
        $largeImage.css('height', largeImageHeight);
      }

      ;
    },
    clearCollageGridHeights: function clearCollageGridHeights() {
      if (!cache.$productGridRows.length) {
        return;
      }

      ;
      cache.$productGridPhotosLarge.removeAttr('style');
    }
  });
  return Collection;
}();

window.theme = window.theme || {};

theme.HeaderSection = function () {
  function Header() {
    timber.drawersInit();
    theme.initCache();
    theme.fitNav();
    theme.resizeLogo();
    theme.searchModal();
    theme.cache.$window.on('load', theme.resizeLogo);
    theme.cache.$window.on('resize', theme.debounce(theme.resizeLogo, 150)); // Check for header absolute position

    if ($('#Hero').hasClass('hero')) {
      $('.header-wrapper').addClass('hero__header');
    } else {
      $('.header-wrapper').removeClass('hero__header');
    }
  }

  return Header;
}();

window.theme = window.theme || {};

theme.FeaturedContentSection = function () {
  function FeaturedContent() {
    theme.styleTextLinks();
  }

  return FeaturedContent;
}();

theme.SlideshowSection = function () {
  function SlideshowSection(container) {
    theme.initCache();
    var $container = this.$container = $(container);
    var sectionId = $container.attr('data-section-id');
    var slideshow = this.slideshow = '#Hero'; //var autoplay = $(this.slideshow).attr('data-autoplay');
    //var autoplay = $(this.slideshow).attr('data-autoplayspeed');

    slickTheme.init({
      $element: $(slideshow),
      parallax: $(slideshow).data('parallax'),
      autoplay: $(slideshow).data('autoplay'),
      autoplaySpeed: $(slideshow).data('autoplayspeed')
    }); // remove header absolute display if slideshow is empty

    if (!$(this.slideshow).hasClass('hero')) {
      $('.header-wrapper').removeClass('hero__header is-light is-dark');
    }
  }

  return SlideshowSection;
}();

theme.SlideshowSection.prototype = _.assignIn({}, theme.SlideshowSection.prototype, {
  onUnload: function onUnload() {
    $(this.slideshow).unslick();
  },
  onSelect: function onSelect() {
    $(this.slideshow).slickPause();
  },
  onDeselect: function onDeselect() {
    $(this.slideshow).slickPlay();
  },
  onBlockSelect: function onBlockSelect(evt) {
    // Ignore the cloned version
    var $slide = $('.slide--' + evt.detail.blockId);
    var slideIndex = $slide.attr('index'); // Go to selected slide, pause autoplay

    $(this.slideshow).slickGoTo(slideIndex).slickPause();
  },
  onBlockDeselect: function onBlockDeselect() {
    // Resume autoplay
    $(this.slideshow).slickPlay();
  }
});
window.theme = window.theme || {};
theme.settings = {
  cartType: "drawer"
};

theme.PasswordHeader = function () {
  function PasswordHeader() {
    this.init();
  }

  PasswordHeader.prototype = _.assignIn({}, PasswordHeader.prototype, {
    init: function init() {
      $('.js-toggle-login-modal').magnificPopup({
        type: 'inline',
        mainClass: 'mfp-fade',
        closeOnBgClick: false,
        closeBtnInside: false,
        closeOnContentClick: false,
        tClose: "Close (Esc)",
        removalDelay: 500,
        callbacks: {
          open: function open() {
            window.setTimeout(function () {
              document.getElementById('password').focus();
            }, 50);
          },
          close: function close() {
            window.setTimeout(function () {
              document.getElementById('email').focus();
            }, 50);
          }
        }
      });

      if ($('.storefront-password-form .errors').size()) {
        $('.js-toggle-login-modal').click();
      }
    }
  });
  return PasswordHeader;
}();

theme.variables = {
  productPageLoad: false,
  productPageSticky: true,
  // Breakpoints from src/stylesheets/global/variables.scss.liquid
  mediaQuerySmall: 'screen and (max-width: 590px)',
  mediaQueryMedium: 'screen and (min-width: 591px) and (max-width: 768px)',
  mediaQueryMediumUp: 'screen and (min-width: 591px)',
  mediaQueryLarge: 'screen and (min-width: 769px)',
  bpSmall: false
};

theme.initCache = function () {
  theme.cache = {
    $window: $(window),
    $html: $('html'),
    $body: $('body'),
    $drawerRight: $('.drawer--right'),
    $hero: $('#Hero'),
    $customSelect: $('.js-selector'),
    $collectionImage: $('.collection-hero__image'),
    $siteNav: $('.site-nav'),
    $cartBuggle: $('.cart-link__bubble'),
    $logo: $('.site-header__logo img'),
    $toggleSearchModal: $('.js-toggle-search-modal'),
    $productImages: $('.product-single__photos'),
    $productImagePhoto: $('.product-single__photo'),
    $indentedRteImages: $('.rte--indented-images'),
    $productGridRows: $('.collage-grid__row'),
    $productGridPhotosLarge: $('.grid__item--large .grid-product__image-link'),
    // Equal height elements
    $productGridImages: $('.grid-uniform .grid-product__image-wrapper'),
    $returnLink: $('.return-link'),
    $quickshop: $('.quick_shop'),
    loginmodal: $('.js-login-modal'),
    appmodal: $('.js-app-modal'),
    socialmodal: $('.js-social-modal')
  };
};

theme.init = function () {
  theme.initCache();
  theme.setBreakpoints();
  theme.fitNav();
  theme.afterCartLoad();
  theme.checkoutIndicator();
  theme.returnLink();
  theme.styleTextLinks();
  theme.searchModal();
  theme.quickShop();
  theme.loginModal();
  theme.appModal();
  theme.socialModal();
  theme.toTop();
  theme.mobileNavToggleLeft();
  theme.mainhomejs();
  theme.cartjs();
  theme.cmwljs();
  theme.detailjs();
  theme.categoriesMenuMobile(); //if ( tada_newsletter)  theme.ModalNewsletter();
  // Functions to run on load so image sizes can be calculated

  theme.cache.$window.on('load', theme.resizeLogo);
  theme.cache.$window.on('load', theme.articleImages); // Functions to re-run on resize

  theme.cache.$window.on('resize', theme.debounce(theme.resizeLogo, 150));
};

theme.returnLink = function () {
  if (!document.referrer || !theme.cache.$returnLink.length || !window.history.length) {
    return;
  }

  theme.cache.$returnLink.on('click', theme.backButton);
};

theme.backButton = function () {
  var referrerDomain = urlDomain(document.referrer);
  var shopDomain = urlDomain(document.url);

  if (shopDomain === referrerDomain) {
    history.back();
    return false;
  }

  function urlDomain(url) {
    var a = document.createElement('a');
    a.href = url;
    return a.hostname;
  }
};

theme.setBreakpoints = function () {
  if (!theme.cache.$html.hasClass('lt-ie9')) {
    enquire.register(theme.variables.mediaQuerySmall, {
      match: function match() {
        if (theme.settings.gridType === 'collage') {
          theme.clearCollageGridHeights();
        }

        theme.variables.bpSmall = true;
      },
      unmatch: function unmatch() {
        theme.variables.bpSmall = false;
      }
    });
  }
};

theme.fitNav = function () {
  // Measure children of site nav on load and resize.
  // If wider than parent, switch to mobile nav.
  controlNav();
  theme.cache.$window.on('load', controlNav);
  theme.cache.$window.on('resize', theme.debounce(controlNav, 150));

  function controlNav() {
    // Subtract 20 from width to account for inline-block spacing
    var navWidth = theme.cache.$siteNav.parent().outerWidth() - 20;
    var navItemWidth = 0;
    theme.cache.$siteNav.find('> li').each(function () {
      var $el = $(this);

      if (!$el.hasClass('site-nav--compress__menu')) {
        // Round up to be safe
        navItemWidth += Math.ceil($(this).width());
      }
    });

    if (navItemWidth > navWidth) {//theme.cache.$siteNav.addClass('site-nav--compress');
    } else {//theme.cache.$siteNav.removeClass('site-nav--compress');
      }

    theme.cache.$siteNav.addClass('site-nav--init');
  }
};

theme.resizeLogo = function () {
  // Using .each() as there can be a reversed logo too
  theme.cache.$logo.each(function () {
    var $el = $(this),
        logoWidthOnScreen = $el.width(),
        containerWidth = $el.closest('.grid__item').width(); // If image exceeds container, let's make it smaller

    if (logoWidthOnScreen > containerWidth) {
      $el.css('maxWidth', containerWidth);
    } else {
      $el.removeAttr('style');
    }
  });
};

theme.sizeCartDrawerFooter = function () {
  // Stop if our drawer doesn't have a fixed footer
  if (!theme.cache.$drawerRight.hasClass('drawer--has-fixed-footer')) {
    return;
  } // Elements are reprinted regularly so selectors are not cached


  var $cartFooter = $('.ajaxcart__footer').removeAttr('style'),
      $cartInner = $('.ajaxcart__inner').removeAttr('style'),
      cartFooterHeight = $cartFooter.outerHeight();
  $cartInner.css('bottom', cartFooterHeight);
  $cartFooter.css('height', cartFooterHeight);
};

theme.afterCartLoad = function () {
  theme.cache.$body.on('ajaxCart.afterCartLoad', function (evt, cart) {
    // Open cart drawer
    timber.RightDrawer.open(); // Size the cart's fixed footer

    theme.sizeCartDrawerFooter(); // Show cart bubble in nav if items exist

    if (cart.items.length > 0) {
      theme.cache.$cartBuggle.addClass('cart-link__bubble--visible');
    } else {
      theme.cache.$cartBuggle.removeClass('cart-link__bubble--visible');
    }
  });
};

theme.checkoutIndicator = function () {
  // Add a loading indicator on the cart checkout button (/cart and drawer)
  theme.cache.$body.on('click', '.cart__checkout', function () {
    $(this).addClass('btn--loading');
  });
};

theme.searchModal = function () {
  if (!theme.cache.$toggleSearchModal.length) {
    return;
  }

  theme.cache.$toggleSearchModal.magnificPopup({
    type: 'inline',
    mainClass: 'mfp-fade',
    closeOnBgClick: true,
    closeBtnInside: false,
    closeOnContentClick: false,
    alignTop: true,
    removalDelay: 500
  });
};

theme.quickShop = function () {
  if (!theme.cache.$quickshop.length) {
    return;
  }

  theme.cache.$quickshop.magnificPopup({
    type: 'inline',
    mainClass: 'mfp-fade',
    closeOnBgClick: true,
    closeBtnInside: false,
    closeOnContentClick: false,
    alignTop: true,
    removalDelay: 500
  });
};

theme.loginModal = function () {
  if (!theme.cache.loginmodal.length) {
    return;
  }

  theme.cache.loginmodal.magnificPopup({
    type: 'inline',
    mainClass: 'mfp-fade',
    closeOnBgClick: true,
    closeBtnInside: false,
    closeOnContentClick: false,
    alignTop: true,
    removalDelay: 500
  });
};

theme.appModal = function () {
  if (!theme.cache.appmodal.length) {
    return;
  }

  theme.cache.appmodal.magnificPopup({
    type: 'inline',
    mainClass: 'mfp-fade',
    closeOnBgClick: true,
    closeBtnInside: false,
    closeOnContentClick: false,
    alignTop: true,
    removalDelay: 500
  });
};

theme.socialModal = function () {
  if (!theme.cache.socialmodal.length) {
    return;
  }

  theme.cache.socialmodal.magnificPopup({
    type: 'inline',
    mainClass: 'mfp-fade',
    closeOnBgClick: true,
    closeBtnInside: false,
    closeOnContentClick: false,
    alignTop: true,
    removalDelay: 500
  });
};

theme.mainhomejs = function () {
  if ($(".home-brandslider").length) {
    $(".home-brandslider").owlCarousel({
      navigation: true,
      pagination: false,
      autoPlay: 5000,
      paginationSpeed: 800,
      items: 3,
      slideSpeed: 200,
      rewindSpeed: 1000,
      itemsDesktop: [1600, 3],
      itemsDesktopSmall: [1200, 3],
      itemsTablet: [919, 3],
      itemsTabletSmall: [768, 2],
      itemsMobile: [360, 1],
      navigationText: ['<i class="fa fa-angle-left" title="Previous"></i>', '<i class="fa fa-angle-right" title="Next"></i>']
    });
  }

  var revapi;
  jQuery(document).ready(function () {
    revapi = jQuery('.tp-banner').css('visibility', 'visible').show().revolution({
      delay: 5000,
      startwidth: 570,
      startheight: 378,
      autoHeight: "on",
      navigationArrows: "solo",
      fullWidth: "off",
      fullScreen: "off",
      stopAfterLoops: -1,
      stopAtSlide: -1,
      forceFullWidth: "off",
      fullScreenOffsetContainer: "",
      lazyLoad: "on",
      videoJsPath: "rs-plugin/videojs/"
    });
  });
  $(document).ready(function () {
    var allCollHeight = $('#html-section-home-vertical-menu').find('.sdcollections-list').height() + 9;

    function isTablet() {
      var userAgent = navigator.userAgent.toLowerCase();
      var isTablet = /(ipad|tablet|(android(?!.*mobile))|(windows(?!.*phone)(.*touch))|kindle|playbook|silk|(puffin(?!.*(IP|AP|WP))))/.test(userAgent);
      return isTablet;
    }
    /**
    * @property {Number} dropdownHeight
    * @property {Number} halfDropdownHeight
    * @property {Number} distanceCurrentToTop
    * @property {Number} distanceCurrentToBot
    * @property {Object} dropdownEle
    *
    * setPosPopup(): set postion for dropdown when hover to category item
    * if dropdownHeight >= allCollHeight: set the dropdown at top and add class 'dropdown-long'
    *
    * if(distanceCurrentToTop < halfDropdownHeight) && (distanceCurrentToBot > halfDropdownHeight)
    *   set the dropdown at top and add class 'dropdown-short'
    *
    * if(distanceCurrentToTop < halfDropdownHeight) && (distanceCurrentToBot > halfDropdownHeight)
    *   set the dropdown at between add class 'dropdown-short'
    *
    * else
    *   set the dropdown at bottom add class 'dropdown-short'
    */


    function calculatorPositionDropdown() {
      var hasOpenClass = $('#html-section-home-vertical-menu').find('.allcollections-content').hasClass('is-openning');
      var allCollHeight = $('#html-section-home-vertical-menu').height() + 9;

      if (hasOpenClass) {
        allCollHeight = $('#html-section-home-vertical-menu').find('.sdcollections-list').height() + 9;
      }

      var dropdownHeight = $(this).find(".site-nav__dropdown").outerHeight();
      var halfDropdownHeight = dropdownHeight / 2;
      var distanceCurrentToTop = this.offsetTop;
      var distanceCurrentToBot = allCollHeight - distanceCurrentToTop;
      var dropdownEle = $(this).find(".site-nav__dropdown");

      if (dropdownHeight >= allCollHeight) {
        $(this).addClass('dropdown-long');
        $(dropdownEle).css('top', 0);
      } else if (distanceCurrentToTop < halfDropdownHeight && distanceCurrentToBot > halfDropdownHeight) {
        $(this).addClass('dropdown-short');
        $(dropdownEle).css('top', 0);
      } else if (distanceCurrentToTop > halfDropdownHeight && distanceCurrentToBot > halfDropdownHeight) {
        $(this).addClass('dropdown-short');
        var dropdownTop = (allCollHeight - dropdownHeight) / 2;

        if (isTablet()) {
          dropdownTop = dropdownTop / 2;
        }

        $(dropdownEle).css('top', dropdownTop);
      } else {
        $(this).addClass('dropdown-short dropdown-top');
        var dropdownTop = allCollHeight - dropdownHeight;
        var hasOpenClass = $('#html-section-home-vertical-menu').find('.allcollections-content').hasClass('is-openning');

        if (!hasOpenClass && !isTablet) {
          dropdownTop += 41;
        }

        $(dropdownEle).css('top', dropdownTop);
        $(dropdownEle).css('top', allCollHeight - dropdownHeight);
      }
    }

    function setPosPopup() {
      if (!isTablet()) {
        $("ul.sdcollections-list .site-nav__item").on('mouseenter', function () {
          calculatorPositionDropdown.call(this);
        });
      } else {
        $("ul.sdcollections-list .site-nav__item").on('click', function () {
          calculatorPositionDropdown.call(this);
        });
      }
    }

    function setWidthPopup() {
      var dropwidth = $('.wrap_main_slideshow').width() + $('.wrap_banner').width() + 41;

      if ($('.wrap_main_slideshow').length || !$('.wrap_banner').length) {
        dropwidth = $('.wrapper-allcoll').width() - $('.allcollections-content').width();
      }

      $('.site-nav__item.site-nav--has-dropdown.megacol-3 ul.site-nav__dropdown').css("width", dropwidth);
    }

    $(window).on('resize', function () {
      if ($(window).innerWidth() >= 769) {
        setPosPopup();
        setWidthPopup();
      } else {
        $('#html-section-home-vertical-menu').find('.site-nav__dropdown').css('width', 'auto');
      }
    });

    if ($(window).innerWidth() >= 769) {
      setTimeout(function () {
        setPosPopup.call();
        setWidthPopup.call();
      });
    }
  });
  var liftoffTime = new Date('2020,1,25');
  $('#timer-1525446629879').countdown({
    until: liftoffTime
  });

  if ($(".product-slider-1525446629879").length) {
    $(".product-slider-1525446629879").owlCarousel({
      navigation: true,
      pagination: false,
      autoPlay: 5000,
      paginationSpeed: 800,
      items: 5,
      slideSpeed: 200,
      rewindSpeed: 1000,
      itemsDesktop: [1600, 5],
      itemsDesktopSmall: [1200, 4],
      itemsTablet: [919, 3],
      itemsTabletSmall: [768, 2],
      itemsMobile: [360, 1],
      navigationText: ['<i class="fa fa-angle-left" title="Previous"></i>', '<i class="fa fa-angle-right" title="Next"></i>']
    });
  }

  $(function () {
    $(".meter > span").each(function () {
      $(this).data("origWidth", $(this).width()).width(0).animate({
        width: $(this).data("origWidth")
      }, 700);
    });
  });

  if ($(".brandslider_1539617329459").length) {
    $(".brandslider_1539617329459").owlCarousel({
      navigation: true,
      pagination: false,
      autoPlay: 5000,
      paginationSpeed: 800,
      items: 3,
      slideSpeed: 200,
      rewindSpeed: 1000,
      itemsDesktop: [1600, 3],
      itemsDesktopSmall: [1200, 3],
      itemsTablet: [919, 3],
      itemsTabletSmall: [768, 1],
      itemsMobile: [360, 1],
      navigationText: ['<i class="fa fa-angle-left" title="Previous"></i>', '<i class="fa fa-angle-right" title="Next"></i>']
    });
  }

  if ($(".searchslider_1542810603284").length) {
    $(".searchslider_1542810603284").slick({
      dots: false,
      speed: 10,
      nextArrow: "<span class='slick-next'><i class='fa fa-share' aria-hidden='true'></i> See more</span>",
      slidesToShow: 5,
      slidesToScroll: 5,
      responsive: [{
        breakpoint: 1260,
        settings: {
          slidesToScroll: 5,
          slidesToShow: 5
        }
      }, {
        breakpoint: 1024,
        settings: {
          slidesToScroll: 4,
          slidesToShow: 4
        }
      }, {
        breakpoint: 800,
        settings: {
          slidesToScroll: 2,
          slidesToShow: 2
        }
      }, {
        breakpoint: 500,
        settings: {
          slidesToScroll: 1,
          slidesToShow: 1
        }
      }, {
        breakpoint: 320,
        settings: {
          slidesToScroll: 1,
          slidesToShow: 1
        }
      }]
    });
  }

  if ($(".bestsellerslider_1542896197880").length) {
    $(".bestsellerslider_1542896197880").owlCarousel({
      navigation: true,
      pagination: false,
      autoPlay: false,
      paginationSpeed: 800,
      items: 3,
      slideSpeed: 200,
      rewindSpeed: 1000,
      itemsDesktop: [1600, 3],
      itemsDesktopSmall: [1200, 3],
      itemsTablet: [919, 2],
      itemsTabletSmall: [768, 1],
      itemsMobile: [360, 1],
      navigationText: ['<i class="fa fa-angle-left" title="Previous"></i>', '<i class="fa fa-angle-right" title="Next"></i>']
    });
  }

  $(document).ready(function () {
    var selector = '.product-grid-1539877863095 .shuffle-element';
    $(selector).shuffle();
    size_li = $("#loadMoreContainer_1539877863095 .loadmore_element").size();

    if ($(window).innerWidth() >= 1024) {
      x = 10;
      y = 5;
      $('#loadMoreContainer_1539877863095 .loadmore_element:lt(' + x + ')').show();
      $('#loadMore_1539877863095').click(function () {
        x = x + y <= size_li ? x + y : size_li;
        $('#loadMoreContainer_1539877863095 .loadmore_element:lt(' + x + ')').show();
      });
      $('#showLess_1539877863095').click(function () {
        x = x - y < 0 ? 3 : x - y;
        $('#loadMoreContainer_1539877863095 .loadmore_element').not(':lt(' + x + ')').hide();
      });
    }

    if ($(window).innerWidth() >= 768 && $(window).innerWidth() < 1024) {
      x = 8;
      y = 4;
      $('#loadMoreContainer_1539877863095 .loadmore_element:lt(' + x + ')').show();
      $('#loadMore_1539877863095').click(function () {
        x = x + y <= size_li ? x + y : size_li;
        $('#loadMoreContainer_1539877863095 .loadmore_element:lt(' + x + ')').show();
      });
      $('#showLess_1539877863095').click(function () {
        x = x - y < 0 ? 3 : x - y;
        $('#loadMoreContainer_1539877863095 .loadmore_element').not(':lt(' + x + ')').hide();
      });
    }

    if ($(window).innerWidth() < 768) {
      x = 6;
      y = 4;
      $('#loadMoreContainer_1539877863095 .loadmore_element:lt(' + x + ')').show();
      $('#loadMore_1539877863095').click(function () {
        x = x + y <= size_li ? x + y : size_li;
        $('#loadMoreContainer_1539877863095 .loadmore_element:lt(' + x + ')').show();
      });
      $('#showLess_1539877863095').click(function () {
        x = x - y < 0 ? 3 : x - y;
        $('#loadMoreContainer_1539877863095 .loadmore_element').not(':lt(' + x + ')').hide();
      });
    }
  });
  $(".lang-switcher").on("click", function (e) {
    e.preventDefault();
    $this = $(this);
    $this.parent('.switcher').find('.option').toggleClass('active');
  });
  $(".lang-sub").on("click", function (e) {
    e.preventDefault();
    $this = $(this);
    $this.parents('.switcher').find('.lang-switcher a').html($this.html());
  });
  $(".currency-switcher").on("click", function (e) {
    e.preventDefault();
    $this = $(this);
    $this.parent('.switcher').find('.option').toggleClass('active');
  });
  $(".curr-sub").on("click", function (e) {
    e.preventDefault();
    $this = $(this);
    $this.parents('.switcher').find('.currency-switcher a').html($this.html());
  });
  $(".link-block .fa").on("click", function (e) {
    if (!$(this).hasClass('active')) {
      $(this).addClass('active');
      $(this).parents('.link-block').find('.content').show(700);
    } else {
      $(this).removeClass('active');
      $(this).parents('.link-block').find('.content').hide(700);
    }
  }); // $( ".allcollections-title .icon-main-toggle" ).on( "click", function(e) {
  //   if(!$(this).hasClass('active')){
  //     $(this).addClass('active');
  //     $('.allcollections-content').show(700);
  //   } else {
  //     $(this).removeClass('active');
  //     $('.allcollections-content').hide(700);
  //   }
  // });
  // $( ".site-nav__item .site-nav__link .click_arrow" ).on( "click", function(e) {
  //   if(!$(this).hasClass('active')){
  //     $(this).addClass('active');
  //     $(this).parents('.site-nav__item').find('.site-nav__dropdown').show(700);
  //   } else {
  //     $(this).removeClass('active');
  //     $(this).parents('.site-nav__item').find('.site-nav__dropdown').hide(700);
  //   }
  // });
};

theme.cartjs = function () {
  $('.ajaxcart__qty').on('click', '.ajaxcart__qty--plus', function () {
    var qty = $(this).parent('.ajaxcart__qty').find('input.ajaxcart__qty-num');
    qty.val(parseInt(qty.val()) + 1);
  });
  $('.ajaxcart__qty').on('click', '.ajaxcart__qty--minus', function () {
    var qty = $(this).parent('.ajaxcart__qty').find('input.ajaxcart__qty-num');
    if (parseInt(qty.val()) > 1) qty.val(parseInt(qty.val()) - 1);
  });
  $('.js-qty').on('click', '.js-qty__adjust--plus', function () {
    var qty = $(this).parent('.js-qty').find('input.js-qty__num');
    qty.val(parseInt(qty.val()) + 1);
  });
  $('.js-qty').on('click', '.js-qty__adjust--minus', function () {
    var qty = $(this).parent('.js-qty').find('input.js-qty__num');
    if (parseInt(qty.val()) > 1) qty.val(parseInt(qty.val()) - 1);
  });
  $(".product-single__add-to-cart .AddToCart").click(function (e) {
    e.preventDefault();
    var $this = $(this);
    $this.find('.AddToCartText').html("<i class='fa fa-circle-o-notch fa-spin fa-3x fa-fw'></i> Adding to Cart");
    $('.grid-view-item .grid-normal-display .quickbuy').addClass('is-adding');
    $this.addClass('is-adding');
    setTimeout(function () {
      $this.find('.AddToCartText').html("<i class='fa fa-check fa-3x fa-fw'></i> Added to Cart");
    }, 1000);
    setTimeout(function () {
      $this.find('.AddToCartText').html("Add to Cart");
      $('.grid-view-item .grid-normal-display .quickbuy').removeClass('is-adding');
      $this.removeClass('is-adding');
      timber.RightDrawer.open();
    }, 1700);
  });
  $(".product-single__buynow .Buynow").click(function (e) {
    e.preventDefault();
    var $this = $(this);
    $this.find('.BuynowText').html("<i class='fa fa-circle-o-notch fa-spin fa-3x fa-fw'></i> Adding to Cart");
    setTimeout(function () {
      $this.find('.BuynowText').html("<i class='fa fa-check fa-3x fa-fw'></i> Added to Cart");
    }, 1000);
    setTimeout(function () {
      $this.find('.BuynowText').html("Add to Cart");
      location.href = "./cart.html";
    }, 1700);
  });
};

theme.cmwljs = function () {
  // wishlist
  if (localStorage.getItem('wishlist-id') == '[]' || localStorage.getItem('wishlist-id') == null) {
    $('.wlnumber').html('0');
  } else {
    var activeID = [];
    activeID = JSON.parse(localStorage.getItem('wishlist-id'));
    $('.wlnumber').html(activeID.length);

    for (i = 0; i < activeID.length; i++) {
      var classadded = '.wl-' + activeID[i];
      $(classadded).addClass("wlc-added").removeClass("wlc").attr("title", "Wishlist Added");
    }
  }

  $("a.wlc").on("click", function (e) {
    e.preventDefault();

    if (!$(this).hasClass('wlc-added')) {
      var storeID = [];
      if (localStorage.getItem('wishlist-id') == null) storeID = [];else storeID = JSON.parse(localStorage.getItem('wishlist-id'));
      storeID.push($(this).data("wishlistid"));
      localStorage.setItem('wishlist-id', JSON.stringify(storeID));
      var wlicon = $('#float-wishlist');
      var imgtodrag = $(this).closest('.grid-view-item').find("img").eq(0);

      if (imgtodrag) {
        var imgclone = imgtodrag.clone().offset({
          top: imgtodrag.offset().top,
          left: imgtodrag.offset().left
        }).css({
          'opacity': '0.5',
          'position': 'absolute',
          'height': '150px',
          'width': '150px',
          'z-index': '100'
        }).appendTo($('body')).animate({
          'top': wlicon.offset().top + 10,
          'left': wlicon.offset().left + 10,
          'width': 75,
          'height': 75
        }, 1000);
        $('#float-wishlist').css("background", "red");
        setTimeout(function () {
          $('#float-wishlist').css("background", "");
        }, 1500);
        imgclone.animate({
          'width': 0,
          'height': 0
        }, function () {
          $(this).detach();
        });
      }

      setTimeout(function () {
        $('.wlnumber').html(storeID.length);
      }, 1000);
      $(this).addClass("wlc-added").removeClass("wlc").attr("title", "Wishlist Added");
    }
  }); // Compare

  if (localStorage.getItem('compare-id') == '[]' || localStorage.getItem('compare-id') == null) {
    $('.cpnumber').html('0');
  } else {
    var activeID = [];
    activeID = JSON.parse(localStorage.getItem('compare-id'));
    $('.cpnumber').html(activeID.length);

    for (i = 0; i < activeID.length; i++) {
      var classadded = '.cm-' + activeID[i];
      $(classadded).addClass("cmc-added").removeClass("cmc").attr("title", "Compare Added");
    }
  }

  $("a.cmc").on("click", function (e) {
    e.preventDefault();

    if (!$(this).hasClass('cmc-added')) {
      var storeID2 = [];
      if (localStorage.getItem('compare-id') == null) storeID2 = [];else storeID2 = JSON.parse(localStorage.getItem('compare-id'));
      storeID2.push($(this).data("compareid"));
      localStorage.setItem('compare-id', JSON.stringify(storeID2));
      var wlicon = $('#float-compare');
      var imgtodrag = $(this).closest('.grid-view-item').find("img").eq(0);

      if (imgtodrag) {
        var imgclone = imgtodrag.clone().offset({
          top: imgtodrag.offset().top,
          left: imgtodrag.offset().left
        }).css({
          'opacity': '0.5',
          'position': 'absolute',
          'height': '150px',
          'width': '150px',
          'z-index': '100'
        }).appendTo($('body')).animate({
          'top': wlicon.offset().top + 10,
          'left': wlicon.offset().left + 10,
          'width': 75,
          'height': 75
        }, 1000);
        $('#float-compare').css("background", "red");
        setTimeout(function () {
          $('#float-compare').css("background", "");
        }, 1500);
        imgclone.animate({
          'width': 0,
          'height': 0
        }, function () {
          $(this).detach();
        });
      }

      setTimeout(function () {
        $('.cpnumber').html(storeID2.length);
      }, 1000);
      $(this).addClass("cmc-added").removeClass("cmc").attr("title", "Compare Added");
    }
  });
};

theme.detailjs = function () {
  if ($(window).innerWidth() <= 580) {
    $('#ProductPhoto img').removeAttr('id');
  }

  $('.product-single__thumbnails').owlCarousel({
    navigation: true,
    pagination: false,
    autoPlay: false,
    items: 4,
    slideSpeed: 200,
    paginationSpeed: 1000,
    rewindSpeed: 1000,
    itemsDesktop: [1199, 4],
    itemsDesktopSmall: [979, 4],
    itemsTablet: [768, 2],
    itemsTabletSmall: [540, 2],
    itemsMobile: [320, 2]
  });
  $(".thumb__element a").click(function (e) {
    e.preventDefault();
    var newimage = $(this).attr('src');
    console.log(newimage);
  });
  if ($(window).innerWidth() > 767) $("#ProductPhotoImg").elevateZoom();
  $('#tabs-information').easytabs({
    animationSpeed: 'fast',
    updateHash: false
  });
  $('.related-slider').owlCarousel({
    navigation: true,
    pagination: false,
    autoPlay: false,
    items: 4,
    slideSpeed: 200,
    paginationSpeed: 1000,
    rewindSpeed: 1000,
    itemsDesktop: [1199, 4],
    itemsDesktopSmall: [979, 3],
    itemsTablet: [768, 2],
    itemsTabletSmall: [540, 2],
    itemsMobile: [360, 1],
    navigationText: ['<i class="fa fa-angle-left" title="Previous"></i>', '<i class="fa fa-angle-right" title="Next"></i>']
  });
};

theme.thumbGallerySlider = function () {
  if ($('.thumb__element').size() > 0) {
    $('.product-single__thumbnails').owlCarousel({
      navigation: true,
      pagination: false,
      autoPlay: true,
      items: 4,
      slideSpeed: 200,
      paginationSpeed: 1000,
      rewindSpeed: 1000,
      itemsDesktop: [1199, 4],
      itemsDesktopSmall: [979, 3],
      itemsTablet: [768, 3],
      itemsTabletSmall: [540, 2],
      itemsMobile: [360, 2]
    });
  }
};

theme.clearCollageGridHeights = function () {
  if (!theme.cache.$productGridRows.length) {
    return;
  }

  ;
  theme.cache.$productGridPhotosLarge.removeAttr('style');
};

theme.articleImages = function () {
  if (!theme.cache.$indentedRteImages.length) {
    return;
  }

  theme.cache.$indentedRteImages.find('img').each(function () {
    var $el = $(this);
    var attr = $el.attr('style'); // Check if undefined or float: none

    if (!attr || attr == 'float: none;') {
      // Remove grid-breaking styles if image isn't wider than parent
      if ($el.width() < theme.cache.$indentedRteImages.width()) {
        $el.addClass('rte__no-indent');
      }
    }
  });
};

theme.toTop = function () {
  function o(o) {
    var l = $("#scroll-to-top");
    l.removeClass("off on"), l.addClass("on" == o ? "on" : "off");
  }

  $(window).scroll(function () {
    var l = $(this).scrollTop(),
        n = $(this).height();
    if (l > 0) var t = l + n / 2;else var t = 1;
    o(1e3 > t && n > t ? "off" : "on");
  }), $("#scroll-to-top").click(function (o) {
    o.preventDefault(), $("body,html").animate({
      scrollTop: 0
    }, 800, "swing");
  });
};

theme.ModalNewsletter = function () {
  if (localStorage.getItem('newsletter') == null) {
    var el = $('#newslettermodal');

    if (el.length) {
      $('#newslettermodal').removeClass("hide");
      $.magnificPopup.open({
        items: {
          src: el
        },
        type: 'inline'
      });
    }

    var object = {
      value: "value",
      timestamp: new Date().getTime()
    };
    localStorage.setItem("ntls", JSON.stringify(object));
    localStorage.setItem('newsletter', "active");
  } else {
    var object = JSON.parse(localStorage.getItem("ntls")),
        dateString = object.timestamp,
        now = new Date().getTime().toString();
    totaltime = now - dateString;
    var count = new Date(totaltime).getDate(); //console.log(count);

    if (count > 7) {
      localStorage.removeItem('newsletter');
      var el = $('#newslettermodal');

      if (el.length) {
        $('#newslettermodal').removeClass("hide");
        $.magnificPopup.open({
          items: {
            src: el
          },
          type: 'inline'
        });
      }

      var object = {
        value: "value",
        timestamp: new Date().getTime()
      };
      localStorage.setItem("ntls", JSON.stringify(object));
      localStorage.setItem('newsletter', "active");
    }
  }
};

theme.mobileNavToggleLeft = function () {
  $('.site-mobileNav-bar').on('click', function () {
    $(this).toggleClass('active');
    $('body').toggleClass('mobileNav-body-open');
    $('#MobileNav').toggleClass('mobileNav-div-open');
  });
  $('.mobileNav-icon-close').on('click', function () {
    $('body').removeClass('mobileNav-body-open');
    $('#MobileNav').removeClass('mobileNav-div-open');
  });
  $('.mobileNav-menulv1-button').on('click', function () {
    $(this).toggleClass('button-is-click');
    $(this).closest('.mobile-nav__item-menulv1').toggleClass('menu-is-open');
  });
  $('.mobileNav-menulv2-button').on('click', function () {
    $(this).toggleClass('button-is-click');
    $(this).closest('.mobile-nav__item-menulv2').toggleClass('menu-is-open');
    $(this).closest('.mobile-nav__item-menulv1').addClass('menu-is-open');
  });
  $('.mobileNav-menulv3-button').on('click', function () {
    $(this).toggleClass('button-is-click');
    $(this).closest('.mobile-nav__item-menulv3').toggleClass('menu-is-open');
    $(this).closest('.mobile-nav__item-menulv2').toggleClass('menu-is-open');
    $(this).closest('.mobile-nav__item-menulv1').addClass('menu-is-open');
  });
};

theme.styleTextLinks = function () {
  $('.rte').find('a:not(:has(img))').addClass('text-link');
};

$(document).ready(function () {
  theme.init();
});
$("#html-section-footer .footer-main .heading").on("click", function () {
  $(this).toggleClass("open");
});

theme.categoriesMenuMobile = function () {
  var that = this;

  function calculatorHeightOfCateMobile() {
    setTimeout(function () {
      var allCollectionsContentClass = $('.wrap_allcoll .allcollections-content');
      var sdcollectionsListClass = allCollectionsContentClass.find('.sdcollections-list');
      var allCollectionsTitleClass = $('.wrap_allcoll .allcollections-title');
      var wrapSlideshowClass = $('.wrap_main_slideshow');
      var heightOfContentWrapColl = wrapSlideshowClass.outerHeight() - allCollectionsTitleClass.outerHeight();

      if (sdcollectionsListClass.height() > heightOfContentWrapColl && $('body').hasClass('template-index')) {
        allCollectionsContentClass.addClass('is-overlap');
      } else {
        allCollectionsContentClass.removeClass('is-overlap');
      }

      allCollectionsContentClass.css({
        'height': heightOfContentWrapColl + 'px'
      });
    }, 500);
  }

  calculatorHeightOfCateMobile.call(this);
  $(window).on('resize', function () {
    calculatorHeightOfCateMobile.call(that);
  });
  $('.click_arrow').on('click', function (event) {
    event.preventDefault();
    var closestlink = $(this).closest('.site-nav__link');
    var closestitem = $(this).closest('.site-nav__item');
    var closestdrop = $(this).closest('.site-nav__item').find('.site-nav__dropdown');
    $('.click_arrow').not($(this)).removeClass('clicking');
    $('.site-nav__link').not(closestlink).removeClass('clicking');
    $('.site-nav__item').not(closestitem).removeClass('clicking');
    $('.site-nav__dropdown').not(closestdrop).removeClass('clicking');
    if ($(this).hasClass('clicking')) $(this).removeClass('clicking');else $(this).addClass('clicking');
    if (closestlink.hasClass('clicking')) closestlink.removeClass('clicking');else closestlink.addClass('clicking');
    if (closestitem.hasClass('clicking')) closestitem.removeClass('clicking');else closestitem.addClass('clicking');
    if (closestdrop.hasClass('clicking')) closestdrop.removeClass('clicking');else closestdrop.addClass('clicking');
  });
  $(".icon-main-toggle").on('click', function () {
    $(this).toggleClass("is-openning");
    if ($(this).hasClass("is-openning")) $(this).find("i").removeClass("fa-caret-down").addClass("fa-close");else $(this).find("i").addClass("fa-caret-down").removeClass("fa-close");
    $(this).closest('.allcollections-title').toggleClass('is-openning');
    $(this).closest('#html-section-home-vertical-menu').toggleClass('is-openning');
    $(this).closest('#html-section-home-vertical-menu').find('.allcollections-content').toggleClass('is-openning');
  });
  $(".all-collections .allcollections-title").click(function () {
    $(this).toggleClass('opendrop');
  });
  var navHeadingClass = $('.wrap_allcoll .sdcollections-list .site-nav__dropdown .site-nav__heading');
  navHeadingClass.on('click', function (event) {
    event.preventDefault();
    navHeadingClass.not($(this)).removeClass('open-sub');
    if ($(this).hasClass('open-sub')) $(this).removeClass('open-sub');else $(this).addClass('open-sub');
  }); // radom watching

  var watchingmin = $('.watching-count').data('watchingmin');
  var watchingmax = $('.watching-count').data('watchingmax');
  var r1 = Math.floor(Math.random() * (watchingmax - watchingmin + 1) + watchingmin);
  $('.watching-count').html(r1);
  setInterval(function () {
    var r1 = Math.floor(Math.random() * (watchingmax - watchingmin + 1) + watchingmin);
    $('.watching-count').html(r1);
  }, 5000); // random order

  var ordermin = $('.order-count').data('ordermin');
  var ordermax = $('.order-count').data('ordermax');
  var r2 = Math.floor(Math.random() * (ordermax - ordermin + 1) + ordermin);
  $('.order-count').html(r2); // random qty

  var qtymin = $('.qty-count').data('qtymin');
  var qtymax = $('.qty-count').data('qtymax');
  var r3 = Math.floor(Math.random() * (qtymax - qtymin + 1) + qtymin);
  var percent = r3 * 100 / qtymax;
  var getpercent = percent + '%';
  $('.qty-count').html(r3);
  $('.order-process').css("width", getpercent);
};
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../node_modules/webpack/buildin/module.js */ "./node_modules/webpack/buildin/module.js")(module), __webpack_require__(/*! ./../../../node_modules/webpack/buildin/global.js */ "./node_modules/webpack/buildin/global.js")))

/***/ }),

/***/ 14:
/*!****************************************!*\
  !*** multi ./resources/ass/js/tada.js ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\xampp3\htdocs\firstlaravel\resources\ass\js\tada.js */"./resources/ass/js/tada.js");


/***/ })

/******/ });