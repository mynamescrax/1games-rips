function unityFramework(_0x13e282) {
  var _0x13e282 = typeof _0x13e282 !== "undefined" ? _0x13e282 : {};
  _0x13e282.USER_JSPRE_PLACEHOLDER = "USER_JSPRE_PLACEHOLDER";
  function _0x4a8d62(_0x430433, _0x5c0766) {
    _0x539b49("The JavaScript function 'Pointer_stringify(ptrToSomeCString)' is obsoleted and will be removed in a future Unity version. Please call 'UTF8ToString(ptrToSomeCString)' instead.");
    return _0x432dbf(_0x430433, _0x5c0766);
  }
  _0x13e282.Pointer_stringify = _0x4a8d62;
  var _0xe26e98 = "(^|\\n)(\\s+at\\s+|)jsStackTrace(\\s+\\(|@)([^\\n]+):\\d+:\\d+(\\)|)(\\n|$)";
  var _0x47e71e = _0x2114ef().match(new RegExp(_0xe26e98));
  if (_0x47e71e) {
    _0x13e282.stackTraceRegExp = new RegExp(_0xe26e98.replace("([^\\n]+)", _0x47e71e[4].replace(/[\\^${}[\]().*+?|]/g, "\\$&")).replace("jsStackTrace", "[^\\n]+"));
  }
  function _0x2f2f3c(_0x80c276) {
    if (_0x3f5914) {
      return;
    }
    _0x3f5914 = true;
    _0xdcff3b = 1;
    if (typeof ENVIRONMENT_IS_PTHREAD !== "undefined" && ENVIRONMENT_IS_PTHREAD) {
      console.error("Pthread aborting at " + new Error().stack);
    }
    if (_0x80c276 !== undefined) {
      _0x1b619b(_0x80c276);
      _0x500e9(_0x80c276);
      _0x80c276 = JSON.stringify(_0x80c276);
    } else {
      _0x80c276 = "";
    }
    var _0x240fd1 = "abort(" + _0x80c276 + ") at " + _0x1d8fda();
    if (_0x13e282.abortHandler && _0x13e282.abortHandler(_0x240fd1)) {
      return;
    }
    throw _0x240fd1;
  }
  _0x13e282.SetFullscreen = function (_0x34780e) {
    if (typeof _0x42595a === "undefined" || !_0x42595a) {
      console.log("Runtime not initialized yet.");
    } else if (typeof _0x71eede === "undefined") {
      console.log("Player not loaded yet.");
    } else {
      var _0x4eff71 = _0x71eede.canPerformEventHandlerRequests;
      _0x71eede.canPerformEventHandlerRequests = function () {
        return 1;
      };
      _0x13e282.ccall("SetFullscreen", null, ["number"], [_0x34780e]);
      _0x71eede.canPerformEventHandlerRequests = _0x4eff71;
    }
  };
  if (typeof ENVIRONMENT_IS_PTHREAD === "undefined" || !ENVIRONMENT_IS_PTHREAD) {
    _0x13e282.preRun.push(function () {
      var _0x5ac04a = _0x13e282.unityFileSystemInit || function () {
        _0x1f58b9.mkdir("/idbfs");
        _0x1f58b9.mount(_0x22f872, {}, "/idbfs");
        _0x13e282.addRunDependency("JS_FileSystem_Mount");
        _0x1f58b9.syncfs(true, function (_0x5552fc) {
          if (_0x5552fc) {
            console.log("IndexedDB is not available. Data will not persist in cache and PlayerPrefs will not be saved.");
          }
          _0x13e282.removeRunDependency("JS_FileSystem_Mount");
        });
      };
      _0x5ac04a();
    });
  }
  var _0x4227d8 = [];
  var _0x51374c = false;
  var _0x392eb3;
  var _0x58f62f = null;
  function _0x3ff182(_0x38d6cd) {
    var _0x45ce9e = Object.keys(_0x4227d8);
    for (var _0x47591a = 0; _0x47591a < _0x45ce9e.length; ++_0x47591a) {
      var _0x200d90 = _0x4227d8[_0x45ce9e[_0x47591a]];
      if (_0x200d90.deviceId && _0x200d90.deviceId == _0x38d6cd.deviceId) {
        return _0x200d90;
      }
    }
    for (var _0x47591a = 0; _0x47591a < _0x45ce9e.length; ++_0x47591a) {
      var _0x200d90 = _0x4227d8[_0x45ce9e[_0x47591a]];
      if (_0x200d90 == _0x38d6cd) {
        return _0x200d90;
      }
    }
    for (var _0x47591a = 0; _0x47591a < _0x45ce9e.length; ++_0x47591a) {
      var _0x200d90 = _0x4227d8[_0x45ce9e[_0x47591a]];
      if (_0x200d90.label && _0x200d90.label == _0x38d6cd.label) {
        return _0x200d90;
      }
    }
    for (var _0x47591a = 0; _0x47591a < _0x45ce9e.length; ++_0x47591a) {
      var _0x200d90 = _0x4227d8[_0x45ce9e[_0x47591a]];
      if (_0x200d90.groupId && _0x200d90.kind && _0x200d90.groupId == _0x38d6cd.groupId && _0x200d90.kind == _0x38d6cd.kind) {
        return _0x200d90;
      }
    }
  }
  function _0x55d26c() {
    for (var _0x40f1ac = 0;; ++_0x40f1ac) {
      if (!_0x4227d8[_0x40f1ac]) {
        return _0x40f1ac;
      }
    }
  }
  function _0x1cd557(_0x5be291) {
    _0x392eb3();
    _0x4227d8 = [];
    var _0xd57aea = {};
    var _0x6faa14 = [];
    _0x5be291.forEach(function (_0x367dac) {
      if (_0x367dac.kind === "videoinput") {
        var _0x5f4bbe = _0x3ff182(_0x367dac);
        if (_0x5f4bbe) {
          _0xd57aea[_0x5f4bbe.id] = _0x5f4bbe;
        } else {
          _0x6faa14.push(_0x367dac);
        }
      }
    });
    _0x4227d8 = _0xd57aea;
    _0x6faa14.forEach(function (_0xbf0d7a) {
      if (!_0xbf0d7a.id) {
        _0xbf0d7a.id = _0x55d26c();
        _0xbf0d7a.name = _0xbf0d7a.label || "Video input #" + (_0xbf0d7a.id + 1);
        _0xbf0d7a.isFrontFacing = _0xbf0d7a.name.toLowerCase().includes("front") || !_0xbf0d7a.name.toLowerCase().includes("front") && !_0xbf0d7a.name.toLowerCase().includes("back");
        _0x4227d8[_0xbf0d7a.id] = _0xbf0d7a;
      }
    });
  }
  function _0x40b980() {
    if (!_0x4227d8) {
      return;
    }
    navigator.mediaDevices.enumerateDevices().then(function (_0x5dbb2b) {
      _0x1cd557(_0x5dbb2b);
      _0x51374c = true;
    }).catch(function (_0x197f09) {
      console.warn("Unable to enumerate media devices: " + _0x197f09 + "\nWebcams will not be available.");
      _0x43204d();
    });
    if (/Firefox/.test(navigator.userAgent)) {
      setTimeout(_0x40b980, 60000);
      _0x539b49("Applying workaround to Firefox bug https://bugzilla.mozilla.org/show_bug.cgi?id=1397977");
    }
  }
  function _0x43204d() {
    if (navigator.mediaDevices && navigator.mediaDevices.removeEventListener) {
      navigator.mediaDevices.removeEventListener("devicechange", _0x40b980);
    }
    _0x4227d8 = null;
  }
  _0x13e282.disableAccessToMediaDevices = _0x43204d;
  if (!navigator.mediaDevices) {
    console.warn("navigator.mediaDevices not supported by this browser. Webcam access will not be available." + (location.protocol == "https:" ? "" : " Try hosting the page over HTTPS, because some browsers disable webcam access when insecure HTTP is being used."));
    _0x43204d();
  } else if (typeof ENVIRONMENT_IS_PTHREAD === "undefined" || !ENVIRONMENT_IS_PTHREAD) {
    setTimeout(function () {
      try {
        _0x156f3b("enumerateMediaDevices");
        _0x392eb3 = function () {
          if (_0x58f62f !== null) {
            clearTimeout(_0x58f62f);
          }
          _0xb5b33c("enumerateMediaDevices");
          if (navigator.mediaDevices) {
            console.log("navigator.mediaDevices support available");
          }
          _0x392eb3 = function () {};
        };
        _0x40b980();
        _0x58f62f = setTimeout(_0x392eb3, 1000);
        navigator.mediaDevices.addEventListener("devicechange", _0x40b980);
      } catch (_0x4cc0b6) {
        console.warn("Unable to enumerate media devices: " + _0x4cc0b6);
        _0x43204d();
      }
    }, 0);
  }
  function _0x2c775c(_0x57816e, _0x29ef40, _0x25b5e2) {
    var _0x11769c = _0x1c7ce2(_0x29ef40);
    var _0x3f97fe = _0x1c7ce2(_0x57816e);
    var _0x3aa1a0 = 0;
    try {
      if (_0x25b5e2 === undefined) {
        _0x2070c6(_0x3f97fe, _0x11769c);
      } else if (typeof _0x25b5e2 === "string") {
        _0x3aa1a0 = _0x1c7ce2(_0x25b5e2);
        _0x44e3b9(_0x3f97fe, _0x11769c, _0x3aa1a0);
      } else if (typeof _0x25b5e2 === "number") {
        _0x2c6edb(_0x3f97fe, _0x11769c, _0x25b5e2);
      } else {
        throw "" + _0x25b5e2 + " is does not have a type which is supported by SendMessage.";
      }
    } finally {
      _0x50622a(_0x3aa1a0);
      _0x50622a(_0x3f97fe);
      _0x50622a(_0x11769c);
    }
  }
  _0x13e282.SendMessage = _0x2c775c;
  var _0x3011f2 = {};
  var _0xc10b05;
  for (_0xc10b05 in _0x13e282) {
    if (_0x13e282.hasOwnProperty(_0xc10b05)) {
      _0x3011f2[_0xc10b05] = _0x13e282[_0xc10b05];
    }
  }
  var _0x17412a = [];
  var _0x3c5e28 = "./this.program";
  function _0x3ddaa1(_0x25cb9a, _0x1d30e6) {
    throw _0x1d30e6;
  }
  var _0x1695cc = false;
  var _0x4eced9 = false;
  var _0x13d661 = false;
  var _0x32c25a = false;
  _0x1695cc = typeof window === "object";
  _0x4eced9 = typeof importScripts === "function";
  _0x13d661 = typeof process === "object" && typeof process.versions === "object" && typeof process.versions.node === "string";
  _0x32c25a = !_0x1695cc && !_0x13d661 && !_0x4eced9;
  var _0x86110d = "";
  function _0x4d2ad3(_0x193f3a) {
    if (_0x13e282.locateFile) {
      return _0x13e282.locateFile(_0x193f3a, _0x86110d);
    }
    return _0x86110d + _0x193f3a;
  }
  var _0x32afa6;
  var _0x380c3a;
  var _0x377387;
  var _0xb233ff;
  var _0x5d2304;
  var _0x785ae0;
  if (_0x13d661) {
    if (_0x4eced9) {
      _0x86110d = require("path").dirname(_0x86110d) + "/";
    } else {
      _0x86110d = __dirname + "/";
    }
    _0x32afa6 = function _0x3442fc(_0x5ccc13, _0x5ad89e) {
      if (!_0x5d2304) {
        _0x5d2304 = require("fs");
      }
      if (!_0x785ae0) {
        _0x785ae0 = require("path");
      }
      _0x5ccc13 = _0x785ae0.normalize(_0x5ccc13);
      return _0x5d2304.readFileSync(_0x5ccc13, _0x5ad89e ? null : "utf8");
    };
    _0x377387 = function _0xd4aade(_0x2118e9) {
      var _0x183022 = _0x32afa6(_0x2118e9, true);
      if (!_0x183022.buffer) {
        _0x183022 = new Uint8Array(_0x183022);
      }
      _0x22d62f(_0x183022.buffer);
      return _0x183022;
    };
    if (process.argv.length > 1) {
      _0x3c5e28 = process.argv[1].replace(/\\/g, "/");
    }
    _0x17412a = process.argv.slice(2);
    if (typeof module !== "undefined") {
      module.exports = _0x13e282;
    }
    process.on("uncaughtException", function (_0x23dc92) {
      if (!(_0x23dc92 instanceof _0xc3b582)) {
        throw _0x23dc92;
      }
    });
    process.on("unhandledRejection", _0x2f2f3c);
    _0x3ddaa1 = function (_0x544d4c) {
      process.exit(_0x544d4c);
    };
    _0x13e282.inspect = function () {
      return "[Emscripten Module object]";
    };
  } else if (_0x32c25a) {
    if (typeof read != "undefined") {
      _0x32afa6 = function _0x5a225e(_0x2f330b) {
        return read(_0x2f330b);
      };
    }
    _0x377387 = function _0x190f50(_0xf77a01) {
      var _0x92351f;
      if (typeof readbuffer === "function") {
        return new Uint8Array(readbuffer(_0xf77a01));
      }
      _0x92351f = read(_0xf77a01, "binary");
      _0x22d62f(typeof _0x92351f === "object");
      return _0x92351f;
    };
    if (typeof scriptArgs != "undefined") {
      _0x17412a = scriptArgs;
    } else if (typeof arguments != "undefined") {
      _0x17412a = arguments;
    }
    if (typeof quit === "function") {
      _0x3ddaa1 = function (_0x42fb64) {
        quit(_0x42fb64);
      };
    }
    if (typeof print !== "undefined") {
      if (typeof console === "undefined") {
        console = {};
      }
      console.log = print;
      console.warn = console.error = typeof printErr !== "undefined" ? printErr : print;
    }
  } else if (_0x1695cc || _0x4eced9) {
    if (_0x4eced9) {
      _0x86110d = "https://games.1games.io";
    } else if (typeof document !== "undefined" && document.currentScript) {
      _0x86110d = document.currentScript.src;
    }
    if (_0x86110d.indexOf("blob:") !== 0) {
      _0x86110d = _0x86110d.substr(0, _0x86110d.lastIndexOf("/") + 1);
    } else {
      _0x86110d = "";
    }
    {
      _0x32afa6 = function (_0x2e13c4) {
        var _0x2c1b51 = new XMLHttpRequest();
        _0x2c1b51.open("GET", _0x2e13c4, false);
        _0x2c1b51.send(null);
        return _0x2c1b51.responseText;
      };
      if (_0x4eced9) {
        _0x377387 = function (_0x46eaae) {
          var _0x144df6 = new XMLHttpRequest();
          _0x144df6.open("GET", _0x46eaae, false);
          _0x144df6.responseType = "arraybuffer";
          _0x144df6.send(null);
          return new Uint8Array(_0x144df6.response);
        };
      }
      _0x380c3a = function (_0x3dab31, _0x250e43, _0x35cbb5) {
        var _0x27d8cb = new XMLHttpRequest();
        _0x27d8cb.open("GET", _0x3dab31, true);
        _0x27d8cb.responseType = "arraybuffer";
        _0x27d8cb.onload = function () {
          if (_0x27d8cb.status == 200 || _0x27d8cb.status == 0 && _0x27d8cb.response) {
            _0x250e43(_0x27d8cb.response);
            return;
          }
          _0x35cbb5();
        };
        _0x27d8cb.onerror = _0x35cbb5;
        _0x27d8cb.send(null);
      };
    }
    _0xb233ff = function (_0x3ef410) {
      document.title = _0x3ef410;
    };
  } else {}
  var _0x1b619b = _0x13e282.print || console.log.bind(console);
  var _0x500e9 = _0x13e282.printErr || console.warn.bind(console);
  for (_0xc10b05 in _0x3011f2) {
    if (_0x3011f2.hasOwnProperty(_0xc10b05)) {
      _0x13e282[_0xc10b05] = _0x3011f2[_0xc10b05];
    }
  }
  _0x3011f2 = null;
  if (_0x13e282.arguments) {
    _0x17412a = _0x13e282.arguments;
  }
  if (_0x13e282.thisProgram) {
    _0x3c5e28 = _0x13e282.thisProgram;
  }
  if (_0x13e282.quit) {
    _0x3ddaa1 = _0x13e282.quit;
  }
  var _0x3bbfa1 = 16;
  function _0x498e05(_0x9bfe11, _0xb5edf1) {
    if (!_0xb5edf1) {
      _0xb5edf1 = _0x3bbfa1;
    }
    return Math.ceil(_0x9bfe11 / _0xb5edf1) * _0xb5edf1;
  }
  function _0x539b49(_0x2c0d13) {
    if (!_0x539b49.shown) {
      _0x539b49.shown = {};
    }
    if (!_0x539b49.shown[_0x2c0d13]) {
      _0x539b49.shown[_0x2c0d13] = 1;
      _0x500e9(_0x2c0d13);
    }
  }
  var _0x10fdd0 = 0;
  function _0x3d1c24(_0x5a4983) {
    _0x10fdd0 = _0x5a4983;
  }
  function _0x25f646() {
    return _0x10fdd0;
  }
  var _0xe9e438;
  if (_0x13e282.wasmBinary) {
    _0xe9e438 = _0x13e282.wasmBinary;
  }
  var _0xf1a847 = _0x13e282.noExitRuntime || true;
  if (typeof WebAssembly !== "object") {
    _0x2f2f3c("no native wasm support detected");
  }
  var _0xbe5cea;
  var _0x3f5914 = false;
  var _0xdcff3b;
  function _0x22d62f(_0x283184, _0x2f9ef6) {
    if (!_0x283184) {
      _0x2f2f3c("Assertion failed: " + _0x2f9ef6);
    }
  }
  function _0x1d8ff0(_0x9fbb2f) {
    var _0x506f93 = _0x13e282["_" + _0x9fbb2f];
    _0x22d62f(_0x506f93, "Cannot call unknown function " + _0x9fbb2f + ", make sure it is exported");
    return _0x506f93;
  }
  function _0x221287(_0x120c24, _0x1bae2d, _0x5848e3, _0x1f4a99, _0x62191a) {
    var _0x1de594 = {
      string: function (_0x31b14c) {
        var _0x5ee29e = 0;
        if (_0x31b14c !== null && _0x31b14c !== undefined && _0x31b14c !== 0) {
          var _0x1e421b = (_0x31b14c.length << 2) + 1;
          _0x5ee29e = _0x105630(_0x1e421b);
          _0x98a294(_0x31b14c, _0x5ee29e, _0x1e421b);
        }
        return _0x5ee29e;
      },
      array: function (_0x26e1e0) {
        var _0x491cf3 = _0x105630(_0x26e1e0.length);
        _0x5d45cb(_0x26e1e0, _0x491cf3);
        return _0x491cf3;
      }
    };
    function _0x27f67a(_0x4d34fe) {
      if (_0x1bae2d === "string") {
        return _0x432dbf(_0x4d34fe);
      }
      if (_0x1bae2d === "boolean") {
        return Boolean(_0x4d34fe);
      }
      return _0x4d34fe;
    }
    var _0x9dba7b = _0x1d8ff0(_0x120c24);
    var _0x327455 = [];
    var _0x14e0f3 = 0;
    if (_0x1f4a99) {
      for (var _0xa20dfc = 0; _0xa20dfc < _0x1f4a99.length; _0xa20dfc++) {
        var _0x5d4096 = _0x1de594[_0x5848e3[_0xa20dfc]];
        if (_0x5d4096) {
          if (_0x14e0f3 === 0) {
            _0x14e0f3 = _0x5b9f35();
          }
          _0x327455[_0xa20dfc] = _0x5d4096(_0x1f4a99[_0xa20dfc]);
        } else {
          _0x327455[_0xa20dfc] = _0x1f4a99[_0xa20dfc];
        }
      }
    }
    var _0x528c16 = _0x9dba7b.apply(null, _0x327455);
    _0x528c16 = _0x27f67a(_0x528c16);
    if (_0x14e0f3 !== 0) {
      _0x50a678(_0x14e0f3);
    }
    return _0x528c16;
  }
  function _0x21bb5c(_0x11a46e, _0x451c4f, _0x2ed492, _0xad6cc9) {
    _0x2ed492 = _0x2ed492 || [];
    var _0x5f179f = _0x2ed492.every(function (_0x28aed8) {
      return _0x28aed8 === "number";
    });
    var _0x5308d8 = _0x451c4f !== "string";
    if (_0x5308d8 && _0x5f179f && !_0xad6cc9) {
      return _0x1d8ff0(_0x11a46e);
    }
    return function () {
      return _0x221287(_0x11a46e, _0x451c4f, _0x2ed492, arguments, _0xad6cc9);
    };
  }
  var _0x39614 = typeof TextDecoder !== "undefined" ? new TextDecoder("utf8") : undefined;
  function _0x39bfc1(_0x5425ec, _0x5121e5, _0x4422f9) {
    var _0x3dc49e = _0x5121e5 + _0x4422f9;
    var _0xb2e03c = _0x5121e5;
    while (_0x5425ec[_0xb2e03c] && !(_0xb2e03c >= _0x3dc49e)) {
      ++_0xb2e03c;
    }
    if (_0xb2e03c - _0x5121e5 > 16 && _0x5425ec.subarray && _0x39614) {
      return _0x39614.decode(_0x5425ec.subarray(_0x5121e5, _0xb2e03c));
    } else {
      var _0xc9f566 = "";
      while (_0x5121e5 < _0xb2e03c) {
        var _0x298110 = _0x5425ec[_0x5121e5++];
        if (!(_0x298110 & 128)) {
          _0xc9f566 += String.fromCharCode(_0x298110);
          continue;
        }
        var _0x53cce0 = _0x5425ec[_0x5121e5++] & 63;
        if ((_0x298110 & 224) == 192) {
          _0xc9f566 += String.fromCharCode((_0x298110 & 31) << 6 | _0x53cce0);
          continue;
        }
        var _0x5877ce = _0x5425ec[_0x5121e5++] & 63;
        if ((_0x298110 & 240) == 224) {
          _0x298110 = (_0x298110 & 15) << 12 | _0x53cce0 << 6 | _0x5877ce;
        } else {
          _0x298110 = (_0x298110 & 7) << 18 | _0x53cce0 << 12 | _0x5877ce << 6 | _0x5425ec[_0x5121e5++] & 63;
        }
        if (_0x298110 < 65536) {
          _0xc9f566 += String.fromCharCode(_0x298110);
        } else {
          var _0x56935f = _0x298110 - 65536;
          _0xc9f566 += String.fromCharCode(_0x56935f >> 10 | 55296, _0x56935f & 1023 | 56320);
        }
      }
    }
    return _0xc9f566;
  }
  function _0x432dbf(_0x311861, _0x26a490) {
    if (_0x311861) {
      return _0x39bfc1(_0x353336, _0x311861, _0x26a490);
    } else {
      return "";
    }
  }
  function _0x152d31(_0x422637, _0x514a97, _0x262ab4, _0x1aa945) {
    if (!(_0x1aa945 > 0)) {
      return 0;
    }
    var _0x5c636d = _0x262ab4;
    var _0x2001c3 = _0x262ab4 + _0x1aa945 - 1;
    for (var _0x202b93 = 0; _0x202b93 < _0x422637.length; ++_0x202b93) {
      var _0x3f9b2f = _0x422637.charCodeAt(_0x202b93);
      if (_0x3f9b2f >= 55296 && _0x3f9b2f <= 57343) {
        var _0x11ba0a = _0x422637.charCodeAt(++_0x202b93);
        _0x3f9b2f = 65536 + ((_0x3f9b2f & 1023) << 10) | _0x11ba0a & 1023;
      }
      if (_0x3f9b2f <= 127) {
        if (_0x262ab4 >= _0x2001c3) {
          break;
        }
        _0x514a97[_0x262ab4++] = _0x3f9b2f;
      } else if (_0x3f9b2f <= 2047) {
        if (_0x262ab4 + 1 >= _0x2001c3) {
          break;
        }
        _0x514a97[_0x262ab4++] = _0x3f9b2f >> 6 | 192;
        _0x514a97[_0x262ab4++] = _0x3f9b2f & 63 | 128;
      } else if (_0x3f9b2f <= 65535) {
        if (_0x262ab4 + 2 >= _0x2001c3) {
          break;
        }
        _0x514a97[_0x262ab4++] = _0x3f9b2f >> 12 | 224;
        _0x514a97[_0x262ab4++] = _0x3f9b2f >> 6 & 63 | 128;
        _0x514a97[_0x262ab4++] = _0x3f9b2f & 63 | 128;
      } else {
        if (_0x262ab4 + 3 >= _0x2001c3) {
          break;
        }
        _0x514a97[_0x262ab4++] = _0x3f9b2f >> 18 | 240;
        _0x514a97[_0x262ab4++] = _0x3f9b2f >> 12 & 63 | 128;
        _0x514a97[_0x262ab4++] = _0x3f9b2f >> 6 & 63 | 128;
        _0x514a97[_0x262ab4++] = _0x3f9b2f & 63 | 128;
      }
    }
    _0x514a97[_0x262ab4] = 0;
    return _0x262ab4 - _0x5c636d;
  }
  function _0x98a294(_0x2ae88c, _0x121c23, _0x53aa6a) {
    return _0x152d31(_0x2ae88c, _0x353336, _0x121c23, _0x53aa6a);
  }
  function _0x4bdf30(_0x3dbe18) {
    var _0x43d047 = 0;
    for (var _0x2b3ea8 = 0; _0x2b3ea8 < _0x3dbe18.length; ++_0x2b3ea8) {
      var _0x8f9bd = _0x3dbe18.charCodeAt(_0x2b3ea8);
      if (_0x8f9bd >= 55296 && _0x8f9bd <= 57343) {
        _0x8f9bd = 65536 + ((_0x8f9bd & 1023) << 10) | _0x3dbe18.charCodeAt(++_0x2b3ea8) & 1023;
      }
      if (_0x8f9bd <= 127) {
        ++_0x43d047;
      } else if (_0x8f9bd <= 2047) {
        _0x43d047 += 2;
      } else if (_0x8f9bd <= 65535) {
        _0x43d047 += 3;
      } else {
        _0x43d047 += 4;
      }
    }
    return _0x43d047;
  }
  function _0x194a76(_0x5048fc) {
    var _0x67bb15 = _0x4bdf30(_0x5048fc) + 1;
    var _0x322df2 = _0x45bc34(_0x67bb15);
    if (_0x322df2) {
      _0x152d31(_0x5048fc, _0xf9c0a9, _0x322df2, _0x67bb15);
    }
    return _0x322df2;
  }
  function _0x236154(_0x438faf) {
    var _0x57d3ad = _0x4bdf30(_0x438faf) + 1;
    var _0x230d3d = _0x105630(_0x57d3ad);
    _0x152d31(_0x438faf, _0xf9c0a9, _0x230d3d, _0x57d3ad);
    return _0x230d3d;
  }
  function _0x5d45cb(_0x3c90be, _0x7628eb) {
    _0xf9c0a9.set(_0x3c90be, _0x7628eb);
  }
  function _0x9830ac(_0x5dfe87, _0x4e1671, _0x4f56d3) {
    for (var _0x6bca04 = 0; _0x6bca04 < _0x5dfe87.length; ++_0x6bca04) {
      _0xf9c0a9[_0x4e1671++ >> 0] = _0x5dfe87.charCodeAt(_0x6bca04);
    }
    if (!_0x4f56d3) {
      _0xf9c0a9[_0x4e1671 >> 0] = 0;
    }
  }
  function _0x71e6ce(_0x2327aa, _0x5b1b27) {
    if (_0x2327aa % _0x5b1b27 > 0) {
      _0x2327aa += _0x5b1b27 - _0x2327aa % _0x5b1b27;
    }
    return _0x2327aa;
  }
  var _0x479424;
  var _0xf9c0a9;
  var _0x353336;
  var _0x2c34d4;
  var _0xe0cbd1;
  var _0x2c669e;
  var _0x2a2a43;
  var _0x36547e;
  var _0x202918;
  function _0x1f8f60(_0x487946) {
    _0x479424 = _0x487946;
    _0x13e282.HEAP8 = _0xf9c0a9 = new Int8Array(_0x487946);
    _0x13e282.HEAP16 = _0x2c34d4 = new Int16Array(_0x487946);
    _0x13e282.HEAP32 = _0x2c669e = new Int32Array(_0x487946);
    _0x13e282.HEAPU8 = _0x353336 = new Uint8Array(_0x487946);
    _0x13e282.HEAPU16 = _0xe0cbd1 = new Uint16Array(_0x487946);
    _0x13e282.HEAPU32 = _0x2a2a43 = new Uint32Array(_0x487946);
    _0x13e282.HEAPF32 = _0x36547e = new Float32Array(_0x487946);
    _0x13e282.HEAPF64 = _0x202918 = new Float64Array(_0x487946);
  }
  var _0x369bcf = _0x13e282.INITIAL_MEMORY || 33554432;
  var _0x4bc5b8;
  var _0x5cde4e = [];
  var _0x47217f = [];
  var _0x41bfce = [];
  var _0x27d02b = [];
  var _0x3e3cf1 = [];
  var _0x42595a = false;
  var _0x8430b7 = false;
  function _0x221449() {
    if (_0x13e282.preRun) {
      if (typeof _0x13e282.preRun == "function") {
        _0x13e282.preRun = [_0x13e282.preRun];
      }
      while (_0x13e282.preRun.length) {
        _0x235ff3(_0x13e282.preRun.shift());
      }
    }
    _0xb49e3a(_0x5cde4e);
  }
  function _0x5e5e57() {
    _0x42595a = true;
    if (!_0x13e282.noFSInit && !_0x1f58b9.init.initialized) {
      _0x1f58b9.init();
    }
    _0x37938c.init();
    _0x4e7fcb.root = _0x1f58b9.mount(_0x4e7fcb, {}, null);
    _0x44abc2.root = _0x1f58b9.mount(_0x44abc2, {}, null);
    _0xb49e3a(_0x47217f);
  }
  function _0x5bc78f() {
    _0x1f58b9.ignorePermissions = false;
    _0xb49e3a(_0x41bfce);
  }
  function _0x30acc9() {
    _0x8430b7 = true;
  }
  function _0x14d7b0() {
    if (_0x13e282.postRun) {
      if (typeof _0x13e282.postRun == "function") {
        _0x13e282.postRun = [_0x13e282.postRun];
      }
      while (_0x13e282.postRun.length) {
        _0x448eb7(_0x13e282.postRun.shift());
      }
    }
    _0xb49e3a(_0x3e3cf1);
  }
  function _0x235ff3(_0x55b05d) {
    _0x5cde4e.unshift(_0x55b05d);
  }
  function _0x161a05(_0x53de32) {
    _0x47217f.unshift(_0x53de32);
  }
  function _0x448eb7(_0x264e01) {
    _0x3e3cf1.unshift(_0x264e01);
  }
  var _0x33ff94 = 0;
  var _0x40b5d1 = null;
  var _0x118381 = null;
  function _0x159492(_0x3172f2) {
    return _0x3172f2;
  }
  function _0x156f3b(_0x440ea0) {
    _0x33ff94++;
    if (_0x13e282.monitorRunDependencies) {
      _0x13e282.monitorRunDependencies(_0x33ff94);
    }
  }
  function _0xb5b33c(_0x48012e) {
    _0x33ff94--;
    if (_0x13e282.monitorRunDependencies) {
      _0x13e282.monitorRunDependencies(_0x33ff94);
    }
    if (_0x33ff94 == 0) {
      if (_0x40b5d1 !== null) {
        clearInterval(_0x40b5d1);
        _0x40b5d1 = null;
      }
      if (_0x118381) {
        var _0x350e45 = _0x118381;
        _0x118381 = null;
        _0x350e45();
      }
    }
  }
  _0x13e282.preloadedImages = {};
  _0x13e282.preloadedAudios = {};
  function _0x2f2f3c(_0x25bd38) {
    if (_0x13e282.onAbort) {
      _0x13e282.onAbort(_0x25bd38);
    }
    _0x25bd38 += "";
    _0x500e9(_0x25bd38);
    _0x3f5914 = true;
    _0xdcff3b = 1;
    _0x25bd38 = "abort(" + _0x25bd38 + "). Build with -s ASSERTIONS=1 for more info.";
    var _0x141d0b = new WebAssembly.RuntimeError(_0x25bd38);
    throw _0x141d0b;
  }
  var _0x9478a4 = "data:application/octet-stream;base64,";
  function _0x1165ee(_0x220d88) {
    return _0x220d88.startsWith(_0x9478a4);
  }
  function _0x52fb0d(_0x3b2dfe) {
    return _0x3b2dfe.startsWith("file://");
  }
  var _0x1307f9 = "build.wasm";
  if (!_0x1165ee(_0x1307f9)) {
    _0x1307f9 = _0x4d2ad3(_0x1307f9);
  }
  function _0x32a437(_0x2ec8ac) {
    try {
      if (_0x2ec8ac == _0x1307f9 && _0xe9e438) {
        return new Uint8Array(_0xe9e438);
      }
      if (_0x377387) {
        return _0x377387(_0x2ec8ac);
      } else {
        throw "both async and sync fetching of the wasm failed";
      }
    } catch (_0x144e38) {
      _0x2f2f3c(_0x144e38);
    }
  }
  function _0x52ae8c() {
    if (!_0xe9e438 && (_0x1695cc || _0x4eced9)) {
      if (typeof fetch === "function" && !_0x52fb0d(_0x1307f9)) {
        return fetch(_0x1307f9, {
          credentials: "same-origin"
        }).then(function (_0x2548d3) {
          if (!_0x2548d3.ok) {
            throw "failed to load wasm binary file at '" + _0x1307f9 + "'";
          }
          return _0x2548d3.arrayBuffer();
        }).catch(function () {
          return _0x32a437(_0x1307f9);
        });
      } else if (_0x380c3a) {
        return new Promise(function (_0x36deae, _0x42f0d9) {
          _0x380c3a(_0x1307f9, function (_0x24ab59) {
            _0x36deae(new Uint8Array(_0x24ab59));
          }, _0x42f0d9);
        });
      }
    }
    return Promise.resolve().then(function () {
      return _0x32a437(_0x1307f9);
    });
  }
  function _0x3478d7() {
    var _0xcddd81 = {
      a: _0xbc1906
    };
    function _0x39d01a(_0x1c5663, _0x494e4b) {
      var _0x16fb7c = _0x1c5663.exports;
      _0x13e282.asm = _0x16fb7c;
      _0xbe5cea = _0x13e282.asm.ik;
      _0x1f8f60(_0xbe5cea.buffer);
      _0x4bc5b8 = _0x13e282.asm.Ik;
      _0x161a05(_0x13e282.asm.jk);
      _0xb5b33c("wasm-instantiate");
    }
    _0x156f3b("wasm-instantiate");
    function _0x4b6eb5(_0x160359) {
      _0x39d01a(_0x160359.instance);
    }
    function _0x3ce141(_0x7677c4) {
      return _0x52ae8c().then(function (_0x47bea6) {
        var _0x4cba37 = WebAssembly.instantiate(_0x47bea6, _0xcddd81);
        return _0x4cba37;
      }).then(_0x7677c4, function (_0x2a737f) {
        _0x500e9("failed to asynchronously prepare wasm: " + _0x2a737f);
        _0x2f2f3c(_0x2a737f);
      });
    }
    function _0x2a29f3() {
      if (!_0xe9e438 && typeof WebAssembly.instantiateStreaming === "function" && !_0x1165ee(_0x1307f9) && !_0x52fb0d(_0x1307f9) && typeof fetch === "function") {
        return fetch(_0x1307f9, {
          credentials: "same-origin"
        }).then(function (_0xfdf7d5) {
          var _0x2336dc = WebAssembly.instantiateStreaming(_0xfdf7d5, _0xcddd81);
          return _0x2336dc.then(_0x4b6eb5, function (_0x4d0bb5) {
            _0x500e9("wasm streaming compile failed: " + _0x4d0bb5);
            _0x500e9("falling back to ArrayBuffer instantiation");
            return _0x3ce141(_0x4b6eb5);
          });
        });
      } else {
        return _0x3ce141(_0x4b6eb5);
      }
    }
    if (_0x13e282.instantiateWasm) {
      try {
        var _0x42966e = _0x13e282.instantiateWasm(_0xcddd81, _0x39d01a);
        return _0x42966e;
      } catch (_0x5688c1) {
        _0x500e9("Module.instantiateWasm callback failed with error: " + _0x5688c1);
        return false;
      }
    }
    _0x2a29f3();
    return {};
  }
  var _0x725831;
  var _0x3ca3da;
  var _0x501622 = {
    4669528: function () {
      return _0x13e282.webglContextAttributes.premultipliedAlpha;
    },
    4669589: function () {
      return _0x13e282.webglContextAttributes.preserveDrawingBuffer;
    },
    4669653: function () {
      return _0x13e282.webglContextAttributes.powerPreference;
    }
  };
  function _0xb49e3a(_0x1179d6) {
    while (_0x1179d6.length > 0) {
      var _0x5f09ba = _0x1179d6.shift();
      if (typeof _0x5f09ba == "function") {
        _0x5f09ba(_0x13e282);
        continue;
      }
      var _0x1db638 = _0x5f09ba.func;
      if (typeof _0x1db638 === "number") {
        if (_0x5f09ba.arg === undefined) {
          (function () {
            _0x5ec935.call(null, _0x1db638);
          })();
        } else {
          (function (_0xc7b947) {
            _0x3455a4.apply(null, [_0x1db638, _0xc7b947]);
          })(_0x5f09ba.arg);
        }
      } else {
        _0x1db638(_0x5f09ba.arg === undefined ? null : _0x5f09ba.arg);
      }
    }
  }
  function _0x5e240b(_0x40b5e6) {
    return _0x40b5e6;
  }
  function _0x37034c(_0x577773) {
    var _0x18b10d = /\b_Z[\w\d_]+/g;
    return _0x577773.replace(_0x18b10d, function (_0x4ae819) {
      var _0x290bd0 = _0x5e240b(_0x4ae819);
      if (_0x4ae819 === _0x290bd0) {
        return _0x4ae819;
      } else {
        return _0x290bd0 + " [" + _0x4ae819 + "]";
      }
    });
  }
  function _0x34056b(_0x599039, _0x4a63e9, _0x2c8eaa) {
    var _0x595e3e = _0x13e282["dynCall_" + _0x599039];
    if (_0x2c8eaa && _0x2c8eaa.length) {
      return _0x595e3e.apply(null, [_0x4a63e9].concat(_0x2c8eaa));
    } else {
      return _0x595e3e.call(null, _0x4a63e9);
    }
  }
  function _0x4c0cd9(_0x1b205e, _0x130814, _0x197d12) {
    return _0x34056b(_0x1b205e, _0x130814, _0x197d12);
  }
  function _0x2114ef() {
    var _0xba0f60 = new Error();
    if (!_0xba0f60.stack) {
      try {
        throw new Error();
      } catch (_0x3277f6) {
        _0xba0f60 = _0x3277f6;
      }
      if (!_0xba0f60.stack) {
        return "(no stack trace available)";
      }
    }
    return _0xba0f60.stack.toString();
  }
  var _0x2a78a1 = 0;
  function _0x29a367() {
    return _0xf1a847 || _0x2a78a1 > 0;
  }
  function _0x1d8fda() {
    var _0x1e59a6 = _0x2114ef();
    if (_0x13e282.extraStackTrace) {
      _0x1e59a6 += "\n" + _0x13e282.extraStackTrace();
    }
    return _0x37034c(_0x1e59a6);
  }
  function _0x373948(_0x42e0b9, _0x4c4912, _0x4c25e9, _0x3dba8c, _0x1b362f) {
    var _0x30124c = _0x432dbf(_0x42e0b9);
    var _0x2347c7 = _0x432dbf(_0x4c4912);
    var _0x409585 = _0x432dbf(_0x4c25e9);
    var _0x5c184f = _0x432dbf(_0x3dba8c);
    var _0x149846 = _0x432dbf(_0x1b362f);
    try {
      firebase.firestore().collection(_0x30124c).add(JSON.parse(_0x2347c7)).then(function (_0x555b09) {
        window.unityInstance.SendMessage(_0x409585, _0x5c184f, "Success: document added in collection " + _0x30124c);
      }).catch(function (_0x25aaa3) {
        window.unityInstance.SendMessage(_0x409585, _0x149846, JSON.stringify(_0x25aaa3, Object.getOwnPropertyNames(_0x25aaa3)));
      });
    } catch (_0x392360) {
      window.unityInstance.SendMessage(_0x409585, _0x149846, JSON.stringify(_0x392360, Object.getOwnPropertyNames(_0x392360)));
    }
  }
  function _0x4a460b(_0x3ac15d, _0x47fe71, _0x30500c, _0x45c7f3, _0x1a54ce, _0xe17a1b, _0x554230) {
    var _0x446876 = _0x432dbf(_0x3ac15d);
    var _0xf177e4 = _0x432dbf(_0x47fe71);
    var _0x3d8508 = _0x432dbf(_0x30500c);
    var _0x5671e0 = _0x432dbf(_0x45c7f3);
    var _0x454bb7 = _0x432dbf(_0x1a54ce);
    var _0x4edf3d = _0x432dbf(_0xe17a1b);
    var _0x22cc4a = _0x432dbf(_0x554230);
    try {
      var _0x45c7f3 = {};
      _0x45c7f3[_0x3d8508] = firebase.firestore.FieldValue.arrayUnion(JSON.parse(_0x5671e0));
      firebase.firestore().collection(_0x446876).doc(_0xf177e4).update(_0x45c7f3).then(function () {
        window.unityInstance.SendMessage(_0x454bb7, _0x4edf3d, "Success: element " + _0x5671e0 + " was added in " + _0x3d8508);
      }).catch(function (_0x3971bc) {
        window.unityInstance.SendMessage(_0x454bb7, _0x22cc4a, JSON.stringify(_0x3971bc, Object.getOwnPropertyNames(_0x3971bc)));
      });
    } catch (_0x2ac5d1) {
      window.unityInstance.SendMessage(_0x454bb7, _0x22cc4a, JSON.stringify(_0x2ac5d1, Object.getOwnPropertyNames(_0x2ac5d1)));
    }
  }
  function _0x3cdd8e(_0x57be16) {
    try {
      window.CrazyGames.SDK.user.addScore(_0x57be16);
    } catch (_0xac49f6) {
      window.UnitySDK.logError("Error while calling addScore:", _0xac49f6);
    }
  }
  function _0x47c3b6(_0x2f57b8, _0x1890c2) {
    try {
      window.CrazyGames.SDK.analytics.trackOrder(window.unityStringify(_0x2f57b8), JSON.parse(window.unityStringify(_0x1890c2)));
    } catch (_0x2379f0) {
      window.UnitySDK.logError("Error while calling trackOrder:", _0x2379f0);
    }
  }
  function _0x1ac9ea(_0x4eb20a) {
    if (!navigator || !navigator.clipboard || !navigator.clipboard.writeText) {
      return;
    }
    var _0x13bc27 = _0x432dbf(_0x4eb20a);
    navigator.clipboard.writeText(_0x13bc27).then(() => {
      console.log("Text copied successfully!");
    }).catch(_0xdb0eac => {
      console.error("Failed to copy text", _0xdb0eac);
    });
  }
  function _0x46b716(_0x3af021) {
    const _0x4c664b = document.createElement("textarea");
    _0x4c664b.value = window.unityStringify(_0x3af021);
    document.body.appendChild(_0x4c664b);
    _0x4c664b.select();
    _0x4c664b.setSelectionRange(0, 99999);
    document.execCommand("copy");
    document.body.removeChild(_0x4c664b);
  }
  function _0x3ca95a(_0x499595, _0x249f62, _0x1e6d29, _0x1e53d0, _0xccaedf) {
    var _0x3382ec = _0x432dbf(_0x499595);
    var _0x416fd8 = _0x432dbf(_0x249f62);
    var _0x481334 = _0x432dbf(_0x1e6d29);
    var _0x6e9612 = _0x432dbf(_0x1e53d0);
    var _0xb24877 = _0x432dbf(_0xccaedf);
    try {
      firebase.auth().createUserWithEmailAndPassword(_0x3382ec, _0x416fd8).then(function (_0x53f0a4) {
        window.unityInstance.SendMessage(_0x481334, _0x6e9612, "Success: signed up for " + _0x3382ec);
      }).catch(function (_0x437194) {
        window.unityInstance.SendMessage(_0x481334, _0xb24877, JSON.stringify(_0x437194, Object.getOwnPropertyNames(_0x437194)));
      });
    } catch (_0x445af2) {
      window.unityInstance.SendMessage(_0x481334, _0xb24877, JSON.stringify(_0x445af2, Object.getOwnPropertyNames(_0x445af2)));
    }
  }
  function _0x3f46b2() {
    try {
      window.CrazyGames.SDK.data.clear();
    } catch (_0x95e53a) {
      window.UnitySDK.logError("Error while calling clear:", _0x95e53a);
    }
  }
  function _0x2e16b6(_0x8ccfa2) {
    var _0x8a50a6 = null;
    try {
      _0x8a50a6 = window.CrazyGames.SDK.data.getItem(window.unityStringify(_0x8ccfa2));
    } catch (_0x1fde4a) {
      window.UnitySDK.logError("Error while calling getItem:", _0x1fde4a);
    }
    var _0x315783 = _0x4bdf30(_0x8a50a6 + "") + 1;
    var _0x1c484f = _0x45bc34(_0x315783);
    _0x98a294(_0x8a50a6, _0x1c484f, _0x315783);
    return _0x1c484f;
  }
  function _0x64715e(_0x272162) {
    var _0x4898ba = null;
    try {
      _0x4898ba = window.CrazyGames.SDK.data.getItem(window.unityStringify(_0x272162));
    } catch (_0x126d67) {
      window.UnitySDK.logError("Error while calling getItem:", _0x126d67);
    }
    return _0x4898ba !== null;
  }
  function _0x28ec17(_0xd963a) {
    try {
      window.CrazyGames.SDK.data.removeItem(window.unityStringify(_0xd963a));
    } catch (_0x426f83) {
      window.UnitySDK.logError("Error while calling removeItem:", _0x426f83);
    }
  }
  function _0x3c55e2(_0x16dc3f, _0x5a7c57) {
    try {
      window.CrazyGames.SDK.data.setItem(window.unityStringify(_0x16dc3f), window.unityStringify(_0x5a7c57));
    } catch (_0x31a031) {
      window.UnitySDK.logError("Error while calling setItem:", _0x31a031);
    }
  }
  function _0x483a19(_0x3643d5, _0x128150, _0x2f7f56, _0x6485da, _0x3c8d26) {
    var _0x41ac45 = _0x432dbf(_0x3643d5);
    var _0x407b77 = _0x432dbf(_0x128150);
    var _0x6c7f52 = _0x432dbf(_0x2f7f56);
    var _0x39603b = _0x432dbf(_0x6485da);
    var _0x5337a8 = _0x432dbf(_0x3c8d26);
    try {
      firebase.firestore().collection(_0x41ac45).doc(_0x407b77).delete().then(function () {
        window.unityInstance.SendMessage(_0x6c7f52, _0x39603b, "Success: document " + _0x407b77 + " was deleted");
      }).catch(function (_0x62f76) {
        window.unityInstance.SendMessage(_0x6c7f52, _0x5337a8, JSON.stringify(_0x62f76, Object.getOwnPropertyNames(_0x62f76)));
      });
    } catch (_0x3254dc) {
      window.unityInstance.SendMessage(_0x6c7f52, _0x5337a8, JSON.stringify(_0x3254dc, Object.getOwnPropertyNames(_0x3254dc)));
    }
  }
  function _0xa214a(_0x5457b4, _0x75397e, _0x3edad0, _0x1ee97d, _0x5a7bd0, _0x57e8ea) {
    var _0x3eddc2 = _0x432dbf(_0x5457b4);
    var _0x68765e = _0x432dbf(_0x75397e);
    var _0x44dc4a = _0x432dbf(_0x3edad0);
    var _0xe6c648 = _0x432dbf(_0x1ee97d);
    var _0x55c2e9 = _0x432dbf(_0x5a7bd0);
    var _0x40e593 = _0x432dbf(_0x57e8ea);
    try {
      var _0x4985d6 = {};
      _0x4985d6[_0x44dc4a] = firebase.firestore.FieldValue.delete();
      firebase.firestore().collection(_0x3eddc2).doc(_0x68765e).update(_0x4985d6).then(function () {
        window.unityInstance.SendMessage(_0xe6c648, _0x55c2e9, "Success: field " + _0x44dc4a + " was deleted");
      }).catch(function (_0x25dbde) {
        window.unityInstance.SendMessage(_0xe6c648, _0x40e593, JSON.stringify(_0x25dbde, Object.getOwnPropertyNames(_0x25dbde)));
      });
    } catch (_0x20a707) {
      window.unityInstance.SendMessage(_0xe6c648, _0x40e593, JSON.stringify(_0x20a707, Object.getOwnPropertyNames(_0x20a707)));
    }
  }
  function _0x457e47(_0x5761c4, _0x24efe6, _0x4c09e2, _0x4233ef) {
    var _0x1fbfdf = _0x432dbf(_0x5761c4);
    var _0x4afddd = _0x432dbf(_0x24efe6);
    var _0x140741 = _0x432dbf(_0x4c09e2);
    var _0x10d0dc = _0x432dbf(_0x4233ef);
    try {
      firebase.database().ref(_0x1fbfdf).remove().then(function (_0x24e69d) {
        window.unityInstance.SendMessage(_0x4afddd, _0x140741, "Success: " + _0x1fbfdf + " was deleted");
      });
    } catch (_0x16ccce) {
      window.unityInstance.SendMessage(_0x4afddd, _0x10d0dc, JSON.stringify(_0x16ccce, Object.getOwnPropertyNames(_0x16ccce)));
    }
  }
  function _0x5dbf74(_0x5b579e, _0x40ccf8, _0x3d9316, _0x24a4de) {
    var _0x1febfe = _0x432dbf(_0x5b579e);
    var _0x3fb6a1 = _0x432dbf(_0x40ccf8);
    var _0x8c2732 = _0x432dbf(_0x3d9316);
    var _0x16f482 = _0x432dbf(_0x24a4de);
    try {
      firebase.storage().ref(_0x1febfe).getDownloadURL().then(function (_0x3e97bf) {
        var _0x2481f5 = new XMLHttpRequest();
        _0x2481f5.responseType = "arraybuffer";
        _0x2481f5.onload = function (_0x8090e0) {
          var _0x463be5 = _0x2481f5.response;
          window.unityInstance.SendMessage(_0x3fb6a1, _0x8c2732, _0x526345(_0x463be5));
        };
        _0x2481f5.open("GET", _0x3e97bf);
        _0x2481f5.send();
      }).catch(function (_0x2658e8) {
        window.unityInstance.SendMessage(_0x3fb6a1, _0x16f482, JSON.stringify(_0x2658e8, Object.getOwnPropertyNames(_0x2658e8)));
      });
    } catch (_0x13a220) {
      window.unityInstance.SendMessage(_0x3fb6a1, _0x16f482, JSON.stringify(_0x13a220, Object.getOwnPropertyNames(_0x13a220)));
    }
    function _0x526345(_0x213aa9) {
      var _0x1f1262 = "";
      var _0x359bd8 = new Uint8Array(_0x213aa9);
      var _0xe61298 = _0x359bd8.byteLength;
      for (var _0x544cb0 = 0; _0x544cb0 < _0xe61298; _0x544cb0++) {
        _0x1f1262 += String.fromCharCode(_0x359bd8[_0x544cb0]);
      }
      return window.btoa(_0x1f1262);
    }
  }
  function _0x3f4f26() {
    try {
      window[preroll.config.loaderObjectName].log("WGSDK: Getting WeeGoo InGame Ad");
      window[preroll.config.loaderObjectName].refetchAd();
    } catch (_0x63d75b) {
      console.log("No WeeGooAFG implementation found!");
    }
  }
  function _0xf33f44(_0xa7fde5) {
    var _0x3ff173 = {
      adStarted: function () {
        _0x2c775c("GMSDKAdvertisement", "JSLibCallback_AdStarted");
      },
      adFinished: function () {
        _0x2c775c("GMSDKAdvertisement", "JSLibCallback_AdFinished");
      },
      adError: function (_0x2e8ba2) {
        _0x2c775c("GMSDKAdvertisement", "JSLibCallback_AdError", JSON.stringify(_0x2e8ba2));
      }
    };
    var _0x5516cc = window.GMSOFT_GMADS_INFO.reward;
    var _0x250fc4 = _0x5516cc[Math.floor(Math.random() * _0x5516cc.length)];
    try {
      var _0x51b505 = document.createElement("div");
      _0x51b505.id = "gm-ad-overlay";
      _0x51b505.style.cssText = "\n          position: fixed;\n          top: 0;\n          left: 0;\n          width: 100%;\n          height: 100%;\n          background: rgba(0, 0, 0, 0.9);\n          z-index: 9999;\n          display: flex;\n          justify-content: center;\n          align-items: center;\n          flex-direction: column;\n        ";
      var _0x24c458 = document.createElement("div");
      _0x24c458.style.cssText = "\n          position: relative;\n          max-width: 90%;\n          max-height: 80%;\n          background: #000;\n          border-radius: 8px;\n          overflow: hidden;\n        ";
      var _0x35a30d = document.createElement("video");
      _0x35a30d.src = _0x250fc4.image;
      _0x35a30d.style.cssText = "\n          width: 100%;\n          height: 100%;\n          display: block;\n        ";
      _0x35a30d.autoplay = true;
      _0x35a30d.muted = true;
      _0x35a30d.preload = "auto";
      var _0x338aa7 = document.createElement("button");
      _0x338aa7.innerHTML = "Skip (5)";
      _0x338aa7.disabled = true;
      _0x338aa7.style.cssText = "\n          position: absolute;\n          top: 10px;\n          right: 10px;\n          background: rgba(0, 0, 0, 0.8);\n          color: white;\n          border: 1px solid #666;\n          border-radius: 6px;\n          padding: 10px 16px;\n          cursor: pointer;\n          font-size: 16px;\n          font-weight: bold;\n          z-index: 10001;\n          box-shadow: 0 2px 8px rgba(0,0,0,0.3);\n        ";
      _0x338aa7.disabled = true;
      _0x338aa7.style.opacity = "0.5";
      var _0x5dcf94 = document.createElement("div");
      _0x5dcf94.style.cssText = "\n          position: absolute;\n          bottom: 0;\n          left: 0;\n          width: 100%;\n          height: 6px;\n          background: rgba(255, 255, 255, 0.3);\n          z-index: 10001;\n        ";
      var _0x1fd291 = document.createElement("div");
      _0x1fd291.style.cssText = "\n          height: 100%;\n          width: 0%;\n          background: linear-gradient(90deg, #ff6b6b, #4ecdc4);\n          transition: width 0.1s ease;\n        ";
      var _0x399d46 = 5;
      var _0x422431 = setInterval(function () {
        _0x399d46--;
        if (_0x399d46 > 0) {
          _0x338aa7.innerHTML = "Skip (" + _0x399d46 + ")";
        } else {
          _0x338aa7.innerHTML = "Skip";
          _0x338aa7.disabled = false;
          _0x338aa7.style.opacity = "1";
          _0x338aa7.style.cursor = "pointer";
          clearInterval(_0x422431);
        }
      }, 1000);
      function _0x28a7ab() {
        if (_0x51b505 && _0x51b505.parentNode) {
          _0x51b505.parentNode.removeChild(_0x51b505);
        }
        clearInterval(_0x422431);
        _0x3ff173.adFinished();
      }
      function _0x2098b5() {
        window.open(_0x250fc4.url, "_blank");
      }
      function _0x17507c() {
        if (_0x35a30d.duration && _0x35a30d.currentTime) {
          var _0x40d377 = _0x35a30d.currentTime / _0x35a30d.duration * 100;
          _0x1fd291.style.width = _0x40d377 + "%";
        }
      }
      _0x35a30d.addEventListener("loadstart", function () {
        _0x3ff173.adStarted();
      });
      _0x35a30d.addEventListener("timeupdate", function () {
        _0x17507c();
      });
      _0x35a30d.addEventListener("ended", function () {
        _0x28a7ab();
      });
      _0x35a30d.addEventListener("error", function (_0x16634a) {
        var _0x343b96 = {
          message: "Video load error",
          code: _0x16634a.target.error ? _0x16634a.target.error.code : "unknown"
        };
        _0x3ff173.adError(_0x343b96);
        _0x28a7ab();
      });
      _0x35a30d.addEventListener("click", function () {
        _0x2098b5();
      });
      _0x338aa7.addEventListener("click", function () {
        if (!_0x338aa7.disabled) {
          _0x28a7ab();
        }
      });
      _0x35a30d.addEventListener("contextmenu", function (_0x39865f) {
        _0x39865f.preventDefault();
      });
      _0x5dcf94.appendChild(_0x1fd291);
      _0x24c458.appendChild(_0x35a30d);
      _0x24c458.appendChild(_0x338aa7);
      _0x24c458.appendChild(_0x5dcf94);
      _0x51b505.appendChild(_0x24c458);
      document.body.appendChild(_0x51b505);
      _0x35a30d.play().catch(function (_0x5831d2) {
        console.error("Video play error:", _0x5831d2);
        _0x3ff173.adError({
          message: "Cannot play video",
          details: _0x5831d2.message
        });
        _0x28a7ab();
      });
    } catch (_0x3c1a3a) {
      console.error("Ad overlay creation error:", _0x3c1a3a);
      _0x3ff173.adError({
        message: "Failed to create ad overlay",
        details: _0x3c1a3a.message
      });
    }
  }
  function _0x4003e9(_0x3f851c, _0x403669) {
    gmEvent(_0x432dbf(_0x3f851c), _0x432dbf(_0x403669));
  }
  function _0x5906cb() {
    const _0x23ab95 = "gmsdksigndomain";
    try {
      if (localStorage.hasOwnProperty(_0x23ab95)) {
        let _0x46c086 = localStorage.getItem(_0x23ab95);
        if (_0x46c086 && _0x46c086.length > 10) {
          window.GMSOFT_SIGNED = _0x46c086;
          console.log("Local storage GM_SDK_GetVeryfiedSignature: ", window.GMSOFT_SIGNED);
          _0x2c775c("GmSoft", "OnGetVeryfiedSignature", window.GMSOFT_SIGNED);
          return;
        }
      }
    } catch (_0x5ac8da) {
      console.error("Error getting GM_SDK_GetVeryfiedSignature from local storage: ", _0x5ac8da);
    }
    try {
      let _0x7e2dcc = "hn=" + "https://games.1games.io";
      let _0xef2803 = btoa(_0x7e2dcc);
      let _0xe3ef49 = "https://api.cdnwave.com/sdkdom/keysigned";
      if (window.GMSOFT_OPTIONS && window.GMSOFT_OPTIONS.signedurl) {
        _0xe3ef49 = window.GMSOFT_OPTIONS.signedurl;
      }
      let _0x56bf98 = _0xe3ef49 + "?params=" + _0xef2803;
      var _0x139dbb = new XMLHttpRequest();
      let _0x3fedef = "";
      _0x139dbb.open("GET", _0x56bf98, false);
      _0x139dbb.send(_0x3fedef);
      let _0x3aa571 = _0x139dbb.responseText;
      window.GMSOFT_SIGNED = _0x3aa571;
      localStorage.setItem(_0x23ab95, _0x3aa571);
      console.log("send request GM_SDK_GetVeryfiedSignature: ", window.GMSOFT_SIGNED);
      _0x2c775c("GmSoft", "OnGetVeryfiedSignature", window.GMSOFT_SIGNED);
    } catch (_0xae5fbc) {
      console.error("Error fetching GM_SDK_GetVeryfiedSignature: ", _0xae5fbc);
    }
  }
  function _0x22be49() {
    let _0x16b14f = "https://games.1games.io";
    _0x2c775c("GmSoft", "SetUnityHostName", _0x16b14f);
    _0x2c775c("GmSoft", "SetSDKType", window.GMSOFT_SDKTYPE);
  }
  function _0x18585e() {
    console.log("GM_SDK_StartGame");
    try {
      gmStartGame(function () {
        _0x2c775c("GmSoft", "SetGameInfoParam", JSON.stringify(window.GMSOFT_GAME_INFO));
      });
    } catch (_0x414bc4) {
      console.error("Error JS 12", _0x414bc4);
    }
    try {
      gmStartAds(function () {
        _0x2c775c("GmSoft", "SetAdParam", JSON.stringify(window.GMSOFT_ADS_INFO));
      });
    } catch (_0x29741e) {
      console.error("Error JS 20", _0x29741e);
    }
    try {
      document.addEventListener("gmsoftbanevent", _0x1c45d7 => {
        _0x2c775c("GmSoft", "LockGame", _0x1c45d7.detail);
      });
    } catch (_0x16ed11) {
      console.error("Error JS 28", _0x16ed11);
    }
  }
  function _0x1e4fcc(_0x34ef18) {
    try {
      window[preroll.config.loaderObjectName].log("WGSDK: Sending game event");
      window[preroll.config.loaderObjectName].GameEvent(_0x34ef18);
    } catch (_0x143dd9) {
      console.log("No WeeGooAFG implementation found!");
    }
  }
  function _0x553be8() {
    try {
      window.CrazyGames.SDK.game.gameplayStart();
    } catch (_0x4533b3) {
      window.UnitySDK.logError("Error while calling gameplayStart:", _0x4533b3);
    }
  }
  function _0xc9bc5b() {
    try {
      window.CrazyGames.SDK.game.gameplayStop();
    } catch (_0x4af651) {
      window.UnitySDK.logError("Error while calling gameplayStop:", _0x4af651);
    }
  }
  function _0x504cdf() {
    var _0x5df04b = firebaseConfig.projectId;
    var _0x1c756b = _0x4bdf30(_0x5df04b) + 1;
    var _0x245a04 = _0x45bc34(_0x1c756b);
    _0x98a294(_0x5df04b, _0x245a04, _0x1c756b);
    return _0x245a04;
  }
  function _0x1005ee(_0x175cdc, _0x16676a, _0x387584, _0x29def0, _0x14b516) {
    var _0x4084c = _0x432dbf(_0x175cdc);
    var _0x122a66 = _0x432dbf(_0x16676a);
    var _0x400e02 = _0x432dbf(_0x387584);
    var _0x20845f = _0x432dbf(_0x29def0);
    var _0x6187c5 = _0x432dbf(_0x14b516);
    try {
      firebase.firestore().collection(_0x4084c).doc(_0x122a66).get().then(function (_0x1ed94a) {
        if (_0x1ed94a.exists) {
          window.unityInstance.SendMessage(_0x400e02, _0x20845f, JSON.stringify(_0x1ed94a.data()));
        } else {
          window.unityInstance.SendMessage(_0x400e02, _0x20845f, "null");
        }
      }).catch(function (_0x1e8264) {
        window.unityInstance.SendMessage(_0x400e02, _0x6187c5, JSON.stringify(_0x1e8264, Object.getOwnPropertyNames(_0x1e8264)));
      });
    } catch (_0x3a018d) {
      window.unityInstance.SendMessage(_0x400e02, _0x6187c5, JSON.stringify(_0x3a018d, Object.getOwnPropertyNames(_0x3a018d)));
    }
  }
  function _0x248fa8(_0x5b8ff1, _0x211aa2, _0x581c87, _0x5b5569) {
    var _0x3d080c = _0x432dbf(_0x5b8ff1);
    var _0xa29b88 = _0x432dbf(_0x211aa2);
    var _0x4e81ec = _0x432dbf(_0x581c87);
    var _0x29d6e4 = _0x432dbf(_0x5b5569);
    try {
      firebase.firestore().collection(_0x3d080c).get().then(function (_0x3aad2d) {
        var _0x5e049a = {};
        _0x3aad2d.forEach(function (_0x178dda) {
          _0x5e049a[_0x178dda.id] = _0x178dda.data();
        });
        window.unityInstance.SendMessage(_0xa29b88, _0x4e81ec, JSON.stringify(_0x5e049a));
      }).catch(function (_0x11b4d6) {
        window.unityInstance.SendMessage(_0xa29b88, _0x29d6e4, JSON.stringify(_0x11b4d6, Object.getOwnPropertyNames(_0x11b4d6)));
      });
    } catch (_0x32434a) {
      window.unityInstance.SendMessage(_0xa29b88, _0x29d6e4, JSON.stringify(_0x32434a, Object.getOwnPropertyNames(_0x32434a)));
    }
  }
  function _0x402bde() {
    var _0x5b5882 = window.CrazyGames.SDK.environment;
    var _0x3bf359 = _0x4bdf30(_0x5b5882) + 1;
    var _0x2f6647 = _0x45bc34(_0x3bf359);
    _0x98a294(_0x5b5882, _0x2f6647, _0x3bf359);
    return _0x2f6647;
  }
  function _0x1265f5() {
    var _0x3bd41e = JSON.stringify(window.CrazyGames.SDK.game.settings);
    var _0x15ca58 = _0x4bdf30(_0x3bd41e) + 1;
    var _0x3c615f = _0x45bc34(_0x15ca58);
    _0x98a294(_0x3bd41e, _0x3c615f, _0x15ca58);
    return _0x3c615f;
  }
  function _0x224d2c(_0x4765bc) {
    var _0x38e86f = new URLSearchParams(window.location.search);
    var _0x4e4f35 = _0x38e86f.get(window.unityStringify(_0x4765bc));
    if (_0x4e4f35 === null) {
      _0x4e4f35 = "";
    }
    var _0x3fe05d = _0x4bdf30(_0x4e4f35) + 1;
    var _0x49701a = _0x45bc34(_0x3fe05d);
    _0x98a294(_0x4e4f35, _0x49701a, _0x3fe05d);
    return _0x49701a;
  }
  function _0x21c0d4() {
    return window.CrazyGames.SDK.isQaTool;
  }
  function _0x18af96(_0x44fed8, _0x1405bb, _0x21547e, _0x1da7a9) {
    var _0x34a54e = _0x432dbf(_0x44fed8);
    var _0x569d3f = _0x432dbf(_0x1405bb);
    var _0x54500e = _0x432dbf(_0x21547e);
    var _0x5ae997 = _0x432dbf(_0x1da7a9);
    try {
      firebase.database().ref(_0x34a54e).once("value").then(function (_0x117f94) {
        window.unityInstance.SendMessage(_0x569d3f, _0x54500e, JSON.stringify(_0x117f94.val()));
      });
    } catch (_0x2099d6) {
      window.unityInstance.SendMessage(_0x569d3f, _0x5ae997, JSON.stringify(_0x2099d6, Object.getOwnPropertyNames(_0x2099d6)));
    }
  }
  function _0x31f1db() {
    var _0x576b7d = JSON.stringify(window.CrazyGames.SDK.user.systemInfo);
    var _0x42a578 = _0x4bdf30(_0x576b7d) + 1;
    var _0x269565 = _0x45bc34(_0x42a578);
    _0x98a294(_0x576b7d, _0x269565, _0x42a578);
    return _0x269565;
  }
  function _0x125f8d() {
    window.CrazyGames.SDK.user.getUser().then(function (_0x531389) {
      _0x2c775c("CrazySDKSingleton", "JSLibCallback_GetUser", JSON.stringify({
        userJson: JSON.stringify(_0x531389)
      }));
    }).catch(function (_0x21b6a1) {
      _0x2c775c("CrazySDKSingleton", "JSLibCallback_GetUser", JSON.stringify({
        errorJson: JSON.stringify(_0x21b6a1)
      }));
    });
  }
  function _0x56ea93() {
    window.CrazyGames.SDK.user.getUserToken().then(function (_0x3ca292) {
      _0x2c775c("CrazySDKSingleton", "JSLibCallback_GetUserToken", JSON.stringify({
        token: _0x3ca292
      }));
    }).catch(function (_0x30ebac) {
      _0x2c775c("CrazySDKSingleton", "JSLibCallback_GetUserToken", JSON.stringify({
        errorJson: JSON.stringify(_0x30ebac)
      }));
    });
  }
  function _0x1dc292() {
    window.CrazyGames.SDK.user.getXsollaUserToken().then(function (_0x309e01) {
      _0x2c775c("CrazySDKSingleton", "JSLibCallback_GetXsollaUserToken", JSON.stringify({
        token: _0x309e01
      }));
    }).catch(function (_0x27a7dd) {
      _0x2c775c("CrazySDKSingleton", "JSLibCallback_GetXsollaUserToken", JSON.stringify({
        errorJson: JSON.stringify(_0x27a7dd)
      }));
    });
  }
  function _0x4c39a1() {}
  function _0x2d4ff6() {
    console.log("afg.ready: " + afg.ready);
    if (afg.ready) {
      _0x2c775c("H5Adverisement", "PreloadRewardedVideoCallback", 1);
      afg.adBreak({
        type: "reward",
        name: "reward ads",
        beforeReward: function (_0x5235e8) {
          this._showRewardAdFn = _0x5235e8;
          console.log("[H5 Ads] before reward");
        }.bind(this),
        adViewed: function () {
          this._showRewardAdFn = null;
          _0x2c775c("H5Adverisement", "RewardedVideoSuccessCallback");
          console.log("[H5 Ads] ad viewed");
        }.bind(this),
        adDismissed: function () {
          this._showRewardAdFn = null;
          _0x2c775c("H5Adverisement", "RewardedVideoFailureCallback");
          console.log("[H5 Ads] ad failure");
        }.bind(this),
        adBreakDone: function (_0x265982) {
          console.log("[H5 Ads] Reward break done");
          _0x2c775c("H5Adverisement", "ResumeGameCallback");
        }.bind(this)
      });
    } else {
      console.log("[H5 Ads] no reward ads");
      _0x2c775c("H5Adverisement", "PreloadRewardedVideoCallback", 0);
    }
  }
  function _0x40ee9a() {
    if (afg.ready) {
      afg.adBreak({
        type: "next",
        name: "next",
        beforeAd: function () {
          afg.onBeforeAd();
          console.log("[H5 Ads] Before ad");
          _0x2c775c("H5Adverisement", "PauseGameCallback");
        }.bind(this),
        adBreakDone: function () {
          console.log("[H5 Ads] Ad break done");
          _0x2c775c("H5Adverisement", "ResumeGameCallback");
        }.bind(this)
      });
    } else {
      console.log("no " + adType + " ads");
      _0x2c775c("H5Adverisement", "ResumeGameCallback");
    }
  }
  function _0x5df7f5() {
    if (this._showRewardAdFn) {
      _0x2c775c("H5Adverisement", "PauseGameCallback");
      this._showRewardAdFn();
    } else {
      _0x2c775c("H5Adverisement", "ResumeGameCallback");
    }
  }
  function _0x14c204() {
    try {
      window.CrazyGames.SDK.game.happytime();
    } catch (_0x3df6da) {
      window.UnitySDK.logError("Error while calling happytime:", _0x3df6da);
    }
  }
  function _0x121e18() {
    try {
      window.CrazyGames.SDK.game.hideInviteButton();
    } catch (_0xb4c63f) {
      window.UnitySDK.logError("Error while calling hideInviteButton:", _0xb4c63f);
    }
  }
  function _0x12d3a0(_0x2cb312, _0x55010e, _0x1a5d53, _0x17273e, _0x8411fc, _0x3512f7, _0x18a4c1) {
    var _0x2cb5cf = _0x432dbf(_0x2cb312);
    var _0x5c0bc8 = _0x432dbf(_0x55010e);
    var _0x2caeda = _0x432dbf(_0x1a5d53);
    var _0x27cf9b = _0x432dbf(_0x8411fc);
    var _0x1f9f21 = _0x432dbf(_0x3512f7);
    var _0x46d21c = _0x432dbf(_0x18a4c1);
    try {
      var _0x583696 = {};
      _0x583696[_0x2caeda] = firebase.firestore.FieldValue.increment(_0x17273e);
      firebase.firestore().collection(_0x2cb5cf).doc(_0x5c0bc8).update(_0x583696).then(function () {
        window.unityInstance.SendMessage(_0x27cf9b, _0x1f9f21, "Success: incremented " + _0x2caeda + " by " + _0x17273e);
      }).catch(function (_0x205204) {
        window.unityInstance.SendMessage(_0x27cf9b, _0x46d21c, JSON.stringify(_0x205204, Object.getOwnPropertyNames(_0x205204)));
      });
    } catch (_0x3e05ab) {
      window.unityInstance.SendMessage(_0x27cf9b, _0x46d21c, JSON.stringify(_0x3e05ab, Object.getOwnPropertyNames(_0x3e05ab)));
    }
  }
  function _0x1aca73(_0x2065d0) {
    if (typeof _0x432dbf !== "undefined") {
      window.unityStringify = _0x432dbf;
    } else {
      window.unityStringify = _0x432dbf;
    }
    window.UnitySDK = {
      version: window.unityStringify(_0x2065d0),
      pointerLockElement: undefined,
      unlockPointer: function () {
        this.pointerLockElement = document.pointerLockElement || null;
        if (this.pointerLockElement && document.exitPointerLock) {
          document.exitPointerLock();
        }
      },
      lockPointer: function () {
        if (this.pointerLockElement && this.pointerLockElement.requestPointerLock) {
          this.pointerLockElement.requestPointerLock();
        }
      },
      logError: function () {
        var _0x5db979 = Array.prototype.slice.call(arguments);
        _0x5db979.unshift("[JsLib]");
        console.error.apply(console, _0x5db979);
      }
    };
    var _0x113367 = {
      wrapper: {
        engine: "unity",
        sdkVersion: window.unityStringify(_0x2065d0)
      }
    };
    var _0x34b674 = document.createElement("script");
    _0x34b674.src = "https://sdk.crazygames.com/crazygames-sdk-v3.js";
    document.head.appendChild(_0x34b674);
    _0x34b674.addEventListener("load", function () {
      window.CrazyGames.SDK.init(_0x113367).then(function () {
        _0x2c775c("CrazySDKSingleton", "JSLibCallback_Init");
        window.CrazyGames.SDK.ad.hasAdblock().then(function (_0x52fd32) {
          _0x2c775c("CrazySDKSingleton", "JSLibCallback_AdblockDetectionResult", _0x52fd32 ? 1 : 0);
        }).catch(function (_0x5b25ad) {
          window.UnitySDK.logError("Error while checking adblock:", _0x5b25ad);
          _0x2c775c("CrazySDKSingleton", "JSLibCallback_AdblockDetectionResult", 0);
        });
        window.CrazyGames.SDK.user.addAuthListener(function (_0x3488bc) {
          _0x2c775c("CrazySDKSingleton", "JSLibCallback_AuthListener", JSON.stringify({
            userJson: JSON.stringify(_0x3488bc)
          }));
        });
      });
    });
  }
  function _0x12f6ee() {
    return window.CrazyGames.SDK.user.isUserAccountAvailable;
  }
  var _0x58fc0c = null;
  var _0x469540 = 0;
  function _0x2cde5f() {
    return _0x58fc0c && _0x58fc0c.activated || _0x469540 != 0;
  }
  var _0x48f9c1 = 1;
  var _0x1b053f = {
    x: 0,
    y: 0,
    z: 0
  };
  function _0x2e2477() {
    _0x1b053f = {
      x: _0x58fc0c.x * _0x48f9c1,
      y: _0x58fc0c.y * _0x48f9c1,
      z: _0x58fc0c.z * _0x48f9c1
    };
    if (_0x469540 != 0) {
      _0x16f142(_0x469540, _0x1b053f.x, _0x1b053f.y, _0x1b053f.z);
    }
  }
  var _0x35a4ec = 0;
  var _0x3381c7 = 0;
  var _0x1841cd = 0;
  var _0x1a0f2c = 0;
  var _0x4c96f2 = 0;
  function _0x3b719d(_0x14394b, _0x4b4fea) {
    var _0x3b6d0a = {
      x: _0x14394b.x - _0x4b4fea.x,
      y: _0x14394b.y - _0x4b4fea.y,
      z: _0x14394b.z - _0x4b4fea.z
    };
    var _0x31675f = _0x3b6d0a.x * _0x3b6d0a.x + _0x3b6d0a.y * _0x3b6d0a.y + _0x3b6d0a.z * _0x3b6d0a.z;
    var _0xe723d4 = {
      x: _0x14394b.x + _0x4b4fea.x,
      y: _0x14394b.y + _0x4b4fea.y,
      z: _0x14394b.z + _0x4b4fea.z
    };
    var _0x279f5e = _0xe723d4.x * _0xe723d4.x + _0xe723d4.y * _0xe723d4.y + _0xe723d4.z * _0xe723d4.z;
    if (_0x31675f <= _0x279f5e) {
      return _0x3b6d0a;
    } else {
      return _0xe723d4;
    }
  }
  function _0x1329ff(_0x23a41e) {
    var _0x36181e = {
      x: _0x23a41e.accelerationIncludingGravity.x * _0x48f9c1,
      y: _0x23a41e.accelerationIncludingGravity.y * _0x48f9c1,
      z: _0x23a41e.accelerationIncludingGravity.z * _0x48f9c1
    };
    if (_0x469540 != 0) {
      _0x16f142(_0x469540, _0x36181e.x, _0x36181e.y, _0x36181e.z);
    }
    var _0x5b7406 = {
      x: _0x23a41e.acceleration.x * _0x48f9c1,
      y: _0x23a41e.acceleration.y * _0x48f9c1,
      z: _0x23a41e.acceleration.z * _0x48f9c1
    };
    if (_0x1841cd != 0) {
      _0x16f142(_0x1841cd, _0x5b7406.x, _0x5b7406.y, _0x5b7406.z);
    }
    if (_0x1a0f2c != 0) {
      var _0x1907c4 = _0x3b719d(_0x36181e, _0x5b7406);
      _0x16f142(_0x1a0f2c, _0x1907c4.x, _0x1907c4.y, _0x1907c4.z);
    }
    if (_0x4c96f2 != 0) {
      var _0x742fd1 = Math.PI / 180;
      _0x16f142(_0x4c96f2, _0x23a41e.rotationRate.alpha * _0x742fd1, _0x23a41e.rotationRate.beta * _0x742fd1, _0x23a41e.rotationRate.gamma * _0x742fd1);
    }
  }
  var _0x5826a8 = 0;
  function _0x317808(_0x8f8822) {
    if (_0x8f8822 & 1) {
      if (typeof DeviceOrientationEvent.requestPermission === "function") {
        DeviceOrientationEvent.requestPermission().then(function (_0x270aaf) {
          if (_0x270aaf === "granted") {
            _0x5826a8 &= ~1;
          } else {
            _0x539b49("DeviceOrientationEvent permission not granted");
          }
        }).catch(function (_0x24092f) {
          _0x539b49(_0x24092f);
          _0x5826a8 |= 1;
        });
      }
    }
    if (_0x8f8822 & 2) {
      if (typeof DeviceMotionEvent.requestPermission === "function") {
        DeviceMotionEvent.requestPermission().then(function (_0x319772) {
          if (_0x319772 === "granted") {
            _0x5826a8 &= ~2;
          } else {
            _0x539b49("DeviceMotionEvent permission not granted");
          }
        }).catch(function (_0x1de11c) {
          _0x539b49(_0x1de11c);
          _0x5826a8 |= 2;
        });
      }
    }
  }
  function _0x359d95() {
    if (_0x469540 == 0 && _0x1841cd == 0 && _0x1a0f2c == 0 && _0x4c96f2 == 0) {
      _0x317808(2);
      window.addEventListener("devicemotion", _0x1329ff);
    }
  }
  function _0x102bc4() {
    var _0x325f58 = 9.80665;
    _0x48f9c1 = /(iPhone|iPad|Macintosh)/i.test(navigator.userAgent) ? 1 / _0x325f58 : -1 / _0x325f58;
  }
  function _0x26eeac(_0x1ceb4f, _0x340a45) {
    _0x102bc4();
    if (typeof Accelerometer === "undefined") {
      _0x359d95();
      if (_0x1ceb4f != 0) {
        _0x469540 = _0x1ceb4f;
      }
      return;
    }
    if (_0x1ceb4f != 0) {
      _0x469540 = _0x1ceb4f;
    }
    function _0x1123e7(_0xf997b1) {
      _0x58fc0c = new Accelerometer({
        frequency: _0xf997b1,
        referenceFrame: "device"
      });
      _0x58fc0c.addEventListener("reading", _0x2e2477);
      _0x58fc0c.addEventListener("error", function (_0x5cde83) {
        _0x539b49(_0x5cde83.error ? _0x5cde83.error : _0x5cde83);
      });
      _0x58fc0c.start();
      _0x3381c7 = _0xf997b1;
    }
    if (_0x58fc0c) {
      if (_0x3381c7 != _0x340a45) {
        _0x58fc0c.stop();
        _0x58fc0c.removeEventListener("reading", _0x2e2477);
        _0x1123e7(_0x340a45);
      }
    } else if (_0x35a4ec != 0) {
      _0x35a4ec = _0x340a45;
    } else {
      _0x35a4ec = _0x340a45;
      navigator.permissions.query({
        name: "accelerometer"
      }).then(function (_0x3c1a9b) {
        if (_0x3c1a9b.state === "granted") {
          _0x1123e7(_0x35a4ec);
        } else {
          _0x539b49("No permission to use Accelerometer.");
        }
        _0x35a4ec = 0;
      });
    }
  }
  function _0x11cd75() {
    if (_0x469540 == 0 && _0x1841cd == 0 && _0x1a0f2c == 0 && _0x4c96f2 == 0) {
      window.removeEventListener("devicemotion", _0x579fe4);
    }
  }
  function _0x509e1a() {
    if (_0x58fc0c) {
      if (typeof GravitySensor !== "undefined" || _0x1a0f2c == 0) {
        _0x58fc0c.stop();
        _0x58fc0c.removeEventListener("reading", _0x2e2477);
        _0x58fc0c = null;
      }
      _0x469540 = 0;
      _0x3381c7 = 0;
    } else if (_0x469540 != 0) {
      _0x469540 = 0;
      _0x11cd75();
    }
  }
  function _0x1e02d8(_0x519ab1, _0x359c5a) {
    var _0x3066d3 = "";
    for (var _0xb8c067 = 0; _0xb8c067 < _0x359c5a; _0xb8c067++) {
      _0x3066d3 += String.fromCharCode(_0x353336[_0x519ab1 + _0xb8c067]);
    }
    _0x13e282.canvas.style.cursor = "url(data:image/cur;base64," + btoa(_0x3066d3) + "),default";
  }
  function _0x4e15cb(_0x4c9cf3) {
    _0x13e282.canvas.style.cursor = _0x4c9cf3 ? "default" : "none";
  }
  function _0x16b828(_0x5a602e) {
    if (typeof window.CSS !== "undefined" && typeof window.CSS.escape !== "undefined") {
      return window.CSS.escape(_0x5a602e);
    }
    return _0x5a602e.replace(/(#|\.|\+|\[|\]|\(|\)|\{|\})/g, "\\$1");
  }
  function _0x4d3b0a() {
    var _0x39d82d = _0x13e282.canvas ? _0x13e282.canvas.id : "unity-canvas";
    return "#" + _0x16b828(_0x39d82d);
  }
  function _0x1a6b02(_0x39a988, _0x8bdf6f, _0x1275b2, _0x1b6d5f) {
    var _0x126a3a = document.querySelector(_0x4d3b0a());
    var _0x3490ec = _0x126a3a && _0x126a3a.getBoundingClientRect();
    _0x2a2a43[_0x1275b2 >> 2] = _0x39a988 - (_0x3490ec ? _0x3490ec.left : 0);
    _0x2a2a43[_0x1b6d5f >> 2] = _0x8bdf6f - (_0x3490ec ? _0x3490ec.top : 0);
  }
  function _0x1c7ce2(_0x4484d3) {
    var _0x2cdd72 = _0x4bdf30(_0x4484d3) + 1;
    var _0x3d2dfe = _0x45bc34(_0x2cdd72);
    _0x98a294(_0x4484d3, _0x3d2dfe, _0x2cdd72);
    return _0x3d2dfe;
  }
  function _0x3b7e9e() {
    var _0x1c053d = _0x4d3b0a();
    if (_0x3b7e9e.selector != _0x1c053d) {
      _0x50622a(_0x3b7e9e.ptr);
      _0x3b7e9e.ptr = _0x1c7ce2(_0x1c053d);
      _0x3b7e9e.selector = _0x1c053d;
    }
    return _0x3b7e9e.ptr;
  }
  function _0x45aa3a(_0x5ba762) {
    var _0x3600c9 = _0x432dbf(_0x5ba762);
    try {
      eval(_0x3600c9);
    } catch (_0x1e14cb) {
      console.error(_0x1e14cb);
    }
  }
  function _0x5b4a31(_0x3748c8) {
    var _0x51de0c = _0x432dbf(_0x3748c8);
    window.open(_0x51de0c, "_blank", "");
  }
  var _0x40148f = {
    numPendingSync: 0,
    syncInternal: 1000,
    syncInProgress: false,
    sync: function (_0x16a47c) {
      if (_0x16a47c) {
        if (_0x40148f.numPendingSync == 0) {
          return;
        }
      } else if (_0x40148f.syncInProgress) {
        _0x40148f.numPendingSync++;
        return;
      }
      _0x40148f.syncInProgress = true;
      _0x1f58b9.syncfs(false, function (_0x432814) {
        _0x40148f.syncInProgress = false;
      });
      _0x40148f.numPendingSync = 0;
    }
  };
  function _0x5e0cce() {
    _0x13e282.setInterval(function () {
      _0x40148f.sync(true);
    }, _0x40148f.syncInternal);
  }
  function _0x56f61c() {
    _0x40148f.sync(false);
  }
  var _0x5351b9 = null;
  function _0x97b1f5() {
    if (typeof GravitySensor !== "undefined") {
      return _0x5351b9 && _0x5351b9.activated;
    } else {
      return _0x1a0f2c != 0;
    }
  }
  function _0x4ad65b() {
    if (_0x1a0f2c != 0) {
      _0x16f142(_0x1a0f2c, _0x5351b9.x * _0x48f9c1, _0x5351b9.y * _0x48f9c1, _0x5351b9.z * _0x48f9c1);
    }
  }
  var _0x591a65 = 0;
  var _0x189bff = null;
  function _0x4f14b6() {
    var _0xa3ab37 = {
      x: _0x189bff.x * _0x48f9c1,
      y: _0x189bff.y * _0x48f9c1,
      z: _0x189bff.z * _0x48f9c1
    };
    if (_0x1841cd != 0) {
      _0x16f142(_0x1841cd, _0xa3ab37.x, _0xa3ab37.y, _0xa3ab37.z);
    }
    if (_0x1a0f2c != 0 && typeof GravitySensor === "undefined") {
      var _0x40dc0b = _0x3b719d(_0x1b053f, _0xa3ab37);
      _0x16f142(_0x1a0f2c, _0x40dc0b.x, _0x40dc0b.y, _0x40dc0b.z);
    }
  }
  var _0x150ac4 = 0;
  var _0x139b7d = 0;
  function _0x54a036(_0x346971, _0x2a7f09) {
    _0x102bc4();
    if (typeof LinearAccelerationSensor === "undefined") {
      _0x359d95();
      if (_0x346971 != 0) {
        _0x1841cd = _0x346971;
      }
      return;
    }
    if (_0x346971 != 0) {
      _0x1841cd = _0x346971;
    }
    function _0x3f1cad(_0x377e8a) {
      _0x189bff = new LinearAccelerationSensor({
        frequency: _0x377e8a,
        referenceFrame: "device"
      });
      _0x189bff.addEventListener("reading", _0x4f14b6);
      _0x189bff.addEventListener("error", function (_0x476ad9) {
        _0x539b49(_0x476ad9.error ? _0x476ad9.error : _0x476ad9);
      });
      _0x189bff.start();
      _0x139b7d = _0x377e8a;
    }
    if (_0x189bff) {
      if (_0x139b7d != _0x2a7f09) {
        _0x189bff.stop();
        _0x189bff.removeEventListener("reading", _0x4f14b6);
        _0x3f1cad(_0x2a7f09);
      }
    } else if (_0x150ac4 != 0) {
      _0x150ac4 = _0x2a7f09;
    } else {
      _0x150ac4 = _0x2a7f09;
      navigator.permissions.query({
        name: "accelerometer"
      }).then(function (_0x1481cf) {
        if (_0x1481cf.state === "granted") {
          _0x3f1cad(_0x150ac4);
        } else {
          _0x539b49("No permission to use LinearAccelerationSensor.");
        }
        _0x150ac4 = 0;
      });
    }
  }
  function _0x546d27(_0x27e984, _0x300815) {
    if (typeof GravitySensor === "undefined") {
      _0x26eeac(0, Math.max(_0x300815, _0x3381c7));
      _0x54a036(0, Math.max(_0x300815, _0x139b7d));
      _0x1a0f2c = _0x27e984;
      return;
    }
    _0x102bc4();
    _0x1a0f2c = _0x27e984;
    function _0x5a975b(_0x2b897a) {
      _0x5351b9 = new GravitySensor({
        frequency: _0x2b897a,
        referenceFrame: "device"
      });
      _0x5351b9.addEventListener("reading", _0x4ad65b);
      _0x5351b9.addEventListener("error", function (_0x1e0e1d) {
        _0x539b49(_0x1e0e1d.error ? _0x1e0e1d.error : _0x1e0e1d);
      });
      _0x5351b9.start();
    }
    if (_0x5351b9) {
      _0x5351b9.stop();
      _0x5351b9.removeEventListener("reading", _0x4ad65b);
      _0x5a975b(_0x300815);
    } else if (_0x591a65 != 0) {
      _0x591a65 = _0x300815;
    } else {
      _0x591a65 = _0x300815;
      navigator.permissions.query({
        name: "accelerometer"
      }).then(function (_0x584e02) {
        if (_0x584e02.state === "granted") {
          _0x5a975b(_0x591a65);
        } else {
          _0x539b49("No permission to use GravitySensor.");
        }
        _0x591a65 = 0;
      });
    }
  }
  function _0x3540c6() {
    if (_0x189bff) {
      if (typeof GravitySensor !== "undefined" || _0x1a0f2c == 0) {
        _0x189bff.stop();
        _0x189bff.removeEventListener("reading", _0x4f14b6);
        _0x189bff = null;
      }
      _0x1841cd = 0;
      _0x139b7d = 0;
    } else if (_0x1841cd != 0) {
      _0x1841cd = 0;
      _0x11cd75();
    }
  }
  function _0x21aa6a() {
    _0x1a0f2c = 0;
    if (typeof GravitySensor === "undefined") {
      if (_0x469540 == 0) {
        _0x509e1a();
      }
      if (_0x1841cd == 0) {
        _0x3540c6();
      }
      return;
    }
    if (_0x5351b9) {
      _0x5351b9.stop();
      _0x5351b9.removeEventListener("reading", _0x4ad65b);
      _0x5351b9 = null;
    }
  }
  function _0x5b2e0c(_0x466ee9) {
    try {
      (function () {
        _0x5ec935.call(null, _0x466ee9);
      })();
    } catch (_0x153e73) {
      console.warn(_0x153e73);
    }
  }
  var _0x4420c3 = null;
  function _0x58778c() {
    return _0x4420c3 && _0x4420c3.activated || _0x4c96f2 != 0;
  }
  function _0x5372d5() {
    if (_0x4c96f2 != 0) {
      _0x16f142(_0x4c96f2, _0x4420c3.x, _0x4420c3.y, _0x4420c3.z);
    }
  }
  var _0x5ba064 = 0;
  function _0x283dfa(_0x4117f5, _0x4025f4) {
    if (typeof Gyroscope === "undefined") {
      _0x359d95();
      _0x4c96f2 = _0x4117f5;
      return;
    }
    _0x4c96f2 = _0x4117f5;
    function _0x51cda8(_0x5801cc) {
      _0x4420c3 = new Gyroscope({
        frequency: _0x5801cc,
        referenceFrame: "device"
      });
      _0x4420c3.addEventListener("reading", _0x5372d5);
      _0x4420c3.addEventListener("error", function (_0x14f1c5) {
        _0x539b49(_0x14f1c5.error ? _0x14f1c5.error : _0x14f1c5);
      });
      _0x4420c3.start();
    }
    if (_0x4420c3) {
      _0x4420c3.stop();
      _0x4420c3.removeEventListener("reading", _0x5372d5);
      _0x51cda8(_0x4025f4);
    } else if (_0x5ba064 != 0) {
      _0x5ba064 = _0x4025f4;
    } else {
      _0x5ba064 = _0x4025f4;
      navigator.permissions.query({
        name: "gyroscope"
      }).then(function (_0x2bd5f2) {
        if (_0x2bd5f2.state === "granted") {
          _0x51cda8(_0x5ba064);
        } else {
          _0x539b49("No permission to use Gyroscope.");
        }
        _0x5ba064 = 0;
      });
    }
  }
  function _0x4a5087() {
    if (_0x4420c3) {
      _0x4420c3.stop();
      _0x4420c3.removeEventListener("reading", _0x5372d5);
      _0x4420c3 = null;
      _0x4c96f2 = 0;
    } else if (_0x4c96f2 != 0) {
      _0x4c96f2 = 0;
      _0x11cd75();
    }
  }
  function _0x5337c1() {
    const _0x1d1529 = function (_0x324229) {
      if (_0x324229.target.localName !== "canvas") {
        _0x526762();
      }
    };
    document.addEventListener("contextmenu", _0x1d1529);
    _0x13e282.deinitializers.push(function () {
      document.removeEventListener("contextmenu", _0x1d1529);
    });
  }
  function _0x399075() {
    return _0x189bff && _0x189bff.activated || _0x1841cd != 0;
  }
  function _0x132697(_0x4fda2b, _0x46befc) {
    var _0x15737f = _0x432dbf(_0x4fda2b);
    if (typeof dump == "function") {
      dump(_0x15737f);
    }
    switch (_0x46befc) {
      case 0:
      case 1:
      case 4:
        console.error(_0x15737f);
        return;
      case 2:
        console.warn(_0x15737f);
        return;
      case 3:
      case 5:
        console.log(_0x15737f);
        return;
      default:
        console.error("Unknown console message type!");
        console.error(_0x15737f);
    }
  }
  function _0x22bd44(_0x113ca0, _0x27408b) {
    var _0x5e8696 = _0x1d8fda();
    if (_0x113ca0) {
      _0x98a294(_0x5e8696, _0x113ca0, _0x27408b);
    }
    return _0x4bdf30(_0x5e8696);
  }
  var _0x330da4 = null;
  var _0x326f5b = 0;
  function _0x22bcc4() {
    return _0x330da4 && _0x330da4.activated || _0x326f5b != 0;
  }
  function _0x2e4dd9() {
    if (_0x326f5b != 0) {
      _0x4d20d7(_0x326f5b, _0x330da4.quaternion[0], _0x330da4.quaternion[1], _0x330da4.quaternion[2], _0x330da4.quaternion[3]);
    }
  }
  var _0x4d2c0d = 0;
  function _0x579fe4(_0x19ff1c) {
    if (_0x326f5b) {
      var _0x137bc6 = Math.PI / 180;
      var _0x2928c7 = _0x19ff1c.beta * _0x137bc6;
      var _0x5c5523 = _0x19ff1c.gamma * _0x137bc6;
      var _0xf6804f = _0x19ff1c.alpha * _0x137bc6;
      var _0x535e69 = Math.cos(_0x2928c7 / 2);
      var _0x2c8f2f = Math.sin(_0x2928c7 / 2);
      var _0x24f7d8 = Math.cos(_0x5c5523 / 2);
      var _0x5849da = Math.sin(_0x5c5523 / 2);
      var _0x1e2947 = Math.cos(_0xf6804f / 2);
      var _0x4f65e3 = Math.sin(_0xf6804f / 2);
      var _0x218ac2 = _0x2c8f2f * _0x24f7d8 * _0x1e2947 - _0x535e69 * _0x5849da * _0x4f65e3;
      var _0x1ba118 = _0x535e69 * _0x5849da * _0x1e2947 + _0x2c8f2f * _0x24f7d8 * _0x4f65e3;
      var _0x1a5cc9 = _0x535e69 * _0x24f7d8 * _0x4f65e3 + _0x2c8f2f * _0x5849da * _0x1e2947;
      var _0x4878ed = _0x535e69 * _0x24f7d8 * _0x1e2947 - _0x2c8f2f * _0x5849da * _0x4f65e3;
      _0x4d20d7(_0x326f5b, _0x218ac2, _0x1ba118, _0x1a5cc9, _0x4878ed);
    }
  }
  function _0x4c5a52(_0x2be51a, _0x168851) {
    if (typeof RelativeOrientationSensor === "undefined") {
      if (_0x326f5b == 0) {
        _0x326f5b = _0x2be51a;
        _0x317808(1);
        window.addEventListener("deviceorientation", _0x579fe4);
      }
      return;
    }
    _0x326f5b = _0x2be51a;
    function _0xe23943(_0x39a477) {
      _0x330da4 = new RelativeOrientationSensor({
        frequency: _0x39a477,
        referenceFrame: "device"
      });
      _0x330da4.addEventListener("reading", _0x2e4dd9);
      _0x330da4.addEventListener("error", function (_0x55c75f) {
        _0x539b49(_0x55c75f.error ? _0x55c75f.error : _0x55c75f);
      });
      _0x330da4.start();
    }
    if (_0x330da4) {
      _0x330da4.stop();
      _0x330da4.removeEventListener("reading", _0x2e4dd9);
      _0xe23943(_0x168851);
    } else if (_0x4d2c0d != 0) {
      _0x4d2c0d = _0x168851;
    } else {
      _0x4d2c0d = _0x168851;
      Promise.all([navigator.permissions.query({
        name: "accelerometer"
      }), navigator.permissions.query({
        name: "gyroscope"
      })]).then(function (_0x597942) {
        if (_0x597942.every(function (_0x597322) {
          return _0x597322.state === "granted";
        })) {
          _0xe23943(_0x4d2c0d);
        } else {
          _0x539b49("No permissions to use RelativeOrientationSensor.");
        }
        _0x4d2c0d = 0;
      });
    }
  }
  function _0x5c6521() {
    if (_0x330da4) {
      _0x330da4.stop();
      _0x330da4.removeEventListener("reading", _0x2e4dd9);
      _0x330da4 = null;
    } else if (_0x326f5b != 0) {
      window.removeEventListener("deviceorientation", _0x579fe4);
    }
    _0x326f5b = 0;
  }
  function _0x3892fe() {
    if (_0x5826a8 == 0) {
      return;
    }
    _0x317808(_0x5826a8);
  }
  function _0x4310e1() {
    _0x13e282.QuitCleanup();
  }
  var _0x503030 = 0;
  function _0x230f52() {
    if (_0x503030) {
      _0x5da989(_0x503030, window.innerWidth, window.innerHeight, screen.orientation ? screen.orientation.angle : window.orientation);
    }
  }
  function _0x1c1fc3() {
    _0x503030 = 0;
    window.removeEventListener("resize", _0x230f52);
    if (screen.orientation) {
      screen.orientation.removeEventListener("change", _0x230f52);
    }
  }
  function _0x43a99f(_0x1f58c3) {
    if (!_0x503030) {
      if (screen.orientation) {
        screen.orientation.addEventListener("change", _0x230f52);
      }
      window.addEventListener("resize", _0x230f52);
      _0x503030 = _0x1f58c3;
      setTimeout(_0x230f52, 0);
    }
  }
  var _0x4ad59a = -1;
  var _0x484a60 = -1;
  var _0x1b9719 = -1;
  function _0x19ac69(_0x2682c6) {
    if (!screen.orientation || !screen.orientation.lock) {
      return;
    }
    function _0x2a0e81() {
      _0x484a60 = _0x4ad59a;
      var _0x892d5f = ["any", 0, "landscape", "portrait", "portrait-primary", "portrait-secondary", "landscape-primary", "landscape-secondary"];
      var _0x3cbcae = _0x892d5f[_0x484a60];
      screen.orientation.lock(_0x3cbcae).then(function () {
        if (_0x4ad59a != _0x484a60) {
          _0x1b9719 = setTimeout(_0x2a0e81, 0);
        } else {
          _0x1b9719 = -1;
        }
      }).catch(function (_0xb88672) {
        _0x539b49(_0xb88672);
        _0x1b9719 = -1;
      });
    }
    _0x4ad59a = _0x2682c6;
    if (_0x1b9719 == -1 && _0x2682c6 != _0x484a60) {
      _0x1b9719 = setTimeout(_0x2a0e81, 0);
    }
  }
  var _0x3f42b1 = {
    audioInstanceIdCounter: 0,
    audioInstances: {},
    audioContext: null,
    audioWebEnabled: 0,
    audioCache: [],
    pendingAudioSources: {}
  };
  function _0x36a6f1(_0x47a248) {
    _0x47a248.estimatePlaybackPosition = function () {
      var _0x4c6157 = (_0x3f42b1.audioContext.currentTime - _0x47a248.playbackStartTime) * _0x47a248.playbackRate.value;
      if (_0x47a248.loop && _0x4c6157 >= _0x47a248.loopStart) {
        _0x4c6157 = (_0x4c6157 - _0x47a248.loopStart) % (_0x47a248.loopEnd - _0x47a248.loopStart) + _0x47a248.loopStart;
      }
      return _0x4c6157;
    };
    _0x47a248.setPitch = function (_0x3d807a) {
      var _0x591f30 = _0x47a248.estimatePlaybackPosition();
      if (_0x591f30 >= 0) {
        _0x47a248.playbackStartTime = _0x3f42b1.audioContext.currentTime - _0x591f30 / _0x3d807a;
      }
      if (_0x47a248.playbackRate.value !== _0x3d807a) {
        _0x47a248.playbackRate.value = _0x3d807a;
      }
    };
  }
  function _0x20d019(_0xfb9640, _0x272744) {
    var _0x6c2c9e = {
      buffer: _0xfb9640,
      error: _0x272744
    };
    _0x6c2c9e.release = function () {};
    _0x6c2c9e.getLength = function () {
      if (!this.buffer) {
        console.log("Trying to get length of sound which is not loaded.");
        return 0;
      }
      var _0x3514cc = 44100 / this.buffer.sampleRate;
      return this.buffer.length * _0x3514cc;
    };
    _0x6c2c9e.getData = function (_0x53b0ce, _0x4fd6f6) {
      if (!this.buffer) {
        console.log("Trying to get data of sound which is not loaded.");
        return 0;
      }
      var _0x16ac52 = _0x53b0ce >> 2;
      var _0x9f7367 = _0x36547e.subarray(_0x16ac52, _0x16ac52 + (_0x4fd6f6 >> 2));
      var _0x4227a2 = Math.floor((_0x4fd6f6 >> 2) / this.buffer.numberOfChannels);
      var _0x1481ba = Math.min(this.buffer.length, _0x4227a2);
      for (var _0x26376f = 0; _0x26376f < this.buffer.numberOfChannels; _0x26376f++) {
        var _0x378f6d = this.buffer.getChannelData(_0x26376f).subarray(0, _0x1481ba);
        _0x9f7367.set(_0x378f6d, _0x26376f * _0x1481ba);
      }
      return _0x1481ba * this.buffer.numberOfChannels * 4;
    };
    _0x6c2c9e.getNumberOfChannels = function () {
      if (!this.buffer) {
        console.log("Trying to get metadata of sound which is not loaded.");
        return 0;
      }
      return this.buffer.numberOfChannels;
    };
    _0x6c2c9e.getFrequency = function () {
      if (!this.buffer) {
        console.log("Trying to get metadata of sound which is not loaded.");
        return 0;
      }
      return this.buffer.sampleRate;
    };
    _0x6c2c9e.createSourceNode = function () {
      if (!this.buffer) {
        console.log("Trying to play sound which is not loaded.");
      }
      var _0x2dcf4f = _0x3f42b1.audioContext.createBufferSource();
      _0x2dcf4f.buffer = this.buffer;
      _0x36a6f1(_0x2dcf4f);
      return _0x2dcf4f;
    };
    return _0x6c2c9e;
  }
  function _0xc52c15(_0x3890c2, _0x5df0fd) {
    var _0x900746 = {
      callback: _0x3890c2,
      userData: _0x5df0fd,
      source: null,
      gain: _0x3f42b1.audioContext.createGain(),
      panner: _0x3f42b1.audioContext.createPanner(),
      threeD: false,
      loop: false,
      loopStart: 0,
      loopEnd: 0,
      pitch: 1
    };
    _0x900746.panner.rolloffFactor = 0;
    _0x900746.release = function () {
      this.disconnectSource();
      this.gain.disconnect();
      this.panner.disconnect();
    };
    _0x900746.playSoundClip = function (_0x3dc868, _0x43a853, _0x199840) {
      try {
        var _0xec297c = this;
        this.source = _0x3dc868.createSourceNode();
        this.setupPanning();
        this.source.onended = function () {
          _0xec297c.source.isStopped = true;
          _0xec297c.disconnectSource();
          if (_0xec297c.callback) {
            _0x4c0cd9("vi", _0xec297c.callback, [_0xec297c.userData]);
          }
        };
        this.source.loop = this.loop;
        this.source.loopStart = this.loopStart;
        this.source.loopEnd = this.loopEnd;
        this.source.start(_0x43a853, _0x199840);
        this.source.playbackStartTime = _0x43a853 - _0x199840 / this.source.playbackRate.value;
        this.source.setPitch(this.pitch);
      } catch (_0x66851a) {
        console.error("Channel.playSoundClip error. Exception: " + _0x66851a);
      }
    };
    _0x900746.stop = function (_0x47e84a) {
      if (!this.source) {
        return;
      }
      try {
        _0x900746.source.stop(_0x3f42b1.audioContext.currentTime + _0x47e84a);
      } catch (_0x5983b5) {}
      if (_0x47e84a == 0) {
        this.disconnectSource();
      }
    };
    _0x900746.isPaused = function () {
      if (!this.source) {
        return true;
      }
      if (this.source.isPausedMockNode) {
        return true;
      }
      if (this.source.mediaElement) {
        return this.source.mediaElement.paused || this.source.pauseRequested;
      }
      return false;
    };
    _0x900746.pause = function () {
      if (!this.source || this.source.isPausedMockNode) {
        return;
      }
      if (this.source.mediaElement) {
        this.source._pauseMediaElement();
        return;
      }
      var _0x57bc83 = {
        isPausedMockNode: true,
        buffer: this.source.buffer,
        loop: this.source.loop,
        loopStart: this.source.loopStart,
        loopEnd: this.source.loopEnd,
        playbackRate: this.source.playbackRate.value,
        scheduledStopTime: undefined,
        playbackPausedAtPosition: this.source.estimatePlaybackPosition(),
        setPitch: function (_0x3df568) {
          this.playbackRate = _0x3df568;
        },
        stop: function (_0x29523b) {
          this.scheduledStopTime = _0x29523b;
        }
      };
      this.stop(0);
      this.disconnectSource();
      this.source = _0x57bc83;
    };
    _0x900746.resume = function () {
      if (this.source && this.source.mediaElement) {
        this.source.start(undefined, this.source.currentTime);
        return;
      }
      if (!this.source || !this.source.isPausedMockNode) {
        return;
      }
      var _0x279fe5 = this.source;
      var _0x4c92d4 = _0x20d019(_0x279fe5.buffer, false);
      this.playSoundClip(_0x4c92d4, _0x3f42b1.audioContext.currentTime, Math.max(0, _0x279fe5.playbackPausedAtPosition));
      this.source.loop = _0x279fe5.loop;
      this.source.loopStart = _0x279fe5.loopStart;
      this.source.loopEnd = _0x279fe5.loopEnd;
      this.source.setPitch(_0x279fe5.playbackRate);
      if (typeof _0x279fe5.scheduledStopTime !== "undefined") {
        var _0x150aa4 = Math.max(_0x279fe5.scheduledStopTime - _0x3f42b1.audioContext.currentTime, 0);
        this.stop(_0x150aa4);
      }
    };
    _0x900746.setLoop = function (_0xa02d0c) {
      this.loop = _0xa02d0c;
      if (!this.source || this.source.loop == _0xa02d0c) {
        return;
      }
      this.source.loop = _0xa02d0c;
    };
    _0x900746.setLoopPoints = function (_0x19d443, _0x8395c6) {
      this.loopStart = _0x19d443;
      this.loopEnd = _0x8395c6;
      if (!this.source) {
        return;
      }
      if (this.source.loopStart !== _0x19d443) {
        this.source.loopStart = _0x19d443;
      }
      if (this.source.loopEnd !== _0x8395c6) {
        this.source.loopEnd = _0x8395c6;
      }
    };
    _0x900746.set3D = function (_0x35e4e1) {
      if (this.threeD == _0x35e4e1) {
        return;
      }
      this.threeD = _0x35e4e1;
      if (!this.source) {
        return;
      }
      this.setupPanning();
    };
    _0x900746.setPitch = function (_0x45fc3e) {
      this.pitch = _0x45fc3e;
      if (!this.source) {
        return;
      }
      this.source.setPitch(_0x45fc3e);
    };
    _0x900746.setVolume = function (_0x21fe5d) {
      if (this.gain.gain.value == _0x21fe5d) {
        return;
      }
      this.gain.gain.value = _0x21fe5d;
    };
    _0x900746.setPosition = function (_0x3fc49d, _0x4a4d0f, _0x385079) {
      var _0x54e997 = this.panner;
      if (_0x54e997.positionX) {
        if (_0x54e997.positionX.value !== _0x3fc49d) {
          _0x54e997.positionX.value = _0x3fc49d;
        }
        if (_0x54e997.positionY.value !== _0x4a4d0f) {
          _0x54e997.positionY.value = _0x4a4d0f;
        }
        if (_0x54e997.positionZ.value !== _0x385079) {
          _0x54e997.positionZ.value = _0x385079;
        }
      } else if (_0x54e997._x !== _0x3fc49d || _0x54e997._y !== _0x4a4d0f || _0x54e997._z !== _0x385079) {
        _0x54e997.setPosition(_0x3fc49d, _0x4a4d0f, _0x385079);
        _0x54e997._x = _0x3fc49d;
        _0x54e997._y = _0x4a4d0f;
        _0x54e997._z = _0x385079;
      }
    };
    _0x900746.disconnectSource = function () {
      if (!this.source || this.source.isPausedMockNode) {
        return;
      }
      if (this.source.mediaElement) {
        this.source._pauseMediaElement();
      }
      this.source.onended = null;
      this.source.disconnect();
      delete this.source;
    };
    _0x900746.setupPanning = function () {
      if (this.source.isPausedMockNode) {
        return;
      }
      this.source.disconnect();
      this.panner.disconnect();
      this.gain.disconnect();
      if (this.threeD) {
        this.source.connect(this.panner);
        this.panner.connect(this.gain);
      } else {
        this.source.connect(this.gain);
      }
      this.gain.connect(_0x3f42b1.audioContext.destination);
    };
    _0x900746.isStopped = function () {
      if (!this.source) {
        return true;
      }
      if (this.source.mediaElement) {
        return this.source.isStopped;
      }
      return false;
    };
    return _0x900746;
  }
  function _0x3937d8(_0x226053, _0x5c2385) {
    if (_0x3f42b1.audioWebEnabled == 0) {
      return;
    }
    _0x3f42b1.audioInstances[++_0x3f42b1.audioInstanceIdCounter] = _0xc52c15(_0x226053, _0x5c2385);
    return _0x3f42b1.audioInstanceIdCounter;
  }
  function _0x4ec72a(_0x4324ad) {
    if (_0x3f42b1.audioWebEnabled == 0) {
      return 0;
    }
    var _0x44f754 = _0x3f42b1.audioInstances[_0x4324ad];
    if (!_0x44f754) {
      return 0;
    }
    return _0x44f754.getLength();
  }
  function _0x3b2d09(_0x521620) {
    if (_0x3f42b1.audioWebEnabled == 0) {
      return 2;
    }
    var _0x51ea88 = _0x3f42b1.audioInstances[_0x521620];
    if (_0x51ea88.error) {
      return 2;
    }
    if (_0x51ea88.buffer || _0x51ea88.url) {
      return 0;
    }
    return 1;
  }
  function _0x4f94cc(_0x3c3704) {
    var _0x52da4f = _0x3f42b1.pendingAudioSources[_0x3c3704];
    _0x52da4f.sourceNode._startPlayback(_0x52da4f.offset);
    delete _0x3f42b1.pendingAudioSources[_0x3c3704];
  }
  function _0x3b9b77() {
    Object.keys(_0x3f42b1.pendingAudioSources).forEach(function (_0xfbc5cb) {
      _0x4f94cc(_0xfbc5cb);
    });
  }
  function _0x2c06fe() {
    try {
      window.AudioContext = window.AudioContext || window.webkitAudioContext;
      _0x3f42b1.audioContext = new AudioContext();
      function _0x3da982() {
        if (_0x3f42b1.audioContext.state === "suspended") {
          _0x3f42b1.audioContext.resume().catch(function (_0xfbad3) {
            console.warn("Could not resume audio context. Exception: " + _0xfbad3);
          });
        } else {
          _0x13e282.clearInterval(_0x2b388a);
        }
      }
      var _0x2b388a = _0x13e282.setInterval(_0x3da982, 400);
      _0x3f42b1.audioWebEnabled = 1;
      function _0x1aad59() {
        try {
          if (_0x3f42b1.audioContext.state !== "running" && _0x3f42b1.audioContext.state !== "closed") {
            _0x3f42b1.audioContext.resume().catch(function (_0x53ff8c) {
              console.warn("Could not resume audio context. Exception: " + _0x53ff8c);
            });
          }
          _0x3b9b77();
          var _0x3fe078 = 20;
          while (_0x3f42b1.audioCache.length < _0x3fe078) {
            var _0x4ee69b = new Audio();
            _0x4ee69b.autoplay = false;
            _0x3f42b1.audioCache.push(_0x4ee69b);
          }
        } catch (_0x215e0f) {}
      }
      window.addEventListener("mousedown", _0x1aad59);
      window.addEventListener("touchstart", _0x1aad59);
      _0x13e282.deinitializers.push(function () {
        window.removeEventListener("mousedown", _0x1aad59);
        window.removeEventListener("touchstart", _0x1aad59);
      });
    } catch (_0x4dc9ca) {
      alert("Web Audio API is not supported in this browser");
    }
  }
  function _0x148531(_0x1b7444) {
    var _0x4a5fdc = _0x20d019(null, false);
    _0x3f42b1.audioContext.decodeAudioData(_0x1b7444, function (_0x8cddff) {
      _0x4a5fdc.buffer = _0x8cddff;
    }, function (_0x511161) {
      _0x4a5fdc.error = true;
      console.log("Decode error: " + _0x511161);
    });
    return _0x4a5fdc;
  }
  function _0x51eb48(_0x12e29c, _0x548a4e) {
    _0x3f42b1.pendingAudioSources[_0x12e29c.mediaElement.src] = {
      sourceNode: _0x12e29c,
      offset: _0x548a4e
    };
  }
  function _0x1d3182(_0x197f7f) {
    switch (_0x197f7f) {
      case 13:
        return "audio/mpeg";
      case 20:
        return "audio/wav";
      default:
        return "audio/mp4";
    }
  }
  function _0x54deeb(_0x197ac1, _0x2386fd) {
    var _0x3a5349 = _0x1d3182(_0x2386fd);
    var _0x25e6b7 = new Blob([_0x197ac1], {
      type: _0x3a5349
    });
    var _0x189ddf = {
      url: URL.createObjectURL(_0x25e6b7),
      error: false,
      mediaElement: new Audio()
    };
    _0x189ddf.mediaElement.preload = "metadata";
    _0x189ddf.mediaElement.src = _0x189ddf.url;
    _0x189ddf.release = function () {
      if (!this.mediaElement) {
        return;
      }
      this.mediaElement.src = "";
      URL.revokeObjectURL(this.url);
      delete this.mediaElement;
      delete this.url;
    };
    _0x189ddf.getLength = function () {
      return this.mediaElement.duration * 44100;
    };
    _0x189ddf.getData = function (_0x1ffeab, _0x4ad03f) {
      console.warn("getData() is not supported for compressed sound.");
      return 0;
    };
    _0x189ddf.getNumberOfChannels = function () {
      console.warn("getNumberOfChannels() is not supported for compressed sound.");
      return 0;
    };
    _0x189ddf.getFrequency = function () {
      console.warn("getFrequency() is not supported for compressed sound.");
      return 0;
    };
    _0x189ddf.createSourceNode = function () {
      var _0xc74ea4 = this;
      var _0x1870b5 = _0x3f42b1.audioCache.length ? _0x3f42b1.audioCache.pop() : new Audio();
      _0x1870b5.preload = "metadata";
      _0x1870b5.src = this.url;
      var _0x3f4c78 = _0x3f42b1.audioContext.createMediaElementSource(_0x1870b5);
      Object.defineProperty(_0x3f4c78, "loop", {
        get: function () {
          return _0x3f4c78.mediaElement.loop;
        },
        set: function (_0x3ba905) {
          if (_0x3f4c78.mediaElement.loop !== _0x3ba905) {
            _0x3f4c78.mediaElement.loop = _0x3ba905;
          }
        }
      });
      _0x3f4c78.playbackRate = {};
      Object.defineProperty(_0x3f4c78.playbackRate, "value", {
        get: function () {
          return _0x3f4c78.mediaElement.playbackRate;
        },
        set: function (_0x268aef) {
          if (_0x3f4c78.mediaElement.playbackRate !== _0x268aef) {
            _0x3f4c78.mediaElement.playbackRate = _0x268aef;
          }
        }
      });
      Object.defineProperty(_0x3f4c78, "currentTime", {
        get: function () {
          return _0x3f4c78.mediaElement.currentTime;
        },
        set: function (_0x1c83a7) {
          if (_0x3f4c78.mediaElement.currentTime !== _0x1c83a7) {
            _0x3f4c78.mediaElement.currentTime = _0x1c83a7;
          }
        }
      });
      Object.defineProperty(_0x3f4c78, "mute", {
        get: function () {
          return _0x3f4c78.mediaElement.mute;
        },
        set: function (_0x520721) {
          if (_0x3f4c78.mediaElement.mute !== _0x520721) {
            _0x3f4c78.mediaElement.mute = _0x520721;
          }
        }
      });
      Object.defineProperty(_0x3f4c78, "onended", {
        get: function () {
          return _0x3f4c78.mediaElement.onended;
        },
        set: function (_0x2597f0) {
          _0x3f4c78.mediaElement.onended = _0x2597f0;
        }
      });
      _0x3f4c78.playPromise = null;
      _0x3f4c78.playTimeout = null;
      _0x3f4c78.pauseRequested = false;
      _0x3f4c78.isStopped = false;
      _0x3f4c78._pauseMediaElement = function () {
        if (_0x3f4c78.playPromise || _0x3f4c78.playTimeout) {
          _0x3f4c78.pauseRequested = true;
        } else {
          _0x3f4c78.mediaElement.pause();
        }
      };
      _0x3f4c78._startPlayback = function (_0xa187b) {
        if (_0x3f4c78.playPromise || _0x3f4c78.playTimeout) {
          _0x3f4c78.mediaElement.currentTime = _0xa187b;
          _0x3f4c78.pauseRequested = false;
          return;
        }
        _0x3f4c78.mediaElement.currentTime = _0xa187b;
        _0x3f4c78.playPromise = _0x3f4c78.mediaElement.play();
        if (_0x3f4c78.playPromise) {
          _0x3f4c78.playPromise.then(function () {
            if (_0x3f4c78.pauseRequested) {
              _0x3f4c78.mediaElement.pause();
              _0x3f4c78.pauseRequested = false;
            }
            _0x3f4c78.playPromise = null;
          }).catch(function (_0x570a41) {
            _0x3f4c78.playPromise = null;
            if (_0x570a41.name !== "NotAllowedError") {
              throw _0x570a41;
            }
            _0x51eb48(_0x3f4c78, _0xa187b);
          });
        }
      };
      _0x3f4c78.start = function (_0x1457ef, _0x545f40) {
        if (typeof _0x1457ef === "undefined") {
          _0x1457ef = _0x3f42b1.audioContext.currentTime;
        }
        if (typeof _0x545f40 === "undefined") {
          _0x545f40 = 0;
        }
        var _0x4f3a0c = 4;
        var _0x3bc329 = (_0x1457ef - _0x3f42b1.audioContext.currentTime) * 1000;
        if (_0x3bc329 > _0x4f3a0c) {
          _0x3f4c78.playTimeout = setTimeout(function () {
            _0x3f4c78.playTimeout = null;
            _0x3f4c78._startPlayback(_0x545f40);
          }, _0x3bc329);
        } else {
          _0x3f4c78._startPlayback(_0x545f40);
        }
      };
      _0x3f4c78.stop = function (_0xf511cf) {
        if (typeof _0xf511cf === "undefined") {
          _0xf511cf = _0x3f42b1.audioContext.currentTime;
        }
        var _0x553574 = 4;
        var _0x1240f5 = (_0xf511cf - _0x3f42b1.audioContext.currentTime) * 1000;
        if (_0x1240f5 > _0x553574) {
          setTimeout(function () {
            _0x3f4c78._pauseMediaElement();
            _0x3f4c78.isStopped = true;
          }, _0x1240f5);
        } else {
          _0x3f4c78._pauseMediaElement();
          _0x3f4c78.isStopped = true;
        }
      };
      _0x36a6f1(_0x3f4c78);
      return _0x3f4c78;
    };
    return _0x189ddf;
  }
  function _0x264d57(_0x2dd29e, _0x1c83b6, _0x57c49e, _0x2cc281) {
    if (_0x3f42b1.audioWebEnabled == 0) {
      return 0;
    }
    var _0x3b1052 = _0x353336.buffer.slice(_0x2dd29e, _0x2dd29e + _0x1c83b6);
    if (_0x1c83b6 < 131072) {
      _0x57c49e = 1;
    }
    var _0x55489f;
    if (_0x57c49e) {
      _0x55489f = _0x148531(_0x3b1052);
    } else {
      _0x55489f = _0x54deeb(_0x3b1052, _0x2cc281);
    }
    _0x3f42b1.audioInstances[++_0x3f42b1.audioInstanceIdCounter] = _0x55489f;
    return _0x3f42b1.audioInstanceIdCounter;
  }
  function _0x364334(_0x430bff, _0x244fc1, _0x427eca, _0x1e9144) {
    var _0x1ab52a = _0x3f42b1.audioContext.createBuffer(_0x430bff, _0x244fc1, _0x427eca);
    for (var _0x281dc4 = 0; _0x281dc4 < _0x430bff; _0x281dc4++) {
      var _0x2fb08a = (_0x1e9144 >> 2) + _0x244fc1 * _0x281dc4;
      var _0x1f4c5b = _0x1ab52a.copyToChannel || function (_0x34f5fa, _0x3a371e, _0x2327e8) {
        var _0x2c6ba4 = _0x34f5fa.subarray(0, Math.min(_0x34f5fa.length, this.length - (_0x2327e8 | 0)));
        this.getChannelData(_0x3a371e | 0).set(_0x2c6ba4, _0x2327e8 | 0);
      };
      _0x1f4c5b.apply(_0x1ab52a, [_0x36547e.subarray(_0x2fb08a, _0x2fb08a + _0x244fc1), _0x281dc4, 0]);
    }
    return _0x20d019(_0x1ab52a, false);
  }
  function _0xb4aeec(_0x3cea59, _0x557199, _0x320702, _0x227f13) {
    if (_0x3f42b1.audioWebEnabled == 0) {
      return 0;
    }
    var _0x2acdc1 = _0x364334(_0x3cea59, _0x557199, _0x320702, _0x227f13);
    _0x3f42b1.audioInstances[++_0x3f42b1.audioInstanceIdCounter] = _0x2acdc1;
    return _0x3f42b1.audioInstanceIdCounter;
  }
  function _0x1efaaf(_0x1faa65, _0x51da02, _0x17d211, _0x554f97) {
    if (_0x3f42b1.audioWebEnabled == 0) {
      return;
    }
    _0x1a67f5(_0x51da02, 0);
    var _0x33c0ec = _0x3f42b1.audioInstances[_0x1faa65];
    var _0x4f0f10 = _0x3f42b1.audioInstances[_0x51da02];
    if (!_0x33c0ec) {
      console.log("Trying to play sound which is not loaded.");
      return;
    }
    try {
      _0x4f0f10.playSoundClip(_0x33c0ec, _0x3f42b1.audioContext.currentTime + _0x554f97, _0x17d211);
    } catch (_0x199f14) {
      console.error("playSoundClip error. Exception: " + e);
    }
  }
  function _0x235136(_0x21b147) {
    var _0x67737a = _0x3f42b1.audioInstances[_0x21b147];
    if (_0x67737a) {
      _0x67737a.release();
    }
    delete _0x3f42b1.audioInstances[_0x21b147];
  }
  function _0x519956() {
    if (_0x3f42b1.audioWebEnabled == 0) {
      return;
    }
    if (_0x3f42b1.audioContext.state === "suspended") {
      _0x3f42b1.audioContext.resume().catch(function (_0x466456) {
        console.warn("Could not resume audio context. Exception: " + _0x466456);
      });
    }
  }
  function _0x5b7889(_0xe892f2, _0x8715be) {
    var _0x49f5b9 = _0x3f42b1.audioInstances[_0xe892f2];
    _0x49f5b9.set3D(_0x8715be);
  }
  function _0x404ffe(_0x1cfe12, _0x235ca0, _0x1f5468, _0x590e52, _0x37b3c3, _0x1a2302) {
    if (_0x3f42b1.audioWebEnabled == 0) {
      return;
    }
    _0x1cfe12 = -_0x1cfe12;
    _0x235ca0 = -_0x235ca0;
    _0x1f5468 = -_0x1f5468;
    var _0x89ec02 = _0x3f42b1.audioContext.listener;
    if (_0x89ec02.forwardX) {
      if (_0x89ec02.forwardX.value !== _0x1cfe12) {
        _0x89ec02.forwardX.value = _0x1cfe12;
      }
      if (_0x89ec02.forwardY.value !== _0x235ca0) {
        _0x89ec02.forwardY.value = _0x235ca0;
      }
      if (_0x89ec02.forwardZ.value !== _0x1f5468) {
        _0x89ec02.forwardZ.value = _0x1f5468;
      }
      if (_0x89ec02.upX.value !== _0x590e52) {
        _0x89ec02.upX.value = _0x590e52;
      }
      if (_0x89ec02.upY.value !== _0x37b3c3) {
        _0x89ec02.upY.value = _0x37b3c3;
      }
      if (_0x89ec02.upZ.value !== _0x1a2302) {
        _0x89ec02.upZ.value = _0x1a2302;
      }
    } else if (_0x89ec02._forwardX !== _0x1cfe12 || _0x89ec02._forwardY !== _0x235ca0 || _0x89ec02._forwardZ !== _0x1f5468 || _0x89ec02._upX !== _0x590e52 || _0x89ec02._upY !== _0x37b3c3 || _0x89ec02._upZ !== _0x1a2302) {
      _0x89ec02.setOrientation(_0x1cfe12, _0x235ca0, _0x1f5468, _0x590e52, _0x37b3c3, _0x1a2302);
      _0x89ec02._forwardX = _0x1cfe12;
      _0x89ec02._forwardY = _0x235ca0;
      _0x89ec02._forwardZ = _0x1f5468;
      _0x89ec02._upX = _0x590e52;
      _0x89ec02._upY = _0x37b3c3;
      _0x89ec02._upZ = _0x1a2302;
    }
  }
  function _0x320e85(_0xcce9d0, _0x1f6db0, _0x51203b) {
    if (_0x3f42b1.audioWebEnabled == 0) {
      return;
    }
    var _0x3d5d69 = _0x3f42b1.audioContext.listener;
    if (_0x3d5d69.positionX) {
      if (_0x3d5d69.positionX.value !== _0xcce9d0) {
        _0x3d5d69.positionX.value = _0xcce9d0;
      }
      if (_0x3d5d69.positionY.value !== _0x1f6db0) {
        _0x3d5d69.positionY.value = _0x1f6db0;
      }
      if (_0x3d5d69.positionZ.value !== _0x51203b) {
        _0x3d5d69.positionZ.value = _0x51203b;
      }
    } else if (_0x3d5d69._positionX !== _0xcce9d0 || _0x3d5d69._positionY !== _0x1f6db0 || _0x3d5d69._positionZ !== _0x51203b) {
      _0x3d5d69.setPosition(_0xcce9d0, _0x1f6db0, _0x51203b);
      _0x3d5d69._positionX = _0xcce9d0;
      _0x3d5d69._positionY = _0x1f6db0;
      _0x3d5d69._positionZ = _0x51203b;
    }
  }
  function _0x264d47(_0x3feb67, _0x5b7a35) {
    if (_0x3f42b1.audioWebEnabled == 0) {
      return;
    }
    var _0x365d06 = _0x3f42b1.audioInstances[_0x3feb67];
    _0x365d06.setLoop(_0x5b7a35);
  }
  function _0xf26928(_0x3eac3d, _0x24e3c6, _0x4924a8) {
    if (_0x3f42b1.audioWebEnabled == 0) {
      return;
    }
    var _0x2257d0 = _0x3f42b1.audioInstances[_0x3eac3d];
    _0x2257d0.setLoopPoints(_0x24e3c6, _0x4924a8);
  }
  function _0x5168da(_0x264f95, _0x41fec4) {
    if (_0x3f42b1.audioWebEnabled == 0) {
      return;
    }
    var _0xfb0587 = _0x3f42b1.audioInstances[_0x264f95];
    if (_0x41fec4 != _0xfb0587.isPaused()) {
      if (_0x41fec4) {
        _0xfb0587.pause();
      } else {
        _0xfb0587.resume();
      }
    }
  }
  function _0x59a25c(_0x1bdc63, _0x4454ca) {
    if (_0x3f42b1.audioWebEnabled == 0) {
      return;
    }
    try {
      var _0x3c16e3 = _0x3f42b1.audioInstances[_0x1bdc63];
      _0x3c16e3.setPitch(_0x4454ca);
    } catch (_0xac75e0) {
      console.error("JS_Sound_SetPitch(channel=" + _0x1bdc63 + ", pitch=" + _0x4454ca + ") threw an exception: " + _0xac75e0);
    }
  }
  function _0x2894ea(_0x37a141, _0x23b71c, _0x4a7fc9, _0x5c40ae) {
    if (_0x3f42b1.audioWebEnabled == 0) {
      return;
    }
    var _0x2a2e89 = _0x3f42b1.audioInstances[_0x37a141];
    _0x2a2e89.setPosition(_0x23b71c, _0x4a7fc9, _0x5c40ae);
  }
  function _0x10b405(_0x2c7a68, _0x4ee9c6) {
    if (_0x3f42b1.audioWebEnabled == 0) {
      return;
    }
    try {
      var _0x1c68d8 = _0x3f42b1.audioInstances[_0x2c7a68];
      _0x1c68d8.setVolume(_0x4ee9c6);
    } catch (_0x169d42) {
      console.error("JS_Sound_SetVolume(channel=" + _0x2c7a68 + ", volume=" + _0x4ee9c6 + ") threw an exception: " + _0x169d42);
    }
  }
  function _0x1a67f5(_0x36537b, _0x2c877e) {
    if (_0x3f42b1.audioWebEnabled == 0) {
      return;
    }
    var _0x57f0c5 = _0x3f42b1.audioInstances[_0x36537b];
    _0x57f0c5.stop(_0x2c877e);
  }
  function _0x1f5cef(_0x45dd54, _0x115de2, _0x25c6ed) {
    var _0x17d997 = _0x432dbf(_0x45dd54);
    var _0x5a33e2 = _0x17d997 == "#canvas" ? _0x13e282.canvas : document.querySelector(_0x17d997);
    var _0x4473be = 0;
    var _0x2866da = 0;
    if (_0x5a33e2) {
      var _0x25827e = _0x5a33e2.getBoundingClientRect();
      _0x4473be = _0x25827e.width;
      _0x2866da = _0x25827e.height;
    }
    _0x202918[_0x115de2 >> 3] = _0x4473be;
    _0x202918[_0x25c6ed >> 3] = _0x2866da;
  }
  function _0x4e6e9c(_0x3c9884, _0x20f4bf) {
    if (_0x3c9884) {
      _0x98a294("https://games.1games.io", _0x3c9884, _0x20f4bf);
    }
    return _0x4bdf30("https://games.1games.io");
  }
  function _0x3b837a(_0x293250, _0x264e17) {
    var _0x1c96f1 = _0x13e282.SystemInfo.gpu;
    if (_0x293250) {
      _0x98a294(_0x1c96f1, _0x293250, _0x264e17);
    }
    return _0x4bdf30(_0x1c96f1);
  }
  function _0x19c651() {
    return _0x13e282.matchWebGLToCanvasSize || _0x13e282.matchWebGLToCanvasSize === undefined;
  }
  function _0x22efc8() {
    return _0x353336.length / 1048576;
  }
  function _0x2cbb5f(_0x30d48a, _0x37b24d) {
    var _0x22c71f = _0x13e282.SystemInfo.os + " " + _0x13e282.SystemInfo.osVersion;
    if (_0x30d48a) {
      _0x98a294(_0x22c71f, _0x30d48a, _0x37b24d);
    }
    return _0x4bdf30(_0x22c71f);
  }
  function _0x456810() {
    if (_0x13e282.matchWebGLToCanvasSize == false) {
      return 1;
    } else {
      return _0x13e282.devicePixelRatio || window.devicePixelRatio || 1;
    }
  }
  function _0x3b7583(_0x4356d2, _0x195d1b) {
    _0x202918[_0x4356d2 >> 3] = _0x13e282.SystemInfo.width;
    _0x202918[_0x195d1b >> 3] = _0x13e282.SystemInfo.height;
  }
  function _0x2bf7ba(_0x17d1fd, _0x5d154d) {
    if (_0x17d1fd) {
      _0x98a294(_0x13e282.streamingAssetsUrl, _0x17d1fd, _0x5d154d);
    }
    return _0x4bdf30(_0x13e282.streamingAssetsUrl);
  }
  function _0x5f02c8() {
    var _0x4bac93 = _0xa64359.getExtension("WEBGL_compressed_texture_astc");
    if (_0x4bac93 && _0x4bac93.getSupportedProfiles) {
      return _0x4bac93.getSupportedProfiles().includes("hdr");
    }
    return false;
  }
  function _0x5db62a() {
    return _0x13e282.SystemInfo.hasCursorLock;
  }
  function _0xf0608e() {
    return _0x13e282.SystemInfo.hasFullscreen;
  }
  function _0x381ad1() {
    return _0x13e282.SystemInfo.hasWebGL;
  }
  function _0x152ddc() {
    return !!_0x13e282.shouldQuit;
  }
  var _0x235cb6 = {
    requests: {},
    responses: {},
    abortControllers: {},
    timer: {},
    nextRequestId: 1
  };
  function _0x1531c9(_0x23f5f3) {
    var _0x1c9fa6 = _0x235cb6.abortControllers[_0x23f5f3];
    if (!_0x1c9fa6 || _0x1c9fa6.signal.aborted) {
      return;
    }
    _0x1c9fa6.abort();
  }
  function _0x1db2e6(_0x259784, _0x374596) {
    var _0x4c3d38 = _0x432dbf(_0x259784);
    var _0x31bddb = _0x432dbf(_0x374596);
    var _0x45c34d = new AbortController();
    var _0x2439b8 = {
      url: _0x4c3d38,
      init: {
        method: _0x31bddb,
        signal: _0x45c34d.signal,
        headers: {},
        enableStreamingDownload: true
      },
      tempBuffer: null,
      tempBufferSize: 0
    };
    _0x235cb6.abortControllers[_0x235cb6.nextRequestId] = _0x45c34d;
    _0x235cb6.requests[_0x235cb6.nextRequestId] = _0x2439b8;
    return _0x235cb6.nextRequestId++;
  }
  function _0x804ca7(_0x932345) {
    var _0x35ab6e = _0x235cb6.responses[_0x932345];
    if (!_0x35ab6e) {
      return "";
    }
    if (_0x35ab6e.headerString) {
      return _0x35ab6e.headerString;
    }
    var _0x2b085a = "";
    var _0x4a6a64 = _0x35ab6e.headers.entries();
    for (var _0x131a67 = _0x4a6a64.next(); !_0x131a67.done; _0x131a67 = _0x4a6a64.next()) {
      _0x2b085a += _0x131a67.value[0] + ": " + _0x131a67.value[1] + "\r\n";
    }
    _0x35ab6e.headerString = _0x2b085a;
    return _0x2b085a;
  }
  function _0x5d7be5(_0x111bca, _0xbd6e2a, _0x395146, _0x3d16d5, _0x2462e8) {
    var _0x45d827 = _0x235cb6.responses[_0x111bca];
    if (!_0x45d827) {
      _0x98a294("", _0xbd6e2a, _0x395146);
      _0x98a294("", _0x3d16d5, _0x2462e8);
      return;
    }
    if (_0xbd6e2a) {
      var _0x10580f = _0x804ca7(_0x111bca);
      _0x98a294(_0x10580f, _0xbd6e2a, _0x395146);
    }
    if (_0x3d16d5) {
      _0x98a294(_0x45d827.url, _0x3d16d5, _0x2462e8);
    }
  }
  function _0x5ee323(_0x5c479f, _0x3a99dd) {
    var _0x416b71 = _0x235cb6.responses[_0x5c479f];
    if (!_0x416b71) {
      _0x2a2a43[_0x3a99dd >> 2] = 0;
      _0x2a2a43[(_0x3a99dd >> 2) + 1] = 0;
      return;
    }
    var _0x3e3af9 = _0x804ca7(_0x5c479f);
    _0x2a2a43[_0x3a99dd >> 2] = _0x4bdf30(_0x3e3af9);
    _0x2a2a43[(_0x3a99dd >> 2) + 1] = _0x4bdf30(_0x416b71.url);
  }
  function _0x52a467(_0x15fe4e) {
    if (_0x235cb6.timer[_0x15fe4e]) {
      clearTimeout(_0x235cb6.timer[_0x15fe4e]);
    }
    delete _0x235cb6.requests[_0x15fe4e];
    delete _0x235cb6.responses[_0x15fe4e];
    delete _0x235cb6.abortControllers[_0x15fe4e];
    delete _0x235cb6.timer[_0x15fe4e];
  }
  function _0x52e3fb(_0x851715, _0x20b976, _0x5a2b2b, _0x5b87dd, _0x301dbb, _0xafe62) {
    var _0x2819ae = _0x235cb6.requests[_0x851715];
    var _0x274cc6 = _0x235cb6.abortControllers[_0x851715];
    function _0x380ea7(_0x3f6524) {
      if (!_0x2819ae.tempBuffer) {
        const _0x4408e5 = Math.max(_0x3f6524, 1024);
        _0x2819ae.tempBuffer = _0x45bc34(_0x4408e5);
        _0x2819ae.tempBufferSize = _0x4408e5;
      }
      if (_0x2819ae.tempBufferSize < _0x3f6524) {
        _0x50622a(_0x2819ae.tempBuffer);
        _0x2819ae.tempBuffer = _0x45bc34(_0x3f6524);
        _0x2819ae.tempBufferSize = _0x3f6524;
      }
      return _0x2819ae.tempBuffer;
    }
    function _0x578702() {
      if (_0x235cb6.timer[_0x851715]) {
        clearTimeout(_0x235cb6.timer[_0x851715]);
        delete _0x235cb6.timer[_0x851715];
      }
    }
    function _0x556df0(_0x1c3dae, _0x532ea5) {
      _0x578702();
      if (!_0x301dbb) {
        return;
      }
      var _0x1bff25 = 0;
      if (_0x2819ae.init.enableStreamingDownload) {
        _0x4c0cd9("viiiiii", _0x301dbb, [_0x5b87dd, _0x1c3dae.status, 0, _0x532ea5.length, 0, _0x1bff25]);
      } else if (_0x532ea5.length != 0) {
        var _0x33646f = _0x45bc34(_0x532ea5.length);
        _0x353336.set(_0x532ea5, _0x33646f);
        _0x4c0cd9("viiiiii", _0x301dbb, [_0x5b87dd, _0x1c3dae.status, _0x33646f, _0x532ea5.length, 0, _0x1bff25]);
      } else {
        _0x4c0cd9("viiiiii", _0x301dbb, [_0x5b87dd, _0x1c3dae.status, 0, 0, 0, _0x1bff25]);
      }
      if (_0x2819ae.tempBuffer) {
        _0x50622a(_0x2819ae.tempBuffer);
      }
    }
    function _0x5b8d82(_0x14c9b6, _0x1896e5) {
      _0x578702();
      if (!_0x301dbb) {
        return;
      }
      var _0x180400 = _0x4bdf30(_0x14c9b6) + 1;
      var _0x37f482 = _0x45bc34(_0x180400);
      _0x98a294(_0x14c9b6, _0x37f482, _0x180400);
      _0x4c0cd9("viiiiii", _0x301dbb, [_0x5b87dd, 500, 0, 0, _0x37f482, _0x1896e5]);
      _0x50622a(_0x37f482);
      if (_0x2819ae.tempBuffer) {
        _0x50622a(_0x2819ae.tempBuffer);
      }
    }
    function _0x370b70(_0x472aa0) {
      if (!_0xafe62 || !_0x472aa0.lengthComputable) {
        return;
      }
      var _0x56fba0 = _0x472aa0.response;
      _0x235cb6.responses[_0x851715] = _0x56fba0;
      if (_0x472aa0.chunk) {
        var _0x840d2c = _0x380ea7(_0x472aa0.chunk.length);
        _0x353336.set(_0x472aa0.chunk, _0x840d2c);
        _0x4c0cd9("viiiiii", _0xafe62, [_0x5b87dd, _0x56fba0.status, _0x472aa0.loaded, _0x472aa0.total, _0x840d2c, _0x472aa0.chunk.length]);
      } else {
        _0x4c0cd9("viiiiii", _0xafe62, [_0x5b87dd, _0x56fba0.status, _0x472aa0.loaded, _0x472aa0.total, 0, 0]);
      }
    }
    try {
      if (_0x5a2b2b > 0) {
        var _0x11620e = _0x353336.subarray(_0x20b976, _0x20b976 + _0x5a2b2b);
        _0x2819ae.init.body = new Blob([_0x11620e]);
      }
      if (_0x2819ae.timeout) {
        _0x235cb6.timer[_0x851715] = setTimeout(function () {
          _0x2819ae.isTimedOut = true;
          _0x274cc6.abort();
        }, _0x2819ae.timeout);
      }
      var _0x45f764 = _0x13e282.fetchWithProgress;
      _0x2819ae.init.onProgress = _0x370b70;
      if (_0x13e282.companyName && _0x13e282.productName && _0x13e282.cachedFetch) {
        _0x45f764 = _0x13e282.cachedFetch;
        _0x2819ae.init.companyName = _0x13e282.companyName;
        _0x2819ae.init.productName = _0x13e282.productName;
        _0x2819ae.control = _0x13e282.cacheControl(_0x2819ae.url);
      }
      _0x45f764(_0x2819ae.url, _0x2819ae.init).then(function (_0x248ed3) {
        _0x235cb6.responses[_0x851715] = _0x248ed3;
        _0x556df0(_0x248ed3, _0x248ed3.parsedBody);
      }).catch(function (_0x280c8b) {
        var _0x544465 = 2;
        var _0x41d87a = 17;
        var _0x16b271 = 14;
        if (_0x2819ae.isTimedOut) {
          _0x5b8d82("Connection timed out.", _0x16b271);
        } else if (_0x274cc6.signal.aborted) {
          _0x5b8d82("Aborted.", _0x41d87a);
        } else {
          _0x5b8d82(_0x280c8b.message, _0x544465);
        }
      });
    } catch (_0x3a04fb) {
      var _0x2f0b37 = 2;
      _0x5b8d82(_0x3a04fb.message, _0x2f0b37);
    }
  }
  function _0x2d0273(_0x50cf88, _0x5ac738) {
    var _0x218c3a = _0x235cb6.requests[_0x50cf88];
    if (!_0x218c3a) {
      return;
    }
    _0x218c3a.init.redirect = _0x5ac738 === 0 ? "error" : "follow";
  }
  function _0x1f75bd(_0x126a97, _0x1d80ba, _0xec1ee) {
    var _0x2fba35 = _0x235cb6.requests[_0x126a97];
    if (!_0x2fba35) {
      return;
    }
    var _0x40a23c = _0x432dbf(_0x1d80ba);
    var _0x54a4b2 = _0x432dbf(_0xec1ee);
    _0x2fba35.init.headers[_0x40a23c] = _0x54a4b2;
  }
  function _0x20c330(_0x2c085f, _0x1b4b72) {
    var _0x5827f0 = _0x235cb6.requests[_0x2c085f];
    if (!_0x5827f0) {
      return;
    }
    _0x5827f0.timeout = _0x1b4b72;
  }
  function _0x366e93(_0x4220b3, _0x502569, _0x41ed8e, _0x42fe85) {
    var _0x56d34f = _0x432dbf(_0x4220b3);
    var _0x22d851 = _0x432dbf(_0x502569);
    var _0x1fb00e = _0x432dbf(_0x41ed8e);
    var _0x299565 = _0x432dbf(_0x42fe85);
    try {
      firebase.database().ref(_0x56d34f).on("child_added", function (_0x5bc637) {
        window.unityInstance.SendMessage(_0x22d851, _0x1fb00e, JSON.stringify(_0x5bc637.val()));
      });
    } catch (_0x1f5919) {
      window.unityInstance.SendMessage(_0x22d851, _0x299565, JSON.stringify(_0x1f5919, Object.getOwnPropertyNames(_0x1f5919)));
    }
  }
  function _0x3d3c74(_0x2a3fd8, _0x1e5e36, _0x590f64, _0xd55e48) {
    var _0x37276c = _0x432dbf(_0x2a3fd8);
    var _0xf14338 = _0x432dbf(_0x1e5e36);
    var _0x789ee7 = _0x432dbf(_0x590f64);
    var _0x4867cd = _0x432dbf(_0xd55e48);
    try {
      firebase.database().ref(_0x37276c).on("child_changed", function (_0x1faeee) {
        window.unityInstance.SendMessage(_0xf14338, _0x789ee7, JSON.stringify(_0x1faeee.val()));
      });
    } catch (_0xf18abf) {
      window.unityInstance.SendMessage(_0xf14338, _0x4867cd, JSON.stringify(_0xf18abf, Object.getOwnPropertyNames(_0xf18abf)));
    }
  }
  function _0x129705(_0x3fb2f1, _0x4cc781, _0x14be5a, _0x526269) {
    var _0x35e936 = _0x432dbf(_0x3fb2f1);
    var _0x3b7b72 = _0x432dbf(_0x4cc781);
    var _0x3beaf2 = _0x432dbf(_0x14be5a);
    var _0x3101ca = _0x432dbf(_0x526269);
    try {
      firebase.database().ref(_0x35e936).on("child_removed", function (_0x52bfc1) {
        window.unityInstance.SendMessage(_0x3b7b72, _0x3beaf2, JSON.stringify(_0x52bfc1.val()));
      });
    } catch (_0x12eb08) {
      window.unityInstance.SendMessage(_0x3b7b72, _0x3101ca, JSON.stringify(_0x12eb08, Object.getOwnPropertyNames(_0x12eb08)));
    }
  }
  function _0x22403b(_0x472ce6, _0x4e7f3f, _0x5aecea, _0x178646, _0xf32243) {
    var _0x21fb2d = _0x432dbf(_0x472ce6);
    var _0x22a317 = _0x432dbf(_0x5aecea);
    var _0x42a3a0 = _0x432dbf(_0x178646);
    var _0x94973 = _0x432dbf(_0xf32243);
    try {
      if (typeof firestorelisteners === "undefined") {
        firestorelisteners = {};
      }
      this.firestorelisteners[_0x21fb2d + "/collection/"] = firebase.firestore().collection(_0x21fb2d).onSnapshot({
        includeMetadataChanges: _0x4e7f3f == 1
      }, function (_0x33d1cf) {
        var _0xd1cc21 = {};
        _0x33d1cf.forEach(function (_0x4d7a68) {
          _0xd1cc21[_0x4d7a68.id] = _0x4d7a68.data();
        });
        window.unityInstance.SendMessage(_0x22a317, _0x42a3a0, JSON.stringify(_0xd1cc21));
      }, function (_0x18fa68) {
        window.unityInstance.SendMessage(_0x22a317, _0x94973, JSON.stringify(_0x18fa68, Object.getOwnPropertyNames(_0x18fa68)));
      });
    } catch (_0x198647) {
      window.unityInstance.SendMessage(_0x22a317, _0x94973, JSON.stringify(_0x198647, Object.getOwnPropertyNames(_0x198647)));
    }
  }
  function _0x119a77(_0x19af34, _0x200b7a, _0x2dc4e5, _0x25553b, _0x527302, _0x5c4a74) {
    var _0x17f311 = _0x432dbf(_0x19af34);
    var _0xb7fb96 = _0x432dbf(_0x200b7a);
    var _0x1853e6 = _0x432dbf(_0x25553b);
    var _0x4219d6 = _0x432dbf(_0x527302);
    var _0x129ce9 = _0x432dbf(_0x5c4a74);
    try {
      if (typeof firestorelisteners === "undefined") {
        firestorelisteners = {};
      }
      this.firestorelisteners[_0x17f311 + "/" + _0xb7fb96] = firebase.firestore().collection(_0x17f311).doc(_0xb7fb96).onSnapshot({
        includeMetadataChanges: _0x2dc4e5 == 1
      }, function (_0x33ff87) {
        window.unityInstance.SendMessage(_0x1853e6, _0x4219d6, JSON.stringify(_0x33ff87.data()));
      }, function (_0x25ce96) {
        window.unityInstance.SendMessage(_0x1853e6, _0x129ce9, JSON.stringify(_0x25ce96, Object.getOwnPropertyNames(_0x25ce96)));
      });
    } catch (_0xb05d9f) {
      window.unityInstance.SendMessage(_0x1853e6, _0x129ce9, JSON.stringify(_0xb05d9f, Object.getOwnPropertyNames(_0xb05d9f)));
    }
  }
  function _0x3dd4b2(_0x47b48a, _0x518d60, _0x419e93, _0x5437ab) {
    var _0x571ab2 = _0x432dbf(_0x47b48a);
    var _0x4e8417 = _0x432dbf(_0x518d60);
    var _0x50ac88 = _0x432dbf(_0x419e93);
    var _0x53b9db = _0x432dbf(_0x5437ab);
    try {
      firebase.database().ref(_0x571ab2).on("value", function (_0x1973f2) {
        window.unityInstance.SendMessage(_0x4e8417, _0x50ac88, JSON.stringify(_0x1973f2.val()));
      });
    } catch (_0x3402c5) {
      window.unityInstance.SendMessage(_0x4e8417, _0x53b9db, JSON.stringify(_0x3402c5, Object.getOwnPropertyNames(_0x3402c5)));
    }
  }
  function _0x8ef649(_0x21d57) {
    var _0x5dff17 = _0x432dbf(_0x21d57);
    firebaseLogEvent(_0x5dff17);
  }
  function _0x278938(_0xfe87a7, _0x1cc794) {
    var _0x19fd12 = _0x432dbf(_0xfe87a7);
    var _0x398945 = JSON.parse(_0x432dbf(_0x1cc794));
    firebaseLogEventParameter(_0x19fd12, _0x398945);
  }
  function _0x10bff7(_0x1dcb5f, _0x263bef, _0x566a4d, _0x197131, _0x25620c) {
    var _0x214380 = _0x432dbf(_0x1dcb5f);
    var _0x185b87 = _0x432dbf(_0x566a4d);
    var _0x58ee68 = _0x432dbf(_0x197131);
    var _0x2102ee = _0x432dbf(_0x25620c);
    try {
      firebase.database().ref(_0x214380).transaction(function (_0x33f564) {
        if (!isNaN(_0x33f564)) {
          return _0x33f564 + _0x263bef;
        } else {
          return _0x263bef;
        }
      }).then(function (_0x3d1ae7) {
        window.unityInstance.SendMessage(_0x185b87, _0x58ee68, "Success: transaction run in " + _0x214380);
      });
    } catch (_0xe3adf4) {
      window.unityInstance.SendMessage(_0x185b87, _0x2102ee, JSON.stringify(_0xe3adf4, Object.getOwnPropertyNames(_0xe3adf4)));
    }
  }
  function _0x533129(_0x52f5e0, _0x430c8d, _0x35115) {
    var _0x56169e = _0x432dbf(_0x52f5e0);
    var _0x256ca1 = _0x432dbf(_0x430c8d);
    var _0x3288fe = _0x432dbf(_0x35115);
    firebase.auth().onAuthStateChanged(function (_0x1ae2a6) {
      if (_0x1ae2a6) {
        window.unityInstance.SendMessage(_0x56169e, _0x256ca1, JSON.stringify(_0x1ae2a6));
      } else {
        window.unityInstance.SendMessage(_0x56169e, _0x3288fe, "User signed out");
      }
    });
  }
  function _0x58a3ce() {
    if (!navigator || !navigator.clipboard || !navigator.clipboard.readText) {
      window.unityInstance.SendMessage("UClipboard", "SetClipboardText", "");
      return;
    }
    navigator.clipboard.readText().then(_0x472c03 => {
      window.unityInstance.SendMessage("UClipboard", "SetClipboardText", _0x472c03);
    }).catch(_0x1dc90a => {
      console.error("Failed to read clipboard", _0x1dc90a);
    });
  }
  function _0x249626(_0xbb581f) {
    window.wgUnityInstance = _0x13e282;
    try {
      window[preroll.config.loaderObjectName].log("WGSDK: WeeGoo InGame Ad, pinging.");
      window[preroll.config.loaderObjectName].ping(_0xbb581f);
    } catch (_0x353dc2) {
      console.log("WGSDK: No production WGSDK resources found, loading development resources.");
      var _0x3c880e = document.createElement("script");
      _0x3c880e.addEventListener("load", function (_0x1c08da) {
        var _0x446ec9 = document.createElement("script");
        _0x446ec9.addEventListener("load", function (_0x247184) {
          console.log("WGSDK: Development resources loaded.");
          _0x19aa6b(_0xbb581f, true);
        }.bind(this));
        document.getElementsByTagName("head")[0].appendChild(_0x446ec9);
        _0x446ec9.src = window.GMSOFT_ADS_INFO.wgLibrary;
      }.bind(this));
      document.getElementsByTagName("head")[0].appendChild(_0x3c880e);
      _0x3c880e.src = window.GMSOFT_ADS_INFO.wgConf;
    }
  }
  function _0x19aa6b(_0x4d8d12, _0x4fe848) {
    var _0x5948d6;
    if (_0x4fe848 === true) {
      _0x5948d6 = _0x4d8d12;
    } else {
      _0x5948d6 = _0x432dbf(_0x4d8d12);
    }
    setTimeout(function () {
      _0x249626(_0x5948d6);
    }, 250);
  }
  function _0xf94990(_0x43d9c0, _0x428745, _0x1b5151, _0x519d9b, _0x3c0288) {
    var _0x658014 = _0x432dbf(_0x43d9c0);
    var _0xfaf6f4 = _0x432dbf(_0x428745);
    var _0x29a5b4 = _0x432dbf(_0x1b5151);
    var _0x34b70d = _0x432dbf(_0x519d9b);
    var _0x44f64a = _0x432dbf(_0x3c0288);
    try {
      firebase.database().ref(_0x658014).set(JSON.parse(_0xfaf6f4)).then(function (_0x262cb6) {
        window.unityInstance.SendMessage(_0x29a5b4, _0x34b70d, "Success: " + _0xfaf6f4 + " was posted to " + _0x658014);
      });
    } catch (_0x5e24f7) {
      window.unityInstance.SendMessage(_0x29a5b4, _0x44f64a, JSON.stringify(_0x5e24f7, Object.getOwnPropertyNames(_0x5e24f7)));
    }
  }
  function _0x2f6a8c(_0x2f6ea0, _0xeda898, _0x1b80b7, _0x10eb53, _0x5f4bba) {
    var _0x2376f4 = _0x432dbf(_0x2f6ea0);
    var _0x2d3db4 = _0x432dbf(_0xeda898);
    var _0x18883f = _0x432dbf(_0x1b80b7);
    var _0x5f0323 = _0x432dbf(_0x10eb53);
    var _0x3ee810 = _0x432dbf(_0x5f4bba);
    try {
      firebase.database().ref(_0x2376f4).push().set(JSON.parse(_0x2d3db4)).then(function (_0x89d4fe) {
        window.unityInstance.SendMessage(_0x18883f, _0x5f0323, "Success: " + _0x2d3db4 + " was pushed to " + _0x2376f4);
      });
    } catch (_0x549c86) {
      window.unityInstance.SendMessage(_0x18883f, _0x3ee810, JSON.stringify(_0x549c86, Object.getOwnPropertyNames(_0x549c86)));
    }
  }
  function _0xc40e18() {
    try {
      window[preroll.config.loaderObjectName].log("WGSDK: Refetching reward ad.");
      window[preroll.config.loaderObjectName].rewarded.initSlot.call(window[preroll.config.loaderObjectName]);
    } catch (_0x3bea06) {
      console.log("No WeeGooAFG implementation found!");
    }
  }
  function _0x15ad10() {
    try {
      window[preroll.config.loaderObjectName].log("WGSDK: Game controls registered.");
      window[window.preroll.config.loaderObjectName].registerGameControls(_0x13e282);
    } catch (_0x151361) {
      console.log("WGSDK: Can not register game controls.");
      setTimeout(function () {
        _0x15ad10();
      }, 250);
    }
  }
  function _0x37e5d7() {
    try {
      window[preroll.config.loaderObjectName].log("WGSDK: Reward callbacks registered.");
      window[window.preroll.config.loaderObjectName].registerRewardCallbacks({
        onReady: "OnReadyMethod",
        onSuccess: "OnSuccessMethod",
        onFail: "OnFailMethod"
      });
    } catch (_0x187f60) {
      console.log("WGSDK: Can not register reward ad callbacks.");
      _0x9058a0();
    }
  }
  function _0x9058a0() {
    setTimeout(function () {
      _0x37e5d7();
    }, 250);
  }
  function _0x2e0220(_0x3a1610, _0x45e926, _0x465070, _0x5cf25e, _0x2083e7, _0x5cf5a5, _0x4190e5) {
    var _0x111514 = _0x432dbf(_0x3a1610);
    var _0x37dd9f = _0x432dbf(_0x45e926);
    var _0x4f0c18 = _0x432dbf(_0x465070);
    var _0x4faf3f = _0x432dbf(_0x5cf25e);
    var _0x3ec51c = _0x432dbf(_0x2083e7);
    var _0x14d9bd = _0x432dbf(_0x5cf5a5);
    var _0x1e10e9 = _0x432dbf(_0x4190e5);
    try {
      var _0x5cf25e = {};
      _0x5cf25e[_0x4f0c18] = firebase.firestore.FieldValue.arrayRemove(JSON.parse(_0x4faf3f));
      firebase.firestore().collection(_0x111514).doc(_0x37dd9f).update(_0x5cf25e).then(function () {
        window.unityInstance.SendMessage(_0x3ec51c, _0x14d9bd, "Success: element " + _0x4faf3f + " was removed in " + _0x4f0c18);
      }).catch(function (_0x5beafa) {
        window.unityInstance.SendMessage(_0x3ec51c, _0x1e10e9, JSON.stringify(_0x5beafa, Object.getOwnPropertyNames(_0x5beafa)));
      });
    } catch (_0x3fb522) {
      window.unityInstance.SendMessage(_0x3ec51c, _0x1e10e9, JSON.stringify(_0x3fb522, Object.getOwnPropertyNames(_0x3fb522)));
    }
  }
  function _0x1546c0(_0x279731) {
    var _0x1c892b = window.unityStringify(_0x279731);
    var _0x487c04 = {
      adStarted: function () {
        window.UnitySDK.unlockPointer();
        _0x2c775c("CrazySDKSingleton", "JSLibCallback_AdStarted");
      },
      adFinished: function () {
        window.UnitySDK.lockPointer();
        _0x2c775c("CrazySDKSingleton", "JSLibCallback_AdFinished");
      },
      adError: function (_0x2c1614) {
        _0x2c775c("CrazySDKSingleton", "JSLibCallback_AdError", JSON.stringify(_0x2c1614));
      }
    };
    window.CrazyGames.SDK.ad.requestAd(_0x1c892b, _0x487c04).catch(function (_0x24d810) {
      window.UnitySDK.logError("Error while requesting ad:", _0x24d810);
      _0x2c775c("CrazySDKSingleton", "JSLibCallback_AdError", JSON.stringify({
        code: "unknown",
        message: _0x24d810.message || "Unknown error"
      }));
    });
  }
  function _0x127d35(_0x1da1c6) {
    var _0x2b25c6 = JSON.parse(window.unityStringify(_0x1da1c6));
    try {
      window.CrazyGames.SDK.banner.requestOverlayBanners(_0x2b25c6, function (_0x997a32, _0x119b3c, _0x145647) {});
    } catch (_0x3f1725) {
      window.UnitySDK.logError("Error while requesting banners:", _0x3f1725);
    }
  }
  function _0x1ec4d6(_0x3729d6) {
    var _0x3bf055 = JSON.parse(window.unityStringify(_0x3729d6));
    var _0x3a67be = "";
    try {
      _0x3a67be = window.CrazyGames.SDK.game.inviteLink(_0x3bf055);
    } catch (_0x1f0d52) {
      window.UnitySDK.logError("Error while requesting invite url:", _0x1f0d52);
    }
    var _0x4f97a3 = _0x4bdf30(_0x3a67be) + 1;
    var _0x40cd14 = _0x45bc34(_0x4f97a3);
    _0x98a294(_0x3a67be, _0x40cd14, _0x4f97a3);
    return _0x40cd14;
  }
  function _0x4e7f7e(_0x421eb2) {
    _0x421eb2 = _0x432dbf(_0x421eb2);
    window.GD_OPTIONS = {
      debug: false,
      gameId: _0x421eb2,
      onEvent: function (_0x4803ab) {
        switch (_0x4803ab.name) {
          case "SDK_GAME_START":
            _0x2c775c("GameDistribution", "ResumeGameCallback");
            break;
          case "SDK_GAME_PAUSE":
            _0x2c775c("GameDistribution", "PauseGameCallback");
            break;
          case "SDK_REWARDED_WATCH_COMPLETE":
            _0x2c775c("GameDistribution", "RewardedCompleteCallback");
            break;
          case "SDK_ERROR":
            break;
          default:
            _0x2c775c("GameDistribution", "EventCallback", _0x4803ab.name);
        }
      }
    };
    (function (_0x5c49c9, _0x12543e, _0x32cd43) {
      var _0x3c6b64;
      var _0x5f5f43 = _0x5c49c9.getElementsByTagName(_0x12543e)[0];
      if (_0x5c49c9.getElementById(_0x32cd43)) {
        return;
      }
      _0x3c6b64 = _0x5c49c9.createElement(_0x12543e);
      _0x3c6b64.id = _0x32cd43;
      _0x3c6b64.src = "//html5.api.gamedistribution.com/main.min.js";
      _0x5f5f43.parentNode.insertBefore(_0x3c6b64, _0x5f5f43);
    })(document, "script", "gamedistribution-jssdk");
  }
  function _0xd6e8cc() {
    if (typeof gdsdk !== "undefined" && typeof gdsdk.preloadAd !== "undefined") {
      gdsdk.preloadAd(gdsdk.AdType.Rewarded).then(function (_0x550bc0) {
        _0x2c775c("GameDistribution", "PreloadRewardedVideoCallback", 1);
      }).catch(function (_0x3cc7de) {
        _0x2c775c("GameDistribution", "PreloadRewardedVideoCallback", 0);
      });
    }
  }
  function _0x528ac6(_0x2dcb7f) {
    _0x2dcb7f = _0x432dbf(_0x2dcb7f);
    if (typeof gdsdk !== "undefined" && typeof gdsdk.sendEvent !== "undefined" && typeof _0x2dcb7f !== "undefined") {
      gdsdk.sendEvent(_0x2dcb7f).then(function (_0x192bd0) {
        console.log("Game event post message sent Succesfully...");
      }).catch(function (_0x33851) {
        console.log(_0x33851.message);
      });
    }
  }
  function _0x1a03d9(_0x325696) {
    if (typeof gdsdk !== "undefined" && typeof gdsdk.showAd !== "undefined") {
      _0x325696 = _0x432dbf(_0x325696) || gdsdk.AdType.Interstitial;
      gdsdk.showAd(_0x325696).then(function (_0x475eed) {
        if (_0x325696 === gdsdk.AdType.Rewarded) {
          _0x2c775c("GameDistribution", "RewardedVideoSuccessCallback");
        }
      }).catch(function (_0x24202f) {
        if (_0x325696 === gdsdk.AdType.Rewarded) {
          _0x2c775c("GameDistribution", "RewardedVideoFailureCallback");
        }
      });
    }
  }
  function _0x2014a0(_0x1a6cdd, _0xb03ab6, _0x5f0f02, _0x3ec5d9, _0x468984, _0x5d4e06) {
    var _0x405f30 = _0x432dbf(_0x1a6cdd);
    var _0x2e7751 = _0x432dbf(_0xb03ab6);
    var _0x64c9a9 = _0x432dbf(_0x5f0f02);
    var _0x15755d = _0x432dbf(_0x3ec5d9);
    var _0x5db7e6 = _0x432dbf(_0x468984);
    var _0x3ef22c = _0x432dbf(_0x5d4e06);
    try {
      firebase.firestore().collection(_0x405f30).doc(_0x2e7751).set(JSON.parse(_0x64c9a9)).then(function () {
        window.unityInstance.SendMessage(_0x15755d, _0x5db7e6, "Success: document " + _0x2e7751 + " was set");
      }).catch(function (_0x1a0936) {
        window.unityInstance.SendMessage(_0x15755d, _0x3ef22c, JSON.stringify(_0x1a0936, Object.getOwnPropertyNames(_0x1a0936)));
      });
    } catch (_0x597b8c) {
      window.unityInstance.SendMessage(_0x15755d, _0x3ef22c, JSON.stringify(_0x597b8c, Object.getOwnPropertyNames(_0x597b8c)));
    }
  }
  function _0x3ff141(_0x247457) {
    var _0x3d04f6 = JSON.parse(_0x432dbf(_0x247457));
    firebaseSetUserProperties(_0x3d04f6);
  }
  function _0x3ff6fa() {
    window.CrazyGames.SDK.user.showAccountLinkPrompt().then(function (_0x2e1946) {
      _0x2c775c("CrazySDKSingleton", "JSLibCallback_ShowAccountLinkPrompt", JSON.stringify({
        linkAccountResponseStr: JSON.stringify(_0x2e1946)
      }));
    }).catch(function (_0x109145) {
      _0x2c775c("CrazySDKSingleton", "JSLibCallback_ShowAccountLinkPrompt", JSON.stringify({
        errorJson: JSON.stringify(_0x109145)
      }));
    });
  }
  function _0x2d4fcd() {
    window.CrazyGames.SDK.user.showAuthPrompt().then(function (_0x1eccd4) {
      _0x2c775c("CrazySDKSingleton", "JSLibCallback_ShowAuthPrompt", JSON.stringify({
        userJson: JSON.stringify(_0x1eccd4)
      }));
    }).catch(function (_0x3c9b36) {
      _0x2c775c("CrazySDKSingleton", "JSLibCallback_ShowAuthPrompt", JSON.stringify({
        errorJson: JSON.stringify(_0x3c9b36)
      }));
    });
  }
  function _0x395df1(_0xeb49a3) {
    var _0x143679 = JSON.parse(window.unityStringify(_0xeb49a3));
    var _0x2d469b = "";
    try {
      _0x2d469b = window.CrazyGames.SDK.game.showInviteButton(_0x143679);
    } catch (_0x87e182) {
      window.UnitySDK.logError("Error while showing invite button:", _0x87e182);
    }
    var _0xd80f7c = _0x4bdf30(_0x2d469b) + 1;
    var _0x3f57da = _0x45bc34(_0xd80f7c);
    _0x98a294(_0x2d469b, _0x3f57da, _0xd80f7c);
    return _0x3f57da;
  }
  function _0x370ddf() {
    window[preroll.config.loaderObjectName].showRewardAd();
  }
  function _0x1d9cf9(_0x2a253b, _0x3b64f0, _0x222fe5) {
    var _0xe36ca1 = _0x432dbf(_0x2a253b);
    var _0x457976 = _0x432dbf(_0x3b64f0);
    var _0xb0194c = _0x432dbf(_0x222fe5);
    try {
      firebase.auth().signInAnonymously().then(function (_0xb1b663) {
        window.unityInstance.SendMessage(_0xe36ca1, _0x457976, "Success: signed up for " + _0xb1b663);
      }).catch(function (_0x5209c9) {
        window.unityInstance.SendMessage(_0xe36ca1, _0xb0194c, JSON.stringify(_0x5209c9, Object.getOwnPropertyNames(_0x5209c9)));
      });
    } catch (_0x3f8282) {
      window.unityInstance.SendMessage(_0xe36ca1, _0xb0194c, JSON.stringify(_0x3f8282, Object.getOwnPropertyNames(_0x3f8282)));
    }
  }
  function _0x1baecd(_0x1d02e6, _0x455cfd, _0x15f4e1, _0x480bbd, _0x4cde54) {
    var _0x58571e = _0x432dbf(_0x1d02e6);
    var _0x2f1d79 = _0x432dbf(_0x455cfd);
    var _0x28d546 = _0x432dbf(_0x15f4e1);
    var _0x1ab385 = _0x432dbf(_0x480bbd);
    var _0x551821 = _0x432dbf(_0x4cde54);
    try {
      firebase.auth().signInWithEmailAndPassword(_0x58571e, _0x2f1d79).then(function (_0x520027) {
        window.unityInstance.SendMessage(_0x28d546, _0x1ab385, "Success: signed in for " + _0x58571e);
      }).catch(function (_0x18c37f) {
        window.unityInstance.SendMessage(_0x28d546, _0x551821, JSON.stringify(_0x18c37f, Object.getOwnPropertyNames(_0x18c37f)));
      });
    } catch (_0x483ba1) {
      window.unityInstance.SendMessage(_0x28d546, _0x551821, JSON.stringify(_0x483ba1, Object.getOwnPropertyNames(_0x483ba1)));
    }
  }
  function _0x57e091(_0x19a993, _0xdb299e, _0x382877) {
    var _0x58072b = _0x432dbf(_0x19a993);
    var _0x4dadc4 = _0x432dbf(_0xdb299e);
    var _0x55df96 = _0x432dbf(_0x382877);
    try {
      var _0x1f1dc7 = new firebase.auth.FacebookAuthProvider();
      firebase.auth().signInWithRedirect(_0x1f1dc7).then(function (_0x12b9f0) {
        window.unityInstance.SendMessage(_0x58072b, _0x4dadc4, "Success: signed in with Facebook!");
      }).catch(function (_0x5463ae) {
        window.unityInstance.SendMessage(_0x58072b, _0x55df96, JSON.stringify(_0x5463ae, Object.getOwnPropertyNames(_0x5463ae)));
      });
    } catch (_0x4f0d77) {
      window.unityInstance.SendMessage(_0x58072b, _0x55df96, JSON.stringify(_0x4f0d77, Object.getOwnPropertyNames(_0x4f0d77)));
    }
  }
  function _0x15fe16(_0x33bff4, _0x475483, _0x5ec6da) {
    var _0x30b01d = _0x432dbf(_0x33bff4);
    var _0x37c275 = _0x432dbf(_0x475483);
    var _0x336e08 = _0x432dbf(_0x5ec6da);
    try {
      var _0x12208c = new firebase.auth.GoogleAuthProvider();
      firebase.auth().signInWithRedirect(_0x12208c).then(function (_0x22873f) {
        window.unityInstance.SendMessage(_0x30b01d, _0x37c275, "Success: signed in with Google!");
      }).catch(function (_0x29ed6e) {
        window.unityInstance.SendMessage(_0x30b01d, _0x336e08, JSON.stringify(_0x29ed6e, Object.getOwnPropertyNames(_0x29ed6e)));
      });
    } catch (_0x14fa9a) {
      window.unityInstance.SendMessage(_0x30b01d, _0x336e08, JSON.stringify(_0x14fa9a, Object.getOwnPropertyNames(_0x14fa9a)));
    }
  }
  function _0x2b3639(_0x447cd9, _0x514dc0, _0x535ee3, _0x1ac693) {
    var _0x20d9f9 = _0x432dbf(_0x447cd9);
    var _0x16dbde = _0x432dbf(_0x514dc0);
    var _0x25a935 = _0x432dbf(_0x535ee3);
    var _0x43d094 = _0x432dbf(_0x1ac693);
    try {
      firebase.database().ref(_0x20d9f9).off("child_added");
      window.unityInstance.SendMessage(_0x16dbde, _0x25a935, "Success: listener removed");
    } catch (_0xf401ac) {
      window.unityInstance.SendMessage(_0x16dbde, _0x43d094, JSON.stringify(_0xf401ac, Object.getOwnPropertyNames(_0xf401ac)));
    }
  }
  function _0x196ae1(_0x26106b, _0x577adc, _0x4be1e1, _0xbccc90) {
    var _0xa835e6 = _0x432dbf(_0x26106b);
    var _0xe71a1b = _0x432dbf(_0x577adc);
    var _0xc61304 = _0x432dbf(_0x4be1e1);
    var _0x4bdb65 = _0x432dbf(_0xbccc90);
    try {
      firebase.database().ref(_0xa835e6).off("child_changed");
      window.unityInstance.SendMessage(_0xe71a1b, _0xc61304, "Success: listener removed");
    } catch (_0x1211fa) {
      window.unityInstance.SendMessage(_0xe71a1b, _0x4bdb65, JSON.stringify(_0x1211fa, Object.getOwnPropertyNames(_0x1211fa)));
    }
  }
  function _0x2d072e(_0x4ca73f, _0x4be280, _0x11b41b, _0x544d1e) {
    var _0x29e934 = _0x432dbf(_0x4ca73f);
    var _0x29404e = _0x432dbf(_0x4be280);
    var _0x61d1a6 = _0x432dbf(_0x11b41b);
    var _0x1eed50 = _0x432dbf(_0x544d1e);
    try {
      firebase.database().ref(_0x29e934).off("child_removed");
      window.unityInstance.SendMessage(_0x29404e, _0x61d1a6, "Success: listener removed");
    } catch (_0x224442) {
      window.unityInstance.SendMessage(_0x29404e, _0x1eed50, JSON.stringify(_0x224442, Object.getOwnPropertyNames(_0x224442)));
    }
  }
  function _0x17a4a0(_0x5d7e0d, _0x605131, _0x27ca7b, _0x1adff9) {
    var _0x33dd9d = _0x432dbf(_0x5d7e0d);
    var _0x71437c = _0x432dbf(_0x605131);
    var _0x1fbd1b = _0x432dbf(_0x27ca7b);
    var _0x6ebb2c = _0x432dbf(_0x1adff9);
    try {
      if (typeof firestorelisteners === "undefined") {
        firestorelisteners = {};
      }
      this.firestorelisteners[_0x33dd9d + "/collection/"]();
      window.unityInstance.SendMessage(_0x71437c, _0x1fbd1b, "Success: listener was removed");
    } catch (_0x4f3399) {
      window.unityInstance.SendMessage(_0x71437c, _0x6ebb2c, JSON.stringify(_0x4f3399, Object.getOwnPropertyNames(_0x4f3399)));
    }
  }
  function _0x410531(_0x30175b, _0x19bb44, _0x3604b2, _0x504368, _0x4018a5) {
    var _0x565c56 = _0x432dbf(_0x30175b);
    var _0x12aaaa = _0x432dbf(_0x19bb44);
    var _0x527c53 = _0x432dbf(_0x3604b2);
    var _0x5a00ea = _0x432dbf(_0x504368);
    var _0x22808c = _0x432dbf(_0x4018a5);
    try {
      if (typeof firestorelisteners === "undefined") {
        firestorelisteners = {};
      }
      this.firestorelisteners[_0x565c56 + "/" + _0x12aaaa]();
      window.unityInstance.SendMessage(_0x527c53, _0x5a00ea, "Success: listener was removed");
    } catch (_0x108096) {
      window.unityInstance.SendMessage(_0x527c53, _0x22808c, JSON.stringify(_0x108096, Object.getOwnPropertyNames(_0x108096)));
    }
  }
  function _0x1fea87(_0xd0d433, _0x5da2fc, _0x445958, _0x4668d9) {
    var _0x26ffb9 = _0x432dbf(_0xd0d433);
    var _0x3a11c0 = _0x432dbf(_0x5da2fc);
    var _0x1c159a = _0x432dbf(_0x445958);
    var _0x24000e = _0x432dbf(_0x4668d9);
    try {
      firebase.database().ref(_0x26ffb9).off("value");
      window.unityInstance.SendMessage(_0x3a11c0, _0x1c159a, "Success: listener removed");
    } catch (_0x48b051) {
      window.unityInstance.SendMessage(_0x3a11c0, _0x24000e, JSON.stringify(_0x48b051, Object.getOwnPropertyNames(_0x48b051)));
    }
  }
  function _0x18b6cc() {
    try {
      window.CrazyGames.SDK.data.syncUnityGameData();
    } catch (_0x3ee316) {
      window.UnitySDK.logError("Error while calling syncUnityGameData:", _0x3ee316);
    }
  }
  function _0x437d72(_0x20646b, _0x229436, _0x2ca138, _0x159f67) {
    var _0x21918d = _0x432dbf(_0x20646b);
    var _0x5ca0f3 = _0x432dbf(_0x229436);
    var _0x58a8a9 = _0x432dbf(_0x2ca138);
    var _0x4bf6c2 = _0x432dbf(_0x159f67);
    try {
      firebase.database().ref(_0x21918d).transaction(function (_0xfe3c89) {
        if (typeof _0xfe3c89 === "boolean") {
          return !_0xfe3c89;
        } else {
          return true;
        }
      }).then(function (_0x2c529a) {
        window.unityInstance.SendMessage(_0x5ca0f3, _0x58a8a9, "Success: transaction run in " + _0x21918d);
      });
    } catch (_0x55abc4) {
      window.unityInstance.SendMessage(_0x5ca0f3, _0x4bf6c2, JSON.stringify(_0x55abc4, Object.getOwnPropertyNames(_0x55abc4)));
    }
  }
  function _0x4a73ae(_0x3e49a7, _0x13bdcf, _0x2aa4a3, _0x4b80be, _0x3f7b01, _0x99a8fa) {
    var _0xd129b6 = _0x432dbf(_0x3e49a7);
    var _0x20c83a = _0x432dbf(_0x13bdcf);
    var _0x91a3c2 = _0x432dbf(_0x2aa4a3);
    var _0x1062c0 = _0x432dbf(_0x4b80be);
    var _0x1f20ff = _0x432dbf(_0x3f7b01);
    var _0x1fa498 = _0x432dbf(_0x99a8fa);
    try {
      firebase.firestore().collection(_0xd129b6).doc(_0x20c83a).update(JSON.parse(_0x91a3c2)).then(function () {
        window.unityInstance.SendMessage(_0x1062c0, _0x1f20ff, "Success: document " + _0x20c83a + " was updated");
      }).catch(function (_0x3de50a) {
        window.unityInstance.SendMessage(_0x1062c0, _0x1fa498, JSON.stringify(_0x3de50a, Object.getOwnPropertyNames(_0x3de50a)));
      });
    } catch (_0x529f73) {
      window.unityInstance.SendMessage(_0x1062c0, _0x1fa498, JSON.stringify(_0x529f73, Object.getOwnPropertyNames(_0x529f73)));
    }
  }
  function _0x3e6f52(_0x30e97d, _0x54bbad, _0x35dd49, _0x2c212a, _0x140bdc) {
    var _0x3bf47f = _0x432dbf(_0x30e97d);
    var _0x207ed4 = _0x432dbf(_0x54bbad);
    var _0xa0044f = _0x432dbf(_0x35dd49);
    var _0x5e8928 = _0x432dbf(_0x2c212a);
    var _0x1ff95f = _0x432dbf(_0x140bdc);
    try {
      firebase.database().ref(_0x3bf47f).update(JSON.parse(_0x207ed4)).then(function (_0x431649) {
        window.unityInstance.SendMessage(_0xa0044f, _0x5e8928, "Success: " + _0x207ed4 + " was updated in " + _0x3bf47f);
      });
    } catch (_0x256a69) {
      window.unityInstance.SendMessage(_0xa0044f, _0x1ff95f, JSON.stringify(_0x256a69, Object.getOwnPropertyNames(_0x256a69)));
    }
  }
  function _0x1ce9c2(_0x366790, _0xa3f229, _0xc0915, _0x143542, _0x1b64f4) {
    var _0x415499 = _0x432dbf(_0x366790);
    var _0x17bc67 = _0x432dbf(_0xa3f229);
    var _0x270c91 = _0x432dbf(_0xc0915);
    var _0x3cc194 = _0x432dbf(_0x143542);
    var _0x14a0be = _0x432dbf(_0x1b64f4);
    try {
      firebase.storage().ref(_0x415499).put(_0xfdf8fb(_0x17bc67)).then(function (_0x28bc14) {
        window.unityInstance.SendMessage(_0x270c91, _0x3cc194, "Success: data was posted to " + _0x415499);
      });
    } catch (_0x2169ea) {
      window.unityInstance.SendMessage(_0x270c91, _0x14a0be, JSON.stringify(_0x2169ea, Object.getOwnPropertyNames(_0x2169ea)));
    }
    function _0xfdf8fb(_0x4e0405) {
      var _0x3e9187 = window.atob(_0x4e0405);
      var _0x1c2ee3 = _0x3e9187.length;
      var _0x37d12a = new Uint8Array(_0x1c2ee3);
      for (var _0x233fcc = 0; _0x233fcc < _0x1c2ee3; _0x233fcc++) {
        _0x37d12a[_0x233fcc] = _0x3e9187.charCodeAt(_0x233fcc);
      }
      return _0x37d12a.buffer;
    }
  }
  var _0x516e4b = {
    instances: {},
    lastId: 0,
    onOpen: null,
    onMesssage: null,
    onError: null,
    onClose: null,
    debug: false
  };
  function _0x43b424(_0x2191b4) {
    var _0x1baf0d = _0x432dbf(_0x2191b4);
    var _0x9ff291 = _0x516e4b.lastId++;
    _0x516e4b.instances[_0x9ff291] = {
      url: _0x1baf0d,
      ws: null
    };
    return _0x9ff291;
  }
  function _0x415f6c(_0x188a7d, _0x5814c8, _0x20eee3) {
    var _0x2a7554 = _0x516e4b.instances[_0x188a7d];
    if (!_0x2a7554) {
      return -1;
    }
    if (_0x2a7554.ws === null) {
      return -3;
    }
    if (_0x2a7554.ws.readyState === 2) {
      return -4;
    }
    if (_0x2a7554.ws.readyState === 3) {
      return -5;
    }
    var _0x3fefc5 = _0x20eee3 ? _0x432dbf(_0x20eee3) : undefined;
    try {
      _0x2a7554.ws.close(_0x5814c8, _0x3fefc5);
    } catch (_0x525cf8) {
      return -7;
    }
    return 0;
  }
  function _0x321134(_0x250517) {
    var _0x370fae = _0x516e4b.instances[_0x250517];
    if (!_0x370fae) {
      return -1;
    }
    if (_0x370fae.ws !== null) {
      return -2;
    }
    _0x370fae.ws = new WebSocket(_0x370fae.url);
    _0x370fae.ws.binaryType = "arraybuffer";
    _0x370fae.ws.onopen = function () {
      if (_0x516e4b.debug) {
        console.log("[JSLIB WebSocket] Connected.");
      }
      if (_0x516e4b.onOpen) {
        _0x13e282.dynCall_vi(_0x516e4b.onOpen, _0x250517);
      }
    };
    _0x370fae.ws.onmessage = function (_0x335f26) {
      if (_0x516e4b.debug) {
        console.log("[JSLIB WebSocket] Received message:", _0x335f26.data);
      }
      if (_0x516e4b.onMessage === null) {
        return;
      }
      if (_0x335f26.data instanceof ArrayBuffer) {
        var _0x4e6d11 = new Uint8Array(_0x335f26.data);
        var _0x55d11f = _0x45bc34(_0x4e6d11.length);
        _0x353336.set(_0x4e6d11, _0x55d11f);
        try {
          _0x13e282.dynCall_viii(_0x516e4b.onMessage, _0x250517, _0x55d11f, _0x4e6d11.length);
        } finally {
          _0x50622a(_0x55d11f);
        }
      }
    };
    _0x370fae.ws.onerror = function (_0x18ec48) {
      if (_0x516e4b.debug) {
        console.log("[JSLIB WebSocket] Error occured.");
      }
      if (_0x516e4b.onError) {
        var _0x2db681 = "WebSocket error.";
        var _0x4d152c = _0x4bdf30(_0x2db681);
        var _0x586ecf = _0x45bc34(_0x4d152c + 1);
        _0x98a294(_0x2db681, _0x586ecf, _0x4d152c);
        try {
          _0x13e282.dynCall_vii(_0x516e4b.onError, _0x250517, _0x586ecf);
        } finally {
          _0x50622a(_0x586ecf);
        }
      }
    };
    _0x370fae.ws.onclose = function (_0x1ec5b9) {
      if (_0x516e4b.debug) {
        console.log("[JSLIB WebSocket] Closed.");
      }
      if (_0x516e4b.onClose) {
        _0x13e282.dynCall_vii(_0x516e4b.onClose, _0x250517, _0x1ec5b9.code);
      }
      delete _0x370fae.ws;
    };
    return 0;
  }
  function _0x4422bb(_0x196e65) {
    var _0x42db9a = _0x516e4b.instances[_0x196e65];
    if (!_0x42db9a) {
      return 0;
    }
    if (_0x42db9a.ws !== null && _0x42db9a.ws.readyState < 2) {
      _0x42db9a.ws.close();
    }
    delete _0x516e4b.instances[_0x196e65];
    return 0;
  }
  function _0x81dabf(_0x4ab87c) {
    var _0x402ee6 = _0x516e4b.instances[_0x4ab87c];
    if (!_0x402ee6) {
      return -1;
    }
    if (_0x402ee6.ws) {
      return _0x402ee6.ws.readyState;
    } else {
      return 3;
    }
  }
  function _0x5e681b(_0x599418, _0x4d76fb, _0x3d18a5) {
    var _0x3578e9 = _0x516e4b.instances[_0x599418];
    if (!_0x3578e9) {
      return -1;
    }
    if (_0x3578e9.ws === null) {
      return -3;
    }
    if (_0x3578e9.ws.readyState !== 1) {
      return -6;
    }
    _0x3578e9.ws.send(_0x353336.buffer.slice(_0x4d76fb, _0x4d76fb + _0x3d18a5));
    return 0;
  }
  function _0x426944(_0x2ef120) {
    _0x516e4b.onClose = _0x2ef120;
  }
  function _0xf20014(_0x4de1aa) {
    _0x516e4b.onError = _0x4de1aa;
  }
  function _0x332108(_0x509cd2) {
    _0x516e4b.onMessage = _0x509cd2;
  }
  function _0x400b47(_0x486bf4) {
    _0x516e4b.onOpen = _0x486bf4;
  }
  var _0x15cef5 = {
    requestInstances: {},
    nextRequestId: 1,
    loglevel: 2,
    SendTextToCSharpSide: function (_0xea5990, _0x38ee58, _0x18b4fe) {
      const _0x35a3fb = new TextEncoder();
      const _0x3f22b0 = _0x35a3fb.encode(_0x18b4fe);
      const _0x1d9a93 = function (_0x22f48e, _0x1263d1) {
        return _0x4ba2f4.apply(null, [_0x15cef5.onallocbuffer, _0x22f48e, _0x1263d1]);
      }(_0xea5990, _0x3f22b0.length);
      _0x353336.set(_0x3f22b0, _0x1d9a93);
      (function (_0x4f05cc, _0x5a70bc, _0x2fb6d1) {
        _0x5da989.apply(null, [_0x38ee58, _0x4f05cc, _0x5a70bc, _0x2fb6d1]);
      })(_0xea5990, _0x1d9a93, _0x3f22b0.length);
    },
    GetResponseHeaders: function (_0x314312, _0x370cc5) {
      if (_0x15cef5.loglevel <= 1) {
        console.log("GetResponseHeaders(" + _0x314312 + ")");
      }
      var _0x2e4a00 = "";
      if (document && document.cookie) {
        var _0x301c61 = document.cookie.split(";");
        for (var _0x3f9e0d = 0; _0x3f9e0d < _0x301c61.length; ++_0x3f9e0d) {
          const _0x11f101 = _0x301c61[_0x3f9e0d].trim();
          if (_0x11f101.length > 0) {
            _0x2e4a00 += "Set-Cookie:" + _0x11f101 + "\n";
          }
        }
      }
      const _0x420be4 = _0x15cef5.requestInstances[_0x314312].getAllResponseHeaders().trim().split(/[\r\n]+/);
      _0x420be4.forEach(_0x15fab6 => {
        const _0x40f95c = _0x15fab6.split(": ");
        const _0x2f9ee1 = _0x40f95c.shift();
        const _0x255be3 = _0x40f95c.join(": ");
        if (_0x2f9ee1 !== "content-length") {
          _0x2e4a00 += _0x2f9ee1 + ":" + _0x255be3 + "\n";
        }
      });
      _0x15cef5.SendTextToCSharpSide(_0x314312, _0x370cc5, _0x2e4a00);
    }
  };
  function _0x31f4d6(_0x1ff3b8) {
    if (_0x15cef5.loglevel <= 1) {
      console.log("XHR_Abort(" + _0x1ff3b8 + ")");
    }
    _0x15cef5.requestInstances[_0x1ff3b8].abort();
  }
  function _0x50ff6a(_0x1510c3, _0x9f7852, _0x14da80, _0x446580, _0xb6020c) {
    var _0x411aeb = new URL(_0x432dbf(_0x9f7852));
    var _0x8ea6f6 = _0x432dbf(_0x1510c3);
    if (_0x15cef5.loglevel <= 1) {
      console.log("XHR_Create (" + _0x15cef5.nextRequestId + ", " + _0x8ea6f6 + ", " + _0x411aeb.toString() + ", " + _0xb6020c + ")");
    }
    var _0x105d48 = new XMLHttpRequest();
    if (_0x14da80 && _0x446580) {
      var _0x4188af = _0x432dbf(_0x14da80);
      var _0x18708a = _0x432dbf(_0x446580);
      _0x105d48.withCredentials = true;
      _0x105d48.open(_0x8ea6f6, _0x411aeb.toString(), true, _0x4188af, _0x18708a);
    } else {
      _0x105d48.withCredentials = _0xb6020c;
      _0x105d48.open(_0x8ea6f6, _0x411aeb.toString(), true);
    }
    _0x105d48.responseType = "arraybuffer";
    _0x15cef5.requestInstances[_0x15cef5.nextRequestId] = _0x105d48;
    return _0x15cef5.nextRequestId++;
  }
  function _0x3e2b1f(_0x492e22) {
    if (_0x15cef5.loglevel <= 1) {
      console.log("XHR_Release(" + _0x492e22 + ")");
    }
    delete _0x15cef5.requestInstances[_0x492e22];
  }
  function _0x414d2c(_0x3f2355, _0x8c3803, _0x2458d5) {
    if (_0x15cef5.loglevel <= 1) {
      console.log("XHR_Send(" + _0x3f2355 + ", " + _0x8c3803 + ", " + _0x2458d5 + ")");
    }
    var _0x4e621c = _0x15cef5.requestInstances[_0x3f2355];
    try {
      if (_0x2458d5 > 0) {
        _0x4e621c.send(_0x353336.subarray(_0x8c3803, _0x8c3803 + _0x2458d5));
      } else {
        _0x4e621c.send();
      }
    } catch (_0x2155df) {
      if (_0x15cef5.loglevel <= 4) {
        console.error("XHR_Send(" + _0x3f2355 + "): " + _0x2155df.name + " : " + _0x2155df.message);
      }
    }
  }
  function _0x1d9fa8(_0x2d68b5) {
    _0x15cef5.loglevel = _0x2d68b5;
  }
  function _0x50c36e(_0x430293, _0xc3d74, _0x18034c) {
    if (_0x15cef5.loglevel <= 1) {
      console.log("XHR_SetProgressHandler(" + _0x430293 + ")");
    }
    var _0x353014 = _0x15cef5.requestInstances[_0x430293];
    if (_0x353014) {
      if (_0xc3d74) {
        _0x353014.onprogress = function _0x5bdadd(_0x2db78b) {
          if (_0x15cef5.loglevel <= 1) {
            console.log("XHR_SetProgressHandler download(" + _0x430293 + ", " + _0x2db78b.loaded + ", " + _0x2db78b.total + ")");
          }
          if (_0x2db78b.lengthComputable) {
            (function (_0x1ae266, _0x4e31fd, _0x1d81a5) {
              _0x5da989.apply(null, [_0xc3d74, _0x1ae266, _0x4e31fd, _0x1d81a5]);
            })(_0x430293, _0x2db78b.loaded, _0x2db78b.total);
          }
        };
      }
      if (_0x18034c) {
        _0x353014.upload.addEventListener("progress", function _0x10ee1f(_0x3e2248) {
          if (_0x15cef5.loglevel <= 1) {
            console.log("XHR_SetProgressHandler upload(" + _0x430293 + ", " + _0x3e2248.loaded + ", " + _0x3e2248.total + ")");
          }
          if (_0x3e2248.lengthComputable) {
            (function (_0xf8c951, _0x38bb2b, _0x52bc51) {
              _0x5da989.apply(null, [_0x18034c, _0xf8c951, _0x38bb2b, _0x52bc51]);
            })(_0x430293, _0x3e2248.loaded, _0x3e2248.total);
          }
        }, true);
      }
    }
  }
  function _0x1f55f1(_0x4fb0e4, _0xa1e639, _0x551e27) {
    var _0x2118d6 = _0x432dbf(_0xa1e639);
    var _0x3ad13e = _0x432dbf(_0x551e27);
    if (_0x15cef5.loglevel <= 1) {
      console.log("XHR_SetRequestHeader(" + _0x2118d6 + ", " + _0x3ad13e + ")");
    }
    if (_0x2118d6 != "Cookie") {
      _0x15cef5.requestInstances[_0x4fb0e4].setRequestHeader(_0x2118d6, _0x3ad13e);
    } else {
      var _0x1d533c = _0x3ad13e.split(";");
      for (var _0x3f8048 = 0; _0x3f8048 < _0x1d533c.length; _0x3f8048++) {
        document.cookie = _0x1d533c[_0x3f8048];
      }
    }
  }
  function _0x4ead64(_0x5219ba, _0x4dcb35, _0x5c5d25, _0x4f1adf, _0x38fd8e, _0x19b903, _0x1f58db) {
    if (_0x15cef5.loglevel <= 1) {
      console.log("XHR_SetResponseHandler(" + _0x5219ba + ")");
    }
    _0x15cef5.onallocbuffer = _0x1f58db;
    var _0x1aed43 = _0x15cef5.requestInstances[_0x5219ba];
    _0x1aed43.onreadystatechange = _0x41040d => {
      if (_0x15cef5.loglevel <= 1) {
        console.log(_0x5219ba + " onreadystatechange(" + _0x1aed43.readyState + ")");
      }
      switch (_0x1aed43.readyState) {
        case XMLHttpRequest.UNSENT:
          break;
        case XMLHttpRequest.OPENED:
          break;
        case XMLHttpRequest.HEADERS_RECEIVED:
          {
            _0x15cef5.SendTextToCSharpSide(_0x5219ba, _0x19b903, "HTTP/1.1 " + _0x1aed43.status + " " + _0x1aed43.statusText + "\n");
            _0x15cef5.GetResponseHeaders(_0x5219ba, _0x19b903);
            break;
          }
        case XMLHttpRequest.LOADING:
          break;
        case XMLHttpRequest.DONE:
          break;
      }
    };
    _0x1aed43.onloadstart = _0x4dc5df => {
      if (_0x15cef5.loglevel <= 1) {
        console.log(_0x5219ba + " onloadstart: " + _0x4dc5df);
      }
    };
    _0x1aed43.onload = function _0x536374(_0x4bfe54) {
      if (_0x15cef5.loglevel <= 1) {
        console.log(_0x5219ba + " onload(" + _0x1aed43.status + ", " + _0x1aed43.statusText + ")");
      }
      if (_0x4dcb35) {
        var _0x1770b4 = 0;
        var _0x1998cc = 0;
        if (_0x1aed43.response) {
          var _0x458f97 = _0x1aed43.response;
          _0x1770b4 = _0x458f97.byteLength;
          _0x15cef5.SendTextToCSharpSide(_0x5219ba, _0x19b903, "content-length:" + _0x1770b4 + "\n\n");
          _0x1998cc = function (_0x184496, _0x200ab9) {
            return _0x4ba2f4.apply(null, [_0x1f58db, _0x184496, _0x200ab9]);
          }(_0x5219ba, _0x1770b4);
          var _0x587570 = new Uint8Array(_0x458f97);
          var _0x5e7492 = _0x353336.subarray(_0x1998cc, _0x1998cc + _0x1770b4);
          _0x5e7492.set(_0x587570);
        } else {
          _0x15cef5.SendTextToCSharpSide(_0x5219ba, _0x19b903, "content-length:0\n\n");
        }
        (function (_0x572a01, _0x1f904f, _0x190093) {
          _0x5da989.apply(null, [_0x4dcb35, _0x572a01, _0x1f904f, _0x190093]);
        })(_0x5219ba, _0x1998cc, _0x1770b4);
      }
    };
    if (_0x5c5d25) {
      _0x1aed43.onerror = function _0x2b4de6(_0x338151) {
        function _0x4b9deb(_0x344dde) {
          var _0x53561a = _0x4bdf30(_0x344dde) + 1;
          var _0x11beda = _0x45bc34(_0x53561a);
          _0x152d31(_0x344dde, _0x353336, _0x11beda, _0x53561a);
          (function (_0x53fe5d, _0x204311) {
            _0x2ceb05.apply(null, [_0x5c5d25, _0x53fe5d, _0x204311]);
          })(_0x5219ba, _0x11beda);
          _0x50622a(_0x11beda);
        }
        if (_0x338151.error) {
          _0x4b9deb(_0x338151.error);
        } else {
          _0x4b9deb("Unknown Error! Maybe a CORS porblem?");
        }
      };
    }
    if (_0x4f1adf) {
      _0x1aed43.ontimeout = function _0x18046d(_0x1d383e) {
        (function (_0x193d6b) {
          _0x3455a4.apply(null, [_0x4f1adf, _0x193d6b]);
        })(_0x5219ba);
      };
    }
    if (_0x38fd8e) {
      _0x1aed43.onabort = function _0x21e6c9(_0x22d020) {
        (function (_0xe0c1cd) {
          _0x3455a4.apply(null, [_0x38fd8e, _0xe0c1cd]);
        })(_0x5219ba);
      };
    }
  }
  function _0x20b8fa(_0x3712e6, _0x9ff688) {
    if (_0x15cef5.loglevel <= 1) {
      console.log("XHR_SetTimeout(" + _0x3712e6 + ", " + _0x9ff688 + ")");
    }
    _0x15cef5.requestInstances[_0x3712e6].timeout = _0x9ff688;
  }
  var _0x491f29 = {
    DESTRUCTOR_OFFSET: 0,
    REFCOUNT_OFFSET: 4,
    TYPE_OFFSET: 8,
    CAUGHT_OFFSET: 12,
    RETHROWN_OFFSET: 13,
    SIZE: 16
  };
  function _0x2f4c19(_0x2c0aaf) {
    return _0x45bc34(_0x2c0aaf + _0x491f29.SIZE) + _0x491f29.SIZE;
  }
  function _0x14c4e0(_0x50b5e5) {
    this.excPtr = _0x50b5e5;
    this.ptr = _0x50b5e5 - _0x491f29.SIZE;
    this.set_type = function (_0x436bd9) {
      _0x2c669e[this.ptr + _0x491f29.TYPE_OFFSET >> 2] = _0x436bd9;
    };
    this.get_type = function () {
      return _0x2c669e[this.ptr + _0x491f29.TYPE_OFFSET >> 2];
    };
    this.set_destructor = function (_0x33930b) {
      _0x2c669e[this.ptr + _0x491f29.DESTRUCTOR_OFFSET >> 2] = _0x33930b;
    };
    this.get_destructor = function () {
      return _0x2c669e[this.ptr + _0x491f29.DESTRUCTOR_OFFSET >> 2];
    };
    this.set_refcount = function (_0x5784e7) {
      _0x2c669e[this.ptr + _0x491f29.REFCOUNT_OFFSET >> 2] = _0x5784e7;
    };
    this.set_caught = function (_0x1e047a) {
      _0x1e047a = _0x1e047a ? 1 : 0;
      _0xf9c0a9[this.ptr + _0x491f29.CAUGHT_OFFSET >> 0] = _0x1e047a;
    };
    this.get_caught = function () {
      return _0xf9c0a9[this.ptr + _0x491f29.CAUGHT_OFFSET >> 0] != 0;
    };
    this.set_rethrown = function (_0x42d7de) {
      _0x42d7de = _0x42d7de ? 1 : 0;
      _0xf9c0a9[this.ptr + _0x491f29.RETHROWN_OFFSET >> 0] = _0x42d7de;
    };
    this.get_rethrown = function () {
      return _0xf9c0a9[this.ptr + _0x491f29.RETHROWN_OFFSET >> 0] != 0;
    };
    this.init = function (_0xed7247, _0x422e52) {
      this.set_type(_0xed7247);
      this.set_destructor(_0x422e52);
      this.set_refcount(0);
      this.set_caught(false);
      this.set_rethrown(false);
    };
    this.add_ref = function () {
      var _0x3ee62c = _0x2c669e[this.ptr + _0x491f29.REFCOUNT_OFFSET >> 2];
      _0x2c669e[this.ptr + _0x491f29.REFCOUNT_OFFSET >> 2] = _0x3ee62c + 1;
    };
    this.release_ref = function () {
      var _0x46cf3f = _0x2c669e[this.ptr + _0x491f29.REFCOUNT_OFFSET >> 2];
      _0x2c669e[this.ptr + _0x491f29.REFCOUNT_OFFSET >> 2] = _0x46cf3f - 1;
      return _0x46cf3f === 1;
    };
  }
  function _0x18d2c4(_0x34cb9a) {
    this.free = function () {
      _0x50622a(this.ptr);
      this.ptr = 0;
    };
    this.set_base_ptr = function (_0x5c7cec) {
      _0x2c669e[this.ptr >> 2] = _0x5c7cec;
    };
    this.get_base_ptr = function () {
      return _0x2c669e[this.ptr >> 2];
    };
    this.set_adjusted_ptr = function (_0x401945) {
      var _0x3c9b01 = 4;
      _0x2c669e[this.ptr + _0x3c9b01 >> 2] = _0x401945;
    };
    this.get_adjusted_ptr = function () {
      var _0x2a1b89 = 4;
      return _0x2c669e[this.ptr + _0x2a1b89 >> 2];
    };
    this.get_exception_ptr = function () {
      var _0x4e7aa6 = _0x3dddd1(this.get_exception_info().get_type());
      if (_0x4e7aa6) {
        return _0x2c669e[this.get_base_ptr() >> 2];
      }
      var _0x1a1178 = this.get_adjusted_ptr();
      if (_0x1a1178 !== 0) {
        return _0x1a1178;
      }
      return this.get_base_ptr();
    };
    this.get_exception_info = function () {
      return new _0x14c4e0(this.get_base_ptr());
    };
    if (_0x34cb9a === undefined) {
      this.ptr = _0x45bc34(8);
      this.set_adjusted_ptr(0);
    } else {
      this.ptr = _0x34cb9a;
    }
  }
  var _0x3131b0 = [];
  function _0x217d14(_0x5970dd) {
    _0x5970dd.add_ref();
  }
  var _0x1e23a0 = 0;
  function _0x252b65(_0x59413d) {
    var _0x3ae682 = new _0x18d2c4(_0x59413d);
    var _0x484c71 = _0x3ae682.get_exception_info();
    if (!_0x484c71.get_caught()) {
      _0x484c71.set_caught(true);
      _0x1e23a0--;
    }
    _0x484c71.set_rethrown(false);
    _0x3131b0.push(_0x3ae682);
    _0x217d14(_0x484c71);
    return _0x3ae682.get_exception_ptr();
  }
  var _0x481e6b = 0;
  function _0x1841ad(_0x5e902a) {
    return _0x50622a(new _0x14c4e0(_0x5e902a).ptr);
  }
  function _0x53e5d3(_0x5f719d) {
    if (_0x5f719d.release_ref() && !_0x5f719d.get_rethrown()) {
      var _0x5b982d = _0x5f719d.get_destructor();
      if (_0x5b982d) {
        (function (_0x1bd673) {
          return _0xeafeff.apply(null, [_0x5b982d, _0x1bd673]);
        })(_0x5f719d.excPtr);
      }
      _0x1841ad(_0x5f719d.excPtr);
    }
  }
  function _0x5ee2d2() {
    _0x1cd625(0);
    var _0x29e191 = _0x3131b0.pop();
    _0x53e5d3(_0x29e191.get_exception_info());
    _0x29e191.free();
    _0x481e6b = 0;
  }
  function _0x8eff14(_0x21e4a2) {
    var _0x22e3c7 = new _0x18d2c4(_0x21e4a2);
    var _0x1d961e = _0x22e3c7.get_base_ptr();
    if (!_0x481e6b) {
      _0x481e6b = _0x1d961e;
    }
    _0x22e3c7.free();
    throw _0x1d961e;
  }
  function _0x2354a7() {
    var _0x47fc6a = _0x481e6b;
    if (!_0x47fc6a) {
      _0x3d1c24(0);
      return 0;
    }
    var _0x128ddc = new _0x14c4e0(_0x47fc6a);
    var _0x35a5c5 = _0x128ddc.get_type();
    var _0x24b56b = new _0x18d2c4();
    _0x24b56b.set_base_ptr(_0x47fc6a);
    if (!_0x35a5c5) {
      _0x3d1c24(0);
      return _0x24b56b.ptr | 0;
    }
    var _0xf9b15b = Array.prototype.slice.call(arguments);
    var _0x5454f4 = _0x5b9f35();
    var _0x2406bb = _0x105630(4);
    _0x2c669e[_0x2406bb >> 2] = _0x47fc6a;
    for (var _0x2e79fc = 0; _0x2e79fc < _0xf9b15b.length; _0x2e79fc++) {
      var _0x388e4b = _0xf9b15b[_0x2e79fc];
      if (_0x388e4b === 0 || _0x388e4b === _0x35a5c5) {
        break;
      }
      if (_0x227bdb(_0x388e4b, _0x35a5c5, _0x2406bb)) {
        var _0x59df8b = _0x2c669e[_0x2406bb >> 2];
        if (_0x47fc6a !== _0x59df8b) {
          _0x24b56b.set_adjusted_ptr(_0x59df8b);
        }
        _0x3d1c24(_0x388e4b);
        return _0x24b56b.ptr | 0;
      }
    }
    _0x50a678(_0x5454f4);
    _0x3d1c24(_0x35a5c5);
    return _0x24b56b.ptr | 0;
  }
  function _0x48f584() {
    var _0x211a94 = _0x481e6b;
    if (!_0x211a94) {
      _0x3d1c24(0);
      return 0;
    }
    var _0x96c95c = new _0x14c4e0(_0x211a94);
    var _0x4cb244 = _0x96c95c.get_type();
    var _0x41fe4e = new _0x18d2c4();
    _0x41fe4e.set_base_ptr(_0x211a94);
    if (!_0x4cb244) {
      _0x3d1c24(0);
      return _0x41fe4e.ptr | 0;
    }
    var _0x4352db = Array.prototype.slice.call(arguments);
    var _0xf8b114 = _0x5b9f35();
    var _0xa467aa = _0x105630(4);
    _0x2c669e[_0xa467aa >> 2] = _0x211a94;
    for (var _0x185355 = 0; _0x185355 < _0x4352db.length; _0x185355++) {
      var _0xe493db = _0x4352db[_0x185355];
      if (_0xe493db === 0 || _0xe493db === _0x4cb244) {
        break;
      }
      if (_0x227bdb(_0xe493db, _0x4cb244, _0xa467aa)) {
        var _0x2888ba = _0x2c669e[_0xa467aa >> 2];
        if (_0x211a94 !== _0x2888ba) {
          _0x41fe4e.set_adjusted_ptr(_0x2888ba);
        }
        _0x3d1c24(_0xe493db);
        return _0x41fe4e.ptr | 0;
      }
    }
    _0x50a678(_0xf8b114);
    _0x3d1c24(_0x4cb244);
    return _0x41fe4e.ptr | 0;
  }
  function _0xe083b0() {
    var _0x1579fa = _0x481e6b;
    if (!_0x1579fa) {
      _0x3d1c24(0);
      return 0;
    }
    var _0x200b52 = new _0x14c4e0(_0x1579fa);
    var _0x43fe3d = _0x200b52.get_type();
    var _0x2f8c68 = new _0x18d2c4();
    _0x2f8c68.set_base_ptr(_0x1579fa);
    if (!_0x43fe3d) {
      _0x3d1c24(0);
      return _0x2f8c68.ptr | 0;
    }
    var _0x23d381 = Array.prototype.slice.call(arguments);
    var _0x5a8990 = _0x5b9f35();
    var _0x1b1ba7 = _0x105630(4);
    _0x2c669e[_0x1b1ba7 >> 2] = _0x1579fa;
    for (var _0x51acc6 = 0; _0x51acc6 < _0x23d381.length; _0x51acc6++) {
      var _0x58a390 = _0x23d381[_0x51acc6];
      if (_0x58a390 === 0 || _0x58a390 === _0x43fe3d) {
        break;
      }
      if (_0x227bdb(_0x58a390, _0x43fe3d, _0x1b1ba7)) {
        var _0x47605a = _0x2c669e[_0x1b1ba7 >> 2];
        if (_0x1579fa !== _0x47605a) {
          _0x2f8c68.set_adjusted_ptr(_0x47605a);
        }
        _0x3d1c24(_0x58a390);
        return _0x2f8c68.ptr | 0;
      }
    }
    _0x50a678(_0x5a8990);
    _0x3d1c24(_0x43fe3d);
    return _0x2f8c68.ptr | 0;
  }
  function _0x5af045() {
    var _0x3e964d = _0x3131b0.pop();
    if (!_0x3e964d) {
      _0x2f2f3c("no exception to throw");
    }
    var _0x445967 = _0x3e964d.get_exception_info();
    var _0x44c256 = _0x3e964d.get_base_ptr();
    if (!_0x445967.get_rethrown()) {
      _0x3131b0.push(_0x3e964d);
      _0x445967.set_rethrown(true);
      _0x445967.set_caught(false);
      _0x1e23a0++;
    } else {
      _0x3e964d.free();
    }
    _0x481e6b = _0x44c256;
    throw _0x44c256;
  }
  function _0x4adbc2(_0xd5a028, _0x381372, _0x4187fd) {
    var _0x468ecd = new _0x14c4e0(_0xd5a028);
    _0x468ecd.init(_0x381372, _0x4187fd);
    _0x481e6b = _0xd5a028;
    _0x1e23a0++;
    throw _0xd5a028;
  }
  function _0x42d03d(_0x5f4e47, _0x25dfa7) {
    var _0x256cbe = new Date(_0x2c669e[_0x5f4e47 >> 2] * 1000);
    _0x2c669e[_0x25dfa7 >> 2] = _0x256cbe.getUTCSeconds();
    _0x2c669e[_0x25dfa7 + 4 >> 2] = _0x256cbe.getUTCMinutes();
    _0x2c669e[_0x25dfa7 + 8 >> 2] = _0x256cbe.getUTCHours();
    _0x2c669e[_0x25dfa7 + 12 >> 2] = _0x256cbe.getUTCDate();
    _0x2c669e[_0x25dfa7 + 16 >> 2] = _0x256cbe.getUTCMonth();
    _0x2c669e[_0x25dfa7 + 20 >> 2] = _0x256cbe.getUTCFullYear() - 1900;
    _0x2c669e[_0x25dfa7 + 24 >> 2] = _0x256cbe.getUTCDay();
    _0x2c669e[_0x25dfa7 + 36 >> 2] = 0;
    _0x2c669e[_0x25dfa7 + 32 >> 2] = 0;
    var _0xcc2322 = Date.UTC(_0x256cbe.getUTCFullYear(), 0, 1, 0, 0, 0, 0);
    var _0x22b5d6 = (_0x256cbe.getTime() - _0xcc2322) / 86400000 | 0;
    _0x2c669e[_0x25dfa7 + 28 >> 2] = _0x22b5d6;
    if (!_0x42d03d.GMTString) {
      _0x42d03d.GMTString = _0x194a76("GMT");
    }
    _0x2c669e[_0x25dfa7 + 40 >> 2] = _0x42d03d.GMTString;
    return _0x25dfa7;
  }
  function _0x40aa1c(_0x405808, _0x5eae93) {
    return _0x42d03d(_0x405808, _0x5eae93);
  }
  function _0x58a30c() {
    if (_0x58a30c.called) {
      return;
    }
    _0x58a30c.called = true;
    var _0x11659d = new Date().getFullYear();
    var _0x535bcf = new Date(_0x11659d, 0, 1);
    var _0x3dbb57 = new Date(_0x11659d, 6, 1);
    var _0x251d60 = _0x535bcf.getTimezoneOffset();
    var _0x106dc1 = _0x3dbb57.getTimezoneOffset();
    var _0x43d01d = Math.max(_0x251d60, _0x106dc1);
    _0x2c669e[_0x232257() >> 2] = _0x43d01d * 60;
    _0x2c669e[_0x7ed08e() >> 2] = Number(_0x251d60 != _0x106dc1);
    function _0x2adce7(_0x649679) {
      var _0x2e61c2 = _0x649679.toTimeString().match(/\(([A-Za-z ]+)\)$/);
      if (_0x2e61c2) {
        return _0x2e61c2[1];
      } else {
        return "GMT";
      }
    }
    var _0x5a8ee2 = _0x2adce7(_0x535bcf);
    var _0x44fd6e = _0x2adce7(_0x3dbb57);
    var _0x11ed23 = _0x194a76(_0x5a8ee2);
    var _0x3518f7 = _0x194a76(_0x44fd6e);
    if (_0x106dc1 < _0x251d60) {
      _0x2c669e[_0x53593a() >> 2] = _0x11ed23;
      _0x2c669e[_0x53593a() + 4 >> 2] = _0x3518f7;
    } else {
      _0x2c669e[_0x53593a() >> 2] = _0x3518f7;
      _0x2c669e[_0x53593a() + 4 >> 2] = _0x11ed23;
    }
  }
  function _0x1024db(_0x42b125, _0x509694) {
    _0x58a30c();
    var _0x4235a3 = new Date(_0x2c669e[_0x42b125 >> 2] * 1000);
    _0x2c669e[_0x509694 >> 2] = _0x4235a3.getSeconds();
    _0x2c669e[_0x509694 + 4 >> 2] = _0x4235a3.getMinutes();
    _0x2c669e[_0x509694 + 8 >> 2] = _0x4235a3.getHours();
    _0x2c669e[_0x509694 + 12 >> 2] = _0x4235a3.getDate();
    _0x2c669e[_0x509694 + 16 >> 2] = _0x4235a3.getMonth();
    _0x2c669e[_0x509694 + 20 >> 2] = _0x4235a3.getFullYear() - 1900;
    _0x2c669e[_0x509694 + 24 >> 2] = _0x4235a3.getDay();
    var _0x41a7db = new Date(_0x4235a3.getFullYear(), 0, 1);
    var _0xca9605 = (_0x4235a3.getTime() - _0x41a7db.getTime()) / 86400000 | 0;
    _0x2c669e[_0x509694 + 28 >> 2] = _0xca9605;
    _0x2c669e[_0x509694 + 36 >> 2] = -(_0x4235a3.getTimezoneOffset() * 60);
    var _0x232b2d = new Date(_0x4235a3.getFullYear(), 6, 1).getTimezoneOffset();
    var _0x568da4 = _0x41a7db.getTimezoneOffset();
    var _0x3c8088 = (_0x232b2d != _0x568da4 && _0x4235a3.getTimezoneOffset() == Math.min(_0x568da4, _0x232b2d)) | 0;
    _0x2c669e[_0x509694 + 32 >> 2] = _0x3c8088;
    var _0x17a3a5 = _0x2c669e[_0x53593a() + (_0x3c8088 ? 4 : 0) >> 2];
    _0x2c669e[_0x509694 + 40 >> 2] = _0x17a3a5;
    return _0x509694;
  }
  function _0x47262c(_0x12b61a, _0x9b8fef) {
    return _0x1024db(_0x12b61a, _0x9b8fef);
  }
  var _0x489cfe = {
    splitPath: function (_0x2467f4) {
      var _0x3a03e3 = /^(\/?|)([\s\S]*?)((?:\.{1,2}|[^\/]+?|)(\.[^.\/]*|))(?:[\/]*)$/;
      return _0x3a03e3.exec(_0x2467f4).slice(1);
    },
    normalizeArray: function (_0x13930a, _0x4b479e) {
      var _0x254922 = 0;
      for (var _0x5c5355 = _0x13930a.length - 1; _0x5c5355 >= 0; _0x5c5355--) {
        var _0x1eaea9 = _0x13930a[_0x5c5355];
        if (_0x1eaea9 === ".") {
          _0x13930a.splice(_0x5c5355, 1);
        } else if (_0x1eaea9 === "..") {
          _0x13930a.splice(_0x5c5355, 1);
          _0x254922++;
        } else if (_0x254922) {
          _0x13930a.splice(_0x5c5355, 1);
          _0x254922--;
        }
      }
      if (_0x4b479e) {
        for (; _0x254922; _0x254922--) {
          _0x13930a.unshift("..");
        }
      }
      return _0x13930a;
    },
    normalize: function (_0x314aa6) {
      var _0x4db70f = _0x314aa6.charAt(0) === "/";
      var _0x1f4de2 = _0x314aa6.substr(-1) === "/";
      _0x314aa6 = _0x489cfe.normalizeArray(_0x314aa6.split("/").filter(function (_0x193496) {
        return !!_0x193496;
      }), !_0x4db70f).join("/");
      if (!_0x314aa6 && !_0x4db70f) {
        _0x314aa6 = ".";
      }
      if (_0x314aa6 && _0x1f4de2) {
        _0x314aa6 += "/";
      }
      return (_0x4db70f ? "/" : "") + _0x314aa6;
    },
    dirname: function (_0x803cfa) {
      var _0x3beb38 = _0x489cfe.splitPath(_0x803cfa);
      var _0xc09fcb = _0x3beb38[0];
      var _0x1f9438 = _0x3beb38[1];
      if (!_0xc09fcb && !_0x1f9438) {
        return ".";
      }
      _0x1f9438 &&= _0x1f9438.substr(0, _0x1f9438.length - 1);
      return _0xc09fcb + _0x1f9438;
    },
    basename: function (_0x2e2151) {
      if (_0x2e2151 === "/") {
        return "/";
      }
      _0x2e2151 = _0x489cfe.normalize(_0x2e2151);
      _0x2e2151 = _0x2e2151.replace(/\/$/, "");
      var _0x42ddc8 = _0x2e2151.lastIndexOf("/");
      if (_0x42ddc8 === -1) {
        return _0x2e2151;
      }
      return _0x2e2151.substr(_0x42ddc8 + 1);
    },
    extname: function (_0xa119ca) {
      return _0x489cfe.splitPath(_0xa119ca)[3];
    },
    join: function () {
      var _0xfe684f = Array.prototype.slice.call(arguments, 0);
      return _0x489cfe.normalize(_0xfe684f.join("/"));
    },
    join2: function (_0xacd00, _0x16b78d) {
      return _0x489cfe.normalize(_0xacd00 + "/" + _0x16b78d);
    }
  };
  function _0xd123eb() {
    if (typeof crypto === "object" && typeof crypto.getRandomValues === "function") {
      var _0x57fd1b = new Uint8Array(1);
      return function () {
        crypto.getRandomValues(_0x57fd1b);
        return _0x57fd1b[0];
      };
    } else if (_0x13d661) {
      try {
        var _0x16ef04 = require("crypto");
        return function () {
          return _0x16ef04.randomBytes(1)[0];
        };
      } catch (_0x289079) {}
    }
    return function () {
      _0x2f2f3c("randomDevice");
    };
  }
  var _0x2cea56 = {
    resolve: function () {
      var _0xaba8f1 = "";
      var _0x540285 = false;
      for (var _0x2f80b1 = arguments.length - 1; _0x2f80b1 >= -1 && !_0x540285; _0x2f80b1--) {
        var _0x5218c8 = _0x2f80b1 >= 0 ? arguments[_0x2f80b1] : _0x1f58b9.cwd();
        if (typeof _0x5218c8 !== "string") {
          throw new TypeError("Arguments to path.resolve must be strings");
        } else if (!_0x5218c8) {
          return "";
        }
        _0xaba8f1 = _0x5218c8 + "/" + _0xaba8f1;
        _0x540285 = _0x5218c8.charAt(0) === "/";
      }
      _0xaba8f1 = _0x489cfe.normalizeArray(_0xaba8f1.split("/").filter(function (_0x4ae48d) {
        return !!_0x4ae48d;
      }), !_0x540285).join("/");
      return (_0x540285 ? "/" : "") + _0xaba8f1 || ".";
    },
    relative: function (_0x16b83e, _0x367ab6) {
      _0x16b83e = _0x2cea56.resolve(_0x16b83e).substr(1);
      _0x367ab6 = _0x2cea56.resolve(_0x367ab6).substr(1);
      function _0x17f426(_0x1d317f) {
        var _0x209015 = 0;
        for (; _0x209015 < _0x1d317f.length; _0x209015++) {
          if (_0x1d317f[_0x209015] !== "") {
            break;
          }
        }
        var _0x82f322 = _0x1d317f.length - 1;
        for (; _0x82f322 >= 0; _0x82f322--) {
          if (_0x1d317f[_0x82f322] !== "") {
            break;
          }
        }
        if (_0x209015 > _0x82f322) {
          return [];
        }
        return _0x1d317f.slice(_0x209015, _0x82f322 - _0x209015 + 1);
      }
      var _0xe1c0f6 = _0x17f426(_0x16b83e.split("/"));
      var _0x42114c = _0x17f426(_0x367ab6.split("/"));
      var _0x8e6666 = Math.min(_0xe1c0f6.length, _0x42114c.length);
      var _0x3cf078 = _0x8e6666;
      for (var _0x25eca3 = 0; _0x25eca3 < _0x8e6666; _0x25eca3++) {
        if (_0xe1c0f6[_0x25eca3] !== _0x42114c[_0x25eca3]) {
          _0x3cf078 = _0x25eca3;
          break;
        }
      }
      var _0xd8096c = [];
      for (var _0x25eca3 = _0x3cf078; _0x25eca3 < _0xe1c0f6.length; _0x25eca3++) {
        _0xd8096c.push("..");
      }
      _0xd8096c = _0xd8096c.concat(_0x42114c.slice(_0x3cf078));
      return _0xd8096c.join("/");
    }
  };
  var _0x37938c = {
    ttys: [],
    init: function () {},
    shutdown: function () {},
    register: function (_0x461bb6, _0x32df67) {
      _0x37938c.ttys[_0x461bb6] = {
        input: [],
        output: [],
        ops: _0x32df67
      };
      _0x1f58b9.registerDevice(_0x461bb6, _0x37938c.stream_ops);
    },
    stream_ops: {
      open: function (_0xe7d497) {
        var _0x15d518 = _0x37938c.ttys[_0xe7d497.node.rdev];
        if (!_0x15d518) {
          throw new _0x1f58b9.ErrnoError(43);
        }
        _0xe7d497.tty = _0x15d518;
        _0xe7d497.seekable = false;
      },
      close: function (_0x4f97c1) {
        _0x4f97c1.tty.ops.flush(_0x4f97c1.tty);
      },
      flush: function (_0x10d935) {
        _0x10d935.tty.ops.flush(_0x10d935.tty);
      },
      read: function (_0x17f7a9, _0xda2a07, _0x8562ec, _0x32fe83, _0x2bd987) {
        if (!_0x17f7a9.tty || !_0x17f7a9.tty.ops.get_char) {
          throw new _0x1f58b9.ErrnoError(60);
        }
        var _0x355261 = 0;
        for (var _0xddd513 = 0; _0xddd513 < _0x32fe83; _0xddd513++) {
          var _0x48a6b9;
          try {
            _0x48a6b9 = _0x17f7a9.tty.ops.get_char(_0x17f7a9.tty);
          } catch (_0x4ed770) {
            throw new _0x1f58b9.ErrnoError(29);
          }
          if (_0x48a6b9 === undefined && _0x355261 === 0) {
            throw new _0x1f58b9.ErrnoError(6);
          }
          if (_0x48a6b9 === null || _0x48a6b9 === undefined) {
            break;
          }
          _0x355261++;
          _0xda2a07[_0x8562ec + _0xddd513] = _0x48a6b9;
        }
        if (_0x355261) {
          _0x17f7a9.node.timestamp = Date.now();
        }
        return _0x355261;
      },
      write: function (_0x160f36, _0x376dbf, _0x27028d, _0x5cad03, _0x58be51) {
        if (!_0x160f36.tty || !_0x160f36.tty.ops.put_char) {
          throw new _0x1f58b9.ErrnoError(60);
        }
        try {
          for (var _0x515f37 = 0; _0x515f37 < _0x5cad03; _0x515f37++) {
            _0x160f36.tty.ops.put_char(_0x160f36.tty, _0x376dbf[_0x27028d + _0x515f37]);
          }
        } catch (_0x581c0d) {
          throw new _0x1f58b9.ErrnoError(29);
        }
        if (_0x5cad03) {
          _0x160f36.node.timestamp = Date.now();
        }
        return _0x515f37;
      }
    },
    default_tty_ops: {
      get_char: function (_0x20c99d) {
        if (!_0x20c99d.input.length) {
          var _0x56ba1b = null;
          if (_0x13d661) {
            var _0x1231ec = 256;
            var _0x22d596 = Buffer.alloc ? Buffer.alloc(_0x1231ec) : new Buffer(_0x1231ec);
            var _0x2ef75f = 0;
            try {
              _0x2ef75f = _0x5d2304.readSync(process.stdin.fd, _0x22d596, 0, _0x1231ec, null);
            } catch (_0x17ab29) {
              if (_0x17ab29.toString().includes("EOF")) {
                _0x2ef75f = 0;
              } else {
                throw _0x17ab29;
              }
            }
            if (_0x2ef75f > 0) {
              _0x56ba1b = _0x22d596.slice(0, _0x2ef75f).toString("utf-8");
            } else {
              _0x56ba1b = null;
            }
          } else if (typeof window != "undefined" && typeof window.prompt == "function") {
            _0x56ba1b = window.prompt("Input: ");
            if (_0x56ba1b !== null) {
              _0x56ba1b += "\n";
            }
          } else if (typeof readline == "function") {
            _0x56ba1b = readline();
            if (_0x56ba1b !== null) {
              _0x56ba1b += "\n";
            }
          }
          if (!_0x56ba1b) {
            return null;
          }
          _0x20c99d.input = _0x5dcb19(_0x56ba1b, true);
        }
        return _0x20c99d.input.shift();
      },
      put_char: function (_0x1c2370, _0x2eef8b) {
        if (_0x2eef8b === null || _0x2eef8b === 10) {
          _0x1b619b(_0x39bfc1(_0x1c2370.output, 0));
          _0x1c2370.output = [];
        } else if (_0x2eef8b != 0) {
          _0x1c2370.output.push(_0x2eef8b);
        }
      },
      flush: function (_0x553f4d) {
        if (_0x553f4d.output && _0x553f4d.output.length > 0) {
          _0x1b619b(_0x39bfc1(_0x553f4d.output, 0));
          _0x553f4d.output = [];
        }
      }
    },
    default_tty1_ops: {
      put_char: function (_0x1f6c8a, _0x5bb223) {
        if (_0x5bb223 === null || _0x5bb223 === 10) {
          _0x500e9(_0x39bfc1(_0x1f6c8a.output, 0));
          _0x1f6c8a.output = [];
        } else if (_0x5bb223 != 0) {
          _0x1f6c8a.output.push(_0x5bb223);
        }
      },
      flush: function (_0x5b1d66) {
        if (_0x5b1d66.output && _0x5b1d66.output.length > 0) {
          _0x500e9(_0x39bfc1(_0x5b1d66.output, 0));
          _0x5b1d66.output = [];
        }
      }
    }
  };
  function _0x1abe6e(_0x349e62) {
    var _0x5be6e9 = _0x498e05(_0x349e62, 65536);
    var _0x526b00 = _0x45bc34(_0x5be6e9);
    while (_0x349e62 < _0x5be6e9) {
      _0xf9c0a9[_0x526b00 + _0x349e62++] = 0;
    }
    return _0x526b00;
  }
  var _0x2830a1 = {
    ops_table: null,
    mount: function (_0x21b660) {
      return _0x2830a1.createNode(null, "/", 16895, 0);
    },
    createNode: function (_0x35c102, _0x5ecd0e, _0x5d082f, _0x36fc5b) {
      if (_0x1f58b9.isBlkdev(_0x5d082f) || _0x1f58b9.isFIFO(_0x5d082f)) {
        throw new _0x1f58b9.ErrnoError(63);
      }
      if (!_0x2830a1.ops_table) {
        _0x2830a1.ops_table = {
          dir: {
            node: {
              getattr: _0x2830a1.node_ops.getattr,
              setattr: _0x2830a1.node_ops.setattr,
              lookup: _0x2830a1.node_ops.lookup,
              mknod: _0x2830a1.node_ops.mknod,
              rename: _0x2830a1.node_ops.rename,
              unlink: _0x2830a1.node_ops.unlink,
              rmdir: _0x2830a1.node_ops.rmdir,
              readdir: _0x2830a1.node_ops.readdir,
              symlink: _0x2830a1.node_ops.symlink
            },
            stream: {
              llseek: _0x2830a1.stream_ops.llseek
            }
          },
          file: {
            node: {
              getattr: _0x2830a1.node_ops.getattr,
              setattr: _0x2830a1.node_ops.setattr
            },
            stream: {
              llseek: _0x2830a1.stream_ops.llseek,
              read: _0x2830a1.stream_ops.read,
              write: _0x2830a1.stream_ops.write,
              allocate: _0x2830a1.stream_ops.allocate,
              mmap: _0x2830a1.stream_ops.mmap,
              msync: _0x2830a1.stream_ops.msync
            }
          },
          link: {
            node: {
              getattr: _0x2830a1.node_ops.getattr,
              setattr: _0x2830a1.node_ops.setattr,
              readlink: _0x2830a1.node_ops.readlink
            },
            stream: {}
          },
          chrdev: {
            node: {
              getattr: _0x2830a1.node_ops.getattr,
              setattr: _0x2830a1.node_ops.setattr
            },
            stream: _0x1f58b9.chrdev_stream_ops
          }
        };
      }
      var _0x774de = _0x1f58b9.createNode(_0x35c102, _0x5ecd0e, _0x5d082f, _0x36fc5b);
      if (_0x1f58b9.isDir(_0x774de.mode)) {
        _0x774de.node_ops = _0x2830a1.ops_table.dir.node;
        _0x774de.stream_ops = _0x2830a1.ops_table.dir.stream;
        _0x774de.contents = {};
      } else if (_0x1f58b9.isFile(_0x774de.mode)) {
        _0x774de.node_ops = _0x2830a1.ops_table.file.node;
        _0x774de.stream_ops = _0x2830a1.ops_table.file.stream;
        _0x774de.usedBytes = 0;
        _0x774de.contents = null;
      } else if (_0x1f58b9.isLink(_0x774de.mode)) {
        _0x774de.node_ops = _0x2830a1.ops_table.link.node;
        _0x774de.stream_ops = _0x2830a1.ops_table.link.stream;
      } else if (_0x1f58b9.isChrdev(_0x774de.mode)) {
        _0x774de.node_ops = _0x2830a1.ops_table.chrdev.node;
        _0x774de.stream_ops = _0x2830a1.ops_table.chrdev.stream;
      }
      _0x774de.timestamp = Date.now();
      if (_0x35c102) {
        _0x35c102.contents[_0x5ecd0e] = _0x774de;
        _0x35c102.timestamp = _0x774de.timestamp;
      }
      return _0x774de;
    },
    getFileDataAsTypedArray: function (_0x386699) {
      if (!_0x386699.contents) {
        return new Uint8Array(0);
      }
      if (_0x386699.contents.subarray) {
        return _0x386699.contents.subarray(0, _0x386699.usedBytes);
      }
      return new Uint8Array(_0x386699.contents);
    },
    expandFileStorage: function (_0x5de566, _0x36835d) {
      var _0x43451b = _0x5de566.contents ? _0x5de566.contents.length : 0;
      if (_0x43451b >= _0x36835d) {
        return;
      }
      var _0x102857 = 1048576;
      _0x36835d = Math.max(_0x36835d, _0x43451b * (_0x43451b < _0x102857 ? 2 : 1.125) >>> 0);
      if (_0x43451b != 0) {
        _0x36835d = Math.max(_0x36835d, 256);
      }
      var _0x2a5800 = _0x5de566.contents;
      _0x5de566.contents = new Uint8Array(_0x36835d);
      if (_0x5de566.usedBytes > 0) {
        _0x5de566.contents.set(_0x2a5800.subarray(0, _0x5de566.usedBytes), 0);
      }
    },
    resizeFileStorage: function (_0x3b0900, _0xdbe3f0) {
      if (_0x3b0900.usedBytes == _0xdbe3f0) {
        return;
      }
      if (_0xdbe3f0 == 0) {
        _0x3b0900.contents = null;
        _0x3b0900.usedBytes = 0;
      } else {
        var _0x5aa7a = _0x3b0900.contents;
        _0x3b0900.contents = new Uint8Array(_0xdbe3f0);
        if (_0x5aa7a) {
          _0x3b0900.contents.set(_0x5aa7a.subarray(0, Math.min(_0xdbe3f0, _0x3b0900.usedBytes)));
        }
        _0x3b0900.usedBytes = _0xdbe3f0;
      }
    },
    node_ops: {
      getattr: function (_0x3cdc92) {
        var _0x58d2dc = {};
        _0x58d2dc.dev = _0x1f58b9.isChrdev(_0x3cdc92.mode) ? _0x3cdc92.id : 1;
        _0x58d2dc.ino = _0x3cdc92.id;
        _0x58d2dc.mode = _0x3cdc92.mode;
        _0x58d2dc.nlink = 1;
        _0x58d2dc.uid = 0;
        _0x58d2dc.gid = 0;
        _0x58d2dc.rdev = _0x3cdc92.rdev;
        if (_0x1f58b9.isDir(_0x3cdc92.mode)) {
          _0x58d2dc.size = 4096;
        } else if (_0x1f58b9.isFile(_0x3cdc92.mode)) {
          _0x58d2dc.size = _0x3cdc92.usedBytes;
        } else if (_0x1f58b9.isLink(_0x3cdc92.mode)) {
          _0x58d2dc.size = _0x3cdc92.link.length;
        } else {
          _0x58d2dc.size = 0;
        }
        _0x58d2dc.atime = new Date(_0x3cdc92.timestamp);
        _0x58d2dc.mtime = new Date(_0x3cdc92.timestamp);
        _0x58d2dc.ctime = new Date(_0x3cdc92.timestamp);
        _0x58d2dc.blksize = 4096;
        _0x58d2dc.blocks = Math.ceil(_0x58d2dc.size / _0x58d2dc.blksize);
        return _0x58d2dc;
      },
      setattr: function (_0x112660, _0x9f291a) {
        if (_0x9f291a.mode !== undefined) {
          _0x112660.mode = _0x9f291a.mode;
        }
        if (_0x9f291a.timestamp !== undefined) {
          _0x112660.timestamp = _0x9f291a.timestamp;
        }
        if (_0x9f291a.size !== undefined) {
          _0x2830a1.resizeFileStorage(_0x112660, _0x9f291a.size);
        }
      },
      lookup: function (_0x4acdd1, _0x282240) {
        throw _0x1f58b9.genericErrors[44];
      },
      mknod: function (_0xebaecd, _0x5828f9, _0x1c81b6, _0x4285e8) {
        return _0x2830a1.createNode(_0xebaecd, _0x5828f9, _0x1c81b6, _0x4285e8);
      },
      rename: function (_0x4c3bdc, _0x3c8ba7, _0x582bfa) {
        if (_0x1f58b9.isDir(_0x4c3bdc.mode)) {
          var _0xf5176c;
          try {
            _0xf5176c = _0x1f58b9.lookupNode(_0x3c8ba7, _0x582bfa);
          } catch (_0x5baa5d) {}
          if (_0xf5176c) {
            for (var _0x1ff949 in _0xf5176c.contents) {
              throw new _0x1f58b9.ErrnoError(55);
            }
          }
        }
        delete _0x4c3bdc.parent.contents[_0x4c3bdc.name];
        _0x4c3bdc.parent.timestamp = Date.now();
        _0x4c3bdc.name = _0x582bfa;
        _0x3c8ba7.contents[_0x582bfa] = _0x4c3bdc;
        _0x3c8ba7.timestamp = _0x4c3bdc.parent.timestamp;
        _0x4c3bdc.parent = _0x3c8ba7;
      },
      unlink: function (_0x5c5603, _0x59a2f1) {
        delete _0x5c5603.contents[_0x59a2f1];
        _0x5c5603.timestamp = Date.now();
      },
      rmdir: function (_0x3154dd, _0x2f3c44) {
        var _0x4f1409 = _0x1f58b9.lookupNode(_0x3154dd, _0x2f3c44);
        for (var _0x2243c2 in _0x4f1409.contents) {
          throw new _0x1f58b9.ErrnoError(55);
        }
        delete _0x3154dd.contents[_0x2f3c44];
        _0x3154dd.timestamp = Date.now();
      },
      readdir: function (_0xd060b) {
        var _0x6184de = [".", ".."];
        for (var _0x23ba1f in _0xd060b.contents) {
          if (!_0xd060b.contents.hasOwnProperty(_0x23ba1f)) {
            continue;
          }
          _0x6184de.push(_0x23ba1f);
        }
        return _0x6184de;
      },
      symlink: function (_0xd5e1f6, _0x5976a7, _0x1228e6) {
        var _0x13ae78 = _0x2830a1.createNode(_0xd5e1f6, _0x5976a7, 41471, 0);
        _0x13ae78.link = _0x1228e6;
        return _0x13ae78;
      },
      readlink: function (_0x5cf008) {
        if (!_0x1f58b9.isLink(_0x5cf008.mode)) {
          throw new _0x1f58b9.ErrnoError(28);
        }
        return _0x5cf008.link;
      }
    },
    stream_ops: {
      read: function (_0x295951, _0x5ab37c, _0xf1a9c7, _0xdb7537, _0x112b3a) {
        var _0x170b4 = _0x295951.node.contents;
        if (_0x112b3a >= _0x295951.node.usedBytes) {
          return 0;
        }
        var _0x431cbc = Math.min(_0x295951.node.usedBytes - _0x112b3a, _0xdb7537);
        if (_0x431cbc > 8 && _0x170b4.subarray) {
          _0x5ab37c.set(_0x170b4.subarray(_0x112b3a, _0x112b3a + _0x431cbc), _0xf1a9c7);
        } else {
          for (var _0x2ed1e8 = 0; _0x2ed1e8 < _0x431cbc; _0x2ed1e8++) {
            _0x5ab37c[_0xf1a9c7 + _0x2ed1e8] = _0x170b4[_0x112b3a + _0x2ed1e8];
          }
        }
        return _0x431cbc;
      },
      write: function (_0x3d89fb, _0x17f809, _0x3eef43, _0x166a25, _0x50a793, _0x27b22e) {
        if (_0x17f809.buffer === _0xf9c0a9.buffer) {
          _0x27b22e = false;
        }
        if (!_0x166a25) {
          return 0;
        }
        var _0x5a27bb = _0x3d89fb.node;
        _0x5a27bb.timestamp = Date.now();
        if (_0x17f809.subarray && (!_0x5a27bb.contents || _0x5a27bb.contents.subarray)) {
          if (_0x27b22e) {
            _0x5a27bb.contents = _0x17f809.subarray(_0x3eef43, _0x3eef43 + _0x166a25);
            _0x5a27bb.usedBytes = _0x166a25;
            return _0x166a25;
          } else if (_0x5a27bb.usedBytes === 0 && _0x50a793 === 0) {
            _0x5a27bb.contents = _0x17f809.slice(_0x3eef43, _0x3eef43 + _0x166a25);
            _0x5a27bb.usedBytes = _0x166a25;
            return _0x166a25;
          } else if (_0x50a793 + _0x166a25 <= _0x5a27bb.usedBytes) {
            _0x5a27bb.contents.set(_0x17f809.subarray(_0x3eef43, _0x3eef43 + _0x166a25), _0x50a793);
            return _0x166a25;
          }
        }
        _0x2830a1.expandFileStorage(_0x5a27bb, _0x50a793 + _0x166a25);
        if (_0x5a27bb.contents.subarray && _0x17f809.subarray) {
          _0x5a27bb.contents.set(_0x17f809.subarray(_0x3eef43, _0x3eef43 + _0x166a25), _0x50a793);
        } else {
          for (var _0x2fb6e6 = 0; _0x2fb6e6 < _0x166a25; _0x2fb6e6++) {
            _0x5a27bb.contents[_0x50a793 + _0x2fb6e6] = _0x17f809[_0x3eef43 + _0x2fb6e6];
          }
        }
        _0x5a27bb.usedBytes = Math.max(_0x5a27bb.usedBytes, _0x50a793 + _0x166a25);
        return _0x166a25;
      },
      llseek: function (_0x5b0126, _0x3bb450, _0x3141d2) {
        var _0x2022a5 = _0x3bb450;
        if (_0x3141d2 === 1) {
          _0x2022a5 += _0x5b0126.position;
        } else if (_0x3141d2 === 2) {
          if (_0x1f58b9.isFile(_0x5b0126.node.mode)) {
            _0x2022a5 += _0x5b0126.node.usedBytes;
          }
        }
        if (_0x2022a5 < 0) {
          throw new _0x1f58b9.ErrnoError(28);
        }
        return _0x2022a5;
      },
      allocate: function (_0x66f674, _0x10d51b, _0x333bce) {
        _0x2830a1.expandFileStorage(_0x66f674.node, _0x10d51b + _0x333bce);
        _0x66f674.node.usedBytes = Math.max(_0x66f674.node.usedBytes, _0x10d51b + _0x333bce);
      },
      mmap: function (_0x4d88d7, _0x39aaa9, _0x54f76c, _0x554c42, _0x5b79d5, _0x4a3294) {
        if (_0x39aaa9 !== 0) {
          throw new _0x1f58b9.ErrnoError(28);
        }
        if (!_0x1f58b9.isFile(_0x4d88d7.node.mode)) {
          throw new _0x1f58b9.ErrnoError(43);
        }
        var _0x428d91;
        var _0x44f7f7;
        var _0x405649 = _0x4d88d7.node.contents;
        if (!(_0x4a3294 & 2) && _0x405649.buffer === _0x479424) {
          _0x44f7f7 = false;
          _0x428d91 = _0x405649.byteOffset;
        } else {
          if (_0x554c42 > 0 || _0x554c42 + _0x54f76c < _0x405649.length) {
            if (_0x405649.subarray) {
              _0x405649 = _0x405649.subarray(_0x554c42, _0x554c42 + _0x54f76c);
            } else {
              _0x405649 = Array.prototype.slice.call(_0x405649, _0x554c42, _0x554c42 + _0x54f76c);
            }
          }
          _0x44f7f7 = true;
          _0x428d91 = _0x1abe6e(_0x54f76c);
          if (!_0x428d91) {
            throw new _0x1f58b9.ErrnoError(48);
          }
          _0xf9c0a9.set(_0x405649, _0x428d91);
        }
        return {
          ptr: _0x428d91,
          allocated: _0x44f7f7
        };
      },
      msync: function (_0xbe9163, _0x1e7c45, _0xbaf225, _0x5b226b, _0x75915f) {
        if (!_0x1f58b9.isFile(_0xbe9163.node.mode)) {
          throw new _0x1f58b9.ErrnoError(43);
        }
        if (_0x75915f & 2) {
          return 0;
        }
        var _0x559e93 = _0x2830a1.stream_ops.write(_0xbe9163, _0x1e7c45, 0, _0x5b226b, _0xbaf225, false);
        return 0;
      }
    }
  };
  var _0x22f872 = {
    dbs: {},
    indexedDB: function () {
      if (typeof indexedDB !== "undefined") {
        return indexedDB;
      }
      var _0x1b3bc8 = null;
      if (typeof window === "object") {
        _0x1b3bc8 = window.indexedDB || window.mozIndexedDB || window.webkitIndexedDB || window.msIndexedDB;
      }
      _0x22d62f(_0x1b3bc8, "IDBFS used, but indexedDB not supported");
      return _0x1b3bc8;
    },
    DB_VERSION: 21,
    DB_STORE_NAME: "FILE_DATA",
    mount: function (_0x2ec8c0) {
      return _0x2830a1.mount.apply(null, arguments);
    },
    syncfs: function (_0x36ebd1, _0x4b1869, _0x22b741) {
      _0x22f872.getLocalSet(_0x36ebd1, function (_0x5298d7, _0x5bc3aa) {
        if (_0x5298d7) {
          return _0x22b741(_0x5298d7);
        }
        _0x22f872.getRemoteSet(_0x36ebd1, function (_0x5f14a6, _0x3dfe60) {
          if (_0x5f14a6) {
            return _0x22b741(_0x5f14a6);
          }
          var _0x41caec = _0x4b1869 ? _0x3dfe60 : _0x5bc3aa;
          var _0x242a44 = _0x4b1869 ? _0x5bc3aa : _0x3dfe60;
          _0x22f872.reconcile(_0x41caec, _0x242a44, _0x22b741);
        });
      });
    },
    getDB: function (_0x2df97d, _0x12f6d7) {
      var _0x5f06fe = _0x22f872.dbs[_0x2df97d];
      if (_0x5f06fe) {
        return _0x12f6d7(null, _0x5f06fe);
      }
      var _0x4fc627;
      try {
        _0x4fc627 = _0x22f872.indexedDB().open(_0x2df97d, _0x22f872.DB_VERSION);
      } catch (_0x2176b4) {
        return _0x12f6d7(_0x2176b4);
      }
      if (!_0x4fc627) {
        return _0x12f6d7("Unable to connect to IndexedDB");
      }
      _0x4fc627.onupgradeneeded = function (_0x357a9d) {
        var _0x59ebd1 = _0x357a9d.target.result;
        var _0x18a46a = _0x357a9d.target.transaction;
        var _0x77e7f2;
        if (_0x59ebd1.objectStoreNames.contains(_0x22f872.DB_STORE_NAME)) {
          _0x77e7f2 = _0x18a46a.objectStore(_0x22f872.DB_STORE_NAME);
        } else {
          _0x77e7f2 = _0x59ebd1.createObjectStore(_0x22f872.DB_STORE_NAME);
        }
        if (!_0x77e7f2.indexNames.contains("timestamp")) {
          _0x77e7f2.createIndex("timestamp", "timestamp", {
            unique: false
          });
        }
      };
      _0x4fc627.onsuccess = function () {
        _0x5f06fe = _0x4fc627.result;
        _0x22f872.dbs[_0x2df97d] = _0x5f06fe;
        _0x12f6d7(null, _0x5f06fe);
      };
      _0x4fc627.onerror = function (_0x4aa187) {
        _0x12f6d7(this.error);
        _0x4aa187.preventDefault();
      };
    },
    getLocalSet: function (_0x587eee, _0x534024) {
      var _0xa2a5f0 = {};
      function _0x18c32c(_0x4e8010) {
        return _0x4e8010 !== "." && _0x4e8010 !== "..";
      }
      function _0x384f96(_0x4efd27) {
        return function (_0x30170f) {
          return _0x489cfe.join2(_0x4efd27, _0x30170f);
        };
      }
      var _0x5e7607 = _0x1f58b9.readdir(_0x587eee.mountpoint).filter(_0x18c32c).map(_0x384f96(_0x587eee.mountpoint));
      while (_0x5e7607.length) {
        var _0x25d5f2 = _0x5e7607.pop();
        var _0x3b824b;
        try {
          _0x3b824b = _0x1f58b9.stat(_0x25d5f2);
        } catch (_0x42d9cc) {
          return _0x534024(_0x42d9cc);
        }
        if (_0x1f58b9.isDir(_0x3b824b.mode)) {
          _0x5e7607.push.apply(_0x5e7607, _0x1f58b9.readdir(_0x25d5f2).filter(_0x18c32c).map(_0x384f96(_0x25d5f2)));
        }
        _0xa2a5f0[_0x25d5f2] = {
          timestamp: _0x3b824b.mtime
        };
      }
      return _0x534024(null, {
        type: "local",
        entries: _0xa2a5f0
      });
    },
    getRemoteSet: function (_0x3b729b, _0x4bfad7) {
      var _0x441ffd = {};
      _0x22f872.getDB(_0x3b729b.mountpoint, function (_0x52a61f, _0xefeb51) {
        if (_0x52a61f) {
          return _0x4bfad7(_0x52a61f);
        }
        try {
          var _0x421e70 = _0xefeb51.transaction([_0x22f872.DB_STORE_NAME], "readonly");
          _0x421e70.onerror = function (_0x4d7011) {
            _0x4bfad7(this.error);
            _0x4d7011.preventDefault();
          };
          var _0x373e9c = _0x421e70.objectStore(_0x22f872.DB_STORE_NAME);
          var _0x241293 = _0x373e9c.index("timestamp");
          _0x241293.openKeyCursor().onsuccess = function (_0x2d8199) {
            var _0x32eb12 = _0x2d8199.target.result;
            if (!_0x32eb12) {
              return _0x4bfad7(null, {
                type: "remote",
                db: _0xefeb51,
                entries: _0x441ffd
              });
            }
            _0x441ffd[_0x32eb12.primaryKey] = {
              timestamp: _0x32eb12.key
            };
            _0x32eb12.continue();
          };
        } catch (_0x11e081) {
          return _0x4bfad7(_0x11e081);
        }
      });
    },
    loadLocalEntry: function (_0x512b79, _0x33fcb8) {
      var _0x2c0154;
      var _0x49069e;
      try {
        var _0x1fa28c = _0x1f58b9.lookupPath(_0x512b79);
        _0x49069e = _0x1fa28c.node;
        _0x2c0154 = _0x1f58b9.stat(_0x512b79);
      } catch (_0x382949) {
        return _0x33fcb8(_0x382949);
      }
      if (_0x1f58b9.isDir(_0x2c0154.mode)) {
        return _0x33fcb8(null, {
          timestamp: _0x2c0154.mtime,
          mode: _0x2c0154.mode
        });
      } else if (_0x1f58b9.isFile(_0x2c0154.mode)) {
        _0x49069e.contents = _0x2830a1.getFileDataAsTypedArray(_0x49069e);
        return _0x33fcb8(null, {
          timestamp: _0x2c0154.mtime,
          mode: _0x2c0154.mode,
          contents: _0x49069e.contents
        });
      } else {
        return _0x33fcb8(new Error("node type not supported"));
      }
    },
    storeLocalEntry: function (_0x26668a, _0x4db5b4, _0x18f465) {
      try {
        if (_0x1f58b9.isDir(_0x4db5b4.mode)) {
          _0x1f58b9.mkdirTree(_0x26668a, _0x4db5b4.mode);
        } else if (_0x1f58b9.isFile(_0x4db5b4.mode)) {
          _0x1f58b9.writeFile(_0x26668a, _0x4db5b4.contents, {
            canOwn: true
          });
        } else {
          return _0x18f465(new Error("node type not supported"));
        }
        _0x1f58b9.chmod(_0x26668a, _0x4db5b4.mode);
        _0x1f58b9.utime(_0x26668a, _0x4db5b4.timestamp, _0x4db5b4.timestamp);
      } catch (_0x588ac4) {
        return _0x18f465(_0x588ac4);
      }
      _0x18f465(null);
    },
    removeLocalEntry: function (_0xcf50f3, _0x12d2fd) {
      try {
        var _0x89a73 = _0x1f58b9.lookupPath(_0xcf50f3);
        var _0x4f57f3 = _0x1f58b9.stat(_0xcf50f3);
        if (_0x1f58b9.isDir(_0x4f57f3.mode)) {
          _0x1f58b9.rmdir(_0xcf50f3);
        } else if (_0x1f58b9.isFile(_0x4f57f3.mode)) {
          _0x1f58b9.unlink(_0xcf50f3);
        }
      } catch (_0x4efbfd) {
        return _0x12d2fd(_0x4efbfd);
      }
      _0x12d2fd(null);
    },
    loadRemoteEntry: function (_0x19e686, _0x539849, _0x43d8fc) {
      var _0xb02dde = _0x19e686.get(_0x539849);
      _0xb02dde.onsuccess = function (_0x552dc5) {
        _0x43d8fc(null, _0x552dc5.target.result);
      };
      _0xb02dde.onerror = function (_0x4f6aa9) {
        _0x43d8fc(this.error);
        _0x4f6aa9.preventDefault();
      };
    },
    storeRemoteEntry: function (_0x4c3e41, _0x5eeff3, _0x32a380, _0x34a384) {
      var _0xeb59d1 = _0x4c3e41.put(_0x32a380, _0x5eeff3);
      _0xeb59d1.onsuccess = function () {
        _0x34a384(null);
      };
      _0xeb59d1.onerror = function (_0x2fc44d) {
        _0x34a384(this.error);
        _0x2fc44d.preventDefault();
      };
    },
    removeRemoteEntry: function (_0x25dab3, _0x8fde94, _0x1439eb) {
      var _0x47ef5e = _0x25dab3.delete(_0x8fde94);
      _0x47ef5e.onsuccess = function () {
        _0x1439eb(null);
      };
      _0x47ef5e.onerror = function (_0x57d034) {
        _0x1439eb(this.error);
        _0x57d034.preventDefault();
      };
    },
    reconcile: function (_0x3b9f6f, _0x2994cd, _0x5c0104) {
      var _0x496d10 = 0;
      var _0x507dbe = [];
      Object.keys(_0x3b9f6f.entries).forEach(function (_0x506b15) {
        var _0x4ace6b = _0x3b9f6f.entries[_0x506b15];
        var _0x2ebe84 = _0x2994cd.entries[_0x506b15];
        if (!_0x2ebe84 || _0x4ace6b.timestamp.getTime() != _0x2ebe84.timestamp.getTime()) {
          _0x507dbe.push(_0x506b15);
          _0x496d10++;
        }
      });
      var _0x14bd64 = [];
      Object.keys(_0x2994cd.entries).forEach(function (_0x402e09) {
        if (!_0x3b9f6f.entries[_0x402e09]) {
          _0x14bd64.push(_0x402e09);
          _0x496d10++;
        }
      });
      if (!_0x496d10) {
        return _0x5c0104(null);
      }
      var _0x39bc7a = false;
      var _0x4c20af = _0x3b9f6f.type === "remote" ? _0x3b9f6f.db : _0x2994cd.db;
      var _0x1b1f1e = _0x4c20af.transaction([_0x22f872.DB_STORE_NAME], "readwrite");
      var _0x46eb65 = _0x1b1f1e.objectStore(_0x22f872.DB_STORE_NAME);
      function _0x1d61aa(_0x47c6aa) {
        if (_0x47c6aa && !_0x39bc7a) {
          _0x39bc7a = true;
          return _0x5c0104(_0x47c6aa);
        }
      }
      _0x1b1f1e.onerror = function (_0x1ee719) {
        _0x1d61aa(this.error);
        _0x1ee719.preventDefault();
      };
      _0x1b1f1e.oncomplete = function (_0x14af56) {
        if (!_0x39bc7a) {
          _0x5c0104(null);
        }
      };
      _0x507dbe.sort().forEach(function (_0x386d52) {
        if (_0x2994cd.type === "local") {
          _0x22f872.loadRemoteEntry(_0x46eb65, _0x386d52, function (_0xe1af2f, _0x337983) {
            if (_0xe1af2f) {
              return _0x1d61aa(_0xe1af2f);
            }
            _0x22f872.storeLocalEntry(_0x386d52, _0x337983, _0x1d61aa);
          });
        } else {
          _0x22f872.loadLocalEntry(_0x386d52, function (_0x2dbcea, _0x1be745) {
            if (_0x2dbcea) {
              return _0x1d61aa(_0x2dbcea);
            }
            _0x22f872.storeRemoteEntry(_0x46eb65, _0x386d52, _0x1be745, _0x1d61aa);
          });
        }
      });
      _0x14bd64.sort().reverse().forEach(function (_0x153440) {
        if (_0x2994cd.type === "local") {
          _0x22f872.removeLocalEntry(_0x153440, _0x1d61aa);
        } else {
          _0x22f872.removeRemoteEntry(_0x46eb65, _0x153440, _0x1d61aa);
        }
      });
    }
  };
  var _0x1f58b9 = {
    root: null,
    mounts: [],
    devices: {},
    streams: [],
    nextInode: 1,
    nameTable: null,
    currentPath: "/",
    initialized: false,
    ignorePermissions: true,
    trackingDelegate: {},
    tracking: {
      openFlags: {
        READ: 1,
        WRITE: 2
      }
    },
    ErrnoError: null,
    genericErrors: {},
    filesystems: null,
    syncFSRequests: 0,
    lookupPath: function (_0x53c0f1, _0x44f32f) {
      _0x53c0f1 = _0x2cea56.resolve(_0x1f58b9.cwd(), _0x53c0f1);
      _0x44f32f = _0x44f32f || {};
      if (!_0x53c0f1) {
        return {
          path: "",
          node: null
        };
      }
      var _0x3dbf7c = {
        follow_mount: true,
        recurse_count: 0
      };
      for (var _0x5d5131 in _0x3dbf7c) {
        if (_0x44f32f[_0x5d5131] === undefined) {
          _0x44f32f[_0x5d5131] = _0x3dbf7c[_0x5d5131];
        }
      }
      if (_0x44f32f.recurse_count > 8) {
        throw new _0x1f58b9.ErrnoError(32);
      }
      var _0xb7d6f5 = _0x489cfe.normalizeArray(_0x53c0f1.split("/").filter(function (_0x2045d6) {
        return !!_0x2045d6;
      }), false);
      var _0x40b156 = _0x1f58b9.root;
      var _0x3c4528 = "/";
      for (var _0x28f6a4 = 0; _0x28f6a4 < _0xb7d6f5.length; _0x28f6a4++) {
        var _0x53959c = _0x28f6a4 === _0xb7d6f5.length - 1;
        if (_0x53959c && _0x44f32f.parent) {
          break;
        }
        _0x40b156 = _0x1f58b9.lookupNode(_0x40b156, _0xb7d6f5[_0x28f6a4]);
        _0x3c4528 = _0x489cfe.join2(_0x3c4528, _0xb7d6f5[_0x28f6a4]);
        if (_0x1f58b9.isMountpoint(_0x40b156)) {
          if (!_0x53959c || _0x53959c && _0x44f32f.follow_mount) {
            _0x40b156 = _0x40b156.mounted.root;
          }
        }
        if (!_0x53959c || _0x44f32f.follow) {
          var _0x2a6cba = 0;
          while (_0x1f58b9.isLink(_0x40b156.mode)) {
            var _0x1a6413 = _0x1f58b9.readlink(_0x3c4528);
            _0x3c4528 = _0x2cea56.resolve(_0x489cfe.dirname(_0x3c4528), _0x1a6413);
            var _0x24ed96 = _0x1f58b9.lookupPath(_0x3c4528, {
              recurse_count: _0x44f32f.recurse_count
            });
            _0x40b156 = _0x24ed96.node;
            if (_0x2a6cba++ > 40) {
              throw new _0x1f58b9.ErrnoError(32);
            }
          }
        }
      }
      return {
        path: _0x3c4528,
        node: _0x40b156
      };
    },
    getPath: function (_0x243266) {
      var _0x2f7ffb;
      while (true) {
        if (_0x1f58b9.isRoot(_0x243266)) {
          var _0x32fbd3 = _0x243266.mount.mountpoint;
          if (!_0x2f7ffb) {
            return _0x32fbd3;
          }
          if (_0x32fbd3[_0x32fbd3.length - 1] !== "/") {
            return _0x32fbd3 + "/" + _0x2f7ffb;
          } else {
            return _0x32fbd3 + _0x2f7ffb;
          }
        }
        _0x2f7ffb = _0x2f7ffb ? _0x243266.name + "/" + _0x2f7ffb : _0x243266.name;
        _0x243266 = _0x243266.parent;
      }
    },
    hashName: function (_0x1a1b09, _0x514078) {
      var _0x2b38db = 0;
      for (var _0x164521 = 0; _0x164521 < _0x514078.length; _0x164521++) {
        _0x2b38db = (_0x2b38db << 5) - _0x2b38db + _0x514078.charCodeAt(_0x164521) | 0;
      }
      return (_0x1a1b09 + _0x2b38db >>> 0) % _0x1f58b9.nameTable.length;
    },
    hashAddNode: function (_0x306633) {
      var _0x11c3e1 = _0x1f58b9.hashName(_0x306633.parent.id, _0x306633.name);
      _0x306633.name_next = _0x1f58b9.nameTable[_0x11c3e1];
      _0x1f58b9.nameTable[_0x11c3e1] = _0x306633;
    },
    hashRemoveNode: function (_0x4903ee) {
      var _0x524494 = _0x1f58b9.hashName(_0x4903ee.parent.id, _0x4903ee.name);
      if (_0x1f58b9.nameTable[_0x524494] === _0x4903ee) {
        _0x1f58b9.nameTable[_0x524494] = _0x4903ee.name_next;
      } else {
        var _0x224ac5 = _0x1f58b9.nameTable[_0x524494];
        while (_0x224ac5) {
          if (_0x224ac5.name_next === _0x4903ee) {
            _0x224ac5.name_next = _0x4903ee.name_next;
            break;
          }
          _0x224ac5 = _0x224ac5.name_next;
        }
      }
    },
    lookupNode: function (_0x26459f, _0x560489) {
      var _0x3468b9 = _0x1f58b9.mayLookup(_0x26459f);
      if (_0x3468b9) {
        throw new _0x1f58b9.ErrnoError(_0x3468b9, _0x26459f);
      }
      var _0x48c3a8 = _0x1f58b9.hashName(_0x26459f.id, _0x560489);
      for (var _0x217811 = _0x1f58b9.nameTable[_0x48c3a8]; _0x217811; _0x217811 = _0x217811.name_next) {
        var _0x5923e0 = _0x217811.name;
        if (_0x217811.parent.id === _0x26459f.id && _0x5923e0 === _0x560489) {
          return _0x217811;
        }
      }
      return _0x1f58b9.lookup(_0x26459f, _0x560489);
    },
    createNode: function (_0x3b744a, _0x390112, _0x49812d, _0x1a32c3) {
      var _0x72ad3f = new _0x1f58b9.FSNode(_0x3b744a, _0x390112, _0x49812d, _0x1a32c3);
      _0x1f58b9.hashAddNode(_0x72ad3f);
      return _0x72ad3f;
    },
    destroyNode: function (_0x34a63a) {
      _0x1f58b9.hashRemoveNode(_0x34a63a);
    },
    isRoot: function (_0x5428a4) {
      return _0x5428a4 === _0x5428a4.parent;
    },
    isMountpoint: function (_0x3148c8) {
      return !!_0x3148c8.mounted;
    },
    isFile: function (_0xd1c9b1) {
      return (_0xd1c9b1 & 61440) === 32768;
    },
    isDir: function (_0x2dea4b) {
      return (_0x2dea4b & 61440) === 16384;
    },
    isLink: function (_0x3626d7) {
      return (_0x3626d7 & 61440) === 40960;
    },
    isChrdev: function (_0x511753) {
      return (_0x511753 & 61440) === 8192;
    },
    isBlkdev: function (_0x5831d1) {
      return (_0x5831d1 & 61440) === 24576;
    },
    isFIFO: function (_0x180f0c) {
      return (_0x180f0c & 61440) === 4096;
    },
    isSocket: function (_0x24cc90) {
      return (_0x24cc90 & 49152) === 49152;
    },
    flagModes: {
      r: 0,
      "r+": 2,
      w: 577,
      "w+": 578,
      a: 1089,
      "a+": 1090
    },
    modeStringToFlags: function (_0x569f17) {
      var _0x513538 = _0x1f58b9.flagModes[_0x569f17];
      if (typeof _0x513538 === "undefined") {
        throw new Error("Unknown file open mode: " + _0x569f17);
      }
      return _0x513538;
    },
    flagsToPermissionString: function (_0x4883d7) {
      var _0x51d169 = ["r", "w", "rw"][_0x4883d7 & 3];
      if (_0x4883d7 & 512) {
        _0x51d169 += "w";
      }
      return _0x51d169;
    },
    nodePermissions: function (_0x5233ea, _0x55c1cd) {
      if (_0x1f58b9.ignorePermissions) {
        return 0;
      }
      if (_0x55c1cd.includes("r") && !(_0x5233ea.mode & 292)) {
        return 2;
      } else if (_0x55c1cd.includes("w") && !(_0x5233ea.mode & 146)) {
        return 2;
      } else if (_0x55c1cd.includes("x") && !(_0x5233ea.mode & 73)) {
        return 2;
      }
      return 0;
    },
    mayLookup: function (_0x57d83d) {
      var _0x3b6b70 = _0x1f58b9.nodePermissions(_0x57d83d, "x");
      if (_0x3b6b70) {
        return _0x3b6b70;
      }
      if (!_0x57d83d.node_ops.lookup) {
        return 2;
      }
      return 0;
    },
    mayCreate: function (_0x490019, _0x2609bc) {
      try {
        var _0x37a318 = _0x1f58b9.lookupNode(_0x490019, _0x2609bc);
        return 20;
      } catch (_0x3b1c51) {}
      return _0x1f58b9.nodePermissions(_0x490019, "wx");
    },
    mayDelete: function (_0x59b45c, _0x350d0d, _0xe524e2) {
      var _0x95ac5e;
      try {
        _0x95ac5e = _0x1f58b9.lookupNode(_0x59b45c, _0x350d0d);
      } catch (_0x159589) {
        return _0x159589.errno;
      }
      var _0x3cbdce = _0x1f58b9.nodePermissions(_0x59b45c, "wx");
      if (_0x3cbdce) {
        return _0x3cbdce;
      }
      if (_0xe524e2) {
        if (!_0x1f58b9.isDir(_0x95ac5e.mode)) {
          return 54;
        }
        if (_0x1f58b9.isRoot(_0x95ac5e) || _0x1f58b9.getPath(_0x95ac5e) === _0x1f58b9.cwd()) {
          return 10;
        }
      } else if (_0x1f58b9.isDir(_0x95ac5e.mode)) {
        return 31;
      }
      return 0;
    },
    mayOpen: function (_0x87af53, _0x41c6b5) {
      if (!_0x87af53) {
        return 44;
      }
      if (_0x1f58b9.isLink(_0x87af53.mode)) {
        return 32;
      } else if (_0x1f58b9.isDir(_0x87af53.mode)) {
        if (_0x1f58b9.flagsToPermissionString(_0x41c6b5) !== "r" || _0x41c6b5 & 512) {
          return 31;
        }
      }
      return _0x1f58b9.nodePermissions(_0x87af53, _0x1f58b9.flagsToPermissionString(_0x41c6b5));
    },
    MAX_OPEN_FDS: 4096,
    nextfd: function (_0x41f2a6, _0xfe93b4) {
      _0x41f2a6 = _0x41f2a6 || 0;
      _0xfe93b4 = _0xfe93b4 || _0x1f58b9.MAX_OPEN_FDS;
      for (var _0xafc8e7 = _0x41f2a6; _0xafc8e7 <= _0xfe93b4; _0xafc8e7++) {
        if (!_0x1f58b9.streams[_0xafc8e7]) {
          return _0xafc8e7;
        }
      }
      throw new _0x1f58b9.ErrnoError(33);
    },
    getStream: function (_0x319944) {
      return _0x1f58b9.streams[_0x319944];
    },
    createStream: function (_0x10ef1d, _0x36ce1f, _0x512370) {
      if (!_0x1f58b9.FSStream) {
        _0x1f58b9.FSStream = function () {};
        _0x1f58b9.FSStream.prototype = {
          object: {
            get: function () {
              return this.node;
            },
            set: function (_0x5ae12c) {
              this.node = _0x5ae12c;
            }
          },
          isRead: {
            get: function () {
              return (this.flags & 2097155) !== 1;
            }
          },
          isWrite: {
            get: function () {
              return (this.flags & 2097155) !== 0;
            }
          },
          isAppend: {
            get: function () {
              return this.flags & 1024;
            }
          }
        };
      }
      var _0x5960a9 = new _0x1f58b9.FSStream();
      for (var _0x462086 in _0x10ef1d) {
        _0x5960a9[_0x462086] = _0x10ef1d[_0x462086];
      }
      _0x10ef1d = _0x5960a9;
      var _0x12784c = _0x1f58b9.nextfd(_0x36ce1f, _0x512370);
      _0x10ef1d.fd = _0x12784c;
      _0x1f58b9.streams[_0x12784c] = _0x10ef1d;
      return _0x10ef1d;
    },
    closeStream: function (_0x277ef1) {
      _0x1f58b9.streams[_0x277ef1] = null;
    },
    chrdev_stream_ops: {
      open: function (_0x6c1cbb) {
        var _0x22fdb9 = _0x1f58b9.getDevice(_0x6c1cbb.node.rdev);
        _0x6c1cbb.stream_ops = _0x22fdb9.stream_ops;
        if (_0x6c1cbb.stream_ops.open) {
          _0x6c1cbb.stream_ops.open(_0x6c1cbb);
        }
      },
      llseek: function () {
        throw new _0x1f58b9.ErrnoError(70);
      }
    },
    major: function (_0x11364d) {
      return _0x11364d >> 8;
    },
    minor: function (_0x5cd223) {
      return _0x5cd223 & 255;
    },
    makedev: function (_0x259c66, _0x112e68) {
      return _0x259c66 << 8 | _0x112e68;
    },
    registerDevice: function (_0x3ae8ac, _0x180111) {
      _0x1f58b9.devices[_0x3ae8ac] = {
        stream_ops: _0x180111
      };
    },
    getDevice: function (_0x2f0e12) {
      return _0x1f58b9.devices[_0x2f0e12];
    },
    getMounts: function (_0x1ee4dc) {
      var _0x3e65b0 = [];
      var _0x49fd48 = [_0x1ee4dc];
      while (_0x49fd48.length) {
        var _0xd533c9 = _0x49fd48.pop();
        _0x3e65b0.push(_0xd533c9);
        _0x49fd48.push.apply(_0x49fd48, _0xd533c9.mounts);
      }
      return _0x3e65b0;
    },
    syncfs: function (_0x2b0eca, _0x231001) {
      if (typeof _0x2b0eca === "function") {
        _0x231001 = _0x2b0eca;
        _0x2b0eca = false;
      }
      _0x1f58b9.syncFSRequests++;
      if (_0x1f58b9.syncFSRequests > 1) {
        _0x500e9("warning: " + _0x1f58b9.syncFSRequests + " FS.syncfs operations in flight at once, probably just doing extra work");
      }
      var _0x473039 = _0x1f58b9.getMounts(_0x1f58b9.root.mount);
      var _0xe4f137 = 0;
      function _0x30f5b3(_0xd6b93a) {
        _0x1f58b9.syncFSRequests--;
        return _0x231001(_0xd6b93a);
      }
      function _0xcc4e32(_0x5e417f) {
        if (_0x5e417f) {
          if (!_0xcc4e32.errored) {
            _0xcc4e32.errored = true;
            return _0x30f5b3(_0x5e417f);
          }
          return;
        }
        if (++_0xe4f137 >= _0x473039.length) {
          _0x30f5b3(null);
        }
      }
      _0x473039.forEach(function (_0x13d1e5) {
        if (!_0x13d1e5.type.syncfs) {
          return _0xcc4e32(null);
        }
        _0x13d1e5.type.syncfs(_0x13d1e5, _0x2b0eca, _0xcc4e32);
      });
    },
    mount: function (_0x40572b, _0x2598a7, _0x533ab6) {
      var _0x244990 = _0x533ab6 === "/";
      var _0x355d5c = !_0x533ab6;
      var _0x255078;
      if (_0x244990 && _0x1f58b9.root) {
        throw new _0x1f58b9.ErrnoError(10);
      } else if (!_0x244990 && !_0x355d5c) {
        var _0x268686 = _0x1f58b9.lookupPath(_0x533ab6, {
          follow_mount: false
        });
        _0x533ab6 = _0x268686.path;
        _0x255078 = _0x268686.node;
        if (_0x1f58b9.isMountpoint(_0x255078)) {
          throw new _0x1f58b9.ErrnoError(10);
        }
        if (!_0x1f58b9.isDir(_0x255078.mode)) {
          throw new _0x1f58b9.ErrnoError(54);
        }
      }
      var _0xdcbb78 = {
        type: _0x40572b,
        opts: _0x2598a7,
        mountpoint: _0x533ab6,
        mounts: []
      };
      var _0x410ecc = _0x40572b.mount(_0xdcbb78);
      _0x410ecc.mount = _0xdcbb78;
      _0xdcbb78.root = _0x410ecc;
      if (_0x244990) {
        _0x1f58b9.root = _0x410ecc;
      } else if (_0x255078) {
        _0x255078.mounted = _0xdcbb78;
        if (_0x255078.mount) {
          _0x255078.mount.mounts.push(_0xdcbb78);
        }
      }
      return _0x410ecc;
    },
    unmount: function (_0x12cdbe) {
      var _0x204588 = _0x1f58b9.lookupPath(_0x12cdbe, {
        follow_mount: false
      });
      if (!_0x1f58b9.isMountpoint(_0x204588.node)) {
        throw new _0x1f58b9.ErrnoError(28);
      }
      var _0x14f6e5 = _0x204588.node;
      var _0x31b8eb = _0x14f6e5.mounted;
      var _0x15283d = _0x1f58b9.getMounts(_0x31b8eb);
      Object.keys(_0x1f58b9.nameTable).forEach(function (_0xb973fc) {
        var _0xcb0c8a = _0x1f58b9.nameTable[_0xb973fc];
        while (_0xcb0c8a) {
          var _0x58a0f7 = _0xcb0c8a.name_next;
          if (_0x15283d.includes(_0xcb0c8a.mount)) {
            _0x1f58b9.destroyNode(_0xcb0c8a);
          }
          _0xcb0c8a = _0x58a0f7;
        }
      });
      _0x14f6e5.mounted = null;
      var _0x28a21a = _0x14f6e5.mount.mounts.indexOf(_0x31b8eb);
      _0x14f6e5.mount.mounts.splice(_0x28a21a, 1);
    },
    lookup: function (_0x2c039d, _0x25a0a6) {
      return _0x2c039d.node_ops.lookup(_0x2c039d, _0x25a0a6);
    },
    mknod: function (_0x5eb6de, _0x3b14d2, _0x27f894) {
      var _0x44e27e = _0x1f58b9.lookupPath(_0x5eb6de, {
        parent: true
      });
      var _0x2cd966 = _0x44e27e.node;
      var _0x1fbc72 = _0x489cfe.basename(_0x5eb6de);
      if (!_0x1fbc72 || _0x1fbc72 === "." || _0x1fbc72 === "..") {
        throw new _0x1f58b9.ErrnoError(28);
      }
      var _0x2af86c = _0x1f58b9.mayCreate(_0x2cd966, _0x1fbc72);
      if (_0x2af86c) {
        throw new _0x1f58b9.ErrnoError(_0x2af86c);
      }
      if (!_0x2cd966.node_ops.mknod) {
        throw new _0x1f58b9.ErrnoError(63);
      }
      return _0x2cd966.node_ops.mknod(_0x2cd966, _0x1fbc72, _0x3b14d2, _0x27f894);
    },
    create: function (_0xaa23ec, _0x3f6f38) {
      _0x3f6f38 = _0x3f6f38 !== undefined ? _0x3f6f38 : 438;
      _0x3f6f38 &= 4095;
      _0x3f6f38 |= 32768;
      return _0x1f58b9.mknod(_0xaa23ec, _0x3f6f38, 0);
    },
    mkdir: function (_0x90b4b3, _0x52fb62) {
      _0x52fb62 = _0x52fb62 !== undefined ? _0x52fb62 : 511;
      _0x52fb62 &= 1023;
      _0x52fb62 |= 16384;
      return _0x1f58b9.mknod(_0x90b4b3, _0x52fb62, 0);
    },
    mkdirTree: function (_0x30cd00, _0x4ac383) {
      var _0x46eb53 = _0x30cd00.split("/");
      var _0x89a047 = "";
      for (var _0x410da4 = 0; _0x410da4 < _0x46eb53.length; ++_0x410da4) {
        if (!_0x46eb53[_0x410da4]) {
          continue;
        }
        _0x89a047 += "/" + _0x46eb53[_0x410da4];
        try {
          _0x1f58b9.mkdir(_0x89a047, _0x4ac383);
        } catch (_0x4ef8e0) {
          if (_0x4ef8e0.errno != 20) {
            throw _0x4ef8e0;
          }
        }
      }
    },
    mkdev: function (_0x561972, _0x414c36, _0x189990) {
      if (typeof _0x189990 === "undefined") {
        _0x189990 = _0x414c36;
        _0x414c36 = 438;
      }
      _0x414c36 |= 8192;
      return _0x1f58b9.mknod(_0x561972, _0x414c36, _0x189990);
    },
    symlink: function (_0x5e73f8, _0x580f6c) {
      if (!_0x2cea56.resolve(_0x5e73f8)) {
        throw new _0x1f58b9.ErrnoError(44);
      }
      var _0xd026f2 = _0x1f58b9.lookupPath(_0x580f6c, {
        parent: true
      });
      var _0x2ae5bb = _0xd026f2.node;
      if (!_0x2ae5bb) {
        throw new _0x1f58b9.ErrnoError(44);
      }
      var _0x3b6aba = _0x489cfe.basename(_0x580f6c);
      var _0x3e66bb = _0x1f58b9.mayCreate(_0x2ae5bb, _0x3b6aba);
      if (_0x3e66bb) {
        throw new _0x1f58b9.ErrnoError(_0x3e66bb);
      }
      if (!_0x2ae5bb.node_ops.symlink) {
        throw new _0x1f58b9.ErrnoError(63);
      }
      return _0x2ae5bb.node_ops.symlink(_0x2ae5bb, _0x3b6aba, _0x5e73f8);
    },
    rename: function (_0x249b8b, _0xaf74b9) {
      var _0xdfcdf3 = _0x489cfe.dirname(_0x249b8b);
      var _0x2a03c1 = _0x489cfe.dirname(_0xaf74b9);
      var _0x23902f = _0x489cfe.basename(_0x249b8b);
      var _0x1a06d2 = _0x489cfe.basename(_0xaf74b9);
      var _0x2b78ae;
      var _0x2cf5b6;
      var _0x3dd38b;
      _0x2b78ae = _0x1f58b9.lookupPath(_0x249b8b, {
        parent: true
      });
      _0x2cf5b6 = _0x2b78ae.node;
      _0x2b78ae = _0x1f58b9.lookupPath(_0xaf74b9, {
        parent: true
      });
      _0x3dd38b = _0x2b78ae.node;
      if (!_0x2cf5b6 || !_0x3dd38b) {
        throw new _0x1f58b9.ErrnoError(44);
      }
      if (_0x2cf5b6.mount !== _0x3dd38b.mount) {
        throw new _0x1f58b9.ErrnoError(75);
      }
      var _0x53d25a = _0x1f58b9.lookupNode(_0x2cf5b6, _0x23902f);
      var _0x159d05 = _0x2cea56.relative(_0x249b8b, _0x2a03c1);
      if (_0x159d05.charAt(0) !== ".") {
        throw new _0x1f58b9.ErrnoError(28);
      }
      _0x159d05 = _0x2cea56.relative(_0xaf74b9, _0xdfcdf3);
      if (_0x159d05.charAt(0) !== ".") {
        throw new _0x1f58b9.ErrnoError(55);
      }
      var _0x5d1d64;
      try {
        _0x5d1d64 = _0x1f58b9.lookupNode(_0x3dd38b, _0x1a06d2);
      } catch (_0xb8e05f) {}
      if (_0x53d25a === _0x5d1d64) {
        return;
      }
      var _0x34a893 = _0x1f58b9.isDir(_0x53d25a.mode);
      var _0x4bc117 = _0x1f58b9.mayDelete(_0x2cf5b6, _0x23902f, _0x34a893);
      if (_0x4bc117) {
        throw new _0x1f58b9.ErrnoError(_0x4bc117);
      }
      _0x4bc117 = _0x5d1d64 ? _0x1f58b9.mayDelete(_0x3dd38b, _0x1a06d2, _0x34a893) : _0x1f58b9.mayCreate(_0x3dd38b, _0x1a06d2);
      if (_0x4bc117) {
        throw new _0x1f58b9.ErrnoError(_0x4bc117);
      }
      if (!_0x2cf5b6.node_ops.rename) {
        throw new _0x1f58b9.ErrnoError(63);
      }
      if (_0x1f58b9.isMountpoint(_0x53d25a) || _0x5d1d64 && _0x1f58b9.isMountpoint(_0x5d1d64)) {
        throw new _0x1f58b9.ErrnoError(10);
      }
      if (_0x3dd38b !== _0x2cf5b6) {
        _0x4bc117 = _0x1f58b9.nodePermissions(_0x2cf5b6, "w");
        if (_0x4bc117) {
          throw new _0x1f58b9.ErrnoError(_0x4bc117);
        }
      }
      try {
        if (_0x1f58b9.trackingDelegate.willMovePath) {
          _0x1f58b9.trackingDelegate.willMovePath(_0x249b8b, _0xaf74b9);
        }
      } catch (_0x1b4aa3) {
        _0x500e9("FS.trackingDelegate['willMovePath']('" + _0x249b8b + "', '" + _0xaf74b9 + "') threw an exception: " + _0x1b4aa3.message);
      }
      _0x1f58b9.hashRemoveNode(_0x53d25a);
      try {
        _0x2cf5b6.node_ops.rename(_0x53d25a, _0x3dd38b, _0x1a06d2);
      } catch (_0x50b4a7) {
        throw _0x50b4a7;
      } finally {
        _0x1f58b9.hashAddNode(_0x53d25a);
      }
      try {
        if (_0x1f58b9.trackingDelegate.onMovePath) {
          _0x1f58b9.trackingDelegate.onMovePath(_0x249b8b, _0xaf74b9);
        }
      } catch (_0x411239) {
        _0x500e9("FS.trackingDelegate['onMovePath']('" + _0x249b8b + "', '" + _0xaf74b9 + "') threw an exception: " + _0x411239.message);
      }
    },
    rmdir: function (_0x305582) {
      var _0x52148d = _0x1f58b9.lookupPath(_0x305582, {
        parent: true
      });
      var _0x369d65 = _0x52148d.node;
      var _0x584969 = _0x489cfe.basename(_0x305582);
      var _0x2a29c5 = _0x1f58b9.lookupNode(_0x369d65, _0x584969);
      var _0x544971 = _0x1f58b9.mayDelete(_0x369d65, _0x584969, true);
      if (_0x544971) {
        throw new _0x1f58b9.ErrnoError(_0x544971);
      }
      if (!_0x369d65.node_ops.rmdir) {
        throw new _0x1f58b9.ErrnoError(63);
      }
      if (_0x1f58b9.isMountpoint(_0x2a29c5)) {
        throw new _0x1f58b9.ErrnoError(10);
      }
      try {
        if (_0x1f58b9.trackingDelegate.willDeletePath) {
          _0x1f58b9.trackingDelegate.willDeletePath(_0x305582);
        }
      } catch (_0x55c377) {
        _0x500e9("FS.trackingDelegate['willDeletePath']('" + _0x305582 + "') threw an exception: " + _0x55c377.message);
      }
      _0x369d65.node_ops.rmdir(_0x369d65, _0x584969);
      _0x1f58b9.destroyNode(_0x2a29c5);
      try {
        if (_0x1f58b9.trackingDelegate.onDeletePath) {
          _0x1f58b9.trackingDelegate.onDeletePath(_0x305582);
        }
      } catch (_0x3fcaa8) {
        _0x500e9("FS.trackingDelegate['onDeletePath']('" + _0x305582 + "') threw an exception: " + _0x3fcaa8.message);
      }
    },
    readdir: function (_0x1bd713) {
      var _0x5f293e = _0x1f58b9.lookupPath(_0x1bd713, {
        follow: true
      });
      var _0x3298e1 = _0x5f293e.node;
      if (!_0x3298e1.node_ops.readdir) {
        throw new _0x1f58b9.ErrnoError(54);
      }
      return _0x3298e1.node_ops.readdir(_0x3298e1);
    },
    unlink: function (_0x56678e) {
      var _0x524f2b = _0x1f58b9.lookupPath(_0x56678e, {
        parent: true
      });
      var _0x116194 = _0x524f2b.node;
      var _0x12800d = _0x489cfe.basename(_0x56678e);
      var _0x1e991c = _0x1f58b9.lookupNode(_0x116194, _0x12800d);
      var _0x21c35c = _0x1f58b9.mayDelete(_0x116194, _0x12800d, false);
      if (_0x21c35c) {
        throw new _0x1f58b9.ErrnoError(_0x21c35c);
      }
      if (!_0x116194.node_ops.unlink) {
        throw new _0x1f58b9.ErrnoError(63);
      }
      if (_0x1f58b9.isMountpoint(_0x1e991c)) {
        throw new _0x1f58b9.ErrnoError(10);
      }
      try {
        if (_0x1f58b9.trackingDelegate.willDeletePath) {
          _0x1f58b9.trackingDelegate.willDeletePath(_0x56678e);
        }
      } catch (_0x45a351) {
        _0x500e9("FS.trackingDelegate['willDeletePath']('" + _0x56678e + "') threw an exception: " + _0x45a351.message);
      }
      _0x116194.node_ops.unlink(_0x116194, _0x12800d);
      _0x1f58b9.destroyNode(_0x1e991c);
      try {
        if (_0x1f58b9.trackingDelegate.onDeletePath) {
          _0x1f58b9.trackingDelegate.onDeletePath(_0x56678e);
        }
      } catch (_0x49811f) {
        _0x500e9("FS.trackingDelegate['onDeletePath']('" + _0x56678e + "') threw an exception: " + _0x49811f.message);
      }
    },
    readlink: function (_0x4320ae) {
      var _0x9689b4 = _0x1f58b9.lookupPath(_0x4320ae);
      var _0x5ed5fb = _0x9689b4.node;
      if (!_0x5ed5fb) {
        throw new _0x1f58b9.ErrnoError(44);
      }
      if (!_0x5ed5fb.node_ops.readlink) {
        throw new _0x1f58b9.ErrnoError(28);
      }
      return _0x2cea56.resolve(_0x1f58b9.getPath(_0x5ed5fb.parent), _0x5ed5fb.node_ops.readlink(_0x5ed5fb));
    },
    stat: function (_0x4f0f27, _0x3509d6) {
      var _0x1eaf39 = _0x1f58b9.lookupPath(_0x4f0f27, {
        follow: !_0x3509d6
      });
      var _0x551e3a = _0x1eaf39.node;
      if (!_0x551e3a) {
        throw new _0x1f58b9.ErrnoError(44);
      }
      if (!_0x551e3a.node_ops.getattr) {
        throw new _0x1f58b9.ErrnoError(63);
      }
      return _0x551e3a.node_ops.getattr(_0x551e3a);
    },
    lstat: function (_0x8ac2c6) {
      return _0x1f58b9.stat(_0x8ac2c6, true);
    },
    chmod: function (_0x16846e, _0x45b083, _0x338169) {
      var _0x54cf5f;
      if (typeof _0x16846e === "string") {
        var _0x55c194 = _0x1f58b9.lookupPath(_0x16846e, {
          follow: !_0x338169
        });
        _0x54cf5f = _0x55c194.node;
      } else {
        _0x54cf5f = _0x16846e;
      }
      if (!_0x54cf5f.node_ops.setattr) {
        throw new _0x1f58b9.ErrnoError(63);
      }
      _0x54cf5f.node_ops.setattr(_0x54cf5f, {
        mode: _0x45b083 & 4095 | _0x54cf5f.mode & ~4095,
        timestamp: Date.now()
      });
    },
    lchmod: function (_0x578131, _0x897b83) {
      _0x1f58b9.chmod(_0x578131, _0x897b83, true);
    },
    fchmod: function (_0x1b677f, _0x24e82a) {
      var _0x12cff6 = _0x1f58b9.getStream(_0x1b677f);
      if (!_0x12cff6) {
        throw new _0x1f58b9.ErrnoError(8);
      }
      _0x1f58b9.chmod(_0x12cff6.node, _0x24e82a);
    },
    chown: function (_0x30500f, _0x5c5c12, _0x180611, _0x104e0d) {
      var _0x3d840a;
      if (typeof _0x30500f === "string") {
        var _0x55a8c7 = _0x1f58b9.lookupPath(_0x30500f, {
          follow: !_0x104e0d
        });
        _0x3d840a = _0x55a8c7.node;
      } else {
        _0x3d840a = _0x30500f;
      }
      if (!_0x3d840a.node_ops.setattr) {
        throw new _0x1f58b9.ErrnoError(63);
      }
      _0x3d840a.node_ops.setattr(_0x3d840a, {
        timestamp: Date.now()
      });
    },
    lchown: function (_0x25b0a4, _0x17af76, _0x271607) {
      _0x1f58b9.chown(_0x25b0a4, _0x17af76, _0x271607, true);
    },
    fchown: function (_0x570443, _0x216220, _0x12b0e1) {
      var _0xcfa106 = _0x1f58b9.getStream(_0x570443);
      if (!_0xcfa106) {
        throw new _0x1f58b9.ErrnoError(8);
      }
      _0x1f58b9.chown(_0xcfa106.node, _0x216220, _0x12b0e1);
    },
    truncate: function (_0x760e72, _0xd4a666) {
      if (_0xd4a666 < 0) {
        throw new _0x1f58b9.ErrnoError(28);
      }
      var _0xfb11d3;
      if (typeof _0x760e72 === "string") {
        var _0x3901be = _0x1f58b9.lookupPath(_0x760e72, {
          follow: true
        });
        _0xfb11d3 = _0x3901be.node;
      } else {
        _0xfb11d3 = _0x760e72;
      }
      if (!_0xfb11d3.node_ops.setattr) {
        throw new _0x1f58b9.ErrnoError(63);
      }
      if (_0x1f58b9.isDir(_0xfb11d3.mode)) {
        throw new _0x1f58b9.ErrnoError(31);
      }
      if (!_0x1f58b9.isFile(_0xfb11d3.mode)) {
        throw new _0x1f58b9.ErrnoError(28);
      }
      var _0x49414d = _0x1f58b9.nodePermissions(_0xfb11d3, "w");
      if (_0x49414d) {
        throw new _0x1f58b9.ErrnoError(_0x49414d);
      }
      _0xfb11d3.node_ops.setattr(_0xfb11d3, {
        size: _0xd4a666,
        timestamp: Date.now()
      });
    },
    ftruncate: function (_0x2aa975, _0x381083) {
      var _0x548375 = _0x1f58b9.getStream(_0x2aa975);
      if (!_0x548375) {
        throw new _0x1f58b9.ErrnoError(8);
      }
      if ((_0x548375.flags & 2097155) === 0) {
        throw new _0x1f58b9.ErrnoError(28);
      }
      _0x1f58b9.truncate(_0x548375.node, _0x381083);
    },
    utime: function (_0x1615ad, _0x1c9c58, _0x500ec1) {
      var _0x2e99c6 = _0x1f58b9.lookupPath(_0x1615ad, {
        follow: true
      });
      var _0x27a5dd = _0x2e99c6.node;
      _0x27a5dd.node_ops.setattr(_0x27a5dd, {
        timestamp: Math.max(_0x1c9c58, _0x500ec1)
      });
    },
    open: function (_0x2bc312, _0x3ee336, _0x1f8f1c, _0x39fdc1, _0x35d518) {
      if (_0x2bc312 === "") {
        throw new _0x1f58b9.ErrnoError(44);
      }
      _0x3ee336 = typeof _0x3ee336 === "string" ? _0x1f58b9.modeStringToFlags(_0x3ee336) : _0x3ee336;
      _0x1f8f1c = typeof _0x1f8f1c === "undefined" ? 438 : _0x1f8f1c;
      if (_0x3ee336 & 64) {
        _0x1f8f1c = _0x1f8f1c & 4095 | 32768;
      } else {
        _0x1f8f1c = 0;
      }
      var _0x2e5965;
      if (typeof _0x2bc312 === "object") {
        _0x2e5965 = _0x2bc312;
      } else {
        _0x2bc312 = _0x489cfe.normalize(_0x2bc312);
        try {
          var _0x4f31bc = _0x1f58b9.lookupPath(_0x2bc312, {
            follow: !(_0x3ee336 & 131072)
          });
          _0x2e5965 = _0x4f31bc.node;
        } catch (_0x5949e2) {}
      }
      var _0x271207 = false;
      if (_0x3ee336 & 64) {
        if (_0x2e5965) {
          if (_0x3ee336 & 128) {
            throw new _0x1f58b9.ErrnoError(20);
          }
        } else {
          _0x2e5965 = _0x1f58b9.mknod(_0x2bc312, _0x1f8f1c, 0);
          _0x271207 = true;
        }
      }
      if (!_0x2e5965) {
        throw new _0x1f58b9.ErrnoError(44);
      }
      if (_0x1f58b9.isChrdev(_0x2e5965.mode)) {
        _0x3ee336 &= ~512;
      }
      if (_0x3ee336 & 65536 && !_0x1f58b9.isDir(_0x2e5965.mode)) {
        throw new _0x1f58b9.ErrnoError(54);
      }
      if (!_0x271207) {
        var _0x176f62 = _0x1f58b9.mayOpen(_0x2e5965, _0x3ee336);
        if (_0x176f62) {
          throw new _0x1f58b9.ErrnoError(_0x176f62);
        }
      }
      if (_0x3ee336 & 512) {
        _0x1f58b9.truncate(_0x2e5965, 0);
      }
      _0x3ee336 &= ~131712;
      var _0x10f48e = _0x1f58b9.createStream({
        node: _0x2e5965,
        path: _0x1f58b9.getPath(_0x2e5965),
        flags: _0x3ee336,
        seekable: true,
        position: 0,
        stream_ops: _0x2e5965.stream_ops,
        ungotten: [],
        error: false
      }, _0x39fdc1, _0x35d518);
      if (_0x10f48e.stream_ops.open) {
        _0x10f48e.stream_ops.open(_0x10f48e);
      }
      if (_0x13e282.logReadFiles && !(_0x3ee336 & 1)) {
        if (!_0x1f58b9.readFiles) {
          _0x1f58b9.readFiles = {};
        }
        if (!(_0x2bc312 in _0x1f58b9.readFiles)) {
          _0x1f58b9.readFiles[_0x2bc312] = 1;
          _0x500e9("FS.trackingDelegate error on read file: " + _0x2bc312);
        }
      }
      try {
        if (_0x1f58b9.trackingDelegate.onOpenFile) {
          var _0x536be2 = 0;
          if ((_0x3ee336 & 2097155) !== 1) {
            _0x536be2 |= _0x1f58b9.tracking.openFlags.READ;
          }
          if ((_0x3ee336 & 2097155) !== 0) {
            _0x536be2 |= _0x1f58b9.tracking.openFlags.WRITE;
          }
          _0x1f58b9.trackingDelegate.onOpenFile(_0x2bc312, _0x536be2);
        }
      } catch (_0x3c2320) {
        _0x500e9("FS.trackingDelegate['onOpenFile']('" + _0x2bc312 + "', flags) threw an exception: " + _0x3c2320.message);
      }
      return _0x10f48e;
    },
    close: function (_0x20296c) {
      if (_0x1f58b9.isClosed(_0x20296c)) {
        throw new _0x1f58b9.ErrnoError(8);
      }
      if (_0x20296c.getdents) {
        _0x20296c.getdents = null;
      }
      try {
        if (_0x20296c.stream_ops.close) {
          _0x20296c.stream_ops.close(_0x20296c);
        }
      } catch (_0x1eba3a) {
        throw _0x1eba3a;
      } finally {
        _0x1f58b9.closeStream(_0x20296c.fd);
      }
      _0x20296c.fd = null;
    },
    isClosed: function (_0x428e78) {
      return _0x428e78.fd === null;
    },
    llseek: function (_0x3d66ab, _0x47c3eb, _0x57a80d) {
      if (_0x1f58b9.isClosed(_0x3d66ab)) {
        throw new _0x1f58b9.ErrnoError(8);
      }
      if (!_0x3d66ab.seekable || !_0x3d66ab.stream_ops.llseek) {
        throw new _0x1f58b9.ErrnoError(70);
      }
      if (_0x57a80d != 0 && _0x57a80d != 1 && _0x57a80d != 2) {
        throw new _0x1f58b9.ErrnoError(28);
      }
      _0x3d66ab.position = _0x3d66ab.stream_ops.llseek(_0x3d66ab, _0x47c3eb, _0x57a80d);
      _0x3d66ab.ungotten = [];
      return _0x3d66ab.position;
    },
    read: function (_0x2c0822, _0x273f70, _0x452973, _0x5d0270, _0x54d7f4) {
      if (_0x5d0270 < 0 || _0x54d7f4 < 0) {
        throw new _0x1f58b9.ErrnoError(28);
      }
      if (_0x1f58b9.isClosed(_0x2c0822)) {
        throw new _0x1f58b9.ErrnoError(8);
      }
      if ((_0x2c0822.flags & 2097155) === 1) {
        throw new _0x1f58b9.ErrnoError(8);
      }
      if (_0x1f58b9.isDir(_0x2c0822.node.mode)) {
        throw new _0x1f58b9.ErrnoError(31);
      }
      if (!_0x2c0822.stream_ops.read) {
        throw new _0x1f58b9.ErrnoError(28);
      }
      var _0x31e999 = typeof _0x54d7f4 !== "undefined";
      if (!_0x31e999) {
        _0x54d7f4 = _0x2c0822.position;
      } else if (!_0x2c0822.seekable) {
        throw new _0x1f58b9.ErrnoError(70);
      }
      var _0x59a719 = _0x2c0822.stream_ops.read(_0x2c0822, _0x273f70, _0x452973, _0x5d0270, _0x54d7f4);
      if (!_0x31e999) {
        _0x2c0822.position += _0x59a719;
      }
      return _0x59a719;
    },
    write: function (_0x5cc206, _0x52d8ec, _0x22107e, _0x2267ff, _0x579402, _0x103e1c) {
      if (_0x2267ff < 0 || _0x579402 < 0) {
        throw new _0x1f58b9.ErrnoError(28);
      }
      if (_0x1f58b9.isClosed(_0x5cc206)) {
        throw new _0x1f58b9.ErrnoError(8);
      }
      if ((_0x5cc206.flags & 2097155) === 0) {
        throw new _0x1f58b9.ErrnoError(8);
      }
      if (_0x1f58b9.isDir(_0x5cc206.node.mode)) {
        throw new _0x1f58b9.ErrnoError(31);
      }
      if (!_0x5cc206.stream_ops.write) {
        throw new _0x1f58b9.ErrnoError(28);
      }
      if (_0x5cc206.seekable && _0x5cc206.flags & 1024) {
        _0x1f58b9.llseek(_0x5cc206, 0, 2);
      }
      var _0x52cbfe = typeof _0x579402 !== "undefined";
      if (!_0x52cbfe) {
        _0x579402 = _0x5cc206.position;
      } else if (!_0x5cc206.seekable) {
        throw new _0x1f58b9.ErrnoError(70);
      }
      var _0x410ede = _0x5cc206.stream_ops.write(_0x5cc206, _0x52d8ec, _0x22107e, _0x2267ff, _0x579402, _0x103e1c);
      if (!_0x52cbfe) {
        _0x5cc206.position += _0x410ede;
      }
      try {
        if (_0x5cc206.path && _0x1f58b9.trackingDelegate.onWriteToFile) {
          _0x1f58b9.trackingDelegate.onWriteToFile(_0x5cc206.path);
        }
      } catch (_0x116dc6) {
        _0x500e9("FS.trackingDelegate['onWriteToFile']('" + _0x5cc206.path + "') threw an exception: " + _0x116dc6.message);
      }
      return _0x410ede;
    },
    allocate: function (_0x1844c4, _0x2ec660, _0x2f588b) {
      if (_0x1f58b9.isClosed(_0x1844c4)) {
        throw new _0x1f58b9.ErrnoError(8);
      }
      if (_0x2ec660 < 0 || _0x2f588b <= 0) {
        throw new _0x1f58b9.ErrnoError(28);
      }
      if ((_0x1844c4.flags & 2097155) === 0) {
        throw new _0x1f58b9.ErrnoError(8);
      }
      if (!_0x1f58b9.isFile(_0x1844c4.node.mode) && !_0x1f58b9.isDir(_0x1844c4.node.mode)) {
        throw new _0x1f58b9.ErrnoError(43);
      }
      if (!_0x1844c4.stream_ops.allocate) {
        throw new _0x1f58b9.ErrnoError(138);
      }
      _0x1844c4.stream_ops.allocate(_0x1844c4, _0x2ec660, _0x2f588b);
    },
    mmap: function (_0x5d4e5c, _0x26cd97, _0x285e12, _0xce6d42, _0x28de48, _0x52f67c) {
      if ((_0x28de48 & 2) !== 0 && (_0x52f67c & 2) === 0 && (_0x5d4e5c.flags & 2097155) !== 2) {
        throw new _0x1f58b9.ErrnoError(2);
      }
      if ((_0x5d4e5c.flags & 2097155) === 1) {
        throw new _0x1f58b9.ErrnoError(2);
      }
      if (!_0x5d4e5c.stream_ops.mmap) {
        throw new _0x1f58b9.ErrnoError(43);
      }
      return _0x5d4e5c.stream_ops.mmap(_0x5d4e5c, _0x26cd97, _0x285e12, _0xce6d42, _0x28de48, _0x52f67c);
    },
    msync: function (_0x95bed9, _0x5bf9c6, _0x2f2184, _0x4c14dc, _0x1f3cbc) {
      if (!_0x95bed9 || !_0x95bed9.stream_ops.msync) {
        return 0;
      }
      return _0x95bed9.stream_ops.msync(_0x95bed9, _0x5bf9c6, _0x2f2184, _0x4c14dc, _0x1f3cbc);
    },
    munmap: function (_0x145454) {
      return 0;
    },
    ioctl: function (_0x2f72dc, _0x5546f7, _0x45b200) {
      if (!_0x2f72dc.stream_ops.ioctl) {
        throw new _0x1f58b9.ErrnoError(59);
      }
      return _0x2f72dc.stream_ops.ioctl(_0x2f72dc, _0x5546f7, _0x45b200);
    },
    readFile: function (_0x45cd7a, _0x566b7f) {
      _0x566b7f = _0x566b7f || {};
      _0x566b7f.flags = _0x566b7f.flags || 0;
      _0x566b7f.encoding = _0x566b7f.encoding || "binary";
      if (_0x566b7f.encoding !== "utf8" && _0x566b7f.encoding !== "binary") {
        throw new Error("Invalid encoding type \"" + _0x566b7f.encoding + "\"");
      }
      var _0x3affb8;
      var _0x392465 = _0x1f58b9.open(_0x45cd7a, _0x566b7f.flags);
      var _0x5492b2 = _0x1f58b9.stat(_0x45cd7a);
      var _0x1b6d83 = _0x5492b2.size;
      var _0x2a04eb = new Uint8Array(_0x1b6d83);
      _0x1f58b9.read(_0x392465, _0x2a04eb, 0, _0x1b6d83, 0);
      if (_0x566b7f.encoding === "utf8") {
        _0x3affb8 = _0x39bfc1(_0x2a04eb, 0);
      } else if (_0x566b7f.encoding === "binary") {
        _0x3affb8 = _0x2a04eb;
      }
      _0x1f58b9.close(_0x392465);
      return _0x3affb8;
    },
    writeFile: function (_0x5e9349, _0x15c512, _0x35e52) {
      _0x35e52 = _0x35e52 || {};
      _0x35e52.flags = _0x35e52.flags || 577;
      var _0x383394 = _0x1f58b9.open(_0x5e9349, _0x35e52.flags, _0x35e52.mode);
      if (typeof _0x15c512 === "string") {
        var _0x31d732 = new Uint8Array(_0x4bdf30(_0x15c512) + 1);
        var _0x86fca1 = _0x152d31(_0x15c512, _0x31d732, 0, _0x31d732.length);
        _0x1f58b9.write(_0x383394, _0x31d732, 0, _0x86fca1, undefined, _0x35e52.canOwn);
      } else if (ArrayBuffer.isView(_0x15c512)) {
        _0x1f58b9.write(_0x383394, _0x15c512, 0, _0x15c512.byteLength, undefined, _0x35e52.canOwn);
      } else {
        throw new Error("Unsupported data type");
      }
      _0x1f58b9.close(_0x383394);
    },
    cwd: function () {
      return _0x1f58b9.currentPath;
    },
    chdir: function (_0xc30836) {
      var _0x4d1f1f = _0x1f58b9.lookupPath(_0xc30836, {
        follow: true
      });
      if (_0x4d1f1f.node === null) {
        throw new _0x1f58b9.ErrnoError(44);
      }
      if (!_0x1f58b9.isDir(_0x4d1f1f.node.mode)) {
        throw new _0x1f58b9.ErrnoError(54);
      }
      var _0x1a3a98 = _0x1f58b9.nodePermissions(_0x4d1f1f.node, "x");
      if (_0x1a3a98) {
        throw new _0x1f58b9.ErrnoError(_0x1a3a98);
      }
      _0x1f58b9.currentPath = _0x4d1f1f.path;
    },
    createDefaultDirectories: function () {
      _0x1f58b9.mkdir("/tmp");
      _0x1f58b9.mkdir("/home");
      _0x1f58b9.mkdir("/home/web_user");
    },
    createDefaultDevices: function () {
      _0x1f58b9.mkdir("/dev");
      _0x1f58b9.registerDevice(_0x1f58b9.makedev(1, 3), {
        read: function () {
          return 0;
        },
        write: function (_0x27eff5, _0x5e3280, _0x3c2224, _0x53d19d, _0x17aa3e) {
          return _0x53d19d;
        }
      });
      _0x1f58b9.mkdev("/dev/null", _0x1f58b9.makedev(1, 3));
      _0x37938c.register(_0x1f58b9.makedev(5, 0), _0x37938c.default_tty_ops);
      _0x37938c.register(_0x1f58b9.makedev(6, 0), _0x37938c.default_tty1_ops);
      _0x1f58b9.mkdev("/dev/tty", _0x1f58b9.makedev(5, 0));
      _0x1f58b9.mkdev("/dev/tty1", _0x1f58b9.makedev(6, 0));
      var _0xffd558 = _0xd123eb();
      _0x1f58b9.createDevice("/dev", "random", _0xffd558);
      _0x1f58b9.createDevice("/dev", "urandom", _0xffd558);
      _0x1f58b9.mkdir("/dev/shm");
      _0x1f58b9.mkdir("/dev/shm/tmp");
    },
    createSpecialDirectories: function () {
      _0x1f58b9.mkdir("/proc");
      var _0x29ed17 = _0x1f58b9.mkdir("/proc/self");
      _0x1f58b9.mkdir("/proc/self/fd");
      _0x1f58b9.mount({
        mount: function () {
          var _0x640aa = _0x1f58b9.createNode(_0x29ed17, "fd", 16895, 73);
          _0x640aa.node_ops = {
            lookup: function (_0x4eb8b6, _0x1dad8d) {
              var _0x58ea3b = +_0x1dad8d;
              var _0x3f971f = _0x1f58b9.getStream(_0x58ea3b);
              if (!_0x3f971f) {
                throw new _0x1f58b9.ErrnoError(8);
              }
              var _0x11defb = {
                parent: null,
                mount: {
                  mountpoint: "fake"
                },
                node_ops: {
                  readlink: function () {
                    return _0x3f971f.path;
                  }
                }
              };
              _0x11defb.parent = _0x11defb;
              return _0x11defb;
            }
          };
          return _0x640aa;
        }
      }, {}, "/proc/self/fd");
    },
    createStandardStreams: function () {
      if (_0x13e282.stdin) {
        _0x1f58b9.createDevice("/dev", "stdin", _0x13e282.stdin);
      } else {
        _0x1f58b9.symlink("/dev/tty", "/dev/stdin");
      }
      if (_0x13e282.stdout) {
        _0x1f58b9.createDevice("/dev", "stdout", null, _0x13e282.stdout);
      } else {
        _0x1f58b9.symlink("/dev/tty", "/dev/stdout");
      }
      if (_0x13e282.stderr) {
        _0x1f58b9.createDevice("/dev", "stderr", null, _0x13e282.stderr);
      } else {
        _0x1f58b9.symlink("/dev/tty1", "/dev/stderr");
      }
      var _0x3feea0 = _0x1f58b9.open("/dev/stdin", 0);
      var _0x1a60f2 = _0x1f58b9.open("/dev/stdout", 1);
      var _0x349498 = _0x1f58b9.open("/dev/stderr", 1);
    },
    ensureErrnoError: function () {
      if (_0x1f58b9.ErrnoError) {
        return;
      }
      _0x1f58b9.ErrnoError = function _0x4666e6(_0x20f8d6, _0x1fdadd) {
        this.node = _0x1fdadd;
        this.setErrno = function (_0x39344d) {
          this.errno = _0x39344d;
        };
        this.setErrno(_0x20f8d6);
        this.message = "FS error";
      };
      _0x1f58b9.ErrnoError.prototype = new Error();
      _0x1f58b9.ErrnoError.prototype.constructor = _0x1f58b9.ErrnoError;
      [44].forEach(function (_0x5996d6) {
        _0x1f58b9.genericErrors[_0x5996d6] = new _0x1f58b9.ErrnoError(_0x5996d6);
        _0x1f58b9.genericErrors[_0x5996d6].stack = "<generic error, no stack>";
      });
    },
    staticInit: function () {
      _0x1f58b9.ensureErrnoError();
      _0x1f58b9.nameTable = new Array(4096);
      _0x1f58b9.mount(_0x2830a1, {}, "/");
      _0x1f58b9.createDefaultDirectories();
      _0x1f58b9.createDefaultDevices();
      _0x1f58b9.createSpecialDirectories();
      _0x1f58b9.filesystems = {
        MEMFS: _0x2830a1,
        IDBFS: _0x22f872
      };
    },
    init: function (_0x42cf01, _0x4b2322, _0x43f329) {
      _0x1f58b9.init.initialized = true;
      _0x1f58b9.ensureErrnoError();
      _0x13e282.stdin = _0x42cf01 || _0x13e282.stdin;
      _0x13e282.stdout = _0x4b2322 || _0x13e282.stdout;
      _0x13e282.stderr = _0x43f329 || _0x13e282.stderr;
      _0x1f58b9.createStandardStreams();
    },
    quit: function () {
      _0x1f58b9.init.initialized = false;
      var _0x2ad9ea = _0x13e282._fflush;
      if (_0x2ad9ea) {
        _0x2ad9ea(0);
      }
      for (var _0x36a16e = 0; _0x36a16e < _0x1f58b9.streams.length; _0x36a16e++) {
        var _0x55c82d = _0x1f58b9.streams[_0x36a16e];
        if (!_0x55c82d) {
          continue;
        }
        _0x1f58b9.close(_0x55c82d);
      }
    },
    getMode: function (_0x506967, _0x5322b1) {
      var _0x46f328 = 0;
      if (_0x506967) {
        _0x46f328 |= 365;
      }
      if (_0x5322b1) {
        _0x46f328 |= 146;
      }
      return _0x46f328;
    },
    findObject: function (_0x52933c, _0x4f8dd8) {
      var _0x1dc8d1 = _0x1f58b9.analyzePath(_0x52933c, _0x4f8dd8);
      if (_0x1dc8d1.exists) {
        return _0x1dc8d1.object;
      } else {
        return null;
      }
    },
    analyzePath: function (_0x4effe4, _0x4cfd52) {
      try {
        var _0x3f3dc9 = _0x1f58b9.lookupPath(_0x4effe4, {
          follow: !_0x4cfd52
        });
        _0x4effe4 = _0x3f3dc9.path;
      } catch (_0x1e588d) {}
      var _0x1b8594 = {
        isRoot: false,
        exists: false,
        error: 0,
        name: null,
        path: null,
        object: null,
        parentExists: false,
        parentPath: null,
        parentObject: null
      };
      try {
        var _0x3f3dc9 = _0x1f58b9.lookupPath(_0x4effe4, {
          parent: true
        });
        _0x1b8594.parentExists = true;
        _0x1b8594.parentPath = _0x3f3dc9.path;
        _0x1b8594.parentObject = _0x3f3dc9.node;
        _0x1b8594.name = _0x489cfe.basename(_0x4effe4);
        _0x3f3dc9 = _0x1f58b9.lookupPath(_0x4effe4, {
          follow: !_0x4cfd52
        });
        _0x1b8594.exists = true;
        _0x1b8594.path = _0x3f3dc9.path;
        _0x1b8594.object = _0x3f3dc9.node;
        _0x1b8594.name = _0x3f3dc9.node.name;
        _0x1b8594.isRoot = _0x3f3dc9.path === "/";
      } catch (_0x4ed60b) {
        _0x1b8594.error = _0x4ed60b.errno;
      }
      return _0x1b8594;
    },
    createPath: function (_0x44ed31, _0x45e956, _0x30acf8, _0x489801) {
      _0x44ed31 = typeof _0x44ed31 === "string" ? _0x44ed31 : _0x1f58b9.getPath(_0x44ed31);
      var _0x5e57eb = _0x45e956.split("/").reverse();
      while (_0x5e57eb.length) {
        var _0x26d94b = _0x5e57eb.pop();
        if (!_0x26d94b) {
          continue;
        }
        var _0x32aef6 = _0x489cfe.join2(_0x44ed31, _0x26d94b);
        try {
          _0x1f58b9.mkdir(_0x32aef6);
        } catch (_0x4b0676) {}
        _0x44ed31 = _0x32aef6;
      }
      return _0x32aef6;
    },
    createFile: function (_0x350384, _0x527a3b, _0x4bbf87, _0x588f02, _0x2d6dc7) {
      var _0xc5c667 = _0x489cfe.join2(typeof _0x350384 === "string" ? _0x350384 : _0x1f58b9.getPath(_0x350384), _0x527a3b);
      var _0x1e62f8 = _0x1f58b9.getMode(_0x588f02, _0x2d6dc7);
      return _0x1f58b9.create(_0xc5c667, _0x1e62f8);
    },
    createDataFile: function (_0x397427, _0x4aaa0a, _0x439590, _0x3d20c4, _0x7c833, _0x2c7ca1) {
      var _0x2e7b2a = _0x4aaa0a ? _0x489cfe.join2(typeof _0x397427 === "string" ? _0x397427 : _0x1f58b9.getPath(_0x397427), _0x4aaa0a) : _0x397427;
      var _0x58a3b7 = _0x1f58b9.getMode(_0x3d20c4, _0x7c833);
      var _0x103e4f = _0x1f58b9.create(_0x2e7b2a, _0x58a3b7);
      if (_0x439590) {
        if (typeof _0x439590 === "string") {
          var _0x169af0 = new Array(_0x439590.length);
          for (var _0x70a3ae = 0, _0x5a79cd = _0x439590.length; _0x70a3ae < _0x5a79cd; ++_0x70a3ae) {
            _0x169af0[_0x70a3ae] = _0x439590.charCodeAt(_0x70a3ae);
          }
          _0x439590 = _0x169af0;
        }
        _0x1f58b9.chmod(_0x103e4f, _0x58a3b7 | 146);
        var _0x410133 = _0x1f58b9.open(_0x103e4f, 577);
        _0x1f58b9.write(_0x410133, _0x439590, 0, _0x439590.length, 0, _0x2c7ca1);
        _0x1f58b9.close(_0x410133);
        _0x1f58b9.chmod(_0x103e4f, _0x58a3b7);
      }
      return _0x103e4f;
    },
    createDevice: function (_0x21a018, _0x35b0e8, _0x4106c0, _0x466e12) {
      var _0x58698a = _0x489cfe.join2(typeof _0x21a018 === "string" ? _0x21a018 : _0x1f58b9.getPath(_0x21a018), _0x35b0e8);
      var _0x5535bf = _0x1f58b9.getMode(!!_0x4106c0, !!_0x466e12);
      if (!_0x1f58b9.createDevice.major) {
        _0x1f58b9.createDevice.major = 64;
      }
      var _0x3d7b92 = _0x1f58b9.makedev(_0x1f58b9.createDevice.major++, 0);
      _0x1f58b9.registerDevice(_0x3d7b92, {
        open: function (_0xdd87fb) {
          _0xdd87fb.seekable = false;
        },
        close: function (_0x52c8f4) {
          if (_0x466e12 && _0x466e12.buffer && _0x466e12.buffer.length) {
            _0x466e12(10);
          }
        },
        read: function (_0xd29112, _0x6bb44f, _0x2597ca, _0x41c346, _0x167365) {
          var _0x3b5af0 = 0;
          for (var _0x3cc395 = 0; _0x3cc395 < _0x41c346; _0x3cc395++) {
            var _0x144753;
            try {
              _0x144753 = _0x4106c0();
            } catch (_0x5c98c2) {
              throw new _0x1f58b9.ErrnoError(29);
            }
            if (_0x144753 === undefined && _0x3b5af0 === 0) {
              throw new _0x1f58b9.ErrnoError(6);
            }
            if (_0x144753 === null || _0x144753 === undefined) {
              break;
            }
            _0x3b5af0++;
            _0x6bb44f[_0x2597ca + _0x3cc395] = _0x144753;
          }
          if (_0x3b5af0) {
            _0xd29112.node.timestamp = Date.now();
          }
          return _0x3b5af0;
        },
        write: function (_0x2c566c, _0x3b2990, _0x48ddba, _0x40f686, _0xbbf79d) {
          for (var _0x156c38 = 0; _0x156c38 < _0x40f686; _0x156c38++) {
            try {
              _0x466e12(_0x3b2990[_0x48ddba + _0x156c38]);
            } catch (_0x22979b) {
              throw new _0x1f58b9.ErrnoError(29);
            }
          }
          if (_0x40f686) {
            _0x2c566c.node.timestamp = Date.now();
          }
          return _0x156c38;
        }
      });
      return _0x1f58b9.mkdev(_0x58698a, _0x5535bf, _0x3d7b92);
    },
    forceLoadFile: function (_0x7f2a2b) {
      if (_0x7f2a2b.isDevice || _0x7f2a2b.isFolder || _0x7f2a2b.link || _0x7f2a2b.contents) {
        return true;
      }
      if (typeof XMLHttpRequest !== "undefined") {
        throw new Error("Lazy loading should have been performed (contents set) in createLazyFile, but it was not. Lazy loading only works in web workers. Use --embed-file or --preload-file in emcc on the main thread.");
      } else if (_0x32afa6) {
        try {
          _0x7f2a2b.contents = _0x5dcb19(_0x32afa6(_0x7f2a2b.url), true);
          _0x7f2a2b.usedBytes = _0x7f2a2b.contents.length;
        } catch (_0x1747e2) {
          throw new _0x1f58b9.ErrnoError(29);
        }
      } else {
        throw new Error("Cannot load without read() or XMLHttpRequest.");
      }
    },
    createLazyFile: function (_0x30c1ef, _0x31ec4e, _0x177c1b, _0x5def66, _0x484245) {
      function _0x5c5943() {
        this.lengthKnown = false;
        this.chunks = [];
      }
      _0x5c5943.prototype.get = function _0x21559d(_0x1044f3) {
        if (_0x1044f3 > this.length - 1 || _0x1044f3 < 0) {
          return undefined;
        }
        var _0x147fac = _0x1044f3 % this.chunkSize;
        var _0x3dadec = _0x1044f3 / this.chunkSize | 0;
        return this.getter(_0x3dadec)[_0x147fac];
      };
      _0x5c5943.prototype.setDataGetter = function _0x31f63a(_0x15c9c7) {
        this.getter = _0x15c9c7;
      };
      _0x5c5943.prototype.cacheLength = function _0xdaa3dc() {
        var _0x50ac9b = new XMLHttpRequest();
        _0x50ac9b.open("HEAD", _0x177c1b, false);
        _0x50ac9b.send(null);
        if ((!(_0x50ac9b.status >= 200) || !(_0x50ac9b.status < 300)) && _0x50ac9b.status !== 304) {
          throw new Error("Couldn't load " + _0x177c1b + ". Status: " + _0x50ac9b.status);
        }
        var _0x2fdcac = Number(_0x50ac9b.getResponseHeader("Content-length"));
        var _0x36e531;
        var _0x7b8548 = (_0x36e531 = _0x50ac9b.getResponseHeader("Accept-Ranges")) && _0x36e531 === "bytes";
        var _0x161f56 = (_0x36e531 = _0x50ac9b.getResponseHeader("Content-Encoding")) && _0x36e531 === "gzip";
        var _0x39b86 = 1048576;
        if (!_0x7b8548) {
          _0x39b86 = _0x2fdcac;
        }
        function _0xc94580(_0x3ac8a7, _0x36b485) {
          if (_0x3ac8a7 > _0x36b485) {
            throw new Error("invalid range (" + _0x3ac8a7 + ", " + _0x36b485 + ") or no bytes requested!");
          }
          if (_0x36b485 > _0x2fdcac - 1) {
            throw new Error("only " + _0x2fdcac + " bytes available! programmer error!");
          }
          var _0x1001fd = new XMLHttpRequest();
          _0x1001fd.open("GET", _0x177c1b, false);
          if (_0x2fdcac !== _0x39b86) {
            _0x1001fd.setRequestHeader("Range", "bytes=" + _0x3ac8a7 + "-" + _0x36b485);
          }
          if (typeof Uint8Array != "undefined") {
            _0x1001fd.responseType = "arraybuffer";
          }
          if (_0x1001fd.overrideMimeType) {
            _0x1001fd.overrideMimeType("text/plain; charset=x-user-defined");
          }
          _0x1001fd.send(null);
          if ((!(_0x1001fd.status >= 200) || !(_0x1001fd.status < 300)) && _0x1001fd.status !== 304) {
            throw new Error("Couldn't load " + _0x177c1b + ". Status: " + _0x1001fd.status);
          }
          if (_0x1001fd.response !== undefined) {
            return new Uint8Array(_0x1001fd.response || []);
          } else {
            return _0x5dcb19(_0x1001fd.responseText || "", true);
          }
        }
        var _0x376ec6 = this;
        _0x376ec6.setDataGetter(function (_0x31bcc7) {
          var _0x3d4e86 = _0x31bcc7 * _0x39b86;
          var _0x29e9f6 = (_0x31bcc7 + 1) * _0x39b86 - 1;
          _0x29e9f6 = Math.min(_0x29e9f6, _0x2fdcac - 1);
          if (typeof _0x376ec6.chunks[_0x31bcc7] === "undefined") {
            _0x376ec6.chunks[_0x31bcc7] = _0xc94580(_0x3d4e86, _0x29e9f6);
          }
          if (typeof _0x376ec6.chunks[_0x31bcc7] === "undefined") {
            throw new Error("doXHR failed!");
          }
          return _0x376ec6.chunks[_0x31bcc7];
        });
        if (_0x161f56 || !_0x2fdcac) {
          _0x39b86 = _0x2fdcac = 1;
          _0x2fdcac = this.getter(0).length;
          _0x39b86 = _0x2fdcac;
          _0x1b619b("LazyFiles on gzip forces download of the whole file when length is accessed");
        }
        this._length = _0x2fdcac;
        this._chunkSize = _0x39b86;
        this.lengthKnown = true;
      };
      if (typeof XMLHttpRequest !== "undefined") {
        if (!_0x4eced9) {
          throw "Cannot do synchronous binary XHRs outside webworkers in modern browsers. Use --embed-file or --preload-file in emcc";
        }
        var _0x439a25 = new _0x5c5943();
        Object.defineProperties(_0x439a25, {
          length: {
            get: function () {
              if (!this.lengthKnown) {
                this.cacheLength();
              }
              return this._length;
            }
          },
          chunkSize: {
            get: function () {
              if (!this.lengthKnown) {
                this.cacheLength();
              }
              return this._chunkSize;
            }
          }
        });
        var _0x883108 = {
          isDevice: false,
          contents: _0x439a25
        };
      } else {
        var _0x883108 = {
          isDevice: false,
          url: _0x177c1b
        };
      }
      var _0x2f2831 = _0x1f58b9.createFile(_0x30c1ef, _0x31ec4e, _0x883108, _0x5def66, _0x484245);
      if (_0x883108.contents) {
        _0x2f2831.contents = _0x883108.contents;
      } else if (_0x883108.url) {
        _0x2f2831.contents = null;
        _0x2f2831.url = _0x883108.url;
      }
      Object.defineProperties(_0x2f2831, {
        usedBytes: {
          get: function () {
            return this.contents.length;
          }
        }
      });
      var _0xfaec64 = {};
      var _0x3d1f77 = Object.keys(_0x2f2831.stream_ops);
      _0x3d1f77.forEach(function (_0x1387a1) {
        var _0x237f36 = _0x2f2831.stream_ops[_0x1387a1];
        _0xfaec64[_0x1387a1] = function _0x35c67d() {
          _0x1f58b9.forceLoadFile(_0x2f2831);
          return _0x237f36.apply(null, arguments);
        };
      });
      _0xfaec64.read = function _0x4588c9(_0xfab8d, _0x10fa29, _0x24d6ba, _0x165255, _0x5caac2) {
        _0x1f58b9.forceLoadFile(_0x2f2831);
        var _0x3801ad = _0xfab8d.node.contents;
        if (_0x5caac2 >= _0x3801ad.length) {
          return 0;
        }
        var _0x25d859 = Math.min(_0x3801ad.length - _0x5caac2, _0x165255);
        if (_0x3801ad.slice) {
          for (var _0x42d001 = 0; _0x42d001 < _0x25d859; _0x42d001++) {
            _0x10fa29[_0x24d6ba + _0x42d001] = _0x3801ad[_0x5caac2 + _0x42d001];
          }
        } else {
          for (var _0x42d001 = 0; _0x42d001 < _0x25d859; _0x42d001++) {
            _0x10fa29[_0x24d6ba + _0x42d001] = _0x3801ad.get(_0x5caac2 + _0x42d001);
          }
        }
        return _0x25d859;
      };
      _0x2f2831.stream_ops = _0xfaec64;
      return _0x2f2831;
    },
    createPreloadedFile: function (_0x4ee57f, _0x46f33d, _0x127d74, _0x2f6178, _0x579f24, _0x980bd5, _0x3bb154, _0xfb54c5, _0x4e4ea3, _0x379ac9) {
      _0x5e1b24.init();
      var _0x4a322f = _0x46f33d ? _0x2cea56.resolve(_0x489cfe.join2(_0x4ee57f, _0x46f33d)) : _0x4ee57f;
      var _0x1a9f2d = _0x159492("cp " + _0x4a322f);
      function _0x5b6bf9(_0x56f10a) {
        function _0x309b04(_0x5e163c) {
          if (_0x379ac9) {
            _0x379ac9();
          }
          if (!_0xfb54c5) {
            _0x1f58b9.createDataFile(_0x4ee57f, _0x46f33d, _0x5e163c, _0x2f6178, _0x579f24, _0x4e4ea3);
          }
          if (_0x980bd5) {
            _0x980bd5();
          }
          _0xb5b33c(_0x1a9f2d);
        }
        var _0x32b1d5 = false;
        _0x13e282.preloadPlugins.forEach(function (_0xbc2702) {
          if (_0x32b1d5) {
            return;
          }
          if (_0xbc2702.canHandle(_0x4a322f)) {
            _0xbc2702.handle(_0x56f10a, _0x4a322f, _0x309b04, function () {
              if (_0x3bb154) {
                _0x3bb154();
              }
              _0xb5b33c(_0x1a9f2d);
            });
            _0x32b1d5 = true;
          }
        });
        if (!_0x32b1d5) {
          _0x309b04(_0x56f10a);
        }
      }
      _0x156f3b(_0x1a9f2d);
      if (typeof _0x127d74 == "string") {
        _0x5e1b24.asyncLoad(_0x127d74, function (_0x28d629) {
          _0x5b6bf9(_0x28d629);
        }, _0x3bb154);
      } else {
        _0x5b6bf9(_0x127d74);
      }
    },
    indexedDB: function () {
      return window.indexedDB || window.mozIndexedDB || window.webkitIndexedDB || window.msIndexedDB;
    },
    DB_NAME: function () {
      return "EM_FS_" + window.location.pathname;
    },
    DB_VERSION: 20,
    DB_STORE_NAME: "FILE_DATA",
    saveFilesToDB: function (_0x4a5c9d, _0x59509, _0x52d93f) {
      _0x59509 = _0x59509 || function () {};
      _0x52d93f = _0x52d93f || function () {};
      var _0xc58f = _0x1f58b9.indexedDB();
      try {
        var _0x315e60 = _0xc58f.open(_0x1f58b9.DB_NAME(), _0x1f58b9.DB_VERSION);
      } catch (_0x36bdb2) {
        return _0x52d93f(_0x36bdb2);
      }
      _0x315e60.onupgradeneeded = function _0x4c05a4() {
        _0x1b619b("creating db");
        var _0x157911 = _0x315e60.result;
        _0x157911.createObjectStore(_0x1f58b9.DB_STORE_NAME);
      };
      _0x315e60.onsuccess = function _0x58d4cf() {
        var _0x48962d = _0x315e60.result;
        var _0x2f3e06 = _0x48962d.transaction([_0x1f58b9.DB_STORE_NAME], "readwrite");
        var _0x4767ed = _0x2f3e06.objectStore(_0x1f58b9.DB_STORE_NAME);
        var _0x3c5c53 = 0;
        var _0x3138d2 = 0;
        var _0x3cf8c8 = _0x4a5c9d.length;
        function _0x4b57b1() {
          if (_0x3138d2 == 0) {
            _0x59509();
          } else {
            _0x52d93f();
          }
        }
        _0x4a5c9d.forEach(function (_0x4e0dbf) {
          var _0x2603ff = _0x4767ed.put(_0x1f58b9.analyzePath(_0x4e0dbf).object.contents, _0x4e0dbf);
          _0x2603ff.onsuccess = function _0x56442b() {
            _0x3c5c53++;
            if (_0x3c5c53 + _0x3138d2 == _0x3cf8c8) {
              _0x4b57b1();
            }
          };
          _0x2603ff.onerror = function _0x3ba0e8() {
            _0x3138d2++;
            if (_0x3c5c53 + _0x3138d2 == _0x3cf8c8) {
              _0x4b57b1();
            }
          };
        });
        _0x2f3e06.onerror = _0x52d93f;
      };
      _0x315e60.onerror = _0x52d93f;
    },
    loadFilesFromDB: function (_0x4d609a, _0x5786f3, _0x360df4) {
      _0x5786f3 = _0x5786f3 || function () {};
      _0x360df4 = _0x360df4 || function () {};
      var _0x51111e = _0x1f58b9.indexedDB();
      try {
        var _0x55e3a6 = _0x51111e.open(_0x1f58b9.DB_NAME(), _0x1f58b9.DB_VERSION);
      } catch (_0x371655) {
        return _0x360df4(_0x371655);
      }
      _0x55e3a6.onupgradeneeded = _0x360df4;
      _0x55e3a6.onsuccess = function _0x47de07() {
        var _0xc222be = _0x55e3a6.result;
        try {
          var _0x152ef4 = _0xc222be.transaction([_0x1f58b9.DB_STORE_NAME], "readonly");
        } catch (_0x5d1301) {
          _0x360df4(_0x5d1301);
          return;
        }
        var _0x1d3b75 = _0x152ef4.objectStore(_0x1f58b9.DB_STORE_NAME);
        var _0x1a4aa2 = 0;
        var _0x266cb5 = 0;
        var _0x3204c7 = _0x4d609a.length;
        function _0x1bacb7() {
          if (_0x266cb5 == 0) {
            _0x5786f3();
          } else {
            _0x360df4();
          }
        }
        _0x4d609a.forEach(function (_0x2415e2) {
          var _0x2aff1d = _0x1d3b75.get(_0x2415e2);
          _0x2aff1d.onsuccess = function _0x9dc444() {
            if (_0x1f58b9.analyzePath(_0x2415e2).exists) {
              _0x1f58b9.unlink(_0x2415e2);
            }
            _0x1f58b9.createDataFile(_0x489cfe.dirname(_0x2415e2), _0x489cfe.basename(_0x2415e2), _0x2aff1d.result, true, true, true);
            _0x1a4aa2++;
            if (_0x1a4aa2 + _0x266cb5 == _0x3204c7) {
              _0x1bacb7();
            }
          };
          _0x2aff1d.onerror = function _0x31d548() {
            _0x266cb5++;
            if (_0x1a4aa2 + _0x266cb5 == _0x3204c7) {
              _0x1bacb7();
            }
          };
        });
        _0x152ef4.onerror = _0x360df4;
      };
      _0x55e3a6.onerror = _0x360df4;
    }
  };
  var _0x3c917f = {
    mappings: {},
    DEFAULT_POLLMASK: 5,
    umask: 511,
    calculateAt: function (_0x4e710f, _0x349104, _0x29d9f8) {
      if (_0x349104[0] === "/") {
        return _0x349104;
      }
      var _0xb2a99c;
      if (_0x4e710f === -100) {
        _0xb2a99c = _0x1f58b9.cwd();
      } else {
        var _0x3f2b84 = _0x1f58b9.getStream(_0x4e710f);
        if (!_0x3f2b84) {
          throw new _0x1f58b9.ErrnoError(8);
        }
        _0xb2a99c = _0x3f2b84.path;
      }
      if (_0x349104.length == 0) {
        if (!_0x29d9f8) {
          throw new _0x1f58b9.ErrnoError(44);
        }
        return _0xb2a99c;
      }
      return _0x489cfe.join2(_0xb2a99c, _0x349104);
    },
    doStat: function (_0x428a90, _0x385c98, _0x425f4e) {
      try {
        var _0x2a7406 = _0x428a90(_0x385c98);
      } catch (_0x568966) {
        if (_0x568966 && _0x568966.node && _0x489cfe.normalize(_0x385c98) !== _0x489cfe.normalize(_0x1f58b9.getPath(_0x568966.node))) {
          return -54;
        }
        throw _0x568966;
      }
      _0x2c669e[_0x425f4e >> 2] = _0x2a7406.dev;
      _0x2c669e[_0x425f4e + 4 >> 2] = 0;
      _0x2c669e[_0x425f4e + 8 >> 2] = _0x2a7406.ino;
      _0x2c669e[_0x425f4e + 12 >> 2] = _0x2a7406.mode;
      _0x2c669e[_0x425f4e + 16 >> 2] = _0x2a7406.nlink;
      _0x2c669e[_0x425f4e + 20 >> 2] = _0x2a7406.uid;
      _0x2c669e[_0x425f4e + 24 >> 2] = _0x2a7406.gid;
      _0x2c669e[_0x425f4e + 28 >> 2] = _0x2a7406.rdev;
      _0x2c669e[_0x425f4e + 32 >> 2] = 0;
      _0x3ca3da = [_0x2a7406.size >>> 0, (_0x725831 = _0x2a7406.size, +Math.abs(_0x725831) >= 1 ? _0x725831 > 0 ? (Math.min(+Math.floor(_0x725831 / 4294967296), 4294967295) | 0) >>> 0 : ~~+Math.ceil((_0x725831 - +(~~_0x725831 >>> 0)) / 4294967296) >>> 0 : 0)];
      _0x2c669e[_0x425f4e + 40 >> 2] = _0x3ca3da[0];
      _0x2c669e[_0x425f4e + 44 >> 2] = _0x3ca3da[1];
      _0x2c669e[_0x425f4e + 48 >> 2] = 4096;
      _0x2c669e[_0x425f4e + 52 >> 2] = _0x2a7406.blocks;
      _0x2c669e[_0x425f4e + 56 >> 2] = _0x2a7406.atime.getTime() / 1000 | 0;
      _0x2c669e[_0x425f4e + 60 >> 2] = 0;
      _0x2c669e[_0x425f4e + 64 >> 2] = _0x2a7406.mtime.getTime() / 1000 | 0;
      _0x2c669e[_0x425f4e + 68 >> 2] = 0;
      _0x2c669e[_0x425f4e + 72 >> 2] = _0x2a7406.ctime.getTime() / 1000 | 0;
      _0x2c669e[_0x425f4e + 76 >> 2] = 0;
      _0x3ca3da = [_0x2a7406.ino >>> 0, (_0x725831 = _0x2a7406.ino, +Math.abs(_0x725831) >= 1 ? _0x725831 > 0 ? (Math.min(+Math.floor(_0x725831 / 4294967296), 4294967295) | 0) >>> 0 : ~~+Math.ceil((_0x725831 - +(~~_0x725831 >>> 0)) / 4294967296) >>> 0 : 0)];
      _0x2c669e[_0x425f4e + 80 >> 2] = _0x3ca3da[0];
      _0x2c669e[_0x425f4e + 84 >> 2] = _0x3ca3da[1];
      return 0;
    },
    doMsync: function (_0x545758, _0x565484, _0x299e99, _0x384496, _0x1369fd) {
      var _0xddbbfb = _0x353336.slice(_0x545758, _0x545758 + _0x299e99);
      _0x1f58b9.msync(_0x565484, _0xddbbfb, _0x1369fd, _0x299e99, _0x384496);
    },
    doMkdir: function (_0x2a37dd, _0x2d5999) {
      _0x2a37dd = _0x489cfe.normalize(_0x2a37dd);
      if (_0x2a37dd[_0x2a37dd.length - 1] === "/") {
        _0x2a37dd = _0x2a37dd.substr(0, _0x2a37dd.length - 1);
      }
      _0x1f58b9.mkdir(_0x2a37dd, _0x2d5999, 0);
      return 0;
    },
    doMknod: function (_0x4cf57e, _0x29f4fa, _0x56bde0) {
      switch (_0x29f4fa & 61440) {
        case 32768:
        case 8192:
        case 24576:
        case 4096:
        case 49152:
          break;
        default:
          return -28;
      }
      _0x1f58b9.mknod(_0x4cf57e, _0x29f4fa, _0x56bde0);
      return 0;
    },
    doReadlink: function (_0x42dc3a, _0xa30952, _0xce29db) {
      if (_0xce29db <= 0) {
        return -28;
      }
      var _0x429002 = _0x1f58b9.readlink(_0x42dc3a);
      var _0x2c8093 = Math.min(_0xce29db, _0x4bdf30(_0x429002));
      var _0x4ac1cc = _0xf9c0a9[_0xa30952 + _0x2c8093];
      _0x98a294(_0x429002, _0xa30952, _0xce29db + 1);
      _0xf9c0a9[_0xa30952 + _0x2c8093] = _0x4ac1cc;
      return _0x2c8093;
    },
    doAccess: function (_0x243ad1, _0x13436d) {
      if (_0x13436d & ~7) {
        return -28;
      }
      var _0x29c47a;
      var _0x2155bb = _0x1f58b9.lookupPath(_0x243ad1, {
        follow: true
      });
      _0x29c47a = _0x2155bb.node;
      if (!_0x29c47a) {
        return -44;
      }
      var _0x36c7b6 = "";
      if (_0x13436d & 4) {
        _0x36c7b6 += "r";
      }
      if (_0x13436d & 2) {
        _0x36c7b6 += "w";
      }
      if (_0x13436d & 1) {
        _0x36c7b6 += "x";
      }
      if (_0x36c7b6 && _0x1f58b9.nodePermissions(_0x29c47a, _0x36c7b6)) {
        return -2;
      }
      return 0;
    },
    doDup: function (_0x2cf179, _0x384681, _0x846911) {
      var _0x321fbb = _0x1f58b9.getStream(_0x846911);
      if (_0x321fbb) {
        _0x1f58b9.close(_0x321fbb);
      }
      return _0x1f58b9.open(_0x2cf179, _0x384681, 0, _0x846911, _0x846911).fd;
    },
    doReadv: function (_0xfcd361, _0x2ef9e2, _0xe214d8, _0x3ce79a) {
      var _0x26f72d = 0;
      for (var _0x593725 = 0; _0x593725 < _0xe214d8; _0x593725++) {
        var _0x340bc3 = _0x2c669e[_0x2ef9e2 + _0x593725 * 8 >> 2];
        var _0x1ea437 = _0x2c669e[_0x2ef9e2 + (_0x593725 * 8 + 4) >> 2];
        var _0x200f97 = _0x1f58b9.read(_0xfcd361, _0xf9c0a9, _0x340bc3, _0x1ea437, _0x3ce79a);
        if (_0x200f97 < 0) {
          return -1;
        }
        _0x26f72d += _0x200f97;
        if (_0x200f97 < _0x1ea437) {
          break;
        }
      }
      return _0x26f72d;
    },
    doWritev: function (_0x2b6193, _0xf54cf6, _0x2de929, _0x1920f1) {
      var _0x3a7976 = 0;
      for (var _0x42dfcd = 0; _0x42dfcd < _0x2de929; _0x42dfcd++) {
        var _0x1bbf64 = _0x2c669e[_0xf54cf6 + _0x42dfcd * 8 >> 2];
        var _0x11db3c = _0x2c669e[_0xf54cf6 + (_0x42dfcd * 8 + 4) >> 2];
        var _0x50eda4 = _0x1f58b9.write(_0x2b6193, _0xf9c0a9, _0x1bbf64, _0x11db3c, _0x1920f1);
        if (_0x50eda4 < 0) {
          return -1;
        }
        _0x3a7976 += _0x50eda4;
      }
      return _0x3a7976;
    },
    varargs: undefined,
    get: function () {
      _0x3c917f.varargs += 4;
      var _0x5afcd0 = _0x2c669e[_0x3c917f.varargs - 4 >> 2];
      return _0x5afcd0;
    },
    getStr: function (_0x25cffb) {
      var _0x292855 = _0x432dbf(_0x25cffb);
      return _0x292855;
    },
    getStreamFromFD: function (_0x3bd936) {
      var _0xb2ce33 = _0x1f58b9.getStream(_0x3bd936);
      if (!_0xb2ce33) {
        throw new _0x1f58b9.ErrnoError(8);
      }
      return _0xb2ce33;
    },
    get64: function (_0x3df2e9, _0x458afd) {
      return _0x3df2e9;
    }
  };
  function _0x3e982c(_0x1ca2c0, _0x2354d2, _0x3eb474, _0x32d684, _0x1a16f1) {
    try {
      var _0x2bb9fc = 0;
      var _0xbe0685 = _0x2354d2 ? _0x2c669e[_0x2354d2 >> 2] : 0;
      var _0x3a2d71 = _0x2354d2 ? _0x2c669e[_0x2354d2 + 4 >> 2] : 0;
      var _0x22917b = _0x3eb474 ? _0x2c669e[_0x3eb474 >> 2] : 0;
      var _0x3e5fab = _0x3eb474 ? _0x2c669e[_0x3eb474 + 4 >> 2] : 0;
      var _0x2995c2 = _0x32d684 ? _0x2c669e[_0x32d684 >> 2] : 0;
      var _0x46a8e6 = _0x32d684 ? _0x2c669e[_0x32d684 + 4 >> 2] : 0;
      var _0x400429 = 0;
      var _0x5e36fe = 0;
      var _0xfe23b6 = 0;
      var _0x3a17fd = 0;
      var _0x23db48 = 0;
      var _0x165cfb = 0;
      var _0x1d483a = (_0x2354d2 ? _0x2c669e[_0x2354d2 >> 2] : 0) | (_0x3eb474 ? _0x2c669e[_0x3eb474 >> 2] : 0) | (_0x32d684 ? _0x2c669e[_0x32d684 >> 2] : 0);
      var _0x368744 = (_0x2354d2 ? _0x2c669e[_0x2354d2 + 4 >> 2] : 0) | (_0x3eb474 ? _0x2c669e[_0x3eb474 + 4 >> 2] : 0) | (_0x32d684 ? _0x2c669e[_0x32d684 + 4 >> 2] : 0);
      function _0x3bdf26(_0x41cbd6, _0x3a0d76, _0x4e55fc, _0x1be2cb) {
        if (_0x41cbd6 < 32) {
          return _0x3a0d76 & _0x1be2cb;
        } else {
          return _0x4e55fc & _0x1be2cb;
        }
      }
      for (var _0x42ddf1 = 0; _0x42ddf1 < _0x1ca2c0; _0x42ddf1++) {
        var _0x5e7189 = 1 << _0x42ddf1 % 32;
        if (!_0x3bdf26(_0x42ddf1, _0x1d483a, _0x368744, _0x5e7189)) {
          continue;
        }
        var _0x4fda84 = _0x1f58b9.getStream(_0x42ddf1);
        if (!_0x4fda84) {
          throw new _0x1f58b9.ErrnoError(8);
        }
        var _0x1dffe7 = _0x3c917f.DEFAULT_POLLMASK;
        if (_0x4fda84.stream_ops.poll) {
          _0x1dffe7 = _0x4fda84.stream_ops.poll(_0x4fda84);
        }
        if (_0x1dffe7 & 1 && _0x3bdf26(_0x42ddf1, _0xbe0685, _0x3a2d71, _0x5e7189)) {
          if (_0x42ddf1 < 32) {
            _0x400429 = _0x400429 | _0x5e7189;
          } else {
            _0x5e36fe = _0x5e36fe | _0x5e7189;
          }
          _0x2bb9fc++;
        }
        if (_0x1dffe7 & 4 && _0x3bdf26(_0x42ddf1, _0x22917b, _0x3e5fab, _0x5e7189)) {
          if (_0x42ddf1 < 32) {
            _0xfe23b6 = _0xfe23b6 | _0x5e7189;
          } else {
            _0x3a17fd = _0x3a17fd | _0x5e7189;
          }
          _0x2bb9fc++;
        }
        if (_0x1dffe7 & 2 && _0x3bdf26(_0x42ddf1, _0x2995c2, _0x46a8e6, _0x5e7189)) {
          if (_0x42ddf1 < 32) {
            _0x23db48 = _0x23db48 | _0x5e7189;
          } else {
            _0x165cfb = _0x165cfb | _0x5e7189;
          }
          _0x2bb9fc++;
        }
      }
      if (_0x2354d2) {
        _0x2c669e[_0x2354d2 >> 2] = _0x400429;
        _0x2c669e[_0x2354d2 + 4 >> 2] = _0x5e36fe;
      }
      if (_0x3eb474) {
        _0x2c669e[_0x3eb474 >> 2] = _0xfe23b6;
        _0x2c669e[_0x3eb474 + 4 >> 2] = _0x3a17fd;
      }
      if (_0x32d684) {
        _0x2c669e[_0x32d684 >> 2] = _0x23db48;
        _0x2c669e[_0x32d684 + 4 >> 2] = _0x165cfb;
      }
      return _0x2bb9fc;
    } catch (_0x6ce571) {
      if (typeof _0x1f58b9 === "undefined" || !(_0x6ce571 instanceof _0x1f58b9.ErrnoError)) {
        _0x2f2f3c(_0x6ce571);
      }
      return -_0x6ce571.errno;
    }
  }
  var _0x58b1b5 = {
    EPERM: 63,
    ENOENT: 44,
    ESRCH: 71,
    EINTR: 27,
    EIO: 29,
    ENXIO: 60,
    E2BIG: 1,
    ENOEXEC: 45,
    EBADF: 8,
    ECHILD: 12,
    EAGAIN: 6,
    EWOULDBLOCK: 6,
    ENOMEM: 48,
    EACCES: 2,
    EFAULT: 21,
    ENOTBLK: 105,
    EBUSY: 10,
    EEXIST: 20,
    EXDEV: 75,
    ENODEV: 43,
    ENOTDIR: 54,
    EISDIR: 31,
    EINVAL: 28,
    ENFILE: 41,
    EMFILE: 33,
    ENOTTY: 59,
    ETXTBSY: 74,
    EFBIG: 22,
    ENOSPC: 51,
    ESPIPE: 70,
    EROFS: 69,
    EMLINK: 34,
    EPIPE: 64,
    EDOM: 18,
    ERANGE: 68,
    ENOMSG: 49,
    EIDRM: 24,
    ECHRNG: 106,
    EL2NSYNC: 156,
    EL3HLT: 107,
    EL3RST: 108,
    ELNRNG: 109,
    EUNATCH: 110,
    ENOCSI: 111,
    EL2HLT: 112,
    EDEADLK: 16,
    ENOLCK: 46,
    EBADE: 113,
    EBADR: 114,
    EXFULL: 115,
    ENOANO: 104,
    EBADRQC: 103,
    EBADSLT: 102,
    EDEADLOCK: 16,
    EBFONT: 101,
    ENOSTR: 100,
    ENODATA: 116,
    ETIME: 117,
    ENOSR: 118,
    ENONET: 119,
    ENOPKG: 120,
    EREMOTE: 121,
    ENOLINK: 47,
    EADV: 122,
    ESRMNT: 123,
    ECOMM: 124,
    EPROTO: 65,
    EMULTIHOP: 36,
    EDOTDOT: 125,
    EBADMSG: 9,
    ENOTUNIQ: 126,
    EBADFD: 127,
    EREMCHG: 128,
    ELIBACC: 129,
    ELIBBAD: 130,
    ELIBSCN: 131,
    ELIBMAX: 132,
    ELIBEXEC: 133,
    ENOSYS: 52,
    ENOTEMPTY: 55,
    ENAMETOOLONG: 37,
    ELOOP: 32,
    EOPNOTSUPP: 138,
    EPFNOSUPPORT: 139,
    ECONNRESET: 15,
    ENOBUFS: 42,
    EAFNOSUPPORT: 5,
    EPROTOTYPE: 67,
    ENOTSOCK: 57,
    ENOPROTOOPT: 50,
    ESHUTDOWN: 140,
    ECONNREFUSED: 14,
    EADDRINUSE: 3,
    ECONNABORTED: 13,
    ENETUNREACH: 40,
    ENETDOWN: 38,
    ETIMEDOUT: 73,
    EHOSTDOWN: 142,
    EHOSTUNREACH: 23,
    EINPROGRESS: 26,
    EALREADY: 7,
    EDESTADDRREQ: 17,
    EMSGSIZE: 35,
    EPROTONOSUPPORT: 66,
    ESOCKTNOSUPPORT: 137,
    EADDRNOTAVAIL: 4,
    ENETRESET: 39,
    EISCONN: 30,
    ENOTCONN: 53,
    ETOOMANYREFS: 141,
    EUSERS: 136,
    EDQUOT: 19,
    ESTALE: 72,
    ENOTSUP: 138,
    ENOMEDIUM: 148,
    EILSEQ: 25,
    EOVERFLOW: 61,
    ECANCELED: 11,
    ENOTRECOVERABLE: 56,
    EOWNERDEAD: 62,
    ESTRPIPE: 135
  };
  var _0x4e7fcb = {
    mount: function (_0x1f516a) {
      _0x13e282.websocket = _0x13e282.websocket && typeof _0x13e282.websocket === "object" ? _0x13e282.websocket : {};
      _0x13e282.websocket._callbacks = {};
      _0x13e282.websocket.on = function (_0x48a783, _0x5253c1) {
        if (typeof _0x5253c1 === "function") {
          this._callbacks[_0x48a783] = _0x5253c1;
        }
        return this;
      };
      _0x13e282.websocket.emit = function (_0x558a31, _0x37421c) {
        if (typeof this._callbacks[_0x558a31] === "function") {
          this._callbacks[_0x558a31].call(this, _0x37421c);
        }
      };
      return _0x1f58b9.createNode(null, "/", 16895, 0);
    },
    createSocket: function (_0x33bdae, _0xc73c6, _0x5a71f0) {
      _0xc73c6 &= ~526336;
      var _0x3116dc = _0xc73c6 == 1;
      if (_0x5a71f0) {
        _0x22d62f(_0x3116dc == (_0x5a71f0 == 6));
      }
      var _0x298fd7 = {
        family: _0x33bdae,
        type: _0xc73c6,
        protocol: _0x5a71f0,
        server: null,
        error: null,
        peers: {},
        pending: [],
        recv_queue: [],
        sock_ops: _0x4e7fcb.websocket_sock_ops
      };
      var _0x3441f9 = _0x4e7fcb.nextname();
      var _0x5c579f = _0x1f58b9.createNode(_0x4e7fcb.root, _0x3441f9, 49152, 0);
      _0x5c579f.sock = _0x298fd7;
      var _0x379a06 = _0x1f58b9.createStream({
        path: _0x3441f9,
        node: _0x5c579f,
        flags: 2,
        seekable: false,
        stream_ops: _0x4e7fcb.stream_ops
      });
      _0x298fd7.stream = _0x379a06;
      return _0x298fd7;
    },
    getSocket: function (_0x3d5caa) {
      var _0x264653 = _0x1f58b9.getStream(_0x3d5caa);
      if (!_0x264653 || !_0x1f58b9.isSocket(_0x264653.node.mode)) {
        return null;
      }
      return _0x264653.node.sock;
    },
    stream_ops: {
      poll: function (_0x3b9f2c) {
        var _0x45dd39 = _0x3b9f2c.node.sock;
        return _0x45dd39.sock_ops.poll(_0x45dd39);
      },
      ioctl: function (_0xda29f1, _0x3b01b4, _0x5d4ba2) {
        var _0x141681 = _0xda29f1.node.sock;
        return _0x141681.sock_ops.ioctl(_0x141681, _0x3b01b4, _0x5d4ba2);
      },
      read: function (_0x23df32, _0x5bb3ea, _0x5e93f9, _0x13231c, _0x543e46) {
        var _0xca85a2 = _0x23df32.node.sock;
        var _0x17bc50 = _0xca85a2.sock_ops.recvmsg(_0xca85a2, _0x13231c);
        if (!_0x17bc50) {
          return 0;
        }
        _0x5bb3ea.set(_0x17bc50.buffer, _0x5e93f9);
        return _0x17bc50.buffer.length;
      },
      write: function (_0x72babc, _0x1fb65a, _0x23c715, _0x15d706, _0x11c9a9) {
        var _0x2e0d6b = _0x72babc.node.sock;
        return _0x2e0d6b.sock_ops.sendmsg(_0x2e0d6b, _0x1fb65a, _0x23c715, _0x15d706);
      },
      close: function (_0x5e00f9) {
        var _0x1dc153 = _0x5e00f9.node.sock;
        _0x1dc153.sock_ops.close(_0x1dc153);
      }
    },
    nextname: function () {
      if (!_0x4e7fcb.nextname.current) {
        _0x4e7fcb.nextname.current = 0;
      }
      return "socket[" + _0x4e7fcb.nextname.current++ + "]";
    },
    websocket_sock_ops: {
      createPeer: function (_0x29a1be, _0x39f70d, _0x4af902) {
        var _0x3ba091;
        if (typeof _0x39f70d === "object") {
          _0x3ba091 = _0x39f70d;
          _0x39f70d = null;
          _0x4af902 = null;
        }
        if (_0x3ba091) {
          if (_0x3ba091._socket) {
            _0x39f70d = _0x3ba091._socket.remoteAddress;
            _0x4af902 = _0x3ba091._socket.remotePort;
          } else {
            var _0x1e5d0a = /ws[s]?:\/\/([^:]+):(\d+)/.exec(_0x3ba091.url);
            if (!_0x1e5d0a) {
              throw new Error("WebSocket URL must be in the format ws(s)://address:port");
            }
            _0x39f70d = _0x1e5d0a[1];
            _0x4af902 = parseInt(_0x1e5d0a[2], 10);
          }
        } else {
          try {
            var _0x29e61a = _0x13e282.websocket && typeof _0x13e282.websocket === "object";
            var _0x2dedfd = "ws:#".replace("#", "//");
            if (_0x29e61a) {
              if (typeof _0x13e282.websocket.url === "string") {
                _0x2dedfd = _0x13e282.websocket.url;
              }
            }
            if (_0x2dedfd === "ws://" || _0x2dedfd === "wss://") {
              var _0xa06470 = _0x39f70d.split("/");
              _0x2dedfd = _0x2dedfd + _0xa06470[0] + ":" + _0x4af902 + "/" + _0xa06470.slice(1).join("/");
            }
            var _0x70234b = "binary";
            if (_0x29e61a) {
              if (typeof _0x13e282.websocket.subprotocol === "string") {
                _0x70234b = _0x13e282.websocket.subprotocol;
              }
            }
            var _0x277cc9 = undefined;
            if (_0x70234b !== "null") {
              _0x70234b = _0x70234b.replace(/^ +| +$/g, "").split(/ *, */);
              _0x277cc9 = _0x13d661 ? {
                protocol: _0x70234b.toString()
              } : _0x70234b;
            }
            if (_0x29e61a && _0x13e282.websocket.subprotocol === null) {
              _0x70234b = "null";
              _0x277cc9 = undefined;
            }
            var _0x40ae12;
            if (_0x13d661) {
              _0x40ae12 = require("ws");
            } else {
              _0x40ae12 = WebSocket;
            }
            _0x3ba091 = new _0x40ae12(_0x2dedfd, _0x277cc9);
            _0x3ba091.binaryType = "arraybuffer";
          } catch (_0x5644e3) {
            throw new _0x1f58b9.ErrnoError(_0x58b1b5.EHOSTUNREACH);
          }
        }
        var _0x23a061 = {
          addr: _0x39f70d,
          port: _0x4af902,
          socket: _0x3ba091,
          dgram_send_queue: []
        };
        _0x4e7fcb.websocket_sock_ops.addPeer(_0x29a1be, _0x23a061);
        _0x4e7fcb.websocket_sock_ops.handlePeerEvents(_0x29a1be, _0x23a061);
        if (_0x29a1be.type === 2 && typeof _0x29a1be.sport !== "undefined") {
          _0x23a061.dgram_send_queue.push(new Uint8Array([255, 255, 255, 255, "p".charCodeAt(0), "o".charCodeAt(0), "r".charCodeAt(0), "t".charCodeAt(0), (_0x29a1be.sport & 65280) >> 8, _0x29a1be.sport & 255]));
        }
        return _0x23a061;
      },
      getPeer: function (_0x2014e6, _0x1b9d79, _0x50588f) {
        return _0x2014e6.peers[_0x1b9d79 + ":" + _0x50588f];
      },
      addPeer: function (_0x5637f4, _0x139db7) {
        _0x5637f4.peers[_0x139db7.addr + ":" + _0x139db7.port] = _0x139db7;
      },
      removePeer: function (_0x29074d, _0x89f987) {
        delete _0x29074d.peers[_0x89f987.addr + ":" + _0x89f987.port];
      },
      handlePeerEvents: function (_0xa3b123, _0x47de82) {
        var _0x442139 = true;
        function _0xa605bb() {
          _0x13e282.websocket.emit("open", _0xa3b123.stream.fd);
          try {
            var _0x393402 = _0x47de82.dgram_send_queue.shift();
            while (_0x393402) {
              _0x47de82.socket.send(_0x393402);
              _0x393402 = _0x47de82.dgram_send_queue.shift();
            }
          } catch (_0x3dce15) {
            _0x47de82.socket.close();
          }
        }
        function _0x47089d(_0x13057d) {
          if (typeof _0x13057d === "string") {
            var _0x244ca2 = new TextEncoder();
            _0x13057d = _0x244ca2.encode(_0x13057d);
          } else {
            _0x22d62f(_0x13057d.byteLength !== undefined);
            if (_0x13057d.byteLength == 0) {
              return;
            } else {
              _0x13057d = new Uint8Array(_0x13057d);
            }
          }
          var _0x42eb87 = _0x442139;
          _0x442139 = false;
          if (_0x42eb87 && _0x13057d.length === 10 && _0x13057d[0] === 255 && _0x13057d[1] === 255 && _0x13057d[2] === 255 && _0x13057d[3] === 255 && _0x13057d[4] === "p".charCodeAt(0) && _0x13057d[5] === "o".charCodeAt(0) && _0x13057d[6] === "r".charCodeAt(0) && _0x13057d[7] === "t".charCodeAt(0)) {
            var _0x26edb1 = _0x13057d[8] << 8 | _0x13057d[9];
            _0x4e7fcb.websocket_sock_ops.removePeer(_0xa3b123, _0x47de82);
            _0x47de82.port = _0x26edb1;
            _0x4e7fcb.websocket_sock_ops.addPeer(_0xa3b123, _0x47de82);
            return;
          }
          _0xa3b123.recv_queue.push({
            addr: _0x47de82.addr,
            port: _0x47de82.port,
            data: _0x13057d
          });
          _0x13e282.websocket.emit("message", _0xa3b123.stream.fd);
        }
        if (_0x13d661) {
          _0x47de82.socket.on("open", _0xa605bb);
          _0x47de82.socket.on("message", function (_0x24baf2, _0x13371f) {
            if (!_0x13371f.binary) {
              return;
            }
            _0x47089d(new Uint8Array(_0x24baf2).buffer);
          });
          _0x47de82.socket.on("close", function () {
            _0x13e282.websocket.emit("close", _0xa3b123.stream.fd);
          });
          _0x47de82.socket.on("error", function (_0xab0a70) {
            _0xa3b123.error = _0x58b1b5.ECONNREFUSED;
            _0x13e282.websocket.emit("error", [_0xa3b123.stream.fd, _0xa3b123.error, "ECONNREFUSED: Connection refused"]);
          });
        } else {
          _0x47de82.socket.onopen = _0xa605bb;
          _0x47de82.socket.onclose = function () {
            _0x13e282.websocket.emit("close", _0xa3b123.stream.fd);
          };
          _0x47de82.socket.onmessage = function _0x20d234(_0x57f1f4) {
            _0x47089d(_0x57f1f4.data);
          };
          _0x47de82.socket.onerror = function (_0x313279) {
            _0xa3b123.error = _0x58b1b5.ECONNREFUSED;
            _0x13e282.websocket.emit("error", [_0xa3b123.stream.fd, _0xa3b123.error, "ECONNREFUSED: Connection refused"]);
          };
        }
      },
      poll: function (_0x32014b) {
        if (_0x32014b.type === 1 && _0x32014b.server) {
          if (_0x32014b.pending.length) {
            return 65;
          } else {
            return 0;
          }
        }
        var _0x385130 = 0;
        var _0xce0922 = _0x32014b.type === 1 ? _0x4e7fcb.websocket_sock_ops.getPeer(_0x32014b, _0x32014b.daddr, _0x32014b.dport) : null;
        if (_0x32014b.recv_queue.length || !_0xce0922 || _0xce0922 && _0xce0922.socket.readyState === _0xce0922.socket.CLOSING || _0xce0922 && _0xce0922.socket.readyState === _0xce0922.socket.CLOSED) {
          _0x385130 |= 65;
        }
        if (!_0xce0922 || _0xce0922 && _0xce0922.socket.readyState === _0xce0922.socket.OPEN) {
          _0x385130 |= 4;
        }
        if (_0xce0922 && _0xce0922.socket.readyState === _0xce0922.socket.CLOSING || _0xce0922 && _0xce0922.socket.readyState === _0xce0922.socket.CLOSED) {
          _0x385130 |= 16;
        }
        return _0x385130;
      },
      ioctl: function (_0x3fd50d, _0x207175, _0x442795) {
        switch (_0x207175) {
          case 21531:
            var _0x43ecbb = 0;
            if (_0x3fd50d.recv_queue.length) {
              _0x43ecbb = _0x3fd50d.recv_queue[0].data.length;
            }
            _0x2c669e[_0x442795 >> 2] = _0x43ecbb;
            return 0;
          default:
            return _0x58b1b5.EINVAL;
        }
      },
      close: function (_0x1d4a5f) {
        if (_0x1d4a5f.server) {
          try {
            _0x1d4a5f.server.close();
          } catch (_0x495adb) {}
          _0x1d4a5f.server = null;
        }
        var _0x367bd3 = Object.keys(_0x1d4a5f.peers);
        for (var _0x182d68 = 0; _0x182d68 < _0x367bd3.length; _0x182d68++) {
          var _0x50fd8e = _0x1d4a5f.peers[_0x367bd3[_0x182d68]];
          try {
            _0x50fd8e.socket.close();
          } catch (_0x21c089) {}
          _0x4e7fcb.websocket_sock_ops.removePeer(_0x1d4a5f, _0x50fd8e);
        }
        return 0;
      },
      bind: function (_0x156c72, _0xb8d6f1, _0x2bd701) {
        if (typeof _0x156c72.saddr !== "undefined" || typeof _0x156c72.sport !== "undefined") {
          throw new _0x1f58b9.ErrnoError(_0x58b1b5.EINVAL);
        }
        _0x156c72.saddr = _0xb8d6f1;
        _0x156c72.sport = _0x2bd701;
        if (_0x156c72.type === 2) {
          if (_0x156c72.server) {
            _0x156c72.server.close();
            _0x156c72.server = null;
          }
          try {
            _0x156c72.sock_ops.listen(_0x156c72, 0);
          } catch (_0x3aeb73) {
            if (!(_0x3aeb73 instanceof _0x1f58b9.ErrnoError)) {
              throw _0x3aeb73;
            }
            if (_0x3aeb73.errno !== _0x58b1b5.EOPNOTSUPP) {
              throw _0x3aeb73;
            }
          }
        }
      },
      connect: function (_0x2ec2d0, _0x46c117, _0x3444f1) {
        if (_0x2ec2d0.server) {
          throw new _0x1f58b9.ErrnoError(_0x58b1b5.EOPNOTSUPP);
        }
        if (typeof _0x2ec2d0.daddr !== "undefined" && typeof _0x2ec2d0.dport !== "undefined") {
          var _0x999ed9 = _0x4e7fcb.websocket_sock_ops.getPeer(_0x2ec2d0, _0x2ec2d0.daddr, _0x2ec2d0.dport);
          if (_0x999ed9) {
            if (_0x999ed9.socket.readyState === _0x999ed9.socket.CONNECTING) {
              throw new _0x1f58b9.ErrnoError(_0x58b1b5.EALREADY);
            } else {
              throw new _0x1f58b9.ErrnoError(_0x58b1b5.EISCONN);
            }
          }
        }
        var _0x1530ba = _0x4e7fcb.websocket_sock_ops.createPeer(_0x2ec2d0, _0x46c117, _0x3444f1);
        _0x2ec2d0.daddr = _0x1530ba.addr;
        _0x2ec2d0.dport = _0x1530ba.port;
        throw new _0x1f58b9.ErrnoError(_0x58b1b5.EINPROGRESS);
      },
      listen: function (_0x33128a, _0x5321a2) {
        if (!_0x13d661) {
          throw new _0x1f58b9.ErrnoError(_0x58b1b5.EOPNOTSUPP);
        }
        if (_0x33128a.server) {
          throw new _0x1f58b9.ErrnoError(_0x58b1b5.EINVAL);
        }
        var _0x588918 = require("ws").Server;
        var _0x3db10d = _0x33128a.saddr;
        _0x33128a.server = new _0x588918({
          host: _0x3db10d,
          port: _0x33128a.sport
        });
        _0x13e282.websocket.emit("listen", _0x33128a.stream.fd);
        _0x33128a.server.on("connection", function (_0x41808e) {
          if (_0x33128a.type === 1) {
            var _0x331fb1 = _0x4e7fcb.createSocket(_0x33128a.family, _0x33128a.type, _0x33128a.protocol);
            var _0x4f7329 = _0x4e7fcb.websocket_sock_ops.createPeer(_0x331fb1, _0x41808e);
            _0x331fb1.daddr = _0x4f7329.addr;
            _0x331fb1.dport = _0x4f7329.port;
            _0x33128a.pending.push(_0x331fb1);
            _0x13e282.websocket.emit("connection", _0x331fb1.stream.fd);
          } else {
            _0x4e7fcb.websocket_sock_ops.createPeer(_0x33128a, _0x41808e);
            _0x13e282.websocket.emit("connection", _0x33128a.stream.fd);
          }
        });
        _0x33128a.server.on("closed", function () {
          _0x13e282.websocket.emit("close", _0x33128a.stream.fd);
          _0x33128a.server = null;
        });
        _0x33128a.server.on("error", function (_0x5d1fbd) {
          _0x33128a.error = _0x58b1b5.EHOSTUNREACH;
          _0x13e282.websocket.emit("error", [_0x33128a.stream.fd, _0x33128a.error, "EHOSTUNREACH: Host is unreachable"]);
        });
      },
      accept: function (_0x4aab91) {
        if (!_0x4aab91.server) {
          throw new _0x1f58b9.ErrnoError(_0x58b1b5.EINVAL);
        }
        var _0x33e68d = _0x4aab91.pending.shift();
        _0x33e68d.stream.flags = _0x4aab91.stream.flags;
        return _0x33e68d;
      },
      getname: function (_0x507c71, _0x733059) {
        var _0x5cc9c9;
        var _0x73a73d;
        if (_0x733059) {
          if (_0x507c71.daddr === undefined || _0x507c71.dport === undefined) {
            throw new _0x1f58b9.ErrnoError(_0x58b1b5.ENOTCONN);
          }
          _0x5cc9c9 = _0x507c71.daddr;
          _0x73a73d = _0x507c71.dport;
        } else {
          _0x5cc9c9 = _0x507c71.saddr || 0;
          _0x73a73d = _0x507c71.sport || 0;
        }
        return {
          addr: _0x5cc9c9,
          port: _0x73a73d
        };
      },
      sendmsg: function (_0x15e7da, _0x27bbb0, _0x472e22, _0x2d95b0, _0x5f5524, _0x2a2480) {
        if (_0x15e7da.type === 2) {
          if (_0x5f5524 === undefined || _0x2a2480 === undefined) {
            _0x5f5524 = _0x15e7da.daddr;
            _0x2a2480 = _0x15e7da.dport;
          }
          if (_0x5f5524 === undefined || _0x2a2480 === undefined) {
            throw new _0x1f58b9.ErrnoError(_0x58b1b5.EDESTADDRREQ);
          }
        } else {
          _0x5f5524 = _0x15e7da.daddr;
          _0x2a2480 = _0x15e7da.dport;
        }
        var _0x88e64b = _0x4e7fcb.websocket_sock_ops.getPeer(_0x15e7da, _0x5f5524, _0x2a2480);
        if (_0x15e7da.type === 1) {
          if (!_0x88e64b || _0x88e64b.socket.readyState === _0x88e64b.socket.CLOSING || _0x88e64b.socket.readyState === _0x88e64b.socket.CLOSED) {
            throw new _0x1f58b9.ErrnoError(_0x58b1b5.ENOTCONN);
          } else if (_0x88e64b.socket.readyState === _0x88e64b.socket.CONNECTING) {
            throw new _0x1f58b9.ErrnoError(_0x58b1b5.EAGAIN);
          }
        }
        if (ArrayBuffer.isView(_0x27bbb0)) {
          _0x472e22 += _0x27bbb0.byteOffset;
          _0x27bbb0 = _0x27bbb0.buffer;
        }
        var _0x49035a;
        _0x49035a = _0x27bbb0.slice(_0x472e22, _0x472e22 + _0x2d95b0);
        if (_0x15e7da.type === 2) {
          if (!_0x88e64b || _0x88e64b.socket.readyState !== _0x88e64b.socket.OPEN) {
            if (!_0x88e64b || _0x88e64b.socket.readyState === _0x88e64b.socket.CLOSING || _0x88e64b.socket.readyState === _0x88e64b.socket.CLOSED) {
              _0x88e64b = _0x4e7fcb.websocket_sock_ops.createPeer(_0x15e7da, _0x5f5524, _0x2a2480);
            }
            _0x88e64b.dgram_send_queue.push(_0x49035a);
            return _0x2d95b0;
          }
        }
        try {
          _0x88e64b.socket.send(_0x49035a);
          return _0x2d95b0;
        } catch (_0x504f5a) {
          throw new _0x1f58b9.ErrnoError(_0x58b1b5.EINVAL);
        }
      },
      recvmsg: function (_0x15c3f3, _0x38cb48) {
        if (_0x15c3f3.type === 1 && _0x15c3f3.server) {
          throw new _0x1f58b9.ErrnoError(_0x58b1b5.ENOTCONN);
        }
        var _0x368882 = _0x15c3f3.recv_queue.shift();
        if (!_0x368882) {
          if (_0x15c3f3.type === 1) {
            var _0x15ac7a = _0x4e7fcb.websocket_sock_ops.getPeer(_0x15c3f3, _0x15c3f3.daddr, _0x15c3f3.dport);
            if (!_0x15ac7a) {
              throw new _0x1f58b9.ErrnoError(_0x58b1b5.ENOTCONN);
            } else if (_0x15ac7a.socket.readyState === _0x15ac7a.socket.CLOSING || _0x15ac7a.socket.readyState === _0x15ac7a.socket.CLOSED) {
              return null;
            } else {
              throw new _0x1f58b9.ErrnoError(_0x58b1b5.EAGAIN);
            }
          } else {
            throw new _0x1f58b9.ErrnoError(_0x58b1b5.EAGAIN);
          }
        }
        var _0x394d56 = _0x368882.data.byteLength || _0x368882.data.length;
        var _0x28964c = _0x368882.data.byteOffset || 0;
        var _0x474020 = _0x368882.data.buffer || _0x368882.data;
        var _0x1efb3e = Math.min(_0x38cb48, _0x394d56);
        var _0x2143ca = {
          buffer: new Uint8Array(_0x474020, _0x28964c, _0x1efb3e),
          addr: _0x368882.addr,
          port: _0x368882.port
        };
        if (_0x15c3f3.type === 1 && _0x1efb3e < _0x394d56) {
          var _0x28cdb2 = _0x394d56 - _0x1efb3e;
          _0x368882.data = new Uint8Array(_0x474020, _0x28964c + _0x1efb3e, _0x28cdb2);
          _0x15c3f3.recv_queue.unshift(_0x368882);
        }
        return _0x2143ca;
      }
    }
  };
  function _0x1a6349(_0xb4932f) {
    var _0x4aa505 = _0x4e7fcb.getSocket(_0xb4932f);
    if (!_0x4aa505) {
      throw new _0x1f58b9.ErrnoError(8);
    }
    return _0x4aa505;
  }
  function _0x1a4aeb(_0x1d86c8) {
    _0x2c669e[_0x5e98b4() >> 2] = _0x1d86c8;
    return _0x1d86c8;
  }
  function _0x1bae1d(_0x557028) {
    var _0x1f490e = _0x557028.split(".");
    for (var _0x16a69e = 0; _0x16a69e < 4; _0x16a69e++) {
      var _0x1a95c8 = Number(_0x1f490e[_0x16a69e]);
      if (isNaN(_0x1a95c8)) {
        return null;
      }
      _0x1f490e[_0x16a69e] = _0x1a95c8;
    }
    return (_0x1f490e[0] | _0x1f490e[1] << 8 | _0x1f490e[2] << 16 | _0x1f490e[3] << 24) >>> 0;
  }
  function _0x54c929(_0x2fa2ed) {
    return parseInt(_0x2fa2ed);
  }
  function _0x488e94(_0x222703) {
    var _0x394e7c;
    var _0x3b308b;
    var _0x54597c;
    var _0x5a1a39;
    var _0x1abdb7 = /^((?=.*::)(?!.*::.+::)(::)?([\dA-F]{1,4}:(:|\b)|){5}|([\dA-F]{1,4}:){6})((([\dA-F]{1,4}((?!\3)::|:\b|$))|(?!\2\3)){2}|(((2[0-4]|1\d|[1-9])?\d|25[0-5])\.?\b){4})$/i;
    var _0xac36e8 = [];
    if (!_0x1abdb7.test(_0x222703)) {
      return null;
    }
    if (_0x222703 === "::") {
      return [0, 0, 0, 0, 0, 0, 0, 0];
    }
    if (_0x222703.startsWith("::")) {
      _0x222703 = _0x222703.replace("::", "Z:");
    } else {
      _0x222703 = _0x222703.replace("::", ":Z:");
    }
    if (_0x222703.indexOf(".") > 0) {
      _0x222703 = _0x222703.replace(new RegExp("[.]", "g"), ":");
      _0x394e7c = _0x222703.split(":");
      _0x394e7c[_0x394e7c.length - 4] = _0x54c929(_0x394e7c[_0x394e7c.length - 4]) + _0x54c929(_0x394e7c[_0x394e7c.length - 3]) * 256;
      _0x394e7c[_0x394e7c.length - 3] = _0x54c929(_0x394e7c[_0x394e7c.length - 2]) + _0x54c929(_0x394e7c[_0x394e7c.length - 1]) * 256;
      _0x394e7c = _0x394e7c.slice(0, _0x394e7c.length - 2);
    } else {
      _0x394e7c = _0x222703.split(":");
    }
    _0x54597c = 0;
    _0x5a1a39 = 0;
    for (_0x3b308b = 0; _0x3b308b < _0x394e7c.length; _0x3b308b++) {
      if (typeof _0x394e7c[_0x3b308b] === "string") {
        if (_0x394e7c[_0x3b308b] === "Z") {
          for (_0x5a1a39 = 0; _0x5a1a39 < 8 - _0x394e7c.length + 1; _0x5a1a39++) {
            _0xac36e8[_0x3b308b + _0x5a1a39] = 0;
          }
          _0x54597c = _0x5a1a39 - 1;
        } else {
          _0xac36e8[_0x3b308b + _0x54597c] = _0x170a10(parseInt(_0x394e7c[_0x3b308b], 16));
        }
      } else {
        _0xac36e8[_0x3b308b + _0x54597c] = _0x394e7c[_0x3b308b];
      }
    }
    return [_0xac36e8[1] << 16 | _0xac36e8[0], _0xac36e8[3] << 16 | _0xac36e8[2], _0xac36e8[5] << 16 | _0xac36e8[4], _0xac36e8[7] << 16 | _0xac36e8[6]];
  }
  function _0x5db01a(_0x41026a, _0x4e9e5e, _0x2b4790, _0x1d8919, _0x478e55) {
    switch (_0x4e9e5e) {
      case 2:
        _0x2b4790 = _0x1bae1d(_0x2b4790);
        if (_0x478e55) {
          _0x2c669e[_0x478e55 >> 2] = 16;
        }
        _0x2c34d4[_0x41026a >> 1] = _0x4e9e5e;
        _0x2c669e[_0x41026a + 4 >> 2] = _0x2b4790;
        _0x2c34d4[_0x41026a + 2 >> 1] = _0x170a10(_0x1d8919);
        _0x3ca3da = [0, (_0x725831 = 0, +Math.abs(_0x725831) >= 1 ? _0x725831 > 0 ? (Math.min(+Math.floor(_0x725831 / 4294967296), 4294967295) | 0) >>> 0 : ~~+Math.ceil((_0x725831 - +(~~_0x725831 >>> 0)) / 4294967296) >>> 0 : 0)];
        _0x2c669e[_0x41026a + 8 >> 2] = _0x3ca3da[0];
        _0x2c669e[_0x41026a + 12 >> 2] = _0x3ca3da[1];
        break;
      case 10:
        _0x2b4790 = _0x488e94(_0x2b4790);
        if (_0x478e55) {
          _0x2c669e[_0x478e55 >> 2] = 28;
        }
        _0x2c669e[_0x41026a >> 2] = _0x4e9e5e;
        _0x2c669e[_0x41026a + 8 >> 2] = _0x2b4790[0];
        _0x2c669e[_0x41026a + 12 >> 2] = _0x2b4790[1];
        _0x2c669e[_0x41026a + 16 >> 2] = _0x2b4790[2];
        _0x2c669e[_0x41026a + 20 >> 2] = _0x2b4790[3];
        _0x2c34d4[_0x41026a + 2 >> 1] = _0x170a10(_0x1d8919);
        _0x2c669e[_0x41026a + 4 >> 2] = 0;
        _0x2c669e[_0x41026a + 24 >> 2] = 0;
        break;
      default:
        return 5;
    }
    return 0;
  }
  var _0x47b78e = {
    address_map: {
      id: 1,
      addrs: {},
      names: {}
    },
    lookup_name: function (_0x5244ea) {
      var _0x5cd481 = _0x1bae1d(_0x5244ea);
      if (_0x5cd481 !== null) {
        return _0x5244ea;
      }
      _0x5cd481 = _0x488e94(_0x5244ea);
      if (_0x5cd481 !== null) {
        return _0x5244ea;
      }
      var _0xf0eb7b;
      if (_0x47b78e.address_map.addrs[_0x5244ea]) {
        _0xf0eb7b = _0x47b78e.address_map.addrs[_0x5244ea];
      } else {
        var _0xadd28c = _0x47b78e.address_map.id++;
        _0x22d62f(_0xadd28c < 65535, "exceeded max address mappings of 65535");
        _0xf0eb7b = "172.29." + (_0xadd28c & 255) + "." + (_0xadd28c & 65280);
        _0x47b78e.address_map.names[_0xf0eb7b] = _0x5244ea;
        _0x47b78e.address_map.addrs[_0x5244ea] = _0xf0eb7b;
      }
      return _0xf0eb7b;
    },
    lookup_addr: function (_0x3826b3) {
      if (_0x47b78e.address_map.names[_0x3826b3]) {
        return _0x47b78e.address_map.names[_0x3826b3];
      }
      return null;
    }
  };
  function _0x5c0bbc(_0x2f7fb7, _0x24d7cd, _0x8673cf, _0x1525c6) {
    try {
      var _0x11c10f = _0x1a6349(_0x2f7fb7);
      var _0x535403 = _0x11c10f.sock_ops.accept(_0x11c10f);
      if (_0x24d7cd) {
        var _0x498dd6 = _0x5db01a(_0x24d7cd, _0x535403.family, _0x47b78e.lookup_name(_0x535403.daddr), _0x535403.dport, _0x8673cf);
      }
      return _0x535403.stream.fd;
    } catch (_0x575830) {
      if (typeof _0x1f58b9 === "undefined" || !(_0x575830 instanceof _0x1f58b9.ErrnoError)) {
        _0x2f2f3c(_0x575830);
      }
      return -_0x575830.errno;
    }
  }
  function _0x2e96aa(_0x221365, _0x4adbad) {
    try {
      _0x221365 = _0x3c917f.getStr(_0x221365);
      return _0x3c917f.doAccess(_0x221365, _0x4adbad);
    } catch (_0x410e19) {
      if (typeof _0x1f58b9 === "undefined" || !(_0x410e19 instanceof _0x1f58b9.ErrnoError)) {
        _0x2f2f3c(_0x410e19);
      }
      return -_0x410e19.errno;
    }
  }
  function _0x11ff47(_0x42b46b) {
    return (_0x42b46b & 255) + "." + (_0x42b46b >> 8 & 255) + "." + (_0x42b46b >> 16 & 255) + "." + (_0x42b46b >> 24 & 255);
  }
  function _0x594c54(_0x369595) {
    var _0x18c3d9 = "";
    var _0x422d7e = 0;
    var _0x2c97ec = 0;
    var _0x39ee58 = 0;
    var _0x51b034 = 0;
    var _0x1160c2 = 0;
    var _0x24a778 = 0;
    var _0x42be27 = [_0x369595[0] & 65535, _0x369595[0] >> 16, _0x369595[1] & 65535, _0x369595[1] >> 16, _0x369595[2] & 65535, _0x369595[2] >> 16, _0x369595[3] & 65535, _0x369595[3] >> 16];
    var _0xf668bc = true;
    var _0x2c83cf = "";
    for (_0x24a778 = 0; _0x24a778 < 5; _0x24a778++) {
      if (_0x42be27[_0x24a778] !== 0) {
        _0xf668bc = false;
        break;
      }
    }
    if (_0xf668bc) {
      _0x2c83cf = _0x11ff47(_0x42be27[6] | _0x42be27[7] << 16);
      if (_0x42be27[5] === -1) {
        _0x18c3d9 = "::ffff:";
        _0x18c3d9 += _0x2c83cf;
        return _0x18c3d9;
      }
      if (_0x42be27[5] === 0) {
        _0x18c3d9 = "::";
        if (_0x2c83cf === "0.0.0.0") {
          _0x2c83cf = "";
        }
        if (_0x2c83cf === "0.0.0.1") {
          _0x2c83cf = "1";
        }
        _0x18c3d9 += _0x2c83cf;
        return _0x18c3d9;
      }
    }
    for (_0x422d7e = 0; _0x422d7e < 8; _0x422d7e++) {
      if (_0x42be27[_0x422d7e] === 0) {
        if (_0x422d7e - _0x39ee58 > 1) {
          _0x1160c2 = 0;
        }
        _0x39ee58 = _0x422d7e;
        _0x1160c2++;
      }
      if (_0x1160c2 > _0x2c97ec) {
        _0x2c97ec = _0x1160c2;
        _0x51b034 = _0x422d7e - _0x2c97ec + 1;
      }
    }
    for (_0x422d7e = 0; _0x422d7e < 8; _0x422d7e++) {
      if (_0x2c97ec > 1) {
        if (_0x42be27[_0x422d7e] === 0 && _0x422d7e >= _0x51b034 && _0x422d7e < _0x51b034 + _0x2c97ec) {
          if (_0x422d7e === _0x51b034) {
            _0x18c3d9 += ":";
            if (_0x51b034 === 0) {
              _0x18c3d9 += ":";
            }
          }
          continue;
        }
      }
      _0x18c3d9 += Number(_0x4104c9(_0x42be27[_0x422d7e] & 65535)).toString(16);
      _0x18c3d9 += _0x422d7e < 7 ? ":" : "";
    }
    return _0x18c3d9;
  }
  function _0x4b767b(_0x2b9c17, _0x301330) {
    var _0x5888a8 = _0x2c34d4[_0x2b9c17 >> 1];
    var _0x1a3509 = _0x4104c9(_0xe0cbd1[_0x2b9c17 + 2 >> 1]);
    var _0x5bbc5d;
    switch (_0x5888a8) {
      case 2:
        if (_0x301330 !== 16) {
          return {
            errno: 28
          };
        }
        _0x5bbc5d = _0x2c669e[_0x2b9c17 + 4 >> 2];
        _0x5bbc5d = _0x11ff47(_0x5bbc5d);
        break;
      case 10:
        if (_0x301330 !== 28) {
          return {
            errno: 28
          };
        }
        _0x5bbc5d = [_0x2c669e[_0x2b9c17 + 8 >> 2], _0x2c669e[_0x2b9c17 + 12 >> 2], _0x2c669e[_0x2b9c17 + 16 >> 2], _0x2c669e[_0x2b9c17 + 20 >> 2]];
        _0x5bbc5d = _0x594c54(_0x5bbc5d);
        break;
      default:
        return {
          errno: 5
        };
    }
    return {
      family: _0x5888a8,
      addr: _0x5bbc5d,
      port: _0x1a3509
    };
  }
  function _0x32938f(_0x31020f, _0x587932, _0x11ddb8) {
    if (_0x11ddb8 && _0x31020f === 0) {
      return null;
    }
    var _0x25f22e = _0x4b767b(_0x31020f, _0x587932);
    if (_0x25f22e.errno) {
      throw new _0x1f58b9.ErrnoError(_0x25f22e.errno);
    }
    _0x25f22e.addr = _0x47b78e.lookup_addr(_0x25f22e.addr) || _0x25f22e.addr;
    return _0x25f22e;
  }
  function _0x4da5fc(_0x5082ba, _0x3ea4d1, _0x26ec82) {
    try {
      var _0x2ce305 = _0x1a6349(_0x5082ba);
      var _0x170404 = _0x32938f(_0x3ea4d1, _0x26ec82);
      _0x2ce305.sock_ops.bind(_0x2ce305, _0x170404.addr, _0x170404.port);
      return 0;
    } catch (_0xf06b16) {
      if (typeof _0x1f58b9 === "undefined" || !(_0xf06b16 instanceof _0x1f58b9.ErrnoError)) {
        _0x2f2f3c(_0xf06b16);
      }
      return -_0xf06b16.errno;
    }
  }
  function _0x590038(_0x559b50, _0x23feee) {
    try {
      _0x559b50 = _0x3c917f.getStr(_0x559b50);
      _0x1f58b9.chmod(_0x559b50, _0x23feee);
      return 0;
    } catch (_0x5ca253) {
      if (typeof _0x1f58b9 === "undefined" || !(_0x5ca253 instanceof _0x1f58b9.ErrnoError)) {
        _0x2f2f3c(_0x5ca253);
      }
      return -_0x5ca253.errno;
    }
  }
  function _0x553b53(_0x14e4ee, _0xccae7d, _0x12355a) {
    try {
      var _0x1290c7 = _0x1a6349(_0x14e4ee);
      var _0xf414fb = _0x32938f(_0xccae7d, _0x12355a);
      _0x1290c7.sock_ops.connect(_0x1290c7, _0xf414fb.addr, _0xf414fb.port);
      return 0;
    } catch (_0x59cc6a) {
      if (typeof _0x1f58b9 === "undefined" || !(_0x59cc6a instanceof _0x1f58b9.ErrnoError)) {
        _0x2f2f3c(_0x59cc6a);
      }
      return -_0x59cc6a.errno;
    }
  }
  function _0x283a96(_0x533cdf, _0x1233c5) {
    try {
      var _0x34e571 = _0x3c917f.getStreamFromFD(_0x533cdf);
      if (_0x34e571.fd === _0x1233c5) {
        return _0x1233c5;
      }
      return _0x3c917f.doDup(_0x34e571.path, _0x34e571.flags, _0x1233c5);
    } catch (_0x51f0bd) {
      if (typeof _0x1f58b9 === "undefined" || !(_0x51f0bd instanceof _0x1f58b9.ErrnoError)) {
        _0x2f2f3c(_0x51f0bd);
      }
      return -_0x51f0bd.errno;
    }
  }
  function _0x14fcec(_0x44b226, _0x4321e1, _0x2007c6) {
    _0x3c917f.varargs = _0x2007c6;
    try {
      var _0xa082ed = _0x3c917f.getStreamFromFD(_0x44b226);
      switch (_0x4321e1) {
        case 0:
          {
            var _0x424fef = _0x3c917f.get();
            if (_0x424fef < 0) {
              return -28;
            }
            var _0xaa2157;
            _0xaa2157 = _0x1f58b9.open(_0xa082ed.path, _0xa082ed.flags, 0, _0x424fef);
            return _0xaa2157.fd;
          }
        case 1:
        case 2:
          return 0;
        case 3:
          return _0xa082ed.flags;
        case 4:
          {
            var _0x424fef = _0x3c917f.get();
            _0xa082ed.flags |= _0x424fef;
            return 0;
          }
        case 12:
          {
            var _0x424fef = _0x3c917f.get();
            var _0x4cb8ea = 0;
            _0x2c34d4[_0x424fef + _0x4cb8ea >> 1] = 2;
            return 0;
          }
        case 13:
        case 14:
          return 0;
        case 16:
        case 8:
          return -28;
        case 9:
          _0x1a4aeb(28);
          return -1;
        default:
          {
            return -28;
          }
      }
    } catch (_0x1fc227) {
      if (typeof _0x1f58b9 === "undefined" || !(_0x1fc227 instanceof _0x1f58b9.ErrnoError)) {
        _0x2f2f3c(_0x1fc227);
      }
      return -_0x1fc227.errno;
    }
  }
  function _0x4c44ac(_0x518710, _0xd98b03) {
    try {
      var _0x3dfe67 = _0x3c917f.getStreamFromFD(_0x518710);
      return _0x3c917f.doStat(_0x1f58b9.stat, _0x3dfe67.path, _0xd98b03);
    } catch (_0xbee1a0) {
      if (typeof _0x1f58b9 === "undefined" || !(_0xbee1a0 instanceof _0x1f58b9.ErrnoError)) {
        _0x2f2f3c(_0xbee1a0);
      }
      return -_0xbee1a0.errno;
    }
  }
  function _0x46df8a(_0x4c914f, _0x5d9b21, _0x3b58f9, _0x4664da) {
    try {
      var _0x1b4be2 = _0x3c917f.get64(_0x3b58f9, _0x4664da);
      _0x1f58b9.ftruncate(_0x4c914f, _0x1b4be2);
      return 0;
    } catch (_0xc3a459) {
      if (typeof _0x1f58b9 === "undefined" || !(_0xc3a459 instanceof _0x1f58b9.ErrnoError)) {
        _0x2f2f3c(_0xc3a459);
      }
      return -_0xc3a459.errno;
    }
  }
  function _0x50b09e(_0x215ee2, _0x149539) {
    try {
      if (_0x149539 === 0) {
        return -28;
      }
      var _0x4bb879 = _0x1f58b9.cwd();
      var _0x1cf852 = _0x4bdf30(_0x4bb879);
      if (_0x149539 < _0x1cf852 + 1) {
        return -68;
      }
      _0x98a294(_0x4bb879, _0x215ee2, _0x149539);
      return _0x215ee2;
    } catch (_0x1dcbbf) {
      if (typeof _0x1f58b9 === "undefined" || !(_0x1dcbbf instanceof _0x1f58b9.ErrnoError)) {
        _0x2f2f3c(_0x1dcbbf);
      }
      return -_0x1dcbbf.errno;
    }
  }
  function _0xaa0cd3(_0x152cf1, _0x380dbe, _0x5243a1) {
    try {
      var _0x24eb1f = _0x3c917f.getStreamFromFD(_0x152cf1);
      if (!_0x24eb1f.getdents) {
        _0x24eb1f.getdents = _0x1f58b9.readdir(_0x24eb1f.path);
      }
      var _0x2f1d6b = 280;
      var _0x563112 = 0;
      var _0x200552 = _0x1f58b9.llseek(_0x24eb1f, 0, 1);
      var _0x655f89 = Math.floor(_0x200552 / _0x2f1d6b);
      while (_0x655f89 < _0x24eb1f.getdents.length && _0x563112 + _0x2f1d6b <= _0x5243a1) {
        var _0x318a0e;
        var _0x57d5b3;
        var _0x143c11 = _0x24eb1f.getdents[_0x655f89];
        if (_0x143c11[0] === ".") {
          _0x318a0e = 1;
          _0x57d5b3 = 4;
        } else {
          var _0x5e35a1 = _0x1f58b9.lookupNode(_0x24eb1f.node, _0x143c11);
          _0x318a0e = _0x5e35a1.id;
          _0x57d5b3 = _0x1f58b9.isChrdev(_0x5e35a1.mode) ? 2 : _0x1f58b9.isDir(_0x5e35a1.mode) ? 4 : _0x1f58b9.isLink(_0x5e35a1.mode) ? 10 : 8;
        }
        _0x3ca3da = [_0x318a0e >>> 0, (_0x725831 = _0x318a0e, +Math.abs(_0x725831) >= 1 ? _0x725831 > 0 ? (Math.min(+Math.floor(_0x725831 / 4294967296), 4294967295) | 0) >>> 0 : ~~+Math.ceil((_0x725831 - +(~~_0x725831 >>> 0)) / 4294967296) >>> 0 : 0)];
        _0x2c669e[_0x380dbe + _0x563112 >> 2] = _0x3ca3da[0];
        _0x2c669e[_0x380dbe + _0x563112 + 4 >> 2] = _0x3ca3da[1];
        _0x3ca3da = [(_0x655f89 + 1) * _0x2f1d6b >>> 0, (_0x725831 = (_0x655f89 + 1) * _0x2f1d6b, +Math.abs(_0x725831) >= 1 ? _0x725831 > 0 ? (Math.min(+Math.floor(_0x725831 / 4294967296), 4294967295) | 0) >>> 0 : ~~+Math.ceil((_0x725831 - +(~~_0x725831 >>> 0)) / 4294967296) >>> 0 : 0)];
        _0x2c669e[_0x380dbe + _0x563112 + 8 >> 2] = _0x3ca3da[0];
        _0x2c669e[_0x380dbe + _0x563112 + 12 >> 2] = _0x3ca3da[1];
        _0x2c34d4[_0x380dbe + _0x563112 + 16 >> 1] = 280;
        _0xf9c0a9[_0x380dbe + _0x563112 + 18 >> 0] = _0x57d5b3;
        _0x98a294(_0x143c11, _0x380dbe + _0x563112 + 19, 256);
        _0x563112 += _0x2f1d6b;
        _0x655f89 += 1;
      }
      _0x1f58b9.llseek(_0x24eb1f, _0x655f89 * _0x2f1d6b, 0);
      return _0x563112;
    } catch (_0x1c9c40) {
      if (typeof _0x1f58b9 === "undefined" || !(_0x1c9c40 instanceof _0x1f58b9.ErrnoError)) {
        _0x2f2f3c(_0x1c9c40);
      }
      return -_0x1c9c40.errno;
    }
  }
  function _0x37d216() {
    return 0;
  }
  function _0x3f3052() {
    return _0x37d216();
  }
  function _0x22ceba(_0x42b500, _0x489d41, _0x427a9d) {
    try {
      var _0x57d4a0 = _0x1a6349(_0x42b500);
      if (!_0x57d4a0.daddr) {
        return -53;
      }
      var _0x541157 = _0x5db01a(_0x489d41, _0x57d4a0.family, _0x47b78e.lookup_name(_0x57d4a0.daddr), _0x57d4a0.dport, _0x427a9d);
      return 0;
    } catch (_0x5fa6c3) {
      if (typeof _0x1f58b9 === "undefined" || !(_0x5fa6c3 instanceof _0x1f58b9.ErrnoError)) {
        _0x2f2f3c(_0x5fa6c3);
      }
      return -_0x5fa6c3.errno;
    }
  }
  function _0x3b5d90(_0x4d3351, _0x4dd76d) {
    try {
      _0x2c2aa8(_0x4dd76d, 0, 136);
      _0x2c669e[_0x4dd76d >> 2] = 1;
      _0x2c669e[_0x4dd76d + 4 >> 2] = 2;
      _0x2c669e[_0x4dd76d + 8 >> 2] = 3;
      _0x2c669e[_0x4dd76d + 12 >> 2] = 4;
      return 0;
    } catch (_0x707b90) {
      if (typeof _0x1f58b9 === "undefined" || !(_0x707b90 instanceof _0x1f58b9.ErrnoError)) {
        _0x2f2f3c(_0x707b90);
      }
      return -_0x707b90.errno;
    }
  }
  function _0x2e4bec(_0x273975, _0x135931, _0x23be3c) {
    try {
      _0x500e9("__sys_getsockname " + _0x273975);
      var _0x9ef591 = _0x1a6349(_0x273975);
      var _0x2d41a6 = _0x5db01a(_0x135931, _0x9ef591.family, _0x47b78e.lookup_name(_0x9ef591.saddr || "0.0.0.0"), _0x9ef591.sport, _0x23be3c);
      return 0;
    } catch (_0x24492c) {
      if (typeof _0x1f58b9 === "undefined" || !(_0x24492c instanceof _0x1f58b9.ErrnoError)) {
        _0x2f2f3c(_0x24492c);
      }
      return -_0x24492c.errno;
    }
  }
  function _0x19f6f8(_0x5c5dd7, _0x49a9a1, _0x408637, _0x2ceebb, _0x193265) {
    try {
      var _0x4b8706 = _0x1a6349(_0x5c5dd7);
      if (_0x49a9a1 === 1) {
        if (_0x408637 === 4) {
          _0x2c669e[_0x2ceebb >> 2] = _0x4b8706.error;
          _0x2c669e[_0x193265 >> 2] = 4;
          _0x4b8706.error = null;
          return 0;
        }
      }
      return -50;
    } catch (_0x278ac5) {
      if (typeof _0x1f58b9 === "undefined" || !(_0x278ac5 instanceof _0x1f58b9.ErrnoError)) {
        _0x2f2f3c(_0x278ac5);
      }
      return -_0x278ac5.errno;
    }
  }
  function _0x48a49c() {
    return _0x37d216();
  }
  function _0x37efe9(_0x19eafe, _0x49b1bf, _0x3081f1) {
    _0x3c917f.varargs = _0x3081f1;
    try {
      var _0x49fdd4 = _0x3c917f.getStreamFromFD(_0x19eafe);
      switch (_0x49b1bf) {
        case 21509:
        case 21505:
          {
            if (!_0x49fdd4.tty) {
              return -59;
            }
            return 0;
          }
        case 21510:
        case 21511:
        case 21512:
        case 21506:
        case 21507:
        case 21508:
          {
            if (!_0x49fdd4.tty) {
              return -59;
            }
            return 0;
          }
        case 21519:
          {
            if (!_0x49fdd4.tty) {
              return -59;
            }
            var _0x1df1ba = _0x3c917f.get();
            _0x2c669e[_0x1df1ba >> 2] = 0;
            return 0;
          }
        case 21520:
          {
            if (!_0x49fdd4.tty) {
              return -59;
            }
            return -28;
          }
        case 21531:
          {
            var _0x1df1ba = _0x3c917f.get();
            return _0x1f58b9.ioctl(_0x49fdd4, _0x49b1bf, _0x1df1ba);
          }
        case 21523:
          {
            if (!_0x49fdd4.tty) {
              return -59;
            }
            return 0;
          }
        case 21524:
          {
            if (!_0x49fdd4.tty) {
              return -59;
            }
            return 0;
          }
        default:
          _0x2f2f3c("bad ioctl syscall " + _0x49b1bf);
      }
    } catch (_0x1ae549) {
      if (typeof _0x1f58b9 === "undefined" || !(_0x1ae549 instanceof _0x1f58b9.ErrnoError)) {
        _0x2f2f3c(_0x1ae549);
      }
      return -_0x1ae549.errno;
    }
  }
  function _0x47e15a(_0x2ae417, _0x5c92b0) {
    try {
      var _0x2bf921 = _0x1a6349(_0x2ae417);
      _0x2bf921.sock_ops.listen(_0x2bf921, _0x5c92b0);
      return 0;
    } catch (_0x1137ad) {
      if (typeof _0x1f58b9 === "undefined" || !(_0x1137ad instanceof _0x1f58b9.ErrnoError)) {
        _0x2f2f3c(_0x1137ad);
      }
      return -_0x1137ad.errno;
    }
  }
  function _0x3342dc(_0x2ac7bb, _0x39ac4b) {
    try {
      _0x2ac7bb = _0x3c917f.getStr(_0x2ac7bb);
      return _0x3c917f.doStat(_0x1f58b9.lstat, _0x2ac7bb, _0x39ac4b);
    } catch (_0x5ddf88) {
      if (typeof _0x1f58b9 === "undefined" || !(_0x5ddf88 instanceof _0x1f58b9.ErrnoError)) {
        _0x2f2f3c(_0x5ddf88);
      }
      return -_0x5ddf88.errno;
    }
  }
  function _0x604041(_0xf8cfd5, _0x19b638) {
    try {
      _0xf8cfd5 = _0x3c917f.getStr(_0xf8cfd5);
      return _0x3c917f.doMkdir(_0xf8cfd5, _0x19b638);
    } catch (_0x3da205) {
      if (typeof _0x1f58b9 === "undefined" || !(_0x3da205 instanceof _0x1f58b9.ErrnoError)) {
        _0x2f2f3c(_0x3da205);
      }
      return -_0x3da205.errno;
    }
  }
  function _0x5b075a(_0x1e1679, _0x43c5f3, _0x2fd65a, _0x4d4357, _0x474507, _0xb4b09a) {
    _0xb4b09a <<= 12;
    var _0xa73511;
    var _0x3f3dd5 = false;
    if ((_0x4d4357 & 16) !== 0 && _0x1e1679 % 65536 !== 0) {
      return -28;
    }
    if ((_0x4d4357 & 32) !== 0) {
      _0xa73511 = _0x65fb06(65536, _0x43c5f3);
      if (!_0xa73511) {
        return -48;
      }
      _0x2c2aa8(_0xa73511, 0, _0x43c5f3);
      _0x3f3dd5 = true;
    } else {
      var _0x2365aa = _0x1f58b9.getStream(_0x474507);
      if (!_0x2365aa) {
        return -8;
      }
      var _0x56db99 = _0x1f58b9.mmap(_0x2365aa, _0x1e1679, _0x43c5f3, _0xb4b09a, _0x2fd65a, _0x4d4357);
      _0xa73511 = _0x56db99.ptr;
      _0x3f3dd5 = _0x56db99.allocated;
    }
    _0x3c917f.mappings[_0xa73511] = {
      malloc: _0xa73511,
      len: _0x43c5f3,
      allocated: _0x3f3dd5,
      fd: _0x474507,
      prot: _0x2fd65a,
      flags: _0x4d4357,
      offset: _0xb4b09a
    };
    return _0xa73511;
  }
  function _0x458aea(_0x20d88a, _0x2bdf9b, _0x145e62, _0x56b7b5, _0xb45ff5, _0x11e56f) {
    try {
      return _0x5b075a(_0x20d88a, _0x2bdf9b, _0x145e62, _0x56b7b5, _0xb45ff5, _0x11e56f);
    } catch (_0x51f573) {
      if (typeof _0x1f58b9 === "undefined" || !(_0x51f573 instanceof _0x1f58b9.ErrnoError)) {
        _0x2f2f3c(_0x51f573);
      }
      return -_0x51f573.errno;
    }
  }
  function _0x9445fa(_0x37582a, _0x27cb7e) {
    if ((_0x37582a | 0) === -1 || _0x27cb7e === 0) {
      return -28;
    }
    var _0xa1e624 = _0x3c917f.mappings[_0x37582a];
    if (!_0xa1e624) {
      return 0;
    }
    if (_0x27cb7e === _0xa1e624.len) {
      var _0x358e32 = _0x1f58b9.getStream(_0xa1e624.fd);
      if (_0x358e32) {
        if (_0xa1e624.prot & 2) {
          _0x3c917f.doMsync(_0x37582a, _0x358e32, _0x27cb7e, _0xa1e624.flags, _0xa1e624.offset);
        }
        _0x1f58b9.munmap(_0x358e32);
      }
      _0x3c917f.mappings[_0x37582a] = null;
      if (_0xa1e624.allocated) {
        _0x50622a(_0xa1e624.malloc);
      }
    }
    return 0;
  }
  function _0x3d0641(_0x4e0029, _0x64b379) {
    try {
      return _0x9445fa(_0x4e0029, _0x64b379);
    } catch (_0x585c0e) {
      if (typeof _0x1f58b9 === "undefined" || !(_0x585c0e instanceof _0x1f58b9.ErrnoError)) {
        _0x2f2f3c(_0x585c0e);
      }
      return -_0x585c0e.errno;
    }
  }
  function _0x253b84(_0x39a645, _0x3c91f0, _0x4c46df) {
    _0x3c917f.varargs = _0x4c46df;
    try {
      var _0x49f48d = _0x3c917f.getStr(_0x39a645);
      var _0x44c9d6 = _0x4c46df ? _0x3c917f.get() : 0;
      var _0x29a2ef = _0x1f58b9.open(_0x49f48d, _0x3c91f0, _0x44c9d6);
      return _0x29a2ef.fd;
    } catch (_0x2c6e29) {
      if (typeof _0x1f58b9 === "undefined" || !(_0x2c6e29 instanceof _0x1f58b9.ErrnoError)) {
        _0x2f2f3c(_0x2c6e29);
      }
      return -_0x2c6e29.errno;
    }
  }
  var _0x44abc2 = {
    BUCKET_BUFFER_SIZE: 8192,
    mount: function (_0xf6f2ba) {
      return _0x1f58b9.createNode(null, "/", 16895, 0);
    },
    createPipe: function () {
      var _0xcabbc8 = {
        buckets: []
      };
      _0xcabbc8.buckets.push({
        buffer: new Uint8Array(_0x44abc2.BUCKET_BUFFER_SIZE),
        offset: 0,
        roffset: 0
      });
      var _0xefff4f = _0x44abc2.nextname();
      var _0x4efd48 = _0x44abc2.nextname();
      var _0x1b5a22 = _0x1f58b9.createNode(_0x44abc2.root, _0xefff4f, 4096, 0);
      var _0x1da05c = _0x1f58b9.createNode(_0x44abc2.root, _0x4efd48, 4096, 0);
      _0x1b5a22.pipe = _0xcabbc8;
      _0x1da05c.pipe = _0xcabbc8;
      var _0x330d52 = _0x1f58b9.createStream({
        path: _0xefff4f,
        node: _0x1b5a22,
        flags: 0,
        seekable: false,
        stream_ops: _0x44abc2.stream_ops
      });
      _0x1b5a22.stream = _0x330d52;
      var _0x345ec3 = _0x1f58b9.createStream({
        path: _0x4efd48,
        node: _0x1da05c,
        flags: 1,
        seekable: false,
        stream_ops: _0x44abc2.stream_ops
      });
      _0x1da05c.stream = _0x345ec3;
      return {
        readable_fd: _0x330d52.fd,
        writable_fd: _0x345ec3.fd
      };
    },
    stream_ops: {
      poll: function (_0x5614ba) {
        var _0x59969b = _0x5614ba.node.pipe;
        if ((_0x5614ba.flags & 2097155) === 1) {
          return 260;
        } else if (_0x59969b.buckets.length > 0) {
          for (var _0x2c20e8 = 0; _0x2c20e8 < _0x59969b.buckets.length; _0x2c20e8++) {
            var _0x5c9038 = _0x59969b.buckets[_0x2c20e8];
            if (_0x5c9038.offset - _0x5c9038.roffset > 0) {
              return 65;
            }
          }
        }
        return 0;
      },
      ioctl: function (_0x13d88f, _0x2922e0, _0x539997) {
        return _0x58b1b5.EINVAL;
      },
      fsync: function (_0x1245dc) {
        return _0x58b1b5.EINVAL;
      },
      read: function (_0x1ec056, _0x5ef9f3, _0x2afc2e, _0x24ff0b, _0x1b0f53) {
        var _0x445c5f = _0x1ec056.node.pipe;
        var _0x3fb110 = 0;
        for (var _0x325b88 = 0; _0x325b88 < _0x445c5f.buckets.length; _0x325b88++) {
          var _0xcbc9a1 = _0x445c5f.buckets[_0x325b88];
          _0x3fb110 += _0xcbc9a1.offset - _0xcbc9a1.roffset;
        }
        _0x22d62f(_0x5ef9f3 instanceof ArrayBuffer || ArrayBuffer.isView(_0x5ef9f3));
        var _0x5830fa = _0x5ef9f3.subarray(_0x2afc2e, _0x2afc2e + _0x24ff0b);
        if (_0x24ff0b <= 0) {
          return 0;
        }
        if (_0x3fb110 == 0) {
          throw new _0x1f58b9.ErrnoError(_0x58b1b5.EAGAIN);
        }
        var _0x4f6117 = Math.min(_0x3fb110, _0x24ff0b);
        var _0x44985b = _0x4f6117;
        var _0xecad36 = 0;
        for (var _0x325b88 = 0; _0x325b88 < _0x445c5f.buckets.length; _0x325b88++) {
          var _0x58b884 = _0x445c5f.buckets[_0x325b88];
          var _0x15b347 = _0x58b884.offset - _0x58b884.roffset;
          if (_0x4f6117 <= _0x15b347) {
            var _0x2659b6 = _0x58b884.buffer.subarray(_0x58b884.roffset, _0x58b884.offset);
            if (_0x4f6117 < _0x15b347) {
              _0x2659b6 = _0x2659b6.subarray(0, _0x4f6117);
              _0x58b884.roffset += _0x4f6117;
            } else {
              _0xecad36++;
            }
            _0x5830fa.set(_0x2659b6);
            break;
          } else {
            var _0x2659b6 = _0x58b884.buffer.subarray(_0x58b884.roffset, _0x58b884.offset);
            _0x5830fa.set(_0x2659b6);
            _0x5830fa = _0x5830fa.subarray(_0x2659b6.byteLength);
            _0x4f6117 -= _0x2659b6.byteLength;
            _0xecad36++;
          }
        }
        if (_0xecad36 && _0xecad36 == _0x445c5f.buckets.length) {
          _0xecad36--;
          _0x445c5f.buckets[_0xecad36].offset = 0;
          _0x445c5f.buckets[_0xecad36].roffset = 0;
        }
        _0x445c5f.buckets.splice(0, _0xecad36);
        return _0x44985b;
      },
      write: function (_0x198378, _0x31bbb8, _0x1121ae, _0x35e5f9, _0x48aec8) {
        var _0x2c922d = _0x198378.node.pipe;
        _0x22d62f(_0x31bbb8 instanceof ArrayBuffer || ArrayBuffer.isView(_0x31bbb8));
        var _0x5863c9 = _0x31bbb8.subarray(_0x1121ae, _0x1121ae + _0x35e5f9);
        var _0x22af4b = _0x5863c9.byteLength;
        if (_0x22af4b <= 0) {
          return 0;
        }
        var _0x3b40ad = null;
        if (_0x2c922d.buckets.length == 0) {
          _0x3b40ad = {
            buffer: new Uint8Array(_0x44abc2.BUCKET_BUFFER_SIZE),
            offset: 0,
            roffset: 0
          };
          _0x2c922d.buckets.push(_0x3b40ad);
        } else {
          _0x3b40ad = _0x2c922d.buckets[_0x2c922d.buckets.length - 1];
        }
        _0x22d62f(_0x3b40ad.offset <= _0x44abc2.BUCKET_BUFFER_SIZE);
        var _0x630816 = _0x44abc2.BUCKET_BUFFER_SIZE - _0x3b40ad.offset;
        if (_0x630816 >= _0x22af4b) {
          _0x3b40ad.buffer.set(_0x5863c9, _0x3b40ad.offset);
          _0x3b40ad.offset += _0x22af4b;
          return _0x22af4b;
        } else if (_0x630816 > 0) {
          _0x3b40ad.buffer.set(_0x5863c9.subarray(0, _0x630816), _0x3b40ad.offset);
          _0x3b40ad.offset += _0x630816;
          _0x5863c9 = _0x5863c9.subarray(_0x630816, _0x5863c9.byteLength);
        }
        var _0x11ea40 = _0x5863c9.byteLength / _0x44abc2.BUCKET_BUFFER_SIZE | 0;
        var _0x578103 = _0x5863c9.byteLength % _0x44abc2.BUCKET_BUFFER_SIZE;
        for (var _0x11d6c9 = 0; _0x11d6c9 < _0x11ea40; _0x11d6c9++) {
          var _0x554259 = {
            buffer: new Uint8Array(_0x44abc2.BUCKET_BUFFER_SIZE),
            offset: _0x44abc2.BUCKET_BUFFER_SIZE,
            roffset: 0
          };
          _0x2c922d.buckets.push(_0x554259);
          _0x554259.buffer.set(_0x5863c9.subarray(0, _0x44abc2.BUCKET_BUFFER_SIZE));
          _0x5863c9 = _0x5863c9.subarray(_0x44abc2.BUCKET_BUFFER_SIZE, _0x5863c9.byteLength);
        }
        if (_0x578103 > 0) {
          var _0x554259 = {
            buffer: new Uint8Array(_0x44abc2.BUCKET_BUFFER_SIZE),
            offset: _0x5863c9.byteLength,
            roffset: 0
          };
          _0x2c922d.buckets.push(_0x554259);
          _0x554259.buffer.set(_0x5863c9);
        }
        return _0x22af4b;
      },
      close: function (_0x28354f) {
        var _0x3e0fae = _0x28354f.node.pipe;
        _0x3e0fae.buckets = null;
      }
    },
    nextname: function () {
      if (!_0x44abc2.nextname.current) {
        _0x44abc2.nextname.current = 0;
      }
      return "pipe[" + _0x44abc2.nextname.current++ + "]";
    }
  };
  function _0xb53e1b(_0x389eaa) {
    try {
      if (_0x389eaa == 0) {
        throw new _0x1f58b9.ErrnoError(21);
      }
      var _0x50f8f3 = _0x44abc2.createPipe();
      _0x2c669e[_0x389eaa >> 2] = _0x50f8f3.readable_fd;
      _0x2c669e[_0x389eaa + 4 >> 2] = _0x50f8f3.writable_fd;
      return 0;
    } catch (_0x1b1f1d) {
      if (typeof _0x1f58b9 === "undefined" || !(_0x1b1f1d instanceof _0x1f58b9.ErrnoError)) {
        _0x2f2f3c(_0x1b1f1d);
      }
      return -_0x1b1f1d.errno;
    }
  }
  function _0x3946ca(_0x244a98, _0x5c80cc, _0x39ced3) {
    try {
      var _0x4793c8 = 0;
      for (var _0x18d100 = 0; _0x18d100 < _0x5c80cc; _0x18d100++) {
        var _0x54ccd1 = _0x244a98 + _0x18d100 * 8;
        var _0x43fd7b = _0x2c669e[_0x54ccd1 >> 2];
        var _0x51cc9f = _0x2c34d4[_0x54ccd1 + 4 >> 1];
        var _0x181503 = 32;
        var _0x2eced4 = _0x1f58b9.getStream(_0x43fd7b);
        if (_0x2eced4) {
          _0x181503 = _0x3c917f.DEFAULT_POLLMASK;
          if (_0x2eced4.stream_ops.poll) {
            _0x181503 = _0x2eced4.stream_ops.poll(_0x2eced4);
          }
        }
        _0x181503 &= _0x51cc9f | 8 | 16;
        if (_0x181503) {
          _0x4793c8++;
        }
        _0x2c34d4[_0x54ccd1 + 6 >> 1] = _0x181503;
      }
      return _0x4793c8;
    } catch (_0x218919) {
      if (typeof _0x1f58b9 === "undefined" || !(_0x218919 instanceof _0x1f58b9.ErrnoError)) {
        _0x2f2f3c(_0x218919);
      }
      return -_0x218919.errno;
    }
  }
  function _0x5694ed(_0xd01f2c, _0x4d7df4, _0x370345) {
    try {
      _0xd01f2c = _0x3c917f.getStr(_0xd01f2c);
      return _0x3c917f.doReadlink(_0xd01f2c, _0x4d7df4, _0x370345);
    } catch (_0x2a6409) {
      if (typeof _0x1f58b9 === "undefined" || !(_0x2a6409 instanceof _0x1f58b9.ErrnoError)) {
        _0x2f2f3c(_0x2a6409);
      }
      return -_0x2a6409.errno;
    }
  }
  function _0x3674a1(_0xf062c7, _0xd15182, _0xc33a0d, _0x48744e, _0x4d8cb8, _0x2f9b9d) {
    try {
      var _0x55e4be = _0x1a6349(_0xf062c7);
      var _0x4d49a6 = _0x55e4be.sock_ops.recvmsg(_0x55e4be, _0xc33a0d);
      if (!_0x4d49a6) {
        return 0;
      }
      if (_0x4d8cb8) {
        var _0x53f008 = _0x5db01a(_0x4d8cb8, _0x55e4be.family, _0x47b78e.lookup_name(_0x4d49a6.addr), _0x4d49a6.port, _0x2f9b9d);
      }
      _0x353336.set(_0x4d49a6.buffer, _0xd15182);
      return _0x4d49a6.buffer.byteLength;
    } catch (_0x3e785b) {
      if (typeof _0x1f58b9 === "undefined" || !(_0x3e785b instanceof _0x1f58b9.ErrnoError)) {
        _0x2f2f3c(_0x3e785b);
      }
      return -_0x3e785b.errno;
    }
  }
  function _0x2ad788(_0x588646, _0x5f2f40, _0x26571e) {
    try {
      var _0x3da0ed = _0x1a6349(_0x588646);
      var _0x384ef3 = _0x2c669e[_0x5f2f40 + 8 >> 2];
      var _0x395897 = _0x2c669e[_0x5f2f40 + 12 >> 2];
      var _0x168268 = 0;
      for (var _0x2e247a = 0; _0x2e247a < _0x395897; _0x2e247a++) {
        _0x168268 += _0x2c669e[_0x384ef3 + (_0x2e247a * 8 + 4) >> 2];
      }
      var _0x51a72a = _0x3da0ed.sock_ops.recvmsg(_0x3da0ed, _0x168268);
      if (!_0x51a72a) {
        return 0;
      }
      var _0x29c00c = _0x2c669e[_0x5f2f40 >> 2];
      if (_0x29c00c) {
        var _0x23ec20 = _0x5db01a(_0x29c00c, _0x3da0ed.family, _0x47b78e.lookup_name(_0x51a72a.addr), _0x51a72a.port);
      }
      var _0x515cb4 = 0;
      var _0x30932f = _0x51a72a.buffer.byteLength;
      for (var _0x2e247a = 0; _0x30932f > 0 && _0x2e247a < _0x395897; _0x2e247a++) {
        var _0x23075e = _0x2c669e[_0x384ef3 + (_0x2e247a * 8 + 0) >> 2];
        var _0x158a6e = _0x2c669e[_0x384ef3 + (_0x2e247a * 8 + 4) >> 2];
        if (!_0x158a6e) {
          continue;
        }
        var _0x3415de = Math.min(_0x158a6e, _0x30932f);
        var _0x45629e = _0x51a72a.buffer.subarray(_0x515cb4, _0x515cb4 + _0x3415de);
        _0x353336.set(_0x45629e, _0x23075e + _0x515cb4);
        _0x515cb4 += _0x3415de;
        _0x30932f -= _0x3415de;
      }
      return _0x515cb4;
    } catch (_0x16bbe1) {
      if (typeof _0x1f58b9 === "undefined" || !(_0x16bbe1 instanceof _0x1f58b9.ErrnoError)) {
        _0x2f2f3c(_0x16bbe1);
      }
      return -_0x16bbe1.errno;
    }
  }
  function _0x53c010(_0x184616, _0x1b4aa9) {
    try {
      _0x184616 = _0x3c917f.getStr(_0x184616);
      _0x1b4aa9 = _0x3c917f.getStr(_0x1b4aa9);
      _0x1f58b9.rename(_0x184616, _0x1b4aa9);
      return 0;
    } catch (_0x3024e9) {
      if (typeof _0x1f58b9 === "undefined" || !(_0x3024e9 instanceof _0x1f58b9.ErrnoError)) {
        _0x2f2f3c(_0x3024e9);
      }
      return -_0x3024e9.errno;
    }
  }
  function _0x3749e9(_0x257c83) {
    try {
      _0x257c83 = _0x3c917f.getStr(_0x257c83);
      _0x1f58b9.rmdir(_0x257c83);
      return 0;
    } catch (_0x2678e9) {
      if (typeof _0x1f58b9 === "undefined" || !(_0x2678e9 instanceof _0x1f58b9.ErrnoError)) {
        _0x2f2f3c(_0x2678e9);
      }
      return -_0x2678e9.errno;
    }
  }
  function _0x236ef9(_0x1a235a, _0x43f76c, _0x4ba967) {
    try {
      var _0x50a692 = _0x1a6349(_0x1a235a);
      var _0xaf8f3e = _0x2c669e[_0x43f76c + 8 >> 2];
      var _0x3e1c44 = _0x2c669e[_0x43f76c + 12 >> 2];
      var _0x43ae13;
      var _0x4d1058;
      var _0x4ed639 = _0x2c669e[_0x43f76c >> 2];
      var _0x4a9bbf = _0x2c669e[_0x43f76c + 4 >> 2];
      if (_0x4ed639) {
        var _0x42098c = _0x4b767b(_0x4ed639, _0x4a9bbf);
        if (_0x42098c.errno) {
          return -_0x42098c.errno;
        }
        _0x4d1058 = _0x42098c.port;
        _0x43ae13 = _0x47b78e.lookup_addr(_0x42098c.addr) || _0x42098c.addr;
      }
      var _0x1bc8e0 = 0;
      for (var _0x593836 = 0; _0x593836 < _0x3e1c44; _0x593836++) {
        _0x1bc8e0 += _0x2c669e[_0xaf8f3e + (_0x593836 * 8 + 4) >> 2];
      }
      var _0x6da121 = new Uint8Array(_0x1bc8e0);
      var _0x2b598b = 0;
      for (var _0x593836 = 0; _0x593836 < _0x3e1c44; _0x593836++) {
        var _0x42f0aa = _0x2c669e[_0xaf8f3e + (_0x593836 * 8 + 0) >> 2];
        var _0x30a302 = _0x2c669e[_0xaf8f3e + (_0x593836 * 8 + 4) >> 2];
        for (var _0x5bc7b2 = 0; _0x5bc7b2 < _0x30a302; _0x5bc7b2++) {
          _0x6da121[_0x2b598b++] = _0xf9c0a9[_0x42f0aa + _0x5bc7b2 >> 0];
        }
      }
      return _0x50a692.sock_ops.sendmsg(_0x50a692, _0x6da121, 0, _0x1bc8e0, _0x43ae13, _0x4d1058);
    } catch (_0x48ba42) {
      if (typeof _0x1f58b9 === "undefined" || !(_0x48ba42 instanceof _0x1f58b9.ErrnoError)) {
        _0x2f2f3c(_0x48ba42);
      }
      return -_0x48ba42.errno;
    }
  }
  function _0x224b94(_0x49e77e, _0x114f19, _0x121641, _0x163f6b, _0x4e95ef, _0x4b8470) {
    try {
      var _0x1902c2 = _0x1a6349(_0x49e77e);
      var _0x16ac01 = _0x32938f(_0x4e95ef, _0x4b8470, true);
      if (!_0x16ac01) {
        return _0x1f58b9.write(_0x1902c2.stream, _0xf9c0a9, _0x114f19, _0x121641);
      } else {
        return _0x1902c2.sock_ops.sendmsg(_0x1902c2, _0xf9c0a9, _0x114f19, _0x121641, _0x16ac01.addr, _0x16ac01.port);
      }
    } catch (_0x5c9ac6) {
      if (typeof _0x1f58b9 === "undefined" || !(_0x5c9ac6 instanceof _0x1f58b9.ErrnoError)) {
        _0x2f2f3c(_0x5c9ac6);
      }
      return -_0x5c9ac6.errno;
    }
  }
  function _0x487022(_0x54d725) {
    try {
      return -50;
    } catch (_0x447815) {
      if (typeof _0x1f58b9 === "undefined" || !(_0x447815 instanceof _0x1f58b9.ErrnoError)) {
        _0x2f2f3c(_0x447815);
      }
      return -_0x447815.errno;
    }
  }
  function _0x25e1a1(_0x57c3af, _0x3d6953) {
    try {
      _0x1a6349(_0x57c3af);
      return -52;
    } catch (_0x34686b) {
      if (typeof _0x1f58b9 === "undefined" || !(_0x34686b instanceof _0x1f58b9.ErrnoError)) {
        _0x2f2f3c(_0x34686b);
      }
      return -_0x34686b.errno;
    }
  }
  function _0x551b5c(_0x4dbb6c, _0x271281, _0x3998c5) {
    try {
      var _0x5d8845 = _0x4e7fcb.createSocket(_0x4dbb6c, _0x271281, _0x3998c5);
      return _0x5d8845.stream.fd;
    } catch (_0xe11449) {
      if (typeof _0x1f58b9 === "undefined" || !(_0xe11449 instanceof _0x1f58b9.ErrnoError)) {
        _0x2f2f3c(_0xe11449);
      }
      return -_0xe11449.errno;
    }
  }
  function _0xbc54e7(_0x100429, _0x3610f1) {
    try {
      _0x100429 = _0x3c917f.getStr(_0x100429);
      return _0x3c917f.doStat(_0x1f58b9.stat, _0x100429, _0x3610f1);
    } catch (_0x3b907c) {
      if (typeof _0x1f58b9 === "undefined" || !(_0x3b907c instanceof _0x1f58b9.ErrnoError)) {
        _0x2f2f3c(_0x3b907c);
      }
      return -_0x3b907c.errno;
    }
  }
  function _0x5d258f(_0x60a89d, _0x10cee6, _0x3b9af1) {
    try {
      _0x60a89d = _0x3c917f.getStr(_0x60a89d);
      _0x2c669e[_0x3b9af1 + 4 >> 2] = 4096;
      _0x2c669e[_0x3b9af1 + 40 >> 2] = 4096;
      _0x2c669e[_0x3b9af1 + 8 >> 2] = 1000000;
      _0x2c669e[_0x3b9af1 + 12 >> 2] = 500000;
      _0x2c669e[_0x3b9af1 + 16 >> 2] = 500000;
      _0x2c669e[_0x3b9af1 + 20 >> 2] = _0x1f58b9.nextInode;
      _0x2c669e[_0x3b9af1 + 24 >> 2] = 1000000;
      _0x2c669e[_0x3b9af1 + 28 >> 2] = 42;
      _0x2c669e[_0x3b9af1 + 44 >> 2] = 2;
      _0x2c669e[_0x3b9af1 + 36 >> 2] = 255;
      return 0;
    } catch (_0x3f6ffc) {
      if (typeof _0x1f58b9 === "undefined" || !(_0x3f6ffc instanceof _0x1f58b9.ErrnoError)) {
        _0x2f2f3c(_0x3f6ffc);
      }
      return -_0x3f6ffc.errno;
    }
  }
  function _0xb73b78(_0x2cab1e, _0x36f552, _0xa286ac, _0x2d849a) {
    try {
      _0x2cab1e = _0x3c917f.getStr(_0x2cab1e);
      var _0x4cfaa8 = _0x3c917f.get64(_0xa286ac, _0x2d849a);
      _0x1f58b9.truncate(_0x2cab1e, _0x4cfaa8);
      return 0;
    } catch (_0x520b62) {
      if (typeof _0x1f58b9 === "undefined" || !(_0x520b62 instanceof _0x1f58b9.ErrnoError)) {
        _0x2f2f3c(_0x520b62);
      }
      return -_0x520b62.errno;
    }
  }
  function _0x2d3d26(_0x30dc20) {
    try {
      if (!_0x30dc20) {
        return -21;
      }
      var _0x1d3342 = {
        __size__: 390,
        domainname: 325,
        machine: 260,
        nodename: 65,
        release: 130,
        sysname: 0,
        version: 195
      };
      function _0x29ee4c(_0x175872, _0x3a2ca7) {
        var _0x23e9fc = _0x1d3342[_0x175872];
        _0x9830ac(_0x3a2ca7, _0x30dc20 + _0x23e9fc);
      }
      _0x29ee4c("sysname", "Emscripten");
      _0x29ee4c("nodename", "emscripten");
      _0x29ee4c("release", "1.0");
      _0x29ee4c("version", "#1");
      _0x29ee4c("machine", "wasm32");
      return 0;
    } catch (_0x5c73bb) {
      if (typeof _0x1f58b9 === "undefined" || !(_0x5c73bb instanceof _0x1f58b9.ErrnoError)) {
        _0x2f2f3c(_0x5c73bb);
      }
      return -_0x5c73bb.errno;
    }
  }
  function _0x35a613(_0x3624a9) {
    try {
      _0x3624a9 = _0x3c917f.getStr(_0x3624a9);
      _0x1f58b9.unlink(_0x3624a9);
      return 0;
    } catch (_0x478769) {
      if (typeof _0x1f58b9 === "undefined" || !(_0x478769 instanceof _0x1f58b9.ErrnoError)) {
        _0x2f2f3c(_0x478769);
      }
      return -_0x478769.errno;
    }
  }
  function _0x41b6f7() {
    _0x2f2f3c();
  }
  function _0x5af6d8() {
    if (_0x5af6d8.start === undefined) {
      _0x5af6d8.start = Date.now();
    }
    return (Date.now() - _0x5af6d8.start) * 1000 | 0;
  }
  function _0xbe0120() {
    if (_0x13d661) {
      return 1;
    } else if (typeof dateNow !== "undefined") {
      return 1000;
    } else {
      return 1000;
    }
  }
  var _0x2ff740 = true;
  function _0x1b12ea(_0x45b128, _0x27fdd0) {
    var _0x56777e;
    if (_0x45b128 === 0) {
      _0x56777e = 1000000;
    } else if (_0x45b128 === 1 && _0x2ff740) {
      _0x56777e = _0xbe0120();
    } else {
      _0x1a4aeb(28);
      return -1;
    }
    _0x2c669e[_0x27fdd0 >> 2] = _0x56777e / 1000000000 | 0;
    _0x2c669e[_0x27fdd0 + 4 >> 2] = _0x56777e;
    return 0;
  }
  var _0x734f67;
  if (_0x13d661) {
    _0x734f67 = function () {
      var _0x4c71ab = process.hrtime();
      return _0x4c71ab[0] * 1000 + _0x4c71ab[1] / 1000000;
    };
  } else if (typeof dateNow !== "undefined") {
    _0x734f67 = dateNow;
  } else {
    _0x734f67 = function () {
      return performance.now();
    };
  }
  function _0x3f8a21(_0x3bba10, _0x3a1f14) {
    var _0xe49cb0;
    if (_0x3bba10 === 0) {
      _0xe49cb0 = Date.now();
    } else if ((_0x3bba10 === 1 || _0x3bba10 === 4) && _0x2ff740) {
      _0xe49cb0 = _0x734f67();
    } else {
      _0x1a4aeb(28);
      return -1;
    }
    _0x2c669e[_0x3a1f14 >> 2] = _0xe49cb0 / 1000 | 0;
    _0x2c669e[_0x3a1f14 + 4 >> 2] = _0xe49cb0 % 1000 * 1000 * 1000 | 0;
    return 0;
  }
  function _0x4162a3(_0x51e704, _0xa60643) {
    return _0x51e704 - _0xa60643;
  }
  function _0x25779f(_0x231476) {}
  function _0x253bc3() {
    return 0;
  }
  function _0x4b2176(_0x2ff341, _0x5c1ebd) {}
  function _0x59f270(_0x14a40c, _0x1f79d4) {
    return 0;
  }
  var _0x13e13b = [];
  function _0x1bd2da(_0x2bce5b, _0x2df936) {
    _0x13e13b.length = 0;
    var _0x27323d;
    _0x2df936 >>= 2;
    while (_0x27323d = _0x353336[_0x2bce5b++]) {
      var _0x54f688 = _0x27323d < 105;
      if (_0x54f688 && _0x2df936 & 1) {
        _0x2df936++;
      }
      _0x13e13b.push(_0x54f688 ? _0x202918[_0x2df936++ >> 1] : _0x2c669e[_0x2df936]);
      ++_0x2df936;
    }
    return _0x13e13b;
  }
  function _0x352c58(_0x3812ce, _0x17c33e, _0x4957bd, _0x177dde) {
    var _0x55f9d1 = _0x1bd2da(_0x17c33e, _0x4957bd);
    return _0x501622[_0x3812ce].apply(null, _0x55f9d1);
  }
  function _0x57aba7(_0x1081d8, _0x50af49, _0x5bf2d0) {
    return _0x352c58(_0x1081d8, _0x50af49, _0x5bf2d0, 1);
  }
  function _0x220cd5(_0x5dba59, _0x3074ea) {
    _0x5e1b24.mainLoop.timingMode = _0x5dba59;
    _0x5e1b24.mainLoop.timingValue = _0x3074ea;
    if (!_0x5e1b24.mainLoop.func) {
      return 1;
    }
    if (!_0x5e1b24.mainLoop.running) {
      _0x5e1b24.mainLoop.running = true;
    }
    if (_0x5dba59 == 0) {
      _0x5e1b24.mainLoop.scheduler = function _0x470e74() {
        var _0x228de9 = Math.max(0, _0x5e1b24.mainLoop.tickStartTime + _0x3074ea - _0x734f67()) | 0;
        setTimeout(_0x5e1b24.mainLoop.runner, _0x228de9);
      };
      _0x5e1b24.mainLoop.method = "timeout";
    } else if (_0x5dba59 == 1) {
      _0x5e1b24.mainLoop.scheduler = function _0x55ef7b() {
        _0x5e1b24.requestAnimationFrame(_0x5e1b24.mainLoop.runner);
      };
      _0x5e1b24.mainLoop.method = "rAF";
    } else if (_0x5dba59 == 2) {
      if (typeof setImmediate === "undefined") {
        var _0x123278 = [];
        var _0x1c6db2 = "setimmediate";
        function _0x3f275b(_0x131539) {
          if (_0x131539.data === _0x1c6db2 || _0x131539.data.target === _0x1c6db2) {
            _0x131539.stopPropagation();
            _0x123278.shift()();
          }
        }
        addEventListener("message", _0x3f275b, true);
        setImmediate = function _0x441129(_0x6ca1a2) {
          _0x123278.push(_0x6ca1a2);
          if (_0x4eced9) {
            if (_0x13e282.setImmediates === undefined) {
              _0x13e282.setImmediates = [];
            }
            _0x13e282.setImmediates.push(_0x6ca1a2);
            postMessage({
              target: _0x1c6db2
            });
          } else {
            postMessage(_0x1c6db2, "*");
          }
        };
      }
      _0x5e1b24.mainLoop.scheduler = function _0x31794d() {
        setImmediate(_0x5e1b24.mainLoop.runner);
      };
      _0x5e1b24.mainLoop.method = "immediate";
    }
    return 0;
  }
  function _0x6f3024(_0xd33e1d) {
    _0x51546c(_0xd33e1d);
  }
  function _0x5b9a53() {
    if (!_0x29a367()) {
      try {
        _0x6f3024(_0xdcff3b);
      } catch (_0x4f0e79) {
        if (_0x4f0e79 instanceof _0xc3b582) {
          return;
        }
        throw _0x4f0e79;
      }
    }
  }
  function _0x2422ac(_0x279812, _0x5a3db0, _0x1f2a02, _0x264683, _0x10aa2f) {
    _0x22d62f(!_0x5e1b24.mainLoop.func, "emscripten_set_main_loop: there can only be one main loop function at once: call emscripten_cancel_main_loop to cancel the previous one before setting a new one with different parameters.");
    _0x5e1b24.mainLoop.func = _0x279812;
    _0x5e1b24.mainLoop.arg = _0x264683;
    var _0x4d7648 = _0x5e1b24.mainLoop.currentlyRunningMainloop;
    function _0xf86744() {
      if (_0x4d7648 < _0x5e1b24.mainLoop.currentlyRunningMainloop) {
        _0x5b9a53();
        return false;
      }
      return true;
    }
    _0x5e1b24.mainLoop.running = false;
    _0x5e1b24.mainLoop.runner = function _0x17d51d() {
      if (_0x3f5914) {
        return;
      }
      if (_0x5e1b24.mainLoop.queue.length > 0) {
        var _0x3a3c84 = Date.now();
        var _0x281f21 = _0x5e1b24.mainLoop.queue.shift();
        _0x281f21.func(_0x281f21.arg);
        if (_0x5e1b24.mainLoop.remainingBlockers) {
          var _0x495f29 = _0x5e1b24.mainLoop.remainingBlockers;
          var _0x1a4e33 = _0x495f29 % 1 == 0 ? _0x495f29 - 1 : Math.floor(_0x495f29);
          if (_0x281f21.counted) {
            _0x5e1b24.mainLoop.remainingBlockers = _0x1a4e33;
          } else {
            _0x1a4e33 = _0x1a4e33 + 0.5;
            _0x5e1b24.mainLoop.remainingBlockers = (_0x495f29 * 8 + _0x1a4e33) / 9;
          }
        }
        console.log("main loop blocker \"" + _0x281f21.name + "\" took " + (Date.now() - _0x3a3c84) + " ms");
        _0x5e1b24.mainLoop.updateStatus();
        if (!_0xf86744()) {
          return;
        }
        setTimeout(_0x5e1b24.mainLoop.runner, 0);
        return;
      }
      if (!_0xf86744()) {
        return;
      }
      _0x5e1b24.mainLoop.currentFrameNumber = _0x5e1b24.mainLoop.currentFrameNumber + 1 | 0;
      if (_0x5e1b24.mainLoop.timingMode == 1 && _0x5e1b24.mainLoop.timingValue > 1 && _0x5e1b24.mainLoop.currentFrameNumber % _0x5e1b24.mainLoop.timingValue != 0) {
        _0x5e1b24.mainLoop.scheduler();
        return;
      } else if (_0x5e1b24.mainLoop.timingMode == 0) {
        _0x5e1b24.mainLoop.tickStartTime = _0x734f67();
      }
      _0x21b49c.newRenderingFrameStarted();
      _0x5e1b24.mainLoop.runIter(_0x279812);
      if (!_0xf86744()) {
        return;
      }
      if (typeof SDL === "object" && SDL.audio && SDL.audio.queueNewAudioData) {
        SDL.audio.queueNewAudioData();
      }
      _0x5e1b24.mainLoop.scheduler();
    };
    if (!_0x10aa2f) {
      if (_0x5a3db0 && _0x5a3db0 > 0) {
        _0x220cd5(0, 1000 / _0x5a3db0);
      } else {
        _0x220cd5(1, 1);
      }
      _0x5e1b24.mainLoop.scheduler();
    }
    if (_0x1f2a02) {
      throw "unwind";
    }
  }
  function _0x542ab3(_0x39d5dc, _0x243f55) {
    if (_0x3f5914) {
      return;
    }
    if (_0x243f55) {
      _0x39d5dc();
      return;
    }
    try {
      _0x39d5dc();
    } catch (_0x5973e8) {
      if (_0x5973e8 instanceof _0xc3b582) {
        return;
      } else if (_0x5973e8 !== "unwind") {
        if (_0x5973e8 && typeof _0x5973e8 === "object" && _0x5973e8.stack) {
          _0x500e9("exception thrown: " + [_0x5973e8, _0x5973e8.stack]);
        }
        throw _0x5973e8;
      }
    }
  }
  var _0x5e1b24 = {
    mainLoop: {
      running: false,
      scheduler: null,
      method: "",
      currentlyRunningMainloop: 0,
      func: null,
      arg: 0,
      timingMode: 0,
      timingValue: 0,
      currentFrameNumber: 0,
      queue: [],
      pause: function () {
        _0x5e1b24.mainLoop.scheduler = null;
        _0x5e1b24.mainLoop.currentlyRunningMainloop++;
      },
      resume: function () {
        _0x5e1b24.mainLoop.currentlyRunningMainloop++;
        var _0x58b67e = _0x5e1b24.mainLoop.timingMode;
        var _0x113f22 = _0x5e1b24.mainLoop.timingValue;
        var _0x25f396 = _0x5e1b24.mainLoop.func;
        _0x5e1b24.mainLoop.func = null;
        _0x2422ac(_0x25f396, 0, false, _0x5e1b24.mainLoop.arg, true);
        _0x220cd5(_0x58b67e, _0x113f22);
        _0x5e1b24.mainLoop.scheduler();
      },
      updateStatus: function () {
        if (_0x13e282.setStatus) {
          var _0x2854c2 = _0x13e282.statusMessage || "Please wait...";
          var _0x2b1ae1 = _0x5e1b24.mainLoop.remainingBlockers;
          var _0x3e0fba = _0x5e1b24.mainLoop.expectedBlockers;
          if (_0x2b1ae1) {
            if (_0x2b1ae1 < _0x3e0fba) {
              _0x13e282.setStatus(_0x2854c2 + " (" + (_0x3e0fba - _0x2b1ae1) + "/" + _0x3e0fba + ")");
            } else {
              _0x13e282.setStatus(_0x2854c2);
            }
          } else {
            _0x13e282.setStatus("");
          }
        }
      },
      runIter: function (_0x86b6fc) {
        if (_0x3f5914) {
          return;
        }
        if (_0x13e282.preMainLoop) {
          var _0x29294a = _0x13e282.preMainLoop();
          if (_0x29294a === false) {
            return;
          }
        }
        _0x542ab3(_0x86b6fc);
        if (_0x13e282.postMainLoop) {
          _0x13e282.postMainLoop();
        }
      }
    },
    isFullscreen: false,
    pointerLock: false,
    moduleContextCreatedCallbacks: [],
    workers: [],
    init: function () {
      if (!_0x13e282.preloadPlugins) {
        _0x13e282.preloadPlugins = [];
      }
      if (_0x5e1b24.initted) {
        return;
      }
      _0x5e1b24.initted = true;
      try {
        new Blob();
        _0x5e1b24.hasBlobConstructor = true;
      } catch (_0x3678e8) {
        _0x5e1b24.hasBlobConstructor = false;
        console.log("warning: no blob constructor, cannot create blobs with mimetypes");
      }
      _0x5e1b24.BlobBuilder = typeof MozBlobBuilder != "undefined" ? MozBlobBuilder : typeof WebKitBlobBuilder != "undefined" ? WebKitBlobBuilder : !_0x5e1b24.hasBlobConstructor ? console.log("warning: no BlobBuilder") : null;
      _0x5e1b24.URLObject = typeof window != "undefined" ? window.URL ? window.URL : window.webkitURL : undefined;
      if (!_0x13e282.noImageDecoding && typeof _0x5e1b24.URLObject === "undefined") {
        console.log("warning: Browser does not support creating object URLs. Built-in browser image decoding will not be available.");
        _0x13e282.noImageDecoding = true;
      }
      var _0x579ceb = {};
      _0x579ceb.canHandle = function _0x4c39ca(_0x3869ad) {
        return !_0x13e282.noImageDecoding && /\.(jpg|jpeg|png|bmp)$/i.test(_0x3869ad);
      };
      _0x579ceb.handle = function _0x2922eb(_0xc54eb6, _0x596b47, _0x3acf2d, _0x430b5d) {
        var _0x2f1f3f = null;
        if (_0x5e1b24.hasBlobConstructor) {
          try {
            _0x2f1f3f = new Blob([_0xc54eb6], {
              type: _0x5e1b24.getMimetype(_0x596b47)
            });
            if (_0x2f1f3f.size !== _0xc54eb6.length) {
              _0x2f1f3f = new Blob([new Uint8Array(_0xc54eb6).buffer], {
                type: _0x5e1b24.getMimetype(_0x596b47)
              });
            }
          } catch (_0x1dc66a) {
            _0x539b49("Blob constructor present but fails: " + _0x1dc66a + "; falling back to blob builder");
          }
        }
        if (!_0x2f1f3f) {
          var _0x4b7cd3 = new _0x5e1b24.BlobBuilder();
          _0x4b7cd3.append(new Uint8Array(_0xc54eb6).buffer);
          _0x2f1f3f = _0x4b7cd3.getBlob();
        }
        var _0x4b0ac6 = _0x5e1b24.URLObject.createObjectURL(_0x2f1f3f);
        var _0x984130 = new Image();
        _0x984130.onload = function _0x15b7ce() {
          _0x22d62f(_0x984130.complete, "Image " + _0x596b47 + " could not be decoded");
          var _0x4de93b = document.createElement("canvas");
          _0x4de93b.width = _0x984130.width;
          _0x4de93b.height = _0x984130.height;
          var _0x1c254a = _0x4de93b.getContext("2d");
          _0x1c254a.drawImage(_0x984130, 0, 0);
          _0x13e282.preloadedImages[_0x596b47] = _0x4de93b;
          _0x5e1b24.URLObject.revokeObjectURL(_0x4b0ac6);
          if (_0x3acf2d) {
            _0x3acf2d(_0xc54eb6);
          }
        };
        _0x984130.onerror = function _0x3050ad(_0x1c79f9) {
          console.log("Image " + _0x4b0ac6 + " could not be decoded");
          if (_0x430b5d) {
            _0x430b5d();
          }
        };
        _0x984130.src = _0x4b0ac6;
      };
      _0x13e282.preloadPlugins.push(_0x579ceb);
      var _0x1d0161 = {};
      _0x1d0161.canHandle = function _0x358fd9(_0x40e8a5) {
        return !_0x13e282.noAudioDecoding && _0x40e8a5.substr(-4) in {
          ".ogg": 1,
          ".wav": 1,
          ".mp3": 1
        };
      };
      _0x1d0161.handle = function _0x25be13(_0x169035, _0x5c2007, _0x188b8f, _0x4a8459) {
        var _0x555494 = false;
        function _0x2c4651(_0x8809ee) {
          if (_0x555494) {
            return;
          }
          _0x555494 = true;
          _0x13e282.preloadedAudios[_0x5c2007] = _0x8809ee;
          if (_0x188b8f) {
            _0x188b8f(_0x169035);
          }
        }
        function _0x53ff7c() {
          if (_0x555494) {
            return;
          }
          _0x555494 = true;
          _0x13e282.preloadedAudios[_0x5c2007] = new Audio();
          if (_0x4a8459) {
            _0x4a8459();
          }
        }
        if (_0x5e1b24.hasBlobConstructor) {
          try {
            var _0x4b58c9 = new Blob([_0x169035], {
              type: _0x5e1b24.getMimetype(_0x5c2007)
            });
          } catch (_0x159a7e) {
            return _0x53ff7c();
          }
          var _0x5ae90e = _0x5e1b24.URLObject.createObjectURL(_0x4b58c9);
          var _0x3bbfe1 = new Audio();
          _0x3bbfe1.addEventListener("canplaythrough", function () {
            _0x2c4651(_0x3bbfe1);
          }, false);
          _0x3bbfe1.onerror = function _0x3dceae(_0x164033) {
            if (_0x555494) {
              return;
            }
            console.log("warning: browser could not fully decode audio " + _0x5c2007 + ", trying slower base64 approach");
            function _0x4e684a(_0x3a2582) {
              var _0xee0dbf = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/";
              var _0x57b0c2 = "=";
              var _0x23bb7b = "";
              var _0x4a222a = 0;
              var _0x208a76 = 0;
              for (var _0x4616f4 = 0; _0x4616f4 < _0x3a2582.length; _0x4616f4++) {
                _0x4a222a = _0x4a222a << 8 | _0x3a2582[_0x4616f4];
                _0x208a76 += 8;
                while (_0x208a76 >= 6) {
                  var _0x211c12 = _0x4a222a >> _0x208a76 - 6 & 63;
                  _0x208a76 -= 6;
                  _0x23bb7b += _0xee0dbf[_0x211c12];
                }
              }
              if (_0x208a76 == 2) {
                _0x23bb7b += _0xee0dbf[(_0x4a222a & 3) << 4];
                _0x23bb7b += _0x57b0c2 + _0x57b0c2;
              } else if (_0x208a76 == 4) {
                _0x23bb7b += _0xee0dbf[(_0x4a222a & 15) << 2];
                _0x23bb7b += _0x57b0c2;
              }
              return _0x23bb7b;
            }
            _0x3bbfe1.src = "data:audio/x-" + _0x5c2007.substr(-3) + ";base64," + _0x4e684a(_0x169035);
            _0x2c4651(_0x3bbfe1);
          };
          _0x3bbfe1.src = _0x5ae90e;
          _0x5e1b24.safeSetTimeout(function () {
            _0x2c4651(_0x3bbfe1);
          }, 10000);
        } else {
          return _0x53ff7c();
        }
      };
      _0x13e282.preloadPlugins.push(_0x1d0161);
      function _0x5317d0() {
        _0x5e1b24.pointerLock = document.pointerLockElement === _0x13e282.canvas || document.mozPointerLockElement === _0x13e282.canvas || document.webkitPointerLockElement === _0x13e282.canvas || document.msPointerLockElement === _0x13e282.canvas;
      }
      var _0x3386a5 = _0x13e282.canvas;
      if (_0x3386a5) {
        _0x3386a5.requestPointerLock = _0x3386a5.requestPointerLock || _0x3386a5.mozRequestPointerLock || _0x3386a5.webkitRequestPointerLock || _0x3386a5.msRequestPointerLock || function () {};
        _0x3386a5.exitPointerLock = document.exitPointerLock || document.mozExitPointerLock || document.webkitExitPointerLock || document.msExitPointerLock || function () {};
        _0x3386a5.exitPointerLock = _0x3386a5.exitPointerLock.bind(document);
        document.addEventListener("pointerlockchange", _0x5317d0, false);
        document.addEventListener("mozpointerlockchange", _0x5317d0, false);
        document.addEventListener("webkitpointerlockchange", _0x5317d0, false);
        document.addEventListener("mspointerlockchange", _0x5317d0, false);
        if (_0x13e282.elementPointerLock) {
          _0x3386a5.addEventListener("click", function (_0x12b6c5) {
            if (!_0x5e1b24.pointerLock && _0x13e282.canvas.requestPointerLock) {
              _0x13e282.canvas.requestPointerLock();
              _0x12b6c5.preventDefault();
            }
          }, false);
        }
      }
    },
    createContext: function (_0x309c95, _0x21c4ad, _0x26491d, _0x43b719) {
      if (_0x21c4ad && _0x13e282.ctx && _0x309c95 == _0x13e282.canvas) {
        return _0x13e282.ctx;
      }
      var _0x2e2b9b;
      var _0x56ce76;
      if (_0x21c4ad) {
        var _0x6402c8 = {
          antialias: false,
          alpha: false,
          majorVersion: typeof WebGL2RenderingContext !== "undefined" ? 2 : 1
        };
        if (_0x43b719) {
          for (var _0x477b31 in _0x43b719) {
            _0x6402c8[_0x477b31] = _0x43b719[_0x477b31];
          }
        }
        if (typeof _0x21b49c !== "undefined") {
          _0x56ce76 = _0x21b49c.createContext(_0x309c95, _0x6402c8);
          if (_0x56ce76) {
            _0x2e2b9b = _0x21b49c.getContext(_0x56ce76).GLctx;
          }
        }
      } else {
        _0x2e2b9b = _0x309c95.getContext("2d");
      }
      if (!_0x2e2b9b) {
        return null;
      }
      if (_0x26491d) {
        if (!_0x21c4ad) {
          _0x22d62f(typeof _0xa64359 === "undefined", "cannot set in module if GLctx is used, but we are a non-GL context that would replace it");
        }
        _0x13e282.ctx = _0x2e2b9b;
        if (_0x21c4ad) {
          _0x21b49c.makeContextCurrent(_0x56ce76);
        }
        _0x13e282.useWebGL = _0x21c4ad;
        _0x5e1b24.moduleContextCreatedCallbacks.forEach(function (_0x3a704c) {
          _0x3a704c();
        });
        _0x5e1b24.init();
      }
      return _0x2e2b9b;
    },
    destroyContext: function (_0x27e2dc, _0x38bf0c, _0x32a9bc) {},
    fullscreenHandlersInstalled: false,
    lockPointer: undefined,
    resizeCanvas: undefined,
    requestFullscreen: function (_0x5ee77f, _0xc542f6) {
      _0x5e1b24.lockPointer = _0x5ee77f;
      _0x5e1b24.resizeCanvas = _0xc542f6;
      if (typeof _0x5e1b24.lockPointer === "undefined") {
        _0x5e1b24.lockPointer = true;
      }
      if (typeof _0x5e1b24.resizeCanvas === "undefined") {
        _0x5e1b24.resizeCanvas = false;
      }
      var _0x3ae3e2 = _0x13e282.canvas;
      function _0x5abfcf() {
        _0x5e1b24.isFullscreen = false;
        var _0x348139 = _0x3ae3e2.parentNode;
        if ((document.fullscreenElement || document.mozFullScreenElement || document.msFullscreenElement || document.webkitFullscreenElement || document.webkitCurrentFullScreenElement) === _0x348139) {
          _0x3ae3e2.exitFullscreen = _0x5e1b24.exitFullscreen;
          if (_0x5e1b24.lockPointer) {
            _0x3ae3e2.requestPointerLock();
          }
          _0x5e1b24.isFullscreen = true;
          if (_0x5e1b24.resizeCanvas) {
            _0x5e1b24.setFullscreenCanvasSize();
          } else {
            _0x5e1b24.updateCanvasDimensions(_0x3ae3e2);
          }
        } else {
          _0x348139.parentNode.insertBefore(_0x3ae3e2, _0x348139);
          _0x348139.parentNode.removeChild(_0x348139);
          if (_0x5e1b24.resizeCanvas) {
            _0x5e1b24.setWindowedCanvasSize();
          } else {
            _0x5e1b24.updateCanvasDimensions(_0x3ae3e2);
          }
        }
        if (_0x13e282.onFullScreen) {
          _0x13e282.onFullScreen(_0x5e1b24.isFullscreen);
        }
        if (_0x13e282.onFullscreen) {
          _0x13e282.onFullscreen(_0x5e1b24.isFullscreen);
        }
      }
      if (!_0x5e1b24.fullscreenHandlersInstalled) {
        _0x5e1b24.fullscreenHandlersInstalled = true;
        document.addEventListener("fullscreenchange", _0x5abfcf, false);
        document.addEventListener("mozfullscreenchange", _0x5abfcf, false);
        document.addEventListener("webkitfullscreenchange", _0x5abfcf, false);
        document.addEventListener("MSFullscreenChange", _0x5abfcf, false);
      }
      var _0x311324 = document.createElement("div");
      _0x3ae3e2.parentNode.insertBefore(_0x311324, _0x3ae3e2);
      _0x311324.appendChild(_0x3ae3e2);
      _0x311324.requestFullscreen = _0x311324.requestFullscreen || _0x311324.mozRequestFullScreen || _0x311324.msRequestFullscreen || (_0x311324.webkitRequestFullscreen ? function () {
        _0x311324.webkitRequestFullscreen(Element.ALLOW_KEYBOARD_INPUT);
      } : null) || (_0x311324.webkitRequestFullScreen ? function () {
        _0x311324.webkitRequestFullScreen(Element.ALLOW_KEYBOARD_INPUT);
      } : null);
      _0x311324.requestFullscreen();
    },
    exitFullscreen: function () {
      if (!_0x5e1b24.isFullscreen) {
        return false;
      }
      var _0x8d6c7 = document.exitFullscreen || document.cancelFullScreen || document.mozCancelFullScreen || document.msExitFullscreen || document.webkitCancelFullScreen || function () {};
      _0x8d6c7.apply(document, []);
      return true;
    },
    nextRAF: 0,
    fakeRequestAnimationFrame: function (_0x28965d) {
      var _0x210ecb = Date.now();
      if (_0x5e1b24.nextRAF === 0) {
        _0x5e1b24.nextRAF = _0x210ecb + 1000 / 60;
      } else {
        while (_0x210ecb + 2 >= _0x5e1b24.nextRAF) {
          _0x5e1b24.nextRAF += 1000 / 60;
        }
      }
      var _0x4fb251 = Math.max(_0x5e1b24.nextRAF - _0x210ecb, 0);
      setTimeout(_0x28965d, _0x4fb251);
    },
    requestAnimationFrame: function (_0x3fdd39) {
      if (typeof requestAnimationFrame === "function") {
        requestAnimationFrame(_0x3fdd39);
        return;
      }
      var _0x573056 = _0x5e1b24.fakeRequestAnimationFrame;
      _0x573056(_0x3fdd39);
    },
    safeRequestAnimationFrame: function (_0x285b41) {
      return _0x5e1b24.requestAnimationFrame(function () {
        _0x542ab3(_0x285b41);
      });
    },
    safeSetTimeout: function (_0x81e92, _0x73bc27) {
      return setTimeout(function () {
        _0x542ab3(_0x81e92);
      }, _0x73bc27);
    },
    getMimetype: function (_0x3c4c5c) {
      return {
        jpg: "image/jpeg",
        jpeg: "image/jpeg",
        png: "image/png",
        bmp: "image/bmp",
        ogg: "audio/ogg",
        wav: "audio/wav",
        mp3: "audio/mpeg"
      }[_0x3c4c5c.substr(_0x3c4c5c.lastIndexOf(".") + 1)];
    },
    getUserMedia: function (_0xfd2d5b) {
      if (!window.getUserMedia) {
        window.getUserMedia = navigator.getUserMedia || navigator.mozGetUserMedia;
      }
      window.getUserMedia(_0xfd2d5b);
    },
    getMovementX: function (_0x320513) {
      return _0x320513.movementX || _0x320513.mozMovementX || _0x320513.webkitMovementX || 0;
    },
    getMovementY: function (_0x1563d1) {
      return _0x1563d1.movementY || _0x1563d1.mozMovementY || _0x1563d1.webkitMovementY || 0;
    },
    getMouseWheelDelta: function (_0x59ef2c) {
      var _0x1d3493 = 0;
      switch (_0x59ef2c.type) {
        case "DOMMouseScroll":
          _0x1d3493 = _0x59ef2c.detail / 3;
          break;
        case "mousewheel":
          _0x1d3493 = _0x59ef2c.wheelDelta / 120;
          break;
        case "wheel":
          _0x1d3493 = _0x59ef2c.deltaY;
          switch (_0x59ef2c.deltaMode) {
            case 0:
              _0x1d3493 /= 100;
              break;
            case 1:
              _0x1d3493 /= 3;
              break;
            case 2:
              _0x1d3493 *= 80;
              break;
            default:
              throw "unrecognized mouse wheel delta mode: " + _0x59ef2c.deltaMode;
          }
          break;
        default:
          throw "unrecognized mouse wheel event: " + _0x59ef2c.type;
      }
      return _0x1d3493;
    },
    mouseX: 0,
    mouseY: 0,
    mouseMovementX: 0,
    mouseMovementY: 0,
    touches: {},
    lastTouches: {},
    calculateMouseEvent: function (_0x4f7498) {
      if (_0x5e1b24.pointerLock) {
        if (_0x4f7498.type != "mousemove" && "mozMovementX" in _0x4f7498) {
          _0x5e1b24.mouseMovementX = _0x5e1b24.mouseMovementY = 0;
        } else {
          _0x5e1b24.mouseMovementX = _0x5e1b24.getMovementX(_0x4f7498);
          _0x5e1b24.mouseMovementY = _0x5e1b24.getMovementY(_0x4f7498);
        }
        if (typeof SDL != "undefined") {
          _0x5e1b24.mouseX = SDL.mouseX + _0x5e1b24.mouseMovementX;
          _0x5e1b24.mouseY = SDL.mouseY + _0x5e1b24.mouseMovementY;
        } else {
          _0x5e1b24.mouseX += _0x5e1b24.mouseMovementX;
          _0x5e1b24.mouseY += _0x5e1b24.mouseMovementY;
        }
      } else {
        var _0x3d0bf2 = _0x13e282.canvas.getBoundingClientRect();
        var _0x28b61a = _0x13e282.canvas.width;
        var _0x38ad58 = _0x13e282.canvas.height;
        var _0x418e32 = typeof window.scrollX !== "undefined" ? window.scrollX : window.pageXOffset;
        var _0x1fdde6 = typeof window.scrollY !== "undefined" ? window.scrollY : window.pageYOffset;
        if (_0x4f7498.type === "touchstart" || _0x4f7498.type === "touchend" || _0x4f7498.type === "touchmove") {
          var _0x212ab5 = _0x4f7498.touch;
          if (_0x212ab5 === undefined) {
            return;
          }
          var _0x39a3a9 = _0x212ab5.pageX - (_0x418e32 + _0x3d0bf2.left);
          var _0x2a69a6 = _0x212ab5.pageY - (_0x1fdde6 + _0x3d0bf2.top);
          _0x39a3a9 = _0x39a3a9 * (_0x28b61a / _0x3d0bf2.width);
          _0x2a69a6 = _0x2a69a6 * (_0x38ad58 / _0x3d0bf2.height);
          var _0x62e7d8 = {
            x: _0x39a3a9,
            y: _0x2a69a6
          };
          if (_0x4f7498.type === "touchstart") {
            _0x5e1b24.lastTouches[_0x212ab5.identifier] = _0x62e7d8;
            _0x5e1b24.touches[_0x212ab5.identifier] = _0x62e7d8;
          } else if (_0x4f7498.type === "touchend" || _0x4f7498.type === "touchmove") {
            var _0x5e7bd0 = _0x5e1b24.touches[_0x212ab5.identifier];
            if (!_0x5e7bd0) {
              _0x5e7bd0 = _0x62e7d8;
            }
            _0x5e1b24.lastTouches[_0x212ab5.identifier] = _0x5e7bd0;
            _0x5e1b24.touches[_0x212ab5.identifier] = _0x62e7d8;
          }
          return;
        }
        var _0x2af5d4 = _0x4f7498.pageX - (_0x418e32 + _0x3d0bf2.left);
        var _0xc8e4d6 = _0x4f7498.pageY - (_0x1fdde6 + _0x3d0bf2.top);
        _0x2af5d4 = _0x2af5d4 * (_0x28b61a / _0x3d0bf2.width);
        _0xc8e4d6 = _0xc8e4d6 * (_0x38ad58 / _0x3d0bf2.height);
        _0x5e1b24.mouseMovementX = _0x2af5d4 - _0x5e1b24.mouseX;
        _0x5e1b24.mouseMovementY = _0xc8e4d6 - _0x5e1b24.mouseY;
        _0x5e1b24.mouseX = _0x2af5d4;
        _0x5e1b24.mouseY = _0xc8e4d6;
      }
    },
    asyncLoad: function (_0x3298cb, _0x33cb25, _0x484c8a, _0x3b244c) {
      var _0x3cc444 = !_0x3b244c ? _0x159492("al " + _0x3298cb) : "";
      _0x380c3a(_0x3298cb, function (_0x26c00c) {
        _0x22d62f(_0x26c00c, "Loading data file \"" + _0x3298cb + "\" failed (no arrayBuffer).");
        _0x33cb25(new Uint8Array(_0x26c00c));
        if (_0x3cc444) {
          _0xb5b33c(_0x3cc444);
        }
      }, function (_0x16abce) {
        if (_0x484c8a) {
          _0x484c8a();
        } else {
          throw "Loading data file \"" + _0x3298cb + "\" failed.";
        }
      });
      if (_0x3cc444) {
        _0x156f3b(_0x3cc444);
      }
    },
    resizeListeners: [],
    updateResizeListeners: function () {
      var _0x1b9e19 = _0x13e282.canvas;
      _0x5e1b24.resizeListeners.forEach(function (_0xe287c2) {
        _0xe287c2(_0x1b9e19.width, _0x1b9e19.height);
      });
    },
    setCanvasSize: function (_0x100460, _0x56f116, _0x43d85) {
      var _0x3354a5 = _0x13e282.canvas;
      _0x5e1b24.updateCanvasDimensions(_0x3354a5, _0x100460, _0x56f116);
      if (!_0x43d85) {
        _0x5e1b24.updateResizeListeners();
      }
    },
    windowedWidth: 0,
    windowedHeight: 0,
    setFullscreenCanvasSize: function () {
      if (typeof SDL != "undefined") {
        var _0x5869f0 = _0x2a2a43[SDL.screen >> 2];
        _0x5869f0 = _0x5869f0 | 8388608;
        _0x2c669e[SDL.screen >> 2] = _0x5869f0;
      }
      _0x5e1b24.updateCanvasDimensions(_0x13e282.canvas);
      _0x5e1b24.updateResizeListeners();
    },
    setWindowedCanvasSize: function () {
      if (typeof SDL != "undefined") {
        var _0x3c1ff7 = _0x2a2a43[SDL.screen >> 2];
        _0x3c1ff7 = _0x3c1ff7 & ~8388608;
        _0x2c669e[SDL.screen >> 2] = _0x3c1ff7;
      }
      _0x5e1b24.updateCanvasDimensions(_0x13e282.canvas);
      _0x5e1b24.updateResizeListeners();
    },
    updateCanvasDimensions: function (_0x65447, _0x59687f, _0x858a97) {
      if (_0x59687f && _0x858a97) {
        _0x65447.widthNative = _0x59687f;
        _0x65447.heightNative = _0x858a97;
      } else {
        _0x59687f = _0x65447.widthNative;
        _0x858a97 = _0x65447.heightNative;
      }
      var _0x2c570d = _0x59687f;
      var _0x3323e3 = _0x858a97;
      if (_0x13e282.forcedAspectRatio && _0x13e282.forcedAspectRatio > 0) {
        if (_0x2c570d / _0x3323e3 < _0x13e282.forcedAspectRatio) {
          _0x2c570d = Math.round(_0x3323e3 * _0x13e282.forcedAspectRatio);
        } else {
          _0x3323e3 = Math.round(_0x2c570d / _0x13e282.forcedAspectRatio);
        }
      }
      if ((document.fullscreenElement || document.mozFullScreenElement || document.msFullscreenElement || document.webkitFullscreenElement || document.webkitCurrentFullScreenElement) === _0x65447.parentNode && typeof screen != "undefined") {
        var _0xb059c1 = Math.min(screen.width / _0x2c570d, screen.height / _0x3323e3);
        _0x2c570d = Math.round(_0x2c570d * _0xb059c1);
        _0x3323e3 = Math.round(_0x3323e3 * _0xb059c1);
      }
      if (_0x5e1b24.resizeCanvas) {
        if (_0x65447.width != _0x2c570d) {
          _0x65447.width = _0x2c570d;
        }
        if (_0x65447.height != _0x3323e3) {
          _0x65447.height = _0x3323e3;
        }
        if (typeof _0x65447.style != "undefined") {
          _0x65447.style.removeProperty("width");
          _0x65447.style.removeProperty("height");
        }
      } else {
        if (_0x65447.width != _0x59687f) {
          _0x65447.width = _0x59687f;
        }
        if (_0x65447.height != _0x858a97) {
          _0x65447.height = _0x858a97;
        }
        if (typeof _0x65447.style != "undefined") {
          if (_0x2c570d != _0x59687f || _0x3323e3 != _0x858a97) {
            _0x65447.style.setProperty("width", _0x2c570d + "px", "important");
            _0x65447.style.setProperty("height", _0x3323e3 + "px", "important");
          } else {
            _0x65447.style.removeProperty("width");
            _0x65447.style.removeProperty("height");
          }
        }
      }
    },
    wgetRequests: {},
    nextWgetRequestHandle: 0,
    getNextWgetRequestHandle: function () {
      var _0x137cd8 = _0x5e1b24.nextWgetRequestHandle;
      _0x5e1b24.nextWgetRequestHandle++;
      return _0x137cd8;
    }
  };
  function _0x4c181e() {
    _0x5e1b24.mainLoop.pause();
    _0x5e1b24.mainLoop.func = null;
  }
  function _0x1f6424(_0x455c1c) {
    clearInterval(_0x455c1c);
  }
  var _0x71eede = {
    inEventHandler: 0,
    removeAllEventListeners: function () {
      for (var _0xb78c = _0x71eede.eventHandlers.length - 1; _0xb78c >= 0; --_0xb78c) {
        _0x71eede._removeHandler(_0xb78c);
      }
      _0x71eede.eventHandlers = [];
      _0x71eede.deferredCalls = [];
    },
    registerRemoveEventListeners: function () {
      if (!_0x71eede.removeEventListenersRegistered) {
        _0x27d02b.push(_0x71eede.removeAllEventListeners);
        _0x71eede.removeEventListenersRegistered = true;
      }
    },
    deferredCalls: [],
    deferCall: function (_0x286c6b, _0x375771, _0x52b7dc) {
      function _0x274709(_0x9b2d9c, _0x48710c) {
        if (_0x9b2d9c.length != _0x48710c.length) {
          return false;
        }
        for (var _0x41d4c6 in _0x9b2d9c) {
          if (_0x9b2d9c[_0x41d4c6] != _0x48710c[_0x41d4c6]) {
            return false;
          }
        }
        return true;
      }
      for (var _0x1bc193 in _0x71eede.deferredCalls) {
        var _0x458131 = _0x71eede.deferredCalls[_0x1bc193];
        if (_0x458131.targetFunction == _0x286c6b && _0x274709(_0x458131.argsList, _0x52b7dc)) {
          return;
        }
      }
      _0x71eede.deferredCalls.push({
        targetFunction: _0x286c6b,
        precedence: _0x375771,
        argsList: _0x52b7dc
      });
      _0x71eede.deferredCalls.sort(function (_0x25dd18, _0x15a45f) {
        return _0x25dd18.precedence < _0x15a45f.precedence;
      });
    },
    removeDeferredCalls: function (_0x2d73f2) {
      for (var _0x2926f9 = 0; _0x2926f9 < _0x71eede.deferredCalls.length; ++_0x2926f9) {
        if (_0x71eede.deferredCalls[_0x2926f9].targetFunction == _0x2d73f2) {
          _0x71eede.deferredCalls.splice(_0x2926f9, 1);
          --_0x2926f9;
        }
      }
    },
    canPerformEventHandlerRequests: function () {
      return _0x71eede.inEventHandler && _0x71eede.currentEventHandler.allowsDeferredCalls;
    },
    runDeferredCalls: function () {
      if (!_0x71eede.canPerformEventHandlerRequests()) {
        return;
      }
      for (var _0x262ac0 = 0; _0x262ac0 < _0x71eede.deferredCalls.length; ++_0x262ac0) {
        var _0x2ae7ed = _0x71eede.deferredCalls[_0x262ac0];
        _0x71eede.deferredCalls.splice(_0x262ac0, 1);
        --_0x262ac0;
        _0x2ae7ed.targetFunction.apply(null, _0x2ae7ed.argsList);
      }
    },
    eventHandlers: [],
    removeAllHandlersOnTarget: function (_0x407adf, _0x476b16) {
      for (var _0x472b67 = 0; _0x472b67 < _0x71eede.eventHandlers.length; ++_0x472b67) {
        if (_0x71eede.eventHandlers[_0x472b67].target == _0x407adf && (!_0x476b16 || _0x476b16 == _0x71eede.eventHandlers[_0x472b67].eventTypeString)) {
          _0x71eede._removeHandler(_0x472b67--);
        }
      }
    },
    _removeHandler: function (_0x3fba7e) {
      var _0x188cd1 = _0x71eede.eventHandlers[_0x3fba7e];
      _0x188cd1.target.removeEventListener(_0x188cd1.eventTypeString, _0x188cd1.eventListenerFunc, _0x188cd1.useCapture);
      _0x71eede.eventHandlers.splice(_0x3fba7e, 1);
    },
    registerOrRemoveHandler: function (_0x2e0c44) {
      var _0x2c0ba8 = function _0x4f1c2d(_0x3a07f9) {
        ++_0x71eede.inEventHandler;
        _0x71eede.currentEventHandler = _0x2e0c44;
        _0x71eede.runDeferredCalls();
        _0x2e0c44.handlerFunc(_0x3a07f9);
        _0x71eede.runDeferredCalls();
        --_0x71eede.inEventHandler;
      };
      if (_0x2e0c44.callbackfunc) {
        _0x2e0c44.eventListenerFunc = _0x2c0ba8;
        _0x2e0c44.target.addEventListener(_0x2e0c44.eventTypeString, _0x2c0ba8, _0x2e0c44.useCapture);
        _0x71eede.eventHandlers.push(_0x2e0c44);
        _0x71eede.registerRemoveEventListeners();
      } else {
        for (var _0x2ee9f7 = 0; _0x2ee9f7 < _0x71eede.eventHandlers.length; ++_0x2ee9f7) {
          if (_0x71eede.eventHandlers[_0x2ee9f7].target == _0x2e0c44.target && _0x71eede.eventHandlers[_0x2ee9f7].eventTypeString == _0x2e0c44.eventTypeString) {
            _0x71eede._removeHandler(_0x2ee9f7--);
          }
        }
      }
    },
    getNodeNameForTarget: function (_0x3f60cf) {
      if (!_0x3f60cf) {
        return "";
      }
      if (_0x3f60cf == window) {
        return "#window";
      }
      if (_0x3f60cf == screen) {
        return "#screen";
      }
      if (_0x3f60cf && _0x3f60cf.nodeName) {
        return _0x3f60cf.nodeName;
      } else {
        return "";
      }
    },
    fullscreenEnabled: function () {
      return document.fullscreenEnabled || document.webkitFullscreenEnabled;
    }
  };
  var _0x349ac2 = {};
  function _0x27c129(_0x3c5120) {
    if (_0x3c5120 > 2) {
      return _0x432dbf(_0x3c5120);
    } else {
      return _0x3c5120;
    }
  }
  var _0x1c78a6 = [0, typeof document !== "undefined" ? document : 0, typeof window !== "undefined" ? window : 0];
  function _0x484edc(_0x275b71) {
    _0x275b71 = _0x27c129(_0x275b71);
    var _0x191e2d = _0x1c78a6[_0x275b71] || (typeof document !== "undefined" ? document.querySelector(_0x275b71) : undefined);
    return _0x191e2d;
  }
  function _0x47e1c4(_0x1618f8) {
    return _0x484edc(_0x1618f8);
  }
  function _0x14b131(_0xb56e5f, _0x142b67, _0x46b14d) {
    var _0x69081d = _0x47e1c4(_0xb56e5f);
    if (!_0x69081d) {
      return -4;
    }
    _0x2c669e[_0x142b67 >> 2] = _0x69081d.width;
    _0x2c669e[_0x46b14d >> 2] = _0x69081d.height;
  }
  function _0x288214(_0x3169b2) {
    var _0x4a419b = _0x5b9f35();
    var _0x3499c9 = _0x105630(8);
    var _0x43f47b = _0x3499c9 + 4;
    var _0x1352d2 = _0x105630(_0x3169b2.id.length + 1);
    _0x98a294(_0x3169b2.id, _0x1352d2, _0x3169b2.id.length + 1);
    var _0x2fa46d = _0x14b131(_0x1352d2, _0x3499c9, _0x43f47b);
    var _0x271e2a = [_0x2c669e[_0x3499c9 >> 2], _0x2c669e[_0x43f47b >> 2]];
    _0x50a678(_0x4a419b);
    return _0x271e2a;
  }
  function _0x522800(_0x1ee465, _0x3976a1, _0x5d59b2) {
    var _0x94e320 = _0x47e1c4(_0x1ee465);
    if (!_0x94e320) {
      return -4;
    }
    _0x94e320.width = _0x3976a1;
    _0x94e320.height = _0x5d59b2;
    return 0;
  }
  function _0xa24ae6(_0xbf9c9, _0x54fb05, _0x5b52e4) {
    if (!_0xbf9c9.controlTransferredOffscreen) {
      _0xbf9c9.width = _0x54fb05;
      _0xbf9c9.height = _0x5b52e4;
    } else {
      var _0x35c6dc = _0x5b9f35();
      var _0x3089f1 = _0x105630(_0xbf9c9.id.length + 1);
      _0x98a294(_0xbf9c9.id, _0x3089f1, _0xbf9c9.id.length + 1);
      _0x522800(_0x3089f1, _0x54fb05, _0x5b52e4);
      _0x50a678(_0x35c6dc);
    }
  }
  function _0x8e6d4e(_0x1f380b) {
    var _0x2eb3cd = _0x288214(_0x1f380b);
    var _0x1112dd = _0x2eb3cd[0];
    var _0x23fa10 = _0x2eb3cd[1];
    var _0x5a2cdd = _0x1f380b.style.width;
    var _0x7111c0 = _0x1f380b.style.height;
    var _0x2fb958 = _0x1f380b.style.backgroundColor;
    var _0x20b038 = document.body.style.backgroundColor;
    var _0x479269 = _0x1f380b.style.paddingLeft;
    var _0x3cb7a5 = _0x1f380b.style.paddingRight;
    var _0x3af04b = _0x1f380b.style.paddingTop;
    var _0x1c4520 = _0x1f380b.style.paddingBottom;
    var _0x5cd8b1 = _0x1f380b.style.marginLeft;
    var _0x288e06 = _0x1f380b.style.marginRight;
    var _0x3d47fe = _0x1f380b.style.marginTop;
    var _0x5143bd = _0x1f380b.style.marginBottom;
    var _0x42791c = document.body.style.margin;
    var _0x12d0ad = document.documentElement.style.overflow;
    var _0x192226 = document.body.scroll;
    var _0x591f80 = _0x1f380b.style.imageRendering;
    function _0x4e5054() {
      var _0x346c68 = document.fullscreenElement || document.webkitFullscreenElement || document.msFullscreenElement;
      if (!_0x346c68) {
        document.removeEventListener("fullscreenchange", _0x4e5054);
        document.removeEventListener("webkitfullscreenchange", _0x4e5054);
        _0xa24ae6(_0x1f380b, _0x1112dd, _0x23fa10);
        _0x1f380b.style.width = _0x5a2cdd;
        _0x1f380b.style.height = _0x7111c0;
        _0x1f380b.style.backgroundColor = _0x2fb958;
        if (!_0x20b038) {
          document.body.style.backgroundColor = "white";
        }
        document.body.style.backgroundColor = _0x20b038;
        _0x1f380b.style.paddingLeft = _0x479269;
        _0x1f380b.style.paddingRight = _0x3cb7a5;
        _0x1f380b.style.paddingTop = _0x3af04b;
        _0x1f380b.style.paddingBottom = _0x1c4520;
        _0x1f380b.style.marginLeft = _0x5cd8b1;
        _0x1f380b.style.marginRight = _0x288e06;
        _0x1f380b.style.marginTop = _0x3d47fe;
        _0x1f380b.style.marginBottom = _0x5143bd;
        document.body.style.margin = _0x42791c;
        document.documentElement.style.overflow = _0x12d0ad;
        document.body.scroll = _0x192226;
        _0x1f380b.style.imageRendering = _0x591f80;
        if (_0x1f380b.GLctxObject) {
          _0x1f380b.GLctxObject.GLctx.viewport(0, 0, _0x1112dd, _0x23fa10);
        }
        if (_0x349ac2.canvasResizedCallback) {
          (function (_0x311785, _0xab869c, _0x4ff545) {
            return _0x3518f2.apply(null, [_0x349ac2.canvasResizedCallback, _0x311785, _0xab869c, _0x4ff545]);
          })(37, 0, _0x349ac2.canvasResizedCallbackUserData);
        }
      }
    }
    document.addEventListener("fullscreenchange", _0x4e5054);
    document.addEventListener("webkitfullscreenchange", _0x4e5054);
    return _0x4e5054;
  }
  function _0x49892c(_0x85638f, _0x4af5f9, _0xde6825) {
    _0x85638f.style.paddingLeft = _0x85638f.style.paddingRight = _0xde6825 + "px";
    _0x85638f.style.paddingTop = _0x85638f.style.paddingBottom = _0x4af5f9 + "px";
  }
  function _0x2ee18e(_0x451d8e) {
    if (_0x1c78a6.indexOf(_0x451d8e) < 0) {
      return _0x451d8e.getBoundingClientRect();
    } else {
      return {
        left: 0,
        top: 0
      };
    }
  }
  function _0xc570dc(_0x55541a, _0x273f08) {
    var _0x1cb843 = _0x8e6d4e(_0x55541a);
    var _0x15f724 = _0x273f08.softFullscreen ? innerWidth : screen.width;
    var _0xb1507f = _0x273f08.softFullscreen ? innerHeight : screen.height;
    var _0x1eb6b7 = _0x2ee18e(_0x55541a);
    var _0x2b818f = _0x1eb6b7.width;
    var _0x3e0b3b = _0x1eb6b7.height;
    var _0x5e030a = _0x288214(_0x55541a);
    var _0x2ae58d = _0x5e030a[0];
    var _0x36f2f8 = _0x5e030a[1];
    if (_0x273f08.scaleMode == 3) {
      _0x49892c(_0x55541a, (_0xb1507f - _0x3e0b3b) / 2, (_0x15f724 - _0x2b818f) / 2);
      _0x15f724 = _0x2b818f;
      _0xb1507f = _0x3e0b3b;
    } else if (_0x273f08.scaleMode == 2) {
      if (_0x15f724 * _0x36f2f8 < _0x2ae58d * _0xb1507f) {
        var _0x54c6b2 = _0x36f2f8 * _0x15f724 / _0x2ae58d;
        _0x49892c(_0x55541a, (_0xb1507f - _0x54c6b2) / 2, 0);
        _0xb1507f = _0x54c6b2;
      } else {
        var _0x3f3d50 = _0x2ae58d * _0xb1507f / _0x36f2f8;
        _0x49892c(_0x55541a, 0, (_0x15f724 - _0x3f3d50) / 2);
        _0x15f724 = _0x3f3d50;
      }
    }
    if (!_0x55541a.style.backgroundColor) {
      _0x55541a.style.backgroundColor = "black";
    }
    if (!document.body.style.backgroundColor) {
      document.body.style.backgroundColor = "black";
    }
    _0x55541a.style.width = _0x15f724 + "px";
    _0x55541a.style.height = _0xb1507f + "px";
    if (_0x273f08.filteringMode == 1) {
      _0x55541a.style.imageRendering = "optimizeSpeed";
      _0x55541a.style.imageRendering = "-moz-crisp-edges";
      _0x55541a.style.imageRendering = "-o-crisp-edges";
      _0x55541a.style.imageRendering = "-webkit-optimize-contrast";
      _0x55541a.style.imageRendering = "optimize-contrast";
      _0x55541a.style.imageRendering = "crisp-edges";
      _0x55541a.style.imageRendering = "pixelated";
    }
    var _0x37438c = _0x273f08.canvasResolutionScaleMode == 2 ? devicePixelRatio : 1;
    if (_0x273f08.canvasResolutionScaleMode != 0) {
      var _0x7643a0 = _0x15f724 * _0x37438c | 0;
      var _0x520c99 = _0xb1507f * _0x37438c | 0;
      _0xa24ae6(_0x55541a, _0x7643a0, _0x520c99);
      if (_0x55541a.GLctxObject) {
        _0x55541a.GLctxObject.GLctx.viewport(0, 0, _0x7643a0, _0x520c99);
      }
    }
    return _0x1cb843;
  }
  function _0x4d36a1(_0x2434c1, _0x35950b) {
    if (_0x35950b.scaleMode != 0 || _0x35950b.canvasResolutionScaleMode != 0) {
      _0xc570dc(_0x2434c1, _0x35950b);
    }
    if (_0x2434c1.requestFullscreen) {
      _0x2434c1.requestFullscreen();
    } else if (_0x2434c1.webkitRequestFullscreen) {
      _0x2434c1.webkitRequestFullscreen(Element.ALLOW_KEYBOARD_INPUT);
    } else if (_0x71eede.fullscreenEnabled()) {
      return -3;
    } else {
      return -1;
    }
    _0x349ac2 = _0x35950b;
    if (_0x35950b.canvasResizedCallback) {
      (function (_0x3d01cd, _0x14aa00, _0x3c687b) {
        return _0x3518f2.apply(null, [_0x35950b.canvasResizedCallback, _0x3d01cd, _0x14aa00, _0x3c687b]);
      })(37, 0, _0x35950b.canvasResizedCallbackUserData);
    }
    return 0;
  }
  function _0x50f891() {
    if (!_0x71eede.fullscreenEnabled()) {
      return -1;
    }
    _0x71eede.removeDeferredCalls(_0x4d36a1);
    var _0x425b78 = _0x1c78a6[1];
    if (_0x425b78.exitFullscreen) {
      if (_0x425b78.fullscreenElement) {
        _0x425b78.exitFullscreen();
      }
    } else if (_0x425b78.webkitExitFullscreen) {
      if (_0x425b78.webkitFullscreenElement) {
        _0x425b78.webkitExitFullscreen();
      }
    } else {
      return -1;
    }
    return 0;
  }
  function _0x522b6b(_0x1e5f3c) {
    if (_0x1e5f3c.requestPointerLock) {
      _0x1e5f3c.requestPointerLock();
    } else if (_0x1e5f3c.msRequestPointerLock) {
      _0x1e5f3c.msRequestPointerLock();
    } else if (document.body.requestPointerLock || document.body.msRequestPointerLock) {
      return -3;
    } else {
      return -1;
    }
    return 0;
  }
  function _0x26c4d2() {
    _0x71eede.removeDeferredCalls(_0x522b6b);
    if (document.exitPointerLock) {
      document.exitPointerLock();
    } else if (document.msExitPointerLock) {
      document.msExitPointerLock();
    } else {
      return -1;
    }
    return 0;
  }
  function _0x5865c3(_0x380b0b) {
    var _0x289296 = document.fullscreenElement || document.mozFullScreenElement || document.webkitFullscreenElement || document.msFullscreenElement;
    var _0x3d7cc4 = !!_0x289296;
    _0x2c669e[_0x380b0b >> 2] = _0x3d7cc4;
    _0x2c669e[_0x380b0b + 4 >> 2] = _0x71eede.fullscreenEnabled();
    var _0x1190e2 = _0x3d7cc4 ? _0x289296 : _0x71eede.previousFullscreenElement;
    var _0x312c48 = _0x71eede.getNodeNameForTarget(_0x1190e2);
    var _0x3fdb5f = _0x1190e2 && _0x1190e2.id ? _0x1190e2.id : "";
    _0x98a294(_0x312c48, _0x380b0b + 8, 128);
    _0x98a294(_0x3fdb5f, _0x380b0b + 136, 128);
    _0x2c669e[_0x380b0b + 264 >> 2] = _0x1190e2 ? _0x1190e2.clientWidth : 0;
    _0x2c669e[_0x380b0b + 268 >> 2] = _0x1190e2 ? _0x1190e2.clientHeight : 0;
    _0x2c669e[_0x380b0b + 272 >> 2] = screen.width;
    _0x2c669e[_0x380b0b + 276 >> 2] = screen.height;
    if (_0x3d7cc4) {
      _0x71eede.previousFullscreenElement = _0x289296;
    }
  }
  function _0xb3536b(_0x30ecb7) {
    if (!_0x71eede.fullscreenEnabled()) {
      return -1;
    }
    _0x5865c3(_0x30ecb7);
    return 0;
  }
  function _0x15bd48(_0x3aee8a, _0x8eaf63) {
    _0x202918[_0x3aee8a >> 3] = _0x8eaf63.timestamp;
    for (var _0xe2268a = 0; _0xe2268a < _0x8eaf63.axes.length; ++_0xe2268a) {
      _0x202918[_0x3aee8a + _0xe2268a * 8 + 16 >> 3] = _0x8eaf63.axes[_0xe2268a];
    }
    for (var _0xe2268a = 0; _0xe2268a < _0x8eaf63.buttons.length; ++_0xe2268a) {
      if (typeof _0x8eaf63.buttons[_0xe2268a] === "object") {
        _0x202918[_0x3aee8a + _0xe2268a * 8 + 528 >> 3] = _0x8eaf63.buttons[_0xe2268a].value;
      } else {
        _0x202918[_0x3aee8a + _0xe2268a * 8 + 528 >> 3] = _0x8eaf63.buttons[_0xe2268a];
      }
    }
    for (var _0xe2268a = 0; _0xe2268a < _0x8eaf63.buttons.length; ++_0xe2268a) {
      if (typeof _0x8eaf63.buttons[_0xe2268a] === "object") {
        _0x2c669e[_0x3aee8a + _0xe2268a * 4 + 1040 >> 2] = _0x8eaf63.buttons[_0xe2268a].pressed;
      } else {
        _0x2c669e[_0x3aee8a + _0xe2268a * 4 + 1040 >> 2] = _0x8eaf63.buttons[_0xe2268a] == 1;
      }
    }
    _0x2c669e[_0x3aee8a + 1296 >> 2] = _0x8eaf63.connected;
    _0x2c669e[_0x3aee8a + 1300 >> 2] = _0x8eaf63.index;
    _0x2c669e[_0x3aee8a + 8 >> 2] = _0x8eaf63.axes.length;
    _0x2c669e[_0x3aee8a + 12 >> 2] = _0x8eaf63.buttons.length;
    _0x98a294(_0x8eaf63.id, _0x3aee8a + 1304, 64);
    _0x98a294(_0x8eaf63.mapping, _0x3aee8a + 1368, 64);
  }
  function _0x47c192(_0x33f7e4, _0xc0de02) {
    if (_0x33f7e4 < 0 || _0x33f7e4 >= _0x71eede.lastGamepadState.length) {
      return -5;
    }
    if (!_0x71eede.lastGamepadState[_0x33f7e4]) {
      return -7;
    }
    _0x15bd48(_0xc0de02, _0x71eede.lastGamepadState[_0x33f7e4]);
    return 0;
  }
  function _0x17f688() {
    return 2147483648;
  }
  function _0x328d9b() {
    return _0x71eede.lastGamepadState.length;
  }
  function _0xcd47bd() {
    _0x71eede.removeAllEventListeners();
  }
  function _0x4f285d(_0xbdb7a8) {
    return !_0x21b49c.contexts[_0xbdb7a8] || _0x21b49c.contexts[_0xbdb7a8].GLctx.isContextLost();
  }
  function _0x2dcd82(_0x324407) {
    return _0x324407 < 0 || _0x324407 === 0 && 1 / _0x324407 === -Infinity;
  }
  function _0x17779e(_0x18a8ac, _0x270547) {
    return (_0x18a8ac >>> 0) + _0x270547 * 4294967296;
  }
  function _0x26b25d(_0x2fd43b, _0x15dc1a) {
    return (_0x2fd43b >>> 0) + (_0x15dc1a >>> 0) * 4294967296;
  }
  function _0x398937(_0x430344, _0x55d186) {
    if (_0x430344 <= 0) {
      return _0x430344;
    }
    var _0x33112c = _0x55d186 <= 32 ? Math.abs(1 << _0x55d186 - 1) : Math.pow(2, _0x55d186 - 1);
    if (_0x430344 >= _0x33112c && (_0x55d186 <= 32 || _0x430344 > _0x33112c)) {
      _0x430344 = _0x33112c * -2 + _0x430344;
    }
    return _0x430344;
  }
  function _0x304610(_0x449e5a, _0x379162) {
    if (_0x449e5a >= 0) {
      return _0x449e5a;
    }
    if (_0x379162 <= 32) {
      return Math.abs(1 << _0x379162 - 1) * 2 + _0x449e5a;
    } else {
      return Math.pow(2, _0x379162) + _0x449e5a;
    }
  }
  function _0x3dfe0f(_0x5967df, _0x464cbe) {
    var _0x48dd1b = _0x5967df;
    var _0x2c1730 = _0x464cbe;
    function _0x68e6dc(_0x444aa3, _0x2f9afe) {
      if (_0x2f9afe === "double" || _0x2f9afe === "i64") {
        if (_0x444aa3 & 7) {
          _0x444aa3 += 4;
        }
      } else {}
      return _0x444aa3;
    }
    function _0x57ce94(_0x2a7086) {
      var _0x22adfb;
      _0x2c1730 = _0x68e6dc(_0x2c1730, _0x2a7086);
      if (_0x2a7086 === "double") {
        _0x22adfb = _0x202918[_0x2c1730 >> 3];
        _0x2c1730 += 8;
      } else if (_0x2a7086 == "i64") {
        _0x22adfb = [_0x2c669e[_0x2c1730 >> 2], _0x2c669e[_0x2c1730 + 4 >> 2]];
        _0x2c1730 += 8;
      } else {
        _0x2a7086 = "i32";
        _0x22adfb = _0x2c669e[_0x2c1730 >> 2];
        _0x2c1730 += 4;
      }
      return _0x22adfb;
    }
    var _0x28c343 = [];
    var _0x1bb69c;
    var _0x13bfcd;
    var _0x38898a;
    while (1) {
      var _0xf63218 = _0x48dd1b;
      _0x1bb69c = _0xf9c0a9[_0x48dd1b >> 0];
      if (_0x1bb69c === 0) {
        break;
      }
      _0x13bfcd = _0xf9c0a9[_0x48dd1b + 1 >> 0];
      if (_0x1bb69c == 37) {
        var _0x4c451b = false;
        var _0x29292d = false;
        var _0x5ea062 = false;
        var _0x5485cf = false;
        var _0x5f4f17 = false;
        _0x1a9ada: while (1) {
          switch (_0x13bfcd) {
            case 43:
              _0x4c451b = true;
              break;
            case 45:
              _0x29292d = true;
              break;
            case 35:
              _0x5ea062 = true;
              break;
            case 48:
              if (_0x5485cf) {
                break _0x1a9ada;
              } else {
                _0x5485cf = true;
                break;
              }
            case 32:
              _0x5f4f17 = true;
              break;
            default:
              break _0x1a9ada;
          }
          _0x48dd1b++;
          _0x13bfcd = _0xf9c0a9[_0x48dd1b + 1 >> 0];
        }
        var _0xd752de = 0;
        if (_0x13bfcd == 42) {
          _0xd752de = _0x57ce94("i32");
          _0x48dd1b++;
          _0x13bfcd = _0xf9c0a9[_0x48dd1b + 1 >> 0];
        } else {
          while (_0x13bfcd >= 48 && _0x13bfcd <= 57) {
            _0xd752de = _0xd752de * 10 + (_0x13bfcd - 48);
            _0x48dd1b++;
            _0x13bfcd = _0xf9c0a9[_0x48dd1b + 1 >> 0];
          }
        }
        var _0x22e777 = false;
        var _0xc8a56e = -1;
        if (_0x13bfcd == 46) {
          _0xc8a56e = 0;
          _0x22e777 = true;
          _0x48dd1b++;
          _0x13bfcd = _0xf9c0a9[_0x48dd1b + 1 >> 0];
          if (_0x13bfcd == 42) {
            _0xc8a56e = _0x57ce94("i32");
            _0x48dd1b++;
          } else {
            while (1) {
              var _0x1fb078 = _0xf9c0a9[_0x48dd1b + 1 >> 0];
              if (_0x1fb078 < 48 || _0x1fb078 > 57) {
                break;
              }
              _0xc8a56e = _0xc8a56e * 10 + (_0x1fb078 - 48);
              _0x48dd1b++;
            }
          }
          _0x13bfcd = _0xf9c0a9[_0x48dd1b + 1 >> 0];
        }
        if (_0xc8a56e < 0) {
          _0xc8a56e = 6;
          _0x22e777 = false;
        }
        var _0xd8e242;
        switch (String.fromCharCode(_0x13bfcd)) {
          case "h":
            var _0x1a806d = _0xf9c0a9[_0x48dd1b + 2 >> 0];
            if (_0x1a806d == 104) {
              _0x48dd1b++;
              _0xd8e242 = 1;
            } else {
              _0xd8e242 = 2;
            }
            break;
          case "l":
            var _0x1a806d = _0xf9c0a9[_0x48dd1b + 2 >> 0];
            if (_0x1a806d == 108) {
              _0x48dd1b++;
              _0xd8e242 = 8;
            } else {
              _0xd8e242 = 4;
            }
            break;
          case "L":
          case "q":
          case "j":
            _0xd8e242 = 8;
            break;
          case "z":
          case "t":
          case "I":
            _0xd8e242 = 4;
            break;
          default:
            _0xd8e242 = null;
        }
        if (_0xd8e242) {
          _0x48dd1b++;
        }
        _0x13bfcd = _0xf9c0a9[_0x48dd1b + 1 >> 0];
        switch (String.fromCharCode(_0x13bfcd)) {
          case "d":
          case "i":
          case "u":
          case "o":
          case "x":
          case "X":
          case "p":
            {
              var _0x331ca2 = _0x13bfcd == 100 || _0x13bfcd == 105;
              _0xd8e242 = _0xd8e242 || 4;
              _0x38898a = _0x57ce94("i" + _0xd8e242 * 8);
              var _0x5e83d5;
              if (_0xd8e242 == 8) {
                _0x38898a = _0x13bfcd == 117 ? _0x26b25d(_0x38898a[0], _0x38898a[1]) : _0x17779e(_0x38898a[0], _0x38898a[1]);
              }
              if (_0xd8e242 <= 4) {
                var _0x2360b = Math.pow(256, _0xd8e242) - 1;
                _0x38898a = (_0x331ca2 ? _0x398937 : _0x304610)(_0x38898a & _0x2360b, _0xd8e242 * 8);
              }
              var _0x460af7 = Math.abs(_0x38898a);
              var _0x3b2aed = "";
              if (_0x13bfcd == 100 || _0x13bfcd == 105) {
                _0x5e83d5 = _0x398937(_0x38898a, _0xd8e242 * 8, 1).toString(10);
              } else if (_0x13bfcd == 117) {
                _0x5e83d5 = _0x304610(_0x38898a, _0xd8e242 * 8, 1).toString(10);
                _0x38898a = Math.abs(_0x38898a);
              } else if (_0x13bfcd == 111) {
                _0x5e83d5 = (_0x5ea062 ? "0" : "") + _0x460af7.toString(8);
              } else if (_0x13bfcd == 120 || _0x13bfcd == 88) {
                _0x3b2aed = _0x5ea062 && _0x38898a != 0 ? "0x" : "";
                if (_0x38898a < 0) {
                  _0x38898a = -_0x38898a;
                  _0x5e83d5 = (_0x460af7 - 1).toString(16);
                  var _0x49d140 = [];
                  for (var _0x361f53 = 0; _0x361f53 < _0x5e83d5.length; _0x361f53++) {
                    _0x49d140.push((15 - parseInt(_0x5e83d5[_0x361f53], 16)).toString(16));
                  }
                  _0x5e83d5 = _0x49d140.join("");
                  while (_0x5e83d5.length < _0xd8e242 * 2) {
                    _0x5e83d5 = "f" + _0x5e83d5;
                  }
                } else {
                  _0x5e83d5 = _0x460af7.toString(16);
                }
                if (_0x13bfcd == 88) {
                  _0x3b2aed = _0x3b2aed.toUpperCase();
                  _0x5e83d5 = _0x5e83d5.toUpperCase();
                }
              } else if (_0x13bfcd == 112) {
                if (_0x460af7 === 0) {
                  _0x5e83d5 = "(nil)";
                } else {
                  _0x3b2aed = "0x";
                  _0x5e83d5 = _0x460af7.toString(16);
                }
              }
              if (_0x22e777) {
                while (_0x5e83d5.length < _0xc8a56e) {
                  _0x5e83d5 = "0" + _0x5e83d5;
                }
              }
              if (_0x38898a >= 0) {
                if (_0x4c451b) {
                  _0x3b2aed = "+" + _0x3b2aed;
                } else if (_0x5f4f17) {
                  _0x3b2aed = " " + _0x3b2aed;
                }
              }
              if (_0x5e83d5.charAt(0) == "-") {
                _0x3b2aed = "-" + _0x3b2aed;
                _0x5e83d5 = _0x5e83d5.substr(1);
              }
              while (_0x3b2aed.length + _0x5e83d5.length < _0xd752de) {
                if (_0x29292d) {
                  _0x5e83d5 += " ";
                } else if (_0x5485cf) {
                  _0x5e83d5 = "0" + _0x5e83d5;
                } else {
                  _0x3b2aed = " " + _0x3b2aed;
                }
              }
              _0x5e83d5 = _0x3b2aed + _0x5e83d5;
              _0x5e83d5.split("").forEach(function (_0xae7038) {
                _0x28c343.push(_0xae7038.charCodeAt(0));
              });
              break;
            }
          case "f":
          case "F":
          case "e":
          case "E":
          case "g":
          case "G":
            {
              _0x38898a = _0x57ce94("double");
              var _0x5e83d5;
              if (isNaN(_0x38898a)) {
                _0x5e83d5 = "nan";
                _0x5485cf = false;
              } else if (!isFinite(_0x38898a)) {
                _0x5e83d5 = (_0x38898a < 0 ? "-" : "") + "inf";
                _0x5485cf = false;
              } else {
                var _0xd105c1 = false;
                var _0x4e50b0 = Math.min(_0xc8a56e, 20);
                if (_0x13bfcd == 103 || _0x13bfcd == 71) {
                  _0xd105c1 = true;
                  _0xc8a56e = _0xc8a56e || 1;
                  var _0x1deee1 = parseInt(_0x38898a.toExponential(_0x4e50b0).split("e")[1], 10);
                  if (_0xc8a56e > _0x1deee1 && _0x1deee1 >= -4) {
                    _0x13bfcd = (_0x13bfcd == 103 ? "f" : "F").charCodeAt(0);
                    _0xc8a56e -= _0x1deee1 + 1;
                  } else {
                    _0x13bfcd = (_0x13bfcd == 103 ? "e" : "E").charCodeAt(0);
                    _0xc8a56e--;
                  }
                  _0x4e50b0 = Math.min(_0xc8a56e, 20);
                }
                if (_0x13bfcd == 101 || _0x13bfcd == 69) {
                  _0x5e83d5 = _0x38898a.toExponential(_0x4e50b0);
                  if (/[eE][-+]\d$/.test(_0x5e83d5)) {
                    _0x5e83d5 = _0x5e83d5.slice(0, -1) + "0" + _0x5e83d5.slice(-1);
                  }
                } else if (_0x13bfcd == 102 || _0x13bfcd == 70) {
                  _0x5e83d5 = _0x38898a.toFixed(_0x4e50b0);
                  if (_0x38898a === 0 && _0x2dcd82(_0x38898a)) {
                    _0x5e83d5 = "-" + _0x5e83d5;
                  }
                }
                var _0x1b174f = _0x5e83d5.split("e");
                if (_0xd105c1 && !_0x5ea062) {
                  while (_0x1b174f[0].length > 1 && _0x1b174f[0].includes(".") && (_0x1b174f[0].slice(-1) == "0" || _0x1b174f[0].slice(-1) == ".")) {
                    _0x1b174f[0] = _0x1b174f[0].slice(0, -1);
                  }
                } else {
                  if (_0x5ea062 && _0x5e83d5.indexOf(".") == -1) {
                    _0x1b174f[0] += ".";
                  }
                  while (_0xc8a56e > _0x4e50b0++) {
                    _0x1b174f[0] += "0";
                  }
                }
                _0x5e83d5 = _0x1b174f[0] + (_0x1b174f.length > 1 ? "e" + _0x1b174f[1] : "");
                if (_0x13bfcd == 69) {
                  _0x5e83d5 = _0x5e83d5.toUpperCase();
                }
                if (_0x38898a >= 0) {
                  if (_0x4c451b) {
                    _0x5e83d5 = "+" + _0x5e83d5;
                  } else if (_0x5f4f17) {
                    _0x5e83d5 = " " + _0x5e83d5;
                  }
                }
              }
              while (_0x5e83d5.length < _0xd752de) {
                if (_0x29292d) {
                  _0x5e83d5 += " ";
                } else if (_0x5485cf && (_0x5e83d5[0] == "-" || _0x5e83d5[0] == "+")) {
                  _0x5e83d5 = _0x5e83d5[0] + "0" + _0x5e83d5.slice(1);
                } else {
                  _0x5e83d5 = (_0x5485cf ? "0" : " ") + _0x5e83d5;
                }
              }
              if (_0x13bfcd < 97) {
                _0x5e83d5 = _0x5e83d5.toUpperCase();
              }
              _0x5e83d5.split("").forEach(function (_0x3f6fe0) {
                _0x28c343.push(_0x3f6fe0.charCodeAt(0));
              });
              break;
            }
          case "s":
            {
              var _0xe3dca = _0x57ce94("i8*");
              var _0x5a278e = _0xe3dca ? _0x10bda0(_0xe3dca) : "(null)".length;
              if (_0x22e777) {
                _0x5a278e = Math.min(_0x5a278e, _0xc8a56e);
              }
              if (!_0x29292d) {
                while (_0x5a278e < _0xd752de--) {
                  _0x28c343.push(32);
                }
              }
              if (_0xe3dca) {
                for (var _0x361f53 = 0; _0x361f53 < _0x5a278e; _0x361f53++) {
                  _0x28c343.push(_0x353336[_0xe3dca++ >> 0]);
                }
              } else {
                _0x28c343 = _0x28c343.concat(_0x5dcb19("(null)".substr(0, _0x5a278e), true));
              }
              if (_0x29292d) {
                while (_0x5a278e < _0xd752de--) {
                  _0x28c343.push(32);
                }
              }
              break;
            }
          case "c":
            {
              if (_0x29292d) {
                _0x28c343.push(_0x57ce94("i8"));
              }
              while (--_0xd752de > 0) {
                _0x28c343.push(32);
              }
              if (!_0x29292d) {
                _0x28c343.push(_0x57ce94("i8"));
              }
              break;
            }
          case "n":
            {
              var _0x2af9f4 = _0x57ce94("i32*");
              _0x2c669e[_0x2af9f4 >> 2] = _0x28c343.length;
              break;
            }
          case "%":
            {
              _0x28c343.push(_0x1bb69c);
              break;
            }
          default:
            {
              for (var _0x361f53 = _0xf63218; _0x361f53 < _0x48dd1b + 2; _0x361f53++) {
                _0x28c343.push(_0xf9c0a9[_0x361f53 >> 0]);
              }
            }
        }
        _0x48dd1b += 2;
      } else {
        _0x28c343.push(_0x1bb69c);
        _0x48dd1b += 1;
      }
    }
    return _0x28c343;
  }
  function _0x3be16b(_0x2cf2e1) {
    if (!_0x2cf2e1 || !_0x2cf2e1.callee || !_0x2cf2e1.callee.name) {
      return [null, "", ""];
    }
    var _0x438f37 = _0x2cf2e1.callee.toString();
    var _0x2a29 = _0x2cf2e1.callee.name;
    var _0x297b02 = "(";
    var _0xf2ab39 = true;
    for (var _0x352fd3 in _0x2cf2e1) {
      var _0x51c5be = _0x2cf2e1[_0x352fd3];
      if (!_0xf2ab39) {
        _0x297b02 += ", ";
      }
      _0xf2ab39 = false;
      if (typeof _0x51c5be === "number" || typeof _0x51c5be === "string") {
        _0x297b02 += _0x51c5be;
      } else {
        _0x297b02 += "(" + typeof _0x51c5be + ")";
      }
    }
    _0x297b02 += ")";
    var _0x54edbe = _0x2cf2e1.callee.caller;
    _0x2cf2e1 = _0x54edbe ? _0x54edbe.arguments : [];
    if (_0xf2ab39) {
      _0x297b02 = "";
    }
    return [_0x2cf2e1, _0x2a29, _0x297b02];
  }
  function _0x3d5024(_0x4c0a99) {
    var _0x97f4bc = _0x2114ef();
    var _0x1e2e8c = _0x97f4bc.lastIndexOf("_emscripten_log");
    var _0x1ca388 = _0x97f4bc.lastIndexOf("_emscripten_get_callstack");
    var _0x357f9f = _0x97f4bc.indexOf("\n", Math.max(_0x1e2e8c, _0x1ca388)) + 1;
    _0x97f4bc = _0x97f4bc.slice(_0x357f9f);
    if (_0x4c0a99 & 32) {
      _0x539b49("EM_LOG_DEMANGLE is deprecated; ignoring");
    }
    if (_0x4c0a99 & 8 && typeof emscripten_source_map === "undefined") {
      _0x539b49("Source map information is not available, emscripten_log with EM_LOG_C_STACK will be ignored. Build with \"--pre-js $EMSCRIPTEN/src/emscripten-source-map.min.js\" linker flag to add source map loading to code.");
      _0x4c0a99 ^= 8;
      _0x4c0a99 |= 16;
    }
    var _0x59128c = null;
    if (_0x4c0a99 & 128) {
      _0x59128c = _0x3be16b(arguments);
      while (_0x59128c[1].includes("_emscripten_")) {
        _0x59128c = _0x3be16b(_0x59128c[0]);
      }
    }
    var _0x10258d = _0x97f4bc.split("\n");
    _0x97f4bc = "";
    var _0x4165c1 = new RegExp("\\s*(.*?)@(.*?):([0-9]+):([0-9]+)");
    var _0x1be75c = new RegExp("\\s*(.*?)@(.*):(.*)(:(.*))?");
    var _0x225e66 = new RegExp("\\s*at (.*?) \\((.*):(.*):(.*)\\)");
    for (var _0x25966a in _0x10258d) {
      var _0x32c2a3 = _0x10258d[_0x25966a];
      var _0x2bbfce = "";
      var _0x11fc4d = "";
      var _0x4a3da9 = 0;
      var _0x29b8fc = 0;
      var _0x47bb79 = _0x225e66.exec(_0x32c2a3);
      if (_0x47bb79 && _0x47bb79.length == 5) {
        _0x2bbfce = _0x47bb79[1];
        _0x11fc4d = _0x47bb79[2];
        _0x4a3da9 = _0x47bb79[3];
        _0x29b8fc = _0x47bb79[4];
      } else {
        _0x47bb79 = _0x4165c1.exec(_0x32c2a3);
        if (!_0x47bb79) {
          _0x47bb79 = _0x1be75c.exec(_0x32c2a3);
        }
        if (_0x47bb79 && _0x47bb79.length >= 4) {
          _0x2bbfce = _0x47bb79[1];
          _0x11fc4d = _0x47bb79[2];
          _0x4a3da9 = _0x47bb79[3];
          _0x29b8fc = _0x47bb79[4] | 0;
        } else {
          _0x97f4bc += _0x32c2a3 + "\n";
          continue;
        }
      }
      var _0x4e52ab = false;
      if (_0x4c0a99 & 8) {
        var _0x1ed414 = emscripten_source_map.originalPositionFor({
          line: _0x4a3da9,
          column: _0x29b8fc
        });
        _0x4e52ab = _0x1ed414 && _0x1ed414.source;
        if (_0x4e52ab) {
          if (_0x4c0a99 & 64) {
            _0x1ed414.source = _0x1ed414.source.substring(_0x1ed414.source.replace(/\\/g, "/").lastIndexOf("/") + 1);
          }
          _0x97f4bc += "    at " + _0x2bbfce + " (" + _0x1ed414.source + ":" + _0x1ed414.line + ":" + _0x1ed414.column + ")\n";
        }
      }
      if (_0x4c0a99 & 16 || !_0x4e52ab) {
        if (_0x4c0a99 & 64) {
          _0x11fc4d = _0x11fc4d.substring(_0x11fc4d.replace(/\\/g, "/").lastIndexOf("/") + 1);
        }
        _0x97f4bc += (_0x4e52ab ? "     = " + _0x2bbfce : "    at " + _0x2bbfce) + " (" + _0x11fc4d + ":" + _0x4a3da9 + ":" + _0x29b8fc + ")\n";
      }
      if (_0x4c0a99 & 128 && _0x59128c[0]) {
        if (_0x59128c[1] == _0x2bbfce && _0x59128c[2].length > 0) {
          _0x97f4bc = _0x97f4bc.replace(/\s+$/, "");
          _0x97f4bc += " with values: " + _0x59128c[1] + _0x59128c[2] + "\n";
        }
        _0x59128c = _0x3be16b(_0x59128c[0]);
      }
    }
    _0x97f4bc = _0x97f4bc.replace(/\s+$/, "");
    return _0x97f4bc;
  }
  function _0x1fa243(_0x2b124d, _0xca663b) {
    if (_0x2b124d & 24) {
      _0xca663b = _0xca663b.replace(/\s+$/, "");
      _0xca663b += (_0xca663b.length > 0 ? "\n" : "") + _0x3d5024(_0x2b124d);
    }
    if (_0x2b124d & 1) {
      if (_0x2b124d & 4) {
        console.error(_0xca663b);
      } else if (_0x2b124d & 2) {
        console.warn(_0xca663b);
      } else if (_0x2b124d & 512) {
        console.info(_0xca663b);
      } else if (_0x2b124d & 256) {
        console.debug(_0xca663b);
      } else {
        console.log(_0xca663b);
      }
    } else if (_0x2b124d & 6) {
      _0x500e9(_0xca663b);
    } else {
      _0x1b619b(_0xca663b);
    }
  }
  function _0x41d558(_0x48cab5, _0x5ad1c9, _0x270389) {
    var _0x684f49 = _0x3dfe0f(_0x5ad1c9, _0x270389);
    var _0x4e7d46 = _0x39bfc1(_0x684f49, 0);
    _0x1fa243(_0x48cab5, _0x4e7d46);
  }
  function _0x414882(_0x52f4b2, _0xa1a22a) {
    _0x1cd625(_0x52f4b2, _0xa1a22a || 1);
    throw "longjmp";
  }
  function _0x3f102c(_0x273e89, _0x27cd3a) {
    return _0x414882(_0x273e89, _0x27cd3a);
  }
  function _0x14ccd7(_0x5bc0ec, _0x39ee9c, _0x30446) {
    _0x353336.copyWithin(_0x5bc0ec, _0x39ee9c, _0x39ee9c + _0x30446);
  }
  function _0x1df7df(_0x171418, _0xcb80e0) {
    if (!_0x71eede.fullscreenEnabled()) {
      return -1;
    }
    _0x171418 = _0x484edc(_0x171418);
    if (!_0x171418) {
      return -4;
    }
    if (!_0x171418.requestFullscreen && !_0x171418.webkitRequestFullscreen) {
      return -3;
    }
    var _0x7922a1 = _0x71eede.canPerformEventHandlerRequests();
    if (!_0x7922a1) {
      if (_0xcb80e0.deferUntilInEventHandler) {
        _0x71eede.deferCall(_0x4d36a1, 1, [_0x171418, _0xcb80e0]);
        return 1;
      } else {
        return -2;
      }
    }
    return _0x4d36a1(_0x171418, _0xcb80e0);
  }
  function _0x409533(_0x2f5de9, _0x37e0ba) {
    var _0x280416 = {
      scaleMode: 0,
      canvasResolutionScaleMode: 0,
      filteringMode: 0,
      deferUntilInEventHandler: _0x37e0ba,
      canvasResizedCallbackTargetThread: 2
    };
    return _0x1df7df(_0x2f5de9, _0x280416);
  }
  function _0x359dd1(_0x3f00b7, _0xc5a5af) {
    _0x3f00b7 = _0x484edc(_0x3f00b7);
    if (!_0x3f00b7) {
      return -4;
    }
    if (!_0x3f00b7.requestPointerLock && !_0x3f00b7.msRequestPointerLock) {
      return -1;
    }
    var _0xb2af9a = _0x71eede.canPerformEventHandlerRequests();
    if (!_0xb2af9a) {
      if (_0xc5a5af) {
        _0x71eede.deferCall(_0x522b6b, 2, [_0x3f00b7]);
        return 1;
      } else {
        return -2;
      }
    }
    return _0x522b6b(_0x3f00b7);
  }
  function _0x44eed6(_0x24a197) {
    try {
      _0xbe5cea.grow(_0x24a197 - _0x479424.byteLength + 65535 >>> 16);
      _0x1f8f60(_0xbe5cea.buffer);
      return 1;
    } catch (_0x24ba28) {}
  }
  function _0x36421c(_0x1083a5) {
    var _0x39f8e9 = _0x353336.length;
    _0x1083a5 = _0x1083a5 >>> 0;
    var _0x1c6b4e = 2147483648;
    if (_0x1083a5 > _0x1c6b4e) {
      return false;
    }
    for (var _0x5a8a82 = 1; _0x5a8a82 <= 4; _0x5a8a82 *= 2) {
      var _0x52f397 = _0x39f8e9 * (1 + 0.2 / _0x5a8a82);
      _0x52f397 = Math.min(_0x52f397, _0x1083a5 + 100663296);
      var _0x4a035d = Math.min(_0x1c6b4e, _0x71e6ce(Math.max(_0x1083a5, _0x52f397), 65536));
      var _0x15dc21 = _0x44eed6(_0x4a035d);
      if (_0x15dc21) {
        return true;
      }
    }
    return false;
  }
  function _0x207f36() {
    try {
      if (navigator.getGamepads) {
        if (_0x71eede.lastGamepadState = navigator.getGamepads()) {
          return 0;
        } else {
          return -1;
        }
      }
    } catch (_0x2525fa) {
      navigator.getGamepads = null;
    }
    return -1;
  }
  function _0x2a3ff1(_0x5abedb, _0x30ee45, _0x10d396, _0x15ea0b, _0x3c63aa, _0x4aaa73, _0x3e0ef4) {
    if (!_0x71eede.focusEvent) {
      _0x71eede.focusEvent = _0x45bc34(256);
    }
    function _0x4ffcb3(_0x21559e) {
      var _0x50d060 = _0x21559e || event;
      var _0x8edd41 = _0x71eede.getNodeNameForTarget(_0x50d060.target);
      var _0x52f6c4 = _0x50d060.target.id ? _0x50d060.target.id : "";
      var _0x1dded2 = _0x71eede.focusEvent;
      _0x98a294(_0x8edd41, _0x1dded2 + 0, 128);
      _0x98a294(_0x52f6c4, _0x1dded2 + 128, 128);
      if (function (_0x5707c0, _0x551cf7, _0x377993) {
        return _0x3518f2.apply(null, [_0x15ea0b, _0x5707c0, _0x551cf7, _0x377993]);
      }(_0x3c63aa, _0x1dded2, _0x30ee45)) {
        _0x50d060.preventDefault();
      }
    }
    var _0x5a6f0f = {
      target: _0x484edc(_0x5abedb),
      eventTypeString: _0x4aaa73,
      callbackfunc: _0x15ea0b,
      handlerFunc: _0x4ffcb3,
      useCapture: _0x10d396
    };
    _0x71eede.registerOrRemoveHandler(_0x5a6f0f);
  }
  function _0x5f11fe(_0x3f52e2, _0x3048ed, _0x46f06a, _0x3e531b, _0x1645f7) {
    _0x2a3ff1(_0x3f52e2, _0x3048ed, _0x46f06a, _0x3e531b, 12, "blur", _0x1645f7);
    return 0;
  }
  function _0x47dc2b(_0x5a4ab3, _0x15dff6, _0x59f2f0, _0x48ab42, _0x2eb625) {
    _0x2a3ff1(_0x5a4ab3, _0x15dff6, _0x59f2f0, _0x48ab42, 13, "focus", _0x2eb625);
    return 0;
  }
  function _0xabeb0c(_0x5ce7af, _0x5207c4, _0x36e739, _0x306cd2, _0x38f476, _0x3e168f, _0x2b5531) {
    if (!_0x71eede.fullscreenChangeEvent) {
      _0x71eede.fullscreenChangeEvent = _0x45bc34(280);
    }
    function _0x2d6dd1(_0x2bcf6c) {
      var _0x5d6220 = _0x2bcf6c || event;
      var _0x47b68f = _0x71eede.fullscreenChangeEvent;
      _0x5865c3(_0x47b68f);
      if (function (_0x1eb813, _0x342fbc, _0x41d156) {
        return _0x3518f2.apply(null, [_0x306cd2, _0x1eb813, _0x342fbc, _0x41d156]);
      }(_0x38f476, _0x47b68f, _0x5207c4)) {
        _0x5d6220.preventDefault();
      }
    }
    var _0x25c7b9 = {
      target: _0x5ce7af,
      eventTypeString: _0x3e168f,
      callbackfunc: _0x306cd2,
      handlerFunc: _0x2d6dd1,
      useCapture: _0x36e739
    };
    _0x71eede.registerOrRemoveHandler(_0x25c7b9);
  }
  function _0x355224(_0x2b8e54, _0x19eb1e, _0x36ccf9, _0x25f05a, _0x4e3bde) {
    if (!_0x71eede.fullscreenEnabled()) {
      return -1;
    }
    _0x2b8e54 = _0x484edc(_0x2b8e54);
    if (!_0x2b8e54) {
      return -4;
    }
    _0xabeb0c(_0x2b8e54, _0x19eb1e, _0x36ccf9, _0x25f05a, 19, "fullscreenchange", _0x4e3bde);
    _0xabeb0c(_0x2b8e54, _0x19eb1e, _0x36ccf9, _0x25f05a, 19, "webkitfullscreenchange", _0x4e3bde);
    return 0;
  }
  function _0x280342(_0x39ac3f, _0x5def82, _0x30ea67, _0x1e3f8f, _0x4d3d1d, _0x375c2f, _0x10b965) {
    if (!_0x71eede.gamepadEvent) {
      _0x71eede.gamepadEvent = _0x45bc34(1432);
    }
    function _0x1945e9(_0x2a82c6) {
      var _0x22cd96 = _0x2a82c6 || event;
      var _0x4b0a96 = _0x71eede.gamepadEvent;
      _0x15bd48(_0x4b0a96, _0x22cd96.gamepad);
      if (function (_0x57d692, _0x548164, _0x2a4d3c) {
        return _0x3518f2.apply(null, [_0x1e3f8f, _0x57d692, _0x548164, _0x2a4d3c]);
      }(_0x4d3d1d, _0x4b0a96, _0x5def82)) {
        _0x22cd96.preventDefault();
      }
    }
    var _0xd712cb = {
      target: _0x484edc(_0x39ac3f),
      allowsDeferredCalls: true,
      eventTypeString: _0x375c2f,
      callbackfunc: _0x1e3f8f,
      handlerFunc: _0x1945e9,
      useCapture: _0x30ea67
    };
    _0x71eede.registerOrRemoveHandler(_0xd712cb);
  }
  function _0x14b050(_0x53cddd, _0x579654, _0x575b96, _0x2809ff) {
    if (_0x207f36()) {
      return -1;
    }
    return _0x280342(2, _0x53cddd, _0x579654, _0x575b96, 26, "gamepadconnected", _0x2809ff);
  }
  function _0x668bd7(_0x98a9f8, _0x329de9, _0x1c19a3, _0x24b18c) {
    if (_0x207f36()) {
      return -1;
    }
    return _0x280342(2, _0x98a9f8, _0x329de9, _0x1c19a3, 27, "gamepaddisconnected", _0x24b18c);
  }
  function _0xddab34(_0x29e9d0, _0x2aeb7f, _0x2591b3) {
    return setInterval(function () {
      (function (_0x5ed370) {
        _0x3455a4.apply(null, [_0x29e9d0, _0x5ed370]);
      })(_0x2591b3);
    }, _0x2aeb7f);
  }
  function _0x37ddf0(_0x11cbf2, _0x52e97f, _0x567401, _0x1aabb7, _0x425e1f, _0x531354, _0x3432a4) {
    if (!_0x71eede.keyEvent) {
      _0x71eede.keyEvent = _0x45bc34(164);
    }
    function _0x4357a1(_0x364a3b) {
      var _0x2332aa = _0x71eede.keyEvent;
      var _0x225023 = _0x2332aa >> 2;
      _0x2c669e[_0x225023 + 0] = _0x364a3b.location;
      _0x2c669e[_0x225023 + 1] = _0x364a3b.ctrlKey;
      _0x2c669e[_0x225023 + 2] = _0x364a3b.shiftKey;
      _0x2c669e[_0x225023 + 3] = _0x364a3b.altKey;
      _0x2c669e[_0x225023 + 4] = _0x364a3b.metaKey;
      _0x2c669e[_0x225023 + 5] = _0x364a3b.repeat;
      _0x2c669e[_0x225023 + 6] = _0x364a3b.charCode;
      _0x2c669e[_0x225023 + 7] = _0x364a3b.keyCode;
      _0x2c669e[_0x225023 + 8] = _0x364a3b.which;
      _0x98a294(_0x364a3b.key || "", _0x2332aa + 36, 32);
      _0x98a294(_0x364a3b.code || "", _0x2332aa + 68, 32);
      _0x98a294(_0x364a3b.char || "", _0x2332aa + 100, 32);
      _0x98a294(_0x364a3b.locale || "", _0x2332aa + 132, 32);
      if (function (_0x31827a, _0xe52c9b, _0x68e2f6) {
        return _0x3518f2.apply(null, [_0x1aabb7, _0x31827a, _0xe52c9b, _0x68e2f6]);
      }(_0x425e1f, _0x2332aa, _0x52e97f)) {
        _0x364a3b.preventDefault();
      }
    }
    var _0x2b7e95 = {
      target: _0x484edc(_0x11cbf2),
      allowsDeferredCalls: true,
      eventTypeString: _0x531354,
      callbackfunc: _0x1aabb7,
      handlerFunc: _0x4357a1,
      useCapture: _0x567401
    };
    _0x71eede.registerOrRemoveHandler(_0x2b7e95);
  }
  function _0x34d300(_0x2a72a9, _0x56e1eb, _0x2b1a26, _0x18fdb2, _0x32324a) {
    _0x37ddf0(_0x2a72a9, _0x56e1eb, _0x2b1a26, _0x18fdb2, 2, "keydown", _0x32324a);
    return 0;
  }
  function _0x3cb041(_0xc1a2fd, _0x183fbc, _0x7b4238, _0x1a79e4, _0x2d13f6) {
    _0x37ddf0(_0xc1a2fd, _0x183fbc, _0x7b4238, _0x1a79e4, 1, "keypress", _0x2d13f6);
    return 0;
  }
  function _0x4bcc09(_0x19d606, _0x33b06a, _0x1460cd, _0x2ce637, _0x70a4d9) {
    _0x37ddf0(_0x19d606, _0x33b06a, _0x1460cd, _0x2ce637, 3, "keyup", _0x70a4d9);
    return 0;
  }
  function _0x3cc19a(_0x29c81f, _0x831f4, _0x35be1e) {
    function _0x473f24() {
      _0x5ec935.call(null, _0x29c81f);
    }
    _0x2422ac(_0x473f24, _0x831f4, _0x35be1e);
  }
  function _0x4af99a(_0x132d66, _0x43f041, _0x3eed80) {
    var _0x568571 = _0x132d66 >> 2;
    _0x2c669e[_0x568571 + 0] = _0x43f041.screenX;
    _0x2c669e[_0x568571 + 1] = _0x43f041.screenY;
    _0x2c669e[_0x568571 + 2] = _0x43f041.clientX;
    _0x2c669e[_0x568571 + 3] = _0x43f041.clientY;
    _0x2c669e[_0x568571 + 4] = _0x43f041.ctrlKey;
    _0x2c669e[_0x568571 + 5] = _0x43f041.shiftKey;
    _0x2c669e[_0x568571 + 6] = _0x43f041.altKey;
    _0x2c669e[_0x568571 + 7] = _0x43f041.metaKey;
    _0x2c34d4[_0x568571 * 2 + 16] = _0x43f041.button;
    _0x2c34d4[_0x568571 * 2 + 17] = _0x43f041.buttons;
    _0x2c669e[_0x568571 + 9] = _0x43f041.movementX;
    _0x2c669e[_0x568571 + 10] = _0x43f041.movementY;
    var _0x37e1c5 = _0x2ee18e(_0x3eed80);
    _0x2c669e[_0x568571 + 11] = _0x43f041.clientX - _0x37e1c5.left;
    _0x2c669e[_0x568571 + 12] = _0x43f041.clientY - _0x37e1c5.top;
  }
  function _0x16687d(_0x35b46f, _0x311a58, _0x489f3f, _0x1119ab, _0xb7477b, _0x1e46fe, _0x38165e) {
    if (!_0x71eede.mouseEvent) {
      _0x71eede.mouseEvent = _0x45bc34(64);
    }
    _0x35b46f = _0x484edc(_0x35b46f);
    function _0x33f8ff(_0x4e0653) {
      var _0x322544 = _0x4e0653 || event;
      _0x4af99a(_0x71eede.mouseEvent, _0x322544, _0x35b46f);
      if (function (_0x332b32, _0x58dc66, _0x1acdc0) {
        return _0x3518f2.apply(null, [_0x1119ab, _0x332b32, _0x58dc66, _0x1acdc0]);
      }(_0xb7477b, _0x71eede.mouseEvent, _0x311a58)) {
        _0x322544.preventDefault();
      }
    }
    var _0x3a2193 = {
      target: _0x35b46f,
      allowsDeferredCalls: _0x1e46fe != "mousemove" && _0x1e46fe != "mouseenter" && _0x1e46fe != "mouseleave",
      eventTypeString: _0x1e46fe,
      callbackfunc: _0x1119ab,
      handlerFunc: _0x33f8ff,
      useCapture: _0x489f3f
    };
    _0x71eede.registerOrRemoveHandler(_0x3a2193);
  }
  function _0x2321c9(_0x289f48, _0x594b14, _0x3a98b9, _0x35b2d1, _0x5e971e) {
    _0x16687d(_0x289f48, _0x594b14, _0x3a98b9, _0x35b2d1, 5, "mousedown", _0x5e971e);
    return 0;
  }
  function _0x32d65a(_0x5b0864, _0x488bde, _0x4c2e89, _0x1be683, _0xecf7fd) {
    _0x16687d(_0x5b0864, _0x488bde, _0x4c2e89, _0x1be683, 8, "mousemove", _0xecf7fd);
    return 0;
  }
  function _0x3bbc1c(_0x3be230, _0x456feb, _0x2c6609, _0x5b79c5, _0x16ed5d) {
    _0x16687d(_0x3be230, _0x456feb, _0x2c6609, _0x5b79c5, 6, "mouseup", _0x16ed5d);
    return 0;
  }
  function _0x44de46(_0x566145) {
    var _0x19b263 = document.pointerLockElement || document.mozPointerLockElement || document.webkitPointerLockElement || document.msPointerLockElement;
    var _0x317091 = !!_0x19b263;
    _0x2c669e[_0x566145 >> 2] = _0x317091;
    var _0x4fd4b5 = _0x71eede.getNodeNameForTarget(_0x19b263);
    var _0x46a740 = _0x19b263 && _0x19b263.id ? _0x19b263.id : "";
    _0x98a294(_0x4fd4b5, _0x566145 + 4, 128);
    _0x98a294(_0x46a740, _0x566145 + 132, 128);
  }
  function _0x492568(_0x431cf1, _0x3dabe6, _0x5c35be, _0xe44a3b, _0x540e98, _0x39871e, _0x470aba) {
    if (!_0x71eede.pointerlockChangeEvent) {
      _0x71eede.pointerlockChangeEvent = _0x45bc34(260);
    }
    function _0x3ed66c(_0x195455) {
      var _0x5d1c81 = _0x195455 || event;
      var _0x21419a = _0x71eede.pointerlockChangeEvent;
      _0x44de46(_0x21419a);
      if (function (_0x28abab, _0x29c43b, _0x581875) {
        return _0x3518f2.apply(null, [_0xe44a3b, _0x28abab, _0x29c43b, _0x581875]);
      }(_0x540e98, _0x21419a, _0x3dabe6)) {
        _0x5d1c81.preventDefault();
      }
    }
    var _0x2ae388 = {
      target: _0x431cf1,
      eventTypeString: _0x39871e,
      callbackfunc: _0xe44a3b,
      handlerFunc: _0x3ed66c,
      useCapture: _0x5c35be
    };
    _0x71eede.registerOrRemoveHandler(_0x2ae388);
  }
  function _0x456916(_0x2e2990, _0x1db7ed, _0x3bab6d, _0x4587e9, _0xec8773) {
    if (!document || !document.body || !document.body.requestPointerLock && !document.body.mozRequestPointerLock && !document.body.webkitRequestPointerLock && !document.body.msRequestPointerLock) {
      return -1;
    }
    _0x2e2990 = _0x484edc(_0x2e2990);
    if (!_0x2e2990) {
      return -4;
    }
    _0x492568(_0x2e2990, _0x1db7ed, _0x3bab6d, _0x4587e9, 20, "pointerlockchange", _0xec8773);
    _0x492568(_0x2e2990, _0x1db7ed, _0x3bab6d, _0x4587e9, 20, "mozpointerlockchange", _0xec8773);
    _0x492568(_0x2e2990, _0x1db7ed, _0x3bab6d, _0x4587e9, 20, "webkitpointerlockchange", _0xec8773);
    _0x492568(_0x2e2990, _0x1db7ed, _0x3bab6d, _0x4587e9, 20, "mspointerlockchange", _0xec8773);
    return 0;
  }
  function _0x5a12ee(_0x5814b6, _0x197888, _0x3db8fe, _0x4b7137, _0x20b95f, _0x3299a1, _0x524071) {
    if (!_0x71eede.touchEvent) {
      _0x71eede.touchEvent = _0x45bc34(1684);
    }
    _0x5814b6 = _0x484edc(_0x5814b6);
    function _0x5cf0c5(_0x54b3de) {
      var _0x206224;
      var _0x412b47 = {};
      var _0x553e71 = _0x54b3de.touches;
      for (var _0x82b358 = 0; _0x82b358 < _0x553e71.length; ++_0x82b358) {
        _0x206224 = _0x553e71[_0x82b358];
        _0x206224.isChanged = _0x206224.onTarget = 0;
        _0x412b47[_0x206224.identifier] = _0x206224;
      }
      for (var _0x82b358 = 0; _0x82b358 < _0x54b3de.changedTouches.length; ++_0x82b358) {
        _0x206224 = _0x54b3de.changedTouches[_0x82b358];
        _0x206224.isChanged = 1;
        _0x412b47[_0x206224.identifier] = _0x206224;
      }
      for (var _0x82b358 = 0; _0x82b358 < _0x54b3de.targetTouches.length; ++_0x82b358) {
        _0x412b47[_0x54b3de.targetTouches[_0x82b358].identifier].onTarget = 1;
      }
      var _0x1b34cc = _0x71eede.touchEvent;
      var _0x3bfa26 = _0x1b34cc >> 2;
      _0x2c669e[_0x3bfa26 + 1] = _0x54b3de.ctrlKey;
      _0x2c669e[_0x3bfa26 + 2] = _0x54b3de.shiftKey;
      _0x2c669e[_0x3bfa26 + 3] = _0x54b3de.altKey;
      _0x2c669e[_0x3bfa26 + 4] = _0x54b3de.metaKey;
      _0x3bfa26 += 5;
      var _0x2a5392 = _0x2ee18e(_0x5814b6);
      var _0x116024 = 0;
      for (var _0x82b358 in _0x412b47) {
        var _0x206224 = _0x412b47[_0x82b358];
        _0x2c669e[_0x3bfa26 + 0] = _0x206224.identifier;
        _0x2c669e[_0x3bfa26 + 1] = _0x206224.screenX;
        _0x2c669e[_0x3bfa26 + 2] = _0x206224.screenY;
        _0x2c669e[_0x3bfa26 + 3] = _0x206224.clientX;
        _0x2c669e[_0x3bfa26 + 4] = _0x206224.clientY;
        _0x2c669e[_0x3bfa26 + 5] = _0x206224.pageX;
        _0x2c669e[_0x3bfa26 + 6] = _0x206224.pageY;
        _0x2c669e[_0x3bfa26 + 7] = _0x206224.isChanged;
        _0x2c669e[_0x3bfa26 + 8] = _0x206224.onTarget;
        _0x2c669e[_0x3bfa26 + 9] = _0x206224.clientX - _0x2a5392.left;
        _0x2c669e[_0x3bfa26 + 10] = _0x206224.clientY - _0x2a5392.top;
        _0x3bfa26 += 13;
        if (++_0x116024 > 31) {
          break;
        }
      }
      _0x2c669e[_0x1b34cc >> 2] = _0x116024;
      if (function (_0x1419d3, _0x342330, _0x1d480b) {
        return _0x3518f2.apply(null, [_0x4b7137, _0x1419d3, _0x342330, _0x1d480b]);
      }(_0x20b95f, _0x1b34cc, _0x197888)) {
        _0x54b3de.preventDefault();
      }
    }
    var _0x7e7a7f = {
      target: _0x5814b6,
      allowsDeferredCalls: _0x3299a1 == "touchstart" || _0x3299a1 == "touchend",
      eventTypeString: _0x3299a1,
      callbackfunc: _0x4b7137,
      handlerFunc: _0x5cf0c5,
      useCapture: _0x3db8fe
    };
    _0x71eede.registerOrRemoveHandler(_0x7e7a7f);
  }
  function _0x390ae9(_0x5abd3b, _0x34b635, _0x4af6a2, _0x1d7048, _0x1eb397) {
    _0x5a12ee(_0x5abd3b, _0x34b635, _0x4af6a2, _0x1d7048, 25, "touchcancel", _0x1eb397);
    return 0;
  }
  function _0x8a8688(_0x57613f, _0x2f1307, _0x25367b, _0x3253ee, _0x422775) {
    _0x5a12ee(_0x57613f, _0x2f1307, _0x25367b, _0x3253ee, 23, "touchend", _0x422775);
    return 0;
  }
  function _0x18b456(_0x5d9c35, _0x5a9735, _0x17052e, _0x367cf3, _0xfbd58b) {
    _0x5a12ee(_0x5d9c35, _0x5a9735, _0x17052e, _0x367cf3, 24, "touchmove", _0xfbd58b);
    return 0;
  }
  function _0x2b191f(_0x121200, _0x4d46b5, _0x40959c, _0xea7aa4, _0x1ec0f7) {
    _0x5a12ee(_0x121200, _0x4d46b5, _0x40959c, _0xea7aa4, 22, "touchstart", _0x1ec0f7);
    return 0;
  }
  function _0x2a9a15(_0x331a45, _0x5c8de4, _0x487f65, _0x27c757, _0x127c05, _0x1f75bc, _0x5715e6) {
    if (!_0x71eede.wheelEvent) {
      _0x71eede.wheelEvent = _0x45bc34(96);
    }
    function _0x3ca252(_0x2a4780) {
      var _0x5e687e = _0x2a4780 || event;
      var _0x212491 = _0x71eede.wheelEvent;
      _0x4af99a(_0x212491, _0x5e687e, _0x331a45);
      _0x202918[_0x212491 + 64 >> 3] = _0x5e687e.deltaX;
      _0x202918[_0x212491 + 72 >> 3] = _0x5e687e.deltaY;
      _0x202918[_0x212491 + 80 >> 3] = _0x5e687e.deltaZ;
      _0x2c669e[_0x212491 + 88 >> 2] = _0x5e687e.deltaMode;
      if (function (_0x4c85f6, _0x53214, _0x596be7) {
        return _0x3518f2.apply(null, [_0x27c757, _0x4c85f6, _0x53214, _0x596be7]);
      }(_0x127c05, _0x212491, _0x5c8de4)) {
        _0x5e687e.preventDefault();
      }
    }
    var _0x380a0a = {
      target: _0x331a45,
      allowsDeferredCalls: true,
      eventTypeString: _0x1f75bc,
      callbackfunc: _0x27c757,
      handlerFunc: _0x3ca252,
      useCapture: _0x487f65
    };
    _0x71eede.registerOrRemoveHandler(_0x380a0a);
  }
  function _0x470194(_0x5c74f5, _0x4fe181, _0x45d4ce, _0x2fe5d2, _0x2c406d) {
    _0x5c74f5 = _0x484edc(_0x5c74f5);
    if (typeof _0x5c74f5.onwheel !== "undefined") {
      _0x2a9a15(_0x5c74f5, _0x4fe181, _0x45d4ce, _0x2fe5d2, 9, "wheel", _0x2c406d);
      return 0;
    } else {
      return -1;
    }
  }
  function _0x2daeee(_0x53105c) {
    var _0x37e831 = _0x734f67();
    while (_0x734f67() - _0x37e831 < _0x53105c) {}
  }
  function _0x3092d4(_0x426692) {
    var _0x4f4a0d = _0x426692.getExtension("ANGLE_instanced_arrays");
    if (_0x4f4a0d) {
      _0x426692.vertexAttribDivisor = function (_0x560c22, _0x541599) {
        _0x4f4a0d.vertexAttribDivisorANGLE(_0x560c22, _0x541599);
      };
      _0x426692.drawArraysInstanced = function (_0x90d248, _0x368cfd, _0x359ca3, _0x3e8645) {
        _0x4f4a0d.drawArraysInstancedANGLE(_0x90d248, _0x368cfd, _0x359ca3, _0x3e8645);
      };
      _0x426692.drawElementsInstanced = function (_0x4d47a7, _0x478349, _0x4b4416, _0x516e4c, _0x2b82f1) {
        _0x4f4a0d.drawElementsInstancedANGLE(_0x4d47a7, _0x478349, _0x4b4416, _0x516e4c, _0x2b82f1);
      };
      return 1;
    }
  }
  function _0x5e14eb(_0x42b3e8) {
    var _0x2ed204 = _0x42b3e8.getExtension("OES_vertex_array_object");
    if (_0x2ed204) {
      _0x42b3e8.createVertexArray = function () {
        return _0x2ed204.createVertexArrayOES();
      };
      _0x42b3e8.deleteVertexArray = function (_0x423131) {
        _0x2ed204.deleteVertexArrayOES(_0x423131);
      };
      _0x42b3e8.bindVertexArray = function (_0x586b36) {
        _0x2ed204.bindVertexArrayOES(_0x586b36);
      };
      _0x42b3e8.isVertexArray = function (_0xb8a584) {
        return _0x2ed204.isVertexArrayOES(_0xb8a584);
      };
      return 1;
    }
  }
  function _0x2348eb(_0x1fff99) {
    var _0x466f0f = _0x1fff99.getExtension("WEBGL_draw_buffers");
    if (_0x466f0f) {
      _0x1fff99.drawBuffers = function (_0x56f9e1, _0x22c2ce) {
        _0x466f0f.drawBuffersWEBGL(_0x56f9e1, _0x22c2ce);
      };
      return 1;
    }
  }
  function _0x5295c1(_0x402285) {
    return !!(_0x402285.dibvbi = _0x402285.getExtension("WEBGL_draw_instanced_base_vertex_base_instance"));
  }
  function _0x1a366a(_0x18a4bb) {
    return !!(_0x18a4bb.mdibvbi = _0x18a4bb.getExtension("WEBGL_multi_draw_instanced_base_vertex_base_instance"));
  }
  function _0x590f4a(_0x102cae) {
    return !!(_0x102cae.multiDrawWebgl = _0x102cae.getExtension("WEBGL_multi_draw"));
  }
  var _0x21b49c = {
    counter: 1,
    buffers: [],
    mappedBuffers: {},
    programs: [],
    framebuffers: [],
    renderbuffers: [],
    textures: [],
    shaders: [],
    vaos: [],
    contexts: [],
    offscreenCanvases: {},
    queries: [],
    samplers: [],
    transformFeedbacks: [],
    syncs: [],
    byteSizeByTypeRoot: 5120,
    byteSizeByType: [1, 1, 2, 2, 4, 4, 4, 2, 3, 4, 8],
    stringCache: {},
    stringiCache: {},
    unpackAlignment: 4,
    recordError: function _0x4c250d(_0x110a30) {
      if (!_0x21b49c.lastError) {
        _0x21b49c.lastError = _0x110a30;
      }
    },
    getNewId: function (_0x4a278e) {
      var _0x495fb4 = _0x21b49c.counter++;
      for (var _0x588523 = _0x4a278e.length; _0x588523 < _0x495fb4; _0x588523++) {
        _0x4a278e[_0x588523] = null;
      }
      return _0x495fb4;
    },
    MAX_TEMP_BUFFER_SIZE: 2097152,
    numTempVertexBuffersPerSize: 64,
    log2ceilLookup: function (_0x571a0b) {
      return 32 - Math.clz32(_0x571a0b === 0 ? 0 : _0x571a0b - 1);
    },
    generateTempBuffers: function (_0x15ef6e, _0x32f8ed) {
      var _0xa00744 = _0x21b49c.log2ceilLookup(_0x21b49c.MAX_TEMP_BUFFER_SIZE);
      _0x32f8ed.tempVertexBufferCounters1 = [];
      _0x32f8ed.tempVertexBufferCounters2 = [];
      _0x32f8ed.tempVertexBufferCounters1.length = _0x32f8ed.tempVertexBufferCounters2.length = _0xa00744 + 1;
      _0x32f8ed.tempVertexBuffers1 = [];
      _0x32f8ed.tempVertexBuffers2 = [];
      _0x32f8ed.tempVertexBuffers1.length = _0x32f8ed.tempVertexBuffers2.length = _0xa00744 + 1;
      _0x32f8ed.tempIndexBuffers = [];
      _0x32f8ed.tempIndexBuffers.length = _0xa00744 + 1;
      for (var _0x5a743d = 0; _0x5a743d <= _0xa00744; ++_0x5a743d) {
        _0x32f8ed.tempIndexBuffers[_0x5a743d] = null;
        _0x32f8ed.tempVertexBufferCounters1[_0x5a743d] = _0x32f8ed.tempVertexBufferCounters2[_0x5a743d] = 0;
        var _0x420aa8 = _0x21b49c.numTempVertexBuffersPerSize;
        _0x32f8ed.tempVertexBuffers1[_0x5a743d] = [];
        _0x32f8ed.tempVertexBuffers2[_0x5a743d] = [];
        var _0x2966e9 = _0x32f8ed.tempVertexBuffers1[_0x5a743d];
        var _0x558c8d = _0x32f8ed.tempVertexBuffers2[_0x5a743d];
        _0x2966e9.length = _0x558c8d.length = _0x420aa8;
        for (var _0xa0d485 = 0; _0xa0d485 < _0x420aa8; ++_0xa0d485) {
          _0x2966e9[_0xa0d485] = _0x558c8d[_0xa0d485] = null;
        }
      }
      if (_0x15ef6e) {
        _0x32f8ed.tempQuadIndexBuffer = _0xa64359.createBuffer();
        _0x32f8ed.GLctx.bindBuffer(34963, _0x32f8ed.tempQuadIndexBuffer);
        var _0x1a69bb = _0x21b49c.MAX_TEMP_BUFFER_SIZE >> 1;
        var _0x23c9d2 = new Uint16Array(_0x1a69bb);
        var _0x5a743d = 0;
        var _0x10f444 = 0;
        while (1) {
          _0x23c9d2[_0x5a743d++] = _0x10f444;
          if (_0x5a743d >= _0x1a69bb) {
            break;
          }
          _0x23c9d2[_0x5a743d++] = _0x10f444 + 1;
          if (_0x5a743d >= _0x1a69bb) {
            break;
          }
          _0x23c9d2[_0x5a743d++] = _0x10f444 + 2;
          if (_0x5a743d >= _0x1a69bb) {
            break;
          }
          _0x23c9d2[_0x5a743d++] = _0x10f444;
          if (_0x5a743d >= _0x1a69bb) {
            break;
          }
          _0x23c9d2[_0x5a743d++] = _0x10f444 + 2;
          if (_0x5a743d >= _0x1a69bb) {
            break;
          }
          _0x23c9d2[_0x5a743d++] = _0x10f444 + 3;
          if (_0x5a743d >= _0x1a69bb) {
            break;
          }
          _0x10f444 += 4;
        }
        _0x32f8ed.GLctx.bufferData(34963, _0x23c9d2, 35044);
        _0x32f8ed.GLctx.bindBuffer(34963, null);
      }
    },
    getTempVertexBuffer: function _0x132aa2(_0x26d247) {
      var _0x516d03 = _0x21b49c.log2ceilLookup(_0x26d247);
      var _0x2bf553 = _0x21b49c.currentContext.tempVertexBuffers1[_0x516d03];
      var _0x241b02 = _0x21b49c.currentContext.tempVertexBufferCounters1[_0x516d03];
      _0x21b49c.currentContext.tempVertexBufferCounters1[_0x516d03] = _0x21b49c.currentContext.tempVertexBufferCounters1[_0x516d03] + 1 & _0x21b49c.numTempVertexBuffersPerSize - 1;
      var _0x240314 = _0x2bf553[_0x241b02];
      if (_0x240314) {
        return _0x240314;
      }
      var _0x299fa6 = _0xa64359.getParameter(34964);
      _0x2bf553[_0x241b02] = _0xa64359.createBuffer();
      _0xa64359.bindBuffer(34962, _0x2bf553[_0x241b02]);
      _0xa64359.bufferData(34962, 1 << _0x516d03, 35048);
      _0xa64359.bindBuffer(34962, _0x299fa6);
      return _0x2bf553[_0x241b02];
    },
    getTempIndexBuffer: function _0x18e088(_0x3c9a1a) {
      var _0x493307 = _0x21b49c.log2ceilLookup(_0x3c9a1a);
      var _0x27335c = _0x21b49c.currentContext.tempIndexBuffers[_0x493307];
      if (_0x27335c) {
        return _0x27335c;
      }
      var _0x326168 = _0xa64359.getParameter(34965);
      _0x21b49c.currentContext.tempIndexBuffers[_0x493307] = _0xa64359.createBuffer();
      _0xa64359.bindBuffer(34963, _0x21b49c.currentContext.tempIndexBuffers[_0x493307]);
      _0xa64359.bufferData(34963, 1 << _0x493307, 35048);
      _0xa64359.bindBuffer(34963, _0x326168);
      return _0x21b49c.currentContext.tempIndexBuffers[_0x493307];
    },
    newRenderingFrameStarted: function _0x533491() {
      if (!_0x21b49c.currentContext) {
        return;
      }
      var _0x508ba2 = _0x21b49c.currentContext.tempVertexBuffers1;
      _0x21b49c.currentContext.tempVertexBuffers1 = _0x21b49c.currentContext.tempVertexBuffers2;
      _0x21b49c.currentContext.tempVertexBuffers2 = _0x508ba2;
      _0x508ba2 = _0x21b49c.currentContext.tempVertexBufferCounters1;
      _0x21b49c.currentContext.tempVertexBufferCounters1 = _0x21b49c.currentContext.tempVertexBufferCounters2;
      _0x21b49c.currentContext.tempVertexBufferCounters2 = _0x508ba2;
      var _0x538237 = _0x21b49c.log2ceilLookup(_0x21b49c.MAX_TEMP_BUFFER_SIZE);
      for (var _0x40bfe8 = 0; _0x40bfe8 <= _0x538237; ++_0x40bfe8) {
        _0x21b49c.currentContext.tempVertexBufferCounters1[_0x40bfe8] = 0;
      }
    },
    getSource: function (_0x3a68b1, _0xce676b, _0x5878dd, _0x161f2c) {
      var _0x3702a2 = "";
      for (var _0x52f2a2 = 0; _0x52f2a2 < _0xce676b; ++_0x52f2a2) {
        var _0x4d19b5 = _0x161f2c ? _0x2c669e[_0x161f2c + _0x52f2a2 * 4 >> 2] : -1;
        _0x3702a2 += _0x432dbf(_0x2c669e[_0x5878dd + _0x52f2a2 * 4 >> 2], _0x4d19b5 < 0 ? undefined : _0x4d19b5);
      }
      return _0x3702a2;
    },
    calcBufLength: function _0x9ce42c(_0x220418, _0x27d0c2, _0x4c2fee, _0x9b9514) {
      if (_0x4c2fee > 0) {
        return _0x9b9514 * _0x4c2fee;
      }
      var _0x40565e = _0x21b49c.byteSizeByType[_0x27d0c2 - _0x21b49c.byteSizeByTypeRoot];
      return _0x220418 * _0x40565e * _0x9b9514;
    },
    usedTempBuffers: [],
    preDrawHandleClientVertexAttribBindings: function _0x51cab0(_0x2b806d) {
      _0x21b49c.resetBufferBinding = false;
      for (var _0x2ca006 = 0; _0x2ca006 < _0x21b49c.currentContext.maxVertexAttribs; ++_0x2ca006) {
        var _0x178632 = _0x21b49c.currentContext.clientBuffers[_0x2ca006];
        if (!_0x178632.clientside || !_0x178632.enabled) {
          continue;
        }
        _0x21b49c.resetBufferBinding = true;
        var _0x1dfd57 = _0x21b49c.calcBufLength(_0x178632.size, _0x178632.type, _0x178632.stride, _0x2b806d);
        var _0xce5388 = _0x21b49c.getTempVertexBuffer(_0x1dfd57);
        _0xa64359.bindBuffer(34962, _0xce5388);
        _0xa64359.bufferSubData(34962, 0, _0x353336.subarray(_0x178632.ptr, _0x178632.ptr + _0x1dfd57));
        _0x178632.vertexAttribPointerAdaptor.call(_0xa64359, _0x2ca006, _0x178632.size, _0x178632.type, _0x178632.normalized, _0x178632.stride, 0);
      }
    },
    postDrawHandleClientVertexAttribBindings: function _0x12e296() {
      if (_0x21b49c.resetBufferBinding) {
        _0xa64359.bindBuffer(34962, _0x21b49c.buffers[_0xa64359.currentArrayBufferBinding]);
      }
    },
    createContext: function (_0x5efda2, _0x33483e) {
      if (!_0x5efda2.getContextSafariWebGL2Fixed) {
        _0x5efda2.getContextSafariWebGL2Fixed = _0x5efda2.getContext;
        _0x5efda2.getContext = function (_0x3d40d6, _0x1cfa23) {
          var _0x532cd0 = _0x5efda2.getContextSafariWebGL2Fixed(_0x3d40d6, _0x1cfa23);
          if (_0x3d40d6 == "webgl" == _0x532cd0 instanceof WebGLRenderingContext) {
            return _0x532cd0;
          } else {
            return null;
          }
        };
      }
      var _0x516d2e = _0x33483e.majorVersion > 1 ? _0x5efda2.getContext("webgl2", _0x33483e) : _0x5efda2.getContext("webgl", _0x33483e);
      if (!_0x516d2e) {
        return 0;
      }
      var _0x5159ec = _0x21b49c.registerContext(_0x516d2e, _0x33483e);
      return _0x5159ec;
    },
    registerContext: function (_0x16d7aa, _0x14b367) {
      var _0x476e99 = _0x21b49c.getNewId(_0x21b49c.contexts);
      var _0x3e7a17 = {
        handle: _0x476e99,
        attributes: _0x14b367,
        version: _0x14b367.majorVersion,
        GLctx: _0x16d7aa
      };
      if (_0x16d7aa.canvas) {
        _0x16d7aa.canvas.GLctxObject = _0x3e7a17;
      }
      _0x21b49c.contexts[_0x476e99] = _0x3e7a17;
      if (typeof _0x14b367.enableExtensionsByDefault === "undefined" || _0x14b367.enableExtensionsByDefault) {
        _0x21b49c.initExtensions(_0x3e7a17);
      }
      _0x3e7a17.maxVertexAttribs = _0x3e7a17.GLctx.getParameter(34921);
      _0x3e7a17.clientBuffers = [];
      for (var _0x4fb6c7 = 0; _0x4fb6c7 < _0x3e7a17.maxVertexAttribs; _0x4fb6c7++) {
        _0x3e7a17.clientBuffers[_0x4fb6c7] = {
          enabled: false,
          clientside: false,
          size: 0,
          type: 0,
          normalized: 0,
          stride: 0,
          ptr: 0,
          vertexAttribPointerAdaptor: null
        };
      }
      _0x21b49c.generateTempBuffers(false, _0x3e7a17);
      return _0x476e99;
    },
    makeContextCurrent: function (_0x43e29a) {
      _0x21b49c.currentContext = _0x21b49c.contexts[_0x43e29a];
      _0x13e282.ctx = _0xa64359 = _0x21b49c.currentContext && _0x21b49c.currentContext.GLctx;
      return !_0x43e29a || !!_0xa64359;
    },
    getContext: function (_0x6947a1) {
      return _0x21b49c.contexts[_0x6947a1];
    },
    deleteContext: function (_0x438527) {
      if (_0x21b49c.currentContext === _0x21b49c.contexts[_0x438527]) {
        _0x21b49c.currentContext = null;
      }
      if (typeof _0x71eede === "object") {
        _0x71eede.removeAllHandlersOnTarget(_0x21b49c.contexts[_0x438527].GLctx.canvas);
      }
      if (_0x21b49c.contexts[_0x438527] && _0x21b49c.contexts[_0x438527].GLctx.canvas) {
        _0x21b49c.contexts[_0x438527].GLctx.canvas.GLctxObject = undefined;
      }
      _0x21b49c.contexts[_0x438527] = null;
    },
    initExtensions: function (_0x82645b) {
      if (!_0x82645b) {
        _0x82645b = _0x21b49c.currentContext;
      }
      if (_0x82645b.initExtensionsDone) {
        return;
      }
      _0x82645b.initExtensionsDone = true;
      var _0x132096 = _0x82645b.GLctx;
      _0x3092d4(_0x132096);
      _0x5e14eb(_0x132096);
      _0x2348eb(_0x132096);
      _0x5295c1(_0x132096);
      _0x1a366a(_0x132096);
      if (_0x82645b.version >= 2) {
        _0x132096.disjointTimerQueryExt = _0x132096.getExtension("EXT_disjoint_timer_query_webgl2");
      }
      if (_0x82645b.version < 2 || !_0x132096.disjointTimerQueryExt) {
        _0x132096.disjointTimerQueryExt = _0x132096.getExtension("EXT_disjoint_timer_query");
      }
      _0x590f4a(_0x132096);
      var _0x57556a = _0x132096.getSupportedExtensions() || [];
      _0x57556a.forEach(function (_0x49ff2c) {
        if (!_0x49ff2c.includes("lose_context") && !_0x49ff2c.includes("debug")) {
          _0x132096.getExtension(_0x49ff2c);
        }
      });
    }
  };
  var _0x49c3dc = ["default", "low-power", "high-performance"];
  function _0x355106(_0x1eb2b7, _0x230dd8) {
    var _0x36eb8c = _0x230dd8 >> 2;
    var _0x3ea3d3 = _0x2c669e[_0x36eb8c + 6];
    var _0x321dd7 = {
      alpha: !!_0x2c669e[_0x36eb8c + 0],
      depth: !!_0x2c669e[_0x36eb8c + 1],
      stencil: !!_0x2c669e[_0x36eb8c + 2],
      antialias: !!_0x2c669e[_0x36eb8c + 3],
      premultipliedAlpha: !!_0x2c669e[_0x36eb8c + 4],
      preserveDrawingBuffer: !!_0x2c669e[_0x36eb8c + 5],
      powerPreference: _0x49c3dc[_0x3ea3d3],
      failIfMajorPerformanceCaveat: !!_0x2c669e[_0x36eb8c + 7],
      majorVersion: _0x2c669e[_0x36eb8c + 8],
      minorVersion: _0x2c669e[_0x36eb8c + 9],
      enableExtensionsByDefault: _0x2c669e[_0x36eb8c + 10],
      explicitSwapControl: _0x2c669e[_0x36eb8c + 11],
      proxyContextToMainThread: _0x2c669e[_0x36eb8c + 12],
      renderViaOffscreenBackBuffer: _0x2c669e[_0x36eb8c + 13]
    };
    var _0x5398de = _0x47e1c4(_0x1eb2b7);
    if (!_0x5398de) {
      return 0;
    }
    if (_0x321dd7.explicitSwapControl) {
      return 0;
    }
    var _0x289974 = _0x21b49c.createContext(_0x5398de, _0x321dd7);
    return _0x289974;
  }
  function _0x268c4b(_0x27d2f4, _0x547512) {
    return _0x355106(_0x27d2f4, _0x547512);
  }
  function _0x137c65() {
    if (_0x21b49c.currentContext) {
      return _0x21b49c.currentContext.handle;
    } else {
      return 0;
    }
  }
  function _0x2d2350() {
    return _0x137c65();
  }
  _0x13e282._emscripten_webgl_get_current_context = _0x2d2350;
  function _0x3443d2(_0x2ae171) {
    var _0x296032 = _0x21b49c.makeContextCurrent(_0x2ae171);
    if (_0x296032) {
      return 0;
    } else {
      return -5;
    }
  }
  _0x13e282._emscripten_webgl_make_context_current = _0x3443d2;
  function _0x85aca3(_0x3d54e2) {
    if (_0x21b49c.currentContext == _0x3d54e2) {
      _0x21b49c.currentContext = 0;
    }
    _0x21b49c.deleteContext(_0x3d54e2);
  }
  function _0x908f3(_0x40e4db, _0x4cdc65) {
    var _0xf3fa33 = _0x21b49c.getContext(_0x40e4db);
    var _0x5a977f = _0x432dbf(_0x4cdc65);
    if (_0x5a977f.startsWith("GL_")) {
      _0x5a977f = _0x5a977f.substr(3);
    }
    if (_0x5a977f == "ANGLE_instanced_arrays") {
      _0x3092d4(_0xa64359);
    }
    if (_0x5a977f == "OES_vertex_array_object") {
      _0x5e14eb(_0xa64359);
    }
    if (_0x5a977f == "WEBGL_draw_buffers") {
      _0x2348eb(_0xa64359);
    }
    if (_0x5a977f == "WEBGL_draw_instanced_base_vertex_base_instance") {
      _0x5295c1(_0xa64359);
    }
    if (_0x5a977f == "WEBGL_multi_draw_instanced_base_vertex_base_instance") {
      _0x1a366a(_0xa64359);
    }
    if (_0x5a977f == "WEBGL_multi_draw") {
      _0x590f4a(_0xa64359);
    }
    var _0x109957 = _0xf3fa33.GLctx.getExtension(_0x5a977f);
    return !!_0x109957;
  }
  function _0x15f826(_0x148df6) {
    var _0x4e2923 = _0x148df6 >> 2;
    for (var _0x3df943 = 0; _0x3df943 < 14; ++_0x3df943) {
      _0x2c669e[_0x4e2923 + _0x3df943] = 0;
    }
    _0x2c669e[_0x4e2923 + 0] = _0x2c669e[_0x4e2923 + 1] = _0x2c669e[_0x4e2923 + 3] = _0x2c669e[_0x4e2923 + 4] = _0x2c669e[_0x4e2923 + 8] = _0x2c669e[_0x4e2923 + 10] = 1;
  }
  var _0x533128 = {};
  function _0x3ee4e2() {
    return _0x3c5e28 || "./this.program";
  }
  function _0xb3a54a() {
    if (!_0xb3a54a.strings) {
      var _0xa5983a = (typeof navigator === "object" && navigator.languages && navigator.languages[0] || "C").replace("-", "_") + ".UTF-8";
      var _0x561e43 = {
        USER: "web_user",
        LOGNAME: "web_user",
        PATH: "/",
        PWD: "/",
        HOME: "/home/web_user",
        LANG: _0xa5983a,
        _: _0x3ee4e2()
      };
      for (var _0x4d371a in _0x533128) {
        _0x561e43[_0x4d371a] = _0x533128[_0x4d371a];
      }
      var _0x768c37 = [];
      for (var _0x4d371a in _0x561e43) {
        _0x768c37.push(_0x4d371a + "=" + _0x561e43[_0x4d371a]);
      }
      _0xb3a54a.strings = _0x768c37;
    }
    return _0xb3a54a.strings;
  }
  function _0x2e7541(_0x44987b, _0x329a53) {
    try {
      var _0x59631d = 0;
      _0xb3a54a().forEach(function (_0x5c9e77, _0x17d534) {
        var _0xf124d6 = _0x329a53 + _0x59631d;
        _0x2c669e[_0x44987b + _0x17d534 * 4 >> 2] = _0xf124d6;
        _0x9830ac(_0x5c9e77, _0xf124d6);
        _0x59631d += _0x5c9e77.length + 1;
      });
      return 0;
    } catch (_0x514cec) {
      if (typeof _0x1f58b9 === "undefined" || !(_0x514cec instanceof _0x1f58b9.ErrnoError)) {
        _0x2f2f3c(_0x514cec);
      }
      return _0x514cec.errno;
    }
  }
  function _0x212b00(_0x531df9, _0x177385) {
    try {
      var _0x362c86 = _0xb3a54a();
      _0x2c669e[_0x531df9 >> 2] = _0x362c86.length;
      var _0x3fe2b0 = 0;
      _0x362c86.forEach(function (_0x4874de) {
        _0x3fe2b0 += _0x4874de.length + 1;
      });
      _0x2c669e[_0x177385 >> 2] = _0x3fe2b0;
      return 0;
    } catch (_0x43fc8c) {
      if (typeof _0x1f58b9 === "undefined" || !(_0x43fc8c instanceof _0x1f58b9.ErrnoError)) {
        _0x2f2f3c(_0x43fc8c);
      }
      return _0x43fc8c.errno;
    }
  }
  function _0x142a0e(_0x14d66e) {
    try {
      var _0x4186af = _0x3c917f.getStreamFromFD(_0x14d66e);
      _0x1f58b9.close(_0x4186af);
      return 0;
    } catch (_0x35beb1) {
      if (typeof _0x1f58b9 === "undefined" || !(_0x35beb1 instanceof _0x1f58b9.ErrnoError)) {
        _0x2f2f3c(_0x35beb1);
      }
      return _0x35beb1.errno;
    }
  }
  function _0x1be44f(_0x28fa9e, _0x267fa6) {
    try {
      var _0x2d22f0 = _0x3c917f.getStreamFromFD(_0x28fa9e);
      var _0x5eefc6 = _0x2d22f0.tty ? 2 : _0x1f58b9.isDir(_0x2d22f0.mode) ? 3 : _0x1f58b9.isLink(_0x2d22f0.mode) ? 7 : 4;
      _0xf9c0a9[_0x267fa6 >> 0] = _0x5eefc6;
      return 0;
    } catch (_0x2badb6) {
      if (typeof _0x1f58b9 === "undefined" || !(_0x2badb6 instanceof _0x1f58b9.ErrnoError)) {
        _0x2f2f3c(_0x2badb6);
      }
      return _0x2badb6.errno;
    }
  }
  function _0x15e9c5(_0x41325c, _0x29519d, _0x2f8a98, _0x46234b) {
    try {
      var _0x5b1caf = _0x3c917f.getStreamFromFD(_0x41325c);
      var _0x2b512e = _0x3c917f.doReadv(_0x5b1caf, _0x29519d, _0x2f8a98);
      _0x2c669e[_0x46234b >> 2] = _0x2b512e;
      return 0;
    } catch (_0x27a6f4) {
      if (typeof _0x1f58b9 === "undefined" || !(_0x27a6f4 instanceof _0x1f58b9.ErrnoError)) {
        _0x2f2f3c(_0x27a6f4);
      }
      return _0x27a6f4.errno;
    }
  }
  function _0x39235f(_0x227a77, _0x4bd392, _0x205e7a, _0x39b2ef, _0x5c2c04) {
    try {
      var _0x1aae0b = _0x3c917f.getStreamFromFD(_0x227a77);
      var _0x5de02d = 4294967296;
      var _0x10cdd6 = _0x205e7a * _0x5de02d + (_0x4bd392 >>> 0);
      var _0x3ffeaa = 9007199254740992;
      if (_0x10cdd6 <= -_0x3ffeaa || _0x10cdd6 >= _0x3ffeaa) {
        return -61;
      }
      _0x1f58b9.llseek(_0x1aae0b, _0x10cdd6, _0x39b2ef);
      _0x3ca3da = [_0x1aae0b.position >>> 0, (_0x725831 = _0x1aae0b.position, +Math.abs(_0x725831) >= 1 ? _0x725831 > 0 ? (Math.min(+Math.floor(_0x725831 / 4294967296), 4294967295) | 0) >>> 0 : ~~+Math.ceil((_0x725831 - +(~~_0x725831 >>> 0)) / 4294967296) >>> 0 : 0)];
      _0x2c669e[_0x5c2c04 >> 2] = _0x3ca3da[0];
      _0x2c669e[_0x5c2c04 + 4 >> 2] = _0x3ca3da[1];
      if (_0x1aae0b.getdents && _0x10cdd6 === 0 && _0x39b2ef === 0) {
        _0x1aae0b.getdents = null;
      }
      return 0;
    } catch (_0x103031) {
      if (typeof _0x1f58b9 === "undefined" || !(_0x103031 instanceof _0x1f58b9.ErrnoError)) {
        _0x2f2f3c(_0x103031);
      }
      return _0x103031.errno;
    }
  }
  function _0x36741c(_0x286aa9, _0x3958d6, _0x16e2a0, _0x389fd6) {
    try {
      var _0xbafd86 = _0x3c917f.getStreamFromFD(_0x286aa9);
      var _0x55f1fd = _0x3c917f.doWritev(_0xbafd86, _0x3958d6, _0x16e2a0);
      _0x2c669e[_0x389fd6 >> 2] = _0x55f1fd;
      return 0;
    } catch (_0x19bb3c) {
      if (typeof _0x1f58b9 === "undefined" || !(_0x19bb3c instanceof _0x1f58b9.ErrnoError)) {
        _0x2f2f3c(_0x19bb3c);
      }
      return _0x19bb3c.errno;
    }
  }
  function _0x178a9f(_0x18b148, _0xa90789) {
    return 0;
  }
  function _0x2ad449() {
    return _0x25f646();
  }
  function _0x25d83b(_0x189efa, _0x1f45c6, _0x568b52, _0x452635) {
    var _0x2df065 = 0;
    var _0x2d37e0 = 0;
    var _0x271f57 = 0;
    var _0x494c7d = 0;
    var _0x51e710 = 0;
    var _0x29fd4e = 0;
    var _0x209d9b;
    function _0x1656a1(_0x562d6d, _0x10b7a2, _0x574071, _0x23f1ec, _0x4156d8, _0x32e321) {
      var _0x4ac2fe;
      var _0x5380cf;
      var _0x55a3eb;
      var _0x134406;
      _0x5380cf = _0x562d6d === 10 ? 28 : 16;
      _0x4156d8 = _0x562d6d === 10 ? _0x594c54(_0x4156d8) : _0x11ff47(_0x4156d8);
      _0x4ac2fe = _0x45bc34(_0x5380cf);
      _0x134406 = _0x5db01a(_0x4ac2fe, _0x562d6d, _0x4156d8, _0x32e321);
      _0x22d62f(!_0x134406);
      _0x55a3eb = _0x45bc34(32);
      _0x2c669e[_0x55a3eb + 4 >> 2] = _0x562d6d;
      _0x2c669e[_0x55a3eb + 8 >> 2] = _0x10b7a2;
      _0x2c669e[_0x55a3eb + 12 >> 2] = _0x574071;
      _0x2c669e[_0x55a3eb + 24 >> 2] = _0x23f1ec;
      _0x2c669e[_0x55a3eb + 20 >> 2] = _0x4ac2fe;
      if (_0x562d6d === 10) {
        _0x2c669e[_0x55a3eb + 16 >> 2] = 28;
      } else {
        _0x2c669e[_0x55a3eb + 16 >> 2] = 16;
      }
      _0x2c669e[_0x55a3eb + 28 >> 2] = 0;
      return _0x55a3eb;
    }
    if (_0x568b52) {
      _0x271f57 = _0x2c669e[_0x568b52 >> 2];
      _0x494c7d = _0x2c669e[_0x568b52 + 4 >> 2];
      _0x51e710 = _0x2c669e[_0x568b52 + 8 >> 2];
      _0x29fd4e = _0x2c669e[_0x568b52 + 12 >> 2];
    }
    if (_0x51e710 && !_0x29fd4e) {
      _0x29fd4e = _0x51e710 === 2 ? 17 : 6;
    }
    if (!_0x51e710 && _0x29fd4e) {
      _0x51e710 = _0x29fd4e === 17 ? 2 : 1;
    }
    if (_0x29fd4e === 0) {
      _0x29fd4e = 6;
    }
    if (_0x51e710 === 0) {
      _0x51e710 = 1;
    }
    if (!_0x189efa && !_0x1f45c6) {
      return -2;
    }
    if (_0x271f57 & ~1087) {
      return -1;
    }
    if (_0x568b52 !== 0 && _0x2c669e[_0x568b52 >> 2] & 2 && !_0x189efa) {
      return -1;
    }
    if (_0x271f57 & 32) {
      return -2;
    }
    if (_0x51e710 !== 0 && _0x51e710 !== 1 && _0x51e710 !== 2) {
      return -7;
    }
    if (_0x494c7d !== 0 && _0x494c7d !== 2 && _0x494c7d !== 10) {
      return -6;
    }
    if (_0x1f45c6) {
      _0x1f45c6 = _0x432dbf(_0x1f45c6);
      _0x2d37e0 = parseInt(_0x1f45c6, 10);
      if (isNaN(_0x2d37e0)) {
        if (_0x271f57 & 1024) {
          return -2;
        }
        return -8;
      }
    }
    if (!_0x189efa) {
      if (_0x494c7d === 0) {
        _0x494c7d = 2;
      }
      if ((_0x271f57 & 1) === 0) {
        if (_0x494c7d === 2) {
          _0x2df065 = _0x260c97(2130706433);
        } else {
          _0x2df065 = [0, 0, 0, 1];
        }
      }
      _0x209d9b = _0x1656a1(_0x494c7d, _0x51e710, _0x29fd4e, null, _0x2df065, _0x2d37e0);
      _0x2c669e[_0x452635 >> 2] = _0x209d9b;
      return 0;
    }
    _0x189efa = _0x432dbf(_0x189efa);
    _0x2df065 = _0x1bae1d(_0x189efa);
    if (_0x2df065 !== null) {
      if (_0x494c7d === 0 || _0x494c7d === 2) {
        _0x494c7d = 2;
      } else if (_0x494c7d === 10 && _0x271f57 & 8) {
        _0x2df065 = [0, 0, _0x260c97(65535), _0x2df065];
        _0x494c7d = 10;
      } else {
        return -2;
      }
    } else {
      _0x2df065 = _0x488e94(_0x189efa);
      if (_0x2df065 !== null) {
        if (_0x494c7d === 0 || _0x494c7d === 10) {
          _0x494c7d = 10;
        } else {
          return -2;
        }
      }
    }
    if (_0x2df065 != null) {
      _0x209d9b = _0x1656a1(_0x494c7d, _0x51e710, _0x29fd4e, _0x189efa, _0x2df065, _0x2d37e0);
      _0x2c669e[_0x452635 >> 2] = _0x209d9b;
      return 0;
    }
    if (_0x271f57 & 4) {
      return -2;
    }
    _0x189efa = _0x47b78e.lookup_name(_0x189efa);
    _0x2df065 = _0x1bae1d(_0x189efa);
    if (_0x494c7d === 0) {
      _0x494c7d = 2;
    } else if (_0x494c7d === 10) {
      _0x2df065 = [0, 0, _0x260c97(65535), _0x2df065];
    }
    _0x209d9b = _0x1656a1(_0x494c7d, _0x51e710, _0x29fd4e, null, _0x2df065, _0x2d37e0);
    _0x2c669e[_0x452635 >> 2] = _0x209d9b;
    return 0;
  }
  function _0x29e485(_0x46d1fb) {
    var _0x5da4b6 = _0x45bc34(20);
    var _0x520d05 = _0x45bc34(_0x46d1fb.length + 1);
    _0x98a294(_0x46d1fb, _0x520d05, _0x46d1fb.length + 1);
    _0x2c669e[_0x5da4b6 >> 2] = _0x520d05;
    var _0x2d3703 = _0x45bc34(4);
    _0x2c669e[_0x2d3703 >> 2] = 0;
    _0x2c669e[_0x5da4b6 + 4 >> 2] = _0x2d3703;
    var _0x322174 = 2;
    _0x2c669e[_0x5da4b6 + 8 >> 2] = _0x322174;
    _0x2c669e[_0x5da4b6 + 12 >> 2] = 4;
    var _0x725ba4 = _0x45bc34(12);
    _0x2c669e[_0x725ba4 >> 2] = _0x725ba4 + 8;
    _0x2c669e[_0x725ba4 + 4 >> 2] = 0;
    _0x2c669e[_0x725ba4 + 8 >> 2] = _0x1bae1d(_0x47b78e.lookup_name(_0x46d1fb));
    _0x2c669e[_0x5da4b6 + 16 >> 2] = _0x725ba4;
    return _0x5da4b6;
  }
  function _0x312f66(_0x506053, _0x4054fb, _0x5ce4e5) {
    if (_0x5ce4e5 !== 2) {
      _0x1a4aeb(5);
      return null;
    }
    _0x506053 = _0x2c669e[_0x506053 >> 2];
    var _0x39ad3b = _0x11ff47(_0x506053);
    var _0x524479 = _0x47b78e.lookup_addr(_0x39ad3b);
    if (_0x524479) {
      _0x39ad3b = _0x524479;
    }
    return _0x29e485(_0x39ad3b);
  }
  function _0x4d9374(_0x2927c9) {
    return _0x29e485(_0x432dbf(_0x2927c9));
  }
  function _0x54a6ea(_0xa07a37, _0x1c12c7, _0x2030be, _0x3d3211, _0x3890a2, _0x453ce5, _0xaed98a) {
    var _0x1d82d5 = _0x4b767b(_0xa07a37, _0x1c12c7);
    if (_0x1d82d5.errno) {
      return -6;
    }
    var _0x2ffe48 = _0x1d82d5.port;
    var _0x3c8151 = _0x1d82d5.addr;
    var _0x4c728e = false;
    if (_0x2030be && _0x3d3211) {
      var _0x19d8a5;
      if (_0xaed98a & 1 || !(_0x19d8a5 = _0x47b78e.lookup_addr(_0x3c8151))) {
        if (_0xaed98a & 8) {
          return -2;
        }
      } else {
        _0x3c8151 = _0x19d8a5;
      }
      var _0x317926 = _0x98a294(_0x3c8151, _0x2030be, _0x3d3211);
      if (_0x317926 + 1 >= _0x3d3211) {
        _0x4c728e = true;
      }
    }
    if (_0x3890a2 && _0x453ce5) {
      _0x2ffe48 = "" + _0x2ffe48;
      var _0x317926 = _0x98a294(_0x2ffe48, _0x3890a2, _0x453ce5);
      if (_0x317926 + 1 >= _0x453ce5) {
        _0x4c728e = true;
      }
    }
    if (_0x4c728e) {
      return -12;
    }
    return 0;
  }
  function _0x1a8954() {
    throw "getpwuid: TODO";
  }
  function _0x37e1c7(_0x48131f) {
    var _0x2b5eac = Date.now();
    _0x2c669e[_0x48131f >> 2] = _0x2b5eac / 1000 | 0;
    _0x2c669e[_0x48131f + 4 >> 2] = _0x2b5eac % 1000 * 1000 | 0;
    return 0;
  }
  function _0x5ab122(_0x4a12f4) {
    _0xa64359.activeTexture(_0x4a12f4);
  }
  function _0x579862(_0xda27b5, _0x343f03) {
    _0xda27b5 = _0x21b49c.programs[_0xda27b5];
    _0x343f03 = _0x21b49c.shaders[_0x343f03];
    _0xda27b5[_0x343f03.shaderType] = _0x343f03;
    _0xa64359.attachShader(_0xda27b5, _0x343f03);
  }
  function _0x14ff45(_0x51d196, _0x4ce03a) {
    _0xa64359.beginQuery(_0x51d196, _0x21b49c.queries[_0x4ce03a]);
  }
  function _0x54527c(_0x499202) {
    _0xa64359.beginTransformFeedback(_0x499202);
  }
  function _0x442ef7(_0x5015d1, _0x5a074d, _0x3075b5) {
    _0xa64359.bindAttribLocation(_0x21b49c.programs[_0x5015d1], _0x5a074d, _0x432dbf(_0x3075b5));
  }
  function _0xe6cc4b(_0x512656, _0x34f50f) {
    if (_0x512656 == 34962) {
      _0xa64359.currentArrayBufferBinding = _0x34f50f;
    } else if (_0x512656 == 34963) {
      _0xa64359.currentElementArrayBufferBinding = _0x34f50f;
    }
    if (_0x512656 == 35051) {
      _0xa64359.currentPixelPackBufferBinding = _0x34f50f;
    } else if (_0x512656 == 35052) {
      _0xa64359.currentPixelUnpackBufferBinding = _0x34f50f;
    }
    _0xa64359.bindBuffer(_0x512656, _0x21b49c.buffers[_0x34f50f]);
  }
  function _0x5499ca(_0x25e8ee, _0x5bcbf9, _0x1ae34e) {
    _0xa64359.bindBufferBase(_0x25e8ee, _0x5bcbf9, _0x21b49c.buffers[_0x1ae34e]);
  }
  function _0x482561(_0x429748, _0x5e49ef, _0x1696a0, _0xc119f6, _0x2cf8f9) {
    _0xa64359.bindBufferRange(_0x429748, _0x5e49ef, _0x21b49c.buffers[_0x1696a0], _0xc119f6, _0x2cf8f9);
  }
  function _0x475d75(_0x2d68c9, _0x3ea802) {
    _0xa64359.bindFramebuffer(_0x2d68c9, _0x21b49c.framebuffers[_0x3ea802]);
  }
  function _0x136725(_0x41f522, _0x21f57d) {
    _0xa64359.bindRenderbuffer(_0x41f522, _0x21b49c.renderbuffers[_0x21f57d]);
  }
  function _0x4133ae(_0x3407a0, _0x2d27b1) {
    _0xa64359.bindSampler(_0x3407a0, _0x21b49c.samplers[_0x2d27b1]);
  }
  function _0x2d4c8d(_0x23a9b5, _0x3abdb5) {
    _0xa64359.bindTexture(_0x23a9b5, _0x21b49c.textures[_0x3abdb5]);
  }
  function _0x230a99(_0x2fbe92, _0x51cfbd) {
    _0xa64359.bindTransformFeedback(_0x2fbe92, _0x21b49c.transformFeedbacks[_0x51cfbd]);
  }
  function _0xeab52d(_0x2db1ca) {
    _0xa64359.bindVertexArray(_0x21b49c.vaos[_0x2db1ca]);
    var _0x5c3a83 = _0xa64359.getParameter(34965);
    _0xa64359.currentElementArrayBufferBinding = _0x5c3a83 ? _0x5c3a83.name | 0 : 0;
  }
  function _0x53ef8e(_0x13db74) {
    _0xa64359.blendEquation(_0x13db74);
  }
  function _0xcde7c2(_0x21d6a3, _0x513d09) {
    _0xa64359.blendEquationSeparate(_0x21d6a3, _0x513d09);
  }
  function _0x357b10(_0x4545aa, _0xc7923, _0x3ff1c4, _0x122a59) {
    _0xa64359.blendFuncSeparate(_0x4545aa, _0xc7923, _0x3ff1c4, _0x122a59);
  }
  function _0x414432(_0x218004, _0x27cb4b, _0x1b0044, _0x1ff96a, _0x3622df, _0x2499ef, _0x416058, _0x36b204, _0x36ca4c, _0x1a4762) {
    _0xa64359.blitFramebuffer(_0x218004, _0x27cb4b, _0x1b0044, _0x1ff96a, _0x3622df, _0x2499ef, _0x416058, _0x36b204, _0x36ca4c, _0x1a4762);
  }
  function _0x194f47(_0x57239f, _0x3238a2, _0x253a6b, _0x13446d) {
    if (_0x21b49c.currentContext.version >= 2) {
      if (_0x253a6b) {
        _0xa64359.bufferData(_0x57239f, _0x353336, _0x13446d, _0x253a6b, _0x3238a2);
      } else {
        _0xa64359.bufferData(_0x57239f, _0x3238a2, _0x13446d);
      }
    } else {
      _0xa64359.bufferData(_0x57239f, _0x253a6b ? _0x353336.subarray(_0x253a6b, _0x253a6b + _0x3238a2) : _0x3238a2, _0x13446d);
    }
  }
  function _0x3f4c7f(_0x44c4e8, _0x3d61b6, _0x304ddb, _0x3755f7) {
    if (_0x21b49c.currentContext.version >= 2) {
      _0xa64359.bufferSubData(_0x44c4e8, _0x3d61b6, _0x353336, _0x3755f7, _0x304ddb);
      return;
    }
    _0xa64359.bufferSubData(_0x44c4e8, _0x3d61b6, _0x353336.subarray(_0x3755f7, _0x3755f7 + _0x304ddb));
  }
  function _0x22d894(_0x598756) {
    return _0xa64359.checkFramebufferStatus(_0x598756);
  }
  function _0x16f592(_0x29a03a) {
    _0xa64359.clear(_0x29a03a);
  }
  function _0xe8c158(_0x4622e2, _0x2bc2b9, _0x19b51d, _0x12396a) {
    _0xa64359.clearBufferfi(_0x4622e2, _0x2bc2b9, _0x19b51d, _0x12396a);
  }
  function _0xbc3ee5(_0x331258, _0x5044da, _0x10246e) {
    _0xa64359.clearBufferfv(_0x331258, _0x5044da, _0x36547e, _0x10246e >> 2);
  }
  function _0x42d9c1(_0x23086e, _0x8fde3e, _0x33494a) {
    _0xa64359.clearBufferuiv(_0x23086e, _0x8fde3e, _0x2a2a43, _0x33494a >> 2);
  }
  function _0x23c4cd(_0x14e84d, _0x8343e7, _0x2f09b0, _0x2be773) {
    _0xa64359.clearColor(_0x14e84d, _0x8343e7, _0x2f09b0, _0x2be773);
  }
  function _0x4b4a12(_0x48cd47) {
    _0xa64359.clearDepth(_0x48cd47);
  }
  function _0x4bb6b6(_0x32bd7c) {
    _0xa64359.clearStencil(_0x32bd7c);
  }
  function _0x2e6c26(_0x39e1fb, _0xd3d915, _0x16d7c2, _0x4d2473) {
    return _0xa64359.clientWaitSync(_0x21b49c.syncs[_0x39e1fb], _0xd3d915, _0x17779e(_0x16d7c2, _0x4d2473));
  }
  function _0x5e6164(_0x4be714, _0x1702df, _0x3b4732, _0x2e99b1) {
    _0xa64359.colorMask(!!_0x4be714, !!_0x1702df, !!_0x3b4732, !!_0x2e99b1);
  }
  function _0x2560df(_0x13e160) {
    _0xa64359.compileShader(_0x21b49c.shaders[_0x13e160]);
  }
  function _0x45f2ac(_0x1bd418, _0x1f8dfc, _0x2709ee, _0x106678, _0x22c901, _0x9ee620, _0x18cbfe, _0x41b153) {
    if (_0x21b49c.currentContext.version >= 2) {
      if (_0xa64359.currentPixelUnpackBufferBinding) {
        _0xa64359.compressedTexImage2D(_0x1bd418, _0x1f8dfc, _0x2709ee, _0x106678, _0x22c901, _0x9ee620, _0x18cbfe, _0x41b153);
      } else {
        _0xa64359.compressedTexImage2D(_0x1bd418, _0x1f8dfc, _0x2709ee, _0x106678, _0x22c901, _0x9ee620, _0x353336, _0x41b153, _0x18cbfe);
      }
      return;
    }
    _0xa64359.compressedTexImage2D(_0x1bd418, _0x1f8dfc, _0x2709ee, _0x106678, _0x22c901, _0x9ee620, _0x41b153 ? _0x353336.subarray(_0x41b153, _0x41b153 + _0x18cbfe) : null);
  }
  function _0x4b769a(_0x25dfbe, _0x1527d6, _0x3ad563, _0x1e984c, _0xed5de6, _0x520d83, _0x31736b, _0x206373, _0x4c5e00) {
    if (_0xa64359.currentPixelUnpackBufferBinding) {
      _0xa64359.compressedTexImage3D(_0x25dfbe, _0x1527d6, _0x3ad563, _0x1e984c, _0xed5de6, _0x520d83, _0x31736b, _0x206373, _0x4c5e00);
    } else {
      _0xa64359.compressedTexImage3D(_0x25dfbe, _0x1527d6, _0x3ad563, _0x1e984c, _0xed5de6, _0x520d83, _0x31736b, _0x353336, _0x4c5e00, _0x206373);
    }
  }
  function _0x3ba8e4(_0x56176d, _0x3e3888, _0x1eeb00, _0x2e9722, _0x5ab07a, _0x10485c, _0x43bfac, _0x4b21e6, _0x3fe5cb) {
    if (_0x21b49c.currentContext.version >= 2) {
      if (_0xa64359.currentPixelUnpackBufferBinding) {
        _0xa64359.compressedTexSubImage2D(_0x56176d, _0x3e3888, _0x1eeb00, _0x2e9722, _0x5ab07a, _0x10485c, _0x43bfac, _0x4b21e6, _0x3fe5cb);
      } else {
        _0xa64359.compressedTexSubImage2D(_0x56176d, _0x3e3888, _0x1eeb00, _0x2e9722, _0x5ab07a, _0x10485c, _0x43bfac, _0x353336, _0x3fe5cb, _0x4b21e6);
      }
      return;
    }
    _0xa64359.compressedTexSubImage2D(_0x56176d, _0x3e3888, _0x1eeb00, _0x2e9722, _0x5ab07a, _0x10485c, _0x43bfac, _0x3fe5cb ? _0x353336.subarray(_0x3fe5cb, _0x3fe5cb + _0x4b21e6) : null);
  }
  function _0x5f2604(_0x331e3c, _0x105a38, _0x4bc230, _0x4a3b09, _0x2b92ef, _0x224ce5, _0x31d8ee, _0x131281, _0x41ab01, _0x47d0b3, _0x34cbc5) {
    if (_0xa64359.currentPixelUnpackBufferBinding) {
      _0xa64359.compressedTexSubImage3D(_0x331e3c, _0x105a38, _0x4bc230, _0x4a3b09, _0x2b92ef, _0x224ce5, _0x31d8ee, _0x131281, _0x41ab01, _0x47d0b3, _0x34cbc5);
    } else {
      _0xa64359.compressedTexSubImage3D(_0x331e3c, _0x105a38, _0x4bc230, _0x4a3b09, _0x2b92ef, _0x224ce5, _0x31d8ee, _0x131281, _0x41ab01, _0x353336, _0x34cbc5, _0x47d0b3);
    }
  }
  function _0x13f4a1(_0x2ffbdf, _0x4af887, _0x1836a8, _0x347028, _0x43f421) {
    _0xa64359.copyBufferSubData(_0x2ffbdf, _0x4af887, _0x1836a8, _0x347028, _0x43f421);
  }
  function _0x1db932(_0x248b6f, _0x35856c, _0x1f0e39, _0x4652ad, _0x337c5c, _0x43a90b, _0x3609af, _0x1793ea) {
    _0xa64359.copyTexImage2D(_0x248b6f, _0x35856c, _0x1f0e39, _0x4652ad, _0x337c5c, _0x43a90b, _0x3609af, _0x1793ea);
  }
  function _0x167fec(_0x534b80, _0x5af3a5, _0x46f429, _0x5854b1, _0x2c56a6, _0x5b9e81, _0x506a13, _0x2df691) {
    _0xa64359.copyTexSubImage2D(_0x534b80, _0x5af3a5, _0x46f429, _0x5854b1, _0x2c56a6, _0x5b9e81, _0x506a13, _0x2df691);
  }
  function _0x6e878b() {
    var _0x488db9 = _0x21b49c.getNewId(_0x21b49c.programs);
    var _0x26427d = _0xa64359.createProgram();
    _0x26427d.name = _0x488db9;
    _0x26427d.maxUniformLength = _0x26427d.maxAttributeLength = _0x26427d.maxUniformBlockNameLength = 0;
    _0x26427d.uniformIdCounter = 1;
    _0x21b49c.programs[_0x488db9] = _0x26427d;
    return _0x488db9;
  }
  function _0x2ed3fe(_0x2dd494) {
    var _0x2a5da8 = _0x21b49c.getNewId(_0x21b49c.shaders);
    _0x21b49c.shaders[_0x2a5da8] = _0xa64359.createShader(_0x2dd494);
    _0x21b49c.shaders[_0x2a5da8].shaderType = _0x2dd494 & 1 ? "vs" : "fs";
    return _0x2a5da8;
  }
  function _0x2ed3d8(_0x3dd578) {
    _0xa64359.cullFace(_0x3dd578);
  }
  function _0x3161a9(_0x539a37, _0x34304d) {
    for (var _0x11d099 = 0; _0x11d099 < _0x539a37; _0x11d099++) {
      var _0x294816 = _0x2c669e[_0x34304d + _0x11d099 * 4 >> 2];
      var _0x51673b = _0x21b49c.buffers[_0x294816];
      if (!_0x51673b) {
        continue;
      }
      _0xa64359.deleteBuffer(_0x51673b);
      _0x51673b.name = 0;
      _0x21b49c.buffers[_0x294816] = null;
      if (_0x294816 == _0xa64359.currentArrayBufferBinding) {
        _0xa64359.currentArrayBufferBinding = 0;
      }
      if (_0x294816 == _0xa64359.currentElementArrayBufferBinding) {
        _0xa64359.currentElementArrayBufferBinding = 0;
      }
      if (_0x294816 == _0xa64359.currentPixelPackBufferBinding) {
        _0xa64359.currentPixelPackBufferBinding = 0;
      }
      if (_0x294816 == _0xa64359.currentPixelUnpackBufferBinding) {
        _0xa64359.currentPixelUnpackBufferBinding = 0;
      }
    }
  }
  function _0x501789(_0x146788, _0x5ae1c1) {
    for (var _0xb7604f = 0; _0xb7604f < _0x146788; ++_0xb7604f) {
      var _0x522b80 = _0x2c669e[_0x5ae1c1 + _0xb7604f * 4 >> 2];
      var _0x274030 = _0x21b49c.framebuffers[_0x522b80];
      if (!_0x274030) {
        continue;
      }
      _0xa64359.deleteFramebuffer(_0x274030);
      _0x274030.name = 0;
      _0x21b49c.framebuffers[_0x522b80] = null;
    }
  }
  function _0x587511(_0x415cda) {
    if (!_0x415cda) {
      return;
    }
    var _0x2e2a54 = _0x21b49c.programs[_0x415cda];
    if (!_0x2e2a54) {
      _0x21b49c.recordError(1281);
      return;
    }
    _0xa64359.deleteProgram(_0x2e2a54);
    _0x2e2a54.name = 0;
    _0x21b49c.programs[_0x415cda] = null;
  }
  function _0x58ac73(_0x579013, _0x555c4f) {
    for (var _0x671eb0 = 0; _0x671eb0 < _0x579013; _0x671eb0++) {
      var _0x869462 = _0x2c669e[_0x555c4f + _0x671eb0 * 4 >> 2];
      var _0x2a37c6 = _0x21b49c.queries[_0x869462];
      if (!_0x2a37c6) {
        continue;
      }
      _0xa64359.deleteQuery(_0x2a37c6);
      _0x21b49c.queries[_0x869462] = null;
    }
  }
  function _0x44f18c(_0x101214, _0x2da567) {
    for (var _0x3ec4fe = 0; _0x3ec4fe < _0x101214; _0x3ec4fe++) {
      var _0x4008c9 = _0x2c669e[_0x2da567 + _0x3ec4fe * 4 >> 2];
      var _0x3b347e = _0x21b49c.renderbuffers[_0x4008c9];
      if (!_0x3b347e) {
        continue;
      }
      _0xa64359.deleteRenderbuffer(_0x3b347e);
      _0x3b347e.name = 0;
      _0x21b49c.renderbuffers[_0x4008c9] = null;
    }
  }
  function _0x8ff9ea(_0x13c4f7, _0x426306) {
    for (var _0x1e92cd = 0; _0x1e92cd < _0x13c4f7; _0x1e92cd++) {
      var _0x29fe4e = _0x2c669e[_0x426306 + _0x1e92cd * 4 >> 2];
      var _0xb3fcdd = _0x21b49c.samplers[_0x29fe4e];
      if (!_0xb3fcdd) {
        continue;
      }
      _0xa64359.deleteSampler(_0xb3fcdd);
      _0xb3fcdd.name = 0;
      _0x21b49c.samplers[_0x29fe4e] = null;
    }
  }
  function _0x11902e(_0xd23d87) {
    if (!_0xd23d87) {
      return;
    }
    var _0x5df8b2 = _0x21b49c.shaders[_0xd23d87];
    if (!_0x5df8b2) {
      _0x21b49c.recordError(1281);
      return;
    }
    _0xa64359.deleteShader(_0x5df8b2);
    _0x21b49c.shaders[_0xd23d87] = null;
  }
  function _0xa98600(_0x48227a) {
    if (!_0x48227a) {
      return;
    }
    var _0x1bae31 = _0x21b49c.syncs[_0x48227a];
    if (!_0x1bae31) {
      _0x21b49c.recordError(1281);
      return;
    }
    _0xa64359.deleteSync(_0x1bae31);
    _0x1bae31.name = 0;
    _0x21b49c.syncs[_0x48227a] = null;
  }
  function _0x1fe01e(_0x42de6f, _0x2e2da8) {
    for (var _0xc8a5c7 = 0; _0xc8a5c7 < _0x42de6f; _0xc8a5c7++) {
      var _0x25a113 = _0x2c669e[_0x2e2da8 + _0xc8a5c7 * 4 >> 2];
      var _0x3cee5c = _0x21b49c.textures[_0x25a113];
      if (!_0x3cee5c) {
        continue;
      }
      _0xa64359.deleteTexture(_0x3cee5c);
      _0x3cee5c.name = 0;
      _0x21b49c.textures[_0x25a113] = null;
    }
  }
  function _0x5234f3(_0x39df2e, _0x26810e) {
    for (var _0x5ecd2c = 0; _0x5ecd2c < _0x39df2e; _0x5ecd2c++) {
      var _0xf1d07a = _0x2c669e[_0x26810e + _0x5ecd2c * 4 >> 2];
      var _0x465663 = _0x21b49c.transformFeedbacks[_0xf1d07a];
      if (!_0x465663) {
        continue;
      }
      _0xa64359.deleteTransformFeedback(_0x465663);
      _0x465663.name = 0;
      _0x21b49c.transformFeedbacks[_0xf1d07a] = null;
    }
  }
  function _0x539090(_0x192901, _0x4054a4) {
    for (var _0x24f139 = 0; _0x24f139 < _0x192901; _0x24f139++) {
      var _0x2580ba = _0x2c669e[_0x4054a4 + _0x24f139 * 4 >> 2];
      _0xa64359.deleteVertexArray(_0x21b49c.vaos[_0x2580ba]);
      _0x21b49c.vaos[_0x2580ba] = null;
    }
  }
  function _0x46e0d4(_0xcc18a9) {
    _0xa64359.depthFunc(_0xcc18a9);
  }
  function _0x47c56f(_0x5172b4) {
    _0xa64359.depthMask(!!_0x5172b4);
  }
  function _0x3833b7(_0x23899a, _0x3694ce) {
    _0xa64359.detachShader(_0x21b49c.programs[_0x23899a], _0x21b49c.shaders[_0x3694ce]);
  }
  function _0x142185(_0x459043) {
    _0xa64359.disable(_0x459043);
  }
  function _0x1910f8(_0x6c1226) {
    var _0x4fd57f = _0x21b49c.currentContext.clientBuffers[_0x6c1226];
    _0x4fd57f.enabled = false;
    _0xa64359.disableVertexAttribArray(_0x6c1226);
  }
  function _0x10dacc(_0x197cd0, _0x497157, _0x5c8599) {
    _0x21b49c.preDrawHandleClientVertexAttribBindings(_0x497157 + _0x5c8599);
    _0xa64359.drawArrays(_0x197cd0, _0x497157, _0x5c8599);
    _0x21b49c.postDrawHandleClientVertexAttribBindings();
  }
  function _0x169ff2(_0x17a76b, _0x3e8ad4, _0x2d1d68, _0x1a06e1) {
    _0xa64359.drawArraysInstanced(_0x17a76b, _0x3e8ad4, _0x2d1d68, _0x1a06e1);
  }
  var _0x150a65 = [];
  function _0xd15650(_0x3d6960, _0x2c81f2) {
    var _0x2dee3a = _0x150a65[_0x3d6960];
    for (var _0x43eec4 = 0; _0x43eec4 < _0x3d6960; _0x43eec4++) {
      _0x2dee3a[_0x43eec4] = _0x2c669e[_0x2c81f2 + _0x43eec4 * 4 >> 2];
    }
    _0xa64359.drawBuffers(_0x2dee3a);
  }
  function _0x4617c4(_0x1546ac, _0x24b7c4, _0x337e53, _0x5b0831) {
    var _0x584311;
    if (!_0xa64359.currentElementArrayBufferBinding) {
      var _0x1e421a = _0x21b49c.calcBufLength(1, _0x337e53, 0, _0x24b7c4);
      _0x584311 = _0x21b49c.getTempIndexBuffer(_0x1e421a);
      _0xa64359.bindBuffer(34963, _0x584311);
      _0xa64359.bufferSubData(34963, 0, _0x353336.subarray(_0x5b0831, _0x5b0831 + _0x1e421a));
      _0x5b0831 = 0;
    }
    _0x21b49c.preDrawHandleClientVertexAttribBindings(_0x24b7c4);
    _0xa64359.drawElements(_0x1546ac, _0x24b7c4, _0x337e53, _0x5b0831);
    _0x21b49c.postDrawHandleClientVertexAttribBindings(_0x24b7c4);
    if (!_0xa64359.currentElementArrayBufferBinding) {
      _0xa64359.bindBuffer(34963, null);
    }
  }
  function _0x2d4dac(_0x4c245c, _0x1c6745, _0x2eb04d, _0x1bc4f3, _0x5c6472) {
    _0xa64359.drawElementsInstanced(_0x4c245c, _0x1c6745, _0x2eb04d, _0x1bc4f3, _0x5c6472);
  }
  function _0x220fe7(_0xcf833c) {
    _0xa64359.enable(_0xcf833c);
  }
  function _0x3a24c5(_0x7947af) {
    var _0x2f7587 = _0x21b49c.currentContext.clientBuffers[_0x7947af];
    _0x2f7587.enabled = true;
    _0xa64359.enableVertexAttribArray(_0x7947af);
  }
  function _0x4f6152(_0x3efd08) {
    _0xa64359.endQuery(_0x3efd08);
  }
  function _0x295b80() {
    _0xa64359.endTransformFeedback();
  }
  function _0x3cb1fa(_0x286968, _0x47f04e) {
    var _0x4b6dad = _0xa64359.fenceSync(_0x286968, _0x47f04e);
    if (_0x4b6dad) {
      var _0x2f2ac5 = _0x21b49c.getNewId(_0x21b49c.syncs);
      _0x4b6dad.name = _0x2f2ac5;
      _0x21b49c.syncs[_0x2f2ac5] = _0x4b6dad;
      return _0x2f2ac5;
    } else {
      return 0;
    }
  }
  function _0x87e608() {
    _0xa64359.finish();
  }
  function _0x57b09e() {
    _0xa64359.flush();
  }
  function _0x358133(_0x5e0a8a) {
    switch (_0x5e0a8a) {
      case 34962:
        _0x5e0a8a = 34964;
        break;
      case 34963:
        _0x5e0a8a = 34965;
        break;
      case 35051:
        _0x5e0a8a = 35053;
        break;
      case 35052:
        _0x5e0a8a = 35055;
        break;
      case 35982:
        _0x5e0a8a = 35983;
        break;
      case 36662:
        _0x5e0a8a = 36662;
        break;
      case 36663:
        _0x5e0a8a = 36663;
        break;
      case 35345:
        _0x5e0a8a = 35368;
        break;
    }
    var _0x416f6e = _0xa64359.getParameter(_0x5e0a8a);
    if (_0x416f6e) {
      return _0x416f6e.name | 0;
    } else {
      return 0;
    }
  }
  function _0x2e0a3a(_0x2fb566) {
    switch (_0x2fb566) {
      case 34962:
      case 34963:
      case 36662:
      case 36663:
      case 35051:
      case 35052:
      case 35882:
      case 35982:
      case 35345:
        return true;
      default:
        return false;
    }
  }
  function _0x129070(_0x32c3d3, _0x2a848a, _0x21320f) {
    if (!_0x2e0a3a(_0x32c3d3)) {
      _0x21b49c.recordError(1280);
      _0x500e9("GL_INVALID_ENUM in glFlushMappedBufferRange");
      return;
    }
    var _0x254678 = _0x21b49c.mappedBuffers[_0x358133(_0x32c3d3)];
    if (!_0x254678) {
      _0x21b49c.recordError(1282);
      _0x500e9("buffer was never mapped in glFlushMappedBufferRange");
      return;
    }
    if (!(_0x254678.access & 16)) {
      _0x21b49c.recordError(1282);
      _0x500e9("buffer was not mapped with GL_MAP_FLUSH_EXPLICIT_BIT in glFlushMappedBufferRange");
      return;
    }
    if (_0x2a848a < 0 || _0x21320f < 0 || _0x2a848a + _0x21320f > _0x254678.length) {
      _0x21b49c.recordError(1281);
      _0x500e9("invalid range in glFlushMappedBufferRange");
      return;
    }
    _0xa64359.bufferSubData(_0x32c3d3, _0x254678.offset, _0x353336.subarray(_0x254678.mem + _0x2a848a, _0x254678.mem + _0x2a848a + _0x21320f));
  }
  function _0x28eaa3(_0xb2ec84, _0xa41894, _0x5b064d, _0x3ca3af) {
    _0xa64359.framebufferRenderbuffer(_0xb2ec84, _0xa41894, _0x5b064d, _0x21b49c.renderbuffers[_0x3ca3af]);
  }
  function _0x3eeec5(_0x2c6285, _0x4dbb36, _0x5c9d40, _0x23825e, _0x4d7aaa) {
    _0xa64359.framebufferTexture2D(_0x2c6285, _0x4dbb36, _0x5c9d40, _0x21b49c.textures[_0x23825e], _0x4d7aaa);
  }
  function _0x5c1305(_0x1c9455, _0x2eda34, _0x20a8e6, _0x22514f, _0x222618) {
    _0xa64359.framebufferTextureLayer(_0x1c9455, _0x2eda34, _0x21b49c.textures[_0x20a8e6], _0x22514f, _0x222618);
  }
  function _0x4e44be(_0x13d4b0) {
    _0xa64359.frontFace(_0x13d4b0);
  }
  function _0x19350b(_0xc3f318, _0x44a80, _0x412bf2, _0x454120) {
    for (var _0x29aad8 = 0; _0x29aad8 < _0xc3f318; _0x29aad8++) {
      var _0x58a56e = _0xa64359[_0x412bf2]();
      var _0x1ac28a = _0x58a56e && _0x21b49c.getNewId(_0x454120);
      if (_0x58a56e) {
        _0x58a56e.name = _0x1ac28a;
        _0x454120[_0x1ac28a] = _0x58a56e;
      } else {
        _0x21b49c.recordError(1282);
      }
      _0x2c669e[_0x44a80 + _0x29aad8 * 4 >> 2] = _0x1ac28a;
    }
  }
  function _0xa8686e(_0x3a2822, _0x5935c6) {
    _0x19350b(_0x3a2822, _0x5935c6, "createBuffer", _0x21b49c.buffers);
  }
  function _0x357595(_0x171a07, _0x1abee8) {
    _0x19350b(_0x171a07, _0x1abee8, "createFramebuffer", _0x21b49c.framebuffers);
  }
  function _0x59bb97(_0x3d9b8c, _0x4461b3) {
    _0x19350b(_0x3d9b8c, _0x4461b3, "createQuery", _0x21b49c.queries);
  }
  function _0x239e55(_0x1caafb, _0x2d1599) {
    _0x19350b(_0x1caafb, _0x2d1599, "createRenderbuffer", _0x21b49c.renderbuffers);
  }
  function _0x50c5ae(_0x1753e7, _0xb41624) {
    _0x19350b(_0x1753e7, _0xb41624, "createSampler", _0x21b49c.samplers);
  }
  function _0x54bc6c(_0xe3d2eb, _0x4730ea) {
    _0x19350b(_0xe3d2eb, _0x4730ea, "createTexture", _0x21b49c.textures);
  }
  function _0x481608(_0x3c2ef0, _0x274c7a) {
    _0x19350b(_0x3c2ef0, _0x274c7a, "createTransformFeedback", _0x21b49c.transformFeedbacks);
  }
  function _0x178fa4(_0x1712b2, _0x2249f1) {
    _0x19350b(_0x1712b2, _0x2249f1, "createVertexArray", _0x21b49c.vaos);
  }
  function _0x220d29(_0xd59ca3) {
    _0xa64359.generateMipmap(_0xd59ca3);
  }
  function _0x2bdfed(_0x5ee808, _0x37b069, _0x53096e, _0x12815b, _0x1c66a2, _0x6cec73, _0x4d14ac, _0x1123ac) {
    _0x37b069 = _0x21b49c.programs[_0x37b069];
    var _0x480db0 = _0xa64359[_0x5ee808](_0x37b069, _0x53096e);
    if (_0x480db0) {
      var _0x178337 = _0x1123ac && _0x98a294(_0x480db0.name, _0x1123ac, _0x12815b);
      if (_0x1c66a2) {
        _0x2c669e[_0x1c66a2 >> 2] = _0x178337;
      }
      if (_0x6cec73) {
        _0x2c669e[_0x6cec73 >> 2] = _0x480db0.size;
      }
      if (_0x4d14ac) {
        _0x2c669e[_0x4d14ac >> 2] = _0x480db0.type;
      }
    }
  }
  function _0x11b27a(_0x5d7230, _0x3bbc16, _0x53f0cc, _0x1b7ef1, _0x2a3470, _0x46e1a1, _0x44aba1) {
    _0x2bdfed("getActiveAttrib", _0x5d7230, _0x3bbc16, _0x53f0cc, _0x1b7ef1, _0x2a3470, _0x46e1a1, _0x44aba1);
  }
  function _0x28e2fe(_0xca03a6, _0x546d6a, _0x1676de, _0xd1099f, _0x17021d, _0x5d9bf4, _0x263c11) {
    _0x2bdfed("getActiveUniform", _0xca03a6, _0x546d6a, _0x1676de, _0xd1099f, _0x17021d, _0x5d9bf4, _0x263c11);
  }
  function _0xec2752(_0x9c7465, _0x111271, _0x140773, _0x10a7d3, _0x3978bd) {
    _0x9c7465 = _0x21b49c.programs[_0x9c7465];
    var _0x27ec7d = _0xa64359.getActiveUniformBlockName(_0x9c7465, _0x111271);
    if (!_0x27ec7d) {
      return;
    }
    if (_0x3978bd && _0x140773 > 0) {
      var _0x3a3372 = _0x98a294(_0x27ec7d, _0x3978bd, _0x140773);
      if (_0x10a7d3) {
        _0x2c669e[_0x10a7d3 >> 2] = _0x3a3372;
      }
    } else if (_0x10a7d3) {
      _0x2c669e[_0x10a7d3 >> 2] = 0;
    }
  }
  function _0x5a3360(_0x127ab0, _0x26a3ac, _0x55cb80, _0x45ce59) {
    if (!_0x45ce59) {
      _0x21b49c.recordError(1281);
      return;
    }
    _0x127ab0 = _0x21b49c.programs[_0x127ab0];
    if (_0x55cb80 == 35393) {
      var _0x3c1390 = _0xa64359.getActiveUniformBlockName(_0x127ab0, _0x26a3ac);
      _0x2c669e[_0x45ce59 >> 2] = _0x3c1390.length + 1;
      return;
    }
    var _0x13b2f3 = _0xa64359.getActiveUniformBlockParameter(_0x127ab0, _0x26a3ac, _0x55cb80);
    if (_0x13b2f3 === null) {
      return;
    }
    if (_0x55cb80 == 35395) {
      for (var _0xbcee24 = 0; _0xbcee24 < _0x13b2f3.length; _0xbcee24++) {
        _0x2c669e[_0x45ce59 + _0xbcee24 * 4 >> 2] = _0x13b2f3[_0xbcee24];
      }
    } else {
      _0x2c669e[_0x45ce59 >> 2] = _0x13b2f3;
    }
  }
  function _0x552111(_0x236439, _0x180a57, _0x119c24, _0x4a01f5, _0x5560be) {
    if (!_0x5560be) {
      _0x21b49c.recordError(1281);
      return;
    }
    if (_0x180a57 > 0 && _0x119c24 == 0) {
      _0x21b49c.recordError(1281);
      return;
    }
    _0x236439 = _0x21b49c.programs[_0x236439];
    var _0x3a3d8a = [];
    for (var _0x211cb7 = 0; _0x211cb7 < _0x180a57; _0x211cb7++) {
      _0x3a3d8a.push(_0x2c669e[_0x119c24 + _0x211cb7 * 4 >> 2]);
    }
    var _0x1560ee = _0xa64359.getActiveUniforms(_0x236439, _0x3a3d8a, _0x4a01f5);
    if (!_0x1560ee) {
      return;
    }
    var _0x1d95b2 = _0x1560ee.length;
    for (var _0x211cb7 = 0; _0x211cb7 < _0x1d95b2; _0x211cb7++) {
      _0x2c669e[_0x5560be + _0x211cb7 * 4 >> 2] = _0x1560ee[_0x211cb7];
    }
  }
  function _0x55e53e(_0x1071fd, _0x39f1fa) {
    return _0xa64359.getAttribLocation(_0x21b49c.programs[_0x1071fd], _0x432dbf(_0x39f1fa));
  }
  function _0x48a91b(_0x1ecaf1, _0x39414d, _0x525990, _0x310037) {
    if (!_0x310037) {
      _0x21b49c.recordError(1281);
      return;
    }
    _0xa64359.getBufferSubData(_0x1ecaf1, _0x39414d, _0x353336, _0x310037, _0x525990);
  }
  function _0x5d6f17() {
    var _0x5cc416 = _0xa64359.getError() || _0x21b49c.lastError;
    _0x21b49c.lastError = 0;
    return _0x5cc416;
  }
  function _0x4a3bcb(_0x982684, _0x544eec, _0x5cdd9c, _0x5b1515) {
    var _0x59c8f8 = _0xa64359.getFramebufferAttachmentParameter(_0x982684, _0x544eec, _0x5cdd9c);
    if (_0x59c8f8 instanceof WebGLRenderbuffer || _0x59c8f8 instanceof WebGLTexture) {
      _0x59c8f8 = _0x59c8f8.name | 0;
    }
    _0x2c669e[_0x5b1515 >> 2] = _0x59c8f8;
  }
  function _0x39a95c(_0x174371, _0x4cee44) {
    _0x2a2a43[_0x174371 >> 2] = _0x4cee44;
    _0x2a2a43[_0x174371 + 4 >> 2] = (_0x4cee44 - _0x2a2a43[_0x174371 >> 2]) / 4294967296;
  }
  function _0x4730c0(_0x4b32da, _0x26c524, _0x447b41, _0x137ee2) {
    if (!_0x447b41) {
      _0x21b49c.recordError(1281);
      return;
    }
    var _0x166304 = _0xa64359.getIndexedParameter(_0x4b32da, _0x26c524);
    var _0x483d55;
    switch (typeof _0x166304) {
      case "boolean":
        _0x483d55 = _0x166304 ? 1 : 0;
        break;
      case "number":
        _0x483d55 = _0x166304;
        break;
      case "object":
        if (_0x166304 === null) {
          switch (_0x4b32da) {
            case 35983:
            case 35368:
              _0x483d55 = 0;
              break;
            default:
              {
                _0x21b49c.recordError(1280);
                return;
              }
          }
        } else if (_0x166304 instanceof WebGLBuffer) {
          _0x483d55 = _0x166304.name | 0;
        } else {
          _0x21b49c.recordError(1280);
          return;
        }
        break;
      default:
        _0x21b49c.recordError(1280);
        return;
    }
    switch (_0x137ee2) {
      case 1:
        _0x39a95c(_0x447b41, _0x483d55);
        break;
      case 0:
        _0x2c669e[_0x447b41 >> 2] = _0x483d55;
        break;
      case 2:
        _0x36547e[_0x447b41 >> 2] = _0x483d55;
        break;
      case 4:
        _0xf9c0a9[_0x447b41 >> 0] = _0x483d55 ? 1 : 0;
        break;
      default:
        throw "internal emscriptenWebGLGetIndexed() error, bad type: " + _0x137ee2;
    }
  }
  function _0x56a724(_0x40534c, _0x180b89, _0xdb3ca9) {
    _0x4730c0(_0x40534c, _0x180b89, _0xdb3ca9, 0);
  }
  function _0x53536c(_0x4f13f8, _0x770575, _0x25a6e8) {
    if (!_0x770575) {
      _0x21b49c.recordError(1281);
      return;
    }
    var _0x34c7d0 = undefined;
    switch (_0x4f13f8) {
      case 36346:
        _0x34c7d0 = 1;
        break;
      case 36344:
        if (_0x25a6e8 != 0 && _0x25a6e8 != 1) {
          _0x21b49c.recordError(1280);
        }
        return;
      case 34814:
      case 36345:
        _0x34c7d0 = 0;
        break;
      case 34466:
        var _0x1b7e4e = _0xa64359.getParameter(34467);
        _0x34c7d0 = _0x1b7e4e ? _0x1b7e4e.length : 0;
        break;
      case 33390:
        _0x34c7d0 = 1048576;
        break;
      case 33309:
        if (_0x21b49c.currentContext.version < 2) {
          _0x21b49c.recordError(1282);
          return;
        }
        var _0x589d8d = _0xa64359.getSupportedExtensions() || [];
        _0x34c7d0 = _0x589d8d.length * 2;
        break;
      case 33307:
      case 33308:
        if (_0x21b49c.currentContext.version < 2) {
          _0x21b49c.recordError(1280);
          return;
        }
        _0x34c7d0 = _0x4f13f8 == 33307 ? 3 : 0;
        break;
    }
    if (_0x34c7d0 === undefined) {
      var _0x31726d = _0xa64359.getParameter(_0x4f13f8);
      switch (typeof _0x31726d) {
        case "number":
          _0x34c7d0 = _0x31726d;
          break;
        case "boolean":
          _0x34c7d0 = _0x31726d ? 1 : 0;
          break;
        case "string":
          _0x21b49c.recordError(1280);
          return;
        case "object":
          if (_0x31726d === null) {
            switch (_0x4f13f8) {
              case 34964:
              case 35725:
              case 34965:
              case 36006:
              case 36007:
              case 32873:
              case 34229:
              case 36662:
              case 36663:
              case 35053:
              case 35055:
              case 36010:
              case 35097:
              case 35869:
              case 32874:
              case 36389:
              case 35983:
              case 35368:
              case 34068:
                {
                  _0x34c7d0 = 0;
                  break;
                }
              default:
                {
                  _0x21b49c.recordError(1280);
                  return;
                }
            }
          } else if (_0x31726d instanceof Float32Array || _0x31726d instanceof Uint32Array || _0x31726d instanceof Int32Array || _0x31726d instanceof Array) {
            for (var _0x4e5f76 = 0; _0x4e5f76 < _0x31726d.length; ++_0x4e5f76) {
              switch (_0x25a6e8) {
                case 0:
                  _0x2c669e[_0x770575 + _0x4e5f76 * 4 >> 2] = _0x31726d[_0x4e5f76];
                  break;
                case 2:
                  _0x36547e[_0x770575 + _0x4e5f76 * 4 >> 2] = _0x31726d[_0x4e5f76];
                  break;
                case 4:
                  _0xf9c0a9[_0x770575 + _0x4e5f76 >> 0] = _0x31726d[_0x4e5f76] ? 1 : 0;
                  break;
              }
            }
            return;
          } else {
            try {
              _0x34c7d0 = _0x31726d.name | 0;
            } catch (_0x1ae3d8) {
              _0x21b49c.recordError(1280);
              _0x500e9("GL_INVALID_ENUM in glGet" + _0x25a6e8 + "v: Unknown object returned from WebGL getParameter(" + _0x4f13f8 + ")! (error: " + _0x1ae3d8 + ")");
              return;
            }
          }
          break;
        default:
          _0x21b49c.recordError(1280);
          _0x500e9("GL_INVALID_ENUM in glGet" + _0x25a6e8 + "v: Native code calling glGet" + _0x25a6e8 + "v(" + _0x4f13f8 + ") and it returns " + _0x31726d + " of type " + typeof _0x31726d + "!");
          return;
      }
    }
    switch (_0x25a6e8) {
      case 1:
        _0x39a95c(_0x770575, _0x34c7d0);
        break;
      case 0:
        _0x2c669e[_0x770575 >> 2] = _0x34c7d0;
        break;
      case 2:
        _0x36547e[_0x770575 >> 2] = _0x34c7d0;
        break;
      case 4:
        _0xf9c0a9[_0x770575 >> 0] = _0x34c7d0 ? 1 : 0;
        break;
    }
  }
  function _0x369eed(_0x184214, _0x397d4f) {
    _0x53536c(_0x184214, _0x397d4f, 0);
  }
  function _0x304163(_0x17f5c1, _0x10b94b, _0x3c0a56, _0x5d9658, _0x3831e7) {
    if (_0x5d9658 < 0) {
      _0x21b49c.recordError(1281);
      return;
    }
    if (!_0x3831e7) {
      _0x21b49c.recordError(1281);
      return;
    }
    var _0x1078b0 = _0xa64359.getInternalformatParameter(_0x17f5c1, _0x10b94b, _0x3c0a56);
    if (_0x1078b0 === null) {
      return;
    }
    for (var _0x36b22a = 0; _0x36b22a < _0x1078b0.length && _0x36b22a < _0x5d9658; ++_0x36b22a) {
      _0x2c669e[_0x3831e7 + _0x36b22a * 4 >> 2] = _0x1078b0[_0x36b22a];
    }
  }
  function _0x33830f(_0x28d513, _0x3d1321, _0x524a28, _0x5f92bc, _0x186f6f) {
    _0x21b49c.recordError(1282);
  }
  function _0x511557(_0x144f9a, _0x2e6e7c, _0x2da8b2, _0x5b3348) {
    var _0xbe2965 = _0xa64359.getProgramInfoLog(_0x21b49c.programs[_0x144f9a]);
    if (_0xbe2965 === null) {
      _0xbe2965 = "(unknown error)";
    }
    var _0x5b6d60 = _0x2e6e7c > 0 && _0x5b3348 ? _0x98a294(_0xbe2965, _0x5b3348, _0x2e6e7c) : 0;
    if (_0x2da8b2) {
      _0x2c669e[_0x2da8b2 >> 2] = _0x5b6d60;
    }
  }
  function _0xc479a1(_0x5625ba, _0x201391, _0x39180b) {
    if (!_0x39180b) {
      _0x21b49c.recordError(1281);
      return;
    }
    if (_0x5625ba >= _0x21b49c.counter) {
      _0x21b49c.recordError(1281);
      return;
    }
    _0x5625ba = _0x21b49c.programs[_0x5625ba];
    if (_0x201391 == 35716) {
      var _0x144e0d = _0xa64359.getProgramInfoLog(_0x5625ba);
      if (_0x144e0d === null) {
        _0x144e0d = "(unknown error)";
      }
      _0x2c669e[_0x39180b >> 2] = _0x144e0d.length + 1;
    } else if (_0x201391 == 35719) {
      if (!_0x5625ba.maxUniformLength) {
        for (var _0x1f8561 = 0; _0x1f8561 < _0xa64359.getProgramParameter(_0x5625ba, 35718); ++_0x1f8561) {
          _0x5625ba.maxUniformLength = Math.max(_0x5625ba.maxUniformLength, _0xa64359.getActiveUniform(_0x5625ba, _0x1f8561).name.length + 1);
        }
      }
      _0x2c669e[_0x39180b >> 2] = _0x5625ba.maxUniformLength;
    } else if (_0x201391 == 35722) {
      if (!_0x5625ba.maxAttributeLength) {
        for (var _0x1f8561 = 0; _0x1f8561 < _0xa64359.getProgramParameter(_0x5625ba, 35721); ++_0x1f8561) {
          _0x5625ba.maxAttributeLength = Math.max(_0x5625ba.maxAttributeLength, _0xa64359.getActiveAttrib(_0x5625ba, _0x1f8561).name.length + 1);
        }
      }
      _0x2c669e[_0x39180b >> 2] = _0x5625ba.maxAttributeLength;
    } else if (_0x201391 == 35381) {
      if (!_0x5625ba.maxUniformBlockNameLength) {
        for (var _0x1f8561 = 0; _0x1f8561 < _0xa64359.getProgramParameter(_0x5625ba, 35382); ++_0x1f8561) {
          _0x5625ba.maxUniformBlockNameLength = Math.max(_0x5625ba.maxUniformBlockNameLength, _0xa64359.getActiveUniformBlockName(_0x5625ba, _0x1f8561).length + 1);
        }
      }
      _0x2c669e[_0x39180b >> 2] = _0x5625ba.maxUniformBlockNameLength;
    } else {
      _0x2c669e[_0x39180b >> 2] = _0xa64359.getProgramParameter(_0x5625ba, _0x201391);
    }
  }
  function _0x5cd0b0(_0x4bd0dd, _0x6478b3, _0x3ca753) {
    if (!_0x3ca753) {
      _0x21b49c.recordError(1281);
      return;
    }
    var _0x37010c = _0x21b49c.queries[_0x4bd0dd];
    var _0x1275e5 = _0xa64359.getQueryParameter(_0x37010c, _0x6478b3);
    var _0x9dd9b8;
    if (typeof _0x1275e5 == "boolean") {
      _0x9dd9b8 = _0x1275e5 ? 1 : 0;
    } else {
      _0x9dd9b8 = _0x1275e5;
    }
    _0x2c669e[_0x3ca753 >> 2] = _0x9dd9b8;
  }
  function _0x5f5521(_0x2507f1, _0x3de91f, _0x5e2534) {
    if (!_0x5e2534) {
      _0x21b49c.recordError(1281);
      return;
    }
    _0x2c669e[_0x5e2534 >> 2] = _0xa64359.getQuery(_0x2507f1, _0x3de91f);
  }
  function _0x24ef21(_0x4466cd, _0xe3f8c4, _0x590eda) {
    if (!_0x590eda) {
      _0x21b49c.recordError(1281);
      return;
    }
    _0x2c669e[_0x590eda >> 2] = _0xa64359.getRenderbufferParameter(_0x4466cd, _0xe3f8c4);
  }
  function _0x14585e(_0x491263, _0x370c75, _0x39c57a, _0xda98ca) {
    var _0x2b3015 = _0xa64359.getShaderInfoLog(_0x21b49c.shaders[_0x491263]);
    if (_0x2b3015 === null) {
      _0x2b3015 = "(unknown error)";
    }
    var _0x5a8777 = _0x370c75 > 0 && _0xda98ca ? _0x98a294(_0x2b3015, _0xda98ca, _0x370c75) : 0;
    if (_0x39c57a) {
      _0x2c669e[_0x39c57a >> 2] = _0x5a8777;
    }
  }
  function _0x3cd22(_0x4b4653, _0x28875b, _0x8554b2, _0x1eeb47) {
    var _0x4733b5 = _0xa64359.getShaderPrecisionFormat(_0x4b4653, _0x28875b);
    _0x2c669e[_0x8554b2 >> 2] = _0x4733b5.rangeMin;
    _0x2c669e[_0x8554b2 + 4 >> 2] = _0x4733b5.rangeMax;
    _0x2c669e[_0x1eeb47 >> 2] = _0x4733b5.precision;
  }
  function _0x22898e(_0x250b3a, _0xca11f5, _0x223488, _0x3ff990) {
    var _0x17717c = _0xa64359.getShaderSource(_0x21b49c.shaders[_0x250b3a]);
    if (!_0x17717c) {
      return;
    }
    var _0x17ea5c = _0xca11f5 > 0 && _0x3ff990 ? _0x98a294(_0x17717c, _0x3ff990, _0xca11f5) : 0;
    if (_0x223488) {
      _0x2c669e[_0x223488 >> 2] = _0x17ea5c;
    }
  }
  function _0x1c911e(_0x1021bc, _0x1dfc6b, _0x420f1d) {
    if (!_0x420f1d) {
      _0x21b49c.recordError(1281);
      return;
    }
    if (_0x1dfc6b == 35716) {
      var _0x47a2d0 = _0xa64359.getShaderInfoLog(_0x21b49c.shaders[_0x1021bc]);
      if (_0x47a2d0 === null) {
        _0x47a2d0 = "(unknown error)";
      }
      var _0x3533c1 = _0x47a2d0 ? _0x47a2d0.length + 1 : 0;
      _0x2c669e[_0x420f1d >> 2] = _0x3533c1;
    } else if (_0x1dfc6b == 35720) {
      var _0x588539 = _0xa64359.getShaderSource(_0x21b49c.shaders[_0x1021bc]);
      var _0x3199ab = _0x588539 ? _0x588539.length + 1 : 0;
      _0x2c669e[_0x420f1d >> 2] = _0x3199ab;
    } else {
      _0x2c669e[_0x420f1d >> 2] = _0xa64359.getShaderParameter(_0x21b49c.shaders[_0x1021bc], _0x1dfc6b);
    }
  }
  function _0x335f19(_0x36a554) {
    var _0x9cf2d4 = _0x21b49c.stringCache[_0x36a554];
    if (!_0x9cf2d4) {
      switch (_0x36a554) {
        case 7939:
          var _0x4f87c2 = _0xa64359.getSupportedExtensions() || [];
          _0x4f87c2 = _0x4f87c2.concat(_0x4f87c2.map(function (_0x558cdc) {
            return "GL_" + _0x558cdc;
          }));
          _0x9cf2d4 = _0x1c7ce2(_0x4f87c2.join(" "));
          break;
        case 7936:
        case 7937:
        case 37445:
        case 37446:
          var _0xf78c0 = _0xa64359.getParameter(_0x36a554);
          if (!_0xf78c0) {
            _0x21b49c.recordError(1280);
          }
          _0x9cf2d4 = _0xf78c0 && _0x1c7ce2(_0xf78c0);
          break;
        case 7938:
          var _0x59fa0f = _0xa64359.getParameter(7938);
          if (_0x21b49c.currentContext.version >= 2) {
            _0x59fa0f = "OpenGL ES 3.0 (" + _0x59fa0f + ")";
          } else {
            _0x59fa0f = "OpenGL ES 2.0 (" + _0x59fa0f + ")";
          }
          _0x9cf2d4 = _0x1c7ce2(_0x59fa0f);
          break;
        case 35724:
          var _0x3432f4 = _0xa64359.getParameter(35724);
          var _0x5c9a2d = /^WebGL GLSL ES ([0-9]\.[0-9][0-9]?)(?:$| .*)/;
          var _0x4bcaa4 = _0x3432f4.match(_0x5c9a2d);
          if (_0x4bcaa4 !== null) {
            if (_0x4bcaa4[1].length == 3) {
              _0x4bcaa4[1] = _0x4bcaa4[1] + "0";
            }
            _0x3432f4 = "OpenGL ES GLSL ES " + _0x4bcaa4[1] + " (" + _0x3432f4 + ")";
          }
          _0x9cf2d4 = _0x1c7ce2(_0x3432f4);
          break;
        default:
          _0x21b49c.recordError(1280);
      }
      _0x21b49c.stringCache[_0x36a554] = _0x9cf2d4;
    }
    return _0x9cf2d4;
  }
  function _0x23fc72(_0x156eba, _0x534fac) {
    if (_0x21b49c.currentContext.version < 2) {
      _0x21b49c.recordError(1282);
      return 0;
    }
    var _0x1cfd54 = _0x21b49c.stringiCache[_0x156eba];
    if (_0x1cfd54) {
      if (_0x534fac < 0 || _0x534fac >= _0x1cfd54.length) {
        _0x21b49c.recordError(1281);
        return 0;
      }
      return _0x1cfd54[_0x534fac];
    }
    switch (_0x156eba) {
      case 7939:
        var _0x3aab01 = _0xa64359.getSupportedExtensions() || [];
        _0x3aab01 = _0x3aab01.concat(_0x3aab01.map(function (_0x2bd0e6) {
          return "GL_" + _0x2bd0e6;
        }));
        _0x3aab01 = _0x3aab01.map(function (_0xca096e) {
          return _0x1c7ce2(_0xca096e);
        });
        _0x1cfd54 = _0x21b49c.stringiCache[_0x156eba] = _0x3aab01;
        if (_0x534fac < 0 || _0x534fac >= _0x1cfd54.length) {
          _0x21b49c.recordError(1281);
          return 0;
        }
        return _0x1cfd54[_0x534fac];
      default:
        _0x21b49c.recordError(1280);
        return 0;
    }
  }
  function _0x4e49ef(_0x2b644f, _0x3dfedd, _0x4f1e24) {
    if (!_0x4f1e24) {
      _0x21b49c.recordError(1281);
      return;
    }
    _0x2c669e[_0x4f1e24 >> 2] = _0xa64359.getTexParameter(_0x2b644f, _0x3dfedd);
  }
  function _0x2a8824(_0x3e1024, _0x464156) {
    return _0xa64359.getUniformBlockIndex(_0x21b49c.programs[_0x3e1024], _0x432dbf(_0x464156));
  }
  function _0x3e6a85(_0xcb1362, _0x4d9f30, _0x247f81, _0x40e557) {
    if (!_0x40e557) {
      _0x21b49c.recordError(1281);
      return;
    }
    if (_0x4d9f30 > 0 && (_0x247f81 == 0 || _0x40e557 == 0)) {
      _0x21b49c.recordError(1281);
      return;
    }
    _0xcb1362 = _0x21b49c.programs[_0xcb1362];
    var _0x5a7bed = [];
    for (var _0x231c21 = 0; _0x231c21 < _0x4d9f30; _0x231c21++) {
      _0x5a7bed.push(_0x432dbf(_0x2c669e[_0x247f81 + _0x231c21 * 4 >> 2]));
    }
    var _0x4890d7 = _0xa64359.getUniformIndices(_0xcb1362, _0x5a7bed);
    if (!_0x4890d7) {
      return;
    }
    var _0x27b72e = _0x4890d7.length;
    for (var _0x231c21 = 0; _0x231c21 < _0x27b72e; _0x231c21++) {
      _0x2c669e[_0x40e557 + _0x231c21 * 4 >> 2] = _0x4890d7[_0x231c21];
    }
  }
  function _0x2622d7(_0x5f570e, _0x58a1a2) {
    function _0x1e62cd(_0x512704) {
      return _0x512704.slice(-1) == "]" && _0x512704.lastIndexOf("[");
    }
    _0x58a1a2 = _0x432dbf(_0x58a1a2);
    if (_0x5f570e = _0x21b49c.programs[_0x5f570e]) {
      var _0x1f6f71 = _0x5f570e.uniformLocsById;
      var _0x27041d = _0x5f570e.uniformSizeAndIdsByName;
      var _0x23bd6e;
      var _0x216965;
      var _0x361355 = 0;
      var _0x57e76b = _0x58a1a2;
      var _0x4b6a7c = _0x1e62cd(_0x58a1a2);
      if (!_0x1f6f71) {
        _0x5f570e.uniformLocsById = _0x1f6f71 = {};
        _0x5f570e.uniformArrayNamesById = {};
        for (_0x23bd6e = 0; _0x23bd6e < _0xa64359.getProgramParameter(_0x5f570e, 35718); ++_0x23bd6e) {
          var _0x562579 = _0xa64359.getActiveUniform(_0x5f570e, _0x23bd6e);
          var _0x55893a = _0x562579.name;
          var _0x368e8f = _0x562579.size;
          var _0x5cb245 = _0x1e62cd(_0x55893a);
          var _0x59af2a = _0x5cb245 > 0 ? _0x55893a.slice(0, _0x5cb245) : _0x55893a;
          var _0x4a8c8f = _0x27041d[_0x59af2a] ? _0x27041d[_0x59af2a][1] : _0x5f570e.uniformIdCounter;
          _0x5f570e.uniformIdCounter = Math.max(_0x4a8c8f + _0x368e8f, _0x5f570e.uniformIdCounter);
          _0x27041d[_0x59af2a] = [_0x368e8f, _0x4a8c8f];
          for (_0x216965 = 0; _0x216965 < _0x368e8f; ++_0x216965) {
            _0x1f6f71[_0x4a8c8f] = _0x216965;
            _0x5f570e.uniformArrayNamesById[_0x4a8c8f++] = _0x59af2a;
          }
        }
      }
      if (_0x4b6a7c > 0) {
        _0x361355 = _0x54c929(_0x58a1a2.slice(_0x4b6a7c + 1)) >>> 0;
        _0x57e76b = _0x58a1a2.slice(0, _0x4b6a7c);
      }
      var _0x3c26bd = _0x27041d[_0x57e76b];
      if (_0x3c26bd && _0x361355 < _0x3c26bd[0]) {
        _0x361355 += _0x3c26bd[1];
        if (_0x1f6f71[_0x361355] = _0x1f6f71[_0x361355] || _0xa64359.getUniformLocation(_0x5f570e, _0x58a1a2)) {
          return _0x361355;
        }
      }
    } else {
      _0x21b49c.recordError(1281);
    }
    return -1;
  }
  function _0x4404aa(_0x585b47) {
    var _0x3d1e9c = _0xa64359.currentProgram;
    if (_0x3d1e9c) {
      var _0x43c213 = _0x3d1e9c.uniformLocsById[_0x585b47];
      if (typeof _0x43c213 === "number") {
        _0x3d1e9c.uniformLocsById[_0x585b47] = _0x43c213 = _0xa64359.getUniformLocation(_0x3d1e9c, _0x3d1e9c.uniformArrayNamesById[_0x585b47] + (_0x43c213 > 0 ? "[" + _0x43c213 + "]" : ""));
      }
      return _0x43c213;
    } else {
      _0x21b49c.recordError(1282);
    }
  }
  function _0x3a0513(_0x54e996, _0x1ed5a2, _0x6ea5c2, _0x529128) {
    if (!_0x6ea5c2) {
      _0x21b49c.recordError(1281);
      return;
    }
    _0x54e996 = _0x21b49c.programs[_0x54e996];
    var _0x5953fe = _0xa64359.getUniform(_0x54e996, _0x4404aa(_0x1ed5a2));
    if (typeof _0x5953fe == "number" || typeof _0x5953fe == "boolean") {
      switch (_0x529128) {
        case 0:
          _0x2c669e[_0x6ea5c2 >> 2] = _0x5953fe;
          break;
        case 2:
          _0x36547e[_0x6ea5c2 >> 2] = _0x5953fe;
          break;
      }
    } else {
      for (var _0x58ca41 = 0; _0x58ca41 < _0x5953fe.length; _0x58ca41++) {
        switch (_0x529128) {
          case 0:
            _0x2c669e[_0x6ea5c2 + _0x58ca41 * 4 >> 2] = _0x5953fe[_0x58ca41];
            break;
          case 2:
            _0x36547e[_0x6ea5c2 + _0x58ca41 * 4 >> 2] = _0x5953fe[_0x58ca41];
            break;
        }
      }
    }
  }
  function _0x51843c(_0x338daa, _0x6b6418, _0x4a32d0) {
    _0x3a0513(_0x338daa, _0x6b6418, _0x4a32d0, 0);
  }
  function _0x58f074(_0x429e47, _0x55f43f, _0x3c4473, _0x36eb0e) {
    if (!_0x3c4473) {
      _0x21b49c.recordError(1281);
      return;
    }
    if (_0x21b49c.currentContext.clientBuffers[_0x429e47].enabled) {
      _0x500e9("glGetVertexAttrib*v on client-side array: not supported, bad data returned");
    }
    var _0x520ce0 = _0xa64359.getVertexAttrib(_0x429e47, _0x55f43f);
    if (_0x55f43f == 34975) {
      _0x2c669e[_0x3c4473 >> 2] = _0x520ce0 && _0x520ce0.name;
    } else if (typeof _0x520ce0 == "number" || typeof _0x520ce0 == "boolean") {
      switch (_0x36eb0e) {
        case 0:
          _0x2c669e[_0x3c4473 >> 2] = _0x520ce0;
          break;
        case 2:
          _0x36547e[_0x3c4473 >> 2] = _0x520ce0;
          break;
        case 5:
          _0x2c669e[_0x3c4473 >> 2] = Math.fround(_0x520ce0);
          break;
      }
    } else {
      for (var _0x3303a5 = 0; _0x3303a5 < _0x520ce0.length; _0x3303a5++) {
        switch (_0x36eb0e) {
          case 0:
            _0x2c669e[_0x3c4473 + _0x3303a5 * 4 >> 2] = _0x520ce0[_0x3303a5];
            break;
          case 2:
            _0x36547e[_0x3c4473 + _0x3303a5 * 4 >> 2] = _0x520ce0[_0x3303a5];
            break;
          case 5:
            _0x2c669e[_0x3c4473 + _0x3303a5 * 4 >> 2] = Math.fround(_0x520ce0[_0x3303a5]);
            break;
        }
      }
    }
  }
  function _0x3a1759(_0x3b07eb, _0x245293, _0x309670) {
    _0x58f074(_0x3b07eb, _0x245293, _0x309670, 5);
  }
  function _0x509f47(_0x234383, _0x27da3f, _0x29b5c3) {
    var _0xa6354f = _0x150a65[_0x27da3f];
    for (var _0x3a4356 = 0; _0x3a4356 < _0x27da3f; _0x3a4356++) {
      _0xa6354f[_0x3a4356] = _0x2c669e[_0x29b5c3 + _0x3a4356 * 4 >> 2];
    }
    _0xa64359.invalidateFramebuffer(_0x234383, _0xa6354f);
  }
  function _0x336ce0(_0x5eaeda) {
    return _0xa64359.isEnabled(_0x5eaeda);
  }
  function _0x3a15ed(_0x4c41c6) {
    var _0x316e94 = _0x21b49c.vaos[_0x4c41c6];
    if (!_0x316e94) {
      return 0;
    }
    return _0xa64359.isVertexArray(_0x316e94);
  }
  function _0x32b8b3(_0x40db7b) {
    _0x40db7b = _0x21b49c.programs[_0x40db7b];
    _0xa64359.linkProgram(_0x40db7b);
    _0x40db7b.uniformLocsById = 0;
    _0x40db7b.uniformSizeAndIdsByName = {};
    [_0x40db7b.vs, _0x40db7b.fs].forEach(function (_0x30696b) {
      Object.keys(_0x30696b.explicitUniformLocations).forEach(function (_0x2b9396) {
        var _0x56d052 = _0x30696b.explicitUniformLocations[_0x2b9396];
        _0x40db7b.uniformSizeAndIdsByName[_0x2b9396] = [1, _0x56d052];
        _0x40db7b.uniformIdCounter = Math.max(_0x40db7b.uniformIdCounter, _0x56d052 + 1);
      });
    });
    function _0x5dd168(_0x53ed4e, _0x47b030) {
      Object.keys(_0x47b030).forEach(function (_0xd2ea30) {
        _0x53ed4e[_0xd2ea30] = _0x47b030[_0xd2ea30];
      });
    }
    _0x40db7b.explicitUniformBindings = {};
    _0x40db7b.explicitSamplerBindings = {};
    [_0x40db7b.vs, _0x40db7b.fs].forEach(function (_0x512888) {
      _0x5dd168(_0x40db7b.explicitUniformBindings, _0x512888.explicitUniformBindings);
      _0x5dd168(_0x40db7b.explicitSamplerBindings, _0x512888.explicitSamplerBindings);
    });
    _0x40db7b.explicitProgramBindingsApplied = 0;
  }
  function _0x15c6f7(_0x174820, _0x342126, _0x2c83cc, _0x5e7b98) {
    if (_0x5e7b98 != 26 && _0x5e7b98 != 10) {
      _0x500e9("glMapBufferRange is only supported when access is MAP_WRITE|INVALIDATE_BUFFER");
      return 0;
    }
    if (!_0x2e0a3a(_0x174820)) {
      _0x21b49c.recordError(1280);
      _0x500e9("GL_INVALID_ENUM in glMapBufferRange");
      return 0;
    }
    var _0x5ddd5b = _0x45bc34(_0x2c83cc);
    if (!_0x5ddd5b) {
      return 0;
    }
    _0x21b49c.mappedBuffers[_0x358133(_0x174820)] = {
      offset: _0x342126,
      length: _0x2c83cc,
      mem: _0x5ddd5b,
      access: _0x5e7b98
    };
    return _0x5ddd5b;
  }
  function _0x901490(_0x4f5622, _0x15a912) {
    if (_0x4f5622 == 3317) {
      _0x21b49c.unpackAlignment = _0x15a912;
    }
    _0xa64359.pixelStorei(_0x4f5622, _0x15a912);
  }
  function _0x9ff76f(_0x44b146, _0x1185bd) {
    _0xa64359.polygonOffset(_0x44b146, _0x1185bd);
  }
  function _0x3e1410(_0xf3bc95, _0x3e79b7, _0x119568, _0x918ac9) {
    _0x21b49c.recordError(1280);
  }
  function _0x2f5e1b(_0x18f37b, _0x933a81, _0x1fbd17) {
    _0x21b49c.recordError(1280);
  }
  function _0x561871(_0xedb9a3) {
    _0xa64359.readBuffer(_0xedb9a3);
  }
  function _0x5bbfb6(_0x48f0f6, _0x140a0b, _0x159840, _0x4dc181) {
    function _0x416ae6(_0x133d01, _0x244936) {
      return _0x133d01 + _0x244936 - 1 & -_0x244936;
    }
    var _0x641e9a = _0x48f0f6 * _0x159840;
    var _0x1f7337 = _0x416ae6(_0x641e9a, _0x4dc181);
    return _0x140a0b * _0x1f7337;
  }
  function _0x2c5aae(_0x5277d5) {
    var _0x4ed0ae = {
      5: 3,
      6: 4,
      8: 2,
      29502: 3,
      29504: 4,
      26917: 2,
      26918: 2,
      29846: 3,
      29847: 4
    };
    return _0x4ed0ae[_0x5277d5 - 6402] || 1;
  }
  function _0x211200(_0xf80699) {
    _0xf80699 -= 5120;
    if (_0xf80699 == 0) {
      return _0xf9c0a9;
    }
    if (_0xf80699 == 1) {
      return _0x353336;
    }
    if (_0xf80699 == 2) {
      return _0x2c34d4;
    }
    if (_0xf80699 == 4) {
      return _0x2c669e;
    }
    if (_0xf80699 == 6) {
      return _0x36547e;
    }
    if (_0xf80699 == 5 || _0xf80699 == 28922 || _0xf80699 == 28520 || _0xf80699 == 30779 || _0xf80699 == 30782) {
      return _0x2a2a43;
    }
    return _0xe0cbd1;
  }
  function _0x1ea346(_0x3cc870) {
    return 31 - Math.clz32(_0x3cc870.BYTES_PER_ELEMENT);
  }
  function _0x49db9(_0x3efafa, _0x3057a0, _0xe16a1c, _0x4f4129, _0x3ce9c9, _0x3cf521) {
    var _0x298acc = _0x211200(_0x3efafa);
    var _0x3330c1 = _0x1ea346(_0x298acc);
    var _0x32e9a2 = 1 << _0x3330c1;
    var _0x499894 = _0x2c5aae(_0x3057a0) * _0x32e9a2;
    var _0x930f8 = _0x5bbfb6(_0xe16a1c, _0x4f4129, _0x499894, _0x21b49c.unpackAlignment);
    return _0x298acc.subarray(_0x3ce9c9 >> _0x3330c1, _0x3ce9c9 + _0x930f8 >> _0x3330c1);
  }
  function _0x4868bf(_0x18d1a7, _0x10d16b, _0x2ff2b1, _0x1b755e, _0x353134, _0x5768a9, _0x1a5acf) {
    if (_0x21b49c.currentContext.version >= 2) {
      if (_0xa64359.currentPixelPackBufferBinding) {
        _0xa64359.readPixels(_0x18d1a7, _0x10d16b, _0x2ff2b1, _0x1b755e, _0x353134, _0x5768a9, _0x1a5acf);
      } else {
        var _0x2183d9 = _0x211200(_0x5768a9);
        _0xa64359.readPixels(_0x18d1a7, _0x10d16b, _0x2ff2b1, _0x1b755e, _0x353134, _0x5768a9, _0x2183d9, _0x1a5acf >> _0x1ea346(_0x2183d9));
      }
      return;
    }
    var _0x40e1c5 = _0x49db9(_0x5768a9, _0x353134, _0x2ff2b1, _0x1b755e, _0x1a5acf, _0x353134);
    if (!_0x40e1c5) {
      _0x21b49c.recordError(1280);
      return;
    }
    _0xa64359.readPixels(_0x18d1a7, _0x10d16b, _0x2ff2b1, _0x1b755e, _0x353134, _0x5768a9, _0x40e1c5);
  }
  function _0x346b88(_0x55180e, _0x31c79b, _0x101831, _0x582c6e) {
    _0xa64359.renderbufferStorage(_0x55180e, _0x31c79b, _0x101831, _0x582c6e);
  }
  function _0x3da0cd(_0x2eb77d, _0x2f6753, _0x3a3d15, _0xa02b16, _0x2d28fd) {
    _0xa64359.renderbufferStorageMultisample(_0x2eb77d, _0x2f6753, _0x3a3d15, _0xa02b16, _0x2d28fd);
  }
  function _0x3c609a(_0x1336b4, _0x286e48, _0x25b7a9) {
    _0xa64359.samplerParameteri(_0x21b49c.samplers[_0x1336b4], _0x286e48, _0x25b7a9);
  }
  function _0x4e4cc8(_0x192c6d, _0x2a1113, _0x50dec3, _0x2e714b) {
    _0xa64359.scissor(_0x192c6d, _0x2a1113, _0x50dec3, _0x2e714b);
  }
  function _0x482a0c(_0x69a2b4, _0xa20141, _0x20f064 = "(", _0x32c335 = ")") {
    var _0x36f006 = 0;
    for (; _0xa20141 < _0x69a2b4.length; ++_0xa20141) {
      if (_0x69a2b4[_0xa20141] == _0x20f064) {
        ++_0x36f006;
      }
      if (_0x69a2b4[_0xa20141] == _0x32c335 && --_0x36f006 == 0) {
        return _0xa20141;
      }
    }
  }
  function _0x42b531(_0x280d9d) {
    var _0x42550b = 0;
    var _0x5a2427 = _0x280d9d.length;
    var _0x47abda = "";
    var _0x3bdcb2 = [1];
    var _0x4d421d = {
      defined: function (_0x297488) {
        if (_0x4d421d[_0x297488[0]]) {
          return 1;
        } else {
          return 0;
        }
      },
      GL_FRAGMENT_PRECISION_HIGH: function () {
        return 1;
      }
    };
    function _0x25c1ef(_0x896ea1, _0x2c3772) {
      return !(_0x896ea1.charCodeAt(_0x2c3772) > 32);
    }
    function _0x5a2b3c(_0x3daa55, _0x3c1455) {
      while (!_0x25c1ef(_0x3daa55, _0x3c1455)) {
        ++_0x3c1455;
      }
      return _0x3c1455;
    }
    function _0x304459(_0x35d8a7, _0x2400d6) {
      var _0x1194b9 = _0x35d8a7.charCodeAt(_0x2400d6);
      if (_0x1194b9 > 32) {
        if (_0x1194b9 < 48) {
          return 1;
        }
        if (_0x1194b9 < 58) {
          return 2;
        }
        if (_0x1194b9 < 65) {
          return 1;
        }
        if (_0x1194b9 < 91 || _0x1194b9 == 95) {
          return 3;
        }
        if (_0x1194b9 < 97) {
          return 1;
        }
        if (_0x1194b9 < 123) {
          return 3;
        }
        return 1;
      }
      if (_0x1194b9 < 33) {
        return 0;
      } else {
        return 4;
      }
    }
    function _0x47d6a3(_0x4ad9ca, _0x2e60f2) {
      var _0x413bf4 = [];
      var _0x1f8d3e = _0x4ad9ca.length;
      for (var _0x12a4a6 = 0; _0x12a4a6 <= _0x1f8d3e; ++_0x12a4a6) {
        var _0x42f85c = _0x304459(_0x4ad9ca, _0x12a4a6);
        if (_0x42f85c == 2 || _0x42f85c == 3) {
          for (var _0xbfcd88 = _0x12a4a6 + 1; _0xbfcd88 <= _0x1f8d3e; ++_0xbfcd88) {
            var _0x3f79c7 = _0x304459(_0x4ad9ca, _0xbfcd88);
            if (_0x3f79c7 != _0x42f85c && (_0x3f79c7 != 2 || _0x42f85c != 3)) {
              _0x413bf4.push(_0x4ad9ca.substring(_0x12a4a6, _0xbfcd88));
              _0x12a4a6 = _0xbfcd88 - 1;
              break;
            }
          }
        } else if (_0x42f85c == 1) {
          var _0x1863a9 = _0x4ad9ca.substr(_0x12a4a6, 2);
          if (["<=", ">=", "==", "!=", "&&", "||"].includes(_0x1863a9)) {
            _0x413bf4.push(_0x1863a9);
            ++_0x12a4a6;
          } else {
            _0x413bf4.push(_0x4ad9ca[_0x12a4a6]);
          }
        }
      }
      return _0x413bf4;
    }
    function _0x5f5d34(_0x284579, _0x108bdc, _0x5c9c1c = _0x284579.length) {
      var _0x4eb68c = _0x284579.length;
      var _0x3d51a4 = "";
      for (var _0x15a9e1 = _0x108bdc; _0x15a9e1 < _0x5c9c1c; ++_0x15a9e1) {
        var _0x2ee43d = _0x304459(_0x284579, _0x15a9e1);
        if (_0x2ee43d == 3) {
          for (var _0x467dfe = _0x15a9e1 + 1; _0x467dfe <= _0x5c9c1c; ++_0x467dfe) {
            var _0xc0ebb7 = _0x304459(_0x284579, _0x467dfe);
            if (_0xc0ebb7 != 2 && _0xc0ebb7 != 3) {
              var _0x15ea0e = _0x284579.substring(_0x15a9e1, _0x467dfe);
              var _0x5b7b06 = _0x4d421d[_0x15ea0e];
              if (_0x5b7b06) {
                var _0x29ae3b = _0x284579.substring(_0x108bdc, _0x15a9e1);
                if (_0x5b7b06.length && _0x284579[_0x467dfe] == "(") {
                  var _0x3e814b = _0x482a0c(_0x284579, _0x467dfe);
                  _0x29ae3b += _0x5b7b06(_0x284579.substring(_0x467dfe + 1, _0x3e814b).split(",")) + _0x284579.substring(_0x3e814b + 1, _0x5c9c1c);
                } else {
                  _0x29ae3b += _0x5b7b06() + _0x284579.substring(_0x467dfe, _0x5c9c1c);
                }
                return _0x5f5d34(_0x29ae3b, 0);
              } else {
                _0x3d51a4 += _0x15ea0e;
                _0x15a9e1 = _0x467dfe - 1;
                break;
              }
            }
          }
        } else {
          _0x3d51a4 += _0x284579[_0x15a9e1];
        }
      }
      return _0x3d51a4;
    }
    function _0x5a57db(_0x3da4fb) {
      while (_0x3da4fb.length > 1 || typeof _0x3da4fb[0] != "function") {
        _0x3da4fb = function (_0x18b2b2) {
          var _0x397e41;
          var _0xe99e23;
          var _0x1dc421;
          var _0x1ee59a = -2;
          for (_0xe99e23 = 0; _0xe99e23 < _0x18b2b2.length; ++_0xe99e23) {
            if ((_0x1dc421 = ["*", "/", "+", "-", "!", "<", "<=", ">", ">=", "==", "!=", "&&", "||", "("].indexOf(_0x18b2b2[_0xe99e23])) > _0x1ee59a) {
              _0x397e41 = _0xe99e23;
              _0x1ee59a = _0x1dc421;
            }
          }
          if (_0x1ee59a == 13) {
            var _0xe99e23 = _0x482a0c(_0x18b2b2, _0x397e41);
            if (_0xe99e23) {
              _0x18b2b2.splice(_0x397e41, _0xe99e23 + 1 - _0x397e41, _0x5a57db(_0x18b2b2.slice(_0x397e41 + 1, _0xe99e23)));
              return _0x18b2b2;
            }
          }
          if (_0x1ee59a == 4) {
            _0x397e41 = _0x18b2b2.lastIndexOf("!");
            var _0x377f8c = _0x5a57db(_0x18b2b2.slice(_0x397e41 + 1, _0x397e41 + 2));
            _0x18b2b2.splice(_0x397e41, 2, function () {
              return !_0x377f8c();
            });
            return _0x18b2b2;
          }
          if (_0x1ee59a >= 0) {
            var _0x46ebe7 = _0x5a57db(_0x18b2b2.slice(0, _0x397e41));
            var _0x24fe79 = _0x5a57db(_0x18b2b2.slice(_0x397e41 + 1));
            switch (_0x18b2b2[_0x397e41]) {
              case "&&":
                return [function () {
                  return _0x46ebe7() && _0x24fe79();
                }];
              case "||":
                return [function () {
                  return _0x46ebe7() || _0x24fe79();
                }];
              case "==":
                return [function () {
                  return _0x46ebe7() == _0x24fe79();
                }];
              case "!=":
                return [function () {
                  return _0x46ebe7() != _0x24fe79();
                }];
              case "<":
                return [function () {
                  return _0x46ebe7() < _0x24fe79();
                }];
              case "<=":
                return [function () {
                  return _0x46ebe7() <= _0x24fe79();
                }];
              case ">":
                return [function () {
                  return _0x46ebe7() > _0x24fe79();
                }];
              case ">=":
                return [function () {
                  return _0x46ebe7() >= _0x24fe79();
                }];
              case "+":
                return [function () {
                  return _0x46ebe7() + _0x24fe79();
                }];
              case "-":
                return [function () {
                  return _0x46ebe7() - _0x24fe79();
                }];
              case "*":
                return [function () {
                  return _0x46ebe7() * _0x24fe79();
                }];
              case "/":
                return [function () {
                  return Math.floor(_0x46ebe7() / _0x24fe79());
                }];
            }
          }
          var _0x493678 = _0x54c929(_0x18b2b2[_0x397e41]);
          return [function () {
            return _0x493678;
          }];
        }(_0x3da4fb);
      }
      return _0x3da4fb[0];
    }
    for (; _0x42550b < _0x5a2427; ++_0x42550b) {
      var _0x610479 = _0x42550b;
      _0x42550b = _0x280d9d.indexOf("\n", _0x42550b);
      if (_0x42550b < 0) {
        _0x42550b = _0x5a2427;
      }
      for (var _0x5d7720 = _0x610479; _0x5d7720 < _0x42550b && _0x25c1ef(_0x280d9d, _0x5d7720); ++_0x5d7720);
      var _0x3b2be0 = _0x3bdcb2[_0x3bdcb2.length - 1];
      if (_0x280d9d[_0x5d7720] != "#") {
        if (_0x3b2be0) {
          _0x47abda += _0x5f5d34(_0x280d9d, _0x610479, _0x42550b) + "\n";
        }
        continue;
      }
      var _0x4764db = _0x5a2b3c(_0x280d9d, _0x5d7720);
      var _0x3876a7 = _0x280d9d.substring(_0x5d7720 + 1, _0x4764db);
      var _0xec0060 = _0x280d9d.substring(_0x4764db, _0x42550b).trim();
      switch (_0x3876a7) {
        case "if":
          var _0x168086 = _0x47d6a3(_0x5f5d34(_0xec0060, 0));
          var _0xcc40dc = _0x5a57db(_0x168086);
          var _0x275288 = _0xcc40dc();
          _0x3bdcb2.push(!!_0x275288 * _0x3bdcb2[_0x3bdcb2.length - 1]);
          break;
        case "ifdef":
          _0x3bdcb2.push(!!_0x4d421d[_0xec0060] * _0x3bdcb2[_0x3bdcb2.length - 1]);
          break;
        case "ifndef":
          _0x3bdcb2.push(!_0x4d421d[_0xec0060] * _0x3bdcb2[_0x3bdcb2.length - 1]);
          break;
        case "else":
          _0x3bdcb2[_0x3bdcb2.length - 1] = 1 - _0x3bdcb2[_0x3bdcb2.length - 1];
          break;
        case "endif":
          _0x3bdcb2.pop();
          break;
        case "define":
          if (_0x3b2be0) {
            var _0x516ec6 = _0xec0060.indexOf("(");
            var _0x4351bc = _0x5a2b3c(_0xec0060, 0);
            if (_0x4351bc < _0x516ec6) {
              _0x516ec6 = 0;
            }
            if (_0x516ec6 > 0) {
              var _0x33524f = _0xec0060.indexOf(")", _0x516ec6);
              let _0x5956d3 = _0xec0060.substring(_0x516ec6 + 1, _0x33524f).split(",").map(_0x12ae29 => _0x12ae29.trim());
              let _0x1adf3e = _0x47d6a3(_0xec0060.substring(_0x33524f + 1).trim());
              _0x4d421d[_0xec0060.substring(0, _0x516ec6)] = function (_0x20940b) {
                var _0x1eb980 = "";
                _0x1adf3e.forEach(_0x3d9ccd => {
                  var _0x4e9769 = _0x5956d3.indexOf(_0x3d9ccd);
                  _0x1eb980 += _0x4e9769 >= 0 ? _0x20940b[_0x4e9769] : _0x3d9ccd;
                });
                return _0x1eb980;
              };
            } else {
              let _0x35ac04 = _0x5f5d34(_0xec0060.substring(_0x4351bc + 1).trim(), 0);
              _0x4d421d[_0xec0060.substring(0, _0x4351bc)] = function () {
                return _0x35ac04;
              };
            }
          }
          break;
        case "undef":
          if (_0x3b2be0) {
            delete _0x4d421d[_0xec0060];
          }
          break;
        default:
          if (_0x3876a7 != "version" && _0x3876a7 != "pragma" && _0x3876a7 != "extension") {}
          _0x47abda += _0x5f5d34(_0x280d9d, _0x610479, _0x42550b) + "\n";
      }
    }
    return _0x47abda;
  }
  function _0x427c68(_0x154e55) {
    var _0x23c018 = 0;
    var _0x1bfafc = "";
    var _0x262281;
    var _0x399df9;
    var _0x3108f9 = _0x154e55.length;
    for (; _0x23c018 < _0x3108f9; ++_0x23c018) {
      _0x262281 = _0x154e55[_0x23c018];
      if (_0x262281 == "/") {
        _0x399df9 = _0x154e55[_0x23c018 + 1];
        if (_0x399df9 == "/") {
          while (_0x23c018 < _0x3108f9 && _0x154e55[_0x23c018 + 1] != "\n") {
            ++_0x23c018;
          }
        } else if (_0x399df9 == "*") {
          while (_0x23c018 < _0x3108f9 && (_0x154e55[_0x23c018 - 1] != "*" || _0x154e55[_0x23c018] != "/")) {
            ++_0x23c018;
          }
        } else {
          _0x1bfafc += _0x262281;
        }
      } else {
        _0x1bfafc += _0x262281;
      }
    }
    return _0x1bfafc;
  }
  function _0x197887(_0x44a373, _0x14eeda, _0x376e95, _0x472104) {
    var _0x30fbc5 = _0x21b49c.getSource(_0x44a373, _0x14eeda, _0x376e95, _0x472104);
    _0x30fbc5 = _0x42b531(_0x427c68(_0x30fbc5));
    var _0x495910 = /layout\s*\(\s*location\s*=\s*(-?\d+)\s*\)\s*(uniform\s+((lowp|mediump|highp)\s+)?\w+\s+(\w+))/g;
    var _0x3cd385 = {};
    var _0x373c41;
    while (_0x373c41 = _0x495910.exec(_0x30fbc5)) {
      _0x3cd385[_0x373c41[5]] = _0x54c929(_0x373c41[1]);
      if (!(_0x3cd385[_0x373c41[5]] >= 0) || !(_0x3cd385[_0x373c41[5]] < 1048576)) {
        console.error("Specified an out of range layout(location=x) directive \"" + _0x3cd385[_0x373c41[5]] + "\"! (" + _0x373c41[0] + ")");
        _0x21b49c.recordError(1281);
        return;
      }
    }
    _0x30fbc5 = _0x30fbc5.replace(_0x495910, "$2");
    _0x21b49c.shaders[_0x44a373].explicitUniformLocations = _0x3cd385;
    var _0xf2e1e0 = /layout\s*\(.*?binding\s*=\s*(-?\d+).*?\)\s*uniform\s+(\w+)\s+(\w+)?/g;
    var _0x585710 = {};
    var _0x26f741 = {};
    var _0x336511;
    while (_0x336511 = _0xf2e1e0.exec(_0x30fbc5)) {
      var _0x7e43c3 = 1;
      for (var _0x1d7d90 = _0x336511.index; _0x1d7d90 < _0x30fbc5.length && _0x30fbc5[_0x1d7d90] != ";"; ++_0x1d7d90) {
        if (_0x30fbc5[_0x1d7d90] == "[") {
          _0x7e43c3 = _0x54c929(_0x30fbc5.slice(_0x1d7d90 + 1));
          break;
        }
        if (_0x30fbc5[_0x1d7d90] == "{") {
          _0x1d7d90 = _0x482a0c(_0x30fbc5, _0x1d7d90, "{", "}") - 1;
        }
      }
      var _0x307d0f = _0x54c929(_0x336511[1]);
      var _0x278bfe = 34930;
      if (_0x336511[3] && _0x336511[2].indexOf("sampler") != -1) {
        _0x585710[_0x336511[3]] = [_0x307d0f, _0x7e43c3];
      } else {
        _0x278bfe = 35374;
        _0x26f741[_0x336511[2]] = [_0x307d0f, _0x7e43c3];
      }
      var _0x18d539 = _0xa64359.getParameter(_0x278bfe);
      if (!(_0x307d0f >= 0) || !(_0x307d0f + _0x7e43c3 <= _0x18d539)) {
        console.error("Specified an out of range layout(binding=x) directive \"" + _0x307d0f + "\"! (" + _0x336511[0] + "). Valid range is [0, " + _0x18d539 + "-1]");
        _0x21b49c.recordError(1281);
        return;
      }
    }
    _0x30fbc5 = _0x30fbc5.replace(/layout\s*\(.*?binding\s*=\s*([-\d]+).*?\)/g, "");
    _0x30fbc5 = _0x30fbc5.replace(/(layout\s*\((.*?)),\s*binding\s*=\s*([-\d]+)\)/g, "$1)");
    _0x30fbc5 = _0x30fbc5.replace(/layout\s*\(\s*binding\s*=\s*([-\d]+)\s*,(.*?)\)/g, "layout($2)");
    _0x21b49c.shaders[_0x44a373].explicitSamplerBindings = _0x585710;
    _0x21b49c.shaders[_0x44a373].explicitUniformBindings = _0x26f741;
    _0xa64359.shaderSource(_0x21b49c.shaders[_0x44a373], _0x30fbc5);
  }
  function _0x3b511b(_0x1ab517, _0x1d703b, _0x27fe23, _0x2a25bf) {
    _0xa64359.stencilFuncSeparate(_0x1ab517, _0x1d703b, _0x27fe23, _0x2a25bf);
  }
  function _0x1dc396(_0x6a1fbb) {
    _0xa64359.stencilMask(_0x6a1fbb);
  }
  function _0x5f25e0(_0x77269, _0xe4b56c, _0xcdcdc1, _0x421f7a) {
    _0xa64359.stencilOpSeparate(_0x77269, _0xe4b56c, _0xcdcdc1, _0x421f7a);
  }
  function _0x5d7423(_0x1d9edc, _0x280865, _0x1c436e, _0x22b30f, _0x5aace3, _0x4dd585, _0xc4eb50, _0x19ac14, _0x1a61d7) {
    if (_0x21b49c.currentContext.version >= 2) {
      if (_0xa64359.currentPixelUnpackBufferBinding) {
        _0xa64359.texImage2D(_0x1d9edc, _0x280865, _0x1c436e, _0x22b30f, _0x5aace3, _0x4dd585, _0xc4eb50, _0x19ac14, _0x1a61d7);
      } else if (_0x1a61d7) {
        var _0x19896c = _0x211200(_0x19ac14);
        _0xa64359.texImage2D(_0x1d9edc, _0x280865, _0x1c436e, _0x22b30f, _0x5aace3, _0x4dd585, _0xc4eb50, _0x19ac14, _0x19896c, _0x1a61d7 >> _0x1ea346(_0x19896c));
      } else {
        _0xa64359.texImage2D(_0x1d9edc, _0x280865, _0x1c436e, _0x22b30f, _0x5aace3, _0x4dd585, _0xc4eb50, _0x19ac14, null);
      }
      return;
    }
    _0xa64359.texImage2D(_0x1d9edc, _0x280865, _0x1c436e, _0x22b30f, _0x5aace3, _0x4dd585, _0xc4eb50, _0x19ac14, _0x1a61d7 ? _0x49db9(_0x19ac14, _0xc4eb50, _0x22b30f, _0x5aace3, _0x1a61d7, _0x1c436e) : null);
  }
  function _0x404591(_0x297ba4, _0xa76eab, _0x54d776, _0x2f4489, _0x43c381, _0x4d3584, _0x256df3, _0x4abac7, _0x578e73, _0x2b94d8) {
    if (_0xa64359.currentPixelUnpackBufferBinding) {
      _0xa64359.texImage3D(_0x297ba4, _0xa76eab, _0x54d776, _0x2f4489, _0x43c381, _0x4d3584, _0x256df3, _0x4abac7, _0x578e73, _0x2b94d8);
    } else if (_0x2b94d8) {
      var _0x2c28a1 = _0x211200(_0x578e73);
      _0xa64359.texImage3D(_0x297ba4, _0xa76eab, _0x54d776, _0x2f4489, _0x43c381, _0x4d3584, _0x256df3, _0x4abac7, _0x578e73, _0x2c28a1, _0x2b94d8 >> _0x1ea346(_0x2c28a1));
    } else {
      _0xa64359.texImage3D(_0x297ba4, _0xa76eab, _0x54d776, _0x2f4489, _0x43c381, _0x4d3584, _0x256df3, _0x4abac7, _0x578e73, null);
    }
  }
  function _0x3dc931(_0x517e8d, _0xe77c75, _0x771bc1) {
    _0xa64359.texParameterf(_0x517e8d, _0xe77c75, _0x771bc1);
  }
  function _0x46ca00(_0xd5c21b, _0x3985e4, _0x208926) {
    _0xa64359.texParameteri(_0xd5c21b, _0x3985e4, _0x208926);
  }
  function _0x1635b4(_0x565aac, _0x3d7075, _0xbd1ec4) {
    var _0x2e0ad5 = _0x2c669e[_0xbd1ec4 >> 2];
    _0xa64359.texParameteri(_0x565aac, _0x3d7075, _0x2e0ad5);
  }
  function _0x4b02cd(_0x53975f, _0xb19073, _0x4fd3b8, _0x8cc5f0, _0x34ec2d) {
    _0xa64359.texStorage2D(_0x53975f, _0xb19073, _0x4fd3b8, _0x8cc5f0, _0x34ec2d);
  }
  function _0x4adf60(_0x5e39c7, _0x307f5d, _0x4da8f6, _0x290177, _0x37d65b, _0x3d5349) {
    _0xa64359.texStorage3D(_0x5e39c7, _0x307f5d, _0x4da8f6, _0x290177, _0x37d65b, _0x3d5349);
  }
  function _0x205c48(_0x18c432, _0x22b394, _0x47b436, _0x4dc09f, _0x346707, _0x382c15, _0xaa805f, _0x3ac2d6, _0x34009c) {
    if (_0x21b49c.currentContext.version >= 2) {
      if (_0xa64359.currentPixelUnpackBufferBinding) {
        _0xa64359.texSubImage2D(_0x18c432, _0x22b394, _0x47b436, _0x4dc09f, _0x346707, _0x382c15, _0xaa805f, _0x3ac2d6, _0x34009c);
      } else if (_0x34009c) {
        var _0x49290a = _0x211200(_0x3ac2d6);
        _0xa64359.texSubImage2D(_0x18c432, _0x22b394, _0x47b436, _0x4dc09f, _0x346707, _0x382c15, _0xaa805f, _0x3ac2d6, _0x49290a, _0x34009c >> _0x1ea346(_0x49290a));
      } else {
        _0xa64359.texSubImage2D(_0x18c432, _0x22b394, _0x47b436, _0x4dc09f, _0x346707, _0x382c15, _0xaa805f, _0x3ac2d6, null);
      }
      return;
    }
    var _0x371b15 = null;
    if (_0x34009c) {
      _0x371b15 = _0x49db9(_0x3ac2d6, _0xaa805f, _0x346707, _0x382c15, _0x34009c, 0);
    }
    _0xa64359.texSubImage2D(_0x18c432, _0x22b394, _0x47b436, _0x4dc09f, _0x346707, _0x382c15, _0xaa805f, _0x3ac2d6, _0x371b15);
  }
  function _0x4bc50e(_0x1fbdc6, _0x2a216b, _0x383d18, _0x529fd3, _0x10d14b, _0x36db02, _0x22ebdd, _0x314f8b, _0x264c71, _0x3ec123, _0x2ac368) {
    if (_0xa64359.currentPixelUnpackBufferBinding) {
      _0xa64359.texSubImage3D(_0x1fbdc6, _0x2a216b, _0x383d18, _0x529fd3, _0x10d14b, _0x36db02, _0x22ebdd, _0x314f8b, _0x264c71, _0x3ec123, _0x2ac368);
    } else if (_0x2ac368) {
      var _0x20ccdb = _0x211200(_0x3ec123);
      _0xa64359.texSubImage3D(_0x1fbdc6, _0x2a216b, _0x383d18, _0x529fd3, _0x10d14b, _0x36db02, _0x22ebdd, _0x314f8b, _0x264c71, _0x3ec123, _0x20ccdb, _0x2ac368 >> _0x1ea346(_0x20ccdb));
    } else {
      _0xa64359.texSubImage3D(_0x1fbdc6, _0x2a216b, _0x383d18, _0x529fd3, _0x10d14b, _0x36db02, _0x22ebdd, _0x314f8b, _0x264c71, _0x3ec123, null);
    }
  }
  function _0x3b6c09(_0x588f8c, _0x5c84aa, _0x399eda, _0x49e91c) {
    _0x588f8c = _0x21b49c.programs[_0x588f8c];
    var _0x326e04 = [];
    for (var _0x31370e = 0; _0x31370e < _0x5c84aa; _0x31370e++) {
      _0x326e04.push(_0x432dbf(_0x2c669e[_0x399eda + _0x31370e * 4 >> 2]));
    }
    _0xa64359.transformFeedbackVaryings(_0x588f8c, _0x326e04, _0x49e91c);
  }
  var _0xb9d1c6 = [];
  function _0x2102f6(_0x395b96, _0x44ac42, _0x47c7f5) {
    if (_0x21b49c.currentContext.version >= 2) {
      _0xa64359.uniform1fv(_0x4404aa(_0x395b96), _0x36547e, _0x47c7f5 >> 2, _0x44ac42);
      return;
    }
    if (_0x44ac42 <= 288) {
      var _0x41871c = _0xb9d1c6[_0x44ac42 - 1];
      for (var _0xc5125c = 0; _0xc5125c < _0x44ac42; ++_0xc5125c) {
        _0x41871c[_0xc5125c] = _0x36547e[_0x47c7f5 + _0xc5125c * 4 >> 2];
      }
    } else {
      var _0x41871c = _0x36547e.subarray(_0x47c7f5 >> 2, _0x47c7f5 + _0x44ac42 * 4 >> 2);
    }
    _0xa64359.uniform1fv(_0x4404aa(_0x395b96), _0x41871c);
  }
  function _0x3b9353(_0x7d9898, _0x153f59) {
    _0xa64359.uniform1i(_0x4404aa(_0x7d9898), _0x153f59);
  }
  var _0x3ad8ab = [];
  function _0x43be12(_0x5a3a5d, _0x46532b, _0x1f395a) {
    if (_0x21b49c.currentContext.version >= 2) {
      _0xa64359.uniform1iv(_0x4404aa(_0x5a3a5d), _0x2c669e, _0x1f395a >> 2, _0x46532b);
      return;
    }
    if (_0x46532b <= 288) {
      var _0x7c35e8 = _0x3ad8ab[_0x46532b - 1];
      for (var _0x5c38b2 = 0; _0x5c38b2 < _0x46532b; ++_0x5c38b2) {
        _0x7c35e8[_0x5c38b2] = _0x2c669e[_0x1f395a + _0x5c38b2 * 4 >> 2];
      }
    } else {
      var _0x7c35e8 = _0x2c669e.subarray(_0x1f395a >> 2, _0x1f395a + _0x46532b * 4 >> 2);
    }
    _0xa64359.uniform1iv(_0x4404aa(_0x5a3a5d), _0x7c35e8);
  }
  function _0x5f45d6(_0x46dfa4, _0x33b69e, _0xfd7bc1) {
    _0xa64359.uniform1uiv(_0x4404aa(_0x46dfa4), _0x2a2a43, _0xfd7bc1 >> 2, _0x33b69e);
  }
  function _0x424ddb(_0x120c5a, _0x31d28f, _0x3b86c2) {
    if (_0x21b49c.currentContext.version >= 2) {
      _0xa64359.uniform2fv(_0x4404aa(_0x120c5a), _0x36547e, _0x3b86c2 >> 2, _0x31d28f * 2);
      return;
    }
    if (_0x31d28f <= 144) {
      var _0x1f239a = _0xb9d1c6[_0x31d28f * 2 - 1];
      for (var _0x201a3f = 0; _0x201a3f < _0x31d28f * 2; _0x201a3f += 2) {
        _0x1f239a[_0x201a3f] = _0x36547e[_0x3b86c2 + _0x201a3f * 4 >> 2];
        _0x1f239a[_0x201a3f + 1] = _0x36547e[_0x3b86c2 + (_0x201a3f * 4 + 4) >> 2];
      }
    } else {
      var _0x1f239a = _0x36547e.subarray(_0x3b86c2 >> 2, _0x3b86c2 + _0x31d28f * 8 >> 2);
    }
    _0xa64359.uniform2fv(_0x4404aa(_0x120c5a), _0x1f239a);
  }
  function _0x44bbc4(_0x19ccd2, _0x4d6205, _0x211f81) {
    if (_0x21b49c.currentContext.version >= 2) {
      _0xa64359.uniform2iv(_0x4404aa(_0x19ccd2), _0x2c669e, _0x211f81 >> 2, _0x4d6205 * 2);
      return;
    }
    if (_0x4d6205 <= 144) {
      var _0x1c7f13 = _0x3ad8ab[_0x4d6205 * 2 - 1];
      for (var _0x1ba9ae = 0; _0x1ba9ae < _0x4d6205 * 2; _0x1ba9ae += 2) {
        _0x1c7f13[_0x1ba9ae] = _0x2c669e[_0x211f81 + _0x1ba9ae * 4 >> 2];
        _0x1c7f13[_0x1ba9ae + 1] = _0x2c669e[_0x211f81 + (_0x1ba9ae * 4 + 4) >> 2];
      }
    } else {
      var _0x1c7f13 = _0x2c669e.subarray(_0x211f81 >> 2, _0x211f81 + _0x4d6205 * 8 >> 2);
    }
    _0xa64359.uniform2iv(_0x4404aa(_0x19ccd2), _0x1c7f13);
  }
  function _0x1ec750(_0x168c8d, _0x2f11ca, _0x2712db) {
    _0xa64359.uniform2uiv(_0x4404aa(_0x168c8d), _0x2a2a43, _0x2712db >> 2, _0x2f11ca * 2);
  }
  function _0x48479f(_0x27e7b4, _0x297cb3, _0x5aad4a) {
    if (_0x21b49c.currentContext.version >= 2) {
      _0xa64359.uniform3fv(_0x4404aa(_0x27e7b4), _0x36547e, _0x5aad4a >> 2, _0x297cb3 * 3);
      return;
    }
    if (_0x297cb3 <= 96) {
      var _0x328c98 = _0xb9d1c6[_0x297cb3 * 3 - 1];
      for (var _0x3e80de = 0; _0x3e80de < _0x297cb3 * 3; _0x3e80de += 3) {
        _0x328c98[_0x3e80de] = _0x36547e[_0x5aad4a + _0x3e80de * 4 >> 2];
        _0x328c98[_0x3e80de + 1] = _0x36547e[_0x5aad4a + (_0x3e80de * 4 + 4) >> 2];
        _0x328c98[_0x3e80de + 2] = _0x36547e[_0x5aad4a + (_0x3e80de * 4 + 8) >> 2];
      }
    } else {
      var _0x328c98 = _0x36547e.subarray(_0x5aad4a >> 2, _0x5aad4a + _0x297cb3 * 12 >> 2);
    }
    _0xa64359.uniform3fv(_0x4404aa(_0x27e7b4), _0x328c98);
  }
  function _0x3ec393(_0x2991b2, _0x8559eb, _0x239110) {
    if (_0x21b49c.currentContext.version >= 2) {
      _0xa64359.uniform3iv(_0x4404aa(_0x2991b2), _0x2c669e, _0x239110 >> 2, _0x8559eb * 3);
      return;
    }
    if (_0x8559eb <= 96) {
      var _0x86f9eb = _0x3ad8ab[_0x8559eb * 3 - 1];
      for (var _0x587395 = 0; _0x587395 < _0x8559eb * 3; _0x587395 += 3) {
        _0x86f9eb[_0x587395] = _0x2c669e[_0x239110 + _0x587395 * 4 >> 2];
        _0x86f9eb[_0x587395 + 1] = _0x2c669e[_0x239110 + (_0x587395 * 4 + 4) >> 2];
        _0x86f9eb[_0x587395 + 2] = _0x2c669e[_0x239110 + (_0x587395 * 4 + 8) >> 2];
      }
    } else {
      var _0x86f9eb = _0x2c669e.subarray(_0x239110 >> 2, _0x239110 + _0x8559eb * 12 >> 2);
    }
    _0xa64359.uniform3iv(_0x4404aa(_0x2991b2), _0x86f9eb);
  }
  function _0x11a3d1(_0x5c2912, _0x551723, _0x574f96) {
    _0xa64359.uniform3uiv(_0x4404aa(_0x5c2912), _0x2a2a43, _0x574f96 >> 2, _0x551723 * 3);
  }
  function _0x5412ff(_0x20f62b, _0x569e22, _0x899e61) {
    if (_0x21b49c.currentContext.version >= 2) {
      _0xa64359.uniform4fv(_0x4404aa(_0x20f62b), _0x36547e, _0x899e61 >> 2, _0x569e22 * 4);
      return;
    }
    if (_0x569e22 <= 72) {
      var _0x3034c4 = _0xb9d1c6[_0x569e22 * 4 - 1];
      var _0x2561f8 = _0x36547e;
      _0x899e61 >>= 2;
      for (var _0x3bc128 = 0; _0x3bc128 < _0x569e22 * 4; _0x3bc128 += 4) {
        var _0x233aa6 = _0x899e61 + _0x3bc128;
        _0x3034c4[_0x3bc128] = _0x2561f8[_0x233aa6];
        _0x3034c4[_0x3bc128 + 1] = _0x2561f8[_0x233aa6 + 1];
        _0x3034c4[_0x3bc128 + 2] = _0x2561f8[_0x233aa6 + 2];
        _0x3034c4[_0x3bc128 + 3] = _0x2561f8[_0x233aa6 + 3];
      }
    } else {
      var _0x3034c4 = _0x36547e.subarray(_0x899e61 >> 2, _0x899e61 + _0x569e22 * 16 >> 2);
    }
    _0xa64359.uniform4fv(_0x4404aa(_0x20f62b), _0x3034c4);
  }
  function _0x2ccf42(_0x371f12, _0x46e3fc, _0x3344b7) {
    if (_0x21b49c.currentContext.version >= 2) {
      _0xa64359.uniform4iv(_0x4404aa(_0x371f12), _0x2c669e, _0x3344b7 >> 2, _0x46e3fc * 4);
      return;
    }
    if (_0x46e3fc <= 72) {
      var _0x15c2ce = _0x3ad8ab[_0x46e3fc * 4 - 1];
      for (var _0x479bcd = 0; _0x479bcd < _0x46e3fc * 4; _0x479bcd += 4) {
        _0x15c2ce[_0x479bcd] = _0x2c669e[_0x3344b7 + _0x479bcd * 4 >> 2];
        _0x15c2ce[_0x479bcd + 1] = _0x2c669e[_0x3344b7 + (_0x479bcd * 4 + 4) >> 2];
        _0x15c2ce[_0x479bcd + 2] = _0x2c669e[_0x3344b7 + (_0x479bcd * 4 + 8) >> 2];
        _0x15c2ce[_0x479bcd + 3] = _0x2c669e[_0x3344b7 + (_0x479bcd * 4 + 12) >> 2];
      }
    } else {
      var _0x15c2ce = _0x2c669e.subarray(_0x3344b7 >> 2, _0x3344b7 + _0x46e3fc * 16 >> 2);
    }
    _0xa64359.uniform4iv(_0x4404aa(_0x371f12), _0x15c2ce);
  }
  function _0x3a5fd7(_0x447d12, _0x3ea368, _0xddd842) {
    _0xa64359.uniform4uiv(_0x4404aa(_0x447d12), _0x2a2a43, _0xddd842 >> 2, _0x3ea368 * 4);
  }
  function _0x3e644b(_0x4d9ebb, _0x109574, _0x4294f9) {
    _0x4d9ebb = _0x21b49c.programs[_0x4d9ebb];
    _0xa64359.uniformBlockBinding(_0x4d9ebb, _0x109574, _0x4294f9);
  }
  function _0x233418(_0x2acec1, _0x4a3e65, _0x327db8, _0x4a0f82) {
    if (_0x21b49c.currentContext.version >= 2) {
      _0xa64359.uniformMatrix3fv(_0x4404aa(_0x2acec1), !!_0x327db8, _0x36547e, _0x4a0f82 >> 2, _0x4a3e65 * 9);
      return;
    }
    if (_0x4a3e65 <= 32) {
      var _0xee9540 = _0xb9d1c6[_0x4a3e65 * 9 - 1];
      for (var _0x54f790 = 0; _0x54f790 < _0x4a3e65 * 9; _0x54f790 += 9) {
        _0xee9540[_0x54f790] = _0x36547e[_0x4a0f82 + _0x54f790 * 4 >> 2];
        _0xee9540[_0x54f790 + 1] = _0x36547e[_0x4a0f82 + (_0x54f790 * 4 + 4) >> 2];
        _0xee9540[_0x54f790 + 2] = _0x36547e[_0x4a0f82 + (_0x54f790 * 4 + 8) >> 2];
        _0xee9540[_0x54f790 + 3] = _0x36547e[_0x4a0f82 + (_0x54f790 * 4 + 12) >> 2];
        _0xee9540[_0x54f790 + 4] = _0x36547e[_0x4a0f82 + (_0x54f790 * 4 + 16) >> 2];
        _0xee9540[_0x54f790 + 5] = _0x36547e[_0x4a0f82 + (_0x54f790 * 4 + 20) >> 2];
        _0xee9540[_0x54f790 + 6] = _0x36547e[_0x4a0f82 + (_0x54f790 * 4 + 24) >> 2];
        _0xee9540[_0x54f790 + 7] = _0x36547e[_0x4a0f82 + (_0x54f790 * 4 + 28) >> 2];
        _0xee9540[_0x54f790 + 8] = _0x36547e[_0x4a0f82 + (_0x54f790 * 4 + 32) >> 2];
      }
    } else {
      var _0xee9540 = _0x36547e.subarray(_0x4a0f82 >> 2, _0x4a0f82 + _0x4a3e65 * 36 >> 2);
    }
    _0xa64359.uniformMatrix3fv(_0x4404aa(_0x2acec1), !!_0x327db8, _0xee9540);
  }
  function _0x21dc00(_0x58afa6, _0x3694c6, _0x5f21d8, _0x241ca3) {
    if (_0x21b49c.currentContext.version >= 2) {
      _0xa64359.uniformMatrix4fv(_0x4404aa(_0x58afa6), !!_0x5f21d8, _0x36547e, _0x241ca3 >> 2, _0x3694c6 * 16);
      return;
    }
    if (_0x3694c6 <= 18) {
      var _0x150ddf = _0xb9d1c6[_0x3694c6 * 16 - 1];
      var _0x2c0ede = _0x36547e;
      _0x241ca3 >>= 2;
      for (var _0x14919c = 0; _0x14919c < _0x3694c6 * 16; _0x14919c += 16) {
        var _0x5ee316 = _0x241ca3 + _0x14919c;
        _0x150ddf[_0x14919c] = _0x2c0ede[_0x5ee316];
        _0x150ddf[_0x14919c + 1] = _0x2c0ede[_0x5ee316 + 1];
        _0x150ddf[_0x14919c + 2] = _0x2c0ede[_0x5ee316 + 2];
        _0x150ddf[_0x14919c + 3] = _0x2c0ede[_0x5ee316 + 3];
        _0x150ddf[_0x14919c + 4] = _0x2c0ede[_0x5ee316 + 4];
        _0x150ddf[_0x14919c + 5] = _0x2c0ede[_0x5ee316 + 5];
        _0x150ddf[_0x14919c + 6] = _0x2c0ede[_0x5ee316 + 6];
        _0x150ddf[_0x14919c + 7] = _0x2c0ede[_0x5ee316 + 7];
        _0x150ddf[_0x14919c + 8] = _0x2c0ede[_0x5ee316 + 8];
        _0x150ddf[_0x14919c + 9] = _0x2c0ede[_0x5ee316 + 9];
        _0x150ddf[_0x14919c + 10] = _0x2c0ede[_0x5ee316 + 10];
        _0x150ddf[_0x14919c + 11] = _0x2c0ede[_0x5ee316 + 11];
        _0x150ddf[_0x14919c + 12] = _0x2c0ede[_0x5ee316 + 12];
        _0x150ddf[_0x14919c + 13] = _0x2c0ede[_0x5ee316 + 13];
        _0x150ddf[_0x14919c + 14] = _0x2c0ede[_0x5ee316 + 14];
        _0x150ddf[_0x14919c + 15] = _0x2c0ede[_0x5ee316 + 15];
      }
    } else {
      var _0x150ddf = _0x36547e.subarray(_0x241ca3 >> 2, _0x241ca3 + _0x3694c6 * 64 >> 2);
    }
    _0xa64359.uniformMatrix4fv(_0x4404aa(_0x58afa6), !!_0x5f21d8, _0x150ddf);
  }
  function _0x1001d8(_0xb89a76) {
    if (!_0x2e0a3a(_0xb89a76)) {
      _0x21b49c.recordError(1280);
      _0x500e9("GL_INVALID_ENUM in glUnmapBuffer");
      return 0;
    }
    var _0x5c82cf = _0x358133(_0xb89a76);
    var _0x4631b3 = _0x21b49c.mappedBuffers[_0x5c82cf];
    if (!_0x4631b3) {
      _0x21b49c.recordError(1282);
      _0x500e9("buffer was never mapped in glUnmapBuffer");
      return 0;
    }
    _0x21b49c.mappedBuffers[_0x5c82cf] = null;
    if (!(_0x4631b3.access & 16)) {
      if (_0x21b49c.currentContext.version >= 2) {
        _0xa64359.bufferSubData(_0xb89a76, _0x4631b3.offset, _0x353336, _0x4631b3.mem, _0x4631b3.length);
      } else {
        _0xa64359.bufferSubData(_0xb89a76, _0x4631b3.offset, _0x353336.subarray(_0x4631b3.mem, _0x4631b3.mem + _0x4631b3.length));
      }
    }
    _0x50622a(_0x4631b3.mem);
    return 1;
  }
  function _0x596946() {
    var _0x22ebae = _0xa64359.currentProgram;
    if (!_0x22ebae.explicitProgramBindingsApplied) {
      if (_0x21b49c.currentContext.version >= 2) {
        Object.keys(_0x22ebae.explicitUniformBindings).forEach(function (_0x235de4) {
          var _0x3e6b30 = _0x22ebae.explicitUniformBindings[_0x235de4];
          for (var _0x31b742 = 0; _0x31b742 < _0x3e6b30[1]; ++_0x31b742) {
            var _0x3b4439 = _0xa64359.getUniformBlockIndex(_0x22ebae, _0x235de4 + (_0x3e6b30[1] > 1 ? "[" + _0x31b742 + "]" : ""));
            _0xa64359.uniformBlockBinding(_0x22ebae, _0x3b4439, _0x3e6b30[0] + _0x31b742);
          }
        });
      }
      Object.keys(_0x22ebae.explicitSamplerBindings).forEach(function (_0x2c0656) {
        var _0x8e82b4 = _0x22ebae.explicitSamplerBindings[_0x2c0656];
        for (var _0x1b4e7c = 0; _0x1b4e7c < _0x8e82b4[1]; ++_0x1b4e7c) {
          _0xa64359.uniform1i(_0xa64359.getUniformLocation(_0x22ebae, _0x2c0656 + (_0x1b4e7c ? "[" + _0x1b4e7c + "]" : "")), _0x8e82b4[0] + _0x1b4e7c);
        }
      });
      _0x22ebae.explicitProgramBindingsApplied = 1;
    }
  }
  function _0x5e746c(_0x317cc8) {
    _0x317cc8 = _0x21b49c.programs[_0x317cc8];
    _0xa64359.useProgram(_0x317cc8);
    if (_0xa64359.currentProgram = _0x317cc8) {
      _0x596946();
    }
  }
  function _0x35cc11(_0x37080b) {
    _0xa64359.validateProgram(_0x21b49c.programs[_0x37080b]);
  }
  function _0x28f8e5(_0x1e32a5, _0x52c81d, _0x182585, _0x589d98, _0x36e3bb) {
    _0xa64359.vertexAttrib4f(_0x1e32a5, _0x52c81d, _0x182585, _0x589d98, _0x36e3bb);
  }
  function _0x2a02aa(_0x2f0ad2, _0x3a58dc) {
    _0xa64359.vertexAttrib4f(_0x2f0ad2, _0x36547e[_0x3a58dc >> 2], _0x36547e[_0x3a58dc + 4 >> 2], _0x36547e[_0x3a58dc + 8 >> 2], _0x36547e[_0x3a58dc + 12 >> 2]);
  }
  function _0x10a004(_0x449245, _0x56d3e3, _0x54d799, _0xae85ba, _0x39e66f) {
    var _0x1b150d = _0x21b49c.currentContext.clientBuffers[_0x449245];
    if (!_0xa64359.currentArrayBufferBinding) {
      _0x1b150d.size = _0x56d3e3;
      _0x1b150d.type = _0x54d799;
      _0x1b150d.normalized = false;
      _0x1b150d.stride = _0xae85ba;
      _0x1b150d.ptr = _0x39e66f;
      _0x1b150d.clientside = true;
      _0x1b150d.vertexAttribPointerAdaptor = function (_0x4ad3e8, _0x208ec0, _0x42ec9d, _0x52d9e4, _0x582320, _0x33e8da) {
        this.vertexAttribIPointer(_0x4ad3e8, _0x208ec0, _0x42ec9d, _0x582320, _0x33e8da);
      };
      return;
    }
    _0x1b150d.clientside = false;
    _0xa64359.vertexAttribIPointer(_0x449245, _0x56d3e3, _0x54d799, _0xae85ba, _0x39e66f);
  }
  function _0x307ea2(_0x107f2, _0x2f8df6, _0x519512, _0x3b575f, _0x54c08c, _0x4159c1) {
    var _0x5e1790 = _0x21b49c.currentContext.clientBuffers[_0x107f2];
    if (!_0xa64359.currentArrayBufferBinding) {
      _0x5e1790.size = _0x2f8df6;
      _0x5e1790.type = _0x519512;
      _0x5e1790.normalized = _0x3b575f;
      _0x5e1790.stride = _0x54c08c;
      _0x5e1790.ptr = _0x4159c1;
      _0x5e1790.clientside = true;
      _0x5e1790.vertexAttribPointerAdaptor = function (_0x2d03bc, _0x4087f2, _0x903294, _0x5026a1, _0x360318, _0x575b14) {
        this.vertexAttribPointer(_0x2d03bc, _0x4087f2, _0x903294, _0x5026a1, _0x360318, _0x575b14);
      };
      return;
    }
    _0x5e1790.clientside = false;
    _0xa64359.vertexAttribPointer(_0x107f2, _0x2f8df6, _0x519512, !!_0x3b575f, _0x54c08c, _0x4159c1);
  }
  function _0x3a382d(_0x5239db, _0x14781d, _0x39527c, _0x445065) {
    _0xa64359.viewport(_0x5239db, _0x14781d, _0x39527c, _0x445065);
  }
  function _0x508705(_0x5f6591) {
    return _0x5f6591;
  }
  function _0x2e02ae(_0x2a2ff1) {
    _0x58a30c();
    var _0x399eac = new Date(_0x2c669e[_0x2a2ff1 + 20 >> 2] + 1900, _0x2c669e[_0x2a2ff1 + 16 >> 2], _0x2c669e[_0x2a2ff1 + 12 >> 2], _0x2c669e[_0x2a2ff1 + 8 >> 2], _0x2c669e[_0x2a2ff1 + 4 >> 2], _0x2c669e[_0x2a2ff1 >> 2], 0);
    var _0x3fef55 = _0x2c669e[_0x2a2ff1 + 32 >> 2];
    var _0x5d0935 = _0x399eac.getTimezoneOffset();
    var _0x25460c = new Date(_0x399eac.getFullYear(), 0, 1);
    var _0x516c0e = new Date(_0x399eac.getFullYear(), 6, 1).getTimezoneOffset();
    var _0x1f5c4b = _0x25460c.getTimezoneOffset();
    var _0x133950 = Math.min(_0x1f5c4b, _0x516c0e);
    if (_0x3fef55 < 0) {
      _0x2c669e[_0x2a2ff1 + 32 >> 2] = Number(_0x516c0e != _0x1f5c4b && _0x133950 == _0x5d0935);
    } else if (_0x3fef55 > 0 != (_0x133950 == _0x5d0935)) {
      var _0x205f2b = Math.max(_0x1f5c4b, _0x516c0e);
      var _0x43cc54 = _0x3fef55 > 0 ? _0x133950 : _0x205f2b;
      _0x399eac.setTime(_0x399eac.getTime() + (_0x43cc54 - _0x5d0935) * 60000);
    }
    _0x2c669e[_0x2a2ff1 + 24 >> 2] = _0x399eac.getDay();
    var _0xe1c3f0 = (_0x399eac.getTime() - _0x25460c.getTime()) / 86400000 | 0;
    _0x2c669e[_0x2a2ff1 + 28 >> 2] = _0xe1c3f0;
    _0x2c669e[_0x2a2ff1 >> 2] = _0x399eac.getSeconds();
    _0x2c669e[_0x2a2ff1 + 4 >> 2] = _0x399eac.getMinutes();
    _0x2c669e[_0x2a2ff1 + 8 >> 2] = _0x399eac.getHours();
    _0x2c669e[_0x2a2ff1 + 12 >> 2] = _0x399eac.getDate();
    _0x2c669e[_0x2a2ff1 + 16 >> 2] = _0x399eac.getMonth();
    return _0x399eac.getTime() / 1000 | 0;
  }
  function _0x48e0b1(_0x4241c7) {
    _0x3d1c24(_0x4241c7);
  }
  function _0x6f61e5(_0x1d69ef) {
    return _0x1d69ef % 4 === 0 && (_0x1d69ef % 100 !== 0 || _0x1d69ef % 400 === 0);
  }
  function _0x2bb9b5(_0x59324c, _0x5226a6) {
    var _0x246852 = 0;
    for (var _0x52b44b = 0; _0x52b44b <= _0x5226a6; _0x246852 += _0x59324c[_0x52b44b++]) {}
    return _0x246852;
  }
  var _0x47cbf8 = [31, 29, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
  var _0xcfac2e = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
  function _0x392648(_0x50aa36, _0x3f8680) {
    var _0x1674ff = new Date(_0x50aa36.getTime());
    while (_0x3f8680 > 0) {
      var _0x5c6304 = _0x6f61e5(_0x1674ff.getFullYear());
      var _0x22588d = _0x1674ff.getMonth();
      var _0x435039 = (_0x5c6304 ? _0x47cbf8 : _0xcfac2e)[_0x22588d];
      if (_0x3f8680 > _0x435039 - _0x1674ff.getDate()) {
        _0x3f8680 -= _0x435039 - _0x1674ff.getDate() + 1;
        _0x1674ff.setDate(1);
        if (_0x22588d < 11) {
          _0x1674ff.setMonth(_0x22588d + 1);
        } else {
          _0x1674ff.setMonth(0);
          _0x1674ff.setFullYear(_0x1674ff.getFullYear() + 1);
        }
      } else {
        _0x1674ff.setDate(_0x1674ff.getDate() + _0x3f8680);
        return _0x1674ff;
      }
    }
    return _0x1674ff;
  }
  function _0x127bbf(_0xd66cea, _0x45cb95, _0x1b6f48, _0xa34679) {
    var _0x307d1b = _0x2c669e[_0xa34679 + 40 >> 2];
    var _0x3293d4 = {
      tm_sec: _0x2c669e[_0xa34679 >> 2],
      tm_min: _0x2c669e[_0xa34679 + 4 >> 2],
      tm_hour: _0x2c669e[_0xa34679 + 8 >> 2],
      tm_mday: _0x2c669e[_0xa34679 + 12 >> 2],
      tm_mon: _0x2c669e[_0xa34679 + 16 >> 2],
      tm_year: _0x2c669e[_0xa34679 + 20 >> 2],
      tm_wday: _0x2c669e[_0xa34679 + 24 >> 2],
      tm_yday: _0x2c669e[_0xa34679 + 28 >> 2],
      tm_isdst: _0x2c669e[_0xa34679 + 32 >> 2],
      tm_gmtoff: _0x2c669e[_0xa34679 + 36 >> 2],
      tm_zone: _0x307d1b ? _0x432dbf(_0x307d1b) : ""
    };
    var _0x5bc350 = _0x432dbf(_0x1b6f48);
    var _0x2b4a38 = {
      "%c": "%a %b %d %H:%M:%S %Y",
      "%D": "%m/%d/%y",
      "%F": "%Y-%m-%d",
      "%h": "%b",
      "%r": "%I:%M:%S %p",
      "%R": "%H:%M",
      "%T": "%H:%M:%S",
      "%x": "%m/%d/%y",
      "%X": "%H:%M:%S",
      "%Ec": "%c",
      "%EC": "%C",
      "%Ex": "%m/%d/%y",
      "%EX": "%H:%M:%S",
      "%Ey": "%y",
      "%EY": "%Y",
      "%Od": "%d",
      "%Oe": "%e",
      "%OH": "%H",
      "%OI": "%I",
      "%Om": "%m",
      "%OM": "%M",
      "%OS": "%S",
      "%Ou": "%u",
      "%OU": "%U",
      "%OV": "%V",
      "%Ow": "%w",
      "%OW": "%W",
      "%Oy": "%y"
    };
    for (var _0x3ab79b in _0x2b4a38) {
      _0x5bc350 = _0x5bc350.replace(new RegExp(_0x3ab79b, "g"), _0x2b4a38[_0x3ab79b]);
    }
    var _0x57dc7e = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    var _0x5e443f = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    function _0x4ae201(_0x48771e, _0x53d914, _0x23e881) {
      var _0x275650 = typeof _0x48771e === "number" ? _0x48771e.toString() : _0x48771e || "";
      while (_0x275650.length < _0x53d914) {
        _0x275650 = _0x23e881[0] + _0x275650;
      }
      return _0x275650;
    }
    function _0x133d89(_0xb0cfe6, _0x5c6ac2) {
      return _0x4ae201(_0xb0cfe6, _0x5c6ac2, "0");
    }
    function _0x5e78d6(_0x5eee8b, _0x33134e) {
      function _0x4bd897(_0x3d6247) {
        if (_0x3d6247 < 0) {
          return -1;
        } else if (_0x3d6247 > 0) {
          return 1;
        } else {
          return 0;
        }
      }
      var _0x344b5f;
      if ((_0x344b5f = _0x4bd897(_0x5eee8b.getFullYear() - _0x33134e.getFullYear())) === 0) {
        if ((_0x344b5f = _0x4bd897(_0x5eee8b.getMonth() - _0x33134e.getMonth())) === 0) {
          _0x344b5f = _0x4bd897(_0x5eee8b.getDate() - _0x33134e.getDate());
        }
      }
      return _0x344b5f;
    }
    function _0x4d5763(_0x529a22) {
      switch (_0x529a22.getDay()) {
        case 0:
          return new Date(_0x529a22.getFullYear() - 1, 11, 29);
        case 1:
          return _0x529a22;
        case 2:
          return new Date(_0x529a22.getFullYear(), 0, 3);
        case 3:
          return new Date(_0x529a22.getFullYear(), 0, 2);
        case 4:
          return new Date(_0x529a22.getFullYear(), 0, 1);
        case 5:
          return new Date(_0x529a22.getFullYear() - 1, 11, 31);
        case 6:
          return new Date(_0x529a22.getFullYear() - 1, 11, 30);
      }
    }
    function _0x260ac5(_0x28d1f8) {
      var _0x3c5717 = _0x392648(new Date(_0x28d1f8.tm_year + 1900, 0, 1), _0x28d1f8.tm_yday);
      var _0x19ff6f = new Date(_0x3c5717.getFullYear(), 0, 4);
      var _0x3e2535 = new Date(_0x3c5717.getFullYear() + 1, 0, 4);
      var _0x1212d1 = _0x4d5763(_0x19ff6f);
      var _0x51ca67 = _0x4d5763(_0x3e2535);
      if (_0x5e78d6(_0x1212d1, _0x3c5717) <= 0) {
        if (_0x5e78d6(_0x51ca67, _0x3c5717) <= 0) {
          return _0x3c5717.getFullYear() + 1;
        } else {
          return _0x3c5717.getFullYear();
        }
      } else {
        return _0x3c5717.getFullYear() - 1;
      }
    }
    var _0x3bfc40 = {
      "%a": function (_0x489185) {
        return _0x57dc7e[_0x489185.tm_wday].substring(0, 3);
      },
      "%A": function (_0x48d084) {
        return _0x57dc7e[_0x48d084.tm_wday];
      },
      "%b": function (_0x5336f1) {
        return _0x5e443f[_0x5336f1.tm_mon].substring(0, 3);
      },
      "%B": function (_0x41efb1) {
        return _0x5e443f[_0x41efb1.tm_mon];
      },
      "%C": function (_0x58f207) {
        var _0xa59fb5 = _0x58f207.tm_year + 1900;
        return _0x133d89(_0xa59fb5 / 100 | 0, 2);
      },
      "%d": function (_0x22b9e4) {
        return _0x133d89(_0x22b9e4.tm_mday, 2);
      },
      "%e": function (_0xf5745c) {
        return _0x4ae201(_0xf5745c.tm_mday, 2, " ");
      },
      "%g": function (_0x4f2434) {
        return _0x260ac5(_0x4f2434).toString().substring(2);
      },
      "%G": function (_0xf21581) {
        return _0x260ac5(_0xf21581);
      },
      "%H": function (_0x25d821) {
        return _0x133d89(_0x25d821.tm_hour, 2);
      },
      "%I": function (_0x20b0a5) {
        var _0x474ccd = _0x20b0a5.tm_hour;
        if (_0x474ccd == 0) {
          _0x474ccd = 12;
        } else if (_0x474ccd > 12) {
          _0x474ccd -= 12;
        }
        return _0x133d89(_0x474ccd, 2);
      },
      "%j": function (_0x43dd33) {
        return _0x133d89(_0x43dd33.tm_mday + _0x2bb9b5(_0x6f61e5(_0x43dd33.tm_year + 1900) ? _0x47cbf8 : _0xcfac2e, _0x43dd33.tm_mon - 1), 3);
      },
      "%m": function (_0x4eabf6) {
        return _0x133d89(_0x4eabf6.tm_mon + 1, 2);
      },
      "%M": function (_0x1b77ec) {
        return _0x133d89(_0x1b77ec.tm_min, 2);
      },
      "%n": function () {
        return "\n";
      },
      "%p": function (_0x40346b) {
        if (_0x40346b.tm_hour >= 0 && _0x40346b.tm_hour < 12) {
          return "AM";
        } else {
          return "PM";
        }
      },
      "%S": function (_0x32d7a7) {
        return _0x133d89(_0x32d7a7.tm_sec, 2);
      },
      "%t": function () {
        return "\t";
      },
      "%u": function (_0x2c08ec) {
        return _0x2c08ec.tm_wday || 7;
      },
      "%U": function (_0x39ae1e) {
        var _0x42faf5 = new Date(_0x39ae1e.tm_year + 1900, 0, 1);
        var _0x2e5f8b = _0x42faf5.getDay() === 0 ? _0x42faf5 : _0x392648(_0x42faf5, 7 - _0x42faf5.getDay());
        var _0xc49ec1 = new Date(_0x39ae1e.tm_year + 1900, _0x39ae1e.tm_mon, _0x39ae1e.tm_mday);
        if (_0x5e78d6(_0x2e5f8b, _0xc49ec1) < 0) {
          var _0x39f04a = _0x2bb9b5(_0x6f61e5(_0xc49ec1.getFullYear()) ? _0x47cbf8 : _0xcfac2e, _0xc49ec1.getMonth() - 1) - 31;
          var _0x422ac6 = 31 - _0x2e5f8b.getDate();
          var _0x1d2d13 = _0x422ac6 + _0x39f04a + _0xc49ec1.getDate();
          return _0x133d89(Math.ceil(_0x1d2d13 / 7), 2);
        }
        if (_0x5e78d6(_0x2e5f8b, _0x42faf5) === 0) {
          return "01";
        } else {
          return "00";
        }
      },
      "%V": function (_0x13ebae) {
        var _0x5ca729 = new Date(_0x13ebae.tm_year + 1900, 0, 4);
        var _0x5d262e = new Date(_0x13ebae.tm_year + 1901, 0, 4);
        var _0x3c2f66 = _0x4d5763(_0x5ca729);
        var _0x4c666a = _0x4d5763(_0x5d262e);
        var _0x38b85f = _0x392648(new Date(_0x13ebae.tm_year + 1900, 0, 1), _0x13ebae.tm_yday);
        if (_0x5e78d6(_0x38b85f, _0x3c2f66) < 0) {
          return "53";
        }
        if (_0x5e78d6(_0x4c666a, _0x38b85f) <= 0) {
          return "01";
        }
        var _0x533566;
        if (_0x3c2f66.getFullYear() < _0x13ebae.tm_year + 1900) {
          _0x533566 = _0x13ebae.tm_yday + 32 - _0x3c2f66.getDate();
        } else {
          _0x533566 = _0x13ebae.tm_yday + 1 - _0x3c2f66.getDate();
        }
        return _0x133d89(Math.ceil(_0x533566 / 7), 2);
      },
      "%w": function (_0x2b6d19) {
        return _0x2b6d19.tm_wday;
      },
      "%W": function (_0xfac8ec) {
        var _0x32665a = new Date(_0xfac8ec.tm_year, 0, 1);
        var _0xd30a1c = _0x32665a.getDay() === 1 ? _0x32665a : _0x392648(_0x32665a, _0x32665a.getDay() === 0 ? 1 : 7 - _0x32665a.getDay() + 1);
        var _0x197b8b = new Date(_0xfac8ec.tm_year + 1900, _0xfac8ec.tm_mon, _0xfac8ec.tm_mday);
        if (_0x5e78d6(_0xd30a1c, _0x197b8b) < 0) {
          var _0x4fedca = _0x2bb9b5(_0x6f61e5(_0x197b8b.getFullYear()) ? _0x47cbf8 : _0xcfac2e, _0x197b8b.getMonth() - 1) - 31;
          var _0x564a50 = 31 - _0xd30a1c.getDate();
          var _0x156db5 = _0x564a50 + _0x4fedca + _0x197b8b.getDate();
          return _0x133d89(Math.ceil(_0x156db5 / 7), 2);
        }
        if (_0x5e78d6(_0xd30a1c, _0x32665a) === 0) {
          return "01";
        } else {
          return "00";
        }
      },
      "%y": function (_0x3d094f) {
        return (_0x3d094f.tm_year + 1900).toString().substring(2);
      },
      "%Y": function (_0x254c0e) {
        return _0x254c0e.tm_year + 1900;
      },
      "%z": function (_0x388a31) {
        var _0xed4b27 = _0x388a31.tm_gmtoff;
        var _0x12f666 = _0xed4b27 >= 0;
        _0xed4b27 = Math.abs(_0xed4b27) / 60;
        _0xed4b27 = _0xed4b27 / 60 * 100 + _0xed4b27 % 60;
        return (_0x12f666 ? "+" : "-") + String("0000" + _0xed4b27).slice(-4);
      },
      "%Z": function (_0x308089) {
        return _0x308089.tm_zone;
      },
      "%%": function () {
        return "%";
      }
    };
    for (var _0x3ab79b in _0x3bfc40) {
      if (_0x5bc350.includes(_0x3ab79b)) {
        _0x5bc350 = _0x5bc350.replace(new RegExp(_0x3ab79b, "g"), _0x3bfc40[_0x3ab79b](_0x3293d4));
      }
    }
    var _0x3bac71 = _0x5dcb19(_0x5bc350, false);
    if (_0x3bac71.length > _0x45cb95) {
      return 0;
    }
    _0x5d45cb(_0x3bac71, _0xd66cea);
    return _0x3bac71.length - 1;
  }
  function _0x58b7fa(_0x5c437b) {
    var _0x28f34d = Date.now() / 1000 | 0;
    if (_0x5c437b) {
      _0x2c669e[_0x5c437b >> 2] = _0x28f34d;
    }
    return _0x28f34d;
  }
  function _0x11094c(_0x58b341, _0x4d3ebc) {
    _0x58b341 = _0x432dbf(_0x58b341);
    try {
      _0x1f58b9.utime(_0x58b341, _0x4d3ebc, _0x4d3ebc);
      return 0;
    } catch (_0x37d1ee) {
      if (!(_0x37d1ee instanceof _0x1f58b9.ErrnoError)) {
        throw _0x37d1ee + " : " + _0x1d8fda();
      }
      _0x1a4aeb(_0x37d1ee.errno);
      return -1;
    }
  }
  function _0x36460e(_0x155de9, _0x4e2bbd) {
    var _0x26fe8a;
    if (_0x4e2bbd) {
      _0x26fe8a = _0x2c669e[_0x4e2bbd + 4 >> 2] * 1000;
    } else {
      _0x26fe8a = Date.now();
    }
    return _0x11094c(_0x155de9, _0x26fe8a);
  }
  function _0x6f0c6a(_0x757ebd, _0x541d57, _0x41f63d, _0x3ffb21) {
    if (!_0x757ebd) {
      _0x757ebd = this;
    }
    this.parent = _0x757ebd;
    this.mount = _0x757ebd.mount;
    this.mounted = null;
    this.id = _0x1f58b9.nextInode++;
    this.name = _0x541d57;
    this.mode = _0x41f63d;
    this.node_ops = {};
    this.stream_ops = {};
    this.rdev = _0x3ffb21;
  }
  var _0x1f6de2 = 365;
  var _0x58f81c = 146;
  Object.defineProperties(_0x6f0c6a.prototype, {
    read: {
      get: function () {
        return (this.mode & _0x1f6de2) === _0x1f6de2;
      },
      set: function (_0x367071) {
        if (_0x367071) {
          this.mode |= _0x1f6de2;
        } else {
          this.mode &= ~_0x1f6de2;
        }
      }
    },
    write: {
      get: function () {
        return (this.mode & _0x58f81c) === _0x58f81c;
      },
      set: function (_0x47200b) {
        if (_0x47200b) {
          this.mode |= _0x58f81c;
        } else {
          this.mode &= ~_0x58f81c;
        }
      }
    },
    isFolder: {
      get: function () {
        return _0x1f58b9.isDir(this.mode);
      }
    },
    isDevice: {
      get: function () {
        return _0x1f58b9.isChrdev(this.mode);
      }
    }
  });
  _0x1f58b9.FSNode = _0x6f0c6a;
  _0x1f58b9.staticInit();
  _0x13e282.FS_createPath = _0x1f58b9.createPath;
  _0x13e282.FS_createDataFile = _0x1f58b9.createDataFile;
  _0x13e282.requestFullscreen = function _0x31150d(_0x120bd0, _0x127c7d) {
    _0x5e1b24.requestFullscreen(_0x120bd0, _0x127c7d);
  };
  _0x13e282.requestAnimationFrame = function _0x1a1ef6(_0x247878) {
    _0x5e1b24.requestAnimationFrame(_0x247878);
  };
  _0x13e282.setCanvasSize = function _0x9b4ed2(_0x16f41c, _0x4c83d5, _0x392155) {
    _0x5e1b24.setCanvasSize(_0x16f41c, _0x4c83d5, _0x392155);
  };
  _0x13e282.pauseMainLoop = function _0x2b4a33() {
    _0x5e1b24.mainLoop.pause();
  };
  _0x13e282.resumeMainLoop = function _0x408739() {
    _0x5e1b24.mainLoop.resume();
  };
  _0x13e282.getUserMedia = function _0x598cf5() {
    _0x5e1b24.getUserMedia();
  };
  _0x13e282.createContext = function _0x328f44(_0x17b7e8, _0x2479cb, _0x205834, _0x9ecb01) {
    return _0x5e1b24.createContext(_0x17b7e8, _0x2479cb, _0x205834, _0x9ecb01);
  };
  var _0xa64359;
  for (var _0x148d6d = 0; _0x148d6d < 32; ++_0x148d6d) {
    _0x150a65.push(new Array(_0x148d6d));
  }
  var _0x491cee = new Float32Array(288);
  for (var _0x148d6d = 0; _0x148d6d < 288; ++_0x148d6d) {
    _0xb9d1c6[_0x148d6d] = _0x491cee.subarray(0, _0x148d6d + 1);
  }
  var _0x194bc3 = new Int32Array(288);
  for (var _0x148d6d = 0; _0x148d6d < 288; ++_0x148d6d) {
    _0x3ad8ab[_0x148d6d] = _0x194bc3.subarray(0, _0x148d6d + 1);
  }
  function _0x5dcb19(_0x38feab, _0xa46012, _0x45db8f) {
    var _0x402fb8 = _0x45db8f > 0 ? _0x45db8f : _0x4bdf30(_0x38feab) + 1;
    var _0x3d3655 = new Array(_0x402fb8);
    var _0x24738f = _0x152d31(_0x38feab, _0x3d3655, 0, _0x3d3655.length);
    if (_0xa46012) {
      _0x3d3655.length = _0x24738f;
    }
    return _0x3d3655;
  }
  var _0xbc1906 = {
    Bj: _0x373948,
    xj: _0x4a460b,
    Dc: _0x3cdd8e,
    Li: _0x47c3b6,
    Xi: _0x1ac9ea,
    wi: _0x46b716,
    Yj: _0x3ca95a,
    Ji: _0x3f46b2,
    Ii: _0x2e16b6,
    Fi: _0x64715e,
    Hi: _0x28ec17,
    Gi: _0x3c55e2,
    zj: _0x483a19,
    yj: _0xa214a,
    Pj: _0x457e47,
    oj: _0x5dbf74,
    Jc: _0x3f4f26,
    ni: _0xf33f44,
    mi: _0x4003e9,
    Ac: _0x5906cb,
    Cc: _0x22be49,
    Bc: _0x18585e,
    ej: _0x1e4fcc,
    Bi: _0x553be8,
    Ai: _0xc9bc5b,
    qj: _0x504cdf,
    Ej: _0x1005ee,
    Dj: _0x248fa8,
    Ni: _0x402bde,
    Ei: _0x1265f5,
    Di: _0x224d2c,
    Oi: _0x21c0d4,
    Tj: _0x18af96,
    oi: _0x31f1db,
    ti: _0x125f8d,
    si: _0x56ea93,
    ri: _0x1dc292,
    dj: _0x4c39a1,
    cj: _0x2d4ff6,
    bj: _0x40ee9a,
    aj: _0x5df7f5,
    Ci: _0x14c204,
    xi: _0x121e18,
    vj: _0x12d3a0,
    Pi: _0x1aca73,
    pi: _0x12f6ee,
    af: _0x2cde5f,
    xb: _0x26eeac,
    wb: _0x509e1a,
    ff: _0x1e02d8,
    Ia: _0x4e15cb,
    Ha: _0x1a6b02,
    Ee: _0x3b7e9e,
    gf: _0x45aa3a,
    Ge: _0x5b4a31,
    we: _0x5e0cce,
    ba: _0x56f61c,
    Ye: _0x97b1f5,
    tb: _0x546d27,
    sb: _0x21aa6a,
    Ve: _0x5b2e0c,
    Xe: _0x58778c,
    rb: _0x283dfa,
    qb: _0x4a5087,
    Uc: _0x5337c1,
    Ze: _0x399075,
    vb: _0x54a036,
    ub: _0x3540c6,
    Fe: _0x132697,
    He: _0x22bd44,
    bf: _0x22bcc4,
    zb: _0x4c5a52,
    yb: _0x5c6521,
    Db: _0x3892fe,
    Ae: _0x4310e1,
    Ue: _0x1c1fc3,
    df: _0x43a99f,
    da: _0x19ac69,
    Kf: _0x3937d8,
    fa: _0x4ec72a,
    Ff: _0x3b2d09,
    Df: _0x2c06fe,
    Rb: _0x264d57,
    Ef: _0xb4aeec,
    La: _0x1efaaf,
    Ma: _0x235136,
    Eb: _0x519956,
    Hf: _0x5b7889,
    Bf: _0x404ffe,
    Cf: _0x320e85,
    Tb: _0x264d47,
    Sb: _0xf26928,
    na: _0x5168da,
    ea: _0x59a25c,
    Jf: _0x2894ea,
    If: _0x10b405,
    oa: _0x1a67f5,
    ha: _0x1f5cef,
    Qb: _0x4e6e9c,
    ib: _0x3b837a,
    pb: _0x19c651,
    jb: _0x22efc8,
    kb: _0x2cbb5f,
    nb: _0x456810,
    Je: _0x3b7583,
    Pb: _0x2bf7ba,
    hf: _0x5f02c8,
    mb: _0x5db62a,
    Te: _0xf0608e,
    qa: _0x381ad1,
    De: _0x152ddc,
    xf: _0x1531c9,
    uf: _0x1db2e6,
    vf: _0x5d7be5,
    wf: _0x5ee323,
    Ka: _0x52a467,
    qf: _0x52e3fb,
    sf: _0x2d0273,
    rf: _0x1f75bd,
    tf: _0x20c330,
    Mj: _0x366e93,
    Kj: _0x3d3c74,
    Ij: _0x129705,
    sj: _0x22403b,
    uj: _0x119a77,
    Oj: _0x3dd4b2,
    mj: _0x8ef649,
    lj: _0x278938,
    Gj: _0x10bff7,
    Uj: _0x533129,
    _a: _0x58a3ce,
    hj: _0x19aa6b,
    Sj: _0xf94990,
    Rj: _0x2f6a8c,
    ab: _0xc40e18,
    gj: _0x15ad10,
    fj: _0x9058a0,
    wj: _0x2e0220,
    Mi: _0x1546c0,
    Ki: _0x127d35,
    zi: _0x1ec4d6,
    $i: _0x4e7f7e,
    _i: _0xd6e8cc,
    Yi: _0x528ac6,
    Zi: _0x1a03d9,
    Cj: _0x2014a0,
    nj: _0x3ff141,
    ui: _0x3ff6fa,
    vi: _0x2d4fcd,
    yi: _0x395df1,
    Ic: _0x370ddf,
    Zj: _0x1d9cf9,
    Xj: _0x1baecd,
    Vj: _0x57e091,
    Wj: _0x15fe16,
    Lj: _0x2b3639,
    Jj: _0x196ae1,
    Hj: _0x2d072e,
    rj: _0x17a4a0,
    tj: _0x410531,
    Nj: _0x1fea87,
    qi: _0x18b6cc,
    Fj: _0x437d72,
    Aj: _0x4a73ae,
    Qj: _0x3e6f52,
    pj: _0x1ce9c2,
    Ui: _0x43b424,
    Wi: _0x415f6c,
    Gc: _0x321134,
    Ec: _0x4422bb,
    Fc: _0x81dabf,
    Vi: _0x5e681b,
    Qi: _0x426944,
    Ri: _0xf20014,
    Si: _0x332108,
    Ti: _0x400b47,
    bb: _0x31f4d6,
    fk: _0x50ff6a,
    Rc: _0x3e2b1f,
    dk: _0x414d2c,
    Sc: _0x1d9fa8,
    ak: _0x50c36e,
    ck: _0x1f55f1,
    bk: _0x4ead64,
    ek: _0x20b8fa,
    p: _0x2f4c19,
    h: _0x252b65,
    n: _0x5ee2d2,
    g: _0x2354a7,
    a: _0x48f584,
    Tc: _0xe083b0,
    $a: _0x1841ad,
    jd: _0x5af045,
    ca: _0x4adbc2,
    Xc: _0x40aa1c,
    Yc: _0x47262c,
    k: _0x8eff14,
    Oe: _0x3e982c,
    pf: _0x5c0bbc,
    We: _0x2e96aa,
    dg: _0x4da5fc,
    gd: _0x590038,
    Rf: _0x553b53,
    md: _0x283a96,
    Q: _0x14fcec,
    $g: _0x4c44ac,
    Lg: _0x46df8a,
    dd: _0x50b09e,
    ad: _0xaa0cd3,
    uc: _0x37d216,
    vc: _0x3f3052,
    od: _0x22ceba,
    $c: _0x3b5d90,
    Gf: _0x2e4bec,
    _f: _0x19f6f8,
    Pf: _0x48a49c,
    lb: _0x37efe9,
    yf: _0x47e15a,
    hd: _0x3342dc,
    cd: _0x604041,
    $e: _0x458aea,
    rd: _0x3d0641,
    Xa: _0x253b84,
    id: _0xb53e1b,
    Lf: _0x3946ca,
    di: _0x5694ed,
    cf: _0x3674a1,
    kd: _0x2ad788,
    ed: _0x53c010,
    bd: _0x3749e9,
    ld: _0x236ef9,
    ef: _0x224b94,
    _e: _0x487022,
    nd: _0x25e1a1,
    gb: _0x551b5c,
    lc: _0xbc54e7,
    Mf: _0x5d258f,
    Nf: _0xb73b78,
    qd: _0x2d3d26,
    fd: _0x35a613,
    x: _0x41b6f7,
    M: _0x5af6d8,
    _c: _0x1b12ea,
    db: _0x3f8a21,
    Wc: _0x4162a3,
    og: _0x25779f,
    sa: _0x253bc3,
    cc: _0x4b2176,
    zg: _0x59f270,
    Ja: _0x57aba7,
    Be: _0x4c181e,
    ye: _0x1f6424,
    Re: _0x50f891,
    Ke: _0x26c4d2,
    Ie: _0x14b131,
    Qe: _0xb3536b,
    Ab: _0x47c192,
    Zc: _0x17f688,
    J: _0x734f67,
    Bb: _0x328d9b,
    Ce: _0xcd47bd,
    lf: _0x4f285d,
    B: _0x41d558,
    E: _0x3f102c,
    gk: _0x14ccd7,
    Se: _0x409533,
    Le: _0x359dd1,
    hk: _0x36421c,
    Cb: _0x207f36,
    ob: _0x5f11fe,
    Ga: _0x522800,
    Ne: _0x47dc2b,
    Pe: _0x355224,
    Gb: _0x14b050,
    Fb: _0x668bd7,
    ve: _0xddab34,
    ka: _0x34d300,
    ia: _0x3cb041,
    ja: _0x4bcc09,
    ue: _0x3cc19a,
    xe: _0x220cd5,
    Nb: _0x2321c9,
    Mb: _0x32d65a,
    Ob: _0x3bbc1c,
    Me: _0x456916,
    Hb: _0x390ae9,
    Jb: _0x8a8688,
    Ib: _0x18b456,
    Kb: _0x2b191f,
    Lb: _0x470194,
    Vc: _0x2daeee,
    nf: _0x268c4b,
    mf: _0x85aca3,
    la: _0x908f3,
    kf: _0x2d2350,
    Qf: _0x15f826,
    ma: _0x3443d2,
    pe: _0x2e7541,
    ze: _0x212b00,
    z: _0x6f3024,
    Y: _0x142a0e,
    eg: _0x1be44f,
    fb: _0x15e9c5,
    te: _0x39235f,
    Ya: _0x36741c,
    pa: _0x178a9f,
    b: _0x2ad449,
    Md: _0x25d83b,
    zf: _0x312f66,
    Af: _0x4d9374,
    hb: _0x54a6ea,
    Of: _0x1a8954,
    Aa: _0x37e1c7,
    Wh: _0x5ab122,
    Th: _0x579862,
    Zb: _0x14ff45,
    Hg: _0x54527c,
    ya: _0x442ef7,
    Sh: _0xe6cc4b,
    fg: _0x5499ca,
    cg: _0x482561,
    Ph: _0x475d75,
    Qh: _0x136725,
    Yf: _0x4133ae,
    Rh: _0x2d4c8d,
    Ag: _0x230a99,
    Dg: _0xeab52d,
    rc: _0x53ef8e,
    sc: _0xcde7c2,
    tc: _0x357b10,
    rg: _0x414432,
    Nh: _0x194f47,
    Oh: _0x3f4c7f,
    Mh: _0x22d894,
    Ih: _0x16f592,
    Uf: _0xe8c158,
    Tf: _0xbc3ee5,
    Sf: _0x42d9c1,
    Jh: _0x23c4cd,
    Kh: _0x4b4a12,
    Lh: _0x4bb6b6,
    pd: _0x2e6c26,
    Za: _0x5e6164,
    Hh: _0x2560df,
    Fh: _0x45f2ac,
    tg: _0x4b769a,
    Gh: _0x3ba8e4,
    xg: _0x5f2604,
    ig: _0x13f4a1,
    Eh: _0x1db932,
    pc: _0x167fec,
    Dh: _0x6e878b,
    Ch: _0x2ed3fe,
    Bh: _0x2ed3d8,
    Ah: _0x3161a9,
    zh: _0x501789,
    yh: _0x587511,
    Ra: _0x58ac73,
    xh: _0x44f18c,
    Xf: _0x8ff9ea,
    wh: _0x11902e,
    Vb: _0xa98600,
    vh: _0x1fe01e,
    Bg: _0x5234f3,
    Fg: _0x539090,
    xa: _0x46e0d4,
    wa: _0x47c56f,
    uh: _0x3833b7,
    th: _0x142185,
    sh: _0x1910f8,
    ph: _0x10dacc,
    kg: _0x169ff2,
    hg: _0xd15650,
    qh: _0x4617c4,
    jg: _0x2d4dac,
    rh: _0x220fe7,
    oh: _0x3a24c5,
    _b: _0x4f6152,
    Ig: _0x295b80,
    Ub: _0x3cb1fa,
    lh: _0x87e608,
    mh: _0x57b09e,
    ng: _0x129070,
    R: _0x28eaa3,
    O: _0x3eeec5,
    ra: _0x5c1305,
    va: _0x4e44be,
    kh: _0xa8686e,
    gh: _0x357595,
    Yb: _0x59bb97,
    hh: _0x239e55,
    Wf: _0x50c5ae,
    jh: _0x54bc6c,
    Cg: _0x481608,
    Gg: _0x178fa4,
    ih: _0x220d29,
    ai: _0x11b27a,
    Wa: _0x28e2fe,
    Oa: _0xec2752,
    _: _0x5a3360,
    Z: _0x552111,
    $h: _0x55e53e,
    jf: _0x48a91b,
    fh: _0x5d6f17,
    eh: _0x4a3bcb,
    Vh: _0x56a724,
    za: _0x369eed,
    $f: _0x304163,
    Wb: _0x33830f,
    Yh: _0x511557,
    U: _0xc479a1,
    Kg: _0x5cd0b0,
    Jg: _0x5f5521,
    nh: _0x24ef21,
    ch: _0x14585e,
    oc: _0x3cd22,
    dh: _0x22898e,
    Xh: _0x1c911e,
    bh: _0x335f19,
    pg: _0x23fc72,
    ah: _0x4e49ef,
    ag: _0x2a8824,
    Na: _0x3e6a85,
    ga: _0x2622d7,
    nc: _0x51843c,
    _h: _0x3a1759,
    Qa: _0x509f47,
    Uh: _0x336ce0,
    Eg: _0x3a15ed,
    Zg: _0x32b8b3,
    lg: _0x15c6f7,
    _g: _0x901490,
    mc: _0x9ff76f,
    Xb: _0x3e1410,
    Vf: _0x2f5e1b,
    gg: _0x561871,
    aa: _0x4868bf,
    Yg: _0x346b88,
    qg: _0x3da0cd,
    Zf: _0x3c609a,
    Va: _0x4e4cc8,
    Wg: _0x197887,
    Xg: _0x3b511b,
    Ug: _0x1dc396,
    Vg: _0x5f25e0,
    Sg: _0x5d7423,
    vg: _0x404591,
    Tg: _0x3dc931,
    Ua: _0x46ca00,
    Rg: _0x1635b4,
    sg: _0x4b02cd,
    ug: _0x4adf60,
    Qg: _0x205c48,
    wg: _0x4bc50e,
    yg: _0x3b6c09,
    $b: _0x2102f6,
    ta: _0x3b9353,
    ac: _0x43be12,
    bc: _0x5f45d6,
    dc: _0x424ddb,
    ec: _0x44bbc4,
    fc: _0x1ec750,
    Ta: _0x48479f,
    gc: _0x3ec393,
    hc: _0x11a3d1,
    $: _0x5412ff,
    ic: _0x2ccf42,
    jc: _0x3a5fd7,
    Pa: _0x3e644b,
    kc: _0x233418,
    ua: _0x21dc00,
    mg: _0x1001d8,
    Mg: _0x5e746c,
    Zh: _0x35cc11,
    Ng: _0x28f8e5,
    Og: _0x2a02aa,
    bg: _0x10a004,
    Pg: _0x307ea2,
    Sa: _0x3a382d,
    Ba: _0x1c28cf,
    ei: _0x1c90a5,
    H: _0xe0dcc,
    N: _0x18674e,
    Lc: _0x20a3c6,
    Nc: _0xcf81a3,
    Sd: _0x527f3b,
    Oc: _0x803a51,
    xc: _0x12251a,
    W: _0x14f3f6,
    D: _0x2d3b9d,
    Kc: _0x8c141e,
    ii: _0x28e851,
    w: _0x287b22,
    Da: _0x542cda,
    Qc: _0x34a36a,
    d: _0x1ec127,
    $j: _0x20bee8,
    _j: _0x62cb7,
    c: _0x10c232,
    wc: _0x519fa6,
    i: _0x35b568,
    ci: _0xae1fa8,
    li: _0x34c3ed,
    bi: _0x16c84a,
    q: _0x167cb5,
    V: _0x38c905,
    ki: _0x2d4a0b,
    s: _0x34a786,
    u: _0x45f3e4,
    A: _0x153bf3,
    G: _0x248f47,
    P: _0x2b166c,
    yc: _0x5260f9,
    ji: _0x210a35,
    Gd: _0x56f99d,
    Ad: _0x2047f6,
    sd: _0x510562,
    Nd: _0x4f4929,
    re: _0x38a508,
    ne: _0x693668,
    oe: _0x812e68,
    ce: _0x48695f,
    Vd: _0x14bb33,
    Kd: _0x29749d,
    Id: _0xba410e,
    Bd: _0x5ca842,
    Jd: _0x3bfc60,
    ke: _0x519622,
    de: _0x141202,
    Xd: _0xd7a681,
    qe: _0x278ff1,
    fe: _0x2d0712,
    me: _0x48c246,
    Ud: _0x1761ff,
    le: _0x565f3e,
    $d: _0x15ebea,
    se: _0x27095a,
    td: _0x3d9954,
    ud: _0x5e3b88,
    Rd: _0x2aa2a4,
    be: _0x1446fc,
    _d: _0x2b3bbb,
    Cd: _0x27168d,
    Hd: _0x7390d8,
    Zd: _0x21df14,
    Qd: _0x349ecd,
    Yd: _0x545b37,
    e: _0x3c8833,
    l: _0x8499af,
    of: _0x4f8c37,
    y: _0x9eea7f,
    Mc: _0x5cc1c7,
    F: _0x18e95f,
    m: _0x364c9d,
    jj: _0x1b8092,
    Ea: _0x5b86e9,
    ij: _0x455067,
    qc: _0x4b6ce2,
    T: _0x557172,
    kj: _0x320aaa,
    K: _0x5e3904,
    f: _0x5e31e8,
    Hc: _0x16ff3d,
    o: _0xe0b981,
    fi: _0x1cafd7,
    r: _0x1ef5f2,
    t: _0xc6d128,
    C: _0x5b4539,
    hi: _0x20d7b8,
    gi: _0x553504,
    L: _0x2e2575,
    Ed: _0x5e3598,
    I: _0x3aa4b7,
    S: _0x71db8c,
    zc: _0x46fad0,
    Ca: _0x364181,
    Pc: _0x2e4801,
    yd: _0x52edfd,
    je: _0x433fa7,
    Dd: _0x5d533d,
    Pd: _0x65c800,
    Wd: _0x195d97,
    ie: _0x51c3fb,
    Ld: _0x793a5d,
    vd: _0x50d28a,
    Td: _0x14b711,
    ge: _0x2530c2,
    ae: _0x17c380,
    he: _0x52f532,
    ee: _0xeb2ffc,
    Od: _0xa81ed0,
    zd: _0x16360e,
    Fd: _0x5c2fe9,
    wd: _0x23d4e9,
    xd: _0x5aecc7,
    j: _0x508705,
    cb: _0x2e02ae,
    v: _0x48e0b1,
    Fa: _0x127bbf,
    X: _0x58b7fa,
    eb: _0x36460e
  };
  var _0x402641 = _0x3478d7();
  var _0x16f84c = _0x13e282.___wasm_call_ctors = function () {
    return (_0x16f84c = _0x13e282.___wasm_call_ctors = _0x13e282.asm.jk).apply(null, arguments);
  };
  var _0x526762 = _0x13e282._ReleaseKeys = function () {
    return (_0x526762 = _0x13e282._ReleaseKeys = _0x13e282.asm.kk).apply(null, arguments);
  };
  var _0x2c6edb = _0x13e282._SendMessageFloat = function () {
    return (_0x2c6edb = _0x13e282._SendMessageFloat = _0x13e282.asm.lk).apply(null, arguments);
  };
  var _0x44e3b9 = _0x13e282._SendMessageString = function () {
    return (_0x44e3b9 = _0x13e282._SendMessageString = _0x13e282.asm.mk).apply(null, arguments);
  };
  var _0x2070c6 = _0x13e282._SendMessage = function () {
    return (_0x2070c6 = _0x13e282._SendMessage = _0x13e282.asm.nk).apply(null, arguments);
  };
  var _0x43b6c7 = _0x13e282._SetFullscreen = function () {
    return (_0x43b6c7 = _0x13e282._SetFullscreen = _0x13e282.asm.ok).apply(null, arguments);
  };
  var _0x4d4fcf = _0x13e282._main = function () {
    return (_0x4d4fcf = _0x13e282._main = _0x13e282.asm.pk).apply(null, arguments);
  };
  var _0x5e98b4 = _0x13e282.___errno_location = function () {
    return (_0x5e98b4 = _0x13e282.___errno_location = _0x13e282.asm.qk).apply(null, arguments);
  };
  var _0x260c97 = _0x13e282._htonl = function () {
    return (_0x260c97 = _0x13e282._htonl = _0x13e282.asm.rk).apply(null, arguments);
  };
  var _0x170a10 = _0x13e282._htons = function () {
    return (_0x170a10 = _0x13e282._htons = _0x13e282.asm.sk).apply(null, arguments);
  };
  var _0x4104c9 = _0x13e282._ntohs = function () {
    return (_0x4104c9 = _0x13e282._ntohs = _0x13e282.asm.tk).apply(null, arguments);
  };
  var _0x53593a = _0x13e282.__get_tzname = function () {
    return (_0x53593a = _0x13e282.__get_tzname = _0x13e282.asm.uk).apply(null, arguments);
  };
  var _0x7ed08e = _0x13e282.__get_daylight = function () {
    return (_0x7ed08e = _0x13e282.__get_daylight = _0x13e282.asm.vk).apply(null, arguments);
  };
  var _0x232257 = _0x13e282.__get_timezone = function () {
    return (_0x232257 = _0x13e282.__get_timezone = _0x13e282.asm.wk).apply(null, arguments);
  };
  var _0x5b9f35 = _0x13e282.stackSave = function () {
    return (_0x5b9f35 = _0x13e282.stackSave = _0x13e282.asm.xk).apply(null, arguments);
  };
  var _0x50a678 = _0x13e282.stackRestore = function () {
    return (_0x50a678 = _0x13e282.stackRestore = _0x13e282.asm.yk).apply(null, arguments);
  };
  var _0x105630 = _0x13e282.stackAlloc = function () {
    return (_0x105630 = _0x13e282.stackAlloc = _0x13e282.asm.zk).apply(null, arguments);
  };
  var _0x1cd625 = _0x13e282._setThrew = function () {
    return (_0x1cd625 = _0x13e282._setThrew = _0x13e282.asm.Ak).apply(null, arguments);
  };
  var _0x227bdb = _0x13e282.___cxa_can_catch = function () {
    return (_0x227bdb = _0x13e282.___cxa_can_catch = _0x13e282.asm.Bk).apply(null, arguments);
  };
  var _0x3dddd1 = _0x13e282.___cxa_is_pointer_type = function () {
    return (_0x3dddd1 = _0x13e282.___cxa_is_pointer_type = _0x13e282.asm.Ck).apply(null, arguments);
  };
  var _0x45bc34 = _0x13e282._malloc = function () {
    return (_0x45bc34 = _0x13e282._malloc = _0x13e282.asm.Dk).apply(null, arguments);
  };
  var _0x50622a = _0x13e282._free = function () {
    return (_0x50622a = _0x13e282._free = _0x13e282.asm.Ek).apply(null, arguments);
  };
  var _0x65fb06 = _0x13e282._memalign = function () {
    return (_0x65fb06 = _0x13e282._memalign = _0x13e282.asm.Fk).apply(null, arguments);
  };
  var _0x2c2aa8 = _0x13e282._memset = function () {
    return (_0x2c2aa8 = _0x13e282._memset = _0x13e282.asm.Gk).apply(null, arguments);
  };
  var _0x10bda0 = _0x13e282._strlen = function () {
    return (_0x10bda0 = _0x13e282._strlen = _0x13e282.asm.Hk).apply(null, arguments);
  };
  var _0x440683 = _0x13e282.dynCall_iidiiii = function () {
    return (_0x440683 = _0x13e282.dynCall_iidiiii = _0x13e282.asm.Jk).apply(null, arguments);
  };
  var _0x2ceb05 = _0x13e282.dynCall_vii = function () {
    return (_0x2ceb05 = _0x13e282.dynCall_vii = _0x13e282.asm.Kk).apply(null, arguments);
  };
  var _0x4ba2f4 = _0x13e282.dynCall_iii = function () {
    return (_0x4ba2f4 = _0x13e282.dynCall_iii = _0x13e282.asm.Lk).apply(null, arguments);
  };
  var _0xeafeff = _0x13e282.dynCall_ii = function () {
    return (_0xeafeff = _0x13e282.dynCall_ii = _0x13e282.asm.Mk).apply(null, arguments);
  };
  var _0x3518f2 = _0x13e282.dynCall_iiii = function () {
    return (_0x3518f2 = _0x13e282.dynCall_iiii = _0x13e282.asm.Nk).apply(null, arguments);
  };
  var _0x1321d2 = _0x13e282.dynCall_jiji = function () {
    return (_0x1321d2 = _0x13e282.dynCall_jiji = _0x13e282.asm.Ok).apply(null, arguments);
  };
  var _0x3455a4 = _0x13e282.dynCall_vi = function () {
    return (_0x3455a4 = _0x13e282.dynCall_vi = _0x13e282.asm.Pk).apply(null, arguments);
  };
  var _0x5840c5 = _0x13e282.dynCall_iiiii = function () {
    return (_0x5840c5 = _0x13e282.dynCall_iiiii = _0x13e282.asm.Qk).apply(null, arguments);
  };
  var _0x5da989 = _0x13e282.dynCall_viii = function () {
    return (_0x5da989 = _0x13e282.dynCall_viii = _0x13e282.asm.Rk).apply(null, arguments);
  };
  var _0x448091 = _0x13e282.dynCall_viiiiii = function () {
    return (_0x448091 = _0x13e282.dynCall_viiiiii = _0x13e282.asm.Sk).apply(null, arguments);
  };
  var _0x645af6 = _0x13e282.dynCall_viiiii = function () {
    return (_0x645af6 = _0x13e282.dynCall_viiiii = _0x13e282.asm.Tk).apply(null, arguments);
  };
  var _0xe60e83 = _0x13e282.dynCall_viiii = function () {
    return (_0xe60e83 = _0x13e282.dynCall_viiii = _0x13e282.asm.Uk).apply(null, arguments);
  };
  var _0x1c7db8 = _0x13e282.dynCall_iiiiii = function () {
    return (_0x1c7db8 = _0x13e282.dynCall_iiiiii = _0x13e282.asm.Vk).apply(null, arguments);
  };
  var _0xd89f3e = _0x13e282.dynCall_iiij = function () {
    return (_0xd89f3e = _0x13e282.dynCall_iiij = _0x13e282.asm.Wk).apply(null, arguments);
  };
  var _0x5ec935 = _0x13e282.dynCall_v = function () {
    return (_0x5ec935 = _0x13e282.dynCall_v = _0x13e282.asm.Xk).apply(null, arguments);
  };
  var _0x4d45cd = _0x13e282.dynCall_i = function () {
    return (_0x4d45cd = _0x13e282.dynCall_i = _0x13e282.asm.Yk).apply(null, arguments);
  };
  var _0x52e25f = _0x13e282.dynCall_iiiiiiii = function () {
    return (_0x52e25f = _0x13e282.dynCall_iiiiiiii = _0x13e282.asm.Zk).apply(null, arguments);
  };
  var _0x34062d = _0x13e282.dynCall_iiijiii = function () {
    return (_0x34062d = _0x13e282.dynCall_iiijiii = _0x13e282.asm._k).apply(null, arguments);
  };
  var _0x26598a = _0x13e282.dynCall_iij = function () {
    return (_0x26598a = _0x13e282.dynCall_iij = _0x13e282.asm.$k).apply(null, arguments);
  };
  var _0x79f617 = _0x13e282.dynCall_iiiiiii = function () {
    return (_0x79f617 = _0x13e282.dynCall_iiiiiii = _0x13e282.asm.al).apply(null, arguments);
  };
  var _0xa215ca = _0x13e282.dynCall_jii = function () {
    return (_0xa215ca = _0x13e282.dynCall_jii = _0x13e282.asm.bl).apply(null, arguments);
  };
  var _0x45c966 = _0x13e282.dynCall_viiiiiii = function () {
    return (_0x45c966 = _0x13e282.dynCall_viiiiiii = _0x13e282.asm.cl).apply(null, arguments);
  };
  var _0x84fdf9 = _0x13e282.dynCall_viiji = function () {
    return (_0x84fdf9 = _0x13e282.dynCall_viiji = _0x13e282.asm.dl).apply(null, arguments);
  };
  var _0x29e109 = _0x13e282.dynCall_fii = function () {
    return (_0x29e109 = _0x13e282.dynCall_fii = _0x13e282.asm.el).apply(null, arguments);
  };
  var _0xa66a08 = _0x13e282.dynCall_viifi = function () {
    return (_0xa66a08 = _0x13e282.dynCall_viifi = _0x13e282.asm.fl).apply(null, arguments);
  };
  var _0x37a3e0 = _0x13e282.dynCall_viiff = function () {
    return (_0x37a3e0 = _0x13e282.dynCall_viiff = _0x13e282.asm.gl).apply(null, arguments);
  };
  var _0x3aa4bd = _0x13e282.dynCall_vijii = function () {
    return (_0x3aa4bd = _0x13e282.dynCall_vijii = _0x13e282.asm.hl).apply(null, arguments);
  };
  var _0x30bd5b = _0x13e282.dynCall_jiii = function () {
    return (_0x30bd5b = _0x13e282.dynCall_jiii = _0x13e282.asm.il).apply(null, arguments);
  };
  var _0x5b6a78 = _0x13e282.dynCall_diii = function () {
    return (_0x5b6a78 = _0x13e282.dynCall_diii = _0x13e282.asm.jl).apply(null, arguments);
  };
  var _0x318d40 = _0x13e282.dynCall_iijji = function () {
    return (_0x318d40 = _0x13e282.dynCall_iijji = _0x13e282.asm.kl).apply(null, arguments);
  };
  var _0x30d5d1 = _0x13e282.dynCall_iiddi = function () {
    return (_0x30d5d1 = _0x13e282.dynCall_iiddi = _0x13e282.asm.ll).apply(null, arguments);
  };
  var _0x2d1c6e = _0x13e282.dynCall_iiffi = function () {
    return (_0x2d1c6e = _0x13e282.dynCall_iiffi = _0x13e282.asm.ml).apply(null, arguments);
  };
  var _0x44e98f = _0x13e282.dynCall_ijji = function () {
    return (_0x44e98f = _0x13e282.dynCall_ijji = _0x13e282.asm.nl).apply(null, arguments);
  };
  var _0x222d41 = _0x13e282.dynCall_iiiiiiiii = function () {
    return (_0x222d41 = _0x13e282.dynCall_iiiiiiiii = _0x13e282.asm.ol).apply(null, arguments);
  };
  var _0x1cd856 = _0x13e282.dynCall_viiiiiiiii = function () {
    return (_0x1cd856 = _0x13e282.dynCall_viiiiiiiii = _0x13e282.asm.pl).apply(null, arguments);
  };
  var _0x120bae = _0x13e282.dynCall_jjji = function () {
    return (_0x120bae = _0x13e282.dynCall_jjji = _0x13e282.asm.ql).apply(null, arguments);
  };
  var _0x5562b3 = _0x13e282.dynCall_jiiji = function () {
    return (_0x5562b3 = _0x13e282.dynCall_jiiji = _0x13e282.asm.rl).apply(null, arguments);
  };
  var _0x580203 = _0x13e282.dynCall_ji = function () {
    return (_0x580203 = _0x13e282.dynCall_ji = _0x13e282.asm.sl).apply(null, arguments);
  };
  var _0x8a968b = _0x13e282.dynCall_dii = function () {
    return (_0x8a968b = _0x13e282.dynCall_dii = _0x13e282.asm.tl).apply(null, arguments);
  };
  var _0x573973 = _0x13e282.dynCall_viijiiijiiii = function () {
    return (_0x573973 = _0x13e282.dynCall_viijiiijiiii = _0x13e282.asm.ul).apply(null, arguments);
  };
  var _0x49e468 = _0x13e282.dynCall_ifi = function () {
    return (_0x49e468 = _0x13e282.dynCall_ifi = _0x13e282.asm.vl).apply(null, arguments);
  };
  var _0x512d32 = _0x13e282.dynCall_idi = function () {
    return (_0x512d32 = _0x13e282.dynCall_idi = _0x13e282.asm.wl).apply(null, arguments);
  };
  var _0x57443e = _0x13e282.dynCall_viiiiiiii = function () {
    return (_0x57443e = _0x13e282.dynCall_viiiiiiii = _0x13e282.asm.xl).apply(null, arguments);
  };
  var _0x13f306 = _0x13e282.dynCall_jiiii = function () {
    return (_0x13f306 = _0x13e282.dynCall_jiiii = _0x13e282.asm.yl).apply(null, arguments);
  };
  var _0x4fec5c = _0x13e282.dynCall_viiiiiiiiiiii = function () {
    return (_0x4fec5c = _0x13e282.dynCall_viiiiiiiiiiii = _0x13e282.asm.zl).apply(null, arguments);
  };
  var _0x1f4e7a = _0x13e282.dynCall_iiiiji = function () {
    return (_0x1f4e7a = _0x13e282.dynCall_iiiiji = _0x13e282.asm.Al).apply(null, arguments);
  };
  var _0x332e70 = _0x13e282.dynCall_viiiiiiiiiiiii = function () {
    return (_0x332e70 = _0x13e282.dynCall_viiiiiiiiiiiii = _0x13e282.asm.Bl).apply(null, arguments);
  };
  var _0x523e18 = _0x13e282.dynCall_viji = function () {
    return (_0x523e18 = _0x13e282.dynCall_viji = _0x13e282.asm.Cl).apply(null, arguments);
  };
  var _0x263d14 = _0x13e282.dynCall_vidi = function () {
    return (_0x263d14 = _0x13e282.dynCall_vidi = _0x13e282.asm.Dl).apply(null, arguments);
  };
  var _0x2b220e = _0x13e282.dynCall_vifi = function () {
    return (_0x2b220e = _0x13e282.dynCall_vifi = _0x13e282.asm.El).apply(null, arguments);
  };
  var _0x28eaa6 = _0x13e282.dynCall_fffi = function () {
    return (_0x28eaa6 = _0x13e282.dynCall_fffi = _0x13e282.asm.Fl).apply(null, arguments);
  };
  var _0x5b3192 = _0x13e282.dynCall_jji = function () {
    return (_0x5b3192 = _0x13e282.dynCall_jji = _0x13e282.asm.Gl).apply(null, arguments);
  };
  var _0x4d9835 = _0x13e282.dynCall_fiii = function () {
    return (_0x4d9835 = _0x13e282.dynCall_fiii = _0x13e282.asm.Hl).apply(null, arguments);
  };
  var _0xcb37a1 = _0x13e282.dynCall_diiii = function () {
    return (_0xcb37a1 = _0x13e282.dynCall_diiii = _0x13e282.asm.Il).apply(null, arguments);
  };
  var _0x100f85 = _0x13e282.dynCall_iidi = function () {
    return (_0x100f85 = _0x13e282.dynCall_iidi = _0x13e282.asm.Jl).apply(null, arguments);
  };
  var _0x548cfd = _0x13e282.dynCall_iifi = function () {
    return (_0x548cfd = _0x13e282.dynCall_iifi = _0x13e282.asm.Kl).apply(null, arguments);
  };
  var _0x1a482b = _0x13e282.dynCall_viiiiiiiiii = function () {
    return (_0x1a482b = _0x13e282.dynCall_viiiiiiiiii = _0x13e282.asm.Ll).apply(null, arguments);
  };
  var _0x554606 = _0x13e282.dynCall_dddi = function () {
    return (_0x554606 = _0x13e282.dynCall_dddi = _0x13e282.asm.Ml).apply(null, arguments);
  };
  var _0x211909 = _0x13e282.dynCall_viiij = function () {
    return (_0x211909 = _0x13e282.dynCall_viiij = _0x13e282.asm.Nl).apply(null, arguments);
  };
  var _0x2f34ae = _0x13e282.dynCall_viiffi = function () {
    return (_0x2f34ae = _0x13e282.dynCall_viiffi = _0x13e282.asm.Ol).apply(null, arguments);
  };
  var _0x48b593 = _0x13e282.dynCall_iiiifii = function () {
    return (_0x48b593 = _0x13e282.dynCall_iiiifii = _0x13e282.asm.Pl).apply(null, arguments);
  };
  var _0x3ea397 = _0x13e282.dynCall_iiifii = function () {
    return (_0x3ea397 = _0x13e282.dynCall_iiifii = _0x13e282.asm.Ql).apply(null, arguments);
  };
  var _0x58eef2 = _0x13e282.dynCall_viiiifii = function () {
    return (_0x58eef2 = _0x13e282.dynCall_viiiifii = _0x13e282.asm.Rl).apply(null, arguments);
  };
  var _0x5397fa = _0x13e282.dynCall_viiddi = function () {
    return (_0x5397fa = _0x13e282.dynCall_viiddi = _0x13e282.asm.Sl).apply(null, arguments);
  };
  var _0x5d0a52 = _0x13e282.dynCall_viidii = function () {
    return (_0x5d0a52 = _0x13e282.dynCall_viidii = _0x13e282.asm.Tl).apply(null, arguments);
  };
  var _0x3f2d65 = _0x13e282.dynCall_jdi = function () {
    return (_0x3f2d65 = _0x13e282.dynCall_jdi = _0x13e282.asm.Ul).apply(null, arguments);
  };
  var _0x25ecce = _0x13e282.dynCall_dji = function () {
    return (_0x25ecce = _0x13e282.dynCall_dji = _0x13e282.asm.Vl).apply(null, arguments);
  };
  var _0x396817 = _0x13e282.dynCall_vidiii = function () {
    return (_0x396817 = _0x13e282.dynCall_vidiii = _0x13e282.asm.Wl).apply(null, arguments);
  };
  var _0x3e9da7 = _0x13e282.dynCall_diiid = function () {
    return (_0x3e9da7 = _0x13e282.dynCall_diiid = _0x13e282.asm.Xl).apply(null, arguments);
  };
  var _0x1b0102 = _0x13e282.dynCall_jiiij = function () {
    return (_0x1b0102 = _0x13e282.dynCall_jiiij = _0x13e282.asm.Yl).apply(null, arguments);
  };
  var _0x4c3fbb = _0x13e282.dynCall_fiiif = function () {
    return (_0x4c3fbb = _0x13e282.dynCall_fiiif = _0x13e282.asm.Zl).apply(null, arguments);
  };
  var _0x52f861 = _0x13e282.dynCall_viiifi = function () {
    return (_0x52f861 = _0x13e282.dynCall_viiifi = _0x13e282.asm._l).apply(null, arguments);
  };
  var _0x21ee3b = _0x13e282.dynCall_iiiiiiiiii = function () {
    return (_0x21ee3b = _0x13e282.dynCall_iiiiiiiiii = _0x13e282.asm.$l).apply(null, arguments);
  };
  var _0x2e97f7 = _0x13e282.dynCall_jjii = function () {
    return (_0x2e97f7 = _0x13e282.dynCall_jjii = _0x13e282.asm.am).apply(null, arguments);
  };
  var _0xe7733f = _0x13e282.dynCall_viffffi = function () {
    return (_0xe7733f = _0x13e282.dynCall_viffffi = _0x13e282.asm.bm).apply(null, arguments);
  };
  var _0x3f2c1c = _0x13e282.dynCall_iiiifi = function () {
    return (_0x3f2c1c = _0x13e282.dynCall_iiiifi = _0x13e282.asm.cm).apply(null, arguments);
  };
  var _0x575bdb = _0x13e282.dynCall_iiiiidii = function () {
    return (_0x575bdb = _0x13e282.dynCall_iiiiidii = _0x13e282.asm.dm).apply(null, arguments);
  };
  var _0x788e5e = _0x13e282.dynCall_iiiiidi = function () {
    return (_0x788e5e = _0x13e282.dynCall_iiiiidi = _0x13e282.asm.em).apply(null, arguments);
  };
  var _0x47ae1e = _0x13e282.dynCall_viij = function () {
    return (_0x47ae1e = _0x13e282.dynCall_viij = _0x13e282.asm.fm).apply(null, arguments);
  };
  var _0x1061b4 = _0x13e282.dynCall_jidi = function () {
    return (_0x1061b4 = _0x13e282.dynCall_jidi = _0x13e282.asm.gm).apply(null, arguments);
  };
  var _0x4a5f67 = _0x13e282.dynCall_iijii = function () {
    return (_0x4a5f67 = _0x13e282.dynCall_iijii = _0x13e282.asm.hm).apply(null, arguments);
  };
  var _0x50b1e1 = _0x13e282.dynCall_iiji = function () {
    return (_0x50b1e1 = _0x13e282.dynCall_iiji = _0x13e282.asm.im).apply(null, arguments);
  };
  var _0x4596df = _0x13e282.dynCall_vijiii = function () {
    return (_0x4596df = _0x13e282.dynCall_vijiii = _0x13e282.asm.jm).apply(null, arguments);
  };
  var _0x4093a9 = _0x13e282.dynCall_ijiii = function () {
    return (_0x4093a9 = _0x13e282.dynCall_ijiii = _0x13e282.asm.km).apply(null, arguments);
  };
  var _0x31698b = _0x13e282.dynCall_viiijj = function () {
    return (_0x31698b = _0x13e282.dynCall_viiijj = _0x13e282.asm.lm).apply(null, arguments);
  };
  var _0x52329e = _0x13e282.dynCall_vifii = function () {
    return (_0x52329e = _0x13e282.dynCall_vifii = _0x13e282.asm.mm).apply(null, arguments);
  };
  var _0x29ea3b = _0x13e282.dynCall_viiiiiiiiifi = function () {
    return (_0x29ea3b = _0x13e282.dynCall_viiiiiiiiifi = _0x13e282.asm.nm).apply(null, arguments);
  };
  var _0x2d40c5 = _0x13e282.dynCall_iiiiiiiiiiiii = function () {
    return (_0x2d40c5 = _0x13e282.dynCall_iiiiiiiiiiiii = _0x13e282.asm.om).apply(null, arguments);
  };
  var _0xbe331c = _0x13e282.dynCall_fiiii = function () {
    return (_0xbe331c = _0x13e282.dynCall_fiiii = _0x13e282.asm.pm).apply(null, arguments);
  };
  var _0x383cbc = _0x13e282.dynCall_iiiiiiiiiiii = function () {
    return (_0x383cbc = _0x13e282.dynCall_iiiiiiiiiiii = _0x13e282.asm.qm).apply(null, arguments);
  };
  var _0x10ec3a = _0x13e282.dynCall_iiiiiiiiiiiiii = function () {
    return (_0x10ec3a = _0x13e282.dynCall_iiiiiiiiiiiiii = _0x13e282.asm.rm).apply(null, arguments);
  };
  var _0x8b0edc = _0x13e282.dynCall_iiiiiiiiiiiiiii = function () {
    return (_0x8b0edc = _0x13e282.dynCall_iiiiiiiiiiiiiii = _0x13e282.asm.sm).apply(null, arguments);
  };
  var _0x59c8de = _0x13e282.dynCall_iiiiiiiiiiiiiiii = function () {
    return (_0x59c8de = _0x13e282.dynCall_iiiiiiiiiiiiiiii = _0x13e282.asm.tm).apply(null, arguments);
  };
  var _0x45e66d = _0x13e282.dynCall_iiiiiiiiiiiiiiiii = function () {
    return (_0x45e66d = _0x13e282.dynCall_iiiiiiiiiiiiiiiii = _0x13e282.asm.um).apply(null, arguments);
  };
  var _0x301ee0 = _0x13e282.dynCall_iiiiiiiiiiiiiiiiii = function () {
    return (_0x301ee0 = _0x13e282.dynCall_iiiiiiiiiiiiiiiiii = _0x13e282.asm.vm).apply(null, arguments);
  };
  var _0x4a07cb = _0x13e282.dynCall_iiiiiiiiiiiiiiiiiii = function () {
    return (_0x4a07cb = _0x13e282.dynCall_iiiiiiiiiiiiiiiiiii = _0x13e282.asm.wm).apply(null, arguments);
  };
  var _0xaffac8 = _0x13e282.dynCall_fiifii = function () {
    return (_0xaffac8 = _0x13e282.dynCall_fiifii = _0x13e282.asm.xm).apply(null, arguments);
  };
  var _0x274fb8 = _0x13e282.dynCall_iji = function () {
    return (_0x274fb8 = _0x13e282.dynCall_iji = _0x13e282.asm.ym).apply(null, arguments);
  };
  var _0x4e527a = _0x13e282.dynCall_iiiiiiiiiii = function () {
    return (_0x4e527a = _0x13e282.dynCall_iiiiiiiiiii = _0x13e282.asm.zm).apply(null, arguments);
  };
  var _0x512ffd = _0x13e282.dynCall_viiiiiiiiiii = function () {
    return (_0x512ffd = _0x13e282.dynCall_viiiiiiiiiii = _0x13e282.asm.Am).apply(null, arguments);
  };
  var _0x3f4375 = _0x13e282.dynCall_iiijii = function () {
    return (_0x3f4375 = _0x13e282.dynCall_iiijii = _0x13e282.asm.Bm).apply(null, arguments);
  };
  var _0xb3629c = _0x13e282.dynCall_iijiiii = function () {
    return (_0xb3629c = _0x13e282.dynCall_iijiiii = _0x13e282.asm.Cm).apply(null, arguments);
  };
  var _0x3f4d2f = _0x13e282.dynCall_jijiii = function () {
    return (_0x3f4d2f = _0x13e282.dynCall_jijiii = _0x13e282.asm.Dm).apply(null, arguments);
  };
  var _0xe5cc34 = _0x13e282.dynCall_viijii = function () {
    return (_0xe5cc34 = _0x13e282.dynCall_viijii = _0x13e282.asm.Em).apply(null, arguments);
  };
  var _0x125fc3 = _0x13e282.dynCall_iijiiiiii = function () {
    return (_0x125fc3 = _0x13e282.dynCall_iijiiiiii = _0x13e282.asm.Fm).apply(null, arguments);
  };
  var _0x1324c7 = _0x13e282.dynCall_iijjiiiiii = function () {
    return (_0x1324c7 = _0x13e282.dynCall_iijjiiiiii = _0x13e282.asm.Gm).apply(null, arguments);
  };
  var _0x28b794 = _0x13e282.dynCall_iiiijjii = function () {
    return (_0x28b794 = _0x13e282.dynCall_iiiijjii = _0x13e282.asm.Hm).apply(null, arguments);
  };
  var _0x42f37d = _0x13e282.dynCall_iijiii = function () {
    return (_0x42f37d = _0x13e282.dynCall_iijiii = _0x13e282.asm.Im).apply(null, arguments);
  };
  var _0x36ec94 = _0x13e282.dynCall_j = function () {
    return (_0x36ec94 = _0x13e282.dynCall_j = _0x13e282.asm.Jm).apply(null, arguments);
  };
  var _0x343764 = _0x13e282.dynCall_jijj = function () {
    return (_0x343764 = _0x13e282.dynCall_jijj = _0x13e282.asm.Km).apply(null, arguments);
  };
  var _0x39fe92 = _0x13e282.dynCall_iiiiiiiiiji = function () {
    return (_0x39fe92 = _0x13e282.dynCall_iiiiiiiiiji = _0x13e282.asm.Lm).apply(null, arguments);
  };
  var _0xc1de9b = _0x13e282.dynCall_vji = function () {
    return (_0xc1de9b = _0x13e282.dynCall_vji = _0x13e282.asm.Mm).apply(null, arguments);
  };
  var _0xde4e55 = _0x13e282.dynCall_viijji = function () {
    return (_0xde4e55 = _0x13e282.dynCall_viijji = _0x13e282.asm.Nm).apply(null, arguments);
  };
  var _0x17527b = _0x13e282.dynCall_viiiiiiifiifiii = function () {
    return (_0x17527b = _0x13e282.dynCall_viiiiiiifiifiii = _0x13e282.asm.Om).apply(null, arguments);
  };
  var _0x246dde = _0x13e282.dynCall_viiiiiiifddfiii = function () {
    return (_0x246dde = _0x13e282.dynCall_viiiiiiifddfiii = _0x13e282.asm.Pm).apply(null, arguments);
  };
  var _0x463209 = _0x13e282.dynCall_viiiiiiifjjfiii = function () {
    return (_0x463209 = _0x13e282.dynCall_viiiiiiifjjfiii = _0x13e282.asm.Qm).apply(null, arguments);
  };
  var _0x205aff = _0x13e282.dynCall_viiiiiiiffffiii = function () {
    return (_0x205aff = _0x13e282.dynCall_viiiiiiiffffiii = _0x13e282.asm.Rm).apply(null, arguments);
  };
  var _0x5b9242 = _0x13e282.dynCall_fi = function () {
    return (_0x5b9242 = _0x13e282.dynCall_fi = _0x13e282.asm.Sm).apply(null, arguments);
  };
  var _0x59ff54 = _0x13e282.dynCall_iiifi = function () {
    return (_0x59ff54 = _0x13e282.dynCall_iiifi = _0x13e282.asm.Tm).apply(null, arguments);
  };
  var _0x376a7c = _0x13e282.dynCall_viiiifi = function () {
    return (_0x376a7c = _0x13e282.dynCall_viiiifi = _0x13e282.asm.Um).apply(null, arguments);
  };
  var _0x1a75ee = _0x13e282.dynCall_fiiffi = function () {
    return (_0x1a75ee = _0x13e282.dynCall_fiiffi = _0x13e282.asm.Vm).apply(null, arguments);
  };
  var _0x50837f = _0x13e282.dynCall_viiififii = function () {
    return (_0x50837f = _0x13e282.dynCall_viiififii = _0x13e282.asm.Wm).apply(null, arguments);
  };
  var _0x445e51 = _0x13e282.dynCall_fifi = function () {
    return (_0x445e51 = _0x13e282.dynCall_fifi = _0x13e282.asm.Xm).apply(null, arguments);
  };
  var _0x3761e8 = _0x13e282.dynCall_fiifi = function () {
    return (_0x3761e8 = _0x13e282.dynCall_fiifi = _0x13e282.asm.Ym).apply(null, arguments);
  };
  var _0x93b867 = _0x13e282.dynCall_jiiijii = function () {
    return (_0x93b867 = _0x13e282.dynCall_jiiijii = _0x13e282.asm.Zm).apply(null, arguments);
  };
  var _0x1b5939 = _0x13e282.dynCall_viiijiii = function () {
    return (_0x1b5939 = _0x13e282.dynCall_viiijiii = _0x13e282.asm._m).apply(null, arguments);
  };
  var _0x23f5c8 = _0x13e282.dynCall_viiidi = function () {
    return (_0x23f5c8 = _0x13e282.dynCall_viiidi = _0x13e282.asm.$m).apply(null, arguments);
  };
  var _0x274705 = _0x13e282.dynCall_viiiji = function () {
    return (_0x274705 = _0x13e282.dynCall_viiiji = _0x13e282.asm.an).apply(null, arguments);
  };
  var _0x2c92f3 = _0x13e282.dynCall_vijijii = function () {
    return (_0x2c92f3 = _0x13e282.dynCall_vijijii = _0x13e282.asm.bn).apply(null, arguments);
  };
  var _0x1338aa = _0x13e282.dynCall_ddiii = function () {
    return (_0x1338aa = _0x13e282.dynCall_ddiii = _0x13e282.asm.cn).apply(null, arguments);
  };
  var _0x4f9021 = _0x13e282.dynCall_viidi = function () {
    return (_0x4f9021 = _0x13e282.dynCall_viidi = _0x13e282.asm.dn).apply(null, arguments);
  };
  var _0x469a1b = _0x13e282.dynCall_viif = function () {
    return (_0x469a1b = _0x13e282.dynCall_viif = _0x13e282.asm.en).apply(null, arguments);
  };
  var _0x135289 = _0x13e282.dynCall_iiiiij = function () {
    return (_0x135289 = _0x13e282.dynCall_iiiiij = _0x13e282.asm.fn).apply(null, arguments);
  };
  var _0x50c352 = _0x13e282.dynCall_vijjji = function () {
    return (_0x50c352 = _0x13e282.dynCall_vijjji = _0x13e282.asm.gn).apply(null, arguments);
  };
  var _0x569117 = _0x13e282.dynCall_viiiijiii = function () {
    return (_0x569117 = _0x13e282.dynCall_viiiijiii = _0x13e282.asm.hn).apply(null, arguments);
  };
  var _0x11bb45 = _0x13e282.dynCall_viiiiiiiiiiiiii = function () {
    return (_0x11bb45 = _0x13e282.dynCall_viiiiiiiiiiiiii = _0x13e282.asm.jn).apply(null, arguments);
  };
  var _0x412559 = _0x13e282.dynCall_viiiiiiiiiiiiiii = function () {
    return (_0x412559 = _0x13e282.dynCall_viiiiiiiiiiiiiii = _0x13e282.asm.kn).apply(null, arguments);
  };
  var _0x2a816c = _0x13e282.dynCall_viiiiiiiiiiiiiiii = function () {
    return (_0x2a816c = _0x13e282.dynCall_viiiiiiiiiiiiiiii = _0x13e282.asm.ln).apply(null, arguments);
  };
  var _0x121507 = _0x13e282.dynCall_viiiiiiiiiiiiiiiii = function () {
    return (_0x121507 = _0x13e282.dynCall_viiiiiiiiiiiiiiiii = _0x13e282.asm.mn).apply(null, arguments);
  };
  var _0x2d9d00 = _0x13e282.dynCall_viiiiiiiiiiiiiiiiii = function () {
    return (_0x2d9d00 = _0x13e282.dynCall_viiiiiiiiiiiiiiiiii = _0x13e282.asm.nn).apply(null, arguments);
  };
  var _0x287c0e = _0x13e282.dynCall_viijiiiiii = function () {
    return (_0x287c0e = _0x13e282.dynCall_viijiiiiii = _0x13e282.asm.on).apply(null, arguments);
  };
  var _0x3c4208 = _0x13e282.dynCall_vjjjiiii = function () {
    return (_0x3c4208 = _0x13e282.dynCall_vjjjiiii = _0x13e282.asm.pn).apply(null, arguments);
  };
  var _0x5997d8 = _0x13e282.dynCall_vjiiiii = function () {
    return (_0x5997d8 = _0x13e282.dynCall_vjiiiii = _0x13e282.asm.qn).apply(null, arguments);
  };
  var _0x4df15f = _0x13e282.dynCall_jiiiiiiiiii = function () {
    return (_0x4df15f = _0x13e282.dynCall_jiiiiiiiiii = _0x13e282.asm.rn).apply(null, arguments);
  };
  var _0x413f19 = _0x13e282.dynCall_jiiiii = function () {
    return (_0x413f19 = _0x13e282.dynCall_jiiiii = _0x13e282.asm.sn).apply(null, arguments);
  };
  var _0x1c4019 = _0x13e282.dynCall_fiffffi = function () {
    return (_0x1c4019 = _0x13e282.dynCall_fiffffi = _0x13e282.asm.tn).apply(null, arguments);
  };
  var _0x206237 = _0x13e282.dynCall_iiiffi = function () {
    return (_0x206237 = _0x13e282.dynCall_iiiffi = _0x13e282.asm.un).apply(null, arguments);
  };
  var _0x2da470 = _0x13e282.dynCall_iifii = function () {
    return (_0x2da470 = _0x13e282.dynCall_iifii = _0x13e282.asm.vn).apply(null, arguments);
  };
  var _0x1007b2 = _0x13e282.dynCall_iiffii = function () {
    return (_0x1007b2 = _0x13e282.dynCall_iiffii = _0x13e282.asm.wn).apply(null, arguments);
  };
  var _0x36b5c5 = _0x13e282.dynCall_iiifiii = function () {
    return (_0x36b5c5 = _0x13e282.dynCall_iiifiii = _0x13e282.asm.xn).apply(null, arguments);
  };
  var _0x271e2e = _0x13e282.dynCall_iiififii = function () {
    return (_0x271e2e = _0x13e282.dynCall_iiififii = _0x13e282.asm.yn).apply(null, arguments);
  };
  var _0x14db89 = _0x13e282.dynCall_iiifiiiii = function () {
    return (_0x14db89 = _0x13e282.dynCall_iiifiiiii = _0x13e282.asm.zn).apply(null, arguments);
  };
  var _0x1308dd = _0x13e282.dynCall_iiffifiiii = function () {
    return (_0x1308dd = _0x13e282.dynCall_iiffifiiii = _0x13e282.asm.An).apply(null, arguments);
  };
  var _0x4b9c17 = _0x13e282.dynCall_iifiifiiii = function () {
    return (_0x4b9c17 = _0x13e282.dynCall_iifiifiiii = _0x13e282.asm.Bn).apply(null, arguments);
  };
  var _0x4788d3 = _0x13e282.dynCall_iiiifiii = function () {
    return (_0x4788d3 = _0x13e282.dynCall_iiiifiii = _0x13e282.asm.Cn).apply(null, arguments);
  };
  var _0x9d80ed = _0x13e282.dynCall_iiifiiii = function () {
    return (_0x9d80ed = _0x13e282.dynCall_iiifiiii = _0x13e282.asm.Dn).apply(null, arguments);
  };
  var _0x2b6b15 = _0x13e282.dynCall_iiiffiii = function () {
    return (_0x2b6b15 = _0x13e282.dynCall_iiiffiii = _0x13e282.asm.En).apply(null, arguments);
  };
  var _0xe2b91e = _0x13e282.dynCall_iiiiifii = function () {
    return (_0xe2b91e = _0x13e282.dynCall_iiiiifii = _0x13e282.asm.Fn).apply(null, arguments);
  };
  var _0x46153b = _0x13e282.dynCall_iifiifffii = function () {
    return (_0x46153b = _0x13e282.dynCall_iifiifffii = _0x13e282.asm.Gn).apply(null, arguments);
  };
  var _0x29ceb7 = _0x13e282.dynCall_vififii = function () {
    return (_0x29ceb7 = _0x13e282.dynCall_vififii = _0x13e282.asm.Hn).apply(null, arguments);
  };
  var _0x194383 = _0x13e282.dynCall_viidjiiiiiiiiii = function () {
    return (_0x194383 = _0x13e282.dynCall_viidjiiiiiiiiii = _0x13e282.asm.In).apply(null, arguments);
  };
  var _0x47c806 = _0x13e282.dynCall_iiiiffi = function () {
    return (_0x47c806 = _0x13e282.dynCall_iiiiffi = _0x13e282.asm.Jn).apply(null, arguments);
  };
  var _0x42110b = _0x13e282.dynCall_viifdi = function () {
    return (_0x42110b = _0x13e282.dynCall_viifdi = _0x13e282.asm.Kn).apply(null, arguments);
  };
  var _0x2c7887 = _0x13e282.dynCall_viffi = function () {
    return (_0x2c7887 = _0x13e282.dynCall_viffi = _0x13e282.asm.Ln).apply(null, arguments);
  };
  var _0x125231 = _0x13e282.dynCall_iifffi = function () {
    return (_0x125231 = _0x13e282.dynCall_iifffi = _0x13e282.asm.Mn).apply(null, arguments);
  };
  var _0xc560ce = _0x13e282.dynCall_vifiiii = function () {
    return (_0xc560ce = _0x13e282.dynCall_vifiiii = _0x13e282.asm.Nn).apply(null, arguments);
  };
  var _0x369ff4 = _0x13e282.dynCall_difi = function () {
    return (_0x369ff4 = _0x13e282.dynCall_difi = _0x13e282.asm.On).apply(null, arguments);
  };
  var _0x2eafbb = _0x13e282.dynCall_difidi = function () {
    return (_0x2eafbb = _0x13e282.dynCall_difidi = _0x13e282.asm.Pn).apply(null, arguments);
  };
  var _0x4f4a8c = _0x13e282.dynCall_vidii = function () {
    return (_0x4f4a8c = _0x13e282.dynCall_vidii = _0x13e282.asm.Qn).apply(null, arguments);
  };
  var _0x5e4b58 = _0x13e282.dynCall_viiiijii = function () {
    return (_0x5e4b58 = _0x13e282.dynCall_viiiijii = _0x13e282.asm.Rn).apply(null, arguments);
  };
  var _0x49a7ba = _0x13e282.dynCall_fifiii = function () {
    return (_0x49a7ba = _0x13e282.dynCall_fifiii = _0x13e282.asm.Sn).apply(null, arguments);
  };
  var _0x283b1c = _0x13e282.dynCall_vifiii = function () {
    return (_0x283b1c = _0x13e282.dynCall_vifiii = _0x13e282.asm.Tn).apply(null, arguments);
  };
  var _0x1703dc = _0x13e282.dynCall_viffiii = function () {
    return (_0x1703dc = _0x13e282.dynCall_viffiii = _0x13e282.asm.Un).apply(null, arguments);
  };
  var _0x4864a2 = _0x13e282.dynCall_iffii = function () {
    return (_0x4864a2 = _0x13e282.dynCall_iffii = _0x13e282.asm.Vn).apply(null, arguments);
  };
  var _0x1cbf1b = _0x13e282.dynCall_fifii = function () {
    return (_0x1cbf1b = _0x13e282.dynCall_fifii = _0x13e282.asm.Wn).apply(null, arguments);
  };
  var _0x35c6cb = _0x13e282.dynCall_viifii = function () {
    return (_0x35c6cb = _0x13e282.dynCall_viifii = _0x13e282.asm.Xn).apply(null, arguments);
  };
  var _0x234c44 = _0x13e282.dynCall_iiidi = function () {
    return (_0x234c44 = _0x13e282.dynCall_iiidi = _0x13e282.asm.Yn).apply(null, arguments);
  };
  var _0x7e86ec = _0x13e282.dynCall_vfi = function () {
    return (_0x7e86ec = _0x13e282.dynCall_vfi = _0x13e282.asm.Zn).apply(null, arguments);
  };
  var _0x593818 = _0x13e282.dynCall_iiiiiffi = function () {
    return (_0x593818 = _0x13e282.dynCall_iiiiiffi = _0x13e282.asm._n).apply(null, arguments);
  };
  var _0x11f611 = _0x13e282.dynCall_viiiiiiifiii = function () {
    return (_0x11f611 = _0x13e282.dynCall_viiiiiiifiii = _0x13e282.asm.$n).apply(null, arguments);
  };
  var _0x5cae5e = _0x13e282.dynCall_fiiifii = function () {
    return (_0x5cae5e = _0x13e282.dynCall_fiiifii = _0x13e282.asm.ao).apply(null, arguments);
  };
  var _0x3a81d5 = _0x13e282.dynCall_fiffi = function () {
    return (_0x3a81d5 = _0x13e282.dynCall_fiffi = _0x13e282.asm.bo).apply(null, arguments);
  };
  var _0xbda7b7 = _0x13e282.dynCall_iiifffii = function () {
    return (_0xbda7b7 = _0x13e282.dynCall_iiifffii = _0x13e282.asm.co).apply(null, arguments);
  };
  var _0x4a93e6 = _0x13e282.dynCall_fiiifi = function () {
    return (_0x4a93e6 = _0x13e282.dynCall_fiiifi = _0x13e282.asm.eo).apply(null, arguments);
  };
  var _0x2b2211 = _0x13e282.dynCall_viiiiffii = function () {
    return (_0x2b2211 = _0x13e282.dynCall_viiiiffii = _0x13e282.asm.fo).apply(null, arguments);
  };
  var _0x12f29c = _0x13e282.dynCall_viiiiifffi = function () {
    return (_0x12f29c = _0x13e282.dynCall_viiiiifffi = _0x13e282.asm.go).apply(null, arguments);
  };
  var _0x113549 = _0x13e282.dynCall_iiiiifi = function () {
    return (_0x113549 = _0x13e282.dynCall_iiiiifi = _0x13e282.asm.ho).apply(null, arguments);
  };
  var _0x475226 = _0x13e282.dynCall_viiifffi = function () {
    return (_0x475226 = _0x13e282.dynCall_viiifffi = _0x13e282.asm.io).apply(null, arguments);
  };
  var _0x2d6043 = _0x13e282.dynCall_viiiffi = function () {
    return (_0x2d6043 = _0x13e282.dynCall_viiiffi = _0x13e282.asm.jo).apply(null, arguments);
  };
  var _0x9637c7 = _0x13e282.dynCall_fifiiiii = function () {
    return (_0x9637c7 = _0x13e282.dynCall_fifiiiii = _0x13e282.asm.ko).apply(null, arguments);
  };
  var _0x7890c9 = _0x13e282.dynCall_ffi = function () {
    return (_0x7890c9 = _0x13e282.dynCall_ffi = _0x13e282.asm.lo).apply(null, arguments);
  };
  var _0x15be70 = _0x13e282.dynCall_viifiii = function () {
    return (_0x15be70 = _0x13e282.dynCall_viifiii = _0x13e282.asm.mo).apply(null, arguments);
  };
  var _0x9d2894 = _0x13e282.dynCall_vifiiiii = function () {
    return (_0x9d2894 = _0x13e282.dynCall_vifiiiii = _0x13e282.asm.no).apply(null, arguments);
  };
  var _0x8d2b4f = _0x13e282.dynCall_viffiifffiii = function () {
    return (_0x8d2b4f = _0x13e282.dynCall_viffiifffiii = _0x13e282.asm.oo).apply(null, arguments);
  };
  var _0x31faf8 = _0x13e282.dynCall_ffffffi = function () {
    return (_0x31faf8 = _0x13e282.dynCall_ffffffi = _0x13e282.asm.po).apply(null, arguments);
  };
  var _0x4c7cd1 = _0x13e282.dynCall_viiiiiifi = function () {
    return (_0x4c7cd1 = _0x13e282.dynCall_viiiiiifi = _0x13e282.asm.qo).apply(null, arguments);
  };
  var _0x10488e = _0x13e282.dynCall_viiiiffi = function () {
    return (_0x10488e = _0x13e282.dynCall_viiiiffi = _0x13e282.asm.ro).apply(null, arguments);
  };
  var _0x3142a0 = _0x13e282.dynCall_fiiiiii = function () {
    return (_0x3142a0 = _0x13e282.dynCall_fiiiiii = _0x13e282.asm.so).apply(null, arguments);
  };
  var _0x1b17c1 = _0x13e282.dynCall_fifffi = function () {
    return (_0x1b17c1 = _0x13e282.dynCall_fifffi = _0x13e282.asm.to).apply(null, arguments);
  };
  var _0x54ae16 = _0x13e282.dynCall_viffiiiii = function () {
    return (_0x54ae16 = _0x13e282.dynCall_viffiiiii = _0x13e282.asm.uo).apply(null, arguments);
  };
  var _0x239f1b = _0x13e282.dynCall_vifffffi = function () {
    return (_0x239f1b = _0x13e282.dynCall_vifffffi = _0x13e282.asm.vo).apply(null, arguments);
  };
  var _0x208c70 = _0x13e282.dynCall_iifiifiii = function () {
    return (_0x208c70 = _0x13e282.dynCall_iifiifiii = _0x13e282.asm.wo).apply(null, arguments);
  };
  var _0x506699 = _0x13e282.dynCall_vifffi = function () {
    return (_0x506699 = _0x13e282.dynCall_vifffi = _0x13e282.asm.xo).apply(null, arguments);
  };
  var _0x12ab3b = _0x13e282.dynCall_iifiiii = function () {
    return (_0x12ab3b = _0x13e282.dynCall_iifiiii = _0x13e282.asm.yo).apply(null, arguments);
  };
  var _0x184831 = _0x13e282.dynCall_viddi = function () {
    return (_0x184831 = _0x13e282.dynCall_viddi = _0x13e282.asm.zo).apply(null, arguments);
  };
  var _0x5b63c7 = _0x13e282.dynCall_vijji = function () {
    return (_0x5b63c7 = _0x13e282.dynCall_vijji = _0x13e282.asm.Ao).apply(null, arguments);
  };
  var _0x222aa8 = _0x13e282.dynCall_vijjjji = function () {
    return (_0x222aa8 = _0x13e282.dynCall_vijjjji = _0x13e282.asm.Bo).apply(null, arguments);
  };
  var _0x344460 = _0x13e282.dynCall_iijjjji = function () {
    return (_0x344460 = _0x13e282.dynCall_iijjjji = _0x13e282.asm.Co).apply(null, arguments);
  };
  var _0x507244 = _0x13e282.dynCall_iijjjjiii = function () {
    return (_0x507244 = _0x13e282.dynCall_iijjjjiii = _0x13e282.asm.Do).apply(null, arguments);
  };
  var _0x55b4a8 = _0x13e282.dynCall_iiiidi = function () {
    return (_0x55b4a8 = _0x13e282.dynCall_iiiidi = _0x13e282.asm.Eo).apply(null, arguments);
  };
  var _0x4ea60c = _0x13e282.dynCall_ffffi = function () {
    return (_0x4ea60c = _0x13e282.dynCall_ffffi = _0x13e282.asm.Fo).apply(null, arguments);
  };
  var _0x26441e = _0x13e282.dynCall_viiifii = function () {
    return (_0x26441e = _0x13e282.dynCall_viiifii = _0x13e282.asm.Go).apply(null, arguments);
  };
  var _0x1495d7 = _0x13e282.dynCall_viiiiiifiifiiii = function () {
    return (_0x1495d7 = _0x13e282.dynCall_viiiiiifiifiiii = _0x13e282.asm.Ho).apply(null, arguments);
  };
  var _0x2a1de4 = _0x13e282.dynCall_iiiififi = function () {
    return (_0x2a1de4 = _0x13e282.dynCall_iiiififi = _0x13e282.asm.Io).apply(null, arguments);
  };
  var _0x128b40 = _0x13e282.dynCall_iiiffifiiii = function () {
    return (_0x128b40 = _0x13e282.dynCall_iiiffifiiii = _0x13e282.asm.Jo).apply(null, arguments);
  };
  var _0x3bc29b = _0x13e282.dynCall_iiifiifiii = function () {
    return (_0x3bc29b = _0x13e282.dynCall_iiifiifiii = _0x13e282.asm.Ko).apply(null, arguments);
  };
  var _0x4de328 = _0x13e282.dynCall_iiifiifiiiii = function () {
    return (_0x4de328 = _0x13e282.dynCall_iiifiifiiiii = _0x13e282.asm.Lo).apply(null, arguments);
  };
  var _0x4b3b49 = _0x13e282.dynCall_ffffii = function () {
    return (_0x4b3b49 = _0x13e282.dynCall_ffffii = _0x13e282.asm.Mo).apply(null, arguments);
  };
  var _0x3bffc6 = _0x13e282.dynCall_ifiii = function () {
    return (_0x3bffc6 = _0x13e282.dynCall_ifiii = _0x13e282.asm.No).apply(null, arguments);
  };
  var _0x175cd3 = _0x13e282.dynCall_iifiiiiii = function () {
    return (_0x175cd3 = _0x13e282.dynCall_iifiiiiii = _0x13e282.asm.Oo).apply(null, arguments);
  };
  var _0x4ada69 = _0x13e282.dynCall_iifiiiii = function () {
    return (_0x4ada69 = _0x13e282.dynCall_iifiiiii = _0x13e282.asm.Po).apply(null, arguments);
  };
  var _0x3798fb = _0x13e282.dynCall_iiffiiiii = function () {
    return (_0x3798fb = _0x13e282.dynCall_iiffiiiii = _0x13e282.asm.Qo).apply(null, arguments);
  };
  var _0xc289d2 = _0x13e282.dynCall_iiififi = function () {
    return (_0xc289d2 = _0x13e282.dynCall_iiififi = _0x13e282.asm.Ro).apply(null, arguments);
  };
  var _0x5a428a = _0x13e282.dynCall_iifiii = function () {
    return (_0x5a428a = _0x13e282.dynCall_iifiii = _0x13e282.asm.So).apply(null, arguments);
  };
  var _0x4965fe = _0x13e282.dynCall_iiiiifiiii = function () {
    return (_0x4965fe = _0x13e282.dynCall_iiiiifiiii = _0x13e282.asm.To).apply(null, arguments);
  };
  var _0x350c10 = _0x13e282.dynCall_diidi = function () {
    return (_0x350c10 = _0x13e282.dynCall_diidi = _0x13e282.asm.Uo).apply(null, arguments);
  };
  var _0x4d1bb9 = _0x13e282.dynCall_fiifdi = function () {
    return (_0x4d1bb9 = _0x13e282.dynCall_fiifdi = _0x13e282.asm.Vo).apply(null, arguments);
  };
  var _0x2f8357 = _0x13e282.dynCall_viiiiiifddfiiii = function () {
    return (_0x2f8357 = _0x13e282.dynCall_viiiiiifddfiiii = _0x13e282.asm.Wo).apply(null, arguments);
  };
  var _0x572553 = _0x13e282.dynCall_fiifji = function () {
    return (_0x572553 = _0x13e282.dynCall_fiifji = _0x13e282.asm.Xo).apply(null, arguments);
  };
  var _0x4aac21 = _0x13e282.dynCall_viiiiiifjjfiiii = function () {
    return (_0x4aac21 = _0x13e282.dynCall_viiiiiifjjfiiii = _0x13e282.asm.Yo).apply(null, arguments);
  };
  var _0x3b4b6b = _0x13e282.dynCall_viiiifiii = function () {
    return (_0x3b4b6b = _0x13e282.dynCall_viiiifiii = _0x13e282.asm.Zo).apply(null, arguments);
  };
  var _0xd17370 = _0x13e282.dynCall_viiiiiiffffiiii = function () {
    return (_0xd17370 = _0x13e282.dynCall_viiiiiiffffiiii = _0x13e282.asm._o).apply(null, arguments);
  };
  var _0x323024 = _0x13e282.dynCall_viifiiii = function () {
    return (_0x323024 = _0x13e282.dynCall_viifiiii = _0x13e282.asm.$o).apply(null, arguments);
  };
  var _0x17d148 = _0x13e282.dynCall_iiiiifiii = function () {
    return (_0x17d148 = _0x13e282.dynCall_iiiiifiii = _0x13e282.asm.ap).apply(null, arguments);
  };
  var _0x5acf8e = _0x13e282.dynCall_fffffi = function () {
    return (_0x5acf8e = _0x13e282.dynCall_fffffi = _0x13e282.asm.bp).apply(null, arguments);
  };
  var _0x3c60d4 = _0x13e282.dynCall_fiiffffi = function () {
    return (_0x3c60d4 = _0x13e282.dynCall_fiiffffi = _0x13e282.asm.cp).apply(null, arguments);
  };
  var _0x519977 = _0x13e282.dynCall_fffifffi = function () {
    return (_0x519977 = _0x13e282.dynCall_fffifffi = _0x13e282.asm.dp).apply(null, arguments);
  };
  var _0x251eba = _0x13e282.dynCall_ifiiii = function () {
    return (_0x251eba = _0x13e282.dynCall_ifiiii = _0x13e282.asm.ep).apply(null, arguments);
  };
  var _0x3fa0ec = _0x13e282.dynCall_idiiiii = function () {
    return (_0x3fa0ec = _0x13e282.dynCall_idiiiii = _0x13e282.asm.fp).apply(null, arguments);
  };
  var _0x11190a = _0x13e282.dynCall_idiiii = function () {
    return (_0x11190a = _0x13e282.dynCall_idiiii = _0x13e282.asm.gp).apply(null, arguments);
  };
  var _0x1e2710 = _0x13e282.dynCall_idii = function () {
    return (_0x1e2710 = _0x13e282.dynCall_idii = _0x13e282.asm.hp).apply(null, arguments);
  };
  var _0x19da8e = _0x13e282.dynCall_vijiiii = function () {
    return (_0x19da8e = _0x13e282.dynCall_vijiiii = _0x13e282.asm.ip).apply(null, arguments);
  };
  var _0x147f46 = _0x13e282.dynCall_iiijiiii = function () {
    return (_0x147f46 = _0x13e282.dynCall_iiijiiii = _0x13e282.asm.jp).apply(null, arguments);
  };
  var _0x429db6 = _0x13e282.dynCall_iiiji = function () {
    return (_0x429db6 = _0x13e282.dynCall_iiiji = _0x13e282.asm.kp).apply(null, arguments);
  };
  var _0x5551c9 = _0x13e282.dynCall_vjiiii = function () {
    return (_0x5551c9 = _0x13e282.dynCall_vjiiii = _0x13e282.asm.lp).apply(null, arguments);
  };
  var _0x4474ac = _0x13e282.dynCall_iddi = function () {
    return (_0x4474ac = _0x13e282.dynCall_iddi = _0x13e282.asm.mp).apply(null, arguments);
  };
  var _0x3475d2 = _0x13e282.dynCall_viifiifi = function () {
    return (_0x3475d2 = _0x13e282.dynCall_viifiifi = _0x13e282.asm.np).apply(null, arguments);
  };
  var _0x371b10 = _0x13e282.dynCall_vifiifi = function () {
    return (_0x371b10 = _0x13e282.dynCall_vifiifi = _0x13e282.asm.op).apply(null, arguments);
  };
  var _0x305838 = _0x13e282.dynCall_viffii = function () {
    return (_0x305838 = _0x13e282.dynCall_viffii = _0x13e282.asm.pp).apply(null, arguments);
  };
  var _0x37a473 = _0x13e282.dynCall_viddfffi = function () {
    return (_0x37a473 = _0x13e282.dynCall_viddfffi = _0x13e282.asm.qp).apply(null, arguments);
  };
  var _0x119792 = _0x13e282.dynCall_viidfffi = function () {
    return (_0x119792 = _0x13e282.dynCall_viidfffi = _0x13e282.asm.rp).apply(null, arguments);
  };
  var _0x39e074 = _0x13e282.dynCall_vidifffi = function () {
    return (_0x39e074 = _0x13e282.dynCall_vidifffi = _0x13e282.asm.sp).apply(null, arguments);
  };
  var _0x2e24a5 = _0x13e282.dynCall_viiiiifi = function () {
    return (_0x2e24a5 = _0x13e282.dynCall_viiiiifi = _0x13e282.asm.tp).apply(null, arguments);
  };
  var _0x5be6da = _0x13e282.dynCall_viiiiiiifi = function () {
    return (_0x5be6da = _0x13e282.dynCall_viiiiiiifi = _0x13e282.asm.up).apply(null, arguments);
  };
  var _0x17b562 = _0x13e282.dynCall_viiiiffffffffii = function () {
    return (_0x17b562 = _0x13e282.dynCall_viiiiffffffffii = _0x13e282.asm.vp).apply(null, arguments);
  };
  var _0x159fbe = _0x13e282.dynCall_iffi = function () {
    return (_0x159fbe = _0x13e282.dynCall_iffi = _0x13e282.asm.wp).apply(null, arguments);
  };
  var _0x4461e9 = _0x13e282.dynCall_viiffffi = function () {
    return (_0x4461e9 = _0x13e282.dynCall_viiffffi = _0x13e282.asm.xp).apply(null, arguments);
  };
  var _0x453aaf = _0x13e282.dynCall_viiffii = function () {
    return (_0x453aaf = _0x13e282.dynCall_viiffii = _0x13e282.asm.yp).apply(null, arguments);
  };
  var _0x475fbc = _0x13e282.dynCall_ffii = function () {
    return (_0x475fbc = _0x13e282.dynCall_ffii = _0x13e282.asm.zp).apply(null, arguments);
  };
  var _0x283e7d = _0x13e282.dynCall_fiiiii = function () {
    return (_0x283e7d = _0x13e282.dynCall_fiiiii = _0x13e282.asm.Ap).apply(null, arguments);
  };
  var _0x595eca = _0x13e282.dynCall_ddddi = function () {
    return (_0x595eca = _0x13e282.dynCall_ddddi = _0x13e282.asm.Bp).apply(null, arguments);
  };
  var _0x2d0bfc = _0x13e282.dynCall_ddi = function () {
    return (_0x2d0bfc = _0x13e282.dynCall_ddi = _0x13e282.asm.Cp).apply(null, arguments);
  };
  var _0x1dd0d2 = _0x13e282.dynCall_jijii = function () {
    return (_0x1dd0d2 = _0x13e282.dynCall_jijii = _0x13e282.asm.Dp).apply(null, arguments);
  };
  var _0x36bb2a = _0x13e282.dynCall_iiiiiji = function () {
    return (_0x36bb2a = _0x13e282.dynCall_iiiiiji = _0x13e282.asm.Ep).apply(null, arguments);
  };
  var _0x2f200a = _0x13e282.dynCall_viiijii = function () {
    return (_0x2f200a = _0x13e282.dynCall_viiijii = _0x13e282.asm.Fp).apply(null, arguments);
  };
  var _0x493b53 = _0x13e282.dynCall_viiiiiji = function () {
    return (_0x493b53 = _0x13e282.dynCall_viiiiiji = _0x13e282.asm.Gp).apply(null, arguments);
  };
  var _0xa66fb6 = _0x13e282.dynCall_viijiii = function () {
    return (_0xa66fb6 = _0x13e282.dynCall_viijiii = _0x13e282.asm.Hp).apply(null, arguments);
  };
  var _0x5944f3 = _0x13e282.dynCall_ijii = function () {
    return (_0x5944f3 = _0x13e282.dynCall_ijii = _0x13e282.asm.Ip).apply(null, arguments);
  };
  var _0x24047d = _0x13e282.dynCall_ijjiiii = function () {
    return (_0x24047d = _0x13e282.dynCall_ijjiiii = _0x13e282.asm.Jp).apply(null, arguments);
  };
  var _0x1e6ac6 = _0x13e282.dynCall_vdiiiii = function () {
    return (_0x1e6ac6 = _0x13e282.dynCall_vdiiiii = _0x13e282.asm.Kp).apply(null, arguments);
  };
  var _0x5e67f9 = _0x13e282.dynCall_diiji = function () {
    return (_0x5e67f9 = _0x13e282.dynCall_diiji = _0x13e282.asm.Lp).apply(null, arguments);
  };
  var _0x384b23 = _0x13e282.dynCall_vjiiiiiiii = function () {
    return (_0x384b23 = _0x13e282.dynCall_vjiiiiiiii = _0x13e282.asm.Mp).apply(null, arguments);
  };
  var _0x215bba = _0x13e282.dynCall_vjiiiiiii = function () {
    return (_0x215bba = _0x13e282.dynCall_vjiiiiiii = _0x13e282.asm.Np).apply(null, arguments);
  };
  var _0x455ef1 = _0x13e282.dynCall_ijiiii = function () {
    return (_0x455ef1 = _0x13e282.dynCall_ijiiii = _0x13e282.asm.Op).apply(null, arguments);
  };
  var _0x479438 = _0x13e282.dynCall_iidii = function () {
    return (_0x479438 = _0x13e282.dynCall_iidii = _0x13e282.asm.Pp).apply(null, arguments);
  };
  var _0x4d10d1 = _0x13e282.dynCall_iidiii = function () {
    return (_0x4d10d1 = _0x13e282.dynCall_iidiii = _0x13e282.asm.Qp).apply(null, arguments);
  };
  var _0x25c99f = _0x13e282.dynCall_diji = function () {
    return (_0x25c99f = _0x13e282.dynCall_diji = _0x13e282.asm.Rp).apply(null, arguments);
  };
  var _0x4af8a5 = _0x13e282.dynCall_fidi = function () {
    return (_0x4af8a5 = _0x13e282.dynCall_fidi = _0x13e282.asm.Sp).apply(null, arguments);
  };
  var _0x20749e = _0x13e282.dynCall_vidddi = function () {
    return (_0x20749e = _0x13e282.dynCall_vidddi = _0x13e282.asm.Tp).apply(null, arguments);
  };
  var _0x299a72 = _0x13e282.dynCall_iffffi = function () {
    return (_0x299a72 = _0x13e282.dynCall_iffffi = _0x13e282.asm.Up).apply(null, arguments);
  };
  var _0x46ae9f = _0x13e282.dynCall_vfffi = function () {
    return (_0x46ae9f = _0x13e282.dynCall_vfffi = _0x13e282.asm.Vp).apply(null, arguments);
  };
  var _0x2debc6 = _0x13e282.dynCall_vffi = function () {
    return (_0x2debc6 = _0x13e282.dynCall_vffi = _0x13e282.asm.Wp).apply(null, arguments);
  };
  var _0x484113 = _0x13e282.dynCall_vffffi = function () {
    return (_0x484113 = _0x13e282.dynCall_vffffi = _0x13e282.asm.Xp).apply(null, arguments);
  };
  var _0x249890 = _0x13e282.dynCall_viiiffii = function () {
    return (_0x249890 = _0x13e282.dynCall_viiiffii = _0x13e282.asm.Yp).apply(null, arguments);
  };
  var _0x585116 = _0x13e282.dynCall_vffffii = function () {
    return (_0x585116 = _0x13e282.dynCall_vffffii = _0x13e282.asm.Zp).apply(null, arguments);
  };
  var _0x58004d = _0x13e282.dynCall_viiiifffi = function () {
    return (_0x58004d = _0x13e282.dynCall_viiiifffi = _0x13e282.asm._p).apply(null, arguments);
  };
  var _0x21b604 = _0x13e282.dynCall_vfiii = function () {
    return (_0x21b604 = _0x13e282.dynCall_vfiii = _0x13e282.asm.$p).apply(null, arguments);
  };
  var _0x24ac3c = _0x13e282.dynCall_fffifi = function () {
    return (_0x24ac3c = _0x13e282.dynCall_fffifi = _0x13e282.asm.aq).apply(null, arguments);
  };
  var _0x2e9609 = _0x13e282.dynCall_vfii = function () {
    return (_0x2e9609 = _0x13e282.dynCall_vfii = _0x13e282.asm.bq).apply(null, arguments);
  };
  var _0x13e90b = _0x13e282.dynCall_iiiifiiiii = function () {
    return (_0x13e90b = _0x13e282.dynCall_iiiifiiiii = _0x13e282.asm.cq).apply(null, arguments);
  };
  var _0x1f4ea0 = _0x13e282.dynCall_iiiifiiii = function () {
    return (_0x1f4ea0 = _0x13e282.dynCall_iiiifiiii = _0x13e282.asm.dq).apply(null, arguments);
  };
  var _0x189d11 = _0x13e282.dynCall_vijjii = function () {
    return (_0x189d11 = _0x13e282.dynCall_vijjii = _0x13e282.asm.eq).apply(null, arguments);
  };
  var _0x6a57f1 = _0x13e282.dynCall_viiiififfi = function () {
    return (_0x6a57f1 = _0x13e282.dynCall_viiiififfi = _0x13e282.asm.fq).apply(null, arguments);
  };
  var _0x340749 = _0x13e282.dynCall_viiiifiifi = function () {
    return (_0x340749 = _0x13e282.dynCall_viiiifiifi = _0x13e282.asm.gq).apply(null, arguments);
  };
  var _0x364f6f = _0x13e282.dynCall_viiiifiiii = function () {
    return (_0x364f6f = _0x13e282.dynCall_viiiifiiii = _0x13e282.asm.hq).apply(null, arguments);
  };
  var _0x249419 = _0x13e282.dynCall_viiiifiiiii = function () {
    return (_0x249419 = _0x13e282.dynCall_viiiifiiiii = _0x13e282.asm.iq).apply(null, arguments);
  };
  var _0x5f3fb6 = _0x13e282.dynCall_viiiifiiiiiiii = function () {
    return (_0x5f3fb6 = _0x13e282.dynCall_viiiifiiiiiiii = _0x13e282.asm.jq).apply(null, arguments);
  };
  var _0x1874f1 = _0x13e282.dynCall_viiiiiffii = function () {
    return (_0x1874f1 = _0x13e282.dynCall_viiiiiffii = _0x13e282.asm.kq).apply(null, arguments);
  };
  var _0x3e4a6a = _0x13e282.dynCall_viffffiii = function () {
    return (_0x3e4a6a = _0x13e282.dynCall_viffffiii = _0x13e282.asm.lq).apply(null, arguments);
  };
  var _0xeb1333 = _0x13e282.dynCall_viffffii = function () {
    return (_0xeb1333 = _0x13e282.dynCall_viffffii = _0x13e282.asm.mq).apply(null, arguments);
  };
  var _0x482019 = _0x13e282.dynCall_viiifiii = function () {
    return (_0x482019 = _0x13e282.dynCall_viiifiii = _0x13e282.asm.nq).apply(null, arguments);
  };
  var _0x3eb24f = _0x13e282.dynCall_viiififi = function () {
    return (_0x3eb24f = _0x13e282.dynCall_viiififi = _0x13e282.asm.oq).apply(null, arguments);
  };
  var _0x454774 = _0x13e282.dynCall_viiififfi = function () {
    return (_0x454774 = _0x13e282.dynCall_viiififfi = _0x13e282.asm.pq).apply(null, arguments);
  };
  var _0x5bc41f = _0x13e282.dynCall_viffiiii = function () {
    return (_0x5bc41f = _0x13e282.dynCall_viffiiii = _0x13e282.asm.qq).apply(null, arguments);
  };
  var _0x52a920 = _0x13e282.dynCall_viiiiffffiiii = function () {
    return (_0x52a920 = _0x13e282.dynCall_viiiiffffiiii = _0x13e282.asm.rq).apply(null, arguments);
  };
  var _0x29c324 = _0x13e282.dynCall_viifiiiii = function () {
    return (_0x29c324 = _0x13e282.dynCall_viifiiiii = _0x13e282.asm.sq).apply(null, arguments);
  };
  var _0x2b7f23 = _0x13e282.dynCall_iiiiiiffiiiiiiiiiffffiiii = function () {
    return (_0x2b7f23 = _0x13e282.dynCall_iiiiiiffiiiiiiiiiffffiiii = _0x13e282.asm.tq).apply(null, arguments);
  };
  var _0x437464 = _0x13e282.dynCall_iiiiiiffiiiiiiiiiiiiiii = function () {
    return (_0x437464 = _0x13e282.dynCall_iiiiiiffiiiiiiiiiiiiiii = _0x13e282.asm.uq).apply(null, arguments);
  };
  var _0x33ae5f = _0x13e282.dynCall_viififii = function () {
    return (_0x33ae5f = _0x13e282.dynCall_viififii = _0x13e282.asm.vq).apply(null, arguments);
  };
  var _0x19314f = _0x13e282.dynCall_viffffffi = function () {
    return (_0x19314f = _0x13e282.dynCall_viffffffi = _0x13e282.asm.wq).apply(null, arguments);
  };
  var _0x131138 = _0x13e282.dynCall_iiiffiiii = function () {
    return (_0x131138 = _0x13e282.dynCall_iiiffiiii = _0x13e282.asm.xq).apply(null, arguments);
  };
  var _0x1098b9 = _0x13e282.dynCall_iiiiffiiii = function () {
    return (_0x1098b9 = _0x13e282.dynCall_iiiiffiiii = _0x13e282.asm.yq).apply(null, arguments);
  };
  var _0x5e92c8 = _0x13e282.dynCall_vjii = function () {
    return (_0x5e92c8 = _0x13e282.dynCall_vjii = _0x13e282.asm.zq).apply(null, arguments);
  };
  var _0x19a852 = _0x13e282.dynCall_fffffffi = function () {
    return (_0x19a852 = _0x13e282.dynCall_fffffffi = _0x13e282.asm.Aq).apply(null, arguments);
  };
  var _0x437c9b = _0x13e282.dynCall_viffifi = function () {
    return (_0x437c9b = _0x13e282.dynCall_viffifi = _0x13e282.asm.Bq).apply(null, arguments);
  };
  var _0x21e477 = _0x13e282.dynCall_viiffifi = function () {
    return (_0x21e477 = _0x13e282.dynCall_viiffifi = _0x13e282.asm.Cq).apply(null, arguments);
  };
  var _0x267fc0 = _0x13e282.dynCall_ifffi = function () {
    return (_0x267fc0 = _0x13e282.dynCall_ifffi = _0x13e282.asm.Dq).apply(null, arguments);
  };
  var _0x5e3986 = _0x13e282.dynCall_fiiiffi = function () {
    return (_0x5e3986 = _0x13e282.dynCall_fiiiffi = _0x13e282.asm.Eq).apply(null, arguments);
  };
  var _0xfe620f = _0x13e282.dynCall_viiififiii = function () {
    return (_0xfe620f = _0x13e282.dynCall_viiififiii = _0x13e282.asm.Fq).apply(null, arguments);
  };
  var _0x25793c = _0x13e282.dynCall_viiffiiiiiiiii = function () {
    return (_0x25793c = _0x13e282.dynCall_viiffiiiiiiiii = _0x13e282.asm.Gq).apply(null, arguments);
  };
  var _0x5dd85 = _0x13e282.dynCall_viiiiiffiii = function () {
    return (_0x5dd85 = _0x13e282.dynCall_viiiiiffiii = _0x13e282.asm.Hq).apply(null, arguments);
  };
  var _0x4b1c84 = _0x13e282.dynCall_viiffiii = function () {
    return (_0x4b1c84 = _0x13e282.dynCall_viiffiii = _0x13e282.asm.Iq).apply(null, arguments);
  };
  var _0xdf75d8 = _0x13e282.dynCall_viiffiiiiiii = function () {
    return (_0xdf75d8 = _0x13e282.dynCall_viiffiiiiiii = _0x13e282.asm.Jq).apply(null, arguments);
  };
  var _0x28721e = _0x13e282.dynCall_fffffffffi = function () {
    return (_0x28721e = _0x13e282.dynCall_fffffffffi = _0x13e282.asm.Kq).apply(null, arguments);
  };
  var _0x32ef7b = _0x13e282.dynCall_vifiiiiii = function () {
    return (_0x32ef7b = _0x13e282.dynCall_vifiiiiii = _0x13e282.asm.Lq).apply(null, arguments);
  };
  var _0x421696 = _0x13e282.dynCall_viifiiiiiii = function () {
    return (_0x421696 = _0x13e282.dynCall_viifiiiiiii = _0x13e282.asm.Mq).apply(null, arguments);
  };
  var _0x48519d = _0x13e282.dynCall_viiififfiiiiiii = function () {
    return (_0x48519d = _0x13e282.dynCall_viiififfiiiiiii = _0x13e282.asm.Nq).apply(null, arguments);
  };
  var _0x3610bd = _0x13e282.dynCall_viiffiifiiiiiii = function () {
    return (_0x3610bd = _0x13e282.dynCall_viiffiifiiiiiii = _0x13e282.asm.Oq).apply(null, arguments);
  };
  var _0x3de01e = _0x13e282.dynCall_viifiiiiii = function () {
    return (_0x3de01e = _0x13e282.dynCall_viifiiiiii = _0x13e282.asm.Pq).apply(null, arguments);
  };
  var _0x362df3 = _0x13e282.dynCall_viiifiiiiii = function () {
    return (_0x362df3 = _0x13e282.dynCall_viiifiiiiii = _0x13e282.asm.Qq).apply(null, arguments);
  };
  var _0x1bbfef = _0x13e282.dynCall_viiiifiiiiii = function () {
    return (_0x1bbfef = _0x13e282.dynCall_viiiifiiiiii = _0x13e282.asm.Rq).apply(null, arguments);
  };
  var _0x38d202 = _0x13e282.dynCall_viififiiiiii = function () {
    return (_0x38d202 = _0x13e282.dynCall_viififiiiiii = _0x13e282.asm.Sq).apply(null, arguments);
  };
  var _0x3613bc = _0x13e282.dynCall_viiiffiifiiiiiii = function () {
    return (_0x3613bc = _0x13e282.dynCall_viiiffiifiiiiiii = _0x13e282.asm.Tq).apply(null, arguments);
  };
  var _0x4da447 = _0x13e282.dynCall_viiiiiifiiiiii = function () {
    return (_0x4da447 = _0x13e282.dynCall_viiiiiifiiiiii = _0x13e282.asm.Uq).apply(null, arguments);
  };
  var _0x471245 = _0x13e282.dynCall_vififiii = function () {
    return (_0x471245 = _0x13e282.dynCall_vififiii = _0x13e282.asm.Vq).apply(null, arguments);
  };
  var _0x27157e = _0x13e282.dynCall_viiiiiiiijiiii = function () {
    return (_0x27157e = _0x13e282.dynCall_viiiiiiiijiiii = _0x13e282.asm.Wq).apply(null, arguments);
  };
  var _0x2b7da7 = _0x13e282.dynCall_vifffii = function () {
    return (_0x2b7da7 = _0x13e282.dynCall_vifffii = _0x13e282.asm.Xq).apply(null, arguments);
  };
  var _0x324ed0 = _0x13e282.dynCall_viiiiiffi = function () {
    return (_0x324ed0 = _0x13e282.dynCall_viiiiiffi = _0x13e282.asm.Yq).apply(null, arguments);
  };
  var _0x5cb172 = _0x13e282.dynCall_viiidii = function () {
    return (_0x5cb172 = _0x13e282.dynCall_viiidii = _0x13e282.asm.Zq).apply(null, arguments);
  };
  var _0x480088 = _0x13e282.dynCall_ijiiiiiiiii = function () {
    return (_0x480088 = _0x13e282.dynCall_ijiiiiiiiii = _0x13e282.asm._q).apply(null, arguments);
  };
  var _0x20bae3 = _0x13e282.dynCall_ijjiii = function () {
    return (_0x20bae3 = _0x13e282.dynCall_ijjiii = _0x13e282.asm.$q).apply(null, arguments);
  };
  var _0x1c031f = _0x13e282.dynCall_jjjii = function () {
    return (_0x1c031f = _0x13e282.dynCall_jjjii = _0x13e282.asm.ar).apply(null, arguments);
  };
  var _0x1bc594 = _0x13e282.dynCall_iijjijii = function () {
    return (_0x1bc594 = _0x13e282.dynCall_iijjijii = _0x13e282.asm.br).apply(null, arguments);
  };
  var _0xfd9949 = _0x13e282.dynCall_jiijii = function () {
    return (_0xfd9949 = _0x13e282.dynCall_jiijii = _0x13e282.asm.cr).apply(null, arguments);
  };
  var _0x3a6f87 = _0x13e282.dynCall_viffffffffffffffffi = function () {
    return (_0x3a6f87 = _0x13e282.dynCall_viffffffffffffffffi = _0x13e282.asm.dr).apply(null, arguments);
  };
  var _0x343389 = _0x13e282.dynCall_jiidi = function () {
    return (_0x343389 = _0x13e282.dynCall_jiidi = _0x13e282.asm.er).apply(null, arguments);
  };
  var _0x10bf04 = _0x13e282.dynCall_viiiidijii = function () {
    return (_0x10bf04 = _0x13e282.dynCall_viiiidijii = _0x13e282.asm.fr).apply(null, arguments);
  };
  var _0x280256 = _0x13e282.dynCall_viiiidiii = function () {
    return (_0x280256 = _0x13e282.dynCall_viiiidiii = _0x13e282.asm.gr).apply(null, arguments);
  };
  var _0xc6986d = _0x13e282.dynCall_iiidiii = function () {
    return (_0xc6986d = _0x13e282.dynCall_iiidiii = _0x13e282.asm.hr).apply(null, arguments);
  };
  var _0x12f4f1 = _0x13e282.dynCall_iiidii = function () {
    return (_0x12f4f1 = _0x13e282.dynCall_iiidii = _0x13e282.asm.ir).apply(null, arguments);
  };
  var _0x411855 = _0x13e282.dynCall_viiiidii = function () {
    return (_0x411855 = _0x13e282.dynCall_viiiidii = _0x13e282.asm.jr).apply(null, arguments);
  };
  var _0x2d9c51 = _0x13e282.dynCall_viijiiiii = function () {
    return (_0x2d9c51 = _0x13e282.dynCall_viijiiiii = _0x13e282.asm.kr).apply(null, arguments);
  };
  var _0x363fdf = _0x13e282.dynCall_viifffi = function () {
    return (_0x363fdf = _0x13e282.dynCall_viifffi = _0x13e282.asm.lr).apply(null, arguments);
  };
  var _0x373868 = _0x13e282.dynCall_viifffffi = function () {
    return (_0x373868 = _0x13e282.dynCall_viifffffi = _0x13e282.asm.mr).apply(null, arguments);
  };
  var _0x86bc58 = _0x13e282.dynCall_viiffffffi = function () {
    return (_0x86bc58 = _0x13e282.dynCall_viiffffffi = _0x13e282.asm.nr).apply(null, arguments);
  };
  var _0x263c29 = _0x13e282.dynCall_viifffffffi = function () {
    return (_0x263c29 = _0x13e282.dynCall_viifffffffi = _0x13e282.asm.or).apply(null, arguments);
  };
  var _0x52db91 = _0x13e282.dynCall_viiffffffffi = function () {
    return (_0x52db91 = _0x13e282.dynCall_viiffffffffi = _0x13e282.asm.pr).apply(null, arguments);
  };
  var _0xfdde4d = _0x13e282.dynCall_viiffffffffiii = function () {
    return (_0xfdde4d = _0x13e282.dynCall_viiffffffffiii = _0x13e282.asm.qr).apply(null, arguments);
  };
  var _0xbc26df = _0x13e282.dynCall_viiiiffffii = function () {
    return (_0xbc26df = _0x13e282.dynCall_viiiiffffii = _0x13e282.asm.rr).apply(null, arguments);
  };
  var _0x515568 = _0x13e282.dynCall_didi = function () {
    return (_0x515568 = _0x13e282.dynCall_didi = _0x13e282.asm.sr).apply(null, arguments);
  };
  var _0x1c3bae = _0x13e282.dynCall_ddidi = function () {
    return (_0x1c3bae = _0x13e282.dynCall_ddidi = _0x13e282.asm.tr).apply(null, arguments);
  };
  var _0x162adf = _0x13e282.dynCall_di = function () {
    return (_0x162adf = _0x13e282.dynCall_di = _0x13e282.asm.ur).apply(null, arguments);
  };
  var _0x1b7557 = _0x13e282.dynCall_jfi = function () {
    return (_0x1b7557 = _0x13e282.dynCall_jfi = _0x13e282.asm.vr).apply(null, arguments);
  };
  var _0x234818 = _0x13e282.dynCall_fji = function () {
    return (_0x234818 = _0x13e282.dynCall_fji = _0x13e282.asm.wr).apply(null, arguments);
  };
  var _0x156560 = _0x13e282.dynCall_viddii = function () {
    return (_0x156560 = _0x13e282.dynCall_viddii = _0x13e282.asm.xr).apply(null, arguments);
  };
  var _0x3b8519 = _0x13e282.dynCall_viiiiddi = function () {
    return (_0x3b8519 = _0x13e282.dynCall_viiiiddi = _0x13e282.asm.yr).apply(null, arguments);
  };
  var _0x4b7f57 = _0x13e282.dynCall_iiiddi = function () {
    return (_0x4b7f57 = _0x13e282.dynCall_iiiddi = _0x13e282.asm.zr).apply(null, arguments);
  };
  var _0x562dc6 = _0x13e282.dynCall_viddiiii = function () {
    return (_0x562dc6 = _0x13e282.dynCall_viddiiii = _0x13e282.asm.Ar).apply(null, arguments);
  };
  var _0x3a3fe7 = _0x13e282.dynCall_vdi = function () {
    return (_0x3a3fe7 = _0x13e282.dynCall_vdi = _0x13e282.asm.Br).apply(null, arguments);
  };
  var _0x54f2c6 = _0x13e282.dynCall_idddi = function () {
    return (_0x54f2c6 = _0x13e282.dynCall_idddi = _0x13e282.asm.Cr).apply(null, arguments);
  };
  var _0x14233c = _0x13e282.dynCall_iddii = function () {
    return (_0x14233c = _0x13e282.dynCall_iddii = _0x13e282.asm.Dr).apply(null, arguments);
  };
  var _0xce5143 = _0x13e282.dynCall_diddi = function () {
    return (_0xce5143 = _0x13e282.dynCall_diddi = _0x13e282.asm.Er).apply(null, arguments);
  };
  var _0x57935c = _0x13e282.dynCall_iiijjiii = function () {
    return (_0x57935c = _0x13e282.dynCall_iiijjiii = _0x13e282.asm.Fr).apply(null, arguments);
  };
  var _0x3ea80f = _0x13e282.dynCall_viiijji = function () {
    return (_0x3ea80f = _0x13e282.dynCall_viiijji = _0x13e282.asm.Gr).apply(null, arguments);
  };
  var _0xb2459d = _0x13e282.dynCall_vijiiiiiii = function () {
    return (_0xb2459d = _0x13e282.dynCall_vijiiiiiii = _0x13e282.asm.Hr).apply(null, arguments);
  };
  var _0x4f1225 = _0x13e282.dynCall_vijiiiiiiii = function () {
    return (_0x4f1225 = _0x13e282.dynCall_vijiiiiiiii = _0x13e282.asm.Ir).apply(null, arguments);
  };
  var _0x6efa19 = _0x13e282.dynCall_jjiiii = function () {
    return (_0x6efa19 = _0x13e282.dynCall_jjiiii = _0x13e282.asm.Jr).apply(null, arguments);
  };
  var _0x180136 = _0x13e282.dynCall_jjiiiii = function () {
    return (_0x180136 = _0x13e282.dynCall_jjiiiii = _0x13e282.asm.Kr).apply(null, arguments);
  };
  var _0xf6b288 = _0x13e282.dynCall_jijjji = function () {
    return (_0xf6b288 = _0x13e282.dynCall_jijjji = _0x13e282.asm.Lr).apply(null, arguments);
  };
  var _0x3ed96b = _0x13e282.dynCall_jijjjii = function () {
    return (_0x3ed96b = _0x13e282.dynCall_jijjjii = _0x13e282.asm.Mr).apply(null, arguments);
  };
  var _0x24fcde = _0x13e282.dynCall_jjiii = function () {
    return (_0x24fcde = _0x13e282.dynCall_jjiii = _0x13e282.asm.Nr).apply(null, arguments);
  };
  var _0x5a5bbb = _0x13e282.dynCall_ijijiiiii = function () {
    return (_0x5a5bbb = _0x13e282.dynCall_ijijiiiii = _0x13e282.asm.Or).apply(null, arguments);
  };
  var _0x7a9dd7 = _0x13e282.dynCall_ijjjiii = function () {
    return (_0x7a9dd7 = _0x13e282.dynCall_ijjjiii = _0x13e282.asm.Pr).apply(null, arguments);
  };
  var _0x409fec = _0x13e282.dynCall_vijjjiijii = function () {
    return (_0x409fec = _0x13e282.dynCall_vijjjiijii = _0x13e282.asm.Qr).apply(null, arguments);
  };
  var _0x501320 = _0x13e282.dynCall_ijjjiijii = function () {
    return (_0x501320 = _0x13e282.dynCall_ijjjiijii = _0x13e282.asm.Rr).apply(null, arguments);
  };
  var _0x3f47d8 = _0x13e282.dynCall_vijiiiiii = function () {
    return (_0x3f47d8 = _0x13e282.dynCall_vijiiiiii = _0x13e282.asm.Sr).apply(null, arguments);
  };
  var _0xee9f2b = _0x13e282.dynCall_fdi = function () {
    return (_0xee9f2b = _0x13e282.dynCall_fdi = _0x13e282.asm.Tr).apply(null, arguments);
  };
  var _0x540598 = _0x13e282.dynCall_dfi = function () {
    return (_0x540598 = _0x13e282.dynCall_dfi = _0x13e282.asm.Ur).apply(null, arguments);
  };
  var _0x399544 = _0x13e282.dynCall_ifii = function () {
    return (_0x399544 = _0x13e282.dynCall_ifii = _0x13e282.asm.Vr).apply(null, arguments);
  };
  var _0xed5279 = _0x13e282.dynCall_jidii = function () {
    return (_0xed5279 = _0x13e282.dynCall_jidii = _0x13e282.asm.Wr).apply(null, arguments);
  };
  var _0x4d3ccf = _0x13e282.dynCall_viiiiiiiji = function () {
    return (_0x4d3ccf = _0x13e282.dynCall_viiiiiiiji = _0x13e282.asm.Xr).apply(null, arguments);
  };
  var _0x3ec0bc = _0x13e282.dynCall_viiiiiiiiji = function () {
    return (_0x3ec0bc = _0x13e282.dynCall_viiiiiiiiji = _0x13e282.asm.Yr).apply(null, arguments);
  };
  var _0x479dd2 = _0x13e282.dynCall_viiiiiiiiiji = function () {
    return (_0x479dd2 = _0x13e282.dynCall_viiiiiiiiiji = _0x13e282.asm.Zr).apply(null, arguments);
  };
  var _0x5161f0 = _0x13e282.dynCall_ijiijii = function () {
    return (_0x5161f0 = _0x13e282.dynCall_ijiijii = _0x13e282.asm._r).apply(null, arguments);
  };
  var _0x49dcde = _0x13e282.dynCall_vjjiiiii = function () {
    return (_0x49dcde = _0x13e282.dynCall_vjjiiiii = _0x13e282.asm.$r).apply(null, arguments);
  };
  var _0x431894 = _0x13e282.dynCall_vjjii = function () {
    return (_0x431894 = _0x13e282.dynCall_vjjii = _0x13e282.asm.as).apply(null, arguments);
  };
  var _0x19c9c6 = _0x13e282.dynCall_ijiiji = function () {
    return (_0x19c9c6 = _0x13e282.dynCall_ijiiji = _0x13e282.asm.bs).apply(null, arguments);
  };
  var _0x1245cd = _0x13e282.dynCall_ijiiiii = function () {
    return (_0x1245cd = _0x13e282.dynCall_ijiiiii = _0x13e282.asm.cs).apply(null, arguments);
  };
  var _0x4dc410 = _0x13e282.dynCall_ijiiiiji = function () {
    return (_0x4dc410 = _0x13e282.dynCall_ijiiiiji = _0x13e282.asm.ds).apply(null, arguments);
  };
  var _0x392638 = _0x13e282.dynCall_jiiiiii = function () {
    return (_0x392638 = _0x13e282.dynCall_jiiiiii = _0x13e282.asm.es).apply(null, arguments);
  };
  var _0x4467df = _0x13e282.dynCall_ddii = function () {
    return (_0x4467df = _0x13e282.dynCall_ddii = _0x13e282.asm.fs).apply(null, arguments);
  };
  var _0xf04537 = _0x13e282.dynCall_idiii = function () {
    return (_0xf04537 = _0x13e282.dynCall_idiii = _0x13e282.asm.gs).apply(null, arguments);
  };
  var _0x47f9ce = _0x13e282.dynCall_ifiiiii = function () {
    return (_0x47f9ce = _0x13e282.dynCall_ifiiiii = _0x13e282.asm.hs).apply(null, arguments);
  };
  var _0x686777 = _0x13e282.dynCall_vdiii = function () {
    return (_0x686777 = _0x13e282.dynCall_vdiii = _0x13e282.asm.is).apply(null, arguments);
  };
  var _0x7582dd = _0x13e282.dynCall_jdii = function () {
    return (_0x7582dd = _0x13e282.dynCall_jdii = _0x13e282.asm.js).apply(null, arguments);
  };
  var _0x478e35 = _0x13e282.dynCall_vijijji = function () {
    return (_0x478e35 = _0x13e282.dynCall_vijijji = _0x13e282.asm.ks).apply(null, arguments);
  };
  var _0x127258 = _0x13e282.dynCall_iijjji = function () {
    return (_0x127258 = _0x13e282.dynCall_iijjji = _0x13e282.asm.ls).apply(null, arguments);
  };
  var _0x4292f7 = _0x13e282.dynCall_viijjji = function () {
    return (_0x4292f7 = _0x13e282.dynCall_viijjji = _0x13e282.asm.ms).apply(null, arguments);
  };
  var _0x33bfd1 = _0x13e282.dynCall_vdii = function () {
    return (_0x33bfd1 = _0x13e282.dynCall_vdii = _0x13e282.asm.ns).apply(null, arguments);
  };
  var _0x5bffe2 = _0x13e282.dynCall_iiiijii = function () {
    return (_0x5bffe2 = _0x13e282.dynCall_iiiijii = _0x13e282.asm.os).apply(null, arguments);
  };
  var _0x2ff619 = _0x13e282.dynCall_jijji = function () {
    return (_0x2ff619 = _0x13e282.dynCall_jijji = _0x13e282.asm.ps).apply(null, arguments);
  };
  var _0x21dcd0 = _0x13e282.dynCall_iijjii = function () {
    return (_0x21dcd0 = _0x13e282.dynCall_iijjii = _0x13e282.asm.qs).apply(null, arguments);
  };
  var _0xecd657 = _0x13e282.dynCall_jjjji = function () {
    return (_0xecd657 = _0x13e282.dynCall_jjjji = _0x13e282.asm.rs).apply(null, arguments);
  };
  var _0xfaf826 = _0x13e282.dynCall_viijijii = function () {
    return (_0xfaf826 = _0x13e282.dynCall_viijijii = _0x13e282.asm.ss).apply(null, arguments);
  };
  var _0xccae16 = _0x13e282.dynCall_viijijiii = function () {
    return (_0xccae16 = _0x13e282.dynCall_viijijiii = _0x13e282.asm.ts).apply(null, arguments);
  };
  var _0x47c754 = _0x13e282.dynCall_vijiji = function () {
    return (_0x47c754 = _0x13e282.dynCall_vijiji = _0x13e282.asm.us).apply(null, arguments);
  };
  var _0x3b1ffc = _0x13e282.dynCall_viijiijiii = function () {
    return (_0x3b1ffc = _0x13e282.dynCall_viijiijiii = _0x13e282.asm.vs).apply(null, arguments);
  };
  var _0x33571b = _0x13e282.dynCall_viiiijiiii = function () {
    return (_0x33571b = _0x13e282.dynCall_viiiijiiii = _0x13e282.asm.ws).apply(null, arguments);
  };
  var _0x3027a2 = _0x13e282.dynCall_viijjii = function () {
    return (_0x3027a2 = _0x13e282.dynCall_viijjii = _0x13e282.asm.xs).apply(null, arguments);
  };
  var _0x17ab1c = _0x13e282.dynCall_jiiiiiiiii = function () {
    return (_0x17ab1c = _0x13e282.dynCall_jiiiiiiiii = _0x13e282.asm.ys).apply(null, arguments);
  };
  var _0x23b414 = _0x13e282.dynCall_iiiiijii = function () {
    return (_0x23b414 = _0x13e282.dynCall_iiiiijii = _0x13e282.asm.zs).apply(null, arguments);
  };
  var _0x5db73a = _0x13e282.dynCall_iiiidii = function () {
    return (_0x5db73a = _0x13e282.dynCall_iiiidii = _0x13e282.asm.As).apply(null, arguments);
  };
  var _0x305eab = _0x13e282.dynCall_iiiiffiiiji = function () {
    return (_0x305eab = _0x13e282.dynCall_iiiiffiiiji = _0x13e282.asm.Bs).apply(null, arguments);
  };
  var _0x21ae4f = _0x13e282.dynCall_iiiffii = function () {
    return (_0x21ae4f = _0x13e282.dynCall_iiiffii = _0x13e282.asm.Cs).apply(null, arguments);
  };
  var _0xb95071 = _0x13e282.dynCall_jiiiiiii = function () {
    return (_0xb95071 = _0x13e282.dynCall_jiiiiiii = _0x13e282.asm.Ds).apply(null, arguments);
  };
  var _0x3e90b4 = _0x13e282.dynCall_iiiiffiiiii = function () {
    return (_0x3e90b4 = _0x13e282.dynCall_iiiiffiiiii = _0x13e282.asm.Es).apply(null, arguments);
  };
  var _0x142c29 = _0x13e282.dynCall_iidfii = function () {
    return (_0x142c29 = _0x13e282.dynCall_iidfii = _0x13e282.asm.Fs).apply(null, arguments);
  };
  var _0x4cc6cc = _0x13e282.dynCall_iijfii = function () {
    return (_0x4cc6cc = _0x13e282.dynCall_iijfii = _0x13e282.asm.Gs).apply(null, arguments);
  };
  var _0x6e4055 = _0x13e282.dynCall_iiiiffii = function () {
    return (_0x6e4055 = _0x13e282.dynCall_iiiiffii = _0x13e282.asm.Hs).apply(null, arguments);
  };
  var _0x46fbd4 = _0x13e282.dynCall_jiiiiji = function () {
    return (_0x46fbd4 = _0x13e282.dynCall_jiiiiji = _0x13e282.asm.Is).apply(null, arguments);
  };
  var _0x35d4a1 = _0x13e282.dynCall_fiiiifi = function () {
    return (_0x35d4a1 = _0x13e282.dynCall_fiiiifi = _0x13e282.asm.Js).apply(null, arguments);
  };
  var _0x195383 = _0x13e282.dynCall_iiijjii = function () {
    return (_0x195383 = _0x13e282.dynCall_iiijjii = _0x13e282.asm.Ks).apply(null, arguments);
  };
  var _0x63c678 = _0x13e282.dynCall_vij = function () {
    return (_0x63c678 = _0x13e282.dynCall_vij = _0x13e282.asm.Ls).apply(null, arguments);
  };
  var _0x4b4bcd = _0x13e282.dynCall_iiiijiii = function () {
    return (_0x4b4bcd = _0x13e282.dynCall_iiiijiii = _0x13e282.asm.Ms).apply(null, arguments);
  };
  var _0x26defb = _0x13e282.dynCall_iiiij = function () {
    return (_0x26defb = _0x13e282.dynCall_iiiij = _0x13e282.asm.Ns).apply(null, arguments);
  };
  var _0x79c6e3 = _0x13e282.dynCall_ijj = function () {
    return (_0x79c6e3 = _0x13e282.dynCall_ijj = _0x13e282.asm.Os).apply(null, arguments);
  };
  var _0x54b69a = _0x13e282.dynCall_vjji = function () {
    return (_0x54b69a = _0x13e282.dynCall_vjji = _0x13e282.asm.Ps).apply(null, arguments);
  };
  var _0x3d5adc = _0x13e282.dynCall_ij = function () {
    return (_0x3d5adc = _0x13e282.dynCall_ij = _0x13e282.asm.Qs).apply(null, arguments);
  };
  var _0x559b09 = _0x13e282.dynCall_vif = function () {
    return (_0x559b09 = _0x13e282.dynCall_vif = _0x13e282.asm.Rs).apply(null, arguments);
  };
  var _0x4b60b4 = _0x13e282.dynCall_vid = function () {
    return (_0x4b60b4 = _0x13e282.dynCall_vid = _0x13e282.asm.Ss).apply(null, arguments);
  };
  var _0x34ecc6 = _0x13e282.dynCall_viiiiif = function () {
    return (_0x34ecc6 = _0x13e282.dynCall_viiiiif = _0x13e282.asm.Ts).apply(null, arguments);
  };
  var _0x3c8657 = _0x13e282.dynCall_viiiif = function () {
    return (_0x3c8657 = _0x13e282.dynCall_viiiif = _0x13e282.asm.Us).apply(null, arguments);
  };
  var _0x509d07 = _0x13e282.dynCall_viiiiiif = function () {
    return (_0x509d07 = _0x13e282.dynCall_viiiiiif = _0x13e282.asm.Vs).apply(null, arguments);
  };
  var _0x35fe60 = _0x13e282.dynCall_viffff = function () {
    return (_0x35fe60 = _0x13e282.dynCall_viffff = _0x13e282.asm.Ws).apply(null, arguments);
  };
  var _0x1763e1 = _0x13e282.dynCall_iiif = function () {
    return (_0x1763e1 = _0x13e282.dynCall_iiif = _0x13e282.asm.Xs).apply(null, arguments);
  };
  var _0x2540c4 = _0x13e282.dynCall_fif = function () {
    return (_0x2540c4 = _0x13e282.dynCall_fif = _0x13e282.asm.Ys).apply(null, arguments);
  };
  var _0x35f618 = _0x13e282.dynCall_iiiiiifff = function () {
    return (_0x35f618 = _0x13e282.dynCall_iiiiiifff = _0x13e282.asm.Zs).apply(null, arguments);
  };
  var _0x437215 = _0x13e282.dynCall_iiiiiifiif = function () {
    return (_0x437215 = _0x13e282.dynCall_iiiiiifiif = _0x13e282.asm._s).apply(null, arguments);
  };
  var _0x70f959 = _0x13e282.dynCall_iiiiiifiii = function () {
    return (_0x70f959 = _0x13e282.dynCall_iiiiiifiii = _0x13e282.asm.$s).apply(null, arguments);
  };
  var _0x4b1a74 = _0x13e282.dynCall_iiiiiiifiif = function () {
    return (_0x4b1a74 = _0x13e282.dynCall_iiiiiiifiif = _0x13e282.asm.at).apply(null, arguments);
  };
  var _0x1bc6ef = _0x13e282.dynCall_fiff = function () {
    return (_0x1bc6ef = _0x13e282.dynCall_fiff = _0x13e282.asm.bt).apply(null, arguments);
  };
  var _0x2f650f = _0x13e282.dynCall_fiiiiiifiifif = function () {
    return (_0x2f650f = _0x13e282.dynCall_fiiiiiifiifif = _0x13e282.asm.ct).apply(null, arguments);
  };
  var _0x3fd69f = _0x13e282.dynCall_fiiiiiifiiiif = function () {
    return (_0x3fd69f = _0x13e282.dynCall_fiiiiiifiiiif = _0x13e282.asm.dt).apply(null, arguments);
  };
  var _0x46209a = _0x13e282.dynCall_iifiiiijii = function () {
    return (_0x46209a = _0x13e282.dynCall_iifiiiijii = _0x13e282.asm.et).apply(null, arguments);
  };
  var _0x3987d2 = _0x13e282.dynCall_vifijii = function () {
    return (_0x3987d2 = _0x13e282.dynCall_vifijii = _0x13e282.asm.ft).apply(null, arguments);
  };
  var _0x2c260a = _0x13e282.dynCall_iiiifffiii = function () {
    return (_0x2c260a = _0x13e282.dynCall_iiiifffiii = _0x13e282.asm.gt).apply(null, arguments);
  };
  var _0x2b7040 = _0x13e282.dynCall_iiiifffffi = function () {
    return (_0x2b7040 = _0x13e282.dynCall_iiiifffffi = _0x13e282.asm.ht).apply(null, arguments);
  };
  var _0x46b696 = _0x13e282.dynCall_viffiiiif = function () {
    return (_0x46b696 = _0x13e282.dynCall_viffiiiif = _0x13e282.asm.it).apply(null, arguments);
  };
  var _0x1c32a9 = _0x13e282.dynCall_viffiifffffiii = function () {
    return (_0x1c32a9 = _0x13e282.dynCall_viffiifffffiii = _0x13e282.asm.jt).apply(null, arguments);
  };
  var _0x22e66f = _0x13e282.dynCall_viffffiifffiiiiif = function () {
    return (_0x22e66f = _0x13e282.dynCall_viffffiifffiiiiif = _0x13e282.asm.kt).apply(null, arguments);
  };
  var _0x102800 = _0x13e282.dynCall_iiiifffffii = function () {
    return (_0x102800 = _0x13e282.dynCall_iiiifffffii = _0x13e282.asm.lt).apply(null, arguments);
  };
  var _0x5267c9 = _0x13e282.dynCall_viiiiiiiiiiifii = function () {
    return (_0x5267c9 = _0x13e282.dynCall_viiiiiiiiiiifii = _0x13e282.asm.mt).apply(null, arguments);
  };
  var _0x12e67e = _0x13e282.dynCall_viff = function () {
    return (_0x12e67e = _0x13e282.dynCall_viff = _0x13e282.asm.nt).apply(null, arguments);
  };
  var _0xa30821 = _0x13e282.dynCall_iiiiifiiiiif = function () {
    return (_0xa30821 = _0x13e282.dynCall_iiiiifiiiiif = _0x13e282.asm.ot).apply(null, arguments);
  };
  var _0x2b9426 = _0x13e282.dynCall_viiifiiiii = function () {
    return (_0x2b9426 = _0x13e282.dynCall_viiifiiiii = _0x13e282.asm.pt).apply(null, arguments);
  };
  var _0x5ec181 = _0x13e282.dynCall_viiiifiiiiif = function () {
    return (_0x5ec181 = _0x13e282.dynCall_viiiifiiiiif = _0x13e282.asm.qt).apply(null, arguments);
  };
  var _0x42eb79 = _0x13e282.dynCall_iifff = function () {
    return (_0x42eb79 = _0x13e282.dynCall_iifff = _0x13e282.asm.rt).apply(null, arguments);
  };
  var _0x43e5b6 = _0x13e282.dynCall_iif = function () {
    return (_0x43e5b6 = _0x13e282.dynCall_iif = _0x13e282.asm.st).apply(null, arguments);
  };
  var _0x1dab6d = _0x13e282.dynCall_viijijj = function () {
    return (_0x1dab6d = _0x13e282.dynCall_viijijj = _0x13e282.asm.tt).apply(null, arguments);
  };
  var _0x58246f = _0x13e282.dynCall_viijj = function () {
    return (_0x58246f = _0x13e282.dynCall_viijj = _0x13e282.asm.ut).apply(null, arguments);
  };
  var _0xbf400a = _0x13e282.dynCall_viiiij = function () {
    return (_0xbf400a = _0x13e282.dynCall_viiiij = _0x13e282.asm.vt).apply(null, arguments);
  };
  var _0x288ca8 = _0x13e282.dynCall_iiijji = function () {
    return (_0x288ca8 = _0x13e282.dynCall_iiijji = _0x13e282.asm.wt).apply(null, arguments);
  };
  var _0x3f1b5c = _0x13e282.dynCall_ijjiiiii = function () {
    return (_0x3f1b5c = _0x13e282.dynCall_ijjiiiii = _0x13e282.asm.xt).apply(null, arguments);
  };
  var _0x3480ef = _0x13e282.dynCall_vidd = function () {
    return (_0x3480ef = _0x13e282.dynCall_vidd = _0x13e282.asm.yt).apply(null, arguments);
  };
  var _0x23415c = _0x13e282.dynCall_iiiiiifffiiifiii = function () {
    return (_0x23415c = _0x13e282.dynCall_iiiiiifffiiifiii = _0x13e282.asm.zt).apply(null, arguments);
  };
  var _0x539fc7 = _0x13e282.dynCall_viiif = function () {
    return (_0x539fc7 = _0x13e282.dynCall_viiif = _0x13e282.asm.At).apply(null, arguments);
  };
  var _0x498cde = _0x13e282.dynCall_fiiiif = function () {
    return (_0x498cde = _0x13e282.dynCall_fiiiif = _0x13e282.asm.Bt).apply(null, arguments);
  };
  var _0x375873 = _0x13e282.dynCall_viiifffiiij = function () {
    return (_0x375873 = _0x13e282.dynCall_viiifffiiij = _0x13e282.asm.Ct).apply(null, arguments);
  };
  var _0x2c8111 = _0x13e282.dynCall_viiffiiii = function () {
    return (_0x2c8111 = _0x13e282.dynCall_viiffiiii = _0x13e282.asm.Dt).apply(null, arguments);
  };
  var _0x1aae58 = _0x13e282.dynCall_vifff = function () {
    return (_0x1aae58 = _0x13e282.dynCall_vifff = _0x13e282.asm.Et).apply(null, arguments);
  };
  var _0x319773 = _0x13e282.dynCall_viifff = function () {
    return (_0x319773 = _0x13e282.dynCall_viifff = _0x13e282.asm.Ft).apply(null, arguments);
  };
  var _0x2698c7 = _0x13e282.dynCall_vf = function () {
    return (_0x2698c7 = _0x13e282.dynCall_vf = _0x13e282.asm.Gt).apply(null, arguments);
  };
  var _0x4d20d7 = _0x13e282.dynCall_vffff = function () {
    return (_0x4d20d7 = _0x13e282.dynCall_vffff = _0x13e282.asm.Ht).apply(null, arguments);
  };
  var _0x2ff057 = _0x13e282.dynCall_vff = function () {
    return (_0x2ff057 = _0x13e282.dynCall_vff = _0x13e282.asm.It).apply(null, arguments);
  };
  var _0x165c06 = _0x13e282.dynCall_fff = function () {
    return (_0x165c06 = _0x13e282.dynCall_fff = _0x13e282.asm.Jt).apply(null, arguments);
  };
  var _0x4ef3ce = _0x13e282.dynCall_f = function () {
    return (_0x4ef3ce = _0x13e282.dynCall_f = _0x13e282.asm.Kt).apply(null, arguments);
  };
  var _0x16f142 = _0x13e282.dynCall_vfff = function () {
    return (_0x16f142 = _0x13e282.dynCall_vfff = _0x13e282.asm.Lt).apply(null, arguments);
  };
  var _0x36e95e = _0x13e282.dynCall_ff = function () {
    return (_0x36e95e = _0x13e282.dynCall_ff = _0x13e282.asm.Mt).apply(null, arguments);
  };
  var _0x28e87 = _0x13e282.dynCall_iiifiifii = function () {
    return (_0x28e87 = _0x13e282.dynCall_iiifiifii = _0x13e282.asm.Nt).apply(null, arguments);
  };
  var _0x2958be = _0x13e282.dynCall_fiif = function () {
    return (_0x2958be = _0x13e282.dynCall_fiif = _0x13e282.asm.Ot).apply(null, arguments);
  };
  var _0x1b4086 = _0x13e282.dynCall_iiiiiiffiiiiiiiiiffffiii = function () {
    return (_0x1b4086 = _0x13e282.dynCall_iiiiiiffiiiiiiiiiffffiii = _0x13e282.asm.Pt).apply(null, arguments);
  };
  var _0x1ff82b = _0x13e282.dynCall_viififi = function () {
    return (_0x1ff82b = _0x13e282.dynCall_viififi = _0x13e282.asm.Qt).apply(null, arguments);
  };
  var _0xf13ed = _0x13e282.dynCall_viiiiiiiijiii = function () {
    return (_0xf13ed = _0x13e282.dynCall_viiiiiiiijiii = _0x13e282.asm.Rt).apply(null, arguments);
  };
  function _0x1ec127(_0x3104fb, _0x8bb680) {
    var _0xa7bc50 = _0x5b9f35();
    try {
      return _0xeafeff(_0x3104fb, _0x8bb680);
    } catch (_0x2bb153) {
      _0x50a678(_0xa7bc50);
      if (_0x2bb153 !== _0x2bb153 + 0 && _0x2bb153 !== "longjmp") {
        throw _0x2bb153;
      }
      _0x1cd625(1, 0);
    }
  }
  function _0x10c232(_0x15d82c, _0x33edf8, _0x40d7a2) {
    var _0x3d7f0a = _0x5b9f35();
    try {
      return _0x4ba2f4(_0x15d82c, _0x33edf8, _0x40d7a2);
    } catch (_0x11acd9) {
      _0x50a678(_0x3d7f0a);
      if (_0x11acd9 !== _0x11acd9 + 0 && _0x11acd9 !== "longjmp") {
        throw _0x11acd9;
      }
      _0x1cd625(1, 0);
    }
  }
  function _0x5e31e8(_0x2b6f32, _0x188edf, _0x5cb606, _0x46bf1a) {
    var _0x781c47 = _0x5b9f35();
    try {
      _0x5da989(_0x2b6f32, _0x188edf, _0x5cb606, _0x46bf1a);
    } catch (_0x573f4b) {
      _0x50a678(_0x781c47);
      if (_0x573f4b !== _0x573f4b + 0 && _0x573f4b !== "longjmp") {
        throw _0x573f4b;
      }
      _0x1cd625(1, 0);
    }
  }
  function _0x34a786(_0x5b00c5, _0xcf865e, _0x3e5d11, _0x237ced, _0xe6bb1b, _0x67726d) {
    var _0x2fc3f9 = _0x5b9f35();
    try {
      return _0x1c7db8(_0x5b00c5, _0xcf865e, _0x3e5d11, _0x237ced, _0xe6bb1b, _0x67726d);
    } catch (_0x2f83b7) {
      _0x50a678(_0x2fc3f9);
      if (_0x2f83b7 !== _0x2f83b7 + 0 && _0x2f83b7 !== "longjmp") {
        throw _0x2f83b7;
      }
      _0x1cd625(1, 0);
    }
  }
  function _0x35b568(_0x49f6e3, _0x39651c, _0x238bde, _0x1f6c95) {
    var _0x3d8a6d = _0x5b9f35();
    try {
      return _0x3518f2(_0x49f6e3, _0x39651c, _0x238bde, _0x1f6c95);
    } catch (_0x5d6e3a) {
      _0x50a678(_0x3d8a6d);
      if (_0x5d6e3a !== _0x5d6e3a + 0 && _0x5d6e3a !== "longjmp") {
        throw _0x5d6e3a;
      }
      _0x1cd625(1, 0);
    }
  }
  function _0xe0b981(_0x455562, _0x3f2f55, _0x352d38, _0x11fe68, _0x285ce6) {
    var _0x3213f6 = _0x5b9f35();
    try {
      _0xe60e83(_0x455562, _0x3f2f55, _0x352d38, _0x11fe68, _0x285ce6);
    } catch (_0x376a8c) {
      _0x50a678(_0x3213f6);
      if (_0x376a8c !== _0x376a8c + 0 && _0x376a8c !== "longjmp") {
        throw _0x376a8c;
      }
      _0x1cd625(1, 0);
    }
  }
  function _0x167cb5(_0x633ce2, _0x563e3c, _0x1257c9, _0x349199, _0x300347) {
    var _0x250149 = _0x5b9f35();
    try {
      return _0x5840c5(_0x633ce2, _0x563e3c, _0x1257c9, _0x349199, _0x300347);
    } catch (_0x300d9e) {
      _0x50a678(_0x250149);
      if (_0x300d9e !== _0x300d9e + 0 && _0x300d9e !== "longjmp") {
        throw _0x300d9e;
      }
      _0x1cd625(1, 0);
    }
  }
  function _0x2d3b9d(_0x216000, _0x1f5bd5, _0x46d9bc, _0x191c8a) {
    var _0x83a6ed = _0x5b9f35();
    try {
      return _0x4d9835(_0x216000, _0x1f5bd5, _0x46d9bc, _0x191c8a);
    } catch (_0x497a41) {
      _0x50a678(_0x83a6ed);
      if (_0x497a41 !== _0x497a41 + 0 && _0x497a41 !== "longjmp") {
        throw _0x497a41;
      }
      _0x1cd625(1, 0);
    }
  }
  function _0x18674e(_0x5f53e5, _0x27b6aa, _0x2305f6, _0x9070de) {
    var _0x5156f2 = _0x5b9f35();
    try {
      return _0x5b6a78(_0x5f53e5, _0x27b6aa, _0x2305f6, _0x9070de);
    } catch (_0x1b9f42) {
      _0x50a678(_0x5156f2);
      if (_0x1b9f42 !== _0x1b9f42 + 0 && _0x1b9f42 !== "longjmp") {
        throw _0x1b9f42;
      }
      _0x1cd625(1, 0);
    }
  }
  function _0x4b6ce2(_0x3bb53a, _0x1ada62, _0x1ca3f2, _0x5df877) {
    var _0x29658a = _0x5b9f35();
    try {
      _0x469a1b(_0x3bb53a, _0x1ada62, _0x1ca3f2, _0x5df877);
    } catch (_0x3054e7) {
      _0x50a678(_0x29658a);
      if (_0x3054e7 !== _0x3054e7 + 0 && _0x3054e7 !== "longjmp") {
        throw _0x3054e7;
      }
      _0x1cd625(1, 0);
    }
  }
  function _0x364c9d(_0x5baaa3, _0xeb4983, _0x45857c) {
    var _0x119b03 = _0x5b9f35();
    try {
      _0x2ceb05(_0x5baaa3, _0xeb4983, _0x45857c);
    } catch (_0x147155) {
      _0x50a678(_0x119b03);
      if (_0x147155 !== _0x147155 + 0 && _0x147155 !== "longjmp") {
        throw _0x147155;
      }
      _0x1cd625(1, 0);
    }
  }
  function _0x8499af(_0x461606, _0x2b272c) {
    var _0xbe3bc2 = _0x5b9f35();
    try {
      _0x3455a4(_0x461606, _0x2b272c);
    } catch (_0x5a2952) {
      _0x50a678(_0xbe3bc2);
      if (_0x5a2952 !== _0x5a2952 + 0 && _0x5a2952 !== "longjmp") {
        throw _0x5a2952;
      }
      _0x1cd625(1, 0);
    }
  }
  function _0x3c8833(_0x4970ae) {
    var _0x2f79c2 = _0x5b9f35();
    try {
      _0x5ec935(_0x4970ae);
    } catch (_0x2c3712) {
      _0x50a678(_0x2f79c2);
      if (_0x2c3712 !== _0x2c3712 + 0 && _0x2c3712 !== "longjmp") {
        throw _0x2c3712;
      }
      _0x1cd625(1, 0);
    }
  }
  function _0x287b22(_0x3958df) {
    var _0x2d3a44 = _0x5b9f35();
    try {
      return _0x4d45cd(_0x3958df);
    } catch (_0x1b8873) {
      _0x50a678(_0x2d3a44);
      if (_0x1b8873 !== _0x1b8873 + 0 && _0x1b8873 !== "longjmp") {
        throw _0x1b8873;
      }
      _0x1cd625(1, 0);
    }
  }
  function _0x153bf3(_0x19124f, _0x2bf0ee, _0x323191, _0x107140, _0x537b8a, _0x58f2e5, _0x3a3fe8, _0x26d127) {
    var _0x3a14a9 = _0x5b9f35();
    try {
      return _0x52e25f(_0x19124f, _0x2bf0ee, _0x323191, _0x107140, _0x537b8a, _0x58f2e5, _0x3a3fe8, _0x26d127);
    } catch (_0x2d283e) {
      _0x50a678(_0x3a14a9);
      if (_0x2d283e !== _0x2d283e + 0 && _0x2d283e !== "longjmp") {
        throw _0x2d283e;
      }
      _0x1cd625(1, 0);
    }
  }
  function _0x1ef5f2(_0x4f449d, _0x5c345b, _0xd86e1f, _0x299b74, _0x3fdf62, _0x4cb2fe) {
    var _0x5a7364 = _0x5b9f35();
    try {
      _0x645af6(_0x4f449d, _0x5c345b, _0xd86e1f, _0x299b74, _0x3fdf62, _0x4cb2fe);
    } catch (_0x143a8d) {
      _0x50a678(_0x5a7364);
      if (_0x143a8d !== _0x143a8d + 0 && _0x143a8d !== "longjmp") {
        throw _0x143a8d;
      }
      _0x1cd625(1, 0);
    }
  }
  function _0x45f3e4(_0x7759b8, _0x4fcb8, _0x21c83b, _0x223dfd, _0xe66b69, _0x3304d5, _0x47c69f) {
    var _0x2c59ad = _0x5b9f35();
    try {
      return _0x79f617(_0x7759b8, _0x4fcb8, _0x21c83b, _0x223dfd, _0xe66b69, _0x3304d5, _0x47c69f);
    } catch (_0x43ff41) {
      _0x50a678(_0x2c59ad);
      if (_0x43ff41 !== _0x43ff41 + 0 && _0x43ff41 !== "longjmp") {
        throw _0x43ff41;
      }
      _0x1cd625(1, 0);
    }
  }
  function _0x5b4539(_0x4afec8, _0x3614bd, _0x7374cb, _0x1bfe31, _0x6d1de5, _0x57309c, _0x31a4b5, _0xdd2530) {
    var _0x5077bc = _0x5b9f35();
    try {
      _0x45c966(_0x4afec8, _0x3614bd, _0x7374cb, _0x1bfe31, _0x6d1de5, _0x57309c, _0x31a4b5, _0xdd2530);
    } catch (_0x2f8546) {
      _0x50a678(_0x5077bc);
      if (_0x2f8546 !== _0x2f8546 + 0 && _0x2f8546 !== "longjmp") {
        throw _0x2f8546;
      }
      _0x1cd625(1, 0);
    }
  }
  function _0xc6d128(_0x2fb606, _0x1a7b6a, _0x4ef24c, _0x12ac83, _0x32bde3, _0x5cff66, _0x1b787d) {
    var _0x3edbf = _0x5b9f35();
    try {
      _0x448091(_0x2fb606, _0x1a7b6a, _0x4ef24c, _0x12ac83, _0x32bde3, _0x5cff66, _0x1b787d);
    } catch (_0x22bf26) {
      _0x50a678(_0x3edbf);
      if (_0x22bf26 !== _0x22bf26 + 0 && _0x22bf26 !== "longjmp") {
        throw _0x22bf26;
      }
      _0x1cd625(1, 0);
    }
  }
  function _0x248f47(_0x69dc28, _0x23e50e, _0x4cbfc4, _0x121317, _0x428b1d, _0x1d39cc, _0x18d4b4, _0x3a15b0, _0xfae08) {
    var _0x441c80 = _0x5b9f35();
    try {
      return _0x222d41(_0x69dc28, _0x23e50e, _0x4cbfc4, _0x121317, _0x428b1d, _0x1d39cc, _0x18d4b4, _0x3a15b0, _0xfae08);
    } catch (_0x4c2ca2) {
      _0x50a678(_0x441c80);
      if (_0x4c2ca2 !== _0x4c2ca2 + 0 && _0x4c2ca2 !== "longjmp") {
        throw _0x4c2ca2;
      }
      _0x1cd625(1, 0);
    }
  }
  function _0x14f3f6(_0x1d592a, _0x264eae, _0x2999b5) {
    var _0x2a56fa = _0x5b9f35();
    try {
      return _0x29e109(_0x1d592a, _0x264eae, _0x2999b5);
    } catch (_0x311802) {
      _0x50a678(_0x2a56fa);
      if (_0x311802 !== _0x311802 + 0 && _0x311802 !== "longjmp") {
        throw _0x311802;
      }
      _0x1cd625(1, 0);
    }
  }
  function _0x5e3904(_0x4682f3, _0x34f326, _0x27079d, _0x1e8420, _0x138ebb) {
    var _0x237b92 = _0x5b9f35();
    try {
      _0xa66a08(_0x4682f3, _0x34f326, _0x27079d, _0x1e8420, _0x138ebb);
    } catch (_0x105c81) {
      _0x50a678(_0x237b92);
      if (_0x105c81 !== _0x105c81 + 0 && _0x105c81 !== "longjmp") {
        throw _0x105c81;
      }
      _0x1cd625(1, 0);
    }
  }
  function _0x557172(_0x4551dc, _0x2f57a0, _0x21f56f, _0x2318d5, _0xa17de2) {
    var _0x41abd5 = _0x5b9f35();
    try {
      _0x37a3e0(_0x4551dc, _0x2f57a0, _0x21f56f, _0x2318d5, _0xa17de2);
    } catch (_0x2456e7) {
      _0x50a678(_0x41abd5);
      if (_0x2456e7 !== _0x2456e7 + 0 && _0x2456e7 !== "longjmp") {
        throw _0x2456e7;
      }
      _0x1cd625(1, 0);
    }
  }
  function _0x5b86e9(_0x206929, _0x38d960, _0x2fe022, _0xb44a37, _0x48bd4d) {
    var _0x4efa45 = _0x5b9f35();
    try {
      _0x4f9021(_0x206929, _0x38d960, _0x2fe022, _0xb44a37, _0x48bd4d);
    } catch (_0xcb9d5a) {
      _0x50a678(_0x4efa45);
      if (_0xcb9d5a !== _0xcb9d5a + 0 && _0xcb9d5a !== "longjmp") {
        throw _0xcb9d5a;
      }
      _0x1cd625(1, 0);
    }
  }
  function _0x9eea7f(_0x4f7f21, _0x3400b8, _0xe51b8f, _0x37db09) {
    var _0xa48d6c = _0x5b9f35();
    try {
      _0x263d14(_0x4f7f21, _0x3400b8, _0xe51b8f, _0x37db09);
    } catch (_0x4ed677) {
      _0x50a678(_0xa48d6c);
      if (_0x4ed677 !== _0x4ed677 + 0 && _0x4ed677 !== "longjmp") {
        throw _0x4ed677;
      }
      _0x1cd625(1, 0);
    }
  }
  function _0x71db8c(_0xcac2ca, _0x29b730, _0x361594, _0x2f5c67, _0xc4d6d0, _0x562348, _0x2663ad, _0x53ac19, _0x35140b, _0x14eb90) {
    var _0x3c91eb = _0x5b9f35();
    try {
      _0x1cd856(_0xcac2ca, _0x29b730, _0x361594, _0x2f5c67, _0xc4d6d0, _0x562348, _0x2663ad, _0x53ac19, _0x35140b, _0x14eb90);
    } catch (_0x5bfb7c) {
      _0x50a678(_0x3c91eb);
      if (_0x5bfb7c !== _0x5bfb7c + 0 && _0x5bfb7c !== "longjmp") {
        throw _0x5bfb7c;
      }
      _0x1cd625(1, 0);
    }
  }
  function _0xe0dcc(_0x176cb4, _0x5dc700, _0x5c1628) {
    var _0x429877 = _0x5b9f35();
    try {
      return _0x8a968b(_0x176cb4, _0x5dc700, _0x5c1628);
    } catch (_0x5c39d5) {
      _0x50a678(_0x429877);
      if (_0x5c39d5 !== _0x5c39d5 + 0 && _0x5c39d5 !== "longjmp") {
        throw _0x5c39d5;
      }
      _0x1cd625(1, 0);
    }
  }
  function _0x3aa4b7(_0x953205, _0x5da486, _0x482160, _0x354ea6, _0x11a9a8, _0x758399, _0x595edb, _0x46cd49, _0x3cc987) {
    var _0x5bab1d = _0x5b9f35();
    try {
      _0x57443e(_0x953205, _0x5da486, _0x482160, _0x354ea6, _0x11a9a8, _0x758399, _0x595edb, _0x46cd49, _0x3cc987);
    } catch (_0x2e5029) {
      _0x50a678(_0x5bab1d);
      if (_0x2e5029 !== _0x2e5029 + 0 && _0x2e5029 !== "longjmp") {
        throw _0x2e5029;
      }
      _0x1cd625(1, 0);
    }
  }
  function _0x34a36a(_0x3ba03f, _0x1ef7ae, _0x20a201) {
    var _0x27eabd = _0x5b9f35();
    try {
      return _0x49e468(_0x3ba03f, _0x1ef7ae, _0x20a201);
    } catch (_0x1ce550) {
      _0x50a678(_0x27eabd);
      if (_0x1ce550 !== _0x1ce550 + 0 && _0x1ce550 !== "longjmp") {
        throw _0x1ce550;
      }
      _0x1cd625(1, 0);
    }
  }
  function _0x542cda(_0xc3f45, _0x1e99b4, _0x444236) {
    var _0x5c1468 = _0x5b9f35();
    try {
      return _0x512d32(_0xc3f45, _0x1e99b4, _0x444236);
    } catch (_0x3d0328) {
      _0x50a678(_0x5c1468);
      if (_0x3d0328 !== _0x3d0328 + 0 && _0x3d0328 !== "longjmp") {
        throw _0x3d0328;
      }
      _0x1cd625(1, 0);
    }
  }
  function _0x2e4801(_0xf45a26, _0x36e603, _0x142cdc, _0x5aae57, _0x5a5657, _0x4122c3, _0x24adcf, _0x44dbf1, _0x5bea10, _0x19d27d, _0x4df35e, _0x153ca9, _0x9e1ff9) {
    var _0x25fb61 = _0x5b9f35();
    try {
      _0x4fec5c(_0xf45a26, _0x36e603, _0x142cdc, _0x5aae57, _0x5a5657, _0x4122c3, _0x24adcf, _0x44dbf1, _0x5bea10, _0x19d27d, _0x4df35e, _0x153ca9, _0x9e1ff9);
    } catch (_0x525c86) {
      _0x50a678(_0x25fb61);
      if (_0x525c86 !== _0x525c86 + 0 && _0x525c86 !== "longjmp") {
        throw _0x525c86;
      }
      _0x1cd625(1, 0);
    }
  }
  function _0x18e95f(_0x2fa3bf, _0x13d703, _0x45a670, _0x37a83e) {
    var _0x31086f = _0x5b9f35();
    try {
      _0x2b220e(_0x2fa3bf, _0x13d703, _0x45a670, _0x37a83e);
    } catch (_0x18d26f) {
      _0x50a678(_0x31086f);
      if (_0x18d26f !== _0x18d26f + 0 && _0x18d26f !== "longjmp") {
        throw _0x18d26f;
      }
      _0x1cd625(1, 0);
    }
  }
  function _0x803a51(_0x507646, _0x4c980f, _0x7211f, _0x3bda8c) {
    var _0x92e824 = _0x5b9f35();
    try {
      return _0x28eaa6(_0x507646, _0x4c980f, _0x7211f, _0x3bda8c);
    } catch (_0xc91ea1) {
      _0x50a678(_0x92e824);
      if (_0xc91ea1 !== _0xc91ea1 + 0 && _0xc91ea1 !== "longjmp") {
        throw _0xc91ea1;
      }
      _0x1cd625(1, 0);
    }
  }
  function _0x20bee8(_0x1ae02c, _0x526ffa, _0x21b3e4, _0x208a28) {
    var _0x20692f = _0x5b9f35();
    try {
      return _0x100f85(_0x1ae02c, _0x526ffa, _0x21b3e4, _0x208a28);
    } catch (_0x3d5d4e) {
      _0x50a678(_0x20692f);
      if (_0x3d5d4e !== _0x3d5d4e + 0 && _0x3d5d4e !== "longjmp") {
        throw _0x3d5d4e;
      }
      _0x1cd625(1, 0);
    }
  }
  function _0x62cb7(_0x1f752c, _0x554aa3, _0x8224e9, _0x563058) {
    var _0x1ce4d4 = _0x5b9f35();
    try {
      return _0x548cfd(_0x1f752c, _0x554aa3, _0x8224e9, _0x563058);
    } catch (_0x21a1a4) {
      _0x50a678(_0x1ce4d4);
      if (_0x21a1a4 !== _0x21a1a4 + 0 && _0x21a1a4 !== "longjmp") {
        throw _0x21a1a4;
      }
      _0x1cd625(1, 0);
    }
  }
  function _0xcf81a3(_0x1a61ba, _0x1ce112, _0x436037, _0x584468, _0x2d2839) {
    var _0x5320d2 = _0x5b9f35();
    try {
      return _0xcb37a1(_0x1a61ba, _0x1ce112, _0x436037, _0x584468, _0x2d2839);
    } catch (_0x2f7321) {
      _0x50a678(_0x5320d2);
      if (_0x2f7321 !== _0x2f7321 + 0 && _0x2f7321 !== "longjmp") {
        throw _0x2f7321;
      }
      _0x1cd625(1, 0);
    }
  }
  function _0x364181(_0x3804e8, _0x5f2421, _0x3db62d, _0x183c67, _0x1abdd9, _0x9e4e03, _0xba826b, _0xcafcb, _0xe141f9, _0x240472, _0x583d01) {
    var _0x47c3e0 = _0x5b9f35();
    try {
      _0x1a482b(_0x3804e8, _0x5f2421, _0x3db62d, _0x183c67, _0x1abdd9, _0x9e4e03, _0xba826b, _0xcafcb, _0xe141f9, _0x240472, _0x583d01);
    } catch (_0x1c80b8) {
      _0x50a678(_0x47c3e0);
      if (_0x1c80b8 !== _0x1c80b8 + 0 && _0x1c80b8 !== "longjmp") {
        throw _0x1c80b8;
      }
      _0x1cd625(1, 0);
    }
  }
  function _0x1c28cf(_0xa92ff8, _0x490c8b, _0x280f57, _0x58bdeb) {
    var _0x18d1d1 = _0x5b9f35();
    try {
      return _0x554606(_0xa92ff8, _0x490c8b, _0x280f57, _0x58bdeb);
    } catch (_0x102f04) {
      _0x50a678(_0x18d1d1);
      if (_0x102f04 !== _0x102f04 + 0 && _0x102f04 !== "longjmp") {
        throw _0x102f04;
      }
      _0x1cd625(1, 0);
    }
  }
  function _0x320aaa(_0x5983ec, _0x164a5e, _0x3a6459, _0x2b011e, _0x525407, _0x3b26e6) {
    var _0x3e0781 = _0x5b9f35();
    try {
      _0x2f34ae(_0x5983ec, _0x164a5e, _0x3a6459, _0x2b011e, _0x525407, _0x3b26e6);
    } catch (_0x246f75) {
      _0x50a678(_0x3e0781);
      if (_0x246f75 !== _0x246f75 + 0 && _0x246f75 !== "longjmp") {
        throw _0x246f75;
      }
      _0x1cd625(1, 0);
    }
  }
  function _0x1b8092(_0x563309, _0x1cec70, _0x13a03c, _0x5ddab7, _0x2401a4, _0x190640) {
    var _0x30151e = _0x5b9f35();
    try {
      _0x5397fa(_0x563309, _0x1cec70, _0x13a03c, _0x5ddab7, _0x2401a4, _0x190640);
    } catch (_0x4db1a4) {
      _0x50a678(_0x30151e);
      if (_0x4db1a4 !== _0x4db1a4 + 0 && _0x4db1a4 !== "longjmp") {
        throw _0x4db1a4;
      }
      _0x1cd625(1, 0);
    }
  }
  function _0x455067(_0x198cda, _0x9f5a0c, _0x1c880e, _0x978f8c, _0x100710, _0xa9bab0) {
    var _0x588711 = _0x5b9f35();
    try {
      _0x5d0a52(_0x198cda, _0x9f5a0c, _0x1c880e, _0x978f8c, _0x100710, _0xa9bab0);
    } catch (_0x22c17b) {
      _0x50a678(_0x588711);
      if (_0x22c17b !== _0x22c17b + 0 && _0x22c17b !== "longjmp") {
        throw _0x22c17b;
      }
      _0x1cd625(1, 0);
    }
  }
  function _0x5cc1c7(_0x4ce597, _0x52c430, _0x1412b2, _0x14f316, _0x1c3683, _0x1c65e3) {
    var _0x44e510 = _0x5b9f35();
    try {
      _0x396817(_0x4ce597, _0x52c430, _0x1412b2, _0x14f316, _0x1c3683, _0x1c65e3);
    } catch (_0x359542) {
      _0x50a678(_0x44e510);
      if (_0x359542 !== _0x359542 + 0 && _0x359542 !== "longjmp") {
        throw _0x359542;
      }
      _0x1cd625(1, 0);
    }
  }
  function _0x20a3c6(_0x319cd6, _0x3a8f83, _0x2855a3, _0x1ef339, _0x164843) {
    var _0x3b49b2 = _0x5b9f35();
    try {
      return _0x3e9da7(_0x319cd6, _0x3a8f83, _0x2855a3, _0x1ef339, _0x164843);
    } catch (_0xc4cde9) {
      _0x50a678(_0x3b49b2);
      if (_0xc4cde9 !== _0xc4cde9 + 0 && _0xc4cde9 !== "longjmp") {
        throw _0xc4cde9;
      }
      _0x1cd625(1, 0);
    }
  }
  function _0x8c141e(_0x39c6cc, _0x6f372d, _0x50f0dc, _0x477004, _0x419f9e) {
    var _0x5260ee = _0x5b9f35();
    try {
      return _0x4c3fbb(_0x39c6cc, _0x6f372d, _0x50f0dc, _0x477004, _0x419f9e);
    } catch (_0x2b9cc1) {
      _0x50a678(_0x5260ee);
      if (_0x2b9cc1 !== _0x2b9cc1 + 0 && _0x2b9cc1 !== "longjmp") {
        throw _0x2b9cc1;
      }
      _0x1cd625(1, 0);
    }
  }
  function _0x16ff3d(_0xdf99eb, _0x2d9309, _0x4d558e, _0x1cb520, _0xaf8f19, _0x11a475) {
    var _0x3e37c3 = _0x5b9f35();
    try {
      _0x52f861(_0xdf99eb, _0x2d9309, _0x4d558e, _0x1cb520, _0xaf8f19, _0x11a475);
    } catch (_0x4196fd) {
      _0x50a678(_0x3e37c3);
      if (_0x4196fd !== _0x4196fd + 0 && _0x4196fd !== "longjmp") {
        throw _0x4196fd;
      }
      _0x1cd625(1, 0);
    }
  }
  function _0x2b166c(_0x5f2526, _0x3fc947, _0x1eaecc, _0x2b093f, _0x2f2bbb, _0x94f7b, _0xa8be7b, _0x433239, _0x5e6b17, _0x5b7389) {
    var _0x35acff = _0x5b9f35();
    try {
      return _0x21ee3b(_0x5f2526, _0x3fc947, _0x1eaecc, _0x2b093f, _0x2f2bbb, _0x94f7b, _0xa8be7b, _0x433239, _0x5e6b17, _0x5b7389);
    } catch (_0xb22c83) {
      _0x50a678(_0x35acff);
      if (_0xb22c83 !== _0xb22c83 + 0 && _0xb22c83 !== "longjmp") {
        throw _0xb22c83;
      }
      _0x1cd625(1, 0);
    }
  }
  function _0x34c3ed(_0x377da8, _0x120439, _0x447b1f, _0x5d5ca1, _0xf762e, _0x63d831) {
    var _0x2426fb = _0x5b9f35();
    try {
      return _0x3f2c1c(_0x377da8, _0x120439, _0x447b1f, _0x5d5ca1, _0xf762e, _0x63d831);
    } catch (_0x3aa8aa) {
      _0x50a678(_0x2426fb);
      if (_0x3aa8aa !== _0x3aa8aa + 0 && _0x3aa8aa !== "longjmp") {
        throw _0x3aa8aa;
      }
      _0x1cd625(1, 0);
    }
  }
  function _0x2d4a0b(_0x563f6d, _0x55795a, _0x4bec52, _0x303812, _0x16d91c, _0xf95edb, _0xc938, _0x3e227f) {
    var _0x3057a3 = _0x5b9f35();
    try {
      return _0x575bdb(_0x563f6d, _0x55795a, _0x4bec52, _0x303812, _0x16d91c, _0xf95edb, _0xc938, _0x3e227f);
    } catch (_0x1ae141) {
      _0x50a678(_0x3057a3);
      if (_0x1ae141 !== _0x1ae141 + 0 && _0x1ae141 !== "longjmp") {
        throw _0x1ae141;
      }
      _0x1cd625(1, 0);
    }
  }
  function _0x38c905(_0x19cd81, _0x4c568e, _0x22f19e, _0x38daf6, _0x16e214, _0x32d5c1, _0x23fa1e) {
    var _0x3a68ad = _0x5b9f35();
    try {
      return _0x788e5e(_0x19cd81, _0x4c568e, _0x22f19e, _0x38daf6, _0x16e214, _0x32d5c1, _0x23fa1e);
    } catch (_0x17df5c) {
      _0x50a678(_0x3a68ad);
      if (_0x17df5c !== _0x17df5c + 0 && _0x17df5c !== "longjmp") {
        throw _0x17df5c;
      }
      _0x1cd625(1, 0);
    }
  }
  function _0x46fad0(_0x4bf020, _0x1e78f0, _0x333c55, _0x59f5f2, _0x44db6a, _0x12ed75, _0x1440e9, _0x298fd4, _0x14b22c, _0xb3223e, _0x50a3c5, _0xae95f0) {
    var _0x1327d0 = _0x5b9f35();
    try {
      _0x29ea3b(_0x4bf020, _0x1e78f0, _0x333c55, _0x59f5f2, _0x44db6a, _0x12ed75, _0x1440e9, _0x298fd4, _0x14b22c, _0xb3223e, _0x50a3c5, _0xae95f0);
    } catch (_0x3bd6f1) {
      _0x50a678(_0x1327d0);
      if (_0x3bd6f1 !== _0x3bd6f1 + 0 && _0x3bd6f1 !== "longjmp") {
        throw _0x3bd6f1;
      }
      _0x1cd625(1, 0);
    }
  }
  function _0x210a35(_0x4d629f, _0x46f772, _0x3c18a5, _0x70bb81, _0x2aed98, _0x117fce, _0x3c477b, _0x9c9af0, _0x3a8344, _0x4a227a, _0x4e6314, _0x19f1c2, _0x2ceb4e) {
    var _0x409873 = _0x5b9f35();
    try {
      return _0x2d40c5(_0x4d629f, _0x46f772, _0x3c18a5, _0x70bb81, _0x2aed98, _0x117fce, _0x3c477b, _0x9c9af0, _0x3a8344, _0x4a227a, _0x4e6314, _0x19f1c2, _0x2ceb4e);
    } catch (_0x5e5e4b) {
      _0x50a678(_0x409873);
      if (_0x5e5e4b !== _0x5e5e4b + 0 && _0x5e5e4b !== "longjmp") {
        throw _0x5e5e4b;
      }
      _0x1cd625(1, 0);
    }
  }
  function _0x28e851(_0x36ff3a, _0x46cb43, _0x185ed1, _0x4b3835, _0x4509c0) {
    var _0x1c56ac = _0x5b9f35();
    try {
      return _0xbe331c(_0x36ff3a, _0x46cb43, _0x185ed1, _0x4b3835, _0x4509c0);
    } catch (_0x411eff) {
      _0x50a678(_0x1c56ac);
      if (_0x411eff !== _0x411eff + 0 && _0x411eff !== "longjmp") {
        throw _0x411eff;
      }
      _0x1cd625(1, 0);
    }
  }
  function _0x5260f9(_0x201712, _0x5f5dbf, _0x5e8a08, _0x20719d, _0x4db707, _0x591048, _0x5c64ca, _0x55680d, _0x111639, _0x229c4e, _0x126a7b) {
    var _0x493113 = _0x5b9f35();
    try {
      return _0x4e527a(_0x201712, _0x5f5dbf, _0x5e8a08, _0x20719d, _0x4db707, _0x591048, _0x5c64ca, _0x55680d, _0x111639, _0x229c4e, _0x126a7b);
    } catch (_0x2cb94f) {
      _0x50a678(_0x493113);
      if (_0x2cb94f !== _0x2cb94f + 0 && _0x2cb94f !== "longjmp") {
        throw _0x2cb94f;
      }
      _0x1cd625(1, 0);
    }
  }
  function _0x2e2575(_0x1ffb8a, _0x435ca6, _0x8e0e5f, _0x48889f, _0x3167b4, _0x3ce649, _0x1300f5, _0x53b2ad, _0x5dcf8c, _0x375228, _0x2f177b, _0x18ef6e, _0x2f34e8, _0x208692, _0x2f584d) {
    var _0x17a411 = _0x5b9f35();
    try {
      _0x17527b(_0x1ffb8a, _0x435ca6, _0x8e0e5f, _0x48889f, _0x3167b4, _0x3ce649, _0x1300f5, _0x53b2ad, _0x5dcf8c, _0x375228, _0x2f177b, _0x18ef6e, _0x2f34e8, _0x208692, _0x2f584d);
    } catch (_0x40a843) {
      _0x50a678(_0x17a411);
      if (_0x40a843 !== _0x40a843 + 0 && _0x40a843 !== "longjmp") {
        throw _0x40a843;
      }
      _0x1cd625(1, 0);
    }
  }
  function _0x20d7b8(_0x1f2c76, _0x12e6d1, _0x433c08, _0x2ab753, _0x10d5df, _0x19208e, _0x3b555c, _0x5106da, _0x31e048, _0x42ca2f, _0x51e005, _0x6fd35c, _0x2779cb, _0x2e6c3d, _0x34dbfa) {
    var _0x5cdb35 = _0x5b9f35();
    try {
      _0x246dde(_0x1f2c76, _0x12e6d1, _0x433c08, _0x2ab753, _0x10d5df, _0x19208e, _0x3b555c, _0x5106da, _0x31e048, _0x42ca2f, _0x51e005, _0x6fd35c, _0x2779cb, _0x2e6c3d, _0x34dbfa);
    } catch (_0x4a4c16) {
      _0x50a678(_0x5cdb35);
      if (_0x4a4c16 !== _0x4a4c16 + 0 && _0x4a4c16 !== "longjmp") {
        throw _0x4a4c16;
      }
      _0x1cd625(1, 0);
    }
  }
  function _0x553504(_0x51266f, _0x5090e6, _0xee00de, _0x305dab, _0x12ccc6, _0x4e659f, _0x2b118d, _0x420601, _0x57f79b, _0x266a99, _0x578990, _0x52abde, _0x95097d, _0x41e1c0, _0x1e8c20) {
    var _0x4665c6 = _0x5b9f35();
    try {
      _0x205aff(_0x51266f, _0x5090e6, _0xee00de, _0x305dab, _0x12ccc6, _0x4e659f, _0x2b118d, _0x420601, _0x57f79b, _0x266a99, _0x578990, _0x52abde, _0x95097d, _0x41e1c0, _0x1e8c20);
    } catch (_0x32d37d) {
      _0x50a678(_0x4665c6);
      if (_0x32d37d !== _0x32d37d + 0 && _0x32d37d !== "longjmp") {
        throw _0x32d37d;
      }
      _0x1cd625(1, 0);
    }
  }
  function _0x12251a(_0x22925c, _0x22eab7) {
    var _0x58bc8a = _0x5b9f35();
    try {
      return _0x5b9242(_0x22925c, _0x22eab7);
    } catch (_0x1e07a7) {
      _0x50a678(_0x58bc8a);
      if (_0x1e07a7 !== _0x1e07a7 + 0 && _0x1e07a7 !== "longjmp") {
        throw _0x1e07a7;
      }
      _0x1cd625(1, 0);
    }
  }
  function _0x519fa6(_0x49bd20, _0x4c253f, _0x3fc2a3, _0x58c958, _0x420880) {
    var _0x44d192 = _0x5b9f35();
    try {
      return _0x59ff54(_0x49bd20, _0x4c253f, _0x3fc2a3, _0x58c958, _0x420880);
    } catch (_0x386701) {
      _0x50a678(_0x44d192);
      if (_0x386701 !== _0x386701 + 0 && _0x386701 !== "longjmp") {
        throw _0x386701;
      }
      _0x1cd625(1, 0);
    }
  }
  function _0x1cafd7(_0x548e25, _0x2f1dbf, _0x4e7cf7, _0x40c914, _0x5bc816, _0x4b7b52, _0x373e2f) {
    var _0x47f04c = _0x5b9f35();
    try {
      _0x376a7c(_0x548e25, _0x2f1dbf, _0x4e7cf7, _0x40c914, _0x5bc816, _0x4b7b52, _0x373e2f);
    } catch (_0x453d4f) {
      _0x50a678(_0x47f04c);
      if (_0x453d4f !== _0x453d4f + 0 && _0x453d4f !== "longjmp") {
        throw _0x453d4f;
      }
      _0x1cd625(1, 0);
    }
  }
  function _0x1c90a5(_0x4bace6, _0x4e2b3a, _0xe8c48, _0x4af228, _0x446ff8) {
    var _0x5444b7 = _0x5b9f35();
    try {
      return _0x1338aa(_0x4bace6, _0x4e2b3a, _0xe8c48, _0x4af228, _0x446ff8);
    } catch (_0x180c09) {
      _0x50a678(_0x5444b7);
      if (_0x180c09 !== _0x180c09 + 0 && _0x180c09 !== "longjmp") {
        throw _0x180c09;
      }
      _0x1cd625(1, 0);
    }
  }
  function _0xae1fa8(_0x1f9fa1, _0x18f9c0, _0xf1c23a, _0x219550, _0x1f7660, _0x72509d, _0x4af6da) {
    var _0x2f811c = _0x5b9f35();
    try {
      return _0x5db73a(_0x1f9fa1, _0x18f9c0, _0xf1c23a, _0x219550, _0x1f7660, _0x72509d, _0x4af6da);
    } catch (_0x1e7faf) {
      _0x50a678(_0x2f811c);
      if (_0x1e7faf !== _0x1e7faf + 0 && _0x1e7faf !== "longjmp") {
        throw _0x1e7faf;
      }
      _0x1cd625(1, 0);
    }
  }
  function _0x16c84a(_0x56381c, _0x269a26, _0x5c73b7, _0x208178, _0x880ff8, _0x10bc51, _0x45bf31) {
    var _0x3b7835 = _0x5b9f35();
    try {
      return _0x48b593(_0x56381c, _0x269a26, _0x5c73b7, _0x208178, _0x880ff8, _0x10bc51, _0x45bf31);
    } catch (_0x55de60) {
      _0x50a678(_0x3b7835);
      if (_0x55de60 !== _0x55de60 + 0 && _0x55de60 !== "longjmp") {
        throw _0x55de60;
      }
      _0x1cd625(1, 0);
    }
  }
  function _0x4f8c37(_0x498fc8, _0x174dec, _0x180f29, _0x1f9d43) {
    var _0x1015f2 = _0x5b9f35();
    try {
      _0x3480ef(_0x498fc8, _0x174dec, _0x180f29, _0x1f9d43);
    } catch (_0x5df7c7) {
      _0x50a678(_0x1015f2);
      if (_0x5df7c7 !== _0x5df7c7 + 0 && _0x5df7c7 !== "longjmp") {
        throw _0x5df7c7;
      }
      _0x1cd625(1, 0);
    }
  }
  function _0x27095a(_0x4b499a, _0x4b51a7, _0x32a709, _0x114ab3, _0x31097c) {
    var _0x2535e6 = _0x5b9f35();
    try {
      return _0x13f306(_0x4b499a, _0x4b51a7, _0x32a709, _0x114ab3, _0x31097c);
    } catch (_0x3311fe) {
      _0x50a678(_0x2535e6);
      if (_0x3311fe !== _0x3311fe + 0 && _0x3311fe !== "longjmp") {
        throw _0x3311fe;
      }
      _0x1cd625(1, 0);
    }
  }
  function _0x38a508(_0x4c09af, _0x2c4fb8, _0x5b6bab, _0x36a48b, _0x51f6c8) {
    var _0x2dff09 = _0x5b9f35();
    try {
      return _0xd89f3e(_0x4c09af, _0x2c4fb8, _0x5b6bab, _0x36a48b, _0x51f6c8);
    } catch (_0x202fc4) {
      _0x50a678(_0x2dff09);
      if (_0x202fc4 !== _0x202fc4 + 0 && _0x202fc4 !== "longjmp") {
        throw _0x202fc4;
      }
      _0x1cd625(1, 0);
    }
  }
  function _0x278ff1(_0x34f612) {
    var _0x3357a6 = _0x5b9f35();
    try {
      return _0x36ec94(_0x34f612);
    } catch (_0xda0ab9) {
      _0x50a678(_0x3357a6);
      if (_0xda0ab9 !== _0xda0ab9 + 0 && _0xda0ab9 !== "longjmp") {
        throw _0xda0ab9;
      }
      _0x1cd625(1, 0);
    }
  }
  function _0x812e68(_0x1dc00e, _0x1c0ad6, _0x1913ac, _0x134a1e) {
    var _0x1a37dc = _0x5b9f35();
    try {
      return _0x26598a(_0x1dc00e, _0x1c0ad6, _0x1913ac, _0x134a1e);
    } catch (_0x2f2223) {
      _0x50a678(_0x1a37dc);
      if (_0x2f2223 !== _0x2f2223 + 0 && _0x2f2223 !== "longjmp") {
        throw _0x2f2223;
      }
      _0x1cd625(1, 0);
    }
  }
  function _0x693668(_0x183ac1, _0x3ddfbd, _0x529fb6, _0x5a8fd8, _0x25b8d9, _0x181536, _0x6fc572, _0x4510c3) {
    var _0xfdb35 = _0x5b9f35();
    try {
      return _0x34062d(_0x183ac1, _0x3ddfbd, _0x529fb6, _0x5a8fd8, _0x25b8d9, _0x181536, _0x6fc572, _0x4510c3);
    } catch (_0x18894a) {
      _0x50a678(_0xfdb35);
      if (_0x18894a !== _0x18894a + 0 && _0x18894a !== "longjmp") {
        throw _0x18894a;
      }
      _0x1cd625(1, 0);
    }
  }
  function _0x48c246(_0x41abd7, _0x54a85b) {
    var _0x1136d1 = _0x5b9f35();
    try {
      return _0x580203(_0x41abd7, _0x54a85b);
    } catch (_0x464fcc) {
      _0x50a678(_0x1136d1);
      if (_0x464fcc !== _0x464fcc + 0 && _0x464fcc !== "longjmp") {
        throw _0x464fcc;
      }
      _0x1cd625(1, 0);
    }
  }
  function _0x565f3e(_0x57cef5, _0x4bfc33, _0x199172) {
    var _0x24c878 = _0x5b9f35();
    try {
      return _0xa215ca(_0x57cef5, _0x4bfc33, _0x199172);
    } catch (_0x4f2baa) {
      _0x50a678(_0x24c878);
      if (_0x4f2baa !== _0x4f2baa + 0 && _0x4f2baa !== "longjmp") {
        throw _0x4f2baa;
      }
      _0x1cd625(1, 0);
    }
  }
  function _0x519622(_0x39533a, _0x3682b9, _0x5c6ea0, _0x971aa6) {
    var _0x47f274 = _0x5b9f35();
    try {
      return _0x274fb8(_0x39533a, _0x3682b9, _0x5c6ea0, _0x971aa6);
    } catch (_0x23dbe2) {
      _0x50a678(_0x47f274);
      if (_0x23dbe2 !== _0x23dbe2 + 0 && _0x23dbe2 !== "longjmp") {
        throw _0x23dbe2;
      }
      _0x1cd625(1, 0);
    }
  }
  function _0x433fa7(_0x8ae3f8, _0x50bc05, _0x5313b6, _0x1d4695, _0x1ebbe2, _0x281379) {
    var _0x326771 = _0x5b9f35();
    try {
      _0x211909(_0x8ae3f8, _0x50bc05, _0x5313b6, _0x1d4695, _0x1ebbe2, _0x281379);
    } catch (_0x5d9a56) {
      _0x50a678(_0x326771);
      if (_0x5d9a56 !== _0x5d9a56 + 0 && _0x5d9a56 !== "longjmp") {
        throw _0x5d9a56;
      }
      _0x1cd625(1, 0);
    }
  }
  function _0x51c3fb(_0x8eca67, _0x33b43e, _0x3cc237, _0x5bc8ea, _0x29de67, _0x393cfc) {
    var _0x41e1a4 = _0x5b9f35();
    try {
      _0x84fdf9(_0x8eca67, _0x33b43e, _0x3cc237, _0x5bc8ea, _0x29de67, _0x393cfc);
    } catch (_0x1d8611) {
      _0x50a678(_0x41e1a4);
      if (_0x1d8611 !== _0x1d8611 + 0 && _0x1d8611 !== "longjmp") {
        throw _0x1d8611;
      }
      _0x1cd625(1, 0);
    }
  }
  function _0x52f532(_0x452c88, _0x5a72e2, _0x2c4a0d, _0x439fa5, _0x582028, _0x522568) {
    var _0x176750 = _0x5b9f35();
    try {
      _0x3aa4bd(_0x452c88, _0x5a72e2, _0x2c4a0d, _0x439fa5, _0x582028, _0x522568);
    } catch (_0x154fd0) {
      _0x50a678(_0x176750);
      if (_0x154fd0 !== _0x154fd0 + 0 && _0x154fd0 !== "longjmp") {
        throw _0x154fd0;
      }
      _0x1cd625(1, 0);
    }
  }
  function _0x2530c2(_0x29c310, _0x62aff3, _0x130f55, _0x3a7819, _0x987c2b, _0x393be8, _0x3b21e7, _0x5a2835) {
    var _0xe20bdc = _0x5b9f35();
    try {
      _0xde4e55(_0x29c310, _0x62aff3, _0x130f55, _0x3a7819, _0x987c2b, _0x393be8, _0x3b21e7, _0x5a2835);
    } catch (_0x58f637) {
      _0x50a678(_0xe20bdc);
      if (_0x58f637 !== _0x58f637 + 0 && _0x58f637 !== "longjmp") {
        throw _0x58f637;
      }
      _0x1cd625(1, 0);
    }
  }
  function _0x2d0712(_0x51d7fd, _0x5a8a69, _0x6ec97f) {
    var _0x52d443 = _0x5b9f35();
    try {
      return _0x3f2d65(_0x51d7fd, _0x5a8a69, _0x6ec97f);
    } catch (_0x49c7f5) {
      _0x50a678(_0x52d443);
      if (_0x49c7f5 !== _0x49c7f5 + 0 && _0x49c7f5 !== "longjmp") {
        throw _0x49c7f5;
      }
      _0x1cd625(1, 0);
    }
  }
  function _0xeb2ffc(_0x33b455, _0x1cff8c, _0x186131, _0x5ee0ec, _0x1e2c46, _0x1f7a15, _0x26ba6c) {
    var _0x5e40a3 = _0x5b9f35();
    try {
      _0x4596df(_0x33b455, _0x1cff8c, _0x186131, _0x5ee0ec, _0x1e2c46, _0x1f7a15, _0x26ba6c);
    } catch (_0x319181) {
      _0x50a678(_0x5e40a3);
      if (_0x319181 !== _0x319181 + 0 && _0x319181 !== "longjmp") {
        throw _0x319181;
      }
      _0x1cd625(1, 0);
    }
  }
  function _0x141202(_0x358803, _0x1b2c08, _0x2e49b7, _0x3c8460, _0xa2cf92, _0x57c6f1) {
    var _0x40d8ba = _0x5b9f35();
    try {
      return _0x4093a9(_0x358803, _0x1b2c08, _0x2e49b7, _0x3c8460, _0xa2cf92, _0x57c6f1);
    } catch (_0x3c7e41) {
      _0x50a678(_0x40d8ba);
      if (_0x3c7e41 !== _0x3c7e41 + 0 && _0x3c7e41 !== "longjmp") {
        throw _0x3c7e41;
      }
      _0x1cd625(1, 0);
    }
  }
  function _0x48695f(_0x287da2, _0x1e6a42, _0x37050c, _0x1fefcb, _0x28bd50) {
    var _0xba01ad = _0x5b9f35();
    try {
      return _0x50b1e1(_0x287da2, _0x1e6a42, _0x37050c, _0x1fefcb, _0x28bd50);
    } catch (_0x9e5df0) {
      _0x50a678(_0xba01ad);
      if (_0x9e5df0 !== _0x9e5df0 + 0 && _0x9e5df0 !== "longjmp") {
        throw _0x9e5df0;
      }
      _0x1cd625(1, 0);
    }
  }
  function _0x1446fc(_0x5c30eb, _0x6de36a, _0xeda7f1, _0x435e24, _0x5325a6, _0x587c2d) {
    var _0x1fb130 = _0x5b9f35();
    try {
      return _0x5562b3(_0x5c30eb, _0x6de36a, _0xeda7f1, _0x435e24, _0x5325a6, _0x587c2d);
    } catch (_0x5fdbe) {
      _0x50a678(_0x1fb130);
      if (_0x5fdbe !== _0x5fdbe + 0 && _0x5fdbe !== "longjmp") {
        throw _0x5fdbe;
      }
      _0x1cd625(1, 0);
    }
  }
  function _0x17c380(_0x38ec19, _0x5f836d, _0x4d6501, _0x24a8ba, _0x227c7e) {
    var _0x4c436c = _0x5b9f35();
    try {
      _0x523e18(_0x38ec19, _0x5f836d, _0x4d6501, _0x24a8ba, _0x227c7e);
    } catch (_0x3d8c68) {
      _0x50a678(_0x4c436c);
      if (_0x3d8c68 !== _0x3d8c68 + 0 && _0x3d8c68 !== "longjmp") {
        throw _0x3d8c68;
      }
      _0x1cd625(1, 0);
    }
  }
  function _0x15ebea(_0x3a0e32, _0x4cd4d4, _0x3dc47c, _0x16d9c7) {
    var _0x4a1de5 = _0x5b9f35();
    try {
      return _0x30bd5b(_0x3a0e32, _0x4cd4d4, _0x3dc47c, _0x16d9c7);
    } catch (_0x57144a) {
      _0x50a678(_0x4a1de5);
      if (_0x57144a !== _0x57144a + 0 && _0x57144a !== "longjmp") {
        throw _0x57144a;
      }
      _0x1cd625(1, 0);
    }
  }
  function _0x2b3bbb(_0x44996a, _0x3c74b, _0x2aa2fe, _0x6dc140, _0x51e02a) {
    var _0x1295bb = _0x5b9f35();
    try {
      return _0x1321d2(_0x44996a, _0x3c74b, _0x2aa2fe, _0x6dc140, _0x51e02a);
    } catch (_0x58f32d) {
      _0x50a678(_0x1295bb);
      if (_0x58f32d !== _0x58f32d + 0 && _0x58f32d !== "longjmp") {
        throw _0x58f32d;
      }
      _0x1cd625(1, 0);
    }
  }
  function _0x21df14(_0x410fe9, _0x19d4af, _0x4cb37f, _0xae5e1c) {
    var _0x6b870d = _0x5b9f35();
    try {
      return _0x5b3192(_0x410fe9, _0x19d4af, _0x4cb37f, _0xae5e1c);
    } catch (_0x3633c8) {
      _0x50a678(_0x6b870d);
      if (_0x3633c8 !== _0x3633c8 + 0 && _0x3633c8 !== "longjmp") {
        throw _0x3633c8;
      }
      _0x1cd625(1, 0);
    }
  }
  function _0x545b37(_0x2601e4, _0x100649, _0x581b86, _0x449786, _0x1ce51c, _0x91600b) {
    var _0x48f8de = _0x5b9f35();
    try {
      return _0x120bae(_0x2601e4, _0x100649, _0x581b86, _0x449786, _0x1ce51c, _0x91600b);
    } catch (_0xc2303e) {
      _0x50a678(_0x48f8de);
      if (_0xc2303e !== _0xc2303e + 0 && _0xc2303e !== "longjmp") {
        throw _0xc2303e;
      }
      _0x1cd625(1, 0);
    }
  }
  function _0xd7a681(_0x58fafa, _0x27fcac, _0x4865ea, _0x4d51c3, _0x4aa501, _0x43dca7) {
    var _0x967295 = _0x5b9f35();
    try {
      return _0x44e98f(_0x58fafa, _0x27fcac, _0x4865ea, _0x4d51c3, _0x4aa501, _0x43dca7);
    } catch (_0x1f271e) {
      _0x50a678(_0x967295);
      if (_0x1f271e !== _0x1f271e + 0 && _0x1f271e !== "longjmp") {
        throw _0x1f271e;
      }
      _0x1cd625(1, 0);
    }
  }
  function _0x195d97(_0x12b39f, _0x234f2b, _0x16ac9d, _0xaacd2b, _0x16e6b9) {
    var _0x50b01d = _0x5b9f35();
    try {
      _0x47ae1e(_0x12b39f, _0x234f2b, _0x16ac9d, _0xaacd2b, _0x16e6b9);
    } catch (_0x509f5b) {
      _0x50a678(_0x50b01d);
      if (_0x509f5b !== _0x509f5b + 0 && _0x509f5b !== "longjmp") {
        throw _0x509f5b;
      }
      _0x1cd625(1, 0);
    }
  }
  function _0x14bb33(_0x39f146, _0x1d910b, _0x18569e, _0x37c46a, _0x4dccc8, _0x24219c) {
    var _0x47f152 = _0x5b9f35();
    try {
      return _0x4a5f67(_0x39f146, _0x1d910b, _0x18569e, _0x37c46a, _0x4dccc8, _0x24219c);
    } catch (_0x1d7e5c) {
      _0x50a678(_0x47f152);
      if (_0x1d7e5c !== _0x1d7e5c + 0 && _0x1d7e5c !== "longjmp") {
        throw _0x1d7e5c;
      }
      _0x1cd625(1, 0);
    }
  }
  function _0x1761ff(_0x247c0c, _0x57e9e7, _0x257f18, _0x18d58d) {
    var _0x341dfa = _0x5b9f35();
    try {
      return _0x1061b4(_0x247c0c, _0x57e9e7, _0x257f18, _0x18d58d);
    } catch (_0x2608dc) {
      _0x50a678(_0x341dfa);
      if (_0x2608dc !== _0x2608dc + 0 && _0x2608dc !== "longjmp") {
        throw _0x2608dc;
      }
      _0x1cd625(1, 0);
    }
  }
  function _0x14b711(_0xf2dba9, _0x44a8a9, _0x2ea08e, _0x4b031e, _0x2729f5, _0x399f1e, _0xc967f1, _0x3c3db4, _0x3929fa, _0x53afbb, _0x4b8eb0, _0x288c54, _0x445f44, _0xdeaedf) {
    var _0x54e499 = _0x5b9f35();
    try {
      _0x573973(_0xf2dba9, _0x44a8a9, _0x2ea08e, _0x4b031e, _0x2729f5, _0x399f1e, _0xc967f1, _0x3c3db4, _0x3929fa, _0x53afbb, _0x4b8eb0, _0x288c54, _0x445f44, _0xdeaedf);
    } catch (_0x174d6f) {
      _0x50a678(_0x54e499);
      if (_0x174d6f !== _0x174d6f + 0 && _0x174d6f !== "longjmp") {
        throw _0x174d6f;
      }
      _0x1cd625(1, 0);
    }
  }
  function _0x527f3b(_0x3a0823, _0x1ed7ae, _0x338bea, _0x1d0da3) {
    var _0x2c4d2c = _0x5b9f35();
    try {
      return _0x25ecce(_0x3a0823, _0x1ed7ae, _0x338bea, _0x1d0da3);
    } catch (_0x35e3df) {
      _0x50a678(_0x2c4d2c);
      if (_0x35e3df !== _0x35e3df + 0 && _0x35e3df !== "longjmp") {
        throw _0x35e3df;
      }
      _0x1cd625(1, 0);
    }
  }
  function _0x2aa2a4(_0xd4956e, _0x33d5e9, _0x2b454a, _0x2737ca, _0xdedac6, _0x39563d) {
    var _0x40b31d = _0x5b9f35();
    try {
      return _0x1b0102(_0xd4956e, _0x33d5e9, _0x2b454a, _0x2737ca, _0xdedac6, _0x39563d);
    } catch (_0x300d4e) {
      _0x50a678(_0x40b31d);
      if (_0x300d4e !== _0x300d4e + 0 && _0x300d4e !== "longjmp") {
        throw _0x300d4e;
      }
      _0x1cd625(1, 0);
    }
  }
  function _0x349ecd(_0x25ba05, _0x4ab6be, _0x470e02, _0x96161b, _0x4e8505) {
    var _0xf28582 = _0x5b9f35();
    try {
      return _0x2e97f7(_0x25ba05, _0x4ab6be, _0x470e02, _0x96161b, _0x4e8505);
    } catch (_0x8530f2) {
      _0x50a678(_0xf28582);
      if (_0x8530f2 !== _0x8530f2 + 0 && _0x8530f2 !== "longjmp") {
        throw _0x8530f2;
      }
      _0x1cd625(1, 0);
    }
  }
  function _0x65c800(_0x228a3e, _0x366ca1, _0x248448, _0x26fea4, _0x4d626f, _0x307a99, _0x54bb0b, _0xfb9dff) {
    var _0x2970fe = _0x5b9f35();
    try {
      _0x31698b(_0x228a3e, _0x366ca1, _0x248448, _0x26fea4, _0x4d626f, _0x307a99, _0x54bb0b, _0xfb9dff);
    } catch (_0x4d66a6) {
      _0x50a678(_0x2970fe);
      if (_0x4d66a6 !== _0x4d66a6 + 0 && _0x4d66a6 !== "longjmp") {
        throw _0x4d66a6;
      }
      _0x1cd625(1, 0);
    }
  }
  function _0xa81ed0(_0x67b69f, _0x3696f1, _0x595c7e, _0x47cee3, _0x39728d, _0x1ce552, _0x352406, _0x35e955, _0x2f67b3) {
    var _0x39e30b = _0x5b9f35();
    try {
      _0x2c92f3(_0x67b69f, _0x3696f1, _0x595c7e, _0x47cee3, _0x39728d, _0x1ce552, _0x352406, _0x35e955, _0x2f67b3);
    } catch (_0x1a6a52) {
      _0x50a678(_0x39e30b);
      if (_0x1a6a52 !== _0x1a6a52 + 0 && _0x1a6a52 !== "longjmp") {
        throw _0x1a6a52;
      }
      _0x1cd625(1, 0);
    }
  }
  function _0x4f4929(_0x32f018, _0x375bec, _0x8ec88d, _0x52fbad, _0x306065, _0x1a13d0, _0x2710bc, _0x80976f, _0x4ffe1a, _0x220722) {
    var _0x2f2d28 = _0x5b9f35();
    try {
      return _0x28b794(_0x32f018, _0x375bec, _0x8ec88d, _0x52fbad, _0x306065, _0x1a13d0, _0x2710bc, _0x80976f, _0x4ffe1a, _0x220722);
    } catch (_0x12218c) {
      _0x50a678(_0x2f2d28);
      if (_0x12218c !== _0x12218c + 0 && _0x12218c !== "longjmp") {
        throw _0x12218c;
      }
      _0x1cd625(1, 0);
    }
  }
  function _0x793a5d(_0x49f59a, _0xdef40d, _0x542812, _0x273698, _0x15c9fb, _0x291aa4, _0x26e5ea) {
    var _0x41fb5b = _0x5b9f35();
    try {
      _0xe5cc34(_0x49f59a, _0xdef40d, _0x542812, _0x273698, _0x15c9fb, _0x291aa4, _0x26e5ea);
    } catch (_0x4e2193) {
      _0x50a678(_0x41fb5b);
      if (_0x4e2193 !== _0x4e2193 + 0 && _0x4e2193 !== "longjmp") {
        throw _0x4e2193;
      }
      _0x1cd625(1, 0);
    }
  }
  function _0x29749d(_0x55bf47, _0x4d6e0b, _0xd2875, _0x197bd3, _0x1b4685, _0x553736, _0x3f3c2f) {
    var _0x18adc0 = _0x5b9f35();
    try {
      return _0x42f37d(_0x55bf47, _0x4d6e0b, _0xd2875, _0x197bd3, _0x1b4685, _0x553736, _0x3f3c2f);
    } catch (_0x2e756f) {
      _0x50a678(_0x18adc0);
      if (_0x2e756f !== _0x2e756f + 0 && _0x2e756f !== "longjmp") {
        throw _0x2e756f;
      }
      _0x1cd625(1, 0);
    }
  }
  function _0x3bfc60(_0x29d87e, _0x5cb0ba, _0x2f75e1, _0x199b20, _0x4a9445, _0x1a4ddf, _0x592b8b, _0x3dcc19, _0x27a0d7, _0x3b9aa5, _0x51049a, _0x465a93) {
    var _0x50d7a0 = _0x5b9f35();
    try {
      return _0x1324c7(_0x29d87e, _0x5cb0ba, _0x2f75e1, _0x199b20, _0x4a9445, _0x1a4ddf, _0x592b8b, _0x3dcc19, _0x27a0d7, _0x3b9aa5, _0x51049a, _0x465a93);
    } catch (_0x1b13ff) {
      _0x50a678(_0x50d7a0);
      if (_0x1b13ff !== _0x1b13ff + 0 && _0x1b13ff !== "longjmp") {
        throw _0x1b13ff;
      }
      _0x1cd625(1, 0);
    }
  }
  function _0xba410e(_0x533377, _0x14cc41, _0x3cacc5, _0xdd32f9, _0x52b033, _0xf5ad50, _0x1edc5d, _0x5dfbe0, _0x38068f, _0x3478eb) {
    var _0x3e3cd0 = _0x5b9f35();
    try {
      return _0x125fc3(_0x533377, _0x14cc41, _0x3cacc5, _0xdd32f9, _0x52b033, _0xf5ad50, _0x1edc5d, _0x5dfbe0, _0x38068f, _0x3478eb);
    } catch (_0x20864c) {
      _0x50a678(_0x3e3cd0);
      if (_0x20864c !== _0x20864c + 0 && _0x20864c !== "longjmp") {
        throw _0x20864c;
      }
      _0x1cd625(1, 0);
    }
  }
  function _0x7390d8(_0x1990ca, _0x3a3acc, _0x265bbc, _0x1cfacd, _0x5566e9, _0x5a0ed8) {
    var _0x2d914a = _0x5b9f35();
    try {
      return _0x343764(_0x1990ca, _0x3a3acc, _0x265bbc, _0x1cfacd, _0x5566e9, _0x5a0ed8);
    } catch (_0x1837e6) {
      _0x50a678(_0x2d914a);
      if (_0x1837e6 !== _0x1837e6 + 0 && _0x1837e6 !== "longjmp") {
        throw _0x1837e6;
      }
      _0x1cd625(1, 0);
    }
  }
  function _0x56f99d(_0x369a81, _0x19efd2, _0x4479b5, _0x1ecec8, _0x2abc6b, _0x1926db, _0x36f684, _0x2e1f2e, _0x40920b, _0x3aae0c, _0x2eeb28, _0x30f973) {
    var _0xe30bd1 = _0x5b9f35();
    try {
      return _0x39fe92(_0x369a81, _0x19efd2, _0x4479b5, _0x1ecec8, _0x2abc6b, _0x1926db, _0x36f684, _0x2e1f2e, _0x40920b, _0x3aae0c, _0x2eeb28, _0x30f973);
    } catch (_0x4c5735) {
      _0x50a678(_0xe30bd1);
      if (_0x4c5735 !== _0x4c5735 + 0 && _0x4c5735 !== "longjmp") {
        throw _0x4c5735;
      }
      _0x1cd625(1, 0);
    }
  }
  function _0x5c2fe9(_0x400266, _0x4c587f, _0xc6e056, _0x1079fb) {
    var _0x26037a = _0x5b9f35();
    try {
      _0xc1de9b(_0x400266, _0x4c587f, _0xc6e056, _0x1079fb);
    } catch (_0x212258) {
      _0x50a678(_0x26037a);
      if (_0x212258 !== _0x212258 + 0 && _0x212258 !== "longjmp") {
        throw _0x212258;
      }
      _0x1cd625(1, 0);
    }
  }
  function _0x5e3598(_0x4be662, _0x42aef7, _0x5b15c9, _0x39084e, _0x8abf2, _0x42a147, _0xbc9ccf, _0x5828ab, _0x115050, _0x953909, _0x427b41, _0x58ddde, _0x3a8c95, _0x26e487, _0xbb9642, _0x33eb10, _0x2da6ca) {
    var _0x921601 = _0x5b9f35();
    try {
      _0x463209(_0x4be662, _0x42aef7, _0x5b15c9, _0x39084e, _0x8abf2, _0x42a147, _0xbc9ccf, _0x5828ab, _0x115050, _0x953909, _0x427b41, _0x58ddde, _0x3a8c95, _0x26e487, _0xbb9642, _0x33eb10, _0x2da6ca);
    } catch (_0x52815c) {
      _0x50a678(_0x921601);
      if (_0x52815c !== _0x52815c + 0 && _0x52815c !== "longjmp") {
        throw _0x52815c;
      }
      _0x1cd625(1, 0);
    }
  }
  function _0x5d533d(_0x1963af, _0x4e1cee, _0x353db2, _0x2b5a70, _0x535eaf, _0x59107b, _0x4781bd) {
    var _0x4da877 = _0x5b9f35();
    try {
      _0x274705(_0x1963af, _0x4e1cee, _0x353db2, _0x2b5a70, _0x535eaf, _0x59107b, _0x4781bd);
    } catch (_0x58c241) {
      _0x50a678(_0x4da877);
      if (_0x58c241 !== _0x58c241 + 0 && _0x58c241 !== "longjmp") {
        throw _0x58c241;
      }
      _0x1cd625(1, 0);
    }
  }
  function _0x27168d(_0x2ad2e8, _0xa5ddb4, _0x307796, _0x3478b0, _0x4a627c, _0x2ebbc2, _0xb873e2) {
    var _0x5b6b0f = _0x5b9f35();
    try {
      return _0x3f4d2f(_0x2ad2e8, _0xa5ddb4, _0x307796, _0x3478b0, _0x4a627c, _0x2ebbc2, _0xb873e2);
    } catch (_0xa2aae9) {
      _0x50a678(_0x5b6b0f);
      if (_0xa2aae9 !== _0xa2aae9 + 0 && _0xa2aae9 !== "longjmp") {
        throw _0xa2aae9;
      }
      _0x1cd625(1, 0);
    }
  }
  function _0x5ca842(_0x3d3d9e, _0x333905, _0x139fd4, _0x5c137, _0x3740f0, _0x43caee, _0x318b4b) {
    var _0x5e91b5 = _0x5b9f35();
    try {
      return _0x318d40(_0x3d3d9e, _0x333905, _0x139fd4, _0x5c137, _0x3740f0, _0x43caee, _0x318b4b);
    } catch (_0x7b5f66) {
      _0x50a678(_0x5e91b5);
      if (_0x7b5f66 !== _0x7b5f66 + 0 && _0x7b5f66 !== "longjmp") {
        throw _0x7b5f66;
      }
      _0x1cd625(1, 0);
    }
  }
  function _0x2047f6(_0x480e4a, _0x59a1ab, _0x2d50ae, _0x2257f5, _0x31049c, _0x21d451, _0x5c9845) {
    var _0x2c93e0 = _0x5b9f35();
    try {
      return _0x135289(_0x480e4a, _0x59a1ab, _0x2d50ae, _0x2257f5, _0x31049c, _0x21d451, _0x5c9845);
    } catch (_0x29abbd) {
      _0x50a678(_0x2c93e0);
      if (_0x29abbd !== _0x29abbd + 0 && _0x29abbd !== "longjmp") {
        throw _0x29abbd;
      }
      _0x1cd625(1, 0);
    }
  }
  function _0x16360e(_0x289ef6, _0x228ffc, _0x467d21, _0x452af7, _0x1b4fa3, _0x225b49, _0x2e9820, _0x1c82fe, _0x501d75) {
    var _0x16ca9e = _0x5b9f35();
    try {
      _0x50c352(_0x289ef6, _0x228ffc, _0x467d21, _0x452af7, _0x1b4fa3, _0x225b49, _0x2e9820, _0x1c82fe, _0x501d75);
    } catch (_0x22d57a) {
      _0x50a678(_0x16ca9e);
      if (_0x22d57a !== _0x22d57a + 0 && _0x22d57a !== "longjmp") {
        throw _0x22d57a;
      }
      _0x1cd625(1, 0);
    }
  }
  function _0x52edfd(_0x203f7b, _0x539139, _0x6e0d11, _0x20873f, _0x18b0a9, _0x6b2868, _0x20bd3e, _0x54b18c, _0x3708fe, _0x12acb0) {
    var _0x268ad1 = _0x5b9f35();
    try {
      _0x569117(_0x203f7b, _0x539139, _0x6e0d11, _0x20873f, _0x18b0a9, _0x6b2868, _0x20bd3e, _0x54b18c, _0x3708fe, _0x12acb0);
    } catch (_0x3ad36d) {
      _0x50a678(_0x268ad1);
      if (_0x3ad36d !== _0x3ad36d + 0 && _0x3ad36d !== "longjmp") {
        throw _0x3ad36d;
      }
      _0x1cd625(1, 0);
    }
  }
  function _0x5aecc7(_0x235932, _0x44a0c3, _0x54cda8, _0x5aa4e9, _0x5eeb03, _0x457db9, _0x4915db, _0x157e57, _0x5eba72, _0x197d8e, _0x3f9d53) {
    var _0x8ed8af = _0x5b9f35();
    try {
      _0x3c4208(_0x235932, _0x44a0c3, _0x54cda8, _0x5aa4e9, _0x5eeb03, _0x457db9, _0x4915db, _0x157e57, _0x5eba72, _0x197d8e, _0x3f9d53);
    } catch (_0x5c554) {
      _0x50a678(_0x8ed8af);
      if (_0x5c554 !== _0x5c554 + 0 && _0x5c554 !== "longjmp") {
        throw _0x5c554;
      }
      _0x1cd625(1, 0);
    }
  }
  function _0x23d4e9(_0x227908, _0x547232, _0x57dcc8, _0x1f5635, _0x37cf53, _0xaa8694, _0x537922, _0x4675a7) {
    var _0x31a5fc = _0x5b9f35();
    try {
      _0x5997d8(_0x227908, _0x547232, _0x57dcc8, _0x1f5635, _0x37cf53, _0xaa8694, _0x537922, _0x4675a7);
    } catch (_0x42ce34) {
      _0x50a678(_0x31a5fc);
      if (_0x42ce34 !== _0x42ce34 + 0 && _0x42ce34 !== "longjmp") {
        throw _0x42ce34;
      }
      _0x1cd625(1, 0);
    }
  }
  function _0x50d28a(_0x4dcacb, _0x2df59e, _0x2332ba, _0x417cd6, _0x2769fd, _0xb8b080, _0x99748, _0x21104d, _0x41ca9b, _0x2e3b60, _0x5352f0) {
    var _0x5cdd4d = _0x5b9f35();
    try {
      _0x287c0e(_0x4dcacb, _0x2df59e, _0x2332ba, _0x417cd6, _0x2769fd, _0xb8b080, _0x99748, _0x21104d, _0x41ca9b, _0x2e3b60, _0x5352f0);
    } catch (_0x3a91da) {
      _0x50a678(_0x5cdd4d);
      if (_0x3a91da !== _0x3a91da + 0 && _0x3a91da !== "longjmp") {
        throw _0x3a91da;
      }
      _0x1cd625(1, 0);
    }
  }
  function _0x5e3b88(_0x957fac, _0x1c61a7, _0xc4b7d5, _0x108a88, _0x4eb3a5, _0x2f545e, _0x6f36fd, _0x24dd88, _0x35eb78, _0x6cb59e, _0x4d08ec) {
    var _0x5b04e8 = _0x5b9f35();
    try {
      return _0x4df15f(_0x957fac, _0x1c61a7, _0xc4b7d5, _0x108a88, _0x4eb3a5, _0x2f545e, _0x6f36fd, _0x24dd88, _0x35eb78, _0x6cb59e, _0x4d08ec);
    } catch (_0x7fa6e0) {
      _0x50a678(_0x5b04e8);
      if (_0x7fa6e0 !== _0x7fa6e0 + 0 && _0x7fa6e0 !== "longjmp") {
        throw _0x7fa6e0;
      }
      _0x1cd625(1, 0);
    }
  }
  function _0x3d9954(_0x34eb0d, _0x3f1991, _0x58289f, _0x3ca994, _0x185958, _0x6eca3d) {
    var _0x358d43 = _0x5b9f35();
    try {
      return _0x413f19(_0x34eb0d, _0x3f1991, _0x58289f, _0x3ca994, _0x185958, _0x6eca3d);
    } catch (_0x556c33) {
      _0x50a678(_0x358d43);
      if (_0x556c33 !== _0x556c33 + 0 && _0x556c33 !== "longjmp") {
        throw _0x556c33;
      }
      _0x1cd625(1, 0);
    }
  }
  function _0x510562(_0x417149, _0x2303a7, _0x14d29e, _0x35ba39, _0x255a50, _0x13febe, _0x2a7e97, _0x1001ea) {
    var _0x5a516c = _0x5b9f35();
    try {
      return _0x5bffe2(_0x417149, _0x2303a7, _0x14d29e, _0x35ba39, _0x255a50, _0x13febe, _0x2a7e97, _0x1001ea);
    } catch (_0x267363) {
      _0x50a678(_0x5a516c);
      if (_0x267363 !== _0x267363 + 0 && _0x267363 !== "longjmp") {
        throw _0x267363;
      }
      _0x1cd625(1, 0);
    }
  }
  _0x13e282.ccall = _0x221287;
  _0x13e282.cwrap = _0x21bb5c;
  _0x13e282.stackTrace = _0x1d8fda;
  _0x13e282.addRunDependency = _0x156f3b;
  _0x13e282.removeRunDependency = _0xb5b33c;
  _0x13e282.FS_createPath = _0x1f58b9.createPath;
  _0x13e282.FS_createDataFile = _0x1f58b9.createDataFile;
  _0x13e282.stackTrace = _0x1d8fda;
  var _0xe9444b;
  function _0xc3b582(_0x5b3c27) {
    this.name = "ExitStatus";
    this.message = "Program terminated with exit(" + _0x5b3c27 + ")";
    this.status = _0x5b3c27;
  }
  var _0x23514f = false;
  _0x118381 = function _0x12fd2f() {
    if (!_0xe9444b) {
      _0x526d65();
    }
    if (!_0xe9444b) {
      _0x118381 = _0x12fd2f;
    }
  };
  function _0x27cce5(_0x1310d8) {
    var _0x29e36b = _0x13e282._main;
    _0x1310d8 = _0x1310d8 || [];
    var _0x298390 = _0x1310d8.length + 1;
    var _0x4a116f = _0x105630((_0x298390 + 1) * 4);
    _0x2c669e[_0x4a116f >> 2] = _0x236154(_0x3c5e28);
    for (var _0x5957b1 = 1; _0x5957b1 < _0x298390; _0x5957b1++) {
      _0x2c669e[(_0x4a116f >> 2) + _0x5957b1] = _0x236154(_0x1310d8[_0x5957b1 - 1]);
    }
    _0x2c669e[(_0x4a116f >> 2) + _0x298390] = 0;
    try {
      var _0x454859 = _0x29e36b(_0x298390, _0x4a116f);
      _0x51546c(_0x454859, true);
    } catch (_0x223301) {
      if (_0x223301 instanceof _0xc3b582) {
        return;
      } else if (_0x223301 == "unwind") {
        return;
      } else {
        var _0x2d38c3 = _0x223301;
        if (_0x223301 && typeof _0x223301 === "object" && _0x223301.stack) {
          _0x2d38c3 = [_0x223301, _0x223301.stack];
        }
        _0x500e9("exception thrown: " + _0x2d38c3);
        _0x3ddaa1(1, _0x223301);
      }
    } finally {
      _0x23514f = true;
    }
  }
  function _0x526d65(_0xfcb3f1) {
    _0xfcb3f1 = _0xfcb3f1 || _0x17412a;
    if (_0x33ff94 > 0) {
      return;
    }
    _0x221449();
    if (_0x33ff94 > 0) {
      return;
    }
    function _0x124c42() {
      if (_0xe9444b) {
        return;
      }
      _0xe9444b = true;
      _0x13e282.calledRun = true;
      if (_0x3f5914) {
        return;
      }
      _0x5e5e57();
      _0x5bc78f();
      if (_0x13e282.onRuntimeInitialized) {
        _0x13e282.onRuntimeInitialized();
      }
      if (_0x1eed9c) {
        _0x27cce5(_0xfcb3f1);
      }
      _0x14d7b0();
    }
    if (_0x13e282.setStatus) {
      _0x13e282.setStatus("Running...");
      setTimeout(function () {
        setTimeout(function () {
          _0x13e282.setStatus("");
        }, 1);
        _0x124c42();
      }, 1);
    } else {
      _0x124c42();
    }
  }
  _0x13e282.run = _0x526d65;
  function _0x51546c(_0x31f6d0, _0x1bd967) {
    _0xdcff3b = _0x31f6d0;
    if (_0x1bd967 && _0x29a367() && _0x31f6d0 === 0) {
      return;
    }
    if (_0x29a367()) {} else {
      _0x30acc9();
      if (_0x13e282.onExit) {
        _0x13e282.onExit(_0x31f6d0);
      }
      _0x3f5914 = true;
    }
    _0x3ddaa1(_0x31f6d0, new _0xc3b582(_0x31f6d0));
  }
  if (_0x13e282.preInit) {
    if (typeof _0x13e282.preInit == "function") {
      _0x13e282.preInit = [_0x13e282.preInit];
    }
    while (_0x13e282.preInit.length > 0) {
      _0x13e282.preInit.pop()();
    }
  }
  var _0x1eed9c = true;
  if (_0x13e282.noInitialRun) {
    _0x1eed9c = false;
  }
  _0x526d65();
}
config.sourceHtml = "REJVQUVUTWNid3hESVU0N05XaFdBd2NLUkVKTEdodEdBUWdXU2dNTUJ3VXJVSEVOVGpNPQ==";
check_enable_debug();
window.GMPERFORM = {};
window.GMPERFORM.LOAD = Date.now();
if (!window.GMSOFT_OPTIONS) {
  window.GMSOFT_OPTIONS = config;
  window.GMSOFT_OPTIONS.domainHost = "https://games.1games.io";
}
config.referrer = document.referrer;
function gmdebugtime(_0x1991b1) {
  console.log("_TIME_" + _0x1991b1 + ":" + (Date.now() - window.GMPERFORM.LOAD));
}
function gmdebug(_0x47c2c2) {
  console.log(_0x47c2c2);
}
function gmEvent(_0x22c252, _0x1499ab) {
  loadGMData(_0x22c252, _0x1499ab);
}
function gmStartGame(_0x10f5ba) {
  _0x10f5ba();
}
function gmStartAds(_0x25dfd9) {
  _0x25dfd9();
}
let fireFPS = 0;
async function loadGMData(_0x4a17d4, _0x4e282d) {
  try {
    if (!config.buildAPI) {
      return;
    }
    if (!config.eventLog && _0x4a17d4 != "document-ready" && _0x4a17d4 != "start-game" && _0x4a17d4 != "unload-game") {
      return;
    }
    if (_0x4a17d4 == "fps") {
      try {
        let _0x3c902a = _0x4e282d.split("|");
        if (_0x3c902a.length >= 2) {
          firebaseLogEventParameter("timecounter", _0x3c902a[0]);
          if (fireFPS < 2) {
            fireFPS++;
            firebaseLogEventParameter("fps", _0x3c902a[1]);
          }
        }
      } catch (_0x2d5f4f) {
        console.log("Error extracting time from abc:", _0x2d5f4f.message);
      }
    }
    let _0xa1ce92 = "";
    if (_0x4e282d) {
      _0xa1ce92 = "&msg=" + encodeURIComponent(xorEncryptMsg(_0x4e282d));
    }
    _0xa1ce92 += "&time=" + encodeURIComponent(Date.now() - window.GMPERFORM.LOAD);
    _0xa1ce92 += "&gid=" + config.gameId;
    if (_0x4a17d4 == "ban-game" || _0x4a17d4 == "document-ready" || _0x4a17d4 == "start-game") {
      _0xa1ce92 += "&wtop=" + "escaperoad2d.io";
      _0xa1ce92 += "&hn=" + "https://games.1games.io";
      _0xa1ce92 += "&referrer=" + config.referrer;
    }
    let _0xa6e618 = "&data=" + btoa(_0xa1ce92);
    let _0x16abae = config.buildAPI + "?event=" + _0x4a17d4 + _0xa6e618;
    let _0x565406 = new XMLHttpRequest();
    _0x565406.open("GET", _0x16abae);
    _0x565406.onreadystatechange = function () {
      if (_0x565406.readyState !== 4) {
        return;
      }
      if (_0x565406.status === 200) {
        console.log(_0x565406.responseText);
      } else {
        console.log("HTTP error", _0x565406.status, _0x565406.statusText);
      }
    };
    _0x565406.send();
  } catch (_0x139716) {}
}
function xorEncryptMsg(_0x3f51f5) {
  let _0x54c67a = "gmdata@&!message@!3!@";
  let _0xb15303 = "";
  for (let _0x43b764 = 0; _0x43b764 < _0x3f51f5.length; _0x43b764++) {
    const _0x2083e8 = _0x3f51f5.charCodeAt(_0x43b764) ^ _0x54c67a.charCodeAt(_0x43b764 % _0x54c67a.length);
    _0xb15303 += String.fromCharCode(_0x2083e8);
  }
  return btoa(_0xb15303);
}
function check_event_log() {
  const _0x1c3a96 = window.location.search;
  const _0x478fbb = new URLSearchParams(_0x1c3a96);
  if (_0x478fbb.has("e")) {
    config.eventLog = true;
  }
}
check_event_log();
function executeCode(_0x35a684) {
  try {
    const _0x4dc15c = eval(_0x35a684);
    gmdebug("Result:", _0x4dc15c);
    return _0x4dc15c;
  } catch (_0x2d51e7) {
    gmdebug("Error executing code:", _0x2d51e7);
  }
}
window.addEventListener("beforeunload", function (_0x6fd443) {
  gmEvent("unload-game");
});
append_function();
function append_function() {
  setTimeout(function () {
    try {
      let _0xecb028 = "data@&@#$@#^FFgdfg!1estimate";
      let _0x2da788 = "data@&&%^*((*^&^&766))nNhZmRzZGY=";
      let _0x46ee5e = executeCode("atob(atob(\"" + window.GMSOFT_OPTIONS.sourceHtml + "\"))");
      let _0x1b708b = _0x2da788;
      let _0x176494 = "";
      for (let _0x86fc1c = 0; _0x86fc1c < _0x46ee5e.length; _0x86fc1c++) {
        const _0x2a01e1 = _0x46ee5e.charCodeAt(_0x86fc1c) ^ _0xecb028.charCodeAt(_0x86fc1c % _0xecb028.length);
        _0x176494 += String.fromCharCode(_0x2a01e1);
      }
      sourceHtml = _0x176494;
      let _0x3347a0 = document.getElementById("gmsoft-jssdk");
      if (!_0x3347a0 || _0x3347a0.src != sourceHtml) {
      }
    } catch (_0x5e56dd) {
    }
  }, 3000);
}
function check_enable_debug() {
  try {
    const _0x4b47b6 = window.location.search;
    const _0x121950 = new URLSearchParams(_0x4b47b6);
    if (_0x121950.has("d")) {} else {
      console.error = function () {};
      console.warn = function () {};
      console.log = function () {};
    }
  } catch (_0x357686) {}
}