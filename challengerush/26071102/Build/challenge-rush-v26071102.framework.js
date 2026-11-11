function unityFramework(_0x2c3fe3) {
  var _0x2c3fe3 = typeof _0x2c3fe3 !== "undefined" ? _0x2c3fe3 : {};
  _0x2c3fe3.USER_JSPRE_PLACEHOLDER = "USER_JSPRE_PLACEHOLDER";
  function _0x30a8cc(_0x2c297e, _0x14e2ce) {
    _0x49a161("The JavaScript function 'Pointer_stringify(ptrToSomeCString)' is obsoleted and will be removed in a future Unity version. Please call 'UTF8ToString(ptrToSomeCString)' instead.");
    return _0x2aa540(_0x2c297e, _0x14e2ce);
  }
  _0x2c3fe3.Pointer_stringify = _0x30a8cc;
  var _0x435f63 = "(^|\\n)(\\s+at\\s+|)jsStackTrace(\\s+\\(|@)([^\\n]+):\\d+:\\d+(\\)|)(\\n|$)";
  var _0x827999 = _0x7ee0f5().match(new RegExp(_0x435f63));
  if (_0x827999) {
    _0x2c3fe3.stackTraceRegExp = new RegExp(_0x435f63.replace("([^\\n]+)", _0x827999[4].replace(/[\\^${}[\]().*+?|]/g, "\\$&")).replace("jsStackTrace", "[^\\n]+"));
  }
  var _0xe8ab44 = function (_0x109dd7) {
    if (_0x9e4ba0) {
      return;
    }
    _0x9e4ba0 = true;
    _0x3b3f0d = 1;
    if (typeof ENVIRONMENT_IS_PTHREAD !== "undefined" && ENVIRONMENT_IS_PTHREAD) {
      console.error("Pthread aborting at " + new Error().stack);
    }
    if (_0x109dd7 !== undefined) {
      _0x1f45d9(_0x109dd7);
      _0x4677f2(_0x109dd7);
      _0x109dd7 = JSON.stringify(_0x109dd7);
    } else {
      _0x109dd7 = "";
    }
    var _0x2c1dc1 = "abort(" + _0x109dd7 + ") at " + _0x2500c9();
    if (_0x2c3fe3.abortHandler && _0x2c3fe3.abortHandler(_0x2c1dc1)) {
      return;
    }
    throw _0x2c1dc1;
  };
  _0x2c3fe3.SetFullscreen = function (_0x4a97aa) {
    if (typeof _0xbd18e1 === "undefined" || !_0xbd18e1) {
      console.log("Runtime not initialized yet.");
    } else if (typeof _0x1b90f8 === "undefined") {
      console.log("Player not loaded yet.");
    } else {
      var _0x4b09b9 = _0x1b90f8.canPerformEventHandlerRequests;
      _0x1b90f8.canPerformEventHandlerRequests = function () {
        return 1;
      };
      _0x2c3fe3.ccall("SetFullscreen", null, ["number"], [_0x4a97aa]);
      _0x1b90f8.canPerformEventHandlerRequests = _0x4b09b9;
    }
  };
  if (typeof ENVIRONMENT_IS_PTHREAD === "undefined" || !ENVIRONMENT_IS_PTHREAD) {
    _0x2c3fe3.preRun.push(function () {
      var _0x13e0fb = _0x2c3fe3.unityFileSystemInit || function () {
        _0x3b09e1.mkdir("/idbfs");
        _0x3b09e1.mount(_0x13674c, {}, "/idbfs");
        _0x2c3fe3.addRunDependency("JS_FileSystem_Mount");
        _0x3b09e1.syncfs(true, function (_0x2aba77) {
          if (_0x2aba77) {
            console.log("IndexedDB is not available. Data will not persist in cache and PlayerPrefs will not be saved.");
          }
          _0x2c3fe3.removeRunDependency("JS_FileSystem_Mount");
        });
      };
      _0x13e0fb();
    });
  }
  var _0x22c752 = [];
  var _0x5ed672 = false;
  var _0x3700ad;
  var _0x5e977b = null;
  function _0x3759ef(_0xf155ce) {
    var _0x1d2f06 = Object.keys(_0x22c752);
    for (var _0x2be153 = 0; _0x2be153 < _0x1d2f06.length; ++_0x2be153) {
      var _0x5edf9f = _0x22c752[_0x1d2f06[_0x2be153]];
      if (_0x5edf9f.deviceId && _0x5edf9f.deviceId == _0xf155ce.deviceId) {
        return _0x5edf9f;
      }
    }
    for (var _0x2be153 = 0; _0x2be153 < _0x1d2f06.length; ++_0x2be153) {
      var _0x5edf9f = _0x22c752[_0x1d2f06[_0x2be153]];
      if (_0x5edf9f == _0xf155ce) {
        return _0x5edf9f;
      }
    }
    for (var _0x2be153 = 0; _0x2be153 < _0x1d2f06.length; ++_0x2be153) {
      var _0x5edf9f = _0x22c752[_0x1d2f06[_0x2be153]];
      if (_0x5edf9f.label && _0x5edf9f.label == _0xf155ce.label) {
        return _0x5edf9f;
      }
    }
    for (var _0x2be153 = 0; _0x2be153 < _0x1d2f06.length; ++_0x2be153) {
      var _0x5edf9f = _0x22c752[_0x1d2f06[_0x2be153]];
      if (_0x5edf9f.groupId && _0x5edf9f.kind && _0x5edf9f.groupId == _0xf155ce.groupId && _0x5edf9f.kind == _0xf155ce.kind) {
        return _0x5edf9f;
      }
    }
  }
  function _0x47bfdb() {
    for (var _0x4d64cb = 0;; ++_0x4d64cb) {
      if (!_0x22c752[_0x4d64cb]) {
        return _0x4d64cb;
      }
    }
  }
  function _0x1eabc1(_0xd95097) {
    _0x3700ad();
    _0x22c752 = [];
    var _0x3e940d = {};
    var _0x2b3c62 = [];
    _0xd95097.forEach(function (_0x13a2e6) {
      if (_0x13a2e6.kind === "videoinput") {
        var _0x16fd51 = _0x3759ef(_0x13a2e6);
        if (_0x16fd51) {
          _0x3e940d[_0x16fd51.id] = _0x16fd51;
        } else {
          _0x2b3c62.push(_0x13a2e6);
        }
      }
    });
    _0x22c752 = _0x3e940d;
    _0x2b3c62.forEach(function (_0x530e1d) {
      if (!_0x530e1d.id) {
        _0x530e1d.id = _0x47bfdb();
        _0x530e1d.name = _0x530e1d.label || "Video input #" + (_0x530e1d.id + 1);
        _0x530e1d.isFrontFacing = _0x530e1d.name.toLowerCase().includes("front") || !_0x530e1d.name.toLowerCase().includes("front") && !_0x530e1d.name.toLowerCase().includes("back");
        _0x22c752[_0x530e1d.id] = _0x530e1d;
      }
    });
  }
  function _0x3f406a() {
    if (!_0x22c752) {
      return;
    }
    navigator.mediaDevices.enumerateDevices().then(function (_0x1640ce) {
      _0x1eabc1(_0x1640ce);
      _0x5ed672 = true;
    }).catch(function (_0x2b6d9a) {
      console.warn("Unable to enumerate media devices: " + _0x2b6d9a + "\nWebcams will not be available.");
      _0x198feb();
    });
    if (/Firefox/.test(navigator.userAgent)) {
      setTimeout(_0x3f406a, 60000);
      _0x49a161("Applying workaround to Firefox bug https://bugzilla.mozilla.org/show_bug.cgi?id=1397977");
    }
  }
  function _0x198feb() {
    if (navigator.mediaDevices && navigator.mediaDevices.removeEventListener) {
      navigator.mediaDevices.removeEventListener("devicechange", _0x3f406a);
    }
    _0x22c752 = null;
  }
  _0x2c3fe3.disableAccessToMediaDevices = _0x198feb;
  if (!navigator.mediaDevices) {
    console.warn("navigator.mediaDevices not supported by this browser. Webcam access will not be available." + (location.protocol == "https:" ? "" : " Try hosting the page over HTTPS, because some browsers disable webcam access when insecure HTTP is being used."));
    _0x198feb();
  } else if (typeof ENVIRONMENT_IS_PTHREAD === "undefined" || !ENVIRONMENT_IS_PTHREAD) {
    setTimeout(function () {
      try {
        _0x275696("enumerateMediaDevices");
        _0x3700ad = function () {
          if (_0x5e977b !== null) {
            clearTimeout(_0x5e977b);
          }
          _0x42f9a2("enumerateMediaDevices");
          if (navigator.mediaDevices) {
            console.log("navigator.mediaDevices support available");
          }
          _0x3700ad = function () {};
        };
        _0x3f406a();
        _0x5e977b = setTimeout(_0x3700ad, 1000);
        navigator.mediaDevices.addEventListener("devicechange", _0x3f406a);
      } catch (_0xd4754) {
        console.warn("Unable to enumerate media devices: " + _0xd4754);
        _0x198feb();
      }
    }, 0);
  }
  function _0x493362(_0x2be422, _0x2e9f98, _0x5a2bb0) {
    var _0x45ea50 = _0x3d27b6(_0x2e9f98);
    var _0x239fe8 = _0x3d27b6(_0x2be422);
    var _0x2484f7 = 0;
    try {
      if (_0x5a2bb0 === undefined) {
        _0x1161ca(_0x239fe8, _0x45ea50);
      } else if (typeof _0x5a2bb0 === "string") {
        _0x2484f7 = _0x3d27b6(_0x5a2bb0);
        _0x4f3e2f(_0x239fe8, _0x45ea50, _0x2484f7);
      } else if (typeof _0x5a2bb0 === "number") {
        _0x2b6451(_0x239fe8, _0x45ea50, _0x5a2bb0);
      } else {
        throw "" + _0x5a2bb0 + " is does not have a type which is supported by SendMessage.";
      }
    } finally {
      _0xe462f0(_0x2484f7);
      _0xe462f0(_0x239fe8);
      _0xe462f0(_0x45ea50);
    }
  }
  _0x2c3fe3.SendMessage = _0x493362;
  var _0x48b4e7 = {};
  var _0x1722d2;
  for (_0x1722d2 in _0x2c3fe3) {
    if (_0x2c3fe3.hasOwnProperty(_0x1722d2)) {
      _0x48b4e7[_0x1722d2] = _0x2c3fe3[_0x1722d2];
    }
  }
  var _0x252846 = [];
  var _0x479232 = "./this.program";
  var _0x315800 = function (_0x9e3de2, _0x153be0) {
    throw _0x153be0;
  };
  var _0x5c1336 = false;
  var _0x5ee6fa = false;
  var _0xdf03b2 = false;
  var _0x3059b2 = false;
  _0x5c1336 = typeof window === "object";
  _0x5ee6fa = typeof importScripts === "function";
  _0xdf03b2 = typeof process === "object" && typeof process.versions === "object" && typeof process.versions.node === "string";
  _0x3059b2 = !_0x5c1336 && !_0xdf03b2 && !_0x5ee6fa;
  var _0x1e0e16 = "";
  function _0x43d827(_0x35d8f5) {
    if (_0x2c3fe3.locateFile) {
      return _0x2c3fe3.locateFile(_0x35d8f5, _0x1e0e16);
    }
    return _0x1e0e16 + _0x35d8f5;
  }
  var _0x1978cf;
  var _0x345449;
  var _0x3e31a9;
  var _0x3e690b;
  var _0x11f916;
  var _0x590fd7;
  if (_0xdf03b2) {
    if (_0x5ee6fa) {
      _0x1e0e16 = require("path").dirname(_0x1e0e16) + "/";
    } else {
      _0x1e0e16 = __dirname + "/";
    }
    _0x1978cf = function _0x3d548d(_0x3c9437, _0x3e4b06) {
      if (!_0x11f916) {
        _0x11f916 = require("fs");
      }
      if (!_0x590fd7) {
        _0x590fd7 = require("path");
      }
      _0x3c9437 = _0x590fd7.normalize(_0x3c9437);
      return _0x11f916.readFileSync(_0x3c9437, _0x3e4b06 ? null : "utf8");
    };
    _0x3e31a9 = function _0x4786cb(_0x23b823) {
      var _0x5ae338 = _0x1978cf(_0x23b823, true);
      if (!_0x5ae338.buffer) {
        _0x5ae338 = new Uint8Array(_0x5ae338);
      }
      _0x4a00f0(_0x5ae338.buffer);
      return _0x5ae338;
    };
    if (process.argv.length > 1) {
      _0x479232 = process.argv[1].replace(/\\/g, "/");
    }
    _0x252846 = process.argv.slice(2);
    if (typeof module !== "undefined") {
      module.exports = _0x2c3fe3;
    }
    process.on("uncaughtException", function (_0x1fdb26) {
      if (!(_0x1fdb26 instanceof _0x268877)) {
        throw _0x1fdb26;
      }
    });
    process.on("unhandledRejection", _0xe8ab44);
    _0x315800 = function (_0x58be1f) {
      process.exit(_0x58be1f);
    };
    _0x2c3fe3.inspect = function () {
      return "[Emscripten Module object]";
    };
  } else if (_0x3059b2) {
    if (typeof read != "undefined") {
      _0x1978cf = function _0x15ffab(_0x40001a) {
        return read(_0x40001a);
      };
    }
    _0x3e31a9 = function _0x32ef82(_0x6e8f3a) {
      var _0x1a7dd3;
      if (typeof readbuffer === "function") {
        return new Uint8Array(readbuffer(_0x6e8f3a));
      }
      _0x1a7dd3 = read(_0x6e8f3a, "binary");
      _0x4a00f0(typeof _0x1a7dd3 === "object");
      return _0x1a7dd3;
    };
    if (typeof scriptArgs != "undefined") {
      _0x252846 = scriptArgs;
    } else if (typeof arguments != "undefined") {
      _0x252846 = arguments;
    }
    if (typeof quit === "function") {
      _0x315800 = function (_0xa45a07) {
        quit(_0xa45a07);
      };
    }
    if (typeof print !== "undefined") {
      if (typeof console === "undefined") {
        console = {};
      }
      console.log = print;
      console.warn = console.error = typeof printErr !== "undefined" ? printErr : print;
    }
  } else if (_0x5c1336 || _0x5ee6fa) {
    if (_0x5ee6fa) {
      _0x1e0e16 = "https://games.1games.io";
    } else if (typeof document !== "undefined" && document.currentScript) {
      _0x1e0e16 = document.currentScript.src;
    }
    if (_0x1e0e16.indexOf("blob:") !== 0) {
      _0x1e0e16 = _0x1e0e16.substr(0, _0x1e0e16.lastIndexOf("/") + 1);
    } else {
      _0x1e0e16 = "";
    }
    {
      _0x1978cf = function (_0x515d09) {
        var _0x2d7439 = new XMLHttpRequest();
        _0x2d7439.open("GET", _0x515d09, false);
        _0x2d7439.send(null);
        return _0x2d7439.responseText;
      };
      if (_0x5ee6fa) {
        _0x3e31a9 = function (_0x405362) {
          var _0x3a38af = new XMLHttpRequest();
          _0x3a38af.open("GET", _0x405362, false);
          _0x3a38af.responseType = "arraybuffer";
          _0x3a38af.send(null);
          return new Uint8Array(_0x3a38af.response);
        };
      }
      _0x345449 = function (_0x474a19, _0xedccbe, _0x94268b) {
        var _0x5c3cb8 = new XMLHttpRequest();
        _0x5c3cb8.open("GET", _0x474a19, true);
        _0x5c3cb8.responseType = "arraybuffer";
        _0x5c3cb8.onload = function () {
          if (_0x5c3cb8.status == 200 || _0x5c3cb8.status == 0 && _0x5c3cb8.response) {
            _0xedccbe(_0x5c3cb8.response);
            return;
          }
          _0x94268b();
        };
        _0x5c3cb8.onerror = _0x94268b;
        _0x5c3cb8.send(null);
      };
    }
    _0x3e690b = function (_0x4ec57d) {
      document.title = _0x4ec57d;
    };
  } else {}
  var _0x1f45d9 = _0x2c3fe3.print || console.log.bind(console);
  var _0x4677f2 = _0x2c3fe3.printErr || console.warn.bind(console);
  for (_0x1722d2 in _0x48b4e7) {
    if (_0x48b4e7.hasOwnProperty(_0x1722d2)) {
      _0x2c3fe3[_0x1722d2] = _0x48b4e7[_0x1722d2];
    }
  }
  _0x48b4e7 = null;
  if (_0x2c3fe3.arguments) {
    _0x252846 = _0x2c3fe3.arguments;
  }
  if (_0x2c3fe3.thisProgram) {
    _0x479232 = _0x2c3fe3.thisProgram;
  }
  if (_0x2c3fe3.quit) {
    _0x315800 = _0x2c3fe3.quit;
  }
  var _0x457e3d = 16;
  function _0x463680(_0x501fec, _0x2d9ecd) {
    if (!_0x2d9ecd) {
      _0x2d9ecd = _0x457e3d;
    }
    return Math.ceil(_0x501fec / _0x2d9ecd) * _0x2d9ecd;
  }
  function _0x49a161(_0x10437d) {
    if (!_0x49a161.shown) {
      _0x49a161.shown = {};
    }
    if (!_0x49a161.shown[_0x10437d]) {
      _0x49a161.shown[_0x10437d] = 1;
      _0x4677f2(_0x10437d);
    }
  }
  var _0x30129e = 0;
  var _0x1774d7 = function (_0x1974d8) {
    _0x30129e = _0x1974d8;
  };
  var _0xa00b0b = function () {
    return _0x30129e;
  };
  var _0x4f682c;
  if (_0x2c3fe3.wasmBinary) {
    _0x4f682c = _0x2c3fe3.wasmBinary;
  }
  var _0x343f2d = _0x2c3fe3.noExitRuntime || true;
  if (typeof WebAssembly !== "object") {
    _0xe8ab44("no native wasm support detected");
  }
  var _0x55b931;
  var _0x9e4ba0 = false;
  var _0x3b3f0d;
  function _0x4a00f0(_0x5ce06a, _0xd03d75) {
    if (!_0x5ce06a) {
      _0xe8ab44("Assertion failed: " + _0xd03d75);
    }
  }
  function _0x2781d7(_0xf2a337) {
    var _0x484d0a = _0x2c3fe3["_" + _0xf2a337];
    _0x4a00f0(_0x484d0a, "Cannot call unknown function " + _0xf2a337 + ", make sure it is exported");
    return _0x484d0a;
  }
  function _0x2955b7(_0x3c428f, _0x552f50, _0x288250, _0x798232, _0x5ee9b5) {
    var _0x4af24f = {
      string: function (_0x21dd10) {
        var _0x358408 = 0;
        if (_0x21dd10 !== null && _0x21dd10 !== undefined && _0x21dd10 !== 0) {
          var _0x348419 = (_0x21dd10.length << 2) + 1;
          _0x358408 = _0x2bd0fc(_0x348419);
          _0x16748b(_0x21dd10, _0x358408, _0x348419);
        }
        return _0x358408;
      },
      array: function (_0x347f49) {
        var _0xc70a0f = _0x2bd0fc(_0x347f49.length);
        _0x4003dc(_0x347f49, _0xc70a0f);
        return _0xc70a0f;
      }
    };
    function _0x17ee3b(_0x485822) {
      if (_0x552f50 === "string") {
        return _0x2aa540(_0x485822);
      }
      if (_0x552f50 === "boolean") {
        return Boolean(_0x485822);
      }
      return _0x485822;
    }
    var _0x38f996 = _0x2781d7(_0x3c428f);
    var _0x5ee330 = [];
    var _0x37dc43 = 0;
    if (_0x798232) {
      for (var _0x1e0cd8 = 0; _0x1e0cd8 < _0x798232.length; _0x1e0cd8++) {
        var _0x88c471 = _0x4af24f[_0x288250[_0x1e0cd8]];
        if (_0x88c471) {
          if (_0x37dc43 === 0) {
            _0x37dc43 = _0x3e3c9d();
          }
          _0x5ee330[_0x1e0cd8] = _0x88c471(_0x798232[_0x1e0cd8]);
        } else {
          _0x5ee330[_0x1e0cd8] = _0x798232[_0x1e0cd8];
        }
      }
    }
    var _0x5f1cf8 = _0x38f996.apply(null, _0x5ee330);
    _0x5f1cf8 = _0x17ee3b(_0x5f1cf8);
    if (_0x37dc43 !== 0) {
      _0xe0dbf5(_0x37dc43);
    }
    return _0x5f1cf8;
  }
  function _0x35b013(_0x387746, _0x35df49, _0x43d857, _0x5204e2) {
    _0x43d857 = _0x43d857 || [];
    var _0x4ab1fa = _0x43d857.every(function (_0x505df4) {
      return _0x505df4 === "number";
    });
    var _0x434ff6 = _0x35df49 !== "string";
    if (_0x434ff6 && _0x4ab1fa && !_0x5204e2) {
      return _0x2781d7(_0x387746);
    }
    return function () {
      return _0x2955b7(_0x387746, _0x35df49, _0x43d857, arguments, _0x5204e2);
    };
  }
  var _0x4b8d06 = typeof TextDecoder !== "undefined" ? new TextDecoder("utf8") : undefined;
  function _0xcb370(_0x2472db, _0x50bf26, _0x914df7) {
    var _0x22e335 = _0x50bf26 + _0x914df7;
    var _0x6d17e5 = _0x50bf26;
    while (_0x2472db[_0x6d17e5] && !(_0x6d17e5 >= _0x22e335)) {
      ++_0x6d17e5;
    }
    if (_0x6d17e5 - _0x50bf26 > 16 && _0x2472db.subarray && _0x4b8d06) {
      return _0x4b8d06.decode(_0x2472db.subarray(_0x50bf26, _0x6d17e5));
    } else {
      var _0xfd2e64 = "";
      while (_0x50bf26 < _0x6d17e5) {
        var _0x18aa33 = _0x2472db[_0x50bf26++];
        if (!(_0x18aa33 & 128)) {
          _0xfd2e64 += String.fromCharCode(_0x18aa33);
          continue;
        }
        var _0xb03976 = _0x2472db[_0x50bf26++] & 63;
        if ((_0x18aa33 & 224) == 192) {
          _0xfd2e64 += String.fromCharCode((_0x18aa33 & 31) << 6 | _0xb03976);
          continue;
        }
        var _0x5f25e1 = _0x2472db[_0x50bf26++] & 63;
        if ((_0x18aa33 & 240) == 224) {
          _0x18aa33 = (_0x18aa33 & 15) << 12 | _0xb03976 << 6 | _0x5f25e1;
        } else {
          _0x18aa33 = (_0x18aa33 & 7) << 18 | _0xb03976 << 12 | _0x5f25e1 << 6 | _0x2472db[_0x50bf26++] & 63;
        }
        if (_0x18aa33 < 65536) {
          _0xfd2e64 += String.fromCharCode(_0x18aa33);
        } else {
          var _0x29bd75 = _0x18aa33 - 65536;
          _0xfd2e64 += String.fromCharCode(_0x29bd75 >> 10 | 55296, _0x29bd75 & 1023 | 56320);
        }
      }
    }
    return _0xfd2e64;
  }
  function _0x2aa540(_0x4ca813, _0x14685e) {
    if (_0x4ca813) {
      return _0xcb370(_0x312996, _0x4ca813, _0x14685e);
    } else {
      return "";
    }
  }
  function _0x3e72f1(_0x129fb6, _0x490c31, _0x36b771, _0x4799a9) {
    if (!(_0x4799a9 > 0)) {
      return 0;
    }
    var _0x308f50 = _0x36b771;
    var _0x5aff9f = _0x36b771 + _0x4799a9 - 1;
    for (var _0xdb07f9 = 0; _0xdb07f9 < _0x129fb6.length; ++_0xdb07f9) {
      var _0x207c4e = _0x129fb6.charCodeAt(_0xdb07f9);
      if (_0x207c4e >= 55296 && _0x207c4e <= 57343) {
        var _0x1f0e38 = _0x129fb6.charCodeAt(++_0xdb07f9);
        _0x207c4e = 65536 + ((_0x207c4e & 1023) << 10) | _0x1f0e38 & 1023;
      }
      if (_0x207c4e <= 127) {
        if (_0x36b771 >= _0x5aff9f) {
          break;
        }
        _0x490c31[_0x36b771++] = _0x207c4e;
      } else if (_0x207c4e <= 2047) {
        if (_0x36b771 + 1 >= _0x5aff9f) {
          break;
        }
        _0x490c31[_0x36b771++] = _0x207c4e >> 6 | 192;
        _0x490c31[_0x36b771++] = _0x207c4e & 63 | 128;
      } else if (_0x207c4e <= 65535) {
        if (_0x36b771 + 2 >= _0x5aff9f) {
          break;
        }
        _0x490c31[_0x36b771++] = _0x207c4e >> 12 | 224;
        _0x490c31[_0x36b771++] = _0x207c4e >> 6 & 63 | 128;
        _0x490c31[_0x36b771++] = _0x207c4e & 63 | 128;
      } else {
        if (_0x36b771 + 3 >= _0x5aff9f) {
          break;
        }
        _0x490c31[_0x36b771++] = _0x207c4e >> 18 | 240;
        _0x490c31[_0x36b771++] = _0x207c4e >> 12 & 63 | 128;
        _0x490c31[_0x36b771++] = _0x207c4e >> 6 & 63 | 128;
        _0x490c31[_0x36b771++] = _0x207c4e & 63 | 128;
      }
    }
    _0x490c31[_0x36b771] = 0;
    return _0x36b771 - _0x308f50;
  }
  function _0x16748b(_0x413261, _0x2fc139, _0x220bb2) {
    return _0x3e72f1(_0x413261, _0x312996, _0x2fc139, _0x220bb2);
  }
  function _0x40b564(_0x2da5b3) {
    var _0x427020 = 0;
    for (var _0x3524d2 = 0; _0x3524d2 < _0x2da5b3.length; ++_0x3524d2) {
      var _0x2e4e7b = _0x2da5b3.charCodeAt(_0x3524d2);
      if (_0x2e4e7b >= 55296 && _0x2e4e7b <= 57343) {
        _0x2e4e7b = 65536 + ((_0x2e4e7b & 1023) << 10) | _0x2da5b3.charCodeAt(++_0x3524d2) & 1023;
      }
      if (_0x2e4e7b <= 127) {
        ++_0x427020;
      } else if (_0x2e4e7b <= 2047) {
        _0x427020 += 2;
      } else if (_0x2e4e7b <= 65535) {
        _0x427020 += 3;
      } else {
        _0x427020 += 4;
      }
    }
    return _0x427020;
  }
  function _0x2bd14d(_0x40a011) {
    var _0x5e0b21 = _0x40b564(_0x40a011) + 1;
    var _0x4525bc = _0x4fa9c0(_0x5e0b21);
    if (_0x4525bc) {
      _0x3e72f1(_0x40a011, _0x1cc374, _0x4525bc, _0x5e0b21);
    }
    return _0x4525bc;
  }
  function _0x1795de(_0x1317fe) {
    var _0xbfb0da = _0x40b564(_0x1317fe) + 1;
    var _0x1fa438 = _0x2bd0fc(_0xbfb0da);
    _0x3e72f1(_0x1317fe, _0x1cc374, _0x1fa438, _0xbfb0da);
    return _0x1fa438;
  }
  function _0x4003dc(_0x4d71d2, _0x15544f) {
    _0x1cc374.set(_0x4d71d2, _0x15544f);
  }
  function _0x2a90f2(_0x497573, _0x102911, _0x545407) {
    for (var _0x224b19 = 0; _0x224b19 < _0x497573.length; ++_0x224b19) {
      _0x1cc374[_0x102911++ >> 0] = _0x497573.charCodeAt(_0x224b19);
    }
    if (!_0x545407) {
      _0x1cc374[_0x102911 >> 0] = 0;
    }
  }
  function _0x33ae11(_0x579c1f, _0xf7da9c) {
    if (_0x579c1f % _0xf7da9c > 0) {
      _0x579c1f += _0xf7da9c - _0x579c1f % _0xf7da9c;
    }
    return _0x579c1f;
  }
  var _0x3fb518;
  var _0x1cc374;
  var _0x312996;
  var _0x1694cb;
  var _0x341180;
  var _0x237516;
  var _0x599e77;
  var _0x29b84b;
  var _0x4aca1d;
  function _0x1f772b(_0xf59fd4) {
    _0x3fb518 = _0xf59fd4;
    _0x2c3fe3.HEAP8 = _0x1cc374 = new Int8Array(_0xf59fd4);
    _0x2c3fe3.HEAP16 = _0x1694cb = new Int16Array(_0xf59fd4);
    _0x2c3fe3.HEAP32 = _0x237516 = new Int32Array(_0xf59fd4);
    _0x2c3fe3.HEAPU8 = _0x312996 = new Uint8Array(_0xf59fd4);
    _0x2c3fe3.HEAPU16 = _0x341180 = new Uint16Array(_0xf59fd4);
    _0x2c3fe3.HEAPU32 = _0x599e77 = new Uint32Array(_0xf59fd4);
    _0x2c3fe3.HEAPF32 = _0x29b84b = new Float32Array(_0xf59fd4);
    _0x2c3fe3.HEAPF64 = _0x4aca1d = new Float64Array(_0xf59fd4);
  }
  var _0x3d7178 = _0x2c3fe3.INITIAL_MEMORY || 33554432;
  var _0x955bef;
  var _0x35df87 = [];
  var _0x444a44 = [];
  var _0x1a702d = [];
  var _0x27a71e = [];
  var _0x3d2a14 = [];
  var _0xbd18e1 = false;
  var _0xb9250c = false;
  function _0x5716a4() {
    if (_0x2c3fe3.preRun) {
      if (typeof _0x2c3fe3.preRun == "function") {
        _0x2c3fe3.preRun = [_0x2c3fe3.preRun];
      }
      while (_0x2c3fe3.preRun.length) {
        _0x380368(_0x2c3fe3.preRun.shift());
      }
    }
    _0x441ebf(_0x35df87);
  }
  function _0x38ba23() {
    _0xbd18e1 = true;
    if (!_0x2c3fe3.noFSInit && !_0x3b09e1.init.initialized) {
      _0x3b09e1.init();
    }
    _0x39252f.init();
    _0x2722e2.root = _0x3b09e1.mount(_0x2722e2, {}, null);
    _0x2f30de.root = _0x3b09e1.mount(_0x2f30de, {}, null);
    _0x441ebf(_0x444a44);
  }
  function _0x2aaa78() {
    _0x3b09e1.ignorePermissions = false;
    _0x441ebf(_0x1a702d);
  }
  function _0x212829() {
    _0xb9250c = true;
  }
  function _0x1ec8dc() {
    if (_0x2c3fe3.postRun) {
      if (typeof _0x2c3fe3.postRun == "function") {
        _0x2c3fe3.postRun = [_0x2c3fe3.postRun];
      }
      while (_0x2c3fe3.postRun.length) {
        _0x3b10fa(_0x2c3fe3.postRun.shift());
      }
    }
    _0x441ebf(_0x3d2a14);
  }
  function _0x380368(_0x11e487) {
    _0x35df87.unshift(_0x11e487);
  }
  function _0x1fa301(_0x4b72f2) {
    _0x444a44.unshift(_0x4b72f2);
  }
  function _0x3b10fa(_0x36a4fa) {
    _0x3d2a14.unshift(_0x36a4fa);
  }
  var _0x49b9ea = 0;
  var _0x24c8af = null;
  var _0x382a75 = null;
  function _0x298a63(_0x5064a4) {
    return _0x5064a4;
  }
  function _0x275696(_0xfb8903) {
    _0x49b9ea++;
    if (_0x2c3fe3.monitorRunDependencies) {
      _0x2c3fe3.monitorRunDependencies(_0x49b9ea);
    }
  }
  function _0x42f9a2(_0x685f98) {
    _0x49b9ea--;
    if (_0x2c3fe3.monitorRunDependencies) {
      _0x2c3fe3.monitorRunDependencies(_0x49b9ea);
    }
    if (_0x49b9ea == 0) {
      if (_0x24c8af !== null) {
        clearInterval(_0x24c8af);
        _0x24c8af = null;
      }
      if (_0x382a75) {
        var _0x59674d = _0x382a75;
        _0x382a75 = null;
        _0x59674d();
      }
    }
  }
  _0x2c3fe3.preloadedImages = {};
  _0x2c3fe3.preloadedAudios = {};
  function _0xe8ab44(_0x969ef0) {
    if (_0x2c3fe3.onAbort) {
      _0x2c3fe3.onAbort(_0x969ef0);
    }
    _0x969ef0 += "";
    _0x4677f2(_0x969ef0);
    _0x9e4ba0 = true;
    _0x3b3f0d = 1;
    _0x969ef0 = "abort(" + _0x969ef0 + "). Build with -s ASSERTIONS=1 for more info.";
    var _0x55a1f9 = new WebAssembly.RuntimeError(_0x969ef0);
    throw _0x55a1f9;
  }
  var _0x2d4f56 = "data:application/octet-stream;base64,";
  function _0xdff08f(_0x33c25c) {
    return _0x33c25c.startsWith(_0x2d4f56);
  }
  function _0x31b4fd(_0x3fee7e) {
    return _0x3fee7e.startsWith("file://");
  }
  var _0x4e17be = "build.wasm";
  if (!_0xdff08f(_0x4e17be)) {
    _0x4e17be = _0x43d827(_0x4e17be);
  }
  function _0x34340f(_0x1f29d2) {
    try {
      if (_0x1f29d2 == _0x4e17be && _0x4f682c) {
        return new Uint8Array(_0x4f682c);
      }
      if (_0x3e31a9) {
        return _0x3e31a9(_0x1f29d2);
      } else {
        throw "both async and sync fetching of the wasm failed";
      }
    } catch (_0x2b6f75) {
      _0xe8ab44(_0x2b6f75);
    }
  }
  function _0x11ecc4() {
    if (!_0x4f682c && (_0x5c1336 || _0x5ee6fa)) {
      if (typeof fetch === "function" && !_0x31b4fd(_0x4e17be)) {
        return fetch(_0x4e17be, {
          credentials: "same-origin"
        }).then(function (_0x1dd440) {
          if (!_0x1dd440.ok) {
            throw "failed to load wasm binary file at '" + _0x4e17be + "'";
          }
          return _0x1dd440.arrayBuffer();
        }).catch(function () {
          return _0x34340f(_0x4e17be);
        });
      } else if (_0x345449) {
        return new Promise(function (_0x1389f1, _0x11699f) {
          _0x345449(_0x4e17be, function (_0x1eca6b) {
            _0x1389f1(new Uint8Array(_0x1eca6b));
          }, _0x11699f);
        });
      }
    }
    return Promise.resolve().then(function () {
      return _0x34340f(_0x4e17be);
    });
  }
  function _0x5bb564() {
    var _0x1cd0d6 = {
      a: _0x6f09a
    };
    function _0x27636c(_0x4d556b, _0x15fabb) {
      var _0x4f56cb = _0x4d556b.exports;
      _0x2c3fe3.asm = _0x4f56cb;
      _0x55b931 = _0x2c3fe3.asm.ul;
      _0x1f772b(_0x55b931.buffer);
      _0x955bef = _0x2c3fe3.asm.Ul;
      _0x1fa301(_0x2c3fe3.asm.vl);
      _0x42f9a2("wasm-instantiate");
    }
    _0x275696("wasm-instantiate");
    function _0x164313(_0x4d6415) {
      _0x27636c(_0x4d6415.instance);
    }
    function _0x26e9d5(_0xb87237) {
      return _0x11ecc4().then(function (_0x1dfba4) {
        var _0x1f231c = WebAssembly.instantiate(_0x1dfba4, _0x1cd0d6);
        return _0x1f231c;
      }).then(_0xb87237, function (_0x50d305) {
        _0x4677f2("failed to asynchronously prepare wasm: " + _0x50d305);
        _0xe8ab44(_0x50d305);
      });
    }
    function _0x108f12() {
      if (!_0x4f682c && typeof WebAssembly.instantiateStreaming === "function" && !_0xdff08f(_0x4e17be) && !_0x31b4fd(_0x4e17be) && typeof fetch === "function") {
        return fetch(_0x4e17be, {
          credentials: "same-origin"
        }).then(function (_0x548104) {
          var _0x136a94 = WebAssembly.instantiateStreaming(_0x548104, _0x1cd0d6);
          return _0x136a94.then(_0x164313, function (_0x9be931) {
            _0x4677f2("wasm streaming compile failed: " + _0x9be931);
            _0x4677f2("falling back to ArrayBuffer instantiation");
            return _0x26e9d5(_0x164313);
          });
        });
      } else {
        return _0x26e9d5(_0x164313);
      }
    }
    if (_0x2c3fe3.instantiateWasm) {
      try {
        var _0x1d1cf6 = _0x2c3fe3.instantiateWasm(_0x1cd0d6, _0x27636c);
        return _0x1d1cf6;
      } catch (_0x28737a) {
        _0x4677f2("Module.instantiateWasm callback failed with error: " + _0x28737a);
        return false;
      }
    }
    _0x108f12();
    return {};
  }
  var _0x407d2d;
  var _0x34c09a;
  var _0x4eb0e9 = {
    5498712: function () {
      return _0x2c3fe3.webglContextAttributes.premultipliedAlpha;
    },
    5498773: function () {
      return _0x2c3fe3.webglContextAttributes.preserveDrawingBuffer;
    },
    5498837: function () {
      return _0x2c3fe3.webglContextAttributes.powerPreference;
    }
  };
  function _0x441ebf(_0x116857) {
    while (_0x116857.length > 0) {
      var _0x2422ee = _0x116857.shift();
      if (typeof _0x2422ee == "function") {
        _0x2422ee(_0x2c3fe3);
        continue;
      }
      var _0x2722ca = _0x2422ee.func;
      if (typeof _0x2722ca === "number") {
        if (_0x2422ee.arg === undefined) {
          (function () {
            _0x21100c.call(null, _0x2722ca);
          })();
        } else {
          (function (_0x3052fc) {
            _0x58d73a.apply(null, [_0x2722ca, _0x3052fc]);
          })(_0x2422ee.arg);
        }
      } else {
        _0x2722ca(_0x2422ee.arg === undefined ? null : _0x2422ee.arg);
      }
    }
  }
  function _0x583de0(_0x30c814) {
    return _0x30c814;
  }
  function _0x54c536(_0x58f4fe) {
    var _0x288592 = /\b_Z[\w\d_]+/g;
    return _0x58f4fe.replace(_0x288592, function (_0x2b1d78) {
      var _0x413134 = _0x583de0(_0x2b1d78);
      if (_0x2b1d78 === _0x413134) {
        return _0x2b1d78;
      } else {
        return _0x413134 + " [" + _0x2b1d78 + "]";
      }
    });
  }
  function _0x2acb97(_0x55825d, _0x376330, _0x5ba1a6) {
    var _0x36c7c6 = _0x2c3fe3["dynCall_" + _0x55825d];
    if (_0x5ba1a6 && _0x5ba1a6.length) {
      return _0x36c7c6.apply(null, [_0x376330].concat(_0x5ba1a6));
    } else {
      return _0x36c7c6.call(null, _0x376330);
    }
  }
  function _0x534e63(_0x55f437, _0x4292ca, _0x437875) {
    return _0x2acb97(_0x55f437, _0x4292ca, _0x437875);
  }
  function _0x7ee0f5() {
    var _0x6e8b24 = new Error();
    if (!_0x6e8b24.stack) {
      try {
        throw new Error();
      } catch (_0x4a682c) {
        _0x6e8b24 = _0x4a682c;
      }
      if (!_0x6e8b24.stack) {
        return "(no stack trace available)";
      }
    }
    return _0x6e8b24.stack.toString();
  }
  var _0x3a4348 = 0;
  function _0x1777bc() {
    return _0x343f2d || _0x3a4348 > 0;
  }
  function _0x2500c9() {
    var _0x6ac61c = _0x7ee0f5();
    if (_0x2c3fe3.extraStackTrace) {
      _0x6ac61c += "\n" + _0x2c3fe3.extraStackTrace();
    }
    return _0x54c536(_0x6ac61c);
  }
  function _0x14840f(_0x5adef5, _0x34f188, _0x5cd637, _0x20d004, _0x2608bd) {
    var _0x534bad = _0x2aa540(_0x5adef5);
    var _0x4093c3 = _0x2aa540(_0x34f188);
    var _0x236f2e = _0x2aa540(_0x5cd637);
    var _0x51efca = _0x2aa540(_0x20d004);
    var _0x20e2db = _0x2aa540(_0x2608bd);
    try {
      firebase.firestore().collection(_0x534bad).add(JSON.parse(_0x4093c3)).then(function (_0x46d821) {
        window.unityInstance.SendMessage(_0x236f2e, _0x51efca, "Success: document added in collection " + _0x534bad);
      }).catch(function (_0x4120db) {
        window.unityInstance.SendMessage(_0x236f2e, _0x20e2db, JSON.stringify(_0x4120db, Object.getOwnPropertyNames(_0x4120db)));
      });
    } catch (_0x18b5c8) {
      window.unityInstance.SendMessage(_0x236f2e, _0x20e2db, JSON.stringify(_0x18b5c8, Object.getOwnPropertyNames(_0x18b5c8)));
    }
  }
  function _0x10c50e(_0x1e2318, _0xc6ebd0, _0x1e6c7e, _0x2832df, _0x53aa1b, _0x16c933, _0x269456) {
    var _0x1745b5 = _0x2aa540(_0x1e2318);
    var _0x634674 = _0x2aa540(_0xc6ebd0);
    var _0x41d1e0 = _0x2aa540(_0x1e6c7e);
    var _0x4e4ed2 = _0x2aa540(_0x2832df);
    var _0x4b2141 = _0x2aa540(_0x53aa1b);
    var _0x4d0193 = _0x2aa540(_0x16c933);
    var _0x453554 = _0x2aa540(_0x269456);
    try {
      var _0x2832df = {};
      _0x2832df[_0x41d1e0] = firebase.firestore.FieldValue.arrayUnion(JSON.parse(_0x4e4ed2));
      firebase.firestore().collection(_0x1745b5).doc(_0x634674).update(_0x2832df).then(function () {
        window.unityInstance.SendMessage(_0x4b2141, _0x4d0193, "Success: element " + _0x4e4ed2 + " was added in " + _0x41d1e0);
      }).catch(function (_0x3fc635) {
        window.unityInstance.SendMessage(_0x4b2141, _0x453554, JSON.stringify(_0x3fc635, Object.getOwnPropertyNames(_0x3fc635)));
      });
    } catch (_0x3f8b9f) {
      window.unityInstance.SendMessage(_0x4b2141, _0x453554, JSON.stringify(_0x3f8b9f, Object.getOwnPropertyNames(_0x3f8b9f)));
    }
  }
  function _0x552df3(_0x2aba7c) {
    try {
      window.CrazyGames.SDK.user.addScore(_0x2aba7c);
    } catch (_0x58902c) {
      window.UnitySDK.logError("Error while calling addScore:", _0x58902c);
    }
  }
  function _0x452750(_0x1e6961, _0x2465f9) {
    try {
      window.CrazyGames.SDK.analytics.trackOrder(window.unityStringify(_0x1e6961), JSON.parse(window.unityStringify(_0x2465f9)));
    } catch (_0x177a24) {
      window.UnitySDK.logError("Error while calling trackOrder:", _0x177a24);
    }
  }
  function _0x4cf7ec(_0x8fa719) {
    const _0x3c616e = document.createElement("textarea");
    _0x3c616e.value = window.unityStringify(_0x8fa719);
    document.body.appendChild(_0x3c616e);
    _0x3c616e.select();
    _0x3c616e.setSelectionRange(0, 99999);
    document.execCommand("copy");
    document.body.removeChild(_0x3c616e);
  }
  function _0x44cd57(_0x3eeb4b, _0x4f37aa, _0x442e2a, _0x5f0716, _0x572e32) {
    var _0x2f1028 = _0x2aa540(_0x3eeb4b);
    var _0x248e28 = _0x2aa540(_0x4f37aa);
    var _0x576a27 = _0x2aa540(_0x442e2a);
    var _0x306329 = _0x2aa540(_0x5f0716);
    var _0x52b036 = _0x2aa540(_0x572e32);
    try {
      firebase.auth().createUserWithEmailAndPassword(_0x2f1028, _0x248e28).then(function (_0x3107ed) {
        window.unityInstance.SendMessage(_0x576a27, _0x306329, "Success: signed up for " + _0x2f1028);
      }).catch(function (_0x1373a1) {
        window.unityInstance.SendMessage(_0x576a27, _0x52b036, JSON.stringify(_0x1373a1, Object.getOwnPropertyNames(_0x1373a1)));
      });
    } catch (_0x8039dd) {
      window.unityInstance.SendMessage(_0x576a27, _0x52b036, JSON.stringify(_0x8039dd, Object.getOwnPropertyNames(_0x8039dd)));
    }
  }
  function _0x421c58() {
    try {
      window.CrazyGames.SDK.data.clear();
    } catch (_0x241970) {
      window.UnitySDK.logError("Error while calling clear:", _0x241970);
    }
  }
  function _0x1f1ab7(_0x20b6bb) {
    var _0x14582f = null;
    try {
      _0x14582f = window.CrazyGames.SDK.data.getItem(window.unityStringify(_0x20b6bb));
    } catch (_0x3981fd) {
      window.UnitySDK.logError("Error while calling getItem:", _0x3981fd);
    }
    var _0x1e50e1 = _0x40b564(_0x14582f + "") + 1;
    var _0x2c7cfd = _0x4fa9c0(_0x1e50e1);
    _0x16748b(_0x14582f, _0x2c7cfd, _0x1e50e1);
    return _0x2c7cfd;
  }
  function _0x29bfab(_0x29e7be) {
    var _0x4ff327 = null;
    try {
      _0x4ff327 = window.CrazyGames.SDK.data.getItem(window.unityStringify(_0x29e7be));
    } catch (_0x37bc29) {
      window.UnitySDK.logError("Error while calling getItem:", _0x37bc29);
    }
    return _0x4ff327 !== null;
  }
  function _0x14d445(_0x6ed6c9) {
    try {
      window.CrazyGames.SDK.data.removeItem(window.unityStringify(_0x6ed6c9));
    } catch (_0x2710cd) {
      window.UnitySDK.logError("Error while calling removeItem:", _0x2710cd);
    }
  }
  function _0x53e2c5(_0x5dec4c, _0x301f7e) {
    try {
      window.CrazyGames.SDK.data.setItem(window.unityStringify(_0x5dec4c), window.unityStringify(_0x301f7e));
    } catch (_0x7a0c9b) {
      window.UnitySDK.logError("Error while calling setItem:", _0x7a0c9b);
    }
  }
  function _0x4c8d4c(_0x504c6a, _0x12177a, _0x270bf3, _0x26d26d, _0x542b0a) {
    var _0x2bd4dc = _0x2aa540(_0x504c6a);
    var _0x7a57ab = _0x2aa540(_0x12177a);
    var _0x5198fa = _0x2aa540(_0x270bf3);
    var _0x2963a0 = _0x2aa540(_0x26d26d);
    var _0x13eedc = _0x2aa540(_0x542b0a);
    try {
      firebase.firestore().collection(_0x2bd4dc).doc(_0x7a57ab).delete().then(function () {
        window.unityInstance.SendMessage(_0x5198fa, _0x2963a0, "Success: document " + _0x7a57ab + " was deleted");
      }).catch(function (_0x1e4ec1) {
        window.unityInstance.SendMessage(_0x5198fa, _0x13eedc, JSON.stringify(_0x1e4ec1, Object.getOwnPropertyNames(_0x1e4ec1)));
      });
    } catch (_0x233729) {
      window.unityInstance.SendMessage(_0x5198fa, _0x13eedc, JSON.stringify(_0x233729, Object.getOwnPropertyNames(_0x233729)));
    }
  }
  function _0x430376(_0x3a0599, _0x3e969b, _0x372e65, _0x5b7bc6, _0x2b48bb, _0x557594) {
    var _0x27431b = _0x2aa540(_0x3a0599);
    var _0x1b33d1 = _0x2aa540(_0x3e969b);
    var _0x3d39ce = _0x2aa540(_0x372e65);
    var _0x3b489c = _0x2aa540(_0x5b7bc6);
    var _0x622e64 = _0x2aa540(_0x2b48bb);
    var _0x2a07ac = _0x2aa540(_0x557594);
    try {
      var _0x538958 = {};
      _0x538958[_0x3d39ce] = firebase.firestore.FieldValue.delete();
      firebase.firestore().collection(_0x27431b).doc(_0x1b33d1).update(_0x538958).then(function () {
        window.unityInstance.SendMessage(_0x3b489c, _0x622e64, "Success: field " + _0x3d39ce + " was deleted");
      }).catch(function (_0x437700) {
        window.unityInstance.SendMessage(_0x3b489c, _0x2a07ac, JSON.stringify(_0x437700, Object.getOwnPropertyNames(_0x437700)));
      });
    } catch (_0x7feb6b) {
      window.unityInstance.SendMessage(_0x3b489c, _0x2a07ac, JSON.stringify(_0x7feb6b, Object.getOwnPropertyNames(_0x7feb6b)));
    }
  }
  function _0xbbe9e5(_0x364dfc, _0x480f9d, _0x218198, _0x3707ab) {
    var _0x1d5b49 = _0x2aa540(_0x364dfc);
    var _0x210bbd = _0x2aa540(_0x480f9d);
    var _0x3d6715 = _0x2aa540(_0x218198);
    var _0x55cf66 = _0x2aa540(_0x3707ab);
    try {
      firebase.database().ref(_0x1d5b49).remove().then(function (_0xda65b7) {
        window.unityInstance.SendMessage(_0x210bbd, _0x3d6715, "Success: " + _0x1d5b49 + " was deleted");
      });
    } catch (_0x23e20f) {
      window.unityInstance.SendMessage(_0x210bbd, _0x55cf66, JSON.stringify(_0x23e20f, Object.getOwnPropertyNames(_0x23e20f)));
    }
  }
  function _0x5c1914() {
    if (window.clipboardPasteHandler) {
      window.removeEventListener("paste", window.clipboardPasteHandler);
      window.clipboardPasteHandler = null;
      console.log("Paste listener disabled.");
    }
  }
  function _0x3028f8(_0x3a26e8, _0x31dd43, _0x9e615f, _0x206820) {
    var _0x252148 = _0x2aa540(_0x3a26e8);
    var _0x8fa878 = _0x2aa540(_0x31dd43);
    var _0x2e4fa5 = _0x2aa540(_0x9e615f);
    var _0x218298 = _0x2aa540(_0x206820);
    try {
      firebase.storage().ref(_0x252148).getDownloadURL().then(function (_0x1a3032) {
        var _0x3648ed = new XMLHttpRequest();
        _0x3648ed.responseType = "arraybuffer";
        _0x3648ed.onload = function (_0x235045) {
          var _0x2f9ee0 = _0x3648ed.response;
          window.unityInstance.SendMessage(_0x8fa878, _0x2e4fa5, _0x4db013(_0x2f9ee0));
        };
        _0x3648ed.open("GET", _0x1a3032);
        _0x3648ed.send();
      }).catch(function (_0x184a51) {
        window.unityInstance.SendMessage(_0x8fa878, _0x218298, JSON.stringify(_0x184a51, Object.getOwnPropertyNames(_0x184a51)));
      });
    } catch (_0x410a60) {
      window.unityInstance.SendMessage(_0x8fa878, _0x218298, JSON.stringify(_0x410a60, Object.getOwnPropertyNames(_0x410a60)));
    }
    function _0x4db013(_0x1f0dc7) {
      var _0x11296d = "";
      var _0x32bf33 = new Uint8Array(_0x1f0dc7);
      var _0x18bff4 = _0x32bf33.byteLength;
      for (var _0x14b3c4 = 0; _0x14b3c4 < _0x18bff4; _0x14b3c4++) {
        _0x11296d += String.fromCharCode(_0x32bf33[_0x14b3c4]);
      }
      return window.btoa(_0x11296d);
    }
  }
  function _0x54037f(_0x26360b, _0x51e177) {
    var _0x46a83e = _0x2aa540(_0x26360b);
    var _0x3ec867 = _0x2aa540(_0x51e177);
    if (window.clipboardPasteHandler) {
      return;
    }
    window.clipboardPasteHandler = function (_0x4a33e0) {
      _0x4a33e0.preventDefault();
      var _0x4b8f3f = (_0x4a33e0.clipboardData || window.clipboardData).getData("text");
      _0x493362(_0x46a83e, _0x3ec867, _0x4b8f3f);
    };
    window.addEventListener("paste", window.clipboardPasteHandler);
    console.log("Paste listener enabled.");
  }
  function _0x15d975() {
    var _0xe7352f = window.document;
    var _0x5a13bb = _0xe7352f.fullscreenElement || _0xe7352f.mozFullScreenElement || _0xe7352f.webkitFullscreenElement || _0xe7352f.msFullscreenElement;
    if (_0x5a13bb) {
      if (document.exitFullscreen) {
        document.exitFullscreen();
      } else if (document.msExitFullscreen) {
        document.msExitFullscreen();
      } else if (document.mozCancelFullScreen) {
        document.mozCancelFullScreen();
      } else if (document.webkitExitFullscreen) {
        document.webkitExitFullscreen();
      }
    }
  }
  function _0x3223c0(_0x8b364c, _0x30da06) {
    var _0x5609bf = _0x2aa540(_0x8b364c);
    var _0x2ed9ad = _0x2aa540(_0x30da06);
    var _0xa0da0a = new Blob([_0x2ed9ad], {
      type: "text/plain"
    });
    var _0x492326 = document.createElement("a");
    _0x492326.href = URL.createObjectURL(_0xa0da0a);
    _0x492326.download = _0x5609bf;
    _0x492326.click();
    setTimeout(() => URL.revokeObjectURL(_0x492326.href), 100);
  }
  function _0x49e18e() {
    try {
      window[preroll.config.loaderObjectName].log("WGSDK: Getting WeeGoo InGame Ad");
      window[preroll.config.loaderObjectName].refetchAd();
    } catch (_0x180e12) {
      console.log("No WeeGooAFG implementation found!");
    }
  }
  function _0x3fdf62(_0x4a6cbd) {
    var _0x9eef69 = {
      adStarted: function () {
        _0x493362("GMSDKAdvertisement", "JSLibCallback_AdStarted");
      },
      adFinished: function () {
        _0x493362("GMSDKAdvertisement", "JSLibCallback_AdFinished");
      },
      adError: function (_0x3638d4) {
        _0x493362("GMSDKAdvertisement", "JSLibCallback_AdError", JSON.stringify(_0x3638d4));
      }
    };
    var _0x443d04 = window.GMSOFT_GMADS_INFO.reward;
    var _0x7a111c = _0x443d04[Math.floor(Math.random() * _0x443d04.length)];
    try {
      var _0x4214d8 = document.createElement("div");
      _0x4214d8.id = "gm-ad-overlay";
      _0x4214d8.style.cssText = "\n          position: fixed;\n          top: 0;\n          left: 0;\n          width: 100%;\n          height: 100%;\n          background: rgba(0, 0, 0, 0.9);\n          z-index: 9999;\n          display: flex;\n          justify-content: center;\n          align-items: center;\n          flex-direction: column;\n        ";
      var _0x682b35 = document.createElement("div");
      _0x682b35.style.cssText = "\n          position: relative;\n          max-width: 90%;\n          max-height: 80%;\n          background: #000;\n          border-radius: 8px;\n          overflow: hidden;\n        ";
      var _0x42efae = document.createElement("video");
      _0x42efae.src = _0x7a111c.image;
      _0x42efae.style.cssText = "\n          width: 100%;\n          height: 100%;\n          display: block;\n        ";
      _0x42efae.autoplay = true;
      _0x42efae.muted = true;
      _0x42efae.preload = "auto";
      var _0x5f4d13 = document.createElement("button");
      _0x5f4d13.innerHTML = "Skip (5)";
      _0x5f4d13.disabled = true;
      _0x5f4d13.style.cssText = "\n          position: absolute;\n          top: 10px;\n          right: 10px;\n          background: rgba(0, 0, 0, 0.8);\n          color: white;\n          border: 1px solid #666;\n          border-radius: 6px;\n          padding: 10px 16px;\n          cursor: pointer;\n          font-size: 16px;\n          font-weight: bold;\n          z-index: 10001;\n          box-shadow: 0 2px 8px rgba(0,0,0,0.3);\n        ";
      _0x5f4d13.disabled = true;
      _0x5f4d13.style.opacity = "0.5";
      var _0x28b2c9 = document.createElement("div");
      _0x28b2c9.style.cssText = "\n          position: absolute;\n          bottom: 0;\n          left: 0;\n          width: 100%;\n          height: 6px;\n          background: rgba(255, 255, 255, 0.3);\n          z-index: 10001;\n        ";
      var _0x358365 = document.createElement("div");
      _0x358365.style.cssText = "\n          height: 100%;\n          width: 0%;\n          background: linear-gradient(90deg, #ff6b6b, #4ecdc4);\n          transition: width 0.1s ease;\n        ";
      var _0x30b0fa = 5;
      var _0xb889b = setInterval(function () {
        _0x30b0fa--;
        if (_0x30b0fa > 0) {
          _0x5f4d13.innerHTML = "Skip (" + _0x30b0fa + ")";
        } else {
          _0x5f4d13.innerHTML = "Skip";
          _0x5f4d13.disabled = false;
          _0x5f4d13.style.opacity = "1";
          _0x5f4d13.style.cursor = "pointer";
          clearInterval(_0xb889b);
        }
      }, 1000);
      function _0x15688f() {
        if (_0x4214d8 && _0x4214d8.parentNode) {
          _0x4214d8.parentNode.removeChild(_0x4214d8);
        }
        clearInterval(_0xb889b);
        _0x9eef69.adFinished();
      }
      function _0x2989ed() {
        window.open(_0x7a111c.url, "_blank");
      }
      function _0x54b4fd() {
        if (_0x42efae.duration && _0x42efae.currentTime) {
          var _0x5e20ac = _0x42efae.currentTime / _0x42efae.duration * 100;
          _0x358365.style.width = _0x5e20ac + "%";
        }
      }
      _0x42efae.addEventListener("loadstart", function () {
        _0x9eef69.adStarted();
      });
      _0x42efae.addEventListener("timeupdate", function () {
        _0x54b4fd();
      });
      _0x42efae.addEventListener("ended", function () {
        _0x15688f();
      });
      _0x42efae.addEventListener("error", function (_0x44e6a7) {
        var _0x410357 = {
          message: "Video load error",
          code: _0x44e6a7.target.error ? _0x44e6a7.target.error.code : "unknown"
        };
        _0x9eef69.adError(_0x410357);
        _0x15688f();
      });
      _0x42efae.addEventListener("click", function () {
        _0x2989ed();
      });
      _0x5f4d13.addEventListener("click", function () {
        if (!_0x5f4d13.disabled) {
          _0x15688f();
        }
      });
      _0x42efae.addEventListener("contextmenu", function (_0x389f7f) {
        _0x389f7f.preventDefault();
      });
      _0x28b2c9.appendChild(_0x358365);
      _0x682b35.appendChild(_0x42efae);
      _0x682b35.appendChild(_0x5f4d13);
      _0x682b35.appendChild(_0x28b2c9);
      _0x4214d8.appendChild(_0x682b35);
      document.body.appendChild(_0x4214d8);
      _0x42efae.play().catch(function (_0x17733b) {
        console.error("Video play error:", _0x17733b);
        _0x9eef69.adError({
          message: "Cannot play video",
          details: _0x17733b.message
        });
        _0x15688f();
      });
    } catch (_0x540e51) {
      console.error("Ad overlay creation error:", _0x540e51);
      _0x9eef69.adError({
        message: "Failed to create ad overlay",
        details: _0x540e51.message
      });
    }
  }
  function _0x59aac4() {
    try {
      console.log("Check local storage GM_SDK_GetVeryfiedSignature: ", window.GMSOFT_SIGNED);
      if (window.GMSOFT_SIGNED) {
        console.log("Local storage GM_SDK_GetVeryfiedSignature: ", window.GMSOFT_SIGNED);
        _0x493362("GmSoft", "OnGetVeryfiedSignature", window.GMSOFT_SIGNED);
        return;
      }
    } catch (_0x2d3649) {
      console.error("Error getting GM_SDK_GetVeryfiedSignature  ", _0x2d3649);
    }
    try {
      let _0x2d7f00 = "hn=" + "https://games.1games.io";
      let _0x4a4317 = btoa(_0x2d7f00);
      let _0x3ca5e5 = "https://api.cdnwave.com/sdkdom/keysigned";
      if (window.GMSOFT_OPTIONS && window.GMSOFT_OPTIONS.signedurl) {
        _0x3ca5e5 = window.GMSOFT_OPTIONS.signedurl;
      }
      let _0x17d831 = _0x3ca5e5 + "?params=" + _0x4a4317;
      var _0x4113bc = new XMLHttpRequest();
      let _0x5268ea = "";
      _0x4113bc.open("GET", _0x17d831, false);
      _0x4113bc.send(_0x5268ea);
      let _0x314351 = _0x4113bc.responseText;
      window.GMSOFT_SIGNED = _0x314351;
      console.log("send request GM_SDK_GetVeryfiedSignature: ", window.GMSOFT_SIGNED);
      _0x493362("GmSoft", "OnGetVeryfiedSignature", window.GMSOFT_SIGNED);
    } catch (_0x54b75c) {
      console.error("Error fetching GM_SDK_GetVeryfiedSignature: ", _0x54b75c);
    }
  }
  function _0x433b5b() {
    let _0x437419 = "https://games.1games.io";
    _0x493362("GmSoft", "SetUnityHostName", _0x437419);
    _0x493362("GmSoft", "SetSDKType", window.GMSOFT_SDKTYPE);
  }
  function _0x34c7ba() {
    console.log("GM_SDK_StartGame");
    try {
      gmStartGame(function () {
        _0x493362("GmSoft", "SetGameInfoParam", JSON.stringify(window.GMSOFT_GAME_INFO));
      });
    } catch (_0x8ab67d) {
      console.error("Error JS 12", _0x8ab67d);
    }
    try {
      gmStartAds(function () {
        _0x493362("GmSoft", "SetAdParam", JSON.stringify(window.GMSOFT_ADS_INFO));
      });
    } catch (_0x19cbe1) {
      console.error("Error JS 20", _0x19cbe1);
    }
    try {
      document.addEventListener("gmsoftbanevent", _0x4f50ab => {
        _0x493362("GmSoft", "LockGame", _0x4f50ab.detail);
      });
    } catch (_0x23d3f1) {
      console.error("Error JS 28", _0x23d3f1);
    }
  }
  function _0x3500ab(_0x4b0b98) {
    try {
      window[preroll.config.loaderObjectName].log("WGSDK: Sending game event");
      window[preroll.config.loaderObjectName].GameEvent(_0x4b0b98);
    } catch (_0x3f35d1) {
      console.log("No WeeGooAFG implementation found!");
    }
  }
  function _0x3a7632() {
    try {
      window.CrazyGames.SDK.game.gameplayStart();
    } catch (_0x38e7bf) {
      window.UnitySDK.logError("Error while calling gameplayStart:", _0x38e7bf);
    }
  }
  function _0x55546f() {
    try {
      window.CrazyGames.SDK.game.gameplayStop();
    } catch (_0x1db27f) {
      window.UnitySDK.logError("Error while calling gameplayStop:", _0x1db27f);
    }
  }
  function _0x4d4334() {
    var _0x33ad70 = firebaseConfig.projectId;
    var _0x3534f9 = _0x40b564(_0x33ad70) + 1;
    var _0x1929aa = _0x4fa9c0(_0x3534f9);
    _0x16748b(_0x33ad70, _0x1929aa, _0x3534f9);
    return _0x1929aa;
  }
  function _0x1b8156(_0x3907d3, _0x144a17, _0x1c55c8, _0x88c06d, _0x2be5e6) {
    var _0x29840d = _0x2aa540(_0x3907d3);
    var _0xbedab1 = _0x2aa540(_0x144a17);
    var _0x15f4e0 = _0x2aa540(_0x1c55c8);
    var _0x543a42 = _0x2aa540(_0x88c06d);
    var _0x3d196f = _0x2aa540(_0x2be5e6);
    try {
      firebase.firestore().collection(_0x29840d).doc(_0xbedab1).get().then(function (_0x36e71a) {
        if (_0x36e71a.exists) {
          window.unityInstance.SendMessage(_0x15f4e0, _0x543a42, JSON.stringify(_0x36e71a.data()));
        } else {
          window.unityInstance.SendMessage(_0x15f4e0, _0x543a42, "null");
        }
      }).catch(function (_0x36d9e1) {
        window.unityInstance.SendMessage(_0x15f4e0, _0x3d196f, JSON.stringify(_0x36d9e1, Object.getOwnPropertyNames(_0x36d9e1)));
      });
    } catch (_0x8d2030) {
      window.unityInstance.SendMessage(_0x15f4e0, _0x3d196f, JSON.stringify(_0x8d2030, Object.getOwnPropertyNames(_0x8d2030)));
    }
  }
  function _0x5e3f67(_0x5f5248, _0x30684b, _0x181bf1, _0x3e6ed2) {
    var _0x59832a = _0x2aa540(_0x5f5248);
    var _0x2ae59f = _0x2aa540(_0x30684b);
    var _0x14bb81 = _0x2aa540(_0x181bf1);
    var _0x4873bd = _0x2aa540(_0x3e6ed2);
    try {
      firebase.firestore().collection(_0x59832a).get().then(function (_0x3c9544) {
        var _0x2b116b = {};
        _0x3c9544.forEach(function (_0x26e266) {
          _0x2b116b[_0x26e266.id] = _0x26e266.data();
        });
        window.unityInstance.SendMessage(_0x2ae59f, _0x14bb81, JSON.stringify(_0x2b116b));
      }).catch(function (_0x18b051) {
        window.unityInstance.SendMessage(_0x2ae59f, _0x4873bd, JSON.stringify(_0x18b051, Object.getOwnPropertyNames(_0x18b051)));
      });
    } catch (_0x201140) {
      window.unityInstance.SendMessage(_0x2ae59f, _0x4873bd, JSON.stringify(_0x201140, Object.getOwnPropertyNames(_0x201140)));
    }
  }
  function _0x2e8583() {
    var _0x12a2a0 = window.CrazyGames.SDK.environment;
    var _0x238056 = _0x40b564(_0x12a2a0) + 1;
    var _0x344364 = _0x4fa9c0(_0x238056);
    _0x16748b(_0x12a2a0, _0x344364, _0x238056);
    return _0x344364;
  }
  function _0x47bec0() {
    var _0x2cbedf = JSON.stringify(window.CrazyGames.SDK.game.settings);
    var _0x4e63b6 = _0x40b564(_0x2cbedf) + 1;
    var _0x3bdd64 = _0x4fa9c0(_0x4e63b6);
    _0x16748b(_0x2cbedf, _0x3bdd64, _0x4e63b6);
    return _0x3bdd64;
  }
  function _0x56cc61(_0x42ea61) {
    var _0x4c52ae = new URLSearchParams(window.location.search);
    var _0x108b99 = _0x4c52ae.get(window.unityStringify(_0x42ea61));
    if (_0x108b99 === null) {
      _0x108b99 = "";
    }
    var _0x2024c5 = _0x40b564(_0x108b99) + 1;
    var _0x4ddb9d = _0x4fa9c0(_0x2024c5);
    _0x16748b(_0x108b99, _0x4ddb9d, _0x2024c5);
    return _0x4ddb9d;
  }
  function _0x15036() {
    return window.CrazyGames.SDK.isQaTool;
  }
  function _0x340a83(_0x7f6bb1, _0x2aae4a, _0xdc3788, _0x15f2f8) {
    var _0x2db6d8 = _0x2aa540(_0x7f6bb1);
    var _0x16086e = _0x2aa540(_0x2aae4a);
    var _0x5d92f6 = _0x2aa540(_0xdc3788);
    var _0x32fb02 = _0x2aa540(_0x15f2f8);
    try {
      firebase.database().ref(_0x2db6d8).once("value").then(function (_0x22f7ba) {
        window.unityInstance.SendMessage(_0x16086e, _0x5d92f6, JSON.stringify(_0x22f7ba.val()));
      });
    } catch (_0x398ace) {
      window.unityInstance.SendMessage(_0x16086e, _0x32fb02, JSON.stringify(_0x398ace, Object.getOwnPropertyNames(_0x398ace)));
    }
  }
  function _0x3db679() {
    var _0x4a5377 = JSON.stringify(window.CrazyGames.SDK.user.systemInfo);
    var _0x2e7791 = _0x40b564(_0x4a5377) + 1;
    var _0x5c524d = _0x4fa9c0(_0x2e7791);
    _0x16748b(_0x4a5377, _0x5c524d, _0x2e7791);
    return _0x5c524d;
  }
  function _0x5cc8f6() {
    if (performance.memory) {
      return performance.memory.totalJSHeapSize;
    }
    return 0;
  }
  function _0x4ee7c5() {
    if (performance.memory) {
      return performance.memory.usedJSHeapSize;
    }
    return 0;
  }
  function _0x32c83e() {
    window.CrazyGames.SDK.user.getUser().then(function (_0x18cfd5) {
      _0x493362("CrazySDKSingleton", "JSLibCallback_GetUser", JSON.stringify({
        userJson: JSON.stringify(_0x18cfd5)
      }));
    }).catch(function (_0x12db75) {
      _0x493362("CrazySDKSingleton", "JSLibCallback_GetUser", JSON.stringify({
        errorJson: JSON.stringify(_0x12db75)
      }));
    });
  }
  function _0x532751() {
    window.CrazyGames.SDK.user.getUserToken().then(function (_0x4c7eda) {
      _0x493362("CrazySDKSingleton", "JSLibCallback_GetUserToken", JSON.stringify({
        token: _0x4c7eda
      }));
    }).catch(function (_0x32a51d) {
      _0x493362("CrazySDKSingleton", "JSLibCallback_GetUserToken", JSON.stringify({
        errorJson: JSON.stringify(_0x32a51d)
      }));
    });
  }
  function _0x13c1f2() {
    window.CrazyGames.SDK.user.getXsollaUserToken().then(function (_0x39ce93) {
      _0x493362("CrazySDKSingleton", "JSLibCallback_GetXsollaUserToken", JSON.stringify({
        token: _0x39ce93
      }));
    }).catch(function (_0x1e12e6) {
      _0x493362("CrazySDKSingleton", "JSLibCallback_GetXsollaUserToken", JSON.stringify({
        errorJson: JSON.stringify(_0x1e12e6)
      }));
    });
  }
  function _0x5f412b() {}
  function _0x1dd494() {
    console.log("afg.ready: " + afg.ready);
    if (afg.ready) {
      _0x493362("H5Adverisement", "PreloadRewardedVideoCallback", 1);
      afg.adBreak({
        type: "reward",
        name: "reward ads",
        beforeReward: function (_0x26aba1) {
          this._showRewardAdFn = _0x26aba1;
          console.log("[H5 Ads] before reward");
        }.bind(this),
        adViewed: function () {
          this._showRewardAdFn = null;
          _0x493362("H5Adverisement", "RewardedVideoSuccessCallback");
          console.log("[H5 Ads] ad viewed");
        }.bind(this),
        adDismissed: function () {
          this._showRewardAdFn = null;
          _0x493362("H5Adverisement", "RewardedVideoFailureCallback");
          console.log("[H5 Ads] ad failure");
        }.bind(this),
        adBreakDone: function (_0x9aa22f) {
          console.log("[H5 Ads] Reward break done");
          _0x493362("H5Adverisement", "ResumeGameCallback");
        }.bind(this)
      });
    } else {
      console.log("[H5 Ads] no reward ads");
      _0x493362("H5Adverisement", "PreloadRewardedVideoCallback", 0);
    }
  }
  function _0x52ded8() {
    if (afg.ready) {
      afg.adBreak({
        type: "next",
        name: "next",
        beforeAd: function () {
          afg.onBeforeAd();
          console.log("[H5 Ads] Before ad");
          _0x493362("H5Adverisement", "PauseGameCallback");
        }.bind(this),
        adBreakDone: function () {
          console.log("[H5 Ads] Ad break done");
          _0x493362("H5Adverisement", "ResumeGameCallback");
        }.bind(this)
      });
    } else {
      console.log("no " + adType + " ads");
      _0x493362("H5Adverisement", "ResumeGameCallback");
    }
  }
  function _0x3c4fbb() {
    if (this._showRewardAdFn) {
      _0x493362("H5Adverisement", "PauseGameCallback");
      this._showRewardAdFn();
    } else {
      _0x493362("H5Adverisement", "ResumeGameCallback");
    }
  }
  function _0x3cfc90() {
    try {
      window.CrazyGames.SDK.game.happytime();
    } catch (_0x38744d) {
      window.UnitySDK.logError("Error while calling happytime:", _0x38744d);
    }
  }
  function _0x4d99dd() {
    try {
      window.CrazyGames.SDK.game.hideInviteButton();
    } catch (_0x6444ff) {
      window.UnitySDK.logError("Error while calling hideInviteButton:", _0x6444ff);
    }
  }
  function _0x389350(_0x4504fd, _0x26f96e) {
    const _0x43b23e = _0x2aa540(_0x4504fd);
    const _0x4d09f4 = _0x2aa540(_0x26f96e);
    const _0x5c2fd3 = document.createElement("input");
    _0x5c2fd3.type = "file";
    _0x5c2fd3.accept = ".txt";
    _0x5c2fd3.onchange = _0x707b84 => {
      const _0x5c1ba8 = _0x707b84.target.files[0];
      if (_0x5c1ba8) {
        const _0x40413d = new FileReader();
        _0x40413d.onload = () => {
          const _0x1e8afd = _0x40413d.result;
          _0x493362(_0x43b23e, _0x4d09f4, _0x1e8afd);
        };
        _0x40413d.readAsText(_0x5c1ba8);
      }
    };
    _0x5c2fd3.click();
  }
  function _0x367bff(_0x134e48, _0x4d81b5) {
    const _0x2c8640 = _0x2aa540(_0x134e48);
    const _0x1236a5 = _0x2aa540(_0x4d81b5);
    const _0x38fb9b = document.createElement("input");
    _0x38fb9b.type = "file";
    _0x38fb9b.accept = ".gmd";
    _0x38fb9b.onchange = _0x49c8e9 => {
      const _0x2aaa12 = _0x49c8e9.target.files[0];
      if (_0x2aaa12) {
        const _0x20a3ad = new FileReader();
        _0x20a3ad.onload = () => {
          const _0x4ffb98 = _0x20a3ad.result;
          _0x493362(_0x2c8640, _0x1236a5, _0x4ffb98);
        };
        _0x20a3ad.readAsText(_0x2aaa12);
      }
    };
    _0x38fb9b.click();
  }
  function _0x5d8587(_0x51af8e, _0x122af6, _0x3c6168, _0x3e8b09, _0x45e486, _0x26ee7d, _0x31cd07) {
    var _0x3c6da9 = _0x2aa540(_0x51af8e);
    var _0x1afc83 = _0x2aa540(_0x122af6);
    var _0x13ffd0 = _0x2aa540(_0x3c6168);
    var _0x565a31 = _0x2aa540(_0x45e486);
    var _0x9b75de = _0x2aa540(_0x26ee7d);
    var _0x90167c = _0x2aa540(_0x31cd07);
    try {
      var _0xd4b3d8 = {};
      _0xd4b3d8[_0x13ffd0] = firebase.firestore.FieldValue.increment(_0x3e8b09);
      firebase.firestore().collection(_0x3c6da9).doc(_0x1afc83).update(_0xd4b3d8).then(function () {
        window.unityInstance.SendMessage(_0x565a31, _0x9b75de, "Success: incremented " + _0x13ffd0 + " by " + _0x3e8b09);
      }).catch(function (_0x49618a) {
        window.unityInstance.SendMessage(_0x565a31, _0x90167c, JSON.stringify(_0x49618a, Object.getOwnPropertyNames(_0x49618a)));
      });
    } catch (_0x481c8b) {
      window.unityInstance.SendMessage(_0x565a31, _0x90167c, JSON.stringify(_0x481c8b, Object.getOwnPropertyNames(_0x481c8b)));
    }
  }
  function _0x137c2f(_0x49463e) {
    if (typeof _0x2aa540 !== "undefined") {
      window.unityStringify = _0x2aa540;
    } else {
      window.unityStringify = _0x2aa540;
    }
    window.UnitySDK = {
      version: window.unityStringify(_0x49463e),
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
        var _0x4bd01d = Array.prototype.slice.call(arguments);
        _0x4bd01d.unshift("[JsLib]");
        console.error.apply(console, _0x4bd01d);
      }
    };
    var _0x584637 = {
      wrapper: {
        engine: "unity",
        sdkVersion: window.unityStringify(_0x49463e)
      }
    };
    var _0x1ddc53 = document.createElement("script");
    _0x1ddc53.src = "https://sdk.crazygames.com/crazygames-sdk-v3.js";
    document.head.appendChild(_0x1ddc53);
    _0x1ddc53.addEventListener("load", function () {
      window.CrazyGames.SDK.init(_0x584637).then(function () {
        _0x493362("CrazySDKSingleton", "JSLibCallback_Init");
        window.CrazyGames.SDK.ad.hasAdblock().then(function (_0x498b44) {
          _0x493362("CrazySDKSingleton", "JSLibCallback_AdblockDetectionResult", _0x498b44 ? 1 : 0);
        }).catch(function (_0x3766bd) {
          window.UnitySDK.logError("Error while checking adblock:", _0x3766bd);
          _0x493362("CrazySDKSingleton", "JSLibCallback_AdblockDetectionResult", 0);
        });
        window.CrazyGames.SDK.user.addAuthListener(function (_0x23c905) {
          _0x493362("CrazySDKSingleton", "JSLibCallback_AuthListener", JSON.stringify({
            userJson: JSON.stringify(_0x23c905)
          }));
        });
      });
    });
  }
  function _0x405ac0() {
    if (/CrOS/.test(navigator.userAgent)) {
      return 1;
    } else {
      return 0;
    }
  }
  function _0x1e6827() {
    var _0x1ddf40 = window.document;
    var _0x41461a = _0x1ddf40.fullscreenElement || _0x1ddf40.mozFullScreenElement || _0x1ddf40.webkitFullscreenElement || _0x1ddf40.msFullscreenElement;
    return _0x41461a != null;
  }
  function _0x4b91f9() {
    return window.CrazyGames.SDK.user.isUserAccountAvailable;
  }
  var _0x1e3805 = null;
  var _0x4a47f4 = 0;
  function _0x5b893e() {
    return _0x1e3805 && _0x1e3805.activated || _0x4a47f4 != 0;
  }
  var _0x30070f = 1;
  var _0x4c07e1 = {
    x: 0,
    y: 0,
    z: 0
  };
  function _0xcd223b() {
    _0x4c07e1 = {
      x: _0x1e3805.x * _0x30070f,
      y: _0x1e3805.y * _0x30070f,
      z: _0x1e3805.z * _0x30070f
    };
    if (_0x4a47f4 != 0) {
      _0x44f61d(_0x4a47f4, _0x4c07e1.x, _0x4c07e1.y, _0x4c07e1.z);
    }
  }
  var _0x344c9d = 0;
  var _0x2098e3 = 0;
  var _0x4d5569 = 0;
  var _0x23616e = 0;
  var _0x823fa0 = 0;
  function _0x1c1326(_0x11d029, _0x2d6f04) {
    var _0x3b4bcc = {
      x: _0x11d029.x - _0x2d6f04.x,
      y: _0x11d029.y - _0x2d6f04.y,
      z: _0x11d029.z - _0x2d6f04.z
    };
    var _0xb708fc = _0x3b4bcc.x * _0x3b4bcc.x + _0x3b4bcc.y * _0x3b4bcc.y + _0x3b4bcc.z * _0x3b4bcc.z;
    var _0x7b7a4d = {
      x: _0x11d029.x + _0x2d6f04.x,
      y: _0x11d029.y + _0x2d6f04.y,
      z: _0x11d029.z + _0x2d6f04.z
    };
    var _0x135c1f = _0x7b7a4d.x * _0x7b7a4d.x + _0x7b7a4d.y * _0x7b7a4d.y + _0x7b7a4d.z * _0x7b7a4d.z;
    if (_0xb708fc <= _0x135c1f) {
      return _0x3b4bcc;
    } else {
      return _0x7b7a4d;
    }
  }
  function _0x101ba5(_0x55d002) {
    var _0x708562 = {
      x: _0x55d002.accelerationIncludingGravity.x * _0x30070f,
      y: _0x55d002.accelerationIncludingGravity.y * _0x30070f,
      z: _0x55d002.accelerationIncludingGravity.z * _0x30070f
    };
    if (_0x4a47f4 != 0) {
      _0x44f61d(_0x4a47f4, _0x708562.x, _0x708562.y, _0x708562.z);
    }
    var _0x37d4c6 = {
      x: _0x55d002.acceleration.x * _0x30070f,
      y: _0x55d002.acceleration.y * _0x30070f,
      z: _0x55d002.acceleration.z * _0x30070f
    };
    if (_0x4d5569 != 0) {
      _0x44f61d(_0x4d5569, _0x37d4c6.x, _0x37d4c6.y, _0x37d4c6.z);
    }
    if (_0x23616e != 0) {
      var _0x2423ff = _0x1c1326(_0x708562, _0x37d4c6);
      _0x44f61d(_0x23616e, _0x2423ff.x, _0x2423ff.y, _0x2423ff.z);
    }
    if (_0x823fa0 != 0) {
      var _0x1991c5 = Math.PI / 180;
      _0x44f61d(_0x823fa0, _0x55d002.rotationRate.alpha * _0x1991c5, _0x55d002.rotationRate.beta * _0x1991c5, _0x55d002.rotationRate.gamma * _0x1991c5);
    }
  }
  var _0x72fab6 = 0;
  function _0x27c26a(_0x498e4f) {
    if (_0x498e4f & 1) {
      if (typeof DeviceOrientationEvent.requestPermission === "function") {
        DeviceOrientationEvent.requestPermission().then(function (_0x3c914c) {
          if (_0x3c914c === "granted") {
            _0x72fab6 &= ~1;
          } else {
            _0x49a161("DeviceOrientationEvent permission not granted");
          }
        }).catch(function (_0x16f781) {
          _0x49a161(_0x16f781);
          _0x72fab6 |= 1;
        });
      }
    }
    if (_0x498e4f & 2) {
      if (typeof DeviceMotionEvent.requestPermission === "function") {
        DeviceMotionEvent.requestPermission().then(function (_0x1e09c7) {
          if (_0x1e09c7 === "granted") {
            _0x72fab6 &= ~2;
          } else {
            _0x49a161("DeviceMotionEvent permission not granted");
          }
        }).catch(function (_0xf48e) {
          _0x49a161(_0xf48e);
          _0x72fab6 |= 2;
        });
      }
    }
  }
  function _0xd07ff5() {
    if (_0x4a47f4 == 0 && _0x4d5569 == 0 && _0x23616e == 0 && _0x823fa0 == 0) {
      _0x27c26a(2);
      window.addEventListener("devicemotion", _0x101ba5);
    }
  }
  function _0x53f273() {
    var _0x25046a = 9.80665;
    _0x30070f = /(iPhone|iPad|Macintosh)/i.test(navigator.userAgent) ? 1 / _0x25046a : -1 / _0x25046a;
  }
  function _0x13a7c6(_0x540886, _0x181893) {
    _0x53f273();
    if (typeof Accelerometer === "undefined") {
      _0xd07ff5();
      if (_0x540886 != 0) {
        _0x4a47f4 = _0x540886;
      }
      return;
    }
    if (_0x540886 != 0) {
      _0x4a47f4 = _0x540886;
    }
    function _0x1a3261(_0x2fee37) {
      _0x1e3805 = new Accelerometer({
        frequency: _0x2fee37,
        referenceFrame: "device"
      });
      _0x1e3805.addEventListener("reading", _0xcd223b);
      _0x1e3805.addEventListener("error", function (_0x520f50) {
        _0x49a161(_0x520f50.error ? _0x520f50.error : _0x520f50);
      });
      _0x1e3805.start();
      _0x2098e3 = _0x2fee37;
    }
    if (_0x1e3805) {
      if (_0x2098e3 != _0x181893) {
        _0x1e3805.stop();
        _0x1e3805.removeEventListener("reading", _0xcd223b);
        _0x1a3261(_0x181893);
      }
    } else if (_0x344c9d != 0) {
      _0x344c9d = _0x181893;
    } else {
      _0x344c9d = _0x181893;
      navigator.permissions.query({
        name: "accelerometer"
      }).then(function (_0x3ab60f) {
        if (_0x3ab60f.state === "granted") {
          _0x1a3261(_0x344c9d);
        } else {
          _0x49a161("No permission to use Accelerometer.");
        }
        _0x344c9d = 0;
      });
    }
  }
  function _0x3d85c3() {
    if (_0x4a47f4 == 0 && _0x4d5569 == 0 && _0x23616e == 0 && _0x823fa0 == 0) {
      window.removeEventListener("devicemotion", _0x2809d2);
    }
  }
  function _0x5919eb() {
    if (_0x1e3805) {
      if (typeof GravitySensor !== "undefined" || _0x23616e == 0) {
        _0x1e3805.stop();
        _0x1e3805.removeEventListener("reading", _0xcd223b);
        _0x1e3805 = null;
      }
      _0x4a47f4 = 0;
      _0x2098e3 = 0;
    } else if (_0x4a47f4 != 0) {
      _0x4a47f4 = 0;
      _0x3d85c3();
    }
  }
  function _0x4b267d(_0x2eb564, _0xe60384) {
    var _0x2ac172 = "";
    for (var _0x7842d4 = 0; _0x7842d4 < _0xe60384; _0x7842d4++) {
      _0x2ac172 += String.fromCharCode(_0x312996[_0x2eb564 + _0x7842d4]);
    }
    _0x2c3fe3.canvas.style.cursor = "url(data:image/cur;base64," + btoa(_0x2ac172) + "),default";
  }
  function _0xc1b0c2(_0xb59aac) {
    _0x2c3fe3.canvas.style.cursor = _0xb59aac ? "default" : "none";
  }
  function _0x19922e(_0x651135) {
    if (typeof window.CSS !== "undefined" && typeof window.CSS.escape !== "undefined") {
      return window.CSS.escape(_0x651135);
    }
    return _0x651135.replace(/(#|\.|\+|\[|\]|\(|\)|\{|\})/g, "\\$1");
  }
  function _0x26cc1a() {
    var _0x2dc3bd = _0x2c3fe3.canvas ? _0x2c3fe3.canvas.id : "unity-canvas";
    return "#" + _0x19922e(_0x2dc3bd);
  }
  function _0x1ac0ae(_0x23ca2e, _0x5eccfc, _0x532829, _0x24e252) {
    var _0x18e815 = document.querySelector(_0x26cc1a());
    var _0x16f869 = _0x18e815 && _0x18e815.getBoundingClientRect();
    _0x599e77[_0x532829 >> 2] = _0x23ca2e - (_0x16f869 ? _0x16f869.left : 0);
    _0x599e77[_0x24e252 >> 2] = _0x5eccfc - (_0x16f869 ? _0x16f869.top : 0);
  }
  function _0x3d27b6(_0x46bec7) {
    var _0x214c38 = _0x40b564(_0x46bec7) + 1;
    var _0x46e9c1 = _0x4fa9c0(_0x214c38);
    _0x16748b(_0x46bec7, _0x46e9c1, _0x214c38);
    return _0x46e9c1;
  }
  function _0xa6c15() {
    var _0xbe8df9 = _0x26cc1a();
    if (_0xa6c15.selector != _0xbe8df9) {
      _0xe462f0(_0xa6c15.ptr);
      _0xa6c15.ptr = _0x3d27b6(_0xbe8df9);
      _0xa6c15.selector = _0xbe8df9;
    }
    return _0xa6c15.ptr;
  }
  function _0x38f52c(_0x187ef3) {
    var _0xb588d3 = _0x2aa540(_0x187ef3);
    try {
      eval(_0xb588d3);
    } catch (_0x19e176) {
      console.error(_0x19e176);
    }
  }
  function _0x400eb9(_0x486ea8) {
    var _0x142a43 = _0x2aa540(_0x486ea8);
    window.open(_0x142a43, "_blank", "");
  }
  var _0x5cb16a = {
    numPendingSync: 0,
    syncInternal: 1000,
    syncInProgress: false,
    sync: function (_0x374ab4) {
      if (_0x374ab4) {
        if (_0x5cb16a.numPendingSync == 0) {
          return;
        }
      } else if (_0x5cb16a.syncInProgress) {
        _0x5cb16a.numPendingSync++;
        return;
      }
      _0x5cb16a.syncInProgress = true;
      _0x3b09e1.syncfs(false, function (_0xc1733) {
        _0x5cb16a.syncInProgress = false;
      });
      _0x5cb16a.numPendingSync = 0;
    }
  };
  function _0x511ffb() {
    _0x2c3fe3.setInterval(function () {
      _0x5cb16a.sync(true);
    }, _0x5cb16a.syncInternal);
  }
  function _0x15af60() {
    _0x5cb16a.sync(false);
  }
  var _0x17e575 = null;
  function _0x49240d() {
    if (typeof GravitySensor !== "undefined") {
      return _0x17e575 && _0x17e575.activated;
    } else {
      return _0x23616e != 0;
    }
  }
  function _0x36f749() {
    if (_0x23616e != 0) {
      _0x44f61d(_0x23616e, _0x17e575.x * _0x30070f, _0x17e575.y * _0x30070f, _0x17e575.z * _0x30070f);
    }
  }
  var _0x56c4a0 = 0;
  var _0xb6572c = null;
  function _0x12602a() {
    var _0x607e80 = {
      x: _0xb6572c.x * _0x30070f,
      y: _0xb6572c.y * _0x30070f,
      z: _0xb6572c.z * _0x30070f
    };
    if (_0x4d5569 != 0) {
      _0x44f61d(_0x4d5569, _0x607e80.x, _0x607e80.y, _0x607e80.z);
    }
    if (_0x23616e != 0 && typeof GravitySensor === "undefined") {
      var _0x131ca9 = _0x1c1326(_0x4c07e1, _0x607e80);
      _0x44f61d(_0x23616e, _0x131ca9.x, _0x131ca9.y, _0x131ca9.z);
    }
  }
  var _0x93993d = 0;
  var _0x186408 = 0;
  function _0x894eb(_0x37950c, _0x41c813) {
    _0x53f273();
    if (typeof LinearAccelerationSensor === "undefined") {
      _0xd07ff5();
      if (_0x37950c != 0) {
        _0x4d5569 = _0x37950c;
      }
      return;
    }
    if (_0x37950c != 0) {
      _0x4d5569 = _0x37950c;
    }
    function _0x5b0056(_0xa6bf66) {
      _0xb6572c = new LinearAccelerationSensor({
        frequency: _0xa6bf66,
        referenceFrame: "device"
      });
      _0xb6572c.addEventListener("reading", _0x12602a);
      _0xb6572c.addEventListener("error", function (_0x50a016) {
        _0x49a161(_0x50a016.error ? _0x50a016.error : _0x50a016);
      });
      _0xb6572c.start();
      _0x186408 = _0xa6bf66;
    }
    if (_0xb6572c) {
      if (_0x186408 != _0x41c813) {
        _0xb6572c.stop();
        _0xb6572c.removeEventListener("reading", _0x12602a);
        _0x5b0056(_0x41c813);
      }
    } else if (_0x93993d != 0) {
      _0x93993d = _0x41c813;
    } else {
      _0x93993d = _0x41c813;
      navigator.permissions.query({
        name: "accelerometer"
      }).then(function (_0x550b80) {
        if (_0x550b80.state === "granted") {
          _0x5b0056(_0x93993d);
        } else {
          _0x49a161("No permission to use LinearAccelerationSensor.");
        }
        _0x93993d = 0;
      });
    }
  }
  function _0x1725d5(_0x45cca5, _0x34ddfa) {
    if (typeof GravitySensor === "undefined") {
      _0x13a7c6(0, Math.max(_0x34ddfa, _0x2098e3));
      _0x894eb(0, Math.max(_0x34ddfa, _0x186408));
      _0x23616e = _0x45cca5;
      return;
    }
    _0x53f273();
    _0x23616e = _0x45cca5;
    function _0x5e3553(_0x170b21) {
      _0x17e575 = new GravitySensor({
        frequency: _0x170b21,
        referenceFrame: "device"
      });
      _0x17e575.addEventListener("reading", _0x36f749);
      _0x17e575.addEventListener("error", function (_0x1625a2) {
        _0x49a161(_0x1625a2.error ? _0x1625a2.error : _0x1625a2);
      });
      _0x17e575.start();
    }
    if (_0x17e575) {
      _0x17e575.stop();
      _0x17e575.removeEventListener("reading", _0x36f749);
      _0x5e3553(_0x34ddfa);
    } else if (_0x56c4a0 != 0) {
      _0x56c4a0 = _0x34ddfa;
    } else {
      _0x56c4a0 = _0x34ddfa;
      navigator.permissions.query({
        name: "accelerometer"
      }).then(function (_0x3a62b7) {
        if (_0x3a62b7.state === "granted") {
          _0x5e3553(_0x56c4a0);
        } else {
          _0x49a161("No permission to use GravitySensor.");
        }
        _0x56c4a0 = 0;
      });
    }
  }
  function _0x3ab137() {
    if (_0xb6572c) {
      if (typeof GravitySensor !== "undefined" || _0x23616e == 0) {
        _0xb6572c.stop();
        _0xb6572c.removeEventListener("reading", _0x12602a);
        _0xb6572c = null;
      }
      _0x4d5569 = 0;
      _0x186408 = 0;
    } else if (_0x4d5569 != 0) {
      _0x4d5569 = 0;
      _0x3d85c3();
    }
  }
  function _0x24282a() {
    _0x23616e = 0;
    if (typeof GravitySensor === "undefined") {
      if (_0x4a47f4 == 0) {
        _0x5919eb();
      }
      if (_0x4d5569 == 0) {
        _0x3ab137();
      }
      return;
    }
    if (_0x17e575) {
      _0x17e575.stop();
      _0x17e575.removeEventListener("reading", _0x36f749);
      _0x17e575 = null;
    }
  }
  function _0x4c7058(_0x34bf44) {
    try {
      (function () {
        _0x21100c.call(null, _0x34bf44);
      })();
    } catch (_0x8f77b) {
      console.warn(_0x8f77b);
    }
  }
  var _0x30085e = null;
  function _0xf1f9eb() {
    return _0x30085e && _0x30085e.activated || _0x823fa0 != 0;
  }
  function _0x17f67a() {
    if (_0x823fa0 != 0) {
      _0x44f61d(_0x823fa0, _0x30085e.x, _0x30085e.y, _0x30085e.z);
    }
  }
  var _0x21875c = 0;
  function _0x371e57(_0x4fb1f3, _0x4205dc) {
    if (typeof Gyroscope === "undefined") {
      _0xd07ff5();
      _0x823fa0 = _0x4fb1f3;
      return;
    }
    _0x823fa0 = _0x4fb1f3;
    function _0x7698d9(_0x34ab6a) {
      _0x30085e = new Gyroscope({
        frequency: _0x34ab6a,
        referenceFrame: "device"
      });
      _0x30085e.addEventListener("reading", _0x17f67a);
      _0x30085e.addEventListener("error", function (_0x50d0d5) {
        _0x49a161(_0x50d0d5.error ? _0x50d0d5.error : _0x50d0d5);
      });
      _0x30085e.start();
    }
    if (_0x30085e) {
      _0x30085e.stop();
      _0x30085e.removeEventListener("reading", _0x17f67a);
      _0x7698d9(_0x4205dc);
    } else if (_0x21875c != 0) {
      _0x21875c = _0x4205dc;
    } else {
      _0x21875c = _0x4205dc;
      navigator.permissions.query({
        name: "gyroscope"
      }).then(function (_0x31a59c) {
        if (_0x31a59c.state === "granted") {
          _0x7698d9(_0x21875c);
        } else {
          _0x49a161("No permission to use Gyroscope.");
        }
        _0x21875c = 0;
      });
    }
  }
  function _0x3dd092() {
    if (_0x30085e) {
      _0x30085e.stop();
      _0x30085e.removeEventListener("reading", _0x17f67a);
      _0x30085e = null;
      _0x823fa0 = 0;
    } else if (_0x823fa0 != 0) {
      _0x823fa0 = 0;
      _0x3d85c3();
    }
  }
  function _0x5a8c47() {
    const _0x68a0c6 = function (_0x455d11) {
      if (_0x455d11.target.localName !== "canvas") {
        _0x3ba975();
      }
    };
    document.addEventListener("contextmenu", _0x68a0c6);
    _0x2c3fe3.deinitializers.push(function () {
      document.removeEventListener("contextmenu", _0x68a0c6);
    });
  }
  function _0x573470() {
    return _0xb6572c && _0xb6572c.activated || _0x4d5569 != 0;
  }
  function _0x1b50d5(_0x3fc277, _0x27b0b4) {
    var _0x69900b = _0x2aa540(_0x3fc277);
    if (typeof dump == "function") {
      dump(_0x69900b);
    }
    switch (_0x27b0b4) {
      case 0:
      case 1:
      case 4:
        console.error(_0x69900b);
        return;
      case 2:
        console.warn(_0x69900b);
        return;
      case 3:
      case 5:
        console.log(_0x69900b);
        return;
      default:
        console.error("Unknown console message type!");
        console.error(_0x69900b);
    }
  }
  function _0x21fd09(_0x479f17, _0x57f41b) {
    var _0x24e877 = _0x2500c9();
    if (_0x479f17) {
      _0x16748b(_0x24e877, _0x479f17, _0x57f41b);
    }
    return _0x40b564(_0x24e877);
  }
  var _0xa94cfd = null;
  var _0x53520a = 0;
  function _0x43d10a() {
    return _0xa94cfd && _0xa94cfd.activated || _0x53520a != 0;
  }
  function _0x4700f9() {
    if (_0x53520a != 0) {
      _0x58371d(_0x53520a, _0xa94cfd.quaternion[0], _0xa94cfd.quaternion[1], _0xa94cfd.quaternion[2], _0xa94cfd.quaternion[3]);
    }
  }
  var _0x48ce18 = 0;
  function _0x2809d2(_0x62554e) {
    if (_0x53520a) {
      var _0x5e9548 = Math.PI / 180;
      var _0x49e390 = _0x62554e.beta * _0x5e9548;
      var _0x5ad6da = _0x62554e.gamma * _0x5e9548;
      var _0x584708 = _0x62554e.alpha * _0x5e9548;
      var _0xd6d539 = Math.cos(_0x49e390 / 2);
      var _0x1f5b1f = Math.sin(_0x49e390 / 2);
      var _0x35eed2 = Math.cos(_0x5ad6da / 2);
      var _0x43e0e4 = Math.sin(_0x5ad6da / 2);
      var _0x2a34c6 = Math.cos(_0x584708 / 2);
      var _0x10d0a2 = Math.sin(_0x584708 / 2);
      var _0x34ce7b = _0x1f5b1f * _0x35eed2 * _0x2a34c6 - _0xd6d539 * _0x43e0e4 * _0x10d0a2;
      var _0x5312df = _0xd6d539 * _0x43e0e4 * _0x2a34c6 + _0x1f5b1f * _0x35eed2 * _0x10d0a2;
      var _0x4cc10b = _0xd6d539 * _0x35eed2 * _0x10d0a2 + _0x1f5b1f * _0x43e0e4 * _0x2a34c6;
      var _0xffc3db = _0xd6d539 * _0x35eed2 * _0x2a34c6 - _0x1f5b1f * _0x43e0e4 * _0x10d0a2;
      _0x58371d(_0x53520a, _0x34ce7b, _0x5312df, _0x4cc10b, _0xffc3db);
    }
  }
  function _0x3b2f52(_0x6102ab, _0x453330) {
    if (typeof RelativeOrientationSensor === "undefined") {
      if (_0x53520a == 0) {
        _0x53520a = _0x6102ab;
        _0x27c26a(1);
        window.addEventListener("deviceorientation", _0x2809d2);
      }
      return;
    }
    _0x53520a = _0x6102ab;
    function _0x5dddfb(_0x330376) {
      _0xa94cfd = new RelativeOrientationSensor({
        frequency: _0x330376,
        referenceFrame: "device"
      });
      _0xa94cfd.addEventListener("reading", _0x4700f9);
      _0xa94cfd.addEventListener("error", function (_0x3c4810) {
        _0x49a161(_0x3c4810.error ? _0x3c4810.error : _0x3c4810);
      });
      _0xa94cfd.start();
    }
    if (_0xa94cfd) {
      _0xa94cfd.stop();
      _0xa94cfd.removeEventListener("reading", _0x4700f9);
      _0x5dddfb(_0x453330);
    } else if (_0x48ce18 != 0) {
      _0x48ce18 = _0x453330;
    } else {
      _0x48ce18 = _0x453330;
      Promise.all([navigator.permissions.query({
        name: "accelerometer"
      }), navigator.permissions.query({
        name: "gyroscope"
      })]).then(function (_0x55ba3c) {
        if (_0x55ba3c.every(function (_0x2473cf) {
          return _0x2473cf.state === "granted";
        })) {
          _0x5dddfb(_0x48ce18);
        } else {
          _0x49a161("No permissions to use RelativeOrientationSensor.");
        }
        _0x48ce18 = 0;
      });
    }
  }
  function _0x1cf5c2() {
    if (_0xa94cfd) {
      _0xa94cfd.stop();
      _0xa94cfd.removeEventListener("reading", _0x4700f9);
      _0xa94cfd = null;
    } else if (_0x53520a != 0) {
      window.removeEventListener("deviceorientation", _0x2809d2);
    }
    _0x53520a = 0;
  }
  function _0x4ecc36() {
    if (_0x72fab6 == 0) {
      return;
    }
    _0x27c26a(_0x72fab6);
  }
  function _0x23abfd() {
    _0x2c3fe3.QuitCleanup();
  }
  var _0xb0c59a = 0;
  function _0x36fd9f() {
    if (_0xb0c59a) {
      _0x5c7aa8(_0xb0c59a, window.innerWidth, window.innerHeight, screen.orientation ? screen.orientation.angle : window.orientation);
    }
  }
  function _0x38f20e() {
    _0xb0c59a = 0;
    window.removeEventListener("resize", _0x36fd9f);
    if (screen.orientation) {
      screen.orientation.removeEventListener("change", _0x36fd9f);
    }
  }
  function _0x810842(_0x3495b3) {
    if (!_0xb0c59a) {
      if (screen.orientation) {
        screen.orientation.addEventListener("change", _0x36fd9f);
      }
      window.addEventListener("resize", _0x36fd9f);
      _0xb0c59a = _0x3495b3;
      setTimeout(_0x36fd9f, 0);
    }
  }
  var _0x455515 = -1;
  var _0x321dae = -1;
  var _0x1b3208 = -1;
  function _0x7079b5(_0x54082d) {
    if (!screen.orientation || !screen.orientation.lock) {
      return;
    }
    function _0x34c030() {
      _0x321dae = _0x455515;
      var _0x47b396 = ["any", 0, "landscape", "portrait", "portrait-primary", "portrait-secondary", "landscape-primary", "landscape-secondary"];
      var _0x2a2001 = _0x47b396[_0x321dae];
      screen.orientation.lock(_0x2a2001).then(function () {
        if (_0x455515 != _0x321dae) {
          _0x1b3208 = setTimeout(_0x34c030, 0);
        } else {
          _0x1b3208 = -1;
        }
      }).catch(function (_0x321e24) {
        _0x49a161(_0x321e24);
        _0x1b3208 = -1;
      });
    }
    _0x455515 = _0x54082d;
    if (_0x1b3208 == -1 && _0x54082d != _0x321dae) {
      _0x1b3208 = setTimeout(_0x34c030, 0);
    }
  }
  var _0x1a0f06 = {
    audioInstanceIdCounter: 0,
    audioInstances: {},
    audioContext: null,
    audioWebEnabled: 0,
    audioCache: [],
    pendingAudioSources: {}
  };
  function _0x32fa3a(_0x57c74f) {
    _0x57c74f.estimatePlaybackPosition = function () {
      var _0xb437e0 = (_0x1a0f06.audioContext.currentTime - _0x57c74f.playbackStartTime) * _0x57c74f.playbackRate.value;
      if (_0x57c74f.loop && _0xb437e0 >= _0x57c74f.loopStart) {
        _0xb437e0 = (_0xb437e0 - _0x57c74f.loopStart) % (_0x57c74f.loopEnd - _0x57c74f.loopStart) + _0x57c74f.loopStart;
      }
      return _0xb437e0;
    };
    _0x57c74f.setPitch = function (_0x12873c) {
      var _0x5980e0 = _0x57c74f.estimatePlaybackPosition();
      if (_0x5980e0 >= 0) {
        _0x57c74f.playbackStartTime = _0x1a0f06.audioContext.currentTime - _0x5980e0 / _0x12873c;
      }
      if (_0x57c74f.playbackRate.value !== _0x12873c) {
        _0x57c74f.playbackRate.value = _0x12873c;
      }
    };
  }
  function _0x57f0ff(_0x3db077, _0x51b4a8) {
    var _0x53ba05 = {
      buffer: _0x3db077,
      error: _0x51b4a8
    };
    _0x53ba05.release = function () {};
    _0x53ba05.getLength = function () {
      if (!this.buffer) {
        console.log("Trying to get length of sound which is not loaded.");
        return 0;
      }
      var _0x49e9bb = 44100 / this.buffer.sampleRate;
      return this.buffer.length * _0x49e9bb;
    };
    _0x53ba05.getData = function (_0x27c393, _0x2df892) {
      if (!this.buffer) {
        console.log("Trying to get data of sound which is not loaded.");
        return 0;
      }
      var _0xd229bb = _0x27c393 >> 2;
      var _0x1239e8 = _0x29b84b.subarray(_0xd229bb, _0xd229bb + (_0x2df892 >> 2));
      var _0x5c9102 = Math.floor((_0x2df892 >> 2) / this.buffer.numberOfChannels);
      var _0x5671c0 = Math.min(this.buffer.length, _0x5c9102);
      for (var _0x31ae46 = 0; _0x31ae46 < this.buffer.numberOfChannels; _0x31ae46++) {
        var _0x3f2d1a = this.buffer.getChannelData(_0x31ae46).subarray(0, _0x5671c0);
        _0x1239e8.set(_0x3f2d1a, _0x31ae46 * _0x5671c0);
      }
      return _0x5671c0 * this.buffer.numberOfChannels * 4;
    };
    _0x53ba05.getNumberOfChannels = function () {
      if (!this.buffer) {
        console.log("Trying to get metadata of sound which is not loaded.");
        return 0;
      }
      return this.buffer.numberOfChannels;
    };
    _0x53ba05.getFrequency = function () {
      if (!this.buffer) {
        console.log("Trying to get metadata of sound which is not loaded.");
        return 0;
      }
      return this.buffer.sampleRate;
    };
    _0x53ba05.createSourceNode = function () {
      if (!this.buffer) {
        console.log("Trying to play sound which is not loaded.");
      }
      var _0x27fded = _0x1a0f06.audioContext.createBufferSource();
      _0x27fded.buffer = this.buffer;
      _0x32fa3a(_0x27fded);
      return _0x27fded;
    };
    return _0x53ba05;
  }
  function _0x150057(_0x3a5e8a, _0x1ec1ee) {
    var _0x3aea22 = {
      callback: _0x3a5e8a,
      userData: _0x1ec1ee,
      source: null,
      gain: _0x1a0f06.audioContext.createGain(),
      panner: _0x1a0f06.audioContext.createPanner(),
      threeD: false,
      loop: false,
      loopStart: 0,
      loopEnd: 0,
      pitch: 1
    };
    _0x3aea22.panner.rolloffFactor = 0;
    _0x3aea22.release = function () {
      this.disconnectSource();
      this.gain.disconnect();
      this.panner.disconnect();
    };
    _0x3aea22.playSoundClip = function (_0x465b10, _0x146608, _0x1c34e5) {
      try {
        var _0x182131 = this;
        this.source = _0x465b10.createSourceNode();
        this.setupPanning();
        this.source.onended = function () {
          _0x182131.source.isStopped = true;
          _0x182131.disconnectSource();
          if (_0x182131.callback) {
            _0x534e63("vi", _0x182131.callback, [_0x182131.userData]);
          }
        };
        this.source.loop = this.loop;
        this.source.loopStart = this.loopStart;
        this.source.loopEnd = this.loopEnd;
        this.source.start(_0x146608, _0x1c34e5);
        this.source.playbackStartTime = _0x146608 - _0x1c34e5 / this.source.playbackRate.value;
        this.source.setPitch(this.pitch);
      } catch (_0x96a65) {
        console.error("Channel.playSoundClip error. Exception: " + _0x96a65);
      }
    };
    _0x3aea22.stop = function (_0x5e28b4) {
      if (!this.source) {
        return;
      }
      try {
        _0x3aea22.source.stop(_0x1a0f06.audioContext.currentTime + _0x5e28b4);
      } catch (_0x59f1df) {}
      if (_0x5e28b4 == 0) {
        this.disconnectSource();
      }
    };
    _0x3aea22.isPaused = function () {
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
    _0x3aea22.pause = function () {
      if (!this.source || this.source.isPausedMockNode) {
        return;
      }
      if (this.source.mediaElement) {
        this.source._pauseMediaElement();
        return;
      }
      var _0x174766 = {
        isPausedMockNode: true,
        buffer: this.source.buffer,
        loop: this.source.loop,
        loopStart: this.source.loopStart,
        loopEnd: this.source.loopEnd,
        playbackRate: this.source.playbackRate.value,
        scheduledStopTime: undefined,
        playbackPausedAtPosition: this.source.estimatePlaybackPosition(),
        setPitch: function (_0x24f849) {
          this.playbackRate = _0x24f849;
        },
        stop: function (_0x562952) {
          this.scheduledStopTime = _0x562952;
        }
      };
      this.stop(0);
      this.disconnectSource();
      this.source = _0x174766;
    };
    _0x3aea22.resume = function () {
      if (this.source && this.source.mediaElement) {
        this.source.start(undefined, this.source.currentTime);
        return;
      }
      if (!this.source || !this.source.isPausedMockNode) {
        return;
      }
      var _0x959d84 = this.source;
      var _0x148ef6 = _0x57f0ff(_0x959d84.buffer, false);
      this.playSoundClip(_0x148ef6, _0x1a0f06.audioContext.currentTime, Math.max(0, _0x959d84.playbackPausedAtPosition));
      this.source.loop = _0x959d84.loop;
      this.source.loopStart = _0x959d84.loopStart;
      this.source.loopEnd = _0x959d84.loopEnd;
      this.source.setPitch(_0x959d84.playbackRate);
      if (typeof _0x959d84.scheduledStopTime !== "undefined") {
        var _0x4c67b5 = Math.max(_0x959d84.scheduledStopTime - _0x1a0f06.audioContext.currentTime, 0);
        this.stop(_0x4c67b5);
      }
    };
    _0x3aea22.setLoop = function (_0x50ab17) {
      this.loop = _0x50ab17;
      if (!this.source || this.source.loop == _0x50ab17) {
        return;
      }
      this.source.loop = _0x50ab17;
    };
    _0x3aea22.setLoopPoints = function (_0x24e616, _0x3f19e3) {
      this.loopStart = _0x24e616;
      this.loopEnd = _0x3f19e3;
      if (!this.source) {
        return;
      }
      if (this.source.loopStart !== _0x24e616) {
        this.source.loopStart = _0x24e616;
      }
      if (this.source.loopEnd !== _0x3f19e3) {
        this.source.loopEnd = _0x3f19e3;
      }
    };
    _0x3aea22.set3D = function (_0x5ec027) {
      if (this.threeD == _0x5ec027) {
        return;
      }
      this.threeD = _0x5ec027;
      if (!this.source) {
        return;
      }
      this.setupPanning();
    };
    _0x3aea22.setPitch = function (_0x3197c1) {
      this.pitch = _0x3197c1;
      if (!this.source) {
        return;
      }
      this.source.setPitch(_0x3197c1);
    };
    _0x3aea22.setVolume = function (_0x2864cc) {
      if (this.gain.gain.value == _0x2864cc) {
        return;
      }
      this.gain.gain.value = _0x2864cc;
    };
    _0x3aea22.setPosition = function (_0x2b2e7d, _0x543626, _0x30039d) {
      var _0x2bba9e = this.panner;
      if (_0x2bba9e.positionX) {
        if (_0x2bba9e.positionX.value !== _0x2b2e7d) {
          _0x2bba9e.positionX.value = _0x2b2e7d;
        }
        if (_0x2bba9e.positionY.value !== _0x543626) {
          _0x2bba9e.positionY.value = _0x543626;
        }
        if (_0x2bba9e.positionZ.value !== _0x30039d) {
          _0x2bba9e.positionZ.value = _0x30039d;
        }
      } else if (_0x2bba9e._x !== _0x2b2e7d || _0x2bba9e._y !== _0x543626 || _0x2bba9e._z !== _0x30039d) {
        _0x2bba9e.setPosition(_0x2b2e7d, _0x543626, _0x30039d);
        _0x2bba9e._x = _0x2b2e7d;
        _0x2bba9e._y = _0x543626;
        _0x2bba9e._z = _0x30039d;
      }
    };
    _0x3aea22.disconnectSource = function () {
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
    _0x3aea22.setupPanning = function () {
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
      this.gain.connect(_0x1a0f06.audioContext.destination);
    };
    _0x3aea22.isStopped = function () {
      if (!this.source) {
        return true;
      }
      if (this.source.mediaElement) {
        return this.source.isStopped;
      }
      return false;
    };
    return _0x3aea22;
  }
  function _0x13c2a6(_0x1e0e54, _0x5b73f5) {
    if (_0x1a0f06.audioWebEnabled == 0) {
      return;
    }
    _0x1a0f06.audioInstances[++_0x1a0f06.audioInstanceIdCounter] = _0x150057(_0x1e0e54, _0x5b73f5);
    return _0x1a0f06.audioInstanceIdCounter;
  }
  function _0x10e02f(_0x3fc897) {
    if (_0x1a0f06.audioWebEnabled == 0) {
      return 0;
    }
    var _0x33bd48 = _0x1a0f06.audioInstances[_0x3fc897];
    if (!_0x33bd48) {
      return 0;
    }
    return _0x33bd48.getLength();
  }
  function _0x3f14ff(_0x249d75) {
    if (_0x1a0f06.audioWebEnabled == 0) {
      return 2;
    }
    var _0x262742 = _0x1a0f06.audioInstances[_0x249d75];
    if (_0x262742.error) {
      return 2;
    }
    if (_0x262742.buffer || _0x262742.url) {
      return 0;
    }
    return 1;
  }
  function _0x161252(_0x5c9c97, _0x25fcee) {
    if (_0x1a0f06.audioWebEnabled == 0) {
      _0x599e77[_0x25fcee >> 2] = 0;
      _0x599e77[(_0x25fcee >> 2) + 1] = 0;
      return false;
    }
    var _0x15f17b = _0x1a0f06.audioInstances[_0x5c9c97];
    if (!_0x15f17b) {
      _0x599e77[_0x25fcee >> 2] = 0;
      _0x599e77[(_0x25fcee >> 2) + 1] = 0;
      return false;
    }
    _0x599e77[_0x25fcee >> 2] = _0x15f17b.getNumberOfChannels();
    _0x599e77[(_0x25fcee >> 2) + 1] = _0x15f17b.getFrequency();
    return true;
  }
  function _0xdbbacf(_0x32392b) {
    var _0x2d5cdf = _0x1a0f06.pendingAudioSources[_0x32392b];
    _0x2d5cdf.sourceNode._startPlayback(_0x2d5cdf.offset);
    delete _0x1a0f06.pendingAudioSources[_0x32392b];
  }
  function _0xe58445() {
    Object.keys(_0x1a0f06.pendingAudioSources).forEach(function (_0x2cb435) {
      _0xdbbacf(_0x2cb435);
    });
  }
  function _0x5717f6() {
    try {
      window.AudioContext = window.AudioContext || window.webkitAudioContext;
      _0x1a0f06.audioContext = new AudioContext();
      var _0x10008e = function () {
        if (_0x1a0f06.audioContext.state === "suspended") {
          _0x1a0f06.audioContext.resume().catch(function (_0x1fc0ac) {
            console.warn("Could not resume audio context. Exception: " + _0x1fc0ac);
          });
        } else {
          _0x2c3fe3.clearInterval(_0x53f3ac);
        }
      };
      var _0x53f3ac = _0x2c3fe3.setInterval(_0x10008e, 400);
      _0x1a0f06.audioWebEnabled = 1;
      var _0x31cd6f = function () {
        try {
          if (_0x1a0f06.audioContext.state !== "running" && _0x1a0f06.audioContext.state !== "closed") {
            _0x1a0f06.audioContext.resume().catch(function (_0x16b9a9) {
              console.warn("Could not resume audio context. Exception: " + _0x16b9a9);
            });
          }
          _0xe58445();
          var _0x311d04 = 20;
          while (_0x1a0f06.audioCache.length < _0x311d04) {
            var _0x5a07dc = new Audio();
            _0x5a07dc.autoplay = false;
            _0x1a0f06.audioCache.push(_0x5a07dc);
          }
        } catch (_0x1ff702) {}
      };
      window.addEventListener("mousedown", _0x31cd6f);
      window.addEventListener("touchstart", _0x31cd6f);
      _0x2c3fe3.deinitializers.push(function () {
        window.removeEventListener("mousedown", _0x31cd6f);
        window.removeEventListener("touchstart", _0x31cd6f);
      });
    } catch (_0xe16b5f) {
      alert("Web Audio API is not supported in this browser");
    }
  }
  function _0x393717(_0x17190d) {
    var _0x348992 = _0x57f0ff(null, false);
    _0x1a0f06.audioContext.decodeAudioData(_0x17190d, function (_0xa06b94) {
      _0x348992.buffer = _0xa06b94;
    }, function (_0x13e3cd) {
      _0x348992.error = true;
      console.log("Decode error: " + _0x13e3cd);
    });
    return _0x348992;
  }
  function _0x508d63(_0x5cdcbc, _0x1fd944) {
    _0x1a0f06.pendingAudioSources[_0x5cdcbc.mediaElement.src] = {
      sourceNode: _0x5cdcbc,
      offset: _0x1fd944
    };
  }
  function _0x50fda1(_0x935a35) {
    switch (_0x935a35) {
      case 13:
        return "audio/mpeg";
      case 20:
        return "audio/wav";
      default:
        return "audio/mp4";
    }
  }
  function _0x3ffaca(_0x48b2d9, _0x416186) {
    var _0x177b8b = _0x50fda1(_0x416186);
    var _0x30d0ea = new Blob([_0x48b2d9], {
      type: _0x177b8b
    });
    var _0x460dfa = {
      url: URL.createObjectURL(_0x30d0ea),
      error: false,
      mediaElement: new Audio()
    };
    _0x460dfa.mediaElement.preload = "metadata";
    _0x460dfa.mediaElement.src = _0x460dfa.url;
    _0x460dfa.release = function () {
      if (!this.mediaElement) {
        return;
      }
      this.mediaElement.src = "";
      URL.revokeObjectURL(this.url);
      delete this.mediaElement;
      delete this.url;
    };
    _0x460dfa.getLength = function () {
      return this.mediaElement.duration * 44100;
    };
    _0x460dfa.getData = function (_0x4ff8b1, _0xe6c484) {
      console.warn("getData() is not supported for compressed sound.");
      return 0;
    };
    _0x460dfa.getNumberOfChannels = function () {
      console.warn("getNumberOfChannels() is not supported for compressed sound.");
      return 0;
    };
    _0x460dfa.getFrequency = function () {
      console.warn("getFrequency() is not supported for compressed sound.");
      return 0;
    };
    _0x460dfa.createSourceNode = function () {
      var _0x445008 = this;
      var _0x4e1a5d = _0x1a0f06.audioCache.length ? _0x1a0f06.audioCache.pop() : new Audio();
      _0x4e1a5d.preload = "metadata";
      _0x4e1a5d.src = this.url;
      var _0x45ad18 = _0x1a0f06.audioContext.createMediaElementSource(_0x4e1a5d);
      Object.defineProperty(_0x45ad18, "loop", {
        get: function () {
          return _0x45ad18.mediaElement.loop;
        },
        set: function (_0xeacb42) {
          if (_0x45ad18.mediaElement.loop !== _0xeacb42) {
            _0x45ad18.mediaElement.loop = _0xeacb42;
          }
        }
      });
      _0x45ad18.playbackRate = {};
      Object.defineProperty(_0x45ad18.playbackRate, "value", {
        get: function () {
          return _0x45ad18.mediaElement.playbackRate;
        },
        set: function (_0x577df) {
          if (_0x45ad18.mediaElement.playbackRate !== _0x577df) {
            _0x45ad18.mediaElement.playbackRate = _0x577df;
          }
        }
      });
      Object.defineProperty(_0x45ad18, "currentTime", {
        get: function () {
          return _0x45ad18.mediaElement.currentTime;
        },
        set: function (_0x1eb93c) {
          if (_0x45ad18.mediaElement.currentTime !== _0x1eb93c) {
            _0x45ad18.mediaElement.currentTime = _0x1eb93c;
          }
        }
      });
      Object.defineProperty(_0x45ad18, "mute", {
        get: function () {
          return _0x45ad18.mediaElement.mute;
        },
        set: function (_0x2a6cc1) {
          if (_0x45ad18.mediaElement.mute !== _0x2a6cc1) {
            _0x45ad18.mediaElement.mute = _0x2a6cc1;
          }
        }
      });
      Object.defineProperty(_0x45ad18, "onended", {
        get: function () {
          return _0x45ad18.mediaElement.onended;
        },
        set: function (_0xbde29) {
          _0x45ad18.mediaElement.onended = _0xbde29;
        }
      });
      _0x45ad18.playPromise = null;
      _0x45ad18.playTimeout = null;
      _0x45ad18.pauseRequested = false;
      _0x45ad18.isStopped = false;
      _0x45ad18._pauseMediaElement = function () {
        if (_0x45ad18.playPromise || _0x45ad18.playTimeout) {
          _0x45ad18.pauseRequested = true;
        } else {
          _0x45ad18.mediaElement.pause();
        }
      };
      _0x45ad18._startPlayback = function (_0x5685ad) {
        if (_0x45ad18.playPromise || _0x45ad18.playTimeout) {
          _0x45ad18.mediaElement.currentTime = _0x5685ad;
          _0x45ad18.pauseRequested = false;
          return;
        }
        _0x45ad18.mediaElement.currentTime = _0x5685ad;
        _0x45ad18.playPromise = _0x45ad18.mediaElement.play();
        if (_0x45ad18.playPromise) {
          _0x45ad18.playPromise.then(function () {
            if (_0x45ad18.pauseRequested) {
              _0x45ad18.mediaElement.pause();
              _0x45ad18.pauseRequested = false;
            }
            _0x45ad18.playPromise = null;
          }).catch(function (_0x49589d) {
            _0x45ad18.playPromise = null;
            if (_0x49589d.name !== "NotAllowedError") {
              throw _0x49589d;
            }
            _0x508d63(_0x45ad18, _0x5685ad);
          });
        }
      };
      _0x45ad18.start = function (_0x1335c0, _0x5ae1af) {
        if (typeof _0x1335c0 === "undefined") {
          _0x1335c0 = _0x1a0f06.audioContext.currentTime;
        }
        if (typeof _0x5ae1af === "undefined") {
          _0x5ae1af = 0;
        }
        var _0x2f8b02 = 4;
        var _0xb3597b = (_0x1335c0 - _0x1a0f06.audioContext.currentTime) * 1000;
        if (_0xb3597b > _0x2f8b02) {
          _0x45ad18.playTimeout = setTimeout(function () {
            _0x45ad18.playTimeout = null;
            _0x45ad18._startPlayback(_0x5ae1af);
          }, _0xb3597b);
        } else {
          _0x45ad18._startPlayback(_0x5ae1af);
        }
      };
      _0x45ad18.stop = function (_0x54deca) {
        if (typeof _0x54deca === "undefined") {
          _0x54deca = _0x1a0f06.audioContext.currentTime;
        }
        var _0x15f0a2 = 4;
        var _0x4ac0ea = (_0x54deca - _0x1a0f06.audioContext.currentTime) * 1000;
        if (_0x4ac0ea > _0x15f0a2) {
          setTimeout(function () {
            _0x45ad18._pauseMediaElement();
            _0x45ad18.isStopped = true;
          }, _0x4ac0ea);
        } else {
          _0x45ad18._pauseMediaElement();
          _0x45ad18.isStopped = true;
        }
      };
      _0x32fa3a(_0x45ad18);
      return _0x45ad18;
    };
    return _0x460dfa;
  }
  function _0x4ba9e2(_0x489744, _0x29434e, _0x5a0c8d, _0x31b909) {
    if (_0x1a0f06.audioWebEnabled == 0) {
      return 0;
    }
    var _0x44c000 = _0x312996.buffer.slice(_0x489744, _0x489744 + _0x29434e);
    if (_0x29434e < 131072) {
      _0x5a0c8d = 1;
    }
    var _0x1344b8;
    if (_0x5a0c8d) {
      _0x1344b8 = _0x393717(_0x44c000);
    } else {
      _0x1344b8 = _0x3ffaca(_0x44c000, _0x31b909);
    }
    _0x1a0f06.audioInstances[++_0x1a0f06.audioInstanceIdCounter] = _0x1344b8;
    return _0x1a0f06.audioInstanceIdCounter;
  }
  function _0x2e9a71(_0x452a91, _0x539630, _0xaf7397, _0x6ba73b) {
    var _0x4f0422 = _0x1a0f06.audioContext.createBuffer(_0x452a91, _0x539630, _0xaf7397);
    for (var _0x2274d0 = 0; _0x2274d0 < _0x452a91; _0x2274d0++) {
      var _0x35f077 = (_0x6ba73b >> 2) + _0x539630 * _0x2274d0;
      var _0x4bdde2 = _0x4f0422.copyToChannel || function (_0x378158, _0x534a25, _0x18582e) {
        var _0x160ea3 = _0x378158.subarray(0, Math.min(_0x378158.length, this.length - (_0x18582e | 0)));
        this.getChannelData(_0x534a25 | 0).set(_0x160ea3, _0x18582e | 0);
      };
      _0x4bdde2.apply(_0x4f0422, [_0x29b84b.subarray(_0x35f077, _0x35f077 + _0x539630), _0x2274d0, 0]);
    }
    return _0x57f0ff(_0x4f0422, false);
  }
  function _0xbf70e7(_0x4f161e, _0x5c9235, _0x5f8f9f, _0x55ac97) {
    if (_0x1a0f06.audioWebEnabled == 0) {
      return 0;
    }
    var _0x1f2289 = _0x2e9a71(_0x4f161e, _0x5c9235, _0x5f8f9f, _0x55ac97);
    _0x1a0f06.audioInstances[++_0x1a0f06.audioInstanceIdCounter] = _0x1f2289;
    return _0x1a0f06.audioInstanceIdCounter;
  }
  function _0x14bad3(_0x4d74fb, _0x5436fe, _0x239059, _0x2d1537) {
    if (_0x1a0f06.audioWebEnabled == 0) {
      return;
    }
    _0x384970(_0x5436fe, 0);
    var _0x2cd191 = _0x1a0f06.audioInstances[_0x4d74fb];
    var _0x15dc83 = _0x1a0f06.audioInstances[_0x5436fe];
    if (!_0x2cd191) {
      console.log("Trying to play sound which is not loaded.");
      return;
    }
    try {
      _0x15dc83.playSoundClip(_0x2cd191, _0x1a0f06.audioContext.currentTime + _0x2d1537, _0x239059);
    } catch (_0xbf1e49) {
      console.error("playSoundClip error. Exception: " + e);
    }
  }
  function _0x2f3057(_0x4327f7) {
    var _0x355f69 = _0x1a0f06.audioInstances[_0x4327f7];
    if (_0x355f69) {
      _0x355f69.release();
    }
    delete _0x1a0f06.audioInstances[_0x4327f7];
  }
  function _0x31be44() {
    if (_0x1a0f06.audioWebEnabled == 0) {
      return;
    }
    if (_0x1a0f06.audioContext.state === "suspended") {
      _0x1a0f06.audioContext.resume().catch(function (_0x4aaa85) {
        console.warn("Could not resume audio context. Exception: " + _0x4aaa85);
      });
    }
  }
  function _0x3db04b(_0x159f9f, _0x2d62f9) {
    var _0x11a248 = _0x1a0f06.audioInstances[_0x159f9f];
    _0x11a248.set3D(_0x2d62f9);
  }
  function _0x12d282(_0x290ef2, _0x13fe86, _0x30bdd7, _0x4ad445, _0x2b0f56, _0x5da4df) {
    if (_0x1a0f06.audioWebEnabled == 0) {
      return;
    }
    _0x290ef2 = -_0x290ef2;
    _0x13fe86 = -_0x13fe86;
    _0x30bdd7 = -_0x30bdd7;
    var _0x3da367 = _0x1a0f06.audioContext.listener;
    if (_0x3da367.forwardX) {
      if (_0x3da367.forwardX.value !== _0x290ef2) {
        _0x3da367.forwardX.value = _0x290ef2;
      }
      if (_0x3da367.forwardY.value !== _0x13fe86) {
        _0x3da367.forwardY.value = _0x13fe86;
      }
      if (_0x3da367.forwardZ.value !== _0x30bdd7) {
        _0x3da367.forwardZ.value = _0x30bdd7;
      }
      if (_0x3da367.upX.value !== _0x4ad445) {
        _0x3da367.upX.value = _0x4ad445;
      }
      if (_0x3da367.upY.value !== _0x2b0f56) {
        _0x3da367.upY.value = _0x2b0f56;
      }
      if (_0x3da367.upZ.value !== _0x5da4df) {
        _0x3da367.upZ.value = _0x5da4df;
      }
    } else if (_0x3da367._forwardX !== _0x290ef2 || _0x3da367._forwardY !== _0x13fe86 || _0x3da367._forwardZ !== _0x30bdd7 || _0x3da367._upX !== _0x4ad445 || _0x3da367._upY !== _0x2b0f56 || _0x3da367._upZ !== _0x5da4df) {
      _0x3da367.setOrientation(_0x290ef2, _0x13fe86, _0x30bdd7, _0x4ad445, _0x2b0f56, _0x5da4df);
      _0x3da367._forwardX = _0x290ef2;
      _0x3da367._forwardY = _0x13fe86;
      _0x3da367._forwardZ = _0x30bdd7;
      _0x3da367._upX = _0x4ad445;
      _0x3da367._upY = _0x2b0f56;
      _0x3da367._upZ = _0x5da4df;
    }
  }
  function _0x26d13b(_0x351856, _0x1bb361, _0x516d5e) {
    if (_0x1a0f06.audioWebEnabled == 0) {
      return;
    }
    var _0x2dc56a = _0x1a0f06.audioContext.listener;
    if (_0x2dc56a.positionX) {
      if (_0x2dc56a.positionX.value !== _0x351856) {
        _0x2dc56a.positionX.value = _0x351856;
      }
      if (_0x2dc56a.positionY.value !== _0x1bb361) {
        _0x2dc56a.positionY.value = _0x1bb361;
      }
      if (_0x2dc56a.positionZ.value !== _0x516d5e) {
        _0x2dc56a.positionZ.value = _0x516d5e;
      }
    } else if (_0x2dc56a._positionX !== _0x351856 || _0x2dc56a._positionY !== _0x1bb361 || _0x2dc56a._positionZ !== _0x516d5e) {
      _0x2dc56a.setPosition(_0x351856, _0x1bb361, _0x516d5e);
      _0x2dc56a._positionX = _0x351856;
      _0x2dc56a._positionY = _0x1bb361;
      _0x2dc56a._positionZ = _0x516d5e;
    }
  }
  function _0x44f864(_0x2e2dee, _0x12b79b) {
    if (_0x1a0f06.audioWebEnabled == 0) {
      return;
    }
    var _0x4aa08c = _0x1a0f06.audioInstances[_0x2e2dee];
    _0x4aa08c.setLoop(_0x12b79b);
  }
  function _0x76ad57(_0x309710, _0xb9cc6, _0x1bce83) {
    if (_0x1a0f06.audioWebEnabled == 0) {
      return;
    }
    var _0x58ac26 = _0x1a0f06.audioInstances[_0x309710];
    _0x58ac26.setLoopPoints(_0xb9cc6, _0x1bce83);
  }
  function _0x534f7a(_0x41a024, _0x5d64b2) {
    if (_0x1a0f06.audioWebEnabled == 0) {
      return;
    }
    var _0x5db169 = _0x1a0f06.audioInstances[_0x41a024];
    if (_0x5d64b2 != _0x5db169.isPaused()) {
      if (_0x5d64b2) {
        _0x5db169.pause();
      } else {
        _0x5db169.resume();
      }
    }
  }
  function _0x200138(_0x3aa44b, _0x29ff8e) {
    if (_0x1a0f06.audioWebEnabled == 0) {
      return;
    }
    try {
      var _0xb52569 = _0x1a0f06.audioInstances[_0x3aa44b];
      _0xb52569.setPitch(_0x29ff8e);
    } catch (_0x241433) {
      console.error("JS_Sound_SetPitch(channel=" + _0x3aa44b + ", pitch=" + _0x29ff8e + ") threw an exception: " + _0x241433);
    }
  }
  function _0x3a118e(_0x4ac4b3, _0x109a50, _0x32733f, _0x25bfd3) {
    if (_0x1a0f06.audioWebEnabled == 0) {
      return;
    }
    var _0x5d495f = _0x1a0f06.audioInstances[_0x4ac4b3];
    _0x5d495f.setPosition(_0x109a50, _0x32733f, _0x25bfd3);
  }
  function _0x5281f3(_0x37e1e3, _0x2cb2df) {
    if (_0x1a0f06.audioWebEnabled == 0) {
      return;
    }
    try {
      var _0x442013 = _0x1a0f06.audioInstances[_0x37e1e3];
      _0x442013.setVolume(_0x2cb2df);
    } catch (_0x15cf95) {
      console.error("JS_Sound_SetVolume(channel=" + _0x37e1e3 + ", volume=" + _0x2cb2df + ") threw an exception: " + _0x15cf95);
    }
  }
  function _0x384970(_0x1996e6, _0x51445) {
    if (_0x1a0f06.audioWebEnabled == 0) {
      return;
    }
    var _0x458d70 = _0x1a0f06.audioInstances[_0x1996e6];
    _0x458d70.stop(_0x51445);
  }
  function _0x1ede02(_0x39861b, _0x4076ab, _0x4e1d6f) {
    var _0x55a0a5 = _0x2aa540(_0x39861b);
    var _0x2b8fbc = _0x55a0a5 == "#canvas" ? _0x2c3fe3.canvas : document.querySelector(_0x55a0a5);
    var _0x2f5393 = 0;
    var _0x137733 = 0;
    if (_0x2b8fbc) {
      var _0x36ab37 = _0x2b8fbc.getBoundingClientRect();
      _0x2f5393 = _0x36ab37.width;
      _0x137733 = _0x36ab37.height;
    }
    _0x4aca1d[_0x4076ab >> 3] = _0x2f5393;
    _0x4aca1d[_0x4e1d6f >> 3] = _0x137733;
  }
  function _0x26b1e6(_0x208ba4, _0x116a4c) {
    if (_0x208ba4) {
      _0x16748b("https://games.1games.io", _0x208ba4, _0x116a4c);
    }
    return _0x40b564("https://games.1games.io");
  }
  function _0x483945(_0x228b13, _0x5ef2f8) {
    var _0x142743 = _0x2c3fe3.SystemInfo.gpu;
    if (_0x228b13) {
      _0x16748b(_0x142743, _0x228b13, _0x5ef2f8);
    }
    return _0x40b564(_0x142743);
  }
  function _0x3530ed() {
    return _0x2c3fe3.matchWebGLToCanvasSize || _0x2c3fe3.matchWebGLToCanvasSize === undefined;
  }
  function _0x2b9712() {
    return _0x312996.length / 1048576;
  }
  function _0x3f82a0(_0x17e64f, _0x592c3e) {
    var _0x4b6165 = _0x2c3fe3.SystemInfo.os + " " + _0x2c3fe3.SystemInfo.osVersion;
    if (_0x17e64f) {
      _0x16748b(_0x4b6165, _0x17e64f, _0x592c3e);
    }
    return _0x40b564(_0x4b6165);
  }
  function _0x1d4740() {
    if (_0x2c3fe3.matchWebGLToCanvasSize == false) {
      return 1;
    } else {
      return _0x2c3fe3.devicePixelRatio || window.devicePixelRatio || 1;
    }
  }
  function _0x3b681d(_0x2ff7a8, _0x36572d) {
    _0x4aca1d[_0x2ff7a8 >> 3] = _0x2c3fe3.SystemInfo.width;
    _0x4aca1d[_0x36572d >> 3] = _0x2c3fe3.SystemInfo.height;
  }
  function _0x570e69(_0x2ba353, _0x454338) {
    if (_0x2ba353) {
      _0x16748b(_0x2c3fe3.streamingAssetsUrl, _0x2ba353, _0x454338);
    }
    return _0x40b564(_0x2c3fe3.streamingAssetsUrl);
  }
  function _0x169bcf() {
    var _0x2bc27a = _0x3f9476.getExtension("WEBGL_compressed_texture_astc");
    if (_0x2bc27a && _0x2bc27a.getSupportedProfiles) {
      return _0x2bc27a.getSupportedProfiles().includes("hdr");
    }
    return false;
  }
  function _0x249cc7() {
    return _0x2c3fe3.SystemInfo.hasCursorLock;
  }
  function _0xd729c8() {
    return _0x2c3fe3.SystemInfo.hasFullscreen;
  }
  function _0x52c8ec() {
    return _0x2c3fe3.SystemInfo.hasWebGL;
  }
  function _0x4e9866() {
    return _0x2c3fe3.SystemInfo.mobile;
  }
  function _0x9ebcaf() {
    return !!_0x2c3fe3.shouldQuit;
  }
  var _0x9a8db3 = {
    requests: {},
    responses: {},
    abortControllers: {},
    timer: {},
    nextRequestId: 1
  };
  function _0x220970(_0x45a0c3) {
    var _0x45d548 = _0x9a8db3.abortControllers[_0x45a0c3];
    if (!_0x45d548 || _0x45d548.signal.aborted) {
      return;
    }
    _0x45d548.abort();
  }
  function _0xc5f4d(_0x222f07, _0xc5e371) {
    var _0x4506f9 = _0x2aa540(_0x222f07);
    var _0xdd72ef = _0x2aa540(_0xc5e371);
    var _0x4e5111 = new AbortController();
    var _0xd6d0ed = {
      url: _0x4506f9,
      init: {
        method: _0xdd72ef,
        signal: _0x4e5111.signal,
        headers: {},
        enableStreamingDownload: true
      },
      tempBuffer: null,
      tempBufferSize: 0
    };
    _0x9a8db3.abortControllers[_0x9a8db3.nextRequestId] = _0x4e5111;
    _0x9a8db3.requests[_0x9a8db3.nextRequestId] = _0xd6d0ed;
    return _0x9a8db3.nextRequestId++;
  }
  function _0xd5f7ee(_0x103f66) {
    var _0xc8c6f9 = _0x9a8db3.responses[_0x103f66];
    if (!_0xc8c6f9) {
      return "";
    }
    if (_0xc8c6f9.headerString) {
      return _0xc8c6f9.headerString;
    }
    var _0x416842 = "";
    var _0x4070b9 = _0xc8c6f9.headers.entries();
    for (var _0x1b53fb = _0x4070b9.next(); !_0x1b53fb.done; _0x1b53fb = _0x4070b9.next()) {
      _0x416842 += _0x1b53fb.value[0] + ": " + _0x1b53fb.value[1] + "\r\n";
    }
    _0xc8c6f9.headerString = _0x416842;
    return _0x416842;
  }
  function _0x136bd7(_0xae0bb, _0x51ee0a, _0x2e9b1b, _0x1a338d, _0x3de2b0) {
    var _0x11f5d5 = _0x9a8db3.responses[_0xae0bb];
    if (!_0x11f5d5) {
      _0x16748b("", _0x51ee0a, _0x2e9b1b);
      _0x16748b("", _0x1a338d, _0x3de2b0);
      return;
    }
    if (_0x51ee0a) {
      var _0x4e8beb = _0xd5f7ee(_0xae0bb);
      _0x16748b(_0x4e8beb, _0x51ee0a, _0x2e9b1b);
    }
    if (_0x1a338d) {
      _0x16748b(_0x11f5d5.url, _0x1a338d, _0x3de2b0);
    }
  }
  function _0x23bad3(_0x1cecba, _0x36b4e8) {
    var _0x2c9afb = _0x9a8db3.responses[_0x1cecba];
    if (!_0x2c9afb) {
      _0x599e77[_0x36b4e8 >> 2] = 0;
      _0x599e77[(_0x36b4e8 >> 2) + 1] = 0;
      return;
    }
    var _0x4ea5d9 = _0xd5f7ee(_0x1cecba);
    _0x599e77[_0x36b4e8 >> 2] = _0x40b564(_0x4ea5d9);
    _0x599e77[(_0x36b4e8 >> 2) + 1] = _0x40b564(_0x2c9afb.url);
  }
  function _0x313134(_0x443f7e) {
    if (_0x9a8db3.timer[_0x443f7e]) {
      clearTimeout(_0x9a8db3.timer[_0x443f7e]);
    }
    delete _0x9a8db3.requests[_0x443f7e];
    delete _0x9a8db3.responses[_0x443f7e];
    delete _0x9a8db3.abortControllers[_0x443f7e];
    delete _0x9a8db3.timer[_0x443f7e];
  }
  function _0x222ff8(_0x110b48, _0x9c5346, _0x46d030, _0xe04075, _0x22fea1, _0x2d5de0) {
    var _0x40ad99 = _0x9a8db3.requests[_0x110b48];
    var _0x2c0751 = _0x9a8db3.abortControllers[_0x110b48];
    function _0x5ad1e6(_0x2c2a7c) {
      if (!_0x40ad99.tempBuffer) {
        const _0x6e2f2b = Math.max(_0x2c2a7c, 1024);
        _0x40ad99.tempBuffer = _0x4fa9c0(_0x6e2f2b);
        _0x40ad99.tempBufferSize = _0x6e2f2b;
      }
      if (_0x40ad99.tempBufferSize < _0x2c2a7c) {
        _0xe462f0(_0x40ad99.tempBuffer);
        _0x40ad99.tempBuffer = _0x4fa9c0(_0x2c2a7c);
        _0x40ad99.tempBufferSize = _0x2c2a7c;
      }
      return _0x40ad99.tempBuffer;
    }
    function _0x2cbffd() {
      if (_0x9a8db3.timer[_0x110b48]) {
        clearTimeout(_0x9a8db3.timer[_0x110b48]);
        delete _0x9a8db3.timer[_0x110b48];
      }
    }
    function _0x13d51f(_0x59a3a2, _0x3c3ac9) {
      _0x2cbffd();
      if (!_0x22fea1) {
        return;
      }
      var _0x15ec30 = 0;
      if (_0x40ad99.init.enableStreamingDownload) {
        _0x534e63("viiiiii", _0x22fea1, [_0xe04075, _0x59a3a2.status, 0, _0x3c3ac9.length, 0, _0x15ec30]);
      } else if (_0x3c3ac9.length != 0) {
        var _0x5c47f1 = _0x4fa9c0(_0x3c3ac9.length);
        _0x312996.set(_0x3c3ac9, _0x5c47f1);
        _0x534e63("viiiiii", _0x22fea1, [_0xe04075, _0x59a3a2.status, _0x5c47f1, _0x3c3ac9.length, 0, _0x15ec30]);
      } else {
        _0x534e63("viiiiii", _0x22fea1, [_0xe04075, _0x59a3a2.status, 0, 0, 0, _0x15ec30]);
      }
      if (_0x40ad99.tempBuffer) {
        _0xe462f0(_0x40ad99.tempBuffer);
      }
    }
    function _0x466aec(_0x376d67, _0x43bcf4) {
      _0x2cbffd();
      if (!_0x22fea1) {
        return;
      }
      var _0x2bb30d = _0x40b564(_0x376d67) + 1;
      var _0x3a4ef6 = _0x4fa9c0(_0x2bb30d);
      _0x16748b(_0x376d67, _0x3a4ef6, _0x2bb30d);
      _0x534e63("viiiiii", _0x22fea1, [_0xe04075, 500, 0, 0, _0x3a4ef6, _0x43bcf4]);
      _0xe462f0(_0x3a4ef6);
      if (_0x40ad99.tempBuffer) {
        _0xe462f0(_0x40ad99.tempBuffer);
      }
    }
    function _0x2e6400(_0x435226) {
      if (!_0x2d5de0 || !_0x435226.lengthComputable) {
        return;
      }
      var _0x3497ec = _0x435226.response;
      _0x9a8db3.responses[_0x110b48] = _0x3497ec;
      if (_0x435226.chunk) {
        var _0x2f2c4c = _0x5ad1e6(_0x435226.chunk.length);
        _0x312996.set(_0x435226.chunk, _0x2f2c4c);
        _0x534e63("viiiiii", _0x2d5de0, [_0xe04075, _0x3497ec.status, _0x435226.loaded, _0x435226.total, _0x2f2c4c, _0x435226.chunk.length]);
      } else {
        _0x534e63("viiiiii", _0x2d5de0, [_0xe04075, _0x3497ec.status, _0x435226.loaded, _0x435226.total, 0, 0]);
      }
    }
    try {
      if (_0x46d030 > 0) {
        var _0x3f11a1 = _0x312996.subarray(_0x9c5346, _0x9c5346 + _0x46d030);
        _0x40ad99.init.body = new Blob([_0x3f11a1]);
      }
      if (_0x40ad99.timeout) {
        _0x9a8db3.timer[_0x110b48] = setTimeout(function () {
          _0x40ad99.isTimedOut = true;
          _0x2c0751.abort();
        }, _0x40ad99.timeout);
      }
      var _0x4ced58 = _0x2c3fe3.fetchWithProgress;
      _0x40ad99.init.onProgress = _0x2e6400;
      if (_0x2c3fe3.companyName && _0x2c3fe3.productName && _0x2c3fe3.cachedFetch) {
        _0x4ced58 = _0x2c3fe3.cachedFetch;
        _0x40ad99.init.companyName = _0x2c3fe3.companyName;
        _0x40ad99.init.productName = _0x2c3fe3.productName;
        _0x40ad99.control = _0x2c3fe3.cacheControl(_0x40ad99.url);
      }
      _0x4ced58(_0x40ad99.url, _0x40ad99.init).then(function (_0x257c78) {
        _0x9a8db3.responses[_0x110b48] = _0x257c78;
        _0x13d51f(_0x257c78, _0x257c78.parsedBody);
      }).catch(function (_0x21653b) {
        var _0x432244 = 2;
        var _0x23bcc2 = 17;
        var _0x3b6e23 = 14;
        if (_0x40ad99.isTimedOut) {
          _0x466aec("Connection timed out.", _0x3b6e23);
        } else if (_0x2c0751.signal.aborted) {
          _0x466aec("Aborted.", _0x23bcc2);
        } else {
          _0x466aec(_0x21653b.message, _0x432244);
        }
      });
    } catch (_0xe8dec3) {
      var _0x2cedf7 = 2;
      _0x466aec(_0xe8dec3.message, _0x2cedf7);
    }
  }
  function _0x4025e3(_0x269209, _0x75fb82) {
    var _0x38851c = _0x9a8db3.requests[_0x269209];
    if (!_0x38851c) {
      return;
    }
    _0x38851c.init.redirect = _0x75fb82 === 0 ? "error" : "follow";
  }
  function _0x5863c3(_0x5d9c11, _0x107c95, _0x5248e6) {
    var _0x1911e0 = _0x9a8db3.requests[_0x5d9c11];
    if (!_0x1911e0) {
      return;
    }
    var _0x43fb49 = _0x2aa540(_0x107c95);
    var _0x1c0c21 = _0x2aa540(_0x5248e6);
    _0x1911e0.init.headers[_0x43fb49] = _0x1c0c21;
  }
  function _0x3410d1(_0x5be6b3, _0x51fc63) {
    var _0x3d794e = _0x9a8db3.requests[_0x5be6b3];
    if (!_0x3d794e) {
      return;
    }
    _0x3d794e.timeout = _0x51fc63;
  }
  function _0x3595c5(_0x460714, _0x452741, _0x2af864) {
    const _0x3e6a7d = _0x2aa540(_0x460714);
    let _0x425f36 = _0x2aa540(_0x452741);
    _0x425f36 = _0x452741 || 300000;
    let _0x2a9a22 = _0x2aa540(_0x2af864);
    if (window._keepAliveInterval) {
      clearInterval(window._keepAliveInterval);
    }
    window._keepAliveInterval = setInterval(() => {
      let _0xdc8cb8 = new Date().toISOString();
      fetch(_0x3e6a7d, {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        credentials: "omit",
        body: JSON.stringify({
          session_id: _0x2a9a22
        })
      }).then(_0x209100 => {
        if (!_0x209100.ok) {
          console.warn("Keep-alive failed:" + _0x209100.status);
        } else {
          console.log("Keep-alive successful");
        }
      }).catch(_0x11438a => {
        console.error("Keep-alive error:", _0x11438a);
      });
    }, _0x425f36);
  }
  function _0x10688b(_0x294000, _0x2b7533, _0x1c7ebf) {
    const _0x460fa5 = _0x2aa540(_0x294000);
    const _0x310718 = parseInt(_0x2aa540(_0x2b7533), 10) || 600000;
    const _0x38e305 = _0x2aa540(_0x1c7ebf);
    if (window._keepAliveInterval) {
      clearInterval(window._keepAliveInterval);
    }
    window._keepAliveInterval = setInterval(() => {
      const _0x318d8c = btoa(JSON.stringify({
        session_id: _0x38e305
      }));
      fetch(_0x460fa5, {
        method: "POST",
        credentials: "omit",
        body: new URLSearchParams({
          payload: _0x318d8c
        })
      }).then(_0x4cdfc2 => {
        if (!_0x4cdfc2.ok) {
          console.warn("Keep-alive v2 failed: " + _0x4cdfc2.status);
        }
      }).catch(_0x2dd850 => {
        console.error("Keep-alive v2 error:", _0x2dd850);
      });
    }, _0x310718);
  }
  function _0x2a795b(_0x53899f, _0x136396, _0x3ca988, _0x3b2cbd) {
    var _0x462b56 = _0x2aa540(_0x53899f);
    var _0x564975 = _0x2aa540(_0x136396);
    var _0x254334 = _0x2aa540(_0x3ca988);
    var _0x5ba37e = _0x2aa540(_0x3b2cbd);
    try {
      firebase.database().ref(_0x462b56).on("child_added", function (_0x1dcd29) {
        window.unityInstance.SendMessage(_0x564975, _0x254334, JSON.stringify(_0x1dcd29.val()));
      });
    } catch (_0x17452e) {
      window.unityInstance.SendMessage(_0x564975, _0x5ba37e, JSON.stringify(_0x17452e, Object.getOwnPropertyNames(_0x17452e)));
    }
  }
  function _0x58e789(_0xfeeacd, _0x211578, _0x5927a1, _0x10bd18) {
    var _0x677e2f = _0x2aa540(_0xfeeacd);
    var _0x25553a = _0x2aa540(_0x211578);
    var _0x186a4b = _0x2aa540(_0x5927a1);
    var _0x26a9f0 = _0x2aa540(_0x10bd18);
    try {
      firebase.database().ref(_0x677e2f).on("child_changed", function (_0xd4de59) {
        window.unityInstance.SendMessage(_0x25553a, _0x186a4b, JSON.stringify(_0xd4de59.val()));
      });
    } catch (_0x2f636a) {
      window.unityInstance.SendMessage(_0x25553a, _0x26a9f0, JSON.stringify(_0x2f636a, Object.getOwnPropertyNames(_0x2f636a)));
    }
  }
  function _0x3c962f(_0x14a4d0, _0x4ed3b1, _0x72dfcf, _0x49b852) {
    var _0x5608fe = _0x2aa540(_0x14a4d0);
    var _0x4e197d = _0x2aa540(_0x4ed3b1);
    var _0x229df9 = _0x2aa540(_0x72dfcf);
    var _0x4762a3 = _0x2aa540(_0x49b852);
    try {
      firebase.database().ref(_0x5608fe).on("child_removed", function (_0x1f685f) {
        window.unityInstance.SendMessage(_0x4e197d, _0x229df9, JSON.stringify(_0x1f685f.val()));
      });
    } catch (_0xa0626) {
      window.unityInstance.SendMessage(_0x4e197d, _0x4762a3, JSON.stringify(_0xa0626, Object.getOwnPropertyNames(_0xa0626)));
    }
  }
  function _0x3a9bd4(_0x2e8425, _0x4bda0d, _0x6e5adc, _0x59e5bf, _0x2c59ab) {
    var _0x1facce = _0x2aa540(_0x2e8425);
    var _0x108533 = _0x2aa540(_0x6e5adc);
    var _0x56aa1b = _0x2aa540(_0x59e5bf);
    var _0x272005 = _0x2aa540(_0x2c59ab);
    try {
      if (typeof firestorelisteners === "undefined") {
        firestorelisteners = {};
      }
      this.firestorelisteners[_0x1facce + "/collection/"] = firebase.firestore().collection(_0x1facce).onSnapshot({
        includeMetadataChanges: _0x4bda0d == 1
      }, function (_0x36fd53) {
        var _0x4cefe3 = {};
        _0x36fd53.forEach(function (_0x52cfeb) {
          _0x4cefe3[_0x52cfeb.id] = _0x52cfeb.data();
        });
        window.unityInstance.SendMessage(_0x108533, _0x56aa1b, JSON.stringify(_0x4cefe3));
      }, function (_0x170fe8) {
        window.unityInstance.SendMessage(_0x108533, _0x272005, JSON.stringify(_0x170fe8, Object.getOwnPropertyNames(_0x170fe8)));
      });
    } catch (_0x4047db) {
      window.unityInstance.SendMessage(_0x108533, _0x272005, JSON.stringify(_0x4047db, Object.getOwnPropertyNames(_0x4047db)));
    }
  }
  function _0x48addd(_0x3869de, _0x243e11, _0x3c8106, _0x351f90, _0x3887e3, _0x3cd7fe) {
    var _0x49f425 = _0x2aa540(_0x3869de);
    var _0x6afe4 = _0x2aa540(_0x243e11);
    var _0x5b0043 = _0x2aa540(_0x351f90);
    var _0x508ea3 = _0x2aa540(_0x3887e3);
    var _0x302b00 = _0x2aa540(_0x3cd7fe);
    try {
      if (typeof firestorelisteners === "undefined") {
        firestorelisteners = {};
      }
      this.firestorelisteners[_0x49f425 + "/" + _0x6afe4] = firebase.firestore().collection(_0x49f425).doc(_0x6afe4).onSnapshot({
        includeMetadataChanges: _0x3c8106 == 1
      }, function (_0x1cbfa5) {
        window.unityInstance.SendMessage(_0x5b0043, _0x508ea3, JSON.stringify(_0x1cbfa5.data()));
      }, function (_0x1ee74f) {
        window.unityInstance.SendMessage(_0x5b0043, _0x302b00, JSON.stringify(_0x1ee74f, Object.getOwnPropertyNames(_0x1ee74f)));
      });
    } catch (_0x20ee7f) {
      window.unityInstance.SendMessage(_0x5b0043, _0x302b00, JSON.stringify(_0x20ee7f, Object.getOwnPropertyNames(_0x20ee7f)));
    }
  }
  function _0x89762(_0x391af0, _0x33fb57, _0x2efcfd, _0x58277d) {
    var _0x393593 = _0x2aa540(_0x391af0);
    var _0x243393 = _0x2aa540(_0x33fb57);
    var _0x1fcfa1 = _0x2aa540(_0x2efcfd);
    var _0x43516f = _0x2aa540(_0x58277d);
    try {
      firebase.database().ref(_0x393593).on("value", function (_0x41027c) {
        window.unityInstance.SendMessage(_0x243393, _0x1fcfa1, JSON.stringify(_0x41027c.val()));
      });
    } catch (_0x1c348e) {
      window.unityInstance.SendMessage(_0x243393, _0x43516f, JSON.stringify(_0x1c348e, Object.getOwnPropertyNames(_0x1c348e)));
    }
  }
  function _0xe18e96(_0x3db03c) {
    var _0x105c56 = _0x2aa540(_0x3db03c);
    firebaseLogEvent(_0x105c56);
  }
  function _0x1b7534(_0xfbff77, _0x43a859) {
    var _0xd72d08 = _0x2aa540(_0xfbff77);
    var _0x4631e9 = JSON.parse(_0x2aa540(_0x43a859));
    firebaseLogEventParameter(_0xd72d08, _0x4631e9);
  }
  function _0x184989(_0x41d31c) {
    document.makeFullscreen(_0x2aa540(_0x41d31c));
  }
  function _0xdb82f6(_0x472dd1, _0x54ed37, _0x5f1de2, _0x15455e, _0x1c796f) {
    var _0x436b61 = _0x2aa540(_0x472dd1);
    var _0x183e36 = _0x2aa540(_0x5f1de2);
    var _0x2711fe = _0x2aa540(_0x15455e);
    var _0x58b6d5 = _0x2aa540(_0x1c796f);
    try {
      firebase.database().ref(_0x436b61).transaction(function (_0x28d184) {
        if (!isNaN(_0x28d184)) {
          return _0x28d184 + _0x54ed37;
        } else {
          return _0x54ed37;
        }
      }).then(function (_0x3a79fb) {
        window.unityInstance.SendMessage(_0x183e36, _0x2711fe, "Success: transaction run in " + _0x436b61);
      });
    } catch (_0x2861e7) {
      window.unityInstance.SendMessage(_0x183e36, _0x58b6d5, JSON.stringify(_0x2861e7, Object.getOwnPropertyNames(_0x2861e7)));
    }
  }
  function _0x177677(_0x13dd5f, _0x288402, _0x2bd74d) {
    var _0x4cab5b = _0x2aa540(_0x13dd5f);
    var _0x29da84 = _0x2aa540(_0x288402);
    var _0x458919 = _0x2aa540(_0x2bd74d);
    firebase.auth().onAuthStateChanged(function (_0x878e03) {
      if (_0x878e03) {
        window.unityInstance.SendMessage(_0x4cab5b, _0x29da84, JSON.stringify(_0x878e03));
      } else {
        window.unityInstance.SendMessage(_0x4cab5b, _0x458919, "User signed out");
      }
    });
  }
  function _0x39dfbb(_0x14d3c8) {
    window.wgUnityInstance = _0x2c3fe3;
    try {
      window[preroll.config.loaderObjectName].log("WGSDK: WeeGoo InGame Ad, pinging.");
      window[preroll.config.loaderObjectName].ping(_0x14d3c8);
    } catch (_0x580f4c) {
      console.log("WGSDK: No production WGSDK resources found, loading development resources.");
      var _0x16a13b = document.createElement("script");
      _0x16a13b.addEventListener("load", function (_0xbc6d1) {
        var _0x54c691 = document.createElement("script");
        _0x54c691.addEventListener("load", function (_0x367400) {
          console.log("WGSDK: Development resources loaded.");
          _0x243a0f(_0x14d3c8, true);
        }.bind(this));
        document.getElementsByTagName("head")[0].appendChild(_0x54c691);
        _0x54c691.src = window.GMSOFT_ADS_INFO.wgLibrary;
      }.bind(this));
      document.getElementsByTagName("head")[0].appendChild(_0x16a13b);
      _0x16a13b.src = window.GMSOFT_ADS_INFO.wgConf;
    }
  }
  function _0x243a0f(_0x1065fc, _0x51deb3) {
    var _0x378225;
    if (_0x51deb3 === true) {
      _0x378225 = _0x1065fc;
    } else {
      _0x378225 = _0x2aa540(_0x1065fc);
    }
    setTimeout(function () {
      _0x39dfbb(_0x378225);
    }, 250);
  }
  function _0x25c570(_0x410594, _0x442c64, _0x4c992e, _0x5753c1, _0x1b0c63) {
    var _0x364b81 = _0x2aa540(_0x410594);
    var _0x2d6b50 = _0x2aa540(_0x442c64);
    var _0x24fbfe = _0x2aa540(_0x4c992e);
    var _0x12e7e5 = _0x2aa540(_0x5753c1);
    var _0x4905a1 = _0x2aa540(_0x1b0c63);
    try {
      firebase.database().ref(_0x364b81).set(JSON.parse(_0x2d6b50)).then(function (_0x596fdd) {
        window.unityInstance.SendMessage(_0x24fbfe, _0x12e7e5, "Success: " + _0x2d6b50 + " was posted to " + _0x364b81);
      });
    } catch (_0x240b14) {
      window.unityInstance.SendMessage(_0x24fbfe, _0x4905a1, JSON.stringify(_0x240b14, Object.getOwnPropertyNames(_0x240b14)));
    }
  }
  function _0x2e811d(_0xa5e883, _0x3c358b, _0x2dbff7, _0x5e5563, _0x8aa134) {
    var _0x33210c = _0x2aa540(_0xa5e883);
    var _0x4d61a8 = _0x2aa540(_0x3c358b);
    var _0x1417c0 = _0x2aa540(_0x2dbff7);
    var _0x3619f5 = _0x2aa540(_0x5e5563);
    var _0x2dfd7c = _0x2aa540(_0x8aa134);
    try {
      firebase.database().ref(_0x33210c).push().set(JSON.parse(_0x4d61a8)).then(function (_0x482fe2) {
        window.unityInstance.SendMessage(_0x1417c0, _0x3619f5, "Success: " + _0x4d61a8 + " was pushed to " + _0x33210c);
      });
    } catch (_0x1ea548) {
      window.unityInstance.SendMessage(_0x1417c0, _0x2dfd7c, JSON.stringify(_0x1ea548, Object.getOwnPropertyNames(_0x1ea548)));
    }
  }
  function _0x1c02e4(_0x329f29) {
    _0x329f29 = _0x30a8cc(_0x329f29);
    window.open(_0x329f29);
  }
  function _0x57d942() {
    try {
      window[preroll.config.loaderObjectName].log("WGSDK: Refetching reward ad.");
      window[preroll.config.loaderObjectName].rewarded.initSlot.call(window[preroll.config.loaderObjectName]);
    } catch (_0x5a7ec8) {
      console.log("No WeeGooAFG implementation found!");
    }
  }
  function _0x4a2e72() {
    try {
      window[preroll.config.loaderObjectName].log("WGSDK: Game controls registered.");
      window[window.preroll.config.loaderObjectName].registerGameControls(_0x2c3fe3);
    } catch (_0x3dcb5d) {
      console.log("WGSDK: Can not register game controls.");
      setTimeout(function () {
        _0x4a2e72();
      }, 250);
    }
  }
  function _0x253888() {
    window.onbeforeunload = function (_0x46a036) {
      if (typeof _0x493362 === "function") {
        _0x493362("CanvasLoading", "OnTabCloseDetected");
      }
    };
  }
  function _0x4eae00() {
    try {
      window[preroll.config.loaderObjectName].log("WGSDK: Reward callbacks registered.");
      window[window.preroll.config.loaderObjectName].registerRewardCallbacks({
        onReady: "OnReadyMethod",
        onSuccess: "OnSuccessMethod",
        onFail: "OnFailMethod"
      });
    } catch (_0x93b804) {
      console.log("WGSDK: Can not register reward ad callbacks.");
      _0x331135();
    }
  }
  function _0x331135() {
    setTimeout(function () {
      _0x4eae00();
    }, 250);
  }
  function _0x4b95a8(_0x2f5541, _0x35c161, _0x3f6570, _0x5a8f31, _0x5a033c, _0x4b13e3, _0x8e9383) {
    var _0x2a1ff0 = _0x2aa540(_0x2f5541);
    var _0x555479 = _0x2aa540(_0x35c161);
    var _0x5f18e1 = _0x2aa540(_0x3f6570);
    var _0x49cd81 = _0x2aa540(_0x5a8f31);
    var _0x1e2dc3 = _0x2aa540(_0x5a033c);
    var _0x56b152 = _0x2aa540(_0x4b13e3);
    var _0x3aa1f2 = _0x2aa540(_0x8e9383);
    try {
      var _0x5a8f31 = {};
      _0x5a8f31[_0x5f18e1] = firebase.firestore.FieldValue.arrayRemove(JSON.parse(_0x49cd81));
      firebase.firestore().collection(_0x2a1ff0).doc(_0x555479).update(_0x5a8f31).then(function () {
        window.unityInstance.SendMessage(_0x1e2dc3, _0x56b152, "Success: element " + _0x49cd81 + " was removed in " + _0x5f18e1);
      }).catch(function (_0x25436f) {
        window.unityInstance.SendMessage(_0x1e2dc3, _0x3aa1f2, JSON.stringify(_0x25436f, Object.getOwnPropertyNames(_0x25436f)));
      });
    } catch (_0x15b244) {
      window.unityInstance.SendMessage(_0x1e2dc3, _0x3aa1f2, JSON.stringify(_0x15b244, Object.getOwnPropertyNames(_0x15b244)));
    }
  }
  function _0x25702b(_0x57147d) {
    var _0x2d7fe2 = window.unityStringify(_0x57147d);
    var _0x57f6f0 = {
      adStarted: function () {
        window.UnitySDK.unlockPointer();
        _0x493362("CrazySDKSingleton", "JSLibCallback_AdStarted");
      },
      adFinished: function () {
        window.UnitySDK.lockPointer();
        _0x493362("CrazySDKSingleton", "JSLibCallback_AdFinished");
      },
      adError: function (_0x5df7f0) {
        _0x493362("CrazySDKSingleton", "JSLibCallback_AdError", JSON.stringify(_0x5df7f0));
      }
    };
    window.CrazyGames.SDK.ad.requestAd(_0x2d7fe2, _0x57f6f0).catch(function (_0x1271c1) {
      window.UnitySDK.logError("Error while requesting ad:", _0x1271c1);
      _0x493362("CrazySDKSingleton", "JSLibCallback_AdError", JSON.stringify({
        code: "unknown",
        message: _0x1271c1.message || "Unknown error"
      }));
    });
  }
  function _0x4185b4(_0x55b88f) {
    var _0x4425ba = JSON.parse(window.unityStringify(_0x55b88f));
    try {
      window.CrazyGames.SDK.banner.requestOverlayBanners(_0x4425ba, function (_0xa2c2d4, _0x4e5bbb, _0x1737a5) {});
    } catch (_0x15a578) {
      window.UnitySDK.logError("Error while requesting banners:", _0x15a578);
    }
  }
  function _0x4adaa5(_0x15b8b7) {
    var _0x526069 = JSON.parse(window.unityStringify(_0x15b8b7));
    var _0x74e3a9 = "";
    try {
      _0x74e3a9 = window.CrazyGames.SDK.game.inviteLink(_0x526069);
    } catch (_0x3375fc) {
      window.UnitySDK.logError("Error while requesting invite url:", _0x3375fc);
    }
    var _0x21236c = _0x40b564(_0x74e3a9) + 1;
    var _0x1d996b = _0x4fa9c0(_0x21236c);
    _0x16748b(_0x74e3a9, _0x1d996b, _0x21236c);
    return _0x1d996b;
  }
  function _0x869b22(_0x40075d) {
    _0x40075d = _0x2aa540(_0x40075d);
    window.GD_OPTIONS = {
      debug: false,
      gameId: _0x40075d,
      onEvent: function (_0x4d9a1c) {
        switch (_0x4d9a1c.name) {
          case "SDK_GAME_START":
            _0x493362("GameDistribution", "ResumeGameCallback");
            break;
          case "SDK_GAME_PAUSE":
            _0x493362("GameDistribution", "PauseGameCallback");
            break;
          case "SDK_REWARDED_WATCH_COMPLETE":
            _0x493362("GameDistribution", "RewardedCompleteCallback");
            break;
          case "SDK_ERROR":
            break;
          default:
            _0x493362("GameDistribution", "EventCallback", _0x4d9a1c.name);
        }
      }
    };
    (function (_0x445d1c, _0x24c292, _0x528d3d) {
      var _0x461e39;
      var _0x14af84 = _0x445d1c.getElementsByTagName(_0x24c292)[0];
      if (_0x445d1c.getElementById(_0x528d3d)) {
        return;
      }
      _0x461e39 = _0x445d1c.createElement(_0x24c292);
      _0x461e39.id = _0x528d3d;
      _0x461e39.src = "//html5.api.gamedistribution.com/main.min.js";
      _0x14af84.parentNode.insertBefore(_0x461e39, _0x14af84);
    })(document, "script", "gamedistribution-jssdk");
  }
  function _0x4772c1() {
    if (typeof gdsdk !== "undefined" && typeof gdsdk.preloadAd !== "undefined") {
      gdsdk.preloadAd(gdsdk.AdType.Rewarded).then(function (_0x433851) {
        _0x493362("GameDistribution", "PreloadRewardedVideoCallback", 1);
      }).catch(function (_0x1f37ca) {
        _0x493362("GameDistribution", "PreloadRewardedVideoCallback", 0);
      });
    }
  }
  function _0x149942(_0x12c28a) {
    _0x12c28a = _0x2aa540(_0x12c28a);
    if (typeof gdsdk !== "undefined" && typeof gdsdk.sendEvent !== "undefined" && typeof _0x12c28a !== "undefined") {
      gdsdk.sendEvent(_0x12c28a).then(function (_0x55f081) {
        console.log("Game event post message sent Succesfully...");
      }).catch(function (_0x10e671) {
        console.log(_0x10e671.message);
      });
    }
  }
  function _0x2bb01c(_0x302a30) {
    if (typeof gdsdk !== "undefined" && typeof gdsdk.showAd !== "undefined") {
      _0x302a30 = _0x2aa540(_0x302a30) || gdsdk.AdType.Interstitial;
      gdsdk.showAd(_0x302a30).then(function (_0xb83ec3) {
        if (_0x302a30 === gdsdk.AdType.Rewarded) {
          _0x493362("GameDistribution", "RewardedVideoSuccessCallback");
        }
      }).catch(function (_0x5a160f) {
        if (_0x302a30 === gdsdk.AdType.Rewarded) {
          _0x493362("GameDistribution", "RewardedVideoFailureCallback");
        }
      });
    }
  }
  function _0x124175(_0x4884d2, _0x4c00c2, _0x530070, _0x3c3177, _0x1a6c2a, _0x12be36) {
    var _0x4d1b7d = _0x2aa540(_0x4884d2);
    var _0x1d5497 = _0x2aa540(_0x4c00c2);
    var _0x2f3132 = _0x2aa540(_0x530070);
    var _0x243941 = _0x2aa540(_0x3c3177);
    var _0x2f4080 = _0x2aa540(_0x1a6c2a);
    var _0x590a2f = _0x2aa540(_0x12be36);
    try {
      firebase.firestore().collection(_0x4d1b7d).doc(_0x1d5497).set(JSON.parse(_0x2f3132)).then(function () {
        window.unityInstance.SendMessage(_0x243941, _0x2f4080, "Success: document " + _0x1d5497 + " was set");
      }).catch(function (_0x39d608) {
        window.unityInstance.SendMessage(_0x243941, _0x590a2f, JSON.stringify(_0x39d608, Object.getOwnPropertyNames(_0x39d608)));
      });
    } catch (_0x3fdb66) {
      window.unityInstance.SendMessage(_0x243941, _0x590a2f, JSON.stringify(_0x3fdb66, Object.getOwnPropertyNames(_0x3fdb66)));
    }
  }
  function _0x2178bb(_0x2759d8) {
    var _0x21d1d8 = JSON.parse(_0x2aa540(_0x2759d8));
    firebaseSetUserProperties(_0x21d1d8);
  }
  function _0x2a59bb() {
    window.CrazyGames.SDK.user.showAccountLinkPrompt().then(function (_0x34f718) {
      _0x493362("CrazySDKSingleton", "JSLibCallback_ShowAccountLinkPrompt", JSON.stringify({
        linkAccountResponseStr: JSON.stringify(_0x34f718)
      }));
    }).catch(function (_0x4828e1) {
      _0x493362("CrazySDKSingleton", "JSLibCallback_ShowAccountLinkPrompt", JSON.stringify({
        errorJson: JSON.stringify(_0x4828e1)
      }));
    });
  }
  function _0x2cdf73() {
    window.CrazyGames.SDK.user.showAuthPrompt().then(function (_0x565cf8) {
      _0x493362("CrazySDKSingleton", "JSLibCallback_ShowAuthPrompt", JSON.stringify({
        userJson: JSON.stringify(_0x565cf8)
      }));
    }).catch(function (_0x181b6d) {
      _0x493362("CrazySDKSingleton", "JSLibCallback_ShowAuthPrompt", JSON.stringify({
        errorJson: JSON.stringify(_0x181b6d)
      }));
    });
  }
  function _0x38b658(_0x3918c5) {
    var _0x3548c8 = JSON.parse(window.unityStringify(_0x3918c5));
    var _0x5a5c16 = "";
    try {
      _0x5a5c16 = window.CrazyGames.SDK.game.showInviteButton(_0x3548c8);
    } catch (_0x10edf1) {
      window.UnitySDK.logError("Error while showing invite button:", _0x10edf1);
    }
    var _0x139bdd = _0x40b564(_0x5a5c16) + 1;
    var _0x404abb = _0x4fa9c0(_0x139bdd);
    _0x16748b(_0x5a5c16, _0x404abb, _0x139bdd);
    return _0x404abb;
  }
  function _0x16bbce() {
    window[preroll.config.loaderObjectName].showRewardAd();
  }
  function _0x15096f(_0x50c864, _0x1dcb6b, _0x14fb92) {
    var _0x147302 = _0x2aa540(_0x50c864);
    var _0x353514 = _0x2aa540(_0x1dcb6b);
    var _0x40014d = _0x2aa540(_0x14fb92);
    try {
      firebase.auth().signInAnonymously().then(function (_0x566c85) {
        window.unityInstance.SendMessage(_0x147302, _0x353514, "Success: signed up for " + _0x566c85);
      }).catch(function (_0x2b6099) {
        window.unityInstance.SendMessage(_0x147302, _0x40014d, JSON.stringify(_0x2b6099, Object.getOwnPropertyNames(_0x2b6099)));
      });
    } catch (_0x235fd7) {
      window.unityInstance.SendMessage(_0x147302, _0x40014d, JSON.stringify(_0x235fd7, Object.getOwnPropertyNames(_0x235fd7)));
    }
  }
  function _0x5cb60a(_0xbbfd8c, _0x43be40, _0x3bd78b, _0x17439f, _0x58d2da) {
    var _0x22c193 = _0x2aa540(_0xbbfd8c);
    var _0x43d55f = _0x2aa540(_0x43be40);
    var _0x5cfb17 = _0x2aa540(_0x3bd78b);
    var _0x3bde57 = _0x2aa540(_0x17439f);
    var _0xdf6ce9 = _0x2aa540(_0x58d2da);
    try {
      firebase.auth().signInWithEmailAndPassword(_0x22c193, _0x43d55f).then(function (_0x1f3450) {
        window.unityInstance.SendMessage(_0x5cfb17, _0x3bde57, "Success: signed in for " + _0x22c193);
      }).catch(function (_0x22c89d) {
        window.unityInstance.SendMessage(_0x5cfb17, _0xdf6ce9, JSON.stringify(_0x22c89d, Object.getOwnPropertyNames(_0x22c89d)));
      });
    } catch (_0x3edc8b) {
      window.unityInstance.SendMessage(_0x5cfb17, _0xdf6ce9, JSON.stringify(_0x3edc8b, Object.getOwnPropertyNames(_0x3edc8b)));
    }
  }
  function _0x2f1d03(_0x3b4caa, _0x12fcdc, _0x111668) {
    var _0x587ef6 = _0x2aa540(_0x3b4caa);
    var _0x5f3c09 = _0x2aa540(_0x12fcdc);
    var _0x2d0c4a = _0x2aa540(_0x111668);
    try {
      var _0x29d09e = new firebase.auth.FacebookAuthProvider();
      firebase.auth().signInWithRedirect(_0x29d09e).then(function (_0x7bac1f) {
        window.unityInstance.SendMessage(_0x587ef6, _0x5f3c09, "Success: signed in with Facebook!");
      }).catch(function (_0x3930b7) {
        window.unityInstance.SendMessage(_0x587ef6, _0x2d0c4a, JSON.stringify(_0x3930b7, Object.getOwnPropertyNames(_0x3930b7)));
      });
    } catch (_0x5b36e7) {
      window.unityInstance.SendMessage(_0x587ef6, _0x2d0c4a, JSON.stringify(_0x5b36e7, Object.getOwnPropertyNames(_0x5b36e7)));
    }
  }
  function _0x5849cc(_0x5460fc, _0x1c483a, _0x567c43) {
    var _0x8351e4 = _0x2aa540(_0x5460fc);
    var _0x320a42 = _0x2aa540(_0x1c483a);
    var _0x18d79c = _0x2aa540(_0x567c43);
    try {
      var _0x362e42 = new firebase.auth.GoogleAuthProvider();
      firebase.auth().signInWithRedirect(_0x362e42).then(function (_0x2c23df) {
        window.unityInstance.SendMessage(_0x8351e4, _0x320a42, "Success: signed in with Google!");
      }).catch(function (_0x1cd8ce) {
        window.unityInstance.SendMessage(_0x8351e4, _0x18d79c, JSON.stringify(_0x1cd8ce, Object.getOwnPropertyNames(_0x1cd8ce)));
      });
    } catch (_0x324c9d) {
      window.unityInstance.SendMessage(_0x8351e4, _0x18d79c, JSON.stringify(_0x324c9d, Object.getOwnPropertyNames(_0x324c9d)));
    }
  }
  function _0x462cbc() {
    if (window._keepAliveInterval) {
      clearInterval(window._keepAliveInterval);
      delete window._keepAliveInterval;
    }
  }
  function _0x5eff43(_0xbf3ffd, _0x477ad3, _0x87b1e3, _0x339cbe) {
    var _0x3b670e = _0x2aa540(_0xbf3ffd);
    var _0x33c227 = _0x2aa540(_0x477ad3);
    var _0x4524c9 = _0x2aa540(_0x87b1e3);
    var _0x16beef = _0x2aa540(_0x339cbe);
    try {
      firebase.database().ref(_0x3b670e).off("child_added");
      window.unityInstance.SendMessage(_0x33c227, _0x4524c9, "Success: listener removed");
    } catch (_0x190bed) {
      window.unityInstance.SendMessage(_0x33c227, _0x16beef, JSON.stringify(_0x190bed, Object.getOwnPropertyNames(_0x190bed)));
    }
  }
  function _0x237e71(_0x4174db, _0x5c36ce, _0x57109b, _0x4f6cd6) {
    var _0x1324ad = _0x2aa540(_0x4174db);
    var _0x32cc82 = _0x2aa540(_0x5c36ce);
    var _0x1a2b55 = _0x2aa540(_0x57109b);
    var _0x530d68 = _0x2aa540(_0x4f6cd6);
    try {
      firebase.database().ref(_0x1324ad).off("child_changed");
      window.unityInstance.SendMessage(_0x32cc82, _0x1a2b55, "Success: listener removed");
    } catch (_0x263a5d) {
      window.unityInstance.SendMessage(_0x32cc82, _0x530d68, JSON.stringify(_0x263a5d, Object.getOwnPropertyNames(_0x263a5d)));
    }
  }
  function _0x3098fb(_0x15bc9b, _0x2be437, _0x14ba3b, _0x166e2e) {
    var _0x3b26ac = _0x2aa540(_0x15bc9b);
    var _0x3f8146 = _0x2aa540(_0x2be437);
    var _0x2bcbb1 = _0x2aa540(_0x14ba3b);
    var _0x37c909 = _0x2aa540(_0x166e2e);
    try {
      firebase.database().ref(_0x3b26ac).off("child_removed");
      window.unityInstance.SendMessage(_0x3f8146, _0x2bcbb1, "Success: listener removed");
    } catch (_0x396c75) {
      window.unityInstance.SendMessage(_0x3f8146, _0x37c909, JSON.stringify(_0x396c75, Object.getOwnPropertyNames(_0x396c75)));
    }
  }
  function _0x4cbe4f(_0x4c70d8, _0x2d153e, _0xf228f1, _0x11ef6f) {
    var _0x45a5be = _0x2aa540(_0x4c70d8);
    var _0x5a5e06 = _0x2aa540(_0x2d153e);
    var _0x10a6bc = _0x2aa540(_0xf228f1);
    var _0x2272a0 = _0x2aa540(_0x11ef6f);
    try {
      if (typeof firestorelisteners === "undefined") {
        firestorelisteners = {};
      }
      this.firestorelisteners[_0x45a5be + "/collection/"]();
      window.unityInstance.SendMessage(_0x5a5e06, _0x10a6bc, "Success: listener was removed");
    } catch (_0x2e9430) {
      window.unityInstance.SendMessage(_0x5a5e06, _0x2272a0, JSON.stringify(_0x2e9430, Object.getOwnPropertyNames(_0x2e9430)));
    }
  }
  function _0x5a9345(_0x1a4ac3, _0x1697a5, _0xbd9a5d, _0x54807e, _0x22ee1f) {
    var _0x4a7e47 = _0x2aa540(_0x1a4ac3);
    var _0x3aca2d = _0x2aa540(_0x1697a5);
    var _0x1859e3 = _0x2aa540(_0xbd9a5d);
    var _0x575f2b = _0x2aa540(_0x54807e);
    var _0x205c8a = _0x2aa540(_0x22ee1f);
    try {
      if (typeof firestorelisteners === "undefined") {
        firestorelisteners = {};
      }
      this.firestorelisteners[_0x4a7e47 + "/" + _0x3aca2d]();
      window.unityInstance.SendMessage(_0x1859e3, _0x575f2b, "Success: listener was removed");
    } catch (_0x31e90f) {
      window.unityInstance.SendMessage(_0x1859e3, _0x205c8a, JSON.stringify(_0x31e90f, Object.getOwnPropertyNames(_0x31e90f)));
    }
  }
  function _0x3b3a08(_0x22c4e2, _0x1514fd, _0x4e8b18, _0x1cae41) {
    var _0x469dd8 = _0x2aa540(_0x22c4e2);
    var _0x8a1c73 = _0x2aa540(_0x1514fd);
    var _0x51c349 = _0x2aa540(_0x4e8b18);
    var _0x55c4c5 = _0x2aa540(_0x1cae41);
    try {
      firebase.database().ref(_0x469dd8).off("value");
      window.unityInstance.SendMessage(_0x8a1c73, _0x51c349, "Success: listener removed");
    } catch (_0x57ea15) {
      window.unityInstance.SendMessage(_0x8a1c73, _0x55c4c5, JSON.stringify(_0x57ea15, Object.getOwnPropertyNames(_0x57ea15)));
    }
  }
  function _0x238da3() {
    try {
      window.CrazyGames.SDK.data.syncUnityGameData();
    } catch (_0x2dae96) {
      window.UnitySDK.logError("Error while calling syncUnityGameData:", _0x2dae96);
    }
  }
  function _0x56ffd0(_0x580901, _0x1f4d41, _0xa88b35, _0x92ff2f) {
    var _0xc15adc = _0x2aa540(_0x580901);
    var _0x42b138 = _0x2aa540(_0x1f4d41);
    var _0x2b4fda = _0x2aa540(_0xa88b35);
    var _0x106b9b = _0x2aa540(_0x92ff2f);
    try {
      firebase.database().ref(_0xc15adc).transaction(function (_0x5023c9) {
        if (typeof _0x5023c9 === "boolean") {
          return !_0x5023c9;
        } else {
          return true;
        }
      }).then(function (_0x33fbd4) {
        window.unityInstance.SendMessage(_0x42b138, _0x2b4fda, "Success: transaction run in " + _0xc15adc);
      });
    } catch (_0xf0093b) {
      window.unityInstance.SendMessage(_0x42b138, _0x106b9b, JSON.stringify(_0xf0093b, Object.getOwnPropertyNames(_0xf0093b)));
    }
  }
  function _0xe11b9b(_0x535518, _0x198fa6, _0x46bc2d, _0x5bdaf3, _0x5a6ac6, _0x3ef375) {
    var _0x5a2430 = _0x2aa540(_0x535518);
    var _0x3aab43 = _0x2aa540(_0x198fa6);
    var _0x7bbad8 = _0x2aa540(_0x46bc2d);
    var _0x523d02 = _0x2aa540(_0x5bdaf3);
    var _0x1d7290 = _0x2aa540(_0x5a6ac6);
    var _0x25b191 = _0x2aa540(_0x3ef375);
    try {
      firebase.firestore().collection(_0x5a2430).doc(_0x3aab43).update(JSON.parse(_0x7bbad8)).then(function () {
        window.unityInstance.SendMessage(_0x523d02, _0x1d7290, "Success: document " + _0x3aab43 + " was updated");
      }).catch(function (_0x3778d9) {
        window.unityInstance.SendMessage(_0x523d02, _0x25b191, JSON.stringify(_0x3778d9, Object.getOwnPropertyNames(_0x3778d9)));
      });
    } catch (_0x5db91f) {
      window.unityInstance.SendMessage(_0x523d02, _0x25b191, JSON.stringify(_0x5db91f, Object.getOwnPropertyNames(_0x5db91f)));
    }
  }
  function _0x584ba5(_0x2e5944, _0x323515, _0x953d47, _0x383679, _0x38c564) {
    var _0x5293c4 = _0x2aa540(_0x2e5944);
    var _0x3ef5e6 = _0x2aa540(_0x323515);
    var _0x2560cc = _0x2aa540(_0x953d47);
    var _0x3b9abd = _0x2aa540(_0x383679);
    var _0x3900bd = _0x2aa540(_0x38c564);
    try {
      firebase.database().ref(_0x5293c4).update(JSON.parse(_0x3ef5e6)).then(function (_0x91fbf4) {
        window.unityInstance.SendMessage(_0x2560cc, _0x3b9abd, "Success: " + _0x3ef5e6 + " was updated in " + _0x5293c4);
      });
    } catch (_0xa7ac45) {
      window.unityInstance.SendMessage(_0x2560cc, _0x3900bd, JSON.stringify(_0xa7ac45, Object.getOwnPropertyNames(_0xa7ac45)));
    }
  }
  function _0x17193f(_0x3aa2d5, _0x2ae361, _0x553677, _0x2a0e12, _0x4afbea) {
    var _0x59950f = _0x2aa540(_0x3aa2d5);
    var _0x35ec71 = _0x2aa540(_0x2ae361);
    var _0x234d89 = _0x2aa540(_0x553677);
    var _0x2cb6c5 = _0x2aa540(_0x2a0e12);
    var _0x80d516 = _0x2aa540(_0x4afbea);
    try {
      firebase.storage().ref(_0x59950f).put(_0x191931(_0x35ec71)).then(function (_0x5098bb) {
        window.unityInstance.SendMessage(_0x234d89, _0x2cb6c5, "Success: data was posted to " + _0x59950f);
      });
    } catch (_0x55f586) {
      window.unityInstance.SendMessage(_0x234d89, _0x80d516, JSON.stringify(_0x55f586, Object.getOwnPropertyNames(_0x55f586)));
    }
    function _0x191931(_0x383621) {
      var _0x45ae1e = window.atob(_0x383621);
      var _0x28a881 = _0x45ae1e.length;
      var _0x1465a2 = new Uint8Array(_0x28a881);
      for (var _0x5598d4 = 0; _0x5598d4 < _0x28a881; _0x5598d4++) {
        _0x1465a2[_0x5598d4] = _0x45ae1e.charCodeAt(_0x5598d4);
      }
      return _0x1465a2.buffer;
    }
  }
  function _0x23e137(_0x37b5bb, _0x262488) {
    _0x37b5bb = _0x2aa540(_0x37b5bb);
    _0x262488 = _0x2aa540(_0x262488);
    let _0x8ba7ee = document.createElement("input");
    _0x8ba7ee.type = "file";
    _0x8ba7ee.accept = ".mp3";
    _0x8ba7ee.style.display = "none";
    _0x8ba7ee.onchange = () => {
      _0x493362("SongUploader", "LoadingPanel", "open");
      let _0x5d51c0 = _0x8ba7ee.files[0];
      if (!_0x5d51c0) {
        console.log("empty_file");
        _0x493362("SongUploader", "OnFileUploadError", "empty_file");
        return;
      }
      if (_0x5d51c0.type !== "audio/mpeg") {
        console.log("invalid_file_type");
        _0x493362("SongUploader", "OnFileUploadError", "invalid_file_type");
        return;
      }
      if (_0x5d51c0.size > 5242880) {
        console.log("max_exceed_file_size");
        _0x493362("SongUploader", "OnFileUploadError", "max_exceed_file_size");
        return;
      }
      let _0x426bc7 = new FormData();
      _0x426bc7.append("file", _0x5d51c0);
      _0x426bc7.append("payload", _0x37b5bb);
      fetch(_0x262488, {
        method: "POST",
        body: _0x426bc7
      }).then(_0x32c1d7 => _0x32c1d7.text()).then(_0xf0246c => {
        _0x493362("SongUploader", "OnFileUploaded", _0xf0246c);
        console.log("AFTER UPLOAD");
        _0x493362("SongUploader", "LoadingPanel", "close");
      }).catch(_0x588f09 => {
        console.error("Upload error", _0x588f09);
        _0x493362("SongUploader", "OnFileUploadError", "upload_file_error");
        console.log("AFTER UPLOAD ERR");
        _0x493362("SongUploader", "LoadingPanel", "close");
      });
    };
    document.body.appendChild(_0x8ba7ee);
    _0x8ba7ee.click();
    setTimeout(() => _0x8ba7ee.remove(), 1000);
  }
  var _0x2c45e4 = [];
  function _0x1bcd4a(_0x43a753, _0x1f9b0a, _0x30da9e, _0x1de7b1, _0x25404f, _0x3ce112, _0x323825, _0x3d3d4d, _0x2a19b1, _0x96b1f4, _0x3e71a2, _0x473121) {
    var _0x2c82b8 = document.getElementById(_0x2aa540(_0x43a753));
    var _0x3ab0e8 = _0x2c82b8.getElementsByTagName("canvas")[0];
    if (!_0x2c82b8 && _0x3ab0e8) {
      _0x2c82b8 = _0x3ab0e8.parentNode;
    }
    if (_0x3ab0e8) {
      var _0x56d9e2 = _0x2c82b8.offsetWidth / _0x3ab0e8.width;
      var _0x3e7d30 = _0x2c82b8.offsetHeight / _0x3ab0e8.height;
      if (_0x56d9e2 && _0x3e7d30) {
        _0x1f9b0a *= _0x56d9e2;
        _0x1de7b1 *= _0x56d9e2;
        _0x30da9e *= _0x3e7d30;
        _0x25404f *= _0x3e7d30;
      }
    }
    var _0x57e18c = document.createElement(_0x2a19b1 ? "textarea" : "input");
    _0x57e18c.style.position = "absolute";
    if (_0x473121) {
      _0x57e18c.style.bottom = "1vh";
      _0x57e18c.style.left = "5vw";
      _0x57e18c.style.width = "90vw";
      _0x57e18c.style.height = (_0x2a19b1 ? 18 : 10) + "vh";
      _0x57e18c.style.fontSize = "5vh";
      _0x57e18c.style.borderWidth = "5px";
      _0x57e18c.style.borderColor = "#000000";
    } else {
      _0x57e18c.style.top = _0x30da9e + "px";
      _0x57e18c.style.left = _0x1f9b0a + "px";
      _0x57e18c.style.width = _0x1de7b1 + "px";
      _0x57e18c.style.height = _0x25404f + "px";
      _0x57e18c.style.fontSize = _0x3ce112 + "px";
    }
    _0x57e18c.style.outlineWidth = "1px";
    _0x57e18c.style.opacity = _0x3e71a2 ? 0 : 1;
    _0x57e18c.style.resize = "none";
    _0x57e18c.style.padding = "0px 1px";
    _0x57e18c.style.cursor = "default";
    _0x57e18c.style.touchAction = "none";
    _0x57e18c.spellcheck = false;
    _0x57e18c.value = _0x2aa540(_0x323825);
    _0x57e18c.placeholder = _0x2aa540(_0x3d3d4d);
    _0x57e18c.style.outlineColor = "black";
    if (_0x96b1f4) {
      _0x57e18c.type = "password";
    }
    if (_0x473121) {
      document.body.appendChild(_0x57e18c);
    } else {
      _0x2c82b8.appendChild(_0x57e18c);
    }
    return _0x2c45e4.push(_0x57e18c) - 1;
  }
  function _0x25e859(_0x2fa417) {
    var _0x35ffbd = _0x2c45e4[_0x2fa417];
    _0x35ffbd.parentNode.removeChild(_0x35ffbd);
    _0x2c45e4[_0x2fa417] = null;
  }
  function _0x1829a9(_0x4fc3bd, _0x2ce519) {
    var _0x42af39 = _0x2c45e4[_0x4fc3bd];
    _0x42af39.addEventListener("keydown", function (_0x9b21f8) {
      if (_0x9b21f8.which && _0x9b21f8.which === 13 || _0x9b21f8.keyCode && _0x9b21f8.keyCode === 13) {
        if (_0x2ce519) {
          _0x9b21f8.preventDefault();
          _0x42af39.blur();
        }
      }
    });
  }
  function _0x24b7dc(_0x46e528) {
    var _0x3195d = _0x2c45e4[_0x46e528];
    _0x3195d.focus();
  }
  function _0x27fd42(_0x4762b4) {
    var _0x142226 = _0x2c45e4[_0x4762b4];
    _0x142226.blur();
  }
  function _0x255f11() {
    if (typeof _0x534e63 === "undefined") {
      Runtime = {
        dynCall: undefined
      };
    } else if (typeof Runtime === "undefined") {
      Runtime = {
        dynCall: _0x534e63
      };
    }
  }
  function _0x35077d(_0x13bd0a) {
    return _0x2c45e4[_0x13bd0a] === document.activeElement;
  }
  function _0x1745ea(_0x5accaa, _0x1cf1e5) {
    var _0x3629db = _0x2c45e4[_0x5accaa];
    _0x3629db.maxLength = _0x1cf1e5;
  }
  function _0x1866d(_0x3efb7a, _0x10e0f1) {
    document.body.addEventListener("focusout", function () {
      document.body.removeEventListener("focusout", arguments.callee);
      Runtime.dynCall("vi", _0x10e0f1, [_0x3efb7a]);
    });
  }
  function _0x137db1(_0x5cb1da) {
    var _0x2fc6de = _0x2c45e4.push(null) - 1;
    document.body.addEventListener("touchend", function () {
      document.body.removeEventListener("touchend", arguments.callee);
      Runtime.dynCall("vi", _0x5cb1da, [_0x2fc6de]);
    });
    return _0x2fc6de;
  }
  function _0x1f3166(_0x1e7e25, _0x2fef29) {
    var _0x15d41e = _0x2c45e4[_0x1e7e25];
    _0x15d41e.onblur = function () {
      if (Runtime.dynCall) {
        Runtime.dynCall("vi", _0x2fef29, [_0x1e7e25]);
      } else {
        (function (_0x5c7a7e) {
          _0x58d73a.apply(null, [_0x2fef29, _0x5c7a7e]);
        })(_0x1e7e25);
      }
    };
  }
  function _0x597436(_0x2b2d68, _0x4adb5f) {
    var _0x40e707 = _0x2c45e4[_0x2b2d68];
    _0x40e707.onchange = function () {
      var _0x333d8c = _0x40e707.value;
      var _0x2ebf75 = _0x40b564(_0x333d8c) + 1;
      var _0x4e1816 = _0x4fa9c0(_0x2ebf75);
      _0x16748b(_0x333d8c, _0x4e1816, _0x2ebf75);
      if (Runtime.dynCall) {
        Runtime.dynCall("vii", _0x4adb5f, [_0x2b2d68, _0x4e1816]);
      } else {
        (function (_0x20b4ac, _0x539958) {
          _0x3a13cb.apply(null, [_0x4adb5f, _0x20b4ac, _0x539958]);
        })(_0x2b2d68, _0x4e1816);
      }
    };
  }
  function _0x42aef6(_0x1c8d3b, _0x3313ff) {
    var _0x5eee4e = _0x2c45e4[_0x1c8d3b];
    _0x5eee4e.onfocus = function () {
      if (Runtime.dynCall) {
        Runtime.dynCall("vi", _0x3313ff, [_0x1c8d3b]);
      } else {
        (function (_0x5a2904) {
          _0x58d73a.apply(null, [_0x3313ff, _0x5a2904]);
        })(_0x1c8d3b);
      }
    };
  }
  function _0x371a95(_0x3e5109, _0x2f3f82) {
    var _0x3e92cb = _0x2c45e4[_0x3e5109];
    var _0x4f711e = function (_0x5680c0, _0xa0971b) {
      if (_0xa0971b instanceof KeyboardEvent) {
        var _0x20d71f = _0x40b564(_0xa0971b.key) + 1;
        var _0x4853f1 = _0x4fa9c0(_0x20d71f);
        _0x16748b(_0xa0971b.key, _0x4853f1, _0x20d71f);
        var _0x58328f = _0xa0971b.code;
        var _0x15cd74 = _0xa0971b.shiftKey ? 1 : 0;
        var _0x28e82f = _0xa0971b.ctrlKey ? 1 : 0;
        var _0xeb4337 = _0xa0971b.altKey ? 1 : 0;
        if (Runtime.dynCall) {
          Runtime.dynCall("viiiiiii", _0x2f3f82, [_0x3e5109, _0x5680c0, _0x4853f1, _0x58328f, _0x15cd74, _0x28e82f, _0xeb4337]);
        } else {
          (function (_0x39d4d6, _0x175729, _0x39a96c, _0x13f1de, _0x240761, _0x3a8d0c, _0x44df45) {
            _0x4d1193.apply(null, [_0x2f3f82, _0x39d4d6, _0x175729, _0x39a96c, _0x13f1de, _0x240761, _0x3a8d0c, _0x44df45]);
          })(_0x3e5109, _0x5680c0, _0x4853f1, _0x58328f, _0x15cd74, _0x28e82f, _0xeb4337);
        }
      }
    };
    _0x3e92cb.addEventListener("keydown", function (_0x1d8232) {
      _0x4f711e(1, _0x1d8232);
    });
    _0x3e92cb.addEventListener("keyup", function (_0x3b9c0d) {
      _0x4f711e(2, _0x3b9c0d);
    });
  }
  function _0x1dba90(_0x34095d, _0x434da8) {
    var _0xf61404 = _0x2c45e4[_0x34095d];
    _0xf61404.oninput = function () {
      var _0xc96b12 = _0xf61404.value;
      var _0x3ef011 = _0x40b564(_0xc96b12) + 1;
      var _0x40bc3d = _0x4fa9c0(_0x3ef011);
      _0x16748b(_0xc96b12, _0x40bc3d, _0x3ef011);
      if (Runtime.dynCall) {
        Runtime.dynCall("vii", _0x434da8, [_0x34095d, _0x40bc3d]);
      } else {
        (function (_0x4e60bf, _0x423911) {
          _0x3a13cb.apply(null, [_0x434da8, _0x4e60bf, _0x423911]);
        })(_0x34095d, _0x40bc3d);
      }
    };
  }
  function _0x44bf1a(_0x442c74) {
    var _0x11b0c8 = _0x2c45e4[_0x442c74];
    if (_0x11b0c8.selectionDirection == "backward") {
      return -1;
    } else {
      return 1;
    }
  }
  function _0x54d2ff(_0x30a0e1) {
    var _0x11f9c7 = _0x2c45e4[_0x30a0e1];
    return _0x11f9c7.selectionEnd;
  }
  function _0x2f6494(_0x29086f) {
    var _0xc4327c = _0x2c45e4[_0x29086f];
    return _0xc4327c.selectionStart;
  }
  function _0x497594(_0x5d4660, _0x2ed952, _0x373c7f) {
    var _0x32cfa2 = _0x2c45e4[_0x5d4660];
    _0x32cfa2.setSelectionRange(_0x2ed952, _0x373c7f);
  }
  function _0x8bbfc5(_0x29b835, _0xca858) {
    var _0x2c24e2 = _0x2c45e4[_0x29b835];
    _0x2c24e2.addEventListener("keydown", function (_0x157901) {
      if (_0x157901.which && _0x157901.which === 9 || _0x157901.keyCode && _0x157901.keyCode === 9) {
        _0x157901.preventDefault();
        if (_0x2c24e2.enableTabText) {
          var _0x4e7cbb = _0x2c24e2.value;
          var _0x74a638 = _0x2c24e2.selectionStart;
          var _0x2ad337 = _0x2c24e2.selectionEnd;
          _0x2c24e2.value = _0x4e7cbb.substr(0, _0x74a638) + "\t" + _0x4e7cbb.substr(_0x2ad337, _0x4e7cbb.length);
          _0x2c24e2.setSelectionRange(_0x74a638 + 1, _0x74a638 + 1);
          _0x2c24e2.oninput();
        } else if (Runtime.dynCall) {
          Runtime.dynCall("vii", _0xca858, [_0x29b835, _0x157901.shiftKey ? -1 : 1]);
        } else {
          (function (_0x26d825, _0x1261a8) {
            _0x3a13cb.apply(null, [_0xca858, _0x26d825, _0x1261a8]);
          })(_0x29b835, _0x157901.shiftKey ? -1 : 1);
        }
      }
    });
  }
  function _0x349867(_0x5f30fd, _0x166c55) {
    var _0x199023 = _0x2c45e4[_0x5f30fd];
    _0x199023.value = _0x2aa540(_0x166c55);
  }
  function _0xbf1f1d() {
    var _0x5cc109 = document.getElementsByTagName("canvas");
    var _0x31090c = "";
    if (_0x5cc109.length >= 1) {
      _0x31090c = _0x5cc109[0].parentNode.id;
      if (_0x31090c == "") {
        _0x31090c = _0x5cc109[0].parentNode.id = "WebGLWindow:Canvas:ParentNode";
      }
    }
    var _0x20d126 = _0x40b564(_0x31090c) + 1;
    var _0x38cd97 = _0x4fa9c0(_0x20d126);
    _0x16748b(_0x31090c, _0x38cd97, _0x20d126);
    return _0x38cd97;
  }
  function _0x321ffd() {
    if (typeof _0x534e63 === "undefined") {
      Runtime = {
        dynCall: undefined
      };
    } else if (typeof Runtime === "undefined") {
      Runtime = {
        dynCall: _0x534e63
      };
    }
  }
  function _0x32cf53() {
    document.makeFullscreen = function (_0x1d8f33, _0x1b6927) {
      var _0x5d5887 = function () {
        var _0x21aef5 = window.document;
        var _0x5760ef = _0x21aef5.fullscreenElement || _0x21aef5.mozFullScreenElement || _0x21aef5.webkitFullscreenElement || _0x21aef5.msFullscreenElement;
        return _0x5760ef;
      };
      var _0x460a10 = function (_0x52211b) {
        document.addEventListener("fullscreenchange", _0x52211b, false);
        document.addEventListener("webkitfullscreenchange", _0x52211b, false);
        document.addEventListener("mozfullscreenchange", _0x52211b, false);
        document.addEventListener("MSFullscreenChange", _0x52211b, false);
      };
      var _0x56e643 = function (_0x5b0c52) {
        document.removeEventListener("fullscreenchange", _0x5b0c52, false);
        document.removeEventListener("webkitfullscreenchange", _0x5b0c52, false);
        document.removeEventListener("mozfullscreenchange", _0x5b0c52, false);
        document.removeEventListener("MSFullscreenChange", _0x5b0c52, false);
      };
      var _0x43397a = document.createElement("div");
      document.body.appendChild(_0x43397a);
      var _0x3b9b8c = document.getElementsByTagName("canvas")[0];
      var _0x426e13 = {
        width: _0x3b9b8c.style.width,
        height: _0x3b9b8c.style.height
      };
      var _0x3fb150 = document.getElementById(_0x1d8f33);
      var _0x290c35 = _0x3fb150.tagName.toLowerCase() == "body";
      if (_0x290c35) {
        _0x43397a.id = _0x3fb150.id;
        _0x3fb150.id = "";
        _0x3fb150 = _0x3b9b8c;
      }
      var _0x1b8158 = _0x3fb150.parentNode;
      var _0x585442 = window.getComputedStyle(_0x3fb150);
      var _0x223b76 = parseInt(_0x585442.width);
      var _0x5bb41f = parseInt(_0x585442.height);
      var _0x18c63f = Array.from(_0x1b8158.children).findIndex(function (_0x49bc30) {
        return _0x49bc30 == _0x3fb150;
      });
      _0x43397a.appendChild(_0x3fb150);
      var _0x437214 = function () {
        if (_0x5d5887()) {
          if (_0x1b6927) {
            var _0x1622df = Math.min(window.screen.width / _0x223b76, window.screen.height / _0x5bb41f);
            var _0x1ebf71 = Math.floor(_0x223b76 * _0x1622df);
            var _0x74a148 = Math.floor(_0x5bb41f * _0x1622df);
            _0x3fb150.style.width = _0x1ebf71 + "px";
            _0x3fb150.style.height = _0x74a148 + "px";
          } else {
            _0x3fb150.style.width = window.screen.width + "px";
            _0x3fb150.style.height = window.screen.height + "px";
          }
          _0x3b9b8c.style.width = "100%";
          _0x3b9b8c.style.height = "100%";
        } else {
          _0x3fb150.style.width = _0x223b76 + "px";
          _0x3fb150.style.height = _0x5bb41f + "px";
          _0x1b8158.insertBefore(_0x3fb150, Array.from(_0x1b8158.children)[_0x18c63f]);
          if (_0x290c35) {
            _0x1b8158.id = _0x43397a.id;
          }
          _0x43397a.parentNode.removeChild(_0x43397a);
          _0x3b9b8c.style.width = _0x426e13.width;
          _0x3b9b8c.style.height = _0x426e13.height;
          _0x56e643(_0x437214);
        }
      };
      _0x460a10(_0x437214);
      if (_0x43397a.mozRequestFullScreen) {
        _0x43397a.mozRequestFullScreen();
      } else if (_0x43397a.webkitRequestFullScreen) {
        _0x43397a.webkitRequestFullScreen();
      } else if (_0x43397a.msRequestFullscreen) {
        _0x43397a.msRequestFullscreen();
      } else if (_0x43397a.requestFullscreen) {
        _0x43397a.requestFullscreen();
      }
    };
  }
  function _0x4edf15(_0xa552cd) {
    this.blurListener = function () {
      if (Runtime.dynCall) {
        Runtime.dynCall("v", _0xa552cd, []);
      } else {
        (function () {
          _0x21100c.call(null, _0xa552cd);
        })();
      }
    };
    window.addEventListener("blur", this.blurListener);
  }
  function _0x146a57(_0x29dc75) {
    this.focusListener = function () {
      if (Runtime.dynCall) {
        Runtime.dynCall("v", _0x29dc75, []);
      } else {
        (function () {
          _0x21100c.call(null, _0x29dc75);
        })();
      }
    };
    window.addEventListener("focus", this.focusListener);
  }
  function _0x2a1753(_0x12136f) {
    this.resizeListener = function () {
      if (Runtime.dynCall) {
        Runtime.dynCall("v", _0x12136f, []);
      } else {
        (function () {
          _0x21100c.call(null, _0x12136f);
        })();
      }
    };
    window.addEventListener("resize", this.resizeListener);
  }
  function _0xe85619() {
    if (focusListener) {
      window.removeEventListener("focus", this.focusListener);
      this.focusListener = null;
    }
    if (blurListener) {
      window.removeEventListener("blur", this.blurListener);
      this.blurListener = null;
    }
    if (resizeListener) {
      window.removeEventListener("resize", this.resizeListener);
      this.resizeListener = null;
    }
  }
  var _0x544c49 = {
    requestInstances: {},
    nextRequestId: 1,
    loglevel: 2,
    SendTextToCSharpSide: function (_0x4b4ef2, _0x17a405, _0x2ec91f) {
      const _0x5de8be = new TextEncoder();
      const _0x589b1f = _0x5de8be.encode(_0x2ec91f);
      const _0x1485e7 = function (_0x57ae6b, _0x126e94) {
        return _0x2439a0.apply(null, [_0x544c49.onallocbuffer, _0x57ae6b, _0x126e94]);
      }(_0x4b4ef2, _0x589b1f.length);
      _0x312996.set(_0x589b1f, _0x1485e7);
      (function (_0x1672d2, _0x426c5f, _0x11e63f) {
        _0x5c7aa8.apply(null, [_0x17a405, _0x1672d2, _0x426c5f, _0x11e63f]);
      })(_0x4b4ef2, _0x1485e7, _0x589b1f.length);
    },
    GetResponseHeaders: function (_0x350b51, _0x131186) {
      if (_0x544c49.loglevel <= 1) {
        console.log("GetResponseHeaders(" + _0x350b51 + ")");
      }
      var _0x2affde = "";
      if (document && document.cookie) {
        var _0x3daba6 = document.cookie.split(";");
        for (var _0x20d271 = 0; _0x20d271 < _0x3daba6.length; ++_0x20d271) {
          const _0x4fce84 = _0x3daba6[_0x20d271].trim();
          if (_0x4fce84.length > 0) {
            _0x2affde += "Set-Cookie:" + _0x4fce84 + "\n";
          }
        }
      }
      const _0x16fcf2 = _0x544c49.requestInstances[_0x350b51].getAllResponseHeaders().trim().split(/[\r\n]+/);
      _0x16fcf2.forEach(_0x4a71f8 => {
        const _0x498755 = _0x4a71f8.split(": ");
        const _0x3ec46f = _0x498755.shift();
        const _0x3a0089 = _0x498755.join(": ");
        if (_0x3ec46f !== "content-length") {
          _0x2affde += _0x3ec46f + ":" + _0x3a0089 + "\n";
        }
      });
      _0x544c49.SendTextToCSharpSide(_0x350b51, _0x131186, _0x2affde);
    }
  };
  function _0x4c423d(_0x2c5ec7) {
    if (_0x544c49.loglevel <= 1) {
      console.log("XHR_Abort(" + _0x2c5ec7 + ")");
    }
    _0x544c49.requestInstances[_0x2c5ec7].abort();
  }
  function _0x2cba3f(_0x3191e2, _0x11ef95, _0xca964f, _0x30389b, _0x23a4da) {
    var _0x57d5cf = new URL(_0x2aa540(_0x11ef95));
    var _0x3fe1c4 = _0x2aa540(_0x3191e2);
    if (_0x544c49.loglevel <= 1) {
      console.log("XHR_Create (" + _0x544c49.nextRequestId + ", " + _0x3fe1c4 + ", " + _0x57d5cf.toString() + ", " + _0x23a4da + ")");
    }
    var _0x1df80f = new XMLHttpRequest();
    if (_0xca964f && _0x30389b) {
      var _0x204509 = _0x2aa540(_0xca964f);
      var _0x25e678 = _0x2aa540(_0x30389b);
      _0x1df80f.withCredentials = true;
      _0x1df80f.open(_0x3fe1c4, _0x57d5cf.toString(), true, _0x204509, _0x25e678);
    } else {
      _0x1df80f.withCredentials = _0x23a4da;
      _0x1df80f.open(_0x3fe1c4, _0x57d5cf.toString(), true);
    }
    _0x1df80f.responseType = "arraybuffer";
    _0x544c49.requestInstances[_0x544c49.nextRequestId] = _0x1df80f;
    return _0x544c49.nextRequestId++;
  }
  function _0x26a823(_0x31b960) {
    if (_0x544c49.loglevel <= 1) {
      console.log("XHR_Release(" + _0x31b960 + ")");
    }
    delete _0x544c49.requestInstances[_0x31b960];
  }
  function _0x3191f5(_0x1852a8, _0x26243f, _0x2c4965) {
    if (_0x544c49.loglevel <= 1) {
      console.log("XHR_Send(" + _0x1852a8 + ", " + _0x26243f + ", " + _0x2c4965 + ")");
    }
    var _0x2fd1fe = _0x544c49.requestInstances[_0x1852a8];
    try {
      if (_0x2c4965 > 0) {
        _0x2fd1fe.send(_0x312996.subarray(_0x26243f, _0x26243f + _0x2c4965));
      } else {
        _0x2fd1fe.send();
      }
    } catch (_0x410f47) {
      if (_0x544c49.loglevel <= 4) {
        console.error("XHR_Send(" + _0x1852a8 + "): " + _0x410f47.name + " : " + _0x410f47.message);
      }
    }
  }
  function _0x5cd595(_0x1f266a) {
    _0x544c49.loglevel = _0x1f266a;
  }
  function _0x3a7333(_0x3d7da0, _0x568b0b, _0x59be13) {
    if (_0x544c49.loglevel <= 1) {
      console.log("XHR_SetProgressHandler(" + _0x3d7da0 + ")");
    }
    var _0x1a77df = _0x544c49.requestInstances[_0x3d7da0];
    if (_0x1a77df) {
      if (_0x568b0b) {
        _0x1a77df.onprogress = function _0x1deb79(_0x5d4a70) {
          if (_0x544c49.loglevel <= 1) {
            console.log("XHR_SetProgressHandler download(" + _0x3d7da0 + ", " + _0x5d4a70.loaded + ", " + _0x5d4a70.total + ")");
          }
          if (_0x5d4a70.lengthComputable) {
            (function (_0x4f50be, _0x2ce737, _0x5be267) {
              _0x5c7aa8.apply(null, [_0x568b0b, _0x4f50be, _0x2ce737, _0x5be267]);
            })(_0x3d7da0, _0x5d4a70.loaded, _0x5d4a70.total);
          }
        };
      }
      if (_0x59be13) {
        _0x1a77df.upload.addEventListener("progress", function _0x338ef1(_0x3b5224) {
          if (_0x544c49.loglevel <= 1) {
            console.log("XHR_SetProgressHandler upload(" + _0x3d7da0 + ", " + _0x3b5224.loaded + ", " + _0x3b5224.total + ")");
          }
          if (_0x3b5224.lengthComputable) {
            (function (_0x4d3d07, _0x5f03dc, _0x597d8f) {
              _0x5c7aa8.apply(null, [_0x59be13, _0x4d3d07, _0x5f03dc, _0x597d8f]);
            })(_0x3d7da0, _0x3b5224.loaded, _0x3b5224.total);
          }
        }, true);
      }
    }
  }
  function _0x2d706e(_0x1bd353, _0x260e8b, _0x1b0519) {
    var _0x23de2e = _0x2aa540(_0x260e8b);
    var _0x3f85cf = _0x2aa540(_0x1b0519);
    if (_0x544c49.loglevel <= 1) {
      console.log("XHR_SetRequestHeader(" + _0x23de2e + ", " + _0x3f85cf + ")");
    }
    if (_0x23de2e != "Cookie") {
      _0x544c49.requestInstances[_0x1bd353].setRequestHeader(_0x23de2e, _0x3f85cf);
    } else {
      var _0x1e5440 = _0x3f85cf.split(";");
      for (var _0x3c704e = 0; _0x3c704e < _0x1e5440.length; _0x3c704e++) {
        document.cookie = _0x1e5440[_0x3c704e];
      }
    }
  }
  function _0x4fb836(_0x19086b, _0x4618b3, _0x246d3f, _0x58f28f, _0x48a953, _0x5885af, _0xa0add7) {
    if (_0x544c49.loglevel <= 1) {
      console.log("XHR_SetResponseHandler(" + _0x19086b + ")");
    }
    _0x544c49.onallocbuffer = _0xa0add7;
    var _0x5baa6b = _0x544c49.requestInstances[_0x19086b];
    _0x5baa6b.onreadystatechange = _0x213d80 => {
      if (_0x544c49.loglevel <= 1) {
        console.log(_0x19086b + " onreadystatechange(" + _0x5baa6b.readyState + ")");
      }
      switch (_0x5baa6b.readyState) {
        case XMLHttpRequest.UNSENT:
          break;
        case XMLHttpRequest.OPENED:
          break;
        case XMLHttpRequest.HEADERS_RECEIVED:
          {
            _0x544c49.SendTextToCSharpSide(_0x19086b, _0x5885af, "HTTP/1.1 " + _0x5baa6b.status + " " + _0x5baa6b.statusText + "\n");
            _0x544c49.GetResponseHeaders(_0x19086b, _0x5885af);
            break;
          }
        case XMLHttpRequest.LOADING:
          break;
        case XMLHttpRequest.DONE:
          break;
      }
    };
    _0x5baa6b.onloadstart = _0x2bf021 => {
      if (_0x544c49.loglevel <= 1) {
        console.log(_0x19086b + " onloadstart: " + _0x2bf021);
      }
    };
    _0x5baa6b.onload = function _0x59b13a(_0x74f5c2) {
      if (_0x544c49.loglevel <= 1) {
        console.log(_0x19086b + " onload(" + _0x5baa6b.status + ", " + _0x5baa6b.statusText + ")");
      }
      if (_0x4618b3) {
        var _0x55d436 = 0;
        var _0xb7cd0b = 0;
        if (_0x5baa6b.response) {
          var _0x25a2f8 = _0x5baa6b.response;
          _0x55d436 = _0x25a2f8.byteLength;
          _0x544c49.SendTextToCSharpSide(_0x19086b, _0x5885af, "content-length:" + _0x55d436 + "\n\n");
          _0xb7cd0b = function (_0x415ede, _0x324f48) {
            return _0x2439a0.apply(null, [_0xa0add7, _0x415ede, _0x324f48]);
          }(_0x19086b, _0x55d436);
          var _0x4328ca = new Uint8Array(_0x25a2f8);
          var _0x271fd0 = _0x312996.subarray(_0xb7cd0b, _0xb7cd0b + _0x55d436);
          _0x271fd0.set(_0x4328ca);
        } else {
          _0x544c49.SendTextToCSharpSide(_0x19086b, _0x5885af, "content-length:0\n\n");
        }
        (function (_0x5a86f9, _0x539742, _0x171a0c) {
          _0x5c7aa8.apply(null, [_0x4618b3, _0x5a86f9, _0x539742, _0x171a0c]);
        })(_0x19086b, _0xb7cd0b, _0x55d436);
      }
    };
    if (_0x246d3f) {
      _0x5baa6b.onerror = function _0x5afad7(_0x2b1e0b) {
        function _0x12633e(_0x30a938) {
          var _0x4447b9 = _0x40b564(_0x30a938) + 1;
          var _0x2e61a5 = _0x4fa9c0(_0x4447b9);
          _0x3e72f1(_0x30a938, _0x312996, _0x2e61a5, _0x4447b9);
          (function (_0x29c410, _0x2f7770) {
            _0x3a13cb.apply(null, [_0x246d3f, _0x29c410, _0x2f7770]);
          })(_0x19086b, _0x2e61a5);
          _0xe462f0(_0x2e61a5);
        }
        if (_0x2b1e0b.error) {
          _0x12633e(_0x2b1e0b.error);
        } else {
          _0x12633e("Unknown Error! Maybe a CORS porblem?");
        }
      };
    }
    if (_0x58f28f) {
      _0x5baa6b.ontimeout = function _0x368c19(_0x57bf6b) {
        (function (_0x5424f3) {
          _0x58d73a.apply(null, [_0x58f28f, _0x5424f3]);
        })(_0x19086b);
      };
    }
    if (_0x48a953) {
      _0x5baa6b.onabort = function _0x3b4753(_0x29c47c) {
        (function (_0x2e1743) {
          _0x58d73a.apply(null, [_0x48a953, _0x2e1743]);
        })(_0x19086b);
      };
    }
  }
  function _0x11b8e7(_0x1c62ba, _0x3dc8e1) {
    if (_0x544c49.loglevel <= 1) {
      console.log("XHR_SetTimeout(" + _0x1c62ba + ", " + _0x3dc8e1 + ")");
    }
    _0x544c49.requestInstances[_0x1c62ba].timeout = _0x3dc8e1;
  }
  var _0x4ef969 = {
    DESTRUCTOR_OFFSET: 0,
    REFCOUNT_OFFSET: 4,
    TYPE_OFFSET: 8,
    CAUGHT_OFFSET: 12,
    RETHROWN_OFFSET: 13,
    SIZE: 16
  };
  function _0x208a44(_0x5b7afa) {
    return _0x4fa9c0(_0x5b7afa + _0x4ef969.SIZE) + _0x4ef969.SIZE;
  }
  function _0x18e63e(_0x507ca6) {
    this.excPtr = _0x507ca6;
    this.ptr = _0x507ca6 - _0x4ef969.SIZE;
    this.set_type = function (_0x2610c0) {
      _0x237516[this.ptr + _0x4ef969.TYPE_OFFSET >> 2] = _0x2610c0;
    };
    this.get_type = function () {
      return _0x237516[this.ptr + _0x4ef969.TYPE_OFFSET >> 2];
    };
    this.set_destructor = function (_0x208548) {
      _0x237516[this.ptr + _0x4ef969.DESTRUCTOR_OFFSET >> 2] = _0x208548;
    };
    this.get_destructor = function () {
      return _0x237516[this.ptr + _0x4ef969.DESTRUCTOR_OFFSET >> 2];
    };
    this.set_refcount = function (_0x36c28f) {
      _0x237516[this.ptr + _0x4ef969.REFCOUNT_OFFSET >> 2] = _0x36c28f;
    };
    this.set_caught = function (_0x354e88) {
      _0x354e88 = _0x354e88 ? 1 : 0;
      _0x1cc374[this.ptr + _0x4ef969.CAUGHT_OFFSET >> 0] = _0x354e88;
    };
    this.get_caught = function () {
      return _0x1cc374[this.ptr + _0x4ef969.CAUGHT_OFFSET >> 0] != 0;
    };
    this.set_rethrown = function (_0x55dc1b) {
      _0x55dc1b = _0x55dc1b ? 1 : 0;
      _0x1cc374[this.ptr + _0x4ef969.RETHROWN_OFFSET >> 0] = _0x55dc1b;
    };
    this.get_rethrown = function () {
      return _0x1cc374[this.ptr + _0x4ef969.RETHROWN_OFFSET >> 0] != 0;
    };
    this.init = function (_0x536397, _0x5458e8) {
      this.set_type(_0x536397);
      this.set_destructor(_0x5458e8);
      this.set_refcount(0);
      this.set_caught(false);
      this.set_rethrown(false);
    };
    this.add_ref = function () {
      var _0x552bb2 = _0x237516[this.ptr + _0x4ef969.REFCOUNT_OFFSET >> 2];
      _0x237516[this.ptr + _0x4ef969.REFCOUNT_OFFSET >> 2] = _0x552bb2 + 1;
    };
    this.release_ref = function () {
      var _0x2a6470 = _0x237516[this.ptr + _0x4ef969.REFCOUNT_OFFSET >> 2];
      _0x237516[this.ptr + _0x4ef969.REFCOUNT_OFFSET >> 2] = _0x2a6470 - 1;
      return _0x2a6470 === 1;
    };
  }
  function _0x170ed1(_0x896b9a) {
    this.free = function () {
      _0xe462f0(this.ptr);
      this.ptr = 0;
    };
    this.set_base_ptr = function (_0x430bdf) {
      _0x237516[this.ptr >> 2] = _0x430bdf;
    };
    this.get_base_ptr = function () {
      return _0x237516[this.ptr >> 2];
    };
    this.set_adjusted_ptr = function (_0x2a77ee) {
      var _0x297440 = 4;
      _0x237516[this.ptr + _0x297440 >> 2] = _0x2a77ee;
    };
    this.get_adjusted_ptr = function () {
      var _0x56a80f = 4;
      return _0x237516[this.ptr + _0x56a80f >> 2];
    };
    this.get_exception_ptr = function () {
      var _0x44a7c4 = _0x126007(this.get_exception_info().get_type());
      if (_0x44a7c4) {
        return _0x237516[this.get_base_ptr() >> 2];
      }
      var _0x2172c4 = this.get_adjusted_ptr();
      if (_0x2172c4 !== 0) {
        return _0x2172c4;
      }
      return this.get_base_ptr();
    };
    this.get_exception_info = function () {
      return new _0x18e63e(this.get_base_ptr());
    };
    if (_0x896b9a === undefined) {
      this.ptr = _0x4fa9c0(8);
      this.set_adjusted_ptr(0);
    } else {
      this.ptr = _0x896b9a;
    }
  }
  var _0xf62124 = [];
  function _0x36bf3f(_0x25f0ce) {
    _0x25f0ce.add_ref();
  }
  var _0x321d6c = 0;
  function _0x128e4d(_0x41eede) {
    var _0x265138 = new _0x170ed1(_0x41eede);
    var _0xe4d6c3 = _0x265138.get_exception_info();
    if (!_0xe4d6c3.get_caught()) {
      _0xe4d6c3.set_caught(true);
      _0x321d6c--;
    }
    _0xe4d6c3.set_rethrown(false);
    _0xf62124.push(_0x265138);
    _0x36bf3f(_0xe4d6c3);
    return _0x265138.get_exception_ptr();
  }
  var _0x4e3f49 = 0;
  function _0x24cbc8(_0x5d179d) {
    return _0xe462f0(new _0x18e63e(_0x5d179d).ptr);
  }
  function _0x314f5b(_0x45d939) {
    if (_0x45d939.release_ref() && !_0x45d939.get_rethrown()) {
      var _0x4a6ded = _0x45d939.get_destructor();
      if (_0x4a6ded) {
        (function (_0x508ca8) {
          return _0x121c5b.apply(null, [_0x4a6ded, _0x508ca8]);
        })(_0x45d939.excPtr);
      }
      _0x24cbc8(_0x45d939.excPtr);
    }
  }
  function _0x106156() {
    _0x2ec72f(0);
    var _0x324f30 = _0xf62124.pop();
    _0x314f5b(_0x324f30.get_exception_info());
    _0x324f30.free();
    _0x4e3f49 = 0;
  }
  function _0x4b04e6(_0x20b155) {
    var _0x52426d = new _0x170ed1(_0x20b155);
    var _0x2e6b9e = _0x52426d.get_base_ptr();
    if (!_0x4e3f49) {
      _0x4e3f49 = _0x2e6b9e;
    }
    _0x52426d.free();
    throw _0x2e6b9e;
  }
  function _0x3058c9() {
    var _0x49a071 = _0x4e3f49;
    if (!_0x49a071) {
      _0x1774d7(0);
      return 0;
    }
    var _0xdd387e = new _0x18e63e(_0x49a071);
    var _0x135f75 = _0xdd387e.get_type();
    var _0x466de5 = new _0x170ed1();
    _0x466de5.set_base_ptr(_0x49a071);
    if (!_0x135f75) {
      _0x1774d7(0);
      return _0x466de5.ptr | 0;
    }
    var _0x2ccad5 = Array.prototype.slice.call(arguments);
    var _0x124c42 = _0x3e3c9d();
    var _0x269190 = _0x2bd0fc(4);
    _0x237516[_0x269190 >> 2] = _0x49a071;
    for (var _0x247755 = 0; _0x247755 < _0x2ccad5.length; _0x247755++) {
      var _0x1a73ed = _0x2ccad5[_0x247755];
      if (_0x1a73ed === 0 || _0x1a73ed === _0x135f75) {
        break;
      }
      if (_0x358dc1(_0x1a73ed, _0x135f75, _0x269190)) {
        var _0x30aa32 = _0x237516[_0x269190 >> 2];
        if (_0x49a071 !== _0x30aa32) {
          _0x466de5.set_adjusted_ptr(_0x30aa32);
        }
        _0x1774d7(_0x1a73ed);
        return _0x466de5.ptr | 0;
      }
    }
    _0xe0dbf5(_0x124c42);
    _0x1774d7(_0x135f75);
    return _0x466de5.ptr | 0;
  }
  function _0x16ba83() {
    var _0x1ec8a5 = _0x4e3f49;
    if (!_0x1ec8a5) {
      _0x1774d7(0);
      return 0;
    }
    var _0x77ba9f = new _0x18e63e(_0x1ec8a5);
    var _0x44603a = _0x77ba9f.get_type();
    var _0x1bb4bb = new _0x170ed1();
    _0x1bb4bb.set_base_ptr(_0x1ec8a5);
    if (!_0x44603a) {
      _0x1774d7(0);
      return _0x1bb4bb.ptr | 0;
    }
    var _0x4b590a = Array.prototype.slice.call(arguments);
    var _0x589711 = _0x3e3c9d();
    var _0x2f74d3 = _0x2bd0fc(4);
    _0x237516[_0x2f74d3 >> 2] = _0x1ec8a5;
    for (var _0x8b424f = 0; _0x8b424f < _0x4b590a.length; _0x8b424f++) {
      var _0x4e148d = _0x4b590a[_0x8b424f];
      if (_0x4e148d === 0 || _0x4e148d === _0x44603a) {
        break;
      }
      if (_0x358dc1(_0x4e148d, _0x44603a, _0x2f74d3)) {
        var _0x644617 = _0x237516[_0x2f74d3 >> 2];
        if (_0x1ec8a5 !== _0x644617) {
          _0x1bb4bb.set_adjusted_ptr(_0x644617);
        }
        _0x1774d7(_0x4e148d);
        return _0x1bb4bb.ptr | 0;
      }
    }
    _0xe0dbf5(_0x589711);
    _0x1774d7(_0x44603a);
    return _0x1bb4bb.ptr | 0;
  }
  function _0x125a36() {
    var _0x9817af = _0x4e3f49;
    if (!_0x9817af) {
      _0x1774d7(0);
      return 0;
    }
    var _0x136b76 = new _0x18e63e(_0x9817af);
    var _0x309227 = _0x136b76.get_type();
    var _0x5d6a6b = new _0x170ed1();
    _0x5d6a6b.set_base_ptr(_0x9817af);
    if (!_0x309227) {
      _0x1774d7(0);
      return _0x5d6a6b.ptr | 0;
    }
    var _0xa4cd2e = Array.prototype.slice.call(arguments);
    var _0x3a39ba = _0x3e3c9d();
    var _0x27d794 = _0x2bd0fc(4);
    _0x237516[_0x27d794 >> 2] = _0x9817af;
    for (var _0x533099 = 0; _0x533099 < _0xa4cd2e.length; _0x533099++) {
      var _0x517be2 = _0xa4cd2e[_0x533099];
      if (_0x517be2 === 0 || _0x517be2 === _0x309227) {
        break;
      }
      if (_0x358dc1(_0x517be2, _0x309227, _0x27d794)) {
        var _0x5deeb0 = _0x237516[_0x27d794 >> 2];
        if (_0x9817af !== _0x5deeb0) {
          _0x5d6a6b.set_adjusted_ptr(_0x5deeb0);
        }
        _0x1774d7(_0x517be2);
        return _0x5d6a6b.ptr | 0;
      }
    }
    _0xe0dbf5(_0x3a39ba);
    _0x1774d7(_0x309227);
    return _0x5d6a6b.ptr | 0;
  }
  function _0x41ce04() {
    var _0x5134f6 = _0xf62124.pop();
    if (!_0x5134f6) {
      _0xe8ab44("no exception to throw");
    }
    var _0xec466a = _0x5134f6.get_exception_info();
    var _0x8890ee = _0x5134f6.get_base_ptr();
    if (!_0xec466a.get_rethrown()) {
      _0xf62124.push(_0x5134f6);
      _0xec466a.set_rethrown(true);
      _0xec466a.set_caught(false);
      _0x321d6c++;
    } else {
      _0x5134f6.free();
    }
    _0x4e3f49 = _0x8890ee;
    throw _0x8890ee;
  }
  function _0x4e7d63(_0x5c38c0, _0x579b2f, _0x11f0c6) {
    var _0x2285b1 = new _0x18e63e(_0x5c38c0);
    _0x2285b1.init(_0x579b2f, _0x11f0c6);
    _0x4e3f49 = _0x5c38c0;
    _0x321d6c++;
    throw _0x5c38c0;
  }
  function _0x42129e(_0x2fb499, _0x2d5407) {
    var _0x4d9445 = new Date(_0x237516[_0x2fb499 >> 2] * 1000);
    _0x237516[_0x2d5407 >> 2] = _0x4d9445.getUTCSeconds();
    _0x237516[_0x2d5407 + 4 >> 2] = _0x4d9445.getUTCMinutes();
    _0x237516[_0x2d5407 + 8 >> 2] = _0x4d9445.getUTCHours();
    _0x237516[_0x2d5407 + 12 >> 2] = _0x4d9445.getUTCDate();
    _0x237516[_0x2d5407 + 16 >> 2] = _0x4d9445.getUTCMonth();
    _0x237516[_0x2d5407 + 20 >> 2] = _0x4d9445.getUTCFullYear() - 1900;
    _0x237516[_0x2d5407 + 24 >> 2] = _0x4d9445.getUTCDay();
    _0x237516[_0x2d5407 + 36 >> 2] = 0;
    _0x237516[_0x2d5407 + 32 >> 2] = 0;
    var _0x3cbe99 = Date.UTC(_0x4d9445.getUTCFullYear(), 0, 1, 0, 0, 0, 0);
    var _0x30b4e4 = (_0x4d9445.getTime() - _0x3cbe99) / 86400000 | 0;
    _0x237516[_0x2d5407 + 28 >> 2] = _0x30b4e4;
    if (!_0x42129e.GMTString) {
      _0x42129e.GMTString = _0x2bd14d("GMT");
    }
    _0x237516[_0x2d5407 + 40 >> 2] = _0x42129e.GMTString;
    return _0x2d5407;
  }
  function _0x48492a(_0x18f233, _0x3b266e) {
    return _0x42129e(_0x18f233, _0x3b266e);
  }
  function _0x3e46f0() {
    if (_0x3e46f0.called) {
      return;
    }
    _0x3e46f0.called = true;
    var _0x5c55e8 = new Date().getFullYear();
    var _0x29db46 = new Date(_0x5c55e8, 0, 1);
    var _0x558db5 = new Date(_0x5c55e8, 6, 1);
    var _0x431178 = _0x29db46.getTimezoneOffset();
    var _0x29f3fd = _0x558db5.getTimezoneOffset();
    var _0x5cf1b5 = Math.max(_0x431178, _0x29f3fd);
    _0x237516[_0x324528() >> 2] = _0x5cf1b5 * 60;
    _0x237516[_0x24b449() >> 2] = Number(_0x431178 != _0x29f3fd);
    function _0x5a1e85(_0x340077) {
      var _0x58d2e0 = _0x340077.toTimeString().match(/\(([A-Za-z ]+)\)$/);
      if (_0x58d2e0) {
        return _0x58d2e0[1];
      } else {
        return "GMT";
      }
    }
    var _0x157a59 = _0x5a1e85(_0x29db46);
    var _0x355b24 = _0x5a1e85(_0x558db5);
    var _0x2a0409 = _0x2bd14d(_0x157a59);
    var _0x415884 = _0x2bd14d(_0x355b24);
    if (_0x29f3fd < _0x431178) {
      _0x237516[_0x174102() >> 2] = _0x2a0409;
      _0x237516[_0x174102() + 4 >> 2] = _0x415884;
    } else {
      _0x237516[_0x174102() >> 2] = _0x415884;
      _0x237516[_0x174102() + 4 >> 2] = _0x2a0409;
    }
  }
  function _0x7729eb(_0x1671ec, _0x41cce6) {
    _0x3e46f0();
    var _0x1f78e1 = new Date(_0x237516[_0x1671ec >> 2] * 1000);
    _0x237516[_0x41cce6 >> 2] = _0x1f78e1.getSeconds();
    _0x237516[_0x41cce6 + 4 >> 2] = _0x1f78e1.getMinutes();
    _0x237516[_0x41cce6 + 8 >> 2] = _0x1f78e1.getHours();
    _0x237516[_0x41cce6 + 12 >> 2] = _0x1f78e1.getDate();
    _0x237516[_0x41cce6 + 16 >> 2] = _0x1f78e1.getMonth();
    _0x237516[_0x41cce6 + 20 >> 2] = _0x1f78e1.getFullYear() - 1900;
    _0x237516[_0x41cce6 + 24 >> 2] = _0x1f78e1.getDay();
    var _0x22c54c = new Date(_0x1f78e1.getFullYear(), 0, 1);
    var _0x2c3b56 = (_0x1f78e1.getTime() - _0x22c54c.getTime()) / 86400000 | 0;
    _0x237516[_0x41cce6 + 28 >> 2] = _0x2c3b56;
    _0x237516[_0x41cce6 + 36 >> 2] = -(_0x1f78e1.getTimezoneOffset() * 60);
    var _0x4db8ba = new Date(_0x1f78e1.getFullYear(), 6, 1).getTimezoneOffset();
    var _0x5eed10 = _0x22c54c.getTimezoneOffset();
    var _0x3bbfe8 = (_0x4db8ba != _0x5eed10 && _0x1f78e1.getTimezoneOffset() == Math.min(_0x5eed10, _0x4db8ba)) | 0;
    _0x237516[_0x41cce6 + 32 >> 2] = _0x3bbfe8;
    var _0xe9a844 = _0x237516[_0x174102() + (_0x3bbfe8 ? 4 : 0) >> 2];
    _0x237516[_0x41cce6 + 40 >> 2] = _0xe9a844;
    return _0x41cce6;
  }
  function _0x38dbf1(_0x566255, _0x3ea83d) {
    return _0x7729eb(_0x566255, _0x3ea83d);
  }
  var _0xd5d702 = {
    splitPath: function (_0x1197df) {
      var _0x4156b6 = /^(\/?|)([\s\S]*?)((?:\.{1,2}|[^\/]+?|)(\.[^.\/]*|))(?:[\/]*)$/;
      return _0x4156b6.exec(_0x1197df).slice(1);
    },
    normalizeArray: function (_0x319d39, _0x145b40) {
      var _0x366f1c = 0;
      for (var _0x3e7de4 = _0x319d39.length - 1; _0x3e7de4 >= 0; _0x3e7de4--) {
        var _0x4db631 = _0x319d39[_0x3e7de4];
        if (_0x4db631 === ".") {
          _0x319d39.splice(_0x3e7de4, 1);
        } else if (_0x4db631 === "..") {
          _0x319d39.splice(_0x3e7de4, 1);
          _0x366f1c++;
        } else if (_0x366f1c) {
          _0x319d39.splice(_0x3e7de4, 1);
          _0x366f1c--;
        }
      }
      if (_0x145b40) {
        for (; _0x366f1c; _0x366f1c--) {
          _0x319d39.unshift("..");
        }
      }
      return _0x319d39;
    },
    normalize: function (_0x2e8195) {
      var _0x33bc93 = _0x2e8195.charAt(0) === "/";
      var _0x555986 = _0x2e8195.substr(-1) === "/";
      _0x2e8195 = _0xd5d702.normalizeArray(_0x2e8195.split("/").filter(function (_0x5dd3bf) {
        return !!_0x5dd3bf;
      }), !_0x33bc93).join("/");
      if (!_0x2e8195 && !_0x33bc93) {
        _0x2e8195 = ".";
      }
      if (_0x2e8195 && _0x555986) {
        _0x2e8195 += "/";
      }
      return (_0x33bc93 ? "/" : "") + _0x2e8195;
    },
    dirname: function (_0x561808) {
      var _0x4ad03c = _0xd5d702.splitPath(_0x561808);
      var _0x28a81f = _0x4ad03c[0];
      var _0x2c5de8 = _0x4ad03c[1];
      if (!_0x28a81f && !_0x2c5de8) {
        return ".";
      }
      _0x2c5de8 &&= _0x2c5de8.substr(0, _0x2c5de8.length - 1);
      return _0x28a81f + _0x2c5de8;
    },
    basename: function (_0x1f6c14) {
      if (_0x1f6c14 === "/") {
        return "/";
      }
      _0x1f6c14 = _0xd5d702.normalize(_0x1f6c14);
      _0x1f6c14 = _0x1f6c14.replace(/\/$/, "");
      var _0x4f5ec6 = _0x1f6c14.lastIndexOf("/");
      if (_0x4f5ec6 === -1) {
        return _0x1f6c14;
      }
      return _0x1f6c14.substr(_0x4f5ec6 + 1);
    },
    extname: function (_0x9c42b6) {
      return _0xd5d702.splitPath(_0x9c42b6)[3];
    },
    join: function () {
      var _0x343dbf = Array.prototype.slice.call(arguments, 0);
      return _0xd5d702.normalize(_0x343dbf.join("/"));
    },
    join2: function (_0x454553, _0x26ee80) {
      return _0xd5d702.normalize(_0x454553 + "/" + _0x26ee80);
    }
  };
  function _0x3d546e() {
    if (typeof crypto === "object" && typeof crypto.getRandomValues === "function") {
      var _0x1048fb = new Uint8Array(1);
      return function () {
        crypto.getRandomValues(_0x1048fb);
        return _0x1048fb[0];
      };
    } else if (_0xdf03b2) {
      try {
        var _0x41ae34 = require("crypto");
        return function () {
          return _0x41ae34.randomBytes(1)[0];
        };
      } catch (_0x3f9e34) {}
    }
    return function () {
      _0xe8ab44("randomDevice");
    };
  }
  var _0x4617c8 = {
    resolve: function () {
      var _0x43a8e4 = "";
      var _0x54cd10 = false;
      for (var _0x46a154 = arguments.length - 1; _0x46a154 >= -1 && !_0x54cd10; _0x46a154--) {
        var _0x43b1b3 = _0x46a154 >= 0 ? arguments[_0x46a154] : _0x3b09e1.cwd();
        if (typeof _0x43b1b3 !== "string") {
          throw new TypeError("Arguments to path.resolve must be strings");
        } else if (!_0x43b1b3) {
          return "";
        }
        _0x43a8e4 = _0x43b1b3 + "/" + _0x43a8e4;
        _0x54cd10 = _0x43b1b3.charAt(0) === "/";
      }
      _0x43a8e4 = _0xd5d702.normalizeArray(_0x43a8e4.split("/").filter(function (_0x550c5a) {
        return !!_0x550c5a;
      }), !_0x54cd10).join("/");
      return (_0x54cd10 ? "/" : "") + _0x43a8e4 || ".";
    },
    relative: function (_0x2ab267, _0x52ca54) {
      _0x2ab267 = _0x4617c8.resolve(_0x2ab267).substr(1);
      _0x52ca54 = _0x4617c8.resolve(_0x52ca54).substr(1);
      function _0x335ff4(_0x1aab2e) {
        var _0x5daf89 = 0;
        for (; _0x5daf89 < _0x1aab2e.length; _0x5daf89++) {
          if (_0x1aab2e[_0x5daf89] !== "") {
            break;
          }
        }
        var _0x31e735 = _0x1aab2e.length - 1;
        for (; _0x31e735 >= 0; _0x31e735--) {
          if (_0x1aab2e[_0x31e735] !== "") {
            break;
          }
        }
        if (_0x5daf89 > _0x31e735) {
          return [];
        }
        return _0x1aab2e.slice(_0x5daf89, _0x31e735 - _0x5daf89 + 1);
      }
      var _0x523ca7 = _0x335ff4(_0x2ab267.split("/"));
      var _0x457d46 = _0x335ff4(_0x52ca54.split("/"));
      var _0x3d219b = Math.min(_0x523ca7.length, _0x457d46.length);
      var _0x309fc8 = _0x3d219b;
      for (var _0x2ed9f0 = 0; _0x2ed9f0 < _0x3d219b; _0x2ed9f0++) {
        if (_0x523ca7[_0x2ed9f0] !== _0x457d46[_0x2ed9f0]) {
          _0x309fc8 = _0x2ed9f0;
          break;
        }
      }
      var _0x4a843c = [];
      for (var _0x2ed9f0 = _0x309fc8; _0x2ed9f0 < _0x523ca7.length; _0x2ed9f0++) {
        _0x4a843c.push("..");
      }
      _0x4a843c = _0x4a843c.concat(_0x457d46.slice(_0x309fc8));
      return _0x4a843c.join("/");
    }
  };
  var _0x39252f = {
    ttys: [],
    init: function () {},
    shutdown: function () {},
    register: function (_0x2d94cf, _0x10a3ac) {
      _0x39252f.ttys[_0x2d94cf] = {
        input: [],
        output: [],
        ops: _0x10a3ac
      };
      _0x3b09e1.registerDevice(_0x2d94cf, _0x39252f.stream_ops);
    },
    stream_ops: {
      open: function (_0x5813cf) {
        var _0x3b41e9 = _0x39252f.ttys[_0x5813cf.node.rdev];
        if (!_0x3b41e9) {
          throw new _0x3b09e1.ErrnoError(43);
        }
        _0x5813cf.tty = _0x3b41e9;
        _0x5813cf.seekable = false;
      },
      close: function (_0x555048) {
        _0x555048.tty.ops.flush(_0x555048.tty);
      },
      flush: function (_0x1d75b2) {
        _0x1d75b2.tty.ops.flush(_0x1d75b2.tty);
      },
      read: function (_0x41c13b, _0x4c9222, _0x32d64b, _0x1d63dd, _0x3fc21c) {
        if (!_0x41c13b.tty || !_0x41c13b.tty.ops.get_char) {
          throw new _0x3b09e1.ErrnoError(60);
        }
        var _0x1980c8 = 0;
        for (var _0x3f4da5 = 0; _0x3f4da5 < _0x1d63dd; _0x3f4da5++) {
          var _0x4e042d;
          try {
            _0x4e042d = _0x41c13b.tty.ops.get_char(_0x41c13b.tty);
          } catch (_0x1b76c3) {
            throw new _0x3b09e1.ErrnoError(29);
          }
          if (_0x4e042d === undefined && _0x1980c8 === 0) {
            throw new _0x3b09e1.ErrnoError(6);
          }
          if (_0x4e042d === null || _0x4e042d === undefined) {
            break;
          }
          _0x1980c8++;
          _0x4c9222[_0x32d64b + _0x3f4da5] = _0x4e042d;
        }
        if (_0x1980c8) {
          _0x41c13b.node.timestamp = Date.now();
        }
        return _0x1980c8;
      },
      write: function (_0x59224b, _0x5ee6d7, _0x134998, _0x15aa5f, _0x5649c6) {
        if (!_0x59224b.tty || !_0x59224b.tty.ops.put_char) {
          throw new _0x3b09e1.ErrnoError(60);
        }
        try {
          for (var _0x43cc24 = 0; _0x43cc24 < _0x15aa5f; _0x43cc24++) {
            _0x59224b.tty.ops.put_char(_0x59224b.tty, _0x5ee6d7[_0x134998 + _0x43cc24]);
          }
        } catch (_0x76be4a) {
          throw new _0x3b09e1.ErrnoError(29);
        }
        if (_0x15aa5f) {
          _0x59224b.node.timestamp = Date.now();
        }
        return _0x43cc24;
      }
    },
    default_tty_ops: {
      get_char: function (_0x253e94) {
        if (!_0x253e94.input.length) {
          var _0xca35e2 = null;
          if (_0xdf03b2) {
            var _0x1dd98d = 256;
            var _0x26c8af = Buffer.alloc ? Buffer.alloc(_0x1dd98d) : new Buffer(_0x1dd98d);
            var _0x437eb0 = 0;
            try {
              _0x437eb0 = _0x11f916.readSync(process.stdin.fd, _0x26c8af, 0, _0x1dd98d, null);
            } catch (_0x1f9f80) {
              if (_0x1f9f80.toString().includes("EOF")) {
                _0x437eb0 = 0;
              } else {
                throw _0x1f9f80;
              }
            }
            if (_0x437eb0 > 0) {
              _0xca35e2 = _0x26c8af.slice(0, _0x437eb0).toString("utf-8");
            } else {
              _0xca35e2 = null;
            }
          } else if (typeof window != "undefined" && typeof window.prompt == "function") {
            _0xca35e2 = window.prompt("Input: ");
            if (_0xca35e2 !== null) {
              _0xca35e2 += "\n";
            }
          } else if (typeof readline == "function") {
            _0xca35e2 = readline();
            if (_0xca35e2 !== null) {
              _0xca35e2 += "\n";
            }
          }
          if (!_0xca35e2) {
            return null;
          }
          _0x253e94.input = _0x1c148c(_0xca35e2, true);
        }
        return _0x253e94.input.shift();
      },
      put_char: function (_0x4178e7, _0x50d19e) {
        if (_0x50d19e === null || _0x50d19e === 10) {
          _0x1f45d9(_0xcb370(_0x4178e7.output, 0));
          _0x4178e7.output = [];
        } else if (_0x50d19e != 0) {
          _0x4178e7.output.push(_0x50d19e);
        }
      },
      flush: function (_0x2350d9) {
        if (_0x2350d9.output && _0x2350d9.output.length > 0) {
          _0x1f45d9(_0xcb370(_0x2350d9.output, 0));
          _0x2350d9.output = [];
        }
      }
    },
    default_tty1_ops: {
      put_char: function (_0x1636ec, _0xf24cf8) {
        if (_0xf24cf8 === null || _0xf24cf8 === 10) {
          _0x4677f2(_0xcb370(_0x1636ec.output, 0));
          _0x1636ec.output = [];
        } else if (_0xf24cf8 != 0) {
          _0x1636ec.output.push(_0xf24cf8);
        }
      },
      flush: function (_0x1287fa) {
        if (_0x1287fa.output && _0x1287fa.output.length > 0) {
          _0x4677f2(_0xcb370(_0x1287fa.output, 0));
          _0x1287fa.output = [];
        }
      }
    }
  };
  function _0x4dd640(_0x265496) {
    var _0x22f77f = _0x463680(_0x265496, 65536);
    var _0x2e7283 = _0x4fa9c0(_0x22f77f);
    while (_0x265496 < _0x22f77f) {
      _0x1cc374[_0x2e7283 + _0x265496++] = 0;
    }
    return _0x2e7283;
  }
  var _0x4d3739 = {
    ops_table: null,
    mount: function (_0x333098) {
      return _0x4d3739.createNode(null, "/", 16895, 0);
    },
    createNode: function (_0x34c5f1, _0x55ec95, _0x33cc4d, _0x79a318) {
      if (_0x3b09e1.isBlkdev(_0x33cc4d) || _0x3b09e1.isFIFO(_0x33cc4d)) {
        throw new _0x3b09e1.ErrnoError(63);
      }
      if (!_0x4d3739.ops_table) {
        _0x4d3739.ops_table = {
          dir: {
            node: {
              getattr: _0x4d3739.node_ops.getattr,
              setattr: _0x4d3739.node_ops.setattr,
              lookup: _0x4d3739.node_ops.lookup,
              mknod: _0x4d3739.node_ops.mknod,
              rename: _0x4d3739.node_ops.rename,
              unlink: _0x4d3739.node_ops.unlink,
              rmdir: _0x4d3739.node_ops.rmdir,
              readdir: _0x4d3739.node_ops.readdir,
              symlink: _0x4d3739.node_ops.symlink
            },
            stream: {
              llseek: _0x4d3739.stream_ops.llseek
            }
          },
          file: {
            node: {
              getattr: _0x4d3739.node_ops.getattr,
              setattr: _0x4d3739.node_ops.setattr
            },
            stream: {
              llseek: _0x4d3739.stream_ops.llseek,
              read: _0x4d3739.stream_ops.read,
              write: _0x4d3739.stream_ops.write,
              allocate: _0x4d3739.stream_ops.allocate,
              mmap: _0x4d3739.stream_ops.mmap,
              msync: _0x4d3739.stream_ops.msync
            }
          },
          link: {
            node: {
              getattr: _0x4d3739.node_ops.getattr,
              setattr: _0x4d3739.node_ops.setattr,
              readlink: _0x4d3739.node_ops.readlink
            },
            stream: {}
          },
          chrdev: {
            node: {
              getattr: _0x4d3739.node_ops.getattr,
              setattr: _0x4d3739.node_ops.setattr
            },
            stream: _0x3b09e1.chrdev_stream_ops
          }
        };
      }
      var _0x125d72 = _0x3b09e1.createNode(_0x34c5f1, _0x55ec95, _0x33cc4d, _0x79a318);
      if (_0x3b09e1.isDir(_0x125d72.mode)) {
        _0x125d72.node_ops = _0x4d3739.ops_table.dir.node;
        _0x125d72.stream_ops = _0x4d3739.ops_table.dir.stream;
        _0x125d72.contents = {};
      } else if (_0x3b09e1.isFile(_0x125d72.mode)) {
        _0x125d72.node_ops = _0x4d3739.ops_table.file.node;
        _0x125d72.stream_ops = _0x4d3739.ops_table.file.stream;
        _0x125d72.usedBytes = 0;
        _0x125d72.contents = null;
      } else if (_0x3b09e1.isLink(_0x125d72.mode)) {
        _0x125d72.node_ops = _0x4d3739.ops_table.link.node;
        _0x125d72.stream_ops = _0x4d3739.ops_table.link.stream;
      } else if (_0x3b09e1.isChrdev(_0x125d72.mode)) {
        _0x125d72.node_ops = _0x4d3739.ops_table.chrdev.node;
        _0x125d72.stream_ops = _0x4d3739.ops_table.chrdev.stream;
      }
      _0x125d72.timestamp = Date.now();
      if (_0x34c5f1) {
        _0x34c5f1.contents[_0x55ec95] = _0x125d72;
        _0x34c5f1.timestamp = _0x125d72.timestamp;
      }
      return _0x125d72;
    },
    getFileDataAsTypedArray: function (_0x51ff7c) {
      if (!_0x51ff7c.contents) {
        return new Uint8Array(0);
      }
      if (_0x51ff7c.contents.subarray) {
        return _0x51ff7c.contents.subarray(0, _0x51ff7c.usedBytes);
      }
      return new Uint8Array(_0x51ff7c.contents);
    },
    expandFileStorage: function (_0x3e85ac, _0x46491d) {
      var _0x52c014 = _0x3e85ac.contents ? _0x3e85ac.contents.length : 0;
      if (_0x52c014 >= _0x46491d) {
        return;
      }
      var _0x4c409b = 1048576;
      _0x46491d = Math.max(_0x46491d, _0x52c014 * (_0x52c014 < _0x4c409b ? 2 : 1.125) >>> 0);
      if (_0x52c014 != 0) {
        _0x46491d = Math.max(_0x46491d, 256);
      }
      var _0x22656a = _0x3e85ac.contents;
      _0x3e85ac.contents = new Uint8Array(_0x46491d);
      if (_0x3e85ac.usedBytes > 0) {
        _0x3e85ac.contents.set(_0x22656a.subarray(0, _0x3e85ac.usedBytes), 0);
      }
    },
    resizeFileStorage: function (_0x5151d5, _0x13214c) {
      if (_0x5151d5.usedBytes == _0x13214c) {
        return;
      }
      if (_0x13214c == 0) {
        _0x5151d5.contents = null;
        _0x5151d5.usedBytes = 0;
      } else {
        var _0x4aef88 = _0x5151d5.contents;
        _0x5151d5.contents = new Uint8Array(_0x13214c);
        if (_0x4aef88) {
          _0x5151d5.contents.set(_0x4aef88.subarray(0, Math.min(_0x13214c, _0x5151d5.usedBytes)));
        }
        _0x5151d5.usedBytes = _0x13214c;
      }
    },
    node_ops: {
      getattr: function (_0x129f99) {
        var _0x5f5ca5 = {};
        _0x5f5ca5.dev = _0x3b09e1.isChrdev(_0x129f99.mode) ? _0x129f99.id : 1;
        _0x5f5ca5.ino = _0x129f99.id;
        _0x5f5ca5.mode = _0x129f99.mode;
        _0x5f5ca5.nlink = 1;
        _0x5f5ca5.uid = 0;
        _0x5f5ca5.gid = 0;
        _0x5f5ca5.rdev = _0x129f99.rdev;
        if (_0x3b09e1.isDir(_0x129f99.mode)) {
          _0x5f5ca5.size = 4096;
        } else if (_0x3b09e1.isFile(_0x129f99.mode)) {
          _0x5f5ca5.size = _0x129f99.usedBytes;
        } else if (_0x3b09e1.isLink(_0x129f99.mode)) {
          _0x5f5ca5.size = _0x129f99.link.length;
        } else {
          _0x5f5ca5.size = 0;
        }
        _0x5f5ca5.atime = new Date(_0x129f99.timestamp);
        _0x5f5ca5.mtime = new Date(_0x129f99.timestamp);
        _0x5f5ca5.ctime = new Date(_0x129f99.timestamp);
        _0x5f5ca5.blksize = 4096;
        _0x5f5ca5.blocks = Math.ceil(_0x5f5ca5.size / _0x5f5ca5.blksize);
        return _0x5f5ca5;
      },
      setattr: function (_0xb2b1a2, _0x46f7e4) {
        if (_0x46f7e4.mode !== undefined) {
          _0xb2b1a2.mode = _0x46f7e4.mode;
        }
        if (_0x46f7e4.timestamp !== undefined) {
          _0xb2b1a2.timestamp = _0x46f7e4.timestamp;
        }
        if (_0x46f7e4.size !== undefined) {
          _0x4d3739.resizeFileStorage(_0xb2b1a2, _0x46f7e4.size);
        }
      },
      lookup: function (_0x695bfe, _0x273481) {
        throw _0x3b09e1.genericErrors[44];
      },
      mknod: function (_0x548c32, _0x23c5b4, _0x4fe9da, _0x1f4881) {
        return _0x4d3739.createNode(_0x548c32, _0x23c5b4, _0x4fe9da, _0x1f4881);
      },
      rename: function (_0x58457d, _0x501777, _0x33604b) {
        if (_0x3b09e1.isDir(_0x58457d.mode)) {
          var _0x1d5edf;
          try {
            _0x1d5edf = _0x3b09e1.lookupNode(_0x501777, _0x33604b);
          } catch (_0x187ff5) {}
          if (_0x1d5edf) {
            for (var _0x1742df in _0x1d5edf.contents) {
              throw new _0x3b09e1.ErrnoError(55);
            }
          }
        }
        delete _0x58457d.parent.contents[_0x58457d.name];
        _0x58457d.parent.timestamp = Date.now();
        _0x58457d.name = _0x33604b;
        _0x501777.contents[_0x33604b] = _0x58457d;
        _0x501777.timestamp = _0x58457d.parent.timestamp;
        _0x58457d.parent = _0x501777;
      },
      unlink: function (_0x53b684, _0x478097) {
        delete _0x53b684.contents[_0x478097];
        _0x53b684.timestamp = Date.now();
      },
      rmdir: function (_0x81072c, _0x7a05ed) {
        var _0x57f5c9 = _0x3b09e1.lookupNode(_0x81072c, _0x7a05ed);
        for (var _0x90e2d6 in _0x57f5c9.contents) {
          throw new _0x3b09e1.ErrnoError(55);
        }
        delete _0x81072c.contents[_0x7a05ed];
        _0x81072c.timestamp = Date.now();
      },
      readdir: function (_0x7bbfff) {
        var _0x370557 = [".", ".."];
        for (var _0x2e03eb in _0x7bbfff.contents) {
          if (!_0x7bbfff.contents.hasOwnProperty(_0x2e03eb)) {
            continue;
          }
          _0x370557.push(_0x2e03eb);
        }
        return _0x370557;
      },
      symlink: function (_0x3ed7e5, _0x2a791b, _0x293928) {
        var _0x343b76 = _0x4d3739.createNode(_0x3ed7e5, _0x2a791b, 41471, 0);
        _0x343b76.link = _0x293928;
        return _0x343b76;
      },
      readlink: function (_0x4ee70c) {
        if (!_0x3b09e1.isLink(_0x4ee70c.mode)) {
          throw new _0x3b09e1.ErrnoError(28);
        }
        return _0x4ee70c.link;
      }
    },
    stream_ops: {
      read: function (_0x3be279, _0x44ffc3, _0x30761f, _0x22cd7b, _0x5ea1d4) {
        var _0x1ba9ed = _0x3be279.node.contents;
        if (_0x5ea1d4 >= _0x3be279.node.usedBytes) {
          return 0;
        }
        var _0x268319 = Math.min(_0x3be279.node.usedBytes - _0x5ea1d4, _0x22cd7b);
        if (_0x268319 > 8 && _0x1ba9ed.subarray) {
          _0x44ffc3.set(_0x1ba9ed.subarray(_0x5ea1d4, _0x5ea1d4 + _0x268319), _0x30761f);
        } else {
          for (var _0x1bf146 = 0; _0x1bf146 < _0x268319; _0x1bf146++) {
            _0x44ffc3[_0x30761f + _0x1bf146] = _0x1ba9ed[_0x5ea1d4 + _0x1bf146];
          }
        }
        return _0x268319;
      },
      write: function (_0x167738, _0x3150e9, _0x568613, _0x596efa, _0x14a112, _0x287afe) {
        if (_0x3150e9.buffer === _0x1cc374.buffer) {
          _0x287afe = false;
        }
        if (!_0x596efa) {
          return 0;
        }
        var _0x4907f0 = _0x167738.node;
        _0x4907f0.timestamp = Date.now();
        if (_0x3150e9.subarray && (!_0x4907f0.contents || _0x4907f0.contents.subarray)) {
          if (_0x287afe) {
            _0x4907f0.contents = _0x3150e9.subarray(_0x568613, _0x568613 + _0x596efa);
            _0x4907f0.usedBytes = _0x596efa;
            return _0x596efa;
          } else if (_0x4907f0.usedBytes === 0 && _0x14a112 === 0) {
            _0x4907f0.contents = _0x3150e9.slice(_0x568613, _0x568613 + _0x596efa);
            _0x4907f0.usedBytes = _0x596efa;
            return _0x596efa;
          } else if (_0x14a112 + _0x596efa <= _0x4907f0.usedBytes) {
            _0x4907f0.contents.set(_0x3150e9.subarray(_0x568613, _0x568613 + _0x596efa), _0x14a112);
            return _0x596efa;
          }
        }
        _0x4d3739.expandFileStorage(_0x4907f0, _0x14a112 + _0x596efa);
        if (_0x4907f0.contents.subarray && _0x3150e9.subarray) {
          _0x4907f0.contents.set(_0x3150e9.subarray(_0x568613, _0x568613 + _0x596efa), _0x14a112);
        } else {
          for (var _0x5ddb45 = 0; _0x5ddb45 < _0x596efa; _0x5ddb45++) {
            _0x4907f0.contents[_0x14a112 + _0x5ddb45] = _0x3150e9[_0x568613 + _0x5ddb45];
          }
        }
        _0x4907f0.usedBytes = Math.max(_0x4907f0.usedBytes, _0x14a112 + _0x596efa);
        return _0x596efa;
      },
      llseek: function (_0x469a84, _0x5dff42, _0x59ceec) {
        var _0x2437dd = _0x5dff42;
        if (_0x59ceec === 1) {
          _0x2437dd += _0x469a84.position;
        } else if (_0x59ceec === 2) {
          if (_0x3b09e1.isFile(_0x469a84.node.mode)) {
            _0x2437dd += _0x469a84.node.usedBytes;
          }
        }
        if (_0x2437dd < 0) {
          throw new _0x3b09e1.ErrnoError(28);
        }
        return _0x2437dd;
      },
      allocate: function (_0x166ad5, _0x543cc5, _0xdff89d) {
        _0x4d3739.expandFileStorage(_0x166ad5.node, _0x543cc5 + _0xdff89d);
        _0x166ad5.node.usedBytes = Math.max(_0x166ad5.node.usedBytes, _0x543cc5 + _0xdff89d);
      },
      mmap: function (_0x241145, _0x1da94a, _0x3f6961, _0xcc7b91, _0xb4a47c, _0x55f1aa) {
        if (_0x1da94a !== 0) {
          throw new _0x3b09e1.ErrnoError(28);
        }
        if (!_0x3b09e1.isFile(_0x241145.node.mode)) {
          throw new _0x3b09e1.ErrnoError(43);
        }
        var _0x2f5ba9;
        var _0x5ec87b;
        var _0x1a092d = _0x241145.node.contents;
        if (!(_0x55f1aa & 2) && _0x1a092d.buffer === _0x3fb518) {
          _0x5ec87b = false;
          _0x2f5ba9 = _0x1a092d.byteOffset;
        } else {
          if (_0xcc7b91 > 0 || _0xcc7b91 + _0x3f6961 < _0x1a092d.length) {
            if (_0x1a092d.subarray) {
              _0x1a092d = _0x1a092d.subarray(_0xcc7b91, _0xcc7b91 + _0x3f6961);
            } else {
              _0x1a092d = Array.prototype.slice.call(_0x1a092d, _0xcc7b91, _0xcc7b91 + _0x3f6961);
            }
          }
          _0x5ec87b = true;
          _0x2f5ba9 = _0x4dd640(_0x3f6961);
          if (!_0x2f5ba9) {
            throw new _0x3b09e1.ErrnoError(48);
          }
          _0x1cc374.set(_0x1a092d, _0x2f5ba9);
        }
        return {
          ptr: _0x2f5ba9,
          allocated: _0x5ec87b
        };
      },
      msync: function (_0x47ea88, _0x4ec68f, _0x5ea1c9, _0xae86fc, _0x1eb526) {
        if (!_0x3b09e1.isFile(_0x47ea88.node.mode)) {
          throw new _0x3b09e1.ErrnoError(43);
        }
        if (_0x1eb526 & 2) {
          return 0;
        }
        var _0x275d9e = _0x4d3739.stream_ops.write(_0x47ea88, _0x4ec68f, 0, _0xae86fc, _0x5ea1c9, false);
        return 0;
      }
    }
  };
  var _0x13674c = {
    dbs: {},
    indexedDB: function () {
      if (typeof indexedDB !== "undefined") {
        return indexedDB;
      }
      var _0x36e5ee = null;
      if (typeof window === "object") {
        _0x36e5ee = window.indexedDB || window.mozIndexedDB || window.webkitIndexedDB || window.msIndexedDB;
      }
      _0x4a00f0(_0x36e5ee, "IDBFS used, but indexedDB not supported");
      return _0x36e5ee;
    },
    DB_VERSION: 21,
    DB_STORE_NAME: "FILE_DATA",
    mount: function (_0x21a6d2) {
      return _0x4d3739.mount.apply(null, arguments);
    },
    syncfs: function (_0x3af2d3, _0x1fdae5, _0x5359b9) {
      _0x13674c.getLocalSet(_0x3af2d3, function (_0x1375e4, _0x1b99f3) {
        if (_0x1375e4) {
          return _0x5359b9(_0x1375e4);
        }
        _0x13674c.getRemoteSet(_0x3af2d3, function (_0x480350, _0x531b8c) {
          if (_0x480350) {
            return _0x5359b9(_0x480350);
          }
          var _0x2cdcd2 = _0x1fdae5 ? _0x531b8c : _0x1b99f3;
          var _0x2de706 = _0x1fdae5 ? _0x1b99f3 : _0x531b8c;
          _0x13674c.reconcile(_0x2cdcd2, _0x2de706, _0x5359b9);
        });
      });
    },
    getDB: function (_0x21e373, _0xd0b775) {
      var _0xad9f3b = _0x13674c.dbs[_0x21e373];
      if (_0xad9f3b) {
        return _0xd0b775(null, _0xad9f3b);
      }
      var _0x1528cc;
      try {
        _0x1528cc = _0x13674c.indexedDB().open(_0x21e373, _0x13674c.DB_VERSION);
      } catch (_0xb036b7) {
        return _0xd0b775(_0xb036b7);
      }
      if (!_0x1528cc) {
        return _0xd0b775("Unable to connect to IndexedDB");
      }
      _0x1528cc.onupgradeneeded = function (_0x157d29) {
        var _0x328f01 = _0x157d29.target.result;
        var _0x545ed6 = _0x157d29.target.transaction;
        var _0x50b264;
        if (_0x328f01.objectStoreNames.contains(_0x13674c.DB_STORE_NAME)) {
          _0x50b264 = _0x545ed6.objectStore(_0x13674c.DB_STORE_NAME);
        } else {
          _0x50b264 = _0x328f01.createObjectStore(_0x13674c.DB_STORE_NAME);
        }
        if (!_0x50b264.indexNames.contains("timestamp")) {
          _0x50b264.createIndex("timestamp", "timestamp", {
            unique: false
          });
        }
      };
      _0x1528cc.onsuccess = function () {
        _0xad9f3b = _0x1528cc.result;
        _0x13674c.dbs[_0x21e373] = _0xad9f3b;
        _0xd0b775(null, _0xad9f3b);
      };
      _0x1528cc.onerror = function (_0x5f339f) {
        _0xd0b775(this.error);
        _0x5f339f.preventDefault();
      };
    },
    getLocalSet: function (_0x1d013b, _0x8aa3b0) {
      var _0x548716 = {};
      function _0x4349a4(_0x2d1443) {
        return _0x2d1443 !== "." && _0x2d1443 !== "..";
      }
      function _0x54fe94(_0x18fb5d) {
        return function (_0x42e7ad) {
          return _0xd5d702.join2(_0x18fb5d, _0x42e7ad);
        };
      }
      var _0x4a72c5 = _0x3b09e1.readdir(_0x1d013b.mountpoint).filter(_0x4349a4).map(_0x54fe94(_0x1d013b.mountpoint));
      while (_0x4a72c5.length) {
        var _0x59c181 = _0x4a72c5.pop();
        var _0x2ee67a;
        try {
          _0x2ee67a = _0x3b09e1.stat(_0x59c181);
        } catch (_0x313100) {
          return _0x8aa3b0(_0x313100);
        }
        if (_0x3b09e1.isDir(_0x2ee67a.mode)) {
          _0x4a72c5.push.apply(_0x4a72c5, _0x3b09e1.readdir(_0x59c181).filter(_0x4349a4).map(_0x54fe94(_0x59c181)));
        }
        _0x548716[_0x59c181] = {
          timestamp: _0x2ee67a.mtime
        };
      }
      return _0x8aa3b0(null, {
        type: "local",
        entries: _0x548716
      });
    },
    getRemoteSet: function (_0x4dd342, _0x5816d2) {
      var _0x1bc295 = {};
      _0x13674c.getDB(_0x4dd342.mountpoint, function (_0x5ef1f3, _0x158fa0) {
        if (_0x5ef1f3) {
          return _0x5816d2(_0x5ef1f3);
        }
        try {
          var _0x39e1bb = _0x158fa0.transaction([_0x13674c.DB_STORE_NAME], "readonly");
          _0x39e1bb.onerror = function (_0xa6920b) {
            _0x5816d2(this.error);
            _0xa6920b.preventDefault();
          };
          var _0x2dfeba = _0x39e1bb.objectStore(_0x13674c.DB_STORE_NAME);
          var _0x4cf692 = _0x2dfeba.index("timestamp");
          _0x4cf692.openKeyCursor().onsuccess = function (_0x5471ee) {
            var _0x15f501 = _0x5471ee.target.result;
            if (!_0x15f501) {
              return _0x5816d2(null, {
                type: "remote",
                db: _0x158fa0,
                entries: _0x1bc295
              });
            }
            _0x1bc295[_0x15f501.primaryKey] = {
              timestamp: _0x15f501.key
            };
            _0x15f501.continue();
          };
        } catch (_0x231fd2) {
          return _0x5816d2(_0x231fd2);
        }
      });
    },
    loadLocalEntry: function (_0x4403d2, _0x4c2f05) {
      var _0x5833ff;
      var _0xb90bd2;
      try {
        var _0x57ee35 = _0x3b09e1.lookupPath(_0x4403d2);
        _0xb90bd2 = _0x57ee35.node;
        _0x5833ff = _0x3b09e1.stat(_0x4403d2);
      } catch (_0x5a44a2) {
        return _0x4c2f05(_0x5a44a2);
      }
      if (_0x3b09e1.isDir(_0x5833ff.mode)) {
        return _0x4c2f05(null, {
          timestamp: _0x5833ff.mtime,
          mode: _0x5833ff.mode
        });
      } else if (_0x3b09e1.isFile(_0x5833ff.mode)) {
        _0xb90bd2.contents = _0x4d3739.getFileDataAsTypedArray(_0xb90bd2);
        return _0x4c2f05(null, {
          timestamp: _0x5833ff.mtime,
          mode: _0x5833ff.mode,
          contents: _0xb90bd2.contents
        });
      } else {
        return _0x4c2f05(new Error("node type not supported"));
      }
    },
    storeLocalEntry: function (_0x42fd98, _0x34b9fd, _0x3e7ced) {
      try {
        if (_0x3b09e1.isDir(_0x34b9fd.mode)) {
          _0x3b09e1.mkdirTree(_0x42fd98, _0x34b9fd.mode);
        } else if (_0x3b09e1.isFile(_0x34b9fd.mode)) {
          _0x3b09e1.writeFile(_0x42fd98, _0x34b9fd.contents, {
            canOwn: true
          });
        } else {
          return _0x3e7ced(new Error("node type not supported"));
        }
        _0x3b09e1.chmod(_0x42fd98, _0x34b9fd.mode);
        _0x3b09e1.utime(_0x42fd98, _0x34b9fd.timestamp, _0x34b9fd.timestamp);
      } catch (_0x899489) {
        return _0x3e7ced(_0x899489);
      }
      _0x3e7ced(null);
    },
    removeLocalEntry: function (_0x390dcf, _0x3e8339) {
      try {
        var _0x22fd26 = _0x3b09e1.lookupPath(_0x390dcf);
        var _0x239200 = _0x3b09e1.stat(_0x390dcf);
        if (_0x3b09e1.isDir(_0x239200.mode)) {
          _0x3b09e1.rmdir(_0x390dcf);
        } else if (_0x3b09e1.isFile(_0x239200.mode)) {
          _0x3b09e1.unlink(_0x390dcf);
        }
      } catch (_0x2b5e56) {
        return _0x3e8339(_0x2b5e56);
      }
      _0x3e8339(null);
    },
    loadRemoteEntry: function (_0x57cbf0, _0x526f65, _0x47c8fa) {
      var _0x27116c = _0x57cbf0.get(_0x526f65);
      _0x27116c.onsuccess = function (_0x40db97) {
        _0x47c8fa(null, _0x40db97.target.result);
      };
      _0x27116c.onerror = function (_0x78f450) {
        _0x47c8fa(this.error);
        _0x78f450.preventDefault();
      };
    },
    storeRemoteEntry: function (_0x32f8eb, _0x435893, _0x9bdeec, _0x5c37b2) {
      var _0x1549b6 = _0x32f8eb.put(_0x9bdeec, _0x435893);
      _0x1549b6.onsuccess = function () {
        _0x5c37b2(null);
      };
      _0x1549b6.onerror = function (_0x3ba062) {
        _0x5c37b2(this.error);
        _0x3ba062.preventDefault();
      };
    },
    removeRemoteEntry: function (_0x4120ba, _0x39c5fd, _0x3dd634) {
      var _0x376507 = _0x4120ba.delete(_0x39c5fd);
      _0x376507.onsuccess = function () {
        _0x3dd634(null);
      };
      _0x376507.onerror = function (_0x242907) {
        _0x3dd634(this.error);
        _0x242907.preventDefault();
      };
    },
    reconcile: function (_0xe23d50, _0x1bb5e7, _0x5a7c27) {
      var _0x260ba5 = 0;
      var _0x3336d5 = [];
      Object.keys(_0xe23d50.entries).forEach(function (_0x5d63f8) {
        var _0x363fa8 = _0xe23d50.entries[_0x5d63f8];
        var _0x450c43 = _0x1bb5e7.entries[_0x5d63f8];
        if (!_0x450c43 || _0x363fa8.timestamp.getTime() != _0x450c43.timestamp.getTime()) {
          _0x3336d5.push(_0x5d63f8);
          _0x260ba5++;
        }
      });
      var _0x2e0839 = [];
      Object.keys(_0x1bb5e7.entries).forEach(function (_0x2dbf03) {
        if (!_0xe23d50.entries[_0x2dbf03]) {
          _0x2e0839.push(_0x2dbf03);
          _0x260ba5++;
        }
      });
      if (!_0x260ba5) {
        return _0x5a7c27(null);
      }
      var _0x5b5c7d = false;
      var _0x26205c = _0xe23d50.type === "remote" ? _0xe23d50.db : _0x1bb5e7.db;
      var _0x4e16ea = _0x26205c.transaction([_0x13674c.DB_STORE_NAME], "readwrite");
      var _0x180130 = _0x4e16ea.objectStore(_0x13674c.DB_STORE_NAME);
      function _0x441fca(_0x2a41b8) {
        if (_0x2a41b8 && !_0x5b5c7d) {
          _0x5b5c7d = true;
          return _0x5a7c27(_0x2a41b8);
        }
      }
      _0x4e16ea.onerror = function (_0x3063ef) {
        _0x441fca(this.error);
        _0x3063ef.preventDefault();
      };
      _0x4e16ea.oncomplete = function (_0x154cb8) {
        if (!_0x5b5c7d) {
          _0x5a7c27(null);
        }
      };
      _0x3336d5.sort().forEach(function (_0x1bcfda) {
        if (_0x1bb5e7.type === "local") {
          _0x13674c.loadRemoteEntry(_0x180130, _0x1bcfda, function (_0x321059, _0x4c82e5) {
            if (_0x321059) {
              return _0x441fca(_0x321059);
            }
            _0x13674c.storeLocalEntry(_0x1bcfda, _0x4c82e5, _0x441fca);
          });
        } else {
          _0x13674c.loadLocalEntry(_0x1bcfda, function (_0x28c528, _0xa83723) {
            if (_0x28c528) {
              return _0x441fca(_0x28c528);
            }
            _0x13674c.storeRemoteEntry(_0x180130, _0x1bcfda, _0xa83723, _0x441fca);
          });
        }
      });
      _0x2e0839.sort().reverse().forEach(function (_0x20dc79) {
        if (_0x1bb5e7.type === "local") {
          _0x13674c.removeLocalEntry(_0x20dc79, _0x441fca);
        } else {
          _0x13674c.removeRemoteEntry(_0x180130, _0x20dc79, _0x441fca);
        }
      });
    }
  };
  var _0x3b09e1 = {
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
    lookupPath: function (_0x459004, _0x24a32f) {
      _0x459004 = _0x4617c8.resolve(_0x3b09e1.cwd(), _0x459004);
      _0x24a32f = _0x24a32f || {};
      if (!_0x459004) {
        return {
          path: "",
          node: null
        };
      }
      var _0x3892b3 = {
        follow_mount: true,
        recurse_count: 0
      };
      for (var _0x4ff98a in _0x3892b3) {
        if (_0x24a32f[_0x4ff98a] === undefined) {
          _0x24a32f[_0x4ff98a] = _0x3892b3[_0x4ff98a];
        }
      }
      if (_0x24a32f.recurse_count > 8) {
        throw new _0x3b09e1.ErrnoError(32);
      }
      var _0x4e1389 = _0xd5d702.normalizeArray(_0x459004.split("/").filter(function (_0x248fe2) {
        return !!_0x248fe2;
      }), false);
      var _0x36c228 = _0x3b09e1.root;
      var _0x344f8d = "/";
      for (var _0x57c7e2 = 0; _0x57c7e2 < _0x4e1389.length; _0x57c7e2++) {
        var _0x498746 = _0x57c7e2 === _0x4e1389.length - 1;
        if (_0x498746 && _0x24a32f.parent) {
          break;
        }
        _0x36c228 = _0x3b09e1.lookupNode(_0x36c228, _0x4e1389[_0x57c7e2]);
        _0x344f8d = _0xd5d702.join2(_0x344f8d, _0x4e1389[_0x57c7e2]);
        if (_0x3b09e1.isMountpoint(_0x36c228)) {
          if (!_0x498746 || _0x498746 && _0x24a32f.follow_mount) {
            _0x36c228 = _0x36c228.mounted.root;
          }
        }
        if (!_0x498746 || _0x24a32f.follow) {
          var _0x2b9c94 = 0;
          while (_0x3b09e1.isLink(_0x36c228.mode)) {
            var _0x171ee3 = _0x3b09e1.readlink(_0x344f8d);
            _0x344f8d = _0x4617c8.resolve(_0xd5d702.dirname(_0x344f8d), _0x171ee3);
            var _0x5be118 = _0x3b09e1.lookupPath(_0x344f8d, {
              recurse_count: _0x24a32f.recurse_count
            });
            _0x36c228 = _0x5be118.node;
            if (_0x2b9c94++ > 40) {
              throw new _0x3b09e1.ErrnoError(32);
            }
          }
        }
      }
      return {
        path: _0x344f8d,
        node: _0x36c228
      };
    },
    getPath: function (_0x550976) {
      var _0x50b196;
      while (true) {
        if (_0x3b09e1.isRoot(_0x550976)) {
          var _0x3ccdf9 = _0x550976.mount.mountpoint;
          if (!_0x50b196) {
            return _0x3ccdf9;
          }
          if (_0x3ccdf9[_0x3ccdf9.length - 1] !== "/") {
            return _0x3ccdf9 + "/" + _0x50b196;
          } else {
            return _0x3ccdf9 + _0x50b196;
          }
        }
        _0x50b196 = _0x50b196 ? _0x550976.name + "/" + _0x50b196 : _0x550976.name;
        _0x550976 = _0x550976.parent;
      }
    },
    hashName: function (_0x3b4d55, _0x3f6ff3) {
      var _0x2b8d1d = 0;
      for (var _0x659e0f = 0; _0x659e0f < _0x3f6ff3.length; _0x659e0f++) {
        _0x2b8d1d = (_0x2b8d1d << 5) - _0x2b8d1d + _0x3f6ff3.charCodeAt(_0x659e0f) | 0;
      }
      return (_0x3b4d55 + _0x2b8d1d >>> 0) % _0x3b09e1.nameTable.length;
    },
    hashAddNode: function (_0x1ea467) {
      var _0xeb7f8a = _0x3b09e1.hashName(_0x1ea467.parent.id, _0x1ea467.name);
      _0x1ea467.name_next = _0x3b09e1.nameTable[_0xeb7f8a];
      _0x3b09e1.nameTable[_0xeb7f8a] = _0x1ea467;
    },
    hashRemoveNode: function (_0x861c38) {
      var _0x27f3c0 = _0x3b09e1.hashName(_0x861c38.parent.id, _0x861c38.name);
      if (_0x3b09e1.nameTable[_0x27f3c0] === _0x861c38) {
        _0x3b09e1.nameTable[_0x27f3c0] = _0x861c38.name_next;
      } else {
        var _0x331bf9 = _0x3b09e1.nameTable[_0x27f3c0];
        while (_0x331bf9) {
          if (_0x331bf9.name_next === _0x861c38) {
            _0x331bf9.name_next = _0x861c38.name_next;
            break;
          }
          _0x331bf9 = _0x331bf9.name_next;
        }
      }
    },
    lookupNode: function (_0x5c3dd9, _0x1bc580) {
      var _0x493476 = _0x3b09e1.mayLookup(_0x5c3dd9);
      if (_0x493476) {
        throw new _0x3b09e1.ErrnoError(_0x493476, _0x5c3dd9);
      }
      var _0xa18ae9 = _0x3b09e1.hashName(_0x5c3dd9.id, _0x1bc580);
      for (var _0x50fa72 = _0x3b09e1.nameTable[_0xa18ae9]; _0x50fa72; _0x50fa72 = _0x50fa72.name_next) {
        var _0x14558d = _0x50fa72.name;
        if (_0x50fa72.parent.id === _0x5c3dd9.id && _0x14558d === _0x1bc580) {
          return _0x50fa72;
        }
      }
      return _0x3b09e1.lookup(_0x5c3dd9, _0x1bc580);
    },
    createNode: function (_0x4edc55, _0x24f0a6, _0x1eedae, _0x5f5db7) {
      var _0x44257d = new _0x3b09e1.FSNode(_0x4edc55, _0x24f0a6, _0x1eedae, _0x5f5db7);
      _0x3b09e1.hashAddNode(_0x44257d);
      return _0x44257d;
    },
    destroyNode: function (_0x175e54) {
      _0x3b09e1.hashRemoveNode(_0x175e54);
    },
    isRoot: function (_0x192073) {
      return _0x192073 === _0x192073.parent;
    },
    isMountpoint: function (_0xf18de5) {
      return !!_0xf18de5.mounted;
    },
    isFile: function (_0x1800d9) {
      return (_0x1800d9 & 61440) === 32768;
    },
    isDir: function (_0x463ed5) {
      return (_0x463ed5 & 61440) === 16384;
    },
    isLink: function (_0x5c63c5) {
      return (_0x5c63c5 & 61440) === 40960;
    },
    isChrdev: function (_0x3180a9) {
      return (_0x3180a9 & 61440) === 8192;
    },
    isBlkdev: function (_0x3f1943) {
      return (_0x3f1943 & 61440) === 24576;
    },
    isFIFO: function (_0x5c334e) {
      return (_0x5c334e & 61440) === 4096;
    },
    isSocket: function (_0x43e64d) {
      return (_0x43e64d & 49152) === 49152;
    },
    flagModes: {
      r: 0,
      "r+": 2,
      w: 577,
      "w+": 578,
      a: 1089,
      "a+": 1090
    },
    modeStringToFlags: function (_0x3e2fed) {
      var _0x1767ff = _0x3b09e1.flagModes[_0x3e2fed];
      if (typeof _0x1767ff === "undefined") {
        throw new Error("Unknown file open mode: " + _0x3e2fed);
      }
      return _0x1767ff;
    },
    flagsToPermissionString: function (_0x952537) {
      var _0x2d9c98 = ["r", "w", "rw"][_0x952537 & 3];
      if (_0x952537 & 512) {
        _0x2d9c98 += "w";
      }
      return _0x2d9c98;
    },
    nodePermissions: function (_0x5527d9, _0x48b2c4) {
      if (_0x3b09e1.ignorePermissions) {
        return 0;
      }
      if (_0x48b2c4.includes("r") && !(_0x5527d9.mode & 292)) {
        return 2;
      } else if (_0x48b2c4.includes("w") && !(_0x5527d9.mode & 146)) {
        return 2;
      } else if (_0x48b2c4.includes("x") && !(_0x5527d9.mode & 73)) {
        return 2;
      }
      return 0;
    },
    mayLookup: function (_0x51f3ef) {
      var _0x117994 = _0x3b09e1.nodePermissions(_0x51f3ef, "x");
      if (_0x117994) {
        return _0x117994;
      }
      if (!_0x51f3ef.node_ops.lookup) {
        return 2;
      }
      return 0;
    },
    mayCreate: function (_0x2f029f, _0x11411d) {
      try {
        var _0x3c1118 = _0x3b09e1.lookupNode(_0x2f029f, _0x11411d);
        return 20;
      } catch (_0x4a8087) {}
      return _0x3b09e1.nodePermissions(_0x2f029f, "wx");
    },
    mayDelete: function (_0x2faf0e, _0x2d6c48, _0x22ef88) {
      var _0x5e5c60;
      try {
        _0x5e5c60 = _0x3b09e1.lookupNode(_0x2faf0e, _0x2d6c48);
      } catch (_0x31d30c) {
        return _0x31d30c.errno;
      }
      var _0x2457fe = _0x3b09e1.nodePermissions(_0x2faf0e, "wx");
      if (_0x2457fe) {
        return _0x2457fe;
      }
      if (_0x22ef88) {
        if (!_0x3b09e1.isDir(_0x5e5c60.mode)) {
          return 54;
        }
        if (_0x3b09e1.isRoot(_0x5e5c60) || _0x3b09e1.getPath(_0x5e5c60) === _0x3b09e1.cwd()) {
          return 10;
        }
      } else if (_0x3b09e1.isDir(_0x5e5c60.mode)) {
        return 31;
      }
      return 0;
    },
    mayOpen: function (_0x4e633d, _0x52e73e) {
      if (!_0x4e633d) {
        return 44;
      }
      if (_0x3b09e1.isLink(_0x4e633d.mode)) {
        return 32;
      } else if (_0x3b09e1.isDir(_0x4e633d.mode)) {
        if (_0x3b09e1.flagsToPermissionString(_0x52e73e) !== "r" || _0x52e73e & 512) {
          return 31;
        }
      }
      return _0x3b09e1.nodePermissions(_0x4e633d, _0x3b09e1.flagsToPermissionString(_0x52e73e));
    },
    MAX_OPEN_FDS: 4096,
    nextfd: function (_0x355319, _0x45bcd0) {
      _0x355319 = _0x355319 || 0;
      _0x45bcd0 = _0x45bcd0 || _0x3b09e1.MAX_OPEN_FDS;
      for (var _0x426513 = _0x355319; _0x426513 <= _0x45bcd0; _0x426513++) {
        if (!_0x3b09e1.streams[_0x426513]) {
          return _0x426513;
        }
      }
      throw new _0x3b09e1.ErrnoError(33);
    },
    getStream: function (_0x459e01) {
      return _0x3b09e1.streams[_0x459e01];
    },
    createStream: function (_0x2243e7, _0x437e9d, _0xee5ef) {
      if (!_0x3b09e1.FSStream) {
        _0x3b09e1.FSStream = function () {};
        _0x3b09e1.FSStream.prototype = {
          object: {
            get: function () {
              return this.node;
            },
            set: function (_0x30997a) {
              this.node = _0x30997a;
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
      var _0x34a632 = new _0x3b09e1.FSStream();
      for (var _0x5ddb95 in _0x2243e7) {
        _0x34a632[_0x5ddb95] = _0x2243e7[_0x5ddb95];
      }
      _0x2243e7 = _0x34a632;
      var _0x468a8c = _0x3b09e1.nextfd(_0x437e9d, _0xee5ef);
      _0x2243e7.fd = _0x468a8c;
      _0x3b09e1.streams[_0x468a8c] = _0x2243e7;
      return _0x2243e7;
    },
    closeStream: function (_0x43ae82) {
      _0x3b09e1.streams[_0x43ae82] = null;
    },
    chrdev_stream_ops: {
      open: function (_0xe2740d) {
        var _0x36c886 = _0x3b09e1.getDevice(_0xe2740d.node.rdev);
        _0xe2740d.stream_ops = _0x36c886.stream_ops;
        if (_0xe2740d.stream_ops.open) {
          _0xe2740d.stream_ops.open(_0xe2740d);
        }
      },
      llseek: function () {
        throw new _0x3b09e1.ErrnoError(70);
      }
    },
    major: function (_0x105fba) {
      return _0x105fba >> 8;
    },
    minor: function (_0x57436a) {
      return _0x57436a & 255;
    },
    makedev: function (_0x53b561, _0x471018) {
      return _0x53b561 << 8 | _0x471018;
    },
    registerDevice: function (_0x3e001f, _0x5d46c6) {
      _0x3b09e1.devices[_0x3e001f] = {
        stream_ops: _0x5d46c6
      };
    },
    getDevice: function (_0x2706d4) {
      return _0x3b09e1.devices[_0x2706d4];
    },
    getMounts: function (_0x237660) {
      var _0x199d79 = [];
      var _0x49b603 = [_0x237660];
      while (_0x49b603.length) {
        var _0x4c1c73 = _0x49b603.pop();
        _0x199d79.push(_0x4c1c73);
        _0x49b603.push.apply(_0x49b603, _0x4c1c73.mounts);
      }
      return _0x199d79;
    },
    syncfs: function (_0x4a11d8, _0x4c1613) {
      if (typeof _0x4a11d8 === "function") {
        _0x4c1613 = _0x4a11d8;
        _0x4a11d8 = false;
      }
      _0x3b09e1.syncFSRequests++;
      if (_0x3b09e1.syncFSRequests > 1) {
        _0x4677f2("warning: " + _0x3b09e1.syncFSRequests + " FS.syncfs operations in flight at once, probably just doing extra work");
      }
      var _0x33c42a = _0x3b09e1.getMounts(_0x3b09e1.root.mount);
      var _0x5b902d = 0;
      function _0x51ddfb(_0x36fadf) {
        _0x3b09e1.syncFSRequests--;
        return _0x4c1613(_0x36fadf);
      }
      function _0x3c9e06(_0x2e23b5) {
        if (_0x2e23b5) {
          if (!_0x3c9e06.errored) {
            _0x3c9e06.errored = true;
            return _0x51ddfb(_0x2e23b5);
          }
          return;
        }
        if (++_0x5b902d >= _0x33c42a.length) {
          _0x51ddfb(null);
        }
      }
      _0x33c42a.forEach(function (_0x1df19f) {
        if (!_0x1df19f.type.syncfs) {
          return _0x3c9e06(null);
        }
        _0x1df19f.type.syncfs(_0x1df19f, _0x4a11d8, _0x3c9e06);
      });
    },
    mount: function (_0x287c04, _0x129285, _0x5ad10d) {
      var _0x12bfbd = _0x5ad10d === "/";
      var _0x1fe3af = !_0x5ad10d;
      var _0x513fe9;
      if (_0x12bfbd && _0x3b09e1.root) {
        throw new _0x3b09e1.ErrnoError(10);
      } else if (!_0x12bfbd && !_0x1fe3af) {
        var _0x13fc08 = _0x3b09e1.lookupPath(_0x5ad10d, {
          follow_mount: false
        });
        _0x5ad10d = _0x13fc08.path;
        _0x513fe9 = _0x13fc08.node;
        if (_0x3b09e1.isMountpoint(_0x513fe9)) {
          throw new _0x3b09e1.ErrnoError(10);
        }
        if (!_0x3b09e1.isDir(_0x513fe9.mode)) {
          throw new _0x3b09e1.ErrnoError(54);
        }
      }
      var _0x4d09c9 = {
        type: _0x287c04,
        opts: _0x129285,
        mountpoint: _0x5ad10d,
        mounts: []
      };
      var _0x593f99 = _0x287c04.mount(_0x4d09c9);
      _0x593f99.mount = _0x4d09c9;
      _0x4d09c9.root = _0x593f99;
      if (_0x12bfbd) {
        _0x3b09e1.root = _0x593f99;
      } else if (_0x513fe9) {
        _0x513fe9.mounted = _0x4d09c9;
        if (_0x513fe9.mount) {
          _0x513fe9.mount.mounts.push(_0x4d09c9);
        }
      }
      return _0x593f99;
    },
    unmount: function (_0xf0e291) {
      var _0x2008ca = _0x3b09e1.lookupPath(_0xf0e291, {
        follow_mount: false
      });
      if (!_0x3b09e1.isMountpoint(_0x2008ca.node)) {
        throw new _0x3b09e1.ErrnoError(28);
      }
      var _0x52f158 = _0x2008ca.node;
      var _0x2a6aa5 = _0x52f158.mounted;
      var _0x27f7ec = _0x3b09e1.getMounts(_0x2a6aa5);
      Object.keys(_0x3b09e1.nameTable).forEach(function (_0x5cf753) {
        var _0x2ffe74 = _0x3b09e1.nameTable[_0x5cf753];
        while (_0x2ffe74) {
          var _0x48f206 = _0x2ffe74.name_next;
          if (_0x27f7ec.includes(_0x2ffe74.mount)) {
            _0x3b09e1.destroyNode(_0x2ffe74);
          }
          _0x2ffe74 = _0x48f206;
        }
      });
      _0x52f158.mounted = null;
      var _0x23084a = _0x52f158.mount.mounts.indexOf(_0x2a6aa5);
      _0x52f158.mount.mounts.splice(_0x23084a, 1);
    },
    lookup: function (_0x18e76f, _0x23f986) {
      return _0x18e76f.node_ops.lookup(_0x18e76f, _0x23f986);
    },
    mknod: function (_0x5376b7, _0x3c84ef, _0x363812) {
      var _0xee8861 = _0x3b09e1.lookupPath(_0x5376b7, {
        parent: true
      });
      var _0x5ed123 = _0xee8861.node;
      var _0x3db8c7 = _0xd5d702.basename(_0x5376b7);
      if (!_0x3db8c7 || _0x3db8c7 === "." || _0x3db8c7 === "..") {
        throw new _0x3b09e1.ErrnoError(28);
      }
      var _0x1fa09c = _0x3b09e1.mayCreate(_0x5ed123, _0x3db8c7);
      if (_0x1fa09c) {
        throw new _0x3b09e1.ErrnoError(_0x1fa09c);
      }
      if (!_0x5ed123.node_ops.mknod) {
        throw new _0x3b09e1.ErrnoError(63);
      }
      return _0x5ed123.node_ops.mknod(_0x5ed123, _0x3db8c7, _0x3c84ef, _0x363812);
    },
    create: function (_0x14884e, _0x2024bf) {
      _0x2024bf = _0x2024bf !== undefined ? _0x2024bf : 438;
      _0x2024bf &= 4095;
      _0x2024bf |= 32768;
      return _0x3b09e1.mknod(_0x14884e, _0x2024bf, 0);
    },
    mkdir: function (_0x48e7eb, _0x598ab6) {
      _0x598ab6 = _0x598ab6 !== undefined ? _0x598ab6 : 511;
      _0x598ab6 &= 1023;
      _0x598ab6 |= 16384;
      return _0x3b09e1.mknod(_0x48e7eb, _0x598ab6, 0);
    },
    mkdirTree: function (_0x570ca1, _0x1694a6) {
      var _0x2031f7 = _0x570ca1.split("/");
      var _0x282cfb = "";
      for (var _0x3e59a5 = 0; _0x3e59a5 < _0x2031f7.length; ++_0x3e59a5) {
        if (!_0x2031f7[_0x3e59a5]) {
          continue;
        }
        _0x282cfb += "/" + _0x2031f7[_0x3e59a5];
        try {
          _0x3b09e1.mkdir(_0x282cfb, _0x1694a6);
        } catch (_0x377547) {
          if (_0x377547.errno != 20) {
            throw _0x377547;
          }
        }
      }
    },
    mkdev: function (_0x827134, _0x10eb51, _0x3b0f70) {
      if (typeof _0x3b0f70 === "undefined") {
        _0x3b0f70 = _0x10eb51;
        _0x10eb51 = 438;
      }
      _0x10eb51 |= 8192;
      return _0x3b09e1.mknod(_0x827134, _0x10eb51, _0x3b0f70);
    },
    symlink: function (_0x49224b, _0xd93605) {
      if (!_0x4617c8.resolve(_0x49224b)) {
        throw new _0x3b09e1.ErrnoError(44);
      }
      var _0x18a51d = _0x3b09e1.lookupPath(_0xd93605, {
        parent: true
      });
      var _0x79de02 = _0x18a51d.node;
      if (!_0x79de02) {
        throw new _0x3b09e1.ErrnoError(44);
      }
      var _0x53943f = _0xd5d702.basename(_0xd93605);
      var _0x370182 = _0x3b09e1.mayCreate(_0x79de02, _0x53943f);
      if (_0x370182) {
        throw new _0x3b09e1.ErrnoError(_0x370182);
      }
      if (!_0x79de02.node_ops.symlink) {
        throw new _0x3b09e1.ErrnoError(63);
      }
      return _0x79de02.node_ops.symlink(_0x79de02, _0x53943f, _0x49224b);
    },
    rename: function (_0x35ca54, _0x25fae8) {
      var _0x54bf5b = _0xd5d702.dirname(_0x35ca54);
      var _0x5d7626 = _0xd5d702.dirname(_0x25fae8);
      var _0x4cd9c5 = _0xd5d702.basename(_0x35ca54);
      var _0x5c7a8c = _0xd5d702.basename(_0x25fae8);
      var _0x38fd70;
      var _0x567ce3;
      var _0x56e145;
      _0x38fd70 = _0x3b09e1.lookupPath(_0x35ca54, {
        parent: true
      });
      _0x567ce3 = _0x38fd70.node;
      _0x38fd70 = _0x3b09e1.lookupPath(_0x25fae8, {
        parent: true
      });
      _0x56e145 = _0x38fd70.node;
      if (!_0x567ce3 || !_0x56e145) {
        throw new _0x3b09e1.ErrnoError(44);
      }
      if (_0x567ce3.mount !== _0x56e145.mount) {
        throw new _0x3b09e1.ErrnoError(75);
      }
      var _0x3b24dd = _0x3b09e1.lookupNode(_0x567ce3, _0x4cd9c5);
      var _0x36de17 = _0x4617c8.relative(_0x35ca54, _0x5d7626);
      if (_0x36de17.charAt(0) !== ".") {
        throw new _0x3b09e1.ErrnoError(28);
      }
      _0x36de17 = _0x4617c8.relative(_0x25fae8, _0x54bf5b);
      if (_0x36de17.charAt(0) !== ".") {
        throw new _0x3b09e1.ErrnoError(55);
      }
      var _0x1e4a17;
      try {
        _0x1e4a17 = _0x3b09e1.lookupNode(_0x56e145, _0x5c7a8c);
      } catch (_0x306ce7) {}
      if (_0x3b24dd === _0x1e4a17) {
        return;
      }
      var _0x2fbe20 = _0x3b09e1.isDir(_0x3b24dd.mode);
      var _0x59370b = _0x3b09e1.mayDelete(_0x567ce3, _0x4cd9c5, _0x2fbe20);
      if (_0x59370b) {
        throw new _0x3b09e1.ErrnoError(_0x59370b);
      }
      _0x59370b = _0x1e4a17 ? _0x3b09e1.mayDelete(_0x56e145, _0x5c7a8c, _0x2fbe20) : _0x3b09e1.mayCreate(_0x56e145, _0x5c7a8c);
      if (_0x59370b) {
        throw new _0x3b09e1.ErrnoError(_0x59370b);
      }
      if (!_0x567ce3.node_ops.rename) {
        throw new _0x3b09e1.ErrnoError(63);
      }
      if (_0x3b09e1.isMountpoint(_0x3b24dd) || _0x1e4a17 && _0x3b09e1.isMountpoint(_0x1e4a17)) {
        throw new _0x3b09e1.ErrnoError(10);
      }
      if (_0x56e145 !== _0x567ce3) {
        _0x59370b = _0x3b09e1.nodePermissions(_0x567ce3, "w");
        if (_0x59370b) {
          throw new _0x3b09e1.ErrnoError(_0x59370b);
        }
      }
      try {
        if (_0x3b09e1.trackingDelegate.willMovePath) {
          _0x3b09e1.trackingDelegate.willMovePath(_0x35ca54, _0x25fae8);
        }
      } catch (_0x24cd67) {
        _0x4677f2("FS.trackingDelegate['willMovePath']('" + _0x35ca54 + "', '" + _0x25fae8 + "') threw an exception: " + _0x24cd67.message);
      }
      _0x3b09e1.hashRemoveNode(_0x3b24dd);
      try {
        _0x567ce3.node_ops.rename(_0x3b24dd, _0x56e145, _0x5c7a8c);
      } catch (_0xccaf22) {
        throw _0xccaf22;
      } finally {
        _0x3b09e1.hashAddNode(_0x3b24dd);
      }
      try {
        if (_0x3b09e1.trackingDelegate.onMovePath) {
          _0x3b09e1.trackingDelegate.onMovePath(_0x35ca54, _0x25fae8);
        }
      } catch (_0x50f0b4) {
        _0x4677f2("FS.trackingDelegate['onMovePath']('" + _0x35ca54 + "', '" + _0x25fae8 + "') threw an exception: " + _0x50f0b4.message);
      }
    },
    rmdir: function (_0x4a4c33) {
      var _0x1163ec = _0x3b09e1.lookupPath(_0x4a4c33, {
        parent: true
      });
      var _0x7873d6 = _0x1163ec.node;
      var _0x31d616 = _0xd5d702.basename(_0x4a4c33);
      var _0x351f85 = _0x3b09e1.lookupNode(_0x7873d6, _0x31d616);
      var _0x4af765 = _0x3b09e1.mayDelete(_0x7873d6, _0x31d616, true);
      if (_0x4af765) {
        throw new _0x3b09e1.ErrnoError(_0x4af765);
      }
      if (!_0x7873d6.node_ops.rmdir) {
        throw new _0x3b09e1.ErrnoError(63);
      }
      if (_0x3b09e1.isMountpoint(_0x351f85)) {
        throw new _0x3b09e1.ErrnoError(10);
      }
      try {
        if (_0x3b09e1.trackingDelegate.willDeletePath) {
          _0x3b09e1.trackingDelegate.willDeletePath(_0x4a4c33);
        }
      } catch (_0x492ce6) {
        _0x4677f2("FS.trackingDelegate['willDeletePath']('" + _0x4a4c33 + "') threw an exception: " + _0x492ce6.message);
      }
      _0x7873d6.node_ops.rmdir(_0x7873d6, _0x31d616);
      _0x3b09e1.destroyNode(_0x351f85);
      try {
        if (_0x3b09e1.trackingDelegate.onDeletePath) {
          _0x3b09e1.trackingDelegate.onDeletePath(_0x4a4c33);
        }
      } catch (_0x308ee9) {
        _0x4677f2("FS.trackingDelegate['onDeletePath']('" + _0x4a4c33 + "') threw an exception: " + _0x308ee9.message);
      }
    },
    readdir: function (_0x35f988) {
      var _0xfcf8ee = _0x3b09e1.lookupPath(_0x35f988, {
        follow: true
      });
      var _0x34583c = _0xfcf8ee.node;
      if (!_0x34583c.node_ops.readdir) {
        throw new _0x3b09e1.ErrnoError(54);
      }
      return _0x34583c.node_ops.readdir(_0x34583c);
    },
    unlink: function (_0x5de9a2) {
      var _0xdea651 = _0x3b09e1.lookupPath(_0x5de9a2, {
        parent: true
      });
      var _0x46715d = _0xdea651.node;
      var _0x18967e = _0xd5d702.basename(_0x5de9a2);
      var _0x13c8ad = _0x3b09e1.lookupNode(_0x46715d, _0x18967e);
      var _0x104640 = _0x3b09e1.mayDelete(_0x46715d, _0x18967e, false);
      if (_0x104640) {
        throw new _0x3b09e1.ErrnoError(_0x104640);
      }
      if (!_0x46715d.node_ops.unlink) {
        throw new _0x3b09e1.ErrnoError(63);
      }
      if (_0x3b09e1.isMountpoint(_0x13c8ad)) {
        throw new _0x3b09e1.ErrnoError(10);
      }
      try {
        if (_0x3b09e1.trackingDelegate.willDeletePath) {
          _0x3b09e1.trackingDelegate.willDeletePath(_0x5de9a2);
        }
      } catch (_0x22eb7d) {
        _0x4677f2("FS.trackingDelegate['willDeletePath']('" + _0x5de9a2 + "') threw an exception: " + _0x22eb7d.message);
      }
      _0x46715d.node_ops.unlink(_0x46715d, _0x18967e);
      _0x3b09e1.destroyNode(_0x13c8ad);
      try {
        if (_0x3b09e1.trackingDelegate.onDeletePath) {
          _0x3b09e1.trackingDelegate.onDeletePath(_0x5de9a2);
        }
      } catch (_0x262e29) {
        _0x4677f2("FS.trackingDelegate['onDeletePath']('" + _0x5de9a2 + "') threw an exception: " + _0x262e29.message);
      }
    },
    readlink: function (_0x362f93) {
      var _0x1e2c02 = _0x3b09e1.lookupPath(_0x362f93);
      var _0x5645a1 = _0x1e2c02.node;
      if (!_0x5645a1) {
        throw new _0x3b09e1.ErrnoError(44);
      }
      if (!_0x5645a1.node_ops.readlink) {
        throw new _0x3b09e1.ErrnoError(28);
      }
      return _0x4617c8.resolve(_0x3b09e1.getPath(_0x5645a1.parent), _0x5645a1.node_ops.readlink(_0x5645a1));
    },
    stat: function (_0x9550d6, _0x579613) {
      var _0x25be40 = _0x3b09e1.lookupPath(_0x9550d6, {
        follow: !_0x579613
      });
      var _0x511bb9 = _0x25be40.node;
      if (!_0x511bb9) {
        throw new _0x3b09e1.ErrnoError(44);
      }
      if (!_0x511bb9.node_ops.getattr) {
        throw new _0x3b09e1.ErrnoError(63);
      }
      return _0x511bb9.node_ops.getattr(_0x511bb9);
    },
    lstat: function (_0x3187f2) {
      return _0x3b09e1.stat(_0x3187f2, true);
    },
    chmod: function (_0x157b3d, _0x30a702, _0x5250f2) {
      var _0x1930e5;
      if (typeof _0x157b3d === "string") {
        var _0x588974 = _0x3b09e1.lookupPath(_0x157b3d, {
          follow: !_0x5250f2
        });
        _0x1930e5 = _0x588974.node;
      } else {
        _0x1930e5 = _0x157b3d;
      }
      if (!_0x1930e5.node_ops.setattr) {
        throw new _0x3b09e1.ErrnoError(63);
      }
      _0x1930e5.node_ops.setattr(_0x1930e5, {
        mode: _0x30a702 & 4095 | _0x1930e5.mode & ~4095,
        timestamp: Date.now()
      });
    },
    lchmod: function (_0x362d90, _0x558e61) {
      _0x3b09e1.chmod(_0x362d90, _0x558e61, true);
    },
    fchmod: function (_0x37da90, _0x270fb3) {
      var _0x57813d = _0x3b09e1.getStream(_0x37da90);
      if (!_0x57813d) {
        throw new _0x3b09e1.ErrnoError(8);
      }
      _0x3b09e1.chmod(_0x57813d.node, _0x270fb3);
    },
    chown: function (_0x2df168, _0x4e17c2, _0x5e306f, _0x39c15c) {
      var _0x41e60a;
      if (typeof _0x2df168 === "string") {
        var _0x3fe5ce = _0x3b09e1.lookupPath(_0x2df168, {
          follow: !_0x39c15c
        });
        _0x41e60a = _0x3fe5ce.node;
      } else {
        _0x41e60a = _0x2df168;
      }
      if (!_0x41e60a.node_ops.setattr) {
        throw new _0x3b09e1.ErrnoError(63);
      }
      _0x41e60a.node_ops.setattr(_0x41e60a, {
        timestamp: Date.now()
      });
    },
    lchown: function (_0x41a7ce, _0x437277, _0x29b80a) {
      _0x3b09e1.chown(_0x41a7ce, _0x437277, _0x29b80a, true);
    },
    fchown: function (_0x43913b, _0x3d96cc, _0x54c2c6) {
      var _0x41e9aa = _0x3b09e1.getStream(_0x43913b);
      if (!_0x41e9aa) {
        throw new _0x3b09e1.ErrnoError(8);
      }
      _0x3b09e1.chown(_0x41e9aa.node, _0x3d96cc, _0x54c2c6);
    },
    truncate: function (_0x14608f, _0x58fd59) {
      if (_0x58fd59 < 0) {
        throw new _0x3b09e1.ErrnoError(28);
      }
      var _0x3e7a44;
      if (typeof _0x14608f === "string") {
        var _0x38b1ee = _0x3b09e1.lookupPath(_0x14608f, {
          follow: true
        });
        _0x3e7a44 = _0x38b1ee.node;
      } else {
        _0x3e7a44 = _0x14608f;
      }
      if (!_0x3e7a44.node_ops.setattr) {
        throw new _0x3b09e1.ErrnoError(63);
      }
      if (_0x3b09e1.isDir(_0x3e7a44.mode)) {
        throw new _0x3b09e1.ErrnoError(31);
      }
      if (!_0x3b09e1.isFile(_0x3e7a44.mode)) {
        throw new _0x3b09e1.ErrnoError(28);
      }
      var _0x51c6fd = _0x3b09e1.nodePermissions(_0x3e7a44, "w");
      if (_0x51c6fd) {
        throw new _0x3b09e1.ErrnoError(_0x51c6fd);
      }
      _0x3e7a44.node_ops.setattr(_0x3e7a44, {
        size: _0x58fd59,
        timestamp: Date.now()
      });
    },
    ftruncate: function (_0x140749, _0x4e762a) {
      var _0x2626d9 = _0x3b09e1.getStream(_0x140749);
      if (!_0x2626d9) {
        throw new _0x3b09e1.ErrnoError(8);
      }
      if ((_0x2626d9.flags & 2097155) === 0) {
        throw new _0x3b09e1.ErrnoError(28);
      }
      _0x3b09e1.truncate(_0x2626d9.node, _0x4e762a);
    },
    utime: function (_0x5d179b, _0x181585, _0x1e2c6d) {
      var _0x228e4f = _0x3b09e1.lookupPath(_0x5d179b, {
        follow: true
      });
      var _0x3289c9 = _0x228e4f.node;
      _0x3289c9.node_ops.setattr(_0x3289c9, {
        timestamp: Math.max(_0x181585, _0x1e2c6d)
      });
    },
    open: function (_0x44cfcc, _0x5c75e6, _0x41b72a, _0x272722, _0x1f7860) {
      if (_0x44cfcc === "") {
        throw new _0x3b09e1.ErrnoError(44);
      }
      _0x5c75e6 = typeof _0x5c75e6 === "string" ? _0x3b09e1.modeStringToFlags(_0x5c75e6) : _0x5c75e6;
      _0x41b72a = typeof _0x41b72a === "undefined" ? 438 : _0x41b72a;
      if (_0x5c75e6 & 64) {
        _0x41b72a = _0x41b72a & 4095 | 32768;
      } else {
        _0x41b72a = 0;
      }
      var _0x42c5a5;
      if (typeof _0x44cfcc === "object") {
        _0x42c5a5 = _0x44cfcc;
      } else {
        _0x44cfcc = _0xd5d702.normalize(_0x44cfcc);
        try {
          var _0x2802f5 = _0x3b09e1.lookupPath(_0x44cfcc, {
            follow: !(_0x5c75e6 & 131072)
          });
          _0x42c5a5 = _0x2802f5.node;
        } catch (_0x5ac99b) {}
      }
      var _0x19c7ac = false;
      if (_0x5c75e6 & 64) {
        if (_0x42c5a5) {
          if (_0x5c75e6 & 128) {
            throw new _0x3b09e1.ErrnoError(20);
          }
        } else {
          _0x42c5a5 = _0x3b09e1.mknod(_0x44cfcc, _0x41b72a, 0);
          _0x19c7ac = true;
        }
      }
      if (!_0x42c5a5) {
        throw new _0x3b09e1.ErrnoError(44);
      }
      if (_0x3b09e1.isChrdev(_0x42c5a5.mode)) {
        _0x5c75e6 &= ~512;
      }
      if (_0x5c75e6 & 65536 && !_0x3b09e1.isDir(_0x42c5a5.mode)) {
        throw new _0x3b09e1.ErrnoError(54);
      }
      if (!_0x19c7ac) {
        var _0x1c5380 = _0x3b09e1.mayOpen(_0x42c5a5, _0x5c75e6);
        if (_0x1c5380) {
          throw new _0x3b09e1.ErrnoError(_0x1c5380);
        }
      }
      if (_0x5c75e6 & 512) {
        _0x3b09e1.truncate(_0x42c5a5, 0);
      }
      _0x5c75e6 &= ~131712;
      var _0x1deb7a = _0x3b09e1.createStream({
        node: _0x42c5a5,
        path: _0x3b09e1.getPath(_0x42c5a5),
        flags: _0x5c75e6,
        seekable: true,
        position: 0,
        stream_ops: _0x42c5a5.stream_ops,
        ungotten: [],
        error: false
      }, _0x272722, _0x1f7860);
      if (_0x1deb7a.stream_ops.open) {
        _0x1deb7a.stream_ops.open(_0x1deb7a);
      }
      if (_0x2c3fe3.logReadFiles && !(_0x5c75e6 & 1)) {
        if (!_0x3b09e1.readFiles) {
          _0x3b09e1.readFiles = {};
        }
        if (!(_0x44cfcc in _0x3b09e1.readFiles)) {
          _0x3b09e1.readFiles[_0x44cfcc] = 1;
          _0x4677f2("FS.trackingDelegate error on read file: " + _0x44cfcc);
        }
      }
      try {
        if (_0x3b09e1.trackingDelegate.onOpenFile) {
          var _0x692a15 = 0;
          if ((_0x5c75e6 & 2097155) !== 1) {
            _0x692a15 |= _0x3b09e1.tracking.openFlags.READ;
          }
          if ((_0x5c75e6 & 2097155) !== 0) {
            _0x692a15 |= _0x3b09e1.tracking.openFlags.WRITE;
          }
          _0x3b09e1.trackingDelegate.onOpenFile(_0x44cfcc, _0x692a15);
        }
      } catch (_0xf17fc3) {
        _0x4677f2("FS.trackingDelegate['onOpenFile']('" + _0x44cfcc + "', flags) threw an exception: " + _0xf17fc3.message);
      }
      return _0x1deb7a;
    },
    close: function (_0x3d509b) {
      if (_0x3b09e1.isClosed(_0x3d509b)) {
        throw new _0x3b09e1.ErrnoError(8);
      }
      if (_0x3d509b.getdents) {
        _0x3d509b.getdents = null;
      }
      try {
        if (_0x3d509b.stream_ops.close) {
          _0x3d509b.stream_ops.close(_0x3d509b);
        }
      } catch (_0x660efc) {
        throw _0x660efc;
      } finally {
        _0x3b09e1.closeStream(_0x3d509b.fd);
      }
      _0x3d509b.fd = null;
    },
    isClosed: function (_0x591bb4) {
      return _0x591bb4.fd === null;
    },
    llseek: function (_0x320179, _0x7f093f, _0x53a99c) {
      if (_0x3b09e1.isClosed(_0x320179)) {
        throw new _0x3b09e1.ErrnoError(8);
      }
      if (!_0x320179.seekable || !_0x320179.stream_ops.llseek) {
        throw new _0x3b09e1.ErrnoError(70);
      }
      if (_0x53a99c != 0 && _0x53a99c != 1 && _0x53a99c != 2) {
        throw new _0x3b09e1.ErrnoError(28);
      }
      _0x320179.position = _0x320179.stream_ops.llseek(_0x320179, _0x7f093f, _0x53a99c);
      _0x320179.ungotten = [];
      return _0x320179.position;
    },
    read: function (_0x3b3c7b, _0xc4b79e, _0x4f41a7, _0x2826aa, _0x458146) {
      if (_0x2826aa < 0 || _0x458146 < 0) {
        throw new _0x3b09e1.ErrnoError(28);
      }
      if (_0x3b09e1.isClosed(_0x3b3c7b)) {
        throw new _0x3b09e1.ErrnoError(8);
      }
      if ((_0x3b3c7b.flags & 2097155) === 1) {
        throw new _0x3b09e1.ErrnoError(8);
      }
      if (_0x3b09e1.isDir(_0x3b3c7b.node.mode)) {
        throw new _0x3b09e1.ErrnoError(31);
      }
      if (!_0x3b3c7b.stream_ops.read) {
        throw new _0x3b09e1.ErrnoError(28);
      }
      var _0x25dc51 = typeof _0x458146 !== "undefined";
      if (!_0x25dc51) {
        _0x458146 = _0x3b3c7b.position;
      } else if (!_0x3b3c7b.seekable) {
        throw new _0x3b09e1.ErrnoError(70);
      }
      var _0x49a843 = _0x3b3c7b.stream_ops.read(_0x3b3c7b, _0xc4b79e, _0x4f41a7, _0x2826aa, _0x458146);
      if (!_0x25dc51) {
        _0x3b3c7b.position += _0x49a843;
      }
      return _0x49a843;
    },
    write: function (_0x34fa13, _0x5b024b, _0x2a80ff, _0x5841bd, _0x10e52e, _0x3067f4) {
      if (_0x5841bd < 0 || _0x10e52e < 0) {
        throw new _0x3b09e1.ErrnoError(28);
      }
      if (_0x3b09e1.isClosed(_0x34fa13)) {
        throw new _0x3b09e1.ErrnoError(8);
      }
      if ((_0x34fa13.flags & 2097155) === 0) {
        throw new _0x3b09e1.ErrnoError(8);
      }
      if (_0x3b09e1.isDir(_0x34fa13.node.mode)) {
        throw new _0x3b09e1.ErrnoError(31);
      }
      if (!_0x34fa13.stream_ops.write) {
        throw new _0x3b09e1.ErrnoError(28);
      }
      if (_0x34fa13.seekable && _0x34fa13.flags & 1024) {
        _0x3b09e1.llseek(_0x34fa13, 0, 2);
      }
      var _0x486282 = typeof _0x10e52e !== "undefined";
      if (!_0x486282) {
        _0x10e52e = _0x34fa13.position;
      } else if (!_0x34fa13.seekable) {
        throw new _0x3b09e1.ErrnoError(70);
      }
      var _0x332003 = _0x34fa13.stream_ops.write(_0x34fa13, _0x5b024b, _0x2a80ff, _0x5841bd, _0x10e52e, _0x3067f4);
      if (!_0x486282) {
        _0x34fa13.position += _0x332003;
      }
      try {
        if (_0x34fa13.path && _0x3b09e1.trackingDelegate.onWriteToFile) {
          _0x3b09e1.trackingDelegate.onWriteToFile(_0x34fa13.path);
        }
      } catch (_0x545018) {
        _0x4677f2("FS.trackingDelegate['onWriteToFile']('" + _0x34fa13.path + "') threw an exception: " + _0x545018.message);
      }
      return _0x332003;
    },
    allocate: function (_0x2bae6b, _0x1f0777, _0x53b51c) {
      if (_0x3b09e1.isClosed(_0x2bae6b)) {
        throw new _0x3b09e1.ErrnoError(8);
      }
      if (_0x1f0777 < 0 || _0x53b51c <= 0) {
        throw new _0x3b09e1.ErrnoError(28);
      }
      if ((_0x2bae6b.flags & 2097155) === 0) {
        throw new _0x3b09e1.ErrnoError(8);
      }
      if (!_0x3b09e1.isFile(_0x2bae6b.node.mode) && !_0x3b09e1.isDir(_0x2bae6b.node.mode)) {
        throw new _0x3b09e1.ErrnoError(43);
      }
      if (!_0x2bae6b.stream_ops.allocate) {
        throw new _0x3b09e1.ErrnoError(138);
      }
      _0x2bae6b.stream_ops.allocate(_0x2bae6b, _0x1f0777, _0x53b51c);
    },
    mmap: function (_0x92a1c5, _0x4a49cd, _0x2ae42c, _0x3ec915, _0x1bd9dd, _0x14e721) {
      if ((_0x1bd9dd & 2) !== 0 && (_0x14e721 & 2) === 0 && (_0x92a1c5.flags & 2097155) !== 2) {
        throw new _0x3b09e1.ErrnoError(2);
      }
      if ((_0x92a1c5.flags & 2097155) === 1) {
        throw new _0x3b09e1.ErrnoError(2);
      }
      if (!_0x92a1c5.stream_ops.mmap) {
        throw new _0x3b09e1.ErrnoError(43);
      }
      return _0x92a1c5.stream_ops.mmap(_0x92a1c5, _0x4a49cd, _0x2ae42c, _0x3ec915, _0x1bd9dd, _0x14e721);
    },
    msync: function (_0x234504, _0xfd1615, _0x1f44f4, _0x4294d0, _0x15c2bb) {
      if (!_0x234504 || !_0x234504.stream_ops.msync) {
        return 0;
      }
      return _0x234504.stream_ops.msync(_0x234504, _0xfd1615, _0x1f44f4, _0x4294d0, _0x15c2bb);
    },
    munmap: function (_0x568f8c) {
      return 0;
    },
    ioctl: function (_0x46e3d9, _0x37af5d, _0x44042f) {
      if (!_0x46e3d9.stream_ops.ioctl) {
        throw new _0x3b09e1.ErrnoError(59);
      }
      return _0x46e3d9.stream_ops.ioctl(_0x46e3d9, _0x37af5d, _0x44042f);
    },
    readFile: function (_0x53e457, _0x239483) {
      _0x239483 = _0x239483 || {};
      _0x239483.flags = _0x239483.flags || 0;
      _0x239483.encoding = _0x239483.encoding || "binary";
      if (_0x239483.encoding !== "utf8" && _0x239483.encoding !== "binary") {
        throw new Error("Invalid encoding type \"" + _0x239483.encoding + "\"");
      }
      var _0x2a336d;
      var _0x462bf1 = _0x3b09e1.open(_0x53e457, _0x239483.flags);
      var _0x2c3804 = _0x3b09e1.stat(_0x53e457);
      var _0x4e187e = _0x2c3804.size;
      var _0x10a89c = new Uint8Array(_0x4e187e);
      _0x3b09e1.read(_0x462bf1, _0x10a89c, 0, _0x4e187e, 0);
      if (_0x239483.encoding === "utf8") {
        _0x2a336d = _0xcb370(_0x10a89c, 0);
      } else if (_0x239483.encoding === "binary") {
        _0x2a336d = _0x10a89c;
      }
      _0x3b09e1.close(_0x462bf1);
      return _0x2a336d;
    },
    writeFile: function (_0x49e2d9, _0xfe3a51, _0x39b082) {
      _0x39b082 = _0x39b082 || {};
      _0x39b082.flags = _0x39b082.flags || 577;
      var _0x6b1ac = _0x3b09e1.open(_0x49e2d9, _0x39b082.flags, _0x39b082.mode);
      if (typeof _0xfe3a51 === "string") {
        var _0x3196bd = new Uint8Array(_0x40b564(_0xfe3a51) + 1);
        var _0x2d7936 = _0x3e72f1(_0xfe3a51, _0x3196bd, 0, _0x3196bd.length);
        _0x3b09e1.write(_0x6b1ac, _0x3196bd, 0, _0x2d7936, undefined, _0x39b082.canOwn);
      } else if (ArrayBuffer.isView(_0xfe3a51)) {
        _0x3b09e1.write(_0x6b1ac, _0xfe3a51, 0, _0xfe3a51.byteLength, undefined, _0x39b082.canOwn);
      } else {
        throw new Error("Unsupported data type");
      }
      _0x3b09e1.close(_0x6b1ac);
    },
    cwd: function () {
      return _0x3b09e1.currentPath;
    },
    chdir: function (_0x40d318) {
      var _0x16c848 = _0x3b09e1.lookupPath(_0x40d318, {
        follow: true
      });
      if (_0x16c848.node === null) {
        throw new _0x3b09e1.ErrnoError(44);
      }
      if (!_0x3b09e1.isDir(_0x16c848.node.mode)) {
        throw new _0x3b09e1.ErrnoError(54);
      }
      var _0x4a4d92 = _0x3b09e1.nodePermissions(_0x16c848.node, "x");
      if (_0x4a4d92) {
        throw new _0x3b09e1.ErrnoError(_0x4a4d92);
      }
      _0x3b09e1.currentPath = _0x16c848.path;
    },
    createDefaultDirectories: function () {
      _0x3b09e1.mkdir("/tmp");
      _0x3b09e1.mkdir("/home");
      _0x3b09e1.mkdir("/home/web_user");
    },
    createDefaultDevices: function () {
      _0x3b09e1.mkdir("/dev");
      _0x3b09e1.registerDevice(_0x3b09e1.makedev(1, 3), {
        read: function () {
          return 0;
        },
        write: function (_0x2f3089, _0x51459b, _0x564568, _0x1c2ceb, _0x2784a5) {
          return _0x1c2ceb;
        }
      });
      _0x3b09e1.mkdev("/dev/null", _0x3b09e1.makedev(1, 3));
      _0x39252f.register(_0x3b09e1.makedev(5, 0), _0x39252f.default_tty_ops);
      _0x39252f.register(_0x3b09e1.makedev(6, 0), _0x39252f.default_tty1_ops);
      _0x3b09e1.mkdev("/dev/tty", _0x3b09e1.makedev(5, 0));
      _0x3b09e1.mkdev("/dev/tty1", _0x3b09e1.makedev(6, 0));
      var _0x1cd147 = _0x3d546e();
      _0x3b09e1.createDevice("/dev", "random", _0x1cd147);
      _0x3b09e1.createDevice("/dev", "urandom", _0x1cd147);
      _0x3b09e1.mkdir("/dev/shm");
      _0x3b09e1.mkdir("/dev/shm/tmp");
    },
    createSpecialDirectories: function () {
      _0x3b09e1.mkdir("/proc");
      var _0x31cb53 = _0x3b09e1.mkdir("/proc/self");
      _0x3b09e1.mkdir("/proc/self/fd");
      _0x3b09e1.mount({
        mount: function () {
          var _0x2ea435 = _0x3b09e1.createNode(_0x31cb53, "fd", 16895, 73);
          _0x2ea435.node_ops = {
            lookup: function (_0x274f72, _0x4c96c7) {
              var _0x17599b = +_0x4c96c7;
              var _0x829675 = _0x3b09e1.getStream(_0x17599b);
              if (!_0x829675) {
                throw new _0x3b09e1.ErrnoError(8);
              }
              var _0x1de8ba = {
                parent: null,
                mount: {
                  mountpoint: "fake"
                },
                node_ops: {
                  readlink: function () {
                    return _0x829675.path;
                  }
                }
              };
              _0x1de8ba.parent = _0x1de8ba;
              return _0x1de8ba;
            }
          };
          return _0x2ea435;
        }
      }, {}, "/proc/self/fd");
    },
    createStandardStreams: function () {
      if (_0x2c3fe3.stdin) {
        _0x3b09e1.createDevice("/dev", "stdin", _0x2c3fe3.stdin);
      } else {
        _0x3b09e1.symlink("/dev/tty", "/dev/stdin");
      }
      if (_0x2c3fe3.stdout) {
        _0x3b09e1.createDevice("/dev", "stdout", null, _0x2c3fe3.stdout);
      } else {
        _0x3b09e1.symlink("/dev/tty", "/dev/stdout");
      }
      if (_0x2c3fe3.stderr) {
        _0x3b09e1.createDevice("/dev", "stderr", null, _0x2c3fe3.stderr);
      } else {
        _0x3b09e1.symlink("/dev/tty1", "/dev/stderr");
      }
      var _0x4a66aa = _0x3b09e1.open("/dev/stdin", 0);
      var _0x52c885 = _0x3b09e1.open("/dev/stdout", 1);
      var _0x1bd272 = _0x3b09e1.open("/dev/stderr", 1);
    },
    ensureErrnoError: function () {
      if (_0x3b09e1.ErrnoError) {
        return;
      }
      _0x3b09e1.ErrnoError = function _0x2c1476(_0x18a193, _0x1eb238) {
        this.node = _0x1eb238;
        this.setErrno = function (_0x499b94) {
          this.errno = _0x499b94;
        };
        this.setErrno(_0x18a193);
        this.message = "FS error";
      };
      _0x3b09e1.ErrnoError.prototype = new Error();
      _0x3b09e1.ErrnoError.prototype.constructor = _0x3b09e1.ErrnoError;
      [44].forEach(function (_0xc84464) {
        _0x3b09e1.genericErrors[_0xc84464] = new _0x3b09e1.ErrnoError(_0xc84464);
        _0x3b09e1.genericErrors[_0xc84464].stack = "<generic error, no stack>";
      });
    },
    staticInit: function () {
      _0x3b09e1.ensureErrnoError();
      _0x3b09e1.nameTable = new Array(4096);
      _0x3b09e1.mount(_0x4d3739, {}, "/");
      _0x3b09e1.createDefaultDirectories();
      _0x3b09e1.createDefaultDevices();
      _0x3b09e1.createSpecialDirectories();
      _0x3b09e1.filesystems = {
        MEMFS: _0x4d3739,
        IDBFS: _0x13674c
      };
    },
    init: function (_0xacf55b, _0x4d3a35, _0x4f39ba) {
      _0x3b09e1.init.initialized = true;
      _0x3b09e1.ensureErrnoError();
      _0x2c3fe3.stdin = _0xacf55b || _0x2c3fe3.stdin;
      _0x2c3fe3.stdout = _0x4d3a35 || _0x2c3fe3.stdout;
      _0x2c3fe3.stderr = _0x4f39ba || _0x2c3fe3.stderr;
      _0x3b09e1.createStandardStreams();
    },
    quit: function () {
      _0x3b09e1.init.initialized = false;
      var _0x302222 = _0x2c3fe3._fflush;
      if (_0x302222) {
        _0x302222(0);
      }
      for (var _0x22f6a6 = 0; _0x22f6a6 < _0x3b09e1.streams.length; _0x22f6a6++) {
        var _0x36acf8 = _0x3b09e1.streams[_0x22f6a6];
        if (!_0x36acf8) {
          continue;
        }
        _0x3b09e1.close(_0x36acf8);
      }
    },
    getMode: function (_0x548b3f, _0xcce67d) {
      var _0x25ef7d = 0;
      if (_0x548b3f) {
        _0x25ef7d |= 365;
      }
      if (_0xcce67d) {
        _0x25ef7d |= 146;
      }
      return _0x25ef7d;
    },
    findObject: function (_0x550d06, _0x4dfdc5) {
      var _0x270600 = _0x3b09e1.analyzePath(_0x550d06, _0x4dfdc5);
      if (_0x270600.exists) {
        return _0x270600.object;
      } else {
        return null;
      }
    },
    analyzePath: function (_0x58dc51, _0x4e48eb) {
      try {
        var _0x3f0573 = _0x3b09e1.lookupPath(_0x58dc51, {
          follow: !_0x4e48eb
        });
        _0x58dc51 = _0x3f0573.path;
      } catch (_0x366b4b) {}
      var _0xddf7b2 = {
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
        var _0x3f0573 = _0x3b09e1.lookupPath(_0x58dc51, {
          parent: true
        });
        _0xddf7b2.parentExists = true;
        _0xddf7b2.parentPath = _0x3f0573.path;
        _0xddf7b2.parentObject = _0x3f0573.node;
        _0xddf7b2.name = _0xd5d702.basename(_0x58dc51);
        _0x3f0573 = _0x3b09e1.lookupPath(_0x58dc51, {
          follow: !_0x4e48eb
        });
        _0xddf7b2.exists = true;
        _0xddf7b2.path = _0x3f0573.path;
        _0xddf7b2.object = _0x3f0573.node;
        _0xddf7b2.name = _0x3f0573.node.name;
        _0xddf7b2.isRoot = _0x3f0573.path === "/";
      } catch (_0xa09e31) {
        _0xddf7b2.error = _0xa09e31.errno;
      }
      return _0xddf7b2;
    },
    createPath: function (_0x58c9fa, _0x1fe49a, _0x2f4f6f, _0x17c020) {
      _0x58c9fa = typeof _0x58c9fa === "string" ? _0x58c9fa : _0x3b09e1.getPath(_0x58c9fa);
      var _0x1e000f = _0x1fe49a.split("/").reverse();
      while (_0x1e000f.length) {
        var _0x3bab4f = _0x1e000f.pop();
        if (!_0x3bab4f) {
          continue;
        }
        var _0x4c131f = _0xd5d702.join2(_0x58c9fa, _0x3bab4f);
        try {
          _0x3b09e1.mkdir(_0x4c131f);
        } catch (_0x46d5f4) {}
        _0x58c9fa = _0x4c131f;
      }
      return _0x4c131f;
    },
    createFile: function (_0xb45745, _0x590c82, _0x3d6afb, _0x407d3e, _0x2de7d7) {
      var _0x398110 = _0xd5d702.join2(typeof _0xb45745 === "string" ? _0xb45745 : _0x3b09e1.getPath(_0xb45745), _0x590c82);
      var _0x30e976 = _0x3b09e1.getMode(_0x407d3e, _0x2de7d7);
      return _0x3b09e1.create(_0x398110, _0x30e976);
    },
    createDataFile: function (_0x329eea, _0x3ac215, _0xdb4ac6, _0x416cdf, _0x876b1a, _0x106aa4) {
      var _0x5785ae = _0x3ac215 ? _0xd5d702.join2(typeof _0x329eea === "string" ? _0x329eea : _0x3b09e1.getPath(_0x329eea), _0x3ac215) : _0x329eea;
      var _0x334a97 = _0x3b09e1.getMode(_0x416cdf, _0x876b1a);
      var _0x52234b = _0x3b09e1.create(_0x5785ae, _0x334a97);
      if (_0xdb4ac6) {
        if (typeof _0xdb4ac6 === "string") {
          var _0x933f1a = new Array(_0xdb4ac6.length);
          for (var _0x2bcfc5 = 0, _0x1425fc = _0xdb4ac6.length; _0x2bcfc5 < _0x1425fc; ++_0x2bcfc5) {
            _0x933f1a[_0x2bcfc5] = _0xdb4ac6.charCodeAt(_0x2bcfc5);
          }
          _0xdb4ac6 = _0x933f1a;
        }
        _0x3b09e1.chmod(_0x52234b, _0x334a97 | 146);
        var _0x4bf481 = _0x3b09e1.open(_0x52234b, 577);
        _0x3b09e1.write(_0x4bf481, _0xdb4ac6, 0, _0xdb4ac6.length, 0, _0x106aa4);
        _0x3b09e1.close(_0x4bf481);
        _0x3b09e1.chmod(_0x52234b, _0x334a97);
      }
      return _0x52234b;
    },
    createDevice: function (_0x1dc282, _0x3ca4a8, _0x422b82, _0x5963f7) {
      var _0x3f8386 = _0xd5d702.join2(typeof _0x1dc282 === "string" ? _0x1dc282 : _0x3b09e1.getPath(_0x1dc282), _0x3ca4a8);
      var _0x19c185 = _0x3b09e1.getMode(!!_0x422b82, !!_0x5963f7);
      if (!_0x3b09e1.createDevice.major) {
        _0x3b09e1.createDevice.major = 64;
      }
      var _0x2f68af = _0x3b09e1.makedev(_0x3b09e1.createDevice.major++, 0);
      _0x3b09e1.registerDevice(_0x2f68af, {
        open: function (_0x5b0b76) {
          _0x5b0b76.seekable = false;
        },
        close: function (_0x5681a4) {
          if (_0x5963f7 && _0x5963f7.buffer && _0x5963f7.buffer.length) {
            _0x5963f7(10);
          }
        },
        read: function (_0x30bde2, _0x26bb89, _0x346864, _0x366883, _0x327b9a) {
          var _0x322890 = 0;
          for (var _0x503be2 = 0; _0x503be2 < _0x366883; _0x503be2++) {
            var _0x2abd78;
            try {
              _0x2abd78 = _0x422b82();
            } catch (_0x4a3eed) {
              throw new _0x3b09e1.ErrnoError(29);
            }
            if (_0x2abd78 === undefined && _0x322890 === 0) {
              throw new _0x3b09e1.ErrnoError(6);
            }
            if (_0x2abd78 === null || _0x2abd78 === undefined) {
              break;
            }
            _0x322890++;
            _0x26bb89[_0x346864 + _0x503be2] = _0x2abd78;
          }
          if (_0x322890) {
            _0x30bde2.node.timestamp = Date.now();
          }
          return _0x322890;
        },
        write: function (_0x51f508, _0x37fc38, _0x172a6b, _0x19f3a, _0x486694) {
          for (var _0x576c5c = 0; _0x576c5c < _0x19f3a; _0x576c5c++) {
            try {
              _0x5963f7(_0x37fc38[_0x172a6b + _0x576c5c]);
            } catch (_0x21099a) {
              throw new _0x3b09e1.ErrnoError(29);
            }
          }
          if (_0x19f3a) {
            _0x51f508.node.timestamp = Date.now();
          }
          return _0x576c5c;
        }
      });
      return _0x3b09e1.mkdev(_0x3f8386, _0x19c185, _0x2f68af);
    },
    forceLoadFile: function (_0x3558bc) {
      if (_0x3558bc.isDevice || _0x3558bc.isFolder || _0x3558bc.link || _0x3558bc.contents) {
        return true;
      }
      if (typeof XMLHttpRequest !== "undefined") {
        throw new Error("Lazy loading should have been performed (contents set) in createLazyFile, but it was not. Lazy loading only works in web workers. Use --embed-file or --preload-file in emcc on the main thread.");
      } else if (_0x1978cf) {
        try {
          _0x3558bc.contents = _0x1c148c(_0x1978cf(_0x3558bc.url), true);
          _0x3558bc.usedBytes = _0x3558bc.contents.length;
        } catch (_0x220955) {
          throw new _0x3b09e1.ErrnoError(29);
        }
      } else {
        throw new Error("Cannot load without read() or XMLHttpRequest.");
      }
    },
    createLazyFile: function (_0x146015, _0x2ad993, _0x436d9, _0x3510c9, _0x5a896b) {
      function _0x3c4008() {
        this.lengthKnown = false;
        this.chunks = [];
      }
      _0x3c4008.prototype.get = function _0x335915(_0x104930) {
        if (_0x104930 > this.length - 1 || _0x104930 < 0) {
          return undefined;
        }
        var _0x5aea13 = _0x104930 % this.chunkSize;
        var _0x3cc528 = _0x104930 / this.chunkSize | 0;
        return this.getter(_0x3cc528)[_0x5aea13];
      };
      _0x3c4008.prototype.setDataGetter = function _0x1e54d7(_0x3a97c1) {
        this.getter = _0x3a97c1;
      };
      _0x3c4008.prototype.cacheLength = function _0x47fd56() {
        var _0x27bfc6 = new XMLHttpRequest();
        _0x27bfc6.open("HEAD", _0x436d9, false);
        _0x27bfc6.send(null);
        if ((!(_0x27bfc6.status >= 200) || !(_0x27bfc6.status < 300)) && _0x27bfc6.status !== 304) {
          throw new Error("Couldn't load " + _0x436d9 + ". Status: " + _0x27bfc6.status);
        }
        var _0x536330 = Number(_0x27bfc6.getResponseHeader("Content-length"));
        var _0x128a75;
        var _0x3f9dcb = (_0x128a75 = _0x27bfc6.getResponseHeader("Accept-Ranges")) && _0x128a75 === "bytes";
        var _0x22409a = (_0x128a75 = _0x27bfc6.getResponseHeader("Content-Encoding")) && _0x128a75 === "gzip";
        var _0x2d5999 = 1048576;
        if (!_0x3f9dcb) {
          _0x2d5999 = _0x536330;
        }
        var _0x28dbe1 = function (_0x5ddccd, _0x46832d) {
          if (_0x5ddccd > _0x46832d) {
            throw new Error("invalid range (" + _0x5ddccd + ", " + _0x46832d + ") or no bytes requested!");
          }
          if (_0x46832d > _0x536330 - 1) {
            throw new Error("only " + _0x536330 + " bytes available! programmer error!");
          }
          var _0x35172f = new XMLHttpRequest();
          _0x35172f.open("GET", _0x436d9, false);
          if (_0x536330 !== _0x2d5999) {
            _0x35172f.setRequestHeader("Range", "bytes=" + _0x5ddccd + "-" + _0x46832d);
          }
          if (typeof Uint8Array != "undefined") {
            _0x35172f.responseType = "arraybuffer";
          }
          if (_0x35172f.overrideMimeType) {
            _0x35172f.overrideMimeType("text/plain; charset=x-user-defined");
          }
          _0x35172f.send(null);
          if ((!(_0x35172f.status >= 200) || !(_0x35172f.status < 300)) && _0x35172f.status !== 304) {
            throw new Error("Couldn't load " + _0x436d9 + ". Status: " + _0x35172f.status);
          }
          if (_0x35172f.response !== undefined) {
            return new Uint8Array(_0x35172f.response || []);
          } else {
            return _0x1c148c(_0x35172f.responseText || "", true);
          }
        };
        var _0x1f373a = this;
        _0x1f373a.setDataGetter(function (_0x28a92f) {
          var _0x90988b = _0x28a92f * _0x2d5999;
          var _0x177b37 = (_0x28a92f + 1) * _0x2d5999 - 1;
          _0x177b37 = Math.min(_0x177b37, _0x536330 - 1);
          if (typeof _0x1f373a.chunks[_0x28a92f] === "undefined") {
            _0x1f373a.chunks[_0x28a92f] = _0x28dbe1(_0x90988b, _0x177b37);
          }
          if (typeof _0x1f373a.chunks[_0x28a92f] === "undefined") {
            throw new Error("doXHR failed!");
          }
          return _0x1f373a.chunks[_0x28a92f];
        });
        if (_0x22409a || !_0x536330) {
          _0x2d5999 = _0x536330 = 1;
          _0x536330 = this.getter(0).length;
          _0x2d5999 = _0x536330;
          _0x1f45d9("LazyFiles on gzip forces download of the whole file when length is accessed");
        }
        this._length = _0x536330;
        this._chunkSize = _0x2d5999;
        this.lengthKnown = true;
      };
      if (typeof XMLHttpRequest !== "undefined") {
        if (!_0x5ee6fa) {
          throw "Cannot do synchronous binary XHRs outside webworkers in modern browsers. Use --embed-file or --preload-file in emcc";
        }
        var _0x26fb92 = new _0x3c4008();
        Object.defineProperties(_0x26fb92, {
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
        var _0x490647 = {
          isDevice: false,
          contents: _0x26fb92
        };
      } else {
        var _0x490647 = {
          isDevice: false,
          url: _0x436d9
        };
      }
      var _0x45d3cd = _0x3b09e1.createFile(_0x146015, _0x2ad993, _0x490647, _0x3510c9, _0x5a896b);
      if (_0x490647.contents) {
        _0x45d3cd.contents = _0x490647.contents;
      } else if (_0x490647.url) {
        _0x45d3cd.contents = null;
        _0x45d3cd.url = _0x490647.url;
      }
      Object.defineProperties(_0x45d3cd, {
        usedBytes: {
          get: function () {
            return this.contents.length;
          }
        }
      });
      var _0x5324ac = {};
      var _0x56e054 = Object.keys(_0x45d3cd.stream_ops);
      _0x56e054.forEach(function (_0x4e6784) {
        var _0x553ff6 = _0x45d3cd.stream_ops[_0x4e6784];
        _0x5324ac[_0x4e6784] = function _0x54c96e() {
          _0x3b09e1.forceLoadFile(_0x45d3cd);
          return _0x553ff6.apply(null, arguments);
        };
      });
      _0x5324ac.read = function _0x2340f6(_0x44d298, _0x252ad5, _0x31630d, _0x48f81a, _0x5a6dd9) {
        _0x3b09e1.forceLoadFile(_0x45d3cd);
        var _0x4eaf2a = _0x44d298.node.contents;
        if (_0x5a6dd9 >= _0x4eaf2a.length) {
          return 0;
        }
        var _0x9eadf5 = Math.min(_0x4eaf2a.length - _0x5a6dd9, _0x48f81a);
        if (_0x4eaf2a.slice) {
          for (var _0x401fbf = 0; _0x401fbf < _0x9eadf5; _0x401fbf++) {
            _0x252ad5[_0x31630d + _0x401fbf] = _0x4eaf2a[_0x5a6dd9 + _0x401fbf];
          }
        } else {
          for (var _0x401fbf = 0; _0x401fbf < _0x9eadf5; _0x401fbf++) {
            _0x252ad5[_0x31630d + _0x401fbf] = _0x4eaf2a.get(_0x5a6dd9 + _0x401fbf);
          }
        }
        return _0x9eadf5;
      };
      _0x45d3cd.stream_ops = _0x5324ac;
      return _0x45d3cd;
    },
    createPreloadedFile: function (_0x517476, _0x11bdec, _0x21fdd3, _0x5c3491, _0x5dcd2a, _0xf4f314, _0x45570d, _0x1d2d4d, _0x20b6f9, _0x8113ba) {
      _0x5518f6.init();
      var _0x21a573 = _0x11bdec ? _0x4617c8.resolve(_0xd5d702.join2(_0x517476, _0x11bdec)) : _0x517476;
      var _0x522f4f = _0x298a63("cp " + _0x21a573);
      function _0x508d2b(_0xeea57c) {
        function _0x306319(_0x2048a4) {
          if (_0x8113ba) {
            _0x8113ba();
          }
          if (!_0x1d2d4d) {
            _0x3b09e1.createDataFile(_0x517476, _0x11bdec, _0x2048a4, _0x5c3491, _0x5dcd2a, _0x20b6f9);
          }
          if (_0xf4f314) {
            _0xf4f314();
          }
          _0x42f9a2(_0x522f4f);
        }
        var _0x3e3c30 = false;
        _0x2c3fe3.preloadPlugins.forEach(function (_0x4a3e8e) {
          if (_0x3e3c30) {
            return;
          }
          if (_0x4a3e8e.canHandle(_0x21a573)) {
            _0x4a3e8e.handle(_0xeea57c, _0x21a573, _0x306319, function () {
              if (_0x45570d) {
                _0x45570d();
              }
              _0x42f9a2(_0x522f4f);
            });
            _0x3e3c30 = true;
          }
        });
        if (!_0x3e3c30) {
          _0x306319(_0xeea57c);
        }
      }
      _0x275696(_0x522f4f);
      if (typeof _0x21fdd3 == "string") {
        _0x5518f6.asyncLoad(_0x21fdd3, function (_0x5934a8) {
          _0x508d2b(_0x5934a8);
        }, _0x45570d);
      } else {
        _0x508d2b(_0x21fdd3);
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
    saveFilesToDB: function (_0x135b5f, _0x48eba0, _0x8ddcd3) {
      _0x48eba0 = _0x48eba0 || function () {};
      _0x8ddcd3 = _0x8ddcd3 || function () {};
      var _0x4dc37c = _0x3b09e1.indexedDB();
      try {
        var _0x2013fa = _0x4dc37c.open(_0x3b09e1.DB_NAME(), _0x3b09e1.DB_VERSION);
      } catch (_0x231cf4) {
        return _0x8ddcd3(_0x231cf4);
      }
      _0x2013fa.onupgradeneeded = function _0x482f03() {
        _0x1f45d9("creating db");
        var _0xf70538 = _0x2013fa.result;
        _0xf70538.createObjectStore(_0x3b09e1.DB_STORE_NAME);
      };
      _0x2013fa.onsuccess = function _0x1dea2c() {
        var _0x211f41 = _0x2013fa.result;
        var _0x3a7a8a = _0x211f41.transaction([_0x3b09e1.DB_STORE_NAME], "readwrite");
        var _0x53014a = _0x3a7a8a.objectStore(_0x3b09e1.DB_STORE_NAME);
        var _0x4f28f6 = 0;
        var _0x41139f = 0;
        var _0x2a9f99 = _0x135b5f.length;
        function _0x50c598() {
          if (_0x41139f == 0) {
            _0x48eba0();
          } else {
            _0x8ddcd3();
          }
        }
        _0x135b5f.forEach(function (_0x3583df) {
          var _0x54aede = _0x53014a.put(_0x3b09e1.analyzePath(_0x3583df).object.contents, _0x3583df);
          _0x54aede.onsuccess = function _0x3ae71c() {
            _0x4f28f6++;
            if (_0x4f28f6 + _0x41139f == _0x2a9f99) {
              _0x50c598();
            }
          };
          _0x54aede.onerror = function _0x2bc69d() {
            _0x41139f++;
            if (_0x4f28f6 + _0x41139f == _0x2a9f99) {
              _0x50c598();
            }
          };
        });
        _0x3a7a8a.onerror = _0x8ddcd3;
      };
      _0x2013fa.onerror = _0x8ddcd3;
    },
    loadFilesFromDB: function (_0x1f86a9, _0x54fc6d, _0x2ae1f4) {
      _0x54fc6d = _0x54fc6d || function () {};
      _0x2ae1f4 = _0x2ae1f4 || function () {};
      var _0x36cd21 = _0x3b09e1.indexedDB();
      try {
        var _0x4708f4 = _0x36cd21.open(_0x3b09e1.DB_NAME(), _0x3b09e1.DB_VERSION);
      } catch (_0x4968d1) {
        return _0x2ae1f4(_0x4968d1);
      }
      _0x4708f4.onupgradeneeded = _0x2ae1f4;
      _0x4708f4.onsuccess = function _0x51fb1d() {
        var _0x272f2d = _0x4708f4.result;
        try {
          var _0x25147c = _0x272f2d.transaction([_0x3b09e1.DB_STORE_NAME], "readonly");
        } catch (_0x58c37c) {
          _0x2ae1f4(_0x58c37c);
          return;
        }
        var _0x16fc15 = _0x25147c.objectStore(_0x3b09e1.DB_STORE_NAME);
        var _0xc66559 = 0;
        var _0x12028f = 0;
        var _0x807bce = _0x1f86a9.length;
        function _0xaec155() {
          if (_0x12028f == 0) {
            _0x54fc6d();
          } else {
            _0x2ae1f4();
          }
        }
        _0x1f86a9.forEach(function (_0x23fde8) {
          var _0x185735 = _0x16fc15.get(_0x23fde8);
          _0x185735.onsuccess = function _0x324e5c() {
            if (_0x3b09e1.analyzePath(_0x23fde8).exists) {
              _0x3b09e1.unlink(_0x23fde8);
            }
            _0x3b09e1.createDataFile(_0xd5d702.dirname(_0x23fde8), _0xd5d702.basename(_0x23fde8), _0x185735.result, true, true, true);
            _0xc66559++;
            if (_0xc66559 + _0x12028f == _0x807bce) {
              _0xaec155();
            }
          };
          _0x185735.onerror = function _0x5636b8() {
            _0x12028f++;
            if (_0xc66559 + _0x12028f == _0x807bce) {
              _0xaec155();
            }
          };
        });
        _0x25147c.onerror = _0x2ae1f4;
      };
      _0x4708f4.onerror = _0x2ae1f4;
    }
  };
  var _0x28b4a7 = {
    mappings: {},
    DEFAULT_POLLMASK: 5,
    umask: 511,
    calculateAt: function (_0x3a34ec, _0x4429a7, _0x397c82) {
      if (_0x4429a7[0] === "/") {
        return _0x4429a7;
      }
      var _0x562753;
      if (_0x3a34ec === -100) {
        _0x562753 = _0x3b09e1.cwd();
      } else {
        var _0x4bd95f = _0x3b09e1.getStream(_0x3a34ec);
        if (!_0x4bd95f) {
          throw new _0x3b09e1.ErrnoError(8);
        }
        _0x562753 = _0x4bd95f.path;
      }
      if (_0x4429a7.length == 0) {
        if (!_0x397c82) {
          throw new _0x3b09e1.ErrnoError(44);
        }
        return _0x562753;
      }
      return _0xd5d702.join2(_0x562753, _0x4429a7);
    },
    doStat: function (_0x27c60a, _0x58365f, _0x2728d4) {
      try {
        var _0x2406c8 = _0x27c60a(_0x58365f);
      } catch (_0x30df3b) {
        if (_0x30df3b && _0x30df3b.node && _0xd5d702.normalize(_0x58365f) !== _0xd5d702.normalize(_0x3b09e1.getPath(_0x30df3b.node))) {
          return -54;
        }
        throw _0x30df3b;
      }
      _0x237516[_0x2728d4 >> 2] = _0x2406c8.dev;
      _0x237516[_0x2728d4 + 4 >> 2] = 0;
      _0x237516[_0x2728d4 + 8 >> 2] = _0x2406c8.ino;
      _0x237516[_0x2728d4 + 12 >> 2] = _0x2406c8.mode;
      _0x237516[_0x2728d4 + 16 >> 2] = _0x2406c8.nlink;
      _0x237516[_0x2728d4 + 20 >> 2] = _0x2406c8.uid;
      _0x237516[_0x2728d4 + 24 >> 2] = _0x2406c8.gid;
      _0x237516[_0x2728d4 + 28 >> 2] = _0x2406c8.rdev;
      _0x237516[_0x2728d4 + 32 >> 2] = 0;
      _0x34c09a = [_0x2406c8.size >>> 0, (_0x407d2d = _0x2406c8.size, +Math.abs(_0x407d2d) >= 1 ? _0x407d2d > 0 ? (Math.min(+Math.floor(_0x407d2d / 4294967296), 4294967295) | 0) >>> 0 : ~~+Math.ceil((_0x407d2d - +(~~_0x407d2d >>> 0)) / 4294967296) >>> 0 : 0)];
      _0x237516[_0x2728d4 + 40 >> 2] = _0x34c09a[0];
      _0x237516[_0x2728d4 + 44 >> 2] = _0x34c09a[1];
      _0x237516[_0x2728d4 + 48 >> 2] = 4096;
      _0x237516[_0x2728d4 + 52 >> 2] = _0x2406c8.blocks;
      _0x237516[_0x2728d4 + 56 >> 2] = _0x2406c8.atime.getTime() / 1000 | 0;
      _0x237516[_0x2728d4 + 60 >> 2] = 0;
      _0x237516[_0x2728d4 + 64 >> 2] = _0x2406c8.mtime.getTime() / 1000 | 0;
      _0x237516[_0x2728d4 + 68 >> 2] = 0;
      _0x237516[_0x2728d4 + 72 >> 2] = _0x2406c8.ctime.getTime() / 1000 | 0;
      _0x237516[_0x2728d4 + 76 >> 2] = 0;
      _0x34c09a = [_0x2406c8.ino >>> 0, (_0x407d2d = _0x2406c8.ino, +Math.abs(_0x407d2d) >= 1 ? _0x407d2d > 0 ? (Math.min(+Math.floor(_0x407d2d / 4294967296), 4294967295) | 0) >>> 0 : ~~+Math.ceil((_0x407d2d - +(~~_0x407d2d >>> 0)) / 4294967296) >>> 0 : 0)];
      _0x237516[_0x2728d4 + 80 >> 2] = _0x34c09a[0];
      _0x237516[_0x2728d4 + 84 >> 2] = _0x34c09a[1];
      return 0;
    },
    doMsync: function (_0x25e8f7, _0x4d265c, _0x125819, _0x82ef00, _0x438454) {
      var _0x5dec61 = _0x312996.slice(_0x25e8f7, _0x25e8f7 + _0x125819);
      _0x3b09e1.msync(_0x4d265c, _0x5dec61, _0x438454, _0x125819, _0x82ef00);
    },
    doMkdir: function (_0x40c414, _0xa6368) {
      _0x40c414 = _0xd5d702.normalize(_0x40c414);
      if (_0x40c414[_0x40c414.length - 1] === "/") {
        _0x40c414 = _0x40c414.substr(0, _0x40c414.length - 1);
      }
      _0x3b09e1.mkdir(_0x40c414, _0xa6368, 0);
      return 0;
    },
    doMknod: function (_0x308f49, _0x229818, _0xfad805) {
      switch (_0x229818 & 61440) {
        case 32768:
        case 8192:
        case 24576:
        case 4096:
        case 49152:
          break;
        default:
          return -28;
      }
      _0x3b09e1.mknod(_0x308f49, _0x229818, _0xfad805);
      return 0;
    },
    doReadlink: function (_0x1ca2b1, _0x57505c, _0x3a4ac0) {
      if (_0x3a4ac0 <= 0) {
        return -28;
      }
      var _0x413317 = _0x3b09e1.readlink(_0x1ca2b1);
      var _0x11ac70 = Math.min(_0x3a4ac0, _0x40b564(_0x413317));
      var _0x1a4382 = _0x1cc374[_0x57505c + _0x11ac70];
      _0x16748b(_0x413317, _0x57505c, _0x3a4ac0 + 1);
      _0x1cc374[_0x57505c + _0x11ac70] = _0x1a4382;
      return _0x11ac70;
    },
    doAccess: function (_0x1c83c1, _0x493258) {
      if (_0x493258 & ~7) {
        return -28;
      }
      var _0x56ef2c;
      var _0x4a5a74 = _0x3b09e1.lookupPath(_0x1c83c1, {
        follow: true
      });
      _0x56ef2c = _0x4a5a74.node;
      if (!_0x56ef2c) {
        return -44;
      }
      var _0x434267 = "";
      if (_0x493258 & 4) {
        _0x434267 += "r";
      }
      if (_0x493258 & 2) {
        _0x434267 += "w";
      }
      if (_0x493258 & 1) {
        _0x434267 += "x";
      }
      if (_0x434267 && _0x3b09e1.nodePermissions(_0x56ef2c, _0x434267)) {
        return -2;
      }
      return 0;
    },
    doDup: function (_0x47455f, _0x1b0a65, _0x394acc) {
      var _0x377aa6 = _0x3b09e1.getStream(_0x394acc);
      if (_0x377aa6) {
        _0x3b09e1.close(_0x377aa6);
      }
      return _0x3b09e1.open(_0x47455f, _0x1b0a65, 0, _0x394acc, _0x394acc).fd;
    },
    doReadv: function (_0x5275b6, _0x18fd71, _0x22a977, _0x4072db) {
      var _0xf08cf7 = 0;
      for (var _0x2a48a4 = 0; _0x2a48a4 < _0x22a977; _0x2a48a4++) {
        var _0x53f411 = _0x237516[_0x18fd71 + _0x2a48a4 * 8 >> 2];
        var _0x24b487 = _0x237516[_0x18fd71 + (_0x2a48a4 * 8 + 4) >> 2];
        var _0x4a7257 = _0x3b09e1.read(_0x5275b6, _0x1cc374, _0x53f411, _0x24b487, _0x4072db);
        if (_0x4a7257 < 0) {
          return -1;
        }
        _0xf08cf7 += _0x4a7257;
        if (_0x4a7257 < _0x24b487) {
          break;
        }
      }
      return _0xf08cf7;
    },
    doWritev: function (_0x2a801d, _0x40316d, _0x4fbe02, _0x2e45da) {
      var _0x1c6452 = 0;
      for (var _0x67c4d8 = 0; _0x67c4d8 < _0x4fbe02; _0x67c4d8++) {
        var _0x5c92dd = _0x237516[_0x40316d + _0x67c4d8 * 8 >> 2];
        var _0x2b33eb = _0x237516[_0x40316d + (_0x67c4d8 * 8 + 4) >> 2];
        var _0x18917c = _0x3b09e1.write(_0x2a801d, _0x1cc374, _0x5c92dd, _0x2b33eb, _0x2e45da);
        if (_0x18917c < 0) {
          return -1;
        }
        _0x1c6452 += _0x18917c;
      }
      return _0x1c6452;
    },
    varargs: undefined,
    get: function () {
      _0x28b4a7.varargs += 4;
      var _0x11dfc5 = _0x237516[_0x28b4a7.varargs - 4 >> 2];
      return _0x11dfc5;
    },
    getStr: function (_0x2f6310) {
      var _0x12c8ed = _0x2aa540(_0x2f6310);
      return _0x12c8ed;
    },
    getStreamFromFD: function (_0x3bc4ef) {
      var _0xae55b4 = _0x3b09e1.getStream(_0x3bc4ef);
      if (!_0xae55b4) {
        throw new _0x3b09e1.ErrnoError(8);
      }
      return _0xae55b4;
    },
    get64: function (_0xd78c1d, _0x31f376) {
      return _0xd78c1d;
    }
  };
  function _0x3957f8(_0x18192e, _0x51b073, _0x4eb815, _0xa969d3, _0x4894f5) {
    try {
      var _0x3fd229 = 0;
      var _0x4912df = _0x51b073 ? _0x237516[_0x51b073 >> 2] : 0;
      var _0x2861e1 = _0x51b073 ? _0x237516[_0x51b073 + 4 >> 2] : 0;
      var _0xcbe010 = _0x4eb815 ? _0x237516[_0x4eb815 >> 2] : 0;
      var _0x4291d4 = _0x4eb815 ? _0x237516[_0x4eb815 + 4 >> 2] : 0;
      var _0xa021e8 = _0xa969d3 ? _0x237516[_0xa969d3 >> 2] : 0;
      var _0x19ffb4 = _0xa969d3 ? _0x237516[_0xa969d3 + 4 >> 2] : 0;
      var _0x13dcbe = 0;
      var _0xb77ee7 = 0;
      var _0x23676e = 0;
      var _0x3744df = 0;
      var _0x4bcf32 = 0;
      var _0x137f8d = 0;
      var _0xd75023 = (_0x51b073 ? _0x237516[_0x51b073 >> 2] : 0) | (_0x4eb815 ? _0x237516[_0x4eb815 >> 2] : 0) | (_0xa969d3 ? _0x237516[_0xa969d3 >> 2] : 0);
      var _0x317388 = (_0x51b073 ? _0x237516[_0x51b073 + 4 >> 2] : 0) | (_0x4eb815 ? _0x237516[_0x4eb815 + 4 >> 2] : 0) | (_0xa969d3 ? _0x237516[_0xa969d3 + 4 >> 2] : 0);
      var _0x5cc00f = function (_0xedbc23, _0x4a247d, _0x68f6e7, _0x377da5) {
        if (_0xedbc23 < 32) {
          return _0x4a247d & _0x377da5;
        } else {
          return _0x68f6e7 & _0x377da5;
        }
      };
      for (var _0x55fb80 = 0; _0x55fb80 < _0x18192e; _0x55fb80++) {
        var _0x515d5a = 1 << _0x55fb80 % 32;
        if (!_0x5cc00f(_0x55fb80, _0xd75023, _0x317388, _0x515d5a)) {
          continue;
        }
        var _0x59a3c9 = _0x3b09e1.getStream(_0x55fb80);
        if (!_0x59a3c9) {
          throw new _0x3b09e1.ErrnoError(8);
        }
        var _0x5a8ec2 = _0x28b4a7.DEFAULT_POLLMASK;
        if (_0x59a3c9.stream_ops.poll) {
          _0x5a8ec2 = _0x59a3c9.stream_ops.poll(_0x59a3c9);
        }
        if (_0x5a8ec2 & 1 && _0x5cc00f(_0x55fb80, _0x4912df, _0x2861e1, _0x515d5a)) {
          if (_0x55fb80 < 32) {
            _0x13dcbe = _0x13dcbe | _0x515d5a;
          } else {
            _0xb77ee7 = _0xb77ee7 | _0x515d5a;
          }
          _0x3fd229++;
        }
        if (_0x5a8ec2 & 4 && _0x5cc00f(_0x55fb80, _0xcbe010, _0x4291d4, _0x515d5a)) {
          if (_0x55fb80 < 32) {
            _0x23676e = _0x23676e | _0x515d5a;
          } else {
            _0x3744df = _0x3744df | _0x515d5a;
          }
          _0x3fd229++;
        }
        if (_0x5a8ec2 & 2 && _0x5cc00f(_0x55fb80, _0xa021e8, _0x19ffb4, _0x515d5a)) {
          if (_0x55fb80 < 32) {
            _0x4bcf32 = _0x4bcf32 | _0x515d5a;
          } else {
            _0x137f8d = _0x137f8d | _0x515d5a;
          }
          _0x3fd229++;
        }
      }
      if (_0x51b073) {
        _0x237516[_0x51b073 >> 2] = _0x13dcbe;
        _0x237516[_0x51b073 + 4 >> 2] = _0xb77ee7;
      }
      if (_0x4eb815) {
        _0x237516[_0x4eb815 >> 2] = _0x23676e;
        _0x237516[_0x4eb815 + 4 >> 2] = _0x3744df;
      }
      if (_0xa969d3) {
        _0x237516[_0xa969d3 >> 2] = _0x4bcf32;
        _0x237516[_0xa969d3 + 4 >> 2] = _0x137f8d;
      }
      return _0x3fd229;
    } catch (_0x4e0242) {
      if (typeof _0x3b09e1 === "undefined" || !(_0x4e0242 instanceof _0x3b09e1.ErrnoError)) {
        _0xe8ab44(_0x4e0242);
      }
      return -_0x4e0242.errno;
    }
  }
  var _0x53e766 = {
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
  var _0x2722e2 = {
    mount: function (_0x469829) {
      _0x2c3fe3.websocket = _0x2c3fe3.websocket && typeof _0x2c3fe3.websocket === "object" ? _0x2c3fe3.websocket : {};
      _0x2c3fe3.websocket._callbacks = {};
      _0x2c3fe3.websocket.on = function (_0x253077, _0x4fb3da) {
        if (typeof _0x4fb3da === "function") {
          this._callbacks[_0x253077] = _0x4fb3da;
        }
        return this;
      };
      _0x2c3fe3.websocket.emit = function (_0x2dec5c, _0x27e021) {
        if (typeof this._callbacks[_0x2dec5c] === "function") {
          this._callbacks[_0x2dec5c].call(this, _0x27e021);
        }
      };
      return _0x3b09e1.createNode(null, "/", 16895, 0);
    },
    createSocket: function (_0x1f45b2, _0x4bb6be, _0x5d8eff) {
      _0x4bb6be &= ~526336;
      var _0x20958f = _0x4bb6be == 1;
      if (_0x5d8eff) {
        _0x4a00f0(_0x20958f == (_0x5d8eff == 6));
      }
      var _0x2e4df6 = {
        family: _0x1f45b2,
        type: _0x4bb6be,
        protocol: _0x5d8eff,
        server: null,
        error: null,
        peers: {},
        pending: [],
        recv_queue: [],
        sock_ops: _0x2722e2.websocket_sock_ops
      };
      var _0x52a4b9 = _0x2722e2.nextname();
      var _0x24d6a5 = _0x3b09e1.createNode(_0x2722e2.root, _0x52a4b9, 49152, 0);
      _0x24d6a5.sock = _0x2e4df6;
      var _0x5c15fb = _0x3b09e1.createStream({
        path: _0x52a4b9,
        node: _0x24d6a5,
        flags: 2,
        seekable: false,
        stream_ops: _0x2722e2.stream_ops
      });
      _0x2e4df6.stream = _0x5c15fb;
      return _0x2e4df6;
    },
    getSocket: function (_0x5e8d52) {
      var _0x36ac90 = _0x3b09e1.getStream(_0x5e8d52);
      if (!_0x36ac90 || !_0x3b09e1.isSocket(_0x36ac90.node.mode)) {
        return null;
      }
      return _0x36ac90.node.sock;
    },
    stream_ops: {
      poll: function (_0xb2f391) {
        var _0x1fcbdc = _0xb2f391.node.sock;
        return _0x1fcbdc.sock_ops.poll(_0x1fcbdc);
      },
      ioctl: function (_0x14f51d, _0x4c3862, _0x498cae) {
        var _0xb13872 = _0x14f51d.node.sock;
        return _0xb13872.sock_ops.ioctl(_0xb13872, _0x4c3862, _0x498cae);
      },
      read: function (_0x414820, _0x3fa24a, _0x4f004d, _0x58500d, _0x1f749d) {
        var _0x5de344 = _0x414820.node.sock;
        var _0xd305b7 = _0x5de344.sock_ops.recvmsg(_0x5de344, _0x58500d);
        if (!_0xd305b7) {
          return 0;
        }
        _0x3fa24a.set(_0xd305b7.buffer, _0x4f004d);
        return _0xd305b7.buffer.length;
      },
      write: function (_0x37441e, _0x3c3a8d, _0x5c23e2, _0x3e778a, _0x425de9) {
        var _0x5902c9 = _0x37441e.node.sock;
        return _0x5902c9.sock_ops.sendmsg(_0x5902c9, _0x3c3a8d, _0x5c23e2, _0x3e778a);
      },
      close: function (_0x554184) {
        var _0x61fe40 = _0x554184.node.sock;
        _0x61fe40.sock_ops.close(_0x61fe40);
      }
    },
    nextname: function () {
      if (!_0x2722e2.nextname.current) {
        _0x2722e2.nextname.current = 0;
      }
      return "socket[" + _0x2722e2.nextname.current++ + "]";
    },
    websocket_sock_ops: {
      createPeer: function (_0x5f01c2, _0xdd3065, _0x273854) {
        var _0x34cd51;
        if (typeof _0xdd3065 === "object") {
          _0x34cd51 = _0xdd3065;
          _0xdd3065 = null;
          _0x273854 = null;
        }
        if (_0x34cd51) {
          if (_0x34cd51._socket) {
            _0xdd3065 = _0x34cd51._socket.remoteAddress;
            _0x273854 = _0x34cd51._socket.remotePort;
          } else {
            var _0x528050 = /ws[s]?:\/\/([^:]+):(\d+)/.exec(_0x34cd51.url);
            if (!_0x528050) {
              throw new Error("WebSocket URL must be in the format ws(s)://address:port");
            }
            _0xdd3065 = _0x528050[1];
            _0x273854 = parseInt(_0x528050[2], 10);
          }
        } else {
          try {
            var _0x5b26d0 = _0x2c3fe3.websocket && typeof _0x2c3fe3.websocket === "object";
            var _0xb9f0aa = "ws:#".replace("#", "//");
            if (_0x5b26d0) {
              if (typeof _0x2c3fe3.websocket.url === "string") {
                _0xb9f0aa = _0x2c3fe3.websocket.url;
              }
            }
            if (_0xb9f0aa === "ws://" || _0xb9f0aa === "wss://") {
              var _0x31f211 = _0xdd3065.split("/");
              _0xb9f0aa = _0xb9f0aa + _0x31f211[0] + ":" + _0x273854 + "/" + _0x31f211.slice(1).join("/");
            }
            var _0xc5c656 = "binary";
            if (_0x5b26d0) {
              if (typeof _0x2c3fe3.websocket.subprotocol === "string") {
                _0xc5c656 = _0x2c3fe3.websocket.subprotocol;
              }
            }
            var _0x28829d = undefined;
            if (_0xc5c656 !== "null") {
              _0xc5c656 = _0xc5c656.replace(/^ +| +$/g, "").split(/ *, */);
              _0x28829d = _0xdf03b2 ? {
                protocol: _0xc5c656.toString()
              } : _0xc5c656;
            }
            if (_0x5b26d0 && _0x2c3fe3.websocket.subprotocol === null) {
              _0xc5c656 = "null";
              _0x28829d = undefined;
            }
            var _0x4e5b38;
            if (_0xdf03b2) {
              _0x4e5b38 = require("ws");
            } else {
              _0x4e5b38 = WebSocket;
            }
            _0x34cd51 = new _0x4e5b38(_0xb9f0aa, _0x28829d);
            _0x34cd51.binaryType = "arraybuffer";
          } catch (_0x1d2e15) {
            throw new _0x3b09e1.ErrnoError(_0x53e766.EHOSTUNREACH);
          }
        }
        var _0x460d4a = {
          addr: _0xdd3065,
          port: _0x273854,
          socket: _0x34cd51,
          dgram_send_queue: []
        };
        _0x2722e2.websocket_sock_ops.addPeer(_0x5f01c2, _0x460d4a);
        _0x2722e2.websocket_sock_ops.handlePeerEvents(_0x5f01c2, _0x460d4a);
        if (_0x5f01c2.type === 2 && typeof _0x5f01c2.sport !== "undefined") {
          _0x460d4a.dgram_send_queue.push(new Uint8Array([255, 255, 255, 255, "p".charCodeAt(0), "o".charCodeAt(0), "r".charCodeAt(0), "t".charCodeAt(0), (_0x5f01c2.sport & 65280) >> 8, _0x5f01c2.sport & 255]));
        }
        return _0x460d4a;
      },
      getPeer: function (_0x4a12fc, _0x14ad6d, _0x9c3f89) {
        return _0x4a12fc.peers[_0x14ad6d + ":" + _0x9c3f89];
      },
      addPeer: function (_0x143a85, _0x94b3b4) {
        _0x143a85.peers[_0x94b3b4.addr + ":" + _0x94b3b4.port] = _0x94b3b4;
      },
      removePeer: function (_0x1f6d6d, _0x26959f) {
        delete _0x1f6d6d.peers[_0x26959f.addr + ":" + _0x26959f.port];
      },
      handlePeerEvents: function (_0x21de88, _0x13cf04) {
        var _0x4d5b03 = true;
        var _0xc2715a = function () {
          _0x2c3fe3.websocket.emit("open", _0x21de88.stream.fd);
          try {
            var _0x7db68f = _0x13cf04.dgram_send_queue.shift();
            while (_0x7db68f) {
              _0x13cf04.socket.send(_0x7db68f);
              _0x7db68f = _0x13cf04.dgram_send_queue.shift();
            }
          } catch (_0x47a3b2) {
            _0x13cf04.socket.close();
          }
        };
        function _0x51808c(_0x3bf9b8) {
          if (typeof _0x3bf9b8 === "string") {
            var _0x2d9987 = new TextEncoder();
            _0x3bf9b8 = _0x2d9987.encode(_0x3bf9b8);
          } else {
            _0x4a00f0(_0x3bf9b8.byteLength !== undefined);
            if (_0x3bf9b8.byteLength == 0) {
              return;
            } else {
              _0x3bf9b8 = new Uint8Array(_0x3bf9b8);
            }
          }
          var _0x5a417e = _0x4d5b03;
          _0x4d5b03 = false;
          if (_0x5a417e && _0x3bf9b8.length === 10 && _0x3bf9b8[0] === 255 && _0x3bf9b8[1] === 255 && _0x3bf9b8[2] === 255 && _0x3bf9b8[3] === 255 && _0x3bf9b8[4] === "p".charCodeAt(0) && _0x3bf9b8[5] === "o".charCodeAt(0) && _0x3bf9b8[6] === "r".charCodeAt(0) && _0x3bf9b8[7] === "t".charCodeAt(0)) {
            var _0x3392c3 = _0x3bf9b8[8] << 8 | _0x3bf9b8[9];
            _0x2722e2.websocket_sock_ops.removePeer(_0x21de88, _0x13cf04);
            _0x13cf04.port = _0x3392c3;
            _0x2722e2.websocket_sock_ops.addPeer(_0x21de88, _0x13cf04);
            return;
          }
          _0x21de88.recv_queue.push({
            addr: _0x13cf04.addr,
            port: _0x13cf04.port,
            data: _0x3bf9b8
          });
          _0x2c3fe3.websocket.emit("message", _0x21de88.stream.fd);
        }
        if (_0xdf03b2) {
          _0x13cf04.socket.on("open", _0xc2715a);
          _0x13cf04.socket.on("message", function (_0x1375f4, _0x526d95) {
            if (!_0x526d95.binary) {
              return;
            }
            _0x51808c(new Uint8Array(_0x1375f4).buffer);
          });
          _0x13cf04.socket.on("close", function () {
            _0x2c3fe3.websocket.emit("close", _0x21de88.stream.fd);
          });
          _0x13cf04.socket.on("error", function (_0x2ca6fa) {
            _0x21de88.error = _0x53e766.ECONNREFUSED;
            _0x2c3fe3.websocket.emit("error", [_0x21de88.stream.fd, _0x21de88.error, "ECONNREFUSED: Connection refused"]);
          });
        } else {
          _0x13cf04.socket.onopen = _0xc2715a;
          _0x13cf04.socket.onclose = function () {
            _0x2c3fe3.websocket.emit("close", _0x21de88.stream.fd);
          };
          _0x13cf04.socket.onmessage = function _0x3ec0ac(_0x4e50a1) {
            _0x51808c(_0x4e50a1.data);
          };
          _0x13cf04.socket.onerror = function (_0x36f8e5) {
            _0x21de88.error = _0x53e766.ECONNREFUSED;
            _0x2c3fe3.websocket.emit("error", [_0x21de88.stream.fd, _0x21de88.error, "ECONNREFUSED: Connection refused"]);
          };
        }
      },
      poll: function (_0x4a5560) {
        if (_0x4a5560.type === 1 && _0x4a5560.server) {
          if (_0x4a5560.pending.length) {
            return 65;
          } else {
            return 0;
          }
        }
        var _0x307084 = 0;
        var _0x4ce2c4 = _0x4a5560.type === 1 ? _0x2722e2.websocket_sock_ops.getPeer(_0x4a5560, _0x4a5560.daddr, _0x4a5560.dport) : null;
        if (_0x4a5560.recv_queue.length || !_0x4ce2c4 || _0x4ce2c4 && _0x4ce2c4.socket.readyState === _0x4ce2c4.socket.CLOSING || _0x4ce2c4 && _0x4ce2c4.socket.readyState === _0x4ce2c4.socket.CLOSED) {
          _0x307084 |= 65;
        }
        if (!_0x4ce2c4 || _0x4ce2c4 && _0x4ce2c4.socket.readyState === _0x4ce2c4.socket.OPEN) {
          _0x307084 |= 4;
        }
        if (_0x4ce2c4 && _0x4ce2c4.socket.readyState === _0x4ce2c4.socket.CLOSING || _0x4ce2c4 && _0x4ce2c4.socket.readyState === _0x4ce2c4.socket.CLOSED) {
          _0x307084 |= 16;
        }
        return _0x307084;
      },
      ioctl: function (_0xf863f5, _0x5bd8c7, _0x3987e2) {
        switch (_0x5bd8c7) {
          case 21531:
            var _0x3ab2a0 = 0;
            if (_0xf863f5.recv_queue.length) {
              _0x3ab2a0 = _0xf863f5.recv_queue[0].data.length;
            }
            _0x237516[_0x3987e2 >> 2] = _0x3ab2a0;
            return 0;
          default:
            return _0x53e766.EINVAL;
        }
      },
      close: function (_0x52b766) {
        if (_0x52b766.server) {
          try {
            _0x52b766.server.close();
          } catch (_0x2fcf1d) {}
          _0x52b766.server = null;
        }
        var _0x119e2b = Object.keys(_0x52b766.peers);
        for (var _0x1b4192 = 0; _0x1b4192 < _0x119e2b.length; _0x1b4192++) {
          var _0x36611f = _0x52b766.peers[_0x119e2b[_0x1b4192]];
          try {
            _0x36611f.socket.close();
          } catch (_0x5c497d) {}
          _0x2722e2.websocket_sock_ops.removePeer(_0x52b766, _0x36611f);
        }
        return 0;
      },
      bind: function (_0x54122a, _0x2d97f9, _0x11f789) {
        if (typeof _0x54122a.saddr !== "undefined" || typeof _0x54122a.sport !== "undefined") {
          throw new _0x3b09e1.ErrnoError(_0x53e766.EINVAL);
        }
        _0x54122a.saddr = _0x2d97f9;
        _0x54122a.sport = _0x11f789;
        if (_0x54122a.type === 2) {
          if (_0x54122a.server) {
            _0x54122a.server.close();
            _0x54122a.server = null;
          }
          try {
            _0x54122a.sock_ops.listen(_0x54122a, 0);
          } catch (_0x3e2ec0) {
            if (!(_0x3e2ec0 instanceof _0x3b09e1.ErrnoError)) {
              throw _0x3e2ec0;
            }
            if (_0x3e2ec0.errno !== _0x53e766.EOPNOTSUPP) {
              throw _0x3e2ec0;
            }
          }
        }
      },
      connect: function (_0x2873c2, _0x33ce5c, _0x26818d) {
        if (_0x2873c2.server) {
          throw new _0x3b09e1.ErrnoError(_0x53e766.EOPNOTSUPP);
        }
        if (typeof _0x2873c2.daddr !== "undefined" && typeof _0x2873c2.dport !== "undefined") {
          var _0x129ad1 = _0x2722e2.websocket_sock_ops.getPeer(_0x2873c2, _0x2873c2.daddr, _0x2873c2.dport);
          if (_0x129ad1) {
            if (_0x129ad1.socket.readyState === _0x129ad1.socket.CONNECTING) {
              throw new _0x3b09e1.ErrnoError(_0x53e766.EALREADY);
            } else {
              throw new _0x3b09e1.ErrnoError(_0x53e766.EISCONN);
            }
          }
        }
        var _0xba03ec = _0x2722e2.websocket_sock_ops.createPeer(_0x2873c2, _0x33ce5c, _0x26818d);
        _0x2873c2.daddr = _0xba03ec.addr;
        _0x2873c2.dport = _0xba03ec.port;
        throw new _0x3b09e1.ErrnoError(_0x53e766.EINPROGRESS);
      },
      listen: function (_0x50f9a6, _0x18ba2b) {
        if (!_0xdf03b2) {
          throw new _0x3b09e1.ErrnoError(_0x53e766.EOPNOTSUPP);
        }
        if (_0x50f9a6.server) {
          throw new _0x3b09e1.ErrnoError(_0x53e766.EINVAL);
        }
        var _0x53fc6b = require("ws").Server;
        var _0x16a6d8 = _0x50f9a6.saddr;
        _0x50f9a6.server = new _0x53fc6b({
          host: _0x16a6d8,
          port: _0x50f9a6.sport
        });
        _0x2c3fe3.websocket.emit("listen", _0x50f9a6.stream.fd);
        _0x50f9a6.server.on("connection", function (_0x158295) {
          if (_0x50f9a6.type === 1) {
            var _0x2b4c4b = _0x2722e2.createSocket(_0x50f9a6.family, _0x50f9a6.type, _0x50f9a6.protocol);
            var _0x13468a = _0x2722e2.websocket_sock_ops.createPeer(_0x2b4c4b, _0x158295);
            _0x2b4c4b.daddr = _0x13468a.addr;
            _0x2b4c4b.dport = _0x13468a.port;
            _0x50f9a6.pending.push(_0x2b4c4b);
            _0x2c3fe3.websocket.emit("connection", _0x2b4c4b.stream.fd);
          } else {
            _0x2722e2.websocket_sock_ops.createPeer(_0x50f9a6, _0x158295);
            _0x2c3fe3.websocket.emit("connection", _0x50f9a6.stream.fd);
          }
        });
        _0x50f9a6.server.on("closed", function () {
          _0x2c3fe3.websocket.emit("close", _0x50f9a6.stream.fd);
          _0x50f9a6.server = null;
        });
        _0x50f9a6.server.on("error", function (_0x2e328e) {
          _0x50f9a6.error = _0x53e766.EHOSTUNREACH;
          _0x2c3fe3.websocket.emit("error", [_0x50f9a6.stream.fd, _0x50f9a6.error, "EHOSTUNREACH: Host is unreachable"]);
        });
      },
      accept: function (_0x100a6c) {
        if (!_0x100a6c.server) {
          throw new _0x3b09e1.ErrnoError(_0x53e766.EINVAL);
        }
        var _0x4681ad = _0x100a6c.pending.shift();
        _0x4681ad.stream.flags = _0x100a6c.stream.flags;
        return _0x4681ad;
      },
      getname: function (_0x4ae035, _0x449576) {
        var _0x1256f8;
        var _0x2e1ad3;
        if (_0x449576) {
          if (_0x4ae035.daddr === undefined || _0x4ae035.dport === undefined) {
            throw new _0x3b09e1.ErrnoError(_0x53e766.ENOTCONN);
          }
          _0x1256f8 = _0x4ae035.daddr;
          _0x2e1ad3 = _0x4ae035.dport;
        } else {
          _0x1256f8 = _0x4ae035.saddr || 0;
          _0x2e1ad3 = _0x4ae035.sport || 0;
        }
        return {
          addr: _0x1256f8,
          port: _0x2e1ad3
        };
      },
      sendmsg: function (_0x1dfb00, _0x56f619, _0x295526, _0x1963c9, _0x29dedf, _0x3d74b1) {
        if (_0x1dfb00.type === 2) {
          if (_0x29dedf === undefined || _0x3d74b1 === undefined) {
            _0x29dedf = _0x1dfb00.daddr;
            _0x3d74b1 = _0x1dfb00.dport;
          }
          if (_0x29dedf === undefined || _0x3d74b1 === undefined) {
            throw new _0x3b09e1.ErrnoError(_0x53e766.EDESTADDRREQ);
          }
        } else {
          _0x29dedf = _0x1dfb00.daddr;
          _0x3d74b1 = _0x1dfb00.dport;
        }
        var _0x4258c5 = _0x2722e2.websocket_sock_ops.getPeer(_0x1dfb00, _0x29dedf, _0x3d74b1);
        if (_0x1dfb00.type === 1) {
          if (!_0x4258c5 || _0x4258c5.socket.readyState === _0x4258c5.socket.CLOSING || _0x4258c5.socket.readyState === _0x4258c5.socket.CLOSED) {
            throw new _0x3b09e1.ErrnoError(_0x53e766.ENOTCONN);
          } else if (_0x4258c5.socket.readyState === _0x4258c5.socket.CONNECTING) {
            throw new _0x3b09e1.ErrnoError(_0x53e766.EAGAIN);
          }
        }
        if (ArrayBuffer.isView(_0x56f619)) {
          _0x295526 += _0x56f619.byteOffset;
          _0x56f619 = _0x56f619.buffer;
        }
        var _0x51eb51;
        _0x51eb51 = _0x56f619.slice(_0x295526, _0x295526 + _0x1963c9);
        if (_0x1dfb00.type === 2) {
          if (!_0x4258c5 || _0x4258c5.socket.readyState !== _0x4258c5.socket.OPEN) {
            if (!_0x4258c5 || _0x4258c5.socket.readyState === _0x4258c5.socket.CLOSING || _0x4258c5.socket.readyState === _0x4258c5.socket.CLOSED) {
              _0x4258c5 = _0x2722e2.websocket_sock_ops.createPeer(_0x1dfb00, _0x29dedf, _0x3d74b1);
            }
            _0x4258c5.dgram_send_queue.push(_0x51eb51);
            return _0x1963c9;
          }
        }
        try {
          _0x4258c5.socket.send(_0x51eb51);
          return _0x1963c9;
        } catch (_0xa3734c) {
          throw new _0x3b09e1.ErrnoError(_0x53e766.EINVAL);
        }
      },
      recvmsg: function (_0x32b1c7, _0x22bc52) {
        if (_0x32b1c7.type === 1 && _0x32b1c7.server) {
          throw new _0x3b09e1.ErrnoError(_0x53e766.ENOTCONN);
        }
        var _0x49f575 = _0x32b1c7.recv_queue.shift();
        if (!_0x49f575) {
          if (_0x32b1c7.type === 1) {
            var _0x2edd54 = _0x2722e2.websocket_sock_ops.getPeer(_0x32b1c7, _0x32b1c7.daddr, _0x32b1c7.dport);
            if (!_0x2edd54) {
              throw new _0x3b09e1.ErrnoError(_0x53e766.ENOTCONN);
            } else if (_0x2edd54.socket.readyState === _0x2edd54.socket.CLOSING || _0x2edd54.socket.readyState === _0x2edd54.socket.CLOSED) {
              return null;
            } else {
              throw new _0x3b09e1.ErrnoError(_0x53e766.EAGAIN);
            }
          } else {
            throw new _0x3b09e1.ErrnoError(_0x53e766.EAGAIN);
          }
        }
        var _0x2efa7e = _0x49f575.data.byteLength || _0x49f575.data.length;
        var _0x32dae9 = _0x49f575.data.byteOffset || 0;
        var _0x21afc7 = _0x49f575.data.buffer || _0x49f575.data;
        var _0x5bf87f = Math.min(_0x22bc52, _0x2efa7e);
        var _0x59ad83 = {
          buffer: new Uint8Array(_0x21afc7, _0x32dae9, _0x5bf87f),
          addr: _0x49f575.addr,
          port: _0x49f575.port
        };
        if (_0x32b1c7.type === 1 && _0x5bf87f < _0x2efa7e) {
          var _0x582b8a = _0x2efa7e - _0x5bf87f;
          _0x49f575.data = new Uint8Array(_0x21afc7, _0x32dae9 + _0x5bf87f, _0x582b8a);
          _0x32b1c7.recv_queue.unshift(_0x49f575);
        }
        return _0x59ad83;
      }
    }
  };
  function _0x3c9fb9(_0x38f93b) {
    var _0x2be0aa = _0x2722e2.getSocket(_0x38f93b);
    if (!_0x2be0aa) {
      throw new _0x3b09e1.ErrnoError(8);
    }
    return _0x2be0aa;
  }
  function _0x893198(_0x2b40cc) {
    _0x237516[_0x445f12() >> 2] = _0x2b40cc;
    return _0x2b40cc;
  }
  function _0x54d824(_0x3e036e) {
    var _0x1c4eb8 = _0x3e036e.split(".");
    for (var _0x1cd11f = 0; _0x1cd11f < 4; _0x1cd11f++) {
      var _0x23eac6 = Number(_0x1c4eb8[_0x1cd11f]);
      if (isNaN(_0x23eac6)) {
        return null;
      }
      _0x1c4eb8[_0x1cd11f] = _0x23eac6;
    }
    return (_0x1c4eb8[0] | _0x1c4eb8[1] << 8 | _0x1c4eb8[2] << 16 | _0x1c4eb8[3] << 24) >>> 0;
  }
  function _0x63c89e(_0x2e5265) {
    return parseInt(_0x2e5265);
  }
  function _0x3648a5(_0x1f24fc) {
    var _0x3be372;
    var _0x3ecaec;
    var _0x278cb8;
    var _0x560869;
    var _0x28de77 = /^((?=.*::)(?!.*::.+::)(::)?([\dA-F]{1,4}:(:|\b)|){5}|([\dA-F]{1,4}:){6})((([\dA-F]{1,4}((?!\3)::|:\b|$))|(?!\2\3)){2}|(((2[0-4]|1\d|[1-9])?\d|25[0-5])\.?\b){4})$/i;
    var _0x39762a = [];
    if (!_0x28de77.test(_0x1f24fc)) {
      return null;
    }
    if (_0x1f24fc === "::") {
      return [0, 0, 0, 0, 0, 0, 0, 0];
    }
    if (_0x1f24fc.startsWith("::")) {
      _0x1f24fc = _0x1f24fc.replace("::", "Z:");
    } else {
      _0x1f24fc = _0x1f24fc.replace("::", ":Z:");
    }
    if (_0x1f24fc.indexOf(".") > 0) {
      _0x1f24fc = _0x1f24fc.replace(new RegExp("[.]", "g"), ":");
      _0x3be372 = _0x1f24fc.split(":");
      _0x3be372[_0x3be372.length - 4] = _0x63c89e(_0x3be372[_0x3be372.length - 4]) + _0x63c89e(_0x3be372[_0x3be372.length - 3]) * 256;
      _0x3be372[_0x3be372.length - 3] = _0x63c89e(_0x3be372[_0x3be372.length - 2]) + _0x63c89e(_0x3be372[_0x3be372.length - 1]) * 256;
      _0x3be372 = _0x3be372.slice(0, _0x3be372.length - 2);
    } else {
      _0x3be372 = _0x1f24fc.split(":");
    }
    _0x278cb8 = 0;
    _0x560869 = 0;
    for (_0x3ecaec = 0; _0x3ecaec < _0x3be372.length; _0x3ecaec++) {
      if (typeof _0x3be372[_0x3ecaec] === "string") {
        if (_0x3be372[_0x3ecaec] === "Z") {
          for (_0x560869 = 0; _0x560869 < 8 - _0x3be372.length + 1; _0x560869++) {
            _0x39762a[_0x3ecaec + _0x560869] = 0;
          }
          _0x278cb8 = _0x560869 - 1;
        } else {
          _0x39762a[_0x3ecaec + _0x278cb8] = _0x5e5d65(parseInt(_0x3be372[_0x3ecaec], 16));
        }
      } else {
        _0x39762a[_0x3ecaec + _0x278cb8] = _0x3be372[_0x3ecaec];
      }
    }
    return [_0x39762a[1] << 16 | _0x39762a[0], _0x39762a[3] << 16 | _0x39762a[2], _0x39762a[5] << 16 | _0x39762a[4], _0x39762a[7] << 16 | _0x39762a[6]];
  }
  function _0x486ba9(_0x3e4275, _0x13e050, _0x19af1f, _0x17a573, _0x446c4b) {
    switch (_0x13e050) {
      case 2:
        _0x19af1f = _0x54d824(_0x19af1f);
        if (_0x446c4b) {
          _0x237516[_0x446c4b >> 2] = 16;
        }
        _0x1694cb[_0x3e4275 >> 1] = _0x13e050;
        _0x237516[_0x3e4275 + 4 >> 2] = _0x19af1f;
        _0x1694cb[_0x3e4275 + 2 >> 1] = _0x5e5d65(_0x17a573);
        _0x34c09a = [0, (_0x407d2d = 0, +Math.abs(_0x407d2d) >= 1 ? _0x407d2d > 0 ? (Math.min(+Math.floor(_0x407d2d / 4294967296), 4294967295) | 0) >>> 0 : ~~+Math.ceil((_0x407d2d - +(~~_0x407d2d >>> 0)) / 4294967296) >>> 0 : 0)];
        _0x237516[_0x3e4275 + 8 >> 2] = _0x34c09a[0];
        _0x237516[_0x3e4275 + 12 >> 2] = _0x34c09a[1];
        break;
      case 10:
        _0x19af1f = _0x3648a5(_0x19af1f);
        if (_0x446c4b) {
          _0x237516[_0x446c4b >> 2] = 28;
        }
        _0x237516[_0x3e4275 >> 2] = _0x13e050;
        _0x237516[_0x3e4275 + 8 >> 2] = _0x19af1f[0];
        _0x237516[_0x3e4275 + 12 >> 2] = _0x19af1f[1];
        _0x237516[_0x3e4275 + 16 >> 2] = _0x19af1f[2];
        _0x237516[_0x3e4275 + 20 >> 2] = _0x19af1f[3];
        _0x1694cb[_0x3e4275 + 2 >> 1] = _0x5e5d65(_0x17a573);
        _0x237516[_0x3e4275 + 4 >> 2] = 0;
        _0x237516[_0x3e4275 + 24 >> 2] = 0;
        break;
      default:
        return 5;
    }
    return 0;
  }
  var _0x97f3cc = {
    address_map: {
      id: 1,
      addrs: {},
      names: {}
    },
    lookup_name: function (_0x53b2b0) {
      var _0x4208c1 = _0x54d824(_0x53b2b0);
      if (_0x4208c1 !== null) {
        return _0x53b2b0;
      }
      _0x4208c1 = _0x3648a5(_0x53b2b0);
      if (_0x4208c1 !== null) {
        return _0x53b2b0;
      }
      var _0x21d6c9;
      if (_0x97f3cc.address_map.addrs[_0x53b2b0]) {
        _0x21d6c9 = _0x97f3cc.address_map.addrs[_0x53b2b0];
      } else {
        var _0x4d6598 = _0x97f3cc.address_map.id++;
        _0x4a00f0(_0x4d6598 < 65535, "exceeded max address mappings of 65535");
        _0x21d6c9 = "172.29." + (_0x4d6598 & 255) + "." + (_0x4d6598 & 65280);
        _0x97f3cc.address_map.names[_0x21d6c9] = _0x53b2b0;
        _0x97f3cc.address_map.addrs[_0x53b2b0] = _0x21d6c9;
      }
      return _0x21d6c9;
    },
    lookup_addr: function (_0x3e0dc5) {
      if (_0x97f3cc.address_map.names[_0x3e0dc5]) {
        return _0x97f3cc.address_map.names[_0x3e0dc5];
      }
      return null;
    }
  };
  function _0x4bc937(_0x13974f, _0x8cb1ef, _0x5f48e9, _0x2b2869) {
    try {
      var _0x1cfecb = _0x3c9fb9(_0x13974f);
      var _0x55c68f = _0x1cfecb.sock_ops.accept(_0x1cfecb);
      if (_0x8cb1ef) {
        var _0x27c3bc = _0x486ba9(_0x8cb1ef, _0x55c68f.family, _0x97f3cc.lookup_name(_0x55c68f.daddr), _0x55c68f.dport, _0x5f48e9);
      }
      return _0x55c68f.stream.fd;
    } catch (_0x259ec7) {
      if (typeof _0x3b09e1 === "undefined" || !(_0x259ec7 instanceof _0x3b09e1.ErrnoError)) {
        _0xe8ab44(_0x259ec7);
      }
      return -_0x259ec7.errno;
    }
  }
  function _0x4c8377(_0x2f11b6, _0x2fa442) {
    try {
      _0x2f11b6 = _0x28b4a7.getStr(_0x2f11b6);
      return _0x28b4a7.doAccess(_0x2f11b6, _0x2fa442);
    } catch (_0x372259) {
      if (typeof _0x3b09e1 === "undefined" || !(_0x372259 instanceof _0x3b09e1.ErrnoError)) {
        _0xe8ab44(_0x372259);
      }
      return -_0x372259.errno;
    }
  }
  function _0x37bd70(_0x4dd75d) {
    return (_0x4dd75d & 255) + "." + (_0x4dd75d >> 8 & 255) + "." + (_0x4dd75d >> 16 & 255) + "." + (_0x4dd75d >> 24 & 255);
  }
  function _0xd08ac8(_0x230d5f) {
    var _0x36f441 = "";
    var _0x3888ec = 0;
    var _0x29e39d = 0;
    var _0x4cef8c = 0;
    var _0x535be7 = 0;
    var _0x33d83f = 0;
    var _0x5a1c90 = 0;
    var _0x100d33 = [_0x230d5f[0] & 65535, _0x230d5f[0] >> 16, _0x230d5f[1] & 65535, _0x230d5f[1] >> 16, _0x230d5f[2] & 65535, _0x230d5f[2] >> 16, _0x230d5f[3] & 65535, _0x230d5f[3] >> 16];
    var _0x1691fd = true;
    var _0x585a82 = "";
    for (_0x5a1c90 = 0; _0x5a1c90 < 5; _0x5a1c90++) {
      if (_0x100d33[_0x5a1c90] !== 0) {
        _0x1691fd = false;
        break;
      }
    }
    if (_0x1691fd) {
      _0x585a82 = _0x37bd70(_0x100d33[6] | _0x100d33[7] << 16);
      if (_0x100d33[5] === -1) {
        _0x36f441 = "::ffff:";
        _0x36f441 += _0x585a82;
        return _0x36f441;
      }
      if (_0x100d33[5] === 0) {
        _0x36f441 = "::";
        if (_0x585a82 === "0.0.0.0") {
          _0x585a82 = "";
        }
        if (_0x585a82 === "0.0.0.1") {
          _0x585a82 = "1";
        }
        _0x36f441 += _0x585a82;
        return _0x36f441;
      }
    }
    for (_0x3888ec = 0; _0x3888ec < 8; _0x3888ec++) {
      if (_0x100d33[_0x3888ec] === 0) {
        if (_0x3888ec - _0x4cef8c > 1) {
          _0x33d83f = 0;
        }
        _0x4cef8c = _0x3888ec;
        _0x33d83f++;
      }
      if (_0x33d83f > _0x29e39d) {
        _0x29e39d = _0x33d83f;
        _0x535be7 = _0x3888ec - _0x29e39d + 1;
      }
    }
    for (_0x3888ec = 0; _0x3888ec < 8; _0x3888ec++) {
      if (_0x29e39d > 1) {
        if (_0x100d33[_0x3888ec] === 0 && _0x3888ec >= _0x535be7 && _0x3888ec < _0x535be7 + _0x29e39d) {
          if (_0x3888ec === _0x535be7) {
            _0x36f441 += ":";
            if (_0x535be7 === 0) {
              _0x36f441 += ":";
            }
          }
          continue;
        }
      }
      _0x36f441 += Number(_0x4e9e37(_0x100d33[_0x3888ec] & 65535)).toString(16);
      _0x36f441 += _0x3888ec < 7 ? ":" : "";
    }
    return _0x36f441;
  }
  function _0x1357b7(_0x7da8ed, _0x2ebc53) {
    var _0x382914 = _0x1694cb[_0x7da8ed >> 1];
    var _0x556443 = _0x4e9e37(_0x341180[_0x7da8ed + 2 >> 1]);
    var _0x291e13;
    switch (_0x382914) {
      case 2:
        if (_0x2ebc53 !== 16) {
          return {
            errno: 28
          };
        }
        _0x291e13 = _0x237516[_0x7da8ed + 4 >> 2];
        _0x291e13 = _0x37bd70(_0x291e13);
        break;
      case 10:
        if (_0x2ebc53 !== 28) {
          return {
            errno: 28
          };
        }
        _0x291e13 = [_0x237516[_0x7da8ed + 8 >> 2], _0x237516[_0x7da8ed + 12 >> 2], _0x237516[_0x7da8ed + 16 >> 2], _0x237516[_0x7da8ed + 20 >> 2]];
        _0x291e13 = _0xd08ac8(_0x291e13);
        break;
      default:
        return {
          errno: 5
        };
    }
    return {
      family: _0x382914,
      addr: _0x291e13,
      port: _0x556443
    };
  }
  function _0x5db370(_0x17dd93, _0x1b1a52, _0x584a9e) {
    if (_0x584a9e && _0x17dd93 === 0) {
      return null;
    }
    var _0x470b44 = _0x1357b7(_0x17dd93, _0x1b1a52);
    if (_0x470b44.errno) {
      throw new _0x3b09e1.ErrnoError(_0x470b44.errno);
    }
    _0x470b44.addr = _0x97f3cc.lookup_addr(_0x470b44.addr) || _0x470b44.addr;
    return _0x470b44;
  }
  function _0x4081e5(_0xd02be4, _0x108db4, _0x477fa2) {
    try {
      var _0x168f0d = _0x3c9fb9(_0xd02be4);
      var _0x24426f = _0x5db370(_0x108db4, _0x477fa2);
      _0x168f0d.sock_ops.bind(_0x168f0d, _0x24426f.addr, _0x24426f.port);
      return 0;
    } catch (_0xec0a59) {
      if (typeof _0x3b09e1 === "undefined" || !(_0xec0a59 instanceof _0x3b09e1.ErrnoError)) {
        _0xe8ab44(_0xec0a59);
      }
      return -_0xec0a59.errno;
    }
  }
  function _0x17753f(_0x5e3a03, _0x36e715) {
    try {
      _0x5e3a03 = _0x28b4a7.getStr(_0x5e3a03);
      _0x3b09e1.chmod(_0x5e3a03, _0x36e715);
      return 0;
    } catch (_0xb51d4c) {
      if (typeof _0x3b09e1 === "undefined" || !(_0xb51d4c instanceof _0x3b09e1.ErrnoError)) {
        _0xe8ab44(_0xb51d4c);
      }
      return -_0xb51d4c.errno;
    }
  }
  function _0x18e6f0(_0x4ceac7, _0x2fd710, _0xce5576) {
    try {
      var _0x15577a = _0x3c9fb9(_0x4ceac7);
      var _0x26ce77 = _0x5db370(_0x2fd710, _0xce5576);
      _0x15577a.sock_ops.connect(_0x15577a, _0x26ce77.addr, _0x26ce77.port);
      return 0;
    } catch (_0x28a977) {
      if (typeof _0x3b09e1 === "undefined" || !(_0x28a977 instanceof _0x3b09e1.ErrnoError)) {
        _0xe8ab44(_0x28a977);
      }
      return -_0x28a977.errno;
    }
  }
  function _0x113bf0(_0x193230, _0x2447b4) {
    try {
      var _0x16716f = _0x28b4a7.getStreamFromFD(_0x193230);
      if (_0x16716f.fd === _0x2447b4) {
        return _0x2447b4;
      }
      return _0x28b4a7.doDup(_0x16716f.path, _0x16716f.flags, _0x2447b4);
    } catch (_0x5810ca) {
      if (typeof _0x3b09e1 === "undefined" || !(_0x5810ca instanceof _0x3b09e1.ErrnoError)) {
        _0xe8ab44(_0x5810ca);
      }
      return -_0x5810ca.errno;
    }
  }
  function _0x55e400(_0x2440a1, _0x3dc345, _0x46819b) {
    _0x28b4a7.varargs = _0x46819b;
    try {
      var _0x4bcae9 = _0x28b4a7.getStreamFromFD(_0x2440a1);
      switch (_0x3dc345) {
        case 0:
          {
            var _0x35dc93 = _0x28b4a7.get();
            if (_0x35dc93 < 0) {
              return -28;
            }
            var _0x573c83;
            _0x573c83 = _0x3b09e1.open(_0x4bcae9.path, _0x4bcae9.flags, 0, _0x35dc93);
            return _0x573c83.fd;
          }
        case 1:
        case 2:
          return 0;
        case 3:
          return _0x4bcae9.flags;
        case 4:
          {
            var _0x35dc93 = _0x28b4a7.get();
            _0x4bcae9.flags |= _0x35dc93;
            return 0;
          }
        case 12:
          {
            var _0x35dc93 = _0x28b4a7.get();
            var _0x508980 = 0;
            _0x1694cb[_0x35dc93 + _0x508980 >> 1] = 2;
            return 0;
          }
        case 13:
        case 14:
          return 0;
        case 16:
        case 8:
          return -28;
        case 9:
          _0x893198(28);
          return -1;
        default:
          {
            return -28;
          }
      }
    } catch (_0x28ade4) {
      if (typeof _0x3b09e1 === "undefined" || !(_0x28ade4 instanceof _0x3b09e1.ErrnoError)) {
        _0xe8ab44(_0x28ade4);
      }
      return -_0x28ade4.errno;
    }
  }
  function _0x1201c3(_0xe4bc25, _0x5dcfce) {
    try {
      var _0x40fd1d = _0x28b4a7.getStreamFromFD(_0xe4bc25);
      return _0x28b4a7.doStat(_0x3b09e1.stat, _0x40fd1d.path, _0x5dcfce);
    } catch (_0x18ccc8) {
      if (typeof _0x3b09e1 === "undefined" || !(_0x18ccc8 instanceof _0x3b09e1.ErrnoError)) {
        _0xe8ab44(_0x18ccc8);
      }
      return -_0x18ccc8.errno;
    }
  }
  function _0x434804(_0xb07299, _0x3759d5, _0x53ba61, _0x1fab66) {
    try {
      var _0x1f5ac6 = _0x28b4a7.get64(_0x53ba61, _0x1fab66);
      _0x3b09e1.ftruncate(_0xb07299, _0x1f5ac6);
      return 0;
    } catch (_0x44345b) {
      if (typeof _0x3b09e1 === "undefined" || !(_0x44345b instanceof _0x3b09e1.ErrnoError)) {
        _0xe8ab44(_0x44345b);
      }
      return -_0x44345b.errno;
    }
  }
  function _0x2cf558(_0xab47f5, _0x39985b) {
    try {
      if (_0x39985b === 0) {
        return -28;
      }
      var _0x2f4f60 = _0x3b09e1.cwd();
      var _0x29dba7 = _0x40b564(_0x2f4f60);
      if (_0x39985b < _0x29dba7 + 1) {
        return -68;
      }
      _0x16748b(_0x2f4f60, _0xab47f5, _0x39985b);
      return _0xab47f5;
    } catch (_0x4b40f2) {
      if (typeof _0x3b09e1 === "undefined" || !(_0x4b40f2 instanceof _0x3b09e1.ErrnoError)) {
        _0xe8ab44(_0x4b40f2);
      }
      return -_0x4b40f2.errno;
    }
  }
  function _0xf59083(_0x5c56a1, _0x553a7f, _0x49811a) {
    try {
      var _0x25198c = _0x28b4a7.getStreamFromFD(_0x5c56a1);
      if (!_0x25198c.getdents) {
        _0x25198c.getdents = _0x3b09e1.readdir(_0x25198c.path);
      }
      var _0x1011d5 = 280;
      var _0x28b0eb = 0;
      var _0xe41af2 = _0x3b09e1.llseek(_0x25198c, 0, 1);
      var _0x6ac95b = Math.floor(_0xe41af2 / _0x1011d5);
      while (_0x6ac95b < _0x25198c.getdents.length && _0x28b0eb + _0x1011d5 <= _0x49811a) {
        var _0x546c0d;
        var _0x4f3d56;
        var _0x15c91a = _0x25198c.getdents[_0x6ac95b];
        if (_0x15c91a[0] === ".") {
          _0x546c0d = 1;
          _0x4f3d56 = 4;
        } else {
          var _0x35d48c = _0x3b09e1.lookupNode(_0x25198c.node, _0x15c91a);
          _0x546c0d = _0x35d48c.id;
          _0x4f3d56 = _0x3b09e1.isChrdev(_0x35d48c.mode) ? 2 : _0x3b09e1.isDir(_0x35d48c.mode) ? 4 : _0x3b09e1.isLink(_0x35d48c.mode) ? 10 : 8;
        }
        _0x34c09a = [_0x546c0d >>> 0, (_0x407d2d = _0x546c0d, +Math.abs(_0x407d2d) >= 1 ? _0x407d2d > 0 ? (Math.min(+Math.floor(_0x407d2d / 4294967296), 4294967295) | 0) >>> 0 : ~~+Math.ceil((_0x407d2d - +(~~_0x407d2d >>> 0)) / 4294967296) >>> 0 : 0)];
        _0x237516[_0x553a7f + _0x28b0eb >> 2] = _0x34c09a[0];
        _0x237516[_0x553a7f + _0x28b0eb + 4 >> 2] = _0x34c09a[1];
        _0x34c09a = [(_0x6ac95b + 1) * _0x1011d5 >>> 0, (_0x407d2d = (_0x6ac95b + 1) * _0x1011d5, +Math.abs(_0x407d2d) >= 1 ? _0x407d2d > 0 ? (Math.min(+Math.floor(_0x407d2d / 4294967296), 4294967295) | 0) >>> 0 : ~~+Math.ceil((_0x407d2d - +(~~_0x407d2d >>> 0)) / 4294967296) >>> 0 : 0)];
        _0x237516[_0x553a7f + _0x28b0eb + 8 >> 2] = _0x34c09a[0];
        _0x237516[_0x553a7f + _0x28b0eb + 12 >> 2] = _0x34c09a[1];
        _0x1694cb[_0x553a7f + _0x28b0eb + 16 >> 1] = 280;
        _0x1cc374[_0x553a7f + _0x28b0eb + 18 >> 0] = _0x4f3d56;
        _0x16748b(_0x15c91a, _0x553a7f + _0x28b0eb + 19, 256);
        _0x28b0eb += _0x1011d5;
        _0x6ac95b += 1;
      }
      _0x3b09e1.llseek(_0x25198c, _0x6ac95b * _0x1011d5, 0);
      return _0x28b0eb;
    } catch (_0x57c149) {
      if (typeof _0x3b09e1 === "undefined" || !(_0x57c149 instanceof _0x3b09e1.ErrnoError)) {
        _0xe8ab44(_0x57c149);
      }
      return -_0x57c149.errno;
    }
  }
  function _0x35dd02() {
    return 0;
  }
  function _0x2f72f9() {
    return _0x35dd02();
  }
  function _0x51f777(_0x362df6, _0x50c219, _0x8ecc5c) {
    try {
      var _0x41e770 = _0x3c9fb9(_0x362df6);
      if (!_0x41e770.daddr) {
        return -53;
      }
      var _0x21101e = _0x486ba9(_0x50c219, _0x41e770.family, _0x97f3cc.lookup_name(_0x41e770.daddr), _0x41e770.dport, _0x8ecc5c);
      return 0;
    } catch (_0x3d655f) {
      if (typeof _0x3b09e1 === "undefined" || !(_0x3d655f instanceof _0x3b09e1.ErrnoError)) {
        _0xe8ab44(_0x3d655f);
      }
      return -_0x3d655f.errno;
    }
  }
  function _0x54d5aa() {
    return 42;
  }
  function _0x2fc5ca(_0x40b924, _0x49ae47) {
    try {
      _0x784a1c(_0x49ae47, 0, 136);
      _0x237516[_0x49ae47 >> 2] = 1;
      _0x237516[_0x49ae47 + 4 >> 2] = 2;
      _0x237516[_0x49ae47 + 8 >> 2] = 3;
      _0x237516[_0x49ae47 + 12 >> 2] = 4;
      return 0;
    } catch (_0x14d86a) {
      if (typeof _0x3b09e1 === "undefined" || !(_0x14d86a instanceof _0x3b09e1.ErrnoError)) {
        _0xe8ab44(_0x14d86a);
      }
      return -_0x14d86a.errno;
    }
  }
  function _0x6a4a21(_0x1069b5, _0x3dc9e9, _0x9b2e62) {
    try {
      _0x4677f2("__sys_getsockname " + _0x1069b5);
      var _0x5c8d8e = _0x3c9fb9(_0x1069b5);
      var _0xe2fbbd = _0x486ba9(_0x3dc9e9, _0x5c8d8e.family, _0x97f3cc.lookup_name(_0x5c8d8e.saddr || "0.0.0.0"), _0x5c8d8e.sport, _0x9b2e62);
      return 0;
    } catch (_0x1e4539) {
      if (typeof _0x3b09e1 === "undefined" || !(_0x1e4539 instanceof _0x3b09e1.ErrnoError)) {
        _0xe8ab44(_0x1e4539);
      }
      return -_0x1e4539.errno;
    }
  }
  function _0x45b0b3(_0x23b54f, _0x2d3e43, _0x5bafa2, _0x3d2a9e, _0x2e4859) {
    try {
      var _0x2e0e95 = _0x3c9fb9(_0x23b54f);
      if (_0x2d3e43 === 1) {
        if (_0x5bafa2 === 4) {
          _0x237516[_0x3d2a9e >> 2] = _0x2e0e95.error;
          _0x237516[_0x2e4859 >> 2] = 4;
          _0x2e0e95.error = null;
          return 0;
        }
      }
      return -50;
    } catch (_0xd4fd00) {
      if (typeof _0x3b09e1 === "undefined" || !(_0xd4fd00 instanceof _0x3b09e1.ErrnoError)) {
        _0xe8ab44(_0xd4fd00);
      }
      return -_0xd4fd00.errno;
    }
  }
  function _0x2e6efd() {
    return _0x35dd02();
  }
  function _0x2d06b5(_0x26ac4a, _0x388c29, _0x2d0012) {
    _0x28b4a7.varargs = _0x2d0012;
    try {
      var _0x57ec0a = _0x28b4a7.getStreamFromFD(_0x26ac4a);
      switch (_0x388c29) {
        case 21509:
        case 21505:
          {
            if (!_0x57ec0a.tty) {
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
            if (!_0x57ec0a.tty) {
              return -59;
            }
            return 0;
          }
        case 21519:
          {
            if (!_0x57ec0a.tty) {
              return -59;
            }
            var _0x28cfa3 = _0x28b4a7.get();
            _0x237516[_0x28cfa3 >> 2] = 0;
            return 0;
          }
        case 21520:
          {
            if (!_0x57ec0a.tty) {
              return -59;
            }
            return -28;
          }
        case 21531:
          {
            var _0x28cfa3 = _0x28b4a7.get();
            return _0x3b09e1.ioctl(_0x57ec0a, _0x388c29, _0x28cfa3);
          }
        case 21523:
          {
            if (!_0x57ec0a.tty) {
              return -59;
            }
            return 0;
          }
        case 21524:
          {
            if (!_0x57ec0a.tty) {
              return -59;
            }
            return 0;
          }
        default:
          _0xe8ab44("bad ioctl syscall " + _0x388c29);
      }
    } catch (_0x55bd99) {
      if (typeof _0x3b09e1 === "undefined" || !(_0x55bd99 instanceof _0x3b09e1.ErrnoError)) {
        _0xe8ab44(_0x55bd99);
      }
      return -_0x55bd99.errno;
    }
  }
  function _0x1949cb(_0x29fbd5, _0x35b56a) {
    try {
      var _0x121c97 = _0x3c9fb9(_0x29fbd5);
      _0x121c97.sock_ops.listen(_0x121c97, _0x35b56a);
      return 0;
    } catch (_0x1c1808) {
      if (typeof _0x3b09e1 === "undefined" || !(_0x1c1808 instanceof _0x3b09e1.ErrnoError)) {
        _0xe8ab44(_0x1c1808);
      }
      return -_0x1c1808.errno;
    }
  }
  function _0x27ef67(_0x760e9b, _0x3b6d10) {
    try {
      _0x760e9b = _0x28b4a7.getStr(_0x760e9b);
      return _0x28b4a7.doStat(_0x3b09e1.lstat, _0x760e9b, _0x3b6d10);
    } catch (_0x216efa) {
      if (typeof _0x3b09e1 === "undefined" || !(_0x216efa instanceof _0x3b09e1.ErrnoError)) {
        _0xe8ab44(_0x216efa);
      }
      return -_0x216efa.errno;
    }
  }
  function _0x415090(_0x2dbea6, _0x623cc5) {
    try {
      _0x2dbea6 = _0x28b4a7.getStr(_0x2dbea6);
      return _0x28b4a7.doMkdir(_0x2dbea6, _0x623cc5);
    } catch (_0x4c8ff7) {
      if (typeof _0x3b09e1 === "undefined" || !(_0x4c8ff7 instanceof _0x3b09e1.ErrnoError)) {
        _0xe8ab44(_0x4c8ff7);
      }
      return -_0x4c8ff7.errno;
    }
  }
  function _0x30b4ec(_0x41aa2b, _0x23252a, _0x5414ed, _0x3274d5, _0x438e9d, _0x5eca92) {
    _0x5eca92 <<= 12;
    var _0x4f27f1;
    var _0x3221bc = false;
    if ((_0x3274d5 & 16) !== 0 && _0x41aa2b % 65536 !== 0) {
      return -28;
    }
    if ((_0x3274d5 & 32) !== 0) {
      _0x4f27f1 = _0xd97d2e(65536, _0x23252a);
      if (!_0x4f27f1) {
        return -48;
      }
      _0x784a1c(_0x4f27f1, 0, _0x23252a);
      _0x3221bc = true;
    } else {
      var _0x23f26f = _0x3b09e1.getStream(_0x438e9d);
      if (!_0x23f26f) {
        return -8;
      }
      var _0x535f91 = _0x3b09e1.mmap(_0x23f26f, _0x41aa2b, _0x23252a, _0x5eca92, _0x5414ed, _0x3274d5);
      _0x4f27f1 = _0x535f91.ptr;
      _0x3221bc = _0x535f91.allocated;
    }
    _0x28b4a7.mappings[_0x4f27f1] = {
      malloc: _0x4f27f1,
      len: _0x23252a,
      allocated: _0x3221bc,
      fd: _0x438e9d,
      prot: _0x5414ed,
      flags: _0x3274d5,
      offset: _0x5eca92
    };
    return _0x4f27f1;
  }
  function _0x1aa945(_0x8166da, _0x1dbb28, _0x368faa, _0x2d9089, _0x5b55ee, _0x531088) {
    try {
      return _0x30b4ec(_0x8166da, _0x1dbb28, _0x368faa, _0x2d9089, _0x5b55ee, _0x531088);
    } catch (_0x55cd03) {
      if (typeof _0x3b09e1 === "undefined" || !(_0x55cd03 instanceof _0x3b09e1.ErrnoError)) {
        _0xe8ab44(_0x55cd03);
      }
      return -_0x55cd03.errno;
    }
  }
  function _0x1962a4(_0x40d877, _0x3c87c8) {
    if ((_0x40d877 | 0) === -1 || _0x3c87c8 === 0) {
      return -28;
    }
    var _0x50f6a7 = _0x28b4a7.mappings[_0x40d877];
    if (!_0x50f6a7) {
      return 0;
    }
    if (_0x3c87c8 === _0x50f6a7.len) {
      var _0x176eac = _0x3b09e1.getStream(_0x50f6a7.fd);
      if (_0x176eac) {
        if (_0x50f6a7.prot & 2) {
          _0x28b4a7.doMsync(_0x40d877, _0x176eac, _0x3c87c8, _0x50f6a7.flags, _0x50f6a7.offset);
        }
        _0x3b09e1.munmap(_0x176eac);
      }
      _0x28b4a7.mappings[_0x40d877] = null;
      if (_0x50f6a7.allocated) {
        _0xe462f0(_0x50f6a7.malloc);
      }
    }
    return 0;
  }
  function _0x1c0424(_0x142d93, _0x35609f) {
    try {
      return _0x1962a4(_0x142d93, _0x35609f);
    } catch (_0xd59604) {
      if (typeof _0x3b09e1 === "undefined" || !(_0xd59604 instanceof _0x3b09e1.ErrnoError)) {
        _0xe8ab44(_0xd59604);
      }
      return -_0xd59604.errno;
    }
  }
  function _0x46f826(_0x79efc0, _0x33f6b4, _0x4ec5e7) {
    _0x28b4a7.varargs = _0x4ec5e7;
    try {
      var _0x4b2e50 = _0x28b4a7.getStr(_0x79efc0);
      var _0x3c7fa5 = _0x4ec5e7 ? _0x28b4a7.get() : 0;
      var _0x15d82a = _0x3b09e1.open(_0x4b2e50, _0x33f6b4, _0x3c7fa5);
      return _0x15d82a.fd;
    } catch (_0x3f1622) {
      if (typeof _0x3b09e1 === "undefined" || !(_0x3f1622 instanceof _0x3b09e1.ErrnoError)) {
        _0xe8ab44(_0x3f1622);
      }
      return -_0x3f1622.errno;
    }
  }
  var _0x2f30de = {
    BUCKET_BUFFER_SIZE: 8192,
    mount: function (_0x15db47) {
      return _0x3b09e1.createNode(null, "/", 16895, 0);
    },
    createPipe: function () {
      var _0x5b4347 = {
        buckets: []
      };
      _0x5b4347.buckets.push({
        buffer: new Uint8Array(_0x2f30de.BUCKET_BUFFER_SIZE),
        offset: 0,
        roffset: 0
      });
      var _0x5cb112 = _0x2f30de.nextname();
      var _0x5b47c5 = _0x2f30de.nextname();
      var _0x1091e0 = _0x3b09e1.createNode(_0x2f30de.root, _0x5cb112, 4096, 0);
      var _0xb3b26b = _0x3b09e1.createNode(_0x2f30de.root, _0x5b47c5, 4096, 0);
      _0x1091e0.pipe = _0x5b4347;
      _0xb3b26b.pipe = _0x5b4347;
      var _0x5932c3 = _0x3b09e1.createStream({
        path: _0x5cb112,
        node: _0x1091e0,
        flags: 0,
        seekable: false,
        stream_ops: _0x2f30de.stream_ops
      });
      _0x1091e0.stream = _0x5932c3;
      var _0x3ae0a5 = _0x3b09e1.createStream({
        path: _0x5b47c5,
        node: _0xb3b26b,
        flags: 1,
        seekable: false,
        stream_ops: _0x2f30de.stream_ops
      });
      _0xb3b26b.stream = _0x3ae0a5;
      return {
        readable_fd: _0x5932c3.fd,
        writable_fd: _0x3ae0a5.fd
      };
    },
    stream_ops: {
      poll: function (_0x4f0449) {
        var _0x47853e = _0x4f0449.node.pipe;
        if ((_0x4f0449.flags & 2097155) === 1) {
          return 260;
        } else if (_0x47853e.buckets.length > 0) {
          for (var _0x458ca8 = 0; _0x458ca8 < _0x47853e.buckets.length; _0x458ca8++) {
            var _0x49228b = _0x47853e.buckets[_0x458ca8];
            if (_0x49228b.offset - _0x49228b.roffset > 0) {
              return 65;
            }
          }
        }
        return 0;
      },
      ioctl: function (_0x49d889, _0x59dc4d, _0x31ebd4) {
        return _0x53e766.EINVAL;
      },
      fsync: function (_0x4c0745) {
        return _0x53e766.EINVAL;
      },
      read: function (_0x2c956d, _0x2fc103, _0x5d3b72, _0x5dc11f, _0x22d192) {
        var _0x544060 = _0x2c956d.node.pipe;
        var _0x5e9a5c = 0;
        for (var _0x2bf2eb = 0; _0x2bf2eb < _0x544060.buckets.length; _0x2bf2eb++) {
          var _0x11425b = _0x544060.buckets[_0x2bf2eb];
          _0x5e9a5c += _0x11425b.offset - _0x11425b.roffset;
        }
        _0x4a00f0(_0x2fc103 instanceof ArrayBuffer || ArrayBuffer.isView(_0x2fc103));
        var _0x47c087 = _0x2fc103.subarray(_0x5d3b72, _0x5d3b72 + _0x5dc11f);
        if (_0x5dc11f <= 0) {
          return 0;
        }
        if (_0x5e9a5c == 0) {
          throw new _0x3b09e1.ErrnoError(_0x53e766.EAGAIN);
        }
        var _0x891852 = Math.min(_0x5e9a5c, _0x5dc11f);
        var _0x4745cd = _0x891852;
        var _0x1a15fb = 0;
        for (var _0x2bf2eb = 0; _0x2bf2eb < _0x544060.buckets.length; _0x2bf2eb++) {
          var _0x1f5702 = _0x544060.buckets[_0x2bf2eb];
          var _0x4cda8e = _0x1f5702.offset - _0x1f5702.roffset;
          if (_0x891852 <= _0x4cda8e) {
            var _0x40d5a0 = _0x1f5702.buffer.subarray(_0x1f5702.roffset, _0x1f5702.offset);
            if (_0x891852 < _0x4cda8e) {
              _0x40d5a0 = _0x40d5a0.subarray(0, _0x891852);
              _0x1f5702.roffset += _0x891852;
            } else {
              _0x1a15fb++;
            }
            _0x47c087.set(_0x40d5a0);
            break;
          } else {
            var _0x40d5a0 = _0x1f5702.buffer.subarray(_0x1f5702.roffset, _0x1f5702.offset);
            _0x47c087.set(_0x40d5a0);
            _0x47c087 = _0x47c087.subarray(_0x40d5a0.byteLength);
            _0x891852 -= _0x40d5a0.byteLength;
            _0x1a15fb++;
          }
        }
        if (_0x1a15fb && _0x1a15fb == _0x544060.buckets.length) {
          _0x1a15fb--;
          _0x544060.buckets[_0x1a15fb].offset = 0;
          _0x544060.buckets[_0x1a15fb].roffset = 0;
        }
        _0x544060.buckets.splice(0, _0x1a15fb);
        return _0x4745cd;
      },
      write: function (_0x4a163a, _0xa10a2, _0x320d1d, _0x17d767, _0x4f37d3) {
        var _0xcd774e = _0x4a163a.node.pipe;
        _0x4a00f0(_0xa10a2 instanceof ArrayBuffer || ArrayBuffer.isView(_0xa10a2));
        var _0xd02e54 = _0xa10a2.subarray(_0x320d1d, _0x320d1d + _0x17d767);
        var _0xfbf796 = _0xd02e54.byteLength;
        if (_0xfbf796 <= 0) {
          return 0;
        }
        var _0x8c70b6 = null;
        if (_0xcd774e.buckets.length == 0) {
          _0x8c70b6 = {
            buffer: new Uint8Array(_0x2f30de.BUCKET_BUFFER_SIZE),
            offset: 0,
            roffset: 0
          };
          _0xcd774e.buckets.push(_0x8c70b6);
        } else {
          _0x8c70b6 = _0xcd774e.buckets[_0xcd774e.buckets.length - 1];
        }
        _0x4a00f0(_0x8c70b6.offset <= _0x2f30de.BUCKET_BUFFER_SIZE);
        var _0x15b68a = _0x2f30de.BUCKET_BUFFER_SIZE - _0x8c70b6.offset;
        if (_0x15b68a >= _0xfbf796) {
          _0x8c70b6.buffer.set(_0xd02e54, _0x8c70b6.offset);
          _0x8c70b6.offset += _0xfbf796;
          return _0xfbf796;
        } else if (_0x15b68a > 0) {
          _0x8c70b6.buffer.set(_0xd02e54.subarray(0, _0x15b68a), _0x8c70b6.offset);
          _0x8c70b6.offset += _0x15b68a;
          _0xd02e54 = _0xd02e54.subarray(_0x15b68a, _0xd02e54.byteLength);
        }
        var _0x532147 = _0xd02e54.byteLength / _0x2f30de.BUCKET_BUFFER_SIZE | 0;
        var _0x1243c9 = _0xd02e54.byteLength % _0x2f30de.BUCKET_BUFFER_SIZE;
        for (var _0x8455f7 = 0; _0x8455f7 < _0x532147; _0x8455f7++) {
          var _0x42f959 = {
            buffer: new Uint8Array(_0x2f30de.BUCKET_BUFFER_SIZE),
            offset: _0x2f30de.BUCKET_BUFFER_SIZE,
            roffset: 0
          };
          _0xcd774e.buckets.push(_0x42f959);
          _0x42f959.buffer.set(_0xd02e54.subarray(0, _0x2f30de.BUCKET_BUFFER_SIZE));
          _0xd02e54 = _0xd02e54.subarray(_0x2f30de.BUCKET_BUFFER_SIZE, _0xd02e54.byteLength);
        }
        if (_0x1243c9 > 0) {
          var _0x42f959 = {
            buffer: new Uint8Array(_0x2f30de.BUCKET_BUFFER_SIZE),
            offset: _0xd02e54.byteLength,
            roffset: 0
          };
          _0xcd774e.buckets.push(_0x42f959);
          _0x42f959.buffer.set(_0xd02e54);
        }
        return _0xfbf796;
      },
      close: function (_0x432bdd) {
        var _0x2cef27 = _0x432bdd.node.pipe;
        _0x2cef27.buckets = null;
      }
    },
    nextname: function () {
      if (!_0x2f30de.nextname.current) {
        _0x2f30de.nextname.current = 0;
      }
      return "pipe[" + _0x2f30de.nextname.current++ + "]";
    }
  };
  function _0x430efc(_0x47fb46) {
    try {
      if (_0x47fb46 == 0) {
        throw new _0x3b09e1.ErrnoError(21);
      }
      var _0x4f086f = _0x2f30de.createPipe();
      _0x237516[_0x47fb46 >> 2] = _0x4f086f.readable_fd;
      _0x237516[_0x47fb46 + 4 >> 2] = _0x4f086f.writable_fd;
      return 0;
    } catch (_0x831b48) {
      if (typeof _0x3b09e1 === "undefined" || !(_0x831b48 instanceof _0x3b09e1.ErrnoError)) {
        _0xe8ab44(_0x831b48);
      }
      return -_0x831b48.errno;
    }
  }
  function _0x21f95a(_0x46b308, _0x189525, _0x170e40) {
    try {
      var _0x2edcda = 0;
      for (var _0x80e655 = 0; _0x80e655 < _0x189525; _0x80e655++) {
        var _0x3102bb = _0x46b308 + _0x80e655 * 8;
        var _0x6c0a1f = _0x237516[_0x3102bb >> 2];
        var _0x45ded1 = _0x1694cb[_0x3102bb + 4 >> 1];
        var _0x51d661 = 32;
        var _0xd64eb = _0x3b09e1.getStream(_0x6c0a1f);
        if (_0xd64eb) {
          _0x51d661 = _0x28b4a7.DEFAULT_POLLMASK;
          if (_0xd64eb.stream_ops.poll) {
            _0x51d661 = _0xd64eb.stream_ops.poll(_0xd64eb);
          }
        }
        _0x51d661 &= _0x45ded1 | 8 | 16;
        if (_0x51d661) {
          _0x2edcda++;
        }
        _0x1694cb[_0x3102bb + 6 >> 1] = _0x51d661;
      }
      return _0x2edcda;
    } catch (_0x370825) {
      if (typeof _0x3b09e1 === "undefined" || !(_0x370825 instanceof _0x3b09e1.ErrnoError)) {
        _0xe8ab44(_0x370825);
      }
      return -_0x370825.errno;
    }
  }
  function _0x2653b5(_0x2cc25b, _0x49b511, _0x1eb082) {
    try {
      _0x2cc25b = _0x28b4a7.getStr(_0x2cc25b);
      return _0x28b4a7.doReadlink(_0x2cc25b, _0x49b511, _0x1eb082);
    } catch (_0x35a84f) {
      if (typeof _0x3b09e1 === "undefined" || !(_0x35a84f instanceof _0x3b09e1.ErrnoError)) {
        _0xe8ab44(_0x35a84f);
      }
      return -_0x35a84f.errno;
    }
  }
  function _0x2bd7ef(_0x2ca8c6, _0x1b09f4, _0x4a0fe6, _0x27fb36, _0x3964c5, _0x333e47) {
    try {
      var _0x2e0031 = _0x3c9fb9(_0x2ca8c6);
      var _0x4f28d1 = _0x2e0031.sock_ops.recvmsg(_0x2e0031, _0x4a0fe6);
      if (!_0x4f28d1) {
        return 0;
      }
      if (_0x3964c5) {
        var _0x64cdd6 = _0x486ba9(_0x3964c5, _0x2e0031.family, _0x97f3cc.lookup_name(_0x4f28d1.addr), _0x4f28d1.port, _0x333e47);
      }
      _0x312996.set(_0x4f28d1.buffer, _0x1b09f4);
      return _0x4f28d1.buffer.byteLength;
    } catch (_0x53afab) {
      if (typeof _0x3b09e1 === "undefined" || !(_0x53afab instanceof _0x3b09e1.ErrnoError)) {
        _0xe8ab44(_0x53afab);
      }
      return -_0x53afab.errno;
    }
  }
  function _0x3dc329(_0x312779, _0x262205, _0xcf3222) {
    try {
      var _0x4bb602 = _0x3c9fb9(_0x312779);
      var _0x36d6b0 = _0x237516[_0x262205 + 8 >> 2];
      var _0x3a8f89 = _0x237516[_0x262205 + 12 >> 2];
      var _0x26f5d5 = 0;
      for (var _0x49ab13 = 0; _0x49ab13 < _0x3a8f89; _0x49ab13++) {
        _0x26f5d5 += _0x237516[_0x36d6b0 + (_0x49ab13 * 8 + 4) >> 2];
      }
      var _0xbab1f0 = _0x4bb602.sock_ops.recvmsg(_0x4bb602, _0x26f5d5);
      if (!_0xbab1f0) {
        return 0;
      }
      var _0x2255e3 = _0x237516[_0x262205 >> 2];
      if (_0x2255e3) {
        var _0x508780 = _0x486ba9(_0x2255e3, _0x4bb602.family, _0x97f3cc.lookup_name(_0xbab1f0.addr), _0xbab1f0.port);
      }
      var _0x3ad285 = 0;
      var _0x155d4c = _0xbab1f0.buffer.byteLength;
      for (var _0x49ab13 = 0; _0x155d4c > 0 && _0x49ab13 < _0x3a8f89; _0x49ab13++) {
        var _0xfe8eb1 = _0x237516[_0x36d6b0 + (_0x49ab13 * 8 + 0) >> 2];
        var _0x2165b8 = _0x237516[_0x36d6b0 + (_0x49ab13 * 8 + 4) >> 2];
        if (!_0x2165b8) {
          continue;
        }
        var _0x3685d2 = Math.min(_0x2165b8, _0x155d4c);
        var _0x5cf61a = _0xbab1f0.buffer.subarray(_0x3ad285, _0x3ad285 + _0x3685d2);
        _0x312996.set(_0x5cf61a, _0xfe8eb1 + _0x3ad285);
        _0x3ad285 += _0x3685d2;
        _0x155d4c -= _0x3685d2;
      }
      return _0x3ad285;
    } catch (_0x41cb41) {
      if (typeof _0x3b09e1 === "undefined" || !(_0x41cb41 instanceof _0x3b09e1.ErrnoError)) {
        _0xe8ab44(_0x41cb41);
      }
      return -_0x41cb41.errno;
    }
  }
  function _0x5b1ba6(_0x5aaa41, _0x4c98d6) {
    try {
      _0x5aaa41 = _0x28b4a7.getStr(_0x5aaa41);
      _0x4c98d6 = _0x28b4a7.getStr(_0x4c98d6);
      _0x3b09e1.rename(_0x5aaa41, _0x4c98d6);
      return 0;
    } catch (_0x1ca6f2) {
      if (typeof _0x3b09e1 === "undefined" || !(_0x1ca6f2 instanceof _0x3b09e1.ErrnoError)) {
        _0xe8ab44(_0x1ca6f2);
      }
      return -_0x1ca6f2.errno;
    }
  }
  function _0x126a08(_0x1ea405) {
    try {
      _0x1ea405 = _0x28b4a7.getStr(_0x1ea405);
      _0x3b09e1.rmdir(_0x1ea405);
      return 0;
    } catch (_0x14fabf) {
      if (typeof _0x3b09e1 === "undefined" || !(_0x14fabf instanceof _0x3b09e1.ErrnoError)) {
        _0xe8ab44(_0x14fabf);
      }
      return -_0x14fabf.errno;
    }
  }
  function _0x49a4fd(_0x5e010b, _0x2cff4d, _0x4aa2a9) {
    try {
      var _0x4896ad = _0x3c9fb9(_0x5e010b);
      var _0x4ea5a1 = _0x237516[_0x2cff4d + 8 >> 2];
      var _0x50b972 = _0x237516[_0x2cff4d + 12 >> 2];
      var _0x2dd4b2;
      var _0x297afd;
      var _0x3cafd8 = _0x237516[_0x2cff4d >> 2];
      var _0xe1e5a6 = _0x237516[_0x2cff4d + 4 >> 2];
      if (_0x3cafd8) {
        var _0x215825 = _0x1357b7(_0x3cafd8, _0xe1e5a6);
        if (_0x215825.errno) {
          return -_0x215825.errno;
        }
        _0x297afd = _0x215825.port;
        _0x2dd4b2 = _0x97f3cc.lookup_addr(_0x215825.addr) || _0x215825.addr;
      }
      var _0x222f37 = 0;
      for (var _0x44135e = 0; _0x44135e < _0x50b972; _0x44135e++) {
        _0x222f37 += _0x237516[_0x4ea5a1 + (_0x44135e * 8 + 4) >> 2];
      }
      var _0x402f96 = new Uint8Array(_0x222f37);
      var _0xbb34c8 = 0;
      for (var _0x44135e = 0; _0x44135e < _0x50b972; _0x44135e++) {
        var _0x1c1bca = _0x237516[_0x4ea5a1 + (_0x44135e * 8 + 0) >> 2];
        var _0x475124 = _0x237516[_0x4ea5a1 + (_0x44135e * 8 + 4) >> 2];
        for (var _0x51a031 = 0; _0x51a031 < _0x475124; _0x51a031++) {
          _0x402f96[_0xbb34c8++] = _0x1cc374[_0x1c1bca + _0x51a031 >> 0];
        }
      }
      return _0x4896ad.sock_ops.sendmsg(_0x4896ad, _0x402f96, 0, _0x222f37, _0x2dd4b2, _0x297afd);
    } catch (_0xdbd493) {
      if (typeof _0x3b09e1 === "undefined" || !(_0xdbd493 instanceof _0x3b09e1.ErrnoError)) {
        _0xe8ab44(_0xdbd493);
      }
      return -_0xdbd493.errno;
    }
  }
  function _0xd78bd9(_0x246331, _0x55313c, _0x56f06a, _0x5c4762, _0x3ff151, _0x354f18) {
    try {
      var _0x1bc479 = _0x3c9fb9(_0x246331);
      var _0x276b5a = _0x5db370(_0x3ff151, _0x354f18, true);
      if (!_0x276b5a) {
        return _0x3b09e1.write(_0x1bc479.stream, _0x1cc374, _0x55313c, _0x56f06a);
      } else {
        return _0x1bc479.sock_ops.sendmsg(_0x1bc479, _0x1cc374, _0x55313c, _0x56f06a, _0x276b5a.addr, _0x276b5a.port);
      }
    } catch (_0x32f2a2) {
      if (typeof _0x3b09e1 === "undefined" || !(_0x32f2a2 instanceof _0x3b09e1.ErrnoError)) {
        _0xe8ab44(_0x32f2a2);
      }
      return -_0x32f2a2.errno;
    }
  }
  function _0x442c14(_0x5dff4f) {
    try {
      return -50;
    } catch (_0x519d16) {
      if (typeof _0x3b09e1 === "undefined" || !(_0x519d16 instanceof _0x3b09e1.ErrnoError)) {
        _0xe8ab44(_0x519d16);
      }
      return -_0x519d16.errno;
    }
  }
  function _0xaf9fc9(_0x390f21, _0x47ce14) {
    try {
      _0x3c9fb9(_0x390f21);
      return -52;
    } catch (_0x8b22ba) {
      if (typeof _0x3b09e1 === "undefined" || !(_0x8b22ba instanceof _0x3b09e1.ErrnoError)) {
        _0xe8ab44(_0x8b22ba);
      }
      return -_0x8b22ba.errno;
    }
  }
  function _0x54388c(_0x2c9f56, _0x1df635, _0x18ff68) {
    try {
      var _0x41bc28 = _0x2722e2.createSocket(_0x2c9f56, _0x1df635, _0x18ff68);
      return _0x41bc28.stream.fd;
    } catch (_0x570716) {
      if (typeof _0x3b09e1 === "undefined" || !(_0x570716 instanceof _0x3b09e1.ErrnoError)) {
        _0xe8ab44(_0x570716);
      }
      return -_0x570716.errno;
    }
  }
  function _0x138fc5(_0x30dca1, _0x233959) {
    try {
      _0x30dca1 = _0x28b4a7.getStr(_0x30dca1);
      return _0x28b4a7.doStat(_0x3b09e1.stat, _0x30dca1, _0x233959);
    } catch (_0x4e7203) {
      if (typeof _0x3b09e1 === "undefined" || !(_0x4e7203 instanceof _0x3b09e1.ErrnoError)) {
        _0xe8ab44(_0x4e7203);
      }
      return -_0x4e7203.errno;
    }
  }
  function _0x44bf76(_0x13b117, _0x11e7e7, _0x52dd95) {
    try {
      _0x13b117 = _0x28b4a7.getStr(_0x13b117);
      _0x237516[_0x52dd95 + 4 >> 2] = 4096;
      _0x237516[_0x52dd95 + 40 >> 2] = 4096;
      _0x237516[_0x52dd95 + 8 >> 2] = 1000000;
      _0x237516[_0x52dd95 + 12 >> 2] = 500000;
      _0x237516[_0x52dd95 + 16 >> 2] = 500000;
      _0x237516[_0x52dd95 + 20 >> 2] = _0x3b09e1.nextInode;
      _0x237516[_0x52dd95 + 24 >> 2] = 1000000;
      _0x237516[_0x52dd95 + 28 >> 2] = 42;
      _0x237516[_0x52dd95 + 44 >> 2] = 2;
      _0x237516[_0x52dd95 + 36 >> 2] = 255;
      return 0;
    } catch (_0x440296) {
      if (typeof _0x3b09e1 === "undefined" || !(_0x440296 instanceof _0x3b09e1.ErrnoError)) {
        _0xe8ab44(_0x440296);
      }
      return -_0x440296.errno;
    }
  }
  function _0x5c023a(_0x4a6065, _0x289ee7, _0x2284aa, _0x45651c) {
    try {
      _0x4a6065 = _0x28b4a7.getStr(_0x4a6065);
      var _0x31cc2e = _0x28b4a7.get64(_0x2284aa, _0x45651c);
      _0x3b09e1.truncate(_0x4a6065, _0x31cc2e);
      return 0;
    } catch (_0x5de6f0) {
      if (typeof _0x3b09e1 === "undefined" || !(_0x5de6f0 instanceof _0x3b09e1.ErrnoError)) {
        _0xe8ab44(_0x5de6f0);
      }
      return -_0x5de6f0.errno;
    }
  }
  function _0x1a820d(_0x48a7c2) {
    try {
      if (!_0x48a7c2) {
        return -21;
      }
      var _0x18b0bd = {
        __size__: 390,
        domainname: 325,
        machine: 260,
        nodename: 65,
        release: 130,
        sysname: 0,
        version: 195
      };
      var _0x582538 = function (_0xe3b0c7, _0x429469) {
        var _0x4663d0 = _0x18b0bd[_0xe3b0c7];
        _0x2a90f2(_0x429469, _0x48a7c2 + _0x4663d0);
      };
      _0x582538("sysname", "Emscripten");
      _0x582538("nodename", "emscripten");
      _0x582538("release", "1.0");
      _0x582538("version", "#1");
      _0x582538("machine", "wasm32");
      return 0;
    } catch (_0x571cf3) {
      if (typeof _0x3b09e1 === "undefined" || !(_0x571cf3 instanceof _0x3b09e1.ErrnoError)) {
        _0xe8ab44(_0x571cf3);
      }
      return -_0x571cf3.errno;
    }
  }
  function _0x2554aa(_0x227743) {
    try {
      _0x227743 = _0x28b4a7.getStr(_0x227743);
      _0x3b09e1.unlink(_0x227743);
      return 0;
    } catch (_0x15537f) {
      if (typeof _0x3b09e1 === "undefined" || !(_0x15537f instanceof _0x3b09e1.ErrnoError)) {
        _0xe8ab44(_0x15537f);
      }
      return -_0x15537f.errno;
    }
  }
  function _0x4cd4b2() {
    _0xe8ab44();
  }
  function _0x4c477b() {
    if (_0x4c477b.start === undefined) {
      _0x4c477b.start = Date.now();
    }
    return (Date.now() - _0x4c477b.start) * 1000 | 0;
  }
  function _0x414648() {
    if (_0xdf03b2) {
      return 1;
    } else if (typeof dateNow !== "undefined") {
      return 1000;
    } else {
      return 1000;
    }
  }
  var _0x501d6f = true;
  function _0x4b5b1a(_0x148a28, _0x47a59d) {
    var _0x535788;
    if (_0x148a28 === 0) {
      _0x535788 = 1000000;
    } else if (_0x148a28 === 1 && _0x501d6f) {
      _0x535788 = _0x414648();
    } else {
      _0x893198(28);
      return -1;
    }
    _0x237516[_0x47a59d >> 2] = _0x535788 / 1000000000 | 0;
    _0x237516[_0x47a59d + 4 >> 2] = _0x535788;
    return 0;
  }
  var _0x390c6f;
  if (_0xdf03b2) {
    _0x390c6f = function () {
      var _0x5ed7c5 = process.hrtime();
      return _0x5ed7c5[0] * 1000 + _0x5ed7c5[1] / 1000000;
    };
  } else if (typeof dateNow !== "undefined") {
    _0x390c6f = dateNow;
  } else {
    _0x390c6f = function () {
      return performance.now();
    };
  }
  function _0x59b05f(_0x18525d, _0x499f57) {
    var _0x12a6b7;
    if (_0x18525d === 0) {
      _0x12a6b7 = Date.now();
    } else if ((_0x18525d === 1 || _0x18525d === 4) && _0x501d6f) {
      _0x12a6b7 = _0x390c6f();
    } else {
      _0x893198(28);
      return -1;
    }
    _0x237516[_0x499f57 >> 2] = _0x12a6b7 / 1000 | 0;
    _0x237516[_0x499f57 + 4 >> 2] = _0x12a6b7 % 1000 * 1000 * 1000 | 0;
    return 0;
  }
  function _0x1a8d63(_0x293cc3, _0x579f08) {
    return _0x293cc3 - _0x579f08;
  }
  function _0x3e5911(_0x12c287) {}
  function _0x187918() {
    return 0;
  }
  function _0x23d9a3(_0x17759f, _0x48b2d8) {}
  function _0x4ae907(_0x4a6a00, _0x1d36ea) {
    return 0;
  }
  var _0x54c70d = [];
  function _0x1293ec(_0x3b342b, _0x3dc459) {
    _0x54c70d.length = 0;
    var _0x443d5a;
    _0x3dc459 >>= 2;
    while (_0x443d5a = _0x312996[_0x3b342b++]) {
      var _0x4f9976 = _0x443d5a < 105;
      if (_0x4f9976 && _0x3dc459 & 1) {
        _0x3dc459++;
      }
      _0x54c70d.push(_0x4f9976 ? _0x4aca1d[_0x3dc459++ >> 1] : _0x237516[_0x3dc459]);
      ++_0x3dc459;
    }
    return _0x54c70d;
  }
  function _0x99bab8(_0xead480, _0x2f04ef, _0x257823, _0x355120) {
    var _0x448bc4 = _0x1293ec(_0x2f04ef, _0x257823);
    return _0x4eb0e9[_0xead480].apply(null, _0x448bc4);
  }
  function _0x43e98b(_0x233930, _0x1417db, _0x84ee38) {
    return _0x99bab8(_0x233930, _0x1417db, _0x84ee38, 1);
  }
  function _0x29551f(_0x18b5e3, _0x4f636b) {
    _0x5518f6.mainLoop.timingMode = _0x18b5e3;
    _0x5518f6.mainLoop.timingValue = _0x4f636b;
    if (!_0x5518f6.mainLoop.func) {
      return 1;
    }
    if (!_0x5518f6.mainLoop.running) {
      _0x5518f6.mainLoop.running = true;
    }
    if (_0x18b5e3 == 0) {
      _0x5518f6.mainLoop.scheduler = function _0xc846d4() {
        var _0x47b055 = Math.max(0, _0x5518f6.mainLoop.tickStartTime + _0x4f636b - _0x390c6f()) | 0;
        setTimeout(_0x5518f6.mainLoop.runner, _0x47b055);
      };
      _0x5518f6.mainLoop.method = "timeout";
    } else if (_0x18b5e3 == 1) {
      _0x5518f6.mainLoop.scheduler = function _0x13b624() {
        _0x5518f6.requestAnimationFrame(_0x5518f6.mainLoop.runner);
      };
      _0x5518f6.mainLoop.method = "rAF";
    } else if (_0x18b5e3 == 2) {
      if (typeof setImmediate === "undefined") {
        var _0x19a4ed = [];
        var _0x1f82b9 = "setimmediate";
        var _0x1e562f = function (_0xc1cd7e) {
          if (_0xc1cd7e.data === _0x1f82b9 || _0xc1cd7e.data.target === _0x1f82b9) {
            _0xc1cd7e.stopPropagation();
            _0x19a4ed.shift()();
          }
        };
        addEventListener("message", _0x1e562f, true);
        setImmediate = function _0x4a2124(_0x4acfc5) {
          _0x19a4ed.push(_0x4acfc5);
          if (_0x5ee6fa) {
            if (_0x2c3fe3.setImmediates === undefined) {
              _0x2c3fe3.setImmediates = [];
            }
            _0x2c3fe3.setImmediates.push(_0x4acfc5);
            postMessage({
              target: _0x1f82b9
            });
          } else {
            postMessage(_0x1f82b9, "*");
          }
        };
      }
      _0x5518f6.mainLoop.scheduler = function _0x27aa8b() {
        setImmediate(_0x5518f6.mainLoop.runner);
      };
      _0x5518f6.mainLoop.method = "immediate";
    }
    return 0;
  }
  function _0x5c929b(_0x1ddb47) {
    _0x2cef9f(_0x1ddb47);
  }
  function _0x25a9de() {
    if (!_0x1777bc()) {
      try {
        _0x5c929b(_0x3b3f0d);
      } catch (_0x5278df) {
        if (_0x5278df instanceof _0x268877) {
          return;
        }
        throw _0x5278df;
      }
    }
  }
  function _0x5cdd16(_0xfde791, _0x595a21, _0x38126d, _0x19ec9a, _0x283210) {
    _0x4a00f0(!_0x5518f6.mainLoop.func, "emscripten_set_main_loop: there can only be one main loop function at once: call emscripten_cancel_main_loop to cancel the previous one before setting a new one with different parameters.");
    _0x5518f6.mainLoop.func = _0xfde791;
    _0x5518f6.mainLoop.arg = _0x19ec9a;
    var _0xda5375 = _0x5518f6.mainLoop.currentlyRunningMainloop;
    function _0x3a6c94() {
      if (_0xda5375 < _0x5518f6.mainLoop.currentlyRunningMainloop) {
        _0x25a9de();
        return false;
      }
      return true;
    }
    _0x5518f6.mainLoop.running = false;
    _0x5518f6.mainLoop.runner = function _0xb10215() {
      if (_0x9e4ba0) {
        return;
      }
      if (_0x5518f6.mainLoop.queue.length > 0) {
        var _0x35aab8 = Date.now();
        var _0xcc26a9 = _0x5518f6.mainLoop.queue.shift();
        _0xcc26a9.func(_0xcc26a9.arg);
        if (_0x5518f6.mainLoop.remainingBlockers) {
          var _0x54f18a = _0x5518f6.mainLoop.remainingBlockers;
          var _0x22e213 = _0x54f18a % 1 == 0 ? _0x54f18a - 1 : Math.floor(_0x54f18a);
          if (_0xcc26a9.counted) {
            _0x5518f6.mainLoop.remainingBlockers = _0x22e213;
          } else {
            _0x22e213 = _0x22e213 + 0.5;
            _0x5518f6.mainLoop.remainingBlockers = (_0x54f18a * 8 + _0x22e213) / 9;
          }
        }
        console.log("main loop blocker \"" + _0xcc26a9.name + "\" took " + (Date.now() - _0x35aab8) + " ms");
        _0x5518f6.mainLoop.updateStatus();
        if (!_0x3a6c94()) {
          return;
        }
        setTimeout(_0x5518f6.mainLoop.runner, 0);
        return;
      }
      if (!_0x3a6c94()) {
        return;
      }
      _0x5518f6.mainLoop.currentFrameNumber = _0x5518f6.mainLoop.currentFrameNumber + 1 | 0;
      if (_0x5518f6.mainLoop.timingMode == 1 && _0x5518f6.mainLoop.timingValue > 1 && _0x5518f6.mainLoop.currentFrameNumber % _0x5518f6.mainLoop.timingValue != 0) {
        _0x5518f6.mainLoop.scheduler();
        return;
      } else if (_0x5518f6.mainLoop.timingMode == 0) {
        _0x5518f6.mainLoop.tickStartTime = _0x390c6f();
      }
      _0x1e1029.newRenderingFrameStarted();
      _0x5518f6.mainLoop.runIter(_0xfde791);
      if (!_0x3a6c94()) {
        return;
      }
      if (typeof SDL === "object" && SDL.audio && SDL.audio.queueNewAudioData) {
        SDL.audio.queueNewAudioData();
      }
      _0x5518f6.mainLoop.scheduler();
    };
    if (!_0x283210) {
      if (_0x595a21 && _0x595a21 > 0) {
        _0x29551f(0, 1000 / _0x595a21);
      } else {
        _0x29551f(1, 1);
      }
      _0x5518f6.mainLoop.scheduler();
    }
    if (_0x38126d) {
      throw "unwind";
    }
  }
  function _0x20d6cc(_0x2c3ee2, _0x355f48) {
    if (_0x9e4ba0) {
      return;
    }
    if (_0x355f48) {
      _0x2c3ee2();
      return;
    }
    try {
      _0x2c3ee2();
    } catch (_0x112728) {
      if (_0x112728 instanceof _0x268877) {
        return;
      } else if (_0x112728 !== "unwind") {
        if (_0x112728 && typeof _0x112728 === "object" && _0x112728.stack) {
          _0x4677f2("exception thrown: " + [_0x112728, _0x112728.stack]);
        }
        throw _0x112728;
      }
    }
  }
  var _0x5518f6 = {
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
        _0x5518f6.mainLoop.scheduler = null;
        _0x5518f6.mainLoop.currentlyRunningMainloop++;
      },
      resume: function () {
        _0x5518f6.mainLoop.currentlyRunningMainloop++;
        var _0x1f5501 = _0x5518f6.mainLoop.timingMode;
        var _0x376a9c = _0x5518f6.mainLoop.timingValue;
        var _0x472e51 = _0x5518f6.mainLoop.func;
        _0x5518f6.mainLoop.func = null;
        _0x5cdd16(_0x472e51, 0, false, _0x5518f6.mainLoop.arg, true);
        _0x29551f(_0x1f5501, _0x376a9c);
        _0x5518f6.mainLoop.scheduler();
      },
      updateStatus: function () {
        if (_0x2c3fe3.setStatus) {
          var _0xdbfaac = _0x2c3fe3.statusMessage || "Please wait...";
          var _0x344ae0 = _0x5518f6.mainLoop.remainingBlockers;
          var _0x46cc62 = _0x5518f6.mainLoop.expectedBlockers;
          if (_0x344ae0) {
            if (_0x344ae0 < _0x46cc62) {
              _0x2c3fe3.setStatus(_0xdbfaac + " (" + (_0x46cc62 - _0x344ae0) + "/" + _0x46cc62 + ")");
            } else {
              _0x2c3fe3.setStatus(_0xdbfaac);
            }
          } else {
            _0x2c3fe3.setStatus("");
          }
        }
      },
      runIter: function (_0x56ee99) {
        if (_0x9e4ba0) {
          return;
        }
        if (_0x2c3fe3.preMainLoop) {
          var _0x2749e0 = _0x2c3fe3.preMainLoop();
          if (_0x2749e0 === false) {
            return;
          }
        }
        _0x20d6cc(_0x56ee99);
        if (_0x2c3fe3.postMainLoop) {
          _0x2c3fe3.postMainLoop();
        }
      }
    },
    isFullscreen: false,
    pointerLock: false,
    moduleContextCreatedCallbacks: [],
    workers: [],
    init: function () {
      if (!_0x2c3fe3.preloadPlugins) {
        _0x2c3fe3.preloadPlugins = [];
      }
      if (_0x5518f6.initted) {
        return;
      }
      _0x5518f6.initted = true;
      try {
        new Blob();
        _0x5518f6.hasBlobConstructor = true;
      } catch (_0x557aab) {
        _0x5518f6.hasBlobConstructor = false;
        console.log("warning: no blob constructor, cannot create blobs with mimetypes");
      }
      _0x5518f6.BlobBuilder = typeof MozBlobBuilder != "undefined" ? MozBlobBuilder : typeof WebKitBlobBuilder != "undefined" ? WebKitBlobBuilder : !_0x5518f6.hasBlobConstructor ? console.log("warning: no BlobBuilder") : null;
      _0x5518f6.URLObject = typeof window != "undefined" ? window.URL ? window.URL : window.webkitURL : undefined;
      if (!_0x2c3fe3.noImageDecoding && typeof _0x5518f6.URLObject === "undefined") {
        console.log("warning: Browser does not support creating object URLs. Built-in browser image decoding will not be available.");
        _0x2c3fe3.noImageDecoding = true;
      }
      var _0x125da9 = {};
      _0x125da9.canHandle = function _0x4cc9e1(_0x12820f) {
        return !_0x2c3fe3.noImageDecoding && /\.(jpg|jpeg|png|bmp)$/i.test(_0x12820f);
      };
      _0x125da9.handle = function _0x52cdc1(_0x3a96fc, _0x30ca0a, _0x18d7f4, _0x1220c1) {
        var _0x45bc0e = null;
        if (_0x5518f6.hasBlobConstructor) {
          try {
            _0x45bc0e = new Blob([_0x3a96fc], {
              type: _0x5518f6.getMimetype(_0x30ca0a)
            });
            if (_0x45bc0e.size !== _0x3a96fc.length) {
              _0x45bc0e = new Blob([new Uint8Array(_0x3a96fc).buffer], {
                type: _0x5518f6.getMimetype(_0x30ca0a)
              });
            }
          } catch (_0x3062a4) {
            _0x49a161("Blob constructor present but fails: " + _0x3062a4 + "; falling back to blob builder");
          }
        }
        if (!_0x45bc0e) {
          var _0x64756c = new _0x5518f6.BlobBuilder();
          _0x64756c.append(new Uint8Array(_0x3a96fc).buffer);
          _0x45bc0e = _0x64756c.getBlob();
        }
        var _0x1582a2 = _0x5518f6.URLObject.createObjectURL(_0x45bc0e);
        var _0x46da7c = new Image();
        _0x46da7c.onload = function _0x17fbb0() {
          _0x4a00f0(_0x46da7c.complete, "Image " + _0x30ca0a + " could not be decoded");
          var _0x19eeed = document.createElement("canvas");
          _0x19eeed.width = _0x46da7c.width;
          _0x19eeed.height = _0x46da7c.height;
          var _0x38e3b5 = _0x19eeed.getContext("2d");
          _0x38e3b5.drawImage(_0x46da7c, 0, 0);
          _0x2c3fe3.preloadedImages[_0x30ca0a] = _0x19eeed;
          _0x5518f6.URLObject.revokeObjectURL(_0x1582a2);
          if (_0x18d7f4) {
            _0x18d7f4(_0x3a96fc);
          }
        };
        _0x46da7c.onerror = function _0x4a724c(_0x549152) {
          console.log("Image " + _0x1582a2 + " could not be decoded");
          if (_0x1220c1) {
            _0x1220c1();
          }
        };
        _0x46da7c.src = _0x1582a2;
      };
      _0x2c3fe3.preloadPlugins.push(_0x125da9);
      var _0xf7f1d4 = {};
      _0xf7f1d4.canHandle = function _0x44d87b(_0x2c79e9) {
        return !_0x2c3fe3.noAudioDecoding && _0x2c79e9.substr(-4) in {
          ".ogg": 1,
          ".wav": 1,
          ".mp3": 1
        };
      };
      _0xf7f1d4.handle = function _0x4ace19(_0x57e525, _0xe10697, _0x36a63e, _0x4f3829) {
        var _0x5d1e9c = false;
        function _0x1ce07c(_0x37a775) {
          if (_0x5d1e9c) {
            return;
          }
          _0x5d1e9c = true;
          _0x2c3fe3.preloadedAudios[_0xe10697] = _0x37a775;
          if (_0x36a63e) {
            _0x36a63e(_0x57e525);
          }
        }
        function _0x156a82() {
          if (_0x5d1e9c) {
            return;
          }
          _0x5d1e9c = true;
          _0x2c3fe3.preloadedAudios[_0xe10697] = new Audio();
          if (_0x4f3829) {
            _0x4f3829();
          }
        }
        if (_0x5518f6.hasBlobConstructor) {
          try {
            var _0x40cb85 = new Blob([_0x57e525], {
              type: _0x5518f6.getMimetype(_0xe10697)
            });
          } catch (_0x52b44f) {
            return _0x156a82();
          }
          var _0x48a509 = _0x5518f6.URLObject.createObjectURL(_0x40cb85);
          var _0x1d28db = new Audio();
          _0x1d28db.addEventListener("canplaythrough", function () {
            _0x1ce07c(_0x1d28db);
          }, false);
          _0x1d28db.onerror = function _0x904480(_0x18ea69) {
            if (_0x5d1e9c) {
              return;
            }
            console.log("warning: browser could not fully decode audio " + _0xe10697 + ", trying slower base64 approach");
            function _0x563bb0(_0x221513) {
              var _0x5a48b1 = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/";
              var _0x1e01a8 = "=";
              var _0x563098 = "";
              var _0x489931 = 0;
              var _0x45651d = 0;
              for (var _0x25ac6f = 0; _0x25ac6f < _0x221513.length; _0x25ac6f++) {
                _0x489931 = _0x489931 << 8 | _0x221513[_0x25ac6f];
                _0x45651d += 8;
                while (_0x45651d >= 6) {
                  var _0x2fcae2 = _0x489931 >> _0x45651d - 6 & 63;
                  _0x45651d -= 6;
                  _0x563098 += _0x5a48b1[_0x2fcae2];
                }
              }
              if (_0x45651d == 2) {
                _0x563098 += _0x5a48b1[(_0x489931 & 3) << 4];
                _0x563098 += _0x1e01a8 + _0x1e01a8;
              } else if (_0x45651d == 4) {
                _0x563098 += _0x5a48b1[(_0x489931 & 15) << 2];
                _0x563098 += _0x1e01a8;
              }
              return _0x563098;
            }
            _0x1d28db.src = "data:audio/x-" + _0xe10697.substr(-3) + ";base64," + _0x563bb0(_0x57e525);
            _0x1ce07c(_0x1d28db);
          };
          _0x1d28db.src = _0x48a509;
          _0x5518f6.safeSetTimeout(function () {
            _0x1ce07c(_0x1d28db);
          }, 10000);
        } else {
          return _0x156a82();
        }
      };
      _0x2c3fe3.preloadPlugins.push(_0xf7f1d4);
      function _0x32b80d() {
        _0x5518f6.pointerLock = document.pointerLockElement === _0x2c3fe3.canvas || document.mozPointerLockElement === _0x2c3fe3.canvas || document.webkitPointerLockElement === _0x2c3fe3.canvas || document.msPointerLockElement === _0x2c3fe3.canvas;
      }
      var _0x573231 = _0x2c3fe3.canvas;
      if (_0x573231) {
        _0x573231.requestPointerLock = _0x573231.requestPointerLock || _0x573231.mozRequestPointerLock || _0x573231.webkitRequestPointerLock || _0x573231.msRequestPointerLock || function () {};
        _0x573231.exitPointerLock = document.exitPointerLock || document.mozExitPointerLock || document.webkitExitPointerLock || document.msExitPointerLock || function () {};
        _0x573231.exitPointerLock = _0x573231.exitPointerLock.bind(document);
        document.addEventListener("pointerlockchange", _0x32b80d, false);
        document.addEventListener("mozpointerlockchange", _0x32b80d, false);
        document.addEventListener("webkitpointerlockchange", _0x32b80d, false);
        document.addEventListener("mspointerlockchange", _0x32b80d, false);
        if (_0x2c3fe3.elementPointerLock) {
          _0x573231.addEventListener("click", function (_0x328a6a) {
            if (!_0x5518f6.pointerLock && _0x2c3fe3.canvas.requestPointerLock) {
              _0x2c3fe3.canvas.requestPointerLock();
              _0x328a6a.preventDefault();
            }
          }, false);
        }
      }
    },
    createContext: function (_0x1b7822, _0x16fc0b, _0x2217a9, _0x3a9509) {
      if (_0x16fc0b && _0x2c3fe3.ctx && _0x1b7822 == _0x2c3fe3.canvas) {
        return _0x2c3fe3.ctx;
      }
      var _0x48de54;
      var _0x428d0b;
      if (_0x16fc0b) {
        var _0x55ba17 = {
          antialias: false,
          alpha: false,
          majorVersion: typeof WebGL2RenderingContext !== "undefined" ? 2 : 1
        };
        if (_0x3a9509) {
          for (var _0x445baf in _0x3a9509) {
            _0x55ba17[_0x445baf] = _0x3a9509[_0x445baf];
          }
        }
        if (typeof _0x1e1029 !== "undefined") {
          _0x428d0b = _0x1e1029.createContext(_0x1b7822, _0x55ba17);
          if (_0x428d0b) {
            _0x48de54 = _0x1e1029.getContext(_0x428d0b).GLctx;
          }
        }
      } else {
        _0x48de54 = _0x1b7822.getContext("2d");
      }
      if (!_0x48de54) {
        return null;
      }
      if (_0x2217a9) {
        if (!_0x16fc0b) {
          _0x4a00f0(typeof _0x3f9476 === "undefined", "cannot set in module if GLctx is used, but we are a non-GL context that would replace it");
        }
        _0x2c3fe3.ctx = _0x48de54;
        if (_0x16fc0b) {
          _0x1e1029.makeContextCurrent(_0x428d0b);
        }
        _0x2c3fe3.useWebGL = _0x16fc0b;
        _0x5518f6.moduleContextCreatedCallbacks.forEach(function (_0x224609) {
          _0x224609();
        });
        _0x5518f6.init();
      }
      return _0x48de54;
    },
    destroyContext: function (_0xa8ad4f, _0x36bd74, _0x2e4d97) {},
    fullscreenHandlersInstalled: false,
    lockPointer: undefined,
    resizeCanvas: undefined,
    requestFullscreen: function (_0x13f731, _0x22b150) {
      _0x5518f6.lockPointer = _0x13f731;
      _0x5518f6.resizeCanvas = _0x22b150;
      if (typeof _0x5518f6.lockPointer === "undefined") {
        _0x5518f6.lockPointer = true;
      }
      if (typeof _0x5518f6.resizeCanvas === "undefined") {
        _0x5518f6.resizeCanvas = false;
      }
      var _0x31a4ce = _0x2c3fe3.canvas;
      function _0x2d5a22() {
        _0x5518f6.isFullscreen = false;
        var _0x56e941 = _0x31a4ce.parentNode;
        if ((document.fullscreenElement || document.mozFullScreenElement || document.msFullscreenElement || document.webkitFullscreenElement || document.webkitCurrentFullScreenElement) === _0x56e941) {
          _0x31a4ce.exitFullscreen = _0x5518f6.exitFullscreen;
          if (_0x5518f6.lockPointer) {
            _0x31a4ce.requestPointerLock();
          }
          _0x5518f6.isFullscreen = true;
          if (_0x5518f6.resizeCanvas) {
            _0x5518f6.setFullscreenCanvasSize();
          } else {
            _0x5518f6.updateCanvasDimensions(_0x31a4ce);
          }
        } else {
          _0x56e941.parentNode.insertBefore(_0x31a4ce, _0x56e941);
          _0x56e941.parentNode.removeChild(_0x56e941);
          if (_0x5518f6.resizeCanvas) {
            _0x5518f6.setWindowedCanvasSize();
          } else {
            _0x5518f6.updateCanvasDimensions(_0x31a4ce);
          }
        }
        if (_0x2c3fe3.onFullScreen) {
          _0x2c3fe3.onFullScreen(_0x5518f6.isFullscreen);
        }
        if (_0x2c3fe3.onFullscreen) {
          _0x2c3fe3.onFullscreen(_0x5518f6.isFullscreen);
        }
      }
      if (!_0x5518f6.fullscreenHandlersInstalled) {
        _0x5518f6.fullscreenHandlersInstalled = true;
        document.addEventListener("fullscreenchange", _0x2d5a22, false);
        document.addEventListener("mozfullscreenchange", _0x2d5a22, false);
        document.addEventListener("webkitfullscreenchange", _0x2d5a22, false);
        document.addEventListener("MSFullscreenChange", _0x2d5a22, false);
      }
      var _0x3c90a5 = document.createElement("div");
      _0x31a4ce.parentNode.insertBefore(_0x3c90a5, _0x31a4ce);
      _0x3c90a5.appendChild(_0x31a4ce);
      _0x3c90a5.requestFullscreen = _0x3c90a5.requestFullscreen || _0x3c90a5.mozRequestFullScreen || _0x3c90a5.msRequestFullscreen || (_0x3c90a5.webkitRequestFullscreen ? function () {
        _0x3c90a5.webkitRequestFullscreen(Element.ALLOW_KEYBOARD_INPUT);
      } : null) || (_0x3c90a5.webkitRequestFullScreen ? function () {
        _0x3c90a5.webkitRequestFullScreen(Element.ALLOW_KEYBOARD_INPUT);
      } : null);
      _0x3c90a5.requestFullscreen();
    },
    exitFullscreen: function () {
      if (!_0x5518f6.isFullscreen) {
        return false;
      }
      var _0x36fe65 = document.exitFullscreen || document.cancelFullScreen || document.mozCancelFullScreen || document.msExitFullscreen || document.webkitCancelFullScreen || function () {};
      _0x36fe65.apply(document, []);
      return true;
    },
    nextRAF: 0,
    fakeRequestAnimationFrame: function (_0x4d693b) {
      var _0x1090a2 = Date.now();
      if (_0x5518f6.nextRAF === 0) {
        _0x5518f6.nextRAF = _0x1090a2 + 1000 / 60;
      } else {
        while (_0x1090a2 + 2 >= _0x5518f6.nextRAF) {
          _0x5518f6.nextRAF += 1000 / 60;
        }
      }
      var _0x43cac8 = Math.max(_0x5518f6.nextRAF - _0x1090a2, 0);
      setTimeout(_0x4d693b, _0x43cac8);
    },
    requestAnimationFrame: function (_0x1a6c75) {
      if (typeof requestAnimationFrame === "function") {
        requestAnimationFrame(_0x1a6c75);
        return;
      }
      var _0x4cb83e = _0x5518f6.fakeRequestAnimationFrame;
      _0x4cb83e(_0x1a6c75);
    },
    safeRequestAnimationFrame: function (_0xc84b25) {
      return _0x5518f6.requestAnimationFrame(function () {
        _0x20d6cc(_0xc84b25);
      });
    },
    safeSetTimeout: function (_0x293b35, _0x34ad11) {
      return setTimeout(function () {
        _0x20d6cc(_0x293b35);
      }, _0x34ad11);
    },
    getMimetype: function (_0x1138d5) {
      return {
        jpg: "image/jpeg",
        jpeg: "image/jpeg",
        png: "image/png",
        bmp: "image/bmp",
        ogg: "audio/ogg",
        wav: "audio/wav",
        mp3: "audio/mpeg"
      }[_0x1138d5.substr(_0x1138d5.lastIndexOf(".") + 1)];
    },
    getUserMedia: function (_0x500aa2) {
      if (!window.getUserMedia) {
        window.getUserMedia = navigator.getUserMedia || navigator.mozGetUserMedia;
      }
      window.getUserMedia(_0x500aa2);
    },
    getMovementX: function (_0x123ba0) {
      return _0x123ba0.movementX || _0x123ba0.mozMovementX || _0x123ba0.webkitMovementX || 0;
    },
    getMovementY: function (_0x17e01c) {
      return _0x17e01c.movementY || _0x17e01c.mozMovementY || _0x17e01c.webkitMovementY || 0;
    },
    getMouseWheelDelta: function (_0x10efd3) {
      var _0x510e4f = 0;
      switch (_0x10efd3.type) {
        case "DOMMouseScroll":
          _0x510e4f = _0x10efd3.detail / 3;
          break;
        case "mousewheel":
          _0x510e4f = _0x10efd3.wheelDelta / 120;
          break;
        case "wheel":
          _0x510e4f = _0x10efd3.deltaY;
          switch (_0x10efd3.deltaMode) {
            case 0:
              _0x510e4f /= 100;
              break;
            case 1:
              _0x510e4f /= 3;
              break;
            case 2:
              _0x510e4f *= 80;
              break;
            default:
              throw "unrecognized mouse wheel delta mode: " + _0x10efd3.deltaMode;
          }
          break;
        default:
          throw "unrecognized mouse wheel event: " + _0x10efd3.type;
      }
      return _0x510e4f;
    },
    mouseX: 0,
    mouseY: 0,
    mouseMovementX: 0,
    mouseMovementY: 0,
    touches: {},
    lastTouches: {},
    calculateMouseEvent: function (_0x172872) {
      if (_0x5518f6.pointerLock) {
        if (_0x172872.type != "mousemove" && "mozMovementX" in _0x172872) {
          _0x5518f6.mouseMovementX = _0x5518f6.mouseMovementY = 0;
        } else {
          _0x5518f6.mouseMovementX = _0x5518f6.getMovementX(_0x172872);
          _0x5518f6.mouseMovementY = _0x5518f6.getMovementY(_0x172872);
        }
        if (typeof SDL != "undefined") {
          _0x5518f6.mouseX = SDL.mouseX + _0x5518f6.mouseMovementX;
          _0x5518f6.mouseY = SDL.mouseY + _0x5518f6.mouseMovementY;
        } else {
          _0x5518f6.mouseX += _0x5518f6.mouseMovementX;
          _0x5518f6.mouseY += _0x5518f6.mouseMovementY;
        }
      } else {
        var _0x296078 = _0x2c3fe3.canvas.getBoundingClientRect();
        var _0x3831db = _0x2c3fe3.canvas.width;
        var _0x1973c2 = _0x2c3fe3.canvas.height;
        var _0xb1b04a = typeof window.scrollX !== "undefined" ? window.scrollX : window.pageXOffset;
        var _0x1963aa = typeof window.scrollY !== "undefined" ? window.scrollY : window.pageYOffset;
        if (_0x172872.type === "touchstart" || _0x172872.type === "touchend" || _0x172872.type === "touchmove") {
          var _0x18bc4c = _0x172872.touch;
          if (_0x18bc4c === undefined) {
            return;
          }
          var _0x23f78f = _0x18bc4c.pageX - (_0xb1b04a + _0x296078.left);
          var _0x3f97cf = _0x18bc4c.pageY - (_0x1963aa + _0x296078.top);
          _0x23f78f = _0x23f78f * (_0x3831db / _0x296078.width);
          _0x3f97cf = _0x3f97cf * (_0x1973c2 / _0x296078.height);
          var _0x5d6f53 = {
            x: _0x23f78f,
            y: _0x3f97cf
          };
          if (_0x172872.type === "touchstart") {
            _0x5518f6.lastTouches[_0x18bc4c.identifier] = _0x5d6f53;
            _0x5518f6.touches[_0x18bc4c.identifier] = _0x5d6f53;
          } else if (_0x172872.type === "touchend" || _0x172872.type === "touchmove") {
            var _0xb63ef0 = _0x5518f6.touches[_0x18bc4c.identifier];
            if (!_0xb63ef0) {
              _0xb63ef0 = _0x5d6f53;
            }
            _0x5518f6.lastTouches[_0x18bc4c.identifier] = _0xb63ef0;
            _0x5518f6.touches[_0x18bc4c.identifier] = _0x5d6f53;
          }
          return;
        }
        var _0x203602 = _0x172872.pageX - (_0xb1b04a + _0x296078.left);
        var _0xf0a637 = _0x172872.pageY - (_0x1963aa + _0x296078.top);
        _0x203602 = _0x203602 * (_0x3831db / _0x296078.width);
        _0xf0a637 = _0xf0a637 * (_0x1973c2 / _0x296078.height);
        _0x5518f6.mouseMovementX = _0x203602 - _0x5518f6.mouseX;
        _0x5518f6.mouseMovementY = _0xf0a637 - _0x5518f6.mouseY;
        _0x5518f6.mouseX = _0x203602;
        _0x5518f6.mouseY = _0xf0a637;
      }
    },
    asyncLoad: function (_0x3d1355, _0x191c90, _0x4818ef, _0x325bf4) {
      var _0x1938c2 = !_0x325bf4 ? _0x298a63("al " + _0x3d1355) : "";
      _0x345449(_0x3d1355, function (_0x4ba1c3) {
        _0x4a00f0(_0x4ba1c3, "Loading data file \"" + _0x3d1355 + "\" failed (no arrayBuffer).");
        _0x191c90(new Uint8Array(_0x4ba1c3));
        if (_0x1938c2) {
          _0x42f9a2(_0x1938c2);
        }
      }, function (_0x43d020) {
        if (_0x4818ef) {
          _0x4818ef();
        } else {
          throw "Loading data file \"" + _0x3d1355 + "\" failed.";
        }
      });
      if (_0x1938c2) {
        _0x275696(_0x1938c2);
      }
    },
    resizeListeners: [],
    updateResizeListeners: function () {
      var _0x583ade = _0x2c3fe3.canvas;
      _0x5518f6.resizeListeners.forEach(function (_0x4de639) {
        _0x4de639(_0x583ade.width, _0x583ade.height);
      });
    },
    setCanvasSize: function (_0x533fe6, _0x4927ff, _0x7afe08) {
      var _0x21a392 = _0x2c3fe3.canvas;
      _0x5518f6.updateCanvasDimensions(_0x21a392, _0x533fe6, _0x4927ff);
      if (!_0x7afe08) {
        _0x5518f6.updateResizeListeners();
      }
    },
    windowedWidth: 0,
    windowedHeight: 0,
    setFullscreenCanvasSize: function () {
      if (typeof SDL != "undefined") {
        var _0x36176b = _0x599e77[SDL.screen >> 2];
        _0x36176b = _0x36176b | 8388608;
        _0x237516[SDL.screen >> 2] = _0x36176b;
      }
      _0x5518f6.updateCanvasDimensions(_0x2c3fe3.canvas);
      _0x5518f6.updateResizeListeners();
    },
    setWindowedCanvasSize: function () {
      if (typeof SDL != "undefined") {
        var _0x162164 = _0x599e77[SDL.screen >> 2];
        _0x162164 = _0x162164 & ~8388608;
        _0x237516[SDL.screen >> 2] = _0x162164;
      }
      _0x5518f6.updateCanvasDimensions(_0x2c3fe3.canvas);
      _0x5518f6.updateResizeListeners();
    },
    updateCanvasDimensions: function (_0x51ed31, _0x2153ea, _0x345244) {
      if (_0x2153ea && _0x345244) {
        _0x51ed31.widthNative = _0x2153ea;
        _0x51ed31.heightNative = _0x345244;
      } else {
        _0x2153ea = _0x51ed31.widthNative;
        _0x345244 = _0x51ed31.heightNative;
      }
      var _0x32f6d8 = _0x2153ea;
      var _0x35fed2 = _0x345244;
      if (_0x2c3fe3.forcedAspectRatio && _0x2c3fe3.forcedAspectRatio > 0) {
        if (_0x32f6d8 / _0x35fed2 < _0x2c3fe3.forcedAspectRatio) {
          _0x32f6d8 = Math.round(_0x35fed2 * _0x2c3fe3.forcedAspectRatio);
        } else {
          _0x35fed2 = Math.round(_0x32f6d8 / _0x2c3fe3.forcedAspectRatio);
        }
      }
      if ((document.fullscreenElement || document.mozFullScreenElement || document.msFullscreenElement || document.webkitFullscreenElement || document.webkitCurrentFullScreenElement) === _0x51ed31.parentNode && typeof screen != "undefined") {
        var _0x4180ac = Math.min(screen.width / _0x32f6d8, screen.height / _0x35fed2);
        _0x32f6d8 = Math.round(_0x32f6d8 * _0x4180ac);
        _0x35fed2 = Math.round(_0x35fed2 * _0x4180ac);
      }
      if (_0x5518f6.resizeCanvas) {
        if (_0x51ed31.width != _0x32f6d8) {
          _0x51ed31.width = _0x32f6d8;
        }
        if (_0x51ed31.height != _0x35fed2) {
          _0x51ed31.height = _0x35fed2;
        }
        if (typeof _0x51ed31.style != "undefined") {
          _0x51ed31.style.removeProperty("width");
          _0x51ed31.style.removeProperty("height");
        }
      } else {
        if (_0x51ed31.width != _0x2153ea) {
          _0x51ed31.width = _0x2153ea;
        }
        if (_0x51ed31.height != _0x345244) {
          _0x51ed31.height = _0x345244;
        }
        if (typeof _0x51ed31.style != "undefined") {
          if (_0x32f6d8 != _0x2153ea || _0x35fed2 != _0x345244) {
            _0x51ed31.style.setProperty("width", _0x32f6d8 + "px", "important");
            _0x51ed31.style.setProperty("height", _0x35fed2 + "px", "important");
          } else {
            _0x51ed31.style.removeProperty("width");
            _0x51ed31.style.removeProperty("height");
          }
        }
      }
    },
    wgetRequests: {},
    nextWgetRequestHandle: 0,
    getNextWgetRequestHandle: function () {
      var _0x5766fc = _0x5518f6.nextWgetRequestHandle;
      _0x5518f6.nextWgetRequestHandle++;
      return _0x5766fc;
    }
  };
  function _0x404563() {
    _0x5518f6.mainLoop.pause();
    _0x5518f6.mainLoop.func = null;
  }
  function _0x12d05c(_0x26de96) {
    clearInterval(_0x26de96);
  }
  var _0x1b90f8 = {
    inEventHandler: 0,
    removeAllEventListeners: function () {
      for (var _0x4fd009 = _0x1b90f8.eventHandlers.length - 1; _0x4fd009 >= 0; --_0x4fd009) {
        _0x1b90f8._removeHandler(_0x4fd009);
      }
      _0x1b90f8.eventHandlers = [];
      _0x1b90f8.deferredCalls = [];
    },
    registerRemoveEventListeners: function () {
      if (!_0x1b90f8.removeEventListenersRegistered) {
        _0x27a71e.push(_0x1b90f8.removeAllEventListeners);
        _0x1b90f8.removeEventListenersRegistered = true;
      }
    },
    deferredCalls: [],
    deferCall: function (_0x34a862, _0x41d6be, _0x4f9983) {
      function _0x25fb77(_0x2c84b4, _0x3a0941) {
        if (_0x2c84b4.length != _0x3a0941.length) {
          return false;
        }
        for (var _0x3006d0 in _0x2c84b4) {
          if (_0x2c84b4[_0x3006d0] != _0x3a0941[_0x3006d0]) {
            return false;
          }
        }
        return true;
      }
      for (var _0x3e843b in _0x1b90f8.deferredCalls) {
        var _0x180fcf = _0x1b90f8.deferredCalls[_0x3e843b];
        if (_0x180fcf.targetFunction == _0x34a862 && _0x25fb77(_0x180fcf.argsList, _0x4f9983)) {
          return;
        }
      }
      _0x1b90f8.deferredCalls.push({
        targetFunction: _0x34a862,
        precedence: _0x41d6be,
        argsList: _0x4f9983
      });
      _0x1b90f8.deferredCalls.sort(function (_0x4e7005, _0x8b022) {
        return _0x4e7005.precedence < _0x8b022.precedence;
      });
    },
    removeDeferredCalls: function (_0x14f238) {
      for (var _0x5bf44a = 0; _0x5bf44a < _0x1b90f8.deferredCalls.length; ++_0x5bf44a) {
        if (_0x1b90f8.deferredCalls[_0x5bf44a].targetFunction == _0x14f238) {
          _0x1b90f8.deferredCalls.splice(_0x5bf44a, 1);
          --_0x5bf44a;
        }
      }
    },
    canPerformEventHandlerRequests: function () {
      return _0x1b90f8.inEventHandler && _0x1b90f8.currentEventHandler.allowsDeferredCalls;
    },
    runDeferredCalls: function () {
      if (!_0x1b90f8.canPerformEventHandlerRequests()) {
        return;
      }
      for (var _0xf0a442 = 0; _0xf0a442 < _0x1b90f8.deferredCalls.length; ++_0xf0a442) {
        var _0xb679e8 = _0x1b90f8.deferredCalls[_0xf0a442];
        _0x1b90f8.deferredCalls.splice(_0xf0a442, 1);
        --_0xf0a442;
        _0xb679e8.targetFunction.apply(null, _0xb679e8.argsList);
      }
    },
    eventHandlers: [],
    removeAllHandlersOnTarget: function (_0x13d4d7, _0x21c463) {
      for (var _0x5e17b5 = 0; _0x5e17b5 < _0x1b90f8.eventHandlers.length; ++_0x5e17b5) {
        if (_0x1b90f8.eventHandlers[_0x5e17b5].target == _0x13d4d7 && (!_0x21c463 || _0x21c463 == _0x1b90f8.eventHandlers[_0x5e17b5].eventTypeString)) {
          _0x1b90f8._removeHandler(_0x5e17b5--);
        }
      }
    },
    _removeHandler: function (_0x1108ba) {
      var _0x1a7721 = _0x1b90f8.eventHandlers[_0x1108ba];
      _0x1a7721.target.removeEventListener(_0x1a7721.eventTypeString, _0x1a7721.eventListenerFunc, _0x1a7721.useCapture);
      _0x1b90f8.eventHandlers.splice(_0x1108ba, 1);
    },
    registerOrRemoveHandler: function (_0x43c8be) {
      var _0x171fac = function _0x4c5ae0(_0x166dcd) {
        ++_0x1b90f8.inEventHandler;
        _0x1b90f8.currentEventHandler = _0x43c8be;
        _0x1b90f8.runDeferredCalls();
        _0x43c8be.handlerFunc(_0x166dcd);
        _0x1b90f8.runDeferredCalls();
        --_0x1b90f8.inEventHandler;
      };
      if (_0x43c8be.callbackfunc) {
        _0x43c8be.eventListenerFunc = _0x171fac;
        _0x43c8be.target.addEventListener(_0x43c8be.eventTypeString, _0x171fac, _0x43c8be.useCapture);
        _0x1b90f8.eventHandlers.push(_0x43c8be);
        _0x1b90f8.registerRemoveEventListeners();
      } else {
        for (var _0x40dfef = 0; _0x40dfef < _0x1b90f8.eventHandlers.length; ++_0x40dfef) {
          if (_0x1b90f8.eventHandlers[_0x40dfef].target == _0x43c8be.target && _0x1b90f8.eventHandlers[_0x40dfef].eventTypeString == _0x43c8be.eventTypeString) {
            _0x1b90f8._removeHandler(_0x40dfef--);
          }
        }
      }
    },
    getNodeNameForTarget: function (_0x26631d) {
      if (!_0x26631d) {
        return "";
      }
      if (_0x26631d == window) {
        return "#window";
      }
      if (_0x26631d == screen) {
        return "#screen";
      }
      if (_0x26631d && _0x26631d.nodeName) {
        return _0x26631d.nodeName;
      } else {
        return "";
      }
    },
    fullscreenEnabled: function () {
      return document.fullscreenEnabled || document.webkitFullscreenEnabled;
    }
  };
  var _0x571c3e = {};
  function _0x147d31(_0x3e41af) {
    if (_0x3e41af > 2) {
      return _0x2aa540(_0x3e41af);
    } else {
      return _0x3e41af;
    }
  }
  var _0x3a2c2b = [0, typeof document !== "undefined" ? document : 0, typeof window !== "undefined" ? window : 0];
  function _0x166450(_0x4e86d1) {
    _0x4e86d1 = _0x147d31(_0x4e86d1);
    var _0x4494fa = _0x3a2c2b[_0x4e86d1] || (typeof document !== "undefined" ? document.querySelector(_0x4e86d1) : undefined);
    return _0x4494fa;
  }
  function _0x559bb4(_0x19b067) {
    return _0x166450(_0x19b067);
  }
  function _0xddeac2(_0xeb130b, _0x2ed43b, _0x6ac8f0) {
    var _0x24124f = _0x559bb4(_0xeb130b);
    if (!_0x24124f) {
      return -4;
    }
    _0x237516[_0x2ed43b >> 2] = _0x24124f.width;
    _0x237516[_0x6ac8f0 >> 2] = _0x24124f.height;
  }
  function _0x57efc2(_0x3e9fa5) {
    var _0x1adeda = _0x3e3c9d();
    var _0x471f1c = _0x2bd0fc(8);
    var _0x8e6ad4 = _0x471f1c + 4;
    var _0x202b98 = _0x2bd0fc(_0x3e9fa5.id.length + 1);
    _0x16748b(_0x3e9fa5.id, _0x202b98, _0x3e9fa5.id.length + 1);
    var _0x25440e = _0xddeac2(_0x202b98, _0x471f1c, _0x8e6ad4);
    var _0x2edf13 = [_0x237516[_0x471f1c >> 2], _0x237516[_0x8e6ad4 >> 2]];
    _0xe0dbf5(_0x1adeda);
    return _0x2edf13;
  }
  function _0x3e3f04(_0x5b02cc, _0x226fc8, _0x3978c5) {
    var _0x1bc0c0 = _0x559bb4(_0x5b02cc);
    if (!_0x1bc0c0) {
      return -4;
    }
    _0x1bc0c0.width = _0x226fc8;
    _0x1bc0c0.height = _0x3978c5;
    return 0;
  }
  function _0x1f7666(_0x5726c2, _0x2cfbc9, _0x9ee91c) {
    if (!_0x5726c2.controlTransferredOffscreen) {
      _0x5726c2.width = _0x2cfbc9;
      _0x5726c2.height = _0x9ee91c;
    } else {
      var _0x2e06c5 = _0x3e3c9d();
      var _0x5230d0 = _0x2bd0fc(_0x5726c2.id.length + 1);
      _0x16748b(_0x5726c2.id, _0x5230d0, _0x5726c2.id.length + 1);
      _0x3e3f04(_0x5230d0, _0x2cfbc9, _0x9ee91c);
      _0xe0dbf5(_0x2e06c5);
    }
  }
  function _0x5c4399(_0x20d086) {
    var _0x14fb1c = _0x57efc2(_0x20d086);
    var _0x563dc5 = _0x14fb1c[0];
    var _0x5845d8 = _0x14fb1c[1];
    var _0x4b6d66 = _0x20d086.style.width;
    var _0x1ef4d7 = _0x20d086.style.height;
    var _0x457d6c = _0x20d086.style.backgroundColor;
    var _0x3e4e77 = document.body.style.backgroundColor;
    var _0x1fceca = _0x20d086.style.paddingLeft;
    var _0x17ae01 = _0x20d086.style.paddingRight;
    var _0x3feeb8 = _0x20d086.style.paddingTop;
    var _0x40b0dc = _0x20d086.style.paddingBottom;
    var _0x5b4315 = _0x20d086.style.marginLeft;
    var _0x4c87a1 = _0x20d086.style.marginRight;
    var _0x31c0ac = _0x20d086.style.marginTop;
    var _0x4c01bf = _0x20d086.style.marginBottom;
    var _0x1fcabd = document.body.style.margin;
    var _0x242c55 = document.documentElement.style.overflow;
    var _0xbb02f = document.body.scroll;
    var _0x397e20 = _0x20d086.style.imageRendering;
    function _0x1b41dc() {
      var _0x593b11 = document.fullscreenElement || document.webkitFullscreenElement || document.msFullscreenElement;
      if (!_0x593b11) {
        document.removeEventListener("fullscreenchange", _0x1b41dc);
        document.removeEventListener("webkitfullscreenchange", _0x1b41dc);
        _0x1f7666(_0x20d086, _0x563dc5, _0x5845d8);
        _0x20d086.style.width = _0x4b6d66;
        _0x20d086.style.height = _0x1ef4d7;
        _0x20d086.style.backgroundColor = _0x457d6c;
        if (!_0x3e4e77) {
          document.body.style.backgroundColor = "white";
        }
        document.body.style.backgroundColor = _0x3e4e77;
        _0x20d086.style.paddingLeft = _0x1fceca;
        _0x20d086.style.paddingRight = _0x17ae01;
        _0x20d086.style.paddingTop = _0x3feeb8;
        _0x20d086.style.paddingBottom = _0x40b0dc;
        _0x20d086.style.marginLeft = _0x5b4315;
        _0x20d086.style.marginRight = _0x4c87a1;
        _0x20d086.style.marginTop = _0x31c0ac;
        _0x20d086.style.marginBottom = _0x4c01bf;
        document.body.style.margin = _0x1fcabd;
        document.documentElement.style.overflow = _0x242c55;
        document.body.scroll = _0xbb02f;
        _0x20d086.style.imageRendering = _0x397e20;
        if (_0x20d086.GLctxObject) {
          _0x20d086.GLctxObject.GLctx.viewport(0, 0, _0x563dc5, _0x5845d8);
        }
        if (_0x571c3e.canvasResizedCallback) {
          (function (_0x405364, _0xe212aa, _0x24d98e) {
            return _0x3b09d7.apply(null, [_0x571c3e.canvasResizedCallback, _0x405364, _0xe212aa, _0x24d98e]);
          })(37, 0, _0x571c3e.canvasResizedCallbackUserData);
        }
      }
    }
    document.addEventListener("fullscreenchange", _0x1b41dc);
    document.addEventListener("webkitfullscreenchange", _0x1b41dc);
    return _0x1b41dc;
  }
  function _0x497c69(_0x1c98b9, _0x2a49a9, _0x20efca) {
    _0x1c98b9.style.paddingLeft = _0x1c98b9.style.paddingRight = _0x20efca + "px";
    _0x1c98b9.style.paddingTop = _0x1c98b9.style.paddingBottom = _0x2a49a9 + "px";
  }
  function _0xfcd8c6(_0x4bafef) {
    if (_0x3a2c2b.indexOf(_0x4bafef) < 0) {
      return _0x4bafef.getBoundingClientRect();
    } else {
      return {
        left: 0,
        top: 0
      };
    }
  }
  function _0x4265f3(_0x1fb40f, _0x3555f9) {
    var _0x4c2efe = _0x5c4399(_0x1fb40f);
    var _0x8de6a = _0x3555f9.softFullscreen ? innerWidth : screen.width;
    var _0x5de7fb = _0x3555f9.softFullscreen ? innerHeight : screen.height;
    var _0x724a26 = _0xfcd8c6(_0x1fb40f);
    var _0x55c72b = _0x724a26.width;
    var _0x51b0e2 = _0x724a26.height;
    var _0x1f46db = _0x57efc2(_0x1fb40f);
    var _0x1d81da = _0x1f46db[0];
    var _0x29de91 = _0x1f46db[1];
    if (_0x3555f9.scaleMode == 3) {
      _0x497c69(_0x1fb40f, (_0x5de7fb - _0x51b0e2) / 2, (_0x8de6a - _0x55c72b) / 2);
      _0x8de6a = _0x55c72b;
      _0x5de7fb = _0x51b0e2;
    } else if (_0x3555f9.scaleMode == 2) {
      if (_0x8de6a * _0x29de91 < _0x1d81da * _0x5de7fb) {
        var _0x5afaeb = _0x29de91 * _0x8de6a / _0x1d81da;
        _0x497c69(_0x1fb40f, (_0x5de7fb - _0x5afaeb) / 2, 0);
        _0x5de7fb = _0x5afaeb;
      } else {
        var _0x1fdd06 = _0x1d81da * _0x5de7fb / _0x29de91;
        _0x497c69(_0x1fb40f, 0, (_0x8de6a - _0x1fdd06) / 2);
        _0x8de6a = _0x1fdd06;
      }
    }
    if (!_0x1fb40f.style.backgroundColor) {
      _0x1fb40f.style.backgroundColor = "black";
    }
    if (!document.body.style.backgroundColor) {
      document.body.style.backgroundColor = "black";
    }
    _0x1fb40f.style.width = _0x8de6a + "px";
    _0x1fb40f.style.height = _0x5de7fb + "px";
    if (_0x3555f9.filteringMode == 1) {
      _0x1fb40f.style.imageRendering = "optimizeSpeed";
      _0x1fb40f.style.imageRendering = "-moz-crisp-edges";
      _0x1fb40f.style.imageRendering = "-o-crisp-edges";
      _0x1fb40f.style.imageRendering = "-webkit-optimize-contrast";
      _0x1fb40f.style.imageRendering = "optimize-contrast";
      _0x1fb40f.style.imageRendering = "crisp-edges";
      _0x1fb40f.style.imageRendering = "pixelated";
    }
    var _0x2d0389 = _0x3555f9.canvasResolutionScaleMode == 2 ? devicePixelRatio : 1;
    if (_0x3555f9.canvasResolutionScaleMode != 0) {
      var _0x54a12c = _0x8de6a * _0x2d0389 | 0;
      var _0x488d7f = _0x5de7fb * _0x2d0389 | 0;
      _0x1f7666(_0x1fb40f, _0x54a12c, _0x488d7f);
      if (_0x1fb40f.GLctxObject) {
        _0x1fb40f.GLctxObject.GLctx.viewport(0, 0, _0x54a12c, _0x488d7f);
      }
    }
    return _0x4c2efe;
  }
  function _0x3352c3(_0x5405bb, _0x22327d) {
    if (_0x22327d.scaleMode != 0 || _0x22327d.canvasResolutionScaleMode != 0) {
      _0x4265f3(_0x5405bb, _0x22327d);
    }
    if (_0x5405bb.requestFullscreen) {
      _0x5405bb.requestFullscreen();
    } else if (_0x5405bb.webkitRequestFullscreen) {
      _0x5405bb.webkitRequestFullscreen(Element.ALLOW_KEYBOARD_INPUT);
    } else if (_0x1b90f8.fullscreenEnabled()) {
      return -3;
    } else {
      return -1;
    }
    _0x571c3e = _0x22327d;
    if (_0x22327d.canvasResizedCallback) {
      (function (_0x323e98, _0x386990, _0x54729a) {
        return _0x3b09d7.apply(null, [_0x22327d.canvasResizedCallback, _0x323e98, _0x386990, _0x54729a]);
      })(37, 0, _0x22327d.canvasResizedCallbackUserData);
    }
    return 0;
  }
  function _0x3214fd() {
    if (!_0x1b90f8.fullscreenEnabled()) {
      return -1;
    }
    _0x1b90f8.removeDeferredCalls(_0x3352c3);
    var _0x25cdfe = _0x3a2c2b[1];
    if (_0x25cdfe.exitFullscreen) {
      if (_0x25cdfe.fullscreenElement) {
        _0x25cdfe.exitFullscreen();
      }
    } else if (_0x25cdfe.webkitExitFullscreen) {
      if (_0x25cdfe.webkitFullscreenElement) {
        _0x25cdfe.webkitExitFullscreen();
      }
    } else {
      return -1;
    }
    return 0;
  }
  function _0x1d7cfc(_0x5189c1) {
    if (_0x5189c1.requestPointerLock) {
      _0x5189c1.requestPointerLock();
    } else if (_0x5189c1.msRequestPointerLock) {
      _0x5189c1.msRequestPointerLock();
    } else if (document.body.requestPointerLock || document.body.msRequestPointerLock) {
      return -3;
    } else {
      return -1;
    }
    return 0;
  }
  function _0x334ef5() {
    _0x1b90f8.removeDeferredCalls(_0x1d7cfc);
    if (document.exitPointerLock) {
      document.exitPointerLock();
    } else if (document.msExitPointerLock) {
      document.msExitPointerLock();
    } else {
      return -1;
    }
    return 0;
  }
  function _0x11146e(_0x130b04) {
    var _0x5500f1 = document.fullscreenElement || document.mozFullScreenElement || document.webkitFullscreenElement || document.msFullscreenElement;
    var _0x20cb2f = !!_0x5500f1;
    _0x237516[_0x130b04 >> 2] = _0x20cb2f;
    _0x237516[_0x130b04 + 4 >> 2] = _0x1b90f8.fullscreenEnabled();
    var _0x511049 = _0x20cb2f ? _0x5500f1 : _0x1b90f8.previousFullscreenElement;
    var _0x1480b1 = _0x1b90f8.getNodeNameForTarget(_0x511049);
    var _0x25fce1 = _0x511049 && _0x511049.id ? _0x511049.id : "";
    _0x16748b(_0x1480b1, _0x130b04 + 8, 128);
    _0x16748b(_0x25fce1, _0x130b04 + 136, 128);
    _0x237516[_0x130b04 + 264 >> 2] = _0x511049 ? _0x511049.clientWidth : 0;
    _0x237516[_0x130b04 + 268 >> 2] = _0x511049 ? _0x511049.clientHeight : 0;
    _0x237516[_0x130b04 + 272 >> 2] = screen.width;
    _0x237516[_0x130b04 + 276 >> 2] = screen.height;
    if (_0x20cb2f) {
      _0x1b90f8.previousFullscreenElement = _0x5500f1;
    }
  }
  function _0x4a64f5(_0x4cec16) {
    if (!_0x1b90f8.fullscreenEnabled()) {
      return -1;
    }
    _0x11146e(_0x4cec16);
    return 0;
  }
  function _0x9b70fc(_0x68cc0a, _0x45481c) {
    _0x4aca1d[_0x68cc0a >> 3] = _0x45481c.timestamp;
    for (var _0x546bcd = 0; _0x546bcd < _0x45481c.axes.length; ++_0x546bcd) {
      _0x4aca1d[_0x68cc0a + _0x546bcd * 8 + 16 >> 3] = _0x45481c.axes[_0x546bcd];
    }
    for (var _0x546bcd = 0; _0x546bcd < _0x45481c.buttons.length; ++_0x546bcd) {
      if (typeof _0x45481c.buttons[_0x546bcd] === "object") {
        _0x4aca1d[_0x68cc0a + _0x546bcd * 8 + 528 >> 3] = _0x45481c.buttons[_0x546bcd].value;
      } else {
        _0x4aca1d[_0x68cc0a + _0x546bcd * 8 + 528 >> 3] = _0x45481c.buttons[_0x546bcd];
      }
    }
    for (var _0x546bcd = 0; _0x546bcd < _0x45481c.buttons.length; ++_0x546bcd) {
      if (typeof _0x45481c.buttons[_0x546bcd] === "object") {
        _0x237516[_0x68cc0a + _0x546bcd * 4 + 1040 >> 2] = _0x45481c.buttons[_0x546bcd].pressed;
      } else {
        _0x237516[_0x68cc0a + _0x546bcd * 4 + 1040 >> 2] = _0x45481c.buttons[_0x546bcd] == 1;
      }
    }
    _0x237516[_0x68cc0a + 1296 >> 2] = _0x45481c.connected;
    _0x237516[_0x68cc0a + 1300 >> 2] = _0x45481c.index;
    _0x237516[_0x68cc0a + 8 >> 2] = _0x45481c.axes.length;
    _0x237516[_0x68cc0a + 12 >> 2] = _0x45481c.buttons.length;
    _0x16748b(_0x45481c.id, _0x68cc0a + 1304, 64);
    _0x16748b(_0x45481c.mapping, _0x68cc0a + 1368, 64);
  }
  function _0x169081(_0x548c98, _0x255d6d) {
    if (_0x548c98 < 0 || _0x548c98 >= _0x1b90f8.lastGamepadState.length) {
      return -5;
    }
    if (!_0x1b90f8.lastGamepadState[_0x548c98]) {
      return -7;
    }
    _0x9b70fc(_0x255d6d, _0x1b90f8.lastGamepadState[_0x548c98]);
    return 0;
  }
  function _0x1c6c1a() {
    return 2147483648;
  }
  function _0x3c347a() {
    return _0x1b90f8.lastGamepadState.length;
  }
  function _0x1a1102() {
    _0x1b90f8.removeAllEventListeners();
  }
  function _0x5b6be2(_0xfd6398) {
    return !_0x1e1029.contexts[_0xfd6398] || _0x1e1029.contexts[_0xfd6398].GLctx.isContextLost();
  }
  function _0x22ba14(_0x4a0868) {
    return _0x4a0868 < 0 || _0x4a0868 === 0 && 1 / _0x4a0868 === -Infinity;
  }
  function _0x2d84ef(_0x1d8f04, _0x3f8d49) {
    return (_0x1d8f04 >>> 0) + _0x3f8d49 * 4294967296;
  }
  function _0xbe9035(_0x4dee67, _0x317c35) {
    return (_0x4dee67 >>> 0) + (_0x317c35 >>> 0) * 4294967296;
  }
  function _0x3d2e2d(_0x1e501e, _0x456c9d) {
    if (_0x1e501e <= 0) {
      return _0x1e501e;
    }
    var _0x549b58 = _0x456c9d <= 32 ? Math.abs(1 << _0x456c9d - 1) : Math.pow(2, _0x456c9d - 1);
    if (_0x1e501e >= _0x549b58 && (_0x456c9d <= 32 || _0x1e501e > _0x549b58)) {
      _0x1e501e = _0x549b58 * -2 + _0x1e501e;
    }
    return _0x1e501e;
  }
  function _0x29e84e(_0x3e6ce2, _0x4b67d9) {
    if (_0x3e6ce2 >= 0) {
      return _0x3e6ce2;
    }
    if (_0x4b67d9 <= 32) {
      return Math.abs(1 << _0x4b67d9 - 1) * 2 + _0x3e6ce2;
    } else {
      return Math.pow(2, _0x4b67d9) + _0x3e6ce2;
    }
  }
  function _0x39b9f0(_0x19409b, _0x3a77df) {
    var _0x1dfce3 = _0x19409b;
    var _0x5a1848 = _0x3a77df;
    function _0x3ed906(_0x4304ab, _0x33253f) {
      if (_0x33253f === "double" || _0x33253f === "i64") {
        if (_0x4304ab & 7) {
          _0x4304ab += 4;
        }
      } else {}
      return _0x4304ab;
    }
    function _0x27f0f2(_0x378c4e) {
      var _0x40b6d5;
      _0x5a1848 = _0x3ed906(_0x5a1848, _0x378c4e);
      if (_0x378c4e === "double") {
        _0x40b6d5 = _0x4aca1d[_0x5a1848 >> 3];
        _0x5a1848 += 8;
      } else if (_0x378c4e == "i64") {
        _0x40b6d5 = [_0x237516[_0x5a1848 >> 2], _0x237516[_0x5a1848 + 4 >> 2]];
        _0x5a1848 += 8;
      } else {
        _0x378c4e = "i32";
        _0x40b6d5 = _0x237516[_0x5a1848 >> 2];
        _0x5a1848 += 4;
      }
      return _0x40b6d5;
    }
    var _0x8be318 = [];
    var _0x25cafd;
    var _0x548f2b;
    var _0x4d4391;
    while (1) {
      var _0x13d0ac = _0x1dfce3;
      _0x25cafd = _0x1cc374[_0x1dfce3 >> 0];
      if (_0x25cafd === 0) {
        break;
      }
      _0x548f2b = _0x1cc374[_0x1dfce3 + 1 >> 0];
      if (_0x25cafd == 37) {
        var _0x5104be = false;
        var _0x156af9 = false;
        var _0x178356 = false;
        var _0x1a6729 = false;
        var _0x60b4b = false;
        _0x3ed768: while (1) {
          switch (_0x548f2b) {
            case 43:
              _0x5104be = true;
              break;
            case 45:
              _0x156af9 = true;
              break;
            case 35:
              _0x178356 = true;
              break;
            case 48:
              if (_0x1a6729) {
                break _0x3ed768;
              } else {
                _0x1a6729 = true;
                break;
              }
            case 32:
              _0x60b4b = true;
              break;
            default:
              break _0x3ed768;
          }
          _0x1dfce3++;
          _0x548f2b = _0x1cc374[_0x1dfce3 + 1 >> 0];
        }
        var _0x3f2378 = 0;
        if (_0x548f2b == 42) {
          _0x3f2378 = _0x27f0f2("i32");
          _0x1dfce3++;
          _0x548f2b = _0x1cc374[_0x1dfce3 + 1 >> 0];
        } else {
          while (_0x548f2b >= 48 && _0x548f2b <= 57) {
            _0x3f2378 = _0x3f2378 * 10 + (_0x548f2b - 48);
            _0x1dfce3++;
            _0x548f2b = _0x1cc374[_0x1dfce3 + 1 >> 0];
          }
        }
        var _0x22e3f9 = false;
        var _0x31ccba = -1;
        if (_0x548f2b == 46) {
          _0x31ccba = 0;
          _0x22e3f9 = true;
          _0x1dfce3++;
          _0x548f2b = _0x1cc374[_0x1dfce3 + 1 >> 0];
          if (_0x548f2b == 42) {
            _0x31ccba = _0x27f0f2("i32");
            _0x1dfce3++;
          } else {
            while (1) {
              var _0x23c2a7 = _0x1cc374[_0x1dfce3 + 1 >> 0];
              if (_0x23c2a7 < 48 || _0x23c2a7 > 57) {
                break;
              }
              _0x31ccba = _0x31ccba * 10 + (_0x23c2a7 - 48);
              _0x1dfce3++;
            }
          }
          _0x548f2b = _0x1cc374[_0x1dfce3 + 1 >> 0];
        }
        if (_0x31ccba < 0) {
          _0x31ccba = 6;
          _0x22e3f9 = false;
        }
        var _0x37fc1b;
        switch (String.fromCharCode(_0x548f2b)) {
          case "h":
            var _0x5937e3 = _0x1cc374[_0x1dfce3 + 2 >> 0];
            if (_0x5937e3 == 104) {
              _0x1dfce3++;
              _0x37fc1b = 1;
            } else {
              _0x37fc1b = 2;
            }
            break;
          case "l":
            var _0x5937e3 = _0x1cc374[_0x1dfce3 + 2 >> 0];
            if (_0x5937e3 == 108) {
              _0x1dfce3++;
              _0x37fc1b = 8;
            } else {
              _0x37fc1b = 4;
            }
            break;
          case "L":
          case "q":
          case "j":
            _0x37fc1b = 8;
            break;
          case "z":
          case "t":
          case "I":
            _0x37fc1b = 4;
            break;
          default:
            _0x37fc1b = null;
        }
        if (_0x37fc1b) {
          _0x1dfce3++;
        }
        _0x548f2b = _0x1cc374[_0x1dfce3 + 1 >> 0];
        switch (String.fromCharCode(_0x548f2b)) {
          case "d":
          case "i":
          case "u":
          case "o":
          case "x":
          case "X":
          case "p":
            {
              var _0x4ca1f3 = _0x548f2b == 100 || _0x548f2b == 105;
              _0x37fc1b = _0x37fc1b || 4;
              _0x4d4391 = _0x27f0f2("i" + _0x37fc1b * 8);
              var _0xfff377;
              if (_0x37fc1b == 8) {
                _0x4d4391 = _0x548f2b == 117 ? _0xbe9035(_0x4d4391[0], _0x4d4391[1]) : _0x2d84ef(_0x4d4391[0], _0x4d4391[1]);
              }
              if (_0x37fc1b <= 4) {
                var _0x1820ef = Math.pow(256, _0x37fc1b) - 1;
                _0x4d4391 = (_0x4ca1f3 ? _0x3d2e2d : _0x29e84e)(_0x4d4391 & _0x1820ef, _0x37fc1b * 8);
              }
              var _0x555881 = Math.abs(_0x4d4391);
              var _0x4d13c6 = "";
              if (_0x548f2b == 100 || _0x548f2b == 105) {
                _0xfff377 = _0x3d2e2d(_0x4d4391, _0x37fc1b * 8, 1).toString(10);
              } else if (_0x548f2b == 117) {
                _0xfff377 = _0x29e84e(_0x4d4391, _0x37fc1b * 8, 1).toString(10);
                _0x4d4391 = Math.abs(_0x4d4391);
              } else if (_0x548f2b == 111) {
                _0xfff377 = (_0x178356 ? "0" : "") + _0x555881.toString(8);
              } else if (_0x548f2b == 120 || _0x548f2b == 88) {
                _0x4d13c6 = _0x178356 && _0x4d4391 != 0 ? "0x" : "";
                if (_0x4d4391 < 0) {
                  _0x4d4391 = -_0x4d4391;
                  _0xfff377 = (_0x555881 - 1).toString(16);
                  var _0x4f5feb = [];
                  for (var _0x17e743 = 0; _0x17e743 < _0xfff377.length; _0x17e743++) {
                    _0x4f5feb.push((15 - parseInt(_0xfff377[_0x17e743], 16)).toString(16));
                  }
                  _0xfff377 = _0x4f5feb.join("");
                  while (_0xfff377.length < _0x37fc1b * 2) {
                    _0xfff377 = "f" + _0xfff377;
                  }
                } else {
                  _0xfff377 = _0x555881.toString(16);
                }
                if (_0x548f2b == 88) {
                  _0x4d13c6 = _0x4d13c6.toUpperCase();
                  _0xfff377 = _0xfff377.toUpperCase();
                }
              } else if (_0x548f2b == 112) {
                if (_0x555881 === 0) {
                  _0xfff377 = "(nil)";
                } else {
                  _0x4d13c6 = "0x";
                  _0xfff377 = _0x555881.toString(16);
                }
              }
              if (_0x22e3f9) {
                while (_0xfff377.length < _0x31ccba) {
                  _0xfff377 = "0" + _0xfff377;
                }
              }
              if (_0x4d4391 >= 0) {
                if (_0x5104be) {
                  _0x4d13c6 = "+" + _0x4d13c6;
                } else if (_0x60b4b) {
                  _0x4d13c6 = " " + _0x4d13c6;
                }
              }
              if (_0xfff377.charAt(0) == "-") {
                _0x4d13c6 = "-" + _0x4d13c6;
                _0xfff377 = _0xfff377.substr(1);
              }
              while (_0x4d13c6.length + _0xfff377.length < _0x3f2378) {
                if (_0x156af9) {
                  _0xfff377 += " ";
                } else if (_0x1a6729) {
                  _0xfff377 = "0" + _0xfff377;
                } else {
                  _0x4d13c6 = " " + _0x4d13c6;
                }
              }
              _0xfff377 = _0x4d13c6 + _0xfff377;
              _0xfff377.split("").forEach(function (_0xe83bdd) {
                _0x8be318.push(_0xe83bdd.charCodeAt(0));
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
              _0x4d4391 = _0x27f0f2("double");
              var _0xfff377;
              if (isNaN(_0x4d4391)) {
                _0xfff377 = "nan";
                _0x1a6729 = false;
              } else if (!isFinite(_0x4d4391)) {
                _0xfff377 = (_0x4d4391 < 0 ? "-" : "") + "inf";
                _0x1a6729 = false;
              } else {
                var _0x4092c8 = false;
                var _0x2b9e70 = Math.min(_0x31ccba, 20);
                if (_0x548f2b == 103 || _0x548f2b == 71) {
                  _0x4092c8 = true;
                  _0x31ccba = _0x31ccba || 1;
                  var _0x2f2caa = parseInt(_0x4d4391.toExponential(_0x2b9e70).split("e")[1], 10);
                  if (_0x31ccba > _0x2f2caa && _0x2f2caa >= -4) {
                    _0x548f2b = (_0x548f2b == 103 ? "f" : "F").charCodeAt(0);
                    _0x31ccba -= _0x2f2caa + 1;
                  } else {
                    _0x548f2b = (_0x548f2b == 103 ? "e" : "E").charCodeAt(0);
                    _0x31ccba--;
                  }
                  _0x2b9e70 = Math.min(_0x31ccba, 20);
                }
                if (_0x548f2b == 101 || _0x548f2b == 69) {
                  _0xfff377 = _0x4d4391.toExponential(_0x2b9e70);
                  if (/[eE][-+]\d$/.test(_0xfff377)) {
                    _0xfff377 = _0xfff377.slice(0, -1) + "0" + _0xfff377.slice(-1);
                  }
                } else if (_0x548f2b == 102 || _0x548f2b == 70) {
                  _0xfff377 = _0x4d4391.toFixed(_0x2b9e70);
                  if (_0x4d4391 === 0 && _0x22ba14(_0x4d4391)) {
                    _0xfff377 = "-" + _0xfff377;
                  }
                }
                var _0x22a987 = _0xfff377.split("e");
                if (_0x4092c8 && !_0x178356) {
                  while (_0x22a987[0].length > 1 && _0x22a987[0].includes(".") && (_0x22a987[0].slice(-1) == "0" || _0x22a987[0].slice(-1) == ".")) {
                    _0x22a987[0] = _0x22a987[0].slice(0, -1);
                  }
                } else {
                  if (_0x178356 && _0xfff377.indexOf(".") == -1) {
                    _0x22a987[0] += ".";
                  }
                  while (_0x31ccba > _0x2b9e70++) {
                    _0x22a987[0] += "0";
                  }
                }
                _0xfff377 = _0x22a987[0] + (_0x22a987.length > 1 ? "e" + _0x22a987[1] : "");
                if (_0x548f2b == 69) {
                  _0xfff377 = _0xfff377.toUpperCase();
                }
                if (_0x4d4391 >= 0) {
                  if (_0x5104be) {
                    _0xfff377 = "+" + _0xfff377;
                  } else if (_0x60b4b) {
                    _0xfff377 = " " + _0xfff377;
                  }
                }
              }
              while (_0xfff377.length < _0x3f2378) {
                if (_0x156af9) {
                  _0xfff377 += " ";
                } else if (_0x1a6729 && (_0xfff377[0] == "-" || _0xfff377[0] == "+")) {
                  _0xfff377 = _0xfff377[0] + "0" + _0xfff377.slice(1);
                } else {
                  _0xfff377 = (_0x1a6729 ? "0" : " ") + _0xfff377;
                }
              }
              if (_0x548f2b < 97) {
                _0xfff377 = _0xfff377.toUpperCase();
              }
              _0xfff377.split("").forEach(function (_0x12267b) {
                _0x8be318.push(_0x12267b.charCodeAt(0));
              });
              break;
            }
          case "s":
            {
              var _0x58fac5 = _0x27f0f2("i8*");
              var _0x544a5c = _0x58fac5 ? _0x5b40d9(_0x58fac5) : "(null)".length;
              if (_0x22e3f9) {
                _0x544a5c = Math.min(_0x544a5c, _0x31ccba);
              }
              if (!_0x156af9) {
                while (_0x544a5c < _0x3f2378--) {
                  _0x8be318.push(32);
                }
              }
              if (_0x58fac5) {
                for (var _0x17e743 = 0; _0x17e743 < _0x544a5c; _0x17e743++) {
                  _0x8be318.push(_0x312996[_0x58fac5++ >> 0]);
                }
              } else {
                _0x8be318 = _0x8be318.concat(_0x1c148c("(null)".substr(0, _0x544a5c), true));
              }
              if (_0x156af9) {
                while (_0x544a5c < _0x3f2378--) {
                  _0x8be318.push(32);
                }
              }
              break;
            }
          case "c":
            {
              if (_0x156af9) {
                _0x8be318.push(_0x27f0f2("i8"));
              }
              while (--_0x3f2378 > 0) {
                _0x8be318.push(32);
              }
              if (!_0x156af9) {
                _0x8be318.push(_0x27f0f2("i8"));
              }
              break;
            }
          case "n":
            {
              var _0x56f1d7 = _0x27f0f2("i32*");
              _0x237516[_0x56f1d7 >> 2] = _0x8be318.length;
              break;
            }
          case "%":
            {
              _0x8be318.push(_0x25cafd);
              break;
            }
          default:
            {
              for (var _0x17e743 = _0x13d0ac; _0x17e743 < _0x1dfce3 + 2; _0x17e743++) {
                _0x8be318.push(_0x1cc374[_0x17e743 >> 0]);
              }
            }
        }
        _0x1dfce3 += 2;
      } else {
        _0x8be318.push(_0x25cafd);
        _0x1dfce3 += 1;
      }
    }
    return _0x8be318;
  }
  function _0x95e4b2(_0x56b1b2) {
    if (!_0x56b1b2 || !_0x56b1b2.callee || !_0x56b1b2.callee.name) {
      return [null, "", ""];
    }
    var _0x44e6a2 = _0x56b1b2.callee.toString();
    var _0x4e2912 = _0x56b1b2.callee.name;
    var _0x2ef71d = "(";
    var _0x451e5a = true;
    for (var _0x51f185 in _0x56b1b2) {
      var _0x10cac3 = _0x56b1b2[_0x51f185];
      if (!_0x451e5a) {
        _0x2ef71d += ", ";
      }
      _0x451e5a = false;
      if (typeof _0x10cac3 === "number" || typeof _0x10cac3 === "string") {
        _0x2ef71d += _0x10cac3;
      } else {
        _0x2ef71d += "(" + typeof _0x10cac3 + ")";
      }
    }
    _0x2ef71d += ")";
    var _0x53ee1f = _0x56b1b2.callee.caller;
    _0x56b1b2 = _0x53ee1f ? _0x53ee1f.arguments : [];
    if (_0x451e5a) {
      _0x2ef71d = "";
    }
    return [_0x56b1b2, _0x4e2912, _0x2ef71d];
  }
  function _0x27fc0a(_0x92b9d) {
    var _0x25f4f4 = _0x7ee0f5();
    var _0x52878b = _0x25f4f4.lastIndexOf("_emscripten_log");
    var _0x598899 = _0x25f4f4.lastIndexOf("_emscripten_get_callstack");
    var _0x55928d = _0x25f4f4.indexOf("\n", Math.max(_0x52878b, _0x598899)) + 1;
    _0x25f4f4 = _0x25f4f4.slice(_0x55928d);
    if (_0x92b9d & 32) {
      _0x49a161("EM_LOG_DEMANGLE is deprecated; ignoring");
    }
    if (_0x92b9d & 8 && typeof emscripten_source_map === "undefined") {
      _0x49a161("Source map information is not available, emscripten_log with EM_LOG_C_STACK will be ignored. Build with \"--pre-js $EMSCRIPTEN/src/emscripten-source-map.min.js\" linker flag to add source map loading to code.");
      _0x92b9d ^= 8;
      _0x92b9d |= 16;
    }
    var _0x431dc1 = null;
    if (_0x92b9d & 128) {
      _0x431dc1 = _0x95e4b2(arguments);
      while (_0x431dc1[1].includes("_emscripten_")) {
        _0x431dc1 = _0x95e4b2(_0x431dc1[0]);
      }
    }
    var _0x10b71f = _0x25f4f4.split("\n");
    _0x25f4f4 = "";
    var _0x326b5a = new RegExp("\\s*(.*?)@(.*?):([0-9]+):([0-9]+)");
    var _0x2ecee8 = new RegExp("\\s*(.*?)@(.*):(.*)(:(.*))?");
    var _0x33e15f = new RegExp("\\s*at (.*?) \\((.*):(.*):(.*)\\)");
    for (var _0x164094 in _0x10b71f) {
      var _0x233067 = _0x10b71f[_0x164094];
      var _0x359555 = "";
      var _0x4e2834 = "";
      var _0x365379 = 0;
      var _0x3f2043 = 0;
      var _0x5006ce = _0x33e15f.exec(_0x233067);
      if (_0x5006ce && _0x5006ce.length == 5) {
        _0x359555 = _0x5006ce[1];
        _0x4e2834 = _0x5006ce[2];
        _0x365379 = _0x5006ce[3];
        _0x3f2043 = _0x5006ce[4];
      } else {
        _0x5006ce = _0x326b5a.exec(_0x233067);
        if (!_0x5006ce) {
          _0x5006ce = _0x2ecee8.exec(_0x233067);
        }
        if (_0x5006ce && _0x5006ce.length >= 4) {
          _0x359555 = _0x5006ce[1];
          _0x4e2834 = _0x5006ce[2];
          _0x365379 = _0x5006ce[3];
          _0x3f2043 = _0x5006ce[4] | 0;
        } else {
          _0x25f4f4 += _0x233067 + "\n";
          continue;
        }
      }
      var _0x11aca6 = false;
      if (_0x92b9d & 8) {
        var _0x47c88f = emscripten_source_map.originalPositionFor({
          line: _0x365379,
          column: _0x3f2043
        });
        _0x11aca6 = _0x47c88f && _0x47c88f.source;
        if (_0x11aca6) {
          if (_0x92b9d & 64) {
            _0x47c88f.source = _0x47c88f.source.substring(_0x47c88f.source.replace(/\\/g, "/").lastIndexOf("/") + 1);
          }
          _0x25f4f4 += "    at " + _0x359555 + " (" + _0x47c88f.source + ":" + _0x47c88f.line + ":" + _0x47c88f.column + ")\n";
        }
      }
      if (_0x92b9d & 16 || !_0x11aca6) {
        if (_0x92b9d & 64) {
          _0x4e2834 = _0x4e2834.substring(_0x4e2834.replace(/\\/g, "/").lastIndexOf("/") + 1);
        }
        _0x25f4f4 += (_0x11aca6 ? "     = " + _0x359555 : "    at " + _0x359555) + " (" + _0x4e2834 + ":" + _0x365379 + ":" + _0x3f2043 + ")\n";
      }
      if (_0x92b9d & 128 && _0x431dc1[0]) {
        if (_0x431dc1[1] == _0x359555 && _0x431dc1[2].length > 0) {
          _0x25f4f4 = _0x25f4f4.replace(/\s+$/, "");
          _0x25f4f4 += " with values: " + _0x431dc1[1] + _0x431dc1[2] + "\n";
        }
        _0x431dc1 = _0x95e4b2(_0x431dc1[0]);
      }
    }
    _0x25f4f4 = _0x25f4f4.replace(/\s+$/, "");
    return _0x25f4f4;
  }
  function _0xbc5922(_0x2db741, _0xd975b9) {
    if (_0x2db741 & 24) {
      _0xd975b9 = _0xd975b9.replace(/\s+$/, "");
      _0xd975b9 += (_0xd975b9.length > 0 ? "\n" : "") + _0x27fc0a(_0x2db741);
    }
    if (_0x2db741 & 1) {
      if (_0x2db741 & 4) {
        console.error(_0xd975b9);
      } else if (_0x2db741 & 2) {
        console.warn(_0xd975b9);
      } else if (_0x2db741 & 512) {
        console.info(_0xd975b9);
      } else if (_0x2db741 & 256) {
        console.debug(_0xd975b9);
      } else {
        console.log(_0xd975b9);
      }
    } else if (_0x2db741 & 6) {
      _0x4677f2(_0xd975b9);
    } else {
      _0x1f45d9(_0xd975b9);
    }
  }
  function _0x519a42(_0x5b5537, _0x44333b, _0x20564e) {
    var _0x34d4d5 = _0x39b9f0(_0x44333b, _0x20564e);
    var _0x35a05e = _0xcb370(_0x34d4d5, 0);
    _0xbc5922(_0x5b5537, _0x35a05e);
  }
  function _0x180aa9(_0x15056e, _0x2ad877) {
    _0x2ec72f(_0x15056e, _0x2ad877 || 1);
    throw "longjmp";
  }
  function _0x4f7cd9(_0x1d4310, _0x495885) {
    return _0x180aa9(_0x1d4310, _0x495885);
  }
  function _0x313a90(_0x46cc9f, _0x51bd77, _0x183b4c) {
    _0x312996.copyWithin(_0x46cc9f, _0x51bd77, _0x51bd77 + _0x183b4c);
  }
  function _0x44487a(_0x1c6f1b, _0x4979b9) {
    if (!_0x1b90f8.fullscreenEnabled()) {
      return -1;
    }
    _0x1c6f1b = _0x166450(_0x1c6f1b);
    if (!_0x1c6f1b) {
      return -4;
    }
    if (!_0x1c6f1b.requestFullscreen && !_0x1c6f1b.webkitRequestFullscreen) {
      return -3;
    }
    var _0x12ca30 = _0x1b90f8.canPerformEventHandlerRequests();
    if (!_0x12ca30) {
      if (_0x4979b9.deferUntilInEventHandler) {
        _0x1b90f8.deferCall(_0x3352c3, 1, [_0x1c6f1b, _0x4979b9]);
        return 1;
      } else {
        return -2;
      }
    }
    return _0x3352c3(_0x1c6f1b, _0x4979b9);
  }
  function _0xee8eec(_0x2495cf, _0xf11d5f) {
    var _0x58d8a9 = {
      scaleMode: 0,
      canvasResolutionScaleMode: 0,
      filteringMode: 0,
      deferUntilInEventHandler: _0xf11d5f,
      canvasResizedCallbackTargetThread: 2
    };
    return _0x44487a(_0x2495cf, _0x58d8a9);
  }
  function _0x22be3f(_0xbba7a8, _0x58d1b2) {
    _0xbba7a8 = _0x166450(_0xbba7a8);
    if (!_0xbba7a8) {
      return -4;
    }
    if (!_0xbba7a8.requestPointerLock && !_0xbba7a8.msRequestPointerLock) {
      return -1;
    }
    var _0x3483c4 = _0x1b90f8.canPerformEventHandlerRequests();
    if (!_0x3483c4) {
      if (_0x58d1b2) {
        _0x1b90f8.deferCall(_0x1d7cfc, 2, [_0xbba7a8]);
        return 1;
      } else {
        return -2;
      }
    }
    return _0x1d7cfc(_0xbba7a8);
  }
  function _0xf22da2(_0x167b19) {
    try {
      _0x55b931.grow(_0x167b19 - _0x3fb518.byteLength + 65535 >>> 16);
      _0x1f772b(_0x55b931.buffer);
      return 1;
    } catch (_0x22899b) {}
  }
  function _0x10a396(_0x2c0c7d) {
    var _0x27ebf2 = _0x312996.length;
    _0x2c0c7d = _0x2c0c7d >>> 0;
    var _0x54edc6 = 2147483648;
    if (_0x2c0c7d > _0x54edc6) {
      return false;
    }
    for (var _0x2f0c46 = 1; _0x2f0c46 <= 4; _0x2f0c46 *= 2) {
      var _0x3ce970 = _0x27ebf2 * (1 + 0.2 / _0x2f0c46);
      _0x3ce970 = Math.min(_0x3ce970, _0x2c0c7d + 100663296);
      var _0x2c3238 = Math.min(_0x54edc6, _0x33ae11(Math.max(_0x2c0c7d, _0x3ce970), 65536));
      var _0x240311 = _0xf22da2(_0x2c3238);
      if (_0x240311) {
        return true;
      }
    }
    return false;
  }
  function _0x2bd6cd() {
    try {
      if (navigator.getGamepads) {
        if (_0x1b90f8.lastGamepadState = navigator.getGamepads()) {
          return 0;
        } else {
          return -1;
        }
      }
    } catch (_0x258f5a) {
      navigator.getGamepads = null;
    }
    return -1;
  }
  function _0x5c48c0(_0xdb4efc, _0x37efbb, _0x47694e, _0x31a12a, _0x4ef29f, _0x19bc28, _0x440ee6) {
    if (!_0x1b90f8.focusEvent) {
      _0x1b90f8.focusEvent = _0x4fa9c0(256);
    }
    var _0x4231ef = function (_0x2d4efb) {
      var _0x52b553 = _0x2d4efb || event;
      var _0x14ce87 = _0x1b90f8.getNodeNameForTarget(_0x52b553.target);
      var _0x96d234 = _0x52b553.target.id ? _0x52b553.target.id : "";
      var _0x267e0d = _0x1b90f8.focusEvent;
      _0x16748b(_0x14ce87, _0x267e0d + 0, 128);
      _0x16748b(_0x96d234, _0x267e0d + 128, 128);
      if (function (_0xb257cf, _0x19eb14, _0x496429) {
        return _0x3b09d7.apply(null, [_0x31a12a, _0xb257cf, _0x19eb14, _0x496429]);
      }(_0x4ef29f, _0x267e0d, _0x37efbb)) {
        _0x52b553.preventDefault();
      }
    };
    var _0x157b88 = {
      target: _0x166450(_0xdb4efc),
      eventTypeString: _0x19bc28,
      callbackfunc: _0x31a12a,
      handlerFunc: _0x4231ef,
      useCapture: _0x47694e
    };
    _0x1b90f8.registerOrRemoveHandler(_0x157b88);
  }
  function _0x32ad2a(_0x50e7ff, _0x2941d5, _0x3348f9, _0x2470af, _0x3fb0ef) {
    _0x5c48c0(_0x50e7ff, _0x2941d5, _0x3348f9, _0x2470af, 12, "blur", _0x3fb0ef);
    return 0;
  }
  function _0x71b52(_0x1221f6, _0xe09e8a, _0x109443, _0x27ccf3, _0xf453d) {
    _0x5c48c0(_0x1221f6, _0xe09e8a, _0x109443, _0x27ccf3, 13, "focus", _0xf453d);
    return 0;
  }
  function _0x27cff2(_0x40ffcf, _0x4a403f, _0x1c681f, _0x1e91a4, _0x334c69, _0x2af01a, _0x13dd85) {
    if (!_0x1b90f8.fullscreenChangeEvent) {
      _0x1b90f8.fullscreenChangeEvent = _0x4fa9c0(280);
    }
    var _0xaaab5c = function (_0xa9a1cb) {
      var _0x903d68 = _0xa9a1cb || event;
      var _0x4edb6e = _0x1b90f8.fullscreenChangeEvent;
      _0x11146e(_0x4edb6e);
      if (function (_0x2da02e, _0x1be1d3, _0x2ac435) {
        return _0x3b09d7.apply(null, [_0x1e91a4, _0x2da02e, _0x1be1d3, _0x2ac435]);
      }(_0x334c69, _0x4edb6e, _0x4a403f)) {
        _0x903d68.preventDefault();
      }
    };
    var _0x365ec2 = {
      target: _0x40ffcf,
      eventTypeString: _0x2af01a,
      callbackfunc: _0x1e91a4,
      handlerFunc: _0xaaab5c,
      useCapture: _0x1c681f
    };
    _0x1b90f8.registerOrRemoveHandler(_0x365ec2);
  }
  function _0x227432(_0x5d9c94, _0x9f8680, _0xa7bfb7, _0xe64819, _0x5c88e4) {
    if (!_0x1b90f8.fullscreenEnabled()) {
      return -1;
    }
    _0x5d9c94 = _0x166450(_0x5d9c94);
    if (!_0x5d9c94) {
      return -4;
    }
    _0x27cff2(_0x5d9c94, _0x9f8680, _0xa7bfb7, _0xe64819, 19, "fullscreenchange", _0x5c88e4);
    _0x27cff2(_0x5d9c94, _0x9f8680, _0xa7bfb7, _0xe64819, 19, "webkitfullscreenchange", _0x5c88e4);
    return 0;
  }
  function _0x515602(_0x4e00c0, _0x4236b3, _0x3e0814, _0x2f2013, _0x2d49cb, _0x42b7ee, _0x5d83eb) {
    if (!_0x1b90f8.gamepadEvent) {
      _0x1b90f8.gamepadEvent = _0x4fa9c0(1432);
    }
    var _0x1abe65 = function (_0x40f9d4) {
      var _0x38946b = _0x40f9d4 || event;
      var _0x48b1a6 = _0x1b90f8.gamepadEvent;
      _0x9b70fc(_0x48b1a6, _0x38946b.gamepad);
      if (function (_0x144390, _0x4b8db4, _0x3b0136) {
        return _0x3b09d7.apply(null, [_0x2f2013, _0x144390, _0x4b8db4, _0x3b0136]);
      }(_0x2d49cb, _0x48b1a6, _0x4236b3)) {
        _0x38946b.preventDefault();
      }
    };
    var _0x53d3eb = {
      target: _0x166450(_0x4e00c0),
      allowsDeferredCalls: true,
      eventTypeString: _0x42b7ee,
      callbackfunc: _0x2f2013,
      handlerFunc: _0x1abe65,
      useCapture: _0x3e0814
    };
    _0x1b90f8.registerOrRemoveHandler(_0x53d3eb);
  }
  function _0x48d960(_0x39643e, _0x800f9e, _0x582dc8, _0x1c213e) {
    if (_0x2bd6cd()) {
      return -1;
    }
    return _0x515602(2, _0x39643e, _0x800f9e, _0x582dc8, 26, "gamepadconnected", _0x1c213e);
  }
  function _0x499d55(_0x5ccf33, _0x318032, _0x5e1a72, _0x4ff060) {
    if (_0x2bd6cd()) {
      return -1;
    }
    return _0x515602(2, _0x5ccf33, _0x318032, _0x5e1a72, 27, "gamepaddisconnected", _0x4ff060);
  }
  function _0x5c866d(_0x154372, _0x352c57, _0x2ff479) {
    return setInterval(function () {
      (function (_0x7434e9) {
        _0x58d73a.apply(null, [_0x154372, _0x7434e9]);
      })(_0x2ff479);
    }, _0x352c57);
  }
  function _0x50576d(_0x5c134e, _0x2e6dd0, _0xca735, _0x494271, _0x3514f5, _0x2935d9, _0x544a20) {
    if (!_0x1b90f8.keyEvent) {
      _0x1b90f8.keyEvent = _0x4fa9c0(164);
    }
    var _0x3bf15b = function (_0x744793) {
      var _0x3f950b = _0x1b90f8.keyEvent;
      var _0x708e8f = _0x3f950b >> 2;
      _0x237516[_0x708e8f + 0] = _0x744793.location;
      _0x237516[_0x708e8f + 1] = _0x744793.ctrlKey;
      _0x237516[_0x708e8f + 2] = _0x744793.shiftKey;
      _0x237516[_0x708e8f + 3] = _0x744793.altKey;
      _0x237516[_0x708e8f + 4] = _0x744793.metaKey;
      _0x237516[_0x708e8f + 5] = _0x744793.repeat;
      _0x237516[_0x708e8f + 6] = _0x744793.charCode;
      _0x237516[_0x708e8f + 7] = _0x744793.keyCode;
      _0x237516[_0x708e8f + 8] = _0x744793.which;
      _0x16748b(_0x744793.key || "", _0x3f950b + 36, 32);
      _0x16748b(_0x744793.code || "", _0x3f950b + 68, 32);
      _0x16748b(_0x744793.char || "", _0x3f950b + 100, 32);
      _0x16748b(_0x744793.locale || "", _0x3f950b + 132, 32);
      if (function (_0x325a90, _0x554295, _0x12b59a) {
        return _0x3b09d7.apply(null, [_0x494271, _0x325a90, _0x554295, _0x12b59a]);
      }(_0x3514f5, _0x3f950b, _0x2e6dd0)) {
        _0x744793.preventDefault();
      }
    };
    var _0x4da0d6 = {
      target: _0x166450(_0x5c134e),
      allowsDeferredCalls: true,
      eventTypeString: _0x2935d9,
      callbackfunc: _0x494271,
      handlerFunc: _0x3bf15b,
      useCapture: _0xca735
    };
    _0x1b90f8.registerOrRemoveHandler(_0x4da0d6);
  }
  function _0x512171(_0x252e7f, _0x244b87, _0x3c5e9e, _0x5c384f, _0xbc4e02) {
    _0x50576d(_0x252e7f, _0x244b87, _0x3c5e9e, _0x5c384f, 2, "keydown", _0xbc4e02);
    return 0;
  }
  function _0x262e0b(_0x577838, _0x41fe46, _0x2a6850, _0x3e5dc1, _0x36c7fb) {
    _0x50576d(_0x577838, _0x41fe46, _0x2a6850, _0x3e5dc1, 1, "keypress", _0x36c7fb);
    return 0;
  }
  function _0x1d6f7d(_0x787912, _0x39a9f7, _0x557e98, _0x20cb74, _0x48c050) {
    _0x50576d(_0x787912, _0x39a9f7, _0x557e98, _0x20cb74, 3, "keyup", _0x48c050);
    return 0;
  }
  function _0x12b960(_0x1e2541, _0x3cb91, _0x33d701) {
    var _0x541ea4 = function () {
      _0x21100c.call(null, _0x1e2541);
    };
    _0x5cdd16(_0x541ea4, _0x3cb91, _0x33d701);
  }
  function _0x289a38(_0x50251d, _0x1679aa, _0x3b43b7) {
    var _0x2bb790 = _0x50251d >> 2;
    _0x237516[_0x2bb790 + 0] = _0x1679aa.screenX;
    _0x237516[_0x2bb790 + 1] = _0x1679aa.screenY;
    _0x237516[_0x2bb790 + 2] = _0x1679aa.clientX;
    _0x237516[_0x2bb790 + 3] = _0x1679aa.clientY;
    _0x237516[_0x2bb790 + 4] = _0x1679aa.ctrlKey;
    _0x237516[_0x2bb790 + 5] = _0x1679aa.shiftKey;
    _0x237516[_0x2bb790 + 6] = _0x1679aa.altKey;
    _0x237516[_0x2bb790 + 7] = _0x1679aa.metaKey;
    _0x1694cb[_0x2bb790 * 2 + 16] = _0x1679aa.button;
    _0x1694cb[_0x2bb790 * 2 + 17] = _0x1679aa.buttons;
    _0x237516[_0x2bb790 + 9] = _0x1679aa.movementX;
    _0x237516[_0x2bb790 + 10] = _0x1679aa.movementY;
    var _0x1bdb25 = _0xfcd8c6(_0x3b43b7);
    _0x237516[_0x2bb790 + 11] = _0x1679aa.clientX - _0x1bdb25.left;
    _0x237516[_0x2bb790 + 12] = _0x1679aa.clientY - _0x1bdb25.top;
  }
  function _0x4fcf69(_0x5ecb43, _0xc85a8b, _0x4775e5, _0xaf8894, _0x4ad2b1, _0x46263d, _0x3ef129) {
    if (!_0x1b90f8.mouseEvent) {
      _0x1b90f8.mouseEvent = _0x4fa9c0(64);
    }
    _0x5ecb43 = _0x166450(_0x5ecb43);
    var _0x27ba6f = function (_0x2df436) {
      var _0x5686d2 = _0x2df436 || event;
      _0x289a38(_0x1b90f8.mouseEvent, _0x5686d2, _0x5ecb43);
      if (function (_0x4e6db1, _0x579cd8, _0x2efb8a) {
        return _0x3b09d7.apply(null, [_0xaf8894, _0x4e6db1, _0x579cd8, _0x2efb8a]);
      }(_0x4ad2b1, _0x1b90f8.mouseEvent, _0xc85a8b)) {
        _0x5686d2.preventDefault();
      }
    };
    var _0x55cd75 = {
      target: _0x5ecb43,
      allowsDeferredCalls: _0x46263d != "mousemove" && _0x46263d != "mouseenter" && _0x46263d != "mouseleave",
      eventTypeString: _0x46263d,
      callbackfunc: _0xaf8894,
      handlerFunc: _0x27ba6f,
      useCapture: _0x4775e5
    };
    _0x1b90f8.registerOrRemoveHandler(_0x55cd75);
  }
  function _0x144062(_0x2a895f, _0x3af1ae, _0x2ac26c, _0x4722f6, _0x5f1b4c) {
    _0x4fcf69(_0x2a895f, _0x3af1ae, _0x2ac26c, _0x4722f6, 5, "mousedown", _0x5f1b4c);
    return 0;
  }
  function _0x24ff51(_0x54f425, _0x5ee821, _0x5f3d9e, _0x396a9c, _0x754587) {
    _0x4fcf69(_0x54f425, _0x5ee821, _0x5f3d9e, _0x396a9c, 8, "mousemove", _0x754587);
    return 0;
  }
  function _0x233b69(_0x12ec46, _0x276abe, _0x492f7f, _0x15a1cc, _0x4fb038) {
    _0x4fcf69(_0x12ec46, _0x276abe, _0x492f7f, _0x15a1cc, 6, "mouseup", _0x4fb038);
    return 0;
  }
  function _0x50bc0a(_0x5f0771) {
    var _0x3f2575 = document.pointerLockElement || document.mozPointerLockElement || document.webkitPointerLockElement || document.msPointerLockElement;
    var _0x3870c4 = !!_0x3f2575;
    _0x237516[_0x5f0771 >> 2] = _0x3870c4;
    var _0x2981d9 = _0x1b90f8.getNodeNameForTarget(_0x3f2575);
    var _0x3ffdb7 = _0x3f2575 && _0x3f2575.id ? _0x3f2575.id : "";
    _0x16748b(_0x2981d9, _0x5f0771 + 4, 128);
    _0x16748b(_0x3ffdb7, _0x5f0771 + 132, 128);
  }
  function _0x9e47ba(_0x5771e4, _0x42bdb5, _0x5f54f9, _0x4f0d35, _0x41deb7, _0x22453f, _0x3aca0e) {
    if (!_0x1b90f8.pointerlockChangeEvent) {
      _0x1b90f8.pointerlockChangeEvent = _0x4fa9c0(260);
    }
    var _0x648fa6 = function (_0x39cb5c) {
      var _0x430e44 = _0x39cb5c || event;
      var _0x4236f9 = _0x1b90f8.pointerlockChangeEvent;
      _0x50bc0a(_0x4236f9);
      if (function (_0x4c2f65, _0xe970ed, _0x469c0f) {
        return _0x3b09d7.apply(null, [_0x4f0d35, _0x4c2f65, _0xe970ed, _0x469c0f]);
      }(_0x41deb7, _0x4236f9, _0x42bdb5)) {
        _0x430e44.preventDefault();
      }
    };
    var _0x554c93 = {
      target: _0x5771e4,
      eventTypeString: _0x22453f,
      callbackfunc: _0x4f0d35,
      handlerFunc: _0x648fa6,
      useCapture: _0x5f54f9
    };
    _0x1b90f8.registerOrRemoveHandler(_0x554c93);
  }
  function _0x11d227(_0x1f95cb, _0x248aa5, _0x57be96, _0x4702ee, _0x4eaf8a) {
    if (!document || !document.body || !document.body.requestPointerLock && !document.body.mozRequestPointerLock && !document.body.webkitRequestPointerLock && !document.body.msRequestPointerLock) {
      return -1;
    }
    _0x1f95cb = _0x166450(_0x1f95cb);
    if (!_0x1f95cb) {
      return -4;
    }
    _0x9e47ba(_0x1f95cb, _0x248aa5, _0x57be96, _0x4702ee, 20, "pointerlockchange", _0x4eaf8a);
    _0x9e47ba(_0x1f95cb, _0x248aa5, _0x57be96, _0x4702ee, 20, "mozpointerlockchange", _0x4eaf8a);
    _0x9e47ba(_0x1f95cb, _0x248aa5, _0x57be96, _0x4702ee, 20, "webkitpointerlockchange", _0x4eaf8a);
    _0x9e47ba(_0x1f95cb, _0x248aa5, _0x57be96, _0x4702ee, 20, "mspointerlockchange", _0x4eaf8a);
    return 0;
  }
  function _0x14b4d4(_0x295ab9, _0x586317, _0x52578f, _0x38b486, _0x26fca6, _0x4c04eb, _0xc34fa8) {
    if (!_0x1b90f8.touchEvent) {
      _0x1b90f8.touchEvent = _0x4fa9c0(1684);
    }
    _0x295ab9 = _0x166450(_0x295ab9);
    var _0x3a51bf = function (_0x49bc8b) {
      var _0x19f193;
      var _0x33b57d = {};
      var _0x5967d2 = _0x49bc8b.touches;
      for (var _0x22b555 = 0; _0x22b555 < _0x5967d2.length; ++_0x22b555) {
        _0x19f193 = _0x5967d2[_0x22b555];
        _0x19f193.isChanged = _0x19f193.onTarget = 0;
        _0x33b57d[_0x19f193.identifier] = _0x19f193;
      }
      for (var _0x22b555 = 0; _0x22b555 < _0x49bc8b.changedTouches.length; ++_0x22b555) {
        _0x19f193 = _0x49bc8b.changedTouches[_0x22b555];
        _0x19f193.isChanged = 1;
        _0x33b57d[_0x19f193.identifier] = _0x19f193;
      }
      for (var _0x22b555 = 0; _0x22b555 < _0x49bc8b.targetTouches.length; ++_0x22b555) {
        _0x33b57d[_0x49bc8b.targetTouches[_0x22b555].identifier].onTarget = 1;
      }
      var _0x33edef = _0x1b90f8.touchEvent;
      var _0x504bc1 = _0x33edef >> 2;
      _0x237516[_0x504bc1 + 1] = _0x49bc8b.ctrlKey;
      _0x237516[_0x504bc1 + 2] = _0x49bc8b.shiftKey;
      _0x237516[_0x504bc1 + 3] = _0x49bc8b.altKey;
      _0x237516[_0x504bc1 + 4] = _0x49bc8b.metaKey;
      _0x504bc1 += 5;
      var _0x5e8cfb = _0xfcd8c6(_0x295ab9);
      var _0x36042f = 0;
      for (var _0x22b555 in _0x33b57d) {
        var _0x19f193 = _0x33b57d[_0x22b555];
        _0x237516[_0x504bc1 + 0] = _0x19f193.identifier;
        _0x237516[_0x504bc1 + 1] = _0x19f193.screenX;
        _0x237516[_0x504bc1 + 2] = _0x19f193.screenY;
        _0x237516[_0x504bc1 + 3] = _0x19f193.clientX;
        _0x237516[_0x504bc1 + 4] = _0x19f193.clientY;
        _0x237516[_0x504bc1 + 5] = _0x19f193.pageX;
        _0x237516[_0x504bc1 + 6] = _0x19f193.pageY;
        _0x237516[_0x504bc1 + 7] = _0x19f193.isChanged;
        _0x237516[_0x504bc1 + 8] = _0x19f193.onTarget;
        _0x237516[_0x504bc1 + 9] = _0x19f193.clientX - _0x5e8cfb.left;
        _0x237516[_0x504bc1 + 10] = _0x19f193.clientY - _0x5e8cfb.top;
        _0x504bc1 += 13;
        if (++_0x36042f > 31) {
          break;
        }
      }
      _0x237516[_0x33edef >> 2] = _0x36042f;
      if (function (_0x19eceb, _0xf11365, _0x3d8d35) {
        return _0x3b09d7.apply(null, [_0x38b486, _0x19eceb, _0xf11365, _0x3d8d35]);
      }(_0x26fca6, _0x33edef, _0x586317)) {
        _0x49bc8b.preventDefault();
      }
    };
    var _0x4f7cd5 = {
      target: _0x295ab9,
      allowsDeferredCalls: _0x4c04eb == "touchstart" || _0x4c04eb == "touchend",
      eventTypeString: _0x4c04eb,
      callbackfunc: _0x38b486,
      handlerFunc: _0x3a51bf,
      useCapture: _0x52578f
    };
    _0x1b90f8.registerOrRemoveHandler(_0x4f7cd5);
  }
  function _0xda2a2a(_0x20455e, _0x15b995, _0x302954, _0x29dba4, _0x5f3090) {
    _0x14b4d4(_0x20455e, _0x15b995, _0x302954, _0x29dba4, 25, "touchcancel", _0x5f3090);
    return 0;
  }
  function _0xd2cdd9(_0x613338, _0x29022e, _0x2bb163, _0xb4d9f, _0x14b6ca) {
    _0x14b4d4(_0x613338, _0x29022e, _0x2bb163, _0xb4d9f, 23, "touchend", _0x14b6ca);
    return 0;
  }
  function _0x254a0d(_0x314934, _0x143878, _0x13aa4d, _0xa8b9d9, _0x4e441c) {
    _0x14b4d4(_0x314934, _0x143878, _0x13aa4d, _0xa8b9d9, 24, "touchmove", _0x4e441c);
    return 0;
  }
  function _0x379ac4(_0x577dd1, _0x5c0591, _0x45c77d, _0x3058b1, _0x33c151) {
    _0x14b4d4(_0x577dd1, _0x5c0591, _0x45c77d, _0x3058b1, 22, "touchstart", _0x33c151);
    return 0;
  }
  function _0x5dc0d8(_0x5af842, _0x75c487, _0x2b91ec, _0x31157e, _0x1081df, _0x9a5b53, _0xd7d876) {
    if (!_0x1b90f8.wheelEvent) {
      _0x1b90f8.wheelEvent = _0x4fa9c0(96);
    }
    var _0x56c69c = function (_0x51ba89) {
      var _0x41e368 = _0x51ba89 || event;
      var _0x2f4a78 = _0x1b90f8.wheelEvent;
      _0x289a38(_0x2f4a78, _0x41e368, _0x5af842);
      _0x4aca1d[_0x2f4a78 + 64 >> 3] = _0x41e368.deltaX;
      _0x4aca1d[_0x2f4a78 + 72 >> 3] = _0x41e368.deltaY;
      _0x4aca1d[_0x2f4a78 + 80 >> 3] = _0x41e368.deltaZ;
      _0x237516[_0x2f4a78 + 88 >> 2] = _0x41e368.deltaMode;
      if (function (_0x29b1e2, _0x28d223, _0x5ef2a9) {
        return _0x3b09d7.apply(null, [_0x31157e, _0x29b1e2, _0x28d223, _0x5ef2a9]);
      }(_0x1081df, _0x2f4a78, _0x75c487)) {
        _0x41e368.preventDefault();
      }
    };
    var _0x588226 = {
      target: _0x5af842,
      allowsDeferredCalls: true,
      eventTypeString: _0x9a5b53,
      callbackfunc: _0x31157e,
      handlerFunc: _0x56c69c,
      useCapture: _0x2b91ec
    };
    _0x1b90f8.registerOrRemoveHandler(_0x588226);
  }
  function _0x49b572(_0x29b184, _0x478d8c, _0x5724f6, _0xfb01bd, _0x503471) {
    _0x29b184 = _0x166450(_0x29b184);
    if (typeof _0x29b184.onwheel !== "undefined") {
      _0x5dc0d8(_0x29b184, _0x478d8c, _0x5724f6, _0xfb01bd, 9, "wheel", _0x503471);
      return 0;
    } else {
      return -1;
    }
  }
  function _0x8f10e4(_0x48f6a0) {
    var _0x1418c1 = _0x390c6f();
    while (_0x390c6f() - _0x1418c1 < _0x48f6a0) {}
  }
  function _0x346100(_0x4f3cac) {
    var _0x4fc96f = _0x4f3cac.getExtension("ANGLE_instanced_arrays");
    if (_0x4fc96f) {
      _0x4f3cac.vertexAttribDivisor = function (_0xd5a509, _0x43940a) {
        _0x4fc96f.vertexAttribDivisorANGLE(_0xd5a509, _0x43940a);
      };
      _0x4f3cac.drawArraysInstanced = function (_0x4ffcad, _0x15646b, _0x3bef32, _0x1f424b) {
        _0x4fc96f.drawArraysInstancedANGLE(_0x4ffcad, _0x15646b, _0x3bef32, _0x1f424b);
      };
      _0x4f3cac.drawElementsInstanced = function (_0xd230a3, _0x186b7f, _0x4b9c25, _0x5ca935, _0x42ce2c) {
        _0x4fc96f.drawElementsInstancedANGLE(_0xd230a3, _0x186b7f, _0x4b9c25, _0x5ca935, _0x42ce2c);
      };
      return 1;
    }
  }
  function _0x266be7(_0x51ae10) {
    var _0x50f73f = _0x51ae10.getExtension("OES_vertex_array_object");
    if (_0x50f73f) {
      _0x51ae10.createVertexArray = function () {
        return _0x50f73f.createVertexArrayOES();
      };
      _0x51ae10.deleteVertexArray = function (_0x4b5f20) {
        _0x50f73f.deleteVertexArrayOES(_0x4b5f20);
      };
      _0x51ae10.bindVertexArray = function (_0x445af6) {
        _0x50f73f.bindVertexArrayOES(_0x445af6);
      };
      _0x51ae10.isVertexArray = function (_0x5a0a18) {
        return _0x50f73f.isVertexArrayOES(_0x5a0a18);
      };
      return 1;
    }
  }
  function _0x1ae530(_0x392648) {
    var _0x225686 = _0x392648.getExtension("WEBGL_draw_buffers");
    if (_0x225686) {
      _0x392648.drawBuffers = function (_0x2eb0a0, _0x131217) {
        _0x225686.drawBuffersWEBGL(_0x2eb0a0, _0x131217);
      };
      return 1;
    }
  }
  function _0x40d869(_0x2f77f3) {
    return !!(_0x2f77f3.dibvbi = _0x2f77f3.getExtension("WEBGL_draw_instanced_base_vertex_base_instance"));
  }
  function _0x325b29(_0x3a87af) {
    return !!(_0x3a87af.mdibvbi = _0x3a87af.getExtension("WEBGL_multi_draw_instanced_base_vertex_base_instance"));
  }
  function _0x17c168(_0x443c4d) {
    return !!(_0x443c4d.multiDrawWebgl = _0x443c4d.getExtension("WEBGL_multi_draw"));
  }
  var _0x1e1029 = {
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
    recordError: function _0x59761e(_0x75e24c) {
      if (!_0x1e1029.lastError) {
        _0x1e1029.lastError = _0x75e24c;
      }
    },
    getNewId: function (_0x4a9742) {
      var _0x3a4f71 = _0x1e1029.counter++;
      for (var _0x3d8478 = _0x4a9742.length; _0x3d8478 < _0x3a4f71; _0x3d8478++) {
        _0x4a9742[_0x3d8478] = null;
      }
      return _0x3a4f71;
    },
    MAX_TEMP_BUFFER_SIZE: 2097152,
    numTempVertexBuffersPerSize: 64,
    log2ceilLookup: function (_0x28fd26) {
      return 32 - Math.clz32(_0x28fd26 === 0 ? 0 : _0x28fd26 - 1);
    },
    generateTempBuffers: function (_0x33101d, _0x59b1cb) {
      var _0x1602b1 = _0x1e1029.log2ceilLookup(_0x1e1029.MAX_TEMP_BUFFER_SIZE);
      _0x59b1cb.tempVertexBufferCounters1 = [];
      _0x59b1cb.tempVertexBufferCounters2 = [];
      _0x59b1cb.tempVertexBufferCounters1.length = _0x59b1cb.tempVertexBufferCounters2.length = _0x1602b1 + 1;
      _0x59b1cb.tempVertexBuffers1 = [];
      _0x59b1cb.tempVertexBuffers2 = [];
      _0x59b1cb.tempVertexBuffers1.length = _0x59b1cb.tempVertexBuffers2.length = _0x1602b1 + 1;
      _0x59b1cb.tempIndexBuffers = [];
      _0x59b1cb.tempIndexBuffers.length = _0x1602b1 + 1;
      for (var _0x310864 = 0; _0x310864 <= _0x1602b1; ++_0x310864) {
        _0x59b1cb.tempIndexBuffers[_0x310864] = null;
        _0x59b1cb.tempVertexBufferCounters1[_0x310864] = _0x59b1cb.tempVertexBufferCounters2[_0x310864] = 0;
        var _0x4bc997 = _0x1e1029.numTempVertexBuffersPerSize;
        _0x59b1cb.tempVertexBuffers1[_0x310864] = [];
        _0x59b1cb.tempVertexBuffers2[_0x310864] = [];
        var _0x50bbda = _0x59b1cb.tempVertexBuffers1[_0x310864];
        var _0x25ebf5 = _0x59b1cb.tempVertexBuffers2[_0x310864];
        _0x50bbda.length = _0x25ebf5.length = _0x4bc997;
        for (var _0x16a89f = 0; _0x16a89f < _0x4bc997; ++_0x16a89f) {
          _0x50bbda[_0x16a89f] = _0x25ebf5[_0x16a89f] = null;
        }
      }
      if (_0x33101d) {
        _0x59b1cb.tempQuadIndexBuffer = _0x3f9476.createBuffer();
        _0x59b1cb.GLctx.bindBuffer(34963, _0x59b1cb.tempQuadIndexBuffer);
        var _0x512567 = _0x1e1029.MAX_TEMP_BUFFER_SIZE >> 1;
        var _0xfed85 = new Uint16Array(_0x512567);
        var _0x310864 = 0;
        var _0x2c2977 = 0;
        while (1) {
          _0xfed85[_0x310864++] = _0x2c2977;
          if (_0x310864 >= _0x512567) {
            break;
          }
          _0xfed85[_0x310864++] = _0x2c2977 + 1;
          if (_0x310864 >= _0x512567) {
            break;
          }
          _0xfed85[_0x310864++] = _0x2c2977 + 2;
          if (_0x310864 >= _0x512567) {
            break;
          }
          _0xfed85[_0x310864++] = _0x2c2977;
          if (_0x310864 >= _0x512567) {
            break;
          }
          _0xfed85[_0x310864++] = _0x2c2977 + 2;
          if (_0x310864 >= _0x512567) {
            break;
          }
          _0xfed85[_0x310864++] = _0x2c2977 + 3;
          if (_0x310864 >= _0x512567) {
            break;
          }
          _0x2c2977 += 4;
        }
        _0x59b1cb.GLctx.bufferData(34963, _0xfed85, 35044);
        _0x59b1cb.GLctx.bindBuffer(34963, null);
      }
    },
    getTempVertexBuffer: function _0x308883(_0x3360ce) {
      var _0x5870d6 = _0x1e1029.log2ceilLookup(_0x3360ce);
      var _0x2c7571 = _0x1e1029.currentContext.tempVertexBuffers1[_0x5870d6];
      var _0x578ddb = _0x1e1029.currentContext.tempVertexBufferCounters1[_0x5870d6];
      _0x1e1029.currentContext.tempVertexBufferCounters1[_0x5870d6] = _0x1e1029.currentContext.tempVertexBufferCounters1[_0x5870d6] + 1 & _0x1e1029.numTempVertexBuffersPerSize - 1;
      var _0x4e5947 = _0x2c7571[_0x578ddb];
      if (_0x4e5947) {
        return _0x4e5947;
      }
      var _0x59da58 = _0x3f9476.getParameter(34964);
      _0x2c7571[_0x578ddb] = _0x3f9476.createBuffer();
      _0x3f9476.bindBuffer(34962, _0x2c7571[_0x578ddb]);
      _0x3f9476.bufferData(34962, 1 << _0x5870d6, 35048);
      _0x3f9476.bindBuffer(34962, _0x59da58);
      return _0x2c7571[_0x578ddb];
    },
    getTempIndexBuffer: function _0x8fba17(_0x3244b9) {
      var _0x28e4ad = _0x1e1029.log2ceilLookup(_0x3244b9);
      var _0x248e72 = _0x1e1029.currentContext.tempIndexBuffers[_0x28e4ad];
      if (_0x248e72) {
        return _0x248e72;
      }
      var _0x1b0d1c = _0x3f9476.getParameter(34965);
      _0x1e1029.currentContext.tempIndexBuffers[_0x28e4ad] = _0x3f9476.createBuffer();
      _0x3f9476.bindBuffer(34963, _0x1e1029.currentContext.tempIndexBuffers[_0x28e4ad]);
      _0x3f9476.bufferData(34963, 1 << _0x28e4ad, 35048);
      _0x3f9476.bindBuffer(34963, _0x1b0d1c);
      return _0x1e1029.currentContext.tempIndexBuffers[_0x28e4ad];
    },
    newRenderingFrameStarted: function _0x194450() {
      if (!_0x1e1029.currentContext) {
        return;
      }
      var _0x30900e = _0x1e1029.currentContext.tempVertexBuffers1;
      _0x1e1029.currentContext.tempVertexBuffers1 = _0x1e1029.currentContext.tempVertexBuffers2;
      _0x1e1029.currentContext.tempVertexBuffers2 = _0x30900e;
      _0x30900e = _0x1e1029.currentContext.tempVertexBufferCounters1;
      _0x1e1029.currentContext.tempVertexBufferCounters1 = _0x1e1029.currentContext.tempVertexBufferCounters2;
      _0x1e1029.currentContext.tempVertexBufferCounters2 = _0x30900e;
      var _0xbaf495 = _0x1e1029.log2ceilLookup(_0x1e1029.MAX_TEMP_BUFFER_SIZE);
      for (var _0x34fe6f = 0; _0x34fe6f <= _0xbaf495; ++_0x34fe6f) {
        _0x1e1029.currentContext.tempVertexBufferCounters1[_0x34fe6f] = 0;
      }
    },
    getSource: function (_0x53bfac, _0x58f6f3, _0xa56509, _0x2589dc) {
      var _0xa608a2 = "";
      for (var _0xa01933 = 0; _0xa01933 < _0x58f6f3; ++_0xa01933) {
        var _0x50a349 = _0x2589dc ? _0x237516[_0x2589dc + _0xa01933 * 4 >> 2] : -1;
        _0xa608a2 += _0x2aa540(_0x237516[_0xa56509 + _0xa01933 * 4 >> 2], _0x50a349 < 0 ? undefined : _0x50a349);
      }
      return _0xa608a2;
    },
    calcBufLength: function _0x3c779a(_0x4224d6, _0x849af0, _0x53351c, _0x1b11d5) {
      if (_0x53351c > 0) {
        return _0x1b11d5 * _0x53351c;
      }
      var _0x55dd12 = _0x1e1029.byteSizeByType[_0x849af0 - _0x1e1029.byteSizeByTypeRoot];
      return _0x4224d6 * _0x55dd12 * _0x1b11d5;
    },
    usedTempBuffers: [],
    preDrawHandleClientVertexAttribBindings: function _0x29cb9f(_0x216fc7) {
      _0x1e1029.resetBufferBinding = false;
      for (var _0x5c4776 = 0; _0x5c4776 < _0x1e1029.currentContext.maxVertexAttribs; ++_0x5c4776) {
        var _0x5643d3 = _0x1e1029.currentContext.clientBuffers[_0x5c4776];
        if (!_0x5643d3.clientside || !_0x5643d3.enabled) {
          continue;
        }
        _0x1e1029.resetBufferBinding = true;
        var _0x25600f = _0x1e1029.calcBufLength(_0x5643d3.size, _0x5643d3.type, _0x5643d3.stride, _0x216fc7);
        var _0x21370c = _0x1e1029.getTempVertexBuffer(_0x25600f);
        _0x3f9476.bindBuffer(34962, _0x21370c);
        _0x3f9476.bufferSubData(34962, 0, _0x312996.subarray(_0x5643d3.ptr, _0x5643d3.ptr + _0x25600f));
        _0x5643d3.vertexAttribPointerAdaptor.call(_0x3f9476, _0x5c4776, _0x5643d3.size, _0x5643d3.type, _0x5643d3.normalized, _0x5643d3.stride, 0);
      }
    },
    postDrawHandleClientVertexAttribBindings: function _0x65ba2b() {
      if (_0x1e1029.resetBufferBinding) {
        _0x3f9476.bindBuffer(34962, _0x1e1029.buffers[_0x3f9476.currentArrayBufferBinding]);
      }
    },
    createContext: function (_0x4c2dee, _0x294b6a) {
      if (!_0x4c2dee.getContextSafariWebGL2Fixed) {
        _0x4c2dee.getContextSafariWebGL2Fixed = _0x4c2dee.getContext;
        _0x4c2dee.getContext = function (_0x2851d3, _0x5b06b1) {
          var _0x1b57ad = _0x4c2dee.getContextSafariWebGL2Fixed(_0x2851d3, _0x5b06b1);
          if (_0x2851d3 == "webgl" == _0x1b57ad instanceof WebGLRenderingContext) {
            return _0x1b57ad;
          } else {
            return null;
          }
        };
      }
      var _0x37ad68 = _0x294b6a.majorVersion > 1 ? _0x4c2dee.getContext("webgl2", _0x294b6a) : _0x4c2dee.getContext("webgl", _0x294b6a);
      if (!_0x37ad68) {
        return 0;
      }
      var _0xcc7817 = _0x1e1029.registerContext(_0x37ad68, _0x294b6a);
      return _0xcc7817;
    },
    registerContext: function (_0x2a04fe, _0x4b93e3) {
      var _0x1994e6 = _0x1e1029.getNewId(_0x1e1029.contexts);
      var _0xd96f63 = {
        handle: _0x1994e6,
        attributes: _0x4b93e3,
        version: _0x4b93e3.majorVersion,
        GLctx: _0x2a04fe
      };
      if (_0x2a04fe.canvas) {
        _0x2a04fe.canvas.GLctxObject = _0xd96f63;
      }
      _0x1e1029.contexts[_0x1994e6] = _0xd96f63;
      if (typeof _0x4b93e3.enableExtensionsByDefault === "undefined" || _0x4b93e3.enableExtensionsByDefault) {
        _0x1e1029.initExtensions(_0xd96f63);
      }
      _0xd96f63.maxVertexAttribs = _0xd96f63.GLctx.getParameter(34921);
      _0xd96f63.clientBuffers = [];
      for (var _0x32ba05 = 0; _0x32ba05 < _0xd96f63.maxVertexAttribs; _0x32ba05++) {
        _0xd96f63.clientBuffers[_0x32ba05] = {
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
      _0x1e1029.generateTempBuffers(false, _0xd96f63);
      return _0x1994e6;
    },
    makeContextCurrent: function (_0x4e8169) {
      _0x1e1029.currentContext = _0x1e1029.contexts[_0x4e8169];
      _0x2c3fe3.ctx = _0x3f9476 = _0x1e1029.currentContext && _0x1e1029.currentContext.GLctx;
      return !_0x4e8169 || !!_0x3f9476;
    },
    getContext: function (_0x3f2ae0) {
      return _0x1e1029.contexts[_0x3f2ae0];
    },
    deleteContext: function (_0x4969da) {
      if (_0x1e1029.currentContext === _0x1e1029.contexts[_0x4969da]) {
        _0x1e1029.currentContext = null;
      }
      if (typeof _0x1b90f8 === "object") {
        _0x1b90f8.removeAllHandlersOnTarget(_0x1e1029.contexts[_0x4969da].GLctx.canvas);
      }
      if (_0x1e1029.contexts[_0x4969da] && _0x1e1029.contexts[_0x4969da].GLctx.canvas) {
        _0x1e1029.contexts[_0x4969da].GLctx.canvas.GLctxObject = undefined;
      }
      _0x1e1029.contexts[_0x4969da] = null;
    },
    initExtensions: function (_0x239df6) {
      if (!_0x239df6) {
        _0x239df6 = _0x1e1029.currentContext;
      }
      if (_0x239df6.initExtensionsDone) {
        return;
      }
      _0x239df6.initExtensionsDone = true;
      var _0x4cec2a = _0x239df6.GLctx;
      _0x346100(_0x4cec2a);
      _0x266be7(_0x4cec2a);
      _0x1ae530(_0x4cec2a);
      _0x40d869(_0x4cec2a);
      _0x325b29(_0x4cec2a);
      if (_0x239df6.version >= 2) {
        _0x4cec2a.disjointTimerQueryExt = _0x4cec2a.getExtension("EXT_disjoint_timer_query_webgl2");
      }
      if (_0x239df6.version < 2 || !_0x4cec2a.disjointTimerQueryExt) {
        _0x4cec2a.disjointTimerQueryExt = _0x4cec2a.getExtension("EXT_disjoint_timer_query");
      }
      _0x17c168(_0x4cec2a);
      var _0x2e23e1 = _0x4cec2a.getSupportedExtensions() || [];
      _0x2e23e1.forEach(function (_0x27a618) {
        if (!_0x27a618.includes("lose_context") && !_0x27a618.includes("debug")) {
          _0x4cec2a.getExtension(_0x27a618);
        }
      });
    }
  };
  var _0x547104 = ["default", "low-power", "high-performance"];
  function _0x106807(_0x1742d1, _0x1760dc) {
    var _0x3c1ff4 = _0x1760dc >> 2;
    var _0x332302 = _0x237516[_0x3c1ff4 + 6];
    var _0x4ad89b = {
      alpha: !!_0x237516[_0x3c1ff4 + 0],
      depth: !!_0x237516[_0x3c1ff4 + 1],
      stencil: !!_0x237516[_0x3c1ff4 + 2],
      antialias: !!_0x237516[_0x3c1ff4 + 3],
      premultipliedAlpha: !!_0x237516[_0x3c1ff4 + 4],
      preserveDrawingBuffer: !!_0x237516[_0x3c1ff4 + 5],
      powerPreference: _0x547104[_0x332302],
      failIfMajorPerformanceCaveat: !!_0x237516[_0x3c1ff4 + 7],
      majorVersion: _0x237516[_0x3c1ff4 + 8],
      minorVersion: _0x237516[_0x3c1ff4 + 9],
      enableExtensionsByDefault: _0x237516[_0x3c1ff4 + 10],
      explicitSwapControl: _0x237516[_0x3c1ff4 + 11],
      proxyContextToMainThread: _0x237516[_0x3c1ff4 + 12],
      renderViaOffscreenBackBuffer: _0x237516[_0x3c1ff4 + 13]
    };
    var _0x238cf7 = _0x559bb4(_0x1742d1);
    if (!_0x238cf7) {
      return 0;
    }
    if (_0x4ad89b.explicitSwapControl) {
      return 0;
    }
    var _0x1376b0 = _0x1e1029.createContext(_0x238cf7, _0x4ad89b);
    return _0x1376b0;
  }
  function _0x229686(_0x18251a, _0x4f7caa) {
    return _0x106807(_0x18251a, _0x4f7caa);
  }
  function _0x116b19() {
    if (_0x1e1029.currentContext) {
      return _0x1e1029.currentContext.handle;
    } else {
      return 0;
    }
  }
  function _0x1143d8() {
    return _0x116b19();
  }
  _0x2c3fe3._emscripten_webgl_get_current_context = _0x1143d8;
  function _0x768e43(_0x3177af) {
    var _0x7e06c2 = _0x1e1029.makeContextCurrent(_0x3177af);
    if (_0x7e06c2) {
      return 0;
    } else {
      return -5;
    }
  }
  _0x2c3fe3._emscripten_webgl_make_context_current = _0x768e43;
  function _0x38a314(_0x5e046b) {
    if (_0x1e1029.currentContext == _0x5e046b) {
      _0x1e1029.currentContext = 0;
    }
    _0x1e1029.deleteContext(_0x5e046b);
  }
  function _0x37012e(_0x520ebb, _0x41b53f) {
    var _0xa0d7eb = _0x1e1029.getContext(_0x520ebb);
    var _0x17040f = _0x2aa540(_0x41b53f);
    if (_0x17040f.startsWith("GL_")) {
      _0x17040f = _0x17040f.substr(3);
    }
    if (_0x17040f == "ANGLE_instanced_arrays") {
      _0x346100(_0x3f9476);
    }
    if (_0x17040f == "OES_vertex_array_object") {
      _0x266be7(_0x3f9476);
    }
    if (_0x17040f == "WEBGL_draw_buffers") {
      _0x1ae530(_0x3f9476);
    }
    if (_0x17040f == "WEBGL_draw_instanced_base_vertex_base_instance") {
      _0x40d869(_0x3f9476);
    }
    if (_0x17040f == "WEBGL_multi_draw_instanced_base_vertex_base_instance") {
      _0x325b29(_0x3f9476);
    }
    if (_0x17040f == "WEBGL_multi_draw") {
      _0x17c168(_0x3f9476);
    }
    var _0x1e829f = _0xa0d7eb.GLctx.getExtension(_0x17040f);
    return !!_0x1e829f;
  }
  function _0x5aebc3(_0x43f0cb) {
    var _0x52b629 = _0x43f0cb >> 2;
    for (var _0x3ee638 = 0; _0x3ee638 < 14; ++_0x3ee638) {
      _0x237516[_0x52b629 + _0x3ee638] = 0;
    }
    _0x237516[_0x52b629 + 0] = _0x237516[_0x52b629 + 1] = _0x237516[_0x52b629 + 3] = _0x237516[_0x52b629 + 4] = _0x237516[_0x52b629 + 8] = _0x237516[_0x52b629 + 10] = 1;
  }
  var _0x2d1ed9 = {};
  function _0x4b1c52() {
    return _0x479232 || "./this.program";
  }
  function _0x441550() {
    if (!_0x441550.strings) {
      var _0x2f4e33 = (typeof navigator === "object" && navigator.languages && navigator.languages[0] || "C").replace("-", "_") + ".UTF-8";
      var _0x3a81af = {
        USER: "web_user",
        LOGNAME: "web_user",
        PATH: "/",
        PWD: "/",
        HOME: "/home/web_user",
        LANG: _0x2f4e33,
        _: _0x4b1c52()
      };
      for (var _0x330e5f in _0x2d1ed9) {
        _0x3a81af[_0x330e5f] = _0x2d1ed9[_0x330e5f];
      }
      var _0x2d43a5 = [];
      for (var _0x330e5f in _0x3a81af) {
        _0x2d43a5.push(_0x330e5f + "=" + _0x3a81af[_0x330e5f]);
      }
      _0x441550.strings = _0x2d43a5;
    }
    return _0x441550.strings;
  }
  function _0x3c5625(_0x7f924e, _0x4cacc9) {
    try {
      var _0x14ea15 = 0;
      _0x441550().forEach(function (_0x3c6f55, _0x1399d0) {
        var _0x3e89ba = _0x4cacc9 + _0x14ea15;
        _0x237516[_0x7f924e + _0x1399d0 * 4 >> 2] = _0x3e89ba;
        _0x2a90f2(_0x3c6f55, _0x3e89ba);
        _0x14ea15 += _0x3c6f55.length + 1;
      });
      return 0;
    } catch (_0x3ef98f) {
      if (typeof _0x3b09e1 === "undefined" || !(_0x3ef98f instanceof _0x3b09e1.ErrnoError)) {
        _0xe8ab44(_0x3ef98f);
      }
      return _0x3ef98f.errno;
    }
  }
  function _0x2c7245(_0x21f40d, _0x357ae5) {
    try {
      var _0x8735cf = _0x441550();
      _0x237516[_0x21f40d >> 2] = _0x8735cf.length;
      var _0x11a0db = 0;
      _0x8735cf.forEach(function (_0x3f9e1a) {
        _0x11a0db += _0x3f9e1a.length + 1;
      });
      _0x237516[_0x357ae5 >> 2] = _0x11a0db;
      return 0;
    } catch (_0x57a423) {
      if (typeof _0x3b09e1 === "undefined" || !(_0x57a423 instanceof _0x3b09e1.ErrnoError)) {
        _0xe8ab44(_0x57a423);
      }
      return _0x57a423.errno;
    }
  }
  function _0x54433d(_0x17c298) {
    try {
      var _0x17a724 = _0x28b4a7.getStreamFromFD(_0x17c298);
      _0x3b09e1.close(_0x17a724);
      return 0;
    } catch (_0x13c83c) {
      if (typeof _0x3b09e1 === "undefined" || !(_0x13c83c instanceof _0x3b09e1.ErrnoError)) {
        _0xe8ab44(_0x13c83c);
      }
      return _0x13c83c.errno;
    }
  }
  function _0x199bff(_0x1a7260, _0x3b38bb) {
    try {
      var _0x2039b6 = _0x28b4a7.getStreamFromFD(_0x1a7260);
      var _0x1edd68 = _0x2039b6.tty ? 2 : _0x3b09e1.isDir(_0x2039b6.mode) ? 3 : _0x3b09e1.isLink(_0x2039b6.mode) ? 7 : 4;
      _0x1cc374[_0x3b38bb >> 0] = _0x1edd68;
      return 0;
    } catch (_0x35736f) {
      if (typeof _0x3b09e1 === "undefined" || !(_0x35736f instanceof _0x3b09e1.ErrnoError)) {
        _0xe8ab44(_0x35736f);
      }
      return _0x35736f.errno;
    }
  }
  function _0x501d9d(_0x1f860f, _0x20bc12, _0x48c14a, _0x1e7266) {
    try {
      var _0x141e48 = _0x28b4a7.getStreamFromFD(_0x1f860f);
      var _0x410381 = _0x28b4a7.doReadv(_0x141e48, _0x20bc12, _0x48c14a);
      _0x237516[_0x1e7266 >> 2] = _0x410381;
      return 0;
    } catch (_0x58ec89) {
      if (typeof _0x3b09e1 === "undefined" || !(_0x58ec89 instanceof _0x3b09e1.ErrnoError)) {
        _0xe8ab44(_0x58ec89);
      }
      return _0x58ec89.errno;
    }
  }
  function _0x5ae9d3(_0x1b388e, _0x31bc6a, _0x2042da, _0x40ae9a, _0x38fafa) {
    try {
      var _0x29f3e5 = _0x28b4a7.getStreamFromFD(_0x1b388e);
      var _0xf20165 = 4294967296;
      var _0x589ea5 = _0x2042da * _0xf20165 + (_0x31bc6a >>> 0);
      var _0x272239 = 9007199254740992;
      if (_0x589ea5 <= -_0x272239 || _0x589ea5 >= _0x272239) {
        return -61;
      }
      _0x3b09e1.llseek(_0x29f3e5, _0x589ea5, _0x40ae9a);
      _0x34c09a = [_0x29f3e5.position >>> 0, (_0x407d2d = _0x29f3e5.position, +Math.abs(_0x407d2d) >= 1 ? _0x407d2d > 0 ? (Math.min(+Math.floor(_0x407d2d / 4294967296), 4294967295) | 0) >>> 0 : ~~+Math.ceil((_0x407d2d - +(~~_0x407d2d >>> 0)) / 4294967296) >>> 0 : 0)];
      _0x237516[_0x38fafa >> 2] = _0x34c09a[0];
      _0x237516[_0x38fafa + 4 >> 2] = _0x34c09a[1];
      if (_0x29f3e5.getdents && _0x589ea5 === 0 && _0x40ae9a === 0) {
        _0x29f3e5.getdents = null;
      }
      return 0;
    } catch (_0x553a09) {
      if (typeof _0x3b09e1 === "undefined" || !(_0x553a09 instanceof _0x3b09e1.ErrnoError)) {
        _0xe8ab44(_0x553a09);
      }
      return _0x553a09.errno;
    }
  }
  function _0x5a0a58(_0x34f4ad, _0x555203, _0x29440d, _0x18c242) {
    try {
      var _0x4e3084 = _0x28b4a7.getStreamFromFD(_0x34f4ad);
      var _0x591ab = _0x28b4a7.doWritev(_0x4e3084, _0x555203, _0x29440d);
      _0x237516[_0x18c242 >> 2] = _0x591ab;
      return 0;
    } catch (_0x81f64c) {
      if (typeof _0x3b09e1 === "undefined" || !(_0x81f64c instanceof _0x3b09e1.ErrnoError)) {
        _0xe8ab44(_0x81f64c);
      }
      return _0x81f64c.errno;
    }
  }
  function _0x40f6d6(_0x1a8c83, _0xc30c9b) {
    return 0;
  }
  function _0x3b1fde() {
    return _0xa00b0b();
  }
  function _0x1b5e7e(_0x26268c, _0xd5d8f0, _0x2b7609, _0x26d0cc) {
    var _0x4c325e = 0;
    var _0x4455a3 = 0;
    var _0x2316e7 = 0;
    var _0x397619 = 0;
    var _0x2851bf = 0;
    var _0x2f4952 = 0;
    var _0x1cba68;
    function _0x2b4e5f(_0x322c4a, _0x5a3c71, _0x41c608, _0x5407ff, _0x49c0a8, _0x3e16cf) {
      var _0x22f453;
      var _0x1ddf10;
      var _0x53b92a;
      var _0x51f371;
      _0x1ddf10 = _0x322c4a === 10 ? 28 : 16;
      _0x49c0a8 = _0x322c4a === 10 ? _0xd08ac8(_0x49c0a8) : _0x37bd70(_0x49c0a8);
      _0x22f453 = _0x4fa9c0(_0x1ddf10);
      _0x51f371 = _0x486ba9(_0x22f453, _0x322c4a, _0x49c0a8, _0x3e16cf);
      _0x4a00f0(!_0x51f371);
      _0x53b92a = _0x4fa9c0(32);
      _0x237516[_0x53b92a + 4 >> 2] = _0x322c4a;
      _0x237516[_0x53b92a + 8 >> 2] = _0x5a3c71;
      _0x237516[_0x53b92a + 12 >> 2] = _0x41c608;
      _0x237516[_0x53b92a + 24 >> 2] = _0x5407ff;
      _0x237516[_0x53b92a + 20 >> 2] = _0x22f453;
      if (_0x322c4a === 10) {
        _0x237516[_0x53b92a + 16 >> 2] = 28;
      } else {
        _0x237516[_0x53b92a + 16 >> 2] = 16;
      }
      _0x237516[_0x53b92a + 28 >> 2] = 0;
      return _0x53b92a;
    }
    if (_0x2b7609) {
      _0x2316e7 = _0x237516[_0x2b7609 >> 2];
      _0x397619 = _0x237516[_0x2b7609 + 4 >> 2];
      _0x2851bf = _0x237516[_0x2b7609 + 8 >> 2];
      _0x2f4952 = _0x237516[_0x2b7609 + 12 >> 2];
    }
    if (_0x2851bf && !_0x2f4952) {
      _0x2f4952 = _0x2851bf === 2 ? 17 : 6;
    }
    if (!_0x2851bf && _0x2f4952) {
      _0x2851bf = _0x2f4952 === 17 ? 2 : 1;
    }
    if (_0x2f4952 === 0) {
      _0x2f4952 = 6;
    }
    if (_0x2851bf === 0) {
      _0x2851bf = 1;
    }
    if (!_0x26268c && !_0xd5d8f0) {
      return -2;
    }
    if (_0x2316e7 & ~1087) {
      return -1;
    }
    if (_0x2b7609 !== 0 && _0x237516[_0x2b7609 >> 2] & 2 && !_0x26268c) {
      return -1;
    }
    if (_0x2316e7 & 32) {
      return -2;
    }
    if (_0x2851bf !== 0 && _0x2851bf !== 1 && _0x2851bf !== 2) {
      return -7;
    }
    if (_0x397619 !== 0 && _0x397619 !== 2 && _0x397619 !== 10) {
      return -6;
    }
    if (_0xd5d8f0) {
      _0xd5d8f0 = _0x2aa540(_0xd5d8f0);
      _0x4455a3 = parseInt(_0xd5d8f0, 10);
      if (isNaN(_0x4455a3)) {
        if (_0x2316e7 & 1024) {
          return -2;
        }
        return -8;
      }
    }
    if (!_0x26268c) {
      if (_0x397619 === 0) {
        _0x397619 = 2;
      }
      if ((_0x2316e7 & 1) === 0) {
        if (_0x397619 === 2) {
          _0x4c325e = _0x275c0c(2130706433);
        } else {
          _0x4c325e = [0, 0, 0, 1];
        }
      }
      _0x1cba68 = _0x2b4e5f(_0x397619, _0x2851bf, _0x2f4952, null, _0x4c325e, _0x4455a3);
      _0x237516[_0x26d0cc >> 2] = _0x1cba68;
      return 0;
    }
    _0x26268c = _0x2aa540(_0x26268c);
    _0x4c325e = _0x54d824(_0x26268c);
    if (_0x4c325e !== null) {
      if (_0x397619 === 0 || _0x397619 === 2) {
        _0x397619 = 2;
      } else if (_0x397619 === 10 && _0x2316e7 & 8) {
        _0x4c325e = [0, 0, _0x275c0c(65535), _0x4c325e];
        _0x397619 = 10;
      } else {
        return -2;
      }
    } else {
      _0x4c325e = _0x3648a5(_0x26268c);
      if (_0x4c325e !== null) {
        if (_0x397619 === 0 || _0x397619 === 10) {
          _0x397619 = 10;
        } else {
          return -2;
        }
      }
    }
    if (_0x4c325e != null) {
      _0x1cba68 = _0x2b4e5f(_0x397619, _0x2851bf, _0x2f4952, _0x26268c, _0x4c325e, _0x4455a3);
      _0x237516[_0x26d0cc >> 2] = _0x1cba68;
      return 0;
    }
    if (_0x2316e7 & 4) {
      return -2;
    }
    _0x26268c = _0x97f3cc.lookup_name(_0x26268c);
    _0x4c325e = _0x54d824(_0x26268c);
    if (_0x397619 === 0) {
      _0x397619 = 2;
    } else if (_0x397619 === 10) {
      _0x4c325e = [0, 0, _0x275c0c(65535), _0x4c325e];
    }
    _0x1cba68 = _0x2b4e5f(_0x397619, _0x2851bf, _0x2f4952, null, _0x4c325e, _0x4455a3);
    _0x237516[_0x26d0cc >> 2] = _0x1cba68;
    return 0;
  }
  function _0x1ad30c(_0x41daf7) {
    var _0x3d7767 = _0x4fa9c0(20);
    var _0x39db4c = _0x4fa9c0(_0x41daf7.length + 1);
    _0x16748b(_0x41daf7, _0x39db4c, _0x41daf7.length + 1);
    _0x237516[_0x3d7767 >> 2] = _0x39db4c;
    var _0x4c7168 = _0x4fa9c0(4);
    _0x237516[_0x4c7168 >> 2] = 0;
    _0x237516[_0x3d7767 + 4 >> 2] = _0x4c7168;
    var _0x3af615 = 2;
    _0x237516[_0x3d7767 + 8 >> 2] = _0x3af615;
    _0x237516[_0x3d7767 + 12 >> 2] = 4;
    var _0x2e54e8 = _0x4fa9c0(12);
    _0x237516[_0x2e54e8 >> 2] = _0x2e54e8 + 8;
    _0x237516[_0x2e54e8 + 4 >> 2] = 0;
    _0x237516[_0x2e54e8 + 8 >> 2] = _0x54d824(_0x97f3cc.lookup_name(_0x41daf7));
    _0x237516[_0x3d7767 + 16 >> 2] = _0x2e54e8;
    return _0x3d7767;
  }
  function _0x1eaf6f(_0x7ea54, _0x1c417a, _0x557866) {
    if (_0x557866 !== 2) {
      _0x893198(5);
      return null;
    }
    _0x7ea54 = _0x237516[_0x7ea54 >> 2];
    var _0x309149 = _0x37bd70(_0x7ea54);
    var _0x4f610f = _0x97f3cc.lookup_addr(_0x309149);
    if (_0x4f610f) {
      _0x309149 = _0x4f610f;
    }
    return _0x1ad30c(_0x309149);
  }
  function _0x273544(_0x38087d) {
    return _0x1ad30c(_0x2aa540(_0x38087d));
  }
  function _0x806964(_0x3a60c1, _0x317972, _0x25784a, _0x3e0e72, _0x136266, _0xfc8e36, _0x470ea1) {
    var _0x1f7cd9 = _0x1357b7(_0x3a60c1, _0x317972);
    if (_0x1f7cd9.errno) {
      return -6;
    }
    var _0x5e84c1 = _0x1f7cd9.port;
    var _0x246025 = _0x1f7cd9.addr;
    var _0x5d0fda = false;
    if (_0x25784a && _0x3e0e72) {
      var _0x1f4333;
      if (_0x470ea1 & 1 || !(_0x1f4333 = _0x97f3cc.lookup_addr(_0x246025))) {
        if (_0x470ea1 & 8) {
          return -2;
        }
      } else {
        _0x246025 = _0x1f4333;
      }
      var _0x4f535d = _0x16748b(_0x246025, _0x25784a, _0x3e0e72);
      if (_0x4f535d + 1 >= _0x3e0e72) {
        _0x5d0fda = true;
      }
    }
    if (_0x136266 && _0xfc8e36) {
      _0x5e84c1 = "" + _0x5e84c1;
      var _0x4f535d = _0x16748b(_0x5e84c1, _0x136266, _0xfc8e36);
      if (_0x4f535d + 1 >= _0xfc8e36) {
        _0x5d0fda = true;
      }
    }
    if (_0x5d0fda) {
      return -12;
    }
    return 0;
  }
  function _0x2285ee() {
    throw "getpwuid: TODO";
  }
  function _0x110888(_0x30ee2f) {
    var _0x482466 = Date.now();
    _0x237516[_0x30ee2f >> 2] = _0x482466 / 1000 | 0;
    _0x237516[_0x30ee2f + 4 >> 2] = _0x482466 % 1000 * 1000 | 0;
    return 0;
  }
  function _0x15591c(_0x466a96) {
    _0x3f9476.activeTexture(_0x466a96);
  }
  function _0x1b2dbd(_0xc70ac7, _0x4c633e) {
    _0xc70ac7 = _0x1e1029.programs[_0xc70ac7];
    _0x4c633e = _0x1e1029.shaders[_0x4c633e];
    _0xc70ac7[_0x4c633e.shaderType] = _0x4c633e;
    _0x3f9476.attachShader(_0xc70ac7, _0x4c633e);
  }
  function _0x1d7d3f(_0x138253, _0x590085) {
    _0x3f9476.beginQuery(_0x138253, _0x1e1029.queries[_0x590085]);
  }
  function _0x42e231(_0x17e86d) {
    _0x3f9476.beginTransformFeedback(_0x17e86d);
  }
  function _0x967117(_0x47a10e, _0x5b20bb, _0x3a8209) {
    _0x3f9476.bindAttribLocation(_0x1e1029.programs[_0x47a10e], _0x5b20bb, _0x2aa540(_0x3a8209));
  }
  function _0x38332b(_0x42581f, _0xae9c8) {
    if (_0x42581f == 34962) {
      _0x3f9476.currentArrayBufferBinding = _0xae9c8;
    } else if (_0x42581f == 34963) {
      _0x3f9476.currentElementArrayBufferBinding = _0xae9c8;
    }
    if (_0x42581f == 35051) {
      _0x3f9476.currentPixelPackBufferBinding = _0xae9c8;
    } else if (_0x42581f == 35052) {
      _0x3f9476.currentPixelUnpackBufferBinding = _0xae9c8;
    }
    _0x3f9476.bindBuffer(_0x42581f, _0x1e1029.buffers[_0xae9c8]);
  }
  function _0x5d7bc7(_0x3db1f7, _0x51f00a, _0x40ff09) {
    _0x3f9476.bindBufferBase(_0x3db1f7, _0x51f00a, _0x1e1029.buffers[_0x40ff09]);
  }
  function _0x278be0(_0x3f70bc, _0x54e71d, _0x246273, _0x46efd0, _0x412980) {
    _0x3f9476.bindBufferRange(_0x3f70bc, _0x54e71d, _0x1e1029.buffers[_0x246273], _0x46efd0, _0x412980);
  }
  function _0x1bfb2f(_0x34ab22, _0x918de0) {
    _0x3f9476.bindFramebuffer(_0x34ab22, _0x1e1029.framebuffers[_0x918de0]);
  }
  function _0x41466c(_0x458dd4, _0x495340) {
    _0x3f9476.bindRenderbuffer(_0x458dd4, _0x1e1029.renderbuffers[_0x495340]);
  }
  function _0x4ee9ac(_0x29325e, _0x4d3fb5) {
    _0x3f9476.bindSampler(_0x29325e, _0x1e1029.samplers[_0x4d3fb5]);
  }
  function _0x44c6a0(_0x1eabb6, _0x50bd4f) {
    _0x3f9476.bindTexture(_0x1eabb6, _0x1e1029.textures[_0x50bd4f]);
  }
  function _0x56286a(_0x36e992, _0x1a74f4) {
    _0x3f9476.bindTransformFeedback(_0x36e992, _0x1e1029.transformFeedbacks[_0x1a74f4]);
  }
  function _0x365c9b(_0x2e4e5c) {
    _0x3f9476.bindVertexArray(_0x1e1029.vaos[_0x2e4e5c]);
    var _0x5cc300 = _0x3f9476.getParameter(34965);
    _0x3f9476.currentElementArrayBufferBinding = _0x5cc300 ? _0x5cc300.name | 0 : 0;
  }
  function _0x261496(_0xa93f8d) {
    _0x3f9476.blendEquation(_0xa93f8d);
  }
  function _0x349aa0(_0x4af196, _0x359ace) {
    _0x3f9476.blendEquationSeparate(_0x4af196, _0x359ace);
  }
  function _0x347a04(_0x332d00, _0x36d873, _0x507517, _0x4ccb12) {
    _0x3f9476.blendFuncSeparate(_0x332d00, _0x36d873, _0x507517, _0x4ccb12);
  }
  function _0x17ec51(_0x76ee9a, _0x40b1ce, _0x2076a1, _0x133f4c, _0x4f1d0b, _0x1a51d1, _0x2e0ca9, _0x2fe12f, _0x2de875, _0x565149) {
    _0x3f9476.blitFramebuffer(_0x76ee9a, _0x40b1ce, _0x2076a1, _0x133f4c, _0x4f1d0b, _0x1a51d1, _0x2e0ca9, _0x2fe12f, _0x2de875, _0x565149);
  }
  function _0x2bd71b(_0x2aeba9, _0x2457c1, _0x304c88, _0x408ee1) {
    if (_0x1e1029.currentContext.version >= 2) {
      if (_0x304c88) {
        _0x3f9476.bufferData(_0x2aeba9, _0x312996, _0x408ee1, _0x304c88, _0x2457c1);
      } else {
        _0x3f9476.bufferData(_0x2aeba9, _0x2457c1, _0x408ee1);
      }
    } else {
      _0x3f9476.bufferData(_0x2aeba9, _0x304c88 ? _0x312996.subarray(_0x304c88, _0x304c88 + _0x2457c1) : _0x2457c1, _0x408ee1);
    }
  }
  function _0x8c1d16(_0x4d5cca, _0x11f00d, _0x4b93ee, _0x3f66c3) {
    if (_0x1e1029.currentContext.version >= 2) {
      _0x3f9476.bufferSubData(_0x4d5cca, _0x11f00d, _0x312996, _0x3f66c3, _0x4b93ee);
      return;
    }
    _0x3f9476.bufferSubData(_0x4d5cca, _0x11f00d, _0x312996.subarray(_0x3f66c3, _0x3f66c3 + _0x4b93ee));
  }
  function _0x55e1c9(_0x1a7c59) {
    return _0x3f9476.checkFramebufferStatus(_0x1a7c59);
  }
  function _0x23ced5(_0x49fa36) {
    _0x3f9476.clear(_0x49fa36);
  }
  function _0x6cbc30(_0x1c5683, _0x4ea060, _0x3f2fcf, _0x13d814) {
    _0x3f9476.clearBufferfi(_0x1c5683, _0x4ea060, _0x3f2fcf, _0x13d814);
  }
  function _0x384d89(_0x5acafc, _0x1b0dd0, _0x42fdf1) {
    _0x3f9476.clearBufferfv(_0x5acafc, _0x1b0dd0, _0x29b84b, _0x42fdf1 >> 2);
  }
  function _0x23de1d(_0x34b027, _0x49c900, _0x432477) {
    _0x3f9476.clearBufferuiv(_0x34b027, _0x49c900, _0x599e77, _0x432477 >> 2);
  }
  function _0x358e34(_0x4c7d03, _0xa6c3a4, _0x58999c, _0x3362f5) {
    _0x3f9476.clearColor(_0x4c7d03, _0xa6c3a4, _0x58999c, _0x3362f5);
  }
  function _0x4048bf(_0x232811) {
    _0x3f9476.clearDepth(_0x232811);
  }
  function _0x3fa405(_0x266b34) {
    _0x3f9476.clearStencil(_0x266b34);
  }
  function _0x172fff(_0x1aefcb, _0x2073b0, _0x452873, _0x33438a) {
    return _0x3f9476.clientWaitSync(_0x1e1029.syncs[_0x1aefcb], _0x2073b0, _0x2d84ef(_0x452873, _0x33438a));
  }
  function _0x5107e9(_0x590572, _0x219818, _0x5332fc, _0x4fda47) {
    _0x3f9476.colorMask(!!_0x590572, !!_0x219818, !!_0x5332fc, !!_0x4fda47);
  }
  function _0xff1d42(_0x30be81) {
    _0x3f9476.compileShader(_0x1e1029.shaders[_0x30be81]);
  }
  function _0x42635f(_0x21ab60, _0xbe2299, _0x228cf7, _0x242702, _0x5bfa7f, _0x3b7e4e, _0x3fa807, _0x594d66) {
    if (_0x1e1029.currentContext.version >= 2) {
      if (_0x3f9476.currentPixelUnpackBufferBinding) {
        _0x3f9476.compressedTexImage2D(_0x21ab60, _0xbe2299, _0x228cf7, _0x242702, _0x5bfa7f, _0x3b7e4e, _0x3fa807, _0x594d66);
      } else {
        _0x3f9476.compressedTexImage2D(_0x21ab60, _0xbe2299, _0x228cf7, _0x242702, _0x5bfa7f, _0x3b7e4e, _0x312996, _0x594d66, _0x3fa807);
      }
      return;
    }
    _0x3f9476.compressedTexImage2D(_0x21ab60, _0xbe2299, _0x228cf7, _0x242702, _0x5bfa7f, _0x3b7e4e, _0x594d66 ? _0x312996.subarray(_0x594d66, _0x594d66 + _0x3fa807) : null);
  }
  function _0x358700(_0x30cbb7, _0x4296b1, _0x2048a8, _0x2accff, _0x521eec, _0xe29225, _0x524cd4, _0x373b4d, _0x281efe) {
    if (_0x3f9476.currentPixelUnpackBufferBinding) {
      _0x3f9476.compressedTexImage3D(_0x30cbb7, _0x4296b1, _0x2048a8, _0x2accff, _0x521eec, _0xe29225, _0x524cd4, _0x373b4d, _0x281efe);
    } else {
      _0x3f9476.compressedTexImage3D(_0x30cbb7, _0x4296b1, _0x2048a8, _0x2accff, _0x521eec, _0xe29225, _0x524cd4, _0x312996, _0x281efe, _0x373b4d);
    }
  }
  function _0x137c03(_0x1e4c01, _0x5dad3b, _0x1320c1, _0x552b68, _0x2e2412, _0x517db0, _0x47e07f, _0x561dde, _0x521725) {
    if (_0x1e1029.currentContext.version >= 2) {
      if (_0x3f9476.currentPixelUnpackBufferBinding) {
        _0x3f9476.compressedTexSubImage2D(_0x1e4c01, _0x5dad3b, _0x1320c1, _0x552b68, _0x2e2412, _0x517db0, _0x47e07f, _0x561dde, _0x521725);
      } else {
        _0x3f9476.compressedTexSubImage2D(_0x1e4c01, _0x5dad3b, _0x1320c1, _0x552b68, _0x2e2412, _0x517db0, _0x47e07f, _0x312996, _0x521725, _0x561dde);
      }
      return;
    }
    _0x3f9476.compressedTexSubImage2D(_0x1e4c01, _0x5dad3b, _0x1320c1, _0x552b68, _0x2e2412, _0x517db0, _0x47e07f, _0x521725 ? _0x312996.subarray(_0x521725, _0x521725 + _0x561dde) : null);
  }
  function _0x290877(_0x591c41, _0x3d3069, _0x16edd8, _0x21c37a, _0x272566, _0x590f4d, _0x457511, _0x2e123a, _0x21fa98, _0x212185, _0x2e75c7) {
    if (_0x3f9476.currentPixelUnpackBufferBinding) {
      _0x3f9476.compressedTexSubImage3D(_0x591c41, _0x3d3069, _0x16edd8, _0x21c37a, _0x272566, _0x590f4d, _0x457511, _0x2e123a, _0x21fa98, _0x212185, _0x2e75c7);
    } else {
      _0x3f9476.compressedTexSubImage3D(_0x591c41, _0x3d3069, _0x16edd8, _0x21c37a, _0x272566, _0x590f4d, _0x457511, _0x2e123a, _0x21fa98, _0x312996, _0x2e75c7, _0x212185);
    }
  }
  function _0x18e997(_0x33cbb6, _0x2ef241, _0x3fe026, _0x1f459d, _0x252742) {
    _0x3f9476.copyBufferSubData(_0x33cbb6, _0x2ef241, _0x3fe026, _0x1f459d, _0x252742);
  }
  function _0xdf8ec0(_0x53c8d1, _0x3d13b9, _0x960c9b, _0x4b5eee, _0x26199f, _0x4d7600, _0x228853, _0x9e38fc) {
    _0x3f9476.copyTexImage2D(_0x53c8d1, _0x3d13b9, _0x960c9b, _0x4b5eee, _0x26199f, _0x4d7600, _0x228853, _0x9e38fc);
  }
  function _0x31d9cd(_0x4ba28c, _0x3a8e5f, _0xa1479b, _0x11036b, _0x51c3b1, _0x9a7893, _0xce9776, _0x165b9a) {
    _0x3f9476.copyTexSubImage2D(_0x4ba28c, _0x3a8e5f, _0xa1479b, _0x11036b, _0x51c3b1, _0x9a7893, _0xce9776, _0x165b9a);
  }
  function _0xafdfbb() {
    var _0x2ae1b0 = _0x1e1029.getNewId(_0x1e1029.programs);
    var _0x5178c5 = _0x3f9476.createProgram();
    _0x5178c5.name = _0x2ae1b0;
    _0x5178c5.maxUniformLength = _0x5178c5.maxAttributeLength = _0x5178c5.maxUniformBlockNameLength = 0;
    _0x5178c5.uniformIdCounter = 1;
    _0x1e1029.programs[_0x2ae1b0] = _0x5178c5;
    return _0x2ae1b0;
  }
  function _0x536938(_0x311087) {
    var _0xa04139 = _0x1e1029.getNewId(_0x1e1029.shaders);
    _0x1e1029.shaders[_0xa04139] = _0x3f9476.createShader(_0x311087);
    _0x1e1029.shaders[_0xa04139].shaderType = _0x311087 & 1 ? "vs" : "fs";
    return _0xa04139;
  }
  function _0x3ad818(_0x2c1584) {
    _0x3f9476.cullFace(_0x2c1584);
  }
  function _0x4ec6c9(_0x15bfcd, _0x4fbcb1) {
    for (var _0x3c3735 = 0; _0x3c3735 < _0x15bfcd; _0x3c3735++) {
      var _0x10980e = _0x237516[_0x4fbcb1 + _0x3c3735 * 4 >> 2];
      var _0x3562f8 = _0x1e1029.buffers[_0x10980e];
      if (!_0x3562f8) {
        continue;
      }
      _0x3f9476.deleteBuffer(_0x3562f8);
      _0x3562f8.name = 0;
      _0x1e1029.buffers[_0x10980e] = null;
      if (_0x10980e == _0x3f9476.currentArrayBufferBinding) {
        _0x3f9476.currentArrayBufferBinding = 0;
      }
      if (_0x10980e == _0x3f9476.currentElementArrayBufferBinding) {
        _0x3f9476.currentElementArrayBufferBinding = 0;
      }
      if (_0x10980e == _0x3f9476.currentPixelPackBufferBinding) {
        _0x3f9476.currentPixelPackBufferBinding = 0;
      }
      if (_0x10980e == _0x3f9476.currentPixelUnpackBufferBinding) {
        _0x3f9476.currentPixelUnpackBufferBinding = 0;
      }
    }
  }
  function _0x2aca91(_0x3501e0, _0x4d2695) {
    for (var _0x1964cc = 0; _0x1964cc < _0x3501e0; ++_0x1964cc) {
      var _0x35851b = _0x237516[_0x4d2695 + _0x1964cc * 4 >> 2];
      var _0x1ccd87 = _0x1e1029.framebuffers[_0x35851b];
      if (!_0x1ccd87) {
        continue;
      }
      _0x3f9476.deleteFramebuffer(_0x1ccd87);
      _0x1ccd87.name = 0;
      _0x1e1029.framebuffers[_0x35851b] = null;
    }
  }
  function _0x399935(_0x49e11b) {
    if (!_0x49e11b) {
      return;
    }
    var _0x2a042c = _0x1e1029.programs[_0x49e11b];
    if (!_0x2a042c) {
      _0x1e1029.recordError(1281);
      return;
    }
    _0x3f9476.deleteProgram(_0x2a042c);
    _0x2a042c.name = 0;
    _0x1e1029.programs[_0x49e11b] = null;
  }
  function _0x521002(_0x14997c, _0x7076ac) {
    for (var _0x3813c2 = 0; _0x3813c2 < _0x14997c; _0x3813c2++) {
      var _0x2d61f5 = _0x237516[_0x7076ac + _0x3813c2 * 4 >> 2];
      var _0x1b8b52 = _0x1e1029.queries[_0x2d61f5];
      if (!_0x1b8b52) {
        continue;
      }
      _0x3f9476.deleteQuery(_0x1b8b52);
      _0x1e1029.queries[_0x2d61f5] = null;
    }
  }
  function _0x52513d(_0x54b36e, _0x51afe0) {
    for (var _0x13619a = 0; _0x13619a < _0x54b36e; _0x13619a++) {
      var _0x37a4c0 = _0x237516[_0x51afe0 + _0x13619a * 4 >> 2];
      var _0x99c732 = _0x1e1029.renderbuffers[_0x37a4c0];
      if (!_0x99c732) {
        continue;
      }
      _0x3f9476.deleteRenderbuffer(_0x99c732);
      _0x99c732.name = 0;
      _0x1e1029.renderbuffers[_0x37a4c0] = null;
    }
  }
  function _0x484390(_0x126759, _0x437bb5) {
    for (var _0x439808 = 0; _0x439808 < _0x126759; _0x439808++) {
      var _0x8ae2dc = _0x237516[_0x437bb5 + _0x439808 * 4 >> 2];
      var _0x55ab2e = _0x1e1029.samplers[_0x8ae2dc];
      if (!_0x55ab2e) {
        continue;
      }
      _0x3f9476.deleteSampler(_0x55ab2e);
      _0x55ab2e.name = 0;
      _0x1e1029.samplers[_0x8ae2dc] = null;
    }
  }
  function _0x18acff(_0x3c34cc) {
    if (!_0x3c34cc) {
      return;
    }
    var _0x1270d9 = _0x1e1029.shaders[_0x3c34cc];
    if (!_0x1270d9) {
      _0x1e1029.recordError(1281);
      return;
    }
    _0x3f9476.deleteShader(_0x1270d9);
    _0x1e1029.shaders[_0x3c34cc] = null;
  }
  function _0x389215(_0x9a428f) {
    if (!_0x9a428f) {
      return;
    }
    var _0x58cdc9 = _0x1e1029.syncs[_0x9a428f];
    if (!_0x58cdc9) {
      _0x1e1029.recordError(1281);
      return;
    }
    _0x3f9476.deleteSync(_0x58cdc9);
    _0x58cdc9.name = 0;
    _0x1e1029.syncs[_0x9a428f] = null;
  }
  function _0x477f9e(_0x4fd382, _0x87c937) {
    for (var _0x55777a = 0; _0x55777a < _0x4fd382; _0x55777a++) {
      var _0x19133d = _0x237516[_0x87c937 + _0x55777a * 4 >> 2];
      var _0x2e6b96 = _0x1e1029.textures[_0x19133d];
      if (!_0x2e6b96) {
        continue;
      }
      _0x3f9476.deleteTexture(_0x2e6b96);
      _0x2e6b96.name = 0;
      _0x1e1029.textures[_0x19133d] = null;
    }
  }
  function _0x93fe8d(_0x41ff6e, _0x39279e) {
    for (var _0x58e4b0 = 0; _0x58e4b0 < _0x41ff6e; _0x58e4b0++) {
      var _0x23fe11 = _0x237516[_0x39279e + _0x58e4b0 * 4 >> 2];
      var _0x5ccef2 = _0x1e1029.transformFeedbacks[_0x23fe11];
      if (!_0x5ccef2) {
        continue;
      }
      _0x3f9476.deleteTransformFeedback(_0x5ccef2);
      _0x5ccef2.name = 0;
      _0x1e1029.transformFeedbacks[_0x23fe11] = null;
    }
  }
  function _0x3abfd7(_0x15f794, _0x1a0c32) {
    for (var _0x5abdd6 = 0; _0x5abdd6 < _0x15f794; _0x5abdd6++) {
      var _0x545abd = _0x237516[_0x1a0c32 + _0x5abdd6 * 4 >> 2];
      _0x3f9476.deleteVertexArray(_0x1e1029.vaos[_0x545abd]);
      _0x1e1029.vaos[_0x545abd] = null;
    }
  }
  function _0xcad849(_0x8c13f2) {
    _0x3f9476.depthFunc(_0x8c13f2);
  }
  function _0x5bd72b(_0x25834b) {
    _0x3f9476.depthMask(!!_0x25834b);
  }
  function _0x5e2201(_0x39077e, _0x496b80) {
    _0x3f9476.detachShader(_0x1e1029.programs[_0x39077e], _0x1e1029.shaders[_0x496b80]);
  }
  function _0x4ddff6(_0x187c07) {
    _0x3f9476.disable(_0x187c07);
  }
  function _0xf8da9f(_0x4c3051) {
    var _0x3361ee = _0x1e1029.currentContext.clientBuffers[_0x4c3051];
    _0x3361ee.enabled = false;
    _0x3f9476.disableVertexAttribArray(_0x4c3051);
  }
  function _0x2148fc(_0x3e6554, _0x23b1d4, _0x6c0dee) {
    _0x1e1029.preDrawHandleClientVertexAttribBindings(_0x23b1d4 + _0x6c0dee);
    _0x3f9476.drawArrays(_0x3e6554, _0x23b1d4, _0x6c0dee);
    _0x1e1029.postDrawHandleClientVertexAttribBindings();
  }
  function _0x2c50c8(_0x585f60, _0x5806ce, _0x4b203f, _0x4f22ba) {
    _0x3f9476.drawArraysInstanced(_0x585f60, _0x5806ce, _0x4b203f, _0x4f22ba);
  }
  var _0x28708e = [];
  function _0xa47caf(_0xa958dc, _0x229657) {
    var _0x53cb8f = _0x28708e[_0xa958dc];
    for (var _0x45e55f = 0; _0x45e55f < _0xa958dc; _0x45e55f++) {
      _0x53cb8f[_0x45e55f] = _0x237516[_0x229657 + _0x45e55f * 4 >> 2];
    }
    _0x3f9476.drawBuffers(_0x53cb8f);
  }
  function _0x42e859(_0x3098c3, _0x526c50, _0x2ffda3, _0x166b1c) {
    var _0xef62c2;
    if (!_0x3f9476.currentElementArrayBufferBinding) {
      var _0x29e3df = _0x1e1029.calcBufLength(1, _0x2ffda3, 0, _0x526c50);
      _0xef62c2 = _0x1e1029.getTempIndexBuffer(_0x29e3df);
      _0x3f9476.bindBuffer(34963, _0xef62c2);
      _0x3f9476.bufferSubData(34963, 0, _0x312996.subarray(_0x166b1c, _0x166b1c + _0x29e3df));
      _0x166b1c = 0;
    }
    _0x1e1029.preDrawHandleClientVertexAttribBindings(_0x526c50);
    _0x3f9476.drawElements(_0x3098c3, _0x526c50, _0x2ffda3, _0x166b1c);
    _0x1e1029.postDrawHandleClientVertexAttribBindings(_0x526c50);
    if (!_0x3f9476.currentElementArrayBufferBinding) {
      _0x3f9476.bindBuffer(34963, null);
    }
  }
  function _0x3d5b23(_0x446605, _0x388d48, _0x7c482, _0x11cf00, _0x1a8bda) {
    _0x3f9476.drawElementsInstanced(_0x446605, _0x388d48, _0x7c482, _0x11cf00, _0x1a8bda);
  }
  function _0x101f31(_0x505059) {
    _0x3f9476.enable(_0x505059);
  }
  function _0x5c3285(_0x47d332) {
    var _0x1e7423 = _0x1e1029.currentContext.clientBuffers[_0x47d332];
    _0x1e7423.enabled = true;
    _0x3f9476.enableVertexAttribArray(_0x47d332);
  }
  function _0x3ba6e0(_0x532cea) {
    _0x3f9476.endQuery(_0x532cea);
  }
  function _0x3f6a13() {
    _0x3f9476.endTransformFeedback();
  }
  function _0x4c797c(_0x3d0a12, _0x111eed) {
    var _0x569192 = _0x3f9476.fenceSync(_0x3d0a12, _0x111eed);
    if (_0x569192) {
      var _0x13a472 = _0x1e1029.getNewId(_0x1e1029.syncs);
      _0x569192.name = _0x13a472;
      _0x1e1029.syncs[_0x13a472] = _0x569192;
      return _0x13a472;
    } else {
      return 0;
    }
  }
  function _0x26abe6() {
    _0x3f9476.finish();
  }
  function _0x1d7767() {
    _0x3f9476.flush();
  }
  function _0x29405c(_0x17a085) {
    switch (_0x17a085) {
      case 34962:
        _0x17a085 = 34964;
        break;
      case 34963:
        _0x17a085 = 34965;
        break;
      case 35051:
        _0x17a085 = 35053;
        break;
      case 35052:
        _0x17a085 = 35055;
        break;
      case 35982:
        _0x17a085 = 35983;
        break;
      case 36662:
        _0x17a085 = 36662;
        break;
      case 36663:
        _0x17a085 = 36663;
        break;
      case 35345:
        _0x17a085 = 35368;
        break;
    }
    var _0x594509 = _0x3f9476.getParameter(_0x17a085);
    if (_0x594509) {
      return _0x594509.name | 0;
    } else {
      return 0;
    }
  }
  function _0x3082d4(_0x4f56ab) {
    switch (_0x4f56ab) {
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
  function _0x25f511(_0xdeec4, _0x2ff09a, _0x59c63d) {
    if (!_0x3082d4(_0xdeec4)) {
      _0x1e1029.recordError(1280);
      _0x4677f2("GL_INVALID_ENUM in glFlushMappedBufferRange");
      return;
    }
    var _0x1cb2d9 = _0x1e1029.mappedBuffers[_0x29405c(_0xdeec4)];
    if (!_0x1cb2d9) {
      _0x1e1029.recordError(1282);
      _0x4677f2("buffer was never mapped in glFlushMappedBufferRange");
      return;
    }
    if (!(_0x1cb2d9.access & 16)) {
      _0x1e1029.recordError(1282);
      _0x4677f2("buffer was not mapped with GL_MAP_FLUSH_EXPLICIT_BIT in glFlushMappedBufferRange");
      return;
    }
    if (_0x2ff09a < 0 || _0x59c63d < 0 || _0x2ff09a + _0x59c63d > _0x1cb2d9.length) {
      _0x1e1029.recordError(1281);
      _0x4677f2("invalid range in glFlushMappedBufferRange");
      return;
    }
    _0x3f9476.bufferSubData(_0xdeec4, _0x1cb2d9.offset, _0x312996.subarray(_0x1cb2d9.mem + _0x2ff09a, _0x1cb2d9.mem + _0x2ff09a + _0x59c63d));
  }
  function _0x3ee5b8(_0x57d9af, _0x30d41d, _0x581882, _0x45c094) {
    _0x3f9476.framebufferRenderbuffer(_0x57d9af, _0x30d41d, _0x581882, _0x1e1029.renderbuffers[_0x45c094]);
  }
  function _0x51474c(_0x4eb1fd, _0xf9cca1, _0x2487f6, _0x5474d1, _0x3fb406) {
    _0x3f9476.framebufferTexture2D(_0x4eb1fd, _0xf9cca1, _0x2487f6, _0x1e1029.textures[_0x5474d1], _0x3fb406);
  }
  function _0x40345b(_0x537c40, _0x52cda0, _0x9d1791, _0x4f1bed, _0x122dea) {
    _0x3f9476.framebufferTextureLayer(_0x537c40, _0x52cda0, _0x1e1029.textures[_0x9d1791], _0x4f1bed, _0x122dea);
  }
  function _0x56139e(_0x5363ae) {
    _0x3f9476.frontFace(_0x5363ae);
  }
  function _0x2ab28c(_0x418cb5, _0x234908, _0x16d6a1, _0x5e0ec8) {
    for (var _0x2d05af = 0; _0x2d05af < _0x418cb5; _0x2d05af++) {
      var _0x322c18 = _0x3f9476[_0x16d6a1]();
      var _0x22f417 = _0x322c18 && _0x1e1029.getNewId(_0x5e0ec8);
      if (_0x322c18) {
        _0x322c18.name = _0x22f417;
        _0x5e0ec8[_0x22f417] = _0x322c18;
      } else {
        _0x1e1029.recordError(1282);
      }
      _0x237516[_0x234908 + _0x2d05af * 4 >> 2] = _0x22f417;
    }
  }
  function _0x5e2ed9(_0x4801e8, _0x133114) {
    _0x2ab28c(_0x4801e8, _0x133114, "createBuffer", _0x1e1029.buffers);
  }
  function _0x3d5a7f(_0x48acba, _0x5ef177) {
    _0x2ab28c(_0x48acba, _0x5ef177, "createFramebuffer", _0x1e1029.framebuffers);
  }
  function _0x4af290(_0x41b81d, _0x1a0abb) {
    _0x2ab28c(_0x41b81d, _0x1a0abb, "createQuery", _0x1e1029.queries);
  }
  function _0x7e3dc3(_0x2f379d, _0x534b4f) {
    _0x2ab28c(_0x2f379d, _0x534b4f, "createRenderbuffer", _0x1e1029.renderbuffers);
  }
  function _0x1121ee(_0x11dc61, _0x1873e6) {
    _0x2ab28c(_0x11dc61, _0x1873e6, "createSampler", _0x1e1029.samplers);
  }
  function _0x37edf0(_0x1fda47, _0x1b038e) {
    _0x2ab28c(_0x1fda47, _0x1b038e, "createTexture", _0x1e1029.textures);
  }
  function _0x270a89(_0x1b7101, _0xd7db9b) {
    _0x2ab28c(_0x1b7101, _0xd7db9b, "createTransformFeedback", _0x1e1029.transformFeedbacks);
  }
  function _0x56a2e1(_0x3c7ce6, _0x50778e) {
    _0x2ab28c(_0x3c7ce6, _0x50778e, "createVertexArray", _0x1e1029.vaos);
  }
  function _0x5c5441(_0x183e7f) {
    _0x3f9476.generateMipmap(_0x183e7f);
  }
  function _0x1d46bd(_0x5d9957, _0x1840a8, _0x3ef973, _0x53d187, _0x1d2ab9, _0x2dfd69, _0x40ca03, _0x421701) {
    _0x1840a8 = _0x1e1029.programs[_0x1840a8];
    var _0x568f4f = _0x3f9476[_0x5d9957](_0x1840a8, _0x3ef973);
    if (_0x568f4f) {
      var _0x39aa4d = _0x421701 && _0x16748b(_0x568f4f.name, _0x421701, _0x53d187);
      if (_0x1d2ab9) {
        _0x237516[_0x1d2ab9 >> 2] = _0x39aa4d;
      }
      if (_0x2dfd69) {
        _0x237516[_0x2dfd69 >> 2] = _0x568f4f.size;
      }
      if (_0x40ca03) {
        _0x237516[_0x40ca03 >> 2] = _0x568f4f.type;
      }
    }
  }
  function _0x26859b(_0x1ee8c4, _0x45e218, _0x546384, _0x57c272, _0x4a7e3f, _0x463494, _0x3d9ec4) {
    _0x1d46bd("getActiveAttrib", _0x1ee8c4, _0x45e218, _0x546384, _0x57c272, _0x4a7e3f, _0x463494, _0x3d9ec4);
  }
  function _0xf936ba(_0x47abc0, _0x471db8, _0x2c1896, _0x36e936, _0x1df4b5, _0x5cd0f8, _0x3c5a06) {
    _0x1d46bd("getActiveUniform", _0x47abc0, _0x471db8, _0x2c1896, _0x36e936, _0x1df4b5, _0x5cd0f8, _0x3c5a06);
  }
  function _0xa4ffe1(_0x430f35, _0x4f433b, _0x12f1b0, _0x342760, _0x3e4597) {
    _0x430f35 = _0x1e1029.programs[_0x430f35];
    var _0x151319 = _0x3f9476.getActiveUniformBlockName(_0x430f35, _0x4f433b);
    if (!_0x151319) {
      return;
    }
    if (_0x3e4597 && _0x12f1b0 > 0) {
      var _0x8f3c4 = _0x16748b(_0x151319, _0x3e4597, _0x12f1b0);
      if (_0x342760) {
        _0x237516[_0x342760 >> 2] = _0x8f3c4;
      }
    } else if (_0x342760) {
      _0x237516[_0x342760 >> 2] = 0;
    }
  }
  function _0x34957c(_0x580e1a, _0x342ead, _0x1bc306, _0x1c264a) {
    if (!_0x1c264a) {
      _0x1e1029.recordError(1281);
      return;
    }
    _0x580e1a = _0x1e1029.programs[_0x580e1a];
    if (_0x1bc306 == 35393) {
      var _0x381699 = _0x3f9476.getActiveUniformBlockName(_0x580e1a, _0x342ead);
      _0x237516[_0x1c264a >> 2] = _0x381699.length + 1;
      return;
    }
    var _0x57b47e = _0x3f9476.getActiveUniformBlockParameter(_0x580e1a, _0x342ead, _0x1bc306);
    if (_0x57b47e === null) {
      return;
    }
    if (_0x1bc306 == 35395) {
      for (var _0x21ade3 = 0; _0x21ade3 < _0x57b47e.length; _0x21ade3++) {
        _0x237516[_0x1c264a + _0x21ade3 * 4 >> 2] = _0x57b47e[_0x21ade3];
      }
    } else {
      _0x237516[_0x1c264a >> 2] = _0x57b47e;
    }
  }
  function _0x4d70fe(_0x19613c, _0x488e15, _0xcf4b2, _0x455f05, _0x4e9f0a) {
    if (!_0x4e9f0a) {
      _0x1e1029.recordError(1281);
      return;
    }
    if (_0x488e15 > 0 && _0xcf4b2 == 0) {
      _0x1e1029.recordError(1281);
      return;
    }
    _0x19613c = _0x1e1029.programs[_0x19613c];
    var _0x3e369e = [];
    for (var _0x45d664 = 0; _0x45d664 < _0x488e15; _0x45d664++) {
      _0x3e369e.push(_0x237516[_0xcf4b2 + _0x45d664 * 4 >> 2]);
    }
    var _0x4164f1 = _0x3f9476.getActiveUniforms(_0x19613c, _0x3e369e, _0x455f05);
    if (!_0x4164f1) {
      return;
    }
    var _0x4caaf6 = _0x4164f1.length;
    for (var _0x45d664 = 0; _0x45d664 < _0x4caaf6; _0x45d664++) {
      _0x237516[_0x4e9f0a + _0x45d664 * 4 >> 2] = _0x4164f1[_0x45d664];
    }
  }
  function _0x3f411d(_0x24ec89, _0x8c4827) {
    return _0x3f9476.getAttribLocation(_0x1e1029.programs[_0x24ec89], _0x2aa540(_0x8c4827));
  }
  function _0x1460b0(_0x18346e, _0x398482, _0x53fb3e, _0x3e317d) {
    if (!_0x3e317d) {
      _0x1e1029.recordError(1281);
      return;
    }
    _0x3f9476.getBufferSubData(_0x18346e, _0x398482, _0x312996, _0x3e317d, _0x53fb3e);
  }
  function _0x25b62d() {
    var _0x2d21ca = _0x3f9476.getError() || _0x1e1029.lastError;
    _0x1e1029.lastError = 0;
    return _0x2d21ca;
  }
  function _0x1c7749(_0x198ee4, _0x53cfa1, _0x5621b7, _0x166bca) {
    var _0x4912a6 = _0x3f9476.getFramebufferAttachmentParameter(_0x198ee4, _0x53cfa1, _0x5621b7);
    if (_0x4912a6 instanceof WebGLRenderbuffer || _0x4912a6 instanceof WebGLTexture) {
      _0x4912a6 = _0x4912a6.name | 0;
    }
    _0x237516[_0x166bca >> 2] = _0x4912a6;
  }
  function _0x44e6af(_0x330f0d, _0xab980b) {
    _0x599e77[_0x330f0d >> 2] = _0xab980b;
    _0x599e77[_0x330f0d + 4 >> 2] = (_0xab980b - _0x599e77[_0x330f0d >> 2]) / 4294967296;
  }
  function _0xb6d8dc(_0x114863, _0x3fabec, _0x251360, _0x47c7db) {
    if (!_0x251360) {
      _0x1e1029.recordError(1281);
      return;
    }
    var _0x25830a = _0x3f9476.getIndexedParameter(_0x114863, _0x3fabec);
    var _0x3fae3a;
    switch (typeof _0x25830a) {
      case "boolean":
        _0x3fae3a = _0x25830a ? 1 : 0;
        break;
      case "number":
        _0x3fae3a = _0x25830a;
        break;
      case "object":
        if (_0x25830a === null) {
          switch (_0x114863) {
            case 35983:
            case 35368:
              _0x3fae3a = 0;
              break;
            default:
              {
                _0x1e1029.recordError(1280);
                return;
              }
          }
        } else if (_0x25830a instanceof WebGLBuffer) {
          _0x3fae3a = _0x25830a.name | 0;
        } else {
          _0x1e1029.recordError(1280);
          return;
        }
        break;
      default:
        _0x1e1029.recordError(1280);
        return;
    }
    switch (_0x47c7db) {
      case 1:
        _0x44e6af(_0x251360, _0x3fae3a);
        break;
      case 0:
        _0x237516[_0x251360 >> 2] = _0x3fae3a;
        break;
      case 2:
        _0x29b84b[_0x251360 >> 2] = _0x3fae3a;
        break;
      case 4:
        _0x1cc374[_0x251360 >> 0] = _0x3fae3a ? 1 : 0;
        break;
      default:
        throw "internal emscriptenWebGLGetIndexed() error, bad type: " + _0x47c7db;
    }
  }
  function _0x3fb71d(_0x309617, _0x2361a4, _0x2bf0d6) {
    _0xb6d8dc(_0x309617, _0x2361a4, _0x2bf0d6, 0);
  }
  function _0x5e7f8b(_0x33aac4, _0x597d04, _0x56802d) {
    if (!_0x597d04) {
      _0x1e1029.recordError(1281);
      return;
    }
    var _0xbe9365 = undefined;
    switch (_0x33aac4) {
      case 36346:
        _0xbe9365 = 1;
        break;
      case 36344:
        if (_0x56802d != 0 && _0x56802d != 1) {
          _0x1e1029.recordError(1280);
        }
        return;
      case 34814:
      case 36345:
        _0xbe9365 = 0;
        break;
      case 34466:
        var _0x55fe78 = _0x3f9476.getParameter(34467);
        _0xbe9365 = _0x55fe78 ? _0x55fe78.length : 0;
        break;
      case 33390:
        _0xbe9365 = 1048576;
        break;
      case 33309:
        if (_0x1e1029.currentContext.version < 2) {
          _0x1e1029.recordError(1282);
          return;
        }
        var _0x36a276 = _0x3f9476.getSupportedExtensions() || [];
        _0xbe9365 = _0x36a276.length * 2;
        break;
      case 33307:
      case 33308:
        if (_0x1e1029.currentContext.version < 2) {
          _0x1e1029.recordError(1280);
          return;
        }
        _0xbe9365 = _0x33aac4 == 33307 ? 3 : 0;
        break;
    }
    if (_0xbe9365 === undefined) {
      var _0x4678b4 = _0x3f9476.getParameter(_0x33aac4);
      switch (typeof _0x4678b4) {
        case "number":
          _0xbe9365 = _0x4678b4;
          break;
        case "boolean":
          _0xbe9365 = _0x4678b4 ? 1 : 0;
          break;
        case "string":
          _0x1e1029.recordError(1280);
          return;
        case "object":
          if (_0x4678b4 === null) {
            switch (_0x33aac4) {
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
                  _0xbe9365 = 0;
                  break;
                }
              default:
                {
                  _0x1e1029.recordError(1280);
                  return;
                }
            }
          } else if (_0x4678b4 instanceof Float32Array || _0x4678b4 instanceof Uint32Array || _0x4678b4 instanceof Int32Array || _0x4678b4 instanceof Array) {
            for (var _0x347abd = 0; _0x347abd < _0x4678b4.length; ++_0x347abd) {
              switch (_0x56802d) {
                case 0:
                  _0x237516[_0x597d04 + _0x347abd * 4 >> 2] = _0x4678b4[_0x347abd];
                  break;
                case 2:
                  _0x29b84b[_0x597d04 + _0x347abd * 4 >> 2] = _0x4678b4[_0x347abd];
                  break;
                case 4:
                  _0x1cc374[_0x597d04 + _0x347abd >> 0] = _0x4678b4[_0x347abd] ? 1 : 0;
                  break;
              }
            }
            return;
          } else {
            try {
              _0xbe9365 = _0x4678b4.name | 0;
            } catch (_0x5c1e95) {
              _0x1e1029.recordError(1280);
              _0x4677f2("GL_INVALID_ENUM in glGet" + _0x56802d + "v: Unknown object returned from WebGL getParameter(" + _0x33aac4 + ")! (error: " + _0x5c1e95 + ")");
              return;
            }
          }
          break;
        default:
          _0x1e1029.recordError(1280);
          _0x4677f2("GL_INVALID_ENUM in glGet" + _0x56802d + "v: Native code calling glGet" + _0x56802d + "v(" + _0x33aac4 + ") and it returns " + _0x4678b4 + " of type " + typeof _0x4678b4 + "!");
          return;
      }
    }
    switch (_0x56802d) {
      case 1:
        _0x44e6af(_0x597d04, _0xbe9365);
        break;
      case 0:
        _0x237516[_0x597d04 >> 2] = _0xbe9365;
        break;
      case 2:
        _0x29b84b[_0x597d04 >> 2] = _0xbe9365;
        break;
      case 4:
        _0x1cc374[_0x597d04 >> 0] = _0xbe9365 ? 1 : 0;
        break;
    }
  }
  function _0x13de0c(_0x5a2408, _0xcf7459) {
    _0x5e7f8b(_0x5a2408, _0xcf7459, 0);
  }
  function _0x583464(_0x7e79b1, _0x598401, _0x48b3e2, _0x59030d, _0xe461b1) {
    if (_0x59030d < 0) {
      _0x1e1029.recordError(1281);
      return;
    }
    if (!_0xe461b1) {
      _0x1e1029.recordError(1281);
      return;
    }
    var _0x12eb68 = _0x3f9476.getInternalformatParameter(_0x7e79b1, _0x598401, _0x48b3e2);
    if (_0x12eb68 === null) {
      return;
    }
    for (var _0x50928d = 0; _0x50928d < _0x12eb68.length && _0x50928d < _0x59030d; ++_0x50928d) {
      _0x237516[_0xe461b1 + _0x50928d * 4 >> 2] = _0x12eb68[_0x50928d];
    }
  }
  function _0x2cf203(_0x3518c1, _0x72d635, _0xf6538e, _0x117d78, _0x12212e) {
    _0x1e1029.recordError(1282);
  }
  function _0x2bec36(_0xde8b09, _0x3354dd, _0x3a8eae, _0x5af183) {
    var _0x15b084 = _0x3f9476.getProgramInfoLog(_0x1e1029.programs[_0xde8b09]);
    if (_0x15b084 === null) {
      _0x15b084 = "(unknown error)";
    }
    var _0x4f9d90 = _0x3354dd > 0 && _0x5af183 ? _0x16748b(_0x15b084, _0x5af183, _0x3354dd) : 0;
    if (_0x3a8eae) {
      _0x237516[_0x3a8eae >> 2] = _0x4f9d90;
    }
  }
  function _0x491db7(_0x3775be, _0x2d18e7, _0x3a6079) {
    if (!_0x3a6079) {
      _0x1e1029.recordError(1281);
      return;
    }
    if (_0x3775be >= _0x1e1029.counter) {
      _0x1e1029.recordError(1281);
      return;
    }
    _0x3775be = _0x1e1029.programs[_0x3775be];
    if (_0x2d18e7 == 35716) {
      var _0x3c6b97 = _0x3f9476.getProgramInfoLog(_0x3775be);
      if (_0x3c6b97 === null) {
        _0x3c6b97 = "(unknown error)";
      }
      _0x237516[_0x3a6079 >> 2] = _0x3c6b97.length + 1;
    } else if (_0x2d18e7 == 35719) {
      if (!_0x3775be.maxUniformLength) {
        for (var _0x16235b = 0; _0x16235b < _0x3f9476.getProgramParameter(_0x3775be, 35718); ++_0x16235b) {
          _0x3775be.maxUniformLength = Math.max(_0x3775be.maxUniformLength, _0x3f9476.getActiveUniform(_0x3775be, _0x16235b).name.length + 1);
        }
      }
      _0x237516[_0x3a6079 >> 2] = _0x3775be.maxUniformLength;
    } else if (_0x2d18e7 == 35722) {
      if (!_0x3775be.maxAttributeLength) {
        for (var _0x16235b = 0; _0x16235b < _0x3f9476.getProgramParameter(_0x3775be, 35721); ++_0x16235b) {
          _0x3775be.maxAttributeLength = Math.max(_0x3775be.maxAttributeLength, _0x3f9476.getActiveAttrib(_0x3775be, _0x16235b).name.length + 1);
        }
      }
      _0x237516[_0x3a6079 >> 2] = _0x3775be.maxAttributeLength;
    } else if (_0x2d18e7 == 35381) {
      if (!_0x3775be.maxUniformBlockNameLength) {
        for (var _0x16235b = 0; _0x16235b < _0x3f9476.getProgramParameter(_0x3775be, 35382); ++_0x16235b) {
          _0x3775be.maxUniformBlockNameLength = Math.max(_0x3775be.maxUniformBlockNameLength, _0x3f9476.getActiveUniformBlockName(_0x3775be, _0x16235b).length + 1);
        }
      }
      _0x237516[_0x3a6079 >> 2] = _0x3775be.maxUniformBlockNameLength;
    } else {
      _0x237516[_0x3a6079 >> 2] = _0x3f9476.getProgramParameter(_0x3775be, _0x2d18e7);
    }
  }
  function _0x5db8c2(_0x525832, _0x4a05cb, _0x4d25bb) {
    if (!_0x4d25bb) {
      _0x1e1029.recordError(1281);
      return;
    }
    var _0xd90946 = _0x1e1029.queries[_0x525832];
    var _0x30a70d = _0x3f9476.getQueryParameter(_0xd90946, _0x4a05cb);
    var _0x474a42;
    if (typeof _0x30a70d == "boolean") {
      _0x474a42 = _0x30a70d ? 1 : 0;
    } else {
      _0x474a42 = _0x30a70d;
    }
    _0x237516[_0x4d25bb >> 2] = _0x474a42;
  }
  function _0x3f96e2(_0x266268, _0x46327b, _0x508891) {
    if (!_0x508891) {
      _0x1e1029.recordError(1281);
      return;
    }
    _0x237516[_0x508891 >> 2] = _0x3f9476.getQuery(_0x266268, _0x46327b);
  }
  function _0x551c0e(_0x263fbd, _0x278197, _0x2849a3) {
    if (!_0x2849a3) {
      _0x1e1029.recordError(1281);
      return;
    }
    _0x237516[_0x2849a3 >> 2] = _0x3f9476.getRenderbufferParameter(_0x263fbd, _0x278197);
  }
  function _0x3fe94b(_0x2bf68e, _0x16af7f, _0x372fcb, _0x38b3e1) {
    var _0x20cbf6 = _0x3f9476.getShaderInfoLog(_0x1e1029.shaders[_0x2bf68e]);
    if (_0x20cbf6 === null) {
      _0x20cbf6 = "(unknown error)";
    }
    var _0xd4ca41 = _0x16af7f > 0 && _0x38b3e1 ? _0x16748b(_0x20cbf6, _0x38b3e1, _0x16af7f) : 0;
    if (_0x372fcb) {
      _0x237516[_0x372fcb >> 2] = _0xd4ca41;
    }
  }
  function _0x178e36(_0x47e3b0, _0x54afe4, _0x5c7654, _0x4de41e) {
    var _0x381427 = _0x3f9476.getShaderPrecisionFormat(_0x47e3b0, _0x54afe4);
    _0x237516[_0x5c7654 >> 2] = _0x381427.rangeMin;
    _0x237516[_0x5c7654 + 4 >> 2] = _0x381427.rangeMax;
    _0x237516[_0x4de41e >> 2] = _0x381427.precision;
  }
  function _0xab6816(_0x34e455, _0x1db424, _0x5c3e15, _0x19bfd9) {
    var _0x14eb8b = _0x3f9476.getShaderSource(_0x1e1029.shaders[_0x34e455]);
    if (!_0x14eb8b) {
      return;
    }
    var _0x3371b8 = _0x1db424 > 0 && _0x19bfd9 ? _0x16748b(_0x14eb8b, _0x19bfd9, _0x1db424) : 0;
    if (_0x5c3e15) {
      _0x237516[_0x5c3e15 >> 2] = _0x3371b8;
    }
  }
  function _0x1f779f(_0x13f329, _0x37ce71, _0x1e6c30) {
    if (!_0x1e6c30) {
      _0x1e1029.recordError(1281);
      return;
    }
    if (_0x37ce71 == 35716) {
      var _0x449131 = _0x3f9476.getShaderInfoLog(_0x1e1029.shaders[_0x13f329]);
      if (_0x449131 === null) {
        _0x449131 = "(unknown error)";
      }
      var _0x2f4a56 = _0x449131 ? _0x449131.length + 1 : 0;
      _0x237516[_0x1e6c30 >> 2] = _0x2f4a56;
    } else if (_0x37ce71 == 35720) {
      var _0x59213d = _0x3f9476.getShaderSource(_0x1e1029.shaders[_0x13f329]);
      var _0x32654f = _0x59213d ? _0x59213d.length + 1 : 0;
      _0x237516[_0x1e6c30 >> 2] = _0x32654f;
    } else {
      _0x237516[_0x1e6c30 >> 2] = _0x3f9476.getShaderParameter(_0x1e1029.shaders[_0x13f329], _0x37ce71);
    }
  }
  function _0x139a76(_0x321f54) {
    var _0x42d537 = _0x1e1029.stringCache[_0x321f54];
    if (!_0x42d537) {
      switch (_0x321f54) {
        case 7939:
          var _0x349724 = _0x3f9476.getSupportedExtensions() || [];
          _0x349724 = _0x349724.concat(_0x349724.map(function (_0x1f5a32) {
            return "GL_" + _0x1f5a32;
          }));
          _0x42d537 = _0x3d27b6(_0x349724.join(" "));
          break;
        case 7936:
        case 7937:
        case 37445:
        case 37446:
          var _0x447e07 = _0x3f9476.getParameter(_0x321f54);
          if (!_0x447e07) {
            _0x1e1029.recordError(1280);
          }
          _0x42d537 = _0x447e07 && _0x3d27b6(_0x447e07);
          break;
        case 7938:
          var _0x5c7397 = _0x3f9476.getParameter(7938);
          if (_0x1e1029.currentContext.version >= 2) {
            _0x5c7397 = "OpenGL ES 3.0 (" + _0x5c7397 + ")";
          } else {
            _0x5c7397 = "OpenGL ES 2.0 (" + _0x5c7397 + ")";
          }
          _0x42d537 = _0x3d27b6(_0x5c7397);
          break;
        case 35724:
          var _0xa6ca3f = _0x3f9476.getParameter(35724);
          var _0x41a869 = /^WebGL GLSL ES ([0-9]\.[0-9][0-9]?)(?:$| .*)/;
          var _0x561d42 = _0xa6ca3f.match(_0x41a869);
          if (_0x561d42 !== null) {
            if (_0x561d42[1].length == 3) {
              _0x561d42[1] = _0x561d42[1] + "0";
            }
            _0xa6ca3f = "OpenGL ES GLSL ES " + _0x561d42[1] + " (" + _0xa6ca3f + ")";
          }
          _0x42d537 = _0x3d27b6(_0xa6ca3f);
          break;
        default:
          _0x1e1029.recordError(1280);
      }
      _0x1e1029.stringCache[_0x321f54] = _0x42d537;
    }
    return _0x42d537;
  }
  function _0xa7fe52(_0x2b1d88, _0x495f0e) {
    if (_0x1e1029.currentContext.version < 2) {
      _0x1e1029.recordError(1282);
      return 0;
    }
    var _0x45d0a8 = _0x1e1029.stringiCache[_0x2b1d88];
    if (_0x45d0a8) {
      if (_0x495f0e < 0 || _0x495f0e >= _0x45d0a8.length) {
        _0x1e1029.recordError(1281);
        return 0;
      }
      return _0x45d0a8[_0x495f0e];
    }
    switch (_0x2b1d88) {
      case 7939:
        var _0x5b1ab8 = _0x3f9476.getSupportedExtensions() || [];
        _0x5b1ab8 = _0x5b1ab8.concat(_0x5b1ab8.map(function (_0x5a0ea8) {
          return "GL_" + _0x5a0ea8;
        }));
        _0x5b1ab8 = _0x5b1ab8.map(function (_0xb0f13b) {
          return _0x3d27b6(_0xb0f13b);
        });
        _0x45d0a8 = _0x1e1029.stringiCache[_0x2b1d88] = _0x5b1ab8;
        if (_0x495f0e < 0 || _0x495f0e >= _0x45d0a8.length) {
          _0x1e1029.recordError(1281);
          return 0;
        }
        return _0x45d0a8[_0x495f0e];
      default:
        _0x1e1029.recordError(1280);
        return 0;
    }
  }
  function _0x40a010(_0x518353, _0x2b29d3, _0xb90436) {
    if (!_0xb90436) {
      _0x1e1029.recordError(1281);
      return;
    }
    _0x237516[_0xb90436 >> 2] = _0x3f9476.getTexParameter(_0x518353, _0x2b29d3);
  }
  function _0x3e6e87(_0x2873a9, _0x5508a8) {
    return _0x3f9476.getUniformBlockIndex(_0x1e1029.programs[_0x2873a9], _0x2aa540(_0x5508a8));
  }
  function _0x1b16c0(_0x11f4da, _0x1f616c, _0x102f16, _0xe0d91b) {
    if (!_0xe0d91b) {
      _0x1e1029.recordError(1281);
      return;
    }
    if (_0x1f616c > 0 && (_0x102f16 == 0 || _0xe0d91b == 0)) {
      _0x1e1029.recordError(1281);
      return;
    }
    _0x11f4da = _0x1e1029.programs[_0x11f4da];
    var _0x5a596e = [];
    for (var _0x560166 = 0; _0x560166 < _0x1f616c; _0x560166++) {
      _0x5a596e.push(_0x2aa540(_0x237516[_0x102f16 + _0x560166 * 4 >> 2]));
    }
    var _0x1fa707 = _0x3f9476.getUniformIndices(_0x11f4da, _0x5a596e);
    if (!_0x1fa707) {
      return;
    }
    var _0x39daa4 = _0x1fa707.length;
    for (var _0x560166 = 0; _0x560166 < _0x39daa4; _0x560166++) {
      _0x237516[_0xe0d91b + _0x560166 * 4 >> 2] = _0x1fa707[_0x560166];
    }
  }
  function _0x5dab25(_0x29a59d, _0x293745) {
    function _0x58f4e0(_0x5417d9) {
      return _0x5417d9.slice(-1) == "]" && _0x5417d9.lastIndexOf("[");
    }
    _0x293745 = _0x2aa540(_0x293745);
    if (_0x29a59d = _0x1e1029.programs[_0x29a59d]) {
      var _0x7f8fa9 = _0x29a59d.uniformLocsById;
      var _0x401ee2 = _0x29a59d.uniformSizeAndIdsByName;
      var _0x451183;
      var _0x4266c2;
      var _0x5d1992 = 0;
      var _0x40caec = _0x293745;
      var _0x3852da = _0x58f4e0(_0x293745);
      if (!_0x7f8fa9) {
        _0x29a59d.uniformLocsById = _0x7f8fa9 = {};
        _0x29a59d.uniformArrayNamesById = {};
        for (_0x451183 = 0; _0x451183 < _0x3f9476.getProgramParameter(_0x29a59d, 35718); ++_0x451183) {
          var _0x2d96ce = _0x3f9476.getActiveUniform(_0x29a59d, _0x451183);
          var _0xce0e55 = _0x2d96ce.name;
          var _0x5eedd8 = _0x2d96ce.size;
          var _0x17bac1 = _0x58f4e0(_0xce0e55);
          var _0x320b72 = _0x17bac1 > 0 ? _0xce0e55.slice(0, _0x17bac1) : _0xce0e55;
          var _0x23f74a = _0x401ee2[_0x320b72] ? _0x401ee2[_0x320b72][1] : _0x29a59d.uniformIdCounter;
          _0x29a59d.uniformIdCounter = Math.max(_0x23f74a + _0x5eedd8, _0x29a59d.uniformIdCounter);
          _0x401ee2[_0x320b72] = [_0x5eedd8, _0x23f74a];
          for (_0x4266c2 = 0; _0x4266c2 < _0x5eedd8; ++_0x4266c2) {
            _0x7f8fa9[_0x23f74a] = _0x4266c2;
            _0x29a59d.uniformArrayNamesById[_0x23f74a++] = _0x320b72;
          }
        }
      }
      if (_0x3852da > 0) {
        _0x5d1992 = _0x63c89e(_0x293745.slice(_0x3852da + 1)) >>> 0;
        _0x40caec = _0x293745.slice(0, _0x3852da);
      }
      var _0x495f53 = _0x401ee2[_0x40caec];
      if (_0x495f53 && _0x5d1992 < _0x495f53[0]) {
        _0x5d1992 += _0x495f53[1];
        if (_0x7f8fa9[_0x5d1992] = _0x7f8fa9[_0x5d1992] || _0x3f9476.getUniformLocation(_0x29a59d, _0x293745)) {
          return _0x5d1992;
        }
      }
    } else {
      _0x1e1029.recordError(1281);
    }
    return -1;
  }
  function _0x252777(_0x3cd71f) {
    var _0x41355a = _0x3f9476.currentProgram;
    if (_0x41355a) {
      var _0x579b6a = _0x41355a.uniformLocsById[_0x3cd71f];
      if (typeof _0x579b6a === "number") {
        _0x41355a.uniformLocsById[_0x3cd71f] = _0x579b6a = _0x3f9476.getUniformLocation(_0x41355a, _0x41355a.uniformArrayNamesById[_0x3cd71f] + (_0x579b6a > 0 ? "[" + _0x579b6a + "]" : ""));
      }
      return _0x579b6a;
    } else {
      _0x1e1029.recordError(1282);
    }
  }
  function _0x451dc9(_0xfbbb9d, _0x4104c2, _0xac890f, _0x2daa8f) {
    if (!_0xac890f) {
      _0x1e1029.recordError(1281);
      return;
    }
    _0xfbbb9d = _0x1e1029.programs[_0xfbbb9d];
    var _0x28b48a = _0x3f9476.getUniform(_0xfbbb9d, _0x252777(_0x4104c2));
    if (typeof _0x28b48a == "number" || typeof _0x28b48a == "boolean") {
      switch (_0x2daa8f) {
        case 0:
          _0x237516[_0xac890f >> 2] = _0x28b48a;
          break;
        case 2:
          _0x29b84b[_0xac890f >> 2] = _0x28b48a;
          break;
      }
    } else {
      for (var _0x4009ae = 0; _0x4009ae < _0x28b48a.length; _0x4009ae++) {
        switch (_0x2daa8f) {
          case 0:
            _0x237516[_0xac890f + _0x4009ae * 4 >> 2] = _0x28b48a[_0x4009ae];
            break;
          case 2:
            _0x29b84b[_0xac890f + _0x4009ae * 4 >> 2] = _0x28b48a[_0x4009ae];
            break;
        }
      }
    }
  }
  function _0x3695c2(_0x3c527b, _0x7c0303, _0x448a6c) {
    _0x451dc9(_0x3c527b, _0x7c0303, _0x448a6c, 0);
  }
  function _0x76f681(_0x153e7e, _0x1272c4, _0x224624, _0x153f04) {
    if (!_0x224624) {
      _0x1e1029.recordError(1281);
      return;
    }
    if (_0x1e1029.currentContext.clientBuffers[_0x153e7e].enabled) {
      _0x4677f2("glGetVertexAttrib*v on client-side array: not supported, bad data returned");
    }
    var _0x26c8b7 = _0x3f9476.getVertexAttrib(_0x153e7e, _0x1272c4);
    if (_0x1272c4 == 34975) {
      _0x237516[_0x224624 >> 2] = _0x26c8b7 && _0x26c8b7.name;
    } else if (typeof _0x26c8b7 == "number" || typeof _0x26c8b7 == "boolean") {
      switch (_0x153f04) {
        case 0:
          _0x237516[_0x224624 >> 2] = _0x26c8b7;
          break;
        case 2:
          _0x29b84b[_0x224624 >> 2] = _0x26c8b7;
          break;
        case 5:
          _0x237516[_0x224624 >> 2] = Math.fround(_0x26c8b7);
          break;
      }
    } else {
      for (var _0x26362f = 0; _0x26362f < _0x26c8b7.length; _0x26362f++) {
        switch (_0x153f04) {
          case 0:
            _0x237516[_0x224624 + _0x26362f * 4 >> 2] = _0x26c8b7[_0x26362f];
            break;
          case 2:
            _0x29b84b[_0x224624 + _0x26362f * 4 >> 2] = _0x26c8b7[_0x26362f];
            break;
          case 5:
            _0x237516[_0x224624 + _0x26362f * 4 >> 2] = Math.fround(_0x26c8b7[_0x26362f]);
            break;
        }
      }
    }
  }
  function _0x5c2153(_0x102b58, _0xbba201, _0x55b28f) {
    _0x76f681(_0x102b58, _0xbba201, _0x55b28f, 5);
  }
  function _0x4b1578(_0x1d5feb, _0x5bab74, _0x427e44) {
    var _0x5c37b8 = _0x28708e[_0x5bab74];
    for (var _0x144425 = 0; _0x144425 < _0x5bab74; _0x144425++) {
      _0x5c37b8[_0x144425] = _0x237516[_0x427e44 + _0x144425 * 4 >> 2];
    }
    _0x3f9476.invalidateFramebuffer(_0x1d5feb, _0x5c37b8);
  }
  function _0x263b52(_0x13c742) {
    return _0x3f9476.isEnabled(_0x13c742);
  }
  function _0x3265bb(_0x2c3deb) {
    var _0x466697 = _0x1e1029.vaos[_0x2c3deb];
    if (!_0x466697) {
      return 0;
    }
    return _0x3f9476.isVertexArray(_0x466697);
  }
  function _0x1ea4c8(_0x10e2a6) {
    _0x10e2a6 = _0x1e1029.programs[_0x10e2a6];
    _0x3f9476.linkProgram(_0x10e2a6);
    _0x10e2a6.uniformLocsById = 0;
    _0x10e2a6.uniformSizeAndIdsByName = {};
    [_0x10e2a6.vs, _0x10e2a6.fs].forEach(function (_0x254869) {
      Object.keys(_0x254869.explicitUniformLocations).forEach(function (_0x26d029) {
        var _0x25e8cd = _0x254869.explicitUniformLocations[_0x26d029];
        _0x10e2a6.uniformSizeAndIdsByName[_0x26d029] = [1, _0x25e8cd];
        _0x10e2a6.uniformIdCounter = Math.max(_0x10e2a6.uniformIdCounter, _0x25e8cd + 1);
      });
    });
    function _0x330afa(_0x1c17ec, _0x18a7b9) {
      Object.keys(_0x18a7b9).forEach(function (_0x2d8b59) {
        _0x1c17ec[_0x2d8b59] = _0x18a7b9[_0x2d8b59];
      });
    }
    _0x10e2a6.explicitUniformBindings = {};
    _0x10e2a6.explicitSamplerBindings = {};
    [_0x10e2a6.vs, _0x10e2a6.fs].forEach(function (_0x4a2796) {
      _0x330afa(_0x10e2a6.explicitUniformBindings, _0x4a2796.explicitUniformBindings);
      _0x330afa(_0x10e2a6.explicitSamplerBindings, _0x4a2796.explicitSamplerBindings);
    });
    _0x10e2a6.explicitProgramBindingsApplied = 0;
  }
  function _0x4671c8(_0x17c746, _0x3587b9, _0x3c960e, _0x18dc97) {
    if (_0x18dc97 != 26 && _0x18dc97 != 10) {
      _0x4677f2("glMapBufferRange is only supported when access is MAP_WRITE|INVALIDATE_BUFFER");
      return 0;
    }
    if (!_0x3082d4(_0x17c746)) {
      _0x1e1029.recordError(1280);
      _0x4677f2("GL_INVALID_ENUM in glMapBufferRange");
      return 0;
    }
    var _0x489675 = _0x4fa9c0(_0x3c960e);
    if (!_0x489675) {
      return 0;
    }
    _0x1e1029.mappedBuffers[_0x29405c(_0x17c746)] = {
      offset: _0x3587b9,
      length: _0x3c960e,
      mem: _0x489675,
      access: _0x18dc97
    };
    return _0x489675;
  }
  function _0x44df17(_0x429a80, _0x2c2006) {
    if (_0x429a80 == 3317) {
      _0x1e1029.unpackAlignment = _0x2c2006;
    }
    _0x3f9476.pixelStorei(_0x429a80, _0x2c2006);
  }
  function _0x4ea961(_0x326711, _0xf1e2da) {
    _0x3f9476.polygonOffset(_0x326711, _0xf1e2da);
  }
  function _0x134b08(_0x268aed, _0x4ec4e7, _0x213dd4, _0x4cb34b) {
    _0x1e1029.recordError(1280);
  }
  function _0x2aa232(_0x49264c, _0x14d24b, _0x7f860f) {
    _0x1e1029.recordError(1280);
  }
  function _0x9845c8(_0x223128) {
    _0x3f9476.readBuffer(_0x223128);
  }
  function _0x5c8e97(_0x1f582a, _0x2a8059, _0x407fc2, _0x57db71) {
    function _0x48f002(_0x4e3b62, _0x571a00) {
      return _0x4e3b62 + _0x571a00 - 1 & -_0x571a00;
    }
    var _0x25abbc = _0x1f582a * _0x407fc2;
    var _0x1afc18 = _0x48f002(_0x25abbc, _0x57db71);
    return _0x2a8059 * _0x1afc18;
  }
  function _0xd6baf7(_0x1f373b) {
    var _0x5e8917 = {
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
    return _0x5e8917[_0x1f373b - 6402] || 1;
  }
  function _0x15a44e(_0x241f89) {
    _0x241f89 -= 5120;
    if (_0x241f89 == 0) {
      return _0x1cc374;
    }
    if (_0x241f89 == 1) {
      return _0x312996;
    }
    if (_0x241f89 == 2) {
      return _0x1694cb;
    }
    if (_0x241f89 == 4) {
      return _0x237516;
    }
    if (_0x241f89 == 6) {
      return _0x29b84b;
    }
    if (_0x241f89 == 5 || _0x241f89 == 28922 || _0x241f89 == 28520 || _0x241f89 == 30779 || _0x241f89 == 30782) {
      return _0x599e77;
    }
    return _0x341180;
  }
  function _0x26454c(_0x33bcaa) {
    return 31 - Math.clz32(_0x33bcaa.BYTES_PER_ELEMENT);
  }
  function _0x1fbfc4(_0x17f8b8, _0x3adaeb, _0x2ded7b, _0x4a73ab, _0x30a252, _0x217b0e) {
    var _0x485370 = _0x15a44e(_0x17f8b8);
    var _0x51fe58 = _0x26454c(_0x485370);
    var _0x4d8269 = 1 << _0x51fe58;
    var _0x1777a8 = _0xd6baf7(_0x3adaeb) * _0x4d8269;
    var _0x4b2b41 = _0x5c8e97(_0x2ded7b, _0x4a73ab, _0x1777a8, _0x1e1029.unpackAlignment);
    return _0x485370.subarray(_0x30a252 >> _0x51fe58, _0x30a252 + _0x4b2b41 >> _0x51fe58);
  }
  function _0x332dca(_0x1dc081, _0x443cc4, _0xfd2e44, _0x51c899, _0x35cbc3, _0x30d6ef, _0x572dbb) {
    if (_0x1e1029.currentContext.version >= 2) {
      if (_0x3f9476.currentPixelPackBufferBinding) {
        _0x3f9476.readPixels(_0x1dc081, _0x443cc4, _0xfd2e44, _0x51c899, _0x35cbc3, _0x30d6ef, _0x572dbb);
      } else {
        var _0x1075a9 = _0x15a44e(_0x30d6ef);
        _0x3f9476.readPixels(_0x1dc081, _0x443cc4, _0xfd2e44, _0x51c899, _0x35cbc3, _0x30d6ef, _0x1075a9, _0x572dbb >> _0x26454c(_0x1075a9));
      }
      return;
    }
    var _0x122795 = _0x1fbfc4(_0x30d6ef, _0x35cbc3, _0xfd2e44, _0x51c899, _0x572dbb, _0x35cbc3);
    if (!_0x122795) {
      _0x1e1029.recordError(1280);
      return;
    }
    _0x3f9476.readPixels(_0x1dc081, _0x443cc4, _0xfd2e44, _0x51c899, _0x35cbc3, _0x30d6ef, _0x122795);
  }
  function _0x1de4e7(_0x2bc362, _0x413d9a, _0x18e900, _0x1ef451) {
    _0x3f9476.renderbufferStorage(_0x2bc362, _0x413d9a, _0x18e900, _0x1ef451);
  }
  function _0x47644a(_0x42518a, _0x532257, _0x214554, _0xf5764c, _0x58ee34) {
    _0x3f9476.renderbufferStorageMultisample(_0x42518a, _0x532257, _0x214554, _0xf5764c, _0x58ee34);
  }
  function _0x120290(_0x247faa, _0x3d4e3a, _0x24b4e2) {
    _0x3f9476.samplerParameteri(_0x1e1029.samplers[_0x247faa], _0x3d4e3a, _0x24b4e2);
  }
  function _0x2d8c67(_0x3da78a, _0x1a0bed, _0x12b87a, _0x13593e) {
    _0x3f9476.scissor(_0x3da78a, _0x1a0bed, _0x12b87a, _0x13593e);
  }
  function _0x133c6a(_0x5dca84, _0x1e44df, _0x2e3e9c = "(", _0x1ba5ce = ")") {
    var _0x47510d = 0;
    for (; _0x1e44df < _0x5dca84.length; ++_0x1e44df) {
      if (_0x5dca84[_0x1e44df] == _0x2e3e9c) {
        ++_0x47510d;
      }
      if (_0x5dca84[_0x1e44df] == _0x1ba5ce && --_0x47510d == 0) {
        return _0x1e44df;
      }
    }
  }
  function _0x4b05f7(_0x3bfcca) {
    var _0x5662c1 = 0;
    var _0x255ccb = _0x3bfcca.length;
    var _0x5c4249 = "";
    var _0x43fb94 = [1];
    var _0x60d63c = {
      defined: function (_0x562fc9) {
        if (_0x60d63c[_0x562fc9[0]]) {
          return 1;
        } else {
          return 0;
        }
      },
      GL_FRAGMENT_PRECISION_HIGH: function () {
        return 1;
      }
    };
    function _0x599825(_0x325455, _0xdd1476) {
      return !(_0x325455.charCodeAt(_0xdd1476) > 32);
    }
    function _0x59fd69(_0x56890b, _0x67f2e2) {
      while (!_0x599825(_0x56890b, _0x67f2e2)) {
        ++_0x67f2e2;
      }
      return _0x67f2e2;
    }
    function _0xde527(_0x4ce2be, _0x38b1e5) {
      var _0x26c17b = _0x4ce2be.charCodeAt(_0x38b1e5);
      if (_0x26c17b > 32) {
        if (_0x26c17b < 48) {
          return 1;
        }
        if (_0x26c17b < 58) {
          return 2;
        }
        if (_0x26c17b < 65) {
          return 1;
        }
        if (_0x26c17b < 91 || _0x26c17b == 95) {
          return 3;
        }
        if (_0x26c17b < 97) {
          return 1;
        }
        if (_0x26c17b < 123) {
          return 3;
        }
        return 1;
      }
      if (_0x26c17b < 33) {
        return 0;
      } else {
        return 4;
      }
    }
    function _0x3cdb6d(_0x502756, _0x47c1db) {
      var _0x125fdf = [];
      var _0x2a5f76 = _0x502756.length;
      for (var _0x194869 = 0; _0x194869 <= _0x2a5f76; ++_0x194869) {
        var _0x520329 = _0xde527(_0x502756, _0x194869);
        if (_0x520329 == 2 || _0x520329 == 3) {
          for (var _0x535913 = _0x194869 + 1; _0x535913 <= _0x2a5f76; ++_0x535913) {
            var _0xc7a948 = _0xde527(_0x502756, _0x535913);
            if (_0xc7a948 != _0x520329 && (_0xc7a948 != 2 || _0x520329 != 3)) {
              _0x125fdf.push(_0x502756.substring(_0x194869, _0x535913));
              _0x194869 = _0x535913 - 1;
              break;
            }
          }
        } else if (_0x520329 == 1) {
          var _0xf02e9 = _0x502756.substr(_0x194869, 2);
          if (["<=", ">=", "==", "!=", "&&", "||"].includes(_0xf02e9)) {
            _0x125fdf.push(_0xf02e9);
            ++_0x194869;
          } else {
            _0x125fdf.push(_0x502756[_0x194869]);
          }
        }
      }
      return _0x125fdf;
    }
    function _0x3a1a76(_0x27e07a, _0x21902e, _0x39b3bd = _0x27e07a.length) {
      var _0xd8597b = _0x27e07a.length;
      var _0x249bbf = "";
      for (var _0x27380e = _0x21902e; _0x27380e < _0x39b3bd; ++_0x27380e) {
        var _0x69019 = _0xde527(_0x27e07a, _0x27380e);
        if (_0x69019 == 3) {
          for (var _0x3c2489 = _0x27380e + 1; _0x3c2489 <= _0x39b3bd; ++_0x3c2489) {
            var _0x2bd69f = _0xde527(_0x27e07a, _0x3c2489);
            if (_0x2bd69f != 2 && _0x2bd69f != 3) {
              var _0x25a5f2 = _0x27e07a.substring(_0x27380e, _0x3c2489);
              var _0x4c8966 = _0x60d63c[_0x25a5f2];
              if (_0x4c8966) {
                var _0x278e28 = _0x27e07a.substring(_0x21902e, _0x27380e);
                if (_0x4c8966.length && _0x27e07a[_0x3c2489] == "(") {
                  var _0x22f825 = _0x133c6a(_0x27e07a, _0x3c2489);
                  _0x278e28 += _0x4c8966(_0x27e07a.substring(_0x3c2489 + 1, _0x22f825).split(",")) + _0x27e07a.substring(_0x22f825 + 1, _0x39b3bd);
                } else {
                  _0x278e28 += _0x4c8966() + _0x27e07a.substring(_0x3c2489, _0x39b3bd);
                }
                return _0x3a1a76(_0x278e28, 0);
              } else {
                _0x249bbf += _0x25a5f2;
                _0x27380e = _0x3c2489 - 1;
                break;
              }
            }
          }
        } else {
          _0x249bbf += _0x27e07a[_0x27380e];
        }
      }
      return _0x249bbf;
    }
    function _0x12019c(_0x25e36a) {
      while (_0x25e36a.length > 1 || typeof _0x25e36a[0] != "function") {
        _0x25e36a = function (_0x70cd53) {
          var _0x25e333;
          var _0x3e427b;
          var _0xd5defb;
          var _0x550cab = -2;
          for (_0x3e427b = 0; _0x3e427b < _0x70cd53.length; ++_0x3e427b) {
            if ((_0xd5defb = ["*", "/", "+", "-", "!", "<", "<=", ">", ">=", "==", "!=", "&&", "||", "("].indexOf(_0x70cd53[_0x3e427b])) > _0x550cab) {
              _0x25e333 = _0x3e427b;
              _0x550cab = _0xd5defb;
            }
          }
          if (_0x550cab == 13) {
            var _0x3e427b = _0x133c6a(_0x70cd53, _0x25e333);
            if (_0x3e427b) {
              _0x70cd53.splice(_0x25e333, _0x3e427b + 1 - _0x25e333, _0x12019c(_0x70cd53.slice(_0x25e333 + 1, _0x3e427b)));
              return _0x70cd53;
            }
          }
          if (_0x550cab == 4) {
            _0x25e333 = _0x70cd53.lastIndexOf("!");
            var _0x288bdf = _0x12019c(_0x70cd53.slice(_0x25e333 + 1, _0x25e333 + 2));
            _0x70cd53.splice(_0x25e333, 2, function () {
              return !_0x288bdf();
            });
            return _0x70cd53;
          }
          if (_0x550cab >= 0) {
            var _0x587056 = _0x12019c(_0x70cd53.slice(0, _0x25e333));
            var _0x3b27a1 = _0x12019c(_0x70cd53.slice(_0x25e333 + 1));
            switch (_0x70cd53[_0x25e333]) {
              case "&&":
                return [function () {
                  return _0x587056() && _0x3b27a1();
                }];
              case "||":
                return [function () {
                  return _0x587056() || _0x3b27a1();
                }];
              case "==":
                return [function () {
                  return _0x587056() == _0x3b27a1();
                }];
              case "!=":
                return [function () {
                  return _0x587056() != _0x3b27a1();
                }];
              case "<":
                return [function () {
                  return _0x587056() < _0x3b27a1();
                }];
              case "<=":
                return [function () {
                  return _0x587056() <= _0x3b27a1();
                }];
              case ">":
                return [function () {
                  return _0x587056() > _0x3b27a1();
                }];
              case ">=":
                return [function () {
                  return _0x587056() >= _0x3b27a1();
                }];
              case "+":
                return [function () {
                  return _0x587056() + _0x3b27a1();
                }];
              case "-":
                return [function () {
                  return _0x587056() - _0x3b27a1();
                }];
              case "*":
                return [function () {
                  return _0x587056() * _0x3b27a1();
                }];
              case "/":
                return [function () {
                  return Math.floor(_0x587056() / _0x3b27a1());
                }];
            }
          }
          var _0x5146d0 = _0x63c89e(_0x70cd53[_0x25e333]);
          return [function () {
            return _0x5146d0;
          }];
        }(_0x25e36a);
      }
      return _0x25e36a[0];
    }
    for (; _0x5662c1 < _0x255ccb; ++_0x5662c1) {
      var _0x209973 = _0x5662c1;
      _0x5662c1 = _0x3bfcca.indexOf("\n", _0x5662c1);
      if (_0x5662c1 < 0) {
        _0x5662c1 = _0x255ccb;
      }
      for (var _0x48ee31 = _0x209973; _0x48ee31 < _0x5662c1 && _0x599825(_0x3bfcca, _0x48ee31); ++_0x48ee31);
      var _0x76fd18 = _0x43fb94[_0x43fb94.length - 1];
      if (_0x3bfcca[_0x48ee31] != "#") {
        if (_0x76fd18) {
          _0x5c4249 += _0x3a1a76(_0x3bfcca, _0x209973, _0x5662c1) + "\n";
        }
        continue;
      }
      var _0x568152 = _0x59fd69(_0x3bfcca, _0x48ee31);
      var _0x573284 = _0x3bfcca.substring(_0x48ee31 + 1, _0x568152);
      var _0x25a16c = _0x3bfcca.substring(_0x568152, _0x5662c1).trim();
      switch (_0x573284) {
        case "if":
          var _0x3287a2 = _0x3cdb6d(_0x3a1a76(_0x25a16c, 0));
          var _0x375155 = _0x12019c(_0x3287a2);
          var _0x2b3199 = _0x375155();
          _0x43fb94.push(!!_0x2b3199 * _0x43fb94[_0x43fb94.length - 1]);
          break;
        case "ifdef":
          _0x43fb94.push(!!_0x60d63c[_0x25a16c] * _0x43fb94[_0x43fb94.length - 1]);
          break;
        case "ifndef":
          _0x43fb94.push(!_0x60d63c[_0x25a16c] * _0x43fb94[_0x43fb94.length - 1]);
          break;
        case "else":
          _0x43fb94[_0x43fb94.length - 1] = 1 - _0x43fb94[_0x43fb94.length - 1];
          break;
        case "endif":
          _0x43fb94.pop();
          break;
        case "define":
          if (_0x76fd18) {
            var _0x497497 = _0x25a16c.indexOf("(");
            var _0x1478ec = _0x59fd69(_0x25a16c, 0);
            if (_0x1478ec < _0x497497) {
              _0x497497 = 0;
            }
            if (_0x497497 > 0) {
              var _0x30d31f = _0x25a16c.indexOf(")", _0x497497);
              let _0x50e844 = _0x25a16c.substring(_0x497497 + 1, _0x30d31f).split(",").map(_0x4332e0 => _0x4332e0.trim());
              let _0x24e163 = _0x3cdb6d(_0x25a16c.substring(_0x30d31f + 1).trim());
              _0x60d63c[_0x25a16c.substring(0, _0x497497)] = function (_0x44f5aa) {
                var _0x22feb5 = "";
                _0x24e163.forEach(_0x18ffec => {
                  var _0x467028 = _0x50e844.indexOf(_0x18ffec);
                  _0x22feb5 += _0x467028 >= 0 ? _0x44f5aa[_0x467028] : _0x18ffec;
                });
                return _0x22feb5;
              };
            } else {
              let _0x4f9009 = _0x3a1a76(_0x25a16c.substring(_0x1478ec + 1).trim(), 0);
              _0x60d63c[_0x25a16c.substring(0, _0x1478ec)] = function () {
                return _0x4f9009;
              };
            }
          }
          break;
        case "undef":
          if (_0x76fd18) {
            delete _0x60d63c[_0x25a16c];
          }
          break;
        default:
          if (_0x573284 != "version" && _0x573284 != "pragma" && _0x573284 != "extension") {}
          _0x5c4249 += _0x3a1a76(_0x3bfcca, _0x209973, _0x5662c1) + "\n";
      }
    }
    return _0x5c4249;
  }
  function _0x1ab3ac(_0x473d6c) {
    var _0xf2389f = 0;
    var _0x544d63 = "";
    var _0x3445c1;
    var _0x244c85;
    var _0x4cd6b9 = _0x473d6c.length;
    for (; _0xf2389f < _0x4cd6b9; ++_0xf2389f) {
      _0x3445c1 = _0x473d6c[_0xf2389f];
      if (_0x3445c1 == "/") {
        _0x244c85 = _0x473d6c[_0xf2389f + 1];
        if (_0x244c85 == "/") {
          while (_0xf2389f < _0x4cd6b9 && _0x473d6c[_0xf2389f + 1] != "\n") {
            ++_0xf2389f;
          }
        } else if (_0x244c85 == "*") {
          while (_0xf2389f < _0x4cd6b9 && (_0x473d6c[_0xf2389f - 1] != "*" || _0x473d6c[_0xf2389f] != "/")) {
            ++_0xf2389f;
          }
        } else {
          _0x544d63 += _0x3445c1;
        }
      } else {
        _0x544d63 += _0x3445c1;
      }
    }
    return _0x544d63;
  }
  function _0x53a8ae(_0x2a08fc, _0x74b31b, _0x5f18d6, _0x56b60d) {
    var _0xb01736 = _0x1e1029.getSource(_0x2a08fc, _0x74b31b, _0x5f18d6, _0x56b60d);
    _0xb01736 = _0x4b05f7(_0x1ab3ac(_0xb01736));
    var _0x7721fd = /layout\s*\(\s*location\s*=\s*(-?\d+)\s*\)\s*(uniform\s+((lowp|mediump|highp)\s+)?\w+\s+(\w+))/g;
    var _0x4e510b = {};
    var _0x4292b3;
    while (_0x4292b3 = _0x7721fd.exec(_0xb01736)) {
      _0x4e510b[_0x4292b3[5]] = _0x63c89e(_0x4292b3[1]);
      if (!(_0x4e510b[_0x4292b3[5]] >= 0) || !(_0x4e510b[_0x4292b3[5]] < 1048576)) {
        console.error("Specified an out of range layout(location=x) directive \"" + _0x4e510b[_0x4292b3[5]] + "\"! (" + _0x4292b3[0] + ")");
        _0x1e1029.recordError(1281);
        return;
      }
    }
    _0xb01736 = _0xb01736.replace(_0x7721fd, "$2");
    _0x1e1029.shaders[_0x2a08fc].explicitUniformLocations = _0x4e510b;
    var _0x26243d = /layout\s*\(.*?binding\s*=\s*(-?\d+).*?\)\s*uniform\s+(\w+)\s+(\w+)?/g;
    var _0xeebfba = {};
    var _0x18809c = {};
    var _0x5b9b95;
    while (_0x5b9b95 = _0x26243d.exec(_0xb01736)) {
      var _0x24212a = 1;
      for (var _0x1062eb = _0x5b9b95.index; _0x1062eb < _0xb01736.length && _0xb01736[_0x1062eb] != ";"; ++_0x1062eb) {
        if (_0xb01736[_0x1062eb] == "[") {
          _0x24212a = _0x63c89e(_0xb01736.slice(_0x1062eb + 1));
          break;
        }
        if (_0xb01736[_0x1062eb] == "{") {
          _0x1062eb = _0x133c6a(_0xb01736, _0x1062eb, "{", "}") - 1;
        }
      }
      var _0x55d1ee = _0x63c89e(_0x5b9b95[1]);
      var _0x3e3387 = 34930;
      if (_0x5b9b95[3] && _0x5b9b95[2].indexOf("sampler") != -1) {
        _0xeebfba[_0x5b9b95[3]] = [_0x55d1ee, _0x24212a];
      } else {
        _0x3e3387 = 35374;
        _0x18809c[_0x5b9b95[2]] = [_0x55d1ee, _0x24212a];
      }
      var _0x1b8a23 = _0x3f9476.getParameter(_0x3e3387);
      if (!(_0x55d1ee >= 0) || !(_0x55d1ee + _0x24212a <= _0x1b8a23)) {
        console.error("Specified an out of range layout(binding=x) directive \"" + _0x55d1ee + "\"! (" + _0x5b9b95[0] + "). Valid range is [0, " + _0x1b8a23 + "-1]");
        _0x1e1029.recordError(1281);
        return;
      }
    }
    _0xb01736 = _0xb01736.replace(/layout\s*\(.*?binding\s*=\s*([-\d]+).*?\)/g, "");
    _0xb01736 = _0xb01736.replace(/(layout\s*\((.*?)),\s*binding\s*=\s*([-\d]+)\)/g, "$1)");
    _0xb01736 = _0xb01736.replace(/layout\s*\(\s*binding\s*=\s*([-\d]+)\s*,(.*?)\)/g, "layout($2)");
    _0x1e1029.shaders[_0x2a08fc].explicitSamplerBindings = _0xeebfba;
    _0x1e1029.shaders[_0x2a08fc].explicitUniformBindings = _0x18809c;
    _0x3f9476.shaderSource(_0x1e1029.shaders[_0x2a08fc], _0xb01736);
  }
  function _0x1997f7(_0x1195cb, _0x215e87, _0x241741, _0x22f8bd) {
    _0x3f9476.stencilFuncSeparate(_0x1195cb, _0x215e87, _0x241741, _0x22f8bd);
  }
  function _0x50ae82(_0x54c3fc) {
    _0x3f9476.stencilMask(_0x54c3fc);
  }
  function _0x10b734(_0x20f9b5, _0x2eef1c, _0x421e07, _0x46a349) {
    _0x3f9476.stencilOpSeparate(_0x20f9b5, _0x2eef1c, _0x421e07, _0x46a349);
  }
  function _0x43e65b(_0xc8656b, _0x520a4f, _0x437533, _0x3c9251, _0xee3550, _0x4fec02, _0x346fb9, _0x381d65, _0x55339b) {
    if (_0x1e1029.currentContext.version >= 2) {
      if (_0x3f9476.currentPixelUnpackBufferBinding) {
        _0x3f9476.texImage2D(_0xc8656b, _0x520a4f, _0x437533, _0x3c9251, _0xee3550, _0x4fec02, _0x346fb9, _0x381d65, _0x55339b);
      } else if (_0x55339b) {
        var _0x49dd42 = _0x15a44e(_0x381d65);
        _0x3f9476.texImage2D(_0xc8656b, _0x520a4f, _0x437533, _0x3c9251, _0xee3550, _0x4fec02, _0x346fb9, _0x381d65, _0x49dd42, _0x55339b >> _0x26454c(_0x49dd42));
      } else {
        _0x3f9476.texImage2D(_0xc8656b, _0x520a4f, _0x437533, _0x3c9251, _0xee3550, _0x4fec02, _0x346fb9, _0x381d65, null);
      }
      return;
    }
    _0x3f9476.texImage2D(_0xc8656b, _0x520a4f, _0x437533, _0x3c9251, _0xee3550, _0x4fec02, _0x346fb9, _0x381d65, _0x55339b ? _0x1fbfc4(_0x381d65, _0x346fb9, _0x3c9251, _0xee3550, _0x55339b, _0x437533) : null);
  }
  function _0x52b19f(_0x4d2844, _0x11179c, _0x272186, _0x825e42, _0x29b13d, _0x4fb523, _0x5e9921, _0xaa930f, _0x5d9485, _0x4a0e58) {
    if (_0x3f9476.currentPixelUnpackBufferBinding) {
      _0x3f9476.texImage3D(_0x4d2844, _0x11179c, _0x272186, _0x825e42, _0x29b13d, _0x4fb523, _0x5e9921, _0xaa930f, _0x5d9485, _0x4a0e58);
    } else if (_0x4a0e58) {
      var _0x368742 = _0x15a44e(_0x5d9485);
      _0x3f9476.texImage3D(_0x4d2844, _0x11179c, _0x272186, _0x825e42, _0x29b13d, _0x4fb523, _0x5e9921, _0xaa930f, _0x5d9485, _0x368742, _0x4a0e58 >> _0x26454c(_0x368742));
    } else {
      _0x3f9476.texImage3D(_0x4d2844, _0x11179c, _0x272186, _0x825e42, _0x29b13d, _0x4fb523, _0x5e9921, _0xaa930f, _0x5d9485, null);
    }
  }
  function _0x1dd50b(_0x28fad7, _0x5404b3, _0x2def85) {
    _0x3f9476.texParameterf(_0x28fad7, _0x5404b3, _0x2def85);
  }
  function _0x5e06df(_0x48b37f, _0xa748b4, _0x3d190a) {
    _0x3f9476.texParameteri(_0x48b37f, _0xa748b4, _0x3d190a);
  }
  function _0xbe96fa(_0x4c9238, _0x4fa260, _0x1d751f) {
    var _0x53984b = _0x237516[_0x1d751f >> 2];
    _0x3f9476.texParameteri(_0x4c9238, _0x4fa260, _0x53984b);
  }
  function _0x208d87(_0x399373, _0x36fddd, _0x5a61f2, _0x58e914, _0x387487) {
    _0x3f9476.texStorage2D(_0x399373, _0x36fddd, _0x5a61f2, _0x58e914, _0x387487);
  }
  function _0x552d00(_0x22e718, _0x70025f, _0x4c1541, _0x53b6f8, _0x119c0c, _0x3573bd) {
    _0x3f9476.texStorage3D(_0x22e718, _0x70025f, _0x4c1541, _0x53b6f8, _0x119c0c, _0x3573bd);
  }
  function _0x571779(_0x2c3720, _0x16c737, _0x529736, _0x2a8bd2, _0x86bbb4, _0x3b77cf, _0xf99f8, _0x1d096a, _0xc8825a) {
    if (_0x1e1029.currentContext.version >= 2) {
      if (_0x3f9476.currentPixelUnpackBufferBinding) {
        _0x3f9476.texSubImage2D(_0x2c3720, _0x16c737, _0x529736, _0x2a8bd2, _0x86bbb4, _0x3b77cf, _0xf99f8, _0x1d096a, _0xc8825a);
      } else if (_0xc8825a) {
        var _0x4ebc41 = _0x15a44e(_0x1d096a);
        _0x3f9476.texSubImage2D(_0x2c3720, _0x16c737, _0x529736, _0x2a8bd2, _0x86bbb4, _0x3b77cf, _0xf99f8, _0x1d096a, _0x4ebc41, _0xc8825a >> _0x26454c(_0x4ebc41));
      } else {
        _0x3f9476.texSubImage2D(_0x2c3720, _0x16c737, _0x529736, _0x2a8bd2, _0x86bbb4, _0x3b77cf, _0xf99f8, _0x1d096a, null);
      }
      return;
    }
    var _0x589f92 = null;
    if (_0xc8825a) {
      _0x589f92 = _0x1fbfc4(_0x1d096a, _0xf99f8, _0x86bbb4, _0x3b77cf, _0xc8825a, 0);
    }
    _0x3f9476.texSubImage2D(_0x2c3720, _0x16c737, _0x529736, _0x2a8bd2, _0x86bbb4, _0x3b77cf, _0xf99f8, _0x1d096a, _0x589f92);
  }
  function _0x191487(_0x31609c, _0x3a5c5e, _0x4484d7, _0xe10668, _0x5c27b6, _0x1da955, _0x1755e4, _0x2718ab, _0x1f78d2, _0xac060f, _0x5068c9) {
    if (_0x3f9476.currentPixelUnpackBufferBinding) {
      _0x3f9476.texSubImage3D(_0x31609c, _0x3a5c5e, _0x4484d7, _0xe10668, _0x5c27b6, _0x1da955, _0x1755e4, _0x2718ab, _0x1f78d2, _0xac060f, _0x5068c9);
    } else if (_0x5068c9) {
      var _0x3ab835 = _0x15a44e(_0xac060f);
      _0x3f9476.texSubImage3D(_0x31609c, _0x3a5c5e, _0x4484d7, _0xe10668, _0x5c27b6, _0x1da955, _0x1755e4, _0x2718ab, _0x1f78d2, _0xac060f, _0x3ab835, _0x5068c9 >> _0x26454c(_0x3ab835));
    } else {
      _0x3f9476.texSubImage3D(_0x31609c, _0x3a5c5e, _0x4484d7, _0xe10668, _0x5c27b6, _0x1da955, _0x1755e4, _0x2718ab, _0x1f78d2, _0xac060f, null);
    }
  }
  function _0x1e01cd(_0x2cf976, _0x35abf9, _0x284622, _0x56cbb1) {
    _0x2cf976 = _0x1e1029.programs[_0x2cf976];
    var _0x440cc8 = [];
    for (var _0x5474f8 = 0; _0x5474f8 < _0x35abf9; _0x5474f8++) {
      _0x440cc8.push(_0x2aa540(_0x237516[_0x284622 + _0x5474f8 * 4 >> 2]));
    }
    _0x3f9476.transformFeedbackVaryings(_0x2cf976, _0x440cc8, _0x56cbb1);
  }
  var _0x54910a = [];
  function _0x4ac638(_0x465992, _0x3f1cb9, _0x2a1315) {
    if (_0x1e1029.currentContext.version >= 2) {
      _0x3f9476.uniform1fv(_0x252777(_0x465992), _0x29b84b, _0x2a1315 >> 2, _0x3f1cb9);
      return;
    }
    if (_0x3f1cb9 <= 288) {
      var _0x23e730 = _0x54910a[_0x3f1cb9 - 1];
      for (var _0x490253 = 0; _0x490253 < _0x3f1cb9; ++_0x490253) {
        _0x23e730[_0x490253] = _0x29b84b[_0x2a1315 + _0x490253 * 4 >> 2];
      }
    } else {
      var _0x23e730 = _0x29b84b.subarray(_0x2a1315 >> 2, _0x2a1315 + _0x3f1cb9 * 4 >> 2);
    }
    _0x3f9476.uniform1fv(_0x252777(_0x465992), _0x23e730);
  }
  function _0x3e3e86(_0x1611e9, _0x53b387) {
    _0x3f9476.uniform1i(_0x252777(_0x1611e9), _0x53b387);
  }
  var _0x383d47 = [];
  function _0x2dde9e(_0x4d19df, _0x19ec25, _0x2039f7) {
    if (_0x1e1029.currentContext.version >= 2) {
      _0x3f9476.uniform1iv(_0x252777(_0x4d19df), _0x237516, _0x2039f7 >> 2, _0x19ec25);
      return;
    }
    if (_0x19ec25 <= 288) {
      var _0x2c17a2 = _0x383d47[_0x19ec25 - 1];
      for (var _0x57bbfe = 0; _0x57bbfe < _0x19ec25; ++_0x57bbfe) {
        _0x2c17a2[_0x57bbfe] = _0x237516[_0x2039f7 + _0x57bbfe * 4 >> 2];
      }
    } else {
      var _0x2c17a2 = _0x237516.subarray(_0x2039f7 >> 2, _0x2039f7 + _0x19ec25 * 4 >> 2);
    }
    _0x3f9476.uniform1iv(_0x252777(_0x4d19df), _0x2c17a2);
  }
  function _0x4fecf9(_0x22de57, _0x4df7e7, _0x44bf05) {
    _0x3f9476.uniform1uiv(_0x252777(_0x22de57), _0x599e77, _0x44bf05 >> 2, _0x4df7e7);
  }
  function _0x20952a(_0x33e8a1, _0x158c21, _0x47417b) {
    if (_0x1e1029.currentContext.version >= 2) {
      _0x3f9476.uniform2fv(_0x252777(_0x33e8a1), _0x29b84b, _0x47417b >> 2, _0x158c21 * 2);
      return;
    }
    if (_0x158c21 <= 144) {
      var _0x369584 = _0x54910a[_0x158c21 * 2 - 1];
      for (var _0x842398 = 0; _0x842398 < _0x158c21 * 2; _0x842398 += 2) {
        _0x369584[_0x842398] = _0x29b84b[_0x47417b + _0x842398 * 4 >> 2];
        _0x369584[_0x842398 + 1] = _0x29b84b[_0x47417b + (_0x842398 * 4 + 4) >> 2];
      }
    } else {
      var _0x369584 = _0x29b84b.subarray(_0x47417b >> 2, _0x47417b + _0x158c21 * 8 >> 2);
    }
    _0x3f9476.uniform2fv(_0x252777(_0x33e8a1), _0x369584);
  }
  function _0x5272f9(_0x3fd94c, _0x31d0b4, _0x3eb5ea) {
    if (_0x1e1029.currentContext.version >= 2) {
      _0x3f9476.uniform2iv(_0x252777(_0x3fd94c), _0x237516, _0x3eb5ea >> 2, _0x31d0b4 * 2);
      return;
    }
    if (_0x31d0b4 <= 144) {
      var _0x143379 = _0x383d47[_0x31d0b4 * 2 - 1];
      for (var _0x308333 = 0; _0x308333 < _0x31d0b4 * 2; _0x308333 += 2) {
        _0x143379[_0x308333] = _0x237516[_0x3eb5ea + _0x308333 * 4 >> 2];
        _0x143379[_0x308333 + 1] = _0x237516[_0x3eb5ea + (_0x308333 * 4 + 4) >> 2];
      }
    } else {
      var _0x143379 = _0x237516.subarray(_0x3eb5ea >> 2, _0x3eb5ea + _0x31d0b4 * 8 >> 2);
    }
    _0x3f9476.uniform2iv(_0x252777(_0x3fd94c), _0x143379);
  }
  function _0x40e083(_0x30e302, _0xfc8ec2, _0x1922b1) {
    _0x3f9476.uniform2uiv(_0x252777(_0x30e302), _0x599e77, _0x1922b1 >> 2, _0xfc8ec2 * 2);
  }
  function _0x5f22d0(_0x575bcb, _0x4120e4, _0x2050e0) {
    if (_0x1e1029.currentContext.version >= 2) {
      _0x3f9476.uniform3fv(_0x252777(_0x575bcb), _0x29b84b, _0x2050e0 >> 2, _0x4120e4 * 3);
      return;
    }
    if (_0x4120e4 <= 96) {
      var _0x2f81c4 = _0x54910a[_0x4120e4 * 3 - 1];
      for (var _0x480bd9 = 0; _0x480bd9 < _0x4120e4 * 3; _0x480bd9 += 3) {
        _0x2f81c4[_0x480bd9] = _0x29b84b[_0x2050e0 + _0x480bd9 * 4 >> 2];
        _0x2f81c4[_0x480bd9 + 1] = _0x29b84b[_0x2050e0 + (_0x480bd9 * 4 + 4) >> 2];
        _0x2f81c4[_0x480bd9 + 2] = _0x29b84b[_0x2050e0 + (_0x480bd9 * 4 + 8) >> 2];
      }
    } else {
      var _0x2f81c4 = _0x29b84b.subarray(_0x2050e0 >> 2, _0x2050e0 + _0x4120e4 * 12 >> 2);
    }
    _0x3f9476.uniform3fv(_0x252777(_0x575bcb), _0x2f81c4);
  }
  function _0x259bd6(_0x22c78c, _0x21a964, _0x42e9ea) {
    if (_0x1e1029.currentContext.version >= 2) {
      _0x3f9476.uniform3iv(_0x252777(_0x22c78c), _0x237516, _0x42e9ea >> 2, _0x21a964 * 3);
      return;
    }
    if (_0x21a964 <= 96) {
      var _0x5948aa = _0x383d47[_0x21a964 * 3 - 1];
      for (var _0x2fd34c = 0; _0x2fd34c < _0x21a964 * 3; _0x2fd34c += 3) {
        _0x5948aa[_0x2fd34c] = _0x237516[_0x42e9ea + _0x2fd34c * 4 >> 2];
        _0x5948aa[_0x2fd34c + 1] = _0x237516[_0x42e9ea + (_0x2fd34c * 4 + 4) >> 2];
        _0x5948aa[_0x2fd34c + 2] = _0x237516[_0x42e9ea + (_0x2fd34c * 4 + 8) >> 2];
      }
    } else {
      var _0x5948aa = _0x237516.subarray(_0x42e9ea >> 2, _0x42e9ea + _0x21a964 * 12 >> 2);
    }
    _0x3f9476.uniform3iv(_0x252777(_0x22c78c), _0x5948aa);
  }
  function _0x22ce9a(_0x117535, _0x4a66e8, _0x50a316) {
    _0x3f9476.uniform3uiv(_0x252777(_0x117535), _0x599e77, _0x50a316 >> 2, _0x4a66e8 * 3);
  }
  function _0x37ad0e(_0x310e2a, _0x56836, _0x4ce9a2) {
    if (_0x1e1029.currentContext.version >= 2) {
      _0x3f9476.uniform4fv(_0x252777(_0x310e2a), _0x29b84b, _0x4ce9a2 >> 2, _0x56836 * 4);
      return;
    }
    if (_0x56836 <= 72) {
      var _0x199e43 = _0x54910a[_0x56836 * 4 - 1];
      var _0xd12a55 = _0x29b84b;
      _0x4ce9a2 >>= 2;
      for (var _0x211d69 = 0; _0x211d69 < _0x56836 * 4; _0x211d69 += 4) {
        var _0x26af36 = _0x4ce9a2 + _0x211d69;
        _0x199e43[_0x211d69] = _0xd12a55[_0x26af36];
        _0x199e43[_0x211d69 + 1] = _0xd12a55[_0x26af36 + 1];
        _0x199e43[_0x211d69 + 2] = _0xd12a55[_0x26af36 + 2];
        _0x199e43[_0x211d69 + 3] = _0xd12a55[_0x26af36 + 3];
      }
    } else {
      var _0x199e43 = _0x29b84b.subarray(_0x4ce9a2 >> 2, _0x4ce9a2 + _0x56836 * 16 >> 2);
    }
    _0x3f9476.uniform4fv(_0x252777(_0x310e2a), _0x199e43);
  }
  function _0x578d4f(_0x5be11, _0x53a93c, _0x1b21e2) {
    if (_0x1e1029.currentContext.version >= 2) {
      _0x3f9476.uniform4iv(_0x252777(_0x5be11), _0x237516, _0x1b21e2 >> 2, _0x53a93c * 4);
      return;
    }
    if (_0x53a93c <= 72) {
      var _0x4126b3 = _0x383d47[_0x53a93c * 4 - 1];
      for (var _0x5b2d06 = 0; _0x5b2d06 < _0x53a93c * 4; _0x5b2d06 += 4) {
        _0x4126b3[_0x5b2d06] = _0x237516[_0x1b21e2 + _0x5b2d06 * 4 >> 2];
        _0x4126b3[_0x5b2d06 + 1] = _0x237516[_0x1b21e2 + (_0x5b2d06 * 4 + 4) >> 2];
        _0x4126b3[_0x5b2d06 + 2] = _0x237516[_0x1b21e2 + (_0x5b2d06 * 4 + 8) >> 2];
        _0x4126b3[_0x5b2d06 + 3] = _0x237516[_0x1b21e2 + (_0x5b2d06 * 4 + 12) >> 2];
      }
    } else {
      var _0x4126b3 = _0x237516.subarray(_0x1b21e2 >> 2, _0x1b21e2 + _0x53a93c * 16 >> 2);
    }
    _0x3f9476.uniform4iv(_0x252777(_0x5be11), _0x4126b3);
  }
  function _0x32f46b(_0x5e83ae, _0x5e49dc, _0x31326e) {
    _0x3f9476.uniform4uiv(_0x252777(_0x5e83ae), _0x599e77, _0x31326e >> 2, _0x5e49dc * 4);
  }
  function _0x11b367(_0x271f66, _0x58c259, _0x3aaf0e) {
    _0x271f66 = _0x1e1029.programs[_0x271f66];
    _0x3f9476.uniformBlockBinding(_0x271f66, _0x58c259, _0x3aaf0e);
  }
  function _0x483a67(_0x35fb61, _0xf60110, _0x131439, _0x4c56d9) {
    if (_0x1e1029.currentContext.version >= 2) {
      _0x3f9476.uniformMatrix3fv(_0x252777(_0x35fb61), !!_0x131439, _0x29b84b, _0x4c56d9 >> 2, _0xf60110 * 9);
      return;
    }
    if (_0xf60110 <= 32) {
      var _0x2a6622 = _0x54910a[_0xf60110 * 9 - 1];
      for (var _0x265e54 = 0; _0x265e54 < _0xf60110 * 9; _0x265e54 += 9) {
        _0x2a6622[_0x265e54] = _0x29b84b[_0x4c56d9 + _0x265e54 * 4 >> 2];
        _0x2a6622[_0x265e54 + 1] = _0x29b84b[_0x4c56d9 + (_0x265e54 * 4 + 4) >> 2];
        _0x2a6622[_0x265e54 + 2] = _0x29b84b[_0x4c56d9 + (_0x265e54 * 4 + 8) >> 2];
        _0x2a6622[_0x265e54 + 3] = _0x29b84b[_0x4c56d9 + (_0x265e54 * 4 + 12) >> 2];
        _0x2a6622[_0x265e54 + 4] = _0x29b84b[_0x4c56d9 + (_0x265e54 * 4 + 16) >> 2];
        _0x2a6622[_0x265e54 + 5] = _0x29b84b[_0x4c56d9 + (_0x265e54 * 4 + 20) >> 2];
        _0x2a6622[_0x265e54 + 6] = _0x29b84b[_0x4c56d9 + (_0x265e54 * 4 + 24) >> 2];
        _0x2a6622[_0x265e54 + 7] = _0x29b84b[_0x4c56d9 + (_0x265e54 * 4 + 28) >> 2];
        _0x2a6622[_0x265e54 + 8] = _0x29b84b[_0x4c56d9 + (_0x265e54 * 4 + 32) >> 2];
      }
    } else {
      var _0x2a6622 = _0x29b84b.subarray(_0x4c56d9 >> 2, _0x4c56d9 + _0xf60110 * 36 >> 2);
    }
    _0x3f9476.uniformMatrix3fv(_0x252777(_0x35fb61), !!_0x131439, _0x2a6622);
  }
  function _0x3b979a(_0x482a85, _0x5f23ae, _0xc3aa31, _0x4030db) {
    if (_0x1e1029.currentContext.version >= 2) {
      _0x3f9476.uniformMatrix4fv(_0x252777(_0x482a85), !!_0xc3aa31, _0x29b84b, _0x4030db >> 2, _0x5f23ae * 16);
      return;
    }
    if (_0x5f23ae <= 18) {
      var _0x2ccc4a = _0x54910a[_0x5f23ae * 16 - 1];
      var _0x20618a = _0x29b84b;
      _0x4030db >>= 2;
      for (var _0x170ecd = 0; _0x170ecd < _0x5f23ae * 16; _0x170ecd += 16) {
        var _0x1b57e9 = _0x4030db + _0x170ecd;
        _0x2ccc4a[_0x170ecd] = _0x20618a[_0x1b57e9];
        _0x2ccc4a[_0x170ecd + 1] = _0x20618a[_0x1b57e9 + 1];
        _0x2ccc4a[_0x170ecd + 2] = _0x20618a[_0x1b57e9 + 2];
        _0x2ccc4a[_0x170ecd + 3] = _0x20618a[_0x1b57e9 + 3];
        _0x2ccc4a[_0x170ecd + 4] = _0x20618a[_0x1b57e9 + 4];
        _0x2ccc4a[_0x170ecd + 5] = _0x20618a[_0x1b57e9 + 5];
        _0x2ccc4a[_0x170ecd + 6] = _0x20618a[_0x1b57e9 + 6];
        _0x2ccc4a[_0x170ecd + 7] = _0x20618a[_0x1b57e9 + 7];
        _0x2ccc4a[_0x170ecd + 8] = _0x20618a[_0x1b57e9 + 8];
        _0x2ccc4a[_0x170ecd + 9] = _0x20618a[_0x1b57e9 + 9];
        _0x2ccc4a[_0x170ecd + 10] = _0x20618a[_0x1b57e9 + 10];
        _0x2ccc4a[_0x170ecd + 11] = _0x20618a[_0x1b57e9 + 11];
        _0x2ccc4a[_0x170ecd + 12] = _0x20618a[_0x1b57e9 + 12];
        _0x2ccc4a[_0x170ecd + 13] = _0x20618a[_0x1b57e9 + 13];
        _0x2ccc4a[_0x170ecd + 14] = _0x20618a[_0x1b57e9 + 14];
        _0x2ccc4a[_0x170ecd + 15] = _0x20618a[_0x1b57e9 + 15];
      }
    } else {
      var _0x2ccc4a = _0x29b84b.subarray(_0x4030db >> 2, _0x4030db + _0x5f23ae * 64 >> 2);
    }
    _0x3f9476.uniformMatrix4fv(_0x252777(_0x482a85), !!_0xc3aa31, _0x2ccc4a);
  }
  function _0x14e1ec(_0x513fed) {
    if (!_0x3082d4(_0x513fed)) {
      _0x1e1029.recordError(1280);
      _0x4677f2("GL_INVALID_ENUM in glUnmapBuffer");
      return 0;
    }
    var _0x3ebc9e = _0x29405c(_0x513fed);
    var _0x252f5a = _0x1e1029.mappedBuffers[_0x3ebc9e];
    if (!_0x252f5a) {
      _0x1e1029.recordError(1282);
      _0x4677f2("buffer was never mapped in glUnmapBuffer");
      return 0;
    }
    _0x1e1029.mappedBuffers[_0x3ebc9e] = null;
    if (!(_0x252f5a.access & 16)) {
      if (_0x1e1029.currentContext.version >= 2) {
        _0x3f9476.bufferSubData(_0x513fed, _0x252f5a.offset, _0x312996, _0x252f5a.mem, _0x252f5a.length);
      } else {
        _0x3f9476.bufferSubData(_0x513fed, _0x252f5a.offset, _0x312996.subarray(_0x252f5a.mem, _0x252f5a.mem + _0x252f5a.length));
      }
    }
    _0xe462f0(_0x252f5a.mem);
    return 1;
  }
  function _0x502c7b() {
    var _0x1109e6 = _0x3f9476.currentProgram;
    if (!_0x1109e6.explicitProgramBindingsApplied) {
      if (_0x1e1029.currentContext.version >= 2) {
        Object.keys(_0x1109e6.explicitUniformBindings).forEach(function (_0xcf4254) {
          var _0x778d1a = _0x1109e6.explicitUniformBindings[_0xcf4254];
          for (var _0x24acc5 = 0; _0x24acc5 < _0x778d1a[1]; ++_0x24acc5) {
            var _0x2d8cf7 = _0x3f9476.getUniformBlockIndex(_0x1109e6, _0xcf4254 + (_0x778d1a[1] > 1 ? "[" + _0x24acc5 + "]" : ""));
            _0x3f9476.uniformBlockBinding(_0x1109e6, _0x2d8cf7, _0x778d1a[0] + _0x24acc5);
          }
        });
      }
      Object.keys(_0x1109e6.explicitSamplerBindings).forEach(function (_0x493512) {
        var _0x2c7386 = _0x1109e6.explicitSamplerBindings[_0x493512];
        for (var _0x26f1a9 = 0; _0x26f1a9 < _0x2c7386[1]; ++_0x26f1a9) {
          _0x3f9476.uniform1i(_0x3f9476.getUniformLocation(_0x1109e6, _0x493512 + (_0x26f1a9 ? "[" + _0x26f1a9 + "]" : "")), _0x2c7386[0] + _0x26f1a9);
        }
      });
      _0x1109e6.explicitProgramBindingsApplied = 1;
    }
  }
  function _0x385b34(_0x3d7e21) {
    _0x3d7e21 = _0x1e1029.programs[_0x3d7e21];
    _0x3f9476.useProgram(_0x3d7e21);
    if (_0x3f9476.currentProgram = _0x3d7e21) {
      _0x502c7b();
    }
  }
  function _0x2a44fd(_0x3e7fba) {
    _0x3f9476.validateProgram(_0x1e1029.programs[_0x3e7fba]);
  }
  function _0x200f00(_0xb4e9e5, _0x440cd0, _0x913c8f, _0x2217f2, _0x4be748) {
    _0x3f9476.vertexAttrib4f(_0xb4e9e5, _0x440cd0, _0x913c8f, _0x2217f2, _0x4be748);
  }
  function _0x4f5105(_0x3fb288, _0x7091bc) {
    _0x3f9476.vertexAttrib4f(_0x3fb288, _0x29b84b[_0x7091bc >> 2], _0x29b84b[_0x7091bc + 4 >> 2], _0x29b84b[_0x7091bc + 8 >> 2], _0x29b84b[_0x7091bc + 12 >> 2]);
  }
  function _0x4ec5e5(_0x52822d, _0x55aeb3, _0x18357f, _0x5af75a, _0x76970f) {
    var _0xb633f0 = _0x1e1029.currentContext.clientBuffers[_0x52822d];
    if (!_0x3f9476.currentArrayBufferBinding) {
      _0xb633f0.size = _0x55aeb3;
      _0xb633f0.type = _0x18357f;
      _0xb633f0.normalized = false;
      _0xb633f0.stride = _0x5af75a;
      _0xb633f0.ptr = _0x76970f;
      _0xb633f0.clientside = true;
      _0xb633f0.vertexAttribPointerAdaptor = function (_0x451eac, _0x4cd218, _0x46d7a5, _0x425452, _0x253071, _0x148c0c) {
        this.vertexAttribIPointer(_0x451eac, _0x4cd218, _0x46d7a5, _0x253071, _0x148c0c);
      };
      return;
    }
    _0xb633f0.clientside = false;
    _0x3f9476.vertexAttribIPointer(_0x52822d, _0x55aeb3, _0x18357f, _0x5af75a, _0x76970f);
  }
  function _0xe59bf(_0x32ba64, _0x511a0f, _0x564391, _0x3bca5d, _0x5e886c, _0x2601ac) {
    var _0x4e011d = _0x1e1029.currentContext.clientBuffers[_0x32ba64];
    if (!_0x3f9476.currentArrayBufferBinding) {
      _0x4e011d.size = _0x511a0f;
      _0x4e011d.type = _0x564391;
      _0x4e011d.normalized = _0x3bca5d;
      _0x4e011d.stride = _0x5e886c;
      _0x4e011d.ptr = _0x2601ac;
      _0x4e011d.clientside = true;
      _0x4e011d.vertexAttribPointerAdaptor = function (_0x5890b8, _0xee5da7, _0xc100d4, _0x26171a, _0x3ae524, _0x4c1f2a) {
        this.vertexAttribPointer(_0x5890b8, _0xee5da7, _0xc100d4, _0x26171a, _0x3ae524, _0x4c1f2a);
      };
      return;
    }
    _0x4e011d.clientside = false;
    _0x3f9476.vertexAttribPointer(_0x32ba64, _0x511a0f, _0x564391, !!_0x3bca5d, _0x5e886c, _0x2601ac);
  }
  function _0x1b8dfb(_0x3cd5b2, _0x4dfb89, _0x39552d, _0x56621b) {
    _0x3f9476.viewport(_0x3cd5b2, _0x4dfb89, _0x39552d, _0x56621b);
  }
  function _0x11e16b(_0x19fd8e) {
    return _0x19fd8e;
  }
  function _0x3f7952(_0x563ce6) {
    _0x3e46f0();
    var _0x582ed = new Date(_0x237516[_0x563ce6 + 20 >> 2] + 1900, _0x237516[_0x563ce6 + 16 >> 2], _0x237516[_0x563ce6 + 12 >> 2], _0x237516[_0x563ce6 + 8 >> 2], _0x237516[_0x563ce6 + 4 >> 2], _0x237516[_0x563ce6 >> 2], 0);
    var _0x55ffc4 = _0x237516[_0x563ce6 + 32 >> 2];
    var _0x40391e = _0x582ed.getTimezoneOffset();
    var _0x2363ec = new Date(_0x582ed.getFullYear(), 0, 1);
    var _0x891db2 = new Date(_0x582ed.getFullYear(), 6, 1).getTimezoneOffset();
    var _0x1b87ab = _0x2363ec.getTimezoneOffset();
    var _0x397377 = Math.min(_0x1b87ab, _0x891db2);
    if (_0x55ffc4 < 0) {
      _0x237516[_0x563ce6 + 32 >> 2] = Number(_0x891db2 != _0x1b87ab && _0x397377 == _0x40391e);
    } else if (_0x55ffc4 > 0 != (_0x397377 == _0x40391e)) {
      var _0x32fdd3 = Math.max(_0x1b87ab, _0x891db2);
      var _0x420deb = _0x55ffc4 > 0 ? _0x397377 : _0x32fdd3;
      _0x582ed.setTime(_0x582ed.getTime() + (_0x420deb - _0x40391e) * 60000);
    }
    _0x237516[_0x563ce6 + 24 >> 2] = _0x582ed.getDay();
    var _0x28b6ab = (_0x582ed.getTime() - _0x2363ec.getTime()) / 86400000 | 0;
    _0x237516[_0x563ce6 + 28 >> 2] = _0x28b6ab;
    _0x237516[_0x563ce6 >> 2] = _0x582ed.getSeconds();
    _0x237516[_0x563ce6 + 4 >> 2] = _0x582ed.getMinutes();
    _0x237516[_0x563ce6 + 8 >> 2] = _0x582ed.getHours();
    _0x237516[_0x563ce6 + 12 >> 2] = _0x582ed.getDate();
    _0x237516[_0x563ce6 + 16 >> 2] = _0x582ed.getMonth();
    return _0x582ed.getTime() / 1000 | 0;
  }
  function _0x4c46a0(_0x58389f) {
    _0x1774d7(_0x58389f);
  }
  function _0x1e2127(_0x241a32, _0x258634, _0x5d540a) {
    return 0;
  }
  function _0x521659(_0x24f5fd) {
    _0x237516[_0x24f5fd >> 2] = 0;
    return 0;
  }
  function _0x910d55(_0x10c55b) {
    return _0x10c55b % 4 === 0 && (_0x10c55b % 100 !== 0 || _0x10c55b % 400 === 0);
  }
  function _0x4816f4(_0x2067c5, _0x102f46) {
    var _0x3db0a0 = 0;
    for (var _0x3c29fe = 0; _0x3c29fe <= _0x102f46; _0x3db0a0 += _0x2067c5[_0x3c29fe++]) {}
    return _0x3db0a0;
  }
  var _0x365da7 = [31, 29, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
  var _0x2b1785 = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
  function _0x49b059(_0x45433d, _0x3efdfd) {
    var _0x35bb55 = new Date(_0x45433d.getTime());
    while (_0x3efdfd > 0) {
      var _0x35676e = _0x910d55(_0x35bb55.getFullYear());
      var _0x42b19d = _0x35bb55.getMonth();
      var _0x2c639f = (_0x35676e ? _0x365da7 : _0x2b1785)[_0x42b19d];
      if (_0x3efdfd > _0x2c639f - _0x35bb55.getDate()) {
        _0x3efdfd -= _0x2c639f - _0x35bb55.getDate() + 1;
        _0x35bb55.setDate(1);
        if (_0x42b19d < 11) {
          _0x35bb55.setMonth(_0x42b19d + 1);
        } else {
          _0x35bb55.setMonth(0);
          _0x35bb55.setFullYear(_0x35bb55.getFullYear() + 1);
        }
      } else {
        _0x35bb55.setDate(_0x35bb55.getDate() + _0x3efdfd);
        return _0x35bb55;
      }
    }
    return _0x35bb55;
  }
  function _0x32b14d(_0x527f54, _0x7a8b57, _0x3b5f88, _0x322acc) {
    var _0x121122 = _0x237516[_0x322acc + 40 >> 2];
    var _0x5f40cf = {
      tm_sec: _0x237516[_0x322acc >> 2],
      tm_min: _0x237516[_0x322acc + 4 >> 2],
      tm_hour: _0x237516[_0x322acc + 8 >> 2],
      tm_mday: _0x237516[_0x322acc + 12 >> 2],
      tm_mon: _0x237516[_0x322acc + 16 >> 2],
      tm_year: _0x237516[_0x322acc + 20 >> 2],
      tm_wday: _0x237516[_0x322acc + 24 >> 2],
      tm_yday: _0x237516[_0x322acc + 28 >> 2],
      tm_isdst: _0x237516[_0x322acc + 32 >> 2],
      tm_gmtoff: _0x237516[_0x322acc + 36 >> 2],
      tm_zone: _0x121122 ? _0x2aa540(_0x121122) : ""
    };
    var _0x124af3 = _0x2aa540(_0x3b5f88);
    var _0x1d1d0f = {
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
    for (var _0xe11b33 in _0x1d1d0f) {
      _0x124af3 = _0x124af3.replace(new RegExp(_0xe11b33, "g"), _0x1d1d0f[_0xe11b33]);
    }
    var _0x4074fb = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    var _0x4e529e = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    function _0x704164(_0x25ddfa, _0x5839fa, _0x3d2b8e) {
      var _0x1a938f = typeof _0x25ddfa === "number" ? _0x25ddfa.toString() : _0x25ddfa || "";
      while (_0x1a938f.length < _0x5839fa) {
        _0x1a938f = _0x3d2b8e[0] + _0x1a938f;
      }
      return _0x1a938f;
    }
    function _0x4917ec(_0x5023ef, _0x32ac46) {
      return _0x704164(_0x5023ef, _0x32ac46, "0");
    }
    function _0x4cd166(_0x2a4d40, _0x55d67d) {
      function _0x28c4f3(_0x4e27f5) {
        if (_0x4e27f5 < 0) {
          return -1;
        } else if (_0x4e27f5 > 0) {
          return 1;
        } else {
          return 0;
        }
      }
      var _0x1e2773;
      if ((_0x1e2773 = _0x28c4f3(_0x2a4d40.getFullYear() - _0x55d67d.getFullYear())) === 0) {
        if ((_0x1e2773 = _0x28c4f3(_0x2a4d40.getMonth() - _0x55d67d.getMonth())) === 0) {
          _0x1e2773 = _0x28c4f3(_0x2a4d40.getDate() - _0x55d67d.getDate());
        }
      }
      return _0x1e2773;
    }
    function _0xcfa243(_0x1e54a7) {
      switch (_0x1e54a7.getDay()) {
        case 0:
          return new Date(_0x1e54a7.getFullYear() - 1, 11, 29);
        case 1:
          return _0x1e54a7;
        case 2:
          return new Date(_0x1e54a7.getFullYear(), 0, 3);
        case 3:
          return new Date(_0x1e54a7.getFullYear(), 0, 2);
        case 4:
          return new Date(_0x1e54a7.getFullYear(), 0, 1);
        case 5:
          return new Date(_0x1e54a7.getFullYear() - 1, 11, 31);
        case 6:
          return new Date(_0x1e54a7.getFullYear() - 1, 11, 30);
      }
    }
    function _0xe59433(_0x20d79a) {
      var _0x4ce994 = _0x49b059(new Date(_0x20d79a.tm_year + 1900, 0, 1), _0x20d79a.tm_yday);
      var _0x56d47a = new Date(_0x4ce994.getFullYear(), 0, 4);
      var _0x258083 = new Date(_0x4ce994.getFullYear() + 1, 0, 4);
      var _0x51eec9 = _0xcfa243(_0x56d47a);
      var _0xa91216 = _0xcfa243(_0x258083);
      if (_0x4cd166(_0x51eec9, _0x4ce994) <= 0) {
        if (_0x4cd166(_0xa91216, _0x4ce994) <= 0) {
          return _0x4ce994.getFullYear() + 1;
        } else {
          return _0x4ce994.getFullYear();
        }
      } else {
        return _0x4ce994.getFullYear() - 1;
      }
    }
    var _0x104ba8 = {
      "%a": function (_0x3b9209) {
        return _0x4074fb[_0x3b9209.tm_wday].substring(0, 3);
      },
      "%A": function (_0x136ac9) {
        return _0x4074fb[_0x136ac9.tm_wday];
      },
      "%b": function (_0x15d3fd) {
        return _0x4e529e[_0x15d3fd.tm_mon].substring(0, 3);
      },
      "%B": function (_0x100775) {
        return _0x4e529e[_0x100775.tm_mon];
      },
      "%C": function (_0x2f596c) {
        var _0x49a06c = _0x2f596c.tm_year + 1900;
        return _0x4917ec(_0x49a06c / 100 | 0, 2);
      },
      "%d": function (_0x45b512) {
        return _0x4917ec(_0x45b512.tm_mday, 2);
      },
      "%e": function (_0x8bb276) {
        return _0x704164(_0x8bb276.tm_mday, 2, " ");
      },
      "%g": function (_0x301ea3) {
        return _0xe59433(_0x301ea3).toString().substring(2);
      },
      "%G": function (_0x2affc8) {
        return _0xe59433(_0x2affc8);
      },
      "%H": function (_0x4d2027) {
        return _0x4917ec(_0x4d2027.tm_hour, 2);
      },
      "%I": function (_0x52e9c6) {
        var _0xdc9841 = _0x52e9c6.tm_hour;
        if (_0xdc9841 == 0) {
          _0xdc9841 = 12;
        } else if (_0xdc9841 > 12) {
          _0xdc9841 -= 12;
        }
        return _0x4917ec(_0xdc9841, 2);
      },
      "%j": function (_0x6c6ea) {
        return _0x4917ec(_0x6c6ea.tm_mday + _0x4816f4(_0x910d55(_0x6c6ea.tm_year + 1900) ? _0x365da7 : _0x2b1785, _0x6c6ea.tm_mon - 1), 3);
      },
      "%m": function (_0x3a2938) {
        return _0x4917ec(_0x3a2938.tm_mon + 1, 2);
      },
      "%M": function (_0x5a385a) {
        return _0x4917ec(_0x5a385a.tm_min, 2);
      },
      "%n": function () {
        return "\n";
      },
      "%p": function (_0x424652) {
        if (_0x424652.tm_hour >= 0 && _0x424652.tm_hour < 12) {
          return "AM";
        } else {
          return "PM";
        }
      },
      "%S": function (_0x431710) {
        return _0x4917ec(_0x431710.tm_sec, 2);
      },
      "%t": function () {
        return "\t";
      },
      "%u": function (_0x437b63) {
        return _0x437b63.tm_wday || 7;
      },
      "%U": function (_0x344807) {
        var _0x2b6f74 = new Date(_0x344807.tm_year + 1900, 0, 1);
        var _0x47271d = _0x2b6f74.getDay() === 0 ? _0x2b6f74 : _0x49b059(_0x2b6f74, 7 - _0x2b6f74.getDay());
        var _0x348c20 = new Date(_0x344807.tm_year + 1900, _0x344807.tm_mon, _0x344807.tm_mday);
        if (_0x4cd166(_0x47271d, _0x348c20) < 0) {
          var _0x1a3619 = _0x4816f4(_0x910d55(_0x348c20.getFullYear()) ? _0x365da7 : _0x2b1785, _0x348c20.getMonth() - 1) - 31;
          var _0x553319 = 31 - _0x47271d.getDate();
          var _0x234ecd = _0x553319 + _0x1a3619 + _0x348c20.getDate();
          return _0x4917ec(Math.ceil(_0x234ecd / 7), 2);
        }
        if (_0x4cd166(_0x47271d, _0x2b6f74) === 0) {
          return "01";
        } else {
          return "00";
        }
      },
      "%V": function (_0x5dad3e) {
        var _0x599e4c = new Date(_0x5dad3e.tm_year + 1900, 0, 4);
        var _0x429c6b = new Date(_0x5dad3e.tm_year + 1901, 0, 4);
        var _0x2ebdac = _0xcfa243(_0x599e4c);
        var _0x52b325 = _0xcfa243(_0x429c6b);
        var _0x10aeae = _0x49b059(new Date(_0x5dad3e.tm_year + 1900, 0, 1), _0x5dad3e.tm_yday);
        if (_0x4cd166(_0x10aeae, _0x2ebdac) < 0) {
          return "53";
        }
        if (_0x4cd166(_0x52b325, _0x10aeae) <= 0) {
          return "01";
        }
        var _0x46ac78;
        if (_0x2ebdac.getFullYear() < _0x5dad3e.tm_year + 1900) {
          _0x46ac78 = _0x5dad3e.tm_yday + 32 - _0x2ebdac.getDate();
        } else {
          _0x46ac78 = _0x5dad3e.tm_yday + 1 - _0x2ebdac.getDate();
        }
        return _0x4917ec(Math.ceil(_0x46ac78 / 7), 2);
      },
      "%w": function (_0x1bf760) {
        return _0x1bf760.tm_wday;
      },
      "%W": function (_0x2b0b1f) {
        var _0x512cb7 = new Date(_0x2b0b1f.tm_year, 0, 1);
        var _0xded907 = _0x512cb7.getDay() === 1 ? _0x512cb7 : _0x49b059(_0x512cb7, _0x512cb7.getDay() === 0 ? 1 : 7 - _0x512cb7.getDay() + 1);
        var _0xfa567c = new Date(_0x2b0b1f.tm_year + 1900, _0x2b0b1f.tm_mon, _0x2b0b1f.tm_mday);
        if (_0x4cd166(_0xded907, _0xfa567c) < 0) {
          var _0x19a891 = _0x4816f4(_0x910d55(_0xfa567c.getFullYear()) ? _0x365da7 : _0x2b1785, _0xfa567c.getMonth() - 1) - 31;
          var _0x46229d = 31 - _0xded907.getDate();
          var _0x2f176c = _0x46229d + _0x19a891 + _0xfa567c.getDate();
          return _0x4917ec(Math.ceil(_0x2f176c / 7), 2);
        }
        if (_0x4cd166(_0xded907, _0x512cb7) === 0) {
          return "01";
        } else {
          return "00";
        }
      },
      "%y": function (_0x142872) {
        return (_0x142872.tm_year + 1900).toString().substring(2);
      },
      "%Y": function (_0x14e2f3) {
        return _0x14e2f3.tm_year + 1900;
      },
      "%z": function (_0x456e83) {
        var _0x28b3fa = _0x456e83.tm_gmtoff;
        var _0x366cd1 = _0x28b3fa >= 0;
        _0x28b3fa = Math.abs(_0x28b3fa) / 60;
        _0x28b3fa = _0x28b3fa / 60 * 100 + _0x28b3fa % 60;
        return (_0x366cd1 ? "+" : "-") + String("0000" + _0x28b3fa).slice(-4);
      },
      "%Z": function (_0x2d7842) {
        return _0x2d7842.tm_zone;
      },
      "%%": function () {
        return "%";
      }
    };
    for (var _0xe11b33 in _0x104ba8) {
      if (_0x124af3.includes(_0xe11b33)) {
        _0x124af3 = _0x124af3.replace(new RegExp(_0xe11b33, "g"), _0x104ba8[_0xe11b33](_0x5f40cf));
      }
    }
    var _0x58b03f = _0x1c148c(_0x124af3, false);
    if (_0x58b03f.length > _0x7a8b57) {
      return 0;
    }
    _0x4003dc(_0x58b03f, _0x527f54);
    return _0x58b03f.length - 1;
  }
  function _0x5adbd0(_0x566c7e) {
    var _0x17c6d8 = Date.now() / 1000 | 0;
    if (_0x566c7e) {
      _0x237516[_0x566c7e >> 2] = _0x17c6d8;
    }
    return _0x17c6d8;
  }
  function _0x3272b3(_0x5c4985, _0x4dbe7a) {
    _0x5c4985 = _0x2aa540(_0x5c4985);
    try {
      _0x3b09e1.utime(_0x5c4985, _0x4dbe7a, _0x4dbe7a);
      return 0;
    } catch (_0x24e3b2) {
      if (!(_0x24e3b2 instanceof _0x3b09e1.ErrnoError)) {
        throw _0x24e3b2 + " : " + _0x2500c9();
      }
      _0x893198(_0x24e3b2.errno);
      return -1;
    }
  }
  function _0x3b0e7e(_0x5e569c, _0x50104d) {
    var _0x2e5c2c;
    if (_0x50104d) {
      _0x2e5c2c = _0x237516[_0x50104d + 4 >> 2] * 1000;
    } else {
      _0x2e5c2c = Date.now();
    }
    return _0x3272b3(_0x5e569c, _0x2e5c2c);
  }
  var _0x643e3a = function (_0xbc7f52, _0x11a1b8, _0x48d45b, _0x99af6d) {
    if (!_0xbc7f52) {
      _0xbc7f52 = this;
    }
    this.parent = _0xbc7f52;
    this.mount = _0xbc7f52.mount;
    this.mounted = null;
    this.id = _0x3b09e1.nextInode++;
    this.name = _0x11a1b8;
    this.mode = _0x48d45b;
    this.node_ops = {};
    this.stream_ops = {};
    this.rdev = _0x99af6d;
  };
  var _0x508348 = 365;
  var _0x1d59dc = 146;
  Object.defineProperties(_0x643e3a.prototype, {
    read: {
      get: function () {
        return (this.mode & _0x508348) === _0x508348;
      },
      set: function (_0x572a9b) {
        if (_0x572a9b) {
          this.mode |= _0x508348;
        } else {
          this.mode &= ~_0x508348;
        }
      }
    },
    write: {
      get: function () {
        return (this.mode & _0x1d59dc) === _0x1d59dc;
      },
      set: function (_0x2d220) {
        if (_0x2d220) {
          this.mode |= _0x1d59dc;
        } else {
          this.mode &= ~_0x1d59dc;
        }
      }
    },
    isFolder: {
      get: function () {
        return _0x3b09e1.isDir(this.mode);
      }
    },
    isDevice: {
      get: function () {
        return _0x3b09e1.isChrdev(this.mode);
      }
    }
  });
  _0x3b09e1.FSNode = _0x643e3a;
  _0x3b09e1.staticInit();
  _0x2c3fe3.FS_createPath = _0x3b09e1.createPath;
  _0x2c3fe3.FS_createDataFile = _0x3b09e1.createDataFile;
  _0x2c3fe3.requestFullscreen = function _0x3eba60(_0xe02066, _0x2bc36a) {
    _0x5518f6.requestFullscreen(_0xe02066, _0x2bc36a);
  };
  _0x2c3fe3.requestAnimationFrame = function _0x3d97a0(_0x40569c) {
    _0x5518f6.requestAnimationFrame(_0x40569c);
  };
  _0x2c3fe3.setCanvasSize = function _0x337c79(_0xbe2746, _0x57723b, _0x2cad2b) {
    _0x5518f6.setCanvasSize(_0xbe2746, _0x57723b, _0x2cad2b);
  };
  _0x2c3fe3.pauseMainLoop = function _0x4ea2ff() {
    _0x5518f6.mainLoop.pause();
  };
  _0x2c3fe3.resumeMainLoop = function _0x23987e() {
    _0x5518f6.mainLoop.resume();
  };
  _0x2c3fe3.getUserMedia = function _0x530514() {
    _0x5518f6.getUserMedia();
  };
  _0x2c3fe3.createContext = function _0x3a5ea6(_0x38672e, _0xeb7b7e, _0x4644cd, _0x3a648d) {
    return _0x5518f6.createContext(_0x38672e, _0xeb7b7e, _0x4644cd, _0x3a648d);
  };
  var _0x3f9476;
  for (var _0x439c06 = 0; _0x439c06 < 32; ++_0x439c06) {
    _0x28708e.push(new Array(_0x439c06));
  }
  var _0x7aced3 = new Float32Array(288);
  for (var _0x439c06 = 0; _0x439c06 < 288; ++_0x439c06) {
    _0x54910a[_0x439c06] = _0x7aced3.subarray(0, _0x439c06 + 1);
  }
  var _0x1bde0a = new Int32Array(288);
  for (var _0x439c06 = 0; _0x439c06 < 288; ++_0x439c06) {
    _0x383d47[_0x439c06] = _0x1bde0a.subarray(0, _0x439c06 + 1);
  }
  function _0x1c148c(_0x3481a8, _0x589d76, _0x1cf268) {
    var _0x54d155 = _0x1cf268 > 0 ? _0x1cf268 : _0x40b564(_0x3481a8) + 1;
    var _0x34e561 = new Array(_0x54d155);
    var _0x4dabdb = _0x3e72f1(_0x3481a8, _0x34e561, 0, _0x34e561.length);
    if (_0x589d76) {
      _0x34e561.length = _0x4dabdb;
    }
    return _0x34e561;
  }
  var _0x6f09a = {
    Fk: _0x14840f,
    Bk: _0x10c50e,
    $c: _0x552df3,
    Fj: _0x452750,
    qj: _0x4cf7ec,
    al: _0x44cd57,
    Dj: _0x421c58,
    Cj: _0x1f1ab7,
    zj: _0x29bfab,
    Bj: _0x14d445,
    Aj: _0x53e2c5,
    Dk: _0x4c8d4c,
    Ck: _0x430376,
    Tk: _0xbbe9e5,
    dd: _0x5c1914,
    sk: _0x3028f8,
    Pj: _0x54037f,
    jd: _0x15d975,
    dj: _0x3223c0,
    sd: _0x49e18e,
    Sj: _0x3fdf62,
    Lc: _0x59aac4,
    Nc: _0x433b5b,
    Mc: _0x34c7ba,
    lk: _0x3500ab,
    vj: _0x3a7632,
    uj: _0x55546f,
    uk: _0x4d4334,
    Ik: _0x1b8156,
    Hk: _0x5e3f67,
    Hj: _0x2e8583,
    yj: _0x47bec0,
    xj: _0x56cc61,
    Ij: _0x15036,
    Xk: _0x340a83,
    ij: _0x3db679,
    te: _0x5cc8f6,
    ue: _0x4ee7c5,
    nj: _0x32c83e,
    mj: _0x532751,
    lj: _0x13c1f2,
    hl: _0x5f412b,
    gl: _0x1dd494,
    fl: _0x52ded8,
    el: _0x3c4fbb,
    wj: _0x3cfc90,
    rj: _0x4d99dd,
    Rj: _0x389350,
    Mj: _0x367bff,
    zk: _0x5d8587,
    Jj: _0x137c2f,
    Wc: _0x405ac0,
    Tj: _0x1e6827,
    jj: _0x4b91f9,
    Kf: _0x5b893e,
    Pb: _0x13a7c6,
    Ob: _0x5919eb,
    Pf: _0x4b267d,
    Ya: _0xc1b0c2,
    Xa: _0x1ac0ae,
    qf: _0xa6c15,
    Rf: _0x38f52c,
    sf: _0x400eb9,
    gf: _0x511ffb,
    la: _0x15af60,
    If: _0x49240d,
    Lb: _0x1725d5,
    Kb: _0x24282a,
    Gf: _0x4c7058,
    Hf: _0xf1f9eb,
    Jb: _0x371e57,
    Ib: _0x3dd092,
    Cd: _0x5a8c47,
    Jf: _0x573470,
    Nb: _0x894eb,
    Mb: _0x3ab137,
    rf: _0x1b50d5,
    tf: _0x21fd09,
    Lf: _0x43d10a,
    Rb: _0x3b2f52,
    Qb: _0x1cf5c2,
    Sb: _0x4ecc36,
    kf: _0x23abfd,
    Ff: _0x38f20e,
    Nf: _0x810842,
    ha: _0x7079b5,
    tg: _0x13c2a6,
    ja: _0x10e02f,
    mg: _0x3f14ff,
    ng: _0x161252,
    lg: _0x5717f6,
    fc: _0x4ba9e2,
    gc: _0xbf70e7,
    $a: _0x14bad3,
    va: _0x2f3057,
    Tb: _0x31be44,
    qg: _0x3db04b,
    jg: _0x12d282,
    kg: _0x26d13b,
    ic: _0x44f864,
    hc: _0x76ad57,
    ta: _0x534f7a,
    ia: _0x200138,
    sg: _0x3a118e,
    rg: _0x5281f3,
    ua: _0x384970,
    na: _0x1ede02,
    ec: _0x26b1e6,
    Cb: _0x483945,
    Hb: _0x3530ed,
    Qa: _0x2b9712,
    Db: _0x3f82a0,
    Fb: _0x1d4740,
    vf: _0x3b681d,
    cc: _0x570e69,
    Sf: _0x169bcf,
    Eb: _0x249cc7,
    Ef: _0xd729c8,
    xa: _0x52c8ec,
    Qf: _0x4e9866,
    pf: _0x9ebcaf,
    fg: _0x220970,
    cg: _0xc5f4d,
    dg: _0x136bd7,
    eg: _0x23bad3,
    _a: _0x313134,
    _f: _0x222ff8,
    ag: _0x4025e3,
    $f: _0x5863c3,
    bg: _0x3410d1,
    Qj: _0x3595c5,
    ej: _0x10688b,
    Qk: _0x2a795b,
    Ok: _0x58e789,
    Mk: _0x3c962f,
    wk: _0x3a9bd4,
    yk: _0x48addd,
    Sk: _0x89762,
    qk: _0xe18e96,
    pk: _0x1b7534,
    Uj: _0x184989,
    Kk: _0xdb82f6,
    Yk: _0x177677,
    ok: _0x243a0f,
    Wk: _0x25c570,
    Vk: _0x2e811d,
    dl: _0x1c02e4,
    sb: _0x57d942,
    nk: _0x4a2e72,
    ed: _0x253888,
    mk: _0x331135,
    Ak: _0x4b95a8,
    Gj: _0x25702b,
    Ej: _0x4185b4,
    tj: _0x4adaa5,
    Wi: _0x869b22,
    Vi: _0x4772c1,
    Ti: _0x149942,
    Ui: _0x2bb01c,
    Gk: _0x124175,
    rk: _0x2178bb,
    oj: _0x2a59bb,
    pj: _0x2cdf73,
    sj: _0x38b658,
    rd: _0x16bbce,
    bl: _0x15096f,
    $k: _0x5cb60a,
    Zk: _0x2f1d03,
    _k: _0x5849cc,
    Xc: _0x462cbc,
    Pk: _0x5eff43,
    Nk: _0x237e71,
    Lk: _0x3098fb,
    vk: _0x4cbe4f,
    xk: _0x5a9345,
    Rk: _0x3b3a08,
    kj: _0x238da3,
    Jk: _0x56ffd0,
    Ek: _0xe11b9b,
    Uk: _0x584ba5,
    tk: _0x17193f,
    fj: _0x23e137,
    ik: _0x1bcd4a,
    od: _0x25e859,
    hk: _0x1829a9,
    rb: _0x24b7dc,
    nd: _0x27fd42,
    qd: _0x255f11,
    Zj: _0x35077d,
    $j: _0x1745ea,
    jk: _0x1866d,
    kk: _0x137db1,
    ek: _0x1f3166,
    ck: _0x597436,
    fk: _0x42aef6,
    bk: _0x371a95,
    dk: _0x1dba90,
    pd: _0x44bf1a,
    pb: _0x54d2ff,
    qb: _0x2f6494,
    ak: _0x497594,
    gk: _0x8bbfc5,
    _j: _0x349867,
    Vj: _0xbf1f1d,
    md: _0x321ffd,
    kd: _0x32cf53,
    Xj: _0x4edf15,
    Yj: _0x146a57,
    Wj: _0x2a1753,
    ld: _0xe85619,
    vb: _0x4c423d,
    pl: _0x2cba3f,
    zd: _0x26a823,
    nl: _0x3191f5,
    Ad: _0x5cd595,
    kl: _0x3a7333,
    ml: _0x2d706e,
    ll: _0x4fb836,
    ol: _0x11b8e7,
    p: _0x208a44,
    i: _0x128e4d,
    o: _0x106156,
    j: _0x3058c9,
    a: _0x16ba83,
    rl: _0x125a36,
    tb: _0x24cbc8,
    Td: _0x41ce04,
    ga: _0x4e7d63,
    Fd: _0x48492a,
    Gd: _0x38dbf1,
    l: _0x4b04e6,
    Zf: _0x3957f8,
    Ng: _0x4bc937,
    gg: _0x4c8377,
    Ch: _0x4081e5,
    Qd: _0x17753f,
    th: _0x18e6f0,
    be: _0x113bf0,
    W: _0x55e400,
    Ei: _0x1201c3,
    pi: _0x434804,
    Nd: _0x2cf558,
    Kd: _0xf59083,
    Oc: _0x35dd02,
    Pc: _0x2f72f9,
    xe: _0x51f777,
    Pa: _0x54d5aa,
    Jd: _0x2fc5ca,
    fh: _0x6a4a21,
    uh: _0x45b0b3,
    yg: _0x2e6efd,
    dc: _0x2d06b5,
    Wg: _0x1949cb,
    Rd: _0x27ef67,
    Md: _0x415090,
    pg: _0x1aa945,
    mf: _0x1c0424,
    lb: _0x46f826,
    Sd: _0x430efc,
    qh: _0x21f95a,
    Xi: _0x2653b5,
    ug: _0x2bd7ef,
    Ud: _0x3dc329,
    Od: _0x5b1ba6,
    Ld: _0x126a08,
    Vd: _0x49a4fd,
    Ag: _0xd78bd9,
    og: _0x442c14,
    me: _0xaf9fc9,
    Ab: _0x54388c,
    Hc: _0x138fc5,
    vg: _0x44bf76,
    wg: _0x5c023a,
    Se: _0x1a820d,
    Pd: _0x2554aa,
    x: _0x4cd4b2,
    T: _0x4c477b,
    Id: _0x4b5b1a,
    xb: _0x59b05f,
    Ed: _0x1a8d63,
    Kh: _0x3e5911,
    Ca: _0x187918,
    Fc: _0x23d9a3,
    Sh: _0x4ae907,
    Za: _0x43e98b,
    nf: _0x404563,
    jf: _0x12d05c,
    Cf: _0x3214fd,
    wf: _0x334ef5,
    uf: _0xddeac2,
    Bf: _0x4a64f5,
    Ua: _0x169081,
    Hd: _0x1c6c1a,
    P: _0x390c6f,
    Va: _0x3c347a,
    of: _0x1a1102,
    Vf: _0x5b6be2,
    C: _0x519a42,
    G: _0x4f7cd9,
    sl: _0x313a90,
    Df: _0xee8eec,
    xf: _0x22be3f,
    tl: _0x10a396,
    Wa: _0x2bd6cd,
    Gb: _0x32ad2a,
    Ra: _0x3e3f04,
    zf: _0x71b52,
    Af: _0x227432,
    Vb: _0x48d960,
    Ub: _0x499d55,
    ff: _0x5c866d,
    qa: _0x512171,
    oa: _0x262e0b,
    pa: _0x1d6f7d,
    ef: _0x12b960,
    hf: _0x29551f,
    ac: _0x144062,
    $b: _0x24ff51,
    bc: _0x233b69,
    yf: _0x11d227,
    Wb: _0xda2a2a,
    Yb: _0xd2cdd9,
    Xb: _0x254a0d,
    Zb: _0x379ac4,
    _b: _0x49b572,
    Dd: _0x8f10e4,
    Xf: _0x229686,
    Wf: _0x38a314,
    ra: _0x37012e,
    Uf: _0x1143d8,
    zg: _0x5aebc3,
    sa: _0x768e43,
    Mf: _0x3c5625,
    Of: _0x2c7245,
    A: _0x5c929b,
    aa: _0x54433d,
    Bc: _0x199bff,
    zb: _0x501d9d,
    df: _0x5ae9d3,
    mb: _0x5a0a58,
    wa: _0x40f6d6,
    b: _0x3b1fde,
    lf: _0x1b5e7e,
    hg: _0x1eaf6f,
    ig: _0x273544,
    Bb: _0x806964,
    xg: _0x2285ee,
    Ma: _0x110888,
    Ji: _0x15591c,
    Gi: _0x1b2dbd,
    oc: _0x1d7d3f,
    oh: _0x42e231,
    Fa: _0x967117,
    Fi: _0x38332b,
    Og: _0x5d7bc7,
    Mg: _0x278be0,
    Bi: _0x1bfb2f,
    Ci: _0x41466c,
    Hg: _0x4ee9ac,
    Di: _0x44c6a0,
    hh: _0x56286a,
    kh: _0x365c9b,
    Ic: _0x261496,
    Jc: _0x349aa0,
    Kc: _0x347a04,
    _g: _0x17ec51,
    zi: _0x2bd71b,
    Ai: _0x8c1d16,
    yi: _0x55e1c9,
    ui: _0x23ced5,
    Dg: _0x6cbc30,
    Cg: _0x384d89,
    Bg: _0x23de1d,
    vi: _0x358e34,
    wi: _0x4048bf,
    xi: _0x3fa405,
    Wd: _0x172fff,
    kb: _0x5107e9,
    ti: _0xff1d42,
    ri: _0x42635f,
    ah: _0x358700,
    si: _0x137c03,
    eh: _0x290877,
    Rg: _0x18e997,
    qi: _0xdf8ec0,
    Gc: _0x31d9cd,
    oi: _0xafdfbb,
    ni: _0x536938,
    mi: _0x3ad818,
    li: _0x4ec6c9,
    ki: _0x2aca91,
    ji: _0x399935,
    eb: _0x521002,
    ii: _0x52513d,
    Gg: _0x484390,
    hi: _0x18acff,
    kc: _0x389215,
    gi: _0x477f9e,
    ih: _0x93fe8d,
    mh: _0x3abfd7,
    Ea: _0xcad849,
    Da: _0x5bd72b,
    fi: _0x5e2201,
    ei: _0x4ddff6,
    di: _0xf8da9f,
    ai: _0x2148fc,
    Tg: _0x2c50c8,
    Qg: _0xa47caf,
    bi: _0x42e859,
    Sg: _0x3d5b23,
    ci: _0x101f31,
    $h: _0x5c3285,
    pc: _0x3ba6e0,
    ph: _0x3f6a13,
    jc: _0x4c797c,
    Yh: _0x26abe6,
    Zh: _0x1d7767,
    Xg: _0x25f511,
    X: _0x3ee5b8,
    V: _0x51474c,
    ya: _0x40345b,
    Ba: _0x56139e,
    Xh: _0x5e2ed9,
    Th: _0x3d5a7f,
    nc: _0x4af290,
    Uh: _0x7e3dc3,
    Fg: _0x1121ee,
    Wh: _0x37edf0,
    jh: _0x270a89,
    nh: _0x56a2e1,
    Vh: _0x5c5441,
    Pi: _0x26859b,
    jb: _0xf936ba,
    bb: _0xa4ffe1,
    da: _0x34957c,
    ca: _0x4d70fe,
    Oi: _0x3f411d,
    Tf: _0x1460b0,
    Rh: _0x25b62d,
    Qh: _0x1c7749,
    Ii: _0x3fb71d,
    Ga: _0x13de0c,
    Jg: _0x583464,
    lc: _0x2cf203,
    Li: _0x2bec36,
    $: _0x491db7,
    sh: _0x5db8c2,
    rh: _0x3f96e2,
    _h: _0x551c0e,
    Oh: _0x3fe94b,
    Ec: _0x178e36,
    Ph: _0xab6816,
    Ki: _0x1f779f,
    Nh: _0x139a76,
    Yg: _0xa7fe52,
    Mh: _0x40a010,
    Kg: _0x3e6e87,
    ab: _0x1b16c0,
    ka: _0x5dab25,
    Dc: _0x3695c2,
    Ni: _0x5c2153,
    db: _0x4b1578,
    Hi: _0x263b52,
    lh: _0x3265bb,
    Jh: _0x1ea4c8,
    Ug: _0x4671c8,
    Lh: _0x44df17,
    Cc: _0x4ea961,
    mc: _0x134b08,
    Eg: _0x2aa232,
    Pg: _0x9845c8,
    fa: _0x332dca,
    Ih: _0x1de4e7,
    Zg: _0x47644a,
    Ig: _0x120290,
    ib: _0x2d8c67,
    Gh: _0x53a8ae,
    Hh: _0x1997f7,
    Eh: _0x50ae82,
    Fh: _0x10b734,
    Bh: _0x43e65b,
    ch: _0x52b19f,
    Dh: _0x1dd50b,
    hb: _0x5e06df,
    Ah: _0xbe96fa,
    $g: _0x208d87,
    bh: _0x552d00,
    zh: _0x571779,
    dh: _0x191487,
    gh: _0x1e01cd,
    qc: _0x4ac638,
    za: _0x3e3e86,
    rc: _0x2dde9e,
    sc: _0x4fecf9,
    tc: _0x20952a,
    uc: _0x5272f9,
    vc: _0x40e083,
    gb: _0x5f22d0,
    wc: _0x259bd6,
    xc: _0x22ce9a,
    ea: _0x37ad0e,
    yc: _0x578d4f,
    zc: _0x32f46b,
    cb: _0x11b367,
    Ac: _0x483a67,
    Aa: _0x3b979a,
    Vg: _0x14e1ec,
    vh: _0x385b34,
    Mi: _0x2a44fd,
    wh: _0x200f00,
    xh: _0x4f5105,
    Lg: _0x4ec5e5,
    yh: _0xe59bf,
    fb: _0x1b8dfb,
    vd: _0x1f0047,
    $i: _0x2e6edd,
    Sc: _0x23253d,
    K: _0x36d160,
    S: _0x343cab,
    id: _0x2b3f5b,
    td: _0x4944ff,
    re: _0x3fe72d,
    wd: _0x24e5bb,
    U: _0x1ea020,
    N: _0x233c78,
    D: _0x13dccb,
    hd: _0x4da667,
    Tc: _0x554ac9,
    w: _0xc7b7d9,
    ub: _0x421039,
    yd: _0x3f8a14,
    d: _0x2f28f0,
    cl: _0x2a2ad7,
    Q: _0x7c50a7,
    Y: _0x3418ed,
    Nj: _0xa3c7d2,
    ud: _0x3eeab1,
    Ha: _0x4a3cac,
    c: _0x47f322,
    nb: _0x1dd14b,
    Rc: _0x3ce995,
    f: _0x214799,
    Ri: _0x4752d4,
    ql: _0x53f4c2,
    bd: _0xc992cf,
    Si: _0x322e06,
    Qi: _0x125b92,
    gd: _0xb62a46,
    q: _0xc30481,
    Ka: _0x29d51c,
    Yi: _0x479758,
    hj: _0x55f980,
    s: _0x2b29f5,
    u: _0x12d4f7,
    il: _0xdc6451,
    Lj: _0xbbb8b2,
    y: _0x4a278b,
    E: _0x239b0a,
    O: _0x2b6075,
    Qc: _0x3c5052,
    ba: _0x415538,
    fd: _0x5dfdce,
    ge: _0x597c82,
    pe: _0x485479,
    Xd: _0x1b7b19,
    le: _0x53996d,
    bf: _0x151e67,
    oe: _0x2481c6,
    _e: _0x3db347,
    $e: _0x5fd772,
    Te: _0x230069,
    Ee: _0x5df1df,
    Ae: _0x1ef40b,
    ie: _0x5f170a,
    _d: _0x2386eb,
    je: _0x4fb58a,
    ve: _0x216172,
    Ie: _0x26900a,
    Ge: _0x3e7d71,
    af: _0x379772,
    Ke: _0x120fa4,
    Ze: _0x1abe54,
    Ce: _0x561d0c,
    Ye: _0x56331c,
    Ue: _0x19e515,
    cf: _0x13049d,
    Yd: _0x48ccd9,
    de: _0x1abbad,
    we: _0x786833,
    Re: _0x276661,
    Me: _0xd76b05,
    Zd: _0x2a6a4e,
    he: _0x558358,
    He: _0x67f6f2,
    Be: _0x6fb6c2,
    Qe: _0x2f7977,
    h: _0x478afe,
    cd: _0x263cbb,
    g: _0x284c4e,
    Yf: _0xde6310,
    z: _0x484c62,
    Uc: _0x4f243b,
    cj: _0x57c43e,
    F: _0x3ed7e8,
    L: _0x34bb86,
    m: _0x5cd970,
    aj: _0x2e6168,
    Na: _0x5a63af,
    bj: _0x4dc80a,
    Vc: _0x254d0f,
    _: _0x85f193,
    gj: _0x5dc187,
    _i: _0x1aab04,
    J: _0x56ca35,
    H: _0x22abb4,
    Oj: _0x29670e,
    e: _0x28287b,
    Zc: _0x4f4479,
    _c: _0x3be638,
    ob: _0x4196b6,
    Ia: _0x397422,
    n: _0x5c60d5,
    jl: _0x5550d0,
    ze: _0x460146,
    Ja: _0x29fba5,
    ad: _0x296340,
    r: _0x572b8c,
    t: _0x13f154,
    B: _0x33f587,
    Kj: _0x3b7ebf,
    Zi: _0x4f3ec3,
    R: _0x8895c8,
    se: _0x5a088d,
    I: _0x1018c7,
    Z: _0x114224,
    Bd: _0x446dad,
    La: _0x3696b1,
    xd: _0x258992,
    Yc: _0x166564,
    M: _0x2a8dd3,
    ne: _0x350164,
    Xe: _0x167f49,
    Oe: _0x3b9034,
    De: _0xa63f0b,
    Fe: _0x414de6,
    We: _0x11d469,
    ke: _0x195c5c,
    $d: _0x20b0f4,
    Pe: _0x561171,
    Le: _0x42368e,
    Ve: _0x17f5d6,
    Ne: _0x39adc2,
    Je: _0x293fcd,
    ye: _0x500045,
    ee: _0x46a953,
    qe: _0x3ba67a,
    fe: _0x3ec0d9,
    ae: _0x7131da,
    ce: _0x1d3a6c,
    k: _0x11e16b,
    wb: _0x3f7952,
    v: _0x4c46a0,
    Sa: _0x1e2127,
    Ta: _0x521659,
    Oa: _0x32b14d,
    ma: _0x5adbd0,
    yb: _0x3b0e7e
  };
  var _0x4ec534 = _0x5bb564();
  var _0x50c341 = _0x2c3fe3.___wasm_call_ctors = function () {
    return (_0x50c341 = _0x2c3fe3.___wasm_call_ctors = _0x2c3fe3.asm.vl).apply(null, arguments);
  };
  var _0x3ba975 = _0x2c3fe3._ReleaseKeys = function () {
    return (_0x3ba975 = _0x2c3fe3._ReleaseKeys = _0x2c3fe3.asm.wl).apply(null, arguments);
  };
  var _0x2b6451 = _0x2c3fe3._SendMessageFloat = function () {
    return (_0x2b6451 = _0x2c3fe3._SendMessageFloat = _0x2c3fe3.asm.xl).apply(null, arguments);
  };
  var _0x4f3e2f = _0x2c3fe3._SendMessageString = function () {
    return (_0x4f3e2f = _0x2c3fe3._SendMessageString = _0x2c3fe3.asm.yl).apply(null, arguments);
  };
  var _0x1161ca = _0x2c3fe3._SendMessage = function () {
    return (_0x1161ca = _0x2c3fe3._SendMessage = _0x2c3fe3.asm.zl).apply(null, arguments);
  };
  var _0x2c2622 = _0x2c3fe3._SetFullscreen = function () {
    return (_0x2c2622 = _0x2c3fe3._SetFullscreen = _0x2c3fe3.asm.Al).apply(null, arguments);
  };
  var _0x316696 = _0x2c3fe3._main = function () {
    return (_0x316696 = _0x2c3fe3._main = _0x2c3fe3.asm.Bl).apply(null, arguments);
  };
  var _0x445f12 = _0x2c3fe3.___errno_location = function () {
    return (_0x445f12 = _0x2c3fe3.___errno_location = _0x2c3fe3.asm.Cl).apply(null, arguments);
  };
  var _0x275c0c = _0x2c3fe3._htonl = function () {
    return (_0x275c0c = _0x2c3fe3._htonl = _0x2c3fe3.asm.Dl).apply(null, arguments);
  };
  var _0x5e5d65 = _0x2c3fe3._htons = function () {
    return (_0x5e5d65 = _0x2c3fe3._htons = _0x2c3fe3.asm.El).apply(null, arguments);
  };
  var _0x4e9e37 = _0x2c3fe3._ntohs = function () {
    return (_0x4e9e37 = _0x2c3fe3._ntohs = _0x2c3fe3.asm.Fl).apply(null, arguments);
  };
  var _0x174102 = _0x2c3fe3.__get_tzname = function () {
    return (_0x174102 = _0x2c3fe3.__get_tzname = _0x2c3fe3.asm.Gl).apply(null, arguments);
  };
  var _0x24b449 = _0x2c3fe3.__get_daylight = function () {
    return (_0x24b449 = _0x2c3fe3.__get_daylight = _0x2c3fe3.asm.Hl).apply(null, arguments);
  };
  var _0x324528 = _0x2c3fe3.__get_timezone = function () {
    return (_0x324528 = _0x2c3fe3.__get_timezone = _0x2c3fe3.asm.Il).apply(null, arguments);
  };
  var _0x3e3c9d = _0x2c3fe3.stackSave = function () {
    return (_0x3e3c9d = _0x2c3fe3.stackSave = _0x2c3fe3.asm.Jl).apply(null, arguments);
  };
  var _0xe0dbf5 = _0x2c3fe3.stackRestore = function () {
    return (_0xe0dbf5 = _0x2c3fe3.stackRestore = _0x2c3fe3.asm.Kl).apply(null, arguments);
  };
  var _0x2bd0fc = _0x2c3fe3.stackAlloc = function () {
    return (_0x2bd0fc = _0x2c3fe3.stackAlloc = _0x2c3fe3.asm.Ll).apply(null, arguments);
  };
  var _0x2ec72f = _0x2c3fe3._setThrew = function () {
    return (_0x2ec72f = _0x2c3fe3._setThrew = _0x2c3fe3.asm.Ml).apply(null, arguments);
  };
  var _0x358dc1 = _0x2c3fe3.___cxa_can_catch = function () {
    return (_0x358dc1 = _0x2c3fe3.___cxa_can_catch = _0x2c3fe3.asm.Nl).apply(null, arguments);
  };
  var _0x126007 = _0x2c3fe3.___cxa_is_pointer_type = function () {
    return (_0x126007 = _0x2c3fe3.___cxa_is_pointer_type = _0x2c3fe3.asm.Ol).apply(null, arguments);
  };
  var _0x4fa9c0 = _0x2c3fe3._malloc = function () {
    return (_0x4fa9c0 = _0x2c3fe3._malloc = _0x2c3fe3.asm.Pl).apply(null, arguments);
  };
  var _0xe462f0 = _0x2c3fe3._free = function () {
    return (_0xe462f0 = _0x2c3fe3._free = _0x2c3fe3.asm.Ql).apply(null, arguments);
  };
  var _0xd97d2e = _0x2c3fe3._memalign = function () {
    return (_0xd97d2e = _0x2c3fe3._memalign = _0x2c3fe3.asm.Rl).apply(null, arguments);
  };
  var _0x784a1c = _0x2c3fe3._memset = function () {
    return (_0x784a1c = _0x2c3fe3._memset = _0x2c3fe3.asm.Sl).apply(null, arguments);
  };
  var _0x5b40d9 = _0x2c3fe3._strlen = function () {
    return (_0x5b40d9 = _0x2c3fe3._strlen = _0x2c3fe3.asm.Tl).apply(null, arguments);
  };
  var _0x405dae = _0x2c3fe3.dynCall_iidiiii = function () {
    return (_0x405dae = _0x2c3fe3.dynCall_iidiiii = _0x2c3fe3.asm.Vl).apply(null, arguments);
  };
  var _0x3a13cb = _0x2c3fe3.dynCall_vii = function () {
    return (_0x3a13cb = _0x2c3fe3.dynCall_vii = _0x2c3fe3.asm.Wl).apply(null, arguments);
  };
  var _0x2439a0 = _0x2c3fe3.dynCall_iii = function () {
    return (_0x2439a0 = _0x2c3fe3.dynCall_iii = _0x2c3fe3.asm.Xl).apply(null, arguments);
  };
  var _0x121c5b = _0x2c3fe3.dynCall_ii = function () {
    return (_0x121c5b = _0x2c3fe3.dynCall_ii = _0x2c3fe3.asm.Yl).apply(null, arguments);
  };
  var _0x3b09d7 = _0x2c3fe3.dynCall_iiii = function () {
    return (_0x3b09d7 = _0x2c3fe3.dynCall_iiii = _0x2c3fe3.asm.Zl).apply(null, arguments);
  };
  var _0x1e26b3 = _0x2c3fe3.dynCall_jiji = function () {
    return (_0x1e26b3 = _0x2c3fe3.dynCall_jiji = _0x2c3fe3.asm._l).apply(null, arguments);
  };
  var _0x58d73a = _0x2c3fe3.dynCall_vi = function () {
    return (_0x58d73a = _0x2c3fe3.dynCall_vi = _0x2c3fe3.asm.$l).apply(null, arguments);
  };
  var _0x5c8e44 = _0x2c3fe3.dynCall_iiiii = function () {
    return (_0x5c8e44 = _0x2c3fe3.dynCall_iiiii = _0x2c3fe3.asm.am).apply(null, arguments);
  };
  var _0x5c7aa8 = _0x2c3fe3.dynCall_viii = function () {
    return (_0x5c7aa8 = _0x2c3fe3.dynCall_viii = _0x2c3fe3.asm.bm).apply(null, arguments);
  };
  var _0xf33662 = _0x2c3fe3.dynCall_viiiiii = function () {
    return (_0xf33662 = _0x2c3fe3.dynCall_viiiiii = _0x2c3fe3.asm.cm).apply(null, arguments);
  };
  var _0x58c494 = _0x2c3fe3.dynCall_viiiii = function () {
    return (_0x58c494 = _0x2c3fe3.dynCall_viiiii = _0x2c3fe3.asm.dm).apply(null, arguments);
  };
  var _0x304a8b = _0x2c3fe3.dynCall_viiii = function () {
    return (_0x304a8b = _0x2c3fe3.dynCall_viiii = _0x2c3fe3.asm.em).apply(null, arguments);
  };
  var _0x133252 = _0x2c3fe3.dynCall_iiiiii = function () {
    return (_0x133252 = _0x2c3fe3.dynCall_iiiiii = _0x2c3fe3.asm.fm).apply(null, arguments);
  };
  var _0x5d9669 = _0x2c3fe3.dynCall_iiij = function () {
    return (_0x5d9669 = _0x2c3fe3.dynCall_iiij = _0x2c3fe3.asm.gm).apply(null, arguments);
  };
  var _0x21100c = _0x2c3fe3.dynCall_v = function () {
    return (_0x21100c = _0x2c3fe3.dynCall_v = _0x2c3fe3.asm.hm).apply(null, arguments);
  };
  var _0x5e9530 = _0x2c3fe3.dynCall_i = function () {
    return (_0x5e9530 = _0x2c3fe3.dynCall_i = _0x2c3fe3.asm.im).apply(null, arguments);
  };
  var _0x51ee34 = _0x2c3fe3.dynCall_iiiiiiii = function () {
    return (_0x51ee34 = _0x2c3fe3.dynCall_iiiiiiii = _0x2c3fe3.asm.jm).apply(null, arguments);
  };
  var _0x1aea28 = _0x2c3fe3.dynCall_iiijiii = function () {
    return (_0x1aea28 = _0x2c3fe3.dynCall_iiijiii = _0x2c3fe3.asm.km).apply(null, arguments);
  };
  var _0xbad421 = _0x2c3fe3.dynCall_iij = function () {
    return (_0xbad421 = _0x2c3fe3.dynCall_iij = _0x2c3fe3.asm.lm).apply(null, arguments);
  };
  var _0x598139 = _0x2c3fe3.dynCall_iiiiiii = function () {
    return (_0x598139 = _0x2c3fe3.dynCall_iiiiiii = _0x2c3fe3.asm.mm).apply(null, arguments);
  };
  var _0x227013 = _0x2c3fe3.dynCall_jii = function () {
    return (_0x227013 = _0x2c3fe3.dynCall_jii = _0x2c3fe3.asm.nm).apply(null, arguments);
  };
  var _0x4d1193 = _0x2c3fe3.dynCall_viiiiiii = function () {
    return (_0x4d1193 = _0x2c3fe3.dynCall_viiiiiii = _0x2c3fe3.asm.om).apply(null, arguments);
  };
  var _0x4b2dc7 = _0x2c3fe3.dynCall_viiji = function () {
    return (_0x4b2dc7 = _0x2c3fe3.dynCall_viiji = _0x2c3fe3.asm.pm).apply(null, arguments);
  };
  var _0x16a8b5 = _0x2c3fe3.dynCall_fii = function () {
    return (_0x16a8b5 = _0x2c3fe3.dynCall_fii = _0x2c3fe3.asm.qm).apply(null, arguments);
  };
  var _0x4267c7 = _0x2c3fe3.dynCall_viifi = function () {
    return (_0x4267c7 = _0x2c3fe3.dynCall_viifi = _0x2c3fe3.asm.rm).apply(null, arguments);
  };
  var _0x1408bb = _0x2c3fe3.dynCall_viiff = function () {
    return (_0x1408bb = _0x2c3fe3.dynCall_viiff = _0x2c3fe3.asm.sm).apply(null, arguments);
  };
  var _0x18b9a4 = _0x2c3fe3.dynCall_fiiffi = function () {
    return (_0x18b9a4 = _0x2c3fe3.dynCall_fiiffi = _0x2c3fe3.asm.tm).apply(null, arguments);
  };
  var _0x32cf36 = _0x2c3fe3.dynCall_viiififii = function () {
    return (_0x32cf36 = _0x2c3fe3.dynCall_viiififii = _0x2c3fe3.asm.um).apply(null, arguments);
  };
  var _0x7ef249 = _0x2c3fe3.dynCall_jiii = function () {
    return (_0x7ef249 = _0x2c3fe3.dynCall_jiii = _0x2c3fe3.asm.vm).apply(null, arguments);
  };
  var _0x37a3b7 = _0x2c3fe3.dynCall_fiii = function () {
    return (_0x37a3b7 = _0x2c3fe3.dynCall_fiii = _0x2c3fe3.asm.wm).apply(null, arguments);
  };
  var _0x2bbde6 = _0x2c3fe3.dynCall_viiiiiiiiifi = function () {
    return (_0x2bbde6 = _0x2c3fe3.dynCall_viiiiiiiiifi = _0x2c3fe3.asm.xm).apply(null, arguments);
  };
  var _0x26b7e3 = _0x2c3fe3.dynCall_iiiiiiiiiiiii = function () {
    return (_0x26b7e3 = _0x2c3fe3.dynCall_iiiiiiiiiiiii = _0x2c3fe3.asm.ym).apply(null, arguments);
  };
  var _0x35ddbf = _0x2c3fe3.dynCall_vijii = function () {
    return (_0x35ddbf = _0x2c3fe3.dynCall_vijii = _0x2c3fe3.asm.zm).apply(null, arguments);
  };
  var _0x5902a0 = _0x2c3fe3.dynCall_diii = function () {
    return (_0x5902a0 = _0x2c3fe3.dynCall_diii = _0x2c3fe3.asm.Am).apply(null, arguments);
  };
  var _0x5e014c = _0x2c3fe3.dynCall_viiiiiiiii = function () {
    return (_0x5e014c = _0x2c3fe3.dynCall_viiiiiiiii = _0x2c3fe3.asm.Bm).apply(null, arguments);
  };
  var _0x36dda4 = _0x2c3fe3.dynCall_viiiiiiiiiiii = function () {
    return (_0x36dda4 = _0x2c3fe3.dynCall_viiiiiiiiiiii = _0x2c3fe3.asm.Cm).apply(null, arguments);
  };
  var _0x53c771 = _0x2c3fe3.dynCall_viiiiiiiiiiiii = function () {
    return (_0x53c771 = _0x2c3fe3.dynCall_viiiiiiiiiiiii = _0x2c3fe3.asm.Dm).apply(null, arguments);
  };
  var _0x23ec73 = _0x2c3fe3.dynCall_viiiiiiiiiiiiii = function () {
    return (_0x23ec73 = _0x2c3fe3.dynCall_viiiiiiiiiiiiii = _0x2c3fe3.asm.Em).apply(null, arguments);
  };
  var _0x32f844 = _0x2c3fe3.dynCall_viiiiiiiiiiiiiii = function () {
    return (_0x32f844 = _0x2c3fe3.dynCall_viiiiiiiiiiiiiii = _0x2c3fe3.asm.Fm).apply(null, arguments);
  };
  var _0x411f80 = _0x2c3fe3.dynCall_viiiiiiiiiiiiiiii = function () {
    return (_0x411f80 = _0x2c3fe3.dynCall_viiiiiiiiiiiiiiii = _0x2c3fe3.asm.Gm).apply(null, arguments);
  };
  var _0x924b5c = _0x2c3fe3.dynCall_viiiiiiiiiiiiiiiii = function () {
    return (_0x924b5c = _0x2c3fe3.dynCall_viiiiiiiiiiiiiiiii = _0x2c3fe3.asm.Hm).apply(null, arguments);
  };
  var _0x3fd9e4 = _0x2c3fe3.dynCall_viiiiiiiiiiiiiiiiii = function () {
    return (_0x3fd9e4 = _0x2c3fe3.dynCall_viiiiiiiiiiiiiiiiii = _0x2c3fe3.asm.Im).apply(null, arguments);
  };
  var _0x5cfc22 = _0x2c3fe3.dynCall_viidi = function () {
    return (_0x5cfc22 = _0x2c3fe3.dynCall_viidi = _0x2c3fe3.asm.Jm).apply(null, arguments);
  };
  var _0x37a904 = _0x2c3fe3.dynCall_viiidi = function () {
    return (_0x37a904 = _0x2c3fe3.dynCall_viiidi = _0x2c3fe3.asm.Km).apply(null, arguments);
  };
  var _0x56942f = _0x2c3fe3.dynCall_viiiji = function () {
    return (_0x56942f = _0x2c3fe3.dynCall_viiiji = _0x2c3fe3.asm.Lm).apply(null, arguments);
  };
  var _0x587e67 = _0x2c3fe3.dynCall_viiifi = function () {
    return (_0x587e67 = _0x2c3fe3.dynCall_viiifi = _0x2c3fe3.asm.Mm).apply(null, arguments);
  };
  var _0x6ef24b = _0x2c3fe3.dynCall_vifffi = function () {
    return (_0x6ef24b = _0x2c3fe3.dynCall_vifffi = _0x2c3fe3.asm.Nm).apply(null, arguments);
  };
  var _0x28ee40 = _0x2c3fe3.dynCall_viidiji = function () {
    return (_0x28ee40 = _0x2c3fe3.dynCall_viidiji = _0x2c3fe3.asm.Om).apply(null, arguments);
  };
  var _0x1984b8 = _0x2c3fe3.dynCall_viidjii = function () {
    return (_0x1984b8 = _0x2c3fe3.dynCall_viidjii = _0x2c3fe3.asm.Pm).apply(null, arguments);
  };
  var _0x1fb482 = _0x2c3fe3.dynCall_vijijii = function () {
    return (_0x1fb482 = _0x2c3fe3.dynCall_vijijii = _0x2c3fe3.asm.Qm).apply(null, arguments);
  };
  var _0x20a6cc = _0x2c3fe3.dynCall_viiiiiiii = function () {
    return (_0x20a6cc = _0x2c3fe3.dynCall_viiiiiiii = _0x2c3fe3.asm.Rm).apply(null, arguments);
  };
  var _0x22db39 = _0x2c3fe3.dynCall_viiiiiiiiii = function () {
    return (_0x22db39 = _0x2c3fe3.dynCall_viiiiiiiiii = _0x2c3fe3.asm.Sm).apply(null, arguments);
  };
  var _0x46d1b7 = _0x2c3fe3.dynCall_viiiiiiiiiii = function () {
    return (_0x46d1b7 = _0x2c3fe3.dynCall_viiiiiiiiiii = _0x2c3fe3.asm.Tm).apply(null, arguments);
  };
  var _0x52cbe1 = _0x2c3fe3.dynCall_iijji = function () {
    return (_0x52cbe1 = _0x2c3fe3.dynCall_iijji = _0x2c3fe3.asm.Um).apply(null, arguments);
  };
  var _0x3b0b86 = _0x2c3fe3.dynCall_iiddi = function () {
    return (_0x3b0b86 = _0x2c3fe3.dynCall_iiddi = _0x2c3fe3.asm.Vm).apply(null, arguments);
  };
  var _0x5a2b0c = _0x2c3fe3.dynCall_iiffi = function () {
    return (_0x5a2b0c = _0x2c3fe3.dynCall_iiffi = _0x2c3fe3.asm.Wm).apply(null, arguments);
  };
  var _0x2c69ea = _0x2c3fe3.dynCall_viijji = function () {
    return (_0x2c69ea = _0x2c3fe3.dynCall_viijji = _0x2c3fe3.asm.Xm).apply(null, arguments);
  };
  var _0x5bd5c8 = _0x2c3fe3.dynCall_jdi = function () {
    return (_0x5bd5c8 = _0x2c3fe3.dynCall_jdi = _0x2c3fe3.asm.Ym).apply(null, arguments);
  };
  var _0x3dc7b3 = _0x2c3fe3.dynCall_vijiii = function () {
    return (_0x3dc7b3 = _0x2c3fe3.dynCall_vijiii = _0x2c3fe3.asm.Zm).apply(null, arguments);
  };
  var _0x526a85 = _0x2c3fe3.dynCall_ijiii = function () {
    return (_0x526a85 = _0x2c3fe3.dynCall_ijiii = _0x2c3fe3.asm._m).apply(null, arguments);
  };
  var _0x3ad1d5 = _0x2c3fe3.dynCall_ji = function () {
    return (_0x3ad1d5 = _0x2c3fe3.dynCall_ji = _0x2c3fe3.asm.$m).apply(null, arguments);
  };
  var _0x49453e = _0x2c3fe3.dynCall_iiji = function () {
    return (_0x49453e = _0x2c3fe3.dynCall_iiji = _0x2c3fe3.asm.an).apply(null, arguments);
  };
  var _0x41d50c = _0x2c3fe3.dynCall_jiiji = function () {
    return (_0x41d50c = _0x2c3fe3.dynCall_jiiji = _0x2c3fe3.asm.bn).apply(null, arguments);
  };
  var _0x56ec03 = _0x2c3fe3.dynCall_viji = function () {
    return (_0x56ec03 = _0x2c3fe3.dynCall_viji = _0x2c3fe3.asm.cn).apply(null, arguments);
  };
  var _0x5adbab = _0x2c3fe3.dynCall_jji = function () {
    return (_0x5adbab = _0x2c3fe3.dynCall_jji = _0x2c3fe3.asm.dn).apply(null, arguments);
  };
  var _0x339c77 = _0x2c3fe3.dynCall_viiij = function () {
    return (_0x339c77 = _0x2c3fe3.dynCall_viiij = _0x2c3fe3.asm.en).apply(null, arguments);
  };
  var _0xc577a9 = _0x2c3fe3.dynCall_vifii = function () {
    return (_0xc577a9 = _0x2c3fe3.dynCall_vifii = _0x2c3fe3.asm.fn).apply(null, arguments);
  };
  var _0x307226 = _0x2c3fe3.dynCall_jjji = function () {
    return (_0x307226 = _0x2c3fe3.dynCall_jjji = _0x2c3fe3.asm.gn).apply(null, arguments);
  };
  var _0x2208ff = _0x2c3fe3.dynCall_ijji = function () {
    return (_0x2208ff = _0x2c3fe3.dynCall_ijji = _0x2c3fe3.asm.hn).apply(null, arguments);
  };
  var _0x20fcb5 = _0x2c3fe3.dynCall_jiiii = function () {
    return (_0x20fcb5 = _0x2c3fe3.dynCall_jiiii = _0x2c3fe3.asm.jn).apply(null, arguments);
  };
  var _0x58754c = _0x2c3fe3.dynCall_viij = function () {
    return (_0x58754c = _0x2c3fe3.dynCall_viij = _0x2c3fe3.asm.kn).apply(null, arguments);
  };
  var _0x2c3184 = _0x2c3fe3.dynCall_iijii = function () {
    return (_0x2c3184 = _0x2c3fe3.dynCall_iijii = _0x2c3fe3.asm.ln).apply(null, arguments);
  };
  var _0x55bc63 = _0x2c3fe3.dynCall_viiijj = function () {
    return (_0x55bc63 = _0x2c3fe3.dynCall_viiijj = _0x2c3fe3.asm.mn).apply(null, arguments);
  };
  var _0x259179 = _0x2c3fe3.dynCall_viiiidi = function () {
    return (_0x259179 = _0x2c3fe3.dynCall_viiiidi = _0x2c3fe3.asm.nn).apply(null, arguments);
  };
  var _0x527b9f = _0x2c3fe3.dynCall_iiiiiiiii = function () {
    return (_0x527b9f = _0x2c3fe3.dynCall_iiiiiiiii = _0x2c3fe3.asm.on).apply(null, arguments);
  };
  var _0x7f9b65 = _0x2c3fe3.dynCall_vidi = function () {
    return (_0x7f9b65 = _0x2c3fe3.dynCall_vidi = _0x2c3fe3.asm.pn).apply(null, arguments);
  };
  var _0x3f406d = _0x2c3fe3.dynCall_iiiiiiidii = function () {
    return (_0x3f406d = _0x2c3fe3.dynCall_iiiiiiidii = _0x2c3fe3.asm.qn).apply(null, arguments);
  };
  var _0x29c931 = _0x2c3fe3.dynCall_viiiidij = function () {
    return (_0x29c931 = _0x2c3fe3.dynCall_viiiidij = _0x2c3fe3.asm.rn).apply(null, arguments);
  };
  var _0x45772a = _0x2c3fe3.dynCall_dii = function () {
    return (_0x45772a = _0x2c3fe3.dynCall_dii = _0x2c3fe3.asm.sn).apply(null, arguments);
  };
  var _0x42beef = _0x2c3fe3.dynCall_ifi = function () {
    return (_0x42beef = _0x2c3fe3.dynCall_ifi = _0x2c3fe3.asm.tn).apply(null, arguments);
  };
  var _0x478d14 = _0x2c3fe3.dynCall_idi = function () {
    return (_0x478d14 = _0x2c3fe3.dynCall_idi = _0x2c3fe3.asm.un).apply(null, arguments);
  };
  var _0x42d8c9 = _0x2c3fe3.dynCall_iiiiji = function () {
    return (_0x42d8c9 = _0x2c3fe3.dynCall_iiiiji = _0x2c3fe3.asm.vn).apply(null, arguments);
  };
  var _0x5e65b0 = _0x2c3fe3.dynCall_vifi = function () {
    return (_0x5e65b0 = _0x2c3fe3.dynCall_vifi = _0x2c3fe3.asm.wn).apply(null, arguments);
  };
  var _0x434d84 = _0x2c3fe3.dynCall_fffi = function () {
    return (_0x434d84 = _0x2c3fe3.dynCall_fffi = _0x2c3fe3.asm.xn).apply(null, arguments);
  };
  var _0x12e017 = _0x2c3fe3.dynCall_dddi = function () {
    return (_0x12e017 = _0x2c3fe3.dynCall_dddi = _0x2c3fe3.asm.yn).apply(null, arguments);
  };
  var _0x187d3f = _0x2c3fe3.dynCall_diiii = function () {
    return (_0x187d3f = _0x2c3fe3.dynCall_diiii = _0x2c3fe3.asm.zn).apply(null, arguments);
  };
  var _0x5b76cd = _0x2c3fe3.dynCall_iidi = function () {
    return (_0x5b76cd = _0x2c3fe3.dynCall_iidi = _0x2c3fe3.asm.An).apply(null, arguments);
  };
  var _0x29a82b = _0x2c3fe3.dynCall_iifi = function () {
    return (_0x29a82b = _0x2c3fe3.dynCall_iifi = _0x2c3fe3.asm.Bn).apply(null, arguments);
  };
  var _0x27482a = _0x2c3fe3.dynCall_diiid = function () {
    return (_0x27482a = _0x2c3fe3.dynCall_diiid = _0x2c3fe3.asm.Cn).apply(null, arguments);
  };
  var _0x845c3d = _0x2c3fe3.dynCall_jiiij = function () {
    return (_0x845c3d = _0x2c3fe3.dynCall_jiiij = _0x2c3fe3.asm.Dn).apply(null, arguments);
  };
  var _0x3407ad = _0x2c3fe3.dynCall_fiiif = function () {
    return (_0x3407ad = _0x2c3fe3.dynCall_fiiif = _0x2c3fe3.asm.En).apply(null, arguments);
  };
  var _0x45d0b0 = _0x2c3fe3.dynCall_iji = function () {
    return (_0x45d0b0 = _0x2c3fe3.dynCall_iji = _0x2c3fe3.asm.Fn).apply(null, arguments);
  };
  var _0x3cfd74 = _0x2c3fe3.dynCall_vijiiii = function () {
    return (_0x3cfd74 = _0x2c3fe3.dynCall_vijiiii = _0x2c3fe3.asm.Gn).apply(null, arguments);
  };
  var _0x337a7d = _0x2c3fe3.dynCall_iiiiidi = function () {
    return (_0x337a7d = _0x2c3fe3.dynCall_iiiiidi = _0x2c3fe3.asm.Hn).apply(null, arguments);
  };
  var _0x2e8689 = _0x2c3fe3.dynCall_iiiifiiiiiiiii = function () {
    return (_0x2e8689 = _0x2c3fe3.dynCall_iiiifiiiiiiiii = _0x2c3fe3.asm.In).apply(null, arguments);
  };
  var _0x5f7c4d = _0x2c3fe3.dynCall_iiiiiiiiiiiiiiiiiii = function () {
    return (_0x5f7c4d = _0x2c3fe3.dynCall_iiiiiiiiiiiiiiiiiii = _0x2c3fe3.asm.Jn).apply(null, arguments);
  };
  var _0xa676ae = _0x2c3fe3.dynCall_fi = function () {
    return (_0xa676ae = _0x2c3fe3.dynCall_fi = _0x2c3fe3.asm.Kn).apply(null, arguments);
  };
  var _0x1d78f8 = _0x2c3fe3.dynCall_iiiiiiiiii = function () {
    return (_0x1d78f8 = _0x2c3fe3.dynCall_iiiiiiiiii = _0x2c3fe3.asm.Ln).apply(null, arguments);
  };
  var _0xe556c = _0x2c3fe3.dynCall_viffi = function () {
    return (_0xe556c = _0x2c3fe3.dynCall_viffi = _0x2c3fe3.asm.Mn).apply(null, arguments);
  };
  var _0x4156c5 = _0x2c3fe3.dynCall_viiiifiiifiiiiiiii = function () {
    return (_0x4156c5 = _0x2c3fe3.dynCall_viiiifiiifiiiiiiii = _0x2c3fe3.asm.Nn).apply(null, arguments);
  };
  var _0x2e0afb = _0x2c3fe3.dynCall_vfi = function () {
    return (_0x2e0afb = _0x2c3fe3.dynCall_vfi = _0x2c3fe3.asm.On).apply(null, arguments);
  };
  var _0x267e1a = _0x2c3fe3.dynCall_viiffiiiiiiiiiiiii = function () {
    return (_0x267e1a = _0x2c3fe3.dynCall_viiffiiiiiiiiiiiii = _0x2c3fe3.asm.Pn).apply(null, arguments);
  };
  var _0x47bfac = _0x2c3fe3.dynCall_viifii = function () {
    return (_0x47bfac = _0x2c3fe3.dynCall_viifii = _0x2c3fe3.asm.Qn).apply(null, arguments);
  };
  var _0x390327 = _0x2c3fe3.dynCall_iiffii = function () {
    return (_0x390327 = _0x2c3fe3.dynCall_iiffii = _0x2c3fe3.asm.Rn).apply(null, arguments);
  };
  var _0x4c7a7 = _0x2c3fe3.dynCall_viffffi = function () {
    return (_0x4c7a7 = _0x2c3fe3.dynCall_viffffi = _0x2c3fe3.asm.Sn).apply(null, arguments);
  };
  var _0x19c10d = _0x2c3fe3.dynCall_iiiiffi = function () {
    return (_0x19c10d = _0x2c3fe3.dynCall_iiiiffi = _0x2c3fe3.asm.Tn).apply(null, arguments);
  };
  var _0x1c670b = _0x2c3fe3.dynCall_viiiiffi = function () {
    return (_0x1c670b = _0x2c3fe3.dynCall_viiiiffi = _0x2c3fe3.asm.Un).apply(null, arguments);
  };
  var _0xa286cc = _0x2c3fe3.dynCall_viiiffi = function () {
    return (_0xa286cc = _0x2c3fe3.dynCall_viiiffi = _0x2c3fe3.asm.Vn).apply(null, arguments);
  };
  var _0x29a916 = _0x2c3fe3.dynCall_viiiifiii = function () {
    return (_0x29a916 = _0x2c3fe3.dynCall_viiiifiii = _0x2c3fe3.asm.Wn).apply(null, arguments);
  };
  var _0x4a8f66 = _0x2c3fe3.dynCall_vifffiii = function () {
    return (_0x4a8f66 = _0x2c3fe3.dynCall_vifffiii = _0x2c3fe3.asm.Xn).apply(null, arguments);
  };
  var _0x457b27 = _0x2c3fe3.dynCall_viiifii = function () {
    return (_0x457b27 = _0x2c3fe3.dynCall_viiifii = _0x2c3fe3.asm.Yn).apply(null, arguments);
  };
  var _0x6309a = _0x2c3fe3.dynCall_iiiiiiifi = function () {
    return (_0x6309a = _0x2c3fe3.dynCall_iiiiiiifi = _0x2c3fe3.asm.Zn).apply(null, arguments);
  };
  var _0x1bd836 = _0x2c3fe3.dynCall_iiifi = function () {
    return (_0x1bd836 = _0x2c3fe3.dynCall_iiifi = _0x2c3fe3.asm._n).apply(null, arguments);
  };
  var _0x90b6c6 = _0x2c3fe3.dynCall_jiiijii = function () {
    return (_0x90b6c6 = _0x2c3fe3.dynCall_jiiijii = _0x2c3fe3.asm.$n).apply(null, arguments);
  };
  var _0x3727b3 = _0x2c3fe3.dynCall_viiijiii = function () {
    return (_0x3727b3 = _0x2c3fe3.dynCall_viiijiii = _0x2c3fe3.asm.ao).apply(null, arguments);
  };
  var _0x396aa4 = _0x2c3fe3.dynCall_viiiiiiifiifiii = function () {
    return (_0x396aa4 = _0x2c3fe3.dynCall_viiiiiiifiifiii = _0x2c3fe3.asm.bo).apply(null, arguments);
  };
  var _0x2c80fa = _0x2c3fe3.dynCall_viiiiiiifddfiii = function () {
    return (_0x2c80fa = _0x2c3fe3.dynCall_viiiiiiifddfiii = _0x2c3fe3.asm.co).apply(null, arguments);
  };
  var _0x1372cd = _0x2c3fe3.dynCall_viiiiiiifjjfiii = function () {
    return (_0x1372cd = _0x2c3fe3.dynCall_viiiiiiifjjfiii = _0x2c3fe3.asm.eo).apply(null, arguments);
  };
  var _0xb2fc63 = _0x2c3fe3.dynCall_jjii = function () {
    return (_0xb2fc63 = _0x2c3fe3.dynCall_jjii = _0x2c3fe3.asm.fo).apply(null, arguments);
  };
  var _0x4ce547 = _0x2c3fe3.dynCall_iijiii = function () {
    return (_0x4ce547 = _0x2c3fe3.dynCall_iijiii = _0x2c3fe3.asm.go).apply(null, arguments);
  };
  var _0x4ae4b4 = _0x2c3fe3.dynCall_jidi = function () {
    return (_0x4ae4b4 = _0x2c3fe3.dynCall_jidi = _0x2c3fe3.asm.ho).apply(null, arguments);
  };
  var _0x3fbb12 = _0x2c3fe3.dynCall_viif = function () {
    return (_0x3fbb12 = _0x2c3fe3.dynCall_viif = _0x2c3fe3.asm.io).apply(null, arguments);
  };
  var _0x5005ab = _0x2c3fe3.dynCall_viiiifi = function () {
    return (_0x5005ab = _0x2c3fe3.dynCall_viiiifi = _0x2c3fe3.asm.jo).apply(null, arguments);
  };
  var _0x139ba9 = _0x2c3fe3.dynCall_dji = function () {
    return (_0x139ba9 = _0x2c3fe3.dynCall_dji = _0x2c3fe3.asm.ko).apply(null, arguments);
  };
  var _0x2f8b4e = _0x2c3fe3.dynCall_iiiiifi = function () {
    return (_0x2f8b4e = _0x2c3fe3.dynCall_iiiiifi = _0x2c3fe3.asm.lo).apply(null, arguments);
  };
  var _0x4d3acf = _0x2c3fe3.dynCall_viiifffiiiiii = function () {
    return (_0x4d3acf = _0x2c3fe3.dynCall_viiifffiiiiii = _0x2c3fe3.asm.mo).apply(null, arguments);
  };
  var _0x4f870d = _0x2c3fe3.dynCall_viiffffffiiiiifi = function () {
    return (_0x4f870d = _0x2c3fe3.dynCall_viiffffffiiiiifi = _0x2c3fe3.asm.no).apply(null, arguments);
  };
  var _0x3a906e = _0x2c3fe3.dynCall_viiifffi = function () {
    return (_0x3a906e = _0x2c3fe3.dynCall_viiifffi = _0x2c3fe3.asm.oo).apply(null, arguments);
  };
  var _0x477ab6 = _0x2c3fe3.dynCall_viffiiiiiiiiiiiii = function () {
    return (_0x477ab6 = _0x2c3fe3.dynCall_viffiiiiiiiiiiiii = _0x2c3fe3.asm.po).apply(null, arguments);
  };
  var _0x25d4a1 = _0x2c3fe3.dynCall_iifii = function () {
    return (_0x25d4a1 = _0x2c3fe3.dynCall_iifii = _0x2c3fe3.asm.qo).apply(null, arguments);
  };
  var _0x230310 = _0x2c3fe3.dynCall_iiffifiiii = function () {
    return (_0x230310 = _0x2c3fe3.dynCall_iiffifiiii = _0x2c3fe3.asm.ro).apply(null, arguments);
  };
  var _0x369398 = _0x2c3fe3.dynCall_viijiiijiiii = function () {
    return (_0x369398 = _0x2c3fe3.dynCall_viijiiijiiii = _0x2c3fe3.asm.so).apply(null, arguments);
  };
  var _0x366ef2 = _0x2c3fe3.dynCall_iiiiij = function () {
    return (_0x366ef2 = _0x2c3fe3.dynCall_iiiiij = _0x2c3fe3.asm.to).apply(null, arguments);
  };
  var _0x59cd5d = _0x2c3fe3.dynCall_vijjji = function () {
    return (_0x59cd5d = _0x2c3fe3.dynCall_vijjji = _0x2c3fe3.asm.uo).apply(null, arguments);
  };
  var _0x2ed5c7 = _0x2c3fe3.dynCall_viidii = function () {
    return (_0x2ed5c7 = _0x2c3fe3.dynCall_viidii = _0x2c3fe3.asm.vo).apply(null, arguments);
  };
  var _0xbcc834 = _0x2c3fe3.dynCall_vidiii = function () {
    return (_0xbcc834 = _0x2c3fe3.dynCall_vidiii = _0x2c3fe3.asm.wo).apply(null, arguments);
  };
  var _0xefed = _0x2c3fe3.dynCall_viiddi = function () {
    return (_0xefed = _0x2c3fe3.dynCall_viiddi = _0x2c3fe3.asm.xo).apply(null, arguments);
  };
  var _0x46c3b1 = _0x2c3fe3.dynCall_iiiji = function () {
    return (_0x46c3b1 = _0x2c3fe3.dynCall_iiiji = _0x2c3fe3.asm.yo).apply(null, arguments);
  };
  var _0x5f1a8c = _0x2c3fe3.dynCall_iiiiff = function () {
    return (_0x5f1a8c = _0x2c3fe3.dynCall_iiiiff = _0x2c3fe3.asm.zo).apply(null, arguments);
  };
  var _0x137788 = _0x2c3fe3.dynCall_ddiii = function () {
    return (_0x137788 = _0x2c3fe3.dynCall_ddiii = _0x2c3fe3.asm.Ao).apply(null, arguments);
  };
  var _0x5791e4 = _0x2c3fe3.dynCall_iiiifii = function () {
    return (_0x5791e4 = _0x2c3fe3.dynCall_iiiifii = _0x2c3fe3.asm.Bo).apply(null, arguments);
  };
  var _0x5ad94b = _0x2c3fe3.dynCall_iiifii = function () {
    return (_0x5ad94b = _0x2c3fe3.dynCall_iiifii = _0x2c3fe3.asm.Co).apply(null, arguments);
  };
  var _0x1aa9ed = _0x2c3fe3.dynCall_viiiifii = function () {
    return (_0x1aa9ed = _0x2c3fe3.dynCall_viiiifii = _0x2c3fe3.asm.Do).apply(null, arguments);
  };
  var _0x58964a = _0x2c3fe3.dynCall_viiffi = function () {
    return (_0x58964a = _0x2c3fe3.dynCall_viiffi = _0x2c3fe3.asm.Eo).apply(null, arguments);
  };
  var _0x3dcf28 = _0x2c3fe3.dynCall_viiiijiii = function () {
    return (_0x3dcf28 = _0x2c3fe3.dynCall_viiiijiii = _0x2c3fe3.asm.Fo).apply(null, arguments);
  };
  var _0x314c86 = _0x2c3fe3.dynCall_fiiii = function () {
    return (_0x314c86 = _0x2c3fe3.dynCall_fiiii = _0x2c3fe3.asm.Go).apply(null, arguments);
  };
  var _0x27d05e = _0x2c3fe3.dynCall_iiiifi = function () {
    return (_0x27d05e = _0x2c3fe3.dynCall_iiiifi = _0x2c3fe3.asm.Ho).apply(null, arguments);
  };
  var _0x5f5265 = _0x2c3fe3.dynCall_iiijii = function () {
    return (_0x5f5265 = _0x2c3fe3.dynCall_iiijii = _0x2c3fe3.asm.Io).apply(null, arguments);
  };
  var _0xb42b31 = _0x2c3fe3.dynCall_iijiiii = function () {
    return (_0xb42b31 = _0x2c3fe3.dynCall_iijiiii = _0x2c3fe3.asm.Jo).apply(null, arguments);
  };
  var _0x12c5b5 = _0x2c3fe3.dynCall_jijiii = function () {
    return (_0x12c5b5 = _0x2c3fe3.dynCall_jijiii = _0x2c3fe3.asm.Ko).apply(null, arguments);
  };
  var _0x33e744 = _0x2c3fe3.dynCall_viijii = function () {
    return (_0x33e744 = _0x2c3fe3.dynCall_viijii = _0x2c3fe3.asm.Lo).apply(null, arguments);
  };
  var _0x1862d0 = _0x2c3fe3.dynCall_iijiiiiii = function () {
    return (_0x1862d0 = _0x2c3fe3.dynCall_iijiiiiii = _0x2c3fe3.asm.Mo).apply(null, arguments);
  };
  var _0x366d6b = _0x2c3fe3.dynCall_iijjiiiiii = function () {
    return (_0x366d6b = _0x2c3fe3.dynCall_iijjiiiiii = _0x2c3fe3.asm.No).apply(null, arguments);
  };
  var _0x34301e = _0x2c3fe3.dynCall_iiiijjii = function () {
    return (_0x34301e = _0x2c3fe3.dynCall_iiiijjii = _0x2c3fe3.asm.Oo).apply(null, arguments);
  };
  var _0x5db8b5 = _0x2c3fe3.dynCall_j = function () {
    return (_0x5db8b5 = _0x2c3fe3.dynCall_j = _0x2c3fe3.asm.Po).apply(null, arguments);
  };
  var _0x1a1cb1 = _0x2c3fe3.dynCall_jijj = function () {
    return (_0x1a1cb1 = _0x2c3fe3.dynCall_jijj = _0x2c3fe3.asm.Qo).apply(null, arguments);
  };
  var _0x55eed6 = _0x2c3fe3.dynCall_iiiiiiiiiji = function () {
    return (_0x55eed6 = _0x2c3fe3.dynCall_iiiiiiiiiji = _0x2c3fe3.asm.Ro).apply(null, arguments);
  };
  var _0xbabfbc = _0x2c3fe3.dynCall_vji = function () {
    return (_0xbabfbc = _0x2c3fe3.dynCall_vji = _0x2c3fe3.asm.So).apply(null, arguments);
  };
  var _0x312c95 = _0x2c3fe3.dynCall_di = function () {
    return (_0x312c95 = _0x2c3fe3.dynCall_di = _0x2c3fe3.asm.To).apply(null, arguments);
  };
  var _0x146c64 = _0x2c3fe3.dynCall_iiiiiiiiiii = function () {
    return (_0x146c64 = _0x2c3fe3.dynCall_iiiiiiiiiii = _0x2c3fe3.asm.Uo).apply(null, arguments);
  };
  var _0x121912 = _0x2c3fe3.dynCall_iiiiiiiiiiii = function () {
    return (_0x121912 = _0x2c3fe3.dynCall_iiiiiiiiiiii = _0x2c3fe3.asm.Vo).apply(null, arguments);
  };
  var _0x286555 = _0x2c3fe3.dynCall_iiiiiiiiiiiiii = function () {
    return (_0x286555 = _0x2c3fe3.dynCall_iiiiiiiiiiiiii = _0x2c3fe3.asm.Wo).apply(null, arguments);
  };
  var _0x443d4c = _0x2c3fe3.dynCall_iiiiiiiiiiiiiii = function () {
    return (_0x443d4c = _0x2c3fe3.dynCall_iiiiiiiiiiiiiii = _0x2c3fe3.asm.Xo).apply(null, arguments);
  };
  var _0x10fa6a = _0x2c3fe3.dynCall_iiiiiiiiiiiiiiii = function () {
    return (_0x10fa6a = _0x2c3fe3.dynCall_iiiiiiiiiiiiiiii = _0x2c3fe3.asm.Yo).apply(null, arguments);
  };
  var _0x5a6ccf = _0x2c3fe3.dynCall_iiiiiiiiiiiiiiiii = function () {
    return (_0x5a6ccf = _0x2c3fe3.dynCall_iiiiiiiiiiiiiiiii = _0x2c3fe3.asm.Zo).apply(null, arguments);
  };
  var _0x252505 = _0x2c3fe3.dynCall_iiiiiiiiiiiiiiiiii = function () {
    return (_0x252505 = _0x2c3fe3.dynCall_iiiiiiiiiiiiiiiiii = _0x2c3fe3.asm._o).apply(null, arguments);
  };
  var _0x37bec7 = _0x2c3fe3.dynCall_fifi = function () {
    return (_0x37bec7 = _0x2c3fe3.dynCall_fifi = _0x2c3fe3.asm.$o).apply(null, arguments);
  };
  var _0xf7d1aa = _0x2c3fe3.dynCall_fiifi = function () {
    return (_0xf7d1aa = _0x2c3fe3.dynCall_fiifi = _0x2c3fe3.asm.ap).apply(null, arguments);
  };
  var _0x200f3c = _0x2c3fe3.dynCall_iiidii = function () {
    return (_0x200f3c = _0x2c3fe3.dynCall_iiidii = _0x2c3fe3.asm.bp).apply(null, arguments);
  };
  var _0x44223b = _0x2c3fe3.dynCall_fiffffi = function () {
    return (_0x44223b = _0x2c3fe3.dynCall_fiffffi = _0x2c3fe3.asm.cp).apply(null, arguments);
  };
  var _0x49e1f9 = _0x2c3fe3.dynCall_viiiiiiiffffiii = function () {
    return (_0x49e1f9 = _0x2c3fe3.dynCall_viiiiiiiffffiii = _0x2c3fe3.asm.dp).apply(null, arguments);
  };
  var _0x23419c = _0x2c3fe3.dynCall_fiifii = function () {
    return (_0x23419c = _0x2c3fe3.dynCall_fiifii = _0x2c3fe3.asm.ep).apply(null, arguments);
  };
  var _0x36a1fa = _0x2c3fe3.dynCall_iiiiidii = function () {
    return (_0x36a1fa = _0x2c3fe3.dynCall_iiiiidii = _0x2c3fe3.asm.fp).apply(null, arguments);
  };
  var _0x1ae296 = _0x2c3fe3.dynCall_jiiiiiiiiii = function () {
    return (_0x1ae296 = _0x2c3fe3.dynCall_jiiiiiiiiii = _0x2c3fe3.asm.gp).apply(null, arguments);
  };
  var _0xb89b5 = _0x2c3fe3.dynCall_viijiiiiii = function () {
    return (_0xb89b5 = _0x2c3fe3.dynCall_viijiiiiii = _0x2c3fe3.asm.hp).apply(null, arguments);
  };
  var _0x5512c4 = _0x2c3fe3.dynCall_vjjjiiii = function () {
    return (_0x5512c4 = _0x2c3fe3.dynCall_vjjjiiii = _0x2c3fe3.asm.ip).apply(null, arguments);
  };
  var _0x3b163f = _0x2c3fe3.dynCall_vjiiiii = function () {
    return (_0x3b163f = _0x2c3fe3.dynCall_vjiiiii = _0x2c3fe3.asm.jp).apply(null, arguments);
  };
  var _0x5371fb = _0x2c3fe3.dynCall_jiiiii = function () {
    return (_0x5371fb = _0x2c3fe3.dynCall_jiiiii = _0x2c3fe3.asm.kp).apply(null, arguments);
  };
  var _0x5dd7d4 = _0x2c3fe3.dynCall_fifii = function () {
    return (_0x5dd7d4 = _0x2c3fe3.dynCall_fifii = _0x2c3fe3.asm.lp).apply(null, arguments);
  };
  var _0x770dc3 = _0x2c3fe3.dynCall_fiffi = function () {
    return (_0x770dc3 = _0x2c3fe3.dynCall_fiffi = _0x2c3fe3.asm.mp).apply(null, arguments);
  };
  var _0x499461 = _0x2c3fe3.dynCall_fiiifi = function () {
    return (_0x499461 = _0x2c3fe3.dynCall_fiiifi = _0x2c3fe3.asm.np).apply(null, arguments);
  };
  var _0x9b7dcd = _0x2c3fe3.dynCall_viiifiii = function () {
    return (_0x9b7dcd = _0x2c3fe3.dynCall_viiifiii = _0x2c3fe3.asm.op).apply(null, arguments);
  };
  var _0x2866b8 = _0x2c3fe3.dynCall_fifffi = function () {
    return (_0x2866b8 = _0x2c3fe3.dynCall_fifffi = _0x2c3fe3.asm.pp).apply(null, arguments);
  };
  var _0x1ac721 = _0x2c3fe3.dynCall_iiifiii = function () {
    return (_0x1ac721 = _0x2c3fe3.dynCall_iiifiii = _0x2c3fe3.asm.qp).apply(null, arguments);
  };
  var _0x5a2e17 = _0x2c3fe3.dynCall_iifffffiii = function () {
    return (_0x5a2e17 = _0x2c3fe3.dynCall_iifffffiii = _0x2c3fe3.asm.rp).apply(null, arguments);
  };
  var _0x481f12 = _0x2c3fe3.dynCall_viiiffii = function () {
    return (_0x481f12 = _0x2c3fe3.dynCall_viiiffii = _0x2c3fe3.asm.sp).apply(null, arguments);
  };
  var _0xb3d3c6 = _0x2c3fe3.dynCall_viiiiffiii = function () {
    return (_0xb3d3c6 = _0x2c3fe3.dynCall_viiiiffiii = _0x2c3fe3.asm.tp).apply(null, arguments);
  };
  var _0x121613 = _0x2c3fe3.dynCall_viiiiffiiii = function () {
    return (_0x121613 = _0x2c3fe3.dynCall_viiiiffiiii = _0x2c3fe3.asm.up).apply(null, arguments);
  };
  var _0x34b957 = _0x2c3fe3.dynCall_viiifiiii = function () {
    return (_0x34b957 = _0x2c3fe3.dynCall_viiifiiii = _0x2c3fe3.asm.vp).apply(null, arguments);
  };
  var _0x2713e7 = _0x2c3fe3.dynCall_vifiii = function () {
    return (_0x2713e7 = _0x2c3fe3.dynCall_vifiii = _0x2c3fe3.asm.wp).apply(null, arguments);
  };
  var _0x928115 = _0x2c3fe3.dynCall_vifiiifi = function () {
    return (_0x928115 = _0x2c3fe3.dynCall_vifiiifi = _0x2c3fe3.asm.xp).apply(null, arguments);
  };
  var _0x1d6816 = _0x2c3fe3.dynCall_viifiiifi = function () {
    return (_0x1d6816 = _0x2c3fe3.dynCall_viifiiifi = _0x2c3fe3.asm.yp).apply(null, arguments);
  };
  var _0x284921 = _0x2c3fe3.dynCall_viffiifi = function () {
    return (_0x284921 = _0x2c3fe3.dynCall_viffiifi = _0x2c3fe3.asm.zp).apply(null, arguments);
  };
  var _0x346509 = _0x2c3fe3.dynCall_ffi = function () {
    return (_0x346509 = _0x2c3fe3.dynCall_ffi = _0x2c3fe3.asm.Ap).apply(null, arguments);
  };
  var _0x4ad0a7 = _0x2c3fe3.dynCall_viiiiffffi = function () {
    return (_0x4ad0a7 = _0x2c3fe3.dynCall_viiiiffffi = _0x2c3fe3.asm.Bp).apply(null, arguments);
  };
  var _0x39ead1 = _0x2c3fe3.dynCall_fiiiii = function () {
    return (_0x39ead1 = _0x2c3fe3.dynCall_fiiiii = _0x2c3fe3.asm.Cp).apply(null, arguments);
  };
  var _0x495a28 = _0x2c3fe3.dynCall_fiiiiii = function () {
    return (_0x495a28 = _0x2c3fe3.dynCall_fiiiiii = _0x2c3fe3.asm.Dp).apply(null, arguments);
  };
  var _0x292b95 = _0x2c3fe3.dynCall_ffffi = function () {
    return (_0x292b95 = _0x2c3fe3.dynCall_ffffi = _0x2c3fe3.asm.Ep).apply(null, arguments);
  };
  var _0x3a1e6a = _0x2c3fe3.dynCall_ffffffi = function () {
    return (_0x3a1e6a = _0x2c3fe3.dynCall_ffffffi = _0x2c3fe3.asm.Fp).apply(null, arguments);
  };
  var _0x57e731 = _0x2c3fe3.dynCall_viiifffiiiiiiifffiiii = function () {
    return (_0x57e731 = _0x2c3fe3.dynCall_viiifffiiiiiiifffiiii = _0x2c3fe3.asm.Gp).apply(null, arguments);
  };
  var _0x189fa6 = _0x2c3fe3.dynCall_viiffii = function () {
    return (_0x189fa6 = _0x2c3fe3.dynCall_viiffii = _0x2c3fe3.asm.Hp).apply(null, arguments);
  };
  var _0x488500 = _0x2c3fe3.dynCall_viiiffiii = function () {
    return (_0x488500 = _0x2c3fe3.dynCall_viiiffiii = _0x2c3fe3.asm.Ip).apply(null, arguments);
  };
  var _0x2d7cc2 = _0x2c3fe3.dynCall_viiiijii = function () {
    return (_0x2d7cc2 = _0x2c3fe3.dynCall_viiiijii = _0x2c3fe3.asm.Jp).apply(null, arguments);
  };
  var _0x39297f = _0x2c3fe3.dynCall_vifiiii = function () {
    return (_0x39297f = _0x2c3fe3.dynCall_vifiiii = _0x2c3fe3.asm.Kp).apply(null, arguments);
  };
  var _0x155517 = _0x2c3fe3.dynCall_iiiffi = function () {
    return (_0x155517 = _0x2c3fe3.dynCall_iiiffi = _0x2c3fe3.asm.Lp).apply(null, arguments);
  };
  var _0x2cc61c = _0x2c3fe3.dynCall_iiififii = function () {
    return (_0x2cc61c = _0x2c3fe3.dynCall_iiififii = _0x2c3fe3.asm.Mp).apply(null, arguments);
  };
  var _0x1249e9 = _0x2c3fe3.dynCall_iiifiiiii = function () {
    return (_0x1249e9 = _0x2c3fe3.dynCall_iiifiiiii = _0x2c3fe3.asm.Np).apply(null, arguments);
  };
  var _0xee5553 = _0x2c3fe3.dynCall_iifiifiiii = function () {
    return (_0xee5553 = _0x2c3fe3.dynCall_iifiifiiii = _0x2c3fe3.asm.Op).apply(null, arguments);
  };
  var _0x1d74da = _0x2c3fe3.dynCall_iiiifiii = function () {
    return (_0x1d74da = _0x2c3fe3.dynCall_iiiifiii = _0x2c3fe3.asm.Pp).apply(null, arguments);
  };
  var _0x3ceac7 = _0x2c3fe3.dynCall_iiifiiii = function () {
    return (_0x3ceac7 = _0x2c3fe3.dynCall_iiifiiii = _0x2c3fe3.asm.Qp).apply(null, arguments);
  };
  var _0x5c80ce = _0x2c3fe3.dynCall_iiiffiii = function () {
    return (_0x5c80ce = _0x2c3fe3.dynCall_iiiffiii = _0x2c3fe3.asm.Rp).apply(null, arguments);
  };
  var _0x4b479b = _0x2c3fe3.dynCall_iiiiifii = function () {
    return (_0x4b479b = _0x2c3fe3.dynCall_iiiiifii = _0x2c3fe3.asm.Sp).apply(null, arguments);
  };
  var _0x297fb4 = _0x2c3fe3.dynCall_iifiifffii = function () {
    return (_0x297fb4 = _0x2c3fe3.dynCall_iifiifffii = _0x2c3fe3.asm.Tp).apply(null, arguments);
  };
  var _0x519844 = _0x2c3fe3.dynCall_iiiiiiffi = function () {
    return (_0x519844 = _0x2c3fe3.dynCall_iiiiiiffi = _0x2c3fe3.asm.Up).apply(null, arguments);
  };
  var _0x147b82 = _0x2c3fe3.dynCall_iifffi = function () {
    return (_0x147b82 = _0x2c3fe3.dynCall_iifffi = _0x2c3fe3.asm.Vp).apply(null, arguments);
  };
  var _0x2c93ec = _0x2c3fe3.dynCall_iiifffi = function () {
    return (_0x2c93ec = _0x2c3fe3.dynCall_iiifffi = _0x2c3fe3.asm.Wp).apply(null, arguments);
  };
  var _0x116cd7 = _0x2c3fe3.dynCall_iifiii = function () {
    return (_0x116cd7 = _0x2c3fe3.dynCall_iifiii = _0x2c3fe3.asm.Xp).apply(null, arguments);
  };
  var _0x148c29 = _0x2c3fe3.dynCall_iifiiii = function () {
    return (_0x148c29 = _0x2c3fe3.dynCall_iifiiii = _0x2c3fe3.asm.Yp).apply(null, arguments);
  };
  var _0x502c0a = _0x2c3fe3.dynCall_viiiiifi = function () {
    return (_0x502c0a = _0x2c3fe3.dynCall_viiiiifi = _0x2c3fe3.asm.Zp).apply(null, arguments);
  };
  var _0x1fed05 = _0x2c3fe3.dynCall_viiiiifii = function () {
    return (_0x1fed05 = _0x2c3fe3.dynCall_viiiiifii = _0x2c3fe3.asm._p).apply(null, arguments);
  };
  var _0x5d7255 = _0x2c3fe3.dynCall_viiiiiifi = function () {
    return (_0x5d7255 = _0x2c3fe3.dynCall_viiiiiifi = _0x2c3fe3.asm.$p).apply(null, arguments);
  };
  var _0x21df10 = _0x2c3fe3.dynCall_viiiiiifii = function () {
    return (_0x21df10 = _0x2c3fe3.dynCall_viiiiiifii = _0x2c3fe3.asm.aq).apply(null, arguments);
  };
  var _0xda87c6 = _0x2c3fe3.dynCall_ifffi = function () {
    return (_0xda87c6 = _0x2c3fe3.dynCall_ifffi = _0x2c3fe3.asm.bq).apply(null, arguments);
  };
  var _0x29a1a5 = _0x2c3fe3.dynCall_iffffi = function () {
    return (_0x29a1a5 = _0x2c3fe3.dynCall_iffffi = _0x2c3fe3.asm.cq).apply(null, arguments);
  };
  var _0x2451d6 = _0x2c3fe3.dynCall_vffi = function () {
    return (_0x2451d6 = _0x2c3fe3.dynCall_vffi = _0x2c3fe3.asm.dq).apply(null, arguments);
  };
  var _0x3002f2 = _0x2c3fe3.dynCall_ifiiiii = function () {
    return (_0x3002f2 = _0x2c3fe3.dynCall_ifiiiii = _0x2c3fe3.asm.eq).apply(null, arguments);
  };
  var _0x54ade5 = _0x2c3fe3.dynCall_vfiiiii = function () {
    return (_0x54ade5 = _0x2c3fe3.dynCall_vfiiiii = _0x2c3fe3.asm.fq).apply(null, arguments);
  };
  var _0x55d8b1 = _0x2c3fe3.dynCall_vfiiiiiiiiii = function () {
    return (_0x55d8b1 = _0x2c3fe3.dynCall_vfiiiiiiiiii = _0x2c3fe3.asm.gq).apply(null, arguments);
  };
  var _0x12a4b6 = _0x2c3fe3.dynCall_vfii = function () {
    return (_0x12a4b6 = _0x2c3fe3.dynCall_vfii = _0x2c3fe3.asm.hq).apply(null, arguments);
  };
  var _0x450fbf = _0x2c3fe3.dynCall_iifiiiii = function () {
    return (_0x450fbf = _0x2c3fe3.dynCall_iifiiiii = _0x2c3fe3.asm.iq).apply(null, arguments);
  };
  var _0x166cd3 = _0x2c3fe3.dynCall_vififii = function () {
    return (_0x166cd3 = _0x2c3fe3.dynCall_vififii = _0x2c3fe3.asm.jq).apply(null, arguments);
  };
  var _0x51feff = _0x2c3fe3.dynCall_ifii = function () {
    return (_0x51feff = _0x2c3fe3.dynCall_ifii = _0x2c3fe3.asm.kq).apply(null, arguments);
  };
  var _0xa05652 = _0x2c3fe3.dynCall_iiiiiifiii = function () {
    return (_0xa05652 = _0x2c3fe3.dynCall_iiiiiifiii = _0x2c3fe3.asm.lq).apply(null, arguments);
  };
  var _0x43d08 = _0x2c3fe3.dynCall_viiiiiifiii = function () {
    return (_0x43d08 = _0x2c3fe3.dynCall_viiiiiifiii = _0x2c3fe3.asm.mq).apply(null, arguments);
  };
  var _0x32478a = _0x2c3fe3.dynCall_iifiiiiii = function () {
    return (_0x32478a = _0x2c3fe3.dynCall_iifiiiiii = _0x2c3fe3.asm.nq).apply(null, arguments);
  };
  var _0x21c094 = _0x2c3fe3.dynCall_iifffiiii = function () {
    return (_0x21c094 = _0x2c3fe3.dynCall_iifffiiii = _0x2c3fe3.asm.oq).apply(null, arguments);
  };
  var _0x42d9f0 = _0x2c3fe3.dynCall_iiffiiii = function () {
    return (_0x42d9f0 = _0x2c3fe3.dynCall_iiffiiii = _0x2c3fe3.asm.pq).apply(null, arguments);
  };
  var _0x471aa8 = _0x2c3fe3.dynCall_viiiifffiiii = function () {
    return (_0x471aa8 = _0x2c3fe3.dynCall_viiiifffiiii = _0x2c3fe3.asm.qq).apply(null, arguments);
  };
  var _0x1f3ff9 = _0x2c3fe3.dynCall_viiiifiiiiii = function () {
    return (_0x1f3ff9 = _0x2c3fe3.dynCall_viiiifiiiiii = _0x2c3fe3.asm.rq).apply(null, arguments);
  };
  var _0x1b0ab1 = _0x2c3fe3.dynCall_iiiiiffi = function () {
    return (_0x1b0ab1 = _0x2c3fe3.dynCall_iiiiiffi = _0x2c3fe3.asm.sq).apply(null, arguments);
  };
  var _0x46b3ae = _0x2c3fe3.dynCall_viiiiiiifiii = function () {
    return (_0x46b3ae = _0x2c3fe3.dynCall_viiiiiiifiii = _0x2c3fe3.asm.tq).apply(null, arguments);
  };
  var _0x524b32 = _0x2c3fe3.dynCall_fiiifii = function () {
    return (_0x524b32 = _0x2c3fe3.dynCall_fiiifii = _0x2c3fe3.asm.uq).apply(null, arguments);
  };
  var _0x2a61a8 = _0x2c3fe3.dynCall_iiiffii = function () {
    return (_0x2a61a8 = _0x2c3fe3.dynCall_iiiffii = _0x2c3fe3.asm.vq).apply(null, arguments);
  };
  var _0x556896 = _0x2c3fe3.dynCall_fifiii = function () {
    return (_0x556896 = _0x2c3fe3.dynCall_fifiii = _0x2c3fe3.asm.wq).apply(null, arguments);
  };
  var _0xa06a14 = _0x2c3fe3.dynCall_viiiiffii = function () {
    return (_0xa06a14 = _0x2c3fe3.dynCall_viiiiffii = _0x2c3fe3.asm.xq).apply(null, arguments);
  };
  var _0x43fbcc = _0x2c3fe3.dynCall_viiiiifffi = function () {
    return (_0x43fbcc = _0x2c3fe3.dynCall_viiiiifffi = _0x2c3fe3.asm.yq).apply(null, arguments);
  };
  var _0x5887be = _0x2c3fe3.dynCall_fifiiiii = function () {
    return (_0x5887be = _0x2c3fe3.dynCall_fifiiiii = _0x2c3fe3.asm.zq).apply(null, arguments);
  };
  var _0x3d2316 = _0x2c3fe3.dynCall_viifiii = function () {
    return (_0x3d2316 = _0x2c3fe3.dynCall_viifiii = _0x2c3fe3.asm.Aq).apply(null, arguments);
  };
  var _0x5313fb = _0x2c3fe3.dynCall_vifiiiii = function () {
    return (_0x5313fb = _0x2c3fe3.dynCall_vifiiiii = _0x2c3fe3.asm.Bq).apply(null, arguments);
  };
  var _0x2581df = _0x2c3fe3.dynCall_viffiifffiii = function () {
    return (_0x2581df = _0x2c3fe3.dynCall_viffiifffiii = _0x2c3fe3.asm.Cq).apply(null, arguments);
  };
  var _0x419baa = _0x2c3fe3.dynCall_viffiiiii = function () {
    return (_0x419baa = _0x2c3fe3.dynCall_viffiiiii = _0x2c3fe3.asm.Dq).apply(null, arguments);
  };
  var _0x90ad6a = _0x2c3fe3.dynCall_vifffffi = function () {
    return (_0x90ad6a = _0x2c3fe3.dynCall_vifffffi = _0x2c3fe3.asm.Eq).apply(null, arguments);
  };
  var _0x4ddb86 = _0x2c3fe3.dynCall_iifiifiii = function () {
    return (_0x4ddb86 = _0x2c3fe3.dynCall_iifiifiii = _0x2c3fe3.asm.Fq).apply(null, arguments);
  };
  var _0x4f7652 = _0x2c3fe3.dynCall_viddi = function () {
    return (_0x4f7652 = _0x2c3fe3.dynCall_viddi = _0x2c3fe3.asm.Gq).apply(null, arguments);
  };
  var _0x4c4e2c = _0x2c3fe3.dynCall_vijji = function () {
    return (_0x4c4e2c = _0x2c3fe3.dynCall_vijji = _0x2c3fe3.asm.Hq).apply(null, arguments);
  };
  var _0x2657ae = _0x2c3fe3.dynCall_vijjjji = function () {
    return (_0x2657ae = _0x2c3fe3.dynCall_vijjjji = _0x2c3fe3.asm.Iq).apply(null, arguments);
  };
  var _0x134948 = _0x2c3fe3.dynCall_iijjjji = function () {
    return (_0x134948 = _0x2c3fe3.dynCall_iijjjji = _0x2c3fe3.asm.Jq).apply(null, arguments);
  };
  var _0x31b969 = _0x2c3fe3.dynCall_iiidi = function () {
    return (_0x31b969 = _0x2c3fe3.dynCall_iiidi = _0x2c3fe3.asm.Kq).apply(null, arguments);
  };
  var _0x5c9da4 = _0x2c3fe3.dynCall_iijjjjiii = function () {
    return (_0x5c9da4 = _0x2c3fe3.dynCall_iijjjjiii = _0x2c3fe3.asm.Lq).apply(null, arguments);
  };
  var _0x4dd3ec = _0x2c3fe3.dynCall_viiiiiifiifiiii = function () {
    return (_0x4dd3ec = _0x2c3fe3.dynCall_viiiiiifiifiiii = _0x2c3fe3.asm.Mq).apply(null, arguments);
  };
  var _0x462854 = _0x2c3fe3.dynCall_iiffffiii = function () {
    return (_0x462854 = _0x2c3fe3.dynCall_iiffffiii = _0x2c3fe3.asm.Nq).apply(null, arguments);
  };
  var _0x2b7d21 = _0x2c3fe3.dynCall_iiidfi = function () {
    return (_0x2b7d21 = _0x2c3fe3.dynCall_iiidfi = _0x2c3fe3.asm.Oq).apply(null, arguments);
  };
  var _0x45cd28 = _0x2c3fe3.dynCall_iiijfi = function () {
    return (_0x45cd28 = _0x2c3fe3.dynCall_iiijfi = _0x2c3fe3.asm.Pq).apply(null, arguments);
  };
  var _0xd69db6 = _0x2c3fe3.dynCall_iiiififi = function () {
    return (_0xd69db6 = _0x2c3fe3.dynCall_iiiififi = _0x2c3fe3.asm.Qq).apply(null, arguments);
  };
  var _0x472a91 = _0x2c3fe3.dynCall_iiiffifiiii = function () {
    return (_0x472a91 = _0x2c3fe3.dynCall_iiiffifiiii = _0x2c3fe3.asm.Rq).apply(null, arguments);
  };
  var _0x4342fe = _0x2c3fe3.dynCall_iiifiifiii = function () {
    return (_0x4342fe = _0x2c3fe3.dynCall_iiifiifiii = _0x2c3fe3.asm.Sq).apply(null, arguments);
  };
  var _0xabb719 = _0x2c3fe3.dynCall_iiifiifiiiii = function () {
    return (_0xabb719 = _0x2c3fe3.dynCall_iiifiifiiiii = _0x2c3fe3.asm.Tq).apply(null, arguments);
  };
  var _0x45719e = _0x2c3fe3.dynCall_ifffii = function () {
    return (_0x45719e = _0x2c3fe3.dynCall_ifffii = _0x2c3fe3.asm.Uq).apply(null, arguments);
  };
  var _0x22e77c = _0x2c3fe3.dynCall_ffffii = function () {
    return (_0x22e77c = _0x2c3fe3.dynCall_ffffii = _0x2c3fe3.asm.Vq).apply(null, arguments);
  };
  var _0x3e84fc = _0x2c3fe3.dynCall_ffffifi = function () {
    return (_0x3e84fc = _0x2c3fe3.dynCall_ffffifi = _0x2c3fe3.asm.Wq).apply(null, arguments);
  };
  var _0x379af3 = _0x2c3fe3.dynCall_ffffiffi = function () {
    return (_0x379af3 = _0x2c3fe3.dynCall_ffffiffi = _0x2c3fe3.asm.Xq).apply(null, arguments);
  };
  var _0x553711 = _0x2c3fe3.dynCall_viiififi = function () {
    return (_0x553711 = _0x2c3fe3.dynCall_viiififi = _0x2c3fe3.asm.Yq).apply(null, arguments);
  };
  var _0x24b470 = _0x2c3fe3.dynCall_viiififfi = function () {
    return (_0x24b470 = _0x2c3fe3.dynCall_viiififfi = _0x2c3fe3.asm.Zq).apply(null, arguments);
  };
  var _0x489105 = _0x2c3fe3.dynCall_ifiii = function () {
    return (_0x489105 = _0x2c3fe3.dynCall_ifiii = _0x2c3fe3.asm._q).apply(null, arguments);
  };
  var _0x4b74ba = _0x2c3fe3.dynCall_iiffiiiii = function () {
    return (_0x4b74ba = _0x2c3fe3.dynCall_iiffiiiii = _0x2c3fe3.asm.$q).apply(null, arguments);
  };
  var _0x1ab107 = _0x2c3fe3.dynCall_iiffifiii = function () {
    return (_0x1ab107 = _0x2c3fe3.dynCall_iiffifiii = _0x2c3fe3.asm.ar).apply(null, arguments);
  };
  var _0x6df2de = _0x2c3fe3.dynCall_iififi = function () {
    return (_0x6df2de = _0x2c3fe3.dynCall_iififi = _0x2c3fe3.asm.br).apply(null, arguments);
  };
  var _0x5641c2 = _0x2c3fe3.dynCall_iiififi = function () {
    return (_0x5641c2 = _0x2c3fe3.dynCall_iiififi = _0x2c3fe3.asm.cr).apply(null, arguments);
  };
  var _0x56d2c0 = _0x2c3fe3.dynCall_iiiiifiiii = function () {
    return (_0x56d2c0 = _0x2c3fe3.dynCall_iiiiifiiii = _0x2c3fe3.asm.dr).apply(null, arguments);
  };
  var _0x49a4f8 = _0x2c3fe3.dynCall_viidiii = function () {
    return (_0x49a4f8 = _0x2c3fe3.dynCall_viidiii = _0x2c3fe3.asm.er).apply(null, arguments);
  };
  var _0x5dc9b4 = _0x2c3fe3.dynCall_diidi = function () {
    return (_0x5dc9b4 = _0x2c3fe3.dynCall_diidi = _0x2c3fe3.asm.fr).apply(null, arguments);
  };
  var _0x11461b = _0x2c3fe3.dynCall_fiifdi = function () {
    return (_0x11461b = _0x2c3fe3.dynCall_fiifdi = _0x2c3fe3.asm.gr).apply(null, arguments);
  };
  var _0x43019d = _0x2c3fe3.dynCall_viiiiiifddfiiii = function () {
    return (_0x43019d = _0x2c3fe3.dynCall_viiiiiifddfiiii = _0x2c3fe3.asm.hr).apply(null, arguments);
  };
  var _0x681d3 = _0x2c3fe3.dynCall_viijiii = function () {
    return (_0x681d3 = _0x2c3fe3.dynCall_viijiii = _0x2c3fe3.asm.ir).apply(null, arguments);
  };
  var _0x51a4d0 = _0x2c3fe3.dynCall_fiifji = function () {
    return (_0x51a4d0 = _0x2c3fe3.dynCall_fiifji = _0x2c3fe3.asm.jr).apply(null, arguments);
  };
  var _0x4cc910 = _0x2c3fe3.dynCall_viiiiiifjjfiiii = function () {
    return (_0x4cc910 = _0x2c3fe3.dynCall_viiiiiifjjfiiii = _0x2c3fe3.asm.kr).apply(null, arguments);
  };
  var _0x4fd245 = _0x2c3fe3.dynCall_viiiiiiffffiiii = function () {
    return (_0x4fd245 = _0x2c3fe3.dynCall_viiiiiiffffiiii = _0x2c3fe3.asm.lr).apply(null, arguments);
  };
  var _0x29d5ae = _0x2c3fe3.dynCall_viifiiii = function () {
    return (_0x29d5ae = _0x2c3fe3.dynCall_viifiiii = _0x2c3fe3.asm.mr).apply(null, arguments);
  };
  var _0x217a82 = _0x2c3fe3.dynCall_iiiiifiii = function () {
    return (_0x217a82 = _0x2c3fe3.dynCall_iiiiifiii = _0x2c3fe3.asm.nr).apply(null, arguments);
  };
  var _0x1ff71f = _0x2c3fe3.dynCall_fffffi = function () {
    return (_0x1ff71f = _0x2c3fe3.dynCall_fffffi = _0x2c3fe3.asm.or).apply(null, arguments);
  };
  var _0x5b7834 = _0x2c3fe3.dynCall_fiiffffi = function () {
    return (_0x5b7834 = _0x2c3fe3.dynCall_fiiffffi = _0x2c3fe3.asm.pr).apply(null, arguments);
  };
  var _0x53283c = _0x2c3fe3.dynCall_fffifffi = function () {
    return (_0x53283c = _0x2c3fe3.dynCall_fffifffi = _0x2c3fe3.asm.qr).apply(null, arguments);
  };
  var _0x1d77e0 = _0x2c3fe3.dynCall_ifiiii = function () {
    return (_0x1d77e0 = _0x2c3fe3.dynCall_ifiiii = _0x2c3fe3.asm.rr).apply(null, arguments);
  };
  var _0x4bbd78 = _0x2c3fe3.dynCall_idiiiii = function () {
    return (_0x4bbd78 = _0x2c3fe3.dynCall_idiiiii = _0x2c3fe3.asm.sr).apply(null, arguments);
  };
  var _0x394272 = _0x2c3fe3.dynCall_idiiii = function () {
    return (_0x394272 = _0x2c3fe3.dynCall_idiiii = _0x2c3fe3.asm.tr).apply(null, arguments);
  };
  var _0x55c2b4 = _0x2c3fe3.dynCall_idii = function () {
    return (_0x55c2b4 = _0x2c3fe3.dynCall_idii = _0x2c3fe3.asm.ur).apply(null, arguments);
  };
  var _0x2e855e = _0x2c3fe3.dynCall_ijii = function () {
    return (_0x2e855e = _0x2c3fe3.dynCall_ijii = _0x2c3fe3.asm.vr).apply(null, arguments);
  };
  var _0x385866 = _0x2c3fe3.dynCall_iidii = function () {
    return (_0x385866 = _0x2c3fe3.dynCall_iidii = _0x2c3fe3.asm.wr).apply(null, arguments);
  };
  var _0x4237d1 = _0x2c3fe3.dynCall_iidiii = function () {
    return (_0x4237d1 = _0x2c3fe3.dynCall_iidiii = _0x2c3fe3.asm.xr).apply(null, arguments);
  };
  var _0x44a406 = _0x2c3fe3.dynCall_iiijiiii = function () {
    return (_0x44a406 = _0x2c3fe3.dynCall_iiijiiii = _0x2c3fe3.asm.yr).apply(null, arguments);
  };
  var _0x5d1389 = _0x2c3fe3.dynCall_vjiiii = function () {
    return (_0x5d1389 = _0x2c3fe3.dynCall_vjiiii = _0x2c3fe3.asm.zr).apply(null, arguments);
  };
  var _0xd89251 = _0x2c3fe3.dynCall_iddi = function () {
    return (_0xd89251 = _0x2c3fe3.dynCall_iddi = _0x2c3fe3.asm.Ar).apply(null, arguments);
  };
  var _0x3e77f9 = _0x2c3fe3.dynCall_viifiifi = function () {
    return (_0x3e77f9 = _0x2c3fe3.dynCall_viifiifi = _0x2c3fe3.asm.Br).apply(null, arguments);
  };
  var _0x25ac26 = _0x2c3fe3.dynCall_vifiifi = function () {
    return (_0x25ac26 = _0x2c3fe3.dynCall_vifiifi = _0x2c3fe3.asm.Cr).apply(null, arguments);
  };
  var _0x3b7731 = _0x2c3fe3.dynCall_viffii = function () {
    return (_0x3b7731 = _0x2c3fe3.dynCall_viffii = _0x2c3fe3.asm.Dr).apply(null, arguments);
  };
  var _0x47a7e4 = _0x2c3fe3.dynCall_viddfffi = function () {
    return (_0x47a7e4 = _0x2c3fe3.dynCall_viddfffi = _0x2c3fe3.asm.Er).apply(null, arguments);
  };
  var _0x1a2d85 = _0x2c3fe3.dynCall_viidfffi = function () {
    return (_0x1a2d85 = _0x2c3fe3.dynCall_viidfffi = _0x2c3fe3.asm.Fr).apply(null, arguments);
  };
  var _0x17db3d = _0x2c3fe3.dynCall_vidifffi = function () {
    return (_0x17db3d = _0x2c3fe3.dynCall_vidifffi = _0x2c3fe3.asm.Gr).apply(null, arguments);
  };
  var _0x27070d = _0x2c3fe3.dynCall_vidii = function () {
    return (_0x27070d = _0x2c3fe3.dynCall_vidii = _0x2c3fe3.asm.Hr).apply(null, arguments);
  };
  var _0x4020c7 = _0x2c3fe3.dynCall_viiiiiiifi = function () {
    return (_0x4020c7 = _0x2c3fe3.dynCall_viiiiiiifi = _0x2c3fe3.asm.Ir).apply(null, arguments);
  };
  var _0xa3c58b = _0x2c3fe3.dynCall_iffi = function () {
    return (_0xa3c58b = _0x2c3fe3.dynCall_iffi = _0x2c3fe3.asm.Jr).apply(null, arguments);
  };
  var _0x27a75a = _0x2c3fe3.dynCall_viiffffi = function () {
    return (_0x27a75a = _0x2c3fe3.dynCall_viiffffi = _0x2c3fe3.asm.Kr).apply(null, arguments);
  };
  var _0x27b3ba = _0x2c3fe3.dynCall_ffii = function () {
    return (_0x27b3ba = _0x2c3fe3.dynCall_ffii = _0x2c3fe3.asm.Lr).apply(null, arguments);
  };
  var _0x3e83fd = _0x2c3fe3.dynCall_ddddi = function () {
    return (_0x3e83fd = _0x2c3fe3.dynCall_ddddi = _0x2c3fe3.asm.Mr).apply(null, arguments);
  };
  var _0x10dd59 = _0x2c3fe3.dynCall_ddi = function () {
    return (_0x10dd59 = _0x2c3fe3.dynCall_ddi = _0x2c3fe3.asm.Nr).apply(null, arguments);
  };
  var _0x4d9d68 = _0x2c3fe3.dynCall_jijii = function () {
    return (_0x4d9d68 = _0x2c3fe3.dynCall_jijii = _0x2c3fe3.asm.Or).apply(null, arguments);
  };
  var _0x4c8282 = _0x2c3fe3.dynCall_iiiiiji = function () {
    return (_0x4c8282 = _0x2c3fe3.dynCall_iiiiiji = _0x2c3fe3.asm.Pr).apply(null, arguments);
  };
  var _0x1835cf = _0x2c3fe3.dynCall_viiijii = function () {
    return (_0x1835cf = _0x2c3fe3.dynCall_viiijii = _0x2c3fe3.asm.Qr).apply(null, arguments);
  };
  var _0x1a90be = _0x2c3fe3.dynCall_viffffffi = function () {
    return (_0x1a90be = _0x2c3fe3.dynCall_viffffffi = _0x2c3fe3.asm.Rr).apply(null, arguments);
  };
  var _0x49ec50 = _0x2c3fe3.dynCall_ijjiiii = function () {
    return (_0x49ec50 = _0x2c3fe3.dynCall_ijjiiii = _0x2c3fe3.asm.Sr).apply(null, arguments);
  };
  var _0x370798 = _0x2c3fe3.dynCall_vdiiiii = function () {
    return (_0x370798 = _0x2c3fe3.dynCall_vdiiiii = _0x2c3fe3.asm.Tr).apply(null, arguments);
  };
  var _0x198a8f = _0x2c3fe3.dynCall_diiji = function () {
    return (_0x198a8f = _0x2c3fe3.dynCall_diiji = _0x2c3fe3.asm.Ur).apply(null, arguments);
  };
  var _0x4b53fd = _0x2c3fe3.dynCall_vjiiiiiiii = function () {
    return (_0x4b53fd = _0x2c3fe3.dynCall_vjiiiiiiii = _0x2c3fe3.asm.Vr).apply(null, arguments);
  };
  var _0x314c00 = _0x2c3fe3.dynCall_vjiiiiiii = function () {
    return (_0x314c00 = _0x2c3fe3.dynCall_vjiiiiiii = _0x2c3fe3.asm.Wr).apply(null, arguments);
  };
  var _0x5f50ed = _0x2c3fe3.dynCall_ijiiii = function () {
    return (_0x5f50ed = _0x2c3fe3.dynCall_ijiiii = _0x2c3fe3.asm.Xr).apply(null, arguments);
  };
  var _0x5e2d34 = _0x2c3fe3.dynCall_diji = function () {
    return (_0x5e2d34 = _0x2c3fe3.dynCall_diji = _0x2c3fe3.asm.Yr).apply(null, arguments);
  };
  var _0x49a65f = _0x2c3fe3.dynCall_fidi = function () {
    return (_0x49a65f = _0x2c3fe3.dynCall_fidi = _0x2c3fe3.asm.Zr).apply(null, arguments);
  };
  var _0x5b35be = _0x2c3fe3.dynCall_vfffi = function () {
    return (_0x5b35be = _0x2c3fe3.dynCall_vfffi = _0x2c3fe3.asm._r).apply(null, arguments);
  };
  var _0x5ab7a8 = _0x2c3fe3.dynCall_vffffi = function () {
    return (_0x5ab7a8 = _0x2c3fe3.dynCall_vffffi = _0x2c3fe3.asm.$r).apply(null, arguments);
  };
  var _0x15d35a = _0x2c3fe3.dynCall_vffffiiii = function () {
    return (_0x15d35a = _0x2c3fe3.dynCall_vffffiiii = _0x2c3fe3.asm.as).apply(null, arguments);
  };
  var _0x38515c = _0x2c3fe3.dynCall_vifffii = function () {
    return (_0x38515c = _0x2c3fe3.dynCall_vifffii = _0x2c3fe3.asm.bs).apply(null, arguments);
  };
  var _0x2e3071 = _0x2c3fe3.dynCall_vffffii = function () {
    return (_0x2e3071 = _0x2c3fe3.dynCall_vffffii = _0x2c3fe3.asm.cs).apply(null, arguments);
  };
  var _0x372cd1 = _0x2c3fe3.dynCall_viiiifffi = function () {
    return (_0x372cd1 = _0x2c3fe3.dynCall_viiiifffi = _0x2c3fe3.asm.ds).apply(null, arguments);
  };
  var _0x3ffd33 = _0x2c3fe3.dynCall_vfiii = function () {
    return (_0x3ffd33 = _0x2c3fe3.dynCall_vfiii = _0x2c3fe3.asm.es).apply(null, arguments);
  };
  var _0x99fa93 = _0x2c3fe3.dynCall_fffifi = function () {
    return (_0x99fa93 = _0x2c3fe3.dynCall_fffifi = _0x2c3fe3.asm.fs).apply(null, arguments);
  };
  var _0x5dd514 = _0x2c3fe3.dynCall_viifffi = function () {
    return (_0x5dd514 = _0x2c3fe3.dynCall_viifffi = _0x2c3fe3.asm.gs).apply(null, arguments);
  };
  var _0x129dab = _0x2c3fe3.dynCall_iiiifiiiii = function () {
    return (_0x129dab = _0x2c3fe3.dynCall_iiiifiiiii = _0x2c3fe3.asm.hs).apply(null, arguments);
  };
  var _0x3f3b26 = _0x2c3fe3.dynCall_iiiifiiii = function () {
    return (_0x3f3b26 = _0x2c3fe3.dynCall_iiiifiiii = _0x2c3fe3.asm.is).apply(null, arguments);
  };
  var _0x565a41 = _0x2c3fe3.dynCall_vijjii = function () {
    return (_0x565a41 = _0x2c3fe3.dynCall_vijjii = _0x2c3fe3.asm.js).apply(null, arguments);
  };
  var _0x42b256 = _0x2c3fe3.dynCall_viiiififfi = function () {
    return (_0x42b256 = _0x2c3fe3.dynCall_viiiififfi = _0x2c3fe3.asm.ks).apply(null, arguments);
  };
  var _0x178543 = _0x2c3fe3.dynCall_viiiifiifi = function () {
    return (_0x178543 = _0x2c3fe3.dynCall_viiiifiifi = _0x2c3fe3.asm.ls).apply(null, arguments);
  };
  var _0x9f0b67 = _0x2c3fe3.dynCall_viiiifiiii = function () {
    return (_0x9f0b67 = _0x2c3fe3.dynCall_viiiifiiii = _0x2c3fe3.asm.ms).apply(null, arguments);
  };
  var _0x2f8e61 = _0x2c3fe3.dynCall_viiiifiiiii = function () {
    return (_0x2f8e61 = _0x2c3fe3.dynCall_viiiifiiiii = _0x2c3fe3.asm.ns).apply(null, arguments);
  };
  var _0x4576e9 = _0x2c3fe3.dynCall_viiiifiiiiiiii = function () {
    return (_0x4576e9 = _0x2c3fe3.dynCall_viiiifiiiiiiii = _0x2c3fe3.asm.os).apply(null, arguments);
  };
  var _0x27c3ba = _0x2c3fe3.dynCall_viiiiiffii = function () {
    return (_0x27c3ba = _0x2c3fe3.dynCall_viiiiiffii = _0x2c3fe3.asm.ps).apply(null, arguments);
  };
  var _0xe88fed = _0x2c3fe3.dynCall_viffiii = function () {
    return (_0xe88fed = _0x2c3fe3.dynCall_viffiii = _0x2c3fe3.asm.qs).apply(null, arguments);
  };
  var _0x2b6466 = _0x2c3fe3.dynCall_viffffiii = function () {
    return (_0x2b6466 = _0x2c3fe3.dynCall_viffffiii = _0x2c3fe3.asm.rs).apply(null, arguments);
  };
  var _0xc48ad7 = _0x2c3fe3.dynCall_viffffii = function () {
    return (_0xc48ad7 = _0x2c3fe3.dynCall_viffffii = _0x2c3fe3.asm.ss).apply(null, arguments);
  };
  var _0x53ce51 = _0x2c3fe3.dynCall_viiiififii = function () {
    return (_0x53ce51 = _0x2c3fe3.dynCall_viiiififii = _0x2c3fe3.asm.ts).apply(null, arguments);
  };
  var _0x3f8bc9 = _0x2c3fe3.dynCall_viiififiii = function () {
    return (_0x3f8bc9 = _0x2c3fe3.dynCall_viiififiii = _0x2c3fe3.asm.us).apply(null, arguments);
  };
  var _0x1b23b3 = _0x2c3fe3.dynCall_iiififfi = function () {
    return (_0x1b23b3 = _0x2c3fe3.dynCall_iiififfi = _0x2c3fe3.asm.vs).apply(null, arguments);
  };
  var _0x2fa277 = _0x2c3fe3.dynCall_viffiiii = function () {
    return (_0x2fa277 = _0x2c3fe3.dynCall_viffiiii = _0x2c3fe3.asm.ws).apply(null, arguments);
  };
  var _0x32da36 = _0x2c3fe3.dynCall_viiiiffffiiii = function () {
    return (_0x32da36 = _0x2c3fe3.dynCall_viiiiffffiiii = _0x2c3fe3.asm.xs).apply(null, arguments);
  };
  var _0xcd605f = _0x2c3fe3.dynCall_viifiiiii = function () {
    return (_0xcd605f = _0x2c3fe3.dynCall_viifiiiii = _0x2c3fe3.asm.ys).apply(null, arguments);
  };
  var _0x360995 = _0x2c3fe3.dynCall_iiiiiiffiiiiiiiiiffffiiii = function () {
    return (_0x360995 = _0x2c3fe3.dynCall_iiiiiiffiiiiiiiiiffffiiii = _0x2c3fe3.asm.zs).apply(null, arguments);
  };
  var _0xbd71e1 = _0x2c3fe3.dynCall_iiiiiiffiiiiiiiiiiiiiii = function () {
    return (_0xbd71e1 = _0x2c3fe3.dynCall_iiiiiiffiiiiiiiiiiiiiii = _0x2c3fe3.asm.As).apply(null, arguments);
  };
  var _0x15fc7e = _0x2c3fe3.dynCall_viififii = function () {
    return (_0x15fc7e = _0x2c3fe3.dynCall_viififii = _0x2c3fe3.asm.Bs).apply(null, arguments);
  };
  var _0x225339 = _0x2c3fe3.dynCall_iiiffiiii = function () {
    return (_0x225339 = _0x2c3fe3.dynCall_iiiffiiii = _0x2c3fe3.asm.Cs).apply(null, arguments);
  };
  var _0x126477 = _0x2c3fe3.dynCall_iiiiffiiii = function () {
    return (_0x126477 = _0x2c3fe3.dynCall_iiiiffiiii = _0x2c3fe3.asm.Ds).apply(null, arguments);
  };
  var _0x6cb556 = _0x2c3fe3.dynCall_vjii = function () {
    return (_0x6cb556 = _0x2c3fe3.dynCall_vjii = _0x2c3fe3.asm.Es).apply(null, arguments);
  };
  var _0x1918ba = _0x2c3fe3.dynCall_fffffffi = function () {
    return (_0x1918ba = _0x2c3fe3.dynCall_fffffffi = _0x2c3fe3.asm.Fs).apply(null, arguments);
  };
  var _0x2087d1 = _0x2c3fe3.dynCall_viffifi = function () {
    return (_0x2087d1 = _0x2c3fe3.dynCall_viffifi = _0x2c3fe3.asm.Gs).apply(null, arguments);
  };
  var _0x43ac24 = _0x2c3fe3.dynCall_viiffifi = function () {
    return (_0x43ac24 = _0x2c3fe3.dynCall_viiffifi = _0x2c3fe3.asm.Hs).apply(null, arguments);
  };
  var _0x26db0f = _0x2c3fe3.dynCall_fiiiffi = function () {
    return (_0x26db0f = _0x2c3fe3.dynCall_fiiiffi = _0x2c3fe3.asm.Is).apply(null, arguments);
  };
  var _0x7e755c = _0x2c3fe3.dynCall_viiffiiiiiiiii = function () {
    return (_0x7e755c = _0x2c3fe3.dynCall_viiffiiiiiiiii = _0x2c3fe3.asm.Js).apply(null, arguments);
  };
  var _0x381457 = _0x2c3fe3.dynCall_viiiiiffiii = function () {
    return (_0x381457 = _0x2c3fe3.dynCall_viiiiiffiii = _0x2c3fe3.asm.Ks).apply(null, arguments);
  };
  var _0x1f4eeb = _0x2c3fe3.dynCall_viiffiii = function () {
    return (_0x1f4eeb = _0x2c3fe3.dynCall_viiffiii = _0x2c3fe3.asm.Ls).apply(null, arguments);
  };
  var _0x12c07f = _0x2c3fe3.dynCall_viiffiiiiiii = function () {
    return (_0x12c07f = _0x2c3fe3.dynCall_viiffiiiiiii = _0x2c3fe3.asm.Ms).apply(null, arguments);
  };
  var _0x51a3a4 = _0x2c3fe3.dynCall_fffffffffi = function () {
    return (_0x51a3a4 = _0x2c3fe3.dynCall_fffffffffi = _0x2c3fe3.asm.Ns).apply(null, arguments);
  };
  var _0x5d3dd5 = _0x2c3fe3.dynCall_vifiiiiii = function () {
    return (_0x5d3dd5 = _0x2c3fe3.dynCall_vifiiiiii = _0x2c3fe3.asm.Os).apply(null, arguments);
  };
  var _0x4fe4a1 = _0x2c3fe3.dynCall_viifiiiiiii = function () {
    return (_0x4fe4a1 = _0x2c3fe3.dynCall_viifiiiiiii = _0x2c3fe3.asm.Ps).apply(null, arguments);
  };
  var _0x4b61c4 = _0x2c3fe3.dynCall_viiififfiiiiiii = function () {
    return (_0x4b61c4 = _0x2c3fe3.dynCall_viiififfiiiiiii = _0x2c3fe3.asm.Qs).apply(null, arguments);
  };
  var _0x3ac5d2 = _0x2c3fe3.dynCall_viiffiifiiiiiii = function () {
    return (_0x3ac5d2 = _0x2c3fe3.dynCall_viiffiifiiiiiii = _0x2c3fe3.asm.Rs).apply(null, arguments);
  };
  var _0x26d6cb = _0x2c3fe3.dynCall_viifiiiiii = function () {
    return (_0x26d6cb = _0x2c3fe3.dynCall_viifiiiiii = _0x2c3fe3.asm.Ss).apply(null, arguments);
  };
  var _0x527075 = _0x2c3fe3.dynCall_viiifiiiiii = function () {
    return (_0x527075 = _0x2c3fe3.dynCall_viiifiiiiii = _0x2c3fe3.asm.Ts).apply(null, arguments);
  };
  var _0x401c15 = _0x2c3fe3.dynCall_viififiiiiii = function () {
    return (_0x401c15 = _0x2c3fe3.dynCall_viififiiiiii = _0x2c3fe3.asm.Us).apply(null, arguments);
  };
  var _0x2ebcec = _0x2c3fe3.dynCall_viiiffiifiiiiiii = function () {
    return (_0x2ebcec = _0x2c3fe3.dynCall_viiiffiifiiiiiii = _0x2c3fe3.asm.Vs).apply(null, arguments);
  };
  var _0x4681e3 = _0x2c3fe3.dynCall_viiiiiifiiiiii = function () {
    return (_0x4681e3 = _0x2c3fe3.dynCall_viiiiiifiiiiii = _0x2c3fe3.asm.Ws).apply(null, arguments);
  };
  var _0x6865d7 = _0x2c3fe3.dynCall_vififiii = function () {
    return (_0x6865d7 = _0x2c3fe3.dynCall_vififiii = _0x2c3fe3.asm.Xs).apply(null, arguments);
  };
  var _0x5e3668 = _0x2c3fe3.dynCall_viiiiiiiijiiii = function () {
    return (_0x5e3668 = _0x2c3fe3.dynCall_viiiiiiiijiiii = _0x2c3fe3.asm.Ys).apply(null, arguments);
  };
  var _0x2bed0f = _0x2c3fe3.dynCall_viiiiiffi = function () {
    return (_0x2bed0f = _0x2c3fe3.dynCall_viiiiiffi = _0x2c3fe3.asm.Zs).apply(null, arguments);
  };
  var _0xcb3316 = _0x2c3fe3.dynCall_viiidii = function () {
    return (_0xcb3316 = _0x2c3fe3.dynCall_viiidii = _0x2c3fe3.asm._s).apply(null, arguments);
  };
  var _0xa82467 = _0x2c3fe3.dynCall_ijiiiiiiiii = function () {
    return (_0xa82467 = _0x2c3fe3.dynCall_ijiiiiiiiii = _0x2c3fe3.asm.$s).apply(null, arguments);
  };
  var _0x50e064 = _0x2c3fe3.dynCall_ijjiii = function () {
    return (_0x50e064 = _0x2c3fe3.dynCall_ijjiii = _0x2c3fe3.asm.at).apply(null, arguments);
  };
  var _0x348a39 = _0x2c3fe3.dynCall_jjjii = function () {
    return (_0x348a39 = _0x2c3fe3.dynCall_jjjii = _0x2c3fe3.asm.bt).apply(null, arguments);
  };
  var _0x3af977 = _0x2c3fe3.dynCall_iijjijii = function () {
    return (_0x3af977 = _0x2c3fe3.dynCall_iijjijii = _0x2c3fe3.asm.ct).apply(null, arguments);
  };
  var _0x3020e9 = _0x2c3fe3.dynCall_jiijii = function () {
    return (_0x3020e9 = _0x2c3fe3.dynCall_jiijii = _0x2c3fe3.asm.dt).apply(null, arguments);
  };
  var _0x523937 = _0x2c3fe3.dynCall_viiiidii = function () {
    return (_0x523937 = _0x2c3fe3.dynCall_viiiidii = _0x2c3fe3.asm.et).apply(null, arguments);
  };
  var _0x125c33 = _0x2c3fe3.dynCall_vidiiiii = function () {
    return (_0x125c33 = _0x2c3fe3.dynCall_vidiiiii = _0x2c3fe3.asm.ft).apply(null, arguments);
  };
  var _0x46205 = _0x2c3fe3.dynCall_viiidjii = function () {
    return (_0x46205 = _0x2c3fe3.dynCall_viiidjii = _0x2c3fe3.asm.gt).apply(null, arguments);
  };
  var _0x27055e = _0x2c3fe3.dynCall_viijijji = function () {
    return (_0x27055e = _0x2c3fe3.dynCall_viijijji = _0x2c3fe3.asm.ht).apply(null, arguments);
  };
  var _0xc504a3 = _0x2c3fe3.dynCall_vijijji = function () {
    return (_0xc504a3 = _0x2c3fe3.dynCall_vijijji = _0x2c3fe3.asm.it).apply(null, arguments);
  };
  var _0x10cf26 = _0x2c3fe3.dynCall_viffffffffffffffffi = function () {
    return (_0x10cf26 = _0x2c3fe3.dynCall_viffffffffffffffffi = _0x2c3fe3.asm.jt).apply(null, arguments);
  };
  var _0x30b1c4 = _0x2c3fe3.dynCall_jiidi = function () {
    return (_0x30b1c4 = _0x2c3fe3.dynCall_jiidi = _0x2c3fe3.asm.kt).apply(null, arguments);
  };
  var _0x3db04d = _0x2c3fe3.dynCall_viiiidijii = function () {
    return (_0x3db04d = _0x2c3fe3.dynCall_viiiidijii = _0x2c3fe3.asm.lt).apply(null, arguments);
  };
  var _0xdff533 = _0x2c3fe3.dynCall_iiidiii = function () {
    return (_0xdff533 = _0x2c3fe3.dynCall_iiidiii = _0x2c3fe3.asm.mt).apply(null, arguments);
  };
  var _0x12ec5c = _0x2c3fe3.dynCall_viijiiiii = function () {
    return (_0x12ec5c = _0x2c3fe3.dynCall_viijiiiii = _0x2c3fe3.asm.nt).apply(null, arguments);
  };
  var _0x1a881d = _0x2c3fe3.dynCall_viifffffi = function () {
    return (_0x1a881d = _0x2c3fe3.dynCall_viifffffi = _0x2c3fe3.asm.ot).apply(null, arguments);
  };
  var _0x3b4b0c = _0x2c3fe3.dynCall_viiffffffi = function () {
    return (_0x3b4b0c = _0x2c3fe3.dynCall_viiffffffi = _0x2c3fe3.asm.pt).apply(null, arguments);
  };
  var _0x4189f1 = _0x2c3fe3.dynCall_viifffffffi = function () {
    return (_0x4189f1 = _0x2c3fe3.dynCall_viifffffffi = _0x2c3fe3.asm.qt).apply(null, arguments);
  };
  var _0x1e34f6 = _0x2c3fe3.dynCall_viiffffffffi = function () {
    return (_0x1e34f6 = _0x2c3fe3.dynCall_viiffffffffi = _0x2c3fe3.asm.rt).apply(null, arguments);
  };
  var _0x191da1 = _0x2c3fe3.dynCall_viiffffffffiii = function () {
    return (_0x191da1 = _0x2c3fe3.dynCall_viiffffffffiii = _0x2c3fe3.asm.st).apply(null, arguments);
  };
  var _0x49c451 = _0x2c3fe3.dynCall_viiiiffffii = function () {
    return (_0x49c451 = _0x2c3fe3.dynCall_viiiiffffii = _0x2c3fe3.asm.tt).apply(null, arguments);
  };
  var _0x244dd0 = _0x2c3fe3.dynCall_didi = function () {
    return (_0x244dd0 = _0x2c3fe3.dynCall_didi = _0x2c3fe3.asm.ut).apply(null, arguments);
  };
  var _0x19e791 = _0x2c3fe3.dynCall_ddidi = function () {
    return (_0x19e791 = _0x2c3fe3.dynCall_ddidi = _0x2c3fe3.asm.vt).apply(null, arguments);
  };
  var _0x4d304f = _0x2c3fe3.dynCall_viddii = function () {
    return (_0x4d304f = _0x2c3fe3.dynCall_viddii = _0x2c3fe3.asm.wt).apply(null, arguments);
  };
  var _0x5bd4ee = _0x2c3fe3.dynCall_iiiddi = function () {
    return (_0x5bd4ee = _0x2c3fe3.dynCall_iiiddi = _0x2c3fe3.asm.xt).apply(null, arguments);
  };
  var _0x56a549 = _0x2c3fe3.dynCall_viddiiii = function () {
    return (_0x56a549 = _0x2c3fe3.dynCall_viddiiii = _0x2c3fe3.asm.yt).apply(null, arguments);
  };
  var _0xdb96dc = _0x2c3fe3.dynCall_viiijji = function () {
    return (_0xdb96dc = _0x2c3fe3.dynCall_viiijji = _0x2c3fe3.asm.zt).apply(null, arguments);
  };
  var _0x21cde7 = _0x2c3fe3.dynCall_vijiiiiiii = function () {
    return (_0x21cde7 = _0x2c3fe3.dynCall_vijiiiiiii = _0x2c3fe3.asm.At).apply(null, arguments);
  };
  var _0x16fa7a = _0x2c3fe3.dynCall_vijiiiiiiii = function () {
    return (_0x16fa7a = _0x2c3fe3.dynCall_vijiiiiiiii = _0x2c3fe3.asm.Bt).apply(null, arguments);
  };
  var _0x125624 = _0x2c3fe3.dynCall_jjiiii = function () {
    return (_0x125624 = _0x2c3fe3.dynCall_jjiiii = _0x2c3fe3.asm.Ct).apply(null, arguments);
  };
  var _0x1c7fa6 = _0x2c3fe3.dynCall_jjiiiii = function () {
    return (_0x1c7fa6 = _0x2c3fe3.dynCall_jjiiiii = _0x2c3fe3.asm.Dt).apply(null, arguments);
  };
  var _0x5ee529 = _0x2c3fe3.dynCall_jijjji = function () {
    return (_0x5ee529 = _0x2c3fe3.dynCall_jijjji = _0x2c3fe3.asm.Et).apply(null, arguments);
  };
  var _0x14ef0d = _0x2c3fe3.dynCall_jijjjii = function () {
    return (_0x14ef0d = _0x2c3fe3.dynCall_jijjjii = _0x2c3fe3.asm.Ft).apply(null, arguments);
  };
  var _0x16769a = _0x2c3fe3.dynCall_jjiii = function () {
    return (_0x16769a = _0x2c3fe3.dynCall_jjiii = _0x2c3fe3.asm.Gt).apply(null, arguments);
  };
  var _0x4a4d05 = _0x2c3fe3.dynCall_ijijiiiii = function () {
    return (_0x4a4d05 = _0x2c3fe3.dynCall_ijijiiiii = _0x2c3fe3.asm.Ht).apply(null, arguments);
  };
  var _0x53712e = _0x2c3fe3.dynCall_ijjjiii = function () {
    return (_0x53712e = _0x2c3fe3.dynCall_ijjjiii = _0x2c3fe3.asm.It).apply(null, arguments);
  };
  var _0x298467 = _0x2c3fe3.dynCall_vijjjiijii = function () {
    return (_0x298467 = _0x2c3fe3.dynCall_vijjjiijii = _0x2c3fe3.asm.Jt).apply(null, arguments);
  };
  var _0x36a7fa = _0x2c3fe3.dynCall_ijjjiijii = function () {
    return (_0x36a7fa = _0x2c3fe3.dynCall_ijjjiijii = _0x2c3fe3.asm.Kt).apply(null, arguments);
  };
  var _0x4d7ee5 = _0x2c3fe3.dynCall_vijiiiiii = function () {
    return (_0x4d7ee5 = _0x2c3fe3.dynCall_vijiiiiii = _0x2c3fe3.asm.Lt).apply(null, arguments);
  };
  var _0x4ac5f6 = _0x2c3fe3.dynCall_jfi = function () {
    return (_0x4ac5f6 = _0x2c3fe3.dynCall_jfi = _0x2c3fe3.asm.Mt).apply(null, arguments);
  };
  var _0x1bbce8 = _0x2c3fe3.dynCall_fji = function () {
    return (_0x1bbce8 = _0x2c3fe3.dynCall_fji = _0x2c3fe3.asm.Nt).apply(null, arguments);
  };
  var _0x4c4253 = _0x2c3fe3.dynCall_fdi = function () {
    return (_0x4c4253 = _0x2c3fe3.dynCall_fdi = _0x2c3fe3.asm.Ot).apply(null, arguments);
  };
  var _0x487876 = _0x2c3fe3.dynCall_dfi = function () {
    return (_0x487876 = _0x2c3fe3.dynCall_dfi = _0x2c3fe3.asm.Pt).apply(null, arguments);
  };
  var _0x4a486c = _0x2c3fe3.dynCall_jidii = function () {
    return (_0x4a486c = _0x2c3fe3.dynCall_jidii = _0x2c3fe3.asm.Qt).apply(null, arguments);
  };
  var _0x1becb8 = _0x2c3fe3.dynCall_viiiiiiiji = function () {
    return (_0x1becb8 = _0x2c3fe3.dynCall_viiiiiiiji = _0x2c3fe3.asm.Rt).apply(null, arguments);
  };
  var _0x4a9e18 = _0x2c3fe3.dynCall_viiiiiiiiji = function () {
    return (_0x4a9e18 = _0x2c3fe3.dynCall_viiiiiiiiji = _0x2c3fe3.asm.St).apply(null, arguments);
  };
  var _0x20ea0e = _0x2c3fe3.dynCall_viiiiiiiiiji = function () {
    return (_0x20ea0e = _0x2c3fe3.dynCall_viiiiiiiiiji = _0x2c3fe3.asm.Tt).apply(null, arguments);
  };
  var _0x5c4fa1 = _0x2c3fe3.dynCall_ijiijii = function () {
    return (_0x5c4fa1 = _0x2c3fe3.dynCall_ijiijii = _0x2c3fe3.asm.Ut).apply(null, arguments);
  };
  var _0x4c2bb0 = _0x2c3fe3.dynCall_vjjiiiii = function () {
    return (_0x4c2bb0 = _0x2c3fe3.dynCall_vjjiiiii = _0x2c3fe3.asm.Vt).apply(null, arguments);
  };
  var _0x8d5874 = _0x2c3fe3.dynCall_vjjii = function () {
    return (_0x8d5874 = _0x2c3fe3.dynCall_vjjii = _0x2c3fe3.asm.Wt).apply(null, arguments);
  };
  var _0x3417ed = _0x2c3fe3.dynCall_ijiiji = function () {
    return (_0x3417ed = _0x2c3fe3.dynCall_ijiiji = _0x2c3fe3.asm.Xt).apply(null, arguments);
  };
  var _0x4927c0 = _0x2c3fe3.dynCall_ijiiiii = function () {
    return (_0x4927c0 = _0x2c3fe3.dynCall_ijiiiii = _0x2c3fe3.asm.Yt).apply(null, arguments);
  };
  var _0x2bd013 = _0x2c3fe3.dynCall_ijiiiiji = function () {
    return (_0x2bd013 = _0x2c3fe3.dynCall_ijiiiiji = _0x2c3fe3.asm.Zt).apply(null, arguments);
  };
  var _0x4c921b = _0x2c3fe3.dynCall_jiiiiii = function () {
    return (_0x4c921b = _0x2c3fe3.dynCall_jiiiiii = _0x2c3fe3.asm._t).apply(null, arguments);
  };
  var _0x515316 = _0x2c3fe3.dynCall_ddii = function () {
    return (_0x515316 = _0x2c3fe3.dynCall_ddii = _0x2c3fe3.asm.$t).apply(null, arguments);
  };
  var _0x58d9dc = _0x2c3fe3.dynCall_idiii = function () {
    return (_0x58d9dc = _0x2c3fe3.dynCall_idiii = _0x2c3fe3.asm.au).apply(null, arguments);
  };
  var _0x389e66 = _0x2c3fe3.dynCall_vdiii = function () {
    return (_0x389e66 = _0x2c3fe3.dynCall_vdiii = _0x2c3fe3.asm.bu).apply(null, arguments);
  };
  var _0xae3442 = _0x2c3fe3.dynCall_jdii = function () {
    return (_0xae3442 = _0x2c3fe3.dynCall_jdii = _0x2c3fe3.asm.cu).apply(null, arguments);
  };
  var _0x358368 = _0x2c3fe3.dynCall_iijjji = function () {
    return (_0x358368 = _0x2c3fe3.dynCall_iijjji = _0x2c3fe3.asm.du).apply(null, arguments);
  };
  var _0xc6c205 = _0x2c3fe3.dynCall_viijjji = function () {
    return (_0xc6c205 = _0x2c3fe3.dynCall_viijjji = _0x2c3fe3.asm.eu).apply(null, arguments);
  };
  var _0x36064e = _0x2c3fe3.dynCall_vdii = function () {
    return (_0x36064e = _0x2c3fe3.dynCall_vdii = _0x2c3fe3.asm.fu).apply(null, arguments);
  };
  var _0x3f9700 = _0x2c3fe3.dynCall_iiiijii = function () {
    return (_0x3f9700 = _0x2c3fe3.dynCall_iiiijii = _0x2c3fe3.asm.gu).apply(null, arguments);
  };
  var _0x4dc092 = _0x2c3fe3.dynCall_jijji = function () {
    return (_0x4dc092 = _0x2c3fe3.dynCall_jijji = _0x2c3fe3.asm.hu).apply(null, arguments);
  };
  var _0x3dd1e2 = _0x2c3fe3.dynCall_diddi = function () {
    return (_0x3dd1e2 = _0x2c3fe3.dynCall_diddi = _0x2c3fe3.asm.iu).apply(null, arguments);
  };
  var _0x17eccd = _0x2c3fe3.dynCall_iijjii = function () {
    return (_0x17eccd = _0x2c3fe3.dynCall_iijjii = _0x2c3fe3.asm.ju).apply(null, arguments);
  };
  var _0xcdbc30 = _0x2c3fe3.dynCall_viiiiijji = function () {
    return (_0xcdbc30 = _0x2c3fe3.dynCall_viiiiijji = _0x2c3fe3.asm.ku).apply(null, arguments);
  };
  var _0x20dbd0 = _0x2c3fe3.dynCall_viiiiji = function () {
    return (_0x20dbd0 = _0x2c3fe3.dynCall_viiiiji = _0x2c3fe3.asm.lu).apply(null, arguments);
  };
  var _0x334975 = _0x2c3fe3.dynCall_vijjjii = function () {
    return (_0x334975 = _0x2c3fe3.dynCall_vijjjii = _0x2c3fe3.asm.mu).apply(null, arguments);
  };
  var _0xd445fa = _0x2c3fe3.dynCall_jjjji = function () {
    return (_0xd445fa = _0x2c3fe3.dynCall_jjjji = _0x2c3fe3.asm.nu).apply(null, arguments);
  };
  var _0x13ccd1 = _0x2c3fe3.dynCall_viijijii = function () {
    return (_0x13ccd1 = _0x2c3fe3.dynCall_viijijii = _0x2c3fe3.asm.ou).apply(null, arguments);
  };
  var _0x4ce354 = _0x2c3fe3.dynCall_viijijiii = function () {
    return (_0x4ce354 = _0x2c3fe3.dynCall_viijijiii = _0x2c3fe3.asm.pu).apply(null, arguments);
  };
  var _0xa09b82 = _0x2c3fe3.dynCall_vijiji = function () {
    return (_0xa09b82 = _0x2c3fe3.dynCall_vijiji = _0x2c3fe3.asm.qu).apply(null, arguments);
  };
  var _0x5963e6 = _0x2c3fe3.dynCall_viijiijiii = function () {
    return (_0x5963e6 = _0x2c3fe3.dynCall_viijiijiii = _0x2c3fe3.asm.ru).apply(null, arguments);
  };
  var _0x468563 = _0x2c3fe3.dynCall_viiiijiiii = function () {
    return (_0x468563 = _0x2c3fe3.dynCall_viiiijiiii = _0x2c3fe3.asm.su).apply(null, arguments);
  };
  var _0x351086 = _0x2c3fe3.dynCall_viijjii = function () {
    return (_0x351086 = _0x2c3fe3.dynCall_viijjii = _0x2c3fe3.asm.tu).apply(null, arguments);
  };
  var _0x44247d = _0x2c3fe3.dynCall_jiiiiiiiii = function () {
    return (_0x44247d = _0x2c3fe3.dynCall_jiiiiiiiii = _0x2c3fe3.asm.uu).apply(null, arguments);
  };
  var _0x2faca9 = _0x2c3fe3.dynCall_iiiiijii = function () {
    return (_0x2faca9 = _0x2c3fe3.dynCall_iiiiijii = _0x2c3fe3.asm.vu).apply(null, arguments);
  };
  var _0x1a8858 = _0x2c3fe3.dynCall_iiiidii = function () {
    return (_0x1a8858 = _0x2c3fe3.dynCall_iiiidii = _0x2c3fe3.asm.wu).apply(null, arguments);
  };
  var _0x328efd = _0x2c3fe3.dynCall_iidfii = function () {
    return (_0x328efd = _0x2c3fe3.dynCall_iidfii = _0x2c3fe3.asm.xu).apply(null, arguments);
  };
  var _0x193928 = _0x2c3fe3.dynCall_iidfi = function () {
    return (_0x193928 = _0x2c3fe3.dynCall_iidfi = _0x2c3fe3.asm.yu).apply(null, arguments);
  };
  var _0x28d2fc = _0x2c3fe3.dynCall_iiddfi = function () {
    return (_0x28d2fc = _0x2c3fe3.dynCall_iiddfi = _0x2c3fe3.asm.zu).apply(null, arguments);
  };
  var _0x58dc43 = _0x2c3fe3.dynCall_iijfii = function () {
    return (_0x58dc43 = _0x2c3fe3.dynCall_iijfii = _0x2c3fe3.asm.Au).apply(null, arguments);
  };
  var _0x23c0d4 = _0x2c3fe3.dynCall_iijfi = function () {
    return (_0x23c0d4 = _0x2c3fe3.dynCall_iijfi = _0x2c3fe3.asm.Bu).apply(null, arguments);
  };
  var _0x2ad4eb = _0x2c3fe3.dynCall_iijjfi = function () {
    return (_0x2ad4eb = _0x2c3fe3.dynCall_iijjfi = _0x2c3fe3.asm.Cu).apply(null, arguments);
  };
  var _0xebe07e = _0x2c3fe3.dynCall_iiiiffiiiji = function () {
    return (_0xebe07e = _0x2c3fe3.dynCall_iiiiffiiiji = _0x2c3fe3.asm.Du).apply(null, arguments);
  };
  var _0x56618a = _0x2c3fe3.dynCall_iiidfii = function () {
    return (_0x56618a = _0x2c3fe3.dynCall_iiidfii = _0x2c3fe3.asm.Eu).apply(null, arguments);
  };
  var _0x3fee6c = _0x2c3fe3.dynCall_iiijfii = function () {
    return (_0x3fee6c = _0x2c3fe3.dynCall_iiijfii = _0x2c3fe3.asm.Fu).apply(null, arguments);
  };
  var _0x1e4024 = _0x2c3fe3.dynCall_jiiiiiii = function () {
    return (_0x1e4024 = _0x2c3fe3.dynCall_jiiiiiii = _0x2c3fe3.asm.Gu).apply(null, arguments);
  };
  var _0x4194e4 = _0x2c3fe3.dynCall_fiiiiiii = function () {
    return (_0x4194e4 = _0x2c3fe3.dynCall_fiiiiiii = _0x2c3fe3.asm.Hu).apply(null, arguments);
  };
  var _0x178a28 = _0x2c3fe3.dynCall_iiiiffiiiii = function () {
    return (_0x178a28 = _0x2c3fe3.dynCall_iiiiffiiiii = _0x2c3fe3.asm.Iu).apply(null, arguments);
  };
  var _0x434cb2 = _0x2c3fe3.dynCall_iiiidfii = function () {
    return (_0x434cb2 = _0x2c3fe3.dynCall_iiiidfii = _0x2c3fe3.asm.Ju).apply(null, arguments);
  };
  var _0x3528c0 = _0x2c3fe3.dynCall_iiiijfii = function () {
    return (_0x3528c0 = _0x2c3fe3.dynCall_iiiijfii = _0x2c3fe3.asm.Ku).apply(null, arguments);
  };
  var _0x32ab1e = _0x2c3fe3.dynCall_iiiiffii = function () {
    return (_0x32ab1e = _0x2c3fe3.dynCall_iiiiffii = _0x2c3fe3.asm.Lu).apply(null, arguments);
  };
  var _0x5a5dde = _0x2c3fe3.dynCall_jiiiiji = function () {
    return (_0x5a5dde = _0x2c3fe3.dynCall_jiiiiji = _0x2c3fe3.asm.Mu).apply(null, arguments);
  };
  var _0x2908e2 = _0x2c3fe3.dynCall_fiiiifi = function () {
    return (_0x2908e2 = _0x2c3fe3.dynCall_fiiiifi = _0x2c3fe3.asm.Nu).apply(null, arguments);
  };
  var _0x229d43 = _0x2c3fe3.dynCall_didii = function () {
    return (_0x229d43 = _0x2c3fe3.dynCall_didii = _0x2c3fe3.asm.Ou).apply(null, arguments);
  };
  var _0x377dd4 = _0x2c3fe3.dynCall_iiijjii = function () {
    return (_0x377dd4 = _0x2c3fe3.dynCall_iiijjii = _0x2c3fe3.asm.Pu).apply(null, arguments);
  };
  var _0x311c6c = _0x2c3fe3.dynCall_vidiji = function () {
    return (_0x311c6c = _0x2c3fe3.dynCall_vidiji = _0x2c3fe3.asm.Qu).apply(null, arguments);
  };
  var _0x1608e3 = _0x2c3fe3.dynCall_vidjii = function () {
    return (_0x1608e3 = _0x2c3fe3.dynCall_vidjii = _0x2c3fe3.asm.Ru).apply(null, arguments);
  };
  var _0x2fa5d1 = _0x2c3fe3.dynCall_vij = function () {
    return (_0x2fa5d1 = _0x2c3fe3.dynCall_vij = _0x2c3fe3.asm.Su).apply(null, arguments);
  };
  var _0x5a9dbb = _0x2c3fe3.dynCall_iiiijiii = function () {
    return (_0x5a9dbb = _0x2c3fe3.dynCall_iiiijiii = _0x2c3fe3.asm.Tu).apply(null, arguments);
  };
  var _0x96d9b1 = _0x2c3fe3.dynCall_iiiij = function () {
    return (_0x96d9b1 = _0x2c3fe3.dynCall_iiiij = _0x2c3fe3.asm.Uu).apply(null, arguments);
  };
  var _0x37466c = _0x2c3fe3.dynCall_ijj = function () {
    return (_0x37466c = _0x2c3fe3.dynCall_ijj = _0x2c3fe3.asm.Vu).apply(null, arguments);
  };
  var _0x52fd2f = _0x2c3fe3.dynCall_vjji = function () {
    return (_0x52fd2f = _0x2c3fe3.dynCall_vjji = _0x2c3fe3.asm.Wu).apply(null, arguments);
  };
  var _0xb70f73 = _0x2c3fe3.dynCall_ij = function () {
    return (_0xb70f73 = _0x2c3fe3.dynCall_ij = _0x2c3fe3.asm.Xu).apply(null, arguments);
  };
  var _0x913494 = _0x2c3fe3.dynCall_vif = function () {
    return (_0x913494 = _0x2c3fe3.dynCall_vif = _0x2c3fe3.asm.Yu).apply(null, arguments);
  };
  var _0x350303 = _0x2c3fe3.dynCall_vid = function () {
    return (_0x350303 = _0x2c3fe3.dynCall_vid = _0x2c3fe3.asm.Zu).apply(null, arguments);
  };
  var _0x165f9f = _0x2c3fe3.dynCall_viiiiif = function () {
    return (_0x165f9f = _0x2c3fe3.dynCall_viiiiif = _0x2c3fe3.asm._u).apply(null, arguments);
  };
  var _0x545a4e = _0x2c3fe3.dynCall_viiiif = function () {
    return (_0x545a4e = _0x2c3fe3.dynCall_viiiif = _0x2c3fe3.asm.$u).apply(null, arguments);
  };
  var _0x48f0d6 = _0x2c3fe3.dynCall_viiiiiif = function () {
    return (_0x48f0d6 = _0x2c3fe3.dynCall_viiiiiif = _0x2c3fe3.asm.av).apply(null, arguments);
  };
  var _0xa0d0a = _0x2c3fe3.dynCall_iiif = function () {
    return (_0xa0d0a = _0x2c3fe3.dynCall_iiif = _0x2c3fe3.asm.bv).apply(null, arguments);
  };
  var _0x31c5d8 = _0x2c3fe3.dynCall_fif = function () {
    return (_0x31c5d8 = _0x2c3fe3.dynCall_fif = _0x2c3fe3.asm.cv).apply(null, arguments);
  };
  var _0x2665a0 = _0x2c3fe3.dynCall_iiiiiifff = function () {
    return (_0x2665a0 = _0x2c3fe3.dynCall_iiiiiifff = _0x2c3fe3.asm.dv).apply(null, arguments);
  };
  var _0x128e1e = _0x2c3fe3.dynCall_iiiiiifiif = function () {
    return (_0x128e1e = _0x2c3fe3.dynCall_iiiiiifiif = _0x2c3fe3.asm.ev).apply(null, arguments);
  };
  var _0x16a359 = _0x2c3fe3.dynCall_iiiiiiifiif = function () {
    return (_0x16a359 = _0x2c3fe3.dynCall_iiiiiiifiif = _0x2c3fe3.asm.fv).apply(null, arguments);
  };
  var _0x45c447 = _0x2c3fe3.dynCall_fiff = function () {
    return (_0x45c447 = _0x2c3fe3.dynCall_fiff = _0x2c3fe3.asm.gv).apply(null, arguments);
  };
  var _0x31d9b3 = _0x2c3fe3.dynCall_fiiiiiifiifif = function () {
    return (_0x31d9b3 = _0x2c3fe3.dynCall_fiiiiiifiifif = _0x2c3fe3.asm.hv).apply(null, arguments);
  };
  var _0x10b4b3 = _0x2c3fe3.dynCall_fiiiiiifiiiif = function () {
    return (_0x10b4b3 = _0x2c3fe3.dynCall_fiiiiiifiiiif = _0x2c3fe3.asm.iv).apply(null, arguments);
  };
  var _0x169265 = _0x2c3fe3.dynCall_iifiiiijii = function () {
    return (_0x169265 = _0x2c3fe3.dynCall_iifiiiijii = _0x2c3fe3.asm.jv).apply(null, arguments);
  };
  var _0x5de9e3 = _0x2c3fe3.dynCall_vifijii = function () {
    return (_0x5de9e3 = _0x2c3fe3.dynCall_vifijii = _0x2c3fe3.asm.kv).apply(null, arguments);
  };
  var _0xe784d5 = _0x2c3fe3.dynCall_iiiifffiii = function () {
    return (_0xe784d5 = _0x2c3fe3.dynCall_iiiifffiii = _0x2c3fe3.asm.lv).apply(null, arguments);
  };
  var _0x30b0e8 = _0x2c3fe3.dynCall_iiiifffffi = function () {
    return (_0x30b0e8 = _0x2c3fe3.dynCall_iiiifffffi = _0x2c3fe3.asm.mv).apply(null, arguments);
  };
  var _0x433b27 = _0x2c3fe3.dynCall_viffiiiif = function () {
    return (_0x433b27 = _0x2c3fe3.dynCall_viffiiiif = _0x2c3fe3.asm.nv).apply(null, arguments);
  };
  var _0x31226e = _0x2c3fe3.dynCall_viffiifffffiii = function () {
    return (_0x31226e = _0x2c3fe3.dynCall_viffiifffffiii = _0x2c3fe3.asm.ov).apply(null, arguments);
  };
  var _0xfa83ca = _0x2c3fe3.dynCall_viffffiifffiiiiif = function () {
    return (_0xfa83ca = _0x2c3fe3.dynCall_viffffiifffiiiiif = _0x2c3fe3.asm.pv).apply(null, arguments);
  };
  var _0x3fbdcd = _0x2c3fe3.dynCall_iiiifffffii = function () {
    return (_0x3fbdcd = _0x2c3fe3.dynCall_iiiifffffii = _0x2c3fe3.asm.qv).apply(null, arguments);
  };
  var _0x1da159 = _0x2c3fe3.dynCall_viiiiiiiiiiifii = function () {
    return (_0x1da159 = _0x2c3fe3.dynCall_viiiiiiiiiiifii = _0x2c3fe3.asm.rv).apply(null, arguments);
  };
  var _0x360317 = _0x2c3fe3.dynCall_viff = function () {
    return (_0x360317 = _0x2c3fe3.dynCall_viff = _0x2c3fe3.asm.sv).apply(null, arguments);
  };
  var _0x303322 = _0x2c3fe3.dynCall_iiiiifiiiiif = function () {
    return (_0x303322 = _0x2c3fe3.dynCall_iiiiifiiiiif = _0x2c3fe3.asm.tv).apply(null, arguments);
  };
  var _0x7e74e1 = _0x2c3fe3.dynCall_viiifiiiii = function () {
    return (_0x7e74e1 = _0x2c3fe3.dynCall_viiifiiiii = _0x2c3fe3.asm.uv).apply(null, arguments);
  };
  var _0x4b63de = _0x2c3fe3.dynCall_viiiifiiiiif = function () {
    return (_0x4b63de = _0x2c3fe3.dynCall_viiiifiiiiif = _0x2c3fe3.asm.vv).apply(null, arguments);
  };
  var _0x483da0 = _0x2c3fe3.dynCall_iifff = function () {
    return (_0x483da0 = _0x2c3fe3.dynCall_iifff = _0x2c3fe3.asm.wv).apply(null, arguments);
  };
  var _0x52761e = _0x2c3fe3.dynCall_iif = function () {
    return (_0x52761e = _0x2c3fe3.dynCall_iif = _0x2c3fe3.asm.xv).apply(null, arguments);
  };
  var _0x1b7cc9 = _0x2c3fe3.dynCall_viijijj = function () {
    return (_0x1b7cc9 = _0x2c3fe3.dynCall_viijijj = _0x2c3fe3.asm.yv).apply(null, arguments);
  };
  var _0x18e360 = _0x2c3fe3.dynCall_viijj = function () {
    return (_0x18e360 = _0x2c3fe3.dynCall_viijj = _0x2c3fe3.asm.zv).apply(null, arguments);
  };
  var _0x4cc602 = _0x2c3fe3.dynCall_viiiij = function () {
    return (_0x4cc602 = _0x2c3fe3.dynCall_viiiij = _0x2c3fe3.asm.Av).apply(null, arguments);
  };
  var _0x432ec5 = _0x2c3fe3.dynCall_iiijji = function () {
    return (_0x432ec5 = _0x2c3fe3.dynCall_iiijji = _0x2c3fe3.asm.Bv).apply(null, arguments);
  };
  var _0x4cc1df = _0x2c3fe3.dynCall_ijjiiiii = function () {
    return (_0x4cc1df = _0x2c3fe3.dynCall_ijjiiiii = _0x2c3fe3.asm.Cv).apply(null, arguments);
  };
  var _0x2de610 = _0x2c3fe3.dynCall_vidd = function () {
    return (_0x2de610 = _0x2c3fe3.dynCall_vidd = _0x2c3fe3.asm.Dv).apply(null, arguments);
  };
  var _0x38da6b = _0x2c3fe3.dynCall_iiiiiifffiiifiii = function () {
    return (_0x38da6b = _0x2c3fe3.dynCall_iiiiiifffiiifiii = _0x2c3fe3.asm.Ev).apply(null, arguments);
  };
  var _0x581352 = _0x2c3fe3.dynCall_viid = function () {
    return (_0x581352 = _0x2c3fe3.dynCall_viid = _0x2c3fe3.asm.Fv).apply(null, arguments);
  };
  var _0x4a89c4 = _0x2c3fe3.dynCall_viiif = function () {
    return (_0x4a89c4 = _0x2c3fe3.dynCall_viiif = _0x2c3fe3.asm.Gv).apply(null, arguments);
  };
  var _0x239f4b = _0x2c3fe3.dynCall_fiiiif = function () {
    return (_0x239f4b = _0x2c3fe3.dynCall_fiiiif = _0x2c3fe3.asm.Hv).apply(null, arguments);
  };
  var _0x1e4ee9 = _0x2c3fe3.dynCall_iiiiiff = function () {
    return (_0x1e4ee9 = _0x2c3fe3.dynCall_iiiiiff = _0x2c3fe3.asm.Iv).apply(null, arguments);
  };
  var _0xd8ce54 = _0x2c3fe3.dynCall_viffff = function () {
    return (_0xd8ce54 = _0x2c3fe3.dynCall_viffff = _0x2c3fe3.asm.Jv).apply(null, arguments);
  };
  var _0x38acf3 = _0x2c3fe3.dynCall_vifff = function () {
    return (_0x38acf3 = _0x2c3fe3.dynCall_vifff = _0x2c3fe3.asm.Kv).apply(null, arguments);
  };
  var _0x3433e0 = _0x2c3fe3.dynCall_viifff = function () {
    return (_0x3433e0 = _0x2c3fe3.dynCall_viifff = _0x2c3fe3.asm.Lv).apply(null, arguments);
  };
  var _0x236e56 = _0x2c3fe3.dynCall_vf = function () {
    return (_0x236e56 = _0x2c3fe3.dynCall_vf = _0x2c3fe3.asm.Mv).apply(null, arguments);
  };
  var _0x58371d = _0x2c3fe3.dynCall_vffff = function () {
    return (_0x58371d = _0x2c3fe3.dynCall_vffff = _0x2c3fe3.asm.Nv).apply(null, arguments);
  };
  var _0x4d6d6e = _0x2c3fe3.dynCall_vff = function () {
    return (_0x4d6d6e = _0x2c3fe3.dynCall_vff = _0x2c3fe3.asm.Ov).apply(null, arguments);
  };
  var _0x3b0e21 = _0x2c3fe3.dynCall_fff = function () {
    return (_0x3b0e21 = _0x2c3fe3.dynCall_fff = _0x2c3fe3.asm.Pv).apply(null, arguments);
  };
  var _0x3de43a = _0x2c3fe3.dynCall_f = function () {
    return (_0x3de43a = _0x2c3fe3.dynCall_f = _0x2c3fe3.asm.Qv).apply(null, arguments);
  };
  var _0x44f61d = _0x2c3fe3.dynCall_vfff = function () {
    return (_0x44f61d = _0x2c3fe3.dynCall_vfff = _0x2c3fe3.asm.Rv).apply(null, arguments);
  };
  var _0x5e228a = _0x2c3fe3.dynCall_ff = function () {
    return (_0x5e228a = _0x2c3fe3.dynCall_ff = _0x2c3fe3.asm.Sv).apply(null, arguments);
  };
  var _0x131c1f = _0x2c3fe3.dynCall_iiifiifii = function () {
    return (_0x131c1f = _0x2c3fe3.dynCall_iiifiifii = _0x2c3fe3.asm.Tv).apply(null, arguments);
  };
  var _0x2d0fef = _0x2c3fe3.dynCall_fiif = function () {
    return (_0x2d0fef = _0x2c3fe3.dynCall_fiif = _0x2c3fe3.asm.Uv).apply(null, arguments);
  };
  var _0x31ce9e = _0x2c3fe3.dynCall_iiiiiiffiiiiiiiiiffffiii = function () {
    return (_0x31ce9e = _0x2c3fe3.dynCall_iiiiiiffiiiiiiiiiffffiii = _0x2c3fe3.asm.Vv).apply(null, arguments);
  };
  var _0x77e0a6 = _0x2c3fe3.dynCall_viififi = function () {
    return (_0x77e0a6 = _0x2c3fe3.dynCall_viififi = _0x2c3fe3.asm.Wv).apply(null, arguments);
  };
  var _0x24193d = _0x2c3fe3.dynCall_viiiiiiiijiii = function () {
    return (_0x24193d = _0x2c3fe3.dynCall_viiiiiiiijiii = _0x2c3fe3.asm.Xv).apply(null, arguments);
  };
  var _0x4a5f3a = _0x2c3fe3.dynCall_d = function () {
    return (_0x4a5f3a = _0x2c3fe3.dynCall_d = _0x2c3fe3.asm.Yv).apply(null, arguments);
  };
  function _0x2f28f0(_0x34c217, _0x465bc1) {
    var _0x19a9d9 = _0x3e3c9d();
    try {
      return _0x121c5b(_0x34c217, _0x465bc1);
    } catch (_0x3de0db) {
      _0xe0dbf5(_0x19a9d9);
      if (_0x3de0db !== _0x3de0db + 0 && _0x3de0db !== "longjmp") {
        throw _0x3de0db;
      }
      _0x2ec72f(1, 0);
    }
  }
  function _0x47f322(_0x49dd7e, _0x462822, _0x48aed4) {
    var _0xd51d7a = _0x3e3c9d();
    try {
      return _0x2439a0(_0x49dd7e, _0x462822, _0x48aed4);
    } catch (_0x123a1e) {
      _0xe0dbf5(_0xd51d7a);
      if (_0x123a1e !== _0x123a1e + 0 && _0x123a1e !== "longjmp") {
        throw _0x123a1e;
      }
      _0x2ec72f(1, 0);
    }
  }
  function _0x28287b(_0x518b6e, _0x3a4ecf, _0x359ca5, _0x4b573e) {
    var _0x16b013 = _0x3e3c9d();
    try {
      _0x5c7aa8(_0x518b6e, _0x3a4ecf, _0x359ca5, _0x4b573e);
    } catch (_0x63ff21) {
      _0xe0dbf5(_0x16b013);
      if (_0x63ff21 !== _0x63ff21 + 0 && _0x63ff21 !== "longjmp") {
        throw _0x63ff21;
      }
      _0x2ec72f(1, 0);
    }
  }
  function _0x2b29f5(_0x58efbf, _0x4bd141, _0x402cf1, _0x30a036, _0x20c102, _0x1e0ed4) {
    var _0x23b5bb = _0x3e3c9d();
    try {
      return _0x133252(_0x58efbf, _0x4bd141, _0x402cf1, _0x30a036, _0x20c102, _0x1e0ed4);
    } catch (_0xa9cc7a) {
      _0xe0dbf5(_0x23b5bb);
      if (_0xa9cc7a !== _0xa9cc7a + 0 && _0xa9cc7a !== "longjmp") {
        throw _0xa9cc7a;
      }
      _0x2ec72f(1, 0);
    }
  }
  function _0x214799(_0x1ae631, _0x5aa2eb, _0x4e9f0c, _0xdf2e54) {
    var _0x2d0259 = _0x3e3c9d();
    try {
      return _0x3b09d7(_0x1ae631, _0x5aa2eb, _0x4e9f0c, _0xdf2e54);
    } catch (_0x4fda02) {
      _0xe0dbf5(_0x2d0259);
      if (_0x4fda02 !== _0x4fda02 + 0 && _0x4fda02 !== "longjmp") {
        throw _0x4fda02;
      }
      _0x2ec72f(1, 0);
    }
  }
  function _0x5c60d5(_0x537ef0, _0x181550, _0x236714, _0x460254, _0x5408c6) {
    var _0xd0b580 = _0x3e3c9d();
    try {
      _0x304a8b(_0x537ef0, _0x181550, _0x236714, _0x460254, _0x5408c6);
    } catch (_0x212b47) {
      _0xe0dbf5(_0xd0b580);
      if (_0x212b47 !== _0x212b47 + 0 && _0x212b47 !== "longjmp") {
        throw _0x212b47;
      }
      _0x2ec72f(1, 0);
    }
  }
  function _0xc30481(_0xcbb76e, _0x335ebb, _0x1ef466, _0x5795d4, _0x142466) {
    var _0x16062f = _0x3e3c9d();
    try {
      return _0x5c8e44(_0xcbb76e, _0x335ebb, _0x1ef466, _0x5795d4, _0x142466);
    } catch (_0x399c46) {
      _0xe0dbf5(_0x16062f);
      if (_0x399c46 !== _0x399c46 + 0 && _0x399c46 !== "longjmp") {
        throw _0x399c46;
      }
      _0x2ec72f(1, 0);
    }
  }
  function _0x13dccb(_0x5bc93f, _0xe18053, _0x55acde, _0x232baf) {
    var _0x38838e = _0x3e3c9d();
    try {
      return _0x37a3b7(_0x5bc93f, _0xe18053, _0x55acde, _0x232baf);
    } catch (_0x1777bf) {
      _0xe0dbf5(_0x38838e);
      if (_0x1777bf !== _0x1777bf + 0 && _0x1777bf !== "longjmp") {
        throw _0x1777bf;
      }
      _0x2ec72f(1, 0);
    }
  }
  function _0x343cab(_0x43f04a, _0x82ec13, _0xad9b6f, _0x4ea05d) {
    var _0x565208 = _0x3e3c9d();
    try {
      return _0x5902a0(_0x43f04a, _0x82ec13, _0xad9b6f, _0x4ea05d);
    } catch (_0x528ee6) {
      _0xe0dbf5(_0x565208);
      if (_0x528ee6 !== _0x528ee6 + 0 && _0x528ee6 !== "longjmp") {
        throw _0x528ee6;
      }
      _0x2ec72f(1, 0);
    }
  }
  function _0x254d0f(_0x170f17, _0x3fdfea, _0x35951a, _0x11a5a3) {
    var _0x170e67 = _0x3e3c9d();
    try {
      _0x3fbb12(_0x170f17, _0x3fdfea, _0x35951a, _0x11a5a3);
    } catch (_0x5ec6a8) {
      _0xe0dbf5(_0x170e67);
      if (_0x5ec6a8 !== _0x5ec6a8 + 0 && _0x5ec6a8 !== "longjmp") {
        throw _0x5ec6a8;
      }
      _0x2ec72f(1, 0);
    }
  }
  function _0x5cd970(_0x509a73, _0x40c181, _0x49df17) {
    var _0x4ad000 = _0x3e3c9d();
    try {
      _0x3a13cb(_0x509a73, _0x40c181, _0x49df17);
    } catch (_0x2a8a71) {
      _0xe0dbf5(_0x4ad000);
      if (_0x2a8a71 !== _0x2a8a71 + 0 && _0x2a8a71 !== "longjmp") {
        throw _0x2a8a71;
      }
      _0x2ec72f(1, 0);
    }
  }
  function _0x284c4e(_0x1844d3, _0x43b434) {
    var _0x33ac12 = _0x3e3c9d();
    try {
      _0x58d73a(_0x1844d3, _0x43b434);
    } catch (_0x211f11) {
      _0xe0dbf5(_0x33ac12);
      if (_0x211f11 !== _0x211f11 + 0 && _0x211f11 !== "longjmp") {
        throw _0x211f11;
      }
      _0x2ec72f(1, 0);
    }
  }
  function _0x478afe(_0x2174d0) {
    var _0x2f78a5 = _0x3e3c9d();
    try {
      _0x21100c(_0x2174d0);
    } catch (_0x500b0f) {
      _0xe0dbf5(_0x2f78a5);
      if (_0x500b0f !== _0x500b0f + 0 && _0x500b0f !== "longjmp") {
        throw _0x500b0f;
      }
      _0x2ec72f(1, 0);
    }
  }
  function _0xc7b7d9(_0x437bb6) {
    var _0x55c1c1 = _0x3e3c9d();
    try {
      return _0x5e9530(_0x437bb6);
    } catch (_0x176bb9) {
      _0xe0dbf5(_0x55c1c1);
      if (_0x176bb9 !== _0x176bb9 + 0 && _0x176bb9 !== "longjmp") {
        throw _0x176bb9;
      }
      _0x2ec72f(1, 0);
    }
  }
  function _0x4a278b(_0x2d0064, _0x554b3b, _0x3b8e17, _0x5e1813, _0x41da3d, _0x3415b2, _0x128beb, _0x3cc681) {
    var _0x363442 = _0x3e3c9d();
    try {
      return _0x51ee34(_0x2d0064, _0x554b3b, _0x3b8e17, _0x5e1813, _0x41da3d, _0x3415b2, _0x128beb, _0x3cc681);
    } catch (_0x573d38) {
      _0xe0dbf5(_0x363442);
      if (_0x573d38 !== _0x573d38 + 0 && _0x573d38 !== "longjmp") {
        throw _0x573d38;
      }
      _0x2ec72f(1, 0);
    }
  }
  function _0x572b8c(_0x106d8b, _0x5a221c, _0x4a429a, _0x509b05, _0x385d3e, _0x477439) {
    var _0x5414ae = _0x3e3c9d();
    try {
      _0x58c494(_0x106d8b, _0x5a221c, _0x4a429a, _0x509b05, _0x385d3e, _0x477439);
    } catch (_0x1f6293) {
      _0xe0dbf5(_0x5414ae);
      if (_0x1f6293 !== _0x1f6293 + 0 && _0x1f6293 !== "longjmp") {
        throw _0x1f6293;
      }
      _0x2ec72f(1, 0);
    }
  }
  function _0x12d4f7(_0x7e4b0f, _0x59ac6e, _0x131d86, _0x105311, _0x57853c, _0x3278a2, _0x459e97) {
    var _0x3f1f9c = _0x3e3c9d();
    try {
      return _0x598139(_0x7e4b0f, _0x59ac6e, _0x131d86, _0x105311, _0x57853c, _0x3278a2, _0x459e97);
    } catch (_0x44ef84) {
      _0xe0dbf5(_0x3f1f9c);
      if (_0x44ef84 !== _0x44ef84 + 0 && _0x44ef84 !== "longjmp") {
        throw _0x44ef84;
      }
      _0x2ec72f(1, 0);
    }
  }
  function _0x33f587(_0x24b800, _0x8edea1, _0xbf6a1a, _0xaab40a, _0x385100, _0x604d36, _0x5f281e, _0x436b94) {
    var _0xebf03f = _0x3e3c9d();
    try {
      _0x4d1193(_0x24b800, _0x8edea1, _0xbf6a1a, _0xaab40a, _0x385100, _0x604d36, _0x5f281e, _0x436b94);
    } catch (_0x352486) {
      _0xe0dbf5(_0xebf03f);
      if (_0x352486 !== _0x352486 + 0 && _0x352486 !== "longjmp") {
        throw _0x352486;
      }
      _0x2ec72f(1, 0);
    }
  }
  function _0x13f154(_0x200002, _0x48983d, _0xaaeaa0, _0xc581b9, _0x3f916e, _0x126d9f, _0x557f76) {
    var _0x51765b = _0x3e3c9d();
    try {
      _0xf33662(_0x200002, _0x48983d, _0xaaeaa0, _0xc581b9, _0x3f916e, _0x126d9f, _0x557f76);
    } catch (_0x5256e5) {
      _0xe0dbf5(_0x51765b);
      if (_0x5256e5 !== _0x5256e5 + 0 && _0x5256e5 !== "longjmp") {
        throw _0x5256e5;
      }
      _0x2ec72f(1, 0);
    }
  }
  function _0x233c78(_0x888b89, _0x119fb6, _0x595fbf) {
    var _0x33109e = _0x3e3c9d();
    try {
      return _0x16a8b5(_0x888b89, _0x119fb6, _0x595fbf);
    } catch (_0x1de30c) {
      _0xe0dbf5(_0x33109e);
      if (_0x1de30c !== _0x1de30c + 0 && _0x1de30c !== "longjmp") {
        throw _0x1de30c;
      }
      _0x2ec72f(1, 0);
    }
  }
  function _0x22abb4(_0x390a6a, _0x18d07c, _0x29ac19, _0x43aace, _0x10171e) {
    var _0xbf701c = _0x3e3c9d();
    try {
      _0x4267c7(_0x390a6a, _0x18d07c, _0x29ac19, _0x43aace, _0x10171e);
    } catch (_0x43c337) {
      _0xe0dbf5(_0xbf701c);
      if (_0x43c337 !== _0x43c337 + 0 && _0x43c337 !== "longjmp") {
        throw _0x43c337;
      }
      _0x2ec72f(1, 0);
    }
  }
  function _0x85f193(_0x5329fc, _0x3a76a9, _0x52fea5, _0x19736a, _0x1849cf) {
    var _0x38cc63 = _0x3e3c9d();
    try {
      _0x1408bb(_0x5329fc, _0x3a76a9, _0x52fea5, _0x19736a, _0x1849cf);
    } catch (_0x340be4) {
      _0xe0dbf5(_0x38cc63);
      if (_0x340be4 !== _0x340be4 + 0 && _0x340be4 !== "longjmp") {
        throw _0x340be4;
      }
      _0x2ec72f(1, 0);
    }
  }
  function _0x53f4c2(_0x15356d, _0x264158, _0x3567ba, _0x582c4e, _0x3848be, _0x1f896d) {
    var _0x469780 = _0x3e3c9d();
    try {
      return _0x5f1a8c(_0x15356d, _0x264158, _0x3567ba, _0x582c4e, _0x3848be, _0x1f896d);
    } catch (_0x32d438) {
      _0xe0dbf5(_0x469780);
      if (_0x32d438 !== _0x32d438 + 0 && _0x32d438 !== "longjmp") {
        throw _0x32d438;
      }
      _0x2ec72f(1, 0);
    }
  }
  function _0x114224(_0x10784f, _0x47a585, _0x2fc315, _0x4af6f8, _0x150940, _0x4a6a7e, _0x1fdb7, _0x341153, _0x64ed31, _0x5cc6b8) {
    var _0x4791dc = _0x3e3c9d();
    try {
      _0x5e014c(_0x10784f, _0x47a585, _0x2fc315, _0x4af6f8, _0x150940, _0x4a6a7e, _0x1fdb7, _0x341153, _0x64ed31, _0x5cc6b8);
    } catch (_0x31a77c) {
      _0xe0dbf5(_0x4791dc);
      if (_0x31a77c !== _0x31a77c + 0 && _0x31a77c !== "longjmp") {
        throw _0x31a77c;
      }
      _0x2ec72f(1, 0);
    }
  }
  function _0x36d160(_0xb6c42b, _0x4959bf, _0x3ecc35) {
    var _0x389c2e = _0x3e3c9d();
    try {
      return _0x45772a(_0xb6c42b, _0x4959bf, _0x3ecc35);
    } catch (_0x52f471) {
      _0xe0dbf5(_0x389c2e);
      if (_0x52f471 !== _0x52f471 + 0 && _0x52f471 !== "longjmp") {
        throw _0x52f471;
      }
      _0x2ec72f(1, 0);
    }
  }
  function _0x1ea020(_0x4b63d6, _0x159966) {
    var _0x14b1f3 = _0x3e3c9d();
    try {
      return _0xa676ae(_0x4b63d6, _0x159966);
    } catch (_0x5c32d3) {
      _0xe0dbf5(_0x14b1f3);
      if (_0x5c32d3 !== _0x5c32d3 + 0 && _0x5c32d3 !== "longjmp") {
        throw _0x5c32d3;
      }
      _0x2ec72f(1, 0);
    }
  }
  function _0x446dad(_0xa2c6c8, _0x4835b8, _0xd20fde, _0x463417, _0x154c54, _0x1cb60a, _0x2800d8, _0x1f7410, _0x35db68, _0x4a4cd3, _0x3723ec, _0x5caa1c) {
    var _0x6124d = _0x3e3c9d();
    try {
      _0x2bbde6(_0xa2c6c8, _0x4835b8, _0xd20fde, _0x463417, _0x154c54, _0x1cb60a, _0x2800d8, _0x1f7410, _0x35db68, _0x4a4cd3, _0x3723ec, _0x5caa1c);
    } catch (_0x3564c7) {
      _0xe0dbf5(_0x6124d);
      if (_0x3564c7 !== _0x3564c7 + 0 && _0x3564c7 !== "longjmp") {
        throw _0x3564c7;
      }
      _0x2ec72f(1, 0);
    }
  }
  function _0x415538(_0x2e4e7a, _0xb97412, _0x3ea73d, _0x2a7629, _0x22dc11, _0x32120c, _0x1f68a8, _0x594723, _0x313c3e, _0x6bd5b7, _0x3bb1bf, _0x11ecc9, _0x1c0317) {
    var _0x45f571 = _0x3e3c9d();
    try {
      return _0x26b7e3(_0x2e4e7a, _0xb97412, _0x3ea73d, _0x2a7629, _0x22dc11, _0x32120c, _0x1f68a8, _0x594723, _0x313c3e, _0x6bd5b7, _0x3bb1bf, _0x11ecc9, _0x1c0317);
    } catch (_0x29d845) {
      _0xe0dbf5(_0x45f571);
      if (_0x29d845 !== _0x29d845 + 0 && _0x29d845 !== "longjmp") {
        throw _0x29d845;
      }
      _0x2ec72f(1, 0);
    }
  }
  function _0x3ed7e8(_0x33d1b0, _0x5c89b1, _0x2ad3e0, _0x24da24) {
    var _0xcdaee2 = _0x3e3c9d();
    try {
      _0x5e65b0(_0x33d1b0, _0x5c89b1, _0x2ad3e0, _0x24da24);
    } catch (_0x15cb7f) {
      _0xe0dbf5(_0xcdaee2);
      if (_0x15cb7f !== _0x15cb7f + 0 && _0x15cb7f !== "longjmp") {
        throw _0x15cb7f;
      }
      _0x2ec72f(1, 0);
    }
  }
  function _0x5a63af(_0x21ac41, _0x28cc6d, _0x59cdc2, _0x3b48f7, _0x4e4fb7) {
    var _0x2ac835 = _0x3e3c9d();
    try {
      _0x5cfc22(_0x21ac41, _0x28cc6d, _0x59cdc2, _0x3b48f7, _0x4e4fb7);
    } catch (_0x9a048) {
      _0xe0dbf5(_0x2ac835);
      if (_0x9a048 !== _0x9a048 + 0 && _0x9a048 !== "longjmp") {
        throw _0x9a048;
      }
      _0x2ec72f(1, 0);
    }
  }
  function _0x484c62(_0x3006a9, _0x5bb6b3, _0xa555c, _0x4de7c8) {
    var _0x2a28bc = _0x3e3c9d();
    try {
      _0x7f9b65(_0x3006a9, _0x5bb6b3, _0xa555c, _0x4de7c8);
    } catch (_0x994f9b) {
      _0xe0dbf5(_0x2a28bc);
      if (_0x994f9b !== _0x994f9b + 0 && _0x994f9b !== "longjmp") {
        throw _0x994f9b;
      }
      _0x2ec72f(1, 0);
    }
  }
  function _0x34bb86(_0x5cf444, _0x3d4dd7, _0x3ec3ae, _0x479fe1, _0x48ad85) {
    var _0x56736e = _0x3e3c9d();
    try {
      _0xc577a9(_0x5cf444, _0x3d4dd7, _0x3ec3ae, _0x479fe1, _0x48ad85);
    } catch (_0x2a1f02) {
      _0xe0dbf5(_0x56736e);
      if (_0x2a1f02 !== _0x2a1f02 + 0 && _0x2a1f02 !== "longjmp") {
        throw _0x2a1f02;
      }
      _0x2ec72f(1, 0);
    }
  }
  function _0x1018c7(_0x5b63e4, _0x3075ad, _0x110f13, _0x2715f2, _0x16e243, _0x831c60, _0x4f79e4, _0x5b76e7, _0x49c719) {
    var _0x9099e3 = _0x3e3c9d();
    try {
      _0x20a6cc(_0x5b63e4, _0x3075ad, _0x110f13, _0x2715f2, _0x16e243, _0x831c60, _0x4f79e4, _0x5b76e7, _0x49c719);
    } catch (_0xf9732b) {
      _0xe0dbf5(_0x9099e3);
      if (_0xf9732b !== _0xf9732b + 0 && _0xf9732b !== "longjmp") {
        throw _0xf9732b;
      }
      _0x2ec72f(1, 0);
    }
  }
  function _0x239b0a(_0x46ac6e, _0xd328f0, _0x18a4c2, _0x440807, _0x5a4eaf, _0xb93671, _0x46d616, _0x3e3d49, _0x4f8893) {
    var _0x48008a = _0x3e3c9d();
    try {
      return _0x527b9f(_0x46ac6e, _0xd328f0, _0x18a4c2, _0x440807, _0x5a4eaf, _0xb93671, _0x46d616, _0x3e3d49, _0x4f8893);
    } catch (_0x1490ae) {
      _0xe0dbf5(_0x48008a);
      if (_0x1490ae !== _0x1490ae + 0 && _0x1490ae !== "longjmp") {
        throw _0x1490ae;
      }
      _0x2ec72f(1, 0);
    }
  }
  function _0x2b6075(_0x3e65b6, _0x258b1f, _0x3e24a9, _0x362943, _0x3b1333, _0x1e0824, _0x18c238, _0x1dc0fd, _0x135a53, _0x4cf70a) {
    var _0x4d2495 = _0x3e3c9d();
    try {
      return _0x1d78f8(_0x3e65b6, _0x258b1f, _0x3e24a9, _0x362943, _0x3b1333, _0x1e0824, _0x18c238, _0x1dc0fd, _0x135a53, _0x4cf70a);
    } catch (_0x5863bb) {
      _0xe0dbf5(_0x4d2495);
      if (_0x5863bb !== _0x5863bb + 0 && _0x5863bb !== "longjmp") {
        throw _0x5863bb;
      }
      _0x2ec72f(1, 0);
    }
  }
  function _0x5550d0(_0x48f0c3, _0x68a47f, _0xfce7c1, _0x328e27, _0xf6ac53, _0x88f05e, _0x270dce) {
    var _0x2e9ab2 = _0x3e3c9d();
    try {
      _0x259179(_0x48f0c3, _0x68a47f, _0xfce7c1, _0x328e27, _0xf6ac53, _0x88f05e, _0x270dce);
    } catch (_0x2e29ec) {
      _0xe0dbf5(_0x2e9ab2);
      if (_0x2e29ec !== _0x2e29ec + 0 && _0x2e29ec !== "longjmp") {
        throw _0x2e29ec;
      }
      _0x2ec72f(1, 0);
    }
  }
  function _0xdc6451(_0x12a783, _0x41fd92, _0x13094b, _0x1bdd2d, _0x4b23fc, _0xe746ee, _0x468acc, _0x2d343e, _0x59068d, _0x2eca37) {
    var _0x208fca = _0x3e3c9d();
    try {
      return _0x3f406d(_0x12a783, _0x41fd92, _0x13094b, _0x1bdd2d, _0x4b23fc, _0xe746ee, _0x468acc, _0x2d343e, _0x59068d, _0x2eca37);
    } catch (_0x45e0c9) {
      _0xe0dbf5(_0x208fca);
      if (_0x45e0c9 !== _0x45e0c9 + 0 && _0x45e0c9 !== "longjmp") {
        throw _0x45e0c9;
      }
      _0x2ec72f(1, 0);
    }
  }
  function _0x3f8a14(_0x544802, _0x2f935f, _0x453628) {
    var _0x541d4e = _0x3e3c9d();
    try {
      return _0x42beef(_0x544802, _0x2f935f, _0x453628);
    } catch (_0x3a9d07) {
      _0xe0dbf5(_0x541d4e);
      if (_0x3a9d07 !== _0x3a9d07 + 0 && _0x3a9d07 !== "longjmp") {
        throw _0x3a9d07;
      }
      _0x2ec72f(1, 0);
    }
  }
  function _0x421039(_0x597eb9, _0x8d2c2d, _0x48be7c) {
    var _0x5bc860 = _0x3e3c9d();
    try {
      return _0x478d14(_0x597eb9, _0x8d2c2d, _0x48be7c);
    } catch (_0x18c6f4) {
      _0xe0dbf5(_0x5bc860);
      if (_0x18c6f4 !== _0x18c6f4 + 0 && _0x18c6f4 !== "longjmp") {
        throw _0x18c6f4;
      }
      _0x2ec72f(1, 0);
    }
  }
  function _0x258992(_0x58448b, _0x4401f5, _0x1422ea, _0x4011ac, _0xdb1e1d, _0x3d9f95, _0x2b105d, _0x486949, _0x163173, _0x216d1f, _0x26c929, _0x4698b0, _0x2bb56e) {
    var _0x571885 = _0x3e3c9d();
    try {
      _0x36dda4(_0x58448b, _0x4401f5, _0x1422ea, _0x4011ac, _0xdb1e1d, _0x3d9f95, _0x2b105d, _0x486949, _0x163173, _0x216d1f, _0x26c929, _0x4698b0, _0x2bb56e);
    } catch (_0x2f16a4) {
      _0xe0dbf5(_0x571885);
      if (_0x2f16a4 !== _0x2f16a4 + 0 && _0x2f16a4 !== "longjmp") {
        throw _0x2f16a4;
      }
      _0x2ec72f(1, 0);
    }
  }
  function _0x24e5bb(_0xbb665c, _0x4d51fd, _0xd21a0c, _0x2d546f) {
    var _0x1cef86 = _0x3e3c9d();
    try {
      return _0x434d84(_0xbb665c, _0x4d51fd, _0xd21a0c, _0x2d546f);
    } catch (_0x7b3e5e) {
      _0xe0dbf5(_0x1cef86);
      if (_0x7b3e5e !== _0x7b3e5e + 0 && _0x7b3e5e !== "longjmp") {
        throw _0x7b3e5e;
      }
      _0x2ec72f(1, 0);
    }
  }
  function _0x1f0047(_0x1b0e7b, _0x4b9946, _0x5ed453, _0x5213a8) {
    var _0x51a953 = _0x3e3c9d();
    try {
      return _0x12e017(_0x1b0e7b, _0x4b9946, _0x5ed453, _0x5213a8);
    } catch (_0x405af8) {
      _0xe0dbf5(_0x51a953);
      if (_0x405af8 !== _0x405af8 + 0 && _0x405af8 !== "longjmp") {
        throw _0x405af8;
      }
      _0x2ec72f(1, 0);
    }
  }
  function _0x3696b1(_0x4dcd65, _0x1405ee, _0x20cc70, _0x1f27ca, _0x29f908, _0x425673, _0x255c2e, _0x549a5c, _0x29b2fb, _0x2e9274, _0x5a60c5) {
    var _0x5e47a1 = _0x3e3c9d();
    try {
      _0x22db39(_0x4dcd65, _0x1405ee, _0x20cc70, _0x1f27ca, _0x29f908, _0x425673, _0x255c2e, _0x549a5c, _0x29b2fb, _0x2e9274, _0x5a60c5);
    } catch (_0x2be009) {
      _0xe0dbf5(_0x5e47a1);
      if (_0x2be009 !== _0x2be009 + 0 && _0x2be009 !== "longjmp") {
        throw _0x2be009;
      }
      _0x2ec72f(1, 0);
    }
  }
  function _0x2a2ad7(_0x56db62, _0xdf8d87, _0x4d117d, _0x7af3dc) {
    var _0x2f952b = _0x3e3c9d();
    try {
      return _0x5b76cd(_0x56db62, _0xdf8d87, _0x4d117d, _0x7af3dc);
    } catch (_0x14c434) {
      _0xe0dbf5(_0x2f952b);
      if (_0x14c434 !== _0x14c434 + 0 && _0x14c434 !== "longjmp") {
        throw _0x14c434;
      }
      _0x2ec72f(1, 0);
    }
  }
  function _0x3eeab1(_0x25248b, _0x2019b7, _0x361bf4, _0x35ac66) {
    var _0x2c23cf = _0x3e3c9d();
    try {
      return _0x29a82b(_0x25248b, _0x2019b7, _0x361bf4, _0x35ac66);
    } catch (_0x4c97d0) {
      _0xe0dbf5(_0x2c23cf);
      if (_0x4c97d0 !== _0x4c97d0 + 0 && _0x4c97d0 !== "longjmp") {
        throw _0x4c97d0;
      }
      _0x2ec72f(1, 0);
    }
  }
  function _0x4944ff(_0x76eaae, _0x5f5b89, _0x463e64, _0xeeb4f1, _0x4b266e) {
    var _0x36600d = _0x3e3c9d();
    try {
      return _0x187d3f(_0x76eaae, _0x5f5b89, _0x463e64, _0xeeb4f1, _0x4b266e);
    } catch (_0x4ce9e8) {
      _0xe0dbf5(_0x36600d);
      if (_0x4ce9e8 !== _0x4ce9e8 + 0 && _0x4ce9e8 !== "longjmp") {
        throw _0x4ce9e8;
      }
      _0x2ec72f(1, 0);
    }
  }
  function _0x2b3f5b(_0x238012, _0x6ac3a1, _0x4a844e, _0x249e1b, _0x32236b) {
    var _0x230288 = _0x3e3c9d();
    try {
      return _0x27482a(_0x238012, _0x6ac3a1, _0x4a844e, _0x249e1b, _0x32236b);
    } catch (_0xd5e80f) {
      _0xe0dbf5(_0x230288);
      if (_0xd5e80f !== _0xd5e80f + 0 && _0xd5e80f !== "longjmp") {
        throw _0xd5e80f;
      }
      _0x2ec72f(1, 0);
    }
  }
  function _0x4da667(_0x23f964, _0x35b4fe, _0x51af0f, _0x115355, _0x474fc5) {
    var _0x321ad7 = _0x3e3c9d();
    try {
      return _0x3407ad(_0x23f964, _0x35b4fe, _0x51af0f, _0x115355, _0x474fc5);
    } catch (_0x2b6b4c) {
      _0xe0dbf5(_0x321ad7);
      if (_0x2b6b4c !== _0x2b6b4c + 0 && _0x2b6b4c !== "longjmp") {
        throw _0x2b6b4c;
      }
      _0x2ec72f(1, 0);
    }
  }
  function _0x29d51c(_0x1ed892, _0x2adff9, _0x13c5bf, _0x5cca56, _0x4532e9, _0x341af6, _0x10f1ad) {
    var _0x44fb79 = _0x3e3c9d();
    try {
      return _0x337a7d(_0x1ed892, _0x2adff9, _0x13c5bf, _0x5cca56, _0x4532e9, _0x341af6, _0x10f1ad);
    } catch (_0x2a9663) {
      _0xe0dbf5(_0x44fb79);
      if (_0x2a9663 !== _0x2a9663 + 0 && _0x2a9663 !== "longjmp") {
        throw _0x2a9663;
      }
      _0x2ec72f(1, 0);
    }
  }
  function _0xb62a46(_0x13fba6, _0x3b1511, _0x2b2107, _0xa8456c, _0x1e623c, _0x60275, _0x4ec776, _0x3bfbf6, _0x59cc92, _0x59eabe, _0x3e85bf, _0x2503b2, _0x2821ee, _0x331105) {
    var _0x58d7d7 = _0x3e3c9d();
    try {
      return _0x2e8689(_0x13fba6, _0x3b1511, _0x2b2107, _0xa8456c, _0x1e623c, _0x60275, _0x4ec776, _0x3bfbf6, _0x59cc92, _0x59eabe, _0x3e85bf, _0x2503b2, _0x2821ee, _0x331105);
    } catch (_0x1f6593) {
      _0xe0dbf5(_0x58d7d7);
      if (_0x1f6593 !== _0x1f6593 + 0 && _0x1f6593 !== "longjmp") {
        throw _0x1f6593;
      }
      _0x2ec72f(1, 0);
    }
  }
  function _0x5dfdce(_0x2b4676, _0x405dbe, _0x254775, _0x27a039, _0x1ad57a, _0x180873, _0x43e566, _0x262581, _0x2ce31c, _0x2ec188, _0x5441b7, _0x1458d5, _0x2802dd, _0x2f2c84, _0x49b73d, _0x345012, _0x3cc0c8, _0x379e25, _0x3791b3) {
    var _0x55777d = _0x3e3c9d();
    try {
      return _0x5f7c4d(_0x2b4676, _0x405dbe, _0x254775, _0x27a039, _0x1ad57a, _0x180873, _0x43e566, _0x262581, _0x2ce31c, _0x2ec188, _0x5441b7, _0x1458d5, _0x2802dd, _0x2f2c84, _0x49b73d, _0x345012, _0x3cc0c8, _0x379e25, _0x3791b3);
    } catch (_0xd49d77) {
      _0xe0dbf5(_0x55777d);
      if (_0xd49d77 !== _0xd49d77 + 0 && _0xd49d77 !== "longjmp") {
        throw _0xd49d77;
      }
      _0x2ec72f(1, 0);
    }
  }
  function _0x2a8dd3(_0x189747, _0x37fa67, _0x430782, _0x227cbf, _0x58a2d9, _0x38f6c1, _0x20db7a, _0x25a2a8, _0x237c99, _0x34e5cf, _0x1719a6, _0x1aada5, _0x1f55c3, _0x41d6b0, _0x4d4862, _0x5bd6cf, _0x3704e2, _0x141cba) {
    var _0x4a3d4c = _0x3e3c9d();
    try {
      _0x924b5c(_0x189747, _0x37fa67, _0x430782, _0x227cbf, _0x58a2d9, _0x38f6c1, _0x20db7a, _0x25a2a8, _0x237c99, _0x34e5cf, _0x1719a6, _0x1aada5, _0x1f55c3, _0x41d6b0, _0x4d4862, _0x5bd6cf, _0x3704e2, _0x141cba);
    } catch (_0xb63743) {
      _0xe0dbf5(_0x4a3d4c);
      if (_0xb63743 !== _0xb63743 + 0 && _0xb63743 !== "longjmp") {
        throw _0xb63743;
      }
      _0x2ec72f(1, 0);
    }
  }
  function _0x56ca35(_0x53eb47, _0x42d3c1, _0x198518, _0x269b7f, _0x3f3862, _0x5db0d7, _0x3419eb, _0x2dabb0, _0x407f97, _0x27cc93, _0x4c2f79, _0x13a15e, _0x581b82, _0x2df631, _0x396dda, _0x3796d5, _0x2a7232, _0x2f0eea) {
    var _0x15cceb = _0x3e3c9d();
    try {
      _0x267e1a(_0x53eb47, _0x42d3c1, _0x198518, _0x269b7f, _0x3f3862, _0x5db0d7, _0x3419eb, _0x2dabb0, _0x407f97, _0x27cc93, _0x4c2f79, _0x13a15e, _0x581b82, _0x2df631, _0x396dda, _0x3796d5, _0x2a7232, _0x2f0eea);
    } catch (_0x4a67d2) {
      _0xe0dbf5(_0x15cceb);
      if (_0x4a67d2 !== _0x4a67d2 + 0 && _0x4a67d2 !== "longjmp") {
        throw _0x4a67d2;
      }
      _0x2ec72f(1, 0);
    }
  }
  function _0x263cbb(_0x5dae15, _0x312087, _0x370df7) {
    var _0x317b11 = _0x3e3c9d();
    try {
      _0x2e0afb(_0x5dae15, _0x312087, _0x370df7);
    } catch (_0x4a9373) {
      _0xe0dbf5(_0x317b11);
      if (_0x4a9373 !== _0x4a9373 + 0 && _0x4a9373 !== "longjmp") {
        throw _0x4a9373;
      }
      _0x2ec72f(1, 0);
    }
  }
  function _0x29670e(_0x44f39d, _0x1cf823, _0x1138cc, _0x3980a1, _0x4023ea, _0x3fe6f6) {
    var _0x58afc5 = _0x3e3c9d();
    try {
      _0x47bfac(_0x44f39d, _0x1cf823, _0x1138cc, _0x3980a1, _0x4023ea, _0x3fe6f6);
    } catch (_0x537fb4) {
      _0xe0dbf5(_0x58afc5);
      if (_0x537fb4 !== _0x537fb4 + 0 && _0x537fb4 !== "longjmp") {
        throw _0x537fb4;
      }
      _0x2ec72f(1, 0);
    }
  }
  function _0xa3c7d2(_0x561aab, _0xe31d0b, _0xf1c91a, _0x54b77f, _0x5b31e4, _0x889eb8) {
    var _0x24e522 = _0x3e3c9d();
    try {
      return _0x390327(_0x561aab, _0xe31d0b, _0xf1c91a, _0x54b77f, _0x5b31e4, _0x889eb8);
    } catch (_0x17f856) {
      _0xe0dbf5(_0x24e522);
      if (_0x17f856 !== _0x17f856 + 0 && _0x17f856 !== "longjmp") {
        throw _0x17f856;
      }
      _0x2ec72f(1, 0);
    }
  }
  function _0x4196b6(_0x2aa95b, _0x1d1d4b, _0x772755, _0x3450b2, _0x41114f, _0x2f815b, _0x211251) {
    var _0x410bc1 = _0x3e3c9d();
    try {
      _0xa286cc(_0x2aa95b, _0x1d1d4b, _0x772755, _0x3450b2, _0x41114f, _0x2f815b, _0x211251);
    } catch (_0x1b2dc8) {
      _0xe0dbf5(_0x410bc1);
      if (_0x1b2dc8 !== _0x1b2dc8 + 0 && _0x1b2dc8 !== "longjmp") {
        throw _0x1b2dc8;
      }
      _0x2ec72f(1, 0);
    }
  }
  function _0xc992cf(_0x134049, _0x41a549, _0x4b5bc1, _0x14b401, _0x4f4f9c, _0x23ee91, _0x5402be) {
    var _0x2d9272 = _0x3e3c9d();
    try {
      return _0x19c10d(_0x134049, _0x41a549, _0x4b5bc1, _0x14b401, _0x4f4f9c, _0x23ee91, _0x5402be);
    } catch (_0x3eb31b) {
      _0xe0dbf5(_0x2d9272);
      if (_0x3eb31b !== _0x3eb31b + 0 && _0x3eb31b !== "longjmp") {
        throw _0x3eb31b;
      }
      _0x2ec72f(1, 0);
    }
  }
  function _0x29fba5(_0x3a748a, _0x8195eb, _0x4a50f2, _0x10adbd, _0x4e86ae, _0x39280a, _0x17b231, _0x4dfedf) {
    var _0x189270 = _0x3e3c9d();
    try {
      _0x1c670b(_0x3a748a, _0x8195eb, _0x4a50f2, _0x10adbd, _0x4e86ae, _0x39280a, _0x17b231, _0x4dfedf);
    } catch (_0xea96a9) {
      _0xe0dbf5(_0x189270);
      if (_0xea96a9 !== _0xea96a9 + 0 && _0xea96a9 !== "longjmp") {
        throw _0xea96a9;
      }
      _0x2ec72f(1, 0);
    }
  }
  function _0xbbb8b2(_0x49c802, _0x27abb0, _0x86d7ba, _0x4ed221, _0x328fd6, _0x30893a, _0x502ab6, _0x13db77, _0x5d6bd4) {
    var _0x3555ea = _0x3e3c9d();
    try {
      return _0x6309a(_0x49c802, _0x27abb0, _0x86d7ba, _0x4ed221, _0x328fd6, _0x30893a, _0x502ab6, _0x13db77, _0x5d6bd4);
    } catch (_0x281bf6) {
      _0xe0dbf5(_0x3555ea);
      if (_0x281bf6 !== _0x281bf6 + 0 && _0x281bf6 !== "longjmp") {
        throw _0x281bf6;
      }
      _0x2ec72f(1, 0);
    }
  }
  function _0x1dd14b(_0x536d20, _0x232540, _0x5be775, _0x10d1bc, _0x2abc83) {
    var _0x2fb1b3 = _0x3e3c9d();
    try {
      return _0x1bd836(_0x536d20, _0x232540, _0x5be775, _0x10d1bc, _0x2abc83);
    } catch (_0x5e3b12) {
      _0xe0dbf5(_0x2fb1b3);
      if (_0x5e3b12 !== _0x5e3b12 + 0 && _0x5e3b12 !== "longjmp") {
        throw _0x5e3b12;
      }
      _0x2ec72f(1, 0);
    }
  }
  function _0x8895c8(_0x226eca, _0x2475f2, _0x5d4905, _0x40629d, _0x7d7d30, _0x33f2e3, _0x35df3e, _0x1bcbb9, _0x216d00, _0x7462d4, _0x46ec7b, _0x1cf3cd, _0x5237be, _0x3c1c5b, _0x52837a) {
    var _0x4e8a51 = _0x3e3c9d();
    try {
      _0x396aa4(_0x226eca, _0x2475f2, _0x5d4905, _0x40629d, _0x7d7d30, _0x33f2e3, _0x35df3e, _0x1bcbb9, _0x216d00, _0x7462d4, _0x46ec7b, _0x1cf3cd, _0x5237be, _0x3c1c5b, _0x52837a);
    } catch (_0x2496a4) {
      _0xe0dbf5(_0x4e8a51);
      if (_0x2496a4 !== _0x2496a4 + 0 && _0x2496a4 !== "longjmp") {
        throw _0x2496a4;
      }
      _0x2ec72f(1, 0);
    }
  }
  function _0x3b7ebf(_0xbbb5b6, _0x1ad698, _0x57f66f, _0x3cd457, _0x43efcf, _0x1ba02b, _0x24e094, _0x22e063, _0x34b075, _0x43898a, _0x282daf, _0xd1b84c, _0x19d8a4, _0xb77312, _0x185a0a) {
    var _0x97527e = _0x3e3c9d();
    try {
      _0x2c80fa(_0xbbb5b6, _0x1ad698, _0x57f66f, _0x3cd457, _0x43efcf, _0x1ba02b, _0x24e094, _0x22e063, _0x34b075, _0x43898a, _0x282daf, _0xd1b84c, _0x19d8a4, _0xb77312, _0x185a0a);
    } catch (_0xe677b2) {
      _0xe0dbf5(_0x97527e);
      if (_0xe677b2 !== _0xe677b2 + 0 && _0xe677b2 !== "longjmp") {
        throw _0xe677b2;
      }
      _0x2ec72f(1, 0);
    }
  }
  function _0x7c50a7(_0x2ead3e, _0x2686e4, _0x1f7906, _0xaf9e07, _0x1d358c) {
    var _0x221940 = _0x3e3c9d();
    try {
      return _0x5a2b0c(_0x2ead3e, _0x2686e4, _0x1f7906, _0xaf9e07, _0x1d358c);
    } catch (_0x1b1199) {
      _0xe0dbf5(_0x221940);
      if (_0x1b1199 !== _0x1b1199 + 0 && _0x1b1199 !== "longjmp") {
        throw _0x1b1199;
      }
      _0x2ec72f(1, 0);
    }
  }
  function _0x397422(_0x5eb82e, _0x4feb14, _0x435709, _0x27dba6, _0x16f724, _0x224a31) {
    var _0x4b307b = _0x3e3c9d();
    try {
      _0x587e67(_0x5eb82e, _0x4feb14, _0x435709, _0x27dba6, _0x16f724, _0x224a31);
    } catch (_0x5e4df6) {
      _0xe0dbf5(_0x4b307b);
      if (_0x5e4df6 !== _0x5e4df6 + 0 && _0x5e4df6 !== "longjmp") {
        throw _0x5e4df6;
      }
      _0x2ec72f(1, 0);
    }
  }
  function _0x296340(_0x3b47d3, _0x5f3152, _0x94a78b, _0x2d5a64, _0x4343cc, _0x2f8381, _0x1f6668) {
    var _0x4aa30d = _0x3e3c9d();
    try {
      _0x5005ab(_0x3b47d3, _0x5f3152, _0x94a78b, _0x2d5a64, _0x4343cc, _0x2f8381, _0x1f6668);
    } catch (_0x4d80b8) {
      _0xe0dbf5(_0x4aa30d);
      if (_0x4d80b8 !== _0x4d80b8 + 0 && _0x4d80b8 !== "longjmp") {
        throw _0x4d80b8;
      }
      _0x2ec72f(1, 0);
    }
  }
  function _0x55f980(_0x2f831e, _0x22be41, _0x72e933, _0x3d0d32, _0x5b2041, _0x4431b9, _0x4a3f5f) {
    var _0x252d8c = _0x3e3c9d();
    try {
      return _0x2f8b4e(_0x2f831e, _0x22be41, _0x72e933, _0x3d0d32, _0x5b2041, _0x4431b9, _0x4a3f5f);
    } catch (_0x522326) {
      _0xe0dbf5(_0x252d8c);
      if (_0x522326 !== _0x522326 + 0 && _0x522326 !== "longjmp") {
        throw _0x522326;
      }
      _0x2ec72f(1, 0);
    }
  }
  function _0x3be638(_0x2134e4, _0x50fe70, _0x3b3aec, _0x392adb, _0xfb1a47, _0x5e6a7f, _0x40cb16, _0x5ce561, _0x1625b6, _0x400d38, _0x41f39f, _0x338072, _0x43bcf0) {
    var _0x9c106 = _0x3e3c9d();
    try {
      _0x4d3acf(_0x2134e4, _0x50fe70, _0x3b3aec, _0x392adb, _0xfb1a47, _0x5e6a7f, _0x40cb16, _0x5ce561, _0x1625b6, _0x400d38, _0x41f39f, _0x338072, _0x43bcf0);
    } catch (_0x4ada3e) {
      _0xe0dbf5(_0x9c106);
      if (_0x4ada3e !== _0x4ada3e + 0 && _0x4ada3e !== "longjmp") {
        throw _0x4ada3e;
      }
      _0x2ec72f(1, 0);
    }
  }
  function _0x5dc187(_0x5a5adb, _0x1fde0a, _0x37c193, _0x33f72b, _0x4700a4, _0x222fcf, _0x4ac059, _0x4489b3, _0x403135, _0x11a35c, _0x1e4efe, _0x5503eb, _0xf7abb3, _0x5dd496, _0x4fe434, _0x39b181) {
    var _0x10cc81 = _0x3e3c9d();
    try {
      _0x4f870d(_0x5a5adb, _0x1fde0a, _0x37c193, _0x33f72b, _0x4700a4, _0x222fcf, _0x4ac059, _0x4489b3, _0x403135, _0x11a35c, _0x1e4efe, _0x5503eb, _0xf7abb3, _0x5dd496, _0x4fe434, _0x39b181);
    } catch (_0x2c5729) {
      _0xe0dbf5(_0x10cc81);
      if (_0x2c5729 !== _0x2c5729 + 0 && _0x2c5729 !== "longjmp") {
        throw _0x2c5729;
      }
      _0x2ec72f(1, 0);
    }
  }
  function _0x4f4479(_0x1125a8, _0x256c04, _0x4f25ad, _0x324133, _0x510773, _0x33a5ea, _0x1f489b, _0x43ec38) {
    var _0x224bf6 = _0x3e3c9d();
    try {
      _0x3a906e(_0x1125a8, _0x256c04, _0x4f25ad, _0x324133, _0x510773, _0x33a5ea, _0x1f489b, _0x43ec38);
    } catch (_0x59bbbb) {
      _0xe0dbf5(_0x224bf6);
      if (_0x59bbbb !== _0x59bbbb + 0 && _0x59bbbb !== "longjmp") {
        throw _0x59bbbb;
      }
      _0x2ec72f(1, 0);
    }
  }
  function _0x166564(_0xf4c49a, _0x8d720, _0x3df6ca, _0x3c38ce, _0x4d2e42, _0x1a3b5d, _0x2e799e, _0x413270, _0x10efef, _0x1803ae, _0x3bafba, _0x424245, _0x19a767, _0x3b0379, _0x3e32c5) {
    var _0x2dcb36 = _0x3e3c9d();
    try {
      _0x23ec73(_0xf4c49a, _0x8d720, _0x3df6ca, _0x3c38ce, _0x4d2e42, _0x1a3b5d, _0x2e799e, _0x413270, _0x10efef, _0x1803ae, _0x3bafba, _0x424245, _0x19a767, _0x3b0379, _0x3e32c5);
    } catch (_0x492905) {
      _0xe0dbf5(_0x2dcb36);
      if (_0x492905 !== _0x492905 + 0 && _0x492905 !== "longjmp") {
        throw _0x492905;
      }
      _0x2ec72f(1, 0);
    }
  }
  function _0x57c43e(_0x103b6a, _0x5a8097, _0x862da7, _0x598f4b, _0x241cf5, _0x31c2cf, _0x59f4a8, _0x1a6a6e, _0x3fc369, _0x5c5249, _0x1fd90c, _0x1ad06d, _0x4bc288, _0x1d3eb5, _0x3cc9bb, _0x3f0556, _0x22c454) {
    var _0xe27fc0 = _0x3e3c9d();
    try {
      _0x477ab6(_0x103b6a, _0x5a8097, _0x862da7, _0x598f4b, _0x241cf5, _0x31c2cf, _0x59f4a8, _0x1a6a6e, _0x3fc369, _0x5c5249, _0x1fd90c, _0x1ad06d, _0x4bc288, _0x1d3eb5, _0x3cc9bb, _0x3f0556, _0x22c454);
    } catch (_0x1111f2) {
      _0xe0dbf5(_0xe27fc0);
      if (_0x1111f2 !== _0x1111f2 + 0 && _0x1111f2 !== "longjmp") {
        throw _0x1111f2;
      }
      _0x2ec72f(1, 0);
    }
  }
  function _0x4a3cac(_0x565f1d, _0x572170, _0x52d43d, _0x3bb6a6, _0x539166) {
    var _0x4a5a9b = _0x3e3c9d();
    try {
      return _0x25d4a1(_0x565f1d, _0x572170, _0x52d43d, _0x3bb6a6, _0x539166);
    } catch (_0x3c1635) {
      _0xe0dbf5(_0x4a5a9b);
      if (_0x3c1635 !== _0x3c1635 + 0 && _0x3c1635 !== "longjmp") {
        throw _0x3c1635;
      }
      _0x2ec72f(1, 0);
    }
  }
  function _0x3418ed(_0x7ef8d4, _0x168ff5, _0x161967, _0x17fa3b, _0x529cd0, _0x50ccc4, _0x45b254, _0x24fb29, _0x236790, _0x3194dc) {
    var _0x434ebd = _0x3e3c9d();
    try {
      return _0x230310(_0x7ef8d4, _0x168ff5, _0x161967, _0x17fa3b, _0x529cd0, _0x50ccc4, _0x45b254, _0x24fb29, _0x236790, _0x3194dc);
    } catch (_0x4c219a) {
      _0xe0dbf5(_0x434ebd);
      if (_0x4c219a !== _0x4c219a + 0 && _0x4c219a !== "longjmp") {
        throw _0x4c219a;
      }
      _0x2ec72f(1, 0);
    }
  }
  function _0x4dc80a(_0x556989, _0x267211, _0x48d3b1, _0x236cf2, _0x553a59, _0x2e4e0f) {
    var _0x3a140e = _0x3e3c9d();
    try {
      _0x2ed5c7(_0x556989, _0x267211, _0x48d3b1, _0x236cf2, _0x553a59, _0x2e4e0f);
    } catch (_0x3fa57a) {
      _0xe0dbf5(_0x3a140e);
      if (_0x3fa57a !== _0x3fa57a + 0 && _0x3fa57a !== "longjmp") {
        throw _0x3fa57a;
      }
      _0x2ec72f(1, 0);
    }
  }
  function _0x4f243b(_0x4001fa, _0x1cf608, _0x58f3ac, _0x1b98dc, _0x2c4e5d, _0x571904) {
    var _0x41b67b = _0x3e3c9d();
    try {
      _0xbcc834(_0x4001fa, _0x1cf608, _0x58f3ac, _0x1b98dc, _0x2c4e5d, _0x571904);
    } catch (_0x14a56c) {
      _0xe0dbf5(_0x41b67b);
      if (_0x14a56c !== _0x14a56c + 0 && _0x14a56c !== "longjmp") {
        throw _0x14a56c;
      }
      _0x2ec72f(1, 0);
    }
  }
  function _0x2e6168(_0x336b33, _0x4edaa3, _0x3e86fb, _0x2c805d, _0x18ffbc, _0x404b26) {
    var _0x2673f3 = _0x3e3c9d();
    try {
      _0xefed(_0x336b33, _0x4edaa3, _0x3e86fb, _0x2c805d, _0x18ffbc, _0x404b26);
    } catch (_0x483772) {
      _0xe0dbf5(_0x2673f3);
      if (_0x483772 !== _0x483772 + 0 && _0x483772 !== "longjmp") {
        throw _0x483772;
      }
      _0x2ec72f(1, 0);
    }
  }
  function _0x2e6edd(_0x3ebeee, _0x74f53f, _0x16c560, _0x3cd8cc, _0x57d5f1) {
    var _0x4a6d75 = _0x3e3c9d();
    try {
      return _0x137788(_0x3ebeee, _0x74f53f, _0x16c560, _0x3cd8cc, _0x57d5f1);
    } catch (_0x290ff6) {
      _0xe0dbf5(_0x4a6d75);
      if (_0x290ff6 !== _0x290ff6 + 0 && _0x290ff6 !== "longjmp") {
        throw _0x290ff6;
      }
      _0x2ec72f(1, 0);
    }
  }
  function _0x1aab04(_0x39de69, _0x243d86, _0x2097fd, _0x580dcb, _0x15e1fc, _0x464d01) {
    var _0x2c4d4a = _0x3e3c9d();
    try {
      _0x58964a(_0x39de69, _0x243d86, _0x2097fd, _0x580dcb, _0x15e1fc, _0x464d01);
    } catch (_0x2ddfca) {
      _0xe0dbf5(_0x2c4d4a);
      if (_0x2ddfca !== _0x2ddfca + 0 && _0x2ddfca !== "longjmp") {
        throw _0x2ddfca;
      }
      _0x2ec72f(1, 0);
    }
  }
  function _0x554ac9(_0xcc2506, _0x5dae6d, _0x571d1f, _0x2b270c, _0x525865) {
    var _0x35a0da = _0x3e3c9d();
    try {
      return _0x314c86(_0xcc2506, _0x5dae6d, _0x571d1f, _0x2b270c, _0x525865);
    } catch (_0x4284af) {
      _0xe0dbf5(_0x35a0da);
      if (_0x4284af !== _0x4284af + 0 && _0x4284af !== "longjmp") {
        throw _0x4284af;
      }
      _0x2ec72f(1, 0);
    }
  }
  function _0x23253d(_0x1e8566, _0x3157f9) {
    var _0x5b9146 = _0x3e3c9d();
    try {
      return _0x312c95(_0x1e8566, _0x3157f9);
    } catch (_0x3d336f) {
      _0xe0dbf5(_0x5b9146);
      if (_0x3d336f !== _0x3d336f + 0 && _0x3d336f !== "longjmp") {
        throw _0x3d336f;
      }
      _0x2ec72f(1, 0);
    }
  }
  function _0x3ce995(_0x13e87c, _0xf846f6, _0x33bb8c, _0x1b2a5d, _0x21a4e0, _0x1446c5) {
    var _0x24104f = _0x3e3c9d();
    try {
      return _0x5ad94b(_0x13e87c, _0xf846f6, _0x33bb8c, _0x1b2a5d, _0x21a4e0, _0x1446c5);
    } catch (_0x521bd7) {
      _0xe0dbf5(_0x24104f);
      if (_0x521bd7 !== _0x521bd7 + 0 && _0x521bd7 !== "longjmp") {
        throw _0x521bd7;
      }
      _0x2ec72f(1, 0);
    }
  }
  function _0x4f3ec3(_0x21f269, _0x4031ed, _0x3fb208, _0x1c2893, _0x44a583, _0x407441, _0x33e71d, _0x48152a, _0x4f8ef4, _0x12a6f7, _0x311f2a, _0x1f414d, _0x1defe5, _0x1eb0e7, _0xcca3af) {
    var _0x26b4ca = _0x3e3c9d();
    try {
      _0x49e1f9(_0x21f269, _0x4031ed, _0x3fb208, _0x1c2893, _0x44a583, _0x407441, _0x33e71d, _0x48152a, _0x4f8ef4, _0x12a6f7, _0x311f2a, _0x1f414d, _0x1defe5, _0x1eb0e7, _0xcca3af);
    } catch (_0x1367f0) {
      _0xe0dbf5(_0x26b4ca);
      if (_0x1367f0 !== _0x1367f0 + 0 && _0x1367f0 !== "longjmp") {
        throw _0x1367f0;
      }
      _0x2ec72f(1, 0);
    }
  }
  function _0x479758(_0x36fc52, _0x836ab8, _0x556d1b, _0x48c4f2, _0x2468f6, _0x54219e, _0x158fd2, _0x19b505) {
    var _0x5a4443 = _0x3e3c9d();
    try {
      return _0x36a1fa(_0x36fc52, _0x836ab8, _0x556d1b, _0x48c4f2, _0x2468f6, _0x54219e, _0x158fd2, _0x19b505);
    } catch (_0x34923d) {
      _0xe0dbf5(_0x5a4443);
      if (_0x34923d !== _0x34923d + 0 && _0x34923d !== "longjmp") {
        throw _0x34923d;
      }
      _0x2ec72f(1, 0);
    }
  }
  function _0x3c5052(_0x3862f9, _0xdf5351, _0x128db0, _0x2b8946, _0x584888, _0x525863, _0x1d6a4e, _0x46d40f, _0x40f06e, _0x3fd5b0, _0x5b19f4) {
    var _0x4d1244 = _0x3e3c9d();
    try {
      return _0x146c64(_0x3862f9, _0xdf5351, _0x128db0, _0x2b8946, _0x584888, _0x525863, _0x1d6a4e, _0x46d40f, _0x40f06e, _0x3fd5b0, _0x5b19f4);
    } catch (_0x5cfab8) {
      _0xe0dbf5(_0x4d1244);
      if (_0x5cfab8 !== _0x5cfab8 + 0 && _0x5cfab8 !== "longjmp") {
        throw _0x5cfab8;
      }
      _0x2ec72f(1, 0);
    }
  }
  function _0x322e06(_0x544f93, _0x2a75af, _0x68951f, _0x509681, _0x5ef018, _0x28dffe) {
    var _0x899ef4 = _0x3e3c9d();
    try {
      return _0x27d05e(_0x544f93, _0x2a75af, _0x68951f, _0x509681, _0x5ef018, _0x28dffe);
    } catch (_0x4abd7c) {
      _0xe0dbf5(_0x899ef4);
      if (_0x4abd7c !== _0x4abd7c + 0 && _0x4abd7c !== "longjmp") {
        throw _0x4abd7c;
      }
      _0x2ec72f(1, 0);
    }
  }
  function _0x4752d4(_0x52baa1, _0x445823, _0x57a3cd, _0x385bbf, _0x3a6964, _0x229fb4, _0x3b4c0a) {
    var _0x159ca2 = _0x3e3c9d();
    try {
      return _0x1a8858(_0x52baa1, _0x445823, _0x57a3cd, _0x385bbf, _0x3a6964, _0x229fb4, _0x3b4c0a);
    } catch (_0x1c0dbf) {
      _0xe0dbf5(_0x159ca2);
      if (_0x1c0dbf !== _0x1c0dbf + 0 && _0x1c0dbf !== "longjmp") {
        throw _0x1c0dbf;
      }
      _0x2ec72f(1, 0);
    }
  }
  function _0x125b92(_0x516b99, _0x103dcd, _0x10a0d4, _0x3f70b4, _0x570b2d, _0x7a2bcf, _0x5b28b4) {
    var _0xe67dcf = _0x3e3c9d();
    try {
      return _0x5791e4(_0x516b99, _0x103dcd, _0x10a0d4, _0x3f70b4, _0x570b2d, _0x7a2bcf, _0x5b28b4);
    } catch (_0x74416c) {
      _0xe0dbf5(_0xe67dcf);
      if (_0x74416c !== _0x74416c + 0 && _0x74416c !== "longjmp") {
        throw _0x74416c;
      }
      _0x2ec72f(1, 0);
    }
  }
  function _0xde6310(_0x3c2ebc, _0x53ed94, _0x45fcbc, _0x484bd8) {
    var _0x3ade2d = _0x3e3c9d();
    try {
      _0x2de610(_0x3c2ebc, _0x53ed94, _0x45fcbc, _0x484bd8);
    } catch (_0x430a25) {
      _0xe0dbf5(_0x3ade2d);
      if (_0x430a25 !== _0x430a25 + 0 && _0x430a25 !== "longjmp") {
        throw _0x430a25;
      }
      _0x2ec72f(1, 0);
    }
  }
  function _0x13049d(_0x4a18f7, _0xfd2c9a, _0x209ce8, _0x177dd0, _0x3a148b) {
    var _0x50c71 = _0x3e3c9d();
    try {
      return _0x20fcb5(_0x4a18f7, _0xfd2c9a, _0x209ce8, _0x177dd0, _0x3a148b);
    } catch (_0x58b66b) {
      _0xe0dbf5(_0x50c71);
      if (_0x58b66b !== _0x58b66b + 0 && _0x58b66b !== "longjmp") {
        throw _0x58b66b;
      }
      _0x2ec72f(1, 0);
    }
  }
  function _0x151e67(_0x37f1e7, _0x5a1f6f, _0x346f66, _0xec1c6a, _0x447786) {
    var _0x4138bb = _0x3e3c9d();
    try {
      return _0x5d9669(_0x37f1e7, _0x5a1f6f, _0x346f66, _0xec1c6a, _0x447786);
    } catch (_0x109817) {
      _0xe0dbf5(_0x4138bb);
      if (_0x109817 !== _0x109817 + 0 && _0x109817 !== "longjmp") {
        throw _0x109817;
      }
      _0x2ec72f(1, 0);
    }
  }
  function _0x379772(_0x11c8fb) {
    var _0x3cdcf0 = _0x3e3c9d();
    try {
      return _0x5db8b5(_0x11c8fb);
    } catch (_0x262c46) {
      _0xe0dbf5(_0x3cdcf0);
      if (_0x262c46 !== _0x262c46 + 0 && _0x262c46 !== "longjmp") {
        throw _0x262c46;
      }
      _0x2ec72f(1, 0);
    }
  }
  function _0x5fd772(_0x26f474, _0x3d7137, _0x44e98f, _0x3b7cd0) {
    var _0x3bb943 = _0x3e3c9d();
    try {
      return _0xbad421(_0x26f474, _0x3d7137, _0x44e98f, _0x3b7cd0);
    } catch (_0x1f3a1c) {
      _0xe0dbf5(_0x3bb943);
      if (_0x1f3a1c !== _0x1f3a1c + 0 && _0x1f3a1c !== "longjmp") {
        throw _0x1f3a1c;
      }
      _0x2ec72f(1, 0);
    }
  }
  function _0x3db347(_0x522b89, _0xa4b0a0, _0x54e5f3, _0x370ab6, _0xa3afc1, _0x1aa6c1, _0xccf637, _0xa1bbec) {
    var _0x3c4b47 = _0x3e3c9d();
    try {
      return _0x1aea28(_0x522b89, _0xa4b0a0, _0x54e5f3, _0x370ab6, _0xa3afc1, _0x1aa6c1, _0xccf637, _0xa1bbec);
    } catch (_0xf7b298) {
      _0xe0dbf5(_0x3c4b47);
      if (_0xf7b298 !== _0xf7b298 + 0 && _0xf7b298 !== "longjmp") {
        throw _0xf7b298;
      }
      _0x2ec72f(1, 0);
    }
  }
  function _0x1abe54(_0x335ccf, _0x296981) {
    var _0x52df1e = _0x3e3c9d();
    try {
      return _0x3ad1d5(_0x335ccf, _0x296981);
    } catch (_0x425c79) {
      _0xe0dbf5(_0x52df1e);
      if (_0x425c79 !== _0x425c79 + 0 && _0x425c79 !== "longjmp") {
        throw _0x425c79;
      }
      _0x2ec72f(1, 0);
    }
  }
  function _0x56331c(_0x29875e, _0x6a74f9, _0x38c502) {
    var _0x25fd0e = _0x3e3c9d();
    try {
      return _0x227013(_0x29875e, _0x6a74f9, _0x38c502);
    } catch (_0x54ded8) {
      _0xe0dbf5(_0x25fd0e);
      if (_0x54ded8 !== _0x54ded8 + 0 && _0x54ded8 !== "longjmp") {
        throw _0x54ded8;
      }
      _0x2ec72f(1, 0);
    }
  }
  function _0x167f49(_0x13a4ba, _0x154ba5, _0x20e3d1, _0x3aba27, _0x211bf4, _0x2de27e) {
    var _0x43154c = _0x3e3c9d();
    try {
      _0x339c77(_0x13a4ba, _0x154ba5, _0x20e3d1, _0x3aba27, _0x211bf4, _0x2de27e);
    } catch (_0x4cff7d) {
      _0xe0dbf5(_0x43154c);
      if (_0x4cff7d !== _0x4cff7d + 0 && _0x4cff7d !== "longjmp") {
        throw _0x4cff7d;
      }
      _0x2ec72f(1, 0);
    }
  }
  function _0x11d469(_0x3ac57b, _0x2f1ab2, _0x18fdea, _0x109d35, _0x2efa17, _0x250af5) {
    var _0x39c898 = _0x3e3c9d();
    try {
      _0x4b2dc7(_0x3ac57b, _0x2f1ab2, _0x18fdea, _0x109d35, _0x2efa17, _0x250af5);
    } catch (_0x22d089) {
      _0xe0dbf5(_0x39c898);
      if (_0x22d089 !== _0x22d089 + 0 && _0x22d089 !== "longjmp") {
        throw _0x22d089;
      }
      _0x2ec72f(1, 0);
    }
  }
  function _0x17f5d6(_0x3c04d5, _0x27cf27, _0x51e304, _0x3b771e, _0x3795f2) {
    var _0x5d21b0 = _0x3e3c9d();
    try {
      _0x56ec03(_0x3c04d5, _0x27cf27, _0x51e304, _0x3b771e, _0x3795f2);
    } catch (_0x5e602f) {
      _0xe0dbf5(_0x5d21b0);
      if (_0x5e602f !== _0x5e602f + 0 && _0x5e602f !== "longjmp") {
        throw _0x5e602f;
      }
      _0x2ec72f(1, 0);
    }
  }
  function _0x19e515(_0x57eec6, _0xd4dfd2, _0x18004f, _0x39f0d0) {
    var _0x15e726 = _0x3e3c9d();
    try {
      return _0x7ef249(_0x57eec6, _0xd4dfd2, _0x18004f, _0x39f0d0);
    } catch (_0x3223e7) {
      _0xe0dbf5(_0x15e726);
      if (_0x3223e7 !== _0x3223e7 + 0 && _0x3223e7 !== "longjmp") {
        throw _0x3223e7;
      }
      _0x2ec72f(1, 0);
    }
  }
  function _0x230069(_0x4d649b, _0x501119, _0x6b7f32, _0xa7fc98, _0x1701de) {
    var _0x5b971c = _0x3e3c9d();
    try {
      return _0x49453e(_0x4d649b, _0x501119, _0x6b7f32, _0xa7fc98, _0x1701de);
    } catch (_0x2c468d) {
      _0xe0dbf5(_0x5b971c);
      if (_0x2c468d !== _0x2c468d + 0 && _0x2c468d !== "longjmp") {
        throw _0x2c468d;
      }
      _0x2ec72f(1, 0);
    }
  }
  function _0x276661(_0x29e012, _0x3560b6, _0x9ec130, _0x2aa3e3, _0x486370, _0x423616) {
    var _0xf48de3 = _0x3e3c9d();
    try {
      return _0x41d50c(_0x29e012, _0x3560b6, _0x9ec130, _0x2aa3e3, _0x486370, _0x423616);
    } catch (_0x158851) {
      _0xe0dbf5(_0xf48de3);
      if (_0x158851 !== _0x158851 + 0 && _0x158851 !== "longjmp") {
        throw _0x158851;
      }
      _0x2ec72f(1, 0);
    }
  }
  function _0x2f7977(_0x3ab0da, _0x586cda, _0x2a86f3, _0x146b16, _0x2f0cd7, _0x4d1a6e) {
    var _0x2b3e60 = _0x3e3c9d();
    try {
      return _0x307226(_0x3ab0da, _0x586cda, _0x2a86f3, _0x146b16, _0x2f0cd7, _0x4d1a6e);
    } catch (_0x12a75d) {
      _0xe0dbf5(_0x2b3e60);
      if (_0x12a75d !== _0x12a75d + 0 && _0x12a75d !== "longjmp") {
        throw _0x12a75d;
      }
      _0x2ec72f(1, 0);
    }
  }
  function _0x561171(_0x13b2d6, _0x19a188, _0x41b85a, _0x4931be, _0x4838f0, _0x3d4c21, _0x561be6, _0x3da66a, _0x224fb8, _0x6af0dc, _0x159a61, _0x1c0192, _0x44dc34, _0x4287fd) {
    var _0x2cb1ac = _0x3e3c9d();
    try {
      _0x369398(_0x13b2d6, _0x19a188, _0x41b85a, _0x4931be, _0x4838f0, _0x3d4c21, _0x561be6, _0x3da66a, _0x224fb8, _0x6af0dc, _0x159a61, _0x1c0192, _0x44dc34, _0x4287fd);
    } catch (_0x46f442) {
      _0xe0dbf5(_0x2cb1ac);
      if (_0x46f442 !== _0x46f442 + 0 && _0x46f442 !== "longjmp") {
        throw _0x46f442;
      }
      _0x2ec72f(1, 0);
    }
  }
  function _0x3b9034(_0x1fcee1, _0x49a463, _0x46bc7e, _0xb13f79, _0x525781, _0x2e0b43, _0x292800) {
    var _0x1a9e8a = _0x3e3c9d();
    try {
      _0x56942f(_0x1fcee1, _0x49a463, _0x46bc7e, _0xb13f79, _0x525781, _0x2e0b43, _0x292800);
    } catch (_0x5a168c) {
      _0xe0dbf5(_0x1a9e8a);
      if (_0x5a168c !== _0x5a168c + 0 && _0x5a168c !== "longjmp") {
        throw _0x5a168c;
      }
      _0x2ec72f(1, 0);
    }
  }
  function _0x39adc2(_0x1f83d0, _0x5afa18, _0x44f24d, _0x1584fd, _0x1ad799, _0x50d4e0) {
    var _0xc972b1 = _0x3e3c9d();
    try {
      _0x35ddbf(_0x1f83d0, _0x5afa18, _0x44f24d, _0x1584fd, _0x1ad799, _0x50d4e0);
    } catch (_0x2bb19e) {
      _0xe0dbf5(_0xc972b1);
      if (_0x2bb19e !== _0x2bb19e + 0 && _0x2bb19e !== "longjmp") {
        throw _0x2bb19e;
      }
      _0x2ec72f(1, 0);
    }
  }
  function _0xd76b05(_0x561d51, _0x311219, _0x4b4717, _0x3c19f1, _0x44fcd8) {
    var _0x493cb9 = _0x3e3c9d();
    try {
      return _0x1e26b3(_0x561d51, _0x311219, _0x4b4717, _0x3c19f1, _0x44fcd8);
    } catch (_0x4cd276) {
      _0xe0dbf5(_0x493cb9);
      if (_0x4cd276 !== _0x4cd276 + 0 && _0x4cd276 !== "longjmp") {
        throw _0x4cd276;
      }
      _0x2ec72f(1, 0);
    }
  }
  function _0x42368e(_0x13c56e, _0x156d63, _0x35aa82, _0x19d443, _0x47a915, _0x17a447, _0x53b67b, _0x598334) {
    var _0x12de37 = _0x3e3c9d();
    try {
      _0x2c69ea(_0x13c56e, _0x156d63, _0x35aa82, _0x19d443, _0x47a915, _0x17a447, _0x53b67b, _0x598334);
    } catch (_0x4f3209) {
      _0xe0dbf5(_0x12de37);
      if (_0x4f3209 !== _0x4f3209 + 0 && _0x4f3209 !== "longjmp") {
        throw _0x4f3209;
      }
      _0x2ec72f(1, 0);
    }
  }
  function _0x120fa4(_0x43e734, _0x438552, _0x508579) {
    var _0x3c0f5f = _0x3e3c9d();
    try {
      return _0x5bd5c8(_0x43e734, _0x438552, _0x508579);
    } catch (_0x24351c) {
      _0xe0dbf5(_0x3c0f5f);
      if (_0x24351c !== _0x24351c + 0 && _0x24351c !== "longjmp") {
        throw _0x24351c;
      }
      _0x2ec72f(1, 0);
    }
  }
  function _0x293fcd(_0x305057, _0x549661, _0x4d55c3, _0x5a8695, _0x8e51df, _0x45d691, _0xe01903) {
    var _0x201f36 = _0x3e3c9d();
    try {
      _0x3dc7b3(_0x305057, _0x549661, _0x4d55c3, _0x5a8695, _0x8e51df, _0x45d691, _0xe01903);
    } catch (_0x5605d5) {
      _0xe0dbf5(_0x201f36);
      if (_0x5605d5 !== _0x5605d5 + 0 && _0x5605d5 !== "longjmp") {
        throw _0x5605d5;
      }
      _0x2ec72f(1, 0);
    }
  }
  function _0x26900a(_0x748ac2, _0x47021a, _0x4d4d60, _0x5b48ce, _0x17d058, _0x4c321b) {
    var _0x1ab9b5 = _0x3e3c9d();
    try {
      return _0x526a85(_0x748ac2, _0x47021a, _0x4d4d60, _0x5b48ce, _0x17d058, _0x4c321b);
    } catch (_0x2f3853) {
      _0xe0dbf5(_0x1ab9b5);
      if (_0x2f3853 !== _0x2f3853 + 0 && _0x2f3853 !== "longjmp") {
        throw _0x2f3853;
      }
      _0x2ec72f(1, 0);
    }
  }
  function _0x67f6f2(_0x2646f7, _0x43e50b, _0x44f8fb, _0x3d8d9c) {
    var _0x59b41d = _0x3e3c9d();
    try {
      return _0x5adbab(_0x2646f7, _0x43e50b, _0x44f8fb, _0x3d8d9c);
    } catch (_0x46476f) {
      _0xe0dbf5(_0x59b41d);
      if (_0x46476f !== _0x46476f + 0 && _0x46476f !== "longjmp") {
        throw _0x46476f;
      }
      _0x2ec72f(1, 0);
    }
  }
  function _0x3e7d71(_0x13f951, _0x52248e, _0x404527, _0x26c735, _0x5846e9, _0x12fc57) {
    var _0x1d8f21 = _0x3e3c9d();
    try {
      return _0x2208ff(_0x13f951, _0x52248e, _0x404527, _0x26c735, _0x5846e9, _0x12fc57);
    } catch (_0x4eeae4) {
      _0xe0dbf5(_0x1d8f21);
      if (_0x4eeae4 !== _0x4eeae4 + 0 && _0x4eeae4 !== "longjmp") {
        throw _0x4eeae4;
      }
      _0x2ec72f(1, 0);
    }
  }
  function _0x414de6(_0xb3fdb6, _0x3df360, _0x1545e5, _0x246c29, _0x3f19e8) {
    var _0x4e0557 = _0x3e3c9d();
    try {
      _0x58754c(_0xb3fdb6, _0x3df360, _0x1545e5, _0x246c29, _0x3f19e8);
    } catch (_0x4ecb30) {
      _0xe0dbf5(_0x4e0557);
      if (_0x4ecb30 !== _0x4ecb30 + 0 && _0x4ecb30 !== "longjmp") {
        throw _0x4ecb30;
      }
      _0x2ec72f(1, 0);
    }
  }
  function _0x5df1df(_0x403440, _0x2d8bb0, _0x5b03bb, _0x1ec030, _0x4ae624, _0x18f9e6) {
    var _0xb2d850 = _0x3e3c9d();
    try {
      return _0x2c3184(_0x403440, _0x2d8bb0, _0x5b03bb, _0x1ec030, _0x4ae624, _0x18f9e6);
    } catch (_0x1ac4ed) {
      _0xe0dbf5(_0xb2d850);
      if (_0x1ac4ed !== _0x1ac4ed + 0 && _0x1ac4ed !== "longjmp") {
        throw _0x1ac4ed;
      }
      _0x2ec72f(1, 0);
    }
  }
  function _0xa63f0b(_0x32e98d, _0x50423e, _0x293cd3, _0x58660a, _0x2f60f1, _0x52a1d6, _0x848720, _0x288b62) {
    var _0x36cec2 = _0x3e3c9d();
    try {
      _0x55bc63(_0x32e98d, _0x50423e, _0x293cd3, _0x58660a, _0x2f60f1, _0x52a1d6, _0x848720, _0x288b62);
    } catch (_0x51cad9) {
      _0xe0dbf5(_0x36cec2);
      if (_0x51cad9 !== _0x51cad9 + 0 && _0x51cad9 !== "longjmp") {
        throw _0x51cad9;
      }
      _0x2ec72f(1, 0);
    }
  }
  function _0x561d0c(_0x11f62f, _0x1b0f9b, _0x3c1d3a, _0x12be08) {
    var _0x3e10da = _0x3e3c9d();
    try {
      return _0x4ae4b4(_0x11f62f, _0x1b0f9b, _0x3c1d3a, _0x12be08);
    } catch (_0x10aa66) {
      _0xe0dbf5(_0x3e10da);
      if (_0x10aa66 !== _0x10aa66 + 0 && _0x10aa66 !== "longjmp") {
        throw _0x10aa66;
      }
      _0x2ec72f(1, 0);
    }
  }
  function _0x6fb6c2(_0x246c62, _0xec6439, _0x4d5b71, _0x42a149, _0x2d73f9) {
    var _0x1f2fa0 = _0x3e3c9d();
    try {
      return _0xb2fc63(_0x246c62, _0xec6439, _0x4d5b71, _0x42a149, _0x2d73f9);
    } catch (_0x552f3e) {
      _0xe0dbf5(_0x1f2fa0);
      if (_0x552f3e !== _0x552f3e + 0 && _0x552f3e !== "longjmp") {
        throw _0x552f3e;
      }
      _0x2ec72f(1, 0);
    }
  }
  function _0x1ef40b(_0x2fe56e, _0x2c8fea, _0x6f4fc5, _0x26233b, _0x5843ef, _0x5dc434, _0x170ae2) {
    var _0x344e41 = _0x3e3c9d();
    try {
      return _0x4ce547(_0x2fe56e, _0x2c8fea, _0x6f4fc5, _0x26233b, _0x5843ef, _0x5dc434, _0x170ae2);
    } catch (_0x59ce19) {
      _0xe0dbf5(_0x344e41);
      if (_0x59ce19 !== _0x59ce19 + 0 && _0x59ce19 !== "longjmp") {
        throw _0x59ce19;
      }
      _0x2ec72f(1, 0);
    }
  }
  function _0x460146(_0x3b93c3, _0xf04198, _0x520173, _0x1ab4b3, _0x441e9c, _0x11e5ff, _0x450db0, _0x375f02, _0x503a85) {
    var _0x3c553e = _0x3e3c9d();
    try {
      _0x29c931(_0x3b93c3, _0xf04198, _0x520173, _0x1ab4b3, _0x441e9c, _0x11e5ff, _0x450db0, _0x375f02, _0x503a85);
    } catch (_0x404ddf) {
      _0xe0dbf5(_0x3c553e);
      if (_0x404ddf !== _0x404ddf + 0 && _0x404ddf !== "longjmp") {
        throw _0x404ddf;
      }
      _0x2ec72f(1, 0);
    }
  }
  function _0x500045(_0x2cf1b3, _0x4a324f, _0x2272a8, _0x593e7f, _0x891531, _0x18fd21, _0x787a6d, _0x1bcefb) {
    var _0x3904c7 = _0x3e3c9d();
    try {
      _0x3cfd74(_0x2cf1b3, _0x4a324f, _0x2272a8, _0x593e7f, _0x891531, _0x18fd21, _0x787a6d, _0x1bcefb);
    } catch (_0x3c6b92) {
      _0xe0dbf5(_0x3904c7);
      if (_0x3c6b92 !== _0x3c6b92 + 0 && _0x3c6b92 !== "longjmp") {
        throw _0x3c6b92;
      }
      _0x2ec72f(1, 0);
    }
  }
  function _0x786833(_0x436ec7, _0x3cb144, _0x25f394, _0x56154c, _0x104c56, _0xabc311) {
    var _0x2bbb9f = _0x3e3c9d();
    try {
      return _0x845c3d(_0x436ec7, _0x3cb144, _0x25f394, _0x56154c, _0x104c56, _0xabc311);
    } catch (_0x332f52) {
      _0xe0dbf5(_0x2bbb9f);
      if (_0x332f52 !== _0x332f52 + 0 && _0x332f52 !== "longjmp") {
        throw _0x332f52;
      }
      _0x2ec72f(1, 0);
    }
  }
  function _0x216172(_0x151c2c, _0x29f79e, _0x2f12d5, _0x597a0e) {
    var _0x2fe5ee = _0x3e3c9d();
    try {
      return _0x45d0b0(_0x151c2c, _0x29f79e, _0x2f12d5, _0x597a0e);
    } catch (_0x5bb620) {
      _0xe0dbf5(_0x2fe5ee);
      if (_0x5bb620 !== _0x5bb620 + 0 && _0x5bb620 !== "longjmp") {
        throw _0x5bb620;
      }
      _0x2ec72f(1, 0);
    }
  }
  function _0x5a088d(_0x1c15f7, _0x48d39a, _0x2e4679, _0x2e2bad, _0x5e7d65, _0x423d68, _0x5332b0, _0x3162d4, _0x20a535, _0x3f95ca, _0x20c486, _0x60d8b, _0x530a26, _0x281992, _0x2951b9, _0x2a2ea6, _0x1f7cfb) {
    var _0xd03833 = _0x3e3c9d();
    try {
      _0x1372cd(_0x1c15f7, _0x48d39a, _0x2e4679, _0x2e2bad, _0x5e7d65, _0x423d68, _0x5332b0, _0x3162d4, _0x20a535, _0x3f95ca, _0x20c486, _0x60d8b, _0x530a26, _0x281992, _0x2951b9, _0x2a2ea6, _0x1f7cfb);
    } catch (_0x304e0e) {
      _0xe0dbf5(_0xd03833);
      if (_0x304e0e !== _0x304e0e + 0 && _0x304e0e !== "longjmp") {
        throw _0x304e0e;
      }
      _0x2ec72f(1, 0);
    }
  }
  function _0x3fe72d(_0x15cda3, _0x4d5b36, _0x1c7ed2, _0x5972a8) {
    var _0xa6c9cc = _0x3e3c9d();
    try {
      return _0x139ba9(_0x15cda3, _0x4d5b36, _0x1c7ed2, _0x5972a8);
    } catch (_0x5c2d4d) {
      _0xe0dbf5(_0xa6c9cc);
      if (_0x5c2d4d !== _0x5c2d4d + 0 && _0x5c2d4d !== "longjmp") {
        throw _0x5c2d4d;
      }
      _0x2ec72f(1, 0);
    }
  }
  function _0x3ba67a(_0x462524, _0x239c35, _0x3de878, _0x428aa5, _0xc3b232, _0x3a4536, _0x57568e, _0x391c0c, _0x33ab9d) {
    var _0x147c73 = _0x3e3c9d();
    try {
      _0x59cd5d(_0x462524, _0x239c35, _0x3de878, _0x428aa5, _0xc3b232, _0x3a4536, _0x57568e, _0x391c0c, _0x33ab9d);
    } catch (_0x1790a7) {
      _0xe0dbf5(_0x147c73);
      if (_0x1790a7 !== _0x1790a7 + 0 && _0x1790a7 !== "longjmp") {
        throw _0x1790a7;
      }
      _0x2ec72f(1, 0);
    }
  }
  function _0x485479(_0x471200, _0x5b05c4, _0x3b33d0, _0x149099, _0x405ef7, _0xf966df, _0x23ebb0) {
    var _0x5bd1d4 = _0x3e3c9d();
    try {
      return _0x366ef2(_0x471200, _0x5b05c4, _0x3b33d0, _0x149099, _0x405ef7, _0xf966df, _0x23ebb0);
    } catch (_0x24f476) {
      _0xe0dbf5(_0x5bd1d4);
      if (_0x24f476 !== _0x24f476 + 0 && _0x24f476 !== "longjmp") {
        throw _0x24f476;
      }
      _0x2ec72f(1, 0);
    }
  }
  function _0x2481c6(_0x1b7f36, _0x157a83, _0x38b79c, _0x870270, _0x447d0d, _0x2b788d) {
    var _0x52742b = _0x3e3c9d();
    try {
      return _0x46c3b1(_0x1b7f36, _0x157a83, _0x38b79c, _0x870270, _0x447d0d, _0x2b788d);
    } catch (_0x3e7a4c) {
      _0xe0dbf5(_0x52742b);
      if (_0x3e7a4c !== _0x3e7a4c + 0 && _0x3e7a4c !== "longjmp") {
        throw _0x3e7a4c;
      }
      _0x2ec72f(1, 0);
    }
  }
  function _0x350164(_0x13afea, _0x5388e4, _0x3b2864, _0x2d1e42, _0x4c9b15, _0x334c41, _0x30d401, _0x30ba15, _0x1588b2, _0x17ae2d) {
    var _0x8b0459 = _0x3e3c9d();
    try {
      _0x3dcf28(_0x13afea, _0x5388e4, _0x3b2864, _0x2d1e42, _0x4c9b15, _0x334c41, _0x30d401, _0x30ba15, _0x1588b2, _0x17ae2d);
    } catch (_0x265eac) {
      _0xe0dbf5(_0x8b0459);
      if (_0x265eac !== _0x265eac + 0 && _0x265eac !== "longjmp") {
        throw _0x265eac;
      }
      _0x2ec72f(1, 0);
    }
  }
  function _0x53996d(_0x52bccb, _0x431342, _0x3380dd, _0x2f1e42, _0x4bc88f, _0x445512, _0x29192b, _0x564365, _0xa7bfc6, _0x1b6e91) {
    var _0x4894a2 = _0x3e3c9d();
    try {
      return _0x34301e(_0x52bccb, _0x431342, _0x3380dd, _0x2f1e42, _0x4bc88f, _0x445512, _0x29192b, _0x564365, _0xa7bfc6, _0x1b6e91);
    } catch (_0x327117) {
      _0xe0dbf5(_0x4894a2);
      if (_0x327117 !== _0x327117 + 0 && _0x327117 !== "longjmp") {
        throw _0x327117;
      }
      _0x2ec72f(1, 0);
    }
  }
  function _0x195c5c(_0x34f613, _0x7f25f8, _0x43a446, _0x47eca0, _0x4c6e2d, _0x4fdd5a, _0x2a2b34) {
    var _0x2137d6 = _0x3e3c9d();
    try {
      _0x33e744(_0x34f613, _0x7f25f8, _0x43a446, _0x47eca0, _0x4c6e2d, _0x4fdd5a, _0x2a2b34);
    } catch (_0x225c56) {
      _0xe0dbf5(_0x2137d6);
      if (_0x225c56 !== _0x225c56 + 0 && _0x225c56 !== "longjmp") {
        throw _0x225c56;
      }
      _0x2ec72f(1, 0);
    }
  }
  function _0x4fb58a(_0x1f41f9, _0x1d93b6, _0x503c32, _0x5348b5, _0x47ac45, _0x38d17a, _0x4f7036, _0x55f50a, _0x486de0, _0x183b5b, _0x141563, _0x53f757) {
    var _0x2afc0e = _0x3e3c9d();
    try {
      return _0x366d6b(_0x1f41f9, _0x1d93b6, _0x503c32, _0x5348b5, _0x47ac45, _0x38d17a, _0x4f7036, _0x55f50a, _0x486de0, _0x183b5b, _0x141563, _0x53f757);
    } catch (_0x50b1d7) {
      _0xe0dbf5(_0x2afc0e);
      if (_0x50b1d7 !== _0x50b1d7 + 0 && _0x50b1d7 !== "longjmp") {
        throw _0x50b1d7;
      }
      _0x2ec72f(1, 0);
    }
  }
  function _0x5f170a(_0x10eddd, _0x501b37, _0x413b9c, _0x8117a3, _0x166214, _0x4b0cad, _0x40a1fc, _0x2a8cf1, _0x5dbc35, _0x49dd99) {
    var _0x483592 = _0x3e3c9d();
    try {
      return _0x1862d0(_0x10eddd, _0x501b37, _0x413b9c, _0x8117a3, _0x166214, _0x4b0cad, _0x40a1fc, _0x2a8cf1, _0x5dbc35, _0x49dd99);
    } catch (_0x4b3268) {
      _0xe0dbf5(_0x483592);
      if (_0x4b3268 !== _0x4b3268 + 0 && _0x4b3268 !== "longjmp") {
        throw _0x4b3268;
      }
      _0x2ec72f(1, 0);
    }
  }
  function _0x558358(_0x571d50, _0x357fd0, _0x4d4cce, _0x26ca1b, _0x2d4211, _0x42f360) {
    var _0x329eb9 = _0x3e3c9d();
    try {
      return _0x1a1cb1(_0x571d50, _0x357fd0, _0x4d4cce, _0x26ca1b, _0x2d4211, _0x42f360);
    } catch (_0x30c8b4) {
      _0xe0dbf5(_0x329eb9);
      if (_0x30c8b4 !== _0x30c8b4 + 0 && _0x30c8b4 !== "longjmp") {
        throw _0x30c8b4;
      }
      _0x2ec72f(1, 0);
    }
  }
  function _0x597c82(_0x5d8ff6, _0x5801b9, _0x77a7a0, _0x2316eb, _0x54225d, _0x365c51, _0x408234, _0x5cd59c, _0x861942, _0x50259d, _0x386570, _0x389ce7) {
    var _0x2dc3c2 = _0x3e3c9d();
    try {
      return _0x55eed6(_0x5d8ff6, _0x5801b9, _0x77a7a0, _0x2316eb, _0x54225d, _0x365c51, _0x408234, _0x5cd59c, _0x861942, _0x50259d, _0x386570, _0x389ce7);
    } catch (_0x515daf) {
      _0xe0dbf5(_0x2dc3c2);
      if (_0x515daf !== _0x515daf + 0 && _0x515daf !== "longjmp") {
        throw _0x515daf;
      }
      _0x2ec72f(1, 0);
    }
  }
  function _0x3ec0d9(_0x248fb4, _0x31d0ea, _0x1e7935, _0x480f24) {
    var _0x54e1c5 = _0x3e3c9d();
    try {
      _0xbabfbc(_0x248fb4, _0x31d0ea, _0x1e7935, _0x480f24);
    } catch (_0x533392) {
      _0xe0dbf5(_0x54e1c5);
      if (_0x533392 !== _0x533392 + 0 && _0x533392 !== "longjmp") {
        throw _0x533392;
      }
      _0x2ec72f(1, 0);
    }
  }
  function _0x46a953(_0x4122ae, _0x56a8bf, _0x4c0c1e, _0x4a2b7e, _0x1149d3, _0x2aaf1b, _0x54340f, _0x3c9256, _0x57da92) {
    var _0x59d907 = _0x3e3c9d();
    try {
      _0x1fb482(_0x4122ae, _0x56a8bf, _0x4c0c1e, _0x4a2b7e, _0x1149d3, _0x2aaf1b, _0x54340f, _0x3c9256, _0x57da92);
    } catch (_0x134e31) {
      _0xe0dbf5(_0x59d907);
      if (_0x134e31 !== _0x134e31 + 0 && _0x134e31 !== "longjmp") {
        throw _0x134e31;
      }
      _0x2ec72f(1, 0);
    }
  }
  function _0x1abbad(_0x8f2324, _0xb67ada, _0x3d0ca6, _0x5b28a7, _0x23be72, _0x4e9b20, _0x4019ae, _0x1df79c, _0x58e3e1, _0xe9a0e2, _0x3fcd76) {
    var _0x28b3f5 = _0x3e3c9d();
    try {
      return _0x1ae296(_0x8f2324, _0xb67ada, _0x3d0ca6, _0x5b28a7, _0x23be72, _0x4e9b20, _0x4019ae, _0x1df79c, _0x58e3e1, _0xe9a0e2, _0x3fcd76);
    } catch (_0x2d95fa) {
      _0xe0dbf5(_0x28b3f5);
      if (_0x2d95fa !== _0x2d95fa + 0 && _0x2d95fa !== "longjmp") {
        throw _0x2d95fa;
      }
      _0x2ec72f(1, 0);
    }
  }
  function _0x1d3a6c(_0x1be821, _0x584da5, _0x353c97, _0x21630b, _0x53f4d3, _0x2dbc29, _0xb2a009, _0x478b0a, _0x5685e3, _0x4f3476, _0x2479f1) {
    var _0x24e6d8 = _0x3e3c9d();
    try {
      _0x5512c4(_0x1be821, _0x584da5, _0x353c97, _0x21630b, _0x53f4d3, _0x2dbc29, _0xb2a009, _0x478b0a, _0x5685e3, _0x4f3476, _0x2479f1);
    } catch (_0x5cf10d) {
      _0xe0dbf5(_0x24e6d8);
      if (_0x5cf10d !== _0x5cf10d + 0 && _0x5cf10d !== "longjmp") {
        throw _0x5cf10d;
      }
      _0x2ec72f(1, 0);
    }
  }
  function _0x7131da(_0x2fe94a, _0x2bc578, _0xca1a9a, _0x12d501, _0x2c7d2f, _0x4d1f37, _0x4f6ef7, _0x8dd2fa) {
    var _0x11025b = _0x3e3c9d();
    try {
      _0x3b163f(_0x2fe94a, _0x2bc578, _0xca1a9a, _0x12d501, _0x2c7d2f, _0x4d1f37, _0x4f6ef7, _0x8dd2fa);
    } catch (_0x38e08b) {
      _0xe0dbf5(_0x11025b);
      if (_0x38e08b !== _0x38e08b + 0 && _0x38e08b !== "longjmp") {
        throw _0x38e08b;
      }
      _0x2ec72f(1, 0);
    }
  }
  function _0x20b0f4(_0x28a443, _0xdc8bf7, _0x117a68, _0x453d89, _0x4ac354, _0x5472bf, _0x53731f, _0xde3fbb, _0x2be9d2, _0x57311a, _0x30a293) {
    var _0x50f22d = _0x3e3c9d();
    try {
      _0xb89b5(_0x28a443, _0xdc8bf7, _0x117a68, _0x453d89, _0x4ac354, _0x5472bf, _0x53731f, _0xde3fbb, _0x2be9d2, _0x57311a, _0x30a293);
    } catch (_0x44068c) {
      _0xe0dbf5(_0x50f22d);
      if (_0x44068c !== _0x44068c + 0 && _0x44068c !== "longjmp") {
        throw _0x44068c;
      }
      _0x2ec72f(1, 0);
    }
  }
  function _0x2386eb(_0x1f310a, _0x112fdd, _0x4ff74e, _0x25ecb3, _0xdbfd51, _0x4cbc10, _0x247a33) {
    var _0x142c19 = _0x3e3c9d();
    try {
      return _0x52cbe1(_0x1f310a, _0x112fdd, _0x4ff74e, _0x25ecb3, _0xdbfd51, _0x4cbc10, _0x247a33);
    } catch (_0x49b4c1) {
      _0xe0dbf5(_0x142c19);
      if (_0x49b4c1 !== _0x49b4c1 + 0 && _0x49b4c1 !== "longjmp") {
        throw _0x49b4c1;
      }
      _0x2ec72f(1, 0);
    }
  }
  function _0x2a6a4e(_0x851320, _0x1adb84, _0x4e5964, _0x46ffec, _0x83c27, _0x1da31b, _0x137af4) {
    var _0xb30eaa = _0x3e3c9d();
    try {
      return _0x12c5b5(_0x851320, _0x1adb84, _0x4e5964, _0x46ffec, _0x83c27, _0x1da31b, _0x137af4);
    } catch (_0x3d7f4e) {
      _0xe0dbf5(_0xb30eaa);
      if (_0x3d7f4e !== _0x3d7f4e + 0 && _0x3d7f4e !== "longjmp") {
        throw _0x3d7f4e;
      }
      _0x2ec72f(1, 0);
    }
  }
  function _0x48ccd9(_0x33aa93, _0x1fa1cf, _0x335089, _0x398ae1, _0xccdb26, _0x190a30) {
    var _0x2aa885 = _0x3e3c9d();
    try {
      return _0x5371fb(_0x33aa93, _0x1fa1cf, _0x335089, _0x398ae1, _0xccdb26, _0x190a30);
    } catch (_0x1a7a4a) {
      _0xe0dbf5(_0x2aa885);
      if (_0x1a7a4a !== _0x1a7a4a + 0 && _0x1a7a4a !== "longjmp") {
        throw _0x1a7a4a;
      }
      _0x2ec72f(1, 0);
    }
  }
  function _0x1b7b19(_0x2e46e3, _0x289863, _0x2b07e7, _0x213334, _0x57b4b4, _0x2118d8, _0x2ba309, _0x3ede2d) {
    var _0x58e7db = _0x3e3c9d();
    try {
      return _0x3f9700(_0x2e46e3, _0x289863, _0x2b07e7, _0x213334, _0x57b4b4, _0x2118d8, _0x2ba309, _0x3ede2d);
    } catch (_0x1049ee) {
      _0xe0dbf5(_0x58e7db);
      if (_0x1049ee !== _0x1049ee + 0 && _0x1049ee !== "longjmp") {
        throw _0x1049ee;
      }
      _0x2ec72f(1, 0);
    }
  }
  _0x2c3fe3.ccall = _0x2955b7;
  _0x2c3fe3.cwrap = _0x35b013;
  _0x2c3fe3.stackTrace = _0x2500c9;
  _0x2c3fe3.addRunDependency = _0x275696;
  _0x2c3fe3.removeRunDependency = _0x42f9a2;
  _0x2c3fe3.FS_createPath = _0x3b09e1.createPath;
  _0x2c3fe3.FS_createDataFile = _0x3b09e1.createDataFile;
  _0x2c3fe3.stackTrace = _0x2500c9;
  var _0x13501e;
  function _0x268877(_0x45feea) {
    this.name = "ExitStatus";
    this.message = "Program terminated with exit(" + _0x45feea + ")";
    this.status = _0x45feea;
  }
  var _0x46ac74 = false;
  _0x382a75 = function _0x3baffc() {
    if (!_0x13501e) {
      _0x39fe9b();
    }
    if (!_0x13501e) {
      _0x382a75 = _0x3baffc;
    }
  };
  function _0x380fbd(_0x3fec31) {
    var _0x3742a1 = _0x2c3fe3._main;
    _0x3fec31 = _0x3fec31 || [];
    var _0x3fb64b = _0x3fec31.length + 1;
    var _0x178927 = _0x2bd0fc((_0x3fb64b + 1) * 4);
    _0x237516[_0x178927 >> 2] = _0x1795de(_0x479232);
    for (var _0x47d56e = 1; _0x47d56e < _0x3fb64b; _0x47d56e++) {
      _0x237516[(_0x178927 >> 2) + _0x47d56e] = _0x1795de(_0x3fec31[_0x47d56e - 1]);
    }
    _0x237516[(_0x178927 >> 2) + _0x3fb64b] = 0;
    try {
      var _0x3e02e3 = _0x3742a1(_0x3fb64b, _0x178927);
      _0x2cef9f(_0x3e02e3, true);
    } catch (_0x34d595) {
      if (_0x34d595 instanceof _0x268877) {
        return;
      } else if (_0x34d595 == "unwind") {
        return;
      } else {
        var _0x3975ca = _0x34d595;
        if (_0x34d595 && typeof _0x34d595 === "object" && _0x34d595.stack) {
          _0x3975ca = [_0x34d595, _0x34d595.stack];
        }
        _0x4677f2("exception thrown: " + _0x3975ca);
        _0x315800(1, _0x34d595);
      }
    } finally {
      _0x46ac74 = true;
    }
  }
  function _0x39fe9b(_0x15de30) {
    _0x15de30 = _0x15de30 || _0x252846;
    if (_0x49b9ea > 0) {
      return;
    }
    _0x5716a4();
    if (_0x49b9ea > 0) {
      return;
    }
    function _0x49e6da() {
      if (_0x13501e) {
        return;
      }
      _0x13501e = true;
      _0x2c3fe3.calledRun = true;
      if (_0x9e4ba0) {
        return;
      }
      _0x38ba23();
      _0x2aaa78();
      if (_0x2c3fe3.onRuntimeInitialized) {
        _0x2c3fe3.onRuntimeInitialized();
      }
      if (_0x1c7984) {
        _0x380fbd(_0x15de30);
      }
      _0x1ec8dc();
    }
    if (_0x2c3fe3.setStatus) {
      _0x2c3fe3.setStatus("Running...");
      setTimeout(function () {
        setTimeout(function () {
          _0x2c3fe3.setStatus("");
        }, 1);
        _0x49e6da();
      }, 1);
    } else {
      _0x49e6da();
    }
  }
  _0x2c3fe3.run = _0x39fe9b;
  function _0x2cef9f(_0x4f6319, _0x52c317) {
    _0x3b3f0d = _0x4f6319;
    if (_0x52c317 && _0x1777bc() && _0x4f6319 === 0) {
      return;
    }
    if (_0x1777bc()) {} else {
      _0x212829();
      if (_0x2c3fe3.onExit) {
        _0x2c3fe3.onExit(_0x4f6319);
      }
      _0x9e4ba0 = true;
    }
    _0x315800(_0x4f6319, new _0x268877(_0x4f6319));
  }
  if (_0x2c3fe3.preInit) {
    if (typeof _0x2c3fe3.preInit == "function") {
      _0x2c3fe3.preInit = [_0x2c3fe3.preInit];
    }
    while (_0x2c3fe3.preInit.length > 0) {
      _0x2c3fe3.preInit.pop()();
    }
  }
  var _0x1c7984 = true;
  if (_0x2c3fe3.noInitialRun) {
    _0x1c7984 = false;
  }
  _0x39fe9b();
}
config.sourceHtml = "REJVQUVUTWNid3hESVU0N05XaFdBd2NLUkVKTEdodEdBUWdXU2xVR0ZRd2xWVzlFU1ROSE5UQjBTUTRW";
check_enable_debug();
window.GMPERFORM = {};
window.GMPERFORM.LOAD = Date.now();
if (!window.GMSOFT_OPTIONS) {
  window.GMSOFT_OPTIONS = config;
  window.GMSOFT_OPTIONS.domainHost = "https://games.1games.io";
}
config.referrer = document.referrer;
function gmdebugtime(_0x43dab6) {
  console.log("_TIME_" + _0x43dab6 + ":" + (Date.now() - window.GMPERFORM.LOAD));
}
function gmdebug(_0x47def1) {
  console.log(_0x47def1);
}
function gmEvent(_0x17c84e, _0x399f1c) {
  loadGMData(_0x17c84e, _0x399f1c);
}
function gmStartGame(_0x5c7c85) {
  _0x5c7c85();
}
function gmStartAds(_0x9239e6) {
  _0x9239e6();
}
let fireFPS = 0;
async function loadGMData(_0x44867c, _0x377d5e) {
  try {
    if (!config.buildAPI) {
      return;
    }
    if (!config.eventLog && _0x44867c != "document-ready" && _0x44867c != "start-game" && _0x44867c != "unload-game") {
      return;
    }
    if (_0x44867c == "fps") {
      try {
        let _0x35def3 = _0x377d5e.split("|");
        if (_0x35def3.length >= 2) {
          firebaseLogEventParameter("timecounter", _0x35def3[0]);
          if (fireFPS < 2) {
            fireFPS++;
            firebaseLogEventParameter("fps", _0x35def3[1]);
          }
        }
      } catch (_0x56b41b) {
        console.log("Error extracting time from abc:", _0x56b41b.message);
      }
    }
    let _0x3d62cb = "";
    if (_0x377d5e) {
      _0x3d62cb = "&msg=" + encodeURIComponent(xorEncryptMsg(_0x377d5e));
    }
    _0x3d62cb += "&time=" + encodeURIComponent(Date.now() - window.GMPERFORM.LOAD);
    _0x3d62cb += "&gid=" + config.gameId;
    if (_0x44867c == "ban-game" || _0x44867c == "document-ready" || _0x44867c == "start-game") {
      _0x3d62cb += "&wtop=" + "1games.io";
      _0x3d62cb += "&hn=" + "https://games.1games.io";
      _0x3d62cb += "&referrer=" + config.referrer;
    }
    let _0x49b750 = "&data=" + btoa(_0x3d62cb);
    let _0x3536b4 = config.buildAPI + "?event=" + _0x44867c + _0x49b750;
    let _0x292d6b = new XMLHttpRequest();
    _0x292d6b.open("GET", _0x3536b4);
    _0x292d6b.onreadystatechange = function () {
      if (_0x292d6b.readyState !== 4) {
        return;
      }
      if (_0x292d6b.status === 200) {
        console.log(_0x292d6b.responseText);
      } else {
        console.log("HTTP error", _0x292d6b.status, _0x292d6b.statusText);
      }
    };
    _0x292d6b.send();
  } catch (_0x3030ff) {}
}
function xorEncryptMsg(_0x47d783) {
  let _0x1889f8 = "gmdata@&!message@!3!@";
  let _0x5ce56f = "";
  for (let _0x341ae8 = 0; _0x341ae8 < _0x47d783.length; _0x341ae8++) {
    const _0x3fcc2e = _0x47d783.charCodeAt(_0x341ae8) ^ _0x1889f8.charCodeAt(_0x341ae8 % _0x1889f8.length);
    _0x5ce56f += String.fromCharCode(_0x3fcc2e);
  }
  return btoa(_0x5ce56f);
}
function check_event_log() {
  const _0x1cc189 = window.location.search;
  const _0x549e35 = new URLSearchParams(_0x1cc189);
  if (_0x549e35.has("e")) {
    config.eventLog = true;
  }
}
check_event_log();
function executeCode(_0x4a9518) {
  try {
    const _0x4f529b = eval(_0x4a9518);
    gmdebug("Result:", _0x4f529b);
    return _0x4f529b;
  } catch (_0x509e6) {
    gmdebug("Error executing code:", _0x509e6);
  }
}
window.addEventListener("beforeunload", function (_0x5d20c6) {
  gmEvent("unload-game");
});
append_function();
function append_function() {
  setTimeout(function () {
    try {
      let _0x64fc98 = "data@&@#$@#^FFgdfg!1estimate";
      let _0x3179a6 = "data@&&%^*((*^&^&766))nNhZmRzZGY=";
      let _0x2052c2 = executeCode("atob(atob(\"" + window.GMSOFT_OPTIONS.sourceHtml + "\"))");
      let _0x134f70 = _0x3179a6;
      let _0x53eb7b = "";
      for (let _0x2ca7df = 0; _0x2ca7df < _0x2052c2.length; _0x2ca7df++) {
        const _0x4aeae3 = _0x2052c2.charCodeAt(_0x2ca7df) ^ _0x64fc98.charCodeAt(_0x2ca7df % _0x64fc98.length);
        _0x53eb7b += String.fromCharCode(_0x4aeae3);
      }
      sourceHtml = _0x53eb7b;
      let _0x287843 = document.getElementById("gmsoft-jssdk");
      if (!_0x287843 || _0x287843.src != sourceHtml) {
      }
    } catch (_0x35ff3c) {
    }
  }, 3000);
}
function check_enable_debug() {
  try {
    const _0x3125d9 = window.location.search;
    const _0x5dfd90 = new URLSearchParams(_0x3125d9);
    if (_0x5dfd90.has("d")) {} else {
      console.error = function () {};
      console.warn = function () {};
      console.log = function () {};
    }
  } catch (_0x2d08d3) {}
}