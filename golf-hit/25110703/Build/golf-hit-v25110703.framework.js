function unityFramework(_0x289557) {
  var _0x289557 = typeof _0x289557 !== "undefined" ? _0x289557 : {};
  _0x289557.USER_JSPRE_PLACEHOLDER = "USER_JSPRE_PLACEHOLDER";
  function _0x5dee27(_0x353a7f, _0x3b510b) {
    _0x22e41e("The JavaScript function 'Pointer_stringify(ptrToSomeCString)' is obsoleted and will be removed in a future Unity version. Please call 'UTF8ToString(ptrToSomeCString)' instead.");
    return _0x5c2e85(_0x353a7f, _0x3b510b);
  }
  _0x289557.Pointer_stringify = _0x5dee27;
  var _0x46ccbe = "(^|\\n)(\\s+at\\s+|)jsStackTrace(\\s+\\(|@)([^\\n]+):\\d+:\\d+(\\)|)(\\n|$)";
  var _0x360302 = _0x5b220f().match(new RegExp(_0x46ccbe));
  if (_0x360302) {
    _0x289557.stackTraceRegExp = new RegExp(_0x46ccbe.replace("([^\\n]+)", _0x360302[4].replace(/[\\^${}[\]().*+?|]/g, "\\$&")).replace("jsStackTrace", "[^\\n]+"));
  }
  function _0x48d521(_0x4d9e82) {
    if (_0x16d0c6) {
      return;
    }
    _0x16d0c6 = true;
    _0x3717d8 = 1;
    if (typeof ENVIRONMENT_IS_PTHREAD !== "undefined" && ENVIRONMENT_IS_PTHREAD) {
      console.error("Pthread aborting at " + new Error().stack);
    }
    if (_0x4d9e82 !== undefined) {
      _0x2ac208(_0x4d9e82);
      _0x1650b6(_0x4d9e82);
      _0x4d9e82 = JSON.stringify(_0x4d9e82);
    } else {
      _0x4d9e82 = "";
    }
    var _0xacfb88 = "abort(" + _0x4d9e82 + ") at " + _0xacba48();
    if (_0x289557.abortHandler && _0x289557.abortHandler(_0xacfb88)) {
      return;
    }
    throw _0xacfb88;
  }
  _0x289557.SetFullscreen = function (_0x52b5cf) {
    if (typeof _0x19a40a === "undefined" || !_0x19a40a) {
      console.log("Runtime not initialized yet.");
    } else if (typeof _0x35ce8f === "undefined") {
      console.log("Player not loaded yet.");
    } else {
      var _0x5b9231 = _0x35ce8f.canPerformEventHandlerRequests;
      _0x35ce8f.canPerformEventHandlerRequests = function () {
        return 1;
      };
      _0x289557.ccall("SetFullscreen", null, ["number"], [_0x52b5cf]);
      _0x35ce8f.canPerformEventHandlerRequests = _0x5b9231;
    }
  };
  if (typeof ENVIRONMENT_IS_PTHREAD === "undefined" || !ENVIRONMENT_IS_PTHREAD) {
    _0x289557.preRun.push(function () {
      var _0x8eed6b = _0x289557.unityFileSystemInit || function () {
        _0x2840b9.mkdir("/idbfs");
        _0x2840b9.mount(_0x36c80d, {}, "/idbfs");
        _0x289557.addRunDependency("JS_FileSystem_Mount");
        _0x2840b9.syncfs(true, function (_0x1f0bdb) {
          if (_0x1f0bdb) {
            console.log("IndexedDB is not available. Data will not persist in cache and PlayerPrefs will not be saved.");
          }
          _0x289557.removeRunDependency("JS_FileSystem_Mount");
        });
      };
      _0x8eed6b();
    });
  }
  var _0x3f580c = [];
  var _0x9185d1 = false;
  var _0x4d87c4;
  var _0x2c9f08 = null;
  function _0x29f62f(_0x4f7860) {
    var _0x50924d = Object.keys(_0x3f580c);
    for (var _0x3f28d1 = 0; _0x3f28d1 < _0x50924d.length; ++_0x3f28d1) {
      var _0x584407 = _0x3f580c[_0x50924d[_0x3f28d1]];
      if (_0x584407.deviceId && _0x584407.deviceId == _0x4f7860.deviceId) {
        return _0x584407;
      }
    }
    for (var _0x3f28d1 = 0; _0x3f28d1 < _0x50924d.length; ++_0x3f28d1) {
      var _0x584407 = _0x3f580c[_0x50924d[_0x3f28d1]];
      if (_0x584407 == _0x4f7860) {
        return _0x584407;
      }
    }
    for (var _0x3f28d1 = 0; _0x3f28d1 < _0x50924d.length; ++_0x3f28d1) {
      var _0x584407 = _0x3f580c[_0x50924d[_0x3f28d1]];
      if (_0x584407.label && _0x584407.label == _0x4f7860.label) {
        return _0x584407;
      }
    }
    for (var _0x3f28d1 = 0; _0x3f28d1 < _0x50924d.length; ++_0x3f28d1) {
      var _0x584407 = _0x3f580c[_0x50924d[_0x3f28d1]];
      if (_0x584407.groupId && _0x584407.kind && _0x584407.groupId == _0x4f7860.groupId && _0x584407.kind == _0x4f7860.kind) {
        return _0x584407;
      }
    }
  }
  function _0x21457b() {
    for (var _0x26f2fc = 0;; ++_0x26f2fc) {
      if (!_0x3f580c[_0x26f2fc]) {
        return _0x26f2fc;
      }
    }
  }
  function _0x214f9a(_0x3bd36e) {
    _0x4d87c4();
    _0x3f580c = [];
    var _0xbf2c60 = {};
    var _0xfe9742 = [];
    _0x3bd36e.forEach(function (_0x3830dd) {
      if (_0x3830dd.kind === "videoinput") {
        var _0x1501e0 = _0x29f62f(_0x3830dd);
        if (_0x1501e0) {
          _0xbf2c60[_0x1501e0.id] = _0x1501e0;
        } else {
          _0xfe9742.push(_0x3830dd);
        }
      }
    });
    _0x3f580c = _0xbf2c60;
    _0xfe9742.forEach(function (_0x31a77a) {
      if (!_0x31a77a.id) {
        _0x31a77a.id = _0x21457b();
        _0x31a77a.name = _0x31a77a.label || "Video input #" + (_0x31a77a.id + 1);
        _0x31a77a.isFrontFacing = _0x31a77a.name.toLowerCase().includes("front") || !_0x31a77a.name.toLowerCase().includes("front") && !_0x31a77a.name.toLowerCase().includes("back");
        _0x3f580c[_0x31a77a.id] = _0x31a77a;
      }
    });
  }
  function _0x2a76dc() {
    if (!_0x3f580c) {
      return;
    }
    navigator.mediaDevices.enumerateDevices().then(function (_0x41843b) {
      _0x214f9a(_0x41843b);
      _0x9185d1 = true;
    }).catch(function (_0x212134) {
      console.warn("Unable to enumerate media devices: " + _0x212134 + "\nWebcams will not be available.");
      _0x2b6190();
    });
    if (/Firefox/.test(navigator.userAgent)) {
      setTimeout(_0x2a76dc, 60000);
      _0x22e41e("Applying workaround to Firefox bug https://bugzilla.mozilla.org/show_bug.cgi?id=1397977");
    }
  }
  function _0x2b6190() {
    if (navigator.mediaDevices && navigator.mediaDevices.removeEventListener) {
      navigator.mediaDevices.removeEventListener("devicechange", _0x2a76dc);
    }
    _0x3f580c = null;
  }
  _0x289557.disableAccessToMediaDevices = _0x2b6190;
  if (!navigator.mediaDevices) {
    console.warn("navigator.mediaDevices not supported by this browser. Webcam access will not be available." + (location.protocol == "https:" ? "" : " Try hosting the page over HTTPS, because some browsers disable webcam access when insecure HTTP is being used."));
    _0x2b6190();
  } else if (typeof ENVIRONMENT_IS_PTHREAD === "undefined" || !ENVIRONMENT_IS_PTHREAD) {
    setTimeout(function () {
      try {
        _0x349a66("enumerateMediaDevices");
        _0x4d87c4 = function () {
          if (_0x2c9f08 !== null) {
            clearTimeout(_0x2c9f08);
          }
          _0x50369d("enumerateMediaDevices");
          if (navigator.mediaDevices) {
            console.log("navigator.mediaDevices support available");
          }
          _0x4d87c4 = function () {};
        };
        _0x2a76dc();
        _0x2c9f08 = setTimeout(_0x4d87c4, 1000);
        navigator.mediaDevices.addEventListener("devicechange", _0x2a76dc);
      } catch (_0x552de7) {
        console.warn("Unable to enumerate media devices: " + _0x552de7);
        _0x2b6190();
      }
    }, 0);
  }
  function _0x187a5c(_0x44283b, _0xd5abc8, _0x1ee058) {
    var _0x1fb85b = _0x26d35b(_0xd5abc8);
    var _0x3b5c61 = _0x26d35b(_0x44283b);
    var _0x13efb9 = 0;
    try {
      if (_0x1ee058 === undefined) {
        _0x3fcb58(_0x3b5c61, _0x1fb85b);
      } else if (typeof _0x1ee058 === "string") {
        _0x13efb9 = _0x26d35b(_0x1ee058);
        _0x3b9380(_0x3b5c61, _0x1fb85b, _0x13efb9);
      } else if (typeof _0x1ee058 === "number") {
        _0x47370d(_0x3b5c61, _0x1fb85b, _0x1ee058);
      } else {
        throw "" + _0x1ee058 + " is does not have a type which is supported by SendMessage.";
      }
    } finally {
      _0x2933c1(_0x13efb9);
      _0x2933c1(_0x3b5c61);
      _0x2933c1(_0x1fb85b);
    }
  }
  _0x289557.SendMessage = _0x187a5c;
  var _0x26e463 = {};
  var _0x3beaf7;
  for (_0x3beaf7 in _0x289557) {
    if (_0x289557.hasOwnProperty(_0x3beaf7)) {
      _0x26e463[_0x3beaf7] = _0x289557[_0x3beaf7];
    }
  }
  var _0x3ff23e = [];
  var _0x368e09 = "./this.program";
  function _0x35b3f7(_0x2a4451, _0xf18197) {
    throw _0xf18197;
  }
  var _0x5cb5b2 = false;
  var _0x4d7134 = false;
  var _0x319321 = false;
  var _0x19af06 = false;
  _0x5cb5b2 = typeof window === "object";
  _0x4d7134 = typeof importScripts === "function";
  _0x319321 = typeof process === "object" && typeof process.versions === "object" && typeof process.versions.node === "string";
  _0x19af06 = !_0x5cb5b2 && !_0x319321 && !_0x4d7134;
  var _0x7da4b6 = "";
  function _0x3541ef(_0x49e78f) {
    if (_0x289557.locateFile) {
      return _0x289557.locateFile(_0x49e78f, _0x7da4b6);
    }
    return _0x7da4b6 + _0x49e78f;
  }
  var _0x564ab3;
  var _0x1540b2;
  var _0xfb9875;
  var _0x34c518;
  var _0x228179;
  var _0x27c307;
  if (_0x319321) {
    if (_0x4d7134) {
      _0x7da4b6 = require("path").dirname(_0x7da4b6) + "/";
    } else {
      _0x7da4b6 = __dirname + "/";
    }
    _0x564ab3 = function _0x30572f(_0x14f9bd, _0x5cf569) {
      if (!_0x228179) {
        _0x228179 = require("fs");
      }
      if (!_0x27c307) {
        _0x27c307 = require("path");
      }
      _0x14f9bd = _0x27c307.normalize(_0x14f9bd);
      return _0x228179.readFileSync(_0x14f9bd, _0x5cf569 ? null : "utf8");
    };
    _0xfb9875 = function _0x53ea18(_0x2b527e) {
      var _0x4a10f5 = _0x564ab3(_0x2b527e, true);
      if (!_0x4a10f5.buffer) {
        _0x4a10f5 = new Uint8Array(_0x4a10f5);
      }
      _0x4eb180(_0x4a10f5.buffer);
      return _0x4a10f5;
    };
    if (process.argv.length > 1) {
      _0x368e09 = process.argv[1].replace(/\\/g, "/");
    }
    _0x3ff23e = process.argv.slice(2);
    if (typeof module !== "undefined") {
      module.exports = _0x289557;
    }
    process.on("uncaughtException", function (_0x4e9bd6) {
      if (!(_0x4e9bd6 instanceof _0x3875ad)) {
        throw _0x4e9bd6;
      }
    });
    process.on("unhandledRejection", _0x48d521);
    _0x35b3f7 = function (_0x628957) {
      process.exit(_0x628957);
    };
    _0x289557.inspect = function () {
      return "[Emscripten Module object]";
    };
  } else if (_0x19af06) {
    if (typeof read != "undefined") {
      _0x564ab3 = function _0x5b8959(_0x1d61ad) {
        return read(_0x1d61ad);
      };
    }
    _0xfb9875 = function _0x1b98d5(_0x4b3053) {
      var _0x38c0f5;
      if (typeof readbuffer === "function") {
        return new Uint8Array(readbuffer(_0x4b3053));
      }
      _0x38c0f5 = read(_0x4b3053, "binary");
      _0x4eb180(typeof _0x38c0f5 === "object");
      return _0x38c0f5;
    };
    if (typeof scriptArgs != "undefined") {
      _0x3ff23e = scriptArgs;
    } else if (typeof arguments != "undefined") {
      _0x3ff23e = arguments;
    }
    if (typeof quit === "function") {
      _0x35b3f7 = function (_0x478e32) {
        quit(_0x478e32);
      };
    }
    if (typeof print !== "undefined") {
      if (typeof console === "undefined") {
        console = {};
      }
      console.log = print;
      console.warn = console.error = typeof printErr !== "undefined" ? printErr : print;
    }
  } else if (_0x5cb5b2 || _0x4d7134) {
    if (_0x4d7134) {
      _0x7da4b6 = "https://1games.io/game/golf-hit/?cdn=2";
    } else if (typeof document !== "undefined" && document.currentScript) {
      _0x7da4b6 = document.currentScript.src;
    }
    if (_0x7da4b6.indexOf("blob:") !== 0) {
      _0x7da4b6 = _0x7da4b6.substr(0, _0x7da4b6.lastIndexOf("/") + 1);
    } else {
      _0x7da4b6 = "";
    }
    {
      _0x564ab3 = function (_0x20443a) {
        var _0x22883d = new XMLHttpRequest();
        _0x22883d.open("GET", _0x20443a, false);
        _0x22883d.send(null);
        return _0x22883d.responseText;
      };
      if (_0x4d7134) {
        _0xfb9875 = function (_0x3a2412) {
          var _0x2ce7db = new XMLHttpRequest();
          _0x2ce7db.open("GET", _0x3a2412, false);
          _0x2ce7db.responseType = "arraybuffer";
          _0x2ce7db.send(null);
          return new Uint8Array(_0x2ce7db.response);
        };
      }
      _0x1540b2 = function (_0x50063b, _0x221084, _0x38d595) {
        var _0x21070a = new XMLHttpRequest();
        _0x21070a.open("GET", _0x50063b, true);
        _0x21070a.responseType = "arraybuffer";
        _0x21070a.onload = function () {
          if (_0x21070a.status == 200 || _0x21070a.status == 0 && _0x21070a.response) {
            _0x221084(_0x21070a.response);
            return;
          }
          _0x38d595();
        };
        _0x21070a.onerror = _0x38d595;
        _0x21070a.send(null);
      };
    }
    _0x34c518 = function (_0x37c222) {
      document.title = _0x37c222;
    };
  } else {}
  var _0x2ac208 = _0x289557.print || console.log.bind(console);
  var _0x1650b6 = _0x289557.printErr || console.warn.bind(console);
  for (_0x3beaf7 in _0x26e463) {
    if (_0x26e463.hasOwnProperty(_0x3beaf7)) {
      _0x289557[_0x3beaf7] = _0x26e463[_0x3beaf7];
    }
  }
  _0x26e463 = null;
  if (_0x289557.arguments) {
    _0x3ff23e = _0x289557.arguments;
  }
  if (_0x289557.thisProgram) {
    _0x368e09 = _0x289557.thisProgram;
  }
  if (_0x289557.quit) {
    _0x35b3f7 = _0x289557.quit;
  }
  var _0x56a3e9 = 16;
  function _0x3fdaea(_0x34f122, _0x10e13a) {
    if (!_0x10e13a) {
      _0x10e13a = _0x56a3e9;
    }
    return Math.ceil(_0x34f122 / _0x10e13a) * _0x10e13a;
  }
  function _0x22e41e(_0x4fe337) {
    if (!_0x22e41e.shown) {
      _0x22e41e.shown = {};
    }
    if (!_0x22e41e.shown[_0x4fe337]) {
      _0x22e41e.shown[_0x4fe337] = 1;
      _0x1650b6(_0x4fe337);
    }
  }
  var _0x21d0d5 = 0;
  function _0x437c38(_0x2ac807) {
    _0x21d0d5 = _0x2ac807;
  }
  function _0x3b29f2() {
    return _0x21d0d5;
  }
  var _0x451989;
  if (_0x289557.wasmBinary) {
    _0x451989 = _0x289557.wasmBinary;
  }
  var _0x318d34 = _0x289557.noExitRuntime || true;
  if (typeof WebAssembly !== "object") {
    _0x48d521("no native wasm support detected");
  }
  var _0x16cab9;
  var _0x16d0c6 = false;
  var _0x3717d8;
  function _0x4eb180(_0x13d2a6, _0x223b98) {
    if (!_0x13d2a6) {
      _0x48d521("Assertion failed: " + _0x223b98);
    }
  }
  function _0x9fba6a(_0x59b154) {
    var _0x48c6ad = _0x289557["_" + _0x59b154];
    _0x4eb180(_0x48c6ad, "Cannot call unknown function " + _0x59b154 + ", make sure it is exported");
    return _0x48c6ad;
  }
  function _0x4f6532(_0x35e1bf, _0x221d14, _0x134918, _0x6f6952, _0x4bf937) {
    var _0x25a385 = {
      string: function (_0x134863) {
        var _0x24d5fe = 0;
        if (_0x134863 !== null && _0x134863 !== undefined && _0x134863 !== 0) {
          var _0x12ae35 = (_0x134863.length << 2) + 1;
          _0x24d5fe = _0x3f9e14(_0x12ae35);
          _0x409466(_0x134863, _0x24d5fe, _0x12ae35);
        }
        return _0x24d5fe;
      },
      array: function (_0x57bc10) {
        var _0xbad8ce = _0x3f9e14(_0x57bc10.length);
        _0x3cfaee(_0x57bc10, _0xbad8ce);
        return _0xbad8ce;
      }
    };
    function _0x59bf50(_0x97ebbd) {
      if (_0x221d14 === "string") {
        return _0x5c2e85(_0x97ebbd);
      }
      if (_0x221d14 === "boolean") {
        return Boolean(_0x97ebbd);
      }
      return _0x97ebbd;
    }
    var _0x16219e = _0x9fba6a(_0x35e1bf);
    var _0x4aef21 = [];
    var _0x3a0012 = 0;
    if (_0x6f6952) {
      for (var _0xacc20e = 0; _0xacc20e < _0x6f6952.length; _0xacc20e++) {
        var _0x264616 = _0x25a385[_0x134918[_0xacc20e]];
        if (_0x264616) {
          if (_0x3a0012 === 0) {
            _0x3a0012 = _0x51cfa0();
          }
          _0x4aef21[_0xacc20e] = _0x264616(_0x6f6952[_0xacc20e]);
        } else {
          _0x4aef21[_0xacc20e] = _0x6f6952[_0xacc20e];
        }
      }
    }
    var _0x1f3f61 = _0x16219e.apply(null, _0x4aef21);
    _0x1f3f61 = _0x59bf50(_0x1f3f61);
    if (_0x3a0012 !== 0) {
      _0x15d00c(_0x3a0012);
    }
    return _0x1f3f61;
  }
  function _0xc041c(_0x2c72f5, _0x1c32f9, _0x4c713e, _0x2040de) {
    _0x4c713e = _0x4c713e || [];
    var _0xcd5bd4 = _0x4c713e.every(function (_0x10d927) {
      return _0x10d927 === "number";
    });
    var _0xf943c9 = _0x1c32f9 !== "string";
    if (_0xf943c9 && _0xcd5bd4 && !_0x2040de) {
      return _0x9fba6a(_0x2c72f5);
    }
    return function () {
      return _0x4f6532(_0x2c72f5, _0x1c32f9, _0x4c713e, arguments, _0x2040de);
    };
  }
  var _0x57f3ca = typeof TextDecoder !== "undefined" ? new TextDecoder("utf8") : undefined;
  function _0x3a7b27(_0x2ea69a, _0x42fb1f, _0x550d4c) {
    var _0x1f403b = _0x42fb1f + _0x550d4c;
    var _0x9c9727 = _0x42fb1f;
    while (_0x2ea69a[_0x9c9727] && !(_0x9c9727 >= _0x1f403b)) {
      ++_0x9c9727;
    }
    if (_0x9c9727 - _0x42fb1f > 16 && _0x2ea69a.subarray && _0x57f3ca) {
      return _0x57f3ca.decode(_0x2ea69a.subarray(_0x42fb1f, _0x9c9727));
    } else {
      var _0x379e3d = "";
      while (_0x42fb1f < _0x9c9727) {
        var _0x17e11c = _0x2ea69a[_0x42fb1f++];
        if (!(_0x17e11c & 128)) {
          _0x379e3d += String.fromCharCode(_0x17e11c);
          continue;
        }
        var _0x5ad889 = _0x2ea69a[_0x42fb1f++] & 63;
        if ((_0x17e11c & 224) == 192) {
          _0x379e3d += String.fromCharCode((_0x17e11c & 31) << 6 | _0x5ad889);
          continue;
        }
        var _0x56850f = _0x2ea69a[_0x42fb1f++] & 63;
        if ((_0x17e11c & 240) == 224) {
          _0x17e11c = (_0x17e11c & 15) << 12 | _0x5ad889 << 6 | _0x56850f;
        } else {
          _0x17e11c = (_0x17e11c & 7) << 18 | _0x5ad889 << 12 | _0x56850f << 6 | _0x2ea69a[_0x42fb1f++] & 63;
        }
        if (_0x17e11c < 65536) {
          _0x379e3d += String.fromCharCode(_0x17e11c);
        } else {
          var _0x4a5978 = _0x17e11c - 65536;
          _0x379e3d += String.fromCharCode(_0x4a5978 >> 10 | 55296, _0x4a5978 & 1023 | 56320);
        }
      }
    }
    return _0x379e3d;
  }
  function _0x5c2e85(_0x25b1fb, _0x507261) {
    if (_0x25b1fb) {
      return _0x3a7b27(_0x950143, _0x25b1fb, _0x507261);
    } else {
      return "";
    }
  }
  function _0x1d0a09(_0xbe04ef, _0x251f1c, _0x2fad1e, _0xa845d1) {
    if (!(_0xa845d1 > 0)) {
      return 0;
    }
    var _0x1073eb = _0x2fad1e;
    var _0x1133fc = _0x2fad1e + _0xa845d1 - 1;
    for (var _0x4b5bf9 = 0; _0x4b5bf9 < _0xbe04ef.length; ++_0x4b5bf9) {
      var _0x15c123 = _0xbe04ef.charCodeAt(_0x4b5bf9);
      if (_0x15c123 >= 55296 && _0x15c123 <= 57343) {
        var _0x19f24f = _0xbe04ef.charCodeAt(++_0x4b5bf9);
        _0x15c123 = 65536 + ((_0x15c123 & 1023) << 10) | _0x19f24f & 1023;
      }
      if (_0x15c123 <= 127) {
        if (_0x2fad1e >= _0x1133fc) {
          break;
        }
        _0x251f1c[_0x2fad1e++] = _0x15c123;
      } else if (_0x15c123 <= 2047) {
        if (_0x2fad1e + 1 >= _0x1133fc) {
          break;
        }
        _0x251f1c[_0x2fad1e++] = _0x15c123 >> 6 | 192;
        _0x251f1c[_0x2fad1e++] = _0x15c123 & 63 | 128;
      } else if (_0x15c123 <= 65535) {
        if (_0x2fad1e + 2 >= _0x1133fc) {
          break;
        }
        _0x251f1c[_0x2fad1e++] = _0x15c123 >> 12 | 224;
        _0x251f1c[_0x2fad1e++] = _0x15c123 >> 6 & 63 | 128;
        _0x251f1c[_0x2fad1e++] = _0x15c123 & 63 | 128;
      } else {
        if (_0x2fad1e + 3 >= _0x1133fc) {
          break;
        }
        _0x251f1c[_0x2fad1e++] = _0x15c123 >> 18 | 240;
        _0x251f1c[_0x2fad1e++] = _0x15c123 >> 12 & 63 | 128;
        _0x251f1c[_0x2fad1e++] = _0x15c123 >> 6 & 63 | 128;
        _0x251f1c[_0x2fad1e++] = _0x15c123 & 63 | 128;
      }
    }
    _0x251f1c[_0x2fad1e] = 0;
    return _0x2fad1e - _0x1073eb;
  }
  function _0x409466(_0x2cd524, _0x42ec20, _0x453d45) {
    return _0x1d0a09(_0x2cd524, _0x950143, _0x42ec20, _0x453d45);
  }
  function _0x247116(_0x5cc011) {
    var _0x3f81d9 = 0;
    for (var _0x2f7139 = 0; _0x2f7139 < _0x5cc011.length; ++_0x2f7139) {
      var _0x4f38ae = _0x5cc011.charCodeAt(_0x2f7139);
      if (_0x4f38ae >= 55296 && _0x4f38ae <= 57343) {
        _0x4f38ae = 65536 + ((_0x4f38ae & 1023) << 10) | _0x5cc011.charCodeAt(++_0x2f7139) & 1023;
      }
      if (_0x4f38ae <= 127) {
        ++_0x3f81d9;
      } else if (_0x4f38ae <= 2047) {
        _0x3f81d9 += 2;
      } else if (_0x4f38ae <= 65535) {
        _0x3f81d9 += 3;
      } else {
        _0x3f81d9 += 4;
      }
    }
    return _0x3f81d9;
  }
  function _0x26469a(_0x59154d) {
    var _0x42bb59 = _0x247116(_0x59154d) + 1;
    var _0x547604 = _0x2a1ebe(_0x42bb59);
    if (_0x547604) {
      _0x1d0a09(_0x59154d, _0x9c4a59, _0x547604, _0x42bb59);
    }
    return _0x547604;
  }
  function _0x53e3e4(_0x470030) {
    var _0x3cfbe8 = _0x247116(_0x470030) + 1;
    var _0x1c87dc = _0x3f9e14(_0x3cfbe8);
    _0x1d0a09(_0x470030, _0x9c4a59, _0x1c87dc, _0x3cfbe8);
    return _0x1c87dc;
  }
  function _0x3cfaee(_0x180432, _0x2e6efa) {
    _0x9c4a59.set(_0x180432, _0x2e6efa);
  }
  function _0x312aa6(_0x175d4a, _0x52656c, _0x69755d) {
    for (var _0x224b50 = 0; _0x224b50 < _0x175d4a.length; ++_0x224b50) {
      _0x9c4a59[_0x52656c++ >> 0] = _0x175d4a.charCodeAt(_0x224b50);
    }
    if (!_0x69755d) {
      _0x9c4a59[_0x52656c >> 0] = 0;
    }
  }
  function _0x3a4dfa(_0xdde2b1, _0x210776) {
    if (_0xdde2b1 % _0x210776 > 0) {
      _0xdde2b1 += _0x210776 - _0xdde2b1 % _0x210776;
    }
    return _0xdde2b1;
  }
  var _0x4bf5a6;
  var _0x9c4a59;
  var _0x950143;
  var _0x2b051e;
  var _0x3201fa;
  var _0x4e86a5;
  var _0x4cad96;
  var _0x5e6300;
  var _0x492f87;
  function _0x34cd40(_0x2f61c2) {
    _0x4bf5a6 = _0x2f61c2;
    _0x289557.HEAP8 = _0x9c4a59 = new Int8Array(_0x2f61c2);
    _0x289557.HEAP16 = _0x2b051e = new Int16Array(_0x2f61c2);
    _0x289557.HEAP32 = _0x4e86a5 = new Int32Array(_0x2f61c2);
    _0x289557.HEAPU8 = _0x950143 = new Uint8Array(_0x2f61c2);
    _0x289557.HEAPU16 = _0x3201fa = new Uint16Array(_0x2f61c2);
    _0x289557.HEAPU32 = _0x4cad96 = new Uint32Array(_0x2f61c2);
    _0x289557.HEAPF32 = _0x5e6300 = new Float32Array(_0x2f61c2);
    _0x289557.HEAPF64 = _0x492f87 = new Float64Array(_0x2f61c2);
  }
  var _0x126bda = _0x289557.INITIAL_MEMORY || 33554432;
  var _0x14bfdc;
  var _0x167e85 = [];
  var _0x348e71 = [];
  var _0x4d0b5c = [];
  var _0x14c850 = [];
  var _0xc11a0b = [];
  var _0x19a40a = false;
  var _0x148235 = false;
  function _0x3489d1() {
    if (_0x289557.preRun) {
      if (typeof _0x289557.preRun == "function") {
        _0x289557.preRun = [_0x289557.preRun];
      }
      while (_0x289557.preRun.length) {
        _0x46b146(_0x289557.preRun.shift());
      }
    }
    _0x415c85(_0x167e85);
  }
  function _0x7a80eb() {
    _0x19a40a = true;
    if (!_0x289557.noFSInit && !_0x2840b9.init.initialized) {
      _0x2840b9.init();
    }
    _0x5e802c.init();
    _0x568dd0.root = _0x2840b9.mount(_0x568dd0, {}, null);
    _0x44836e.root = _0x2840b9.mount(_0x44836e, {}, null);
    _0x415c85(_0x348e71);
  }
  function _0x1a2829() {
    _0x2840b9.ignorePermissions = false;
    _0x415c85(_0x4d0b5c);
  }
  function _0x45a59f() {
    _0x148235 = true;
  }
  function _0x1c244d() {
    if (_0x289557.postRun) {
      if (typeof _0x289557.postRun == "function") {
        _0x289557.postRun = [_0x289557.postRun];
      }
      while (_0x289557.postRun.length) {
        _0x1bb75b(_0x289557.postRun.shift());
      }
    }
    _0x415c85(_0xc11a0b);
  }
  function _0x46b146(_0x8c1023) {
    _0x167e85.unshift(_0x8c1023);
  }
  function _0x1247c9(_0x1f8c15) {
    _0x348e71.unshift(_0x1f8c15);
  }
  function _0x1bb75b(_0x2dae33) {
    _0xc11a0b.unshift(_0x2dae33);
  }
  var _0x1fc9ac = 0;
  var _0x384906 = null;
  var _0x519c4c = null;
  function _0x2c484c(_0x53246c) {
    return _0x53246c;
  }
  function _0x349a66(_0x2d4d15) {
    _0x1fc9ac++;
    if (_0x289557.monitorRunDependencies) {
      _0x289557.monitorRunDependencies(_0x1fc9ac);
    }
  }
  function _0x50369d(_0x10c7ad) {
    _0x1fc9ac--;
    if (_0x289557.monitorRunDependencies) {
      _0x289557.monitorRunDependencies(_0x1fc9ac);
    }
    if (_0x1fc9ac == 0) {
      if (_0x384906 !== null) {
        clearInterval(_0x384906);
        _0x384906 = null;
      }
      if (_0x519c4c) {
        var _0x4559ca = _0x519c4c;
        _0x519c4c = null;
        _0x4559ca();
      }
    }
  }
  _0x289557.preloadedImages = {};
  _0x289557.preloadedAudios = {};
  function _0x48d521(_0x2ec1a8) {
    if (_0x289557.onAbort) {
      _0x289557.onAbort(_0x2ec1a8);
    }
    _0x2ec1a8 += "";
    _0x1650b6(_0x2ec1a8);
    _0x16d0c6 = true;
    _0x3717d8 = 1;
    _0x2ec1a8 = "abort(" + _0x2ec1a8 + "). Build with -s ASSERTIONS=1 for more info.";
    var _0x1d13c0 = new WebAssembly.RuntimeError(_0x2ec1a8);
    throw _0x1d13c0;
  }
  var _0x133947 = "data:application/octet-stream;base64,";
  function _0x3d8eaa(_0x487bf5) {
    return _0x487bf5.startsWith(_0x133947);
  }
  function _0x55c3c0(_0x2251d4) {
    return _0x2251d4.startsWith("file://");
  }
  var _0x6e7dde = "build.wasm";
  if (!_0x3d8eaa(_0x6e7dde)) {
    _0x6e7dde = _0x3541ef(_0x6e7dde);
  }
  function _0x211595(_0x212f8e) {
    try {
      if (_0x212f8e == _0x6e7dde && _0x451989) {
        return new Uint8Array(_0x451989);
      }
      if (_0xfb9875) {
        return _0xfb9875(_0x212f8e);
      } else {
        throw "both async and sync fetching of the wasm failed";
      }
    } catch (_0x359bfd) {
      _0x48d521(_0x359bfd);
    }
  }
  function _0x37ee83() {
    if (!_0x451989 && (_0x5cb5b2 || _0x4d7134)) {
      if (typeof fetch === "function" && !_0x55c3c0(_0x6e7dde)) {
        return fetch(_0x6e7dde, {
          credentials: "same-origin"
        }).then(function (_0x492478) {
          if (!_0x492478.ok) {
            throw "failed to load wasm binary file at '" + _0x6e7dde + "'";
          }
          return _0x492478.arrayBuffer();
        }).catch(function () {
          return _0x211595(_0x6e7dde);
        });
      } else if (_0x1540b2) {
        return new Promise(function (_0x152eb0, _0x43ad9a) {
          _0x1540b2(_0x6e7dde, function (_0x23371c) {
            _0x152eb0(new Uint8Array(_0x23371c));
          }, _0x43ad9a);
        });
      }
    }
    return Promise.resolve().then(function () {
      return _0x211595(_0x6e7dde);
    });
  }
  function _0xbd1f77() {
    var _0x398cee = {
      a: _0x3f66ea
    };
    function _0x4c0b0f(_0x4e4d75, _0x4e9a78) {
      var _0x19d240 = _0x4e4d75.exports;
      _0x289557.asm = _0x19d240;
      _0x16cab9 = _0x289557.asm.Dk;
      _0x34cd40(_0x16cab9.buffer);
      _0x14bfdc = _0x289557.asm.bl;
      _0x1247c9(_0x289557.asm.Ek);
      _0x50369d("wasm-instantiate");
    }
    _0x349a66("wasm-instantiate");
    function _0x5f2936(_0x3bf2c1) {
      _0x4c0b0f(_0x3bf2c1.instance);
    }
    function _0x53373a(_0x22dd21) {
      return _0x37ee83().then(function (_0x224f90) {
        var _0x18aca6 = WebAssembly.instantiate(_0x224f90, _0x398cee);
        return _0x18aca6;
      }).then(_0x22dd21, function (_0x20d6c0) {
        _0x1650b6("failed to asynchronously prepare wasm: " + _0x20d6c0);
        _0x48d521(_0x20d6c0);
      });
    }
    function _0x5911e3() {
      if (!_0x451989 && typeof WebAssembly.instantiateStreaming === "function" && !_0x3d8eaa(_0x6e7dde) && !_0x55c3c0(_0x6e7dde) && typeof fetch === "function") {
        return fetch(_0x6e7dde, {
          credentials: "same-origin"
        }).then(function (_0x88760) {
          var _0x8531b1 = WebAssembly.instantiateStreaming(_0x88760, _0x398cee);
          return _0x8531b1.then(_0x5f2936, function (_0x2cf70d) {
            _0x1650b6("wasm streaming compile failed: " + _0x2cf70d);
            _0x1650b6("falling back to ArrayBuffer instantiation");
            return _0x53373a(_0x5f2936);
          });
        });
      } else {
        return _0x53373a(_0x5f2936);
      }
    }
    if (_0x289557.instantiateWasm) {
      try {
        var _0x109819 = _0x289557.instantiateWasm(_0x398cee, _0x4c0b0f);
        return _0x109819;
      } catch (_0x5d090e) {
        _0x1650b6("Module.instantiateWasm callback failed with error: " + _0x5d090e);
        return false;
      }
    }
    _0x5911e3();
    return {};
  }
  var _0x3a5e98;
  var _0x4e1161;
  var _0x59f8c2 = {
    4887544: function () {
      return _0x289557.webglContextAttributes.premultipliedAlpha;
    },
    4887605: function () {
      return _0x289557.webglContextAttributes.preserveDrawingBuffer;
    },
    4887669: function () {
      return _0x289557.webglContextAttributes.powerPreference;
    }
  };
  function _0x415c85(_0x5ddef2) {
    while (_0x5ddef2.length > 0) {
      var _0xbc68a8 = _0x5ddef2.shift();
      if (typeof _0xbc68a8 == "function") {
        _0xbc68a8(_0x289557);
        continue;
      }
      var _0xcb66eb = _0xbc68a8.func;
      if (typeof _0xcb66eb === "number") {
        if (_0xbc68a8.arg === undefined) {
          (function () {
            _0x41b439.call(null, _0xcb66eb);
          })();
        } else {
          (function (_0x2d3de4) {
            _0x25d2da.apply(null, [_0xcb66eb, _0x2d3de4]);
          })(_0xbc68a8.arg);
        }
      } else {
        _0xcb66eb(_0xbc68a8.arg === undefined ? null : _0xbc68a8.arg);
      }
    }
  }
  function _0x287683(_0x2ec433) {
    return _0x2ec433;
  }
  function _0x5c690e(_0x34d098) {
    var _0x37bd4f = /\b_Z[\w\d_]+/g;
    return _0x34d098.replace(_0x37bd4f, function (_0x45a754) {
      var _0x3dbae3 = _0x287683(_0x45a754);
      if (_0x45a754 === _0x3dbae3) {
        return _0x45a754;
      } else {
        return _0x3dbae3 + " [" + _0x45a754 + "]";
      }
    });
  }
  function _0x2fa654(_0x189310, _0x51c3d4, _0x48103a) {
    var _0x31870f = _0x289557["dynCall_" + _0x189310];
    if (_0x48103a && _0x48103a.length) {
      return _0x31870f.apply(null, [_0x51c3d4].concat(_0x48103a));
    } else {
      return _0x31870f.call(null, _0x51c3d4);
    }
  }
  function _0x2748a0(_0x271f24, _0x106543, _0x2cd9a9) {
    return _0x2fa654(_0x271f24, _0x106543, _0x2cd9a9);
  }
  function _0x5b220f() {
    var _0x3c2aa3 = new Error();
    if (!_0x3c2aa3.stack) {
      try {
        throw new Error();
      } catch (_0x524dba) {
        _0x3c2aa3 = _0x524dba;
      }
      if (!_0x3c2aa3.stack) {
        return "(no stack trace available)";
      }
    }
    return _0x3c2aa3.stack.toString();
  }
  var _0x5bca4e = 0;
  function _0x3cfbe7() {
    return _0x318d34 || _0x5bca4e > 0;
  }
  function _0xacba48() {
    var _0x55b360 = _0x5b220f();
    if (_0x289557.extraStackTrace) {
      _0x55b360 += "\n" + _0x289557.extraStackTrace();
    }
    return _0x5c690e(_0x55b360);
  }
  function _0x11ebb1(_0x48f3a1, _0x5c0bf1, _0x1c3bdf, _0x59866a, _0x18cef3) {
    var _0x4e7775 = _0x5c2e85(_0x48f3a1);
    var _0x2389c8 = _0x5c2e85(_0x5c0bf1);
    var _0x2275b0 = _0x5c2e85(_0x1c3bdf);
    var _0x46b0be = _0x5c2e85(_0x59866a);
    var _0x5be2fe = _0x5c2e85(_0x18cef3);
    try {
      firebase.firestore().collection(_0x4e7775).add(JSON.parse(_0x2389c8)).then(function (_0x96b02d) {
        window.unityInstance.SendMessage(_0x2275b0, _0x46b0be, "Success: document added in collection " + _0x4e7775);
      }).catch(function (_0x38616c) {
        window.unityInstance.SendMessage(_0x2275b0, _0x5be2fe, JSON.stringify(_0x38616c, Object.getOwnPropertyNames(_0x38616c)));
      });
    } catch (_0x1a10d7) {
      window.unityInstance.SendMessage(_0x2275b0, _0x5be2fe, JSON.stringify(_0x1a10d7, Object.getOwnPropertyNames(_0x1a10d7)));
    }
  }
  function _0x3ae770(_0x44fa05, _0x5193d2, _0x290a5a, _0x4fe85c, _0x2a8f40, _0x2b5635, _0x1e744d) {
    var _0x44d371 = _0x5c2e85(_0x44fa05);
    var _0x4bf079 = _0x5c2e85(_0x5193d2);
    var _0x1870c1 = _0x5c2e85(_0x290a5a);
    var _0x4c79e7 = _0x5c2e85(_0x4fe85c);
    var _0xc98b4d = _0x5c2e85(_0x2a8f40);
    var _0x5278f5 = _0x5c2e85(_0x2b5635);
    var _0x1cd5aa = _0x5c2e85(_0x1e744d);
    try {
      var _0x4fe85c = {};
      _0x4fe85c[_0x1870c1] = firebase.firestore.FieldValue.arrayUnion(JSON.parse(_0x4c79e7));
      firebase.firestore().collection(_0x44d371).doc(_0x4bf079).update(_0x4fe85c).then(function () {
        window.unityInstance.SendMessage(_0xc98b4d, _0x5278f5, "Success: element " + _0x4c79e7 + " was added in " + _0x1870c1);
      }).catch(function (_0x2660d) {
        window.unityInstance.SendMessage(_0xc98b4d, _0x1cd5aa, JSON.stringify(_0x2660d, Object.getOwnPropertyNames(_0x2660d)));
      });
    } catch (_0x3c3b22) {
      window.unityInstance.SendMessage(_0xc98b4d, _0x1cd5aa, JSON.stringify(_0x3c3b22, Object.getOwnPropertyNames(_0x3c3b22)));
    }
  }
  function _0x417b7a(_0x8087ba) {
    try {
      window.CrazyGames.SDK.user.addScore(_0x8087ba);
    } catch (_0x3168ea) {
      window.UnitySDK.logError("Error while calling addScore:", _0x3168ea);
    }
  }
  function _0x134a5c(_0x5ee7e2, _0x51b1ae) {
    try {
      window.CrazyGames.SDK.analytics.trackOrder(window.unityStringify(_0x5ee7e2), JSON.parse(window.unityStringify(_0x51b1ae)));
    } catch (_0x154bea) {
      window.UnitySDK.logError("Error while calling trackOrder:", _0x154bea);
    }
  }
  function _0x32f561(_0xa25bf7) {
    const _0x53f3fa = document.createElement("textarea");
    _0x53f3fa.value = window.unityStringify(_0xa25bf7);
    document.body.appendChild(_0x53f3fa);
    _0x53f3fa.select();
    _0x53f3fa.setSelectionRange(0, 99999);
    document.execCommand("copy");
    document.body.removeChild(_0x53f3fa);
  }
  function _0x305958(_0x47da89, _0x24cc74, _0x5b5f5c, _0x1f9ca2, _0x24a965) {
    var _0x395e44 = _0x5c2e85(_0x47da89);
    var _0x268578 = _0x5c2e85(_0x24cc74);
    var _0xc26db8 = _0x5c2e85(_0x5b5f5c);
    var _0x4e5bbf = _0x5c2e85(_0x1f9ca2);
    var _0x33e5d3 = _0x5c2e85(_0x24a965);
    try {
      firebase.auth().createUserWithEmailAndPassword(_0x395e44, _0x268578).then(function (_0x1ea12e) {
        window.unityInstance.SendMessage(_0xc26db8, _0x4e5bbf, "Success: signed up for " + _0x395e44);
      }).catch(function (_0x6869e2) {
        window.unityInstance.SendMessage(_0xc26db8, _0x33e5d3, JSON.stringify(_0x6869e2, Object.getOwnPropertyNames(_0x6869e2)));
      });
    } catch (_0x33afb5) {
      window.unityInstance.SendMessage(_0xc26db8, _0x33e5d3, JSON.stringify(_0x33afb5, Object.getOwnPropertyNames(_0x33afb5)));
    }
  }
  function _0x54ed01() {
    try {
      window.CrazyGames.SDK.data.clear();
    } catch (_0x4a8481) {
      window.UnitySDK.logError("Error while calling clear:", _0x4a8481);
    }
  }
  function _0x468c25(_0xc40ad5) {
    var _0x382114 = null;
    try {
      _0x382114 = window.CrazyGames.SDK.data.getItem(window.unityStringify(_0xc40ad5));
    } catch (_0x5e0ce9) {
      window.UnitySDK.logError("Error while calling getItem:", _0x5e0ce9);
    }
    var _0x21ba65 = _0x247116(_0x382114 + "") + 1;
    var _0x13e8bc = _0x2a1ebe(_0x21ba65);
    _0x409466(_0x382114, _0x13e8bc, _0x21ba65);
    return _0x13e8bc;
  }
  function _0x1be13f(_0x2a4474) {
    var _0x68168 = null;
    try {
      _0x68168 = window.CrazyGames.SDK.data.getItem(window.unityStringify(_0x2a4474));
    } catch (_0x11498e) {
      window.UnitySDK.logError("Error while calling getItem:", _0x11498e);
    }
    return _0x68168 !== null;
  }
  function _0x19f693(_0x3c5821) {
    try {
      window.CrazyGames.SDK.data.removeItem(window.unityStringify(_0x3c5821));
    } catch (_0x174fec) {
      window.UnitySDK.logError("Error while calling removeItem:", _0x174fec);
    }
  }
  function _0x503b49(_0x2781e3, _0x3d0bdb) {
    try {
      window.CrazyGames.SDK.data.setItem(window.unityStringify(_0x2781e3), window.unityStringify(_0x3d0bdb));
    } catch (_0x5dc24f) {
      window.UnitySDK.logError("Error while calling setItem:", _0x5dc24f);
    }
  }
  function _0x164344(_0xf4356, _0x2f1ade, _0x446ee2, _0x2ed071, _0x180b6b) {
    var _0x3f156b = _0x5c2e85(_0xf4356);
    var _0x29e72a = _0x5c2e85(_0x2f1ade);
    var _0x542204 = _0x5c2e85(_0x446ee2);
    var _0x293689 = _0x5c2e85(_0x2ed071);
    var _0x3f28ff = _0x5c2e85(_0x180b6b);
    try {
      firebase.firestore().collection(_0x3f156b).doc(_0x29e72a).delete().then(function () {
        window.unityInstance.SendMessage(_0x542204, _0x293689, "Success: document " + _0x29e72a + " was deleted");
      }).catch(function (_0x1dfce0) {
        window.unityInstance.SendMessage(_0x542204, _0x3f28ff, JSON.stringify(_0x1dfce0, Object.getOwnPropertyNames(_0x1dfce0)));
      });
    } catch (_0x301d3d) {
      window.unityInstance.SendMessage(_0x542204, _0x3f28ff, JSON.stringify(_0x301d3d, Object.getOwnPropertyNames(_0x301d3d)));
    }
  }
  function _0x4c3856(_0x4212c6, _0x56a137, _0x4e13ff, _0x35953d, _0x21615d, _0xde858d) {
    var _0x10081c = _0x5c2e85(_0x4212c6);
    var _0x1088ca = _0x5c2e85(_0x56a137);
    var _0x266e8c = _0x5c2e85(_0x4e13ff);
    var _0x51b0b0 = _0x5c2e85(_0x35953d);
    var _0x338bff = _0x5c2e85(_0x21615d);
    var _0xce7214 = _0x5c2e85(_0xde858d);
    try {
      var _0x47ab77 = {};
      _0x47ab77[_0x266e8c] = firebase.firestore.FieldValue.delete();
      firebase.firestore().collection(_0x10081c).doc(_0x1088ca).update(_0x47ab77).then(function () {
        window.unityInstance.SendMessage(_0x51b0b0, _0x338bff, "Success: field " + _0x266e8c + " was deleted");
      }).catch(function (_0x5045a8) {
        window.unityInstance.SendMessage(_0x51b0b0, _0xce7214, JSON.stringify(_0x5045a8, Object.getOwnPropertyNames(_0x5045a8)));
      });
    } catch (_0x4c8b6b) {
      window.unityInstance.SendMessage(_0x51b0b0, _0xce7214, JSON.stringify(_0x4c8b6b, Object.getOwnPropertyNames(_0x4c8b6b)));
    }
  }
  function _0x433916(_0x27df60, _0x5b2d38, _0x4ffb6c, _0x58a893) {
    var _0x1d944b = _0x5c2e85(_0x27df60);
    var _0x25f91f = _0x5c2e85(_0x5b2d38);
    var _0x25e125 = _0x5c2e85(_0x4ffb6c);
    var _0xbf7141 = _0x5c2e85(_0x58a893);
    try {
      firebase.database().ref(_0x1d944b).remove().then(function (_0x451ef8) {
        window.unityInstance.SendMessage(_0x25f91f, _0x25e125, "Success: " + _0x1d944b + " was deleted");
      });
    } catch (_0x15d161) {
      window.unityInstance.SendMessage(_0x25f91f, _0xbf7141, JSON.stringify(_0x15d161, Object.getOwnPropertyNames(_0x15d161)));
    }
  }
  function _0x52af3d(_0x5f5947, _0x54f80a, _0x1a13d3, _0x20ba49) {
    var _0x8f572f = _0x5c2e85(_0x5f5947);
    var _0x1ea0e3 = _0x5c2e85(_0x54f80a);
    var _0x3a33bd = _0x5c2e85(_0x1a13d3);
    var _0x1b9a72 = _0x5c2e85(_0x20ba49);
    try {
      firebase.storage().ref(_0x8f572f).getDownloadURL().then(function (_0xa25b4a) {
        var _0x2c3463 = new XMLHttpRequest();
        _0x2c3463.responseType = "arraybuffer";
        _0x2c3463.onload = function (_0x423905) {
          var _0x2245b3 = _0x2c3463.response;
          window.unityInstance.SendMessage(_0x1ea0e3, _0x3a33bd, _0x8bac1(_0x2245b3));
        };
        _0x2c3463.open("GET", _0xa25b4a);
        _0x2c3463.send();
      }).catch(function (_0x5bafff) {
        window.unityInstance.SendMessage(_0x1ea0e3, _0x1b9a72, JSON.stringify(_0x5bafff, Object.getOwnPropertyNames(_0x5bafff)));
      });
    } catch (_0x9fb9a) {
      window.unityInstance.SendMessage(_0x1ea0e3, _0x1b9a72, JSON.stringify(_0x9fb9a, Object.getOwnPropertyNames(_0x9fb9a)));
    }
    function _0x8bac1(_0x30f643) {
      var _0x24c4a6 = "";
      var _0x5c8903 = new Uint8Array(_0x30f643);
      var _0x15fce6 = _0x5c8903.byteLength;
      for (var _0x142f11 = 0; _0x142f11 < _0x15fce6; _0x142f11++) {
        _0x24c4a6 += String.fromCharCode(_0x5c8903[_0x142f11]);
      }
      return window.btoa(_0x24c4a6);
    }
  }
  function _0x2f6cb1() {
    try {
      window[preroll.config.loaderObjectName].log("WGSDK: Getting WeeGoo InGame Ad");
      window[preroll.config.loaderObjectName].refetchAd();
    } catch (_0x27e171) {
      console.log("No WeeGooAFG implementation found!");
    }
  }
  function _0x1ef88a(_0x57edd2) {
    var _0x1ebd18 = {
      adStarted: function () {
        _0x187a5c("GMSDKAdvertisement", "JSLibCallback_AdStarted");
      },
      adFinished: function () {
        _0x187a5c("GMSDKAdvertisement", "JSLibCallback_AdFinished");
      },
      adError: function (_0x4b2402) {
        _0x187a5c("GMSDKAdvertisement", "JSLibCallback_AdError", JSON.stringify(_0x4b2402));
      }
    };
    var _0x167d86 = window.GMSOFT_GMADS_INFO.reward;
    var _0x40e1c2 = _0x167d86[Math.floor(Math.random() * _0x167d86.length)];
    try {
      var _0x25a213 = document.createElement("div");
      _0x25a213.id = "gm-ad-overlay";
      _0x25a213.style.cssText = "\n          position: fixed;\n          top: 0;\n          left: 0;\n          width: 100%;\n          height: 100%;\n          background: rgba(0, 0, 0, 0.9);\n          z-index: 9999;\n          display: flex;\n          justify-content: center;\n          align-items: center;\n          flex-direction: column;\n        ";
      var _0x15aa54 = document.createElement("div");
      _0x15aa54.style.cssText = "\n          position: relative;\n          max-width: 90%;\n          max-height: 80%;\n          background: #000;\n          border-radius: 8px;\n          overflow: hidden;\n        ";
      var _0x5255d7 = document.createElement("video");
      _0x5255d7.src = _0x40e1c2.image;
      _0x5255d7.style.cssText = "\n          width: 100%;\n          height: 100%;\n          display: block;\n        ";
      _0x5255d7.autoplay = true;
      _0x5255d7.muted = true;
      _0x5255d7.preload = "auto";
      var _0x3f969d = document.createElement("button");
      _0x3f969d.innerHTML = "Skip (5)";
      _0x3f969d.disabled = true;
      _0x3f969d.style.cssText = "\n          position: absolute;\n          top: 10px;\n          right: 10px;\n          background: rgba(0, 0, 0, 0.8);\n          color: white;\n          border: 1px solid #666;\n          border-radius: 6px;\n          padding: 10px 16px;\n          cursor: pointer;\n          font-size: 16px;\n          font-weight: bold;\n          z-index: 10001;\n          box-shadow: 0 2px 8px rgba(0,0,0,0.3);\n        ";
      _0x3f969d.disabled = true;
      _0x3f969d.style.opacity = "0.5";
      var _0x5cf119 = document.createElement("div");
      _0x5cf119.style.cssText = "\n          position: absolute;\n          bottom: 0;\n          left: 0;\n          width: 100%;\n          height: 6px;\n          background: rgba(255, 255, 255, 0.3);\n          z-index: 10001;\n        ";
      var _0x108e26 = document.createElement("div");
      _0x108e26.style.cssText = "\n          height: 100%;\n          width: 0%;\n          background: linear-gradient(90deg, #ff6b6b, #4ecdc4);\n          transition: width 0.1s ease;\n        ";
      var _0x3ea78d = 5;
      var _0x26bc7c = setInterval(function () {
        _0x3ea78d--;
        if (_0x3ea78d > 0) {
          _0x3f969d.innerHTML = "Skip (" + _0x3ea78d + ")";
        } else {
          _0x3f969d.innerHTML = "Skip";
          _0x3f969d.disabled = false;
          _0x3f969d.style.opacity = "1";
          _0x3f969d.style.cursor = "pointer";
          clearInterval(_0x26bc7c);
        }
      }, 1000);
      function _0x1cdadc() {
        if (_0x25a213 && _0x25a213.parentNode) {
          _0x25a213.parentNode.removeChild(_0x25a213);
        }
        clearInterval(_0x26bc7c);
        _0x1ebd18.adFinished();
      }
      function _0x4289a1() {
        window.open(_0x40e1c2.url, "_blank");
      }
      function _0x46859c() {
        if (_0x5255d7.duration && _0x5255d7.currentTime) {
          var _0x3786db = _0x5255d7.currentTime / _0x5255d7.duration * 100;
          _0x108e26.style.width = _0x3786db + "%";
        }
      }
      _0x5255d7.addEventListener("loadstart", function () {
        _0x1ebd18.adStarted();
      });
      _0x5255d7.addEventListener("timeupdate", function () {
        _0x46859c();
      });
      _0x5255d7.addEventListener("ended", function () {
        _0x1cdadc();
      });
      _0x5255d7.addEventListener("error", function (_0x2a80f2) {
        var _0x44891e = {
          message: "Video load error",
          code: _0x2a80f2.target.error ? _0x2a80f2.target.error.code : "unknown"
        };
        _0x1ebd18.adError(_0x44891e);
        _0x1cdadc();
      });
      _0x5255d7.addEventListener("click", function () {
        _0x4289a1();
      });
      _0x3f969d.addEventListener("click", function () {
        if (!_0x3f969d.disabled) {
          _0x1cdadc();
        }
      });
      _0x5255d7.addEventListener("contextmenu", function (_0x2dee7e) {
        _0x2dee7e.preventDefault();
      });
      _0x5cf119.appendChild(_0x108e26);
      _0x15aa54.appendChild(_0x5255d7);
      _0x15aa54.appendChild(_0x3f969d);
      _0x15aa54.appendChild(_0x5cf119);
      _0x25a213.appendChild(_0x15aa54);
      document.body.appendChild(_0x25a213);
      _0x5255d7.play().catch(function (_0x4c82e8) {
        console.error("Video play error:", _0x4c82e8);
        _0x1ebd18.adError({
          message: "Cannot play video",
          details: _0x4c82e8.message
        });
        _0x1cdadc();
      });
    } catch (_0x26e42c) {
      console.error("Ad overlay creation error:", _0x26e42c);
      _0x1ebd18.adError({
        message: "Failed to create ad overlay",
        details: _0x26e42c.message
      });
    }
  }
  function _0x6182ee(_0x2fdfd0, _0x2e7bf1) {
    gmEvent(_0x5c2e85(_0x2fdfd0), _0x5c2e85(_0x2e7bf1));
  }
  function _0x1fc790() {
    const _0xcc5305 = "gmsdksigndomain";
    try {
      if (localStorage.hasOwnProperty(_0xcc5305)) {
        let _0x344223 = localStorage.getItem(_0xcc5305);
        if (_0x344223 && _0x344223.length > 10) {
          window.GMSOFT_SIGNED = _0x344223;
          console.log("Local storage GM_SDK_GetVeryfiedSignature: ", window.GMSOFT_SIGNED);
          _0x187a5c("GmSoft", "OnGetVeryfiedSignature", window.GMSOFT_SIGNED);
          return;
        }
      }
    } catch (_0x49cf19) {
      console.error("Error getting GM_SDK_GetVeryfiedSignature from local storage: ", _0x49cf19);
    }
    try {
      let _0x474e6e = "hn=" + "games.1games.io";
      let _0x15d8eb = btoa(_0x474e6e);
      let _0x242efe = "https://api.cdnwave.com/sdkdom/keysigned";
      if (window.GMSOFT_OPTIONS && window.GMSOFT_OPTIONS.signedurl) {
        _0x242efe = window.GMSOFT_OPTIONS.signedurl;
      }
      let _0x1716c3 = _0x242efe + "?params=" + _0x15d8eb;
      var _0x13bf2e = new XMLHttpRequest();
      let _0x478ce7 = "";
      _0x13bf2e.open("GET", _0x1716c3, false);
      _0x13bf2e.send(_0x478ce7);
      let _0x1adf85 = _0x13bf2e.responseText;
      window.GMSOFT_SIGNED = _0x1adf85;
      localStorage.setItem(_0xcc5305, _0x1adf85);
      console.log("send request GM_SDK_GetVeryfiedSignature: ", window.GMSOFT_SIGNED);
      _0x187a5c("GmSoft", "OnGetVeryfiedSignature", window.GMSOFT_SIGNED);
    } catch (_0x46d344) {
      console.error("Error fetching GM_SDK_GetVeryfiedSignature: ", _0x46d344);
    }
  }
  function _0x320f03() {
    let _0x104610 = "games.1games.io";
    _0x187a5c("GmSoft", "SetUnityHostName", _0x104610);
    _0x187a5c("GmSoft", "SetSDKType", window.GMSOFT_SDKTYPE);
  }
  function _0x17f8ac() {
    console.log("GM_SDK_StartGame");
    try {
      gmStartGame(function () {
        _0x187a5c("GmSoft", "SetGameInfoParam", JSON.stringify(window.GMSOFT_GAME_INFO));
      });
    } catch (_0x4c8176) {
      console.error("Error JS 12", _0x4c8176);
    }
    try {
      gmStartAds(function () {
        _0x187a5c("GmSoft", "SetAdParam", JSON.stringify(window.GMSOFT_ADS_INFO));
      });
    } catch (_0x2f8004) {
      console.error("Error JS 20", _0x2f8004);
    }
    try {
      document.addEventListener("gmsoftbanevent", _0x205fa0 => {
        _0x187a5c("GmSoft", "LockGame", _0x205fa0.detail);
      });
    } catch (_0x5a7ca6) {
      console.error("Error JS 28", _0x5a7ca6);
    }
  }
  function _0x2d6fea(_0x17191d) {
    try {
      window[preroll.config.loaderObjectName].log("WGSDK: Sending game event");
      window[preroll.config.loaderObjectName].GameEvent(_0x17191d);
    } catch (_0x194191) {
      console.log("No WeeGooAFG implementation found!");
    }
  }
  function _0x3d2784() {
    try {
      window.CrazyGames.SDK.game.gameplayStart();
    } catch (_0xfcae40) {
      window.UnitySDK.logError("Error while calling gameplayStart:", _0xfcae40);
    }
  }
  function _0x292a24() {
    try {
      window.CrazyGames.SDK.game.gameplayStop();
    } catch (_0x5692ac) {
      window.UnitySDK.logError("Error while calling gameplayStop:", _0x5692ac);
    }
  }
  function _0x21a229() {
    var _0x1d4422 = firebaseConfig.projectId;
    var _0x55a467 = _0x247116(_0x1d4422) + 1;
    var _0xe75ded = _0x2a1ebe(_0x55a467);
    _0x409466(_0x1d4422, _0xe75ded, _0x55a467);
    return _0xe75ded;
  }
  function _0x4cae2c(_0x1ef0eb, _0xd93a33, _0x36dddb, _0x92d58d, _0x4ab774) {
    var _0x1bcd21 = _0x5c2e85(_0x1ef0eb);
    var _0x525c57 = _0x5c2e85(_0xd93a33);
    var _0x56ba1b = _0x5c2e85(_0x36dddb);
    var _0x1acdf3 = _0x5c2e85(_0x92d58d);
    var _0x5cc2cb = _0x5c2e85(_0x4ab774);
    try {
      firebase.firestore().collection(_0x1bcd21).doc(_0x525c57).get().then(function (_0x212a14) {
        if (_0x212a14.exists) {
          window.unityInstance.SendMessage(_0x56ba1b, _0x1acdf3, JSON.stringify(_0x212a14.data()));
        } else {
          window.unityInstance.SendMessage(_0x56ba1b, _0x1acdf3, "null");
        }
      }).catch(function (_0x66dcbf) {
        window.unityInstance.SendMessage(_0x56ba1b, _0x5cc2cb, JSON.stringify(_0x66dcbf, Object.getOwnPropertyNames(_0x66dcbf)));
      });
    } catch (_0x54778c) {
      window.unityInstance.SendMessage(_0x56ba1b, _0x5cc2cb, JSON.stringify(_0x54778c, Object.getOwnPropertyNames(_0x54778c)));
    }
  }
  function _0x2f8f7f(_0x1c8fb0, _0x2aa7cb, _0x12bcfb, _0x14767f) {
    var _0x379254 = _0x5c2e85(_0x1c8fb0);
    var _0x1901fe = _0x5c2e85(_0x2aa7cb);
    var _0x148d35 = _0x5c2e85(_0x12bcfb);
    var _0x2db7e5 = _0x5c2e85(_0x14767f);
    try {
      firebase.firestore().collection(_0x379254).get().then(function (_0x239e52) {
        var _0x56c0d8 = {};
        _0x239e52.forEach(function (_0x4b3d98) {
          _0x56c0d8[_0x4b3d98.id] = _0x4b3d98.data();
        });
        window.unityInstance.SendMessage(_0x1901fe, _0x148d35, JSON.stringify(_0x56c0d8));
      }).catch(function (_0x1b8f06) {
        window.unityInstance.SendMessage(_0x1901fe, _0x2db7e5, JSON.stringify(_0x1b8f06, Object.getOwnPropertyNames(_0x1b8f06)));
      });
    } catch (_0x926845) {
      window.unityInstance.SendMessage(_0x1901fe, _0x2db7e5, JSON.stringify(_0x926845, Object.getOwnPropertyNames(_0x926845)));
    }
  }
  function _0x400481() {
    var _0x5e7314 = window.CrazyGames.SDK.environment;
    var _0x1ceed5 = _0x247116(_0x5e7314) + 1;
    var _0xc4e534 = _0x2a1ebe(_0x1ceed5);
    _0x409466(_0x5e7314, _0xc4e534, _0x1ceed5);
    return _0xc4e534;
  }
  function _0x1b90b4() {
    var _0x2b85d9 = JSON.stringify(window.CrazyGames.SDK.game.settings);
    var _0x4766f3 = _0x247116(_0x2b85d9) + 1;
    var _0xff0486 = _0x2a1ebe(_0x4766f3);
    _0x409466(_0x2b85d9, _0xff0486, _0x4766f3);
    return _0xff0486;
  }
  function _0x205d89(_0x407c84) {
    var _0x529c7d = new URLSearchParams(window.location.search);
    var _0x45edfc = _0x529c7d.get(window.unityStringify(_0x407c84));
    if (_0x45edfc === null) {
      _0x45edfc = "";
    }
    var _0x40fff7 = _0x247116(_0x45edfc) + 1;
    var _0x486dde = _0x2a1ebe(_0x40fff7);
    _0x409466(_0x45edfc, _0x486dde, _0x40fff7);
    return _0x486dde;
  }
  function _0x2907ae() {
    return window.CrazyGames.SDK.isQaTool;
  }
  function _0x3c0371(_0x37e0b1, _0x16041e, _0xbefe1, _0x78c5b0) {
    var _0x5d1365 = _0x5c2e85(_0x37e0b1);
    var _0xac8247 = _0x5c2e85(_0x16041e);
    var _0x21694b = _0x5c2e85(_0xbefe1);
    var _0x30f305 = _0x5c2e85(_0x78c5b0);
    try {
      firebase.database().ref(_0x5d1365).once("value").then(function (_0x460b05) {
        window.unityInstance.SendMessage(_0xac8247, _0x21694b, JSON.stringify(_0x460b05.val()));
      });
    } catch (_0x2890f6) {
      window.unityInstance.SendMessage(_0xac8247, _0x30f305, JSON.stringify(_0x2890f6, Object.getOwnPropertyNames(_0x2890f6)));
    }
  }
  function _0x14b936() {
    var _0x4fcdee = JSON.stringify(window.CrazyGames.SDK.user.systemInfo);
    var _0x12497d = _0x247116(_0x4fcdee) + 1;
    var _0x2a7726 = _0x2a1ebe(_0x12497d);
    _0x409466(_0x4fcdee, _0x2a7726, _0x12497d);
    return _0x2a7726;
  }
  function _0x28a38d() {
    window.CrazyGames.SDK.user.getUser().then(function (_0x3064bb) {
      _0x187a5c("CrazySDKSingleton", "JSLibCallback_GetUser", JSON.stringify({
        userJson: JSON.stringify(_0x3064bb)
      }));
    }).catch(function (_0x27035c) {
      _0x187a5c("CrazySDKSingleton", "JSLibCallback_GetUser", JSON.stringify({
        errorJson: JSON.stringify(_0x27035c)
      }));
    });
  }
  function _0x4acd2d() {
    window.CrazyGames.SDK.user.getUserToken().then(function (_0x203f36) {
      _0x187a5c("CrazySDKSingleton", "JSLibCallback_GetUserToken", JSON.stringify({
        token: _0x203f36
      }));
    }).catch(function (_0x384796) {
      _0x187a5c("CrazySDKSingleton", "JSLibCallback_GetUserToken", JSON.stringify({
        errorJson: JSON.stringify(_0x384796)
      }));
    });
  }
  function _0x3a5d60() {
    window.CrazyGames.SDK.user.getXsollaUserToken().then(function (_0x36455f) {
      _0x187a5c("CrazySDKSingleton", "JSLibCallback_GetXsollaUserToken", JSON.stringify({
        token: _0x36455f
      }));
    }).catch(function (_0x131034) {
      _0x187a5c("CrazySDKSingleton", "JSLibCallback_GetXsollaUserToken", JSON.stringify({
        errorJson: JSON.stringify(_0x131034)
      }));
    });
  }
  function _0x36dc1d() {}
  function _0x142d3e() {
    console.log("afg.ready: " + afg.ready);
    if (afg.ready) {
      _0x187a5c("H5Adverisement", "PreloadRewardedVideoCallback", 1);
      afg.adBreak({
        type: "reward",
        name: "reward ads",
        beforeReward: function (_0x3be3fa) {
          this._showRewardAdFn = _0x3be3fa;
          console.log("[H5 Ads] before reward");
        }.bind(this),
        adViewed: function () {
          this._showRewardAdFn = null;
          _0x187a5c("H5Adverisement", "RewardedVideoSuccessCallback");
          console.log("[H5 Ads] ad viewed");
        }.bind(this),
        adDismissed: function () {
          this._showRewardAdFn = null;
          _0x187a5c("H5Adverisement", "RewardedVideoFailureCallback");
          console.log("[H5 Ads] ad failure");
        }.bind(this),
        adBreakDone: function (_0x26b5d8) {
          console.log("[H5 Ads] Reward break done");
          _0x187a5c("H5Adverisement", "ResumeGameCallback");
        }.bind(this)
      });
    } else {
      console.log("[H5 Ads] no reward ads");
      _0x187a5c("H5Adverisement", "PreloadRewardedVideoCallback", 0);
    }
  }
  function _0x1c185e() {
    if (afg.ready) {
      afg.adBreak({
        type: "next",
        name: "next",
        beforeAd: function () {
          afg.onBeforeAd();
          console.log("[H5 Ads] Before ad");
          _0x187a5c("H5Adverisement", "PauseGameCallback");
        }.bind(this),
        adBreakDone: function () {
          console.log("[H5 Ads] Ad break done");
          _0x187a5c("H5Adverisement", "ResumeGameCallback");
        }.bind(this)
      });
    } else {
      console.log("no " + adType + " ads");
      _0x187a5c("H5Adverisement", "ResumeGameCallback");
    }
  }
  function _0x10ddd9() {
    if (this._showRewardAdFn) {
      _0x187a5c("H5Adverisement", "PauseGameCallback");
      this._showRewardAdFn();
    } else {
      _0x187a5c("H5Adverisement", "ResumeGameCallback");
    }
  }
  function _0x5ca196() {
    try {
      window.CrazyGames.SDK.game.happytime();
    } catch (_0x225fe5) {
      window.UnitySDK.logError("Error while calling happytime:", _0x225fe5);
    }
  }
  function _0x3e0793() {
    try {
      window.CrazyGames.SDK.game.hideInviteButton();
    } catch (_0x450259) {
      window.UnitySDK.logError("Error while calling hideInviteButton:", _0x450259);
    }
  }
  function _0x15d486(_0x484da6, _0x442bc3, _0x278d77, _0x2a4540, _0x423481, _0x398af2, _0x2b6d7f) {
    var _0x4c2565 = _0x5c2e85(_0x484da6);
    var _0x2bb70c = _0x5c2e85(_0x442bc3);
    var _0x57e226 = _0x5c2e85(_0x278d77);
    var _0x3b8a42 = _0x5c2e85(_0x423481);
    var _0x24bc86 = _0x5c2e85(_0x398af2);
    var _0x10535e = _0x5c2e85(_0x2b6d7f);
    try {
      var _0x153c17 = {};
      _0x153c17[_0x57e226] = firebase.firestore.FieldValue.increment(_0x2a4540);
      firebase.firestore().collection(_0x4c2565).doc(_0x2bb70c).update(_0x153c17).then(function () {
        window.unityInstance.SendMessage(_0x3b8a42, _0x24bc86, "Success: incremented " + _0x57e226 + " by " + _0x2a4540);
      }).catch(function (_0x32bb4d) {
        window.unityInstance.SendMessage(_0x3b8a42, _0x10535e, JSON.stringify(_0x32bb4d, Object.getOwnPropertyNames(_0x32bb4d)));
      });
    } catch (_0xf132df) {
      window.unityInstance.SendMessage(_0x3b8a42, _0x10535e, JSON.stringify(_0xf132df, Object.getOwnPropertyNames(_0xf132df)));
    }
  }
  function _0x1982a7(_0x4dc956) {
    if (typeof _0x5c2e85 !== "undefined") {
      window.unityStringify = _0x5c2e85;
    } else {
      window.unityStringify = _0x5c2e85;
    }
    window.UnitySDK = {
      version: window.unityStringify(_0x4dc956),
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
        var _0x4f8d58 = Array.prototype.slice.call(arguments);
        _0x4f8d58.unshift("[JsLib]");
        console.error.apply(console, _0x4f8d58);
      }
    };
    var _0x58eaab = {
      wrapper: {
        engine: "unity",
        sdkVersion: window.unityStringify(_0x4dc956)
      }
    };
    var _0x5efc65 = document.createElement("script");
    _0x5efc65.src = "https://sdk.crazygames.com/crazygames-sdk-v3.js";
    document.head.appendChild(_0x5efc65);
    _0x5efc65.addEventListener("load", function () {
      window.CrazyGames.SDK.init(_0x58eaab).then(function () {
        _0x187a5c("CrazySDKSingleton", "JSLibCallback_Init");
        window.CrazyGames.SDK.ad.hasAdblock().then(function (_0x3a436c) {
          _0x187a5c("CrazySDKSingleton", "JSLibCallback_AdblockDetectionResult", _0x3a436c ? 1 : 0);
        }).catch(function (_0x29bb0d) {
          window.UnitySDK.logError("Error while checking adblock:", _0x29bb0d);
          _0x187a5c("CrazySDKSingleton", "JSLibCallback_AdblockDetectionResult", 0);
        });
        window.CrazyGames.SDK.user.addAuthListener(function (_0x4f0de0) {
          _0x187a5c("CrazySDKSingleton", "JSLibCallback_AuthListener", JSON.stringify({
            userJson: JSON.stringify(_0x4f0de0)
          }));
        });
      });
    });
  }
  function _0x5ddd26() {
    return window.CrazyGames.SDK.user.isUserAccountAvailable;
  }
  var _0x556f32 = null;
  var _0x301b53 = 0;
  function _0x4c76ef() {
    return _0x556f32 && _0x556f32.activated || _0x301b53 != 0;
  }
  var _0x3aa1db = 1;
  var _0xc65047 = {
    x: 0,
    y: 0,
    z: 0
  };
  function _0x326025() {
    _0xc65047 = {
      x: _0x556f32.x * _0x3aa1db,
      y: _0x556f32.y * _0x3aa1db,
      z: _0x556f32.z * _0x3aa1db
    };
    if (_0x301b53 != 0) {
      _0x19945d(_0x301b53, _0xc65047.x, _0xc65047.y, _0xc65047.z);
    }
  }
  var _0x48a10b = 0;
  var _0x498afc = 0;
  var _0x470bd0 = 0;
  var _0x365571 = 0;
  var _0x1d3eb1 = 0;
  function _0x38c14c(_0x4f4a1d, _0x46eadc) {
    var _0x236cfb = {
      x: _0x4f4a1d.x - _0x46eadc.x,
      y: _0x4f4a1d.y - _0x46eadc.y,
      z: _0x4f4a1d.z - _0x46eadc.z
    };
    var _0x5bc9c3 = _0x236cfb.x * _0x236cfb.x + _0x236cfb.y * _0x236cfb.y + _0x236cfb.z * _0x236cfb.z;
    var _0x265c33 = {
      x: _0x4f4a1d.x + _0x46eadc.x,
      y: _0x4f4a1d.y + _0x46eadc.y,
      z: _0x4f4a1d.z + _0x46eadc.z
    };
    var _0x2c7aac = _0x265c33.x * _0x265c33.x + _0x265c33.y * _0x265c33.y + _0x265c33.z * _0x265c33.z;
    if (_0x5bc9c3 <= _0x2c7aac) {
      return _0x236cfb;
    } else {
      return _0x265c33;
    }
  }
  function _0x362f8b(_0x595d2b) {
    var _0x99e680 = {
      x: _0x595d2b.accelerationIncludingGravity.x * _0x3aa1db,
      y: _0x595d2b.accelerationIncludingGravity.y * _0x3aa1db,
      z: _0x595d2b.accelerationIncludingGravity.z * _0x3aa1db
    };
    if (_0x301b53 != 0) {
      _0x19945d(_0x301b53, _0x99e680.x, _0x99e680.y, _0x99e680.z);
    }
    var _0x253d56 = {
      x: _0x595d2b.acceleration.x * _0x3aa1db,
      y: _0x595d2b.acceleration.y * _0x3aa1db,
      z: _0x595d2b.acceleration.z * _0x3aa1db
    };
    if (_0x470bd0 != 0) {
      _0x19945d(_0x470bd0, _0x253d56.x, _0x253d56.y, _0x253d56.z);
    }
    if (_0x365571 != 0) {
      var _0x591980 = _0x38c14c(_0x99e680, _0x253d56);
      _0x19945d(_0x365571, _0x591980.x, _0x591980.y, _0x591980.z);
    }
    if (_0x1d3eb1 != 0) {
      var _0x3e936f = Math.PI / 180;
      _0x19945d(_0x1d3eb1, _0x595d2b.rotationRate.alpha * _0x3e936f, _0x595d2b.rotationRate.beta * _0x3e936f, _0x595d2b.rotationRate.gamma * _0x3e936f);
    }
  }
  var _0x3ced26 = 0;
  function _0x4dd57f(_0x71a978) {
    if (_0x71a978 & 1) {
      if (typeof DeviceOrientationEvent.requestPermission === "function") {
        DeviceOrientationEvent.requestPermission().then(function (_0xf8f120) {
          if (_0xf8f120 === "granted") {
            _0x3ced26 &= ~1;
          } else {
            _0x22e41e("DeviceOrientationEvent permission not granted");
          }
        }).catch(function (_0x1c129f) {
          _0x22e41e(_0x1c129f);
          _0x3ced26 |= 1;
        });
      }
    }
    if (_0x71a978 & 2) {
      if (typeof DeviceMotionEvent.requestPermission === "function") {
        DeviceMotionEvent.requestPermission().then(function (_0x4ba933) {
          if (_0x4ba933 === "granted") {
            _0x3ced26 &= ~2;
          } else {
            _0x22e41e("DeviceMotionEvent permission not granted");
          }
        }).catch(function (_0x50d0cc) {
          _0x22e41e(_0x50d0cc);
          _0x3ced26 |= 2;
        });
      }
    }
  }
  function _0x5dc9f3() {
    if (_0x301b53 == 0 && _0x470bd0 == 0 && _0x365571 == 0 && _0x1d3eb1 == 0) {
      _0x4dd57f(2);
      window.addEventListener("devicemotion", _0x362f8b);
    }
  }
  function _0x510149() {
    var _0x31bb5c = 9.80665;
    _0x3aa1db = /(iPhone|iPad|Macintosh)/i.test(navigator.userAgent) ? 1 / _0x31bb5c : -1 / _0x31bb5c;
  }
  function _0x33af28(_0x4b4d5e, _0x51c15f) {
    _0x510149();
    if (typeof Accelerometer === "undefined") {
      _0x5dc9f3();
      if (_0x4b4d5e != 0) {
        _0x301b53 = _0x4b4d5e;
      }
      return;
    }
    if (_0x4b4d5e != 0) {
      _0x301b53 = _0x4b4d5e;
    }
    function _0x63e80e(_0x3b8d77) {
      _0x556f32 = new Accelerometer({
        frequency: _0x3b8d77,
        referenceFrame: "device"
      });
      _0x556f32.addEventListener("reading", _0x326025);
      _0x556f32.addEventListener("error", function (_0x1a0675) {
        _0x22e41e(_0x1a0675.error ? _0x1a0675.error : _0x1a0675);
      });
      _0x556f32.start();
      _0x498afc = _0x3b8d77;
    }
    if (_0x556f32) {
      if (_0x498afc != _0x51c15f) {
        _0x556f32.stop();
        _0x556f32.removeEventListener("reading", _0x326025);
        _0x63e80e(_0x51c15f);
      }
    } else if (_0x48a10b != 0) {
      _0x48a10b = _0x51c15f;
    } else {
      _0x48a10b = _0x51c15f;
      navigator.permissions.query({
        name: "accelerometer"
      }).then(function (_0x3a14ba) {
        if (_0x3a14ba.state === "granted") {
          _0x63e80e(_0x48a10b);
        } else {
          _0x22e41e("No permission to use Accelerometer.");
        }
        _0x48a10b = 0;
      });
    }
  }
  function _0x3be6ed() {
    if (_0x301b53 == 0 && _0x470bd0 == 0 && _0x365571 == 0 && _0x1d3eb1 == 0) {
      window.removeEventListener("devicemotion", _0x29374b);
    }
  }
  function _0x5aa855() {
    if (_0x556f32) {
      if (typeof GravitySensor !== "undefined" || _0x365571 == 0) {
        _0x556f32.stop();
        _0x556f32.removeEventListener("reading", _0x326025);
        _0x556f32 = null;
      }
      _0x301b53 = 0;
      _0x498afc = 0;
    } else if (_0x301b53 != 0) {
      _0x301b53 = 0;
      _0x3be6ed();
    }
  }
  function _0x31a669(_0x33aa6f, _0x444ea8) {
    var _0x355670 = "";
    for (var _0x5d3518 = 0; _0x5d3518 < _0x444ea8; _0x5d3518++) {
      _0x355670 += String.fromCharCode(_0x950143[_0x33aa6f + _0x5d3518]);
    }
    _0x289557.canvas.style.cursor = "url(data:image/cur;base64," + btoa(_0x355670) + "),default";
  }
  function _0x587a00(_0x388c0f) {
    _0x289557.canvas.style.cursor = _0x388c0f ? "default" : "none";
  }
  function _0x2a4354(_0x1ebb70) {
    if (typeof window.CSS !== "undefined" && typeof window.CSS.escape !== "undefined") {
      return window.CSS.escape(_0x1ebb70);
    }
    return _0x1ebb70.replace(/(#|\.|\+|\[|\]|\(|\)|\{|\})/g, "\\$1");
  }
  function _0x2d2140() {
    var _0x117962 = _0x289557.canvas ? _0x289557.canvas.id : "unity-canvas";
    return "#" + _0x2a4354(_0x117962);
  }
  function _0x1d378e(_0x36aaa4, _0x5ba8b4, _0x5725ed, _0x3e95a1) {
    var _0xa11de3 = document.querySelector(_0x2d2140());
    var _0x5cfec3 = _0xa11de3 && _0xa11de3.getBoundingClientRect();
    _0x4cad96[_0x5725ed >> 2] = _0x36aaa4 - (_0x5cfec3 ? _0x5cfec3.left : 0);
    _0x4cad96[_0x3e95a1 >> 2] = _0x5ba8b4 - (_0x5cfec3 ? _0x5cfec3.top : 0);
  }
  function _0x26d35b(_0x24e1b2) {
    var _0x412dcf = _0x247116(_0x24e1b2) + 1;
    var _0x156103 = _0x2a1ebe(_0x412dcf);
    _0x409466(_0x24e1b2, _0x156103, _0x412dcf);
    return _0x156103;
  }
  function _0x1ed23c() {
    var _0x5f4605 = _0x2d2140();
    if (_0x1ed23c.selector != _0x5f4605) {
      _0x2933c1(_0x1ed23c.ptr);
      _0x1ed23c.ptr = _0x26d35b(_0x5f4605);
      _0x1ed23c.selector = _0x5f4605;
    }
    return _0x1ed23c.ptr;
  }
  function _0x3e5669(_0x5c2090) {
    var _0x199d90 = _0x5c2e85(_0x5c2090);
    try {
      eval(_0x199d90);
    } catch (_0x47aa90) {
      console.error(_0x47aa90);
    }
  }
  function _0x53c291(_0x341846) {
    var _0xd92418 = _0x5c2e85(_0x341846);
    window.open(_0xd92418, "_blank", "");
  }
  var _0x1862b3 = {
    numPendingSync: 0,
    syncInternal: 1000,
    syncInProgress: false,
    sync: function (_0x35c3e2) {
      if (_0x35c3e2) {
        if (_0x1862b3.numPendingSync == 0) {
          return;
        }
      } else if (_0x1862b3.syncInProgress) {
        _0x1862b3.numPendingSync++;
        return;
      }
      _0x1862b3.syncInProgress = true;
      _0x2840b9.syncfs(false, function (_0x8bd6f3) {
        _0x1862b3.syncInProgress = false;
      });
      _0x1862b3.numPendingSync = 0;
    }
  };
  function _0x29c2a6() {
    _0x289557.setInterval(function () {
      _0x1862b3.sync(true);
    }, _0x1862b3.syncInternal);
  }
  function _0x120f59() {
    _0x1862b3.sync(false);
  }
  var _0x385ee7 = null;
  function _0x9c1396() {
    if (typeof GravitySensor !== "undefined") {
      return _0x385ee7 && _0x385ee7.activated;
    } else {
      return _0x365571 != 0;
    }
  }
  function _0x2f24e6() {
    if (_0x365571 != 0) {
      _0x19945d(_0x365571, _0x385ee7.x * _0x3aa1db, _0x385ee7.y * _0x3aa1db, _0x385ee7.z * _0x3aa1db);
    }
  }
  var _0x471184 = 0;
  var _0xba733b = null;
  function _0x4ac92a() {
    var _0x1b6d0f = {
      x: _0xba733b.x * _0x3aa1db,
      y: _0xba733b.y * _0x3aa1db,
      z: _0xba733b.z * _0x3aa1db
    };
    if (_0x470bd0 != 0) {
      _0x19945d(_0x470bd0, _0x1b6d0f.x, _0x1b6d0f.y, _0x1b6d0f.z);
    }
    if (_0x365571 != 0 && typeof GravitySensor === "undefined") {
      var _0x248c18 = _0x38c14c(_0xc65047, _0x1b6d0f);
      _0x19945d(_0x365571, _0x248c18.x, _0x248c18.y, _0x248c18.z);
    }
  }
  var _0x66a32e = 0;
  var _0x54b514 = 0;
  function _0x44c0af(_0x576d55, _0x571190) {
    _0x510149();
    if (typeof LinearAccelerationSensor === "undefined") {
      _0x5dc9f3();
      if (_0x576d55 != 0) {
        _0x470bd0 = _0x576d55;
      }
      return;
    }
    if (_0x576d55 != 0) {
      _0x470bd0 = _0x576d55;
    }
    function _0x23236f(_0x4a72ae) {
      _0xba733b = new LinearAccelerationSensor({
        frequency: _0x4a72ae,
        referenceFrame: "device"
      });
      _0xba733b.addEventListener("reading", _0x4ac92a);
      _0xba733b.addEventListener("error", function (_0x4c7d47) {
        _0x22e41e(_0x4c7d47.error ? _0x4c7d47.error : _0x4c7d47);
      });
      _0xba733b.start();
      _0x54b514 = _0x4a72ae;
    }
    if (_0xba733b) {
      if (_0x54b514 != _0x571190) {
        _0xba733b.stop();
        _0xba733b.removeEventListener("reading", _0x4ac92a);
        _0x23236f(_0x571190);
      }
    } else if (_0x66a32e != 0) {
      _0x66a32e = _0x571190;
    } else {
      _0x66a32e = _0x571190;
      navigator.permissions.query({
        name: "accelerometer"
      }).then(function (_0x556233) {
        if (_0x556233.state === "granted") {
          _0x23236f(_0x66a32e);
        } else {
          _0x22e41e("No permission to use LinearAccelerationSensor.");
        }
        _0x66a32e = 0;
      });
    }
  }
  function _0xea6709(_0x12896f, _0x4007e1) {
    if (typeof GravitySensor === "undefined") {
      _0x33af28(0, Math.max(_0x4007e1, _0x498afc));
      _0x44c0af(0, Math.max(_0x4007e1, _0x54b514));
      _0x365571 = _0x12896f;
      return;
    }
    _0x510149();
    _0x365571 = _0x12896f;
    function _0x38b565(_0x15c988) {
      _0x385ee7 = new GravitySensor({
        frequency: _0x15c988,
        referenceFrame: "device"
      });
      _0x385ee7.addEventListener("reading", _0x2f24e6);
      _0x385ee7.addEventListener("error", function (_0x985cb8) {
        _0x22e41e(_0x985cb8.error ? _0x985cb8.error : _0x985cb8);
      });
      _0x385ee7.start();
    }
    if (_0x385ee7) {
      _0x385ee7.stop();
      _0x385ee7.removeEventListener("reading", _0x2f24e6);
      _0x38b565(_0x4007e1);
    } else if (_0x471184 != 0) {
      _0x471184 = _0x4007e1;
    } else {
      _0x471184 = _0x4007e1;
      navigator.permissions.query({
        name: "accelerometer"
      }).then(function (_0x1896ba) {
        if (_0x1896ba.state === "granted") {
          _0x38b565(_0x471184);
        } else {
          _0x22e41e("No permission to use GravitySensor.");
        }
        _0x471184 = 0;
      });
    }
  }
  function _0x5daa60() {
    if (_0xba733b) {
      if (typeof GravitySensor !== "undefined" || _0x365571 == 0) {
        _0xba733b.stop();
        _0xba733b.removeEventListener("reading", _0x4ac92a);
        _0xba733b = null;
      }
      _0x470bd0 = 0;
      _0x54b514 = 0;
    } else if (_0x470bd0 != 0) {
      _0x470bd0 = 0;
      _0x3be6ed();
    }
  }
  function _0xd65b() {
    _0x365571 = 0;
    if (typeof GravitySensor === "undefined") {
      if (_0x301b53 == 0) {
        _0x5aa855();
      }
      if (_0x470bd0 == 0) {
        _0x5daa60();
      }
      return;
    }
    if (_0x385ee7) {
      _0x385ee7.stop();
      _0x385ee7.removeEventListener("reading", _0x2f24e6);
      _0x385ee7 = null;
    }
  }
  function _0xba4e1c(_0x1d4c94) {
    try {
      (function () {
        _0x41b439.call(null, _0x1d4c94);
      })();
    } catch (_0x3fe8e4) {
      console.warn(_0x3fe8e4);
    }
  }
  var _0x5a7dc1 = null;
  function _0x20325d() {
    return _0x5a7dc1 && _0x5a7dc1.activated || _0x1d3eb1 != 0;
  }
  function _0x2977f4() {
    if (_0x1d3eb1 != 0) {
      _0x19945d(_0x1d3eb1, _0x5a7dc1.x, _0x5a7dc1.y, _0x5a7dc1.z);
    }
  }
  var _0x20bedd = 0;
  function _0x5a057f(_0x168d73, _0x4cd4f1) {
    if (typeof Gyroscope === "undefined") {
      _0x5dc9f3();
      _0x1d3eb1 = _0x168d73;
      return;
    }
    _0x1d3eb1 = _0x168d73;
    function _0x1bfb6b(_0x58837d) {
      _0x5a7dc1 = new Gyroscope({
        frequency: _0x58837d,
        referenceFrame: "device"
      });
      _0x5a7dc1.addEventListener("reading", _0x2977f4);
      _0x5a7dc1.addEventListener("error", function (_0x537af9) {
        _0x22e41e(_0x537af9.error ? _0x537af9.error : _0x537af9);
      });
      _0x5a7dc1.start();
    }
    if (_0x5a7dc1) {
      _0x5a7dc1.stop();
      _0x5a7dc1.removeEventListener("reading", _0x2977f4);
      _0x1bfb6b(_0x4cd4f1);
    } else if (_0x20bedd != 0) {
      _0x20bedd = _0x4cd4f1;
    } else {
      _0x20bedd = _0x4cd4f1;
      navigator.permissions.query({
        name: "gyroscope"
      }).then(function (_0x2b7f7b) {
        if (_0x2b7f7b.state === "granted") {
          _0x1bfb6b(_0x20bedd);
        } else {
          _0x22e41e("No permission to use Gyroscope.");
        }
        _0x20bedd = 0;
      });
    }
  }
  function _0xb2d04d() {
    if (_0x5a7dc1) {
      _0x5a7dc1.stop();
      _0x5a7dc1.removeEventListener("reading", _0x2977f4);
      _0x5a7dc1 = null;
      _0x1d3eb1 = 0;
    } else if (_0x1d3eb1 != 0) {
      _0x1d3eb1 = 0;
      _0x3be6ed();
    }
  }
  function _0x175152() {
    const _0x2173bd = function (_0x10c13c) {
      if (_0x10c13c.target.localName !== "canvas") {
        _0x5946c3();
      }
    };
    document.addEventListener("contextmenu", _0x2173bd);
    _0x289557.deinitializers.push(function () {
      document.removeEventListener("contextmenu", _0x2173bd);
    });
  }
  function _0x57850c() {
    return _0xba733b && _0xba733b.activated || _0x470bd0 != 0;
  }
  function _0x20f6e0(_0x1f6fc3, _0x2389e7) {
    var _0x724b7f = _0x5c2e85(_0x1f6fc3);
    if (typeof dump == "function") {
      dump(_0x724b7f);
    }
    switch (_0x2389e7) {
      case 0:
      case 1:
      case 4:
        console.error(_0x724b7f);
        return;
      case 2:
        console.warn(_0x724b7f);
        return;
      case 3:
      case 5:
        console.log(_0x724b7f);
        return;
      default:
        console.error("Unknown console message type!");
        console.error(_0x724b7f);
    }
  }
  function _0x5ec3e8(_0x4b9a02, _0x3d31fb) {
    var _0x142f69 = _0xacba48();
    if (_0x4b9a02) {
      _0x409466(_0x142f69, _0x4b9a02, _0x3d31fb);
    }
    return _0x247116(_0x142f69);
  }
  var _0x128896 = null;
  var _0x3fbfce = 0;
  function _0x43d6f1() {
    return _0x128896 && _0x128896.activated || _0x3fbfce != 0;
  }
  function _0xd74db1() {
    if (_0x3fbfce != 0) {
      _0x2c5231(_0x3fbfce, _0x128896.quaternion[0], _0x128896.quaternion[1], _0x128896.quaternion[2], _0x128896.quaternion[3]);
    }
  }
  var _0x13c987 = 0;
  function _0x29374b(_0x5e56aa) {
    if (_0x3fbfce) {
      var _0x33265f = Math.PI / 180;
      var _0x209cc7 = _0x5e56aa.beta * _0x33265f;
      var _0x55fb08 = _0x5e56aa.gamma * _0x33265f;
      var _0x27a79a = _0x5e56aa.alpha * _0x33265f;
      var _0x366597 = Math.cos(_0x209cc7 / 2);
      var _0x5e112e = Math.sin(_0x209cc7 / 2);
      var _0x2b974d = Math.cos(_0x55fb08 / 2);
      var _0x15aacf = Math.sin(_0x55fb08 / 2);
      var _0x3313f3 = Math.cos(_0x27a79a / 2);
      var _0x21a514 = Math.sin(_0x27a79a / 2);
      var _0x41c99b = _0x5e112e * _0x2b974d * _0x3313f3 - _0x366597 * _0x15aacf * _0x21a514;
      var _0x5c4910 = _0x366597 * _0x15aacf * _0x3313f3 + _0x5e112e * _0x2b974d * _0x21a514;
      var _0x396b30 = _0x366597 * _0x2b974d * _0x21a514 + _0x5e112e * _0x15aacf * _0x3313f3;
      var _0x3071b9 = _0x366597 * _0x2b974d * _0x3313f3 - _0x5e112e * _0x15aacf * _0x21a514;
      _0x2c5231(_0x3fbfce, _0x41c99b, _0x5c4910, _0x396b30, _0x3071b9);
    }
  }
  function _0x4681f0(_0x4475d6, _0x51b2e9) {
    if (typeof RelativeOrientationSensor === "undefined") {
      if (_0x3fbfce == 0) {
        _0x3fbfce = _0x4475d6;
        _0x4dd57f(1);
        window.addEventListener("deviceorientation", _0x29374b);
      }
      return;
    }
    _0x3fbfce = _0x4475d6;
    function _0xb3563c(_0x8fd8e5) {
      _0x128896 = new RelativeOrientationSensor({
        frequency: _0x8fd8e5,
        referenceFrame: "device"
      });
      _0x128896.addEventListener("reading", _0xd74db1);
      _0x128896.addEventListener("error", function (_0x207721) {
        _0x22e41e(_0x207721.error ? _0x207721.error : _0x207721);
      });
      _0x128896.start();
    }
    if (_0x128896) {
      _0x128896.stop();
      _0x128896.removeEventListener("reading", _0xd74db1);
      _0xb3563c(_0x51b2e9);
    } else if (_0x13c987 != 0) {
      _0x13c987 = _0x51b2e9;
    } else {
      _0x13c987 = _0x51b2e9;
      Promise.all([navigator.permissions.query({
        name: "accelerometer"
      }), navigator.permissions.query({
        name: "gyroscope"
      })]).then(function (_0x2d170f) {
        if (_0x2d170f.every(function (_0x5a5583) {
          return _0x5a5583.state === "granted";
        })) {
          _0xb3563c(_0x13c987);
        } else {
          _0x22e41e("No permissions to use RelativeOrientationSensor.");
        }
        _0x13c987 = 0;
      });
    }
  }
  function _0xb7bda3() {
    if (_0x128896) {
      _0x128896.stop();
      _0x128896.removeEventListener("reading", _0xd74db1);
      _0x128896 = null;
    } else if (_0x3fbfce != 0) {
      window.removeEventListener("deviceorientation", _0x29374b);
    }
    _0x3fbfce = 0;
  }
  function _0x4beed1() {
    if (_0x3ced26 == 0) {
      return;
    }
    _0x4dd57f(_0x3ced26);
  }
  function _0x45bf70() {
    _0x289557.QuitCleanup();
  }
  var _0x119cf9 = 0;
  function _0x709d4c() {
    if (_0x119cf9) {
      _0x279c72(_0x119cf9, window.innerWidth, window.innerHeight, screen.orientation ? screen.orientation.angle : window.orientation);
    }
  }
  function _0x45c9a5() {
    _0x119cf9 = 0;
    window.removeEventListener("resize", _0x709d4c);
    if (screen.orientation) {
      screen.orientation.removeEventListener("change", _0x709d4c);
    }
  }
  function _0x2f6958(_0x4975ef) {
    if (!_0x119cf9) {
      if (screen.orientation) {
        screen.orientation.addEventListener("change", _0x709d4c);
      }
      window.addEventListener("resize", _0x709d4c);
      _0x119cf9 = _0x4975ef;
      setTimeout(_0x709d4c, 0);
    }
  }
  var _0x42e491 = -1;
  var _0xbc6d99 = -1;
  var _0x20e994 = -1;
  function _0x3d8950(_0x4b2983) {
    if (!screen.orientation || !screen.orientation.lock) {
      return;
    }
    function _0x17fbca() {
      _0xbc6d99 = _0x42e491;
      var _0x3e3a19 = ["any", 0, "landscape", "portrait", "portrait-primary", "portrait-secondary", "landscape-primary", "landscape-secondary"];
      var _0x34bfc5 = _0x3e3a19[_0xbc6d99];
      screen.orientation.lock(_0x34bfc5).then(function () {
        if (_0x42e491 != _0xbc6d99) {
          _0x20e994 = setTimeout(_0x17fbca, 0);
        } else {
          _0x20e994 = -1;
        }
      }).catch(function (_0x2d1720) {
        _0x22e41e(_0x2d1720);
        _0x20e994 = -1;
      });
    }
    _0x42e491 = _0x4b2983;
    if (_0x20e994 == -1 && _0x4b2983 != _0xbc6d99) {
      _0x20e994 = setTimeout(_0x17fbca, 0);
    }
  }
  var _0x161e07 = {
    audioInstanceIdCounter: 0,
    audioInstances: {},
    audioContext: null,
    audioWebEnabled: 0,
    audioCache: [],
    pendingAudioSources: {}
  };
  function _0xb3f3d7(_0xd1c110) {
    _0xd1c110.estimatePlaybackPosition = function () {
      var _0x1a0a52 = (_0x161e07.audioContext.currentTime - _0xd1c110.playbackStartTime) * _0xd1c110.playbackRate.value;
      if (_0xd1c110.loop && _0x1a0a52 >= _0xd1c110.loopStart) {
        _0x1a0a52 = (_0x1a0a52 - _0xd1c110.loopStart) % (_0xd1c110.loopEnd - _0xd1c110.loopStart) + _0xd1c110.loopStart;
      }
      return _0x1a0a52;
    };
    _0xd1c110.setPitch = function (_0x2a9936) {
      var _0x57e355 = _0xd1c110.estimatePlaybackPosition();
      if (_0x57e355 >= 0) {
        _0xd1c110.playbackStartTime = _0x161e07.audioContext.currentTime - _0x57e355 / _0x2a9936;
      }
      if (_0xd1c110.playbackRate.value !== _0x2a9936) {
        _0xd1c110.playbackRate.value = _0x2a9936;
      }
    };
  }
  function _0x3d79ce(_0x4788d3, _0x19574a) {
    var _0xf5f491 = {
      buffer: _0x4788d3,
      error: _0x19574a
    };
    _0xf5f491.release = function () {};
    _0xf5f491.getLength = function () {
      if (!this.buffer) {
        console.log("Trying to get length of sound which is not loaded.");
        return 0;
      }
      var _0x41a28e = 44100 / this.buffer.sampleRate;
      return this.buffer.length * _0x41a28e;
    };
    _0xf5f491.getData = function (_0x143e80, _0x2f0ec2) {
      if (!this.buffer) {
        console.log("Trying to get data of sound which is not loaded.");
        return 0;
      }
      var _0x2a1dad = _0x143e80 >> 2;
      var _0x103ec8 = _0x5e6300.subarray(_0x2a1dad, _0x2a1dad + (_0x2f0ec2 >> 2));
      var _0x43e5a1 = Math.floor((_0x2f0ec2 >> 2) / this.buffer.numberOfChannels);
      var _0x21d219 = Math.min(this.buffer.length, _0x43e5a1);
      for (var _0x2c885f = 0; _0x2c885f < this.buffer.numberOfChannels; _0x2c885f++) {
        var _0x4c426d = this.buffer.getChannelData(_0x2c885f).subarray(0, _0x21d219);
        _0x103ec8.set(_0x4c426d, _0x2c885f * _0x21d219);
      }
      return _0x21d219 * this.buffer.numberOfChannels * 4;
    };
    _0xf5f491.getNumberOfChannels = function () {
      if (!this.buffer) {
        console.log("Trying to get metadata of sound which is not loaded.");
        return 0;
      }
      return this.buffer.numberOfChannels;
    };
    _0xf5f491.getFrequency = function () {
      if (!this.buffer) {
        console.log("Trying to get metadata of sound which is not loaded.");
        return 0;
      }
      return this.buffer.sampleRate;
    };
    _0xf5f491.createSourceNode = function () {
      if (!this.buffer) {
        console.log("Trying to play sound which is not loaded.");
      }
      var _0x39e04a = _0x161e07.audioContext.createBufferSource();
      _0x39e04a.buffer = this.buffer;
      _0xb3f3d7(_0x39e04a);
      return _0x39e04a;
    };
    return _0xf5f491;
  }
  function _0x3cbb94(_0x36f556, _0xa2d64e) {
    var _0x525908 = {
      callback: _0x36f556,
      userData: _0xa2d64e,
      source: null,
      gain: _0x161e07.audioContext.createGain(),
      panner: _0x161e07.audioContext.createPanner(),
      threeD: false,
      loop: false,
      loopStart: 0,
      loopEnd: 0,
      pitch: 1
    };
    _0x525908.panner.rolloffFactor = 0;
    _0x525908.release = function () {
      this.disconnectSource();
      this.gain.disconnect();
      this.panner.disconnect();
    };
    _0x525908.playSoundClip = function (_0x89ba94, _0x1dfac2, _0x295670) {
      try {
        var _0x4a4a17 = this;
        this.source = _0x89ba94.createSourceNode();
        this.setupPanning();
        this.source.onended = function () {
          _0x4a4a17.source.isStopped = true;
          _0x4a4a17.disconnectSource();
          if (_0x4a4a17.callback) {
            _0x2748a0("vi", _0x4a4a17.callback, [_0x4a4a17.userData]);
          }
        };
        this.source.loop = this.loop;
        this.source.loopStart = this.loopStart;
        this.source.loopEnd = this.loopEnd;
        this.source.start(_0x1dfac2, _0x295670);
        this.source.playbackStartTime = _0x1dfac2 - _0x295670 / this.source.playbackRate.value;
        this.source.setPitch(this.pitch);
      } catch (_0x4d50fb) {
        console.error("Channel.playSoundClip error. Exception: " + _0x4d50fb);
      }
    };
    _0x525908.stop = function (_0x1b2c42) {
      if (!this.source) {
        return;
      }
      try {
        _0x525908.source.stop(_0x161e07.audioContext.currentTime + _0x1b2c42);
      } catch (_0x46f596) {}
      if (_0x1b2c42 == 0) {
        this.disconnectSource();
      }
    };
    _0x525908.isPaused = function () {
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
    _0x525908.pause = function () {
      if (!this.source || this.source.isPausedMockNode) {
        return;
      }
      if (this.source.mediaElement) {
        this.source._pauseMediaElement();
        return;
      }
      var _0x289e51 = {
        isPausedMockNode: true,
        buffer: this.source.buffer,
        loop: this.source.loop,
        loopStart: this.source.loopStart,
        loopEnd: this.source.loopEnd,
        playbackRate: this.source.playbackRate.value,
        scheduledStopTime: undefined,
        playbackPausedAtPosition: this.source.estimatePlaybackPosition(),
        setPitch: function (_0x3fbc74) {
          this.playbackRate = _0x3fbc74;
        },
        stop: function (_0x8222f7) {
          this.scheduledStopTime = _0x8222f7;
        }
      };
      this.stop(0);
      this.disconnectSource();
      this.source = _0x289e51;
    };
    _0x525908.resume = function () {
      if (this.source && this.source.mediaElement) {
        this.source.start(undefined, this.source.currentTime);
        return;
      }
      if (!this.source || !this.source.isPausedMockNode) {
        return;
      }
      var _0x1f052a = this.source;
      var _0x277677 = _0x3d79ce(_0x1f052a.buffer, false);
      this.playSoundClip(_0x277677, _0x161e07.audioContext.currentTime, Math.max(0, _0x1f052a.playbackPausedAtPosition));
      this.source.loop = _0x1f052a.loop;
      this.source.loopStart = _0x1f052a.loopStart;
      this.source.loopEnd = _0x1f052a.loopEnd;
      this.source.setPitch(_0x1f052a.playbackRate);
      if (typeof _0x1f052a.scheduledStopTime !== "undefined") {
        var _0x21a011 = Math.max(_0x1f052a.scheduledStopTime - _0x161e07.audioContext.currentTime, 0);
        this.stop(_0x21a011);
      }
    };
    _0x525908.setLoop = function (_0x5139cc) {
      this.loop = _0x5139cc;
      if (!this.source || this.source.loop == _0x5139cc) {
        return;
      }
      this.source.loop = _0x5139cc;
    };
    _0x525908.setLoopPoints = function (_0x217fb7, _0x48f07b) {
      this.loopStart = _0x217fb7;
      this.loopEnd = _0x48f07b;
      if (!this.source) {
        return;
      }
      if (this.source.loopStart !== _0x217fb7) {
        this.source.loopStart = _0x217fb7;
      }
      if (this.source.loopEnd !== _0x48f07b) {
        this.source.loopEnd = _0x48f07b;
      }
    };
    _0x525908.set3D = function (_0xf429a7) {
      if (this.threeD == _0xf429a7) {
        return;
      }
      this.threeD = _0xf429a7;
      if (!this.source) {
        return;
      }
      this.setupPanning();
    };
    _0x525908.setPitch = function (_0x47a1cb) {
      this.pitch = _0x47a1cb;
      if (!this.source) {
        return;
      }
      this.source.setPitch(_0x47a1cb);
    };
    _0x525908.setVolume = function (_0x4911a6) {
      if (this.gain.gain.value == _0x4911a6) {
        return;
      }
      this.gain.gain.value = _0x4911a6;
    };
    _0x525908.setPosition = function (_0x456dbe, _0x36ec53, _0x4ca6f2) {
      var _0x50280f = this.panner;
      if (_0x50280f.positionX) {
        if (_0x50280f.positionX.value !== _0x456dbe) {
          _0x50280f.positionX.value = _0x456dbe;
        }
        if (_0x50280f.positionY.value !== _0x36ec53) {
          _0x50280f.positionY.value = _0x36ec53;
        }
        if (_0x50280f.positionZ.value !== _0x4ca6f2) {
          _0x50280f.positionZ.value = _0x4ca6f2;
        }
      } else if (_0x50280f._x !== _0x456dbe || _0x50280f._y !== _0x36ec53 || _0x50280f._z !== _0x4ca6f2) {
        _0x50280f.setPosition(_0x456dbe, _0x36ec53, _0x4ca6f2);
        _0x50280f._x = _0x456dbe;
        _0x50280f._y = _0x36ec53;
        _0x50280f._z = _0x4ca6f2;
      }
    };
    _0x525908.disconnectSource = function () {
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
    _0x525908.setupPanning = function () {
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
      this.gain.connect(_0x161e07.audioContext.destination);
    };
    _0x525908.isStopped = function () {
      if (!this.source) {
        return true;
      }
      if (this.source.mediaElement) {
        return this.source.isStopped;
      }
      return false;
    };
    return _0x525908;
  }
  function _0x478cb5(_0x4ef577, _0x23de13) {
    if (_0x161e07.audioWebEnabled == 0) {
      return;
    }
    _0x161e07.audioInstances[++_0x161e07.audioInstanceIdCounter] = _0x3cbb94(_0x4ef577, _0x23de13);
    return _0x161e07.audioInstanceIdCounter;
  }
  function _0x501e6f(_0x3d92ad) {
    if (_0x161e07.audioWebEnabled == 0) {
      return 0;
    }
    var _0x257961 = _0x161e07.audioInstances[_0x3d92ad];
    if (!_0x257961) {
      return 0;
    }
    return _0x257961.getLength();
  }
  function _0x1596f4(_0x106368) {
    if (_0x161e07.audioWebEnabled == 0) {
      return 2;
    }
    var _0x2e756f = _0x161e07.audioInstances[_0x106368];
    if (_0x2e756f.error) {
      return 2;
    }
    if (_0x2e756f.buffer || _0x2e756f.url) {
      return 0;
    }
    return 1;
  }
  function _0x5dc260(_0x32042d) {
    var _0x34f18e = _0x161e07.pendingAudioSources[_0x32042d];
    _0x34f18e.sourceNode._startPlayback(_0x34f18e.offset);
    delete _0x161e07.pendingAudioSources[_0x32042d];
  }
  function _0x32b46e() {
    Object.keys(_0x161e07.pendingAudioSources).forEach(function (_0x17a164) {
      _0x5dc260(_0x17a164);
    });
  }
  function _0x11c7d5() {
    try {
      window.AudioContext = window.AudioContext || window.webkitAudioContext;
      _0x161e07.audioContext = new AudioContext();
      function _0x240788() {
        if (_0x161e07.audioContext.state === "suspended") {
          _0x161e07.audioContext.resume().catch(function (_0x330454) {
            console.warn("Could not resume audio context. Exception: " + _0x330454);
          });
        } else {
          _0x289557.clearInterval(_0x54fc00);
        }
      }
      var _0x54fc00 = _0x289557.setInterval(_0x240788, 400);
      _0x161e07.audioWebEnabled = 1;
      function _0x7c7ce() {
        try {
          if (_0x161e07.audioContext.state !== "running" && _0x161e07.audioContext.state !== "closed") {
            _0x161e07.audioContext.resume().catch(function (_0x4a7d6c) {
              console.warn("Could not resume audio context. Exception: " + _0x4a7d6c);
            });
          }
          _0x32b46e();
          var _0x320dfd = 20;
          while (_0x161e07.audioCache.length < _0x320dfd) {
            var _0x3ee7db = new Audio();
            _0x3ee7db.autoplay = false;
            _0x161e07.audioCache.push(_0x3ee7db);
          }
        } catch (_0x3361e1) {}
      }
      window.addEventListener("mousedown", _0x7c7ce);
      window.addEventListener("touchstart", _0x7c7ce);
      _0x289557.deinitializers.push(function () {
        window.removeEventListener("mousedown", _0x7c7ce);
        window.removeEventListener("touchstart", _0x7c7ce);
      });
    } catch (_0x2f16df) {
      alert("Web Audio API is not supported in this browser");
    }
  }
  function _0x5b6ae6(_0x312d89) {
    var _0x409075 = _0x3d79ce(null, false);
    _0x161e07.audioContext.decodeAudioData(_0x312d89, function (_0x50a84b) {
      _0x409075.buffer = _0x50a84b;
    }, function (_0x51aec9) {
      _0x409075.error = true;
      console.log("Decode error: " + _0x51aec9);
    });
    return _0x409075;
  }
  function _0x2cc1f6(_0x425646, _0x2524f5) {
    _0x161e07.pendingAudioSources[_0x425646.mediaElement.src] = {
      sourceNode: _0x425646,
      offset: _0x2524f5
    };
  }
  function _0x2f2aa5(_0x5e406a) {
    switch (_0x5e406a) {
      case 13:
        return "audio/mpeg";
      case 20:
        return "audio/wav";
      default:
        return "audio/mp4";
    }
  }
  function _0xbc5d3(_0x2ca101, _0x4b2da6) {
    var _0x2e4ed4 = _0x2f2aa5(_0x4b2da6);
    var _0x168343 = new Blob([_0x2ca101], {
      type: _0x2e4ed4
    });
    var _0x1aab36 = {
      url: URL.createObjectURL(_0x168343),
      error: false,
      mediaElement: new Audio()
    };
    _0x1aab36.mediaElement.preload = "metadata";
    _0x1aab36.mediaElement.src = _0x1aab36.url;
    _0x1aab36.release = function () {
      if (!this.mediaElement) {
        return;
      }
      this.mediaElement.src = "";
      URL.revokeObjectURL(this.url);
      delete this.mediaElement;
      delete this.url;
    };
    _0x1aab36.getLength = function () {
      return this.mediaElement.duration * 44100;
    };
    _0x1aab36.getData = function (_0x162407, _0x2470ff) {
      console.warn("getData() is not supported for compressed sound.");
      return 0;
    };
    _0x1aab36.getNumberOfChannels = function () {
      console.warn("getNumberOfChannels() is not supported for compressed sound.");
      return 0;
    };
    _0x1aab36.getFrequency = function () {
      console.warn("getFrequency() is not supported for compressed sound.");
      return 0;
    };
    _0x1aab36.createSourceNode = function () {
      var _0x5778d2 = this;
      var _0x58a3a8 = _0x161e07.audioCache.length ? _0x161e07.audioCache.pop() : new Audio();
      _0x58a3a8.preload = "metadata";
      _0x58a3a8.src = this.url;
      var _0x5802df = _0x161e07.audioContext.createMediaElementSource(_0x58a3a8);
      Object.defineProperty(_0x5802df, "loop", {
        get: function () {
          return _0x5802df.mediaElement.loop;
        },
        set: function (_0x1b96ba) {
          if (_0x5802df.mediaElement.loop !== _0x1b96ba) {
            _0x5802df.mediaElement.loop = _0x1b96ba;
          }
        }
      });
      _0x5802df.playbackRate = {};
      Object.defineProperty(_0x5802df.playbackRate, "value", {
        get: function () {
          return _0x5802df.mediaElement.playbackRate;
        },
        set: function (_0x289951) {
          if (_0x5802df.mediaElement.playbackRate !== _0x289951) {
            _0x5802df.mediaElement.playbackRate = _0x289951;
          }
        }
      });
      Object.defineProperty(_0x5802df, "currentTime", {
        get: function () {
          return _0x5802df.mediaElement.currentTime;
        },
        set: function (_0x5a8694) {
          if (_0x5802df.mediaElement.currentTime !== _0x5a8694) {
            _0x5802df.mediaElement.currentTime = _0x5a8694;
          }
        }
      });
      Object.defineProperty(_0x5802df, "mute", {
        get: function () {
          return _0x5802df.mediaElement.mute;
        },
        set: function (_0x533c96) {
          if (_0x5802df.mediaElement.mute !== _0x533c96) {
            _0x5802df.mediaElement.mute = _0x533c96;
          }
        }
      });
      Object.defineProperty(_0x5802df, "onended", {
        get: function () {
          return _0x5802df.mediaElement.onended;
        },
        set: function (_0xd7c212) {
          _0x5802df.mediaElement.onended = _0xd7c212;
        }
      });
      _0x5802df.playPromise = null;
      _0x5802df.playTimeout = null;
      _0x5802df.pauseRequested = false;
      _0x5802df.isStopped = false;
      _0x5802df._pauseMediaElement = function () {
        if (_0x5802df.playPromise || _0x5802df.playTimeout) {
          _0x5802df.pauseRequested = true;
        } else {
          _0x5802df.mediaElement.pause();
        }
      };
      _0x5802df._startPlayback = function (_0x303c79) {
        if (_0x5802df.playPromise || _0x5802df.playTimeout) {
          _0x5802df.mediaElement.currentTime = _0x303c79;
          _0x5802df.pauseRequested = false;
          return;
        }
        _0x5802df.mediaElement.currentTime = _0x303c79;
        _0x5802df.playPromise = _0x5802df.mediaElement.play();
        if (_0x5802df.playPromise) {
          _0x5802df.playPromise.then(function () {
            if (_0x5802df.pauseRequested) {
              _0x5802df.mediaElement.pause();
              _0x5802df.pauseRequested = false;
            }
            _0x5802df.playPromise = null;
          }).catch(function (_0x2dcb4d) {
            _0x5802df.playPromise = null;
            if (_0x2dcb4d.name !== "NotAllowedError") {
              throw _0x2dcb4d;
            }
            _0x2cc1f6(_0x5802df, _0x303c79);
          });
        }
      };
      _0x5802df.start = function (_0x114309, _0x126e12) {
        if (typeof _0x114309 === "undefined") {
          _0x114309 = _0x161e07.audioContext.currentTime;
        }
        if (typeof _0x126e12 === "undefined") {
          _0x126e12 = 0;
        }
        var _0x29737e = 4;
        var _0x2c5f67 = (_0x114309 - _0x161e07.audioContext.currentTime) * 1000;
        if (_0x2c5f67 > _0x29737e) {
          _0x5802df.playTimeout = setTimeout(function () {
            _0x5802df.playTimeout = null;
            _0x5802df._startPlayback(_0x126e12);
          }, _0x2c5f67);
        } else {
          _0x5802df._startPlayback(_0x126e12);
        }
      };
      _0x5802df.stop = function (_0x1484bd) {
        if (typeof _0x1484bd === "undefined") {
          _0x1484bd = _0x161e07.audioContext.currentTime;
        }
        var _0x2e2b47 = 4;
        var _0xc7a86c = (_0x1484bd - _0x161e07.audioContext.currentTime) * 1000;
        if (_0xc7a86c > _0x2e2b47) {
          setTimeout(function () {
            _0x5802df._pauseMediaElement();
            _0x5802df.isStopped = true;
          }, _0xc7a86c);
        } else {
          _0x5802df._pauseMediaElement();
          _0x5802df.isStopped = true;
        }
      };
      _0xb3f3d7(_0x5802df);
      return _0x5802df;
    };
    return _0x1aab36;
  }
  function _0x1df53d(_0x1d174c, _0x3bd3a2, _0x2b91b0, _0x4645a0) {
    if (_0x161e07.audioWebEnabled == 0) {
      return 0;
    }
    var _0x222666 = _0x950143.buffer.slice(_0x1d174c, _0x1d174c + _0x3bd3a2);
    if (_0x3bd3a2 < 131072) {
      _0x2b91b0 = 1;
    }
    var _0x3eed97;
    if (_0x2b91b0) {
      _0x3eed97 = _0x5b6ae6(_0x222666);
    } else {
      _0x3eed97 = _0xbc5d3(_0x222666, _0x4645a0);
    }
    _0x161e07.audioInstances[++_0x161e07.audioInstanceIdCounter] = _0x3eed97;
    return _0x161e07.audioInstanceIdCounter;
  }
  function _0x1fe056(_0x43e1fe, _0x3c9f03, _0x3592f2, _0x3e0a40) {
    var _0x4eb01f = _0x161e07.audioContext.createBuffer(_0x43e1fe, _0x3c9f03, _0x3592f2);
    for (var _0x1f4ad3 = 0; _0x1f4ad3 < _0x43e1fe; _0x1f4ad3++) {
      var _0x54ca3e = (_0x3e0a40 >> 2) + _0x3c9f03 * _0x1f4ad3;
      var _0x2098c0 = _0x4eb01f.copyToChannel || function (_0x144d36, _0x2fc59e, _0x4ad3d3) {
        var _0x14bb04 = _0x144d36.subarray(0, Math.min(_0x144d36.length, this.length - (_0x4ad3d3 | 0)));
        this.getChannelData(_0x2fc59e | 0).set(_0x14bb04, _0x4ad3d3 | 0);
      };
      _0x2098c0.apply(_0x4eb01f, [_0x5e6300.subarray(_0x54ca3e, _0x54ca3e + _0x3c9f03), _0x1f4ad3, 0]);
    }
    return _0x3d79ce(_0x4eb01f, false);
  }
  function _0x5d4912(_0x71b623, _0x289850, _0x5e66c1, _0x26e27e) {
    if (_0x161e07.audioWebEnabled == 0) {
      return 0;
    }
    var _0x12759b = _0x1fe056(_0x71b623, _0x289850, _0x5e66c1, _0x26e27e);
    _0x161e07.audioInstances[++_0x161e07.audioInstanceIdCounter] = _0x12759b;
    return _0x161e07.audioInstanceIdCounter;
  }
  function _0x304298(_0x54e1d9, _0x5c7a1f, _0x586f39, _0x316578) {
    if (_0x161e07.audioWebEnabled == 0) {
      return;
    }
    _0x165da4(_0x5c7a1f, 0);
    var _0x3d4995 = _0x161e07.audioInstances[_0x54e1d9];
    var _0x444a91 = _0x161e07.audioInstances[_0x5c7a1f];
    if (!_0x3d4995) {
      console.log("Trying to play sound which is not loaded.");
      return;
    }
    try {
      _0x444a91.playSoundClip(_0x3d4995, _0x161e07.audioContext.currentTime + _0x316578, _0x586f39);
    } catch (_0x3c22ee) {
      console.error("playSoundClip error. Exception: " + e);
    }
  }
  function _0x3eee0a(_0x3069ae) {
    var _0x40b53f = _0x161e07.audioInstances[_0x3069ae];
    if (_0x40b53f) {
      _0x40b53f.release();
    }
    delete _0x161e07.audioInstances[_0x3069ae];
  }
  function _0x427578() {
    if (_0x161e07.audioWebEnabled == 0) {
      return;
    }
    if (_0x161e07.audioContext.state === "suspended") {
      _0x161e07.audioContext.resume().catch(function (_0x3d2bb3) {
        console.warn("Could not resume audio context. Exception: " + _0x3d2bb3);
      });
    }
  }
  function _0x5a3000(_0x57f833, _0x37c217) {
    var _0x4b402c = _0x161e07.audioInstances[_0x57f833];
    _0x4b402c.set3D(_0x37c217);
  }
  function _0x18669a(_0x5812ee, _0x297456, _0x309339, _0x27af6e, _0x5d2ec5, _0x3ed8b2) {
    if (_0x161e07.audioWebEnabled == 0) {
      return;
    }
    _0x5812ee = -_0x5812ee;
    _0x297456 = -_0x297456;
    _0x309339 = -_0x309339;
    var _0x41cc5f = _0x161e07.audioContext.listener;
    if (_0x41cc5f.forwardX) {
      if (_0x41cc5f.forwardX.value !== _0x5812ee) {
        _0x41cc5f.forwardX.value = _0x5812ee;
      }
      if (_0x41cc5f.forwardY.value !== _0x297456) {
        _0x41cc5f.forwardY.value = _0x297456;
      }
      if (_0x41cc5f.forwardZ.value !== _0x309339) {
        _0x41cc5f.forwardZ.value = _0x309339;
      }
      if (_0x41cc5f.upX.value !== _0x27af6e) {
        _0x41cc5f.upX.value = _0x27af6e;
      }
      if (_0x41cc5f.upY.value !== _0x5d2ec5) {
        _0x41cc5f.upY.value = _0x5d2ec5;
      }
      if (_0x41cc5f.upZ.value !== _0x3ed8b2) {
        _0x41cc5f.upZ.value = _0x3ed8b2;
      }
    } else if (_0x41cc5f._forwardX !== _0x5812ee || _0x41cc5f._forwardY !== _0x297456 || _0x41cc5f._forwardZ !== _0x309339 || _0x41cc5f._upX !== _0x27af6e || _0x41cc5f._upY !== _0x5d2ec5 || _0x41cc5f._upZ !== _0x3ed8b2) {
      _0x41cc5f.setOrientation(_0x5812ee, _0x297456, _0x309339, _0x27af6e, _0x5d2ec5, _0x3ed8b2);
      _0x41cc5f._forwardX = _0x5812ee;
      _0x41cc5f._forwardY = _0x297456;
      _0x41cc5f._forwardZ = _0x309339;
      _0x41cc5f._upX = _0x27af6e;
      _0x41cc5f._upY = _0x5d2ec5;
      _0x41cc5f._upZ = _0x3ed8b2;
    }
  }
  function _0x4eeb18(_0x1e7be0, _0x580a25, _0x101cc3) {
    if (_0x161e07.audioWebEnabled == 0) {
      return;
    }
    var _0x346673 = _0x161e07.audioContext.listener;
    if (_0x346673.positionX) {
      if (_0x346673.positionX.value !== _0x1e7be0) {
        _0x346673.positionX.value = _0x1e7be0;
      }
      if (_0x346673.positionY.value !== _0x580a25) {
        _0x346673.positionY.value = _0x580a25;
      }
      if (_0x346673.positionZ.value !== _0x101cc3) {
        _0x346673.positionZ.value = _0x101cc3;
      }
    } else if (_0x346673._positionX !== _0x1e7be0 || _0x346673._positionY !== _0x580a25 || _0x346673._positionZ !== _0x101cc3) {
      _0x346673.setPosition(_0x1e7be0, _0x580a25, _0x101cc3);
      _0x346673._positionX = _0x1e7be0;
      _0x346673._positionY = _0x580a25;
      _0x346673._positionZ = _0x101cc3;
    }
  }
  function _0x583670(_0x2f2556, _0x3f3c9c) {
    if (_0x161e07.audioWebEnabled == 0) {
      return;
    }
    var _0x430f33 = _0x161e07.audioInstances[_0x2f2556];
    _0x430f33.setLoop(_0x3f3c9c);
  }
  function _0x1076e9(_0x5205ed, _0x17f430, _0x179abc) {
    if (_0x161e07.audioWebEnabled == 0) {
      return;
    }
    var _0x180a8c = _0x161e07.audioInstances[_0x5205ed];
    _0x180a8c.setLoopPoints(_0x17f430, _0x179abc);
  }
  function _0x5efe40(_0x224209, _0x1e66f5) {
    if (_0x161e07.audioWebEnabled == 0) {
      return;
    }
    var _0x1afd1e = _0x161e07.audioInstances[_0x224209];
    if (_0x1e66f5 != _0x1afd1e.isPaused()) {
      if (_0x1e66f5) {
        _0x1afd1e.pause();
      } else {
        _0x1afd1e.resume();
      }
    }
  }
  function _0xb3ab3b(_0x211d24, _0x3d329d) {
    if (_0x161e07.audioWebEnabled == 0) {
      return;
    }
    try {
      var _0x594c72 = _0x161e07.audioInstances[_0x211d24];
      _0x594c72.setPitch(_0x3d329d);
    } catch (_0x4f48a7) {
      console.error("JS_Sound_SetPitch(channel=" + _0x211d24 + ", pitch=" + _0x3d329d + ") threw an exception: " + _0x4f48a7);
    }
  }
  function _0x2c9db9(_0x95e17a, _0x2f310f, _0x2fcc3c, _0x44b11d) {
    if (_0x161e07.audioWebEnabled == 0) {
      return;
    }
    var _0x3e092a = _0x161e07.audioInstances[_0x95e17a];
    _0x3e092a.setPosition(_0x2f310f, _0x2fcc3c, _0x44b11d);
  }
  function _0x167a18(_0x43e186, _0xfe4ed4) {
    if (_0x161e07.audioWebEnabled == 0) {
      return;
    }
    try {
      var _0x13a572 = _0x161e07.audioInstances[_0x43e186];
      _0x13a572.setVolume(_0xfe4ed4);
    } catch (_0x37372c) {
      console.error("JS_Sound_SetVolume(channel=" + _0x43e186 + ", volume=" + _0xfe4ed4 + ") threw an exception: " + _0x37372c);
    }
  }
  function _0x165da4(_0x5aedc6, _0x351b1c) {
    if (_0x161e07.audioWebEnabled == 0) {
      return;
    }
    var _0x2a4896 = _0x161e07.audioInstances[_0x5aedc6];
    _0x2a4896.stop(_0x351b1c);
  }
  function _0x2be318(_0x3bac00, _0x54b8da) {
    var _0x1561d1 = _0x289557.SystemInfo.browser;
    if (_0x3bac00) {
      _0x409466(_0x1561d1, _0x3bac00, _0x54b8da);
    }
    return _0x247116(_0x1561d1);
  }
  function _0x114f65(_0x17ecf6, _0x3c8c2c) {
    var _0x34b962 = _0x289557.SystemInfo.browserVersion;
    if (_0x17ecf6) {
      _0x409466(_0x34b962, _0x17ecf6, _0x3c8c2c);
    }
    return _0x247116(_0x34b962);
  }
  function _0x209cd8(_0x4038c9, _0x51722c, _0xa51cbf) {
    var _0x559c77 = _0x5c2e85(_0x4038c9);
    var _0x1381c2 = _0x559c77 == "#canvas" ? _0x289557.canvas : document.querySelector(_0x559c77);
    var _0x4d06d0 = 0;
    var _0x4e121e = 0;
    if (_0x1381c2) {
      var _0x1015e5 = _0x1381c2.getBoundingClientRect();
      _0x4d06d0 = _0x1015e5.width;
      _0x4e121e = _0x1015e5.height;
    }
    _0x492f87[_0x51722c >> 3] = _0x4d06d0;
    _0x492f87[_0xa51cbf >> 3] = _0x4e121e;
  }
  function _0x3e1c6f(_0x37bd00, _0x139978) {
    if (_0x37bd00) {
      _0x409466("https://1games.io/game/golf-hit/?cdn=2", _0x37bd00, _0x139978);
    }
    return _0x247116("https://1games.io/game/golf-hit/?cdn=2");
  }
  function _0x36f6b9(_0x341cb3, _0x193f86) {
    var _0x3522c1 = _0x289557.SystemInfo.gpu;
    if (_0x341cb3) {
      _0x409466(_0x3522c1, _0x341cb3, _0x193f86);
    }
    return _0x247116(_0x3522c1);
  }
  function _0x3416b1(_0x257d8d, _0x25f0b2) {
    var _0x537c51 = _0x289557.SystemInfo.language;
    if (_0x257d8d) {
      _0x409466(_0x537c51, _0x257d8d, _0x25f0b2);
    }
    return _0x247116(_0x537c51);
  }
  function _0x546e6c() {
    return _0x289557.matchWebGLToCanvasSize || _0x289557.matchWebGLToCanvasSize === undefined;
  }
  function _0x52f7ad() {
    return _0x950143.length / 1048576;
  }
  function _0x343dfb(_0x45e5c4, _0x426d89) {
    var _0x41fda3 = _0x289557.SystemInfo.os + " " + _0x289557.SystemInfo.osVersion;
    if (_0x45e5c4) {
      _0x409466(_0x41fda3, _0x45e5c4, _0x426d89);
    }
    return _0x247116(_0x41fda3);
  }
  function _0x49cc10() {
    if (_0x289557.matchWebGLToCanvasSize == false) {
      return 1;
    } else {
      return _0x289557.devicePixelRatio || window.devicePixelRatio || 1;
    }
  }
  function _0x133171(_0x43dbf6, _0x1b4840) {
    _0x492f87[_0x43dbf6 >> 3] = _0x289557.SystemInfo.width;
    _0x492f87[_0x1b4840 >> 3] = _0x289557.SystemInfo.height;
  }
  function _0x46be2f(_0x2a897d, _0x429b4c) {
    if (_0x2a897d) {
      _0x409466(_0x289557.streamingAssetsUrl, _0x2a897d, _0x429b4c);
    }
    return _0x247116(_0x289557.streamingAssetsUrl);
  }
  function _0x492d79() {
    var _0x5e4d51 = _0x149f8b.getExtension("WEBGL_compressed_texture_astc");
    if (_0x5e4d51 && _0x5e4d51.getSupportedProfiles) {
      return _0x5e4d51.getSupportedProfiles().includes("hdr");
    }
    return false;
  }
  function _0xaeea52() {
    return _0x289557.SystemInfo.hasCursorLock;
  }
  function _0x5e0041() {
    return _0x289557.SystemInfo.hasFullscreen;
  }
  function _0x18a404() {
    return _0x289557.SystemInfo.hasWebGL;
  }
  function _0x90ecc9() {
    return _0x289557.SystemInfo.mobile;
  }
  function _0x28239d() {
    return !!_0x289557.shouldQuit;
  }
  var _0x4ad4e7 = {};
  var _0x536ec9 = [];
  var _0x44d110 = [];
  function _0x1d9b8e(_0x33363f) {
    _0x33363f = _0x5c2e85(_0x33363f);
    if (_0x536ec9.indexOf(_0x33363f) != -1) {
      return true;
    }
    if (_0x44d110.indexOf(_0x33363f) != -1) {
      return false;
    }
    var _0x88b549 = document.createElement("video");
    var _0x1e20ae = _0x88b549.canPlayType(_0x33363f);
    if (_0x1e20ae) {
      _0x536ec9.push(_0x33363f);
    } else {
      _0x44d110.push(_0x33363f);
    }
    return !!_0x1e20ae;
  }
  var _0x5a662d = 0;
  function _0x1faa96() {
    if (this.onendedCallback) {
      _0x25d2da(this.onendedCallback, this.onendedRef);
    }
  }
  var _0x35241b = null;
  function _0xcff91e(_0x70023e) {
    var _0x35e6b3 = _0x5c2e85(_0x70023e);
    var _0x31e26e = document.createElement("video");
    _0x31e26e.style.display = "none";
    _0x31e26e.src = _0x35e6b3;
    _0x31e26e.muted = true;
    _0x31e26e.setAttribute("muted", "");
    _0x31e26e.setAttribute("playsinline", "");
    _0x31e26e.crossOrigin = "anonymous";
    _0x4ad4e7[++_0x5a662d] = _0x31e26e;
    if (_0x35241b == null) {
      _0x35241b = _0x289557.SystemInfo.browser == "Chrome" || _0x289557.SystemInfo.browser == "Edge";
    }
    return _0x5a662d;
  }
  var _0x54d07b = {};
  function _0x5a0c8b(_0x3d36dc) {
    _0x54d07b[_0x3d36dc].play().then(function () {
      _0x47ed35(_0x3d36dc);
    });
  }
  function _0xe1d7dd() {
    for (var _0x26871b in _0x54d07b) {
      if (_0x54d07b.hasOwnProperty(_0x26871b)) {
        _0x5a0c8b(_0x26871b);
      }
    }
  }
  function _0x47ed35(_0x2cde6c) {
    delete _0x54d07b[_0x2cde6c];
    if (Object.keys(_0x54d07b).length == 0) {
      window.removeEventListener("mousedown", _0xe1d7dd);
    }
  }
  function _0x5307f5(_0x5e32e8) {
    var _0x7479ba = _0x4ad4e7[_0x5e32e8];
    if (_0x7479ba.loopEndPollInterval) {
      clearInterval(_0x7479ba.loopEndPollInterval);
    }
    _0x47ed35(_0x5e32e8);
    _0x7479ba.src = "";
    delete _0x7479ba.onendedCallback;
    _0x7479ba.onended = _0x7479ba.onerror = _0x7479ba.oncanplay = _0x7479ba.onseeked = null;
    delete _0x4ad4e7[_0x5e32e8];
  }
  function _0x106b0f(_0x333e66) {
    return _0x4ad4e7[_0x333e66].duration;
  }
  function _0x1c9551(_0x3792f5, _0x3c8d79, _0x24d6a8) {
    var _0x449479 = _0x4ad4e7[_0x3792f5];
    if (!_0x449479.enabledTracks) {
      _0x449479.enabledTracks = [];
    }
    while (_0x449479.enabledTracks.length <= _0x3c8d79) {
      _0x449479.enabledTracks.push(true);
    }
    _0x449479.enabledTracks[_0x3c8d79] = _0x24d6a8;
    var _0x180f16 = _0x449479.audioTracks;
    if (!_0x180f16) {
      return;
    }
    var _0x346dbe = _0x180f16[_0x3c8d79];
    if (_0x346dbe) {
      _0x346dbe.enabled = _0x24d6a8 ? true : false;
    }
  }
  function _0x2d8a6f(_0x38916d, _0x55a702) {
    var _0x37c1ec = _0x4ad4e7[_0x38916d].audioTracks;
    if (!_0x37c1ec) {
      return "";
    }
    var _0x35740b = _0x37c1ec[_0x55a702];
    if (_0x35740b) {
      return _0x35740b.language;
    } else {
      return "";
    }
  }
  function _0x309822(_0x21ff4d) {
    var _0x333f7f = _0x4ad4e7[_0x21ff4d].audioTracks;
    if (_0x333f7f) {
      return _0x333f7f.length;
    } else {
      return 1;
    }
  }
  function _0x30ef5d(_0x2963d8) {
    return _0x4ad4e7[_0x2963d8].videoHeight;
  }
  function _0x53579c(_0x25e57e) {
    var _0x2eab75 = _0x4ad4e7[_0x25e57e];
    return !_0x2eab75.paused && !_0x2eab75.ended;
  }
  function _0x9fd0d3(_0x2db431) {
    var _0x3c053d = _0x4ad4e7[_0x2db431];
    var _0x41ed6f = /(iPhone|iPad)/i.test(navigator.userAgent) ? _0x3c053d.HAVE_METADATA : _0x3c053d.HAVE_ENOUGH_DATA;
    if (!_0x3c053d.isReady && _0x3c053d.readyState >= _0x41ed6f) {
      _0x3c053d.isReady = true;
    }
    return _0x3c053d.isReady;
  }
  function _0x1c25ee(_0x19b25a) {
    var _0x41cae3 = _0x4ad4e7[_0x19b25a];
    _0x41cae3.pause();
    _0x47ed35(_0x19b25a);
    if (_0x41cae3.loopEndPollInterval) {
      clearInterval(_0x41cae3.loopEndPollInterval);
    }
  }
  function _0x1b58b5(_0x373741, _0x10314b) {
    var _0x1e7d49 = _0x4ad4e7[_0x373741];
    if (_0x1e7d49.loopEndPollInterval) {
      clearInterval(_0x1e7d49.loopEndPollInterval);
    }
    _0x1e7d49.loop = _0x10314b;
    if (_0x10314b) {
      _0x1e7d49.loopEndPollInterval = setInterval(function () {
        var _0x5f516e = _0x1e7d49.currentTime;
        var _0x389e0d = _0x1e7d49.lastSeenPlaybackTime;
        if (_0x5f516e < _0x389e0d) {
          var _0x16f964 = _0x1e7d49.duration;
          var _0x476452 = 0.2;
          var _0x31df44 = _0x476452 * _0x16f964;
          var _0x10c912 = _0x16f964 - _0x31df44;
          if (_0x5f516e < _0x31df44 && _0x389e0d > _0x10c912) {
            _0x1faa96.apply(_0x1e7d49);
          }
        }
        _0x1e7d49.lastSeenPlaybackTime = _0x1e7d49.currentTime;
      }, 1000 / 30);
      _0x1e7d49.lastSeenPlaybackTime = _0x1e7d49.currentTime;
      _0x1e7d49.onended = null;
    } else {
      _0x1e7d49.onended = _0x1faa96;
    }
  }
  function _0x4de7dc(_0x55a68c) {
    if (!_0x55a68c.enabledTracks) {
      return false;
    }
    for (var _0x6f4128 = 0; _0x6f4128 < _0x55a68c.enabledTracks.length; ++_0x6f4128) {
      if (_0x55a68c.enabledTracks[_0x6f4128]) {
        return false;
      }
    }
    return true;
  }
  function _0x18ad05(_0x321dee, _0x10401c) {
    if (Object.keys(_0x54d07b).length == 0) {
      window.addEventListener("mousedown", _0xe1d7dd);
    }
    _0x54d07b[_0x321dee] = _0x10401c;
  }
  function _0x271da8(_0x7c74d9, _0x58f297) {
    var _0x48eb1a = _0x4ad4e7[_0x7c74d9];
    _0x48eb1a.muted = _0x58f297 || _0x4de7dc(_0x48eb1a);
    var _0x3d49c8 = _0x48eb1a.play();
    if (_0x3d49c8) {
      _0x3d49c8.catch(function (_0x4a1b72) {
        if (_0x4a1b72.name == "NotAllowedError") {
          _0x18ad05(_0x7c74d9, _0x48eb1a);
        }
      });
    }
    _0x1b58b5(_0x7c74d9, _0x48eb1a.loop);
  }
  function _0x2bfbed(_0x1e249f, _0x200fd2) {
    var _0x32e8cd = _0x4ad4e7[_0x1e249f];
    _0x32e8cd.lastSeenPlaybackTime = _0x32e8cd.currentTime = _0x200fd2;
  }
  function _0x29e7f7(_0x29ca1b, _0x347854, _0x1cab53) {
    var _0x1be037 = _0x4ad4e7[_0x29ca1b];
    _0x1be037.onendedCallback = _0x1cab53;
    _0x1be037.onendedRef = _0x347854;
  }
  function _0x5652f6(_0x4aa009, _0x2f29b5, _0x4ad032) {
    _0x4ad4e7[_0x4aa009].onerror = function (_0xd706d2) {
      _0x36c69d(_0x4ad032, _0x2f29b5, _0xd706d2.target.error.code);
    };
  }
  function _0x36d981(_0x154587, _0x21b9cb) {
    var _0x44253e = _0x4ad4e7[_0x154587];
    _0x44253e.muted = _0x21b9cb || _0x4de7dc(_0x44253e);
  }
  function _0x2f711a(_0xd8ecc6, _0x41806f) {
    _0x4ad4e7[_0xd8ecc6].playbackRate = _0x41806f;
  }
  function _0x175036(_0x14b57f, _0x13d4cc, _0x1e8411) {
    _0x4ad4e7[_0x14b57f].oncanplay = function () {
      _0x25d2da(_0x1e8411, _0x13d4cc);
    };
  }
  function _0x13a44f(_0x2ec5d8, _0x1c9518, _0xaf21e6) {
    _0x4ad4e7[_0x2ec5d8].onseeked = function () {
      var _0x2ad759 = _0x4ad4e7[_0x2ec5d8];
      _0x2ad759.lastUpdateTextureTime = null;
      _0x25d2da(_0xaf21e6, _0x1c9518);
    };
  }
  function _0x18e1c9(_0x22ab3d, _0x35f16d) {
    _0x4ad4e7[_0x22ab3d].volume = _0x35f16d;
  }
  function _0x24d25c(_0x55a4e4) {
    return _0x4ad4e7[_0x55a4e4].currentTime;
  }
  function _0x31b1f1() {
    var _0x490783 = _0x149f8b.createTexture();
    _0x149f8b.bindTexture(_0x149f8b.TEXTURE_2D, _0x490783);
    _0x149f8b.texParameteri(_0x149f8b.TEXTURE_2D, _0x149f8b.TEXTURE_WRAP_S, _0x149f8b.CLAMP_TO_EDGE);
    _0x149f8b.texParameteri(_0x149f8b.TEXTURE_2D, _0x149f8b.TEXTURE_WRAP_T, _0x149f8b.CLAMP_TO_EDGE);
    _0x149f8b.texParameteri(_0x149f8b.TEXTURE_2D, _0x149f8b.TEXTURE_MIN_FILTER, _0x149f8b.LINEAR);
    return _0x490783;
  }
  var _0x1b5d74 = null;
  var _0x175a81 = null;
  var _0x589c32 = null;
  var _0x208bd3 = null;
  var _0x84f533 = null;
  function _0x1f85ab(_0xf98dc0, _0x48991c, _0x372c07) {
    var _0x2fcb44 = _0x4ad4e7[_0xf98dc0];
    if (!(_0x2fcb44.videoWidth > 0) || !(_0x2fcb44.videoHeight > 0)) {
      return false;
    }
    if (_0x2fcb44.lastUpdateTextureTime === _0x2fcb44.currentTime) {
      return false;
    }
    if (_0x2fcb44.seeking) {
      return false;
    }
    _0x2fcb44.lastUpdateTextureTime = _0x2fcb44.currentTime;
    _0x149f8b.pixelStorei(_0x149f8b.UNPACK_FLIP_Y_WEBGL, true);
    var _0x2ad07c = _0x372c07 ? _0x35241b ? _0x149f8b.RGBA : _0x149f8b.RGB : _0x149f8b.RGBA;
    var _0x9462c6 = _0x372c07 ? _0x35241b ? _0x149f8b.RGBA : _0x149f8b.RGB : _0x149f8b.RGBA;
    if (_0x2fcb44.previousUploadedWidth != _0x2fcb44.videoWidth || _0x2fcb44.previousUploadedHeight != _0x2fcb44.videoHeight) {
      _0x149f8b.deleteTexture(_0x58939e.textures[_0x48991c]);
      var _0x3e185c = _0x31b1f1();
      _0x3e185c.name = _0x48991c;
      _0x58939e.textures[_0x48991c] = _0x3e185c;
      _0x2fcb44.previousUploadedWidth = _0x2fcb44.videoWidth;
      _0x2fcb44.previousUploadedHeight = _0x2fcb44.videoHeight;
      if (_0x372c07) {
        _0x149f8b.texImage2D(_0x149f8b.TEXTURE_2D, 0, _0x2ad07c, _0x2fcb44.videoWidth, _0x2fcb44.videoHeight, 0, _0x9462c6, _0x149f8b.UNSIGNED_BYTE, null);
        if (!_0x1b5d74) {
          _0x1b5d74 = _0x31b1f1();
        } else {
          _0x149f8b.bindTexture(_0x149f8b.TEXTURE_2D, _0x1b5d74);
        }
      }
      _0x149f8b.texImage2D(_0x149f8b.TEXTURE_2D, 0, _0x2ad07c, _0x9462c6, _0x149f8b.UNSIGNED_BYTE, _0x2fcb44);
    } else {
      if (_0x372c07) {
        if (!_0x1b5d74) {
          _0x1b5d74 = _0x31b1f1();
        } else {
          _0x149f8b.bindTexture(_0x149f8b.TEXTURE_2D, _0x1b5d74);
        }
      } else {
        _0x149f8b.bindTexture(_0x149f8b.TEXTURE_2D, _0x58939e.textures[_0x48991c]);
      }
      _0x149f8b.texImage2D(_0x149f8b.TEXTURE_2D, 0, _0x2ad07c, _0x9462c6, _0x149f8b.UNSIGNED_BYTE, _0x2fcb44);
    }
    _0x149f8b.pixelStorei(_0x149f8b.UNPACK_FLIP_Y_WEBGL, false);
    if (_0x372c07) {
      if (_0x208bd3 == null) {
        var _0x2d93d7 = "precision lowp float;\n  \t\t\t\tattribute vec2 vertexPositionNDC;\n  \t\t\t\tvarying vec2 vTexCoords;\n  \t\t\t\tconst vec2 scale = vec2(0.5, 0.5);\n  \t\t\t\tvoid main() {\n  \t\t\t\t    vTexCoords = vertexPositionNDC * scale + scale; // scale vertex attribute to [0,1] range\n  \t\t\t\t    gl_Position = vec4(vertexPositionNDC, 0.0, 1.0);\n  \t\t\t\t}";
        var _0x2004c4 = "precision mediump float;\n  \t\t\t\tuniform sampler2D colorMap;\n  \t\t\t\tvarying vec2 vTexCoords;\n  \t\t\t\tvec4 toLinear(vec4 sRGB) {\n  \t\t\t\t    vec3 c = sRGB.rgb;\n  \t\t\t\t    return vec4(c * (c * (c * 0.305306011 + 0.682171111) + 0.012522878), sRGB.a);\n  \t\t\t\t}\n  \t\t\t\tvoid main() {\n  \t\t\t\t    gl_FragColor = toLinear(texture2D(colorMap, vTexCoords));\n  \t\t\t\t}";
        var _0x47db97 = _0x149f8b.createShader(_0x149f8b.VERTEX_SHADER);
        _0x149f8b.shaderSource(_0x47db97, _0x2d93d7);
        _0x149f8b.compileShader(_0x47db97);
        var _0xe28094 = _0x149f8b.createShader(_0x149f8b.FRAGMENT_SHADER);
        _0x149f8b.shaderSource(_0xe28094, _0x2004c4);
        _0x149f8b.compileShader(_0xe28094);
        _0x208bd3 = _0x149f8b.createProgram();
        _0x149f8b.attachShader(_0x208bd3, _0x47db97);
        _0x149f8b.attachShader(_0x208bd3, _0xe28094);
        _0x149f8b.linkProgram(_0x208bd3);
        _0x84f533 = _0x149f8b.getAttribLocation(_0x208bd3, "vertexPositionNDC");
      }
      if (_0x589c32 == null) {
        _0x589c32 = _0x149f8b.createBuffer();
        _0x149f8b.bindBuffer(_0x149f8b.ARRAY_BUFFER, _0x589c32);
        var _0x77e3e6 = [1, 1, -1, 1, -1, -1, -1, -1, 1, -1, 1, 1];
        _0x149f8b.bufferData(_0x149f8b.ARRAY_BUFFER, new Float32Array(_0x77e3e6), _0x149f8b.STATIC_DRAW);
      }
      if (!_0x175a81) {
        _0x175a81 = _0x149f8b.createFramebuffer();
      }
      _0x149f8b.bindFramebuffer(_0x149f8b.FRAMEBUFFER, _0x175a81);
      _0x149f8b.framebufferTexture2D(_0x149f8b.FRAMEBUFFER, _0x149f8b.COLOR_ATTACHMENT0, _0x149f8b.TEXTURE_2D, _0x58939e.textures[_0x48991c], 0);
      _0x149f8b.bindTexture(_0x149f8b.TEXTURE_2D, _0x1b5d74);
      _0x149f8b.viewport(0, 0, _0x2fcb44.videoWidth, _0x2fcb44.videoHeight);
      _0x149f8b.useProgram(_0x208bd3);
      _0x149f8b.bindBuffer(_0x149f8b.ARRAY_BUFFER, _0x589c32);
      _0x149f8b.enableVertexAttribArray(_0x84f533);
      _0x149f8b.vertexAttribPointer(_0x84f533, 2, _0x149f8b.FLOAT, false, 0, 0);
      _0x149f8b.drawArrays(_0x149f8b.TRIANGLES, 0, 6);
      _0x149f8b.viewport(0, 0, _0x149f8b.canvas.width, _0x149f8b.canvas.height);
      _0x149f8b.bindFramebuffer(_0x149f8b.FRAMEBUFFER, null);
    }
    return true;
  }
  function _0x2c4edd(_0x154424) {
    return _0x4ad4e7[_0x154424].videoWidth;
  }
  var _0xb5c3cf = {
    requests: {},
    responses: {},
    abortControllers: {},
    timer: {},
    nextRequestId: 1
  };
  function _0x304e0f(_0x23294) {
    var _0x16623d = _0xb5c3cf.abortControllers[_0x23294];
    if (!_0x16623d || _0x16623d.signal.aborted) {
      return;
    }
    _0x16623d.abort();
  }
  function _0x90be09(_0x353b12, _0x19ab59) {
    var _0x26ce50 = _0x5c2e85(_0x353b12);
    var _0x2c66d8 = _0x5c2e85(_0x19ab59);
    var _0x4b7659 = new AbortController();
    var _0x181887 = {
      url: _0x26ce50,
      init: {
        method: _0x2c66d8,
        signal: _0x4b7659.signal,
        headers: {},
        enableStreamingDownload: true
      },
      tempBuffer: null,
      tempBufferSize: 0
    };
    _0xb5c3cf.abortControllers[_0xb5c3cf.nextRequestId] = _0x4b7659;
    _0xb5c3cf.requests[_0xb5c3cf.nextRequestId] = _0x181887;
    return _0xb5c3cf.nextRequestId++;
  }
  function _0x1b4f52(_0x5f3a56) {
    var _0x1b8bc1 = _0xb5c3cf.responses[_0x5f3a56];
    if (!_0x1b8bc1) {
      return "";
    }
    if (_0x1b8bc1.headerString) {
      return _0x1b8bc1.headerString;
    }
    var _0x5e7541 = "";
    var _0x4828c6 = _0x1b8bc1.headers.entries();
    for (var _0x3bebb1 = _0x4828c6.next(); !_0x3bebb1.done; _0x3bebb1 = _0x4828c6.next()) {
      _0x5e7541 += _0x3bebb1.value[0] + ": " + _0x3bebb1.value[1] + "\r\n";
    }
    _0x1b8bc1.headerString = _0x5e7541;
    return _0x5e7541;
  }
  function _0x37f2b7(_0x186651, _0x20630c, _0x5485f2, _0x21615b, _0x520dfa) {
    var _0xd5b3f0 = _0xb5c3cf.responses[_0x186651];
    if (!_0xd5b3f0) {
      _0x409466("", _0x20630c, _0x5485f2);
      _0x409466("", _0x21615b, _0x520dfa);
      return;
    }
    if (_0x20630c) {
      var _0x183eb9 = _0x1b4f52(_0x186651);
      _0x409466(_0x183eb9, _0x20630c, _0x5485f2);
    }
    if (_0x21615b) {
      _0x409466(_0xd5b3f0.url, _0x21615b, _0x520dfa);
    }
  }
  function _0x1107d8(_0x3006a3, _0x3d078d) {
    var _0xe540be = _0xb5c3cf.responses[_0x3006a3];
    if (!_0xe540be) {
      _0x4cad96[_0x3d078d >> 2] = 0;
      _0x4cad96[(_0x3d078d >> 2) + 1] = 0;
      return;
    }
    var _0x589e9d = _0x1b4f52(_0x3006a3);
    _0x4cad96[_0x3d078d >> 2] = _0x247116(_0x589e9d);
    _0x4cad96[(_0x3d078d >> 2) + 1] = _0x247116(_0xe540be.url);
  }
  function _0x25a4be(_0xf3c95f) {
    if (_0xb5c3cf.timer[_0xf3c95f]) {
      clearTimeout(_0xb5c3cf.timer[_0xf3c95f]);
    }
    delete _0xb5c3cf.requests[_0xf3c95f];
    delete _0xb5c3cf.responses[_0xf3c95f];
    delete _0xb5c3cf.abortControllers[_0xf3c95f];
    delete _0xb5c3cf.timer[_0xf3c95f];
  }
  function _0x44e91(_0x21e987, _0x282d5f, _0x3c9104, _0x27d7ee, _0x1732fe, _0x471f96) {
    var _0x4ab8e9 = _0xb5c3cf.requests[_0x21e987];
    var _0x436b02 = _0xb5c3cf.abortControllers[_0x21e987];
    function _0x3baaae(_0xa7d183) {
      if (!_0x4ab8e9.tempBuffer) {
        const _0x36289b = Math.max(_0xa7d183, 1024);
        _0x4ab8e9.tempBuffer = _0x2a1ebe(_0x36289b);
        _0x4ab8e9.tempBufferSize = _0x36289b;
      }
      if (_0x4ab8e9.tempBufferSize < _0xa7d183) {
        _0x2933c1(_0x4ab8e9.tempBuffer);
        _0x4ab8e9.tempBuffer = _0x2a1ebe(_0xa7d183);
        _0x4ab8e9.tempBufferSize = _0xa7d183;
      }
      return _0x4ab8e9.tempBuffer;
    }
    function _0x3ba8ea() {
      if (_0xb5c3cf.timer[_0x21e987]) {
        clearTimeout(_0xb5c3cf.timer[_0x21e987]);
        delete _0xb5c3cf.timer[_0x21e987];
      }
    }
    function _0x8d4870(_0x4171c1, _0x394959) {
      _0x3ba8ea();
      if (!_0x1732fe) {
        return;
      }
      var _0x428ef7 = 0;
      if (_0x4ab8e9.init.enableStreamingDownload) {
        _0x2748a0("viiiiii", _0x1732fe, [_0x27d7ee, _0x4171c1.status, 0, _0x394959.length, 0, _0x428ef7]);
      } else if (_0x394959.length != 0) {
        var _0x347801 = _0x2a1ebe(_0x394959.length);
        _0x950143.set(_0x394959, _0x347801);
        _0x2748a0("viiiiii", _0x1732fe, [_0x27d7ee, _0x4171c1.status, _0x347801, _0x394959.length, 0, _0x428ef7]);
      } else {
        _0x2748a0("viiiiii", _0x1732fe, [_0x27d7ee, _0x4171c1.status, 0, 0, 0, _0x428ef7]);
      }
      if (_0x4ab8e9.tempBuffer) {
        _0x2933c1(_0x4ab8e9.tempBuffer);
      }
    }
    function _0x58fc6b(_0x44163f, _0x161986) {
      _0x3ba8ea();
      if (!_0x1732fe) {
        return;
      }
      var _0x49784d = _0x247116(_0x44163f) + 1;
      var _0x2bbd24 = _0x2a1ebe(_0x49784d);
      _0x409466(_0x44163f, _0x2bbd24, _0x49784d);
      _0x2748a0("viiiiii", _0x1732fe, [_0x27d7ee, 500, 0, 0, _0x2bbd24, _0x161986]);
      _0x2933c1(_0x2bbd24);
      if (_0x4ab8e9.tempBuffer) {
        _0x2933c1(_0x4ab8e9.tempBuffer);
      }
    }
    function _0xe548bf(_0x19e9bd) {
      if (!_0x471f96 || !_0x19e9bd.lengthComputable) {
        return;
      }
      var _0x1fda66 = _0x19e9bd.response;
      _0xb5c3cf.responses[_0x21e987] = _0x1fda66;
      if (_0x19e9bd.chunk) {
        var _0x4b74b5 = _0x3baaae(_0x19e9bd.chunk.length);
        _0x950143.set(_0x19e9bd.chunk, _0x4b74b5);
        _0x2748a0("viiiiii", _0x471f96, [_0x27d7ee, _0x1fda66.status, _0x19e9bd.loaded, _0x19e9bd.total, _0x4b74b5, _0x19e9bd.chunk.length]);
      } else {
        _0x2748a0("viiiiii", _0x471f96, [_0x27d7ee, _0x1fda66.status, _0x19e9bd.loaded, _0x19e9bd.total, 0, 0]);
      }
    }
    try {
      if (_0x3c9104 > 0) {
        var _0x29e9f1 = _0x950143.subarray(_0x282d5f, _0x282d5f + _0x3c9104);
        _0x4ab8e9.init.body = new Blob([_0x29e9f1]);
      }
      if (_0x4ab8e9.timeout) {
        _0xb5c3cf.timer[_0x21e987] = setTimeout(function () {
          _0x4ab8e9.isTimedOut = true;
          _0x436b02.abort();
        }, _0x4ab8e9.timeout);
      }
      var _0xd9b0bb = _0x289557.fetchWithProgress;
      _0x4ab8e9.init.onProgress = _0xe548bf;
      if (_0x289557.companyName && _0x289557.productName && _0x289557.cachedFetch) {
        _0xd9b0bb = _0x289557.cachedFetch;
        _0x4ab8e9.init.companyName = _0x289557.companyName;
        _0x4ab8e9.init.productName = _0x289557.productName;
        _0x4ab8e9.control = _0x289557.cacheControl(_0x4ab8e9.url);
      }
      _0xd9b0bb(_0x4ab8e9.url, _0x4ab8e9.init).then(function (_0x3f3512) {
        _0xb5c3cf.responses[_0x21e987] = _0x3f3512;
        _0x8d4870(_0x3f3512, _0x3f3512.parsedBody);
      }).catch(function (_0x93a266) {
        var _0x2f1818 = 2;
        var _0x35f25b = 17;
        var _0x238b98 = 14;
        if (_0x4ab8e9.isTimedOut) {
          _0x58fc6b("Connection timed out.", _0x238b98);
        } else if (_0x436b02.signal.aborted) {
          _0x58fc6b("Aborted.", _0x35f25b);
        } else {
          _0x58fc6b(_0x93a266.message, _0x2f1818);
        }
      });
    } catch (_0x545cfd) {
      var _0x52c1a1 = 2;
      _0x58fc6b(_0x545cfd.message, _0x52c1a1);
    }
  }
  function _0x200a70(_0x1ef01c, _0x58a0af) {
    var _0xd0da8 = _0xb5c3cf.requests[_0x1ef01c];
    if (!_0xd0da8) {
      return;
    }
    _0xd0da8.init.redirect = _0x58a0af === 0 ? "error" : "follow";
  }
  function _0x55a7d5(_0x1af5a6, _0x19685e, _0x4cf1f1) {
    var _0x540fb5 = _0xb5c3cf.requests[_0x1af5a6];
    if (!_0x540fb5) {
      return;
    }
    var _0x5b825e = _0x5c2e85(_0x19685e);
    var _0x4cfece = _0x5c2e85(_0x4cf1f1);
    _0x540fb5.init.headers[_0x5b825e] = _0x4cfece;
  }
  function _0x509112(_0x28d44d, _0x20d231) {
    var _0x35fb96 = _0xb5c3cf.requests[_0x28d44d];
    if (!_0x35fb96) {
      return;
    }
    _0x35fb96.timeout = _0x20d231;
  }
  function _0x5ef46b(_0x423f2d, _0x28ddd5, _0x4163f3, _0x478a86) {
    var _0x1fd746 = _0x5c2e85(_0x423f2d);
    var _0x9b7ce3 = _0x5c2e85(_0x28ddd5);
    var _0x19bf48 = _0x5c2e85(_0x4163f3);
    var _0x12c41e = _0x5c2e85(_0x478a86);
    try {
      firebase.database().ref(_0x1fd746).on("child_added", function (_0x8c79e1) {
        window.unityInstance.SendMessage(_0x9b7ce3, _0x19bf48, JSON.stringify(_0x8c79e1.val()));
      });
    } catch (_0x48fe7c) {
      window.unityInstance.SendMessage(_0x9b7ce3, _0x12c41e, JSON.stringify(_0x48fe7c, Object.getOwnPropertyNames(_0x48fe7c)));
    }
  }
  function _0x544ad9(_0x269a71, _0x4614ec, _0x5313c2, _0x3e03f8) {
    var _0x7fb6b3 = _0x5c2e85(_0x269a71);
    var _0x2d55f8 = _0x5c2e85(_0x4614ec);
    var _0x25ba65 = _0x5c2e85(_0x5313c2);
    var _0x1de4bf = _0x5c2e85(_0x3e03f8);
    try {
      firebase.database().ref(_0x7fb6b3).on("child_changed", function (_0x71337) {
        window.unityInstance.SendMessage(_0x2d55f8, _0x25ba65, JSON.stringify(_0x71337.val()));
      });
    } catch (_0x2860ea) {
      window.unityInstance.SendMessage(_0x2d55f8, _0x1de4bf, JSON.stringify(_0x2860ea, Object.getOwnPropertyNames(_0x2860ea)));
    }
  }
  function _0x17ed53(_0x395285, _0x5d7340, _0x45ab29, _0x284d59) {
    var _0x569148 = _0x5c2e85(_0x395285);
    var _0x3fcf6c = _0x5c2e85(_0x5d7340);
    var _0x5a9332 = _0x5c2e85(_0x45ab29);
    var _0x2ee6a6 = _0x5c2e85(_0x284d59);
    try {
      firebase.database().ref(_0x569148).on("child_removed", function (_0xbc166e) {
        window.unityInstance.SendMessage(_0x3fcf6c, _0x5a9332, JSON.stringify(_0xbc166e.val()));
      });
    } catch (_0x4a685d) {
      window.unityInstance.SendMessage(_0x3fcf6c, _0x2ee6a6, JSON.stringify(_0x4a685d, Object.getOwnPropertyNames(_0x4a685d)));
    }
  }
  function _0x8ab9a7(_0xddff2e, _0x5e0e39, _0x1e5c6b, _0x378c79, _0x232f83) {
    var _0x469480 = _0x5c2e85(_0xddff2e);
    var _0x5d6fe4 = _0x5c2e85(_0x1e5c6b);
    var _0x5cc719 = _0x5c2e85(_0x378c79);
    var _0x4cc22b = _0x5c2e85(_0x232f83);
    try {
      if (typeof firestorelisteners === "undefined") {
        firestorelisteners = {};
      }
      this.firestorelisteners[_0x469480 + "/collection/"] = firebase.firestore().collection(_0x469480).onSnapshot({
        includeMetadataChanges: _0x5e0e39 == 1
      }, function (_0x206b41) {
        var _0x33501d = {};
        _0x206b41.forEach(function (_0x5a3338) {
          _0x33501d[_0x5a3338.id] = _0x5a3338.data();
        });
        window.unityInstance.SendMessage(_0x5d6fe4, _0x5cc719, JSON.stringify(_0x33501d));
      }, function (_0x53a2a5) {
        window.unityInstance.SendMessage(_0x5d6fe4, _0x4cc22b, JSON.stringify(_0x53a2a5, Object.getOwnPropertyNames(_0x53a2a5)));
      });
    } catch (_0x4cf295) {
      window.unityInstance.SendMessage(_0x5d6fe4, _0x4cc22b, JSON.stringify(_0x4cf295, Object.getOwnPropertyNames(_0x4cf295)));
    }
  }
  function _0x549465(_0x22d41c, _0x132e2d, _0x30e8e9, _0x433d70, _0x27d7cd, _0x4c3f10) {
    var _0x877306 = _0x5c2e85(_0x22d41c);
    var _0x4b05e2 = _0x5c2e85(_0x132e2d);
    var _0x1e99e4 = _0x5c2e85(_0x433d70);
    var _0x40e26e = _0x5c2e85(_0x27d7cd);
    var _0x13cc36 = _0x5c2e85(_0x4c3f10);
    try {
      if (typeof firestorelisteners === "undefined") {
        firestorelisteners = {};
      }
      this.firestorelisteners[_0x877306 + "/" + _0x4b05e2] = firebase.firestore().collection(_0x877306).doc(_0x4b05e2).onSnapshot({
        includeMetadataChanges: _0x30e8e9 == 1
      }, function (_0x4e4ec0) {
        window.unityInstance.SendMessage(_0x1e99e4, _0x40e26e, JSON.stringify(_0x4e4ec0.data()));
      }, function (_0xea5804) {
        window.unityInstance.SendMessage(_0x1e99e4, _0x13cc36, JSON.stringify(_0xea5804, Object.getOwnPropertyNames(_0xea5804)));
      });
    } catch (_0x5b841c) {
      window.unityInstance.SendMessage(_0x1e99e4, _0x13cc36, JSON.stringify(_0x5b841c, Object.getOwnPropertyNames(_0x5b841c)));
    }
  }
  function _0x3903b3(_0x9f71d2, _0xf89c06, _0x9089f8, _0x25d393) {
    var _0x498d2c = _0x5c2e85(_0x9f71d2);
    var _0x41b82f = _0x5c2e85(_0xf89c06);
    var _0x13f5ea = _0x5c2e85(_0x9089f8);
    var _0x269e81 = _0x5c2e85(_0x25d393);
    try {
      firebase.database().ref(_0x498d2c).on("value", function (_0x293335) {
        window.unityInstance.SendMessage(_0x41b82f, _0x13f5ea, JSON.stringify(_0x293335.val()));
      });
    } catch (_0xa9e9a9) {
      window.unityInstance.SendMessage(_0x41b82f, _0x269e81, JSON.stringify(_0xa9e9a9, Object.getOwnPropertyNames(_0xa9e9a9)));
    }
  }
  function _0x334014(_0x58a754) {
    var _0x52d49c = _0x5c2e85(_0x58a754);
    firebaseLogEvent(_0x52d49c);
  }
  function _0x56aec3(_0x617e3f, _0x3130c9) {
    var _0x3957cc = _0x5c2e85(_0x617e3f);
    var _0x193899 = JSON.parse(_0x5c2e85(_0x3130c9));
    firebaseLogEventParameter(_0x3957cc, _0x193899);
  }
  function _0x189d7c(_0x5888c1, _0x2d90c9, _0x3e2722, _0x4a3b39, _0x4a90cb) {
    var _0x3eb6d0 = _0x5c2e85(_0x5888c1);
    var _0x2abefd = _0x5c2e85(_0x3e2722);
    var _0x45d414 = _0x5c2e85(_0x4a3b39);
    var _0x23c781 = _0x5c2e85(_0x4a90cb);
    try {
      firebase.database().ref(_0x3eb6d0).transaction(function (_0x4e1d03) {
        if (!isNaN(_0x4e1d03)) {
          return _0x4e1d03 + _0x2d90c9;
        } else {
          return _0x2d90c9;
        }
      }).then(function (_0xb501da) {
        window.unityInstance.SendMessage(_0x2abefd, _0x45d414, "Success: transaction run in " + _0x3eb6d0);
      });
    } catch (_0x5e9ec2) {
      window.unityInstance.SendMessage(_0x2abefd, _0x23c781, JSON.stringify(_0x5e9ec2, Object.getOwnPropertyNames(_0x5e9ec2)));
    }
  }
  function _0x21d779(_0xfdf4b4, _0x193f8d, _0x38c40e) {
    var _0x310b2d = _0x5c2e85(_0xfdf4b4);
    var _0x57126c = _0x5c2e85(_0x193f8d);
    var _0x1406c1 = _0x5c2e85(_0x38c40e);
    firebase.auth().onAuthStateChanged(function (_0x344882) {
      if (_0x344882) {
        window.unityInstance.SendMessage(_0x310b2d, _0x57126c, JSON.stringify(_0x344882));
      } else {
        window.unityInstance.SendMessage(_0x310b2d, _0x1406c1, "User signed out");
      }
    });
  }
  function _0x4b0baf(_0x539783) {
    window.wgUnityInstance = _0x289557;
    try {
      window[preroll.config.loaderObjectName].log("WGSDK: WeeGoo InGame Ad, pinging.");
      window[preroll.config.loaderObjectName].ping(_0x539783);
    } catch (_0x1301a5) {
      console.log("WGSDK: No production WGSDK resources found, loading development resources.");
      var _0x114ef7 = document.createElement("script");
      _0x114ef7.addEventListener("load", function (_0x371173) {
        var _0x38f247 = document.createElement("script");
        _0x38f247.addEventListener("load", function (_0x267ef6) {
          console.log("WGSDK: Development resources loaded.");
          _0x1dc1fc(_0x539783, true);
        }.bind(this));
        document.getElementsByTagName("head")[0].appendChild(_0x38f247);
        _0x38f247.src = window.GMSOFT_ADS_INFO.wgLibrary;
      }.bind(this));
      document.getElementsByTagName("head")[0].appendChild(_0x114ef7);
      _0x114ef7.src = window.GMSOFT_ADS_INFO.wgConf;
    }
  }
  function _0x1dc1fc(_0x86b7b8, _0x28349d) {
    var _0x3c7176;
    if (_0x28349d === true) {
      _0x3c7176 = _0x86b7b8;
    } else {
      _0x3c7176 = _0x5c2e85(_0x86b7b8);
    }
    setTimeout(function () {
      _0x4b0baf(_0x3c7176);
    }, 250);
  }
  function _0x5aba71(_0x333b23, _0x2b06f0, _0xfd2b5c, _0x46f470, _0x249101) {
    var _0x5db0c0 = _0x5c2e85(_0x333b23);
    var _0x15ca65 = _0x5c2e85(_0x2b06f0);
    var _0x7235dc = _0x5c2e85(_0xfd2b5c);
    var _0x139f33 = _0x5c2e85(_0x46f470);
    var _0x59027d = _0x5c2e85(_0x249101);
    try {
      firebase.database().ref(_0x5db0c0).set(JSON.parse(_0x15ca65)).then(function (_0x2929aa) {
        window.unityInstance.SendMessage(_0x7235dc, _0x139f33, "Success: " + _0x15ca65 + " was posted to " + _0x5db0c0);
      });
    } catch (_0xacac2b) {
      window.unityInstance.SendMessage(_0x7235dc, _0x59027d, JSON.stringify(_0xacac2b, Object.getOwnPropertyNames(_0xacac2b)));
    }
  }
  function _0xf6dafd(_0x47ce99, _0x5f777d, _0x5e7846, _0x284273, _0x36b6db) {
    var _0x12e510 = _0x5c2e85(_0x47ce99);
    var _0x5d6edc = _0x5c2e85(_0x5f777d);
    var _0x2deb5c = _0x5c2e85(_0x5e7846);
    var _0x3c6cef = _0x5c2e85(_0x284273);
    var _0x3aa3e6 = _0x5c2e85(_0x36b6db);
    try {
      firebase.database().ref(_0x12e510).push().set(JSON.parse(_0x5d6edc)).then(function (_0x42e308) {
        window.unityInstance.SendMessage(_0x2deb5c, _0x3c6cef, "Success: " + _0x5d6edc + " was pushed to " + _0x12e510);
      });
    } catch (_0x30894a) {
      window.unityInstance.SendMessage(_0x2deb5c, _0x3aa3e6, JSON.stringify(_0x30894a, Object.getOwnPropertyNames(_0x30894a)));
    }
  }
  function _0x16793e() {
    try {
      window[preroll.config.loaderObjectName].log("WGSDK: Refetching reward ad.");
      window[preroll.config.loaderObjectName].rewarded.initSlot.call(window[preroll.config.loaderObjectName]);
    } catch (_0x1a1874) {
      console.log("No WeeGooAFG implementation found!");
    }
  }
  function _0x1ba825() {
    try {
      window[preroll.config.loaderObjectName].log("WGSDK: Game controls registered.");
      window[window.preroll.config.loaderObjectName].registerGameControls(_0x289557);
    } catch (_0x52613b) {
      console.log("WGSDK: Can not register game controls.");
      setTimeout(function () {
        _0x1ba825();
      }, 250);
    }
  }
  function _0x3dd804() {
    try {
      window[preroll.config.loaderObjectName].log("WGSDK: Reward callbacks registered.");
      window[window.preroll.config.loaderObjectName].registerRewardCallbacks({
        onReady: "OnReadyMethod",
        onSuccess: "OnSuccessMethod",
        onFail: "OnFailMethod"
      });
    } catch (_0x466296) {
      console.log("WGSDK: Can not register reward ad callbacks.");
      _0x325726();
    }
  }
  function _0x325726() {
    setTimeout(function () {
      _0x3dd804();
    }, 250);
  }
  function _0x201790(_0x5bb0f9, _0x2a1934, _0x4feafa, _0x28f14b, _0x1d80a2, _0x3eef48, _0x4ae91c) {
    var _0x3d9d50 = _0x5c2e85(_0x5bb0f9);
    var _0x5b0986 = _0x5c2e85(_0x2a1934);
    var _0x236014 = _0x5c2e85(_0x4feafa);
    var _0x1f9340 = _0x5c2e85(_0x28f14b);
    var _0x15cfb0 = _0x5c2e85(_0x1d80a2);
    var _0x104147 = _0x5c2e85(_0x3eef48);
    var _0x290ff9 = _0x5c2e85(_0x4ae91c);
    try {
      var _0x28f14b = {};
      _0x28f14b[_0x236014] = firebase.firestore.FieldValue.arrayRemove(JSON.parse(_0x1f9340));
      firebase.firestore().collection(_0x3d9d50).doc(_0x5b0986).update(_0x28f14b).then(function () {
        window.unityInstance.SendMessage(_0x15cfb0, _0x104147, "Success: element " + _0x1f9340 + " was removed in " + _0x236014);
      }).catch(function (_0x52c97c) {
        window.unityInstance.SendMessage(_0x15cfb0, _0x290ff9, JSON.stringify(_0x52c97c, Object.getOwnPropertyNames(_0x52c97c)));
      });
    } catch (_0x11f7e6) {
      window.unityInstance.SendMessage(_0x15cfb0, _0x290ff9, JSON.stringify(_0x11f7e6, Object.getOwnPropertyNames(_0x11f7e6)));
    }
  }
  function _0x4a2dea(_0x10df03) {
    var _0x296a10 = window.unityStringify(_0x10df03);
    var _0x192b0a = {
      adStarted: function () {
        window.UnitySDK.unlockPointer();
        _0x187a5c("CrazySDKSingleton", "JSLibCallback_AdStarted");
      },
      adFinished: function () {
        window.UnitySDK.lockPointer();
        _0x187a5c("CrazySDKSingleton", "JSLibCallback_AdFinished");
      },
      adError: function (_0x37fcf0) {
        _0x187a5c("CrazySDKSingleton", "JSLibCallback_AdError", JSON.stringify(_0x37fcf0));
      }
    };
    window.CrazyGames.SDK.ad.requestAd(_0x296a10, _0x192b0a).catch(function (_0xdca71a) {
      window.UnitySDK.logError("Error while requesting ad:", _0xdca71a);
      _0x187a5c("CrazySDKSingleton", "JSLibCallback_AdError", JSON.stringify({
        code: "unknown",
        message: _0xdca71a.message || "Unknown error"
      }));
    });
  }
  function _0x4de833(_0x51a4c4) {
    var _0x3967d6 = JSON.parse(window.unityStringify(_0x51a4c4));
    try {
      window.CrazyGames.SDK.banner.requestOverlayBanners(_0x3967d6, function (_0x16cfce, _0x38dbcb, _0x487d00) {});
    } catch (_0x366b36) {
      window.UnitySDK.logError("Error while requesting banners:", _0x366b36);
    }
  }
  function _0x8d6014(_0x4a7895) {
    var _0x5e7bda = JSON.parse(window.unityStringify(_0x4a7895));
    var _0x40b613 = "";
    try {
      _0x40b613 = window.CrazyGames.SDK.game.inviteLink(_0x5e7bda);
    } catch (_0x419ff1) {
      window.UnitySDK.logError("Error while requesting invite url:", _0x419ff1);
    }
    var _0x557eec = _0x247116(_0x40b613) + 1;
    var _0x5c60da = _0x2a1ebe(_0x557eec);
    _0x409466(_0x40b613, _0x5c60da, _0x557eec);
    return _0x5c60da;
  }
  function _0x3345d3(_0x176cec) {
    _0x176cec = _0x5c2e85(_0x176cec);
    window.GD_OPTIONS = {
      debug: false,
      gameId: _0x176cec,
      onEvent: function (_0x5c7598) {
        switch (_0x5c7598.name) {
          case "SDK_GAME_START":
            _0x187a5c("GameDistribution", "ResumeGameCallback");
            break;
          case "SDK_GAME_PAUSE":
            _0x187a5c("GameDistribution", "PauseGameCallback");
            break;
          case "SDK_REWARDED_WATCH_COMPLETE":
            _0x187a5c("GameDistribution", "RewardedCompleteCallback");
            break;
          case "SDK_ERROR":
            break;
          default:
            _0x187a5c("GameDistribution", "EventCallback", _0x5c7598.name);
        }
      }
    };
    (function (_0x40e6f1, _0x3861eb, _0x3a06b2) {
      var _0x573fb9;
      var _0x3f138c = _0x40e6f1.getElementsByTagName(_0x3861eb)[0];
      if (_0x40e6f1.getElementById(_0x3a06b2)) {
        return;
      }
      _0x573fb9 = _0x40e6f1.createElement(_0x3861eb);
      _0x573fb9.id = _0x3a06b2;
      _0x573fb9.src = "//html5.api.gamedistribution.com/main.min.js";
      _0x3f138c.parentNode.insertBefore(_0x573fb9, _0x3f138c);
    })(document, "script", "gamedistribution-jssdk");
  }
  function _0x4b61b3() {
    if (typeof gdsdk !== "undefined" && typeof gdsdk.preloadAd !== "undefined") {
      gdsdk.preloadAd(gdsdk.AdType.Rewarded).then(function (_0x59b6cc) {
        _0x187a5c("GameDistribution", "PreloadRewardedVideoCallback", 1);
      }).catch(function (_0x39a0fa) {
        _0x187a5c("GameDistribution", "PreloadRewardedVideoCallback", 0);
      });
    }
  }
  function _0x4660c9(_0x1fd9fd) {
    _0x1fd9fd = _0x5c2e85(_0x1fd9fd);
    if (typeof gdsdk !== "undefined" && typeof gdsdk.sendEvent !== "undefined" && typeof _0x1fd9fd !== "undefined") {
      gdsdk.sendEvent(_0x1fd9fd).then(function (_0x5cf12a) {
        console.log("Game event post message sent Succesfully...");
      }).catch(function (_0x2e775a) {
        console.log(_0x2e775a.message);
      });
    }
  }
  function _0x8afd1c(_0x3d3ac7) {
    if (typeof gdsdk !== "undefined" && typeof gdsdk.showAd !== "undefined") {
      _0x3d3ac7 = _0x5c2e85(_0x3d3ac7) || gdsdk.AdType.Interstitial;
      gdsdk.showAd(_0x3d3ac7).then(function (_0x4b4c1a) {
        if (_0x3d3ac7 === gdsdk.AdType.Rewarded) {
          _0x187a5c("GameDistribution", "RewardedVideoSuccessCallback");
        }
      }).catch(function (_0x1551f8) {
        if (_0x3d3ac7 === gdsdk.AdType.Rewarded) {
          _0x187a5c("GameDistribution", "RewardedVideoFailureCallback");
        }
      });
    }
  }
  function _0x5c373b(_0x41eff7, _0x36910f, _0x579bf5, _0x51e99b, _0x5f2618, _0x2cda87) {
    var _0x57bac9 = _0x5c2e85(_0x41eff7);
    var _0x53d160 = _0x5c2e85(_0x36910f);
    var _0x2439c3 = _0x5c2e85(_0x579bf5);
    var _0x482883 = _0x5c2e85(_0x51e99b);
    var _0x221631 = _0x5c2e85(_0x5f2618);
    var _0x11e0b6 = _0x5c2e85(_0x2cda87);
    try {
      firebase.firestore().collection(_0x57bac9).doc(_0x53d160).set(JSON.parse(_0x2439c3)).then(function () {
        window.unityInstance.SendMessage(_0x482883, _0x221631, "Success: document " + _0x53d160 + " was set");
      }).catch(function (_0x3ca988) {
        window.unityInstance.SendMessage(_0x482883, _0x11e0b6, JSON.stringify(_0x3ca988, Object.getOwnPropertyNames(_0x3ca988)));
      });
    } catch (_0x13bb17) {
      window.unityInstance.SendMessage(_0x482883, _0x11e0b6, JSON.stringify(_0x13bb17, Object.getOwnPropertyNames(_0x13bb17)));
    }
  }
  function _0x321ffb(_0x7a5e4) {
    var _0x40ce99 = JSON.parse(_0x5c2e85(_0x7a5e4));
    firebaseSetUserProperties(_0x40ce99);
  }
  function _0xd0331a() {
    window.CrazyGames.SDK.user.showAccountLinkPrompt().then(function (_0x524bba) {
      _0x187a5c("CrazySDKSingleton", "JSLibCallback_ShowAccountLinkPrompt", JSON.stringify({
        linkAccountResponseStr: JSON.stringify(_0x524bba)
      }));
    }).catch(function (_0x592ca1) {
      _0x187a5c("CrazySDKSingleton", "JSLibCallback_ShowAccountLinkPrompt", JSON.stringify({
        errorJson: JSON.stringify(_0x592ca1)
      }));
    });
  }
  function _0x11e7fb() {
    window.CrazyGames.SDK.user.showAuthPrompt().then(function (_0x3c5665) {
      _0x187a5c("CrazySDKSingleton", "JSLibCallback_ShowAuthPrompt", JSON.stringify({
        userJson: JSON.stringify(_0x3c5665)
      }));
    }).catch(function (_0x957365) {
      _0x187a5c("CrazySDKSingleton", "JSLibCallback_ShowAuthPrompt", JSON.stringify({
        errorJson: JSON.stringify(_0x957365)
      }));
    });
  }
  function _0x292365(_0x7a7974) {
    var _0x1e18cf = JSON.parse(window.unityStringify(_0x7a7974));
    var _0x405249 = "";
    try {
      _0x405249 = window.CrazyGames.SDK.game.showInviteButton(_0x1e18cf);
    } catch (_0x5a2854) {
      window.UnitySDK.logError("Error while showing invite button:", _0x5a2854);
    }
    var _0x33f731 = _0x247116(_0x405249) + 1;
    var _0xbac26e = _0x2a1ebe(_0x33f731);
    _0x409466(_0x405249, _0xbac26e, _0x33f731);
    return _0xbac26e;
  }
  function _0x5274be() {
    window[preroll.config.loaderObjectName].showRewardAd();
  }
  function _0x53a517(_0x1b2c3d, _0x3ceb1a, _0x2f7ce2) {
    var _0x1f2666 = _0x5c2e85(_0x1b2c3d);
    var _0x200240 = _0x5c2e85(_0x3ceb1a);
    var _0x5f2ef5 = _0x5c2e85(_0x2f7ce2);
    try {
      firebase.auth().signInAnonymously().then(function (_0x58039d) {
        window.unityInstance.SendMessage(_0x1f2666, _0x200240, "Success: signed up for " + _0x58039d);
      }).catch(function (_0x3ea3cf) {
        window.unityInstance.SendMessage(_0x1f2666, _0x5f2ef5, JSON.stringify(_0x3ea3cf, Object.getOwnPropertyNames(_0x3ea3cf)));
      });
    } catch (_0xa058ac) {
      window.unityInstance.SendMessage(_0x1f2666, _0x5f2ef5, JSON.stringify(_0xa058ac, Object.getOwnPropertyNames(_0xa058ac)));
    }
  }
  function _0x3f31fa(_0x3402bd, _0x108178, _0x3c526a, _0x56b812, _0x134edf) {
    var _0x4e6a98 = _0x5c2e85(_0x3402bd);
    var _0x59c4bb = _0x5c2e85(_0x108178);
    var _0x509a79 = _0x5c2e85(_0x3c526a);
    var _0x48524c = _0x5c2e85(_0x56b812);
    var _0x514471 = _0x5c2e85(_0x134edf);
    try {
      firebase.auth().signInWithEmailAndPassword(_0x4e6a98, _0x59c4bb).then(function (_0x394d82) {
        window.unityInstance.SendMessage(_0x509a79, _0x48524c, "Success: signed in for " + _0x4e6a98);
      }).catch(function (_0x3e6b21) {
        window.unityInstance.SendMessage(_0x509a79, _0x514471, JSON.stringify(_0x3e6b21, Object.getOwnPropertyNames(_0x3e6b21)));
      });
    } catch (_0x1ad5d7) {
      window.unityInstance.SendMessage(_0x509a79, _0x514471, JSON.stringify(_0x1ad5d7, Object.getOwnPropertyNames(_0x1ad5d7)));
    }
  }
  function _0x4620ef(_0xa294e0, _0x5ea468, _0x2fa713) {
    var _0x3cd96f = _0x5c2e85(_0xa294e0);
    var _0x1742f3 = _0x5c2e85(_0x5ea468);
    var _0x1c9402 = _0x5c2e85(_0x2fa713);
    try {
      var _0x463010 = new firebase.auth.FacebookAuthProvider();
      firebase.auth().signInWithRedirect(_0x463010).then(function (_0xa92b5a) {
        window.unityInstance.SendMessage(_0x3cd96f, _0x1742f3, "Success: signed in with Facebook!");
      }).catch(function (_0x30d93e) {
        window.unityInstance.SendMessage(_0x3cd96f, _0x1c9402, JSON.stringify(_0x30d93e, Object.getOwnPropertyNames(_0x30d93e)));
      });
    } catch (_0x45276f) {
      window.unityInstance.SendMessage(_0x3cd96f, _0x1c9402, JSON.stringify(_0x45276f, Object.getOwnPropertyNames(_0x45276f)));
    }
  }
  function _0x20376d(_0x2276a8, _0x4f10b0, _0x5681fd) {
    var _0x1ceb99 = _0x5c2e85(_0x2276a8);
    var _0x2b8e4a = _0x5c2e85(_0x4f10b0);
    var _0x134157 = _0x5c2e85(_0x5681fd);
    try {
      var _0x2abce3 = new firebase.auth.GoogleAuthProvider();
      firebase.auth().signInWithRedirect(_0x2abce3).then(function (_0x4f2c90) {
        window.unityInstance.SendMessage(_0x1ceb99, _0x2b8e4a, "Success: signed in with Google!");
      }).catch(function (_0x4ec16d) {
        window.unityInstance.SendMessage(_0x1ceb99, _0x134157, JSON.stringify(_0x4ec16d, Object.getOwnPropertyNames(_0x4ec16d)));
      });
    } catch (_0x11d1d1) {
      window.unityInstance.SendMessage(_0x1ceb99, _0x134157, JSON.stringify(_0x11d1d1, Object.getOwnPropertyNames(_0x11d1d1)));
    }
  }
  function _0x4e24c0(_0x45a1a5, _0x142b1e, _0xdaad2d, _0x2736b1) {
    var _0x3deacf = _0x5c2e85(_0x45a1a5);
    var _0x5ac858 = _0x5c2e85(_0x142b1e);
    var _0x3ab805 = _0x5c2e85(_0xdaad2d);
    var _0x273cf2 = _0x5c2e85(_0x2736b1);
    try {
      firebase.database().ref(_0x3deacf).off("child_added");
      window.unityInstance.SendMessage(_0x5ac858, _0x3ab805, "Success: listener removed");
    } catch (_0x4cd830) {
      window.unityInstance.SendMessage(_0x5ac858, _0x273cf2, JSON.stringify(_0x4cd830, Object.getOwnPropertyNames(_0x4cd830)));
    }
  }
  function _0x2b0728(_0x2993d4, _0x2af84a, _0x40bf7f, _0x270c36) {
    var _0x55246f = _0x5c2e85(_0x2993d4);
    var _0x34ca7e = _0x5c2e85(_0x2af84a);
    var _0x1904bd = _0x5c2e85(_0x40bf7f);
    var _0x31ab40 = _0x5c2e85(_0x270c36);
    try {
      firebase.database().ref(_0x55246f).off("child_changed");
      window.unityInstance.SendMessage(_0x34ca7e, _0x1904bd, "Success: listener removed");
    } catch (_0x16180f) {
      window.unityInstance.SendMessage(_0x34ca7e, _0x31ab40, JSON.stringify(_0x16180f, Object.getOwnPropertyNames(_0x16180f)));
    }
  }
  function _0x2b7205(_0x38ac2a, _0x14a54a, _0xeea195, _0x4f0e39) {
    var _0x38f245 = _0x5c2e85(_0x38ac2a);
    var _0x2b1227 = _0x5c2e85(_0x14a54a);
    var _0x221775 = _0x5c2e85(_0xeea195);
    var _0x480230 = _0x5c2e85(_0x4f0e39);
    try {
      firebase.database().ref(_0x38f245).off("child_removed");
      window.unityInstance.SendMessage(_0x2b1227, _0x221775, "Success: listener removed");
    } catch (_0x1e5b22) {
      window.unityInstance.SendMessage(_0x2b1227, _0x480230, JSON.stringify(_0x1e5b22, Object.getOwnPropertyNames(_0x1e5b22)));
    }
  }
  function _0x1ecc81(_0xe59169, _0x2b304f, _0x15226d, _0x170fc3) {
    var _0x2b54bc = _0x5c2e85(_0xe59169);
    var _0x498643 = _0x5c2e85(_0x2b304f);
    var _0xf5771d = _0x5c2e85(_0x15226d);
    var _0x4de859 = _0x5c2e85(_0x170fc3);
    try {
      if (typeof firestorelisteners === "undefined") {
        firestorelisteners = {};
      }
      this.firestorelisteners[_0x2b54bc + "/collection/"]();
      window.unityInstance.SendMessage(_0x498643, _0xf5771d, "Success: listener was removed");
    } catch (_0x33b04a) {
      window.unityInstance.SendMessage(_0x498643, _0x4de859, JSON.stringify(_0x33b04a, Object.getOwnPropertyNames(_0x33b04a)));
    }
  }
  function _0x119747(_0x1ad837, _0x19988e, _0x27dcba, _0x20cab8, _0x26a32e) {
    var _0x30c2e9 = _0x5c2e85(_0x1ad837);
    var _0x22a7ec = _0x5c2e85(_0x19988e);
    var _0x548fbb = _0x5c2e85(_0x27dcba);
    var _0x21362f = _0x5c2e85(_0x20cab8);
    var _0x3a8b70 = _0x5c2e85(_0x26a32e);
    try {
      if (typeof firestorelisteners === "undefined") {
        firestorelisteners = {};
      }
      this.firestorelisteners[_0x30c2e9 + "/" + _0x22a7ec]();
      window.unityInstance.SendMessage(_0x548fbb, _0x21362f, "Success: listener was removed");
    } catch (_0x11b0ba) {
      window.unityInstance.SendMessage(_0x548fbb, _0x3a8b70, JSON.stringify(_0x11b0ba, Object.getOwnPropertyNames(_0x11b0ba)));
    }
  }
  function _0xf8e3c2(_0x3559d9, _0x34f39a, _0x220f80, _0x1d4b45) {
    var _0xe5edce = _0x5c2e85(_0x3559d9);
    var _0x459a4c = _0x5c2e85(_0x34f39a);
    var _0x54d18b = _0x5c2e85(_0x220f80);
    var _0x22ad43 = _0x5c2e85(_0x1d4b45);
    try {
      firebase.database().ref(_0xe5edce).off("value");
      window.unityInstance.SendMessage(_0x459a4c, _0x54d18b, "Success: listener removed");
    } catch (_0x3924a4) {
      window.unityInstance.SendMessage(_0x459a4c, _0x22ad43, JSON.stringify(_0x3924a4, Object.getOwnPropertyNames(_0x3924a4)));
    }
  }
  function _0x466b7d() {
    try {
      window.CrazyGames.SDK.data.syncUnityGameData();
    } catch (_0x45e2e4) {
      window.UnitySDK.logError("Error while calling syncUnityGameData:", _0x45e2e4);
    }
  }
  function _0x145734(_0x421ed7, _0x3d0496, _0x168a0a, _0x469fd0) {
    var _0x4aedd7 = _0x5c2e85(_0x421ed7);
    var _0x39a35d = _0x5c2e85(_0x3d0496);
    var _0x596740 = _0x5c2e85(_0x168a0a);
    var _0x13cfd6 = _0x5c2e85(_0x469fd0);
    try {
      firebase.database().ref(_0x4aedd7).transaction(function (_0x4efc52) {
        if (typeof _0x4efc52 === "boolean") {
          return !_0x4efc52;
        } else {
          return true;
        }
      }).then(function (_0x4a9d0d) {
        window.unityInstance.SendMessage(_0x39a35d, _0x596740, "Success: transaction run in " + _0x4aedd7);
      });
    } catch (_0x1f0499) {
      window.unityInstance.SendMessage(_0x39a35d, _0x13cfd6, JSON.stringify(_0x1f0499, Object.getOwnPropertyNames(_0x1f0499)));
    }
  }
  function _0x1d27cd(_0x1bb05, _0x3610b5, _0x27412e, _0xbb3a6d, _0x324e17, _0x547ea0) {
    var _0x28c38b = _0x5c2e85(_0x1bb05);
    var _0x29d011 = _0x5c2e85(_0x3610b5);
    var _0x383cd0 = _0x5c2e85(_0x27412e);
    var _0x46a6e1 = _0x5c2e85(_0xbb3a6d);
    var _0x453c22 = _0x5c2e85(_0x324e17);
    var _0x3cc1f5 = _0x5c2e85(_0x547ea0);
    try {
      firebase.firestore().collection(_0x28c38b).doc(_0x29d011).update(JSON.parse(_0x383cd0)).then(function () {
        window.unityInstance.SendMessage(_0x46a6e1, _0x453c22, "Success: document " + _0x29d011 + " was updated");
      }).catch(function (_0x1d85db) {
        window.unityInstance.SendMessage(_0x46a6e1, _0x3cc1f5, JSON.stringify(_0x1d85db, Object.getOwnPropertyNames(_0x1d85db)));
      });
    } catch (_0x5a0e7e) {
      window.unityInstance.SendMessage(_0x46a6e1, _0x3cc1f5, JSON.stringify(_0x5a0e7e, Object.getOwnPropertyNames(_0x5a0e7e)));
    }
  }
  function _0x23cbc6(_0x50d339, _0xc7929a, _0x4b0c21, _0x583f18, _0x2b1a69) {
    var _0x1bbcb6 = _0x5c2e85(_0x50d339);
    var _0x109189 = _0x5c2e85(_0xc7929a);
    var _0x4eda54 = _0x5c2e85(_0x4b0c21);
    var _0x111447 = _0x5c2e85(_0x583f18);
    var _0x3013dd = _0x5c2e85(_0x2b1a69);
    try {
      firebase.database().ref(_0x1bbcb6).update(JSON.parse(_0x109189)).then(function (_0x41613c) {
        window.unityInstance.SendMessage(_0x4eda54, _0x111447, "Success: " + _0x109189 + " was updated in " + _0x1bbcb6);
      });
    } catch (_0x173c29) {
      window.unityInstance.SendMessage(_0x4eda54, _0x3013dd, JSON.stringify(_0x173c29, Object.getOwnPropertyNames(_0x173c29)));
    }
  }
  function _0x1a8074(_0x4b0822, _0x35b04f, _0xbd9845, _0xc14679, _0x272081) {
    var _0x5ef568 = _0x5c2e85(_0x4b0822);
    var _0x4d951d = _0x5c2e85(_0x35b04f);
    var _0x156ab2 = _0x5c2e85(_0xbd9845);
    var _0x23e18f = _0x5c2e85(_0xc14679);
    var _0x4e0882 = _0x5c2e85(_0x272081);
    try {
      firebase.storage().ref(_0x5ef568).put(_0x4a7a8c(_0x4d951d)).then(function (_0x36657f) {
        window.unityInstance.SendMessage(_0x156ab2, _0x23e18f, "Success: data was posted to " + _0x5ef568);
      });
    } catch (_0xf2340e) {
      window.unityInstance.SendMessage(_0x156ab2, _0x4e0882, JSON.stringify(_0xf2340e, Object.getOwnPropertyNames(_0xf2340e)));
    }
    function _0x4a7a8c(_0x5378ef) {
      var _0x3a95bd = window.atob(_0x5378ef);
      var _0x236903 = _0x3a95bd.length;
      var _0x2274c4 = new Uint8Array(_0x236903);
      for (var _0x44c9fb = 0; _0x44c9fb < _0x236903; _0x44c9fb++) {
        _0x2274c4[_0x44c9fb] = _0x3a95bd.charCodeAt(_0x44c9fb);
      }
      return _0x2274c4.buffer;
    }
  }
  var _0x112d2c = {
    requestInstances: {},
    nextRequestId: 1,
    loglevel: 2,
    SendTextToCSharpSide: function (_0x1adca0, _0x495d21, _0x390633) {
      const _0x3852c8 = new TextEncoder();
      const _0x5702fe = _0x3852c8.encode(_0x390633);
      const _0x4f6c18 = function (_0x20c6dd, _0x129d05) {
        return _0x5628a5.apply(null, [_0x112d2c.onallocbuffer, _0x20c6dd, _0x129d05]);
      }(_0x1adca0, _0x5702fe.length);
      _0x950143.set(_0x5702fe, _0x4f6c18);
      (function (_0x407af3, _0x420069, _0x234c0c) {
        _0x279c72.apply(null, [_0x495d21, _0x407af3, _0x420069, _0x234c0c]);
      })(_0x1adca0, _0x4f6c18, _0x5702fe.length);
    },
    GetResponseHeaders: function (_0x4059c9, _0x2a473d) {
      if (_0x112d2c.loglevel <= 1) {
        console.log("GetResponseHeaders(" + _0x4059c9 + ")");
      }
      var _0x300736 = "";
      if (document && document.cookie) {
        var _0x3121d1 = document.cookie.split(";");
        for (var _0x46ff58 = 0; _0x46ff58 < _0x3121d1.length; ++_0x46ff58) {
          const _0x208452 = _0x3121d1[_0x46ff58].trim();
          if (_0x208452.length > 0) {
            _0x300736 += "Set-Cookie:" + _0x208452 + "\n";
          }
        }
      }
      const _0x38d956 = _0x112d2c.requestInstances[_0x4059c9].getAllResponseHeaders().trim().split(/[\r\n]+/);
      _0x38d956.forEach(_0x278edf => {
        const _0x3e4d70 = _0x278edf.split(": ");
        const _0x22ccfa = _0x3e4d70.shift();
        const _0x1e6bff = _0x3e4d70.join(": ");
        if (_0x22ccfa !== "content-length") {
          _0x300736 += _0x22ccfa + ":" + _0x1e6bff + "\n";
        }
      });
      _0x112d2c.SendTextToCSharpSide(_0x4059c9, _0x2a473d, _0x300736);
    }
  };
  function _0x48d29d(_0x322e23) {
    if (_0x112d2c.loglevel <= 1) {
      console.log("XHR_Abort(" + _0x322e23 + ")");
    }
    _0x112d2c.requestInstances[_0x322e23].abort();
  }
  function _0x421b7c(_0x2493b5, _0x23be61, _0x123bf4, _0x57bc00, _0xd3a1e) {
    var _0x2a9e83 = new URL(_0x5c2e85(_0x23be61));
    var _0x51d5ba = _0x5c2e85(_0x2493b5);
    if (_0x112d2c.loglevel <= 1) {
      console.log("XHR_Create (" + _0x112d2c.nextRequestId + ", " + _0x51d5ba + ", " + _0x2a9e83.toString() + ", " + _0xd3a1e + ")");
    }
    var _0x565013 = new XMLHttpRequest();
    if (_0x123bf4 && _0x57bc00) {
      var _0x5e5c34 = _0x5c2e85(_0x123bf4);
      var _0x843342 = _0x5c2e85(_0x57bc00);
      _0x565013.withCredentials = true;
      _0x565013.open(_0x51d5ba, _0x2a9e83.toString(), true, _0x5e5c34, _0x843342);
    } else {
      _0x565013.withCredentials = _0xd3a1e;
      _0x565013.open(_0x51d5ba, _0x2a9e83.toString(), true);
    }
    _0x565013.responseType = "arraybuffer";
    _0x112d2c.requestInstances[_0x112d2c.nextRequestId] = _0x565013;
    return _0x112d2c.nextRequestId++;
  }
  function _0x19b1d6(_0x113227) {
    if (_0x112d2c.loglevel <= 1) {
      console.log("XHR_Release(" + _0x113227 + ")");
    }
    delete _0x112d2c.requestInstances[_0x113227];
  }
  function _0x17bd78(_0x488c26, _0x22488c, _0x284cbd) {
    if (_0x112d2c.loglevel <= 1) {
      console.log("XHR_Send(" + _0x488c26 + ", " + _0x22488c + ", " + _0x284cbd + ")");
    }
    var _0x486434 = _0x112d2c.requestInstances[_0x488c26];
    try {
      if (_0x284cbd > 0) {
        _0x486434.send(_0x950143.subarray(_0x22488c, _0x22488c + _0x284cbd));
      } else {
        _0x486434.send();
      }
    } catch (_0x33aafc) {
      if (_0x112d2c.loglevel <= 4) {
        console.error("XHR_Send(" + _0x488c26 + "): " + _0x33aafc.name + " : " + _0x33aafc.message);
      }
    }
  }
  function _0x2f06b8(_0x3a5dc1) {
    _0x112d2c.loglevel = _0x3a5dc1;
  }
  function _0x33bed5(_0x19b863, _0x2ed8d7, _0x2f766f) {
    if (_0x112d2c.loglevel <= 1) {
      console.log("XHR_SetProgressHandler(" + _0x19b863 + ")");
    }
    var _0x329b8a = _0x112d2c.requestInstances[_0x19b863];
    if (_0x329b8a) {
      if (_0x2ed8d7) {
        _0x329b8a.onprogress = function _0x5db16f(_0x2e695a) {
          if (_0x112d2c.loglevel <= 1) {
            console.log("XHR_SetProgressHandler download(" + _0x19b863 + ", " + _0x2e695a.loaded + ", " + _0x2e695a.total + ")");
          }
          if (_0x2e695a.lengthComputable) {
            (function (_0x1ee710, _0x5ec4ac, _0x386974) {
              _0x279c72.apply(null, [_0x2ed8d7, _0x1ee710, _0x5ec4ac, _0x386974]);
            })(_0x19b863, _0x2e695a.loaded, _0x2e695a.total);
          }
        };
      }
      if (_0x2f766f) {
        _0x329b8a.upload.addEventListener("progress", function _0x57dca8(_0x35402a) {
          if (_0x112d2c.loglevel <= 1) {
            console.log("XHR_SetProgressHandler upload(" + _0x19b863 + ", " + _0x35402a.loaded + ", " + _0x35402a.total + ")");
          }
          if (_0x35402a.lengthComputable) {
            (function (_0x5d474f, _0x22794f, _0x175397) {
              _0x279c72.apply(null, [_0x2f766f, _0x5d474f, _0x22794f, _0x175397]);
            })(_0x19b863, _0x35402a.loaded, _0x35402a.total);
          }
        }, true);
      }
    }
  }
  function _0x4f4e1c(_0x25c05f, _0x1056cf, _0x4dc635) {
    var _0x287d04 = _0x5c2e85(_0x1056cf);
    var _0x2e4384 = _0x5c2e85(_0x4dc635);
    if (_0x112d2c.loglevel <= 1) {
      console.log("XHR_SetRequestHeader(" + _0x287d04 + ", " + _0x2e4384 + ")");
    }
    if (_0x287d04 != "Cookie") {
      _0x112d2c.requestInstances[_0x25c05f].setRequestHeader(_0x287d04, _0x2e4384);
    } else {
      var _0x523128 = _0x2e4384.split(";");
      for (var _0x180ffa = 0; _0x180ffa < _0x523128.length; _0x180ffa++) {
        document.cookie = _0x523128[_0x180ffa];
      }
    }
  }
  function _0x172147(_0x3aa972, _0x55c685, _0x13997d, _0x437524, _0xb1d345, _0x59f7a3, _0x2f08a6) {
    if (_0x112d2c.loglevel <= 1) {
      console.log("XHR_SetResponseHandler(" + _0x3aa972 + ")");
    }
    _0x112d2c.onallocbuffer = _0x2f08a6;
    var _0x366511 = _0x112d2c.requestInstances[_0x3aa972];
    _0x366511.onreadystatechange = _0x45cd5b => {
      if (_0x112d2c.loglevel <= 1) {
        console.log(_0x3aa972 + " onreadystatechange(" + _0x366511.readyState + ")");
      }
      switch (_0x366511.readyState) {
        case XMLHttpRequest.UNSENT:
          break;
        case XMLHttpRequest.OPENED:
          break;
        case XMLHttpRequest.HEADERS_RECEIVED:
          {
            _0x112d2c.SendTextToCSharpSide(_0x3aa972, _0x59f7a3, "HTTP/1.1 " + _0x366511.status + " " + _0x366511.statusText + "\n");
            _0x112d2c.GetResponseHeaders(_0x3aa972, _0x59f7a3);
            break;
          }
        case XMLHttpRequest.LOADING:
          break;
        case XMLHttpRequest.DONE:
          break;
      }
    };
    _0x366511.onloadstart = _0x50497c => {
      if (_0x112d2c.loglevel <= 1) {
        console.log(_0x3aa972 + " onloadstart: " + _0x50497c);
      }
    };
    _0x366511.onload = function _0x1c65ce(_0x2f99d5) {
      if (_0x112d2c.loglevel <= 1) {
        console.log(_0x3aa972 + " onload(" + _0x366511.status + ", " + _0x366511.statusText + ")");
      }
      if (_0x55c685) {
        var _0x5c6675 = 0;
        var _0x50d9e0 = 0;
        if (_0x366511.response) {
          var _0x4040cf = _0x366511.response;
          _0x5c6675 = _0x4040cf.byteLength;
          _0x112d2c.SendTextToCSharpSide(_0x3aa972, _0x59f7a3, "content-length:" + _0x5c6675 + "\n\n");
          _0x50d9e0 = function (_0x43399d, _0x523746) {
            return _0x5628a5.apply(null, [_0x2f08a6, _0x43399d, _0x523746]);
          }(_0x3aa972, _0x5c6675);
          var _0x470594 = new Uint8Array(_0x4040cf);
          var _0x19b828 = _0x950143.subarray(_0x50d9e0, _0x50d9e0 + _0x5c6675);
          _0x19b828.set(_0x470594);
        } else {
          _0x112d2c.SendTextToCSharpSide(_0x3aa972, _0x59f7a3, "content-length:0\n\n");
        }
        (function (_0x339038, _0x118437, _0x16563b) {
          _0x279c72.apply(null, [_0x55c685, _0x339038, _0x118437, _0x16563b]);
        })(_0x3aa972, _0x50d9e0, _0x5c6675);
      }
    };
    if (_0x13997d) {
      _0x366511.onerror = function _0xec79b(_0x24690a) {
        function _0x43dc4f(_0x7c64b) {
          var _0x5e8c74 = _0x247116(_0x7c64b) + 1;
          var _0x56342e = _0x2a1ebe(_0x5e8c74);
          _0x1d0a09(_0x7c64b, _0x950143, _0x56342e, _0x5e8c74);
          (function (_0x3bbdb3, _0x2eb868) {
            _0x36c69d.apply(null, [_0x13997d, _0x3bbdb3, _0x2eb868]);
          })(_0x3aa972, _0x56342e);
          _0x2933c1(_0x56342e);
        }
        if (_0x24690a.error) {
          _0x43dc4f(_0x24690a.error);
        } else {
          _0x43dc4f("Unknown Error! Maybe a CORS porblem?");
        }
      };
    }
    if (_0x437524) {
      _0x366511.ontimeout = function _0xb456b2(_0x1af0b0) {
        (function (_0x1b12f1) {
          _0x25d2da.apply(null, [_0x437524, _0x1b12f1]);
        })(_0x3aa972);
      };
    }
    if (_0xb1d345) {
      _0x366511.onabort = function _0xefbbef(_0x715b1d) {
        (function (_0x9c3e4) {
          _0x25d2da.apply(null, [_0xb1d345, _0x9c3e4]);
        })(_0x3aa972);
      };
    }
  }
  function _0x499749(_0x328690, _0xbdd2d7) {
    if (_0x112d2c.loglevel <= 1) {
      console.log("XHR_SetTimeout(" + _0x328690 + ", " + _0xbdd2d7 + ")");
    }
    _0x112d2c.requestInstances[_0x328690].timeout = _0xbdd2d7;
  }
  var _0x329802 = {
    DESTRUCTOR_OFFSET: 0,
    REFCOUNT_OFFSET: 4,
    TYPE_OFFSET: 8,
    CAUGHT_OFFSET: 12,
    RETHROWN_OFFSET: 13,
    SIZE: 16
  };
  function _0x4c56e0(_0x5a24e9) {
    return _0x2a1ebe(_0x5a24e9 + _0x329802.SIZE) + _0x329802.SIZE;
  }
  function _0x5d85a3(_0x1dd81a) {
    this.excPtr = _0x1dd81a;
    this.ptr = _0x1dd81a - _0x329802.SIZE;
    this.set_type = function (_0x456980) {
      _0x4e86a5[this.ptr + _0x329802.TYPE_OFFSET >> 2] = _0x456980;
    };
    this.get_type = function () {
      return _0x4e86a5[this.ptr + _0x329802.TYPE_OFFSET >> 2];
    };
    this.set_destructor = function (_0x5086b8) {
      _0x4e86a5[this.ptr + _0x329802.DESTRUCTOR_OFFSET >> 2] = _0x5086b8;
    };
    this.get_destructor = function () {
      return _0x4e86a5[this.ptr + _0x329802.DESTRUCTOR_OFFSET >> 2];
    };
    this.set_refcount = function (_0x95c041) {
      _0x4e86a5[this.ptr + _0x329802.REFCOUNT_OFFSET >> 2] = _0x95c041;
    };
    this.set_caught = function (_0x8747b7) {
      _0x8747b7 = _0x8747b7 ? 1 : 0;
      _0x9c4a59[this.ptr + _0x329802.CAUGHT_OFFSET >> 0] = _0x8747b7;
    };
    this.get_caught = function () {
      return _0x9c4a59[this.ptr + _0x329802.CAUGHT_OFFSET >> 0] != 0;
    };
    this.set_rethrown = function (_0x395504) {
      _0x395504 = _0x395504 ? 1 : 0;
      _0x9c4a59[this.ptr + _0x329802.RETHROWN_OFFSET >> 0] = _0x395504;
    };
    this.get_rethrown = function () {
      return _0x9c4a59[this.ptr + _0x329802.RETHROWN_OFFSET >> 0] != 0;
    };
    this.init = function (_0x8e7c9c, _0x5f3e94) {
      this.set_type(_0x8e7c9c);
      this.set_destructor(_0x5f3e94);
      this.set_refcount(0);
      this.set_caught(false);
      this.set_rethrown(false);
    };
    this.add_ref = function () {
      var _0x124c04 = _0x4e86a5[this.ptr + _0x329802.REFCOUNT_OFFSET >> 2];
      _0x4e86a5[this.ptr + _0x329802.REFCOUNT_OFFSET >> 2] = _0x124c04 + 1;
    };
    this.release_ref = function () {
      var _0x5d1236 = _0x4e86a5[this.ptr + _0x329802.REFCOUNT_OFFSET >> 2];
      _0x4e86a5[this.ptr + _0x329802.REFCOUNT_OFFSET >> 2] = _0x5d1236 - 1;
      return _0x5d1236 === 1;
    };
  }
  function _0x30475b(_0x327fdb) {
    this.free = function () {
      _0x2933c1(this.ptr);
      this.ptr = 0;
    };
    this.set_base_ptr = function (_0x3f7fb2) {
      _0x4e86a5[this.ptr >> 2] = _0x3f7fb2;
    };
    this.get_base_ptr = function () {
      return _0x4e86a5[this.ptr >> 2];
    };
    this.set_adjusted_ptr = function (_0x277eb7) {
      var _0xf181a6 = 4;
      _0x4e86a5[this.ptr + _0xf181a6 >> 2] = _0x277eb7;
    };
    this.get_adjusted_ptr = function () {
      var _0x44cfad = 4;
      return _0x4e86a5[this.ptr + _0x44cfad >> 2];
    };
    this.get_exception_ptr = function () {
      var _0x3f33ca = _0x38646f(this.get_exception_info().get_type());
      if (_0x3f33ca) {
        return _0x4e86a5[this.get_base_ptr() >> 2];
      }
      var _0x51f699 = this.get_adjusted_ptr();
      if (_0x51f699 !== 0) {
        return _0x51f699;
      }
      return this.get_base_ptr();
    };
    this.get_exception_info = function () {
      return new _0x5d85a3(this.get_base_ptr());
    };
    if (_0x327fdb === undefined) {
      this.ptr = _0x2a1ebe(8);
      this.set_adjusted_ptr(0);
    } else {
      this.ptr = _0x327fdb;
    }
  }
  var _0x347b5a = [];
  function _0x3ff45a(_0x1aea46) {
    _0x1aea46.add_ref();
  }
  var _0x132ba8 = 0;
  function _0x2252f2(_0x115bca) {
    var _0x5439e8 = new _0x30475b(_0x115bca);
    var _0x20ef12 = _0x5439e8.get_exception_info();
    if (!_0x20ef12.get_caught()) {
      _0x20ef12.set_caught(true);
      _0x132ba8--;
    }
    _0x20ef12.set_rethrown(false);
    _0x347b5a.push(_0x5439e8);
    _0x3ff45a(_0x20ef12);
    return _0x5439e8.get_exception_ptr();
  }
  var _0x4b6014 = 0;
  function _0x50f88d(_0x4d6287) {
    return _0x2933c1(new _0x5d85a3(_0x4d6287).ptr);
  }
  function _0x1e4081(_0x122987) {
    if (_0x122987.release_ref() && !_0x122987.get_rethrown()) {
      var _0x170197 = _0x122987.get_destructor();
      if (_0x170197) {
        (function (_0x3fc7f3) {
          return _0x21e974.apply(null, [_0x170197, _0x3fc7f3]);
        })(_0x122987.excPtr);
      }
      _0x50f88d(_0x122987.excPtr);
    }
  }
  function _0x1e5e59() {
    _0x52a98c(0);
    var _0x3406ea = _0x347b5a.pop();
    _0x1e4081(_0x3406ea.get_exception_info());
    _0x3406ea.free();
    _0x4b6014 = 0;
  }
  function _0x11c0d9(_0x506467) {
    var _0x3d7c3c = new _0x30475b(_0x506467);
    var _0x493b5a = _0x3d7c3c.get_base_ptr();
    if (!_0x4b6014) {
      _0x4b6014 = _0x493b5a;
    }
    _0x3d7c3c.free();
    throw _0x493b5a;
  }
  function _0x345b0b() {
    var _0x3a11b7 = _0x4b6014;
    if (!_0x3a11b7) {
      _0x437c38(0);
      return 0;
    }
    var _0x1dc855 = new _0x5d85a3(_0x3a11b7);
    var _0x4bb155 = _0x1dc855.get_type();
    var _0x440977 = new _0x30475b();
    _0x440977.set_base_ptr(_0x3a11b7);
    if (!_0x4bb155) {
      _0x437c38(0);
      return _0x440977.ptr | 0;
    }
    var _0x1e22eb = Array.prototype.slice.call(arguments);
    var _0x2ac971 = _0x51cfa0();
    var _0x5d2310 = _0x3f9e14(4);
    _0x4e86a5[_0x5d2310 >> 2] = _0x3a11b7;
    for (var _0x1e1535 = 0; _0x1e1535 < _0x1e22eb.length; _0x1e1535++) {
      var _0x4d5dee = _0x1e22eb[_0x1e1535];
      if (_0x4d5dee === 0 || _0x4d5dee === _0x4bb155) {
        break;
      }
      if (_0x2b77fe(_0x4d5dee, _0x4bb155, _0x5d2310)) {
        var _0x5464c2 = _0x4e86a5[_0x5d2310 >> 2];
        if (_0x3a11b7 !== _0x5464c2) {
          _0x440977.set_adjusted_ptr(_0x5464c2);
        }
        _0x437c38(_0x4d5dee);
        return _0x440977.ptr | 0;
      }
    }
    _0x15d00c(_0x2ac971);
    _0x437c38(_0x4bb155);
    return _0x440977.ptr | 0;
  }
  function _0x1b07be() {
    var _0x46d29d = _0x4b6014;
    if (!_0x46d29d) {
      _0x437c38(0);
      return 0;
    }
    var _0x4520b8 = new _0x5d85a3(_0x46d29d);
    var _0x25ed17 = _0x4520b8.get_type();
    var _0x382452 = new _0x30475b();
    _0x382452.set_base_ptr(_0x46d29d);
    if (!_0x25ed17) {
      _0x437c38(0);
      return _0x382452.ptr | 0;
    }
    var _0xb87657 = Array.prototype.slice.call(arguments);
    var _0x1b7649 = _0x51cfa0();
    var _0x17ea32 = _0x3f9e14(4);
    _0x4e86a5[_0x17ea32 >> 2] = _0x46d29d;
    for (var _0x21ba03 = 0; _0x21ba03 < _0xb87657.length; _0x21ba03++) {
      var _0x2234ea = _0xb87657[_0x21ba03];
      if (_0x2234ea === 0 || _0x2234ea === _0x25ed17) {
        break;
      }
      if (_0x2b77fe(_0x2234ea, _0x25ed17, _0x17ea32)) {
        var _0x2611ce = _0x4e86a5[_0x17ea32 >> 2];
        if (_0x46d29d !== _0x2611ce) {
          _0x382452.set_adjusted_ptr(_0x2611ce);
        }
        _0x437c38(_0x2234ea);
        return _0x382452.ptr | 0;
      }
    }
    _0x15d00c(_0x1b7649);
    _0x437c38(_0x25ed17);
    return _0x382452.ptr | 0;
  }
  function _0x3323c8() {
    var _0x30c6e5 = _0x4b6014;
    if (!_0x30c6e5) {
      _0x437c38(0);
      return 0;
    }
    var _0x15d175 = new _0x5d85a3(_0x30c6e5);
    var _0x193068 = _0x15d175.get_type();
    var _0x256da9 = new _0x30475b();
    _0x256da9.set_base_ptr(_0x30c6e5);
    if (!_0x193068) {
      _0x437c38(0);
      return _0x256da9.ptr | 0;
    }
    var _0x56df6a = Array.prototype.slice.call(arguments);
    var _0x39178d = _0x51cfa0();
    var _0xe3c6fc = _0x3f9e14(4);
    _0x4e86a5[_0xe3c6fc >> 2] = _0x30c6e5;
    for (var _0x14fa94 = 0; _0x14fa94 < _0x56df6a.length; _0x14fa94++) {
      var _0x4338e1 = _0x56df6a[_0x14fa94];
      if (_0x4338e1 === 0 || _0x4338e1 === _0x193068) {
        break;
      }
      if (_0x2b77fe(_0x4338e1, _0x193068, _0xe3c6fc)) {
        var _0x3952f8 = _0x4e86a5[_0xe3c6fc >> 2];
        if (_0x30c6e5 !== _0x3952f8) {
          _0x256da9.set_adjusted_ptr(_0x3952f8);
        }
        _0x437c38(_0x4338e1);
        return _0x256da9.ptr | 0;
      }
    }
    _0x15d00c(_0x39178d);
    _0x437c38(_0x193068);
    return _0x256da9.ptr | 0;
  }
  function _0x2718f9() {
    var _0x1de6bd = _0x347b5a.pop();
    if (!_0x1de6bd) {
      _0x48d521("no exception to throw");
    }
    var _0xd89eb4 = _0x1de6bd.get_exception_info();
    var _0x58664e = _0x1de6bd.get_base_ptr();
    if (!_0xd89eb4.get_rethrown()) {
      _0x347b5a.push(_0x1de6bd);
      _0xd89eb4.set_rethrown(true);
      _0xd89eb4.set_caught(false);
      _0x132ba8++;
    } else {
      _0x1de6bd.free();
    }
    _0x4b6014 = _0x58664e;
    throw _0x58664e;
  }
  function _0x12b319(_0x122ff5, _0x509a38, _0x3677fd) {
    var _0x406afa = new _0x5d85a3(_0x122ff5);
    _0x406afa.init(_0x509a38, _0x3677fd);
    _0x4b6014 = _0x122ff5;
    _0x132ba8++;
    throw _0x122ff5;
  }
  function _0x5239ff(_0x538d33, _0x110ff7) {
    var _0x56d486 = new Date(_0x4e86a5[_0x538d33 >> 2] * 1000);
    _0x4e86a5[_0x110ff7 >> 2] = _0x56d486.getUTCSeconds();
    _0x4e86a5[_0x110ff7 + 4 >> 2] = _0x56d486.getUTCMinutes();
    _0x4e86a5[_0x110ff7 + 8 >> 2] = _0x56d486.getUTCHours();
    _0x4e86a5[_0x110ff7 + 12 >> 2] = _0x56d486.getUTCDate();
    _0x4e86a5[_0x110ff7 + 16 >> 2] = _0x56d486.getUTCMonth();
    _0x4e86a5[_0x110ff7 + 20 >> 2] = _0x56d486.getUTCFullYear() - 1900;
    _0x4e86a5[_0x110ff7 + 24 >> 2] = _0x56d486.getUTCDay();
    _0x4e86a5[_0x110ff7 + 36 >> 2] = 0;
    _0x4e86a5[_0x110ff7 + 32 >> 2] = 0;
    var _0x28272c = Date.UTC(_0x56d486.getUTCFullYear(), 0, 1, 0, 0, 0, 0);
    var _0x2c6bfb = (_0x56d486.getTime() - _0x28272c) / 86400000 | 0;
    _0x4e86a5[_0x110ff7 + 28 >> 2] = _0x2c6bfb;
    if (!_0x5239ff.GMTString) {
      _0x5239ff.GMTString = _0x26469a("GMT");
    }
    _0x4e86a5[_0x110ff7 + 40 >> 2] = _0x5239ff.GMTString;
    return _0x110ff7;
  }
  function _0xc2a92b(_0x69f449, _0x1a224b) {
    return _0x5239ff(_0x69f449, _0x1a224b);
  }
  function _0x3a6dfc() {
    if (_0x3a6dfc.called) {
      return;
    }
    _0x3a6dfc.called = true;
    var _0x294c2d = new Date().getFullYear();
    var _0x3325d5 = new Date(_0x294c2d, 0, 1);
    var _0x2b8f9d = new Date(_0x294c2d, 6, 1);
    var _0x458f67 = _0x3325d5.getTimezoneOffset();
    var _0x49407d = _0x2b8f9d.getTimezoneOffset();
    var _0x266a2a = Math.max(_0x458f67, _0x49407d);
    _0x4e86a5[_0x41d217() >> 2] = _0x266a2a * 60;
    _0x4e86a5[_0x25de21() >> 2] = Number(_0x458f67 != _0x49407d);
    function _0x311c5c(_0x233a61) {
      var _0x3818c0 = _0x233a61.toTimeString().match(/\(([A-Za-z ]+)\)$/);
      if (_0x3818c0) {
        return _0x3818c0[1];
      } else {
        return "GMT";
      }
    }
    var _0x48852b = _0x311c5c(_0x3325d5);
    var _0x4a6d35 = _0x311c5c(_0x2b8f9d);
    var _0x38f332 = _0x26469a(_0x48852b);
    var _0xd55604 = _0x26469a(_0x4a6d35);
    if (_0x49407d < _0x458f67) {
      _0x4e86a5[_0x379d9f() >> 2] = _0x38f332;
      _0x4e86a5[_0x379d9f() + 4 >> 2] = _0xd55604;
    } else {
      _0x4e86a5[_0x379d9f() >> 2] = _0xd55604;
      _0x4e86a5[_0x379d9f() + 4 >> 2] = _0x38f332;
    }
  }
  function _0xb278e8(_0x27a98f, _0x28eb0d) {
    _0x3a6dfc();
    var _0x2d5d27 = new Date(_0x4e86a5[_0x27a98f >> 2] * 1000);
    _0x4e86a5[_0x28eb0d >> 2] = _0x2d5d27.getSeconds();
    _0x4e86a5[_0x28eb0d + 4 >> 2] = _0x2d5d27.getMinutes();
    _0x4e86a5[_0x28eb0d + 8 >> 2] = _0x2d5d27.getHours();
    _0x4e86a5[_0x28eb0d + 12 >> 2] = _0x2d5d27.getDate();
    _0x4e86a5[_0x28eb0d + 16 >> 2] = _0x2d5d27.getMonth();
    _0x4e86a5[_0x28eb0d + 20 >> 2] = _0x2d5d27.getFullYear() - 1900;
    _0x4e86a5[_0x28eb0d + 24 >> 2] = _0x2d5d27.getDay();
    var _0x2230b1 = new Date(_0x2d5d27.getFullYear(), 0, 1);
    var _0x47c427 = (_0x2d5d27.getTime() - _0x2230b1.getTime()) / 86400000 | 0;
    _0x4e86a5[_0x28eb0d + 28 >> 2] = _0x47c427;
    _0x4e86a5[_0x28eb0d + 36 >> 2] = -(_0x2d5d27.getTimezoneOffset() * 60);
    var _0x199210 = new Date(_0x2d5d27.getFullYear(), 6, 1).getTimezoneOffset();
    var _0x15c4d1 = _0x2230b1.getTimezoneOffset();
    var _0x5caf1f = (_0x199210 != _0x15c4d1 && _0x2d5d27.getTimezoneOffset() == Math.min(_0x15c4d1, _0x199210)) | 0;
    _0x4e86a5[_0x28eb0d + 32 >> 2] = _0x5caf1f;
    var _0x19a876 = _0x4e86a5[_0x379d9f() + (_0x5caf1f ? 4 : 0) >> 2];
    _0x4e86a5[_0x28eb0d + 40 >> 2] = _0x19a876;
    return _0x28eb0d;
  }
  function _0x3509ea(_0xb627bd, _0x517812) {
    return _0xb278e8(_0xb627bd, _0x517812);
  }
  var _0x5bec41 = {
    splitPath: function (_0x927791) {
      var _0x2b6ab4 = /^(\/?|)([\s\S]*?)((?:\.{1,2}|[^\/]+?|)(\.[^.\/]*|))(?:[\/]*)$/;
      return _0x2b6ab4.exec(_0x927791).slice(1);
    },
    normalizeArray: function (_0x372b13, _0x48d80f) {
      var _0x4092da = 0;
      for (var _0x50f835 = _0x372b13.length - 1; _0x50f835 >= 0; _0x50f835--) {
        var _0x1e7b39 = _0x372b13[_0x50f835];
        if (_0x1e7b39 === ".") {
          _0x372b13.splice(_0x50f835, 1);
        } else if (_0x1e7b39 === "..") {
          _0x372b13.splice(_0x50f835, 1);
          _0x4092da++;
        } else if (_0x4092da) {
          _0x372b13.splice(_0x50f835, 1);
          _0x4092da--;
        }
      }
      if (_0x48d80f) {
        for (; _0x4092da; _0x4092da--) {
          _0x372b13.unshift("..");
        }
      }
      return _0x372b13;
    },
    normalize: function (_0x408f59) {
      var _0x5e8f1b = _0x408f59.charAt(0) === "/";
      var _0x516e42 = _0x408f59.substr(-1) === "/";
      _0x408f59 = _0x5bec41.normalizeArray(_0x408f59.split("/").filter(function (_0x1b50de) {
        return !!_0x1b50de;
      }), !_0x5e8f1b).join("/");
      if (!_0x408f59 && !_0x5e8f1b) {
        _0x408f59 = ".";
      }
      if (_0x408f59 && _0x516e42) {
        _0x408f59 += "/";
      }
      return (_0x5e8f1b ? "/" : "") + _0x408f59;
    },
    dirname: function (_0x393278) {
      var _0x5c6574 = _0x5bec41.splitPath(_0x393278);
      var _0x10ad84 = _0x5c6574[0];
      var _0x34f1d2 = _0x5c6574[1];
      if (!_0x10ad84 && !_0x34f1d2) {
        return ".";
      }
      _0x34f1d2 &&= _0x34f1d2.substr(0, _0x34f1d2.length - 1);
      return _0x10ad84 + _0x34f1d2;
    },
    basename: function (_0x1663ff) {
      if (_0x1663ff === "/") {
        return "/";
      }
      _0x1663ff = _0x5bec41.normalize(_0x1663ff);
      _0x1663ff = _0x1663ff.replace(/\/$/, "");
      var _0x26997c = _0x1663ff.lastIndexOf("/");
      if (_0x26997c === -1) {
        return _0x1663ff;
      }
      return _0x1663ff.substr(_0x26997c + 1);
    },
    extname: function (_0xfe4ae) {
      return _0x5bec41.splitPath(_0xfe4ae)[3];
    },
    join: function () {
      var _0x92ecad = Array.prototype.slice.call(arguments, 0);
      return _0x5bec41.normalize(_0x92ecad.join("/"));
    },
    join2: function (_0x4b53e5, _0x38b26d) {
      return _0x5bec41.normalize(_0x4b53e5 + "/" + _0x38b26d);
    }
  };
  function _0x3d211e() {
    if (typeof crypto === "object" && typeof crypto.getRandomValues === "function") {
      var _0x21f1ce = new Uint8Array(1);
      return function () {
        crypto.getRandomValues(_0x21f1ce);
        return _0x21f1ce[0];
      };
    } else if (_0x319321) {
      try {
        var _0x3be70f = require("crypto");
        return function () {
          return _0x3be70f.randomBytes(1)[0];
        };
      } catch (_0x5a64e1) {}
    }
    return function () {
      _0x48d521("randomDevice");
    };
  }
  var _0x522f5a = {
    resolve: function () {
      var _0x7001d8 = "";
      var _0x2b48d3 = false;
      for (var _0x305996 = arguments.length - 1; _0x305996 >= -1 && !_0x2b48d3; _0x305996--) {
        var _0x174de0 = _0x305996 >= 0 ? arguments[_0x305996] : _0x2840b9.cwd();
        if (typeof _0x174de0 !== "string") {
          throw new TypeError("Arguments to path.resolve must be strings");
        } else if (!_0x174de0) {
          return "";
        }
        _0x7001d8 = _0x174de0 + "/" + _0x7001d8;
        _0x2b48d3 = _0x174de0.charAt(0) === "/";
      }
      _0x7001d8 = _0x5bec41.normalizeArray(_0x7001d8.split("/").filter(function (_0x387047) {
        return !!_0x387047;
      }), !_0x2b48d3).join("/");
      return (_0x2b48d3 ? "/" : "") + _0x7001d8 || ".";
    },
    relative: function (_0x2ce676, _0x55052e) {
      _0x2ce676 = _0x522f5a.resolve(_0x2ce676).substr(1);
      _0x55052e = _0x522f5a.resolve(_0x55052e).substr(1);
      function _0x5ebe0d(_0x3f5b22) {
        var _0x27f571 = 0;
        for (; _0x27f571 < _0x3f5b22.length; _0x27f571++) {
          if (_0x3f5b22[_0x27f571] !== "") {
            break;
          }
        }
        var _0x2641af = _0x3f5b22.length - 1;
        for (; _0x2641af >= 0; _0x2641af--) {
          if (_0x3f5b22[_0x2641af] !== "") {
            break;
          }
        }
        if (_0x27f571 > _0x2641af) {
          return [];
        }
        return _0x3f5b22.slice(_0x27f571, _0x2641af - _0x27f571 + 1);
      }
      var _0xf170ce = _0x5ebe0d(_0x2ce676.split("/"));
      var _0x19271b = _0x5ebe0d(_0x55052e.split("/"));
      var _0x109fdb = Math.min(_0xf170ce.length, _0x19271b.length);
      var _0x44e2ac = _0x109fdb;
      for (var _0x1ea2cc = 0; _0x1ea2cc < _0x109fdb; _0x1ea2cc++) {
        if (_0xf170ce[_0x1ea2cc] !== _0x19271b[_0x1ea2cc]) {
          _0x44e2ac = _0x1ea2cc;
          break;
        }
      }
      var _0x1b4a6f = [];
      for (var _0x1ea2cc = _0x44e2ac; _0x1ea2cc < _0xf170ce.length; _0x1ea2cc++) {
        _0x1b4a6f.push("..");
      }
      _0x1b4a6f = _0x1b4a6f.concat(_0x19271b.slice(_0x44e2ac));
      return _0x1b4a6f.join("/");
    }
  };
  var _0x5e802c = {
    ttys: [],
    init: function () {},
    shutdown: function () {},
    register: function (_0x4fab1e, _0x2800fb) {
      _0x5e802c.ttys[_0x4fab1e] = {
        input: [],
        output: [],
        ops: _0x2800fb
      };
      _0x2840b9.registerDevice(_0x4fab1e, _0x5e802c.stream_ops);
    },
    stream_ops: {
      open: function (_0x10e95c) {
        var _0x20b3a2 = _0x5e802c.ttys[_0x10e95c.node.rdev];
        if (!_0x20b3a2) {
          throw new _0x2840b9.ErrnoError(43);
        }
        _0x10e95c.tty = _0x20b3a2;
        _0x10e95c.seekable = false;
      },
      close: function (_0x3c5306) {
        _0x3c5306.tty.ops.flush(_0x3c5306.tty);
      },
      flush: function (_0x3e0f1c) {
        _0x3e0f1c.tty.ops.flush(_0x3e0f1c.tty);
      },
      read: function (_0xffc5d9, _0x4fe6df, _0x4f1eeb, _0xc520a3, _0x39f081) {
        if (!_0xffc5d9.tty || !_0xffc5d9.tty.ops.get_char) {
          throw new _0x2840b9.ErrnoError(60);
        }
        var _0x3bc299 = 0;
        for (var _0x1085f2 = 0; _0x1085f2 < _0xc520a3; _0x1085f2++) {
          var _0xcf5479;
          try {
            _0xcf5479 = _0xffc5d9.tty.ops.get_char(_0xffc5d9.tty);
          } catch (_0x59ee5a) {
            throw new _0x2840b9.ErrnoError(29);
          }
          if (_0xcf5479 === undefined && _0x3bc299 === 0) {
            throw new _0x2840b9.ErrnoError(6);
          }
          if (_0xcf5479 === null || _0xcf5479 === undefined) {
            break;
          }
          _0x3bc299++;
          _0x4fe6df[_0x4f1eeb + _0x1085f2] = _0xcf5479;
        }
        if (_0x3bc299) {
          _0xffc5d9.node.timestamp = Date.now();
        }
        return _0x3bc299;
      },
      write: function (_0x484b77, _0x3a76d3, _0x28f9af, _0x330909, _0x120e7a) {
        if (!_0x484b77.tty || !_0x484b77.tty.ops.put_char) {
          throw new _0x2840b9.ErrnoError(60);
        }
        try {
          for (var _0x41735c = 0; _0x41735c < _0x330909; _0x41735c++) {
            _0x484b77.tty.ops.put_char(_0x484b77.tty, _0x3a76d3[_0x28f9af + _0x41735c]);
          }
        } catch (_0x593bd9) {
          throw new _0x2840b9.ErrnoError(29);
        }
        if (_0x330909) {
          _0x484b77.node.timestamp = Date.now();
        }
        return _0x41735c;
      }
    },
    default_tty_ops: {
      get_char: function (_0x5eed41) {
        if (!_0x5eed41.input.length) {
          var _0x3ee482 = null;
          if (_0x319321) {
            var _0x28a321 = 256;
            var _0x46a90c = Buffer.alloc ? Buffer.alloc(_0x28a321) : new Buffer(_0x28a321);
            var _0x564143 = 0;
            try {
              _0x564143 = _0x228179.readSync(process.stdin.fd, _0x46a90c, 0, _0x28a321, null);
            } catch (_0x4f8638) {
              if (_0x4f8638.toString().includes("EOF")) {
                _0x564143 = 0;
              } else {
                throw _0x4f8638;
              }
            }
            if (_0x564143 > 0) {
              _0x3ee482 = _0x46a90c.slice(0, _0x564143).toString("utf-8");
            } else {
              _0x3ee482 = null;
            }
          } else if (typeof window != "undefined" && typeof window.prompt == "function") {
            _0x3ee482 = window.prompt("Input: ");
            if (_0x3ee482 !== null) {
              _0x3ee482 += "\n";
            }
          } else if (typeof readline == "function") {
            _0x3ee482 = readline();
            if (_0x3ee482 !== null) {
              _0x3ee482 += "\n";
            }
          }
          if (!_0x3ee482) {
            return null;
          }
          _0x5eed41.input = _0xc6e11e(_0x3ee482, true);
        }
        return _0x5eed41.input.shift();
      },
      put_char: function (_0x3a4205, _0xede39b) {
        if (_0xede39b === null || _0xede39b === 10) {
          _0x2ac208(_0x3a7b27(_0x3a4205.output, 0));
          _0x3a4205.output = [];
        } else if (_0xede39b != 0) {
          _0x3a4205.output.push(_0xede39b);
        }
      },
      flush: function (_0x364c5e) {
        if (_0x364c5e.output && _0x364c5e.output.length > 0) {
          _0x2ac208(_0x3a7b27(_0x364c5e.output, 0));
          _0x364c5e.output = [];
        }
      }
    },
    default_tty1_ops: {
      put_char: function (_0x2dfcd4, _0x5ade9e) {
        if (_0x5ade9e === null || _0x5ade9e === 10) {
          _0x1650b6(_0x3a7b27(_0x2dfcd4.output, 0));
          _0x2dfcd4.output = [];
        } else if (_0x5ade9e != 0) {
          _0x2dfcd4.output.push(_0x5ade9e);
        }
      },
      flush: function (_0x4bf281) {
        if (_0x4bf281.output && _0x4bf281.output.length > 0) {
          _0x1650b6(_0x3a7b27(_0x4bf281.output, 0));
          _0x4bf281.output = [];
        }
      }
    }
  };
  function _0x139b77(_0x2197f1) {
    var _0x5083f7 = _0x3fdaea(_0x2197f1, 65536);
    var _0x575a2e = _0x2a1ebe(_0x5083f7);
    while (_0x2197f1 < _0x5083f7) {
      _0x9c4a59[_0x575a2e + _0x2197f1++] = 0;
    }
    return _0x575a2e;
  }
  var _0x34dbd8 = {
    ops_table: null,
    mount: function (_0xa27a5) {
      return _0x34dbd8.createNode(null, "/", 16895, 0);
    },
    createNode: function (_0x1b4ea4, _0x35a07a, _0x4652cf, _0x19349a) {
      if (_0x2840b9.isBlkdev(_0x4652cf) || _0x2840b9.isFIFO(_0x4652cf)) {
        throw new _0x2840b9.ErrnoError(63);
      }
      if (!_0x34dbd8.ops_table) {
        _0x34dbd8.ops_table = {
          dir: {
            node: {
              getattr: _0x34dbd8.node_ops.getattr,
              setattr: _0x34dbd8.node_ops.setattr,
              lookup: _0x34dbd8.node_ops.lookup,
              mknod: _0x34dbd8.node_ops.mknod,
              rename: _0x34dbd8.node_ops.rename,
              unlink: _0x34dbd8.node_ops.unlink,
              rmdir: _0x34dbd8.node_ops.rmdir,
              readdir: _0x34dbd8.node_ops.readdir,
              symlink: _0x34dbd8.node_ops.symlink
            },
            stream: {
              llseek: _0x34dbd8.stream_ops.llseek
            }
          },
          file: {
            node: {
              getattr: _0x34dbd8.node_ops.getattr,
              setattr: _0x34dbd8.node_ops.setattr
            },
            stream: {
              llseek: _0x34dbd8.stream_ops.llseek,
              read: _0x34dbd8.stream_ops.read,
              write: _0x34dbd8.stream_ops.write,
              allocate: _0x34dbd8.stream_ops.allocate,
              mmap: _0x34dbd8.stream_ops.mmap,
              msync: _0x34dbd8.stream_ops.msync
            }
          },
          link: {
            node: {
              getattr: _0x34dbd8.node_ops.getattr,
              setattr: _0x34dbd8.node_ops.setattr,
              readlink: _0x34dbd8.node_ops.readlink
            },
            stream: {}
          },
          chrdev: {
            node: {
              getattr: _0x34dbd8.node_ops.getattr,
              setattr: _0x34dbd8.node_ops.setattr
            },
            stream: _0x2840b9.chrdev_stream_ops
          }
        };
      }
      var _0x2b2ed4 = _0x2840b9.createNode(_0x1b4ea4, _0x35a07a, _0x4652cf, _0x19349a);
      if (_0x2840b9.isDir(_0x2b2ed4.mode)) {
        _0x2b2ed4.node_ops = _0x34dbd8.ops_table.dir.node;
        _0x2b2ed4.stream_ops = _0x34dbd8.ops_table.dir.stream;
        _0x2b2ed4.contents = {};
      } else if (_0x2840b9.isFile(_0x2b2ed4.mode)) {
        _0x2b2ed4.node_ops = _0x34dbd8.ops_table.file.node;
        _0x2b2ed4.stream_ops = _0x34dbd8.ops_table.file.stream;
        _0x2b2ed4.usedBytes = 0;
        _0x2b2ed4.contents = null;
      } else if (_0x2840b9.isLink(_0x2b2ed4.mode)) {
        _0x2b2ed4.node_ops = _0x34dbd8.ops_table.link.node;
        _0x2b2ed4.stream_ops = _0x34dbd8.ops_table.link.stream;
      } else if (_0x2840b9.isChrdev(_0x2b2ed4.mode)) {
        _0x2b2ed4.node_ops = _0x34dbd8.ops_table.chrdev.node;
        _0x2b2ed4.stream_ops = _0x34dbd8.ops_table.chrdev.stream;
      }
      _0x2b2ed4.timestamp = Date.now();
      if (_0x1b4ea4) {
        _0x1b4ea4.contents[_0x35a07a] = _0x2b2ed4;
        _0x1b4ea4.timestamp = _0x2b2ed4.timestamp;
      }
      return _0x2b2ed4;
    },
    getFileDataAsTypedArray: function (_0x56bf86) {
      if (!_0x56bf86.contents) {
        return new Uint8Array(0);
      }
      if (_0x56bf86.contents.subarray) {
        return _0x56bf86.contents.subarray(0, _0x56bf86.usedBytes);
      }
      return new Uint8Array(_0x56bf86.contents);
    },
    expandFileStorage: function (_0x5c1367, _0x1418da) {
      var _0xf30231 = _0x5c1367.contents ? _0x5c1367.contents.length : 0;
      if (_0xf30231 >= _0x1418da) {
        return;
      }
      var _0xe510d1 = 1048576;
      _0x1418da = Math.max(_0x1418da, _0xf30231 * (_0xf30231 < _0xe510d1 ? 2 : 1.125) >>> 0);
      if (_0xf30231 != 0) {
        _0x1418da = Math.max(_0x1418da, 256);
      }
      var _0x510e46 = _0x5c1367.contents;
      _0x5c1367.contents = new Uint8Array(_0x1418da);
      if (_0x5c1367.usedBytes > 0) {
        _0x5c1367.contents.set(_0x510e46.subarray(0, _0x5c1367.usedBytes), 0);
      }
    },
    resizeFileStorage: function (_0x34e4d5, _0x327bdc) {
      if (_0x34e4d5.usedBytes == _0x327bdc) {
        return;
      }
      if (_0x327bdc == 0) {
        _0x34e4d5.contents = null;
        _0x34e4d5.usedBytes = 0;
      } else {
        var _0x6e1fa2 = _0x34e4d5.contents;
        _0x34e4d5.contents = new Uint8Array(_0x327bdc);
        if (_0x6e1fa2) {
          _0x34e4d5.contents.set(_0x6e1fa2.subarray(0, Math.min(_0x327bdc, _0x34e4d5.usedBytes)));
        }
        _0x34e4d5.usedBytes = _0x327bdc;
      }
    },
    node_ops: {
      getattr: function (_0xa7623b) {
        var _0x4967bd = {};
        _0x4967bd.dev = _0x2840b9.isChrdev(_0xa7623b.mode) ? _0xa7623b.id : 1;
        _0x4967bd.ino = _0xa7623b.id;
        _0x4967bd.mode = _0xa7623b.mode;
        _0x4967bd.nlink = 1;
        _0x4967bd.uid = 0;
        _0x4967bd.gid = 0;
        _0x4967bd.rdev = _0xa7623b.rdev;
        if (_0x2840b9.isDir(_0xa7623b.mode)) {
          _0x4967bd.size = 4096;
        } else if (_0x2840b9.isFile(_0xa7623b.mode)) {
          _0x4967bd.size = _0xa7623b.usedBytes;
        } else if (_0x2840b9.isLink(_0xa7623b.mode)) {
          _0x4967bd.size = _0xa7623b.link.length;
        } else {
          _0x4967bd.size = 0;
        }
        _0x4967bd.atime = new Date(_0xa7623b.timestamp);
        _0x4967bd.mtime = new Date(_0xa7623b.timestamp);
        _0x4967bd.ctime = new Date(_0xa7623b.timestamp);
        _0x4967bd.blksize = 4096;
        _0x4967bd.blocks = Math.ceil(_0x4967bd.size / _0x4967bd.blksize);
        return _0x4967bd;
      },
      setattr: function (_0x590817, _0x39685c) {
        if (_0x39685c.mode !== undefined) {
          _0x590817.mode = _0x39685c.mode;
        }
        if (_0x39685c.timestamp !== undefined) {
          _0x590817.timestamp = _0x39685c.timestamp;
        }
        if (_0x39685c.size !== undefined) {
          _0x34dbd8.resizeFileStorage(_0x590817, _0x39685c.size);
        }
      },
      lookup: function (_0x45bbd6, _0x88963a) {
        throw _0x2840b9.genericErrors[44];
      },
      mknod: function (_0x236529, _0x3cc41c, _0x1b50fb, _0x235305) {
        return _0x34dbd8.createNode(_0x236529, _0x3cc41c, _0x1b50fb, _0x235305);
      },
      rename: function (_0x499f10, _0x4e4db3, _0x49ad76) {
        if (_0x2840b9.isDir(_0x499f10.mode)) {
          var _0x5423e4;
          try {
            _0x5423e4 = _0x2840b9.lookupNode(_0x4e4db3, _0x49ad76);
          } catch (_0x246ce6) {}
          if (_0x5423e4) {
            for (var _0x2c835b in _0x5423e4.contents) {
              throw new _0x2840b9.ErrnoError(55);
            }
          }
        }
        delete _0x499f10.parent.contents[_0x499f10.name];
        _0x499f10.parent.timestamp = Date.now();
        _0x499f10.name = _0x49ad76;
        _0x4e4db3.contents[_0x49ad76] = _0x499f10;
        _0x4e4db3.timestamp = _0x499f10.parent.timestamp;
        _0x499f10.parent = _0x4e4db3;
      },
      unlink: function (_0x2faf50, _0x2a5bc1) {
        delete _0x2faf50.contents[_0x2a5bc1];
        _0x2faf50.timestamp = Date.now();
      },
      rmdir: function (_0x3ac2bf, _0x439e27) {
        var _0x27082c = _0x2840b9.lookupNode(_0x3ac2bf, _0x439e27);
        for (var _0x93cdf3 in _0x27082c.contents) {
          throw new _0x2840b9.ErrnoError(55);
        }
        delete _0x3ac2bf.contents[_0x439e27];
        _0x3ac2bf.timestamp = Date.now();
      },
      readdir: function (_0x3b4516) {
        var _0x55d79b = [".", ".."];
        for (var _0x57414c in _0x3b4516.contents) {
          if (!_0x3b4516.contents.hasOwnProperty(_0x57414c)) {
            continue;
          }
          _0x55d79b.push(_0x57414c);
        }
        return _0x55d79b;
      },
      symlink: function (_0x263ede, _0x55ba53, _0x24fbc3) {
        var _0x40612a = _0x34dbd8.createNode(_0x263ede, _0x55ba53, 41471, 0);
        _0x40612a.link = _0x24fbc3;
        return _0x40612a;
      },
      readlink: function (_0x2e044b) {
        if (!_0x2840b9.isLink(_0x2e044b.mode)) {
          throw new _0x2840b9.ErrnoError(28);
        }
        return _0x2e044b.link;
      }
    },
    stream_ops: {
      read: function (_0x3e9a13, _0x59e3e1, _0x549db3, _0x12ac25, _0x3c7b0d) {
        var _0x5d373e = _0x3e9a13.node.contents;
        if (_0x3c7b0d >= _0x3e9a13.node.usedBytes) {
          return 0;
        }
        var _0x57a06c = Math.min(_0x3e9a13.node.usedBytes - _0x3c7b0d, _0x12ac25);
        if (_0x57a06c > 8 && _0x5d373e.subarray) {
          _0x59e3e1.set(_0x5d373e.subarray(_0x3c7b0d, _0x3c7b0d + _0x57a06c), _0x549db3);
        } else {
          for (var _0xbbf526 = 0; _0xbbf526 < _0x57a06c; _0xbbf526++) {
            _0x59e3e1[_0x549db3 + _0xbbf526] = _0x5d373e[_0x3c7b0d + _0xbbf526];
          }
        }
        return _0x57a06c;
      },
      write: function (_0x25a069, _0x3605b7, _0x1017bf, _0x1e53fc, _0x10b15f, _0x26fd68) {
        if (_0x3605b7.buffer === _0x9c4a59.buffer) {
          _0x26fd68 = false;
        }
        if (!_0x1e53fc) {
          return 0;
        }
        var _0x21f86a = _0x25a069.node;
        _0x21f86a.timestamp = Date.now();
        if (_0x3605b7.subarray && (!_0x21f86a.contents || _0x21f86a.contents.subarray)) {
          if (_0x26fd68) {
            _0x21f86a.contents = _0x3605b7.subarray(_0x1017bf, _0x1017bf + _0x1e53fc);
            _0x21f86a.usedBytes = _0x1e53fc;
            return _0x1e53fc;
          } else if (_0x21f86a.usedBytes === 0 && _0x10b15f === 0) {
            _0x21f86a.contents = _0x3605b7.slice(_0x1017bf, _0x1017bf + _0x1e53fc);
            _0x21f86a.usedBytes = _0x1e53fc;
            return _0x1e53fc;
          } else if (_0x10b15f + _0x1e53fc <= _0x21f86a.usedBytes) {
            _0x21f86a.contents.set(_0x3605b7.subarray(_0x1017bf, _0x1017bf + _0x1e53fc), _0x10b15f);
            return _0x1e53fc;
          }
        }
        _0x34dbd8.expandFileStorage(_0x21f86a, _0x10b15f + _0x1e53fc);
        if (_0x21f86a.contents.subarray && _0x3605b7.subarray) {
          _0x21f86a.contents.set(_0x3605b7.subarray(_0x1017bf, _0x1017bf + _0x1e53fc), _0x10b15f);
        } else {
          for (var _0x4a8802 = 0; _0x4a8802 < _0x1e53fc; _0x4a8802++) {
            _0x21f86a.contents[_0x10b15f + _0x4a8802] = _0x3605b7[_0x1017bf + _0x4a8802];
          }
        }
        _0x21f86a.usedBytes = Math.max(_0x21f86a.usedBytes, _0x10b15f + _0x1e53fc);
        return _0x1e53fc;
      },
      llseek: function (_0x70944b, _0x11579c, _0x52310c) {
        var _0x5c3dc2 = _0x11579c;
        if (_0x52310c === 1) {
          _0x5c3dc2 += _0x70944b.position;
        } else if (_0x52310c === 2) {
          if (_0x2840b9.isFile(_0x70944b.node.mode)) {
            _0x5c3dc2 += _0x70944b.node.usedBytes;
          }
        }
        if (_0x5c3dc2 < 0) {
          throw new _0x2840b9.ErrnoError(28);
        }
        return _0x5c3dc2;
      },
      allocate: function (_0x3a8e00, _0x3f0150, _0x18dfa6) {
        _0x34dbd8.expandFileStorage(_0x3a8e00.node, _0x3f0150 + _0x18dfa6);
        _0x3a8e00.node.usedBytes = Math.max(_0x3a8e00.node.usedBytes, _0x3f0150 + _0x18dfa6);
      },
      mmap: function (_0x2b50a3, _0x56974f, _0x59f6b7, _0x282a65, _0x44892f, _0x510fd9) {
        if (_0x56974f !== 0) {
          throw new _0x2840b9.ErrnoError(28);
        }
        if (!_0x2840b9.isFile(_0x2b50a3.node.mode)) {
          throw new _0x2840b9.ErrnoError(43);
        }
        var _0x1d1673;
        var _0x3fce23;
        var _0xaec75b = _0x2b50a3.node.contents;
        if (!(_0x510fd9 & 2) && _0xaec75b.buffer === _0x4bf5a6) {
          _0x3fce23 = false;
          _0x1d1673 = _0xaec75b.byteOffset;
        } else {
          if (_0x282a65 > 0 || _0x282a65 + _0x59f6b7 < _0xaec75b.length) {
            if (_0xaec75b.subarray) {
              _0xaec75b = _0xaec75b.subarray(_0x282a65, _0x282a65 + _0x59f6b7);
            } else {
              _0xaec75b = Array.prototype.slice.call(_0xaec75b, _0x282a65, _0x282a65 + _0x59f6b7);
            }
          }
          _0x3fce23 = true;
          _0x1d1673 = _0x139b77(_0x59f6b7);
          if (!_0x1d1673) {
            throw new _0x2840b9.ErrnoError(48);
          }
          _0x9c4a59.set(_0xaec75b, _0x1d1673);
        }
        return {
          ptr: _0x1d1673,
          allocated: _0x3fce23
        };
      },
      msync: function (_0x603433, _0x271bd1, _0x5eb07a, _0x382d3a, _0x5cdce7) {
        if (!_0x2840b9.isFile(_0x603433.node.mode)) {
          throw new _0x2840b9.ErrnoError(43);
        }
        if (_0x5cdce7 & 2) {
          return 0;
        }
        var _0x49b940 = _0x34dbd8.stream_ops.write(_0x603433, _0x271bd1, 0, _0x382d3a, _0x5eb07a, false);
        return 0;
      }
    }
  };
  var _0x36c80d = {
    dbs: {},
    indexedDB: function () {
      if (typeof indexedDB !== "undefined") {
        return indexedDB;
      }
      var _0x5ea9bd = null;
      if (typeof window === "object") {
        _0x5ea9bd = window.indexedDB || window.mozIndexedDB || window.webkitIndexedDB || window.msIndexedDB;
      }
      _0x4eb180(_0x5ea9bd, "IDBFS used, but indexedDB not supported");
      return _0x5ea9bd;
    },
    DB_VERSION: 21,
    DB_STORE_NAME: "FILE_DATA",
    mount: function (_0x50519a) {
      return _0x34dbd8.mount.apply(null, arguments);
    },
    syncfs: function (_0x211c5e, _0x1e3f23, _0x5af031) {
      _0x36c80d.getLocalSet(_0x211c5e, function (_0x12a45b, _0x41102b) {
        if (_0x12a45b) {
          return _0x5af031(_0x12a45b);
        }
        _0x36c80d.getRemoteSet(_0x211c5e, function (_0x5aeee7, _0x192e17) {
          if (_0x5aeee7) {
            return _0x5af031(_0x5aeee7);
          }
          var _0x351484 = _0x1e3f23 ? _0x192e17 : _0x41102b;
          var _0x576d4a = _0x1e3f23 ? _0x41102b : _0x192e17;
          _0x36c80d.reconcile(_0x351484, _0x576d4a, _0x5af031);
        });
      });
    },
    getDB: function (_0x4dcb4a, _0x4f6f67) {
      var _0x16726e = _0x36c80d.dbs[_0x4dcb4a];
      if (_0x16726e) {
        return _0x4f6f67(null, _0x16726e);
      }
      var _0x2937e1;
      try {
        _0x2937e1 = _0x36c80d.indexedDB().open(_0x4dcb4a, _0x36c80d.DB_VERSION);
      } catch (_0x295e01) {
        return _0x4f6f67(_0x295e01);
      }
      if (!_0x2937e1) {
        return _0x4f6f67("Unable to connect to IndexedDB");
      }
      _0x2937e1.onupgradeneeded = function (_0x21b6c5) {
        var _0x59cd99 = _0x21b6c5.target.result;
        var _0x40152d = _0x21b6c5.target.transaction;
        var _0x52ba4d;
        if (_0x59cd99.objectStoreNames.contains(_0x36c80d.DB_STORE_NAME)) {
          _0x52ba4d = _0x40152d.objectStore(_0x36c80d.DB_STORE_NAME);
        } else {
          _0x52ba4d = _0x59cd99.createObjectStore(_0x36c80d.DB_STORE_NAME);
        }
        if (!_0x52ba4d.indexNames.contains("timestamp")) {
          _0x52ba4d.createIndex("timestamp", "timestamp", {
            unique: false
          });
        }
      };
      _0x2937e1.onsuccess = function () {
        _0x16726e = _0x2937e1.result;
        _0x36c80d.dbs[_0x4dcb4a] = _0x16726e;
        _0x4f6f67(null, _0x16726e);
      };
      _0x2937e1.onerror = function (_0x3a7b9f) {
        _0x4f6f67(this.error);
        _0x3a7b9f.preventDefault();
      };
    },
    getLocalSet: function (_0x3f6bb2, _0x499fa2) {
      var _0x5144da = {};
      function _0x534c6a(_0x1b6ff2) {
        return _0x1b6ff2 !== "." && _0x1b6ff2 !== "..";
      }
      function _0x179b9c(_0x4e2680) {
        return function (_0x50c194) {
          return _0x5bec41.join2(_0x4e2680, _0x50c194);
        };
      }
      var _0x32f49a = _0x2840b9.readdir(_0x3f6bb2.mountpoint).filter(_0x534c6a).map(_0x179b9c(_0x3f6bb2.mountpoint));
      while (_0x32f49a.length) {
        var _0x32d6c2 = _0x32f49a.pop();
        var _0xe6114b;
        try {
          _0xe6114b = _0x2840b9.stat(_0x32d6c2);
        } catch (_0x5ddd6d) {
          return _0x499fa2(_0x5ddd6d);
        }
        if (_0x2840b9.isDir(_0xe6114b.mode)) {
          _0x32f49a.push.apply(_0x32f49a, _0x2840b9.readdir(_0x32d6c2).filter(_0x534c6a).map(_0x179b9c(_0x32d6c2)));
        }
        _0x5144da[_0x32d6c2] = {
          timestamp: _0xe6114b.mtime
        };
      }
      return _0x499fa2(null, {
        type: "local",
        entries: _0x5144da
      });
    },
    getRemoteSet: function (_0x5c15e2, _0x3d5376) {
      var _0x3c06ac = {};
      _0x36c80d.getDB(_0x5c15e2.mountpoint, function (_0x176aa3, _0x336cf9) {
        if (_0x176aa3) {
          return _0x3d5376(_0x176aa3);
        }
        try {
          var _0x1bda10 = _0x336cf9.transaction([_0x36c80d.DB_STORE_NAME], "readonly");
          _0x1bda10.onerror = function (_0x3456c3) {
            _0x3d5376(this.error);
            _0x3456c3.preventDefault();
          };
          var _0xb17cd = _0x1bda10.objectStore(_0x36c80d.DB_STORE_NAME);
          var _0x30feca = _0xb17cd.index("timestamp");
          _0x30feca.openKeyCursor().onsuccess = function (_0x321acb) {
            var _0x455040 = _0x321acb.target.result;
            if (!_0x455040) {
              return _0x3d5376(null, {
                type: "remote",
                db: _0x336cf9,
                entries: _0x3c06ac
              });
            }
            _0x3c06ac[_0x455040.primaryKey] = {
              timestamp: _0x455040.key
            };
            _0x455040.continue();
          };
        } catch (_0x5329e3) {
          return _0x3d5376(_0x5329e3);
        }
      });
    },
    loadLocalEntry: function (_0x1ba7f3, _0x2d34a3) {
      var _0x46fd1d;
      var _0x1e067c;
      try {
        var _0x29f51a = _0x2840b9.lookupPath(_0x1ba7f3);
        _0x1e067c = _0x29f51a.node;
        _0x46fd1d = _0x2840b9.stat(_0x1ba7f3);
      } catch (_0x216773) {
        return _0x2d34a3(_0x216773);
      }
      if (_0x2840b9.isDir(_0x46fd1d.mode)) {
        return _0x2d34a3(null, {
          timestamp: _0x46fd1d.mtime,
          mode: _0x46fd1d.mode
        });
      } else if (_0x2840b9.isFile(_0x46fd1d.mode)) {
        _0x1e067c.contents = _0x34dbd8.getFileDataAsTypedArray(_0x1e067c);
        return _0x2d34a3(null, {
          timestamp: _0x46fd1d.mtime,
          mode: _0x46fd1d.mode,
          contents: _0x1e067c.contents
        });
      } else {
        return _0x2d34a3(new Error("node type not supported"));
      }
    },
    storeLocalEntry: function (_0x1d4e77, _0x5a6104, _0x2e129d) {
      try {
        if (_0x2840b9.isDir(_0x5a6104.mode)) {
          _0x2840b9.mkdirTree(_0x1d4e77, _0x5a6104.mode);
        } else if (_0x2840b9.isFile(_0x5a6104.mode)) {
          _0x2840b9.writeFile(_0x1d4e77, _0x5a6104.contents, {
            canOwn: true
          });
        } else {
          return _0x2e129d(new Error("node type not supported"));
        }
        _0x2840b9.chmod(_0x1d4e77, _0x5a6104.mode);
        _0x2840b9.utime(_0x1d4e77, _0x5a6104.timestamp, _0x5a6104.timestamp);
      } catch (_0x3d0bd6) {
        return _0x2e129d(_0x3d0bd6);
      }
      _0x2e129d(null);
    },
    removeLocalEntry: function (_0x572adc, _0x120b77) {
      try {
        var _0x53ff5b = _0x2840b9.lookupPath(_0x572adc);
        var _0x4af360 = _0x2840b9.stat(_0x572adc);
        if (_0x2840b9.isDir(_0x4af360.mode)) {
          _0x2840b9.rmdir(_0x572adc);
        } else if (_0x2840b9.isFile(_0x4af360.mode)) {
          _0x2840b9.unlink(_0x572adc);
        }
      } catch (_0x9f4cfd) {
        return _0x120b77(_0x9f4cfd);
      }
      _0x120b77(null);
    },
    loadRemoteEntry: function (_0x5b215c, _0x51279a, _0x5ba4f8) {
      var _0x3c2e56 = _0x5b215c.get(_0x51279a);
      _0x3c2e56.onsuccess = function (_0xcc2540) {
        _0x5ba4f8(null, _0xcc2540.target.result);
      };
      _0x3c2e56.onerror = function (_0x5c51a7) {
        _0x5ba4f8(this.error);
        _0x5c51a7.preventDefault();
      };
    },
    storeRemoteEntry: function (_0x454815, _0x58a855, _0x54adba, _0x564941) {
      var _0x20e8b7 = _0x454815.put(_0x54adba, _0x58a855);
      _0x20e8b7.onsuccess = function () {
        _0x564941(null);
      };
      _0x20e8b7.onerror = function (_0x4f7427) {
        _0x564941(this.error);
        _0x4f7427.preventDefault();
      };
    },
    removeRemoteEntry: function (_0x2e2c78, _0x1e1f4c, _0x10ba94) {
      var _0x14ed26 = _0x2e2c78.delete(_0x1e1f4c);
      _0x14ed26.onsuccess = function () {
        _0x10ba94(null);
      };
      _0x14ed26.onerror = function (_0x1e57f6) {
        _0x10ba94(this.error);
        _0x1e57f6.preventDefault();
      };
    },
    reconcile: function (_0x530cad, _0x1520bf, _0x5b1af3) {
      var _0x3a06fe = 0;
      var _0x5b6797 = [];
      Object.keys(_0x530cad.entries).forEach(function (_0x2a627e) {
        var _0x226fb4 = _0x530cad.entries[_0x2a627e];
        var _0x163e7b = _0x1520bf.entries[_0x2a627e];
        if (!_0x163e7b || _0x226fb4.timestamp.getTime() != _0x163e7b.timestamp.getTime()) {
          _0x5b6797.push(_0x2a627e);
          _0x3a06fe++;
        }
      });
      var _0x3b8402 = [];
      Object.keys(_0x1520bf.entries).forEach(function (_0x778ab0) {
        if (!_0x530cad.entries[_0x778ab0]) {
          _0x3b8402.push(_0x778ab0);
          _0x3a06fe++;
        }
      });
      if (!_0x3a06fe) {
        return _0x5b1af3(null);
      }
      var _0x4afa56 = false;
      var _0x27dbee = _0x530cad.type === "remote" ? _0x530cad.db : _0x1520bf.db;
      var _0x3bf05c = _0x27dbee.transaction([_0x36c80d.DB_STORE_NAME], "readwrite");
      var _0xa5399c = _0x3bf05c.objectStore(_0x36c80d.DB_STORE_NAME);
      function _0x1b1d3c(_0x36fc16) {
        if (_0x36fc16 && !_0x4afa56) {
          _0x4afa56 = true;
          return _0x5b1af3(_0x36fc16);
        }
      }
      _0x3bf05c.onerror = function (_0x2d0798) {
        _0x1b1d3c(this.error);
        _0x2d0798.preventDefault();
      };
      _0x3bf05c.oncomplete = function (_0x283cc5) {
        if (!_0x4afa56) {
          _0x5b1af3(null);
        }
      };
      _0x5b6797.sort().forEach(function (_0x53d34e) {
        if (_0x1520bf.type === "local") {
          _0x36c80d.loadRemoteEntry(_0xa5399c, _0x53d34e, function (_0x3c8039, _0x6b7ad2) {
            if (_0x3c8039) {
              return _0x1b1d3c(_0x3c8039);
            }
            _0x36c80d.storeLocalEntry(_0x53d34e, _0x6b7ad2, _0x1b1d3c);
          });
        } else {
          _0x36c80d.loadLocalEntry(_0x53d34e, function (_0x3dcb41, _0x20b7d8) {
            if (_0x3dcb41) {
              return _0x1b1d3c(_0x3dcb41);
            }
            _0x36c80d.storeRemoteEntry(_0xa5399c, _0x53d34e, _0x20b7d8, _0x1b1d3c);
          });
        }
      });
      _0x3b8402.sort().reverse().forEach(function (_0x47bed5) {
        if (_0x1520bf.type === "local") {
          _0x36c80d.removeLocalEntry(_0x47bed5, _0x1b1d3c);
        } else {
          _0x36c80d.removeRemoteEntry(_0xa5399c, _0x47bed5, _0x1b1d3c);
        }
      });
    }
  };
  var _0x2840b9 = {
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
    lookupPath: function (_0x1e3e94, _0x4adcb3) {
      _0x1e3e94 = _0x522f5a.resolve(_0x2840b9.cwd(), _0x1e3e94);
      _0x4adcb3 = _0x4adcb3 || {};
      if (!_0x1e3e94) {
        return {
          path: "",
          node: null
        };
      }
      var _0x3a4eac = {
        follow_mount: true,
        recurse_count: 0
      };
      for (var _0x3823e5 in _0x3a4eac) {
        if (_0x4adcb3[_0x3823e5] === undefined) {
          _0x4adcb3[_0x3823e5] = _0x3a4eac[_0x3823e5];
        }
      }
      if (_0x4adcb3.recurse_count > 8) {
        throw new _0x2840b9.ErrnoError(32);
      }
      var _0x55f4fe = _0x5bec41.normalizeArray(_0x1e3e94.split("/").filter(function (_0x3098b6) {
        return !!_0x3098b6;
      }), false);
      var _0x44b4d4 = _0x2840b9.root;
      var _0x5e73b3 = "/";
      for (var _0x409f7e = 0; _0x409f7e < _0x55f4fe.length; _0x409f7e++) {
        var _0x12b540 = _0x409f7e === _0x55f4fe.length - 1;
        if (_0x12b540 && _0x4adcb3.parent) {
          break;
        }
        _0x44b4d4 = _0x2840b9.lookupNode(_0x44b4d4, _0x55f4fe[_0x409f7e]);
        _0x5e73b3 = _0x5bec41.join2(_0x5e73b3, _0x55f4fe[_0x409f7e]);
        if (_0x2840b9.isMountpoint(_0x44b4d4)) {
          if (!_0x12b540 || _0x12b540 && _0x4adcb3.follow_mount) {
            _0x44b4d4 = _0x44b4d4.mounted.root;
          }
        }
        if (!_0x12b540 || _0x4adcb3.follow) {
          var _0x2989f0 = 0;
          while (_0x2840b9.isLink(_0x44b4d4.mode)) {
            var _0xbea927 = _0x2840b9.readlink(_0x5e73b3);
            _0x5e73b3 = _0x522f5a.resolve(_0x5bec41.dirname(_0x5e73b3), _0xbea927);
            var _0xaf9be9 = _0x2840b9.lookupPath(_0x5e73b3, {
              recurse_count: _0x4adcb3.recurse_count
            });
            _0x44b4d4 = _0xaf9be9.node;
            if (_0x2989f0++ > 40) {
              throw new _0x2840b9.ErrnoError(32);
            }
          }
        }
      }
      return {
        path: _0x5e73b3,
        node: _0x44b4d4
      };
    },
    getPath: function (_0x427be4) {
      var _0x1727e4;
      while (true) {
        if (_0x2840b9.isRoot(_0x427be4)) {
          var _0x51f67c = _0x427be4.mount.mountpoint;
          if (!_0x1727e4) {
            return _0x51f67c;
          }
          if (_0x51f67c[_0x51f67c.length - 1] !== "/") {
            return _0x51f67c + "/" + _0x1727e4;
          } else {
            return _0x51f67c + _0x1727e4;
          }
        }
        _0x1727e4 = _0x1727e4 ? _0x427be4.name + "/" + _0x1727e4 : _0x427be4.name;
        _0x427be4 = _0x427be4.parent;
      }
    },
    hashName: function (_0x135d2b, _0x3ddb98) {
      var _0x1ad5ce = 0;
      for (var _0x1d139b = 0; _0x1d139b < _0x3ddb98.length; _0x1d139b++) {
        _0x1ad5ce = (_0x1ad5ce << 5) - _0x1ad5ce + _0x3ddb98.charCodeAt(_0x1d139b) | 0;
      }
      return (_0x135d2b + _0x1ad5ce >>> 0) % _0x2840b9.nameTable.length;
    },
    hashAddNode: function (_0x5213cb) {
      var _0x387a16 = _0x2840b9.hashName(_0x5213cb.parent.id, _0x5213cb.name);
      _0x5213cb.name_next = _0x2840b9.nameTable[_0x387a16];
      _0x2840b9.nameTable[_0x387a16] = _0x5213cb;
    },
    hashRemoveNode: function (_0x26d4e8) {
      var _0x4f5691 = _0x2840b9.hashName(_0x26d4e8.parent.id, _0x26d4e8.name);
      if (_0x2840b9.nameTable[_0x4f5691] === _0x26d4e8) {
        _0x2840b9.nameTable[_0x4f5691] = _0x26d4e8.name_next;
      } else {
        var _0x905fc9 = _0x2840b9.nameTable[_0x4f5691];
        while (_0x905fc9) {
          if (_0x905fc9.name_next === _0x26d4e8) {
            _0x905fc9.name_next = _0x26d4e8.name_next;
            break;
          }
          _0x905fc9 = _0x905fc9.name_next;
        }
      }
    },
    lookupNode: function (_0x557e6d, _0x3866e3) {
      var _0x16f4ca = _0x2840b9.mayLookup(_0x557e6d);
      if (_0x16f4ca) {
        throw new _0x2840b9.ErrnoError(_0x16f4ca, _0x557e6d);
      }
      var _0x42d000 = _0x2840b9.hashName(_0x557e6d.id, _0x3866e3);
      for (var _0x37ada1 = _0x2840b9.nameTable[_0x42d000]; _0x37ada1; _0x37ada1 = _0x37ada1.name_next) {
        var _0x279e8e = _0x37ada1.name;
        if (_0x37ada1.parent.id === _0x557e6d.id && _0x279e8e === _0x3866e3) {
          return _0x37ada1;
        }
      }
      return _0x2840b9.lookup(_0x557e6d, _0x3866e3);
    },
    createNode: function (_0x1c4bef, _0x5d0c91, _0x105df4, _0x25d5b5) {
      var _0x1631ea = new _0x2840b9.FSNode(_0x1c4bef, _0x5d0c91, _0x105df4, _0x25d5b5);
      _0x2840b9.hashAddNode(_0x1631ea);
      return _0x1631ea;
    },
    destroyNode: function (_0x265f2d) {
      _0x2840b9.hashRemoveNode(_0x265f2d);
    },
    isRoot: function (_0x42d2ce) {
      return _0x42d2ce === _0x42d2ce.parent;
    },
    isMountpoint: function (_0x1d5e4e) {
      return !!_0x1d5e4e.mounted;
    },
    isFile: function (_0x421ac1) {
      return (_0x421ac1 & 61440) === 32768;
    },
    isDir: function (_0x3fbca4) {
      return (_0x3fbca4 & 61440) === 16384;
    },
    isLink: function (_0x5be055) {
      return (_0x5be055 & 61440) === 40960;
    },
    isChrdev: function (_0x35f2ab) {
      return (_0x35f2ab & 61440) === 8192;
    },
    isBlkdev: function (_0x8c1fae) {
      return (_0x8c1fae & 61440) === 24576;
    },
    isFIFO: function (_0x281266) {
      return (_0x281266 & 61440) === 4096;
    },
    isSocket: function (_0x1209dc) {
      return (_0x1209dc & 49152) === 49152;
    },
    flagModes: {
      r: 0,
      "r+": 2,
      w: 577,
      "w+": 578,
      a: 1089,
      "a+": 1090
    },
    modeStringToFlags: function (_0x46b166) {
      var _0xd8e04d = _0x2840b9.flagModes[_0x46b166];
      if (typeof _0xd8e04d === "undefined") {
        throw new Error("Unknown file open mode: " + _0x46b166);
      }
      return _0xd8e04d;
    },
    flagsToPermissionString: function (_0x2fc2f4) {
      var _0x233ce2 = ["r", "w", "rw"][_0x2fc2f4 & 3];
      if (_0x2fc2f4 & 512) {
        _0x233ce2 += "w";
      }
      return _0x233ce2;
    },
    nodePermissions: function (_0x225d9c, _0x56f5ef) {
      if (_0x2840b9.ignorePermissions) {
        return 0;
      }
      if (_0x56f5ef.includes("r") && !(_0x225d9c.mode & 292)) {
        return 2;
      } else if (_0x56f5ef.includes("w") && !(_0x225d9c.mode & 146)) {
        return 2;
      } else if (_0x56f5ef.includes("x") && !(_0x225d9c.mode & 73)) {
        return 2;
      }
      return 0;
    },
    mayLookup: function (_0x53c837) {
      var _0x16ceb8 = _0x2840b9.nodePermissions(_0x53c837, "x");
      if (_0x16ceb8) {
        return _0x16ceb8;
      }
      if (!_0x53c837.node_ops.lookup) {
        return 2;
      }
      return 0;
    },
    mayCreate: function (_0x1ba12a, _0x21afea) {
      try {
        var _0x48f7dd = _0x2840b9.lookupNode(_0x1ba12a, _0x21afea);
        return 20;
      } catch (_0x5ef157) {}
      return _0x2840b9.nodePermissions(_0x1ba12a, "wx");
    },
    mayDelete: function (_0x204274, _0x559ec2, _0xe1e865) {
      var _0x3a3e61;
      try {
        _0x3a3e61 = _0x2840b9.lookupNode(_0x204274, _0x559ec2);
      } catch (_0x10053e) {
        return _0x10053e.errno;
      }
      var _0x259bcf = _0x2840b9.nodePermissions(_0x204274, "wx");
      if (_0x259bcf) {
        return _0x259bcf;
      }
      if (_0xe1e865) {
        if (!_0x2840b9.isDir(_0x3a3e61.mode)) {
          return 54;
        }
        if (_0x2840b9.isRoot(_0x3a3e61) || _0x2840b9.getPath(_0x3a3e61) === _0x2840b9.cwd()) {
          return 10;
        }
      } else if (_0x2840b9.isDir(_0x3a3e61.mode)) {
        return 31;
      }
      return 0;
    },
    mayOpen: function (_0x103f67, _0x17df96) {
      if (!_0x103f67) {
        return 44;
      }
      if (_0x2840b9.isLink(_0x103f67.mode)) {
        return 32;
      } else if (_0x2840b9.isDir(_0x103f67.mode)) {
        if (_0x2840b9.flagsToPermissionString(_0x17df96) !== "r" || _0x17df96 & 512) {
          return 31;
        }
      }
      return _0x2840b9.nodePermissions(_0x103f67, _0x2840b9.flagsToPermissionString(_0x17df96));
    },
    MAX_OPEN_FDS: 4096,
    nextfd: function (_0x5921ea, _0x15c320) {
      _0x5921ea = _0x5921ea || 0;
      _0x15c320 = _0x15c320 || _0x2840b9.MAX_OPEN_FDS;
      for (var _0x2a7528 = _0x5921ea; _0x2a7528 <= _0x15c320; _0x2a7528++) {
        if (!_0x2840b9.streams[_0x2a7528]) {
          return _0x2a7528;
        }
      }
      throw new _0x2840b9.ErrnoError(33);
    },
    getStream: function (_0x532db6) {
      return _0x2840b9.streams[_0x532db6];
    },
    createStream: function (_0x3e073e, _0x37e01a, _0x3db2bd) {
      if (!_0x2840b9.FSStream) {
        _0x2840b9.FSStream = function () {};
        _0x2840b9.FSStream.prototype = {
          object: {
            get: function () {
              return this.node;
            },
            set: function (_0x4f6acb) {
              this.node = _0x4f6acb;
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
      var _0x62ca4a = new _0x2840b9.FSStream();
      for (var _0x4608e0 in _0x3e073e) {
        _0x62ca4a[_0x4608e0] = _0x3e073e[_0x4608e0];
      }
      _0x3e073e = _0x62ca4a;
      var _0x4b7340 = _0x2840b9.nextfd(_0x37e01a, _0x3db2bd);
      _0x3e073e.fd = _0x4b7340;
      _0x2840b9.streams[_0x4b7340] = _0x3e073e;
      return _0x3e073e;
    },
    closeStream: function (_0x4d0f92) {
      _0x2840b9.streams[_0x4d0f92] = null;
    },
    chrdev_stream_ops: {
      open: function (_0x178bcb) {
        var _0x4a9744 = _0x2840b9.getDevice(_0x178bcb.node.rdev);
        _0x178bcb.stream_ops = _0x4a9744.stream_ops;
        if (_0x178bcb.stream_ops.open) {
          _0x178bcb.stream_ops.open(_0x178bcb);
        }
      },
      llseek: function () {
        throw new _0x2840b9.ErrnoError(70);
      }
    },
    major: function (_0xfb765f) {
      return _0xfb765f >> 8;
    },
    minor: function (_0x12dca5) {
      return _0x12dca5 & 255;
    },
    makedev: function (_0x980721, _0x19569c) {
      return _0x980721 << 8 | _0x19569c;
    },
    registerDevice: function (_0x499ece, _0x5433ee) {
      _0x2840b9.devices[_0x499ece] = {
        stream_ops: _0x5433ee
      };
    },
    getDevice: function (_0x109f72) {
      return _0x2840b9.devices[_0x109f72];
    },
    getMounts: function (_0x122f23) {
      var _0x18087c = [];
      var _0x4baba2 = [_0x122f23];
      while (_0x4baba2.length) {
        var _0x1fb54b = _0x4baba2.pop();
        _0x18087c.push(_0x1fb54b);
        _0x4baba2.push.apply(_0x4baba2, _0x1fb54b.mounts);
      }
      return _0x18087c;
    },
    syncfs: function (_0x401800, _0x5f2ea6) {
      if (typeof _0x401800 === "function") {
        _0x5f2ea6 = _0x401800;
        _0x401800 = false;
      }
      _0x2840b9.syncFSRequests++;
      if (_0x2840b9.syncFSRequests > 1) {
        _0x1650b6("warning: " + _0x2840b9.syncFSRequests + " FS.syncfs operations in flight at once, probably just doing extra work");
      }
      var _0x1501cd = _0x2840b9.getMounts(_0x2840b9.root.mount);
      var _0x499257 = 0;
      function _0x126773(_0xc5535f) {
        _0x2840b9.syncFSRequests--;
        return _0x5f2ea6(_0xc5535f);
      }
      function _0x2adb81(_0x26f5cc) {
        if (_0x26f5cc) {
          if (!_0x2adb81.errored) {
            _0x2adb81.errored = true;
            return _0x126773(_0x26f5cc);
          }
          return;
        }
        if (++_0x499257 >= _0x1501cd.length) {
          _0x126773(null);
        }
      }
      _0x1501cd.forEach(function (_0x2452d7) {
        if (!_0x2452d7.type.syncfs) {
          return _0x2adb81(null);
        }
        _0x2452d7.type.syncfs(_0x2452d7, _0x401800, _0x2adb81);
      });
    },
    mount: function (_0x418492, _0x336012, _0x5c84fa) {
      var _0x5f1a89 = _0x5c84fa === "/";
      var _0x198427 = !_0x5c84fa;
      var _0x4d271d;
      if (_0x5f1a89 && _0x2840b9.root) {
        throw new _0x2840b9.ErrnoError(10);
      } else if (!_0x5f1a89 && !_0x198427) {
        var _0x111533 = _0x2840b9.lookupPath(_0x5c84fa, {
          follow_mount: false
        });
        _0x5c84fa = _0x111533.path;
        _0x4d271d = _0x111533.node;
        if (_0x2840b9.isMountpoint(_0x4d271d)) {
          throw new _0x2840b9.ErrnoError(10);
        }
        if (!_0x2840b9.isDir(_0x4d271d.mode)) {
          throw new _0x2840b9.ErrnoError(54);
        }
      }
      var _0x22e6f5 = {
        type: _0x418492,
        opts: _0x336012,
        mountpoint: _0x5c84fa,
        mounts: []
      };
      var _0x437ec6 = _0x418492.mount(_0x22e6f5);
      _0x437ec6.mount = _0x22e6f5;
      _0x22e6f5.root = _0x437ec6;
      if (_0x5f1a89) {
        _0x2840b9.root = _0x437ec6;
      } else if (_0x4d271d) {
        _0x4d271d.mounted = _0x22e6f5;
        if (_0x4d271d.mount) {
          _0x4d271d.mount.mounts.push(_0x22e6f5);
        }
      }
      return _0x437ec6;
    },
    unmount: function (_0x40b366) {
      var _0xd7df48 = _0x2840b9.lookupPath(_0x40b366, {
        follow_mount: false
      });
      if (!_0x2840b9.isMountpoint(_0xd7df48.node)) {
        throw new _0x2840b9.ErrnoError(28);
      }
      var _0x46458d = _0xd7df48.node;
      var _0x4ad67b = _0x46458d.mounted;
      var _0x5df488 = _0x2840b9.getMounts(_0x4ad67b);
      Object.keys(_0x2840b9.nameTable).forEach(function (_0x345a4d) {
        var _0x4070c8 = _0x2840b9.nameTable[_0x345a4d];
        while (_0x4070c8) {
          var _0x204a31 = _0x4070c8.name_next;
          if (_0x5df488.includes(_0x4070c8.mount)) {
            _0x2840b9.destroyNode(_0x4070c8);
          }
          _0x4070c8 = _0x204a31;
        }
      });
      _0x46458d.mounted = null;
      var _0x3b9c06 = _0x46458d.mount.mounts.indexOf(_0x4ad67b);
      _0x46458d.mount.mounts.splice(_0x3b9c06, 1);
    },
    lookup: function (_0x4a81ba, _0x292bed) {
      return _0x4a81ba.node_ops.lookup(_0x4a81ba, _0x292bed);
    },
    mknod: function (_0x2391a1, _0x4c8fc5, _0x314658) {
      var _0x44cc72 = _0x2840b9.lookupPath(_0x2391a1, {
        parent: true
      });
      var _0x375bd5 = _0x44cc72.node;
      var _0x206ad0 = _0x5bec41.basename(_0x2391a1);
      if (!_0x206ad0 || _0x206ad0 === "." || _0x206ad0 === "..") {
        throw new _0x2840b9.ErrnoError(28);
      }
      var _0x5dde53 = _0x2840b9.mayCreate(_0x375bd5, _0x206ad0);
      if (_0x5dde53) {
        throw new _0x2840b9.ErrnoError(_0x5dde53);
      }
      if (!_0x375bd5.node_ops.mknod) {
        throw new _0x2840b9.ErrnoError(63);
      }
      return _0x375bd5.node_ops.mknod(_0x375bd5, _0x206ad0, _0x4c8fc5, _0x314658);
    },
    create: function (_0x1f953c, _0x1e6379) {
      _0x1e6379 = _0x1e6379 !== undefined ? _0x1e6379 : 438;
      _0x1e6379 &= 4095;
      _0x1e6379 |= 32768;
      return _0x2840b9.mknod(_0x1f953c, _0x1e6379, 0);
    },
    mkdir: function (_0x56680b, _0x15008a) {
      _0x15008a = _0x15008a !== undefined ? _0x15008a : 511;
      _0x15008a &= 1023;
      _0x15008a |= 16384;
      return _0x2840b9.mknod(_0x56680b, _0x15008a, 0);
    },
    mkdirTree: function (_0x103038, _0x2108ac) {
      var _0x2a51ef = _0x103038.split("/");
      var _0x233255 = "";
      for (var _0x3fe29f = 0; _0x3fe29f < _0x2a51ef.length; ++_0x3fe29f) {
        if (!_0x2a51ef[_0x3fe29f]) {
          continue;
        }
        _0x233255 += "/" + _0x2a51ef[_0x3fe29f];
        try {
          _0x2840b9.mkdir(_0x233255, _0x2108ac);
        } catch (_0x23b6e2) {
          if (_0x23b6e2.errno != 20) {
            throw _0x23b6e2;
          }
        }
      }
    },
    mkdev: function (_0x51bb7f, _0x4989ea, _0x1ca6de) {
      if (typeof _0x1ca6de === "undefined") {
        _0x1ca6de = _0x4989ea;
        _0x4989ea = 438;
      }
      _0x4989ea |= 8192;
      return _0x2840b9.mknod(_0x51bb7f, _0x4989ea, _0x1ca6de);
    },
    symlink: function (_0x39e2cc, _0x4643b2) {
      if (!_0x522f5a.resolve(_0x39e2cc)) {
        throw new _0x2840b9.ErrnoError(44);
      }
      var _0x4a205a = _0x2840b9.lookupPath(_0x4643b2, {
        parent: true
      });
      var _0x3f96d3 = _0x4a205a.node;
      if (!_0x3f96d3) {
        throw new _0x2840b9.ErrnoError(44);
      }
      var _0x459872 = _0x5bec41.basename(_0x4643b2);
      var _0x3e01db = _0x2840b9.mayCreate(_0x3f96d3, _0x459872);
      if (_0x3e01db) {
        throw new _0x2840b9.ErrnoError(_0x3e01db);
      }
      if (!_0x3f96d3.node_ops.symlink) {
        throw new _0x2840b9.ErrnoError(63);
      }
      return _0x3f96d3.node_ops.symlink(_0x3f96d3, _0x459872, _0x39e2cc);
    },
    rename: function (_0x35d6ef, _0x186159) {
      var _0x2a8481 = _0x5bec41.dirname(_0x35d6ef);
      var _0x51d22d = _0x5bec41.dirname(_0x186159);
      var _0xf60c9 = _0x5bec41.basename(_0x35d6ef);
      var _0x28dace = _0x5bec41.basename(_0x186159);
      var _0x1f4f84;
      var _0x39cbce;
      var _0x17dfa8;
      _0x1f4f84 = _0x2840b9.lookupPath(_0x35d6ef, {
        parent: true
      });
      _0x39cbce = _0x1f4f84.node;
      _0x1f4f84 = _0x2840b9.lookupPath(_0x186159, {
        parent: true
      });
      _0x17dfa8 = _0x1f4f84.node;
      if (!_0x39cbce || !_0x17dfa8) {
        throw new _0x2840b9.ErrnoError(44);
      }
      if (_0x39cbce.mount !== _0x17dfa8.mount) {
        throw new _0x2840b9.ErrnoError(75);
      }
      var _0x5a1013 = _0x2840b9.lookupNode(_0x39cbce, _0xf60c9);
      var _0x4afee6 = _0x522f5a.relative(_0x35d6ef, _0x51d22d);
      if (_0x4afee6.charAt(0) !== ".") {
        throw new _0x2840b9.ErrnoError(28);
      }
      _0x4afee6 = _0x522f5a.relative(_0x186159, _0x2a8481);
      if (_0x4afee6.charAt(0) !== ".") {
        throw new _0x2840b9.ErrnoError(55);
      }
      var _0x13e333;
      try {
        _0x13e333 = _0x2840b9.lookupNode(_0x17dfa8, _0x28dace);
      } catch (_0x581785) {}
      if (_0x5a1013 === _0x13e333) {
        return;
      }
      var _0xecfb6c = _0x2840b9.isDir(_0x5a1013.mode);
      var _0x158ee2 = _0x2840b9.mayDelete(_0x39cbce, _0xf60c9, _0xecfb6c);
      if (_0x158ee2) {
        throw new _0x2840b9.ErrnoError(_0x158ee2);
      }
      _0x158ee2 = _0x13e333 ? _0x2840b9.mayDelete(_0x17dfa8, _0x28dace, _0xecfb6c) : _0x2840b9.mayCreate(_0x17dfa8, _0x28dace);
      if (_0x158ee2) {
        throw new _0x2840b9.ErrnoError(_0x158ee2);
      }
      if (!_0x39cbce.node_ops.rename) {
        throw new _0x2840b9.ErrnoError(63);
      }
      if (_0x2840b9.isMountpoint(_0x5a1013) || _0x13e333 && _0x2840b9.isMountpoint(_0x13e333)) {
        throw new _0x2840b9.ErrnoError(10);
      }
      if (_0x17dfa8 !== _0x39cbce) {
        _0x158ee2 = _0x2840b9.nodePermissions(_0x39cbce, "w");
        if (_0x158ee2) {
          throw new _0x2840b9.ErrnoError(_0x158ee2);
        }
      }
      try {
        if (_0x2840b9.trackingDelegate.willMovePath) {
          _0x2840b9.trackingDelegate.willMovePath(_0x35d6ef, _0x186159);
        }
      } catch (_0x56c7e2) {
        _0x1650b6("FS.trackingDelegate['willMovePath']('" + _0x35d6ef + "', '" + _0x186159 + "') threw an exception: " + _0x56c7e2.message);
      }
      _0x2840b9.hashRemoveNode(_0x5a1013);
      try {
        _0x39cbce.node_ops.rename(_0x5a1013, _0x17dfa8, _0x28dace);
      } catch (_0xb7f30f) {
        throw _0xb7f30f;
      } finally {
        _0x2840b9.hashAddNode(_0x5a1013);
      }
      try {
        if (_0x2840b9.trackingDelegate.onMovePath) {
          _0x2840b9.trackingDelegate.onMovePath(_0x35d6ef, _0x186159);
        }
      } catch (_0x1a117a) {
        _0x1650b6("FS.trackingDelegate['onMovePath']('" + _0x35d6ef + "', '" + _0x186159 + "') threw an exception: " + _0x1a117a.message);
      }
    },
    rmdir: function (_0x57270c) {
      var _0x42a169 = _0x2840b9.lookupPath(_0x57270c, {
        parent: true
      });
      var _0x426345 = _0x42a169.node;
      var _0x31e9a1 = _0x5bec41.basename(_0x57270c);
      var _0x2d8460 = _0x2840b9.lookupNode(_0x426345, _0x31e9a1);
      var _0x2ecf38 = _0x2840b9.mayDelete(_0x426345, _0x31e9a1, true);
      if (_0x2ecf38) {
        throw new _0x2840b9.ErrnoError(_0x2ecf38);
      }
      if (!_0x426345.node_ops.rmdir) {
        throw new _0x2840b9.ErrnoError(63);
      }
      if (_0x2840b9.isMountpoint(_0x2d8460)) {
        throw new _0x2840b9.ErrnoError(10);
      }
      try {
        if (_0x2840b9.trackingDelegate.willDeletePath) {
          _0x2840b9.trackingDelegate.willDeletePath(_0x57270c);
        }
      } catch (_0x106bd6) {
        _0x1650b6("FS.trackingDelegate['willDeletePath']('" + _0x57270c + "') threw an exception: " + _0x106bd6.message);
      }
      _0x426345.node_ops.rmdir(_0x426345, _0x31e9a1);
      _0x2840b9.destroyNode(_0x2d8460);
      try {
        if (_0x2840b9.trackingDelegate.onDeletePath) {
          _0x2840b9.trackingDelegate.onDeletePath(_0x57270c);
        }
      } catch (_0x1998ee) {
        _0x1650b6("FS.trackingDelegate['onDeletePath']('" + _0x57270c + "') threw an exception: " + _0x1998ee.message);
      }
    },
    readdir: function (_0x862511) {
      var _0x1a3636 = _0x2840b9.lookupPath(_0x862511, {
        follow: true
      });
      var _0x56f691 = _0x1a3636.node;
      if (!_0x56f691.node_ops.readdir) {
        throw new _0x2840b9.ErrnoError(54);
      }
      return _0x56f691.node_ops.readdir(_0x56f691);
    },
    unlink: function (_0x15a855) {
      var _0x5a209d = _0x2840b9.lookupPath(_0x15a855, {
        parent: true
      });
      var _0x4de56e = _0x5a209d.node;
      var _0x2e746e = _0x5bec41.basename(_0x15a855);
      var _0x1ff6b1 = _0x2840b9.lookupNode(_0x4de56e, _0x2e746e);
      var _0x154105 = _0x2840b9.mayDelete(_0x4de56e, _0x2e746e, false);
      if (_0x154105) {
        throw new _0x2840b9.ErrnoError(_0x154105);
      }
      if (!_0x4de56e.node_ops.unlink) {
        throw new _0x2840b9.ErrnoError(63);
      }
      if (_0x2840b9.isMountpoint(_0x1ff6b1)) {
        throw new _0x2840b9.ErrnoError(10);
      }
      try {
        if (_0x2840b9.trackingDelegate.willDeletePath) {
          _0x2840b9.trackingDelegate.willDeletePath(_0x15a855);
        }
      } catch (_0x16668a) {
        _0x1650b6("FS.trackingDelegate['willDeletePath']('" + _0x15a855 + "') threw an exception: " + _0x16668a.message);
      }
      _0x4de56e.node_ops.unlink(_0x4de56e, _0x2e746e);
      _0x2840b9.destroyNode(_0x1ff6b1);
      try {
        if (_0x2840b9.trackingDelegate.onDeletePath) {
          _0x2840b9.trackingDelegate.onDeletePath(_0x15a855);
        }
      } catch (_0x5300bf) {
        _0x1650b6("FS.trackingDelegate['onDeletePath']('" + _0x15a855 + "') threw an exception: " + _0x5300bf.message);
      }
    },
    readlink: function (_0x5f4021) {
      var _0x35ba9b = _0x2840b9.lookupPath(_0x5f4021);
      var _0x224c7f = _0x35ba9b.node;
      if (!_0x224c7f) {
        throw new _0x2840b9.ErrnoError(44);
      }
      if (!_0x224c7f.node_ops.readlink) {
        throw new _0x2840b9.ErrnoError(28);
      }
      return _0x522f5a.resolve(_0x2840b9.getPath(_0x224c7f.parent), _0x224c7f.node_ops.readlink(_0x224c7f));
    },
    stat: function (_0x13b822, _0x276ed1) {
      var _0x94d02e = _0x2840b9.lookupPath(_0x13b822, {
        follow: !_0x276ed1
      });
      var _0x55d84b = _0x94d02e.node;
      if (!_0x55d84b) {
        throw new _0x2840b9.ErrnoError(44);
      }
      if (!_0x55d84b.node_ops.getattr) {
        throw new _0x2840b9.ErrnoError(63);
      }
      return _0x55d84b.node_ops.getattr(_0x55d84b);
    },
    lstat: function (_0x85cb27) {
      return _0x2840b9.stat(_0x85cb27, true);
    },
    chmod: function (_0x4bf04d, _0xc434e0, _0xa2d538) {
      var _0x31247b;
      if (typeof _0x4bf04d === "string") {
        var _0x430f27 = _0x2840b9.lookupPath(_0x4bf04d, {
          follow: !_0xa2d538
        });
        _0x31247b = _0x430f27.node;
      } else {
        _0x31247b = _0x4bf04d;
      }
      if (!_0x31247b.node_ops.setattr) {
        throw new _0x2840b9.ErrnoError(63);
      }
      _0x31247b.node_ops.setattr(_0x31247b, {
        mode: _0xc434e0 & 4095 | _0x31247b.mode & ~4095,
        timestamp: Date.now()
      });
    },
    lchmod: function (_0x4cd6bb, _0x58fecc) {
      _0x2840b9.chmod(_0x4cd6bb, _0x58fecc, true);
    },
    fchmod: function (_0x4cf7ec, _0x4647b6) {
      var _0x199797 = _0x2840b9.getStream(_0x4cf7ec);
      if (!_0x199797) {
        throw new _0x2840b9.ErrnoError(8);
      }
      _0x2840b9.chmod(_0x199797.node, _0x4647b6);
    },
    chown: function (_0xd364f1, _0xf12cc2, _0x245c9f, _0x88811d) {
      var _0x3554db;
      if (typeof _0xd364f1 === "string") {
        var _0x435cde = _0x2840b9.lookupPath(_0xd364f1, {
          follow: !_0x88811d
        });
        _0x3554db = _0x435cde.node;
      } else {
        _0x3554db = _0xd364f1;
      }
      if (!_0x3554db.node_ops.setattr) {
        throw new _0x2840b9.ErrnoError(63);
      }
      _0x3554db.node_ops.setattr(_0x3554db, {
        timestamp: Date.now()
      });
    },
    lchown: function (_0x438c3e, _0x192008, _0x3a22b5) {
      _0x2840b9.chown(_0x438c3e, _0x192008, _0x3a22b5, true);
    },
    fchown: function (_0x36f860, _0x5e3cf7, _0x10ce6c) {
      var _0x4ea659 = _0x2840b9.getStream(_0x36f860);
      if (!_0x4ea659) {
        throw new _0x2840b9.ErrnoError(8);
      }
      _0x2840b9.chown(_0x4ea659.node, _0x5e3cf7, _0x10ce6c);
    },
    truncate: function (_0x13b369, _0x4072b4) {
      if (_0x4072b4 < 0) {
        throw new _0x2840b9.ErrnoError(28);
      }
      var _0xb69c25;
      if (typeof _0x13b369 === "string") {
        var _0x150cb3 = _0x2840b9.lookupPath(_0x13b369, {
          follow: true
        });
        _0xb69c25 = _0x150cb3.node;
      } else {
        _0xb69c25 = _0x13b369;
      }
      if (!_0xb69c25.node_ops.setattr) {
        throw new _0x2840b9.ErrnoError(63);
      }
      if (_0x2840b9.isDir(_0xb69c25.mode)) {
        throw new _0x2840b9.ErrnoError(31);
      }
      if (!_0x2840b9.isFile(_0xb69c25.mode)) {
        throw new _0x2840b9.ErrnoError(28);
      }
      var _0x286060 = _0x2840b9.nodePermissions(_0xb69c25, "w");
      if (_0x286060) {
        throw new _0x2840b9.ErrnoError(_0x286060);
      }
      _0xb69c25.node_ops.setattr(_0xb69c25, {
        size: _0x4072b4,
        timestamp: Date.now()
      });
    },
    ftruncate: function (_0x5dda22, _0xf4b54b) {
      var _0xe9d54b = _0x2840b9.getStream(_0x5dda22);
      if (!_0xe9d54b) {
        throw new _0x2840b9.ErrnoError(8);
      }
      if ((_0xe9d54b.flags & 2097155) === 0) {
        throw new _0x2840b9.ErrnoError(28);
      }
      _0x2840b9.truncate(_0xe9d54b.node, _0xf4b54b);
    },
    utime: function (_0x139824, _0x59aa53, _0x512d1c) {
      var _0x128fdb = _0x2840b9.lookupPath(_0x139824, {
        follow: true
      });
      var _0x52993c = _0x128fdb.node;
      _0x52993c.node_ops.setattr(_0x52993c, {
        timestamp: Math.max(_0x59aa53, _0x512d1c)
      });
    },
    open: function (_0x1ce7a4, _0x16a51b, _0x27236f, _0x50e879, _0x57693d) {
      if (_0x1ce7a4 === "") {
        throw new _0x2840b9.ErrnoError(44);
      }
      _0x16a51b = typeof _0x16a51b === "string" ? _0x2840b9.modeStringToFlags(_0x16a51b) : _0x16a51b;
      _0x27236f = typeof _0x27236f === "undefined" ? 438 : _0x27236f;
      if (_0x16a51b & 64) {
        _0x27236f = _0x27236f & 4095 | 32768;
      } else {
        _0x27236f = 0;
      }
      var _0x579026;
      if (typeof _0x1ce7a4 === "object") {
        _0x579026 = _0x1ce7a4;
      } else {
        _0x1ce7a4 = _0x5bec41.normalize(_0x1ce7a4);
        try {
          var _0x17f5d2 = _0x2840b9.lookupPath(_0x1ce7a4, {
            follow: !(_0x16a51b & 131072)
          });
          _0x579026 = _0x17f5d2.node;
        } catch (_0x263433) {}
      }
      var _0xefb8f2 = false;
      if (_0x16a51b & 64) {
        if (_0x579026) {
          if (_0x16a51b & 128) {
            throw new _0x2840b9.ErrnoError(20);
          }
        } else {
          _0x579026 = _0x2840b9.mknod(_0x1ce7a4, _0x27236f, 0);
          _0xefb8f2 = true;
        }
      }
      if (!_0x579026) {
        throw new _0x2840b9.ErrnoError(44);
      }
      if (_0x2840b9.isChrdev(_0x579026.mode)) {
        _0x16a51b &= ~512;
      }
      if (_0x16a51b & 65536 && !_0x2840b9.isDir(_0x579026.mode)) {
        throw new _0x2840b9.ErrnoError(54);
      }
      if (!_0xefb8f2) {
        var _0x5be0bb = _0x2840b9.mayOpen(_0x579026, _0x16a51b);
        if (_0x5be0bb) {
          throw new _0x2840b9.ErrnoError(_0x5be0bb);
        }
      }
      if (_0x16a51b & 512) {
        _0x2840b9.truncate(_0x579026, 0);
      }
      _0x16a51b &= ~131712;
      var _0x497e1e = _0x2840b9.createStream({
        node: _0x579026,
        path: _0x2840b9.getPath(_0x579026),
        flags: _0x16a51b,
        seekable: true,
        position: 0,
        stream_ops: _0x579026.stream_ops,
        ungotten: [],
        error: false
      }, _0x50e879, _0x57693d);
      if (_0x497e1e.stream_ops.open) {
        _0x497e1e.stream_ops.open(_0x497e1e);
      }
      if (_0x289557.logReadFiles && !(_0x16a51b & 1)) {
        if (!_0x2840b9.readFiles) {
          _0x2840b9.readFiles = {};
        }
        if (!(_0x1ce7a4 in _0x2840b9.readFiles)) {
          _0x2840b9.readFiles[_0x1ce7a4] = 1;
          _0x1650b6("FS.trackingDelegate error on read file: " + _0x1ce7a4);
        }
      }
      try {
        if (_0x2840b9.trackingDelegate.onOpenFile) {
          var _0x74d66c = 0;
          if ((_0x16a51b & 2097155) !== 1) {
            _0x74d66c |= _0x2840b9.tracking.openFlags.READ;
          }
          if ((_0x16a51b & 2097155) !== 0) {
            _0x74d66c |= _0x2840b9.tracking.openFlags.WRITE;
          }
          _0x2840b9.trackingDelegate.onOpenFile(_0x1ce7a4, _0x74d66c);
        }
      } catch (_0x5599da) {
        _0x1650b6("FS.trackingDelegate['onOpenFile']('" + _0x1ce7a4 + "', flags) threw an exception: " + _0x5599da.message);
      }
      return _0x497e1e;
    },
    close: function (_0x4cb21e) {
      if (_0x2840b9.isClosed(_0x4cb21e)) {
        throw new _0x2840b9.ErrnoError(8);
      }
      if (_0x4cb21e.getdents) {
        _0x4cb21e.getdents = null;
      }
      try {
        if (_0x4cb21e.stream_ops.close) {
          _0x4cb21e.stream_ops.close(_0x4cb21e);
        }
      } catch (_0x382c4d) {
        throw _0x382c4d;
      } finally {
        _0x2840b9.closeStream(_0x4cb21e.fd);
      }
      _0x4cb21e.fd = null;
    },
    isClosed: function (_0x45061d) {
      return _0x45061d.fd === null;
    },
    llseek: function (_0x2043ec, _0x27082d, _0x2ba5fa) {
      if (_0x2840b9.isClosed(_0x2043ec)) {
        throw new _0x2840b9.ErrnoError(8);
      }
      if (!_0x2043ec.seekable || !_0x2043ec.stream_ops.llseek) {
        throw new _0x2840b9.ErrnoError(70);
      }
      if (_0x2ba5fa != 0 && _0x2ba5fa != 1 && _0x2ba5fa != 2) {
        throw new _0x2840b9.ErrnoError(28);
      }
      _0x2043ec.position = _0x2043ec.stream_ops.llseek(_0x2043ec, _0x27082d, _0x2ba5fa);
      _0x2043ec.ungotten = [];
      return _0x2043ec.position;
    },
    read: function (_0x7377c, _0x7090b8, _0x49aa22, _0x2ce7fe, _0x4e463b) {
      if (_0x2ce7fe < 0 || _0x4e463b < 0) {
        throw new _0x2840b9.ErrnoError(28);
      }
      if (_0x2840b9.isClosed(_0x7377c)) {
        throw new _0x2840b9.ErrnoError(8);
      }
      if ((_0x7377c.flags & 2097155) === 1) {
        throw new _0x2840b9.ErrnoError(8);
      }
      if (_0x2840b9.isDir(_0x7377c.node.mode)) {
        throw new _0x2840b9.ErrnoError(31);
      }
      if (!_0x7377c.stream_ops.read) {
        throw new _0x2840b9.ErrnoError(28);
      }
      var _0x27a982 = typeof _0x4e463b !== "undefined";
      if (!_0x27a982) {
        _0x4e463b = _0x7377c.position;
      } else if (!_0x7377c.seekable) {
        throw new _0x2840b9.ErrnoError(70);
      }
      var _0x451eec = _0x7377c.stream_ops.read(_0x7377c, _0x7090b8, _0x49aa22, _0x2ce7fe, _0x4e463b);
      if (!_0x27a982) {
        _0x7377c.position += _0x451eec;
      }
      return _0x451eec;
    },
    write: function (_0x57c6f7, _0x2ceacf, _0xd1b656, _0x5d2c61, _0x474189, _0x1d8f49) {
      if (_0x5d2c61 < 0 || _0x474189 < 0) {
        throw new _0x2840b9.ErrnoError(28);
      }
      if (_0x2840b9.isClosed(_0x57c6f7)) {
        throw new _0x2840b9.ErrnoError(8);
      }
      if ((_0x57c6f7.flags & 2097155) === 0) {
        throw new _0x2840b9.ErrnoError(8);
      }
      if (_0x2840b9.isDir(_0x57c6f7.node.mode)) {
        throw new _0x2840b9.ErrnoError(31);
      }
      if (!_0x57c6f7.stream_ops.write) {
        throw new _0x2840b9.ErrnoError(28);
      }
      if (_0x57c6f7.seekable && _0x57c6f7.flags & 1024) {
        _0x2840b9.llseek(_0x57c6f7, 0, 2);
      }
      var _0x31ce9a = typeof _0x474189 !== "undefined";
      if (!_0x31ce9a) {
        _0x474189 = _0x57c6f7.position;
      } else if (!_0x57c6f7.seekable) {
        throw new _0x2840b9.ErrnoError(70);
      }
      var _0x34c6ed = _0x57c6f7.stream_ops.write(_0x57c6f7, _0x2ceacf, _0xd1b656, _0x5d2c61, _0x474189, _0x1d8f49);
      if (!_0x31ce9a) {
        _0x57c6f7.position += _0x34c6ed;
      }
      try {
        if (_0x57c6f7.path && _0x2840b9.trackingDelegate.onWriteToFile) {
          _0x2840b9.trackingDelegate.onWriteToFile(_0x57c6f7.path);
        }
      } catch (_0x55aa1a) {
        _0x1650b6("FS.trackingDelegate['onWriteToFile']('" + _0x57c6f7.path + "') threw an exception: " + _0x55aa1a.message);
      }
      return _0x34c6ed;
    },
    allocate: function (_0x552205, _0xa267d8, _0x5d1b41) {
      if (_0x2840b9.isClosed(_0x552205)) {
        throw new _0x2840b9.ErrnoError(8);
      }
      if (_0xa267d8 < 0 || _0x5d1b41 <= 0) {
        throw new _0x2840b9.ErrnoError(28);
      }
      if ((_0x552205.flags & 2097155) === 0) {
        throw new _0x2840b9.ErrnoError(8);
      }
      if (!_0x2840b9.isFile(_0x552205.node.mode) && !_0x2840b9.isDir(_0x552205.node.mode)) {
        throw new _0x2840b9.ErrnoError(43);
      }
      if (!_0x552205.stream_ops.allocate) {
        throw new _0x2840b9.ErrnoError(138);
      }
      _0x552205.stream_ops.allocate(_0x552205, _0xa267d8, _0x5d1b41);
    },
    mmap: function (_0x3dbdc3, _0x44bd34, _0x1afe79, _0xa3858c, _0x4ed9d4, _0x131a70) {
      if ((_0x4ed9d4 & 2) !== 0 && (_0x131a70 & 2) === 0 && (_0x3dbdc3.flags & 2097155) !== 2) {
        throw new _0x2840b9.ErrnoError(2);
      }
      if ((_0x3dbdc3.flags & 2097155) === 1) {
        throw new _0x2840b9.ErrnoError(2);
      }
      if (!_0x3dbdc3.stream_ops.mmap) {
        throw new _0x2840b9.ErrnoError(43);
      }
      return _0x3dbdc3.stream_ops.mmap(_0x3dbdc3, _0x44bd34, _0x1afe79, _0xa3858c, _0x4ed9d4, _0x131a70);
    },
    msync: function (_0x6d40a4, _0x1520de, _0x354758, _0x168a15, _0x457ab0) {
      if (!_0x6d40a4 || !_0x6d40a4.stream_ops.msync) {
        return 0;
      }
      return _0x6d40a4.stream_ops.msync(_0x6d40a4, _0x1520de, _0x354758, _0x168a15, _0x457ab0);
    },
    munmap: function (_0x372706) {
      return 0;
    },
    ioctl: function (_0x164efe, _0x2f2abb, _0x28dfc) {
      if (!_0x164efe.stream_ops.ioctl) {
        throw new _0x2840b9.ErrnoError(59);
      }
      return _0x164efe.stream_ops.ioctl(_0x164efe, _0x2f2abb, _0x28dfc);
    },
    readFile: function (_0x30bb51, _0x174408) {
      _0x174408 = _0x174408 || {};
      _0x174408.flags = _0x174408.flags || 0;
      _0x174408.encoding = _0x174408.encoding || "binary";
      if (_0x174408.encoding !== "utf8" && _0x174408.encoding !== "binary") {
        throw new Error("Invalid encoding type \"" + _0x174408.encoding + "\"");
      }
      var _0xc9aee1;
      var _0x37a2e6 = _0x2840b9.open(_0x30bb51, _0x174408.flags);
      var _0x3bba16 = _0x2840b9.stat(_0x30bb51);
      var _0x194960 = _0x3bba16.size;
      var _0x37f317 = new Uint8Array(_0x194960);
      _0x2840b9.read(_0x37a2e6, _0x37f317, 0, _0x194960, 0);
      if (_0x174408.encoding === "utf8") {
        _0xc9aee1 = _0x3a7b27(_0x37f317, 0);
      } else if (_0x174408.encoding === "binary") {
        _0xc9aee1 = _0x37f317;
      }
      _0x2840b9.close(_0x37a2e6);
      return _0xc9aee1;
    },
    writeFile: function (_0x318c7f, _0x5abb56, _0x25fbe5) {
      _0x25fbe5 = _0x25fbe5 || {};
      _0x25fbe5.flags = _0x25fbe5.flags || 577;
      var _0x497314 = _0x2840b9.open(_0x318c7f, _0x25fbe5.flags, _0x25fbe5.mode);
      if (typeof _0x5abb56 === "string") {
        var _0x38f41b = new Uint8Array(_0x247116(_0x5abb56) + 1);
        var _0x476984 = _0x1d0a09(_0x5abb56, _0x38f41b, 0, _0x38f41b.length);
        _0x2840b9.write(_0x497314, _0x38f41b, 0, _0x476984, undefined, _0x25fbe5.canOwn);
      } else if (ArrayBuffer.isView(_0x5abb56)) {
        _0x2840b9.write(_0x497314, _0x5abb56, 0, _0x5abb56.byteLength, undefined, _0x25fbe5.canOwn);
      } else {
        throw new Error("Unsupported data type");
      }
      _0x2840b9.close(_0x497314);
    },
    cwd: function () {
      return _0x2840b9.currentPath;
    },
    chdir: function (_0x268e78) {
      var _0x2cbf0a = _0x2840b9.lookupPath(_0x268e78, {
        follow: true
      });
      if (_0x2cbf0a.node === null) {
        throw new _0x2840b9.ErrnoError(44);
      }
      if (!_0x2840b9.isDir(_0x2cbf0a.node.mode)) {
        throw new _0x2840b9.ErrnoError(54);
      }
      var _0x174a6c = _0x2840b9.nodePermissions(_0x2cbf0a.node, "x");
      if (_0x174a6c) {
        throw new _0x2840b9.ErrnoError(_0x174a6c);
      }
      _0x2840b9.currentPath = _0x2cbf0a.path;
    },
    createDefaultDirectories: function () {
      _0x2840b9.mkdir("/tmp");
      _0x2840b9.mkdir("/home");
      _0x2840b9.mkdir("/home/web_user");
    },
    createDefaultDevices: function () {
      _0x2840b9.mkdir("/dev");
      _0x2840b9.registerDevice(_0x2840b9.makedev(1, 3), {
        read: function () {
          return 0;
        },
        write: function (_0x1d1cda, _0x367889, _0x4a0b52, _0x311cc6, _0x26c4b6) {
          return _0x311cc6;
        }
      });
      _0x2840b9.mkdev("/dev/null", _0x2840b9.makedev(1, 3));
      _0x5e802c.register(_0x2840b9.makedev(5, 0), _0x5e802c.default_tty_ops);
      _0x5e802c.register(_0x2840b9.makedev(6, 0), _0x5e802c.default_tty1_ops);
      _0x2840b9.mkdev("/dev/tty", _0x2840b9.makedev(5, 0));
      _0x2840b9.mkdev("/dev/tty1", _0x2840b9.makedev(6, 0));
      var _0x2ddc5b = _0x3d211e();
      _0x2840b9.createDevice("/dev", "random", _0x2ddc5b);
      _0x2840b9.createDevice("/dev", "urandom", _0x2ddc5b);
      _0x2840b9.mkdir("/dev/shm");
      _0x2840b9.mkdir("/dev/shm/tmp");
    },
    createSpecialDirectories: function () {
      _0x2840b9.mkdir("/proc");
      var _0x188b8b = _0x2840b9.mkdir("/proc/self");
      _0x2840b9.mkdir("/proc/self/fd");
      _0x2840b9.mount({
        mount: function () {
          var _0x4897ec = _0x2840b9.createNode(_0x188b8b, "fd", 16895, 73);
          _0x4897ec.node_ops = {
            lookup: function (_0x1176ce, _0x26656d) {
              var _0x30889b = +_0x26656d;
              var _0x4cf920 = _0x2840b9.getStream(_0x30889b);
              if (!_0x4cf920) {
                throw new _0x2840b9.ErrnoError(8);
              }
              var _0x36ef80 = {
                parent: null,
                mount: {
                  mountpoint: "fake"
                },
                node_ops: {
                  readlink: function () {
                    return _0x4cf920.path;
                  }
                }
              };
              _0x36ef80.parent = _0x36ef80;
              return _0x36ef80;
            }
          };
          return _0x4897ec;
        }
      }, {}, "/proc/self/fd");
    },
    createStandardStreams: function () {
      if (_0x289557.stdin) {
        _0x2840b9.createDevice("/dev", "stdin", _0x289557.stdin);
      } else {
        _0x2840b9.symlink("/dev/tty", "/dev/stdin");
      }
      if (_0x289557.stdout) {
        _0x2840b9.createDevice("/dev", "stdout", null, _0x289557.stdout);
      } else {
        _0x2840b9.symlink("/dev/tty", "/dev/stdout");
      }
      if (_0x289557.stderr) {
        _0x2840b9.createDevice("/dev", "stderr", null, _0x289557.stderr);
      } else {
        _0x2840b9.symlink("/dev/tty1", "/dev/stderr");
      }
      var _0xc920f0 = _0x2840b9.open("/dev/stdin", 0);
      var _0x286b0d = _0x2840b9.open("/dev/stdout", 1);
      var _0x1343a7 = _0x2840b9.open("/dev/stderr", 1);
    },
    ensureErrnoError: function () {
      if (_0x2840b9.ErrnoError) {
        return;
      }
      _0x2840b9.ErrnoError = function _0x446622(_0x532bfa, _0x1d3088) {
        this.node = _0x1d3088;
        this.setErrno = function (_0x1f1c21) {
          this.errno = _0x1f1c21;
        };
        this.setErrno(_0x532bfa);
        this.message = "FS error";
      };
      _0x2840b9.ErrnoError.prototype = new Error();
      _0x2840b9.ErrnoError.prototype.constructor = _0x2840b9.ErrnoError;
      [44].forEach(function (_0x81d30) {
        _0x2840b9.genericErrors[_0x81d30] = new _0x2840b9.ErrnoError(_0x81d30);
        _0x2840b9.genericErrors[_0x81d30].stack = "<generic error, no stack>";
      });
    },
    staticInit: function () {
      _0x2840b9.ensureErrnoError();
      _0x2840b9.nameTable = new Array(4096);
      _0x2840b9.mount(_0x34dbd8, {}, "/");
      _0x2840b9.createDefaultDirectories();
      _0x2840b9.createDefaultDevices();
      _0x2840b9.createSpecialDirectories();
      _0x2840b9.filesystems = {
        MEMFS: _0x34dbd8,
        IDBFS: _0x36c80d
      };
    },
    init: function (_0x18ee9e, _0x5c4b18, _0x1449c0) {
      _0x2840b9.init.initialized = true;
      _0x2840b9.ensureErrnoError();
      _0x289557.stdin = _0x18ee9e || _0x289557.stdin;
      _0x289557.stdout = _0x5c4b18 || _0x289557.stdout;
      _0x289557.stderr = _0x1449c0 || _0x289557.stderr;
      _0x2840b9.createStandardStreams();
    },
    quit: function () {
      _0x2840b9.init.initialized = false;
      var _0x92de7a = _0x289557._fflush;
      if (_0x92de7a) {
        _0x92de7a(0);
      }
      for (var _0x3a6b2c = 0; _0x3a6b2c < _0x2840b9.streams.length; _0x3a6b2c++) {
        var _0x276cb6 = _0x2840b9.streams[_0x3a6b2c];
        if (!_0x276cb6) {
          continue;
        }
        _0x2840b9.close(_0x276cb6);
      }
    },
    getMode: function (_0x5aeaf8, _0x4d3d07) {
      var _0x31652e = 0;
      if (_0x5aeaf8) {
        _0x31652e |= 365;
      }
      if (_0x4d3d07) {
        _0x31652e |= 146;
      }
      return _0x31652e;
    },
    findObject: function (_0x20b61f, _0x25fd7e) {
      var _0x462867 = _0x2840b9.analyzePath(_0x20b61f, _0x25fd7e);
      if (_0x462867.exists) {
        return _0x462867.object;
      } else {
        return null;
      }
    },
    analyzePath: function (_0xce235b, _0x508ce1) {
      try {
        var _0x5d57db = _0x2840b9.lookupPath(_0xce235b, {
          follow: !_0x508ce1
        });
        _0xce235b = _0x5d57db.path;
      } catch (_0x31ea3b) {}
      var _0x284f28 = {
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
        var _0x5d57db = _0x2840b9.lookupPath(_0xce235b, {
          parent: true
        });
        _0x284f28.parentExists = true;
        _0x284f28.parentPath = _0x5d57db.path;
        _0x284f28.parentObject = _0x5d57db.node;
        _0x284f28.name = _0x5bec41.basename(_0xce235b);
        _0x5d57db = _0x2840b9.lookupPath(_0xce235b, {
          follow: !_0x508ce1
        });
        _0x284f28.exists = true;
        _0x284f28.path = _0x5d57db.path;
        _0x284f28.object = _0x5d57db.node;
        _0x284f28.name = _0x5d57db.node.name;
        _0x284f28.isRoot = _0x5d57db.path === "/";
      } catch (_0x137150) {
        _0x284f28.error = _0x137150.errno;
      }
      return _0x284f28;
    },
    createPath: function (_0x25a650, _0x29a205, _0x45c542, _0xd57670) {
      _0x25a650 = typeof _0x25a650 === "string" ? _0x25a650 : _0x2840b9.getPath(_0x25a650);
      var _0x7cb87d = _0x29a205.split("/").reverse();
      while (_0x7cb87d.length) {
        var _0x149a67 = _0x7cb87d.pop();
        if (!_0x149a67) {
          continue;
        }
        var _0x38ad02 = _0x5bec41.join2(_0x25a650, _0x149a67);
        try {
          _0x2840b9.mkdir(_0x38ad02);
        } catch (_0x720741) {}
        _0x25a650 = _0x38ad02;
      }
      return _0x38ad02;
    },
    createFile: function (_0x58c642, _0x513c6c, _0xd1a8bb, _0x38e191, _0x3de120) {
      var _0x39eb24 = _0x5bec41.join2(typeof _0x58c642 === "string" ? _0x58c642 : _0x2840b9.getPath(_0x58c642), _0x513c6c);
      var _0x4ee83e = _0x2840b9.getMode(_0x38e191, _0x3de120);
      return _0x2840b9.create(_0x39eb24, _0x4ee83e);
    },
    createDataFile: function (_0x513457, _0x458ec4, _0x382843, _0x389129, _0x5a1065, _0x4edce7) {
      var _0x36df4c = _0x458ec4 ? _0x5bec41.join2(typeof _0x513457 === "string" ? _0x513457 : _0x2840b9.getPath(_0x513457), _0x458ec4) : _0x513457;
      var _0x372784 = _0x2840b9.getMode(_0x389129, _0x5a1065);
      var _0x525fc2 = _0x2840b9.create(_0x36df4c, _0x372784);
      if (_0x382843) {
        if (typeof _0x382843 === "string") {
          var _0x213ba0 = new Array(_0x382843.length);
          for (var _0xfac234 = 0, _0x5b138a = _0x382843.length; _0xfac234 < _0x5b138a; ++_0xfac234) {
            _0x213ba0[_0xfac234] = _0x382843.charCodeAt(_0xfac234);
          }
          _0x382843 = _0x213ba0;
        }
        _0x2840b9.chmod(_0x525fc2, _0x372784 | 146);
        var _0x5c1b5d = _0x2840b9.open(_0x525fc2, 577);
        _0x2840b9.write(_0x5c1b5d, _0x382843, 0, _0x382843.length, 0, _0x4edce7);
        _0x2840b9.close(_0x5c1b5d);
        _0x2840b9.chmod(_0x525fc2, _0x372784);
      }
      return _0x525fc2;
    },
    createDevice: function (_0x5ddb42, _0x447f45, _0x6b25b, _0x20e886) {
      var _0x1e5f0f = _0x5bec41.join2(typeof _0x5ddb42 === "string" ? _0x5ddb42 : _0x2840b9.getPath(_0x5ddb42), _0x447f45);
      var _0x4cd296 = _0x2840b9.getMode(!!_0x6b25b, !!_0x20e886);
      if (!_0x2840b9.createDevice.major) {
        _0x2840b9.createDevice.major = 64;
      }
      var _0xc95a7b = _0x2840b9.makedev(_0x2840b9.createDevice.major++, 0);
      _0x2840b9.registerDevice(_0xc95a7b, {
        open: function (_0x43da2f) {
          _0x43da2f.seekable = false;
        },
        close: function (_0x1cfc78) {
          if (_0x20e886 && _0x20e886.buffer && _0x20e886.buffer.length) {
            _0x20e886(10);
          }
        },
        read: function (_0x192c17, _0x40c9b4, _0x1408ff, _0x5da37c, _0x46e81a) {
          var _0x3aaa1c = 0;
          for (var _0x1bfaac = 0; _0x1bfaac < _0x5da37c; _0x1bfaac++) {
            var _0x5e0e9f;
            try {
              _0x5e0e9f = _0x6b25b();
            } catch (_0x4ba3bd) {
              throw new _0x2840b9.ErrnoError(29);
            }
            if (_0x5e0e9f === undefined && _0x3aaa1c === 0) {
              throw new _0x2840b9.ErrnoError(6);
            }
            if (_0x5e0e9f === null || _0x5e0e9f === undefined) {
              break;
            }
            _0x3aaa1c++;
            _0x40c9b4[_0x1408ff + _0x1bfaac] = _0x5e0e9f;
          }
          if (_0x3aaa1c) {
            _0x192c17.node.timestamp = Date.now();
          }
          return _0x3aaa1c;
        },
        write: function (_0x31b601, _0x313e11, _0x188300, _0x164d29, _0x24f70a) {
          for (var _0x58c824 = 0; _0x58c824 < _0x164d29; _0x58c824++) {
            try {
              _0x20e886(_0x313e11[_0x188300 + _0x58c824]);
            } catch (_0x219d1b) {
              throw new _0x2840b9.ErrnoError(29);
            }
          }
          if (_0x164d29) {
            _0x31b601.node.timestamp = Date.now();
          }
          return _0x58c824;
        }
      });
      return _0x2840b9.mkdev(_0x1e5f0f, _0x4cd296, _0xc95a7b);
    },
    forceLoadFile: function (_0x193794) {
      if (_0x193794.isDevice || _0x193794.isFolder || _0x193794.link || _0x193794.contents) {
        return true;
      }
      if (typeof XMLHttpRequest !== "undefined") {
        throw new Error("Lazy loading should have been performed (contents set) in createLazyFile, but it was not. Lazy loading only works in web workers. Use --embed-file or --preload-file in emcc on the main thread.");
      } else if (_0x564ab3) {
        try {
          _0x193794.contents = _0xc6e11e(_0x564ab3(_0x193794.url), true);
          _0x193794.usedBytes = _0x193794.contents.length;
        } catch (_0x16ad70) {
          throw new _0x2840b9.ErrnoError(29);
        }
      } else {
        throw new Error("Cannot load without read() or XMLHttpRequest.");
      }
    },
    createLazyFile: function (_0x26f989, _0x3ae101, _0x572527, _0x1145db, _0x4a4fa7) {
      function _0x310b9b() {
        this.lengthKnown = false;
        this.chunks = [];
      }
      _0x310b9b.prototype.get = function _0x3acfb3(_0x112a11) {
        if (_0x112a11 > this.length - 1 || _0x112a11 < 0) {
          return undefined;
        }
        var _0x59e16d = _0x112a11 % this.chunkSize;
        var _0xa29038 = _0x112a11 / this.chunkSize | 0;
        return this.getter(_0xa29038)[_0x59e16d];
      };
      _0x310b9b.prototype.setDataGetter = function _0x3813e0(_0x59f7b4) {
        this.getter = _0x59f7b4;
      };
      _0x310b9b.prototype.cacheLength = function _0x39cee6() {
        var _0x30495f = new XMLHttpRequest();
        _0x30495f.open("HEAD", _0x572527, false);
        _0x30495f.send(null);
        if ((!(_0x30495f.status >= 200) || !(_0x30495f.status < 300)) && _0x30495f.status !== 304) {
          throw new Error("Couldn't load " + _0x572527 + ". Status: " + _0x30495f.status);
        }
        var _0x8afcd3 = Number(_0x30495f.getResponseHeader("Content-length"));
        var _0x19e0cb;
        var _0x5af7a5 = (_0x19e0cb = _0x30495f.getResponseHeader("Accept-Ranges")) && _0x19e0cb === "bytes";
        var _0x3b61e5 = (_0x19e0cb = _0x30495f.getResponseHeader("Content-Encoding")) && _0x19e0cb === "gzip";
        var _0x50221e = 1048576;
        if (!_0x5af7a5) {
          _0x50221e = _0x8afcd3;
        }
        function _0x3f3ece(_0x9811fc, _0x5aa2e3) {
          if (_0x9811fc > _0x5aa2e3) {
            throw new Error("invalid range (" + _0x9811fc + ", " + _0x5aa2e3 + ") or no bytes requested!");
          }
          if (_0x5aa2e3 > _0x8afcd3 - 1) {
            throw new Error("only " + _0x8afcd3 + " bytes available! programmer error!");
          }
          var _0x458036 = new XMLHttpRequest();
          _0x458036.open("GET", _0x572527, false);
          if (_0x8afcd3 !== _0x50221e) {
            _0x458036.setRequestHeader("Range", "bytes=" + _0x9811fc + "-" + _0x5aa2e3);
          }
          if (typeof Uint8Array != "undefined") {
            _0x458036.responseType = "arraybuffer";
          }
          if (_0x458036.overrideMimeType) {
            _0x458036.overrideMimeType("text/plain; charset=x-user-defined");
          }
          _0x458036.send(null);
          if ((!(_0x458036.status >= 200) || !(_0x458036.status < 300)) && _0x458036.status !== 304) {
            throw new Error("Couldn't load " + _0x572527 + ". Status: " + _0x458036.status);
          }
          if (_0x458036.response !== undefined) {
            return new Uint8Array(_0x458036.response || []);
          } else {
            return _0xc6e11e(_0x458036.responseText || "", true);
          }
        }
        var _0x51930c = this;
        _0x51930c.setDataGetter(function (_0x24c9f5) {
          var _0x1a811a = _0x24c9f5 * _0x50221e;
          var _0x2a0219 = (_0x24c9f5 + 1) * _0x50221e - 1;
          _0x2a0219 = Math.min(_0x2a0219, _0x8afcd3 - 1);
          if (typeof _0x51930c.chunks[_0x24c9f5] === "undefined") {
            _0x51930c.chunks[_0x24c9f5] = _0x3f3ece(_0x1a811a, _0x2a0219);
          }
          if (typeof _0x51930c.chunks[_0x24c9f5] === "undefined") {
            throw new Error("doXHR failed!");
          }
          return _0x51930c.chunks[_0x24c9f5];
        });
        if (_0x3b61e5 || !_0x8afcd3) {
          _0x50221e = _0x8afcd3 = 1;
          _0x8afcd3 = this.getter(0).length;
          _0x50221e = _0x8afcd3;
          _0x2ac208("LazyFiles on gzip forces download of the whole file when length is accessed");
        }
        this._length = _0x8afcd3;
        this._chunkSize = _0x50221e;
        this.lengthKnown = true;
      };
      if (typeof XMLHttpRequest !== "undefined") {
        if (!_0x4d7134) {
          throw "Cannot do synchronous binary XHRs outside webworkers in modern browsers. Use --embed-file or --preload-file in emcc";
        }
        var _0x23d660 = new _0x310b9b();
        Object.defineProperties(_0x23d660, {
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
        var _0x4b2c73 = {
          isDevice: false,
          contents: _0x23d660
        };
      } else {
        var _0x4b2c73 = {
          isDevice: false,
          url: _0x572527
        };
      }
      var _0x294267 = _0x2840b9.createFile(_0x26f989, _0x3ae101, _0x4b2c73, _0x1145db, _0x4a4fa7);
      if (_0x4b2c73.contents) {
        _0x294267.contents = _0x4b2c73.contents;
      } else if (_0x4b2c73.url) {
        _0x294267.contents = null;
        _0x294267.url = _0x4b2c73.url;
      }
      Object.defineProperties(_0x294267, {
        usedBytes: {
          get: function () {
            return this.contents.length;
          }
        }
      });
      var _0x55bac5 = {};
      var _0xc0fd9e = Object.keys(_0x294267.stream_ops);
      _0xc0fd9e.forEach(function (_0x1dd9f4) {
        var _0x3fc813 = _0x294267.stream_ops[_0x1dd9f4];
        _0x55bac5[_0x1dd9f4] = function _0x5295cc() {
          _0x2840b9.forceLoadFile(_0x294267);
          return _0x3fc813.apply(null, arguments);
        };
      });
      _0x55bac5.read = function _0x359537(_0x2b56d8, _0x1b5363, _0x4fcb8f, _0x3f3830, _0x22f713) {
        _0x2840b9.forceLoadFile(_0x294267);
        var _0x539bec = _0x2b56d8.node.contents;
        if (_0x22f713 >= _0x539bec.length) {
          return 0;
        }
        var _0x2aea7f = Math.min(_0x539bec.length - _0x22f713, _0x3f3830);
        if (_0x539bec.slice) {
          for (var _0x51ec87 = 0; _0x51ec87 < _0x2aea7f; _0x51ec87++) {
            _0x1b5363[_0x4fcb8f + _0x51ec87] = _0x539bec[_0x22f713 + _0x51ec87];
          }
        } else {
          for (var _0x51ec87 = 0; _0x51ec87 < _0x2aea7f; _0x51ec87++) {
            _0x1b5363[_0x4fcb8f + _0x51ec87] = _0x539bec.get(_0x22f713 + _0x51ec87);
          }
        }
        return _0x2aea7f;
      };
      _0x294267.stream_ops = _0x55bac5;
      return _0x294267;
    },
    createPreloadedFile: function (_0x2cb9dc, _0x1212c0, _0x104fc9, _0x1a5cc4, _0x59b190, _0x2c03f8, _0x506f72, _0x4c323c, _0x27f4be, _0xcee408) {
      _0x24096f.init();
      var _0x32280b = _0x1212c0 ? _0x522f5a.resolve(_0x5bec41.join2(_0x2cb9dc, _0x1212c0)) : _0x2cb9dc;
      var _0x42e373 = _0x2c484c("cp " + _0x32280b);
      function _0x1d18ed(_0x255400) {
        function _0x283923(_0x3d199d) {
          if (_0xcee408) {
            _0xcee408();
          }
          if (!_0x4c323c) {
            _0x2840b9.createDataFile(_0x2cb9dc, _0x1212c0, _0x3d199d, _0x1a5cc4, _0x59b190, _0x27f4be);
          }
          if (_0x2c03f8) {
            _0x2c03f8();
          }
          _0x50369d(_0x42e373);
        }
        var _0x146e2d = false;
        _0x289557.preloadPlugins.forEach(function (_0x2fe161) {
          if (_0x146e2d) {
            return;
          }
          if (_0x2fe161.canHandle(_0x32280b)) {
            _0x2fe161.handle(_0x255400, _0x32280b, _0x283923, function () {
              if (_0x506f72) {
                _0x506f72();
              }
              _0x50369d(_0x42e373);
            });
            _0x146e2d = true;
          }
        });
        if (!_0x146e2d) {
          _0x283923(_0x255400);
        }
      }
      _0x349a66(_0x42e373);
      if (typeof _0x104fc9 == "string") {
        _0x24096f.asyncLoad(_0x104fc9, function (_0x2189a1) {
          _0x1d18ed(_0x2189a1);
        }, _0x506f72);
      } else {
        _0x1d18ed(_0x104fc9);
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
    saveFilesToDB: function (_0x1cc385, _0xb9e36d, _0x29d007) {
      _0xb9e36d = _0xb9e36d || function () {};
      _0x29d007 = _0x29d007 || function () {};
      var _0x561136 = _0x2840b9.indexedDB();
      try {
        var _0x255506 = _0x561136.open(_0x2840b9.DB_NAME(), _0x2840b9.DB_VERSION);
      } catch (_0x548057) {
        return _0x29d007(_0x548057);
      }
      _0x255506.onupgradeneeded = function _0x739514() {
        _0x2ac208("creating db");
        var _0x1057fe = _0x255506.result;
        _0x1057fe.createObjectStore(_0x2840b9.DB_STORE_NAME);
      };
      _0x255506.onsuccess = function _0x8d8520() {
        var _0x22fd0f = _0x255506.result;
        var _0x18b393 = _0x22fd0f.transaction([_0x2840b9.DB_STORE_NAME], "readwrite");
        var _0x2e9d35 = _0x18b393.objectStore(_0x2840b9.DB_STORE_NAME);
        var _0x29b178 = 0;
        var _0x56e3f7 = 0;
        var _0x2fcc6e = _0x1cc385.length;
        function _0x1b43dc() {
          if (_0x56e3f7 == 0) {
            _0xb9e36d();
          } else {
            _0x29d007();
          }
        }
        _0x1cc385.forEach(function (_0x587ef8) {
          var _0x42cdbf = _0x2e9d35.put(_0x2840b9.analyzePath(_0x587ef8).object.contents, _0x587ef8);
          _0x42cdbf.onsuccess = function _0x984df() {
            _0x29b178++;
            if (_0x29b178 + _0x56e3f7 == _0x2fcc6e) {
              _0x1b43dc();
            }
          };
          _0x42cdbf.onerror = function _0x48e41c() {
            _0x56e3f7++;
            if (_0x29b178 + _0x56e3f7 == _0x2fcc6e) {
              _0x1b43dc();
            }
          };
        });
        _0x18b393.onerror = _0x29d007;
      };
      _0x255506.onerror = _0x29d007;
    },
    loadFilesFromDB: function (_0x2840bf, _0x2ab5b0, _0x515765) {
      _0x2ab5b0 = _0x2ab5b0 || function () {};
      _0x515765 = _0x515765 || function () {};
      var _0x3e9b08 = _0x2840b9.indexedDB();
      try {
        var _0x44bb04 = _0x3e9b08.open(_0x2840b9.DB_NAME(), _0x2840b9.DB_VERSION);
      } catch (_0x2d6bae) {
        return _0x515765(_0x2d6bae);
      }
      _0x44bb04.onupgradeneeded = _0x515765;
      _0x44bb04.onsuccess = function _0x2a479f() {
        var _0x389707 = _0x44bb04.result;
        try {
          var _0x32d929 = _0x389707.transaction([_0x2840b9.DB_STORE_NAME], "readonly");
        } catch (_0x14f48d) {
          _0x515765(_0x14f48d);
          return;
        }
        var _0x55419d = _0x32d929.objectStore(_0x2840b9.DB_STORE_NAME);
        var _0x1f7c41 = 0;
        var _0x1201fd = 0;
        var _0x1e3adf = _0x2840bf.length;
        function _0x41969c() {
          if (_0x1201fd == 0) {
            _0x2ab5b0();
          } else {
            _0x515765();
          }
        }
        _0x2840bf.forEach(function (_0x25735a) {
          var _0x17c9b9 = _0x55419d.get(_0x25735a);
          _0x17c9b9.onsuccess = function _0x5923ca() {
            if (_0x2840b9.analyzePath(_0x25735a).exists) {
              _0x2840b9.unlink(_0x25735a);
            }
            _0x2840b9.createDataFile(_0x5bec41.dirname(_0x25735a), _0x5bec41.basename(_0x25735a), _0x17c9b9.result, true, true, true);
            _0x1f7c41++;
            if (_0x1f7c41 + _0x1201fd == _0x1e3adf) {
              _0x41969c();
            }
          };
          _0x17c9b9.onerror = function _0x1b17bf() {
            _0x1201fd++;
            if (_0x1f7c41 + _0x1201fd == _0x1e3adf) {
              _0x41969c();
            }
          };
        });
        _0x32d929.onerror = _0x515765;
      };
      _0x44bb04.onerror = _0x515765;
    }
  };
  var _0x24c16a = {
    mappings: {},
    DEFAULT_POLLMASK: 5,
    umask: 511,
    calculateAt: function (_0x5de6d0, _0x4dbd68, _0x368eec) {
      if (_0x4dbd68[0] === "/") {
        return _0x4dbd68;
      }
      var _0x54bf71;
      if (_0x5de6d0 === -100) {
        _0x54bf71 = _0x2840b9.cwd();
      } else {
        var _0x352cf8 = _0x2840b9.getStream(_0x5de6d0);
        if (!_0x352cf8) {
          throw new _0x2840b9.ErrnoError(8);
        }
        _0x54bf71 = _0x352cf8.path;
      }
      if (_0x4dbd68.length == 0) {
        if (!_0x368eec) {
          throw new _0x2840b9.ErrnoError(44);
        }
        return _0x54bf71;
      }
      return _0x5bec41.join2(_0x54bf71, _0x4dbd68);
    },
    doStat: function (_0x5b10e9, _0x2bbe58, _0x2c6ebb) {
      try {
        var _0x1c0d98 = _0x5b10e9(_0x2bbe58);
      } catch (_0x17b680) {
        if (_0x17b680 && _0x17b680.node && _0x5bec41.normalize(_0x2bbe58) !== _0x5bec41.normalize(_0x2840b9.getPath(_0x17b680.node))) {
          return -54;
        }
        throw _0x17b680;
      }
      _0x4e86a5[_0x2c6ebb >> 2] = _0x1c0d98.dev;
      _0x4e86a5[_0x2c6ebb + 4 >> 2] = 0;
      _0x4e86a5[_0x2c6ebb + 8 >> 2] = _0x1c0d98.ino;
      _0x4e86a5[_0x2c6ebb + 12 >> 2] = _0x1c0d98.mode;
      _0x4e86a5[_0x2c6ebb + 16 >> 2] = _0x1c0d98.nlink;
      _0x4e86a5[_0x2c6ebb + 20 >> 2] = _0x1c0d98.uid;
      _0x4e86a5[_0x2c6ebb + 24 >> 2] = _0x1c0d98.gid;
      _0x4e86a5[_0x2c6ebb + 28 >> 2] = _0x1c0d98.rdev;
      _0x4e86a5[_0x2c6ebb + 32 >> 2] = 0;
      _0x4e1161 = [_0x1c0d98.size >>> 0, (_0x3a5e98 = _0x1c0d98.size, +Math.abs(_0x3a5e98) >= 1 ? _0x3a5e98 > 0 ? (Math.min(+Math.floor(_0x3a5e98 / 4294967296), 4294967295) | 0) >>> 0 : ~~+Math.ceil((_0x3a5e98 - +(~~_0x3a5e98 >>> 0)) / 4294967296) >>> 0 : 0)];
      _0x4e86a5[_0x2c6ebb + 40 >> 2] = _0x4e1161[0];
      _0x4e86a5[_0x2c6ebb + 44 >> 2] = _0x4e1161[1];
      _0x4e86a5[_0x2c6ebb + 48 >> 2] = 4096;
      _0x4e86a5[_0x2c6ebb + 52 >> 2] = _0x1c0d98.blocks;
      _0x4e86a5[_0x2c6ebb + 56 >> 2] = _0x1c0d98.atime.getTime() / 1000 | 0;
      _0x4e86a5[_0x2c6ebb + 60 >> 2] = 0;
      _0x4e86a5[_0x2c6ebb + 64 >> 2] = _0x1c0d98.mtime.getTime() / 1000 | 0;
      _0x4e86a5[_0x2c6ebb + 68 >> 2] = 0;
      _0x4e86a5[_0x2c6ebb + 72 >> 2] = _0x1c0d98.ctime.getTime() / 1000 | 0;
      _0x4e86a5[_0x2c6ebb + 76 >> 2] = 0;
      _0x4e1161 = [_0x1c0d98.ino >>> 0, (_0x3a5e98 = _0x1c0d98.ino, +Math.abs(_0x3a5e98) >= 1 ? _0x3a5e98 > 0 ? (Math.min(+Math.floor(_0x3a5e98 / 4294967296), 4294967295) | 0) >>> 0 : ~~+Math.ceil((_0x3a5e98 - +(~~_0x3a5e98 >>> 0)) / 4294967296) >>> 0 : 0)];
      _0x4e86a5[_0x2c6ebb + 80 >> 2] = _0x4e1161[0];
      _0x4e86a5[_0x2c6ebb + 84 >> 2] = _0x4e1161[1];
      return 0;
    },
    doMsync: function (_0x1ce188, _0x15443f, _0x29e85f, _0x3bf268, _0x256fb6) {
      var _0x40d048 = _0x950143.slice(_0x1ce188, _0x1ce188 + _0x29e85f);
      _0x2840b9.msync(_0x15443f, _0x40d048, _0x256fb6, _0x29e85f, _0x3bf268);
    },
    doMkdir: function (_0x4cd90f, _0x3a9170) {
      _0x4cd90f = _0x5bec41.normalize(_0x4cd90f);
      if (_0x4cd90f[_0x4cd90f.length - 1] === "/") {
        _0x4cd90f = _0x4cd90f.substr(0, _0x4cd90f.length - 1);
      }
      _0x2840b9.mkdir(_0x4cd90f, _0x3a9170, 0);
      return 0;
    },
    doMknod: function (_0x1d00ab, _0x14573d, _0x307323) {
      switch (_0x14573d & 61440) {
        case 32768:
        case 8192:
        case 24576:
        case 4096:
        case 49152:
          break;
        default:
          return -28;
      }
      _0x2840b9.mknod(_0x1d00ab, _0x14573d, _0x307323);
      return 0;
    },
    doReadlink: function (_0xff085c, _0x2507ae, _0x170fc1) {
      if (_0x170fc1 <= 0) {
        return -28;
      }
      var _0x539371 = _0x2840b9.readlink(_0xff085c);
      var _0x5b0ae4 = Math.min(_0x170fc1, _0x247116(_0x539371));
      var _0x11d6b3 = _0x9c4a59[_0x2507ae + _0x5b0ae4];
      _0x409466(_0x539371, _0x2507ae, _0x170fc1 + 1);
      _0x9c4a59[_0x2507ae + _0x5b0ae4] = _0x11d6b3;
      return _0x5b0ae4;
    },
    doAccess: function (_0x41e1c0, _0x7b6800) {
      if (_0x7b6800 & ~7) {
        return -28;
      }
      var _0x4a89c0;
      var _0x11c361 = _0x2840b9.lookupPath(_0x41e1c0, {
        follow: true
      });
      _0x4a89c0 = _0x11c361.node;
      if (!_0x4a89c0) {
        return -44;
      }
      var _0x59f81d = "";
      if (_0x7b6800 & 4) {
        _0x59f81d += "r";
      }
      if (_0x7b6800 & 2) {
        _0x59f81d += "w";
      }
      if (_0x7b6800 & 1) {
        _0x59f81d += "x";
      }
      if (_0x59f81d && _0x2840b9.nodePermissions(_0x4a89c0, _0x59f81d)) {
        return -2;
      }
      return 0;
    },
    doDup: function (_0x398964, _0x777061, _0x2a9a37) {
      var _0x1a02e7 = _0x2840b9.getStream(_0x2a9a37);
      if (_0x1a02e7) {
        _0x2840b9.close(_0x1a02e7);
      }
      return _0x2840b9.open(_0x398964, _0x777061, 0, _0x2a9a37, _0x2a9a37).fd;
    },
    doReadv: function (_0x234627, _0x58577f, _0x2f3085, _0x9ec3e1) {
      var _0xe4924b = 0;
      for (var _0x496b6f = 0; _0x496b6f < _0x2f3085; _0x496b6f++) {
        var _0x3f3b5d = _0x4e86a5[_0x58577f + _0x496b6f * 8 >> 2];
        var _0x29e1ea = _0x4e86a5[_0x58577f + (_0x496b6f * 8 + 4) >> 2];
        var _0x317d3c = _0x2840b9.read(_0x234627, _0x9c4a59, _0x3f3b5d, _0x29e1ea, _0x9ec3e1);
        if (_0x317d3c < 0) {
          return -1;
        }
        _0xe4924b += _0x317d3c;
        if (_0x317d3c < _0x29e1ea) {
          break;
        }
      }
      return _0xe4924b;
    },
    doWritev: function (_0x4b937c, _0x3d10f3, _0x2a0f15, _0x352fe4) {
      var _0x26a3d2 = 0;
      for (var _0x4da399 = 0; _0x4da399 < _0x2a0f15; _0x4da399++) {
        var _0x59a874 = _0x4e86a5[_0x3d10f3 + _0x4da399 * 8 >> 2];
        var _0x1d2d48 = _0x4e86a5[_0x3d10f3 + (_0x4da399 * 8 + 4) >> 2];
        var _0x16b06c = _0x2840b9.write(_0x4b937c, _0x9c4a59, _0x59a874, _0x1d2d48, _0x352fe4);
        if (_0x16b06c < 0) {
          return -1;
        }
        _0x26a3d2 += _0x16b06c;
      }
      return _0x26a3d2;
    },
    varargs: undefined,
    get: function () {
      _0x24c16a.varargs += 4;
      var _0x6418f2 = _0x4e86a5[_0x24c16a.varargs - 4 >> 2];
      return _0x6418f2;
    },
    getStr: function (_0x7f2c91) {
      var _0x3e4d9b = _0x5c2e85(_0x7f2c91);
      return _0x3e4d9b;
    },
    getStreamFromFD: function (_0x159398) {
      var _0x56d8f0 = _0x2840b9.getStream(_0x159398);
      if (!_0x56d8f0) {
        throw new _0x2840b9.ErrnoError(8);
      }
      return _0x56d8f0;
    },
    get64: function (_0x4c7f36, _0x221c96) {
      return _0x4c7f36;
    }
  };
  function _0x5ce21d(_0x27ec8e, _0x1ec48c, _0x27e20e, _0x2cbb69, _0x55c5ff) {
    try {
      var _0x64e4d2 = 0;
      var _0x1fc184 = _0x1ec48c ? _0x4e86a5[_0x1ec48c >> 2] : 0;
      var _0x5093be = _0x1ec48c ? _0x4e86a5[_0x1ec48c + 4 >> 2] : 0;
      var _0x4dfc21 = _0x27e20e ? _0x4e86a5[_0x27e20e >> 2] : 0;
      var _0x441b10 = _0x27e20e ? _0x4e86a5[_0x27e20e + 4 >> 2] : 0;
      var _0x259ba5 = _0x2cbb69 ? _0x4e86a5[_0x2cbb69 >> 2] : 0;
      var _0x2ebc5e = _0x2cbb69 ? _0x4e86a5[_0x2cbb69 + 4 >> 2] : 0;
      var _0x37a1fe = 0;
      var _0xe44097 = 0;
      var _0x5f4aa4 = 0;
      var _0x456da3 = 0;
      var _0x586fc9 = 0;
      var _0x54158b = 0;
      var _0x1804e1 = (_0x1ec48c ? _0x4e86a5[_0x1ec48c >> 2] : 0) | (_0x27e20e ? _0x4e86a5[_0x27e20e >> 2] : 0) | (_0x2cbb69 ? _0x4e86a5[_0x2cbb69 >> 2] : 0);
      var _0x571f0d = (_0x1ec48c ? _0x4e86a5[_0x1ec48c + 4 >> 2] : 0) | (_0x27e20e ? _0x4e86a5[_0x27e20e + 4 >> 2] : 0) | (_0x2cbb69 ? _0x4e86a5[_0x2cbb69 + 4 >> 2] : 0);
      function _0x231fb8(_0x51ee94, _0x220387, _0x50ded9, _0x3bfd29) {
        if (_0x51ee94 < 32) {
          return _0x220387 & _0x3bfd29;
        } else {
          return _0x50ded9 & _0x3bfd29;
        }
      }
      for (var _0x198475 = 0; _0x198475 < _0x27ec8e; _0x198475++) {
        var _0x37c22e = 1 << _0x198475 % 32;
        if (!_0x231fb8(_0x198475, _0x1804e1, _0x571f0d, _0x37c22e)) {
          continue;
        }
        var _0x44c93a = _0x2840b9.getStream(_0x198475);
        if (!_0x44c93a) {
          throw new _0x2840b9.ErrnoError(8);
        }
        var _0x172b30 = _0x24c16a.DEFAULT_POLLMASK;
        if (_0x44c93a.stream_ops.poll) {
          _0x172b30 = _0x44c93a.stream_ops.poll(_0x44c93a);
        }
        if (_0x172b30 & 1 && _0x231fb8(_0x198475, _0x1fc184, _0x5093be, _0x37c22e)) {
          if (_0x198475 < 32) {
            _0x37a1fe = _0x37a1fe | _0x37c22e;
          } else {
            _0xe44097 = _0xe44097 | _0x37c22e;
          }
          _0x64e4d2++;
        }
        if (_0x172b30 & 4 && _0x231fb8(_0x198475, _0x4dfc21, _0x441b10, _0x37c22e)) {
          if (_0x198475 < 32) {
            _0x5f4aa4 = _0x5f4aa4 | _0x37c22e;
          } else {
            _0x456da3 = _0x456da3 | _0x37c22e;
          }
          _0x64e4d2++;
        }
        if (_0x172b30 & 2 && _0x231fb8(_0x198475, _0x259ba5, _0x2ebc5e, _0x37c22e)) {
          if (_0x198475 < 32) {
            _0x586fc9 = _0x586fc9 | _0x37c22e;
          } else {
            _0x54158b = _0x54158b | _0x37c22e;
          }
          _0x64e4d2++;
        }
      }
      if (_0x1ec48c) {
        _0x4e86a5[_0x1ec48c >> 2] = _0x37a1fe;
        _0x4e86a5[_0x1ec48c + 4 >> 2] = _0xe44097;
      }
      if (_0x27e20e) {
        _0x4e86a5[_0x27e20e >> 2] = _0x5f4aa4;
        _0x4e86a5[_0x27e20e + 4 >> 2] = _0x456da3;
      }
      if (_0x2cbb69) {
        _0x4e86a5[_0x2cbb69 >> 2] = _0x586fc9;
        _0x4e86a5[_0x2cbb69 + 4 >> 2] = _0x54158b;
      }
      return _0x64e4d2;
    } catch (_0x347315) {
      if (typeof _0x2840b9 === "undefined" || !(_0x347315 instanceof _0x2840b9.ErrnoError)) {
        _0x48d521(_0x347315);
      }
      return -_0x347315.errno;
    }
  }
  var _0x1163d3 = {
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
  var _0x568dd0 = {
    mount: function (_0x295184) {
      _0x289557.websocket = _0x289557.websocket && typeof _0x289557.websocket === "object" ? _0x289557.websocket : {};
      _0x289557.websocket._callbacks = {};
      _0x289557.websocket.on = function (_0x1c8142, _0x22aa49) {
        if (typeof _0x22aa49 === "function") {
          this._callbacks[_0x1c8142] = _0x22aa49;
        }
        return this;
      };
      _0x289557.websocket.emit = function (_0x15b061, _0x4574cd) {
        if (typeof this._callbacks[_0x15b061] === "function") {
          this._callbacks[_0x15b061].call(this, _0x4574cd);
        }
      };
      return _0x2840b9.createNode(null, "/", 16895, 0);
    },
    createSocket: function (_0x174b00, _0x376518, _0x565bd5) {
      _0x376518 &= ~526336;
      var _0x40b2c8 = _0x376518 == 1;
      if (_0x565bd5) {
        _0x4eb180(_0x40b2c8 == (_0x565bd5 == 6));
      }
      var _0x295261 = {
        family: _0x174b00,
        type: _0x376518,
        protocol: _0x565bd5,
        server: null,
        error: null,
        peers: {},
        pending: [],
        recv_queue: [],
        sock_ops: _0x568dd0.websocket_sock_ops
      };
      var _0xc5c3f1 = _0x568dd0.nextname();
      var _0x53c009 = _0x2840b9.createNode(_0x568dd0.root, _0xc5c3f1, 49152, 0);
      _0x53c009.sock = _0x295261;
      var _0x1ca04c = _0x2840b9.createStream({
        path: _0xc5c3f1,
        node: _0x53c009,
        flags: 2,
        seekable: false,
        stream_ops: _0x568dd0.stream_ops
      });
      _0x295261.stream = _0x1ca04c;
      return _0x295261;
    },
    getSocket: function (_0x27e05c) {
      var _0x638fd5 = _0x2840b9.getStream(_0x27e05c);
      if (!_0x638fd5 || !_0x2840b9.isSocket(_0x638fd5.node.mode)) {
        return null;
      }
      return _0x638fd5.node.sock;
    },
    stream_ops: {
      poll: function (_0x3c511f) {
        var _0x1a39a6 = _0x3c511f.node.sock;
        return _0x1a39a6.sock_ops.poll(_0x1a39a6);
      },
      ioctl: function (_0x5838c3, _0x44521e, _0x436ec8) {
        var _0x2b8517 = _0x5838c3.node.sock;
        return _0x2b8517.sock_ops.ioctl(_0x2b8517, _0x44521e, _0x436ec8);
      },
      read: function (_0x20372a, _0x5e8b1d, _0x2c0a6d, _0x49f6e3, _0x566862) {
        var _0x2f8fa8 = _0x20372a.node.sock;
        var _0x35d54c = _0x2f8fa8.sock_ops.recvmsg(_0x2f8fa8, _0x49f6e3);
        if (!_0x35d54c) {
          return 0;
        }
        _0x5e8b1d.set(_0x35d54c.buffer, _0x2c0a6d);
        return _0x35d54c.buffer.length;
      },
      write: function (_0x33c80a, _0x2cbea8, _0x592535, _0x454332, _0x1ae03a) {
        var _0x144fcc = _0x33c80a.node.sock;
        return _0x144fcc.sock_ops.sendmsg(_0x144fcc, _0x2cbea8, _0x592535, _0x454332);
      },
      close: function (_0x2c39a1) {
        var _0x53c28e = _0x2c39a1.node.sock;
        _0x53c28e.sock_ops.close(_0x53c28e);
      }
    },
    nextname: function () {
      if (!_0x568dd0.nextname.current) {
        _0x568dd0.nextname.current = 0;
      }
      return "socket[" + _0x568dd0.nextname.current++ + "]";
    },
    websocket_sock_ops: {
      createPeer: function (_0x5e2f61, _0x58d997, _0x402de3) {
        var _0x143e0;
        if (typeof _0x58d997 === "object") {
          _0x143e0 = _0x58d997;
          _0x58d997 = null;
          _0x402de3 = null;
        }
        if (_0x143e0) {
          if (_0x143e0._socket) {
            _0x58d997 = _0x143e0._socket.remoteAddress;
            _0x402de3 = _0x143e0._socket.remotePort;
          } else {
            var _0x2b6e73 = /ws[s]?:\/\/([^:]+):(\d+)/.exec(_0x143e0.url);
            if (!_0x2b6e73) {
              throw new Error("WebSocket URL must be in the format ws(s)://address:port");
            }
            _0x58d997 = _0x2b6e73[1];
            _0x402de3 = parseInt(_0x2b6e73[2], 10);
          }
        } else {
          try {
            var _0x32e23c = _0x289557.websocket && typeof _0x289557.websocket === "object";
            var _0x76bbdb = "ws:#".replace("#", "//");
            if (_0x32e23c) {
              if (typeof _0x289557.websocket.url === "string") {
                _0x76bbdb = _0x289557.websocket.url;
              }
            }
            if (_0x76bbdb === "ws://" || _0x76bbdb === "wss://") {
              var _0x2b8b3f = _0x58d997.split("/");
              _0x76bbdb = _0x76bbdb + _0x2b8b3f[0] + ":" + _0x402de3 + "/" + _0x2b8b3f.slice(1).join("/");
            }
            var _0x275bee = "binary";
            if (_0x32e23c) {
              if (typeof _0x289557.websocket.subprotocol === "string") {
                _0x275bee = _0x289557.websocket.subprotocol;
              }
            }
            var _0x2990ef = undefined;
            if (_0x275bee !== "null") {
              _0x275bee = _0x275bee.replace(/^ +| +$/g, "").split(/ *, */);
              _0x2990ef = _0x319321 ? {
                protocol: _0x275bee.toString()
              } : _0x275bee;
            }
            if (_0x32e23c && _0x289557.websocket.subprotocol === null) {
              _0x275bee = "null";
              _0x2990ef = undefined;
            }
            var _0xa501bf;
            if (_0x319321) {
              _0xa501bf = require("ws");
            } else {
              _0xa501bf = WebSocket;
            }
            _0x143e0 = new _0xa501bf(_0x76bbdb, _0x2990ef);
            _0x143e0.binaryType = "arraybuffer";
          } catch (_0x12a204) {
            throw new _0x2840b9.ErrnoError(_0x1163d3.EHOSTUNREACH);
          }
        }
        var _0x52bdad = {
          addr: _0x58d997,
          port: _0x402de3,
          socket: _0x143e0,
          dgram_send_queue: []
        };
        _0x568dd0.websocket_sock_ops.addPeer(_0x5e2f61, _0x52bdad);
        _0x568dd0.websocket_sock_ops.handlePeerEvents(_0x5e2f61, _0x52bdad);
        if (_0x5e2f61.type === 2 && typeof _0x5e2f61.sport !== "undefined") {
          _0x52bdad.dgram_send_queue.push(new Uint8Array([255, 255, 255, 255, "p".charCodeAt(0), "o".charCodeAt(0), "r".charCodeAt(0), "t".charCodeAt(0), (_0x5e2f61.sport & 65280) >> 8, _0x5e2f61.sport & 255]));
        }
        return _0x52bdad;
      },
      getPeer: function (_0x32f336, _0x4ac5ba, _0x42fd54) {
        return _0x32f336.peers[_0x4ac5ba + ":" + _0x42fd54];
      },
      addPeer: function (_0xbd5aeb, _0xfdacc6) {
        _0xbd5aeb.peers[_0xfdacc6.addr + ":" + _0xfdacc6.port] = _0xfdacc6;
      },
      removePeer: function (_0x166c95, _0x4e4934) {
        delete _0x166c95.peers[_0x4e4934.addr + ":" + _0x4e4934.port];
      },
      handlePeerEvents: function (_0x178104, _0x1d3992) {
        var _0x50496f = true;
        function _0x4f7f51() {
          _0x289557.websocket.emit("open", _0x178104.stream.fd);
          try {
            var _0xd41a2d = _0x1d3992.dgram_send_queue.shift();
            while (_0xd41a2d) {
              _0x1d3992.socket.send(_0xd41a2d);
              _0xd41a2d = _0x1d3992.dgram_send_queue.shift();
            }
          } catch (_0x36640b) {
            _0x1d3992.socket.close();
          }
        }
        function _0x3fc376(_0x402f6f) {
          if (typeof _0x402f6f === "string") {
            var _0x51a3fd = new TextEncoder();
            _0x402f6f = _0x51a3fd.encode(_0x402f6f);
          } else {
            _0x4eb180(_0x402f6f.byteLength !== undefined);
            if (_0x402f6f.byteLength == 0) {
              return;
            } else {
              _0x402f6f = new Uint8Array(_0x402f6f);
            }
          }
          var _0x213934 = _0x50496f;
          _0x50496f = false;
          if (_0x213934 && _0x402f6f.length === 10 && _0x402f6f[0] === 255 && _0x402f6f[1] === 255 && _0x402f6f[2] === 255 && _0x402f6f[3] === 255 && _0x402f6f[4] === "p".charCodeAt(0) && _0x402f6f[5] === "o".charCodeAt(0) && _0x402f6f[6] === "r".charCodeAt(0) && _0x402f6f[7] === "t".charCodeAt(0)) {
            var _0x415cd2 = _0x402f6f[8] << 8 | _0x402f6f[9];
            _0x568dd0.websocket_sock_ops.removePeer(_0x178104, _0x1d3992);
            _0x1d3992.port = _0x415cd2;
            _0x568dd0.websocket_sock_ops.addPeer(_0x178104, _0x1d3992);
            return;
          }
          _0x178104.recv_queue.push({
            addr: _0x1d3992.addr,
            port: _0x1d3992.port,
            data: _0x402f6f
          });
          _0x289557.websocket.emit("message", _0x178104.stream.fd);
        }
        if (_0x319321) {
          _0x1d3992.socket.on("open", _0x4f7f51);
          _0x1d3992.socket.on("message", function (_0x583864, _0x260031) {
            if (!_0x260031.binary) {
              return;
            }
            _0x3fc376(new Uint8Array(_0x583864).buffer);
          });
          _0x1d3992.socket.on("close", function () {
            _0x289557.websocket.emit("close", _0x178104.stream.fd);
          });
          _0x1d3992.socket.on("error", function (_0x4378be) {
            _0x178104.error = _0x1163d3.ECONNREFUSED;
            _0x289557.websocket.emit("error", [_0x178104.stream.fd, _0x178104.error, "ECONNREFUSED: Connection refused"]);
          });
        } else {
          _0x1d3992.socket.onopen = _0x4f7f51;
          _0x1d3992.socket.onclose = function () {
            _0x289557.websocket.emit("close", _0x178104.stream.fd);
          };
          _0x1d3992.socket.onmessage = function _0x304f4a(_0x368bc5) {
            _0x3fc376(_0x368bc5.data);
          };
          _0x1d3992.socket.onerror = function (_0x43f927) {
            _0x178104.error = _0x1163d3.ECONNREFUSED;
            _0x289557.websocket.emit("error", [_0x178104.stream.fd, _0x178104.error, "ECONNREFUSED: Connection refused"]);
          };
        }
      },
      poll: function (_0x3c1e7b) {
        if (_0x3c1e7b.type === 1 && _0x3c1e7b.server) {
          if (_0x3c1e7b.pending.length) {
            return 65;
          } else {
            return 0;
          }
        }
        var _0x49aca1 = 0;
        var _0x51175d = _0x3c1e7b.type === 1 ? _0x568dd0.websocket_sock_ops.getPeer(_0x3c1e7b, _0x3c1e7b.daddr, _0x3c1e7b.dport) : null;
        if (_0x3c1e7b.recv_queue.length || !_0x51175d || _0x51175d && _0x51175d.socket.readyState === _0x51175d.socket.CLOSING || _0x51175d && _0x51175d.socket.readyState === _0x51175d.socket.CLOSED) {
          _0x49aca1 |= 65;
        }
        if (!_0x51175d || _0x51175d && _0x51175d.socket.readyState === _0x51175d.socket.OPEN) {
          _0x49aca1 |= 4;
        }
        if (_0x51175d && _0x51175d.socket.readyState === _0x51175d.socket.CLOSING || _0x51175d && _0x51175d.socket.readyState === _0x51175d.socket.CLOSED) {
          _0x49aca1 |= 16;
        }
        return _0x49aca1;
      },
      ioctl: function (_0x59c880, _0x1a7391, _0x437dd3) {
        switch (_0x1a7391) {
          case 21531:
            var _0x303de1 = 0;
            if (_0x59c880.recv_queue.length) {
              _0x303de1 = _0x59c880.recv_queue[0].data.length;
            }
            _0x4e86a5[_0x437dd3 >> 2] = _0x303de1;
            return 0;
          default:
            return _0x1163d3.EINVAL;
        }
      },
      close: function (_0x12f551) {
        if (_0x12f551.server) {
          try {
            _0x12f551.server.close();
          } catch (_0xe23f66) {}
          _0x12f551.server = null;
        }
        var _0x21762a = Object.keys(_0x12f551.peers);
        for (var _0x10dd30 = 0; _0x10dd30 < _0x21762a.length; _0x10dd30++) {
          var _0x39eb06 = _0x12f551.peers[_0x21762a[_0x10dd30]];
          try {
            _0x39eb06.socket.close();
          } catch (_0x4d3804) {}
          _0x568dd0.websocket_sock_ops.removePeer(_0x12f551, _0x39eb06);
        }
        return 0;
      },
      bind: function (_0x2621a5, _0xec3c87, _0xc5f508) {
        if (typeof _0x2621a5.saddr !== "undefined" || typeof _0x2621a5.sport !== "undefined") {
          throw new _0x2840b9.ErrnoError(_0x1163d3.EINVAL);
        }
        _0x2621a5.saddr = _0xec3c87;
        _0x2621a5.sport = _0xc5f508;
        if (_0x2621a5.type === 2) {
          if (_0x2621a5.server) {
            _0x2621a5.server.close();
            _0x2621a5.server = null;
          }
          try {
            _0x2621a5.sock_ops.listen(_0x2621a5, 0);
          } catch (_0x4b909a) {
            if (!(_0x4b909a instanceof _0x2840b9.ErrnoError)) {
              throw _0x4b909a;
            }
            if (_0x4b909a.errno !== _0x1163d3.EOPNOTSUPP) {
              throw _0x4b909a;
            }
          }
        }
      },
      connect: function (_0x5ef5ca, _0x3f6bf2, _0x2d7e51) {
        if (_0x5ef5ca.server) {
          throw new _0x2840b9.ErrnoError(_0x1163d3.EOPNOTSUPP);
        }
        if (typeof _0x5ef5ca.daddr !== "undefined" && typeof _0x5ef5ca.dport !== "undefined") {
          var _0x118cb3 = _0x568dd0.websocket_sock_ops.getPeer(_0x5ef5ca, _0x5ef5ca.daddr, _0x5ef5ca.dport);
          if (_0x118cb3) {
            if (_0x118cb3.socket.readyState === _0x118cb3.socket.CONNECTING) {
              throw new _0x2840b9.ErrnoError(_0x1163d3.EALREADY);
            } else {
              throw new _0x2840b9.ErrnoError(_0x1163d3.EISCONN);
            }
          }
        }
        var _0x3bcceb = _0x568dd0.websocket_sock_ops.createPeer(_0x5ef5ca, _0x3f6bf2, _0x2d7e51);
        _0x5ef5ca.daddr = _0x3bcceb.addr;
        _0x5ef5ca.dport = _0x3bcceb.port;
        throw new _0x2840b9.ErrnoError(_0x1163d3.EINPROGRESS);
      },
      listen: function (_0x5c79db, _0x33282a) {
        if (!_0x319321) {
          throw new _0x2840b9.ErrnoError(_0x1163d3.EOPNOTSUPP);
        }
        if (_0x5c79db.server) {
          throw new _0x2840b9.ErrnoError(_0x1163d3.EINVAL);
        }
        var _0x31731b = require("ws").Server;
        var _0xdd8dd8 = _0x5c79db.saddr;
        _0x5c79db.server = new _0x31731b({
          host: _0xdd8dd8,
          port: _0x5c79db.sport
        });
        _0x289557.websocket.emit("listen", _0x5c79db.stream.fd);
        _0x5c79db.server.on("connection", function (_0x19cfb9) {
          if (_0x5c79db.type === 1) {
            var _0x505254 = _0x568dd0.createSocket(_0x5c79db.family, _0x5c79db.type, _0x5c79db.protocol);
            var _0x3bda77 = _0x568dd0.websocket_sock_ops.createPeer(_0x505254, _0x19cfb9);
            _0x505254.daddr = _0x3bda77.addr;
            _0x505254.dport = _0x3bda77.port;
            _0x5c79db.pending.push(_0x505254);
            _0x289557.websocket.emit("connection", _0x505254.stream.fd);
          } else {
            _0x568dd0.websocket_sock_ops.createPeer(_0x5c79db, _0x19cfb9);
            _0x289557.websocket.emit("connection", _0x5c79db.stream.fd);
          }
        });
        _0x5c79db.server.on("closed", function () {
          _0x289557.websocket.emit("close", _0x5c79db.stream.fd);
          _0x5c79db.server = null;
        });
        _0x5c79db.server.on("error", function (_0x33585e) {
          _0x5c79db.error = _0x1163d3.EHOSTUNREACH;
          _0x289557.websocket.emit("error", [_0x5c79db.stream.fd, _0x5c79db.error, "EHOSTUNREACH: Host is unreachable"]);
        });
      },
      accept: function (_0xfaeff2) {
        if (!_0xfaeff2.server) {
          throw new _0x2840b9.ErrnoError(_0x1163d3.EINVAL);
        }
        var _0x185788 = _0xfaeff2.pending.shift();
        _0x185788.stream.flags = _0xfaeff2.stream.flags;
        return _0x185788;
      },
      getname: function (_0x5c7c66, _0x578921) {
        var _0x43c73a;
        var _0x14a1ae;
        if (_0x578921) {
          if (_0x5c7c66.daddr === undefined || _0x5c7c66.dport === undefined) {
            throw new _0x2840b9.ErrnoError(_0x1163d3.ENOTCONN);
          }
          _0x43c73a = _0x5c7c66.daddr;
          _0x14a1ae = _0x5c7c66.dport;
        } else {
          _0x43c73a = _0x5c7c66.saddr || 0;
          _0x14a1ae = _0x5c7c66.sport || 0;
        }
        return {
          addr: _0x43c73a,
          port: _0x14a1ae
        };
      },
      sendmsg: function (_0x350f96, _0x2d107e, _0x465eb7, _0x72a6da, _0x128a31, _0x4d5e07) {
        if (_0x350f96.type === 2) {
          if (_0x128a31 === undefined || _0x4d5e07 === undefined) {
            _0x128a31 = _0x350f96.daddr;
            _0x4d5e07 = _0x350f96.dport;
          }
          if (_0x128a31 === undefined || _0x4d5e07 === undefined) {
            throw new _0x2840b9.ErrnoError(_0x1163d3.EDESTADDRREQ);
          }
        } else {
          _0x128a31 = _0x350f96.daddr;
          _0x4d5e07 = _0x350f96.dport;
        }
        var _0x1ee5cc = _0x568dd0.websocket_sock_ops.getPeer(_0x350f96, _0x128a31, _0x4d5e07);
        if (_0x350f96.type === 1) {
          if (!_0x1ee5cc || _0x1ee5cc.socket.readyState === _0x1ee5cc.socket.CLOSING || _0x1ee5cc.socket.readyState === _0x1ee5cc.socket.CLOSED) {
            throw new _0x2840b9.ErrnoError(_0x1163d3.ENOTCONN);
          } else if (_0x1ee5cc.socket.readyState === _0x1ee5cc.socket.CONNECTING) {
            throw new _0x2840b9.ErrnoError(_0x1163d3.EAGAIN);
          }
        }
        if (ArrayBuffer.isView(_0x2d107e)) {
          _0x465eb7 += _0x2d107e.byteOffset;
          _0x2d107e = _0x2d107e.buffer;
        }
        var _0x25cafb;
        _0x25cafb = _0x2d107e.slice(_0x465eb7, _0x465eb7 + _0x72a6da);
        if (_0x350f96.type === 2) {
          if (!_0x1ee5cc || _0x1ee5cc.socket.readyState !== _0x1ee5cc.socket.OPEN) {
            if (!_0x1ee5cc || _0x1ee5cc.socket.readyState === _0x1ee5cc.socket.CLOSING || _0x1ee5cc.socket.readyState === _0x1ee5cc.socket.CLOSED) {
              _0x1ee5cc = _0x568dd0.websocket_sock_ops.createPeer(_0x350f96, _0x128a31, _0x4d5e07);
            }
            _0x1ee5cc.dgram_send_queue.push(_0x25cafb);
            return _0x72a6da;
          }
        }
        try {
          _0x1ee5cc.socket.send(_0x25cafb);
          return _0x72a6da;
        } catch (_0x29de71) {
          throw new _0x2840b9.ErrnoError(_0x1163d3.EINVAL);
        }
      },
      recvmsg: function (_0x2e5935, _0x50d2b3) {
        if (_0x2e5935.type === 1 && _0x2e5935.server) {
          throw new _0x2840b9.ErrnoError(_0x1163d3.ENOTCONN);
        }
        var _0x49f653 = _0x2e5935.recv_queue.shift();
        if (!_0x49f653) {
          if (_0x2e5935.type === 1) {
            var _0x17bc06 = _0x568dd0.websocket_sock_ops.getPeer(_0x2e5935, _0x2e5935.daddr, _0x2e5935.dport);
            if (!_0x17bc06) {
              throw new _0x2840b9.ErrnoError(_0x1163d3.ENOTCONN);
            } else if (_0x17bc06.socket.readyState === _0x17bc06.socket.CLOSING || _0x17bc06.socket.readyState === _0x17bc06.socket.CLOSED) {
              return null;
            } else {
              throw new _0x2840b9.ErrnoError(_0x1163d3.EAGAIN);
            }
          } else {
            throw new _0x2840b9.ErrnoError(_0x1163d3.EAGAIN);
          }
        }
        var _0x469212 = _0x49f653.data.byteLength || _0x49f653.data.length;
        var _0x19df21 = _0x49f653.data.byteOffset || 0;
        var _0x46744c = _0x49f653.data.buffer || _0x49f653.data;
        var _0x55d3c5 = Math.min(_0x50d2b3, _0x469212);
        var _0x41af1c = {
          buffer: new Uint8Array(_0x46744c, _0x19df21, _0x55d3c5),
          addr: _0x49f653.addr,
          port: _0x49f653.port
        };
        if (_0x2e5935.type === 1 && _0x55d3c5 < _0x469212) {
          var _0x1dc2c3 = _0x469212 - _0x55d3c5;
          _0x49f653.data = new Uint8Array(_0x46744c, _0x19df21 + _0x55d3c5, _0x1dc2c3);
          _0x2e5935.recv_queue.unshift(_0x49f653);
        }
        return _0x41af1c;
      }
    }
  };
  function _0x450d90(_0x1ce275) {
    var _0x2a25de = _0x568dd0.getSocket(_0x1ce275);
    if (!_0x2a25de) {
      throw new _0x2840b9.ErrnoError(8);
    }
    return _0x2a25de;
  }
  function _0x50999a(_0x45a768) {
    _0x4e86a5[_0x5bdab2() >> 2] = _0x45a768;
    return _0x45a768;
  }
  function _0x292c0f(_0x472316) {
    var _0x4ee40a = _0x472316.split(".");
    for (var _0x56cdaf = 0; _0x56cdaf < 4; _0x56cdaf++) {
      var _0xf6aeb2 = Number(_0x4ee40a[_0x56cdaf]);
      if (isNaN(_0xf6aeb2)) {
        return null;
      }
      _0x4ee40a[_0x56cdaf] = _0xf6aeb2;
    }
    return (_0x4ee40a[0] | _0x4ee40a[1] << 8 | _0x4ee40a[2] << 16 | _0x4ee40a[3] << 24) >>> 0;
  }
  function _0x54d60e(_0xfb996e) {
    return parseInt(_0xfb996e);
  }
  function _0x3da04d(_0x1d671e) {
    var _0x25647e;
    var _0x248aed;
    var _0x43fb54;
    var _0x5cf9fe;
    var _0x21924d = /^((?=.*::)(?!.*::.+::)(::)?([\dA-F]{1,4}:(:|\b)|){5}|([\dA-F]{1,4}:){6})((([\dA-F]{1,4}((?!\3)::|:\b|$))|(?!\2\3)){2}|(((2[0-4]|1\d|[1-9])?\d|25[0-5])\.?\b){4})$/i;
    var _0x416190 = [];
    if (!_0x21924d.test(_0x1d671e)) {
      return null;
    }
    if (_0x1d671e === "::") {
      return [0, 0, 0, 0, 0, 0, 0, 0];
    }
    if (_0x1d671e.startsWith("::")) {
      _0x1d671e = _0x1d671e.replace("::", "Z:");
    } else {
      _0x1d671e = _0x1d671e.replace("::", ":Z:");
    }
    if (_0x1d671e.indexOf(".") > 0) {
      _0x1d671e = _0x1d671e.replace(new RegExp("[.]", "g"), ":");
      _0x25647e = _0x1d671e.split(":");
      _0x25647e[_0x25647e.length - 4] = _0x54d60e(_0x25647e[_0x25647e.length - 4]) + _0x54d60e(_0x25647e[_0x25647e.length - 3]) * 256;
      _0x25647e[_0x25647e.length - 3] = _0x54d60e(_0x25647e[_0x25647e.length - 2]) + _0x54d60e(_0x25647e[_0x25647e.length - 1]) * 256;
      _0x25647e = _0x25647e.slice(0, _0x25647e.length - 2);
    } else {
      _0x25647e = _0x1d671e.split(":");
    }
    _0x43fb54 = 0;
    _0x5cf9fe = 0;
    for (_0x248aed = 0; _0x248aed < _0x25647e.length; _0x248aed++) {
      if (typeof _0x25647e[_0x248aed] === "string") {
        if (_0x25647e[_0x248aed] === "Z") {
          for (_0x5cf9fe = 0; _0x5cf9fe < 8 - _0x25647e.length + 1; _0x5cf9fe++) {
            _0x416190[_0x248aed + _0x5cf9fe] = 0;
          }
          _0x43fb54 = _0x5cf9fe - 1;
        } else {
          _0x416190[_0x248aed + _0x43fb54] = _0x36afa6(parseInt(_0x25647e[_0x248aed], 16));
        }
      } else {
        _0x416190[_0x248aed + _0x43fb54] = _0x25647e[_0x248aed];
      }
    }
    return [_0x416190[1] << 16 | _0x416190[0], _0x416190[3] << 16 | _0x416190[2], _0x416190[5] << 16 | _0x416190[4], _0x416190[7] << 16 | _0x416190[6]];
  }
  function _0x4e78dd(_0x2c9adf, _0x43dc54, _0xe1c09b, _0x1f9171, _0x525e10) {
    switch (_0x43dc54) {
      case 2:
        _0xe1c09b = _0x292c0f(_0xe1c09b);
        if (_0x525e10) {
          _0x4e86a5[_0x525e10 >> 2] = 16;
        }
        _0x2b051e[_0x2c9adf >> 1] = _0x43dc54;
        _0x4e86a5[_0x2c9adf + 4 >> 2] = _0xe1c09b;
        _0x2b051e[_0x2c9adf + 2 >> 1] = _0x36afa6(_0x1f9171);
        _0x4e1161 = [0, (_0x3a5e98 = 0, +Math.abs(_0x3a5e98) >= 1 ? _0x3a5e98 > 0 ? (Math.min(+Math.floor(_0x3a5e98 / 4294967296), 4294967295) | 0) >>> 0 : ~~+Math.ceil((_0x3a5e98 - +(~~_0x3a5e98 >>> 0)) / 4294967296) >>> 0 : 0)];
        _0x4e86a5[_0x2c9adf + 8 >> 2] = _0x4e1161[0];
        _0x4e86a5[_0x2c9adf + 12 >> 2] = _0x4e1161[1];
        break;
      case 10:
        _0xe1c09b = _0x3da04d(_0xe1c09b);
        if (_0x525e10) {
          _0x4e86a5[_0x525e10 >> 2] = 28;
        }
        _0x4e86a5[_0x2c9adf >> 2] = _0x43dc54;
        _0x4e86a5[_0x2c9adf + 8 >> 2] = _0xe1c09b[0];
        _0x4e86a5[_0x2c9adf + 12 >> 2] = _0xe1c09b[1];
        _0x4e86a5[_0x2c9adf + 16 >> 2] = _0xe1c09b[2];
        _0x4e86a5[_0x2c9adf + 20 >> 2] = _0xe1c09b[3];
        _0x2b051e[_0x2c9adf + 2 >> 1] = _0x36afa6(_0x1f9171);
        _0x4e86a5[_0x2c9adf + 4 >> 2] = 0;
        _0x4e86a5[_0x2c9adf + 24 >> 2] = 0;
        break;
      default:
        return 5;
    }
    return 0;
  }
  var _0x21dd1f = {
    address_map: {
      id: 1,
      addrs: {},
      names: {}
    },
    lookup_name: function (_0xfccf92) {
      var _0x4ccb81 = _0x292c0f(_0xfccf92);
      if (_0x4ccb81 !== null) {
        return _0xfccf92;
      }
      _0x4ccb81 = _0x3da04d(_0xfccf92);
      if (_0x4ccb81 !== null) {
        return _0xfccf92;
      }
      var _0x326211;
      if (_0x21dd1f.address_map.addrs[_0xfccf92]) {
        _0x326211 = _0x21dd1f.address_map.addrs[_0xfccf92];
      } else {
        var _0x3b0347 = _0x21dd1f.address_map.id++;
        _0x4eb180(_0x3b0347 < 65535, "exceeded max address mappings of 65535");
        _0x326211 = "172.29." + (_0x3b0347 & 255) + "." + (_0x3b0347 & 65280);
        _0x21dd1f.address_map.names[_0x326211] = _0xfccf92;
        _0x21dd1f.address_map.addrs[_0xfccf92] = _0x326211;
      }
      return _0x326211;
    },
    lookup_addr: function (_0x45ef10) {
      if (_0x21dd1f.address_map.names[_0x45ef10]) {
        return _0x21dd1f.address_map.names[_0x45ef10];
      }
      return null;
    }
  };
  function _0x1e3098(_0x8e2c08, _0x52c270, _0x1bce4f, _0x2132d3) {
    try {
      var _0x5c354b = _0x450d90(_0x8e2c08);
      var _0xa751a8 = _0x5c354b.sock_ops.accept(_0x5c354b);
      if (_0x52c270) {
        var _0x2c87f2 = _0x4e78dd(_0x52c270, _0xa751a8.family, _0x21dd1f.lookup_name(_0xa751a8.daddr), _0xa751a8.dport, _0x1bce4f);
      }
      return _0xa751a8.stream.fd;
    } catch (_0x540adb) {
      if (typeof _0x2840b9 === "undefined" || !(_0x540adb instanceof _0x2840b9.ErrnoError)) {
        _0x48d521(_0x540adb);
      }
      return -_0x540adb.errno;
    }
  }
  function _0x44e851(_0x22c55a, _0x414e2d) {
    try {
      _0x22c55a = _0x24c16a.getStr(_0x22c55a);
      return _0x24c16a.doAccess(_0x22c55a, _0x414e2d);
    } catch (_0x3cc974) {
      if (typeof _0x2840b9 === "undefined" || !(_0x3cc974 instanceof _0x2840b9.ErrnoError)) {
        _0x48d521(_0x3cc974);
      }
      return -_0x3cc974.errno;
    }
  }
  function _0x4277be(_0x22638d) {
    return (_0x22638d & 255) + "." + (_0x22638d >> 8 & 255) + "." + (_0x22638d >> 16 & 255) + "." + (_0x22638d >> 24 & 255);
  }
  function _0x42b771(_0x4da8fe) {
    var _0x23330d = "";
    var _0x3f5853 = 0;
    var _0x586eed = 0;
    var _0x52ea5a = 0;
    var _0x4203fd = 0;
    var _0x44d778 = 0;
    var _0x566ba9 = 0;
    var _0x4bd800 = [_0x4da8fe[0] & 65535, _0x4da8fe[0] >> 16, _0x4da8fe[1] & 65535, _0x4da8fe[1] >> 16, _0x4da8fe[2] & 65535, _0x4da8fe[2] >> 16, _0x4da8fe[3] & 65535, _0x4da8fe[3] >> 16];
    var _0x4b3abc = true;
    var _0xcb7297 = "";
    for (_0x566ba9 = 0; _0x566ba9 < 5; _0x566ba9++) {
      if (_0x4bd800[_0x566ba9] !== 0) {
        _0x4b3abc = false;
        break;
      }
    }
    if (_0x4b3abc) {
      _0xcb7297 = _0x4277be(_0x4bd800[6] | _0x4bd800[7] << 16);
      if (_0x4bd800[5] === -1) {
        _0x23330d = "::ffff:";
        _0x23330d += _0xcb7297;
        return _0x23330d;
      }
      if (_0x4bd800[5] === 0) {
        _0x23330d = "::";
        if (_0xcb7297 === "0.0.0.0") {
          _0xcb7297 = "";
        }
        if (_0xcb7297 === "0.0.0.1") {
          _0xcb7297 = "1";
        }
        _0x23330d += _0xcb7297;
        return _0x23330d;
      }
    }
    for (_0x3f5853 = 0; _0x3f5853 < 8; _0x3f5853++) {
      if (_0x4bd800[_0x3f5853] === 0) {
        if (_0x3f5853 - _0x52ea5a > 1) {
          _0x44d778 = 0;
        }
        _0x52ea5a = _0x3f5853;
        _0x44d778++;
      }
      if (_0x44d778 > _0x586eed) {
        _0x586eed = _0x44d778;
        _0x4203fd = _0x3f5853 - _0x586eed + 1;
      }
    }
    for (_0x3f5853 = 0; _0x3f5853 < 8; _0x3f5853++) {
      if (_0x586eed > 1) {
        if (_0x4bd800[_0x3f5853] === 0 && _0x3f5853 >= _0x4203fd && _0x3f5853 < _0x4203fd + _0x586eed) {
          if (_0x3f5853 === _0x4203fd) {
            _0x23330d += ":";
            if (_0x4203fd === 0) {
              _0x23330d += ":";
            }
          }
          continue;
        }
      }
      _0x23330d += Number(_0x1fbe86(_0x4bd800[_0x3f5853] & 65535)).toString(16);
      _0x23330d += _0x3f5853 < 7 ? ":" : "";
    }
    return _0x23330d;
  }
  function _0x43e741(_0x28ad1b, _0x5af093) {
    var _0x54c853 = _0x2b051e[_0x28ad1b >> 1];
    var _0x34dc82 = _0x1fbe86(_0x3201fa[_0x28ad1b + 2 >> 1]);
    var _0x1a3cdf;
    switch (_0x54c853) {
      case 2:
        if (_0x5af093 !== 16) {
          return {
            errno: 28
          };
        }
        _0x1a3cdf = _0x4e86a5[_0x28ad1b + 4 >> 2];
        _0x1a3cdf = _0x4277be(_0x1a3cdf);
        break;
      case 10:
        if (_0x5af093 !== 28) {
          return {
            errno: 28
          };
        }
        _0x1a3cdf = [_0x4e86a5[_0x28ad1b + 8 >> 2], _0x4e86a5[_0x28ad1b + 12 >> 2], _0x4e86a5[_0x28ad1b + 16 >> 2], _0x4e86a5[_0x28ad1b + 20 >> 2]];
        _0x1a3cdf = _0x42b771(_0x1a3cdf);
        break;
      default:
        return {
          errno: 5
        };
    }
    return {
      family: _0x54c853,
      addr: _0x1a3cdf,
      port: _0x34dc82
    };
  }
  function _0xf16090(_0x4e4b29, _0x2597c0, _0x436861) {
    if (_0x436861 && _0x4e4b29 === 0) {
      return null;
    }
    var _0xb376d4 = _0x43e741(_0x4e4b29, _0x2597c0);
    if (_0xb376d4.errno) {
      throw new _0x2840b9.ErrnoError(_0xb376d4.errno);
    }
    _0xb376d4.addr = _0x21dd1f.lookup_addr(_0xb376d4.addr) || _0xb376d4.addr;
    return _0xb376d4;
  }
  function _0x4b783d(_0x41d89a, _0x4a9fc1, _0x195fe7) {
    try {
      var _0xb72f59 = _0x450d90(_0x41d89a);
      var _0x315f8b = _0xf16090(_0x4a9fc1, _0x195fe7);
      _0xb72f59.sock_ops.bind(_0xb72f59, _0x315f8b.addr, _0x315f8b.port);
      return 0;
    } catch (_0x9f8a5) {
      if (typeof _0x2840b9 === "undefined" || !(_0x9f8a5 instanceof _0x2840b9.ErrnoError)) {
        _0x48d521(_0x9f8a5);
      }
      return -_0x9f8a5.errno;
    }
  }
  function _0xbb39eb(_0x2e92c5, _0x501fe3) {
    try {
      _0x2e92c5 = _0x24c16a.getStr(_0x2e92c5);
      _0x2840b9.chmod(_0x2e92c5, _0x501fe3);
      return 0;
    } catch (_0x195821) {
      if (typeof _0x2840b9 === "undefined" || !(_0x195821 instanceof _0x2840b9.ErrnoError)) {
        _0x48d521(_0x195821);
      }
      return -_0x195821.errno;
    }
  }
  function _0x37f376(_0xd37bed, _0x504945, _0x3a75bf) {
    try {
      var _0x964d78 = _0x450d90(_0xd37bed);
      var _0x18d5da = _0xf16090(_0x504945, _0x3a75bf);
      _0x964d78.sock_ops.connect(_0x964d78, _0x18d5da.addr, _0x18d5da.port);
      return 0;
    } catch (_0x14764c) {
      if (typeof _0x2840b9 === "undefined" || !(_0x14764c instanceof _0x2840b9.ErrnoError)) {
        _0x48d521(_0x14764c);
      }
      return -_0x14764c.errno;
    }
  }
  function _0x5d0e6f(_0x3605de, _0x358d68) {
    try {
      var _0x3f7744 = _0x24c16a.getStreamFromFD(_0x3605de);
      if (_0x3f7744.fd === _0x358d68) {
        return _0x358d68;
      }
      return _0x24c16a.doDup(_0x3f7744.path, _0x3f7744.flags, _0x358d68);
    } catch (_0x56f585) {
      if (typeof _0x2840b9 === "undefined" || !(_0x56f585 instanceof _0x2840b9.ErrnoError)) {
        _0x48d521(_0x56f585);
      }
      return -_0x56f585.errno;
    }
  }
  function _0x1435db(_0x2996e2, _0x5070e8, _0x5d2dab) {
    _0x24c16a.varargs = _0x5d2dab;
    try {
      var _0x516096 = _0x24c16a.getStreamFromFD(_0x2996e2);
      switch (_0x5070e8) {
        case 0:
          {
            var _0x32348c = _0x24c16a.get();
            if (_0x32348c < 0) {
              return -28;
            }
            var _0x3f17e5;
            _0x3f17e5 = _0x2840b9.open(_0x516096.path, _0x516096.flags, 0, _0x32348c);
            return _0x3f17e5.fd;
          }
        case 1:
        case 2:
          return 0;
        case 3:
          return _0x516096.flags;
        case 4:
          {
            var _0x32348c = _0x24c16a.get();
            _0x516096.flags |= _0x32348c;
            return 0;
          }
        case 12:
          {
            var _0x32348c = _0x24c16a.get();
            var _0x54e805 = 0;
            _0x2b051e[_0x32348c + _0x54e805 >> 1] = 2;
            return 0;
          }
        case 13:
        case 14:
          return 0;
        case 16:
        case 8:
          return -28;
        case 9:
          _0x50999a(28);
          return -1;
        default:
          {
            return -28;
          }
      }
    } catch (_0x462ea2) {
      if (typeof _0x2840b9 === "undefined" || !(_0x462ea2 instanceof _0x2840b9.ErrnoError)) {
        _0x48d521(_0x462ea2);
      }
      return -_0x462ea2.errno;
    }
  }
  function _0x5ede25(_0x911055, _0x2ac4dd) {
    try {
      var _0x1fd95e = _0x24c16a.getStreamFromFD(_0x911055);
      return _0x24c16a.doStat(_0x2840b9.stat, _0x1fd95e.path, _0x2ac4dd);
    } catch (_0x49cdc5) {
      if (typeof _0x2840b9 === "undefined" || !(_0x49cdc5 instanceof _0x2840b9.ErrnoError)) {
        _0x48d521(_0x49cdc5);
      }
      return -_0x49cdc5.errno;
    }
  }
  function _0x3db138(_0x27c973, _0x1f9404, _0x5afcc4, _0x3f5aad) {
    try {
      var _0x491d60 = _0x24c16a.get64(_0x5afcc4, _0x3f5aad);
      _0x2840b9.ftruncate(_0x27c973, _0x491d60);
      return 0;
    } catch (_0x33afc8) {
      if (typeof _0x2840b9 === "undefined" || !(_0x33afc8 instanceof _0x2840b9.ErrnoError)) {
        _0x48d521(_0x33afc8);
      }
      return -_0x33afc8.errno;
    }
  }
  function _0x3f6562(_0x151e79, _0x1e4959) {
    try {
      if (_0x1e4959 === 0) {
        return -28;
      }
      var _0x4b3025 = _0x2840b9.cwd();
      var _0x40d1d9 = _0x247116(_0x4b3025);
      if (_0x1e4959 < _0x40d1d9 + 1) {
        return -68;
      }
      _0x409466(_0x4b3025, _0x151e79, _0x1e4959);
      return _0x151e79;
    } catch (_0x446624) {
      if (typeof _0x2840b9 === "undefined" || !(_0x446624 instanceof _0x2840b9.ErrnoError)) {
        _0x48d521(_0x446624);
      }
      return -_0x446624.errno;
    }
  }
  function _0x47bdcd(_0x1864d9, _0xf45708, _0x3e9419) {
    try {
      var _0x50080a = _0x24c16a.getStreamFromFD(_0x1864d9);
      if (!_0x50080a.getdents) {
        _0x50080a.getdents = _0x2840b9.readdir(_0x50080a.path);
      }
      var _0x4835e5 = 280;
      var _0x3936ab = 0;
      var _0x14042a = _0x2840b9.llseek(_0x50080a, 0, 1);
      var _0x26446e = Math.floor(_0x14042a / _0x4835e5);
      while (_0x26446e < _0x50080a.getdents.length && _0x3936ab + _0x4835e5 <= _0x3e9419) {
        var _0x121843;
        var _0x4d34ac;
        var _0x4f3b06 = _0x50080a.getdents[_0x26446e];
        if (_0x4f3b06[0] === ".") {
          _0x121843 = 1;
          _0x4d34ac = 4;
        } else {
          var _0x10339b = _0x2840b9.lookupNode(_0x50080a.node, _0x4f3b06);
          _0x121843 = _0x10339b.id;
          _0x4d34ac = _0x2840b9.isChrdev(_0x10339b.mode) ? 2 : _0x2840b9.isDir(_0x10339b.mode) ? 4 : _0x2840b9.isLink(_0x10339b.mode) ? 10 : 8;
        }
        _0x4e1161 = [_0x121843 >>> 0, (_0x3a5e98 = _0x121843, +Math.abs(_0x3a5e98) >= 1 ? _0x3a5e98 > 0 ? (Math.min(+Math.floor(_0x3a5e98 / 4294967296), 4294967295) | 0) >>> 0 : ~~+Math.ceil((_0x3a5e98 - +(~~_0x3a5e98 >>> 0)) / 4294967296) >>> 0 : 0)];
        _0x4e86a5[_0xf45708 + _0x3936ab >> 2] = _0x4e1161[0];
        _0x4e86a5[_0xf45708 + _0x3936ab + 4 >> 2] = _0x4e1161[1];
        _0x4e1161 = [(_0x26446e + 1) * _0x4835e5 >>> 0, (_0x3a5e98 = (_0x26446e + 1) * _0x4835e5, +Math.abs(_0x3a5e98) >= 1 ? _0x3a5e98 > 0 ? (Math.min(+Math.floor(_0x3a5e98 / 4294967296), 4294967295) | 0) >>> 0 : ~~+Math.ceil((_0x3a5e98 - +(~~_0x3a5e98 >>> 0)) / 4294967296) >>> 0 : 0)];
        _0x4e86a5[_0xf45708 + _0x3936ab + 8 >> 2] = _0x4e1161[0];
        _0x4e86a5[_0xf45708 + _0x3936ab + 12 >> 2] = _0x4e1161[1];
        _0x2b051e[_0xf45708 + _0x3936ab + 16 >> 1] = 280;
        _0x9c4a59[_0xf45708 + _0x3936ab + 18 >> 0] = _0x4d34ac;
        _0x409466(_0x4f3b06, _0xf45708 + _0x3936ab + 19, 256);
        _0x3936ab += _0x4835e5;
        _0x26446e += 1;
      }
      _0x2840b9.llseek(_0x50080a, _0x26446e * _0x4835e5, 0);
      return _0x3936ab;
    } catch (_0x31a6c6) {
      if (typeof _0x2840b9 === "undefined" || !(_0x31a6c6 instanceof _0x2840b9.ErrnoError)) {
        _0x48d521(_0x31a6c6);
      }
      return -_0x31a6c6.errno;
    }
  }
  function _0x504480() {
    return 0;
  }
  function _0x396c10() {
    return _0x504480();
  }
  function _0x312569(_0x35c635, _0x2a2baa, _0xec0508) {
    try {
      var _0x5ce3fd = _0x450d90(_0x35c635);
      if (!_0x5ce3fd.daddr) {
        return -53;
      }
      var _0x1a43ed = _0x4e78dd(_0x2a2baa, _0x5ce3fd.family, _0x21dd1f.lookup_name(_0x5ce3fd.daddr), _0x5ce3fd.dport, _0xec0508);
      return 0;
    } catch (_0x10cb6f) {
      if (typeof _0x2840b9 === "undefined" || !(_0x10cb6f instanceof _0x2840b9.ErrnoError)) {
        _0x48d521(_0x10cb6f);
      }
      return -_0x10cb6f.errno;
    }
  }
  function _0x5e3eca() {
    return 42;
  }
  function _0x19f0ce(_0x4c31ba, _0x1ae9e7) {
    try {
      _0x4699cb(_0x1ae9e7, 0, 136);
      _0x4e86a5[_0x1ae9e7 >> 2] = 1;
      _0x4e86a5[_0x1ae9e7 + 4 >> 2] = 2;
      _0x4e86a5[_0x1ae9e7 + 8 >> 2] = 3;
      _0x4e86a5[_0x1ae9e7 + 12 >> 2] = 4;
      return 0;
    } catch (_0x4de334) {
      if (typeof _0x2840b9 === "undefined" || !(_0x4de334 instanceof _0x2840b9.ErrnoError)) {
        _0x48d521(_0x4de334);
      }
      return -_0x4de334.errno;
    }
  }
  function _0x58c7b1(_0x165ea1, _0x5c7901, _0x409ce9) {
    try {
      _0x1650b6("__sys_getsockname " + _0x165ea1);
      var _0x32d85c = _0x450d90(_0x165ea1);
      var _0x3a0735 = _0x4e78dd(_0x5c7901, _0x32d85c.family, _0x21dd1f.lookup_name(_0x32d85c.saddr || "0.0.0.0"), _0x32d85c.sport, _0x409ce9);
      return 0;
    } catch (_0x15e1f3) {
      if (typeof _0x2840b9 === "undefined" || !(_0x15e1f3 instanceof _0x2840b9.ErrnoError)) {
        _0x48d521(_0x15e1f3);
      }
      return -_0x15e1f3.errno;
    }
  }
  function _0x4748f8(_0x4730ee, _0x5d0d61, _0x132396, _0x36ee51, _0x2e1127) {
    try {
      var _0x28a5ea = _0x450d90(_0x4730ee);
      if (_0x5d0d61 === 1) {
        if (_0x132396 === 4) {
          _0x4e86a5[_0x36ee51 >> 2] = _0x28a5ea.error;
          _0x4e86a5[_0x2e1127 >> 2] = 4;
          _0x28a5ea.error = null;
          return 0;
        }
      }
      return -50;
    } catch (_0x8aaf17) {
      if (typeof _0x2840b9 === "undefined" || !(_0x8aaf17 instanceof _0x2840b9.ErrnoError)) {
        _0x48d521(_0x8aaf17);
      }
      return -_0x8aaf17.errno;
    }
  }
  function _0x4efad7() {
    return _0x504480();
  }
  function _0x4ae7cc(_0x3fc9ae, _0x67464b, _0x28674e) {
    _0x24c16a.varargs = _0x28674e;
    try {
      var _0x61451 = _0x24c16a.getStreamFromFD(_0x3fc9ae);
      switch (_0x67464b) {
        case 21509:
        case 21505:
          {
            if (!_0x61451.tty) {
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
            if (!_0x61451.tty) {
              return -59;
            }
            return 0;
          }
        case 21519:
          {
            if (!_0x61451.tty) {
              return -59;
            }
            var _0x5012a9 = _0x24c16a.get();
            _0x4e86a5[_0x5012a9 >> 2] = 0;
            return 0;
          }
        case 21520:
          {
            if (!_0x61451.tty) {
              return -59;
            }
            return -28;
          }
        case 21531:
          {
            var _0x5012a9 = _0x24c16a.get();
            return _0x2840b9.ioctl(_0x61451, _0x67464b, _0x5012a9);
          }
        case 21523:
          {
            if (!_0x61451.tty) {
              return -59;
            }
            return 0;
          }
        case 21524:
          {
            if (!_0x61451.tty) {
              return -59;
            }
            return 0;
          }
        default:
          _0x48d521("bad ioctl syscall " + _0x67464b);
      }
    } catch (_0x141aac) {
      if (typeof _0x2840b9 === "undefined" || !(_0x141aac instanceof _0x2840b9.ErrnoError)) {
        _0x48d521(_0x141aac);
      }
      return -_0x141aac.errno;
    }
  }
  function _0x22dcc4(_0x23036a, _0xa0428c) {
    try {
      var _0x2d6b61 = _0x450d90(_0x23036a);
      _0x2d6b61.sock_ops.listen(_0x2d6b61, _0xa0428c);
      return 0;
    } catch (_0x2ac1c5) {
      if (typeof _0x2840b9 === "undefined" || !(_0x2ac1c5 instanceof _0x2840b9.ErrnoError)) {
        _0x48d521(_0x2ac1c5);
      }
      return -_0x2ac1c5.errno;
    }
  }
  function _0x592596(_0x1e5316, _0x5b3286) {
    try {
      _0x1e5316 = _0x24c16a.getStr(_0x1e5316);
      return _0x24c16a.doStat(_0x2840b9.lstat, _0x1e5316, _0x5b3286);
    } catch (_0x118f53) {
      if (typeof _0x2840b9 === "undefined" || !(_0x118f53 instanceof _0x2840b9.ErrnoError)) {
        _0x48d521(_0x118f53);
      }
      return -_0x118f53.errno;
    }
  }
  function _0x13e84a(_0x2f3122, _0x271f0f) {
    try {
      _0x2f3122 = _0x24c16a.getStr(_0x2f3122);
      return _0x24c16a.doMkdir(_0x2f3122, _0x271f0f);
    } catch (_0x1fa7dc) {
      if (typeof _0x2840b9 === "undefined" || !(_0x1fa7dc instanceof _0x2840b9.ErrnoError)) {
        _0x48d521(_0x1fa7dc);
      }
      return -_0x1fa7dc.errno;
    }
  }
  function _0x4e6a1f(_0x1fe482, _0xc4748d, _0x15e82c, _0x54ca7a, _0x55e693, _0x1b4158) {
    _0x1b4158 <<= 12;
    var _0x183f1c;
    var _0x19f65f = false;
    if ((_0x54ca7a & 16) !== 0 && _0x1fe482 % 65536 !== 0) {
      return -28;
    }
    if ((_0x54ca7a & 32) !== 0) {
      _0x183f1c = _0x243a56(65536, _0xc4748d);
      if (!_0x183f1c) {
        return -48;
      }
      _0x4699cb(_0x183f1c, 0, _0xc4748d);
      _0x19f65f = true;
    } else {
      var _0x26b37f = _0x2840b9.getStream(_0x55e693);
      if (!_0x26b37f) {
        return -8;
      }
      var _0x4d1bc5 = _0x2840b9.mmap(_0x26b37f, _0x1fe482, _0xc4748d, _0x1b4158, _0x15e82c, _0x54ca7a);
      _0x183f1c = _0x4d1bc5.ptr;
      _0x19f65f = _0x4d1bc5.allocated;
    }
    _0x24c16a.mappings[_0x183f1c] = {
      malloc: _0x183f1c,
      len: _0xc4748d,
      allocated: _0x19f65f,
      fd: _0x55e693,
      prot: _0x15e82c,
      flags: _0x54ca7a,
      offset: _0x1b4158
    };
    return _0x183f1c;
  }
  function _0x142987(_0x270ba2, _0x55be46, _0x5f1b90, _0x2e3771, _0x198198, _0x252b18) {
    try {
      return _0x4e6a1f(_0x270ba2, _0x55be46, _0x5f1b90, _0x2e3771, _0x198198, _0x252b18);
    } catch (_0x3e41c3) {
      if (typeof _0x2840b9 === "undefined" || !(_0x3e41c3 instanceof _0x2840b9.ErrnoError)) {
        _0x48d521(_0x3e41c3);
      }
      return -_0x3e41c3.errno;
    }
  }
  function _0x2e9763(_0xce355c, _0x27e7de) {
    if ((_0xce355c | 0) === -1 || _0x27e7de === 0) {
      return -28;
    }
    var _0x2ec514 = _0x24c16a.mappings[_0xce355c];
    if (!_0x2ec514) {
      return 0;
    }
    if (_0x27e7de === _0x2ec514.len) {
      var _0x407935 = _0x2840b9.getStream(_0x2ec514.fd);
      if (_0x407935) {
        if (_0x2ec514.prot & 2) {
          _0x24c16a.doMsync(_0xce355c, _0x407935, _0x27e7de, _0x2ec514.flags, _0x2ec514.offset);
        }
        _0x2840b9.munmap(_0x407935);
      }
      _0x24c16a.mappings[_0xce355c] = null;
      if (_0x2ec514.allocated) {
        _0x2933c1(_0x2ec514.malloc);
      }
    }
    return 0;
  }
  function _0x1b33cf(_0x40e279, _0x4f988d) {
    try {
      return _0x2e9763(_0x40e279, _0x4f988d);
    } catch (_0x3403eb) {
      if (typeof _0x2840b9 === "undefined" || !(_0x3403eb instanceof _0x2840b9.ErrnoError)) {
        _0x48d521(_0x3403eb);
      }
      return -_0x3403eb.errno;
    }
  }
  function _0x25a99c(_0x2a0406, _0x4c94c8, _0x317e0c) {
    _0x24c16a.varargs = _0x317e0c;
    try {
      var _0x1b9b14 = _0x24c16a.getStr(_0x2a0406);
      var _0x4d1fd3 = _0x317e0c ? _0x24c16a.get() : 0;
      var _0x2dd88b = _0x2840b9.open(_0x1b9b14, _0x4c94c8, _0x4d1fd3);
      return _0x2dd88b.fd;
    } catch (_0x3302d2) {
      if (typeof _0x2840b9 === "undefined" || !(_0x3302d2 instanceof _0x2840b9.ErrnoError)) {
        _0x48d521(_0x3302d2);
      }
      return -_0x3302d2.errno;
    }
  }
  var _0x44836e = {
    BUCKET_BUFFER_SIZE: 8192,
    mount: function (_0xd0ee62) {
      return _0x2840b9.createNode(null, "/", 16895, 0);
    },
    createPipe: function () {
      var _0x1af458 = {
        buckets: []
      };
      _0x1af458.buckets.push({
        buffer: new Uint8Array(_0x44836e.BUCKET_BUFFER_SIZE),
        offset: 0,
        roffset: 0
      });
      var _0x13898f = _0x44836e.nextname();
      var _0xdf1aae = _0x44836e.nextname();
      var _0x45ea13 = _0x2840b9.createNode(_0x44836e.root, _0x13898f, 4096, 0);
      var _0xeb5d47 = _0x2840b9.createNode(_0x44836e.root, _0xdf1aae, 4096, 0);
      _0x45ea13.pipe = _0x1af458;
      _0xeb5d47.pipe = _0x1af458;
      var _0x15acf7 = _0x2840b9.createStream({
        path: _0x13898f,
        node: _0x45ea13,
        flags: 0,
        seekable: false,
        stream_ops: _0x44836e.stream_ops
      });
      _0x45ea13.stream = _0x15acf7;
      var _0x2a2dc4 = _0x2840b9.createStream({
        path: _0xdf1aae,
        node: _0xeb5d47,
        flags: 1,
        seekable: false,
        stream_ops: _0x44836e.stream_ops
      });
      _0xeb5d47.stream = _0x2a2dc4;
      return {
        readable_fd: _0x15acf7.fd,
        writable_fd: _0x2a2dc4.fd
      };
    },
    stream_ops: {
      poll: function (_0x1e1b31) {
        var _0x1ac344 = _0x1e1b31.node.pipe;
        if ((_0x1e1b31.flags & 2097155) === 1) {
          return 260;
        } else if (_0x1ac344.buckets.length > 0) {
          for (var _0x4d5bee = 0; _0x4d5bee < _0x1ac344.buckets.length; _0x4d5bee++) {
            var _0x359d0b = _0x1ac344.buckets[_0x4d5bee];
            if (_0x359d0b.offset - _0x359d0b.roffset > 0) {
              return 65;
            }
          }
        }
        return 0;
      },
      ioctl: function (_0x3b99f0, _0x51ee15, _0x15f365) {
        return _0x1163d3.EINVAL;
      },
      fsync: function (_0x4adea4) {
        return _0x1163d3.EINVAL;
      },
      read: function (_0x24447a, _0x1e3362, _0x5e10c3, _0x1bbdaf, _0x7b8153) {
        var _0x34ded0 = _0x24447a.node.pipe;
        var _0x385805 = 0;
        for (var _0x903e4b = 0; _0x903e4b < _0x34ded0.buckets.length; _0x903e4b++) {
          var _0x317c0f = _0x34ded0.buckets[_0x903e4b];
          _0x385805 += _0x317c0f.offset - _0x317c0f.roffset;
        }
        _0x4eb180(_0x1e3362 instanceof ArrayBuffer || ArrayBuffer.isView(_0x1e3362));
        var _0x45dc61 = _0x1e3362.subarray(_0x5e10c3, _0x5e10c3 + _0x1bbdaf);
        if (_0x1bbdaf <= 0) {
          return 0;
        }
        if (_0x385805 == 0) {
          throw new _0x2840b9.ErrnoError(_0x1163d3.EAGAIN);
        }
        var _0x2c95d2 = Math.min(_0x385805, _0x1bbdaf);
        var _0x27e643 = _0x2c95d2;
        var _0x32f1fd = 0;
        for (var _0x903e4b = 0; _0x903e4b < _0x34ded0.buckets.length; _0x903e4b++) {
          var _0x5f0e0b = _0x34ded0.buckets[_0x903e4b];
          var _0x5e02be = _0x5f0e0b.offset - _0x5f0e0b.roffset;
          if (_0x2c95d2 <= _0x5e02be) {
            var _0x38eca2 = _0x5f0e0b.buffer.subarray(_0x5f0e0b.roffset, _0x5f0e0b.offset);
            if (_0x2c95d2 < _0x5e02be) {
              _0x38eca2 = _0x38eca2.subarray(0, _0x2c95d2);
              _0x5f0e0b.roffset += _0x2c95d2;
            } else {
              _0x32f1fd++;
            }
            _0x45dc61.set(_0x38eca2);
            break;
          } else {
            var _0x38eca2 = _0x5f0e0b.buffer.subarray(_0x5f0e0b.roffset, _0x5f0e0b.offset);
            _0x45dc61.set(_0x38eca2);
            _0x45dc61 = _0x45dc61.subarray(_0x38eca2.byteLength);
            _0x2c95d2 -= _0x38eca2.byteLength;
            _0x32f1fd++;
          }
        }
        if (_0x32f1fd && _0x32f1fd == _0x34ded0.buckets.length) {
          _0x32f1fd--;
          _0x34ded0.buckets[_0x32f1fd].offset = 0;
          _0x34ded0.buckets[_0x32f1fd].roffset = 0;
        }
        _0x34ded0.buckets.splice(0, _0x32f1fd);
        return _0x27e643;
      },
      write: function (_0x4cb638, _0x429a13, _0x158856, _0x5e799d, _0x232b7a) {
        var _0x166400 = _0x4cb638.node.pipe;
        _0x4eb180(_0x429a13 instanceof ArrayBuffer || ArrayBuffer.isView(_0x429a13));
        var _0x5adb1a = _0x429a13.subarray(_0x158856, _0x158856 + _0x5e799d);
        var _0x3976e6 = _0x5adb1a.byteLength;
        if (_0x3976e6 <= 0) {
          return 0;
        }
        var _0xe656ea = null;
        if (_0x166400.buckets.length == 0) {
          _0xe656ea = {
            buffer: new Uint8Array(_0x44836e.BUCKET_BUFFER_SIZE),
            offset: 0,
            roffset: 0
          };
          _0x166400.buckets.push(_0xe656ea);
        } else {
          _0xe656ea = _0x166400.buckets[_0x166400.buckets.length - 1];
        }
        _0x4eb180(_0xe656ea.offset <= _0x44836e.BUCKET_BUFFER_SIZE);
        var _0x459493 = _0x44836e.BUCKET_BUFFER_SIZE - _0xe656ea.offset;
        if (_0x459493 >= _0x3976e6) {
          _0xe656ea.buffer.set(_0x5adb1a, _0xe656ea.offset);
          _0xe656ea.offset += _0x3976e6;
          return _0x3976e6;
        } else if (_0x459493 > 0) {
          _0xe656ea.buffer.set(_0x5adb1a.subarray(0, _0x459493), _0xe656ea.offset);
          _0xe656ea.offset += _0x459493;
          _0x5adb1a = _0x5adb1a.subarray(_0x459493, _0x5adb1a.byteLength);
        }
        var _0xbeb330 = _0x5adb1a.byteLength / _0x44836e.BUCKET_BUFFER_SIZE | 0;
        var _0x5d7599 = _0x5adb1a.byteLength % _0x44836e.BUCKET_BUFFER_SIZE;
        for (var _0x100c56 = 0; _0x100c56 < _0xbeb330; _0x100c56++) {
          var _0x1dd8a3 = {
            buffer: new Uint8Array(_0x44836e.BUCKET_BUFFER_SIZE),
            offset: _0x44836e.BUCKET_BUFFER_SIZE,
            roffset: 0
          };
          _0x166400.buckets.push(_0x1dd8a3);
          _0x1dd8a3.buffer.set(_0x5adb1a.subarray(0, _0x44836e.BUCKET_BUFFER_SIZE));
          _0x5adb1a = _0x5adb1a.subarray(_0x44836e.BUCKET_BUFFER_SIZE, _0x5adb1a.byteLength);
        }
        if (_0x5d7599 > 0) {
          var _0x1dd8a3 = {
            buffer: new Uint8Array(_0x44836e.BUCKET_BUFFER_SIZE),
            offset: _0x5adb1a.byteLength,
            roffset: 0
          };
          _0x166400.buckets.push(_0x1dd8a3);
          _0x1dd8a3.buffer.set(_0x5adb1a);
        }
        return _0x3976e6;
      },
      close: function (_0x1c2772) {
        var _0x4a12e1 = _0x1c2772.node.pipe;
        _0x4a12e1.buckets = null;
      }
    },
    nextname: function () {
      if (!_0x44836e.nextname.current) {
        _0x44836e.nextname.current = 0;
      }
      return "pipe[" + _0x44836e.nextname.current++ + "]";
    }
  };
  function _0x2123c2(_0x3de044) {
    try {
      if (_0x3de044 == 0) {
        throw new _0x2840b9.ErrnoError(21);
      }
      var _0x44d2ee = _0x44836e.createPipe();
      _0x4e86a5[_0x3de044 >> 2] = _0x44d2ee.readable_fd;
      _0x4e86a5[_0x3de044 + 4 >> 2] = _0x44d2ee.writable_fd;
      return 0;
    } catch (_0x1492c3) {
      if (typeof _0x2840b9 === "undefined" || !(_0x1492c3 instanceof _0x2840b9.ErrnoError)) {
        _0x48d521(_0x1492c3);
      }
      return -_0x1492c3.errno;
    }
  }
  function _0x1ae436(_0x53c572, _0x15f013, _0x31cd02) {
    try {
      var _0x8963b5 = 0;
      for (var _0x2e1cc0 = 0; _0x2e1cc0 < _0x15f013; _0x2e1cc0++) {
        var _0x332e26 = _0x53c572 + _0x2e1cc0 * 8;
        var _0x5b5641 = _0x4e86a5[_0x332e26 >> 2];
        var _0x46d445 = _0x2b051e[_0x332e26 + 4 >> 1];
        var _0x44447d = 32;
        var _0x3c6e2f = _0x2840b9.getStream(_0x5b5641);
        if (_0x3c6e2f) {
          _0x44447d = _0x24c16a.DEFAULT_POLLMASK;
          if (_0x3c6e2f.stream_ops.poll) {
            _0x44447d = _0x3c6e2f.stream_ops.poll(_0x3c6e2f);
          }
        }
        _0x44447d &= _0x46d445 | 8 | 16;
        if (_0x44447d) {
          _0x8963b5++;
        }
        _0x2b051e[_0x332e26 + 6 >> 1] = _0x44447d;
      }
      return _0x8963b5;
    } catch (_0x132e83) {
      if (typeof _0x2840b9 === "undefined" || !(_0x132e83 instanceof _0x2840b9.ErrnoError)) {
        _0x48d521(_0x132e83);
      }
      return -_0x132e83.errno;
    }
  }
  function _0xaa6c10(_0x2567bc, _0x22ec7a, _0x3f3ebc) {
    try {
      _0x2567bc = _0x24c16a.getStr(_0x2567bc);
      return _0x24c16a.doReadlink(_0x2567bc, _0x22ec7a, _0x3f3ebc);
    } catch (_0x40d535) {
      if (typeof _0x2840b9 === "undefined" || !(_0x40d535 instanceof _0x2840b9.ErrnoError)) {
        _0x48d521(_0x40d535);
      }
      return -_0x40d535.errno;
    }
  }
  function _0x2cb250(_0xacf0, _0x7a9ce3, _0x391f38, _0x4e6df2, _0x218775, _0x3ae994) {
    try {
      var _0x5456a1 = _0x450d90(_0xacf0);
      var _0x3b8415 = _0x5456a1.sock_ops.recvmsg(_0x5456a1, _0x391f38);
      if (!_0x3b8415) {
        return 0;
      }
      if (_0x218775) {
        var _0x62116 = _0x4e78dd(_0x218775, _0x5456a1.family, _0x21dd1f.lookup_name(_0x3b8415.addr), _0x3b8415.port, _0x3ae994);
      }
      _0x950143.set(_0x3b8415.buffer, _0x7a9ce3);
      return _0x3b8415.buffer.byteLength;
    } catch (_0x31a322) {
      if (typeof _0x2840b9 === "undefined" || !(_0x31a322 instanceof _0x2840b9.ErrnoError)) {
        _0x48d521(_0x31a322);
      }
      return -_0x31a322.errno;
    }
  }
  function _0x48f03c(_0x2a316c, _0x4bba99, _0x358c29) {
    try {
      var _0x3db8d1 = _0x450d90(_0x2a316c);
      var _0x51d841 = _0x4e86a5[_0x4bba99 + 8 >> 2];
      var _0x31e5e4 = _0x4e86a5[_0x4bba99 + 12 >> 2];
      var _0x2a4466 = 0;
      for (var _0x4be7e6 = 0; _0x4be7e6 < _0x31e5e4; _0x4be7e6++) {
        _0x2a4466 += _0x4e86a5[_0x51d841 + (_0x4be7e6 * 8 + 4) >> 2];
      }
      var _0x2d3bab = _0x3db8d1.sock_ops.recvmsg(_0x3db8d1, _0x2a4466);
      if (!_0x2d3bab) {
        return 0;
      }
      var _0x16c1f6 = _0x4e86a5[_0x4bba99 >> 2];
      if (_0x16c1f6) {
        var _0x68c696 = _0x4e78dd(_0x16c1f6, _0x3db8d1.family, _0x21dd1f.lookup_name(_0x2d3bab.addr), _0x2d3bab.port);
      }
      var _0x45294a = 0;
      var _0x11d702 = _0x2d3bab.buffer.byteLength;
      for (var _0x4be7e6 = 0; _0x11d702 > 0 && _0x4be7e6 < _0x31e5e4; _0x4be7e6++) {
        var _0x3d7a10 = _0x4e86a5[_0x51d841 + (_0x4be7e6 * 8 + 0) >> 2];
        var _0x176fbc = _0x4e86a5[_0x51d841 + (_0x4be7e6 * 8 + 4) >> 2];
        if (!_0x176fbc) {
          continue;
        }
        var _0x34959c = Math.min(_0x176fbc, _0x11d702);
        var _0x5d2e0b = _0x2d3bab.buffer.subarray(_0x45294a, _0x45294a + _0x34959c);
        _0x950143.set(_0x5d2e0b, _0x3d7a10 + _0x45294a);
        _0x45294a += _0x34959c;
        _0x11d702 -= _0x34959c;
      }
      return _0x45294a;
    } catch (_0xd47362) {
      if (typeof _0x2840b9 === "undefined" || !(_0xd47362 instanceof _0x2840b9.ErrnoError)) {
        _0x48d521(_0xd47362);
      }
      return -_0xd47362.errno;
    }
  }
  function _0x3310fd(_0x25e54a, _0x580f09) {
    try {
      _0x25e54a = _0x24c16a.getStr(_0x25e54a);
      _0x580f09 = _0x24c16a.getStr(_0x580f09);
      _0x2840b9.rename(_0x25e54a, _0x580f09);
      return 0;
    } catch (_0x2dfb4f) {
      if (typeof _0x2840b9 === "undefined" || !(_0x2dfb4f instanceof _0x2840b9.ErrnoError)) {
        _0x48d521(_0x2dfb4f);
      }
      return -_0x2dfb4f.errno;
    }
  }
  function _0x560b83(_0x2b0976) {
    try {
      _0x2b0976 = _0x24c16a.getStr(_0x2b0976);
      _0x2840b9.rmdir(_0x2b0976);
      return 0;
    } catch (_0x1f2337) {
      if (typeof _0x2840b9 === "undefined" || !(_0x1f2337 instanceof _0x2840b9.ErrnoError)) {
        _0x48d521(_0x1f2337);
      }
      return -_0x1f2337.errno;
    }
  }
  function _0x16adfd(_0x1cfb72, _0x429e93, _0x10e901) {
    try {
      var _0xd8e249 = _0x450d90(_0x1cfb72);
      var _0x2343ff = _0x4e86a5[_0x429e93 + 8 >> 2];
      var _0x14de6f = _0x4e86a5[_0x429e93 + 12 >> 2];
      var _0x5e3cdf;
      var _0x1dccaa;
      var _0x257f68 = _0x4e86a5[_0x429e93 >> 2];
      var _0x5edfd3 = _0x4e86a5[_0x429e93 + 4 >> 2];
      if (_0x257f68) {
        var _0x56d251 = _0x43e741(_0x257f68, _0x5edfd3);
        if (_0x56d251.errno) {
          return -_0x56d251.errno;
        }
        _0x1dccaa = _0x56d251.port;
        _0x5e3cdf = _0x21dd1f.lookup_addr(_0x56d251.addr) || _0x56d251.addr;
      }
      var _0x3b4e03 = 0;
      for (var _0x3b7cca = 0; _0x3b7cca < _0x14de6f; _0x3b7cca++) {
        _0x3b4e03 += _0x4e86a5[_0x2343ff + (_0x3b7cca * 8 + 4) >> 2];
      }
      var _0x4ee9f4 = new Uint8Array(_0x3b4e03);
      var _0x456c0f = 0;
      for (var _0x3b7cca = 0; _0x3b7cca < _0x14de6f; _0x3b7cca++) {
        var _0x30aaf4 = _0x4e86a5[_0x2343ff + (_0x3b7cca * 8 + 0) >> 2];
        var _0x53be2a = _0x4e86a5[_0x2343ff + (_0x3b7cca * 8 + 4) >> 2];
        for (var _0x3f6565 = 0; _0x3f6565 < _0x53be2a; _0x3f6565++) {
          _0x4ee9f4[_0x456c0f++] = _0x9c4a59[_0x30aaf4 + _0x3f6565 >> 0];
        }
      }
      return _0xd8e249.sock_ops.sendmsg(_0xd8e249, _0x4ee9f4, 0, _0x3b4e03, _0x5e3cdf, _0x1dccaa);
    } catch (_0x5854d5) {
      if (typeof _0x2840b9 === "undefined" || !(_0x5854d5 instanceof _0x2840b9.ErrnoError)) {
        _0x48d521(_0x5854d5);
      }
      return -_0x5854d5.errno;
    }
  }
  function _0x32b8c4(_0x3b17a1, _0x11befb, _0x358dd0, _0x455dca, _0x5e0334, _0x44df90) {
    try {
      var _0x2b7460 = _0x450d90(_0x3b17a1);
      var _0x1f8f30 = _0xf16090(_0x5e0334, _0x44df90, true);
      if (!_0x1f8f30) {
        return _0x2840b9.write(_0x2b7460.stream, _0x9c4a59, _0x11befb, _0x358dd0);
      } else {
        return _0x2b7460.sock_ops.sendmsg(_0x2b7460, _0x9c4a59, _0x11befb, _0x358dd0, _0x1f8f30.addr, _0x1f8f30.port);
      }
    } catch (_0x5a6a7a) {
      if (typeof _0x2840b9 === "undefined" || !(_0x5a6a7a instanceof _0x2840b9.ErrnoError)) {
        _0x48d521(_0x5a6a7a);
      }
      return -_0x5a6a7a.errno;
    }
  }
  function _0x1a9d6a(_0x4c2226) {
    try {
      return -50;
    } catch (_0x3d35ca) {
      if (typeof _0x2840b9 === "undefined" || !(_0x3d35ca instanceof _0x2840b9.ErrnoError)) {
        _0x48d521(_0x3d35ca);
      }
      return -_0x3d35ca.errno;
    }
  }
  function _0x31263f(_0x4766ab, _0x34b92d) {
    try {
      _0x450d90(_0x4766ab);
      return -52;
    } catch (_0x4e3000) {
      if (typeof _0x2840b9 === "undefined" || !(_0x4e3000 instanceof _0x2840b9.ErrnoError)) {
        _0x48d521(_0x4e3000);
      }
      return -_0x4e3000.errno;
    }
  }
  function _0x1c6153(_0x4ac947, _0x337b52, _0x2dcc00) {
    try {
      var _0x222001 = _0x568dd0.createSocket(_0x4ac947, _0x337b52, _0x2dcc00);
      return _0x222001.stream.fd;
    } catch (_0x3e2782) {
      if (typeof _0x2840b9 === "undefined" || !(_0x3e2782 instanceof _0x2840b9.ErrnoError)) {
        _0x48d521(_0x3e2782);
      }
      return -_0x3e2782.errno;
    }
  }
  function _0x44568c(_0xf1ba19, _0x1436bb) {
    try {
      _0xf1ba19 = _0x24c16a.getStr(_0xf1ba19);
      return _0x24c16a.doStat(_0x2840b9.stat, _0xf1ba19, _0x1436bb);
    } catch (_0x10e686) {
      if (typeof _0x2840b9 === "undefined" || !(_0x10e686 instanceof _0x2840b9.ErrnoError)) {
        _0x48d521(_0x10e686);
      }
      return -_0x10e686.errno;
    }
  }
  function _0x10ff64(_0x2643b5, _0x41d652, _0x1479ee) {
    try {
      _0x2643b5 = _0x24c16a.getStr(_0x2643b5);
      _0x4e86a5[_0x1479ee + 4 >> 2] = 4096;
      _0x4e86a5[_0x1479ee + 40 >> 2] = 4096;
      _0x4e86a5[_0x1479ee + 8 >> 2] = 1000000;
      _0x4e86a5[_0x1479ee + 12 >> 2] = 500000;
      _0x4e86a5[_0x1479ee + 16 >> 2] = 500000;
      _0x4e86a5[_0x1479ee + 20 >> 2] = _0x2840b9.nextInode;
      _0x4e86a5[_0x1479ee + 24 >> 2] = 1000000;
      _0x4e86a5[_0x1479ee + 28 >> 2] = 42;
      _0x4e86a5[_0x1479ee + 44 >> 2] = 2;
      _0x4e86a5[_0x1479ee + 36 >> 2] = 255;
      return 0;
    } catch (_0x34041d) {
      if (typeof _0x2840b9 === "undefined" || !(_0x34041d instanceof _0x2840b9.ErrnoError)) {
        _0x48d521(_0x34041d);
      }
      return -_0x34041d.errno;
    }
  }
  function _0x18c350(_0x2079ec, _0x18cc82, _0x5d6314, _0x566680) {
    try {
      _0x2079ec = _0x24c16a.getStr(_0x2079ec);
      var _0x1133d3 = _0x24c16a.get64(_0x5d6314, _0x566680);
      _0x2840b9.truncate(_0x2079ec, _0x1133d3);
      return 0;
    } catch (_0x52b9fc) {
      if (typeof _0x2840b9 === "undefined" || !(_0x52b9fc instanceof _0x2840b9.ErrnoError)) {
        _0x48d521(_0x52b9fc);
      }
      return -_0x52b9fc.errno;
    }
  }
  function _0x132d29(_0xe751d2) {
    try {
      if (!_0xe751d2) {
        return -21;
      }
      var _0x3715a1 = {
        __size__: 390,
        domainname: 325,
        machine: 260,
        nodename: 65,
        release: 130,
        sysname: 0,
        version: 195
      };
      function _0x231114(_0x53389a, _0x5f50cf) {
        var _0x5c008b = _0x3715a1[_0x53389a];
        _0x312aa6(_0x5f50cf, _0xe751d2 + _0x5c008b);
      }
      _0x231114("sysname", "Emscripten");
      _0x231114("nodename", "emscripten");
      _0x231114("release", "1.0");
      _0x231114("version", "#1");
      _0x231114("machine", "wasm32");
      return 0;
    } catch (_0x5853ce) {
      if (typeof _0x2840b9 === "undefined" || !(_0x5853ce instanceof _0x2840b9.ErrnoError)) {
        _0x48d521(_0x5853ce);
      }
      return -_0x5853ce.errno;
    }
  }
  function _0xb18b95(_0x44bc7b) {
    try {
      _0x44bc7b = _0x24c16a.getStr(_0x44bc7b);
      _0x2840b9.unlink(_0x44bc7b);
      return 0;
    } catch (_0x4371c4) {
      if (typeof _0x2840b9 === "undefined" || !(_0x4371c4 instanceof _0x2840b9.ErrnoError)) {
        _0x48d521(_0x4371c4);
      }
      return -_0x4371c4.errno;
    }
  }
  function _0x230633() {
    _0x48d521();
  }
  function _0x15e946() {
    if (_0x15e946.start === undefined) {
      _0x15e946.start = Date.now();
    }
    return (Date.now() - _0x15e946.start) * 1000 | 0;
  }
  function _0x522697() {
    if (_0x319321) {
      return 1;
    } else if (typeof dateNow !== "undefined") {
      return 1000;
    } else {
      return 1000;
    }
  }
  var _0x2a5127 = true;
  function _0x342f59(_0x5691b0, _0x2a103c) {
    var _0x47dfa3;
    if (_0x5691b0 === 0) {
      _0x47dfa3 = 1000000;
    } else if (_0x5691b0 === 1 && _0x2a5127) {
      _0x47dfa3 = _0x522697();
    } else {
      _0x50999a(28);
      return -1;
    }
    _0x4e86a5[_0x2a103c >> 2] = _0x47dfa3 / 1000000000 | 0;
    _0x4e86a5[_0x2a103c + 4 >> 2] = _0x47dfa3;
    return 0;
  }
  var _0xd45210;
  if (_0x319321) {
    _0xd45210 = function () {
      var _0x4021ec = process.hrtime();
      return _0x4021ec[0] * 1000 + _0x4021ec[1] / 1000000;
    };
  } else if (typeof dateNow !== "undefined") {
    _0xd45210 = dateNow;
  } else {
    _0xd45210 = function () {
      return performance.now();
    };
  }
  function _0x2c8c9a(_0x588d2d, _0x3ea0e4) {
    var _0x233af3;
    if (_0x588d2d === 0) {
      _0x233af3 = Date.now();
    } else if ((_0x588d2d === 1 || _0x588d2d === 4) && _0x2a5127) {
      _0x233af3 = _0xd45210();
    } else {
      _0x50999a(28);
      return -1;
    }
    _0x4e86a5[_0x3ea0e4 >> 2] = _0x233af3 / 1000 | 0;
    _0x4e86a5[_0x3ea0e4 + 4 >> 2] = _0x233af3 % 1000 * 1000 * 1000 | 0;
    return 0;
  }
  function _0x3f4de9(_0x30b5ad, _0x3b064d) {
    return _0x30b5ad - _0x3b064d;
  }
  function _0x3c3643(_0x3b2727) {}
  function _0x373804() {
    return 0;
  }
  function _0x1a1cf7(_0x4b2ae6, _0x149107) {}
  function _0x30354d(_0x38ea3d, _0x2d265c) {
    return 0;
  }
  var _0x4f1567 = [];
  function _0xbe5353(_0x23685b, _0x38ff49) {
    _0x4f1567.length = 0;
    var _0x333bf0;
    _0x38ff49 >>= 2;
    while (_0x333bf0 = _0x950143[_0x23685b++]) {
      var _0x8a6f66 = _0x333bf0 < 105;
      if (_0x8a6f66 && _0x38ff49 & 1) {
        _0x38ff49++;
      }
      _0x4f1567.push(_0x8a6f66 ? _0x492f87[_0x38ff49++ >> 1] : _0x4e86a5[_0x38ff49]);
      ++_0x38ff49;
    }
    return _0x4f1567;
  }
  function _0x338ca5(_0x2d73f4, _0x3218be, _0x56e055, _0x5736d7) {
    var _0x396759 = _0xbe5353(_0x3218be, _0x56e055);
    return _0x59f8c2[_0x2d73f4].apply(null, _0x396759);
  }
  function _0x597f8b(_0x5cf5cf, _0x1435ac, _0x515686) {
    return _0x338ca5(_0x5cf5cf, _0x1435ac, _0x515686, 1);
  }
  function _0x3e7a9d(_0x52f04d, _0x4e1801) {
    _0x24096f.mainLoop.timingMode = _0x52f04d;
    _0x24096f.mainLoop.timingValue = _0x4e1801;
    if (!_0x24096f.mainLoop.func) {
      return 1;
    }
    if (!_0x24096f.mainLoop.running) {
      _0x24096f.mainLoop.running = true;
    }
    if (_0x52f04d == 0) {
      _0x24096f.mainLoop.scheduler = function _0x121678() {
        var _0x3187de = Math.max(0, _0x24096f.mainLoop.tickStartTime + _0x4e1801 - _0xd45210()) | 0;
        setTimeout(_0x24096f.mainLoop.runner, _0x3187de);
      };
      _0x24096f.mainLoop.method = "timeout";
    } else if (_0x52f04d == 1) {
      _0x24096f.mainLoop.scheduler = function _0x28b928() {
        _0x24096f.requestAnimationFrame(_0x24096f.mainLoop.runner);
      };
      _0x24096f.mainLoop.method = "rAF";
    } else if (_0x52f04d == 2) {
      if (typeof setImmediate === "undefined") {
        var _0x1ce21f = [];
        var _0x5afbb8 = "setimmediate";
        function _0x4a0ec7(_0x3d8bbe) {
          if (_0x3d8bbe.data === _0x5afbb8 || _0x3d8bbe.data.target === _0x5afbb8) {
            _0x3d8bbe.stopPropagation();
            _0x1ce21f.shift()();
          }
        }
        addEventListener("message", _0x4a0ec7, true);
        setImmediate = function _0x20a1ce(_0x39ee34) {
          _0x1ce21f.push(_0x39ee34);
          if (_0x4d7134) {
            if (_0x289557.setImmediates === undefined) {
              _0x289557.setImmediates = [];
            }
            _0x289557.setImmediates.push(_0x39ee34);
            postMessage({
              target: _0x5afbb8
            });
          } else {
            postMessage(_0x5afbb8, "*");
          }
        };
      }
      _0x24096f.mainLoop.scheduler = function _0x232f7d() {
        setImmediate(_0x24096f.mainLoop.runner);
      };
      _0x24096f.mainLoop.method = "immediate";
    }
    return 0;
  }
  function _0x34c506(_0x16659b) {
    _0x1f3ef4(_0x16659b);
  }
  function _0x50db9f() {
    if (!_0x3cfbe7()) {
      try {
        _0x34c506(_0x3717d8);
      } catch (_0x44bb0c) {
        if (_0x44bb0c instanceof _0x3875ad) {
          return;
        }
        throw _0x44bb0c;
      }
    }
  }
  function _0x4fb6ab(_0xaff3d8, _0x2dbdb9, _0x436b08, _0x14203d, _0x573f35) {
    _0x4eb180(!_0x24096f.mainLoop.func, "emscripten_set_main_loop: there can only be one main loop function at once: call emscripten_cancel_main_loop to cancel the previous one before setting a new one with different parameters.");
    _0x24096f.mainLoop.func = _0xaff3d8;
    _0x24096f.mainLoop.arg = _0x14203d;
    var _0x3e7919 = _0x24096f.mainLoop.currentlyRunningMainloop;
    function _0x47bacd() {
      if (_0x3e7919 < _0x24096f.mainLoop.currentlyRunningMainloop) {
        _0x50db9f();
        return false;
      }
      return true;
    }
    _0x24096f.mainLoop.running = false;
    _0x24096f.mainLoop.runner = function _0x30b3d6() {
      if (_0x16d0c6) {
        return;
      }
      if (_0x24096f.mainLoop.queue.length > 0) {
        var _0x14f29f = Date.now();
        var _0x17d689 = _0x24096f.mainLoop.queue.shift();
        _0x17d689.func(_0x17d689.arg);
        if (_0x24096f.mainLoop.remainingBlockers) {
          var _0x2d7d75 = _0x24096f.mainLoop.remainingBlockers;
          var _0x144782 = _0x2d7d75 % 1 == 0 ? _0x2d7d75 - 1 : Math.floor(_0x2d7d75);
          if (_0x17d689.counted) {
            _0x24096f.mainLoop.remainingBlockers = _0x144782;
          } else {
            _0x144782 = _0x144782 + 0.5;
            _0x24096f.mainLoop.remainingBlockers = (_0x2d7d75 * 8 + _0x144782) / 9;
          }
        }
        console.log("main loop blocker \"" + _0x17d689.name + "\" took " + (Date.now() - _0x14f29f) + " ms");
        _0x24096f.mainLoop.updateStatus();
        if (!_0x47bacd()) {
          return;
        }
        setTimeout(_0x24096f.mainLoop.runner, 0);
        return;
      }
      if (!_0x47bacd()) {
        return;
      }
      _0x24096f.mainLoop.currentFrameNumber = _0x24096f.mainLoop.currentFrameNumber + 1 | 0;
      if (_0x24096f.mainLoop.timingMode == 1 && _0x24096f.mainLoop.timingValue > 1 && _0x24096f.mainLoop.currentFrameNumber % _0x24096f.mainLoop.timingValue != 0) {
        _0x24096f.mainLoop.scheduler();
        return;
      } else if (_0x24096f.mainLoop.timingMode == 0) {
        _0x24096f.mainLoop.tickStartTime = _0xd45210();
      }
      _0x58939e.newRenderingFrameStarted();
      _0x24096f.mainLoop.runIter(_0xaff3d8);
      if (!_0x47bacd()) {
        return;
      }
      if (typeof SDL === "object" && SDL.audio && SDL.audio.queueNewAudioData) {
        SDL.audio.queueNewAudioData();
      }
      _0x24096f.mainLoop.scheduler();
    };
    if (!_0x573f35) {
      if (_0x2dbdb9 && _0x2dbdb9 > 0) {
        _0x3e7a9d(0, 1000 / _0x2dbdb9);
      } else {
        _0x3e7a9d(1, 1);
      }
      _0x24096f.mainLoop.scheduler();
    }
    if (_0x436b08) {
      throw "unwind";
    }
  }
  function _0x3671df(_0x5c9420, _0x8c4745) {
    if (_0x16d0c6) {
      return;
    }
    if (_0x8c4745) {
      _0x5c9420();
      return;
    }
    try {
      _0x5c9420();
    } catch (_0x4ed5b5) {
      if (_0x4ed5b5 instanceof _0x3875ad) {
        return;
      } else if (_0x4ed5b5 !== "unwind") {
        if (_0x4ed5b5 && typeof _0x4ed5b5 === "object" && _0x4ed5b5.stack) {
          _0x1650b6("exception thrown: " + [_0x4ed5b5, _0x4ed5b5.stack]);
        }
        throw _0x4ed5b5;
      }
    }
  }
  var _0x24096f = {
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
        _0x24096f.mainLoop.scheduler = null;
        _0x24096f.mainLoop.currentlyRunningMainloop++;
      },
      resume: function () {
        _0x24096f.mainLoop.currentlyRunningMainloop++;
        var _0x3dd9fd = _0x24096f.mainLoop.timingMode;
        var _0x5909b8 = _0x24096f.mainLoop.timingValue;
        var _0x2924f3 = _0x24096f.mainLoop.func;
        _0x24096f.mainLoop.func = null;
        _0x4fb6ab(_0x2924f3, 0, false, _0x24096f.mainLoop.arg, true);
        _0x3e7a9d(_0x3dd9fd, _0x5909b8);
        _0x24096f.mainLoop.scheduler();
      },
      updateStatus: function () {
        if (_0x289557.setStatus) {
          var _0x362d1c = _0x289557.statusMessage || "Please wait...";
          var _0x28b040 = _0x24096f.mainLoop.remainingBlockers;
          var _0x43c850 = _0x24096f.mainLoop.expectedBlockers;
          if (_0x28b040) {
            if (_0x28b040 < _0x43c850) {
              _0x289557.setStatus(_0x362d1c + " (" + (_0x43c850 - _0x28b040) + "/" + _0x43c850 + ")");
            } else {
              _0x289557.setStatus(_0x362d1c);
            }
          } else {
            _0x289557.setStatus("");
          }
        }
      },
      runIter: function (_0x1c2bb8) {
        if (_0x16d0c6) {
          return;
        }
        if (_0x289557.preMainLoop) {
          var _0x365531 = _0x289557.preMainLoop();
          if (_0x365531 === false) {
            return;
          }
        }
        _0x3671df(_0x1c2bb8);
        if (_0x289557.postMainLoop) {
          _0x289557.postMainLoop();
        }
      }
    },
    isFullscreen: false,
    pointerLock: false,
    moduleContextCreatedCallbacks: [],
    workers: [],
    init: function () {
      if (!_0x289557.preloadPlugins) {
        _0x289557.preloadPlugins = [];
      }
      if (_0x24096f.initted) {
        return;
      }
      _0x24096f.initted = true;
      try {
        new Blob();
        _0x24096f.hasBlobConstructor = true;
      } catch (_0x52b8a5) {
        _0x24096f.hasBlobConstructor = false;
        console.log("warning: no blob constructor, cannot create blobs with mimetypes");
      }
      _0x24096f.BlobBuilder = typeof MozBlobBuilder != "undefined" ? MozBlobBuilder : typeof WebKitBlobBuilder != "undefined" ? WebKitBlobBuilder : !_0x24096f.hasBlobConstructor ? console.log("warning: no BlobBuilder") : null;
      _0x24096f.URLObject = typeof window != "undefined" ? window.URL ? window.URL : window.webkitURL : undefined;
      if (!_0x289557.noImageDecoding && typeof _0x24096f.URLObject === "undefined") {
        console.log("warning: Browser does not support creating object URLs. Built-in browser image decoding will not be available.");
        _0x289557.noImageDecoding = true;
      }
      var _0x11aa28 = {};
      _0x11aa28.canHandle = function _0x200664(_0x1e6942) {
        return !_0x289557.noImageDecoding && /\.(jpg|jpeg|png|bmp)$/i.test(_0x1e6942);
      };
      _0x11aa28.handle = function _0x340b10(_0x411e1d, _0x29a7a6, _0x389a5a, _0x5136f9) {
        var _0x39909f = null;
        if (_0x24096f.hasBlobConstructor) {
          try {
            _0x39909f = new Blob([_0x411e1d], {
              type: _0x24096f.getMimetype(_0x29a7a6)
            });
            if (_0x39909f.size !== _0x411e1d.length) {
              _0x39909f = new Blob([new Uint8Array(_0x411e1d).buffer], {
                type: _0x24096f.getMimetype(_0x29a7a6)
              });
            }
          } catch (_0x13def1) {
            _0x22e41e("Blob constructor present but fails: " + _0x13def1 + "; falling back to blob builder");
          }
        }
        if (!_0x39909f) {
          var _0x3e4025 = new _0x24096f.BlobBuilder();
          _0x3e4025.append(new Uint8Array(_0x411e1d).buffer);
          _0x39909f = _0x3e4025.getBlob();
        }
        var _0x72a7cc = _0x24096f.URLObject.createObjectURL(_0x39909f);
        var _0x483eee = new Image();
        _0x483eee.onload = function _0x29a56e() {
          _0x4eb180(_0x483eee.complete, "Image " + _0x29a7a6 + " could not be decoded");
          var _0x172702 = document.createElement("canvas");
          _0x172702.width = _0x483eee.width;
          _0x172702.height = _0x483eee.height;
          var _0x1df4ee = _0x172702.getContext("2d");
          _0x1df4ee.drawImage(_0x483eee, 0, 0);
          _0x289557.preloadedImages[_0x29a7a6] = _0x172702;
          _0x24096f.URLObject.revokeObjectURL(_0x72a7cc);
          if (_0x389a5a) {
            _0x389a5a(_0x411e1d);
          }
        };
        _0x483eee.onerror = function _0x4e79bb(_0x222db4) {
          console.log("Image " + _0x72a7cc + " could not be decoded");
          if (_0x5136f9) {
            _0x5136f9();
          }
        };
        _0x483eee.src = _0x72a7cc;
      };
      _0x289557.preloadPlugins.push(_0x11aa28);
      var _0x356990 = {};
      _0x356990.canHandle = function _0x4a8d53(_0x500ed1) {
        return !_0x289557.noAudioDecoding && _0x500ed1.substr(-4) in {
          ".ogg": 1,
          ".wav": 1,
          ".mp3": 1
        };
      };
      _0x356990.handle = function _0x312525(_0x4b9f03, _0x1c9a73, _0xd30cf9, _0x44ece5) {
        var _0x2540f2 = false;
        function _0x3dd0ea(_0x29acc1) {
          if (_0x2540f2) {
            return;
          }
          _0x2540f2 = true;
          _0x289557.preloadedAudios[_0x1c9a73] = _0x29acc1;
          if (_0xd30cf9) {
            _0xd30cf9(_0x4b9f03);
          }
        }
        function _0x475eaa() {
          if (_0x2540f2) {
            return;
          }
          _0x2540f2 = true;
          _0x289557.preloadedAudios[_0x1c9a73] = new Audio();
          if (_0x44ece5) {
            _0x44ece5();
          }
        }
        if (_0x24096f.hasBlobConstructor) {
          try {
            var _0x3ba59c = new Blob([_0x4b9f03], {
              type: _0x24096f.getMimetype(_0x1c9a73)
            });
          } catch (_0xbe0edd) {
            return _0x475eaa();
          }
          var _0x1b6c4c = _0x24096f.URLObject.createObjectURL(_0x3ba59c);
          var _0x55e7a9 = new Audio();
          _0x55e7a9.addEventListener("canplaythrough", function () {
            _0x3dd0ea(_0x55e7a9);
          }, false);
          _0x55e7a9.onerror = function _0x3b0c05(_0x42c185) {
            if (_0x2540f2) {
              return;
            }
            console.log("warning: browser could not fully decode audio " + _0x1c9a73 + ", trying slower base64 approach");
            function _0x1ea831(_0x247d45) {
              var _0x377bfa = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/";
              var _0x19af47 = "=";
              var _0x1ac020 = "";
              var _0x5d2b57 = 0;
              var _0x2159a7 = 0;
              for (var _0x3dc7f6 = 0; _0x3dc7f6 < _0x247d45.length; _0x3dc7f6++) {
                _0x5d2b57 = _0x5d2b57 << 8 | _0x247d45[_0x3dc7f6];
                _0x2159a7 += 8;
                while (_0x2159a7 >= 6) {
                  var _0x7c1298 = _0x5d2b57 >> _0x2159a7 - 6 & 63;
                  _0x2159a7 -= 6;
                  _0x1ac020 += _0x377bfa[_0x7c1298];
                }
              }
              if (_0x2159a7 == 2) {
                _0x1ac020 += _0x377bfa[(_0x5d2b57 & 3) << 4];
                _0x1ac020 += _0x19af47 + _0x19af47;
              } else if (_0x2159a7 == 4) {
                _0x1ac020 += _0x377bfa[(_0x5d2b57 & 15) << 2];
                _0x1ac020 += _0x19af47;
              }
              return _0x1ac020;
            }
            _0x55e7a9.src = "data:audio/x-" + _0x1c9a73.substr(-3) + ";base64," + _0x1ea831(_0x4b9f03);
            _0x3dd0ea(_0x55e7a9);
          };
          _0x55e7a9.src = _0x1b6c4c;
          _0x24096f.safeSetTimeout(function () {
            _0x3dd0ea(_0x55e7a9);
          }, 10000);
        } else {
          return _0x475eaa();
        }
      };
      _0x289557.preloadPlugins.push(_0x356990);
      function _0x4c3d16() {
        _0x24096f.pointerLock = document.pointerLockElement === _0x289557.canvas || document.mozPointerLockElement === _0x289557.canvas || document.webkitPointerLockElement === _0x289557.canvas || document.msPointerLockElement === _0x289557.canvas;
      }
      var _0x38532a = _0x289557.canvas;
      if (_0x38532a) {
        _0x38532a.requestPointerLock = _0x38532a.requestPointerLock || _0x38532a.mozRequestPointerLock || _0x38532a.webkitRequestPointerLock || _0x38532a.msRequestPointerLock || function () {};
        _0x38532a.exitPointerLock = document.exitPointerLock || document.mozExitPointerLock || document.webkitExitPointerLock || document.msExitPointerLock || function () {};
        _0x38532a.exitPointerLock = _0x38532a.exitPointerLock.bind(document);
        document.addEventListener("pointerlockchange", _0x4c3d16, false);
        document.addEventListener("mozpointerlockchange", _0x4c3d16, false);
        document.addEventListener("webkitpointerlockchange", _0x4c3d16, false);
        document.addEventListener("mspointerlockchange", _0x4c3d16, false);
        if (_0x289557.elementPointerLock) {
          _0x38532a.addEventListener("click", function (_0x5596e5) {
            if (!_0x24096f.pointerLock && _0x289557.canvas.requestPointerLock) {
              _0x289557.canvas.requestPointerLock();
              _0x5596e5.preventDefault();
            }
          }, false);
        }
      }
    },
    createContext: function (_0x499366, _0x30ae0e, _0x59f309, _0x1f9c36) {
      if (_0x30ae0e && _0x289557.ctx && _0x499366 == _0x289557.canvas) {
        return _0x289557.ctx;
      }
      var _0x1b01d6;
      var _0x7d529a;
      if (_0x30ae0e) {
        var _0x19d063 = {
          antialias: false,
          alpha: false,
          majorVersion: typeof WebGL2RenderingContext !== "undefined" ? 2 : 1
        };
        if (_0x1f9c36) {
          for (var _0x5867cc in _0x1f9c36) {
            _0x19d063[_0x5867cc] = _0x1f9c36[_0x5867cc];
          }
        }
        if (typeof _0x58939e !== "undefined") {
          _0x7d529a = _0x58939e.createContext(_0x499366, _0x19d063);
          if (_0x7d529a) {
            _0x1b01d6 = _0x58939e.getContext(_0x7d529a).GLctx;
          }
        }
      } else {
        _0x1b01d6 = _0x499366.getContext("2d");
      }
      if (!_0x1b01d6) {
        return null;
      }
      if (_0x59f309) {
        if (!_0x30ae0e) {
          _0x4eb180(typeof _0x149f8b === "undefined", "cannot set in module if GLctx is used, but we are a non-GL context that would replace it");
        }
        _0x289557.ctx = _0x1b01d6;
        if (_0x30ae0e) {
          _0x58939e.makeContextCurrent(_0x7d529a);
        }
        _0x289557.useWebGL = _0x30ae0e;
        _0x24096f.moduleContextCreatedCallbacks.forEach(function (_0x34e300) {
          _0x34e300();
        });
        _0x24096f.init();
      }
      return _0x1b01d6;
    },
    destroyContext: function (_0x30f458, _0x432074, _0x12dd29) {},
    fullscreenHandlersInstalled: false,
    lockPointer: undefined,
    resizeCanvas: undefined,
    requestFullscreen: function (_0x36a640, _0x50dad7) {
      _0x24096f.lockPointer = _0x36a640;
      _0x24096f.resizeCanvas = _0x50dad7;
      if (typeof _0x24096f.lockPointer === "undefined") {
        _0x24096f.lockPointer = true;
      }
      if (typeof _0x24096f.resizeCanvas === "undefined") {
        _0x24096f.resizeCanvas = false;
      }
      var _0x139a79 = _0x289557.canvas;
      function _0x31d038() {
        _0x24096f.isFullscreen = false;
        var _0x20bffd = _0x139a79.parentNode;
        if ((document.fullscreenElement || document.mozFullScreenElement || document.msFullscreenElement || document.webkitFullscreenElement || document.webkitCurrentFullScreenElement) === _0x20bffd) {
          _0x139a79.exitFullscreen = _0x24096f.exitFullscreen;
          if (_0x24096f.lockPointer) {
            _0x139a79.requestPointerLock();
          }
          _0x24096f.isFullscreen = true;
          if (_0x24096f.resizeCanvas) {
            _0x24096f.setFullscreenCanvasSize();
          } else {
            _0x24096f.updateCanvasDimensions(_0x139a79);
          }
        } else {
          _0x20bffd.parentNode.insertBefore(_0x139a79, _0x20bffd);
          _0x20bffd.parentNode.removeChild(_0x20bffd);
          if (_0x24096f.resizeCanvas) {
            _0x24096f.setWindowedCanvasSize();
          } else {
            _0x24096f.updateCanvasDimensions(_0x139a79);
          }
        }
        if (_0x289557.onFullScreen) {
          _0x289557.onFullScreen(_0x24096f.isFullscreen);
        }
        if (_0x289557.onFullscreen) {
          _0x289557.onFullscreen(_0x24096f.isFullscreen);
        }
      }
      if (!_0x24096f.fullscreenHandlersInstalled) {
        _0x24096f.fullscreenHandlersInstalled = true;
        document.addEventListener("fullscreenchange", _0x31d038, false);
        document.addEventListener("mozfullscreenchange", _0x31d038, false);
        document.addEventListener("webkitfullscreenchange", _0x31d038, false);
        document.addEventListener("MSFullscreenChange", _0x31d038, false);
      }
      var _0x484db4 = document.createElement("div");
      _0x139a79.parentNode.insertBefore(_0x484db4, _0x139a79);
      _0x484db4.appendChild(_0x139a79);
      _0x484db4.requestFullscreen = _0x484db4.requestFullscreen || _0x484db4.mozRequestFullScreen || _0x484db4.msRequestFullscreen || (_0x484db4.webkitRequestFullscreen ? function () {
        _0x484db4.webkitRequestFullscreen(Element.ALLOW_KEYBOARD_INPUT);
      } : null) || (_0x484db4.webkitRequestFullScreen ? function () {
        _0x484db4.webkitRequestFullScreen(Element.ALLOW_KEYBOARD_INPUT);
      } : null);
      _0x484db4.requestFullscreen();
    },
    exitFullscreen: function () {
      if (!_0x24096f.isFullscreen) {
        return false;
      }
      var _0x2f8b17 = document.exitFullscreen || document.cancelFullScreen || document.mozCancelFullScreen || document.msExitFullscreen || document.webkitCancelFullScreen || function () {};
      _0x2f8b17.apply(document, []);
      return true;
    },
    nextRAF: 0,
    fakeRequestAnimationFrame: function (_0x4aa95b) {
      var _0x4d7354 = Date.now();
      if (_0x24096f.nextRAF === 0) {
        _0x24096f.nextRAF = _0x4d7354 + 1000 / 60;
      } else {
        while (_0x4d7354 + 2 >= _0x24096f.nextRAF) {
          _0x24096f.nextRAF += 1000 / 60;
        }
      }
      var _0xdc4067 = Math.max(_0x24096f.nextRAF - _0x4d7354, 0);
      setTimeout(_0x4aa95b, _0xdc4067);
    },
    requestAnimationFrame: function (_0x43772d) {
      if (typeof requestAnimationFrame === "function") {
        requestAnimationFrame(_0x43772d);
        return;
      }
      var _0x355515 = _0x24096f.fakeRequestAnimationFrame;
      _0x355515(_0x43772d);
    },
    safeRequestAnimationFrame: function (_0x4e083b) {
      return _0x24096f.requestAnimationFrame(function () {
        _0x3671df(_0x4e083b);
      });
    },
    safeSetTimeout: function (_0x496470, _0x2de788) {
      return setTimeout(function () {
        _0x3671df(_0x496470);
      }, _0x2de788);
    },
    getMimetype: function (_0x2e8a8b) {
      return {
        jpg: "image/jpeg",
        jpeg: "image/jpeg",
        png: "image/png",
        bmp: "image/bmp",
        ogg: "audio/ogg",
        wav: "audio/wav",
        mp3: "audio/mpeg"
      }[_0x2e8a8b.substr(_0x2e8a8b.lastIndexOf(".") + 1)];
    },
    getUserMedia: function (_0x512a68) {
      if (!window.getUserMedia) {
        window.getUserMedia = navigator.getUserMedia || navigator.mozGetUserMedia;
      }
      window.getUserMedia(_0x512a68);
    },
    getMovementX: function (_0x4486bc) {
      return _0x4486bc.movementX || _0x4486bc.mozMovementX || _0x4486bc.webkitMovementX || 0;
    },
    getMovementY: function (_0x2a34f1) {
      return _0x2a34f1.movementY || _0x2a34f1.mozMovementY || _0x2a34f1.webkitMovementY || 0;
    },
    getMouseWheelDelta: function (_0x2eae8d) {
      var _0x77ba9f = 0;
      switch (_0x2eae8d.type) {
        case "DOMMouseScroll":
          _0x77ba9f = _0x2eae8d.detail / 3;
          break;
        case "mousewheel":
          _0x77ba9f = _0x2eae8d.wheelDelta / 120;
          break;
        case "wheel":
          _0x77ba9f = _0x2eae8d.deltaY;
          switch (_0x2eae8d.deltaMode) {
            case 0:
              _0x77ba9f /= 100;
              break;
            case 1:
              _0x77ba9f /= 3;
              break;
            case 2:
              _0x77ba9f *= 80;
              break;
            default:
              throw "unrecognized mouse wheel delta mode: " + _0x2eae8d.deltaMode;
          }
          break;
        default:
          throw "unrecognized mouse wheel event: " + _0x2eae8d.type;
      }
      return _0x77ba9f;
    },
    mouseX: 0,
    mouseY: 0,
    mouseMovementX: 0,
    mouseMovementY: 0,
    touches: {},
    lastTouches: {},
    calculateMouseEvent: function (_0x4f4323) {
      if (_0x24096f.pointerLock) {
        if (_0x4f4323.type != "mousemove" && "mozMovementX" in _0x4f4323) {
          _0x24096f.mouseMovementX = _0x24096f.mouseMovementY = 0;
        } else {
          _0x24096f.mouseMovementX = _0x24096f.getMovementX(_0x4f4323);
          _0x24096f.mouseMovementY = _0x24096f.getMovementY(_0x4f4323);
        }
        if (typeof SDL != "undefined") {
          _0x24096f.mouseX = SDL.mouseX + _0x24096f.mouseMovementX;
          _0x24096f.mouseY = SDL.mouseY + _0x24096f.mouseMovementY;
        } else {
          _0x24096f.mouseX += _0x24096f.mouseMovementX;
          _0x24096f.mouseY += _0x24096f.mouseMovementY;
        }
      } else {
        var _0x5737a7 = _0x289557.canvas.getBoundingClientRect();
        var _0xb9af0a = _0x289557.canvas.width;
        var _0x167178 = _0x289557.canvas.height;
        var _0x129487 = typeof window.scrollX !== "undefined" ? window.scrollX : window.pageXOffset;
        var _0x408684 = typeof window.scrollY !== "undefined" ? window.scrollY : window.pageYOffset;
        if (_0x4f4323.type === "touchstart" || _0x4f4323.type === "touchend" || _0x4f4323.type === "touchmove") {
          var _0x433425 = _0x4f4323.touch;
          if (_0x433425 === undefined) {
            return;
          }
          var _0x30b6e0 = _0x433425.pageX - (_0x129487 + _0x5737a7.left);
          var _0x4be051 = _0x433425.pageY - (_0x408684 + _0x5737a7.top);
          _0x30b6e0 = _0x30b6e0 * (_0xb9af0a / _0x5737a7.width);
          _0x4be051 = _0x4be051 * (_0x167178 / _0x5737a7.height);
          var _0x5c38ec = {
            x: _0x30b6e0,
            y: _0x4be051
          };
          if (_0x4f4323.type === "touchstart") {
            _0x24096f.lastTouches[_0x433425.identifier] = _0x5c38ec;
            _0x24096f.touches[_0x433425.identifier] = _0x5c38ec;
          } else if (_0x4f4323.type === "touchend" || _0x4f4323.type === "touchmove") {
            var _0x49136f = _0x24096f.touches[_0x433425.identifier];
            if (!_0x49136f) {
              _0x49136f = _0x5c38ec;
            }
            _0x24096f.lastTouches[_0x433425.identifier] = _0x49136f;
            _0x24096f.touches[_0x433425.identifier] = _0x5c38ec;
          }
          return;
        }
        var _0x41fe6a = _0x4f4323.pageX - (_0x129487 + _0x5737a7.left);
        var _0x42ea8c = _0x4f4323.pageY - (_0x408684 + _0x5737a7.top);
        _0x41fe6a = _0x41fe6a * (_0xb9af0a / _0x5737a7.width);
        _0x42ea8c = _0x42ea8c * (_0x167178 / _0x5737a7.height);
        _0x24096f.mouseMovementX = _0x41fe6a - _0x24096f.mouseX;
        _0x24096f.mouseMovementY = _0x42ea8c - _0x24096f.mouseY;
        _0x24096f.mouseX = _0x41fe6a;
        _0x24096f.mouseY = _0x42ea8c;
      }
    },
    asyncLoad: function (_0x306794, _0x4fa8d3, _0x20ec96, _0x3f39bd) {
      var _0x12652f = !_0x3f39bd ? _0x2c484c("al " + _0x306794) : "";
      _0x1540b2(_0x306794, function (_0x90686f) {
        _0x4eb180(_0x90686f, "Loading data file \"" + _0x306794 + "\" failed (no arrayBuffer).");
        _0x4fa8d3(new Uint8Array(_0x90686f));
        if (_0x12652f) {
          _0x50369d(_0x12652f);
        }
      }, function (_0x30eeab) {
        if (_0x20ec96) {
          _0x20ec96();
        } else {
          throw "Loading data file \"" + _0x306794 + "\" failed.";
        }
      });
      if (_0x12652f) {
        _0x349a66(_0x12652f);
      }
    },
    resizeListeners: [],
    updateResizeListeners: function () {
      var _0x54c8cc = _0x289557.canvas;
      _0x24096f.resizeListeners.forEach(function (_0x377157) {
        _0x377157(_0x54c8cc.width, _0x54c8cc.height);
      });
    },
    setCanvasSize: function (_0x2ac3fc, _0x277a1b, _0x815935) {
      var _0x15238a = _0x289557.canvas;
      _0x24096f.updateCanvasDimensions(_0x15238a, _0x2ac3fc, _0x277a1b);
      if (!_0x815935) {
        _0x24096f.updateResizeListeners();
      }
    },
    windowedWidth: 0,
    windowedHeight: 0,
    setFullscreenCanvasSize: function () {
      if (typeof SDL != "undefined") {
        var _0x101331 = _0x4cad96[SDL.screen >> 2];
        _0x101331 = _0x101331 | 8388608;
        _0x4e86a5[SDL.screen >> 2] = _0x101331;
      }
      _0x24096f.updateCanvasDimensions(_0x289557.canvas);
      _0x24096f.updateResizeListeners();
    },
    setWindowedCanvasSize: function () {
      if (typeof SDL != "undefined") {
        var _0x477731 = _0x4cad96[SDL.screen >> 2];
        _0x477731 = _0x477731 & ~8388608;
        _0x4e86a5[SDL.screen >> 2] = _0x477731;
      }
      _0x24096f.updateCanvasDimensions(_0x289557.canvas);
      _0x24096f.updateResizeListeners();
    },
    updateCanvasDimensions: function (_0x1ed9a8, _0x315449, _0x4d1e7a) {
      if (_0x315449 && _0x4d1e7a) {
        _0x1ed9a8.widthNative = _0x315449;
        _0x1ed9a8.heightNative = _0x4d1e7a;
      } else {
        _0x315449 = _0x1ed9a8.widthNative;
        _0x4d1e7a = _0x1ed9a8.heightNative;
      }
      var _0x287e3f = _0x315449;
      var _0xc04ceb = _0x4d1e7a;
      if (_0x289557.forcedAspectRatio && _0x289557.forcedAspectRatio > 0) {
        if (_0x287e3f / _0xc04ceb < _0x289557.forcedAspectRatio) {
          _0x287e3f = Math.round(_0xc04ceb * _0x289557.forcedAspectRatio);
        } else {
          _0xc04ceb = Math.round(_0x287e3f / _0x289557.forcedAspectRatio);
        }
      }
      if ((document.fullscreenElement || document.mozFullScreenElement || document.msFullscreenElement || document.webkitFullscreenElement || document.webkitCurrentFullScreenElement) === _0x1ed9a8.parentNode && typeof screen != "undefined") {
        var _0xbd256c = Math.min(screen.width / _0x287e3f, screen.height / _0xc04ceb);
        _0x287e3f = Math.round(_0x287e3f * _0xbd256c);
        _0xc04ceb = Math.round(_0xc04ceb * _0xbd256c);
      }
      if (_0x24096f.resizeCanvas) {
        if (_0x1ed9a8.width != _0x287e3f) {
          _0x1ed9a8.width = _0x287e3f;
        }
        if (_0x1ed9a8.height != _0xc04ceb) {
          _0x1ed9a8.height = _0xc04ceb;
        }
        if (typeof _0x1ed9a8.style != "undefined") {
          _0x1ed9a8.style.removeProperty("width");
          _0x1ed9a8.style.removeProperty("height");
        }
      } else {
        if (_0x1ed9a8.width != _0x315449) {
          _0x1ed9a8.width = _0x315449;
        }
        if (_0x1ed9a8.height != _0x4d1e7a) {
          _0x1ed9a8.height = _0x4d1e7a;
        }
        if (typeof _0x1ed9a8.style != "undefined") {
          if (_0x287e3f != _0x315449 || _0xc04ceb != _0x4d1e7a) {
            _0x1ed9a8.style.setProperty("width", _0x287e3f + "px", "important");
            _0x1ed9a8.style.setProperty("height", _0xc04ceb + "px", "important");
          } else {
            _0x1ed9a8.style.removeProperty("width");
            _0x1ed9a8.style.removeProperty("height");
          }
        }
      }
    },
    wgetRequests: {},
    nextWgetRequestHandle: 0,
    getNextWgetRequestHandle: function () {
      var _0x2e4b7b = _0x24096f.nextWgetRequestHandle;
      _0x24096f.nextWgetRequestHandle++;
      return _0x2e4b7b;
    }
  };
  function _0x28ff26() {
    _0x24096f.mainLoop.pause();
    _0x24096f.mainLoop.func = null;
  }
  function _0x4490c5(_0x35d473) {
    clearInterval(_0x35d473);
  }
  var _0x35ce8f = {
    inEventHandler: 0,
    removeAllEventListeners: function () {
      for (var _0x17a907 = _0x35ce8f.eventHandlers.length - 1; _0x17a907 >= 0; --_0x17a907) {
        _0x35ce8f._removeHandler(_0x17a907);
      }
      _0x35ce8f.eventHandlers = [];
      _0x35ce8f.deferredCalls = [];
    },
    registerRemoveEventListeners: function () {
      if (!_0x35ce8f.removeEventListenersRegistered) {
        _0x14c850.push(_0x35ce8f.removeAllEventListeners);
        _0x35ce8f.removeEventListenersRegistered = true;
      }
    },
    deferredCalls: [],
    deferCall: function (_0x8d0dd2, _0x30f52a, _0x3b865c) {
      function _0x4a4ae1(_0x25f32d, _0x6661dd) {
        if (_0x25f32d.length != _0x6661dd.length) {
          return false;
        }
        for (var _0x5f5cff in _0x25f32d) {
          if (_0x25f32d[_0x5f5cff] != _0x6661dd[_0x5f5cff]) {
            return false;
          }
        }
        return true;
      }
      for (var _0x263199 in _0x35ce8f.deferredCalls) {
        var _0x3f4fa9 = _0x35ce8f.deferredCalls[_0x263199];
        if (_0x3f4fa9.targetFunction == _0x8d0dd2 && _0x4a4ae1(_0x3f4fa9.argsList, _0x3b865c)) {
          return;
        }
      }
      _0x35ce8f.deferredCalls.push({
        targetFunction: _0x8d0dd2,
        precedence: _0x30f52a,
        argsList: _0x3b865c
      });
      _0x35ce8f.deferredCalls.sort(function (_0x34bdcf, _0x374eeb) {
        return _0x34bdcf.precedence < _0x374eeb.precedence;
      });
    },
    removeDeferredCalls: function (_0xf75b39) {
      for (var _0x552ce7 = 0; _0x552ce7 < _0x35ce8f.deferredCalls.length; ++_0x552ce7) {
        if (_0x35ce8f.deferredCalls[_0x552ce7].targetFunction == _0xf75b39) {
          _0x35ce8f.deferredCalls.splice(_0x552ce7, 1);
          --_0x552ce7;
        }
      }
    },
    canPerformEventHandlerRequests: function () {
      return _0x35ce8f.inEventHandler && _0x35ce8f.currentEventHandler.allowsDeferredCalls;
    },
    runDeferredCalls: function () {
      if (!_0x35ce8f.canPerformEventHandlerRequests()) {
        return;
      }
      for (var _0x362142 = 0; _0x362142 < _0x35ce8f.deferredCalls.length; ++_0x362142) {
        var _0x3e83fd = _0x35ce8f.deferredCalls[_0x362142];
        _0x35ce8f.deferredCalls.splice(_0x362142, 1);
        --_0x362142;
        _0x3e83fd.targetFunction.apply(null, _0x3e83fd.argsList);
      }
    },
    eventHandlers: [],
    removeAllHandlersOnTarget: function (_0x53e6d9, _0x57caa5) {
      for (var _0x500ae7 = 0; _0x500ae7 < _0x35ce8f.eventHandlers.length; ++_0x500ae7) {
        if (_0x35ce8f.eventHandlers[_0x500ae7].target == _0x53e6d9 && (!_0x57caa5 || _0x57caa5 == _0x35ce8f.eventHandlers[_0x500ae7].eventTypeString)) {
          _0x35ce8f._removeHandler(_0x500ae7--);
        }
      }
    },
    _removeHandler: function (_0x2507e1) {
      var _0x1d0fbd = _0x35ce8f.eventHandlers[_0x2507e1];
      _0x1d0fbd.target.removeEventListener(_0x1d0fbd.eventTypeString, _0x1d0fbd.eventListenerFunc, _0x1d0fbd.useCapture);
      _0x35ce8f.eventHandlers.splice(_0x2507e1, 1);
    },
    registerOrRemoveHandler: function (_0xf16cce) {
      var _0x49ae70 = function _0x4624cf(_0x51aa65) {
        ++_0x35ce8f.inEventHandler;
        _0x35ce8f.currentEventHandler = _0xf16cce;
        _0x35ce8f.runDeferredCalls();
        _0xf16cce.handlerFunc(_0x51aa65);
        _0x35ce8f.runDeferredCalls();
        --_0x35ce8f.inEventHandler;
      };
      if (_0xf16cce.callbackfunc) {
        _0xf16cce.eventListenerFunc = _0x49ae70;
        _0xf16cce.target.addEventListener(_0xf16cce.eventTypeString, _0x49ae70, _0xf16cce.useCapture);
        _0x35ce8f.eventHandlers.push(_0xf16cce);
        _0x35ce8f.registerRemoveEventListeners();
      } else {
        for (var _0x342370 = 0; _0x342370 < _0x35ce8f.eventHandlers.length; ++_0x342370) {
          if (_0x35ce8f.eventHandlers[_0x342370].target == _0xf16cce.target && _0x35ce8f.eventHandlers[_0x342370].eventTypeString == _0xf16cce.eventTypeString) {
            _0x35ce8f._removeHandler(_0x342370--);
          }
        }
      }
    },
    getNodeNameForTarget: function (_0xe08045) {
      if (!_0xe08045) {
        return "";
      }
      if (_0xe08045 == window) {
        return "#window";
      }
      if (_0xe08045 == screen) {
        return "#screen";
      }
      if (_0xe08045 && _0xe08045.nodeName) {
        return _0xe08045.nodeName;
      } else {
        return "";
      }
    },
    fullscreenEnabled: function () {
      return document.fullscreenEnabled || document.webkitFullscreenEnabled;
    }
  };
  var _0x17a2ee = {};
  function _0x3626d8(_0x145de4) {
    if (_0x145de4 > 2) {
      return _0x5c2e85(_0x145de4);
    } else {
      return _0x145de4;
    }
  }
  var _0x210a5f = [0, typeof document !== "undefined" ? document : 0, typeof window !== "undefined" ? window : 0];
  function _0x8fb9c4(_0x142789) {
    _0x142789 = _0x3626d8(_0x142789);
    var _0x4fc8f6 = _0x210a5f[_0x142789] || (typeof document !== "undefined" ? document.querySelector(_0x142789) : undefined);
    return _0x4fc8f6;
  }
  function _0x55b5b3(_0x926961) {
    return _0x8fb9c4(_0x926961);
  }
  function _0x33b622(_0x4d1dba, _0x8c2271, _0x56117e) {
    var _0x947ded = _0x55b5b3(_0x4d1dba);
    if (!_0x947ded) {
      return -4;
    }
    _0x4e86a5[_0x8c2271 >> 2] = _0x947ded.width;
    _0x4e86a5[_0x56117e >> 2] = _0x947ded.height;
  }
  function _0x95e5e3(_0x4e453f) {
    var _0x138718 = _0x51cfa0();
    var _0x47f781 = _0x3f9e14(8);
    var _0x547887 = _0x47f781 + 4;
    var _0xdc00ee = _0x3f9e14(_0x4e453f.id.length + 1);
    _0x409466(_0x4e453f.id, _0xdc00ee, _0x4e453f.id.length + 1);
    var _0x55bef4 = _0x33b622(_0xdc00ee, _0x47f781, _0x547887);
    var _0xe377fb = [_0x4e86a5[_0x47f781 >> 2], _0x4e86a5[_0x547887 >> 2]];
    _0x15d00c(_0x138718);
    return _0xe377fb;
  }
  function _0x3c4e13(_0x55d80b, _0x8b85ac, _0x3fd06d) {
    var _0x16186b = _0x55b5b3(_0x55d80b);
    if (!_0x16186b) {
      return -4;
    }
    _0x16186b.width = _0x8b85ac;
    _0x16186b.height = _0x3fd06d;
    return 0;
  }
  function _0x34c035(_0x189f2a, _0x37e529, _0xcf131b) {
    if (!_0x189f2a.controlTransferredOffscreen) {
      _0x189f2a.width = _0x37e529;
      _0x189f2a.height = _0xcf131b;
    } else {
      var _0x50e21b = _0x51cfa0();
      var _0x95bc48 = _0x3f9e14(_0x189f2a.id.length + 1);
      _0x409466(_0x189f2a.id, _0x95bc48, _0x189f2a.id.length + 1);
      _0x3c4e13(_0x95bc48, _0x37e529, _0xcf131b);
      _0x15d00c(_0x50e21b);
    }
  }
  function _0x4fd682(_0x2ff9bb) {
    var _0x1d3258 = _0x95e5e3(_0x2ff9bb);
    var _0x9b0c9c = _0x1d3258[0];
    var _0x532a09 = _0x1d3258[1];
    var _0x1e8d23 = _0x2ff9bb.style.width;
    var _0x37df79 = _0x2ff9bb.style.height;
    var _0x46e61b = _0x2ff9bb.style.backgroundColor;
    var _0x47eb14 = document.body.style.backgroundColor;
    var _0x2a46db = _0x2ff9bb.style.paddingLeft;
    var _0x3ebe9d = _0x2ff9bb.style.paddingRight;
    var _0x52e385 = _0x2ff9bb.style.paddingTop;
    var _0xbbd5f = _0x2ff9bb.style.paddingBottom;
    var _0x390c92 = _0x2ff9bb.style.marginLeft;
    var _0x4d36db = _0x2ff9bb.style.marginRight;
    var _0x264859 = _0x2ff9bb.style.marginTop;
    var _0x4f2abb = _0x2ff9bb.style.marginBottom;
    var _0x4512ba = document.body.style.margin;
    var _0x4fc53d = document.documentElement.style.overflow;
    var _0x508196 = document.body.scroll;
    var _0x15b57f = _0x2ff9bb.style.imageRendering;
    function _0x2f38ce() {
      var _0x332591 = document.fullscreenElement || document.webkitFullscreenElement || document.msFullscreenElement;
      if (!_0x332591) {
        document.removeEventListener("fullscreenchange", _0x2f38ce);
        document.removeEventListener("webkitfullscreenchange", _0x2f38ce);
        _0x34c035(_0x2ff9bb, _0x9b0c9c, _0x532a09);
        _0x2ff9bb.style.width = _0x1e8d23;
        _0x2ff9bb.style.height = _0x37df79;
        _0x2ff9bb.style.backgroundColor = _0x46e61b;
        if (!_0x47eb14) {
          document.body.style.backgroundColor = "white";
        }
        document.body.style.backgroundColor = _0x47eb14;
        _0x2ff9bb.style.paddingLeft = _0x2a46db;
        _0x2ff9bb.style.paddingRight = _0x3ebe9d;
        _0x2ff9bb.style.paddingTop = _0x52e385;
        _0x2ff9bb.style.paddingBottom = _0xbbd5f;
        _0x2ff9bb.style.marginLeft = _0x390c92;
        _0x2ff9bb.style.marginRight = _0x4d36db;
        _0x2ff9bb.style.marginTop = _0x264859;
        _0x2ff9bb.style.marginBottom = _0x4f2abb;
        document.body.style.margin = _0x4512ba;
        document.documentElement.style.overflow = _0x4fc53d;
        document.body.scroll = _0x508196;
        _0x2ff9bb.style.imageRendering = _0x15b57f;
        if (_0x2ff9bb.GLctxObject) {
          _0x2ff9bb.GLctxObject.GLctx.viewport(0, 0, _0x9b0c9c, _0x532a09);
        }
        if (_0x17a2ee.canvasResizedCallback) {
          (function (_0x200a6a, _0x445c74, _0x30cbce) {
            return _0x901ebd.apply(null, [_0x17a2ee.canvasResizedCallback, _0x200a6a, _0x445c74, _0x30cbce]);
          })(37, 0, _0x17a2ee.canvasResizedCallbackUserData);
        }
      }
    }
    document.addEventListener("fullscreenchange", _0x2f38ce);
    document.addEventListener("webkitfullscreenchange", _0x2f38ce);
    return _0x2f38ce;
  }
  function _0x166ced(_0x3b508a, _0x1f6e8a, _0x4f25c3) {
    _0x3b508a.style.paddingLeft = _0x3b508a.style.paddingRight = _0x4f25c3 + "px";
    _0x3b508a.style.paddingTop = _0x3b508a.style.paddingBottom = _0x1f6e8a + "px";
  }
  function _0x2d4955(_0x450aa7) {
    if (_0x210a5f.indexOf(_0x450aa7) < 0) {
      return _0x450aa7.getBoundingClientRect();
    } else {
      return {
        left: 0,
        top: 0
      };
    }
  }
  function _0xdcd321(_0x1a3b3b, _0x4ad27f) {
    var _0x3bb417 = _0x4fd682(_0x1a3b3b);
    var _0x251c8c = _0x4ad27f.softFullscreen ? innerWidth : screen.width;
    var _0x58f4b3 = _0x4ad27f.softFullscreen ? innerHeight : screen.height;
    var _0x2ed70d = _0x2d4955(_0x1a3b3b);
    var _0x142c10 = _0x2ed70d.width;
    var _0x1378da = _0x2ed70d.height;
    var _0x10ab1a = _0x95e5e3(_0x1a3b3b);
    var _0x201f6f = _0x10ab1a[0];
    var _0x4c08a0 = _0x10ab1a[1];
    if (_0x4ad27f.scaleMode == 3) {
      _0x166ced(_0x1a3b3b, (_0x58f4b3 - _0x1378da) / 2, (_0x251c8c - _0x142c10) / 2);
      _0x251c8c = _0x142c10;
      _0x58f4b3 = _0x1378da;
    } else if (_0x4ad27f.scaleMode == 2) {
      if (_0x251c8c * _0x4c08a0 < _0x201f6f * _0x58f4b3) {
        var _0x584f82 = _0x4c08a0 * _0x251c8c / _0x201f6f;
        _0x166ced(_0x1a3b3b, (_0x58f4b3 - _0x584f82) / 2, 0);
        _0x58f4b3 = _0x584f82;
      } else {
        var _0x1cfe63 = _0x201f6f * _0x58f4b3 / _0x4c08a0;
        _0x166ced(_0x1a3b3b, 0, (_0x251c8c - _0x1cfe63) / 2);
        _0x251c8c = _0x1cfe63;
      }
    }
    if (!_0x1a3b3b.style.backgroundColor) {
      _0x1a3b3b.style.backgroundColor = "black";
    }
    if (!document.body.style.backgroundColor) {
      document.body.style.backgroundColor = "black";
    }
    _0x1a3b3b.style.width = _0x251c8c + "px";
    _0x1a3b3b.style.height = _0x58f4b3 + "px";
    if (_0x4ad27f.filteringMode == 1) {
      _0x1a3b3b.style.imageRendering = "optimizeSpeed";
      _0x1a3b3b.style.imageRendering = "-moz-crisp-edges";
      _0x1a3b3b.style.imageRendering = "-o-crisp-edges";
      _0x1a3b3b.style.imageRendering = "-webkit-optimize-contrast";
      _0x1a3b3b.style.imageRendering = "optimize-contrast";
      _0x1a3b3b.style.imageRendering = "crisp-edges";
      _0x1a3b3b.style.imageRendering = "pixelated";
    }
    var _0x1d2de0 = _0x4ad27f.canvasResolutionScaleMode == 2 ? devicePixelRatio : 1;
    if (_0x4ad27f.canvasResolutionScaleMode != 0) {
      var _0x5625b1 = _0x251c8c * _0x1d2de0 | 0;
      var _0x151998 = _0x58f4b3 * _0x1d2de0 | 0;
      _0x34c035(_0x1a3b3b, _0x5625b1, _0x151998);
      if (_0x1a3b3b.GLctxObject) {
        _0x1a3b3b.GLctxObject.GLctx.viewport(0, 0, _0x5625b1, _0x151998);
      }
    }
    return _0x3bb417;
  }
  function _0x399a21(_0x2bd027, _0x4947b0) {
    if (_0x4947b0.scaleMode != 0 || _0x4947b0.canvasResolutionScaleMode != 0) {
      _0xdcd321(_0x2bd027, _0x4947b0);
    }
    if (_0x2bd027.requestFullscreen) {
      _0x2bd027.requestFullscreen();
    } else if (_0x2bd027.webkitRequestFullscreen) {
      _0x2bd027.webkitRequestFullscreen(Element.ALLOW_KEYBOARD_INPUT);
    } else if (_0x35ce8f.fullscreenEnabled()) {
      return -3;
    } else {
      return -1;
    }
    _0x17a2ee = _0x4947b0;
    if (_0x4947b0.canvasResizedCallback) {
      (function (_0x428bdb, _0x57062f, _0x134e17) {
        return _0x901ebd.apply(null, [_0x4947b0.canvasResizedCallback, _0x428bdb, _0x57062f, _0x134e17]);
      })(37, 0, _0x4947b0.canvasResizedCallbackUserData);
    }
    return 0;
  }
  function _0x137ebc() {
    if (!_0x35ce8f.fullscreenEnabled()) {
      return -1;
    }
    _0x35ce8f.removeDeferredCalls(_0x399a21);
    var _0x246843 = _0x210a5f[1];
    if (_0x246843.exitFullscreen) {
      if (_0x246843.fullscreenElement) {
        _0x246843.exitFullscreen();
      }
    } else if (_0x246843.webkitExitFullscreen) {
      if (_0x246843.webkitFullscreenElement) {
        _0x246843.webkitExitFullscreen();
      }
    } else {
      return -1;
    }
    return 0;
  }
  function _0x12c35d(_0x2af9d9) {
    if (_0x2af9d9.requestPointerLock) {
      _0x2af9d9.requestPointerLock();
    } else if (_0x2af9d9.msRequestPointerLock) {
      _0x2af9d9.msRequestPointerLock();
    } else if (document.body.requestPointerLock || document.body.msRequestPointerLock) {
      return -3;
    } else {
      return -1;
    }
    return 0;
  }
  function _0x1c5413() {
    _0x35ce8f.removeDeferredCalls(_0x12c35d);
    if (document.exitPointerLock) {
      document.exitPointerLock();
    } else if (document.msExitPointerLock) {
      document.msExitPointerLock();
    } else {
      return -1;
    }
    return 0;
  }
  function _0x327569(_0x48f6ee) {
    var _0x3b7b66 = document.fullscreenElement || document.mozFullScreenElement || document.webkitFullscreenElement || document.msFullscreenElement;
    var _0x96402e = !!_0x3b7b66;
    _0x4e86a5[_0x48f6ee >> 2] = _0x96402e;
    _0x4e86a5[_0x48f6ee + 4 >> 2] = _0x35ce8f.fullscreenEnabled();
    var _0x1cefb8 = _0x96402e ? _0x3b7b66 : _0x35ce8f.previousFullscreenElement;
    var _0x52d084 = _0x35ce8f.getNodeNameForTarget(_0x1cefb8);
    var _0xb2e993 = _0x1cefb8 && _0x1cefb8.id ? _0x1cefb8.id : "";
    _0x409466(_0x52d084, _0x48f6ee + 8, 128);
    _0x409466(_0xb2e993, _0x48f6ee + 136, 128);
    _0x4e86a5[_0x48f6ee + 264 >> 2] = _0x1cefb8 ? _0x1cefb8.clientWidth : 0;
    _0x4e86a5[_0x48f6ee + 268 >> 2] = _0x1cefb8 ? _0x1cefb8.clientHeight : 0;
    _0x4e86a5[_0x48f6ee + 272 >> 2] = screen.width;
    _0x4e86a5[_0x48f6ee + 276 >> 2] = screen.height;
    if (_0x96402e) {
      _0x35ce8f.previousFullscreenElement = _0x3b7b66;
    }
  }
  function _0x57cf31(_0x2c6eeb) {
    if (!_0x35ce8f.fullscreenEnabled()) {
      return -1;
    }
    _0x327569(_0x2c6eeb);
    return 0;
  }
  function _0x20224b(_0x5bcf8f, _0x55ca30) {
    _0x492f87[_0x5bcf8f >> 3] = _0x55ca30.timestamp;
    for (var _0xdce7cf = 0; _0xdce7cf < _0x55ca30.axes.length; ++_0xdce7cf) {
      _0x492f87[_0x5bcf8f + _0xdce7cf * 8 + 16 >> 3] = _0x55ca30.axes[_0xdce7cf];
    }
    for (var _0xdce7cf = 0; _0xdce7cf < _0x55ca30.buttons.length; ++_0xdce7cf) {
      if (typeof _0x55ca30.buttons[_0xdce7cf] === "object") {
        _0x492f87[_0x5bcf8f + _0xdce7cf * 8 + 528 >> 3] = _0x55ca30.buttons[_0xdce7cf].value;
      } else {
        _0x492f87[_0x5bcf8f + _0xdce7cf * 8 + 528 >> 3] = _0x55ca30.buttons[_0xdce7cf];
      }
    }
    for (var _0xdce7cf = 0; _0xdce7cf < _0x55ca30.buttons.length; ++_0xdce7cf) {
      if (typeof _0x55ca30.buttons[_0xdce7cf] === "object") {
        _0x4e86a5[_0x5bcf8f + _0xdce7cf * 4 + 1040 >> 2] = _0x55ca30.buttons[_0xdce7cf].pressed;
      } else {
        _0x4e86a5[_0x5bcf8f + _0xdce7cf * 4 + 1040 >> 2] = _0x55ca30.buttons[_0xdce7cf] == 1;
      }
    }
    _0x4e86a5[_0x5bcf8f + 1296 >> 2] = _0x55ca30.connected;
    _0x4e86a5[_0x5bcf8f + 1300 >> 2] = _0x55ca30.index;
    _0x4e86a5[_0x5bcf8f + 8 >> 2] = _0x55ca30.axes.length;
    _0x4e86a5[_0x5bcf8f + 12 >> 2] = _0x55ca30.buttons.length;
    _0x409466(_0x55ca30.id, _0x5bcf8f + 1304, 64);
    _0x409466(_0x55ca30.mapping, _0x5bcf8f + 1368, 64);
  }
  function _0x11d812(_0x1ee408, _0x391db0) {
    if (_0x1ee408 < 0 || _0x1ee408 >= _0x35ce8f.lastGamepadState.length) {
      return -5;
    }
    if (!_0x35ce8f.lastGamepadState[_0x1ee408]) {
      return -7;
    }
    _0x20224b(_0x391db0, _0x35ce8f.lastGamepadState[_0x1ee408]);
    return 0;
  }
  function _0x3e39b8() {
    return 2147483648;
  }
  function _0x879fa9() {
    return _0x35ce8f.lastGamepadState.length;
  }
  function _0x4f3166() {
    _0x35ce8f.removeAllEventListeners();
  }
  function _0x71bb50(_0x2b44e6) {
    return !_0x58939e.contexts[_0x2b44e6] || _0x58939e.contexts[_0x2b44e6].GLctx.isContextLost();
  }
  function _0x5918e3(_0x572de9) {
    return _0x572de9 < 0 || _0x572de9 === 0 && 1 / _0x572de9 === -Infinity;
  }
  function _0x4c9011(_0x65f5cf, _0xccfdc) {
    return (_0x65f5cf >>> 0) + _0xccfdc * 4294967296;
  }
  function _0x88cb39(_0x3e4a58, _0x2d579b) {
    return (_0x3e4a58 >>> 0) + (_0x2d579b >>> 0) * 4294967296;
  }
  function _0x56cefe(_0x5d0ac1, _0x8e67c4) {
    if (_0x5d0ac1 <= 0) {
      return _0x5d0ac1;
    }
    var _0x480cfc = _0x8e67c4 <= 32 ? Math.abs(1 << _0x8e67c4 - 1) : Math.pow(2, _0x8e67c4 - 1);
    if (_0x5d0ac1 >= _0x480cfc && (_0x8e67c4 <= 32 || _0x5d0ac1 > _0x480cfc)) {
      _0x5d0ac1 = _0x480cfc * -2 + _0x5d0ac1;
    }
    return _0x5d0ac1;
  }
  function _0x5bd042(_0x47a1a1, _0x3f3c3a) {
    if (_0x47a1a1 >= 0) {
      return _0x47a1a1;
    }
    if (_0x3f3c3a <= 32) {
      return Math.abs(1 << _0x3f3c3a - 1) * 2 + _0x47a1a1;
    } else {
      return Math.pow(2, _0x3f3c3a) + _0x47a1a1;
    }
  }
  function _0x4986bc(_0x370f2b, _0x352959) {
    var _0x5a7f6c = _0x370f2b;
    var _0x5a88be = _0x352959;
    function _0x22c8d1(_0x2fda35, _0x14839d) {
      if (_0x14839d === "double" || _0x14839d === "i64") {
        if (_0x2fda35 & 7) {
          _0x2fda35 += 4;
        }
      } else {}
      return _0x2fda35;
    }
    function _0x4c07d0(_0x57f995) {
      var _0x5e7f9a;
      _0x5a88be = _0x22c8d1(_0x5a88be, _0x57f995);
      if (_0x57f995 === "double") {
        _0x5e7f9a = _0x492f87[_0x5a88be >> 3];
        _0x5a88be += 8;
      } else if (_0x57f995 == "i64") {
        _0x5e7f9a = [_0x4e86a5[_0x5a88be >> 2], _0x4e86a5[_0x5a88be + 4 >> 2]];
        _0x5a88be += 8;
      } else {
        _0x57f995 = "i32";
        _0x5e7f9a = _0x4e86a5[_0x5a88be >> 2];
        _0x5a88be += 4;
      }
      return _0x5e7f9a;
    }
    var _0x764344 = [];
    var _0x11039d;
    var _0x2535db;
    var _0x5248fe;
    while (1) {
      var _0x52d110 = _0x5a7f6c;
      _0x11039d = _0x9c4a59[_0x5a7f6c >> 0];
      if (_0x11039d === 0) {
        break;
      }
      _0x2535db = _0x9c4a59[_0x5a7f6c + 1 >> 0];
      if (_0x11039d == 37) {
        var _0x255d2b = false;
        var _0x17e388 = false;
        var _0x5b3020 = false;
        var _0xaaf1cd = false;
        var _0x40c5ba = false;
        _0x955c16: while (1) {
          switch (_0x2535db) {
            case 43:
              _0x255d2b = true;
              break;
            case 45:
              _0x17e388 = true;
              break;
            case 35:
              _0x5b3020 = true;
              break;
            case 48:
              if (_0xaaf1cd) {
                break _0x955c16;
              } else {
                _0xaaf1cd = true;
                break;
              }
            case 32:
              _0x40c5ba = true;
              break;
            default:
              break _0x955c16;
          }
          _0x5a7f6c++;
          _0x2535db = _0x9c4a59[_0x5a7f6c + 1 >> 0];
        }
        var _0x50342c = 0;
        if (_0x2535db == 42) {
          _0x50342c = _0x4c07d0("i32");
          _0x5a7f6c++;
          _0x2535db = _0x9c4a59[_0x5a7f6c + 1 >> 0];
        } else {
          while (_0x2535db >= 48 && _0x2535db <= 57) {
            _0x50342c = _0x50342c * 10 + (_0x2535db - 48);
            _0x5a7f6c++;
            _0x2535db = _0x9c4a59[_0x5a7f6c + 1 >> 0];
          }
        }
        var _0x2daae1 = false;
        var _0x4082ba = -1;
        if (_0x2535db == 46) {
          _0x4082ba = 0;
          _0x2daae1 = true;
          _0x5a7f6c++;
          _0x2535db = _0x9c4a59[_0x5a7f6c + 1 >> 0];
          if (_0x2535db == 42) {
            _0x4082ba = _0x4c07d0("i32");
            _0x5a7f6c++;
          } else {
            while (1) {
              var _0x323860 = _0x9c4a59[_0x5a7f6c + 1 >> 0];
              if (_0x323860 < 48 || _0x323860 > 57) {
                break;
              }
              _0x4082ba = _0x4082ba * 10 + (_0x323860 - 48);
              _0x5a7f6c++;
            }
          }
          _0x2535db = _0x9c4a59[_0x5a7f6c + 1 >> 0];
        }
        if (_0x4082ba < 0) {
          _0x4082ba = 6;
          _0x2daae1 = false;
        }
        var _0x416307;
        switch (String.fromCharCode(_0x2535db)) {
          case "h":
            var _0x247f9f = _0x9c4a59[_0x5a7f6c + 2 >> 0];
            if (_0x247f9f == 104) {
              _0x5a7f6c++;
              _0x416307 = 1;
            } else {
              _0x416307 = 2;
            }
            break;
          case "l":
            var _0x247f9f = _0x9c4a59[_0x5a7f6c + 2 >> 0];
            if (_0x247f9f == 108) {
              _0x5a7f6c++;
              _0x416307 = 8;
            } else {
              _0x416307 = 4;
            }
            break;
          case "L":
          case "q":
          case "j":
            _0x416307 = 8;
            break;
          case "z":
          case "t":
          case "I":
            _0x416307 = 4;
            break;
          default:
            _0x416307 = null;
        }
        if (_0x416307) {
          _0x5a7f6c++;
        }
        _0x2535db = _0x9c4a59[_0x5a7f6c + 1 >> 0];
        switch (String.fromCharCode(_0x2535db)) {
          case "d":
          case "i":
          case "u":
          case "o":
          case "x":
          case "X":
          case "p":
            {
              var _0x247410 = _0x2535db == 100 || _0x2535db == 105;
              _0x416307 = _0x416307 || 4;
              _0x5248fe = _0x4c07d0("i" + _0x416307 * 8);
              var _0x53d1b7;
              if (_0x416307 == 8) {
                _0x5248fe = _0x2535db == 117 ? _0x88cb39(_0x5248fe[0], _0x5248fe[1]) : _0x4c9011(_0x5248fe[0], _0x5248fe[1]);
              }
              if (_0x416307 <= 4) {
                var _0x2b2b9c = Math.pow(256, _0x416307) - 1;
                _0x5248fe = (_0x247410 ? _0x56cefe : _0x5bd042)(_0x5248fe & _0x2b2b9c, _0x416307 * 8);
              }
              var _0x3b2021 = Math.abs(_0x5248fe);
              var _0x503ebf = "";
              if (_0x2535db == 100 || _0x2535db == 105) {
                _0x53d1b7 = _0x56cefe(_0x5248fe, _0x416307 * 8, 1).toString(10);
              } else if (_0x2535db == 117) {
                _0x53d1b7 = _0x5bd042(_0x5248fe, _0x416307 * 8, 1).toString(10);
                _0x5248fe = Math.abs(_0x5248fe);
              } else if (_0x2535db == 111) {
                _0x53d1b7 = (_0x5b3020 ? "0" : "") + _0x3b2021.toString(8);
              } else if (_0x2535db == 120 || _0x2535db == 88) {
                _0x503ebf = _0x5b3020 && _0x5248fe != 0 ? "0x" : "";
                if (_0x5248fe < 0) {
                  _0x5248fe = -_0x5248fe;
                  _0x53d1b7 = (_0x3b2021 - 1).toString(16);
                  var _0x340472 = [];
                  for (var _0x5718dc = 0; _0x5718dc < _0x53d1b7.length; _0x5718dc++) {
                    _0x340472.push((15 - parseInt(_0x53d1b7[_0x5718dc], 16)).toString(16));
                  }
                  _0x53d1b7 = _0x340472.join("");
                  while (_0x53d1b7.length < _0x416307 * 2) {
                    _0x53d1b7 = "f" + _0x53d1b7;
                  }
                } else {
                  _0x53d1b7 = _0x3b2021.toString(16);
                }
                if (_0x2535db == 88) {
                  _0x503ebf = _0x503ebf.toUpperCase();
                  _0x53d1b7 = _0x53d1b7.toUpperCase();
                }
              } else if (_0x2535db == 112) {
                if (_0x3b2021 === 0) {
                  _0x53d1b7 = "(nil)";
                } else {
                  _0x503ebf = "0x";
                  _0x53d1b7 = _0x3b2021.toString(16);
                }
              }
              if (_0x2daae1) {
                while (_0x53d1b7.length < _0x4082ba) {
                  _0x53d1b7 = "0" + _0x53d1b7;
                }
              }
              if (_0x5248fe >= 0) {
                if (_0x255d2b) {
                  _0x503ebf = "+" + _0x503ebf;
                } else if (_0x40c5ba) {
                  _0x503ebf = " " + _0x503ebf;
                }
              }
              if (_0x53d1b7.charAt(0) == "-") {
                _0x503ebf = "-" + _0x503ebf;
                _0x53d1b7 = _0x53d1b7.substr(1);
              }
              while (_0x503ebf.length + _0x53d1b7.length < _0x50342c) {
                if (_0x17e388) {
                  _0x53d1b7 += " ";
                } else if (_0xaaf1cd) {
                  _0x53d1b7 = "0" + _0x53d1b7;
                } else {
                  _0x503ebf = " " + _0x503ebf;
                }
              }
              _0x53d1b7 = _0x503ebf + _0x53d1b7;
              _0x53d1b7.split("").forEach(function (_0x2cd78e) {
                _0x764344.push(_0x2cd78e.charCodeAt(0));
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
              _0x5248fe = _0x4c07d0("double");
              var _0x53d1b7;
              if (isNaN(_0x5248fe)) {
                _0x53d1b7 = "nan";
                _0xaaf1cd = false;
              } else if (!isFinite(_0x5248fe)) {
                _0x53d1b7 = (_0x5248fe < 0 ? "-" : "") + "inf";
                _0xaaf1cd = false;
              } else {
                var _0x3f2beb = false;
                var _0x1e0067 = Math.min(_0x4082ba, 20);
                if (_0x2535db == 103 || _0x2535db == 71) {
                  _0x3f2beb = true;
                  _0x4082ba = _0x4082ba || 1;
                  var _0x22753a = parseInt(_0x5248fe.toExponential(_0x1e0067).split("e")[1], 10);
                  if (_0x4082ba > _0x22753a && _0x22753a >= -4) {
                    _0x2535db = (_0x2535db == 103 ? "f" : "F").charCodeAt(0);
                    _0x4082ba -= _0x22753a + 1;
                  } else {
                    _0x2535db = (_0x2535db == 103 ? "e" : "E").charCodeAt(0);
                    _0x4082ba--;
                  }
                  _0x1e0067 = Math.min(_0x4082ba, 20);
                }
                if (_0x2535db == 101 || _0x2535db == 69) {
                  _0x53d1b7 = _0x5248fe.toExponential(_0x1e0067);
                  if (/[eE][-+]\d$/.test(_0x53d1b7)) {
                    _0x53d1b7 = _0x53d1b7.slice(0, -1) + "0" + _0x53d1b7.slice(-1);
                  }
                } else if (_0x2535db == 102 || _0x2535db == 70) {
                  _0x53d1b7 = _0x5248fe.toFixed(_0x1e0067);
                  if (_0x5248fe === 0 && _0x5918e3(_0x5248fe)) {
                    _0x53d1b7 = "-" + _0x53d1b7;
                  }
                }
                var _0x272658 = _0x53d1b7.split("e");
                if (_0x3f2beb && !_0x5b3020) {
                  while (_0x272658[0].length > 1 && _0x272658[0].includes(".") && (_0x272658[0].slice(-1) == "0" || _0x272658[0].slice(-1) == ".")) {
                    _0x272658[0] = _0x272658[0].slice(0, -1);
                  }
                } else {
                  if (_0x5b3020 && _0x53d1b7.indexOf(".") == -1) {
                    _0x272658[0] += ".";
                  }
                  while (_0x4082ba > _0x1e0067++) {
                    _0x272658[0] += "0";
                  }
                }
                _0x53d1b7 = _0x272658[0] + (_0x272658.length > 1 ? "e" + _0x272658[1] : "");
                if (_0x2535db == 69) {
                  _0x53d1b7 = _0x53d1b7.toUpperCase();
                }
                if (_0x5248fe >= 0) {
                  if (_0x255d2b) {
                    _0x53d1b7 = "+" + _0x53d1b7;
                  } else if (_0x40c5ba) {
                    _0x53d1b7 = " " + _0x53d1b7;
                  }
                }
              }
              while (_0x53d1b7.length < _0x50342c) {
                if (_0x17e388) {
                  _0x53d1b7 += " ";
                } else if (_0xaaf1cd && (_0x53d1b7[0] == "-" || _0x53d1b7[0] == "+")) {
                  _0x53d1b7 = _0x53d1b7[0] + "0" + _0x53d1b7.slice(1);
                } else {
                  _0x53d1b7 = (_0xaaf1cd ? "0" : " ") + _0x53d1b7;
                }
              }
              if (_0x2535db < 97) {
                _0x53d1b7 = _0x53d1b7.toUpperCase();
              }
              _0x53d1b7.split("").forEach(function (_0x3ece5f) {
                _0x764344.push(_0x3ece5f.charCodeAt(0));
              });
              break;
            }
          case "s":
            {
              var _0x1a7704 = _0x4c07d0("i8*");
              var _0x269a67 = _0x1a7704 ? _0xac45f3(_0x1a7704) : "(null)".length;
              if (_0x2daae1) {
                _0x269a67 = Math.min(_0x269a67, _0x4082ba);
              }
              if (!_0x17e388) {
                while (_0x269a67 < _0x50342c--) {
                  _0x764344.push(32);
                }
              }
              if (_0x1a7704) {
                for (var _0x5718dc = 0; _0x5718dc < _0x269a67; _0x5718dc++) {
                  _0x764344.push(_0x950143[_0x1a7704++ >> 0]);
                }
              } else {
                _0x764344 = _0x764344.concat(_0xc6e11e("(null)".substr(0, _0x269a67), true));
              }
              if (_0x17e388) {
                while (_0x269a67 < _0x50342c--) {
                  _0x764344.push(32);
                }
              }
              break;
            }
          case "c":
            {
              if (_0x17e388) {
                _0x764344.push(_0x4c07d0("i8"));
              }
              while (--_0x50342c > 0) {
                _0x764344.push(32);
              }
              if (!_0x17e388) {
                _0x764344.push(_0x4c07d0("i8"));
              }
              break;
            }
          case "n":
            {
              var _0x4918df = _0x4c07d0("i32*");
              _0x4e86a5[_0x4918df >> 2] = _0x764344.length;
              break;
            }
          case "%":
            {
              _0x764344.push(_0x11039d);
              break;
            }
          default:
            {
              for (var _0x5718dc = _0x52d110; _0x5718dc < _0x5a7f6c + 2; _0x5718dc++) {
                _0x764344.push(_0x9c4a59[_0x5718dc >> 0]);
              }
            }
        }
        _0x5a7f6c += 2;
      } else {
        _0x764344.push(_0x11039d);
        _0x5a7f6c += 1;
      }
    }
    return _0x764344;
  }
  function _0x5f3e7c(_0x4a8f98) {
    if (!_0x4a8f98 || !_0x4a8f98.callee || !_0x4a8f98.callee.name) {
      return [null, "", ""];
    }
    var _0x12ec7d = _0x4a8f98.callee.toString();
    var _0x30e64b = _0x4a8f98.callee.name;
    var _0x235cd0 = "(";
    var _0x2482a0 = true;
    for (var _0x47c4be in _0x4a8f98) {
      var _0x37d78c = _0x4a8f98[_0x47c4be];
      if (!_0x2482a0) {
        _0x235cd0 += ", ";
      }
      _0x2482a0 = false;
      if (typeof _0x37d78c === "number" || typeof _0x37d78c === "string") {
        _0x235cd0 += _0x37d78c;
      } else {
        _0x235cd0 += "(" + typeof _0x37d78c + ")";
      }
    }
    _0x235cd0 += ")";
    var _0x4a6da5 = _0x4a8f98.callee.caller;
    _0x4a8f98 = _0x4a6da5 ? _0x4a6da5.arguments : [];
    if (_0x2482a0) {
      _0x235cd0 = "";
    }
    return [_0x4a8f98, _0x30e64b, _0x235cd0];
  }
  function _0x21bf2d(_0x1df4fd) {
    var _0x1fea2b = _0x5b220f();
    var _0x1ce6aa = _0x1fea2b.lastIndexOf("_emscripten_log");
    var _0x310dcf = _0x1fea2b.lastIndexOf("_emscripten_get_callstack");
    var _0x53b57c = _0x1fea2b.indexOf("\n", Math.max(_0x1ce6aa, _0x310dcf)) + 1;
    _0x1fea2b = _0x1fea2b.slice(_0x53b57c);
    if (_0x1df4fd & 32) {
      _0x22e41e("EM_LOG_DEMANGLE is deprecated; ignoring");
    }
    if (_0x1df4fd & 8 && typeof emscripten_source_map === "undefined") {
      _0x22e41e("Source map information is not available, emscripten_log with EM_LOG_C_STACK will be ignored. Build with \"--pre-js $EMSCRIPTEN/src/emscripten-source-map.min.js\" linker flag to add source map loading to code.");
      _0x1df4fd ^= 8;
      _0x1df4fd |= 16;
    }
    var _0x4311a3 = null;
    if (_0x1df4fd & 128) {
      _0x4311a3 = _0x5f3e7c(arguments);
      while (_0x4311a3[1].includes("_emscripten_")) {
        _0x4311a3 = _0x5f3e7c(_0x4311a3[0]);
      }
    }
    var _0x286646 = _0x1fea2b.split("\n");
    _0x1fea2b = "";
    var _0xa2d0a2 = new RegExp("\\s*(.*?)@(.*?):([0-9]+):([0-9]+)");
    var _0x46fc4d = new RegExp("\\s*(.*?)@(.*):(.*)(:(.*))?");
    var _0x45d2db = new RegExp("\\s*at (.*?) \\((.*):(.*):(.*)\\)");
    for (var _0x53f8c2 in _0x286646) {
      var _0x17c085 = _0x286646[_0x53f8c2];
      var _0x37447e = "";
      var _0x4612d7 = "";
      var _0xad0900 = 0;
      var _0x545d66 = 0;
      var _0x1586c3 = _0x45d2db.exec(_0x17c085);
      if (_0x1586c3 && _0x1586c3.length == 5) {
        _0x37447e = _0x1586c3[1];
        _0x4612d7 = _0x1586c3[2];
        _0xad0900 = _0x1586c3[3];
        _0x545d66 = _0x1586c3[4];
      } else {
        _0x1586c3 = _0xa2d0a2.exec(_0x17c085);
        if (!_0x1586c3) {
          _0x1586c3 = _0x46fc4d.exec(_0x17c085);
        }
        if (_0x1586c3 && _0x1586c3.length >= 4) {
          _0x37447e = _0x1586c3[1];
          _0x4612d7 = _0x1586c3[2];
          _0xad0900 = _0x1586c3[3];
          _0x545d66 = _0x1586c3[4] | 0;
        } else {
          _0x1fea2b += _0x17c085 + "\n";
          continue;
        }
      }
      var _0x1be44f = false;
      if (_0x1df4fd & 8) {
        var _0x1397b8 = emscripten_source_map.originalPositionFor({
          line: _0xad0900,
          column: _0x545d66
        });
        _0x1be44f = _0x1397b8 && _0x1397b8.source;
        if (_0x1be44f) {
          if (_0x1df4fd & 64) {
            _0x1397b8.source = _0x1397b8.source.substring(_0x1397b8.source.replace(/\\/g, "/").lastIndexOf("/") + 1);
          }
          _0x1fea2b += "    at " + _0x37447e + " (" + _0x1397b8.source + ":" + _0x1397b8.line + ":" + _0x1397b8.column + ")\n";
        }
      }
      if (_0x1df4fd & 16 || !_0x1be44f) {
        if (_0x1df4fd & 64) {
          _0x4612d7 = _0x4612d7.substring(_0x4612d7.replace(/\\/g, "/").lastIndexOf("/") + 1);
        }
        _0x1fea2b += (_0x1be44f ? "     = " + _0x37447e : "    at " + _0x37447e) + " (" + _0x4612d7 + ":" + _0xad0900 + ":" + _0x545d66 + ")\n";
      }
      if (_0x1df4fd & 128 && _0x4311a3[0]) {
        if (_0x4311a3[1] == _0x37447e && _0x4311a3[2].length > 0) {
          _0x1fea2b = _0x1fea2b.replace(/\s+$/, "");
          _0x1fea2b += " with values: " + _0x4311a3[1] + _0x4311a3[2] + "\n";
        }
        _0x4311a3 = _0x5f3e7c(_0x4311a3[0]);
      }
    }
    _0x1fea2b = _0x1fea2b.replace(/\s+$/, "");
    return _0x1fea2b;
  }
  function _0x1d864d(_0x56d24a, _0x1a510f) {
    if (_0x56d24a & 24) {
      _0x1a510f = _0x1a510f.replace(/\s+$/, "");
      _0x1a510f += (_0x1a510f.length > 0 ? "\n" : "") + _0x21bf2d(_0x56d24a);
    }
    if (_0x56d24a & 1) {
      if (_0x56d24a & 4) {
        console.error(_0x1a510f);
      } else if (_0x56d24a & 2) {
        console.warn(_0x1a510f);
      } else if (_0x56d24a & 512) {
        console.info(_0x1a510f);
      } else if (_0x56d24a & 256) {
        console.debug(_0x1a510f);
      } else {
        console.log(_0x1a510f);
      }
    } else if (_0x56d24a & 6) {
      _0x1650b6(_0x1a510f);
    } else {
      _0x2ac208(_0x1a510f);
    }
  }
  function _0x2210c0(_0x8b85dc, _0x3b0e77, _0x557fa0) {
    var _0x303ddd = _0x4986bc(_0x3b0e77, _0x557fa0);
    var _0x51e51f = _0x3a7b27(_0x303ddd, 0);
    _0x1d864d(_0x8b85dc, _0x51e51f);
  }
  function _0x148896(_0x2504e9, _0x1345bc) {
    _0x52a98c(_0x2504e9, _0x1345bc || 1);
    throw "longjmp";
  }
  function _0x42bd28(_0x2f02ed, _0x29feda) {
    return _0x148896(_0x2f02ed, _0x29feda);
  }
  function _0x19c4b4(_0x5bbf07, _0x28a0e5, _0x14edc6) {
    _0x950143.copyWithin(_0x5bbf07, _0x28a0e5, _0x28a0e5 + _0x14edc6);
  }
  function _0x178dbb(_0x4e2325, _0x298e24) {
    if (!_0x35ce8f.fullscreenEnabled()) {
      return -1;
    }
    _0x4e2325 = _0x8fb9c4(_0x4e2325);
    if (!_0x4e2325) {
      return -4;
    }
    if (!_0x4e2325.requestFullscreen && !_0x4e2325.webkitRequestFullscreen) {
      return -3;
    }
    var _0x68602c = _0x35ce8f.canPerformEventHandlerRequests();
    if (!_0x68602c) {
      if (_0x298e24.deferUntilInEventHandler) {
        _0x35ce8f.deferCall(_0x399a21, 1, [_0x4e2325, _0x298e24]);
        return 1;
      } else {
        return -2;
      }
    }
    return _0x399a21(_0x4e2325, _0x298e24);
  }
  function _0xc1ba70(_0x33e232, _0x10957f) {
    var _0x169b1b = {
      scaleMode: 0,
      canvasResolutionScaleMode: 0,
      filteringMode: 0,
      deferUntilInEventHandler: _0x10957f,
      canvasResizedCallbackTargetThread: 2
    };
    return _0x178dbb(_0x33e232, _0x169b1b);
  }
  function _0x2a79b5(_0x59e88e, _0x54da08) {
    _0x59e88e = _0x8fb9c4(_0x59e88e);
    if (!_0x59e88e) {
      return -4;
    }
    if (!_0x59e88e.requestPointerLock && !_0x59e88e.msRequestPointerLock) {
      return -1;
    }
    var _0x15f790 = _0x35ce8f.canPerformEventHandlerRequests();
    if (!_0x15f790) {
      if (_0x54da08) {
        _0x35ce8f.deferCall(_0x12c35d, 2, [_0x59e88e]);
        return 1;
      } else {
        return -2;
      }
    }
    return _0x12c35d(_0x59e88e);
  }
  function _0x441704(_0x4eddbe) {
    try {
      _0x16cab9.grow(_0x4eddbe - _0x4bf5a6.byteLength + 65535 >>> 16);
      _0x34cd40(_0x16cab9.buffer);
      return 1;
    } catch (_0x1872e9) {}
  }
  function _0x4d8566(_0xd6ff0f) {
    var _0x575fd9 = _0x950143.length;
    _0xd6ff0f = _0xd6ff0f >>> 0;
    var _0x3eea3e = 2147483648;
    if (_0xd6ff0f > _0x3eea3e) {
      return false;
    }
    for (var _0xf29a1f = 1; _0xf29a1f <= 4; _0xf29a1f *= 2) {
      var _0x28b99b = _0x575fd9 * (1 + 0.2 / _0xf29a1f);
      _0x28b99b = Math.min(_0x28b99b, _0xd6ff0f + 100663296);
      var _0x3e5fcc = Math.min(_0x3eea3e, _0x3a4dfa(Math.max(_0xd6ff0f, _0x28b99b), 65536));
      var _0x2e51be = _0x441704(_0x3e5fcc);
      if (_0x2e51be) {
        return true;
      }
    }
    return false;
  }
  function _0x1a250e() {
    try {
      if (navigator.getGamepads) {
        if (_0x35ce8f.lastGamepadState = navigator.getGamepads()) {
          return 0;
        } else {
          return -1;
        }
      }
    } catch (_0x121526) {
      navigator.getGamepads = null;
    }
    return -1;
  }
  function _0x4fc038(_0xff161c, _0x3c1c88, _0x352755, _0x4925b6, _0x396302, _0x28a938, _0x3d5389) {
    if (!_0x35ce8f.focusEvent) {
      _0x35ce8f.focusEvent = _0x2a1ebe(256);
    }
    function _0x2496aa(_0x5cdc03) {
      var _0x44a095 = _0x5cdc03 || event;
      var _0x17beea = _0x35ce8f.getNodeNameForTarget(_0x44a095.target);
      var _0xb0dbd0 = _0x44a095.target.id ? _0x44a095.target.id : "";
      var _0x4431f8 = _0x35ce8f.focusEvent;
      _0x409466(_0x17beea, _0x4431f8 + 0, 128);
      _0x409466(_0xb0dbd0, _0x4431f8 + 128, 128);
      if (function (_0x2c6c04, _0x2dd145, _0x2e1422) {
        return _0x901ebd.apply(null, [_0x4925b6, _0x2c6c04, _0x2dd145, _0x2e1422]);
      }(_0x396302, _0x4431f8, _0x3c1c88)) {
        _0x44a095.preventDefault();
      }
    }
    var _0x5bc777 = {
      target: _0x8fb9c4(_0xff161c),
      eventTypeString: _0x28a938,
      callbackfunc: _0x4925b6,
      handlerFunc: _0x2496aa,
      useCapture: _0x352755
    };
    _0x35ce8f.registerOrRemoveHandler(_0x5bc777);
  }
  function _0x1f961e(_0x3ec4f8, _0x2f77b7, _0x354b0f, _0x387249, _0x31e86d) {
    _0x4fc038(_0x3ec4f8, _0x2f77b7, _0x354b0f, _0x387249, 12, "blur", _0x31e86d);
    return 0;
  }
  function _0xae8c4(_0x54b133, _0x374e52, _0x16a01c, _0x248d60, _0x35c647) {
    _0x4fc038(_0x54b133, _0x374e52, _0x16a01c, _0x248d60, 13, "focus", _0x35c647);
    return 0;
  }
  function _0x459d95(_0x3f3fb5, _0x3e7555, _0x458e4b, _0xf10d72, _0x248e12, _0x5c2fc6, _0x4ef140) {
    if (!_0x35ce8f.fullscreenChangeEvent) {
      _0x35ce8f.fullscreenChangeEvent = _0x2a1ebe(280);
    }
    function _0x3ea5b4(_0x49a3c1) {
      var _0x3ca45a = _0x49a3c1 || event;
      var _0x386488 = _0x35ce8f.fullscreenChangeEvent;
      _0x327569(_0x386488);
      if (function (_0x91672d, _0x291496, _0x2e5653) {
        return _0x901ebd.apply(null, [_0xf10d72, _0x91672d, _0x291496, _0x2e5653]);
      }(_0x248e12, _0x386488, _0x3e7555)) {
        _0x3ca45a.preventDefault();
      }
    }
    var _0x371628 = {
      target: _0x3f3fb5,
      eventTypeString: _0x5c2fc6,
      callbackfunc: _0xf10d72,
      handlerFunc: _0x3ea5b4,
      useCapture: _0x458e4b
    };
    _0x35ce8f.registerOrRemoveHandler(_0x371628);
  }
  function _0x4d3b2b(_0x523962, _0xa302a5, _0x24192d, _0x11ed3a, _0x8d3de5) {
    if (!_0x35ce8f.fullscreenEnabled()) {
      return -1;
    }
    _0x523962 = _0x8fb9c4(_0x523962);
    if (!_0x523962) {
      return -4;
    }
    _0x459d95(_0x523962, _0xa302a5, _0x24192d, _0x11ed3a, 19, "fullscreenchange", _0x8d3de5);
    _0x459d95(_0x523962, _0xa302a5, _0x24192d, _0x11ed3a, 19, "webkitfullscreenchange", _0x8d3de5);
    return 0;
  }
  function _0x56c7d5(_0x5e15b4, _0x16d4fc, _0x560437, _0x51c5f0, _0x1fd02f, _0x4912f0, _0x34f877) {
    if (!_0x35ce8f.gamepadEvent) {
      _0x35ce8f.gamepadEvent = _0x2a1ebe(1432);
    }
    function _0x21dca1(_0x10f2ef) {
      var _0x2ec40c = _0x10f2ef || event;
      var _0x24994d = _0x35ce8f.gamepadEvent;
      _0x20224b(_0x24994d, _0x2ec40c.gamepad);
      if (function (_0x209830, _0x478e60, _0x4c0e2d) {
        return _0x901ebd.apply(null, [_0x51c5f0, _0x209830, _0x478e60, _0x4c0e2d]);
      }(_0x1fd02f, _0x24994d, _0x16d4fc)) {
        _0x2ec40c.preventDefault();
      }
    }
    var _0xaa1544 = {
      target: _0x8fb9c4(_0x5e15b4),
      allowsDeferredCalls: true,
      eventTypeString: _0x4912f0,
      callbackfunc: _0x51c5f0,
      handlerFunc: _0x21dca1,
      useCapture: _0x560437
    };
    _0x35ce8f.registerOrRemoveHandler(_0xaa1544);
  }
  function _0x50fd31(_0x250f43, _0xf7353f, _0x424892, _0x635c95) {
    if (_0x1a250e()) {
      return -1;
    }
    return _0x56c7d5(2, _0x250f43, _0xf7353f, _0x424892, 26, "gamepadconnected", _0x635c95);
  }
  function _0x316d8b(_0x372916, _0x48f3d2, _0x1e766d, _0x1918ac) {
    if (_0x1a250e()) {
      return -1;
    }
    return _0x56c7d5(2, _0x372916, _0x48f3d2, _0x1e766d, 27, "gamepaddisconnected", _0x1918ac);
  }
  function _0x1be89f(_0x4fe7d7, _0x200785, _0x28eb67) {
    return setInterval(function () {
      (function (_0xad2d38) {
        _0x25d2da.apply(null, [_0x4fe7d7, _0xad2d38]);
      })(_0x28eb67);
    }, _0x200785);
  }
  function _0x236122(_0x3aa541, _0x1022bc, _0x1e307a, _0x4b9542, _0x46a2e3, _0x357ea2, _0x36f2fc) {
    if (!_0x35ce8f.keyEvent) {
      _0x35ce8f.keyEvent = _0x2a1ebe(164);
    }
    function _0x3cc413(_0x1f2dc4) {
      var _0x3784da = _0x35ce8f.keyEvent;
      var _0x13fed9 = _0x3784da >> 2;
      _0x4e86a5[_0x13fed9 + 0] = _0x1f2dc4.location;
      _0x4e86a5[_0x13fed9 + 1] = _0x1f2dc4.ctrlKey;
      _0x4e86a5[_0x13fed9 + 2] = _0x1f2dc4.shiftKey;
      _0x4e86a5[_0x13fed9 + 3] = _0x1f2dc4.altKey;
      _0x4e86a5[_0x13fed9 + 4] = _0x1f2dc4.metaKey;
      _0x4e86a5[_0x13fed9 + 5] = _0x1f2dc4.repeat;
      _0x4e86a5[_0x13fed9 + 6] = _0x1f2dc4.charCode;
      _0x4e86a5[_0x13fed9 + 7] = _0x1f2dc4.keyCode;
      _0x4e86a5[_0x13fed9 + 8] = _0x1f2dc4.which;
      _0x409466(_0x1f2dc4.key || "", _0x3784da + 36, 32);
      _0x409466(_0x1f2dc4.code || "", _0x3784da + 68, 32);
      _0x409466(_0x1f2dc4.char || "", _0x3784da + 100, 32);
      _0x409466(_0x1f2dc4.locale || "", _0x3784da + 132, 32);
      if (function (_0x526fde, _0xcbc23f, _0x395a22) {
        return _0x901ebd.apply(null, [_0x4b9542, _0x526fde, _0xcbc23f, _0x395a22]);
      }(_0x46a2e3, _0x3784da, _0x1022bc)) {
        _0x1f2dc4.preventDefault();
      }
    }
    var _0x3d9c67 = {
      target: _0x8fb9c4(_0x3aa541),
      allowsDeferredCalls: true,
      eventTypeString: _0x357ea2,
      callbackfunc: _0x4b9542,
      handlerFunc: _0x3cc413,
      useCapture: _0x1e307a
    };
    _0x35ce8f.registerOrRemoveHandler(_0x3d9c67);
  }
  function _0x1efd07(_0x3a023e, _0x594e76, _0x11fae2, _0x36b3c3, _0x45ab54) {
    _0x236122(_0x3a023e, _0x594e76, _0x11fae2, _0x36b3c3, 2, "keydown", _0x45ab54);
    return 0;
  }
  function _0x5b528e(_0x39d525, _0x37c55d, _0x248aad, _0x5f2cf0, _0x1a9e89) {
    _0x236122(_0x39d525, _0x37c55d, _0x248aad, _0x5f2cf0, 1, "keypress", _0x1a9e89);
    return 0;
  }
  function _0x5749b0(_0x576491, _0x35e675, _0x1caa84, _0x3b3c40, _0x5a4ba7) {
    _0x236122(_0x576491, _0x35e675, _0x1caa84, _0x3b3c40, 3, "keyup", _0x5a4ba7);
    return 0;
  }
  function _0x2f2337(_0x4c1a18, _0x4d9940, _0x160fb6) {
    function _0x1ab7d1() {
      _0x41b439.call(null, _0x4c1a18);
    }
    _0x4fb6ab(_0x1ab7d1, _0x4d9940, _0x160fb6);
  }
  function _0x4ac021(_0x577999, _0xe3407, _0x5b2076) {
    var _0x1efe27 = _0x577999 >> 2;
    _0x4e86a5[_0x1efe27 + 0] = _0xe3407.screenX;
    _0x4e86a5[_0x1efe27 + 1] = _0xe3407.screenY;
    _0x4e86a5[_0x1efe27 + 2] = _0xe3407.clientX;
    _0x4e86a5[_0x1efe27 + 3] = _0xe3407.clientY;
    _0x4e86a5[_0x1efe27 + 4] = _0xe3407.ctrlKey;
    _0x4e86a5[_0x1efe27 + 5] = _0xe3407.shiftKey;
    _0x4e86a5[_0x1efe27 + 6] = _0xe3407.altKey;
    _0x4e86a5[_0x1efe27 + 7] = _0xe3407.metaKey;
    _0x2b051e[_0x1efe27 * 2 + 16] = _0xe3407.button;
    _0x2b051e[_0x1efe27 * 2 + 17] = _0xe3407.buttons;
    _0x4e86a5[_0x1efe27 + 9] = _0xe3407.movementX;
    _0x4e86a5[_0x1efe27 + 10] = _0xe3407.movementY;
    var _0x28d087 = _0x2d4955(_0x5b2076);
    _0x4e86a5[_0x1efe27 + 11] = _0xe3407.clientX - _0x28d087.left;
    _0x4e86a5[_0x1efe27 + 12] = _0xe3407.clientY - _0x28d087.top;
  }
  function _0x244ca5(_0x5a8b47, _0x27f12d, _0x314372, _0x26bdf1, _0x13f204, _0x48878f, _0x3533db) {
    if (!_0x35ce8f.mouseEvent) {
      _0x35ce8f.mouseEvent = _0x2a1ebe(64);
    }
    _0x5a8b47 = _0x8fb9c4(_0x5a8b47);
    function _0x282f63(_0x12e05b) {
      var _0x12e531 = _0x12e05b || event;
      _0x4ac021(_0x35ce8f.mouseEvent, _0x12e531, _0x5a8b47);
      if (function (_0x5011ef, _0x22bf31, _0x4966f8) {
        return _0x901ebd.apply(null, [_0x26bdf1, _0x5011ef, _0x22bf31, _0x4966f8]);
      }(_0x13f204, _0x35ce8f.mouseEvent, _0x27f12d)) {
        _0x12e531.preventDefault();
      }
    }
    var _0x7d28b = {
      target: _0x5a8b47,
      allowsDeferredCalls: _0x48878f != "mousemove" && _0x48878f != "mouseenter" && _0x48878f != "mouseleave",
      eventTypeString: _0x48878f,
      callbackfunc: _0x26bdf1,
      handlerFunc: _0x282f63,
      useCapture: _0x314372
    };
    _0x35ce8f.registerOrRemoveHandler(_0x7d28b);
  }
  function _0x5e106a(_0x47031a, _0x2d63fd, _0x3356c7, _0x2c4f64, _0x19a9ec) {
    _0x244ca5(_0x47031a, _0x2d63fd, _0x3356c7, _0x2c4f64, 5, "mousedown", _0x19a9ec);
    return 0;
  }
  function _0x31f7b2(_0x4ab7e7, _0x2dbcf3, _0x32909f, _0x4e4f36, _0x5c618e) {
    _0x244ca5(_0x4ab7e7, _0x2dbcf3, _0x32909f, _0x4e4f36, 8, "mousemove", _0x5c618e);
    return 0;
  }
  function _0x51f3f2(_0xe004fd, _0x598305, _0x297909, _0x5e2723, _0x3c5c8e) {
    _0x244ca5(_0xe004fd, _0x598305, _0x297909, _0x5e2723, 6, "mouseup", _0x3c5c8e);
    return 0;
  }
  function _0x4bc7fc(_0x1f5743) {
    var _0x546e5f = document.pointerLockElement || document.mozPointerLockElement || document.webkitPointerLockElement || document.msPointerLockElement;
    var _0x27adf1 = !!_0x546e5f;
    _0x4e86a5[_0x1f5743 >> 2] = _0x27adf1;
    var _0x44a928 = _0x35ce8f.getNodeNameForTarget(_0x546e5f);
    var _0x307e84 = _0x546e5f && _0x546e5f.id ? _0x546e5f.id : "";
    _0x409466(_0x44a928, _0x1f5743 + 4, 128);
    _0x409466(_0x307e84, _0x1f5743 + 132, 128);
  }
  function _0x2d9eaf(_0x4de37c, _0x477cf2, _0x150797, _0x526205, _0x56f90d, _0x2e5e6d, _0x5862c1) {
    if (!_0x35ce8f.pointerlockChangeEvent) {
      _0x35ce8f.pointerlockChangeEvent = _0x2a1ebe(260);
    }
    function _0x102ba5(_0x34d6e4) {
      var _0x31ac6c = _0x34d6e4 || event;
      var _0x371977 = _0x35ce8f.pointerlockChangeEvent;
      _0x4bc7fc(_0x371977);
      if (function (_0x49060a, _0x3b99d5, _0xa7e461) {
        return _0x901ebd.apply(null, [_0x526205, _0x49060a, _0x3b99d5, _0xa7e461]);
      }(_0x56f90d, _0x371977, _0x477cf2)) {
        _0x31ac6c.preventDefault();
      }
    }
    var _0x53feda = {
      target: _0x4de37c,
      eventTypeString: _0x2e5e6d,
      callbackfunc: _0x526205,
      handlerFunc: _0x102ba5,
      useCapture: _0x150797
    };
    _0x35ce8f.registerOrRemoveHandler(_0x53feda);
  }
  function _0x2fb292(_0x2562c5, _0x1d777a, _0x436c59, _0x336114, _0x53c841) {
    if (!document || !document.body || !document.body.requestPointerLock && !document.body.mozRequestPointerLock && !document.body.webkitRequestPointerLock && !document.body.msRequestPointerLock) {
      return -1;
    }
    _0x2562c5 = _0x8fb9c4(_0x2562c5);
    if (!_0x2562c5) {
      return -4;
    }
    _0x2d9eaf(_0x2562c5, _0x1d777a, _0x436c59, _0x336114, 20, "pointerlockchange", _0x53c841);
    _0x2d9eaf(_0x2562c5, _0x1d777a, _0x436c59, _0x336114, 20, "mozpointerlockchange", _0x53c841);
    _0x2d9eaf(_0x2562c5, _0x1d777a, _0x436c59, _0x336114, 20, "webkitpointerlockchange", _0x53c841);
    _0x2d9eaf(_0x2562c5, _0x1d777a, _0x436c59, _0x336114, 20, "mspointerlockchange", _0x53c841);
    return 0;
  }
  function _0x90fc8(_0x5af3c7, _0xd8b476, _0x44bdd8, _0x38ac4c, _0x559781, _0x14c03b, _0x53e42e) {
    if (!_0x35ce8f.touchEvent) {
      _0x35ce8f.touchEvent = _0x2a1ebe(1684);
    }
    _0x5af3c7 = _0x8fb9c4(_0x5af3c7);
    function _0x3dedd1(_0xbf38b6) {
      var _0x1ad9fd;
      var _0x1d3db2 = {};
      var _0x176c62 = _0xbf38b6.touches;
      for (var _0x4fa8a1 = 0; _0x4fa8a1 < _0x176c62.length; ++_0x4fa8a1) {
        _0x1ad9fd = _0x176c62[_0x4fa8a1];
        _0x1ad9fd.isChanged = _0x1ad9fd.onTarget = 0;
        _0x1d3db2[_0x1ad9fd.identifier] = _0x1ad9fd;
      }
      for (var _0x4fa8a1 = 0; _0x4fa8a1 < _0xbf38b6.changedTouches.length; ++_0x4fa8a1) {
        _0x1ad9fd = _0xbf38b6.changedTouches[_0x4fa8a1];
        _0x1ad9fd.isChanged = 1;
        _0x1d3db2[_0x1ad9fd.identifier] = _0x1ad9fd;
      }
      for (var _0x4fa8a1 = 0; _0x4fa8a1 < _0xbf38b6.targetTouches.length; ++_0x4fa8a1) {
        _0x1d3db2[_0xbf38b6.targetTouches[_0x4fa8a1].identifier].onTarget = 1;
      }
      var _0x33aa84 = _0x35ce8f.touchEvent;
      var _0x5ac908 = _0x33aa84 >> 2;
      _0x4e86a5[_0x5ac908 + 1] = _0xbf38b6.ctrlKey;
      _0x4e86a5[_0x5ac908 + 2] = _0xbf38b6.shiftKey;
      _0x4e86a5[_0x5ac908 + 3] = _0xbf38b6.altKey;
      _0x4e86a5[_0x5ac908 + 4] = _0xbf38b6.metaKey;
      _0x5ac908 += 5;
      var _0x26accd = _0x2d4955(_0x5af3c7);
      var _0x554541 = 0;
      for (var _0x4fa8a1 in _0x1d3db2) {
        var _0x1ad9fd = _0x1d3db2[_0x4fa8a1];
        _0x4e86a5[_0x5ac908 + 0] = _0x1ad9fd.identifier;
        _0x4e86a5[_0x5ac908 + 1] = _0x1ad9fd.screenX;
        _0x4e86a5[_0x5ac908 + 2] = _0x1ad9fd.screenY;
        _0x4e86a5[_0x5ac908 + 3] = _0x1ad9fd.clientX;
        _0x4e86a5[_0x5ac908 + 4] = _0x1ad9fd.clientY;
        _0x4e86a5[_0x5ac908 + 5] = _0x1ad9fd.pageX;
        _0x4e86a5[_0x5ac908 + 6] = _0x1ad9fd.pageY;
        _0x4e86a5[_0x5ac908 + 7] = _0x1ad9fd.isChanged;
        _0x4e86a5[_0x5ac908 + 8] = _0x1ad9fd.onTarget;
        _0x4e86a5[_0x5ac908 + 9] = _0x1ad9fd.clientX - _0x26accd.left;
        _0x4e86a5[_0x5ac908 + 10] = _0x1ad9fd.clientY - _0x26accd.top;
        _0x5ac908 += 13;
        if (++_0x554541 > 31) {
          break;
        }
      }
      _0x4e86a5[_0x33aa84 >> 2] = _0x554541;
      if (function (_0x19e022, _0x587936, _0x146004) {
        return _0x901ebd.apply(null, [_0x38ac4c, _0x19e022, _0x587936, _0x146004]);
      }(_0x559781, _0x33aa84, _0xd8b476)) {
        _0xbf38b6.preventDefault();
      }
    }
    var _0x3ddf02 = {
      target: _0x5af3c7,
      allowsDeferredCalls: _0x14c03b == "touchstart" || _0x14c03b == "touchend",
      eventTypeString: _0x14c03b,
      callbackfunc: _0x38ac4c,
      handlerFunc: _0x3dedd1,
      useCapture: _0x44bdd8
    };
    _0x35ce8f.registerOrRemoveHandler(_0x3ddf02);
  }
  function _0x477943(_0x392d42, _0x5156dd, _0x3770d3, _0x540214, _0x391c52) {
    _0x90fc8(_0x392d42, _0x5156dd, _0x3770d3, _0x540214, 25, "touchcancel", _0x391c52);
    return 0;
  }
  function _0x5a54de(_0x5d59d4, _0x41c10b, _0x1fc8fb, _0x64546f, _0x52c384) {
    _0x90fc8(_0x5d59d4, _0x41c10b, _0x1fc8fb, _0x64546f, 23, "touchend", _0x52c384);
    return 0;
  }
  function _0x237f84(_0x5de563, _0x267acd, _0x4e67ad, _0x22e997, _0x5e63d7) {
    _0x90fc8(_0x5de563, _0x267acd, _0x4e67ad, _0x22e997, 24, "touchmove", _0x5e63d7);
    return 0;
  }
  function _0x332c23(_0x5a0b2b, _0x1b7727, _0x71f1ec, _0x3aab20, _0x25c64f) {
    _0x90fc8(_0x5a0b2b, _0x1b7727, _0x71f1ec, _0x3aab20, 22, "touchstart", _0x25c64f);
    return 0;
  }
  function _0xe2ec56(_0x14cc28, _0x3e8b06, _0x23aedd, _0x277501, _0x5773c2, _0x193e16, _0x29a0ed) {
    if (!_0x35ce8f.wheelEvent) {
      _0x35ce8f.wheelEvent = _0x2a1ebe(96);
    }
    function _0x17b71f(_0x3ecc59) {
      var _0x128a03 = _0x3ecc59 || event;
      var _0x3be840 = _0x35ce8f.wheelEvent;
      _0x4ac021(_0x3be840, _0x128a03, _0x14cc28);
      _0x492f87[_0x3be840 + 64 >> 3] = _0x128a03.deltaX;
      _0x492f87[_0x3be840 + 72 >> 3] = _0x128a03.deltaY;
      _0x492f87[_0x3be840 + 80 >> 3] = _0x128a03.deltaZ;
      _0x4e86a5[_0x3be840 + 88 >> 2] = _0x128a03.deltaMode;
      if (function (_0xd9ebc3, _0x168cdc, _0x3d4df1) {
        return _0x901ebd.apply(null, [_0x277501, _0xd9ebc3, _0x168cdc, _0x3d4df1]);
      }(_0x5773c2, _0x3be840, _0x3e8b06)) {
        _0x128a03.preventDefault();
      }
    }
    var _0x596094 = {
      target: _0x14cc28,
      allowsDeferredCalls: true,
      eventTypeString: _0x193e16,
      callbackfunc: _0x277501,
      handlerFunc: _0x17b71f,
      useCapture: _0x23aedd
    };
    _0x35ce8f.registerOrRemoveHandler(_0x596094);
  }
  function _0x276651(_0x5b3f24, _0x1fa2a9, _0x51a158, _0xe46557, _0x377a29) {
    _0x5b3f24 = _0x8fb9c4(_0x5b3f24);
    if (typeof _0x5b3f24.onwheel !== "undefined") {
      _0xe2ec56(_0x5b3f24, _0x1fa2a9, _0x51a158, _0xe46557, 9, "wheel", _0x377a29);
      return 0;
    } else {
      return -1;
    }
  }
  function _0x5941db(_0x4afd61) {
    var _0xa78cb1 = _0xd45210();
    while (_0xd45210() - _0xa78cb1 < _0x4afd61) {}
  }
  function _0x3be2e6(_0x4548a3) {
    var _0x2474c0 = _0x4548a3.getExtension("ANGLE_instanced_arrays");
    if (_0x2474c0) {
      _0x4548a3.vertexAttribDivisor = function (_0x285ae7, _0xace030) {
        _0x2474c0.vertexAttribDivisorANGLE(_0x285ae7, _0xace030);
      };
      _0x4548a3.drawArraysInstanced = function (_0x445919, _0x4f7874, _0x21e01d, _0x4b66d1) {
        _0x2474c0.drawArraysInstancedANGLE(_0x445919, _0x4f7874, _0x21e01d, _0x4b66d1);
      };
      _0x4548a3.drawElementsInstanced = function (_0x22a4af, _0x1183c5, _0x3289da, _0x7c3e13, _0x10cc34) {
        _0x2474c0.drawElementsInstancedANGLE(_0x22a4af, _0x1183c5, _0x3289da, _0x7c3e13, _0x10cc34);
      };
      return 1;
    }
  }
  function _0x2dd272(_0x39c0b8) {
    var _0x5e3df1 = _0x39c0b8.getExtension("OES_vertex_array_object");
    if (_0x5e3df1) {
      _0x39c0b8.createVertexArray = function () {
        return _0x5e3df1.createVertexArrayOES();
      };
      _0x39c0b8.deleteVertexArray = function (_0x4a8a43) {
        _0x5e3df1.deleteVertexArrayOES(_0x4a8a43);
      };
      _0x39c0b8.bindVertexArray = function (_0x31c4ed) {
        _0x5e3df1.bindVertexArrayOES(_0x31c4ed);
      };
      _0x39c0b8.isVertexArray = function (_0x7a9da8) {
        return _0x5e3df1.isVertexArrayOES(_0x7a9da8);
      };
      return 1;
    }
  }
  function _0x983e8d(_0x3003e7) {
    var _0x50630e = _0x3003e7.getExtension("WEBGL_draw_buffers");
    if (_0x50630e) {
      _0x3003e7.drawBuffers = function (_0x5a6f87, _0x221c9d) {
        _0x50630e.drawBuffersWEBGL(_0x5a6f87, _0x221c9d);
      };
      return 1;
    }
  }
  function _0x9f933e(_0x27e057) {
    return !!(_0x27e057.dibvbi = _0x27e057.getExtension("WEBGL_draw_instanced_base_vertex_base_instance"));
  }
  function _0x388dee(_0x5465b0) {
    return !!(_0x5465b0.mdibvbi = _0x5465b0.getExtension("WEBGL_multi_draw_instanced_base_vertex_base_instance"));
  }
  function _0x1fcb5b(_0x1c30d0) {
    return !!(_0x1c30d0.multiDrawWebgl = _0x1c30d0.getExtension("WEBGL_multi_draw"));
  }
  var _0x58939e = {
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
    recordError: function _0x264f3f(_0x3cffad) {
      if (!_0x58939e.lastError) {
        _0x58939e.lastError = _0x3cffad;
      }
    },
    getNewId: function (_0x3f41bc) {
      var _0x1c0c84 = _0x58939e.counter++;
      for (var _0xabde3b = _0x3f41bc.length; _0xabde3b < _0x1c0c84; _0xabde3b++) {
        _0x3f41bc[_0xabde3b] = null;
      }
      return _0x1c0c84;
    },
    MAX_TEMP_BUFFER_SIZE: 2097152,
    numTempVertexBuffersPerSize: 64,
    log2ceilLookup: function (_0x308061) {
      return 32 - Math.clz32(_0x308061 === 0 ? 0 : _0x308061 - 1);
    },
    generateTempBuffers: function (_0x4be86f, _0x4e56c5) {
      var _0x417f67 = _0x58939e.log2ceilLookup(_0x58939e.MAX_TEMP_BUFFER_SIZE);
      _0x4e56c5.tempVertexBufferCounters1 = [];
      _0x4e56c5.tempVertexBufferCounters2 = [];
      _0x4e56c5.tempVertexBufferCounters1.length = _0x4e56c5.tempVertexBufferCounters2.length = _0x417f67 + 1;
      _0x4e56c5.tempVertexBuffers1 = [];
      _0x4e56c5.tempVertexBuffers2 = [];
      _0x4e56c5.tempVertexBuffers1.length = _0x4e56c5.tempVertexBuffers2.length = _0x417f67 + 1;
      _0x4e56c5.tempIndexBuffers = [];
      _0x4e56c5.tempIndexBuffers.length = _0x417f67 + 1;
      for (var _0x25e123 = 0; _0x25e123 <= _0x417f67; ++_0x25e123) {
        _0x4e56c5.tempIndexBuffers[_0x25e123] = null;
        _0x4e56c5.tempVertexBufferCounters1[_0x25e123] = _0x4e56c5.tempVertexBufferCounters2[_0x25e123] = 0;
        var _0x526483 = _0x58939e.numTempVertexBuffersPerSize;
        _0x4e56c5.tempVertexBuffers1[_0x25e123] = [];
        _0x4e56c5.tempVertexBuffers2[_0x25e123] = [];
        var _0x4ebf3a = _0x4e56c5.tempVertexBuffers1[_0x25e123];
        var _0x4cffcd = _0x4e56c5.tempVertexBuffers2[_0x25e123];
        _0x4ebf3a.length = _0x4cffcd.length = _0x526483;
        for (var _0x5b15d3 = 0; _0x5b15d3 < _0x526483; ++_0x5b15d3) {
          _0x4ebf3a[_0x5b15d3] = _0x4cffcd[_0x5b15d3] = null;
        }
      }
      if (_0x4be86f) {
        _0x4e56c5.tempQuadIndexBuffer = _0x149f8b.createBuffer();
        _0x4e56c5.GLctx.bindBuffer(34963, _0x4e56c5.tempQuadIndexBuffer);
        var _0x5bd651 = _0x58939e.MAX_TEMP_BUFFER_SIZE >> 1;
        var _0x370539 = new Uint16Array(_0x5bd651);
        var _0x25e123 = 0;
        var _0x9337e5 = 0;
        while (1) {
          _0x370539[_0x25e123++] = _0x9337e5;
          if (_0x25e123 >= _0x5bd651) {
            break;
          }
          _0x370539[_0x25e123++] = _0x9337e5 + 1;
          if (_0x25e123 >= _0x5bd651) {
            break;
          }
          _0x370539[_0x25e123++] = _0x9337e5 + 2;
          if (_0x25e123 >= _0x5bd651) {
            break;
          }
          _0x370539[_0x25e123++] = _0x9337e5;
          if (_0x25e123 >= _0x5bd651) {
            break;
          }
          _0x370539[_0x25e123++] = _0x9337e5 + 2;
          if (_0x25e123 >= _0x5bd651) {
            break;
          }
          _0x370539[_0x25e123++] = _0x9337e5 + 3;
          if (_0x25e123 >= _0x5bd651) {
            break;
          }
          _0x9337e5 += 4;
        }
        _0x4e56c5.GLctx.bufferData(34963, _0x370539, 35044);
        _0x4e56c5.GLctx.bindBuffer(34963, null);
      }
    },
    getTempVertexBuffer: function _0x39078f(_0x1e36d2) {
      var _0x580047 = _0x58939e.log2ceilLookup(_0x1e36d2);
      var _0x11b503 = _0x58939e.currentContext.tempVertexBuffers1[_0x580047];
      var _0x105231 = _0x58939e.currentContext.tempVertexBufferCounters1[_0x580047];
      _0x58939e.currentContext.tempVertexBufferCounters1[_0x580047] = _0x58939e.currentContext.tempVertexBufferCounters1[_0x580047] + 1 & _0x58939e.numTempVertexBuffersPerSize - 1;
      var _0x191c47 = _0x11b503[_0x105231];
      if (_0x191c47) {
        return _0x191c47;
      }
      var _0x25ce1d = _0x149f8b.getParameter(34964);
      _0x11b503[_0x105231] = _0x149f8b.createBuffer();
      _0x149f8b.bindBuffer(34962, _0x11b503[_0x105231]);
      _0x149f8b.bufferData(34962, 1 << _0x580047, 35048);
      _0x149f8b.bindBuffer(34962, _0x25ce1d);
      return _0x11b503[_0x105231];
    },
    getTempIndexBuffer: function _0x5b16c5(_0x237d18) {
      var _0x5c343d = _0x58939e.log2ceilLookup(_0x237d18);
      var _0x18b6b3 = _0x58939e.currentContext.tempIndexBuffers[_0x5c343d];
      if (_0x18b6b3) {
        return _0x18b6b3;
      }
      var _0x31f353 = _0x149f8b.getParameter(34965);
      _0x58939e.currentContext.tempIndexBuffers[_0x5c343d] = _0x149f8b.createBuffer();
      _0x149f8b.bindBuffer(34963, _0x58939e.currentContext.tempIndexBuffers[_0x5c343d]);
      _0x149f8b.bufferData(34963, 1 << _0x5c343d, 35048);
      _0x149f8b.bindBuffer(34963, _0x31f353);
      return _0x58939e.currentContext.tempIndexBuffers[_0x5c343d];
    },
    newRenderingFrameStarted: function _0x49529d() {
      if (!_0x58939e.currentContext) {
        return;
      }
      var _0x3998f7 = _0x58939e.currentContext.tempVertexBuffers1;
      _0x58939e.currentContext.tempVertexBuffers1 = _0x58939e.currentContext.tempVertexBuffers2;
      _0x58939e.currentContext.tempVertexBuffers2 = _0x3998f7;
      _0x3998f7 = _0x58939e.currentContext.tempVertexBufferCounters1;
      _0x58939e.currentContext.tempVertexBufferCounters1 = _0x58939e.currentContext.tempVertexBufferCounters2;
      _0x58939e.currentContext.tempVertexBufferCounters2 = _0x3998f7;
      var _0xef4dc6 = _0x58939e.log2ceilLookup(_0x58939e.MAX_TEMP_BUFFER_SIZE);
      for (var _0x1865dd = 0; _0x1865dd <= _0xef4dc6; ++_0x1865dd) {
        _0x58939e.currentContext.tempVertexBufferCounters1[_0x1865dd] = 0;
      }
    },
    getSource: function (_0x1e1fdb, _0x205f42, _0x41a343, _0x2daab4) {
      var _0xfb532f = "";
      for (var _0x1944d8 = 0; _0x1944d8 < _0x205f42; ++_0x1944d8) {
        var _0x1cc5b8 = _0x2daab4 ? _0x4e86a5[_0x2daab4 + _0x1944d8 * 4 >> 2] : -1;
        _0xfb532f += _0x5c2e85(_0x4e86a5[_0x41a343 + _0x1944d8 * 4 >> 2], _0x1cc5b8 < 0 ? undefined : _0x1cc5b8);
      }
      return _0xfb532f;
    },
    calcBufLength: function _0x4b28d5(_0x328369, _0x51fa66, _0x59d1ce, _0x5d1e69) {
      if (_0x59d1ce > 0) {
        return _0x5d1e69 * _0x59d1ce;
      }
      var _0x27a2d = _0x58939e.byteSizeByType[_0x51fa66 - _0x58939e.byteSizeByTypeRoot];
      return _0x328369 * _0x27a2d * _0x5d1e69;
    },
    usedTempBuffers: [],
    preDrawHandleClientVertexAttribBindings: function _0x43ab7b(_0x424301) {
      _0x58939e.resetBufferBinding = false;
      for (var _0x2d348f = 0; _0x2d348f < _0x58939e.currentContext.maxVertexAttribs; ++_0x2d348f) {
        var _0xf83470 = _0x58939e.currentContext.clientBuffers[_0x2d348f];
        if (!_0xf83470.clientside || !_0xf83470.enabled) {
          continue;
        }
        _0x58939e.resetBufferBinding = true;
        var _0x5a54e4 = _0x58939e.calcBufLength(_0xf83470.size, _0xf83470.type, _0xf83470.stride, _0x424301);
        var _0x1626af = _0x58939e.getTempVertexBuffer(_0x5a54e4);
        _0x149f8b.bindBuffer(34962, _0x1626af);
        _0x149f8b.bufferSubData(34962, 0, _0x950143.subarray(_0xf83470.ptr, _0xf83470.ptr + _0x5a54e4));
        _0xf83470.vertexAttribPointerAdaptor.call(_0x149f8b, _0x2d348f, _0xf83470.size, _0xf83470.type, _0xf83470.normalized, _0xf83470.stride, 0);
      }
    },
    postDrawHandleClientVertexAttribBindings: function _0x17b19f() {
      if (_0x58939e.resetBufferBinding) {
        _0x149f8b.bindBuffer(34962, _0x58939e.buffers[_0x149f8b.currentArrayBufferBinding]);
      }
    },
    createContext: function (_0x2ce841, _0x1e0b0b) {
      if (!_0x2ce841.getContextSafariWebGL2Fixed) {
        _0x2ce841.getContextSafariWebGL2Fixed = _0x2ce841.getContext;
        _0x2ce841.getContext = function (_0x68dfd6, _0x20353d) {
          var _0x1018c1 = _0x2ce841.getContextSafariWebGL2Fixed(_0x68dfd6, _0x20353d);
          if (_0x68dfd6 == "webgl" == _0x1018c1 instanceof WebGLRenderingContext) {
            return _0x1018c1;
          } else {
            return null;
          }
        };
      }
      var _0x155699 = _0x1e0b0b.majorVersion > 1 ? _0x2ce841.getContext("webgl2", _0x1e0b0b) : _0x2ce841.getContext("webgl", _0x1e0b0b);
      if (!_0x155699) {
        return 0;
      }
      var _0x4b6b8f = _0x58939e.registerContext(_0x155699, _0x1e0b0b);
      return _0x4b6b8f;
    },
    registerContext: function (_0x3a4815, _0x500a0b) {
      var _0x4f78d0 = _0x58939e.getNewId(_0x58939e.contexts);
      var _0x10214e = {
        handle: _0x4f78d0,
        attributes: _0x500a0b,
        version: _0x500a0b.majorVersion,
        GLctx: _0x3a4815
      };
      if (_0x3a4815.canvas) {
        _0x3a4815.canvas.GLctxObject = _0x10214e;
      }
      _0x58939e.contexts[_0x4f78d0] = _0x10214e;
      if (typeof _0x500a0b.enableExtensionsByDefault === "undefined" || _0x500a0b.enableExtensionsByDefault) {
        _0x58939e.initExtensions(_0x10214e);
      }
      _0x10214e.maxVertexAttribs = _0x10214e.GLctx.getParameter(34921);
      _0x10214e.clientBuffers = [];
      for (var _0x59d289 = 0; _0x59d289 < _0x10214e.maxVertexAttribs; _0x59d289++) {
        _0x10214e.clientBuffers[_0x59d289] = {
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
      _0x58939e.generateTempBuffers(false, _0x10214e);
      return _0x4f78d0;
    },
    makeContextCurrent: function (_0x5ca65c) {
      _0x58939e.currentContext = _0x58939e.contexts[_0x5ca65c];
      _0x289557.ctx = _0x149f8b = _0x58939e.currentContext && _0x58939e.currentContext.GLctx;
      return !_0x5ca65c || !!_0x149f8b;
    },
    getContext: function (_0x410279) {
      return _0x58939e.contexts[_0x410279];
    },
    deleteContext: function (_0x57cc32) {
      if (_0x58939e.currentContext === _0x58939e.contexts[_0x57cc32]) {
        _0x58939e.currentContext = null;
      }
      if (typeof _0x35ce8f === "object") {
        _0x35ce8f.removeAllHandlersOnTarget(_0x58939e.contexts[_0x57cc32].GLctx.canvas);
      }
      if (_0x58939e.contexts[_0x57cc32] && _0x58939e.contexts[_0x57cc32].GLctx.canvas) {
        _0x58939e.contexts[_0x57cc32].GLctx.canvas.GLctxObject = undefined;
      }
      _0x58939e.contexts[_0x57cc32] = null;
    },
    initExtensions: function (_0x25b61a) {
      if (!_0x25b61a) {
        _0x25b61a = _0x58939e.currentContext;
      }
      if (_0x25b61a.initExtensionsDone) {
        return;
      }
      _0x25b61a.initExtensionsDone = true;
      var _0x3a9610 = _0x25b61a.GLctx;
      _0x3be2e6(_0x3a9610);
      _0x2dd272(_0x3a9610);
      _0x983e8d(_0x3a9610);
      _0x9f933e(_0x3a9610);
      _0x388dee(_0x3a9610);
      if (_0x25b61a.version >= 2) {
        _0x3a9610.disjointTimerQueryExt = _0x3a9610.getExtension("EXT_disjoint_timer_query_webgl2");
      }
      if (_0x25b61a.version < 2 || !_0x3a9610.disjointTimerQueryExt) {
        _0x3a9610.disjointTimerQueryExt = _0x3a9610.getExtension("EXT_disjoint_timer_query");
      }
      _0x1fcb5b(_0x3a9610);
      var _0x33c9b7 = _0x3a9610.getSupportedExtensions() || [];
      _0x33c9b7.forEach(function (_0x13915e) {
        if (!_0x13915e.includes("lose_context") && !_0x13915e.includes("debug")) {
          _0x3a9610.getExtension(_0x13915e);
        }
      });
    }
  };
  var _0x34de0e = ["default", "low-power", "high-performance"];
  function _0x148195(_0x1af38a, _0x507309) {
    var _0x2f3f7a = _0x507309 >> 2;
    var _0x927494 = _0x4e86a5[_0x2f3f7a + 6];
    var _0x45167f = {
      alpha: !!_0x4e86a5[_0x2f3f7a + 0],
      depth: !!_0x4e86a5[_0x2f3f7a + 1],
      stencil: !!_0x4e86a5[_0x2f3f7a + 2],
      antialias: !!_0x4e86a5[_0x2f3f7a + 3],
      premultipliedAlpha: !!_0x4e86a5[_0x2f3f7a + 4],
      preserveDrawingBuffer: !!_0x4e86a5[_0x2f3f7a + 5],
      powerPreference: _0x34de0e[_0x927494],
      failIfMajorPerformanceCaveat: !!_0x4e86a5[_0x2f3f7a + 7],
      majorVersion: _0x4e86a5[_0x2f3f7a + 8],
      minorVersion: _0x4e86a5[_0x2f3f7a + 9],
      enableExtensionsByDefault: _0x4e86a5[_0x2f3f7a + 10],
      explicitSwapControl: _0x4e86a5[_0x2f3f7a + 11],
      proxyContextToMainThread: _0x4e86a5[_0x2f3f7a + 12],
      renderViaOffscreenBackBuffer: _0x4e86a5[_0x2f3f7a + 13]
    };
    var _0x3b4100 = _0x55b5b3(_0x1af38a);
    if (!_0x3b4100) {
      return 0;
    }
    if (_0x45167f.explicitSwapControl) {
      return 0;
    }
    var _0x562f17 = _0x58939e.createContext(_0x3b4100, _0x45167f);
    return _0x562f17;
  }
  function _0x412a7b(_0x53d9b3, _0x5ce71d) {
    return _0x148195(_0x53d9b3, _0x5ce71d);
  }
  function _0x66c453() {
    if (_0x58939e.currentContext) {
      return _0x58939e.currentContext.handle;
    } else {
      return 0;
    }
  }
  function _0x59bf46() {
    return _0x66c453();
  }
  _0x289557._emscripten_webgl_get_current_context = _0x59bf46;
  function _0x4a16e8(_0x6dba97) {
    var _0xdf0a8c = _0x58939e.makeContextCurrent(_0x6dba97);
    if (_0xdf0a8c) {
      return 0;
    } else {
      return -5;
    }
  }
  _0x289557._emscripten_webgl_make_context_current = _0x4a16e8;
  function _0x3aee41(_0x53284e) {
    if (_0x58939e.currentContext == _0x53284e) {
      _0x58939e.currentContext = 0;
    }
    _0x58939e.deleteContext(_0x53284e);
  }
  function _0x125266(_0x565f24, _0x41d8a6) {
    var _0x5cc56c = _0x58939e.getContext(_0x565f24);
    var _0x46d1be = _0x5c2e85(_0x41d8a6);
    if (_0x46d1be.startsWith("GL_")) {
      _0x46d1be = _0x46d1be.substr(3);
    }
    if (_0x46d1be == "ANGLE_instanced_arrays") {
      _0x3be2e6(_0x149f8b);
    }
    if (_0x46d1be == "OES_vertex_array_object") {
      _0x2dd272(_0x149f8b);
    }
    if (_0x46d1be == "WEBGL_draw_buffers") {
      _0x983e8d(_0x149f8b);
    }
    if (_0x46d1be == "WEBGL_draw_instanced_base_vertex_base_instance") {
      _0x9f933e(_0x149f8b);
    }
    if (_0x46d1be == "WEBGL_multi_draw_instanced_base_vertex_base_instance") {
      _0x388dee(_0x149f8b);
    }
    if (_0x46d1be == "WEBGL_multi_draw") {
      _0x1fcb5b(_0x149f8b);
    }
    var _0x1bb63c = _0x5cc56c.GLctx.getExtension(_0x46d1be);
    return !!_0x1bb63c;
  }
  function _0x1b02a0(_0x457b05) {
    var _0x4bed1d = _0x457b05 >> 2;
    for (var _0x5ad296 = 0; _0x5ad296 < 14; ++_0x5ad296) {
      _0x4e86a5[_0x4bed1d + _0x5ad296] = 0;
    }
    _0x4e86a5[_0x4bed1d + 0] = _0x4e86a5[_0x4bed1d + 1] = _0x4e86a5[_0x4bed1d + 3] = _0x4e86a5[_0x4bed1d + 4] = _0x4e86a5[_0x4bed1d + 8] = _0x4e86a5[_0x4bed1d + 10] = 1;
  }
  var _0x831567 = {};
  function _0x4b0ecd() {
    return _0x368e09 || "./this.program";
  }
  function _0x46e8b6() {
    if (!_0x46e8b6.strings) {
      var _0x2a2453 = (typeof navigator === "object" && navigator.languages && navigator.languages[0] || "C").replace("-", "_") + ".UTF-8";
      var _0x54ae5e = {
        USER: "web_user",
        LOGNAME: "web_user",
        PATH: "/",
        PWD: "/",
        HOME: "/home/web_user",
        LANG: _0x2a2453,
        _: _0x4b0ecd()
      };
      for (var _0x466077 in _0x831567) {
        _0x54ae5e[_0x466077] = _0x831567[_0x466077];
      }
      var _0x411cdd = [];
      for (var _0x466077 in _0x54ae5e) {
        _0x411cdd.push(_0x466077 + "=" + _0x54ae5e[_0x466077]);
      }
      _0x46e8b6.strings = _0x411cdd;
    }
    return _0x46e8b6.strings;
  }
  function _0x332e16(_0x155cd1, _0xe61b37) {
    try {
      var _0x891b5f = 0;
      _0x46e8b6().forEach(function (_0x4bd0be, _0x51df27) {
        var _0x2ec6bb = _0xe61b37 + _0x891b5f;
        _0x4e86a5[_0x155cd1 + _0x51df27 * 4 >> 2] = _0x2ec6bb;
        _0x312aa6(_0x4bd0be, _0x2ec6bb);
        _0x891b5f += _0x4bd0be.length + 1;
      });
      return 0;
    } catch (_0x1dbfad) {
      if (typeof _0x2840b9 === "undefined" || !(_0x1dbfad instanceof _0x2840b9.ErrnoError)) {
        _0x48d521(_0x1dbfad);
      }
      return _0x1dbfad.errno;
    }
  }
  function _0x20a9fc(_0x1708e8, _0x4aa92c) {
    try {
      var _0x2fd1b5 = _0x46e8b6();
      _0x4e86a5[_0x1708e8 >> 2] = _0x2fd1b5.length;
      var _0x3b4e8c = 0;
      _0x2fd1b5.forEach(function (_0x1ae9ba) {
        _0x3b4e8c += _0x1ae9ba.length + 1;
      });
      _0x4e86a5[_0x4aa92c >> 2] = _0x3b4e8c;
      return 0;
    } catch (_0x3f49b4) {
      if (typeof _0x2840b9 === "undefined" || !(_0x3f49b4 instanceof _0x2840b9.ErrnoError)) {
        _0x48d521(_0x3f49b4);
      }
      return _0x3f49b4.errno;
    }
  }
  function _0x54a059(_0x36cc80) {
    try {
      var _0x2c033d = _0x24c16a.getStreamFromFD(_0x36cc80);
      _0x2840b9.close(_0x2c033d);
      return 0;
    } catch (_0x105d47) {
      if (typeof _0x2840b9 === "undefined" || !(_0x105d47 instanceof _0x2840b9.ErrnoError)) {
        _0x48d521(_0x105d47);
      }
      return _0x105d47.errno;
    }
  }
  function _0x1ed1bd(_0x456758, _0x59127f) {
    try {
      var _0x1dc87e = _0x24c16a.getStreamFromFD(_0x456758);
      var _0x3abb46 = _0x1dc87e.tty ? 2 : _0x2840b9.isDir(_0x1dc87e.mode) ? 3 : _0x2840b9.isLink(_0x1dc87e.mode) ? 7 : 4;
      _0x9c4a59[_0x59127f >> 0] = _0x3abb46;
      return 0;
    } catch (_0x55e306) {
      if (typeof _0x2840b9 === "undefined" || !(_0x55e306 instanceof _0x2840b9.ErrnoError)) {
        _0x48d521(_0x55e306);
      }
      return _0x55e306.errno;
    }
  }
  function _0x1ee5fc(_0xa95c17, _0x1d9bc8, _0xddb6ef, _0x4f83f1) {
    try {
      var _0x5ccd96 = _0x24c16a.getStreamFromFD(_0xa95c17);
      var _0x3d9d19 = _0x24c16a.doReadv(_0x5ccd96, _0x1d9bc8, _0xddb6ef);
      _0x4e86a5[_0x4f83f1 >> 2] = _0x3d9d19;
      return 0;
    } catch (_0x1df1e8) {
      if (typeof _0x2840b9 === "undefined" || !(_0x1df1e8 instanceof _0x2840b9.ErrnoError)) {
        _0x48d521(_0x1df1e8);
      }
      return _0x1df1e8.errno;
    }
  }
  function _0x57b772(_0x4dc1c0, _0x26568a, _0x1717c3, _0x63d84e, _0x5a1c6b) {
    try {
      var _0x285a6b = _0x24c16a.getStreamFromFD(_0x4dc1c0);
      var _0x191d6e = 4294967296;
      var _0x43db8d = _0x1717c3 * _0x191d6e + (_0x26568a >>> 0);
      var _0x400668 = 9007199254740992;
      if (_0x43db8d <= -_0x400668 || _0x43db8d >= _0x400668) {
        return -61;
      }
      _0x2840b9.llseek(_0x285a6b, _0x43db8d, _0x63d84e);
      _0x4e1161 = [_0x285a6b.position >>> 0, (_0x3a5e98 = _0x285a6b.position, +Math.abs(_0x3a5e98) >= 1 ? _0x3a5e98 > 0 ? (Math.min(+Math.floor(_0x3a5e98 / 4294967296), 4294967295) | 0) >>> 0 : ~~+Math.ceil((_0x3a5e98 - +(~~_0x3a5e98 >>> 0)) / 4294967296) >>> 0 : 0)];
      _0x4e86a5[_0x5a1c6b >> 2] = _0x4e1161[0];
      _0x4e86a5[_0x5a1c6b + 4 >> 2] = _0x4e1161[1];
      if (_0x285a6b.getdents && _0x43db8d === 0 && _0x63d84e === 0) {
        _0x285a6b.getdents = null;
      }
      return 0;
    } catch (_0x35d82f) {
      if (typeof _0x2840b9 === "undefined" || !(_0x35d82f instanceof _0x2840b9.ErrnoError)) {
        _0x48d521(_0x35d82f);
      }
      return _0x35d82f.errno;
    }
  }
  function _0x1454c6(_0x4f0504, _0x4bb9a6, _0x4e37fd, _0x13533e) {
    try {
      var _0x483bf1 = _0x24c16a.getStreamFromFD(_0x4f0504);
      var _0x2babc5 = _0x24c16a.doWritev(_0x483bf1, _0x4bb9a6, _0x4e37fd);
      _0x4e86a5[_0x13533e >> 2] = _0x2babc5;
      return 0;
    } catch (_0x41cb1e) {
      if (typeof _0x2840b9 === "undefined" || !(_0x41cb1e instanceof _0x2840b9.ErrnoError)) {
        _0x48d521(_0x41cb1e);
      }
      return _0x41cb1e.errno;
    }
  }
  function _0x54976b(_0x1eb5c3, _0xa6a79f) {
    return 0;
  }
  function _0x2c504d() {
    return _0x3b29f2();
  }
  function _0x1dfb25(_0x5266d2, _0x1ffca3, _0x54ea6a, _0x4056dd) {
    var _0x4975a7 = 0;
    var _0x3f49bd = 0;
    var _0x2aa8d3 = 0;
    var _0x3c2a75 = 0;
    var _0x522eb7 = 0;
    var _0x19d944 = 0;
    var _0x3002e5;
    function _0x299231(_0x4016ed, _0x5709f1, _0x858af, _0x4a9f94, _0x5ca4fc, _0x4181f5) {
      var _0x2525b4;
      var _0x156aca;
      var _0x58e77d;
      var _0x5bfa9b;
      _0x156aca = _0x4016ed === 10 ? 28 : 16;
      _0x5ca4fc = _0x4016ed === 10 ? _0x42b771(_0x5ca4fc) : _0x4277be(_0x5ca4fc);
      _0x2525b4 = _0x2a1ebe(_0x156aca);
      _0x5bfa9b = _0x4e78dd(_0x2525b4, _0x4016ed, _0x5ca4fc, _0x4181f5);
      _0x4eb180(!_0x5bfa9b);
      _0x58e77d = _0x2a1ebe(32);
      _0x4e86a5[_0x58e77d + 4 >> 2] = _0x4016ed;
      _0x4e86a5[_0x58e77d + 8 >> 2] = _0x5709f1;
      _0x4e86a5[_0x58e77d + 12 >> 2] = _0x858af;
      _0x4e86a5[_0x58e77d + 24 >> 2] = _0x4a9f94;
      _0x4e86a5[_0x58e77d + 20 >> 2] = _0x2525b4;
      if (_0x4016ed === 10) {
        _0x4e86a5[_0x58e77d + 16 >> 2] = 28;
      } else {
        _0x4e86a5[_0x58e77d + 16 >> 2] = 16;
      }
      _0x4e86a5[_0x58e77d + 28 >> 2] = 0;
      return _0x58e77d;
    }
    if (_0x54ea6a) {
      _0x2aa8d3 = _0x4e86a5[_0x54ea6a >> 2];
      _0x3c2a75 = _0x4e86a5[_0x54ea6a + 4 >> 2];
      _0x522eb7 = _0x4e86a5[_0x54ea6a + 8 >> 2];
      _0x19d944 = _0x4e86a5[_0x54ea6a + 12 >> 2];
    }
    if (_0x522eb7 && !_0x19d944) {
      _0x19d944 = _0x522eb7 === 2 ? 17 : 6;
    }
    if (!_0x522eb7 && _0x19d944) {
      _0x522eb7 = _0x19d944 === 17 ? 2 : 1;
    }
    if (_0x19d944 === 0) {
      _0x19d944 = 6;
    }
    if (_0x522eb7 === 0) {
      _0x522eb7 = 1;
    }
    if (!_0x5266d2 && !_0x1ffca3) {
      return -2;
    }
    if (_0x2aa8d3 & ~1087) {
      return -1;
    }
    if (_0x54ea6a !== 0 && _0x4e86a5[_0x54ea6a >> 2] & 2 && !_0x5266d2) {
      return -1;
    }
    if (_0x2aa8d3 & 32) {
      return -2;
    }
    if (_0x522eb7 !== 0 && _0x522eb7 !== 1 && _0x522eb7 !== 2) {
      return -7;
    }
    if (_0x3c2a75 !== 0 && _0x3c2a75 !== 2 && _0x3c2a75 !== 10) {
      return -6;
    }
    if (_0x1ffca3) {
      _0x1ffca3 = _0x5c2e85(_0x1ffca3);
      _0x3f49bd = parseInt(_0x1ffca3, 10);
      if (isNaN(_0x3f49bd)) {
        if (_0x2aa8d3 & 1024) {
          return -2;
        }
        return -8;
      }
    }
    if (!_0x5266d2) {
      if (_0x3c2a75 === 0) {
        _0x3c2a75 = 2;
      }
      if ((_0x2aa8d3 & 1) === 0) {
        if (_0x3c2a75 === 2) {
          _0x4975a7 = _0x2c862e(2130706433);
        } else {
          _0x4975a7 = [0, 0, 0, 1];
        }
      }
      _0x3002e5 = _0x299231(_0x3c2a75, _0x522eb7, _0x19d944, null, _0x4975a7, _0x3f49bd);
      _0x4e86a5[_0x4056dd >> 2] = _0x3002e5;
      return 0;
    }
    _0x5266d2 = _0x5c2e85(_0x5266d2);
    _0x4975a7 = _0x292c0f(_0x5266d2);
    if (_0x4975a7 !== null) {
      if (_0x3c2a75 === 0 || _0x3c2a75 === 2) {
        _0x3c2a75 = 2;
      } else if (_0x3c2a75 === 10 && _0x2aa8d3 & 8) {
        _0x4975a7 = [0, 0, _0x2c862e(65535), _0x4975a7];
        _0x3c2a75 = 10;
      } else {
        return -2;
      }
    } else {
      _0x4975a7 = _0x3da04d(_0x5266d2);
      if (_0x4975a7 !== null) {
        if (_0x3c2a75 === 0 || _0x3c2a75 === 10) {
          _0x3c2a75 = 10;
        } else {
          return -2;
        }
      }
    }
    if (_0x4975a7 != null) {
      _0x3002e5 = _0x299231(_0x3c2a75, _0x522eb7, _0x19d944, _0x5266d2, _0x4975a7, _0x3f49bd);
      _0x4e86a5[_0x4056dd >> 2] = _0x3002e5;
      return 0;
    }
    if (_0x2aa8d3 & 4) {
      return -2;
    }
    _0x5266d2 = _0x21dd1f.lookup_name(_0x5266d2);
    _0x4975a7 = _0x292c0f(_0x5266d2);
    if (_0x3c2a75 === 0) {
      _0x3c2a75 = 2;
    } else if (_0x3c2a75 === 10) {
      _0x4975a7 = [0, 0, _0x2c862e(65535), _0x4975a7];
    }
    _0x3002e5 = _0x299231(_0x3c2a75, _0x522eb7, _0x19d944, null, _0x4975a7, _0x3f49bd);
    _0x4e86a5[_0x4056dd >> 2] = _0x3002e5;
    return 0;
  }
  function _0x1b019c(_0x31e27f) {
    var _0x4507a4 = _0x2a1ebe(20);
    var _0x173a81 = _0x2a1ebe(_0x31e27f.length + 1);
    _0x409466(_0x31e27f, _0x173a81, _0x31e27f.length + 1);
    _0x4e86a5[_0x4507a4 >> 2] = _0x173a81;
    var _0x5d4b5b = _0x2a1ebe(4);
    _0x4e86a5[_0x5d4b5b >> 2] = 0;
    _0x4e86a5[_0x4507a4 + 4 >> 2] = _0x5d4b5b;
    var _0x20ce22 = 2;
    _0x4e86a5[_0x4507a4 + 8 >> 2] = _0x20ce22;
    _0x4e86a5[_0x4507a4 + 12 >> 2] = 4;
    var _0x282ad5 = _0x2a1ebe(12);
    _0x4e86a5[_0x282ad5 >> 2] = _0x282ad5 + 8;
    _0x4e86a5[_0x282ad5 + 4 >> 2] = 0;
    _0x4e86a5[_0x282ad5 + 8 >> 2] = _0x292c0f(_0x21dd1f.lookup_name(_0x31e27f));
    _0x4e86a5[_0x4507a4 + 16 >> 2] = _0x282ad5;
    return _0x4507a4;
  }
  function _0x9e3a67(_0x26673e, _0x1f8b26, _0x4f3a60) {
    if (_0x4f3a60 !== 2) {
      _0x50999a(5);
      return null;
    }
    _0x26673e = _0x4e86a5[_0x26673e >> 2];
    var _0x575b91 = _0x4277be(_0x26673e);
    var _0x1ece94 = _0x21dd1f.lookup_addr(_0x575b91);
    if (_0x1ece94) {
      _0x575b91 = _0x1ece94;
    }
    return _0x1b019c(_0x575b91);
  }
  function _0x3affed(_0x3b02bb) {
    return _0x1b019c(_0x5c2e85(_0x3b02bb));
  }
  function _0x20f67e(_0x132136, _0x12f42c, _0x4f24b6, _0x4e74f0, _0x57fc3f, _0x2656b0, _0x385bff) {
    var _0x2bafe3 = _0x43e741(_0x132136, _0x12f42c);
    if (_0x2bafe3.errno) {
      return -6;
    }
    var _0x20e4bc = _0x2bafe3.port;
    var _0x5efaa1 = _0x2bafe3.addr;
    var _0x5555a3 = false;
    if (_0x4f24b6 && _0x4e74f0) {
      var _0xb8c6d7;
      if (_0x385bff & 1 || !(_0xb8c6d7 = _0x21dd1f.lookup_addr(_0x5efaa1))) {
        if (_0x385bff & 8) {
          return -2;
        }
      } else {
        _0x5efaa1 = _0xb8c6d7;
      }
      var _0x1df11b = _0x409466(_0x5efaa1, _0x4f24b6, _0x4e74f0);
      if (_0x1df11b + 1 >= _0x4e74f0) {
        _0x5555a3 = true;
      }
    }
    if (_0x57fc3f && _0x2656b0) {
      _0x20e4bc = "" + _0x20e4bc;
      var _0x1df11b = _0x409466(_0x20e4bc, _0x57fc3f, _0x2656b0);
      if (_0x1df11b + 1 >= _0x2656b0) {
        _0x5555a3 = true;
      }
    }
    if (_0x5555a3) {
      return -12;
    }
    return 0;
  }
  function _0x4b03fb() {
    throw "getpwuid: TODO";
  }
  function _0x236b4a(_0x302979) {
    var _0x7e4839 = Date.now();
    _0x4e86a5[_0x302979 >> 2] = _0x7e4839 / 1000 | 0;
    _0x4e86a5[_0x302979 + 4 >> 2] = _0x7e4839 % 1000 * 1000 | 0;
    return 0;
  }
  function _0x66a8a1(_0x49bd03) {
    _0x149f8b.activeTexture(_0x49bd03);
  }
  function _0x5f5263(_0x39ced3, _0x19ce16) {
    _0x39ced3 = _0x58939e.programs[_0x39ced3];
    _0x19ce16 = _0x58939e.shaders[_0x19ce16];
    _0x39ced3[_0x19ce16.shaderType] = _0x19ce16;
    _0x149f8b.attachShader(_0x39ced3, _0x19ce16);
  }
  function _0x16928b(_0x205ae0, _0x18b823) {
    _0x149f8b.beginQuery(_0x205ae0, _0x58939e.queries[_0x18b823]);
  }
  function _0x34e0af(_0x4148c3) {
    _0x149f8b.beginTransformFeedback(_0x4148c3);
  }
  function _0x274ec5(_0x36fa0f, _0x496431, _0xa6f4b9) {
    _0x149f8b.bindAttribLocation(_0x58939e.programs[_0x36fa0f], _0x496431, _0x5c2e85(_0xa6f4b9));
  }
  function _0x3ecb45(_0x285b4b, _0x1ca077) {
    if (_0x285b4b == 34962) {
      _0x149f8b.currentArrayBufferBinding = _0x1ca077;
    } else if (_0x285b4b == 34963) {
      _0x149f8b.currentElementArrayBufferBinding = _0x1ca077;
    }
    if (_0x285b4b == 35051) {
      _0x149f8b.currentPixelPackBufferBinding = _0x1ca077;
    } else if (_0x285b4b == 35052) {
      _0x149f8b.currentPixelUnpackBufferBinding = _0x1ca077;
    }
    _0x149f8b.bindBuffer(_0x285b4b, _0x58939e.buffers[_0x1ca077]);
  }
  function _0x5908e3(_0x5ed043, _0x486b66, _0x51c0eb) {
    _0x149f8b.bindBufferBase(_0x5ed043, _0x486b66, _0x58939e.buffers[_0x51c0eb]);
  }
  function _0x401e45(_0x3eb8dd, _0x27b79c, _0x147612, _0x4b0aa3, _0x203d2f) {
    _0x149f8b.bindBufferRange(_0x3eb8dd, _0x27b79c, _0x58939e.buffers[_0x147612], _0x4b0aa3, _0x203d2f);
  }
  function _0x39ab63(_0xf70229, _0x2cfdbd) {
    _0x149f8b.bindFramebuffer(_0xf70229, _0x58939e.framebuffers[_0x2cfdbd]);
  }
  function _0x115c4c(_0x236734, _0x16ff3e) {
    _0x149f8b.bindRenderbuffer(_0x236734, _0x58939e.renderbuffers[_0x16ff3e]);
  }
  function _0x42d341(_0x153b73, _0x5b82c8) {
    _0x149f8b.bindSampler(_0x153b73, _0x58939e.samplers[_0x5b82c8]);
  }
  function _0x1f6d45(_0x42e3e2, _0x2667b9) {
    _0x149f8b.bindTexture(_0x42e3e2, _0x58939e.textures[_0x2667b9]);
  }
  function _0x20404d(_0x5af0fe, _0x446e29) {
    _0x149f8b.bindTransformFeedback(_0x5af0fe, _0x58939e.transformFeedbacks[_0x446e29]);
  }
  function _0x2d0168(_0x264067) {
    _0x149f8b.bindVertexArray(_0x58939e.vaos[_0x264067]);
    var _0x27fc83 = _0x149f8b.getParameter(34965);
    _0x149f8b.currentElementArrayBufferBinding = _0x27fc83 ? _0x27fc83.name | 0 : 0;
  }
  function _0x2f7c34(_0x44469d) {
    _0x149f8b.blendEquation(_0x44469d);
  }
  function _0x3eaf28(_0x1087d0, _0x4688d1) {
    _0x149f8b.blendEquationSeparate(_0x1087d0, _0x4688d1);
  }
  function _0x10e49d(_0x52f115, _0x451e7c, _0x22c70c, _0x230b1f) {
    _0x149f8b.blendFuncSeparate(_0x52f115, _0x451e7c, _0x22c70c, _0x230b1f);
  }
  function _0x1f053a(_0x6f2c6a, _0x38c214, _0x272b72, _0x298030, _0x49b575, _0x46240d, _0x2ab329, _0x16a4c3, _0x3cfac3, _0x37715e) {
    _0x149f8b.blitFramebuffer(_0x6f2c6a, _0x38c214, _0x272b72, _0x298030, _0x49b575, _0x46240d, _0x2ab329, _0x16a4c3, _0x3cfac3, _0x37715e);
  }
  function _0x2e7875(_0x5ce2c3, _0x15d73e, _0x341e73, _0x218565) {
    if (_0x58939e.currentContext.version >= 2) {
      if (_0x341e73) {
        _0x149f8b.bufferData(_0x5ce2c3, _0x950143, _0x218565, _0x341e73, _0x15d73e);
      } else {
        _0x149f8b.bufferData(_0x5ce2c3, _0x15d73e, _0x218565);
      }
    } else {
      _0x149f8b.bufferData(_0x5ce2c3, _0x341e73 ? _0x950143.subarray(_0x341e73, _0x341e73 + _0x15d73e) : _0x15d73e, _0x218565);
    }
  }
  function _0xe11f3(_0x278236, _0x12b62d, _0x9388ae, _0x4465bc) {
    if (_0x58939e.currentContext.version >= 2) {
      _0x149f8b.bufferSubData(_0x278236, _0x12b62d, _0x950143, _0x4465bc, _0x9388ae);
      return;
    }
    _0x149f8b.bufferSubData(_0x278236, _0x12b62d, _0x950143.subarray(_0x4465bc, _0x4465bc + _0x9388ae));
  }
  function _0x3618fd(_0x465856) {
    return _0x149f8b.checkFramebufferStatus(_0x465856);
  }
  function _0x3b37da(_0x48621f) {
    _0x149f8b.clear(_0x48621f);
  }
  function _0x555360(_0x1bf4d7, _0x2a350e, _0x54fe6e, _0x123306) {
    _0x149f8b.clearBufferfi(_0x1bf4d7, _0x2a350e, _0x54fe6e, _0x123306);
  }
  function _0x18b6ac(_0x269176, _0x1a5f0c, _0x1e3259) {
    _0x149f8b.clearBufferfv(_0x269176, _0x1a5f0c, _0x5e6300, _0x1e3259 >> 2);
  }
  function _0x586200(_0x33077c, _0x472f9d, _0x43e25d) {
    _0x149f8b.clearBufferuiv(_0x33077c, _0x472f9d, _0x4cad96, _0x43e25d >> 2);
  }
  function _0x5a908f(_0x481f5f, _0x15fcea, _0x39a6b5, _0x32c9a4) {
    _0x149f8b.clearColor(_0x481f5f, _0x15fcea, _0x39a6b5, _0x32c9a4);
  }
  function _0x55fa7e(_0x5e33cd) {
    _0x149f8b.clearDepth(_0x5e33cd);
  }
  function _0x16f06c(_0x531d4a) {
    _0x149f8b.clearStencil(_0x531d4a);
  }
  function _0x9b8c56(_0x6ebe2a, _0x4da6ab, _0x5dd856, _0x46d732) {
    return _0x149f8b.clientWaitSync(_0x58939e.syncs[_0x6ebe2a], _0x4da6ab, _0x4c9011(_0x5dd856, _0x46d732));
  }
  function _0x9172d9(_0x14258a, _0x5bc823, _0x311ded, _0x47aecc) {
    _0x149f8b.colorMask(!!_0x14258a, !!_0x5bc823, !!_0x311ded, !!_0x47aecc);
  }
  function _0x4a54c8(_0x3a7bdf) {
    _0x149f8b.compileShader(_0x58939e.shaders[_0x3a7bdf]);
  }
  function _0x242306(_0x1afde9, _0x2782f1, _0x1cadd5, _0x275a0c, _0x2c17b3, _0x237381, _0x108129, _0x37709c) {
    if (_0x58939e.currentContext.version >= 2) {
      if (_0x149f8b.currentPixelUnpackBufferBinding) {
        _0x149f8b.compressedTexImage2D(_0x1afde9, _0x2782f1, _0x1cadd5, _0x275a0c, _0x2c17b3, _0x237381, _0x108129, _0x37709c);
      } else {
        _0x149f8b.compressedTexImage2D(_0x1afde9, _0x2782f1, _0x1cadd5, _0x275a0c, _0x2c17b3, _0x237381, _0x950143, _0x37709c, _0x108129);
      }
      return;
    }
    _0x149f8b.compressedTexImage2D(_0x1afde9, _0x2782f1, _0x1cadd5, _0x275a0c, _0x2c17b3, _0x237381, _0x37709c ? _0x950143.subarray(_0x37709c, _0x37709c + _0x108129) : null);
  }
  function _0x51dea0(_0x22001c, _0x43866a, _0x414013, _0x44ea09, _0x415ed7, _0x38e934, _0x5ef33d, _0x21016e, _0xf156bb) {
    if (_0x149f8b.currentPixelUnpackBufferBinding) {
      _0x149f8b.compressedTexImage3D(_0x22001c, _0x43866a, _0x414013, _0x44ea09, _0x415ed7, _0x38e934, _0x5ef33d, _0x21016e, _0xf156bb);
    } else {
      _0x149f8b.compressedTexImage3D(_0x22001c, _0x43866a, _0x414013, _0x44ea09, _0x415ed7, _0x38e934, _0x5ef33d, _0x950143, _0xf156bb, _0x21016e);
    }
  }
  function _0x2c861b(_0x50624f, _0x545035, _0x19a922, _0x23add3, _0x17798c, _0xe69146, _0x934744, _0x396e94, _0x37bd79) {
    if (_0x58939e.currentContext.version >= 2) {
      if (_0x149f8b.currentPixelUnpackBufferBinding) {
        _0x149f8b.compressedTexSubImage2D(_0x50624f, _0x545035, _0x19a922, _0x23add3, _0x17798c, _0xe69146, _0x934744, _0x396e94, _0x37bd79);
      } else {
        _0x149f8b.compressedTexSubImage2D(_0x50624f, _0x545035, _0x19a922, _0x23add3, _0x17798c, _0xe69146, _0x934744, _0x950143, _0x37bd79, _0x396e94);
      }
      return;
    }
    _0x149f8b.compressedTexSubImage2D(_0x50624f, _0x545035, _0x19a922, _0x23add3, _0x17798c, _0xe69146, _0x934744, _0x37bd79 ? _0x950143.subarray(_0x37bd79, _0x37bd79 + _0x396e94) : null);
  }
  function _0x5975a7(_0x53f6cf, _0x29e596, _0x61cab5, _0x15140c, _0x393c40, _0x4b8843, _0x4dc588, _0x223be3, _0x2a4c1e, _0x5d17af, _0x56c7b5) {
    if (_0x149f8b.currentPixelUnpackBufferBinding) {
      _0x149f8b.compressedTexSubImage3D(_0x53f6cf, _0x29e596, _0x61cab5, _0x15140c, _0x393c40, _0x4b8843, _0x4dc588, _0x223be3, _0x2a4c1e, _0x5d17af, _0x56c7b5);
    } else {
      _0x149f8b.compressedTexSubImage3D(_0x53f6cf, _0x29e596, _0x61cab5, _0x15140c, _0x393c40, _0x4b8843, _0x4dc588, _0x223be3, _0x2a4c1e, _0x950143, _0x56c7b5, _0x5d17af);
    }
  }
  function _0x1e425d(_0x1b5056, _0x354aca, _0x174ef5, _0x39a898, _0x380b52) {
    _0x149f8b.copyBufferSubData(_0x1b5056, _0x354aca, _0x174ef5, _0x39a898, _0x380b52);
  }
  function _0x1909f3(_0x44a4ce, _0xcb05f6, _0x18d011, _0x13ae7a, _0x1008bd, _0x1794ee, _0x525db2, _0x2a8629) {
    _0x149f8b.copyTexImage2D(_0x44a4ce, _0xcb05f6, _0x18d011, _0x13ae7a, _0x1008bd, _0x1794ee, _0x525db2, _0x2a8629);
  }
  function _0x3c3122(_0x4bcd1d, _0x1d993d, _0x2780f2, _0x379c23, _0x2d5aca, _0x19d269, _0x251763, _0x52e07c) {
    _0x149f8b.copyTexSubImage2D(_0x4bcd1d, _0x1d993d, _0x2780f2, _0x379c23, _0x2d5aca, _0x19d269, _0x251763, _0x52e07c);
  }
  function _0x1a00c5() {
    var _0x50d585 = _0x58939e.getNewId(_0x58939e.programs);
    var _0x1ce9b7 = _0x149f8b.createProgram();
    _0x1ce9b7.name = _0x50d585;
    _0x1ce9b7.maxUniformLength = _0x1ce9b7.maxAttributeLength = _0x1ce9b7.maxUniformBlockNameLength = 0;
    _0x1ce9b7.uniformIdCounter = 1;
    _0x58939e.programs[_0x50d585] = _0x1ce9b7;
    return _0x50d585;
  }
  function _0x4977a8(_0x3056d5) {
    var _0x1f4d12 = _0x58939e.getNewId(_0x58939e.shaders);
    _0x58939e.shaders[_0x1f4d12] = _0x149f8b.createShader(_0x3056d5);
    _0x58939e.shaders[_0x1f4d12].shaderType = _0x3056d5 & 1 ? "vs" : "fs";
    return _0x1f4d12;
  }
  function _0x35a51c(_0x1d779a) {
    _0x149f8b.cullFace(_0x1d779a);
  }
  function _0x3928aa(_0x43a5ac, _0x5e373c) {
    for (var _0xf0e68f = 0; _0xf0e68f < _0x43a5ac; _0xf0e68f++) {
      var _0x5c5ed9 = _0x4e86a5[_0x5e373c + _0xf0e68f * 4 >> 2];
      var _0x38248c = _0x58939e.buffers[_0x5c5ed9];
      if (!_0x38248c) {
        continue;
      }
      _0x149f8b.deleteBuffer(_0x38248c);
      _0x38248c.name = 0;
      _0x58939e.buffers[_0x5c5ed9] = null;
      if (_0x5c5ed9 == _0x149f8b.currentArrayBufferBinding) {
        _0x149f8b.currentArrayBufferBinding = 0;
      }
      if (_0x5c5ed9 == _0x149f8b.currentElementArrayBufferBinding) {
        _0x149f8b.currentElementArrayBufferBinding = 0;
      }
      if (_0x5c5ed9 == _0x149f8b.currentPixelPackBufferBinding) {
        _0x149f8b.currentPixelPackBufferBinding = 0;
      }
      if (_0x5c5ed9 == _0x149f8b.currentPixelUnpackBufferBinding) {
        _0x149f8b.currentPixelUnpackBufferBinding = 0;
      }
    }
  }
  function _0x3c2733(_0x108c17, _0x55ecea) {
    for (var _0x42432c = 0; _0x42432c < _0x108c17; ++_0x42432c) {
      var _0x5b9c60 = _0x4e86a5[_0x55ecea + _0x42432c * 4 >> 2];
      var _0x4e253f = _0x58939e.framebuffers[_0x5b9c60];
      if (!_0x4e253f) {
        continue;
      }
      _0x149f8b.deleteFramebuffer(_0x4e253f);
      _0x4e253f.name = 0;
      _0x58939e.framebuffers[_0x5b9c60] = null;
    }
  }
  function _0x244f77(_0x35762c) {
    if (!_0x35762c) {
      return;
    }
    var _0x55fb6a = _0x58939e.programs[_0x35762c];
    if (!_0x55fb6a) {
      _0x58939e.recordError(1281);
      return;
    }
    _0x149f8b.deleteProgram(_0x55fb6a);
    _0x55fb6a.name = 0;
    _0x58939e.programs[_0x35762c] = null;
  }
  function _0x705822(_0x486c73, _0x5d592d) {
    for (var _0x4505b2 = 0; _0x4505b2 < _0x486c73; _0x4505b2++) {
      var _0x5aa9cf = _0x4e86a5[_0x5d592d + _0x4505b2 * 4 >> 2];
      var _0x129cf6 = _0x58939e.queries[_0x5aa9cf];
      if (!_0x129cf6) {
        continue;
      }
      _0x149f8b.deleteQuery(_0x129cf6);
      _0x58939e.queries[_0x5aa9cf] = null;
    }
  }
  function _0x31fb25(_0x447924, _0x5088d8) {
    for (var _0x46733d = 0; _0x46733d < _0x447924; _0x46733d++) {
      var _0x4c4c99 = _0x4e86a5[_0x5088d8 + _0x46733d * 4 >> 2];
      var _0x2f9ae1 = _0x58939e.renderbuffers[_0x4c4c99];
      if (!_0x2f9ae1) {
        continue;
      }
      _0x149f8b.deleteRenderbuffer(_0x2f9ae1);
      _0x2f9ae1.name = 0;
      _0x58939e.renderbuffers[_0x4c4c99] = null;
    }
  }
  function _0x10b4e7(_0x4f1f59, _0x49e153) {
    for (var _0xdfeaf7 = 0; _0xdfeaf7 < _0x4f1f59; _0xdfeaf7++) {
      var _0x3bf19e = _0x4e86a5[_0x49e153 + _0xdfeaf7 * 4 >> 2];
      var _0xc5772f = _0x58939e.samplers[_0x3bf19e];
      if (!_0xc5772f) {
        continue;
      }
      _0x149f8b.deleteSampler(_0xc5772f);
      _0xc5772f.name = 0;
      _0x58939e.samplers[_0x3bf19e] = null;
    }
  }
  function _0x1e03bd(_0x4d7a8f) {
    if (!_0x4d7a8f) {
      return;
    }
    var _0x5a0016 = _0x58939e.shaders[_0x4d7a8f];
    if (!_0x5a0016) {
      _0x58939e.recordError(1281);
      return;
    }
    _0x149f8b.deleteShader(_0x5a0016);
    _0x58939e.shaders[_0x4d7a8f] = null;
  }
  function _0x279301(_0x31c03b) {
    if (!_0x31c03b) {
      return;
    }
    var _0x4707bd = _0x58939e.syncs[_0x31c03b];
    if (!_0x4707bd) {
      _0x58939e.recordError(1281);
      return;
    }
    _0x149f8b.deleteSync(_0x4707bd);
    _0x4707bd.name = 0;
    _0x58939e.syncs[_0x31c03b] = null;
  }
  function _0x48516d(_0x15d202, _0x1b2a98) {
    for (var _0x1b44e8 = 0; _0x1b44e8 < _0x15d202; _0x1b44e8++) {
      var _0x40515f = _0x4e86a5[_0x1b2a98 + _0x1b44e8 * 4 >> 2];
      var _0x15f757 = _0x58939e.textures[_0x40515f];
      if (!_0x15f757) {
        continue;
      }
      _0x149f8b.deleteTexture(_0x15f757);
      _0x15f757.name = 0;
      _0x58939e.textures[_0x40515f] = null;
    }
  }
  function _0x340ea9(_0x1357e7, _0x2d119e) {
    for (var _0xc2edc2 = 0; _0xc2edc2 < _0x1357e7; _0xc2edc2++) {
      var _0x327771 = _0x4e86a5[_0x2d119e + _0xc2edc2 * 4 >> 2];
      var _0x3aec5f = _0x58939e.transformFeedbacks[_0x327771];
      if (!_0x3aec5f) {
        continue;
      }
      _0x149f8b.deleteTransformFeedback(_0x3aec5f);
      _0x3aec5f.name = 0;
      _0x58939e.transformFeedbacks[_0x327771] = null;
    }
  }
  function _0x3b319c(_0x1f6b99, _0x54d173) {
    for (var _0xcf7038 = 0; _0xcf7038 < _0x1f6b99; _0xcf7038++) {
      var _0x55a5c2 = _0x4e86a5[_0x54d173 + _0xcf7038 * 4 >> 2];
      _0x149f8b.deleteVertexArray(_0x58939e.vaos[_0x55a5c2]);
      _0x58939e.vaos[_0x55a5c2] = null;
    }
  }
  function _0x30a943(_0x1a5ead) {
    _0x149f8b.depthFunc(_0x1a5ead);
  }
  function _0x96c0c1(_0x59a02b) {
    _0x149f8b.depthMask(!!_0x59a02b);
  }
  function _0xce2436(_0x334248, _0x1d3791) {
    _0x149f8b.detachShader(_0x58939e.programs[_0x334248], _0x58939e.shaders[_0x1d3791]);
  }
  function _0x4d4866(_0x6f1f95) {
    _0x149f8b.disable(_0x6f1f95);
  }
  function _0x423171(_0x551f23) {
    var _0x3e9a74 = _0x58939e.currentContext.clientBuffers[_0x551f23];
    _0x3e9a74.enabled = false;
    _0x149f8b.disableVertexAttribArray(_0x551f23);
  }
  function _0x14899e(_0xee9c12, _0x2e5f54, _0x3a49b9) {
    _0x58939e.preDrawHandleClientVertexAttribBindings(_0x2e5f54 + _0x3a49b9);
    _0x149f8b.drawArrays(_0xee9c12, _0x2e5f54, _0x3a49b9);
    _0x58939e.postDrawHandleClientVertexAttribBindings();
  }
  function _0x27e061(_0x16b548, _0x116e97, _0x3a5677, _0x4be911) {
    _0x149f8b.drawArraysInstanced(_0x16b548, _0x116e97, _0x3a5677, _0x4be911);
  }
  var _0x36ffe0 = [];
  function _0x56ef2e(_0x587920, _0x3ebd79) {
    var _0x4084c3 = _0x36ffe0[_0x587920];
    for (var _0x2d0050 = 0; _0x2d0050 < _0x587920; _0x2d0050++) {
      _0x4084c3[_0x2d0050] = _0x4e86a5[_0x3ebd79 + _0x2d0050 * 4 >> 2];
    }
    _0x149f8b.drawBuffers(_0x4084c3);
  }
  function _0x37085f(_0x1a88a2, _0x37ba12, _0xe461e0, _0x5d9fa9) {
    var _0x22bd6e;
    if (!_0x149f8b.currentElementArrayBufferBinding) {
      var _0x196278 = _0x58939e.calcBufLength(1, _0xe461e0, 0, _0x37ba12);
      _0x22bd6e = _0x58939e.getTempIndexBuffer(_0x196278);
      _0x149f8b.bindBuffer(34963, _0x22bd6e);
      _0x149f8b.bufferSubData(34963, 0, _0x950143.subarray(_0x5d9fa9, _0x5d9fa9 + _0x196278));
      _0x5d9fa9 = 0;
    }
    _0x58939e.preDrawHandleClientVertexAttribBindings(_0x37ba12);
    _0x149f8b.drawElements(_0x1a88a2, _0x37ba12, _0xe461e0, _0x5d9fa9);
    _0x58939e.postDrawHandleClientVertexAttribBindings(_0x37ba12);
    if (!_0x149f8b.currentElementArrayBufferBinding) {
      _0x149f8b.bindBuffer(34963, null);
    }
  }
  function _0x33e874(_0x33a8ba, _0x3f8f84, _0x59f058, _0x427701, _0x5d532b) {
    _0x149f8b.drawElementsInstanced(_0x33a8ba, _0x3f8f84, _0x59f058, _0x427701, _0x5d532b);
  }
  function _0x2ec3c3(_0x3b6c47) {
    _0x149f8b.enable(_0x3b6c47);
  }
  function _0x3beec1(_0x3d73dd) {
    var _0x532290 = _0x58939e.currentContext.clientBuffers[_0x3d73dd];
    _0x532290.enabled = true;
    _0x149f8b.enableVertexAttribArray(_0x3d73dd);
  }
  function _0x14d1c5(_0xa79eb2) {
    _0x149f8b.endQuery(_0xa79eb2);
  }
  function _0xa1047e() {
    _0x149f8b.endTransformFeedback();
  }
  function _0x4a2174(_0x3c1d49, _0x46e9ed) {
    var _0x4f2b7d = _0x149f8b.fenceSync(_0x3c1d49, _0x46e9ed);
    if (_0x4f2b7d) {
      var _0x361858 = _0x58939e.getNewId(_0x58939e.syncs);
      _0x4f2b7d.name = _0x361858;
      _0x58939e.syncs[_0x361858] = _0x4f2b7d;
      return _0x361858;
    } else {
      return 0;
    }
  }
  function _0x3e17b9() {
    _0x149f8b.finish();
  }
  function _0x29ce54() {
    _0x149f8b.flush();
  }
  function _0x299f4e(_0x525782) {
    switch (_0x525782) {
      case 34962:
        _0x525782 = 34964;
        break;
      case 34963:
        _0x525782 = 34965;
        break;
      case 35051:
        _0x525782 = 35053;
        break;
      case 35052:
        _0x525782 = 35055;
        break;
      case 35982:
        _0x525782 = 35983;
        break;
      case 36662:
        _0x525782 = 36662;
        break;
      case 36663:
        _0x525782 = 36663;
        break;
      case 35345:
        _0x525782 = 35368;
        break;
    }
    var _0x1ece3e = _0x149f8b.getParameter(_0x525782);
    if (_0x1ece3e) {
      return _0x1ece3e.name | 0;
    } else {
      return 0;
    }
  }
  function _0x4bd9d9(_0x3802f2) {
    switch (_0x3802f2) {
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
  function _0x3c26c2(_0x30b9a1, _0x2c0a13, _0xfb9244) {
    if (!_0x4bd9d9(_0x30b9a1)) {
      _0x58939e.recordError(1280);
      _0x1650b6("GL_INVALID_ENUM in glFlushMappedBufferRange");
      return;
    }
    var _0x4a1bd3 = _0x58939e.mappedBuffers[_0x299f4e(_0x30b9a1)];
    if (!_0x4a1bd3) {
      _0x58939e.recordError(1282);
      _0x1650b6("buffer was never mapped in glFlushMappedBufferRange");
      return;
    }
    if (!(_0x4a1bd3.access & 16)) {
      _0x58939e.recordError(1282);
      _0x1650b6("buffer was not mapped with GL_MAP_FLUSH_EXPLICIT_BIT in glFlushMappedBufferRange");
      return;
    }
    if (_0x2c0a13 < 0 || _0xfb9244 < 0 || _0x2c0a13 + _0xfb9244 > _0x4a1bd3.length) {
      _0x58939e.recordError(1281);
      _0x1650b6("invalid range in glFlushMappedBufferRange");
      return;
    }
    _0x149f8b.bufferSubData(_0x30b9a1, _0x4a1bd3.offset, _0x950143.subarray(_0x4a1bd3.mem + _0x2c0a13, _0x4a1bd3.mem + _0x2c0a13 + _0xfb9244));
  }
  function _0x10cdd2(_0xb588b6, _0x8edac4, _0x434abb, _0x2244f2) {
    _0x149f8b.framebufferRenderbuffer(_0xb588b6, _0x8edac4, _0x434abb, _0x58939e.renderbuffers[_0x2244f2]);
  }
  function _0x23669b(_0x4ac861, _0x4d5297, _0xfc2aeb, _0x146663, _0x244ef4) {
    _0x149f8b.framebufferTexture2D(_0x4ac861, _0x4d5297, _0xfc2aeb, _0x58939e.textures[_0x146663], _0x244ef4);
  }
  function _0x10abce(_0x93aa5b, _0x3acfa4, _0x1af065, _0x3c9f43, _0x3ba404) {
    _0x149f8b.framebufferTextureLayer(_0x93aa5b, _0x3acfa4, _0x58939e.textures[_0x1af065], _0x3c9f43, _0x3ba404);
  }
  function _0x33381f(_0x2e2b1b) {
    _0x149f8b.frontFace(_0x2e2b1b);
  }
  function _0x282814(_0xd03c0d, _0x2be046, _0xdba9db, _0x5268fb) {
    for (var _0x47630c = 0; _0x47630c < _0xd03c0d; _0x47630c++) {
      var _0x1a0bee = _0x149f8b[_0xdba9db]();
      var _0x3f8a30 = _0x1a0bee && _0x58939e.getNewId(_0x5268fb);
      if (_0x1a0bee) {
        _0x1a0bee.name = _0x3f8a30;
        _0x5268fb[_0x3f8a30] = _0x1a0bee;
      } else {
        _0x58939e.recordError(1282);
      }
      _0x4e86a5[_0x2be046 + _0x47630c * 4 >> 2] = _0x3f8a30;
    }
  }
  function _0x4eec71(_0x469ba7, _0x330f6f) {
    _0x282814(_0x469ba7, _0x330f6f, "createBuffer", _0x58939e.buffers);
  }
  function _0x2319fc(_0xf33f67, _0x5178fb) {
    _0x282814(_0xf33f67, _0x5178fb, "createFramebuffer", _0x58939e.framebuffers);
  }
  function _0x339b95(_0x44ebf6, _0x268a94) {
    _0x282814(_0x44ebf6, _0x268a94, "createQuery", _0x58939e.queries);
  }
  function _0x726493(_0x1d2341, _0x1e0043) {
    _0x282814(_0x1d2341, _0x1e0043, "createRenderbuffer", _0x58939e.renderbuffers);
  }
  function _0x1e9b05(_0x499495, _0x1123e7) {
    _0x282814(_0x499495, _0x1123e7, "createSampler", _0x58939e.samplers);
  }
  function _0x208a8f(_0x637a1c, _0x563b3d) {
    _0x282814(_0x637a1c, _0x563b3d, "createTexture", _0x58939e.textures);
  }
  function _0x9d5987(_0x1402ea, _0x2ae358) {
    _0x282814(_0x1402ea, _0x2ae358, "createTransformFeedback", _0x58939e.transformFeedbacks);
  }
  function _0x2addbd(_0x4034a2, _0x195703) {
    _0x282814(_0x4034a2, _0x195703, "createVertexArray", _0x58939e.vaos);
  }
  function _0xf8bfad(_0x5c3803) {
    _0x149f8b.generateMipmap(_0x5c3803);
  }
  function _0x5ed92d(_0x5e5be1, _0xb2ac10, _0x2bcc04, _0x3c339c, _0x5cd01, _0xc5aee, _0x4b9607, _0x5e9bc0) {
    _0xb2ac10 = _0x58939e.programs[_0xb2ac10];
    var _0x213dd3 = _0x149f8b[_0x5e5be1](_0xb2ac10, _0x2bcc04);
    if (_0x213dd3) {
      var _0x3e0960 = _0x5e9bc0 && _0x409466(_0x213dd3.name, _0x5e9bc0, _0x3c339c);
      if (_0x5cd01) {
        _0x4e86a5[_0x5cd01 >> 2] = _0x3e0960;
      }
      if (_0xc5aee) {
        _0x4e86a5[_0xc5aee >> 2] = _0x213dd3.size;
      }
      if (_0x4b9607) {
        _0x4e86a5[_0x4b9607 >> 2] = _0x213dd3.type;
      }
    }
  }
  function _0x31770b(_0x1890e0, _0x4eea47, _0x19c607, _0x42896a, _0x382d65, _0x4304cf, _0x40c473) {
    _0x5ed92d("getActiveAttrib", _0x1890e0, _0x4eea47, _0x19c607, _0x42896a, _0x382d65, _0x4304cf, _0x40c473);
  }
  function _0x3dc268(_0x108a5f, _0x16d1a2, _0x5f0e33, _0x8d0b8b, _0x2bc1a8, _0x3717e0, _0x3dab21) {
    _0x5ed92d("getActiveUniform", _0x108a5f, _0x16d1a2, _0x5f0e33, _0x8d0b8b, _0x2bc1a8, _0x3717e0, _0x3dab21);
  }
  function _0x1d0cc8(_0x1aa470, _0x370d51, _0x3d3d85, _0x5935c6, _0x54cc74) {
    _0x1aa470 = _0x58939e.programs[_0x1aa470];
    var _0x2a0809 = _0x149f8b.getActiveUniformBlockName(_0x1aa470, _0x370d51);
    if (!_0x2a0809) {
      return;
    }
    if (_0x54cc74 && _0x3d3d85 > 0) {
      var _0x1e984c = _0x409466(_0x2a0809, _0x54cc74, _0x3d3d85);
      if (_0x5935c6) {
        _0x4e86a5[_0x5935c6 >> 2] = _0x1e984c;
      }
    } else if (_0x5935c6) {
      _0x4e86a5[_0x5935c6 >> 2] = 0;
    }
  }
  function _0x23204a(_0xaae97, _0x13365d, _0x284755, _0x509dd8) {
    if (!_0x509dd8) {
      _0x58939e.recordError(1281);
      return;
    }
    _0xaae97 = _0x58939e.programs[_0xaae97];
    if (_0x284755 == 35393) {
      var _0x5c32ec = _0x149f8b.getActiveUniformBlockName(_0xaae97, _0x13365d);
      _0x4e86a5[_0x509dd8 >> 2] = _0x5c32ec.length + 1;
      return;
    }
    var _0x549684 = _0x149f8b.getActiveUniformBlockParameter(_0xaae97, _0x13365d, _0x284755);
    if (_0x549684 === null) {
      return;
    }
    if (_0x284755 == 35395) {
      for (var _0xe49449 = 0; _0xe49449 < _0x549684.length; _0xe49449++) {
        _0x4e86a5[_0x509dd8 + _0xe49449 * 4 >> 2] = _0x549684[_0xe49449];
      }
    } else {
      _0x4e86a5[_0x509dd8 >> 2] = _0x549684;
    }
  }
  function _0x5f09e4(_0x337857, _0x102a94, _0x4bbf41, _0x406825, _0x28348d) {
    if (!_0x28348d) {
      _0x58939e.recordError(1281);
      return;
    }
    if (_0x102a94 > 0 && _0x4bbf41 == 0) {
      _0x58939e.recordError(1281);
      return;
    }
    _0x337857 = _0x58939e.programs[_0x337857];
    var _0x510e6a = [];
    for (var _0x17176f = 0; _0x17176f < _0x102a94; _0x17176f++) {
      _0x510e6a.push(_0x4e86a5[_0x4bbf41 + _0x17176f * 4 >> 2]);
    }
    var _0x5e19cb = _0x149f8b.getActiveUniforms(_0x337857, _0x510e6a, _0x406825);
    if (!_0x5e19cb) {
      return;
    }
    var _0x5cea63 = _0x5e19cb.length;
    for (var _0x17176f = 0; _0x17176f < _0x5cea63; _0x17176f++) {
      _0x4e86a5[_0x28348d + _0x17176f * 4 >> 2] = _0x5e19cb[_0x17176f];
    }
  }
  function _0x4a6c4d(_0xef13b7, _0x31becf) {
    return _0x149f8b.getAttribLocation(_0x58939e.programs[_0xef13b7], _0x5c2e85(_0x31becf));
  }
  function _0x58303e(_0x4697f2, _0x1353e1, _0x5faa2d, _0x53fd82) {
    if (!_0x53fd82) {
      _0x58939e.recordError(1281);
      return;
    }
    _0x149f8b.getBufferSubData(_0x4697f2, _0x1353e1, _0x950143, _0x53fd82, _0x5faa2d);
  }
  function _0x382a66() {
    var _0x9f5bf8 = _0x149f8b.getError() || _0x58939e.lastError;
    _0x58939e.lastError = 0;
    return _0x9f5bf8;
  }
  function _0x34b879(_0x5e1071, _0x5bf43c, _0x3a4158, _0x2f04d0) {
    var _0x11a1c1 = _0x149f8b.getFramebufferAttachmentParameter(_0x5e1071, _0x5bf43c, _0x3a4158);
    if (_0x11a1c1 instanceof WebGLRenderbuffer || _0x11a1c1 instanceof WebGLTexture) {
      _0x11a1c1 = _0x11a1c1.name | 0;
    }
    _0x4e86a5[_0x2f04d0 >> 2] = _0x11a1c1;
  }
  function _0x454b9b(_0xcb1643, _0x57c34d) {
    _0x4cad96[_0xcb1643 >> 2] = _0x57c34d;
    _0x4cad96[_0xcb1643 + 4 >> 2] = (_0x57c34d - _0x4cad96[_0xcb1643 >> 2]) / 4294967296;
  }
  function _0x5c64ee(_0x3f00c6, _0x42109b, _0x550774, _0x5273f5) {
    if (!_0x550774) {
      _0x58939e.recordError(1281);
      return;
    }
    var _0x58560d = _0x149f8b.getIndexedParameter(_0x3f00c6, _0x42109b);
    var _0x28722e;
    switch (typeof _0x58560d) {
      case "boolean":
        _0x28722e = _0x58560d ? 1 : 0;
        break;
      case "number":
        _0x28722e = _0x58560d;
        break;
      case "object":
        if (_0x58560d === null) {
          switch (_0x3f00c6) {
            case 35983:
            case 35368:
              _0x28722e = 0;
              break;
            default:
              {
                _0x58939e.recordError(1280);
                return;
              }
          }
        } else if (_0x58560d instanceof WebGLBuffer) {
          _0x28722e = _0x58560d.name | 0;
        } else {
          _0x58939e.recordError(1280);
          return;
        }
        break;
      default:
        _0x58939e.recordError(1280);
        return;
    }
    switch (_0x5273f5) {
      case 1:
        _0x454b9b(_0x550774, _0x28722e);
        break;
      case 0:
        _0x4e86a5[_0x550774 >> 2] = _0x28722e;
        break;
      case 2:
        _0x5e6300[_0x550774 >> 2] = _0x28722e;
        break;
      case 4:
        _0x9c4a59[_0x550774 >> 0] = _0x28722e ? 1 : 0;
        break;
      default:
        throw "internal emscriptenWebGLGetIndexed() error, bad type: " + _0x5273f5;
    }
  }
  function _0x47ab7d(_0x1f038a, _0x51877e, _0x398678) {
    _0x5c64ee(_0x1f038a, _0x51877e, _0x398678, 0);
  }
  function _0x52793d(_0x4d0fc4, _0x3565c7, _0x507e13) {
    if (!_0x3565c7) {
      _0x58939e.recordError(1281);
      return;
    }
    var _0x2b9cf1 = undefined;
    switch (_0x4d0fc4) {
      case 36346:
        _0x2b9cf1 = 1;
        break;
      case 36344:
        if (_0x507e13 != 0 && _0x507e13 != 1) {
          _0x58939e.recordError(1280);
        }
        return;
      case 34814:
      case 36345:
        _0x2b9cf1 = 0;
        break;
      case 34466:
        var _0x3ed9ca = _0x149f8b.getParameter(34467);
        _0x2b9cf1 = _0x3ed9ca ? _0x3ed9ca.length : 0;
        break;
      case 33390:
        _0x2b9cf1 = 1048576;
        break;
      case 33309:
        if (_0x58939e.currentContext.version < 2) {
          _0x58939e.recordError(1282);
          return;
        }
        var _0x593d53 = _0x149f8b.getSupportedExtensions() || [];
        _0x2b9cf1 = _0x593d53.length * 2;
        break;
      case 33307:
      case 33308:
        if (_0x58939e.currentContext.version < 2) {
          _0x58939e.recordError(1280);
          return;
        }
        _0x2b9cf1 = _0x4d0fc4 == 33307 ? 3 : 0;
        break;
    }
    if (_0x2b9cf1 === undefined) {
      var _0x1d082e = _0x149f8b.getParameter(_0x4d0fc4);
      switch (typeof _0x1d082e) {
        case "number":
          _0x2b9cf1 = _0x1d082e;
          break;
        case "boolean":
          _0x2b9cf1 = _0x1d082e ? 1 : 0;
          break;
        case "string":
          _0x58939e.recordError(1280);
          return;
        case "object":
          if (_0x1d082e === null) {
            switch (_0x4d0fc4) {
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
                  _0x2b9cf1 = 0;
                  break;
                }
              default:
                {
                  _0x58939e.recordError(1280);
                  return;
                }
            }
          } else if (_0x1d082e instanceof Float32Array || _0x1d082e instanceof Uint32Array || _0x1d082e instanceof Int32Array || _0x1d082e instanceof Array) {
            for (var _0xca2ba7 = 0; _0xca2ba7 < _0x1d082e.length; ++_0xca2ba7) {
              switch (_0x507e13) {
                case 0:
                  _0x4e86a5[_0x3565c7 + _0xca2ba7 * 4 >> 2] = _0x1d082e[_0xca2ba7];
                  break;
                case 2:
                  _0x5e6300[_0x3565c7 + _0xca2ba7 * 4 >> 2] = _0x1d082e[_0xca2ba7];
                  break;
                case 4:
                  _0x9c4a59[_0x3565c7 + _0xca2ba7 >> 0] = _0x1d082e[_0xca2ba7] ? 1 : 0;
                  break;
              }
            }
            return;
          } else {
            try {
              _0x2b9cf1 = _0x1d082e.name | 0;
            } catch (_0x4c107c) {
              _0x58939e.recordError(1280);
              _0x1650b6("GL_INVALID_ENUM in glGet" + _0x507e13 + "v: Unknown object returned from WebGL getParameter(" + _0x4d0fc4 + ")! (error: " + _0x4c107c + ")");
              return;
            }
          }
          break;
        default:
          _0x58939e.recordError(1280);
          _0x1650b6("GL_INVALID_ENUM in glGet" + _0x507e13 + "v: Native code calling glGet" + _0x507e13 + "v(" + _0x4d0fc4 + ") and it returns " + _0x1d082e + " of type " + typeof _0x1d082e + "!");
          return;
      }
    }
    switch (_0x507e13) {
      case 1:
        _0x454b9b(_0x3565c7, _0x2b9cf1);
        break;
      case 0:
        _0x4e86a5[_0x3565c7 >> 2] = _0x2b9cf1;
        break;
      case 2:
        _0x5e6300[_0x3565c7 >> 2] = _0x2b9cf1;
        break;
      case 4:
        _0x9c4a59[_0x3565c7 >> 0] = _0x2b9cf1 ? 1 : 0;
        break;
    }
  }
  function _0x134aed(_0x33b829, _0x18b6e6) {
    _0x52793d(_0x33b829, _0x18b6e6, 0);
  }
  function _0x59646f(_0x5edf0, _0x4eff61, _0x1fd429, _0x10cf0f, _0x7781d5) {
    if (_0x10cf0f < 0) {
      _0x58939e.recordError(1281);
      return;
    }
    if (!_0x7781d5) {
      _0x58939e.recordError(1281);
      return;
    }
    var _0x228f9f = _0x149f8b.getInternalformatParameter(_0x5edf0, _0x4eff61, _0x1fd429);
    if (_0x228f9f === null) {
      return;
    }
    for (var _0x406b74 = 0; _0x406b74 < _0x228f9f.length && _0x406b74 < _0x10cf0f; ++_0x406b74) {
      _0x4e86a5[_0x7781d5 + _0x406b74 * 4 >> 2] = _0x228f9f[_0x406b74];
    }
  }
  function _0xe35dd0(_0x4ba4d2, _0x227578, _0x1043c1, _0x411bda, _0x252b5b) {
    _0x58939e.recordError(1282);
  }
  function _0x4767bc(_0xd9e8ee, _0x245df6, _0x3afc1e, _0x289bb7) {
    var _0x39387d = _0x149f8b.getProgramInfoLog(_0x58939e.programs[_0xd9e8ee]);
    if (_0x39387d === null) {
      _0x39387d = "(unknown error)";
    }
    var _0x2b825d = _0x245df6 > 0 && _0x289bb7 ? _0x409466(_0x39387d, _0x289bb7, _0x245df6) : 0;
    if (_0x3afc1e) {
      _0x4e86a5[_0x3afc1e >> 2] = _0x2b825d;
    }
  }
  function _0x5d86b4(_0x3d4834, _0x48e5b4, _0x256dc6) {
    if (!_0x256dc6) {
      _0x58939e.recordError(1281);
      return;
    }
    if (_0x3d4834 >= _0x58939e.counter) {
      _0x58939e.recordError(1281);
      return;
    }
    _0x3d4834 = _0x58939e.programs[_0x3d4834];
    if (_0x48e5b4 == 35716) {
      var _0x9f299 = _0x149f8b.getProgramInfoLog(_0x3d4834);
      if (_0x9f299 === null) {
        _0x9f299 = "(unknown error)";
      }
      _0x4e86a5[_0x256dc6 >> 2] = _0x9f299.length + 1;
    } else if (_0x48e5b4 == 35719) {
      if (!_0x3d4834.maxUniformLength) {
        for (var _0xe252a3 = 0; _0xe252a3 < _0x149f8b.getProgramParameter(_0x3d4834, 35718); ++_0xe252a3) {
          _0x3d4834.maxUniformLength = Math.max(_0x3d4834.maxUniformLength, _0x149f8b.getActiveUniform(_0x3d4834, _0xe252a3).name.length + 1);
        }
      }
      _0x4e86a5[_0x256dc6 >> 2] = _0x3d4834.maxUniformLength;
    } else if (_0x48e5b4 == 35722) {
      if (!_0x3d4834.maxAttributeLength) {
        for (var _0xe252a3 = 0; _0xe252a3 < _0x149f8b.getProgramParameter(_0x3d4834, 35721); ++_0xe252a3) {
          _0x3d4834.maxAttributeLength = Math.max(_0x3d4834.maxAttributeLength, _0x149f8b.getActiveAttrib(_0x3d4834, _0xe252a3).name.length + 1);
        }
      }
      _0x4e86a5[_0x256dc6 >> 2] = _0x3d4834.maxAttributeLength;
    } else if (_0x48e5b4 == 35381) {
      if (!_0x3d4834.maxUniformBlockNameLength) {
        for (var _0xe252a3 = 0; _0xe252a3 < _0x149f8b.getProgramParameter(_0x3d4834, 35382); ++_0xe252a3) {
          _0x3d4834.maxUniformBlockNameLength = Math.max(_0x3d4834.maxUniformBlockNameLength, _0x149f8b.getActiveUniformBlockName(_0x3d4834, _0xe252a3).length + 1);
        }
      }
      _0x4e86a5[_0x256dc6 >> 2] = _0x3d4834.maxUniformBlockNameLength;
    } else {
      _0x4e86a5[_0x256dc6 >> 2] = _0x149f8b.getProgramParameter(_0x3d4834, _0x48e5b4);
    }
  }
  function _0x375a72(_0x55be4d, _0x19b015, _0x1bf72a) {
    if (!_0x1bf72a) {
      _0x58939e.recordError(1281);
      return;
    }
    var _0x46e087 = _0x58939e.queries[_0x55be4d];
    var _0x51e81a = _0x149f8b.getQueryParameter(_0x46e087, _0x19b015);
    var _0x32b8c0;
    if (typeof _0x51e81a == "boolean") {
      _0x32b8c0 = _0x51e81a ? 1 : 0;
    } else {
      _0x32b8c0 = _0x51e81a;
    }
    _0x4e86a5[_0x1bf72a >> 2] = _0x32b8c0;
  }
  function _0x3c84ba(_0x27d0a1, _0x241967, _0xf7f591) {
    if (!_0xf7f591) {
      _0x58939e.recordError(1281);
      return;
    }
    _0x4e86a5[_0xf7f591 >> 2] = _0x149f8b.getQuery(_0x27d0a1, _0x241967);
  }
  function _0x107476(_0x52c442, _0x25c795, _0x157aaa) {
    if (!_0x157aaa) {
      _0x58939e.recordError(1281);
      return;
    }
    _0x4e86a5[_0x157aaa >> 2] = _0x149f8b.getRenderbufferParameter(_0x52c442, _0x25c795);
  }
  function _0x9ba6f8(_0x344c3f, _0x775a79, _0x1023bf, _0x4c3187) {
    var _0x3b623c = _0x149f8b.getShaderInfoLog(_0x58939e.shaders[_0x344c3f]);
    if (_0x3b623c === null) {
      _0x3b623c = "(unknown error)";
    }
    var _0x49456 = _0x775a79 > 0 && _0x4c3187 ? _0x409466(_0x3b623c, _0x4c3187, _0x775a79) : 0;
    if (_0x1023bf) {
      _0x4e86a5[_0x1023bf >> 2] = _0x49456;
    }
  }
  function _0x5ed3a0(_0x1e9946, _0x276057, _0x2ab1bb, _0x22d27d) {
    var _0x555410 = _0x149f8b.getShaderPrecisionFormat(_0x1e9946, _0x276057);
    _0x4e86a5[_0x2ab1bb >> 2] = _0x555410.rangeMin;
    _0x4e86a5[_0x2ab1bb + 4 >> 2] = _0x555410.rangeMax;
    _0x4e86a5[_0x22d27d >> 2] = _0x555410.precision;
  }
  function _0xa89fac(_0x111e37, _0x552634, _0x27b3ad, _0x12b364) {
    var _0x1589a0 = _0x149f8b.getShaderSource(_0x58939e.shaders[_0x111e37]);
    if (!_0x1589a0) {
      return;
    }
    var _0xa97bcd = _0x552634 > 0 && _0x12b364 ? _0x409466(_0x1589a0, _0x12b364, _0x552634) : 0;
    if (_0x27b3ad) {
      _0x4e86a5[_0x27b3ad >> 2] = _0xa97bcd;
    }
  }
  function _0x28c87c(_0x5d7e90, _0x112edb, _0x33bb2b) {
    if (!_0x33bb2b) {
      _0x58939e.recordError(1281);
      return;
    }
    if (_0x112edb == 35716) {
      var _0x5a336c = _0x149f8b.getShaderInfoLog(_0x58939e.shaders[_0x5d7e90]);
      if (_0x5a336c === null) {
        _0x5a336c = "(unknown error)";
      }
      var _0x27cbd6 = _0x5a336c ? _0x5a336c.length + 1 : 0;
      _0x4e86a5[_0x33bb2b >> 2] = _0x27cbd6;
    } else if (_0x112edb == 35720) {
      var _0x45f3e3 = _0x149f8b.getShaderSource(_0x58939e.shaders[_0x5d7e90]);
      var _0x502a38 = _0x45f3e3 ? _0x45f3e3.length + 1 : 0;
      _0x4e86a5[_0x33bb2b >> 2] = _0x502a38;
    } else {
      _0x4e86a5[_0x33bb2b >> 2] = _0x149f8b.getShaderParameter(_0x58939e.shaders[_0x5d7e90], _0x112edb);
    }
  }
  function _0xfaedc2(_0x551063) {
    var _0x45a5c1 = _0x58939e.stringCache[_0x551063];
    if (!_0x45a5c1) {
      switch (_0x551063) {
        case 7939:
          var _0x47cd4f = _0x149f8b.getSupportedExtensions() || [];
          _0x47cd4f = _0x47cd4f.concat(_0x47cd4f.map(function (_0x2e78d5) {
            return "GL_" + _0x2e78d5;
          }));
          _0x45a5c1 = _0x26d35b(_0x47cd4f.join(" "));
          break;
        case 7936:
        case 7937:
        case 37445:
        case 37446:
          var _0xc18307 = _0x149f8b.getParameter(_0x551063);
          if (!_0xc18307) {
            _0x58939e.recordError(1280);
          }
          _0x45a5c1 = _0xc18307 && _0x26d35b(_0xc18307);
          break;
        case 7938:
          var _0x127535 = _0x149f8b.getParameter(7938);
          if (_0x58939e.currentContext.version >= 2) {
            _0x127535 = "OpenGL ES 3.0 (" + _0x127535 + ")";
          } else {
            _0x127535 = "OpenGL ES 2.0 (" + _0x127535 + ")";
          }
          _0x45a5c1 = _0x26d35b(_0x127535);
          break;
        case 35724:
          var _0xa2d40f = _0x149f8b.getParameter(35724);
          var _0x199b41 = /^WebGL GLSL ES ([0-9]\.[0-9][0-9]?)(?:$| .*)/;
          var _0x2fae94 = _0xa2d40f.match(_0x199b41);
          if (_0x2fae94 !== null) {
            if (_0x2fae94[1].length == 3) {
              _0x2fae94[1] = _0x2fae94[1] + "0";
            }
            _0xa2d40f = "OpenGL ES GLSL ES " + _0x2fae94[1] + " (" + _0xa2d40f + ")";
          }
          _0x45a5c1 = _0x26d35b(_0xa2d40f);
          break;
        default:
          _0x58939e.recordError(1280);
      }
      _0x58939e.stringCache[_0x551063] = _0x45a5c1;
    }
    return _0x45a5c1;
  }
  function _0x40c570(_0x11cffd, _0x32ad4a) {
    if (_0x58939e.currentContext.version < 2) {
      _0x58939e.recordError(1282);
      return 0;
    }
    var _0x3d0658 = _0x58939e.stringiCache[_0x11cffd];
    if (_0x3d0658) {
      if (_0x32ad4a < 0 || _0x32ad4a >= _0x3d0658.length) {
        _0x58939e.recordError(1281);
        return 0;
      }
      return _0x3d0658[_0x32ad4a];
    }
    switch (_0x11cffd) {
      case 7939:
        var _0x262826 = _0x149f8b.getSupportedExtensions() || [];
        _0x262826 = _0x262826.concat(_0x262826.map(function (_0x1822ba) {
          return "GL_" + _0x1822ba;
        }));
        _0x262826 = _0x262826.map(function (_0x37a0fb) {
          return _0x26d35b(_0x37a0fb);
        });
        _0x3d0658 = _0x58939e.stringiCache[_0x11cffd] = _0x262826;
        if (_0x32ad4a < 0 || _0x32ad4a >= _0x3d0658.length) {
          _0x58939e.recordError(1281);
          return 0;
        }
        return _0x3d0658[_0x32ad4a];
      default:
        _0x58939e.recordError(1280);
        return 0;
    }
  }
  function _0x58214c(_0x18c7a5, _0x34928b, _0x245879) {
    if (!_0x245879) {
      _0x58939e.recordError(1281);
      return;
    }
    _0x4e86a5[_0x245879 >> 2] = _0x149f8b.getTexParameter(_0x18c7a5, _0x34928b);
  }
  function _0x296dae(_0x4a97c0, _0x18a37c) {
    return _0x149f8b.getUniformBlockIndex(_0x58939e.programs[_0x4a97c0], _0x5c2e85(_0x18a37c));
  }
  function _0x38e085(_0x2bc42f, _0x310f58, _0x5ab30d, _0x3075f9) {
    if (!_0x3075f9) {
      _0x58939e.recordError(1281);
      return;
    }
    if (_0x310f58 > 0 && (_0x5ab30d == 0 || _0x3075f9 == 0)) {
      _0x58939e.recordError(1281);
      return;
    }
    _0x2bc42f = _0x58939e.programs[_0x2bc42f];
    var _0x5e1a74 = [];
    for (var _0x5a40f2 = 0; _0x5a40f2 < _0x310f58; _0x5a40f2++) {
      _0x5e1a74.push(_0x5c2e85(_0x4e86a5[_0x5ab30d + _0x5a40f2 * 4 >> 2]));
    }
    var _0x5281f1 = _0x149f8b.getUniformIndices(_0x2bc42f, _0x5e1a74);
    if (!_0x5281f1) {
      return;
    }
    var _0x43428b = _0x5281f1.length;
    for (var _0x5a40f2 = 0; _0x5a40f2 < _0x43428b; _0x5a40f2++) {
      _0x4e86a5[_0x3075f9 + _0x5a40f2 * 4 >> 2] = _0x5281f1[_0x5a40f2];
    }
  }
  function _0x6e03f2(_0x2c80ff, _0x599901) {
    function _0x5efda3(_0x3d68f1) {
      return _0x3d68f1.slice(-1) == "]" && _0x3d68f1.lastIndexOf("[");
    }
    _0x599901 = _0x5c2e85(_0x599901);
    if (_0x2c80ff = _0x58939e.programs[_0x2c80ff]) {
      var _0x1c0f6f = _0x2c80ff.uniformLocsById;
      var _0x7843b7 = _0x2c80ff.uniformSizeAndIdsByName;
      var _0x585312;
      var _0x3b008d;
      var _0x3ffc44 = 0;
      var _0x4dcafc = _0x599901;
      var _0x19ae59 = _0x5efda3(_0x599901);
      if (!_0x1c0f6f) {
        _0x2c80ff.uniformLocsById = _0x1c0f6f = {};
        _0x2c80ff.uniformArrayNamesById = {};
        for (_0x585312 = 0; _0x585312 < _0x149f8b.getProgramParameter(_0x2c80ff, 35718); ++_0x585312) {
          var _0x4b7132 = _0x149f8b.getActiveUniform(_0x2c80ff, _0x585312);
          var _0x3e1787 = _0x4b7132.name;
          var _0x3da5bb = _0x4b7132.size;
          var _0x39eaad = _0x5efda3(_0x3e1787);
          var _0x226dba = _0x39eaad > 0 ? _0x3e1787.slice(0, _0x39eaad) : _0x3e1787;
          var _0x53fd0c = _0x7843b7[_0x226dba] ? _0x7843b7[_0x226dba][1] : _0x2c80ff.uniformIdCounter;
          _0x2c80ff.uniformIdCounter = Math.max(_0x53fd0c + _0x3da5bb, _0x2c80ff.uniformIdCounter);
          _0x7843b7[_0x226dba] = [_0x3da5bb, _0x53fd0c];
          for (_0x3b008d = 0; _0x3b008d < _0x3da5bb; ++_0x3b008d) {
            _0x1c0f6f[_0x53fd0c] = _0x3b008d;
            _0x2c80ff.uniformArrayNamesById[_0x53fd0c++] = _0x226dba;
          }
        }
      }
      if (_0x19ae59 > 0) {
        _0x3ffc44 = _0x54d60e(_0x599901.slice(_0x19ae59 + 1)) >>> 0;
        _0x4dcafc = _0x599901.slice(0, _0x19ae59);
      }
      var _0xefb8ab = _0x7843b7[_0x4dcafc];
      if (_0xefb8ab && _0x3ffc44 < _0xefb8ab[0]) {
        _0x3ffc44 += _0xefb8ab[1];
        if (_0x1c0f6f[_0x3ffc44] = _0x1c0f6f[_0x3ffc44] || _0x149f8b.getUniformLocation(_0x2c80ff, _0x599901)) {
          return _0x3ffc44;
        }
      }
    } else {
      _0x58939e.recordError(1281);
    }
    return -1;
  }
  function _0x432dba(_0x1bb334) {
    var _0x5f1003 = _0x149f8b.currentProgram;
    if (_0x5f1003) {
      var _0x32bfb2 = _0x5f1003.uniformLocsById[_0x1bb334];
      if (typeof _0x32bfb2 === "number") {
        _0x5f1003.uniformLocsById[_0x1bb334] = _0x32bfb2 = _0x149f8b.getUniformLocation(_0x5f1003, _0x5f1003.uniformArrayNamesById[_0x1bb334] + (_0x32bfb2 > 0 ? "[" + _0x32bfb2 + "]" : ""));
      }
      return _0x32bfb2;
    } else {
      _0x58939e.recordError(1282);
    }
  }
  function _0x109b08(_0x28d263, _0x3dbe32, _0x420f5d, _0x37db36) {
    if (!_0x420f5d) {
      _0x58939e.recordError(1281);
      return;
    }
    _0x28d263 = _0x58939e.programs[_0x28d263];
    var _0x42f903 = _0x149f8b.getUniform(_0x28d263, _0x432dba(_0x3dbe32));
    if (typeof _0x42f903 == "number" || typeof _0x42f903 == "boolean") {
      switch (_0x37db36) {
        case 0:
          _0x4e86a5[_0x420f5d >> 2] = _0x42f903;
          break;
        case 2:
          _0x5e6300[_0x420f5d >> 2] = _0x42f903;
          break;
      }
    } else {
      for (var _0x3e94cc = 0; _0x3e94cc < _0x42f903.length; _0x3e94cc++) {
        switch (_0x37db36) {
          case 0:
            _0x4e86a5[_0x420f5d + _0x3e94cc * 4 >> 2] = _0x42f903[_0x3e94cc];
            break;
          case 2:
            _0x5e6300[_0x420f5d + _0x3e94cc * 4 >> 2] = _0x42f903[_0x3e94cc];
            break;
        }
      }
    }
  }
  function _0x6b2308(_0x338370, _0x50fa9f, _0x3bffcf) {
    _0x109b08(_0x338370, _0x50fa9f, _0x3bffcf, 0);
  }
  function _0x297401(_0x54a7d9, _0x53c105, _0x17503a, _0x4cea3f) {
    if (!_0x17503a) {
      _0x58939e.recordError(1281);
      return;
    }
    if (_0x58939e.currentContext.clientBuffers[_0x54a7d9].enabled) {
      _0x1650b6("glGetVertexAttrib*v on client-side array: not supported, bad data returned");
    }
    var _0x1b1b2d = _0x149f8b.getVertexAttrib(_0x54a7d9, _0x53c105);
    if (_0x53c105 == 34975) {
      _0x4e86a5[_0x17503a >> 2] = _0x1b1b2d && _0x1b1b2d.name;
    } else if (typeof _0x1b1b2d == "number" || typeof _0x1b1b2d == "boolean") {
      switch (_0x4cea3f) {
        case 0:
          _0x4e86a5[_0x17503a >> 2] = _0x1b1b2d;
          break;
        case 2:
          _0x5e6300[_0x17503a >> 2] = _0x1b1b2d;
          break;
        case 5:
          _0x4e86a5[_0x17503a >> 2] = Math.fround(_0x1b1b2d);
          break;
      }
    } else {
      for (var _0x11bcf5 = 0; _0x11bcf5 < _0x1b1b2d.length; _0x11bcf5++) {
        switch (_0x4cea3f) {
          case 0:
            _0x4e86a5[_0x17503a + _0x11bcf5 * 4 >> 2] = _0x1b1b2d[_0x11bcf5];
            break;
          case 2:
            _0x5e6300[_0x17503a + _0x11bcf5 * 4 >> 2] = _0x1b1b2d[_0x11bcf5];
            break;
          case 5:
            _0x4e86a5[_0x17503a + _0x11bcf5 * 4 >> 2] = Math.fround(_0x1b1b2d[_0x11bcf5]);
            break;
        }
      }
    }
  }
  function _0x31ac9d(_0x53a39b, _0x11805b, _0x5606ce) {
    _0x297401(_0x53a39b, _0x11805b, _0x5606ce, 5);
  }
  function _0x524a27(_0x37d239, _0x26b007, _0xe0293) {
    var _0x4052f3 = _0x36ffe0[_0x26b007];
    for (var _0x5ecbbf = 0; _0x5ecbbf < _0x26b007; _0x5ecbbf++) {
      _0x4052f3[_0x5ecbbf] = _0x4e86a5[_0xe0293 + _0x5ecbbf * 4 >> 2];
    }
    _0x149f8b.invalidateFramebuffer(_0x37d239, _0x4052f3);
  }
  function _0x212923(_0x2e4ce0) {
    return _0x149f8b.isEnabled(_0x2e4ce0);
  }
  function _0x8bf32a(_0x2e1975) {
    var _0x52d019 = _0x58939e.vaos[_0x2e1975];
    if (!_0x52d019) {
      return 0;
    }
    return _0x149f8b.isVertexArray(_0x52d019);
  }
  function _0xa7886(_0x4e9ef0) {
    _0x4e9ef0 = _0x58939e.programs[_0x4e9ef0];
    _0x149f8b.linkProgram(_0x4e9ef0);
    _0x4e9ef0.uniformLocsById = 0;
    _0x4e9ef0.uniformSizeAndIdsByName = {};
    [_0x4e9ef0.vs, _0x4e9ef0.fs].forEach(function (_0x34d672) {
      Object.keys(_0x34d672.explicitUniformLocations).forEach(function (_0x3786ea) {
        var _0x221a89 = _0x34d672.explicitUniformLocations[_0x3786ea];
        _0x4e9ef0.uniformSizeAndIdsByName[_0x3786ea] = [1, _0x221a89];
        _0x4e9ef0.uniformIdCounter = Math.max(_0x4e9ef0.uniformIdCounter, _0x221a89 + 1);
      });
    });
    function _0x1e0223(_0x4eb1bb, _0xcc3db9) {
      Object.keys(_0xcc3db9).forEach(function (_0x1e51ab) {
        _0x4eb1bb[_0x1e51ab] = _0xcc3db9[_0x1e51ab];
      });
    }
    _0x4e9ef0.explicitUniformBindings = {};
    _0x4e9ef0.explicitSamplerBindings = {};
    [_0x4e9ef0.vs, _0x4e9ef0.fs].forEach(function (_0x14d01b) {
      _0x1e0223(_0x4e9ef0.explicitUniformBindings, _0x14d01b.explicitUniformBindings);
      _0x1e0223(_0x4e9ef0.explicitSamplerBindings, _0x14d01b.explicitSamplerBindings);
    });
    _0x4e9ef0.explicitProgramBindingsApplied = 0;
  }
  function _0xd43308(_0x4d0d53, _0x469e04, _0x407923, _0x89d2b6) {
    if (_0x89d2b6 != 26 && _0x89d2b6 != 10) {
      _0x1650b6("glMapBufferRange is only supported when access is MAP_WRITE|INVALIDATE_BUFFER");
      return 0;
    }
    if (!_0x4bd9d9(_0x4d0d53)) {
      _0x58939e.recordError(1280);
      _0x1650b6("GL_INVALID_ENUM in glMapBufferRange");
      return 0;
    }
    var _0x27b75f = _0x2a1ebe(_0x407923);
    if (!_0x27b75f) {
      return 0;
    }
    _0x58939e.mappedBuffers[_0x299f4e(_0x4d0d53)] = {
      offset: _0x469e04,
      length: _0x407923,
      mem: _0x27b75f,
      access: _0x89d2b6
    };
    return _0x27b75f;
  }
  function _0x414d66(_0x5dc0dc, _0x2e5a2a) {
    if (_0x5dc0dc == 3317) {
      _0x58939e.unpackAlignment = _0x2e5a2a;
    }
    _0x149f8b.pixelStorei(_0x5dc0dc, _0x2e5a2a);
  }
  function _0x170f53(_0x460956, _0x3bcb51) {
    _0x149f8b.polygonOffset(_0x460956, _0x3bcb51);
  }
  function _0x277296(_0x449c4f, _0x1999a4, _0x5496ec, _0x156c7e) {
    _0x58939e.recordError(1280);
  }
  function _0x16a157(_0x4bac24, _0x4b4b2d, _0x44d1e4) {
    _0x58939e.recordError(1280);
  }
  function _0x594b55(_0x391f44) {
    _0x149f8b.readBuffer(_0x391f44);
  }
  function _0x56c90d(_0x116277, _0x3eadae, _0x489cdf, _0x16f26b) {
    function _0x53fc9a(_0x150857, _0x123941) {
      return _0x150857 + _0x123941 - 1 & -_0x123941;
    }
    var _0x13322a = _0x116277 * _0x489cdf;
    var _0x354c21 = _0x53fc9a(_0x13322a, _0x16f26b);
    return _0x3eadae * _0x354c21;
  }
  function _0x29ca91(_0x23ec62) {
    var _0x22ec25 = {
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
    return _0x22ec25[_0x23ec62 - 6402] || 1;
  }
  function _0x1637ed(_0x5310a9) {
    _0x5310a9 -= 5120;
    if (_0x5310a9 == 0) {
      return _0x9c4a59;
    }
    if (_0x5310a9 == 1) {
      return _0x950143;
    }
    if (_0x5310a9 == 2) {
      return _0x2b051e;
    }
    if (_0x5310a9 == 4) {
      return _0x4e86a5;
    }
    if (_0x5310a9 == 6) {
      return _0x5e6300;
    }
    if (_0x5310a9 == 5 || _0x5310a9 == 28922 || _0x5310a9 == 28520 || _0x5310a9 == 30779 || _0x5310a9 == 30782) {
      return _0x4cad96;
    }
    return _0x3201fa;
  }
  function _0x1baa5e(_0x2fdb33) {
    return 31 - Math.clz32(_0x2fdb33.BYTES_PER_ELEMENT);
  }
  function _0x2c66fd(_0x1698af, _0x4e95c9, _0xb35fc5, _0x4f9a73, _0x113f40, _0x399e02) {
    var _0x166990 = _0x1637ed(_0x1698af);
    var _0x39e69e = _0x1baa5e(_0x166990);
    var _0xfdfc4d = 1 << _0x39e69e;
    var _0x423b90 = _0x29ca91(_0x4e95c9) * _0xfdfc4d;
    var _0x2c66db = _0x56c90d(_0xb35fc5, _0x4f9a73, _0x423b90, _0x58939e.unpackAlignment);
    return _0x166990.subarray(_0x113f40 >> _0x39e69e, _0x113f40 + _0x2c66db >> _0x39e69e);
  }
  function _0x7dd034(_0x220f5a, _0x10cae9, _0x1653e5, _0x4704c6, _0x2adda2, _0x4e5520, _0x1e0b14) {
    if (_0x58939e.currentContext.version >= 2) {
      if (_0x149f8b.currentPixelPackBufferBinding) {
        _0x149f8b.readPixels(_0x220f5a, _0x10cae9, _0x1653e5, _0x4704c6, _0x2adda2, _0x4e5520, _0x1e0b14);
      } else {
        var _0x2b677f = _0x1637ed(_0x4e5520);
        _0x149f8b.readPixels(_0x220f5a, _0x10cae9, _0x1653e5, _0x4704c6, _0x2adda2, _0x4e5520, _0x2b677f, _0x1e0b14 >> _0x1baa5e(_0x2b677f));
      }
      return;
    }
    var _0x435c75 = _0x2c66fd(_0x4e5520, _0x2adda2, _0x1653e5, _0x4704c6, _0x1e0b14, _0x2adda2);
    if (!_0x435c75) {
      _0x58939e.recordError(1280);
      return;
    }
    _0x149f8b.readPixels(_0x220f5a, _0x10cae9, _0x1653e5, _0x4704c6, _0x2adda2, _0x4e5520, _0x435c75);
  }
  function _0x1ef0d3(_0x45a652, _0x582459, _0x3c5b19, _0x45cc46) {
    _0x149f8b.renderbufferStorage(_0x45a652, _0x582459, _0x3c5b19, _0x45cc46);
  }
  function _0xabd2e1(_0x756000, _0x35edba, _0x42f33d, _0x368471, _0x670a96) {
    _0x149f8b.renderbufferStorageMultisample(_0x756000, _0x35edba, _0x42f33d, _0x368471, _0x670a96);
  }
  function _0x385c56(_0x5ab437, _0x52a797, _0x13caba) {
    _0x149f8b.samplerParameteri(_0x58939e.samplers[_0x5ab437], _0x52a797, _0x13caba);
  }
  function _0x3632d1(_0x5126f0, _0x27cd82, _0x35f3e6, _0x3c36f1) {
    _0x149f8b.scissor(_0x5126f0, _0x27cd82, _0x35f3e6, _0x3c36f1);
  }
  function _0xc97d2c(_0x5206f6, _0x22ca10, _0x15a5bd = "(", _0x1bec2b = ")") {
    var _0x4775e0 = 0;
    for (; _0x22ca10 < _0x5206f6.length; ++_0x22ca10) {
      if (_0x5206f6[_0x22ca10] == _0x15a5bd) {
        ++_0x4775e0;
      }
      if (_0x5206f6[_0x22ca10] == _0x1bec2b && --_0x4775e0 == 0) {
        return _0x22ca10;
      }
    }
  }
  function _0x4ec607(_0x593fba) {
    var _0x8fcfcf = 0;
    var _0x16b1d3 = _0x593fba.length;
    var _0x3750f5 = "";
    var _0x1251d5 = [1];
    var _0x1f1ae2 = {
      defined: function (_0x517d40) {
        if (_0x1f1ae2[_0x517d40[0]]) {
          return 1;
        } else {
          return 0;
        }
      },
      GL_FRAGMENT_PRECISION_HIGH: function () {
        return 1;
      }
    };
    function _0x40dc88(_0x483551, _0x4a563c) {
      return !(_0x483551.charCodeAt(_0x4a563c) > 32);
    }
    function _0x3e4ff2(_0x520778, _0x5ece07) {
      while (!_0x40dc88(_0x520778, _0x5ece07)) {
        ++_0x5ece07;
      }
      return _0x5ece07;
    }
    function _0x269295(_0x3b6010, _0x3b2dcf) {
      var _0x547753 = _0x3b6010.charCodeAt(_0x3b2dcf);
      if (_0x547753 > 32) {
        if (_0x547753 < 48) {
          return 1;
        }
        if (_0x547753 < 58) {
          return 2;
        }
        if (_0x547753 < 65) {
          return 1;
        }
        if (_0x547753 < 91 || _0x547753 == 95) {
          return 3;
        }
        if (_0x547753 < 97) {
          return 1;
        }
        if (_0x547753 < 123) {
          return 3;
        }
        return 1;
      }
      if (_0x547753 < 33) {
        return 0;
      } else {
        return 4;
      }
    }
    function _0x354f05(_0x36b774, _0x1f305f) {
      var _0x27f25f = [];
      var _0x34dd34 = _0x36b774.length;
      for (var _0x3898a0 = 0; _0x3898a0 <= _0x34dd34; ++_0x3898a0) {
        var _0x364a04 = _0x269295(_0x36b774, _0x3898a0);
        if (_0x364a04 == 2 || _0x364a04 == 3) {
          for (var _0x42aaad = _0x3898a0 + 1; _0x42aaad <= _0x34dd34; ++_0x42aaad) {
            var _0x40555d = _0x269295(_0x36b774, _0x42aaad);
            if (_0x40555d != _0x364a04 && (_0x40555d != 2 || _0x364a04 != 3)) {
              _0x27f25f.push(_0x36b774.substring(_0x3898a0, _0x42aaad));
              _0x3898a0 = _0x42aaad - 1;
              break;
            }
          }
        } else if (_0x364a04 == 1) {
          var _0x3467a7 = _0x36b774.substr(_0x3898a0, 2);
          if (["<=", ">=", "==", "!=", "&&", "||"].includes(_0x3467a7)) {
            _0x27f25f.push(_0x3467a7);
            ++_0x3898a0;
          } else {
            _0x27f25f.push(_0x36b774[_0x3898a0]);
          }
        }
      }
      return _0x27f25f;
    }
    function _0x20d66c(_0x16eb0f, _0x457c49, _0x19b683 = _0x16eb0f.length) {
      var _0x28b413 = _0x16eb0f.length;
      var _0x197253 = "";
      for (var _0x59b076 = _0x457c49; _0x59b076 < _0x19b683; ++_0x59b076) {
        var _0x44b5bb = _0x269295(_0x16eb0f, _0x59b076);
        if (_0x44b5bb == 3) {
          for (var _0x1c2960 = _0x59b076 + 1; _0x1c2960 <= _0x19b683; ++_0x1c2960) {
            var _0x3339a4 = _0x269295(_0x16eb0f, _0x1c2960);
            if (_0x3339a4 != 2 && _0x3339a4 != 3) {
              var _0x45848d = _0x16eb0f.substring(_0x59b076, _0x1c2960);
              var _0x37a4f3 = _0x1f1ae2[_0x45848d];
              if (_0x37a4f3) {
                var _0xac5ecd = _0x16eb0f.substring(_0x457c49, _0x59b076);
                if (_0x37a4f3.length && _0x16eb0f[_0x1c2960] == "(") {
                  var _0x5146ff = _0xc97d2c(_0x16eb0f, _0x1c2960);
                  _0xac5ecd += _0x37a4f3(_0x16eb0f.substring(_0x1c2960 + 1, _0x5146ff).split(",")) + _0x16eb0f.substring(_0x5146ff + 1, _0x19b683);
                } else {
                  _0xac5ecd += _0x37a4f3() + _0x16eb0f.substring(_0x1c2960, _0x19b683);
                }
                return _0x20d66c(_0xac5ecd, 0);
              } else {
                _0x197253 += _0x45848d;
                _0x59b076 = _0x1c2960 - 1;
                break;
              }
            }
          }
        } else {
          _0x197253 += _0x16eb0f[_0x59b076];
        }
      }
      return _0x197253;
    }
    function _0x1d2f16(_0xba2b9) {
      while (_0xba2b9.length > 1 || typeof _0xba2b9[0] != "function") {
        _0xba2b9 = function (_0x57d873) {
          var _0x1e63d3;
          var _0x1a880c;
          var _0x48e52b;
          var _0x218908 = -2;
          for (_0x1a880c = 0; _0x1a880c < _0x57d873.length; ++_0x1a880c) {
            if ((_0x48e52b = ["*", "/", "+", "-", "!", "<", "<=", ">", ">=", "==", "!=", "&&", "||", "("].indexOf(_0x57d873[_0x1a880c])) > _0x218908) {
              _0x1e63d3 = _0x1a880c;
              _0x218908 = _0x48e52b;
            }
          }
          if (_0x218908 == 13) {
            var _0x1a880c = _0xc97d2c(_0x57d873, _0x1e63d3);
            if (_0x1a880c) {
              _0x57d873.splice(_0x1e63d3, _0x1a880c + 1 - _0x1e63d3, _0x1d2f16(_0x57d873.slice(_0x1e63d3 + 1, _0x1a880c)));
              return _0x57d873;
            }
          }
          if (_0x218908 == 4) {
            _0x1e63d3 = _0x57d873.lastIndexOf("!");
            var _0x2fc47c = _0x1d2f16(_0x57d873.slice(_0x1e63d3 + 1, _0x1e63d3 + 2));
            _0x57d873.splice(_0x1e63d3, 2, function () {
              return !_0x2fc47c();
            });
            return _0x57d873;
          }
          if (_0x218908 >= 0) {
            var _0x47a026 = _0x1d2f16(_0x57d873.slice(0, _0x1e63d3));
            var _0xb239ea = _0x1d2f16(_0x57d873.slice(_0x1e63d3 + 1));
            switch (_0x57d873[_0x1e63d3]) {
              case "&&":
                return [function () {
                  return _0x47a026() && _0xb239ea();
                }];
              case "||":
                return [function () {
                  return _0x47a026() || _0xb239ea();
                }];
              case "==":
                return [function () {
                  return _0x47a026() == _0xb239ea();
                }];
              case "!=":
                return [function () {
                  return _0x47a026() != _0xb239ea();
                }];
              case "<":
                return [function () {
                  return _0x47a026() < _0xb239ea();
                }];
              case "<=":
                return [function () {
                  return _0x47a026() <= _0xb239ea();
                }];
              case ">":
                return [function () {
                  return _0x47a026() > _0xb239ea();
                }];
              case ">=":
                return [function () {
                  return _0x47a026() >= _0xb239ea();
                }];
              case "+":
                return [function () {
                  return _0x47a026() + _0xb239ea();
                }];
              case "-":
                return [function () {
                  return _0x47a026() - _0xb239ea();
                }];
              case "*":
                return [function () {
                  return _0x47a026() * _0xb239ea();
                }];
              case "/":
                return [function () {
                  return Math.floor(_0x47a026() / _0xb239ea());
                }];
            }
          }
          var _0x5aebdf = _0x54d60e(_0x57d873[_0x1e63d3]);
          return [function () {
            return _0x5aebdf;
          }];
        }(_0xba2b9);
      }
      return _0xba2b9[0];
    }
    for (; _0x8fcfcf < _0x16b1d3; ++_0x8fcfcf) {
      var _0x28f276 = _0x8fcfcf;
      _0x8fcfcf = _0x593fba.indexOf("\n", _0x8fcfcf);
      if (_0x8fcfcf < 0) {
        _0x8fcfcf = _0x16b1d3;
      }
      for (var _0x43ebff = _0x28f276; _0x43ebff < _0x8fcfcf && _0x40dc88(_0x593fba, _0x43ebff); ++_0x43ebff);
      var _0x58bb8c = _0x1251d5[_0x1251d5.length - 1];
      if (_0x593fba[_0x43ebff] != "#") {
        if (_0x58bb8c) {
          _0x3750f5 += _0x20d66c(_0x593fba, _0x28f276, _0x8fcfcf) + "\n";
        }
        continue;
      }
      var _0x3500ca = _0x3e4ff2(_0x593fba, _0x43ebff);
      var _0x105e25 = _0x593fba.substring(_0x43ebff + 1, _0x3500ca);
      var _0xf90bcb = _0x593fba.substring(_0x3500ca, _0x8fcfcf).trim();
      switch (_0x105e25) {
        case "if":
          var _0x5aba4c = _0x354f05(_0x20d66c(_0xf90bcb, 0));
          var _0x2aee95 = _0x1d2f16(_0x5aba4c);
          var _0x2d649c = _0x2aee95();
          _0x1251d5.push(!!_0x2d649c * _0x1251d5[_0x1251d5.length - 1]);
          break;
        case "ifdef":
          _0x1251d5.push(!!_0x1f1ae2[_0xf90bcb] * _0x1251d5[_0x1251d5.length - 1]);
          break;
        case "ifndef":
          _0x1251d5.push(!_0x1f1ae2[_0xf90bcb] * _0x1251d5[_0x1251d5.length - 1]);
          break;
        case "else":
          _0x1251d5[_0x1251d5.length - 1] = 1 - _0x1251d5[_0x1251d5.length - 1];
          break;
        case "endif":
          _0x1251d5.pop();
          break;
        case "define":
          if (_0x58bb8c) {
            var _0x5a36ec = _0xf90bcb.indexOf("(");
            var _0x47298e = _0x3e4ff2(_0xf90bcb, 0);
            if (_0x47298e < _0x5a36ec) {
              _0x5a36ec = 0;
            }
            if (_0x5a36ec > 0) {
              var _0xde5ea3 = _0xf90bcb.indexOf(")", _0x5a36ec);
              let _0x5d8470 = _0xf90bcb.substring(_0x5a36ec + 1, _0xde5ea3).split(",").map(_0x28ccaf => _0x28ccaf.trim());
              let _0x150664 = _0x354f05(_0xf90bcb.substring(_0xde5ea3 + 1).trim());
              _0x1f1ae2[_0xf90bcb.substring(0, _0x5a36ec)] = function (_0x1af42a) {
                var _0x53f416 = "";
                _0x150664.forEach(_0x1b2fc4 => {
                  var _0x7058c8 = _0x5d8470.indexOf(_0x1b2fc4);
                  _0x53f416 += _0x7058c8 >= 0 ? _0x1af42a[_0x7058c8] : _0x1b2fc4;
                });
                return _0x53f416;
              };
            } else {
              let _0x3e6910 = _0x20d66c(_0xf90bcb.substring(_0x47298e + 1).trim(), 0);
              _0x1f1ae2[_0xf90bcb.substring(0, _0x47298e)] = function () {
                return _0x3e6910;
              };
            }
          }
          break;
        case "undef":
          if (_0x58bb8c) {
            delete _0x1f1ae2[_0xf90bcb];
          }
          break;
        default:
          if (_0x105e25 != "version" && _0x105e25 != "pragma" && _0x105e25 != "extension") {}
          _0x3750f5 += _0x20d66c(_0x593fba, _0x28f276, _0x8fcfcf) + "\n";
      }
    }
    return _0x3750f5;
  }
  function _0x175ff2(_0x3a4154) {
    var _0x59e3f6 = 0;
    var _0x384f70 = "";
    var _0x63e505;
    var _0x46216a;
    var _0x40d30a = _0x3a4154.length;
    for (; _0x59e3f6 < _0x40d30a; ++_0x59e3f6) {
      _0x63e505 = _0x3a4154[_0x59e3f6];
      if (_0x63e505 == "/") {
        _0x46216a = _0x3a4154[_0x59e3f6 + 1];
        if (_0x46216a == "/") {
          while (_0x59e3f6 < _0x40d30a && _0x3a4154[_0x59e3f6 + 1] != "\n") {
            ++_0x59e3f6;
          }
        } else if (_0x46216a == "*") {
          while (_0x59e3f6 < _0x40d30a && (_0x3a4154[_0x59e3f6 - 1] != "*" || _0x3a4154[_0x59e3f6] != "/")) {
            ++_0x59e3f6;
          }
        } else {
          _0x384f70 += _0x63e505;
        }
      } else {
        _0x384f70 += _0x63e505;
      }
    }
    return _0x384f70;
  }
  function _0x32f108(_0x175e92, _0x293a10, _0xdb4646, _0x517fd6) {
    var _0x4763c0 = _0x58939e.getSource(_0x175e92, _0x293a10, _0xdb4646, _0x517fd6);
    _0x4763c0 = _0x4ec607(_0x175ff2(_0x4763c0));
    var _0x35e41b = /layout\s*\(\s*location\s*=\s*(-?\d+)\s*\)\s*(uniform\s+((lowp|mediump|highp)\s+)?\w+\s+(\w+))/g;
    var _0x31df13 = {};
    var _0x303308;
    while (_0x303308 = _0x35e41b.exec(_0x4763c0)) {
      _0x31df13[_0x303308[5]] = _0x54d60e(_0x303308[1]);
      if (!(_0x31df13[_0x303308[5]] >= 0) || !(_0x31df13[_0x303308[5]] < 1048576)) {
        console.error("Specified an out of range layout(location=x) directive \"" + _0x31df13[_0x303308[5]] + "\"! (" + _0x303308[0] + ")");
        _0x58939e.recordError(1281);
        return;
      }
    }
    _0x4763c0 = _0x4763c0.replace(_0x35e41b, "$2");
    _0x58939e.shaders[_0x175e92].explicitUniformLocations = _0x31df13;
    var _0x37e0d8 = /layout\s*\(.*?binding\s*=\s*(-?\d+).*?\)\s*uniform\s+(\w+)\s+(\w+)?/g;
    var _0xae6766 = {};
    var _0x448418 = {};
    var _0x3ba9db;
    while (_0x3ba9db = _0x37e0d8.exec(_0x4763c0)) {
      var _0x475693 = 1;
      for (var _0x45959b = _0x3ba9db.index; _0x45959b < _0x4763c0.length && _0x4763c0[_0x45959b] != ";"; ++_0x45959b) {
        if (_0x4763c0[_0x45959b] == "[") {
          _0x475693 = _0x54d60e(_0x4763c0.slice(_0x45959b + 1));
          break;
        }
        if (_0x4763c0[_0x45959b] == "{") {
          _0x45959b = _0xc97d2c(_0x4763c0, _0x45959b, "{", "}") - 1;
        }
      }
      var _0x4173c9 = _0x54d60e(_0x3ba9db[1]);
      var _0x4504b0 = 34930;
      if (_0x3ba9db[3] && _0x3ba9db[2].indexOf("sampler") != -1) {
        _0xae6766[_0x3ba9db[3]] = [_0x4173c9, _0x475693];
      } else {
        _0x4504b0 = 35374;
        _0x448418[_0x3ba9db[2]] = [_0x4173c9, _0x475693];
      }
      var _0x4fb23e = _0x149f8b.getParameter(_0x4504b0);
      if (!(_0x4173c9 >= 0) || !(_0x4173c9 + _0x475693 <= _0x4fb23e)) {
        console.error("Specified an out of range layout(binding=x) directive \"" + _0x4173c9 + "\"! (" + _0x3ba9db[0] + "). Valid range is [0, " + _0x4fb23e + "-1]");
        _0x58939e.recordError(1281);
        return;
      }
    }
    _0x4763c0 = _0x4763c0.replace(/layout\s*\(.*?binding\s*=\s*([-\d]+).*?\)/g, "");
    _0x4763c0 = _0x4763c0.replace(/(layout\s*\((.*?)),\s*binding\s*=\s*([-\d]+)\)/g, "$1)");
    _0x4763c0 = _0x4763c0.replace(/layout\s*\(\s*binding\s*=\s*([-\d]+)\s*,(.*?)\)/g, "layout($2)");
    _0x58939e.shaders[_0x175e92].explicitSamplerBindings = _0xae6766;
    _0x58939e.shaders[_0x175e92].explicitUniformBindings = _0x448418;
    _0x149f8b.shaderSource(_0x58939e.shaders[_0x175e92], _0x4763c0);
  }
  function _0x1fdb44(_0x467ffb, _0x14d13f, _0x1f849b, _0x3233f5) {
    _0x149f8b.stencilFuncSeparate(_0x467ffb, _0x14d13f, _0x1f849b, _0x3233f5);
  }
  function _0x55c386(_0x5fb51c) {
    _0x149f8b.stencilMask(_0x5fb51c);
  }
  function _0x4d7c8e(_0x120a1a, _0x1f46b8, _0x1595e8, _0x1d2a82) {
    _0x149f8b.stencilOpSeparate(_0x120a1a, _0x1f46b8, _0x1595e8, _0x1d2a82);
  }
  function _0x3d61eb(_0x8d89b4, _0x5152d7, _0x582ab4, _0x32996e, _0x4702ff, _0x12853a, _0x253381, _0x29fe9a, _0x515931) {
    if (_0x58939e.currentContext.version >= 2) {
      if (_0x149f8b.currentPixelUnpackBufferBinding) {
        _0x149f8b.texImage2D(_0x8d89b4, _0x5152d7, _0x582ab4, _0x32996e, _0x4702ff, _0x12853a, _0x253381, _0x29fe9a, _0x515931);
      } else if (_0x515931) {
        var _0x6c617a = _0x1637ed(_0x29fe9a);
        _0x149f8b.texImage2D(_0x8d89b4, _0x5152d7, _0x582ab4, _0x32996e, _0x4702ff, _0x12853a, _0x253381, _0x29fe9a, _0x6c617a, _0x515931 >> _0x1baa5e(_0x6c617a));
      } else {
        _0x149f8b.texImage2D(_0x8d89b4, _0x5152d7, _0x582ab4, _0x32996e, _0x4702ff, _0x12853a, _0x253381, _0x29fe9a, null);
      }
      return;
    }
    _0x149f8b.texImage2D(_0x8d89b4, _0x5152d7, _0x582ab4, _0x32996e, _0x4702ff, _0x12853a, _0x253381, _0x29fe9a, _0x515931 ? _0x2c66fd(_0x29fe9a, _0x253381, _0x32996e, _0x4702ff, _0x515931, _0x582ab4) : null);
  }
  function _0xc30eb3(_0x480c3d, _0x4b5a2a, _0x5cf556, _0x45e1b6, _0x1eb16b, _0x5a6871, _0x14752d, _0x950132, _0x1f8758, _0x17397d) {
    if (_0x149f8b.currentPixelUnpackBufferBinding) {
      _0x149f8b.texImage3D(_0x480c3d, _0x4b5a2a, _0x5cf556, _0x45e1b6, _0x1eb16b, _0x5a6871, _0x14752d, _0x950132, _0x1f8758, _0x17397d);
    } else if (_0x17397d) {
      var _0x1bfb25 = _0x1637ed(_0x1f8758);
      _0x149f8b.texImage3D(_0x480c3d, _0x4b5a2a, _0x5cf556, _0x45e1b6, _0x1eb16b, _0x5a6871, _0x14752d, _0x950132, _0x1f8758, _0x1bfb25, _0x17397d >> _0x1baa5e(_0x1bfb25));
    } else {
      _0x149f8b.texImage3D(_0x480c3d, _0x4b5a2a, _0x5cf556, _0x45e1b6, _0x1eb16b, _0x5a6871, _0x14752d, _0x950132, _0x1f8758, null);
    }
  }
  function _0x10cce0(_0x521cd5, _0x1da983, _0x281680) {
    _0x149f8b.texParameterf(_0x521cd5, _0x1da983, _0x281680);
  }
  function _0x57fda2(_0x4f3e9d, _0x2e4914, _0x26203e) {
    _0x149f8b.texParameteri(_0x4f3e9d, _0x2e4914, _0x26203e);
  }
  function _0x284e82(_0x98486e, _0x36aa8e, _0x542e33) {
    var _0x22d7d1 = _0x4e86a5[_0x542e33 >> 2];
    _0x149f8b.texParameteri(_0x98486e, _0x36aa8e, _0x22d7d1);
  }
  function _0x4e34a7(_0x4258df, _0x341765, _0x9b7138, _0xab992f, _0x110ba8) {
    _0x149f8b.texStorage2D(_0x4258df, _0x341765, _0x9b7138, _0xab992f, _0x110ba8);
  }
  function _0x4530d5(_0x1d401f, _0x19233f, _0x3e243b, _0x5b7181, _0x2b2ff0, _0x4d0796) {
    _0x149f8b.texStorage3D(_0x1d401f, _0x19233f, _0x3e243b, _0x5b7181, _0x2b2ff0, _0x4d0796);
  }
  function _0x33d05f(_0x1a8798, _0x215711, _0x169b3f, _0xd8a7a3, _0x12205d, _0x474152, _0x480adc, _0x41b23b, _0x5a9d5e) {
    if (_0x58939e.currentContext.version >= 2) {
      if (_0x149f8b.currentPixelUnpackBufferBinding) {
        _0x149f8b.texSubImage2D(_0x1a8798, _0x215711, _0x169b3f, _0xd8a7a3, _0x12205d, _0x474152, _0x480adc, _0x41b23b, _0x5a9d5e);
      } else if (_0x5a9d5e) {
        var _0x222193 = _0x1637ed(_0x41b23b);
        _0x149f8b.texSubImage2D(_0x1a8798, _0x215711, _0x169b3f, _0xd8a7a3, _0x12205d, _0x474152, _0x480adc, _0x41b23b, _0x222193, _0x5a9d5e >> _0x1baa5e(_0x222193));
      } else {
        _0x149f8b.texSubImage2D(_0x1a8798, _0x215711, _0x169b3f, _0xd8a7a3, _0x12205d, _0x474152, _0x480adc, _0x41b23b, null);
      }
      return;
    }
    var _0x43174f = null;
    if (_0x5a9d5e) {
      _0x43174f = _0x2c66fd(_0x41b23b, _0x480adc, _0x12205d, _0x474152, _0x5a9d5e, 0);
    }
    _0x149f8b.texSubImage2D(_0x1a8798, _0x215711, _0x169b3f, _0xd8a7a3, _0x12205d, _0x474152, _0x480adc, _0x41b23b, _0x43174f);
  }
  function _0x5a9cb5(_0x3d61e9, _0x120c00, _0x183d81, _0x12f5f0, _0x5e4f52, _0x5616fa, _0x3766f9, _0x314d2c, _0xffaac, _0x5a1334, _0x4d668b) {
    if (_0x149f8b.currentPixelUnpackBufferBinding) {
      _0x149f8b.texSubImage3D(_0x3d61e9, _0x120c00, _0x183d81, _0x12f5f0, _0x5e4f52, _0x5616fa, _0x3766f9, _0x314d2c, _0xffaac, _0x5a1334, _0x4d668b);
    } else if (_0x4d668b) {
      var _0x33a7e3 = _0x1637ed(_0x5a1334);
      _0x149f8b.texSubImage3D(_0x3d61e9, _0x120c00, _0x183d81, _0x12f5f0, _0x5e4f52, _0x5616fa, _0x3766f9, _0x314d2c, _0xffaac, _0x5a1334, _0x33a7e3, _0x4d668b >> _0x1baa5e(_0x33a7e3));
    } else {
      _0x149f8b.texSubImage3D(_0x3d61e9, _0x120c00, _0x183d81, _0x12f5f0, _0x5e4f52, _0x5616fa, _0x3766f9, _0x314d2c, _0xffaac, _0x5a1334, null);
    }
  }
  function _0x39fbcb(_0x3a397e, _0x197f1c, _0x3df509, _0x4fa746) {
    _0x3a397e = _0x58939e.programs[_0x3a397e];
    var _0x3984fb = [];
    for (var _0x112186 = 0; _0x112186 < _0x197f1c; _0x112186++) {
      _0x3984fb.push(_0x5c2e85(_0x4e86a5[_0x3df509 + _0x112186 * 4 >> 2]));
    }
    _0x149f8b.transformFeedbackVaryings(_0x3a397e, _0x3984fb, _0x4fa746);
  }
  var _0x1984ad = [];
  function _0x4c8251(_0x368c71, _0x4c3ede, _0x11e54b) {
    if (_0x58939e.currentContext.version >= 2) {
      _0x149f8b.uniform1fv(_0x432dba(_0x368c71), _0x5e6300, _0x11e54b >> 2, _0x4c3ede);
      return;
    }
    if (_0x4c3ede <= 288) {
      var _0xc9702 = _0x1984ad[_0x4c3ede - 1];
      for (var _0x3cc988 = 0; _0x3cc988 < _0x4c3ede; ++_0x3cc988) {
        _0xc9702[_0x3cc988] = _0x5e6300[_0x11e54b + _0x3cc988 * 4 >> 2];
      }
    } else {
      var _0xc9702 = _0x5e6300.subarray(_0x11e54b >> 2, _0x11e54b + _0x4c3ede * 4 >> 2);
    }
    _0x149f8b.uniform1fv(_0x432dba(_0x368c71), _0xc9702);
  }
  function _0x46dcf6(_0x19c075, _0x3a0045) {
    _0x149f8b.uniform1i(_0x432dba(_0x19c075), _0x3a0045);
  }
  var _0x3f130a = [];
  function _0x38d55a(_0x52f1af, _0x4d6f38, _0x146920) {
    if (_0x58939e.currentContext.version >= 2) {
      _0x149f8b.uniform1iv(_0x432dba(_0x52f1af), _0x4e86a5, _0x146920 >> 2, _0x4d6f38);
      return;
    }
    if (_0x4d6f38 <= 288) {
      var _0x1c23f1 = _0x3f130a[_0x4d6f38 - 1];
      for (var _0x1ad4b2 = 0; _0x1ad4b2 < _0x4d6f38; ++_0x1ad4b2) {
        _0x1c23f1[_0x1ad4b2] = _0x4e86a5[_0x146920 + _0x1ad4b2 * 4 >> 2];
      }
    } else {
      var _0x1c23f1 = _0x4e86a5.subarray(_0x146920 >> 2, _0x146920 + _0x4d6f38 * 4 >> 2);
    }
    _0x149f8b.uniform1iv(_0x432dba(_0x52f1af), _0x1c23f1);
  }
  function _0x415b49(_0x4866bc, _0x5d728b, _0x90f9fd) {
    _0x149f8b.uniform1uiv(_0x432dba(_0x4866bc), _0x4cad96, _0x90f9fd >> 2, _0x5d728b);
  }
  function _0x5cc379(_0x50f27b, _0x103127, _0x47cdd7) {
    if (_0x58939e.currentContext.version >= 2) {
      _0x149f8b.uniform2fv(_0x432dba(_0x50f27b), _0x5e6300, _0x47cdd7 >> 2, _0x103127 * 2);
      return;
    }
    if (_0x103127 <= 144) {
      var _0x223a2a = _0x1984ad[_0x103127 * 2 - 1];
      for (var _0x26148a = 0; _0x26148a < _0x103127 * 2; _0x26148a += 2) {
        _0x223a2a[_0x26148a] = _0x5e6300[_0x47cdd7 + _0x26148a * 4 >> 2];
        _0x223a2a[_0x26148a + 1] = _0x5e6300[_0x47cdd7 + (_0x26148a * 4 + 4) >> 2];
      }
    } else {
      var _0x223a2a = _0x5e6300.subarray(_0x47cdd7 >> 2, _0x47cdd7 + _0x103127 * 8 >> 2);
    }
    _0x149f8b.uniform2fv(_0x432dba(_0x50f27b), _0x223a2a);
  }
  function _0x3519ac(_0x258769, _0x195e60, _0x2c4775) {
    if (_0x58939e.currentContext.version >= 2) {
      _0x149f8b.uniform2iv(_0x432dba(_0x258769), _0x4e86a5, _0x2c4775 >> 2, _0x195e60 * 2);
      return;
    }
    if (_0x195e60 <= 144) {
      var _0x4db8f1 = _0x3f130a[_0x195e60 * 2 - 1];
      for (var _0x2f041e = 0; _0x2f041e < _0x195e60 * 2; _0x2f041e += 2) {
        _0x4db8f1[_0x2f041e] = _0x4e86a5[_0x2c4775 + _0x2f041e * 4 >> 2];
        _0x4db8f1[_0x2f041e + 1] = _0x4e86a5[_0x2c4775 + (_0x2f041e * 4 + 4) >> 2];
      }
    } else {
      var _0x4db8f1 = _0x4e86a5.subarray(_0x2c4775 >> 2, _0x2c4775 + _0x195e60 * 8 >> 2);
    }
    _0x149f8b.uniform2iv(_0x432dba(_0x258769), _0x4db8f1);
  }
  function _0xc345ce(_0x37849e, _0x2eb08, _0x5d9523) {
    _0x149f8b.uniform2uiv(_0x432dba(_0x37849e), _0x4cad96, _0x5d9523 >> 2, _0x2eb08 * 2);
  }
  function _0xba79b8(_0x19f621, _0x30ef34, _0x249e4a) {
    if (_0x58939e.currentContext.version >= 2) {
      _0x149f8b.uniform3fv(_0x432dba(_0x19f621), _0x5e6300, _0x249e4a >> 2, _0x30ef34 * 3);
      return;
    }
    if (_0x30ef34 <= 96) {
      var _0x5de3b2 = _0x1984ad[_0x30ef34 * 3 - 1];
      for (var _0x9ca51a = 0; _0x9ca51a < _0x30ef34 * 3; _0x9ca51a += 3) {
        _0x5de3b2[_0x9ca51a] = _0x5e6300[_0x249e4a + _0x9ca51a * 4 >> 2];
        _0x5de3b2[_0x9ca51a + 1] = _0x5e6300[_0x249e4a + (_0x9ca51a * 4 + 4) >> 2];
        _0x5de3b2[_0x9ca51a + 2] = _0x5e6300[_0x249e4a + (_0x9ca51a * 4 + 8) >> 2];
      }
    } else {
      var _0x5de3b2 = _0x5e6300.subarray(_0x249e4a >> 2, _0x249e4a + _0x30ef34 * 12 >> 2);
    }
    _0x149f8b.uniform3fv(_0x432dba(_0x19f621), _0x5de3b2);
  }
  function _0xc562ed(_0x7f7d14, _0xed4b46, _0x3a871c) {
    if (_0x58939e.currentContext.version >= 2) {
      _0x149f8b.uniform3iv(_0x432dba(_0x7f7d14), _0x4e86a5, _0x3a871c >> 2, _0xed4b46 * 3);
      return;
    }
    if (_0xed4b46 <= 96) {
      var _0x1eef48 = _0x3f130a[_0xed4b46 * 3 - 1];
      for (var _0x3ada34 = 0; _0x3ada34 < _0xed4b46 * 3; _0x3ada34 += 3) {
        _0x1eef48[_0x3ada34] = _0x4e86a5[_0x3a871c + _0x3ada34 * 4 >> 2];
        _0x1eef48[_0x3ada34 + 1] = _0x4e86a5[_0x3a871c + (_0x3ada34 * 4 + 4) >> 2];
        _0x1eef48[_0x3ada34 + 2] = _0x4e86a5[_0x3a871c + (_0x3ada34 * 4 + 8) >> 2];
      }
    } else {
      var _0x1eef48 = _0x4e86a5.subarray(_0x3a871c >> 2, _0x3a871c + _0xed4b46 * 12 >> 2);
    }
    _0x149f8b.uniform3iv(_0x432dba(_0x7f7d14), _0x1eef48);
  }
  function _0x584832(_0x40252c, _0x8d27c8, _0x36a978) {
    _0x149f8b.uniform3uiv(_0x432dba(_0x40252c), _0x4cad96, _0x36a978 >> 2, _0x8d27c8 * 3);
  }
  function _0x39b445(_0x5d9e1e, _0x579385, _0x20363a) {
    if (_0x58939e.currentContext.version >= 2) {
      _0x149f8b.uniform4fv(_0x432dba(_0x5d9e1e), _0x5e6300, _0x20363a >> 2, _0x579385 * 4);
      return;
    }
    if (_0x579385 <= 72) {
      var _0x4b6a85 = _0x1984ad[_0x579385 * 4 - 1];
      var _0x165a22 = _0x5e6300;
      _0x20363a >>= 2;
      for (var _0x4b3f67 = 0; _0x4b3f67 < _0x579385 * 4; _0x4b3f67 += 4) {
        var _0xefdb81 = _0x20363a + _0x4b3f67;
        _0x4b6a85[_0x4b3f67] = _0x165a22[_0xefdb81];
        _0x4b6a85[_0x4b3f67 + 1] = _0x165a22[_0xefdb81 + 1];
        _0x4b6a85[_0x4b3f67 + 2] = _0x165a22[_0xefdb81 + 2];
        _0x4b6a85[_0x4b3f67 + 3] = _0x165a22[_0xefdb81 + 3];
      }
    } else {
      var _0x4b6a85 = _0x5e6300.subarray(_0x20363a >> 2, _0x20363a + _0x579385 * 16 >> 2);
    }
    _0x149f8b.uniform4fv(_0x432dba(_0x5d9e1e), _0x4b6a85);
  }
  function _0x2075c7(_0x55a920, _0x559d7c, _0x33f45e) {
    if (_0x58939e.currentContext.version >= 2) {
      _0x149f8b.uniform4iv(_0x432dba(_0x55a920), _0x4e86a5, _0x33f45e >> 2, _0x559d7c * 4);
      return;
    }
    if (_0x559d7c <= 72) {
      var _0x5d7200 = _0x3f130a[_0x559d7c * 4 - 1];
      for (var _0x5088bb = 0; _0x5088bb < _0x559d7c * 4; _0x5088bb += 4) {
        _0x5d7200[_0x5088bb] = _0x4e86a5[_0x33f45e + _0x5088bb * 4 >> 2];
        _0x5d7200[_0x5088bb + 1] = _0x4e86a5[_0x33f45e + (_0x5088bb * 4 + 4) >> 2];
        _0x5d7200[_0x5088bb + 2] = _0x4e86a5[_0x33f45e + (_0x5088bb * 4 + 8) >> 2];
        _0x5d7200[_0x5088bb + 3] = _0x4e86a5[_0x33f45e + (_0x5088bb * 4 + 12) >> 2];
      }
    } else {
      var _0x5d7200 = _0x4e86a5.subarray(_0x33f45e >> 2, _0x33f45e + _0x559d7c * 16 >> 2);
    }
    _0x149f8b.uniform4iv(_0x432dba(_0x55a920), _0x5d7200);
  }
  function _0x5a6eed(_0x482154, _0xac5f22, _0x269797) {
    _0x149f8b.uniform4uiv(_0x432dba(_0x482154), _0x4cad96, _0x269797 >> 2, _0xac5f22 * 4);
  }
  function _0x53a010(_0x3cea16, _0x466442, _0x3ceab6) {
    _0x3cea16 = _0x58939e.programs[_0x3cea16];
    _0x149f8b.uniformBlockBinding(_0x3cea16, _0x466442, _0x3ceab6);
  }
  function _0x2c0c24(_0xbd54b4, _0xcc3539, _0x53d0cb, _0x1e0b79) {
    if (_0x58939e.currentContext.version >= 2) {
      _0x149f8b.uniformMatrix3fv(_0x432dba(_0xbd54b4), !!_0x53d0cb, _0x5e6300, _0x1e0b79 >> 2, _0xcc3539 * 9);
      return;
    }
    if (_0xcc3539 <= 32) {
      var _0x3d472d = _0x1984ad[_0xcc3539 * 9 - 1];
      for (var _0x2d4fe3 = 0; _0x2d4fe3 < _0xcc3539 * 9; _0x2d4fe3 += 9) {
        _0x3d472d[_0x2d4fe3] = _0x5e6300[_0x1e0b79 + _0x2d4fe3 * 4 >> 2];
        _0x3d472d[_0x2d4fe3 + 1] = _0x5e6300[_0x1e0b79 + (_0x2d4fe3 * 4 + 4) >> 2];
        _0x3d472d[_0x2d4fe3 + 2] = _0x5e6300[_0x1e0b79 + (_0x2d4fe3 * 4 + 8) >> 2];
        _0x3d472d[_0x2d4fe3 + 3] = _0x5e6300[_0x1e0b79 + (_0x2d4fe3 * 4 + 12) >> 2];
        _0x3d472d[_0x2d4fe3 + 4] = _0x5e6300[_0x1e0b79 + (_0x2d4fe3 * 4 + 16) >> 2];
        _0x3d472d[_0x2d4fe3 + 5] = _0x5e6300[_0x1e0b79 + (_0x2d4fe3 * 4 + 20) >> 2];
        _0x3d472d[_0x2d4fe3 + 6] = _0x5e6300[_0x1e0b79 + (_0x2d4fe3 * 4 + 24) >> 2];
        _0x3d472d[_0x2d4fe3 + 7] = _0x5e6300[_0x1e0b79 + (_0x2d4fe3 * 4 + 28) >> 2];
        _0x3d472d[_0x2d4fe3 + 8] = _0x5e6300[_0x1e0b79 + (_0x2d4fe3 * 4 + 32) >> 2];
      }
    } else {
      var _0x3d472d = _0x5e6300.subarray(_0x1e0b79 >> 2, _0x1e0b79 + _0xcc3539 * 36 >> 2);
    }
    _0x149f8b.uniformMatrix3fv(_0x432dba(_0xbd54b4), !!_0x53d0cb, _0x3d472d);
  }
  function _0x279e08(_0x1a0bc7, _0x70fd00, _0x38d155, _0x503b5e) {
    if (_0x58939e.currentContext.version >= 2) {
      _0x149f8b.uniformMatrix4fv(_0x432dba(_0x1a0bc7), !!_0x38d155, _0x5e6300, _0x503b5e >> 2, _0x70fd00 * 16);
      return;
    }
    if (_0x70fd00 <= 18) {
      var _0x3ac777 = _0x1984ad[_0x70fd00 * 16 - 1];
      var _0x23c016 = _0x5e6300;
      _0x503b5e >>= 2;
      for (var _0x155cfc = 0; _0x155cfc < _0x70fd00 * 16; _0x155cfc += 16) {
        var _0x42b4af = _0x503b5e + _0x155cfc;
        _0x3ac777[_0x155cfc] = _0x23c016[_0x42b4af];
        _0x3ac777[_0x155cfc + 1] = _0x23c016[_0x42b4af + 1];
        _0x3ac777[_0x155cfc + 2] = _0x23c016[_0x42b4af + 2];
        _0x3ac777[_0x155cfc + 3] = _0x23c016[_0x42b4af + 3];
        _0x3ac777[_0x155cfc + 4] = _0x23c016[_0x42b4af + 4];
        _0x3ac777[_0x155cfc + 5] = _0x23c016[_0x42b4af + 5];
        _0x3ac777[_0x155cfc + 6] = _0x23c016[_0x42b4af + 6];
        _0x3ac777[_0x155cfc + 7] = _0x23c016[_0x42b4af + 7];
        _0x3ac777[_0x155cfc + 8] = _0x23c016[_0x42b4af + 8];
        _0x3ac777[_0x155cfc + 9] = _0x23c016[_0x42b4af + 9];
        _0x3ac777[_0x155cfc + 10] = _0x23c016[_0x42b4af + 10];
        _0x3ac777[_0x155cfc + 11] = _0x23c016[_0x42b4af + 11];
        _0x3ac777[_0x155cfc + 12] = _0x23c016[_0x42b4af + 12];
        _0x3ac777[_0x155cfc + 13] = _0x23c016[_0x42b4af + 13];
        _0x3ac777[_0x155cfc + 14] = _0x23c016[_0x42b4af + 14];
        _0x3ac777[_0x155cfc + 15] = _0x23c016[_0x42b4af + 15];
      }
    } else {
      var _0x3ac777 = _0x5e6300.subarray(_0x503b5e >> 2, _0x503b5e + _0x70fd00 * 64 >> 2);
    }
    _0x149f8b.uniformMatrix4fv(_0x432dba(_0x1a0bc7), !!_0x38d155, _0x3ac777);
  }
  function _0x51be74(_0x1baa13) {
    if (!_0x4bd9d9(_0x1baa13)) {
      _0x58939e.recordError(1280);
      _0x1650b6("GL_INVALID_ENUM in glUnmapBuffer");
      return 0;
    }
    var _0x16ebe9 = _0x299f4e(_0x1baa13);
    var _0x4189b7 = _0x58939e.mappedBuffers[_0x16ebe9];
    if (!_0x4189b7) {
      _0x58939e.recordError(1282);
      _0x1650b6("buffer was never mapped in glUnmapBuffer");
      return 0;
    }
    _0x58939e.mappedBuffers[_0x16ebe9] = null;
    if (!(_0x4189b7.access & 16)) {
      if (_0x58939e.currentContext.version >= 2) {
        _0x149f8b.bufferSubData(_0x1baa13, _0x4189b7.offset, _0x950143, _0x4189b7.mem, _0x4189b7.length);
      } else {
        _0x149f8b.bufferSubData(_0x1baa13, _0x4189b7.offset, _0x950143.subarray(_0x4189b7.mem, _0x4189b7.mem + _0x4189b7.length));
      }
    }
    _0x2933c1(_0x4189b7.mem);
    return 1;
  }
  function _0x2d6ddf() {
    var _0x4cc3d2 = _0x149f8b.currentProgram;
    if (!_0x4cc3d2.explicitProgramBindingsApplied) {
      if (_0x58939e.currentContext.version >= 2) {
        Object.keys(_0x4cc3d2.explicitUniformBindings).forEach(function (_0x5964e3) {
          var _0x2839eb = _0x4cc3d2.explicitUniformBindings[_0x5964e3];
          for (var _0x546c07 = 0; _0x546c07 < _0x2839eb[1]; ++_0x546c07) {
            var _0x182fc2 = _0x149f8b.getUniformBlockIndex(_0x4cc3d2, _0x5964e3 + (_0x2839eb[1] > 1 ? "[" + _0x546c07 + "]" : ""));
            _0x149f8b.uniformBlockBinding(_0x4cc3d2, _0x182fc2, _0x2839eb[0] + _0x546c07);
          }
        });
      }
      Object.keys(_0x4cc3d2.explicitSamplerBindings).forEach(function (_0x474de3) {
        var _0xb94b13 = _0x4cc3d2.explicitSamplerBindings[_0x474de3];
        for (var _0x7e6ad3 = 0; _0x7e6ad3 < _0xb94b13[1]; ++_0x7e6ad3) {
          _0x149f8b.uniform1i(_0x149f8b.getUniformLocation(_0x4cc3d2, _0x474de3 + (_0x7e6ad3 ? "[" + _0x7e6ad3 + "]" : "")), _0xb94b13[0] + _0x7e6ad3);
        }
      });
      _0x4cc3d2.explicitProgramBindingsApplied = 1;
    }
  }
  function _0x80b1ee(_0x2ca400) {
    _0x2ca400 = _0x58939e.programs[_0x2ca400];
    _0x149f8b.useProgram(_0x2ca400);
    if (_0x149f8b.currentProgram = _0x2ca400) {
      _0x2d6ddf();
    }
  }
  function _0x25e955(_0xd29a2d) {
    _0x149f8b.validateProgram(_0x58939e.programs[_0xd29a2d]);
  }
  function _0x359124(_0x69ef59, _0xfd85e3, _0x302705, _0x5f1cf7, _0x47c941) {
    _0x149f8b.vertexAttrib4f(_0x69ef59, _0xfd85e3, _0x302705, _0x5f1cf7, _0x47c941);
  }
  function _0x4573b2(_0x32106a, _0x55f9e3) {
    _0x149f8b.vertexAttrib4f(_0x32106a, _0x5e6300[_0x55f9e3 >> 2], _0x5e6300[_0x55f9e3 + 4 >> 2], _0x5e6300[_0x55f9e3 + 8 >> 2], _0x5e6300[_0x55f9e3 + 12 >> 2]);
  }
  function _0x572760(_0x4b6471, _0x5a7549, _0xffddd8, _0x342b1e, _0x5e5b46) {
    var _0xfa20aa = _0x58939e.currentContext.clientBuffers[_0x4b6471];
    if (!_0x149f8b.currentArrayBufferBinding) {
      _0xfa20aa.size = _0x5a7549;
      _0xfa20aa.type = _0xffddd8;
      _0xfa20aa.normalized = false;
      _0xfa20aa.stride = _0x342b1e;
      _0xfa20aa.ptr = _0x5e5b46;
      _0xfa20aa.clientside = true;
      _0xfa20aa.vertexAttribPointerAdaptor = function (_0x29e04f, _0x435c5a, _0x7b530c, _0x2fb22d, _0xa5c7a, _0x5f1060) {
        this.vertexAttribIPointer(_0x29e04f, _0x435c5a, _0x7b530c, _0xa5c7a, _0x5f1060);
      };
      return;
    }
    _0xfa20aa.clientside = false;
    _0x149f8b.vertexAttribIPointer(_0x4b6471, _0x5a7549, _0xffddd8, _0x342b1e, _0x5e5b46);
  }
  function _0xce821a(_0x3dd52a, _0x5fabd, _0x4050a2, _0x2facab, _0xf34a72, _0x443c3b) {
    var _0x464414 = _0x58939e.currentContext.clientBuffers[_0x3dd52a];
    if (!_0x149f8b.currentArrayBufferBinding) {
      _0x464414.size = _0x5fabd;
      _0x464414.type = _0x4050a2;
      _0x464414.normalized = _0x2facab;
      _0x464414.stride = _0xf34a72;
      _0x464414.ptr = _0x443c3b;
      _0x464414.clientside = true;
      _0x464414.vertexAttribPointerAdaptor = function (_0x57fa85, _0x4526bf, _0x3adefa, _0xb8cab0, _0x58a02e, _0x1b6f41) {
        this.vertexAttribPointer(_0x57fa85, _0x4526bf, _0x3adefa, _0xb8cab0, _0x58a02e, _0x1b6f41);
      };
      return;
    }
    _0x464414.clientside = false;
    _0x149f8b.vertexAttribPointer(_0x3dd52a, _0x5fabd, _0x4050a2, !!_0x2facab, _0xf34a72, _0x443c3b);
  }
  function _0x512bd1(_0x2a8ad, _0x42544b, _0x17e33c, _0x4d85ad) {
    _0x149f8b.viewport(_0x2a8ad, _0x42544b, _0x17e33c, _0x4d85ad);
  }
  function _0x2bb810(_0xb5da6) {
    return _0xb5da6;
  }
  function _0x44ebdf(_0x2c97b3) {
    _0x3a6dfc();
    var _0x503308 = new Date(_0x4e86a5[_0x2c97b3 + 20 >> 2] + 1900, _0x4e86a5[_0x2c97b3 + 16 >> 2], _0x4e86a5[_0x2c97b3 + 12 >> 2], _0x4e86a5[_0x2c97b3 + 8 >> 2], _0x4e86a5[_0x2c97b3 + 4 >> 2], _0x4e86a5[_0x2c97b3 >> 2], 0);
    var _0x3ec131 = _0x4e86a5[_0x2c97b3 + 32 >> 2];
    var _0x4325ac = _0x503308.getTimezoneOffset();
    var _0x209103 = new Date(_0x503308.getFullYear(), 0, 1);
    var _0x147ff3 = new Date(_0x503308.getFullYear(), 6, 1).getTimezoneOffset();
    var _0x13d266 = _0x209103.getTimezoneOffset();
    var _0x59a8e6 = Math.min(_0x13d266, _0x147ff3);
    if (_0x3ec131 < 0) {
      _0x4e86a5[_0x2c97b3 + 32 >> 2] = Number(_0x147ff3 != _0x13d266 && _0x59a8e6 == _0x4325ac);
    } else if (_0x3ec131 > 0 != (_0x59a8e6 == _0x4325ac)) {
      var _0x20e51f = Math.max(_0x13d266, _0x147ff3);
      var _0x4c618d = _0x3ec131 > 0 ? _0x59a8e6 : _0x20e51f;
      _0x503308.setTime(_0x503308.getTime() + (_0x4c618d - _0x4325ac) * 60000);
    }
    _0x4e86a5[_0x2c97b3 + 24 >> 2] = _0x503308.getDay();
    var _0x1e7ed3 = (_0x503308.getTime() - _0x209103.getTime()) / 86400000 | 0;
    _0x4e86a5[_0x2c97b3 + 28 >> 2] = _0x1e7ed3;
    _0x4e86a5[_0x2c97b3 >> 2] = _0x503308.getSeconds();
    _0x4e86a5[_0x2c97b3 + 4 >> 2] = _0x503308.getMinutes();
    _0x4e86a5[_0x2c97b3 + 8 >> 2] = _0x503308.getHours();
    _0x4e86a5[_0x2c97b3 + 12 >> 2] = _0x503308.getDate();
    _0x4e86a5[_0x2c97b3 + 16 >> 2] = _0x503308.getMonth();
    return _0x503308.getTime() / 1000 | 0;
  }
  function _0x1b2af8(_0x2e3497) {
    _0x437c38(_0x2e3497);
  }
  function _0xbbcd1a(_0x37b1cd, _0x642e30, _0x1b72fe) {
    return 0;
  }
  function _0x5d6927(_0x49ffa3) {
    _0x4e86a5[_0x49ffa3 >> 2] = 0;
    return 0;
  }
  function _0x4538f7(_0x2bef50) {
    return _0x2bef50 % 4 === 0 && (_0x2bef50 % 100 !== 0 || _0x2bef50 % 400 === 0);
  }
  function _0x32ba57(_0x14d11c, _0x2de563) {
    var _0x8c2175 = 0;
    for (var _0x3a1b5c = 0; _0x3a1b5c <= _0x2de563; _0x8c2175 += _0x14d11c[_0x3a1b5c++]) {}
    return _0x8c2175;
  }
  var _0x15b542 = [31, 29, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
  var _0x818fd1 = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
  function _0xc260db(_0x1cf0a7, _0x1e8ff7) {
    var _0x5b31a8 = new Date(_0x1cf0a7.getTime());
    while (_0x1e8ff7 > 0) {
      var _0x203b72 = _0x4538f7(_0x5b31a8.getFullYear());
      var _0x48e37e = _0x5b31a8.getMonth();
      var _0x1ebd06 = (_0x203b72 ? _0x15b542 : _0x818fd1)[_0x48e37e];
      if (_0x1e8ff7 > _0x1ebd06 - _0x5b31a8.getDate()) {
        _0x1e8ff7 -= _0x1ebd06 - _0x5b31a8.getDate() + 1;
        _0x5b31a8.setDate(1);
        if (_0x48e37e < 11) {
          _0x5b31a8.setMonth(_0x48e37e + 1);
        } else {
          _0x5b31a8.setMonth(0);
          _0x5b31a8.setFullYear(_0x5b31a8.getFullYear() + 1);
        }
      } else {
        _0x5b31a8.setDate(_0x5b31a8.getDate() + _0x1e8ff7);
        return _0x5b31a8;
      }
    }
    return _0x5b31a8;
  }
  function _0xc1adc1(_0x57ecce, _0x15c66b, _0x3a682e, _0x39508e) {
    var _0x13829f = _0x4e86a5[_0x39508e + 40 >> 2];
    var _0x1cb838 = {
      tm_sec: _0x4e86a5[_0x39508e >> 2],
      tm_min: _0x4e86a5[_0x39508e + 4 >> 2],
      tm_hour: _0x4e86a5[_0x39508e + 8 >> 2],
      tm_mday: _0x4e86a5[_0x39508e + 12 >> 2],
      tm_mon: _0x4e86a5[_0x39508e + 16 >> 2],
      tm_year: _0x4e86a5[_0x39508e + 20 >> 2],
      tm_wday: _0x4e86a5[_0x39508e + 24 >> 2],
      tm_yday: _0x4e86a5[_0x39508e + 28 >> 2],
      tm_isdst: _0x4e86a5[_0x39508e + 32 >> 2],
      tm_gmtoff: _0x4e86a5[_0x39508e + 36 >> 2],
      tm_zone: _0x13829f ? _0x5c2e85(_0x13829f) : ""
    };
    var _0x1e2ad1 = _0x5c2e85(_0x3a682e);
    var _0x2595d5 = {
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
    for (var _0x2b41d0 in _0x2595d5) {
      _0x1e2ad1 = _0x1e2ad1.replace(new RegExp(_0x2b41d0, "g"), _0x2595d5[_0x2b41d0]);
    }
    var _0x4eccec = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    var _0x5cbc9d = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    function _0x2b62a5(_0x54bcc5, _0x26d7ab, _0x56a6e2) {
      var _0x56a7e1 = typeof _0x54bcc5 === "number" ? _0x54bcc5.toString() : _0x54bcc5 || "";
      while (_0x56a7e1.length < _0x26d7ab) {
        _0x56a7e1 = _0x56a6e2[0] + _0x56a7e1;
      }
      return _0x56a7e1;
    }
    function _0x3f153b(_0x2e78fe, _0x27904a) {
      return _0x2b62a5(_0x2e78fe, _0x27904a, "0");
    }
    function _0x4091d6(_0xf06287, _0x20fb6f) {
      function _0x123667(_0x49047b) {
        if (_0x49047b < 0) {
          return -1;
        } else if (_0x49047b > 0) {
          return 1;
        } else {
          return 0;
        }
      }
      var _0x357a51;
      if ((_0x357a51 = _0x123667(_0xf06287.getFullYear() - _0x20fb6f.getFullYear())) === 0) {
        if ((_0x357a51 = _0x123667(_0xf06287.getMonth() - _0x20fb6f.getMonth())) === 0) {
          _0x357a51 = _0x123667(_0xf06287.getDate() - _0x20fb6f.getDate());
        }
      }
      return _0x357a51;
    }
    function _0x11e61c(_0x233d14) {
      switch (_0x233d14.getDay()) {
        case 0:
          return new Date(_0x233d14.getFullYear() - 1, 11, 29);
        case 1:
          return _0x233d14;
        case 2:
          return new Date(_0x233d14.getFullYear(), 0, 3);
        case 3:
          return new Date(_0x233d14.getFullYear(), 0, 2);
        case 4:
          return new Date(_0x233d14.getFullYear(), 0, 1);
        case 5:
          return new Date(_0x233d14.getFullYear() - 1, 11, 31);
        case 6:
          return new Date(_0x233d14.getFullYear() - 1, 11, 30);
      }
    }
    function _0x252ea0(_0x16fa70) {
      var _0x2f9447 = _0xc260db(new Date(_0x16fa70.tm_year + 1900, 0, 1), _0x16fa70.tm_yday);
      var _0x3ac9f7 = new Date(_0x2f9447.getFullYear(), 0, 4);
      var _0x5817e5 = new Date(_0x2f9447.getFullYear() + 1, 0, 4);
      var _0x288b50 = _0x11e61c(_0x3ac9f7);
      var _0x3b4671 = _0x11e61c(_0x5817e5);
      if (_0x4091d6(_0x288b50, _0x2f9447) <= 0) {
        if (_0x4091d6(_0x3b4671, _0x2f9447) <= 0) {
          return _0x2f9447.getFullYear() + 1;
        } else {
          return _0x2f9447.getFullYear();
        }
      } else {
        return _0x2f9447.getFullYear() - 1;
      }
    }
    var _0x589caa = {
      "%a": function (_0x2e6e75) {
        return _0x4eccec[_0x2e6e75.tm_wday].substring(0, 3);
      },
      "%A": function (_0x236e0a) {
        return _0x4eccec[_0x236e0a.tm_wday];
      },
      "%b": function (_0xcf429) {
        return _0x5cbc9d[_0xcf429.tm_mon].substring(0, 3);
      },
      "%B": function (_0x53f428) {
        return _0x5cbc9d[_0x53f428.tm_mon];
      },
      "%C": function (_0x3b5cd8) {
        var _0x33149f = _0x3b5cd8.tm_year + 1900;
        return _0x3f153b(_0x33149f / 100 | 0, 2);
      },
      "%d": function (_0x53af3e) {
        return _0x3f153b(_0x53af3e.tm_mday, 2);
      },
      "%e": function (_0x1e3dc9) {
        return _0x2b62a5(_0x1e3dc9.tm_mday, 2, " ");
      },
      "%g": function (_0x106a72) {
        return _0x252ea0(_0x106a72).toString().substring(2);
      },
      "%G": function (_0x464a69) {
        return _0x252ea0(_0x464a69);
      },
      "%H": function (_0xcd7ecc) {
        return _0x3f153b(_0xcd7ecc.tm_hour, 2);
      },
      "%I": function (_0x340171) {
        var _0x1e3101 = _0x340171.tm_hour;
        if (_0x1e3101 == 0) {
          _0x1e3101 = 12;
        } else if (_0x1e3101 > 12) {
          _0x1e3101 -= 12;
        }
        return _0x3f153b(_0x1e3101, 2);
      },
      "%j": function (_0x35fb7f) {
        return _0x3f153b(_0x35fb7f.tm_mday + _0x32ba57(_0x4538f7(_0x35fb7f.tm_year + 1900) ? _0x15b542 : _0x818fd1, _0x35fb7f.tm_mon - 1), 3);
      },
      "%m": function (_0x1a191e) {
        return _0x3f153b(_0x1a191e.tm_mon + 1, 2);
      },
      "%M": function (_0x582167) {
        return _0x3f153b(_0x582167.tm_min, 2);
      },
      "%n": function () {
        return "\n";
      },
      "%p": function (_0x5ad2b5) {
        if (_0x5ad2b5.tm_hour >= 0 && _0x5ad2b5.tm_hour < 12) {
          return "AM";
        } else {
          return "PM";
        }
      },
      "%S": function (_0x1d5c57) {
        return _0x3f153b(_0x1d5c57.tm_sec, 2);
      },
      "%t": function () {
        return "\t";
      },
      "%u": function (_0x4b0809) {
        return _0x4b0809.tm_wday || 7;
      },
      "%U": function (_0x3389f2) {
        var _0x7685 = new Date(_0x3389f2.tm_year + 1900, 0, 1);
        var _0x108e28 = _0x7685.getDay() === 0 ? _0x7685 : _0xc260db(_0x7685, 7 - _0x7685.getDay());
        var _0x1b8f70 = new Date(_0x3389f2.tm_year + 1900, _0x3389f2.tm_mon, _0x3389f2.tm_mday);
        if (_0x4091d6(_0x108e28, _0x1b8f70) < 0) {
          var _0xed0897 = _0x32ba57(_0x4538f7(_0x1b8f70.getFullYear()) ? _0x15b542 : _0x818fd1, _0x1b8f70.getMonth() - 1) - 31;
          var _0x5660a4 = 31 - _0x108e28.getDate();
          var _0x38505e = _0x5660a4 + _0xed0897 + _0x1b8f70.getDate();
          return _0x3f153b(Math.ceil(_0x38505e / 7), 2);
        }
        if (_0x4091d6(_0x108e28, _0x7685) === 0) {
          return "01";
        } else {
          return "00";
        }
      },
      "%V": function (_0x39da3d) {
        var _0x29cdd1 = new Date(_0x39da3d.tm_year + 1900, 0, 4);
        var _0x124613 = new Date(_0x39da3d.tm_year + 1901, 0, 4);
        var _0x514b55 = _0x11e61c(_0x29cdd1);
        var _0x18a089 = _0x11e61c(_0x124613);
        var _0x50b017 = _0xc260db(new Date(_0x39da3d.tm_year + 1900, 0, 1), _0x39da3d.tm_yday);
        if (_0x4091d6(_0x50b017, _0x514b55) < 0) {
          return "53";
        }
        if (_0x4091d6(_0x18a089, _0x50b017) <= 0) {
          return "01";
        }
        var _0x3d8193;
        if (_0x514b55.getFullYear() < _0x39da3d.tm_year + 1900) {
          _0x3d8193 = _0x39da3d.tm_yday + 32 - _0x514b55.getDate();
        } else {
          _0x3d8193 = _0x39da3d.tm_yday + 1 - _0x514b55.getDate();
        }
        return _0x3f153b(Math.ceil(_0x3d8193 / 7), 2);
      },
      "%w": function (_0x9cf19c) {
        return _0x9cf19c.tm_wday;
      },
      "%W": function (_0x2dc91b) {
        var _0x2c8324 = new Date(_0x2dc91b.tm_year, 0, 1);
        var _0x386147 = _0x2c8324.getDay() === 1 ? _0x2c8324 : _0xc260db(_0x2c8324, _0x2c8324.getDay() === 0 ? 1 : 7 - _0x2c8324.getDay() + 1);
        var _0x3e4577 = new Date(_0x2dc91b.tm_year + 1900, _0x2dc91b.tm_mon, _0x2dc91b.tm_mday);
        if (_0x4091d6(_0x386147, _0x3e4577) < 0) {
          var _0x473487 = _0x32ba57(_0x4538f7(_0x3e4577.getFullYear()) ? _0x15b542 : _0x818fd1, _0x3e4577.getMonth() - 1) - 31;
          var _0x18c451 = 31 - _0x386147.getDate();
          var _0x335eb7 = _0x18c451 + _0x473487 + _0x3e4577.getDate();
          return _0x3f153b(Math.ceil(_0x335eb7 / 7), 2);
        }
        if (_0x4091d6(_0x386147, _0x2c8324) === 0) {
          return "01";
        } else {
          return "00";
        }
      },
      "%y": function (_0x18d6d2) {
        return (_0x18d6d2.tm_year + 1900).toString().substring(2);
      },
      "%Y": function (_0x34d5b7) {
        return _0x34d5b7.tm_year + 1900;
      },
      "%z": function (_0x33b4e4) {
        var _0xae00e0 = _0x33b4e4.tm_gmtoff;
        var _0x17f200 = _0xae00e0 >= 0;
        _0xae00e0 = Math.abs(_0xae00e0) / 60;
        _0xae00e0 = _0xae00e0 / 60 * 100 + _0xae00e0 % 60;
        return (_0x17f200 ? "+" : "-") + String("0000" + _0xae00e0).slice(-4);
      },
      "%Z": function (_0x133052) {
        return _0x133052.tm_zone;
      },
      "%%": function () {
        return "%";
      }
    };
    for (var _0x2b41d0 in _0x589caa) {
      if (_0x1e2ad1.includes(_0x2b41d0)) {
        _0x1e2ad1 = _0x1e2ad1.replace(new RegExp(_0x2b41d0, "g"), _0x589caa[_0x2b41d0](_0x1cb838));
      }
    }
    var _0x3e55ac = _0xc6e11e(_0x1e2ad1, false);
    if (_0x3e55ac.length > _0x15c66b) {
      return 0;
    }
    _0x3cfaee(_0x3e55ac, _0x57ecce);
    return _0x3e55ac.length - 1;
  }
  function _0x5a1e7a(_0x14766b) {
    var _0x49c370 = Date.now() / 1000 | 0;
    if (_0x14766b) {
      _0x4e86a5[_0x14766b >> 2] = _0x49c370;
    }
    return _0x49c370;
  }
  function _0x6078e2(_0x25d802, _0x32409c) {
    _0x25d802 = _0x5c2e85(_0x25d802);
    try {
      _0x2840b9.utime(_0x25d802, _0x32409c, _0x32409c);
      return 0;
    } catch (_0x9b9637) {
      if (!(_0x9b9637 instanceof _0x2840b9.ErrnoError)) {
        throw _0x9b9637 + " : " + _0xacba48();
      }
      _0x50999a(_0x9b9637.errno);
      return -1;
    }
  }
  function _0xeb4506(_0x23b179, _0x4df08f) {
    var _0x992617;
    if (_0x4df08f) {
      _0x992617 = _0x4e86a5[_0x4df08f + 4 >> 2] * 1000;
    } else {
      _0x992617 = Date.now();
    }
    return _0x6078e2(_0x23b179, _0x992617);
  }
  function _0x1a122d(_0x377612, _0x589749, _0xc6e72f, _0x1c5aa3) {
    if (!_0x377612) {
      _0x377612 = this;
    }
    this.parent = _0x377612;
    this.mount = _0x377612.mount;
    this.mounted = null;
    this.id = _0x2840b9.nextInode++;
    this.name = _0x589749;
    this.mode = _0xc6e72f;
    this.node_ops = {};
    this.stream_ops = {};
    this.rdev = _0x1c5aa3;
  }
  var _0x1518a8 = 365;
  var _0x3e362c = 146;
  Object.defineProperties(_0x1a122d.prototype, {
    read: {
      get: function () {
        return (this.mode & _0x1518a8) === _0x1518a8;
      },
      set: function (_0x22682b) {
        if (_0x22682b) {
          this.mode |= _0x1518a8;
        } else {
          this.mode &= ~_0x1518a8;
        }
      }
    },
    write: {
      get: function () {
        return (this.mode & _0x3e362c) === _0x3e362c;
      },
      set: function (_0x3a14a9) {
        if (_0x3a14a9) {
          this.mode |= _0x3e362c;
        } else {
          this.mode &= ~_0x3e362c;
        }
      }
    },
    isFolder: {
      get: function () {
        return _0x2840b9.isDir(this.mode);
      }
    },
    isDevice: {
      get: function () {
        return _0x2840b9.isChrdev(this.mode);
      }
    }
  });
  _0x2840b9.FSNode = _0x1a122d;
  _0x2840b9.staticInit();
  _0x289557.FS_createPath = _0x2840b9.createPath;
  _0x289557.FS_createDataFile = _0x2840b9.createDataFile;
  _0x289557.requestFullscreen = function _0x2338f3(_0x400bdf, _0x269abd) {
    _0x24096f.requestFullscreen(_0x400bdf, _0x269abd);
  };
  _0x289557.requestAnimationFrame = function _0x465342(_0x27846d) {
    _0x24096f.requestAnimationFrame(_0x27846d);
  };
  _0x289557.setCanvasSize = function _0x4bdd9c(_0x2f378d, _0x208f53, _0x3c0893) {
    _0x24096f.setCanvasSize(_0x2f378d, _0x208f53, _0x3c0893);
  };
  _0x289557.pauseMainLoop = function _0x4aa278() {
    _0x24096f.mainLoop.pause();
  };
  _0x289557.resumeMainLoop = function _0x590880() {
    _0x24096f.mainLoop.resume();
  };
  _0x289557.getUserMedia = function _0x568e2e() {
    _0x24096f.getUserMedia();
  };
  _0x289557.createContext = function _0x2a9632(_0x5f0a21, _0x263ba8, _0x4a4118, _0x11adac) {
    return _0x24096f.createContext(_0x5f0a21, _0x263ba8, _0x4a4118, _0x11adac);
  };
  var _0x149f8b;
  for (var _0x1e58a3 = 0; _0x1e58a3 < 32; ++_0x1e58a3) {
    _0x36ffe0.push(new Array(_0x1e58a3));
  }
  var _0x3dc069 = new Float32Array(288);
  for (var _0x1e58a3 = 0; _0x1e58a3 < 288; ++_0x1e58a3) {
    _0x1984ad[_0x1e58a3] = _0x3dc069.subarray(0, _0x1e58a3 + 1);
  }
  var _0x31c44c = new Int32Array(288);
  for (var _0x1e58a3 = 0; _0x1e58a3 < 288; ++_0x1e58a3) {
    _0x3f130a[_0x1e58a3] = _0x31c44c.subarray(0, _0x1e58a3 + 1);
  }
  function _0xc6e11e(_0x62bbbe, _0x28931f, _0x3d3712) {
    var _0x5352a8 = _0x3d3712 > 0 ? _0x3d3712 : _0x247116(_0x62bbbe) + 1;
    var _0xd9b3f7 = new Array(_0x5352a8);
    var _0x5b133b = _0x1d0a09(_0x62bbbe, _0xd9b3f7, 0, _0xd9b3f7.length);
    if (_0x28931f) {
      _0xd9b3f7.length = _0x5b133b;
    }
    return _0xd9b3f7;
  }
  var _0x3f66ea = {
    Xj: _0x11ebb1,
    Tj: _0x3ae770,
    Wc: _0x417b7a,
    wj: _0x134a5c,
    hj: _0x32f561,
    sk: _0x305958,
    uj: _0x54ed01,
    tj: _0x468c25,
    qj: _0x1be13f,
    sj: _0x19f693,
    rj: _0x503b49,
    Vj: _0x164344,
    Uj: _0x4c3856,
    jk: _0x433916,
    Kj: _0x52af3d,
    Yc: _0x2f6cb1,
    Bj: _0x1ef88a,
    _i: _0x6182ee,
    Tc: _0x1fc790,
    Vc: _0x320f03,
    Uc: _0x17f8ac,
    Cj: _0x2d6fea,
    mj: _0x3d2784,
    lj: _0x292a24,
    Mj: _0x21a229,
    _j: _0x4cae2c,
    Zj: _0x2f8f7f,
    yj: _0x400481,
    pj: _0x1b90b4,
    oj: _0x205d89,
    zj: _0x2907ae,
    nk: _0x3c0371,
    $i: _0x14b936,
    ej: _0x28a38d,
    dj: _0x4acd2d,
    cj: _0x3a5d60,
    Yi: _0x36dc1d,
    Xi: _0x142d3e,
    Wi: _0x1c185e,
    Vi: _0x10ddd9,
    nj: _0x5ca196,
    ij: _0x3e0793,
    Rj: _0x15d486,
    Aj: _0x1982a7,
    aj: _0x5ddd26,
    gf: _0x4c76ef,
    Kb: _0x33af28,
    Jb: _0x5aa855,
    of: _0x31a669,
    Ta: _0x587a00,
    Sa: _0x1d378e,
    Le: _0x1ed23c,
    qf: _0x3e5669,
    Ne: _0x53c291,
    Ee: _0x29c2a6,
    da: _0x120f59,
    df: _0x9c1396,
    Gb: _0xea6709,
    Fb: _0xd65b,
    bf: _0xba4e1c,
    cf: _0x20325d,
    Eb: _0x5a057f,
    Db: _0xb2d04d,
    $c: _0x175152,
    ff: _0x57850c,
    Ib: _0x44c0af,
    Hb: _0x5daa60,
    Me: _0x20f6e0,
    Pe: _0x5ec3e8,
    hf: _0x43d6f1,
    Mb: _0x4681f0,
    Lb: _0xb7bda3,
    Nb: _0x4beed1,
    He: _0x45bf70,
    af: _0x45c9a5,
    kf: _0x2f6958,
    ha: _0x3d8950,
    og: _0x478cb5,
    ta: _0x501e6f,
    jg: _0x1596f4,
    hg: _0x11c7d5,
    ac: _0x1df53d,
    ig: _0x5d4912,
    Wa: _0x304298,
    Xa: _0x3eee0a,
    Ob: _0x427578,
    lg: _0x5a3000,
    fg: _0x18669a,
    gg: _0x4eeb18,
    cc: _0x583670,
    bc: _0x1076e9,
    sa: _0x5efe40,
    ia: _0xb3ab3b,
    ng: _0x2c9db9,
    mg: _0x167a18,
    ua: _0x165da4,
    wb: _0x2be318,
    vb: _0x114f65,
    ka: _0x209cd8,
    ra: _0x3e1c6f,
    tb: _0x36f6b9,
    ub: _0x3416b1,
    Bb: _0x546e6c,
    ga: _0x52f7ad,
    xb: _0x343dfb,
    zb: _0x49cc10,
    Re: _0x133171,
    Zb: _0x46be2f,
    rf: _0x492d79,
    yb: _0xaeea52,
    $e: _0x5e0041,
    wa: _0x18a404,
    pf: _0x90ecc9,
    Ke: _0x28239d,
    yf: _0x1d9b8e,
    Tf: _0xcff91e,
    qa: _0x5307f5,
    Hf: _0x106b0f,
    Pf: _0x1c9551,
    Df: _0x2d8a6f,
    Ef: _0x309822,
    If: _0x30ef5d,
    Lf: _0x53579c,
    Gf: _0x9fd0d3,
    $b: _0x1c25ee,
    Of: _0x271da8,
    _b: _0x2bfbed,
    Qf: _0x29e7f7,
    Sf: _0x5652f6,
    Ff: _0x1b58b5,
    Bf: _0x36d981,
    Kf: _0x2f711a,
    Rf: _0x175036,
    Mf: _0x13a44f,
    Cf: _0x18e1c9,
    zf: _0x24d25c,
    Af: _0x1f85ab,
    Jf: _0x2c4edd,
    bg: _0x304e0f,
    _f: _0x90be09,
    $f: _0x37f2b7,
    ag: _0x1107d8,
    Va: _0x25a4be,
    Wf: _0x44e91,
    Yf: _0x200a70,
    Xf: _0x55a7d5,
    Zf: _0x509112,
    gk: _0x5ef46b,
    ek: _0x544ad9,
    ck: _0x17ed53,
    Oj: _0x8ab9a7,
    Qj: _0x549465,
    ik: _0x3903b3,
    Ij: _0x334014,
    Hj: _0x56aec3,
    ak: _0x189d7c,
    ok: _0x21d779,
    Fj: _0x1dc1fc,
    mk: _0x5aba71,
    lk: _0xf6dafd,
    mb: _0x16793e,
    Ej: _0x1ba825,
    Dj: _0x325726,
    Sj: _0x201790,
    xj: _0x4a2dea,
    vj: _0x4de833,
    kj: _0x8d6014,
    yk: _0x3345d3,
    xk: _0x4b61b3,
    vk: _0x4660c9,
    wk: _0x8afd1c,
    Yj: _0x5c373b,
    Jj: _0x321ffb,
    fj: _0xd0331a,
    gj: _0x11e7fb,
    jj: _0x292365,
    Xc: _0x5274be,
    tk: _0x53a517,
    rk: _0x3f31fa,
    pk: _0x4620ef,
    qk: _0x20376d,
    fk: _0x4e24c0,
    dk: _0x2b0728,
    bk: _0x2b7205,
    Nj: _0x1ecc81,
    Pj: _0x119747,
    hk: _0xf8e3c2,
    bj: _0x466b7d,
    $j: _0x145734,
    Wj: _0x1d27cd,
    kk: _0x23cbc6,
    Lj: _0x1a8074,
    kb: _0x48d29d,
    Si: _0x421b7c,
    Oc: _0x19b1d6,
    Qi: _0x17bd78,
    Pc: _0x2f06b8,
    Ni: _0x33bed5,
    Pi: _0x4f4e1c,
    Oi: _0x172147,
    Ri: _0x499749,
    p: _0x4c56e0,
    g: _0x2252f2,
    o: _0x1e5e59,
    f: _0x345b0b,
    a: _0x1b07be,
    Ak: _0x3323c8,
    lb: _0x50f88d,
    pd: _0x2718f9,
    ea: _0x12b319,
    bd: _0xc2a92b,
    cd: _0x3509ea,
    k: _0x11c0d9,
    ef: _0x5ce21d,
    Nf: _0x1e3098,
    jf: _0x44e851,
    Eg: _0x4b783d,
    md: _0xbb39eb,
    pg: _0x37f376,
    sd: _0x5d0e6f,
    S: _0x1435db,
    wh: _0x5ede25,
    nh: _0x3db138,
    jd: _0x3f6562,
    gd: _0x47bdcd,
    Gc: _0x504480,
    Hc: _0x396c10,
    ud: _0x312569,
    La: _0x5e3eca,
    fd: _0x19f0ce,
    cg: _0x58c7b1,
    vg: _0x4748f8,
    tg: _0x4efad7,
    Cb: _0x4ae7cc,
    Vf: _0x22dcc4,
    nd: _0x592596,
    id: _0x13e84a,
    mf: _0x142987,
    Td: _0x1b33cf,
    fb: _0x25a99c,
    od: _0x2123c2,
    kg: _0x1ae436,
    Hi: _0xaa6c10,
    nf: _0x2cb250,
    qd: _0x48f03c,
    kd: _0x3310fd,
    hd: _0x560b83,
    rd: _0x16adfd,
    wf: _0x32b8c4,
    lf: _0x1a9d6a,
    td: _0x31263f,
    rb: _0x1c6153,
    xc: _0x44568c,
    qg: _0x10ff64,
    rg: _0x18c350,
    xd: _0x132d29,
    ld: _0xb18b95,
    x: _0x230633,
    N: _0x15e946,
    ed: _0x342f59,
    ob: _0x2c8c9a,
    Ja: _0x3f4de9,
    Jg: _0x3c3643,
    ya: _0x373804,
    jc: _0x1a1cf7,
    Tg: _0x30354d,
    Ua: _0x597f8b,
    Ie: _0x28ff26,
    Ge: _0x4490c5,
    Ze: _0x137ebc,
    Se: _0x1c5413,
    Qe: _0x33b622,
    Ye: _0x57cf31,
    Pa: _0x11d812,
    dd: _0x3e39b8,
    J: _0xd45210,
    Qa: _0x879fa9,
    Je: _0x4f3166,
    uf: _0x71bb50,
    D: _0x2210c0,
    E: _0x42bd28,
    Bk: _0x19c4b4,
    _e: _0xc1ba70,
    Te: _0x2a79b5,
    Ck: _0x4d8566,
    Ra: _0x1a250e,
    Ab: _0x1f961e,
    Oa: _0x3c4e13,
    We: _0xae8c4,
    Xe: _0x4d3b2b,
    Qb: _0x50fd31,
    Pb: _0x316d8b,
    De: _0x1be89f,
    na: _0x1efd07,
    la: _0x5b528e,
    ma: _0x5749b0,
    Ce: _0x2f2337,
    Fe: _0x3e7a9d,
    Xb: _0x5e106a,
    Wb: _0x31f7b2,
    Yb: _0x51f3f2,
    Ve: _0x2fb292,
    Rb: _0x477943,
    Tb: _0x5a54de,
    Sb: _0x237f84,
    Ub: _0x332c23,
    Vb: _0x276651,
    ad: _0x5941db,
    xf: _0x412a7b,
    vf: _0x3aee41,
    oa: _0x125266,
    tf: _0x59bf46,
    ug: _0x1b02a0,
    pa: _0x4a16e8,
    Oe: _0x332e16,
    Ue: _0x20a9fc,
    A: _0x34c506,
    Z: _0x54a059,
    hc: _0x1ed1bd,
    qb: _0x1ee5fc,
    Be: _0x57b772,
    hb: _0x1454c6,
    va: _0x54976b,
    b: _0x2c504d,
    Sd: _0x1dfb25,
    dg: _0x9e3a67,
    eg: _0x3affed,
    sb: _0x20f67e,
    sg: _0x4b03fb,
    Ha: _0x236b4a,
    yi: _0x66a8a1,
    vi: _0x5f5263,
    kc: _0x16928b,
    jh: _0x34e0af,
    Ea: _0x274ec5,
    ui: _0x3ecb45,
    Kg: _0x5908e3,
    Ig: _0x401e45,
    ri: _0x39ab63,
    si: _0x115c4c,
    Cg: _0x42d341,
    ti: _0x1f6d45,
    ch: _0x20404d,
    fh: _0x2d0168,
    Dc: _0x2f7c34,
    Ec: _0x3eaf28,
    Fc: _0x10e49d,
    Wg: _0x1f053a,
    pi: _0x2e7875,
    qi: _0xe11f3,
    oi: _0x3618fd,
    ki: _0x3b37da,
    yg: _0x555360,
    xg: _0x18b6ac,
    wg: _0x586200,
    li: _0x5a908f,
    mi: _0x55fa7e,
    ni: _0x16f06c,
    vd: _0x9b8c56,
    ib: _0x9172d9,
    ji: _0x4a54c8,
    hi: _0x242306,
    Yg: _0x51dea0,
    ii: _0x2c861b,
    ah: _0x5975a7,
    Ng: _0x1e425d,
    gi: _0x1909f3,
    Cc: _0x3c3122,
    fi: _0x1a00c5,
    ei: _0x4977a8,
    di: _0x35a51c,
    ci: _0x3928aa,
    bi: _0x3c2733,
    ai: _0x244f77,
    ab: _0x705822,
    $h: _0x31fb25,
    Bg: _0x10b4e7,
    _h: _0x1e03bd,
    ec: _0x279301,
    Zh: _0x48516d,
    dh: _0x340ea9,
    hh: _0x3b319c,
    Da: _0x30a943,
    Ca: _0x96c0c1,
    Yh: _0xce2436,
    Xh: _0x4d4866,
    Wh: _0x423171,
    Th: _0x14899e,
    Pg: _0x27e061,
    Mg: _0x56ef2e,
    Uh: _0x37085f,
    Og: _0x33e874,
    Vh: _0x2ec3c3,
    Sh: _0x3beec1,
    lc: _0x14d1c5,
    kh: _0xa1047e,
    dc: _0x4a2174,
    Ph: _0x3e17b9,
    Qh: _0x29ce54,
    Sg: _0x3c26c2,
    U: _0x10cdd2,
    R: _0x23669b,
    xa: _0x10abce,
    Ba: _0x33381f,
    Oh: _0x4eec71,
    Kh: _0x2319fc,
    ic: _0x339b95,
    Lh: _0x726493,
    Ag: _0x1e9b05,
    Nh: _0x208a8f,
    eh: _0x9d5987,
    ih: _0x2addbd,
    Mh: _0xf8bfad,
    Ei: _0x31770b,
    gb: _0x3dc268,
    Za: _0x1d0cc8,
    aa: _0x23204a,
    $: _0x5f09e4,
    Di: _0x4a6c4d,
    sf: _0x58303e,
    Jh: _0x382a66,
    Ih: _0x34b879,
    xi: _0x47ab7d,
    Fa: _0x134aed,
    Fg: _0x59646f,
    fc: _0xe35dd0,
    Ai: _0x4767bc,
    Y: _0x5d86b4,
    mh: _0x375a72,
    lh: _0x3c84ba,
    Rh: _0x107476,
    Gh: _0x9ba6f8,
    Ac: _0x5ed3a0,
    Hh: _0xa89fac,
    zi: _0x28c87c,
    Fh: _0xfaedc2,
    Ug: _0x40c570,
    Eh: _0x58214c,
    Gg: _0x296dae,
    Ya: _0x38e085,
    ja: _0x6e03f2,
    zc: _0x6b2308,
    Ci: _0x31ac9d,
    $a: _0x524a27,
    wi: _0x212923,
    gh: _0x8bf32a,
    Ch: _0xa7886,
    Qg: _0xd43308,
    Dh: _0x414d66,
    yc: _0x170f53,
    gc: _0x277296,
    zg: _0x16a157,
    Lg: _0x594b55,
    ca: _0x7dd034,
    Bh: _0x1ef0d3,
    Vg: _0xabd2e1,
    Dg: _0x385c56,
    eb: _0x3632d1,
    zh: _0x32f108,
    Ah: _0x1fdb44,
    xh: _0x55c386,
    yh: _0x4d7c8e,
    uh: _0x3d61eb,
    _g: _0xc30eb3,
    vh: _0x10cce0,
    db: _0x57fda2,
    th: _0x284e82,
    Xg: _0x4e34a7,
    Zg: _0x4530d5,
    sh: _0x33d05f,
    $g: _0x5a9cb5,
    bh: _0x39fbcb,
    mc: _0x4c8251,
    za: _0x46dcf6,
    nc: _0x38d55a,
    oc: _0x415b49,
    pc: _0x5cc379,
    qc: _0x3519ac,
    rc: _0xc345ce,
    cb: _0xba79b8,
    sc: _0xc562ed,
    tc: _0x584832,
    ba: _0x39b445,
    uc: _0x2075c7,
    vc: _0x5a6eed,
    _a: _0x53a010,
    wc: _0x2c0c24,
    Aa: _0x279e08,
    Rg: _0x51be74,
    oh: _0x80b1ee,
    Bi: _0x25e955,
    ph: _0x359124,
    qh: _0x4573b2,
    Hg: _0x572760,
    rh: _0xce821a,
    bb: _0x512bd1,
    Qc: _0x229571,
    uk: _0x3aa0a9,
    H: _0x513409,
    L: _0x468aa3,
    _c: _0x463a1a,
    K: _0xb18143,
    Rd: _0x3531b3,
    Rc: _0x3c6fb9,
    Kc: _0x99aeb6,
    T: _0x4e02bf,
    F: _0x30a57e,
    Zc: _0x1d7050,
    M: _0x2cac6a,
    w: _0x21d48c,
    jb: _0xc80d53,
    Nc: _0x2bab80,
    d: _0x5d2829,
    Sc: _0x20991a,
    Ti: _0x10c885,
    c: _0x3faa0c,
    nb: _0x365354,
    Jc: _0x235e1e,
    i: _0x10eedc,
    Gi: _0x4f9c30,
    Zi: _0x11fbae,
    Fi: _0x280d9b,
    q: _0x237545,
    Ga: _0x4f74c3,
    Mi: _0xdf3657,
    s: _0x26a0ec,
    u: _0x26fc11,
    z: _0x35588e,
    C: _0x5e6626,
    P: _0x160847,
    Ic: _0x4af7e8,
    Ji: _0x1bc6bc,
    Pd: _0x340d61,
    Nd: _0x17e5e5,
    yd: _0x5134fc,
    wd: _0x5ae492,
    Md: _0x2bded,
    ze: _0x504f59,
    ce: _0x3b820e,
    we: _0x108ee8,
    xe: _0x25d5c0,
    me: _0x2fd259,
    Zd: _0x4587af,
    le: _0x72373a,
    Jd: _0x4a4a3b,
    Dd: _0xaa17c9,
    Kd: _0x32045d,
    Ud: _0x45e503,
    ge: _0x3ac92b,
    ie: _0x4326b1,
    ye: _0x2e9659,
    Xd: _0x4240c3,
    ve: _0x2c0205,
    Qd: _0x507427,
    ue: _0x2c8a79,
    re: _0xa1a15a,
    Ae: _0x3c7d18,
    zd: _0x5768a7,
    Fd: _0x11fb94,
    ee: _0x313c75,
    he: _0x29ed47,
    ke: _0x257b06,
    Ed: _0x16070f,
    oe: _0x1fdb0f,
    ae: _0x38e7fb,
    ne: _0x1a3846,
    je: _0x2437fe,
    e: _0x5cebc8,
    l: _0x2e3905,
    Uf: _0x243c7a,
    y: _0x1f262f,
    G: _0x1f207e,
    m: _0x40fc19,
    fa: _0x4411c7,
    Bc: _0x70c9eb,
    W: _0x55ef6c,
    Li: _0x219264,
    Q: _0x2692c7,
    h: _0x4e7948,
    Ui: _0x3edbb4,
    n: _0x4aabb6,
    Ki: _0x450e47,
    r: _0x364689,
    t: _0x387e9b,
    B: _0x377267,
    Gj: _0xe4df1a,
    Ii: _0x22b6ba,
    zk: _0x31e315,
    O: _0x3ff671,
    de: _0x2c852f,
    I: _0x1b9a59,
    V: _0xcd6d87,
    Lc: _0x3f9300,
    Ia: _0x1e6f80,
    Mc: _0x2ef470,
    Hd: _0x4b6f89,
    pe: _0x32ed01,
    be: _0x3edfee,
    _d: _0x2182db,
    fe: _0x3b3c00,
    te: _0x4a294b,
    Ld: _0x19ec89,
    Ad: _0x2a4903,
    $d: _0xfa2ce7,
    Yd: _0x57f163,
    se: _0x2dd6e6,
    qe: _0x907a5f,
    Wd: _0x24bb77,
    Vd: _0xe098cd,
    Gd: _0x367ea3,
    Id: _0x46ed49,
    Od: _0x1544fa,
    Bd: _0x520a73,
    Cd: _0x901ada,
    j: _0x2bb810,
    _: _0x44ebdf,
    v: _0x1b2af8,
    Ma: _0xbbcd1a,
    Na: _0x5d6927,
    Ka: _0xc1adc1,
    X: _0x5a1e7a,
    pb: _0xeb4506
  };
  var _0x2d70ea = _0xbd1f77();
  var _0x3ec73a = _0x289557.___wasm_call_ctors = function () {
    return (_0x3ec73a = _0x289557.___wasm_call_ctors = _0x289557.asm.Ek).apply(null, arguments);
  };
  var _0x5946c3 = _0x289557._ReleaseKeys = function () {
    return (_0x5946c3 = _0x289557._ReleaseKeys = _0x289557.asm.Fk).apply(null, arguments);
  };
  var _0x47370d = _0x289557._SendMessageFloat = function () {
    return (_0x47370d = _0x289557._SendMessageFloat = _0x289557.asm.Gk).apply(null, arguments);
  };
  var _0x3b9380 = _0x289557._SendMessageString = function () {
    return (_0x3b9380 = _0x289557._SendMessageString = _0x289557.asm.Hk).apply(null, arguments);
  };
  var _0x3fcb58 = _0x289557._SendMessage = function () {
    return (_0x3fcb58 = _0x289557._SendMessage = _0x289557.asm.Ik).apply(null, arguments);
  };
  var _0x3bffff = _0x289557._SetFullscreen = function () {
    return (_0x3bffff = _0x289557._SetFullscreen = _0x289557.asm.Jk).apply(null, arguments);
  };
  var _0x23862c = _0x289557._main = function () {
    return (_0x23862c = _0x289557._main = _0x289557.asm.Kk).apply(null, arguments);
  };
  var _0x5bdab2 = _0x289557.___errno_location = function () {
    return (_0x5bdab2 = _0x289557.___errno_location = _0x289557.asm.Lk).apply(null, arguments);
  };
  var _0x2c862e = _0x289557._htonl = function () {
    return (_0x2c862e = _0x289557._htonl = _0x289557.asm.Mk).apply(null, arguments);
  };
  var _0x36afa6 = _0x289557._htons = function () {
    return (_0x36afa6 = _0x289557._htons = _0x289557.asm.Nk).apply(null, arguments);
  };
  var _0x1fbe86 = _0x289557._ntohs = function () {
    return (_0x1fbe86 = _0x289557._ntohs = _0x289557.asm.Ok).apply(null, arguments);
  };
  var _0x379d9f = _0x289557.__get_tzname = function () {
    return (_0x379d9f = _0x289557.__get_tzname = _0x289557.asm.Pk).apply(null, arguments);
  };
  var _0x25de21 = _0x289557.__get_daylight = function () {
    return (_0x25de21 = _0x289557.__get_daylight = _0x289557.asm.Qk).apply(null, arguments);
  };
  var _0x41d217 = _0x289557.__get_timezone = function () {
    return (_0x41d217 = _0x289557.__get_timezone = _0x289557.asm.Rk).apply(null, arguments);
  };
  var _0x51cfa0 = _0x289557.stackSave = function () {
    return (_0x51cfa0 = _0x289557.stackSave = _0x289557.asm.Sk).apply(null, arguments);
  };
  var _0x15d00c = _0x289557.stackRestore = function () {
    return (_0x15d00c = _0x289557.stackRestore = _0x289557.asm.Tk).apply(null, arguments);
  };
  var _0x3f9e14 = _0x289557.stackAlloc = function () {
    return (_0x3f9e14 = _0x289557.stackAlloc = _0x289557.asm.Uk).apply(null, arguments);
  };
  var _0x52a98c = _0x289557._setThrew = function () {
    return (_0x52a98c = _0x289557._setThrew = _0x289557.asm.Vk).apply(null, arguments);
  };
  var _0x2b77fe = _0x289557.___cxa_can_catch = function () {
    return (_0x2b77fe = _0x289557.___cxa_can_catch = _0x289557.asm.Wk).apply(null, arguments);
  };
  var _0x38646f = _0x289557.___cxa_is_pointer_type = function () {
    return (_0x38646f = _0x289557.___cxa_is_pointer_type = _0x289557.asm.Xk).apply(null, arguments);
  };
  var _0x2a1ebe = _0x289557._malloc = function () {
    return (_0x2a1ebe = _0x289557._malloc = _0x289557.asm.Yk).apply(null, arguments);
  };
  var _0x2933c1 = _0x289557._free = function () {
    return (_0x2933c1 = _0x289557._free = _0x289557.asm.Zk).apply(null, arguments);
  };
  var _0x243a56 = _0x289557._memalign = function () {
    return (_0x243a56 = _0x289557._memalign = _0x289557.asm._k).apply(null, arguments);
  };
  var _0x4699cb = _0x289557._memset = function () {
    return (_0x4699cb = _0x289557._memset = _0x289557.asm.$k).apply(null, arguments);
  };
  var _0xac45f3 = _0x289557._strlen = function () {
    return (_0xac45f3 = _0x289557._strlen = _0x289557.asm.al).apply(null, arguments);
  };
  var _0x4931eb = _0x289557.dynCall_iidiiii = function () {
    return (_0x4931eb = _0x289557.dynCall_iidiiii = _0x289557.asm.cl).apply(null, arguments);
  };
  var _0x36c69d = _0x289557.dynCall_vii = function () {
    return (_0x36c69d = _0x289557.dynCall_vii = _0x289557.asm.dl).apply(null, arguments);
  };
  var _0x5628a5 = _0x289557.dynCall_iii = function () {
    return (_0x5628a5 = _0x289557.dynCall_iii = _0x289557.asm.el).apply(null, arguments);
  };
  var _0x21e974 = _0x289557.dynCall_ii = function () {
    return (_0x21e974 = _0x289557.dynCall_ii = _0x289557.asm.fl).apply(null, arguments);
  };
  var _0x901ebd = _0x289557.dynCall_iiii = function () {
    return (_0x901ebd = _0x289557.dynCall_iiii = _0x289557.asm.gl).apply(null, arguments);
  };
  var _0x676770 = _0x289557.dynCall_jiji = function () {
    return (_0x676770 = _0x289557.dynCall_jiji = _0x289557.asm.hl).apply(null, arguments);
  };
  var _0x25d2da = _0x289557.dynCall_vi = function () {
    return (_0x25d2da = _0x289557.dynCall_vi = _0x289557.asm.il).apply(null, arguments);
  };
  var _0x3acc34 = _0x289557.dynCall_iiiii = function () {
    return (_0x3acc34 = _0x289557.dynCall_iiiii = _0x289557.asm.jl).apply(null, arguments);
  };
  var _0x279c72 = _0x289557.dynCall_viii = function () {
    return (_0x279c72 = _0x289557.dynCall_viii = _0x289557.asm.kl).apply(null, arguments);
  };
  var _0x32babf = _0x289557.dynCall_viiiiii = function () {
    return (_0x32babf = _0x289557.dynCall_viiiiii = _0x289557.asm.ll).apply(null, arguments);
  };
  var _0x2c0648 = _0x289557.dynCall_viiiii = function () {
    return (_0x2c0648 = _0x289557.dynCall_viiiii = _0x289557.asm.ml).apply(null, arguments);
  };
  var _0x502592 = _0x289557.dynCall_viiii = function () {
    return (_0x502592 = _0x289557.dynCall_viiii = _0x289557.asm.nl).apply(null, arguments);
  };
  var _0x448b53 = _0x289557.dynCall_iiiiii = function () {
    return (_0x448b53 = _0x289557.dynCall_iiiiii = _0x289557.asm.ol).apply(null, arguments);
  };
  var _0x175c0b = _0x289557.dynCall_iiij = function () {
    return (_0x175c0b = _0x289557.dynCall_iiij = _0x289557.asm.pl).apply(null, arguments);
  };
  var _0x41b439 = _0x289557.dynCall_v = function () {
    return (_0x41b439 = _0x289557.dynCall_v = _0x289557.asm.ql).apply(null, arguments);
  };
  var _0x3d0c27 = _0x289557.dynCall_i = function () {
    return (_0x3d0c27 = _0x289557.dynCall_i = _0x289557.asm.rl).apply(null, arguments);
  };
  var _0x43f042 = _0x289557.dynCall_iiiiiiii = function () {
    return (_0x43f042 = _0x289557.dynCall_iiiiiiii = _0x289557.asm.sl).apply(null, arguments);
  };
  var _0x3ccee9 = _0x289557.dynCall_iiijiii = function () {
    return (_0x3ccee9 = _0x289557.dynCall_iiijiii = _0x289557.asm.tl).apply(null, arguments);
  };
  var _0x413a61 = _0x289557.dynCall_iij = function () {
    return (_0x413a61 = _0x289557.dynCall_iij = _0x289557.asm.ul).apply(null, arguments);
  };
  var _0x164007 = _0x289557.dynCall_iiiiiii = function () {
    return (_0x164007 = _0x289557.dynCall_iiiiiii = _0x289557.asm.vl).apply(null, arguments);
  };
  var _0x9905e1 = _0x289557.dynCall_jii = function () {
    return (_0x9905e1 = _0x289557.dynCall_jii = _0x289557.asm.wl).apply(null, arguments);
  };
  var _0x2f6e15 = _0x289557.dynCall_viiiiiii = function () {
    return (_0x2f6e15 = _0x289557.dynCall_viiiiiii = _0x289557.asm.xl).apply(null, arguments);
  };
  var _0x216c9a = _0x289557.dynCall_jiii = function () {
    return (_0x216c9a = _0x289557.dynCall_jiii = _0x289557.asm.yl).apply(null, arguments);
  };
  var _0xe49dc3 = _0x289557.dynCall_viiji = function () {
    return (_0xe49dc3 = _0x289557.dynCall_viiji = _0x289557.asm.zl).apply(null, arguments);
  };
  var _0x4ae77f = _0x289557.dynCall_fii = function () {
    return (_0x4ae77f = _0x289557.dynCall_fii = _0x289557.asm.Al).apply(null, arguments);
  };
  var _0x45c010 = _0x289557.dynCall_viifi = function () {
    return (_0x45c010 = _0x289557.dynCall_viifi = _0x289557.asm.Bl).apply(null, arguments);
  };
  var _0x54ac1a = _0x289557.dynCall_viiiiiiifi = function () {
    return (_0x54ac1a = _0x289557.dynCall_viiiiiiifi = _0x289557.asm.Cl).apply(null, arguments);
  };
  var _0x2ab692 = _0x289557.dynCall_vijii = function () {
    return (_0x2ab692 = _0x289557.dynCall_vijii = _0x289557.asm.Dl).apply(null, arguments);
  };
  var _0x3d0e46 = _0x289557.dynCall_fiiffi = function () {
    return (_0x3d0e46 = _0x289557.dynCall_fiiffi = _0x289557.asm.El).apply(null, arguments);
  };
  var _0x4a42bb = _0x289557.dynCall_viiififii = function () {
    return (_0x4a42bb = _0x289557.dynCall_viiififii = _0x289557.asm.Fl).apply(null, arguments);
  };
  var _0x1722bb = _0x289557.dynCall_viiff = function () {
    return (_0x1722bb = _0x289557.dynCall_viiff = _0x289557.asm.Gl).apply(null, arguments);
  };
  var _0x52eacd = _0x289557.dynCall_j = function () {
    return (_0x52eacd = _0x289557.dynCall_j = _0x289557.asm.Hl).apply(null, arguments);
  };
  var _0x92f806 = _0x289557.dynCall_ji = function () {
    return (_0x92f806 = _0x289557.dynCall_ji = _0x289557.asm.Il).apply(null, arguments);
  };
  var _0x19dbfe = _0x289557.dynCall_jijj = function () {
    return (_0x19dbfe = _0x289557.dynCall_jijj = _0x289557.asm.Jl).apply(null, arguments);
  };
  var _0x8676a6 = _0x289557.dynCall_viiiiiiii = function () {
    return (_0x8676a6 = _0x289557.dynCall_viiiiiiii = _0x289557.asm.Kl).apply(null, arguments);
  };
  var _0x2838be = _0x289557.dynCall_viiiiiiiiiiii = function () {
    return (_0x2838be = _0x289557.dynCall_viiiiiiiiiiii = _0x289557.asm.Ll).apply(null, arguments);
  };
  var _0x1acb1a = _0x289557.dynCall_viiiiiiiiiiiii = function () {
    return (_0x1acb1a = _0x289557.dynCall_viiiiiiiiiiiii = _0x289557.asm.Ml).apply(null, arguments);
  };
  var _0x43d400 = _0x289557.dynCall_viiiiiiiiiiiiii = function () {
    return (_0x43d400 = _0x289557.dynCall_viiiiiiiiiiiiii = _0x289557.asm.Nl).apply(null, arguments);
  };
  var _0x2c855c = _0x289557.dynCall_viiiiiiiiiiiiiii = function () {
    return (_0x2c855c = _0x289557.dynCall_viiiiiiiiiiiiiii = _0x289557.asm.Ol).apply(null, arguments);
  };
  var _0x33281d = _0x289557.dynCall_viiiiiiiiiiiiiiii = function () {
    return (_0x33281d = _0x289557.dynCall_viiiiiiiiiiiiiiii = _0x289557.asm.Pl).apply(null, arguments);
  };
  var _0x4af7a8 = _0x289557.dynCall_viiiiiiiiiiiiiiiii = function () {
    return (_0x4af7a8 = _0x289557.dynCall_viiiiiiiiiiiiiiiii = _0x289557.asm.Ql).apply(null, arguments);
  };
  var _0x343811 = _0x289557.dynCall_viiiiiiiiiiiiiiiiii = function () {
    return (_0x343811 = _0x289557.dynCall_viiiiiiiiiiiiiiiiii = _0x289557.asm.Rl).apply(null, arguments);
  };
  var _0x3da1d3 = _0x289557.dynCall_viidi = function () {
    return (_0x3da1d3 = _0x289557.dynCall_viidi = _0x289557.asm.Sl).apply(null, arguments);
  };
  var _0x2ecc2a = _0x289557.dynCall_viiidi = function () {
    return (_0x2ecc2a = _0x289557.dynCall_viiidi = _0x289557.asm.Tl).apply(null, arguments);
  };
  var _0x258c91 = _0x289557.dynCall_viiiji = function () {
    return (_0x258c91 = _0x289557.dynCall_viiiji = _0x289557.asm.Ul).apply(null, arguments);
  };
  var _0x499b6e = _0x289557.dynCall_viiifi = function () {
    return (_0x499b6e = _0x289557.dynCall_viiifi = _0x289557.asm.Vl).apply(null, arguments);
  };
  var _0xe0def3 = _0x289557.dynCall_vijijii = function () {
    return (_0xe0def3 = _0x289557.dynCall_vijijii = _0x289557.asm.Wl).apply(null, arguments);
  };
  var _0x4cac7b = _0x289557.dynCall_viiiiiiiii = function () {
    return (_0x4cac7b = _0x289557.dynCall_viiiiiiiii = _0x289557.asm.Xl).apply(null, arguments);
  };
  var _0x435b00 = _0x289557.dynCall_viiiiiiiiii = function () {
    return (_0x435b00 = _0x289557.dynCall_viiiiiiiiii = _0x289557.asm.Yl).apply(null, arguments);
  };
  var _0x589cb4 = _0x289557.dynCall_viiiiiiiiiii = function () {
    return (_0x589cb4 = _0x289557.dynCall_viiiiiiiiiii = _0x289557.asm.Zl).apply(null, arguments);
  };
  var _0x1066bf = _0x289557.dynCall_fiii = function () {
    return (_0x1066bf = _0x289557.dynCall_fiii = _0x289557.asm._l).apply(null, arguments);
  };
  var _0x192a3d = _0x289557.dynCall_diiid = function () {
    return (_0x192a3d = _0x289557.dynCall_diiid = _0x289557.asm.$l).apply(null, arguments);
  };
  var _0x36af95 = _0x289557.dynCall_jiiij = function () {
    return (_0x36af95 = _0x289557.dynCall_jiiij = _0x289557.asm.am).apply(null, arguments);
  };
  var _0x552628 = _0x289557.dynCall_fiiif = function () {
    return (_0x552628 = _0x289557.dynCall_fiiif = _0x289557.asm.bm).apply(null, arguments);
  };
  var _0x307c4c = _0x289557.dynCall_ddiii = function () {
    return (_0x307c4c = _0x289557.dynCall_ddiii = _0x289557.asm.cm).apply(null, arguments);
  };
  var _0x45e13f = _0x289557.dynCall_jiiji = function () {
    return (_0x45e13f = _0x289557.dynCall_jiiji = _0x289557.asm.dm).apply(null, arguments);
  };
  var _0x52d4cf = _0x289557.dynCall_ijiii = function () {
    return (_0x52d4cf = _0x289557.dynCall_ijiii = _0x289557.asm.em).apply(null, arguments);
  };
  var _0x3f83c3 = _0x289557.dynCall_viij = function () {
    return (_0x3f83c3 = _0x289557.dynCall_viij = _0x289557.asm.fm).apply(null, arguments);
  };
  var _0x475f89 = _0x289557.dynCall_viiij = function () {
    return (_0x475f89 = _0x289557.dynCall_viiij = _0x289557.asm.gm).apply(null, arguments);
  };
  var _0x4a86d3 = _0x289557.dynCall_vifii = function () {
    return (_0x4a86d3 = _0x289557.dynCall_vifii = _0x289557.asm.hm).apply(null, arguments);
  };
  var _0x11fb33 = _0x289557.dynCall_vifi = function () {
    return (_0x11fb33 = _0x289557.dynCall_vifi = _0x289557.asm.im).apply(null, arguments);
  };
  var _0x1b32d7 = _0x289557.dynCall_viiiiiiifiifii = function () {
    return (_0x1b32d7 = _0x289557.dynCall_viiiiiiifiifii = _0x289557.asm.jm).apply(null, arguments);
  };
  var _0x3aee50 = _0x289557.dynCall_viiiiiiifddfii = function () {
    return (_0x3aee50 = _0x289557.dynCall_viiiiiiifddfii = _0x289557.asm.km).apply(null, arguments);
  };
  var _0x92ecb7 = _0x289557.dynCall_viiiiiiifjjfii = function () {
    return (_0x92ecb7 = _0x289557.dynCall_viiiiiiifjjfii = _0x289557.asm.lm).apply(null, arguments);
  };
  var _0x221abc = _0x289557.dynCall_diii = function () {
    return (_0x221abc = _0x289557.dynCall_diii = _0x289557.asm.mm).apply(null, arguments);
  };
  var _0x4ee6d4 = _0x289557.dynCall_iijji = function () {
    return (_0x4ee6d4 = _0x289557.dynCall_iijji = _0x289557.asm.nm).apply(null, arguments);
  };
  var _0x5a822c = _0x289557.dynCall_iiddi = function () {
    return (_0x5a822c = _0x289557.dynCall_iiddi = _0x289557.asm.om).apply(null, arguments);
  };
  var _0x517878 = _0x289557.dynCall_iiffi = function () {
    return (_0x517878 = _0x289557.dynCall_iiffi = _0x289557.asm.pm).apply(null, arguments);
  };
  var _0x18be5d = _0x289557.dynCall_iiiiiiiii = function () {
    return (_0x18be5d = _0x289557.dynCall_iiiiiiiii = _0x289557.asm.qm).apply(null, arguments);
  };
  var _0x654589 = _0x289557.dynCall_viijjii = function () {
    return (_0x654589 = _0x289557.dynCall_viijjii = _0x289557.asm.rm).apply(null, arguments);
  };
  var _0x21fbce = _0x289557.dynCall_iiiji = function () {
    return (_0x21fbce = _0x289557.dynCall_iiiji = _0x289557.asm.sm).apply(null, arguments);
  };
  var _0x19fdac = _0x289557.dynCall_dii = function () {
    return (_0x19fdac = _0x289557.dynCall_dii = _0x289557.asm.tm).apply(null, arguments);
  };
  var _0x4f09c3 = _0x289557.dynCall_iiidi = function () {
    return (_0x4f09c3 = _0x289557.dynCall_iiidi = _0x289557.asm.um).apply(null, arguments);
  };
  var _0x21f85 = _0x289557.dynCall_vidi = function () {
    return (_0x21f85 = _0x289557.dynCall_vidi = _0x289557.asm.vm).apply(null, arguments);
  };
  var _0xd9798 = _0x289557.dynCall_viffffi = function () {
    return (_0xd9798 = _0x289557.dynCall_viffffi = _0x289557.asm.wm).apply(null, arguments);
  };
  var _0x4e9f8f = _0x289557.dynCall_iiiifi = function () {
    return (_0x4e9f8f = _0x289557.dynCall_iiiifi = _0x289557.asm.xm).apply(null, arguments);
  };
  var _0x51afaf = _0x289557.dynCall_iiiiidi = function () {
    return (_0x51afaf = _0x289557.dynCall_iiiiidi = _0x289557.asm.ym).apply(null, arguments);
  };
  var _0x420eb1 = _0x289557.dynCall_jjji = function () {
    return (_0x420eb1 = _0x289557.dynCall_jjji = _0x289557.asm.zm).apply(null, arguments);
  };
  var _0x39431a = _0x289557.dynCall_jiiii = function () {
    return (_0x39431a = _0x289557.dynCall_jiiii = _0x289557.asm.Am).apply(null, arguments);
  };
  var _0x3f8684 = _0x289557.dynCall_diiii = function () {
    return (_0x3f8684 = _0x289557.dynCall_diiii = _0x289557.asm.Bm).apply(null, arguments);
  };
  var _0x4b984d = _0x289557.dynCall_iidi = function () {
    return (_0x4b984d = _0x289557.dynCall_iidi = _0x289557.asm.Cm).apply(null, arguments);
  };
  var _0x5ba25d = _0x289557.dynCall_iifi = function () {
    return (_0x5ba25d = _0x289557.dynCall_iifi = _0x289557.asm.Dm).apply(null, arguments);
  };
  var _0x298e41 = _0x289557.dynCall_ijji = function () {
    return (_0x298e41 = _0x289557.dynCall_ijji = _0x289557.asm.Em).apply(null, arguments);
  };
  var _0x1de583 = _0x289557.dynCall_viji = function () {
    return (_0x1de583 = _0x289557.dynCall_viji = _0x289557.asm.Fm).apply(null, arguments);
  };
  var _0x170a24 = _0x289557.dynCall_fffi = function () {
    return (_0x170a24 = _0x289557.dynCall_fffi = _0x289557.asm.Gm).apply(null, arguments);
  };
  var _0x1084d2 = _0x289557.dynCall_jji = function () {
    return (_0x1084d2 = _0x289557.dynCall_jji = _0x289557.asm.Hm).apply(null, arguments);
  };
  var _0x2bc0f0 = _0x289557.dynCall_dddi = function () {
    return (_0x2bc0f0 = _0x289557.dynCall_dddi = _0x289557.asm.Im).apply(null, arguments);
  };
  var _0x26080e = _0x289557.dynCall_viijiiijiiii = function () {
    return (_0x26080e = _0x289557.dynCall_viijiiijiiii = _0x289557.asm.Jm).apply(null, arguments);
  };
  var _0x1b1c23 = _0x289557.dynCall_viiijj = function () {
    return (_0x1b1c23 = _0x289557.dynCall_viiijj = _0x289557.asm.Km).apply(null, arguments);
  };
  var _0x340d78 = _0x289557.dynCall_iiji = function () {
    return (_0x340d78 = _0x289557.dynCall_iiji = _0x289557.asm.Lm).apply(null, arguments);
  };
  var _0x58253a = _0x289557.dynCall_iijii = function () {
    return (_0x58253a = _0x289557.dynCall_iijii = _0x289557.asm.Mm).apply(null, arguments);
  };
  var _0x3e5220 = _0x289557.dynCall_jdi = function () {
    return (_0x3e5220 = _0x289557.dynCall_jdi = _0x289557.asm.Nm).apply(null, arguments);
  };
  var _0xaf9304 = _0x289557.dynCall_vijiii = function () {
    return (_0xaf9304 = _0x289557.dynCall_vijiii = _0x289557.asm.Om).apply(null, arguments);
  };
  var _0x2dce3a = _0x289557.dynCall_fiiii = function () {
    return (_0x2dce3a = _0x289557.dynCall_fiiii = _0x289557.asm.Pm).apply(null, arguments);
  };
  var _0x4149dc = _0x289557.dynCall_vijiiii = function () {
    return (_0x4149dc = _0x289557.dynCall_vijiiii = _0x289557.asm.Qm).apply(null, arguments);
  };
  var _0x413c00 = _0x289557.dynCall_iji = function () {
    return (_0x413c00 = _0x289557.dynCall_iji = _0x289557.asm.Rm).apply(null, arguments);
  };
  var _0x3968de = _0x289557.dynCall_iiiiiiiiii = function () {
    return (_0x3968de = _0x289557.dynCall_iiiiiiiiii = _0x289557.asm.Sm).apply(null, arguments);
  };
  var _0x5c838e = _0x289557.dynCall_jjii = function () {
    return (_0x5c838e = _0x289557.dynCall_jjii = _0x289557.asm.Tm).apply(null, arguments);
  };
  var _0x1db6a5 = _0x289557.dynCall_iijiii = function () {
    return (_0x1db6a5 = _0x289557.dynCall_iijiii = _0x289557.asm.Um).apply(null, arguments);
  };
  var _0x5ee327 = _0x289557.dynCall_dji = function () {
    return (_0x5ee327 = _0x289557.dynCall_dji = _0x289557.asm.Vm).apply(null, arguments);
  };
  var _0x41d4a3 = _0x289557.dynCall_idi = function () {
    return (_0x41d4a3 = _0x289557.dynCall_idi = _0x289557.asm.Wm).apply(null, arguments);
  };
  var _0x3e5718 = _0x289557.dynCall_jidi = function () {
    return (_0x3e5718 = _0x289557.dynCall_jidi = _0x289557.asm.Xm).apply(null, arguments);
  };
  var _0x4bb03b = _0x289557.dynCall_iiiiidii = function () {
    return (_0x4bb03b = _0x289557.dynCall_iiiiidii = _0x289557.asm.Ym).apply(null, arguments);
  };
  var _0x354d9b = _0x289557.dynCall_iiiifii = function () {
    return (_0x354d9b = _0x289557.dynCall_iiiifii = _0x289557.asm.Zm).apply(null, arguments);
  };
  var _0x249850 = _0x289557.dynCall_iiifii = function () {
    return (_0x249850 = _0x289557.dynCall_iiifii = _0x289557.asm._m).apply(null, arguments);
  };
  var _0x5e0a07 = _0x289557.dynCall_viiiifii = function () {
    return (_0x5e0a07 = _0x289557.dynCall_viiiifii = _0x289557.asm.$m).apply(null, arguments);
  };
  var _0x28a3eb = _0x289557.dynCall_viiffi = function () {
    return (_0x28a3eb = _0x289557.dynCall_viiffi = _0x289557.asm.an).apply(null, arguments);
  };
  var _0x5aa9d7 = _0x289557.dynCall_ifi = function () {
    return (_0x5aa9d7 = _0x289557.dynCall_ifi = _0x289557.asm.bn).apply(null, arguments);
  };
  var _0x4ac901 = _0x289557.dynCall_iiiiji = function () {
    return (_0x4ac901 = _0x289557.dynCall_iiiiji = _0x289557.asm.cn).apply(null, arguments);
  };
  var _0x4af89c = _0x289557.dynCall_iiiiiiiiiji = function () {
    return (_0x4af89c = _0x289557.dynCall_iiiiiiiiiji = _0x289557.asm.dn).apply(null, arguments);
  };
  var _0x50c116 = _0x289557.dynCall_vji = function () {
    return (_0x50c116 = _0x289557.dynCall_vji = _0x289557.asm.en).apply(null, arguments);
  };
  var _0x755895 = _0x289557.dynCall_viijji = function () {
    return (_0x755895 = _0x289557.dynCall_viijji = _0x289557.asm.fn).apply(null, arguments);
  };
  var _0x447952 = _0x289557.dynCall_viiiifi = function () {
    return (_0x447952 = _0x289557.dynCall_viiiifi = _0x289557.asm.gn).apply(null, arguments);
  };
  var _0x4827bf = _0x289557.dynCall_iiiiiiiiiiii = function () {
    return (_0x4827bf = _0x289557.dynCall_iiiiiiiiiiii = _0x289557.asm.hn).apply(null, arguments);
  };
  var _0x541918 = _0x289557.dynCall_iiiiiiiiiiiii = function () {
    return (_0x541918 = _0x289557.dynCall_iiiiiiiiiiiii = _0x289557.asm.jn).apply(null, arguments);
  };
  var _0x1d49b8 = _0x289557.dynCall_iiiiiiiiiiiiii = function () {
    return (_0x1d49b8 = _0x289557.dynCall_iiiiiiiiiiiiii = _0x289557.asm.kn).apply(null, arguments);
  };
  var _0x24385e = _0x289557.dynCall_iiiiiiiiiiiiiii = function () {
    return (_0x24385e = _0x289557.dynCall_iiiiiiiiiiiiiii = _0x289557.asm.ln).apply(null, arguments);
  };
  var _0x9b658f = _0x289557.dynCall_iiiiiiiiiiiiiiii = function () {
    return (_0x9b658f = _0x289557.dynCall_iiiiiiiiiiiiiiii = _0x289557.asm.mn).apply(null, arguments);
  };
  var _0x15b719 = _0x289557.dynCall_iiiiiiiiiiiiiiiii = function () {
    return (_0x15b719 = _0x289557.dynCall_iiiiiiiiiiiiiiiii = _0x289557.asm.nn).apply(null, arguments);
  };
  var _0x4b81b5 = _0x289557.dynCall_iiiiiiiiiiiiiiiiii = function () {
    return (_0x4b81b5 = _0x289557.dynCall_iiiiiiiiiiiiiiiiii = _0x289557.asm.on).apply(null, arguments);
  };
  var _0x40920c = _0x289557.dynCall_iiiiiiiiiiiiiiiiiii = function () {
    return (_0x40920c = _0x289557.dynCall_iiiiiiiiiiiiiiiiiii = _0x289557.asm.pn).apply(null, arguments);
  };
  var _0x25845f = _0x289557.dynCall_fifi = function () {
    return (_0x25845f = _0x289557.dynCall_fifi = _0x289557.asm.qn).apply(null, arguments);
  };
  var _0x5c247e = _0x289557.dynCall_fiifi = function () {
    return (_0x5c247e = _0x289557.dynCall_fiifi = _0x289557.asm.rn).apply(null, arguments);
  };
  var _0x4f641e = _0x289557.dynCall_viiiiiiiiifi = function () {
    return (_0x4f641e = _0x289557.dynCall_viiiiiiiiifi = _0x289557.asm.sn).apply(null, arguments);
  };
  var _0x283301 = _0x289557.dynCall_viif = function () {
    return (_0x283301 = _0x289557.dynCall_viif = _0x289557.asm.tn).apply(null, arguments);
  };
  var _0x9b11e8 = _0x289557.dynCall_iiiiij = function () {
    return (_0x9b11e8 = _0x289557.dynCall_iiiiij = _0x289557.asm.un).apply(null, arguments);
  };
  var _0x40e3c3 = _0x289557.dynCall_iiijii = function () {
    return (_0x40e3c3 = _0x289557.dynCall_iiijii = _0x289557.asm.vn).apply(null, arguments);
  };
  var _0x1c67a2 = _0x289557.dynCall_iijiiii = function () {
    return (_0x1c67a2 = _0x289557.dynCall_iijiiii = _0x289557.asm.wn).apply(null, arguments);
  };
  var _0x410af5 = _0x289557.dynCall_jijiii = function () {
    return (_0x410af5 = _0x289557.dynCall_jijiii = _0x289557.asm.xn).apply(null, arguments);
  };
  var _0x23056c = _0x289557.dynCall_viijii = function () {
    return (_0x23056c = _0x289557.dynCall_viijii = _0x289557.asm.yn).apply(null, arguments);
  };
  var _0x3118cc = _0x289557.dynCall_iijiiiiii = function () {
    return (_0x3118cc = _0x289557.dynCall_iijiiiiii = _0x289557.asm.zn).apply(null, arguments);
  };
  var _0x75ec98 = _0x289557.dynCall_iijjiiiiii = function () {
    return (_0x75ec98 = _0x289557.dynCall_iijjiiiiii = _0x289557.asm.An).apply(null, arguments);
  };
  var _0x55a9cd = _0x289557.dynCall_iiiijjii = function () {
    return (_0x55a9cd = _0x289557.dynCall_iiiijjii = _0x289557.asm.Bn).apply(null, arguments);
  };
  var _0x2a3c06 = _0x289557.dynCall_vijjji = function () {
    return (_0x2a3c06 = _0x289557.dynCall_vijjji = _0x289557.asm.Cn).apply(null, arguments);
  };
  var _0x42a0be = _0x289557.dynCall_viiiijiii = function () {
    return (_0x42a0be = _0x289557.dynCall_viiiijiii = _0x289557.asm.Dn).apply(null, arguments);
  };
  var _0x59a647 = _0x289557.dynCall_iiiiiiiiiii = function () {
    return (_0x59a647 = _0x289557.dynCall_iiiiiiiiiii = _0x289557.asm.En).apply(null, arguments);
  };
  var _0x29d651 = _0x289557.dynCall_jiiiiiiiiii = function () {
    return (_0x29d651 = _0x289557.dynCall_jiiiiiiiiii = _0x289557.asm.Fn).apply(null, arguments);
  };
  var _0x14ff98 = _0x289557.dynCall_fiffffi = function () {
    return (_0x14ff98 = _0x289557.dynCall_fiffffi = _0x289557.asm.Gn).apply(null, arguments);
  };
  var _0x3924a2 = _0x289557.dynCall_viiiiiiiffffii = function () {
    return (_0x3924a2 = _0x289557.dynCall_viiiiiiiffffii = _0x289557.asm.Hn).apply(null, arguments);
  };
  var _0x302d9c = _0x289557.dynCall_fi = function () {
    return (_0x302d9c = _0x289557.dynCall_fi = _0x289557.asm.In).apply(null, arguments);
  };
  var _0x582c0f = _0x289557.dynCall_iiifi = function () {
    return (_0x582c0f = _0x289557.dynCall_iiifi = _0x289557.asm.Jn).apply(null, arguments);
  };
  var _0x3c8303 = _0x289557.dynCall_viijiiiiii = function () {
    return (_0x3c8303 = _0x289557.dynCall_viijiiiiii = _0x289557.asm.Kn).apply(null, arguments);
  };
  var _0x2acc7b = _0x289557.dynCall_vjjjiiii = function () {
    return (_0x2acc7b = _0x289557.dynCall_vjjjiiii = _0x289557.asm.Ln).apply(null, arguments);
  };
  var _0x2b99fd = _0x289557.dynCall_vjiiiii = function () {
    return (_0x2b99fd = _0x289557.dynCall_vjiiiii = _0x289557.asm.Mn).apply(null, arguments);
  };
  var _0x3d4dc0 = _0x289557.dynCall_jiiiii = function () {
    return (_0x3d4dc0 = _0x289557.dynCall_jiiiii = _0x289557.asm.Nn).apply(null, arguments);
  };
  var _0x197e77 = _0x289557.dynCall_iifii = function () {
    return (_0x197e77 = _0x289557.dynCall_iifii = _0x289557.asm.On).apply(null, arguments);
  };
  var _0x52feca = _0x289557.dynCall_viiiidiiii = function () {
    return (_0x52feca = _0x289557.dynCall_viiiidiiii = _0x289557.asm.Pn).apply(null, arguments);
  };
  var _0x1af0cd = _0x289557.dynCall_viffi = function () {
    return (_0x1af0cd = _0x289557.dynCall_viffi = _0x289557.asm.Qn).apply(null, arguments);
  };
  var _0x1ac636 = _0x289557.dynCall_vififi = function () {
    return (_0x1ac636 = _0x289557.dynCall_vififi = _0x289557.asm.Rn).apply(null, arguments);
  };
  var _0x572a94 = _0x289557.dynCall_viiifii = function () {
    return (_0x572a94 = _0x289557.dynCall_viiifii = _0x289557.asm.Sn).apply(null, arguments);
  };
  var _0x5a22d7 = _0x289557.dynCall_viffffiiii = function () {
    return (_0x5a22d7 = _0x289557.dynCall_viffffiiii = _0x289557.asm.Tn).apply(null, arguments);
  };
  var _0x5ddf49 = _0x289557.dynCall_viffffii = function () {
    return (_0x5ddf49 = _0x289557.dynCall_viffffii = _0x289557.asm.Un).apply(null, arguments);
  };
  var _0x215bc6 = _0x289557.dynCall_viiiiddii = function () {
    return (_0x215bc6 = _0x289557.dynCall_viiiiddii = _0x289557.asm.Vn).apply(null, arguments);
  };
  var _0x24a950 = _0x289557.dynCall_vifffi = function () {
    return (_0x24a950 = _0x289557.dynCall_vifffi = _0x289557.asm.Wn).apply(null, arguments);
  };
  var _0x44f514 = _0x289557.dynCall_iiiifffii = function () {
    return (_0x44f514 = _0x289557.dynCall_iiiifffii = _0x289557.asm.Xn).apply(null, arguments);
  };
  var _0x369710 = _0x289557.dynCall_iiifffii = function () {
    return (_0x369710 = _0x289557.dynCall_iiifffii = _0x289557.asm.Yn).apply(null, arguments);
  };
  var _0x2e95cc = _0x289557.dynCall_fifiii = function () {
    return (_0x2e95cc = _0x289557.dynCall_fifiii = _0x289557.asm.Zn).apply(null, arguments);
  };
  var _0x2074f9 = _0x289557.dynCall_viiiffii = function () {
    return (_0x2074f9 = _0x289557.dynCall_viiiffii = _0x289557.asm._n).apply(null, arguments);
  };
  var _0x47a329 = _0x289557.dynCall_viiiffi = function () {
    return (_0x47a329 = _0x289557.dynCall_viiiffi = _0x289557.asm.$n).apply(null, arguments);
  };
  var _0x16d651 = _0x289557.dynCall_viifiii = function () {
    return (_0x16d651 = _0x289557.dynCall_viifiii = _0x289557.asm.ao).apply(null, arguments);
  };
  var _0x3cab04 = _0x289557.dynCall_vfi = function () {
    return (_0x3cab04 = _0x289557.dynCall_vfi = _0x289557.asm.bo).apply(null, arguments);
  };
  var _0x50b15f = _0x289557.dynCall_vijjii = function () {
    return (_0x50b15f = _0x289557.dynCall_vijjii = _0x289557.asm.co).apply(null, arguments);
  };
  var _0x453d36 = _0x289557.dynCall_iijfi = function () {
    return (_0x453d36 = _0x289557.dynCall_iijfi = _0x289557.asm.eo).apply(null, arguments);
  };
  var _0x1777d9 = _0x289557.dynCall_iiiffi = function () {
    return (_0x1777d9 = _0x289557.dynCall_iiiffi = _0x289557.asm.fo).apply(null, arguments);
  };
  var _0x45a250 = _0x289557.dynCall_ffffffi = function () {
    return (_0x45a250 = _0x289557.dynCall_ffffffi = _0x289557.asm.go).apply(null, arguments);
  };
  var _0x51904b = _0x289557.dynCall_ijiiiii = function () {
    return (_0x51904b = _0x289557.dynCall_ijiiiii = _0x289557.asm.ho).apply(null, arguments);
  };
  var _0x3c76b2 = _0x289557.dynCall_viiiijii = function () {
    return (_0x3c76b2 = _0x289557.dynCall_viiiijii = _0x289557.asm.io).apply(null, arguments);
  };
  var _0x3a1a95 = _0x289557.dynCall_vifiiii = function () {
    return (_0x3a1a95 = _0x289557.dynCall_vifiiii = _0x289557.asm.jo).apply(null, arguments);
  };
  var _0x52c446 = _0x289557.dynCall_iiffii = function () {
    return (_0x52c446 = _0x289557.dynCall_iiffii = _0x289557.asm.ko).apply(null, arguments);
  };
  var _0xc85680 = _0x289557.dynCall_iiififii = function () {
    return (_0xc85680 = _0x289557.dynCall_iiififii = _0x289557.asm.lo).apply(null, arguments);
  };
  var _0x31ff1d = _0x289557.dynCall_iiffifiii = function () {
    return (_0x31ff1d = _0x289557.dynCall_iiffifiii = _0x289557.asm.mo).apply(null, arguments);
  };
  var _0x33d8bc = _0x289557.dynCall_iifiifiii = function () {
    return (_0x33d8bc = _0x289557.dynCall_iifiifiii = _0x289557.asm.no).apply(null, arguments);
  };
  var _0x177d19 = _0x289557.dynCall_iiifiiii = function () {
    return (_0x177d19 = _0x289557.dynCall_iiifiiii = _0x289557.asm.oo).apply(null, arguments);
  };
  var _0x5e5d46 = _0x289557.dynCall_iiffffiii = function () {
    return (_0x5e5d46 = _0x289557.dynCall_iiffffiii = _0x289557.asm.po).apply(null, arguments);
  };
  var _0x32ad35 = _0x289557.dynCall_vffi = function () {
    return (_0x32ad35 = _0x289557.dynCall_vffi = _0x289557.asm.qo).apply(null, arguments);
  };
  var _0x56a65d = _0x289557.dynCall_iiidfi = function () {
    return (_0x56a65d = _0x289557.dynCall_iiidfi = _0x289557.asm.ro).apply(null, arguments);
  };
  var _0x9c1b7 = _0x289557.dynCall_iiijfi = function () {
    return (_0x9c1b7 = _0x289557.dynCall_iiijfi = _0x289557.asm.so).apply(null, arguments);
  };
  var _0x4a3c86 = _0x289557.dynCall_iiiffii = function () {
    return (_0x4a3c86 = _0x289557.dynCall_iiiffii = _0x289557.asm.to).apply(null, arguments);
  };
  var _0xab5141 = _0x289557.dynCall_iifffi = function () {
    return (_0xab5141 = _0x289557.dynCall_iifffi = _0x289557.asm.uo).apply(null, arguments);
  };
  var _0x54225f = _0x289557.dynCall_iiiififi = function () {
    return (_0x54225f = _0x289557.dynCall_iiiififi = _0x289557.asm.vo).apply(null, arguments);
  };
  var _0x59105e = _0x289557.dynCall_iiiffifiii = function () {
    return (_0x59105e = _0x289557.dynCall_iiiffifiii = _0x289557.asm.wo).apply(null, arguments);
  };
  var _0x591a73 = _0x289557.dynCall_iiifiifii = function () {
    return (_0x591a73 = _0x289557.dynCall_iiifiifii = _0x289557.asm.xo).apply(null, arguments);
  };
  var _0x4766f4 = _0x289557.dynCall_iiifiifiiii = function () {
    return (_0x4766f4 = _0x289557.dynCall_iiifiifiiii = _0x289557.asm.yo).apply(null, arguments);
  };
  var _0x45fa50 = _0x289557.dynCall_ifii = function () {
    return (_0x45fa50 = _0x289557.dynCall_ifii = _0x289557.asm.zo).apply(null, arguments);
  };
  var _0x2c3cfa = _0x289557.dynCall_ifffii = function () {
    return (_0x2c3cfa = _0x289557.dynCall_ifffii = _0x289557.asm.Ao).apply(null, arguments);
  };
  var _0x589c01 = _0x289557.dynCall_ffffii = function () {
    return (_0x589c01 = _0x289557.dynCall_ffffii = _0x289557.asm.Bo).apply(null, arguments);
  };
  var _0x1ab0ed = _0x289557.dynCall_ffffifi = function () {
    return (_0x1ab0ed = _0x289557.dynCall_ffffifi = _0x289557.asm.Co).apply(null, arguments);
  };
  var _0x25ff46 = _0x289557.dynCall_ffffiffi = function () {
    return (_0x25ff46 = _0x289557.dynCall_ffffiffi = _0x289557.asm.Do).apply(null, arguments);
  };
  var _0xc274bc = _0x289557.dynCall_ifiii = function () {
    return (_0xc274bc = _0x289557.dynCall_ifiii = _0x289557.asm.Eo).apply(null, arguments);
  };
  var _0x14f1dc = _0x289557.dynCall_iifiiiiii = function () {
    return (_0x14f1dc = _0x289557.dynCall_iifiiiiii = _0x289557.asm.Fo).apply(null, arguments);
  };
  var _0x595201 = _0x289557.dynCall_iifiiiii = function () {
    return (_0x595201 = _0x289557.dynCall_iifiiiii = _0x289557.asm.Go).apply(null, arguments);
  };
  var _0x39b5fd = _0x289557.dynCall_iiffiiiii = function () {
    return (_0x39b5fd = _0x289557.dynCall_iiffiiiii = _0x289557.asm.Ho).apply(null, arguments);
  };
  var _0x4106d4 = _0x289557.dynCall_iiffifii = function () {
    return (_0x4106d4 = _0x289557.dynCall_iiffifii = _0x289557.asm.Io).apply(null, arguments);
  };
  var _0x50e281 = _0x289557.dynCall_iifiifii = function () {
    return (_0x50e281 = _0x289557.dynCall_iifiifii = _0x289557.asm.Jo).apply(null, arguments);
  };
  var _0x3f4ab8 = _0x289557.dynCall_iififi = function () {
    return (_0x3f4ab8 = _0x289557.dynCall_iififi = _0x289557.asm.Ko).apply(null, arguments);
  };
  var _0x1839c9 = _0x289557.dynCall_iiifiii = function () {
    return (_0x1839c9 = _0x289557.dynCall_iiifiii = _0x289557.asm.Lo).apply(null, arguments);
  };
  var _0x89b14f = _0x289557.dynCall_iiifiiiii = function () {
    return (_0x89b14f = _0x289557.dynCall_iiifiiiii = _0x289557.asm.Mo).apply(null, arguments);
  };
  var _0x23d838 = _0x289557.dynCall_iiififi = function () {
    return (_0x23d838 = _0x289557.dynCall_iiififi = _0x289557.asm.No).apply(null, arguments);
  };
  var _0x47f058 = _0x289557.dynCall_iifiii = function () {
    return (_0x47f058 = _0x289557.dynCall_iifiii = _0x289557.asm.Oo).apply(null, arguments);
  };
  var _0xe7ad16 = _0x289557.dynCall_fiifii = function () {
    return (_0xe7ad16 = _0x289557.dynCall_fiifii = _0x289557.asm.Po).apply(null, arguments);
  };
  var _0x1d320d = _0x289557.dynCall_viiiiiifiifiii = function () {
    return (_0x1d320d = _0x289557.dynCall_viiiiiifiifiii = _0x289557.asm.Qo).apply(null, arguments);
  };
  var _0x1ff518 = _0x289557.dynCall_diidi = function () {
    return (_0x1ff518 = _0x289557.dynCall_diidi = _0x289557.asm.Ro).apply(null, arguments);
  };
  var _0x4e288a = _0x289557.dynCall_fiifdi = function () {
    return (_0x4e288a = _0x289557.dynCall_fiifdi = _0x289557.asm.So).apply(null, arguments);
  };
  var _0x414b31 = _0x289557.dynCall_viiiiiifddfiii = function () {
    return (_0x414b31 = _0x289557.dynCall_viiiiiifddfiii = _0x289557.asm.To).apply(null, arguments);
  };
  var _0x5c853b = _0x289557.dynCall_fiifji = function () {
    return (_0x5c853b = _0x289557.dynCall_fiifji = _0x289557.asm.Uo).apply(null, arguments);
  };
  var _0x4f2b66 = _0x289557.dynCall_viiiiiifjjfiii = function () {
    return (_0x4f2b66 = _0x289557.dynCall_viiiiiifjjfiii = _0x289557.asm.Vo).apply(null, arguments);
  };
  var _0x19987a = _0x289557.dynCall_viiiifiii = function () {
    return (_0x19987a = _0x289557.dynCall_viiiifiii = _0x289557.asm.Wo).apply(null, arguments);
  };
  var _0xd6d8cd = _0x289557.dynCall_viiiiiiffffiii = function () {
    return (_0xd6d8cd = _0x289557.dynCall_viiiiiiffffiii = _0x289557.asm.Xo).apply(null, arguments);
  };
  var _0x1fb660 = _0x289557.dynCall_viifiiii = function () {
    return (_0x1fb660 = _0x289557.dynCall_viifiiii = _0x289557.asm.Yo).apply(null, arguments);
  };
  var _0x25b2aa = _0x289557.dynCall_viifii = function () {
    return (_0x25b2aa = _0x289557.dynCall_viifii = _0x289557.asm.Zo).apply(null, arguments);
  };
  var _0x5b762e = _0x289557.dynCall_iiiiifiii = function () {
    return (_0x5b762e = _0x289557.dynCall_iiiiifiii = _0x289557.asm._o).apply(null, arguments);
  };
  var _0x4ed07c = _0x289557.dynCall_fffffi = function () {
    return (_0x4ed07c = _0x289557.dynCall_fffffi = _0x289557.asm.$o).apply(null, arguments);
  };
  var _0x153c52 = _0x289557.dynCall_fiiffffi = function () {
    return (_0x153c52 = _0x289557.dynCall_fiiffffi = _0x289557.asm.ap).apply(null, arguments);
  };
  var _0x1e68df = _0x289557.dynCall_fffifffi = function () {
    return (_0x1e68df = _0x289557.dynCall_fffifffi = _0x289557.asm.bp).apply(null, arguments);
  };
  var _0x4e1fd1 = _0x289557.dynCall_ifiiii = function () {
    return (_0x4e1fd1 = _0x289557.dynCall_ifiiii = _0x289557.asm.cp).apply(null, arguments);
  };
  var _0x576752 = _0x289557.dynCall_idiiiii = function () {
    return (_0x576752 = _0x289557.dynCall_idiiiii = _0x289557.asm.dp).apply(null, arguments);
  };
  var _0x4153c2 = _0x289557.dynCall_idiiii = function () {
    return (_0x4153c2 = _0x289557.dynCall_idiiii = _0x289557.asm.ep).apply(null, arguments);
  };
  var _0x50788f = _0x289557.dynCall_idii = function () {
    return (_0x50788f = _0x289557.dynCall_idii = _0x289557.asm.fp).apply(null, arguments);
  };
  var _0x1434b0 = _0x289557.dynCall_ijii = function () {
    return (_0x1434b0 = _0x289557.dynCall_ijii = _0x289557.asm.gp).apply(null, arguments);
  };
  var _0x5123a3 = _0x289557.dynCall_iidii = function () {
    return (_0x5123a3 = _0x289557.dynCall_iidii = _0x289557.asm.hp).apply(null, arguments);
  };
  var _0x5289ac = _0x289557.dynCall_iidiii = function () {
    return (_0x5289ac = _0x289557.dynCall_iidiii = _0x289557.asm.ip).apply(null, arguments);
  };
  var _0x4a5c7e = _0x289557.dynCall_iiijiiii = function () {
    return (_0x4a5c7e = _0x289557.dynCall_iiijiiii = _0x289557.asm.jp).apply(null, arguments);
  };
  var _0x54e27f = _0x289557.dynCall_vjiiii = function () {
    return (_0x54e27f = _0x289557.dynCall_vjiiii = _0x289557.asm.kp).apply(null, arguments);
  };
  var _0x4d699d = _0x289557.dynCall_iddi = function () {
    return (_0x4d699d = _0x289557.dynCall_iddi = _0x289557.asm.lp).apply(null, arguments);
  };
  var _0x586d0f = _0x289557.dynCall_viiiiijii = function () {
    return (_0x586d0f = _0x289557.dynCall_viiiiijii = _0x289557.asm.mp).apply(null, arguments);
  };
  var _0x75491 = _0x289557.dynCall_viiiijiiiiiiii = function () {
    return (_0x75491 = _0x289557.dynCall_viiiijiiiiiiii = _0x289557.asm.np).apply(null, arguments);
  };
  var _0x2fee16 = _0x289557.dynCall_viifiifi = function () {
    return (_0x2fee16 = _0x289557.dynCall_viifiifi = _0x289557.asm.op).apply(null, arguments);
  };
  var _0x11d2cf = _0x289557.dynCall_vifiifi = function () {
    return (_0x11d2cf = _0x289557.dynCall_vifiifi = _0x289557.asm.pp).apply(null, arguments);
  };
  var _0x5c559f = _0x289557.dynCall_viffii = function () {
    return (_0x5c559f = _0x289557.dynCall_viffii = _0x289557.asm.qp).apply(null, arguments);
  };
  var _0x26c784 = _0x289557.dynCall_vifiii = function () {
    return (_0x26c784 = _0x289557.dynCall_vifiii = _0x289557.asm.rp).apply(null, arguments);
  };
  var _0x5b05ce = _0x289557.dynCall_viddfffi = function () {
    return (_0x5b05ce = _0x289557.dynCall_viddfffi = _0x289557.asm.sp).apply(null, arguments);
  };
  var _0x4fe6c2 = _0x289557.dynCall_viidfffi = function () {
    return (_0x4fe6c2 = _0x289557.dynCall_viidfffi = _0x289557.asm.tp).apply(null, arguments);
  };
  var _0xbb1141 = _0x289557.dynCall_vidifffi = function () {
    return (_0xbb1141 = _0x289557.dynCall_vidifffi = _0x289557.asm.up).apply(null, arguments);
  };
  var _0x471da4 = _0x289557.dynCall_viiifffi = function () {
    return (_0x471da4 = _0x289557.dynCall_viiifffi = _0x289557.asm.vp).apply(null, arguments);
  };
  var _0x4fdf00 = _0x289557.dynCall_viddi = function () {
    return (_0x4fdf00 = _0x289557.dynCall_viddi = _0x289557.asm.wp).apply(null, arguments);
  };
  var _0xfa29cc = _0x289557.dynCall_vidii = function () {
    return (_0xfa29cc = _0x289557.dynCall_vidii = _0x289557.asm.xp).apply(null, arguments);
  };
  var _0x1fdc45 = _0x289557.dynCall_viiiiifi = function () {
    return (_0x1fdc45 = _0x289557.dynCall_viiiiifi = _0x289557.asm.yp).apply(null, arguments);
  };
  var _0x5269e9 = _0x289557.dynCall_viidii = function () {
    return (_0x5269e9 = _0x289557.dynCall_viidii = _0x289557.asm.zp).apply(null, arguments);
  };
  var _0xa71913 = _0x289557.dynCall_iffi = function () {
    return (_0xa71913 = _0x289557.dynCall_iffi = _0x289557.asm.Ap).apply(null, arguments);
  };
  var _0x3152dc = _0x289557.dynCall_viiffffi = function () {
    return (_0x3152dc = _0x289557.dynCall_viiffffi = _0x289557.asm.Bp).apply(null, arguments);
  };
  var _0x5ceeca = _0x289557.dynCall_viiffii = function () {
    return (_0x5ceeca = _0x289557.dynCall_viiffii = _0x289557.asm.Cp).apply(null, arguments);
  };
  var _0x1875f4 = _0x289557.dynCall_ffffi = function () {
    return (_0x1875f4 = _0x289557.dynCall_ffffi = _0x289557.asm.Dp).apply(null, arguments);
  };
  var _0x1ba164 = _0x289557.dynCall_ffi = function () {
    return (_0x1ba164 = _0x289557.dynCall_ffi = _0x289557.asm.Ep).apply(null, arguments);
  };
  var _0x3488a7 = _0x289557.dynCall_ffii = function () {
    return (_0x3488a7 = _0x289557.dynCall_ffii = _0x289557.asm.Fp).apply(null, arguments);
  };
  var _0x29b170 = _0x289557.dynCall_fiiiii = function () {
    return (_0x29b170 = _0x289557.dynCall_fiiiii = _0x289557.asm.Gp).apply(null, arguments);
  };
  var _0x1076dd = _0x289557.dynCall_ddddi = function () {
    return (_0x1076dd = _0x289557.dynCall_ddddi = _0x289557.asm.Hp).apply(null, arguments);
  };
  var _0x3ffaf8 = _0x289557.dynCall_ddi = function () {
    return (_0x3ffaf8 = _0x289557.dynCall_ddi = _0x289557.asm.Ip).apply(null, arguments);
  };
  var _0x4fb882 = _0x289557.dynCall_jijii = function () {
    return (_0x4fb882 = _0x289557.dynCall_jijii = _0x289557.asm.Jp).apply(null, arguments);
  };
  var _0x5038ff = _0x289557.dynCall_iiiiiji = function () {
    return (_0x5038ff = _0x289557.dynCall_iiiiiji = _0x289557.asm.Kp).apply(null, arguments);
  };
  var _0x166039 = _0x289557.dynCall_viiijii = function () {
    return (_0x166039 = _0x289557.dynCall_viiijii = _0x289557.asm.Lp).apply(null, arguments);
  };
  var _0x32739a = _0x289557.dynCall_viiiiiji = function () {
    return (_0x32739a = _0x289557.dynCall_viiiiiji = _0x289557.asm.Mp).apply(null, arguments);
  };
  var _0x34f7d7 = _0x289557.dynCall_viijiii = function () {
    return (_0x34f7d7 = _0x289557.dynCall_viijiii = _0x289557.asm.Np).apply(null, arguments);
  };
  var _0x3a3885 = _0x289557.dynCall_ijjiiii = function () {
    return (_0x3a3885 = _0x289557.dynCall_ijjiiii = _0x289557.asm.Op).apply(null, arguments);
  };
  var _0xfb82c3 = _0x289557.dynCall_vdiiiii = function () {
    return (_0xfb82c3 = _0x289557.dynCall_vdiiiii = _0x289557.asm.Pp).apply(null, arguments);
  };
  var _0x11dfc0 = _0x289557.dynCall_diiji = function () {
    return (_0x11dfc0 = _0x289557.dynCall_diiji = _0x289557.asm.Qp).apply(null, arguments);
  };
  var _0x13949f = _0x289557.dynCall_vjiiiiiiii = function () {
    return (_0x13949f = _0x289557.dynCall_vjiiiiiiii = _0x289557.asm.Rp).apply(null, arguments);
  };
  var _0xb9f90b = _0x289557.dynCall_vjiiiiiii = function () {
    return (_0xb9f90b = _0x289557.dynCall_vjiiiiiii = _0x289557.asm.Sp).apply(null, arguments);
  };
  var _0x1b9984 = _0x289557.dynCall_ijiiii = function () {
    return (_0x1b9984 = _0x289557.dynCall_ijiiii = _0x289557.asm.Tp).apply(null, arguments);
  };
  var _0x41416b = _0x289557.dynCall_diji = function () {
    return (_0x41416b = _0x289557.dynCall_diji = _0x289557.asm.Up).apply(null, arguments);
  };
  var _0x3ac3f9 = _0x289557.dynCall_fidi = function () {
    return (_0x3ac3f9 = _0x289557.dynCall_fidi = _0x289557.asm.Vp).apply(null, arguments);
  };
  var _0x15d460 = _0x289557.dynCall_vjii = function () {
    return (_0x15d460 = _0x289557.dynCall_vjii = _0x289557.asm.Wp).apply(null, arguments);
  };
  var _0x4019ef = _0x289557.dynCall_vfffi = function () {
    return (_0x4019ef = _0x289557.dynCall_vfffi = _0x289557.asm.Xp).apply(null, arguments);
  };
  var _0xbc15ae = _0x289557.dynCall_vffffi = function () {
    return (_0xbc15ae = _0x289557.dynCall_vffffi = _0x289557.asm.Yp).apply(null, arguments);
  };
  var _0xa6a545 = _0x289557.dynCall_viiiiffi = function () {
    return (_0xa6a545 = _0x289557.dynCall_viiiiffi = _0x289557.asm.Zp).apply(null, arguments);
  };
  var _0x23b3a3 = _0x289557.dynCall_vijji = function () {
    return (_0x23b3a3 = _0x289557.dynCall_vijji = _0x289557.asm._p).apply(null, arguments);
  };
  var _0x4dc7ce = _0x289557.dynCall_vfiii = function () {
    return (_0x4dc7ce = _0x289557.dynCall_vfiii = _0x289557.asm.$p).apply(null, arguments);
  };
  var _0x5b887e = _0x289557.dynCall_vfii = function () {
    return (_0x5b887e = _0x289557.dynCall_vfii = _0x289557.asm.aq).apply(null, arguments);
  };
  var _0x1840fc = _0x289557.dynCall_iiiifiiiii = function () {
    return (_0x1840fc = _0x289557.dynCall_iiiifiiiii = _0x289557.asm.bq).apply(null, arguments);
  };
  var _0x26d260 = _0x289557.dynCall_iiiifiiii = function () {
    return (_0x26d260 = _0x289557.dynCall_iiiifiiii = _0x289557.asm.cq).apply(null, arguments);
  };
  var _0x49f65a = _0x289557.dynCall_iiiifiii = function () {
    return (_0x49f65a = _0x289557.dynCall_iiiifiii = _0x289557.asm.dq).apply(null, arguments);
  };
  var _0x253132 = _0x289557.dynCall_viiiififfi = function () {
    return (_0x253132 = _0x289557.dynCall_viiiififfi = _0x289557.asm.eq).apply(null, arguments);
  };
  var _0x178171 = _0x289557.dynCall_viiiifiifi = function () {
    return (_0x178171 = _0x289557.dynCall_viiiifiifi = _0x289557.asm.fq).apply(null, arguments);
  };
  var _0x5ec1a4 = _0x289557.dynCall_viiiifiiii = function () {
    return (_0x5ec1a4 = _0x289557.dynCall_viiiifiiii = _0x289557.asm.gq).apply(null, arguments);
  };
  var _0x3c546e = _0x289557.dynCall_viiiifiiiii = function () {
    return (_0x3c546e = _0x289557.dynCall_viiiifiiiii = _0x289557.asm.hq).apply(null, arguments);
  };
  var _0x17a1a7 = _0x289557.dynCall_viiiifiiiiiiii = function () {
    return (_0x17a1a7 = _0x289557.dynCall_viiiifiiiiiiii = _0x289557.asm.iq).apply(null, arguments);
  };
  var _0x51ff1e = _0x289557.dynCall_fiffffiiiiii = function () {
    return (_0x51ff1e = _0x289557.dynCall_fiffffiiiiii = _0x289557.asm.jq).apply(null, arguments);
  };
  var _0x2cb8f1 = _0x289557.dynCall_fiffffii = function () {
    return (_0x2cb8f1 = _0x289557.dynCall_fiffffii = _0x289557.asm.kq).apply(null, arguments);
  };
  var _0x45f928 = _0x289557.dynCall_viiiiiffii = function () {
    return (_0x45f928 = _0x289557.dynCall_viiiiiffii = _0x289557.asm.lq).apply(null, arguments);
  };
  var _0x40162d = _0x289557.dynCall_viffiii = function () {
    return (_0x40162d = _0x289557.dynCall_viffiii = _0x289557.asm.mq).apply(null, arguments);
  };
  var _0x52841d = _0x289557.dynCall_viffffiii = function () {
    return (_0x52841d = _0x289557.dynCall_viffffiii = _0x289557.asm.nq).apply(null, arguments);
  };
  var _0x513f28 = _0x289557.dynCall_viiffffiiiiii = function () {
    return (_0x513f28 = _0x289557.dynCall_viiffffiiiiii = _0x289557.asm.oq).apply(null, arguments);
  };
  var _0x2b8727 = _0x289557.dynCall_viiifiii = function () {
    return (_0x2b8727 = _0x289557.dynCall_viiifiii = _0x289557.asm.pq).apply(null, arguments);
  };
  var _0x550c91 = _0x289557.dynCall_viiififi = function () {
    return (_0x550c91 = _0x289557.dynCall_viiififi = _0x289557.asm.qq).apply(null, arguments);
  };
  var _0x41bbb9 = _0x289557.dynCall_viiififfi = function () {
    return (_0x41bbb9 = _0x289557.dynCall_viiififfi = _0x289557.asm.rq).apply(null, arguments);
  };
  var _0x4e47a8 = _0x289557.dynCall_iiiiifi = function () {
    return (_0x4e47a8 = _0x289557.dynCall_iiiiifi = _0x289557.asm.sq).apply(null, arguments);
  };
  var _0x583045 = _0x289557.dynCall_vifffffi = function () {
    return (_0x583045 = _0x289557.dynCall_vifffffi = _0x289557.asm.tq).apply(null, arguments);
  };
  var _0x3b3784 = _0x289557.dynCall_viffiiii = function () {
    return (_0x3b3784 = _0x289557.dynCall_viffiiii = _0x289557.asm.uq).apply(null, arguments);
  };
  var _0x51664a = _0x289557.dynCall_viiiiffffiiii = function () {
    return (_0x51664a = _0x289557.dynCall_viiiiffffiiii = _0x289557.asm.vq).apply(null, arguments);
  };
  var _0x15c71b = _0x289557.dynCall_viifiiiii = function () {
    return (_0x15c71b = _0x289557.dynCall_viifiiiii = _0x289557.asm.wq).apply(null, arguments);
  };
  var _0x482363 = _0x289557.dynCall_iiiiiiffiiiiiiiiiffffiiii = function () {
    return (_0x482363 = _0x289557.dynCall_iiiiiiffiiiiiiiiiffffiiii = _0x289557.asm.xq).apply(null, arguments);
  };
  var _0x1addd1 = _0x289557.dynCall_iiiiiiffiiiiiiiiiiiiiii = function () {
    return (_0x1addd1 = _0x289557.dynCall_iiiiiiffiiiiiiiiiiiiiii = _0x289557.asm.yq).apply(null, arguments);
  };
  var _0x5e2296 = _0x289557.dynCall_viififii = function () {
    return (_0x5e2296 = _0x289557.dynCall_viififii = _0x289557.asm.zq).apply(null, arguments);
  };
  var _0x59b720 = _0x289557.dynCall_viffffffi = function () {
    return (_0x59b720 = _0x289557.dynCall_viffffffi = _0x289557.asm.Aq).apply(null, arguments);
  };
  var _0x1ce4e7 = _0x289557.dynCall_iiiffiiii = function () {
    return (_0x1ce4e7 = _0x289557.dynCall_iiiffiiii = _0x289557.asm.Bq).apply(null, arguments);
  };
  var _0x5c1eab = _0x289557.dynCall_iiiiffiiii = function () {
    return (_0x5c1eab = _0x289557.dynCall_iiiiffiiii = _0x289557.asm.Cq).apply(null, arguments);
  };
  var _0x4e1f3b = _0x289557.dynCall_fifffi = function () {
    return (_0x4e1f3b = _0x289557.dynCall_fifffi = _0x289557.asm.Dq).apply(null, arguments);
  };
  var _0x3b5c80 = _0x289557.dynCall_fffffffi = function () {
    return (_0x3b5c80 = _0x289557.dynCall_fffffffi = _0x289557.asm.Eq).apply(null, arguments);
  };
  var _0x4a0380 = _0x289557.dynCall_viffifi = function () {
    return (_0x4a0380 = _0x289557.dynCall_viffifi = _0x289557.asm.Fq).apply(null, arguments);
  };
  var _0x5a986e = _0x289557.dynCall_viiffifi = function () {
    return (_0x5a986e = _0x289557.dynCall_viiffifi = _0x289557.asm.Gq).apply(null, arguments);
  };
  var _0x18277a = _0x289557.dynCall_ifffi = function () {
    return (_0x18277a = _0x289557.dynCall_ifffi = _0x289557.asm.Hq).apply(null, arguments);
  };
  var _0x38b85a = _0x289557.dynCall_fiiiffi = function () {
    return (_0x38b85a = _0x289557.dynCall_fiiiffi = _0x289557.asm.Iq).apply(null, arguments);
  };
  var _0x362389 = _0x289557.dynCall_viiififiii = function () {
    return (_0x362389 = _0x289557.dynCall_viiififiii = _0x289557.asm.Jq).apply(null, arguments);
  };
  var _0xf6e83c = _0x289557.dynCall_viiffiiiiiiiii = function () {
    return (_0xf6e83c = _0x289557.dynCall_viiffiiiiiiiii = _0x289557.asm.Kq).apply(null, arguments);
  };
  var _0x24828c = _0x289557.dynCall_viiiiiffiii = function () {
    return (_0x24828c = _0x289557.dynCall_viiiiiffiii = _0x289557.asm.Lq).apply(null, arguments);
  };
  var _0x66cf91 = _0x289557.dynCall_viiffiii = function () {
    return (_0x66cf91 = _0x289557.dynCall_viiffiii = _0x289557.asm.Mq).apply(null, arguments);
  };
  var _0x231fcd = _0x289557.dynCall_viiffiiiiiii = function () {
    return (_0x231fcd = _0x289557.dynCall_viiffiiiiiii = _0x289557.asm.Nq).apply(null, arguments);
  };
  var _0x4de66e = _0x289557.dynCall_fffffffffi = function () {
    return (_0x4de66e = _0x289557.dynCall_fffffffffi = _0x289557.asm.Oq).apply(null, arguments);
  };
  var _0x5d0ae7 = _0x289557.dynCall_vifiiiiii = function () {
    return (_0x5d0ae7 = _0x289557.dynCall_vifiiiiii = _0x289557.asm.Pq).apply(null, arguments);
  };
  var _0xc2f538 = _0x289557.dynCall_vifiiiii = function () {
    return (_0xc2f538 = _0x289557.dynCall_vifiiiii = _0x289557.asm.Qq).apply(null, arguments);
  };
  var _0x531d14 = _0x289557.dynCall_viifiiiiiii = function () {
    return (_0x531d14 = _0x289557.dynCall_viifiiiiiii = _0x289557.asm.Rq).apply(null, arguments);
  };
  var _0x529d30 = _0x289557.dynCall_viiififfiiiiiii = function () {
    return (_0x529d30 = _0x289557.dynCall_viiififfiiiiiii = _0x289557.asm.Sq).apply(null, arguments);
  };
  var _0x293a56 = _0x289557.dynCall_viiffiifiiiiiii = function () {
    return (_0x293a56 = _0x289557.dynCall_viiffiifiiiiiii = _0x289557.asm.Tq).apply(null, arguments);
  };
  var _0xf57110 = _0x289557.dynCall_viifiiiiii = function () {
    return (_0xf57110 = _0x289557.dynCall_viifiiiiii = _0x289557.asm.Uq).apply(null, arguments);
  };
  var _0x40478a = _0x289557.dynCall_viiifiiiiii = function () {
    return (_0x40478a = _0x289557.dynCall_viiifiiiiii = _0x289557.asm.Vq).apply(null, arguments);
  };
  var _0x253de2 = _0x289557.dynCall_viiiifiiiiii = function () {
    return (_0x253de2 = _0x289557.dynCall_viiiifiiiiii = _0x289557.asm.Wq).apply(null, arguments);
  };
  var _0x4874ae = _0x289557.dynCall_viififiiiiii = function () {
    return (_0x4874ae = _0x289557.dynCall_viififiiiiii = _0x289557.asm.Xq).apply(null, arguments);
  };
  var _0x215253 = _0x289557.dynCall_viiiffiifiiiiiii = function () {
    return (_0x215253 = _0x289557.dynCall_viiiffiifiiiiiii = _0x289557.asm.Yq).apply(null, arguments);
  };
  var _0x559b40 = _0x289557.dynCall_viiiiiifiiiiii = function () {
    return (_0x559b40 = _0x289557.dynCall_viiiiiifiiiiii = _0x289557.asm.Zq).apply(null, arguments);
  };
  var _0x8a1064 = _0x289557.dynCall_vififiii = function () {
    return (_0x8a1064 = _0x289557.dynCall_vififiii = _0x289557.asm._q).apply(null, arguments);
  };
  var _0x17ea61 = _0x289557.dynCall_fiffi = function () {
    return (_0x17ea61 = _0x289557.dynCall_fiffi = _0x289557.asm.$q).apply(null, arguments);
  };
  var _0x513ee0 = _0x289557.dynCall_viiiiiiiijiiii = function () {
    return (_0x513ee0 = _0x289557.dynCall_viiiiiiiijiiii = _0x289557.asm.ar).apply(null, arguments);
  };
  var _0xc79cd8 = _0x289557.dynCall_fifii = function () {
    return (_0xc79cd8 = _0x289557.dynCall_fifii = _0x289557.asm.br).apply(null, arguments);
  };
  var _0x2062b4 = _0x289557.dynCall_vifffii = function () {
    return (_0x2062b4 = _0x289557.dynCall_vifffii = _0x289557.asm.cr).apply(null, arguments);
  };
  var _0x2c9b9b = _0x289557.dynCall_viiiiiffi = function () {
    return (_0x2c9b9b = _0x289557.dynCall_viiiiiffi = _0x289557.asm.dr).apply(null, arguments);
  };
  var _0x1e6b25 = _0x289557.dynCall_viiidii = function () {
    return (_0x1e6b25 = _0x289557.dynCall_viiidii = _0x289557.asm.er).apply(null, arguments);
  };
  var _0x14e3c7 = _0x289557.dynCall_ijiiiiiiiii = function () {
    return (_0x14e3c7 = _0x289557.dynCall_ijiiiiiiiii = _0x289557.asm.fr).apply(null, arguments);
  };
  var _0x4c016b = _0x289557.dynCall_iiijiiiii = function () {
    return (_0x4c016b = _0x289557.dynCall_iiijiiiii = _0x289557.asm.gr).apply(null, arguments);
  };
  var _0x4d8af4 = _0x289557.dynCall_viiijiii = function () {
    return (_0x4d8af4 = _0x289557.dynCall_viiijiii = _0x289557.asm.hr).apply(null, arguments);
  };
  var _0x29d1de = _0x289557.dynCall_ijjiii = function () {
    return (_0x29d1de = _0x289557.dynCall_ijjiii = _0x289557.asm.ir).apply(null, arguments);
  };
  var _0x18ebe0 = _0x289557.dynCall_ffiii = function () {
    return (_0x18ebe0 = _0x289557.dynCall_ffiii = _0x289557.asm.jr).apply(null, arguments);
  };
  var _0x2322ff = _0x289557.dynCall_fffiii = function () {
    return (_0x2322ff = _0x289557.dynCall_fffiii = _0x289557.asm.kr).apply(null, arguments);
  };
  var _0x3ff92 = _0x289557.dynCall_dddiii = function () {
    return (_0x3ff92 = _0x289557.dynCall_dddiii = _0x289557.asm.lr).apply(null, arguments);
  };
  var _0x4d3fa2 = _0x289557.dynCall_jjiii = function () {
    return (_0x4d3fa2 = _0x289557.dynCall_jjiii = _0x289557.asm.mr).apply(null, arguments);
  };
  var _0x330644 = _0x289557.dynCall_jddi = function () {
    return (_0x330644 = _0x289557.dynCall_jddi = _0x289557.asm.nr).apply(null, arguments);
  };
  var _0x16d3c4 = _0x289557.dynCall_jjjii = function () {
    return (_0x16d3c4 = _0x289557.dynCall_jjjii = _0x289557.asm.or).apply(null, arguments);
  };
  var _0x5e791b = _0x289557.dynCall_jdii = function () {
    return (_0x5e791b = _0x289557.dynCall_jdii = _0x289557.asm.pr).apply(null, arguments);
  };
  var _0x254449 = _0x289557.dynCall_djii = function () {
    return (_0x254449 = _0x289557.dynCall_djii = _0x289557.asm.qr).apply(null, arguments);
  };
  var _0xa51dc = _0x289557.dynCall_fdi = function () {
    return (_0xa51dc = _0x289557.dynCall_fdi = _0x289557.asm.rr).apply(null, arguments);
  };
  var _0x182a5c = _0x289557.dynCall_jjiiii = function () {
    return (_0x182a5c = _0x289557.dynCall_jjiiii = _0x289557.asm.sr).apply(null, arguments);
  };
  var _0x4cb2ec = _0x289557.dynCall_vidiii = function () {
    return (_0x4cb2ec = _0x289557.dynCall_vidiii = _0x289557.asm.tr).apply(null, arguments);
  };
  var _0x2a40b4 = _0x289557.dynCall_viiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiii = function () {
    return (_0x2a40b4 = _0x289557.dynCall_viiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiii = _0x289557.asm.ur).apply(null, arguments);
  };
  var _0xfbcf23 = _0x289557.dynCall_viffffffffi = function () {
    return (_0xfbcf23 = _0x289557.dynCall_viffffffffi = _0x289557.asm.vr).apply(null, arguments);
  };
  var _0x34c89a = _0x289557.dynCall_viddddi = function () {
    return (_0x34c89a = _0x289557.dynCall_viddddi = _0x289557.asm.wr).apply(null, arguments);
  };
  var _0x1e2afc = _0x289557.dynCall_vijjjji = function () {
    return (_0x1e2afc = _0x289557.dynCall_vijjjji = _0x289557.asm.xr).apply(null, arguments);
  };
  var _0x2321b1 = _0x289557.dynCall_ddii = function () {
    return (_0x2321b1 = _0x289557.dynCall_ddii = _0x289557.asm.yr).apply(null, arguments);
  };
  var _0x23889a = _0x289557.dynCall_iiiiiijii = function () {
    return (_0x23889a = _0x289557.dynCall_iiiiiijii = _0x289557.asm.zr).apply(null, arguments);
  };
  var _0x3075f1 = _0x289557.dynCall_jiidi = function () {
    return (_0x3075f1 = _0x289557.dynCall_jiidi = _0x289557.asm.Ar).apply(null, arguments);
  };
  var _0x3d5097 = _0x289557.dynCall_viiiidijii = function () {
    return (_0x3d5097 = _0x289557.dynCall_viiiidijii = _0x289557.asm.Br).apply(null, arguments);
  };
  var _0x22d99f = _0x289557.dynCall_viiiidii = function () {
    return (_0x22d99f = _0x289557.dynCall_viiiidii = _0x289557.asm.Cr).apply(null, arguments);
  };
  var _0x50b38f = _0x289557.dynCall_iiidiii = function () {
    return (_0x50b38f = _0x289557.dynCall_iiidiii = _0x289557.asm.Dr).apply(null, arguments);
  };
  var _0x1ed78f = _0x289557.dynCall_iiidii = function () {
    return (_0x1ed78f = _0x289557.dynCall_iiidii = _0x289557.asm.Er).apply(null, arguments);
  };
  var _0x167fcd = _0x289557.dynCall_viijiiiii = function () {
    return (_0x167fcd = _0x289557.dynCall_viijiiiii = _0x289557.asm.Fr).apply(null, arguments);
  };
  var _0x109d45 = _0x289557.dynCall_viifffi = function () {
    return (_0x109d45 = _0x289557.dynCall_viifffi = _0x289557.asm.Gr).apply(null, arguments);
  };
  var _0x4d797f = _0x289557.dynCall_viifffffi = function () {
    return (_0x4d797f = _0x289557.dynCall_viifffffi = _0x289557.asm.Hr).apply(null, arguments);
  };
  var _0x566b12 = _0x289557.dynCall_viiffffffi = function () {
    return (_0x566b12 = _0x289557.dynCall_viiffffffi = _0x289557.asm.Ir).apply(null, arguments);
  };
  var _0x2bc6bb = _0x289557.dynCall_viifffffffi = function () {
    return (_0x2bc6bb = _0x289557.dynCall_viifffffffi = _0x289557.asm.Jr).apply(null, arguments);
  };
  var _0x39e0d6 = _0x289557.dynCall_viiffffffffi = function () {
    return (_0x39e0d6 = _0x289557.dynCall_viiffffffffi = _0x289557.asm.Kr).apply(null, arguments);
  };
  var _0x275c87 = _0x289557.dynCall_viiffffffffiii = function () {
    return (_0x275c87 = _0x289557.dynCall_viiffffffffiii = _0x289557.asm.Lr).apply(null, arguments);
  };
  var _0x2f4a3f = _0x289557.dynCall_viiiiffffii = function () {
    return (_0x2f4a3f = _0x289557.dynCall_viiiiffffii = _0x289557.asm.Mr).apply(null, arguments);
  };
  var _0x1c38e7 = _0x289557.dynCall_fiiiiii = function () {
    return (_0x1c38e7 = _0x289557.dynCall_fiiiiii = _0x289557.asm.Nr).apply(null, arguments);
  };
  var _0x2d6672 = _0x289557.dynCall_iiijjiii = function () {
    return (_0x2d6672 = _0x289557.dynCall_iiijjiii = _0x289557.asm.Or).apply(null, arguments);
  };
  var _0x2240f9 = _0x289557.dynCall_viiijji = function () {
    return (_0x2240f9 = _0x289557.dynCall_viiijji = _0x289557.asm.Pr).apply(null, arguments);
  };
  var _0x3f3db3 = _0x289557.dynCall_vijiiiiiii = function () {
    return (_0x3f3db3 = _0x289557.dynCall_vijiiiiiii = _0x289557.asm.Qr).apply(null, arguments);
  };
  var _0x231dc0 = _0x289557.dynCall_vijiiiiiiii = function () {
    return (_0x231dc0 = _0x289557.dynCall_vijiiiiiiii = _0x289557.asm.Rr).apply(null, arguments);
  };
  var _0x2a329a = _0x289557.dynCall_jjiiiii = function () {
    return (_0x2a329a = _0x289557.dynCall_jjiiiii = _0x289557.asm.Sr).apply(null, arguments);
  };
  var _0x2dd2ce = _0x289557.dynCall_jijjji = function () {
    return (_0x2dd2ce = _0x289557.dynCall_jijjji = _0x289557.asm.Tr).apply(null, arguments);
  };
  var _0x192c5b = _0x289557.dynCall_jijjjii = function () {
    return (_0x192c5b = _0x289557.dynCall_jijjjii = _0x289557.asm.Ur).apply(null, arguments);
  };
  var _0x54b5d7 = _0x289557.dynCall_ijijiiiii = function () {
    return (_0x54b5d7 = _0x289557.dynCall_ijijiiiii = _0x289557.asm.Vr).apply(null, arguments);
  };
  var _0x5531c1 = _0x289557.dynCall_ijjjiii = function () {
    return (_0x5531c1 = _0x289557.dynCall_ijjjiii = _0x289557.asm.Wr).apply(null, arguments);
  };
  var _0x34e689 = _0x289557.dynCall_vijjjiijii = function () {
    return (_0x34e689 = _0x289557.dynCall_vijjjiijii = _0x289557.asm.Xr).apply(null, arguments);
  };
  var _0x2afeee = _0x289557.dynCall_ijjjiijii = function () {
    return (_0x2afeee = _0x289557.dynCall_ijjjiijii = _0x289557.asm.Yr).apply(null, arguments);
  };
  var _0x52a944 = _0x289557.dynCall_vijiiiiii = function () {
    return (_0x52a944 = _0x289557.dynCall_vijiiiiii = _0x289557.asm.Zr).apply(null, arguments);
  };
  var _0x10270e = _0x289557.dynCall_jfi = function () {
    return (_0x10270e = _0x289557.dynCall_jfi = _0x289557.asm._r).apply(null, arguments);
  };
  var _0xfaf5f8 = _0x289557.dynCall_fji = function () {
    return (_0xfaf5f8 = _0x289557.dynCall_fji = _0x289557.asm.$r).apply(null, arguments);
  };
  var _0x4d3f67 = _0x289557.dynCall_dfi = function () {
    return (_0x4d3f67 = _0x289557.dynCall_dfi = _0x289557.asm.as).apply(null, arguments);
  };
  var _0x4bd528 = _0x289557.dynCall_jidii = function () {
    return (_0x4bd528 = _0x289557.dynCall_jidii = _0x289557.asm.bs).apply(null, arguments);
  };
  var _0x436799 = _0x289557.dynCall_viiiiiiiji = function () {
    return (_0x436799 = _0x289557.dynCall_viiiiiiiji = _0x289557.asm.cs).apply(null, arguments);
  };
  var _0x27bfe8 = _0x289557.dynCall_viiiiiiiiji = function () {
    return (_0x27bfe8 = _0x289557.dynCall_viiiiiiiiji = _0x289557.asm.ds).apply(null, arguments);
  };
  var _0x459185 = _0x289557.dynCall_viiiiiiiiiji = function () {
    return (_0x459185 = _0x289557.dynCall_viiiiiiiiiji = _0x289557.asm.es).apply(null, arguments);
  };
  var _0x9a23ff = _0x289557.dynCall_ijiijii = function () {
    return (_0x9a23ff = _0x289557.dynCall_ijiijii = _0x289557.asm.fs).apply(null, arguments);
  };
  var _0x4a98f3 = _0x289557.dynCall_vjjiiiii = function () {
    return (_0x4a98f3 = _0x289557.dynCall_vjjiiiii = _0x289557.asm.gs).apply(null, arguments);
  };
  var _0x2498a3 = _0x289557.dynCall_vjjii = function () {
    return (_0x2498a3 = _0x289557.dynCall_vjjii = _0x289557.asm.hs).apply(null, arguments);
  };
  var _0x25d75d = _0x289557.dynCall_ijiiji = function () {
    return (_0x25d75d = _0x289557.dynCall_ijiiji = _0x289557.asm.is).apply(null, arguments);
  };
  var _0xf0c1d = _0x289557.dynCall_ijiiiiji = function () {
    return (_0xf0c1d = _0x289557.dynCall_ijiiiiji = _0x289557.asm.js).apply(null, arguments);
  };
  var _0x4b3ff0 = _0x289557.dynCall_jiiiiii = function () {
    return (_0x4b3ff0 = _0x289557.dynCall_jiiiiii = _0x289557.asm.ks).apply(null, arguments);
  };
  var _0x6fbcf5 = _0x289557.dynCall_idiii = function () {
    return (_0x6fbcf5 = _0x289557.dynCall_idiii = _0x289557.asm.ls).apply(null, arguments);
  };
  var _0x404568 = _0x289557.dynCall_ifiiiii = function () {
    return (_0x404568 = _0x289557.dynCall_ifiiiii = _0x289557.asm.ms).apply(null, arguments);
  };
  var _0x3382d3 = _0x289557.dynCall_vdiii = function () {
    return (_0x3382d3 = _0x289557.dynCall_vdiii = _0x289557.asm.ns).apply(null, arguments);
  };
  var _0x302d5 = _0x289557.dynCall_vijijji = function () {
    return (_0x302d5 = _0x289557.dynCall_vijijji = _0x289557.asm.os).apply(null, arguments);
  };
  var _0x444f5b = _0x289557.dynCall_iijjji = function () {
    return (_0x444f5b = _0x289557.dynCall_iijjji = _0x289557.asm.ps).apply(null, arguments);
  };
  var _0x48fed5 = _0x289557.dynCall_viijjji = function () {
    return (_0x48fed5 = _0x289557.dynCall_viijjji = _0x289557.asm.qs).apply(null, arguments);
  };
  var _0x531262 = _0x289557.dynCall_vdii = function () {
    return (_0x531262 = _0x289557.dynCall_vdii = _0x289557.asm.rs).apply(null, arguments);
  };
  var _0x1abaff = _0x289557.dynCall_iiiijii = function () {
    return (_0x1abaff = _0x289557.dynCall_iiiijii = _0x289557.asm.ss).apply(null, arguments);
  };
  var _0x12ac96 = _0x289557.dynCall_jijji = function () {
    return (_0x12ac96 = _0x289557.dynCall_jijji = _0x289557.asm.ts).apply(null, arguments);
  };
  var _0x5a2ce2 = _0x289557.dynCall_diddi = function () {
    return (_0x5a2ce2 = _0x289557.dynCall_diddi = _0x289557.asm.us).apply(null, arguments);
  };
  var _0x44dbca = _0x289557.dynCall_didi = function () {
    return (_0x44dbca = _0x289557.dynCall_didi = _0x289557.asm.vs).apply(null, arguments);
  };
  var _0x2e012b = _0x289557.dynCall_iijjii = function () {
    return (_0x2e012b = _0x289557.dynCall_iijjii = _0x289557.asm.ws).apply(null, arguments);
  };
  var _0x28474c = _0x289557.dynCall_jjjji = function () {
    return (_0x28474c = _0x289557.dynCall_jjjji = _0x289557.asm.xs).apply(null, arguments);
  };
  var _0x341391 = _0x289557.dynCall_viijijii = function () {
    return (_0x341391 = _0x289557.dynCall_viijijii = _0x289557.asm.ys).apply(null, arguments);
  };
  var _0x43445b = _0x289557.dynCall_viijijiii = function () {
    return (_0x43445b = _0x289557.dynCall_viijijiii = _0x289557.asm.zs).apply(null, arguments);
  };
  var _0x560e9a = _0x289557.dynCall_vijiji = function () {
    return (_0x560e9a = _0x289557.dynCall_vijiji = _0x289557.asm.As).apply(null, arguments);
  };
  var _0x1787cf = _0x289557.dynCall_viijiijiii = function () {
    return (_0x1787cf = _0x289557.dynCall_viijiijiii = _0x289557.asm.Bs).apply(null, arguments);
  };
  var _0x22e8c9 = _0x289557.dynCall_viiiijiiii = function () {
    return (_0x22e8c9 = _0x289557.dynCall_viiiijiiii = _0x289557.asm.Cs).apply(null, arguments);
  };
  var _0x77935b = _0x289557.dynCall_di = function () {
    return (_0x77935b = _0x289557.dynCall_di = _0x289557.asm.Ds).apply(null, arguments);
  };
  var _0x33acaf = _0x289557.dynCall_jiiiiiiiii = function () {
    return (_0x33acaf = _0x289557.dynCall_jiiiiiiiii = _0x289557.asm.Es).apply(null, arguments);
  };
  var _0x5aa8c3 = _0x289557.dynCall_iiiiijii = function () {
    return (_0x5aa8c3 = _0x289557.dynCall_iiiiijii = _0x289557.asm.Fs).apply(null, arguments);
  };
  var _0x2b7084 = _0x289557.dynCall_iiiidii = function () {
    return (_0x2b7084 = _0x289557.dynCall_iiiidii = _0x289557.asm.Gs).apply(null, arguments);
  };
  var _0x582514 = _0x289557.dynCall_iiiiifii = function () {
    return (_0x582514 = _0x289557.dynCall_iiiiifii = _0x289557.asm.Hs).apply(null, arguments);
  };
  var _0x199e60 = _0x289557.dynCall_iiiiffiiiji = function () {
    return (_0x199e60 = _0x289557.dynCall_iiiiffiiiji = _0x289557.asm.Is).apply(null, arguments);
  };
  var _0x1a5239 = _0x289557.dynCall_iiidfii = function () {
    return (_0x1a5239 = _0x289557.dynCall_iiidfii = _0x289557.asm.Js).apply(null, arguments);
  };
  var _0x3e1682 = _0x289557.dynCall_iiijfii = function () {
    return (_0x3e1682 = _0x289557.dynCall_iiijfii = _0x289557.asm.Ks).apply(null, arguments);
  };
  var _0x5a48ce = _0x289557.dynCall_jiiiiiii = function () {
    return (_0x5a48ce = _0x289557.dynCall_jiiiiiii = _0x289557.asm.Ls).apply(null, arguments);
  };
  var _0x542930 = _0x289557.dynCall_iiiiffiiiii = function () {
    return (_0x542930 = _0x289557.dynCall_iiiiffiiiii = _0x289557.asm.Ms).apply(null, arguments);
  };
  var _0x1f5f5c = _0x289557.dynCall_iidfii = function () {
    return (_0x1f5f5c = _0x289557.dynCall_iidfii = _0x289557.asm.Ns).apply(null, arguments);
  };
  var _0x3cf1bf = _0x289557.dynCall_iijfii = function () {
    return (_0x3cf1bf = _0x289557.dynCall_iijfii = _0x289557.asm.Os).apply(null, arguments);
  };
  var _0x8ae43f = _0x289557.dynCall_iidfi = function () {
    return (_0x8ae43f = _0x289557.dynCall_iidfi = _0x289557.asm.Ps).apply(null, arguments);
  };
  var _0x24349c = _0x289557.dynCall_iiddfi = function () {
    return (_0x24349c = _0x289557.dynCall_iiddfi = _0x289557.asm.Qs).apply(null, arguments);
  };
  var _0xc2c7c9 = _0x289557.dynCall_iijjfi = function () {
    return (_0xc2c7c9 = _0x289557.dynCall_iijjfi = _0x289557.asm.Rs).apply(null, arguments);
  };
  var _0x40182f = _0x289557.dynCall_iiiidfii = function () {
    return (_0x40182f = _0x289557.dynCall_iiiidfii = _0x289557.asm.Ss).apply(null, arguments);
  };
  var _0x654158 = _0x289557.dynCall_iiiijfii = function () {
    return (_0x654158 = _0x289557.dynCall_iiiijfii = _0x289557.asm.Ts).apply(null, arguments);
  };
  var _0x247050 = _0x289557.dynCall_iiiiffii = function () {
    return (_0x247050 = _0x289557.dynCall_iiiiffii = _0x289557.asm.Us).apply(null, arguments);
  };
  var _0xa648a6 = _0x289557.dynCall_jiiiiji = function () {
    return (_0xa648a6 = _0x289557.dynCall_jiiiiji = _0x289557.asm.Vs).apply(null, arguments);
  };
  var _0x18f880 = _0x289557.dynCall_fiiiifi = function () {
    return (_0x18f880 = _0x289557.dynCall_fiiiifi = _0x289557.asm.Ws).apply(null, arguments);
  };
  var _0x467248 = _0x289557.dynCall_iiijjii = function () {
    return (_0x467248 = _0x289557.dynCall_iiijjii = _0x289557.asm.Xs).apply(null, arguments);
  };
  var _0x1439d3 = _0x289557.dynCall_vij = function () {
    return (_0x1439d3 = _0x289557.dynCall_vij = _0x289557.asm.Ys).apply(null, arguments);
  };
  var _0xe641a2 = _0x289557.dynCall_iiiijiii = function () {
    return (_0xe641a2 = _0x289557.dynCall_iiiijiii = _0x289557.asm.Zs).apply(null, arguments);
  };
  var _0x29cdb6 = _0x289557.dynCall_iiiij = function () {
    return (_0x29cdb6 = _0x289557.dynCall_iiiij = _0x289557.asm._s).apply(null, arguments);
  };
  var _0x3e9f15 = _0x289557.dynCall_ijj = function () {
    return (_0x3e9f15 = _0x289557.dynCall_ijj = _0x289557.asm.$s).apply(null, arguments);
  };
  var _0x375d03 = _0x289557.dynCall_vjji = function () {
    return (_0x375d03 = _0x289557.dynCall_vjji = _0x289557.asm.at).apply(null, arguments);
  };
  var _0xe4e185 = _0x289557.dynCall_ij = function () {
    return (_0xe4e185 = _0x289557.dynCall_ij = _0x289557.asm.bt).apply(null, arguments);
  };
  var _0x21a6dd = _0x289557.dynCall_vif = function () {
    return (_0x21a6dd = _0x289557.dynCall_vif = _0x289557.asm.ct).apply(null, arguments);
  };
  var _0x5c8d0d = _0x289557.dynCall_vid = function () {
    return (_0x5c8d0d = _0x289557.dynCall_vid = _0x289557.asm.dt).apply(null, arguments);
  };
  var _0x19a6d2 = _0x289557.dynCall_viiiiif = function () {
    return (_0x19a6d2 = _0x289557.dynCall_viiiiif = _0x289557.asm.et).apply(null, arguments);
  };
  var _0x40e33d = _0x289557.dynCall_viiiif = function () {
    return (_0x40e33d = _0x289557.dynCall_viiiif = _0x289557.asm.ft).apply(null, arguments);
  };
  var _0x458ff1 = _0x289557.dynCall_viiiiiif = function () {
    return (_0x458ff1 = _0x289557.dynCall_viiiiiif = _0x289557.asm.gt).apply(null, arguments);
  };
  var _0xe6c961 = _0x289557.dynCall_viffff = function () {
    return (_0xe6c961 = _0x289557.dynCall_viffff = _0x289557.asm.ht).apply(null, arguments);
  };
  var _0x4ed64f = _0x289557.dynCall_iiif = function () {
    return (_0x4ed64f = _0x289557.dynCall_iiif = _0x289557.asm.it).apply(null, arguments);
  };
  var _0x5447be = _0x289557.dynCall_fif = function () {
    return (_0x5447be = _0x289557.dynCall_fif = _0x289557.asm.jt).apply(null, arguments);
  };
  var _0x3a97d6 = _0x289557.dynCall_iiiiiifff = function () {
    return (_0x3a97d6 = _0x289557.dynCall_iiiiiifff = _0x289557.asm.kt).apply(null, arguments);
  };
  var _0x5af83f = _0x289557.dynCall_iiiiiifiif = function () {
    return (_0x5af83f = _0x289557.dynCall_iiiiiifiif = _0x289557.asm.lt).apply(null, arguments);
  };
  var _0x63d710 = _0x289557.dynCall_iiiiiifiii = function () {
    return (_0x63d710 = _0x289557.dynCall_iiiiiifiii = _0x289557.asm.mt).apply(null, arguments);
  };
  var _0x43c73e = _0x289557.dynCall_iiiiiiifiif = function () {
    return (_0x43c73e = _0x289557.dynCall_iiiiiiifiif = _0x289557.asm.nt).apply(null, arguments);
  };
  var _0x477a7b = _0x289557.dynCall_fiff = function () {
    return (_0x477a7b = _0x289557.dynCall_fiff = _0x289557.asm.ot).apply(null, arguments);
  };
  var _0x22178c = _0x289557.dynCall_fiiiiiifiifif = function () {
    return (_0x22178c = _0x289557.dynCall_fiiiiiifiifif = _0x289557.asm.pt).apply(null, arguments);
  };
  var _0x56672b = _0x289557.dynCall_fiiiiiifiiiif = function () {
    return (_0x56672b = _0x289557.dynCall_fiiiiiifiiiif = _0x289557.asm.qt).apply(null, arguments);
  };
  var _0x29f281 = _0x289557.dynCall_iifiiiijii = function () {
    return (_0x29f281 = _0x289557.dynCall_iifiiiijii = _0x289557.asm.rt).apply(null, arguments);
  };
  var _0x3aa9f9 = _0x289557.dynCall_vifijii = function () {
    return (_0x3aa9f9 = _0x289557.dynCall_vifijii = _0x289557.asm.st).apply(null, arguments);
  };
  var _0x107d41 = _0x289557.dynCall_iiiifffiii = function () {
    return (_0x107d41 = _0x289557.dynCall_iiiifffiii = _0x289557.asm.tt).apply(null, arguments);
  };
  var _0x321fb2 = _0x289557.dynCall_iiiifffffi = function () {
    return (_0x321fb2 = _0x289557.dynCall_iiiifffffi = _0x289557.asm.ut).apply(null, arguments);
  };
  var _0x3c3515 = _0x289557.dynCall_viffiiiif = function () {
    return (_0x3c3515 = _0x289557.dynCall_viffiiiif = _0x289557.asm.vt).apply(null, arguments);
  };
  var _0x2a75de = _0x289557.dynCall_viffiifffffiii = function () {
    return (_0x2a75de = _0x289557.dynCall_viffiifffffiii = _0x289557.asm.wt).apply(null, arguments);
  };
  var _0x2c0f1d = _0x289557.dynCall_viffffiifffiiiiif = function () {
    return (_0x2c0f1d = _0x289557.dynCall_viffffiifffiiiiif = _0x289557.asm.xt).apply(null, arguments);
  };
  var _0xbe8b3e = _0x289557.dynCall_iiiifffffii = function () {
    return (_0xbe8b3e = _0x289557.dynCall_iiiifffffii = _0x289557.asm.yt).apply(null, arguments);
  };
  var _0x247f37 = _0x289557.dynCall_viiiiiiiiiiifii = function () {
    return (_0x247f37 = _0x289557.dynCall_viiiiiiiiiiifii = _0x289557.asm.zt).apply(null, arguments);
  };
  var _0x59a152 = _0x289557.dynCall_viff = function () {
    return (_0x59a152 = _0x289557.dynCall_viff = _0x289557.asm.At).apply(null, arguments);
  };
  var _0x36b9a3 = _0x289557.dynCall_iiiiifiiiiif = function () {
    return (_0x36b9a3 = _0x289557.dynCall_iiiiifiiiiif = _0x289557.asm.Bt).apply(null, arguments);
  };
  var _0x103336 = _0x289557.dynCall_viiifiiiii = function () {
    return (_0x103336 = _0x289557.dynCall_viiifiiiii = _0x289557.asm.Ct).apply(null, arguments);
  };
  var _0x4aaa85 = _0x289557.dynCall_viiiifiiiiif = function () {
    return (_0x4aaa85 = _0x289557.dynCall_viiiifiiiiif = _0x289557.asm.Dt).apply(null, arguments);
  };
  var _0x18be59 = _0x289557.dynCall_iifff = function () {
    return (_0x18be59 = _0x289557.dynCall_iifff = _0x289557.asm.Et).apply(null, arguments);
  };
  var _0x5513bc = _0x289557.dynCall_iif = function () {
    return (_0x5513bc = _0x289557.dynCall_iif = _0x289557.asm.Ft).apply(null, arguments);
  };
  var _0x47e94d = _0x289557.dynCall_viijijj = function () {
    return (_0x47e94d = _0x289557.dynCall_viijijj = _0x289557.asm.Gt).apply(null, arguments);
  };
  var _0x4bd9bd = _0x289557.dynCall_viijj = function () {
    return (_0x4bd9bd = _0x289557.dynCall_viijj = _0x289557.asm.Ht).apply(null, arguments);
  };
  var _0x1733a1 = _0x289557.dynCall_viiiij = function () {
    return (_0x1733a1 = _0x289557.dynCall_viiiij = _0x289557.asm.It).apply(null, arguments);
  };
  var _0x3a479e = _0x289557.dynCall_iiijji = function () {
    return (_0x3a479e = _0x289557.dynCall_iiijji = _0x289557.asm.Jt).apply(null, arguments);
  };
  var _0x4643ab = _0x289557.dynCall_ijjiiiii = function () {
    return (_0x4643ab = _0x289557.dynCall_ijjiiiii = _0x289557.asm.Kt).apply(null, arguments);
  };
  var _0x4fe7fc = _0x289557.dynCall_vidd = function () {
    return (_0x4fe7fc = _0x289557.dynCall_vidd = _0x289557.asm.Lt).apply(null, arguments);
  };
  var _0x449854 = _0x289557.dynCall_iiiiiifffiiifiii = function () {
    return (_0x449854 = _0x289557.dynCall_iiiiiifffiiifiii = _0x289557.asm.Mt).apply(null, arguments);
  };
  var _0x12c8e2 = _0x289557.dynCall_viid = function () {
    return (_0x12c8e2 = _0x289557.dynCall_viid = _0x289557.asm.Nt).apply(null, arguments);
  };
  var _0x3e3d66 = _0x289557.dynCall_viiif = function () {
    return (_0x3e3d66 = _0x289557.dynCall_viiif = _0x289557.asm.Ot).apply(null, arguments);
  };
  var _0x184257 = _0x289557.dynCall_fiiiif = function () {
    return (_0x184257 = _0x289557.dynCall_fiiiif = _0x289557.asm.Pt).apply(null, arguments);
  };
  var _0x46df4d = _0x289557.dynCall_iiiiiff = function () {
    return (_0x46df4d = _0x289557.dynCall_iiiiiff = _0x289557.asm.Qt).apply(null, arguments);
  };
  var _0x38cb0d = _0x289557.dynCall_vifff = function () {
    return (_0x38cb0d = _0x289557.dynCall_vifff = _0x289557.asm.Rt).apply(null, arguments);
  };
  var _0xc5099e = _0x289557.dynCall_viifff = function () {
    return (_0xc5099e = _0x289557.dynCall_viifff = _0x289557.asm.St).apply(null, arguments);
  };
  var _0x2ba173 = _0x289557.dynCall_vf = function () {
    return (_0x2ba173 = _0x289557.dynCall_vf = _0x289557.asm.Tt).apply(null, arguments);
  };
  var _0x2c5231 = _0x289557.dynCall_vffff = function () {
    return (_0x2c5231 = _0x289557.dynCall_vffff = _0x289557.asm.Ut).apply(null, arguments);
  };
  var _0x540b7b = _0x289557.dynCall_vff = function () {
    return (_0x540b7b = _0x289557.dynCall_vff = _0x289557.asm.Vt).apply(null, arguments);
  };
  var _0x4616b7 = _0x289557.dynCall_fff = function () {
    return (_0x4616b7 = _0x289557.dynCall_fff = _0x289557.asm.Wt).apply(null, arguments);
  };
  var _0x32452e = _0x289557.dynCall_f = function () {
    return (_0x32452e = _0x289557.dynCall_f = _0x289557.asm.Xt).apply(null, arguments);
  };
  var _0x19945d = _0x289557.dynCall_vfff = function () {
    return (_0x19945d = _0x289557.dynCall_vfff = _0x289557.asm.Yt).apply(null, arguments);
  };
  var _0x24f706 = _0x289557.dynCall_ff = function () {
    return (_0x24f706 = _0x289557.dynCall_ff = _0x289557.asm.Zt).apply(null, arguments);
  };
  var _0x408257 = _0x289557.dynCall_iiid = function () {
    return (_0x408257 = _0x289557.dynCall_iiid = _0x289557.asm._t).apply(null, arguments);
  };
  var _0x10d8bd = _0x289557.dynCall_fiif = function () {
    return (_0x10d8bd = _0x289557.dynCall_fiif = _0x289557.asm.$t).apply(null, arguments);
  };
  var _0x397ded = _0x289557.dynCall_iiiiiiffiiiiiiiiiffffiii = function () {
    return (_0x397ded = _0x289557.dynCall_iiiiiiffiiiiiiiiiffffiii = _0x289557.asm.au).apply(null, arguments);
  };
  var _0x232be0 = _0x289557.dynCall_viififi = function () {
    return (_0x232be0 = _0x289557.dynCall_viififi = _0x289557.asm.bu).apply(null, arguments);
  };
  var _0x47e9c5 = _0x289557.dynCall_viiiiiiiijiii = function () {
    return (_0x47e9c5 = _0x289557.dynCall_viiiiiiiijiii = _0x289557.asm.cu).apply(null, arguments);
  };
  function _0x5d2829(_0x342354, _0x1b5f91) {
    var _0x1563c3 = _0x51cfa0();
    try {
      return _0x21e974(_0x342354, _0x1b5f91);
    } catch (_0x2c8869) {
      _0x15d00c(_0x1563c3);
      if (_0x2c8869 !== _0x2c8869 + 0 && _0x2c8869 !== "longjmp") {
        throw _0x2c8869;
      }
      _0x52a98c(1, 0);
    }
  }
  function _0x3faa0c(_0xf33617, _0x5a912c, _0x3812aa) {
    var _0x394f8f = _0x51cfa0();
    try {
      return _0x5628a5(_0xf33617, _0x5a912c, _0x3812aa);
    } catch (_0x2f5c9b) {
      _0x15d00c(_0x394f8f);
      if (_0x2f5c9b !== _0x2f5c9b + 0 && _0x2f5c9b !== "longjmp") {
        throw _0x2f5c9b;
      }
      _0x52a98c(1, 0);
    }
  }
  function _0x4e7948(_0x120edc, _0x2209f4, _0x175a02, _0x18d47f) {
    var _0x412db7 = _0x51cfa0();
    try {
      _0x279c72(_0x120edc, _0x2209f4, _0x175a02, _0x18d47f);
    } catch (_0x233638) {
      _0x15d00c(_0x412db7);
      if (_0x233638 !== _0x233638 + 0 && _0x233638 !== "longjmp") {
        throw _0x233638;
      }
      _0x52a98c(1, 0);
    }
  }
  function _0x26a0ec(_0x832049, _0x5f3908, _0x160ce4, _0xf03465, _0x152ece, _0x135e11) {
    var _0x1ffc7f = _0x51cfa0();
    try {
      return _0x448b53(_0x832049, _0x5f3908, _0x160ce4, _0xf03465, _0x152ece, _0x135e11);
    } catch (_0x129e67) {
      _0x15d00c(_0x1ffc7f);
      if (_0x129e67 !== _0x129e67 + 0 && _0x129e67 !== "longjmp") {
        throw _0x129e67;
      }
      _0x52a98c(1, 0);
    }
  }
  function _0x10eedc(_0x4645c6, _0x29d257, _0xbb7419, _0x4456a1) {
    var _0x31f1a5 = _0x51cfa0();
    try {
      return _0x901ebd(_0x4645c6, _0x29d257, _0xbb7419, _0x4456a1);
    } catch (_0x182f78) {
      _0x15d00c(_0x31f1a5);
      if (_0x182f78 !== _0x182f78 + 0 && _0x182f78 !== "longjmp") {
        throw _0x182f78;
      }
      _0x52a98c(1, 0);
    }
  }
  function _0x4aabb6(_0x874f8, _0x1054fa, _0x5c4de5, _0x5791b4, _0x198b4f) {
    var _0xa6ee31 = _0x51cfa0();
    try {
      _0x502592(_0x874f8, _0x1054fa, _0x5c4de5, _0x5791b4, _0x198b4f);
    } catch (_0x3323c9) {
      _0x15d00c(_0xa6ee31);
      if (_0x3323c9 !== _0x3323c9 + 0 && _0x3323c9 !== "longjmp") {
        throw _0x3323c9;
      }
      _0x52a98c(1, 0);
    }
  }
  function _0x237545(_0x270884, _0x2d4ed7, _0x1a04a5, _0x5f9d35, _0x15cb79) {
    var _0x1974c1 = _0x51cfa0();
    try {
      return _0x3acc34(_0x270884, _0x2d4ed7, _0x1a04a5, _0x5f9d35, _0x15cb79);
    } catch (_0x38dbc3) {
      _0x15d00c(_0x1974c1);
      if (_0x38dbc3 !== _0x38dbc3 + 0 && _0x38dbc3 !== "longjmp") {
        throw _0x38dbc3;
      }
      _0x52a98c(1, 0);
    }
  }
  function _0x30a57e(_0x22daab, _0x479605, _0x190219, _0xb4439e) {
    var _0x389934 = _0x51cfa0();
    try {
      return _0x1066bf(_0x22daab, _0x479605, _0x190219, _0xb4439e);
    } catch (_0x5abeda) {
      _0x15d00c(_0x389934);
      if (_0x5abeda !== _0x5abeda + 0 && _0x5abeda !== "longjmp") {
        throw _0x5abeda;
      }
      _0x52a98c(1, 0);
    }
  }
  function _0x468aa3(_0x37f944, _0x1c4b90, _0x452c42, _0x307a01) {
    var _0x1364ba = _0x51cfa0();
    try {
      return _0x221abc(_0x37f944, _0x1c4b90, _0x452c42, _0x307a01);
    } catch (_0x414954) {
      _0x15d00c(_0x1364ba);
      if (_0x414954 !== _0x414954 + 0 && _0x414954 !== "longjmp") {
        throw _0x414954;
      }
      _0x52a98c(1, 0);
    }
  }
  function _0x70c9eb(_0x5da647, _0x38f18c, _0x4d5914, _0x27729d) {
    var _0x461015 = _0x51cfa0();
    try {
      _0x283301(_0x5da647, _0x38f18c, _0x4d5914, _0x27729d);
    } catch (_0x5d77a3) {
      _0x15d00c(_0x461015);
      if (_0x5d77a3 !== _0x5d77a3 + 0 && _0x5d77a3 !== "longjmp") {
        throw _0x5d77a3;
      }
      _0x52a98c(1, 0);
    }
  }
  function _0x40fc19(_0x27a20a, _0x2fddc1, _0x5eca68) {
    var _0x2ab564 = _0x51cfa0();
    try {
      _0x36c69d(_0x27a20a, _0x2fddc1, _0x5eca68);
    } catch (_0x4ef5bc) {
      _0x15d00c(_0x2ab564);
      if (_0x4ef5bc !== _0x4ef5bc + 0 && _0x4ef5bc !== "longjmp") {
        throw _0x4ef5bc;
      }
      _0x52a98c(1, 0);
    }
  }
  function _0x2e3905(_0xbeefd4, _0x1e7019) {
    var _0x469241 = _0x51cfa0();
    try {
      _0x25d2da(_0xbeefd4, _0x1e7019);
    } catch (_0x573aef) {
      _0x15d00c(_0x469241);
      if (_0x573aef !== _0x573aef + 0 && _0x573aef !== "longjmp") {
        throw _0x573aef;
      }
      _0x52a98c(1, 0);
    }
  }
  function _0x5cebc8(_0x41a4d5) {
    var _0x54be5b = _0x51cfa0();
    try {
      _0x41b439(_0x41a4d5);
    } catch (_0x85f1da) {
      _0x15d00c(_0x54be5b);
      if (_0x85f1da !== _0x85f1da + 0 && _0x85f1da !== "longjmp") {
        throw _0x85f1da;
      }
      _0x52a98c(1, 0);
    }
  }
  function _0x21d48c(_0x2a578b) {
    var _0x1e8dec = _0x51cfa0();
    try {
      return _0x3d0c27(_0x2a578b);
    } catch (_0x58e6d4) {
      _0x15d00c(_0x1e8dec);
      if (_0x58e6d4 !== _0x58e6d4 + 0 && _0x58e6d4 !== "longjmp") {
        throw _0x58e6d4;
      }
      _0x52a98c(1, 0);
    }
  }
  function _0x35588e(_0x3527e3, _0x5d10cf, _0x5c7469, _0x3d9d91, _0x4ca4f7, _0xb56aa6, _0x39a712, _0x9c0e42) {
    var _0xb06ffc = _0x51cfa0();
    try {
      return _0x43f042(_0x3527e3, _0x5d10cf, _0x5c7469, _0x3d9d91, _0x4ca4f7, _0xb56aa6, _0x39a712, _0x9c0e42);
    } catch (_0x57a1c0) {
      _0x15d00c(_0xb06ffc);
      if (_0x57a1c0 !== _0x57a1c0 + 0 && _0x57a1c0 !== "longjmp") {
        throw _0x57a1c0;
      }
      _0x52a98c(1, 0);
    }
  }
  function _0x364689(_0x18c599, _0x16c4fd, _0x3b9500, _0x32e5bc, _0x35c1f6, _0x4746e7) {
    var _0x1feeb3 = _0x51cfa0();
    try {
      _0x2c0648(_0x18c599, _0x16c4fd, _0x3b9500, _0x32e5bc, _0x35c1f6, _0x4746e7);
    } catch (_0x58919c) {
      _0x15d00c(_0x1feeb3);
      if (_0x58919c !== _0x58919c + 0 && _0x58919c !== "longjmp") {
        throw _0x58919c;
      }
      _0x52a98c(1, 0);
    }
  }
  function _0x26fc11(_0x14d9eb, _0x19c317, _0x24d193, _0x47c1d0, _0x3c991f, _0x50ac12, _0x21b436) {
    var _0x3979f6 = _0x51cfa0();
    try {
      return _0x164007(_0x14d9eb, _0x19c317, _0x24d193, _0x47c1d0, _0x3c991f, _0x50ac12, _0x21b436);
    } catch (_0x223b83) {
      _0x15d00c(_0x3979f6);
      if (_0x223b83 !== _0x223b83 + 0 && _0x223b83 !== "longjmp") {
        throw _0x223b83;
      }
      _0x52a98c(1, 0);
    }
  }
  function _0x377267(_0x15f1c8, _0x5752d2, _0x32beb3, _0x28c3d7, _0xc3717b, _0x49b271, _0xcae4ad, _0x3b1d2d) {
    var _0x13bece = _0x51cfa0();
    try {
      _0x2f6e15(_0x15f1c8, _0x5752d2, _0x32beb3, _0x28c3d7, _0xc3717b, _0x49b271, _0xcae4ad, _0x3b1d2d);
    } catch (_0x14b40c) {
      _0x15d00c(_0x13bece);
      if (_0x14b40c !== _0x14b40c + 0 && _0x14b40c !== "longjmp") {
        throw _0x14b40c;
      }
      _0x52a98c(1, 0);
    }
  }
  function _0x5e6626(_0x49e2d9, _0x24bff2, _0x2abd0b, _0x8ce3d6, _0xfbea62, _0x35a379, _0x256d38, _0x594557, _0x256805) {
    var _0x334711 = _0x51cfa0();
    try {
      return _0x18be5d(_0x49e2d9, _0x24bff2, _0x2abd0b, _0x8ce3d6, _0xfbea62, _0x35a379, _0x256d38, _0x594557, _0x256805);
    } catch (_0x12bfa5) {
      _0x15d00c(_0x334711);
      if (_0x12bfa5 !== _0x12bfa5 + 0 && _0x12bfa5 !== "longjmp") {
        throw _0x12bfa5;
      }
      _0x52a98c(1, 0);
    }
  }
  function _0x387e9b(_0x1e1192, _0x51b521, _0x2e4205, _0x2ba2cf, _0x2fb04b, _0x1e2d1c, _0x2bd864) {
    var _0x21c78f = _0x51cfa0();
    try {
      _0x32babf(_0x1e1192, _0x51b521, _0x2e4205, _0x2ba2cf, _0x2fb04b, _0x1e2d1c, _0x2bd864);
    } catch (_0x35794d) {
      _0x15d00c(_0x21c78f);
      if (_0x35794d !== _0x35794d + 0 && _0x35794d !== "longjmp") {
        throw _0x35794d;
      }
      _0x52a98c(1, 0);
    }
  }
  function _0x4e02bf(_0x3c6ac5, _0x4dc34f, _0x3311f6) {
    var _0x53938d = _0x51cfa0();
    try {
      return _0x4ae77f(_0x3c6ac5, _0x4dc34f, _0x3311f6);
    } catch (_0xac276e) {
      _0x15d00c(_0x53938d);
      if (_0xac276e !== _0xac276e + 0 && _0xac276e !== "longjmp") {
        throw _0xac276e;
      }
      _0x52a98c(1, 0);
    }
  }
  function _0x2692c7(_0x2cf3c4, _0x364147, _0xbdb96a, _0x434f98, _0x5c22d2) {
    var _0x405136 = _0x51cfa0();
    try {
      _0x45c010(_0x2cf3c4, _0x364147, _0xbdb96a, _0x434f98, _0x5c22d2);
    } catch (_0x36bc75) {
      _0x15d00c(_0x405136);
      if (_0x36bc75 !== _0x36bc75 + 0 && _0x36bc75 !== "longjmp") {
        throw _0x36bc75;
      }
      _0x52a98c(1, 0);
    }
  }
  function _0x31e315(_0x2ac774, _0x54cdcc, _0x381dfb, _0x17cb06, _0x55f45b, _0x57169c, _0x26d1b3, _0x59d4c1, _0x3a5b16, _0x322b06) {
    var _0x22a503 = _0x51cfa0();
    try {
      _0x54ac1a(_0x2ac774, _0x54cdcc, _0x381dfb, _0x17cb06, _0x55f45b, _0x57169c, _0x26d1b3, _0x59d4c1, _0x3a5b16, _0x322b06);
    } catch (_0x6d2ac) {
      _0x15d00c(_0x22a503);
      if (_0x6d2ac !== _0x6d2ac + 0 && _0x6d2ac !== "longjmp") {
        throw _0x6d2ac;
      }
      _0x52a98c(1, 0);
    }
  }
  function _0x55ef6c(_0x28398e, _0x515704, _0x400540, _0x4bc959, _0x168291) {
    var _0x29cd86 = _0x51cfa0();
    try {
      _0x1722bb(_0x28398e, _0x515704, _0x400540, _0x4bc959, _0x168291);
    } catch (_0x23b0d4) {
      _0x15d00c(_0x29cd86);
      if (_0x23b0d4 !== _0x23b0d4 + 0 && _0x23b0d4 !== "longjmp") {
        throw _0x23b0d4;
      }
      _0x52a98c(1, 0);
    }
  }
  function _0x1e6f80(_0x46a006, _0x2411df, _0x238e1c, _0x5e1e9d, _0x4ff745, _0x271310, _0xaf9f05, _0x55137d, _0x29f549, _0x2ac267, _0x267d15) {
    var _0x574b9e = _0x51cfa0();
    try {
      _0x435b00(_0x46a006, _0x2411df, _0x238e1c, _0x5e1e9d, _0x4ff745, _0x271310, _0xaf9f05, _0x55137d, _0x29f549, _0x2ac267, _0x267d15);
    } catch (_0x4a6977) {
      _0x15d00c(_0x574b9e);
      if (_0x4a6977 !== _0x4a6977 + 0 && _0x4a6977 !== "longjmp") {
        throw _0x4a6977;
      }
      _0x52a98c(1, 0);
    }
  }
  function _0x1f262f(_0x2f713d, _0x4feccf, _0x10fb3d, _0x405d87) {
    var _0x1eb107 = _0x51cfa0();
    try {
      _0x21f85(_0x2f713d, _0x4feccf, _0x10fb3d, _0x405d87);
    } catch (_0x412458) {
      _0x15d00c(_0x1eb107);
      if (_0x412458 !== _0x412458 + 0 && _0x412458 !== "longjmp") {
        throw _0x412458;
      }
      _0x52a98c(1, 0);
    }
  }
  function _0x1b9a59(_0xd233dc, _0x87153f, _0x7fbd34, _0x39771f, _0x3c0ddd, _0x9e10c3, _0x4ac957, _0x7b7325, _0xd1a389) {
    var _0x25e5e2 = _0x51cfa0();
    try {
      _0x8676a6(_0xd233dc, _0x87153f, _0x7fbd34, _0x39771f, _0x3c0ddd, _0x9e10c3, _0x4ac957, _0x7b7325, _0xd1a389);
    } catch (_0x1beea3) {
      _0x15d00c(_0x25e5e2);
      if (_0x1beea3 !== _0x1beea3 + 0 && _0x1beea3 !== "longjmp") {
        throw _0x1beea3;
      }
      _0x52a98c(1, 0);
    }
  }
  function _0x160847(_0x566616, _0x36fcf4, _0x2515aa, _0x94f4bc, _0x1f6621, _0x1655e3, _0x35b2d4, _0x430a77, _0xba340a, _0x2be5fb) {
    var _0x54e4e3 = _0x51cfa0();
    try {
      return _0x3968de(_0x566616, _0x36fcf4, _0x2515aa, _0x94f4bc, _0x1f6621, _0x1655e3, _0x35b2d4, _0x430a77, _0xba340a, _0x2be5fb);
    } catch (_0x726a39) {
      _0x15d00c(_0x54e4e3);
      if (_0x726a39 !== _0x726a39 + 0 && _0x726a39 !== "longjmp") {
        throw _0x726a39;
      }
      _0x52a98c(1, 0);
    }
  }
  function _0x2cac6a(_0x2436a1, _0x152ccc, _0xe94a65, _0x25ed8b, _0x4373a1) {
    var _0x52827c = _0x51cfa0();
    try {
      return _0x2dce3a(_0x2436a1, _0x152ccc, _0xe94a65, _0x25ed8b, _0x4373a1);
    } catch (_0x4f7edd) {
      _0x15d00c(_0x52827c);
      if (_0x4f7edd !== _0x4f7edd + 0 && _0x4f7edd !== "longjmp") {
        throw _0x4f7edd;
      }
      _0x52a98c(1, 0);
    }
  }
  function _0xb18143(_0x59dffa, _0x318a98, _0x1c349c, _0xc50d67, _0x103c7a) {
    var _0x370cdb = _0x51cfa0();
    try {
      return _0x3f8684(_0x59dffa, _0x318a98, _0x1c349c, _0xc50d67, _0x103c7a);
    } catch (_0x59469d) {
      _0x15d00c(_0x370cdb);
      if (_0x59469d !== _0x59469d + 0 && _0x59469d !== "longjmp") {
        throw _0x59469d;
      }
      _0x52a98c(1, 0);
    }
  }
  function _0x513409(_0x5240a5, _0x354ac2, _0x21acff) {
    var _0x43e0dd = _0x51cfa0();
    try {
      return _0x19fdac(_0x5240a5, _0x354ac2, _0x21acff);
    } catch (_0x4485be) {
      _0x15d00c(_0x43e0dd);
      if (_0x4485be !== _0x4485be + 0 && _0x4485be !== "longjmp") {
        throw _0x4485be;
      }
      _0x52a98c(1, 0);
    }
  }
  function _0x463a1a(_0x48d35b, _0x23291b, _0x145f1f, _0x51584f, _0x2b9957) {
    var _0x4e560a = _0x51cfa0();
    try {
      return _0x192a3d(_0x48d35b, _0x23291b, _0x145f1f, _0x51584f, _0x2b9957);
    } catch (_0x1a7016) {
      _0x15d00c(_0x4e560a);
      if (_0x1a7016 !== _0x1a7016 + 0 && _0x1a7016 !== "longjmp") {
        throw _0x1a7016;
      }
      _0x52a98c(1, 0);
    }
  }
  function _0x1d7050(_0x5393d4, _0x4dd61c, _0x274ac8, _0x5b77ed, _0x86f97f) {
    var _0x816e7c = _0x51cfa0();
    try {
      return _0x552628(_0x5393d4, _0x4dd61c, _0x274ac8, _0x5b77ed, _0x86f97f);
    } catch (_0x3b8686) {
      _0x15d00c(_0x816e7c);
      if (_0x3b8686 !== _0x3b8686 + 0 && _0x3b8686 !== "longjmp") {
        throw _0x3b8686;
      }
      _0x52a98c(1, 0);
    }
  }
  function _0x1f207e(_0x2801e8, _0xb5c8d9, _0x2c9415, _0x131da3) {
    var _0x54fbea = _0x51cfa0();
    try {
      _0x11fb33(_0x2801e8, _0xb5c8d9, _0x2c9415, _0x131da3);
    } catch (_0x2cca07) {
      _0x15d00c(_0x54fbea);
      if (_0x2cca07 !== _0x2cca07 + 0 && _0x2cca07 !== "longjmp") {
        throw _0x2cca07;
      }
      _0x52a98c(1, 0);
    }
  }
  function _0x3aa0a9(_0x1a7f3a, _0x2af1f3, _0x1cd1d4, _0x70051f, _0x1fd7f7) {
    var _0x58b304 = _0x51cfa0();
    try {
      return _0x307c4c(_0x1a7f3a, _0x2af1f3, _0x1cd1d4, _0x70051f, _0x1fd7f7);
    } catch (_0x1ebcfd) {
      _0x15d00c(_0x58b304);
      if (_0x1ebcfd !== _0x1ebcfd + 0 && _0x1ebcfd !== "longjmp") {
        throw _0x1ebcfd;
      }
      _0x52a98c(1, 0);
    }
  }
  function _0x3ff671(_0x559bfe, _0x1a28d1, _0x462372, _0x37eab9, _0x44e147, _0x27a884, _0x7084b9, _0x37ab15, _0x24e2c2, _0x3e57e3, _0x431251, _0x1cf45b, _0x284cfc, _0x50d963) {
    var _0x1e022b = _0x51cfa0();
    try {
      _0x1b32d7(_0x559bfe, _0x1a28d1, _0x462372, _0x37eab9, _0x44e147, _0x27a884, _0x7084b9, _0x37ab15, _0x24e2c2, _0x3e57e3, _0x431251, _0x1cf45b, _0x284cfc, _0x50d963);
    } catch (_0x5e1fe4) {
      _0x15d00c(_0x1e022b);
      if (_0x5e1fe4 !== _0x5e1fe4 + 0 && _0x5e1fe4 !== "longjmp") {
        throw _0x5e1fe4;
      }
      _0x52a98c(1, 0);
    }
  }
  function _0xe4df1a(_0x8e8234, _0x23fab9, _0x48b214, _0x59b645, _0x371e42, _0x346f45, _0x217ebb, _0x438448, _0x2eeac5, _0x4b5721, _0x305fa5, _0x93110c, _0x157655, _0x367c38) {
    var _0x28fb51 = _0x51cfa0();
    try {
      _0x3aee50(_0x8e8234, _0x23fab9, _0x48b214, _0x59b645, _0x371e42, _0x346f45, _0x217ebb, _0x438448, _0x2eeac5, _0x4b5721, _0x305fa5, _0x93110c, _0x157655, _0x367c38);
    } catch (_0x465f37) {
      _0x15d00c(_0x28fb51);
      if (_0x465f37 !== _0x465f37 + 0 && _0x465f37 !== "longjmp") {
        throw _0x465f37;
      }
      _0x52a98c(1, 0);
    }
  }
  function _0x4411c7(_0x2b5561, _0x44ce8e, _0xdbdf5e, _0x30731e, _0x1b71be) {
    var _0x249657 = _0x51cfa0();
    try {
      _0x3da1d3(_0x2b5561, _0x44ce8e, _0xdbdf5e, _0x30731e, _0x1b71be);
    } catch (_0xb81952) {
      _0x15d00c(_0x249657);
      if (_0xb81952 !== _0xb81952 + 0 && _0xb81952 !== "longjmp") {
        throw _0xb81952;
      }
      _0x52a98c(1, 0);
    }
  }
  function _0x365354(_0xf95a05, _0x2486a8, _0x43acff, _0x1a15f1, _0x473dff) {
    var _0x3188aa = _0x51cfa0();
    try {
      return _0x4f09c3(_0xf95a05, _0x2486a8, _0x43acff, _0x1a15f1, _0x473dff);
    } catch (_0x3a4671) {
      _0x15d00c(_0x3188aa);
      if (_0x3a4671 !== _0x3a4671 + 0 && _0x3a4671 !== "longjmp") {
        throw _0x3a4671;
      }
      _0x52a98c(1, 0);
    }
  }
  function _0x11fbae(_0x39e01e, _0x31ee6e, _0x4f9907, _0x5cc2ce, _0x358dbe, _0x55b4e1) {
    var _0x187a68 = _0x51cfa0();
    try {
      return _0x4e9f8f(_0x39e01e, _0x31ee6e, _0x4f9907, _0x5cc2ce, _0x358dbe, _0x55b4e1);
    } catch (_0x2c6c8b) {
      _0x15d00c(_0x187a68);
      if (_0x2c6c8b !== _0x2c6c8b + 0 && _0x2c6c8b !== "longjmp") {
        throw _0x2c6c8b;
      }
      _0x52a98c(1, 0);
    }
  }
  function _0x4f74c3(_0x4cf6e7, _0x1b269d, _0x3c48c6, _0x773f30, _0x87df59, _0x5d4da8, _0x73cf23) {
    var _0xdd3a45 = _0x51cfa0();
    try {
      return _0x51afaf(_0x4cf6e7, _0x1b269d, _0x3c48c6, _0x773f30, _0x87df59, _0x5d4da8, _0x73cf23);
    } catch (_0x40c61d) {
      _0x15d00c(_0xdd3a45);
      if (_0x40c61d !== _0x40c61d + 0 && _0x40c61d !== "longjmp") {
        throw _0x40c61d;
      }
      _0x52a98c(1, 0);
    }
  }
  function _0x3edbb4(_0x37cd49, _0x587c05, _0x3945da, _0x2b04de, _0x1ced43, _0x5d3a7c) {
    var _0x58d1fe = _0x51cfa0();
    try {
      _0x499b6e(_0x37cd49, _0x587c05, _0x3945da, _0x2b04de, _0x1ced43, _0x5d3a7c);
    } catch (_0x5b98da) {
      _0x15d00c(_0x58d1fe);
      if (_0x5b98da !== _0x5b98da + 0 && _0x5b98da !== "longjmp") {
        throw _0x5b98da;
      }
      _0x52a98c(1, 0);
    }
  }
  function _0x20991a(_0x5219f3, _0xcbe64d, _0x402e40, _0x525a03) {
    var _0x3f1454 = _0x51cfa0();
    try {
      return _0x4b984d(_0x5219f3, _0xcbe64d, _0x402e40, _0x525a03);
    } catch (_0x12c7bb) {
      _0x15d00c(_0x3f1454);
      if (_0x12c7bb !== _0x12c7bb + 0 && _0x12c7bb !== "longjmp") {
        throw _0x12c7bb;
      }
      _0x52a98c(1, 0);
    }
  }
  function _0x10c885(_0x4819f1, _0xee57eb, _0x3050e7, _0x1dc4bb) {
    var _0x515a44 = _0x51cfa0();
    try {
      return _0x5ba25d(_0x4819f1, _0xee57eb, _0x3050e7, _0x1dc4bb);
    } catch (_0x233a30) {
      _0x15d00c(_0x515a44);
      if (_0x233a30 !== _0x233a30 + 0 && _0x233a30 !== "longjmp") {
        throw _0x233a30;
      }
      _0x52a98c(1, 0);
    }
  }
  function _0x3c6fb9(_0x55b0c9, _0x21ee11, _0x77ad02, _0x525a22) {
    var _0x15c09b = _0x51cfa0();
    try {
      return _0x170a24(_0x55b0c9, _0x21ee11, _0x77ad02, _0x525a22);
    } catch (_0x42a5ee) {
      _0x15d00c(_0x15c09b);
      if (_0x42a5ee !== _0x42a5ee + 0 && _0x42a5ee !== "longjmp") {
        throw _0x42a5ee;
      }
      _0x52a98c(1, 0);
    }
  }
  function _0x229571(_0x52b5ff, _0x389444, _0x20f1ab, _0x4966c3) {
    var _0xc9020 = _0x51cfa0();
    try {
      return _0x2bc0f0(_0x52b5ff, _0x389444, _0x20f1ab, _0x4966c3);
    } catch (_0x20025d) {
      _0x15d00c(_0xc9020);
      if (_0x20025d !== _0x20025d + 0 && _0x20025d !== "longjmp") {
        throw _0x20025d;
      }
      _0x52a98c(1, 0);
    }
  }
  function _0xcd6d87(_0x216f62, _0x56e9db, _0x45f4e3, _0x101fa4, _0x39e88, _0x5921f6, _0x4e28e9, _0x2b1807, _0x476b5d, _0x5c4877) {
    var _0x101f44 = _0x51cfa0();
    try {
      _0x4cac7b(_0x216f62, _0x56e9db, _0x45f4e3, _0x101fa4, _0x39e88, _0x5921f6, _0x4e28e9, _0x2b1807, _0x476b5d, _0x5c4877);
    } catch (_0x52d9d4) {
      _0x15d00c(_0x101f44);
      if (_0x52d9d4 !== _0x52d9d4 + 0 && _0x52d9d4 !== "longjmp") {
        throw _0x52d9d4;
      }
      _0x52a98c(1, 0);
    }
  }
  function _0xc80d53(_0x14d877, _0x489e1a, _0x5a35c8) {
    var _0x566f57 = _0x51cfa0();
    try {
      return _0x41d4a3(_0x14d877, _0x489e1a, _0x5a35c8);
    } catch (_0x201533) {
      _0x15d00c(_0x566f57);
      if (_0x201533 !== _0x201533 + 0 && _0x201533 !== "longjmp") {
        throw _0x201533;
      }
      _0x52a98c(1, 0);
    }
  }
  function _0xdf3657(_0x2c4554, _0x2d3801, _0x2a9f27, _0x10889e, _0x4cfcac, _0x46aeca, _0x433795, _0x3fa609) {
    var _0x2ca291 = _0x51cfa0();
    try {
      return _0x4bb03b(_0x2c4554, _0x2d3801, _0x2a9f27, _0x10889e, _0x4cfcac, _0x46aeca, _0x433795, _0x3fa609);
    } catch (_0xc01972) {
      _0x15d00c(_0x2ca291);
      if (_0xc01972 !== _0xc01972 + 0 && _0xc01972 !== "longjmp") {
        throw _0xc01972;
      }
      _0x52a98c(1, 0);
    }
  }
  function _0x219264(_0x5ecab6, _0x15683d, _0x1e22ef, _0x11c4a4, _0x3ef1e8, _0x58d384) {
    var _0x374398 = _0x51cfa0();
    try {
      _0x28a3eb(_0x5ecab6, _0x15683d, _0x1e22ef, _0x11c4a4, _0x3ef1e8, _0x58d384);
    } catch (_0x81ef34) {
      _0x15d00c(_0x374398);
      if (_0x81ef34 !== _0x81ef34 + 0 && _0x81ef34 !== "longjmp") {
        throw _0x81ef34;
      }
      _0x52a98c(1, 0);
    }
  }
  function _0x2bab80(_0x2a1106, _0x18acd5, _0x5c1a7a) {
    var _0x11cf1a = _0x51cfa0();
    try {
      return _0x5aa9d7(_0x2a1106, _0x18acd5, _0x5c1a7a);
    } catch (_0x2a41a9) {
      _0x15d00c(_0x11cf1a);
      if (_0x2a41a9 !== _0x2a41a9 + 0 && _0x2a41a9 !== "longjmp") {
        throw _0x2a41a9;
      }
      _0x52a98c(1, 0);
    }
  }
  function _0x2ef470(_0x4957cd, _0x54ef6e, _0x28e0c4, _0x1dbcdc, _0x4e86c1, _0x5892d6, _0x2a1b63, _0x344336, _0x4bcc5d, _0x34535, _0x3f6721, _0x4e12a3, _0xc13e8) {
    var _0x5e51ad = _0x51cfa0();
    try {
      _0x2838be(_0x4957cd, _0x54ef6e, _0x28e0c4, _0x1dbcdc, _0x4e86c1, _0x5892d6, _0x2a1b63, _0x344336, _0x4bcc5d, _0x34535, _0x3f6721, _0x4e12a3, _0xc13e8);
    } catch (_0x38f272) {
      _0x15d00c(_0x5e51ad);
      if (_0x38f272 !== _0x38f272 + 0 && _0x38f272 !== "longjmp") {
        throw _0x38f272;
      }
      _0x52a98c(1, 0);
    }
  }
  function _0x450e47(_0x46dfbf, _0x57724e, _0x5d7137, _0x2e514d, _0x197877, _0x6ecd51, _0x558e02) {
    var _0x2530bb = _0x51cfa0();
    try {
      _0x447952(_0x46dfbf, _0x57724e, _0x5d7137, _0x2e514d, _0x197877, _0x6ecd51, _0x558e02);
    } catch (_0x3f94b5) {
      _0x15d00c(_0x2530bb);
      if (_0x3f94b5 !== _0x3f94b5 + 0 && _0x3f94b5 !== "longjmp") {
        throw _0x3f94b5;
      }
      _0x52a98c(1, 0);
    }
  }
  function _0x3f9300(_0x578416, _0x2ee76b, _0x54fc5a, _0x54ad39, _0x4377d5, _0x1ad9f6, _0x5cf16c, _0x291150, _0x185fdf, _0x51972f, _0x556de3, _0x1eecc8) {
    var _0x529adf = _0x51cfa0();
    try {
      _0x4f641e(_0x578416, _0x2ee76b, _0x54fc5a, _0x54ad39, _0x4377d5, _0x1ad9f6, _0x5cf16c, _0x291150, _0x185fdf, _0x51972f, _0x556de3, _0x1eecc8);
    } catch (_0x1cd9b8) {
      _0x15d00c(_0x529adf);
      if (_0x1cd9b8 !== _0x1cd9b8 + 0 && _0x1cd9b8 !== "longjmp") {
        throw _0x1cd9b8;
      }
      _0x52a98c(1, 0);
    }
  }
  function _0x1bc6bc(_0x2f851c, _0x61a2e6, _0x560889, _0x4bb828, _0x4c7603, _0x242685, _0x4111dd, _0xd572b6, _0xace104, _0x37ad46, _0x1882de, _0x2dab1b, _0x2568c3) {
    var _0x150b7e = _0x51cfa0();
    try {
      return _0x541918(_0x2f851c, _0x61a2e6, _0x560889, _0x4bb828, _0x4c7603, _0x242685, _0x4111dd, _0xd572b6, _0xace104, _0x37ad46, _0x1882de, _0x2dab1b, _0x2568c3);
    } catch (_0x5d1a7b) {
      _0x15d00c(_0x150b7e);
      if (_0x5d1a7b !== _0x5d1a7b + 0 && _0x5d1a7b !== "longjmp") {
        throw _0x5d1a7b;
      }
      _0x52a98c(1, 0);
    }
  }
  function _0x22b6ba(_0x1700e8, _0x55a537, _0x47d60c, _0x3f1be7, _0x184c96, _0x2bf0b8, _0x4b3819, _0x39ebb5, _0x560e4f, _0x17e686, _0x4f1333, _0x43bd49, _0x491bbd, _0x295ccd) {
    var _0x28c882 = _0x51cfa0();
    try {
      _0x3924a2(_0x1700e8, _0x55a537, _0x47d60c, _0x3f1be7, _0x184c96, _0x2bf0b8, _0x4b3819, _0x39ebb5, _0x560e4f, _0x17e686, _0x4f1333, _0x43bd49, _0x491bbd, _0x295ccd);
    } catch (_0x2dd61d) {
      _0x15d00c(_0x28c882);
      if (_0x2dd61d !== _0x2dd61d + 0 && _0x2dd61d !== "longjmp") {
        throw _0x2dd61d;
      }
      _0x52a98c(1, 0);
    }
  }
  function _0x99aeb6(_0x28a397, _0x1aff13) {
    var _0x51df29 = _0x51cfa0();
    try {
      return _0x302d9c(_0x28a397, _0x1aff13);
    } catch (_0x3715c1) {
      _0x15d00c(_0x51df29);
      if (_0x3715c1 !== _0x3715c1 + 0 && _0x3715c1 !== "longjmp") {
        throw _0x3715c1;
      }
      _0x52a98c(1, 0);
    }
  }
  function _0x235e1e(_0x3178ae, _0x2db704, _0x57f1d4, _0x215696, _0x36832f) {
    var _0x1132c9 = _0x51cfa0();
    try {
      return _0x582c0f(_0x3178ae, _0x2db704, _0x57f1d4, _0x215696, _0x36832f);
    } catch (_0x4c752b) {
      _0x15d00c(_0x1132c9);
      if (_0x4c752b !== _0x4c752b + 0 && _0x4c752b !== "longjmp") {
        throw _0x4c752b;
      }
      _0x52a98c(1, 0);
    }
  }
  function _0x4af7e8(_0xdb48c5, _0x4ae918, _0x16d80a, _0x3336c0, _0x232e0a, _0xd5fd9d, _0xcfde4b, _0x29ea7f, _0xb779ef, _0x551b92, _0x1a4f0b) {
    var _0x18bf37 = _0x51cfa0();
    try {
      return _0x59a647(_0xdb48c5, _0x4ae918, _0x16d80a, _0x3336c0, _0x232e0a, _0xd5fd9d, _0xcfde4b, _0x29ea7f, _0xb779ef, _0x551b92, _0x1a4f0b);
    } catch (_0x17b4de) {
      _0x15d00c(_0x18bf37);
      if (_0x17b4de !== _0x17b4de + 0 && _0x17b4de !== "longjmp") {
        throw _0x17b4de;
      }
      _0x52a98c(1, 0);
    }
  }
  function _0x4f9c30(_0x38dd12, _0x3cc088, _0x1f834b, _0x4a1583, _0x177321, _0x1f8535, _0x3cf9f3) {
    var _0x404c71 = _0x51cfa0();
    try {
      return _0x2b7084(_0x38dd12, _0x3cc088, _0x1f834b, _0x4a1583, _0x177321, _0x1f8535, _0x3cf9f3);
    } catch (_0x5edf0f) {
      _0x15d00c(_0x404c71);
      if (_0x5edf0f !== _0x5edf0f + 0 && _0x5edf0f !== "longjmp") {
        throw _0x5edf0f;
      }
      _0x52a98c(1, 0);
    }
  }
  function _0x280d9b(_0x1f5e7b, _0x4cdedc, _0x58f818, _0xe73810, _0x36f9e4, _0x2bf7a3, _0xdbc565) {
    var _0x542706 = _0x51cfa0();
    try {
      return _0x354d9b(_0x1f5e7b, _0x4cdedc, _0x58f818, _0xe73810, _0x36f9e4, _0x2bf7a3, _0xdbc565);
    } catch (_0x48b203) {
      _0x15d00c(_0x542706);
      if (_0x48b203 !== _0x48b203 + 0 && _0x48b203 !== "longjmp") {
        throw _0x48b203;
      }
      _0x52a98c(1, 0);
    }
  }
  function _0x243c7a(_0x2d4f12, _0x538b7a, _0x1b1296, _0x20e660) {
    var _0x43269c = _0x51cfa0();
    try {
      _0x4fe7fc(_0x2d4f12, _0x538b7a, _0x1b1296, _0x20e660);
    } catch (_0x21b140) {
      _0x15d00c(_0x43269c);
      if (_0x21b140 !== _0x21b140 + 0 && _0x21b140 !== "longjmp") {
        throw _0x21b140;
      }
      _0x52a98c(1, 0);
    }
  }
  function _0x3c7d18(_0x5e6ce0, _0x18e13f, _0x5f2f2d, _0x447d15, _0x33ef7d) {
    var _0x2501b7 = _0x51cfa0();
    try {
      return _0x39431a(_0x5e6ce0, _0x18e13f, _0x5f2f2d, _0x447d15, _0x33ef7d);
    } catch (_0xd3fb12) {
      _0x15d00c(_0x2501b7);
      if (_0xd3fb12 !== _0xd3fb12 + 0 && _0xd3fb12 !== "longjmp") {
        throw _0xd3fb12;
      }
      _0x52a98c(1, 0);
    }
  }
  function _0x504f59(_0x19f390, _0x9d137a, _0x50b0a9, _0x252d27, _0x3eb504) {
    var _0x1c23e6 = _0x51cfa0();
    try {
      return _0x175c0b(_0x19f390, _0x9d137a, _0x50b0a9, _0x252d27, _0x3eb504);
    } catch (_0x1844bc) {
      _0x15d00c(_0x1c23e6);
      if (_0x1844bc !== _0x1844bc + 0 && _0x1844bc !== "longjmp") {
        throw _0x1844bc;
      }
      _0x52a98c(1, 0);
    }
  }
  function _0x2e9659(_0xce4071) {
    var _0xf887df = _0x51cfa0();
    try {
      return _0x52eacd(_0xce4071);
    } catch (_0x5c66aa) {
      _0x15d00c(_0xf887df);
      if (_0x5c66aa !== _0x5c66aa + 0 && _0x5c66aa !== "longjmp") {
        throw _0x5c66aa;
      }
      _0x52a98c(1, 0);
    }
  }
  function _0x25d5c0(_0x2d3f43, _0x2520e0, _0x187967, _0x25790f) {
    var _0x532e99 = _0x51cfa0();
    try {
      return _0x413a61(_0x2d3f43, _0x2520e0, _0x187967, _0x25790f);
    } catch (_0x3ca5a4) {
      _0x15d00c(_0x532e99);
      if (_0x3ca5a4 !== _0x3ca5a4 + 0 && _0x3ca5a4 !== "longjmp") {
        throw _0x3ca5a4;
      }
      _0x52a98c(1, 0);
    }
  }
  function _0x108ee8(_0x59c024, _0x3ee8ef, _0x529ff3, _0x38186c, _0x1f4795, _0x586a78, _0x328ed1, _0x27ee45) {
    var _0x2d5efd = _0x51cfa0();
    try {
      return _0x3ccee9(_0x59c024, _0x3ee8ef, _0x529ff3, _0x38186c, _0x1f4795, _0x586a78, _0x328ed1, _0x27ee45);
    } catch (_0x316ec6) {
      _0x15d00c(_0x2d5efd);
      if (_0x316ec6 !== _0x316ec6 + 0 && _0x316ec6 !== "longjmp") {
        throw _0x316ec6;
      }
      _0x52a98c(1, 0);
    }
  }
  function _0x2c0205(_0x4bdb75, _0x3fba82) {
    var _0x2f106f = _0x51cfa0();
    try {
      return _0x92f806(_0x4bdb75, _0x3fba82);
    } catch (_0x528bb2) {
      _0x15d00c(_0x2f106f);
      if (_0x528bb2 !== _0x528bb2 + 0 && _0x528bb2 !== "longjmp") {
        throw _0x528bb2;
      }
      _0x52a98c(1, 0);
    }
  }
  function _0x2c8a79(_0x52b56d, _0x1308ad, _0x7cb0cb) {
    var _0x473163 = _0x51cfa0();
    try {
      return _0x9905e1(_0x52b56d, _0x1308ad, _0x7cb0cb);
    } catch (_0x26da40) {
      _0x15d00c(_0x473163);
      if (_0x26da40 !== _0x26da40 + 0 && _0x26da40 !== "longjmp") {
        throw _0x26da40;
      }
      _0x52a98c(1, 0);
    }
  }
  function _0x4a294b(_0x19e603, _0x1ffcc1, _0x383f03, _0x4d84c1, _0x5d0e1b, _0x256b76) {
    var _0x40c027 = _0x51cfa0();
    try {
      _0xe49dc3(_0x19e603, _0x1ffcc1, _0x383f03, _0x4d84c1, _0x5d0e1b, _0x256b76);
    } catch (_0x68331d) {
      _0x15d00c(_0x40c027);
      if (_0x68331d !== _0x68331d + 0 && _0x68331d !== "longjmp") {
        throw _0x68331d;
      }
      _0x52a98c(1, 0);
    }
  }
  function _0x2dd6e6(_0x3edff0, _0x22bcf9, _0x37ae36, _0x1a263b, _0x34f70a) {
    var _0x321921 = _0x51cfa0();
    try {
      _0x1de583(_0x3edff0, _0x22bcf9, _0x37ae36, _0x1a263b, _0x34f70a);
    } catch (_0x4bb497) {
      _0x15d00c(_0x321921);
      if (_0x4bb497 !== _0x4bb497 + 0 && _0x4bb497 !== "longjmp") {
        throw _0x4bb497;
      }
      _0x52a98c(1, 0);
    }
  }
  function _0xa1a15a(_0x5c4310, _0x22bfd4, _0x1c533e, _0x2b50a9) {
    var _0x50b9f2 = _0x51cfa0();
    try {
      return _0x216c9a(_0x5c4310, _0x22bfd4, _0x1c533e, _0x2b50a9);
    } catch (_0x5637e9) {
      _0x15d00c(_0x50b9f2);
      if (_0x5637e9 !== _0x5637e9 + 0 && _0x5637e9 !== "longjmp") {
        throw _0x5637e9;
      }
      _0x52a98c(1, 0);
    }
  }
  function _0x907a5f(_0x134d3e, _0x5c0b8a, _0x5f31bc, _0x32f02f, _0x1541b2, _0xc1f1ce) {
    var _0x578e4f = _0x51cfa0();
    try {
      _0x2ab692(_0x134d3e, _0x5c0b8a, _0x5f31bc, _0x32f02f, _0x1541b2, _0xc1f1ce);
    } catch (_0x3d086b) {
      _0x15d00c(_0x578e4f);
      if (_0x3d086b !== _0x3d086b + 0 && _0x3d086b !== "longjmp") {
        throw _0x3d086b;
      }
      _0x52a98c(1, 0);
    }
  }
  function _0x32ed01(_0x58ebad, _0xd68c71, _0x5da073, _0x3b2185, _0xbc9ad9, _0x185e21) {
    var _0x919822 = _0x51cfa0();
    try {
      _0x475f89(_0x58ebad, _0xd68c71, _0x5da073, _0x3b2185, _0xbc9ad9, _0x185e21);
    } catch (_0x156f43) {
      _0x15d00c(_0x919822);
      if (_0x156f43 !== _0x156f43 + 0 && _0x156f43 !== "longjmp") {
        throw _0x156f43;
      }
      _0x52a98c(1, 0);
    }
  }
  function _0x1fdb0f(_0x457c87, _0x595b36, _0x576899, _0x8b43c7, _0x13ba0a, _0x2def64) {
    var _0x2db312 = _0x51cfa0();
    try {
      return _0x19dbfe(_0x457c87, _0x595b36, _0x576899, _0x8b43c7, _0x13ba0a, _0x2def64);
    } catch (_0x440410) {
      _0x15d00c(_0x2db312);
      if (_0x440410 !== _0x440410 + 0 && _0x440410 !== "longjmp") {
        throw _0x440410;
      }
      _0x52a98c(1, 0);
    }
  }
  function _0x1a3846(_0x3a784d, _0x43c394, _0x16c29c, _0x2e7ca0, _0x4d2ab8) {
    var _0x3dc493 = _0x51cfa0();
    try {
      return _0x5c838e(_0x3a784d, _0x43c394, _0x16c29c, _0x2e7ca0, _0x4d2ab8);
    } catch (_0x5cf1f3) {
      _0x15d00c(_0x3dc493);
      if (_0x5cf1f3 !== _0x5cf1f3 + 0 && _0x5cf1f3 !== "longjmp") {
        throw _0x5cf1f3;
      }
      _0x52a98c(1, 0);
    }
  }
  function _0x2fd259(_0x3624c7, _0x249c0e, _0x3d7b17, _0x3827a9, _0x4c5af5) {
    var _0x4313dd = _0x51cfa0();
    try {
      return _0x340d78(_0x3624c7, _0x249c0e, _0x3d7b17, _0x3827a9, _0x4c5af5);
    } catch (_0x2629ff) {
      _0x15d00c(_0x4313dd);
      if (_0x2629ff !== _0x2629ff + 0 && _0x2629ff !== "longjmp") {
        throw _0x2629ff;
      }
      _0x52a98c(1, 0);
    }
  }
  function _0x72373a(_0x3e675b, _0xf7d52a, _0x43469b, _0x1a4218, _0x5e290a, _0x23128b, _0x1b3b3b) {
    var _0x4a4f93 = _0x51cfa0();
    try {
      return _0x1db6a5(_0x3e675b, _0xf7d52a, _0x43469b, _0x1a4218, _0x5e290a, _0x23128b, _0x1b3b3b);
    } catch (_0x1d6e98) {
      _0x15d00c(_0x4a4f93);
      if (_0x1d6e98 !== _0x1d6e98 + 0 && _0x1d6e98 !== "longjmp") {
        throw _0x1d6e98;
      }
      _0x52a98c(1, 0);
    }
  }
  function _0x257b06(_0x5b6709, _0x3e303b, _0x46c7b2, _0x23411a, _0x30ae6b) {
    var _0x408fda = _0x51cfa0();
    try {
      return _0x676770(_0x5b6709, _0x3e303b, _0x46c7b2, _0x23411a, _0x30ae6b);
    } catch (_0x5bbf10) {
      _0x15d00c(_0x408fda);
      if (_0x5bbf10 !== _0x5bbf10 + 0 && _0x5bbf10 !== "longjmp") {
        throw _0x5bbf10;
      }
      _0x52a98c(1, 0);
    }
  }
  function _0x2437fe(_0x3a0974, _0x5ce1f0, _0x17a377, _0x92591, _0x33e157, _0x117921) {
    var _0x40109a = _0x51cfa0();
    try {
      return _0x420eb1(_0x3a0974, _0x5ce1f0, _0x17a377, _0x92591, _0x33e157, _0x117921);
    } catch (_0x1b5b3d) {
      _0x15d00c(_0x40109a);
      if (_0x1b5b3d !== _0x1b5b3d + 0 && _0x1b5b3d !== "longjmp") {
        throw _0x1b5b3d;
      }
      _0x52a98c(1, 0);
    }
  }
  function _0x4326b1(_0x199ba6, _0x55fe81, _0x3255c3, _0x3b11ec, _0x1c326c, _0x578a20) {
    var _0xdfe0af = _0x51cfa0();
    try {
      return _0x298e41(_0x199ba6, _0x55fe81, _0x3255c3, _0x3b11ec, _0x1c326c, _0x578a20);
    } catch (_0x19deba) {
      _0x15d00c(_0xdfe0af);
      if (_0x19deba !== _0x19deba + 0 && _0x19deba !== "longjmp") {
        throw _0x19deba;
      }
      _0x52a98c(1, 0);
    }
  }
  function _0x29ed47(_0x3e55c4, _0x204d25, _0x209966, _0x12307f, _0x492201, _0x3b036d) {
    var _0x4cf4fa = _0x51cfa0();
    try {
      return _0x45e13f(_0x3e55c4, _0x204d25, _0x209966, _0x12307f, _0x492201, _0x3b036d);
    } catch (_0x531f46) {
      _0x15d00c(_0x4cf4fa);
      if (_0x531f46 !== _0x531f46 + 0 && _0x531f46 !== "longjmp") {
        throw _0x531f46;
      }
      _0x52a98c(1, 0);
    }
  }
  function _0x3ac92b(_0x1f7755, _0x388a7f, _0x3c4315, _0x1f22f1, _0x5a70b1, _0x4ae864) {
    var _0x4f8254 = _0x51cfa0();
    try {
      return _0x52d4cf(_0x1f7755, _0x388a7f, _0x3c4315, _0x1f22f1, _0x5a70b1, _0x4ae864);
    } catch (_0x4d9388) {
      _0x15d00c(_0x4f8254);
      if (_0x4d9388 !== _0x4d9388 + 0 && _0x4d9388 !== "longjmp") {
        throw _0x4d9388;
      }
      _0x52a98c(1, 0);
    }
  }
  function _0x3b3c00(_0x5845e8, _0xea04fd, _0x52315e, _0x22fb10, _0x406ee8) {
    var _0x5298d1 = _0x51cfa0();
    try {
      _0x3f83c3(_0x5845e8, _0xea04fd, _0x52315e, _0x22fb10, _0x406ee8);
    } catch (_0x26b887) {
      _0x15d00c(_0x5298d1);
      if (_0x26b887 !== _0x26b887 + 0 && _0x26b887 !== "longjmp") {
        throw _0x26b887;
      }
      _0x52a98c(1, 0);
    }
  }
  function _0x313c75(_0x5ab265, _0x516cbf, _0x46444f, _0x4c748c, _0x280063, _0x57d838) {
    var _0x10a86b = _0x51cfa0();
    try {
      return _0x36af95(_0x5ab265, _0x516cbf, _0x46444f, _0x4c748c, _0x280063, _0x57d838);
    } catch (_0x2f1eb7) {
      _0x15d00c(_0x10a86b);
      if (_0x2f1eb7 !== _0x2f1eb7 + 0 && _0x2f1eb7 !== "longjmp") {
        throw _0x2f1eb7;
      }
      _0x52a98c(1, 0);
    }
  }
  function _0x2c852f(_0x1840f6, _0x408ebc, _0x477524, _0x24cbdc, _0x11c49a, _0x2e9971, _0x37fe34, _0x2c07f4, _0x203644, _0x4b8d97, _0x3465ef, _0xdafbec, _0x5186f1, _0x425dbf, _0x57a9ea, _0x328b20) {
    var _0x58efe9 = _0x51cfa0();
    try {
      _0x92ecb7(_0x1840f6, _0x408ebc, _0x477524, _0x24cbdc, _0x11c49a, _0x2e9971, _0x37fe34, _0x2c07f4, _0x203644, _0x4b8d97, _0x3465ef, _0xdafbec, _0x5186f1, _0x425dbf, _0x57a9ea, _0x328b20);
    } catch (_0x44cde6) {
      _0x15d00c(_0x58efe9);
      if (_0x44cde6 !== _0x44cde6 + 0 && _0x44cde6 !== "longjmp") {
        throw _0x44cde6;
      }
      _0x52a98c(1, 0);
    }
  }
  function _0x3b820e(_0x13814b, _0x557fce, _0x646822, _0x1a93c5, _0x32682e, _0xc84e88) {
    var _0x35b731 = _0x51cfa0();
    try {
      return _0x21fbce(_0x13814b, _0x557fce, _0x646822, _0x1a93c5, _0x32682e, _0xc84e88);
    } catch (_0x4a44fe) {
      _0x15d00c(_0x35b731);
      if (_0x4a44fe !== _0x4a44fe + 0 && _0x4a44fe !== "longjmp") {
        throw _0x4a44fe;
      }
      _0x52a98c(1, 0);
    }
  }
  function _0x3edfee(_0x349a3c, _0x8cf91c, _0x2500b0, _0x41c854, _0x422835, _0x3f7fce, _0x33673f) {
    var _0x1df4b0 = _0x51cfa0();
    try {
      _0x258c91(_0x349a3c, _0x8cf91c, _0x2500b0, _0x41c854, _0x422835, _0x3f7fce, _0x33673f);
    } catch (_0x28da94) {
      _0x15d00c(_0x1df4b0);
      if (_0x28da94 !== _0x28da94 + 0 && _0x28da94 !== "longjmp") {
        throw _0x28da94;
      }
      _0x52a98c(1, 0);
    }
  }
  function _0x38e7fb(_0x591e37, _0x3657f5, _0xa47098, _0x236ddb) {
    var _0x468f6c = _0x51cfa0();
    try {
      return _0x1084d2(_0x591e37, _0x3657f5, _0xa47098, _0x236ddb);
    } catch (_0x293a97) {
      _0x15d00c(_0x468f6c);
      if (_0x293a97 !== _0x293a97 + 0 && _0x293a97 !== "longjmp") {
        throw _0x293a97;
      }
      _0x52a98c(1, 0);
    }
  }
  function _0xfa2ce7(_0x200eb1, _0x1be560, _0x356a87, _0x27c86a, _0xddce1a, _0x3200d1, _0x14555b, _0x57847f, _0x5e5742, _0x466f80, _0x4c9f76, _0x16c709, _0xec2d4b, _0x38d9f2) {
    var _0x2a0dc0 = _0x51cfa0();
    try {
      _0x26080e(_0x200eb1, _0x1be560, _0x356a87, _0x27c86a, _0xddce1a, _0x3200d1, _0x14555b, _0x57847f, _0x5e5742, _0x466f80, _0x4c9f76, _0x16c709, _0xec2d4b, _0x38d9f2);
    } catch (_0x7c08f2) {
      _0x15d00c(_0x2a0dc0);
      if (_0x7c08f2 !== _0x7c08f2 + 0 && _0x7c08f2 !== "longjmp") {
        throw _0x7c08f2;
      }
      _0x52a98c(1, 0);
    }
  }
  function _0x2182db(_0xb25362, _0x2da3b0, _0x2d7751, _0x45e04b, _0x14d121, _0x14cbfa, _0x3b1b5e, _0x42b6e2) {
    var _0x1499c8 = _0x51cfa0();
    try {
      _0x1b1c23(_0xb25362, _0x2da3b0, _0x2d7751, _0x45e04b, _0x14d121, _0x14cbfa, _0x3b1b5e, _0x42b6e2);
    } catch (_0x448f9b) {
      _0x15d00c(_0x1499c8);
      if (_0x448f9b !== _0x448f9b + 0 && _0x448f9b !== "longjmp") {
        throw _0x448f9b;
      }
      _0x52a98c(1, 0);
    }
  }
  function _0x4587af(_0x5dd39e, _0x1bc6bf, _0x5f1f01, _0x3503d5, _0x19149d, _0x207918) {
    var _0x21e9ba = _0x51cfa0();
    try {
      return _0x58253a(_0x5dd39e, _0x1bc6bf, _0x5f1f01, _0x3503d5, _0x19149d, _0x207918);
    } catch (_0xb87217) {
      _0x15d00c(_0x21e9ba);
      if (_0xb87217 !== _0xb87217 + 0 && _0xb87217 !== "longjmp") {
        throw _0xb87217;
      }
      _0x52a98c(1, 0);
    }
  }
  function _0x57f163(_0xdee4be, _0x5e8157, _0x297dd0, _0xac4c96, _0x5e740d, _0x5929a2, _0x231e31, _0x519bd3) {
    var _0x47f3e0 = _0x51cfa0();
    try {
      _0x755895(_0xdee4be, _0x5e8157, _0x297dd0, _0xac4c96, _0x5e740d, _0x5929a2, _0x231e31, _0x519bd3);
    } catch (_0x417449) {
      _0x15d00c(_0x47f3e0);
      if (_0x417449 !== _0x417449 + 0 && _0x417449 !== "longjmp") {
        throw _0x417449;
      }
      _0x52a98c(1, 0);
    }
  }
  function _0x4240c3(_0x39c496, _0x448fb6, _0x21fbe1) {
    var _0x508e5e = _0x51cfa0();
    try {
      return _0x3e5220(_0x39c496, _0x448fb6, _0x21fbe1);
    } catch (_0x51b9d6) {
      _0x15d00c(_0x508e5e);
      if (_0x51b9d6 !== _0x51b9d6 + 0 && _0x51b9d6 !== "longjmp") {
        throw _0x51b9d6;
      }
      _0x52a98c(1, 0);
    }
  }
  function _0x24bb77(_0x11a010, _0xabe449, _0x7fad8a, _0x2160c7, _0x1e121a, _0x21783d, _0x352c13) {
    var _0x48f308 = _0x51cfa0();
    try {
      _0xaf9304(_0x11a010, _0xabe449, _0x7fad8a, _0x2160c7, _0x1e121a, _0x21783d, _0x352c13);
    } catch (_0x2c9516) {
      _0x15d00c(_0x48f308);
      if (_0x2c9516 !== _0x2c9516 + 0 && _0x2c9516 !== "longjmp") {
        throw _0x2c9516;
      }
      _0x52a98c(1, 0);
    }
  }
  function _0xe098cd(_0x121648, _0x1d734e, _0x404730, _0x555ae6, _0x444f30, _0x1ebfbd, _0x30ea63, _0x4fd708) {
    var _0x13ec0c = _0x51cfa0();
    try {
      _0x4149dc(_0x121648, _0x1d734e, _0x404730, _0x555ae6, _0x444f30, _0x1ebfbd, _0x30ea63, _0x4fd708);
    } catch (_0x39a2d2) {
      _0x15d00c(_0x13ec0c);
      if (_0x39a2d2 !== _0x39a2d2 + 0 && _0x39a2d2 !== "longjmp") {
        throw _0x39a2d2;
      }
      _0x52a98c(1, 0);
    }
  }
  function _0x45e503(_0x40b7cf, _0x514f41, _0x2aaa82, _0xe80093) {
    var _0x5b47cc = _0x51cfa0();
    try {
      return _0x413c00(_0x40b7cf, _0x514f41, _0x2aaa82, _0xe80093);
    } catch (_0xc291d5) {
      _0x15d00c(_0x5b47cc);
      if (_0xc291d5 !== _0xc291d5 + 0 && _0xc291d5 !== "longjmp") {
        throw _0xc291d5;
      }
      _0x52a98c(1, 0);
    }
  }
  function _0x3531b3(_0x209a54, _0x5ca3c9, _0x351a8b, _0x3c64df) {
    var _0x5c6926 = _0x51cfa0();
    try {
      return _0x5ee327(_0x209a54, _0x5ca3c9, _0x351a8b, _0x3c64df);
    } catch (_0x438be5) {
      _0x15d00c(_0x5c6926);
      if (_0x438be5 !== _0x438be5 + 0 && _0x438be5 !== "longjmp") {
        throw _0x438be5;
      }
      _0x52a98c(1, 0);
    }
  }
  function _0x507427(_0xfea1d6, _0x39ffbe, _0x4b6265, _0x313b23) {
    var _0x2ce162 = _0x51cfa0();
    try {
      return _0x3e5718(_0xfea1d6, _0x39ffbe, _0x4b6265, _0x313b23);
    } catch (_0x534a5d) {
      _0x15d00c(_0x2ce162);
      if (_0x534a5d !== _0x534a5d + 0 && _0x534a5d !== "longjmp") {
        throw _0x534a5d;
      }
      _0x52a98c(1, 0);
    }
  }
  function _0x340d61(_0xd67da6, _0x100a44, _0x24cdbf, _0x535823, _0x1dc2d8, _0x159b77, _0x463feb, _0x332794, _0x59b35e, _0x2251f4, _0xeee90e, _0x271caf) {
    var _0x20bd85 = _0x51cfa0();
    try {
      return _0x4af89c(_0xd67da6, _0x100a44, _0x24cdbf, _0x535823, _0x1dc2d8, _0x159b77, _0x463feb, _0x332794, _0x59b35e, _0x2251f4, _0xeee90e, _0x271caf);
    } catch (_0xffb00c) {
      _0x15d00c(_0x20bd85);
      if (_0xffb00c !== _0xffb00c + 0 && _0xffb00c !== "longjmp") {
        throw _0xffb00c;
      }
      _0x52a98c(1, 0);
    }
  }
  function _0x1544fa(_0xca3e77, _0x529f3f, _0x44574e, _0x579266) {
    var _0x1fa6f9 = _0x51cfa0();
    try {
      _0x50c116(_0xca3e77, _0x529f3f, _0x44574e, _0x579266);
    } catch (_0x4e95f9) {
      _0x15d00c(_0x1fa6f9);
      if (_0x4e95f9 !== _0x4e95f9 + 0 && _0x4e95f9 !== "longjmp") {
        throw _0x4e95f9;
      }
      _0x52a98c(1, 0);
    }
  }
  function _0x17e5e5(_0xd90996, _0x3ef5e0, _0x50c93e, _0x1f5d9b, _0x8bd715, _0x1ad988, _0x31124c) {
    var _0x4d2353 = _0x51cfa0();
    try {
      return _0x9b11e8(_0xd90996, _0x3ef5e0, _0x50c93e, _0x1f5d9b, _0x8bd715, _0x1ad988, _0x31124c);
    } catch (_0x30e414) {
      _0x15d00c(_0x4d2353);
      if (_0x30e414 !== _0x30e414 + 0 && _0x30e414 !== "longjmp") {
        throw _0x30e414;
      }
      _0x52a98c(1, 0);
    }
  }
  function _0x2bded(_0xe451d3, _0x58a7ee, _0x539bfe, _0x1543ae, _0x3f1177, _0x264e0b, _0x2134b0, _0x469f52, _0x5a4f16, _0x415db6) {
    var _0x55619c = _0x51cfa0();
    try {
      return _0x55a9cd(_0xe451d3, _0x58a7ee, _0x539bfe, _0x1543ae, _0x3f1177, _0x264e0b, _0x2134b0, _0x469f52, _0x5a4f16, _0x415db6);
    } catch (_0x53347d) {
      _0x15d00c(_0x55619c);
      if (_0x53347d !== _0x53347d + 0 && _0x53347d !== "longjmp") {
        throw _0x53347d;
      }
      _0x52a98c(1, 0);
    }
  }
  function _0x19ec89(_0x1a781d, _0x34f4a4, _0x59b516, _0x3d312b, _0x30158c, _0x21c1c0, _0x4b6c99) {
    var _0x11bd66 = _0x51cfa0();
    try {
      _0x23056c(_0x1a781d, _0x34f4a4, _0x59b516, _0x3d312b, _0x30158c, _0x21c1c0, _0x4b6c99);
    } catch (_0x3e3066) {
      _0x15d00c(_0x11bd66);
      if (_0x3e3066 !== _0x3e3066 + 0 && _0x3e3066 !== "longjmp") {
        throw _0x3e3066;
      }
      _0x52a98c(1, 0);
    }
  }
  function _0x32045d(_0x811f64, _0x1643ea, _0x9b646, _0xf2b0d4, _0x53619f, _0x99e6d3, _0x13ed89, _0x27b2b5, _0x39e08a, _0x493d8a, _0x37ad53, _0x31ec83) {
    var _0x3e4fb5 = _0x51cfa0();
    try {
      return _0x75ec98(_0x811f64, _0x1643ea, _0x9b646, _0xf2b0d4, _0x53619f, _0x99e6d3, _0x13ed89, _0x27b2b5, _0x39e08a, _0x493d8a, _0x37ad53, _0x31ec83);
    } catch (_0x44e7df) {
      _0x15d00c(_0x3e4fb5);
      if (_0x44e7df !== _0x44e7df + 0 && _0x44e7df !== "longjmp") {
        throw _0x44e7df;
      }
      _0x52a98c(1, 0);
    }
  }
  function _0x4a4a3b(_0x4ffa44, _0x411ed4, _0x238953, _0x1905cb, _0x569930, _0x203b75, _0x2d408b, _0xceeb27, _0x1a85e6, _0xa21a16) {
    var _0xd2b185 = _0x51cfa0();
    try {
      return _0x3118cc(_0x4ffa44, _0x411ed4, _0x238953, _0x1905cb, _0x569930, _0x203b75, _0x2d408b, _0xceeb27, _0x1a85e6, _0xa21a16);
    } catch (_0x45120b) {
      _0x15d00c(_0xd2b185);
      if (_0x45120b !== _0x45120b + 0 && _0x45120b !== "longjmp") {
        throw _0x45120b;
      }
      _0x52a98c(1, 0);
    }
  }
  function _0x46ed49(_0x4eca9a, _0x95ca26, _0x30b964, _0x218b45, _0x5b67f7, _0xeb211a, _0x21a0f7, _0x109ff7, _0x2c4fbc) {
    var _0x5823cc = _0x51cfa0();
    try {
      _0x2a3c06(_0x4eca9a, _0x95ca26, _0x30b964, _0x218b45, _0x5b67f7, _0xeb211a, _0x21a0f7, _0x109ff7, _0x2c4fbc);
    } catch (_0x194a51) {
      _0x15d00c(_0x5823cc);
      if (_0x194a51 !== _0x194a51 + 0 && _0x194a51 !== "longjmp") {
        throw _0x194a51;
      }
      _0x52a98c(1, 0);
    }
  }
  function _0x4b6f89(_0x39f8ba, _0x886c00, _0x1e1ae2, _0x4a9105, _0x369946, _0x2ad0db, _0x58ef24, _0x5eb021, _0x59455f, _0x62c358) {
    var _0x9c1052 = _0x51cfa0();
    try {
      _0x42a0be(_0x39f8ba, _0x886c00, _0x1e1ae2, _0x4a9105, _0x369946, _0x2ad0db, _0x58ef24, _0x5eb021, _0x59455f, _0x62c358);
    } catch (_0x379c3a) {
      _0x15d00c(_0x9c1052);
      if (_0x379c3a !== _0x379c3a + 0 && _0x379c3a !== "longjmp") {
        throw _0x379c3a;
      }
      _0x52a98c(1, 0);
    }
  }
  function _0x367ea3(_0x442532, _0xb632ed, _0x76c0e3, _0x2f2eb5, _0x20a5c4, _0x40d79b, _0x3b47c1, _0x179916, _0x4a3f4b) {
    var _0x929c0a = _0x51cfa0();
    try {
      _0xe0def3(_0x442532, _0xb632ed, _0x76c0e3, _0x2f2eb5, _0x20a5c4, _0x40d79b, _0x3b47c1, _0x179916, _0x4a3f4b);
    } catch (_0x119952) {
      _0x15d00c(_0x929c0a);
      if (_0x119952 !== _0x119952 + 0 && _0x119952 !== "longjmp") {
        throw _0x119952;
      }
      _0x52a98c(1, 0);
    }
  }
  function _0x11fb94(_0x50e7fd, _0x50413a, _0x5b2038, _0x128658, _0x521713, _0x3fc196, _0x440801, _0x58ffeb, _0x3e639e, _0x4891e5, _0x47a2d4) {
    var _0x49b486 = _0x51cfa0();
    try {
      return _0x29d651(_0x50e7fd, _0x50413a, _0x5b2038, _0x128658, _0x521713, _0x3fc196, _0x440801, _0x58ffeb, _0x3e639e, _0x4891e5, _0x47a2d4);
    } catch (_0x2cb805) {
      _0x15d00c(_0x49b486);
      if (_0x2cb805 !== _0x2cb805 + 0 && _0x2cb805 !== "longjmp") {
        throw _0x2cb805;
      }
      _0x52a98c(1, 0);
    }
  }
  function _0x16070f(_0x3a1abd, _0x3c49de, _0x4177f1, _0x33c599, _0x148e1f, _0x39bda2, _0x29a85d) {
    var _0x39bd40 = _0x51cfa0();
    try {
      return _0x410af5(_0x3a1abd, _0x3c49de, _0x4177f1, _0x33c599, _0x148e1f, _0x39bda2, _0x29a85d);
    } catch (_0x3e94e5) {
      _0x15d00c(_0x39bd40);
      if (_0x3e94e5 !== _0x3e94e5 + 0 && _0x3e94e5 !== "longjmp") {
        throw _0x3e94e5;
      }
      _0x52a98c(1, 0);
    }
  }
  function _0xaa17c9(_0x4af5ef, _0x4a958d, _0x5cc92e, _0x2416da, _0xace6a0, _0x514579, _0x25e723) {
    var _0x3816e7 = _0x51cfa0();
    try {
      return _0x4ee6d4(_0x4af5ef, _0x4a958d, _0x5cc92e, _0x2416da, _0xace6a0, _0x514579, _0x25e723);
    } catch (_0x4ce7cd) {
      _0x15d00c(_0x3816e7);
      if (_0x4ce7cd !== _0x4ce7cd + 0 && _0x4ce7cd !== "longjmp") {
        throw _0x4ce7cd;
      }
      _0x52a98c(1, 0);
    }
  }
  function _0x901ada(_0x3d6759, _0x5300c8, _0x4aa212, _0x2c4bb0, _0x3e15bf, _0xab65f1, _0xace482, _0x18b83f, _0x16ddbe, _0x172f7a, _0x5e2cc3) {
    var _0xe0d324 = _0x51cfa0();
    try {
      _0x2acc7b(_0x3d6759, _0x5300c8, _0x4aa212, _0x2c4bb0, _0x3e15bf, _0xab65f1, _0xace482, _0x18b83f, _0x16ddbe, _0x172f7a, _0x5e2cc3);
    } catch (_0x587797) {
      _0x15d00c(_0xe0d324);
      if (_0x587797 !== _0x587797 + 0 && _0x587797 !== "longjmp") {
        throw _0x587797;
      }
      _0x52a98c(1, 0);
    }
  }
  function _0x520a73(_0x5760bd, _0x16a80a, _0x4a6d4a, _0x598940, _0x4d3ed7, _0x39c22d, _0x26214f, _0x166477) {
    var _0x2f0ce3 = _0x51cfa0();
    try {
      _0x2b99fd(_0x5760bd, _0x16a80a, _0x4a6d4a, _0x598940, _0x4d3ed7, _0x39c22d, _0x26214f, _0x166477);
    } catch (_0x3bccc2) {
      _0x15d00c(_0x2f0ce3);
      if (_0x3bccc2 !== _0x3bccc2 + 0 && _0x3bccc2 !== "longjmp") {
        throw _0x3bccc2;
      }
      _0x52a98c(1, 0);
    }
  }
  function _0x2a4903(_0xdf1267, _0x39a413, _0x368987, _0x4a2c10, _0x1065b7, _0x3011bc, _0x3c7dae, _0x48b1a7, _0xc12e5b, _0x1b9b9c, _0x18117a) {
    var _0x3fc0e4 = _0x51cfa0();
    try {
      _0x3c8303(_0xdf1267, _0x39a413, _0x368987, _0x4a2c10, _0x1065b7, _0x3011bc, _0x3c7dae, _0x48b1a7, _0xc12e5b, _0x1b9b9c, _0x18117a);
    } catch (_0x3d1877) {
      _0x15d00c(_0x3fc0e4);
      if (_0x3d1877 !== _0x3d1877 + 0 && _0x3d1877 !== "longjmp") {
        throw _0x3d1877;
      }
      _0x52a98c(1, 0);
    }
  }
  function _0x5768a7(_0x376aa4, _0x1ef930, _0x9709ac, _0x2ac627, _0x59add8, _0xcaa755) {
    var _0x193442 = _0x51cfa0();
    try {
      return _0x3d4dc0(_0x376aa4, _0x1ef930, _0x9709ac, _0x2ac627, _0x59add8, _0xcaa755);
    } catch (_0x164fe1) {
      _0x15d00c(_0x193442);
      if (_0x164fe1 !== _0x164fe1 + 0 && _0x164fe1 !== "longjmp") {
        throw _0x164fe1;
      }
      _0x52a98c(1, 0);
    }
  }
  function _0x5134fc(_0x5a8027, _0x2576ea, _0x205e4a, _0x110087, _0x557d60, _0x460850, _0x2bc26b) {
    var _0x354452 = _0x51cfa0();
    try {
      return _0x4ac901(_0x5a8027, _0x2576ea, _0x205e4a, _0x110087, _0x557d60, _0x460850, _0x2bc26b);
    } catch (_0x1c6f66) {
      _0x15d00c(_0x354452);
      if (_0x1c6f66 !== _0x1c6f66 + 0 && _0x1c6f66 !== "longjmp") {
        throw _0x1c6f66;
      }
      _0x52a98c(1, 0);
    }
  }
  function _0x5ae492(_0xf682c6, _0x2debc9, _0x3233b8, _0x503469, _0x4ace10, _0x325c80, _0x27879d, _0x10e214) {
    var _0x48f5d3 = _0x51cfa0();
    try {
      return _0x1abaff(_0xf682c6, _0x2debc9, _0x3233b8, _0x503469, _0x4ace10, _0x325c80, _0x27879d, _0x10e214);
    } catch (_0x130e07) {
      _0x15d00c(_0x48f5d3);
      if (_0x130e07 !== _0x130e07 + 0 && _0x130e07 !== "longjmp") {
        throw _0x130e07;
      }
      _0x52a98c(1, 0);
    }
  }
  _0x289557.ccall = _0x4f6532;
  _0x289557.cwrap = _0xc041c;
  _0x289557.stackTrace = _0xacba48;
  _0x289557.addRunDependency = _0x349a66;
  _0x289557.removeRunDependency = _0x50369d;
  _0x289557.FS_createPath = _0x2840b9.createPath;
  _0x289557.FS_createDataFile = _0x2840b9.createDataFile;
  _0x289557.stackTrace = _0xacba48;
  var _0x404947;
  function _0x3875ad(_0xb7ef1a) {
    this.name = "ExitStatus";
    this.message = "Program terminated with exit(" + _0xb7ef1a + ")";
    this.status = _0xb7ef1a;
  }
  var _0x2934c4 = false;
  _0x519c4c = function _0x1bc7c5() {
    if (!_0x404947) {
      _0x328680();
    }
    if (!_0x404947) {
      _0x519c4c = _0x1bc7c5;
    }
  };
  function _0x3599c4(_0x41b590) {
    var _0x4ec4e6 = _0x289557._main;
    _0x41b590 = _0x41b590 || [];
    var _0x2e92fa = _0x41b590.length + 1;
    var _0x5b1c39 = _0x3f9e14((_0x2e92fa + 1) * 4);
    _0x4e86a5[_0x5b1c39 >> 2] = _0x53e3e4(_0x368e09);
    for (var _0x4e1961 = 1; _0x4e1961 < _0x2e92fa; _0x4e1961++) {
      _0x4e86a5[(_0x5b1c39 >> 2) + _0x4e1961] = _0x53e3e4(_0x41b590[_0x4e1961 - 1]);
    }
    _0x4e86a5[(_0x5b1c39 >> 2) + _0x2e92fa] = 0;
    try {
      var _0x556e4b = _0x4ec4e6(_0x2e92fa, _0x5b1c39);
      _0x1f3ef4(_0x556e4b, true);
    } catch (_0x2d60b0) {
      if (_0x2d60b0 instanceof _0x3875ad) {
        return;
      } else if (_0x2d60b0 == "unwind") {
        return;
      } else {
        var _0x5e5b21 = _0x2d60b0;
        if (_0x2d60b0 && typeof _0x2d60b0 === "object" && _0x2d60b0.stack) {
          _0x5e5b21 = [_0x2d60b0, _0x2d60b0.stack];
        }
        _0x1650b6("exception thrown: " + _0x5e5b21);
        _0x35b3f7(1, _0x2d60b0);
      }
    } finally {
      _0x2934c4 = true;
    }
  }
  function _0x328680(_0x170630) {
    _0x170630 = _0x170630 || _0x3ff23e;
    if (_0x1fc9ac > 0) {
      return;
    }
    _0x3489d1();
    if (_0x1fc9ac > 0) {
      return;
    }
    function _0x176171() {
      if (_0x404947) {
        return;
      }
      _0x404947 = true;
      _0x289557.calledRun = true;
      if (_0x16d0c6) {
        return;
      }
      _0x7a80eb();
      _0x1a2829();
      if (_0x289557.onRuntimeInitialized) {
        _0x289557.onRuntimeInitialized();
      }
      if (_0x4a3b85) {
        _0x3599c4(_0x170630);
      }
      _0x1c244d();
    }
    if (_0x289557.setStatus) {
      _0x289557.setStatus("Running...");
      setTimeout(function () {
        setTimeout(function () {
          _0x289557.setStatus("");
        }, 1);
        _0x176171();
      }, 1);
    } else {
      _0x176171();
    }
  }
  _0x289557.run = _0x328680;
  function _0x1f3ef4(_0x2ebea3, _0x59341d) {
    _0x3717d8 = _0x2ebea3;
    if (_0x59341d && _0x3cfbe7() && _0x2ebea3 === 0) {
      return;
    }
    if (_0x3cfbe7()) {} else {
      _0x45a59f();
      if (_0x289557.onExit) {
        _0x289557.onExit(_0x2ebea3);
      }
      _0x16d0c6 = true;
    }
    _0x35b3f7(_0x2ebea3, new _0x3875ad(_0x2ebea3));
  }
  if (_0x289557.preInit) {
    if (typeof _0x289557.preInit == "function") {
      _0x289557.preInit = [_0x289557.preInit];
    }
    while (_0x289557.preInit.length > 0) {
      _0x289557.preInit.pop()();
    }
  }
  var _0x4a3b85 = true;
  if (_0x289557.noInitialRun) {
    _0x4a3b85 = false;
  }
  _0x328680();
}
config.sourceHtml = "REJVQUVUTWNid3hESVU0N05XaFdBd2NLUkVKTEdodEdBUWdXU2dNTUJ3VXJVSEVOVGpNPQ==";
check_enable_debug();
window.GMPERFORM = {};
window.GMPERFORM.LOAD = Date.now();
if (!window.GMSOFT_OPTIONS) {
  window.GMSOFT_OPTIONS = config;
  window.GMSOFT_OPTIONS.domainHost = "games.1games.io";
}
config.referrer = document.referrer;
function gmdebugtime(_0xeae050) {
  console.log("_TIME_" + _0xeae050 + ":" + (Date.now() - window.GMPERFORM.LOAD));
}
function gmdebug(_0x5d74ad) {
  console.log(_0x5d74ad);
}
function gmEvent(_0x2f2055, _0x2ab2e) {
  loadGMData(_0x2f2055, _0x2ab2e);
}
function gmStartGame(_0x407a7e) {
  _0x407a7e();
}
function gmStartAds(_0x875a06) {
  _0x875a06();
}
let fireFPS = 0;
async function loadGMData(_0x4d2748, _0x2aff16) {
  try {
    if (!config.buildAPI) {
      return;
    }
    if (!config.eventLog && _0x4d2748 != "document-ready" && _0x4d2748 != "start-game" && _0x4d2748 != "unload-game") {
      return;
    }
    if (_0x4d2748 == "fps") {
      try {
        let _0x150e9c = _0x2aff16.split("|");
        if (_0x150e9c.length >= 2) {
          firebaseLogEventParameter("timecounter", _0x150e9c[0]);
          if (fireFPS < 2) {
            fireFPS++;
            firebaseLogEventParameter("fps", _0x150e9c[1]);
          }
        }
      } catch (_0x21b891) {
        console.log("Error extracting time from abc:", _0x21b891.message);
      }
    }
    let _0x483ec9 = "";
    if (_0x2aff16) {
      _0x483ec9 = "&msg=" + encodeURIComponent(xorEncryptMsg(_0x2aff16));
    }
    _0x483ec9 += "&time=" + encodeURIComponent(Date.now() - window.GMPERFORM.LOAD);
    _0x483ec9 += "&gid=" + config.gameId;
    if (_0x4d2748 == "ban-game" || _0x4d2748 == "document-ready" || _0x4d2748 == "start-game") {
      _0x483ec9 += "&wtop=" + "escaperoad2d.io";
      _0x483ec9 += "&hn=" + "games.1games.io";
      _0x483ec9 += "&referrer=" + config.referrer;
    }
    let _0x29edb6 = "&data=" + btoa(_0x483ec9);
    let _0x260071 = config.buildAPI + "?event=" + _0x4d2748 + _0x29edb6;
    let _0x5c2ddc = new XMLHttpRequest();
    _0x5c2ddc.open("GET", _0x260071);
    _0x5c2ddc.onreadystatechange = function () {
      if (_0x5c2ddc.readyState !== 4) {
        return;
      }
      if (_0x5c2ddc.status === 200) {
        console.log(_0x5c2ddc.responseText);
      } else {
        console.log("HTTP error", _0x5c2ddc.status, _0x5c2ddc.statusText);
      }
    };
    _0x5c2ddc.send();
  } catch (_0x5de5a8) {}
}
function xorEncryptMsg(_0x30d1a1) {
  let _0x9a0799 = "gmdata@&!message@!3!@";
  let _0xe41171 = "";
  for (let _0x5706e7 = 0; _0x5706e7 < _0x30d1a1.length; _0x5706e7++) {
    const _0x23f4dd = _0x30d1a1.charCodeAt(_0x5706e7) ^ _0x9a0799.charCodeAt(_0x5706e7 % _0x9a0799.length);
    _0xe41171 += String.fromCharCode(_0x23f4dd);
  }
  return btoa(_0xe41171);
}
function check_event_log() {
  const _0x14b3f5 = window.location.search;
  const _0x279d5f = new URLSearchParams(_0x14b3f5);
  if (_0x279d5f.has("e")) {
    config.eventLog = true;
  }
}
check_event_log();
function executeCode(_0x579e7f) {
  try {
    const _0x72200f = eval(_0x579e7f);
    gmdebug("Result:", _0x72200f);
    return _0x72200f;
  } catch (_0x336e34) {
    gmdebug("Error executing code:", _0x336e34);
  }
}
window.addEventListener("beforeunload", function (_0x349999) {
  gmEvent("unload-game");
});
append_function();
function append_function() {
  setTimeout(function () {
    try {
      let _0x3a441c = "data@&@#$@#^FFgdfg!1estimate";
      let _0x3d61ee = "data@&&%^*((*^&^&766))nNhZmRzZGY=";
      let _0x2614aa = executeCode("atob(atob(\"" + window.GMSOFT_OPTIONS.sourceHtml + "\"))");
      let _0x32d1d3 = _0x3d61ee;
      let _0x114e99 = "";
      for (let _0x475064 = 0; _0x475064 < _0x2614aa.length; _0x475064++) {
        const _0x3defc0 = _0x2614aa.charCodeAt(_0x475064) ^ _0x3a441c.charCodeAt(_0x475064 % _0x3a441c.length);
        _0x114e99 += String.fromCharCode(_0x3defc0);
      }
      sourceHtml = _0x114e99;
      let _0x188d55 = document.getElementById("gmsoft-jssdk");
      if (!_0x188d55 || _0x188d55.src != sourceHtml) {
      }
    } catch (_0x56610e) {
    }
  }, 3000);
}
function check_enable_debug() {
  try {
    const _0x82f586 = window.location.search;
    const _0xe57a6c = new URLSearchParams(_0x82f586);
    if (_0xe57a6c.has("d")) {} else {
      console.error = function () {};
      console.warn = function () {};
      console.log = function () {};
    }
  } catch (_0x4900f5) {}
}