// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles

(function (modules, entry, mainEntry, parcelRequireName, globalName) {
  /* eslint-disable no-undef */
  var globalObject =
    typeof globalThis !== 'undefined'
      ? globalThis
      : typeof self !== 'undefined'
      ? self
      : typeof window !== 'undefined'
      ? window
      : typeof global !== 'undefined'
      ? global
      : {};
  /* eslint-enable no-undef */

  // Save the require from previous bundle to this closure if any
  var previousRequire =
    typeof globalObject[parcelRequireName] === 'function' &&
    globalObject[parcelRequireName];

  var cache = previousRequire.cache || {};
  // Do not use `require` to prevent Webpack from trying to bundle this call
  var nodeRequire =
    typeof module !== 'undefined' &&
    typeof module.require === 'function' &&
    module.require.bind(module);

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire =
          typeof globalObject[parcelRequireName] === 'function' &&
          globalObject[parcelRequireName];
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error("Cannot find module '" + name + "'");
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = (cache[name] = new newRequire.Module(name));

      modules[name][0].call(
        module.exports,
        localRequire,
        module,
        module.exports,
        this
      );
    }

    return cache[name].exports;

    function localRequire(x) {
      var res = localRequire.resolve(x);
      return res === false ? {} : newRequire(res);
    }

    function resolve(x) {
      var id = modules[name][1][x];
      return id != null ? id : x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function (id, exports) {
    modules[id] = [
      function (require, module) {
        module.exports = exports;
      },
      {},
    ];
  };

  Object.defineProperty(newRequire, 'root', {
    get: function () {
      return globalObject[parcelRequireName];
    },
  });

  globalObject[parcelRequireName] = newRequire;

  for (var i = 0; i < entry.length; i++) {
    newRequire(entry[i]);
  }

  if (mainEntry) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(mainEntry);

    // CommonJS
    if (typeof exports === 'object' && typeof module !== 'undefined') {
      module.exports = mainExports;

      // RequireJS
    } else if (typeof define === 'function' && define.amd) {
      define(function () {
        return mainExports;
      });

      // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }
})({"7age3":[function(require,module,exports) {
"use strict";
var global = arguments[3];
var HMR_HOST = null;
var HMR_PORT = null;
var HMR_SECURE = false;
var HMR_ENV_HASH = "d6ea1d42532a7575";
module.bundle.HMR_BUNDLE_ID = "5a1bda1ab8fca702";
/* global HMR_HOST, HMR_PORT, HMR_ENV_HASH, HMR_SECURE, chrome, browser, globalThis, __parcel__import__, __parcel__importScripts__, ServiceWorkerGlobalScope */ /*::
import type {
  HMRAsset,
  HMRMessage,
} from '@parcel/reporter-dev-server/src/HMRServer.js';
interface ParcelRequire {
  (string): mixed;
  cache: {|[string]: ParcelModule|};
  hotData: mixed;
  Module: any;
  parent: ?ParcelRequire;
  isParcelRequire: true;
  modules: {|[string]: [Function, {|[string]: string|}]|};
  HMR_BUNDLE_ID: string;
  root: ParcelRequire;
}
interface ParcelModule {
  hot: {|
    data: mixed,
    accept(cb: (Function) => void): void,
    dispose(cb: (mixed) => void): void,
    // accept(deps: Array<string> | string, cb: (Function) => void): void,
    // decline(): void,
    _acceptCallbacks: Array<(Function) => void>,
    _disposeCallbacks: Array<(mixed) => void>,
  |};
}
interface ExtensionContext {
  runtime: {|
    reload(): void,
    getURL(url: string): string;
    getManifest(): {manifest_version: number, ...};
  |};
}
declare var module: {bundle: ParcelRequire, ...};
declare var HMR_HOST: string;
declare var HMR_PORT: string;
declare var HMR_ENV_HASH: string;
declare var HMR_SECURE: boolean;
declare var chrome: ExtensionContext;
declare var browser: ExtensionContext;
declare var __parcel__import__: (string) => Promise<void>;
declare var __parcel__importScripts__: (string) => Promise<void>;
declare var globalThis: typeof self;
declare var ServiceWorkerGlobalScope: Object;
*/ var OVERLAY_ID = "__parcel__error__overlay__";
var OldModule = module.bundle.Module;
function Module(moduleName) {
    OldModule.call(this, moduleName);
    this.hot = {
        data: module.bundle.hotData,
        _acceptCallbacks: [],
        _disposeCallbacks: [],
        accept: function(fn) {
            this._acceptCallbacks.push(fn || function() {});
        },
        dispose: function(fn) {
            this._disposeCallbacks.push(fn);
        }
    };
    module.bundle.hotData = undefined;
}
module.bundle.Module = Module;
var checkedAssets, acceptedAssets, assetsToAccept /*: Array<[ParcelRequire, string]> */ ;
function getHostname() {
    return HMR_HOST || (location.protocol.indexOf("http") === 0 ? location.hostname : "localhost");
}
function getPort() {
    return HMR_PORT || location.port;
} // eslint-disable-next-line no-redeclare
var parent = module.bundle.parent;
if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== "undefined") {
    var hostname = getHostname();
    var port = getPort();
    var protocol = HMR_SECURE || location.protocol == "https:" && !/localhost|127.0.0.1|0.0.0.0/.test(hostname) ? "wss" : "ws";
    var ws = new WebSocket(protocol + "://" + hostname + (port ? ":" + port : "") + "/"); // Web extension context
    var extCtx = typeof chrome === "undefined" ? typeof browser === "undefined" ? null : browser : chrome; // Safari doesn't support sourceURL in error stacks.
    // eval may also be disabled via CSP, so do a quick check.
    var supportsSourceURL = false;
    try {
        (0, eval)('throw new Error("test"); //# sourceURL=test.js');
    } catch (err) {
        supportsSourceURL = err.stack.includes("test.js");
    } // $FlowFixMe
    ws.onmessage = async function(event) {
        checkedAssets = {} /*: {|[string]: boolean|} */ ;
        acceptedAssets = {} /*: {|[string]: boolean|} */ ;
        assetsToAccept = [];
        var data = JSON.parse(event.data);
        if (data.type === "update") {
            // Remove error overlay if there is one
            if (typeof document !== "undefined") removeErrorOverlay();
            let assets = data.assets.filter((asset)=>asset.envHash === HMR_ENV_HASH); // Handle HMR Update
            let handled = assets.every((asset)=>{
                return asset.type === "css" || asset.type === "js" && hmrAcceptCheck(module.bundle.root, asset.id, asset.depsByBundle);
            });
            if (handled) {
                console.clear(); // Dispatch custom event so other runtimes (e.g React Refresh) are aware.
                if (typeof window !== "undefined" && typeof CustomEvent !== "undefined") window.dispatchEvent(new CustomEvent("parcelhmraccept"));
                await hmrApplyUpdates(assets);
                for(var i = 0; i < assetsToAccept.length; i++){
                    var id = assetsToAccept[i][1];
                    if (!acceptedAssets[id]) hmrAcceptRun(assetsToAccept[i][0], id);
                }
            } else fullReload();
        }
        if (data.type === "error") {
            // Log parcel errors to console
            for (let ansiDiagnostic of data.diagnostics.ansi){
                let stack = ansiDiagnostic.codeframe ? ansiDiagnostic.codeframe : ansiDiagnostic.stack;
                console.error("\uD83D\uDEA8 [parcel]: " + ansiDiagnostic.message + "\n" + stack + "\n\n" + ansiDiagnostic.hints.join("\n"));
            }
            if (typeof document !== "undefined") {
                // Render the fancy html overlay
                removeErrorOverlay();
                var overlay = createErrorOverlay(data.diagnostics.html); // $FlowFixMe
                document.body.appendChild(overlay);
            }
        }
    };
    ws.onerror = function(e) {
        console.error(e.message);
    };
    ws.onclose = function() {
        console.warn("[parcel] \uD83D\uDEA8 Connection to the HMR server was lost");
    };
}
function removeErrorOverlay() {
    var overlay = document.getElementById(OVERLAY_ID);
    if (overlay) {
        overlay.remove();
        console.log("[parcel] ✨ Error resolved");
    }
}
function createErrorOverlay(diagnostics) {
    var overlay = document.createElement("div");
    overlay.id = OVERLAY_ID;
    let errorHTML = '<div style="background: black; opacity: 0.85; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; font-family: Menlo, Consolas, monospace; z-index: 9999;">';
    for (let diagnostic of diagnostics){
        let stack = diagnostic.frames.length ? diagnostic.frames.reduce((p, frame)=>{
            return `${p}
<a href="/__parcel_launch_editor?file=${encodeURIComponent(frame.location)}" style="text-decoration: underline; color: #888" onclick="fetch(this.href); return false">${frame.location}</a>
${frame.code}`;
        }, "") : diagnostic.stack;
        errorHTML += `
      <div>
        <div style="font-size: 18px; font-weight: bold; margin-top: 20px;">
          🚨 ${diagnostic.message}
        </div>
        <pre>${stack}</pre>
        <div>
          ${diagnostic.hints.map((hint)=>"<div>\uD83D\uDCA1 " + hint + "</div>").join("")}
        </div>
        ${diagnostic.documentation ? `<div>📝 <a style="color: violet" href="${diagnostic.documentation}" target="_blank">Learn more</a></div>` : ""}
      </div>
    `;
    }
    errorHTML += "</div>";
    overlay.innerHTML = errorHTML;
    return overlay;
}
function fullReload() {
    if ("reload" in location) location.reload();
    else if (extCtx && extCtx.runtime && extCtx.runtime.reload) extCtx.runtime.reload();
}
function getParents(bundle, id) /*: Array<[ParcelRequire, string]> */ {
    var modules = bundle.modules;
    if (!modules) return [];
    var parents = [];
    var k, d, dep;
    for(k in modules)for(d in modules[k][1]){
        dep = modules[k][1][d];
        if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) parents.push([
            bundle,
            k
        ]);
    }
    if (bundle.parent) parents = parents.concat(getParents(bundle.parent, id));
    return parents;
}
function updateLink(link) {
    var newLink = link.cloneNode();
    newLink.onload = function() {
        if (link.parentNode !== null) // $FlowFixMe
        link.parentNode.removeChild(link);
    };
    newLink.setAttribute("href", link.getAttribute("href").split("?")[0] + "?" + Date.now()); // $FlowFixMe
    link.parentNode.insertBefore(newLink, link.nextSibling);
}
var cssTimeout = null;
function reloadCSS() {
    if (cssTimeout) return;
    cssTimeout = setTimeout(function() {
        var links = document.querySelectorAll('link[rel="stylesheet"]');
        for(var i = 0; i < links.length; i++){
            // $FlowFixMe[incompatible-type]
            var href = links[i].getAttribute("href");
            var hostname = getHostname();
            var servedFromHMRServer = hostname === "localhost" ? new RegExp("^(https?:\\/\\/(0.0.0.0|127.0.0.1)|localhost):" + getPort()).test(href) : href.indexOf(hostname + ":" + getPort());
            var absolute = /^https?:\/\//i.test(href) && href.indexOf(location.origin) !== 0 && !servedFromHMRServer;
            if (!absolute) updateLink(links[i]);
        }
        cssTimeout = null;
    }, 50);
}
function hmrDownload(asset) {
    if (asset.type === "js") {
        if (typeof document !== "undefined") {
            let script = document.createElement("script");
            script.src = asset.url + "?t=" + Date.now();
            if (asset.outputFormat === "esmodule") script.type = "module";
            return new Promise((resolve, reject)=>{
                var _document$head;
                script.onload = ()=>resolve(script);
                script.onerror = reject;
                (_document$head = document.head) === null || _document$head === void 0 || _document$head.appendChild(script);
            });
        } else if (typeof importScripts === "function") {
            // Worker scripts
            if (asset.outputFormat === "esmodule") return import(asset.url + "?t=" + Date.now());
            else return new Promise((resolve, reject)=>{
                try {
                    importScripts(asset.url + "?t=" + Date.now());
                    resolve();
                } catch (err) {
                    reject(err);
                }
            });
        }
    }
}
async function hmrApplyUpdates(assets) {
    global.parcelHotUpdate = Object.create(null);
    let scriptsToRemove;
    try {
        // If sourceURL comments aren't supported in eval, we need to load
        // the update from the dev server over HTTP so that stack traces
        // are correct in errors/logs. This is much slower than eval, so
        // we only do it if needed (currently just Safari).
        // https://bugs.webkit.org/show_bug.cgi?id=137297
        // This path is also taken if a CSP disallows eval.
        if (!supportsSourceURL) {
            let promises = assets.map((asset)=>{
                var _hmrDownload;
                return (_hmrDownload = hmrDownload(asset)) === null || _hmrDownload === void 0 ? void 0 : _hmrDownload.catch((err)=>{
                    // Web extension bugfix for Chromium
                    // https://bugs.chromium.org/p/chromium/issues/detail?id=1255412#c12
                    if (extCtx && extCtx.runtime && extCtx.runtime.getManifest().manifest_version == 3) {
                        if (typeof ServiceWorkerGlobalScope != "undefined" && global instanceof ServiceWorkerGlobalScope) {
                            extCtx.runtime.reload();
                            return;
                        }
                        asset.url = extCtx.runtime.getURL("/__parcel_hmr_proxy__?url=" + encodeURIComponent(asset.url + "?t=" + Date.now()));
                        return hmrDownload(asset);
                    }
                    throw err;
                });
            });
            scriptsToRemove = await Promise.all(promises);
        }
        assets.forEach(function(asset) {
            hmrApply(module.bundle.root, asset);
        });
    } finally{
        delete global.parcelHotUpdate;
        if (scriptsToRemove) scriptsToRemove.forEach((script)=>{
            if (script) {
                var _document$head2;
                (_document$head2 = document.head) === null || _document$head2 === void 0 || _document$head2.removeChild(script);
            }
        });
    }
}
function hmrApply(bundle, asset) {
    var modules = bundle.modules;
    if (!modules) return;
    if (asset.type === "css") reloadCSS();
    else if (asset.type === "js") {
        let deps = asset.depsByBundle[bundle.HMR_BUNDLE_ID];
        if (deps) {
            if (modules[asset.id]) {
                // Remove dependencies that are removed and will become orphaned.
                // This is necessary so that if the asset is added back again, the cache is gone, and we prevent a full page reload.
                let oldDeps = modules[asset.id][1];
                for(let dep in oldDeps)if (!deps[dep] || deps[dep] !== oldDeps[dep]) {
                    let id = oldDeps[dep];
                    let parents = getParents(module.bundle.root, id);
                    if (parents.length === 1) hmrDelete(module.bundle.root, id);
                }
            }
            if (supportsSourceURL) // Global eval. We would use `new Function` here but browser
            // support for source maps is better with eval.
            (0, eval)(asset.output);
             // $FlowFixMe
            let fn = global.parcelHotUpdate[asset.id];
            modules[asset.id] = [
                fn,
                deps
            ];
        } else if (bundle.parent) hmrApply(bundle.parent, asset);
    }
}
function hmrDelete(bundle, id) {
    let modules = bundle.modules;
    if (!modules) return;
    if (modules[id]) {
        // Collect dependencies that will become orphaned when this module is deleted.
        let deps = modules[id][1];
        let orphans = [];
        for(let dep in deps){
            let parents = getParents(module.bundle.root, deps[dep]);
            if (parents.length === 1) orphans.push(deps[dep]);
        } // Delete the module. This must be done before deleting dependencies in case of circular dependencies.
        delete modules[id];
        delete bundle.cache[id]; // Now delete the orphans.
        orphans.forEach((id)=>{
            hmrDelete(module.bundle.root, id);
        });
    } else if (bundle.parent) hmrDelete(bundle.parent, id);
}
function hmrAcceptCheck(bundle, id, depsByBundle) {
    if (hmrAcceptCheckOne(bundle, id, depsByBundle)) return true;
     // Traverse parents breadth first. All possible ancestries must accept the HMR update, or we'll reload.
    let parents = getParents(module.bundle.root, id);
    let accepted = false;
    while(parents.length > 0){
        let v = parents.shift();
        let a = hmrAcceptCheckOne(v[0], v[1], null);
        if (a) // If this parent accepts, stop traversing upward, but still consider siblings.
        accepted = true;
        else {
            // Otherwise, queue the parents in the next level upward.
            let p = getParents(module.bundle.root, v[1]);
            if (p.length === 0) {
                // If there are no parents, then we've reached an entry without accepting. Reload.
                accepted = false;
                break;
            }
            parents.push(...p);
        }
    }
    return accepted;
}
function hmrAcceptCheckOne(bundle, id, depsByBundle) {
    var modules = bundle.modules;
    if (!modules) return;
    if (depsByBundle && !depsByBundle[bundle.HMR_BUNDLE_ID]) {
        // If we reached the root bundle without finding where the asset should go,
        // there's nothing to do. Mark as "accepted" so we don't reload the page.
        if (!bundle.parent) return true;
        return hmrAcceptCheck(bundle.parent, id, depsByBundle);
    }
    if (checkedAssets[id]) return true;
    checkedAssets[id] = true;
    var cached = bundle.cache[id];
    assetsToAccept.push([
        bundle,
        id
    ]);
    if (!cached || cached.hot && cached.hot._acceptCallbacks.length) return true;
}
function hmrAcceptRun(bundle, id) {
    var cached = bundle.cache[id];
    bundle.hotData = {};
    if (cached && cached.hot) cached.hot.data = bundle.hotData;
    if (cached && cached.hot && cached.hot._disposeCallbacks.length) cached.hot._disposeCallbacks.forEach(function(cb) {
        cb(bundle.hotData);
    });
    delete bundle.cache[id];
    bundle(id);
    cached = bundle.cache[id];
    if (cached && cached.hot && cached.hot._acceptCallbacks.length) cached.hot._acceptCallbacks.forEach(function(cb) {
        var assetsToAlsoAccept = cb(function() {
            return getParents(module.bundle.root, id);
        });
        if (assetsToAlsoAccept && assetsToAccept.length) // $FlowFixMe[method-unbinding]
        assetsToAccept.push.apply(assetsToAccept, assetsToAlsoAccept);
    });
    acceptedAssets[id] = true;
}

},{}],"3cYfC":[function(require,module,exports) {
var _lounchScreenJs = require("./lounch-screen.js");
var _mobileNavMenuJs = require("./mobileNavMenu.js");
var _writeSubtitleJs = require("./writeSubtitle.js");
var _moveHeaderArrowJs = require("./moveHeaderArrow.js");
var _smoothScrollToJs = require("./smoothScrollTo.js");
var _observersJs = require("./observers.js");
var _projectSliderJs = require("./projectSlider.js");
var _contactJs = require("./contact.js");

},{"./lounch-screen.js":"iuvBz","./mobileNavMenu.js":"6YDZm","./writeSubtitle.js":"5UTro","./moveHeaderArrow.js":"713a0","./smoothScrollTo.js":"lrzML","./observers.js":"5bz6Q","./projectSlider.js":"426q8","./contact.js":"iFrdo"}],"iuvBz":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "launchScreen", ()=>launchScreen);
var _writeSubtitleJs = require("./writeSubtitle.js");
const launchScreen = ()=>{
    //Elements
    const launchScreenCurtain = document.querySelectorAll(".launch-screen__curtain");
    function preventScroll(e) {
        e.preventDefault();
        e.stopPropagation();
        return false;
    }
    document.querySelector("body").addEventListener("wheel", preventScroll, {
        passive: false
    });
    document.querySelector("body").addEventListener("touchmove", preventScroll, {
        passive: false
    });
    const enableScroll = ()=>{
        document.querySelector("body").removeEventListener("wheel", preventScroll);
        document.querySelector("body").removeEventListener("touchmove", preventScroll);
    };
    const launchScreenButton = document.querySelector(".launch-screen__button");
    const launchScreenContainer = document.querySelector(".launch-screen");
    //////// Helping functions
    // Open left side
    const openLeft = ()=>{
        launchScreenCurtain[0].classList.add("launch-screen__curtain--left--open");
    };
    // Open left side
    const openRight = ()=>{
        launchScreenCurtain[1].classList.add("launch-screen__curtain--right--open");
    };
    //changing button
    const openButton = ()=>{
        launchScreenButton.classList.add("launch-screen__button--clicked");
    };
    // Listeners
    launchScreenButton.addEventListener("click", (e)=>{
        enableScroll();
        openLeft();
        openRight();
        openButton();
        setTimeout(()=>{
            launchScreenContainer.style.display = "none";
        }, 1200);
        (0, _writeSubtitleJs.writeSubtitle)();
    });
}; // launchScreen();

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3","./writeSubtitle.js":"5UTro"}],"gkKU3":[function(require,module,exports) {
exports.interopDefault = function(a) {
    return a && a.__esModule ? a : {
        default: a
    };
};
exports.defineInteropFlag = function(a) {
    Object.defineProperty(a, "__esModule", {
        value: true
    });
};
exports.exportAll = function(source, dest) {
    Object.keys(source).forEach(function(key) {
        if (key === "default" || key === "__esModule" || dest.hasOwnProperty(key)) return;
        Object.defineProperty(dest, key, {
            enumerable: true,
            get: function() {
                return source[key];
            }
        });
    });
    return dest;
};
exports.export = function(dest, destName, get) {
    Object.defineProperty(dest, destName, {
        enumerable: true,
        get: get
    });
};

},{}],"5UTro":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "writeSubtitle", ()=>writeSubtitle);
var _typedJs = require("typed.js");
var _typedJsDefault = parcelHelpers.interopDefault(_typedJs);
const writeSubtitle = ()=>{
    const text = new (0, _typedJsDefault.default)(".main-header__subtitle", {
        strings: [
            "Front-end developer.",
            "Wannabe front-end developer."
        ],
        // loop: true,
        typeSpeed: 40,
        backSpeed: 50,
        backDelay: 800
    });
};
writeSubtitle();

},{"typed.js":"4hQNd","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"4hQNd":[function(require,module,exports) {
/*!
 * 
 *   typed.js - A JavaScript Typing Animation Library
 *   Author: Matt Boldt <me@mattboldt.com>
 *   Version: v2.0.12
 *   Url: https://github.com/mattboldt/typed.js
 *   License(s): MIT
 * 
 */ (function webpackUniversalModuleDefinition(root, factory) {
    module.exports = factory();
})(this, function() {
    return /******/ function(modules) {
        /******/ // The module cache
        /******/ var installedModules = {};
        /******/ /******/ // The require function
        /******/ function __webpack_require__(moduleId) {
            /******/ /******/ // Check if module is in cache
            /******/ if (installedModules[moduleId]) /******/ return installedModules[moduleId].exports;
            /******/ /******/ // Create a new module (and put it into the cache)
            /******/ var module1 = installedModules[moduleId] = {
                /******/ exports: {},
                /******/ id: moduleId,
                /******/ loaded: false
            };
            /******/ /******/ // Execute the module function
            /******/ modules[moduleId].call(module1.exports, module1, module1.exports, __webpack_require__);
            /******/ /******/ // Flag the module as loaded
            /******/ module1.loaded = true;
            /******/ /******/ // Return the exports of the module
            /******/ return module1.exports;
        /******/ }
        /******/ /******/ /******/ // expose the modules object (__webpack_modules__)
        /******/ __webpack_require__.m = modules;
        /******/ /******/ // expose the module cache
        /******/ __webpack_require__.c = installedModules;
        /******/ /******/ // __webpack_public_path__
        /******/ __webpack_require__.p = "";
        /******/ /******/ // Load entry module and return exports
        /******/ return __webpack_require__(0);
    /******/ }([
        /* 0 */ /***/ function(module1, exports, __webpack_require__) {
            "use strict";
            Object.defineProperty(exports, "__esModule", {
                value: true
            });
            var _createClass = function() {
                function defineProperties(target, props) {
                    for(var i = 0; i < props.length; i++){
                        var descriptor = props[i];
                        descriptor.enumerable = descriptor.enumerable || false;
                        descriptor.configurable = true;
                        if ("value" in descriptor) descriptor.writable = true;
                        Object.defineProperty(target, descriptor.key, descriptor);
                    }
                }
                return function(Constructor, protoProps, staticProps) {
                    if (protoProps) defineProperties(Constructor.prototype, protoProps);
                    if (staticProps) defineProperties(Constructor, staticProps);
                    return Constructor;
                };
            }();
            function _classCallCheck(instance, Constructor) {
                if (!(instance instanceof Constructor)) throw new TypeError("Cannot call a class as a function");
            }
            var _initializerJs = __webpack_require__(1);
            var _htmlParserJs = __webpack_require__(3);
            /**
	 * Welcome to Typed.js!
	 * @param {string} elementId HTML element ID _OR_ HTML element
	 * @param {object} options options object
	 * @returns {object} a new Typed object
	 */ var Typed = function() {
                function Typed(elementId, options) {
                    _classCallCheck(this, Typed);
                    // Initialize it up
                    _initializerJs.initializer.load(this, options, elementId);
                    // All systems go!
                    this.begin();
                }
                /**
	   * Toggle start() and stop() of the Typed instance
	   * @public
	   */ _createClass(Typed, [
                    {
                        key: "toggle",
                        value: function toggle() {
                            this.pause.status ? this.start() : this.stop();
                        }
                    },
                    {
                        key: "stop",
                        value: function stop() {
                            if (this.typingComplete) return;
                            if (this.pause.status) return;
                            this.toggleBlinking(true);
                            this.pause.status = true;
                            this.options.onStop(this.arrayPos, this);
                        }
                    },
                    {
                        key: "start",
                        value: function start() {
                            if (this.typingComplete) return;
                            if (!this.pause.status) return;
                            this.pause.status = false;
                            if (this.pause.typewrite) this.typewrite(this.pause.curString, this.pause.curStrPos);
                            else this.backspace(this.pause.curString, this.pause.curStrPos);
                            this.options.onStart(this.arrayPos, this);
                        }
                    },
                    {
                        key: "destroy",
                        value: function destroy() {
                            this.reset(false);
                            this.options.onDestroy(this);
                        }
                    },
                    {
                        key: "reset",
                        value: function reset() {
                            var restart = arguments.length <= 0 || arguments[0] === undefined ? true : arguments[0];
                            clearInterval(this.timeout);
                            this.replaceText("");
                            if (this.cursor && this.cursor.parentNode) {
                                this.cursor.parentNode.removeChild(this.cursor);
                                this.cursor = null;
                            }
                            this.strPos = 0;
                            this.arrayPos = 0;
                            this.curLoop = 0;
                            if (restart) {
                                this.insertCursor();
                                this.options.onReset(this);
                                this.begin();
                            }
                        }
                    },
                    {
                        key: "begin",
                        value: function begin() {
                            var _this = this;
                            this.options.onBegin(this);
                            this.typingComplete = false;
                            this.shuffleStringsIfNeeded(this);
                            this.insertCursor();
                            if (this.bindInputFocusEvents) this.bindFocusEvents();
                            this.timeout = setTimeout(function() {
                                // Check if there is some text in the element, if yes start by backspacing the default message
                                if (!_this.currentElContent || _this.currentElContent.length === 0) _this.typewrite(_this.strings[_this.sequence[_this.arrayPos]], _this.strPos);
                                else // Start typing
                                _this.backspace(_this.currentElContent, _this.currentElContent.length);
                            }, this.startDelay);
                        }
                    },
                    {
                        key: "typewrite",
                        value: function typewrite(curString, curStrPos) {
                            var _this2 = this;
                            if (this.fadeOut && this.el.classList.contains(this.fadeOutClass)) {
                                this.el.classList.remove(this.fadeOutClass);
                                if (this.cursor) this.cursor.classList.remove(this.fadeOutClass);
                            }
                            var humanize = this.humanizer(this.typeSpeed);
                            var numChars = 1;
                            if (this.pause.status === true) {
                                this.setPauseStatus(curString, curStrPos, true);
                                return;
                            }
                            // contain typing function in a timeout humanize'd delay
                            this.timeout = setTimeout(function() {
                                // skip over any HTML chars
                                curStrPos = _htmlParserJs.htmlParser.typeHtmlChars(curString, curStrPos, _this2);
                                var pauseTime = 0;
                                var substr = curString.substr(curStrPos);
                                // check for an escape character before a pause value
                                // format: \^\d+ .. eg: ^1000 .. should be able to print the ^ too using ^^
                                // single ^ are removed from string
                                if (substr.charAt(0) === "^") {
                                    if (/^\^\d+/.test(substr)) {
                                        var skip = 1; // skip at least 1
                                        substr = /\d+/.exec(substr)[0];
                                        skip += substr.length;
                                        pauseTime = parseInt(substr);
                                        _this2.temporaryPause = true;
                                        _this2.options.onTypingPaused(_this2.arrayPos, _this2);
                                        // strip out the escape character and pause value so they're not printed
                                        curString = curString.substring(0, curStrPos) + curString.substring(curStrPos + skip);
                                        _this2.toggleBlinking(true);
                                    }
                                }
                                // check for skip characters formatted as
                                // "this is a `string to print NOW` ..."
                                if (substr.charAt(0) === "`") {
                                    while(curString.substr(curStrPos + numChars).charAt(0) !== "`"){
                                        numChars++;
                                        if (curStrPos + numChars > curString.length) break;
                                    }
                                    // strip out the escape characters and append all the string in between
                                    var stringBeforeSkip = curString.substring(0, curStrPos);
                                    var stringSkipped = curString.substring(stringBeforeSkip.length + 1, curStrPos + numChars);
                                    var stringAfterSkip = curString.substring(curStrPos + numChars + 1);
                                    curString = stringBeforeSkip + stringSkipped + stringAfterSkip;
                                    numChars--;
                                }
                                // timeout for any pause after a character
                                _this2.timeout = setTimeout(function() {
                                    // Accounts for blinking while paused
                                    _this2.toggleBlinking(false);
                                    // We're done with this sentence!
                                    if (curStrPos >= curString.length) _this2.doneTyping(curString, curStrPos);
                                    else _this2.keepTyping(curString, curStrPos, numChars);
                                    // end of character pause
                                    if (_this2.temporaryPause) {
                                        _this2.temporaryPause = false;
                                        _this2.options.onTypingResumed(_this2.arrayPos, _this2);
                                    }
                                }, pauseTime);
                            // humanized value for typing
                            }, humanize);
                        }
                    },
                    {
                        key: "keepTyping",
                        value: function keepTyping(curString, curStrPos, numChars) {
                            // call before functions if applicable
                            if (curStrPos === 0) {
                                this.toggleBlinking(false);
                                this.options.preStringTyped(this.arrayPos, this);
                            }
                            // start typing each new char into existing string
                            // curString: arg, this.el.html: original text inside element
                            curStrPos += numChars;
                            var nextString = curString.substr(0, curStrPos);
                            this.replaceText(nextString);
                            // loop the function
                            this.typewrite(curString, curStrPos);
                        }
                    },
                    {
                        key: "doneTyping",
                        value: function doneTyping(curString, curStrPos) {
                            var _this3 = this;
                            // fires callback function
                            this.options.onStringTyped(this.arrayPos, this);
                            this.toggleBlinking(true);
                            // is this the final string
                            if (this.arrayPos === this.strings.length - 1) {
                                // callback that occurs on the last typed string
                                this.complete();
                                // quit if we wont loop back
                                if (this.loop === false || this.curLoop === this.loopCount) return;
                            }
                            this.timeout = setTimeout(function() {
                                _this3.backspace(curString, curStrPos);
                            }, this.backDelay);
                        }
                    },
                    {
                        key: "backspace",
                        value: function backspace(curString, curStrPos) {
                            var _this4 = this;
                            if (this.pause.status === true) {
                                this.setPauseStatus(curString, curStrPos, false);
                                return;
                            }
                            if (this.fadeOut) return this.initFadeOut();
                            this.toggleBlinking(false);
                            var humanize = this.humanizer(this.backSpeed);
                            this.timeout = setTimeout(function() {
                                curStrPos = _htmlParserJs.htmlParser.backSpaceHtmlChars(curString, curStrPos, _this4);
                                // replace text with base text + typed characters
                                var curStringAtPosition = curString.substr(0, curStrPos);
                                _this4.replaceText(curStringAtPosition);
                                // if smartBack is enabled
                                if (_this4.smartBackspace) {
                                    // the remaining part of the current string is equal of the same part of the new string
                                    var nextString = _this4.strings[_this4.arrayPos + 1];
                                    if (nextString && curStringAtPosition === nextString.substr(0, curStrPos)) _this4.stopNum = curStrPos;
                                    else _this4.stopNum = 0;
                                }
                                // if the number (id of character in current string) is
                                // less than the stop number, keep going
                                if (curStrPos > _this4.stopNum) {
                                    // subtract characters one by one
                                    curStrPos--;
                                    // loop the function
                                    _this4.backspace(curString, curStrPos);
                                } else if (curStrPos <= _this4.stopNum) {
                                    // if the stop number has been reached, increase
                                    // array position to next string
                                    _this4.arrayPos++;
                                    // When looping, begin at the beginning after backspace complete
                                    if (_this4.arrayPos === _this4.strings.length) {
                                        _this4.arrayPos = 0;
                                        _this4.options.onLastStringBackspaced();
                                        _this4.shuffleStringsIfNeeded();
                                        _this4.begin();
                                    } else _this4.typewrite(_this4.strings[_this4.sequence[_this4.arrayPos]], curStrPos);
                                }
                            // humanized value for typing
                            }, humanize);
                        }
                    },
                    {
                        key: "complete",
                        value: function complete() {
                            this.options.onComplete(this);
                            if (this.loop) this.curLoop++;
                            else this.typingComplete = true;
                        }
                    },
                    {
                        key: "setPauseStatus",
                        value: function setPauseStatus(curString, curStrPos, isTyping) {
                            this.pause.typewrite = isTyping;
                            this.pause.curString = curString;
                            this.pause.curStrPos = curStrPos;
                        }
                    },
                    {
                        key: "toggleBlinking",
                        value: function toggleBlinking(isBlinking) {
                            if (!this.cursor) return;
                            // if in paused state, don't toggle blinking a 2nd time
                            if (this.pause.status) return;
                            if (this.cursorBlinking === isBlinking) return;
                            this.cursorBlinking = isBlinking;
                            if (isBlinking) this.cursor.classList.add("typed-cursor--blink");
                            else this.cursor.classList.remove("typed-cursor--blink");
                        }
                    },
                    {
                        key: "humanizer",
                        value: function humanizer(speed) {
                            return Math.round(Math.random() * speed / 2) + speed;
                        }
                    },
                    {
                        key: "shuffleStringsIfNeeded",
                        value: function shuffleStringsIfNeeded() {
                            if (!this.shuffle) return;
                            this.sequence = this.sequence.sort(function() {
                                return Math.random() - 0.5;
                            });
                        }
                    },
                    {
                        key: "initFadeOut",
                        value: function initFadeOut() {
                            var _this5 = this;
                            this.el.className += " " + this.fadeOutClass;
                            if (this.cursor) this.cursor.className += " " + this.fadeOutClass;
                            return setTimeout(function() {
                                _this5.arrayPos++;
                                _this5.replaceText("");
                                // Resets current string if end of loop reached
                                if (_this5.strings.length > _this5.arrayPos) _this5.typewrite(_this5.strings[_this5.sequence[_this5.arrayPos]], 0);
                                else {
                                    _this5.typewrite(_this5.strings[0], 0);
                                    _this5.arrayPos = 0;
                                }
                            }, this.fadeOutDelay);
                        }
                    },
                    {
                        key: "replaceText",
                        value: function replaceText(str) {
                            if (this.attr) this.el.setAttribute(this.attr, str);
                            else {
                                if (this.isInput) this.el.value = str;
                                else if (this.contentType === "html") this.el.innerHTML = str;
                                else this.el.textContent = str;
                            }
                        }
                    },
                    {
                        key: "bindFocusEvents",
                        value: function bindFocusEvents() {
                            var _this6 = this;
                            if (!this.isInput) return;
                            this.el.addEventListener("focus", function(e) {
                                _this6.stop();
                            });
                            this.el.addEventListener("blur", function(e) {
                                if (_this6.el.value && _this6.el.value.length !== 0) return;
                                _this6.start();
                            });
                        }
                    },
                    {
                        key: "insertCursor",
                        value: function insertCursor() {
                            if (!this.showCursor) return;
                            if (this.cursor) return;
                            this.cursor = document.createElement("span");
                            this.cursor.className = "typed-cursor";
                            this.cursor.setAttribute("aria-hidden", true);
                            this.cursor.innerHTML = this.cursorChar;
                            this.el.parentNode && this.el.parentNode.insertBefore(this.cursor, this.el.nextSibling);
                        }
                    }
                ]);
                return Typed;
            }();
            exports["default"] = Typed;
            module1.exports = exports["default"];
        /***/ },
        /* 1 */ /***/ function(module1, exports, __webpack_require__) {
            "use strict";
            Object.defineProperty(exports, "__esModule", {
                value: true
            });
            var _extends = Object.assign || function(target) {
                for(var i = 1; i < arguments.length; i++){
                    var source = arguments[i];
                    for(var key in source)if (Object.prototype.hasOwnProperty.call(source, key)) target[key] = source[key];
                }
                return target;
            };
            var _createClass = function() {
                function defineProperties(target, props) {
                    for(var i = 0; i < props.length; i++){
                        var descriptor = props[i];
                        descriptor.enumerable = descriptor.enumerable || false;
                        descriptor.configurable = true;
                        if ("value" in descriptor) descriptor.writable = true;
                        Object.defineProperty(target, descriptor.key, descriptor);
                    }
                }
                return function(Constructor, protoProps, staticProps) {
                    if (protoProps) defineProperties(Constructor.prototype, protoProps);
                    if (staticProps) defineProperties(Constructor, staticProps);
                    return Constructor;
                };
            }();
            function _interopRequireDefault(obj) {
                return obj && obj.__esModule ? obj : {
                    "default": obj
                };
            }
            function _classCallCheck(instance, Constructor) {
                if (!(instance instanceof Constructor)) throw new TypeError("Cannot call a class as a function");
            }
            var _defaultsJs = __webpack_require__(2);
            var _defaultsJs2 = _interopRequireDefault(_defaultsJs);
            /**
	 * Initialize the Typed object
	 */ var Initializer = function() {
                function Initializer() {
                    _classCallCheck(this, Initializer);
                }
                _createClass(Initializer, [
                    {
                        key: "load",
                        /**
	     * Load up defaults & options on the Typed instance
	     * @param {Typed} self instance of Typed
	     * @param {object} options options object
	     * @param {string} elementId HTML element ID _OR_ instance of HTML element
	     * @private
	     */ value: function load(self, options, elementId) {
                            // chosen element to manipulate text
                            if (typeof elementId === "string") self.el = document.querySelector(elementId);
                            else self.el = elementId;
                            self.options = _extends({}, _defaultsJs2["default"], options);
                            // attribute to type into
                            self.isInput = self.el.tagName.toLowerCase() === "input";
                            self.attr = self.options.attr;
                            self.bindInputFocusEvents = self.options.bindInputFocusEvents;
                            // show cursor
                            self.showCursor = self.isInput ? false : self.options.showCursor;
                            // custom cursor
                            self.cursorChar = self.options.cursorChar;
                            // Is the cursor blinking
                            self.cursorBlinking = true;
                            // text content of element
                            self.elContent = self.attr ? self.el.getAttribute(self.attr) : self.el.textContent;
                            // html or plain text
                            self.contentType = self.options.contentType;
                            // typing speed
                            self.typeSpeed = self.options.typeSpeed;
                            // add a delay before typing starts
                            self.startDelay = self.options.startDelay;
                            // backspacing speed
                            self.backSpeed = self.options.backSpeed;
                            // only backspace what doesn't match the previous string
                            self.smartBackspace = self.options.smartBackspace;
                            // amount of time to wait before backspacing
                            self.backDelay = self.options.backDelay;
                            // Fade out instead of backspace
                            self.fadeOut = self.options.fadeOut;
                            self.fadeOutClass = self.options.fadeOutClass;
                            self.fadeOutDelay = self.options.fadeOutDelay;
                            // variable to check whether typing is currently paused
                            self.isPaused = false;
                            // input strings of text
                            self.strings = self.options.strings.map(function(s) {
                                return s.trim();
                            });
                            // div containing strings
                            if (typeof self.options.stringsElement === "string") self.stringsElement = document.querySelector(self.options.stringsElement);
                            else self.stringsElement = self.options.stringsElement;
                            if (self.stringsElement) {
                                self.strings = [];
                                self.stringsElement.style.display = "none";
                                var strings = Array.prototype.slice.apply(self.stringsElement.children);
                                var stringsLength = strings.length;
                                if (stringsLength) for(var i = 0; i < stringsLength; i += 1){
                                    var stringEl = strings[i];
                                    self.strings.push(stringEl.innerHTML.trim());
                                }
                            }
                            // character number position of current string
                            self.strPos = 0;
                            // current array position
                            self.arrayPos = 0;
                            // index of string to stop backspacing on
                            self.stopNum = 0;
                            // Looping logic
                            self.loop = self.options.loop;
                            self.loopCount = self.options.loopCount;
                            self.curLoop = 0;
                            // shuffle the strings
                            self.shuffle = self.options.shuffle;
                            // the order of strings
                            self.sequence = [];
                            self.pause = {
                                status: false,
                                typewrite: true,
                                curString: "",
                                curStrPos: 0
                            };
                            // When the typing is complete (when not looped)
                            self.typingComplete = false;
                            // Set the order in which the strings are typed
                            for(var i in self.strings)self.sequence[i] = i;
                            // If there is some text in the element
                            self.currentElContent = this.getCurrentElContent(self);
                            self.autoInsertCss = self.options.autoInsertCss;
                            this.appendAnimationCss(self);
                        }
                    },
                    {
                        key: "getCurrentElContent",
                        value: function getCurrentElContent(self) {
                            var elContent = "";
                            if (self.attr) elContent = self.el.getAttribute(self.attr);
                            else if (self.isInput) elContent = self.el.value;
                            else if (self.contentType === "html") elContent = self.el.innerHTML;
                            else elContent = self.el.textContent;
                            return elContent;
                        }
                    },
                    {
                        key: "appendAnimationCss",
                        value: function appendAnimationCss(self) {
                            var cssDataName = "data-typed-js-css";
                            if (!self.autoInsertCss) return;
                            if (!self.showCursor && !self.fadeOut) return;
                            if (document.querySelector("[" + cssDataName + "]")) return;
                            var css = document.createElement("style");
                            css.type = "text/css";
                            css.setAttribute(cssDataName, true);
                            var innerCss = "";
                            if (self.showCursor) innerCss += "\n        .typed-cursor{\n          opacity: 1;\n        }\n        .typed-cursor.typed-cursor--blink{\n          animation: typedjsBlink 0.7s infinite;\n          -webkit-animation: typedjsBlink 0.7s infinite;\n                  animation: typedjsBlink 0.7s infinite;\n        }\n        @keyframes typedjsBlink{\n          50% { opacity: 0.0; }\n        }\n        @-webkit-keyframes typedjsBlink{\n          0% { opacity: 1; }\n          50% { opacity: 0.0; }\n          100% { opacity: 1; }\n        }\n      ";
                            if (self.fadeOut) innerCss += "\n        .typed-fade-out{\n          opacity: 0;\n          transition: opacity .25s;\n        }\n        .typed-cursor.typed-cursor--blink.typed-fade-out{\n          -webkit-animation: 0;\n          animation: 0;\n        }\n      ";
                            if (css.length === 0) return;
                            css.innerHTML = innerCss;
                            document.body.appendChild(css);
                        }
                    }
                ]);
                return Initializer;
            }();
            exports["default"] = Initializer;
            var initializer = new Initializer();
            exports.initializer = initializer;
        /***/ },
        /* 2 */ /***/ function(module1, exports) {
            /**
	 * Defaults & options
	 * @returns {object} Typed defaults & options
	 * @public
	 */ "use strict";
            Object.defineProperty(exports, "__esModule", {
                value: true
            });
            var defaults = {
                /**
	   * @property {array} strings strings to be typed
	   * @property {string} stringsElement ID of element containing string children
	   */ strings: [
                    "These are the default values...",
                    "You know what you should do?",
                    "Use your own!",
                    "Have a great day!"
                ],
                stringsElement: null,
                /**
	   * @property {number} typeSpeed type speed in milliseconds
	   */ typeSpeed: 0,
                /**
	   * @property {number} startDelay time before typing starts in milliseconds
	   */ startDelay: 0,
                /**
	   * @property {number} backSpeed backspacing speed in milliseconds
	   */ backSpeed: 0,
                /**
	   * @property {boolean} smartBackspace only backspace what doesn't match the previous string
	   */ smartBackspace: true,
                /**
	   * @property {boolean} shuffle shuffle the strings
	   */ shuffle: false,
                /**
	   * @property {number} backDelay time before backspacing in milliseconds
	   */ backDelay: 700,
                /**
	   * @property {boolean} fadeOut Fade out instead of backspace
	   * @property {string} fadeOutClass css class for fade animation
	   * @property {boolean} fadeOutDelay Fade out delay in milliseconds
	   */ fadeOut: false,
                fadeOutClass: "typed-fade-out",
                fadeOutDelay: 500,
                /**
	   * @property {boolean} loop loop strings
	   * @property {number} loopCount amount of loops
	   */ loop: false,
                loopCount: Infinity,
                /**
	   * @property {boolean} showCursor show cursor
	   * @property {string} cursorChar character for cursor
	   * @property {boolean} autoInsertCss insert CSS for cursor and fadeOut into HTML <head>
	   */ showCursor: true,
                cursorChar: "|",
                autoInsertCss: true,
                /**
	   * @property {string} attr attribute for typing
	   * Ex: input placeholder, value, or just HTML text
	   */ attr: null,
                /**
	   * @property {boolean} bindInputFocusEvents bind to focus and blur if el is text input
	   */ bindInputFocusEvents: false,
                /**
	   * @property {string} contentType 'html' or 'null' for plaintext
	   */ contentType: "html",
                /**
	   * Before it begins typing
	   * @param {Typed} self
	   */ onBegin: function onBegin(self) {},
                /**
	   * All typing is complete
	   * @param {Typed} self
	   */ onComplete: function onComplete(self) {},
                /**
	   * Before each string is typed
	   * @param {number} arrayPos
	   * @param {Typed} self
	   */ preStringTyped: function preStringTyped(arrayPos, self) {},
                /**
	   * After each string is typed
	   * @param {number} arrayPos
	   * @param {Typed} self
	   */ onStringTyped: function onStringTyped(arrayPos, self) {},
                /**
	   * During looping, after last string is typed
	   * @param {Typed} self
	   */ onLastStringBackspaced: function onLastStringBackspaced(self) {},
                /**
	   * Typing has been stopped
	   * @param {number} arrayPos
	   * @param {Typed} self
	   */ onTypingPaused: function onTypingPaused(arrayPos, self) {},
                /**
	   * Typing has been started after being stopped
	   * @param {number} arrayPos
	   * @param {Typed} self
	   */ onTypingResumed: function onTypingResumed(arrayPos, self) {},
                /**
	   * After reset
	   * @param {Typed} self
	   */ onReset: function onReset(self) {},
                /**
	   * After stop
	   * @param {number} arrayPos
	   * @param {Typed} self
	   */ onStop: function onStop(arrayPos, self) {},
                /**
	   * After start
	   * @param {number} arrayPos
	   * @param {Typed} self
	   */ onStart: function onStart(arrayPos, self) {},
                /**
	   * After destroy
	   * @param {Typed} self
	   */ onDestroy: function onDestroy(self) {}
            };
            exports["default"] = defaults;
            module1.exports = exports["default"];
        /***/ },
        /* 3 */ /***/ function(module1, exports) {
            /**
	 * TODO: These methods can probably be combined somehow
	 * Parse HTML tags & HTML Characters
	 */ "use strict";
            Object.defineProperty(exports, "__esModule", {
                value: true
            });
            var _createClass = function() {
                function defineProperties(target, props) {
                    for(var i = 0; i < props.length; i++){
                        var descriptor = props[i];
                        descriptor.enumerable = descriptor.enumerable || false;
                        descriptor.configurable = true;
                        if ("value" in descriptor) descriptor.writable = true;
                        Object.defineProperty(target, descriptor.key, descriptor);
                    }
                }
                return function(Constructor, protoProps, staticProps) {
                    if (protoProps) defineProperties(Constructor.prototype, protoProps);
                    if (staticProps) defineProperties(Constructor, staticProps);
                    return Constructor;
                };
            }();
            function _classCallCheck(instance, Constructor) {
                if (!(instance instanceof Constructor)) throw new TypeError("Cannot call a class as a function");
            }
            var HTMLParser = function() {
                function HTMLParser() {
                    _classCallCheck(this, HTMLParser);
                }
                _createClass(HTMLParser, [
                    {
                        key: "typeHtmlChars",
                        /**
	     * Type HTML tags & HTML Characters
	     * @param {string} curString Current string
	     * @param {number} curStrPos Position in current string
	     * @param {Typed} self instance of Typed
	     * @returns {number} a new string position
	     * @private
	     */ value: function typeHtmlChars(curString, curStrPos, self) {
                            if (self.contentType !== "html") return curStrPos;
                            var curChar = curString.substr(curStrPos).charAt(0);
                            if (curChar === "<" || curChar === "&") {
                                var endTag = "";
                                if (curChar === "<") endTag = ">";
                                else endTag = ";";
                                while(curString.substr(curStrPos + 1).charAt(0) !== endTag){
                                    curStrPos++;
                                    if (curStrPos + 1 > curString.length) break;
                                }
                                curStrPos++;
                            }
                            return curStrPos;
                        }
                    },
                    {
                        key: "backSpaceHtmlChars",
                        value: function backSpaceHtmlChars(curString, curStrPos, self) {
                            if (self.contentType !== "html") return curStrPos;
                            var curChar = curString.substr(curStrPos).charAt(0);
                            if (curChar === ">" || curChar === ";") {
                                var endTag = "";
                                if (curChar === ">") endTag = "<";
                                else endTag = "&";
                                while(curString.substr(curStrPos - 1).charAt(0) !== endTag){
                                    curStrPos--;
                                    if (curStrPos < 0) break;
                                }
                                curStrPos--;
                            }
                            return curStrPos;
                        }
                    }
                ]);
                return HTMLParser;
            }();
            exports["default"] = HTMLParser;
            var htmlParser = new HTMLParser();
            exports.htmlParser = htmlParser;
        /***/ }
    ]);
});

},{}],"6YDZm":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "mobileMenu", ()=>mobileMenu);
var _smoothScrollTo = require("./smoothScrollTo");
const window = document.querySelector("html");
const mobileMenu = ()=>{
    const hamburgerButton = document.querySelector(".hamburger");
    const mobileMenu = document.querySelector(".menu");
    const mobileMenuLinks = document.querySelectorAll(".menu__link");
    const menuOverlay = document.querySelector(".navbar__overlay");
    // change hamburger button
    const changeHamburgerButton = ()=>{
        hamburgerButton.classList.toggle("hamburger--open");
    };
    // show mobile menu
    const showMobileMenu = ()=>{
        mobileMenu.classList.toggle("menu--open");
    };
    //show overlay
    const showOverlay = ()=>{
        menuOverlay.classList.toggle("navbar__overlay--open");
    };
    // Prevent tab key navigation when mobile menu is close
    const changeTabBlock = (index)=>{
        mobileMenu.childNodes.forEach((item)=>item.children ? item.children[0].setAttribute("tabindex", index) : false);
    };
    // action for hamburger click
    hamburgerButton.addEventListener("click", ()=>{
        mobileMenu.classList.contains("menu--open") ? changeTabBlock(-1) : changeTabBlock(1);
        changeHamburgerButton();
        showMobileMenu();
        showOverlay();
    });
    // show navbar when cursor is at the very top
    const toglleDesktopNavbarCursor = (e)=>{
        e.clientY < 100 && mobileMenu.classList.add("menu--openDesk");
    };
    // show nav when scroll up hide when scroll down
    const toglleDesktopNavbarScroll = (e)=>{
        e.deltaY === 100 ? mobileMenu.classList.remove("menu--openDesk") : mobileMenu.classList.add("menu--openDesk");
    };
    //action after click on a navbar menu links
    function closeMobileMenu() {
        console.log("ddd");
        mobileMenu.classList.remove("menu--open");
        menuOverlay.classList.remove("navbar__overlay--open");
        hamburgerButton.classList.remove("hamburger--open");
    }
    const actionMobile = (e)=>{
        e.preventDefault();
        (0, _smoothScrollTo.smoothScroll)(e.target);
        changeHamburgerButton();
    };
    const actionDesktop = (e)=>{
        e.preventDefault();
        (0, _smoothScrollTo.smoothScroll)(e.target);
    };
    const menuObserver = new ResizeObserver((entry)=>{
        if (entry[0].contentRect.width < 1000) {
            mobileMenuLinks.forEach((menulink)=>{
                menulink.addEventListener("click", (e)=>{
                    closeMobileMenu();
                    changeHamburgerButton();
                    actionMobile(e);
                });
            });
            changeTabBlock(-1);
        } else {
            changeTabBlock(1);
            mobileMenuLinks.forEach((menulink)=>{
                menulink.addEventListener("click", (e)=>{
                    actionDesktop(e);
                });
                document.addEventListener("wheel", (e)=>{
                    toglleDesktopNavbarScroll(e);
                });
                document.addEventListener("mouseover", (e)=>{
                    toglleDesktopNavbarCursor(e);
                });
            });
        }
    });
    menuObserver.observe(window);
};
mobileMenu();

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3","./smoothScrollTo":"lrzML"}],"lrzML":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "smoothScroll", ()=>smoothScroll);
const smoothScroll = (el)=>{
    document.getElementById(el.dataset.destn).scrollIntoView({
        behavior: "smooth",
        block: "start",
        inline: "nearest"
    });
};
document.querySelector(".main-header__btn").addEventListener("click", ()=>{
    smoothScroll(document.querySelector(".main-header__btn"));
});

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"713a0":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "moveHeaderArrow", ()=>moveHeaderArrow);
const moveHeaderArrow = ()=>{
    const headerButton = document.querySelector(".main-header__btn");
    const arrow = document.querySelector(".main-header__arrow-down");
    const addClassArrow = ()=>{
        arrow.classList.add("main-header__arrow-down--active");
    };
    const removeArrowClass = ()=>{
        arrow.classList.remove("main-header__arrow-down--active");
    };
    headerButton.addEventListener("mouseover", addClassArrow);
    headerButton.addEventListener("mouseleave", removeArrowClass);
};
moveHeaderArrow();

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"5bz6Q":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "observers", ()=>observers);
const observers = ()=>{
    const sections = document.querySelectorAll(".section");
    const sectionObserverOptions = {
        rootMargin: "0px 0px 0px 0px",
        threshold: 0.5
    };
    // function adding a class to show sections
    const showSection = (obsSection)=>{
        obsSection.target.classList.add("section--active");
    };
    // observer for fadein section
    const sectionObserver = new IntersectionObserver((e)=>{
        e.forEach((e)=>{
            e.isIntersecting && showSection(e);
        });
    // showSection(e);
    }, sectionObserverOptions);
    sections.forEach((section)=>{
        sectionObserver.observe(section);
    });
};
observers();

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"426q8":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "projectsSlider", ()=>projectsSlider);
var _keenSliderCjs = require("../../node_modules/keen-slider/keen-slider.cjs");
var _keenSliderCjsDefault = parcelHelpers.interopDefault(_keenSliderCjs);
const linksLiveSite = [
    " https://advice-generator-krzysiek.netlify.app",
    "https://noughts-and-crosses-kl.netlify.app/",
    "https://ornate-raindrop-671bf8.netlify.app/",
    "https://dazzling-rugelach-d5a483.netlify.app/", 
];
const linksGitHub = [
    "https://github.com/KrzysiekLu/Advice-Generator-FrontEndMentor",
    "https://github.com/KrzysiekLu/NOUGHTS-AND-CROSSES",
    "https://github.com/KrzysiekLu/Form",
    "https://github.com/KrzysiekLu/Country-information-cards", 
];
const projectLinks = document.querySelectorAll(".project-link");
const projectsSlider = ()=>{
    function navigation(slider) {
        let wrapper, dots, arrowLeft, arrowRight;
        const projectsInfo = document.querySelectorAll(".project-info__wraper");
        function markup(remove) {
            wrapperMarkup(remove);
            dotMarkup(remove);
            arrowMarkup(remove);
        }
        function removeElement(elment) {
            elment.parentNode.removeChild(elment);
        }
        function createDiv(className) {
            var div = document.createElement("div");
            var classNames = className.split(" ");
            classNames.forEach((name)=>div.classList.add(name));
            return div;
        }
        function arrowMarkup(remove) {
            if (remove) {
                removeElement(arrowLeft);
                removeElement(arrowRight);
                return;
            }
            arrowLeft = createDiv("arrow arrow--left");
            arrowLeft.addEventListener("click", ()=>{
                slider.prev();
            });
            arrowRight = createDiv("arrow arrow--right");
            arrowRight.addEventListener("click", ()=>{
                slider.next();
            });
            wrapper.appendChild(arrowLeft);
            wrapper.appendChild(arrowRight);
        }
        function wrapperMarkup(remove) {
            if (remove) {
                var parent = wrapper.parentNode;
                while(wrapper.firstChild)parent.insertBefore(wrapper.firstChild, wrapper);
                removeElement(wrapper);
                return;
            }
            wrapper = createDiv("navigation-wrapper");
            slider.container.parentNode.appendChild(wrapper);
            wrapper.appendChild(slider.container);
        }
        function dotMarkup(remove) {
            if (remove) {
                removeElement(dots);
                return;
            }
            dots = createDiv("dots");
            slider.track.details.slides.forEach((_e, idx)=>{
                var dot = createDiv("dot");
                dot.addEventListener("click", ()=>slider.moveToIdx(idx));
                dots.appendChild(dot);
            });
            wrapper.appendChild(dots);
        }
        const updateDescription = (index)=>{
            projectsInfo.forEach((el)=>{
                el.classList.remove("project-info__wraper--show");
            });
            projectsInfo[index].classList.add("project-info__wraper--show");
        };
        const updateLinks = (index)=>{
            projectLinks[0].setAttribute("href", linksGitHub[index]);
            projectLinks[1].setAttribute("href", linksLiveSite[index]);
        };
        function updateClasses() {
            var slide = slider.track.details.rel;
            slide === 0 ? arrowLeft.classList.add("arrow--disabled") : arrowLeft.classList.remove("arrow--disabled");
            slide === slider.track.details.slides.length - 1 ? arrowRight.classList.add("arrow--disabled") : arrowRight.classList.remove("arrow--disabled");
            Array.from(dots.children).forEach(function(dot, idx) {
                idx === slide ? (dot.classList.add("dot--active"), updateDescription(idx), updateLinks(idx)) : dot.classList.remove("dot--active");
            });
        }
        slider.on("created", ()=>{
            markup();
            updateClasses();
        });
        slider.on("optionsChanged", ()=>{
            console.log(2);
            markup(true);
            markup();
            updateClasses();
        });
        slider.on("slideChanged", ()=>{
            updateClasses();
        });
        slider.on("destroyed", ()=>{
            markup(true);
        });
    }
    var slider = new (0, _keenSliderCjsDefault.default)("#my-keen-slider", {
        loop: true,
        slides: {
            origin: "center"
        }
    }, [
        navigation
    ]);
};
projectsSlider();

},{"../../node_modules/keen-slider/keen-slider.cjs":"jV6nQ","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"jV6nQ":[function(require,module,exports) {
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: !0
});
var n = function() {
    return n = Object.assign || function(n) {
        for(var t, i = 1, e = arguments.length; i < e; i++)for(var r in t = arguments[i])Object.prototype.hasOwnProperty.call(t, r) && (n[r] = t[r]);
        return n;
    }, n.apply(this, arguments);
};
function t(n, t, i) {
    if (i || 2 === arguments.length) for(var e, r = 0, a = t.length; r < a; r++)!e && r in t || (e || (e = Array.prototype.slice.call(t, 0, r)), e[r] = t[r]);
    return n.concat(e || Array.prototype.slice.call(t));
}
function i(n) {
    return Array.prototype.slice.call(n);
}
function e(n, t) {
    var i = Math.floor(n);
    return i === t || i + 1 === t ? n : t;
}
function r() {
    return Date.now();
}
function a(n, t, i) {
    if (t = "data-keen-slider-" + t, null === i) return n.removeAttribute(t);
    n.setAttribute(t, i || "");
}
function o(n, t) {
    return t = t || document, "function" == typeof n && (n = n(t)), Array.isArray(n) ? n : "string" == typeof n ? i(t.querySelectorAll(n)) : n instanceof HTMLElement ? [
        n
    ] : n instanceof NodeList ? i(n) : [];
}
function u(n) {
    n.raw && (n = n.raw), n.cancelable && !n.defaultPrevented && n.preventDefault();
}
function s(n) {
    n.raw && (n = n.raw), n.stopPropagation && n.stopPropagation();
}
function c() {
    var n = [];
    return {
        add: function(t, i, e, r) {
            t.addListener ? t.addListener(e) : t.addEventListener(i, e, r), n.push([
                t,
                i,
                e,
                r
            ]);
        },
        input: function(n, t, i, e) {
            this.add(n, t, function(n) {
                return function(t) {
                    t.nativeEvent && (t = t.nativeEvent);
                    var i = t.changedTouches || [], e = t.targetTouches || [], r = t.detail && t.detail.x ? t.detail : null;
                    return n({
                        id: r ? r.identifier ? r.identifier : "i" : e[0] ? e[0] ? e[0].identifier : "e" : "d",
                        idChanged: r ? r.identifier ? r.identifier : "i" : i[0] ? i[0] ? i[0].identifier : "e" : "d",
                        raw: t,
                        x: r && r.x ? r.x : e[0] ? e[0].screenX : r ? r.x : t.pageX,
                        y: r && r.y ? r.y : e[0] ? e[0].screenY : r ? r.y : t.pageY
                    });
                };
            }(i), e);
        },
        purge: function() {
            n.forEach(function(n) {
                n[0].removeListener ? n[0].removeListener(n[2]) : n[0].removeEventListener(n[1], n[2], n[3]);
            }), n = [];
        }
    };
}
function d(n, t, i) {
    return Math.min(Math.max(n, t), i);
}
function l(n) {
    return (n > 0 ? 1 : 0) - (n < 0 ? 1 : 0) || +n;
}
function f(n) {
    var t = n.getBoundingClientRect();
    return {
        height: e(t.height, n.offsetHeight),
        width: e(t.width, n.offsetWidth)
    };
}
function p(n, t, i, e) {
    var r = n && n[t];
    return null == r ? i : e && "function" == typeof r ? r() : r;
}
function v(n) {
    return Math.round(1e6 * n) / 1e6;
}
function h(n) {
    var t, i, e, r, a, o;
    function u(t) {
        o || (o = t), s(!0);
        var a = t - o;
        a > e && (a = e);
        var l = r[i];
        if (l[3] < a) return i++, u(t);
        var f = l[2], p = l[4], v = l[0], h = l[1] * (0, l[5])(0 === p ? 1 : (a - f) / p);
        if (h && n.track.to(v + h), a < e) return d();
        o = null, s(!1), c(null), n.emit("animationEnded");
    }
    function s(n) {
        t.active = n;
    }
    function c(n) {
        t.targetIdx = n;
    }
    function d() {
        var n;
        n = u, a = window.requestAnimationFrame(n);
    }
    function l() {
        var t;
        t = a, window.cancelAnimationFrame(t), s(!1), c(null), o && n.emit("animationStopped"), o = null;
    }
    return t = {
        active: !1,
        start: function(t) {
            if (l(), n.track.details) {
                var a = 0, o = n.track.details.position;
                i = 0, e = 0, r = t.map(function(n) {
                    var t, i = o, r = null !== (t = n.earlyExit) && void 0 !== t ? t : n.duration, u = n.easing, s = n.distance * u(r / n.duration) || 0;
                    o += s;
                    var c = e;
                    return e += r, a += s, [
                        i,
                        n.distance,
                        c,
                        e,
                        n.duration,
                        u
                    ];
                }), c(n.track.distToIdx(a)), d(), n.emit("animationStarted");
            }
        },
        stop: l,
        targetIdx: null
    };
}
function m(n) {
    var i, e, a, o, u, s, c, f, h, m, g, b, x, y, k = 1 / 0, w = [], M = null, T = 0;
    function C(n) {
        _(T + n);
    }
    function E(n) {
        var t = z(T + n).abs;
        return D(t) ? t : null;
    }
    function z(n) {
        var i = Math.floor(Math.abs(v(n / e))), r = v((n % e + e) % e);
        r === e && (r = 0);
        var a = l(n), o = c.indexOf(t([], c, !0).reduce(function(n, t) {
            return Math.abs(t - r) < Math.abs(n - r) ? t : n;
        })), u = o;
        return a < 0 && i++, o === s && (u = 0, i += a > 0 ? 1 : -1), {
            abs: u + i * s * a,
            origin: o,
            rel: u
        };
    }
    function I(n, t, i) {
        var e;
        if (t || !O()) return A(n, i);
        if (!D(n)) return null;
        var r = z(null != i ? i : T), a = r.abs, o = n - r.rel, u = a + o;
        e = A(u);
        var c = A(u - s * l(o));
        return (null !== c && Math.abs(c) < Math.abs(e) || null === e) && (e = c), v(e);
    }
    function A(n, t) {
        if (null == t && (t = v(T)), !D(n) || null === n) return null;
        n = Math.round(n);
        var i = z(t), r = i.abs, a = i.rel, o = i.origin, u = S(n), d = (t % e + e) % e, l = c[o], f = Math.floor((n - (r - a)) / s) * e;
        return v(l - d - l + c[u] + f + (o === s ? e : 0));
    }
    function D(n) {
        return L(n) === n;
    }
    function L(n) {
        return d(n, h, m);
    }
    function O() {
        return o.loop;
    }
    function S(n) {
        return (n % s + s) % s;
    }
    function _(t) {
        var i;
        i = t - T, w.push({
            distance: i,
            timestamp: r()
        }), w.length > 6 && (w = w.slice(-6)), T = v(t);
        var e = P().abs;
        if (e !== M) {
            var a = null !== M;
            M = e, a && n.emit("slideChanged");
        }
    }
    function P(t) {
        var r = t ? null : function() {
            if (s) {
                var n = O(), t = n ? (T % e + e) % e : T, i = (n ? T % e : T) - u[0][2], r = 0 - (i < 0 && n ? e - Math.abs(i) : i), c = 0, d = z(T), f = d.abs, p = d.rel, v = u[p][2], k = u.map(function(t, i) {
                    var a = r + c;
                    (a < 0 - t[0] || a > 1) && (a += (Math.abs(a) > e - 1 && n ? e : 0) * l(-a));
                    var u = i - p, d = l(u), h = u + f;
                    n && (-1 === d && a > v && (h += s), 1 === d && a < v && (h -= s), null !== g && h < g && (a += e), null !== b && h > b && (a -= e));
                    var m = a + t[0] + t[1], x = Math.max(a >= 0 && m <= 1 ? 1 : m < 0 || a > 1 ? 0 : a < 0 ? Math.min(1, (t[0] + a) / t[0]) : (1 - a) / t[0], 0);
                    return c += t[0] + t[1], {
                        abs: h,
                        distance: o.rtl ? -1 * a + 1 - t[0] : a,
                        portion: x,
                        size: t[0]
                    };
                });
                return f = L(f), p = S(f), {
                    abs: L(f),
                    length: a,
                    max: y,
                    maxIdx: m,
                    min: x,
                    minIdx: h,
                    position: T,
                    progress: n ? t / e : T / a,
                    rel: p,
                    slides: k,
                    slidesLength: e
                };
            }
        }();
        return i.details = r, n.emit("detailsChanged"), r;
    }
    return i = {
        absToRel: S,
        add: C,
        details: null,
        distToIdx: E,
        idxToDist: I,
        init: function(t) {
            if (function() {
                if (o = n.options, u = (o.trackConfig || []).map(function(n) {
                    return [
                        p(n, "size", 1),
                        p(n, "spacing", 0),
                        p(n, "origin", 0)
                    ];
                }), s = u.length) {
                    e = v(u.reduce(function(n, t) {
                        return n + t[0] + t[1];
                    }, 0));
                    var t, i = s - 1;
                    a = v(e + u[0][2] - u[i][0] - u[i][2] - u[i][1]), c = u.reduce(function(n, i) {
                        if (!n) return [
                            0
                        ];
                        var e = u[n.length - 1], r = n[n.length - 1] + (e[0] + e[2]) + e[1];
                        return r -= i[2], n[n.length - 1] > r && (r = n[n.length - 1]), r = v(r), n.push(r), (!t || t < r) && (f = n.length - 1), t = r, n;
                    }, null), 0 === a && (f = 0), c.push(v(e));
                }
            }(), !s) return P(!0);
            var i;
            !function() {
                var t = n.options.range, i = n.options.loop;
                g = h = i ? p(i, "min", -1 / 0) : 0, b = m = i ? p(i, "max", k) : f;
                var e = p(t, "min", null), r = p(t, "max", null);
                e && (h = e), r && (m = r), x = h === -1 / 0 ? h : n.track.idxToDist(h || 0, !0, 0), y = m === k ? m : I(m, !0, 0), null === r && (b = m), p(t, "align", !1) && m !== k && 0 === u[S(m)][2] && (y -= 1 - u[S(m)][0], m = E(y - T)), x = v(x), y = v(y);
            }(), i = t, Number(i) === i ? C(A(L(t))) : P();
        },
        to: _,
        velocity: function() {
            var n = r(), t = w.reduce(function(t, i) {
                var e = i.distance, r = i.timestamp;
                return n - r > 200 || (l(e) !== l(t.distance) && t.distance && (t = {
                    distance: 0,
                    lastTimestamp: 0,
                    time: 0
                }), t.time && (t.distance += e), t.lastTimestamp && (t.time += r - t.lastTimestamp), t.lastTimestamp = r), t;
            }, {
                distance: 0,
                lastTimestamp: 0,
                time: 0
            });
            return t.distance / t.time || 0;
        }
    };
}
function g(n) {
    var t, i, e, r, a, o, u;
    function s(n) {
        return 2 * n;
    }
    function c(n) {
        return d(n, o, u);
    }
    function f(n) {
        return 1 - Math.pow(1 - n, 3);
    }
    function p() {
        m();
        var t = "free-snap" === n.options.mode, i = n.track, o = i.velocity();
        e = l(o);
        var u = n.track.details, d = [];
        if (o || !t) {
            var p = v(o), h = p.dist, g = p.dur;
            if (g = s(g), h *= e, t) {
                var b = i.idxToDist(i.distToIdx(h), !0);
                b && (h = b);
            }
            d.push({
                distance: h,
                duration: g,
                easing: f
            });
            var x = u.position, y = x + h;
            if (y < r || y > a) {
                var k = y < r ? r - x : a - x, w = 0, M = o;
                if (l(k) === e) {
                    var T = Math.min(Math.abs(k) / Math.abs(h), 1), C = function(n) {
                        return 1 - Math.pow(1 - n, 1 / 3);
                    }(T) * g;
                    d[0].earlyExit = C, M = o * (1 - T);
                } else d[0].earlyExit = 0, w += k;
                var E = v(M, 100), z = E.dist * e;
                n.options.rubberband && (d.push({
                    distance: z,
                    duration: s(E.dur),
                    easing: f
                }), d.push({
                    distance: -z + w,
                    duration: 500,
                    easing: f
                }));
            }
            n.animator.start(d);
        } else n.moveToIdx(c(u.abs), !0, {
            duration: 500,
            easing: function(n) {
                return 1 + --n * n * n * n * n;
            }
        });
    }
    function v(n, t) {
        void 0 === t && (t = 1e3);
        var i = 147e-9 + (n = Math.abs(n)) / t;
        return {
            dist: Math.pow(n, 2) / i,
            dur: n / i
        };
    }
    function h() {
        var t = n.track.details;
        t && (r = t.min, a = t.max, o = t.minIdx, u = t.maxIdx);
    }
    function m() {
        n.animator.stop();
    }
    n.on("updated", h), n.on("optionsChanged", h), n.on("created", h), n.on("dragStarted", function() {
        m(), t = i = n.track.details.abs;
    }), n.on("dragEnded", function() {
        var e = n.options.mode;
        "snap" === e && function() {
            var e = n.track, o = n.track.details, u = o.position, s = l(e.velocity());
            (u > a || u < r) && (s = 0);
            var d = t + s;
            0 === o.slides[e.absToRel(d)].portion && (d -= s), t !== i && (d = i), l(e.idxToDist(d, !0)) !== s && (d += s), d = c(d);
            var f = e.idxToDist(d, !0);
            n.animator.start([
                {
                    distance: f,
                    duration: 500,
                    easing: function(n) {
                        return 1 + --n * n * n * n * n;
                    }
                }
            ]);
        }(), "free" !== e && "free-snap" !== e || p();
    }), n.on("dragged", function() {
        i = n.track.details.abs;
    });
}
function b(n) {
    var t, i, e, r, a, f, p, v, h, m, g, b, x, y, k, w, M, T, C = c();
    function E(t) {
        if (f && v === t.id) {
            var o = D(t);
            if (h) {
                if (!A(t)) return I(t);
                m = o, h = !1, n.emit("dragChecked");
            }
            if (w) return m = o;
            u(t);
            var c = function(t) {
                if (M === -1 / 0 && T === 1 / 0) return t;
                var e = n.track.details, o = e.length, u = e.position, s = d(t, M - u, T - u);
                if (0 === o) return 0;
                if (!n.options.rubberband) return s;
                if (u <= T && u >= M) return t;
                if (u < M && i > 0 || u > T && i < 0) return t;
                var c = (u < M ? u - M : u - T) / o, l = r * o, f = Math.abs(c * l), p = Math.max(0, 1 - f / a * 2);
                return p * p * t;
            }(p(m - o) / r * e);
            i = l(c);
            var x = n.track.details.position;
            (x > M && x < T || x === M && i > 0 || x === T && i < 0) && s(t), g += c, !b && Math.abs(g * r) > 5 && (b = !0), n.track.add(c), m = o, n.emit("dragged");
        }
    }
    function z(t) {
        !f && n.track.details && n.track.details.length && (g = 0, f = !0, b = !1, h = !0, v = t.id, A(t), m = D(t), n.emit("dragStarted"));
    }
    function I(t) {
        f && v === t.idChanged && (f = !1, n.emit("dragEnded"));
    }
    function A(n) {
        var t = L(), i = t ? n.y : n.x, e = t ? n.x : n.y, r = void 0 !== x && void 0 !== y && Math.abs(y - e) <= Math.abs(x - i);
        return x = i, y = e, r;
    }
    function D(n) {
        return L() ? n.y : n.x;
    }
    function L() {
        return n.options.vertical;
    }
    function O() {
        r = n.size, a = L() ? window.innerHeight : window.innerWidth;
        var t = n.track.details;
        t && (M = t.min, T = t.max);
    }
    function S(n) {
        b && (s(n), u(n));
    }
    function _() {
        if (C.purge(), n.options.drag && !n.options.disabled) {
            var i;
            i = n.options.dragSpeed || 1, p = "function" == typeof i ? i : function(n) {
                return n * i;
            }, e = n.options.rtl ? -1 : 1, O(), t = n.container, function() {
                var n = "data-keen-slider-clickable";
                o("[".concat(n, "]:not([").concat(n, "=false])"), t).map(function(n) {
                    C.add(n, "mousedown", s), C.add(n, "touchstart", s);
                });
            }(), C.add(t, "dragstart", function(n) {
                u(n);
            }), C.add(t, "click", S, {
                capture: !0
            }), C.input(t, "ksDragStart", z), C.input(t, "ksDrag", E), C.input(t, "ksDragEnd", I), C.input(t, "mousedown", z), C.input(t, "mousemove", E), C.input(t, "mouseleave", I), C.input(t, "mouseup", I), C.input(t, "touchstart", z, {
                passive: !0
            }), C.input(t, "touchmove", E, {
                passive: !1
            }), C.input(t, "touchend", I), C.input(t, "touchcancel", I), C.add(window, "wheel", function(n) {
                f && u(n);
            });
            var r = "data-keen-slider-scrollable";
            o("[".concat(r, "]:not([").concat(r, "=false])"), n.container).map(function(n) {
                return function(n) {
                    var t;
                    C.input(n, "touchstart", function(n) {
                        t = D(n), w = !0, k = !0;
                    }, {
                        passive: !0
                    }), C.input(n, "touchmove", function(i) {
                        var e = L(), r = e ? n.scrollHeight - n.clientHeight : n.scrollWidth - n.clientWidth, a = t - D(i), o = e ? n.scrollTop : n.scrollLeft, s = e && "scroll" === n.style.overflowY || !e && "scroll" === n.style.overflowX;
                        if (t = D(i), (a < 0 && o > 0 || a > 0 && o < r) && k && s) return w = !0;
                        k = !1, u(i), w = !1;
                    }), C.input(n, "touchend", function() {
                        w = !1;
                    });
                }(n);
            });
        }
    }
    n.on("updated", O), n.on("optionsChanged", _), n.on("created", _), n.on("destroyed", C.purge);
}
function x(n) {
    var t, i, e = null;
    function r(t, i, e) {
        n.animator.active ? o(t, i, e) : requestAnimationFrame(function() {
            return o(t, i, e);
        });
    }
    function a() {
        r(!1, !1, i);
    }
    function o(i, r, a) {
        var o = 0, u = n.size, d = n.track.details;
        if (d && t) {
            var l = d.slides;
            t.forEach(function(n, t) {
                if (i) !e && r && s(n, null, a), c(n, null, a);
                else {
                    if (!l[t]) return;
                    var d = l[t].size * u;
                    !e && r && s(n, d, a), c(n, l[t].distance * u - o, a), o += d;
                }
            });
        }
    }
    function u(t) {
        return "performance" === n.options.renderMode ? Math.round(t) : t;
    }
    function s(n, t, i) {
        var e = i ? "height" : "width";
        null !== t && (t = u(t) + "px"), n.style["min-" + e] = t, n.style["max-" + e] = t;
    }
    function c(n, t, i) {
        if (null !== t) {
            t = u(t);
            var e = i ? t : 0;
            t = "translate3d(".concat(i ? 0 : t, "px, ").concat(e, "px, 0)");
        }
        n.style.transform = t, n.style["-webkit-transform"] = t;
    }
    function d() {
        t && (o(!0, !0, i), t = null), n.on("detailsChanged", a, !0);
    }
    function l() {
        r(!1, !0, i);
    }
    function f() {
        d(), i = n.options.vertical, n.options.disabled || "custom" === n.options.renderMode || (e = "auto" === p(n.options.slides, "perView", null), n.on("detailsChanged", a), (t = n.slides).length && l());
    }
    n.on("created", f), n.on("optionsChanged", f), n.on("beforeOptionsChanged", function() {
        d();
    }), n.on("updated", l), n.on("destroyed", d);
}
function y(t, i) {
    return function(e) {
        var r, u, s, d, l, v, h = c();
        function m(n) {
            var t;
            a(e.container, "reverse", "rtl" !== (t = e.container, window.getComputedStyle(t, null).getPropertyValue("direction")) || n ? null : ""), a(e.container, "v", e.options.vertical && !n ? "" : null), a(e.container, "disabled", e.options.disabled && !n ? "" : null);
        }
        function g() {
            b() && M();
        }
        function b() {
            var t = null;
            if (d.forEach(function(n) {
                n.matches && (t = n.__media);
            }), t === r) return !1;
            r || e.emit("beforeOptionsChanged"), r = t;
            var i = t ? s.breakpoints[t] : s;
            return e.options = n(n({}, s), i), m(), I(), A(), C(), !0;
        }
        function x(n) {
            var t = f(n);
            return (e.options.vertical ? t.height : t.width) / e.size || 1;
        }
        function y() {
            return e.options.trackConfig.length;
        }
        function k(t) {
            for(var a in r = !1, s = n(n({}, i), t), h.purge(), u = e.size, d = [], s.breakpoints || []){
                var o = window.matchMedia(a);
                o.__media = a, d.push(o), h.add(o, "change", g);
            }
            h.add(window, "orientationchange", z), h.add(window, "resize", E), b();
        }
        function w(n) {
            e.animator.stop();
            var t = e.track.details;
            e.track.init(null != n ? n : t ? t.abs : 0);
        }
        function M(n) {
            w(n), e.emit("optionsChanged");
        }
        function T(n, t) {
            if (n) return k(n), void M(t);
            I(), A();
            var i = y();
            C(), y() !== i ? M(t) : w(t), e.emit("updated");
        }
        function C() {
            var n = e.options.slides;
            if ("function" == typeof n) return e.options.trackConfig = n(e.size, e.slides);
            for(var t = e.slides, i = t.length, r = "number" == typeof n ? n : p(n, "number", i, !0), a = [], o = p(n, "perView", 1, !0), u = p(n, "spacing", 0, !0) / e.size || 0, s = "auto" === o ? u : u / o, c = p(n, "origin", "auto"), d = 0, l = 0; l < r; l++){
                var f = "auto" === o ? x(t[l]) : 1 / o - u + s, v = "center" === c ? .5 - f / 2 : "auto" === c ? 0 : c;
                a.push({
                    origin: v,
                    size: f,
                    spacing: u
                }), d += f;
            }
            if (d += u * (r - 1), "auto" === c && !e.options.loop && 1 !== o) {
                var h = 0;
                a.map(function(n) {
                    var t = d - h;
                    return h += n.size + u, t >= 1 || (n.origin = 1 - t - (d > 1 ? 0 : 1 - d)), n;
                });
            }
            e.options.trackConfig = a;
        }
        function E() {
            I();
            var n = e.size;
            e.options.disabled || n === u || (u = n, T());
        }
        function z() {
            E(), setTimeout(E, 500), setTimeout(E, 2e3);
        }
        function I() {
            var n = f(e.container);
            e.size = (e.options.vertical ? n.height : n.width) || 1;
        }
        function A() {
            e.slides = o(e.options.selector, e.container);
        }
        e.container = (v = o(t, l || document)).length ? v[0] : null, e.destroy = function() {
            h.purge(), e.emit("destroyed"), m(!0);
        }, e.prev = function() {
            e.moveToIdx(e.track.details.abs - 1, !0);
        }, e.next = function() {
            e.moveToIdx(e.track.details.abs + 1, !0);
        }, e.update = T, k(e.options);
    };
}
exports.default = function(n, i, e) {
    try {
        return function(n, t) {
            var i, e = {};
            return i = {
                emit: function(n) {
                    e[n] && e[n].forEach(function(n) {
                        n(i);
                    });
                    var t = i.options && i.options[n];
                    t && t(i);
                },
                moveToIdx: function(n, t, e) {
                    var r = i.track.idxToDist(n, t);
                    if (r) {
                        var a = i.options.defaultAnimation;
                        i.animator.start([
                            {
                                distance: r,
                                duration: p(e || a, "duration", 500),
                                easing: p(e || a, "easing", function(n) {
                                    return 1 + --n * n * n * n * n;
                                })
                            }
                        ]);
                    }
                },
                on: function(n, t, i) {
                    void 0 === i && (i = !1), e[n] || (e[n] = []);
                    var r = e[n].indexOf(t);
                    r > -1 ? i && delete e[n][r] : i || e[n].push(t);
                },
                options: n
            }, function() {
                if (i.track = m(i), i.animator = h(i), t) for(var n = 0, e = t; n < e.length; n++)(0, e[n])(i);
                i.track.init(i.options.initial || 0), i.emit("created");
            }(), i;
        }(i, t([
            y(n, {
                drag: !0,
                mode: "snap",
                renderMode: "precision",
                rubberband: !0,
                selector: ".keen-slider__slide"
            }),
            x,
            b,
            g
        ], e || [], !0));
    } catch (n1) {
        console.error(n1);
    }
};

},{}],"iFrdo":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "contact", ()=>contact);
const contact = ()=>{
    // Copy tel or email to clipboard
    const copyContactDetails = ()=>{
        const copyLinks = document.querySelectorAll(" .wraper >.copy");
        copyLinks.forEach((el)=>{
            el.addEventListener("click", (e)=>{
                navigator.clipboard.writeText(e.target.previousElementSibling.textContent);
            });
        });
    };
    copyContactDetails();
    ////////////// From validation
    const emailInput = document.querySelector(".form__email");
    const formErrorInfo = document.querySelector(".form__error-info");
    // Email validation
    const checkEmail = (mail)=>{
        const mailFormat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
        if (mail.value.match(mailFormat)) return true;
        else return false;
    };
    const showError = ()=>{
        formErrorInfo.classList.add("form__error-info--active");
        emailInput.classList.add("form__input--error");
    };
    const resetErrors = ()=>{
        emailInput.classList.remove("form__input--error");
        formErrorInfo.classList.remove("form__error-info--active");
    };
    const validateForm = (event)=>{
        checkEmail(emailInput) ? (handleSubmit(event), resetErrors()) : showError();
    };
    // Submit Email
    const handleSubmit = (event)=>{
        const myForm = event.target;
        const formData = new FormData(myForm);
        fetch("/", {
            method: "POST",
            headers: {
                "Content-Type": "application/x-www-form-urlencoded"
            },
            body: new URLSearchParams(formData).toString()
        }).then(()=>{
            document.querySelector(".contact__overlay").classList.add("contact__overlay--open");
            document.querySelector(".confirm-message__button").addEventListener("click", ()=>{
                document.querySelector(".contact__overlay").classList.remove("contact__overlay--open");
            });
        }).catch((error)=>alert(error));
    };
    document.querySelector("form").addEventListener("submit", (event)=>{
        event.preventDefault();
        validateForm(event);
    });
};
contact();

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}]},["7age3","3cYfC"], "3cYfC", "parcelRequire94c2")

//# sourceMappingURL=index.b8fca702.js.map
