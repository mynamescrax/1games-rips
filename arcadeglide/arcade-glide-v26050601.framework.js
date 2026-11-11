function unityFramework(_0x3b068f) {
  var _0x3b068f = typeof _0x3b068f !== "undefined" ? _0x3b068f : {};
  _0x3b068f.USER_JSPRE_PLACEHOLDER = "USER_JSPRE_PLACEHOLDER";
  function _0x866520(_0xc13315, _0x3e34dc) {
    _0x5ab828("The JavaScript function 'Pointer_stringify(ptrToSomeCString)' is obsoleted and will be removed in a future Unity version. Please call 'UTF8ToString(ptrToSomeCString)' instead.");
    return _0x57f36f(_0xc13315, _0x3e34dc);
  }
  _0x3b068f.Pointer_stringify = _0x866520;
  var _0x2b523e = "(^|\\n)(\\s+at\\s+|)jsStackTrace(\\s+\\(|@)([^\\n]+):\\d+:\\d+(\\)|)(\\n|$)";
  var _0xeb91f8 = _0x7b7fc7().match(new RegExp(_0x2b523e));
  if (_0xeb91f8) {
    _0x3b068f.stackTraceRegExp = new RegExp(_0x2b523e.replace("([^\\n]+)", _0xeb91f8[4].replace(/[\\^${}[\]().*+?|]/g, "\\$&")).replace("jsStackTrace", "[^\\n]+"));
  }
  var _0x2e4daa = function (_0x1a6e82) {
    if (_0x2514c4) {
      return;
    }
    _0x2514c4 = true;
    _0x1621c5 = 1;
    if (typeof ENVIRONMENT_IS_PTHREAD !== "undefined" && ENVIRONMENT_IS_PTHREAD) {
      console.error("Pthread aborting at " + new Error().stack);
    }
    if (_0x1a6e82 !== undefined) {
      _0x424bf2(_0x1a6e82);
      _0x1717db(_0x1a6e82);
      _0x1a6e82 = JSON.stringify(_0x1a6e82);
    } else {
      _0x1a6e82 = "";
    }
    var _0x3f8285 = "abort(" + _0x1a6e82 + ") at " + _0xe0170d();
    if (_0x3b068f.abortHandler && _0x3b068f.abortHandler(_0x3f8285)) {
      return;
    }
    throw _0x3f8285;
  };
  _0x3b068f.SetFullscreen = function (_0x3e41d6) {
    if (typeof _0x2e677a === "undefined" || !_0x2e677a) {
      console.log("Runtime not initialized yet.");
    } else if (typeof _0x100051 === "undefined") {
      console.log("Player not loaded yet.");
    } else {
      var _0x1f812a = _0x100051.canPerformEventHandlerRequests;
      _0x100051.canPerformEventHandlerRequests = function () {
        return 1;
      };
      _0x3b068f.ccall("SetFullscreen", null, ["number"], [_0x3e41d6]);
      _0x100051.canPerformEventHandlerRequests = _0x1f812a;
    }
  };
  if (typeof ENVIRONMENT_IS_PTHREAD === "undefined" || !ENVIRONMENT_IS_PTHREAD) {
    _0x3b068f.preRun.push(function () {
      var _0x205721 = _0x3b068f.unityFileSystemInit || function () {
        _0xee3f43.mkdir("/idbfs");
        _0xee3f43.mount(_0x558a23, {}, "/idbfs");
        _0x3b068f.addRunDependency("JS_FileSystem_Mount");
        _0xee3f43.syncfs(true, function (_0x4bcc9d) {
          if (_0x4bcc9d) {
            console.log("IndexedDB is not available. Data will not persist in cache and PlayerPrefs will not be saved.");
          }
          _0x3b068f.removeRunDependency("JS_FileSystem_Mount");
        });
      };
      _0x205721();
    });
  }
  var _0x2f2e25 = [];
  var _0x1d64d2 = false;
  var _0x118497;
  var _0x1fb779 = null;
  function _0x133bf7(_0x30633b) {
    var _0x43b4af = Object.keys(_0x2f2e25);
    for (var _0x5182c4 = 0; _0x5182c4 < _0x43b4af.length; ++_0x5182c4) {
      var _0x5713ac = _0x2f2e25[_0x43b4af[_0x5182c4]];
      if (_0x5713ac.deviceId && _0x5713ac.deviceId == _0x30633b.deviceId) {
        return _0x5713ac;
      }
    }
    for (var _0x5182c4 = 0; _0x5182c4 < _0x43b4af.length; ++_0x5182c4) {
      var _0x5713ac = _0x2f2e25[_0x43b4af[_0x5182c4]];
      if (_0x5713ac == _0x30633b) {
        return _0x5713ac;
      }
    }
    for (var _0x5182c4 = 0; _0x5182c4 < _0x43b4af.length; ++_0x5182c4) {
      var _0x5713ac = _0x2f2e25[_0x43b4af[_0x5182c4]];
      if (_0x5713ac.label && _0x5713ac.label == _0x30633b.label) {
        return _0x5713ac;
      }
    }
    for (var _0x5182c4 = 0; _0x5182c4 < _0x43b4af.length; ++_0x5182c4) {
      var _0x5713ac = _0x2f2e25[_0x43b4af[_0x5182c4]];
      if (_0x5713ac.groupId && _0x5713ac.kind && _0x5713ac.groupId == _0x30633b.groupId && _0x5713ac.kind == _0x30633b.kind) {
        return _0x5713ac;
      }
    }
  }
  function _0x4421ca() {
    for (var _0x1dd24a = 0;; ++_0x1dd24a) {
      if (!_0x2f2e25[_0x1dd24a]) {
        return _0x1dd24a;
      }
    }
  }
  function _0x5dedb8(_0x46f25a) {
    _0x118497();
    _0x2f2e25 = [];
    var _0x1fbc22 = {};
    var _0x14668e = [];
    _0x46f25a.forEach(function (_0x2fe79d) {
      if (_0x2fe79d.kind === "videoinput") {
        var _0x2f3c21 = _0x133bf7(_0x2fe79d);
        if (_0x2f3c21) {
          _0x1fbc22[_0x2f3c21.id] = _0x2f3c21;
        } else {
          _0x14668e.push(_0x2fe79d);
        }
      }
    });
    _0x2f2e25 = _0x1fbc22;
    _0x14668e.forEach(function (_0x18d49c) {
      if (!_0x18d49c.id) {
        _0x18d49c.id = _0x4421ca();
        _0x18d49c.name = _0x18d49c.label || "Video input #" + (_0x18d49c.id + 1);
        _0x18d49c.isFrontFacing = _0x18d49c.name.toLowerCase().includes("front") || !_0x18d49c.name.toLowerCase().includes("front") && !_0x18d49c.name.toLowerCase().includes("back");
        _0x2f2e25[_0x18d49c.id] = _0x18d49c;
      }
    });
  }
  function _0x275527() {
    if (!_0x2f2e25) {
      return;
    }
    navigator.mediaDevices.enumerateDevices().then(function (_0x26b688) {
      _0x5dedb8(_0x26b688);
      _0x1d64d2 = true;
    }).catch(function (_0xc59e85) {
      console.warn("Unable to enumerate media devices: " + _0xc59e85 + "\nWebcams will not be available.");
      _0x2de3c5();
    });
    if (/Firefox/.test(navigator.userAgent)) {
      setTimeout(_0x275527, 60000);
      _0x5ab828("Applying workaround to Firefox bug https://bugzilla.mozilla.org/show_bug.cgi?id=1397977");
    }
  }
  function _0x2de3c5() {
    if (navigator.mediaDevices && navigator.mediaDevices.removeEventListener) {
      navigator.mediaDevices.removeEventListener("devicechange", _0x275527);
    }
    _0x2f2e25 = null;
  }
  _0x3b068f.disableAccessToMediaDevices = _0x2de3c5;
  if (!navigator.mediaDevices) {
    console.warn("navigator.mediaDevices not supported by this browser. Webcam access will not be available." + (location.protocol == "https:" ? "" : " Try hosting the page over HTTPS, because some browsers disable webcam access when insecure HTTP is being used."));
    _0x2de3c5();
  } else if (typeof ENVIRONMENT_IS_PTHREAD === "undefined" || !ENVIRONMENT_IS_PTHREAD) {
    setTimeout(function () {
      try {
        _0x5d8b6d("enumerateMediaDevices");
        _0x118497 = function () {
          if (_0x1fb779 !== null) {
            clearTimeout(_0x1fb779);
          }
          _0x40101a("enumerateMediaDevices");
          if (navigator.mediaDevices) {
            console.log("navigator.mediaDevices support available");
          }
          _0x118497 = function () {};
        };
        _0x275527();
        _0x1fb779 = setTimeout(_0x118497, 1000);
        navigator.mediaDevices.addEventListener("devicechange", _0x275527);
      } catch (_0x425ce6) {
        console.warn("Unable to enumerate media devices: " + _0x425ce6);
        _0x2de3c5();
      }
    }, 0);
  }
  function _0x4f485c(_0x46a8a4, _0x180d12, _0x306b5f) {
    var _0x408f26 = _0x10f513(_0x180d12);
    var _0x4db157 = _0x10f513(_0x46a8a4);
    var _0x4961f0 = 0;
    try {
      if (_0x306b5f === undefined) {
        _0x379c12(_0x4db157, _0x408f26);
      } else if (typeof _0x306b5f === "string") {
        _0x4961f0 = _0x10f513(_0x306b5f);
        _0x18a80b(_0x4db157, _0x408f26, _0x4961f0);
      } else if (typeof _0x306b5f === "number") {
        _0x6a20b8(_0x4db157, _0x408f26, _0x306b5f);
      } else {
        throw "" + _0x306b5f + " is does not have a type which is supported by SendMessage.";
      }
    } finally {
      _0x41603f(_0x4961f0);
      _0x41603f(_0x4db157);
      _0x41603f(_0x408f26);
    }
  }
  _0x3b068f.SendMessage = _0x4f485c;
  var _0x1aeced = {};
  var _0x1067cb;
  for (_0x1067cb in _0x3b068f) {
    if (_0x3b068f.hasOwnProperty(_0x1067cb)) {
      _0x1aeced[_0x1067cb] = _0x3b068f[_0x1067cb];
    }
  }
  var _0x561982 = [];
  var _0xa276b8 = "./this.program";
  var _0x2bd81c = function (_0x3bb11b, _0xefb2d3) {
    throw _0xefb2d3;
  };
  var _0x160793 = false;
  var _0x2a3447 = false;
  var _0x140fdc = false;
  var _0x5dc532 = false;
  _0x160793 = typeof window === "object";
  _0x2a3447 = typeof importScripts === "function";
  _0x140fdc = typeof process === "object" && typeof process.versions === "object" && typeof process.versions.node === "string";
  _0x5dc532 = !_0x160793 && !_0x140fdc && !_0x2a3447;
  var _0x1be931 = "";
  function _0x150dff(_0x28ef96) {
    if (_0x3b068f.locateFile) {
      return _0x3b068f.locateFile(_0x28ef96, _0x1be931);
    }
    return _0x1be931 + _0x28ef96;
  }
  var _0x4585d3;
  var _0x40665a;
  var _0x450e37;
  var _0x3f36c5;
  var _0x25e851;
  var _0x14e7a6;
  if (_0x140fdc) {
    if (_0x2a3447) {
      _0x1be931 = require("path").dirname(_0x1be931) + "/";
    } else {
      _0x1be931 = __dirname + "/";
    }
    _0x4585d3 = function _0x5a06b1(_0x3c55a1, _0x5a3bc9) {
      if (!_0x25e851) {
        _0x25e851 = require("fs");
      }
      if (!_0x14e7a6) {
        _0x14e7a6 = require("path");
      }
      _0x3c55a1 = _0x14e7a6.normalize(_0x3c55a1);
      return _0x25e851.readFileSync(_0x3c55a1, _0x5a3bc9 ? null : "utf8");
    };
    _0x450e37 = function _0x822cfe(_0x1b1076) {
      var _0x2e67f4 = _0x4585d3(_0x1b1076, true);
      if (!_0x2e67f4.buffer) {
        _0x2e67f4 = new Uint8Array(_0x2e67f4);
      }
      _0x1edac9(_0x2e67f4.buffer);
      return _0x2e67f4;
    };
    if (process.argv.length > 1) {
      _0xa276b8 = process.argv[1].replace(/\\/g, "/");
    }
    _0x561982 = process.argv.slice(2);
    if (typeof module !== "undefined") {
      module.exports = _0x3b068f;
    }
    process.on("uncaughtException", function (_0x548837) {
      if (!(_0x548837 instanceof _0x15266a)) {
        throw _0x548837;
      }
    });
    process.on("unhandledRejection", _0x2e4daa);
    _0x2bd81c = function (_0x1d0704) {
      process.exit(_0x1d0704);
    };
    _0x3b068f.inspect = function () {
      return "[Emscripten Module object]";
    };
  } else if (_0x5dc532) {
    if (typeof read != "undefined") {
      _0x4585d3 = function _0x21b280(_0x1a1bca) {
        return read(_0x1a1bca);
      };
    }
    _0x450e37 = function _0x30cb33(_0x646f07) {
      var _0x1128fa;
      if (typeof readbuffer === "function") {
        return new Uint8Array(readbuffer(_0x646f07));
      }
      _0x1128fa = read(_0x646f07, "binary");
      _0x1edac9(typeof _0x1128fa === "object");
      return _0x1128fa;
    };
    if (typeof scriptArgs != "undefined") {
      _0x561982 = scriptArgs;
    } else if (typeof arguments != "undefined") {
      _0x561982 = arguments;
    }
    if (typeof quit === "function") {
      _0x2bd81c = function (_0x542ac9) {
        quit(_0x542ac9);
      };
    }
    if (typeof print !== "undefined") {
      if (typeof console === "undefined") {
        console = {};
      }
      console.log = print;
      console.warn = console.error = typeof printErr !== "undefined" ? printErr : print;
    }
  } else if (_0x160793 || _0x2a3447) {
    if (_0x2a3447) {
      _0x1be931 = "https://gamea.azgames.io";
    } else if (typeof document !== "undefined" && document.currentScript) {
      _0x1be931 = document.currentScript.src;
    }
    if (_0x1be931.indexOf("blob:") !== 0) {
      _0x1be931 = _0x1be931.substr(0, _0x1be931.lastIndexOf("/") + 1);
    } else {
      _0x1be931 = "";
    }
    {
      _0x4585d3 = function (_0x424528) {
        var _0x5d767f = new XMLHttpRequest();
        _0x5d767f.open("GET", _0x424528, false);
        _0x5d767f.send(null);
        return _0x5d767f.responseText;
      };
      if (_0x2a3447) {
        _0x450e37 = function (_0x481aac) {
          var _0x131e2a = new XMLHttpRequest();
          _0x131e2a.open("GET", _0x481aac, false);
          _0x131e2a.responseType = "arraybuffer";
          _0x131e2a.send(null);
          return new Uint8Array(_0x131e2a.response);
        };
      }
      _0x40665a = function (_0x20e189, _0x54d78b, _0xafff5) {
        var _0x471005 = new XMLHttpRequest();
        _0x471005.open("GET", _0x20e189, true);
        _0x471005.responseType = "arraybuffer";
        _0x471005.onload = function () {
          if (_0x471005.status == 200 || _0x471005.status == 0 && _0x471005.response) {
            _0x54d78b(_0x471005.response);
            return;
          }
          _0xafff5();
        };
        _0x471005.onerror = _0xafff5;
        _0x471005.send(null);
      };
    }
    _0x3f36c5 = function (_0x25e2ff) {
      document.title = _0x25e2ff;
    };
  } else {}
  var _0x424bf2 = _0x3b068f.print || console.log.bind(console);
  var _0x1717db = _0x3b068f.printErr || console.warn.bind(console);
  for (_0x1067cb in _0x1aeced) {
    if (_0x1aeced.hasOwnProperty(_0x1067cb)) {
      _0x3b068f[_0x1067cb] = _0x1aeced[_0x1067cb];
    }
  }
  _0x1aeced = null;
  if (_0x3b068f.arguments) {
    _0x561982 = _0x3b068f.arguments;
  }
  if (_0x3b068f.thisProgram) {
    _0xa276b8 = _0x3b068f.thisProgram;
  }
  if (_0x3b068f.quit) {
    _0x2bd81c = _0x3b068f.quit;
  }
  var _0x4c9911 = 16;
  function _0x5a744a(_0x46d57f, _0x525c21) {
    if (!_0x525c21) {
      _0x525c21 = _0x4c9911;
    }
    return Math.ceil(_0x46d57f / _0x525c21) * _0x525c21;
  }
  function _0x5ab828(_0x358de1) {
    if (!_0x5ab828.shown) {
      _0x5ab828.shown = {};
    }
    if (!_0x5ab828.shown[_0x358de1]) {
      _0x5ab828.shown[_0x358de1] = 1;
      _0x1717db(_0x358de1);
    }
  }
  var _0x3e105e = 0;
  var _0x5eda5c = function (_0x5038d7) {
    _0x3e105e = _0x5038d7;
  };
  var _0xe138de = function () {
    return _0x3e105e;
  };
  var _0x5c606a;
  if (_0x3b068f.wasmBinary) {
    _0x5c606a = _0x3b068f.wasmBinary;
  }
  var _0x2b6ac6 = _0x3b068f.noExitRuntime || true;
  if (typeof WebAssembly !== "object") {
    _0x2e4daa("no native wasm support detected");
  }
  var _0x2af55f;
  var _0x2514c4 = false;
  var _0x1621c5;
  function _0x1edac9(_0x36ff4b, _0x3d6faf) {
    if (!_0x36ff4b) {
      _0x2e4daa("Assertion failed: " + _0x3d6faf);
    }
  }
  function _0x5a6899(_0x1ec71d) {
    var _0x51a5eb = _0x3b068f["_" + _0x1ec71d];
    _0x1edac9(_0x51a5eb, "Cannot call unknown function " + _0x1ec71d + ", make sure it is exported");
    return _0x51a5eb;
  }
  function _0x326428(_0xd3512e, _0x6417dd, _0x5cb2e4, _0x34f86a, _0x3b01fd) {
    var _0x1db25f = {
      string: function (_0x561220) {
        var _0x4a55e0 = 0;
        if (_0x561220 !== null && _0x561220 !== undefined && _0x561220 !== 0) {
          var _0x157ce6 = (_0x561220.length << 2) + 1;
          _0x4a55e0 = _0x2d607d(_0x157ce6);
          _0x5b4754(_0x561220, _0x4a55e0, _0x157ce6);
        }
        return _0x4a55e0;
      },
      array: function (_0x32b149) {
        var _0x2db1b2 = _0x2d607d(_0x32b149.length);
        _0x16f415(_0x32b149, _0x2db1b2);
        return _0x2db1b2;
      }
    };
    function _0x2829e9(_0x3428a9) {
      if (_0x6417dd === "string") {
        return _0x57f36f(_0x3428a9);
      }
      if (_0x6417dd === "boolean") {
        return Boolean(_0x3428a9);
      }
      return _0x3428a9;
    }
    var _0x3dc107 = _0x5a6899(_0xd3512e);
    var _0x2a9839 = [];
    var _0x37ff26 = 0;
    if (_0x34f86a) {
      for (var _0xc8f063 = 0; _0xc8f063 < _0x34f86a.length; _0xc8f063++) {
        var _0x1db2bb = _0x1db25f[_0x5cb2e4[_0xc8f063]];
        if (_0x1db2bb) {
          if (_0x37ff26 === 0) {
            _0x37ff26 = _0x1c6173();
          }
          _0x2a9839[_0xc8f063] = _0x1db2bb(_0x34f86a[_0xc8f063]);
        } else {
          _0x2a9839[_0xc8f063] = _0x34f86a[_0xc8f063];
        }
      }
    }
    var _0x50c5eb = _0x3dc107.apply(null, _0x2a9839);
    _0x50c5eb = _0x2829e9(_0x50c5eb);
    if (_0x37ff26 !== 0) {
      _0x176ee2(_0x37ff26);
    }
    return _0x50c5eb;
  }
  function _0x2da06d(_0x5d6987, _0x54877b, _0x585a5e, _0x1dc899) {
    _0x585a5e = _0x585a5e || [];
    var _0x3ae101 = _0x585a5e.every(function (_0x15897a) {
      return _0x15897a === "number";
    });
    var _0x3feb89 = _0x54877b !== "string";
    if (_0x3feb89 && _0x3ae101 && !_0x1dc899) {
      return _0x5a6899(_0x5d6987);
    }
    return function () {
      return _0x326428(_0x5d6987, _0x54877b, _0x585a5e, arguments, _0x1dc899);
    };
  }
  var _0x39d1e3 = typeof TextDecoder !== "undefined" ? new TextDecoder("utf8") : undefined;
  function _0x339ec6(_0x510ef4, _0xb9f815, _0x167fd4) {
    var _0x2726d9 = _0xb9f815 + _0x167fd4;
    var _0x18ee7d = _0xb9f815;
    while (_0x510ef4[_0x18ee7d] && !(_0x18ee7d >= _0x2726d9)) {
      ++_0x18ee7d;
    }
    if (_0x18ee7d - _0xb9f815 > 16 && _0x510ef4.subarray && _0x39d1e3) {
      return _0x39d1e3.decode(_0x510ef4.subarray(_0xb9f815, _0x18ee7d));
    } else {
      var _0x5d19dc = "";
      while (_0xb9f815 < _0x18ee7d) {
        var _0x434271 = _0x510ef4[_0xb9f815++];
        if (!(_0x434271 & 128)) {
          _0x5d19dc += String.fromCharCode(_0x434271);
          continue;
        }
        var _0x2a50b5 = _0x510ef4[_0xb9f815++] & 63;
        if ((_0x434271 & 224) == 192) {
          _0x5d19dc += String.fromCharCode((_0x434271 & 31) << 6 | _0x2a50b5);
          continue;
        }
        var _0x503b86 = _0x510ef4[_0xb9f815++] & 63;
        if ((_0x434271 & 240) == 224) {
          _0x434271 = (_0x434271 & 15) << 12 | _0x2a50b5 << 6 | _0x503b86;
        } else {
          _0x434271 = (_0x434271 & 7) << 18 | _0x2a50b5 << 12 | _0x503b86 << 6 | _0x510ef4[_0xb9f815++] & 63;
        }
        if (_0x434271 < 65536) {
          _0x5d19dc += String.fromCharCode(_0x434271);
        } else {
          var _0x16a716 = _0x434271 - 65536;
          _0x5d19dc += String.fromCharCode(_0x16a716 >> 10 | 55296, _0x16a716 & 1023 | 56320);
        }
      }
    }
    return _0x5d19dc;
  }
  function _0x57f36f(_0x3cf00a, _0x34650c) {
    if (_0x3cf00a) {
      return _0x339ec6(_0x479b38, _0x3cf00a, _0x34650c);
    } else {
      return "";
    }
  }
  function _0x29bc42(_0x20db46, _0x44364b, _0x5a6ee2, _0x59d067) {
    if (!(_0x59d067 > 0)) {
      return 0;
    }
    var _0x5e6a95 = _0x5a6ee2;
    var _0x2aa737 = _0x5a6ee2 + _0x59d067 - 1;
    for (var _0x16dcb3 = 0; _0x16dcb3 < _0x20db46.length; ++_0x16dcb3) {
      var _0x10ab94 = _0x20db46.charCodeAt(_0x16dcb3);
      if (_0x10ab94 >= 55296 && _0x10ab94 <= 57343) {
        var _0x529a8c = _0x20db46.charCodeAt(++_0x16dcb3);
        _0x10ab94 = 65536 + ((_0x10ab94 & 1023) << 10) | _0x529a8c & 1023;
      }
      if (_0x10ab94 <= 127) {
        if (_0x5a6ee2 >= _0x2aa737) {
          break;
        }
        _0x44364b[_0x5a6ee2++] = _0x10ab94;
      } else if (_0x10ab94 <= 2047) {
        if (_0x5a6ee2 + 1 >= _0x2aa737) {
          break;
        }
        _0x44364b[_0x5a6ee2++] = _0x10ab94 >> 6 | 192;
        _0x44364b[_0x5a6ee2++] = _0x10ab94 & 63 | 128;
      } else if (_0x10ab94 <= 65535) {
        if (_0x5a6ee2 + 2 >= _0x2aa737) {
          break;
        }
        _0x44364b[_0x5a6ee2++] = _0x10ab94 >> 12 | 224;
        _0x44364b[_0x5a6ee2++] = _0x10ab94 >> 6 & 63 | 128;
        _0x44364b[_0x5a6ee2++] = _0x10ab94 & 63 | 128;
      } else {
        if (_0x5a6ee2 + 3 >= _0x2aa737) {
          break;
        }
        _0x44364b[_0x5a6ee2++] = _0x10ab94 >> 18 | 240;
        _0x44364b[_0x5a6ee2++] = _0x10ab94 >> 12 & 63 | 128;
        _0x44364b[_0x5a6ee2++] = _0x10ab94 >> 6 & 63 | 128;
        _0x44364b[_0x5a6ee2++] = _0x10ab94 & 63 | 128;
      }
    }
    _0x44364b[_0x5a6ee2] = 0;
    return _0x5a6ee2 - _0x5e6a95;
  }
  function _0x5b4754(_0x3d24fd, _0x4c7ad5, _0x19e10d) {
    return _0x29bc42(_0x3d24fd, _0x479b38, _0x4c7ad5, _0x19e10d);
  }
  function _0x2705ae(_0x7ed226) {
    var _0x1ed190 = 0;
    for (var _0x55cb55 = 0; _0x55cb55 < _0x7ed226.length; ++_0x55cb55) {
      var _0x3f8b4a = _0x7ed226.charCodeAt(_0x55cb55);
      if (_0x3f8b4a >= 55296 && _0x3f8b4a <= 57343) {
        _0x3f8b4a = 65536 + ((_0x3f8b4a & 1023) << 10) | _0x7ed226.charCodeAt(++_0x55cb55) & 1023;
      }
      if (_0x3f8b4a <= 127) {
        ++_0x1ed190;
      } else if (_0x3f8b4a <= 2047) {
        _0x1ed190 += 2;
      } else if (_0x3f8b4a <= 65535) {
        _0x1ed190 += 3;
      } else {
        _0x1ed190 += 4;
      }
    }
    return _0x1ed190;
  }
  function _0x19ca44(_0x3721c0) {
    var _0x53c833 = _0x2705ae(_0x3721c0) + 1;
    var _0x36e018 = _0x58620b(_0x53c833);
    if (_0x36e018) {
      _0x29bc42(_0x3721c0, _0x5a8ff8, _0x36e018, _0x53c833);
    }
    return _0x36e018;
  }
  function _0x5283f0(_0x221849) {
    var _0x51778e = _0x2705ae(_0x221849) + 1;
    var _0x25b724 = _0x2d607d(_0x51778e);
    _0x29bc42(_0x221849, _0x5a8ff8, _0x25b724, _0x51778e);
    return _0x25b724;
  }
  function _0x16f415(_0x32ae29, _0x32fa75) {
    _0x5a8ff8.set(_0x32ae29, _0x32fa75);
  }
  function _0x389cf4(_0xae53b2, _0x21db7c, _0x3673f5) {
    for (var _0xc1ec8a = 0; _0xc1ec8a < _0xae53b2.length; ++_0xc1ec8a) {
      _0x5a8ff8[_0x21db7c++ >> 0] = _0xae53b2.charCodeAt(_0xc1ec8a);
    }
    if (!_0x3673f5) {
      _0x5a8ff8[_0x21db7c >> 0] = 0;
    }
  }
  function _0x5172dc(_0x10e47b, _0xb8722b) {
    if (_0x10e47b % _0xb8722b > 0) {
      _0x10e47b += _0xb8722b - _0x10e47b % _0xb8722b;
    }
    return _0x10e47b;
  }
  var _0x49ed52;
  var _0x5a8ff8;
  var _0x479b38;
  var _0x121e6d;
  var _0x4429d9;
  var _0x58fcaf;
  var _0x59624f;
  var _0x59876a;
  var _0x2f2442;
  function _0x395e90(_0x16e22a) {
    _0x49ed52 = _0x16e22a;
    _0x3b068f.HEAP8 = _0x5a8ff8 = new Int8Array(_0x16e22a);
    _0x3b068f.HEAP16 = _0x121e6d = new Int16Array(_0x16e22a);
    _0x3b068f.HEAP32 = _0x58fcaf = new Int32Array(_0x16e22a);
    _0x3b068f.HEAPU8 = _0x479b38 = new Uint8Array(_0x16e22a);
    _0x3b068f.HEAPU16 = _0x4429d9 = new Uint16Array(_0x16e22a);
    _0x3b068f.HEAPU32 = _0x59624f = new Uint32Array(_0x16e22a);
    _0x3b068f.HEAPF32 = _0x59876a = new Float32Array(_0x16e22a);
    _0x3b068f.HEAPF64 = _0x2f2442 = new Float64Array(_0x16e22a);
  }
  var _0x52390d = _0x3b068f.INITIAL_MEMORY || 33554432;
  var _0x402cbd;
  var _0x531aee = [];
  var _0x512983 = [];
  var _0x539d8f = [];
  var _0x4e3741 = [];
  var _0x56720d = [];
  var _0x2e677a = false;
  var _0x3964e8 = false;
  function _0xa4f783() {
    if (_0x3b068f.preRun) {
      if (typeof _0x3b068f.preRun == "function") {
        _0x3b068f.preRun = [_0x3b068f.preRun];
      }
      while (_0x3b068f.preRun.length) {
        _0x583d71(_0x3b068f.preRun.shift());
      }
    }
    _0x717fcd(_0x531aee);
  }
  function _0x2d9ee4() {
    _0x2e677a = true;
    if (!_0x3b068f.noFSInit && !_0xee3f43.init.initialized) {
      _0xee3f43.init();
    }
    _0x531f38.init();
    _0x3d74f6.root = _0xee3f43.mount(_0x3d74f6, {}, null);
    _0x269673.root = _0xee3f43.mount(_0x269673, {}, null);
    _0x717fcd(_0x512983);
  }
  function _0x343e7c() {
    _0xee3f43.ignorePermissions = false;
    _0x717fcd(_0x539d8f);
  }
  function _0x31374d() {
    _0x3964e8 = true;
  }
  function _0x899f8c() {
    if (_0x3b068f.postRun) {
      if (typeof _0x3b068f.postRun == "function") {
        _0x3b068f.postRun = [_0x3b068f.postRun];
      }
      while (_0x3b068f.postRun.length) {
        _0x47705f(_0x3b068f.postRun.shift());
      }
    }
    _0x717fcd(_0x56720d);
  }
  function _0x583d71(_0x5b9504) {
    _0x531aee.unshift(_0x5b9504);
  }
  function _0x5c801b(_0x215b48) {
    _0x512983.unshift(_0x215b48);
  }
  function _0x47705f(_0x26b161) {
    _0x56720d.unshift(_0x26b161);
  }
  var _0x1ca4a3 = 0;
  var _0x26e468 = null;
  var _0x3461f5 = null;
  function _0x5a51bf(_0x20bdd9) {
    return _0x20bdd9;
  }
  function _0x5d8b6d(_0x39ccf7) {
    _0x1ca4a3++;
    if (_0x3b068f.monitorRunDependencies) {
      _0x3b068f.monitorRunDependencies(_0x1ca4a3);
    }
  }
  function _0x40101a(_0x5e6642) {
    _0x1ca4a3--;
    if (_0x3b068f.monitorRunDependencies) {
      _0x3b068f.monitorRunDependencies(_0x1ca4a3);
    }
    if (_0x1ca4a3 == 0) {
      if (_0x26e468 !== null) {
        clearInterval(_0x26e468);
        _0x26e468 = null;
      }
      if (_0x3461f5) {
        var _0x24a6a0 = _0x3461f5;
        _0x3461f5 = null;
        _0x24a6a0();
      }
    }
  }
  _0x3b068f.preloadedImages = {};
  _0x3b068f.preloadedAudios = {};
  function _0x2e4daa(_0x124c78) {
    if (_0x3b068f.onAbort) {
      _0x3b068f.onAbort(_0x124c78);
    }
    _0x124c78 += "";
    _0x1717db(_0x124c78);
    _0x2514c4 = true;
    _0x1621c5 = 1;
    _0x124c78 = "abort(" + _0x124c78 + "). Build with -s ASSERTIONS=1 for more info.";
    var _0x576ccb = new WebAssembly.RuntimeError(_0x124c78);
    throw _0x576ccb;
  }
  var _0xb8a67d = "data:application/octet-stream;base64,";
  function _0x457440(_0x24854d) {
    return _0x24854d.startsWith(_0xb8a67d);
  }
  function _0x15f386(_0x437cf8) {
    return _0x437cf8.startsWith("file://");
  }
  var _0x5ce7ac = "build.wasm";
  if (!_0x457440(_0x5ce7ac)) {
    _0x5ce7ac = _0x150dff(_0x5ce7ac);
  }
  function _0x2970c0(_0x3fabda) {
    try {
      if (_0x3fabda == _0x5ce7ac && _0x5c606a) {
        return new Uint8Array(_0x5c606a);
      }
      if (_0x450e37) {
        return _0x450e37(_0x3fabda);
      } else {
        throw "both async and sync fetching of the wasm failed";
      }
    } catch (_0x4fcb57) {
      _0x2e4daa(_0x4fcb57);
    }
  }
  function _0x54031a() {
    if (!_0x5c606a && (_0x160793 || _0x2a3447)) {
      if (typeof fetch === "function" && !_0x15f386(_0x5ce7ac)) {
        return fetch(_0x5ce7ac, {
          credentials: "same-origin"
        }).then(function (_0x5b5c28) {
          if (!_0x5b5c28.ok) {
            throw "failed to load wasm binary file at '" + _0x5ce7ac + "'";
          }
          return _0x5b5c28.arrayBuffer();
        }).catch(function () {
          return _0x2970c0(_0x5ce7ac);
        });
      } else if (_0x40665a) {
        return new Promise(function (_0x181fee, _0xd95548) {
          _0x40665a(_0x5ce7ac, function (_0x159eab) {
            _0x181fee(new Uint8Array(_0x159eab));
          }, _0xd95548);
        });
      }
    }
    return Promise.resolve().then(function () {
      return _0x2970c0(_0x5ce7ac);
    });
  }
  function _0x5c243f() {
    var _0x5c9c2b = {
      a: _0x1c4563
    };
    function _0x2be648(_0x34d982, _0x5ad210) {
      var _0x383bd1 = _0x34d982.exports;
      _0x3b068f.asm = _0x383bd1;
      _0x2af55f = _0x3b068f.asm.ek;
      _0x395e90(_0x2af55f.buffer);
      _0x402cbd = _0x3b068f.asm.Ek;
      _0x5c801b(_0x3b068f.asm.fk);
      _0x40101a("wasm-instantiate");
    }
    _0x5d8b6d("wasm-instantiate");
    function _0x20a78d(_0x5b9859) {
      _0x2be648(_0x5b9859.instance);
    }
    function _0x52218b(_0x2a5316) {
      return _0x54031a().then(function (_0x4e79c4) {
        var _0x4602de = WebAssembly.instantiate(_0x4e79c4, _0x5c9c2b);
        return _0x4602de;
      }).then(_0x2a5316, function (_0x4a962d) {
        _0x1717db("failed to asynchronously prepare wasm: " + _0x4a962d);
        _0x2e4daa(_0x4a962d);
      });
    }
    function _0x3e41a6() {
      if (!_0x5c606a && typeof WebAssembly.instantiateStreaming === "function" && !_0x457440(_0x5ce7ac) && !_0x15f386(_0x5ce7ac) && typeof fetch === "function") {
        return fetch(_0x5ce7ac, {
          credentials: "same-origin"
        }).then(function (_0x5c12ea) {
          var _0x250d62 = WebAssembly.instantiateStreaming(_0x5c12ea, _0x5c9c2b);
          return _0x250d62.then(_0x20a78d, function (_0x37c6e) {
            _0x1717db("wasm streaming compile failed: " + _0x37c6e);
            _0x1717db("falling back to ArrayBuffer instantiation");
            return _0x52218b(_0x20a78d);
          });
        });
      } else {
        return _0x52218b(_0x20a78d);
      }
    }
    if (_0x3b068f.instantiateWasm) {
      try {
        var _0x46f919 = _0x3b068f.instantiateWasm(_0x5c9c2b, _0x2be648);
        return _0x46f919;
      } catch (_0x276bb1) {
        _0x1717db("Module.instantiateWasm callback failed with error: " + _0x276bb1);
        return false;
      }
    }
    _0x3e41a6();
    return {};
  }
  var _0x40da2a;
  var _0x79d46c;
  var _0x5a12c5 = {
    4824152: function () {
      return _0x3b068f.webglContextAttributes.premultipliedAlpha;
    },
    4824213: function () {
      return _0x3b068f.webglContextAttributes.preserveDrawingBuffer;
    },
    4824277: function () {
      return _0x3b068f.webglContextAttributes.powerPreference;
    }
  };
  function _0x717fcd(_0x5ed3b0) {
    while (_0x5ed3b0.length > 0) {
      var _0x59ce29 = _0x5ed3b0.shift();
      if (typeof _0x59ce29 == "function") {
        _0x59ce29(_0x3b068f);
        continue;
      }
      var _0x28a2a2 = _0x59ce29.func;
      if (typeof _0x28a2a2 === "number") {
        if (_0x59ce29.arg === undefined) {
          (function () {
            _0x3c8e57.call(null, _0x28a2a2);
          })();
        } else {
          (function (_0x4bdea4) {
            _0x1ba1b5.apply(null, [_0x28a2a2, _0x4bdea4]);
          })(_0x59ce29.arg);
        }
      } else {
        _0x28a2a2(_0x59ce29.arg === undefined ? null : _0x59ce29.arg);
      }
    }
  }
  function _0x24221b(_0x962582) {
    return _0x962582;
  }
  function _0x190041(_0x5dff12) {
    var _0x2e0d7a = /\b_Z[\w\d_]+/g;
    return _0x5dff12.replace(_0x2e0d7a, function (_0x414239) {
      var _0x13d072 = _0x24221b(_0x414239);
      if (_0x414239 === _0x13d072) {
        return _0x414239;
      } else {
        return _0x13d072 + " [" + _0x414239 + "]";
      }
    });
  }
  function _0x192860(_0x15273a, _0x21ab5e, _0x4e529d) {
    var _0x221269 = _0x3b068f["dynCall_" + _0x15273a];
    if (_0x4e529d && _0x4e529d.length) {
      return _0x221269.apply(null, [_0x21ab5e].concat(_0x4e529d));
    } else {
      return _0x221269.call(null, _0x21ab5e);
    }
  }
  function _0x340e8e(_0x83ba4d, _0x490ef9, _0x31516b) {
    return _0x192860(_0x83ba4d, _0x490ef9, _0x31516b);
  }
  function _0x7b7fc7() {
    var _0x349190 = new Error();
    if (!_0x349190.stack) {
      try {
        throw new Error();
      } catch (_0x2d8d0b) {
        _0x349190 = _0x2d8d0b;
      }
      if (!_0x349190.stack) {
        return "(no stack trace available)";
      }
    }
    return _0x349190.stack.toString();
  }
  var _0x39afbf = 0;
  function _0x54da6b() {
    return _0x2b6ac6 || _0x39afbf > 0;
  }
  function _0xe0170d() {
    var _0x283397 = _0x7b7fc7();
    if (_0x3b068f.extraStackTrace) {
      _0x283397 += "\n" + _0x3b068f.extraStackTrace();
    }
    return _0x190041(_0x283397);
  }
  function _0x2e4086(_0x463aa4, _0x5a1616, _0x466eef, _0x5931db, _0x30a2cb) {
    var _0x51c286 = _0x57f36f(_0x463aa4);
    var _0x27a065 = _0x57f36f(_0x5a1616);
    var _0x50d6fb = _0x57f36f(_0x466eef);
    var _0x1f2686 = _0x57f36f(_0x5931db);
    var _0x1a1c39 = _0x57f36f(_0x30a2cb);
    try {
      firebase.firestore().collection(_0x51c286).add(JSON.parse(_0x27a065)).then(function (_0x31e5d4) {
        window.unityInstance.SendMessage(_0x50d6fb, _0x1f2686, "Success: document added in collection " + _0x51c286);
      }).catch(function (_0x2978ec) {
        window.unityInstance.SendMessage(_0x50d6fb, _0x1a1c39, JSON.stringify(_0x2978ec, Object.getOwnPropertyNames(_0x2978ec)));
      });
    } catch (_0x1777d4) {
      window.unityInstance.SendMessage(_0x50d6fb, _0x1a1c39, JSON.stringify(_0x1777d4, Object.getOwnPropertyNames(_0x1777d4)));
    }
  }
  function _0x50c008(_0x563424, _0x159fa2, _0x1bc376, _0x1535bd, _0x18fa66, _0x1a1996, _0xee3256) {
    var _0x4412e5 = _0x57f36f(_0x563424);
    var _0x130436 = _0x57f36f(_0x159fa2);
    var _0x417335 = _0x57f36f(_0x1bc376);
    var _0x54ced6 = _0x57f36f(_0x1535bd);
    var _0x34f74e = _0x57f36f(_0x18fa66);
    var _0x41b173 = _0x57f36f(_0x1a1996);
    var _0x4d3bd1 = _0x57f36f(_0xee3256);
    try {
      var _0x1535bd = {};
      _0x1535bd[_0x417335] = firebase.firestore.FieldValue.arrayUnion(JSON.parse(_0x54ced6));
      firebase.firestore().collection(_0x4412e5).doc(_0x130436).update(_0x1535bd).then(function () {
        window.unityInstance.SendMessage(_0x34f74e, _0x41b173, "Success: element " + _0x54ced6 + " was added in " + _0x417335);
      }).catch(function (_0x40f00d) {
        window.unityInstance.SendMessage(_0x34f74e, _0x4d3bd1, JSON.stringify(_0x40f00d, Object.getOwnPropertyNames(_0x40f00d)));
      });
    } catch (_0x359e75) {
      window.unityInstance.SendMessage(_0x34f74e, _0x4d3bd1, JSON.stringify(_0x359e75, Object.getOwnPropertyNames(_0x359e75)));
    }
  }
  function _0x1f2056(_0x2a2c5b) {
    try {
      window.CrazyGames.SDK.user.addScore(_0x2a2c5b);
    } catch (_0x446306) {
      window.UnitySDK.logError("Error while calling addScore:", _0x446306);
    }
  }
  function _0x3111dc(_0x1d5b8e, _0x2437de) {
    try {
      window.CrazyGames.SDK.analytics.trackOrder(window.unityStringify(_0x1d5b8e), JSON.parse(window.unityStringify(_0x2437de)));
    } catch (_0x18d0d7) {
      window.UnitySDK.logError("Error while calling trackOrder:", _0x18d0d7);
    }
  }
  function _0x34174d(_0x4ef7a9) {
    const _0x5cc947 = document.createElement("textarea");
    _0x5cc947.value = window.unityStringify(_0x4ef7a9);
    document.body.appendChild(_0x5cc947);
    _0x5cc947.select();
    _0x5cc947.setSelectionRange(0, 99999);
    document.execCommand("copy");
    document.body.removeChild(_0x5cc947);
  }
  function _0x444801(_0x42bb4a, _0x589d05, _0x3533e5, _0xfb0ed4, _0x1f7824) {
    var _0x182663 = _0x57f36f(_0x42bb4a);
    var _0x223c94 = _0x57f36f(_0x589d05);
    var _0x17a282 = _0x57f36f(_0x3533e5);
    var _0x1e4e0c = _0x57f36f(_0xfb0ed4);
    var _0x49190b = _0x57f36f(_0x1f7824);
    try {
      firebase.auth().createUserWithEmailAndPassword(_0x182663, _0x223c94).then(function (_0x59127a) {
        window.unityInstance.SendMessage(_0x17a282, _0x1e4e0c, "Success: signed up for " + _0x182663);
      }).catch(function (_0x4529d4) {
        window.unityInstance.SendMessage(_0x17a282, _0x49190b, JSON.stringify(_0x4529d4, Object.getOwnPropertyNames(_0x4529d4)));
      });
    } catch (_0x15b98d) {
      window.unityInstance.SendMessage(_0x17a282, _0x49190b, JSON.stringify(_0x15b98d, Object.getOwnPropertyNames(_0x15b98d)));
    }
  }
  function _0x38ff99() {
    try {
      window.CrazyGames.SDK.data.clear();
    } catch (_0x2de408) {
      window.UnitySDK.logError("Error while calling clear:", _0x2de408);
    }
  }
  function _0x49b97e(_0x38e882) {
    var _0x1c6266 = null;
    try {
      _0x1c6266 = window.CrazyGames.SDK.data.getItem(window.unityStringify(_0x38e882));
    } catch (_0x424a7c) {
      window.UnitySDK.logError("Error while calling getItem:", _0x424a7c);
    }
    var _0x1314bc = _0x2705ae(_0x1c6266 + "") + 1;
    var _0x1b64d4 = _0x58620b(_0x1314bc);
    _0x5b4754(_0x1c6266, _0x1b64d4, _0x1314bc);
    return _0x1b64d4;
  }
  function _0x11c533(_0x249f10) {
    var _0x2ccc78 = null;
    try {
      _0x2ccc78 = window.CrazyGames.SDK.data.getItem(window.unityStringify(_0x249f10));
    } catch (_0x378866) {
      window.UnitySDK.logError("Error while calling getItem:", _0x378866);
    }
    return _0x2ccc78 !== null;
  }
  function _0x2761ed(_0x289b2e) {
    try {
      window.CrazyGames.SDK.data.removeItem(window.unityStringify(_0x289b2e));
    } catch (_0x29e5d0) {
      window.UnitySDK.logError("Error while calling removeItem:", _0x29e5d0);
    }
  }
  function _0x168eed(_0x1bcd7d, _0x52c512) {
    try {
      window.CrazyGames.SDK.data.setItem(window.unityStringify(_0x1bcd7d), window.unityStringify(_0x52c512));
    } catch (_0xd48c8b) {
      window.UnitySDK.logError("Error while calling setItem:", _0xd48c8b);
    }
  }
  function _0x58d5d3(_0x481d50, _0x884a3c, _0x2bc0e6, _0x3c999a, _0x845351) {
    var _0x4cf7ac = _0x57f36f(_0x481d50);
    var _0x41a095 = _0x57f36f(_0x884a3c);
    var _0x56b656 = _0x57f36f(_0x2bc0e6);
    var _0x5799fc = _0x57f36f(_0x3c999a);
    var _0x2fdf93 = _0x57f36f(_0x845351);
    try {
      firebase.firestore().collection(_0x4cf7ac).doc(_0x41a095).delete().then(function () {
        window.unityInstance.SendMessage(_0x56b656, _0x5799fc, "Success: document " + _0x41a095 + " was deleted");
      }).catch(function (_0x5e2d7b) {
        window.unityInstance.SendMessage(_0x56b656, _0x2fdf93, JSON.stringify(_0x5e2d7b, Object.getOwnPropertyNames(_0x5e2d7b)));
      });
    } catch (_0x48a0d7) {
      window.unityInstance.SendMessage(_0x56b656, _0x2fdf93, JSON.stringify(_0x48a0d7, Object.getOwnPropertyNames(_0x48a0d7)));
    }
  }
  function _0x2f186e(_0x5da333, _0x240568, _0xa0d4c8, _0x282d91, _0x328c09, _0x1e04c5) {
    var _0x1b0096 = _0x57f36f(_0x5da333);
    var _0x2685f4 = _0x57f36f(_0x240568);
    var _0x1def49 = _0x57f36f(_0xa0d4c8);
    var _0x183f52 = _0x57f36f(_0x282d91);
    var _0x54634d = _0x57f36f(_0x328c09);
    var _0x1f084a = _0x57f36f(_0x1e04c5);
    try {
      var _0x1121d8 = {};
      _0x1121d8[_0x1def49] = firebase.firestore.FieldValue.delete();
      firebase.firestore().collection(_0x1b0096).doc(_0x2685f4).update(_0x1121d8).then(function () {
        window.unityInstance.SendMessage(_0x183f52, _0x54634d, "Success: field " + _0x1def49 + " was deleted");
      }).catch(function (_0x135031) {
        window.unityInstance.SendMessage(_0x183f52, _0x1f084a, JSON.stringify(_0x135031, Object.getOwnPropertyNames(_0x135031)));
      });
    } catch (_0x40d9b2) {
      window.unityInstance.SendMessage(_0x183f52, _0x1f084a, JSON.stringify(_0x40d9b2, Object.getOwnPropertyNames(_0x40d9b2)));
    }
  }
  function _0x44ad3d(_0x38e257, _0x402551, _0x1c5362, _0x10a2f6) {
    var _0x376965 = _0x57f36f(_0x38e257);
    var _0x5938ea = _0x57f36f(_0x402551);
    var _0x33866d = _0x57f36f(_0x1c5362);
    var _0x197fed = _0x57f36f(_0x10a2f6);
    try {
      firebase.database().ref(_0x376965).remove().then(function (_0x4eb16b) {
        window.unityInstance.SendMessage(_0x5938ea, _0x33866d, "Success: " + _0x376965 + " was deleted");
      });
    } catch (_0x5f41ac) {
      window.unityInstance.SendMessage(_0x5938ea, _0x197fed, JSON.stringify(_0x5f41ac, Object.getOwnPropertyNames(_0x5f41ac)));
    }
  }
  function _0x1d5d9e(_0x3a6e1d, _0xffc8f3, _0x3ee085, _0x1aa3c4) {
    var _0x18bb3e = _0x57f36f(_0x3a6e1d);
    var _0x114b0b = _0x57f36f(_0xffc8f3);
    var _0x102392 = _0x57f36f(_0x3ee085);
    var _0x29a5b6 = _0x57f36f(_0x1aa3c4);
    try {
      firebase.storage().ref(_0x18bb3e).getDownloadURL().then(function (_0x1de3db) {
        var _0x4edde6 = new XMLHttpRequest();
        _0x4edde6.responseType = "arraybuffer";
        _0x4edde6.onload = function (_0x2c9456) {
          var _0x1e1eef = _0x4edde6.response;
          window.unityInstance.SendMessage(_0x114b0b, _0x102392, _0x534859(_0x1e1eef));
        };
        _0x4edde6.open("GET", _0x1de3db);
        _0x4edde6.send();
      }).catch(function (_0x5e4c25) {
        window.unityInstance.SendMessage(_0x114b0b, _0x29a5b6, JSON.stringify(_0x5e4c25, Object.getOwnPropertyNames(_0x5e4c25)));
      });
    } catch (_0x52cf8d) {
      window.unityInstance.SendMessage(_0x114b0b, _0x29a5b6, JSON.stringify(_0x52cf8d, Object.getOwnPropertyNames(_0x52cf8d)));
    }
    function _0x534859(_0xc4e7b3) {
      var _0x516354 = "";
      var _0x27bf6e = new Uint8Array(_0xc4e7b3);
      var _0x1b0473 = _0x27bf6e.byteLength;
      for (var _0x57c71b = 0; _0x57c71b < _0x1b0473; _0x57c71b++) {
        _0x516354 += String.fromCharCode(_0x27bf6e[_0x57c71b]);
      }
      return window.btoa(_0x516354);
    }
  }
  function _0x52d75e() {
    try {
      window[preroll.config.loaderObjectName].log("WGSDK: Getting WeeGoo InGame Ad");
      window[preroll.config.loaderObjectName].refetchAd();
    } catch (_0x18bfdf) {
      console.log("No WeeGooAFG implementation found!");
    }
  }
  function _0x208039(_0x3be382) {
    var _0x44d8ce = {
      adStarted: function () {
        _0x4f485c("GMSDKAdvertisement", "JSLibCallback_AdStarted");
      },
      adFinished: function () {
        _0x4f485c("GMSDKAdvertisement", "JSLibCallback_AdFinished");
      },
      adError: function (_0x58f432) {
        _0x4f485c("GMSDKAdvertisement", "JSLibCallback_AdError", JSON.stringify(_0x58f432));
      }
    };
    var _0x19519c = window.GMSOFT_GMADS_INFO.reward;
    var _0x169130 = _0x19519c[Math.floor(Math.random() * _0x19519c.length)];
    try {
      var _0x17da2c = document.createElement("div");
      _0x17da2c.id = "gm-ad-overlay";
      _0x17da2c.style.cssText = "\n          position: fixed;\n          top: 0;\n          left: 0;\n          width: 100%;\n          height: 100%;\n          background: rgba(0, 0, 0, 0.9);\n          z-index: 9999;\n          display: flex;\n          justify-content: center;\n          align-items: center;\n          flex-direction: column;\n        ";
      var _0x252c62 = document.createElement("div");
      _0x252c62.style.cssText = "\n          position: relative;\n          max-width: 90%;\n          max-height: 80%;\n          background: #000;\n          border-radius: 8px;\n          overflow: hidden;\n        ";
      var _0x2402ac = document.createElement("video");
      _0x2402ac.src = _0x169130.image;
      _0x2402ac.style.cssText = "\n          width: 100%;\n          height: 100%;\n          display: block;\n        ";
      _0x2402ac.autoplay = true;
      _0x2402ac.muted = true;
      _0x2402ac.preload = "auto";
      var _0x4110b0 = document.createElement("button");
      _0x4110b0.innerHTML = "Skip (5)";
      _0x4110b0.disabled = true;
      _0x4110b0.style.cssText = "\n          position: absolute;\n          top: 10px;\n          right: 10px;\n          background: rgba(0, 0, 0, 0.8);\n          color: white;\n          border: 1px solid #666;\n          border-radius: 6px;\n          padding: 10px 16px;\n          cursor: pointer;\n          font-size: 16px;\n          font-weight: bold;\n          z-index: 10001;\n          box-shadow: 0 2px 8px rgba(0,0,0,0.3);\n        ";
      _0x4110b0.disabled = true;
      _0x4110b0.style.opacity = "0.5";
      var _0x18595d = document.createElement("div");
      _0x18595d.style.cssText = "\n          position: absolute;\n          bottom: 0;\n          left: 0;\n          width: 100%;\n          height: 6px;\n          background: rgba(255, 255, 255, 0.3);\n          z-index: 10001;\n        ";
      var _0x15a5ed = document.createElement("div");
      _0x15a5ed.style.cssText = "\n          height: 100%;\n          width: 0%;\n          background: linear-gradient(90deg, #ff6b6b, #4ecdc4);\n          transition: width 0.1s ease;\n        ";
      var _0x879b5a = 5;
      var _0x29a5e4 = setInterval(function () {
        _0x879b5a--;
        if (_0x879b5a > 0) {
          _0x4110b0.innerHTML = "Skip (" + _0x879b5a + ")";
        } else {
          _0x4110b0.innerHTML = "Skip";
          _0x4110b0.disabled = false;
          _0x4110b0.style.opacity = "1";
          _0x4110b0.style.cursor = "pointer";
          clearInterval(_0x29a5e4);
        }
      }, 1000);
      function _0x1d39c4() {
        if (_0x17da2c && _0x17da2c.parentNode) {
          _0x17da2c.parentNode.removeChild(_0x17da2c);
        }
        clearInterval(_0x29a5e4);
        _0x44d8ce.adFinished();
      }
      function _0x49c0a7() {
        window.open(_0x169130.url, "_blank");
      }
      function _0x54097e() {
        if (_0x2402ac.duration && _0x2402ac.currentTime) {
          var _0x48862a = _0x2402ac.currentTime / _0x2402ac.duration * 100;
          _0x15a5ed.style.width = _0x48862a + "%";
        }
      }
      _0x2402ac.addEventListener("loadstart", function () {
        _0x44d8ce.adStarted();
      });
      _0x2402ac.addEventListener("timeupdate", function () {
        _0x54097e();
      });
      _0x2402ac.addEventListener("ended", function () {
        _0x1d39c4();
      });
      _0x2402ac.addEventListener("error", function (_0x18b1ef) {
        var _0x553932 = {
          message: "Video load error",
          code: _0x18b1ef.target.error ? _0x18b1ef.target.error.code : "unknown"
        };
        _0x44d8ce.adError(_0x553932);
        _0x1d39c4();
      });
      _0x2402ac.addEventListener("click", function () {
        _0x49c0a7();
      });
      _0x4110b0.addEventListener("click", function () {
        if (!_0x4110b0.disabled) {
          _0x1d39c4();
        }
      });
      _0x2402ac.addEventListener("contextmenu", function (_0x18cf1a) {
        _0x18cf1a.preventDefault();
      });
      _0x18595d.appendChild(_0x15a5ed);
      _0x252c62.appendChild(_0x2402ac);
      _0x252c62.appendChild(_0x4110b0);
      _0x252c62.appendChild(_0x18595d);
      _0x17da2c.appendChild(_0x252c62);
      document.body.appendChild(_0x17da2c);
      _0x2402ac.play().catch(function (_0x394a9b) {
        console.error("Video play error:", _0x394a9b);
        _0x44d8ce.adError({
          message: "Cannot play video",
          details: _0x394a9b.message
        });
        _0x1d39c4();
      });
    } catch (_0x3bade0) {
      console.error("Ad overlay creation error:", _0x3bade0);
      _0x44d8ce.adError({
        message: "Failed to create ad overlay",
        details: _0x3bade0.message
      });
    }
  }
  function _0x41982f() {
    try {
      console.log("Check local storage GM_SDK_GetVeryfiedSignature: ", window.GMSOFT_SIGNED);
      if (window.GMSOFT_SIGNED) {
        console.log("Local storage GM_SDK_GetVeryfiedSignature: ", window.GMSOFT_SIGNED);
        _0x4f485c("GmSoft", "OnGetVeryfiedSignature", window.GMSOFT_SIGNED);
        return;
      }
    } catch (_0x2cde48) {
      console.error("Error getting GM_SDK_GetVeryfiedSignature  ", _0x2cde48);
    }
    try {
      let _0x45003b = "hn=" + "https://gamea.azgames.io";
      let _0x489a09 = btoa(_0x45003b);
      let _0x1b1bcf = "https://api.cdnwave.com/sdkdom/keysigned";
      if (window.GMSOFT_OPTIONS && window.GMSOFT_OPTIONS.signedurl) {
        _0x1b1bcf = window.GMSOFT_OPTIONS.signedurl;
      }
      let _0xb0fd42 = _0x1b1bcf + "?params=" + _0x489a09;
      var _0x236263 = new XMLHttpRequest();
      let _0x4c59a1 = "";
      _0x236263.open("GET", _0xb0fd42, false);
      _0x236263.send(_0x4c59a1);
      let _0x3e9318 = _0x236263.responseText;
      window.GMSOFT_SIGNED = _0x3e9318;
      console.log("send request GM_SDK_GetVeryfiedSignature: ", window.GMSOFT_SIGNED);
      _0x4f485c("GmSoft", "OnGetVeryfiedSignature", window.GMSOFT_SIGNED);
    } catch (_0x360cea) {
      console.error("Error fetching GM_SDK_GetVeryfiedSignature: ", _0x360cea);
    }
  }
  function _0x40af0f() {
    let _0x103e8f = "https://gamea.azgames.io";
    _0x4f485c("GmSoft", "SetUnityHostName", _0x103e8f);
    _0x4f485c("GmSoft", "SetSDKType", window.GMSOFT_SDKTYPE);
  }
  function _0xdbd10b() {
    console.log("GM_SDK_StartGame");
    try {
      gmStartGame(function () {
        _0x4f485c("GmSoft", "SetGameInfoParam", JSON.stringify(window.GMSOFT_GAME_INFO));
      });
    } catch (_0x3760b8) {
      console.error("Error JS 12", _0x3760b8);
    }
    try {
      gmStartAds(function () {
        _0x4f485c("GmSoft", "SetAdParam", JSON.stringify(window.GMSOFT_ADS_INFO));
      });
    } catch (_0x45123c) {
      console.error("Error JS 20", _0x45123c);
    }
    try {
      document.addEventListener("gmsoftbanevent", _0x41a44c => {
        _0x4f485c("GmSoft", "LockGame", _0x41a44c.detail);
      });
    } catch (_0x4d98e9) {
      console.error("Error JS 28", _0x4d98e9);
    }
  }
  function _0xa906ae(_0x338582) {
    try {
      window[preroll.config.loaderObjectName].log("WGSDK: Sending game event");
      window[preroll.config.loaderObjectName].GameEvent(_0x338582);
    } catch (_0xc632a2) {
      console.log("No WeeGooAFG implementation found!");
    }
  }
  function _0x907968() {
    try {
      window.CrazyGames.SDK.game.gameplayStart();
    } catch (_0x8383a6) {
      window.UnitySDK.logError("Error while calling gameplayStart:", _0x8383a6);
    }
  }
  function _0x49091e() {
    try {
      window.CrazyGames.SDK.game.gameplayStop();
    } catch (_0x26cbc2) {
      window.UnitySDK.logError("Error while calling gameplayStop:", _0x26cbc2);
    }
  }
  function _0x5c3b0f() {
    var _0x43d8bf = firebaseConfig.projectId;
    var _0x2ba259 = _0x2705ae(_0x43d8bf) + 1;
    var _0x3d9702 = _0x58620b(_0x2ba259);
    _0x5b4754(_0x43d8bf, _0x3d9702, _0x2ba259);
    return _0x3d9702;
  }
  function _0x26da31(_0x35991c, _0x1b2e4c, _0x404e8a, _0xfc3b2c, _0x1ec0e5) {
    var _0x32b5a1 = _0x57f36f(_0x35991c);
    var _0xc269d7 = _0x57f36f(_0x1b2e4c);
    var _0x435ac0 = _0x57f36f(_0x404e8a);
    var _0xb4c091 = _0x57f36f(_0xfc3b2c);
    var _0x106845 = _0x57f36f(_0x1ec0e5);
    try {
      firebase.firestore().collection(_0x32b5a1).doc(_0xc269d7).get().then(function (_0x2baff7) {
        if (_0x2baff7.exists) {
          window.unityInstance.SendMessage(_0x435ac0, _0xb4c091, JSON.stringify(_0x2baff7.data()));
        } else {
          window.unityInstance.SendMessage(_0x435ac0, _0xb4c091, "null");
        }
      }).catch(function (_0x496cf6) {
        window.unityInstance.SendMessage(_0x435ac0, _0x106845, JSON.stringify(_0x496cf6, Object.getOwnPropertyNames(_0x496cf6)));
      });
    } catch (_0x366821) {
      window.unityInstance.SendMessage(_0x435ac0, _0x106845, JSON.stringify(_0x366821, Object.getOwnPropertyNames(_0x366821)));
    }
  }
  function _0x3943e2(_0x39654f, _0x23b715, _0x5e27a7, _0x256157) {
    var _0x3bee85 = _0x57f36f(_0x39654f);
    var _0x246366 = _0x57f36f(_0x23b715);
    var _0x26c28e = _0x57f36f(_0x5e27a7);
    var _0x4c8404 = _0x57f36f(_0x256157);
    try {
      firebase.firestore().collection(_0x3bee85).get().then(function (_0x4036b3) {
        var _0x5c5b61 = {};
        _0x4036b3.forEach(function (_0x35f3f7) {
          _0x5c5b61[_0x35f3f7.id] = _0x35f3f7.data();
        });
        window.unityInstance.SendMessage(_0x246366, _0x26c28e, JSON.stringify(_0x5c5b61));
      }).catch(function (_0x4fb86d) {
        window.unityInstance.SendMessage(_0x246366, _0x4c8404, JSON.stringify(_0x4fb86d, Object.getOwnPropertyNames(_0x4fb86d)));
      });
    } catch (_0x21273b) {
      window.unityInstance.SendMessage(_0x246366, _0x4c8404, JSON.stringify(_0x21273b, Object.getOwnPropertyNames(_0x21273b)));
    }
  }
  function _0x22a4d7() {
    var _0x8d5941 = window.CrazyGames.SDK.environment;
    var _0x499ef0 = _0x2705ae(_0x8d5941) + 1;
    var _0x5f1236 = _0x58620b(_0x499ef0);
    _0x5b4754(_0x8d5941, _0x5f1236, _0x499ef0);
    return _0x5f1236;
  }
  function _0x24c2c3() {
    var _0x46ab1b = JSON.stringify(window.CrazyGames.SDK.game.settings);
    var _0x5d9498 = _0x2705ae(_0x46ab1b) + 1;
    var _0x3a9147 = _0x58620b(_0x5d9498);
    _0x5b4754(_0x46ab1b, _0x3a9147, _0x5d9498);
    return _0x3a9147;
  }
  function _0x2167d4(_0x16eec8) {
    var _0x118f9a = new URLSearchParams(window.location.search);
    var _0x53a726 = _0x118f9a.get(window.unityStringify(_0x16eec8));
    if (_0x53a726 === null) {
      _0x53a726 = "";
    }
    var _0x66d47b = _0x2705ae(_0x53a726) + 1;
    var _0x2f6e4e = _0x58620b(_0x66d47b);
    _0x5b4754(_0x53a726, _0x2f6e4e, _0x66d47b);
    return _0x2f6e4e;
  }
  function _0x4a993d() {
    return window.CrazyGames.SDK.isQaTool;
  }
  function _0x7a0cf9(_0xd192eb, _0x1668b7, _0x53a2c7, _0x41f8a8) {
    var _0x20139c = _0x57f36f(_0xd192eb);
    var _0x185d75 = _0x57f36f(_0x1668b7);
    var _0x1ec36f = _0x57f36f(_0x53a2c7);
    var _0x521c8e = _0x57f36f(_0x41f8a8);
    try {
      firebase.database().ref(_0x20139c).once("value").then(function (_0x284b03) {
        window.unityInstance.SendMessage(_0x185d75, _0x1ec36f, JSON.stringify(_0x284b03.val()));
      });
    } catch (_0x456701) {
      window.unityInstance.SendMessage(_0x185d75, _0x521c8e, JSON.stringify(_0x456701, Object.getOwnPropertyNames(_0x456701)));
    }
  }
  function _0x1858dd() {
    var _0x38e9d6 = JSON.stringify(window.CrazyGames.SDK.user.systemInfo);
    var _0x430a62 = _0x2705ae(_0x38e9d6) + 1;
    var _0xbcbc38 = _0x58620b(_0x430a62);
    _0x5b4754(_0x38e9d6, _0xbcbc38, _0x430a62);
    return _0xbcbc38;
  }
  function _0x9ff3b4() {
    window.CrazyGames.SDK.user.getUser().then(function (_0x5ba0cd) {
      _0x4f485c("CrazySDKSingleton", "JSLibCallback_GetUser", JSON.stringify({
        userJson: JSON.stringify(_0x5ba0cd)
      }));
    }).catch(function (_0x28d00a) {
      _0x4f485c("CrazySDKSingleton", "JSLibCallback_GetUser", JSON.stringify({
        errorJson: JSON.stringify(_0x28d00a)
      }));
    });
  }
  function _0x9614e7() {
    window.CrazyGames.SDK.user.getUserToken().then(function (_0x33f368) {
      _0x4f485c("CrazySDKSingleton", "JSLibCallback_GetUserToken", JSON.stringify({
        token: _0x33f368
      }));
    }).catch(function (_0x586637) {
      _0x4f485c("CrazySDKSingleton", "JSLibCallback_GetUserToken", JSON.stringify({
        errorJson: JSON.stringify(_0x586637)
      }));
    });
  }
  function _0x5adcc9() {
    window.CrazyGames.SDK.user.getXsollaUserToken().then(function (_0x11f85a) {
      _0x4f485c("CrazySDKSingleton", "JSLibCallback_GetXsollaUserToken", JSON.stringify({
        token: _0x11f85a
      }));
    }).catch(function (_0x3225e9) {
      _0x4f485c("CrazySDKSingleton", "JSLibCallback_GetXsollaUserToken", JSON.stringify({
        errorJson: JSON.stringify(_0x3225e9)
      }));
    });
  }
  function _0xb7dda8() {}
  function _0x1d3508() {
    console.log("afg.ready: " + afg.ready);
    if (afg.ready) {
      _0x4f485c("H5Adverisement", "PreloadRewardedVideoCallback", 1);
      afg.adBreak({
        type: "reward",
        name: "reward ads",
        beforeReward: function (_0x5900a9) {
          this._showRewardAdFn = _0x5900a9;
          console.log("[H5 Ads] before reward");
        }.bind(this),
        adViewed: function () {
          this._showRewardAdFn = null;
          _0x4f485c("H5Adverisement", "RewardedVideoSuccessCallback");
          console.log("[H5 Ads] ad viewed");
        }.bind(this),
        adDismissed: function () {
          this._showRewardAdFn = null;
          _0x4f485c("H5Adverisement", "RewardedVideoFailureCallback");
          console.log("[H5 Ads] ad failure");
        }.bind(this),
        adBreakDone: function (_0x520c35) {
          console.log("[H5 Ads] Reward break done");
          _0x4f485c("H5Adverisement", "ResumeGameCallback");
        }.bind(this)
      });
    } else {
      console.log("[H5 Ads] no reward ads");
      _0x4f485c("H5Adverisement", "PreloadRewardedVideoCallback", 0);
    }
  }
  function _0x398623() {
    if (afg.ready) {
      afg.adBreak({
        type: "next",
        name: "next",
        beforeAd: function () {
          afg.onBeforeAd();
          console.log("[H5 Ads] Before ad");
          _0x4f485c("H5Adverisement", "PauseGameCallback");
        }.bind(this),
        adBreakDone: function () {
          console.log("[H5 Ads] Ad break done");
          _0x4f485c("H5Adverisement", "ResumeGameCallback");
        }.bind(this)
      });
    } else {
      console.log("no " + adType + " ads");
      _0x4f485c("H5Adverisement", "ResumeGameCallback");
    }
  }
  function _0x5f1555() {
    if (this._showRewardAdFn) {
      _0x4f485c("H5Adverisement", "PauseGameCallback");
      this._showRewardAdFn();
    } else {
      _0x4f485c("H5Adverisement", "ResumeGameCallback");
    }
  }
  function _0x565c7b() {
    try {
      window.CrazyGames.SDK.game.happytime();
    } catch (_0x421c72) {
      window.UnitySDK.logError("Error while calling happytime:", _0x421c72);
    }
  }
  function _0x3f5ed4() {
    try {
      window.CrazyGames.SDK.game.hideInviteButton();
    } catch (_0x53bef0) {
      window.UnitySDK.logError("Error while calling hideInviteButton:", _0x53bef0);
    }
  }
  function _0x2ef0e2(_0x472cc0, _0x2673b8, _0x1df97a, _0x343259, _0x423231, _0x511b1b, _0x291a4a) {
    var _0x4b2e0e = _0x57f36f(_0x472cc0);
    var _0x3c194f = _0x57f36f(_0x2673b8);
    var _0x4ebac8 = _0x57f36f(_0x1df97a);
    var _0x34455a = _0x57f36f(_0x423231);
    var _0x3e7d9b = _0x57f36f(_0x511b1b);
    var _0xbcfaa7 = _0x57f36f(_0x291a4a);
    try {
      var _0x53121d = {};
      _0x53121d[_0x4ebac8] = firebase.firestore.FieldValue.increment(_0x343259);
      firebase.firestore().collection(_0x4b2e0e).doc(_0x3c194f).update(_0x53121d).then(function () {
        window.unityInstance.SendMessage(_0x34455a, _0x3e7d9b, "Success: incremented " + _0x4ebac8 + " by " + _0x343259);
      }).catch(function (_0x52db8f) {
        window.unityInstance.SendMessage(_0x34455a, _0xbcfaa7, JSON.stringify(_0x52db8f, Object.getOwnPropertyNames(_0x52db8f)));
      });
    } catch (_0x263da0) {
      window.unityInstance.SendMessage(_0x34455a, _0xbcfaa7, JSON.stringify(_0x263da0, Object.getOwnPropertyNames(_0x263da0)));
    }
  }
  function _0x44c362(_0x37257b) {
    if (typeof _0x57f36f !== "undefined") {
      window.unityStringify = _0x57f36f;
    } else {
      window.unityStringify = _0x57f36f;
    }
    window.UnitySDK = {
      version: window.unityStringify(_0x37257b),
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
        var _0x4958f1 = Array.prototype.slice.call(arguments);
        _0x4958f1.unshift("[JsLib]");
        console.error.apply(console, _0x4958f1);
      }
    };
    var _0x35d52d = {
      wrapper: {
        engine: "unity",
        sdkVersion: window.unityStringify(_0x37257b)
      }
    };
    var _0x595bfd = document.createElement("script");
    _0x595bfd.src = "https://sdk.crazygames.com/crazygames-sdk-v3.js";
    document.head.appendChild(_0x595bfd);
    _0x595bfd.addEventListener("load", function () {
      window.CrazyGames.SDK.init(_0x35d52d).then(function () {
        _0x4f485c("CrazySDKSingleton", "JSLibCallback_Init");
        window.CrazyGames.SDK.ad.hasAdblock().then(function (_0x4a44e2) {
          _0x4f485c("CrazySDKSingleton", "JSLibCallback_AdblockDetectionResult", _0x4a44e2 ? 1 : 0);
        }).catch(function (_0x38b059) {
          window.UnitySDK.logError("Error while checking adblock:", _0x38b059);
          _0x4f485c("CrazySDKSingleton", "JSLibCallback_AdblockDetectionResult", 0);
        });
        window.CrazyGames.SDK.user.addAuthListener(function (_0x2cf4e7) {
          _0x4f485c("CrazySDKSingleton", "JSLibCallback_AuthListener", JSON.stringify({
            userJson: JSON.stringify(_0x2cf4e7)
          }));
        });
      });
    });
  }
  function _0x443306() {
    return window.CrazyGames.SDK.user.isUserAccountAvailable;
  }
  var _0xf03f7d = null;
  var _0x51e39b = 0;
  function _0x502ba4() {
    return _0xf03f7d && _0xf03f7d.activated || _0x51e39b != 0;
  }
  var _0xbee32 = 1;
  var _0x12d670 = {
    x: 0,
    y: 0,
    z: 0
  };
  function _0x46cb8f() {
    _0x12d670 = {
      x: _0xf03f7d.x * _0xbee32,
      y: _0xf03f7d.y * _0xbee32,
      z: _0xf03f7d.z * _0xbee32
    };
    if (_0x51e39b != 0) {
      _0x440970(_0x51e39b, _0x12d670.x, _0x12d670.y, _0x12d670.z);
    }
  }
  var _0x3371b9 = 0;
  var _0x24e585 = 0;
  var _0x355380 = 0;
  var _0x45b455 = 0;
  var _0x1c6e98 = 0;
  function _0x1c354b(_0x5554d2, _0x98793c) {
    var _0x4211bb = {
      x: _0x5554d2.x - _0x98793c.x,
      y: _0x5554d2.y - _0x98793c.y,
      z: _0x5554d2.z - _0x98793c.z
    };
    var _0x591c73 = _0x4211bb.x * _0x4211bb.x + _0x4211bb.y * _0x4211bb.y + _0x4211bb.z * _0x4211bb.z;
    var _0x55f9f4 = {
      x: _0x5554d2.x + _0x98793c.x,
      y: _0x5554d2.y + _0x98793c.y,
      z: _0x5554d2.z + _0x98793c.z
    };
    var _0x13ecfa = _0x55f9f4.x * _0x55f9f4.x + _0x55f9f4.y * _0x55f9f4.y + _0x55f9f4.z * _0x55f9f4.z;
    if (_0x591c73 <= _0x13ecfa) {
      return _0x4211bb;
    } else {
      return _0x55f9f4;
    }
  }
  function _0x1ca85e(_0x141df2) {
    var _0xb97b93 = {
      x: _0x141df2.accelerationIncludingGravity.x * _0xbee32,
      y: _0x141df2.accelerationIncludingGravity.y * _0xbee32,
      z: _0x141df2.accelerationIncludingGravity.z * _0xbee32
    };
    if (_0x51e39b != 0) {
      _0x440970(_0x51e39b, _0xb97b93.x, _0xb97b93.y, _0xb97b93.z);
    }
    var _0x1bed1d = {
      x: _0x141df2.acceleration.x * _0xbee32,
      y: _0x141df2.acceleration.y * _0xbee32,
      z: _0x141df2.acceleration.z * _0xbee32
    };
    if (_0x355380 != 0) {
      _0x440970(_0x355380, _0x1bed1d.x, _0x1bed1d.y, _0x1bed1d.z);
    }
    if (_0x45b455 != 0) {
      var _0x48267 = _0x1c354b(_0xb97b93, _0x1bed1d);
      _0x440970(_0x45b455, _0x48267.x, _0x48267.y, _0x48267.z);
    }
    if (_0x1c6e98 != 0) {
      var _0x7c5983 = Math.PI / 180;
      _0x440970(_0x1c6e98, _0x141df2.rotationRate.alpha * _0x7c5983, _0x141df2.rotationRate.beta * _0x7c5983, _0x141df2.rotationRate.gamma * _0x7c5983);
    }
  }
  var _0x488140 = 0;
  function _0x38d1ba(_0x45a8ee) {
    if (_0x45a8ee & 1) {
      if (typeof DeviceOrientationEvent.requestPermission === "function") {
        DeviceOrientationEvent.requestPermission().then(function (_0x5e79d4) {
          if (_0x5e79d4 === "granted") {
            _0x488140 &= ~1;
          } else {
            _0x5ab828("DeviceOrientationEvent permission not granted");
          }
        }).catch(function (_0x2e108d) {
          _0x5ab828(_0x2e108d);
          _0x488140 |= 1;
        });
      }
    }
    if (_0x45a8ee & 2) {
      if (typeof DeviceMotionEvent.requestPermission === "function") {
        DeviceMotionEvent.requestPermission().then(function (_0x8fb23) {
          if (_0x8fb23 === "granted") {
            _0x488140 &= ~2;
          } else {
            _0x5ab828("DeviceMotionEvent permission not granted");
          }
        }).catch(function (_0x11b88e) {
          _0x5ab828(_0x11b88e);
          _0x488140 |= 2;
        });
      }
    }
  }
  function _0x5299e3() {
    if (_0x51e39b == 0 && _0x355380 == 0 && _0x45b455 == 0 && _0x1c6e98 == 0) {
      _0x38d1ba(2);
      window.addEventListener("devicemotion", _0x1ca85e);
    }
  }
  function _0x3d4e5c() {
    var _0x444cdb = 9.80665;
    _0xbee32 = /(iPhone|iPad|Macintosh)/i.test(navigator.userAgent) ? 1 / _0x444cdb : -1 / _0x444cdb;
  }
  function _0x44e403(_0x13b6ef, _0x53cfbc) {
    _0x3d4e5c();
    if (typeof Accelerometer === "undefined") {
      _0x5299e3();
      if (_0x13b6ef != 0) {
        _0x51e39b = _0x13b6ef;
      }
      return;
    }
    if (_0x13b6ef != 0) {
      _0x51e39b = _0x13b6ef;
    }
    function _0xe4c4d8(_0x285794) {
      _0xf03f7d = new Accelerometer({
        frequency: _0x285794,
        referenceFrame: "device"
      });
      _0xf03f7d.addEventListener("reading", _0x46cb8f);
      _0xf03f7d.addEventListener("error", function (_0x397ea2) {
        _0x5ab828(_0x397ea2.error ? _0x397ea2.error : _0x397ea2);
      });
      _0xf03f7d.start();
      _0x24e585 = _0x285794;
    }
    if (_0xf03f7d) {
      if (_0x24e585 != _0x53cfbc) {
        _0xf03f7d.stop();
        _0xf03f7d.removeEventListener("reading", _0x46cb8f);
        _0xe4c4d8(_0x53cfbc);
      }
    } else if (_0x3371b9 != 0) {
      _0x3371b9 = _0x53cfbc;
    } else {
      _0x3371b9 = _0x53cfbc;
      navigator.permissions.query({
        name: "accelerometer"
      }).then(function (_0x1197c2) {
        if (_0x1197c2.state === "granted") {
          _0xe4c4d8(_0x3371b9);
        } else {
          _0x5ab828("No permission to use Accelerometer.");
        }
        _0x3371b9 = 0;
      });
    }
  }
  function _0x5077c1() {
    if (_0x51e39b == 0 && _0x355380 == 0 && _0x45b455 == 0 && _0x1c6e98 == 0) {
      window.removeEventListener("devicemotion", _0xa4962c);
    }
  }
  function _0x56a116() {
    if (_0xf03f7d) {
      if (typeof GravitySensor !== "undefined" || _0x45b455 == 0) {
        _0xf03f7d.stop();
        _0xf03f7d.removeEventListener("reading", _0x46cb8f);
        _0xf03f7d = null;
      }
      _0x51e39b = 0;
      _0x24e585 = 0;
    } else if (_0x51e39b != 0) {
      _0x51e39b = 0;
      _0x5077c1();
    }
  }
  function _0x5acc93(_0x2062d8, _0x1edda4) {
    var _0x239858 = "";
    for (var _0x3d9c16 = 0; _0x3d9c16 < _0x1edda4; _0x3d9c16++) {
      _0x239858 += String.fromCharCode(_0x479b38[_0x2062d8 + _0x3d9c16]);
    }
    _0x3b068f.canvas.style.cursor = "url(data:image/cur;base64," + btoa(_0x239858) + "),default";
  }
  function _0x10240e(_0x11f031) {
    _0x3b068f.canvas.style.cursor = _0x11f031 ? "default" : "none";
  }
  function _0x586295(_0x3eed8b) {
    if (typeof window.CSS !== "undefined" && typeof window.CSS.escape !== "undefined") {
      return window.CSS.escape(_0x3eed8b);
    }
    return _0x3eed8b.replace(/(#|\.|\+|\[|\]|\(|\)|\{|\})/g, "\\$1");
  }
  function _0x2f5de9() {
    var _0x2f529d = _0x3b068f.canvas ? _0x3b068f.canvas.id : "unity-canvas";
    return "#" + _0x586295(_0x2f529d);
  }
  function _0x5ce3e0(_0x539ad4, _0x274c98, _0x5a5561, _0x210957) {
    var _0x49f357 = document.querySelector(_0x2f5de9());
    var _0x183d74 = _0x49f357 && _0x49f357.getBoundingClientRect();
    _0x59624f[_0x5a5561 >> 2] = _0x539ad4 - (_0x183d74 ? _0x183d74.left : 0);
    _0x59624f[_0x210957 >> 2] = _0x274c98 - (_0x183d74 ? _0x183d74.top : 0);
  }
  function _0x10f513(_0x45c25f) {
    var _0x54ca61 = _0x2705ae(_0x45c25f) + 1;
    var _0x1830f8 = _0x58620b(_0x54ca61);
    _0x5b4754(_0x45c25f, _0x1830f8, _0x54ca61);
    return _0x1830f8;
  }
  function _0x254fc5() {
    var _0x29bb75 = _0x2f5de9();
    if (_0x254fc5.selector != _0x29bb75) {
      _0x41603f(_0x254fc5.ptr);
      _0x254fc5.ptr = _0x10f513(_0x29bb75);
      _0x254fc5.selector = _0x29bb75;
    }
    return _0x254fc5.ptr;
  }
  function _0x22d124(_0x6a21ef) {
    var _0x27f352 = _0x57f36f(_0x6a21ef);
    try {
      eval(_0x27f352);
    } catch (_0x52892b) {
      console.error(_0x52892b);
    }
  }
  function _0x1af070(_0x4d9b1a) {
    var _0x1483d2 = _0x57f36f(_0x4d9b1a);
    window.open(_0x1483d2, "_blank", "");
  }
  var _0x233025 = {
    numPendingSync: 0,
    syncInternal: 1000,
    syncInProgress: false,
    sync: function (_0x2c979d) {
      if (_0x2c979d) {
        if (_0x233025.numPendingSync == 0) {
          return;
        }
      } else if (_0x233025.syncInProgress) {
        _0x233025.numPendingSync++;
        return;
      }
      _0x233025.syncInProgress = true;
      _0xee3f43.syncfs(false, function (_0xf649f0) {
        _0x233025.syncInProgress = false;
      });
      _0x233025.numPendingSync = 0;
    }
  };
  function _0x2c5d08() {
    _0x3b068f.setInterval(function () {
      _0x233025.sync(true);
    }, _0x233025.syncInternal);
  }
  function _0x429de8() {
    _0x233025.sync(false);
  }
  var _0x4c084c = null;
  function _0x99995c() {
    if (typeof GravitySensor !== "undefined") {
      return _0x4c084c && _0x4c084c.activated;
    } else {
      return _0x45b455 != 0;
    }
  }
  function _0x46a229() {
    if (_0x45b455 != 0) {
      _0x440970(_0x45b455, _0x4c084c.x * _0xbee32, _0x4c084c.y * _0xbee32, _0x4c084c.z * _0xbee32);
    }
  }
  var _0x2a9b9b = 0;
  var _0xafe7ba = null;
  function _0x459e8f() {
    var _0x5a3db3 = {
      x: _0xafe7ba.x * _0xbee32,
      y: _0xafe7ba.y * _0xbee32,
      z: _0xafe7ba.z * _0xbee32
    };
    if (_0x355380 != 0) {
      _0x440970(_0x355380, _0x5a3db3.x, _0x5a3db3.y, _0x5a3db3.z);
    }
    if (_0x45b455 != 0 && typeof GravitySensor === "undefined") {
      var _0x506840 = _0x1c354b(_0x12d670, _0x5a3db3);
      _0x440970(_0x45b455, _0x506840.x, _0x506840.y, _0x506840.z);
    }
  }
  var _0x160756 = 0;
  var _0x4435b9 = 0;
  function _0x46d34b(_0x324272, _0x5141f2) {
    _0x3d4e5c();
    if (typeof LinearAccelerationSensor === "undefined") {
      _0x5299e3();
      if (_0x324272 != 0) {
        _0x355380 = _0x324272;
      }
      return;
    }
    if (_0x324272 != 0) {
      _0x355380 = _0x324272;
    }
    function _0x1995f8(_0x222ab1) {
      _0xafe7ba = new LinearAccelerationSensor({
        frequency: _0x222ab1,
        referenceFrame: "device"
      });
      _0xafe7ba.addEventListener("reading", _0x459e8f);
      _0xafe7ba.addEventListener("error", function (_0x36c608) {
        _0x5ab828(_0x36c608.error ? _0x36c608.error : _0x36c608);
      });
      _0xafe7ba.start();
      _0x4435b9 = _0x222ab1;
    }
    if (_0xafe7ba) {
      if (_0x4435b9 != _0x5141f2) {
        _0xafe7ba.stop();
        _0xafe7ba.removeEventListener("reading", _0x459e8f);
        _0x1995f8(_0x5141f2);
      }
    } else if (_0x160756 != 0) {
      _0x160756 = _0x5141f2;
    } else {
      _0x160756 = _0x5141f2;
      navigator.permissions.query({
        name: "accelerometer"
      }).then(function (_0x527c3b) {
        if (_0x527c3b.state === "granted") {
          _0x1995f8(_0x160756);
        } else {
          _0x5ab828("No permission to use LinearAccelerationSensor.");
        }
        _0x160756 = 0;
      });
    }
  }
  function _0x5a9d30(_0x91891, _0x4206f7) {
    if (typeof GravitySensor === "undefined") {
      _0x44e403(0, Math.max(_0x4206f7, _0x24e585));
      _0x46d34b(0, Math.max(_0x4206f7, _0x4435b9));
      _0x45b455 = _0x91891;
      return;
    }
    _0x3d4e5c();
    _0x45b455 = _0x91891;
    function _0xc3f962(_0x38c19d) {
      _0x4c084c = new GravitySensor({
        frequency: _0x38c19d,
        referenceFrame: "device"
      });
      _0x4c084c.addEventListener("reading", _0x46a229);
      _0x4c084c.addEventListener("error", function (_0x554b00) {
        _0x5ab828(_0x554b00.error ? _0x554b00.error : _0x554b00);
      });
      _0x4c084c.start();
    }
    if (_0x4c084c) {
      _0x4c084c.stop();
      _0x4c084c.removeEventListener("reading", _0x46a229);
      _0xc3f962(_0x4206f7);
    } else if (_0x2a9b9b != 0) {
      _0x2a9b9b = _0x4206f7;
    } else {
      _0x2a9b9b = _0x4206f7;
      navigator.permissions.query({
        name: "accelerometer"
      }).then(function (_0x4a61d4) {
        if (_0x4a61d4.state === "granted") {
          _0xc3f962(_0x2a9b9b);
        } else {
          _0x5ab828("No permission to use GravitySensor.");
        }
        _0x2a9b9b = 0;
      });
    }
  }
  function _0x1a70e2() {
    if (_0xafe7ba) {
      if (typeof GravitySensor !== "undefined" || _0x45b455 == 0) {
        _0xafe7ba.stop();
        _0xafe7ba.removeEventListener("reading", _0x459e8f);
        _0xafe7ba = null;
      }
      _0x355380 = 0;
      _0x4435b9 = 0;
    } else if (_0x355380 != 0) {
      _0x355380 = 0;
      _0x5077c1();
    }
  }
  function _0x445a8c() {
    _0x45b455 = 0;
    if (typeof GravitySensor === "undefined") {
      if (_0x51e39b == 0) {
        _0x56a116();
      }
      if (_0x355380 == 0) {
        _0x1a70e2();
      }
      return;
    }
    if (_0x4c084c) {
      _0x4c084c.stop();
      _0x4c084c.removeEventListener("reading", _0x46a229);
      _0x4c084c = null;
    }
  }
  function _0x1d08ed(_0x23a01f) {
    try {
      (function () {
        _0x3c8e57.call(null, _0x23a01f);
      })();
    } catch (_0x46aa29) {
      console.warn(_0x46aa29);
    }
  }
  var _0x5fe723 = null;
  function _0x432bd8() {
    return _0x5fe723 && _0x5fe723.activated || _0x1c6e98 != 0;
  }
  function _0x4cb0f6() {
    if (_0x1c6e98 != 0) {
      _0x440970(_0x1c6e98, _0x5fe723.x, _0x5fe723.y, _0x5fe723.z);
    }
  }
  var _0x24f7f9 = 0;
  function _0xfd7208(_0x33b427, _0x10df4e) {
    if (typeof Gyroscope === "undefined") {
      _0x5299e3();
      _0x1c6e98 = _0x33b427;
      return;
    }
    _0x1c6e98 = _0x33b427;
    function _0x28f560(_0x1aa05b) {
      _0x5fe723 = new Gyroscope({
        frequency: _0x1aa05b,
        referenceFrame: "device"
      });
      _0x5fe723.addEventListener("reading", _0x4cb0f6);
      _0x5fe723.addEventListener("error", function (_0x59b12a) {
        _0x5ab828(_0x59b12a.error ? _0x59b12a.error : _0x59b12a);
      });
      _0x5fe723.start();
    }
    if (_0x5fe723) {
      _0x5fe723.stop();
      _0x5fe723.removeEventListener("reading", _0x4cb0f6);
      _0x28f560(_0x10df4e);
    } else if (_0x24f7f9 != 0) {
      _0x24f7f9 = _0x10df4e;
    } else {
      _0x24f7f9 = _0x10df4e;
      navigator.permissions.query({
        name: "gyroscope"
      }).then(function (_0x45fa6a) {
        if (_0x45fa6a.state === "granted") {
          _0x28f560(_0x24f7f9);
        } else {
          _0x5ab828("No permission to use Gyroscope.");
        }
        _0x24f7f9 = 0;
      });
    }
  }
  function _0x52ce26() {
    if (_0x5fe723) {
      _0x5fe723.stop();
      _0x5fe723.removeEventListener("reading", _0x4cb0f6);
      _0x5fe723 = null;
      _0x1c6e98 = 0;
    } else if (_0x1c6e98 != 0) {
      _0x1c6e98 = 0;
      _0x5077c1();
    }
  }
  function _0x54665d() {
    const _0x57efcb = function (_0x16b91e) {
      if (_0x16b91e.target.localName !== "canvas") {
        _0x18848c();
      }
    };
    document.addEventListener("contextmenu", _0x57efcb);
    _0x3b068f.deinitializers.push(function () {
      document.removeEventListener("contextmenu", _0x57efcb);
    });
  }
  function _0x5abe4c() {
    return _0xafe7ba && _0xafe7ba.activated || _0x355380 != 0;
  }
  function _0x5d25da(_0x4ddf23, _0x7d8b2d) {
    var _0x55abca = _0x57f36f(_0x4ddf23);
    if (typeof dump == "function") {
      dump(_0x55abca);
    }
    switch (_0x7d8b2d) {
      case 0:
      case 1:
      case 4:
        console.error(_0x55abca);
        return;
      case 2:
        console.warn(_0x55abca);
        return;
      case 3:
      case 5:
        console.log(_0x55abca);
        return;
      default:
        console.error("Unknown console message type!");
        console.error(_0x55abca);
    }
  }
  function _0xb9f4e7(_0x1d291a, _0x5a3435) {
    var _0x5d596d = _0xe0170d();
    if (_0x1d291a) {
      _0x5b4754(_0x5d596d, _0x1d291a, _0x5a3435);
    }
    return _0x2705ae(_0x5d596d);
  }
  var _0x52943c = null;
  var _0x41be01 = 0;
  function _0x377835() {
    return _0x52943c && _0x52943c.activated || _0x41be01 != 0;
  }
  function _0x4ed302() {
    if (_0x41be01 != 0) {
      _0x39a42b(_0x41be01, _0x52943c.quaternion[0], _0x52943c.quaternion[1], _0x52943c.quaternion[2], _0x52943c.quaternion[3]);
    }
  }
  var _0x1fb887 = 0;
  function _0xa4962c(_0x13f517) {
    if (_0x41be01) {
      var _0x47ab69 = Math.PI / 180;
      var _0x113d08 = _0x13f517.beta * _0x47ab69;
      var _0x485754 = _0x13f517.gamma * _0x47ab69;
      var _0x4191fe = _0x13f517.alpha * _0x47ab69;
      var _0x52d747 = Math.cos(_0x113d08 / 2);
      var _0x19bb64 = Math.sin(_0x113d08 / 2);
      var _0x512558 = Math.cos(_0x485754 / 2);
      var _0x21e1a0 = Math.sin(_0x485754 / 2);
      var _0x3e8ecd = Math.cos(_0x4191fe / 2);
      var _0x2f8987 = Math.sin(_0x4191fe / 2);
      var _0x101b95 = _0x19bb64 * _0x512558 * _0x3e8ecd - _0x52d747 * _0x21e1a0 * _0x2f8987;
      var _0xa67014 = _0x52d747 * _0x21e1a0 * _0x3e8ecd + _0x19bb64 * _0x512558 * _0x2f8987;
      var _0x3c6224 = _0x52d747 * _0x512558 * _0x2f8987 + _0x19bb64 * _0x21e1a0 * _0x3e8ecd;
      var _0x378a90 = _0x52d747 * _0x512558 * _0x3e8ecd - _0x19bb64 * _0x21e1a0 * _0x2f8987;
      _0x39a42b(_0x41be01, _0x101b95, _0xa67014, _0x3c6224, _0x378a90);
    }
  }
  function _0x3990ce(_0x51bf90, _0x2cb1dd) {
    if (typeof RelativeOrientationSensor === "undefined") {
      if (_0x41be01 == 0) {
        _0x41be01 = _0x51bf90;
        _0x38d1ba(1);
        window.addEventListener("deviceorientation", _0xa4962c);
      }
      return;
    }
    _0x41be01 = _0x51bf90;
    function _0xe97bb(_0x2ca41b) {
      _0x52943c = new RelativeOrientationSensor({
        frequency: _0x2ca41b,
        referenceFrame: "device"
      });
      _0x52943c.addEventListener("reading", _0x4ed302);
      _0x52943c.addEventListener("error", function (_0x139e26) {
        _0x5ab828(_0x139e26.error ? _0x139e26.error : _0x139e26);
      });
      _0x52943c.start();
    }
    if (_0x52943c) {
      _0x52943c.stop();
      _0x52943c.removeEventListener("reading", _0x4ed302);
      _0xe97bb(_0x2cb1dd);
    } else if (_0x1fb887 != 0) {
      _0x1fb887 = _0x2cb1dd;
    } else {
      _0x1fb887 = _0x2cb1dd;
      Promise.all([navigator.permissions.query({
        name: "accelerometer"
      }), navigator.permissions.query({
        name: "gyroscope"
      })]).then(function (_0xae9c36) {
        if (_0xae9c36.every(function (_0x25aa84) {
          return _0x25aa84.state === "granted";
        })) {
          _0xe97bb(_0x1fb887);
        } else {
          _0x5ab828("No permissions to use RelativeOrientationSensor.");
        }
        _0x1fb887 = 0;
      });
    }
  }
  function _0x10a654() {
    if (_0x52943c) {
      _0x52943c.stop();
      _0x52943c.removeEventListener("reading", _0x4ed302);
      _0x52943c = null;
    } else if (_0x41be01 != 0) {
      window.removeEventListener("deviceorientation", _0xa4962c);
    }
    _0x41be01 = 0;
  }
  function _0x50a67b() {
    if (_0x488140 == 0) {
      return;
    }
    _0x38d1ba(_0x488140);
  }
  function _0x3cd35a() {
    _0x3b068f.QuitCleanup();
  }
  var _0x117bd9 = 0;
  function _0x57f6f9() {
    if (_0x117bd9) {
      _0x38921c(_0x117bd9, window.innerWidth, window.innerHeight, screen.orientation ? screen.orientation.angle : window.orientation);
    }
  }
  function _0x1b3936() {
    _0x117bd9 = 0;
    window.removeEventListener("resize", _0x57f6f9);
    if (screen.orientation) {
      screen.orientation.removeEventListener("change", _0x57f6f9);
    }
  }
  function _0x27bc28(_0x2f0925) {
    if (!_0x117bd9) {
      if (screen.orientation) {
        screen.orientation.addEventListener("change", _0x57f6f9);
      }
      window.addEventListener("resize", _0x57f6f9);
      _0x117bd9 = _0x2f0925;
      setTimeout(_0x57f6f9, 0);
    }
  }
  var _0x1e943f = -1;
  var _0x1792ca = -1;
  var _0x3842ab = -1;
  function _0x43848b(_0x333d34) {
    if (!screen.orientation || !screen.orientation.lock) {
      return;
    }
    function _0x167326() {
      _0x1792ca = _0x1e943f;
      var _0x33c61b = ["any", 0, "landscape", "portrait", "portrait-primary", "portrait-secondary", "landscape-primary", "landscape-secondary"];
      var _0x33fafd = _0x33c61b[_0x1792ca];
      screen.orientation.lock(_0x33fafd).then(function () {
        if (_0x1e943f != _0x1792ca) {
          _0x3842ab = setTimeout(_0x167326, 0);
        } else {
          _0x3842ab = -1;
        }
      }).catch(function (_0x414849) {
        _0x5ab828(_0x414849);
        _0x3842ab = -1;
      });
    }
    _0x1e943f = _0x333d34;
    if (_0x3842ab == -1 && _0x333d34 != _0x1792ca) {
      _0x3842ab = setTimeout(_0x167326, 0);
    }
  }
  var _0x2c2596 = {
    audioInstanceIdCounter: 0,
    audioInstances: {},
    audioContext: null,
    audioWebEnabled: 0,
    audioCache: [],
    pendingAudioSources: {}
  };
  function _0x584f37(_0x457312) {
    _0x457312.estimatePlaybackPosition = function () {
      var _0x569d4e = (_0x2c2596.audioContext.currentTime - _0x457312.playbackStartTime) * _0x457312.playbackRate.value;
      if (_0x457312.loop && _0x569d4e >= _0x457312.loopStart) {
        _0x569d4e = (_0x569d4e - _0x457312.loopStart) % (_0x457312.loopEnd - _0x457312.loopStart) + _0x457312.loopStart;
      }
      return _0x569d4e;
    };
    _0x457312.setPitch = function (_0xe8c866) {
      var _0x5c0b2b = _0x457312.estimatePlaybackPosition();
      if (_0x5c0b2b >= 0) {
        _0x457312.playbackStartTime = _0x2c2596.audioContext.currentTime - _0x5c0b2b / _0xe8c866;
      }
      if (_0x457312.playbackRate.value !== _0xe8c866) {
        _0x457312.playbackRate.value = _0xe8c866;
      }
    };
  }
  function _0xbbceed(_0x228f48, _0x8cc210) {
    var _0x51d505 = {
      buffer: _0x228f48,
      error: _0x8cc210
    };
    _0x51d505.release = function () {};
    _0x51d505.getLength = function () {
      if (!this.buffer) {
        console.log("Trying to get length of sound which is not loaded.");
        return 0;
      }
      var _0x2acc56 = 44100 / this.buffer.sampleRate;
      return this.buffer.length * _0x2acc56;
    };
    _0x51d505.getData = function (_0x2b7568, _0x2e9d24) {
      if (!this.buffer) {
        console.log("Trying to get data of sound which is not loaded.");
        return 0;
      }
      var _0x1d2d70 = _0x2b7568 >> 2;
      var _0x52cd71 = _0x59876a.subarray(_0x1d2d70, _0x1d2d70 + (_0x2e9d24 >> 2));
      var _0x8f69e7 = Math.floor((_0x2e9d24 >> 2) / this.buffer.numberOfChannels);
      var _0x175a99 = Math.min(this.buffer.length, _0x8f69e7);
      for (var _0x4bcf2d = 0; _0x4bcf2d < this.buffer.numberOfChannels; _0x4bcf2d++) {
        var _0x4cbac8 = this.buffer.getChannelData(_0x4bcf2d).subarray(0, _0x175a99);
        _0x52cd71.set(_0x4cbac8, _0x4bcf2d * _0x175a99);
      }
      return _0x175a99 * this.buffer.numberOfChannels * 4;
    };
    _0x51d505.getNumberOfChannels = function () {
      if (!this.buffer) {
        console.log("Trying to get metadata of sound which is not loaded.");
        return 0;
      }
      return this.buffer.numberOfChannels;
    };
    _0x51d505.getFrequency = function () {
      if (!this.buffer) {
        console.log("Trying to get metadata of sound which is not loaded.");
        return 0;
      }
      return this.buffer.sampleRate;
    };
    _0x51d505.createSourceNode = function () {
      if (!this.buffer) {
        console.log("Trying to play sound which is not loaded.");
      }
      var _0x4ec42f = _0x2c2596.audioContext.createBufferSource();
      _0x4ec42f.buffer = this.buffer;
      _0x584f37(_0x4ec42f);
      return _0x4ec42f;
    };
    return _0x51d505;
  }
  function _0x861fae(_0x5d3025, _0x29096b) {
    var _0x38c99a = {
      callback: _0x5d3025,
      userData: _0x29096b,
      source: null,
      gain: _0x2c2596.audioContext.createGain(),
      panner: _0x2c2596.audioContext.createPanner(),
      threeD: false,
      loop: false,
      loopStart: 0,
      loopEnd: 0,
      pitch: 1
    };
    _0x38c99a.panner.rolloffFactor = 0;
    _0x38c99a.release = function () {
      this.disconnectSource();
      this.gain.disconnect();
      this.panner.disconnect();
    };
    _0x38c99a.playSoundClip = function (_0x4bf38f, _0xd26bff, _0x5d95ca) {
      try {
        var _0x14ca7f = this;
        this.source = _0x4bf38f.createSourceNode();
        this.setupPanning();
        this.source.onended = function () {
          _0x14ca7f.source.isStopped = true;
          _0x14ca7f.disconnectSource();
          if (_0x14ca7f.callback) {
            _0x340e8e("vi", _0x14ca7f.callback, [_0x14ca7f.userData]);
          }
        };
        this.source.loop = this.loop;
        this.source.loopStart = this.loopStart;
        this.source.loopEnd = this.loopEnd;
        this.source.start(_0xd26bff, _0x5d95ca);
        this.source.playbackStartTime = _0xd26bff - _0x5d95ca / this.source.playbackRate.value;
        this.source.setPitch(this.pitch);
      } catch (_0x36be26) {
        console.error("Channel.playSoundClip error. Exception: " + _0x36be26);
      }
    };
    _0x38c99a.stop = function (_0x2f695f) {
      if (!this.source) {
        return;
      }
      try {
        _0x38c99a.source.stop(_0x2c2596.audioContext.currentTime + _0x2f695f);
      } catch (_0x24b750) {}
      if (_0x2f695f == 0) {
        this.disconnectSource();
      }
    };
    _0x38c99a.isPaused = function () {
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
    _0x38c99a.pause = function () {
      if (!this.source || this.source.isPausedMockNode) {
        return;
      }
      if (this.source.mediaElement) {
        this.source._pauseMediaElement();
        return;
      }
      var _0x45d221 = {
        isPausedMockNode: true,
        buffer: this.source.buffer,
        loop: this.source.loop,
        loopStart: this.source.loopStart,
        loopEnd: this.source.loopEnd,
        playbackRate: this.source.playbackRate.value,
        scheduledStopTime: undefined,
        playbackPausedAtPosition: this.source.estimatePlaybackPosition(),
        setPitch: function (_0xf007c5) {
          this.playbackRate = _0xf007c5;
        },
        stop: function (_0x27cdf5) {
          this.scheduledStopTime = _0x27cdf5;
        }
      };
      this.stop(0);
      this.disconnectSource();
      this.source = _0x45d221;
    };
    _0x38c99a.resume = function () {
      if (this.source && this.source.mediaElement) {
        this.source.start(undefined, this.source.currentTime);
        return;
      }
      if (!this.source || !this.source.isPausedMockNode) {
        return;
      }
      var _0x225bbd = this.source;
      var _0x577cdd = _0xbbceed(_0x225bbd.buffer, false);
      this.playSoundClip(_0x577cdd, _0x2c2596.audioContext.currentTime, Math.max(0, _0x225bbd.playbackPausedAtPosition));
      this.source.loop = _0x225bbd.loop;
      this.source.loopStart = _0x225bbd.loopStart;
      this.source.loopEnd = _0x225bbd.loopEnd;
      this.source.setPitch(_0x225bbd.playbackRate);
      if (typeof _0x225bbd.scheduledStopTime !== "undefined") {
        var _0x1e10cf = Math.max(_0x225bbd.scheduledStopTime - _0x2c2596.audioContext.currentTime, 0);
        this.stop(_0x1e10cf);
      }
    };
    _0x38c99a.setLoop = function (_0x348ee6) {
      this.loop = _0x348ee6;
      if (!this.source || this.source.loop == _0x348ee6) {
        return;
      }
      this.source.loop = _0x348ee6;
    };
    _0x38c99a.setLoopPoints = function (_0x561a9f, _0x3f0729) {
      this.loopStart = _0x561a9f;
      this.loopEnd = _0x3f0729;
      if (!this.source) {
        return;
      }
      if (this.source.loopStart !== _0x561a9f) {
        this.source.loopStart = _0x561a9f;
      }
      if (this.source.loopEnd !== _0x3f0729) {
        this.source.loopEnd = _0x3f0729;
      }
    };
    _0x38c99a.set3D = function (_0xa46683) {
      if (this.threeD == _0xa46683) {
        return;
      }
      this.threeD = _0xa46683;
      if (!this.source) {
        return;
      }
      this.setupPanning();
    };
    _0x38c99a.setPitch = function (_0x55a510) {
      this.pitch = _0x55a510;
      if (!this.source) {
        return;
      }
      this.source.setPitch(_0x55a510);
    };
    _0x38c99a.setVolume = function (_0x328310) {
      if (this.gain.gain.value == _0x328310) {
        return;
      }
      this.gain.gain.value = _0x328310;
    };
    _0x38c99a.setPosition = function (_0x2e3db6, _0x486fbf, _0x3a5d53) {
      var _0x4a4173 = this.panner;
      if (_0x4a4173.positionX) {
        if (_0x4a4173.positionX.value !== _0x2e3db6) {
          _0x4a4173.positionX.value = _0x2e3db6;
        }
        if (_0x4a4173.positionY.value !== _0x486fbf) {
          _0x4a4173.positionY.value = _0x486fbf;
        }
        if (_0x4a4173.positionZ.value !== _0x3a5d53) {
          _0x4a4173.positionZ.value = _0x3a5d53;
        }
      } else if (_0x4a4173._x !== _0x2e3db6 || _0x4a4173._y !== _0x486fbf || _0x4a4173._z !== _0x3a5d53) {
        _0x4a4173.setPosition(_0x2e3db6, _0x486fbf, _0x3a5d53);
        _0x4a4173._x = _0x2e3db6;
        _0x4a4173._y = _0x486fbf;
        _0x4a4173._z = _0x3a5d53;
      }
    };
    _0x38c99a.disconnectSource = function () {
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
    _0x38c99a.setupPanning = function () {
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
      this.gain.connect(_0x2c2596.audioContext.destination);
    };
    _0x38c99a.isStopped = function () {
      if (!this.source) {
        return true;
      }
      if (this.source.mediaElement) {
        return this.source.isStopped;
      }
      return false;
    };
    return _0x38c99a;
  }
  function _0x161062(_0x56ab6c, _0x324e6a) {
    if (_0x2c2596.audioWebEnabled == 0) {
      return;
    }
    _0x2c2596.audioInstances[++_0x2c2596.audioInstanceIdCounter] = _0x861fae(_0x56ab6c, _0x324e6a);
    return _0x2c2596.audioInstanceIdCounter;
  }
  function _0x1abfb9(_0x58145f) {
    if (_0x2c2596.audioWebEnabled == 0) {
      return 0;
    }
    var _0x20c7ff = _0x2c2596.audioInstances[_0x58145f];
    if (!_0x20c7ff) {
      return 0;
    }
    return _0x20c7ff.getLength();
  }
  function _0x41e66e(_0x5e07f9) {
    if (_0x2c2596.audioWebEnabled == 0) {
      return 2;
    }
    var _0x3a09f2 = _0x2c2596.audioInstances[_0x5e07f9];
    if (_0x3a09f2.error) {
      return 2;
    }
    if (_0x3a09f2.buffer || _0x3a09f2.url) {
      return 0;
    }
    return 1;
  }
  function _0x1bd20e(_0x46ee35) {
    var _0x2866bd = _0x2c2596.pendingAudioSources[_0x46ee35];
    _0x2866bd.sourceNode._startPlayback(_0x2866bd.offset);
    delete _0x2c2596.pendingAudioSources[_0x46ee35];
  }
  function _0x6cd110() {
    Object.keys(_0x2c2596.pendingAudioSources).forEach(function (_0x5bdb7f) {
      _0x1bd20e(_0x5bdb7f);
    });
  }
  function _0x5087a0() {
    try {
      window.AudioContext = window.AudioContext || window.webkitAudioContext;
      _0x2c2596.audioContext = new AudioContext();
      var _0x3e67b1 = function () {
        if (_0x2c2596.audioContext.state === "suspended") {
          _0x2c2596.audioContext.resume().catch(function (_0x36bfb9) {
            console.warn("Could not resume audio context. Exception: " + _0x36bfb9);
          });
        } else {
          _0x3b068f.clearInterval(_0x1fd0ae);
        }
      };
      var _0x1fd0ae = _0x3b068f.setInterval(_0x3e67b1, 400);
      _0x2c2596.audioWebEnabled = 1;
      var _0x362bb5 = function () {
        try {
          if (_0x2c2596.audioContext.state !== "running" && _0x2c2596.audioContext.state !== "closed") {
            _0x2c2596.audioContext.resume().catch(function (_0x3449c2) {
              console.warn("Could not resume audio context. Exception: " + _0x3449c2);
            });
          }
          _0x6cd110();
          var _0x57aa33 = 20;
          while (_0x2c2596.audioCache.length < _0x57aa33) {
            var _0x5821d1 = new Audio();
            _0x5821d1.autoplay = false;
            _0x2c2596.audioCache.push(_0x5821d1);
          }
        } catch (_0x58b944) {}
      };
      window.addEventListener("mousedown", _0x362bb5);
      window.addEventListener("touchstart", _0x362bb5);
      _0x3b068f.deinitializers.push(function () {
        window.removeEventListener("mousedown", _0x362bb5);
        window.removeEventListener("touchstart", _0x362bb5);
      });
    } catch (_0xc1002e) {
      alert("Web Audio API is not supported in this browser");
    }
  }
  function _0x341472(_0xfec477) {
    var _0x37b52d = _0xbbceed(null, false);
    _0x2c2596.audioContext.decodeAudioData(_0xfec477, function (_0x19cc73) {
      _0x37b52d.buffer = _0x19cc73;
    }, function (_0x27c7a6) {
      _0x37b52d.error = true;
      console.log("Decode error: " + _0x27c7a6);
    });
    return _0x37b52d;
  }
  function _0x1c6869(_0x151bc3, _0x2792fd) {
    _0x2c2596.pendingAudioSources[_0x151bc3.mediaElement.src] = {
      sourceNode: _0x151bc3,
      offset: _0x2792fd
    };
  }
  function _0x317241(_0x5b61c2) {
    switch (_0x5b61c2) {
      case 13:
        return "audio/mpeg";
      case 20:
        return "audio/wav";
      default:
        return "audio/mp4";
    }
  }
  function _0x5c860e(_0x17eb9a, _0x4b3d28) {
    var _0x3457a5 = _0x317241(_0x4b3d28);
    var _0x34bd61 = new Blob([_0x17eb9a], {
      type: _0x3457a5
    });
    var _0x55e657 = {
      url: URL.createObjectURL(_0x34bd61),
      error: false,
      mediaElement: new Audio()
    };
    _0x55e657.mediaElement.preload = "metadata";
    _0x55e657.mediaElement.src = _0x55e657.url;
    _0x55e657.release = function () {
      if (!this.mediaElement) {
        return;
      }
      this.mediaElement.src = "";
      URL.revokeObjectURL(this.url);
      delete this.mediaElement;
      delete this.url;
    };
    _0x55e657.getLength = function () {
      return this.mediaElement.duration * 44100;
    };
    _0x55e657.getData = function (_0x4e8400, _0x30151d) {
      console.warn("getData() is not supported for compressed sound.");
      return 0;
    };
    _0x55e657.getNumberOfChannels = function () {
      console.warn("getNumberOfChannels() is not supported for compressed sound.");
      return 0;
    };
    _0x55e657.getFrequency = function () {
      console.warn("getFrequency() is not supported for compressed sound.");
      return 0;
    };
    _0x55e657.createSourceNode = function () {
      var _0x27b85a = this;
      var _0x52b907 = _0x2c2596.audioCache.length ? _0x2c2596.audioCache.pop() : new Audio();
      _0x52b907.preload = "metadata";
      _0x52b907.src = this.url;
      var _0x1db05d = _0x2c2596.audioContext.createMediaElementSource(_0x52b907);
      Object.defineProperty(_0x1db05d, "loop", {
        get: function () {
          return _0x1db05d.mediaElement.loop;
        },
        set: function (_0x5ae6cb) {
          if (_0x1db05d.mediaElement.loop !== _0x5ae6cb) {
            _0x1db05d.mediaElement.loop = _0x5ae6cb;
          }
        }
      });
      _0x1db05d.playbackRate = {};
      Object.defineProperty(_0x1db05d.playbackRate, "value", {
        get: function () {
          return _0x1db05d.mediaElement.playbackRate;
        },
        set: function (_0x27119e) {
          if (_0x1db05d.mediaElement.playbackRate !== _0x27119e) {
            _0x1db05d.mediaElement.playbackRate = _0x27119e;
          }
        }
      });
      Object.defineProperty(_0x1db05d, "currentTime", {
        get: function () {
          return _0x1db05d.mediaElement.currentTime;
        },
        set: function (_0x12eba4) {
          if (_0x1db05d.mediaElement.currentTime !== _0x12eba4) {
            _0x1db05d.mediaElement.currentTime = _0x12eba4;
          }
        }
      });
      Object.defineProperty(_0x1db05d, "mute", {
        get: function () {
          return _0x1db05d.mediaElement.mute;
        },
        set: function (_0x51af27) {
          if (_0x1db05d.mediaElement.mute !== _0x51af27) {
            _0x1db05d.mediaElement.mute = _0x51af27;
          }
        }
      });
      Object.defineProperty(_0x1db05d, "onended", {
        get: function () {
          return _0x1db05d.mediaElement.onended;
        },
        set: function (_0x5b54ca) {
          _0x1db05d.mediaElement.onended = _0x5b54ca;
        }
      });
      _0x1db05d.playPromise = null;
      _0x1db05d.playTimeout = null;
      _0x1db05d.pauseRequested = false;
      _0x1db05d.isStopped = false;
      _0x1db05d._pauseMediaElement = function () {
        if (_0x1db05d.playPromise || _0x1db05d.playTimeout) {
          _0x1db05d.pauseRequested = true;
        } else {
          _0x1db05d.mediaElement.pause();
        }
      };
      _0x1db05d._startPlayback = function (_0x512204) {
        if (_0x1db05d.playPromise || _0x1db05d.playTimeout) {
          _0x1db05d.mediaElement.currentTime = _0x512204;
          _0x1db05d.pauseRequested = false;
          return;
        }
        _0x1db05d.mediaElement.currentTime = _0x512204;
        _0x1db05d.playPromise = _0x1db05d.mediaElement.play();
        if (_0x1db05d.playPromise) {
          _0x1db05d.playPromise.then(function () {
            if (_0x1db05d.pauseRequested) {
              _0x1db05d.mediaElement.pause();
              _0x1db05d.pauseRequested = false;
            }
            _0x1db05d.playPromise = null;
          }).catch(function (_0x495d94) {
            _0x1db05d.playPromise = null;
            if (_0x495d94.name !== "NotAllowedError") {
              throw _0x495d94;
            }
            _0x1c6869(_0x1db05d, _0x512204);
          });
        }
      };
      _0x1db05d.start = function (_0xc79b9, _0x11b289) {
        if (typeof _0xc79b9 === "undefined") {
          _0xc79b9 = _0x2c2596.audioContext.currentTime;
        }
        if (typeof _0x11b289 === "undefined") {
          _0x11b289 = 0;
        }
        var _0x3f04bb = 4;
        var _0x195bcc = (_0xc79b9 - _0x2c2596.audioContext.currentTime) * 1000;
        if (_0x195bcc > _0x3f04bb) {
          _0x1db05d.playTimeout = setTimeout(function () {
            _0x1db05d.playTimeout = null;
            _0x1db05d._startPlayback(_0x11b289);
          }, _0x195bcc);
        } else {
          _0x1db05d._startPlayback(_0x11b289);
        }
      };
      _0x1db05d.stop = function (_0x1c8c07) {
        if (typeof _0x1c8c07 === "undefined") {
          _0x1c8c07 = _0x2c2596.audioContext.currentTime;
        }
        var _0x233730 = 4;
        var _0x316953 = (_0x1c8c07 - _0x2c2596.audioContext.currentTime) * 1000;
        if (_0x316953 > _0x233730) {
          setTimeout(function () {
            _0x1db05d._pauseMediaElement();
            _0x1db05d.isStopped = true;
          }, _0x316953);
        } else {
          _0x1db05d._pauseMediaElement();
          _0x1db05d.isStopped = true;
        }
      };
      _0x584f37(_0x1db05d);
      return _0x1db05d;
    };
    return _0x55e657;
  }
  function _0x4a658a(_0x511ddb, _0x2d6f80, _0x244df2, _0x5dd0d6) {
    if (_0x2c2596.audioWebEnabled == 0) {
      return 0;
    }
    var _0x10a41b = _0x479b38.buffer.slice(_0x511ddb, _0x511ddb + _0x2d6f80);
    if (_0x2d6f80 < 131072) {
      _0x244df2 = 1;
    }
    var _0x96fd3d;
    if (_0x244df2) {
      _0x96fd3d = _0x341472(_0x10a41b);
    } else {
      _0x96fd3d = _0x5c860e(_0x10a41b, _0x5dd0d6);
    }
    _0x2c2596.audioInstances[++_0x2c2596.audioInstanceIdCounter] = _0x96fd3d;
    return _0x2c2596.audioInstanceIdCounter;
  }
  function _0x501f93(_0x24c269, _0x5c2742, _0x36f79d, _0x4ae47e) {
    var _0x466737 = _0x2c2596.audioContext.createBuffer(_0x24c269, _0x5c2742, _0x36f79d);
    for (var _0x35963b = 0; _0x35963b < _0x24c269; _0x35963b++) {
      var _0xa19230 = (_0x4ae47e >> 2) + _0x5c2742 * _0x35963b;
      var _0x31fbee = _0x466737.copyToChannel || function (_0x5c08d7, _0x4da62a, _0x5c5f19) {
        var _0xbab89b = _0x5c08d7.subarray(0, Math.min(_0x5c08d7.length, this.length - (_0x5c5f19 | 0)));
        this.getChannelData(_0x4da62a | 0).set(_0xbab89b, _0x5c5f19 | 0);
      };
      _0x31fbee.apply(_0x466737, [_0x59876a.subarray(_0xa19230, _0xa19230 + _0x5c2742), _0x35963b, 0]);
    }
    return _0xbbceed(_0x466737, false);
  }
  function _0x4e0024(_0x337dfe, _0x525a8c, _0x30945b, _0x48f61d) {
    if (_0x2c2596.audioWebEnabled == 0) {
      return 0;
    }
    var _0x4d913f = _0x501f93(_0x337dfe, _0x525a8c, _0x30945b, _0x48f61d);
    _0x2c2596.audioInstances[++_0x2c2596.audioInstanceIdCounter] = _0x4d913f;
    return _0x2c2596.audioInstanceIdCounter;
  }
  function _0x371006(_0x489870, _0x6ac049, _0x53866d, _0x519ca3) {
    if (_0x2c2596.audioWebEnabled == 0) {
      return;
    }
    _0x377619(_0x6ac049, 0);
    var _0xe9ac17 = _0x2c2596.audioInstances[_0x489870];
    var _0x5a22b8 = _0x2c2596.audioInstances[_0x6ac049];
    if (!_0xe9ac17) {
      console.log("Trying to play sound which is not loaded.");
      return;
    }
    try {
      _0x5a22b8.playSoundClip(_0xe9ac17, _0x2c2596.audioContext.currentTime + _0x519ca3, _0x53866d);
    } catch (_0x373f95) {
      console.error("playSoundClip error. Exception: " + e);
    }
  }
  function _0x728c88(_0x4eba5d) {
    var _0x2f17d8 = _0x2c2596.audioInstances[_0x4eba5d];
    if (_0x2f17d8) {
      _0x2f17d8.release();
    }
    delete _0x2c2596.audioInstances[_0x4eba5d];
  }
  function _0x4a4c82() {
    if (_0x2c2596.audioWebEnabled == 0) {
      return;
    }
    if (_0x2c2596.audioContext.state === "suspended") {
      _0x2c2596.audioContext.resume().catch(function (_0x56e0b2) {
        console.warn("Could not resume audio context. Exception: " + _0x56e0b2);
      });
    }
  }
  function _0x5695c0(_0x4c5aaa, _0xfd3870) {
    var _0x7aaecf = _0x2c2596.audioInstances[_0x4c5aaa];
    _0x7aaecf.set3D(_0xfd3870);
  }
  function _0x37faa5(_0x567b71, _0x529258, _0x10492b, _0xaf772, _0xfa90ee, _0x193ab8) {
    if (_0x2c2596.audioWebEnabled == 0) {
      return;
    }
    _0x567b71 = -_0x567b71;
    _0x529258 = -_0x529258;
    _0x10492b = -_0x10492b;
    var _0x575a7f = _0x2c2596.audioContext.listener;
    if (_0x575a7f.forwardX) {
      if (_0x575a7f.forwardX.value !== _0x567b71) {
        _0x575a7f.forwardX.value = _0x567b71;
      }
      if (_0x575a7f.forwardY.value !== _0x529258) {
        _0x575a7f.forwardY.value = _0x529258;
      }
      if (_0x575a7f.forwardZ.value !== _0x10492b) {
        _0x575a7f.forwardZ.value = _0x10492b;
      }
      if (_0x575a7f.upX.value !== _0xaf772) {
        _0x575a7f.upX.value = _0xaf772;
      }
      if (_0x575a7f.upY.value !== _0xfa90ee) {
        _0x575a7f.upY.value = _0xfa90ee;
      }
      if (_0x575a7f.upZ.value !== _0x193ab8) {
        _0x575a7f.upZ.value = _0x193ab8;
      }
    } else if (_0x575a7f._forwardX !== _0x567b71 || _0x575a7f._forwardY !== _0x529258 || _0x575a7f._forwardZ !== _0x10492b || _0x575a7f._upX !== _0xaf772 || _0x575a7f._upY !== _0xfa90ee || _0x575a7f._upZ !== _0x193ab8) {
      _0x575a7f.setOrientation(_0x567b71, _0x529258, _0x10492b, _0xaf772, _0xfa90ee, _0x193ab8);
      _0x575a7f._forwardX = _0x567b71;
      _0x575a7f._forwardY = _0x529258;
      _0x575a7f._forwardZ = _0x10492b;
      _0x575a7f._upX = _0xaf772;
      _0x575a7f._upY = _0xfa90ee;
      _0x575a7f._upZ = _0x193ab8;
    }
  }
  function _0x156cc7(_0x2a8158, _0xdb077, _0x2ff4ec) {
    if (_0x2c2596.audioWebEnabled == 0) {
      return;
    }
    var _0x3d39e8 = _0x2c2596.audioContext.listener;
    if (_0x3d39e8.positionX) {
      if (_0x3d39e8.positionX.value !== _0x2a8158) {
        _0x3d39e8.positionX.value = _0x2a8158;
      }
      if (_0x3d39e8.positionY.value !== _0xdb077) {
        _0x3d39e8.positionY.value = _0xdb077;
      }
      if (_0x3d39e8.positionZ.value !== _0x2ff4ec) {
        _0x3d39e8.positionZ.value = _0x2ff4ec;
      }
    } else if (_0x3d39e8._positionX !== _0x2a8158 || _0x3d39e8._positionY !== _0xdb077 || _0x3d39e8._positionZ !== _0x2ff4ec) {
      _0x3d39e8.setPosition(_0x2a8158, _0xdb077, _0x2ff4ec);
      _0x3d39e8._positionX = _0x2a8158;
      _0x3d39e8._positionY = _0xdb077;
      _0x3d39e8._positionZ = _0x2ff4ec;
    }
  }
  function _0x228b42(_0x13ca59, _0x478d11) {
    if (_0x2c2596.audioWebEnabled == 0) {
      return;
    }
    var _0x49c8a5 = _0x2c2596.audioInstances[_0x13ca59];
    _0x49c8a5.setLoop(_0x478d11);
  }
  function _0x231049(_0x563d4c, _0x382532, _0x2e4b64) {
    if (_0x2c2596.audioWebEnabled == 0) {
      return;
    }
    var _0x236523 = _0x2c2596.audioInstances[_0x563d4c];
    _0x236523.setLoopPoints(_0x382532, _0x2e4b64);
  }
  function _0x4844f(_0x38656a, _0xe8ca49) {
    if (_0x2c2596.audioWebEnabled == 0) {
      return;
    }
    var _0x3122a8 = _0x2c2596.audioInstances[_0x38656a];
    if (_0xe8ca49 != _0x3122a8.isPaused()) {
      if (_0xe8ca49) {
        _0x3122a8.pause();
      } else {
        _0x3122a8.resume();
      }
    }
  }
  function _0xddef34(_0x3df7d9, _0x43d47b) {
    if (_0x2c2596.audioWebEnabled == 0) {
      return;
    }
    try {
      var _0x240f43 = _0x2c2596.audioInstances[_0x3df7d9];
      _0x240f43.setPitch(_0x43d47b);
    } catch (_0x27b544) {
      console.error("JS_Sound_SetPitch(channel=" + _0x3df7d9 + ", pitch=" + _0x43d47b + ") threw an exception: " + _0x27b544);
    }
  }
  function _0x2fe40c(_0x42e6cb, _0x4ee738, _0x572ed8, _0x7bb1ab) {
    if (_0x2c2596.audioWebEnabled == 0) {
      return;
    }
    var _0x4c5b55 = _0x2c2596.audioInstances[_0x42e6cb];
    _0x4c5b55.setPosition(_0x4ee738, _0x572ed8, _0x7bb1ab);
  }
  function _0x58d243(_0x7a4ae, _0x8d248e) {
    if (_0x2c2596.audioWebEnabled == 0) {
      return;
    }
    try {
      var _0x145a8d = _0x2c2596.audioInstances[_0x7a4ae];
      _0x145a8d.setVolume(_0x8d248e);
    } catch (_0x864ea0) {
      console.error("JS_Sound_SetVolume(channel=" + _0x7a4ae + ", volume=" + _0x8d248e + ") threw an exception: " + _0x864ea0);
    }
  }
  function _0x377619(_0xb68e42, _0xafc0cf) {
    if (_0x2c2596.audioWebEnabled == 0) {
      return;
    }
    var _0x5e212c = _0x2c2596.audioInstances[_0xb68e42];
    _0x5e212c.stop(_0xafc0cf);
  }
  function _0x3e5582(_0x25335d, _0xaa2257) {
    var _0x12deda = _0x3b068f.SystemInfo.browser;
    if (_0x25335d) {
      _0x5b4754(_0x12deda, _0x25335d, _0xaa2257);
    }
    return _0x2705ae(_0x12deda);
  }
  function _0x5d51c5(_0x47c273, _0x492d4b) {
    var _0x2ffa2c = _0x3b068f.SystemInfo.browserVersion;
    if (_0x47c273) {
      _0x5b4754(_0x2ffa2c, _0x47c273, _0x492d4b);
    }
    return _0x2705ae(_0x2ffa2c);
  }
  function _0x488647(_0x4853c3, _0x2771ee, _0x67b28d) {
    var _0x463da6 = _0x57f36f(_0x4853c3);
    var _0x22488d = _0x463da6 == "#canvas" ? _0x3b068f.canvas : document.querySelector(_0x463da6);
    var _0x4e8c80 = 0;
    var _0x169fc7 = 0;
    if (_0x22488d) {
      var _0x17e6fb = _0x22488d.getBoundingClientRect();
      _0x4e8c80 = _0x17e6fb.width;
      _0x169fc7 = _0x17e6fb.height;
    }
    _0x2f2442[_0x2771ee >> 3] = _0x4e8c80;
    _0x2f2442[_0x67b28d >> 3] = _0x169fc7;
  }
  function _0x407c4e(_0x230048, _0x11da8a) {
    if (_0x230048) {
      _0x5b4754("https://gamea.azgames.io", _0x230048, _0x11da8a);
    }
    return _0x2705ae("https://gamea.azgames.io");
  }
  function _0x2f7b7c(_0x5d07fb, _0x4d06c0) {
    var _0x55980c = _0x3b068f.SystemInfo.gpu;
    if (_0x5d07fb) {
      _0x5b4754(_0x55980c, _0x5d07fb, _0x4d06c0);
    }
    return _0x2705ae(_0x55980c);
  }
  function _0x539425(_0x51bd5d, _0x305232) {
    var _0x32ada7 = _0x3b068f.SystemInfo.language;
    if (_0x51bd5d) {
      _0x5b4754(_0x32ada7, _0x51bd5d, _0x305232);
    }
    return _0x2705ae(_0x32ada7);
  }
  function _0x525fd9() {
    return _0x3b068f.matchWebGLToCanvasSize || _0x3b068f.matchWebGLToCanvasSize === undefined;
  }
  function _0x287801() {
    return _0x479b38.length / 1048576;
  }
  function _0x2f9e6e(_0x3db751, _0x555a29) {
    var _0x350258 = _0x3b068f.SystemInfo.os + " " + _0x3b068f.SystemInfo.osVersion;
    if (_0x3db751) {
      _0x5b4754(_0x350258, _0x3db751, _0x555a29);
    }
    return _0x2705ae(_0x350258);
  }
  function _0x32e43c() {
    if (_0x3b068f.matchWebGLToCanvasSize == false) {
      return 1;
    } else {
      return _0x3b068f.devicePixelRatio || window.devicePixelRatio || 1;
    }
  }
  function _0x15db90(_0x5d6dc4, _0x6b183e) {
    _0x2f2442[_0x5d6dc4 >> 3] = _0x3b068f.SystemInfo.width;
    _0x2f2442[_0x6b183e >> 3] = _0x3b068f.SystemInfo.height;
  }
  function _0x375129(_0x4cdeb9, _0x3f32e3) {
    if (_0x4cdeb9) {
      _0x5b4754(_0x3b068f.streamingAssetsUrl, _0x4cdeb9, _0x3f32e3);
    }
    return _0x2705ae(_0x3b068f.streamingAssetsUrl);
  }
  function _0x1225a6() {
    var _0x123ba6 = _0x5dd9d2.getExtension("WEBGL_compressed_texture_astc");
    if (_0x123ba6 && _0x123ba6.getSupportedProfiles) {
      return _0x123ba6.getSupportedProfiles().includes("hdr");
    }
    return false;
  }
  function _0x34367f() {
    return _0x3b068f.SystemInfo.hasCursorLock;
  }
  function _0x336936() {
    return _0x3b068f.SystemInfo.hasFullscreen;
  }
  function _0x57d4a0() {
    return _0x3b068f.SystemInfo.hasWebGL;
  }
  function _0x1e360a() {
    return !!_0x3b068f.shouldQuit;
  }
  var _0x316d8b = {
    requests: {},
    responses: {},
    abortControllers: {},
    timer: {},
    nextRequestId: 1
  };
  function _0x5af954(_0x54fd5f) {
    var _0x429890 = _0x316d8b.abortControllers[_0x54fd5f];
    if (!_0x429890 || _0x429890.signal.aborted) {
      return;
    }
    _0x429890.abort();
  }
  function _0x5c4a71(_0x3288f4, _0x35a6ce) {
    var _0x3f2975 = _0x57f36f(_0x3288f4);
    var _0x1a01b4 = _0x57f36f(_0x35a6ce);
    var _0x303b82 = new AbortController();
    var _0x4c652e = {
      url: _0x3f2975,
      init: {
        method: _0x1a01b4,
        signal: _0x303b82.signal,
        headers: {},
        enableStreamingDownload: true
      },
      tempBuffer: null,
      tempBufferSize: 0
    };
    _0x316d8b.abortControllers[_0x316d8b.nextRequestId] = _0x303b82;
    _0x316d8b.requests[_0x316d8b.nextRequestId] = _0x4c652e;
    return _0x316d8b.nextRequestId++;
  }
  function _0x3e395(_0x4e4aab) {
    var _0x136d65 = _0x316d8b.responses[_0x4e4aab];
    if (!_0x136d65) {
      return "";
    }
    if (_0x136d65.headerString) {
      return _0x136d65.headerString;
    }
    var _0x279d0a = "";
    var _0x5017d8 = _0x136d65.headers.entries();
    for (var _0x5c1f6a = _0x5017d8.next(); !_0x5c1f6a.done; _0x5c1f6a = _0x5017d8.next()) {
      _0x279d0a += _0x5c1f6a.value[0] + ": " + _0x5c1f6a.value[1] + "\r\n";
    }
    _0x136d65.headerString = _0x279d0a;
    return _0x279d0a;
  }
  function _0x3ae41b(_0x16f2da, _0x200d12, _0x2b9b3f, _0x5954a1, _0x26da64) {
    var _0x291bb9 = _0x316d8b.responses[_0x16f2da];
    if (!_0x291bb9) {
      _0x5b4754("", _0x200d12, _0x2b9b3f);
      _0x5b4754("", _0x5954a1, _0x26da64);
      return;
    }
    if (_0x200d12) {
      var _0x251d4f = _0x3e395(_0x16f2da);
      _0x5b4754(_0x251d4f, _0x200d12, _0x2b9b3f);
    }
    if (_0x5954a1) {
      _0x5b4754(_0x291bb9.url, _0x5954a1, _0x26da64);
    }
  }
  function _0x54cee7(_0x28ebab, _0x512938) {
    var _0x522db4 = _0x316d8b.responses[_0x28ebab];
    if (!_0x522db4) {
      _0x59624f[_0x512938 >> 2] = 0;
      _0x59624f[(_0x512938 >> 2) + 1] = 0;
      return;
    }
    var _0x301d3e = _0x3e395(_0x28ebab);
    _0x59624f[_0x512938 >> 2] = _0x2705ae(_0x301d3e);
    _0x59624f[(_0x512938 >> 2) + 1] = _0x2705ae(_0x522db4.url);
  }
  function _0x440e3e(_0x1686b9) {
    if (_0x316d8b.timer[_0x1686b9]) {
      clearTimeout(_0x316d8b.timer[_0x1686b9]);
    }
    delete _0x316d8b.requests[_0x1686b9];
    delete _0x316d8b.responses[_0x1686b9];
    delete _0x316d8b.abortControllers[_0x1686b9];
    delete _0x316d8b.timer[_0x1686b9];
  }
  function _0x244713(_0x332076, _0x411545, _0x2e878c, _0x9ee34c, _0x345b73, _0x58d447) {
    var _0x1efc64 = _0x316d8b.requests[_0x332076];
    var _0x52075e = _0x316d8b.abortControllers[_0x332076];
    function _0x372c2f(_0x49c009) {
      if (!_0x1efc64.tempBuffer) {
        const _0x46b6a6 = Math.max(_0x49c009, 1024);
        _0x1efc64.tempBuffer = _0x58620b(_0x46b6a6);
        _0x1efc64.tempBufferSize = _0x46b6a6;
      }
      if (_0x1efc64.tempBufferSize < _0x49c009) {
        _0x41603f(_0x1efc64.tempBuffer);
        _0x1efc64.tempBuffer = _0x58620b(_0x49c009);
        _0x1efc64.tempBufferSize = _0x49c009;
      }
      return _0x1efc64.tempBuffer;
    }
    function _0x40af54() {
      if (_0x316d8b.timer[_0x332076]) {
        clearTimeout(_0x316d8b.timer[_0x332076]);
        delete _0x316d8b.timer[_0x332076];
      }
    }
    function _0x434ba4(_0x3fec19, _0x554eed) {
      _0x40af54();
      if (!_0x345b73) {
        return;
      }
      var _0x15e2e3 = 0;
      if (_0x1efc64.init.enableStreamingDownload) {
        _0x340e8e("viiiiii", _0x345b73, [_0x9ee34c, _0x3fec19.status, 0, _0x554eed.length, 0, _0x15e2e3]);
      } else if (_0x554eed.length != 0) {
        var _0xc4350f = _0x58620b(_0x554eed.length);
        _0x479b38.set(_0x554eed, _0xc4350f);
        _0x340e8e("viiiiii", _0x345b73, [_0x9ee34c, _0x3fec19.status, _0xc4350f, _0x554eed.length, 0, _0x15e2e3]);
      } else {
        _0x340e8e("viiiiii", _0x345b73, [_0x9ee34c, _0x3fec19.status, 0, 0, 0, _0x15e2e3]);
      }
      if (_0x1efc64.tempBuffer) {
        _0x41603f(_0x1efc64.tempBuffer);
      }
    }
    function _0x4991dd(_0xc31af9, _0x3586a1) {
      _0x40af54();
      if (!_0x345b73) {
        return;
      }
      var _0x4591a1 = _0x2705ae(_0xc31af9) + 1;
      var _0x52fc79 = _0x58620b(_0x4591a1);
      _0x5b4754(_0xc31af9, _0x52fc79, _0x4591a1);
      _0x340e8e("viiiiii", _0x345b73, [_0x9ee34c, 500, 0, 0, _0x52fc79, _0x3586a1]);
      _0x41603f(_0x52fc79);
      if (_0x1efc64.tempBuffer) {
        _0x41603f(_0x1efc64.tempBuffer);
      }
    }
    function _0x2474db(_0x1faaf9) {
      if (!_0x58d447 || !_0x1faaf9.lengthComputable) {
        return;
      }
      var _0x529191 = _0x1faaf9.response;
      _0x316d8b.responses[_0x332076] = _0x529191;
      if (_0x1faaf9.chunk) {
        var _0x467334 = _0x372c2f(_0x1faaf9.chunk.length);
        _0x479b38.set(_0x1faaf9.chunk, _0x467334);
        _0x340e8e("viiiiii", _0x58d447, [_0x9ee34c, _0x529191.status, _0x1faaf9.loaded, _0x1faaf9.total, _0x467334, _0x1faaf9.chunk.length]);
      } else {
        _0x340e8e("viiiiii", _0x58d447, [_0x9ee34c, _0x529191.status, _0x1faaf9.loaded, _0x1faaf9.total, 0, 0]);
      }
    }
    try {
      if (_0x2e878c > 0) {
        var _0x2dd43c = _0x479b38.subarray(_0x411545, _0x411545 + _0x2e878c);
        _0x1efc64.init.body = new Blob([_0x2dd43c]);
      }
      if (_0x1efc64.timeout) {
        _0x316d8b.timer[_0x332076] = setTimeout(function () {
          _0x1efc64.isTimedOut = true;
          _0x52075e.abort();
        }, _0x1efc64.timeout);
      }
      var _0x3403d2 = _0x3b068f.fetchWithProgress;
      _0x1efc64.init.onProgress = _0x2474db;
      if (_0x3b068f.companyName && _0x3b068f.productName && _0x3b068f.cachedFetch) {
        _0x3403d2 = _0x3b068f.cachedFetch;
        _0x1efc64.init.companyName = _0x3b068f.companyName;
        _0x1efc64.init.productName = _0x3b068f.productName;
        _0x1efc64.control = _0x3b068f.cacheControl(_0x1efc64.url);
      }
      _0x3403d2(_0x1efc64.url, _0x1efc64.init).then(function (_0x3101fd) {
        _0x316d8b.responses[_0x332076] = _0x3101fd;
        _0x434ba4(_0x3101fd, _0x3101fd.parsedBody);
      }).catch(function (_0x2a76bb) {
        var _0x3f0f05 = 2;
        var _0x337106 = 17;
        var _0x2f68ba = 14;
        if (_0x1efc64.isTimedOut) {
          _0x4991dd("Connection timed out.", _0x2f68ba);
        } else if (_0x52075e.signal.aborted) {
          _0x4991dd("Aborted.", _0x337106);
        } else {
          _0x4991dd(_0x2a76bb.message, _0x3f0f05);
        }
      });
    } catch (_0x30e400) {
      var _0x18517b = 2;
      _0x4991dd(_0x30e400.message, _0x18517b);
    }
  }
  function _0x397c45(_0x4f5c68, _0x5134a4) {
    var _0x12b3f2 = _0x316d8b.requests[_0x4f5c68];
    if (!_0x12b3f2) {
      return;
    }
    _0x12b3f2.init.redirect = _0x5134a4 === 0 ? "error" : "follow";
  }
  function _0x57b668(_0x14db8f, _0x2efa2a, _0x953b0e) {
    var _0x5c3681 = _0x316d8b.requests[_0x14db8f];
    if (!_0x5c3681) {
      return;
    }
    var _0x170bef = _0x57f36f(_0x2efa2a);
    var _0x1adc1c = _0x57f36f(_0x953b0e);
    _0x5c3681.init.headers[_0x170bef] = _0x1adc1c;
  }
  function _0xa5f5a2(_0x154444, _0x1e84e1) {
    var _0x183cf2 = _0x316d8b.requests[_0x154444];
    if (!_0x183cf2) {
      return;
    }
    _0x183cf2.timeout = _0x1e84e1;
  }
  function _0x423603(_0x25a004, _0xcae169, _0x416e5c, _0x4dd47d) {
    var _0xd1c2bb = _0x57f36f(_0x25a004);
    var _0x383feb = _0x57f36f(_0xcae169);
    var _0x31c40e = _0x57f36f(_0x416e5c);
    var _0x55d4a7 = _0x57f36f(_0x4dd47d);
    try {
      firebase.database().ref(_0xd1c2bb).on("child_added", function (_0x125b69) {
        window.unityInstance.SendMessage(_0x383feb, _0x31c40e, JSON.stringify(_0x125b69.val()));
      });
    } catch (_0x10f9c7) {
      window.unityInstance.SendMessage(_0x383feb, _0x55d4a7, JSON.stringify(_0x10f9c7, Object.getOwnPropertyNames(_0x10f9c7)));
    }
  }
  function _0x3e960b(_0x420821, _0x474ddb, _0x34b29d, _0xed806) {
    var _0x4caee4 = _0x57f36f(_0x420821);
    var _0x59ee24 = _0x57f36f(_0x474ddb);
    var _0x1d6856 = _0x57f36f(_0x34b29d);
    var _0x232ea7 = _0x57f36f(_0xed806);
    try {
      firebase.database().ref(_0x4caee4).on("child_changed", function (_0x4cf693) {
        window.unityInstance.SendMessage(_0x59ee24, _0x1d6856, JSON.stringify(_0x4cf693.val()));
      });
    } catch (_0x5cffbf) {
      window.unityInstance.SendMessage(_0x59ee24, _0x232ea7, JSON.stringify(_0x5cffbf, Object.getOwnPropertyNames(_0x5cffbf)));
    }
  }
  function _0x589519(_0x3bbc89, _0x2dd037, _0x243498, _0x3898db) {
    var _0x5c1d98 = _0x57f36f(_0x3bbc89);
    var _0x2858d1 = _0x57f36f(_0x2dd037);
    var _0x97ca03 = _0x57f36f(_0x243498);
    var _0x1df8a3 = _0x57f36f(_0x3898db);
    try {
      firebase.database().ref(_0x5c1d98).on("child_removed", function (_0x2c8a77) {
        window.unityInstance.SendMessage(_0x2858d1, _0x97ca03, JSON.stringify(_0x2c8a77.val()));
      });
    } catch (_0x5147a6) {
      window.unityInstance.SendMessage(_0x2858d1, _0x1df8a3, JSON.stringify(_0x5147a6, Object.getOwnPropertyNames(_0x5147a6)));
    }
  }
  function _0x52c280(_0x32b93c, _0x2cd892, _0x2f471f, _0x57ddf5, _0x50b1f4) {
    var _0x366fd6 = _0x57f36f(_0x32b93c);
    var _0x27c6d7 = _0x57f36f(_0x2f471f);
    var _0x353162 = _0x57f36f(_0x57ddf5);
    var _0xaca48c = _0x57f36f(_0x50b1f4);
    try {
      if (typeof firestorelisteners === "undefined") {
        firestorelisteners = {};
      }
      this.firestorelisteners[_0x366fd6 + "/collection/"] = firebase.firestore().collection(_0x366fd6).onSnapshot({
        includeMetadataChanges: _0x2cd892 == 1
      }, function (_0x144df0) {
        var _0x6234ef = {};
        _0x144df0.forEach(function (_0x4cf11c) {
          _0x6234ef[_0x4cf11c.id] = _0x4cf11c.data();
        });
        window.unityInstance.SendMessage(_0x27c6d7, _0x353162, JSON.stringify(_0x6234ef));
      }, function (_0x57d639) {
        window.unityInstance.SendMessage(_0x27c6d7, _0xaca48c, JSON.stringify(_0x57d639, Object.getOwnPropertyNames(_0x57d639)));
      });
    } catch (_0x20ef94) {
      window.unityInstance.SendMessage(_0x27c6d7, _0xaca48c, JSON.stringify(_0x20ef94, Object.getOwnPropertyNames(_0x20ef94)));
    }
  }
  function _0x2d7219(_0x257bfd, _0x2bfce1, _0x41653e, _0xbd345f, _0x20e396, _0x24853c) {
    var _0x4bf208 = _0x57f36f(_0x257bfd);
    var _0x21ec73 = _0x57f36f(_0x2bfce1);
    var _0x54f498 = _0x57f36f(_0xbd345f);
    var _0x221e76 = _0x57f36f(_0x20e396);
    var _0x15746c = _0x57f36f(_0x24853c);
    try {
      if (typeof firestorelisteners === "undefined") {
        firestorelisteners = {};
      }
      this.firestorelisteners[_0x4bf208 + "/" + _0x21ec73] = firebase.firestore().collection(_0x4bf208).doc(_0x21ec73).onSnapshot({
        includeMetadataChanges: _0x41653e == 1
      }, function (_0x1933b7) {
        window.unityInstance.SendMessage(_0x54f498, _0x221e76, JSON.stringify(_0x1933b7.data()));
      }, function (_0x279520) {
        window.unityInstance.SendMessage(_0x54f498, _0x15746c, JSON.stringify(_0x279520, Object.getOwnPropertyNames(_0x279520)));
      });
    } catch (_0x28d407) {
      window.unityInstance.SendMessage(_0x54f498, _0x15746c, JSON.stringify(_0x28d407, Object.getOwnPropertyNames(_0x28d407)));
    }
  }
  function _0x12e7d8(_0x35a94e, _0x4bde68, _0x549b1a, _0xe29ba) {
    var _0x321505 = _0x57f36f(_0x35a94e);
    var _0x48606e = _0x57f36f(_0x4bde68);
    var _0x26f4f2 = _0x57f36f(_0x549b1a);
    var _0x176742 = _0x57f36f(_0xe29ba);
    try {
      firebase.database().ref(_0x321505).on("value", function (_0x3abb25) {
        window.unityInstance.SendMessage(_0x48606e, _0x26f4f2, JSON.stringify(_0x3abb25.val()));
      });
    } catch (_0x4ff2fa) {
      window.unityInstance.SendMessage(_0x48606e, _0x176742, JSON.stringify(_0x4ff2fa, Object.getOwnPropertyNames(_0x4ff2fa)));
    }
  }
  function _0x5f07cc(_0x581fb2) {
    var _0x4c397e = _0x57f36f(_0x581fb2);
    firebaseLogEvent(_0x4c397e);
  }
  function _0x2b65ff(_0x5c04d4, _0x3cf93d) {
    var _0x4293a9 = _0x57f36f(_0x5c04d4);
    var _0x434dde = JSON.parse(_0x57f36f(_0x3cf93d));
    firebaseLogEventParameter(_0x4293a9, _0x434dde);
  }
  function _0x433e96(_0x2e872d, _0x4ee612, _0x222278, _0x203fce, _0x3417a2) {
    var _0x53c71d = _0x57f36f(_0x2e872d);
    var _0x145bfd = _0x57f36f(_0x222278);
    var _0x269326 = _0x57f36f(_0x203fce);
    var _0x4c6ca6 = _0x57f36f(_0x3417a2);
    try {
      firebase.database().ref(_0x53c71d).transaction(function (_0xcd3fa6) {
        if (!isNaN(_0xcd3fa6)) {
          return _0xcd3fa6 + _0x4ee612;
        } else {
          return _0x4ee612;
        }
      }).then(function (_0x1650a0) {
        window.unityInstance.SendMessage(_0x145bfd, _0x269326, "Success: transaction run in " + _0x53c71d);
      });
    } catch (_0x59406e) {
      window.unityInstance.SendMessage(_0x145bfd, _0x4c6ca6, JSON.stringify(_0x59406e, Object.getOwnPropertyNames(_0x59406e)));
    }
  }
  function _0x297017(_0x5adfaf, _0x191614, _0x538776) {
    var _0x5cc703 = _0x57f36f(_0x5adfaf);
    var _0x492ceb = _0x57f36f(_0x191614);
    var _0x482662 = _0x57f36f(_0x538776);
    firebase.auth().onAuthStateChanged(function (_0x4e7551) {
      if (_0x4e7551) {
        window.unityInstance.SendMessage(_0x5cc703, _0x492ceb, JSON.stringify(_0x4e7551));
      } else {
        window.unityInstance.SendMessage(_0x5cc703, _0x482662, "User signed out");
      }
    });
  }
  function _0x179e24(_0x9d15d6) {
    window.wgUnityInstance = _0x3b068f;
    try {
      window[preroll.config.loaderObjectName].log("WGSDK: WeeGoo InGame Ad, pinging.");
      window[preroll.config.loaderObjectName].ping(_0x9d15d6);
    } catch (_0xfa4134) {
      console.log("WGSDK: No production WGSDK resources found, loading development resources.");
      var _0x5b13fe = document.createElement("script");
      _0x5b13fe.addEventListener("load", function (_0xfc5fe) {
        var _0x1e7bdf = document.createElement("script");
        _0x1e7bdf.addEventListener("load", function (_0x5d446e) {
          console.log("WGSDK: Development resources loaded.");
          _0x3b89ea(_0x9d15d6, true);
        }.bind(this));
        document.getElementsByTagName("head")[0].appendChild(_0x1e7bdf);
        _0x1e7bdf.src = window.GMSOFT_ADS_INFO.wgLibrary;
      }.bind(this));
      document.getElementsByTagName("head")[0].appendChild(_0x5b13fe);
      _0x5b13fe.src = window.GMSOFT_ADS_INFO.wgConf;
    }
  }
  function _0x3b89ea(_0xcb2494, _0x39248b) {
    var _0x3d589a;
    if (_0x39248b === true) {
      _0x3d589a = _0xcb2494;
    } else {
      _0x3d589a = _0x57f36f(_0xcb2494);
    }
    setTimeout(function () {
      _0x179e24(_0x3d589a);
    }, 250);
  }
  function _0x306f6d(_0x6100fa, _0x46b9e2, _0x3b573c, _0x339c84, _0x1640dd) {
    var _0x1d3d5c = _0x57f36f(_0x6100fa);
    var _0x57a860 = _0x57f36f(_0x46b9e2);
    var _0x4ceba9 = _0x57f36f(_0x3b573c);
    var _0x322601 = _0x57f36f(_0x339c84);
    var _0x17b37f = _0x57f36f(_0x1640dd);
    try {
      firebase.database().ref(_0x1d3d5c).set(JSON.parse(_0x57a860)).then(function (_0x3dd19e) {
        window.unityInstance.SendMessage(_0x4ceba9, _0x322601, "Success: " + _0x57a860 + " was posted to " + _0x1d3d5c);
      });
    } catch (_0x37cb99) {
      window.unityInstance.SendMessage(_0x4ceba9, _0x17b37f, JSON.stringify(_0x37cb99, Object.getOwnPropertyNames(_0x37cb99)));
    }
  }
  function _0x41e143(_0x17c6a8, _0x3978ec, _0x3d6ab8, _0x3bb9b1, _0x439fc2) {
    var _0x5f0a0c = _0x57f36f(_0x17c6a8);
    var _0x108f9e = _0x57f36f(_0x3978ec);
    var _0x4e7959 = _0x57f36f(_0x3d6ab8);
    var _0x291258 = _0x57f36f(_0x3bb9b1);
    var _0xf1662f = _0x57f36f(_0x439fc2);
    try {
      firebase.database().ref(_0x5f0a0c).push().set(JSON.parse(_0x108f9e)).then(function (_0x2297a7) {
        window.unityInstance.SendMessage(_0x4e7959, _0x291258, "Success: " + _0x108f9e + " was pushed to " + _0x5f0a0c);
      });
    } catch (_0x4833d7) {
      window.unityInstance.SendMessage(_0x4e7959, _0xf1662f, JSON.stringify(_0x4833d7, Object.getOwnPropertyNames(_0x4833d7)));
    }
  }
  function _0x4a25dc() {
    try {
      window[preroll.config.loaderObjectName].log("WGSDK: Refetching reward ad.");
      window[preroll.config.loaderObjectName].rewarded.initSlot.call(window[preroll.config.loaderObjectName]);
    } catch (_0x18a164) {
      console.log("No WeeGooAFG implementation found!");
    }
  }
  function _0x224170() {
    try {
      window[preroll.config.loaderObjectName].log("WGSDK: Game controls registered.");
      window[window.preroll.config.loaderObjectName].registerGameControls(_0x3b068f);
    } catch (_0x1ce4e4) {
      console.log("WGSDK: Can not register game controls.");
      setTimeout(function () {
        _0x224170();
      }, 250);
    }
  }
  function _0x9da282() {
    try {
      window[preroll.config.loaderObjectName].log("WGSDK: Reward callbacks registered.");
      window[window.preroll.config.loaderObjectName].registerRewardCallbacks({
        onReady: "OnReadyMethod",
        onSuccess: "OnSuccessMethod",
        onFail: "OnFailMethod"
      });
    } catch (_0x40f7e8) {
      console.log("WGSDK: Can not register reward ad callbacks.");
      _0x8f61c9();
    }
  }
  function _0x8f61c9() {
    setTimeout(function () {
      _0x9da282();
    }, 250);
  }
  function _0x62f584(_0x2d2513, _0x32e7d9, _0x1aab4a, _0x435668, _0x2ca3d0, _0x1d0157, _0x2fabf5) {
    var _0x49991e = _0x57f36f(_0x2d2513);
    var _0x3eb8d1 = _0x57f36f(_0x32e7d9);
    var _0x2f6ad5 = _0x57f36f(_0x1aab4a);
    var _0x116472 = _0x57f36f(_0x435668);
    var _0x260b1c = _0x57f36f(_0x2ca3d0);
    var _0x20411b = _0x57f36f(_0x1d0157);
    var _0x37531f = _0x57f36f(_0x2fabf5);
    try {
      var _0x435668 = {};
      _0x435668[_0x2f6ad5] = firebase.firestore.FieldValue.arrayRemove(JSON.parse(_0x116472));
      firebase.firestore().collection(_0x49991e).doc(_0x3eb8d1).update(_0x435668).then(function () {
        window.unityInstance.SendMessage(_0x260b1c, _0x20411b, "Success: element " + _0x116472 + " was removed in " + _0x2f6ad5);
      }).catch(function (_0x54a455) {
        window.unityInstance.SendMessage(_0x260b1c, _0x37531f, JSON.stringify(_0x54a455, Object.getOwnPropertyNames(_0x54a455)));
      });
    } catch (_0x35140c) {
      window.unityInstance.SendMessage(_0x260b1c, _0x37531f, JSON.stringify(_0x35140c, Object.getOwnPropertyNames(_0x35140c)));
    }
  }
  function _0x5cc88d(_0x3af338) {
    var _0x3ae0f8 = window.unityStringify(_0x3af338);
    var _0x1f8924 = {
      adStarted: function () {
        window.UnitySDK.unlockPointer();
        _0x4f485c("CrazySDKSingleton", "JSLibCallback_AdStarted");
      },
      adFinished: function () {
        window.UnitySDK.lockPointer();
        _0x4f485c("CrazySDKSingleton", "JSLibCallback_AdFinished");
      },
      adError: function (_0x16c5e0) {
        _0x4f485c("CrazySDKSingleton", "JSLibCallback_AdError", JSON.stringify(_0x16c5e0));
      }
    };
    window.CrazyGames.SDK.ad.requestAd(_0x3ae0f8, _0x1f8924).catch(function (_0x1828ec) {
      window.UnitySDK.logError("Error while requesting ad:", _0x1828ec);
      _0x4f485c("CrazySDKSingleton", "JSLibCallback_AdError", JSON.stringify({
        code: "unknown",
        message: _0x1828ec.message || "Unknown error"
      }));
    });
  }
  function _0x539837(_0x5ba555) {
    var _0x89baac = JSON.parse(window.unityStringify(_0x5ba555));
    try {
      window.CrazyGames.SDK.banner.requestOverlayBanners(_0x89baac, function (_0x4e154a, _0x237eaa, _0x179504) {});
    } catch (_0x3034eb) {
      window.UnitySDK.logError("Error while requesting banners:", _0x3034eb);
    }
  }
  function _0x2fbf56(_0x30b755) {
    var _0x7edcf1 = JSON.parse(window.unityStringify(_0x30b755));
    var _0xd5b5ce = "";
    try {
      _0xd5b5ce = window.CrazyGames.SDK.game.inviteLink(_0x7edcf1);
    } catch (_0x42ec7a) {
      window.UnitySDK.logError("Error while requesting invite url:", _0x42ec7a);
    }
    var _0x533756 = _0x2705ae(_0xd5b5ce) + 1;
    var _0x3c5df4 = _0x58620b(_0x533756);
    _0x5b4754(_0xd5b5ce, _0x3c5df4, _0x533756);
    return _0x3c5df4;
  }
  function _0x9c77a(_0x16c08c) {
    _0x16c08c = _0x57f36f(_0x16c08c);
    window.GD_OPTIONS = {
      debug: false,
      gameId: _0x16c08c,
      onEvent: function (_0x3288eb) {
        switch (_0x3288eb.name) {
          case "SDK_GAME_START":
            _0x4f485c("GameDistribution", "ResumeGameCallback");
            break;
          case "SDK_GAME_PAUSE":
            _0x4f485c("GameDistribution", "PauseGameCallback");
            break;
          case "SDK_REWARDED_WATCH_COMPLETE":
            _0x4f485c("GameDistribution", "RewardedCompleteCallback");
            break;
          case "SDK_ERROR":
            break;
          default:
            _0x4f485c("GameDistribution", "EventCallback", _0x3288eb.name);
        }
      }
    };
    (function (_0x1126e2, _0x39a08e, _0x5dd2f8) {
      var _0x15a04b;
      var _0x1b5749 = _0x1126e2.getElementsByTagName(_0x39a08e)[0];
      if (_0x1126e2.getElementById(_0x5dd2f8)) {
        return;
      }
      _0x15a04b = _0x1126e2.createElement(_0x39a08e);
      _0x15a04b.id = _0x5dd2f8;
      _0x15a04b.src = "//html5.api.gamedistribution.com/main.min.js";
      _0x1b5749.parentNode.insertBefore(_0x15a04b, _0x1b5749);
    })(document, "script", "gamedistribution-jssdk");
  }
  function _0x116977() {
    if (typeof gdsdk !== "undefined" && typeof gdsdk.preloadAd !== "undefined") {
      gdsdk.preloadAd(gdsdk.AdType.Rewarded).then(function (_0x49366f) {
        _0x4f485c("GameDistribution", "PreloadRewardedVideoCallback", 1);
      }).catch(function (_0x208ff0) {
        _0x4f485c("GameDistribution", "PreloadRewardedVideoCallback", 0);
      });
    }
  }
  function _0x389b67(_0x38e501) {
    _0x38e501 = _0x57f36f(_0x38e501);
    if (typeof gdsdk !== "undefined" && typeof gdsdk.sendEvent !== "undefined" && typeof _0x38e501 !== "undefined") {
      gdsdk.sendEvent(_0x38e501).then(function (_0x39cd96) {
        console.log("Game event post message sent Succesfully...");
      }).catch(function (_0xdca42) {
        console.log(_0xdca42.message);
      });
    }
  }
  function _0x385b86(_0x4f7bff) {
    if (typeof gdsdk !== "undefined" && typeof gdsdk.showAd !== "undefined") {
      _0x4f7bff = _0x57f36f(_0x4f7bff) || gdsdk.AdType.Interstitial;
      gdsdk.showAd(_0x4f7bff).then(function (_0xbee661) {
        if (_0x4f7bff === gdsdk.AdType.Rewarded) {
          _0x4f485c("GameDistribution", "RewardedVideoSuccessCallback");
        }
      }).catch(function (_0x17ffda) {
        if (_0x4f7bff === gdsdk.AdType.Rewarded) {
          _0x4f485c("GameDistribution", "RewardedVideoFailureCallback");
        }
      });
    }
  }
  function _0x355e5d(_0x170870, _0x1eb9b1, _0x2e9b24, _0x1ba204, _0x4a8691, _0x195fd2) {
    var _0x82b12 = _0x57f36f(_0x170870);
    var _0x339259 = _0x57f36f(_0x1eb9b1);
    var _0x35b6da = _0x57f36f(_0x2e9b24);
    var _0x1be67f = _0x57f36f(_0x1ba204);
    var _0x2081f5 = _0x57f36f(_0x4a8691);
    var _0x2db17a = _0x57f36f(_0x195fd2);
    try {
      firebase.firestore().collection(_0x82b12).doc(_0x339259).set(JSON.parse(_0x35b6da)).then(function () {
        window.unityInstance.SendMessage(_0x1be67f, _0x2081f5, "Success: document " + _0x339259 + " was set");
      }).catch(function (_0x69a22a) {
        window.unityInstance.SendMessage(_0x1be67f, _0x2db17a, JSON.stringify(_0x69a22a, Object.getOwnPropertyNames(_0x69a22a)));
      });
    } catch (_0x4e7359) {
      window.unityInstance.SendMessage(_0x1be67f, _0x2db17a, JSON.stringify(_0x4e7359, Object.getOwnPropertyNames(_0x4e7359)));
    }
  }
  function _0x11f8b7(_0x808822) {
    var _0x410f5d = JSON.parse(_0x57f36f(_0x808822));
    firebaseSetUserProperties(_0x410f5d);
  }
  function _0x4825ba() {
    window.CrazyGames.SDK.user.showAccountLinkPrompt().then(function (_0x3b1fbf) {
      _0x4f485c("CrazySDKSingleton", "JSLibCallback_ShowAccountLinkPrompt", JSON.stringify({
        linkAccountResponseStr: JSON.stringify(_0x3b1fbf)
      }));
    }).catch(function (_0x3872d8) {
      _0x4f485c("CrazySDKSingleton", "JSLibCallback_ShowAccountLinkPrompt", JSON.stringify({
        errorJson: JSON.stringify(_0x3872d8)
      }));
    });
  }
  function _0x4eaaa3() {
    window.CrazyGames.SDK.user.showAuthPrompt().then(function (_0x2a1cb0) {
      _0x4f485c("CrazySDKSingleton", "JSLibCallback_ShowAuthPrompt", JSON.stringify({
        userJson: JSON.stringify(_0x2a1cb0)
      }));
    }).catch(function (_0xb17411) {
      _0x4f485c("CrazySDKSingleton", "JSLibCallback_ShowAuthPrompt", JSON.stringify({
        errorJson: JSON.stringify(_0xb17411)
      }));
    });
  }
  function _0x23a331(_0x488284) {
    var _0x34e62b = JSON.parse(window.unityStringify(_0x488284));
    var _0x470b43 = "";
    try {
      _0x470b43 = window.CrazyGames.SDK.game.showInviteButton(_0x34e62b);
    } catch (_0x4f03f7) {
      window.UnitySDK.logError("Error while showing invite button:", _0x4f03f7);
    }
    var _0x552258 = _0x2705ae(_0x470b43) + 1;
    var _0x5f0bb5 = _0x58620b(_0x552258);
    _0x5b4754(_0x470b43, _0x5f0bb5, _0x552258);
    return _0x5f0bb5;
  }
  function _0x274d79() {
    window[preroll.config.loaderObjectName].showRewardAd();
  }
  function _0x3fdd0f(_0x4a0235, _0x2a807b, _0x148ccf) {
    var _0x375e57 = _0x57f36f(_0x4a0235);
    var _0x4470ea = _0x57f36f(_0x2a807b);
    var _0x359230 = _0x57f36f(_0x148ccf);
    try {
      firebase.auth().signInAnonymously().then(function (_0x1e6f54) {
        window.unityInstance.SendMessage(_0x375e57, _0x4470ea, "Success: signed up for " + _0x1e6f54);
      }).catch(function (_0x4b5bc4) {
        window.unityInstance.SendMessage(_0x375e57, _0x359230, JSON.stringify(_0x4b5bc4, Object.getOwnPropertyNames(_0x4b5bc4)));
      });
    } catch (_0x56f545) {
      window.unityInstance.SendMessage(_0x375e57, _0x359230, JSON.stringify(_0x56f545, Object.getOwnPropertyNames(_0x56f545)));
    }
  }
  function _0x3ffc49(_0x54dd8d, _0x4d2882, _0x569c6e, _0x560814, _0x1573c2) {
    var _0x16ad37 = _0x57f36f(_0x54dd8d);
    var _0x387ccb = _0x57f36f(_0x4d2882);
    var _0x17b8ee = _0x57f36f(_0x569c6e);
    var _0x43e987 = _0x57f36f(_0x560814);
    var _0x4029b3 = _0x57f36f(_0x1573c2);
    try {
      firebase.auth().signInWithEmailAndPassword(_0x16ad37, _0x387ccb).then(function (_0x50ffef) {
        window.unityInstance.SendMessage(_0x17b8ee, _0x43e987, "Success: signed in for " + _0x16ad37);
      }).catch(function (_0x213b13) {
        window.unityInstance.SendMessage(_0x17b8ee, _0x4029b3, JSON.stringify(_0x213b13, Object.getOwnPropertyNames(_0x213b13)));
      });
    } catch (_0x1262fd) {
      window.unityInstance.SendMessage(_0x17b8ee, _0x4029b3, JSON.stringify(_0x1262fd, Object.getOwnPropertyNames(_0x1262fd)));
    }
  }
  function _0x54eba7(_0x45c5b6, _0x5ad955, _0xa330df) {
    var _0x4610be = _0x57f36f(_0x45c5b6);
    var _0x7637f8 = _0x57f36f(_0x5ad955);
    var _0x7bb17b = _0x57f36f(_0xa330df);
    try {
      var _0x46e687 = new firebase.auth.FacebookAuthProvider();
      firebase.auth().signInWithRedirect(_0x46e687).then(function (_0x3c29ee) {
        window.unityInstance.SendMessage(_0x4610be, _0x7637f8, "Success: signed in with Facebook!");
      }).catch(function (_0x6c3dc) {
        window.unityInstance.SendMessage(_0x4610be, _0x7bb17b, JSON.stringify(_0x6c3dc, Object.getOwnPropertyNames(_0x6c3dc)));
      });
    } catch (_0x1b30e2) {
      window.unityInstance.SendMessage(_0x4610be, _0x7bb17b, JSON.stringify(_0x1b30e2, Object.getOwnPropertyNames(_0x1b30e2)));
    }
  }
  function _0xe7486a(_0x2c4492, _0x131ff7, _0x2b0aa8) {
    var _0x1358f1 = _0x57f36f(_0x2c4492);
    var _0x33ba97 = _0x57f36f(_0x131ff7);
    var _0x35566a = _0x57f36f(_0x2b0aa8);
    try {
      var _0x284d2a = new firebase.auth.GoogleAuthProvider();
      firebase.auth().signInWithRedirect(_0x284d2a).then(function (_0x37ca50) {
        window.unityInstance.SendMessage(_0x1358f1, _0x33ba97, "Success: signed in with Google!");
      }).catch(function (_0x126f1b) {
        window.unityInstance.SendMessage(_0x1358f1, _0x35566a, JSON.stringify(_0x126f1b, Object.getOwnPropertyNames(_0x126f1b)));
      });
    } catch (_0x1d7e51) {
      window.unityInstance.SendMessage(_0x1358f1, _0x35566a, JSON.stringify(_0x1d7e51, Object.getOwnPropertyNames(_0x1d7e51)));
    }
  }
  function _0x3c1b6e(_0x4ee0d9, _0x255be2, _0x44fbfe, _0x563f98) {
    var _0x706f8b = _0x57f36f(_0x4ee0d9);
    var _0x33ef17 = _0x57f36f(_0x255be2);
    var _0x12606e = _0x57f36f(_0x44fbfe);
    var _0x1db076 = _0x57f36f(_0x563f98);
    try {
      firebase.database().ref(_0x706f8b).off("child_added");
      window.unityInstance.SendMessage(_0x33ef17, _0x12606e, "Success: listener removed");
    } catch (_0x4dd19b) {
      window.unityInstance.SendMessage(_0x33ef17, _0x1db076, JSON.stringify(_0x4dd19b, Object.getOwnPropertyNames(_0x4dd19b)));
    }
  }
  function _0x1f6d70(_0x4a6c59, _0x388714, _0x2160f5, _0x354eb1) {
    var _0x2cf633 = _0x57f36f(_0x4a6c59);
    var _0x61f40c = _0x57f36f(_0x388714);
    var _0x5060c3 = _0x57f36f(_0x2160f5);
    var _0x49063a = _0x57f36f(_0x354eb1);
    try {
      firebase.database().ref(_0x2cf633).off("child_changed");
      window.unityInstance.SendMessage(_0x61f40c, _0x5060c3, "Success: listener removed");
    } catch (_0x58e600) {
      window.unityInstance.SendMessage(_0x61f40c, _0x49063a, JSON.stringify(_0x58e600, Object.getOwnPropertyNames(_0x58e600)));
    }
  }
  function _0x235825(_0x544322, _0x4d2d63, _0x601eeb, _0x355be7) {
    var _0x16063c = _0x57f36f(_0x544322);
    var _0x12f230 = _0x57f36f(_0x4d2d63);
    var _0x303bbc = _0x57f36f(_0x601eeb);
    var _0x510096 = _0x57f36f(_0x355be7);
    try {
      firebase.database().ref(_0x16063c).off("child_removed");
      window.unityInstance.SendMessage(_0x12f230, _0x303bbc, "Success: listener removed");
    } catch (_0x5ecbe9) {
      window.unityInstance.SendMessage(_0x12f230, _0x510096, JSON.stringify(_0x5ecbe9, Object.getOwnPropertyNames(_0x5ecbe9)));
    }
  }
  function _0x301feb(_0x179574, _0x1a19a4, _0x394808, _0x1b8623) {
    var _0x438506 = _0x57f36f(_0x179574);
    var _0x5e4411 = _0x57f36f(_0x1a19a4);
    var _0x24667c = _0x57f36f(_0x394808);
    var _0x193c69 = _0x57f36f(_0x1b8623);
    try {
      if (typeof firestorelisteners === "undefined") {
        firestorelisteners = {};
      }
      this.firestorelisteners[_0x438506 + "/collection/"]();
      window.unityInstance.SendMessage(_0x5e4411, _0x24667c, "Success: listener was removed");
    } catch (_0x1ed3ab) {
      window.unityInstance.SendMessage(_0x5e4411, _0x193c69, JSON.stringify(_0x1ed3ab, Object.getOwnPropertyNames(_0x1ed3ab)));
    }
  }
  function _0x6c331d(_0x33bdee, _0x10e610, _0xb4eedf, _0x2e25c0, _0x5ee810) {
    var _0x279c99 = _0x57f36f(_0x33bdee);
    var _0x2f5341 = _0x57f36f(_0x10e610);
    var _0x48df75 = _0x57f36f(_0xb4eedf);
    var _0x40ba5c = _0x57f36f(_0x2e25c0);
    var _0x326325 = _0x57f36f(_0x5ee810);
    try {
      if (typeof firestorelisteners === "undefined") {
        firestorelisteners = {};
      }
      this.firestorelisteners[_0x279c99 + "/" + _0x2f5341]();
      window.unityInstance.SendMessage(_0x48df75, _0x40ba5c, "Success: listener was removed");
    } catch (_0x1f673f) {
      window.unityInstance.SendMessage(_0x48df75, _0x326325, JSON.stringify(_0x1f673f, Object.getOwnPropertyNames(_0x1f673f)));
    }
  }
  function _0x5eec17(_0x21d7e6, _0x2b5a7f, _0x28588c, _0x1fcdce) {
    var _0x48e07e = _0x57f36f(_0x21d7e6);
    var _0x529d70 = _0x57f36f(_0x2b5a7f);
    var _0xcf43ca = _0x57f36f(_0x28588c);
    var _0x22dda7 = _0x57f36f(_0x1fcdce);
    try {
      firebase.database().ref(_0x48e07e).off("value");
      window.unityInstance.SendMessage(_0x529d70, _0xcf43ca, "Success: listener removed");
    } catch (_0x335f95) {
      window.unityInstance.SendMessage(_0x529d70, _0x22dda7, JSON.stringify(_0x335f95, Object.getOwnPropertyNames(_0x335f95)));
    }
  }
  function _0x561d57() {
    try {
      window.CrazyGames.SDK.data.syncUnityGameData();
    } catch (_0x22d3ce) {
      window.UnitySDK.logError("Error while calling syncUnityGameData:", _0x22d3ce);
    }
  }
  function _0x3fac4c(_0x33f555, _0x5782b4, _0xcceced, _0x45bcba) {
    var _0x14bad2 = _0x57f36f(_0x33f555);
    var _0x1b613d = _0x57f36f(_0x5782b4);
    var _0x48a2f6 = _0x57f36f(_0xcceced);
    var _0x3430e6 = _0x57f36f(_0x45bcba);
    try {
      firebase.database().ref(_0x14bad2).transaction(function (_0x15c91e) {
        if (typeof _0x15c91e === "boolean") {
          return !_0x15c91e;
        } else {
          return true;
        }
      }).then(function (_0x3fecc7) {
        window.unityInstance.SendMessage(_0x1b613d, _0x48a2f6, "Success: transaction run in " + _0x14bad2);
      });
    } catch (_0x46a73b) {
      window.unityInstance.SendMessage(_0x1b613d, _0x3430e6, JSON.stringify(_0x46a73b, Object.getOwnPropertyNames(_0x46a73b)));
    }
  }
  function _0xad8fbf(_0x8952e6, _0x225bce, _0x16e1eb, _0x14e349, _0x91ad75, _0x59305e) {
    var _0x337aa8 = _0x57f36f(_0x8952e6);
    var _0x5c4cc7 = _0x57f36f(_0x225bce);
    var _0x429f93 = _0x57f36f(_0x16e1eb);
    var _0x427849 = _0x57f36f(_0x14e349);
    var _0x34baec = _0x57f36f(_0x91ad75);
    var _0x8cecba = _0x57f36f(_0x59305e);
    try {
      firebase.firestore().collection(_0x337aa8).doc(_0x5c4cc7).update(JSON.parse(_0x429f93)).then(function () {
        window.unityInstance.SendMessage(_0x427849, _0x34baec, "Success: document " + _0x5c4cc7 + " was updated");
      }).catch(function (_0x49e724) {
        window.unityInstance.SendMessage(_0x427849, _0x8cecba, JSON.stringify(_0x49e724, Object.getOwnPropertyNames(_0x49e724)));
      });
    } catch (_0x470eca) {
      window.unityInstance.SendMessage(_0x427849, _0x8cecba, JSON.stringify(_0x470eca, Object.getOwnPropertyNames(_0x470eca)));
    }
  }
  function _0x380c61(_0x2cce0e, _0x1d22e2, _0x4b0270, _0x45e9e5, _0x51611d) {
    var _0x38abbd = _0x57f36f(_0x2cce0e);
    var _0x4340b0 = _0x57f36f(_0x1d22e2);
    var _0x28c38e = _0x57f36f(_0x4b0270);
    var _0x3a6911 = _0x57f36f(_0x45e9e5);
    var _0x5e1902 = _0x57f36f(_0x51611d);
    try {
      firebase.database().ref(_0x38abbd).update(JSON.parse(_0x4340b0)).then(function (_0x1cca32) {
        window.unityInstance.SendMessage(_0x28c38e, _0x3a6911, "Success: " + _0x4340b0 + " was updated in " + _0x38abbd);
      });
    } catch (_0x5cfd4b) {
      window.unityInstance.SendMessage(_0x28c38e, _0x5e1902, JSON.stringify(_0x5cfd4b, Object.getOwnPropertyNames(_0x5cfd4b)));
    }
  }
  function _0x21a334(_0x5685b4, _0x26ee45, _0xd28546, _0x55683c, _0x5df15a) {
    var _0x49e3ac = _0x57f36f(_0x5685b4);
    var _0x41d477 = _0x57f36f(_0x26ee45);
    var _0x346814 = _0x57f36f(_0xd28546);
    var _0x35d8f2 = _0x57f36f(_0x55683c);
    var _0xda447f = _0x57f36f(_0x5df15a);
    try {
      firebase.storage().ref(_0x49e3ac).put(_0x1fbe3c(_0x41d477)).then(function (_0x5607f8) {
        window.unityInstance.SendMessage(_0x346814, _0x35d8f2, "Success: data was posted to " + _0x49e3ac);
      });
    } catch (_0x4ab133) {
      window.unityInstance.SendMessage(_0x346814, _0xda447f, JSON.stringify(_0x4ab133, Object.getOwnPropertyNames(_0x4ab133)));
    }
    function _0x1fbe3c(_0x5e7a47) {
      var _0x93d0c2 = window.atob(_0x5e7a47);
      var _0x50f0e0 = _0x93d0c2.length;
      var _0x251570 = new Uint8Array(_0x50f0e0);
      for (var _0x52ec81 = 0; _0x52ec81 < _0x50f0e0; _0x52ec81++) {
        _0x251570[_0x52ec81] = _0x93d0c2.charCodeAt(_0x52ec81);
      }
      return _0x251570.buffer;
    }
  }
  var _0x217f50 = {
    requestInstances: {},
    nextRequestId: 1,
    loglevel: 2,
    SendTextToCSharpSide: function (_0x1ec5c6, _0x17907f, _0x5d4b53) {
      const _0x38af54 = new TextEncoder();
      const _0x5f4f2b = _0x38af54.encode(_0x5d4b53);
      const _0x5d8d28 = function (_0x5d1993, _0x38e333) {
        return _0x46a462.apply(null, [_0x217f50.onallocbuffer, _0x5d1993, _0x38e333]);
      }(_0x1ec5c6, _0x5f4f2b.length);
      _0x479b38.set(_0x5f4f2b, _0x5d8d28);
      (function (_0x37c929, _0x498de4, _0x1c1795) {
        _0x38921c.apply(null, [_0x17907f, _0x37c929, _0x498de4, _0x1c1795]);
      })(_0x1ec5c6, _0x5d8d28, _0x5f4f2b.length);
    },
    GetResponseHeaders: function (_0xf960d9, _0x19f002) {
      if (_0x217f50.loglevel <= 1) {
        console.log("GetResponseHeaders(" + _0xf960d9 + ")");
      }
      var _0x46eea0 = "";
      if (document && document.cookie) {
        var _0x210cd1 = document.cookie.split(";");
        for (var _0x379d16 = 0; _0x379d16 < _0x210cd1.length; ++_0x379d16) {
          const _0x33814b = _0x210cd1[_0x379d16].trim();
          if (_0x33814b.length > 0) {
            _0x46eea0 += "Set-Cookie:" + _0x33814b + "\n";
          }
        }
      }
      const _0x577807 = _0x217f50.requestInstances[_0xf960d9].getAllResponseHeaders().trim().split(/[\r\n]+/);
      _0x577807.forEach(_0x2c6cae => {
        const _0x54fb17 = _0x2c6cae.split(": ");
        const _0x1534e1 = _0x54fb17.shift();
        const _0x47ed1b = _0x54fb17.join(": ");
        if (_0x1534e1 !== "content-length") {
          _0x46eea0 += _0x1534e1 + ":" + _0x47ed1b + "\n";
        }
      });
      _0x217f50.SendTextToCSharpSide(_0xf960d9, _0x19f002, _0x46eea0);
    }
  };
  function _0xd10785(_0x3d9aaf) {
    if (_0x217f50.loglevel <= 1) {
      console.log("XHR_Abort(" + _0x3d9aaf + ")");
    }
    _0x217f50.requestInstances[_0x3d9aaf].abort();
  }
  function _0x5252ea(_0x12a213, _0x475526, _0x4b0b9e, _0x443214, _0x1225d7) {
    var _0x2faae9 = new URL(_0x57f36f(_0x475526));
    var _0x4b9e61 = _0x57f36f(_0x12a213);
    if (_0x217f50.loglevel <= 1) {
      console.log("XHR_Create (" + _0x217f50.nextRequestId + ", " + _0x4b9e61 + ", " + _0x2faae9.toString() + ", " + _0x1225d7 + ")");
    }
    var _0x4e0c7e = new XMLHttpRequest();
    if (_0x4b0b9e && _0x443214) {
      var _0x2ee4c7 = _0x57f36f(_0x4b0b9e);
      var _0x427356 = _0x57f36f(_0x443214);
      _0x4e0c7e.withCredentials = true;
      _0x4e0c7e.open(_0x4b9e61, _0x2faae9.toString(), true, _0x2ee4c7, _0x427356);
    } else {
      _0x4e0c7e.withCredentials = _0x1225d7;
      _0x4e0c7e.open(_0x4b9e61, _0x2faae9.toString(), true);
    }
    _0x4e0c7e.responseType = "arraybuffer";
    _0x217f50.requestInstances[_0x217f50.nextRequestId] = _0x4e0c7e;
    return _0x217f50.nextRequestId++;
  }
  function _0x39788a(_0x1dd36c) {
    if (_0x217f50.loglevel <= 1) {
      console.log("XHR_Release(" + _0x1dd36c + ")");
    }
    delete _0x217f50.requestInstances[_0x1dd36c];
  }
  function _0x7f8d15(_0x4f4a9e, _0x569744, _0x11a6e2) {
    if (_0x217f50.loglevel <= 1) {
      console.log("XHR_Send(" + _0x4f4a9e + ", " + _0x569744 + ", " + _0x11a6e2 + ")");
    }
    var _0x229fb1 = _0x217f50.requestInstances[_0x4f4a9e];
    try {
      if (_0x11a6e2 > 0) {
        _0x229fb1.send(_0x479b38.subarray(_0x569744, _0x569744 + _0x11a6e2));
      } else {
        _0x229fb1.send();
      }
    } catch (_0x4898cd) {
      if (_0x217f50.loglevel <= 4) {
        console.error("XHR_Send(" + _0x4f4a9e + "): " + _0x4898cd.name + " : " + _0x4898cd.message);
      }
    }
  }
  function _0x47b4d6(_0x5dcb5b) {
    _0x217f50.loglevel = _0x5dcb5b;
  }
  function _0x559f7c(_0x13fcc5, _0x4a2637, _0x5cc3ab) {
    if (_0x217f50.loglevel <= 1) {
      console.log("XHR_SetProgressHandler(" + _0x13fcc5 + ")");
    }
    var _0x1a69a8 = _0x217f50.requestInstances[_0x13fcc5];
    if (_0x1a69a8) {
      if (_0x4a2637) {
        _0x1a69a8.onprogress = function _0x580dfd(_0x15e864) {
          if (_0x217f50.loglevel <= 1) {
            console.log("XHR_SetProgressHandler download(" + _0x13fcc5 + ", " + _0x15e864.loaded + ", " + _0x15e864.total + ")");
          }
          if (_0x15e864.lengthComputable) {
            (function (_0x17effb, _0x19bf64, _0x3d9950) {
              _0x38921c.apply(null, [_0x4a2637, _0x17effb, _0x19bf64, _0x3d9950]);
            })(_0x13fcc5, _0x15e864.loaded, _0x15e864.total);
          }
        };
      }
      if (_0x5cc3ab) {
        _0x1a69a8.upload.addEventListener("progress", function _0x4507f7(_0x1ffd1e) {
          if (_0x217f50.loglevel <= 1) {
            console.log("XHR_SetProgressHandler upload(" + _0x13fcc5 + ", " + _0x1ffd1e.loaded + ", " + _0x1ffd1e.total + ")");
          }
          if (_0x1ffd1e.lengthComputable) {
            (function (_0x129788, _0x205852, _0x129c84) {
              _0x38921c.apply(null, [_0x5cc3ab, _0x129788, _0x205852, _0x129c84]);
            })(_0x13fcc5, _0x1ffd1e.loaded, _0x1ffd1e.total);
          }
        }, true);
      }
    }
  }
  function _0x1f03db(_0x30498a, _0x4a7a78, _0x270e62) {
    var _0x42e7f7 = _0x57f36f(_0x4a7a78);
    var _0x3cc99e = _0x57f36f(_0x270e62);
    if (_0x217f50.loglevel <= 1) {
      console.log("XHR_SetRequestHeader(" + _0x42e7f7 + ", " + _0x3cc99e + ")");
    }
    if (_0x42e7f7 != "Cookie") {
      _0x217f50.requestInstances[_0x30498a].setRequestHeader(_0x42e7f7, _0x3cc99e);
    } else {
      var _0x23b5cb = _0x3cc99e.split(";");
      for (var _0x553469 = 0; _0x553469 < _0x23b5cb.length; _0x553469++) {
        document.cookie = _0x23b5cb[_0x553469];
      }
    }
  }
  function _0x14d368(_0x50bb85, _0x150419, _0x3e2696, _0x449c53, _0x35ddee, _0x485c94, _0x5dacd9) {
    if (_0x217f50.loglevel <= 1) {
      console.log("XHR_SetResponseHandler(" + _0x50bb85 + ")");
    }
    _0x217f50.onallocbuffer = _0x5dacd9;
    var _0x3b1db0 = _0x217f50.requestInstances[_0x50bb85];
    _0x3b1db0.onreadystatechange = _0x309628 => {
      if (_0x217f50.loglevel <= 1) {
        console.log(_0x50bb85 + " onreadystatechange(" + _0x3b1db0.readyState + ")");
      }
      switch (_0x3b1db0.readyState) {
        case XMLHttpRequest.UNSENT:
          break;
        case XMLHttpRequest.OPENED:
          break;
        case XMLHttpRequest.HEADERS_RECEIVED:
          {
            _0x217f50.SendTextToCSharpSide(_0x50bb85, _0x485c94, "HTTP/1.1 " + _0x3b1db0.status + " " + _0x3b1db0.statusText + "\n");
            _0x217f50.GetResponseHeaders(_0x50bb85, _0x485c94);
            break;
          }
        case XMLHttpRequest.LOADING:
          break;
        case XMLHttpRequest.DONE:
          break;
      }
    };
    _0x3b1db0.onloadstart = _0x20f173 => {
      if (_0x217f50.loglevel <= 1) {
        console.log(_0x50bb85 + " onloadstart: " + _0x20f173);
      }
    };
    _0x3b1db0.onload = function _0x2b187c(_0x2d2d0f) {
      if (_0x217f50.loglevel <= 1) {
        console.log(_0x50bb85 + " onload(" + _0x3b1db0.status + ", " + _0x3b1db0.statusText + ")");
      }
      if (_0x150419) {
        var _0x332934 = 0;
        var _0x1d4f83 = 0;
        if (_0x3b1db0.response) {
          var _0x4deba4 = _0x3b1db0.response;
          _0x332934 = _0x4deba4.byteLength;
          _0x217f50.SendTextToCSharpSide(_0x50bb85, _0x485c94, "content-length:" + _0x332934 + "\n\n");
          _0x1d4f83 = function (_0x102345, _0xae19e8) {
            return _0x46a462.apply(null, [_0x5dacd9, _0x102345, _0xae19e8]);
          }(_0x50bb85, _0x332934);
          var _0x5f39f = new Uint8Array(_0x4deba4);
          var _0x7f43f2 = _0x479b38.subarray(_0x1d4f83, _0x1d4f83 + _0x332934);
          _0x7f43f2.set(_0x5f39f);
        } else {
          _0x217f50.SendTextToCSharpSide(_0x50bb85, _0x485c94, "content-length:0\n\n");
        }
        (function (_0x3b4747, _0x3a8fbd, _0x2c8556) {
          _0x38921c.apply(null, [_0x150419, _0x3b4747, _0x3a8fbd, _0x2c8556]);
        })(_0x50bb85, _0x1d4f83, _0x332934);
      }
    };
    if (_0x3e2696) {
      _0x3b1db0.onerror = function _0x411f82(_0x13ad1e) {
        function _0x3fab0d(_0x5d3286) {
          var _0xf1404a = _0x2705ae(_0x5d3286) + 1;
          var _0x2921e2 = _0x58620b(_0xf1404a);
          _0x29bc42(_0x5d3286, _0x479b38, _0x2921e2, _0xf1404a);
          (function (_0x2c0a87, _0x17148d) {
            _0x17d5d9.apply(null, [_0x3e2696, _0x2c0a87, _0x17148d]);
          })(_0x50bb85, _0x2921e2);
          _0x41603f(_0x2921e2);
        }
        if (_0x13ad1e.error) {
          _0x3fab0d(_0x13ad1e.error);
        } else {
          _0x3fab0d("Unknown Error! Maybe a CORS porblem?");
        }
      };
    }
    if (_0x449c53) {
      _0x3b1db0.ontimeout = function _0x2ceb50(_0x4db623) {
        (function (_0x21d858) {
          _0x1ba1b5.apply(null, [_0x449c53, _0x21d858]);
        })(_0x50bb85);
      };
    }
    if (_0x35ddee) {
      _0x3b1db0.onabort = function _0x1767dd(_0x2ef95a) {
        (function (_0x3d76ac) {
          _0x1ba1b5.apply(null, [_0x35ddee, _0x3d76ac]);
        })(_0x50bb85);
      };
    }
  }
  function _0x2e9942(_0x4f4cd5, _0x750acd) {
    if (_0x217f50.loglevel <= 1) {
      console.log("XHR_SetTimeout(" + _0x4f4cd5 + ", " + _0x750acd + ")");
    }
    _0x217f50.requestInstances[_0x4f4cd5].timeout = _0x750acd;
  }
  var _0x4b367a = {
    DESTRUCTOR_OFFSET: 0,
    REFCOUNT_OFFSET: 4,
    TYPE_OFFSET: 8,
    CAUGHT_OFFSET: 12,
    RETHROWN_OFFSET: 13,
    SIZE: 16
  };
  function _0x63c8ae(_0x1737e3) {
    return _0x58620b(_0x1737e3 + _0x4b367a.SIZE) + _0x4b367a.SIZE;
  }
  function _0x40de9a(_0x5a303a) {
    this.excPtr = _0x5a303a;
    this.ptr = _0x5a303a - _0x4b367a.SIZE;
    this.set_type = function (_0x555c25) {
      _0x58fcaf[this.ptr + _0x4b367a.TYPE_OFFSET >> 2] = _0x555c25;
    };
    this.get_type = function () {
      return _0x58fcaf[this.ptr + _0x4b367a.TYPE_OFFSET >> 2];
    };
    this.set_destructor = function (_0x40b843) {
      _0x58fcaf[this.ptr + _0x4b367a.DESTRUCTOR_OFFSET >> 2] = _0x40b843;
    };
    this.get_destructor = function () {
      return _0x58fcaf[this.ptr + _0x4b367a.DESTRUCTOR_OFFSET >> 2];
    };
    this.set_refcount = function (_0x25c26f) {
      _0x58fcaf[this.ptr + _0x4b367a.REFCOUNT_OFFSET >> 2] = _0x25c26f;
    };
    this.set_caught = function (_0x10d86d) {
      _0x10d86d = _0x10d86d ? 1 : 0;
      _0x5a8ff8[this.ptr + _0x4b367a.CAUGHT_OFFSET >> 0] = _0x10d86d;
    };
    this.get_caught = function () {
      return _0x5a8ff8[this.ptr + _0x4b367a.CAUGHT_OFFSET >> 0] != 0;
    };
    this.set_rethrown = function (_0x1c2680) {
      _0x1c2680 = _0x1c2680 ? 1 : 0;
      _0x5a8ff8[this.ptr + _0x4b367a.RETHROWN_OFFSET >> 0] = _0x1c2680;
    };
    this.get_rethrown = function () {
      return _0x5a8ff8[this.ptr + _0x4b367a.RETHROWN_OFFSET >> 0] != 0;
    };
    this.init = function (_0x1b2e59, _0xa266c4) {
      this.set_type(_0x1b2e59);
      this.set_destructor(_0xa266c4);
      this.set_refcount(0);
      this.set_caught(false);
      this.set_rethrown(false);
    };
    this.add_ref = function () {
      var _0x18f486 = _0x58fcaf[this.ptr + _0x4b367a.REFCOUNT_OFFSET >> 2];
      _0x58fcaf[this.ptr + _0x4b367a.REFCOUNT_OFFSET >> 2] = _0x18f486 + 1;
    };
    this.release_ref = function () {
      var _0x3c3898 = _0x58fcaf[this.ptr + _0x4b367a.REFCOUNT_OFFSET >> 2];
      _0x58fcaf[this.ptr + _0x4b367a.REFCOUNT_OFFSET >> 2] = _0x3c3898 - 1;
      return _0x3c3898 === 1;
    };
  }
  function _0x512234(_0x385271) {
    this.free = function () {
      _0x41603f(this.ptr);
      this.ptr = 0;
    };
    this.set_base_ptr = function (_0x1d32c8) {
      _0x58fcaf[this.ptr >> 2] = _0x1d32c8;
    };
    this.get_base_ptr = function () {
      return _0x58fcaf[this.ptr >> 2];
    };
    this.set_adjusted_ptr = function (_0x33456f) {
      var _0x2f200f = 4;
      _0x58fcaf[this.ptr + _0x2f200f >> 2] = _0x33456f;
    };
    this.get_adjusted_ptr = function () {
      var _0x3df418 = 4;
      return _0x58fcaf[this.ptr + _0x3df418 >> 2];
    };
    this.get_exception_ptr = function () {
      var _0x2180c0 = _0x241213(this.get_exception_info().get_type());
      if (_0x2180c0) {
        return _0x58fcaf[this.get_base_ptr() >> 2];
      }
      var _0x142150 = this.get_adjusted_ptr();
      if (_0x142150 !== 0) {
        return _0x142150;
      }
      return this.get_base_ptr();
    };
    this.get_exception_info = function () {
      return new _0x40de9a(this.get_base_ptr());
    };
    if (_0x385271 === undefined) {
      this.ptr = _0x58620b(8);
      this.set_adjusted_ptr(0);
    } else {
      this.ptr = _0x385271;
    }
  }
  var _0x8b8a31 = [];
  function _0x460b32(_0x3c8c6a) {
    _0x3c8c6a.add_ref();
  }
  var _0x2e5779 = 0;
  function _0x1a69a1(_0x481f14) {
    var _0x19288e = new _0x512234(_0x481f14);
    var _0x5820ae = _0x19288e.get_exception_info();
    if (!_0x5820ae.get_caught()) {
      _0x5820ae.set_caught(true);
      _0x2e5779--;
    }
    _0x5820ae.set_rethrown(false);
    _0x8b8a31.push(_0x19288e);
    _0x460b32(_0x5820ae);
    return _0x19288e.get_exception_ptr();
  }
  var _0x1bbab7 = 0;
  function _0x22a899(_0x29835a) {
    return _0x41603f(new _0x40de9a(_0x29835a).ptr);
  }
  function _0x13f70d(_0xb22500) {
    if (_0xb22500.release_ref() && !_0xb22500.get_rethrown()) {
      var _0xa3c2c0 = _0xb22500.get_destructor();
      if (_0xa3c2c0) {
        (function (_0x5b3978) {
          return _0x4ae28b.apply(null, [_0xa3c2c0, _0x5b3978]);
        })(_0xb22500.excPtr);
      }
      _0x22a899(_0xb22500.excPtr);
    }
  }
  function _0x260170() {
    _0x47d732(0);
    var _0x1060ee = _0x8b8a31.pop();
    _0x13f70d(_0x1060ee.get_exception_info());
    _0x1060ee.free();
    _0x1bbab7 = 0;
  }
  function _0x2b4ff3(_0xf1dbb2) {
    var _0x39ebfc = new _0x512234(_0xf1dbb2);
    var _0x322b8e = _0x39ebfc.get_base_ptr();
    if (!_0x1bbab7) {
      _0x1bbab7 = _0x322b8e;
    }
    _0x39ebfc.free();
    throw _0x322b8e;
  }
  function _0x888828() {
    var _0xf81e0e = _0x1bbab7;
    if (!_0xf81e0e) {
      _0x5eda5c(0);
      return 0;
    }
    var _0x286099 = new _0x40de9a(_0xf81e0e);
    var _0x1429fe = _0x286099.get_type();
    var _0x5cea1d = new _0x512234();
    _0x5cea1d.set_base_ptr(_0xf81e0e);
    if (!_0x1429fe) {
      _0x5eda5c(0);
      return _0x5cea1d.ptr | 0;
    }
    var _0x615e9b = Array.prototype.slice.call(arguments);
    var _0x469c19 = _0x1c6173();
    var _0x1de42c = _0x2d607d(4);
    _0x58fcaf[_0x1de42c >> 2] = _0xf81e0e;
    for (var _0x296082 = 0; _0x296082 < _0x615e9b.length; _0x296082++) {
      var _0x63c7d6 = _0x615e9b[_0x296082];
      if (_0x63c7d6 === 0 || _0x63c7d6 === _0x1429fe) {
        break;
      }
      if (_0x1b8e2a(_0x63c7d6, _0x1429fe, _0x1de42c)) {
        var _0x42d8b7 = _0x58fcaf[_0x1de42c >> 2];
        if (_0xf81e0e !== _0x42d8b7) {
          _0x5cea1d.set_adjusted_ptr(_0x42d8b7);
        }
        _0x5eda5c(_0x63c7d6);
        return _0x5cea1d.ptr | 0;
      }
    }
    _0x176ee2(_0x469c19);
    _0x5eda5c(_0x1429fe);
    return _0x5cea1d.ptr | 0;
  }
  function _0x538311() {
    var _0x528ea4 = _0x1bbab7;
    if (!_0x528ea4) {
      _0x5eda5c(0);
      return 0;
    }
    var _0x48a132 = new _0x40de9a(_0x528ea4);
    var _0x3b2d3e = _0x48a132.get_type();
    var _0x4ab4ed = new _0x512234();
    _0x4ab4ed.set_base_ptr(_0x528ea4);
    if (!_0x3b2d3e) {
      _0x5eda5c(0);
      return _0x4ab4ed.ptr | 0;
    }
    var _0x298c73 = Array.prototype.slice.call(arguments);
    var _0xf93eb = _0x1c6173();
    var _0x4b6695 = _0x2d607d(4);
    _0x58fcaf[_0x4b6695 >> 2] = _0x528ea4;
    for (var _0x87475 = 0; _0x87475 < _0x298c73.length; _0x87475++) {
      var _0x363489 = _0x298c73[_0x87475];
      if (_0x363489 === 0 || _0x363489 === _0x3b2d3e) {
        break;
      }
      if (_0x1b8e2a(_0x363489, _0x3b2d3e, _0x4b6695)) {
        var _0x15a472 = _0x58fcaf[_0x4b6695 >> 2];
        if (_0x528ea4 !== _0x15a472) {
          _0x4ab4ed.set_adjusted_ptr(_0x15a472);
        }
        _0x5eda5c(_0x363489);
        return _0x4ab4ed.ptr | 0;
      }
    }
    _0x176ee2(_0xf93eb);
    _0x5eda5c(_0x3b2d3e);
    return _0x4ab4ed.ptr | 0;
  }
  function _0x30a5aa() {
    var _0x55db76 = _0x1bbab7;
    if (!_0x55db76) {
      _0x5eda5c(0);
      return 0;
    }
    var _0x452f34 = new _0x40de9a(_0x55db76);
    var _0x32be89 = _0x452f34.get_type();
    var _0x478b81 = new _0x512234();
    _0x478b81.set_base_ptr(_0x55db76);
    if (!_0x32be89) {
      _0x5eda5c(0);
      return _0x478b81.ptr | 0;
    }
    var _0x273aa7 = Array.prototype.slice.call(arguments);
    var _0x300d10 = _0x1c6173();
    var _0x3987d2 = _0x2d607d(4);
    _0x58fcaf[_0x3987d2 >> 2] = _0x55db76;
    for (var _0x44fa62 = 0; _0x44fa62 < _0x273aa7.length; _0x44fa62++) {
      var _0x25a49f = _0x273aa7[_0x44fa62];
      if (_0x25a49f === 0 || _0x25a49f === _0x32be89) {
        break;
      }
      if (_0x1b8e2a(_0x25a49f, _0x32be89, _0x3987d2)) {
        var _0x407838 = _0x58fcaf[_0x3987d2 >> 2];
        if (_0x55db76 !== _0x407838) {
          _0x478b81.set_adjusted_ptr(_0x407838);
        }
        _0x5eda5c(_0x25a49f);
        return _0x478b81.ptr | 0;
      }
    }
    _0x176ee2(_0x300d10);
    _0x5eda5c(_0x32be89);
    return _0x478b81.ptr | 0;
  }
  function _0x116112() {
    var _0x4b0e56 = _0x8b8a31.pop();
    if (!_0x4b0e56) {
      _0x2e4daa("no exception to throw");
    }
    var _0x201268 = _0x4b0e56.get_exception_info();
    var _0x36307e = _0x4b0e56.get_base_ptr();
    if (!_0x201268.get_rethrown()) {
      _0x8b8a31.push(_0x4b0e56);
      _0x201268.set_rethrown(true);
      _0x201268.set_caught(false);
      _0x2e5779++;
    } else {
      _0x4b0e56.free();
    }
    _0x1bbab7 = _0x36307e;
    throw _0x36307e;
  }
  function _0x267a73(_0xd92fbc, _0x8ec89f, _0x205598) {
    var _0x129eed = new _0x40de9a(_0xd92fbc);
    _0x129eed.init(_0x8ec89f, _0x205598);
    _0x1bbab7 = _0xd92fbc;
    _0x2e5779++;
    throw _0xd92fbc;
  }
  function _0x537c40(_0x57eb06, _0x25f29f) {
    var _0xe91480 = new Date(_0x58fcaf[_0x57eb06 >> 2] * 1000);
    _0x58fcaf[_0x25f29f >> 2] = _0xe91480.getUTCSeconds();
    _0x58fcaf[_0x25f29f + 4 >> 2] = _0xe91480.getUTCMinutes();
    _0x58fcaf[_0x25f29f + 8 >> 2] = _0xe91480.getUTCHours();
    _0x58fcaf[_0x25f29f + 12 >> 2] = _0xe91480.getUTCDate();
    _0x58fcaf[_0x25f29f + 16 >> 2] = _0xe91480.getUTCMonth();
    _0x58fcaf[_0x25f29f + 20 >> 2] = _0xe91480.getUTCFullYear() - 1900;
    _0x58fcaf[_0x25f29f + 24 >> 2] = _0xe91480.getUTCDay();
    _0x58fcaf[_0x25f29f + 36 >> 2] = 0;
    _0x58fcaf[_0x25f29f + 32 >> 2] = 0;
    var _0x4a20c4 = Date.UTC(_0xe91480.getUTCFullYear(), 0, 1, 0, 0, 0, 0);
    var _0x5509eb = (_0xe91480.getTime() - _0x4a20c4) / 86400000 | 0;
    _0x58fcaf[_0x25f29f + 28 >> 2] = _0x5509eb;
    if (!_0x537c40.GMTString) {
      _0x537c40.GMTString = _0x19ca44("GMT");
    }
    _0x58fcaf[_0x25f29f + 40 >> 2] = _0x537c40.GMTString;
    return _0x25f29f;
  }
  function _0x59a193(_0x9e8689, _0x363d2f) {
    return _0x537c40(_0x9e8689, _0x363d2f);
  }
  function _0x349bc7() {
    if (_0x349bc7.called) {
      return;
    }
    _0x349bc7.called = true;
    var _0x25e993 = new Date().getFullYear();
    var _0x19210e = new Date(_0x25e993, 0, 1);
    var _0x168c6a = new Date(_0x25e993, 6, 1);
    var _0x21ecef = _0x19210e.getTimezoneOffset();
    var _0x22951d = _0x168c6a.getTimezoneOffset();
    var _0x55351f = Math.max(_0x21ecef, _0x22951d);
    _0x58fcaf[_0x323128() >> 2] = _0x55351f * 60;
    _0x58fcaf[_0x524842() >> 2] = Number(_0x21ecef != _0x22951d);
    function _0x443bd2(_0x189517) {
      var _0x4a991e = _0x189517.toTimeString().match(/\(([A-Za-z ]+)\)$/);
      if (_0x4a991e) {
        return _0x4a991e[1];
      } else {
        return "GMT";
      }
    }
    var _0x2421fd = _0x443bd2(_0x19210e);
    var _0x5b27da = _0x443bd2(_0x168c6a);
    var _0xe6e3ae = _0x19ca44(_0x2421fd);
    var _0x1813c8 = _0x19ca44(_0x5b27da);
    if (_0x22951d < _0x21ecef) {
      _0x58fcaf[_0x4ec88a() >> 2] = _0xe6e3ae;
      _0x58fcaf[_0x4ec88a() + 4 >> 2] = _0x1813c8;
    } else {
      _0x58fcaf[_0x4ec88a() >> 2] = _0x1813c8;
      _0x58fcaf[_0x4ec88a() + 4 >> 2] = _0xe6e3ae;
    }
  }
  function _0xa7aec(_0x20f489, _0x261d2f) {
    _0x349bc7();
    var _0x37b99a = new Date(_0x58fcaf[_0x20f489 >> 2] * 1000);
    _0x58fcaf[_0x261d2f >> 2] = _0x37b99a.getSeconds();
    _0x58fcaf[_0x261d2f + 4 >> 2] = _0x37b99a.getMinutes();
    _0x58fcaf[_0x261d2f + 8 >> 2] = _0x37b99a.getHours();
    _0x58fcaf[_0x261d2f + 12 >> 2] = _0x37b99a.getDate();
    _0x58fcaf[_0x261d2f + 16 >> 2] = _0x37b99a.getMonth();
    _0x58fcaf[_0x261d2f + 20 >> 2] = _0x37b99a.getFullYear() - 1900;
    _0x58fcaf[_0x261d2f + 24 >> 2] = _0x37b99a.getDay();
    var _0xc2d7f7 = new Date(_0x37b99a.getFullYear(), 0, 1);
    var _0x35415e = (_0x37b99a.getTime() - _0xc2d7f7.getTime()) / 86400000 | 0;
    _0x58fcaf[_0x261d2f + 28 >> 2] = _0x35415e;
    _0x58fcaf[_0x261d2f + 36 >> 2] = -(_0x37b99a.getTimezoneOffset() * 60);
    var _0x5009dc = new Date(_0x37b99a.getFullYear(), 6, 1).getTimezoneOffset();
    var _0x368fa3 = _0xc2d7f7.getTimezoneOffset();
    var _0x5cdb98 = (_0x5009dc != _0x368fa3 && _0x37b99a.getTimezoneOffset() == Math.min(_0x368fa3, _0x5009dc)) | 0;
    _0x58fcaf[_0x261d2f + 32 >> 2] = _0x5cdb98;
    var _0x4a1d46 = _0x58fcaf[_0x4ec88a() + (_0x5cdb98 ? 4 : 0) >> 2];
    _0x58fcaf[_0x261d2f + 40 >> 2] = _0x4a1d46;
    return _0x261d2f;
  }
  function _0x33baf6(_0x3e1815, _0x3bacc4) {
    return _0xa7aec(_0x3e1815, _0x3bacc4);
  }
  var _0x32ced9 = {
    splitPath: function (_0x827624) {
      var _0x29bcab = /^(\/?|)([\s\S]*?)((?:\.{1,2}|[^\/]+?|)(\.[^.\/]*|))(?:[\/]*)$/;
      return _0x29bcab.exec(_0x827624).slice(1);
    },
    normalizeArray: function (_0x3a2ea9, _0x233664) {
      var _0x526ee8 = 0;
      for (var _0x31b853 = _0x3a2ea9.length - 1; _0x31b853 >= 0; _0x31b853--) {
        var _0x48b157 = _0x3a2ea9[_0x31b853];
        if (_0x48b157 === ".") {
          _0x3a2ea9.splice(_0x31b853, 1);
        } else if (_0x48b157 === "..") {
          _0x3a2ea9.splice(_0x31b853, 1);
          _0x526ee8++;
        } else if (_0x526ee8) {
          _0x3a2ea9.splice(_0x31b853, 1);
          _0x526ee8--;
        }
      }
      if (_0x233664) {
        for (; _0x526ee8; _0x526ee8--) {
          _0x3a2ea9.unshift("..");
        }
      }
      return _0x3a2ea9;
    },
    normalize: function (_0x473ca8) {
      var _0x1918f1 = _0x473ca8.charAt(0) === "/";
      var _0x9aeec = _0x473ca8.substr(-1) === "/";
      _0x473ca8 = _0x32ced9.normalizeArray(_0x473ca8.split("/").filter(function (_0x2ab316) {
        return !!_0x2ab316;
      }), !_0x1918f1).join("/");
      if (!_0x473ca8 && !_0x1918f1) {
        _0x473ca8 = ".";
      }
      if (_0x473ca8 && _0x9aeec) {
        _0x473ca8 += "/";
      }
      return (_0x1918f1 ? "/" : "") + _0x473ca8;
    },
    dirname: function (_0x38b6eb) {
      var _0x3088ce = _0x32ced9.splitPath(_0x38b6eb);
      var _0x2c6541 = _0x3088ce[0];
      var _0x249ea4 = _0x3088ce[1];
      if (!_0x2c6541 && !_0x249ea4) {
        return ".";
      }
      _0x249ea4 &&= _0x249ea4.substr(0, _0x249ea4.length - 1);
      return _0x2c6541 + _0x249ea4;
    },
    basename: function (_0xa845ad) {
      if (_0xa845ad === "/") {
        return "/";
      }
      _0xa845ad = _0x32ced9.normalize(_0xa845ad);
      _0xa845ad = _0xa845ad.replace(/\/$/, "");
      var _0x8602ce = _0xa845ad.lastIndexOf("/");
      if (_0x8602ce === -1) {
        return _0xa845ad;
      }
      return _0xa845ad.substr(_0x8602ce + 1);
    },
    extname: function (_0xa08dfe) {
      return _0x32ced9.splitPath(_0xa08dfe)[3];
    },
    join: function () {
      var _0x14a1f6 = Array.prototype.slice.call(arguments, 0);
      return _0x32ced9.normalize(_0x14a1f6.join("/"));
    },
    join2: function (_0x2a47cc, _0xb647f6) {
      return _0x32ced9.normalize(_0x2a47cc + "/" + _0xb647f6);
    }
  };
  function _0x334f98() {
    if (typeof crypto === "object" && typeof crypto.getRandomValues === "function") {
      var _0x2d541b = new Uint8Array(1);
      return function () {
        crypto.getRandomValues(_0x2d541b);
        return _0x2d541b[0];
      };
    } else if (_0x140fdc) {
      try {
        var _0x16e7dc = require("crypto");
        return function () {
          return _0x16e7dc.randomBytes(1)[0];
        };
      } catch (_0xf95b54) {}
    }
    return function () {
      _0x2e4daa("randomDevice");
    };
  }
  var _0x18b70f = {
    resolve: function () {
      var _0x371621 = "";
      var _0x2e1fc7 = false;
      for (var _0x3eae0f = arguments.length - 1; _0x3eae0f >= -1 && !_0x2e1fc7; _0x3eae0f--) {
        var _0x2e2678 = _0x3eae0f >= 0 ? arguments[_0x3eae0f] : _0xee3f43.cwd();
        if (typeof _0x2e2678 !== "string") {
          throw new TypeError("Arguments to path.resolve must be strings");
        } else if (!_0x2e2678) {
          return "";
        }
        _0x371621 = _0x2e2678 + "/" + _0x371621;
        _0x2e1fc7 = _0x2e2678.charAt(0) === "/";
      }
      _0x371621 = _0x32ced9.normalizeArray(_0x371621.split("/").filter(function (_0xfee440) {
        return !!_0xfee440;
      }), !_0x2e1fc7).join("/");
      return (_0x2e1fc7 ? "/" : "") + _0x371621 || ".";
    },
    relative: function (_0x5cb379, _0x43f43d) {
      _0x5cb379 = _0x18b70f.resolve(_0x5cb379).substr(1);
      _0x43f43d = _0x18b70f.resolve(_0x43f43d).substr(1);
      function _0x308eac(_0x5eacc8) {
        var _0x5a569d = 0;
        for (; _0x5a569d < _0x5eacc8.length; _0x5a569d++) {
          if (_0x5eacc8[_0x5a569d] !== "") {
            break;
          }
        }
        var _0x32143a = _0x5eacc8.length - 1;
        for (; _0x32143a >= 0; _0x32143a--) {
          if (_0x5eacc8[_0x32143a] !== "") {
            break;
          }
        }
        if (_0x5a569d > _0x32143a) {
          return [];
        }
        return _0x5eacc8.slice(_0x5a569d, _0x32143a - _0x5a569d + 1);
      }
      var _0x7adc94 = _0x308eac(_0x5cb379.split("/"));
      var _0x3e05d6 = _0x308eac(_0x43f43d.split("/"));
      var _0x14022b = Math.min(_0x7adc94.length, _0x3e05d6.length);
      var _0x57c7f7 = _0x14022b;
      for (var _0x40e19d = 0; _0x40e19d < _0x14022b; _0x40e19d++) {
        if (_0x7adc94[_0x40e19d] !== _0x3e05d6[_0x40e19d]) {
          _0x57c7f7 = _0x40e19d;
          break;
        }
      }
      var _0x522a1b = [];
      for (var _0x40e19d = _0x57c7f7; _0x40e19d < _0x7adc94.length; _0x40e19d++) {
        _0x522a1b.push("..");
      }
      _0x522a1b = _0x522a1b.concat(_0x3e05d6.slice(_0x57c7f7));
      return _0x522a1b.join("/");
    }
  };
  var _0x531f38 = {
    ttys: [],
    init: function () {},
    shutdown: function () {},
    register: function (_0x32ca36, _0x52d3e1) {
      _0x531f38.ttys[_0x32ca36] = {
        input: [],
        output: [],
        ops: _0x52d3e1
      };
      _0xee3f43.registerDevice(_0x32ca36, _0x531f38.stream_ops);
    },
    stream_ops: {
      open: function (_0x552bd5) {
        var _0x4d6288 = _0x531f38.ttys[_0x552bd5.node.rdev];
        if (!_0x4d6288) {
          throw new _0xee3f43.ErrnoError(43);
        }
        _0x552bd5.tty = _0x4d6288;
        _0x552bd5.seekable = false;
      },
      close: function (_0x1e38fa) {
        _0x1e38fa.tty.ops.flush(_0x1e38fa.tty);
      },
      flush: function (_0x1903f9) {
        _0x1903f9.tty.ops.flush(_0x1903f9.tty);
      },
      read: function (_0x183d2a, _0x3af546, _0x27bf12, _0x32ebee, _0x4b78b4) {
        if (!_0x183d2a.tty || !_0x183d2a.tty.ops.get_char) {
          throw new _0xee3f43.ErrnoError(60);
        }
        var _0xe77eaf = 0;
        for (var _0x5f1591 = 0; _0x5f1591 < _0x32ebee; _0x5f1591++) {
          var _0x17f28b;
          try {
            _0x17f28b = _0x183d2a.tty.ops.get_char(_0x183d2a.tty);
          } catch (_0x4a085c) {
            throw new _0xee3f43.ErrnoError(29);
          }
          if (_0x17f28b === undefined && _0xe77eaf === 0) {
            throw new _0xee3f43.ErrnoError(6);
          }
          if (_0x17f28b === null || _0x17f28b === undefined) {
            break;
          }
          _0xe77eaf++;
          _0x3af546[_0x27bf12 + _0x5f1591] = _0x17f28b;
        }
        if (_0xe77eaf) {
          _0x183d2a.node.timestamp = Date.now();
        }
        return _0xe77eaf;
      },
      write: function (_0x4e8b8f, _0x48d5ea, _0x4eb44a, _0x56a748, _0x4f88d5) {
        if (!_0x4e8b8f.tty || !_0x4e8b8f.tty.ops.put_char) {
          throw new _0xee3f43.ErrnoError(60);
        }
        try {
          for (var _0x2b4df1 = 0; _0x2b4df1 < _0x56a748; _0x2b4df1++) {
            _0x4e8b8f.tty.ops.put_char(_0x4e8b8f.tty, _0x48d5ea[_0x4eb44a + _0x2b4df1]);
          }
        } catch (_0x1c397a) {
          throw new _0xee3f43.ErrnoError(29);
        }
        if (_0x56a748) {
          _0x4e8b8f.node.timestamp = Date.now();
        }
        return _0x2b4df1;
      }
    },
    default_tty_ops: {
      get_char: function (_0x4e35ff) {
        if (!_0x4e35ff.input.length) {
          var _0x1aa166 = null;
          if (_0x140fdc) {
            var _0x4f9e98 = 256;
            var _0x3bc176 = Buffer.alloc ? Buffer.alloc(_0x4f9e98) : new Buffer(_0x4f9e98);
            var _0x449b3c = 0;
            try {
              _0x449b3c = _0x25e851.readSync(process.stdin.fd, _0x3bc176, 0, _0x4f9e98, null);
            } catch (_0x14441e) {
              if (_0x14441e.toString().includes("EOF")) {
                _0x449b3c = 0;
              } else {
                throw _0x14441e;
              }
            }
            if (_0x449b3c > 0) {
              _0x1aa166 = _0x3bc176.slice(0, _0x449b3c).toString("utf-8");
            } else {
              _0x1aa166 = null;
            }
          } else if (typeof window != "undefined" && typeof window.prompt == "function") {
            _0x1aa166 = window.prompt("Input: ");
            if (_0x1aa166 !== null) {
              _0x1aa166 += "\n";
            }
          } else if (typeof readline == "function") {
            _0x1aa166 = readline();
            if (_0x1aa166 !== null) {
              _0x1aa166 += "\n";
            }
          }
          if (!_0x1aa166) {
            return null;
          }
          _0x4e35ff.input = _0x160af2(_0x1aa166, true);
        }
        return _0x4e35ff.input.shift();
      },
      put_char: function (_0x13ac99, _0xf5cf5e) {
        if (_0xf5cf5e === null || _0xf5cf5e === 10) {
          _0x424bf2(_0x339ec6(_0x13ac99.output, 0));
          _0x13ac99.output = [];
        } else if (_0xf5cf5e != 0) {
          _0x13ac99.output.push(_0xf5cf5e);
        }
      },
      flush: function (_0x10ba00) {
        if (_0x10ba00.output && _0x10ba00.output.length > 0) {
          _0x424bf2(_0x339ec6(_0x10ba00.output, 0));
          _0x10ba00.output = [];
        }
      }
    },
    default_tty1_ops: {
      put_char: function (_0x20f0f5, _0x295418) {
        if (_0x295418 === null || _0x295418 === 10) {
          _0x1717db(_0x339ec6(_0x20f0f5.output, 0));
          _0x20f0f5.output = [];
        } else if (_0x295418 != 0) {
          _0x20f0f5.output.push(_0x295418);
        }
      },
      flush: function (_0x34fbd5) {
        if (_0x34fbd5.output && _0x34fbd5.output.length > 0) {
          _0x1717db(_0x339ec6(_0x34fbd5.output, 0));
          _0x34fbd5.output = [];
        }
      }
    }
  };
  function _0x33473e(_0x325d2d) {
    var _0x54a82b = _0x5a744a(_0x325d2d, 65536);
    var _0x50ccb4 = _0x58620b(_0x54a82b);
    while (_0x325d2d < _0x54a82b) {
      _0x5a8ff8[_0x50ccb4 + _0x325d2d++] = 0;
    }
    return _0x50ccb4;
  }
  var _0x199b3e = {
    ops_table: null,
    mount: function (_0x49868b) {
      return _0x199b3e.createNode(null, "/", 16895, 0);
    },
    createNode: function (_0x3d6a50, _0x37469e, _0x2c84f9, _0x3625d6) {
      if (_0xee3f43.isBlkdev(_0x2c84f9) || _0xee3f43.isFIFO(_0x2c84f9)) {
        throw new _0xee3f43.ErrnoError(63);
      }
      if (!_0x199b3e.ops_table) {
        _0x199b3e.ops_table = {
          dir: {
            node: {
              getattr: _0x199b3e.node_ops.getattr,
              setattr: _0x199b3e.node_ops.setattr,
              lookup: _0x199b3e.node_ops.lookup,
              mknod: _0x199b3e.node_ops.mknod,
              rename: _0x199b3e.node_ops.rename,
              unlink: _0x199b3e.node_ops.unlink,
              rmdir: _0x199b3e.node_ops.rmdir,
              readdir: _0x199b3e.node_ops.readdir,
              symlink: _0x199b3e.node_ops.symlink
            },
            stream: {
              llseek: _0x199b3e.stream_ops.llseek
            }
          },
          file: {
            node: {
              getattr: _0x199b3e.node_ops.getattr,
              setattr: _0x199b3e.node_ops.setattr
            },
            stream: {
              llseek: _0x199b3e.stream_ops.llseek,
              read: _0x199b3e.stream_ops.read,
              write: _0x199b3e.stream_ops.write,
              allocate: _0x199b3e.stream_ops.allocate,
              mmap: _0x199b3e.stream_ops.mmap,
              msync: _0x199b3e.stream_ops.msync
            }
          },
          link: {
            node: {
              getattr: _0x199b3e.node_ops.getattr,
              setattr: _0x199b3e.node_ops.setattr,
              readlink: _0x199b3e.node_ops.readlink
            },
            stream: {}
          },
          chrdev: {
            node: {
              getattr: _0x199b3e.node_ops.getattr,
              setattr: _0x199b3e.node_ops.setattr
            },
            stream: _0xee3f43.chrdev_stream_ops
          }
        };
      }
      var _0x46d799 = _0xee3f43.createNode(_0x3d6a50, _0x37469e, _0x2c84f9, _0x3625d6);
      if (_0xee3f43.isDir(_0x46d799.mode)) {
        _0x46d799.node_ops = _0x199b3e.ops_table.dir.node;
        _0x46d799.stream_ops = _0x199b3e.ops_table.dir.stream;
        _0x46d799.contents = {};
      } else if (_0xee3f43.isFile(_0x46d799.mode)) {
        _0x46d799.node_ops = _0x199b3e.ops_table.file.node;
        _0x46d799.stream_ops = _0x199b3e.ops_table.file.stream;
        _0x46d799.usedBytes = 0;
        _0x46d799.contents = null;
      } else if (_0xee3f43.isLink(_0x46d799.mode)) {
        _0x46d799.node_ops = _0x199b3e.ops_table.link.node;
        _0x46d799.stream_ops = _0x199b3e.ops_table.link.stream;
      } else if (_0xee3f43.isChrdev(_0x46d799.mode)) {
        _0x46d799.node_ops = _0x199b3e.ops_table.chrdev.node;
        _0x46d799.stream_ops = _0x199b3e.ops_table.chrdev.stream;
      }
      _0x46d799.timestamp = Date.now();
      if (_0x3d6a50) {
        _0x3d6a50.contents[_0x37469e] = _0x46d799;
        _0x3d6a50.timestamp = _0x46d799.timestamp;
      }
      return _0x46d799;
    },
    getFileDataAsTypedArray: function (_0x15d7b3) {
      if (!_0x15d7b3.contents) {
        return new Uint8Array(0);
      }
      if (_0x15d7b3.contents.subarray) {
        return _0x15d7b3.contents.subarray(0, _0x15d7b3.usedBytes);
      }
      return new Uint8Array(_0x15d7b3.contents);
    },
    expandFileStorage: function (_0x3ff372, _0x40ffc5) {
      var _0x2d8864 = _0x3ff372.contents ? _0x3ff372.contents.length : 0;
      if (_0x2d8864 >= _0x40ffc5) {
        return;
      }
      var _0x8a5f89 = 1048576;
      _0x40ffc5 = Math.max(_0x40ffc5, _0x2d8864 * (_0x2d8864 < _0x8a5f89 ? 2 : 1.125) >>> 0);
      if (_0x2d8864 != 0) {
        _0x40ffc5 = Math.max(_0x40ffc5, 256);
      }
      var _0x21ac12 = _0x3ff372.contents;
      _0x3ff372.contents = new Uint8Array(_0x40ffc5);
      if (_0x3ff372.usedBytes > 0) {
        _0x3ff372.contents.set(_0x21ac12.subarray(0, _0x3ff372.usedBytes), 0);
      }
    },
    resizeFileStorage: function (_0x151f9c, _0x1c420a) {
      if (_0x151f9c.usedBytes == _0x1c420a) {
        return;
      }
      if (_0x1c420a == 0) {
        _0x151f9c.contents = null;
        _0x151f9c.usedBytes = 0;
      } else {
        var _0x1483d1 = _0x151f9c.contents;
        _0x151f9c.contents = new Uint8Array(_0x1c420a);
        if (_0x1483d1) {
          _0x151f9c.contents.set(_0x1483d1.subarray(0, Math.min(_0x1c420a, _0x151f9c.usedBytes)));
        }
        _0x151f9c.usedBytes = _0x1c420a;
      }
    },
    node_ops: {
      getattr: function (_0x20d5cc) {
        var _0x4564aa = {};
        _0x4564aa.dev = _0xee3f43.isChrdev(_0x20d5cc.mode) ? _0x20d5cc.id : 1;
        _0x4564aa.ino = _0x20d5cc.id;
        _0x4564aa.mode = _0x20d5cc.mode;
        _0x4564aa.nlink = 1;
        _0x4564aa.uid = 0;
        _0x4564aa.gid = 0;
        _0x4564aa.rdev = _0x20d5cc.rdev;
        if (_0xee3f43.isDir(_0x20d5cc.mode)) {
          _0x4564aa.size = 4096;
        } else if (_0xee3f43.isFile(_0x20d5cc.mode)) {
          _0x4564aa.size = _0x20d5cc.usedBytes;
        } else if (_0xee3f43.isLink(_0x20d5cc.mode)) {
          _0x4564aa.size = _0x20d5cc.link.length;
        } else {
          _0x4564aa.size = 0;
        }
        _0x4564aa.atime = new Date(_0x20d5cc.timestamp);
        _0x4564aa.mtime = new Date(_0x20d5cc.timestamp);
        _0x4564aa.ctime = new Date(_0x20d5cc.timestamp);
        _0x4564aa.blksize = 4096;
        _0x4564aa.blocks = Math.ceil(_0x4564aa.size / _0x4564aa.blksize);
        return _0x4564aa;
      },
      setattr: function (_0x228ef2, _0x18711b) {
        if (_0x18711b.mode !== undefined) {
          _0x228ef2.mode = _0x18711b.mode;
        }
        if (_0x18711b.timestamp !== undefined) {
          _0x228ef2.timestamp = _0x18711b.timestamp;
        }
        if (_0x18711b.size !== undefined) {
          _0x199b3e.resizeFileStorage(_0x228ef2, _0x18711b.size);
        }
      },
      lookup: function (_0xafed4a, _0x484fe7) {
        throw _0xee3f43.genericErrors[44];
      },
      mknod: function (_0x5937b3, _0x23ce4e, _0x39b0af, _0x52989d) {
        return _0x199b3e.createNode(_0x5937b3, _0x23ce4e, _0x39b0af, _0x52989d);
      },
      rename: function (_0x5be434, _0x22d867, _0x435078) {
        if (_0xee3f43.isDir(_0x5be434.mode)) {
          var _0x57d88b;
          try {
            _0x57d88b = _0xee3f43.lookupNode(_0x22d867, _0x435078);
          } catch (_0x3007bd) {}
          if (_0x57d88b) {
            for (var _0x1407ad in _0x57d88b.contents) {
              throw new _0xee3f43.ErrnoError(55);
            }
          }
        }
        delete _0x5be434.parent.contents[_0x5be434.name];
        _0x5be434.parent.timestamp = Date.now();
        _0x5be434.name = _0x435078;
        _0x22d867.contents[_0x435078] = _0x5be434;
        _0x22d867.timestamp = _0x5be434.parent.timestamp;
        _0x5be434.parent = _0x22d867;
      },
      unlink: function (_0x43b10e, _0x2e4c87) {
        delete _0x43b10e.contents[_0x2e4c87];
        _0x43b10e.timestamp = Date.now();
      },
      rmdir: function (_0x3da7dc, _0x2fb95c) {
        var _0x2a34fd = _0xee3f43.lookupNode(_0x3da7dc, _0x2fb95c);
        for (var _0x4966e7 in _0x2a34fd.contents) {
          throw new _0xee3f43.ErrnoError(55);
        }
        delete _0x3da7dc.contents[_0x2fb95c];
        _0x3da7dc.timestamp = Date.now();
      },
      readdir: function (_0x73154d) {
        var _0x15a9a8 = [".", ".."];
        for (var _0x5bfc3c in _0x73154d.contents) {
          if (!_0x73154d.contents.hasOwnProperty(_0x5bfc3c)) {
            continue;
          }
          _0x15a9a8.push(_0x5bfc3c);
        }
        return _0x15a9a8;
      },
      symlink: function (_0x50ad0f, _0x25f81f, _0x4e49cb) {
        var _0x1e4c66 = _0x199b3e.createNode(_0x50ad0f, _0x25f81f, 41471, 0);
        _0x1e4c66.link = _0x4e49cb;
        return _0x1e4c66;
      },
      readlink: function (_0x52e1d8) {
        if (!_0xee3f43.isLink(_0x52e1d8.mode)) {
          throw new _0xee3f43.ErrnoError(28);
        }
        return _0x52e1d8.link;
      }
    },
    stream_ops: {
      read: function (_0x1cb16d, _0x10add6, _0x39e8c9, _0x1c2e53, _0x56158a) {
        var _0xa50102 = _0x1cb16d.node.contents;
        if (_0x56158a >= _0x1cb16d.node.usedBytes) {
          return 0;
        }
        var _0x453dd5 = Math.min(_0x1cb16d.node.usedBytes - _0x56158a, _0x1c2e53);
        if (_0x453dd5 > 8 && _0xa50102.subarray) {
          _0x10add6.set(_0xa50102.subarray(_0x56158a, _0x56158a + _0x453dd5), _0x39e8c9);
        } else {
          for (var _0x3f8847 = 0; _0x3f8847 < _0x453dd5; _0x3f8847++) {
            _0x10add6[_0x39e8c9 + _0x3f8847] = _0xa50102[_0x56158a + _0x3f8847];
          }
        }
        return _0x453dd5;
      },
      write: function (_0x3c10eb, _0x305ae4, _0x8c1dc, _0x4b0fbb, _0x5990b3, _0xef0a87) {
        if (_0x305ae4.buffer === _0x5a8ff8.buffer) {
          _0xef0a87 = false;
        }
        if (!_0x4b0fbb) {
          return 0;
        }
        var _0x39b197 = _0x3c10eb.node;
        _0x39b197.timestamp = Date.now();
        if (_0x305ae4.subarray && (!_0x39b197.contents || _0x39b197.contents.subarray)) {
          if (_0xef0a87) {
            _0x39b197.contents = _0x305ae4.subarray(_0x8c1dc, _0x8c1dc + _0x4b0fbb);
            _0x39b197.usedBytes = _0x4b0fbb;
            return _0x4b0fbb;
          } else if (_0x39b197.usedBytes === 0 && _0x5990b3 === 0) {
            _0x39b197.contents = _0x305ae4.slice(_0x8c1dc, _0x8c1dc + _0x4b0fbb);
            _0x39b197.usedBytes = _0x4b0fbb;
            return _0x4b0fbb;
          } else if (_0x5990b3 + _0x4b0fbb <= _0x39b197.usedBytes) {
            _0x39b197.contents.set(_0x305ae4.subarray(_0x8c1dc, _0x8c1dc + _0x4b0fbb), _0x5990b3);
            return _0x4b0fbb;
          }
        }
        _0x199b3e.expandFileStorage(_0x39b197, _0x5990b3 + _0x4b0fbb);
        if (_0x39b197.contents.subarray && _0x305ae4.subarray) {
          _0x39b197.contents.set(_0x305ae4.subarray(_0x8c1dc, _0x8c1dc + _0x4b0fbb), _0x5990b3);
        } else {
          for (var _0x3ea7b1 = 0; _0x3ea7b1 < _0x4b0fbb; _0x3ea7b1++) {
            _0x39b197.contents[_0x5990b3 + _0x3ea7b1] = _0x305ae4[_0x8c1dc + _0x3ea7b1];
          }
        }
        _0x39b197.usedBytes = Math.max(_0x39b197.usedBytes, _0x5990b3 + _0x4b0fbb);
        return _0x4b0fbb;
      },
      llseek: function (_0x4e68a7, _0x52628e, _0x1aec69) {
        var _0x4a200a = _0x52628e;
        if (_0x1aec69 === 1) {
          _0x4a200a += _0x4e68a7.position;
        } else if (_0x1aec69 === 2) {
          if (_0xee3f43.isFile(_0x4e68a7.node.mode)) {
            _0x4a200a += _0x4e68a7.node.usedBytes;
          }
        }
        if (_0x4a200a < 0) {
          throw new _0xee3f43.ErrnoError(28);
        }
        return _0x4a200a;
      },
      allocate: function (_0x321116, _0x211d05, _0x36fafb) {
        _0x199b3e.expandFileStorage(_0x321116.node, _0x211d05 + _0x36fafb);
        _0x321116.node.usedBytes = Math.max(_0x321116.node.usedBytes, _0x211d05 + _0x36fafb);
      },
      mmap: function (_0x3c877a, _0x45b7b1, _0x1618c1, _0x3f6902, _0x3934fd, _0x2e1d98) {
        if (_0x45b7b1 !== 0) {
          throw new _0xee3f43.ErrnoError(28);
        }
        if (!_0xee3f43.isFile(_0x3c877a.node.mode)) {
          throw new _0xee3f43.ErrnoError(43);
        }
        var _0x1ca613;
        var _0x4ef009;
        var _0x11b0de = _0x3c877a.node.contents;
        if (!(_0x2e1d98 & 2) && _0x11b0de.buffer === _0x49ed52) {
          _0x4ef009 = false;
          _0x1ca613 = _0x11b0de.byteOffset;
        } else {
          if (_0x3f6902 > 0 || _0x3f6902 + _0x1618c1 < _0x11b0de.length) {
            if (_0x11b0de.subarray) {
              _0x11b0de = _0x11b0de.subarray(_0x3f6902, _0x3f6902 + _0x1618c1);
            } else {
              _0x11b0de = Array.prototype.slice.call(_0x11b0de, _0x3f6902, _0x3f6902 + _0x1618c1);
            }
          }
          _0x4ef009 = true;
          _0x1ca613 = _0x33473e(_0x1618c1);
          if (!_0x1ca613) {
            throw new _0xee3f43.ErrnoError(48);
          }
          _0x5a8ff8.set(_0x11b0de, _0x1ca613);
        }
        return {
          ptr: _0x1ca613,
          allocated: _0x4ef009
        };
      },
      msync: function (_0x3189bf, _0x9dc7aa, _0x51c0b1, _0x3e6c9b, _0x547073) {
        if (!_0xee3f43.isFile(_0x3189bf.node.mode)) {
          throw new _0xee3f43.ErrnoError(43);
        }
        if (_0x547073 & 2) {
          return 0;
        }
        var _0x3af825 = _0x199b3e.stream_ops.write(_0x3189bf, _0x9dc7aa, 0, _0x3e6c9b, _0x51c0b1, false);
        return 0;
      }
    }
  };
  var _0x558a23 = {
    dbs: {},
    indexedDB: function () {
      if (typeof indexedDB !== "undefined") {
        return indexedDB;
      }
      var _0x418ae9 = null;
      if (typeof window === "object") {
        _0x418ae9 = window.indexedDB || window.mozIndexedDB || window.webkitIndexedDB || window.msIndexedDB;
      }
      _0x1edac9(_0x418ae9, "IDBFS used, but indexedDB not supported");
      return _0x418ae9;
    },
    DB_VERSION: 21,
    DB_STORE_NAME: "FILE_DATA",
    mount: function (_0x36d300) {
      return _0x199b3e.mount.apply(null, arguments);
    },
    syncfs: function (_0x3e7415, _0x44838e, _0x3c2897) {
      _0x558a23.getLocalSet(_0x3e7415, function (_0x2ea358, _0x559874) {
        if (_0x2ea358) {
          return _0x3c2897(_0x2ea358);
        }
        _0x558a23.getRemoteSet(_0x3e7415, function (_0xd87802, _0x5ab576) {
          if (_0xd87802) {
            return _0x3c2897(_0xd87802);
          }
          var _0x15f278 = _0x44838e ? _0x5ab576 : _0x559874;
          var _0x1f5d32 = _0x44838e ? _0x559874 : _0x5ab576;
          _0x558a23.reconcile(_0x15f278, _0x1f5d32, _0x3c2897);
        });
      });
    },
    getDB: function (_0x2517b4, _0x1b55e8) {
      var _0x3f6924 = _0x558a23.dbs[_0x2517b4];
      if (_0x3f6924) {
        return _0x1b55e8(null, _0x3f6924);
      }
      var _0x181469;
      try {
        _0x181469 = _0x558a23.indexedDB().open(_0x2517b4, _0x558a23.DB_VERSION);
      } catch (_0x311c95) {
        return _0x1b55e8(_0x311c95);
      }
      if (!_0x181469) {
        return _0x1b55e8("Unable to connect to IndexedDB");
      }
      _0x181469.onupgradeneeded = function (_0x3919dd) {
        var _0x5d142f = _0x3919dd.target.result;
        var _0x196cf5 = _0x3919dd.target.transaction;
        var _0x214c28;
        if (_0x5d142f.objectStoreNames.contains(_0x558a23.DB_STORE_NAME)) {
          _0x214c28 = _0x196cf5.objectStore(_0x558a23.DB_STORE_NAME);
        } else {
          _0x214c28 = _0x5d142f.createObjectStore(_0x558a23.DB_STORE_NAME);
        }
        if (!_0x214c28.indexNames.contains("timestamp")) {
          _0x214c28.createIndex("timestamp", "timestamp", {
            unique: false
          });
        }
      };
      _0x181469.onsuccess = function () {
        _0x3f6924 = _0x181469.result;
        _0x558a23.dbs[_0x2517b4] = _0x3f6924;
        _0x1b55e8(null, _0x3f6924);
      };
      _0x181469.onerror = function (_0x20ace6) {
        _0x1b55e8(this.error);
        _0x20ace6.preventDefault();
      };
    },
    getLocalSet: function (_0x49af7f, _0x5cb6a2) {
      var _0x72d9c6 = {};
      function _0x46d7e3(_0xb2e908) {
        return _0xb2e908 !== "." && _0xb2e908 !== "..";
      }
      function _0x3a1390(_0x586b84) {
        return function (_0x1e0a58) {
          return _0x32ced9.join2(_0x586b84, _0x1e0a58);
        };
      }
      var _0x147292 = _0xee3f43.readdir(_0x49af7f.mountpoint).filter(_0x46d7e3).map(_0x3a1390(_0x49af7f.mountpoint));
      while (_0x147292.length) {
        var _0x48611a = _0x147292.pop();
        var _0x3f74f7;
        try {
          _0x3f74f7 = _0xee3f43.stat(_0x48611a);
        } catch (_0x179314) {
          return _0x5cb6a2(_0x179314);
        }
        if (_0xee3f43.isDir(_0x3f74f7.mode)) {
          _0x147292.push.apply(_0x147292, _0xee3f43.readdir(_0x48611a).filter(_0x46d7e3).map(_0x3a1390(_0x48611a)));
        }
        _0x72d9c6[_0x48611a] = {
          timestamp: _0x3f74f7.mtime
        };
      }
      return _0x5cb6a2(null, {
        type: "local",
        entries: _0x72d9c6
      });
    },
    getRemoteSet: function (_0x154000, _0x5b6670) {
      var _0x388861 = {};
      _0x558a23.getDB(_0x154000.mountpoint, function (_0xd90b65, _0x3e804d) {
        if (_0xd90b65) {
          return _0x5b6670(_0xd90b65);
        }
        try {
          var _0x253a27 = _0x3e804d.transaction([_0x558a23.DB_STORE_NAME], "readonly");
          _0x253a27.onerror = function (_0x41dddf) {
            _0x5b6670(this.error);
            _0x41dddf.preventDefault();
          };
          var _0x464bea = _0x253a27.objectStore(_0x558a23.DB_STORE_NAME);
          var _0x5c2406 = _0x464bea.index("timestamp");
          _0x5c2406.openKeyCursor().onsuccess = function (_0x1ec4cb) {
            var _0x36f9ee = _0x1ec4cb.target.result;
            if (!_0x36f9ee) {
              return _0x5b6670(null, {
                type: "remote",
                db: _0x3e804d,
                entries: _0x388861
              });
            }
            _0x388861[_0x36f9ee.primaryKey] = {
              timestamp: _0x36f9ee.key
            };
            _0x36f9ee.continue();
          };
        } catch (_0x146273) {
          return _0x5b6670(_0x146273);
        }
      });
    },
    loadLocalEntry: function (_0x41f050, _0x513abd) {
      var _0x142807;
      var _0x303ca8;
      try {
        var _0x5be386 = _0xee3f43.lookupPath(_0x41f050);
        _0x303ca8 = _0x5be386.node;
        _0x142807 = _0xee3f43.stat(_0x41f050);
      } catch (_0x2a4bd1) {
        return _0x513abd(_0x2a4bd1);
      }
      if (_0xee3f43.isDir(_0x142807.mode)) {
        return _0x513abd(null, {
          timestamp: _0x142807.mtime,
          mode: _0x142807.mode
        });
      } else if (_0xee3f43.isFile(_0x142807.mode)) {
        _0x303ca8.contents = _0x199b3e.getFileDataAsTypedArray(_0x303ca8);
        return _0x513abd(null, {
          timestamp: _0x142807.mtime,
          mode: _0x142807.mode,
          contents: _0x303ca8.contents
        });
      } else {
        return _0x513abd(new Error("node type not supported"));
      }
    },
    storeLocalEntry: function (_0xd5fa5b, _0x14c036, _0xa86cd7) {
      try {
        if (_0xee3f43.isDir(_0x14c036.mode)) {
          _0xee3f43.mkdirTree(_0xd5fa5b, _0x14c036.mode);
        } else if (_0xee3f43.isFile(_0x14c036.mode)) {
          _0xee3f43.writeFile(_0xd5fa5b, _0x14c036.contents, {
            canOwn: true
          });
        } else {
          return _0xa86cd7(new Error("node type not supported"));
        }
        _0xee3f43.chmod(_0xd5fa5b, _0x14c036.mode);
        _0xee3f43.utime(_0xd5fa5b, _0x14c036.timestamp, _0x14c036.timestamp);
      } catch (_0x29261d) {
        return _0xa86cd7(_0x29261d);
      }
      _0xa86cd7(null);
    },
    removeLocalEntry: function (_0x57bcc6, _0x5523d1) {
      try {
        var _0x6cf830 = _0xee3f43.lookupPath(_0x57bcc6);
        var _0x261763 = _0xee3f43.stat(_0x57bcc6);
        if (_0xee3f43.isDir(_0x261763.mode)) {
          _0xee3f43.rmdir(_0x57bcc6);
        } else if (_0xee3f43.isFile(_0x261763.mode)) {
          _0xee3f43.unlink(_0x57bcc6);
        }
      } catch (_0x3a6f04) {
        return _0x5523d1(_0x3a6f04);
      }
      _0x5523d1(null);
    },
    loadRemoteEntry: function (_0x1b63c7, _0x31d926, _0x572711) {
      var _0x58b639 = _0x1b63c7.get(_0x31d926);
      _0x58b639.onsuccess = function (_0x2e66f2) {
        _0x572711(null, _0x2e66f2.target.result);
      };
      _0x58b639.onerror = function (_0x573744) {
        _0x572711(this.error);
        _0x573744.preventDefault();
      };
    },
    storeRemoteEntry: function (_0x592883, _0x4644b7, _0x508c55, _0x4ddcfc) {
      var _0x93fdd7 = _0x592883.put(_0x508c55, _0x4644b7);
      _0x93fdd7.onsuccess = function () {
        _0x4ddcfc(null);
      };
      _0x93fdd7.onerror = function (_0x31c0de) {
        _0x4ddcfc(this.error);
        _0x31c0de.preventDefault();
      };
    },
    removeRemoteEntry: function (_0x28ab87, _0x1eb597, _0x47d0cc) {
      var _0x3a15dc = _0x28ab87.delete(_0x1eb597);
      _0x3a15dc.onsuccess = function () {
        _0x47d0cc(null);
      };
      _0x3a15dc.onerror = function (_0x5c19ed) {
        _0x47d0cc(this.error);
        _0x5c19ed.preventDefault();
      };
    },
    reconcile: function (_0xb6293, _0x5aafb5, _0x5a844b) {
      var _0x1d5ec0 = 0;
      var _0x1fd20c = [];
      Object.keys(_0xb6293.entries).forEach(function (_0x40820f) {
        var _0x938c93 = _0xb6293.entries[_0x40820f];
        var _0x125ee8 = _0x5aafb5.entries[_0x40820f];
        if (!_0x125ee8 || _0x938c93.timestamp.getTime() != _0x125ee8.timestamp.getTime()) {
          _0x1fd20c.push(_0x40820f);
          _0x1d5ec0++;
        }
      });
      var _0x4b513a = [];
      Object.keys(_0x5aafb5.entries).forEach(function (_0x13fb0b) {
        if (!_0xb6293.entries[_0x13fb0b]) {
          _0x4b513a.push(_0x13fb0b);
          _0x1d5ec0++;
        }
      });
      if (!_0x1d5ec0) {
        return _0x5a844b(null);
      }
      var _0x44f707 = false;
      var _0x374295 = _0xb6293.type === "remote" ? _0xb6293.db : _0x5aafb5.db;
      var _0x8114f1 = _0x374295.transaction([_0x558a23.DB_STORE_NAME], "readwrite");
      var _0x5cd369 = _0x8114f1.objectStore(_0x558a23.DB_STORE_NAME);
      function _0x1807fa(_0x1349dd) {
        if (_0x1349dd && !_0x44f707) {
          _0x44f707 = true;
          return _0x5a844b(_0x1349dd);
        }
      }
      _0x8114f1.onerror = function (_0x4446ec) {
        _0x1807fa(this.error);
        _0x4446ec.preventDefault();
      };
      _0x8114f1.oncomplete = function (_0xe564fd) {
        if (!_0x44f707) {
          _0x5a844b(null);
        }
      };
      _0x1fd20c.sort().forEach(function (_0x3cc086) {
        if (_0x5aafb5.type === "local") {
          _0x558a23.loadRemoteEntry(_0x5cd369, _0x3cc086, function (_0x25b4ef, _0x3d141f) {
            if (_0x25b4ef) {
              return _0x1807fa(_0x25b4ef);
            }
            _0x558a23.storeLocalEntry(_0x3cc086, _0x3d141f, _0x1807fa);
          });
        } else {
          _0x558a23.loadLocalEntry(_0x3cc086, function (_0x3199ac, _0x4cfe04) {
            if (_0x3199ac) {
              return _0x1807fa(_0x3199ac);
            }
            _0x558a23.storeRemoteEntry(_0x5cd369, _0x3cc086, _0x4cfe04, _0x1807fa);
          });
        }
      });
      _0x4b513a.sort().reverse().forEach(function (_0x212531) {
        if (_0x5aafb5.type === "local") {
          _0x558a23.removeLocalEntry(_0x212531, _0x1807fa);
        } else {
          _0x558a23.removeRemoteEntry(_0x5cd369, _0x212531, _0x1807fa);
        }
      });
    }
  };
  var _0xee3f43 = {
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
    lookupPath: function (_0x36ba85, _0x520ebe) {
      _0x36ba85 = _0x18b70f.resolve(_0xee3f43.cwd(), _0x36ba85);
      _0x520ebe = _0x520ebe || {};
      if (!_0x36ba85) {
        return {
          path: "",
          node: null
        };
      }
      var _0x49699f = {
        follow_mount: true,
        recurse_count: 0
      };
      for (var _0x4cfcc4 in _0x49699f) {
        if (_0x520ebe[_0x4cfcc4] === undefined) {
          _0x520ebe[_0x4cfcc4] = _0x49699f[_0x4cfcc4];
        }
      }
      if (_0x520ebe.recurse_count > 8) {
        throw new _0xee3f43.ErrnoError(32);
      }
      var _0x2f64ae = _0x32ced9.normalizeArray(_0x36ba85.split("/").filter(function (_0x386378) {
        return !!_0x386378;
      }), false);
      var _0x1a8f9f = _0xee3f43.root;
      var _0x483158 = "/";
      for (var _0x1affa4 = 0; _0x1affa4 < _0x2f64ae.length; _0x1affa4++) {
        var _0x462819 = _0x1affa4 === _0x2f64ae.length - 1;
        if (_0x462819 && _0x520ebe.parent) {
          break;
        }
        _0x1a8f9f = _0xee3f43.lookupNode(_0x1a8f9f, _0x2f64ae[_0x1affa4]);
        _0x483158 = _0x32ced9.join2(_0x483158, _0x2f64ae[_0x1affa4]);
        if (_0xee3f43.isMountpoint(_0x1a8f9f)) {
          if (!_0x462819 || _0x462819 && _0x520ebe.follow_mount) {
            _0x1a8f9f = _0x1a8f9f.mounted.root;
          }
        }
        if (!_0x462819 || _0x520ebe.follow) {
          var _0x6c945d = 0;
          while (_0xee3f43.isLink(_0x1a8f9f.mode)) {
            var _0x52a4f8 = _0xee3f43.readlink(_0x483158);
            _0x483158 = _0x18b70f.resolve(_0x32ced9.dirname(_0x483158), _0x52a4f8);
            var _0xb9f99b = _0xee3f43.lookupPath(_0x483158, {
              recurse_count: _0x520ebe.recurse_count
            });
            _0x1a8f9f = _0xb9f99b.node;
            if (_0x6c945d++ > 40) {
              throw new _0xee3f43.ErrnoError(32);
            }
          }
        }
      }
      return {
        path: _0x483158,
        node: _0x1a8f9f
      };
    },
    getPath: function (_0x495dae) {
      var _0x1d29de;
      while (true) {
        if (_0xee3f43.isRoot(_0x495dae)) {
          var _0x44b871 = _0x495dae.mount.mountpoint;
          if (!_0x1d29de) {
            return _0x44b871;
          }
          if (_0x44b871[_0x44b871.length - 1] !== "/") {
            return _0x44b871 + "/" + _0x1d29de;
          } else {
            return _0x44b871 + _0x1d29de;
          }
        }
        _0x1d29de = _0x1d29de ? _0x495dae.name + "/" + _0x1d29de : _0x495dae.name;
        _0x495dae = _0x495dae.parent;
      }
    },
    hashName: function (_0x4a351e, _0x27fb03) {
      var _0x1c3b4f = 0;
      for (var _0x2ab981 = 0; _0x2ab981 < _0x27fb03.length; _0x2ab981++) {
        _0x1c3b4f = (_0x1c3b4f << 5) - _0x1c3b4f + _0x27fb03.charCodeAt(_0x2ab981) | 0;
      }
      return (_0x4a351e + _0x1c3b4f >>> 0) % _0xee3f43.nameTable.length;
    },
    hashAddNode: function (_0xd8c6bc) {
      var _0x2d01d5 = _0xee3f43.hashName(_0xd8c6bc.parent.id, _0xd8c6bc.name);
      _0xd8c6bc.name_next = _0xee3f43.nameTable[_0x2d01d5];
      _0xee3f43.nameTable[_0x2d01d5] = _0xd8c6bc;
    },
    hashRemoveNode: function (_0x355d0b) {
      var _0x539bc7 = _0xee3f43.hashName(_0x355d0b.parent.id, _0x355d0b.name);
      if (_0xee3f43.nameTable[_0x539bc7] === _0x355d0b) {
        _0xee3f43.nameTable[_0x539bc7] = _0x355d0b.name_next;
      } else {
        var _0x59b3da = _0xee3f43.nameTable[_0x539bc7];
        while (_0x59b3da) {
          if (_0x59b3da.name_next === _0x355d0b) {
            _0x59b3da.name_next = _0x355d0b.name_next;
            break;
          }
          _0x59b3da = _0x59b3da.name_next;
        }
      }
    },
    lookupNode: function (_0x4c9f16, _0x492721) {
      var _0x401990 = _0xee3f43.mayLookup(_0x4c9f16);
      if (_0x401990) {
        throw new _0xee3f43.ErrnoError(_0x401990, _0x4c9f16);
      }
      var _0x5e2827 = _0xee3f43.hashName(_0x4c9f16.id, _0x492721);
      for (var _0x5b3a17 = _0xee3f43.nameTable[_0x5e2827]; _0x5b3a17; _0x5b3a17 = _0x5b3a17.name_next) {
        var _0xabfa6a = _0x5b3a17.name;
        if (_0x5b3a17.parent.id === _0x4c9f16.id && _0xabfa6a === _0x492721) {
          return _0x5b3a17;
        }
      }
      return _0xee3f43.lookup(_0x4c9f16, _0x492721);
    },
    createNode: function (_0x55a01f, _0x40455a, _0x2d6537, _0x10c0dc) {
      var _0x44f103 = new _0xee3f43.FSNode(_0x55a01f, _0x40455a, _0x2d6537, _0x10c0dc);
      _0xee3f43.hashAddNode(_0x44f103);
      return _0x44f103;
    },
    destroyNode: function (_0x2defd3) {
      _0xee3f43.hashRemoveNode(_0x2defd3);
    },
    isRoot: function (_0x48c3c7) {
      return _0x48c3c7 === _0x48c3c7.parent;
    },
    isMountpoint: function (_0x458f48) {
      return !!_0x458f48.mounted;
    },
    isFile: function (_0x2052bc) {
      return (_0x2052bc & 61440) === 32768;
    },
    isDir: function (_0x3e597f) {
      return (_0x3e597f & 61440) === 16384;
    },
    isLink: function (_0xff64e5) {
      return (_0xff64e5 & 61440) === 40960;
    },
    isChrdev: function (_0x117b38) {
      return (_0x117b38 & 61440) === 8192;
    },
    isBlkdev: function (_0x3874e9) {
      return (_0x3874e9 & 61440) === 24576;
    },
    isFIFO: function (_0x148943) {
      return (_0x148943 & 61440) === 4096;
    },
    isSocket: function (_0x548e2f) {
      return (_0x548e2f & 49152) === 49152;
    },
    flagModes: {
      r: 0,
      "r+": 2,
      w: 577,
      "w+": 578,
      a: 1089,
      "a+": 1090
    },
    modeStringToFlags: function (_0x2f81a2) {
      var _0x1ac9b9 = _0xee3f43.flagModes[_0x2f81a2];
      if (typeof _0x1ac9b9 === "undefined") {
        throw new Error("Unknown file open mode: " + _0x2f81a2);
      }
      return _0x1ac9b9;
    },
    flagsToPermissionString: function (_0x91703b) {
      var _0x397a7f = ["r", "w", "rw"][_0x91703b & 3];
      if (_0x91703b & 512) {
        _0x397a7f += "w";
      }
      return _0x397a7f;
    },
    nodePermissions: function (_0x5a75db, _0x3642b6) {
      if (_0xee3f43.ignorePermissions) {
        return 0;
      }
      if (_0x3642b6.includes("r") && !(_0x5a75db.mode & 292)) {
        return 2;
      } else if (_0x3642b6.includes("w") && !(_0x5a75db.mode & 146)) {
        return 2;
      } else if (_0x3642b6.includes("x") && !(_0x5a75db.mode & 73)) {
        return 2;
      }
      return 0;
    },
    mayLookup: function (_0x1c266f) {
      var _0xdf5444 = _0xee3f43.nodePermissions(_0x1c266f, "x");
      if (_0xdf5444) {
        return _0xdf5444;
      }
      if (!_0x1c266f.node_ops.lookup) {
        return 2;
      }
      return 0;
    },
    mayCreate: function (_0x401c6a, _0xefa333) {
      try {
        var _0x2a40fb = _0xee3f43.lookupNode(_0x401c6a, _0xefa333);
        return 20;
      } catch (_0x13b2c3) {}
      return _0xee3f43.nodePermissions(_0x401c6a, "wx");
    },
    mayDelete: function (_0x288063, _0x5eaef8, _0x2e2512) {
      var _0x394ef2;
      try {
        _0x394ef2 = _0xee3f43.lookupNode(_0x288063, _0x5eaef8);
      } catch (_0x4223ed) {
        return _0x4223ed.errno;
      }
      var _0x4c9bd1 = _0xee3f43.nodePermissions(_0x288063, "wx");
      if (_0x4c9bd1) {
        return _0x4c9bd1;
      }
      if (_0x2e2512) {
        if (!_0xee3f43.isDir(_0x394ef2.mode)) {
          return 54;
        }
        if (_0xee3f43.isRoot(_0x394ef2) || _0xee3f43.getPath(_0x394ef2) === _0xee3f43.cwd()) {
          return 10;
        }
      } else if (_0xee3f43.isDir(_0x394ef2.mode)) {
        return 31;
      }
      return 0;
    },
    mayOpen: function (_0x58d30f, _0x59720e) {
      if (!_0x58d30f) {
        return 44;
      }
      if (_0xee3f43.isLink(_0x58d30f.mode)) {
        return 32;
      } else if (_0xee3f43.isDir(_0x58d30f.mode)) {
        if (_0xee3f43.flagsToPermissionString(_0x59720e) !== "r" || _0x59720e & 512) {
          return 31;
        }
      }
      return _0xee3f43.nodePermissions(_0x58d30f, _0xee3f43.flagsToPermissionString(_0x59720e));
    },
    MAX_OPEN_FDS: 4096,
    nextfd: function (_0x441547, _0x4170fb) {
      _0x441547 = _0x441547 || 0;
      _0x4170fb = _0x4170fb || _0xee3f43.MAX_OPEN_FDS;
      for (var _0x1c4ef1 = _0x441547; _0x1c4ef1 <= _0x4170fb; _0x1c4ef1++) {
        if (!_0xee3f43.streams[_0x1c4ef1]) {
          return _0x1c4ef1;
        }
      }
      throw new _0xee3f43.ErrnoError(33);
    },
    getStream: function (_0x457541) {
      return _0xee3f43.streams[_0x457541];
    },
    createStream: function (_0x4f0158, _0x40b8e4, _0x3750e7) {
      if (!_0xee3f43.FSStream) {
        _0xee3f43.FSStream = function () {};
        _0xee3f43.FSStream.prototype = {
          object: {
            get: function () {
              return this.node;
            },
            set: function (_0x5f2f54) {
              this.node = _0x5f2f54;
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
      var _0x5d039d = new _0xee3f43.FSStream();
      for (var _0x49e994 in _0x4f0158) {
        _0x5d039d[_0x49e994] = _0x4f0158[_0x49e994];
      }
      _0x4f0158 = _0x5d039d;
      var _0x239a75 = _0xee3f43.nextfd(_0x40b8e4, _0x3750e7);
      _0x4f0158.fd = _0x239a75;
      _0xee3f43.streams[_0x239a75] = _0x4f0158;
      return _0x4f0158;
    },
    closeStream: function (_0x359962) {
      _0xee3f43.streams[_0x359962] = null;
    },
    chrdev_stream_ops: {
      open: function (_0x4add57) {
        var _0x517a48 = _0xee3f43.getDevice(_0x4add57.node.rdev);
        _0x4add57.stream_ops = _0x517a48.stream_ops;
        if (_0x4add57.stream_ops.open) {
          _0x4add57.stream_ops.open(_0x4add57);
        }
      },
      llseek: function () {
        throw new _0xee3f43.ErrnoError(70);
      }
    },
    major: function (_0x5c3502) {
      return _0x5c3502 >> 8;
    },
    minor: function (_0x1e9418) {
      return _0x1e9418 & 255;
    },
    makedev: function (_0x2553d1, _0x33c58d) {
      return _0x2553d1 << 8 | _0x33c58d;
    },
    registerDevice: function (_0x491530, _0x3272a5) {
      _0xee3f43.devices[_0x491530] = {
        stream_ops: _0x3272a5
      };
    },
    getDevice: function (_0x4ada80) {
      return _0xee3f43.devices[_0x4ada80];
    },
    getMounts: function (_0x21facb) {
      var _0x1ab7a9 = [];
      var _0x3d4d3e = [_0x21facb];
      while (_0x3d4d3e.length) {
        var _0x2b0f13 = _0x3d4d3e.pop();
        _0x1ab7a9.push(_0x2b0f13);
        _0x3d4d3e.push.apply(_0x3d4d3e, _0x2b0f13.mounts);
      }
      return _0x1ab7a9;
    },
    syncfs: function (_0x154c8d, _0x48283d) {
      if (typeof _0x154c8d === "function") {
        _0x48283d = _0x154c8d;
        _0x154c8d = false;
      }
      _0xee3f43.syncFSRequests++;
      if (_0xee3f43.syncFSRequests > 1) {
        _0x1717db("warning: " + _0xee3f43.syncFSRequests + " FS.syncfs operations in flight at once, probably just doing extra work");
      }
      var _0x10a622 = _0xee3f43.getMounts(_0xee3f43.root.mount);
      var _0x5dd0f2 = 0;
      function _0x9ba457(_0x49d761) {
        _0xee3f43.syncFSRequests--;
        return _0x48283d(_0x49d761);
      }
      function _0x551608(_0x105c4e) {
        if (_0x105c4e) {
          if (!_0x551608.errored) {
            _0x551608.errored = true;
            return _0x9ba457(_0x105c4e);
          }
          return;
        }
        if (++_0x5dd0f2 >= _0x10a622.length) {
          _0x9ba457(null);
        }
      }
      _0x10a622.forEach(function (_0x20c4b4) {
        if (!_0x20c4b4.type.syncfs) {
          return _0x551608(null);
        }
        _0x20c4b4.type.syncfs(_0x20c4b4, _0x154c8d, _0x551608);
      });
    },
    mount: function (_0x2b27e8, _0x1d2f3b, _0x22e800) {
      var _0x1c6586 = _0x22e800 === "/";
      var _0x5c67b2 = !_0x22e800;
      var _0x47ccf1;
      if (_0x1c6586 && _0xee3f43.root) {
        throw new _0xee3f43.ErrnoError(10);
      } else if (!_0x1c6586 && !_0x5c67b2) {
        var _0x470e68 = _0xee3f43.lookupPath(_0x22e800, {
          follow_mount: false
        });
        _0x22e800 = _0x470e68.path;
        _0x47ccf1 = _0x470e68.node;
        if (_0xee3f43.isMountpoint(_0x47ccf1)) {
          throw new _0xee3f43.ErrnoError(10);
        }
        if (!_0xee3f43.isDir(_0x47ccf1.mode)) {
          throw new _0xee3f43.ErrnoError(54);
        }
      }
      var _0x527eed = {
        type: _0x2b27e8,
        opts: _0x1d2f3b,
        mountpoint: _0x22e800,
        mounts: []
      };
      var _0x4ea6f4 = _0x2b27e8.mount(_0x527eed);
      _0x4ea6f4.mount = _0x527eed;
      _0x527eed.root = _0x4ea6f4;
      if (_0x1c6586) {
        _0xee3f43.root = _0x4ea6f4;
      } else if (_0x47ccf1) {
        _0x47ccf1.mounted = _0x527eed;
        if (_0x47ccf1.mount) {
          _0x47ccf1.mount.mounts.push(_0x527eed);
        }
      }
      return _0x4ea6f4;
    },
    unmount: function (_0x349cc0) {
      var _0x41a765 = _0xee3f43.lookupPath(_0x349cc0, {
        follow_mount: false
      });
      if (!_0xee3f43.isMountpoint(_0x41a765.node)) {
        throw new _0xee3f43.ErrnoError(28);
      }
      var _0x5ce155 = _0x41a765.node;
      var _0x596c03 = _0x5ce155.mounted;
      var _0xbeea3 = _0xee3f43.getMounts(_0x596c03);
      Object.keys(_0xee3f43.nameTable).forEach(function (_0x5da9d7) {
        var _0x4d2047 = _0xee3f43.nameTable[_0x5da9d7];
        while (_0x4d2047) {
          var _0x3a9a38 = _0x4d2047.name_next;
          if (_0xbeea3.includes(_0x4d2047.mount)) {
            _0xee3f43.destroyNode(_0x4d2047);
          }
          _0x4d2047 = _0x3a9a38;
        }
      });
      _0x5ce155.mounted = null;
      var _0x3f57e0 = _0x5ce155.mount.mounts.indexOf(_0x596c03);
      _0x5ce155.mount.mounts.splice(_0x3f57e0, 1);
    },
    lookup: function (_0x294cce, _0x51703a) {
      return _0x294cce.node_ops.lookup(_0x294cce, _0x51703a);
    },
    mknod: function (_0x23b978, _0x452d21, _0x53b551) {
      var _0x3b4a7c = _0xee3f43.lookupPath(_0x23b978, {
        parent: true
      });
      var _0x52aefe = _0x3b4a7c.node;
      var _0x93c8e3 = _0x32ced9.basename(_0x23b978);
      if (!_0x93c8e3 || _0x93c8e3 === "." || _0x93c8e3 === "..") {
        throw new _0xee3f43.ErrnoError(28);
      }
      var _0x3791b9 = _0xee3f43.mayCreate(_0x52aefe, _0x93c8e3);
      if (_0x3791b9) {
        throw new _0xee3f43.ErrnoError(_0x3791b9);
      }
      if (!_0x52aefe.node_ops.mknod) {
        throw new _0xee3f43.ErrnoError(63);
      }
      return _0x52aefe.node_ops.mknod(_0x52aefe, _0x93c8e3, _0x452d21, _0x53b551);
    },
    create: function (_0x200ce8, _0x1975d2) {
      _0x1975d2 = _0x1975d2 !== undefined ? _0x1975d2 : 438;
      _0x1975d2 &= 4095;
      _0x1975d2 |= 32768;
      return _0xee3f43.mknod(_0x200ce8, _0x1975d2, 0);
    },
    mkdir: function (_0xfdc52c, _0x29af88) {
      _0x29af88 = _0x29af88 !== undefined ? _0x29af88 : 511;
      _0x29af88 &= 1023;
      _0x29af88 |= 16384;
      return _0xee3f43.mknod(_0xfdc52c, _0x29af88, 0);
    },
    mkdirTree: function (_0x41804a, _0x17583d) {
      var _0x272e3d = _0x41804a.split("/");
      var _0x46b63f = "";
      for (var _0x1f9644 = 0; _0x1f9644 < _0x272e3d.length; ++_0x1f9644) {
        if (!_0x272e3d[_0x1f9644]) {
          continue;
        }
        _0x46b63f += "/" + _0x272e3d[_0x1f9644];
        try {
          _0xee3f43.mkdir(_0x46b63f, _0x17583d);
        } catch (_0x49514c) {
          if (_0x49514c.errno != 20) {
            throw _0x49514c;
          }
        }
      }
    },
    mkdev: function (_0x27565f, _0x78cef1, _0x2f6470) {
      if (typeof _0x2f6470 === "undefined") {
        _0x2f6470 = _0x78cef1;
        _0x78cef1 = 438;
      }
      _0x78cef1 |= 8192;
      return _0xee3f43.mknod(_0x27565f, _0x78cef1, _0x2f6470);
    },
    symlink: function (_0x1f9e2e, _0x1fec81) {
      if (!_0x18b70f.resolve(_0x1f9e2e)) {
        throw new _0xee3f43.ErrnoError(44);
      }
      var _0x241565 = _0xee3f43.lookupPath(_0x1fec81, {
        parent: true
      });
      var _0x205fca = _0x241565.node;
      if (!_0x205fca) {
        throw new _0xee3f43.ErrnoError(44);
      }
      var _0x1df3a1 = _0x32ced9.basename(_0x1fec81);
      var _0x11faad = _0xee3f43.mayCreate(_0x205fca, _0x1df3a1);
      if (_0x11faad) {
        throw new _0xee3f43.ErrnoError(_0x11faad);
      }
      if (!_0x205fca.node_ops.symlink) {
        throw new _0xee3f43.ErrnoError(63);
      }
      return _0x205fca.node_ops.symlink(_0x205fca, _0x1df3a1, _0x1f9e2e);
    },
    rename: function (_0x3b8663, _0xd295c3) {
      var _0x2963ab = _0x32ced9.dirname(_0x3b8663);
      var _0x2da5d3 = _0x32ced9.dirname(_0xd295c3);
      var _0x572340 = _0x32ced9.basename(_0x3b8663);
      var _0x2f5587 = _0x32ced9.basename(_0xd295c3);
      var _0x4ee3b4;
      var _0x1cd44c;
      var _0xb0cacf;
      _0x4ee3b4 = _0xee3f43.lookupPath(_0x3b8663, {
        parent: true
      });
      _0x1cd44c = _0x4ee3b4.node;
      _0x4ee3b4 = _0xee3f43.lookupPath(_0xd295c3, {
        parent: true
      });
      _0xb0cacf = _0x4ee3b4.node;
      if (!_0x1cd44c || !_0xb0cacf) {
        throw new _0xee3f43.ErrnoError(44);
      }
      if (_0x1cd44c.mount !== _0xb0cacf.mount) {
        throw new _0xee3f43.ErrnoError(75);
      }
      var _0x537c99 = _0xee3f43.lookupNode(_0x1cd44c, _0x572340);
      var _0x4f713c = _0x18b70f.relative(_0x3b8663, _0x2da5d3);
      if (_0x4f713c.charAt(0) !== ".") {
        throw new _0xee3f43.ErrnoError(28);
      }
      _0x4f713c = _0x18b70f.relative(_0xd295c3, _0x2963ab);
      if (_0x4f713c.charAt(0) !== ".") {
        throw new _0xee3f43.ErrnoError(55);
      }
      var _0x4c6c0f;
      try {
        _0x4c6c0f = _0xee3f43.lookupNode(_0xb0cacf, _0x2f5587);
      } catch (_0x46467b) {}
      if (_0x537c99 === _0x4c6c0f) {
        return;
      }
      var _0x583dc0 = _0xee3f43.isDir(_0x537c99.mode);
      var _0x1820dc = _0xee3f43.mayDelete(_0x1cd44c, _0x572340, _0x583dc0);
      if (_0x1820dc) {
        throw new _0xee3f43.ErrnoError(_0x1820dc);
      }
      _0x1820dc = _0x4c6c0f ? _0xee3f43.mayDelete(_0xb0cacf, _0x2f5587, _0x583dc0) : _0xee3f43.mayCreate(_0xb0cacf, _0x2f5587);
      if (_0x1820dc) {
        throw new _0xee3f43.ErrnoError(_0x1820dc);
      }
      if (!_0x1cd44c.node_ops.rename) {
        throw new _0xee3f43.ErrnoError(63);
      }
      if (_0xee3f43.isMountpoint(_0x537c99) || _0x4c6c0f && _0xee3f43.isMountpoint(_0x4c6c0f)) {
        throw new _0xee3f43.ErrnoError(10);
      }
      if (_0xb0cacf !== _0x1cd44c) {
        _0x1820dc = _0xee3f43.nodePermissions(_0x1cd44c, "w");
        if (_0x1820dc) {
          throw new _0xee3f43.ErrnoError(_0x1820dc);
        }
      }
      try {
        if (_0xee3f43.trackingDelegate.willMovePath) {
          _0xee3f43.trackingDelegate.willMovePath(_0x3b8663, _0xd295c3);
        }
      } catch (_0x4b13d4) {
        _0x1717db("FS.trackingDelegate['willMovePath']('" + _0x3b8663 + "', '" + _0xd295c3 + "') threw an exception: " + _0x4b13d4.message);
      }
      _0xee3f43.hashRemoveNode(_0x537c99);
      try {
        _0x1cd44c.node_ops.rename(_0x537c99, _0xb0cacf, _0x2f5587);
      } catch (_0x4ff97c) {
        throw _0x4ff97c;
      } finally {
        _0xee3f43.hashAddNode(_0x537c99);
      }
      try {
        if (_0xee3f43.trackingDelegate.onMovePath) {
          _0xee3f43.trackingDelegate.onMovePath(_0x3b8663, _0xd295c3);
        }
      } catch (_0x34ff73) {
        _0x1717db("FS.trackingDelegate['onMovePath']('" + _0x3b8663 + "', '" + _0xd295c3 + "') threw an exception: " + _0x34ff73.message);
      }
    },
    rmdir: function (_0x1c0875) {
      var _0x498742 = _0xee3f43.lookupPath(_0x1c0875, {
        parent: true
      });
      var _0x2b4031 = _0x498742.node;
      var _0x4bd35c = _0x32ced9.basename(_0x1c0875);
      var _0x5f2d14 = _0xee3f43.lookupNode(_0x2b4031, _0x4bd35c);
      var _0x3d6305 = _0xee3f43.mayDelete(_0x2b4031, _0x4bd35c, true);
      if (_0x3d6305) {
        throw new _0xee3f43.ErrnoError(_0x3d6305);
      }
      if (!_0x2b4031.node_ops.rmdir) {
        throw new _0xee3f43.ErrnoError(63);
      }
      if (_0xee3f43.isMountpoint(_0x5f2d14)) {
        throw new _0xee3f43.ErrnoError(10);
      }
      try {
        if (_0xee3f43.trackingDelegate.willDeletePath) {
          _0xee3f43.trackingDelegate.willDeletePath(_0x1c0875);
        }
      } catch (_0x574c72) {
        _0x1717db("FS.trackingDelegate['willDeletePath']('" + _0x1c0875 + "') threw an exception: " + _0x574c72.message);
      }
      _0x2b4031.node_ops.rmdir(_0x2b4031, _0x4bd35c);
      _0xee3f43.destroyNode(_0x5f2d14);
      try {
        if (_0xee3f43.trackingDelegate.onDeletePath) {
          _0xee3f43.trackingDelegate.onDeletePath(_0x1c0875);
        }
      } catch (_0x4fe25e) {
        _0x1717db("FS.trackingDelegate['onDeletePath']('" + _0x1c0875 + "') threw an exception: " + _0x4fe25e.message);
      }
    },
    readdir: function (_0x41d806) {
      var _0x1c5e99 = _0xee3f43.lookupPath(_0x41d806, {
        follow: true
      });
      var _0x401092 = _0x1c5e99.node;
      if (!_0x401092.node_ops.readdir) {
        throw new _0xee3f43.ErrnoError(54);
      }
      return _0x401092.node_ops.readdir(_0x401092);
    },
    unlink: function (_0x2bdca2) {
      var _0x3102bb = _0xee3f43.lookupPath(_0x2bdca2, {
        parent: true
      });
      var _0x54df6e = _0x3102bb.node;
      var _0x44ed96 = _0x32ced9.basename(_0x2bdca2);
      var _0x1e5031 = _0xee3f43.lookupNode(_0x54df6e, _0x44ed96);
      var _0x271330 = _0xee3f43.mayDelete(_0x54df6e, _0x44ed96, false);
      if (_0x271330) {
        throw new _0xee3f43.ErrnoError(_0x271330);
      }
      if (!_0x54df6e.node_ops.unlink) {
        throw new _0xee3f43.ErrnoError(63);
      }
      if (_0xee3f43.isMountpoint(_0x1e5031)) {
        throw new _0xee3f43.ErrnoError(10);
      }
      try {
        if (_0xee3f43.trackingDelegate.willDeletePath) {
          _0xee3f43.trackingDelegate.willDeletePath(_0x2bdca2);
        }
      } catch (_0x51fa69) {
        _0x1717db("FS.trackingDelegate['willDeletePath']('" + _0x2bdca2 + "') threw an exception: " + _0x51fa69.message);
      }
      _0x54df6e.node_ops.unlink(_0x54df6e, _0x44ed96);
      _0xee3f43.destroyNode(_0x1e5031);
      try {
        if (_0xee3f43.trackingDelegate.onDeletePath) {
          _0xee3f43.trackingDelegate.onDeletePath(_0x2bdca2);
        }
      } catch (_0x14d372) {
        _0x1717db("FS.trackingDelegate['onDeletePath']('" + _0x2bdca2 + "') threw an exception: " + _0x14d372.message);
      }
    },
    readlink: function (_0x5871bb) {
      var _0x48d2b1 = _0xee3f43.lookupPath(_0x5871bb);
      var _0x39d55c = _0x48d2b1.node;
      if (!_0x39d55c) {
        throw new _0xee3f43.ErrnoError(44);
      }
      if (!_0x39d55c.node_ops.readlink) {
        throw new _0xee3f43.ErrnoError(28);
      }
      return _0x18b70f.resolve(_0xee3f43.getPath(_0x39d55c.parent), _0x39d55c.node_ops.readlink(_0x39d55c));
    },
    stat: function (_0x43434b, _0x389bea) {
      var _0x389150 = _0xee3f43.lookupPath(_0x43434b, {
        follow: !_0x389bea
      });
      var _0x27b8f1 = _0x389150.node;
      if (!_0x27b8f1) {
        throw new _0xee3f43.ErrnoError(44);
      }
      if (!_0x27b8f1.node_ops.getattr) {
        throw new _0xee3f43.ErrnoError(63);
      }
      return _0x27b8f1.node_ops.getattr(_0x27b8f1);
    },
    lstat: function (_0x4b460c) {
      return _0xee3f43.stat(_0x4b460c, true);
    },
    chmod: function (_0x46cd70, _0x525031, _0x210f1e) {
      var _0xd0ea75;
      if (typeof _0x46cd70 === "string") {
        var _0x3c03d9 = _0xee3f43.lookupPath(_0x46cd70, {
          follow: !_0x210f1e
        });
        _0xd0ea75 = _0x3c03d9.node;
      } else {
        _0xd0ea75 = _0x46cd70;
      }
      if (!_0xd0ea75.node_ops.setattr) {
        throw new _0xee3f43.ErrnoError(63);
      }
      _0xd0ea75.node_ops.setattr(_0xd0ea75, {
        mode: _0x525031 & 4095 | _0xd0ea75.mode & ~4095,
        timestamp: Date.now()
      });
    },
    lchmod: function (_0xb2f4db, _0x4f1ba7) {
      _0xee3f43.chmod(_0xb2f4db, _0x4f1ba7, true);
    },
    fchmod: function (_0x12c346, _0x4cad09) {
      var _0x4a9882 = _0xee3f43.getStream(_0x12c346);
      if (!_0x4a9882) {
        throw new _0xee3f43.ErrnoError(8);
      }
      _0xee3f43.chmod(_0x4a9882.node, _0x4cad09);
    },
    chown: function (_0x4de4d6, _0x4f465a, _0x3514a5, _0x298ad3) {
      var _0x361f47;
      if (typeof _0x4de4d6 === "string") {
        var _0x439585 = _0xee3f43.lookupPath(_0x4de4d6, {
          follow: !_0x298ad3
        });
        _0x361f47 = _0x439585.node;
      } else {
        _0x361f47 = _0x4de4d6;
      }
      if (!_0x361f47.node_ops.setattr) {
        throw new _0xee3f43.ErrnoError(63);
      }
      _0x361f47.node_ops.setattr(_0x361f47, {
        timestamp: Date.now()
      });
    },
    lchown: function (_0x47788a, _0x30b7ff, _0x47cc57) {
      _0xee3f43.chown(_0x47788a, _0x30b7ff, _0x47cc57, true);
    },
    fchown: function (_0x51a075, _0x4afca1, _0x4aa29d) {
      var _0x5179ec = _0xee3f43.getStream(_0x51a075);
      if (!_0x5179ec) {
        throw new _0xee3f43.ErrnoError(8);
      }
      _0xee3f43.chown(_0x5179ec.node, _0x4afca1, _0x4aa29d);
    },
    truncate: function (_0x202ece, _0x15703e) {
      if (_0x15703e < 0) {
        throw new _0xee3f43.ErrnoError(28);
      }
      var _0x3dbf9a;
      if (typeof _0x202ece === "string") {
        var _0x416319 = _0xee3f43.lookupPath(_0x202ece, {
          follow: true
        });
        _0x3dbf9a = _0x416319.node;
      } else {
        _0x3dbf9a = _0x202ece;
      }
      if (!_0x3dbf9a.node_ops.setattr) {
        throw new _0xee3f43.ErrnoError(63);
      }
      if (_0xee3f43.isDir(_0x3dbf9a.mode)) {
        throw new _0xee3f43.ErrnoError(31);
      }
      if (!_0xee3f43.isFile(_0x3dbf9a.mode)) {
        throw new _0xee3f43.ErrnoError(28);
      }
      var _0x3680ee = _0xee3f43.nodePermissions(_0x3dbf9a, "w");
      if (_0x3680ee) {
        throw new _0xee3f43.ErrnoError(_0x3680ee);
      }
      _0x3dbf9a.node_ops.setattr(_0x3dbf9a, {
        size: _0x15703e,
        timestamp: Date.now()
      });
    },
    ftruncate: function (_0x4a087e, _0xbb3b61) {
      var _0x1f80b9 = _0xee3f43.getStream(_0x4a087e);
      if (!_0x1f80b9) {
        throw new _0xee3f43.ErrnoError(8);
      }
      if ((_0x1f80b9.flags & 2097155) === 0) {
        throw new _0xee3f43.ErrnoError(28);
      }
      _0xee3f43.truncate(_0x1f80b9.node, _0xbb3b61);
    },
    utime: function (_0x311caf, _0x440b20, _0x1cb92a) {
      var _0x52dae4 = _0xee3f43.lookupPath(_0x311caf, {
        follow: true
      });
      var _0x49634d = _0x52dae4.node;
      _0x49634d.node_ops.setattr(_0x49634d, {
        timestamp: Math.max(_0x440b20, _0x1cb92a)
      });
    },
    open: function (_0x2965d8, _0x4781b9, _0x180292, _0x5998f1, _0x401796) {
      if (_0x2965d8 === "") {
        throw new _0xee3f43.ErrnoError(44);
      }
      _0x4781b9 = typeof _0x4781b9 === "string" ? _0xee3f43.modeStringToFlags(_0x4781b9) : _0x4781b9;
      _0x180292 = typeof _0x180292 === "undefined" ? 438 : _0x180292;
      if (_0x4781b9 & 64) {
        _0x180292 = _0x180292 & 4095 | 32768;
      } else {
        _0x180292 = 0;
      }
      var _0x3453d1;
      if (typeof _0x2965d8 === "object") {
        _0x3453d1 = _0x2965d8;
      } else {
        _0x2965d8 = _0x32ced9.normalize(_0x2965d8);
        try {
          var _0x55d67b = _0xee3f43.lookupPath(_0x2965d8, {
            follow: !(_0x4781b9 & 131072)
          });
          _0x3453d1 = _0x55d67b.node;
        } catch (_0x399e79) {}
      }
      var _0x1569d2 = false;
      if (_0x4781b9 & 64) {
        if (_0x3453d1) {
          if (_0x4781b9 & 128) {
            throw new _0xee3f43.ErrnoError(20);
          }
        } else {
          _0x3453d1 = _0xee3f43.mknod(_0x2965d8, _0x180292, 0);
          _0x1569d2 = true;
        }
      }
      if (!_0x3453d1) {
        throw new _0xee3f43.ErrnoError(44);
      }
      if (_0xee3f43.isChrdev(_0x3453d1.mode)) {
        _0x4781b9 &= ~512;
      }
      if (_0x4781b9 & 65536 && !_0xee3f43.isDir(_0x3453d1.mode)) {
        throw new _0xee3f43.ErrnoError(54);
      }
      if (!_0x1569d2) {
        var _0x7d3d04 = _0xee3f43.mayOpen(_0x3453d1, _0x4781b9);
        if (_0x7d3d04) {
          throw new _0xee3f43.ErrnoError(_0x7d3d04);
        }
      }
      if (_0x4781b9 & 512) {
        _0xee3f43.truncate(_0x3453d1, 0);
      }
      _0x4781b9 &= ~131712;
      var _0xc81601 = _0xee3f43.createStream({
        node: _0x3453d1,
        path: _0xee3f43.getPath(_0x3453d1),
        flags: _0x4781b9,
        seekable: true,
        position: 0,
        stream_ops: _0x3453d1.stream_ops,
        ungotten: [],
        error: false
      }, _0x5998f1, _0x401796);
      if (_0xc81601.stream_ops.open) {
        _0xc81601.stream_ops.open(_0xc81601);
      }
      if (_0x3b068f.logReadFiles && !(_0x4781b9 & 1)) {
        if (!_0xee3f43.readFiles) {
          _0xee3f43.readFiles = {};
        }
        if (!(_0x2965d8 in _0xee3f43.readFiles)) {
          _0xee3f43.readFiles[_0x2965d8] = 1;
          _0x1717db("FS.trackingDelegate error on read file: " + _0x2965d8);
        }
      }
      try {
        if (_0xee3f43.trackingDelegate.onOpenFile) {
          var _0x4b13de = 0;
          if ((_0x4781b9 & 2097155) !== 1) {
            _0x4b13de |= _0xee3f43.tracking.openFlags.READ;
          }
          if ((_0x4781b9 & 2097155) !== 0) {
            _0x4b13de |= _0xee3f43.tracking.openFlags.WRITE;
          }
          _0xee3f43.trackingDelegate.onOpenFile(_0x2965d8, _0x4b13de);
        }
      } catch (_0x1fa39a) {
        _0x1717db("FS.trackingDelegate['onOpenFile']('" + _0x2965d8 + "', flags) threw an exception: " + _0x1fa39a.message);
      }
      return _0xc81601;
    },
    close: function (_0x28f5d3) {
      if (_0xee3f43.isClosed(_0x28f5d3)) {
        throw new _0xee3f43.ErrnoError(8);
      }
      if (_0x28f5d3.getdents) {
        _0x28f5d3.getdents = null;
      }
      try {
        if (_0x28f5d3.stream_ops.close) {
          _0x28f5d3.stream_ops.close(_0x28f5d3);
        }
      } catch (_0x5d0666) {
        throw _0x5d0666;
      } finally {
        _0xee3f43.closeStream(_0x28f5d3.fd);
      }
      _0x28f5d3.fd = null;
    },
    isClosed: function (_0x1d4957) {
      return _0x1d4957.fd === null;
    },
    llseek: function (_0x518f75, _0x59620d, _0x2e8975) {
      if (_0xee3f43.isClosed(_0x518f75)) {
        throw new _0xee3f43.ErrnoError(8);
      }
      if (!_0x518f75.seekable || !_0x518f75.stream_ops.llseek) {
        throw new _0xee3f43.ErrnoError(70);
      }
      if (_0x2e8975 != 0 && _0x2e8975 != 1 && _0x2e8975 != 2) {
        throw new _0xee3f43.ErrnoError(28);
      }
      _0x518f75.position = _0x518f75.stream_ops.llseek(_0x518f75, _0x59620d, _0x2e8975);
      _0x518f75.ungotten = [];
      return _0x518f75.position;
    },
    read: function (_0x40795a, _0x5181eb, _0x569239, _0x3d7feb, _0x18e439) {
      if (_0x3d7feb < 0 || _0x18e439 < 0) {
        throw new _0xee3f43.ErrnoError(28);
      }
      if (_0xee3f43.isClosed(_0x40795a)) {
        throw new _0xee3f43.ErrnoError(8);
      }
      if ((_0x40795a.flags & 2097155) === 1) {
        throw new _0xee3f43.ErrnoError(8);
      }
      if (_0xee3f43.isDir(_0x40795a.node.mode)) {
        throw new _0xee3f43.ErrnoError(31);
      }
      if (!_0x40795a.stream_ops.read) {
        throw new _0xee3f43.ErrnoError(28);
      }
      var _0x1da6c5 = typeof _0x18e439 !== "undefined";
      if (!_0x1da6c5) {
        _0x18e439 = _0x40795a.position;
      } else if (!_0x40795a.seekable) {
        throw new _0xee3f43.ErrnoError(70);
      }
      var _0x1de2d4 = _0x40795a.stream_ops.read(_0x40795a, _0x5181eb, _0x569239, _0x3d7feb, _0x18e439);
      if (!_0x1da6c5) {
        _0x40795a.position += _0x1de2d4;
      }
      return _0x1de2d4;
    },
    write: function (_0x197876, _0x1573c1, _0x58da76, _0x3b9ec7, _0x56efc9, _0xb251) {
      if (_0x3b9ec7 < 0 || _0x56efc9 < 0) {
        throw new _0xee3f43.ErrnoError(28);
      }
      if (_0xee3f43.isClosed(_0x197876)) {
        throw new _0xee3f43.ErrnoError(8);
      }
      if ((_0x197876.flags & 2097155) === 0) {
        throw new _0xee3f43.ErrnoError(8);
      }
      if (_0xee3f43.isDir(_0x197876.node.mode)) {
        throw new _0xee3f43.ErrnoError(31);
      }
      if (!_0x197876.stream_ops.write) {
        throw new _0xee3f43.ErrnoError(28);
      }
      if (_0x197876.seekable && _0x197876.flags & 1024) {
        _0xee3f43.llseek(_0x197876, 0, 2);
      }
      var _0x3eb644 = typeof _0x56efc9 !== "undefined";
      if (!_0x3eb644) {
        _0x56efc9 = _0x197876.position;
      } else if (!_0x197876.seekable) {
        throw new _0xee3f43.ErrnoError(70);
      }
      var _0x465b02 = _0x197876.stream_ops.write(_0x197876, _0x1573c1, _0x58da76, _0x3b9ec7, _0x56efc9, _0xb251);
      if (!_0x3eb644) {
        _0x197876.position += _0x465b02;
      }
      try {
        if (_0x197876.path && _0xee3f43.trackingDelegate.onWriteToFile) {
          _0xee3f43.trackingDelegate.onWriteToFile(_0x197876.path);
        }
      } catch (_0x51508c) {
        _0x1717db("FS.trackingDelegate['onWriteToFile']('" + _0x197876.path + "') threw an exception: " + _0x51508c.message);
      }
      return _0x465b02;
    },
    allocate: function (_0x93dfdb, _0x2541f8, _0x22b309) {
      if (_0xee3f43.isClosed(_0x93dfdb)) {
        throw new _0xee3f43.ErrnoError(8);
      }
      if (_0x2541f8 < 0 || _0x22b309 <= 0) {
        throw new _0xee3f43.ErrnoError(28);
      }
      if ((_0x93dfdb.flags & 2097155) === 0) {
        throw new _0xee3f43.ErrnoError(8);
      }
      if (!_0xee3f43.isFile(_0x93dfdb.node.mode) && !_0xee3f43.isDir(_0x93dfdb.node.mode)) {
        throw new _0xee3f43.ErrnoError(43);
      }
      if (!_0x93dfdb.stream_ops.allocate) {
        throw new _0xee3f43.ErrnoError(138);
      }
      _0x93dfdb.stream_ops.allocate(_0x93dfdb, _0x2541f8, _0x22b309);
    },
    mmap: function (_0x40343b, _0xde5bd8, _0x554701, _0xf33a55, _0x4bed98, _0x50e729) {
      if ((_0x4bed98 & 2) !== 0 && (_0x50e729 & 2) === 0 && (_0x40343b.flags & 2097155) !== 2) {
        throw new _0xee3f43.ErrnoError(2);
      }
      if ((_0x40343b.flags & 2097155) === 1) {
        throw new _0xee3f43.ErrnoError(2);
      }
      if (!_0x40343b.stream_ops.mmap) {
        throw new _0xee3f43.ErrnoError(43);
      }
      return _0x40343b.stream_ops.mmap(_0x40343b, _0xde5bd8, _0x554701, _0xf33a55, _0x4bed98, _0x50e729);
    },
    msync: function (_0x5d4de2, _0xfac824, _0x5d5551, _0x238ede, _0x172344) {
      if (!_0x5d4de2 || !_0x5d4de2.stream_ops.msync) {
        return 0;
      }
      return _0x5d4de2.stream_ops.msync(_0x5d4de2, _0xfac824, _0x5d5551, _0x238ede, _0x172344);
    },
    munmap: function (_0x4a1c52) {
      return 0;
    },
    ioctl: function (_0x540d16, _0x212514, _0x43d26b) {
      if (!_0x540d16.stream_ops.ioctl) {
        throw new _0xee3f43.ErrnoError(59);
      }
      return _0x540d16.stream_ops.ioctl(_0x540d16, _0x212514, _0x43d26b);
    },
    readFile: function (_0x54cf9e, _0x5e6ddf) {
      _0x5e6ddf = _0x5e6ddf || {};
      _0x5e6ddf.flags = _0x5e6ddf.flags || 0;
      _0x5e6ddf.encoding = _0x5e6ddf.encoding || "binary";
      if (_0x5e6ddf.encoding !== "utf8" && _0x5e6ddf.encoding !== "binary") {
        throw new Error("Invalid encoding type \"" + _0x5e6ddf.encoding + "\"");
      }
      var _0x18cc79;
      var _0x174f76 = _0xee3f43.open(_0x54cf9e, _0x5e6ddf.flags);
      var _0x4aa25c = _0xee3f43.stat(_0x54cf9e);
      var _0x46c649 = _0x4aa25c.size;
      var _0x1e53f0 = new Uint8Array(_0x46c649);
      _0xee3f43.read(_0x174f76, _0x1e53f0, 0, _0x46c649, 0);
      if (_0x5e6ddf.encoding === "utf8") {
        _0x18cc79 = _0x339ec6(_0x1e53f0, 0);
      } else if (_0x5e6ddf.encoding === "binary") {
        _0x18cc79 = _0x1e53f0;
      }
      _0xee3f43.close(_0x174f76);
      return _0x18cc79;
    },
    writeFile: function (_0x372605, _0x4bf885, _0x5d6a78) {
      _0x5d6a78 = _0x5d6a78 || {};
      _0x5d6a78.flags = _0x5d6a78.flags || 577;
      var _0x427cfd = _0xee3f43.open(_0x372605, _0x5d6a78.flags, _0x5d6a78.mode);
      if (typeof _0x4bf885 === "string") {
        var _0x27d746 = new Uint8Array(_0x2705ae(_0x4bf885) + 1);
        var _0x646d17 = _0x29bc42(_0x4bf885, _0x27d746, 0, _0x27d746.length);
        _0xee3f43.write(_0x427cfd, _0x27d746, 0, _0x646d17, undefined, _0x5d6a78.canOwn);
      } else if (ArrayBuffer.isView(_0x4bf885)) {
        _0xee3f43.write(_0x427cfd, _0x4bf885, 0, _0x4bf885.byteLength, undefined, _0x5d6a78.canOwn);
      } else {
        throw new Error("Unsupported data type");
      }
      _0xee3f43.close(_0x427cfd);
    },
    cwd: function () {
      return _0xee3f43.currentPath;
    },
    chdir: function (_0x46abad) {
      var _0x3a6560 = _0xee3f43.lookupPath(_0x46abad, {
        follow: true
      });
      if (_0x3a6560.node === null) {
        throw new _0xee3f43.ErrnoError(44);
      }
      if (!_0xee3f43.isDir(_0x3a6560.node.mode)) {
        throw new _0xee3f43.ErrnoError(54);
      }
      var _0xdbd898 = _0xee3f43.nodePermissions(_0x3a6560.node, "x");
      if (_0xdbd898) {
        throw new _0xee3f43.ErrnoError(_0xdbd898);
      }
      _0xee3f43.currentPath = _0x3a6560.path;
    },
    createDefaultDirectories: function () {
      _0xee3f43.mkdir("/tmp");
      _0xee3f43.mkdir("/home");
      _0xee3f43.mkdir("/home/web_user");
    },
    createDefaultDevices: function () {
      _0xee3f43.mkdir("/dev");
      _0xee3f43.registerDevice(_0xee3f43.makedev(1, 3), {
        read: function () {
          return 0;
        },
        write: function (_0x3050df, _0x106482, _0x52555b, _0x290e9d, _0x17bddd) {
          return _0x290e9d;
        }
      });
      _0xee3f43.mkdev("/dev/null", _0xee3f43.makedev(1, 3));
      _0x531f38.register(_0xee3f43.makedev(5, 0), _0x531f38.default_tty_ops);
      _0x531f38.register(_0xee3f43.makedev(6, 0), _0x531f38.default_tty1_ops);
      _0xee3f43.mkdev("/dev/tty", _0xee3f43.makedev(5, 0));
      _0xee3f43.mkdev("/dev/tty1", _0xee3f43.makedev(6, 0));
      var _0x40bf91 = _0x334f98();
      _0xee3f43.createDevice("/dev", "random", _0x40bf91);
      _0xee3f43.createDevice("/dev", "urandom", _0x40bf91);
      _0xee3f43.mkdir("/dev/shm");
      _0xee3f43.mkdir("/dev/shm/tmp");
    },
    createSpecialDirectories: function () {
      _0xee3f43.mkdir("/proc");
      var _0x3e9e52 = _0xee3f43.mkdir("/proc/self");
      _0xee3f43.mkdir("/proc/self/fd");
      _0xee3f43.mount({
        mount: function () {
          var _0x4bdbd5 = _0xee3f43.createNode(_0x3e9e52, "fd", 16895, 73);
          _0x4bdbd5.node_ops = {
            lookup: function (_0x2db3fe, _0x80c89a) {
              var _0x1ea662 = +_0x80c89a;
              var _0x31a13f = _0xee3f43.getStream(_0x1ea662);
              if (!_0x31a13f) {
                throw new _0xee3f43.ErrnoError(8);
              }
              var _0xc85dab = {
                parent: null,
                mount: {
                  mountpoint: "fake"
                },
                node_ops: {
                  readlink: function () {
                    return _0x31a13f.path;
                  }
                }
              };
              _0xc85dab.parent = _0xc85dab;
              return _0xc85dab;
            }
          };
          return _0x4bdbd5;
        }
      }, {}, "/proc/self/fd");
    },
    createStandardStreams: function () {
      if (_0x3b068f.stdin) {
        _0xee3f43.createDevice("/dev", "stdin", _0x3b068f.stdin);
      } else {
        _0xee3f43.symlink("/dev/tty", "/dev/stdin");
      }
      if (_0x3b068f.stdout) {
        _0xee3f43.createDevice("/dev", "stdout", null, _0x3b068f.stdout);
      } else {
        _0xee3f43.symlink("/dev/tty", "/dev/stdout");
      }
      if (_0x3b068f.stderr) {
        _0xee3f43.createDevice("/dev", "stderr", null, _0x3b068f.stderr);
      } else {
        _0xee3f43.symlink("/dev/tty1", "/dev/stderr");
      }
      var _0xba4e0d = _0xee3f43.open("/dev/stdin", 0);
      var _0x1e9f0f = _0xee3f43.open("/dev/stdout", 1);
      var _0x5bb461 = _0xee3f43.open("/dev/stderr", 1);
    },
    ensureErrnoError: function () {
      if (_0xee3f43.ErrnoError) {
        return;
      }
      _0xee3f43.ErrnoError = function _0x394aa7(_0x3eabe1, _0x52d706) {
        this.node = _0x52d706;
        this.setErrno = function (_0x4da4ac) {
          this.errno = _0x4da4ac;
        };
        this.setErrno(_0x3eabe1);
        this.message = "FS error";
      };
      _0xee3f43.ErrnoError.prototype = new Error();
      _0xee3f43.ErrnoError.prototype.constructor = _0xee3f43.ErrnoError;
      [44].forEach(function (_0x269bd6) {
        _0xee3f43.genericErrors[_0x269bd6] = new _0xee3f43.ErrnoError(_0x269bd6);
        _0xee3f43.genericErrors[_0x269bd6].stack = "<generic error, no stack>";
      });
    },
    staticInit: function () {
      _0xee3f43.ensureErrnoError();
      _0xee3f43.nameTable = new Array(4096);
      _0xee3f43.mount(_0x199b3e, {}, "/");
      _0xee3f43.createDefaultDirectories();
      _0xee3f43.createDefaultDevices();
      _0xee3f43.createSpecialDirectories();
      _0xee3f43.filesystems = {
        MEMFS: _0x199b3e,
        IDBFS: _0x558a23
      };
    },
    init: function (_0x2c7195, _0x36901b, _0x3f6f90) {
      _0xee3f43.init.initialized = true;
      _0xee3f43.ensureErrnoError();
      _0x3b068f.stdin = _0x2c7195 || _0x3b068f.stdin;
      _0x3b068f.stdout = _0x36901b || _0x3b068f.stdout;
      _0x3b068f.stderr = _0x3f6f90 || _0x3b068f.stderr;
      _0xee3f43.createStandardStreams();
    },
    quit: function () {
      _0xee3f43.init.initialized = false;
      var _0x3c9d20 = _0x3b068f._fflush;
      if (_0x3c9d20) {
        _0x3c9d20(0);
      }
      for (var _0x2b4543 = 0; _0x2b4543 < _0xee3f43.streams.length; _0x2b4543++) {
        var _0x5aefb0 = _0xee3f43.streams[_0x2b4543];
        if (!_0x5aefb0) {
          continue;
        }
        _0xee3f43.close(_0x5aefb0);
      }
    },
    getMode: function (_0x272fcc, _0x10d828) {
      var _0x1120ca = 0;
      if (_0x272fcc) {
        _0x1120ca |= 365;
      }
      if (_0x10d828) {
        _0x1120ca |= 146;
      }
      return _0x1120ca;
    },
    findObject: function (_0x46a21d, _0xe56cee) {
      var _0x4a208a = _0xee3f43.analyzePath(_0x46a21d, _0xe56cee);
      if (_0x4a208a.exists) {
        return _0x4a208a.object;
      } else {
        return null;
      }
    },
    analyzePath: function (_0x187a18, _0x5dddfc) {
      try {
        var _0x1895c0 = _0xee3f43.lookupPath(_0x187a18, {
          follow: !_0x5dddfc
        });
        _0x187a18 = _0x1895c0.path;
      } catch (_0x5536f4) {}
      var _0x4c540f = {
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
        var _0x1895c0 = _0xee3f43.lookupPath(_0x187a18, {
          parent: true
        });
        _0x4c540f.parentExists = true;
        _0x4c540f.parentPath = _0x1895c0.path;
        _0x4c540f.parentObject = _0x1895c0.node;
        _0x4c540f.name = _0x32ced9.basename(_0x187a18);
        _0x1895c0 = _0xee3f43.lookupPath(_0x187a18, {
          follow: !_0x5dddfc
        });
        _0x4c540f.exists = true;
        _0x4c540f.path = _0x1895c0.path;
        _0x4c540f.object = _0x1895c0.node;
        _0x4c540f.name = _0x1895c0.node.name;
        _0x4c540f.isRoot = _0x1895c0.path === "/";
      } catch (_0x4aa8e8) {
        _0x4c540f.error = _0x4aa8e8.errno;
      }
      return _0x4c540f;
    },
    createPath: function (_0x55ae66, _0x238f6f, _0x12609f, _0x5834ea) {
      _0x55ae66 = typeof _0x55ae66 === "string" ? _0x55ae66 : _0xee3f43.getPath(_0x55ae66);
      var _0x120613 = _0x238f6f.split("/").reverse();
      while (_0x120613.length) {
        var _0x481ba0 = _0x120613.pop();
        if (!_0x481ba0) {
          continue;
        }
        var _0x13db8b = _0x32ced9.join2(_0x55ae66, _0x481ba0);
        try {
          _0xee3f43.mkdir(_0x13db8b);
        } catch (_0x4fe588) {}
        _0x55ae66 = _0x13db8b;
      }
      return _0x13db8b;
    },
    createFile: function (_0x4721f1, _0x21ddcf, _0x5809d9, _0x344275, _0x36cd10) {
      var _0x47e79b = _0x32ced9.join2(typeof _0x4721f1 === "string" ? _0x4721f1 : _0xee3f43.getPath(_0x4721f1), _0x21ddcf);
      var _0x481a90 = _0xee3f43.getMode(_0x344275, _0x36cd10);
      return _0xee3f43.create(_0x47e79b, _0x481a90);
    },
    createDataFile: function (_0x1badc8, _0x351352, _0x4ad5be, _0x16cdcc, _0x2b99cb, _0x2515ee) {
      var _0xb92aa5 = _0x351352 ? _0x32ced9.join2(typeof _0x1badc8 === "string" ? _0x1badc8 : _0xee3f43.getPath(_0x1badc8), _0x351352) : _0x1badc8;
      var _0x228a56 = _0xee3f43.getMode(_0x16cdcc, _0x2b99cb);
      var _0x5b6da9 = _0xee3f43.create(_0xb92aa5, _0x228a56);
      if (_0x4ad5be) {
        if (typeof _0x4ad5be === "string") {
          var _0x2a9b0c = new Array(_0x4ad5be.length);
          for (var _0x4e00d8 = 0, _0x248fc8 = _0x4ad5be.length; _0x4e00d8 < _0x248fc8; ++_0x4e00d8) {
            _0x2a9b0c[_0x4e00d8] = _0x4ad5be.charCodeAt(_0x4e00d8);
          }
          _0x4ad5be = _0x2a9b0c;
        }
        _0xee3f43.chmod(_0x5b6da9, _0x228a56 | 146);
        var _0x18a5ee = _0xee3f43.open(_0x5b6da9, 577);
        _0xee3f43.write(_0x18a5ee, _0x4ad5be, 0, _0x4ad5be.length, 0, _0x2515ee);
        _0xee3f43.close(_0x18a5ee);
        _0xee3f43.chmod(_0x5b6da9, _0x228a56);
      }
      return _0x5b6da9;
    },
    createDevice: function (_0x27c4bd, _0x27e4ae, _0x36350c, _0x375466) {
      var _0x3bb45f = _0x32ced9.join2(typeof _0x27c4bd === "string" ? _0x27c4bd : _0xee3f43.getPath(_0x27c4bd), _0x27e4ae);
      var _0xc756f8 = _0xee3f43.getMode(!!_0x36350c, !!_0x375466);
      if (!_0xee3f43.createDevice.major) {
        _0xee3f43.createDevice.major = 64;
      }
      var _0x56cfb8 = _0xee3f43.makedev(_0xee3f43.createDevice.major++, 0);
      _0xee3f43.registerDevice(_0x56cfb8, {
        open: function (_0x181257) {
          _0x181257.seekable = false;
        },
        close: function (_0x4cb059) {
          if (_0x375466 && _0x375466.buffer && _0x375466.buffer.length) {
            _0x375466(10);
          }
        },
        read: function (_0x56f027, _0x26ee7c, _0x554d14, _0x433d2c, _0x25ec08) {
          var _0x5d07c9 = 0;
          for (var _0x3f5192 = 0; _0x3f5192 < _0x433d2c; _0x3f5192++) {
            var _0xfdaa33;
            try {
              _0xfdaa33 = _0x36350c();
            } catch (_0x4762fc) {
              throw new _0xee3f43.ErrnoError(29);
            }
            if (_0xfdaa33 === undefined && _0x5d07c9 === 0) {
              throw new _0xee3f43.ErrnoError(6);
            }
            if (_0xfdaa33 === null || _0xfdaa33 === undefined) {
              break;
            }
            _0x5d07c9++;
            _0x26ee7c[_0x554d14 + _0x3f5192] = _0xfdaa33;
          }
          if (_0x5d07c9) {
            _0x56f027.node.timestamp = Date.now();
          }
          return _0x5d07c9;
        },
        write: function (_0x26607f, _0x3510e7, _0x5494b7, _0x2c1ae8, _0x889d8a) {
          for (var _0xb9eda0 = 0; _0xb9eda0 < _0x2c1ae8; _0xb9eda0++) {
            try {
              _0x375466(_0x3510e7[_0x5494b7 + _0xb9eda0]);
            } catch (_0x34b994) {
              throw new _0xee3f43.ErrnoError(29);
            }
          }
          if (_0x2c1ae8) {
            _0x26607f.node.timestamp = Date.now();
          }
          return _0xb9eda0;
        }
      });
      return _0xee3f43.mkdev(_0x3bb45f, _0xc756f8, _0x56cfb8);
    },
    forceLoadFile: function (_0x14f56f) {
      if (_0x14f56f.isDevice || _0x14f56f.isFolder || _0x14f56f.link || _0x14f56f.contents) {
        return true;
      }
      if (typeof XMLHttpRequest !== "undefined") {
        throw new Error("Lazy loading should have been performed (contents set) in createLazyFile, but it was not. Lazy loading only works in web workers. Use --embed-file or --preload-file in emcc on the main thread.");
      } else if (_0x4585d3) {
        try {
          _0x14f56f.contents = _0x160af2(_0x4585d3(_0x14f56f.url), true);
          _0x14f56f.usedBytes = _0x14f56f.contents.length;
        } catch (_0x2f6f9d) {
          throw new _0xee3f43.ErrnoError(29);
        }
      } else {
        throw new Error("Cannot load without read() or XMLHttpRequest.");
      }
    },
    createLazyFile: function (_0x432807, _0x16535e, _0x37bd3e, _0x201817, _0x26b46b) {
      function _0x42c8a2() {
        this.lengthKnown = false;
        this.chunks = [];
      }
      _0x42c8a2.prototype.get = function _0x58e482(_0x2ef522) {
        if (_0x2ef522 > this.length - 1 || _0x2ef522 < 0) {
          return undefined;
        }
        var _0x42b9e8 = _0x2ef522 % this.chunkSize;
        var _0x4f56b2 = _0x2ef522 / this.chunkSize | 0;
        return this.getter(_0x4f56b2)[_0x42b9e8];
      };
      _0x42c8a2.prototype.setDataGetter = function _0x3fc5f1(_0x42a554) {
        this.getter = _0x42a554;
      };
      _0x42c8a2.prototype.cacheLength = function _0x562f17() {
        var _0x2dd724 = new XMLHttpRequest();
        _0x2dd724.open("HEAD", _0x37bd3e, false);
        _0x2dd724.send(null);
        if ((!(_0x2dd724.status >= 200) || !(_0x2dd724.status < 300)) && _0x2dd724.status !== 304) {
          throw new Error("Couldn't load " + _0x37bd3e + ". Status: " + _0x2dd724.status);
        }
        var _0x1cff76 = Number(_0x2dd724.getResponseHeader("Content-length"));
        var _0x2f9746;
        var _0xc2a0a9 = (_0x2f9746 = _0x2dd724.getResponseHeader("Accept-Ranges")) && _0x2f9746 === "bytes";
        var _0x554937 = (_0x2f9746 = _0x2dd724.getResponseHeader("Content-Encoding")) && _0x2f9746 === "gzip";
        var _0x12f828 = 1048576;
        if (!_0xc2a0a9) {
          _0x12f828 = _0x1cff76;
        }
        var _0x14494a = function (_0x4171ce, _0x2f9c96) {
          if (_0x4171ce > _0x2f9c96) {
            throw new Error("invalid range (" + _0x4171ce + ", " + _0x2f9c96 + ") or no bytes requested!");
          }
          if (_0x2f9c96 > _0x1cff76 - 1) {
            throw new Error("only " + _0x1cff76 + " bytes available! programmer error!");
          }
          var _0x479f6b = new XMLHttpRequest();
          _0x479f6b.open("GET", _0x37bd3e, false);
          if (_0x1cff76 !== _0x12f828) {
            _0x479f6b.setRequestHeader("Range", "bytes=" + _0x4171ce + "-" + _0x2f9c96);
          }
          if (typeof Uint8Array != "undefined") {
            _0x479f6b.responseType = "arraybuffer";
          }
          if (_0x479f6b.overrideMimeType) {
            _0x479f6b.overrideMimeType("text/plain; charset=x-user-defined");
          }
          _0x479f6b.send(null);
          if ((!(_0x479f6b.status >= 200) || !(_0x479f6b.status < 300)) && _0x479f6b.status !== 304) {
            throw new Error("Couldn't load " + _0x37bd3e + ". Status: " + _0x479f6b.status);
          }
          if (_0x479f6b.response !== undefined) {
            return new Uint8Array(_0x479f6b.response || []);
          } else {
            return _0x160af2(_0x479f6b.responseText || "", true);
          }
        };
        var _0x49b95c = this;
        _0x49b95c.setDataGetter(function (_0x109442) {
          var _0x4d9899 = _0x109442 * _0x12f828;
          var _0x124b97 = (_0x109442 + 1) * _0x12f828 - 1;
          _0x124b97 = Math.min(_0x124b97, _0x1cff76 - 1);
          if (typeof _0x49b95c.chunks[_0x109442] === "undefined") {
            _0x49b95c.chunks[_0x109442] = _0x14494a(_0x4d9899, _0x124b97);
          }
          if (typeof _0x49b95c.chunks[_0x109442] === "undefined") {
            throw new Error("doXHR failed!");
          }
          return _0x49b95c.chunks[_0x109442];
        });
        if (_0x554937 || !_0x1cff76) {
          _0x12f828 = _0x1cff76 = 1;
          _0x1cff76 = this.getter(0).length;
          _0x12f828 = _0x1cff76;
          _0x424bf2("LazyFiles on gzip forces download of the whole file when length is accessed");
        }
        this._length = _0x1cff76;
        this._chunkSize = _0x12f828;
        this.lengthKnown = true;
      };
      if (typeof XMLHttpRequest !== "undefined") {
        if (!_0x2a3447) {
          throw "Cannot do synchronous binary XHRs outside webworkers in modern browsers. Use --embed-file or --preload-file in emcc";
        }
        var _0x3bda5b = new _0x42c8a2();
        Object.defineProperties(_0x3bda5b, {
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
        var _0x30e568 = {
          isDevice: false,
          contents: _0x3bda5b
        };
      } else {
        var _0x30e568 = {
          isDevice: false,
          url: _0x37bd3e
        };
      }
      var _0x9b6c2 = _0xee3f43.createFile(_0x432807, _0x16535e, _0x30e568, _0x201817, _0x26b46b);
      if (_0x30e568.contents) {
        _0x9b6c2.contents = _0x30e568.contents;
      } else if (_0x30e568.url) {
        _0x9b6c2.contents = null;
        _0x9b6c2.url = _0x30e568.url;
      }
      Object.defineProperties(_0x9b6c2, {
        usedBytes: {
          get: function () {
            return this.contents.length;
          }
        }
      });
      var _0x1515e7 = {};
      var _0x52c1e9 = Object.keys(_0x9b6c2.stream_ops);
      _0x52c1e9.forEach(function (_0x407f39) {
        var _0x5a48f0 = _0x9b6c2.stream_ops[_0x407f39];
        _0x1515e7[_0x407f39] = function _0x295c04() {
          _0xee3f43.forceLoadFile(_0x9b6c2);
          return _0x5a48f0.apply(null, arguments);
        };
      });
      _0x1515e7.read = function _0x3aa495(_0x342f38, _0x449229, _0x5f4870, _0x496d63, _0x2c16d0) {
        _0xee3f43.forceLoadFile(_0x9b6c2);
        var _0xaa0714 = _0x342f38.node.contents;
        if (_0x2c16d0 >= _0xaa0714.length) {
          return 0;
        }
        var _0x28a343 = Math.min(_0xaa0714.length - _0x2c16d0, _0x496d63);
        if (_0xaa0714.slice) {
          for (var _0x4fb962 = 0; _0x4fb962 < _0x28a343; _0x4fb962++) {
            _0x449229[_0x5f4870 + _0x4fb962] = _0xaa0714[_0x2c16d0 + _0x4fb962];
          }
        } else {
          for (var _0x4fb962 = 0; _0x4fb962 < _0x28a343; _0x4fb962++) {
            _0x449229[_0x5f4870 + _0x4fb962] = _0xaa0714.get(_0x2c16d0 + _0x4fb962);
          }
        }
        return _0x28a343;
      };
      _0x9b6c2.stream_ops = _0x1515e7;
      return _0x9b6c2;
    },
    createPreloadedFile: function (_0x349549, _0xf00eb2, _0x178be6, _0x125012, _0x317e5e, _0x38ff4e, _0x4638b6, _0x29c025, _0x3398b0, _0x56e49d) {
      _0x132320.init();
      var _0x518f01 = _0xf00eb2 ? _0x18b70f.resolve(_0x32ced9.join2(_0x349549, _0xf00eb2)) : _0x349549;
      var _0x3526ee = _0x5a51bf("cp " + _0x518f01);
      function _0x4e1bb1(_0x9b557f) {
        function _0xb85ee2(_0x522451) {
          if (_0x56e49d) {
            _0x56e49d();
          }
          if (!_0x29c025) {
            _0xee3f43.createDataFile(_0x349549, _0xf00eb2, _0x522451, _0x125012, _0x317e5e, _0x3398b0);
          }
          if (_0x38ff4e) {
            _0x38ff4e();
          }
          _0x40101a(_0x3526ee);
        }
        var _0x17b371 = false;
        _0x3b068f.preloadPlugins.forEach(function (_0x1f3d0d) {
          if (_0x17b371) {
            return;
          }
          if (_0x1f3d0d.canHandle(_0x518f01)) {
            _0x1f3d0d.handle(_0x9b557f, _0x518f01, _0xb85ee2, function () {
              if (_0x4638b6) {
                _0x4638b6();
              }
              _0x40101a(_0x3526ee);
            });
            _0x17b371 = true;
          }
        });
        if (!_0x17b371) {
          _0xb85ee2(_0x9b557f);
        }
      }
      _0x5d8b6d(_0x3526ee);
      if (typeof _0x178be6 == "string") {
        _0x132320.asyncLoad(_0x178be6, function (_0x24fb49) {
          _0x4e1bb1(_0x24fb49);
        }, _0x4638b6);
      } else {
        _0x4e1bb1(_0x178be6);
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
    saveFilesToDB: function (_0x3b9b39, _0x410390, _0x1fba52) {
      _0x410390 = _0x410390 || function () {};
      _0x1fba52 = _0x1fba52 || function () {};
      var _0x41e8a4 = _0xee3f43.indexedDB();
      try {
        var _0x23bd44 = _0x41e8a4.open(_0xee3f43.DB_NAME(), _0xee3f43.DB_VERSION);
      } catch (_0x5dcab7) {
        return _0x1fba52(_0x5dcab7);
      }
      _0x23bd44.onupgradeneeded = function _0x4ca2af() {
        _0x424bf2("creating db");
        var _0x4f7e0c = _0x23bd44.result;
        _0x4f7e0c.createObjectStore(_0xee3f43.DB_STORE_NAME);
      };
      _0x23bd44.onsuccess = function _0x4f22dc() {
        var _0x2b8991 = _0x23bd44.result;
        var _0x5a647a = _0x2b8991.transaction([_0xee3f43.DB_STORE_NAME], "readwrite");
        var _0x313a28 = _0x5a647a.objectStore(_0xee3f43.DB_STORE_NAME);
        var _0x28cd93 = 0;
        var _0x49a3f1 = 0;
        var _0x322d6c = _0x3b9b39.length;
        function _0x4e62b1() {
          if (_0x49a3f1 == 0) {
            _0x410390();
          } else {
            _0x1fba52();
          }
        }
        _0x3b9b39.forEach(function (_0x504494) {
          var _0x26d0a2 = _0x313a28.put(_0xee3f43.analyzePath(_0x504494).object.contents, _0x504494);
          _0x26d0a2.onsuccess = function _0x3fdbd9() {
            _0x28cd93++;
            if (_0x28cd93 + _0x49a3f1 == _0x322d6c) {
              _0x4e62b1();
            }
          };
          _0x26d0a2.onerror = function _0x126874() {
            _0x49a3f1++;
            if (_0x28cd93 + _0x49a3f1 == _0x322d6c) {
              _0x4e62b1();
            }
          };
        });
        _0x5a647a.onerror = _0x1fba52;
      };
      _0x23bd44.onerror = _0x1fba52;
    },
    loadFilesFromDB: function (_0x206daf, _0x24e130, _0x3402e6) {
      _0x24e130 = _0x24e130 || function () {};
      _0x3402e6 = _0x3402e6 || function () {};
      var _0x3831d2 = _0xee3f43.indexedDB();
      try {
        var _0xaedb7b = _0x3831d2.open(_0xee3f43.DB_NAME(), _0xee3f43.DB_VERSION);
      } catch (_0xe074a6) {
        return _0x3402e6(_0xe074a6);
      }
      _0xaedb7b.onupgradeneeded = _0x3402e6;
      _0xaedb7b.onsuccess = function _0x29d386() {
        var _0x16b39c = _0xaedb7b.result;
        try {
          var _0x3d607 = _0x16b39c.transaction([_0xee3f43.DB_STORE_NAME], "readonly");
        } catch (_0x3963eb) {
          _0x3402e6(_0x3963eb);
          return;
        }
        var _0x61546a = _0x3d607.objectStore(_0xee3f43.DB_STORE_NAME);
        var _0x4a0357 = 0;
        var _0x75b543 = 0;
        var _0xd0b1cd = _0x206daf.length;
        function _0x20dc2f() {
          if (_0x75b543 == 0) {
            _0x24e130();
          } else {
            _0x3402e6();
          }
        }
        _0x206daf.forEach(function (_0x5845e5) {
          var _0x4f3d0e = _0x61546a.get(_0x5845e5);
          _0x4f3d0e.onsuccess = function _0x5c6d52() {
            if (_0xee3f43.analyzePath(_0x5845e5).exists) {
              _0xee3f43.unlink(_0x5845e5);
            }
            _0xee3f43.createDataFile(_0x32ced9.dirname(_0x5845e5), _0x32ced9.basename(_0x5845e5), _0x4f3d0e.result, true, true, true);
            _0x4a0357++;
            if (_0x4a0357 + _0x75b543 == _0xd0b1cd) {
              _0x20dc2f();
            }
          };
          _0x4f3d0e.onerror = function _0x403b8e() {
            _0x75b543++;
            if (_0x4a0357 + _0x75b543 == _0xd0b1cd) {
              _0x20dc2f();
            }
          };
        });
        _0x3d607.onerror = _0x3402e6;
      };
      _0xaedb7b.onerror = _0x3402e6;
    }
  };
  var _0x332174 = {
    mappings: {},
    DEFAULT_POLLMASK: 5,
    umask: 511,
    calculateAt: function (_0x3d1a8e, _0x5e6809, _0xcb5003) {
      if (_0x5e6809[0] === "/") {
        return _0x5e6809;
      }
      var _0x372eab;
      if (_0x3d1a8e === -100) {
        _0x372eab = _0xee3f43.cwd();
      } else {
        var _0x151fb8 = _0xee3f43.getStream(_0x3d1a8e);
        if (!_0x151fb8) {
          throw new _0xee3f43.ErrnoError(8);
        }
        _0x372eab = _0x151fb8.path;
      }
      if (_0x5e6809.length == 0) {
        if (!_0xcb5003) {
          throw new _0xee3f43.ErrnoError(44);
        }
        return _0x372eab;
      }
      return _0x32ced9.join2(_0x372eab, _0x5e6809);
    },
    doStat: function (_0x5d2d72, _0x1caeb2, _0x2e113b) {
      try {
        var _0x100f90 = _0x5d2d72(_0x1caeb2);
      } catch (_0x17e073) {
        if (_0x17e073 && _0x17e073.node && _0x32ced9.normalize(_0x1caeb2) !== _0x32ced9.normalize(_0xee3f43.getPath(_0x17e073.node))) {
          return -54;
        }
        throw _0x17e073;
      }
      _0x58fcaf[_0x2e113b >> 2] = _0x100f90.dev;
      _0x58fcaf[_0x2e113b + 4 >> 2] = 0;
      _0x58fcaf[_0x2e113b + 8 >> 2] = _0x100f90.ino;
      _0x58fcaf[_0x2e113b + 12 >> 2] = _0x100f90.mode;
      _0x58fcaf[_0x2e113b + 16 >> 2] = _0x100f90.nlink;
      _0x58fcaf[_0x2e113b + 20 >> 2] = _0x100f90.uid;
      _0x58fcaf[_0x2e113b + 24 >> 2] = _0x100f90.gid;
      _0x58fcaf[_0x2e113b + 28 >> 2] = _0x100f90.rdev;
      _0x58fcaf[_0x2e113b + 32 >> 2] = 0;
      _0x79d46c = [_0x100f90.size >>> 0, (_0x40da2a = _0x100f90.size, +Math.abs(_0x40da2a) >= 1 ? _0x40da2a > 0 ? (Math.min(+Math.floor(_0x40da2a / 4294967296), 4294967295) | 0) >>> 0 : ~~+Math.ceil((_0x40da2a - +(~~_0x40da2a >>> 0)) / 4294967296) >>> 0 : 0)];
      _0x58fcaf[_0x2e113b + 40 >> 2] = _0x79d46c[0];
      _0x58fcaf[_0x2e113b + 44 >> 2] = _0x79d46c[1];
      _0x58fcaf[_0x2e113b + 48 >> 2] = 4096;
      _0x58fcaf[_0x2e113b + 52 >> 2] = _0x100f90.blocks;
      _0x58fcaf[_0x2e113b + 56 >> 2] = _0x100f90.atime.getTime() / 1000 | 0;
      _0x58fcaf[_0x2e113b + 60 >> 2] = 0;
      _0x58fcaf[_0x2e113b + 64 >> 2] = _0x100f90.mtime.getTime() / 1000 | 0;
      _0x58fcaf[_0x2e113b + 68 >> 2] = 0;
      _0x58fcaf[_0x2e113b + 72 >> 2] = _0x100f90.ctime.getTime() / 1000 | 0;
      _0x58fcaf[_0x2e113b + 76 >> 2] = 0;
      _0x79d46c = [_0x100f90.ino >>> 0, (_0x40da2a = _0x100f90.ino, +Math.abs(_0x40da2a) >= 1 ? _0x40da2a > 0 ? (Math.min(+Math.floor(_0x40da2a / 4294967296), 4294967295) | 0) >>> 0 : ~~+Math.ceil((_0x40da2a - +(~~_0x40da2a >>> 0)) / 4294967296) >>> 0 : 0)];
      _0x58fcaf[_0x2e113b + 80 >> 2] = _0x79d46c[0];
      _0x58fcaf[_0x2e113b + 84 >> 2] = _0x79d46c[1];
      return 0;
    },
    doMsync: function (_0x14a25e, _0x11a403, _0x4ab07d, _0x4b3f3b, _0x54f97d) {
      var _0x2cd098 = _0x479b38.slice(_0x14a25e, _0x14a25e + _0x4ab07d);
      _0xee3f43.msync(_0x11a403, _0x2cd098, _0x54f97d, _0x4ab07d, _0x4b3f3b);
    },
    doMkdir: function (_0x3e437c, _0x328126) {
      _0x3e437c = _0x32ced9.normalize(_0x3e437c);
      if (_0x3e437c[_0x3e437c.length - 1] === "/") {
        _0x3e437c = _0x3e437c.substr(0, _0x3e437c.length - 1);
      }
      _0xee3f43.mkdir(_0x3e437c, _0x328126, 0);
      return 0;
    },
    doMknod: function (_0x564581, _0x126711, _0x5e0adb) {
      switch (_0x126711 & 61440) {
        case 32768:
        case 8192:
        case 24576:
        case 4096:
        case 49152:
          break;
        default:
          return -28;
      }
      _0xee3f43.mknod(_0x564581, _0x126711, _0x5e0adb);
      return 0;
    },
    doReadlink: function (_0x524397, _0x1a64ff, _0x529eda) {
      if (_0x529eda <= 0) {
        return -28;
      }
      var _0x2d7344 = _0xee3f43.readlink(_0x524397);
      var _0x492132 = Math.min(_0x529eda, _0x2705ae(_0x2d7344));
      var _0x5afd8f = _0x5a8ff8[_0x1a64ff + _0x492132];
      _0x5b4754(_0x2d7344, _0x1a64ff, _0x529eda + 1);
      _0x5a8ff8[_0x1a64ff + _0x492132] = _0x5afd8f;
      return _0x492132;
    },
    doAccess: function (_0x2595fa, _0x492c6a) {
      if (_0x492c6a & ~7) {
        return -28;
      }
      var _0x4d2a40;
      var _0x4edaef = _0xee3f43.lookupPath(_0x2595fa, {
        follow: true
      });
      _0x4d2a40 = _0x4edaef.node;
      if (!_0x4d2a40) {
        return -44;
      }
      var _0x1c702d = "";
      if (_0x492c6a & 4) {
        _0x1c702d += "r";
      }
      if (_0x492c6a & 2) {
        _0x1c702d += "w";
      }
      if (_0x492c6a & 1) {
        _0x1c702d += "x";
      }
      if (_0x1c702d && _0xee3f43.nodePermissions(_0x4d2a40, _0x1c702d)) {
        return -2;
      }
      return 0;
    },
    doDup: function (_0x209e3c, _0x55a18a, _0x162610) {
      var _0x2d0619 = _0xee3f43.getStream(_0x162610);
      if (_0x2d0619) {
        _0xee3f43.close(_0x2d0619);
      }
      return _0xee3f43.open(_0x209e3c, _0x55a18a, 0, _0x162610, _0x162610).fd;
    },
    doReadv: function (_0x5b88ea, _0x448c28, _0x50a8fb, _0x20a0cb) {
      var _0x4f0bba = 0;
      for (var _0x22290c = 0; _0x22290c < _0x50a8fb; _0x22290c++) {
        var _0x237b06 = _0x58fcaf[_0x448c28 + _0x22290c * 8 >> 2];
        var _0x2af7d9 = _0x58fcaf[_0x448c28 + (_0x22290c * 8 + 4) >> 2];
        var _0x18201d = _0xee3f43.read(_0x5b88ea, _0x5a8ff8, _0x237b06, _0x2af7d9, _0x20a0cb);
        if (_0x18201d < 0) {
          return -1;
        }
        _0x4f0bba += _0x18201d;
        if (_0x18201d < _0x2af7d9) {
          break;
        }
      }
      return _0x4f0bba;
    },
    doWritev: function (_0x2979c6, _0x1cd5f0, _0x48efcc, _0x3c7133) {
      var _0x4e3b8a = 0;
      for (var _0x598c6e = 0; _0x598c6e < _0x48efcc; _0x598c6e++) {
        var _0x1545d6 = _0x58fcaf[_0x1cd5f0 + _0x598c6e * 8 >> 2];
        var _0x4d8196 = _0x58fcaf[_0x1cd5f0 + (_0x598c6e * 8 + 4) >> 2];
        var _0x377f8a = _0xee3f43.write(_0x2979c6, _0x5a8ff8, _0x1545d6, _0x4d8196, _0x3c7133);
        if (_0x377f8a < 0) {
          return -1;
        }
        _0x4e3b8a += _0x377f8a;
      }
      return _0x4e3b8a;
    },
    varargs: undefined,
    get: function () {
      _0x332174.varargs += 4;
      var _0x518860 = _0x58fcaf[_0x332174.varargs - 4 >> 2];
      return _0x518860;
    },
    getStr: function (_0x14a402) {
      var _0x2f8e3e = _0x57f36f(_0x14a402);
      return _0x2f8e3e;
    },
    getStreamFromFD: function (_0x2ec6fa) {
      var _0x3cc45a = _0xee3f43.getStream(_0x2ec6fa);
      if (!_0x3cc45a) {
        throw new _0xee3f43.ErrnoError(8);
      }
      return _0x3cc45a;
    },
    get64: function (_0x14d200, _0x596330) {
      return _0x14d200;
    }
  };
  function _0x52aeb7(_0x525fef, _0x2d5f03, _0x48a6fa, _0x34f714, _0x3b70e8) {
    try {
      var _0x24dc5e = 0;
      var _0x4baa89 = _0x2d5f03 ? _0x58fcaf[_0x2d5f03 >> 2] : 0;
      var _0x429052 = _0x2d5f03 ? _0x58fcaf[_0x2d5f03 + 4 >> 2] : 0;
      var _0x1fc4b3 = _0x48a6fa ? _0x58fcaf[_0x48a6fa >> 2] : 0;
      var _0x358782 = _0x48a6fa ? _0x58fcaf[_0x48a6fa + 4 >> 2] : 0;
      var _0x58f5e7 = _0x34f714 ? _0x58fcaf[_0x34f714 >> 2] : 0;
      var _0x8eeb4a = _0x34f714 ? _0x58fcaf[_0x34f714 + 4 >> 2] : 0;
      var _0x3f4267 = 0;
      var _0x58e4d1 = 0;
      var _0x37f342 = 0;
      var _0x2c9fd4 = 0;
      var _0x33754b = 0;
      var _0xdc018a = 0;
      var _0x6ed017 = (_0x2d5f03 ? _0x58fcaf[_0x2d5f03 >> 2] : 0) | (_0x48a6fa ? _0x58fcaf[_0x48a6fa >> 2] : 0) | (_0x34f714 ? _0x58fcaf[_0x34f714 >> 2] : 0);
      var _0x2f734e = (_0x2d5f03 ? _0x58fcaf[_0x2d5f03 + 4 >> 2] : 0) | (_0x48a6fa ? _0x58fcaf[_0x48a6fa + 4 >> 2] : 0) | (_0x34f714 ? _0x58fcaf[_0x34f714 + 4 >> 2] : 0);
      var _0x3e4e04 = function (_0x4bc48b, _0x151a19, _0x367ef8, _0x3717eb) {
        if (_0x4bc48b < 32) {
          return _0x151a19 & _0x3717eb;
        } else {
          return _0x367ef8 & _0x3717eb;
        }
      };
      for (var _0x2eaac8 = 0; _0x2eaac8 < _0x525fef; _0x2eaac8++) {
        var _0x49b1e0 = 1 << _0x2eaac8 % 32;
        if (!_0x3e4e04(_0x2eaac8, _0x6ed017, _0x2f734e, _0x49b1e0)) {
          continue;
        }
        var _0x541fa1 = _0xee3f43.getStream(_0x2eaac8);
        if (!_0x541fa1) {
          throw new _0xee3f43.ErrnoError(8);
        }
        var _0x590ab2 = _0x332174.DEFAULT_POLLMASK;
        if (_0x541fa1.stream_ops.poll) {
          _0x590ab2 = _0x541fa1.stream_ops.poll(_0x541fa1);
        }
        if (_0x590ab2 & 1 && _0x3e4e04(_0x2eaac8, _0x4baa89, _0x429052, _0x49b1e0)) {
          if (_0x2eaac8 < 32) {
            _0x3f4267 = _0x3f4267 | _0x49b1e0;
          } else {
            _0x58e4d1 = _0x58e4d1 | _0x49b1e0;
          }
          _0x24dc5e++;
        }
        if (_0x590ab2 & 4 && _0x3e4e04(_0x2eaac8, _0x1fc4b3, _0x358782, _0x49b1e0)) {
          if (_0x2eaac8 < 32) {
            _0x37f342 = _0x37f342 | _0x49b1e0;
          } else {
            _0x2c9fd4 = _0x2c9fd4 | _0x49b1e0;
          }
          _0x24dc5e++;
        }
        if (_0x590ab2 & 2 && _0x3e4e04(_0x2eaac8, _0x58f5e7, _0x8eeb4a, _0x49b1e0)) {
          if (_0x2eaac8 < 32) {
            _0x33754b = _0x33754b | _0x49b1e0;
          } else {
            _0xdc018a = _0xdc018a | _0x49b1e0;
          }
          _0x24dc5e++;
        }
      }
      if (_0x2d5f03) {
        _0x58fcaf[_0x2d5f03 >> 2] = _0x3f4267;
        _0x58fcaf[_0x2d5f03 + 4 >> 2] = _0x58e4d1;
      }
      if (_0x48a6fa) {
        _0x58fcaf[_0x48a6fa >> 2] = _0x37f342;
        _0x58fcaf[_0x48a6fa + 4 >> 2] = _0x2c9fd4;
      }
      if (_0x34f714) {
        _0x58fcaf[_0x34f714 >> 2] = _0x33754b;
        _0x58fcaf[_0x34f714 + 4 >> 2] = _0xdc018a;
      }
      return _0x24dc5e;
    } catch (_0x15583a) {
      if (typeof _0xee3f43 === "undefined" || !(_0x15583a instanceof _0xee3f43.ErrnoError)) {
        _0x2e4daa(_0x15583a);
      }
      return -_0x15583a.errno;
    }
  }
  var _0x4db925 = {
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
  var _0x3d74f6 = {
    mount: function (_0x404555) {
      _0x3b068f.websocket = _0x3b068f.websocket && typeof _0x3b068f.websocket === "object" ? _0x3b068f.websocket : {};
      _0x3b068f.websocket._callbacks = {};
      _0x3b068f.websocket.on = function (_0x3fe243, _0x17bf38) {
        if (typeof _0x17bf38 === "function") {
          this._callbacks[_0x3fe243] = _0x17bf38;
        }
        return this;
      };
      _0x3b068f.websocket.emit = function (_0x1f0dd3, _0x3a43d2) {
        if (typeof this._callbacks[_0x1f0dd3] === "function") {
          this._callbacks[_0x1f0dd3].call(this, _0x3a43d2);
        }
      };
      return _0xee3f43.createNode(null, "/", 16895, 0);
    },
    createSocket: function (_0x2b30b7, _0x319e17, _0x5bd0dc) {
      _0x319e17 &= ~526336;
      var _0x17286e = _0x319e17 == 1;
      if (_0x5bd0dc) {
        _0x1edac9(_0x17286e == (_0x5bd0dc == 6));
      }
      var _0x138615 = {
        family: _0x2b30b7,
        type: _0x319e17,
        protocol: _0x5bd0dc,
        server: null,
        error: null,
        peers: {},
        pending: [],
        recv_queue: [],
        sock_ops: _0x3d74f6.websocket_sock_ops
      };
      var _0x2aad32 = _0x3d74f6.nextname();
      var _0x6746cc = _0xee3f43.createNode(_0x3d74f6.root, _0x2aad32, 49152, 0);
      _0x6746cc.sock = _0x138615;
      var _0x4881b5 = _0xee3f43.createStream({
        path: _0x2aad32,
        node: _0x6746cc,
        flags: 2,
        seekable: false,
        stream_ops: _0x3d74f6.stream_ops
      });
      _0x138615.stream = _0x4881b5;
      return _0x138615;
    },
    getSocket: function (_0x18d1b3) {
      var _0x37e0b1 = _0xee3f43.getStream(_0x18d1b3);
      if (!_0x37e0b1 || !_0xee3f43.isSocket(_0x37e0b1.node.mode)) {
        return null;
      }
      return _0x37e0b1.node.sock;
    },
    stream_ops: {
      poll: function (_0x10195f) {
        var _0x5c21f8 = _0x10195f.node.sock;
        return _0x5c21f8.sock_ops.poll(_0x5c21f8);
      },
      ioctl: function (_0x26d9f8, _0x3ad4dd, _0x5c9268) {
        var _0x3927ba = _0x26d9f8.node.sock;
        return _0x3927ba.sock_ops.ioctl(_0x3927ba, _0x3ad4dd, _0x5c9268);
      },
      read: function (_0x1859a0, _0x104451, _0x889c92, _0x40c7e8, _0x65ed72) {
        var _0x2d022c = _0x1859a0.node.sock;
        var _0x50cdda = _0x2d022c.sock_ops.recvmsg(_0x2d022c, _0x40c7e8);
        if (!_0x50cdda) {
          return 0;
        }
        _0x104451.set(_0x50cdda.buffer, _0x889c92);
        return _0x50cdda.buffer.length;
      },
      write: function (_0x10bd59, _0x128dab, _0x20ac4c, _0x65e70c, _0x2e57a5) {
        var _0x1222a8 = _0x10bd59.node.sock;
        return _0x1222a8.sock_ops.sendmsg(_0x1222a8, _0x128dab, _0x20ac4c, _0x65e70c);
      },
      close: function (_0x220e5f) {
        var _0x32ebda = _0x220e5f.node.sock;
        _0x32ebda.sock_ops.close(_0x32ebda);
      }
    },
    nextname: function () {
      if (!_0x3d74f6.nextname.current) {
        _0x3d74f6.nextname.current = 0;
      }
      return "socket[" + _0x3d74f6.nextname.current++ + "]";
    },
    websocket_sock_ops: {
      createPeer: function (_0xcccc66, _0x563d9c, _0x52b40b) {
        var _0x2b4da9;
        if (typeof _0x563d9c === "object") {
          _0x2b4da9 = _0x563d9c;
          _0x563d9c = null;
          _0x52b40b = null;
        }
        if (_0x2b4da9) {
          if (_0x2b4da9._socket) {
            _0x563d9c = _0x2b4da9._socket.remoteAddress;
            _0x52b40b = _0x2b4da9._socket.remotePort;
          } else {
            var _0x1f70d0 = /ws[s]?:\/\/([^:]+):(\d+)/.exec(_0x2b4da9.url);
            if (!_0x1f70d0) {
              throw new Error("WebSocket URL must be in the format ws(s)://address:port");
            }
            _0x563d9c = _0x1f70d0[1];
            _0x52b40b = parseInt(_0x1f70d0[2], 10);
          }
        } else {
          try {
            var _0x1e0239 = _0x3b068f.websocket && typeof _0x3b068f.websocket === "object";
            var _0xf0ea1f = "ws:#".replace("#", "//");
            if (_0x1e0239) {
              if (typeof _0x3b068f.websocket.url === "string") {
                _0xf0ea1f = _0x3b068f.websocket.url;
              }
            }
            if (_0xf0ea1f === "ws://" || _0xf0ea1f === "wss://") {
              var _0x326e91 = _0x563d9c.split("/");
              _0xf0ea1f = _0xf0ea1f + _0x326e91[0] + ":" + _0x52b40b + "/" + _0x326e91.slice(1).join("/");
            }
            var _0x51c77f = "binary";
            if (_0x1e0239) {
              if (typeof _0x3b068f.websocket.subprotocol === "string") {
                _0x51c77f = _0x3b068f.websocket.subprotocol;
              }
            }
            var _0x309456 = undefined;
            if (_0x51c77f !== "null") {
              _0x51c77f = _0x51c77f.replace(/^ +| +$/g, "").split(/ *, */);
              _0x309456 = _0x140fdc ? {
                protocol: _0x51c77f.toString()
              } : _0x51c77f;
            }
            if (_0x1e0239 && _0x3b068f.websocket.subprotocol === null) {
              _0x51c77f = "null";
              _0x309456 = undefined;
            }
            var _0x6e055f;
            if (_0x140fdc) {
              _0x6e055f = require("ws");
            } else {
              _0x6e055f = WebSocket;
            }
            _0x2b4da9 = new _0x6e055f(_0xf0ea1f, _0x309456);
            _0x2b4da9.binaryType = "arraybuffer";
          } catch (_0x22fbf1) {
            throw new _0xee3f43.ErrnoError(_0x4db925.EHOSTUNREACH);
          }
        }
        var _0x91c396 = {
          addr: _0x563d9c,
          port: _0x52b40b,
          socket: _0x2b4da9,
          dgram_send_queue: []
        };
        _0x3d74f6.websocket_sock_ops.addPeer(_0xcccc66, _0x91c396);
        _0x3d74f6.websocket_sock_ops.handlePeerEvents(_0xcccc66, _0x91c396);
        if (_0xcccc66.type === 2 && typeof _0xcccc66.sport !== "undefined") {
          _0x91c396.dgram_send_queue.push(new Uint8Array([255, 255, 255, 255, "p".charCodeAt(0), "o".charCodeAt(0), "r".charCodeAt(0), "t".charCodeAt(0), (_0xcccc66.sport & 65280) >> 8, _0xcccc66.sport & 255]));
        }
        return _0x91c396;
      },
      getPeer: function (_0x387845, _0x18d132, _0x14d5b3) {
        return _0x387845.peers[_0x18d132 + ":" + _0x14d5b3];
      },
      addPeer: function (_0x565ace, _0x7020b2) {
        _0x565ace.peers[_0x7020b2.addr + ":" + _0x7020b2.port] = _0x7020b2;
      },
      removePeer: function (_0x2595e0, _0x20ad92) {
        delete _0x2595e0.peers[_0x20ad92.addr + ":" + _0x20ad92.port];
      },
      handlePeerEvents: function (_0x148e62, _0xb8a79b) {
        var _0x24a7d7 = true;
        var _0x334937 = function () {
          _0x3b068f.websocket.emit("open", _0x148e62.stream.fd);
          try {
            var _0x2147e3 = _0xb8a79b.dgram_send_queue.shift();
            while (_0x2147e3) {
              _0xb8a79b.socket.send(_0x2147e3);
              _0x2147e3 = _0xb8a79b.dgram_send_queue.shift();
            }
          } catch (_0x331fe9) {
            _0xb8a79b.socket.close();
          }
        };
        function _0x5800ec(_0x20d77a) {
          if (typeof _0x20d77a === "string") {
            var _0x4dccb7 = new TextEncoder();
            _0x20d77a = _0x4dccb7.encode(_0x20d77a);
          } else {
            _0x1edac9(_0x20d77a.byteLength !== undefined);
            if (_0x20d77a.byteLength == 0) {
              return;
            } else {
              _0x20d77a = new Uint8Array(_0x20d77a);
            }
          }
          var _0x24709a = _0x24a7d7;
          _0x24a7d7 = false;
          if (_0x24709a && _0x20d77a.length === 10 && _0x20d77a[0] === 255 && _0x20d77a[1] === 255 && _0x20d77a[2] === 255 && _0x20d77a[3] === 255 && _0x20d77a[4] === "p".charCodeAt(0) && _0x20d77a[5] === "o".charCodeAt(0) && _0x20d77a[6] === "r".charCodeAt(0) && _0x20d77a[7] === "t".charCodeAt(0)) {
            var _0x4108e4 = _0x20d77a[8] << 8 | _0x20d77a[9];
            _0x3d74f6.websocket_sock_ops.removePeer(_0x148e62, _0xb8a79b);
            _0xb8a79b.port = _0x4108e4;
            _0x3d74f6.websocket_sock_ops.addPeer(_0x148e62, _0xb8a79b);
            return;
          }
          _0x148e62.recv_queue.push({
            addr: _0xb8a79b.addr,
            port: _0xb8a79b.port,
            data: _0x20d77a
          });
          _0x3b068f.websocket.emit("message", _0x148e62.stream.fd);
        }
        if (_0x140fdc) {
          _0xb8a79b.socket.on("open", _0x334937);
          _0xb8a79b.socket.on("message", function (_0x4f17eb, _0x4dd335) {
            if (!_0x4dd335.binary) {
              return;
            }
            _0x5800ec(new Uint8Array(_0x4f17eb).buffer);
          });
          _0xb8a79b.socket.on("close", function () {
            _0x3b068f.websocket.emit("close", _0x148e62.stream.fd);
          });
          _0xb8a79b.socket.on("error", function (_0x3a7627) {
            _0x148e62.error = _0x4db925.ECONNREFUSED;
            _0x3b068f.websocket.emit("error", [_0x148e62.stream.fd, _0x148e62.error, "ECONNREFUSED: Connection refused"]);
          });
        } else {
          _0xb8a79b.socket.onopen = _0x334937;
          _0xb8a79b.socket.onclose = function () {
            _0x3b068f.websocket.emit("close", _0x148e62.stream.fd);
          };
          _0xb8a79b.socket.onmessage = function _0x247045(_0x584f7a) {
            _0x5800ec(_0x584f7a.data);
          };
          _0xb8a79b.socket.onerror = function (_0x336488) {
            _0x148e62.error = _0x4db925.ECONNREFUSED;
            _0x3b068f.websocket.emit("error", [_0x148e62.stream.fd, _0x148e62.error, "ECONNREFUSED: Connection refused"]);
          };
        }
      },
      poll: function (_0x5b67a6) {
        if (_0x5b67a6.type === 1 && _0x5b67a6.server) {
          if (_0x5b67a6.pending.length) {
            return 65;
          } else {
            return 0;
          }
        }
        var _0x3cd33c = 0;
        var _0x2a808d = _0x5b67a6.type === 1 ? _0x3d74f6.websocket_sock_ops.getPeer(_0x5b67a6, _0x5b67a6.daddr, _0x5b67a6.dport) : null;
        if (_0x5b67a6.recv_queue.length || !_0x2a808d || _0x2a808d && _0x2a808d.socket.readyState === _0x2a808d.socket.CLOSING || _0x2a808d && _0x2a808d.socket.readyState === _0x2a808d.socket.CLOSED) {
          _0x3cd33c |= 65;
        }
        if (!_0x2a808d || _0x2a808d && _0x2a808d.socket.readyState === _0x2a808d.socket.OPEN) {
          _0x3cd33c |= 4;
        }
        if (_0x2a808d && _0x2a808d.socket.readyState === _0x2a808d.socket.CLOSING || _0x2a808d && _0x2a808d.socket.readyState === _0x2a808d.socket.CLOSED) {
          _0x3cd33c |= 16;
        }
        return _0x3cd33c;
      },
      ioctl: function (_0x51257f, _0x4a3e16, _0x574565) {
        switch (_0x4a3e16) {
          case 21531:
            var _0x43b46e = 0;
            if (_0x51257f.recv_queue.length) {
              _0x43b46e = _0x51257f.recv_queue[0].data.length;
            }
            _0x58fcaf[_0x574565 >> 2] = _0x43b46e;
            return 0;
          default:
            return _0x4db925.EINVAL;
        }
      },
      close: function (_0x1c0d64) {
        if (_0x1c0d64.server) {
          try {
            _0x1c0d64.server.close();
          } catch (_0x4aa96d) {}
          _0x1c0d64.server = null;
        }
        var _0x59cd77 = Object.keys(_0x1c0d64.peers);
        for (var _0x1a46db = 0; _0x1a46db < _0x59cd77.length; _0x1a46db++) {
          var _0x9bb6fb = _0x1c0d64.peers[_0x59cd77[_0x1a46db]];
          try {
            _0x9bb6fb.socket.close();
          } catch (_0xa93b2c) {}
          _0x3d74f6.websocket_sock_ops.removePeer(_0x1c0d64, _0x9bb6fb);
        }
        return 0;
      },
      bind: function (_0x570e07, _0xd9a039, _0x143987) {
        if (typeof _0x570e07.saddr !== "undefined" || typeof _0x570e07.sport !== "undefined") {
          throw new _0xee3f43.ErrnoError(_0x4db925.EINVAL);
        }
        _0x570e07.saddr = _0xd9a039;
        _0x570e07.sport = _0x143987;
        if (_0x570e07.type === 2) {
          if (_0x570e07.server) {
            _0x570e07.server.close();
            _0x570e07.server = null;
          }
          try {
            _0x570e07.sock_ops.listen(_0x570e07, 0);
          } catch (_0x514b4c) {
            if (!(_0x514b4c instanceof _0xee3f43.ErrnoError)) {
              throw _0x514b4c;
            }
            if (_0x514b4c.errno !== _0x4db925.EOPNOTSUPP) {
              throw _0x514b4c;
            }
          }
        }
      },
      connect: function (_0x3933f9, _0x14cb9c, _0x5c9dbc) {
        if (_0x3933f9.server) {
          throw new _0xee3f43.ErrnoError(_0x4db925.EOPNOTSUPP);
        }
        if (typeof _0x3933f9.daddr !== "undefined" && typeof _0x3933f9.dport !== "undefined") {
          var _0x10174d = _0x3d74f6.websocket_sock_ops.getPeer(_0x3933f9, _0x3933f9.daddr, _0x3933f9.dport);
          if (_0x10174d) {
            if (_0x10174d.socket.readyState === _0x10174d.socket.CONNECTING) {
              throw new _0xee3f43.ErrnoError(_0x4db925.EALREADY);
            } else {
              throw new _0xee3f43.ErrnoError(_0x4db925.EISCONN);
            }
          }
        }
        var _0x26d87a = _0x3d74f6.websocket_sock_ops.createPeer(_0x3933f9, _0x14cb9c, _0x5c9dbc);
        _0x3933f9.daddr = _0x26d87a.addr;
        _0x3933f9.dport = _0x26d87a.port;
        throw new _0xee3f43.ErrnoError(_0x4db925.EINPROGRESS);
      },
      listen: function (_0x35619b, _0x19d510) {
        if (!_0x140fdc) {
          throw new _0xee3f43.ErrnoError(_0x4db925.EOPNOTSUPP);
        }
        if (_0x35619b.server) {
          throw new _0xee3f43.ErrnoError(_0x4db925.EINVAL);
        }
        var _0x2b41e1 = require("ws").Server;
        var _0x3ee6d8 = _0x35619b.saddr;
        _0x35619b.server = new _0x2b41e1({
          host: _0x3ee6d8,
          port: _0x35619b.sport
        });
        _0x3b068f.websocket.emit("listen", _0x35619b.stream.fd);
        _0x35619b.server.on("connection", function (_0x57f583) {
          if (_0x35619b.type === 1) {
            var _0x359d37 = _0x3d74f6.createSocket(_0x35619b.family, _0x35619b.type, _0x35619b.protocol);
            var _0x361aae = _0x3d74f6.websocket_sock_ops.createPeer(_0x359d37, _0x57f583);
            _0x359d37.daddr = _0x361aae.addr;
            _0x359d37.dport = _0x361aae.port;
            _0x35619b.pending.push(_0x359d37);
            _0x3b068f.websocket.emit("connection", _0x359d37.stream.fd);
          } else {
            _0x3d74f6.websocket_sock_ops.createPeer(_0x35619b, _0x57f583);
            _0x3b068f.websocket.emit("connection", _0x35619b.stream.fd);
          }
        });
        _0x35619b.server.on("closed", function () {
          _0x3b068f.websocket.emit("close", _0x35619b.stream.fd);
          _0x35619b.server = null;
        });
        _0x35619b.server.on("error", function (_0x70bd04) {
          _0x35619b.error = _0x4db925.EHOSTUNREACH;
          _0x3b068f.websocket.emit("error", [_0x35619b.stream.fd, _0x35619b.error, "EHOSTUNREACH: Host is unreachable"]);
        });
      },
      accept: function (_0x127679) {
        if (!_0x127679.server) {
          throw new _0xee3f43.ErrnoError(_0x4db925.EINVAL);
        }
        var _0x23cb49 = _0x127679.pending.shift();
        _0x23cb49.stream.flags = _0x127679.stream.flags;
        return _0x23cb49;
      },
      getname: function (_0x5b1e14, _0x5f5b7b) {
        var _0x4eca30;
        var _0x5c6dfe;
        if (_0x5f5b7b) {
          if (_0x5b1e14.daddr === undefined || _0x5b1e14.dport === undefined) {
            throw new _0xee3f43.ErrnoError(_0x4db925.ENOTCONN);
          }
          _0x4eca30 = _0x5b1e14.daddr;
          _0x5c6dfe = _0x5b1e14.dport;
        } else {
          _0x4eca30 = _0x5b1e14.saddr || 0;
          _0x5c6dfe = _0x5b1e14.sport || 0;
        }
        return {
          addr: _0x4eca30,
          port: _0x5c6dfe
        };
      },
      sendmsg: function (_0x2d2e4f, _0x3135ae, _0x5b8cba, _0x20beb8, _0x2f1b56, _0x5f15da) {
        if (_0x2d2e4f.type === 2) {
          if (_0x2f1b56 === undefined || _0x5f15da === undefined) {
            _0x2f1b56 = _0x2d2e4f.daddr;
            _0x5f15da = _0x2d2e4f.dport;
          }
          if (_0x2f1b56 === undefined || _0x5f15da === undefined) {
            throw new _0xee3f43.ErrnoError(_0x4db925.EDESTADDRREQ);
          }
        } else {
          _0x2f1b56 = _0x2d2e4f.daddr;
          _0x5f15da = _0x2d2e4f.dport;
        }
        var _0x2d3a2f = _0x3d74f6.websocket_sock_ops.getPeer(_0x2d2e4f, _0x2f1b56, _0x5f15da);
        if (_0x2d2e4f.type === 1) {
          if (!_0x2d3a2f || _0x2d3a2f.socket.readyState === _0x2d3a2f.socket.CLOSING || _0x2d3a2f.socket.readyState === _0x2d3a2f.socket.CLOSED) {
            throw new _0xee3f43.ErrnoError(_0x4db925.ENOTCONN);
          } else if (_0x2d3a2f.socket.readyState === _0x2d3a2f.socket.CONNECTING) {
            throw new _0xee3f43.ErrnoError(_0x4db925.EAGAIN);
          }
        }
        if (ArrayBuffer.isView(_0x3135ae)) {
          _0x5b8cba += _0x3135ae.byteOffset;
          _0x3135ae = _0x3135ae.buffer;
        }
        var _0x5d9fd6;
        _0x5d9fd6 = _0x3135ae.slice(_0x5b8cba, _0x5b8cba + _0x20beb8);
        if (_0x2d2e4f.type === 2) {
          if (!_0x2d3a2f || _0x2d3a2f.socket.readyState !== _0x2d3a2f.socket.OPEN) {
            if (!_0x2d3a2f || _0x2d3a2f.socket.readyState === _0x2d3a2f.socket.CLOSING || _0x2d3a2f.socket.readyState === _0x2d3a2f.socket.CLOSED) {
              _0x2d3a2f = _0x3d74f6.websocket_sock_ops.createPeer(_0x2d2e4f, _0x2f1b56, _0x5f15da);
            }
            _0x2d3a2f.dgram_send_queue.push(_0x5d9fd6);
            return _0x20beb8;
          }
        }
        try {
          _0x2d3a2f.socket.send(_0x5d9fd6);
          return _0x20beb8;
        } catch (_0x429a04) {
          throw new _0xee3f43.ErrnoError(_0x4db925.EINVAL);
        }
      },
      recvmsg: function (_0x58e7f8, _0x52d70d) {
        if (_0x58e7f8.type === 1 && _0x58e7f8.server) {
          throw new _0xee3f43.ErrnoError(_0x4db925.ENOTCONN);
        }
        var _0xee20b4 = _0x58e7f8.recv_queue.shift();
        if (!_0xee20b4) {
          if (_0x58e7f8.type === 1) {
            var _0x2cef23 = _0x3d74f6.websocket_sock_ops.getPeer(_0x58e7f8, _0x58e7f8.daddr, _0x58e7f8.dport);
            if (!_0x2cef23) {
              throw new _0xee3f43.ErrnoError(_0x4db925.ENOTCONN);
            } else if (_0x2cef23.socket.readyState === _0x2cef23.socket.CLOSING || _0x2cef23.socket.readyState === _0x2cef23.socket.CLOSED) {
              return null;
            } else {
              throw new _0xee3f43.ErrnoError(_0x4db925.EAGAIN);
            }
          } else {
            throw new _0xee3f43.ErrnoError(_0x4db925.EAGAIN);
          }
        }
        var _0x1b3c59 = _0xee20b4.data.byteLength || _0xee20b4.data.length;
        var _0x90d279 = _0xee20b4.data.byteOffset || 0;
        var _0x41a7b0 = _0xee20b4.data.buffer || _0xee20b4.data;
        var _0x23c0e5 = Math.min(_0x52d70d, _0x1b3c59);
        var _0x49804f = {
          buffer: new Uint8Array(_0x41a7b0, _0x90d279, _0x23c0e5),
          addr: _0xee20b4.addr,
          port: _0xee20b4.port
        };
        if (_0x58e7f8.type === 1 && _0x23c0e5 < _0x1b3c59) {
          var _0x520b44 = _0x1b3c59 - _0x23c0e5;
          _0xee20b4.data = new Uint8Array(_0x41a7b0, _0x90d279 + _0x23c0e5, _0x520b44);
          _0x58e7f8.recv_queue.unshift(_0xee20b4);
        }
        return _0x49804f;
      }
    }
  };
  function _0x4b9b55(_0x53313f) {
    var _0x4a8fd5 = _0x3d74f6.getSocket(_0x53313f);
    if (!_0x4a8fd5) {
      throw new _0xee3f43.ErrnoError(8);
    }
    return _0x4a8fd5;
  }
  function _0x3930a2(_0xb086e6) {
    _0x58fcaf[_0x540bb9() >> 2] = _0xb086e6;
    return _0xb086e6;
  }
  function _0xd4342a(_0x4a9fd1) {
    var _0x143983 = _0x4a9fd1.split(".");
    for (var _0x1ffdad = 0; _0x1ffdad < 4; _0x1ffdad++) {
      var _0x389ee2 = Number(_0x143983[_0x1ffdad]);
      if (isNaN(_0x389ee2)) {
        return null;
      }
      _0x143983[_0x1ffdad] = _0x389ee2;
    }
    return (_0x143983[0] | _0x143983[1] << 8 | _0x143983[2] << 16 | _0x143983[3] << 24) >>> 0;
  }
  function _0x3ed55c(_0x54499b) {
    return parseInt(_0x54499b);
  }
  function _0x60349(_0x5a4157) {
    var _0x33cdb4;
    var _0x223fd8;
    var _0x5d725e;
    var _0x4876b9;
    var _0x408e6d = /^((?=.*::)(?!.*::.+::)(::)?([\dA-F]{1,4}:(:|\b)|){5}|([\dA-F]{1,4}:){6})((([\dA-F]{1,4}((?!\3)::|:\b|$))|(?!\2\3)){2}|(((2[0-4]|1\d|[1-9])?\d|25[0-5])\.?\b){4})$/i;
    var _0x4c4c1e = [];
    if (!_0x408e6d.test(_0x5a4157)) {
      return null;
    }
    if (_0x5a4157 === "::") {
      return [0, 0, 0, 0, 0, 0, 0, 0];
    }
    if (_0x5a4157.startsWith("::")) {
      _0x5a4157 = _0x5a4157.replace("::", "Z:");
    } else {
      _0x5a4157 = _0x5a4157.replace("::", ":Z:");
    }
    if (_0x5a4157.indexOf(".") > 0) {
      _0x5a4157 = _0x5a4157.replace(new RegExp("[.]", "g"), ":");
      _0x33cdb4 = _0x5a4157.split(":");
      _0x33cdb4[_0x33cdb4.length - 4] = _0x3ed55c(_0x33cdb4[_0x33cdb4.length - 4]) + _0x3ed55c(_0x33cdb4[_0x33cdb4.length - 3]) * 256;
      _0x33cdb4[_0x33cdb4.length - 3] = _0x3ed55c(_0x33cdb4[_0x33cdb4.length - 2]) + _0x3ed55c(_0x33cdb4[_0x33cdb4.length - 1]) * 256;
      _0x33cdb4 = _0x33cdb4.slice(0, _0x33cdb4.length - 2);
    } else {
      _0x33cdb4 = _0x5a4157.split(":");
    }
    _0x5d725e = 0;
    _0x4876b9 = 0;
    for (_0x223fd8 = 0; _0x223fd8 < _0x33cdb4.length; _0x223fd8++) {
      if (typeof _0x33cdb4[_0x223fd8] === "string") {
        if (_0x33cdb4[_0x223fd8] === "Z") {
          for (_0x4876b9 = 0; _0x4876b9 < 8 - _0x33cdb4.length + 1; _0x4876b9++) {
            _0x4c4c1e[_0x223fd8 + _0x4876b9] = 0;
          }
          _0x5d725e = _0x4876b9 - 1;
        } else {
          _0x4c4c1e[_0x223fd8 + _0x5d725e] = _0x212740(parseInt(_0x33cdb4[_0x223fd8], 16));
        }
      } else {
        _0x4c4c1e[_0x223fd8 + _0x5d725e] = _0x33cdb4[_0x223fd8];
      }
    }
    return [_0x4c4c1e[1] << 16 | _0x4c4c1e[0], _0x4c4c1e[3] << 16 | _0x4c4c1e[2], _0x4c4c1e[5] << 16 | _0x4c4c1e[4], _0x4c4c1e[7] << 16 | _0x4c4c1e[6]];
  }
  function _0x561135(_0x1dc2f0, _0x317e99, _0x353a4b, _0x33e233, _0x263ee1) {
    switch (_0x317e99) {
      case 2:
        _0x353a4b = _0xd4342a(_0x353a4b);
        if (_0x263ee1) {
          _0x58fcaf[_0x263ee1 >> 2] = 16;
        }
        _0x121e6d[_0x1dc2f0 >> 1] = _0x317e99;
        _0x58fcaf[_0x1dc2f0 + 4 >> 2] = _0x353a4b;
        _0x121e6d[_0x1dc2f0 + 2 >> 1] = _0x212740(_0x33e233);
        _0x79d46c = [0, (_0x40da2a = 0, +Math.abs(_0x40da2a) >= 1 ? _0x40da2a > 0 ? (Math.min(+Math.floor(_0x40da2a / 4294967296), 4294967295) | 0) >>> 0 : ~~+Math.ceil((_0x40da2a - +(~~_0x40da2a >>> 0)) / 4294967296) >>> 0 : 0)];
        _0x58fcaf[_0x1dc2f0 + 8 >> 2] = _0x79d46c[0];
        _0x58fcaf[_0x1dc2f0 + 12 >> 2] = _0x79d46c[1];
        break;
      case 10:
        _0x353a4b = _0x60349(_0x353a4b);
        if (_0x263ee1) {
          _0x58fcaf[_0x263ee1 >> 2] = 28;
        }
        _0x58fcaf[_0x1dc2f0 >> 2] = _0x317e99;
        _0x58fcaf[_0x1dc2f0 + 8 >> 2] = _0x353a4b[0];
        _0x58fcaf[_0x1dc2f0 + 12 >> 2] = _0x353a4b[1];
        _0x58fcaf[_0x1dc2f0 + 16 >> 2] = _0x353a4b[2];
        _0x58fcaf[_0x1dc2f0 + 20 >> 2] = _0x353a4b[3];
        _0x121e6d[_0x1dc2f0 + 2 >> 1] = _0x212740(_0x33e233);
        _0x58fcaf[_0x1dc2f0 + 4 >> 2] = 0;
        _0x58fcaf[_0x1dc2f0 + 24 >> 2] = 0;
        break;
      default:
        return 5;
    }
    return 0;
  }
  var _0xd4adf1 = {
    address_map: {
      id: 1,
      addrs: {},
      names: {}
    },
    lookup_name: function (_0x2dfbeb) {
      var _0x5a2e86 = _0xd4342a(_0x2dfbeb);
      if (_0x5a2e86 !== null) {
        return _0x2dfbeb;
      }
      _0x5a2e86 = _0x60349(_0x2dfbeb);
      if (_0x5a2e86 !== null) {
        return _0x2dfbeb;
      }
      var _0x2c9192;
      if (_0xd4adf1.address_map.addrs[_0x2dfbeb]) {
        _0x2c9192 = _0xd4adf1.address_map.addrs[_0x2dfbeb];
      } else {
        var _0x22f20b = _0xd4adf1.address_map.id++;
        _0x1edac9(_0x22f20b < 65535, "exceeded max address mappings of 65535");
        _0x2c9192 = "172.29." + (_0x22f20b & 255) + "." + (_0x22f20b & 65280);
        _0xd4adf1.address_map.names[_0x2c9192] = _0x2dfbeb;
        _0xd4adf1.address_map.addrs[_0x2dfbeb] = _0x2c9192;
      }
      return _0x2c9192;
    },
    lookup_addr: function (_0x5a21f5) {
      if (_0xd4adf1.address_map.names[_0x5a21f5]) {
        return _0xd4adf1.address_map.names[_0x5a21f5];
      }
      return null;
    }
  };
  function _0x13233a(_0x425d41, _0x43e6cf, _0x28fe9c, _0x3f2a0a) {
    try {
      var _0x2432be = _0x4b9b55(_0x425d41);
      var _0x2b410b = _0x2432be.sock_ops.accept(_0x2432be);
      if (_0x43e6cf) {
        var _0x399eba = _0x561135(_0x43e6cf, _0x2b410b.family, _0xd4adf1.lookup_name(_0x2b410b.daddr), _0x2b410b.dport, _0x28fe9c);
      }
      return _0x2b410b.stream.fd;
    } catch (_0x50ea14) {
      if (typeof _0xee3f43 === "undefined" || !(_0x50ea14 instanceof _0xee3f43.ErrnoError)) {
        _0x2e4daa(_0x50ea14);
      }
      return -_0x50ea14.errno;
    }
  }
  function _0x2ff763(_0x1299fd, _0x2e536a) {
    try {
      _0x1299fd = _0x332174.getStr(_0x1299fd);
      return _0x332174.doAccess(_0x1299fd, _0x2e536a);
    } catch (_0x3ff5f1) {
      if (typeof _0xee3f43 === "undefined" || !(_0x3ff5f1 instanceof _0xee3f43.ErrnoError)) {
        _0x2e4daa(_0x3ff5f1);
      }
      return -_0x3ff5f1.errno;
    }
  }
  function _0x40bb7e(_0x25ef5d) {
    return (_0x25ef5d & 255) + "." + (_0x25ef5d >> 8 & 255) + "." + (_0x25ef5d >> 16 & 255) + "." + (_0x25ef5d >> 24 & 255);
  }
  function _0x5ee329(_0x4769cf) {
    var _0x47c126 = "";
    var _0x2a9565 = 0;
    var _0x42dcfc = 0;
    var _0xb07e79 = 0;
    var _0x367efb = 0;
    var _0x180867 = 0;
    var _0x3ac9e4 = 0;
    var _0x5effa8 = [_0x4769cf[0] & 65535, _0x4769cf[0] >> 16, _0x4769cf[1] & 65535, _0x4769cf[1] >> 16, _0x4769cf[2] & 65535, _0x4769cf[2] >> 16, _0x4769cf[3] & 65535, _0x4769cf[3] >> 16];
    var _0x47c95d = true;
    var _0x1dc875 = "";
    for (_0x3ac9e4 = 0; _0x3ac9e4 < 5; _0x3ac9e4++) {
      if (_0x5effa8[_0x3ac9e4] !== 0) {
        _0x47c95d = false;
        break;
      }
    }
    if (_0x47c95d) {
      _0x1dc875 = _0x40bb7e(_0x5effa8[6] | _0x5effa8[7] << 16);
      if (_0x5effa8[5] === -1) {
        _0x47c126 = "::ffff:";
        _0x47c126 += _0x1dc875;
        return _0x47c126;
      }
      if (_0x5effa8[5] === 0) {
        _0x47c126 = "::";
        if (_0x1dc875 === "0.0.0.0") {
          _0x1dc875 = "";
        }
        if (_0x1dc875 === "0.0.0.1") {
          _0x1dc875 = "1";
        }
        _0x47c126 += _0x1dc875;
        return _0x47c126;
      }
    }
    for (_0x2a9565 = 0; _0x2a9565 < 8; _0x2a9565++) {
      if (_0x5effa8[_0x2a9565] === 0) {
        if (_0x2a9565 - _0xb07e79 > 1) {
          _0x180867 = 0;
        }
        _0xb07e79 = _0x2a9565;
        _0x180867++;
      }
      if (_0x180867 > _0x42dcfc) {
        _0x42dcfc = _0x180867;
        _0x367efb = _0x2a9565 - _0x42dcfc + 1;
      }
    }
    for (_0x2a9565 = 0; _0x2a9565 < 8; _0x2a9565++) {
      if (_0x42dcfc > 1) {
        if (_0x5effa8[_0x2a9565] === 0 && _0x2a9565 >= _0x367efb && _0x2a9565 < _0x367efb + _0x42dcfc) {
          if (_0x2a9565 === _0x367efb) {
            _0x47c126 += ":";
            if (_0x367efb === 0) {
              _0x47c126 += ":";
            }
          }
          continue;
        }
      }
      _0x47c126 += Number(_0x2b4e40(_0x5effa8[_0x2a9565] & 65535)).toString(16);
      _0x47c126 += _0x2a9565 < 7 ? ":" : "";
    }
    return _0x47c126;
  }
  function _0x3767d8(_0x1e95a0, _0x54fa63) {
    var _0x55ab5e = _0x121e6d[_0x1e95a0 >> 1];
    var _0x48ab4d = _0x2b4e40(_0x4429d9[_0x1e95a0 + 2 >> 1]);
    var _0x561b32;
    switch (_0x55ab5e) {
      case 2:
        if (_0x54fa63 !== 16) {
          return {
            errno: 28
          };
        }
        _0x561b32 = _0x58fcaf[_0x1e95a0 + 4 >> 2];
        _0x561b32 = _0x40bb7e(_0x561b32);
        break;
      case 10:
        if (_0x54fa63 !== 28) {
          return {
            errno: 28
          };
        }
        _0x561b32 = [_0x58fcaf[_0x1e95a0 + 8 >> 2], _0x58fcaf[_0x1e95a0 + 12 >> 2], _0x58fcaf[_0x1e95a0 + 16 >> 2], _0x58fcaf[_0x1e95a0 + 20 >> 2]];
        _0x561b32 = _0x5ee329(_0x561b32);
        break;
      default:
        return {
          errno: 5
        };
    }
    return {
      family: _0x55ab5e,
      addr: _0x561b32,
      port: _0x48ab4d
    };
  }
  function _0x3a2a29(_0x285f37, _0x1cf2a3, _0x348d00) {
    if (_0x348d00 && _0x285f37 === 0) {
      return null;
    }
    var _0x589f91 = _0x3767d8(_0x285f37, _0x1cf2a3);
    if (_0x589f91.errno) {
      throw new _0xee3f43.ErrnoError(_0x589f91.errno);
    }
    _0x589f91.addr = _0xd4adf1.lookup_addr(_0x589f91.addr) || _0x589f91.addr;
    return _0x589f91;
  }
  function _0x55d21d(_0x1db30d, _0x52fc92, _0x141601) {
    try {
      var _0x5e0519 = _0x4b9b55(_0x1db30d);
      var _0x57168d = _0x3a2a29(_0x52fc92, _0x141601);
      _0x5e0519.sock_ops.bind(_0x5e0519, _0x57168d.addr, _0x57168d.port);
      return 0;
    } catch (_0x2ca63d) {
      if (typeof _0xee3f43 === "undefined" || !(_0x2ca63d instanceof _0xee3f43.ErrnoError)) {
        _0x2e4daa(_0x2ca63d);
      }
      return -_0x2ca63d.errno;
    }
  }
  function _0x46627e(_0x424f56, _0x249257) {
    try {
      _0x424f56 = _0x332174.getStr(_0x424f56);
      _0xee3f43.chmod(_0x424f56, _0x249257);
      return 0;
    } catch (_0x3c9d74) {
      if (typeof _0xee3f43 === "undefined" || !(_0x3c9d74 instanceof _0xee3f43.ErrnoError)) {
        _0x2e4daa(_0x3c9d74);
      }
      return -_0x3c9d74.errno;
    }
  }
  function _0x520db8(_0x44144b, _0x33aa26, _0x9ec4) {
    try {
      var _0x166772 = _0x4b9b55(_0x44144b);
      var _0xad9469 = _0x3a2a29(_0x33aa26, _0x9ec4);
      _0x166772.sock_ops.connect(_0x166772, _0xad9469.addr, _0xad9469.port);
      return 0;
    } catch (_0xe16b60) {
      if (typeof _0xee3f43 === "undefined" || !(_0xe16b60 instanceof _0xee3f43.ErrnoError)) {
        _0x2e4daa(_0xe16b60);
      }
      return -_0xe16b60.errno;
    }
  }
  function _0x9a801f(_0x31e498, _0x433bf3) {
    try {
      var _0x226fa8 = _0x332174.getStreamFromFD(_0x31e498);
      if (_0x226fa8.fd === _0x433bf3) {
        return _0x433bf3;
      }
      return _0x332174.doDup(_0x226fa8.path, _0x226fa8.flags, _0x433bf3);
    } catch (_0x5277d2) {
      if (typeof _0xee3f43 === "undefined" || !(_0x5277d2 instanceof _0xee3f43.ErrnoError)) {
        _0x2e4daa(_0x5277d2);
      }
      return -_0x5277d2.errno;
    }
  }
  function _0x1b72d6(_0x31828e, _0x1c852f, _0x27d2c9) {
    _0x332174.varargs = _0x27d2c9;
    try {
      var _0x37f0ac = _0x332174.getStreamFromFD(_0x31828e);
      switch (_0x1c852f) {
        case 0:
          {
            var _0x3d6f54 = _0x332174.get();
            if (_0x3d6f54 < 0) {
              return -28;
            }
            var _0x25d18b;
            _0x25d18b = _0xee3f43.open(_0x37f0ac.path, _0x37f0ac.flags, 0, _0x3d6f54);
            return _0x25d18b.fd;
          }
        case 1:
        case 2:
          return 0;
        case 3:
          return _0x37f0ac.flags;
        case 4:
          {
            var _0x3d6f54 = _0x332174.get();
            _0x37f0ac.flags |= _0x3d6f54;
            return 0;
          }
        case 12:
          {
            var _0x3d6f54 = _0x332174.get();
            var _0x17f5bb = 0;
            _0x121e6d[_0x3d6f54 + _0x17f5bb >> 1] = 2;
            return 0;
          }
        case 13:
        case 14:
          return 0;
        case 16:
        case 8:
          return -28;
        case 9:
          _0x3930a2(28);
          return -1;
        default:
          {
            return -28;
          }
      }
    } catch (_0x2db1d4) {
      if (typeof _0xee3f43 === "undefined" || !(_0x2db1d4 instanceof _0xee3f43.ErrnoError)) {
        _0x2e4daa(_0x2db1d4);
      }
      return -_0x2db1d4.errno;
    }
  }
  function _0xfbeb78(_0x1cc415, _0x1afe86) {
    try {
      var _0xfe2c61 = _0x332174.getStreamFromFD(_0x1cc415);
      return _0x332174.doStat(_0xee3f43.stat, _0xfe2c61.path, _0x1afe86);
    } catch (_0x390ae1) {
      if (typeof _0xee3f43 === "undefined" || !(_0x390ae1 instanceof _0xee3f43.ErrnoError)) {
        _0x2e4daa(_0x390ae1);
      }
      return -_0x390ae1.errno;
    }
  }
  function _0x4edc3e(_0x430e59, _0x434086, _0xe87f7f, _0x48d2b3) {
    try {
      var _0x257a84 = _0x332174.get64(_0xe87f7f, _0x48d2b3);
      _0xee3f43.ftruncate(_0x430e59, _0x257a84);
      return 0;
    } catch (_0x2633ff) {
      if (typeof _0xee3f43 === "undefined" || !(_0x2633ff instanceof _0xee3f43.ErrnoError)) {
        _0x2e4daa(_0x2633ff);
      }
      return -_0x2633ff.errno;
    }
  }
  function _0x4143c6(_0x47c22d, _0x30bb99) {
    try {
      if (_0x30bb99 === 0) {
        return -28;
      }
      var _0x21bbd9 = _0xee3f43.cwd();
      var _0x3359f4 = _0x2705ae(_0x21bbd9);
      if (_0x30bb99 < _0x3359f4 + 1) {
        return -68;
      }
      _0x5b4754(_0x21bbd9, _0x47c22d, _0x30bb99);
      return _0x47c22d;
    } catch (_0x1a1560) {
      if (typeof _0xee3f43 === "undefined" || !(_0x1a1560 instanceof _0xee3f43.ErrnoError)) {
        _0x2e4daa(_0x1a1560);
      }
      return -_0x1a1560.errno;
    }
  }
  function _0x356c3e(_0x14f39b, _0x36e017, _0x5dd4b4) {
    try {
      var _0x13f534 = _0x332174.getStreamFromFD(_0x14f39b);
      if (!_0x13f534.getdents) {
        _0x13f534.getdents = _0xee3f43.readdir(_0x13f534.path);
      }
      var _0x59bc31 = 280;
      var _0x40732a = 0;
      var _0xe05282 = _0xee3f43.llseek(_0x13f534, 0, 1);
      var _0x5122cb = Math.floor(_0xe05282 / _0x59bc31);
      while (_0x5122cb < _0x13f534.getdents.length && _0x40732a + _0x59bc31 <= _0x5dd4b4) {
        var _0x135609;
        var _0x1ffd07;
        var _0x441d2a = _0x13f534.getdents[_0x5122cb];
        if (_0x441d2a[0] === ".") {
          _0x135609 = 1;
          _0x1ffd07 = 4;
        } else {
          var _0x69c022 = _0xee3f43.lookupNode(_0x13f534.node, _0x441d2a);
          _0x135609 = _0x69c022.id;
          _0x1ffd07 = _0xee3f43.isChrdev(_0x69c022.mode) ? 2 : _0xee3f43.isDir(_0x69c022.mode) ? 4 : _0xee3f43.isLink(_0x69c022.mode) ? 10 : 8;
        }
        _0x79d46c = [_0x135609 >>> 0, (_0x40da2a = _0x135609, +Math.abs(_0x40da2a) >= 1 ? _0x40da2a > 0 ? (Math.min(+Math.floor(_0x40da2a / 4294967296), 4294967295) | 0) >>> 0 : ~~+Math.ceil((_0x40da2a - +(~~_0x40da2a >>> 0)) / 4294967296) >>> 0 : 0)];
        _0x58fcaf[_0x36e017 + _0x40732a >> 2] = _0x79d46c[0];
        _0x58fcaf[_0x36e017 + _0x40732a + 4 >> 2] = _0x79d46c[1];
        _0x79d46c = [(_0x5122cb + 1) * _0x59bc31 >>> 0, (_0x40da2a = (_0x5122cb + 1) * _0x59bc31, +Math.abs(_0x40da2a) >= 1 ? _0x40da2a > 0 ? (Math.min(+Math.floor(_0x40da2a / 4294967296), 4294967295) | 0) >>> 0 : ~~+Math.ceil((_0x40da2a - +(~~_0x40da2a >>> 0)) / 4294967296) >>> 0 : 0)];
        _0x58fcaf[_0x36e017 + _0x40732a + 8 >> 2] = _0x79d46c[0];
        _0x58fcaf[_0x36e017 + _0x40732a + 12 >> 2] = _0x79d46c[1];
        _0x121e6d[_0x36e017 + _0x40732a + 16 >> 1] = 280;
        _0x5a8ff8[_0x36e017 + _0x40732a + 18 >> 0] = _0x1ffd07;
        _0x5b4754(_0x441d2a, _0x36e017 + _0x40732a + 19, 256);
        _0x40732a += _0x59bc31;
        _0x5122cb += 1;
      }
      _0xee3f43.llseek(_0x13f534, _0x5122cb * _0x59bc31, 0);
      return _0x40732a;
    } catch (_0x319a5d) {
      if (typeof _0xee3f43 === "undefined" || !(_0x319a5d instanceof _0xee3f43.ErrnoError)) {
        _0x2e4daa(_0x319a5d);
      }
      return -_0x319a5d.errno;
    }
  }
  function _0x5b914b() {
    return 0;
  }
  function _0x32d6c7() {
    return _0x5b914b();
  }
  function _0x2111af(_0x179533, _0x3592ec, _0x238138) {
    try {
      var _0x377a3f = _0x4b9b55(_0x179533);
      if (!_0x377a3f.daddr) {
        return -53;
      }
      var _0x51e365 = _0x561135(_0x3592ec, _0x377a3f.family, _0xd4adf1.lookup_name(_0x377a3f.daddr), _0x377a3f.dport, _0x238138);
      return 0;
    } catch (_0x18ff02) {
      if (typeof _0xee3f43 === "undefined" || !(_0x18ff02 instanceof _0xee3f43.ErrnoError)) {
        _0x2e4daa(_0x18ff02);
      }
      return -_0x18ff02.errno;
    }
  }
  function _0x591272() {
    return 42;
  }
  function _0x122ebf(_0x2698dc, _0x13be6b) {
    try {
      _0x43b956(_0x13be6b, 0, 136);
      _0x58fcaf[_0x13be6b >> 2] = 1;
      _0x58fcaf[_0x13be6b + 4 >> 2] = 2;
      _0x58fcaf[_0x13be6b + 8 >> 2] = 3;
      _0x58fcaf[_0x13be6b + 12 >> 2] = 4;
      return 0;
    } catch (_0x1341a0) {
      if (typeof _0xee3f43 === "undefined" || !(_0x1341a0 instanceof _0xee3f43.ErrnoError)) {
        _0x2e4daa(_0x1341a0);
      }
      return -_0x1341a0.errno;
    }
  }
  function _0x179bbd(_0x17cdea, _0x1846d6, _0x3c2e36) {
    try {
      _0x1717db("__sys_getsockname " + _0x17cdea);
      var _0x104414 = _0x4b9b55(_0x17cdea);
      var _0x8e9960 = _0x561135(_0x1846d6, _0x104414.family, _0xd4adf1.lookup_name(_0x104414.saddr || "0.0.0.0"), _0x104414.sport, _0x3c2e36);
      return 0;
    } catch (_0x3663c8) {
      if (typeof _0xee3f43 === "undefined" || !(_0x3663c8 instanceof _0xee3f43.ErrnoError)) {
        _0x2e4daa(_0x3663c8);
      }
      return -_0x3663c8.errno;
    }
  }
  function _0x5ab5a3(_0x44b588, _0x30f6f8, _0x3a21aa, _0x51b534, _0x226850) {
    try {
      var _0x9904c6 = _0x4b9b55(_0x44b588);
      if (_0x30f6f8 === 1) {
        if (_0x3a21aa === 4) {
          _0x58fcaf[_0x51b534 >> 2] = _0x9904c6.error;
          _0x58fcaf[_0x226850 >> 2] = 4;
          _0x9904c6.error = null;
          return 0;
        }
      }
      return -50;
    } catch (_0x4406f8) {
      if (typeof _0xee3f43 === "undefined" || !(_0x4406f8 instanceof _0xee3f43.ErrnoError)) {
        _0x2e4daa(_0x4406f8);
      }
      return -_0x4406f8.errno;
    }
  }
  function _0x2fa5f4() {
    return _0x5b914b();
  }
  function _0x3a30fa(_0x23dd14, _0x342993, _0x5259b7) {
    _0x332174.varargs = _0x5259b7;
    try {
      var _0x5c330b = _0x332174.getStreamFromFD(_0x23dd14);
      switch (_0x342993) {
        case 21509:
        case 21505:
          {
            if (!_0x5c330b.tty) {
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
            if (!_0x5c330b.tty) {
              return -59;
            }
            return 0;
          }
        case 21519:
          {
            if (!_0x5c330b.tty) {
              return -59;
            }
            var _0x366269 = _0x332174.get();
            _0x58fcaf[_0x366269 >> 2] = 0;
            return 0;
          }
        case 21520:
          {
            if (!_0x5c330b.tty) {
              return -59;
            }
            return -28;
          }
        case 21531:
          {
            var _0x366269 = _0x332174.get();
            return _0xee3f43.ioctl(_0x5c330b, _0x342993, _0x366269);
          }
        case 21523:
          {
            if (!_0x5c330b.tty) {
              return -59;
            }
            return 0;
          }
        case 21524:
          {
            if (!_0x5c330b.tty) {
              return -59;
            }
            return 0;
          }
        default:
          _0x2e4daa("bad ioctl syscall " + _0x342993);
      }
    } catch (_0xc7d15a) {
      if (typeof _0xee3f43 === "undefined" || !(_0xc7d15a instanceof _0xee3f43.ErrnoError)) {
        _0x2e4daa(_0xc7d15a);
      }
      return -_0xc7d15a.errno;
    }
  }
  function _0x355032(_0x409617, _0x4c5104) {
    try {
      var _0x501f6b = _0x4b9b55(_0x409617);
      _0x501f6b.sock_ops.listen(_0x501f6b, _0x4c5104);
      return 0;
    } catch (_0x1dd956) {
      if (typeof _0xee3f43 === "undefined" || !(_0x1dd956 instanceof _0xee3f43.ErrnoError)) {
        _0x2e4daa(_0x1dd956);
      }
      return -_0x1dd956.errno;
    }
  }
  function _0x3b60a1(_0x3096e9, _0x3295e0) {
    try {
      _0x3096e9 = _0x332174.getStr(_0x3096e9);
      return _0x332174.doStat(_0xee3f43.lstat, _0x3096e9, _0x3295e0);
    } catch (_0x29c79d) {
      if (typeof _0xee3f43 === "undefined" || !(_0x29c79d instanceof _0xee3f43.ErrnoError)) {
        _0x2e4daa(_0x29c79d);
      }
      return -_0x29c79d.errno;
    }
  }
  function _0x1a689(_0x18aa3a, _0x85790b) {
    try {
      _0x18aa3a = _0x332174.getStr(_0x18aa3a);
      return _0x332174.doMkdir(_0x18aa3a, _0x85790b);
    } catch (_0x35fc7f) {
      if (typeof _0xee3f43 === "undefined" || !(_0x35fc7f instanceof _0xee3f43.ErrnoError)) {
        _0x2e4daa(_0x35fc7f);
      }
      return -_0x35fc7f.errno;
    }
  }
  function _0x3329e3(_0x241184, _0x12c0f0, _0x5b5f55, _0x17f514, _0x321d56, _0x3f56d9) {
    _0x3f56d9 <<= 12;
    var _0x15f465;
    var _0x172fd7 = false;
    if ((_0x17f514 & 16) !== 0 && _0x241184 % 65536 !== 0) {
      return -28;
    }
    if ((_0x17f514 & 32) !== 0) {
      _0x15f465 = _0x54dd5e(65536, _0x12c0f0);
      if (!_0x15f465) {
        return -48;
      }
      _0x43b956(_0x15f465, 0, _0x12c0f0);
      _0x172fd7 = true;
    } else {
      var _0x40736c = _0xee3f43.getStream(_0x321d56);
      if (!_0x40736c) {
        return -8;
      }
      var _0x501950 = _0xee3f43.mmap(_0x40736c, _0x241184, _0x12c0f0, _0x3f56d9, _0x5b5f55, _0x17f514);
      _0x15f465 = _0x501950.ptr;
      _0x172fd7 = _0x501950.allocated;
    }
    _0x332174.mappings[_0x15f465] = {
      malloc: _0x15f465,
      len: _0x12c0f0,
      allocated: _0x172fd7,
      fd: _0x321d56,
      prot: _0x5b5f55,
      flags: _0x17f514,
      offset: _0x3f56d9
    };
    return _0x15f465;
  }
  function _0x39fe44(_0x37f95e, _0x339332, _0x154383, _0x242480, _0x420e56, _0x3fa1e2) {
    try {
      return _0x3329e3(_0x37f95e, _0x339332, _0x154383, _0x242480, _0x420e56, _0x3fa1e2);
    } catch (_0xc3a06a) {
      if (typeof _0xee3f43 === "undefined" || !(_0xc3a06a instanceof _0xee3f43.ErrnoError)) {
        _0x2e4daa(_0xc3a06a);
      }
      return -_0xc3a06a.errno;
    }
  }
  function _0x4ff411(_0x42d52f, _0x17e718) {
    if ((_0x42d52f | 0) === -1 || _0x17e718 === 0) {
      return -28;
    }
    var _0x59fc28 = _0x332174.mappings[_0x42d52f];
    if (!_0x59fc28) {
      return 0;
    }
    if (_0x17e718 === _0x59fc28.len) {
      var _0x4164c6 = _0xee3f43.getStream(_0x59fc28.fd);
      if (_0x4164c6) {
        if (_0x59fc28.prot & 2) {
          _0x332174.doMsync(_0x42d52f, _0x4164c6, _0x17e718, _0x59fc28.flags, _0x59fc28.offset);
        }
        _0xee3f43.munmap(_0x4164c6);
      }
      _0x332174.mappings[_0x42d52f] = null;
      if (_0x59fc28.allocated) {
        _0x41603f(_0x59fc28.malloc);
      }
    }
    return 0;
  }
  function _0x4e290e(_0x2e3a7b, _0x3f119a) {
    try {
      return _0x4ff411(_0x2e3a7b, _0x3f119a);
    } catch (_0x402505) {
      if (typeof _0xee3f43 === "undefined" || !(_0x402505 instanceof _0xee3f43.ErrnoError)) {
        _0x2e4daa(_0x402505);
      }
      return -_0x402505.errno;
    }
  }
  function _0x1be09e(_0x2e3c9c, _0x1258fe, _0xaa3b4c) {
    _0x332174.varargs = _0xaa3b4c;
    try {
      var _0x2f065a = _0x332174.getStr(_0x2e3c9c);
      var _0x3eea66 = _0xaa3b4c ? _0x332174.get() : 0;
      var _0x336ceb = _0xee3f43.open(_0x2f065a, _0x1258fe, _0x3eea66);
      return _0x336ceb.fd;
    } catch (_0x3be7ac) {
      if (typeof _0xee3f43 === "undefined" || !(_0x3be7ac instanceof _0xee3f43.ErrnoError)) {
        _0x2e4daa(_0x3be7ac);
      }
      return -_0x3be7ac.errno;
    }
  }
  var _0x269673 = {
    BUCKET_BUFFER_SIZE: 8192,
    mount: function (_0x198b3f) {
      return _0xee3f43.createNode(null, "/", 16895, 0);
    },
    createPipe: function () {
      var _0xe58af4 = {
        buckets: []
      };
      _0xe58af4.buckets.push({
        buffer: new Uint8Array(_0x269673.BUCKET_BUFFER_SIZE),
        offset: 0,
        roffset: 0
      });
      var _0x4329eb = _0x269673.nextname();
      var _0x20ce51 = _0x269673.nextname();
      var _0x93aafc = _0xee3f43.createNode(_0x269673.root, _0x4329eb, 4096, 0);
      var _0x9fcbb4 = _0xee3f43.createNode(_0x269673.root, _0x20ce51, 4096, 0);
      _0x93aafc.pipe = _0xe58af4;
      _0x9fcbb4.pipe = _0xe58af4;
      var _0x470df9 = _0xee3f43.createStream({
        path: _0x4329eb,
        node: _0x93aafc,
        flags: 0,
        seekable: false,
        stream_ops: _0x269673.stream_ops
      });
      _0x93aafc.stream = _0x470df9;
      var _0x1fb69c = _0xee3f43.createStream({
        path: _0x20ce51,
        node: _0x9fcbb4,
        flags: 1,
        seekable: false,
        stream_ops: _0x269673.stream_ops
      });
      _0x9fcbb4.stream = _0x1fb69c;
      return {
        readable_fd: _0x470df9.fd,
        writable_fd: _0x1fb69c.fd
      };
    },
    stream_ops: {
      poll: function (_0x3a4ea1) {
        var _0x5cf37c = _0x3a4ea1.node.pipe;
        if ((_0x3a4ea1.flags & 2097155) === 1) {
          return 260;
        } else if (_0x5cf37c.buckets.length > 0) {
          for (var _0x1da4c7 = 0; _0x1da4c7 < _0x5cf37c.buckets.length; _0x1da4c7++) {
            var _0x1ee67e = _0x5cf37c.buckets[_0x1da4c7];
            if (_0x1ee67e.offset - _0x1ee67e.roffset > 0) {
              return 65;
            }
          }
        }
        return 0;
      },
      ioctl: function (_0xd43977, _0x2ee016, _0x2d7c21) {
        return _0x4db925.EINVAL;
      },
      fsync: function (_0x56e22b) {
        return _0x4db925.EINVAL;
      },
      read: function (_0x386990, _0x572b1d, _0x52d0d5, _0x373e65, _0x1a45c5) {
        var _0x917ae = _0x386990.node.pipe;
        var _0x1e7ce3 = 0;
        for (var _0x252781 = 0; _0x252781 < _0x917ae.buckets.length; _0x252781++) {
          var _0x304c43 = _0x917ae.buckets[_0x252781];
          _0x1e7ce3 += _0x304c43.offset - _0x304c43.roffset;
        }
        _0x1edac9(_0x572b1d instanceof ArrayBuffer || ArrayBuffer.isView(_0x572b1d));
        var _0x1054e6 = _0x572b1d.subarray(_0x52d0d5, _0x52d0d5 + _0x373e65);
        if (_0x373e65 <= 0) {
          return 0;
        }
        if (_0x1e7ce3 == 0) {
          throw new _0xee3f43.ErrnoError(_0x4db925.EAGAIN);
        }
        var _0x112990 = Math.min(_0x1e7ce3, _0x373e65);
        var _0x2da449 = _0x112990;
        var _0x4f0858 = 0;
        for (var _0x252781 = 0; _0x252781 < _0x917ae.buckets.length; _0x252781++) {
          var _0x56de8b = _0x917ae.buckets[_0x252781];
          var _0x46cf53 = _0x56de8b.offset - _0x56de8b.roffset;
          if (_0x112990 <= _0x46cf53) {
            var _0x3b5319 = _0x56de8b.buffer.subarray(_0x56de8b.roffset, _0x56de8b.offset);
            if (_0x112990 < _0x46cf53) {
              _0x3b5319 = _0x3b5319.subarray(0, _0x112990);
              _0x56de8b.roffset += _0x112990;
            } else {
              _0x4f0858++;
            }
            _0x1054e6.set(_0x3b5319);
            break;
          } else {
            var _0x3b5319 = _0x56de8b.buffer.subarray(_0x56de8b.roffset, _0x56de8b.offset);
            _0x1054e6.set(_0x3b5319);
            _0x1054e6 = _0x1054e6.subarray(_0x3b5319.byteLength);
            _0x112990 -= _0x3b5319.byteLength;
            _0x4f0858++;
          }
        }
        if (_0x4f0858 && _0x4f0858 == _0x917ae.buckets.length) {
          _0x4f0858--;
          _0x917ae.buckets[_0x4f0858].offset = 0;
          _0x917ae.buckets[_0x4f0858].roffset = 0;
        }
        _0x917ae.buckets.splice(0, _0x4f0858);
        return _0x2da449;
      },
      write: function (_0xabe3e0, _0x4d4465, _0x4146a4, _0x437a7a, _0x44c26f) {
        var _0x3f5e80 = _0xabe3e0.node.pipe;
        _0x1edac9(_0x4d4465 instanceof ArrayBuffer || ArrayBuffer.isView(_0x4d4465));
        var _0x868bb1 = _0x4d4465.subarray(_0x4146a4, _0x4146a4 + _0x437a7a);
        var _0x1c8241 = _0x868bb1.byteLength;
        if (_0x1c8241 <= 0) {
          return 0;
        }
        var _0x1861a9 = null;
        if (_0x3f5e80.buckets.length == 0) {
          _0x1861a9 = {
            buffer: new Uint8Array(_0x269673.BUCKET_BUFFER_SIZE),
            offset: 0,
            roffset: 0
          };
          _0x3f5e80.buckets.push(_0x1861a9);
        } else {
          _0x1861a9 = _0x3f5e80.buckets[_0x3f5e80.buckets.length - 1];
        }
        _0x1edac9(_0x1861a9.offset <= _0x269673.BUCKET_BUFFER_SIZE);
        var _0x18890d = _0x269673.BUCKET_BUFFER_SIZE - _0x1861a9.offset;
        if (_0x18890d >= _0x1c8241) {
          _0x1861a9.buffer.set(_0x868bb1, _0x1861a9.offset);
          _0x1861a9.offset += _0x1c8241;
          return _0x1c8241;
        } else if (_0x18890d > 0) {
          _0x1861a9.buffer.set(_0x868bb1.subarray(0, _0x18890d), _0x1861a9.offset);
          _0x1861a9.offset += _0x18890d;
          _0x868bb1 = _0x868bb1.subarray(_0x18890d, _0x868bb1.byteLength);
        }
        var _0xd3b7e7 = _0x868bb1.byteLength / _0x269673.BUCKET_BUFFER_SIZE | 0;
        var _0x3e6553 = _0x868bb1.byteLength % _0x269673.BUCKET_BUFFER_SIZE;
        for (var _0x3600f0 = 0; _0x3600f0 < _0xd3b7e7; _0x3600f0++) {
          var _0x19307a = {
            buffer: new Uint8Array(_0x269673.BUCKET_BUFFER_SIZE),
            offset: _0x269673.BUCKET_BUFFER_SIZE,
            roffset: 0
          };
          _0x3f5e80.buckets.push(_0x19307a);
          _0x19307a.buffer.set(_0x868bb1.subarray(0, _0x269673.BUCKET_BUFFER_SIZE));
          _0x868bb1 = _0x868bb1.subarray(_0x269673.BUCKET_BUFFER_SIZE, _0x868bb1.byteLength);
        }
        if (_0x3e6553 > 0) {
          var _0x19307a = {
            buffer: new Uint8Array(_0x269673.BUCKET_BUFFER_SIZE),
            offset: _0x868bb1.byteLength,
            roffset: 0
          };
          _0x3f5e80.buckets.push(_0x19307a);
          _0x19307a.buffer.set(_0x868bb1);
        }
        return _0x1c8241;
      },
      close: function (_0x254098) {
        var _0x264cbb = _0x254098.node.pipe;
        _0x264cbb.buckets = null;
      }
    },
    nextname: function () {
      if (!_0x269673.nextname.current) {
        _0x269673.nextname.current = 0;
      }
      return "pipe[" + _0x269673.nextname.current++ + "]";
    }
  };
  function _0x5ae9b6(_0x28b83f) {
    try {
      if (_0x28b83f == 0) {
        throw new _0xee3f43.ErrnoError(21);
      }
      var _0x4a7e49 = _0x269673.createPipe();
      _0x58fcaf[_0x28b83f >> 2] = _0x4a7e49.readable_fd;
      _0x58fcaf[_0x28b83f + 4 >> 2] = _0x4a7e49.writable_fd;
      return 0;
    } catch (_0x3cc9f0) {
      if (typeof _0xee3f43 === "undefined" || !(_0x3cc9f0 instanceof _0xee3f43.ErrnoError)) {
        _0x2e4daa(_0x3cc9f0);
      }
      return -_0x3cc9f0.errno;
    }
  }
  function _0x264339(_0x3bfb82, _0x201ec3, _0x1dbb3d) {
    try {
      var _0x5af76c = 0;
      for (var _0x4afdd5 = 0; _0x4afdd5 < _0x201ec3; _0x4afdd5++) {
        var _0x3b4ee0 = _0x3bfb82 + _0x4afdd5 * 8;
        var _0x5e2ab4 = _0x58fcaf[_0x3b4ee0 >> 2];
        var _0x37a88d = _0x121e6d[_0x3b4ee0 + 4 >> 1];
        var _0x1b98a5 = 32;
        var _0x38cd70 = _0xee3f43.getStream(_0x5e2ab4);
        if (_0x38cd70) {
          _0x1b98a5 = _0x332174.DEFAULT_POLLMASK;
          if (_0x38cd70.stream_ops.poll) {
            _0x1b98a5 = _0x38cd70.stream_ops.poll(_0x38cd70);
          }
        }
        _0x1b98a5 &= _0x37a88d | 8 | 16;
        if (_0x1b98a5) {
          _0x5af76c++;
        }
        _0x121e6d[_0x3b4ee0 + 6 >> 1] = _0x1b98a5;
      }
      return _0x5af76c;
    } catch (_0x2cc9f3) {
      if (typeof _0xee3f43 === "undefined" || !(_0x2cc9f3 instanceof _0xee3f43.ErrnoError)) {
        _0x2e4daa(_0x2cc9f3);
      }
      return -_0x2cc9f3.errno;
    }
  }
  function _0x36c7f1(_0x47e862, _0x4f9808, _0x1b3371) {
    try {
      _0x47e862 = _0x332174.getStr(_0x47e862);
      return _0x332174.doReadlink(_0x47e862, _0x4f9808, _0x1b3371);
    } catch (_0x47c597) {
      if (typeof _0xee3f43 === "undefined" || !(_0x47c597 instanceof _0xee3f43.ErrnoError)) {
        _0x2e4daa(_0x47c597);
      }
      return -_0x47c597.errno;
    }
  }
  function _0x1f5791(_0x434783, _0x506917, _0x563f64, _0x2ba110, _0xe10f2d, _0x31ad7) {
    try {
      var _0x5b2df9 = _0x4b9b55(_0x434783);
      var _0x2d1647 = _0x5b2df9.sock_ops.recvmsg(_0x5b2df9, _0x563f64);
      if (!_0x2d1647) {
        return 0;
      }
      if (_0xe10f2d) {
        var _0x267db4 = _0x561135(_0xe10f2d, _0x5b2df9.family, _0xd4adf1.lookup_name(_0x2d1647.addr), _0x2d1647.port, _0x31ad7);
      }
      _0x479b38.set(_0x2d1647.buffer, _0x506917);
      return _0x2d1647.buffer.byteLength;
    } catch (_0x57f90c) {
      if (typeof _0xee3f43 === "undefined" || !(_0x57f90c instanceof _0xee3f43.ErrnoError)) {
        _0x2e4daa(_0x57f90c);
      }
      return -_0x57f90c.errno;
    }
  }
  function _0x307bc4(_0x7cedec, _0x2167d2, _0x3cec6d) {
    try {
      var _0x129d5c = _0x4b9b55(_0x7cedec);
      var _0x66b1df = _0x58fcaf[_0x2167d2 + 8 >> 2];
      var _0x580f63 = _0x58fcaf[_0x2167d2 + 12 >> 2];
      var _0x1497ee = 0;
      for (var _0x36694d = 0; _0x36694d < _0x580f63; _0x36694d++) {
        _0x1497ee += _0x58fcaf[_0x66b1df + (_0x36694d * 8 + 4) >> 2];
      }
      var _0x42a0e5 = _0x129d5c.sock_ops.recvmsg(_0x129d5c, _0x1497ee);
      if (!_0x42a0e5) {
        return 0;
      }
      var _0x1a00fc = _0x58fcaf[_0x2167d2 >> 2];
      if (_0x1a00fc) {
        var _0x4115ed = _0x561135(_0x1a00fc, _0x129d5c.family, _0xd4adf1.lookup_name(_0x42a0e5.addr), _0x42a0e5.port);
      }
      var _0x353502 = 0;
      var _0x5784c8 = _0x42a0e5.buffer.byteLength;
      for (var _0x36694d = 0; _0x5784c8 > 0 && _0x36694d < _0x580f63; _0x36694d++) {
        var _0x3c56f5 = _0x58fcaf[_0x66b1df + (_0x36694d * 8 + 0) >> 2];
        var _0x25eb56 = _0x58fcaf[_0x66b1df + (_0x36694d * 8 + 4) >> 2];
        if (!_0x25eb56) {
          continue;
        }
        var _0x49eb31 = Math.min(_0x25eb56, _0x5784c8);
        var _0xdd1bf5 = _0x42a0e5.buffer.subarray(_0x353502, _0x353502 + _0x49eb31);
        _0x479b38.set(_0xdd1bf5, _0x3c56f5 + _0x353502);
        _0x353502 += _0x49eb31;
        _0x5784c8 -= _0x49eb31;
      }
      return _0x353502;
    } catch (_0x3a83d7) {
      if (typeof _0xee3f43 === "undefined" || !(_0x3a83d7 instanceof _0xee3f43.ErrnoError)) {
        _0x2e4daa(_0x3a83d7);
      }
      return -_0x3a83d7.errno;
    }
  }
  function _0x17a7fd(_0x47e646, _0x3465af) {
    try {
      _0x47e646 = _0x332174.getStr(_0x47e646);
      _0x3465af = _0x332174.getStr(_0x3465af);
      _0xee3f43.rename(_0x47e646, _0x3465af);
      return 0;
    } catch (_0x2c3bb9) {
      if (typeof _0xee3f43 === "undefined" || !(_0x2c3bb9 instanceof _0xee3f43.ErrnoError)) {
        _0x2e4daa(_0x2c3bb9);
      }
      return -_0x2c3bb9.errno;
    }
  }
  function _0x57196a(_0x28f166) {
    try {
      _0x28f166 = _0x332174.getStr(_0x28f166);
      _0xee3f43.rmdir(_0x28f166);
      return 0;
    } catch (_0x1c5bb9) {
      if (typeof _0xee3f43 === "undefined" || !(_0x1c5bb9 instanceof _0xee3f43.ErrnoError)) {
        _0x2e4daa(_0x1c5bb9);
      }
      return -_0x1c5bb9.errno;
    }
  }
  function _0x3cb3df(_0x41391d, _0x5baabb, _0x20e182) {
    try {
      var _0xd7f466 = _0x4b9b55(_0x41391d);
      var _0x1218a0 = _0x58fcaf[_0x5baabb + 8 >> 2];
      var _0x119cd5 = _0x58fcaf[_0x5baabb + 12 >> 2];
      var _0x304b40;
      var _0x4ee6c8;
      var _0x14a2ff = _0x58fcaf[_0x5baabb >> 2];
      var _0x287f42 = _0x58fcaf[_0x5baabb + 4 >> 2];
      if (_0x14a2ff) {
        var _0x4ec577 = _0x3767d8(_0x14a2ff, _0x287f42);
        if (_0x4ec577.errno) {
          return -_0x4ec577.errno;
        }
        _0x4ee6c8 = _0x4ec577.port;
        _0x304b40 = _0xd4adf1.lookup_addr(_0x4ec577.addr) || _0x4ec577.addr;
      }
      var _0x5c3cbe = 0;
      for (var _0xee6e01 = 0; _0xee6e01 < _0x119cd5; _0xee6e01++) {
        _0x5c3cbe += _0x58fcaf[_0x1218a0 + (_0xee6e01 * 8 + 4) >> 2];
      }
      var _0x45f784 = new Uint8Array(_0x5c3cbe);
      var _0x448f8b = 0;
      for (var _0xee6e01 = 0; _0xee6e01 < _0x119cd5; _0xee6e01++) {
        var _0x2df038 = _0x58fcaf[_0x1218a0 + (_0xee6e01 * 8 + 0) >> 2];
        var _0x3cebd9 = _0x58fcaf[_0x1218a0 + (_0xee6e01 * 8 + 4) >> 2];
        for (var _0x47c2a6 = 0; _0x47c2a6 < _0x3cebd9; _0x47c2a6++) {
          _0x45f784[_0x448f8b++] = _0x5a8ff8[_0x2df038 + _0x47c2a6 >> 0];
        }
      }
      return _0xd7f466.sock_ops.sendmsg(_0xd7f466, _0x45f784, 0, _0x5c3cbe, _0x304b40, _0x4ee6c8);
    } catch (_0x449bcf) {
      if (typeof _0xee3f43 === "undefined" || !(_0x449bcf instanceof _0xee3f43.ErrnoError)) {
        _0x2e4daa(_0x449bcf);
      }
      return -_0x449bcf.errno;
    }
  }
  function _0x51f2c1(_0x5b660d, _0x3f3653, _0xafa191, _0x1cef5c, _0x2027fd, _0x10e4ae) {
    try {
      var _0x2fe43c = _0x4b9b55(_0x5b660d);
      var _0x262bff = _0x3a2a29(_0x2027fd, _0x10e4ae, true);
      if (!_0x262bff) {
        return _0xee3f43.write(_0x2fe43c.stream, _0x5a8ff8, _0x3f3653, _0xafa191);
      } else {
        return _0x2fe43c.sock_ops.sendmsg(_0x2fe43c, _0x5a8ff8, _0x3f3653, _0xafa191, _0x262bff.addr, _0x262bff.port);
      }
    } catch (_0x4eac89) {
      if (typeof _0xee3f43 === "undefined" || !(_0x4eac89 instanceof _0xee3f43.ErrnoError)) {
        _0x2e4daa(_0x4eac89);
      }
      return -_0x4eac89.errno;
    }
  }
  function _0x442db4(_0x7bc5a7) {
    try {
      return -50;
    } catch (_0xb41bf1) {
      if (typeof _0xee3f43 === "undefined" || !(_0xb41bf1 instanceof _0xee3f43.ErrnoError)) {
        _0x2e4daa(_0xb41bf1);
      }
      return -_0xb41bf1.errno;
    }
  }
  function _0x55fb2b(_0x47ab33, _0x1807f2) {
    try {
      _0x4b9b55(_0x47ab33);
      return -52;
    } catch (_0x2defcf) {
      if (typeof _0xee3f43 === "undefined" || !(_0x2defcf instanceof _0xee3f43.ErrnoError)) {
        _0x2e4daa(_0x2defcf);
      }
      return -_0x2defcf.errno;
    }
  }
  function _0x27556f(_0xb51d03, _0x5931a9, _0x475cc6) {
    try {
      var _0x1fb5ba = _0x3d74f6.createSocket(_0xb51d03, _0x5931a9, _0x475cc6);
      return _0x1fb5ba.stream.fd;
    } catch (_0x1350b4) {
      if (typeof _0xee3f43 === "undefined" || !(_0x1350b4 instanceof _0xee3f43.ErrnoError)) {
        _0x2e4daa(_0x1350b4);
      }
      return -_0x1350b4.errno;
    }
  }
  function _0x15032f(_0x410c0f, _0x4d1125) {
    try {
      _0x410c0f = _0x332174.getStr(_0x410c0f);
      return _0x332174.doStat(_0xee3f43.stat, _0x410c0f, _0x4d1125);
    } catch (_0x593f91) {
      if (typeof _0xee3f43 === "undefined" || !(_0x593f91 instanceof _0xee3f43.ErrnoError)) {
        _0x2e4daa(_0x593f91);
      }
      return -_0x593f91.errno;
    }
  }
  function _0x364a45(_0x209bab, _0x1f647b, _0x2a2b3a) {
    try {
      _0x209bab = _0x332174.getStr(_0x209bab);
      _0x58fcaf[_0x2a2b3a + 4 >> 2] = 4096;
      _0x58fcaf[_0x2a2b3a + 40 >> 2] = 4096;
      _0x58fcaf[_0x2a2b3a + 8 >> 2] = 1000000;
      _0x58fcaf[_0x2a2b3a + 12 >> 2] = 500000;
      _0x58fcaf[_0x2a2b3a + 16 >> 2] = 500000;
      _0x58fcaf[_0x2a2b3a + 20 >> 2] = _0xee3f43.nextInode;
      _0x58fcaf[_0x2a2b3a + 24 >> 2] = 1000000;
      _0x58fcaf[_0x2a2b3a + 28 >> 2] = 42;
      _0x58fcaf[_0x2a2b3a + 44 >> 2] = 2;
      _0x58fcaf[_0x2a2b3a + 36 >> 2] = 255;
      return 0;
    } catch (_0x594e1f) {
      if (typeof _0xee3f43 === "undefined" || !(_0x594e1f instanceof _0xee3f43.ErrnoError)) {
        _0x2e4daa(_0x594e1f);
      }
      return -_0x594e1f.errno;
    }
  }
  function _0x55f23b(_0x6b030a, _0x10a47f, _0x5db296, _0x58f75f) {
    try {
      _0x6b030a = _0x332174.getStr(_0x6b030a);
      var _0x41e0e0 = _0x332174.get64(_0x5db296, _0x58f75f);
      _0xee3f43.truncate(_0x6b030a, _0x41e0e0);
      return 0;
    } catch (_0x4288f8) {
      if (typeof _0xee3f43 === "undefined" || !(_0x4288f8 instanceof _0xee3f43.ErrnoError)) {
        _0x2e4daa(_0x4288f8);
      }
      return -_0x4288f8.errno;
    }
  }
  function _0x314ea6(_0x46b7cf) {
    try {
      if (!_0x46b7cf) {
        return -21;
      }
      var _0x3fc8b2 = {
        __size__: 390,
        domainname: 325,
        machine: 260,
        nodename: 65,
        release: 130,
        sysname: 0,
        version: 195
      };
      var _0x464be3 = function (_0x2c375e, _0x58b466) {
        var _0x56bba6 = _0x3fc8b2[_0x2c375e];
        _0x389cf4(_0x58b466, _0x46b7cf + _0x56bba6);
      };
      _0x464be3("sysname", "Emscripten");
      _0x464be3("nodename", "emscripten");
      _0x464be3("release", "1.0");
      _0x464be3("version", "#1");
      _0x464be3("machine", "wasm32");
      return 0;
    } catch (_0x53ba64) {
      if (typeof _0xee3f43 === "undefined" || !(_0x53ba64 instanceof _0xee3f43.ErrnoError)) {
        _0x2e4daa(_0x53ba64);
      }
      return -_0x53ba64.errno;
    }
  }
  function _0x1a4106(_0x1fca50) {
    try {
      _0x1fca50 = _0x332174.getStr(_0x1fca50);
      _0xee3f43.unlink(_0x1fca50);
      return 0;
    } catch (_0x2fb36c) {
      if (typeof _0xee3f43 === "undefined" || !(_0x2fb36c instanceof _0xee3f43.ErrnoError)) {
        _0x2e4daa(_0x2fb36c);
      }
      return -_0x2fb36c.errno;
    }
  }
  function _0x5534f4() {
    _0x2e4daa();
  }
  function _0x4517a9() {
    if (_0x4517a9.start === undefined) {
      _0x4517a9.start = Date.now();
    }
    return (Date.now() - _0x4517a9.start) * 1000 | 0;
  }
  function _0x14db7e() {
    if (_0x140fdc) {
      return 1;
    } else if (typeof dateNow !== "undefined") {
      return 1000;
    } else {
      return 1000;
    }
  }
  var _0x51f408 = true;
  function _0x2eccf6(_0x4df5a1, _0x2b3eb5) {
    var _0x2f7b9b;
    if (_0x4df5a1 === 0) {
      _0x2f7b9b = 1000000;
    } else if (_0x4df5a1 === 1 && _0x51f408) {
      _0x2f7b9b = _0x14db7e();
    } else {
      _0x3930a2(28);
      return -1;
    }
    _0x58fcaf[_0x2b3eb5 >> 2] = _0x2f7b9b / 1000000000 | 0;
    _0x58fcaf[_0x2b3eb5 + 4 >> 2] = _0x2f7b9b;
    return 0;
  }
  var _0x1bbf2d;
  if (_0x140fdc) {
    _0x1bbf2d = function () {
      var _0x37909d = process.hrtime();
      return _0x37909d[0] * 1000 + _0x37909d[1] / 1000000;
    };
  } else if (typeof dateNow !== "undefined") {
    _0x1bbf2d = dateNow;
  } else {
    _0x1bbf2d = function () {
      return performance.now();
    };
  }
  function _0x52ab72(_0x13e1bd, _0x3d55a) {
    var _0x1a046d;
    if (_0x13e1bd === 0) {
      _0x1a046d = Date.now();
    } else if ((_0x13e1bd === 1 || _0x13e1bd === 4) && _0x51f408) {
      _0x1a046d = _0x1bbf2d();
    } else {
      _0x3930a2(28);
      return -1;
    }
    _0x58fcaf[_0x3d55a >> 2] = _0x1a046d / 1000 | 0;
    _0x58fcaf[_0x3d55a + 4 >> 2] = _0x1a046d % 1000 * 1000 * 1000 | 0;
    return 0;
  }
  function _0x38a6cd(_0x3b34e3, _0x3129ef) {
    return _0x3b34e3 - _0x3129ef;
  }
  function _0x59add4(_0x557a4d) {}
  function _0x449736() {
    return 0;
  }
  function _0x11b633(_0x291715, _0x35b79e) {}
  function _0x30893d(_0x329fa0, _0x3a54b5) {
    return 0;
  }
  var _0x145e07 = [];
  function _0x46d949(_0x40b958, _0x128cfb) {
    _0x145e07.length = 0;
    var _0x1c92f1;
    _0x128cfb >>= 2;
    while (_0x1c92f1 = _0x479b38[_0x40b958++]) {
      var _0x27a0e8 = _0x1c92f1 < 105;
      if (_0x27a0e8 && _0x128cfb & 1) {
        _0x128cfb++;
      }
      _0x145e07.push(_0x27a0e8 ? _0x2f2442[_0x128cfb++ >> 1] : _0x58fcaf[_0x128cfb]);
      ++_0x128cfb;
    }
    return _0x145e07;
  }
  function _0x152752(_0x37b10d, _0x370ab8, _0x2fe1f3, _0x877ad7) {
    var _0x4dd5ef = _0x46d949(_0x370ab8, _0x2fe1f3);
    return _0x5a12c5[_0x37b10d].apply(null, _0x4dd5ef);
  }
  function _0x135178(_0x580000, _0x3e6539, _0x52cfbf) {
    return _0x152752(_0x580000, _0x3e6539, _0x52cfbf, 1);
  }
  function _0x940fd4(_0x110e16, _0x27999f) {
    _0x132320.mainLoop.timingMode = _0x110e16;
    _0x132320.mainLoop.timingValue = _0x27999f;
    if (!_0x132320.mainLoop.func) {
      return 1;
    }
    if (!_0x132320.mainLoop.running) {
      _0x132320.mainLoop.running = true;
    }
    if (_0x110e16 == 0) {
      _0x132320.mainLoop.scheduler = function _0x427277() {
        var _0x20a5bf = Math.max(0, _0x132320.mainLoop.tickStartTime + _0x27999f - _0x1bbf2d()) | 0;
        setTimeout(_0x132320.mainLoop.runner, _0x20a5bf);
      };
      _0x132320.mainLoop.method = "timeout";
    } else if (_0x110e16 == 1) {
      _0x132320.mainLoop.scheduler = function _0x4edcfa() {
        _0x132320.requestAnimationFrame(_0x132320.mainLoop.runner);
      };
      _0x132320.mainLoop.method = "rAF";
    } else if (_0x110e16 == 2) {
      if (typeof setImmediate === "undefined") {
        var _0x5e60f1 = [];
        var _0x21a18a = "setimmediate";
        var _0x5333d9 = function (_0x271dcc) {
          if (_0x271dcc.data === _0x21a18a || _0x271dcc.data.target === _0x21a18a) {
            _0x271dcc.stopPropagation();
            _0x5e60f1.shift()();
          }
        };
        addEventListener("message", _0x5333d9, true);
        setImmediate = function _0x46613f(_0x540168) {
          _0x5e60f1.push(_0x540168);
          if (_0x2a3447) {
            if (_0x3b068f.setImmediates === undefined) {
              _0x3b068f.setImmediates = [];
            }
            _0x3b068f.setImmediates.push(_0x540168);
            postMessage({
              target: _0x21a18a
            });
          } else {
            postMessage(_0x21a18a, "*");
          }
        };
      }
      _0x132320.mainLoop.scheduler = function _0x3db142() {
        setImmediate(_0x132320.mainLoop.runner);
      };
      _0x132320.mainLoop.method = "immediate";
    }
    return 0;
  }
  function _0xa077cf(_0x8cbe7c) {
    _0xcf8718(_0x8cbe7c);
  }
  function _0xb4eb4a() {
    if (!_0x54da6b()) {
      try {
        _0xa077cf(_0x1621c5);
      } catch (_0x26efdd) {
        if (_0x26efdd instanceof _0x15266a) {
          return;
        }
        throw _0x26efdd;
      }
    }
  }
  function _0x8ebe27(_0x15f5b3, _0xb024ba, _0x5ed170, _0x66ed3a, _0x2a88ba) {
    _0x1edac9(!_0x132320.mainLoop.func, "emscripten_set_main_loop: there can only be one main loop function at once: call emscripten_cancel_main_loop to cancel the previous one before setting a new one with different parameters.");
    _0x132320.mainLoop.func = _0x15f5b3;
    _0x132320.mainLoop.arg = _0x66ed3a;
    var _0x497ea7 = _0x132320.mainLoop.currentlyRunningMainloop;
    function _0x192cbb() {
      if (_0x497ea7 < _0x132320.mainLoop.currentlyRunningMainloop) {
        _0xb4eb4a();
        return false;
      }
      return true;
    }
    _0x132320.mainLoop.running = false;
    _0x132320.mainLoop.runner = function _0x2e6afd() {
      if (_0x2514c4) {
        return;
      }
      if (_0x132320.mainLoop.queue.length > 0) {
        var _0xbac814 = Date.now();
        var _0x5af931 = _0x132320.mainLoop.queue.shift();
        _0x5af931.func(_0x5af931.arg);
        if (_0x132320.mainLoop.remainingBlockers) {
          var _0x4002d1 = _0x132320.mainLoop.remainingBlockers;
          var _0x156d21 = _0x4002d1 % 1 == 0 ? _0x4002d1 - 1 : Math.floor(_0x4002d1);
          if (_0x5af931.counted) {
            _0x132320.mainLoop.remainingBlockers = _0x156d21;
          } else {
            _0x156d21 = _0x156d21 + 0.5;
            _0x132320.mainLoop.remainingBlockers = (_0x4002d1 * 8 + _0x156d21) / 9;
          }
        }
        console.log("main loop blocker \"" + _0x5af931.name + "\" took " + (Date.now() - _0xbac814) + " ms");
        _0x132320.mainLoop.updateStatus();
        if (!_0x192cbb()) {
          return;
        }
        setTimeout(_0x132320.mainLoop.runner, 0);
        return;
      }
      if (!_0x192cbb()) {
        return;
      }
      _0x132320.mainLoop.currentFrameNumber = _0x132320.mainLoop.currentFrameNumber + 1 | 0;
      if (_0x132320.mainLoop.timingMode == 1 && _0x132320.mainLoop.timingValue > 1 && _0x132320.mainLoop.currentFrameNumber % _0x132320.mainLoop.timingValue != 0) {
        _0x132320.mainLoop.scheduler();
        return;
      } else if (_0x132320.mainLoop.timingMode == 0) {
        _0x132320.mainLoop.tickStartTime = _0x1bbf2d();
      }
      _0x5726bd.newRenderingFrameStarted();
      _0x132320.mainLoop.runIter(_0x15f5b3);
      if (!_0x192cbb()) {
        return;
      }
      if (typeof SDL === "object" && SDL.audio && SDL.audio.queueNewAudioData) {
        SDL.audio.queueNewAudioData();
      }
      _0x132320.mainLoop.scheduler();
    };
    if (!_0x2a88ba) {
      if (_0xb024ba && _0xb024ba > 0) {
        _0x940fd4(0, 1000 / _0xb024ba);
      } else {
        _0x940fd4(1, 1);
      }
      _0x132320.mainLoop.scheduler();
    }
    if (_0x5ed170) {
      throw "unwind";
    }
  }
  function _0x1768bd(_0x490b6f, _0x2f970f) {
    if (_0x2514c4) {
      return;
    }
    if (_0x2f970f) {
      _0x490b6f();
      return;
    }
    try {
      _0x490b6f();
    } catch (_0x52ef1f) {
      if (_0x52ef1f instanceof _0x15266a) {
        return;
      } else if (_0x52ef1f !== "unwind") {
        if (_0x52ef1f && typeof _0x52ef1f === "object" && _0x52ef1f.stack) {
          _0x1717db("exception thrown: " + [_0x52ef1f, _0x52ef1f.stack]);
        }
        throw _0x52ef1f;
      }
    }
  }
  var _0x132320 = {
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
        _0x132320.mainLoop.scheduler = null;
        _0x132320.mainLoop.currentlyRunningMainloop++;
      },
      resume: function () {
        _0x132320.mainLoop.currentlyRunningMainloop++;
        var _0x2324f9 = _0x132320.mainLoop.timingMode;
        var _0x4f5133 = _0x132320.mainLoop.timingValue;
        var _0x151a37 = _0x132320.mainLoop.func;
        _0x132320.mainLoop.func = null;
        _0x8ebe27(_0x151a37, 0, false, _0x132320.mainLoop.arg, true);
        _0x940fd4(_0x2324f9, _0x4f5133);
        _0x132320.mainLoop.scheduler();
      },
      updateStatus: function () {
        if (_0x3b068f.setStatus) {
          var _0x12c355 = _0x3b068f.statusMessage || "Please wait...";
          var _0x4d5ea1 = _0x132320.mainLoop.remainingBlockers;
          var _0x372e4f = _0x132320.mainLoop.expectedBlockers;
          if (_0x4d5ea1) {
            if (_0x4d5ea1 < _0x372e4f) {
              _0x3b068f.setStatus(_0x12c355 + " (" + (_0x372e4f - _0x4d5ea1) + "/" + _0x372e4f + ")");
            } else {
              _0x3b068f.setStatus(_0x12c355);
            }
          } else {
            _0x3b068f.setStatus("");
          }
        }
      },
      runIter: function (_0x44afb7) {
        if (_0x2514c4) {
          return;
        }
        if (_0x3b068f.preMainLoop) {
          var _0x5670b1 = _0x3b068f.preMainLoop();
          if (_0x5670b1 === false) {
            return;
          }
        }
        _0x1768bd(_0x44afb7);
        if (_0x3b068f.postMainLoop) {
          _0x3b068f.postMainLoop();
        }
      }
    },
    isFullscreen: false,
    pointerLock: false,
    moduleContextCreatedCallbacks: [],
    workers: [],
    init: function () {
      if (!_0x3b068f.preloadPlugins) {
        _0x3b068f.preloadPlugins = [];
      }
      if (_0x132320.initted) {
        return;
      }
      _0x132320.initted = true;
      try {
        new Blob();
        _0x132320.hasBlobConstructor = true;
      } catch (_0x18aea5) {
        _0x132320.hasBlobConstructor = false;
        console.log("warning: no blob constructor, cannot create blobs with mimetypes");
      }
      _0x132320.BlobBuilder = typeof MozBlobBuilder != "undefined" ? MozBlobBuilder : typeof WebKitBlobBuilder != "undefined" ? WebKitBlobBuilder : !_0x132320.hasBlobConstructor ? console.log("warning: no BlobBuilder") : null;
      _0x132320.URLObject = typeof window != "undefined" ? window.URL ? window.URL : window.webkitURL : undefined;
      if (!_0x3b068f.noImageDecoding && typeof _0x132320.URLObject === "undefined") {
        console.log("warning: Browser does not support creating object URLs. Built-in browser image decoding will not be available.");
        _0x3b068f.noImageDecoding = true;
      }
      var _0x1a416e = {};
      _0x1a416e.canHandle = function _0x4ef9db(_0x15b7e6) {
        return !_0x3b068f.noImageDecoding && /\.(jpg|jpeg|png|bmp)$/i.test(_0x15b7e6);
      };
      _0x1a416e.handle = function _0x449dbf(_0x5080bc, _0x58eb99, _0x5cf907, _0x2eeade) {
        var _0x3d61bb = null;
        if (_0x132320.hasBlobConstructor) {
          try {
            _0x3d61bb = new Blob([_0x5080bc], {
              type: _0x132320.getMimetype(_0x58eb99)
            });
            if (_0x3d61bb.size !== _0x5080bc.length) {
              _0x3d61bb = new Blob([new Uint8Array(_0x5080bc).buffer], {
                type: _0x132320.getMimetype(_0x58eb99)
              });
            }
          } catch (_0x2f86e5) {
            _0x5ab828("Blob constructor present but fails: " + _0x2f86e5 + "; falling back to blob builder");
          }
        }
        if (!_0x3d61bb) {
          var _0x42cfda = new _0x132320.BlobBuilder();
          _0x42cfda.append(new Uint8Array(_0x5080bc).buffer);
          _0x3d61bb = _0x42cfda.getBlob();
        }
        var _0x3ab92f = _0x132320.URLObject.createObjectURL(_0x3d61bb);
        var _0xa3d387 = new Image();
        _0xa3d387.onload = function _0x48b85a() {
          _0x1edac9(_0xa3d387.complete, "Image " + _0x58eb99 + " could not be decoded");
          var _0x3bd91c = document.createElement("canvas");
          _0x3bd91c.width = _0xa3d387.width;
          _0x3bd91c.height = _0xa3d387.height;
          var _0x373e06 = _0x3bd91c.getContext("2d");
          _0x373e06.drawImage(_0xa3d387, 0, 0);
          _0x3b068f.preloadedImages[_0x58eb99] = _0x3bd91c;
          _0x132320.URLObject.revokeObjectURL(_0x3ab92f);
          if (_0x5cf907) {
            _0x5cf907(_0x5080bc);
          }
        };
        _0xa3d387.onerror = function _0x55461f(_0x13c6d6) {
          console.log("Image " + _0x3ab92f + " could not be decoded");
          if (_0x2eeade) {
            _0x2eeade();
          }
        };
        _0xa3d387.src = _0x3ab92f;
      };
      _0x3b068f.preloadPlugins.push(_0x1a416e);
      var _0x3040aa = {};
      _0x3040aa.canHandle = function _0x3dd426(_0x97249e) {
        return !_0x3b068f.noAudioDecoding && _0x97249e.substr(-4) in {
          ".ogg": 1,
          ".wav": 1,
          ".mp3": 1
        };
      };
      _0x3040aa.handle = function _0x5d8b58(_0x24047a, _0x36f8d1, _0x4b9d12, _0x33c6cf) {
        var _0x346bbe = false;
        function _0x2ca300(_0x1502b0) {
          if (_0x346bbe) {
            return;
          }
          _0x346bbe = true;
          _0x3b068f.preloadedAudios[_0x36f8d1] = _0x1502b0;
          if (_0x4b9d12) {
            _0x4b9d12(_0x24047a);
          }
        }
        function _0x30df94() {
          if (_0x346bbe) {
            return;
          }
          _0x346bbe = true;
          _0x3b068f.preloadedAudios[_0x36f8d1] = new Audio();
          if (_0x33c6cf) {
            _0x33c6cf();
          }
        }
        if (_0x132320.hasBlobConstructor) {
          try {
            var _0x1951c7 = new Blob([_0x24047a], {
              type: _0x132320.getMimetype(_0x36f8d1)
            });
          } catch (_0x53d266) {
            return _0x30df94();
          }
          var _0x242ef0 = _0x132320.URLObject.createObjectURL(_0x1951c7);
          var _0x501bd3 = new Audio();
          _0x501bd3.addEventListener("canplaythrough", function () {
            _0x2ca300(_0x501bd3);
          }, false);
          _0x501bd3.onerror = function _0xbd9b98(_0x43e7d7) {
            if (_0x346bbe) {
              return;
            }
            console.log("warning: browser could not fully decode audio " + _0x36f8d1 + ", trying slower base64 approach");
            function _0x2ff587(_0x100845) {
              var _0xb2491e = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/";
              var _0x3865c2 = "=";
              var _0x3ad6be = "";
              var _0x1b468a = 0;
              var _0x52e1b7 = 0;
              for (var _0x16098a = 0; _0x16098a < _0x100845.length; _0x16098a++) {
                _0x1b468a = _0x1b468a << 8 | _0x100845[_0x16098a];
                _0x52e1b7 += 8;
                while (_0x52e1b7 >= 6) {
                  var _0x1d3df1 = _0x1b468a >> _0x52e1b7 - 6 & 63;
                  _0x52e1b7 -= 6;
                  _0x3ad6be += _0xb2491e[_0x1d3df1];
                }
              }
              if (_0x52e1b7 == 2) {
                _0x3ad6be += _0xb2491e[(_0x1b468a & 3) << 4];
                _0x3ad6be += _0x3865c2 + _0x3865c2;
              } else if (_0x52e1b7 == 4) {
                _0x3ad6be += _0xb2491e[(_0x1b468a & 15) << 2];
                _0x3ad6be += _0x3865c2;
              }
              return _0x3ad6be;
            }
            _0x501bd3.src = "data:audio/x-" + _0x36f8d1.substr(-3) + ";base64," + _0x2ff587(_0x24047a);
            _0x2ca300(_0x501bd3);
          };
          _0x501bd3.src = _0x242ef0;
          _0x132320.safeSetTimeout(function () {
            _0x2ca300(_0x501bd3);
          }, 10000);
        } else {
          return _0x30df94();
        }
      };
      _0x3b068f.preloadPlugins.push(_0x3040aa);
      function _0x4a9eab() {
        _0x132320.pointerLock = document.pointerLockElement === _0x3b068f.canvas || document.mozPointerLockElement === _0x3b068f.canvas || document.webkitPointerLockElement === _0x3b068f.canvas || document.msPointerLockElement === _0x3b068f.canvas;
      }
      var _0x421262 = _0x3b068f.canvas;
      if (_0x421262) {
        _0x421262.requestPointerLock = _0x421262.requestPointerLock || _0x421262.mozRequestPointerLock || _0x421262.webkitRequestPointerLock || _0x421262.msRequestPointerLock || function () {};
        _0x421262.exitPointerLock = document.exitPointerLock || document.mozExitPointerLock || document.webkitExitPointerLock || document.msExitPointerLock || function () {};
        _0x421262.exitPointerLock = _0x421262.exitPointerLock.bind(document);
        document.addEventListener("pointerlockchange", _0x4a9eab, false);
        document.addEventListener("mozpointerlockchange", _0x4a9eab, false);
        document.addEventListener("webkitpointerlockchange", _0x4a9eab, false);
        document.addEventListener("mspointerlockchange", _0x4a9eab, false);
        if (_0x3b068f.elementPointerLock) {
          _0x421262.addEventListener("click", function (_0x166f94) {
            if (!_0x132320.pointerLock && _0x3b068f.canvas.requestPointerLock) {
              _0x3b068f.canvas.requestPointerLock();
              _0x166f94.preventDefault();
            }
          }, false);
        }
      }
    },
    createContext: function (_0x1dcec2, _0x301aa9, _0x44f7a2, _0x26d89d) {
      if (_0x301aa9 && _0x3b068f.ctx && _0x1dcec2 == _0x3b068f.canvas) {
        return _0x3b068f.ctx;
      }
      var _0x1f576c;
      var _0x1f3404;
      if (_0x301aa9) {
        var _0xc48fcf = {
          antialias: false,
          alpha: false,
          majorVersion: typeof WebGL2RenderingContext !== "undefined" ? 2 : 1
        };
        if (_0x26d89d) {
          for (var _0x346c91 in _0x26d89d) {
            _0xc48fcf[_0x346c91] = _0x26d89d[_0x346c91];
          }
        }
        if (typeof _0x5726bd !== "undefined") {
          _0x1f3404 = _0x5726bd.createContext(_0x1dcec2, _0xc48fcf);
          if (_0x1f3404) {
            _0x1f576c = _0x5726bd.getContext(_0x1f3404).GLctx;
          }
        }
      } else {
        _0x1f576c = _0x1dcec2.getContext("2d");
      }
      if (!_0x1f576c) {
        return null;
      }
      if (_0x44f7a2) {
        if (!_0x301aa9) {
          _0x1edac9(typeof _0x5dd9d2 === "undefined", "cannot set in module if GLctx is used, but we are a non-GL context that would replace it");
        }
        _0x3b068f.ctx = _0x1f576c;
        if (_0x301aa9) {
          _0x5726bd.makeContextCurrent(_0x1f3404);
        }
        _0x3b068f.useWebGL = _0x301aa9;
        _0x132320.moduleContextCreatedCallbacks.forEach(function (_0x11e26d) {
          _0x11e26d();
        });
        _0x132320.init();
      }
      return _0x1f576c;
    },
    destroyContext: function (_0x406d56, _0x1f0c22, _0x2ed6eb) {},
    fullscreenHandlersInstalled: false,
    lockPointer: undefined,
    resizeCanvas: undefined,
    requestFullscreen: function (_0x3c420f, _0x407471) {
      _0x132320.lockPointer = _0x3c420f;
      _0x132320.resizeCanvas = _0x407471;
      if (typeof _0x132320.lockPointer === "undefined") {
        _0x132320.lockPointer = true;
      }
      if (typeof _0x132320.resizeCanvas === "undefined") {
        _0x132320.resizeCanvas = false;
      }
      var _0x4de485 = _0x3b068f.canvas;
      function _0x7b2d9d() {
        _0x132320.isFullscreen = false;
        var _0x308e67 = _0x4de485.parentNode;
        if ((document.fullscreenElement || document.mozFullScreenElement || document.msFullscreenElement || document.webkitFullscreenElement || document.webkitCurrentFullScreenElement) === _0x308e67) {
          _0x4de485.exitFullscreen = _0x132320.exitFullscreen;
          if (_0x132320.lockPointer) {
            _0x4de485.requestPointerLock();
          }
          _0x132320.isFullscreen = true;
          if (_0x132320.resizeCanvas) {
            _0x132320.setFullscreenCanvasSize();
          } else {
            _0x132320.updateCanvasDimensions(_0x4de485);
          }
        } else {
          _0x308e67.parentNode.insertBefore(_0x4de485, _0x308e67);
          _0x308e67.parentNode.removeChild(_0x308e67);
          if (_0x132320.resizeCanvas) {
            _0x132320.setWindowedCanvasSize();
          } else {
            _0x132320.updateCanvasDimensions(_0x4de485);
          }
        }
        if (_0x3b068f.onFullScreen) {
          _0x3b068f.onFullScreen(_0x132320.isFullscreen);
        }
        if (_0x3b068f.onFullscreen) {
          _0x3b068f.onFullscreen(_0x132320.isFullscreen);
        }
      }
      if (!_0x132320.fullscreenHandlersInstalled) {
        _0x132320.fullscreenHandlersInstalled = true;
        document.addEventListener("fullscreenchange", _0x7b2d9d, false);
        document.addEventListener("mozfullscreenchange", _0x7b2d9d, false);
        document.addEventListener("webkitfullscreenchange", _0x7b2d9d, false);
        document.addEventListener("MSFullscreenChange", _0x7b2d9d, false);
      }
      var _0x17d1ca = document.createElement("div");
      _0x4de485.parentNode.insertBefore(_0x17d1ca, _0x4de485);
      _0x17d1ca.appendChild(_0x4de485);
      _0x17d1ca.requestFullscreen = _0x17d1ca.requestFullscreen || _0x17d1ca.mozRequestFullScreen || _0x17d1ca.msRequestFullscreen || (_0x17d1ca.webkitRequestFullscreen ? function () {
        _0x17d1ca.webkitRequestFullscreen(Element.ALLOW_KEYBOARD_INPUT);
      } : null) || (_0x17d1ca.webkitRequestFullScreen ? function () {
        _0x17d1ca.webkitRequestFullScreen(Element.ALLOW_KEYBOARD_INPUT);
      } : null);
      _0x17d1ca.requestFullscreen();
    },
    exitFullscreen: function () {
      if (!_0x132320.isFullscreen) {
        return false;
      }
      var _0x22c0de = document.exitFullscreen || document.cancelFullScreen || document.mozCancelFullScreen || document.msExitFullscreen || document.webkitCancelFullScreen || function () {};
      _0x22c0de.apply(document, []);
      return true;
    },
    nextRAF: 0,
    fakeRequestAnimationFrame: function (_0x3fa332) {
      var _0x2a8014 = Date.now();
      if (_0x132320.nextRAF === 0) {
        _0x132320.nextRAF = _0x2a8014 + 1000 / 60;
      } else {
        while (_0x2a8014 + 2 >= _0x132320.nextRAF) {
          _0x132320.nextRAF += 1000 / 60;
        }
      }
      var _0x729e31 = Math.max(_0x132320.nextRAF - _0x2a8014, 0);
      setTimeout(_0x3fa332, _0x729e31);
    },
    requestAnimationFrame: function (_0x1072aa) {
      if (typeof requestAnimationFrame === "function") {
        requestAnimationFrame(_0x1072aa);
        return;
      }
      var _0x1ec0d4 = _0x132320.fakeRequestAnimationFrame;
      _0x1ec0d4(_0x1072aa);
    },
    safeRequestAnimationFrame: function (_0x1c65da) {
      return _0x132320.requestAnimationFrame(function () {
        _0x1768bd(_0x1c65da);
      });
    },
    safeSetTimeout: function (_0x86a250, _0xa8ac37) {
      return setTimeout(function () {
        _0x1768bd(_0x86a250);
      }, _0xa8ac37);
    },
    getMimetype: function (_0x5628de) {
      return {
        jpg: "image/jpeg",
        jpeg: "image/jpeg",
        png: "image/png",
        bmp: "image/bmp",
        ogg: "audio/ogg",
        wav: "audio/wav",
        mp3: "audio/mpeg"
      }[_0x5628de.substr(_0x5628de.lastIndexOf(".") + 1)];
    },
    getUserMedia: function (_0x446c2a) {
      if (!window.getUserMedia) {
        window.getUserMedia = navigator.getUserMedia || navigator.mozGetUserMedia;
      }
      window.getUserMedia(_0x446c2a);
    },
    getMovementX: function (_0x3f6132) {
      return _0x3f6132.movementX || _0x3f6132.mozMovementX || _0x3f6132.webkitMovementX || 0;
    },
    getMovementY: function (_0x132fd4) {
      return _0x132fd4.movementY || _0x132fd4.mozMovementY || _0x132fd4.webkitMovementY || 0;
    },
    getMouseWheelDelta: function (_0x3be6aa) {
      var _0x545053 = 0;
      switch (_0x3be6aa.type) {
        case "DOMMouseScroll":
          _0x545053 = _0x3be6aa.detail / 3;
          break;
        case "mousewheel":
          _0x545053 = _0x3be6aa.wheelDelta / 120;
          break;
        case "wheel":
          _0x545053 = _0x3be6aa.deltaY;
          switch (_0x3be6aa.deltaMode) {
            case 0:
              _0x545053 /= 100;
              break;
            case 1:
              _0x545053 /= 3;
              break;
            case 2:
              _0x545053 *= 80;
              break;
            default:
              throw "unrecognized mouse wheel delta mode: " + _0x3be6aa.deltaMode;
          }
          break;
        default:
          throw "unrecognized mouse wheel event: " + _0x3be6aa.type;
      }
      return _0x545053;
    },
    mouseX: 0,
    mouseY: 0,
    mouseMovementX: 0,
    mouseMovementY: 0,
    touches: {},
    lastTouches: {},
    calculateMouseEvent: function (_0x38ebb7) {
      if (_0x132320.pointerLock) {
        if (_0x38ebb7.type != "mousemove" && "mozMovementX" in _0x38ebb7) {
          _0x132320.mouseMovementX = _0x132320.mouseMovementY = 0;
        } else {
          _0x132320.mouseMovementX = _0x132320.getMovementX(_0x38ebb7);
          _0x132320.mouseMovementY = _0x132320.getMovementY(_0x38ebb7);
        }
        if (typeof SDL != "undefined") {
          _0x132320.mouseX = SDL.mouseX + _0x132320.mouseMovementX;
          _0x132320.mouseY = SDL.mouseY + _0x132320.mouseMovementY;
        } else {
          _0x132320.mouseX += _0x132320.mouseMovementX;
          _0x132320.mouseY += _0x132320.mouseMovementY;
        }
      } else {
        var _0x3c0b0c = _0x3b068f.canvas.getBoundingClientRect();
        var _0x387b22 = _0x3b068f.canvas.width;
        var _0x1c2324 = _0x3b068f.canvas.height;
        var _0x37839f = typeof window.scrollX !== "undefined" ? window.scrollX : window.pageXOffset;
        var _0xc4280e = typeof window.scrollY !== "undefined" ? window.scrollY : window.pageYOffset;
        if (_0x38ebb7.type === "touchstart" || _0x38ebb7.type === "touchend" || _0x38ebb7.type === "touchmove") {
          var _0x2aeafd = _0x38ebb7.touch;
          if (_0x2aeafd === undefined) {
            return;
          }
          var _0x18a228 = _0x2aeafd.pageX - (_0x37839f + _0x3c0b0c.left);
          var _0x595825 = _0x2aeafd.pageY - (_0xc4280e + _0x3c0b0c.top);
          _0x18a228 = _0x18a228 * (_0x387b22 / _0x3c0b0c.width);
          _0x595825 = _0x595825 * (_0x1c2324 / _0x3c0b0c.height);
          var _0x244417 = {
            x: _0x18a228,
            y: _0x595825
          };
          if (_0x38ebb7.type === "touchstart") {
            _0x132320.lastTouches[_0x2aeafd.identifier] = _0x244417;
            _0x132320.touches[_0x2aeafd.identifier] = _0x244417;
          } else if (_0x38ebb7.type === "touchend" || _0x38ebb7.type === "touchmove") {
            var _0x13f928 = _0x132320.touches[_0x2aeafd.identifier];
            if (!_0x13f928) {
              _0x13f928 = _0x244417;
            }
            _0x132320.lastTouches[_0x2aeafd.identifier] = _0x13f928;
            _0x132320.touches[_0x2aeafd.identifier] = _0x244417;
          }
          return;
        }
        var _0x79a3e4 = _0x38ebb7.pageX - (_0x37839f + _0x3c0b0c.left);
        var _0xba949e = _0x38ebb7.pageY - (_0xc4280e + _0x3c0b0c.top);
        _0x79a3e4 = _0x79a3e4 * (_0x387b22 / _0x3c0b0c.width);
        _0xba949e = _0xba949e * (_0x1c2324 / _0x3c0b0c.height);
        _0x132320.mouseMovementX = _0x79a3e4 - _0x132320.mouseX;
        _0x132320.mouseMovementY = _0xba949e - _0x132320.mouseY;
        _0x132320.mouseX = _0x79a3e4;
        _0x132320.mouseY = _0xba949e;
      }
    },
    asyncLoad: function (_0x3fcf2d, _0x3bc8db, _0x53891d, _0x279a45) {
      var _0xa083bf = !_0x279a45 ? _0x5a51bf("al " + _0x3fcf2d) : "";
      _0x40665a(_0x3fcf2d, function (_0x33c660) {
        _0x1edac9(_0x33c660, "Loading data file \"" + _0x3fcf2d + "\" failed (no arrayBuffer).");
        _0x3bc8db(new Uint8Array(_0x33c660));
        if (_0xa083bf) {
          _0x40101a(_0xa083bf);
        }
      }, function (_0x1babbd) {
        if (_0x53891d) {
          _0x53891d();
        } else {
          throw "Loading data file \"" + _0x3fcf2d + "\" failed.";
        }
      });
      if (_0xa083bf) {
        _0x5d8b6d(_0xa083bf);
      }
    },
    resizeListeners: [],
    updateResizeListeners: function () {
      var _0x412e3d = _0x3b068f.canvas;
      _0x132320.resizeListeners.forEach(function (_0x264dcd) {
        _0x264dcd(_0x412e3d.width, _0x412e3d.height);
      });
    },
    setCanvasSize: function (_0x43a681, _0x22a097, _0x27d175) {
      var _0x3a3b1f = _0x3b068f.canvas;
      _0x132320.updateCanvasDimensions(_0x3a3b1f, _0x43a681, _0x22a097);
      if (!_0x27d175) {
        _0x132320.updateResizeListeners();
      }
    },
    windowedWidth: 0,
    windowedHeight: 0,
    setFullscreenCanvasSize: function () {
      if (typeof SDL != "undefined") {
        var _0x474494 = _0x59624f[SDL.screen >> 2];
        _0x474494 = _0x474494 | 8388608;
        _0x58fcaf[SDL.screen >> 2] = _0x474494;
      }
      _0x132320.updateCanvasDimensions(_0x3b068f.canvas);
      _0x132320.updateResizeListeners();
    },
    setWindowedCanvasSize: function () {
      if (typeof SDL != "undefined") {
        var _0x234ff2 = _0x59624f[SDL.screen >> 2];
        _0x234ff2 = _0x234ff2 & ~8388608;
        _0x58fcaf[SDL.screen >> 2] = _0x234ff2;
      }
      _0x132320.updateCanvasDimensions(_0x3b068f.canvas);
      _0x132320.updateResizeListeners();
    },
    updateCanvasDimensions: function (_0x334728, _0x5a37ef, _0x541f8d) {
      if (_0x5a37ef && _0x541f8d) {
        _0x334728.widthNative = _0x5a37ef;
        _0x334728.heightNative = _0x541f8d;
      } else {
        _0x5a37ef = _0x334728.widthNative;
        _0x541f8d = _0x334728.heightNative;
      }
      var _0x4b161b = _0x5a37ef;
      var _0x5c0e2b = _0x541f8d;
      if (_0x3b068f.forcedAspectRatio && _0x3b068f.forcedAspectRatio > 0) {
        if (_0x4b161b / _0x5c0e2b < _0x3b068f.forcedAspectRatio) {
          _0x4b161b = Math.round(_0x5c0e2b * _0x3b068f.forcedAspectRatio);
        } else {
          _0x5c0e2b = Math.round(_0x4b161b / _0x3b068f.forcedAspectRatio);
        }
      }
      if ((document.fullscreenElement || document.mozFullScreenElement || document.msFullscreenElement || document.webkitFullscreenElement || document.webkitCurrentFullScreenElement) === _0x334728.parentNode && typeof screen != "undefined") {
        var _0x978c4d = Math.min(screen.width / _0x4b161b, screen.height / _0x5c0e2b);
        _0x4b161b = Math.round(_0x4b161b * _0x978c4d);
        _0x5c0e2b = Math.round(_0x5c0e2b * _0x978c4d);
      }
      if (_0x132320.resizeCanvas) {
        if (_0x334728.width != _0x4b161b) {
          _0x334728.width = _0x4b161b;
        }
        if (_0x334728.height != _0x5c0e2b) {
          _0x334728.height = _0x5c0e2b;
        }
        if (typeof _0x334728.style != "undefined") {
          _0x334728.style.removeProperty("width");
          _0x334728.style.removeProperty("height");
        }
      } else {
        if (_0x334728.width != _0x5a37ef) {
          _0x334728.width = _0x5a37ef;
        }
        if (_0x334728.height != _0x541f8d) {
          _0x334728.height = _0x541f8d;
        }
        if (typeof _0x334728.style != "undefined") {
          if (_0x4b161b != _0x5a37ef || _0x5c0e2b != _0x541f8d) {
            _0x334728.style.setProperty("width", _0x4b161b + "px", "important");
            _0x334728.style.setProperty("height", _0x5c0e2b + "px", "important");
          } else {
            _0x334728.style.removeProperty("width");
            _0x334728.style.removeProperty("height");
          }
        }
      }
    },
    wgetRequests: {},
    nextWgetRequestHandle: 0,
    getNextWgetRequestHandle: function () {
      var _0x32d13d = _0x132320.nextWgetRequestHandle;
      _0x132320.nextWgetRequestHandle++;
      return _0x32d13d;
    }
  };
  function _0x2f52ce() {
    _0x132320.mainLoop.pause();
    _0x132320.mainLoop.func = null;
  }
  function _0x447979(_0x1f47a1) {
    clearInterval(_0x1f47a1);
  }
  var _0x100051 = {
    inEventHandler: 0,
    removeAllEventListeners: function () {
      for (var _0x43d99d = _0x100051.eventHandlers.length - 1; _0x43d99d >= 0; --_0x43d99d) {
        _0x100051._removeHandler(_0x43d99d);
      }
      _0x100051.eventHandlers = [];
      _0x100051.deferredCalls = [];
    },
    registerRemoveEventListeners: function () {
      if (!_0x100051.removeEventListenersRegistered) {
        _0x4e3741.push(_0x100051.removeAllEventListeners);
        _0x100051.removeEventListenersRegistered = true;
      }
    },
    deferredCalls: [],
    deferCall: function (_0x8f7638, _0x248a5b, _0x3a1732) {
      function _0x491b1e(_0xe011dc, _0x44b7f7) {
        if (_0xe011dc.length != _0x44b7f7.length) {
          return false;
        }
        for (var _0x5e7874 in _0xe011dc) {
          if (_0xe011dc[_0x5e7874] != _0x44b7f7[_0x5e7874]) {
            return false;
          }
        }
        return true;
      }
      for (var _0x16dc38 in _0x100051.deferredCalls) {
        var _0x516e22 = _0x100051.deferredCalls[_0x16dc38];
        if (_0x516e22.targetFunction == _0x8f7638 && _0x491b1e(_0x516e22.argsList, _0x3a1732)) {
          return;
        }
      }
      _0x100051.deferredCalls.push({
        targetFunction: _0x8f7638,
        precedence: _0x248a5b,
        argsList: _0x3a1732
      });
      _0x100051.deferredCalls.sort(function (_0x16b300, _0x43f24c) {
        return _0x16b300.precedence < _0x43f24c.precedence;
      });
    },
    removeDeferredCalls: function (_0x308970) {
      for (var _0x843ef1 = 0; _0x843ef1 < _0x100051.deferredCalls.length; ++_0x843ef1) {
        if (_0x100051.deferredCalls[_0x843ef1].targetFunction == _0x308970) {
          _0x100051.deferredCalls.splice(_0x843ef1, 1);
          --_0x843ef1;
        }
      }
    },
    canPerformEventHandlerRequests: function () {
      return _0x100051.inEventHandler && _0x100051.currentEventHandler.allowsDeferredCalls;
    },
    runDeferredCalls: function () {
      if (!_0x100051.canPerformEventHandlerRequests()) {
        return;
      }
      for (var _0x343e41 = 0; _0x343e41 < _0x100051.deferredCalls.length; ++_0x343e41) {
        var _0x3b68dc = _0x100051.deferredCalls[_0x343e41];
        _0x100051.deferredCalls.splice(_0x343e41, 1);
        --_0x343e41;
        _0x3b68dc.targetFunction.apply(null, _0x3b68dc.argsList);
      }
    },
    eventHandlers: [],
    removeAllHandlersOnTarget: function (_0x5e2e92, _0x34615c) {
      for (var _0x5a1361 = 0; _0x5a1361 < _0x100051.eventHandlers.length; ++_0x5a1361) {
        if (_0x100051.eventHandlers[_0x5a1361].target == _0x5e2e92 && (!_0x34615c || _0x34615c == _0x100051.eventHandlers[_0x5a1361].eventTypeString)) {
          _0x100051._removeHandler(_0x5a1361--);
        }
      }
    },
    _removeHandler: function (_0x334a74) {
      var _0x5e1cf9 = _0x100051.eventHandlers[_0x334a74];
      _0x5e1cf9.target.removeEventListener(_0x5e1cf9.eventTypeString, _0x5e1cf9.eventListenerFunc, _0x5e1cf9.useCapture);
      _0x100051.eventHandlers.splice(_0x334a74, 1);
    },
    registerOrRemoveHandler: function (_0x2d7d23) {
      var _0x28fd87 = function _0x173e7d(_0x21ccbe) {
        ++_0x100051.inEventHandler;
        _0x100051.currentEventHandler = _0x2d7d23;
        _0x100051.runDeferredCalls();
        _0x2d7d23.handlerFunc(_0x21ccbe);
        _0x100051.runDeferredCalls();
        --_0x100051.inEventHandler;
      };
      if (_0x2d7d23.callbackfunc) {
        _0x2d7d23.eventListenerFunc = _0x28fd87;
        _0x2d7d23.target.addEventListener(_0x2d7d23.eventTypeString, _0x28fd87, _0x2d7d23.useCapture);
        _0x100051.eventHandlers.push(_0x2d7d23);
        _0x100051.registerRemoveEventListeners();
      } else {
        for (var _0x3f8957 = 0; _0x3f8957 < _0x100051.eventHandlers.length; ++_0x3f8957) {
          if (_0x100051.eventHandlers[_0x3f8957].target == _0x2d7d23.target && _0x100051.eventHandlers[_0x3f8957].eventTypeString == _0x2d7d23.eventTypeString) {
            _0x100051._removeHandler(_0x3f8957--);
          }
        }
      }
    },
    getNodeNameForTarget: function (_0x4db895) {
      if (!_0x4db895) {
        return "";
      }
      if (_0x4db895 == window) {
        return "#window";
      }
      if (_0x4db895 == screen) {
        return "#screen";
      }
      if (_0x4db895 && _0x4db895.nodeName) {
        return _0x4db895.nodeName;
      } else {
        return "";
      }
    },
    fullscreenEnabled: function () {
      return document.fullscreenEnabled || document.webkitFullscreenEnabled;
    }
  };
  var _0x3ef81e = {};
  function _0x578427(_0x55caa3) {
    if (_0x55caa3 > 2) {
      return _0x57f36f(_0x55caa3);
    } else {
      return _0x55caa3;
    }
  }
  var _0x250094 = [0, typeof document !== "undefined" ? document : 0, typeof window !== "undefined" ? window : 0];
  function _0x423aa9(_0x95b9d1) {
    _0x95b9d1 = _0x578427(_0x95b9d1);
    var _0x337058 = _0x250094[_0x95b9d1] || (typeof document !== "undefined" ? document.querySelector(_0x95b9d1) : undefined);
    return _0x337058;
  }
  function _0x306cd7(_0x39d5fa) {
    return _0x423aa9(_0x39d5fa);
  }
  function _0x5e0500(_0x37a49f, _0x5a5f56, _0x306393) {
    var _0x578f60 = _0x306cd7(_0x37a49f);
    if (!_0x578f60) {
      return -4;
    }
    _0x58fcaf[_0x5a5f56 >> 2] = _0x578f60.width;
    _0x58fcaf[_0x306393 >> 2] = _0x578f60.height;
  }
  function _0x1715da(_0x1fe3a6) {
    var _0x2ff082 = _0x1c6173();
    var _0xcaa554 = _0x2d607d(8);
    var _0x12f62e = _0xcaa554 + 4;
    var _0x39e813 = _0x2d607d(_0x1fe3a6.id.length + 1);
    _0x5b4754(_0x1fe3a6.id, _0x39e813, _0x1fe3a6.id.length + 1);
    var _0xfe3d02 = _0x5e0500(_0x39e813, _0xcaa554, _0x12f62e);
    var _0x390473 = [_0x58fcaf[_0xcaa554 >> 2], _0x58fcaf[_0x12f62e >> 2]];
    _0x176ee2(_0x2ff082);
    return _0x390473;
  }
  function _0x2d3b7f(_0x2fcc53, _0x4be5f2, _0x335fb7) {
    var _0x3ee765 = _0x306cd7(_0x2fcc53);
    if (!_0x3ee765) {
      return -4;
    }
    _0x3ee765.width = _0x4be5f2;
    _0x3ee765.height = _0x335fb7;
    return 0;
  }
  function _0x3bd27c(_0x4ce231, _0x2f2745, _0x42839a) {
    if (!_0x4ce231.controlTransferredOffscreen) {
      _0x4ce231.width = _0x2f2745;
      _0x4ce231.height = _0x42839a;
    } else {
      var _0x141d21 = _0x1c6173();
      var _0x31700c = _0x2d607d(_0x4ce231.id.length + 1);
      _0x5b4754(_0x4ce231.id, _0x31700c, _0x4ce231.id.length + 1);
      _0x2d3b7f(_0x31700c, _0x2f2745, _0x42839a);
      _0x176ee2(_0x141d21);
    }
  }
  function _0xbc26a8(_0x17a48e) {
    var _0x36e9ba = _0x1715da(_0x17a48e);
    var _0x4d154a = _0x36e9ba[0];
    var _0x5bc2eb = _0x36e9ba[1];
    var _0x3bb2a4 = _0x17a48e.style.width;
    var _0x1202b7 = _0x17a48e.style.height;
    var _0x4e546f = _0x17a48e.style.backgroundColor;
    var _0xd6e0ca = document.body.style.backgroundColor;
    var _0x119e4a = _0x17a48e.style.paddingLeft;
    var _0x26c1d5 = _0x17a48e.style.paddingRight;
    var _0x2188c5 = _0x17a48e.style.paddingTop;
    var _0x3f8058 = _0x17a48e.style.paddingBottom;
    var _0x38fd1f = _0x17a48e.style.marginLeft;
    var _0x34754a = _0x17a48e.style.marginRight;
    var _0x4b1218 = _0x17a48e.style.marginTop;
    var _0x411841 = _0x17a48e.style.marginBottom;
    var _0x3627f5 = document.body.style.margin;
    var _0x4831b2 = document.documentElement.style.overflow;
    var _0x205432 = document.body.scroll;
    var _0x43a630 = _0x17a48e.style.imageRendering;
    function _0x153a4a() {
      var _0x42164a = document.fullscreenElement || document.webkitFullscreenElement || document.msFullscreenElement;
      if (!_0x42164a) {
        document.removeEventListener("fullscreenchange", _0x153a4a);
        document.removeEventListener("webkitfullscreenchange", _0x153a4a);
        _0x3bd27c(_0x17a48e, _0x4d154a, _0x5bc2eb);
        _0x17a48e.style.width = _0x3bb2a4;
        _0x17a48e.style.height = _0x1202b7;
        _0x17a48e.style.backgroundColor = _0x4e546f;
        if (!_0xd6e0ca) {
          document.body.style.backgroundColor = "white";
        }
        document.body.style.backgroundColor = _0xd6e0ca;
        _0x17a48e.style.paddingLeft = _0x119e4a;
        _0x17a48e.style.paddingRight = _0x26c1d5;
        _0x17a48e.style.paddingTop = _0x2188c5;
        _0x17a48e.style.paddingBottom = _0x3f8058;
        _0x17a48e.style.marginLeft = _0x38fd1f;
        _0x17a48e.style.marginRight = _0x34754a;
        _0x17a48e.style.marginTop = _0x4b1218;
        _0x17a48e.style.marginBottom = _0x411841;
        document.body.style.margin = _0x3627f5;
        document.documentElement.style.overflow = _0x4831b2;
        document.body.scroll = _0x205432;
        _0x17a48e.style.imageRendering = _0x43a630;
        if (_0x17a48e.GLctxObject) {
          _0x17a48e.GLctxObject.GLctx.viewport(0, 0, _0x4d154a, _0x5bc2eb);
        }
        if (_0x3ef81e.canvasResizedCallback) {
          (function (_0x33cf4e, _0x3c3284, _0x5425cd) {
            return _0x3d67b4.apply(null, [_0x3ef81e.canvasResizedCallback, _0x33cf4e, _0x3c3284, _0x5425cd]);
          })(37, 0, _0x3ef81e.canvasResizedCallbackUserData);
        }
      }
    }
    document.addEventListener("fullscreenchange", _0x153a4a);
    document.addEventListener("webkitfullscreenchange", _0x153a4a);
    return _0x153a4a;
  }
  function _0x3d0d0a(_0x12bde8, _0xdbbb93, _0x414ea4) {
    _0x12bde8.style.paddingLeft = _0x12bde8.style.paddingRight = _0x414ea4 + "px";
    _0x12bde8.style.paddingTop = _0x12bde8.style.paddingBottom = _0xdbbb93 + "px";
  }
  function _0x309c08(_0x1c63cc) {
    if (_0x250094.indexOf(_0x1c63cc) < 0) {
      return _0x1c63cc.getBoundingClientRect();
    } else {
      return {
        left: 0,
        top: 0
      };
    }
  }
  function _0xfbc0d7(_0x31d722, _0x4cc10b) {
    var _0x26d9a5 = _0xbc26a8(_0x31d722);
    var _0x256a82 = _0x4cc10b.softFullscreen ? innerWidth : screen.width;
    var _0x2dc81d = _0x4cc10b.softFullscreen ? innerHeight : screen.height;
    var _0x1ab564 = _0x309c08(_0x31d722);
    var _0x4ee30b = _0x1ab564.width;
    var _0x22cc5f = _0x1ab564.height;
    var _0x2b5774 = _0x1715da(_0x31d722);
    var _0x376524 = _0x2b5774[0];
    var _0x1c2ba4 = _0x2b5774[1];
    if (_0x4cc10b.scaleMode == 3) {
      _0x3d0d0a(_0x31d722, (_0x2dc81d - _0x22cc5f) / 2, (_0x256a82 - _0x4ee30b) / 2);
      _0x256a82 = _0x4ee30b;
      _0x2dc81d = _0x22cc5f;
    } else if (_0x4cc10b.scaleMode == 2) {
      if (_0x256a82 * _0x1c2ba4 < _0x376524 * _0x2dc81d) {
        var _0x212729 = _0x1c2ba4 * _0x256a82 / _0x376524;
        _0x3d0d0a(_0x31d722, (_0x2dc81d - _0x212729) / 2, 0);
        _0x2dc81d = _0x212729;
      } else {
        var _0x4c5343 = _0x376524 * _0x2dc81d / _0x1c2ba4;
        _0x3d0d0a(_0x31d722, 0, (_0x256a82 - _0x4c5343) / 2);
        _0x256a82 = _0x4c5343;
      }
    }
    if (!_0x31d722.style.backgroundColor) {
      _0x31d722.style.backgroundColor = "black";
    }
    if (!document.body.style.backgroundColor) {
      document.body.style.backgroundColor = "black";
    }
    _0x31d722.style.width = _0x256a82 + "px";
    _0x31d722.style.height = _0x2dc81d + "px";
    if (_0x4cc10b.filteringMode == 1) {
      _0x31d722.style.imageRendering = "optimizeSpeed";
      _0x31d722.style.imageRendering = "-moz-crisp-edges";
      _0x31d722.style.imageRendering = "-o-crisp-edges";
      _0x31d722.style.imageRendering = "-webkit-optimize-contrast";
      _0x31d722.style.imageRendering = "optimize-contrast";
      _0x31d722.style.imageRendering = "crisp-edges";
      _0x31d722.style.imageRendering = "pixelated";
    }
    var _0x37a6ab = _0x4cc10b.canvasResolutionScaleMode == 2 ? devicePixelRatio : 1;
    if (_0x4cc10b.canvasResolutionScaleMode != 0) {
      var _0xc3f147 = _0x256a82 * _0x37a6ab | 0;
      var _0x5a2f7f = _0x2dc81d * _0x37a6ab | 0;
      _0x3bd27c(_0x31d722, _0xc3f147, _0x5a2f7f);
      if (_0x31d722.GLctxObject) {
        _0x31d722.GLctxObject.GLctx.viewport(0, 0, _0xc3f147, _0x5a2f7f);
      }
    }
    return _0x26d9a5;
  }
  function _0x3d7db6(_0x1f86bc, _0x26631c) {
    if (_0x26631c.scaleMode != 0 || _0x26631c.canvasResolutionScaleMode != 0) {
      _0xfbc0d7(_0x1f86bc, _0x26631c);
    }
    if (_0x1f86bc.requestFullscreen) {
      _0x1f86bc.requestFullscreen();
    } else if (_0x1f86bc.webkitRequestFullscreen) {
      _0x1f86bc.webkitRequestFullscreen(Element.ALLOW_KEYBOARD_INPUT);
    } else if (_0x100051.fullscreenEnabled()) {
      return -3;
    } else {
      return -1;
    }
    _0x3ef81e = _0x26631c;
    if (_0x26631c.canvasResizedCallback) {
      (function (_0x2bab77, _0x138781, _0x2ca86c) {
        return _0x3d67b4.apply(null, [_0x26631c.canvasResizedCallback, _0x2bab77, _0x138781, _0x2ca86c]);
      })(37, 0, _0x26631c.canvasResizedCallbackUserData);
    }
    return 0;
  }
  function _0x340ddf() {
    if (!_0x100051.fullscreenEnabled()) {
      return -1;
    }
    _0x100051.removeDeferredCalls(_0x3d7db6);
    var _0x26e85b = _0x250094[1];
    if (_0x26e85b.exitFullscreen) {
      if (_0x26e85b.fullscreenElement) {
        _0x26e85b.exitFullscreen();
      }
    } else if (_0x26e85b.webkitExitFullscreen) {
      if (_0x26e85b.webkitFullscreenElement) {
        _0x26e85b.webkitExitFullscreen();
      }
    } else {
      return -1;
    }
    return 0;
  }
  function _0x42f1c5(_0x5a534b) {
    if (_0x5a534b.requestPointerLock) {
      _0x5a534b.requestPointerLock();
    } else if (_0x5a534b.msRequestPointerLock) {
      _0x5a534b.msRequestPointerLock();
    } else if (document.body.requestPointerLock || document.body.msRequestPointerLock) {
      return -3;
    } else {
      return -1;
    }
    return 0;
  }
  function _0x6cf50f() {
    _0x100051.removeDeferredCalls(_0x42f1c5);
    if (document.exitPointerLock) {
      document.exitPointerLock();
    } else if (document.msExitPointerLock) {
      document.msExitPointerLock();
    } else {
      return -1;
    }
    return 0;
  }
  function _0x1e47ef(_0x101568) {
    var _0x3674b4 = document.fullscreenElement || document.mozFullScreenElement || document.webkitFullscreenElement || document.msFullscreenElement;
    var _0x16a076 = !!_0x3674b4;
    _0x58fcaf[_0x101568 >> 2] = _0x16a076;
    _0x58fcaf[_0x101568 + 4 >> 2] = _0x100051.fullscreenEnabled();
    var _0x4534c8 = _0x16a076 ? _0x3674b4 : _0x100051.previousFullscreenElement;
    var _0xbb5b69 = _0x100051.getNodeNameForTarget(_0x4534c8);
    var _0x151ee9 = _0x4534c8 && _0x4534c8.id ? _0x4534c8.id : "";
    _0x5b4754(_0xbb5b69, _0x101568 + 8, 128);
    _0x5b4754(_0x151ee9, _0x101568 + 136, 128);
    _0x58fcaf[_0x101568 + 264 >> 2] = _0x4534c8 ? _0x4534c8.clientWidth : 0;
    _0x58fcaf[_0x101568 + 268 >> 2] = _0x4534c8 ? _0x4534c8.clientHeight : 0;
    _0x58fcaf[_0x101568 + 272 >> 2] = screen.width;
    _0x58fcaf[_0x101568 + 276 >> 2] = screen.height;
    if (_0x16a076) {
      _0x100051.previousFullscreenElement = _0x3674b4;
    }
  }
  function _0xe59951(_0x580989) {
    if (!_0x100051.fullscreenEnabled()) {
      return -1;
    }
    _0x1e47ef(_0x580989);
    return 0;
  }
  function _0x4ea8f5(_0x5f4cba, _0x422417) {
    _0x2f2442[_0x5f4cba >> 3] = _0x422417.timestamp;
    for (var _0x2985b3 = 0; _0x2985b3 < _0x422417.axes.length; ++_0x2985b3) {
      _0x2f2442[_0x5f4cba + _0x2985b3 * 8 + 16 >> 3] = _0x422417.axes[_0x2985b3];
    }
    for (var _0x2985b3 = 0; _0x2985b3 < _0x422417.buttons.length; ++_0x2985b3) {
      if (typeof _0x422417.buttons[_0x2985b3] === "object") {
        _0x2f2442[_0x5f4cba + _0x2985b3 * 8 + 528 >> 3] = _0x422417.buttons[_0x2985b3].value;
      } else {
        _0x2f2442[_0x5f4cba + _0x2985b3 * 8 + 528 >> 3] = _0x422417.buttons[_0x2985b3];
      }
    }
    for (var _0x2985b3 = 0; _0x2985b3 < _0x422417.buttons.length; ++_0x2985b3) {
      if (typeof _0x422417.buttons[_0x2985b3] === "object") {
        _0x58fcaf[_0x5f4cba + _0x2985b3 * 4 + 1040 >> 2] = _0x422417.buttons[_0x2985b3].pressed;
      } else {
        _0x58fcaf[_0x5f4cba + _0x2985b3 * 4 + 1040 >> 2] = _0x422417.buttons[_0x2985b3] == 1;
      }
    }
    _0x58fcaf[_0x5f4cba + 1296 >> 2] = _0x422417.connected;
    _0x58fcaf[_0x5f4cba + 1300 >> 2] = _0x422417.index;
    _0x58fcaf[_0x5f4cba + 8 >> 2] = _0x422417.axes.length;
    _0x58fcaf[_0x5f4cba + 12 >> 2] = _0x422417.buttons.length;
    _0x5b4754(_0x422417.id, _0x5f4cba + 1304, 64);
    _0x5b4754(_0x422417.mapping, _0x5f4cba + 1368, 64);
  }
  function _0x4907e9(_0x588f37, _0xde713) {
    if (_0x588f37 < 0 || _0x588f37 >= _0x100051.lastGamepadState.length) {
      return -5;
    }
    if (!_0x100051.lastGamepadState[_0x588f37]) {
      return -7;
    }
    _0x4ea8f5(_0xde713, _0x100051.lastGamepadState[_0x588f37]);
    return 0;
  }
  function _0x23359d() {
    return 2147483648;
  }
  function _0x51aaef() {
    return _0x100051.lastGamepadState.length;
  }
  function _0x1ae44a() {
    _0x100051.removeAllEventListeners();
  }
  function _0x55702b(_0x4b0dd3) {
    return !_0x5726bd.contexts[_0x4b0dd3] || _0x5726bd.contexts[_0x4b0dd3].GLctx.isContextLost();
  }
  function _0x4fe197(_0x5191a1) {
    return _0x5191a1 < 0 || _0x5191a1 === 0 && 1 / _0x5191a1 === -Infinity;
  }
  function _0x3ae14c(_0x57c5c0, _0x356d62) {
    return (_0x57c5c0 >>> 0) + _0x356d62 * 4294967296;
  }
  function _0x1f7ce6(_0x9769db, _0x288201) {
    return (_0x9769db >>> 0) + (_0x288201 >>> 0) * 4294967296;
  }
  function _0x4b0f02(_0x497dd7, _0x3351cd) {
    if (_0x497dd7 <= 0) {
      return _0x497dd7;
    }
    var _0x670645 = _0x3351cd <= 32 ? Math.abs(1 << _0x3351cd - 1) : Math.pow(2, _0x3351cd - 1);
    if (_0x497dd7 >= _0x670645 && (_0x3351cd <= 32 || _0x497dd7 > _0x670645)) {
      _0x497dd7 = _0x670645 * -2 + _0x497dd7;
    }
    return _0x497dd7;
  }
  function _0x7d2024(_0x420a09, _0x253f19) {
    if (_0x420a09 >= 0) {
      return _0x420a09;
    }
    if (_0x253f19 <= 32) {
      return Math.abs(1 << _0x253f19 - 1) * 2 + _0x420a09;
    } else {
      return Math.pow(2, _0x253f19) + _0x420a09;
    }
  }
  function _0x2f8796(_0xea17db, _0x5824d8) {
    var _0x598061 = _0xea17db;
    var _0x2fc284 = _0x5824d8;
    function _0x241d29(_0xe3c5a6, _0x51b0af) {
      if (_0x51b0af === "double" || _0x51b0af === "i64") {
        if (_0xe3c5a6 & 7) {
          _0xe3c5a6 += 4;
        }
      } else {}
      return _0xe3c5a6;
    }
    function _0x5b9693(_0x3a3326) {
      var _0xc20f32;
      _0x2fc284 = _0x241d29(_0x2fc284, _0x3a3326);
      if (_0x3a3326 === "double") {
        _0xc20f32 = _0x2f2442[_0x2fc284 >> 3];
        _0x2fc284 += 8;
      } else if (_0x3a3326 == "i64") {
        _0xc20f32 = [_0x58fcaf[_0x2fc284 >> 2], _0x58fcaf[_0x2fc284 + 4 >> 2]];
        _0x2fc284 += 8;
      } else {
        _0x3a3326 = "i32";
        _0xc20f32 = _0x58fcaf[_0x2fc284 >> 2];
        _0x2fc284 += 4;
      }
      return _0xc20f32;
    }
    var _0x2dc234 = [];
    var _0x1e3a14;
    var _0x75292c;
    var _0x37c0d4;
    while (1) {
      var _0x20377b = _0x598061;
      _0x1e3a14 = _0x5a8ff8[_0x598061 >> 0];
      if (_0x1e3a14 === 0) {
        break;
      }
      _0x75292c = _0x5a8ff8[_0x598061 + 1 >> 0];
      if (_0x1e3a14 == 37) {
        var _0x13a597 = false;
        var _0x27bff2 = false;
        var _0x16cf08 = false;
        var _0x130fa4 = false;
        var _0x46d069 = false;
        _0x4c6d1d: while (1) {
          switch (_0x75292c) {
            case 43:
              _0x13a597 = true;
              break;
            case 45:
              _0x27bff2 = true;
              break;
            case 35:
              _0x16cf08 = true;
              break;
            case 48:
              if (_0x130fa4) {
                break _0x4c6d1d;
              } else {
                _0x130fa4 = true;
                break;
              }
            case 32:
              _0x46d069 = true;
              break;
            default:
              break _0x4c6d1d;
          }
          _0x598061++;
          _0x75292c = _0x5a8ff8[_0x598061 + 1 >> 0];
        }
        var _0x4f1aa3 = 0;
        if (_0x75292c == 42) {
          _0x4f1aa3 = _0x5b9693("i32");
          _0x598061++;
          _0x75292c = _0x5a8ff8[_0x598061 + 1 >> 0];
        } else {
          while (_0x75292c >= 48 && _0x75292c <= 57) {
            _0x4f1aa3 = _0x4f1aa3 * 10 + (_0x75292c - 48);
            _0x598061++;
            _0x75292c = _0x5a8ff8[_0x598061 + 1 >> 0];
          }
        }
        var _0x454a12 = false;
        var _0x55f30c = -1;
        if (_0x75292c == 46) {
          _0x55f30c = 0;
          _0x454a12 = true;
          _0x598061++;
          _0x75292c = _0x5a8ff8[_0x598061 + 1 >> 0];
          if (_0x75292c == 42) {
            _0x55f30c = _0x5b9693("i32");
            _0x598061++;
          } else {
            while (1) {
              var _0x5579f8 = _0x5a8ff8[_0x598061 + 1 >> 0];
              if (_0x5579f8 < 48 || _0x5579f8 > 57) {
                break;
              }
              _0x55f30c = _0x55f30c * 10 + (_0x5579f8 - 48);
              _0x598061++;
            }
          }
          _0x75292c = _0x5a8ff8[_0x598061 + 1 >> 0];
        }
        if (_0x55f30c < 0) {
          _0x55f30c = 6;
          _0x454a12 = false;
        }
        var _0x328994;
        switch (String.fromCharCode(_0x75292c)) {
          case "h":
            var _0x26c425 = _0x5a8ff8[_0x598061 + 2 >> 0];
            if (_0x26c425 == 104) {
              _0x598061++;
              _0x328994 = 1;
            } else {
              _0x328994 = 2;
            }
            break;
          case "l":
            var _0x26c425 = _0x5a8ff8[_0x598061 + 2 >> 0];
            if (_0x26c425 == 108) {
              _0x598061++;
              _0x328994 = 8;
            } else {
              _0x328994 = 4;
            }
            break;
          case "L":
          case "q":
          case "j":
            _0x328994 = 8;
            break;
          case "z":
          case "t":
          case "I":
            _0x328994 = 4;
            break;
          default:
            _0x328994 = null;
        }
        if (_0x328994) {
          _0x598061++;
        }
        _0x75292c = _0x5a8ff8[_0x598061 + 1 >> 0];
        switch (String.fromCharCode(_0x75292c)) {
          case "d":
          case "i":
          case "u":
          case "o":
          case "x":
          case "X":
          case "p":
            {
              var _0x2dfc9d = _0x75292c == 100 || _0x75292c == 105;
              _0x328994 = _0x328994 || 4;
              _0x37c0d4 = _0x5b9693("i" + _0x328994 * 8);
              var _0x166fd4;
              if (_0x328994 == 8) {
                _0x37c0d4 = _0x75292c == 117 ? _0x1f7ce6(_0x37c0d4[0], _0x37c0d4[1]) : _0x3ae14c(_0x37c0d4[0], _0x37c0d4[1]);
              }
              if (_0x328994 <= 4) {
                var _0x547d3b = Math.pow(256, _0x328994) - 1;
                _0x37c0d4 = (_0x2dfc9d ? _0x4b0f02 : _0x7d2024)(_0x37c0d4 & _0x547d3b, _0x328994 * 8);
              }
              var _0x913334 = Math.abs(_0x37c0d4);
              var _0x5ec315 = "";
              if (_0x75292c == 100 || _0x75292c == 105) {
                _0x166fd4 = _0x4b0f02(_0x37c0d4, _0x328994 * 8, 1).toString(10);
              } else if (_0x75292c == 117) {
                _0x166fd4 = _0x7d2024(_0x37c0d4, _0x328994 * 8, 1).toString(10);
                _0x37c0d4 = Math.abs(_0x37c0d4);
              } else if (_0x75292c == 111) {
                _0x166fd4 = (_0x16cf08 ? "0" : "") + _0x913334.toString(8);
              } else if (_0x75292c == 120 || _0x75292c == 88) {
                _0x5ec315 = _0x16cf08 && _0x37c0d4 != 0 ? "0x" : "";
                if (_0x37c0d4 < 0) {
                  _0x37c0d4 = -_0x37c0d4;
                  _0x166fd4 = (_0x913334 - 1).toString(16);
                  var _0xd4c54d = [];
                  for (var _0xd77c64 = 0; _0xd77c64 < _0x166fd4.length; _0xd77c64++) {
                    _0xd4c54d.push((15 - parseInt(_0x166fd4[_0xd77c64], 16)).toString(16));
                  }
                  _0x166fd4 = _0xd4c54d.join("");
                  while (_0x166fd4.length < _0x328994 * 2) {
                    _0x166fd4 = "f" + _0x166fd4;
                  }
                } else {
                  _0x166fd4 = _0x913334.toString(16);
                }
                if (_0x75292c == 88) {
                  _0x5ec315 = _0x5ec315.toUpperCase();
                  _0x166fd4 = _0x166fd4.toUpperCase();
                }
              } else if (_0x75292c == 112) {
                if (_0x913334 === 0) {
                  _0x166fd4 = "(nil)";
                } else {
                  _0x5ec315 = "0x";
                  _0x166fd4 = _0x913334.toString(16);
                }
              }
              if (_0x454a12) {
                while (_0x166fd4.length < _0x55f30c) {
                  _0x166fd4 = "0" + _0x166fd4;
                }
              }
              if (_0x37c0d4 >= 0) {
                if (_0x13a597) {
                  _0x5ec315 = "+" + _0x5ec315;
                } else if (_0x46d069) {
                  _0x5ec315 = " " + _0x5ec315;
                }
              }
              if (_0x166fd4.charAt(0) == "-") {
                _0x5ec315 = "-" + _0x5ec315;
                _0x166fd4 = _0x166fd4.substr(1);
              }
              while (_0x5ec315.length + _0x166fd4.length < _0x4f1aa3) {
                if (_0x27bff2) {
                  _0x166fd4 += " ";
                } else if (_0x130fa4) {
                  _0x166fd4 = "0" + _0x166fd4;
                } else {
                  _0x5ec315 = " " + _0x5ec315;
                }
              }
              _0x166fd4 = _0x5ec315 + _0x166fd4;
              _0x166fd4.split("").forEach(function (_0x7e4b85) {
                _0x2dc234.push(_0x7e4b85.charCodeAt(0));
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
              _0x37c0d4 = _0x5b9693("double");
              var _0x166fd4;
              if (isNaN(_0x37c0d4)) {
                _0x166fd4 = "nan";
                _0x130fa4 = false;
              } else if (!isFinite(_0x37c0d4)) {
                _0x166fd4 = (_0x37c0d4 < 0 ? "-" : "") + "inf";
                _0x130fa4 = false;
              } else {
                var _0x419bdc = false;
                var _0x202386 = Math.min(_0x55f30c, 20);
                if (_0x75292c == 103 || _0x75292c == 71) {
                  _0x419bdc = true;
                  _0x55f30c = _0x55f30c || 1;
                  var _0x45333a = parseInt(_0x37c0d4.toExponential(_0x202386).split("e")[1], 10);
                  if (_0x55f30c > _0x45333a && _0x45333a >= -4) {
                    _0x75292c = (_0x75292c == 103 ? "f" : "F").charCodeAt(0);
                    _0x55f30c -= _0x45333a + 1;
                  } else {
                    _0x75292c = (_0x75292c == 103 ? "e" : "E").charCodeAt(0);
                    _0x55f30c--;
                  }
                  _0x202386 = Math.min(_0x55f30c, 20);
                }
                if (_0x75292c == 101 || _0x75292c == 69) {
                  _0x166fd4 = _0x37c0d4.toExponential(_0x202386);
                  if (/[eE][-+]\d$/.test(_0x166fd4)) {
                    _0x166fd4 = _0x166fd4.slice(0, -1) + "0" + _0x166fd4.slice(-1);
                  }
                } else if (_0x75292c == 102 || _0x75292c == 70) {
                  _0x166fd4 = _0x37c0d4.toFixed(_0x202386);
                  if (_0x37c0d4 === 0 && _0x4fe197(_0x37c0d4)) {
                    _0x166fd4 = "-" + _0x166fd4;
                  }
                }
                var _0x3f4773 = _0x166fd4.split("e");
                if (_0x419bdc && !_0x16cf08) {
                  while (_0x3f4773[0].length > 1 && _0x3f4773[0].includes(".") && (_0x3f4773[0].slice(-1) == "0" || _0x3f4773[0].slice(-1) == ".")) {
                    _0x3f4773[0] = _0x3f4773[0].slice(0, -1);
                  }
                } else {
                  if (_0x16cf08 && _0x166fd4.indexOf(".") == -1) {
                    _0x3f4773[0] += ".";
                  }
                  while (_0x55f30c > _0x202386++) {
                    _0x3f4773[0] += "0";
                  }
                }
                _0x166fd4 = _0x3f4773[0] + (_0x3f4773.length > 1 ? "e" + _0x3f4773[1] : "");
                if (_0x75292c == 69) {
                  _0x166fd4 = _0x166fd4.toUpperCase();
                }
                if (_0x37c0d4 >= 0) {
                  if (_0x13a597) {
                    _0x166fd4 = "+" + _0x166fd4;
                  } else if (_0x46d069) {
                    _0x166fd4 = " " + _0x166fd4;
                  }
                }
              }
              while (_0x166fd4.length < _0x4f1aa3) {
                if (_0x27bff2) {
                  _0x166fd4 += " ";
                } else if (_0x130fa4 && (_0x166fd4[0] == "-" || _0x166fd4[0] == "+")) {
                  _0x166fd4 = _0x166fd4[0] + "0" + _0x166fd4.slice(1);
                } else {
                  _0x166fd4 = (_0x130fa4 ? "0" : " ") + _0x166fd4;
                }
              }
              if (_0x75292c < 97) {
                _0x166fd4 = _0x166fd4.toUpperCase();
              }
              _0x166fd4.split("").forEach(function (_0x4acd13) {
                _0x2dc234.push(_0x4acd13.charCodeAt(0));
              });
              break;
            }
          case "s":
            {
              var _0x1581a7 = _0x5b9693("i8*");
              var _0x534d73 = _0x1581a7 ? _0xe130a9(_0x1581a7) : "(null)".length;
              if (_0x454a12) {
                _0x534d73 = Math.min(_0x534d73, _0x55f30c);
              }
              if (!_0x27bff2) {
                while (_0x534d73 < _0x4f1aa3--) {
                  _0x2dc234.push(32);
                }
              }
              if (_0x1581a7) {
                for (var _0xd77c64 = 0; _0xd77c64 < _0x534d73; _0xd77c64++) {
                  _0x2dc234.push(_0x479b38[_0x1581a7++ >> 0]);
                }
              } else {
                _0x2dc234 = _0x2dc234.concat(_0x160af2("(null)".substr(0, _0x534d73), true));
              }
              if (_0x27bff2) {
                while (_0x534d73 < _0x4f1aa3--) {
                  _0x2dc234.push(32);
                }
              }
              break;
            }
          case "c":
            {
              if (_0x27bff2) {
                _0x2dc234.push(_0x5b9693("i8"));
              }
              while (--_0x4f1aa3 > 0) {
                _0x2dc234.push(32);
              }
              if (!_0x27bff2) {
                _0x2dc234.push(_0x5b9693("i8"));
              }
              break;
            }
          case "n":
            {
              var _0xbcb24d = _0x5b9693("i32*");
              _0x58fcaf[_0xbcb24d >> 2] = _0x2dc234.length;
              break;
            }
          case "%":
            {
              _0x2dc234.push(_0x1e3a14);
              break;
            }
          default:
            {
              for (var _0xd77c64 = _0x20377b; _0xd77c64 < _0x598061 + 2; _0xd77c64++) {
                _0x2dc234.push(_0x5a8ff8[_0xd77c64 >> 0]);
              }
            }
        }
        _0x598061 += 2;
      } else {
        _0x2dc234.push(_0x1e3a14);
        _0x598061 += 1;
      }
    }
    return _0x2dc234;
  }
  function _0x312ef6(_0x34e19f) {
    if (!_0x34e19f || !_0x34e19f.callee || !_0x34e19f.callee.name) {
      return [null, "", ""];
    }
    var _0x4bf022 = _0x34e19f.callee.toString();
    var _0x58efcd = _0x34e19f.callee.name;
    var _0x221e71 = "(";
    var _0x3d291d = true;
    for (var _0x5b62fe in _0x34e19f) {
      var _0x1803e9 = _0x34e19f[_0x5b62fe];
      if (!_0x3d291d) {
        _0x221e71 += ", ";
      }
      _0x3d291d = false;
      if (typeof _0x1803e9 === "number" || typeof _0x1803e9 === "string") {
        _0x221e71 += _0x1803e9;
      } else {
        _0x221e71 += "(" + typeof _0x1803e9 + ")";
      }
    }
    _0x221e71 += ")";
    var _0x480340 = _0x34e19f.callee.caller;
    _0x34e19f = _0x480340 ? _0x480340.arguments : [];
    if (_0x3d291d) {
      _0x221e71 = "";
    }
    return [_0x34e19f, _0x58efcd, _0x221e71];
  }
  function _0x4da5fc(_0x5546cb) {
    var _0x1ff959 = _0x7b7fc7();
    var _0x3de5e2 = _0x1ff959.lastIndexOf("_emscripten_log");
    var _0x37dc6f = _0x1ff959.lastIndexOf("_emscripten_get_callstack");
    var _0x5b7537 = _0x1ff959.indexOf("\n", Math.max(_0x3de5e2, _0x37dc6f)) + 1;
    _0x1ff959 = _0x1ff959.slice(_0x5b7537);
    if (_0x5546cb & 32) {
      _0x5ab828("EM_LOG_DEMANGLE is deprecated; ignoring");
    }
    if (_0x5546cb & 8 && typeof emscripten_source_map === "undefined") {
      _0x5ab828("Source map information is not available, emscripten_log with EM_LOG_C_STACK will be ignored. Build with \"--pre-js $EMSCRIPTEN/src/emscripten-source-map.min.js\" linker flag to add source map loading to code.");
      _0x5546cb ^= 8;
      _0x5546cb |= 16;
    }
    var _0x4974e8 = null;
    if (_0x5546cb & 128) {
      _0x4974e8 = _0x312ef6(arguments);
      while (_0x4974e8[1].includes("_emscripten_")) {
        _0x4974e8 = _0x312ef6(_0x4974e8[0]);
      }
    }
    var _0x152d1d = _0x1ff959.split("\n");
    _0x1ff959 = "";
    var _0x5bb07e = new RegExp("\\s*(.*?)@(.*?):([0-9]+):([0-9]+)");
    var _0x229fe0 = new RegExp("\\s*(.*?)@(.*):(.*)(:(.*))?");
    var _0x3d5789 = new RegExp("\\s*at (.*?) \\((.*):(.*):(.*)\\)");
    for (var _0x28a42b in _0x152d1d) {
      var _0x3fd47b = _0x152d1d[_0x28a42b];
      var _0x51e158 = "";
      var _0x3f42c8 = "";
      var _0x3af46b = 0;
      var _0x1224ef = 0;
      var _0x203c1f = _0x3d5789.exec(_0x3fd47b);
      if (_0x203c1f && _0x203c1f.length == 5) {
        _0x51e158 = _0x203c1f[1];
        _0x3f42c8 = _0x203c1f[2];
        _0x3af46b = _0x203c1f[3];
        _0x1224ef = _0x203c1f[4];
      } else {
        _0x203c1f = _0x5bb07e.exec(_0x3fd47b);
        if (!_0x203c1f) {
          _0x203c1f = _0x229fe0.exec(_0x3fd47b);
        }
        if (_0x203c1f && _0x203c1f.length >= 4) {
          _0x51e158 = _0x203c1f[1];
          _0x3f42c8 = _0x203c1f[2];
          _0x3af46b = _0x203c1f[3];
          _0x1224ef = _0x203c1f[4] | 0;
        } else {
          _0x1ff959 += _0x3fd47b + "\n";
          continue;
        }
      }
      var _0xba1faf = false;
      if (_0x5546cb & 8) {
        var _0x4824a7 = emscripten_source_map.originalPositionFor({
          line: _0x3af46b,
          column: _0x1224ef
        });
        _0xba1faf = _0x4824a7 && _0x4824a7.source;
        if (_0xba1faf) {
          if (_0x5546cb & 64) {
            _0x4824a7.source = _0x4824a7.source.substring(_0x4824a7.source.replace(/\\/g, "/").lastIndexOf("/") + 1);
          }
          _0x1ff959 += "    at " + _0x51e158 + " (" + _0x4824a7.source + ":" + _0x4824a7.line + ":" + _0x4824a7.column + ")\n";
        }
      }
      if (_0x5546cb & 16 || !_0xba1faf) {
        if (_0x5546cb & 64) {
          _0x3f42c8 = _0x3f42c8.substring(_0x3f42c8.replace(/\\/g, "/").lastIndexOf("/") + 1);
        }
        _0x1ff959 += (_0xba1faf ? "     = " + _0x51e158 : "    at " + _0x51e158) + " (" + _0x3f42c8 + ":" + _0x3af46b + ":" + _0x1224ef + ")\n";
      }
      if (_0x5546cb & 128 && _0x4974e8[0]) {
        if (_0x4974e8[1] == _0x51e158 && _0x4974e8[2].length > 0) {
          _0x1ff959 = _0x1ff959.replace(/\s+$/, "");
          _0x1ff959 += " with values: " + _0x4974e8[1] + _0x4974e8[2] + "\n";
        }
        _0x4974e8 = _0x312ef6(_0x4974e8[0]);
      }
    }
    _0x1ff959 = _0x1ff959.replace(/\s+$/, "");
    return _0x1ff959;
  }
  function _0x460b4f(_0x481c3d, _0x13c203) {
    if (_0x481c3d & 24) {
      _0x13c203 = _0x13c203.replace(/\s+$/, "");
      _0x13c203 += (_0x13c203.length > 0 ? "\n" : "") + _0x4da5fc(_0x481c3d);
    }
    if (_0x481c3d & 1) {
      if (_0x481c3d & 4) {
        console.error(_0x13c203);
      } else if (_0x481c3d & 2) {
        console.warn(_0x13c203);
      } else if (_0x481c3d & 512) {
        console.info(_0x13c203);
      } else if (_0x481c3d & 256) {
        console.debug(_0x13c203);
      } else {
        console.log(_0x13c203);
      }
    } else if (_0x481c3d & 6) {
      _0x1717db(_0x13c203);
    } else {
      _0x424bf2(_0x13c203);
    }
  }
  function _0x40abea(_0x1b7c57, _0x2b29bd, _0x14c9af) {
    var _0xeab9ed = _0x2f8796(_0x2b29bd, _0x14c9af);
    var _0x52534b = _0x339ec6(_0xeab9ed, 0);
    _0x460b4f(_0x1b7c57, _0x52534b);
  }
  function _0x505ac8(_0x4b5af, _0x5086d0) {
    _0x47d732(_0x4b5af, _0x5086d0 || 1);
    throw "longjmp";
  }
  function _0x58051c(_0x553c5f, _0x17abb6) {
    return _0x505ac8(_0x553c5f, _0x17abb6);
  }
  function _0x1323af(_0x26d63d, _0xb1f19b, _0x127a86) {
    _0x479b38.copyWithin(_0x26d63d, _0xb1f19b, _0xb1f19b + _0x127a86);
  }
  function _0x4c1bbc(_0x35ef85, _0x29676d) {
    if (!_0x100051.fullscreenEnabled()) {
      return -1;
    }
    _0x35ef85 = _0x423aa9(_0x35ef85);
    if (!_0x35ef85) {
      return -4;
    }
    if (!_0x35ef85.requestFullscreen && !_0x35ef85.webkitRequestFullscreen) {
      return -3;
    }
    var _0xadee9f = _0x100051.canPerformEventHandlerRequests();
    if (!_0xadee9f) {
      if (_0x29676d.deferUntilInEventHandler) {
        _0x100051.deferCall(_0x3d7db6, 1, [_0x35ef85, _0x29676d]);
        return 1;
      } else {
        return -2;
      }
    }
    return _0x3d7db6(_0x35ef85, _0x29676d);
  }
  function _0xaf4f51(_0x574f87, _0x340d39) {
    var _0x1fa913 = {
      scaleMode: 0,
      canvasResolutionScaleMode: 0,
      filteringMode: 0,
      deferUntilInEventHandler: _0x340d39,
      canvasResizedCallbackTargetThread: 2
    };
    return _0x4c1bbc(_0x574f87, _0x1fa913);
  }
  function _0xf94372(_0x2855d4, _0xe3980) {
    _0x2855d4 = _0x423aa9(_0x2855d4);
    if (!_0x2855d4) {
      return -4;
    }
    if (!_0x2855d4.requestPointerLock && !_0x2855d4.msRequestPointerLock) {
      return -1;
    }
    var _0x11b53a = _0x100051.canPerformEventHandlerRequests();
    if (!_0x11b53a) {
      if (_0xe3980) {
        _0x100051.deferCall(_0x42f1c5, 2, [_0x2855d4]);
        return 1;
      } else {
        return -2;
      }
    }
    return _0x42f1c5(_0x2855d4);
  }
  function _0x16b25d(_0x2db528) {
    try {
      _0x2af55f.grow(_0x2db528 - _0x49ed52.byteLength + 65535 >>> 16);
      _0x395e90(_0x2af55f.buffer);
      return 1;
    } catch (_0x1b9924) {}
  }
  function _0x15ce82(_0x32df4) {
    var _0x1dca31 = _0x479b38.length;
    _0x32df4 = _0x32df4 >>> 0;
    var _0x3d87fd = 2147483648;
    if (_0x32df4 > _0x3d87fd) {
      return false;
    }
    for (var _0x766e1e = 1; _0x766e1e <= 4; _0x766e1e *= 2) {
      var _0x26952c = _0x1dca31 * (1 + 0.2 / _0x766e1e);
      _0x26952c = Math.min(_0x26952c, _0x32df4 + 100663296);
      var _0x3f6f71 = Math.min(_0x3d87fd, _0x5172dc(Math.max(_0x32df4, _0x26952c), 65536));
      var _0x2f404a = _0x16b25d(_0x3f6f71);
      if (_0x2f404a) {
        return true;
      }
    }
    return false;
  }
  function _0x29af38() {
    try {
      if (navigator.getGamepads) {
        if (_0x100051.lastGamepadState = navigator.getGamepads()) {
          return 0;
        } else {
          return -1;
        }
      }
    } catch (_0x1685de) {
      navigator.getGamepads = null;
    }
    return -1;
  }
  function _0xa62437(_0x3a9ebd, _0x54fda7, _0x82d66, _0x11aadf, _0x2a2204, _0x30a629, _0x288632) {
    if (!_0x100051.focusEvent) {
      _0x100051.focusEvent = _0x58620b(256);
    }
    var _0x5e4f29 = function (_0x58a7d5) {
      var _0x1b579e = _0x58a7d5 || event;
      var _0x1b4595 = _0x100051.getNodeNameForTarget(_0x1b579e.target);
      var _0x6fdbe = _0x1b579e.target.id ? _0x1b579e.target.id : "";
      var _0x32685f = _0x100051.focusEvent;
      _0x5b4754(_0x1b4595, _0x32685f + 0, 128);
      _0x5b4754(_0x6fdbe, _0x32685f + 128, 128);
      if (function (_0x48862b, _0x18be38, _0x28d7a7) {
        return _0x3d67b4.apply(null, [_0x11aadf, _0x48862b, _0x18be38, _0x28d7a7]);
      }(_0x2a2204, _0x32685f, _0x54fda7)) {
        _0x1b579e.preventDefault();
      }
    };
    var _0x1a464f = {
      target: _0x423aa9(_0x3a9ebd),
      eventTypeString: _0x30a629,
      callbackfunc: _0x11aadf,
      handlerFunc: _0x5e4f29,
      useCapture: _0x82d66
    };
    _0x100051.registerOrRemoveHandler(_0x1a464f);
  }
  function _0xf50f87(_0xe70d74, _0x3a01ef, _0x4d47d0, _0x566103, _0x3b1265) {
    _0xa62437(_0xe70d74, _0x3a01ef, _0x4d47d0, _0x566103, 12, "blur", _0x3b1265);
    return 0;
  }
  function _0x469cd3(_0x2bf30a, _0x232560, _0x45f2ab, _0x103274, _0xdcb539) {
    _0xa62437(_0x2bf30a, _0x232560, _0x45f2ab, _0x103274, 13, "focus", _0xdcb539);
    return 0;
  }
  function _0x5eb9aa(_0x1f4838, _0x162fdb, _0xba835b, _0x19130b, _0x38211b, _0x4f2f86, _0x19a563) {
    if (!_0x100051.fullscreenChangeEvent) {
      _0x100051.fullscreenChangeEvent = _0x58620b(280);
    }
    var _0x3c3e88 = function (_0x2f5052) {
      var _0x376791 = _0x2f5052 || event;
      var _0xa7f2d = _0x100051.fullscreenChangeEvent;
      _0x1e47ef(_0xa7f2d);
      if (function (_0x3a5110, _0x37a4cb, _0x201c8a) {
        return _0x3d67b4.apply(null, [_0x19130b, _0x3a5110, _0x37a4cb, _0x201c8a]);
      }(_0x38211b, _0xa7f2d, _0x162fdb)) {
        _0x376791.preventDefault();
      }
    };
    var _0xe40e77 = {
      target: _0x1f4838,
      eventTypeString: _0x4f2f86,
      callbackfunc: _0x19130b,
      handlerFunc: _0x3c3e88,
      useCapture: _0xba835b
    };
    _0x100051.registerOrRemoveHandler(_0xe40e77);
  }
  function _0x49c697(_0x213836, _0x5e7a7e, _0x5e855f, _0x2d9266, _0x50a562) {
    if (!_0x100051.fullscreenEnabled()) {
      return -1;
    }
    _0x213836 = _0x423aa9(_0x213836);
    if (!_0x213836) {
      return -4;
    }
    _0x5eb9aa(_0x213836, _0x5e7a7e, _0x5e855f, _0x2d9266, 19, "fullscreenchange", _0x50a562);
    _0x5eb9aa(_0x213836, _0x5e7a7e, _0x5e855f, _0x2d9266, 19, "webkitfullscreenchange", _0x50a562);
    return 0;
  }
  function _0x1f95fe(_0x37b365, _0x1bec20, _0x3d6220, _0x5699ac, _0x4fbad5, _0x4684e8, _0x4f3cf9) {
    if (!_0x100051.gamepadEvent) {
      _0x100051.gamepadEvent = _0x58620b(1432);
    }
    var _0x1298c7 = function (_0x3ab029) {
      var _0x2030f0 = _0x3ab029 || event;
      var _0x26ead2 = _0x100051.gamepadEvent;
      _0x4ea8f5(_0x26ead2, _0x2030f0.gamepad);
      if (function (_0x10dd5f, _0x5b7ad6, _0x263aea) {
        return _0x3d67b4.apply(null, [_0x5699ac, _0x10dd5f, _0x5b7ad6, _0x263aea]);
      }(_0x4fbad5, _0x26ead2, _0x1bec20)) {
        _0x2030f0.preventDefault();
      }
    };
    var _0x5dde64 = {
      target: _0x423aa9(_0x37b365),
      allowsDeferredCalls: true,
      eventTypeString: _0x4684e8,
      callbackfunc: _0x5699ac,
      handlerFunc: _0x1298c7,
      useCapture: _0x3d6220
    };
    _0x100051.registerOrRemoveHandler(_0x5dde64);
  }
  function _0x2c8d18(_0xb3e2c7, _0x3580b8, _0x3c6960, _0x14608b) {
    if (_0x29af38()) {
      return -1;
    }
    return _0x1f95fe(2, _0xb3e2c7, _0x3580b8, _0x3c6960, 26, "gamepadconnected", _0x14608b);
  }
  function _0x11b0ae(_0x1cf6e9, _0x26b4b2, _0xaa35, _0x3196cc) {
    if (_0x29af38()) {
      return -1;
    }
    return _0x1f95fe(2, _0x1cf6e9, _0x26b4b2, _0xaa35, 27, "gamepaddisconnected", _0x3196cc);
  }
  function _0x2d1c01(_0x6a9a00, _0x2f47f5, _0x215606) {
    return setInterval(function () {
      (function (_0x336b92) {
        _0x1ba1b5.apply(null, [_0x6a9a00, _0x336b92]);
      })(_0x215606);
    }, _0x2f47f5);
  }
  function _0x1ee636(_0x2ca9e4, _0x2ebc81, _0x465751, _0x168c1d, _0x3f8f57, _0x1cbcee, _0x524aa5) {
    if (!_0x100051.keyEvent) {
      _0x100051.keyEvent = _0x58620b(164);
    }
    var _0x1af556 = function (_0x49a480) {
      var _0x50c95d = _0x100051.keyEvent;
      var _0xb2be84 = _0x50c95d >> 2;
      _0x58fcaf[_0xb2be84 + 0] = _0x49a480.location;
      _0x58fcaf[_0xb2be84 + 1] = _0x49a480.ctrlKey;
      _0x58fcaf[_0xb2be84 + 2] = _0x49a480.shiftKey;
      _0x58fcaf[_0xb2be84 + 3] = _0x49a480.altKey;
      _0x58fcaf[_0xb2be84 + 4] = _0x49a480.metaKey;
      _0x58fcaf[_0xb2be84 + 5] = _0x49a480.repeat;
      _0x58fcaf[_0xb2be84 + 6] = _0x49a480.charCode;
      _0x58fcaf[_0xb2be84 + 7] = _0x49a480.keyCode;
      _0x58fcaf[_0xb2be84 + 8] = _0x49a480.which;
      _0x5b4754(_0x49a480.key || "", _0x50c95d + 36, 32);
      _0x5b4754(_0x49a480.code || "", _0x50c95d + 68, 32);
      _0x5b4754(_0x49a480.char || "", _0x50c95d + 100, 32);
      _0x5b4754(_0x49a480.locale || "", _0x50c95d + 132, 32);
      if (function (_0x1c32c2, _0x5a87d1, _0x130082) {
        return _0x3d67b4.apply(null, [_0x168c1d, _0x1c32c2, _0x5a87d1, _0x130082]);
      }(_0x3f8f57, _0x50c95d, _0x2ebc81)) {
        _0x49a480.preventDefault();
      }
    };
    var _0x485b61 = {
      target: _0x423aa9(_0x2ca9e4),
      allowsDeferredCalls: true,
      eventTypeString: _0x1cbcee,
      callbackfunc: _0x168c1d,
      handlerFunc: _0x1af556,
      useCapture: _0x465751
    };
    _0x100051.registerOrRemoveHandler(_0x485b61);
  }
  function _0x2e6e51(_0x21d81f, _0x571da3, _0x23d86e, _0x3289c9, _0x17b0a3) {
    _0x1ee636(_0x21d81f, _0x571da3, _0x23d86e, _0x3289c9, 2, "keydown", _0x17b0a3);
    return 0;
  }
  function _0x211257(_0xa30ede, _0x28eb8f, _0x268bf1, _0x1d15c7, _0x5c55f5) {
    _0x1ee636(_0xa30ede, _0x28eb8f, _0x268bf1, _0x1d15c7, 1, "keypress", _0x5c55f5);
    return 0;
  }
  function _0x5a2912(_0xe6c623, _0x4dccd5, _0x860ad9, _0x57973a, _0x3f3ae3) {
    _0x1ee636(_0xe6c623, _0x4dccd5, _0x860ad9, _0x57973a, 3, "keyup", _0x3f3ae3);
    return 0;
  }
  function _0x424877(_0x5e1b90, _0x4245c5, _0x151587) {
    var _0x1530c9 = function () {
      _0x3c8e57.call(null, _0x5e1b90);
    };
    _0x8ebe27(_0x1530c9, _0x4245c5, _0x151587);
  }
  function _0x4f626e(_0x13b345, _0x27ecd6, _0x3d7e70) {
    var _0x318b71 = _0x13b345 >> 2;
    _0x58fcaf[_0x318b71 + 0] = _0x27ecd6.screenX;
    _0x58fcaf[_0x318b71 + 1] = _0x27ecd6.screenY;
    _0x58fcaf[_0x318b71 + 2] = _0x27ecd6.clientX;
    _0x58fcaf[_0x318b71 + 3] = _0x27ecd6.clientY;
    _0x58fcaf[_0x318b71 + 4] = _0x27ecd6.ctrlKey;
    _0x58fcaf[_0x318b71 + 5] = _0x27ecd6.shiftKey;
    _0x58fcaf[_0x318b71 + 6] = _0x27ecd6.altKey;
    _0x58fcaf[_0x318b71 + 7] = _0x27ecd6.metaKey;
    _0x121e6d[_0x318b71 * 2 + 16] = _0x27ecd6.button;
    _0x121e6d[_0x318b71 * 2 + 17] = _0x27ecd6.buttons;
    _0x58fcaf[_0x318b71 + 9] = _0x27ecd6.movementX;
    _0x58fcaf[_0x318b71 + 10] = _0x27ecd6.movementY;
    var _0x5533bb = _0x309c08(_0x3d7e70);
    _0x58fcaf[_0x318b71 + 11] = _0x27ecd6.clientX - _0x5533bb.left;
    _0x58fcaf[_0x318b71 + 12] = _0x27ecd6.clientY - _0x5533bb.top;
  }
  function _0x515d96(_0x53ec05, _0x130031, _0x2e925b, _0x745e5, _0x19125b, _0x256dc2, _0x3b0599) {
    if (!_0x100051.mouseEvent) {
      _0x100051.mouseEvent = _0x58620b(64);
    }
    _0x53ec05 = _0x423aa9(_0x53ec05);
    var _0x57a7ce = function (_0x159472) {
      var _0x213224 = _0x159472 || event;
      _0x4f626e(_0x100051.mouseEvent, _0x213224, _0x53ec05);
      if (function (_0x54e0bc, _0x2e36b3, _0x242334) {
        return _0x3d67b4.apply(null, [_0x745e5, _0x54e0bc, _0x2e36b3, _0x242334]);
      }(_0x19125b, _0x100051.mouseEvent, _0x130031)) {
        _0x213224.preventDefault();
      }
    };
    var _0x1fc932 = {
      target: _0x53ec05,
      allowsDeferredCalls: _0x256dc2 != "mousemove" && _0x256dc2 != "mouseenter" && _0x256dc2 != "mouseleave",
      eventTypeString: _0x256dc2,
      callbackfunc: _0x745e5,
      handlerFunc: _0x57a7ce,
      useCapture: _0x2e925b
    };
    _0x100051.registerOrRemoveHandler(_0x1fc932);
  }
  function _0x5ebfaf(_0x27e944, _0x12e92e, _0x465df3, _0x25aa21, _0x3bd8c8) {
    _0x515d96(_0x27e944, _0x12e92e, _0x465df3, _0x25aa21, 5, "mousedown", _0x3bd8c8);
    return 0;
  }
  function _0x949f2d(_0x30dfce, _0x34ef4a, _0x5333cd, _0x21c424, _0x144c79) {
    _0x515d96(_0x30dfce, _0x34ef4a, _0x5333cd, _0x21c424, 8, "mousemove", _0x144c79);
    return 0;
  }
  function _0x587832(_0x23982b, _0x141aca, _0x1a7256, _0x6e3188, _0x50f6c3) {
    _0x515d96(_0x23982b, _0x141aca, _0x1a7256, _0x6e3188, 6, "mouseup", _0x50f6c3);
    return 0;
  }
  function _0x321e2c(_0x23b426) {
    var _0x321afb = document.pointerLockElement || document.mozPointerLockElement || document.webkitPointerLockElement || document.msPointerLockElement;
    var _0x36c9c3 = !!_0x321afb;
    _0x58fcaf[_0x23b426 >> 2] = _0x36c9c3;
    var _0x40d6de = _0x100051.getNodeNameForTarget(_0x321afb);
    var _0x450643 = _0x321afb && _0x321afb.id ? _0x321afb.id : "";
    _0x5b4754(_0x40d6de, _0x23b426 + 4, 128);
    _0x5b4754(_0x450643, _0x23b426 + 132, 128);
  }
  function _0x485194(_0x327123, _0x417175, _0x5717ea, _0x3b563a, _0x58f56d, _0x1bd379, _0x4a7669) {
    if (!_0x100051.pointerlockChangeEvent) {
      _0x100051.pointerlockChangeEvent = _0x58620b(260);
    }
    var _0x45f4cc = function (_0x5c3f34) {
      var _0x585a85 = _0x5c3f34 || event;
      var _0x241daf = _0x100051.pointerlockChangeEvent;
      _0x321e2c(_0x241daf);
      if (function (_0xc6702d, _0x30e7e6, _0x3e50cc) {
        return _0x3d67b4.apply(null, [_0x3b563a, _0xc6702d, _0x30e7e6, _0x3e50cc]);
      }(_0x58f56d, _0x241daf, _0x417175)) {
        _0x585a85.preventDefault();
      }
    };
    var _0x4d13bc = {
      target: _0x327123,
      eventTypeString: _0x1bd379,
      callbackfunc: _0x3b563a,
      handlerFunc: _0x45f4cc,
      useCapture: _0x5717ea
    };
    _0x100051.registerOrRemoveHandler(_0x4d13bc);
  }
  function _0x37d534(_0x5965e5, _0x17b4a1, _0x28809a, _0x46089d, _0x3208f8) {
    if (!document || !document.body || !document.body.requestPointerLock && !document.body.mozRequestPointerLock && !document.body.webkitRequestPointerLock && !document.body.msRequestPointerLock) {
      return -1;
    }
    _0x5965e5 = _0x423aa9(_0x5965e5);
    if (!_0x5965e5) {
      return -4;
    }
    _0x485194(_0x5965e5, _0x17b4a1, _0x28809a, _0x46089d, 20, "pointerlockchange", _0x3208f8);
    _0x485194(_0x5965e5, _0x17b4a1, _0x28809a, _0x46089d, 20, "mozpointerlockchange", _0x3208f8);
    _0x485194(_0x5965e5, _0x17b4a1, _0x28809a, _0x46089d, 20, "webkitpointerlockchange", _0x3208f8);
    _0x485194(_0x5965e5, _0x17b4a1, _0x28809a, _0x46089d, 20, "mspointerlockchange", _0x3208f8);
    return 0;
  }
  function _0x5db128(_0x31fbfa, _0x178198, _0x30164c, _0x543837, _0x59819b, _0x3ad237, _0x28753f) {
    if (!_0x100051.touchEvent) {
      _0x100051.touchEvent = _0x58620b(1684);
    }
    _0x31fbfa = _0x423aa9(_0x31fbfa);
    var _0x27621c = function (_0x18be36) {
      var _0x2c33bb;
      var _0x958aec = {};
      var _0x567486 = _0x18be36.touches;
      for (var _0x4072ba = 0; _0x4072ba < _0x567486.length; ++_0x4072ba) {
        _0x2c33bb = _0x567486[_0x4072ba];
        _0x2c33bb.isChanged = _0x2c33bb.onTarget = 0;
        _0x958aec[_0x2c33bb.identifier] = _0x2c33bb;
      }
      for (var _0x4072ba = 0; _0x4072ba < _0x18be36.changedTouches.length; ++_0x4072ba) {
        _0x2c33bb = _0x18be36.changedTouches[_0x4072ba];
        _0x2c33bb.isChanged = 1;
        _0x958aec[_0x2c33bb.identifier] = _0x2c33bb;
      }
      for (var _0x4072ba = 0; _0x4072ba < _0x18be36.targetTouches.length; ++_0x4072ba) {
        _0x958aec[_0x18be36.targetTouches[_0x4072ba].identifier].onTarget = 1;
      }
      var _0x4f06fc = _0x100051.touchEvent;
      var _0x1df84d = _0x4f06fc >> 2;
      _0x58fcaf[_0x1df84d + 1] = _0x18be36.ctrlKey;
      _0x58fcaf[_0x1df84d + 2] = _0x18be36.shiftKey;
      _0x58fcaf[_0x1df84d + 3] = _0x18be36.altKey;
      _0x58fcaf[_0x1df84d + 4] = _0x18be36.metaKey;
      _0x1df84d += 5;
      var _0x55d8b3 = _0x309c08(_0x31fbfa);
      var _0x3640db = 0;
      for (var _0x4072ba in _0x958aec) {
        var _0x2c33bb = _0x958aec[_0x4072ba];
        _0x58fcaf[_0x1df84d + 0] = _0x2c33bb.identifier;
        _0x58fcaf[_0x1df84d + 1] = _0x2c33bb.screenX;
        _0x58fcaf[_0x1df84d + 2] = _0x2c33bb.screenY;
        _0x58fcaf[_0x1df84d + 3] = _0x2c33bb.clientX;
        _0x58fcaf[_0x1df84d + 4] = _0x2c33bb.clientY;
        _0x58fcaf[_0x1df84d + 5] = _0x2c33bb.pageX;
        _0x58fcaf[_0x1df84d + 6] = _0x2c33bb.pageY;
        _0x58fcaf[_0x1df84d + 7] = _0x2c33bb.isChanged;
        _0x58fcaf[_0x1df84d + 8] = _0x2c33bb.onTarget;
        _0x58fcaf[_0x1df84d + 9] = _0x2c33bb.clientX - _0x55d8b3.left;
        _0x58fcaf[_0x1df84d + 10] = _0x2c33bb.clientY - _0x55d8b3.top;
        _0x1df84d += 13;
        if (++_0x3640db > 31) {
          break;
        }
      }
      _0x58fcaf[_0x4f06fc >> 2] = _0x3640db;
      if (function (_0x3aeaca, _0x39c232, _0x306b83) {
        return _0x3d67b4.apply(null, [_0x543837, _0x3aeaca, _0x39c232, _0x306b83]);
      }(_0x59819b, _0x4f06fc, _0x178198)) {
        _0x18be36.preventDefault();
      }
    };
    var _0x41189f = {
      target: _0x31fbfa,
      allowsDeferredCalls: _0x3ad237 == "touchstart" || _0x3ad237 == "touchend",
      eventTypeString: _0x3ad237,
      callbackfunc: _0x543837,
      handlerFunc: _0x27621c,
      useCapture: _0x30164c
    };
    _0x100051.registerOrRemoveHandler(_0x41189f);
  }
  function _0x92574a(_0x51afde, _0x3a622f, _0x3874ad, _0x869f2e, _0x4a7d14) {
    _0x5db128(_0x51afde, _0x3a622f, _0x3874ad, _0x869f2e, 25, "touchcancel", _0x4a7d14);
    return 0;
  }
  function _0x407c24(_0x1f8d72, _0x3c6ed5, _0x335558, _0x4d3c51, _0x4c1e70) {
    _0x5db128(_0x1f8d72, _0x3c6ed5, _0x335558, _0x4d3c51, 23, "touchend", _0x4c1e70);
    return 0;
  }
  function _0x5c9405(_0x51a0e7, _0x2ac972, _0x5449b9, _0x3209c0, _0xb41924) {
    _0x5db128(_0x51a0e7, _0x2ac972, _0x5449b9, _0x3209c0, 24, "touchmove", _0xb41924);
    return 0;
  }
  function _0x51f8a2(_0x518f8e, _0x3205b8, _0x39bd01, _0x437da4, _0x1b3313) {
    _0x5db128(_0x518f8e, _0x3205b8, _0x39bd01, _0x437da4, 22, "touchstart", _0x1b3313);
    return 0;
  }
  function _0x1f1354(_0x17a5a9, _0xeec79d, _0x583677, _0x6d5996, _0x6aad52, _0x3f3995, _0x3659a8) {
    if (!_0x100051.wheelEvent) {
      _0x100051.wheelEvent = _0x58620b(96);
    }
    var _0x2d9c33 = function (_0x26ac21) {
      var _0x41234d = _0x26ac21 || event;
      var _0x53d92e = _0x100051.wheelEvent;
      _0x4f626e(_0x53d92e, _0x41234d, _0x17a5a9);
      _0x2f2442[_0x53d92e + 64 >> 3] = _0x41234d.deltaX;
      _0x2f2442[_0x53d92e + 72 >> 3] = _0x41234d.deltaY;
      _0x2f2442[_0x53d92e + 80 >> 3] = _0x41234d.deltaZ;
      _0x58fcaf[_0x53d92e + 88 >> 2] = _0x41234d.deltaMode;
      if (function (_0xd9b87b, _0x33cb48, _0x42ba4e) {
        return _0x3d67b4.apply(null, [_0x6d5996, _0xd9b87b, _0x33cb48, _0x42ba4e]);
      }(_0x6aad52, _0x53d92e, _0xeec79d)) {
        _0x41234d.preventDefault();
      }
    };
    var _0x527340 = {
      target: _0x17a5a9,
      allowsDeferredCalls: true,
      eventTypeString: _0x3f3995,
      callbackfunc: _0x6d5996,
      handlerFunc: _0x2d9c33,
      useCapture: _0x583677
    };
    _0x100051.registerOrRemoveHandler(_0x527340);
  }
  function _0x1c1035(_0x13ad13, _0x233ff5, _0xa98336, _0x322fc7, _0x3bf6d6) {
    _0x13ad13 = _0x423aa9(_0x13ad13);
    if (typeof _0x13ad13.onwheel !== "undefined") {
      _0x1f1354(_0x13ad13, _0x233ff5, _0xa98336, _0x322fc7, 9, "wheel", _0x3bf6d6);
      return 0;
    } else {
      return -1;
    }
  }
  function _0x27ffc4(_0x33820d) {
    var _0x3a664a = _0x1bbf2d();
    while (_0x1bbf2d() - _0x3a664a < _0x33820d) {}
  }
  function _0x3ddab4(_0x224a41) {
    var _0x39c87f = _0x224a41.getExtension("ANGLE_instanced_arrays");
    if (_0x39c87f) {
      _0x224a41.vertexAttribDivisor = function (_0x356e8a, _0x430d84) {
        _0x39c87f.vertexAttribDivisorANGLE(_0x356e8a, _0x430d84);
      };
      _0x224a41.drawArraysInstanced = function (_0xd58fa5, _0x573af3, _0x444c81, _0x52b964) {
        _0x39c87f.drawArraysInstancedANGLE(_0xd58fa5, _0x573af3, _0x444c81, _0x52b964);
      };
      _0x224a41.drawElementsInstanced = function (_0x7d5ea1, _0x46b146, _0x5e0107, _0x58ac42, _0x502493) {
        _0x39c87f.drawElementsInstancedANGLE(_0x7d5ea1, _0x46b146, _0x5e0107, _0x58ac42, _0x502493);
      };
      return 1;
    }
  }
  function _0x34157a(_0x45fcd4) {
    var _0x5a7f90 = _0x45fcd4.getExtension("OES_vertex_array_object");
    if (_0x5a7f90) {
      _0x45fcd4.createVertexArray = function () {
        return _0x5a7f90.createVertexArrayOES();
      };
      _0x45fcd4.deleteVertexArray = function (_0x2332f1) {
        _0x5a7f90.deleteVertexArrayOES(_0x2332f1);
      };
      _0x45fcd4.bindVertexArray = function (_0x464c8d) {
        _0x5a7f90.bindVertexArrayOES(_0x464c8d);
      };
      _0x45fcd4.isVertexArray = function (_0x2b7f92) {
        return _0x5a7f90.isVertexArrayOES(_0x2b7f92);
      };
      return 1;
    }
  }
  function _0x42bff2(_0x26de1a) {
    var _0x37a580 = _0x26de1a.getExtension("WEBGL_draw_buffers");
    if (_0x37a580) {
      _0x26de1a.drawBuffers = function (_0x5cfe8b, _0x5a6702) {
        _0x37a580.drawBuffersWEBGL(_0x5cfe8b, _0x5a6702);
      };
      return 1;
    }
  }
  function _0x200575(_0x2b8baf) {
    return !!(_0x2b8baf.dibvbi = _0x2b8baf.getExtension("WEBGL_draw_instanced_base_vertex_base_instance"));
  }
  function _0x56cb45(_0x3b1044) {
    return !!(_0x3b1044.mdibvbi = _0x3b1044.getExtension("WEBGL_multi_draw_instanced_base_vertex_base_instance"));
  }
  function _0x560754(_0x1fb69e) {
    return !!(_0x1fb69e.multiDrawWebgl = _0x1fb69e.getExtension("WEBGL_multi_draw"));
  }
  var _0x5726bd = {
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
    recordError: function _0x417f49(_0x2e21f7) {
      if (!_0x5726bd.lastError) {
        _0x5726bd.lastError = _0x2e21f7;
      }
    },
    getNewId: function (_0x497e7b) {
      var _0x45e715 = _0x5726bd.counter++;
      for (var _0x531bbe = _0x497e7b.length; _0x531bbe < _0x45e715; _0x531bbe++) {
        _0x497e7b[_0x531bbe] = null;
      }
      return _0x45e715;
    },
    MAX_TEMP_BUFFER_SIZE: 2097152,
    numTempVertexBuffersPerSize: 64,
    log2ceilLookup: function (_0x3e4295) {
      return 32 - Math.clz32(_0x3e4295 === 0 ? 0 : _0x3e4295 - 1);
    },
    generateTempBuffers: function (_0xe46110, _0x6b280b) {
      var _0x2d2b55 = _0x5726bd.log2ceilLookup(_0x5726bd.MAX_TEMP_BUFFER_SIZE);
      _0x6b280b.tempVertexBufferCounters1 = [];
      _0x6b280b.tempVertexBufferCounters2 = [];
      _0x6b280b.tempVertexBufferCounters1.length = _0x6b280b.tempVertexBufferCounters2.length = _0x2d2b55 + 1;
      _0x6b280b.tempVertexBuffers1 = [];
      _0x6b280b.tempVertexBuffers2 = [];
      _0x6b280b.tempVertexBuffers1.length = _0x6b280b.tempVertexBuffers2.length = _0x2d2b55 + 1;
      _0x6b280b.tempIndexBuffers = [];
      _0x6b280b.tempIndexBuffers.length = _0x2d2b55 + 1;
      for (var _0x3043a7 = 0; _0x3043a7 <= _0x2d2b55; ++_0x3043a7) {
        _0x6b280b.tempIndexBuffers[_0x3043a7] = null;
        _0x6b280b.tempVertexBufferCounters1[_0x3043a7] = _0x6b280b.tempVertexBufferCounters2[_0x3043a7] = 0;
        var _0x485d9c = _0x5726bd.numTempVertexBuffersPerSize;
        _0x6b280b.tempVertexBuffers1[_0x3043a7] = [];
        _0x6b280b.tempVertexBuffers2[_0x3043a7] = [];
        var _0x386cbf = _0x6b280b.tempVertexBuffers1[_0x3043a7];
        var _0x429dc5 = _0x6b280b.tempVertexBuffers2[_0x3043a7];
        _0x386cbf.length = _0x429dc5.length = _0x485d9c;
        for (var _0x280557 = 0; _0x280557 < _0x485d9c; ++_0x280557) {
          _0x386cbf[_0x280557] = _0x429dc5[_0x280557] = null;
        }
      }
      if (_0xe46110) {
        _0x6b280b.tempQuadIndexBuffer = _0x5dd9d2.createBuffer();
        _0x6b280b.GLctx.bindBuffer(34963, _0x6b280b.tempQuadIndexBuffer);
        var _0xb38b19 = _0x5726bd.MAX_TEMP_BUFFER_SIZE >> 1;
        var _0x5ce723 = new Uint16Array(_0xb38b19);
        var _0x3043a7 = 0;
        var _0x48f503 = 0;
        while (1) {
          _0x5ce723[_0x3043a7++] = _0x48f503;
          if (_0x3043a7 >= _0xb38b19) {
            break;
          }
          _0x5ce723[_0x3043a7++] = _0x48f503 + 1;
          if (_0x3043a7 >= _0xb38b19) {
            break;
          }
          _0x5ce723[_0x3043a7++] = _0x48f503 + 2;
          if (_0x3043a7 >= _0xb38b19) {
            break;
          }
          _0x5ce723[_0x3043a7++] = _0x48f503;
          if (_0x3043a7 >= _0xb38b19) {
            break;
          }
          _0x5ce723[_0x3043a7++] = _0x48f503 + 2;
          if (_0x3043a7 >= _0xb38b19) {
            break;
          }
          _0x5ce723[_0x3043a7++] = _0x48f503 + 3;
          if (_0x3043a7 >= _0xb38b19) {
            break;
          }
          _0x48f503 += 4;
        }
        _0x6b280b.GLctx.bufferData(34963, _0x5ce723, 35044);
        _0x6b280b.GLctx.bindBuffer(34963, null);
      }
    },
    getTempVertexBuffer: function _0x3c111a(_0x137395) {
      var _0x1225ae = _0x5726bd.log2ceilLookup(_0x137395);
      var _0x27e3e6 = _0x5726bd.currentContext.tempVertexBuffers1[_0x1225ae];
      var _0x9f3e98 = _0x5726bd.currentContext.tempVertexBufferCounters1[_0x1225ae];
      _0x5726bd.currentContext.tempVertexBufferCounters1[_0x1225ae] = _0x5726bd.currentContext.tempVertexBufferCounters1[_0x1225ae] + 1 & _0x5726bd.numTempVertexBuffersPerSize - 1;
      var _0x5d7649 = _0x27e3e6[_0x9f3e98];
      if (_0x5d7649) {
        return _0x5d7649;
      }
      var _0x10b52c = _0x5dd9d2.getParameter(34964);
      _0x27e3e6[_0x9f3e98] = _0x5dd9d2.createBuffer();
      _0x5dd9d2.bindBuffer(34962, _0x27e3e6[_0x9f3e98]);
      _0x5dd9d2.bufferData(34962, 1 << _0x1225ae, 35048);
      _0x5dd9d2.bindBuffer(34962, _0x10b52c);
      return _0x27e3e6[_0x9f3e98];
    },
    getTempIndexBuffer: function _0x109c3c(_0x10e5a2) {
      var _0x483ff7 = _0x5726bd.log2ceilLookup(_0x10e5a2);
      var _0x139e0d = _0x5726bd.currentContext.tempIndexBuffers[_0x483ff7];
      if (_0x139e0d) {
        return _0x139e0d;
      }
      var _0x4e5f0c = _0x5dd9d2.getParameter(34965);
      _0x5726bd.currentContext.tempIndexBuffers[_0x483ff7] = _0x5dd9d2.createBuffer();
      _0x5dd9d2.bindBuffer(34963, _0x5726bd.currentContext.tempIndexBuffers[_0x483ff7]);
      _0x5dd9d2.bufferData(34963, 1 << _0x483ff7, 35048);
      _0x5dd9d2.bindBuffer(34963, _0x4e5f0c);
      return _0x5726bd.currentContext.tempIndexBuffers[_0x483ff7];
    },
    newRenderingFrameStarted: function _0x319221() {
      if (!_0x5726bd.currentContext) {
        return;
      }
      var _0x12fd49 = _0x5726bd.currentContext.tempVertexBuffers1;
      _0x5726bd.currentContext.tempVertexBuffers1 = _0x5726bd.currentContext.tempVertexBuffers2;
      _0x5726bd.currentContext.tempVertexBuffers2 = _0x12fd49;
      _0x12fd49 = _0x5726bd.currentContext.tempVertexBufferCounters1;
      _0x5726bd.currentContext.tempVertexBufferCounters1 = _0x5726bd.currentContext.tempVertexBufferCounters2;
      _0x5726bd.currentContext.tempVertexBufferCounters2 = _0x12fd49;
      var _0x348e6c = _0x5726bd.log2ceilLookup(_0x5726bd.MAX_TEMP_BUFFER_SIZE);
      for (var _0x4ebb91 = 0; _0x4ebb91 <= _0x348e6c; ++_0x4ebb91) {
        _0x5726bd.currentContext.tempVertexBufferCounters1[_0x4ebb91] = 0;
      }
    },
    getSource: function (_0xe2bce, _0x5c786e, _0x5c77ce, _0x3218f4) {
      var _0x1a6aa0 = "";
      for (var _0x3c3845 = 0; _0x3c3845 < _0x5c786e; ++_0x3c3845) {
        var _0x343995 = _0x3218f4 ? _0x58fcaf[_0x3218f4 + _0x3c3845 * 4 >> 2] : -1;
        _0x1a6aa0 += _0x57f36f(_0x58fcaf[_0x5c77ce + _0x3c3845 * 4 >> 2], _0x343995 < 0 ? undefined : _0x343995);
      }
      return _0x1a6aa0;
    },
    calcBufLength: function _0x1428c4(_0x18db57, _0x5188cc, _0xdee88, _0x2fc761) {
      if (_0xdee88 > 0) {
        return _0x2fc761 * _0xdee88;
      }
      var _0xecebde = _0x5726bd.byteSizeByType[_0x5188cc - _0x5726bd.byteSizeByTypeRoot];
      return _0x18db57 * _0xecebde * _0x2fc761;
    },
    usedTempBuffers: [],
    preDrawHandleClientVertexAttribBindings: function _0x56d0b5(_0x5d9fc4) {
      _0x5726bd.resetBufferBinding = false;
      for (var _0x4c9e3b = 0; _0x4c9e3b < _0x5726bd.currentContext.maxVertexAttribs; ++_0x4c9e3b) {
        var _0x5b4f78 = _0x5726bd.currentContext.clientBuffers[_0x4c9e3b];
        if (!_0x5b4f78.clientside || !_0x5b4f78.enabled) {
          continue;
        }
        _0x5726bd.resetBufferBinding = true;
        var _0x119784 = _0x5726bd.calcBufLength(_0x5b4f78.size, _0x5b4f78.type, _0x5b4f78.stride, _0x5d9fc4);
        var _0x5626d6 = _0x5726bd.getTempVertexBuffer(_0x119784);
        _0x5dd9d2.bindBuffer(34962, _0x5626d6);
        _0x5dd9d2.bufferSubData(34962, 0, _0x479b38.subarray(_0x5b4f78.ptr, _0x5b4f78.ptr + _0x119784));
        _0x5b4f78.vertexAttribPointerAdaptor.call(_0x5dd9d2, _0x4c9e3b, _0x5b4f78.size, _0x5b4f78.type, _0x5b4f78.normalized, _0x5b4f78.stride, 0);
      }
    },
    postDrawHandleClientVertexAttribBindings: function _0x2d161e() {
      if (_0x5726bd.resetBufferBinding) {
        _0x5dd9d2.bindBuffer(34962, _0x5726bd.buffers[_0x5dd9d2.currentArrayBufferBinding]);
      }
    },
    createContext: function (_0x38e28a, _0x4ec95d) {
      if (!_0x38e28a.getContextSafariWebGL2Fixed) {
        _0x38e28a.getContextSafariWebGL2Fixed = _0x38e28a.getContext;
        _0x38e28a.getContext = function (_0x368ca2, _0x4d1576) {
          var _0x2bc20c = _0x38e28a.getContextSafariWebGL2Fixed(_0x368ca2, _0x4d1576);
          if (_0x368ca2 == "webgl" == _0x2bc20c instanceof WebGLRenderingContext) {
            return _0x2bc20c;
          } else {
            return null;
          }
        };
      }
      var _0x120b13 = _0x4ec95d.majorVersion > 1 ? _0x38e28a.getContext("webgl2", _0x4ec95d) : _0x38e28a.getContext("webgl", _0x4ec95d);
      if (!_0x120b13) {
        return 0;
      }
      var _0x8b4562 = _0x5726bd.registerContext(_0x120b13, _0x4ec95d);
      return _0x8b4562;
    },
    registerContext: function (_0x25e573, _0x3c5415) {
      var _0x1df8b3 = _0x5726bd.getNewId(_0x5726bd.contexts);
      var _0x167260 = {
        handle: _0x1df8b3,
        attributes: _0x3c5415,
        version: _0x3c5415.majorVersion,
        GLctx: _0x25e573
      };
      if (_0x25e573.canvas) {
        _0x25e573.canvas.GLctxObject = _0x167260;
      }
      _0x5726bd.contexts[_0x1df8b3] = _0x167260;
      if (typeof _0x3c5415.enableExtensionsByDefault === "undefined" || _0x3c5415.enableExtensionsByDefault) {
        _0x5726bd.initExtensions(_0x167260);
      }
      _0x167260.maxVertexAttribs = _0x167260.GLctx.getParameter(34921);
      _0x167260.clientBuffers = [];
      for (var _0x3a33e6 = 0; _0x3a33e6 < _0x167260.maxVertexAttribs; _0x3a33e6++) {
        _0x167260.clientBuffers[_0x3a33e6] = {
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
      _0x5726bd.generateTempBuffers(false, _0x167260);
      return _0x1df8b3;
    },
    makeContextCurrent: function (_0x4e7c70) {
      _0x5726bd.currentContext = _0x5726bd.contexts[_0x4e7c70];
      _0x3b068f.ctx = _0x5dd9d2 = _0x5726bd.currentContext && _0x5726bd.currentContext.GLctx;
      return !_0x4e7c70 || !!_0x5dd9d2;
    },
    getContext: function (_0x1cfd4b) {
      return _0x5726bd.contexts[_0x1cfd4b];
    },
    deleteContext: function (_0x476307) {
      if (_0x5726bd.currentContext === _0x5726bd.contexts[_0x476307]) {
        _0x5726bd.currentContext = null;
      }
      if (typeof _0x100051 === "object") {
        _0x100051.removeAllHandlersOnTarget(_0x5726bd.contexts[_0x476307].GLctx.canvas);
      }
      if (_0x5726bd.contexts[_0x476307] && _0x5726bd.contexts[_0x476307].GLctx.canvas) {
        _0x5726bd.contexts[_0x476307].GLctx.canvas.GLctxObject = undefined;
      }
      _0x5726bd.contexts[_0x476307] = null;
    },
    initExtensions: function (_0x53f1cb) {
      if (!_0x53f1cb) {
        _0x53f1cb = _0x5726bd.currentContext;
      }
      if (_0x53f1cb.initExtensionsDone) {
        return;
      }
      _0x53f1cb.initExtensionsDone = true;
      var _0x438199 = _0x53f1cb.GLctx;
      _0x3ddab4(_0x438199);
      _0x34157a(_0x438199);
      _0x42bff2(_0x438199);
      _0x200575(_0x438199);
      _0x56cb45(_0x438199);
      if (_0x53f1cb.version >= 2) {
        _0x438199.disjointTimerQueryExt = _0x438199.getExtension("EXT_disjoint_timer_query_webgl2");
      }
      if (_0x53f1cb.version < 2 || !_0x438199.disjointTimerQueryExt) {
        _0x438199.disjointTimerQueryExt = _0x438199.getExtension("EXT_disjoint_timer_query");
      }
      _0x560754(_0x438199);
      var _0x242ecf = _0x438199.getSupportedExtensions() || [];
      _0x242ecf.forEach(function (_0x4e047c) {
        if (!_0x4e047c.includes("lose_context") && !_0x4e047c.includes("debug")) {
          _0x438199.getExtension(_0x4e047c);
        }
      });
    }
  };
  var _0x40b49e = ["default", "low-power", "high-performance"];
  function _0x36dc39(_0x5ee8fc, _0x45b6fb) {
    var _0x55cce4 = _0x45b6fb >> 2;
    var _0x4cca26 = _0x58fcaf[_0x55cce4 + 6];
    var _0x12868a = {
      alpha: !!_0x58fcaf[_0x55cce4 + 0],
      depth: !!_0x58fcaf[_0x55cce4 + 1],
      stencil: !!_0x58fcaf[_0x55cce4 + 2],
      antialias: !!_0x58fcaf[_0x55cce4 + 3],
      premultipliedAlpha: !!_0x58fcaf[_0x55cce4 + 4],
      preserveDrawingBuffer: !!_0x58fcaf[_0x55cce4 + 5],
      powerPreference: _0x40b49e[_0x4cca26],
      failIfMajorPerformanceCaveat: !!_0x58fcaf[_0x55cce4 + 7],
      majorVersion: _0x58fcaf[_0x55cce4 + 8],
      minorVersion: _0x58fcaf[_0x55cce4 + 9],
      enableExtensionsByDefault: _0x58fcaf[_0x55cce4 + 10],
      explicitSwapControl: _0x58fcaf[_0x55cce4 + 11],
      proxyContextToMainThread: _0x58fcaf[_0x55cce4 + 12],
      renderViaOffscreenBackBuffer: _0x58fcaf[_0x55cce4 + 13]
    };
    var _0x17d903 = _0x306cd7(_0x5ee8fc);
    if (!_0x17d903) {
      return 0;
    }
    if (_0x12868a.explicitSwapControl) {
      return 0;
    }
    var _0xb957d8 = _0x5726bd.createContext(_0x17d903, _0x12868a);
    return _0xb957d8;
  }
  function _0xbd3783(_0x373532, _0x85febd) {
    return _0x36dc39(_0x373532, _0x85febd);
  }
  function _0x28cd1c() {
    if (_0x5726bd.currentContext) {
      return _0x5726bd.currentContext.handle;
    } else {
      return 0;
    }
  }
  function _0xf453d0() {
    return _0x28cd1c();
  }
  _0x3b068f._emscripten_webgl_get_current_context = _0xf453d0;
  function _0x1594e1(_0x2ef7ad) {
    var _0x46eabb = _0x5726bd.makeContextCurrent(_0x2ef7ad);
    if (_0x46eabb) {
      return 0;
    } else {
      return -5;
    }
  }
  _0x3b068f._emscripten_webgl_make_context_current = _0x1594e1;
  function _0x173555(_0x489e7d) {
    if (_0x5726bd.currentContext == _0x489e7d) {
      _0x5726bd.currentContext = 0;
    }
    _0x5726bd.deleteContext(_0x489e7d);
  }
  function _0x35b6cc(_0x633ffd, _0x1508d4) {
    var _0x472d6 = _0x5726bd.getContext(_0x633ffd);
    var _0x58bdec = _0x57f36f(_0x1508d4);
    if (_0x58bdec.startsWith("GL_")) {
      _0x58bdec = _0x58bdec.substr(3);
    }
    if (_0x58bdec == "ANGLE_instanced_arrays") {
      _0x3ddab4(_0x5dd9d2);
    }
    if (_0x58bdec == "OES_vertex_array_object") {
      _0x34157a(_0x5dd9d2);
    }
    if (_0x58bdec == "WEBGL_draw_buffers") {
      _0x42bff2(_0x5dd9d2);
    }
    if (_0x58bdec == "WEBGL_draw_instanced_base_vertex_base_instance") {
      _0x200575(_0x5dd9d2);
    }
    if (_0x58bdec == "WEBGL_multi_draw_instanced_base_vertex_base_instance") {
      _0x56cb45(_0x5dd9d2);
    }
    if (_0x58bdec == "WEBGL_multi_draw") {
      _0x560754(_0x5dd9d2);
    }
    var _0x4f4961 = _0x472d6.GLctx.getExtension(_0x58bdec);
    return !!_0x4f4961;
  }
  function _0x35b572(_0x32c7dc) {
    var _0x1c92a6 = _0x32c7dc >> 2;
    for (var _0x31206a = 0; _0x31206a < 14; ++_0x31206a) {
      _0x58fcaf[_0x1c92a6 + _0x31206a] = 0;
    }
    _0x58fcaf[_0x1c92a6 + 0] = _0x58fcaf[_0x1c92a6 + 1] = _0x58fcaf[_0x1c92a6 + 3] = _0x58fcaf[_0x1c92a6 + 4] = _0x58fcaf[_0x1c92a6 + 8] = _0x58fcaf[_0x1c92a6 + 10] = 1;
  }
  var _0x515479 = {};
  function _0x573c34() {
    return _0xa276b8 || "./this.program";
  }
  function _0x27a581() {
    if (!_0x27a581.strings) {
      var _0x2a9eee = (typeof navigator === "object" && navigator.languages && navigator.languages[0] || "C").replace("-", "_") + ".UTF-8";
      var _0x52f558 = {
        USER: "web_user",
        LOGNAME: "web_user",
        PATH: "/",
        PWD: "/",
        HOME: "/home/web_user",
        LANG: _0x2a9eee,
        _: _0x573c34()
      };
      for (var _0x3b3ecd in _0x515479) {
        _0x52f558[_0x3b3ecd] = _0x515479[_0x3b3ecd];
      }
      var _0x31c75a = [];
      for (var _0x3b3ecd in _0x52f558) {
        _0x31c75a.push(_0x3b3ecd + "=" + _0x52f558[_0x3b3ecd]);
      }
      _0x27a581.strings = _0x31c75a;
    }
    return _0x27a581.strings;
  }
  function _0x5c96f1(_0x47038f, _0x49ebe1) {
    try {
      var _0x223d23 = 0;
      _0x27a581().forEach(function (_0x200512, _0x24b8ec) {
        var _0x20bc66 = _0x49ebe1 + _0x223d23;
        _0x58fcaf[_0x47038f + _0x24b8ec * 4 >> 2] = _0x20bc66;
        _0x389cf4(_0x200512, _0x20bc66);
        _0x223d23 += _0x200512.length + 1;
      });
      return 0;
    } catch (_0xaed41f) {
      if (typeof _0xee3f43 === "undefined" || !(_0xaed41f instanceof _0xee3f43.ErrnoError)) {
        _0x2e4daa(_0xaed41f);
      }
      return _0xaed41f.errno;
    }
  }
  function _0x310121(_0x34ef8f, _0x10b6d7) {
    try {
      var _0x58ba46 = _0x27a581();
      _0x58fcaf[_0x34ef8f >> 2] = _0x58ba46.length;
      var _0x311a95 = 0;
      _0x58ba46.forEach(function (_0x4f8b5e) {
        _0x311a95 += _0x4f8b5e.length + 1;
      });
      _0x58fcaf[_0x10b6d7 >> 2] = _0x311a95;
      return 0;
    } catch (_0x50a9d) {
      if (typeof _0xee3f43 === "undefined" || !(_0x50a9d instanceof _0xee3f43.ErrnoError)) {
        _0x2e4daa(_0x50a9d);
      }
      return _0x50a9d.errno;
    }
  }
  function _0x227ec6(_0x4bcaf3) {
    try {
      var _0x4e716e = _0x332174.getStreamFromFD(_0x4bcaf3);
      _0xee3f43.close(_0x4e716e);
      return 0;
    } catch (_0x43f7c7) {
      if (typeof _0xee3f43 === "undefined" || !(_0x43f7c7 instanceof _0xee3f43.ErrnoError)) {
        _0x2e4daa(_0x43f7c7);
      }
      return _0x43f7c7.errno;
    }
  }
  function _0x23f81f(_0x16b003, _0x261dd3) {
    try {
      var _0x36c9c6 = _0x332174.getStreamFromFD(_0x16b003);
      var _0x3a3b92 = _0x36c9c6.tty ? 2 : _0xee3f43.isDir(_0x36c9c6.mode) ? 3 : _0xee3f43.isLink(_0x36c9c6.mode) ? 7 : 4;
      _0x5a8ff8[_0x261dd3 >> 0] = _0x3a3b92;
      return 0;
    } catch (_0xcf4fc8) {
      if (typeof _0xee3f43 === "undefined" || !(_0xcf4fc8 instanceof _0xee3f43.ErrnoError)) {
        _0x2e4daa(_0xcf4fc8);
      }
      return _0xcf4fc8.errno;
    }
  }
  function _0x3e87d2(_0x45cd36, _0x1ab07d, _0x4d4d6a, _0x4dee9a) {
    try {
      var _0x35ea0d = _0x332174.getStreamFromFD(_0x45cd36);
      var _0x411838 = _0x332174.doReadv(_0x35ea0d, _0x1ab07d, _0x4d4d6a);
      _0x58fcaf[_0x4dee9a >> 2] = _0x411838;
      return 0;
    } catch (_0x18f1ba) {
      if (typeof _0xee3f43 === "undefined" || !(_0x18f1ba instanceof _0xee3f43.ErrnoError)) {
        _0x2e4daa(_0x18f1ba);
      }
      return _0x18f1ba.errno;
    }
  }
  function _0x281ac2(_0x91df1b, _0x5d04f8, _0x2432f9, _0x93c431, _0x447535) {
    try {
      var _0x13951a = _0x332174.getStreamFromFD(_0x91df1b);
      var _0x2c16c4 = 4294967296;
      var _0x3ad10e = _0x2432f9 * _0x2c16c4 + (_0x5d04f8 >>> 0);
      var _0x36b541 = 9007199254740992;
      if (_0x3ad10e <= -_0x36b541 || _0x3ad10e >= _0x36b541) {
        return -61;
      }
      _0xee3f43.llseek(_0x13951a, _0x3ad10e, _0x93c431);
      _0x79d46c = [_0x13951a.position >>> 0, (_0x40da2a = _0x13951a.position, +Math.abs(_0x40da2a) >= 1 ? _0x40da2a > 0 ? (Math.min(+Math.floor(_0x40da2a / 4294967296), 4294967295) | 0) >>> 0 : ~~+Math.ceil((_0x40da2a - +(~~_0x40da2a >>> 0)) / 4294967296) >>> 0 : 0)];
      _0x58fcaf[_0x447535 >> 2] = _0x79d46c[0];
      _0x58fcaf[_0x447535 + 4 >> 2] = _0x79d46c[1];
      if (_0x13951a.getdents && _0x3ad10e === 0 && _0x93c431 === 0) {
        _0x13951a.getdents = null;
      }
      return 0;
    } catch (_0x1636e7) {
      if (typeof _0xee3f43 === "undefined" || !(_0x1636e7 instanceof _0xee3f43.ErrnoError)) {
        _0x2e4daa(_0x1636e7);
      }
      return _0x1636e7.errno;
    }
  }
  function _0x2ff22f(_0x144215, _0x16846e, _0x18ccd1, _0x4a6ef8) {
    try {
      var _0x5921b9 = _0x332174.getStreamFromFD(_0x144215);
      var _0x22943a = _0x332174.doWritev(_0x5921b9, _0x16846e, _0x18ccd1);
      _0x58fcaf[_0x4a6ef8 >> 2] = _0x22943a;
      return 0;
    } catch (_0x284ce2) {
      if (typeof _0xee3f43 === "undefined" || !(_0x284ce2 instanceof _0xee3f43.ErrnoError)) {
        _0x2e4daa(_0x284ce2);
      }
      return _0x284ce2.errno;
    }
  }
  function _0x6ac5e9(_0x943e55, _0x1b6d1e) {
    return 0;
  }
  function _0xf71cd0() {
    return _0xe138de();
  }
  function _0x349d3c(_0x41c5e1, _0x50e953, _0x47dfdb, _0x440bb2) {
    var _0x142aac = 0;
    var _0x54d06c = 0;
    var _0xa56ccb = 0;
    var _0x2ca077 = 0;
    var _0x486dd2 = 0;
    var _0x2b1693 = 0;
    var _0x59f4fb;
    function _0x807741(_0x6d634, _0x1ea75d, _0x19da68, _0x2e7aa5, _0x326e62, _0x2829b3) {
      var _0x225026;
      var _0x1d09c1;
      var _0x3fcff2;
      var _0x108533;
      _0x1d09c1 = _0x6d634 === 10 ? 28 : 16;
      _0x326e62 = _0x6d634 === 10 ? _0x5ee329(_0x326e62) : _0x40bb7e(_0x326e62);
      _0x225026 = _0x58620b(_0x1d09c1);
      _0x108533 = _0x561135(_0x225026, _0x6d634, _0x326e62, _0x2829b3);
      _0x1edac9(!_0x108533);
      _0x3fcff2 = _0x58620b(32);
      _0x58fcaf[_0x3fcff2 + 4 >> 2] = _0x6d634;
      _0x58fcaf[_0x3fcff2 + 8 >> 2] = _0x1ea75d;
      _0x58fcaf[_0x3fcff2 + 12 >> 2] = _0x19da68;
      _0x58fcaf[_0x3fcff2 + 24 >> 2] = _0x2e7aa5;
      _0x58fcaf[_0x3fcff2 + 20 >> 2] = _0x225026;
      if (_0x6d634 === 10) {
        _0x58fcaf[_0x3fcff2 + 16 >> 2] = 28;
      } else {
        _0x58fcaf[_0x3fcff2 + 16 >> 2] = 16;
      }
      _0x58fcaf[_0x3fcff2 + 28 >> 2] = 0;
      return _0x3fcff2;
    }
    if (_0x47dfdb) {
      _0xa56ccb = _0x58fcaf[_0x47dfdb >> 2];
      _0x2ca077 = _0x58fcaf[_0x47dfdb + 4 >> 2];
      _0x486dd2 = _0x58fcaf[_0x47dfdb + 8 >> 2];
      _0x2b1693 = _0x58fcaf[_0x47dfdb + 12 >> 2];
    }
    if (_0x486dd2 && !_0x2b1693) {
      _0x2b1693 = _0x486dd2 === 2 ? 17 : 6;
    }
    if (!_0x486dd2 && _0x2b1693) {
      _0x486dd2 = _0x2b1693 === 17 ? 2 : 1;
    }
    if (_0x2b1693 === 0) {
      _0x2b1693 = 6;
    }
    if (_0x486dd2 === 0) {
      _0x486dd2 = 1;
    }
    if (!_0x41c5e1 && !_0x50e953) {
      return -2;
    }
    if (_0xa56ccb & ~1087) {
      return -1;
    }
    if (_0x47dfdb !== 0 && _0x58fcaf[_0x47dfdb >> 2] & 2 && !_0x41c5e1) {
      return -1;
    }
    if (_0xa56ccb & 32) {
      return -2;
    }
    if (_0x486dd2 !== 0 && _0x486dd2 !== 1 && _0x486dd2 !== 2) {
      return -7;
    }
    if (_0x2ca077 !== 0 && _0x2ca077 !== 2 && _0x2ca077 !== 10) {
      return -6;
    }
    if (_0x50e953) {
      _0x50e953 = _0x57f36f(_0x50e953);
      _0x54d06c = parseInt(_0x50e953, 10);
      if (isNaN(_0x54d06c)) {
        if (_0xa56ccb & 1024) {
          return -2;
        }
        return -8;
      }
    }
    if (!_0x41c5e1) {
      if (_0x2ca077 === 0) {
        _0x2ca077 = 2;
      }
      if ((_0xa56ccb & 1) === 0) {
        if (_0x2ca077 === 2) {
          _0x142aac = _0x4464fe(2130706433);
        } else {
          _0x142aac = [0, 0, 0, 1];
        }
      }
      _0x59f4fb = _0x807741(_0x2ca077, _0x486dd2, _0x2b1693, null, _0x142aac, _0x54d06c);
      _0x58fcaf[_0x440bb2 >> 2] = _0x59f4fb;
      return 0;
    }
    _0x41c5e1 = _0x57f36f(_0x41c5e1);
    _0x142aac = _0xd4342a(_0x41c5e1);
    if (_0x142aac !== null) {
      if (_0x2ca077 === 0 || _0x2ca077 === 2) {
        _0x2ca077 = 2;
      } else if (_0x2ca077 === 10 && _0xa56ccb & 8) {
        _0x142aac = [0, 0, _0x4464fe(65535), _0x142aac];
        _0x2ca077 = 10;
      } else {
        return -2;
      }
    } else {
      _0x142aac = _0x60349(_0x41c5e1);
      if (_0x142aac !== null) {
        if (_0x2ca077 === 0 || _0x2ca077 === 10) {
          _0x2ca077 = 10;
        } else {
          return -2;
        }
      }
    }
    if (_0x142aac != null) {
      _0x59f4fb = _0x807741(_0x2ca077, _0x486dd2, _0x2b1693, _0x41c5e1, _0x142aac, _0x54d06c);
      _0x58fcaf[_0x440bb2 >> 2] = _0x59f4fb;
      return 0;
    }
    if (_0xa56ccb & 4) {
      return -2;
    }
    _0x41c5e1 = _0xd4adf1.lookup_name(_0x41c5e1);
    _0x142aac = _0xd4342a(_0x41c5e1);
    if (_0x2ca077 === 0) {
      _0x2ca077 = 2;
    } else if (_0x2ca077 === 10) {
      _0x142aac = [0, 0, _0x4464fe(65535), _0x142aac];
    }
    _0x59f4fb = _0x807741(_0x2ca077, _0x486dd2, _0x2b1693, null, _0x142aac, _0x54d06c);
    _0x58fcaf[_0x440bb2 >> 2] = _0x59f4fb;
    return 0;
  }
  function _0x215b3c(_0x1ea260) {
    var _0x5bf4f3 = _0x58620b(20);
    var _0x1017bb = _0x58620b(_0x1ea260.length + 1);
    _0x5b4754(_0x1ea260, _0x1017bb, _0x1ea260.length + 1);
    _0x58fcaf[_0x5bf4f3 >> 2] = _0x1017bb;
    var _0x52120a = _0x58620b(4);
    _0x58fcaf[_0x52120a >> 2] = 0;
    _0x58fcaf[_0x5bf4f3 + 4 >> 2] = _0x52120a;
    var _0x39a23f = 2;
    _0x58fcaf[_0x5bf4f3 + 8 >> 2] = _0x39a23f;
    _0x58fcaf[_0x5bf4f3 + 12 >> 2] = 4;
    var _0x13f045 = _0x58620b(12);
    _0x58fcaf[_0x13f045 >> 2] = _0x13f045 + 8;
    _0x58fcaf[_0x13f045 + 4 >> 2] = 0;
    _0x58fcaf[_0x13f045 + 8 >> 2] = _0xd4342a(_0xd4adf1.lookup_name(_0x1ea260));
    _0x58fcaf[_0x5bf4f3 + 16 >> 2] = _0x13f045;
    return _0x5bf4f3;
  }
  function _0x1b6001(_0x524512, _0x1f81af, _0x4f44fd) {
    if (_0x4f44fd !== 2) {
      _0x3930a2(5);
      return null;
    }
    _0x524512 = _0x58fcaf[_0x524512 >> 2];
    var _0xfac0b2 = _0x40bb7e(_0x524512);
    var _0x1cac30 = _0xd4adf1.lookup_addr(_0xfac0b2);
    if (_0x1cac30) {
      _0xfac0b2 = _0x1cac30;
    }
    return _0x215b3c(_0xfac0b2);
  }
  function _0x23f978(_0x29ae09) {
    return _0x215b3c(_0x57f36f(_0x29ae09));
  }
  function _0x39e848(_0x54a43c, _0x913a1e, _0x8558e0, _0x418366, _0x1ef0f0, _0x386621, _0x1ddf0f) {
    var _0x3ed0b8 = _0x3767d8(_0x54a43c, _0x913a1e);
    if (_0x3ed0b8.errno) {
      return -6;
    }
    var _0x109df9 = _0x3ed0b8.port;
    var _0x154bdc = _0x3ed0b8.addr;
    var _0x17299b = false;
    if (_0x8558e0 && _0x418366) {
      var _0xe1c2c3;
      if (_0x1ddf0f & 1 || !(_0xe1c2c3 = _0xd4adf1.lookup_addr(_0x154bdc))) {
        if (_0x1ddf0f & 8) {
          return -2;
        }
      } else {
        _0x154bdc = _0xe1c2c3;
      }
      var _0x259042 = _0x5b4754(_0x154bdc, _0x8558e0, _0x418366);
      if (_0x259042 + 1 >= _0x418366) {
        _0x17299b = true;
      }
    }
    if (_0x1ef0f0 && _0x386621) {
      _0x109df9 = "" + _0x109df9;
      var _0x259042 = _0x5b4754(_0x109df9, _0x1ef0f0, _0x386621);
      if (_0x259042 + 1 >= _0x386621) {
        _0x17299b = true;
      }
    }
    if (_0x17299b) {
      return -12;
    }
    return 0;
  }
  function _0x5be02f() {
    throw "getpwuid: TODO";
  }
  function _0x586e1d(_0x5a5ffd) {
    var _0x2e8345 = Date.now();
    _0x58fcaf[_0x5a5ffd >> 2] = _0x2e8345 / 1000 | 0;
    _0x58fcaf[_0x5a5ffd + 4 >> 2] = _0x2e8345 % 1000 * 1000 | 0;
    return 0;
  }
  function _0x32362e(_0x3faab2) {
    _0x5dd9d2.activeTexture(_0x3faab2);
  }
  function _0x2a2bcd(_0x10abcb, _0x5c1204) {
    _0x10abcb = _0x5726bd.programs[_0x10abcb];
    _0x5c1204 = _0x5726bd.shaders[_0x5c1204];
    _0x10abcb[_0x5c1204.shaderType] = _0x5c1204;
    _0x5dd9d2.attachShader(_0x10abcb, _0x5c1204);
  }
  function _0x412018(_0x3e39fc, _0x4a3593) {
    _0x5dd9d2.beginQuery(_0x3e39fc, _0x5726bd.queries[_0x4a3593]);
  }
  function _0x4b29f6(_0x3545f9) {
    _0x5dd9d2.beginTransformFeedback(_0x3545f9);
  }
  function _0x2efd59(_0x52d16d, _0x3bbedc, _0x1cbead) {
    _0x5dd9d2.bindAttribLocation(_0x5726bd.programs[_0x52d16d], _0x3bbedc, _0x57f36f(_0x1cbead));
  }
  function _0x1ebbcb(_0x384071, _0xc850f8) {
    if (_0x384071 == 34962) {
      _0x5dd9d2.currentArrayBufferBinding = _0xc850f8;
    } else if (_0x384071 == 34963) {
      _0x5dd9d2.currentElementArrayBufferBinding = _0xc850f8;
    }
    if (_0x384071 == 35051) {
      _0x5dd9d2.currentPixelPackBufferBinding = _0xc850f8;
    } else if (_0x384071 == 35052) {
      _0x5dd9d2.currentPixelUnpackBufferBinding = _0xc850f8;
    }
    _0x5dd9d2.bindBuffer(_0x384071, _0x5726bd.buffers[_0xc850f8]);
  }
  function _0x5ec884(_0x543e57, _0x2d298d, _0x53042c) {
    _0x5dd9d2.bindBufferBase(_0x543e57, _0x2d298d, _0x5726bd.buffers[_0x53042c]);
  }
  function _0x4ef806(_0x24d9b6, _0x500544, _0x4501fb, _0x2ea6f0, _0x21dc84) {
    _0x5dd9d2.bindBufferRange(_0x24d9b6, _0x500544, _0x5726bd.buffers[_0x4501fb], _0x2ea6f0, _0x21dc84);
  }
  function _0x2575d9(_0x77a486, _0x580a54) {
    _0x5dd9d2.bindFramebuffer(_0x77a486, _0x5726bd.framebuffers[_0x580a54]);
  }
  function _0x37deb5(_0x10427e, _0x3cd3de) {
    _0x5dd9d2.bindRenderbuffer(_0x10427e, _0x5726bd.renderbuffers[_0x3cd3de]);
  }
  function _0x288100(_0x20fb46, _0x54d9c0) {
    _0x5dd9d2.bindSampler(_0x20fb46, _0x5726bd.samplers[_0x54d9c0]);
  }
  function _0x4358bf(_0x45945f, _0x41fa20) {
    _0x5dd9d2.bindTexture(_0x45945f, _0x5726bd.textures[_0x41fa20]);
  }
  function _0x182e40(_0x963ba9, _0x42e309) {
    _0x5dd9d2.bindTransformFeedback(_0x963ba9, _0x5726bd.transformFeedbacks[_0x42e309]);
  }
  function _0x244d6b(_0x23e9c5) {
    _0x5dd9d2.bindVertexArray(_0x5726bd.vaos[_0x23e9c5]);
    var _0x476944 = _0x5dd9d2.getParameter(34965);
    _0x5dd9d2.currentElementArrayBufferBinding = _0x476944 ? _0x476944.name | 0 : 0;
  }
  function _0x33a48a(_0x41388a) {
    _0x5dd9d2.blendEquation(_0x41388a);
  }
  function _0x47048f(_0x37db0c, _0x413450) {
    _0x5dd9d2.blendEquationSeparate(_0x37db0c, _0x413450);
  }
  function _0xe8a1e7(_0x55c024, _0xceb20f, _0xae51e1, _0x4effe7) {
    _0x5dd9d2.blendFuncSeparate(_0x55c024, _0xceb20f, _0xae51e1, _0x4effe7);
  }
  function _0x5b3f33(_0x34651d, _0x211ec3, _0x35fbb2, _0x5cb1cf, _0x13e917, _0x4cd335, _0x244dc5, _0x27cecd, _0x5212c6, _0x126dcd) {
    _0x5dd9d2.blitFramebuffer(_0x34651d, _0x211ec3, _0x35fbb2, _0x5cb1cf, _0x13e917, _0x4cd335, _0x244dc5, _0x27cecd, _0x5212c6, _0x126dcd);
  }
  function _0xe0b2f8(_0x3be616, _0x36d72f, _0x27e0f5, _0x51aca1) {
    if (_0x5726bd.currentContext.version >= 2) {
      if (_0x27e0f5) {
        _0x5dd9d2.bufferData(_0x3be616, _0x479b38, _0x51aca1, _0x27e0f5, _0x36d72f);
      } else {
        _0x5dd9d2.bufferData(_0x3be616, _0x36d72f, _0x51aca1);
      }
    } else {
      _0x5dd9d2.bufferData(_0x3be616, _0x27e0f5 ? _0x479b38.subarray(_0x27e0f5, _0x27e0f5 + _0x36d72f) : _0x36d72f, _0x51aca1);
    }
  }
  function _0x31a947(_0x1f16bb, _0x2fdaee, _0x1214b6, _0x993af3) {
    if (_0x5726bd.currentContext.version >= 2) {
      _0x5dd9d2.bufferSubData(_0x1f16bb, _0x2fdaee, _0x479b38, _0x993af3, _0x1214b6);
      return;
    }
    _0x5dd9d2.bufferSubData(_0x1f16bb, _0x2fdaee, _0x479b38.subarray(_0x993af3, _0x993af3 + _0x1214b6));
  }
  function _0x215928(_0x37d32e) {
    return _0x5dd9d2.checkFramebufferStatus(_0x37d32e);
  }
  function _0x26287d(_0x1ff1f8) {
    _0x5dd9d2.clear(_0x1ff1f8);
  }
  function _0x31ce35(_0x606f2f, _0x447ea6, _0x4b39a4, _0x137029) {
    _0x5dd9d2.clearBufferfi(_0x606f2f, _0x447ea6, _0x4b39a4, _0x137029);
  }
  function _0x4e6efb(_0xbcda77, _0x283200, _0x20dfc0) {
    _0x5dd9d2.clearBufferfv(_0xbcda77, _0x283200, _0x59876a, _0x20dfc0 >> 2);
  }
  function _0x5ab1e0(_0x17cbe0, _0x4d4855, _0x3b3c9a) {
    _0x5dd9d2.clearBufferuiv(_0x17cbe0, _0x4d4855, _0x59624f, _0x3b3c9a >> 2);
  }
  function _0x149a16(_0x33a428, _0x488592, _0x1cfd67, _0x41f92f) {
    _0x5dd9d2.clearColor(_0x33a428, _0x488592, _0x1cfd67, _0x41f92f);
  }
  function _0x25a7e2(_0x85825d) {
    _0x5dd9d2.clearDepth(_0x85825d);
  }
  function _0x38e444(_0x47c8e7) {
    _0x5dd9d2.clearStencil(_0x47c8e7);
  }
  function _0x332ebc(_0x11437c, _0x3ef4a6, _0x28562a, _0x3a0ab8) {
    return _0x5dd9d2.clientWaitSync(_0x5726bd.syncs[_0x11437c], _0x3ef4a6, _0x3ae14c(_0x28562a, _0x3a0ab8));
  }
  function _0x49d073(_0x1e6e54, _0x237387, _0x45586c, _0x175d4f) {
    _0x5dd9d2.colorMask(!!_0x1e6e54, !!_0x237387, !!_0x45586c, !!_0x175d4f);
  }
  function _0x2b79e4(_0x14fc05) {
    _0x5dd9d2.compileShader(_0x5726bd.shaders[_0x14fc05]);
  }
  function _0x57ccfc(_0x57c09b, _0x445d46, _0x424266, _0x43861d, _0x3db2a5, _0x11a505, _0x52ec69, _0x545735) {
    if (_0x5726bd.currentContext.version >= 2) {
      if (_0x5dd9d2.currentPixelUnpackBufferBinding) {
        _0x5dd9d2.compressedTexImage2D(_0x57c09b, _0x445d46, _0x424266, _0x43861d, _0x3db2a5, _0x11a505, _0x52ec69, _0x545735);
      } else {
        _0x5dd9d2.compressedTexImage2D(_0x57c09b, _0x445d46, _0x424266, _0x43861d, _0x3db2a5, _0x11a505, _0x479b38, _0x545735, _0x52ec69);
      }
      return;
    }
    _0x5dd9d2.compressedTexImage2D(_0x57c09b, _0x445d46, _0x424266, _0x43861d, _0x3db2a5, _0x11a505, _0x545735 ? _0x479b38.subarray(_0x545735, _0x545735 + _0x52ec69) : null);
  }
  function _0x20e2a2(_0x4200c5, _0x3b5f18, _0x5a0128, _0x4b0562, _0x55fcb9, _0x40cfff, _0x5207f2, _0x52eb4a, _0x39ae54) {
    if (_0x5dd9d2.currentPixelUnpackBufferBinding) {
      _0x5dd9d2.compressedTexImage3D(_0x4200c5, _0x3b5f18, _0x5a0128, _0x4b0562, _0x55fcb9, _0x40cfff, _0x5207f2, _0x52eb4a, _0x39ae54);
    } else {
      _0x5dd9d2.compressedTexImage3D(_0x4200c5, _0x3b5f18, _0x5a0128, _0x4b0562, _0x55fcb9, _0x40cfff, _0x5207f2, _0x479b38, _0x39ae54, _0x52eb4a);
    }
  }
  function _0x211f1d(_0x56a4bd, _0x4af140, _0x26bf1f, _0x119232, _0x84733b, _0x5e6fe1, _0x38a5cc, _0xc86ce0, _0x3aa0c8) {
    if (_0x5726bd.currentContext.version >= 2) {
      if (_0x5dd9d2.currentPixelUnpackBufferBinding) {
        _0x5dd9d2.compressedTexSubImage2D(_0x56a4bd, _0x4af140, _0x26bf1f, _0x119232, _0x84733b, _0x5e6fe1, _0x38a5cc, _0xc86ce0, _0x3aa0c8);
      } else {
        _0x5dd9d2.compressedTexSubImage2D(_0x56a4bd, _0x4af140, _0x26bf1f, _0x119232, _0x84733b, _0x5e6fe1, _0x38a5cc, _0x479b38, _0x3aa0c8, _0xc86ce0);
      }
      return;
    }
    _0x5dd9d2.compressedTexSubImage2D(_0x56a4bd, _0x4af140, _0x26bf1f, _0x119232, _0x84733b, _0x5e6fe1, _0x38a5cc, _0x3aa0c8 ? _0x479b38.subarray(_0x3aa0c8, _0x3aa0c8 + _0xc86ce0) : null);
  }
  function _0x4cae70(_0xfb517a, _0x1a6fb5, _0x3b0263, _0x17e5e4, _0x3f3765, _0x1d97e4, _0x2a6ed0, _0x261f5c, _0x5d65ac, _0xdc4b76, _0x292353) {
    if (_0x5dd9d2.currentPixelUnpackBufferBinding) {
      _0x5dd9d2.compressedTexSubImage3D(_0xfb517a, _0x1a6fb5, _0x3b0263, _0x17e5e4, _0x3f3765, _0x1d97e4, _0x2a6ed0, _0x261f5c, _0x5d65ac, _0xdc4b76, _0x292353);
    } else {
      _0x5dd9d2.compressedTexSubImage3D(_0xfb517a, _0x1a6fb5, _0x3b0263, _0x17e5e4, _0x3f3765, _0x1d97e4, _0x2a6ed0, _0x261f5c, _0x5d65ac, _0x479b38, _0x292353, _0xdc4b76);
    }
  }
  function _0x2ca22b(_0x53973f, _0x578f20, _0x2df316, _0x5cdd60, _0x5ba9cc) {
    _0x5dd9d2.copyBufferSubData(_0x53973f, _0x578f20, _0x2df316, _0x5cdd60, _0x5ba9cc);
  }
  function _0x44aadc(_0x42b84b, _0x3f878c, _0x49bb53, _0xe7a22, _0x506caa, _0x2e1029, _0x4d088e, _0xa9da85) {
    _0x5dd9d2.copyTexImage2D(_0x42b84b, _0x3f878c, _0x49bb53, _0xe7a22, _0x506caa, _0x2e1029, _0x4d088e, _0xa9da85);
  }
  function _0x55df26(_0x154eae, _0x35f30b, _0x10cd58, _0xea92d5, _0x5d07d1, _0x47d518, _0x1c3954, _0x50be29) {
    _0x5dd9d2.copyTexSubImage2D(_0x154eae, _0x35f30b, _0x10cd58, _0xea92d5, _0x5d07d1, _0x47d518, _0x1c3954, _0x50be29);
  }
  function _0x5e4dd2() {
    var _0x504796 = _0x5726bd.getNewId(_0x5726bd.programs);
    var _0x4742e4 = _0x5dd9d2.createProgram();
    _0x4742e4.name = _0x504796;
    _0x4742e4.maxUniformLength = _0x4742e4.maxAttributeLength = _0x4742e4.maxUniformBlockNameLength = 0;
    _0x4742e4.uniformIdCounter = 1;
    _0x5726bd.programs[_0x504796] = _0x4742e4;
    return _0x504796;
  }
  function _0x1d6785(_0x2dfd1c) {
    var _0x11cf70 = _0x5726bd.getNewId(_0x5726bd.shaders);
    _0x5726bd.shaders[_0x11cf70] = _0x5dd9d2.createShader(_0x2dfd1c);
    _0x5726bd.shaders[_0x11cf70].shaderType = _0x2dfd1c & 1 ? "vs" : "fs";
    return _0x11cf70;
  }
  function _0x1769b8(_0x1bbb86) {
    _0x5dd9d2.cullFace(_0x1bbb86);
  }
  function _0x68f9fa(_0x5372b6, _0x193133) {
    for (var _0x5719e2 = 0; _0x5719e2 < _0x5372b6; _0x5719e2++) {
      var _0x45218f = _0x58fcaf[_0x193133 + _0x5719e2 * 4 >> 2];
      var _0x220271 = _0x5726bd.buffers[_0x45218f];
      if (!_0x220271) {
        continue;
      }
      _0x5dd9d2.deleteBuffer(_0x220271);
      _0x220271.name = 0;
      _0x5726bd.buffers[_0x45218f] = null;
      if (_0x45218f == _0x5dd9d2.currentArrayBufferBinding) {
        _0x5dd9d2.currentArrayBufferBinding = 0;
      }
      if (_0x45218f == _0x5dd9d2.currentElementArrayBufferBinding) {
        _0x5dd9d2.currentElementArrayBufferBinding = 0;
      }
      if (_0x45218f == _0x5dd9d2.currentPixelPackBufferBinding) {
        _0x5dd9d2.currentPixelPackBufferBinding = 0;
      }
      if (_0x45218f == _0x5dd9d2.currentPixelUnpackBufferBinding) {
        _0x5dd9d2.currentPixelUnpackBufferBinding = 0;
      }
    }
  }
  function _0x249223(_0x16090d, _0x1d1a64) {
    for (var _0x16ba45 = 0; _0x16ba45 < _0x16090d; ++_0x16ba45) {
      var _0x4aaf2e = _0x58fcaf[_0x1d1a64 + _0x16ba45 * 4 >> 2];
      var _0x44eb66 = _0x5726bd.framebuffers[_0x4aaf2e];
      if (!_0x44eb66) {
        continue;
      }
      _0x5dd9d2.deleteFramebuffer(_0x44eb66);
      _0x44eb66.name = 0;
      _0x5726bd.framebuffers[_0x4aaf2e] = null;
    }
  }
  function _0x5622be(_0x1ac837) {
    if (!_0x1ac837) {
      return;
    }
    var _0x1d3e1c = _0x5726bd.programs[_0x1ac837];
    if (!_0x1d3e1c) {
      _0x5726bd.recordError(1281);
      return;
    }
    _0x5dd9d2.deleteProgram(_0x1d3e1c);
    _0x1d3e1c.name = 0;
    _0x5726bd.programs[_0x1ac837] = null;
  }
  function _0x48edb7(_0x1c84f8, _0x87d1e1) {
    for (var _0x2ee12b = 0; _0x2ee12b < _0x1c84f8; _0x2ee12b++) {
      var _0x2fd162 = _0x58fcaf[_0x87d1e1 + _0x2ee12b * 4 >> 2];
      var _0x420b6b = _0x5726bd.queries[_0x2fd162];
      if (!_0x420b6b) {
        continue;
      }
      _0x5dd9d2.deleteQuery(_0x420b6b);
      _0x5726bd.queries[_0x2fd162] = null;
    }
  }
  function _0x282a1f(_0x3082c5, _0x4c93a6) {
    for (var _0xa6cd9b = 0; _0xa6cd9b < _0x3082c5; _0xa6cd9b++) {
      var _0xa1a501 = _0x58fcaf[_0x4c93a6 + _0xa6cd9b * 4 >> 2];
      var _0x273652 = _0x5726bd.renderbuffers[_0xa1a501];
      if (!_0x273652) {
        continue;
      }
      _0x5dd9d2.deleteRenderbuffer(_0x273652);
      _0x273652.name = 0;
      _0x5726bd.renderbuffers[_0xa1a501] = null;
    }
  }
  function _0x26ff1a(_0x36e328, _0x5f57f2) {
    for (var _0x4ef7db = 0; _0x4ef7db < _0x36e328; _0x4ef7db++) {
      var _0x4ef4c3 = _0x58fcaf[_0x5f57f2 + _0x4ef7db * 4 >> 2];
      var _0xb9739d = _0x5726bd.samplers[_0x4ef4c3];
      if (!_0xb9739d) {
        continue;
      }
      _0x5dd9d2.deleteSampler(_0xb9739d);
      _0xb9739d.name = 0;
      _0x5726bd.samplers[_0x4ef4c3] = null;
    }
  }
  function _0x4514cd(_0x42c756) {
    if (!_0x42c756) {
      return;
    }
    var _0x39b780 = _0x5726bd.shaders[_0x42c756];
    if (!_0x39b780) {
      _0x5726bd.recordError(1281);
      return;
    }
    _0x5dd9d2.deleteShader(_0x39b780);
    _0x5726bd.shaders[_0x42c756] = null;
  }
  function _0x41e083(_0x23e154) {
    if (!_0x23e154) {
      return;
    }
    var _0x23fceb = _0x5726bd.syncs[_0x23e154];
    if (!_0x23fceb) {
      _0x5726bd.recordError(1281);
      return;
    }
    _0x5dd9d2.deleteSync(_0x23fceb);
    _0x23fceb.name = 0;
    _0x5726bd.syncs[_0x23e154] = null;
  }
  function _0xf9a22b(_0x3dfdf2, _0x20f550) {
    for (var _0x59459b = 0; _0x59459b < _0x3dfdf2; _0x59459b++) {
      var _0x24288e = _0x58fcaf[_0x20f550 + _0x59459b * 4 >> 2];
      var _0x3f4481 = _0x5726bd.textures[_0x24288e];
      if (!_0x3f4481) {
        continue;
      }
      _0x5dd9d2.deleteTexture(_0x3f4481);
      _0x3f4481.name = 0;
      _0x5726bd.textures[_0x24288e] = null;
    }
  }
  function _0x35014f(_0x157235, _0x501f34) {
    for (var _0x354b69 = 0; _0x354b69 < _0x157235; _0x354b69++) {
      var _0x4ab82d = _0x58fcaf[_0x501f34 + _0x354b69 * 4 >> 2];
      var _0x12cb92 = _0x5726bd.transformFeedbacks[_0x4ab82d];
      if (!_0x12cb92) {
        continue;
      }
      _0x5dd9d2.deleteTransformFeedback(_0x12cb92);
      _0x12cb92.name = 0;
      _0x5726bd.transformFeedbacks[_0x4ab82d] = null;
    }
  }
  function _0x349356(_0xf3a86c, _0x3faedd) {
    for (var _0x5939ce = 0; _0x5939ce < _0xf3a86c; _0x5939ce++) {
      var _0x2ffdab = _0x58fcaf[_0x3faedd + _0x5939ce * 4 >> 2];
      _0x5dd9d2.deleteVertexArray(_0x5726bd.vaos[_0x2ffdab]);
      _0x5726bd.vaos[_0x2ffdab] = null;
    }
  }
  function _0xe38833(_0x21dde7) {
    _0x5dd9d2.depthFunc(_0x21dde7);
  }
  function _0x188020(_0x433b47) {
    _0x5dd9d2.depthMask(!!_0x433b47);
  }
  function _0x194eff(_0x52a15c, _0x33845a) {
    _0x5dd9d2.detachShader(_0x5726bd.programs[_0x52a15c], _0x5726bd.shaders[_0x33845a]);
  }
  function _0x1d70fa(_0x2c179b) {
    _0x5dd9d2.disable(_0x2c179b);
  }
  function _0x21e02f(_0x413e47) {
    var _0x4c7d4a = _0x5726bd.currentContext.clientBuffers[_0x413e47];
    _0x4c7d4a.enabled = false;
    _0x5dd9d2.disableVertexAttribArray(_0x413e47);
  }
  function _0x7498e4(_0x671b66, _0x341f38, _0x26cfbe) {
    _0x5726bd.preDrawHandleClientVertexAttribBindings(_0x341f38 + _0x26cfbe);
    _0x5dd9d2.drawArrays(_0x671b66, _0x341f38, _0x26cfbe);
    _0x5726bd.postDrawHandleClientVertexAttribBindings();
  }
  function _0x4b6378(_0x512634, _0x53cab5, _0x250857, _0x58a417) {
    _0x5dd9d2.drawArraysInstanced(_0x512634, _0x53cab5, _0x250857, _0x58a417);
  }
  var _0x542a0b = [];
  function _0x47a30e(_0x26b227, _0x1f7594) {
    var _0x2a45b9 = _0x542a0b[_0x26b227];
    for (var _0x33b737 = 0; _0x33b737 < _0x26b227; _0x33b737++) {
      _0x2a45b9[_0x33b737] = _0x58fcaf[_0x1f7594 + _0x33b737 * 4 >> 2];
    }
    _0x5dd9d2.drawBuffers(_0x2a45b9);
  }
  function _0x5db3a5(_0x501b01, _0x2b85eb, _0x436fe4, _0x59baab) {
    var _0x3aec66;
    if (!_0x5dd9d2.currentElementArrayBufferBinding) {
      var _0x7dd0df = _0x5726bd.calcBufLength(1, _0x436fe4, 0, _0x2b85eb);
      _0x3aec66 = _0x5726bd.getTempIndexBuffer(_0x7dd0df);
      _0x5dd9d2.bindBuffer(34963, _0x3aec66);
      _0x5dd9d2.bufferSubData(34963, 0, _0x479b38.subarray(_0x59baab, _0x59baab + _0x7dd0df));
      _0x59baab = 0;
    }
    _0x5726bd.preDrawHandleClientVertexAttribBindings(_0x2b85eb);
    _0x5dd9d2.drawElements(_0x501b01, _0x2b85eb, _0x436fe4, _0x59baab);
    _0x5726bd.postDrawHandleClientVertexAttribBindings(_0x2b85eb);
    if (!_0x5dd9d2.currentElementArrayBufferBinding) {
      _0x5dd9d2.bindBuffer(34963, null);
    }
  }
  function _0x50e000(_0xbf9629, _0x57d26c, _0x1a9b97, _0x458757, _0x54574b) {
    _0x5dd9d2.drawElementsInstanced(_0xbf9629, _0x57d26c, _0x1a9b97, _0x458757, _0x54574b);
  }
  function _0x10ad86(_0x4bed2b) {
    _0x5dd9d2.enable(_0x4bed2b);
  }
  function _0x13c883(_0x3a0e7a) {
    var _0x234f37 = _0x5726bd.currentContext.clientBuffers[_0x3a0e7a];
    _0x234f37.enabled = true;
    _0x5dd9d2.enableVertexAttribArray(_0x3a0e7a);
  }
  function _0x8a4028(_0x43b951) {
    _0x5dd9d2.endQuery(_0x43b951);
  }
  function _0x2326c1() {
    _0x5dd9d2.endTransformFeedback();
  }
  function _0x475239(_0x1f5740, _0xb1c2d1) {
    var _0x600331 = _0x5dd9d2.fenceSync(_0x1f5740, _0xb1c2d1);
    if (_0x600331) {
      var _0x5807f5 = _0x5726bd.getNewId(_0x5726bd.syncs);
      _0x600331.name = _0x5807f5;
      _0x5726bd.syncs[_0x5807f5] = _0x600331;
      return _0x5807f5;
    } else {
      return 0;
    }
  }
  function _0x48677f() {
    _0x5dd9d2.finish();
  }
  function _0x2d060c() {
    _0x5dd9d2.flush();
  }
  function _0x5c69f9(_0x97d616) {
    switch (_0x97d616) {
      case 34962:
        _0x97d616 = 34964;
        break;
      case 34963:
        _0x97d616 = 34965;
        break;
      case 35051:
        _0x97d616 = 35053;
        break;
      case 35052:
        _0x97d616 = 35055;
        break;
      case 35982:
        _0x97d616 = 35983;
        break;
      case 36662:
        _0x97d616 = 36662;
        break;
      case 36663:
        _0x97d616 = 36663;
        break;
      case 35345:
        _0x97d616 = 35368;
        break;
    }
    var _0x2cdbbe = _0x5dd9d2.getParameter(_0x97d616);
    if (_0x2cdbbe) {
      return _0x2cdbbe.name | 0;
    } else {
      return 0;
    }
  }
  function _0x1a5319(_0x100abd) {
    switch (_0x100abd) {
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
  function _0x40e705(_0x5fb72e, _0x2d1e7f, _0x29069c) {
    if (!_0x1a5319(_0x5fb72e)) {
      _0x5726bd.recordError(1280);
      _0x1717db("GL_INVALID_ENUM in glFlushMappedBufferRange");
      return;
    }
    var _0x5c88ec = _0x5726bd.mappedBuffers[_0x5c69f9(_0x5fb72e)];
    if (!_0x5c88ec) {
      _0x5726bd.recordError(1282);
      _0x1717db("buffer was never mapped in glFlushMappedBufferRange");
      return;
    }
    if (!(_0x5c88ec.access & 16)) {
      _0x5726bd.recordError(1282);
      _0x1717db("buffer was not mapped with GL_MAP_FLUSH_EXPLICIT_BIT in glFlushMappedBufferRange");
      return;
    }
    if (_0x2d1e7f < 0 || _0x29069c < 0 || _0x2d1e7f + _0x29069c > _0x5c88ec.length) {
      _0x5726bd.recordError(1281);
      _0x1717db("invalid range in glFlushMappedBufferRange");
      return;
    }
    _0x5dd9d2.bufferSubData(_0x5fb72e, _0x5c88ec.offset, _0x479b38.subarray(_0x5c88ec.mem + _0x2d1e7f, _0x5c88ec.mem + _0x2d1e7f + _0x29069c));
  }
  function _0x1bd9e7(_0x59950e, _0x33ef50, _0x375537, _0x2c64e4) {
    _0x5dd9d2.framebufferRenderbuffer(_0x59950e, _0x33ef50, _0x375537, _0x5726bd.renderbuffers[_0x2c64e4]);
  }
  function _0x5bb8de(_0x19fbbf, _0x2f95b7, _0x294a44, _0x4c26d2, _0x49b827) {
    _0x5dd9d2.framebufferTexture2D(_0x19fbbf, _0x2f95b7, _0x294a44, _0x5726bd.textures[_0x4c26d2], _0x49b827);
  }
  function _0x417ee9(_0xab2bbb, _0x2f2da6, _0x22898d, _0x5ba6c1, _0x5a1c8f) {
    _0x5dd9d2.framebufferTextureLayer(_0xab2bbb, _0x2f2da6, _0x5726bd.textures[_0x22898d], _0x5ba6c1, _0x5a1c8f);
  }
  function _0x277381(_0x10fee8) {
    _0x5dd9d2.frontFace(_0x10fee8);
  }
  function _0x3747fb(_0x51e3bd, _0x28a7d6, _0x480216, _0x228d80) {
    for (var _0x11a063 = 0; _0x11a063 < _0x51e3bd; _0x11a063++) {
      var _0x2ed6f0 = _0x5dd9d2[_0x480216]();
      var _0x216153 = _0x2ed6f0 && _0x5726bd.getNewId(_0x228d80);
      if (_0x2ed6f0) {
        _0x2ed6f0.name = _0x216153;
        _0x228d80[_0x216153] = _0x2ed6f0;
      } else {
        _0x5726bd.recordError(1282);
      }
      _0x58fcaf[_0x28a7d6 + _0x11a063 * 4 >> 2] = _0x216153;
    }
  }
  function _0x571440(_0x255a7b, _0x48d4ce) {
    _0x3747fb(_0x255a7b, _0x48d4ce, "createBuffer", _0x5726bd.buffers);
  }
  function _0x277578(_0x2cd843, _0xb0f0bc) {
    _0x3747fb(_0x2cd843, _0xb0f0bc, "createFramebuffer", _0x5726bd.framebuffers);
  }
  function _0xb1f03c(_0x3b4693, _0x714ba8) {
    _0x3747fb(_0x3b4693, _0x714ba8, "createQuery", _0x5726bd.queries);
  }
  function _0x597500(_0x1f2e6a, _0x484ba5) {
    _0x3747fb(_0x1f2e6a, _0x484ba5, "createRenderbuffer", _0x5726bd.renderbuffers);
  }
  function _0x344535(_0xf9837b, _0x4872cf) {
    _0x3747fb(_0xf9837b, _0x4872cf, "createSampler", _0x5726bd.samplers);
  }
  function _0xb3a9ec(_0x76ad81, _0xa89461) {
    _0x3747fb(_0x76ad81, _0xa89461, "createTexture", _0x5726bd.textures);
  }
  function _0xfc06a0(_0x549aeb, _0x6d409b) {
    _0x3747fb(_0x549aeb, _0x6d409b, "createTransformFeedback", _0x5726bd.transformFeedbacks);
  }
  function _0x15e8bf(_0x2c94f2, _0x4957f5) {
    _0x3747fb(_0x2c94f2, _0x4957f5, "createVertexArray", _0x5726bd.vaos);
  }
  function _0x28cd90(_0xab5e41) {
    _0x5dd9d2.generateMipmap(_0xab5e41);
  }
  function _0x4d509c(_0x27b9e1, _0x77e75e, _0x4e0f12, _0x3397f0, _0x566319, _0x443a48, _0x462319, _0x2e8eeb) {
    _0x77e75e = _0x5726bd.programs[_0x77e75e];
    var _0x2474bf = _0x5dd9d2[_0x27b9e1](_0x77e75e, _0x4e0f12);
    if (_0x2474bf) {
      var _0xdb572d = _0x2e8eeb && _0x5b4754(_0x2474bf.name, _0x2e8eeb, _0x3397f0);
      if (_0x566319) {
        _0x58fcaf[_0x566319 >> 2] = _0xdb572d;
      }
      if (_0x443a48) {
        _0x58fcaf[_0x443a48 >> 2] = _0x2474bf.size;
      }
      if (_0x462319) {
        _0x58fcaf[_0x462319 >> 2] = _0x2474bf.type;
      }
    }
  }
  function _0xa071d7(_0x2e14b0, _0x5a2f0d, _0x114eff, _0x15bfdb, _0x40cd56, _0x579dad, _0x318784) {
    _0x4d509c("getActiveAttrib", _0x2e14b0, _0x5a2f0d, _0x114eff, _0x15bfdb, _0x40cd56, _0x579dad, _0x318784);
  }
  function _0x55de08(_0x3bcc52, _0x54c44e, _0x4d6c5f, _0x2b263e, _0x2fe718, _0x5b83a1, _0x2322a5) {
    _0x4d509c("getActiveUniform", _0x3bcc52, _0x54c44e, _0x4d6c5f, _0x2b263e, _0x2fe718, _0x5b83a1, _0x2322a5);
  }
  function _0x56bada(_0x3f5b05, _0x2bc274, _0xec49ef, _0x5539e4, _0x29f520) {
    _0x3f5b05 = _0x5726bd.programs[_0x3f5b05];
    var _0xf33f57 = _0x5dd9d2.getActiveUniformBlockName(_0x3f5b05, _0x2bc274);
    if (!_0xf33f57) {
      return;
    }
    if (_0x29f520 && _0xec49ef > 0) {
      var _0x4805a3 = _0x5b4754(_0xf33f57, _0x29f520, _0xec49ef);
      if (_0x5539e4) {
        _0x58fcaf[_0x5539e4 >> 2] = _0x4805a3;
      }
    } else if (_0x5539e4) {
      _0x58fcaf[_0x5539e4 >> 2] = 0;
    }
  }
  function _0x33dc47(_0xf7056d, _0x492fb8, _0x4b1ebc, _0x579c40) {
    if (!_0x579c40) {
      _0x5726bd.recordError(1281);
      return;
    }
    _0xf7056d = _0x5726bd.programs[_0xf7056d];
    if (_0x4b1ebc == 35393) {
      var _0x4ade91 = _0x5dd9d2.getActiveUniformBlockName(_0xf7056d, _0x492fb8);
      _0x58fcaf[_0x579c40 >> 2] = _0x4ade91.length + 1;
      return;
    }
    var _0x1f21fa = _0x5dd9d2.getActiveUniformBlockParameter(_0xf7056d, _0x492fb8, _0x4b1ebc);
    if (_0x1f21fa === null) {
      return;
    }
    if (_0x4b1ebc == 35395) {
      for (var _0x452023 = 0; _0x452023 < _0x1f21fa.length; _0x452023++) {
        _0x58fcaf[_0x579c40 + _0x452023 * 4 >> 2] = _0x1f21fa[_0x452023];
      }
    } else {
      _0x58fcaf[_0x579c40 >> 2] = _0x1f21fa;
    }
  }
  function _0x113680(_0x34388a, _0x352760, _0x3f3eb2, _0x1d219c, _0x389335) {
    if (!_0x389335) {
      _0x5726bd.recordError(1281);
      return;
    }
    if (_0x352760 > 0 && _0x3f3eb2 == 0) {
      _0x5726bd.recordError(1281);
      return;
    }
    _0x34388a = _0x5726bd.programs[_0x34388a];
    var _0x3bddd9 = [];
    for (var _0xed7d80 = 0; _0xed7d80 < _0x352760; _0xed7d80++) {
      _0x3bddd9.push(_0x58fcaf[_0x3f3eb2 + _0xed7d80 * 4 >> 2]);
    }
    var _0x1c1668 = _0x5dd9d2.getActiveUniforms(_0x34388a, _0x3bddd9, _0x1d219c);
    if (!_0x1c1668) {
      return;
    }
    var _0x2a709b = _0x1c1668.length;
    for (var _0xed7d80 = 0; _0xed7d80 < _0x2a709b; _0xed7d80++) {
      _0x58fcaf[_0x389335 + _0xed7d80 * 4 >> 2] = _0x1c1668[_0xed7d80];
    }
  }
  function _0x33c7b4(_0x1b4784, _0x4d450d) {
    return _0x5dd9d2.getAttribLocation(_0x5726bd.programs[_0x1b4784], _0x57f36f(_0x4d450d));
  }
  function _0x28e96b(_0x189e63, _0x5a7e11, _0x45b13b, _0x3fd6d2) {
    if (!_0x3fd6d2) {
      _0x5726bd.recordError(1281);
      return;
    }
    _0x5dd9d2.getBufferSubData(_0x189e63, _0x5a7e11, _0x479b38, _0x3fd6d2, _0x45b13b);
  }
  function _0xbec045() {
    var _0x3e4019 = _0x5dd9d2.getError() || _0x5726bd.lastError;
    _0x5726bd.lastError = 0;
    return _0x3e4019;
  }
  function _0x5318bf(_0x3485a4, _0x4fad99, _0x2f41af, _0xdff822) {
    var _0x4e2f63 = _0x5dd9d2.getFramebufferAttachmentParameter(_0x3485a4, _0x4fad99, _0x2f41af);
    if (_0x4e2f63 instanceof WebGLRenderbuffer || _0x4e2f63 instanceof WebGLTexture) {
      _0x4e2f63 = _0x4e2f63.name | 0;
    }
    _0x58fcaf[_0xdff822 >> 2] = _0x4e2f63;
  }
  function _0x133def(_0x2ef5da, _0x4b4021) {
    _0x59624f[_0x2ef5da >> 2] = _0x4b4021;
    _0x59624f[_0x2ef5da + 4 >> 2] = (_0x4b4021 - _0x59624f[_0x2ef5da >> 2]) / 4294967296;
  }
  function _0x527b92(_0x3573de, _0x51d4a3, _0x29c1af, _0x493833) {
    if (!_0x29c1af) {
      _0x5726bd.recordError(1281);
      return;
    }
    var _0x12810b = _0x5dd9d2.getIndexedParameter(_0x3573de, _0x51d4a3);
    var _0x700b92;
    switch (typeof _0x12810b) {
      case "boolean":
        _0x700b92 = _0x12810b ? 1 : 0;
        break;
      case "number":
        _0x700b92 = _0x12810b;
        break;
      case "object":
        if (_0x12810b === null) {
          switch (_0x3573de) {
            case 35983:
            case 35368:
              _0x700b92 = 0;
              break;
            default:
              {
                _0x5726bd.recordError(1280);
                return;
              }
          }
        } else if (_0x12810b instanceof WebGLBuffer) {
          _0x700b92 = _0x12810b.name | 0;
        } else {
          _0x5726bd.recordError(1280);
          return;
        }
        break;
      default:
        _0x5726bd.recordError(1280);
        return;
    }
    switch (_0x493833) {
      case 1:
        _0x133def(_0x29c1af, _0x700b92);
        break;
      case 0:
        _0x58fcaf[_0x29c1af >> 2] = _0x700b92;
        break;
      case 2:
        _0x59876a[_0x29c1af >> 2] = _0x700b92;
        break;
      case 4:
        _0x5a8ff8[_0x29c1af >> 0] = _0x700b92 ? 1 : 0;
        break;
      default:
        throw "internal emscriptenWebGLGetIndexed() error, bad type: " + _0x493833;
    }
  }
  function _0x58bd52(_0x11388b, _0x5dcfa0, _0x4e17a8) {
    _0x527b92(_0x11388b, _0x5dcfa0, _0x4e17a8, 0);
  }
  function _0x58339f(_0x2cda41, _0x5b04bb, _0x5edab5) {
    if (!_0x5b04bb) {
      _0x5726bd.recordError(1281);
      return;
    }
    var _0x27e547 = undefined;
    switch (_0x2cda41) {
      case 36346:
        _0x27e547 = 1;
        break;
      case 36344:
        if (_0x5edab5 != 0 && _0x5edab5 != 1) {
          _0x5726bd.recordError(1280);
        }
        return;
      case 34814:
      case 36345:
        _0x27e547 = 0;
        break;
      case 34466:
        var _0x49bcea = _0x5dd9d2.getParameter(34467);
        _0x27e547 = _0x49bcea ? _0x49bcea.length : 0;
        break;
      case 33390:
        _0x27e547 = 1048576;
        break;
      case 33309:
        if (_0x5726bd.currentContext.version < 2) {
          _0x5726bd.recordError(1282);
          return;
        }
        var _0x831958 = _0x5dd9d2.getSupportedExtensions() || [];
        _0x27e547 = _0x831958.length * 2;
        break;
      case 33307:
      case 33308:
        if (_0x5726bd.currentContext.version < 2) {
          _0x5726bd.recordError(1280);
          return;
        }
        _0x27e547 = _0x2cda41 == 33307 ? 3 : 0;
        break;
    }
    if (_0x27e547 === undefined) {
      var _0x4182c8 = _0x5dd9d2.getParameter(_0x2cda41);
      switch (typeof _0x4182c8) {
        case "number":
          _0x27e547 = _0x4182c8;
          break;
        case "boolean":
          _0x27e547 = _0x4182c8 ? 1 : 0;
          break;
        case "string":
          _0x5726bd.recordError(1280);
          return;
        case "object":
          if (_0x4182c8 === null) {
            switch (_0x2cda41) {
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
                  _0x27e547 = 0;
                  break;
                }
              default:
                {
                  _0x5726bd.recordError(1280);
                  return;
                }
            }
          } else if (_0x4182c8 instanceof Float32Array || _0x4182c8 instanceof Uint32Array || _0x4182c8 instanceof Int32Array || _0x4182c8 instanceof Array) {
            for (var _0x4a9a3a = 0; _0x4a9a3a < _0x4182c8.length; ++_0x4a9a3a) {
              switch (_0x5edab5) {
                case 0:
                  _0x58fcaf[_0x5b04bb + _0x4a9a3a * 4 >> 2] = _0x4182c8[_0x4a9a3a];
                  break;
                case 2:
                  _0x59876a[_0x5b04bb + _0x4a9a3a * 4 >> 2] = _0x4182c8[_0x4a9a3a];
                  break;
                case 4:
                  _0x5a8ff8[_0x5b04bb + _0x4a9a3a >> 0] = _0x4182c8[_0x4a9a3a] ? 1 : 0;
                  break;
              }
            }
            return;
          } else {
            try {
              _0x27e547 = _0x4182c8.name | 0;
            } catch (_0x3e2ae8) {
              _0x5726bd.recordError(1280);
              _0x1717db("GL_INVALID_ENUM in glGet" + _0x5edab5 + "v: Unknown object returned from WebGL getParameter(" + _0x2cda41 + ")! (error: " + _0x3e2ae8 + ")");
              return;
            }
          }
          break;
        default:
          _0x5726bd.recordError(1280);
          _0x1717db("GL_INVALID_ENUM in glGet" + _0x5edab5 + "v: Native code calling glGet" + _0x5edab5 + "v(" + _0x2cda41 + ") and it returns " + _0x4182c8 + " of type " + typeof _0x4182c8 + "!");
          return;
      }
    }
    switch (_0x5edab5) {
      case 1:
        _0x133def(_0x5b04bb, _0x27e547);
        break;
      case 0:
        _0x58fcaf[_0x5b04bb >> 2] = _0x27e547;
        break;
      case 2:
        _0x59876a[_0x5b04bb >> 2] = _0x27e547;
        break;
      case 4:
        _0x5a8ff8[_0x5b04bb >> 0] = _0x27e547 ? 1 : 0;
        break;
    }
  }
  function _0x1ed162(_0x32f33e, _0xb93e03) {
    _0x58339f(_0x32f33e, _0xb93e03, 0);
  }
  function _0x2edb0d(_0x2cb1bd, _0x227414, _0x37f569, _0x476e56, _0x9c3cbf) {
    if (_0x476e56 < 0) {
      _0x5726bd.recordError(1281);
      return;
    }
    if (!_0x9c3cbf) {
      _0x5726bd.recordError(1281);
      return;
    }
    var _0x45d04a = _0x5dd9d2.getInternalformatParameter(_0x2cb1bd, _0x227414, _0x37f569);
    if (_0x45d04a === null) {
      return;
    }
    for (var _0x4daf47 = 0; _0x4daf47 < _0x45d04a.length && _0x4daf47 < _0x476e56; ++_0x4daf47) {
      _0x58fcaf[_0x9c3cbf + _0x4daf47 * 4 >> 2] = _0x45d04a[_0x4daf47];
    }
  }
  function _0x2a40bd(_0x133d7e, _0x225fac, _0x5662a9, _0x2fdc3f, _0x4e0e46) {
    _0x5726bd.recordError(1282);
  }
  function _0x134469(_0x3713f1, _0x78f7cf, _0x56d3a1, _0x845f38) {
    var _0x514cd2 = _0x5dd9d2.getProgramInfoLog(_0x5726bd.programs[_0x3713f1]);
    if (_0x514cd2 === null) {
      _0x514cd2 = "(unknown error)";
    }
    var _0x469240 = _0x78f7cf > 0 && _0x845f38 ? _0x5b4754(_0x514cd2, _0x845f38, _0x78f7cf) : 0;
    if (_0x56d3a1) {
      _0x58fcaf[_0x56d3a1 >> 2] = _0x469240;
    }
  }
  function _0x2564e4(_0x452ef0, _0x1f1300, _0x461c6c) {
    if (!_0x461c6c) {
      _0x5726bd.recordError(1281);
      return;
    }
    if (_0x452ef0 >= _0x5726bd.counter) {
      _0x5726bd.recordError(1281);
      return;
    }
    _0x452ef0 = _0x5726bd.programs[_0x452ef0];
    if (_0x1f1300 == 35716) {
      var _0x804839 = _0x5dd9d2.getProgramInfoLog(_0x452ef0);
      if (_0x804839 === null) {
        _0x804839 = "(unknown error)";
      }
      _0x58fcaf[_0x461c6c >> 2] = _0x804839.length + 1;
    } else if (_0x1f1300 == 35719) {
      if (!_0x452ef0.maxUniformLength) {
        for (var _0xb2138f = 0; _0xb2138f < _0x5dd9d2.getProgramParameter(_0x452ef0, 35718); ++_0xb2138f) {
          _0x452ef0.maxUniformLength = Math.max(_0x452ef0.maxUniformLength, _0x5dd9d2.getActiveUniform(_0x452ef0, _0xb2138f).name.length + 1);
        }
      }
      _0x58fcaf[_0x461c6c >> 2] = _0x452ef0.maxUniformLength;
    } else if (_0x1f1300 == 35722) {
      if (!_0x452ef0.maxAttributeLength) {
        for (var _0xb2138f = 0; _0xb2138f < _0x5dd9d2.getProgramParameter(_0x452ef0, 35721); ++_0xb2138f) {
          _0x452ef0.maxAttributeLength = Math.max(_0x452ef0.maxAttributeLength, _0x5dd9d2.getActiveAttrib(_0x452ef0, _0xb2138f).name.length + 1);
        }
      }
      _0x58fcaf[_0x461c6c >> 2] = _0x452ef0.maxAttributeLength;
    } else if (_0x1f1300 == 35381) {
      if (!_0x452ef0.maxUniformBlockNameLength) {
        for (var _0xb2138f = 0; _0xb2138f < _0x5dd9d2.getProgramParameter(_0x452ef0, 35382); ++_0xb2138f) {
          _0x452ef0.maxUniformBlockNameLength = Math.max(_0x452ef0.maxUniformBlockNameLength, _0x5dd9d2.getActiveUniformBlockName(_0x452ef0, _0xb2138f).length + 1);
        }
      }
      _0x58fcaf[_0x461c6c >> 2] = _0x452ef0.maxUniformBlockNameLength;
    } else {
      _0x58fcaf[_0x461c6c >> 2] = _0x5dd9d2.getProgramParameter(_0x452ef0, _0x1f1300);
    }
  }
  function _0x3bb5cf(_0x466921, _0x21690e, _0xa1e1db) {
    if (!_0xa1e1db) {
      _0x5726bd.recordError(1281);
      return;
    }
    var _0x4cbd85 = _0x5726bd.queries[_0x466921];
    var _0x32292f = _0x5dd9d2.getQueryParameter(_0x4cbd85, _0x21690e);
    var _0x7321e9;
    if (typeof _0x32292f == "boolean") {
      _0x7321e9 = _0x32292f ? 1 : 0;
    } else {
      _0x7321e9 = _0x32292f;
    }
    _0x58fcaf[_0xa1e1db >> 2] = _0x7321e9;
  }
  function _0x348ff2(_0x2535cb, _0x1a34a0, _0x4b9605) {
    if (!_0x4b9605) {
      _0x5726bd.recordError(1281);
      return;
    }
    _0x58fcaf[_0x4b9605 >> 2] = _0x5dd9d2.getQuery(_0x2535cb, _0x1a34a0);
  }
  function _0x24a91a(_0x369310, _0x55be86, _0x1d5007) {
    if (!_0x1d5007) {
      _0x5726bd.recordError(1281);
      return;
    }
    _0x58fcaf[_0x1d5007 >> 2] = _0x5dd9d2.getRenderbufferParameter(_0x369310, _0x55be86);
  }
  function _0x5bdfef(_0x3fbd4e, _0x589a86, _0x3665ff, _0x2a31d8) {
    var _0x4250b7 = _0x5dd9d2.getShaderInfoLog(_0x5726bd.shaders[_0x3fbd4e]);
    if (_0x4250b7 === null) {
      _0x4250b7 = "(unknown error)";
    }
    var _0x176eb6 = _0x589a86 > 0 && _0x2a31d8 ? _0x5b4754(_0x4250b7, _0x2a31d8, _0x589a86) : 0;
    if (_0x3665ff) {
      _0x58fcaf[_0x3665ff >> 2] = _0x176eb6;
    }
  }
  function _0x4743a2(_0x184de5, _0x238084, _0x9ed491, _0x3440dd) {
    var _0x3e98b3 = _0x5dd9d2.getShaderPrecisionFormat(_0x184de5, _0x238084);
    _0x58fcaf[_0x9ed491 >> 2] = _0x3e98b3.rangeMin;
    _0x58fcaf[_0x9ed491 + 4 >> 2] = _0x3e98b3.rangeMax;
    _0x58fcaf[_0x3440dd >> 2] = _0x3e98b3.precision;
  }
  function _0x5b67b2(_0x31c308, _0x9d800c, _0x4120e8, _0x153ce6) {
    var _0x222be6 = _0x5dd9d2.getShaderSource(_0x5726bd.shaders[_0x31c308]);
    if (!_0x222be6) {
      return;
    }
    var _0x213dd0 = _0x9d800c > 0 && _0x153ce6 ? _0x5b4754(_0x222be6, _0x153ce6, _0x9d800c) : 0;
    if (_0x4120e8) {
      _0x58fcaf[_0x4120e8 >> 2] = _0x213dd0;
    }
  }
  function _0x4f0c54(_0xc47bd7, _0x3ccb35, _0x237f80) {
    if (!_0x237f80) {
      _0x5726bd.recordError(1281);
      return;
    }
    if (_0x3ccb35 == 35716) {
      var _0x29f911 = _0x5dd9d2.getShaderInfoLog(_0x5726bd.shaders[_0xc47bd7]);
      if (_0x29f911 === null) {
        _0x29f911 = "(unknown error)";
      }
      var _0x2aded6 = _0x29f911 ? _0x29f911.length + 1 : 0;
      _0x58fcaf[_0x237f80 >> 2] = _0x2aded6;
    } else if (_0x3ccb35 == 35720) {
      var _0x813004 = _0x5dd9d2.getShaderSource(_0x5726bd.shaders[_0xc47bd7]);
      var _0x31db39 = _0x813004 ? _0x813004.length + 1 : 0;
      _0x58fcaf[_0x237f80 >> 2] = _0x31db39;
    } else {
      _0x58fcaf[_0x237f80 >> 2] = _0x5dd9d2.getShaderParameter(_0x5726bd.shaders[_0xc47bd7], _0x3ccb35);
    }
  }
  function _0xb4567d(_0x1354af) {
    var _0x406ada = _0x5726bd.stringCache[_0x1354af];
    if (!_0x406ada) {
      switch (_0x1354af) {
        case 7939:
          var _0x20e3c8 = _0x5dd9d2.getSupportedExtensions() || [];
          _0x20e3c8 = _0x20e3c8.concat(_0x20e3c8.map(function (_0x5f0ca3) {
            return "GL_" + _0x5f0ca3;
          }));
          _0x406ada = _0x10f513(_0x20e3c8.join(" "));
          break;
        case 7936:
        case 7937:
        case 37445:
        case 37446:
          var _0x32d8fc = _0x5dd9d2.getParameter(_0x1354af);
          if (!_0x32d8fc) {
            _0x5726bd.recordError(1280);
          }
          _0x406ada = _0x32d8fc && _0x10f513(_0x32d8fc);
          break;
        case 7938:
          var _0x296993 = _0x5dd9d2.getParameter(7938);
          if (_0x5726bd.currentContext.version >= 2) {
            _0x296993 = "OpenGL ES 3.0 (" + _0x296993 + ")";
          } else {
            _0x296993 = "OpenGL ES 2.0 (" + _0x296993 + ")";
          }
          _0x406ada = _0x10f513(_0x296993);
          break;
        case 35724:
          var _0x65a9ce = _0x5dd9d2.getParameter(35724);
          var _0x17c657 = /^WebGL GLSL ES ([0-9]\.[0-9][0-9]?)(?:$| .*)/;
          var _0x3221a7 = _0x65a9ce.match(_0x17c657);
          if (_0x3221a7 !== null) {
            if (_0x3221a7[1].length == 3) {
              _0x3221a7[1] = _0x3221a7[1] + "0";
            }
            _0x65a9ce = "OpenGL ES GLSL ES " + _0x3221a7[1] + " (" + _0x65a9ce + ")";
          }
          _0x406ada = _0x10f513(_0x65a9ce);
          break;
        default:
          _0x5726bd.recordError(1280);
      }
      _0x5726bd.stringCache[_0x1354af] = _0x406ada;
    }
    return _0x406ada;
  }
  function _0x238513(_0x27cbeb, _0x1f3a37) {
    if (_0x5726bd.currentContext.version < 2) {
      _0x5726bd.recordError(1282);
      return 0;
    }
    var _0x363af5 = _0x5726bd.stringiCache[_0x27cbeb];
    if (_0x363af5) {
      if (_0x1f3a37 < 0 || _0x1f3a37 >= _0x363af5.length) {
        _0x5726bd.recordError(1281);
        return 0;
      }
      return _0x363af5[_0x1f3a37];
    }
    switch (_0x27cbeb) {
      case 7939:
        var _0x13901b = _0x5dd9d2.getSupportedExtensions() || [];
        _0x13901b = _0x13901b.concat(_0x13901b.map(function (_0x1f8153) {
          return "GL_" + _0x1f8153;
        }));
        _0x13901b = _0x13901b.map(function (_0x383deb) {
          return _0x10f513(_0x383deb);
        });
        _0x363af5 = _0x5726bd.stringiCache[_0x27cbeb] = _0x13901b;
        if (_0x1f3a37 < 0 || _0x1f3a37 >= _0x363af5.length) {
          _0x5726bd.recordError(1281);
          return 0;
        }
        return _0x363af5[_0x1f3a37];
      default:
        _0x5726bd.recordError(1280);
        return 0;
    }
  }
  function _0x38298f(_0x355a37, _0x3e5330, _0x413195) {
    if (!_0x413195) {
      _0x5726bd.recordError(1281);
      return;
    }
    _0x58fcaf[_0x413195 >> 2] = _0x5dd9d2.getTexParameter(_0x355a37, _0x3e5330);
  }
  function _0x10a105(_0x1609a8, _0x5b9135) {
    return _0x5dd9d2.getUniformBlockIndex(_0x5726bd.programs[_0x1609a8], _0x57f36f(_0x5b9135));
  }
  function _0x4f5cc(_0x129d4d, _0x3cedc0, _0x3578e1, _0xb538c3) {
    if (!_0xb538c3) {
      _0x5726bd.recordError(1281);
      return;
    }
    if (_0x3cedc0 > 0 && (_0x3578e1 == 0 || _0xb538c3 == 0)) {
      _0x5726bd.recordError(1281);
      return;
    }
    _0x129d4d = _0x5726bd.programs[_0x129d4d];
    var _0x46f7ad = [];
    for (var _0x5de9a0 = 0; _0x5de9a0 < _0x3cedc0; _0x5de9a0++) {
      _0x46f7ad.push(_0x57f36f(_0x58fcaf[_0x3578e1 + _0x5de9a0 * 4 >> 2]));
    }
    var _0x2deefb = _0x5dd9d2.getUniformIndices(_0x129d4d, _0x46f7ad);
    if (!_0x2deefb) {
      return;
    }
    var _0x28ee85 = _0x2deefb.length;
    for (var _0x5de9a0 = 0; _0x5de9a0 < _0x28ee85; _0x5de9a0++) {
      _0x58fcaf[_0xb538c3 + _0x5de9a0 * 4 >> 2] = _0x2deefb[_0x5de9a0];
    }
  }
  function _0x49eb56(_0x3b95f8, _0x17887b) {
    function _0x262506(_0x33ce9d) {
      return _0x33ce9d.slice(-1) == "]" && _0x33ce9d.lastIndexOf("[");
    }
    _0x17887b = _0x57f36f(_0x17887b);
    if (_0x3b95f8 = _0x5726bd.programs[_0x3b95f8]) {
      var _0x4397a7 = _0x3b95f8.uniformLocsById;
      var _0x5e777f = _0x3b95f8.uniformSizeAndIdsByName;
      var _0x450df0;
      var _0x3de537;
      var _0x1811cf = 0;
      var _0x239a0e = _0x17887b;
      var _0x278580 = _0x262506(_0x17887b);
      if (!_0x4397a7) {
        _0x3b95f8.uniformLocsById = _0x4397a7 = {};
        _0x3b95f8.uniformArrayNamesById = {};
        for (_0x450df0 = 0; _0x450df0 < _0x5dd9d2.getProgramParameter(_0x3b95f8, 35718); ++_0x450df0) {
          var _0x213331 = _0x5dd9d2.getActiveUniform(_0x3b95f8, _0x450df0);
          var _0x2ac52d = _0x213331.name;
          var _0x269964 = _0x213331.size;
          var _0xd544e7 = _0x262506(_0x2ac52d);
          var _0x13032e = _0xd544e7 > 0 ? _0x2ac52d.slice(0, _0xd544e7) : _0x2ac52d;
          var _0x36c4b4 = _0x5e777f[_0x13032e] ? _0x5e777f[_0x13032e][1] : _0x3b95f8.uniformIdCounter;
          _0x3b95f8.uniformIdCounter = Math.max(_0x36c4b4 + _0x269964, _0x3b95f8.uniformIdCounter);
          _0x5e777f[_0x13032e] = [_0x269964, _0x36c4b4];
          for (_0x3de537 = 0; _0x3de537 < _0x269964; ++_0x3de537) {
            _0x4397a7[_0x36c4b4] = _0x3de537;
            _0x3b95f8.uniformArrayNamesById[_0x36c4b4++] = _0x13032e;
          }
        }
      }
      if (_0x278580 > 0) {
        _0x1811cf = _0x3ed55c(_0x17887b.slice(_0x278580 + 1)) >>> 0;
        _0x239a0e = _0x17887b.slice(0, _0x278580);
      }
      var _0x12fff2 = _0x5e777f[_0x239a0e];
      if (_0x12fff2 && _0x1811cf < _0x12fff2[0]) {
        _0x1811cf += _0x12fff2[1];
        if (_0x4397a7[_0x1811cf] = _0x4397a7[_0x1811cf] || _0x5dd9d2.getUniformLocation(_0x3b95f8, _0x17887b)) {
          return _0x1811cf;
        }
      }
    } else {
      _0x5726bd.recordError(1281);
    }
    return -1;
  }
  function _0x167646(_0x365063) {
    var _0x1d1e89 = _0x5dd9d2.currentProgram;
    if (_0x1d1e89) {
      var _0x3f3a4b = _0x1d1e89.uniformLocsById[_0x365063];
      if (typeof _0x3f3a4b === "number") {
        _0x1d1e89.uniformLocsById[_0x365063] = _0x3f3a4b = _0x5dd9d2.getUniformLocation(_0x1d1e89, _0x1d1e89.uniformArrayNamesById[_0x365063] + (_0x3f3a4b > 0 ? "[" + _0x3f3a4b + "]" : ""));
      }
      return _0x3f3a4b;
    } else {
      _0x5726bd.recordError(1282);
    }
  }
  function _0xdd84ba(_0x43b92b, _0x163efa, _0x51172c, _0x20e5ec) {
    if (!_0x51172c) {
      _0x5726bd.recordError(1281);
      return;
    }
    _0x43b92b = _0x5726bd.programs[_0x43b92b];
    var _0x56354f = _0x5dd9d2.getUniform(_0x43b92b, _0x167646(_0x163efa));
    if (typeof _0x56354f == "number" || typeof _0x56354f == "boolean") {
      switch (_0x20e5ec) {
        case 0:
          _0x58fcaf[_0x51172c >> 2] = _0x56354f;
          break;
        case 2:
          _0x59876a[_0x51172c >> 2] = _0x56354f;
          break;
      }
    } else {
      for (var _0x70273f = 0; _0x70273f < _0x56354f.length; _0x70273f++) {
        switch (_0x20e5ec) {
          case 0:
            _0x58fcaf[_0x51172c + _0x70273f * 4 >> 2] = _0x56354f[_0x70273f];
            break;
          case 2:
            _0x59876a[_0x51172c + _0x70273f * 4 >> 2] = _0x56354f[_0x70273f];
            break;
        }
      }
    }
  }
  function _0x10450c(_0x861d86, _0x4938ba, _0x5a39c0) {
    _0xdd84ba(_0x861d86, _0x4938ba, _0x5a39c0, 0);
  }
  function _0x51fb89(_0x316858, _0x2c9175, _0x23a4c, _0x57ae19) {
    if (!_0x23a4c) {
      _0x5726bd.recordError(1281);
      return;
    }
    if (_0x5726bd.currentContext.clientBuffers[_0x316858].enabled) {
      _0x1717db("glGetVertexAttrib*v on client-side array: not supported, bad data returned");
    }
    var _0x3c5d2d = _0x5dd9d2.getVertexAttrib(_0x316858, _0x2c9175);
    if (_0x2c9175 == 34975) {
      _0x58fcaf[_0x23a4c >> 2] = _0x3c5d2d && _0x3c5d2d.name;
    } else if (typeof _0x3c5d2d == "number" || typeof _0x3c5d2d == "boolean") {
      switch (_0x57ae19) {
        case 0:
          _0x58fcaf[_0x23a4c >> 2] = _0x3c5d2d;
          break;
        case 2:
          _0x59876a[_0x23a4c >> 2] = _0x3c5d2d;
          break;
        case 5:
          _0x58fcaf[_0x23a4c >> 2] = Math.fround(_0x3c5d2d);
          break;
      }
    } else {
      for (var _0x5c356d = 0; _0x5c356d < _0x3c5d2d.length; _0x5c356d++) {
        switch (_0x57ae19) {
          case 0:
            _0x58fcaf[_0x23a4c + _0x5c356d * 4 >> 2] = _0x3c5d2d[_0x5c356d];
            break;
          case 2:
            _0x59876a[_0x23a4c + _0x5c356d * 4 >> 2] = _0x3c5d2d[_0x5c356d];
            break;
          case 5:
            _0x58fcaf[_0x23a4c + _0x5c356d * 4 >> 2] = Math.fround(_0x3c5d2d[_0x5c356d]);
            break;
        }
      }
    }
  }
  function _0x1e0562(_0x11032e, _0xbcad70, _0x1679cd) {
    _0x51fb89(_0x11032e, _0xbcad70, _0x1679cd, 5);
  }
  function _0x386a01(_0x1b947f, _0x2efb66, _0x4463e8) {
    var _0x48dd5a = _0x542a0b[_0x2efb66];
    for (var _0x5ea63c = 0; _0x5ea63c < _0x2efb66; _0x5ea63c++) {
      _0x48dd5a[_0x5ea63c] = _0x58fcaf[_0x4463e8 + _0x5ea63c * 4 >> 2];
    }
    _0x5dd9d2.invalidateFramebuffer(_0x1b947f, _0x48dd5a);
  }
  function _0x211947(_0x13e2b0) {
    return _0x5dd9d2.isEnabled(_0x13e2b0);
  }
  function _0x3a7c83(_0x1a36fc) {
    var _0x157230 = _0x5726bd.vaos[_0x1a36fc];
    if (!_0x157230) {
      return 0;
    }
    return _0x5dd9d2.isVertexArray(_0x157230);
  }
  function _0x57d756(_0x184dc1) {
    _0x184dc1 = _0x5726bd.programs[_0x184dc1];
    _0x5dd9d2.linkProgram(_0x184dc1);
    _0x184dc1.uniformLocsById = 0;
    _0x184dc1.uniformSizeAndIdsByName = {};
    [_0x184dc1.vs, _0x184dc1.fs].forEach(function (_0x593adb) {
      Object.keys(_0x593adb.explicitUniformLocations).forEach(function (_0x45f3e3) {
        var _0x174b3f = _0x593adb.explicitUniformLocations[_0x45f3e3];
        _0x184dc1.uniformSizeAndIdsByName[_0x45f3e3] = [1, _0x174b3f];
        _0x184dc1.uniformIdCounter = Math.max(_0x184dc1.uniformIdCounter, _0x174b3f + 1);
      });
    });
    function _0x1e6ac9(_0x1ec868, _0xced0a7) {
      Object.keys(_0xced0a7).forEach(function (_0x37c360) {
        _0x1ec868[_0x37c360] = _0xced0a7[_0x37c360];
      });
    }
    _0x184dc1.explicitUniformBindings = {};
    _0x184dc1.explicitSamplerBindings = {};
    [_0x184dc1.vs, _0x184dc1.fs].forEach(function (_0x2606cc) {
      _0x1e6ac9(_0x184dc1.explicitUniformBindings, _0x2606cc.explicitUniformBindings);
      _0x1e6ac9(_0x184dc1.explicitSamplerBindings, _0x2606cc.explicitSamplerBindings);
    });
    _0x184dc1.explicitProgramBindingsApplied = 0;
  }
  function _0x145ab8(_0x12efed, _0x4cbf55, _0x1def39, _0x44c438) {
    if (_0x44c438 != 26 && _0x44c438 != 10) {
      _0x1717db("glMapBufferRange is only supported when access is MAP_WRITE|INVALIDATE_BUFFER");
      return 0;
    }
    if (!_0x1a5319(_0x12efed)) {
      _0x5726bd.recordError(1280);
      _0x1717db("GL_INVALID_ENUM in glMapBufferRange");
      return 0;
    }
    var _0x80893e = _0x58620b(_0x1def39);
    if (!_0x80893e) {
      return 0;
    }
    _0x5726bd.mappedBuffers[_0x5c69f9(_0x12efed)] = {
      offset: _0x4cbf55,
      length: _0x1def39,
      mem: _0x80893e,
      access: _0x44c438
    };
    return _0x80893e;
  }
  function _0x5dfbcd(_0x405450, _0x13232e) {
    if (_0x405450 == 3317) {
      _0x5726bd.unpackAlignment = _0x13232e;
    }
    _0x5dd9d2.pixelStorei(_0x405450, _0x13232e);
  }
  function _0x2d5f39(_0x323ac2, _0x1e5f61) {
    _0x5dd9d2.polygonOffset(_0x323ac2, _0x1e5f61);
  }
  function _0x1ef28a(_0x55aade, _0x138fd8, _0x355f2b, _0x2ca06f) {
    _0x5726bd.recordError(1280);
  }
  function _0x733236(_0x2bb04e, _0x4929f1, _0x22b8d2) {
    _0x5726bd.recordError(1280);
  }
  function _0x2cc4bc(_0x3f7b88) {
    _0x5dd9d2.readBuffer(_0x3f7b88);
  }
  function _0x500037(_0xf1da0f, _0x35c845, _0x337b49, _0x34dd57) {
    function _0x25478d(_0x2c5188, _0x47522a) {
      return _0x2c5188 + _0x47522a - 1 & -_0x47522a;
    }
    var _0x571e91 = _0xf1da0f * _0x337b49;
    var _0x3e74a2 = _0x25478d(_0x571e91, _0x34dd57);
    return _0x35c845 * _0x3e74a2;
  }
  function _0x1e2025(_0x464f1f) {
    var _0x4436ff = {
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
    return _0x4436ff[_0x464f1f - 6402] || 1;
  }
  function _0x382c21(_0x1333dc) {
    _0x1333dc -= 5120;
    if (_0x1333dc == 0) {
      return _0x5a8ff8;
    }
    if (_0x1333dc == 1) {
      return _0x479b38;
    }
    if (_0x1333dc == 2) {
      return _0x121e6d;
    }
    if (_0x1333dc == 4) {
      return _0x58fcaf;
    }
    if (_0x1333dc == 6) {
      return _0x59876a;
    }
    if (_0x1333dc == 5 || _0x1333dc == 28922 || _0x1333dc == 28520 || _0x1333dc == 30779 || _0x1333dc == 30782) {
      return _0x59624f;
    }
    return _0x4429d9;
  }
  function _0x2e48d8(_0x4d1e9a) {
    return 31 - Math.clz32(_0x4d1e9a.BYTES_PER_ELEMENT);
  }
  function _0x2365c7(_0x55d449, _0x33225e, _0x41ba97, _0x53c0d8, _0x219981, _0x37fbfa) {
    var _0x1b5440 = _0x382c21(_0x55d449);
    var _0x3d4943 = _0x2e48d8(_0x1b5440);
    var _0x2467a5 = 1 << _0x3d4943;
    var _0x4d5d3d = _0x1e2025(_0x33225e) * _0x2467a5;
    var _0x55a8a8 = _0x500037(_0x41ba97, _0x53c0d8, _0x4d5d3d, _0x5726bd.unpackAlignment);
    return _0x1b5440.subarray(_0x219981 >> _0x3d4943, _0x219981 + _0x55a8a8 >> _0x3d4943);
  }
  function _0x378a39(_0x3e0506, _0x27dfb8, _0x5665c0, _0xa2ff42, _0x41d6a9, _0x4b58e5, _0x13b126) {
    if (_0x5726bd.currentContext.version >= 2) {
      if (_0x5dd9d2.currentPixelPackBufferBinding) {
        _0x5dd9d2.readPixels(_0x3e0506, _0x27dfb8, _0x5665c0, _0xa2ff42, _0x41d6a9, _0x4b58e5, _0x13b126);
      } else {
        var _0x49f4b4 = _0x382c21(_0x4b58e5);
        _0x5dd9d2.readPixels(_0x3e0506, _0x27dfb8, _0x5665c0, _0xa2ff42, _0x41d6a9, _0x4b58e5, _0x49f4b4, _0x13b126 >> _0x2e48d8(_0x49f4b4));
      }
      return;
    }
    var _0x4ba0b4 = _0x2365c7(_0x4b58e5, _0x41d6a9, _0x5665c0, _0xa2ff42, _0x13b126, _0x41d6a9);
    if (!_0x4ba0b4) {
      _0x5726bd.recordError(1280);
      return;
    }
    _0x5dd9d2.readPixels(_0x3e0506, _0x27dfb8, _0x5665c0, _0xa2ff42, _0x41d6a9, _0x4b58e5, _0x4ba0b4);
  }
  function _0x365117(_0xe2d3cb, _0x3d1e94, _0x31b034, _0x8f553) {
    _0x5dd9d2.renderbufferStorage(_0xe2d3cb, _0x3d1e94, _0x31b034, _0x8f553);
  }
  function _0x467288(_0x574e55, _0x5c1851, _0x1d3290, _0x2d58be, _0x25e998) {
    _0x5dd9d2.renderbufferStorageMultisample(_0x574e55, _0x5c1851, _0x1d3290, _0x2d58be, _0x25e998);
  }
  function _0x38a86e(_0x4426d0, _0x21d078, _0x11b26d) {
    _0x5dd9d2.samplerParameteri(_0x5726bd.samplers[_0x4426d0], _0x21d078, _0x11b26d);
  }
  function _0x174fcc(_0x3a2a68, _0x26b6a4, _0x32e125, _0x33e227) {
    _0x5dd9d2.scissor(_0x3a2a68, _0x26b6a4, _0x32e125, _0x33e227);
  }
  function _0x1708cd(_0x484852, _0x34e66b, _0x39ace9 = "(", _0x244c1d = ")") {
    var _0x29b049 = 0;
    for (; _0x34e66b < _0x484852.length; ++_0x34e66b) {
      if (_0x484852[_0x34e66b] == _0x39ace9) {
        ++_0x29b049;
      }
      if (_0x484852[_0x34e66b] == _0x244c1d && --_0x29b049 == 0) {
        return _0x34e66b;
      }
    }
  }
  function _0x1eb179(_0x2c412e) {
    var _0x277460 = 0;
    var _0x3d3050 = _0x2c412e.length;
    var _0x541ce8 = "";
    var _0x3c87d7 = [1];
    var _0x135798 = {
      defined: function (_0x258fac) {
        if (_0x135798[_0x258fac[0]]) {
          return 1;
        } else {
          return 0;
        }
      },
      GL_FRAGMENT_PRECISION_HIGH: function () {
        return 1;
      }
    };
    function _0x30fbb7(_0x35b182, _0x58afea) {
      return !(_0x35b182.charCodeAt(_0x58afea) > 32);
    }
    function _0x187ee8(_0x3cfef6, _0x4039cb) {
      while (!_0x30fbb7(_0x3cfef6, _0x4039cb)) {
        ++_0x4039cb;
      }
      return _0x4039cb;
    }
    function _0xf6f8ba(_0x1a5ec2, _0x3e0574) {
      var _0x461f60 = _0x1a5ec2.charCodeAt(_0x3e0574);
      if (_0x461f60 > 32) {
        if (_0x461f60 < 48) {
          return 1;
        }
        if (_0x461f60 < 58) {
          return 2;
        }
        if (_0x461f60 < 65) {
          return 1;
        }
        if (_0x461f60 < 91 || _0x461f60 == 95) {
          return 3;
        }
        if (_0x461f60 < 97) {
          return 1;
        }
        if (_0x461f60 < 123) {
          return 3;
        }
        return 1;
      }
      if (_0x461f60 < 33) {
        return 0;
      } else {
        return 4;
      }
    }
    function _0x17c57e(_0x13ca9d, _0x2150a0) {
      var _0x405bd9 = [];
      var _0x4b752b = _0x13ca9d.length;
      for (var _0x133e9b = 0; _0x133e9b <= _0x4b752b; ++_0x133e9b) {
        var _0x5991f0 = _0xf6f8ba(_0x13ca9d, _0x133e9b);
        if (_0x5991f0 == 2 || _0x5991f0 == 3) {
          for (var _0x7869fe = _0x133e9b + 1; _0x7869fe <= _0x4b752b; ++_0x7869fe) {
            var _0x257dd2 = _0xf6f8ba(_0x13ca9d, _0x7869fe);
            if (_0x257dd2 != _0x5991f0 && (_0x257dd2 != 2 || _0x5991f0 != 3)) {
              _0x405bd9.push(_0x13ca9d.substring(_0x133e9b, _0x7869fe));
              _0x133e9b = _0x7869fe - 1;
              break;
            }
          }
        } else if (_0x5991f0 == 1) {
          var _0x25026c = _0x13ca9d.substr(_0x133e9b, 2);
          if (["<=", ">=", "==", "!=", "&&", "||"].includes(_0x25026c)) {
            _0x405bd9.push(_0x25026c);
            ++_0x133e9b;
          } else {
            _0x405bd9.push(_0x13ca9d[_0x133e9b]);
          }
        }
      }
      return _0x405bd9;
    }
    function _0x550990(_0x155618, _0x10165f, _0x2f82d4 = _0x155618.length) {
      var _0x2bb140 = _0x155618.length;
      var _0x24f51f = "";
      for (var _0x29154c = _0x10165f; _0x29154c < _0x2f82d4; ++_0x29154c) {
        var _0x5e37ed = _0xf6f8ba(_0x155618, _0x29154c);
        if (_0x5e37ed == 3) {
          for (var _0x321932 = _0x29154c + 1; _0x321932 <= _0x2f82d4; ++_0x321932) {
            var _0x27c1f3 = _0xf6f8ba(_0x155618, _0x321932);
            if (_0x27c1f3 != 2 && _0x27c1f3 != 3) {
              var _0x3113dd = _0x155618.substring(_0x29154c, _0x321932);
              var _0x1cd987 = _0x135798[_0x3113dd];
              if (_0x1cd987) {
                var _0x5430fe = _0x155618.substring(_0x10165f, _0x29154c);
                if (_0x1cd987.length && _0x155618[_0x321932] == "(") {
                  var _0x378583 = _0x1708cd(_0x155618, _0x321932);
                  _0x5430fe += _0x1cd987(_0x155618.substring(_0x321932 + 1, _0x378583).split(",")) + _0x155618.substring(_0x378583 + 1, _0x2f82d4);
                } else {
                  _0x5430fe += _0x1cd987() + _0x155618.substring(_0x321932, _0x2f82d4);
                }
                return _0x550990(_0x5430fe, 0);
              } else {
                _0x24f51f += _0x3113dd;
                _0x29154c = _0x321932 - 1;
                break;
              }
            }
          }
        } else {
          _0x24f51f += _0x155618[_0x29154c];
        }
      }
      return _0x24f51f;
    }
    function _0xad187(_0x20cdd3) {
      while (_0x20cdd3.length > 1 || typeof _0x20cdd3[0] != "function") {
        _0x20cdd3 = function (_0xfb78ad) {
          var _0x1848ab;
          var _0x509f29;
          var _0x140a2c;
          var _0x151379 = -2;
          for (_0x509f29 = 0; _0x509f29 < _0xfb78ad.length; ++_0x509f29) {
            if ((_0x140a2c = ["*", "/", "+", "-", "!", "<", "<=", ">", ">=", "==", "!=", "&&", "||", "("].indexOf(_0xfb78ad[_0x509f29])) > _0x151379) {
              _0x1848ab = _0x509f29;
              _0x151379 = _0x140a2c;
            }
          }
          if (_0x151379 == 13) {
            var _0x509f29 = _0x1708cd(_0xfb78ad, _0x1848ab);
            if (_0x509f29) {
              _0xfb78ad.splice(_0x1848ab, _0x509f29 + 1 - _0x1848ab, _0xad187(_0xfb78ad.slice(_0x1848ab + 1, _0x509f29)));
              return _0xfb78ad;
            }
          }
          if (_0x151379 == 4) {
            _0x1848ab = _0xfb78ad.lastIndexOf("!");
            var _0xc940f9 = _0xad187(_0xfb78ad.slice(_0x1848ab + 1, _0x1848ab + 2));
            _0xfb78ad.splice(_0x1848ab, 2, function () {
              return !_0xc940f9();
            });
            return _0xfb78ad;
          }
          if (_0x151379 >= 0) {
            var _0x234eea = _0xad187(_0xfb78ad.slice(0, _0x1848ab));
            var _0x5e7dc7 = _0xad187(_0xfb78ad.slice(_0x1848ab + 1));
            switch (_0xfb78ad[_0x1848ab]) {
              case "&&":
                return [function () {
                  return _0x234eea() && _0x5e7dc7();
                }];
              case "||":
                return [function () {
                  return _0x234eea() || _0x5e7dc7();
                }];
              case "==":
                return [function () {
                  return _0x234eea() == _0x5e7dc7();
                }];
              case "!=":
                return [function () {
                  return _0x234eea() != _0x5e7dc7();
                }];
              case "<":
                return [function () {
                  return _0x234eea() < _0x5e7dc7();
                }];
              case "<=":
                return [function () {
                  return _0x234eea() <= _0x5e7dc7();
                }];
              case ">":
                return [function () {
                  return _0x234eea() > _0x5e7dc7();
                }];
              case ">=":
                return [function () {
                  return _0x234eea() >= _0x5e7dc7();
                }];
              case "+":
                return [function () {
                  return _0x234eea() + _0x5e7dc7();
                }];
              case "-":
                return [function () {
                  return _0x234eea() - _0x5e7dc7();
                }];
              case "*":
                return [function () {
                  return _0x234eea() * _0x5e7dc7();
                }];
              case "/":
                return [function () {
                  return Math.floor(_0x234eea() / _0x5e7dc7());
                }];
            }
          }
          var _0x3abf51 = _0x3ed55c(_0xfb78ad[_0x1848ab]);
          return [function () {
            return _0x3abf51;
          }];
        }(_0x20cdd3);
      }
      return _0x20cdd3[0];
    }
    for (; _0x277460 < _0x3d3050; ++_0x277460) {
      var _0x438110 = _0x277460;
      _0x277460 = _0x2c412e.indexOf("\n", _0x277460);
      if (_0x277460 < 0) {
        _0x277460 = _0x3d3050;
      }
      for (var _0xb916a5 = _0x438110; _0xb916a5 < _0x277460 && _0x30fbb7(_0x2c412e, _0xb916a5); ++_0xb916a5);
      var _0x32689f = _0x3c87d7[_0x3c87d7.length - 1];
      if (_0x2c412e[_0xb916a5] != "#") {
        if (_0x32689f) {
          _0x541ce8 += _0x550990(_0x2c412e, _0x438110, _0x277460) + "\n";
        }
        continue;
      }
      var _0x33312c = _0x187ee8(_0x2c412e, _0xb916a5);
      var _0x3c64ec = _0x2c412e.substring(_0xb916a5 + 1, _0x33312c);
      var _0x3cb019 = _0x2c412e.substring(_0x33312c, _0x277460).trim();
      switch (_0x3c64ec) {
        case "if":
          var _0x4f15ba = _0x17c57e(_0x550990(_0x3cb019, 0));
          var _0x5cedb3 = _0xad187(_0x4f15ba);
          var _0x41e15b = _0x5cedb3();
          _0x3c87d7.push(!!_0x41e15b * _0x3c87d7[_0x3c87d7.length - 1]);
          break;
        case "ifdef":
          _0x3c87d7.push(!!_0x135798[_0x3cb019] * _0x3c87d7[_0x3c87d7.length - 1]);
          break;
        case "ifndef":
          _0x3c87d7.push(!_0x135798[_0x3cb019] * _0x3c87d7[_0x3c87d7.length - 1]);
          break;
        case "else":
          _0x3c87d7[_0x3c87d7.length - 1] = 1 - _0x3c87d7[_0x3c87d7.length - 1];
          break;
        case "endif":
          _0x3c87d7.pop();
          break;
        case "define":
          if (_0x32689f) {
            var _0xfa8360 = _0x3cb019.indexOf("(");
            var _0x443756 = _0x187ee8(_0x3cb019, 0);
            if (_0x443756 < _0xfa8360) {
              _0xfa8360 = 0;
            }
            if (_0xfa8360 > 0) {
              var _0x1c04ea = _0x3cb019.indexOf(")", _0xfa8360);
              let _0x30d761 = _0x3cb019.substring(_0xfa8360 + 1, _0x1c04ea).split(",").map(_0x19c37e => _0x19c37e.trim());
              let _0x3fd67 = _0x17c57e(_0x3cb019.substring(_0x1c04ea + 1).trim());
              _0x135798[_0x3cb019.substring(0, _0xfa8360)] = function (_0x1cfadf) {
                var _0x4392cf = "";
                _0x3fd67.forEach(_0x4b7eef => {
                  var _0x3a32b1 = _0x30d761.indexOf(_0x4b7eef);
                  _0x4392cf += _0x3a32b1 >= 0 ? _0x1cfadf[_0x3a32b1] : _0x4b7eef;
                });
                return _0x4392cf;
              };
            } else {
              let _0x387fde = _0x550990(_0x3cb019.substring(_0x443756 + 1).trim(), 0);
              _0x135798[_0x3cb019.substring(0, _0x443756)] = function () {
                return _0x387fde;
              };
            }
          }
          break;
        case "undef":
          if (_0x32689f) {
            delete _0x135798[_0x3cb019];
          }
          break;
        default:
          if (_0x3c64ec != "version" && _0x3c64ec != "pragma" && _0x3c64ec != "extension") {}
          _0x541ce8 += _0x550990(_0x2c412e, _0x438110, _0x277460) + "\n";
      }
    }
    return _0x541ce8;
  }
  function _0x3cd32c(_0x59f324) {
    var _0x511381 = 0;
    var _0x51aecb = "";
    var _0x1f06b7;
    var _0x5dcc67;
    var _0x406f99 = _0x59f324.length;
    for (; _0x511381 < _0x406f99; ++_0x511381) {
      _0x1f06b7 = _0x59f324[_0x511381];
      if (_0x1f06b7 == "/") {
        _0x5dcc67 = _0x59f324[_0x511381 + 1];
        if (_0x5dcc67 == "/") {
          while (_0x511381 < _0x406f99 && _0x59f324[_0x511381 + 1] != "\n") {
            ++_0x511381;
          }
        } else if (_0x5dcc67 == "*") {
          while (_0x511381 < _0x406f99 && (_0x59f324[_0x511381 - 1] != "*" || _0x59f324[_0x511381] != "/")) {
            ++_0x511381;
          }
        } else {
          _0x51aecb += _0x1f06b7;
        }
      } else {
        _0x51aecb += _0x1f06b7;
      }
    }
    return _0x51aecb;
  }
  function _0x48d38b(_0x1c5900, _0x419679, _0x4e0782, _0x482cf7) {
    var _0x11823e = _0x5726bd.getSource(_0x1c5900, _0x419679, _0x4e0782, _0x482cf7);
    _0x11823e = _0x1eb179(_0x3cd32c(_0x11823e));
    var _0x563555 = /layout\s*\(\s*location\s*=\s*(-?\d+)\s*\)\s*(uniform\s+((lowp|mediump|highp)\s+)?\w+\s+(\w+))/g;
    var _0x5a2cd6 = {};
    var _0x2e3abb;
    while (_0x2e3abb = _0x563555.exec(_0x11823e)) {
      _0x5a2cd6[_0x2e3abb[5]] = _0x3ed55c(_0x2e3abb[1]);
      if (!(_0x5a2cd6[_0x2e3abb[5]] >= 0) || !(_0x5a2cd6[_0x2e3abb[5]] < 1048576)) {
        console.error("Specified an out of range layout(location=x) directive \"" + _0x5a2cd6[_0x2e3abb[5]] + "\"! (" + _0x2e3abb[0] + ")");
        _0x5726bd.recordError(1281);
        return;
      }
    }
    _0x11823e = _0x11823e.replace(_0x563555, "$2");
    _0x5726bd.shaders[_0x1c5900].explicitUniformLocations = _0x5a2cd6;
    var _0x375bd4 = /layout\s*\(.*?binding\s*=\s*(-?\d+).*?\)\s*uniform\s+(\w+)\s+(\w+)?/g;
    var _0x3c50d6 = {};
    var _0x46aaa9 = {};
    var _0xe2e3ec;
    while (_0xe2e3ec = _0x375bd4.exec(_0x11823e)) {
      var _0xf180d = 1;
      for (var _0x3e8225 = _0xe2e3ec.index; _0x3e8225 < _0x11823e.length && _0x11823e[_0x3e8225] != ";"; ++_0x3e8225) {
        if (_0x11823e[_0x3e8225] == "[") {
          _0xf180d = _0x3ed55c(_0x11823e.slice(_0x3e8225 + 1));
          break;
        }
        if (_0x11823e[_0x3e8225] == "{") {
          _0x3e8225 = _0x1708cd(_0x11823e, _0x3e8225, "{", "}") - 1;
        }
      }
      var _0x3c6e3b = _0x3ed55c(_0xe2e3ec[1]);
      var _0x366dc1 = 34930;
      if (_0xe2e3ec[3] && _0xe2e3ec[2].indexOf("sampler") != -1) {
        _0x3c50d6[_0xe2e3ec[3]] = [_0x3c6e3b, _0xf180d];
      } else {
        _0x366dc1 = 35374;
        _0x46aaa9[_0xe2e3ec[2]] = [_0x3c6e3b, _0xf180d];
      }
      var _0x24012b = _0x5dd9d2.getParameter(_0x366dc1);
      if (!(_0x3c6e3b >= 0) || !(_0x3c6e3b + _0xf180d <= _0x24012b)) {
        console.error("Specified an out of range layout(binding=x) directive \"" + _0x3c6e3b + "\"! (" + _0xe2e3ec[0] + "). Valid range is [0, " + _0x24012b + "-1]");
        _0x5726bd.recordError(1281);
        return;
      }
    }
    _0x11823e = _0x11823e.replace(/layout\s*\(.*?binding\s*=\s*([-\d]+).*?\)/g, "");
    _0x11823e = _0x11823e.replace(/(layout\s*\((.*?)),\s*binding\s*=\s*([-\d]+)\)/g, "$1)");
    _0x11823e = _0x11823e.replace(/layout\s*\(\s*binding\s*=\s*([-\d]+)\s*,(.*?)\)/g, "layout($2)");
    _0x5726bd.shaders[_0x1c5900].explicitSamplerBindings = _0x3c50d6;
    _0x5726bd.shaders[_0x1c5900].explicitUniformBindings = _0x46aaa9;
    _0x5dd9d2.shaderSource(_0x5726bd.shaders[_0x1c5900], _0x11823e);
  }
  function _0x172e30(_0x4e16e5, _0x40684a, _0x1391d5, _0x89bcb4) {
    _0x5dd9d2.stencilFuncSeparate(_0x4e16e5, _0x40684a, _0x1391d5, _0x89bcb4);
  }
  function _0x42c28d(_0x26edcd) {
    _0x5dd9d2.stencilMask(_0x26edcd);
  }
  function _0x2aa39f(_0x529aea, _0x575d00, _0x7c5d34, _0x190791) {
    _0x5dd9d2.stencilOpSeparate(_0x529aea, _0x575d00, _0x7c5d34, _0x190791);
  }
  function _0x1e059c(_0x47e4f7, _0x54e637, _0x48fa0a, _0x32e2c9, _0x38580b, _0x57c028, _0x4b0cba, _0x8fb24f, _0x4cad2e) {
    if (_0x5726bd.currentContext.version >= 2) {
      if (_0x5dd9d2.currentPixelUnpackBufferBinding) {
        _0x5dd9d2.texImage2D(_0x47e4f7, _0x54e637, _0x48fa0a, _0x32e2c9, _0x38580b, _0x57c028, _0x4b0cba, _0x8fb24f, _0x4cad2e);
      } else if (_0x4cad2e) {
        var _0x107402 = _0x382c21(_0x8fb24f);
        _0x5dd9d2.texImage2D(_0x47e4f7, _0x54e637, _0x48fa0a, _0x32e2c9, _0x38580b, _0x57c028, _0x4b0cba, _0x8fb24f, _0x107402, _0x4cad2e >> _0x2e48d8(_0x107402));
      } else {
        _0x5dd9d2.texImage2D(_0x47e4f7, _0x54e637, _0x48fa0a, _0x32e2c9, _0x38580b, _0x57c028, _0x4b0cba, _0x8fb24f, null);
      }
      return;
    }
    _0x5dd9d2.texImage2D(_0x47e4f7, _0x54e637, _0x48fa0a, _0x32e2c9, _0x38580b, _0x57c028, _0x4b0cba, _0x8fb24f, _0x4cad2e ? _0x2365c7(_0x8fb24f, _0x4b0cba, _0x32e2c9, _0x38580b, _0x4cad2e, _0x48fa0a) : null);
  }
  function _0x2a624f(_0x58ebf2, _0x19425c, _0x374643, _0x29faac, _0x4bc283, _0x3a484f, _0x138ef4, _0x44d540, _0x19bea9, _0x52edc5) {
    if (_0x5dd9d2.currentPixelUnpackBufferBinding) {
      _0x5dd9d2.texImage3D(_0x58ebf2, _0x19425c, _0x374643, _0x29faac, _0x4bc283, _0x3a484f, _0x138ef4, _0x44d540, _0x19bea9, _0x52edc5);
    } else if (_0x52edc5) {
      var _0x2e7b51 = _0x382c21(_0x19bea9);
      _0x5dd9d2.texImage3D(_0x58ebf2, _0x19425c, _0x374643, _0x29faac, _0x4bc283, _0x3a484f, _0x138ef4, _0x44d540, _0x19bea9, _0x2e7b51, _0x52edc5 >> _0x2e48d8(_0x2e7b51));
    } else {
      _0x5dd9d2.texImage3D(_0x58ebf2, _0x19425c, _0x374643, _0x29faac, _0x4bc283, _0x3a484f, _0x138ef4, _0x44d540, _0x19bea9, null);
    }
  }
  function _0x3e57b8(_0x303f82, _0x3070f3, _0x19c5d6) {
    _0x5dd9d2.texParameterf(_0x303f82, _0x3070f3, _0x19c5d6);
  }
  function _0x590c20(_0x1ac451, _0x100c2e, _0x21832c) {
    _0x5dd9d2.texParameteri(_0x1ac451, _0x100c2e, _0x21832c);
  }
  function _0xeeca0f(_0x50014e, _0x1ed3dd, _0x289047) {
    var _0xab0ba7 = _0x58fcaf[_0x289047 >> 2];
    _0x5dd9d2.texParameteri(_0x50014e, _0x1ed3dd, _0xab0ba7);
  }
  function _0x55ff12(_0x47a4eb, _0x2ae3d0, _0x1e2f32, _0x3ab5bb, _0x506c45) {
    _0x5dd9d2.texStorage2D(_0x47a4eb, _0x2ae3d0, _0x1e2f32, _0x3ab5bb, _0x506c45);
  }
  function _0x36530a(_0x3025d2, _0x43834b, _0x251114, _0x5a28ba, _0x5f9f33, _0x513893) {
    _0x5dd9d2.texStorage3D(_0x3025d2, _0x43834b, _0x251114, _0x5a28ba, _0x5f9f33, _0x513893);
  }
  function _0x3f113e(_0x3d012c, _0x3b8164, _0x515633, _0x492eab, _0x30e41a, _0x1f7e56, _0x29e5ab, _0x2a422e, _0x2f9835) {
    if (_0x5726bd.currentContext.version >= 2) {
      if (_0x5dd9d2.currentPixelUnpackBufferBinding) {
        _0x5dd9d2.texSubImage2D(_0x3d012c, _0x3b8164, _0x515633, _0x492eab, _0x30e41a, _0x1f7e56, _0x29e5ab, _0x2a422e, _0x2f9835);
      } else if (_0x2f9835) {
        var _0x5edf10 = _0x382c21(_0x2a422e);
        _0x5dd9d2.texSubImage2D(_0x3d012c, _0x3b8164, _0x515633, _0x492eab, _0x30e41a, _0x1f7e56, _0x29e5ab, _0x2a422e, _0x5edf10, _0x2f9835 >> _0x2e48d8(_0x5edf10));
      } else {
        _0x5dd9d2.texSubImage2D(_0x3d012c, _0x3b8164, _0x515633, _0x492eab, _0x30e41a, _0x1f7e56, _0x29e5ab, _0x2a422e, null);
      }
      return;
    }
    var _0x706a71 = null;
    if (_0x2f9835) {
      _0x706a71 = _0x2365c7(_0x2a422e, _0x29e5ab, _0x30e41a, _0x1f7e56, _0x2f9835, 0);
    }
    _0x5dd9d2.texSubImage2D(_0x3d012c, _0x3b8164, _0x515633, _0x492eab, _0x30e41a, _0x1f7e56, _0x29e5ab, _0x2a422e, _0x706a71);
  }
  function _0x5f489f(_0x26ab87, _0x1e9164, _0x102da8, _0x3259bb, _0x5a3916, _0x3d3154, _0x160754, _0x3ecb5f, _0x417f08, _0x3cb36a, _0x2971a3) {
    if (_0x5dd9d2.currentPixelUnpackBufferBinding) {
      _0x5dd9d2.texSubImage3D(_0x26ab87, _0x1e9164, _0x102da8, _0x3259bb, _0x5a3916, _0x3d3154, _0x160754, _0x3ecb5f, _0x417f08, _0x3cb36a, _0x2971a3);
    } else if (_0x2971a3) {
      var _0x25a477 = _0x382c21(_0x3cb36a);
      _0x5dd9d2.texSubImage3D(_0x26ab87, _0x1e9164, _0x102da8, _0x3259bb, _0x5a3916, _0x3d3154, _0x160754, _0x3ecb5f, _0x417f08, _0x3cb36a, _0x25a477, _0x2971a3 >> _0x2e48d8(_0x25a477));
    } else {
      _0x5dd9d2.texSubImage3D(_0x26ab87, _0x1e9164, _0x102da8, _0x3259bb, _0x5a3916, _0x3d3154, _0x160754, _0x3ecb5f, _0x417f08, _0x3cb36a, null);
    }
  }
  function _0x57f9b5(_0x2c5563, _0x5799ed, _0x3d4e4f, _0x42a9b8) {
    _0x2c5563 = _0x5726bd.programs[_0x2c5563];
    var _0xad8bf9 = [];
    for (var _0x5c221c = 0; _0x5c221c < _0x5799ed; _0x5c221c++) {
      _0xad8bf9.push(_0x57f36f(_0x58fcaf[_0x3d4e4f + _0x5c221c * 4 >> 2]));
    }
    _0x5dd9d2.transformFeedbackVaryings(_0x2c5563, _0xad8bf9, _0x42a9b8);
  }
  var _0x151405 = [];
  function _0x401752(_0x445568, _0x37b32d, _0x42916e) {
    if (_0x5726bd.currentContext.version >= 2) {
      _0x5dd9d2.uniform1fv(_0x167646(_0x445568), _0x59876a, _0x42916e >> 2, _0x37b32d);
      return;
    }
    if (_0x37b32d <= 288) {
      var _0x482b59 = _0x151405[_0x37b32d - 1];
      for (var _0xa94f13 = 0; _0xa94f13 < _0x37b32d; ++_0xa94f13) {
        _0x482b59[_0xa94f13] = _0x59876a[_0x42916e + _0xa94f13 * 4 >> 2];
      }
    } else {
      var _0x482b59 = _0x59876a.subarray(_0x42916e >> 2, _0x42916e + _0x37b32d * 4 >> 2);
    }
    _0x5dd9d2.uniform1fv(_0x167646(_0x445568), _0x482b59);
  }
  function _0x249b45(_0x2f5c56, _0x42eef8) {
    _0x5dd9d2.uniform1i(_0x167646(_0x2f5c56), _0x42eef8);
  }
  var _0x1d748e = [];
  function _0x3b90b7(_0x5e820d, _0xba6cda, _0x173b0c) {
    if (_0x5726bd.currentContext.version >= 2) {
      _0x5dd9d2.uniform1iv(_0x167646(_0x5e820d), _0x58fcaf, _0x173b0c >> 2, _0xba6cda);
      return;
    }
    if (_0xba6cda <= 288) {
      var _0x471acd = _0x1d748e[_0xba6cda - 1];
      for (var _0x3ffa47 = 0; _0x3ffa47 < _0xba6cda; ++_0x3ffa47) {
        _0x471acd[_0x3ffa47] = _0x58fcaf[_0x173b0c + _0x3ffa47 * 4 >> 2];
      }
    } else {
      var _0x471acd = _0x58fcaf.subarray(_0x173b0c >> 2, _0x173b0c + _0xba6cda * 4 >> 2);
    }
    _0x5dd9d2.uniform1iv(_0x167646(_0x5e820d), _0x471acd);
  }
  function _0x3347fa(_0xe1ed6f, _0x19df7e, _0x4ab66f) {
    _0x5dd9d2.uniform1uiv(_0x167646(_0xe1ed6f), _0x59624f, _0x4ab66f >> 2, _0x19df7e);
  }
  function _0x34e818(_0x5e4325, _0x26d675, _0x599271) {
    if (_0x5726bd.currentContext.version >= 2) {
      _0x5dd9d2.uniform2fv(_0x167646(_0x5e4325), _0x59876a, _0x599271 >> 2, _0x26d675 * 2);
      return;
    }
    if (_0x26d675 <= 144) {
      var _0x483078 = _0x151405[_0x26d675 * 2 - 1];
      for (var _0x571099 = 0; _0x571099 < _0x26d675 * 2; _0x571099 += 2) {
        _0x483078[_0x571099] = _0x59876a[_0x599271 + _0x571099 * 4 >> 2];
        _0x483078[_0x571099 + 1] = _0x59876a[_0x599271 + (_0x571099 * 4 + 4) >> 2];
      }
    } else {
      var _0x483078 = _0x59876a.subarray(_0x599271 >> 2, _0x599271 + _0x26d675 * 8 >> 2);
    }
    _0x5dd9d2.uniform2fv(_0x167646(_0x5e4325), _0x483078);
  }
  function _0x3eedea(_0x1c7cdd, _0x3ceffe, _0x326ea9) {
    if (_0x5726bd.currentContext.version >= 2) {
      _0x5dd9d2.uniform2iv(_0x167646(_0x1c7cdd), _0x58fcaf, _0x326ea9 >> 2, _0x3ceffe * 2);
      return;
    }
    if (_0x3ceffe <= 144) {
      var _0x43c43b = _0x1d748e[_0x3ceffe * 2 - 1];
      for (var _0x449d57 = 0; _0x449d57 < _0x3ceffe * 2; _0x449d57 += 2) {
        _0x43c43b[_0x449d57] = _0x58fcaf[_0x326ea9 + _0x449d57 * 4 >> 2];
        _0x43c43b[_0x449d57 + 1] = _0x58fcaf[_0x326ea9 + (_0x449d57 * 4 + 4) >> 2];
      }
    } else {
      var _0x43c43b = _0x58fcaf.subarray(_0x326ea9 >> 2, _0x326ea9 + _0x3ceffe * 8 >> 2);
    }
    _0x5dd9d2.uniform2iv(_0x167646(_0x1c7cdd), _0x43c43b);
  }
  function _0x2be477(_0x103f40, _0x2514cc, _0x272db9) {
    _0x5dd9d2.uniform2uiv(_0x167646(_0x103f40), _0x59624f, _0x272db9 >> 2, _0x2514cc * 2);
  }
  function _0x9bd76b(_0x29fc6b, _0x4c8601, _0x4b7986) {
    if (_0x5726bd.currentContext.version >= 2) {
      _0x5dd9d2.uniform3fv(_0x167646(_0x29fc6b), _0x59876a, _0x4b7986 >> 2, _0x4c8601 * 3);
      return;
    }
    if (_0x4c8601 <= 96) {
      var _0x113d87 = _0x151405[_0x4c8601 * 3 - 1];
      for (var _0x4bc0fd = 0; _0x4bc0fd < _0x4c8601 * 3; _0x4bc0fd += 3) {
        _0x113d87[_0x4bc0fd] = _0x59876a[_0x4b7986 + _0x4bc0fd * 4 >> 2];
        _0x113d87[_0x4bc0fd + 1] = _0x59876a[_0x4b7986 + (_0x4bc0fd * 4 + 4) >> 2];
        _0x113d87[_0x4bc0fd + 2] = _0x59876a[_0x4b7986 + (_0x4bc0fd * 4 + 8) >> 2];
      }
    } else {
      var _0x113d87 = _0x59876a.subarray(_0x4b7986 >> 2, _0x4b7986 + _0x4c8601 * 12 >> 2);
    }
    _0x5dd9d2.uniform3fv(_0x167646(_0x29fc6b), _0x113d87);
  }
  function _0x174110(_0x4216bf, _0x33ac65, _0x22d82f) {
    if (_0x5726bd.currentContext.version >= 2) {
      _0x5dd9d2.uniform3iv(_0x167646(_0x4216bf), _0x58fcaf, _0x22d82f >> 2, _0x33ac65 * 3);
      return;
    }
    if (_0x33ac65 <= 96) {
      var _0x221451 = _0x1d748e[_0x33ac65 * 3 - 1];
      for (var _0x166f4b = 0; _0x166f4b < _0x33ac65 * 3; _0x166f4b += 3) {
        _0x221451[_0x166f4b] = _0x58fcaf[_0x22d82f + _0x166f4b * 4 >> 2];
        _0x221451[_0x166f4b + 1] = _0x58fcaf[_0x22d82f + (_0x166f4b * 4 + 4) >> 2];
        _0x221451[_0x166f4b + 2] = _0x58fcaf[_0x22d82f + (_0x166f4b * 4 + 8) >> 2];
      }
    } else {
      var _0x221451 = _0x58fcaf.subarray(_0x22d82f >> 2, _0x22d82f + _0x33ac65 * 12 >> 2);
    }
    _0x5dd9d2.uniform3iv(_0x167646(_0x4216bf), _0x221451);
  }
  function _0x162f6f(_0x458d21, _0x45a625, _0x13d85d) {
    _0x5dd9d2.uniform3uiv(_0x167646(_0x458d21), _0x59624f, _0x13d85d >> 2, _0x45a625 * 3);
  }
  function _0x236bff(_0x13e472, _0x4671ce, _0x26cff5) {
    if (_0x5726bd.currentContext.version >= 2) {
      _0x5dd9d2.uniform4fv(_0x167646(_0x13e472), _0x59876a, _0x26cff5 >> 2, _0x4671ce * 4);
      return;
    }
    if (_0x4671ce <= 72) {
      var _0x5ea458 = _0x151405[_0x4671ce * 4 - 1];
      var _0xd58310 = _0x59876a;
      _0x26cff5 >>= 2;
      for (var _0x41a7e9 = 0; _0x41a7e9 < _0x4671ce * 4; _0x41a7e9 += 4) {
        var _0x5a6d49 = _0x26cff5 + _0x41a7e9;
        _0x5ea458[_0x41a7e9] = _0xd58310[_0x5a6d49];
        _0x5ea458[_0x41a7e9 + 1] = _0xd58310[_0x5a6d49 + 1];
        _0x5ea458[_0x41a7e9 + 2] = _0xd58310[_0x5a6d49 + 2];
        _0x5ea458[_0x41a7e9 + 3] = _0xd58310[_0x5a6d49 + 3];
      }
    } else {
      var _0x5ea458 = _0x59876a.subarray(_0x26cff5 >> 2, _0x26cff5 + _0x4671ce * 16 >> 2);
    }
    _0x5dd9d2.uniform4fv(_0x167646(_0x13e472), _0x5ea458);
  }
  function _0x4ec13d(_0x6879f2, _0x60cc14, _0x906364) {
    if (_0x5726bd.currentContext.version >= 2) {
      _0x5dd9d2.uniform4iv(_0x167646(_0x6879f2), _0x58fcaf, _0x906364 >> 2, _0x60cc14 * 4);
      return;
    }
    if (_0x60cc14 <= 72) {
      var _0x597301 = _0x1d748e[_0x60cc14 * 4 - 1];
      for (var _0x32f7d6 = 0; _0x32f7d6 < _0x60cc14 * 4; _0x32f7d6 += 4) {
        _0x597301[_0x32f7d6] = _0x58fcaf[_0x906364 + _0x32f7d6 * 4 >> 2];
        _0x597301[_0x32f7d6 + 1] = _0x58fcaf[_0x906364 + (_0x32f7d6 * 4 + 4) >> 2];
        _0x597301[_0x32f7d6 + 2] = _0x58fcaf[_0x906364 + (_0x32f7d6 * 4 + 8) >> 2];
        _0x597301[_0x32f7d6 + 3] = _0x58fcaf[_0x906364 + (_0x32f7d6 * 4 + 12) >> 2];
      }
    } else {
      var _0x597301 = _0x58fcaf.subarray(_0x906364 >> 2, _0x906364 + _0x60cc14 * 16 >> 2);
    }
    _0x5dd9d2.uniform4iv(_0x167646(_0x6879f2), _0x597301);
  }
  function _0x1f2478(_0x4b83e9, _0x3f2b12, _0x28f49d) {
    _0x5dd9d2.uniform4uiv(_0x167646(_0x4b83e9), _0x59624f, _0x28f49d >> 2, _0x3f2b12 * 4);
  }
  function _0x308fde(_0x31f689, _0x2ca2ba, _0x1b134b) {
    _0x31f689 = _0x5726bd.programs[_0x31f689];
    _0x5dd9d2.uniformBlockBinding(_0x31f689, _0x2ca2ba, _0x1b134b);
  }
  function _0x278c13(_0x3afcd3, _0x4b9f1d, _0x50dff2, _0x5a434e) {
    if (_0x5726bd.currentContext.version >= 2) {
      _0x5dd9d2.uniformMatrix3fv(_0x167646(_0x3afcd3), !!_0x50dff2, _0x59876a, _0x5a434e >> 2, _0x4b9f1d * 9);
      return;
    }
    if (_0x4b9f1d <= 32) {
      var _0x352397 = _0x151405[_0x4b9f1d * 9 - 1];
      for (var _0x37fb28 = 0; _0x37fb28 < _0x4b9f1d * 9; _0x37fb28 += 9) {
        _0x352397[_0x37fb28] = _0x59876a[_0x5a434e + _0x37fb28 * 4 >> 2];
        _0x352397[_0x37fb28 + 1] = _0x59876a[_0x5a434e + (_0x37fb28 * 4 + 4) >> 2];
        _0x352397[_0x37fb28 + 2] = _0x59876a[_0x5a434e + (_0x37fb28 * 4 + 8) >> 2];
        _0x352397[_0x37fb28 + 3] = _0x59876a[_0x5a434e + (_0x37fb28 * 4 + 12) >> 2];
        _0x352397[_0x37fb28 + 4] = _0x59876a[_0x5a434e + (_0x37fb28 * 4 + 16) >> 2];
        _0x352397[_0x37fb28 + 5] = _0x59876a[_0x5a434e + (_0x37fb28 * 4 + 20) >> 2];
        _0x352397[_0x37fb28 + 6] = _0x59876a[_0x5a434e + (_0x37fb28 * 4 + 24) >> 2];
        _0x352397[_0x37fb28 + 7] = _0x59876a[_0x5a434e + (_0x37fb28 * 4 + 28) >> 2];
        _0x352397[_0x37fb28 + 8] = _0x59876a[_0x5a434e + (_0x37fb28 * 4 + 32) >> 2];
      }
    } else {
      var _0x352397 = _0x59876a.subarray(_0x5a434e >> 2, _0x5a434e + _0x4b9f1d * 36 >> 2);
    }
    _0x5dd9d2.uniformMatrix3fv(_0x167646(_0x3afcd3), !!_0x50dff2, _0x352397);
  }
  function _0x1ed19e(_0x2aa5f5, _0x541f0b, _0x4d844e, _0x10d8c3) {
    if (_0x5726bd.currentContext.version >= 2) {
      _0x5dd9d2.uniformMatrix4fv(_0x167646(_0x2aa5f5), !!_0x4d844e, _0x59876a, _0x10d8c3 >> 2, _0x541f0b * 16);
      return;
    }
    if (_0x541f0b <= 18) {
      var _0x2a57da = _0x151405[_0x541f0b * 16 - 1];
      var _0x52447b = _0x59876a;
      _0x10d8c3 >>= 2;
      for (var _0x1a0f8f = 0; _0x1a0f8f < _0x541f0b * 16; _0x1a0f8f += 16) {
        var _0x5bbaff = _0x10d8c3 + _0x1a0f8f;
        _0x2a57da[_0x1a0f8f] = _0x52447b[_0x5bbaff];
        _0x2a57da[_0x1a0f8f + 1] = _0x52447b[_0x5bbaff + 1];
        _0x2a57da[_0x1a0f8f + 2] = _0x52447b[_0x5bbaff + 2];
        _0x2a57da[_0x1a0f8f + 3] = _0x52447b[_0x5bbaff + 3];
        _0x2a57da[_0x1a0f8f + 4] = _0x52447b[_0x5bbaff + 4];
        _0x2a57da[_0x1a0f8f + 5] = _0x52447b[_0x5bbaff + 5];
        _0x2a57da[_0x1a0f8f + 6] = _0x52447b[_0x5bbaff + 6];
        _0x2a57da[_0x1a0f8f + 7] = _0x52447b[_0x5bbaff + 7];
        _0x2a57da[_0x1a0f8f + 8] = _0x52447b[_0x5bbaff + 8];
        _0x2a57da[_0x1a0f8f + 9] = _0x52447b[_0x5bbaff + 9];
        _0x2a57da[_0x1a0f8f + 10] = _0x52447b[_0x5bbaff + 10];
        _0x2a57da[_0x1a0f8f + 11] = _0x52447b[_0x5bbaff + 11];
        _0x2a57da[_0x1a0f8f + 12] = _0x52447b[_0x5bbaff + 12];
        _0x2a57da[_0x1a0f8f + 13] = _0x52447b[_0x5bbaff + 13];
        _0x2a57da[_0x1a0f8f + 14] = _0x52447b[_0x5bbaff + 14];
        _0x2a57da[_0x1a0f8f + 15] = _0x52447b[_0x5bbaff + 15];
      }
    } else {
      var _0x2a57da = _0x59876a.subarray(_0x10d8c3 >> 2, _0x10d8c3 + _0x541f0b * 64 >> 2);
    }
    _0x5dd9d2.uniformMatrix4fv(_0x167646(_0x2aa5f5), !!_0x4d844e, _0x2a57da);
  }
  function _0x3c5761(_0x5b05bf) {
    if (!_0x1a5319(_0x5b05bf)) {
      _0x5726bd.recordError(1280);
      _0x1717db("GL_INVALID_ENUM in glUnmapBuffer");
      return 0;
    }
    var _0x15f9a1 = _0x5c69f9(_0x5b05bf);
    var _0x3057a5 = _0x5726bd.mappedBuffers[_0x15f9a1];
    if (!_0x3057a5) {
      _0x5726bd.recordError(1282);
      _0x1717db("buffer was never mapped in glUnmapBuffer");
      return 0;
    }
    _0x5726bd.mappedBuffers[_0x15f9a1] = null;
    if (!(_0x3057a5.access & 16)) {
      if (_0x5726bd.currentContext.version >= 2) {
        _0x5dd9d2.bufferSubData(_0x5b05bf, _0x3057a5.offset, _0x479b38, _0x3057a5.mem, _0x3057a5.length);
      } else {
        _0x5dd9d2.bufferSubData(_0x5b05bf, _0x3057a5.offset, _0x479b38.subarray(_0x3057a5.mem, _0x3057a5.mem + _0x3057a5.length));
      }
    }
    _0x41603f(_0x3057a5.mem);
    return 1;
  }
  function _0x5d9ac7() {
    var _0x5a70c7 = _0x5dd9d2.currentProgram;
    if (!_0x5a70c7.explicitProgramBindingsApplied) {
      if (_0x5726bd.currentContext.version >= 2) {
        Object.keys(_0x5a70c7.explicitUniformBindings).forEach(function (_0x2f4d4d) {
          var _0x240024 = _0x5a70c7.explicitUniformBindings[_0x2f4d4d];
          for (var _0x5cb041 = 0; _0x5cb041 < _0x240024[1]; ++_0x5cb041) {
            var _0x1863d4 = _0x5dd9d2.getUniformBlockIndex(_0x5a70c7, _0x2f4d4d + (_0x240024[1] > 1 ? "[" + _0x5cb041 + "]" : ""));
            _0x5dd9d2.uniformBlockBinding(_0x5a70c7, _0x1863d4, _0x240024[0] + _0x5cb041);
          }
        });
      }
      Object.keys(_0x5a70c7.explicitSamplerBindings).forEach(function (_0x13c8b4) {
        var _0xdeb02f = _0x5a70c7.explicitSamplerBindings[_0x13c8b4];
        for (var _0x2fd10b = 0; _0x2fd10b < _0xdeb02f[1]; ++_0x2fd10b) {
          _0x5dd9d2.uniform1i(_0x5dd9d2.getUniformLocation(_0x5a70c7, _0x13c8b4 + (_0x2fd10b ? "[" + _0x2fd10b + "]" : "")), _0xdeb02f[0] + _0x2fd10b);
        }
      });
      _0x5a70c7.explicitProgramBindingsApplied = 1;
    }
  }
  function _0x3e17ec(_0x30982d) {
    _0x30982d = _0x5726bd.programs[_0x30982d];
    _0x5dd9d2.useProgram(_0x30982d);
    if (_0x5dd9d2.currentProgram = _0x30982d) {
      _0x5d9ac7();
    }
  }
  function _0x4023ab(_0xfea610) {
    _0x5dd9d2.validateProgram(_0x5726bd.programs[_0xfea610]);
  }
  function _0x1fb78a(_0x36fc81, _0x3b9e69, _0x14fa61, _0x4e28ca, _0xb94f48) {
    _0x5dd9d2.vertexAttrib4f(_0x36fc81, _0x3b9e69, _0x14fa61, _0x4e28ca, _0xb94f48);
  }
  function _0x1a5808(_0x21394f, _0x35ab52) {
    _0x5dd9d2.vertexAttrib4f(_0x21394f, _0x59876a[_0x35ab52 >> 2], _0x59876a[_0x35ab52 + 4 >> 2], _0x59876a[_0x35ab52 + 8 >> 2], _0x59876a[_0x35ab52 + 12 >> 2]);
  }
  function _0x501c75(_0x432dbb, _0x187425, _0x50522d, _0x53136b, _0x5f277a) {
    var _0x83fb91 = _0x5726bd.currentContext.clientBuffers[_0x432dbb];
    if (!_0x5dd9d2.currentArrayBufferBinding) {
      _0x83fb91.size = _0x187425;
      _0x83fb91.type = _0x50522d;
      _0x83fb91.normalized = false;
      _0x83fb91.stride = _0x53136b;
      _0x83fb91.ptr = _0x5f277a;
      _0x83fb91.clientside = true;
      _0x83fb91.vertexAttribPointerAdaptor = function (_0x5c6af5, _0x3552ec, _0x33592e, _0x3d852d, _0x897567, _0x4c0da7) {
        this.vertexAttribIPointer(_0x5c6af5, _0x3552ec, _0x33592e, _0x897567, _0x4c0da7);
      };
      return;
    }
    _0x83fb91.clientside = false;
    _0x5dd9d2.vertexAttribIPointer(_0x432dbb, _0x187425, _0x50522d, _0x53136b, _0x5f277a);
  }
  function _0x49d403(_0x3d6d7a, _0x2ebb0d, _0x42d3df, _0x4e1c3c, _0x1c4c9a, _0x13e9bd) {
    var _0x910226 = _0x5726bd.currentContext.clientBuffers[_0x3d6d7a];
    if (!_0x5dd9d2.currentArrayBufferBinding) {
      _0x910226.size = _0x2ebb0d;
      _0x910226.type = _0x42d3df;
      _0x910226.normalized = _0x4e1c3c;
      _0x910226.stride = _0x1c4c9a;
      _0x910226.ptr = _0x13e9bd;
      _0x910226.clientside = true;
      _0x910226.vertexAttribPointerAdaptor = function (_0x4d522b, _0x44c049, _0x213a91, _0x1c39b7, _0x75077, _0xd1f338) {
        this.vertexAttribPointer(_0x4d522b, _0x44c049, _0x213a91, _0x1c39b7, _0x75077, _0xd1f338);
      };
      return;
    }
    _0x910226.clientside = false;
    _0x5dd9d2.vertexAttribPointer(_0x3d6d7a, _0x2ebb0d, _0x42d3df, !!_0x4e1c3c, _0x1c4c9a, _0x13e9bd);
  }
  function _0x333f60(_0x4342fe, _0x13fd06, _0x9aa66a, _0x4e3cdd) {
    _0x5dd9d2.viewport(_0x4342fe, _0x13fd06, _0x9aa66a, _0x4e3cdd);
  }
  function _0x3d746d(_0x41c8a8) {
    return _0x41c8a8;
  }
  function _0x49b6f8(_0x4e99ba) {
    _0x349bc7();
    var _0x237577 = new Date(_0x58fcaf[_0x4e99ba + 20 >> 2] + 1900, _0x58fcaf[_0x4e99ba + 16 >> 2], _0x58fcaf[_0x4e99ba + 12 >> 2], _0x58fcaf[_0x4e99ba + 8 >> 2], _0x58fcaf[_0x4e99ba + 4 >> 2], _0x58fcaf[_0x4e99ba >> 2], 0);
    var _0x32c83b = _0x58fcaf[_0x4e99ba + 32 >> 2];
    var _0x1a6024 = _0x237577.getTimezoneOffset();
    var _0x3cd2e1 = new Date(_0x237577.getFullYear(), 0, 1);
    var _0xb58c09 = new Date(_0x237577.getFullYear(), 6, 1).getTimezoneOffset();
    var _0x54a7da = _0x3cd2e1.getTimezoneOffset();
    var _0x2788fe = Math.min(_0x54a7da, _0xb58c09);
    if (_0x32c83b < 0) {
      _0x58fcaf[_0x4e99ba + 32 >> 2] = Number(_0xb58c09 != _0x54a7da && _0x2788fe == _0x1a6024);
    } else if (_0x32c83b > 0 != (_0x2788fe == _0x1a6024)) {
      var _0x3b1240 = Math.max(_0x54a7da, _0xb58c09);
      var _0x1499f7 = _0x32c83b > 0 ? _0x2788fe : _0x3b1240;
      _0x237577.setTime(_0x237577.getTime() + (_0x1499f7 - _0x1a6024) * 60000);
    }
    _0x58fcaf[_0x4e99ba + 24 >> 2] = _0x237577.getDay();
    var _0x4ca2f9 = (_0x237577.getTime() - _0x3cd2e1.getTime()) / 86400000 | 0;
    _0x58fcaf[_0x4e99ba + 28 >> 2] = _0x4ca2f9;
    _0x58fcaf[_0x4e99ba >> 2] = _0x237577.getSeconds();
    _0x58fcaf[_0x4e99ba + 4 >> 2] = _0x237577.getMinutes();
    _0x58fcaf[_0x4e99ba + 8 >> 2] = _0x237577.getHours();
    _0x58fcaf[_0x4e99ba + 12 >> 2] = _0x237577.getDate();
    _0x58fcaf[_0x4e99ba + 16 >> 2] = _0x237577.getMonth();
    return _0x237577.getTime() / 1000 | 0;
  }
  function _0x5dbfa2(_0x4e7bc8) {
    _0x5eda5c(_0x4e7bc8);
  }
  function _0x51d696(_0x4fa547, _0xdad3c4, _0x12b2fe) {
    return 0;
  }
  function _0x1aa565(_0x494a39) {
    _0x58fcaf[_0x494a39 >> 2] = 0;
    return 0;
  }
  function _0x376d8a(_0x566250) {
    return _0x566250 % 4 === 0 && (_0x566250 % 100 !== 0 || _0x566250 % 400 === 0);
  }
  function _0x250e96(_0x362a51, _0x464dc5) {
    var _0x2fd7fe = 0;
    for (var _0x26e6b0 = 0; _0x26e6b0 <= _0x464dc5; _0x2fd7fe += _0x362a51[_0x26e6b0++]) {}
    return _0x2fd7fe;
  }
  var _0x305c7 = [31, 29, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
  var _0x1a1f9f = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
  function _0x2c1492(_0x2255e1, _0x248cd7) {
    var _0xe817a0 = new Date(_0x2255e1.getTime());
    while (_0x248cd7 > 0) {
      var _0x1f1c74 = _0x376d8a(_0xe817a0.getFullYear());
      var _0x5a5f8d = _0xe817a0.getMonth();
      var _0x49bbea = (_0x1f1c74 ? _0x305c7 : _0x1a1f9f)[_0x5a5f8d];
      if (_0x248cd7 > _0x49bbea - _0xe817a0.getDate()) {
        _0x248cd7 -= _0x49bbea - _0xe817a0.getDate() + 1;
        _0xe817a0.setDate(1);
        if (_0x5a5f8d < 11) {
          _0xe817a0.setMonth(_0x5a5f8d + 1);
        } else {
          _0xe817a0.setMonth(0);
          _0xe817a0.setFullYear(_0xe817a0.getFullYear() + 1);
        }
      } else {
        _0xe817a0.setDate(_0xe817a0.getDate() + _0x248cd7);
        return _0xe817a0;
      }
    }
    return _0xe817a0;
  }
  function _0x553bdb(_0x4910fb, _0x547485, _0x3ed1dd, _0x51cb3e) {
    var _0x20c57a = _0x58fcaf[_0x51cb3e + 40 >> 2];
    var _0x4c96b9 = {
      tm_sec: _0x58fcaf[_0x51cb3e >> 2],
      tm_min: _0x58fcaf[_0x51cb3e + 4 >> 2],
      tm_hour: _0x58fcaf[_0x51cb3e + 8 >> 2],
      tm_mday: _0x58fcaf[_0x51cb3e + 12 >> 2],
      tm_mon: _0x58fcaf[_0x51cb3e + 16 >> 2],
      tm_year: _0x58fcaf[_0x51cb3e + 20 >> 2],
      tm_wday: _0x58fcaf[_0x51cb3e + 24 >> 2],
      tm_yday: _0x58fcaf[_0x51cb3e + 28 >> 2],
      tm_isdst: _0x58fcaf[_0x51cb3e + 32 >> 2],
      tm_gmtoff: _0x58fcaf[_0x51cb3e + 36 >> 2],
      tm_zone: _0x20c57a ? _0x57f36f(_0x20c57a) : ""
    };
    var _0x45a9ee = _0x57f36f(_0x3ed1dd);
    var _0x14f51d = {
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
    for (var _0x1cf516 in _0x14f51d) {
      _0x45a9ee = _0x45a9ee.replace(new RegExp(_0x1cf516, "g"), _0x14f51d[_0x1cf516]);
    }
    var _0x125395 = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    var _0x311dd1 = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    function _0x3aa4cb(_0x382c74, _0x26eb43, _0x8f4bc2) {
      var _0x5d5612 = typeof _0x382c74 === "number" ? _0x382c74.toString() : _0x382c74 || "";
      while (_0x5d5612.length < _0x26eb43) {
        _0x5d5612 = _0x8f4bc2[0] + _0x5d5612;
      }
      return _0x5d5612;
    }
    function _0x12c076(_0x2d7daf, _0x28e77a) {
      return _0x3aa4cb(_0x2d7daf, _0x28e77a, "0");
    }
    function _0x52e6c1(_0x547a63, _0x2f7271) {
      function _0x575302(_0x492af0) {
        if (_0x492af0 < 0) {
          return -1;
        } else if (_0x492af0 > 0) {
          return 1;
        } else {
          return 0;
        }
      }
      var _0x338628;
      if ((_0x338628 = _0x575302(_0x547a63.getFullYear() - _0x2f7271.getFullYear())) === 0) {
        if ((_0x338628 = _0x575302(_0x547a63.getMonth() - _0x2f7271.getMonth())) === 0) {
          _0x338628 = _0x575302(_0x547a63.getDate() - _0x2f7271.getDate());
        }
      }
      return _0x338628;
    }
    function _0x3ca3be(_0x10ce7d) {
      switch (_0x10ce7d.getDay()) {
        case 0:
          return new Date(_0x10ce7d.getFullYear() - 1, 11, 29);
        case 1:
          return _0x10ce7d;
        case 2:
          return new Date(_0x10ce7d.getFullYear(), 0, 3);
        case 3:
          return new Date(_0x10ce7d.getFullYear(), 0, 2);
        case 4:
          return new Date(_0x10ce7d.getFullYear(), 0, 1);
        case 5:
          return new Date(_0x10ce7d.getFullYear() - 1, 11, 31);
        case 6:
          return new Date(_0x10ce7d.getFullYear() - 1, 11, 30);
      }
    }
    function _0x361ba5(_0x1daf9b) {
      var _0x3d9453 = _0x2c1492(new Date(_0x1daf9b.tm_year + 1900, 0, 1), _0x1daf9b.tm_yday);
      var _0x4ea6f2 = new Date(_0x3d9453.getFullYear(), 0, 4);
      var _0x1243d6 = new Date(_0x3d9453.getFullYear() + 1, 0, 4);
      var _0x4fa2fb = _0x3ca3be(_0x4ea6f2);
      var _0x3113af = _0x3ca3be(_0x1243d6);
      if (_0x52e6c1(_0x4fa2fb, _0x3d9453) <= 0) {
        if (_0x52e6c1(_0x3113af, _0x3d9453) <= 0) {
          return _0x3d9453.getFullYear() + 1;
        } else {
          return _0x3d9453.getFullYear();
        }
      } else {
        return _0x3d9453.getFullYear() - 1;
      }
    }
    var _0x2ace66 = {
      "%a": function (_0x42964c) {
        return _0x125395[_0x42964c.tm_wday].substring(0, 3);
      },
      "%A": function (_0x183cea) {
        return _0x125395[_0x183cea.tm_wday];
      },
      "%b": function (_0x54ed1b) {
        return _0x311dd1[_0x54ed1b.tm_mon].substring(0, 3);
      },
      "%B": function (_0x29f560) {
        return _0x311dd1[_0x29f560.tm_mon];
      },
      "%C": function (_0xdee549) {
        var _0x859b55 = _0xdee549.tm_year + 1900;
        return _0x12c076(_0x859b55 / 100 | 0, 2);
      },
      "%d": function (_0x365988) {
        return _0x12c076(_0x365988.tm_mday, 2);
      },
      "%e": function (_0x104c52) {
        return _0x3aa4cb(_0x104c52.tm_mday, 2, " ");
      },
      "%g": function (_0x5c85d4) {
        return _0x361ba5(_0x5c85d4).toString().substring(2);
      },
      "%G": function (_0x422334) {
        return _0x361ba5(_0x422334);
      },
      "%H": function (_0x4c0d9e) {
        return _0x12c076(_0x4c0d9e.tm_hour, 2);
      },
      "%I": function (_0x1c01e3) {
        var _0x12ffd5 = _0x1c01e3.tm_hour;
        if (_0x12ffd5 == 0) {
          _0x12ffd5 = 12;
        } else if (_0x12ffd5 > 12) {
          _0x12ffd5 -= 12;
        }
        return _0x12c076(_0x12ffd5, 2);
      },
      "%j": function (_0x43ef2c) {
        return _0x12c076(_0x43ef2c.tm_mday + _0x250e96(_0x376d8a(_0x43ef2c.tm_year + 1900) ? _0x305c7 : _0x1a1f9f, _0x43ef2c.tm_mon - 1), 3);
      },
      "%m": function (_0x2b5875) {
        return _0x12c076(_0x2b5875.tm_mon + 1, 2);
      },
      "%M": function (_0x36c807) {
        return _0x12c076(_0x36c807.tm_min, 2);
      },
      "%n": function () {
        return "\n";
      },
      "%p": function (_0x544520) {
        if (_0x544520.tm_hour >= 0 && _0x544520.tm_hour < 12) {
          return "AM";
        } else {
          return "PM";
        }
      },
      "%S": function (_0x215291) {
        return _0x12c076(_0x215291.tm_sec, 2);
      },
      "%t": function () {
        return "\t";
      },
      "%u": function (_0x336154) {
        return _0x336154.tm_wday || 7;
      },
      "%U": function (_0x545a50) {
        var _0x34a511 = new Date(_0x545a50.tm_year + 1900, 0, 1);
        var _0x3d9d1b = _0x34a511.getDay() === 0 ? _0x34a511 : _0x2c1492(_0x34a511, 7 - _0x34a511.getDay());
        var _0x4960b2 = new Date(_0x545a50.tm_year + 1900, _0x545a50.tm_mon, _0x545a50.tm_mday);
        if (_0x52e6c1(_0x3d9d1b, _0x4960b2) < 0) {
          var _0x294ce9 = _0x250e96(_0x376d8a(_0x4960b2.getFullYear()) ? _0x305c7 : _0x1a1f9f, _0x4960b2.getMonth() - 1) - 31;
          var _0x3ec640 = 31 - _0x3d9d1b.getDate();
          var _0x4b1659 = _0x3ec640 + _0x294ce9 + _0x4960b2.getDate();
          return _0x12c076(Math.ceil(_0x4b1659 / 7), 2);
        }
        if (_0x52e6c1(_0x3d9d1b, _0x34a511) === 0) {
          return "01";
        } else {
          return "00";
        }
      },
      "%V": function (_0x4ad758) {
        var _0x1b049c = new Date(_0x4ad758.tm_year + 1900, 0, 4);
        var _0xd00f5d = new Date(_0x4ad758.tm_year + 1901, 0, 4);
        var _0x579b57 = _0x3ca3be(_0x1b049c);
        var _0x38df0b = _0x3ca3be(_0xd00f5d);
        var _0x33a3b0 = _0x2c1492(new Date(_0x4ad758.tm_year + 1900, 0, 1), _0x4ad758.tm_yday);
        if (_0x52e6c1(_0x33a3b0, _0x579b57) < 0) {
          return "53";
        }
        if (_0x52e6c1(_0x38df0b, _0x33a3b0) <= 0) {
          return "01";
        }
        var _0x761d9f;
        if (_0x579b57.getFullYear() < _0x4ad758.tm_year + 1900) {
          _0x761d9f = _0x4ad758.tm_yday + 32 - _0x579b57.getDate();
        } else {
          _0x761d9f = _0x4ad758.tm_yday + 1 - _0x579b57.getDate();
        }
        return _0x12c076(Math.ceil(_0x761d9f / 7), 2);
      },
      "%w": function (_0x3232de) {
        return _0x3232de.tm_wday;
      },
      "%W": function (_0x59f514) {
        var _0x5ec22e = new Date(_0x59f514.tm_year, 0, 1);
        var _0x2f6e36 = _0x5ec22e.getDay() === 1 ? _0x5ec22e : _0x2c1492(_0x5ec22e, _0x5ec22e.getDay() === 0 ? 1 : 7 - _0x5ec22e.getDay() + 1);
        var _0x5a0e3e = new Date(_0x59f514.tm_year + 1900, _0x59f514.tm_mon, _0x59f514.tm_mday);
        if (_0x52e6c1(_0x2f6e36, _0x5a0e3e) < 0) {
          var _0x4a5a4a = _0x250e96(_0x376d8a(_0x5a0e3e.getFullYear()) ? _0x305c7 : _0x1a1f9f, _0x5a0e3e.getMonth() - 1) - 31;
          var _0x4397de = 31 - _0x2f6e36.getDate();
          var _0x23950f = _0x4397de + _0x4a5a4a + _0x5a0e3e.getDate();
          return _0x12c076(Math.ceil(_0x23950f / 7), 2);
        }
        if (_0x52e6c1(_0x2f6e36, _0x5ec22e) === 0) {
          return "01";
        } else {
          return "00";
        }
      },
      "%y": function (_0x572f5d) {
        return (_0x572f5d.tm_year + 1900).toString().substring(2);
      },
      "%Y": function (_0x3569e9) {
        return _0x3569e9.tm_year + 1900;
      },
      "%z": function (_0x549957) {
        var _0x1eb1b2 = _0x549957.tm_gmtoff;
        var _0x1913bb = _0x1eb1b2 >= 0;
        _0x1eb1b2 = Math.abs(_0x1eb1b2) / 60;
        _0x1eb1b2 = _0x1eb1b2 / 60 * 100 + _0x1eb1b2 % 60;
        return (_0x1913bb ? "+" : "-") + String("0000" + _0x1eb1b2).slice(-4);
      },
      "%Z": function (_0x142fea) {
        return _0x142fea.tm_zone;
      },
      "%%": function () {
        return "%";
      }
    };
    for (var _0x1cf516 in _0x2ace66) {
      if (_0x45a9ee.includes(_0x1cf516)) {
        _0x45a9ee = _0x45a9ee.replace(new RegExp(_0x1cf516, "g"), _0x2ace66[_0x1cf516](_0x4c96b9));
      }
    }
    var _0xb57b58 = _0x160af2(_0x45a9ee, false);
    if (_0xb57b58.length > _0x547485) {
      return 0;
    }
    _0x16f415(_0xb57b58, _0x4910fb);
    return _0xb57b58.length - 1;
  }
  function _0x5667e2(_0x10ac60) {
    var _0x919b4a = Date.now() / 1000 | 0;
    if (_0x10ac60) {
      _0x58fcaf[_0x10ac60 >> 2] = _0x919b4a;
    }
    return _0x919b4a;
  }
  function _0x3a80c5(_0x42faac, _0x16ad79) {
    _0x42faac = _0x57f36f(_0x42faac);
    try {
      _0xee3f43.utime(_0x42faac, _0x16ad79, _0x16ad79);
      return 0;
    } catch (_0x3d15f) {
      if (!(_0x3d15f instanceof _0xee3f43.ErrnoError)) {
        throw _0x3d15f + " : " + _0xe0170d();
      }
      _0x3930a2(_0x3d15f.errno);
      return -1;
    }
  }
  function _0x5a4207(_0x5b4b9e, _0xc80b4) {
    var _0x4e9cf0;
    if (_0xc80b4) {
      _0x4e9cf0 = _0x58fcaf[_0xc80b4 + 4 >> 2] * 1000;
    } else {
      _0x4e9cf0 = Date.now();
    }
    return _0x3a80c5(_0x5b4b9e, _0x4e9cf0);
  }
  var _0x232e52 = function (_0x4e7346, _0x474daf, _0x258186, _0x4f95be) {
    if (!_0x4e7346) {
      _0x4e7346 = this;
    }
    this.parent = _0x4e7346;
    this.mount = _0x4e7346.mount;
    this.mounted = null;
    this.id = _0xee3f43.nextInode++;
    this.name = _0x474daf;
    this.mode = _0x258186;
    this.node_ops = {};
    this.stream_ops = {};
    this.rdev = _0x4f95be;
  };
  var _0x5ae2bd = 365;
  var _0x1f1242 = 146;
  Object.defineProperties(_0x232e52.prototype, {
    read: {
      get: function () {
        return (this.mode & _0x5ae2bd) === _0x5ae2bd;
      },
      set: function (_0x2d4bce) {
        if (_0x2d4bce) {
          this.mode |= _0x5ae2bd;
        } else {
          this.mode &= ~_0x5ae2bd;
        }
      }
    },
    write: {
      get: function () {
        return (this.mode & _0x1f1242) === _0x1f1242;
      },
      set: function (_0x592e09) {
        if (_0x592e09) {
          this.mode |= _0x1f1242;
        } else {
          this.mode &= ~_0x1f1242;
        }
      }
    },
    isFolder: {
      get: function () {
        return _0xee3f43.isDir(this.mode);
      }
    },
    isDevice: {
      get: function () {
        return _0xee3f43.isChrdev(this.mode);
      }
    }
  });
  _0xee3f43.FSNode = _0x232e52;
  _0xee3f43.staticInit();
  _0x3b068f.FS_createPath = _0xee3f43.createPath;
  _0x3b068f.FS_createDataFile = _0xee3f43.createDataFile;
  _0x3b068f.requestFullscreen = function _0x849492(_0x56bddc, _0x122b3b) {
    _0x132320.requestFullscreen(_0x56bddc, _0x122b3b);
  };
  _0x3b068f.requestAnimationFrame = function _0x178ba1(_0x58f0d0) {
    _0x132320.requestAnimationFrame(_0x58f0d0);
  };
  _0x3b068f.setCanvasSize = function _0x4c7f02(_0x5ef6ed, _0x1470a6, _0x5b53e9) {
    _0x132320.setCanvasSize(_0x5ef6ed, _0x1470a6, _0x5b53e9);
  };
  _0x3b068f.pauseMainLoop = function _0x53d5c6() {
    _0x132320.mainLoop.pause();
  };
  _0x3b068f.resumeMainLoop = function _0x309bd3() {
    _0x132320.mainLoop.resume();
  };
  _0x3b068f.getUserMedia = function _0x5d1cd9() {
    _0x132320.getUserMedia();
  };
  _0x3b068f.createContext = function _0x429cde(_0x42f16f, _0x1ecb24, _0x189c3a, _0xf95b01) {
    return _0x132320.createContext(_0x42f16f, _0x1ecb24, _0x189c3a, _0xf95b01);
  };
  var _0x5dd9d2;
  for (var _0xa204bf = 0; _0xa204bf < 32; ++_0xa204bf) {
    _0x542a0b.push(new Array(_0xa204bf));
  }
  var _0x24118c = new Float32Array(288);
  for (var _0xa204bf = 0; _0xa204bf < 288; ++_0xa204bf) {
    _0x151405[_0xa204bf] = _0x24118c.subarray(0, _0xa204bf + 1);
  }
  var _0x429fd7 = new Int32Array(288);
  for (var _0xa204bf = 0; _0xa204bf < 288; ++_0xa204bf) {
    _0x1d748e[_0xa204bf] = _0x429fd7.subarray(0, _0xa204bf + 1);
  }
  function _0x160af2(_0x34dd1d, _0x16b352, _0x45d9c2) {
    var _0x2222f8 = _0x45d9c2 > 0 ? _0x45d9c2 : _0x2705ae(_0x34dd1d) + 1;
    var _0x14a0a5 = new Array(_0x2222f8);
    var _0x511912 = _0x29bc42(_0x34dd1d, _0x14a0a5, 0, _0x14a0a5.length);
    if (_0x16b352) {
      _0x14a0a5.length = _0x511912;
    }
    return _0x14a0a5;
  }
  var _0x1c4563 = {
    tj: _0x2e4086,
    oj: _0x50c008,
    Pc: _0x1f2056,
    Oi: _0x3111dc,
    zi: _0x34174d,
    Rj: _0x444801,
    Mi: _0x38ff99,
    Li: _0x49b97e,
    Ii: _0x11c533,
    Ki: _0x2761ed,
    Ji: _0x168eed,
    rj: _0x58d5d3,
    qj: _0x2f186e,
    Ij: _0x44ad3d,
    fj: _0x1d5d9e,
    Lc: _0x52d75e,
    Ti: _0x208039,
    Mc: _0x41982f,
    Oc: _0x40af0f,
    Nc: _0xdbd10b,
    mi: _0xa906ae,
    Ei: _0x907968,
    Di: _0x49091e,
    hj: _0x5c3b0f,
    wj: _0x26da31,
    vj: _0x3943e2,
    Qi: _0x22a4d7,
    Hi: _0x24c2c3,
    Gi: _0x2167d4,
    Ri: _0x4a993d,
    Mj: _0x7a0cf9,
    ri: _0x1858dd,
    wi: _0x9ff3b4,
    vi: _0x9614e7,
    ui: _0x5adcc9,
    Xi: _0xb7dda8,
    Wi: _0x1d3508,
    Vi: _0x398623,
    Ui: _0x5f1555,
    Fi: _0x565c7b,
    Ai: _0x3f5ed4,
    mj: _0x2ef0e2,
    Si: _0x44c362,
    si: _0x443306,
    ff: _0x502ba4,
    Lb: _0x44e403,
    Kb: _0x56a116,
    lf: _0x5acc93,
    Sa: _0x10240e,
    Ra: _0x5ce3e0,
    Je: _0x254fc5,
    mf: _0x22d124,
    Le: _0x1af070,
    Be: _0x2c5d08,
    da: _0x429de8,
    df: _0x99995c,
    Hb: _0x5a9d30,
    Gb: _0x445a8c,
    $e: _0x1d08ed,
    cf: _0x432bd8,
    Fb: _0xfd7208,
    Eb: _0x52ce26,
    di: _0x54665d,
    ef: _0x5abe4c,
    Jb: _0x46d34b,
    Ib: _0x1a70e2,
    Ke: _0x5d25da,
    Me: _0xb9f4e7,
    gf: _0x377835,
    Nb: _0x3990ce,
    Mb: _0x10a654,
    Ob: _0x50a67b,
    Ee: _0x3cd35a,
    _e: _0x1b3936,
    jf: _0x27bc28,
    fa: _0x43848b,
    Qf: _0x161062,
    ha: _0x1abfb9,
    Lf: _0x41e66e,
    Jf: _0x5087a0,
    $b: _0x4a658a,
    Kf: _0x4e0024,
    Va: _0x371006,
    Wa: _0x728c88,
    Pb: _0x4a4c82,
    Nf: _0x5695c0,
    Hf: _0x37faa5,
    If: _0x156cc7,
    bc: _0x228b42,
    ac: _0x231049,
    sa: _0x4844f,
    ga: _0xddef34,
    Pf: _0x2fe40c,
    Of: _0x58d243,
    ta: _0x377619,
    yb: _0x3e5582,
    xb: _0x5d51c5,
    la: _0x488647,
    ra: _0x407c4e,
    vb: _0x2f7b7c,
    wb: _0x539425,
    Db: _0x525fd9,
    Ma: _0x287801,
    zb: _0x2f9e6e,
    Bb: _0x32e43c,
    Pe: _0x15db90,
    _b: _0x375129,
    nf: _0x1225a6,
    Ab: _0x34367f,
    Ze: _0x336936,
    va: _0x57d4a0,
    Ie: _0x1e360a,
    Df: _0x5af954,
    Af: _0x5c4a71,
    Bf: _0x3ae41b,
    Cf: _0x54cee7,
    Ua: _0x440e3e,
    wf: _0x244713,
    yf: _0x397c45,
    xf: _0x57b668,
    zf: _0xa5f5a2,
    Fj: _0x423603,
    Dj: _0x3e960b,
    Bj: _0x589519,
    jj: _0x52c280,
    lj: _0x2d7219,
    Hj: _0x12e7d8,
    dj: _0x5f07cc,
    cj: _0x2b65ff,
    yj: _0x433e96,
    Nj: _0x297017,
    pi: _0x3b89ea,
    Lj: _0x306f6d,
    Kj: _0x41e143,
    ib: _0x4a25dc,
    oi: _0x224170,
    ni: _0x8f61c9,
    nj: _0x62f584,
    Pi: _0x5cc88d,
    Ni: _0x539837,
    Ci: _0x2fbf56,
    Wj: _0x9c77a,
    Vj: _0x116977,
    Tj: _0x389b67,
    Uj: _0x385b86,
    uj: _0x355e5d,
    ej: _0x11f8b7,
    xi: _0x4825ba,
    yi: _0x4eaaa3,
    Bi: _0x23a331,
    Kc: _0x274d79,
    Sj: _0x3fdd0f,
    Qj: _0x3ffc49,
    Oj: _0x54eba7,
    Pj: _0xe7486a,
    Ej: _0x3c1b6e,
    Cj: _0x1f6d70,
    zj: _0x235825,
    ij: _0x301feb,
    kj: _0x6c331d,
    Gj: _0x5eec17,
    ti: _0x561d57,
    xj: _0x3fac4c,
    sj: _0xad8fbf,
    Jj: _0x380c61,
    gj: _0x21a334,
    nb: _0xd10785,
    ak: _0x5252ea,
    Tc: _0x39788a,
    _j: _0x7f8d15,
    Uc: _0x47b4d6,
    Xj: _0x559f7c,
    Zj: _0x1f03db,
    Yj: _0x14d368,
    $j: _0x2e9942,
    p: _0x63c8ae,
    h: _0x1a69a1,
    o: _0x260170,
    f: _0x888828,
    a: _0x538311,
    bk: _0x30a5aa,
    jb: _0x22a899,
    gd: _0x116112,
    ea: _0x267a73,
    nd: _0x59a193,
    od: _0x33baf6,
    k: _0x2b4ff3,
    xe: _0x52aeb7,
    hf: _0x13233a,
    He: _0x2ff763,
    Rf: _0x55d21d,
    dd: _0x46627e,
    Ef: _0x520db8,
    jd: _0x9a801f,
    S: _0x1b72d6,
    Og: _0xfbeb78,
    Cg: _0x4edc3e,
    ad: _0x4143c6,
    Zc: _0x356c3e,
    Fc: _0x5b914b,
    Gc: _0x32d6c7,
    ld: _0x2111af,
    Ha: _0x591272,
    sd: _0x122ebf,
    of: _0x179bbd,
    Mf: _0x5ab5a3,
    Vf: _0x2fa5f4,
    ub: _0x3a30fa,
    kf: _0x355032,
    ed: _0x3b60a1,
    $c: _0x1a689,
    bf: _0x39fe44,
    td: _0x4e290e,
    cb: _0x1be09e,
    fd: _0x5ae9b6,
    vf: _0x264339,
    gi: _0x36c7f1,
    Ue: _0x1f5791,
    hd: _0x307bc4,
    bd: _0x17a7fd,
    _c: _0x57196a,
    id: _0x3cb3df,
    af: _0x51f2c1,
    Ne: _0x442db4,
    kd: _0x55fb2b,
    qb: _0x27556f,
    jc: _0x15032f,
    Sf: _0x364a45,
    Tf: _0x55f23b,
    pd: _0x314ea6,
    cd: _0x1a4106,
    x: _0x5534f4,
    Q: _0x4517a9,
    rd: _0x2eccf6,
    tb: _0x52ab72,
    Ia: _0x38a6cd,
    Xf: _0x59add4,
    xa: _0x449736,
    hc: _0x11b633,
    eg: _0x30893d,
    Ta: _0x135178,
    Fe: _0x2f52ce,
    De: _0x447979,
    Xe: _0x340ddf,
    Qe: _0x6cf50f,
    Oe: _0x5e0500,
    We: _0xe59951,
    Oa: _0x4907e9,
    qd: _0x23359d,
    J: _0x1bbf2d,
    Pa: _0x51aaef,
    Ge: _0x1ae44a,
    rf: _0x55702b,
    C: _0x40abea,
    E: _0x58051c,
    ck: _0x1323af,
    Ye: _0xaf4f51,
    Re: _0xf94372,
    dk: _0x15ce82,
    Qa: _0x29af38,
    Cb: _0xf50f87,
    Na: _0x2d3b7f,
    Te: _0x469cd3,
    Ve: _0x49c697,
    Rb: _0x2c8d18,
    Qb: _0x11b0ae,
    Ae: _0x2d1c01,
    oa: _0x2e6e51,
    ma: _0x211257,
    na: _0x5a2912,
    ze: _0x424877,
    Ce: _0x940fd4,
    Yb: _0x5ebfaf,
    Xb: _0x949f2d,
    Zb: _0x587832,
    Se: _0x37d534,
    Sb: _0x92574a,
    Ub: _0x407c24,
    Tb: _0x5c9405,
    Vb: _0x51f8a2,
    Wb: _0x1c1035,
    ei: _0x27ffc4,
    tf: _0xbd3783,
    sf: _0x173555,
    pa: _0x35b6cc,
    qf: _0xf453d0,
    Wf: _0x35b572,
    qa: _0x1594e1,
    pj: _0x5c96f1,
    Aj: _0x310121,
    A: _0xa077cf,
    Z: _0x227ec6,
    gc: _0x23f81f,
    sb: _0x3e87d2,
    ye: _0x281ac2,
    gb: _0x2ff22f,
    ua: _0x6ac5e9,
    b: _0xf71cd0,
    md: _0x349d3c,
    Ff: _0x1b6001,
    Gf: _0x23f978,
    rb: _0x39e848,
    Uf: _0x5be02f,
    ka: _0x586e1d,
    Yh: _0x32362e,
    Vh: _0x2a2bcd,
    kc: _0x412018,
    Kg: _0x4b29f6,
    Da: _0x2efd59,
    Uh: _0x1ebbcb,
    jg: _0x5ec884,
    ig: _0x4ef806,
    Rh: _0x2575d9,
    Sh: _0x37deb5,
    cg: _0x288100,
    Th: _0x4358bf,
    Dg: _0x182e40,
    Gg: _0x244d6b,
    Cc: _0x33a48a,
    Dc: _0x47048f,
    Ec: _0xe8a1e7,
    ug: _0x5b3f33,
    Ph: _0xe0b2f8,
    Qh: _0x31a947,
    Oh: _0x215928,
    Kh: _0x26287d,
    _f: _0x31ce35,
    Zf: _0x4e6efb,
    Yf: _0x5ab1e0,
    Lh: _0x149a16,
    Mh: _0x25a7e2,
    Nh: _0x38e444,
    ud: _0x332ebc,
    hb: _0x49d073,
    Jh: _0x2b79e4,
    Hh: _0x57ccfc,
    wg: _0x20e2a2,
    Ih: _0x211f1d,
    Ag: _0x4cae70,
    mg: _0x2ca22b,
    Gh: _0x44aadc,
    Bc: _0x55df26,
    Fh: _0x5e4dd2,
    Eh: _0x1d6785,
    Dh: _0x1769b8,
    Ch: _0x68f9fa,
    Bh: _0x249223,
    Ah: _0x5622be,
    $a: _0x48edb7,
    zh: _0x282a1f,
    bg: _0x26ff1a,
    yh: _0x4514cd,
    dc: _0x41e083,
    xh: _0xf9a22b,
    Eg: _0x35014f,
    Ig: _0x349356,
    Ca: _0xe38833,
    Ba: _0x188020,
    wh: _0x194eff,
    vh: _0x1d70fa,
    uh: _0x21e02f,
    rh: _0x7498e4,
    og: _0x4b6378,
    lg: _0x47a30e,
    sh: _0x5db3a5,
    ng: _0x50e000,
    th: _0x10ad86,
    qh: _0x13c883,
    lc: _0x8a4028,
    Lg: _0x2326c1,
    cc: _0x475239,
    nh: _0x48677f,
    oh: _0x2d060c,
    rg: _0x40e705,
    T: _0x1bd9e7,
    R: _0x5bb8de,
    wa: _0x417ee9,
    Aa: _0x277381,
    mh: _0x571440,
    ih: _0x277578,
    ic: _0xb1f03c,
    jh: _0x597500,
    ag: _0x344535,
    lh: _0xb3a9ec,
    Fg: _0xfc06a0,
    Jg: _0x15e8bf,
    kh: _0x28cd90,
    ci: _0xa071d7,
    fb: _0x55de08,
    Ya: _0x56bada,
    aa: _0x33dc47,
    $: _0x113680,
    bi: _0x33c7b4,
    pf: _0x28e96b,
    hh: _0xbec045,
    gh: _0x5318bf,
    Xh: _0x58bd52,
    Ea: _0x1ed162,
    fg: _0x2edb0d,
    ec: _0x2a40bd,
    _h: _0x134469,
    Y: _0x2564e4,
    Ng: _0x3bb5cf,
    Mg: _0x348ff2,
    ph: _0x24a91a,
    eh: _0x5bdfef,
    zc: _0x4743a2,
    fh: _0x5b67b2,
    Zh: _0x4f0c54,
    dh: _0xb4567d,
    sg: _0x238513,
    ch: _0x38298f,
    gg: _0x10a105,
    Xa: _0x4f5cc,
    ia: _0x49eb56,
    yc: _0x10450c,
    ai: _0x1e0562,
    _a: _0x386a01,
    Wh: _0x211947,
    Hg: _0x3a7c83,
    ah: _0x57d756,
    pg: _0x145ab8,
    bh: _0x5dfbcd,
    xc: _0x2d5f39,
    fc: _0x1ef28a,
    $f: _0x733236,
    kg: _0x2cc4bc,
    ca: _0x378a39,
    $g: _0x365117,
    tg: _0x467288,
    dg: _0x38a86e,
    eb: _0x174fcc,
    Zg: _0x48d38b,
    _g: _0x172e30,
    Xg: _0x42c28d,
    Yg: _0x2aa39f,
    Vg: _0x1e059c,
    yg: _0x2a624f,
    Wg: _0x3e57b8,
    db: _0x590c20,
    Ug: _0xeeca0f,
    vg: _0x55ff12,
    xg: _0x36530a,
    Tg: _0x3f113e,
    zg: _0x5f489f,
    Bg: _0x57f9b5,
    mc: _0x401752,
    ya: _0x249b45,
    nc: _0x3b90b7,
    oc: _0x3347fa,
    pc: _0x34e818,
    qc: _0x3eedea,
    rc: _0x2be477,
    bb: _0x9bd76b,
    sc: _0x174110,
    tc: _0x162f6f,
    ba: _0x236bff,
    uc: _0x4ec13d,
    vc: _0x1f2478,
    Za: _0x308fde,
    wc: _0x278c13,
    za: _0x1ed19e,
    qg: _0x3c5761,
    Pg: _0x3e17ec,
    $h: _0x4023ab,
    Qg: _0x1fb78a,
    Rg: _0x1a5808,
    hg: _0x501c75,
    Sg: _0x49d403,
    ab: _0x333f60,
    Qc: _0xddfcce,
    ii: _0x3a8fc2,
    H: _0xcccf64,
    N: _0x588315,
    Xc: _0x3e5160,
    K: _0x1fa8ae,
    Ad: _0x5245d6,
    mb: _0x3fb45b,
    Jc: _0x433136,
    V: _0x4154c3,
    F: _0x159e4d,
    Wc: _0x412f16,
    M: _0x52fc34,
    w: _0x2fa082,
    lb: _0x275ca1,
    Sc: _0x1a3238,
    d: _0x1214e5,
    Vc: _0x14dc30,
    _i: _0x3c045e,
    c: _0x17fa22,
    kb: _0x26d131,
    Ic: _0xf0129e,
    i: _0x486ca9,
    hi: _0x21cda4,
    qi: _0x232bf6,
    fi: _0x32dfee,
    q: _0x564596,
    Fa: _0x3ee539,
    Zi: _0x51eaa1,
    s: _0x49c463,
    u: _0x4f1e41,
    z: _0x385ad1,
    D: _0x23e94c,
    P: _0x37fafb,
    ob: _0x1c0895,
    Yc: _0x5681c1,
    Ld: _0x57a588,
    oe: _0x383ed0,
    Pd: _0x1464d3,
    Bd: _0x1d6609,
    Gd: _0xbadd38,
    ve: _0x393048,
    Qd: _0x213296,
    se: _0x1c5caa,
    te: _0x21240a,
    fe: _0x26083a,
    le: _0x501eaa,
    Md: _0x5d103e,
    Ed: _0x57ff81,
    Jd: _0x3273ae,
    Fd: _0x31fc2a,
    Rd: _0x4fe1d8,
    Zd: _0x12df95,
    ee: _0x346565,
    ue: _0x1e8cf3,
    $d: _0x540530,
    qe: _0x19e8a0,
    Ud: _0x276acf,
    re: _0x216b02,
    me: _0x408bd5,
    we: _0x14c0f2,
    wd: _0x5b8a33,
    ge: _0x5f2a33,
    he: _0x43bad7,
    ce: _0x32dc50,
    Yd: _0x258aff,
    ne: _0x2f4431,
    vd: _0x9cfcbd,
    Xd: _0x10e7ef,
    Nd: _0x3cbdff,
    de: _0x116b14,
    e: _0x1a00b9,
    l: _0x3fb531,
    uf: _0x47cdfb,
    y: _0x3bf273,
    G: _0xb65716,
    m: _0x2e9d5a,
    ja: _0x26de3f,
    Ac: _0x359ae4,
    W: _0x35b680,
    ki: _0x5c8603,
    O: _0x3bb433,
    g: _0x2ddd30,
    Yi: _0x4eb516,
    $i: _0x4a3e90,
    li: _0x1d03a0,
    n: _0x116d2e,
    ji: _0x5e1793,
    r: _0xc23950,
    t: _0x4d1af8,
    B: _0xda093b,
    bj: _0x1416fc,
    aj: _0x5779ff,
    L: _0xaf7b28,
    Td: _0x20cb64,
    I: _0x5b1d9b,
    U: _0x5d8171,
    Hc: _0x532c62,
    Ga: _0xf803c1,
    Rc: _0x1905e0,
    Cd: _0x168618,
    ke: _0xf7baad,
    Id: _0x5a74bb,
    Hd: _0x5e301b,
    Wd: _0x2dff32,
    je: _0x3a215f,
    pe: _0x45cf25,
    xd: _0x5da1d6,
    be: _0x140553,
    ae: _0x2c257d,
    ie: _0x24d7ce,
    Vd: _0x4d370b,
    _d: _0xd50296,
    Sd: _0x52a135,
    Od: _0x1065ea,
    Dd: _0x4193cb,
    Kd: _0x34bcd8,
    yd: _0x2998e6,
    zd: _0x45fddb,
    j: _0x3d746d,
    _: _0x49b6f8,
    v: _0x5dbfa2,
    Ka: _0x51d696,
    La: _0x1aa565,
    Ja: _0x553bdb,
    X: _0x5667e2,
    pb: _0x5a4207
  };
  var _0x2ea5d7 = _0x5c243f();
  var _0x8e11b7 = _0x3b068f.___wasm_call_ctors = function () {
    return (_0x8e11b7 = _0x3b068f.___wasm_call_ctors = _0x3b068f.asm.fk).apply(null, arguments);
  };
  var _0x18848c = _0x3b068f._ReleaseKeys = function () {
    return (_0x18848c = _0x3b068f._ReleaseKeys = _0x3b068f.asm.gk).apply(null, arguments);
  };
  var _0x6a20b8 = _0x3b068f._SendMessageFloat = function () {
    return (_0x6a20b8 = _0x3b068f._SendMessageFloat = _0x3b068f.asm.hk).apply(null, arguments);
  };
  var _0x18a80b = _0x3b068f._SendMessageString = function () {
    return (_0x18a80b = _0x3b068f._SendMessageString = _0x3b068f.asm.ik).apply(null, arguments);
  };
  var _0x379c12 = _0x3b068f._SendMessage = function () {
    return (_0x379c12 = _0x3b068f._SendMessage = _0x3b068f.asm.jk).apply(null, arguments);
  };
  var _0x4f812a = _0x3b068f._SetFullscreen = function () {
    return (_0x4f812a = _0x3b068f._SetFullscreen = _0x3b068f.asm.kk).apply(null, arguments);
  };
  var _0x148d76 = _0x3b068f._main = function () {
    return (_0x148d76 = _0x3b068f._main = _0x3b068f.asm.lk).apply(null, arguments);
  };
  var _0x540bb9 = _0x3b068f.___errno_location = function () {
    return (_0x540bb9 = _0x3b068f.___errno_location = _0x3b068f.asm.mk).apply(null, arguments);
  };
  var _0x4464fe = _0x3b068f._htonl = function () {
    return (_0x4464fe = _0x3b068f._htonl = _0x3b068f.asm.nk).apply(null, arguments);
  };
  var _0x212740 = _0x3b068f._htons = function () {
    return (_0x212740 = _0x3b068f._htons = _0x3b068f.asm.ok).apply(null, arguments);
  };
  var _0x2b4e40 = _0x3b068f._ntohs = function () {
    return (_0x2b4e40 = _0x3b068f._ntohs = _0x3b068f.asm.pk).apply(null, arguments);
  };
  var _0x4ec88a = _0x3b068f.__get_tzname = function () {
    return (_0x4ec88a = _0x3b068f.__get_tzname = _0x3b068f.asm.qk).apply(null, arguments);
  };
  var _0x524842 = _0x3b068f.__get_daylight = function () {
    return (_0x524842 = _0x3b068f.__get_daylight = _0x3b068f.asm.rk).apply(null, arguments);
  };
  var _0x323128 = _0x3b068f.__get_timezone = function () {
    return (_0x323128 = _0x3b068f.__get_timezone = _0x3b068f.asm.sk).apply(null, arguments);
  };
  var _0x1c6173 = _0x3b068f.stackSave = function () {
    return (_0x1c6173 = _0x3b068f.stackSave = _0x3b068f.asm.tk).apply(null, arguments);
  };
  var _0x176ee2 = _0x3b068f.stackRestore = function () {
    return (_0x176ee2 = _0x3b068f.stackRestore = _0x3b068f.asm.uk).apply(null, arguments);
  };
  var _0x2d607d = _0x3b068f.stackAlloc = function () {
    return (_0x2d607d = _0x3b068f.stackAlloc = _0x3b068f.asm.vk).apply(null, arguments);
  };
  var _0x47d732 = _0x3b068f._setThrew = function () {
    return (_0x47d732 = _0x3b068f._setThrew = _0x3b068f.asm.wk).apply(null, arguments);
  };
  var _0x1b8e2a = _0x3b068f.___cxa_can_catch = function () {
    return (_0x1b8e2a = _0x3b068f.___cxa_can_catch = _0x3b068f.asm.xk).apply(null, arguments);
  };
  var _0x241213 = _0x3b068f.___cxa_is_pointer_type = function () {
    return (_0x241213 = _0x3b068f.___cxa_is_pointer_type = _0x3b068f.asm.yk).apply(null, arguments);
  };
  var _0x58620b = _0x3b068f._malloc = function () {
    return (_0x58620b = _0x3b068f._malloc = _0x3b068f.asm.zk).apply(null, arguments);
  };
  var _0x41603f = _0x3b068f._free = function () {
    return (_0x41603f = _0x3b068f._free = _0x3b068f.asm.Ak).apply(null, arguments);
  };
  var _0x54dd5e = _0x3b068f._memalign = function () {
    return (_0x54dd5e = _0x3b068f._memalign = _0x3b068f.asm.Bk).apply(null, arguments);
  };
  var _0x43b956 = _0x3b068f._memset = function () {
    return (_0x43b956 = _0x3b068f._memset = _0x3b068f.asm.Ck).apply(null, arguments);
  };
  var _0xe130a9 = _0x3b068f._strlen = function () {
    return (_0xe130a9 = _0x3b068f._strlen = _0x3b068f.asm.Dk).apply(null, arguments);
  };
  var _0x275c34 = _0x3b068f.dynCall_iidiiii = function () {
    return (_0x275c34 = _0x3b068f.dynCall_iidiiii = _0x3b068f.asm.Fk).apply(null, arguments);
  };
  var _0x17d5d9 = _0x3b068f.dynCall_vii = function () {
    return (_0x17d5d9 = _0x3b068f.dynCall_vii = _0x3b068f.asm.Gk).apply(null, arguments);
  };
  var _0x46a462 = _0x3b068f.dynCall_iii = function () {
    return (_0x46a462 = _0x3b068f.dynCall_iii = _0x3b068f.asm.Hk).apply(null, arguments);
  };
  var _0x4ae28b = _0x3b068f.dynCall_ii = function () {
    return (_0x4ae28b = _0x3b068f.dynCall_ii = _0x3b068f.asm.Ik).apply(null, arguments);
  };
  var _0x3d67b4 = _0x3b068f.dynCall_iiii = function () {
    return (_0x3d67b4 = _0x3b068f.dynCall_iiii = _0x3b068f.asm.Jk).apply(null, arguments);
  };
  var _0x29ca77 = _0x3b068f.dynCall_jiji = function () {
    return (_0x29ca77 = _0x3b068f.dynCall_jiji = _0x3b068f.asm.Kk).apply(null, arguments);
  };
  var _0x1ba1b5 = _0x3b068f.dynCall_vi = function () {
    return (_0x1ba1b5 = _0x3b068f.dynCall_vi = _0x3b068f.asm.Lk).apply(null, arguments);
  };
  var _0x334f27 = _0x3b068f.dynCall_iiiii = function () {
    return (_0x334f27 = _0x3b068f.dynCall_iiiii = _0x3b068f.asm.Mk).apply(null, arguments);
  };
  var _0x38921c = _0x3b068f.dynCall_viii = function () {
    return (_0x38921c = _0x3b068f.dynCall_viii = _0x3b068f.asm.Nk).apply(null, arguments);
  };
  var _0x44d844 = _0x3b068f.dynCall_i = function () {
    return (_0x44d844 = _0x3b068f.dynCall_i = _0x3b068f.asm.Ok).apply(null, arguments);
  };
  var _0x3c8e57 = _0x3b068f.dynCall_v = function () {
    return (_0x3c8e57 = _0x3b068f.dynCall_v = _0x3b068f.asm.Pk).apply(null, arguments);
  };
  var _0x27a8aa = _0x3b068f.dynCall_viiiiii = function () {
    return (_0x27a8aa = _0x3b068f.dynCall_viiiiii = _0x3b068f.asm.Qk).apply(null, arguments);
  };
  var _0x52d7ae = _0x3b068f.dynCall_viiiii = function () {
    return (_0x52d7ae = _0x3b068f.dynCall_viiiii = _0x3b068f.asm.Rk).apply(null, arguments);
  };
  var _0x410cce = _0x3b068f.dynCall_viiii = function () {
    return (_0x410cce = _0x3b068f.dynCall_viiii = _0x3b068f.asm.Sk).apply(null, arguments);
  };
  var _0x5d858c = _0x3b068f.dynCall_iiiiii = function () {
    return (_0x5d858c = _0x3b068f.dynCall_iiiiii = _0x3b068f.asm.Tk).apply(null, arguments);
  };
  var _0x285177 = _0x3b068f.dynCall_iiij = function () {
    return (_0x285177 = _0x3b068f.dynCall_iiij = _0x3b068f.asm.Uk).apply(null, arguments);
  };
  var _0x228ea8 = _0x3b068f.dynCall_iiiiiiii = function () {
    return (_0x228ea8 = _0x3b068f.dynCall_iiiiiiii = _0x3b068f.asm.Vk).apply(null, arguments);
  };
  var _0x1fc45 = _0x3b068f.dynCall_iiijiii = function () {
    return (_0x1fc45 = _0x3b068f.dynCall_iiijiii = _0x3b068f.asm.Wk).apply(null, arguments);
  };
  var _0x230b3e = _0x3b068f.dynCall_iij = function () {
    return (_0x230b3e = _0x3b068f.dynCall_iij = _0x3b068f.asm.Xk).apply(null, arguments);
  };
  var _0x3a05e2 = _0x3b068f.dynCall_iiiiiii = function () {
    return (_0x3a05e2 = _0x3b068f.dynCall_iiiiiii = _0x3b068f.asm.Yk).apply(null, arguments);
  };
  var _0x193a00 = _0x3b068f.dynCall_jii = function () {
    return (_0x193a00 = _0x3b068f.dynCall_jii = _0x3b068f.asm.Zk).apply(null, arguments);
  };
  var _0x1774ea = _0x3b068f.dynCall_viiiiiii = function () {
    return (_0x1774ea = _0x3b068f.dynCall_viiiiiii = _0x3b068f.asm._k).apply(null, arguments);
  };
  var _0x4907c0 = _0x3b068f.dynCall_fiiffi = function () {
    return (_0x4907c0 = _0x3b068f.dynCall_fiiffi = _0x3b068f.asm.$k).apply(null, arguments);
  };
  var _0x4b0419 = _0x3b068f.dynCall_viiififii = function () {
    return (_0x4b0419 = _0x3b068f.dynCall_viiififii = _0x3b068f.asm.al).apply(null, arguments);
  };
  var _0x15664e = _0x3b068f.dynCall_jiii = function () {
    return (_0x15664e = _0x3b068f.dynCall_jiii = _0x3b068f.asm.bl).apply(null, arguments);
  };
  var _0x1d0976 = _0x3b068f.dynCall_viiff = function () {
    return (_0x1d0976 = _0x3b068f.dynCall_viiff = _0x3b068f.asm.cl).apply(null, arguments);
  };
  var _0x216d64 = _0x3b068f.dynCall_viiji = function () {
    return (_0x216d64 = _0x3b068f.dynCall_viiji = _0x3b068f.asm.dl).apply(null, arguments);
  };
  var _0x17469e = _0x3b068f.dynCall_fiii = function () {
    return (_0x17469e = _0x3b068f.dynCall_fiii = _0x3b068f.asm.el).apply(null, arguments);
  };
  var _0x23cfca = _0x3b068f.dynCall_viiiiiiiiiiii = function () {
    return (_0x23cfca = _0x3b068f.dynCall_viiiiiiiiiiii = _0x3b068f.asm.fl).apply(null, arguments);
  };
  var _0x3ce94d = _0x3b068f.dynCall_viiiiiiiiiiiii = function () {
    return (_0x3ce94d = _0x3b068f.dynCall_viiiiiiiiiiiii = _0x3b068f.asm.gl).apply(null, arguments);
  };
  var _0x4ad807 = _0x3b068f.dynCall_viiiiiiiiiiiiii = function () {
    return (_0x4ad807 = _0x3b068f.dynCall_viiiiiiiiiiiiii = _0x3b068f.asm.hl).apply(null, arguments);
  };
  var _0x59d034 = _0x3b068f.dynCall_viiiiiiiiiiiiiii = function () {
    return (_0x59d034 = _0x3b068f.dynCall_viiiiiiiiiiiiiii = _0x3b068f.asm.il).apply(null, arguments);
  };
  var _0x59e72a = _0x3b068f.dynCall_viiiiiiiiiiiiiiii = function () {
    return (_0x59e72a = _0x3b068f.dynCall_viiiiiiiiiiiiiiii = _0x3b068f.asm.jl).apply(null, arguments);
  };
  var _0x17913c = _0x3b068f.dynCall_viiiiiiiiiiiiiiiii = function () {
    return (_0x17913c = _0x3b068f.dynCall_viiiiiiiiiiiiiiiii = _0x3b068f.asm.kl).apply(null, arguments);
  };
  var _0x2e8a87 = _0x3b068f.dynCall_viiiiiiiiiiiiiiiiii = function () {
    return (_0x2e8a87 = _0x3b068f.dynCall_viiiiiiiiiiiiiiiiii = _0x3b068f.asm.ll).apply(null, arguments);
  };
  var _0x14f42e = _0x3b068f.dynCall_viidi = function () {
    return (_0x14f42e = _0x3b068f.dynCall_viidi = _0x3b068f.asm.ml).apply(null, arguments);
  };
  var _0x193a8a = _0x3b068f.dynCall_viifi = function () {
    return (_0x193a8a = _0x3b068f.dynCall_viifi = _0x3b068f.asm.nl).apply(null, arguments);
  };
  var _0x2c448d = _0x3b068f.dynCall_viiidi = function () {
    return (_0x2c448d = _0x3b068f.dynCall_viiidi = _0x3b068f.asm.ol).apply(null, arguments);
  };
  var _0x29e881 = _0x3b068f.dynCall_viiiji = function () {
    return (_0x29e881 = _0x3b068f.dynCall_viiiji = _0x3b068f.asm.pl).apply(null, arguments);
  };
  var _0x16170e = _0x3b068f.dynCall_viiifi = function () {
    return (_0x16170e = _0x3b068f.dynCall_viiifi = _0x3b068f.asm.ql).apply(null, arguments);
  };
  var _0x29c94f = _0x3b068f.dynCall_vijijii = function () {
    return (_0x29c94f = _0x3b068f.dynCall_vijijii = _0x3b068f.asm.rl).apply(null, arguments);
  };
  var _0x6e624 = _0x3b068f.dynCall_viiiiiiii = function () {
    return (_0x6e624 = _0x3b068f.dynCall_viiiiiiii = _0x3b068f.asm.sl).apply(null, arguments);
  };
  var _0x1f14de = _0x3b068f.dynCall_viiiiiiiii = function () {
    return (_0x1f14de = _0x3b068f.dynCall_viiiiiiiii = _0x3b068f.asm.tl).apply(null, arguments);
  };
  var _0x1416b9 = _0x3b068f.dynCall_viiiiiiiiii = function () {
    return (_0x1416b9 = _0x3b068f.dynCall_viiiiiiiiii = _0x3b068f.asm.ul).apply(null, arguments);
  };
  var _0x15bad2 = _0x3b068f.dynCall_viiiiiiiiiii = function () {
    return (_0x15bad2 = _0x3b068f.dynCall_viiiiiiiiiii = _0x3b068f.asm.vl).apply(null, arguments);
  };
  var _0x24420f = _0x3b068f.dynCall_jiiiiiiiiii = function () {
    return (_0x24420f = _0x3b068f.dynCall_jiiiiiiiiii = _0x3b068f.asm.wl).apply(null, arguments);
  };
  var _0x7c5673 = _0x3b068f.dynCall_jiiji = function () {
    return (_0x7c5673 = _0x3b068f.dynCall_jiiji = _0x3b068f.asm.xl).apply(null, arguments);
  };
  var _0x3db2fc = _0x3b068f.dynCall_ji = function () {
    return (_0x3db2fc = _0x3b068f.dynCall_ji = _0x3b068f.asm.yl).apply(null, arguments);
  };
  var _0x1edfc9 = _0x3b068f.dynCall_jjji = function () {
    return (_0x1edfc9 = _0x3b068f.dynCall_jjji = _0x3b068f.asm.zl).apply(null, arguments);
  };
  var _0x3f2e48 = _0x3b068f.dynCall_dii = function () {
    return (_0x3f2e48 = _0x3b068f.dynCall_dii = _0x3b068f.asm.Al).apply(null, arguments);
  };
  var _0x56e360 = _0x3b068f.dynCall_viijiiijiiii = function () {
    return (_0x56e360 = _0x3b068f.dynCall_viijiiijiiii = _0x3b068f.asm.Bl).apply(null, arguments);
  };
  var _0x6db05f = _0x3b068f.dynCall_ijji = function () {
    return (_0x6db05f = _0x3b068f.dynCall_ijji = _0x3b068f.asm.Cl).apply(null, arguments);
  };
  var _0x114b13 = _0x3b068f.dynCall_iiiiiiiii = function () {
    return (_0x114b13 = _0x3b068f.dynCall_iiiiiiiii = _0x3b068f.asm.Dl).apply(null, arguments);
  };
  var _0x592f79 = _0x3b068f.dynCall_iiji = function () {
    return (_0x592f79 = _0x3b068f.dynCall_iiji = _0x3b068f.asm.El).apply(null, arguments);
  };
  var _0x1ec159 = _0x3b068f.dynCall_iidi = function () {
    return (_0x1ec159 = _0x3b068f.dynCall_iidi = _0x3b068f.asm.Fl).apply(null, arguments);
  };
  var _0x446c89 = _0x3b068f.dynCall_iifi = function () {
    return (_0x446c89 = _0x3b068f.dynCall_iifi = _0x3b068f.asm.Gl).apply(null, arguments);
  };
  var _0x40be84 = _0x3b068f.dynCall_viiij = function () {
    return (_0x40be84 = _0x3b068f.dynCall_viiij = _0x3b068f.asm.Hl).apply(null, arguments);
  };
  var _0x162b40 = _0x3b068f.dynCall_diii = function () {
    return (_0x162b40 = _0x3b068f.dynCall_diii = _0x3b068f.asm.Il).apply(null, arguments);
  };
  var _0x378a95 = _0x3b068f.dynCall_iijji = function () {
    return (_0x378a95 = _0x3b068f.dynCall_iijji = _0x3b068f.asm.Jl).apply(null, arguments);
  };
  var _0x15be53 = _0x3b068f.dynCall_iiddi = function () {
    return (_0x15be53 = _0x3b068f.dynCall_iiddi = _0x3b068f.asm.Kl).apply(null, arguments);
  };
  var _0x37c0b0 = _0x3b068f.dynCall_iiffi = function () {
    return (_0x37c0b0 = _0x3b068f.dynCall_iiffi = _0x3b068f.asm.Ll).apply(null, arguments);
  };
  var _0x4ba5bc = _0x3b068f.dynCall_jdi = function () {
    return (_0x4ba5bc = _0x3b068f.dynCall_jdi = _0x3b068f.asm.Ml).apply(null, arguments);
  };
  var _0x30b331 = _0x3b068f.dynCall_vijiii = function () {
    return (_0x30b331 = _0x3b068f.dynCall_vijiii = _0x3b068f.asm.Nl).apply(null, arguments);
  };
  var _0x12f56b = _0x3b068f.dynCall_jiiii = function () {
    return (_0x12f56b = _0x3b068f.dynCall_jiiii = _0x3b068f.asm.Ol).apply(null, arguments);
  };
  var _0x1eee7f = _0x3b068f.dynCall_viji = function () {
    return (_0x1eee7f = _0x3b068f.dynCall_viji = _0x3b068f.asm.Pl).apply(null, arguments);
  };
  var _0x307ce5 = _0x3b068f.dynCall_ijiii = function () {
    return (_0x307ce5 = _0x3b068f.dynCall_ijiii = _0x3b068f.asm.Ql).apply(null, arguments);
  };
  var _0x148716 = _0x3b068f.dynCall_jji = function () {
    return (_0x148716 = _0x3b068f.dynCall_jji = _0x3b068f.asm.Rl).apply(null, arguments);
  };
  var _0x4cb6da = _0x3b068f.dynCall_viij = function () {
    return (_0x4cb6da = _0x3b068f.dynCall_viij = _0x3b068f.asm.Sl).apply(null, arguments);
  };
  var _0x5d1a39 = _0x3b068f.dynCall_iijii = function () {
    return (_0x5d1a39 = _0x3b068f.dynCall_iijii = _0x3b068f.asm.Tl).apply(null, arguments);
  };
  var _0x475037 = _0x3b068f.dynCall_viijji = function () {
    return (_0x475037 = _0x3b068f.dynCall_viijji = _0x3b068f.asm.Ul).apply(null, arguments);
  };
  var _0x4e0adf = _0x3b068f.dynCall_fii = function () {
    return (_0x4e0adf = _0x3b068f.dynCall_fii = _0x3b068f.asm.Vl).apply(null, arguments);
  };
  var _0x1d5fa4 = _0x3b068f.dynCall_vijii = function () {
    return (_0x1d5fa4 = _0x3b068f.dynCall_vijii = _0x3b068f.asm.Wl).apply(null, arguments);
  };
  var _0x4645b1 = _0x3b068f.dynCall_jidi = function () {
    return (_0x4645b1 = _0x3b068f.dynCall_jidi = _0x3b068f.asm.Xl).apply(null, arguments);
  };
  var _0xa50036 = _0x3b068f.dynCall_vifi = function () {
    return (_0xa50036 = _0x3b068f.dynCall_vifi = _0x3b068f.asm.Yl).apply(null, arguments);
  };
  var _0x2412eb = _0x3b068f.dynCall_viiiiiiifiifiii = function () {
    return (_0x2412eb = _0x3b068f.dynCall_viiiiiiifiifiii = _0x3b068f.asm.Zl).apply(null, arguments);
  };
  var _0x15d84e = _0x3b068f.dynCall_viiiiiiifddfiii = function () {
    return (_0x15d84e = _0x3b068f.dynCall_viiiiiiifddfiii = _0x3b068f.asm._l).apply(null, arguments);
  };
  var _0x276d8f = _0x3b068f.dynCall_viiiiiiifjjfiii = function () {
    return (_0x276d8f = _0x3b068f.dynCall_viiiiiiifjjfiii = _0x3b068f.asm.$l).apply(null, arguments);
  };
  var _0xa0d3a0 = _0x3b068f.dynCall_viiiiiiiffffiii = function () {
    return (_0xa0d3a0 = _0x3b068f.dynCall_viiiiiiiffffiii = _0x3b068f.asm.am).apply(null, arguments);
  };
  var _0x5d0252 = _0x3b068f.dynCall_viiiffffi = function () {
    return (_0x5d0252 = _0x3b068f.dynCall_viiiffffi = _0x3b068f.asm.bm).apply(null, arguments);
  };
  var _0x4645cc = _0x3b068f.dynCall_fffi = function () {
    return (_0x4645cc = _0x3b068f.dynCall_fffi = _0x3b068f.asm.cm).apply(null, arguments);
  };
  var _0x2f8199 = _0x3b068f.dynCall_ifi = function () {
    return (_0x2f8199 = _0x3b068f.dynCall_ifi = _0x3b068f.asm.dm).apply(null, arguments);
  };
  var _0x2bf3b8 = _0x3b068f.dynCall_idi = function () {
    return (_0x2bf3b8 = _0x3b068f.dynCall_idi = _0x3b068f.asm.em).apply(null, arguments);
  };
  var _0x1348f6 = _0x3b068f.dynCall_iiiiji = function () {
    return (_0x1348f6 = _0x3b068f.dynCall_iiiiji = _0x3b068f.asm.fm).apply(null, arguments);
  };
  var _0x3d3eae = _0x3b068f.dynCall_vidi = function () {
    return (_0x3d3eae = _0x3b068f.dynCall_vidi = _0x3b068f.asm.gm).apply(null, arguments);
  };
  var _0x541bbf = _0x3b068f.dynCall_dddi = function () {
    return (_0x541bbf = _0x3b068f.dynCall_dddi = _0x3b068f.asm.hm).apply(null, arguments);
  };
  var _0x38b0ad = _0x3b068f.dynCall_diiii = function () {
    return (_0x38b0ad = _0x3b068f.dynCall_diiii = _0x3b068f.asm.im).apply(null, arguments);
  };
  var _0x5013e3 = _0x3b068f.dynCall_iji = function () {
    return (_0x5013e3 = _0x3b068f.dynCall_iji = _0x3b068f.asm.jm).apply(null, arguments);
  };
  var _0x42d3d8 = _0x3b068f.dynCall_vijiiii = function () {
    return (_0x42d3d8 = _0x3b068f.dynCall_vijiiii = _0x3b068f.asm.km).apply(null, arguments);
  };
  var _0x4c1926 = _0x3b068f.dynCall_iiiiidii = function () {
    return (_0x4c1926 = _0x3b068f.dynCall_iiiiidii = _0x3b068f.asm.lm).apply(null, arguments);
  };
  var _0x3da354 = _0x3b068f.dynCall_iiiiiiiiii = function () {
    return (_0x3da354 = _0x3b068f.dynCall_iiiiiiiiii = _0x3b068f.asm.mm).apply(null, arguments);
  };
  var _0x272bc8 = _0x3b068f.dynCall_viijjii = function () {
    return (_0x272bc8 = _0x3b068f.dynCall_viijjii = _0x3b068f.asm.nm).apply(null, arguments);
  };
  var _0x4bd692 = _0x3b068f.dynCall_iiiji = function () {
    return (_0x4bd692 = _0x3b068f.dynCall_iiiji = _0x3b068f.asm.om).apply(null, arguments);
  };
  var _0x14ead5 = _0x3b068f.dynCall_iiidi = function () {
    return (_0x14ead5 = _0x3b068f.dynCall_iiidi = _0x3b068f.asm.pm).apply(null, arguments);
  };
  var _0xe7b8cf = _0x3b068f.dynCall_viiidii = function () {
    return (_0xe7b8cf = _0x3b068f.dynCall_viiidii = _0x3b068f.asm.qm).apply(null, arguments);
  };
  var _0x527cb5 = _0x3b068f.dynCall_iiiiidi = function () {
    return (_0x527cb5 = _0x3b068f.dynCall_iiiiidi = _0x3b068f.asm.rm).apply(null, arguments);
  };
  var _0x19da05 = _0x3b068f.dynCall_viffffi = function () {
    return (_0x19da05 = _0x3b068f.dynCall_viffffi = _0x3b068f.asm.sm).apply(null, arguments);
  };
  var _0x501810 = _0x3b068f.dynCall_iiiifi = function () {
    return (_0x501810 = _0x3b068f.dynCall_iiiifi = _0x3b068f.asm.tm).apply(null, arguments);
  };
  var _0x59b079 = _0x3b068f.dynCall_fifffi = function () {
    return (_0x59b079 = _0x3b068f.dynCall_fifffi = _0x3b068f.asm.um).apply(null, arguments);
  };
  var _0x1d57b0 = _0x3b068f.dynCall_jjii = function () {
    return (_0x1d57b0 = _0x3b068f.dynCall_jjii = _0x3b068f.asm.vm).apply(null, arguments);
  };
  var _0x5003af = _0x3b068f.dynCall_iijiii = function () {
    return (_0x5003af = _0x3b068f.dynCall_iijiii = _0x3b068f.asm.wm).apply(null, arguments);
  };
  var _0x3544f9 = _0x3b068f.dynCall_vifii = function () {
    return (_0x3544f9 = _0x3b068f.dynCall_vifii = _0x3b068f.asm.xm).apply(null, arguments);
  };
  var _0x2629da = _0x3b068f.dynCall_diiid = function () {
    return (_0x2629da = _0x3b068f.dynCall_diiid = _0x3b068f.asm.ym).apply(null, arguments);
  };
  var _0x5d45 = _0x3b068f.dynCall_jiiij = function () {
    return (_0x5d45 = _0x3b068f.dynCall_jiiij = _0x3b068f.asm.zm).apply(null, arguments);
  };
  var _0x19dff2 = _0x3b068f.dynCall_fiiif = function () {
    return (_0x19dff2 = _0x3b068f.dynCall_fiiif = _0x3b068f.asm.Am).apply(null, arguments);
  };
  var _0x4c89c9 = _0x3b068f.dynCall_viif = function () {
    return (_0x4c89c9 = _0x3b068f.dynCall_viif = _0x3b068f.asm.Bm).apply(null, arguments);
  };
  var _0x7b4b42 = _0x3b068f.dynCall_fiiii = function () {
    return (_0x7b4b42 = _0x3b068f.dynCall_fiiii = _0x3b068f.asm.Cm).apply(null, arguments);
  };
  var _0x1fb47d = _0x3b068f.dynCall_iiiiij = function () {
    return (_0x1fb47d = _0x3b068f.dynCall_iiiiij = _0x3b068f.asm.Dm).apply(null, arguments);
  };
  var _0x2524dc = _0x3b068f.dynCall_iiiiiiiiiji = function () {
    return (_0x2524dc = _0x3b068f.dynCall_iiiiiiiiiji = _0x3b068f.asm.Em).apply(null, arguments);
  };
  var _0x3db822 = _0x3b068f.dynCall_vji = function () {
    return (_0x3db822 = _0x3b068f.dynCall_vji = _0x3b068f.asm.Fm).apply(null, arguments);
  };
  var _0xf02c63 = _0x3b068f.dynCall_iiiifii = function () {
    return (_0xf02c63 = _0x3b068f.dynCall_iiiifii = _0x3b068f.asm.Gm).apply(null, arguments);
  };
  var _0x4a2b25 = _0x3b068f.dynCall_iiifii = function () {
    return (_0x4a2b25 = _0x3b068f.dynCall_iiifii = _0x3b068f.asm.Hm).apply(null, arguments);
  };
  var _0x51c0be = _0x3b068f.dynCall_viiiifii = function () {
    return (_0x51c0be = _0x3b068f.dynCall_viiiifii = _0x3b068f.asm.Im).apply(null, arguments);
  };
  var _0x37fd60 = _0x3b068f.dynCall_viiffi = function () {
    return (_0x37fd60 = _0x3b068f.dynCall_viiffi = _0x3b068f.asm.Jm).apply(null, arguments);
  };
  var _0x461fd8 = _0x3b068f.dynCall_iiiiiiiiiiii = function () {
    return (_0x461fd8 = _0x3b068f.dynCall_iiiiiiiiiiii = _0x3b068f.asm.Km).apply(null, arguments);
  };
  var _0x4cdfd6 = _0x3b068f.dynCall_iiiiiiiiiiiii = function () {
    return (_0x4cdfd6 = _0x3b068f.dynCall_iiiiiiiiiiiii = _0x3b068f.asm.Lm).apply(null, arguments);
  };
  var _0x35e472 = _0x3b068f.dynCall_iiiiiiiiiiiiii = function () {
    return (_0x35e472 = _0x3b068f.dynCall_iiiiiiiiiiiiii = _0x3b068f.asm.Mm).apply(null, arguments);
  };
  var _0x1f1302 = _0x3b068f.dynCall_iiiiiiiiiiiiiii = function () {
    return (_0x1f1302 = _0x3b068f.dynCall_iiiiiiiiiiiiiii = _0x3b068f.asm.Nm).apply(null, arguments);
  };
  var _0x3cb292 = _0x3b068f.dynCall_iiiiiiiiiiiiiiii = function () {
    return (_0x3cb292 = _0x3b068f.dynCall_iiiiiiiiiiiiiiii = _0x3b068f.asm.Om).apply(null, arguments);
  };
  var _0x3c5075 = _0x3b068f.dynCall_iiiiiiiiiiiiiiiii = function () {
    return (_0x3c5075 = _0x3b068f.dynCall_iiiiiiiiiiiiiiiii = _0x3b068f.asm.Pm).apply(null, arguments);
  };
  var _0x4c059d = _0x3b068f.dynCall_iiiiiiiiiiiiiiiiii = function () {
    return (_0x4c059d = _0x3b068f.dynCall_iiiiiiiiiiiiiiiiii = _0x3b068f.asm.Qm).apply(null, arguments);
  };
  var _0x23e1fb = _0x3b068f.dynCall_iiiiiiiiiiiiiiiiiii = function () {
    return (_0x23e1fb = _0x3b068f.dynCall_iiiiiiiiiiiiiiiiiii = _0x3b068f.asm.Rm).apply(null, arguments);
  };
  var _0xcd771c = _0x3b068f.dynCall_fifi = function () {
    return (_0xcd771c = _0x3b068f.dynCall_fifi = _0x3b068f.asm.Sm).apply(null, arguments);
  };
  var _0x38d62d = _0x3b068f.dynCall_fiifi = function () {
    return (_0x38d62d = _0x3b068f.dynCall_fiifi = _0x3b068f.asm.Tm).apply(null, arguments);
  };
  var _0x2d1080 = _0x3b068f.dynCall_iiiiiiiiiii = function () {
    return (_0x2d1080 = _0x3b068f.dynCall_iiiiiiiiiii = _0x3b068f.asm.Um).apply(null, arguments);
  };
  var _0x275568 = _0x3b068f.dynCall_viiiiiiiiifi = function () {
    return (_0x275568 = _0x3b068f.dynCall_viiiiiiiiifi = _0x3b068f.asm.Vm).apply(null, arguments);
  };
  var _0x420b0b = _0x3b068f.dynCall_fi = function () {
    return (_0x420b0b = _0x3b068f.dynCall_fi = _0x3b068f.asm.Wm).apply(null, arguments);
  };
  var _0x477a6c = _0x3b068f.dynCall_iiifi = function () {
    return (_0x477a6c = _0x3b068f.dynCall_iiifi = _0x3b068f.asm.Xm).apply(null, arguments);
  };
  var _0x3d06e1 = _0x3b068f.dynCall_viiiifi = function () {
    return (_0x3d06e1 = _0x3b068f.dynCall_viiiifi = _0x3b068f.asm.Ym).apply(null, arguments);
  };
  var _0x463100 = _0x3b068f.dynCall_ddiii = function () {
    return (_0x463100 = _0x3b068f.dynCall_ddiii = _0x3b068f.asm.Zm).apply(null, arguments);
  };
  var _0x5b2c60 = _0x3b068f.dynCall_viiijj = function () {
    return (_0x5b2c60 = _0x3b068f.dynCall_viiijj = _0x3b068f.asm._m).apply(null, arguments);
  };
  var _0x40afde = _0x3b068f.dynCall_jijiii = function () {
    return (_0x40afde = _0x3b068f.dynCall_jijiii = _0x3b068f.asm.$m).apply(null, arguments);
  };
  var _0x196980 = _0x3b068f.dynCall_iiijii = function () {
    return (_0x196980 = _0x3b068f.dynCall_iiijii = _0x3b068f.asm.an).apply(null, arguments);
  };
  var _0x463b18 = _0x3b068f.dynCall_iijiiii = function () {
    return (_0x463b18 = _0x3b068f.dynCall_iijiiii = _0x3b068f.asm.bn).apply(null, arguments);
  };
  var _0x42f29e = _0x3b068f.dynCall_viijii = function () {
    return (_0x42f29e = _0x3b068f.dynCall_viijii = _0x3b068f.asm.cn).apply(null, arguments);
  };
  var _0x54dac5 = _0x3b068f.dynCall_iijiiiiii = function () {
    return (_0x54dac5 = _0x3b068f.dynCall_iijiiiiii = _0x3b068f.asm.dn).apply(null, arguments);
  };
  var _0x20d895 = _0x3b068f.dynCall_iijjiiiiii = function () {
    return (_0x20d895 = _0x3b068f.dynCall_iijjiiiiii = _0x3b068f.asm.en).apply(null, arguments);
  };
  var _0x5e755a = _0x3b068f.dynCall_iiiijjii = function () {
    return (_0x5e755a = _0x3b068f.dynCall_iiiijjii = _0x3b068f.asm.fn).apply(null, arguments);
  };
  var _0x95692a = _0x3b068f.dynCall_vijjji = function () {
    return (_0x95692a = _0x3b068f.dynCall_vijjji = _0x3b068f.asm.gn).apply(null, arguments);
  };
  var _0x3eb847 = _0x3b068f.dynCall_viiiijiii = function () {
    return (_0x3eb847 = _0x3b068f.dynCall_viiiijiii = _0x3b068f.asm.hn).apply(null, arguments);
  };
  var _0x3edf2a = _0x3b068f.dynCall_dji = function () {
    return (_0x3edf2a = _0x3b068f.dynCall_dji = _0x3b068f.asm.jn).apply(null, arguments);
  };
  var _0x38bad8 = _0x3b068f.dynCall_fiffffi = function () {
    return (_0x38bad8 = _0x3b068f.dynCall_fiffffi = _0x3b068f.asm.kn).apply(null, arguments);
  };
  var _0x1bf609 = _0x3b068f.dynCall_viijiiiiii = function () {
    return (_0x1bf609 = _0x3b068f.dynCall_viijiiiiii = _0x3b068f.asm.ln).apply(null, arguments);
  };
  var _0x3b0acb = _0x3b068f.dynCall_vjjjiiii = function () {
    return (_0x3b0acb = _0x3b068f.dynCall_vjjjiiii = _0x3b068f.asm.mn).apply(null, arguments);
  };
  var _0xb60738 = _0x3b068f.dynCall_vjiiiii = function () {
    return (_0xb60738 = _0x3b068f.dynCall_vjiiiii = _0x3b068f.asm.nn).apply(null, arguments);
  };
  var _0x13b3df = _0x3b068f.dynCall_jiiiii = function () {
    return (_0x13b3df = _0x3b068f.dynCall_jiiiii = _0x3b068f.asm.on).apply(null, arguments);
  };
  var _0x3e3cb1 = _0x3b068f.dynCall_iiiffi = function () {
    return (_0x3e3cb1 = _0x3b068f.dynCall_iiiffi = _0x3b068f.asm.pn).apply(null, arguments);
  };
  var _0x2ced09 = _0x3b068f.dynCall_iifii = function () {
    return (_0x2ced09 = _0x3b068f.dynCall_iifii = _0x3b068f.asm.qn).apply(null, arguments);
  };
  var _0x4aab3e = _0x3b068f.dynCall_iiffii = function () {
    return (_0x4aab3e = _0x3b068f.dynCall_iiffii = _0x3b068f.asm.rn).apply(null, arguments);
  };
  var _0x58b532 = _0x3b068f.dynCall_iiifiii = function () {
    return (_0x58b532 = _0x3b068f.dynCall_iiifiii = _0x3b068f.asm.sn).apply(null, arguments);
  };
  var _0x2f18f0 = _0x3b068f.dynCall_iiififii = function () {
    return (_0x2f18f0 = _0x3b068f.dynCall_iiififii = _0x3b068f.asm.tn).apply(null, arguments);
  };
  var _0x1fb4ea = _0x3b068f.dynCall_iiifiiiii = function () {
    return (_0x1fb4ea = _0x3b068f.dynCall_iiifiiiii = _0x3b068f.asm.un).apply(null, arguments);
  };
  var _0x289f16 = _0x3b068f.dynCall_iiffifiiii = function () {
    return (_0x289f16 = _0x3b068f.dynCall_iiffifiiii = _0x3b068f.asm.vn).apply(null, arguments);
  };
  var _0x251ca3 = _0x3b068f.dynCall_iifiifiiii = function () {
    return (_0x251ca3 = _0x3b068f.dynCall_iifiifiiii = _0x3b068f.asm.wn).apply(null, arguments);
  };
  var _0x5a8297 = _0x3b068f.dynCall_iiiifiii = function () {
    return (_0x5a8297 = _0x3b068f.dynCall_iiiifiii = _0x3b068f.asm.xn).apply(null, arguments);
  };
  var _0x14a6b1 = _0x3b068f.dynCall_iiifiiii = function () {
    return (_0x14a6b1 = _0x3b068f.dynCall_iiifiiii = _0x3b068f.asm.yn).apply(null, arguments);
  };
  var _0x5a58e3 = _0x3b068f.dynCall_iiiffiii = function () {
    return (_0x5a58e3 = _0x3b068f.dynCall_iiiffiii = _0x3b068f.asm.zn).apply(null, arguments);
  };
  var _0x30372c = _0x3b068f.dynCall_iiiiifii = function () {
    return (_0x30372c = _0x3b068f.dynCall_iiiiifii = _0x3b068f.asm.An).apply(null, arguments);
  };
  var _0x176805 = _0x3b068f.dynCall_iifiifffii = function () {
    return (_0x176805 = _0x3b068f.dynCall_iifiifffii = _0x3b068f.asm.Bn).apply(null, arguments);
  };
  var _0x5ee41d = _0x3b068f.dynCall_viiiidiiii = function () {
    return (_0x5ee41d = _0x3b068f.dynCall_viiiidiiii = _0x3b068f.asm.Cn).apply(null, arguments);
  };
  var _0xc0bcb6 = _0x3b068f.dynCall_viffi = function () {
    return (_0xc0bcb6 = _0x3b068f.dynCall_viffi = _0x3b068f.asm.Dn).apply(null, arguments);
  };
  var _0xb97ea4 = _0x3b068f.dynCall_vfi = function () {
    return (_0xb97ea4 = _0x3b068f.dynCall_vfi = _0x3b068f.asm.En).apply(null, arguments);
  };
  var _0x394e4e = _0x3b068f.dynCall_vifffi = function () {
    return (_0x394e4e = _0x3b068f.dynCall_vifffi = _0x3b068f.asm.Fn).apply(null, arguments);
  };
  var _0x692809 = _0x3b068f.dynCall_jddii = function () {
    return (_0x692809 = _0x3b068f.dynCall_jddii = _0x3b068f.asm.Gn).apply(null, arguments);
  };
  var _0x43d1d6 = _0x3b068f.dynCall_dddii = function () {
    return (_0x43d1d6 = _0x3b068f.dynCall_dddii = _0x3b068f.asm.Hn).apply(null, arguments);
  };
  var _0x45f679 = _0x3b068f.dynCall_ddidi = function () {
    return (_0x45f679 = _0x3b068f.dynCall_ddidi = _0x3b068f.asm.In).apply(null, arguments);
  };
  var _0x35763f = _0x3b068f.dynCall_jjjfi = function () {
    return (_0x35763f = _0x3b068f.dynCall_jjjfi = _0x3b068f.asm.Jn).apply(null, arguments);
  };
  var _0x5b363d = _0x3b068f.dynCall_dddfi = function () {
    return (_0x5b363d = _0x3b068f.dynCall_dddfi = _0x3b068f.asm.Kn).apply(null, arguments);
  };
  var _0x464434 = _0x3b068f.dynCall_fjjji = function () {
    return (_0x464434 = _0x3b068f.dynCall_fjjji = _0x3b068f.asm.Ln).apply(null, arguments);
  };
  var _0x3ea020 = _0x3b068f.dynCall_jjjji = function () {
    return (_0x3ea020 = _0x3b068f.dynCall_jjjji = _0x3b068f.asm.Mn).apply(null, arguments);
  };
  var _0x8dce8d = _0x3b068f.dynCall_vffi = function () {
    return (_0x8dce8d = _0x3b068f.dynCall_vffi = _0x3b068f.asm.Nn).apply(null, arguments);
  };
  var _0x500cef = _0x3b068f.dynCall_ffffi = function () {
    return (_0x500cef = _0x3b068f.dynCall_ffffi = _0x3b068f.asm.On).apply(null, arguments);
  };
  var _0x508987 = _0x3b068f.dynCall_fiffi = function () {
    return (_0x508987 = _0x3b068f.dynCall_fiffi = _0x3b068f.asm.Pn).apply(null, arguments);
  };
  var _0x1955ce = _0x3b068f.dynCall_iifffiii = function () {
    return (_0x1955ce = _0x3b068f.dynCall_iifffiii = _0x3b068f.asm.Qn).apply(null, arguments);
  };
  var _0x1435e4 = _0x3b068f.dynCall_viiidiii = function () {
    return (_0x1435e4 = _0x3b068f.dynCall_viiidiii = _0x3b068f.asm.Rn).apply(null, arguments);
  };
  var _0x47427b = _0x3b068f.dynCall_ifffii = function () {
    return (_0x47427b = _0x3b068f.dynCall_ifffii = _0x3b068f.asm.Sn).apply(null, arguments);
  };
  var _0x519a55 = _0x3b068f.dynCall_vififi = function () {
    return (_0x519a55 = _0x3b068f.dynCall_vififi = _0x3b068f.asm.Tn).apply(null, arguments);
  };
  var _0x25eaef = _0x3b068f.dynCall_vififfi = function () {
    return (_0x25eaef = _0x3b068f.dynCall_vififfi = _0x3b068f.asm.Un).apply(null, arguments);
  };
  var _0x21ad8f = _0x3b068f.dynCall_vijjiiii = function () {
    return (_0x21ad8f = _0x3b068f.dynCall_vijjiiii = _0x3b068f.asm.Vn).apply(null, arguments);
  };
  var _0x40cff6 = _0x3b068f.dynCall_vidii = function () {
    return (_0x40cff6 = _0x3b068f.dynCall_vidii = _0x3b068f.asm.Wn).apply(null, arguments);
  };
  var _0x4d9a18 = _0x3b068f.dynCall_viifii = function () {
    return (_0x4d9a18 = _0x3b068f.dynCall_viifii = _0x3b068f.asm.Xn).apply(null, arguments);
  };
  var _0x5dcbf7 = _0x3b068f.dynCall_viffffffi = function () {
    return (_0x5dcbf7 = _0x3b068f.dynCall_viffffffi = _0x3b068f.asm.Yn).apply(null, arguments);
  };
  var _0x109039 = _0x3b068f.dynCall_iifiii = function () {
    return (_0x109039 = _0x3b068f.dynCall_iifiii = _0x3b068f.asm.Zn).apply(null, arguments);
  };
  var _0x56b0af = _0x3b068f.dynCall_viifiii = function () {
    return (_0x56b0af = _0x3b068f.dynCall_viifiii = _0x3b068f.asm._n).apply(null, arguments);
  };
  var _0xd2c3d7 = _0x3b068f.dynCall_ijjiiii = function () {
    return (_0xd2c3d7 = _0x3b068f.dynCall_ijjiiii = _0x3b068f.asm.$n).apply(null, arguments);
  };
  var _0x139953 = _0x3b068f.dynCall_viiifffi = function () {
    return (_0x139953 = _0x3b068f.dynCall_viiifffi = _0x3b068f.asm.ao).apply(null, arguments);
  };
  var _0x1505ed = _0x3b068f.dynCall_viiifififfi = function () {
    return (_0x1505ed = _0x3b068f.dynCall_viiifififfi = _0x3b068f.asm.bo).apply(null, arguments);
  };
  var _0x475b03 = _0x3b068f.dynCall_viiiiiiififfi = function () {
    return (_0x475b03 = _0x3b068f.dynCall_viiiiiiififfi = _0x3b068f.asm.co).apply(null, arguments);
  };
  var _0x243527 = _0x3b068f.dynCall_viiiiiifii = function () {
    return (_0x243527 = _0x3b068f.dynCall_viiiiiifii = _0x3b068f.asm.eo).apply(null, arguments);
  };
  var _0x10285e = _0x3b068f.dynCall_viiiifiii = function () {
    return (_0x10285e = _0x3b068f.dynCall_viiiifiii = _0x3b068f.asm.fo).apply(null, arguments);
  };
  var _0x19a962 = _0x3b068f.dynCall_viiifii = function () {
    return (_0x19a962 = _0x3b068f.dynCall_viiifii = _0x3b068f.asm.go).apply(null, arguments);
  };
  var _0x34d661 = _0x3b068f.dynCall_ffi = function () {
    return (_0x34d661 = _0x3b068f.dynCall_ffi = _0x3b068f.asm.ho).apply(null, arguments);
  };
  var _0x568809 = _0x3b068f.dynCall_vfffffffii = function () {
    return (_0x568809 = _0x3b068f.dynCall_vfffffffii = _0x3b068f.asm.io).apply(null, arguments);
  };
  var _0x2bac15 = _0x3b068f.dynCall_fiiiiiifi = function () {
    return (_0x2bac15 = _0x3b068f.dynCall_fiiiiiifi = _0x3b068f.asm.jo).apply(null, arguments);
  };
  var _0x252065 = _0x3b068f.dynCall_viiddi = function () {
    return (_0x252065 = _0x3b068f.dynCall_viiddi = _0x3b068f.asm.ko).apply(null, arguments);
  };
  var _0x2cde10 = _0x3b068f.dynCall_viiiijii = function () {
    return (_0x2cde10 = _0x3b068f.dynCall_viiiijii = _0x3b068f.asm.lo).apply(null, arguments);
  };
  var _0x7c9544 = _0x3b068f.dynCall_vifiiii = function () {
    return (_0x7c9544 = _0x3b068f.dynCall_vifiiii = _0x3b068f.asm.mo).apply(null, arguments);
  };
  var _0xcbcb36 = _0x3b068f.dynCall_fiifii = function () {
    return (_0xcbcb36 = _0x3b068f.dynCall_fiifii = _0x3b068f.asm.no).apply(null, arguments);
  };
  var _0x4d7e40 = _0x3b068f.dynCall_viiiiiifiifiiii = function () {
    return (_0x4d7e40 = _0x3b068f.dynCall_viiiiiifiifiiii = _0x3b068f.asm.oo).apply(null, arguments);
  };
  var _0x49a331 = _0x3b068f.dynCall_iiffffiii = function () {
    return (_0x49a331 = _0x3b068f.dynCall_iiffffiii = _0x3b068f.asm.po).apply(null, arguments);
  };
  var _0xb338b = _0x3b068f.dynCall_viiiiifi = function () {
    return (_0xb338b = _0x3b068f.dynCall_viiiiifi = _0x3b068f.asm.qo).apply(null, arguments);
  };
  var _0xf7795 = _0x3b068f.dynCall_iiidfi = function () {
    return (_0xf7795 = _0x3b068f.dynCall_iiidfi = _0x3b068f.asm.ro).apply(null, arguments);
  };
  var _0x18a48 = _0x3b068f.dynCall_iiijfi = function () {
    return (_0x18a48 = _0x3b068f.dynCall_iiijfi = _0x3b068f.asm.so).apply(null, arguments);
  };
  var _0x429654 = _0x3b068f.dynCall_iiiffii = function () {
    return (_0x429654 = _0x3b068f.dynCall_iiiffii = _0x3b068f.asm.to).apply(null, arguments);
  };
  var _0x58eb01 = _0x3b068f.dynCall_iifffi = function () {
    return (_0x58eb01 = _0x3b068f.dynCall_iifffi = _0x3b068f.asm.uo).apply(null, arguments);
  };
  var _0xd756c6 = _0x3b068f.dynCall_iiiififi = function () {
    return (_0xd756c6 = _0x3b068f.dynCall_iiiififi = _0x3b068f.asm.vo).apply(null, arguments);
  };
  var _0x404911 = _0x3b068f.dynCall_iiiffifiiii = function () {
    return (_0x404911 = _0x3b068f.dynCall_iiiffifiiii = _0x3b068f.asm.wo).apply(null, arguments);
  };
  var _0x370f61 = _0x3b068f.dynCall_iiifiifiii = function () {
    return (_0x370f61 = _0x3b068f.dynCall_iiifiifiii = _0x3b068f.asm.xo).apply(null, arguments);
  };
  var _0xca4377 = _0x3b068f.dynCall_iiifiifiiiii = function () {
    return (_0xca4377 = _0x3b068f.dynCall_iiifiifiiiii = _0x3b068f.asm.yo).apply(null, arguments);
  };
  var _0x371cc5 = _0x3b068f.dynCall_ifii = function () {
    return (_0x371cc5 = _0x3b068f.dynCall_ifii = _0x3b068f.asm.zo).apply(null, arguments);
  };
  var _0x4bf875 = _0x3b068f.dynCall_ffffii = function () {
    return (_0x4bf875 = _0x3b068f.dynCall_ffffii = _0x3b068f.asm.Ao).apply(null, arguments);
  };
  var _0x87a6ff = _0x3b068f.dynCall_ffffifi = function () {
    return (_0x87a6ff = _0x3b068f.dynCall_ffffifi = _0x3b068f.asm.Bo).apply(null, arguments);
  };
  var _0x5c8bf1 = _0x3b068f.dynCall_ffffiffi = function () {
    return (_0x5c8bf1 = _0x3b068f.dynCall_ffffiffi = _0x3b068f.asm.Co).apply(null, arguments);
  };
  var _0x191e9e = _0x3b068f.dynCall_viiififi = function () {
    return (_0x191e9e = _0x3b068f.dynCall_viiififi = _0x3b068f.asm.Do).apply(null, arguments);
  };
  var _0x2ba08c = _0x3b068f.dynCall_viiififfi = function () {
    return (_0x2ba08c = _0x3b068f.dynCall_viiififfi = _0x3b068f.asm.Eo).apply(null, arguments);
  };
  var _0x5dc235 = _0x3b068f.dynCall_ifiii = function () {
    return (_0x5dc235 = _0x3b068f.dynCall_ifiii = _0x3b068f.asm.Fo).apply(null, arguments);
  };
  var _0xab2410 = _0x3b068f.dynCall_vifiii = function () {
    return (_0xab2410 = _0x3b068f.dynCall_vifiii = _0x3b068f.asm.Go).apply(null, arguments);
  };
  var _0x5dc8e6 = _0x3b068f.dynCall_iifiiiiii = function () {
    return (_0x5dc8e6 = _0x3b068f.dynCall_iifiiiiii = _0x3b068f.asm.Ho).apply(null, arguments);
  };
  var _0x383763 = _0x3b068f.dynCall_iifiiiii = function () {
    return (_0x383763 = _0x3b068f.dynCall_iifiiiii = _0x3b068f.asm.Io).apply(null, arguments);
  };
  var _0x58f5c4 = _0x3b068f.dynCall_iiffiiiii = function () {
    return (_0x58f5c4 = _0x3b068f.dynCall_iiffiiiii = _0x3b068f.asm.Jo).apply(null, arguments);
  };
  var _0x2ac466 = _0x3b068f.dynCall_iiffifiii = function () {
    return (_0x2ac466 = _0x3b068f.dynCall_iiffifiii = _0x3b068f.asm.Ko).apply(null, arguments);
  };
  var _0x284f2a = _0x3b068f.dynCall_iifiifiii = function () {
    return (_0x284f2a = _0x3b068f.dynCall_iifiifiii = _0x3b068f.asm.Lo).apply(null, arguments);
  };
  var _0x51da2b = _0x3b068f.dynCall_iififi = function () {
    return (_0x51da2b = _0x3b068f.dynCall_iififi = _0x3b068f.asm.Mo).apply(null, arguments);
  };
  var _0x13b24a = _0x3b068f.dynCall_iiififi = function () {
    return (_0x13b24a = _0x3b068f.dynCall_iiififi = _0x3b068f.asm.No).apply(null, arguments);
  };
  var _0x4e2774 = _0x3b068f.dynCall_iiiiifiiii = function () {
    return (_0x4e2774 = _0x3b068f.dynCall_iiiiifiiii = _0x3b068f.asm.Oo).apply(null, arguments);
  };
  var _0x363121 = _0x3b068f.dynCall_viidiii = function () {
    return (_0x363121 = _0x3b068f.dynCall_viidiii = _0x3b068f.asm.Po).apply(null, arguments);
  };
  var _0x2f23c8 = _0x3b068f.dynCall_diidi = function () {
    return (_0x2f23c8 = _0x3b068f.dynCall_diidi = _0x3b068f.asm.Qo).apply(null, arguments);
  };
  var _0x495042 = _0x3b068f.dynCall_fiifdi = function () {
    return (_0x495042 = _0x3b068f.dynCall_fiifdi = _0x3b068f.asm.Ro).apply(null, arguments);
  };
  var _0x2359e8 = _0x3b068f.dynCall_viiiiiifddfiiii = function () {
    return (_0x2359e8 = _0x3b068f.dynCall_viiiiiifddfiiii = _0x3b068f.asm.So).apply(null, arguments);
  };
  var _0x107d20 = _0x3b068f.dynCall_viijiii = function () {
    return (_0x107d20 = _0x3b068f.dynCall_viijiii = _0x3b068f.asm.To).apply(null, arguments);
  };
  var _0x320669 = _0x3b068f.dynCall_fiifji = function () {
    return (_0x320669 = _0x3b068f.dynCall_fiifji = _0x3b068f.asm.Uo).apply(null, arguments);
  };
  var _0x3ff406 = _0x3b068f.dynCall_viiiiiifjjfiiii = function () {
    return (_0x3ff406 = _0x3b068f.dynCall_viiiiiifjjfiiii = _0x3b068f.asm.Vo).apply(null, arguments);
  };
  var _0x437209 = _0x3b068f.dynCall_viiiiiiffffiiii = function () {
    return (_0x437209 = _0x3b068f.dynCall_viiiiiiffffiiii = _0x3b068f.asm.Wo).apply(null, arguments);
  };
  var _0x5dff80 = _0x3b068f.dynCall_viifiiii = function () {
    return (_0x5dff80 = _0x3b068f.dynCall_viifiiii = _0x3b068f.asm.Xo).apply(null, arguments);
  };
  var _0x35d33a = _0x3b068f.dynCall_iiiiifiii = function () {
    return (_0x35d33a = _0x3b068f.dynCall_iiiiifiii = _0x3b068f.asm.Yo).apply(null, arguments);
  };
  var _0x5813e6 = _0x3b068f.dynCall_fffffi = function () {
    return (_0x5813e6 = _0x3b068f.dynCall_fffffi = _0x3b068f.asm.Zo).apply(null, arguments);
  };
  var _0x1dbf69 = _0x3b068f.dynCall_fiiffffi = function () {
    return (_0x1dbf69 = _0x3b068f.dynCall_fiiffffi = _0x3b068f.asm._o).apply(null, arguments);
  };
  var _0x31b738 = _0x3b068f.dynCall_fffifffi = function () {
    return (_0x31b738 = _0x3b068f.dynCall_fffifffi = _0x3b068f.asm.$o).apply(null, arguments);
  };
  var _0x41ba8a = _0x3b068f.dynCall_viiijiii = function () {
    return (_0x41ba8a = _0x3b068f.dynCall_viiijiii = _0x3b068f.asm.ap).apply(null, arguments);
  };
  var _0x30e3f4 = _0x3b068f.dynCall_vfiii = function () {
    return (_0x30e3f4 = _0x3b068f.dynCall_vfiii = _0x3b068f.asm.bp).apply(null, arguments);
  };
  var _0x4f3319 = _0x3b068f.dynCall_ifiiii = function () {
    return (_0x4f3319 = _0x3b068f.dynCall_ifiiii = _0x3b068f.asm.cp).apply(null, arguments);
  };
  var _0x56101d = _0x3b068f.dynCall_idiiiii = function () {
    return (_0x56101d = _0x3b068f.dynCall_idiiiii = _0x3b068f.asm.dp).apply(null, arguments);
  };
  var _0x598515 = _0x3b068f.dynCall_idiiii = function () {
    return (_0x598515 = _0x3b068f.dynCall_idiiii = _0x3b068f.asm.ep).apply(null, arguments);
  };
  var _0x180f64 = _0x3b068f.dynCall_idii = function () {
    return (_0x180f64 = _0x3b068f.dynCall_idii = _0x3b068f.asm.fp).apply(null, arguments);
  };
  var _0x4826bd = _0x3b068f.dynCall_ijii = function () {
    return (_0x4826bd = _0x3b068f.dynCall_ijii = _0x3b068f.asm.gp).apply(null, arguments);
  };
  var _0x36c844 = _0x3b068f.dynCall_iidii = function () {
    return (_0x36c844 = _0x3b068f.dynCall_iidii = _0x3b068f.asm.hp).apply(null, arguments);
  };
  var _0x12cea6 = _0x3b068f.dynCall_iidiii = function () {
    return (_0x12cea6 = _0x3b068f.dynCall_iidiii = _0x3b068f.asm.ip).apply(null, arguments);
  };
  var _0x26d178 = _0x3b068f.dynCall_iiijiiii = function () {
    return (_0x26d178 = _0x3b068f.dynCall_iiijiiii = _0x3b068f.asm.jp).apply(null, arguments);
  };
  var _0x4ab377 = _0x3b068f.dynCall_vjiiii = function () {
    return (_0x4ab377 = _0x3b068f.dynCall_vjiiii = _0x3b068f.asm.kp).apply(null, arguments);
  };
  var _0x59a0d3 = _0x3b068f.dynCall_iddi = function () {
    return (_0x59a0d3 = _0x3b068f.dynCall_iddi = _0x3b068f.asm.lp).apply(null, arguments);
  };
  var _0x41f9d6 = _0x3b068f.dynCall_viiiiijii = function () {
    return (_0x41f9d6 = _0x3b068f.dynCall_viiiiijii = _0x3b068f.asm.mp).apply(null, arguments);
  };
  var _0x106dc8 = _0x3b068f.dynCall_viiiijiiiiiiii = function () {
    return (_0x106dc8 = _0x3b068f.dynCall_viiiijiiiiiiii = _0x3b068f.asm.np).apply(null, arguments);
  };
  var _0x2c20a6 = _0x3b068f.dynCall_viifiifi = function () {
    return (_0x2c20a6 = _0x3b068f.dynCall_viifiifi = _0x3b068f.asm.op).apply(null, arguments);
  };
  var _0x47fdf8 = _0x3b068f.dynCall_vifiifi = function () {
    return (_0x47fdf8 = _0x3b068f.dynCall_vifiifi = _0x3b068f.asm.pp).apply(null, arguments);
  };
  var _0x540ea5 = _0x3b068f.dynCall_viffii = function () {
    return (_0x540ea5 = _0x3b068f.dynCall_viffii = _0x3b068f.asm.qp).apply(null, arguments);
  };
  var _0x1eac43 = _0x3b068f.dynCall_viddfffi = function () {
    return (_0x1eac43 = _0x3b068f.dynCall_viddfffi = _0x3b068f.asm.rp).apply(null, arguments);
  };
  var _0x4e13e9 = _0x3b068f.dynCall_viidfffi = function () {
    return (_0x4e13e9 = _0x3b068f.dynCall_viidfffi = _0x3b068f.asm.sp).apply(null, arguments);
  };
  var _0x4ff01e = _0x3b068f.dynCall_vidifffi = function () {
    return (_0x4ff01e = _0x3b068f.dynCall_vidifffi = _0x3b068f.asm.tp).apply(null, arguments);
  };
  var _0x4e2562 = _0x3b068f.dynCall_viddi = function () {
    return (_0x4e2562 = _0x3b068f.dynCall_viddi = _0x3b068f.asm.up).apply(null, arguments);
  };
  var _0x5069b1 = _0x3b068f.dynCall_viiiiiiifi = function () {
    return (_0x5069b1 = _0x3b068f.dynCall_viiiiiiifi = _0x3b068f.asm.vp).apply(null, arguments);
  };
  var _0x4b2591 = _0x3b068f.dynCall_viiiiffffffffii = function () {
    return (_0x4b2591 = _0x3b068f.dynCall_viiiiffffffffii = _0x3b068f.asm.wp).apply(null, arguments);
  };
  var _0x19c6de = _0x3b068f.dynCall_viidii = function () {
    return (_0x19c6de = _0x3b068f.dynCall_viidii = _0x3b068f.asm.xp).apply(null, arguments);
  };
  var _0xef3880 = _0x3b068f.dynCall_iffi = function () {
    return (_0xef3880 = _0x3b068f.dynCall_iffi = _0x3b068f.asm.yp).apply(null, arguments);
  };
  var _0x153324 = _0x3b068f.dynCall_viiffffi = function () {
    return (_0x153324 = _0x3b068f.dynCall_viiffffi = _0x3b068f.asm.zp).apply(null, arguments);
  };
  var _0x60f1a2 = _0x3b068f.dynCall_viiffii = function () {
    return (_0x60f1a2 = _0x3b068f.dynCall_viiffii = _0x3b068f.asm.Ap).apply(null, arguments);
  };
  var _0x52d056 = _0x3b068f.dynCall_ffii = function () {
    return (_0x52d056 = _0x3b068f.dynCall_ffii = _0x3b068f.asm.Bp).apply(null, arguments);
  };
  var _0x43271a = _0x3b068f.dynCall_fiiiii = function () {
    return (_0x43271a = _0x3b068f.dynCall_fiiiii = _0x3b068f.asm.Cp).apply(null, arguments);
  };
  var _0xea7364 = _0x3b068f.dynCall_ddddi = function () {
    return (_0xea7364 = _0x3b068f.dynCall_ddddi = _0x3b068f.asm.Dp).apply(null, arguments);
  };
  var _0x5f4197 = _0x3b068f.dynCall_ddi = function () {
    return (_0x5f4197 = _0x3b068f.dynCall_ddi = _0x3b068f.asm.Ep).apply(null, arguments);
  };
  var _0x25279d = _0x3b068f.dynCall_viiijiiii = function () {
    return (_0x25279d = _0x3b068f.dynCall_viiijiiii = _0x3b068f.asm.Fp).apply(null, arguments);
  };
  var _0x5d6498 = _0x3b068f.dynCall_jijii = function () {
    return (_0x5d6498 = _0x3b068f.dynCall_jijii = _0x3b068f.asm.Gp).apply(null, arguments);
  };
  var _0x58912d = _0x3b068f.dynCall_iiiiiji = function () {
    return (_0x58912d = _0x3b068f.dynCall_iiiiiji = _0x3b068f.asm.Hp).apply(null, arguments);
  };
  var _0x488e5a = _0x3b068f.dynCall_viiijii = function () {
    return (_0x488e5a = _0x3b068f.dynCall_viiijii = _0x3b068f.asm.Ip).apply(null, arguments);
  };
  var _0x40b04b = _0x3b068f.dynCall_viiiiiji = function () {
    return (_0x40b04b = _0x3b068f.dynCall_viiiiiji = _0x3b068f.asm.Jp).apply(null, arguments);
  };
  var _0x199704 = _0x3b068f.dynCall_vdiiiii = function () {
    return (_0x199704 = _0x3b068f.dynCall_vdiiiii = _0x3b068f.asm.Kp).apply(null, arguments);
  };
  var _0x2a7fec = _0x3b068f.dynCall_diiji = function () {
    return (_0x2a7fec = _0x3b068f.dynCall_diiji = _0x3b068f.asm.Lp).apply(null, arguments);
  };
  var _0x3ebab6 = _0x3b068f.dynCall_vjiiiiiiii = function () {
    return (_0x3ebab6 = _0x3b068f.dynCall_vjiiiiiiii = _0x3b068f.asm.Mp).apply(null, arguments);
  };
  var _0x26ffb5 = _0x3b068f.dynCall_vjiiiiiii = function () {
    return (_0x26ffb5 = _0x3b068f.dynCall_vjiiiiiii = _0x3b068f.asm.Np).apply(null, arguments);
  };
  var _0x87e71a = _0x3b068f.dynCall_ijiiii = function () {
    return (_0x87e71a = _0x3b068f.dynCall_ijiiii = _0x3b068f.asm.Op).apply(null, arguments);
  };
  var _0x43f080 = _0x3b068f.dynCall_diji = function () {
    return (_0x43f080 = _0x3b068f.dynCall_diji = _0x3b068f.asm.Pp).apply(null, arguments);
  };
  var _0x58e40d = _0x3b068f.dynCall_fidi = function () {
    return (_0x58e40d = _0x3b068f.dynCall_fidi = _0x3b068f.asm.Qp).apply(null, arguments);
  };
  var _0x37558d = _0x3b068f.dynCall_vfffi = function () {
    return (_0x37558d = _0x3b068f.dynCall_vfffi = _0x3b068f.asm.Rp).apply(null, arguments);
  };
  var _0x5268cb = _0x3b068f.dynCall_vffffi = function () {
    return (_0x5268cb = _0x3b068f.dynCall_vffffi = _0x3b068f.asm.Sp).apply(null, arguments);
  };
  var _0x99cb0f = _0x3b068f.dynCall_viiiiffi = function () {
    return (_0x99cb0f = _0x3b068f.dynCall_viiiiffi = _0x3b068f.asm.Tp).apply(null, arguments);
  };
  var _0xb93b20 = _0x3b068f.dynCall_viiiffii = function () {
    return (_0xb93b20 = _0x3b068f.dynCall_viiiffii = _0x3b068f.asm.Up).apply(null, arguments);
  };
  var _0x3d1dbf = _0x3b068f.dynCall_vijji = function () {
    return (_0x3d1dbf = _0x3b068f.dynCall_vijji = _0x3b068f.asm.Vp).apply(null, arguments);
  };
  var _0x41112d = _0x3b068f.dynCall_vffffiiii = function () {
    return (_0x41112d = _0x3b068f.dynCall_vffffiiii = _0x3b068f.asm.Wp).apply(null, arguments);
  };
  var _0x18ad10 = _0x3b068f.dynCall_vifffii = function () {
    return (_0x18ad10 = _0x3b068f.dynCall_vifffii = _0x3b068f.asm.Xp).apply(null, arguments);
  };
  var _0x272d64 = _0x3b068f.dynCall_viiiifffi = function () {
    return (_0x272d64 = _0x3b068f.dynCall_viiiifffi = _0x3b068f.asm.Yp).apply(null, arguments);
  };
  var _0x55c8bc = _0x3b068f.dynCall_fffifi = function () {
    return (_0x55c8bc = _0x3b068f.dynCall_fffifi = _0x3b068f.asm.Zp).apply(null, arguments);
  };
  var _0x633ba7 = _0x3b068f.dynCall_vfii = function () {
    return (_0x633ba7 = _0x3b068f.dynCall_vfii = _0x3b068f.asm._p).apply(null, arguments);
  };
  var _0x26099b = _0x3b068f.dynCall_iiiifiiiii = function () {
    return (_0x26099b = _0x3b068f.dynCall_iiiifiiiii = _0x3b068f.asm.$p).apply(null, arguments);
  };
  var _0x43d7d9 = _0x3b068f.dynCall_iiiifiiii = function () {
    return (_0x43d7d9 = _0x3b068f.dynCall_iiiifiiii = _0x3b068f.asm.aq).apply(null, arguments);
  };
  var _0x4b4015 = _0x3b068f.dynCall_vijjii = function () {
    return (_0x4b4015 = _0x3b068f.dynCall_vijjii = _0x3b068f.asm.bq).apply(null, arguments);
  };
  var _0x1e8edd = _0x3b068f.dynCall_viiiififfi = function () {
    return (_0x1e8edd = _0x3b068f.dynCall_viiiififfi = _0x3b068f.asm.cq).apply(null, arguments);
  };
  var _0x410c9a = _0x3b068f.dynCall_viiiifiifi = function () {
    return (_0x410c9a = _0x3b068f.dynCall_viiiifiifi = _0x3b068f.asm.dq).apply(null, arguments);
  };
  var _0x4fd70e = _0x3b068f.dynCall_viiiifiiii = function () {
    return (_0x4fd70e = _0x3b068f.dynCall_viiiifiiii = _0x3b068f.asm.eq).apply(null, arguments);
  };
  var _0x31e521 = _0x3b068f.dynCall_viiiifiiiii = function () {
    return (_0x31e521 = _0x3b068f.dynCall_viiiifiiiii = _0x3b068f.asm.fq).apply(null, arguments);
  };
  var _0x55902d = _0x3b068f.dynCall_viiiifiiiiiiii = function () {
    return (_0x55902d = _0x3b068f.dynCall_viiiifiiiiiiii = _0x3b068f.asm.gq).apply(null, arguments);
  };
  var _0x24f79e = _0x3b068f.dynCall_iiiiffiiiiii = function () {
    return (_0x24f79e = _0x3b068f.dynCall_iiiiffiiiiii = _0x3b068f.asm.hq).apply(null, arguments);
  };
  var _0x1b8ae = _0x3b068f.dynCall_fiffffiiiiii = function () {
    return (_0x1b8ae = _0x3b068f.dynCall_fiffffiiiiii = _0x3b068f.asm.iq).apply(null, arguments);
  };
  var _0x578245 = _0x3b068f.dynCall_fiffffii = function () {
    return (_0x578245 = _0x3b068f.dynCall_fiffffii = _0x3b068f.asm.jq).apply(null, arguments);
  };
  var _0xc5c8e2 = _0x3b068f.dynCall_viiiiiffii = function () {
    return (_0xc5c8e2 = _0x3b068f.dynCall_viiiiiffii = _0x3b068f.asm.kq).apply(null, arguments);
  };
  var _0x2406a9 = _0x3b068f.dynCall_viffiii = function () {
    return (_0x2406a9 = _0x3b068f.dynCall_viffiii = _0x3b068f.asm.lq).apply(null, arguments);
  };
  var _0x155d1b = _0x3b068f.dynCall_viffffiii = function () {
    return (_0x155d1b = _0x3b068f.dynCall_viffffiii = _0x3b068f.asm.mq).apply(null, arguments);
  };
  var _0x38ee8a = _0x3b068f.dynCall_viffffii = function () {
    return (_0x38ee8a = _0x3b068f.dynCall_viffffii = _0x3b068f.asm.nq).apply(null, arguments);
  };
  var _0x319e27 = _0x3b068f.dynCall_viiffffiiiiii = function () {
    return (_0x319e27 = _0x3b068f.dynCall_viiffffiiiiii = _0x3b068f.asm.oq).apply(null, arguments);
  };
  var _0x1f975f = _0x3b068f.dynCall_viiifiii = function () {
    return (_0x1f975f = _0x3b068f.dynCall_viiifiii = _0x3b068f.asm.pq).apply(null, arguments);
  };
  var _0x3ed7b4 = _0x3b068f.dynCall_iiiiifi = function () {
    return (_0x3ed7b4 = _0x3b068f.dynCall_iiiiifi = _0x3b068f.asm.qq).apply(null, arguments);
  };
  var _0x3117ed = _0x3b068f.dynCall_vififfii = function () {
    return (_0x3117ed = _0x3b068f.dynCall_vififfii = _0x3b068f.asm.rq).apply(null, arguments);
  };
  var _0x1cdaf5 = _0x3b068f.dynCall_vifffffi = function () {
    return (_0x1cdaf5 = _0x3b068f.dynCall_vifffffi = _0x3b068f.asm.sq).apply(null, arguments);
  };
  var _0x480059 = _0x3b068f.dynCall_viffiiii = function () {
    return (_0x480059 = _0x3b068f.dynCall_viffiiii = _0x3b068f.asm.tq).apply(null, arguments);
  };
  var _0x4a0cc0 = _0x3b068f.dynCall_viiiiffffiiii = function () {
    return (_0x4a0cc0 = _0x3b068f.dynCall_viiiiffffiiii = _0x3b068f.asm.uq).apply(null, arguments);
  };
  var _0x56ae49 = _0x3b068f.dynCall_viifiiiii = function () {
    return (_0x56ae49 = _0x3b068f.dynCall_viifiiiii = _0x3b068f.asm.vq).apply(null, arguments);
  };
  var _0x59c914 = _0x3b068f.dynCall_iiiiiiffiiiiiiiiiffffiiii = function () {
    return (_0x59c914 = _0x3b068f.dynCall_iiiiiiffiiiiiiiiiffffiiii = _0x3b068f.asm.wq).apply(null, arguments);
  };
  var _0x46060d = _0x3b068f.dynCall_iiiiiiffiiiiiiiiiiiiiii = function () {
    return (_0x46060d = _0x3b068f.dynCall_iiiiiiffiiiiiiiiiiiiiii = _0x3b068f.asm.xq).apply(null, arguments);
  };
  var _0x26cbba = _0x3b068f.dynCall_viififii = function () {
    return (_0x26cbba = _0x3b068f.dynCall_viififii = _0x3b068f.asm.yq).apply(null, arguments);
  };
  var _0xd4f702 = _0x3b068f.dynCall_iiiffiiii = function () {
    return (_0xd4f702 = _0x3b068f.dynCall_iiiffiiii = _0x3b068f.asm.zq).apply(null, arguments);
  };
  var _0x7c5953 = _0x3b068f.dynCall_iiiiffiiii = function () {
    return (_0x7c5953 = _0x3b068f.dynCall_iiiiffiiii = _0x3b068f.asm.Aq).apply(null, arguments);
  };
  var _0x182b14 = _0x3b068f.dynCall_vjii = function () {
    return (_0x182b14 = _0x3b068f.dynCall_vjii = _0x3b068f.asm.Bq).apply(null, arguments);
  };
  var _0x3b456f = _0x3b068f.dynCall_fffffffi = function () {
    return (_0x3b456f = _0x3b068f.dynCall_fffffffi = _0x3b068f.asm.Cq).apply(null, arguments);
  };
  var _0x43bc45 = _0x3b068f.dynCall_viffifi = function () {
    return (_0x43bc45 = _0x3b068f.dynCall_viffifi = _0x3b068f.asm.Dq).apply(null, arguments);
  };
  var _0x3ec98e = _0x3b068f.dynCall_viiffifi = function () {
    return (_0x3ec98e = _0x3b068f.dynCall_viiffifi = _0x3b068f.asm.Eq).apply(null, arguments);
  };
  var _0x11dc80 = _0x3b068f.dynCall_ifffi = function () {
    return (_0x11dc80 = _0x3b068f.dynCall_ifffi = _0x3b068f.asm.Fq).apply(null, arguments);
  };
  var _0xa80ec5 = _0x3b068f.dynCall_fiiiffi = function () {
    return (_0xa80ec5 = _0x3b068f.dynCall_fiiiffi = _0x3b068f.asm.Gq).apply(null, arguments);
  };
  var _0x30b3d0 = _0x3b068f.dynCall_viiififiii = function () {
    return (_0x30b3d0 = _0x3b068f.dynCall_viiififiii = _0x3b068f.asm.Hq).apply(null, arguments);
  };
  var _0x36090e = _0x3b068f.dynCall_viiffiiiiiiiii = function () {
    return (_0x36090e = _0x3b068f.dynCall_viiffiiiiiiiii = _0x3b068f.asm.Iq).apply(null, arguments);
  };
  var _0x500f12 = _0x3b068f.dynCall_viiiiiffiii = function () {
    return (_0x500f12 = _0x3b068f.dynCall_viiiiiffiii = _0x3b068f.asm.Jq).apply(null, arguments);
  };
  var _0x478635 = _0x3b068f.dynCall_viiffiii = function () {
    return (_0x478635 = _0x3b068f.dynCall_viiffiii = _0x3b068f.asm.Kq).apply(null, arguments);
  };
  var _0x31ffe6 = _0x3b068f.dynCall_viiffiiiiiii = function () {
    return (_0x31ffe6 = _0x3b068f.dynCall_viiffiiiiiii = _0x3b068f.asm.Lq).apply(null, arguments);
  };
  var _0x3c0f6c = _0x3b068f.dynCall_fffffffffi = function () {
    return (_0x3c0f6c = _0x3b068f.dynCall_fffffffffi = _0x3b068f.asm.Mq).apply(null, arguments);
  };
  var _0x4b0fde = _0x3b068f.dynCall_vifiiiiii = function () {
    return (_0x4b0fde = _0x3b068f.dynCall_vifiiiiii = _0x3b068f.asm.Nq).apply(null, arguments);
  };
  var _0x2065c0 = _0x3b068f.dynCall_vifiiiii = function () {
    return (_0x2065c0 = _0x3b068f.dynCall_vifiiiii = _0x3b068f.asm.Oq).apply(null, arguments);
  };
  var _0x111888 = _0x3b068f.dynCall_viifiiiiiii = function () {
    return (_0x111888 = _0x3b068f.dynCall_viifiiiiiii = _0x3b068f.asm.Pq).apply(null, arguments);
  };
  var _0x51565c = _0x3b068f.dynCall_viiififfiiiiiii = function () {
    return (_0x51565c = _0x3b068f.dynCall_viiififfiiiiiii = _0x3b068f.asm.Qq).apply(null, arguments);
  };
  var _0x8fdf74 = _0x3b068f.dynCall_viiffiifiiiiiii = function () {
    return (_0x8fdf74 = _0x3b068f.dynCall_viiffiifiiiiiii = _0x3b068f.asm.Rq).apply(null, arguments);
  };
  var _0x4f8330 = _0x3b068f.dynCall_viifiiiiii = function () {
    return (_0x4f8330 = _0x3b068f.dynCall_viifiiiiii = _0x3b068f.asm.Sq).apply(null, arguments);
  };
  var _0x29d215 = _0x3b068f.dynCall_viiifiiiiii = function () {
    return (_0x29d215 = _0x3b068f.dynCall_viiifiiiiii = _0x3b068f.asm.Tq).apply(null, arguments);
  };
  var _0xb6b77d = _0x3b068f.dynCall_viiiifiiiiii = function () {
    return (_0xb6b77d = _0x3b068f.dynCall_viiiifiiiiii = _0x3b068f.asm.Uq).apply(null, arguments);
  };
  var _0xc0879 = _0x3b068f.dynCall_viififiiiiii = function () {
    return (_0xc0879 = _0x3b068f.dynCall_viififiiiiii = _0x3b068f.asm.Vq).apply(null, arguments);
  };
  var _0x2c682b = _0x3b068f.dynCall_viiiffiifiiiiiii = function () {
    return (_0x2c682b = _0x3b068f.dynCall_viiiffiifiiiiiii = _0x3b068f.asm.Wq).apply(null, arguments);
  };
  var _0x45c118 = _0x3b068f.dynCall_viiiiiifiiiiii = function () {
    return (_0x45c118 = _0x3b068f.dynCall_viiiiiifiiiiii = _0x3b068f.asm.Xq).apply(null, arguments);
  };
  var _0x3fb92b = _0x3b068f.dynCall_vififiii = function () {
    return (_0x3fb92b = _0x3b068f.dynCall_vififiii = _0x3b068f.asm.Yq).apply(null, arguments);
  };
  var _0x47e788 = _0x3b068f.dynCall_viiiiiiiijiiii = function () {
    return (_0x47e788 = _0x3b068f.dynCall_viiiiiiiijiiii = _0x3b068f.asm.Zq).apply(null, arguments);
  };
  var _0x5ddb54 = _0x3b068f.dynCall_fifii = function () {
    return (_0x5ddb54 = _0x3b068f.dynCall_fifii = _0x3b068f.asm._q).apply(null, arguments);
  };
  var _0x156a1b = _0x3b068f.dynCall_viiiffi = function () {
    return (_0x156a1b = _0x3b068f.dynCall_viiiffi = _0x3b068f.asm.$q).apply(null, arguments);
  };
  var _0x5e194b = _0x3b068f.dynCall_viiiiiffi = function () {
    return (_0x5e194b = _0x3b068f.dynCall_viiiiiffi = _0x3b068f.asm.ar).apply(null, arguments);
  };
  var _0x3ad514 = _0x3b068f.dynCall_iidiiiii = function () {
    return (_0x3ad514 = _0x3b068f.dynCall_iidiiiii = _0x3b068f.asm.br).apply(null, arguments);
  };
  var _0x481c08 = _0x3b068f.dynCall_ijiiiiiiiii = function () {
    return (_0x481c08 = _0x3b068f.dynCall_ijiiiiiiiii = _0x3b068f.asm.cr).apply(null, arguments);
  };
  var _0x5ddc03 = _0x3b068f.dynCall_iiijiiiii = function () {
    return (_0x5ddc03 = _0x3b068f.dynCall_iiijiiiii = _0x3b068f.asm.dr).apply(null, arguments);
  };
  var _0x3fccda = _0x3b068f.dynCall_ijjiii = function () {
    return (_0x3fccda = _0x3b068f.dynCall_ijjiii = _0x3b068f.asm.er).apply(null, arguments);
  };
  var _0x12d046 = _0x3b068f.dynCall_ffiii = function () {
    return (_0x12d046 = _0x3b068f.dynCall_ffiii = _0x3b068f.asm.fr).apply(null, arguments);
  };
  var _0x2e07e4 = _0x3b068f.dynCall_fffiii = function () {
    return (_0x2e07e4 = _0x3b068f.dynCall_fffiii = _0x3b068f.asm.gr).apply(null, arguments);
  };
  var _0x5b229a = _0x3b068f.dynCall_dddiii = function () {
    return (_0x5b229a = _0x3b068f.dynCall_dddiii = _0x3b068f.asm.hr).apply(null, arguments);
  };
  var _0x3990cf = _0x3b068f.dynCall_jjiii = function () {
    return (_0x3990cf = _0x3b068f.dynCall_jjiii = _0x3b068f.asm.ir).apply(null, arguments);
  };
  var _0x3d489c = _0x3b068f.dynCall_jddi = function () {
    return (_0x3d489c = _0x3b068f.dynCall_jddi = _0x3b068f.asm.jr).apply(null, arguments);
  };
  var _0x2b75ea = _0x3b068f.dynCall_jjjii = function () {
    return (_0x2b75ea = _0x3b068f.dynCall_jjjii = _0x3b068f.asm.kr).apply(null, arguments);
  };
  var _0x10c412 = _0x3b068f.dynCall_jdii = function () {
    return (_0x10c412 = _0x3b068f.dynCall_jdii = _0x3b068f.asm.lr).apply(null, arguments);
  };
  var _0x2c5806 = _0x3b068f.dynCall_djii = function () {
    return (_0x2c5806 = _0x3b068f.dynCall_djii = _0x3b068f.asm.mr).apply(null, arguments);
  };
  var _0x14cf52 = _0x3b068f.dynCall_fdi = function () {
    return (_0x14cf52 = _0x3b068f.dynCall_fdi = _0x3b068f.asm.nr).apply(null, arguments);
  };
  var _0x23a5d6 = _0x3b068f.dynCall_jjiiii = function () {
    return (_0x23a5d6 = _0x3b068f.dynCall_jjiiii = _0x3b068f.asm.or).apply(null, arguments);
  };
  var _0x2ab784 = _0x3b068f.dynCall_vidiii = function () {
    return (_0x2ab784 = _0x3b068f.dynCall_vidiii = _0x3b068f.asm.pr).apply(null, arguments);
  };
  var _0xfcc164 = _0x3b068f.dynCall_viiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiii = function () {
    return (_0xfcc164 = _0x3b068f.dynCall_viiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiii = _0x3b068f.asm.qr).apply(null, arguments);
  };
  var _0x1c9e9c = _0x3b068f.dynCall_viffffffffi = function () {
    return (_0x1c9e9c = _0x3b068f.dynCall_viffffffffi = _0x3b068f.asm.rr).apply(null, arguments);
  };
  var _0x311caa = _0x3b068f.dynCall_viddddi = function () {
    return (_0x311caa = _0x3b068f.dynCall_viddddi = _0x3b068f.asm.sr).apply(null, arguments);
  };
  var _0x3a7efe = _0x3b068f.dynCall_vijjjji = function () {
    return (_0x3a7efe = _0x3b068f.dynCall_vijjjji = _0x3b068f.asm.tr).apply(null, arguments);
  };
  var _0x1cc6ce = _0x3b068f.dynCall_ddii = function () {
    return (_0x1cc6ce = _0x3b068f.dynCall_ddii = _0x3b068f.asm.ur).apply(null, arguments);
  };
  var _0x1e8047 = _0x3b068f.dynCall_iiiiiijii = function () {
    return (_0x1e8047 = _0x3b068f.dynCall_iiiiiijii = _0x3b068f.asm.vr).apply(null, arguments);
  };
  var _0x153222 = _0x3b068f.dynCall_jiidi = function () {
    return (_0x153222 = _0x3b068f.dynCall_jiidi = _0x3b068f.asm.wr).apply(null, arguments);
  };
  var _0x20bffc = _0x3b068f.dynCall_viiiidijii = function () {
    return (_0x20bffc = _0x3b068f.dynCall_viiiidijii = _0x3b068f.asm.xr).apply(null, arguments);
  };
  var _0x10c4ee = _0x3b068f.dynCall_viiiidiii = function () {
    return (_0x10c4ee = _0x3b068f.dynCall_viiiidiii = _0x3b068f.asm.yr).apply(null, arguments);
  };
  var _0x283b11 = _0x3b068f.dynCall_iiidiii = function () {
    return (_0x283b11 = _0x3b068f.dynCall_iiidiii = _0x3b068f.asm.zr).apply(null, arguments);
  };
  var _0x26f1b8 = _0x3b068f.dynCall_iiidii = function () {
    return (_0x26f1b8 = _0x3b068f.dynCall_iiidii = _0x3b068f.asm.Ar).apply(null, arguments);
  };
  var _0x531b95 = _0x3b068f.dynCall_viiiidii = function () {
    return (_0x531b95 = _0x3b068f.dynCall_viiiidii = _0x3b068f.asm.Br).apply(null, arguments);
  };
  var _0x359daa = _0x3b068f.dynCall_viijiiiii = function () {
    return (_0x359daa = _0x3b068f.dynCall_viijiiiii = _0x3b068f.asm.Cr).apply(null, arguments);
  };
  var _0x28ba5c = _0x3b068f.dynCall_viifffi = function () {
    return (_0x28ba5c = _0x3b068f.dynCall_viifffi = _0x3b068f.asm.Dr).apply(null, arguments);
  };
  var _0x43df4c = _0x3b068f.dynCall_viifffffi = function () {
    return (_0x43df4c = _0x3b068f.dynCall_viifffffi = _0x3b068f.asm.Er).apply(null, arguments);
  };
  var _0x199cc8 = _0x3b068f.dynCall_viiffffffi = function () {
    return (_0x199cc8 = _0x3b068f.dynCall_viiffffffi = _0x3b068f.asm.Fr).apply(null, arguments);
  };
  var _0x3e38b1 = _0x3b068f.dynCall_viifffffffi = function () {
    return (_0x3e38b1 = _0x3b068f.dynCall_viifffffffi = _0x3b068f.asm.Gr).apply(null, arguments);
  };
  var _0x2372fb = _0x3b068f.dynCall_viiffffffffi = function () {
    return (_0x2372fb = _0x3b068f.dynCall_viiffffffffi = _0x3b068f.asm.Hr).apply(null, arguments);
  };
  var _0x44f535 = _0x3b068f.dynCall_viiffffffffiii = function () {
    return (_0x44f535 = _0x3b068f.dynCall_viiffffffffiii = _0x3b068f.asm.Ir).apply(null, arguments);
  };
  var _0x11a0c9 = _0x3b068f.dynCall_viiiiffffii = function () {
    return (_0x11a0c9 = _0x3b068f.dynCall_viiiiffffii = _0x3b068f.asm.Jr).apply(null, arguments);
  };
  var _0x586328 = _0x3b068f.dynCall_fiiiiii = function () {
    return (_0x586328 = _0x3b068f.dynCall_fiiiiii = _0x3b068f.asm.Kr).apply(null, arguments);
  };
  var _0xfeb12b = _0x3b068f.dynCall_iiijjiii = function () {
    return (_0xfeb12b = _0x3b068f.dynCall_iiijjiii = _0x3b068f.asm.Lr).apply(null, arguments);
  };
  var _0x1f50c7 = _0x3b068f.dynCall_viiijji = function () {
    return (_0x1f50c7 = _0x3b068f.dynCall_viiijji = _0x3b068f.asm.Mr).apply(null, arguments);
  };
  var _0x52ad5d = _0x3b068f.dynCall_vijiiiiiii = function () {
    return (_0x52ad5d = _0x3b068f.dynCall_vijiiiiiii = _0x3b068f.asm.Nr).apply(null, arguments);
  };
  var _0xe2a519 = _0x3b068f.dynCall_vijiiiiiiii = function () {
    return (_0xe2a519 = _0x3b068f.dynCall_vijiiiiiiii = _0x3b068f.asm.Or).apply(null, arguments);
  };
  var _0x4e6b6b = _0x3b068f.dynCall_jjiiiii = function () {
    return (_0x4e6b6b = _0x3b068f.dynCall_jjiiiii = _0x3b068f.asm.Pr).apply(null, arguments);
  };
  var _0x5c50d0 = _0x3b068f.dynCall_jijjji = function () {
    return (_0x5c50d0 = _0x3b068f.dynCall_jijjji = _0x3b068f.asm.Qr).apply(null, arguments);
  };
  var _0x641137 = _0x3b068f.dynCall_jijjjii = function () {
    return (_0x641137 = _0x3b068f.dynCall_jijjjii = _0x3b068f.asm.Rr).apply(null, arguments);
  };
  var _0x2a58de = _0x3b068f.dynCall_ijijiiiii = function () {
    return (_0x2a58de = _0x3b068f.dynCall_ijijiiiii = _0x3b068f.asm.Sr).apply(null, arguments);
  };
  var _0x17cfff = _0x3b068f.dynCall_ijjjiii = function () {
    return (_0x17cfff = _0x3b068f.dynCall_ijjjiii = _0x3b068f.asm.Tr).apply(null, arguments);
  };
  var _0x3046a0 = _0x3b068f.dynCall_vijjjiijii = function () {
    return (_0x3046a0 = _0x3b068f.dynCall_vijjjiijii = _0x3b068f.asm.Ur).apply(null, arguments);
  };
  var _0x492842 = _0x3b068f.dynCall_ijjjiijii = function () {
    return (_0x492842 = _0x3b068f.dynCall_ijjjiijii = _0x3b068f.asm.Vr).apply(null, arguments);
  };
  var _0x587ba8 = _0x3b068f.dynCall_vijiiiiii = function () {
    return (_0x587ba8 = _0x3b068f.dynCall_vijiiiiii = _0x3b068f.asm.Wr).apply(null, arguments);
  };
  var _0x5ce65a = _0x3b068f.dynCall_jfi = function () {
    return (_0x5ce65a = _0x3b068f.dynCall_jfi = _0x3b068f.asm.Xr).apply(null, arguments);
  };
  var _0x58396e = _0x3b068f.dynCall_fji = function () {
    return (_0x58396e = _0x3b068f.dynCall_fji = _0x3b068f.asm.Yr).apply(null, arguments);
  };
  var _0x1638b1 = _0x3b068f.dynCall_dfi = function () {
    return (_0x1638b1 = _0x3b068f.dynCall_dfi = _0x3b068f.asm.Zr).apply(null, arguments);
  };
  var _0x57e37c = _0x3b068f.dynCall_jidii = function () {
    return (_0x57e37c = _0x3b068f.dynCall_jidii = _0x3b068f.asm._r).apply(null, arguments);
  };
  var _0x16b2cf = _0x3b068f.dynCall_viiiiiiiji = function () {
    return (_0x16b2cf = _0x3b068f.dynCall_viiiiiiiji = _0x3b068f.asm.$r).apply(null, arguments);
  };
  var _0x46c153 = _0x3b068f.dynCall_viiiiiiiiji = function () {
    return (_0x46c153 = _0x3b068f.dynCall_viiiiiiiiji = _0x3b068f.asm.as).apply(null, arguments);
  };
  var _0x4ba529 = _0x3b068f.dynCall_viiiiiiiiiji = function () {
    return (_0x4ba529 = _0x3b068f.dynCall_viiiiiiiiiji = _0x3b068f.asm.bs).apply(null, arguments);
  };
  var _0x3d8e17 = _0x3b068f.dynCall_ijiijii = function () {
    return (_0x3d8e17 = _0x3b068f.dynCall_ijiijii = _0x3b068f.asm.cs).apply(null, arguments);
  };
  var _0x1c533d = _0x3b068f.dynCall_vjjiiiii = function () {
    return (_0x1c533d = _0x3b068f.dynCall_vjjiiiii = _0x3b068f.asm.ds).apply(null, arguments);
  };
  var _0x3825ce = _0x3b068f.dynCall_vjjii = function () {
    return (_0x3825ce = _0x3b068f.dynCall_vjjii = _0x3b068f.asm.es).apply(null, arguments);
  };
  var _0x2482c7 = _0x3b068f.dynCall_ijiiji = function () {
    return (_0x2482c7 = _0x3b068f.dynCall_ijiiji = _0x3b068f.asm.fs).apply(null, arguments);
  };
  var _0x183619 = _0x3b068f.dynCall_ijiiiii = function () {
    return (_0x183619 = _0x3b068f.dynCall_ijiiiii = _0x3b068f.asm.gs).apply(null, arguments);
  };
  var _0x5c0904 = _0x3b068f.dynCall_ijiiiiji = function () {
    return (_0x5c0904 = _0x3b068f.dynCall_ijiiiiji = _0x3b068f.asm.hs).apply(null, arguments);
  };
  var _0x1dc8f0 = _0x3b068f.dynCall_jiiiiii = function () {
    return (_0x1dc8f0 = _0x3b068f.dynCall_jiiiiii = _0x3b068f.asm.is).apply(null, arguments);
  };
  var _0xac7d02 = _0x3b068f.dynCall_idiii = function () {
    return (_0xac7d02 = _0x3b068f.dynCall_idiii = _0x3b068f.asm.js).apply(null, arguments);
  };
  var _0x37e6af = _0x3b068f.dynCall_ifiiiii = function () {
    return (_0x37e6af = _0x3b068f.dynCall_ifiiiii = _0x3b068f.asm.ks).apply(null, arguments);
  };
  var _0x28cdd5 = _0x3b068f.dynCall_vdiii = function () {
    return (_0x28cdd5 = _0x3b068f.dynCall_vdiii = _0x3b068f.asm.ls).apply(null, arguments);
  };
  var _0x34dbe3 = _0x3b068f.dynCall_vijijji = function () {
    return (_0x34dbe3 = _0x3b068f.dynCall_vijijji = _0x3b068f.asm.ms).apply(null, arguments);
  };
  var _0x35a48f = _0x3b068f.dynCall_iijjji = function () {
    return (_0x35a48f = _0x3b068f.dynCall_iijjji = _0x3b068f.asm.ns).apply(null, arguments);
  };
  var _0x4fc647 = _0x3b068f.dynCall_viijjji = function () {
    return (_0x4fc647 = _0x3b068f.dynCall_viijjji = _0x3b068f.asm.os).apply(null, arguments);
  };
  var _0x5d2a17 = _0x3b068f.dynCall_vdii = function () {
    return (_0x5d2a17 = _0x3b068f.dynCall_vdii = _0x3b068f.asm.ps).apply(null, arguments);
  };
  var _0x8d65c8 = _0x3b068f.dynCall_iiiijii = function () {
    return (_0x8d65c8 = _0x3b068f.dynCall_iiiijii = _0x3b068f.asm.qs).apply(null, arguments);
  };
  var _0x305b09 = _0x3b068f.dynCall_jijji = function () {
    return (_0x305b09 = _0x3b068f.dynCall_jijji = _0x3b068f.asm.rs).apply(null, arguments);
  };
  var _0x4e7b18 = _0x3b068f.dynCall_diddi = function () {
    return (_0x4e7b18 = _0x3b068f.dynCall_diddi = _0x3b068f.asm.ss).apply(null, arguments);
  };
  var _0x1fe5bc = _0x3b068f.dynCall_didi = function () {
    return (_0x1fe5bc = _0x3b068f.dynCall_didi = _0x3b068f.asm.ts).apply(null, arguments);
  };
  var _0x1ef712 = _0x3b068f.dynCall_iijjii = function () {
    return (_0x1ef712 = _0x3b068f.dynCall_iijjii = _0x3b068f.asm.us).apply(null, arguments);
  };
  var _0x2db83a = _0x3b068f.dynCall_viijijii = function () {
    return (_0x2db83a = _0x3b068f.dynCall_viijijii = _0x3b068f.asm.vs).apply(null, arguments);
  };
  var _0x4f6784 = _0x3b068f.dynCall_viijijiii = function () {
    return (_0x4f6784 = _0x3b068f.dynCall_viijijiii = _0x3b068f.asm.ws).apply(null, arguments);
  };
  var _0x3f3900 = _0x3b068f.dynCall_vijiji = function () {
    return (_0x3f3900 = _0x3b068f.dynCall_vijiji = _0x3b068f.asm.xs).apply(null, arguments);
  };
  var _0x400219 = _0x3b068f.dynCall_viijiijiii = function () {
    return (_0x400219 = _0x3b068f.dynCall_viijiijiii = _0x3b068f.asm.ys).apply(null, arguments);
  };
  var _0x283efc = _0x3b068f.dynCall_viiiijiiii = function () {
    return (_0x283efc = _0x3b068f.dynCall_viiiijiiii = _0x3b068f.asm.zs).apply(null, arguments);
  };
  var _0xe84024 = _0x3b068f.dynCall_di = function () {
    return (_0xe84024 = _0x3b068f.dynCall_di = _0x3b068f.asm.As).apply(null, arguments);
  };
  var _0x4a7a24 = _0x3b068f.dynCall_jiiiiiiiii = function () {
    return (_0x4a7a24 = _0x3b068f.dynCall_jiiiiiiiii = _0x3b068f.asm.Bs).apply(null, arguments);
  };
  var _0x29488a = _0x3b068f.dynCall_iiiiijii = function () {
    return (_0x29488a = _0x3b068f.dynCall_iiiiijii = _0x3b068f.asm.Cs).apply(null, arguments);
  };
  var _0x4f5de9 = _0x3b068f.dynCall_iiiidii = function () {
    return (_0x4f5de9 = _0x3b068f.dynCall_iiiidii = _0x3b068f.asm.Ds).apply(null, arguments);
  };
  var _0x1a8d76 = _0x3b068f.dynCall_iidfii = function () {
    return (_0x1a8d76 = _0x3b068f.dynCall_iidfii = _0x3b068f.asm.Es).apply(null, arguments);
  };
  var _0x248947 = _0x3b068f.dynCall_iidfi = function () {
    return (_0x248947 = _0x3b068f.dynCall_iidfi = _0x3b068f.asm.Fs).apply(null, arguments);
  };
  var _0x37275a = _0x3b068f.dynCall_iiddfi = function () {
    return (_0x37275a = _0x3b068f.dynCall_iiddfi = _0x3b068f.asm.Gs).apply(null, arguments);
  };
  var _0x44aff9 = _0x3b068f.dynCall_iijfii = function () {
    return (_0x44aff9 = _0x3b068f.dynCall_iijfii = _0x3b068f.asm.Hs).apply(null, arguments);
  };
  var _0x3e3b36 = _0x3b068f.dynCall_iijfi = function () {
    return (_0x3e3b36 = _0x3b068f.dynCall_iijfi = _0x3b068f.asm.Is).apply(null, arguments);
  };
  var _0x418699 = _0x3b068f.dynCall_iijjfi = function () {
    return (_0x418699 = _0x3b068f.dynCall_iijjfi = _0x3b068f.asm.Js).apply(null, arguments);
  };
  var _0x192e89 = _0x3b068f.dynCall_jiffii = function () {
    return (_0x192e89 = _0x3b068f.dynCall_jiffii = _0x3b068f.asm.Ks).apply(null, arguments);
  };
  var _0x42f0c6 = _0x3b068f.dynCall_iiiiffiiiji = function () {
    return (_0x42f0c6 = _0x3b068f.dynCall_iiiiffiiiji = _0x3b068f.asm.Ls).apply(null, arguments);
  };
  var _0x2710c7 = _0x3b068f.dynCall_iiidfii = function () {
    return (_0x2710c7 = _0x3b068f.dynCall_iiidfii = _0x3b068f.asm.Ms).apply(null, arguments);
  };
  var _0x444989 = _0x3b068f.dynCall_iiijfii = function () {
    return (_0x444989 = _0x3b068f.dynCall_iiijfii = _0x3b068f.asm.Ns).apply(null, arguments);
  };
  var _0x2a15d2 = _0x3b068f.dynCall_jiiiiiii = function () {
    return (_0x2a15d2 = _0x3b068f.dynCall_jiiiiiii = _0x3b068f.asm.Os).apply(null, arguments);
  };
  var _0x128ecf = _0x3b068f.dynCall_iiiiffiiiii = function () {
    return (_0x128ecf = _0x3b068f.dynCall_iiiiffiiiii = _0x3b068f.asm.Ps).apply(null, arguments);
  };
  var _0x5567c8 = _0x3b068f.dynCall_iiiidfii = function () {
    return (_0x5567c8 = _0x3b068f.dynCall_iiiidfii = _0x3b068f.asm.Qs).apply(null, arguments);
  };
  var _0x42263e = _0x3b068f.dynCall_iiiijfii = function () {
    return (_0x42263e = _0x3b068f.dynCall_iiiijfii = _0x3b068f.asm.Rs).apply(null, arguments);
  };
  var _0x4bc310 = _0x3b068f.dynCall_iiiiffii = function () {
    return (_0x4bc310 = _0x3b068f.dynCall_iiiiffii = _0x3b068f.asm.Ss).apply(null, arguments);
  };
  var _0x53441b = _0x3b068f.dynCall_jiiiiji = function () {
    return (_0x53441b = _0x3b068f.dynCall_jiiiiji = _0x3b068f.asm.Ts).apply(null, arguments);
  };
  var _0x41c6fb = _0x3b068f.dynCall_fiiiifi = function () {
    return (_0x41c6fb = _0x3b068f.dynCall_fiiiifi = _0x3b068f.asm.Us).apply(null, arguments);
  };
  var _0x50aa2b = _0x3b068f.dynCall_iiijjii = function () {
    return (_0x50aa2b = _0x3b068f.dynCall_iiijjii = _0x3b068f.asm.Vs).apply(null, arguments);
  };
  var _0x5cd32a = _0x3b068f.dynCall_vidiiiii = function () {
    return (_0x5cd32a = _0x3b068f.dynCall_vidiiiii = _0x3b068f.asm.Ws).apply(null, arguments);
  };
  var _0x4fbfbd = _0x3b068f.dynCall_viidiiii = function () {
    return (_0x4fbfbd = _0x3b068f.dynCall_viidiiii = _0x3b068f.asm.Xs).apply(null, arguments);
  };
  var _0x80b09a = _0x3b068f.dynCall_j = function () {
    return (_0x80b09a = _0x3b068f.dynCall_j = _0x3b068f.asm.Ys).apply(null, arguments);
  };
  var _0x30c98c = _0x3b068f.dynCall_jijj = function () {
    return (_0x30c98c = _0x3b068f.dynCall_jijj = _0x3b068f.asm.Zs).apply(null, arguments);
  };
  var _0x46b187 = _0x3b068f.dynCall_vij = function () {
    return (_0x46b187 = _0x3b068f.dynCall_vij = _0x3b068f.asm._s).apply(null, arguments);
  };
  var _0x62dccb = _0x3b068f.dynCall_iiiijiii = function () {
    return (_0x62dccb = _0x3b068f.dynCall_iiiijiii = _0x3b068f.asm.$s).apply(null, arguments);
  };
  var _0x2e6ae6 = _0x3b068f.dynCall_iiiij = function () {
    return (_0x2e6ae6 = _0x3b068f.dynCall_iiiij = _0x3b068f.asm.at).apply(null, arguments);
  };
  var _0x31fb74 = _0x3b068f.dynCall_ijj = function () {
    return (_0x31fb74 = _0x3b068f.dynCall_ijj = _0x3b068f.asm.bt).apply(null, arguments);
  };
  var _0x3ea30f = _0x3b068f.dynCall_vjji = function () {
    return (_0x3ea30f = _0x3b068f.dynCall_vjji = _0x3b068f.asm.ct).apply(null, arguments);
  };
  var _0x4aa44d = _0x3b068f.dynCall_ij = function () {
    return (_0x4aa44d = _0x3b068f.dynCall_ij = _0x3b068f.asm.dt).apply(null, arguments);
  };
  var _0x2bd342 = _0x3b068f.dynCall_vif = function () {
    return (_0x2bd342 = _0x3b068f.dynCall_vif = _0x3b068f.asm.et).apply(null, arguments);
  };
  var _0x42e369 = _0x3b068f.dynCall_vid = function () {
    return (_0x42e369 = _0x3b068f.dynCall_vid = _0x3b068f.asm.ft).apply(null, arguments);
  };
  var _0x132483 = _0x3b068f.dynCall_viiiiif = function () {
    return (_0x132483 = _0x3b068f.dynCall_viiiiif = _0x3b068f.asm.gt).apply(null, arguments);
  };
  var _0x1f6634 = _0x3b068f.dynCall_viiiif = function () {
    return (_0x1f6634 = _0x3b068f.dynCall_viiiif = _0x3b068f.asm.ht).apply(null, arguments);
  };
  var _0x257016 = _0x3b068f.dynCall_viiiiiif = function () {
    return (_0x257016 = _0x3b068f.dynCall_viiiiiif = _0x3b068f.asm.it).apply(null, arguments);
  };
  var _0x502d5c = _0x3b068f.dynCall_viffff = function () {
    return (_0x502d5c = _0x3b068f.dynCall_viffff = _0x3b068f.asm.jt).apply(null, arguments);
  };
  var _0x4e0391 = _0x3b068f.dynCall_iiif = function () {
    return (_0x4e0391 = _0x3b068f.dynCall_iiif = _0x3b068f.asm.kt).apply(null, arguments);
  };
  var _0x3796b9 = _0x3b068f.dynCall_fif = function () {
    return (_0x3796b9 = _0x3b068f.dynCall_fif = _0x3b068f.asm.lt).apply(null, arguments);
  };
  var _0x4271a1 = _0x3b068f.dynCall_iiiiiifff = function () {
    return (_0x4271a1 = _0x3b068f.dynCall_iiiiiifff = _0x3b068f.asm.mt).apply(null, arguments);
  };
  var _0x3449c3 = _0x3b068f.dynCall_iiiiiifiif = function () {
    return (_0x3449c3 = _0x3b068f.dynCall_iiiiiifiif = _0x3b068f.asm.nt).apply(null, arguments);
  };
  var _0x1b128c = _0x3b068f.dynCall_iiiiiifiii = function () {
    return (_0x1b128c = _0x3b068f.dynCall_iiiiiifiii = _0x3b068f.asm.ot).apply(null, arguments);
  };
  var _0x2356e7 = _0x3b068f.dynCall_iiiiiiifiif = function () {
    return (_0x2356e7 = _0x3b068f.dynCall_iiiiiiifiif = _0x3b068f.asm.pt).apply(null, arguments);
  };
  var _0x2e85d = _0x3b068f.dynCall_fiff = function () {
    return (_0x2e85d = _0x3b068f.dynCall_fiff = _0x3b068f.asm.qt).apply(null, arguments);
  };
  var _0x4dcf14 = _0x3b068f.dynCall_fiiiiiifiifif = function () {
    return (_0x4dcf14 = _0x3b068f.dynCall_fiiiiiifiifif = _0x3b068f.asm.rt).apply(null, arguments);
  };
  var _0x3663a1 = _0x3b068f.dynCall_fiiiiiifiiiif = function () {
    return (_0x3663a1 = _0x3b068f.dynCall_fiiiiiifiiiif = _0x3b068f.asm.st).apply(null, arguments);
  };
  var _0x2d7679 = _0x3b068f.dynCall_iifiiiijii = function () {
    return (_0x2d7679 = _0x3b068f.dynCall_iifiiiijii = _0x3b068f.asm.tt).apply(null, arguments);
  };
  var _0x4d3e40 = _0x3b068f.dynCall_vifijii = function () {
    return (_0x4d3e40 = _0x3b068f.dynCall_vifijii = _0x3b068f.asm.ut).apply(null, arguments);
  };
  var _0x268f99 = _0x3b068f.dynCall_iiiifffiii = function () {
    return (_0x268f99 = _0x3b068f.dynCall_iiiifffiii = _0x3b068f.asm.vt).apply(null, arguments);
  };
  var _0x5e4e08 = _0x3b068f.dynCall_iiiifffffi = function () {
    return (_0x5e4e08 = _0x3b068f.dynCall_iiiifffffi = _0x3b068f.asm.wt).apply(null, arguments);
  };
  var _0xfa1728 = _0x3b068f.dynCall_viffiiiif = function () {
    return (_0xfa1728 = _0x3b068f.dynCall_viffiiiif = _0x3b068f.asm.xt).apply(null, arguments);
  };
  var _0x4eebcf = _0x3b068f.dynCall_viffiifffffiii = function () {
    return (_0x4eebcf = _0x3b068f.dynCall_viffiifffffiii = _0x3b068f.asm.yt).apply(null, arguments);
  };
  var _0x2fcbc9 = _0x3b068f.dynCall_viffffiifffiiiiif = function () {
    return (_0x2fcbc9 = _0x3b068f.dynCall_viffffiifffiiiiif = _0x3b068f.asm.zt).apply(null, arguments);
  };
  var _0x57353b = _0x3b068f.dynCall_iiiifffffii = function () {
    return (_0x57353b = _0x3b068f.dynCall_iiiifffffii = _0x3b068f.asm.At).apply(null, arguments);
  };
  var _0x121933 = _0x3b068f.dynCall_viiiiiiiiiiifii = function () {
    return (_0x121933 = _0x3b068f.dynCall_viiiiiiiiiiifii = _0x3b068f.asm.Bt).apply(null, arguments);
  };
  var _0x298eba = _0x3b068f.dynCall_viff = function () {
    return (_0x298eba = _0x3b068f.dynCall_viff = _0x3b068f.asm.Ct).apply(null, arguments);
  };
  var _0x4fecec = _0x3b068f.dynCall_iiiiifiiiiif = function () {
    return (_0x4fecec = _0x3b068f.dynCall_iiiiifiiiiif = _0x3b068f.asm.Dt).apply(null, arguments);
  };
  var _0x472918 = _0x3b068f.dynCall_viiifiiiii = function () {
    return (_0x472918 = _0x3b068f.dynCall_viiifiiiii = _0x3b068f.asm.Et).apply(null, arguments);
  };
  var _0x30eb1d = _0x3b068f.dynCall_viiiifiiiiif = function () {
    return (_0x30eb1d = _0x3b068f.dynCall_viiiifiiiiif = _0x3b068f.asm.Ft).apply(null, arguments);
  };
  var _0x3ae22a = _0x3b068f.dynCall_iifff = function () {
    return (_0x3ae22a = _0x3b068f.dynCall_iifff = _0x3b068f.asm.Gt).apply(null, arguments);
  };
  var _0x5e5219 = _0x3b068f.dynCall_iif = function () {
    return (_0x5e5219 = _0x3b068f.dynCall_iif = _0x3b068f.asm.Ht).apply(null, arguments);
  };
  var _0x20331e = _0x3b068f.dynCall_viijijj = function () {
    return (_0x20331e = _0x3b068f.dynCall_viijijj = _0x3b068f.asm.It).apply(null, arguments);
  };
  var _0x188216 = _0x3b068f.dynCall_viijj = function () {
    return (_0x188216 = _0x3b068f.dynCall_viijj = _0x3b068f.asm.Jt).apply(null, arguments);
  };
  var _0xca3225 = _0x3b068f.dynCall_viiiij = function () {
    return (_0xca3225 = _0x3b068f.dynCall_viiiij = _0x3b068f.asm.Kt).apply(null, arguments);
  };
  var _0x43d290 = _0x3b068f.dynCall_iiijji = function () {
    return (_0x43d290 = _0x3b068f.dynCall_iiijji = _0x3b068f.asm.Lt).apply(null, arguments);
  };
  var _0x2e0ac5 = _0x3b068f.dynCall_ijjiiiii = function () {
    return (_0x2e0ac5 = _0x3b068f.dynCall_ijjiiiii = _0x3b068f.asm.Mt).apply(null, arguments);
  };
  var _0x1dd4f1 = _0x3b068f.dynCall_vidd = function () {
    return (_0x1dd4f1 = _0x3b068f.dynCall_vidd = _0x3b068f.asm.Nt).apply(null, arguments);
  };
  var _0xe4cd83 = _0x3b068f.dynCall_iiiiiifffiiifiii = function () {
    return (_0xe4cd83 = _0x3b068f.dynCall_iiiiiifffiiifiii = _0x3b068f.asm.Ot).apply(null, arguments);
  };
  var _0x4c1234 = _0x3b068f.dynCall_viid = function () {
    return (_0x4c1234 = _0x3b068f.dynCall_viid = _0x3b068f.asm.Pt).apply(null, arguments);
  };
  var _0x20b154 = _0x3b068f.dynCall_viiif = function () {
    return (_0x20b154 = _0x3b068f.dynCall_viiif = _0x3b068f.asm.Qt).apply(null, arguments);
  };
  var _0x192ad4 = _0x3b068f.dynCall_fiiiif = function () {
    return (_0x192ad4 = _0x3b068f.dynCall_fiiiif = _0x3b068f.asm.Rt).apply(null, arguments);
  };
  var _0xef0b0c = _0x3b068f.dynCall_iiiiiff = function () {
    return (_0xef0b0c = _0x3b068f.dynCall_iiiiiff = _0x3b068f.asm.St).apply(null, arguments);
  };
  var _0x5c3e26 = _0x3b068f.dynCall_vifff = function () {
    return (_0x5c3e26 = _0x3b068f.dynCall_vifff = _0x3b068f.asm.Tt).apply(null, arguments);
  };
  var _0x552fa9 = _0x3b068f.dynCall_viifff = function () {
    return (_0x552fa9 = _0x3b068f.dynCall_viifff = _0x3b068f.asm.Ut).apply(null, arguments);
  };
  var _0x17ebb3 = _0x3b068f.dynCall_vf = function () {
    return (_0x17ebb3 = _0x3b068f.dynCall_vf = _0x3b068f.asm.Vt).apply(null, arguments);
  };
  var _0x39a42b = _0x3b068f.dynCall_vffff = function () {
    return (_0x39a42b = _0x3b068f.dynCall_vffff = _0x3b068f.asm.Wt).apply(null, arguments);
  };
  var _0x4ecd4e = _0x3b068f.dynCall_vff = function () {
    return (_0x4ecd4e = _0x3b068f.dynCall_vff = _0x3b068f.asm.Xt).apply(null, arguments);
  };
  var _0x3c651c = _0x3b068f.dynCall_fff = function () {
    return (_0x3c651c = _0x3b068f.dynCall_fff = _0x3b068f.asm.Yt).apply(null, arguments);
  };
  var _0x27bf32 = _0x3b068f.dynCall_f = function () {
    return (_0x27bf32 = _0x3b068f.dynCall_f = _0x3b068f.asm.Zt).apply(null, arguments);
  };
  var _0x440970 = _0x3b068f.dynCall_vfff = function () {
    return (_0x440970 = _0x3b068f.dynCall_vfff = _0x3b068f.asm._t).apply(null, arguments);
  };
  var _0x1447e6 = _0x3b068f.dynCall_ff = function () {
    return (_0x1447e6 = _0x3b068f.dynCall_ff = _0x3b068f.asm.$t).apply(null, arguments);
  };
  var _0x51af5c = _0x3b068f.dynCall_iiid = function () {
    return (_0x51af5c = _0x3b068f.dynCall_iiid = _0x3b068f.asm.au).apply(null, arguments);
  };
  var _0x3ffb27 = _0x3b068f.dynCall_fiif = function () {
    return (_0x3ffb27 = _0x3b068f.dynCall_fiif = _0x3b068f.asm.bu).apply(null, arguments);
  };
  var _0x53aaeb = _0x3b068f.dynCall_iiiiiiffiiiiiiiiiffffiii = function () {
    return (_0x53aaeb = _0x3b068f.dynCall_iiiiiiffiiiiiiiiiffffiii = _0x3b068f.asm.cu).apply(null, arguments);
  };
  var _0x1d5110 = _0x3b068f.dynCall_viififi = function () {
    return (_0x1d5110 = _0x3b068f.dynCall_viififi = _0x3b068f.asm.du).apply(null, arguments);
  };
  var _0x5dd763 = _0x3b068f.dynCall_viiiiiiiijiii = function () {
    return (_0x5dd763 = _0x3b068f.dynCall_viiiiiiiijiii = _0x3b068f.asm.eu).apply(null, arguments);
  };
  function _0x49c463(_0x2804d9, _0x38398f, _0x3092a0, _0xc298bc, _0x551c50, _0x4bd2a6) {
    var _0x3eeac3 = _0x1c6173();
    try {
      return _0x5d858c(_0x2804d9, _0x38398f, _0x3092a0, _0xc298bc, _0x551c50, _0x4bd2a6);
    } catch (_0x5c0510) {
      _0x176ee2(_0x3eeac3);
      if (_0x5c0510 !== _0x5c0510 + 0 && _0x5c0510 !== "longjmp") {
        throw _0x5c0510;
      }
      _0x47d732(1, 0);
    }
  }
  function _0x2e9d5a(_0x2ac2cf, _0x2bb52, _0x55f180) {
    var _0x10d64e = _0x1c6173();
    try {
      _0x17d5d9(_0x2ac2cf, _0x2bb52, _0x55f180);
    } catch (_0x228483) {
      _0x176ee2(_0x10d64e);
      if (_0x228483 !== _0x228483 + 0 && _0x228483 !== "longjmp") {
        throw _0x228483;
      }
      _0x47d732(1, 0);
    }
  }
  function _0x17fa22(_0x3f5a1c, _0x15da23, _0x5abd28) {
    var _0x3f717e = _0x1c6173();
    try {
      return _0x46a462(_0x3f5a1c, _0x15da23, _0x5abd28);
    } catch (_0x12a8f5) {
      _0x176ee2(_0x3f717e);
      if (_0x12a8f5 !== _0x12a8f5 + 0 && _0x12a8f5 !== "longjmp") {
        throw _0x12a8f5;
      }
      _0x47d732(1, 0);
    }
  }
  function _0x486ca9(_0x4b63f4, _0x2c163e, _0x1d2bef, _0x1611d1) {
    var _0x265331 = _0x1c6173();
    try {
      return _0x3d67b4(_0x4b63f4, _0x2c163e, _0x1d2bef, _0x1611d1);
    } catch (_0x3d9470) {
      _0x176ee2(_0x265331);
      if (_0x3d9470 !== _0x3d9470 + 0 && _0x3d9470 !== "longjmp") {
        throw _0x3d9470;
      }
      _0x47d732(1, 0);
    }
  }
  function _0x116d2e(_0x21b4c7, _0x18989c, _0x5d46b8, _0x213214, _0x1f3cb8) {
    var _0x3a0ec6 = _0x1c6173();
    try {
      _0x410cce(_0x21b4c7, _0x18989c, _0x5d46b8, _0x213214, _0x1f3cb8);
    } catch (_0x3d75b6) {
      _0x176ee2(_0x3a0ec6);
      if (_0x3d75b6 !== _0x3d75b6 + 0 && _0x3d75b6 !== "longjmp") {
        throw _0x3d75b6;
      }
      _0x47d732(1, 0);
    }
  }
  function _0x564596(_0x1b554b, _0x2b4fbb, _0x162f28, _0x3676a5, _0x9ccaa2) {
    var _0x18757f = _0x1c6173();
    try {
      return _0x334f27(_0x1b554b, _0x2b4fbb, _0x162f28, _0x3676a5, _0x9ccaa2);
    } catch (_0x537287) {
      _0x176ee2(_0x18757f);
      if (_0x537287 !== _0x537287 + 0 && _0x537287 !== "longjmp") {
        throw _0x537287;
      }
      _0x47d732(1, 0);
    }
  }
  function _0x159e4d(_0x1afe98, _0x2dec31, _0x5d0005, _0x3f17fb) {
    var _0x1bc2a5 = _0x1c6173();
    try {
      return _0x17469e(_0x1afe98, _0x2dec31, _0x5d0005, _0x3f17fb);
    } catch (_0x54284f) {
      _0x176ee2(_0x1bc2a5);
      if (_0x54284f !== _0x54284f + 0 && _0x54284f !== "longjmp") {
        throw _0x54284f;
      }
      _0x47d732(1, 0);
    }
  }
  function _0x588315(_0x21136e, _0x1013bd, _0x530955, _0xb4e6c7) {
    var _0x113a11 = _0x1c6173();
    try {
      return _0x162b40(_0x21136e, _0x1013bd, _0x530955, _0xb4e6c7);
    } catch (_0x1ed00b) {
      _0x176ee2(_0x113a11);
      if (_0x1ed00b !== _0x1ed00b + 0 && _0x1ed00b !== "longjmp") {
        throw _0x1ed00b;
      }
      _0x47d732(1, 0);
    }
  }
  function _0x359ae4(_0x4ba945, _0x4be9f9, _0x4e18c0, _0x82509d) {
    var _0x4a9368 = _0x1c6173();
    try {
      _0x4c89c9(_0x4ba945, _0x4be9f9, _0x4e18c0, _0x82509d);
    } catch (_0x543f4b) {
      _0x176ee2(_0x4a9368);
      if (_0x543f4b !== _0x543f4b + 0 && _0x543f4b !== "longjmp") {
        throw _0x543f4b;
      }
      _0x47d732(1, 0);
    }
  }
  function _0x3fb531(_0x578274, _0x2db70c) {
    var _0x3e8585 = _0x1c6173();
    try {
      _0x1ba1b5(_0x578274, _0x2db70c);
    } catch (_0x404b79) {
      _0x176ee2(_0x3e8585);
      if (_0x404b79 !== _0x404b79 + 0 && _0x404b79 !== "longjmp") {
        throw _0x404b79;
      }
      _0x47d732(1, 0);
    }
  }
  function _0x2ddd30(_0x16bab0, _0x4ecfad, _0x166940, _0x29fb7b) {
    var _0x246c22 = _0x1c6173();
    try {
      _0x38921c(_0x16bab0, _0x4ecfad, _0x166940, _0x29fb7b);
    } catch (_0x187ce6) {
      _0x176ee2(_0x246c22);
      if (_0x187ce6 !== _0x187ce6 + 0 && _0x187ce6 !== "longjmp") {
        throw _0x187ce6;
      }
      _0x47d732(1, 0);
    }
  }
  function _0x1214e5(_0x4039ee, _0x48929d) {
    var _0x235383 = _0x1c6173();
    try {
      return _0x4ae28b(_0x4039ee, _0x48929d);
    } catch (_0x87a7d0) {
      _0x176ee2(_0x235383);
      if (_0x87a7d0 !== _0x87a7d0 + 0 && _0x87a7d0 !== "longjmp") {
        throw _0x87a7d0;
      }
      _0x47d732(1, 0);
    }
  }
  function _0x1a00b9(_0x4237b4) {
    var _0x48abd0 = _0x1c6173();
    try {
      _0x3c8e57(_0x4237b4);
    } catch (_0x51628f) {
      _0x176ee2(_0x48abd0);
      if (_0x51628f !== _0x51628f + 0 && _0x51628f !== "longjmp") {
        throw _0x51628f;
      }
      _0x47d732(1, 0);
    }
  }
  function _0x2fa082(_0x20c583) {
    var _0x1dc36e = _0x1c6173();
    try {
      return _0x44d844(_0x20c583);
    } catch (_0x3d350) {
      _0x176ee2(_0x1dc36e);
      if (_0x3d350 !== _0x3d350 + 0 && _0x3d350 !== "longjmp") {
        throw _0x3d350;
      }
      _0x47d732(1, 0);
    }
  }
  function _0x385ad1(_0x2228b8, _0x2ac4da, _0xb67eec, _0x409e5b, _0xd5978d, _0x388fff, _0x18a389, _0x4a5bfb) {
    var _0x5cfa86 = _0x1c6173();
    try {
      return _0x228ea8(_0x2228b8, _0x2ac4da, _0xb67eec, _0x409e5b, _0xd5978d, _0x388fff, _0x18a389, _0x4a5bfb);
    } catch (_0x52cee9) {
      _0x176ee2(_0x5cfa86);
      if (_0x52cee9 !== _0x52cee9 + 0 && _0x52cee9 !== "longjmp") {
        throw _0x52cee9;
      }
      _0x47d732(1, 0);
    }
  }
  function _0xc23950(_0x4e823c, _0x54ffe8, _0x3bc3b3, _0x21704e, _0x3db700, _0x496e77) {
    var _0x47a7d1 = _0x1c6173();
    try {
      _0x52d7ae(_0x4e823c, _0x54ffe8, _0x3bc3b3, _0x21704e, _0x3db700, _0x496e77);
    } catch (_0x21bfaf) {
      _0x176ee2(_0x47a7d1);
      if (_0x21bfaf !== _0x21bfaf + 0 && _0x21bfaf !== "longjmp") {
        throw _0x21bfaf;
      }
      _0x47d732(1, 0);
    }
  }
  function _0x4f1e41(_0x3521a1, _0x3137bc, _0x92d6eb, _0x4eee67, _0x4d962f, _0x29ff86, _0x55c27d) {
    var _0x155be7 = _0x1c6173();
    try {
      return _0x3a05e2(_0x3521a1, _0x3137bc, _0x92d6eb, _0x4eee67, _0x4d962f, _0x29ff86, _0x55c27d);
    } catch (_0x2a51f4) {
      _0x176ee2(_0x155be7);
      if (_0x2a51f4 !== _0x2a51f4 + 0 && _0x2a51f4 !== "longjmp") {
        throw _0x2a51f4;
      }
      _0x47d732(1, 0);
    }
  }
  function _0x1c0895(_0xcc348b, _0x1ed35d, _0x314ef1, _0x274af7, _0x1944d4, _0x54a7a8, _0x8d6ab, _0x39e834, _0x622fb0, _0x2ed135, _0x313a26) {
    var _0x40cb2e = _0x1c6173();
    try {
      return _0x2d1080(_0xcc348b, _0x1ed35d, _0x314ef1, _0x274af7, _0x1944d4, _0x54a7a8, _0x8d6ab, _0x39e834, _0x622fb0, _0x2ed135, _0x313a26);
    } catch (_0x56ccd2) {
      _0x176ee2(_0x40cb2e);
      if (_0x56ccd2 !== _0x56ccd2 + 0 && _0x56ccd2 !== "longjmp") {
        throw _0x56ccd2;
      }
      _0x47d732(1, 0);
    }
  }
  function _0x5681c1(_0x46ca2b, _0x16b004, _0x284e4f, _0x5580dc, _0x18a4a2, _0xe347ff, _0x1006e4, _0x1e7a76, _0x18bbd4, _0x3bdd9e, _0x4f4365, _0x40a79f, _0x5d7e95) {
    var _0x54bae1 = _0x1c6173();
    try {
      return _0x4cdfd6(_0x46ca2b, _0x16b004, _0x284e4f, _0x5580dc, _0x18a4a2, _0xe347ff, _0x1006e4, _0x1e7a76, _0x18bbd4, _0x3bdd9e, _0x4f4365, _0x40a79f, _0x5d7e95);
    } catch (_0x46792a) {
      _0x176ee2(_0x54bae1);
      if (_0x46792a !== _0x46792a + 0 && _0x46792a !== "longjmp") {
        throw _0x46792a;
      }
      _0x47d732(1, 0);
    }
  }
  function _0xda093b(_0x4957ca, _0xd15657, _0x119eed, _0x39df35, _0x49707b, _0x4113c8, _0x9ab50a, _0x12292e) {
    var _0x4d10a9 = _0x1c6173();
    try {
      _0x1774ea(_0x4957ca, _0xd15657, _0x119eed, _0x39df35, _0x49707b, _0x4113c8, _0x9ab50a, _0x12292e);
    } catch (_0x5318c8) {
      _0x176ee2(_0x4d10a9);
      if (_0x5318c8 !== _0x5318c8 + 0 && _0x5318c8 !== "longjmp") {
        throw _0x5318c8;
      }
      _0x47d732(1, 0);
    }
  }
  function _0xf803c1(_0x1b8b7d, _0xb16128, _0x4e0a1f, _0x267565, _0x2f1954, _0x17a5d9, _0x27c3ee, _0x1335e4, _0x2111f0, _0x5a9b3e, _0xbae842) {
    var _0x28ad46 = _0x1c6173();
    try {
      _0x1416b9(_0x1b8b7d, _0xb16128, _0x4e0a1f, _0x267565, _0x2f1954, _0x17a5d9, _0x27c3ee, _0x1335e4, _0x2111f0, _0x5a9b3e, _0xbae842);
    } catch (_0x4429e0) {
      _0x176ee2(_0x28ad46);
      if (_0x4429e0 !== _0x4429e0 + 0 && _0x4429e0 !== "longjmp") {
        throw _0x4429e0;
      }
      _0x47d732(1, 0);
    }
  }
  function _0x4d1af8(_0x3705fa, _0x1bd2c3, _0xc7be2d, _0x22613b, _0x44be1c, _0x3e9251, _0x166e63) {
    var _0x5aeeff = _0x1c6173();
    try {
      _0x27a8aa(_0x3705fa, _0x1bd2c3, _0xc7be2d, _0x22613b, _0x44be1c, _0x3e9251, _0x166e63);
    } catch (_0x4191d3) {
      _0x176ee2(_0x5aeeff);
      if (_0x4191d3 !== _0x4191d3 + 0 && _0x4191d3 !== "longjmp") {
        throw _0x4191d3;
      }
      _0x47d732(1, 0);
    }
  }
  function _0x35b680(_0x43d0a6, _0x48103c, _0x2c3328, _0xc558a8, _0x1116c8) {
    var _0x45c0bd = _0x1c6173();
    try {
      _0x1d0976(_0x43d0a6, _0x48103c, _0x2c3328, _0xc558a8, _0x1116c8);
    } catch (_0x4f7bec) {
      _0x176ee2(_0x45c0bd);
      if (_0x4f7bec !== _0x4f7bec + 0 && _0x4f7bec !== "longjmp") {
        throw _0x4f7bec;
      }
      _0x47d732(1, 0);
    }
  }
  function _0x3bb433(_0x2ebf1a, _0xfb32cb, _0x1bbf7c, _0x4c6e6a, _0x1425b2) {
    var _0x4c0092 = _0x1c6173();
    try {
      _0x193a8a(_0x2ebf1a, _0xfb32cb, _0x1bbf7c, _0x4c6e6a, _0x1425b2);
    } catch (_0x106615) {
      _0x176ee2(_0x4c0092);
      if (_0x106615 !== _0x106615 + 0 && _0x106615 !== "longjmp") {
        throw _0x106615;
      }
      _0x47d732(1, 0);
    }
  }
  function _0xb65716(_0x5aa3a0, _0x5e7a44, _0x2bcf2c, _0x5353ea) {
    var _0x2b351a = _0x1c6173();
    try {
      _0xa50036(_0x5aa3a0, _0x5e7a44, _0x2bcf2c, _0x5353ea);
    } catch (_0x8aeffc) {
      _0x176ee2(_0x2b351a);
      if (_0x8aeffc !== _0x8aeffc + 0 && _0x8aeffc !== "longjmp") {
        throw _0x8aeffc;
      }
      _0x47d732(1, 0);
    }
  }
  function _0x52fc34(_0x4323d0, _0x4328d9, _0x579724, _0xbdb7cd, _0x1252c8) {
    var _0x2bc872 = _0x1c6173();
    try {
      return _0x7b4b42(_0x4323d0, _0x4328d9, _0x579724, _0xbdb7cd, _0x1252c8);
    } catch (_0x290728) {
      _0x176ee2(_0x2bc872);
      if (_0x290728 !== _0x290728 + 0 && _0x290728 !== "longjmp") {
        throw _0x290728;
      }
      _0x47d732(1, 0);
    }
  }
  function _0x1fa8ae(_0x2a4856, _0x2f1399, _0x61325b, _0x169085, _0x1e760e) {
    var _0x1356c2 = _0x1c6173();
    try {
      return _0x38b0ad(_0x2a4856, _0x2f1399, _0x61325b, _0x169085, _0x1e760e);
    } catch (_0x539ab9) {
      _0x176ee2(_0x1356c2);
      if (_0x539ab9 !== _0x539ab9 + 0 && _0x539ab9 !== "longjmp") {
        throw _0x539ab9;
      }
      _0x47d732(1, 0);
    }
  }
  function _0xcccf64(_0x3e3a16, _0x5de6c6, _0x4a50e3) {
    var _0x2adf3e = _0x1c6173();
    try {
      return _0x3f2e48(_0x3e3a16, _0x5de6c6, _0x4a50e3);
    } catch (_0x1a4323) {
      _0x176ee2(_0x2adf3e);
      if (_0x1a4323 !== _0x1a4323 + 0 && _0x1a4323 !== "longjmp") {
        throw _0x1a4323;
      }
      _0x47d732(1, 0);
    }
  }
  function _0x3e5160(_0x3580e4, _0x3c7e0d, _0x425749, _0x3324ab, _0x2b0095) {
    var _0x1ed04e = _0x1c6173();
    try {
      return _0x2629da(_0x3580e4, _0x3c7e0d, _0x425749, _0x3324ab, _0x2b0095);
    } catch (_0xbcd7c2) {
      _0x176ee2(_0x1ed04e);
      if (_0xbcd7c2 !== _0xbcd7c2 + 0 && _0xbcd7c2 !== "longjmp") {
        throw _0xbcd7c2;
      }
      _0x47d732(1, 0);
    }
  }
  function _0x4154c3(_0x54f33e, _0x110ec0, _0x389786) {
    var _0x5423b7 = _0x1c6173();
    try {
      return _0x4e0adf(_0x54f33e, _0x110ec0, _0x389786);
    } catch (_0x324a3d) {
      _0x176ee2(_0x5423b7);
      if (_0x324a3d !== _0x324a3d + 0 && _0x324a3d !== "longjmp") {
        throw _0x324a3d;
      }
      _0x47d732(1, 0);
    }
  }
  function _0x412f16(_0x565f16, _0x44d744, _0x1440cb, _0x409b79, _0x2bbe6b) {
    var _0x4e2ab9 = _0x1c6173();
    try {
      return _0x19dff2(_0x565f16, _0x44d744, _0x1440cb, _0x409b79, _0x2bbe6b);
    } catch (_0xf2586d) {
      _0x176ee2(_0x4e2ab9);
      if (_0xf2586d !== _0xf2586d + 0 && _0xf2586d !== "longjmp") {
        throw _0xf2586d;
      }
      _0x47d732(1, 0);
    }
  }
  function _0x5b1d9b(_0x228afd, _0x3dda18, _0x134ce8, _0x25ff95, _0x19ddc8, _0x15114d, _0x29f93d, _0x219db2, _0x4834ee) {
    var _0x3cbd47 = _0x1c6173();
    try {
      _0x6e624(_0x228afd, _0x3dda18, _0x134ce8, _0x25ff95, _0x19ddc8, _0x15114d, _0x29f93d, _0x219db2, _0x4834ee);
    } catch (_0x1bd80e) {
      _0x176ee2(_0x3cbd47);
      if (_0x1bd80e !== _0x1bd80e + 0 && _0x1bd80e !== "longjmp") {
        throw _0x1bd80e;
      }
      _0x47d732(1, 0);
    }
  }
  function _0x5d8171(_0x2d7091, _0xe81471, _0x585dc2, _0x5f6ce7, _0x96255a, _0x35d619, _0x49a8f2, _0x59cb5b, _0x74570d, _0x1f3a57) {
    var _0x1311af = _0x1c6173();
    try {
      _0x1f14de(_0x2d7091, _0xe81471, _0x585dc2, _0x5f6ce7, _0x96255a, _0x35d619, _0x49a8f2, _0x59cb5b, _0x74570d, _0x1f3a57);
    } catch (_0x33c9c7) {
      _0x176ee2(_0x1311af);
      if (_0x33c9c7 !== _0x33c9c7 + 0 && _0x33c9c7 !== "longjmp") {
        throw _0x33c9c7;
      }
      _0x47d732(1, 0);
    }
  }
  function _0x23e94c(_0x3c93e4, _0x5904ce, _0x1e4211, _0x7598ad, _0x505c91, _0x4d8d20, _0x2807ae, _0x29c550, _0x412947) {
    var _0x381b61 = _0x1c6173();
    try {
      return _0x114b13(_0x3c93e4, _0x5904ce, _0x1e4211, _0x7598ad, _0x505c91, _0x4d8d20, _0x2807ae, _0x29c550, _0x412947);
    } catch (_0x45bf81) {
      _0x176ee2(_0x381b61);
      if (_0x45bf81 !== _0x45bf81 + 0 && _0x45bf81 !== "longjmp") {
        throw _0x45bf81;
      }
      _0x47d732(1, 0);
    }
  }
  function _0x3bf273(_0x5139cd, _0xdfac51, _0x22136a, _0x356ef7) {
    var _0xd32357 = _0x1c6173();
    try {
      _0x3d3eae(_0x5139cd, _0xdfac51, _0x22136a, _0x356ef7);
    } catch (_0x5a2f22) {
      _0x176ee2(_0xd32357);
      if (_0x5a2f22 !== _0x5a2f22 + 0 && _0x5a2f22 !== "longjmp") {
        throw _0x5a2f22;
      }
      _0x47d732(1, 0);
    }
  }
  function _0x14dc30(_0x1b1c09, _0x4fc86d, _0x9237e, _0x20c91a) {
    var _0x2f5028 = _0x1c6173();
    try {
      return _0x1ec159(_0x1b1c09, _0x4fc86d, _0x9237e, _0x20c91a);
    } catch (_0x39445d) {
      _0x176ee2(_0x2f5028);
      if (_0x39445d !== _0x39445d + 0 && _0x39445d !== "longjmp") {
        throw _0x39445d;
      }
      _0x47d732(1, 0);
    }
  }
  function _0x26de3f(_0x27258c, _0x15afa4, _0x22422f, _0x454179, _0x5d4533) {
    var _0x51b04b = _0x1c6173();
    try {
      _0x14f42e(_0x27258c, _0x15afa4, _0x22422f, _0x454179, _0x5d4533);
    } catch (_0xd97a1c) {
      _0x176ee2(_0x51b04b);
      if (_0xd97a1c !== _0xd97a1c + 0 && _0xd97a1c !== "longjmp") {
        throw _0xd97a1c;
      }
      _0x47d732(1, 0);
    }
  }
  function _0xaf7b28(_0x4ad97e, _0x8d5aa0, _0x397658, _0x55d259, _0x32aea6, _0xe5e57f, _0x168a90, _0x1c0b43, _0x3fb538, _0x1d9c36, _0x493fab, _0x19119a, _0x34afbf, _0x1dbf91, _0x4dac78) {
    var _0xe8d21f = _0x1c6173();
    try {
      _0x2412eb(_0x4ad97e, _0x8d5aa0, _0x397658, _0x55d259, _0x32aea6, _0xe5e57f, _0x168a90, _0x1c0b43, _0x3fb538, _0x1d9c36, _0x493fab, _0x19119a, _0x34afbf, _0x1dbf91, _0x4dac78);
    } catch (_0x2ddffb) {
      _0x176ee2(_0xe8d21f);
      if (_0x2ddffb !== _0x2ddffb + 0 && _0x2ddffb !== "longjmp") {
        throw _0x2ddffb;
      }
      _0x47d732(1, 0);
    }
  }
  function _0x1416fc(_0x375045, _0x17c86d, _0x400a08, _0x484363, _0x4dbaef, _0x3f1cd7, _0xaf1a39, _0x5a1729, _0x6862c1, _0xbcddec, _0x5b93f0, _0x1c5a28, _0x360de3, _0x2b1da5, _0x1a185e) {
    var _0x3337bb = _0x1c6173();
    try {
      _0x15d84e(_0x375045, _0x17c86d, _0x400a08, _0x484363, _0x4dbaef, _0x3f1cd7, _0xaf1a39, _0x5a1729, _0x6862c1, _0xbcddec, _0x5b93f0, _0x1c5a28, _0x360de3, _0x2b1da5, _0x1a185e);
    } catch (_0x258f03) {
      _0x176ee2(_0x3337bb);
      if (_0x258f03 !== _0x258f03 + 0 && _0x258f03 !== "longjmp") {
        throw _0x258f03;
      }
      _0x47d732(1, 0);
    }
  }
  function _0x5779ff(_0x2e494f, _0x5cb7ae, _0x501254, _0x55f7cc, _0x2e6a5a, _0x337394, _0x3c0e7e, _0x2e9b23, _0x277ff4, _0x27eedf, _0x10f66f, _0x5638a9, _0x5b375c, _0x430f52, _0x5ed872) {
    var _0x30cd32 = _0x1c6173();
    try {
      _0xa0d3a0(_0x2e494f, _0x5cb7ae, _0x501254, _0x55f7cc, _0x2e6a5a, _0x337394, _0x3c0e7e, _0x2e9b23, _0x277ff4, _0x27eedf, _0x10f66f, _0x5638a9, _0x5b375c, _0x430f52, _0x5ed872);
    } catch (_0x52c044) {
      _0x176ee2(_0x30cd32);
      if (_0x52c044 !== _0x52c044 + 0 && _0x52c044 !== "longjmp") {
        throw _0x52c044;
      }
      _0x47d732(1, 0);
    }
  }
  function _0x4a3e90(_0x370a98, _0x385e30, _0xb759d7, _0x4823c6, _0x53ce51, _0x5f1e57, _0x569e6f, _0x553101, _0x48d569) {
    var _0x135172 = _0x1c6173();
    try {
      _0x5d0252(_0x370a98, _0x385e30, _0xb759d7, _0x4823c6, _0x53ce51, _0x5f1e57, _0x569e6f, _0x553101, _0x48d569);
    } catch (_0xd334d6) {
      _0x176ee2(_0x135172);
      if (_0xd334d6 !== _0xd334d6 + 0 && _0xd334d6 !== "longjmp") {
        throw _0xd334d6;
      }
      _0x47d732(1, 0);
    }
  }
  function _0x3fb45b(_0x544a97, _0x27fc2e, _0x4074d7, _0xa67ed4) {
    var _0x46f4e2 = _0x1c6173();
    try {
      return _0x4645cc(_0x544a97, _0x27fc2e, _0x4074d7, _0xa67ed4);
    } catch (_0x2bcf46) {
      _0x176ee2(_0x46f4e2);
      if (_0x2bcf46 !== _0x2bcf46 + 0 && _0x2bcf46 !== "longjmp") {
        throw _0x2bcf46;
      }
      _0x47d732(1, 0);
    }
  }
  function _0x1a3238(_0x206575, _0x15fa0b, _0xcfd24b) {
    var _0x5129d7 = _0x1c6173();
    try {
      return _0x2f8199(_0x206575, _0x15fa0b, _0xcfd24b);
    } catch (_0x448f9d) {
      _0x176ee2(_0x5129d7);
      if (_0x448f9d !== _0x448f9d + 0 && _0x448f9d !== "longjmp") {
        throw _0x448f9d;
      }
      _0x47d732(1, 0);
    }
  }
  function _0x275ca1(_0x127774, _0x220e82, _0x4881dc) {
    var _0x132c83 = _0x1c6173();
    try {
      return _0x2bf3b8(_0x127774, _0x220e82, _0x4881dc);
    } catch (_0x5d7bbc) {
      _0x176ee2(_0x132c83);
      if (_0x5d7bbc !== _0x5d7bbc + 0 && _0x5d7bbc !== "longjmp") {
        throw _0x5d7bbc;
      }
      _0x47d732(1, 0);
    }
  }
  function _0x1905e0(_0x54fe99, _0x3c320b, _0x479059, _0x4dadeb, _0x234ecb, _0x420c3a, _0x4c6e07, _0x14b285, _0x5ea48d, _0x4be153, _0x442cab, _0x28ea5b, _0x3d2162) {
    var _0x1c9cbd = _0x1c6173();
    try {
      _0x23cfca(_0x54fe99, _0x3c320b, _0x479059, _0x4dadeb, _0x234ecb, _0x420c3a, _0x4c6e07, _0x14b285, _0x5ea48d, _0x4be153, _0x442cab, _0x28ea5b, _0x3d2162);
    } catch (_0x539912) {
      _0x176ee2(_0x1c9cbd);
      if (_0x539912 !== _0x539912 + 0 && _0x539912 !== "longjmp") {
        throw _0x539912;
      }
      _0x47d732(1, 0);
    }
  }
  function _0xddfcce(_0x177221, _0x1f0e72, _0x4b9d97, _0x30e2bd) {
    var _0x162683 = _0x1c6173();
    try {
      return _0x541bbf(_0x177221, _0x1f0e72, _0x4b9d97, _0x30e2bd);
    } catch (_0x107f71) {
      _0x176ee2(_0x162683);
      if (_0x107f71 !== _0x107f71 + 0 && _0x107f71 !== "longjmp") {
        throw _0x107f71;
      }
      _0x47d732(1, 0);
    }
  }
  function _0x3c045e(_0x1a6f91, _0x497871, _0x260ccf, _0x1edb94) {
    var _0x4819dc = _0x1c6173();
    try {
      return _0x446c89(_0x1a6f91, _0x497871, _0x260ccf, _0x1edb94);
    } catch (_0x2a21c0) {
      _0x176ee2(_0x4819dc);
      if (_0x2a21c0 !== _0x2a21c0 + 0 && _0x2a21c0 !== "longjmp") {
        throw _0x2a21c0;
      }
      _0x47d732(1, 0);
    }
  }
  function _0x51eaa1(_0x1e3fa4, _0x318160, _0x2aa8f3, _0x438dca, _0x3d7219, _0x269736, _0x181af2, _0x3a0a0d) {
    var _0x2418ee = _0x1c6173();
    try {
      return _0x4c1926(_0x1e3fa4, _0x318160, _0x2aa8f3, _0x438dca, _0x3d7219, _0x269736, _0x181af2, _0x3a0a0d);
    } catch (_0x18f630) {
      _0x176ee2(_0x2418ee);
      if (_0x18f630 !== _0x18f630 + 0 && _0x18f630 !== "longjmp") {
        throw _0x18f630;
      }
      _0x47d732(1, 0);
    }
  }
  function _0x37fafb(_0x1d4ac2, _0x457bb1, _0x3a0217, _0x492e40, _0x4ab8de, _0x1af5d0, _0x20db5b, _0x5cb712, _0x427521, _0x46e9d4) {
    var _0x999395 = _0x1c6173();
    try {
      return _0x3da354(_0x1d4ac2, _0x457bb1, _0x3a0217, _0x492e40, _0x4ab8de, _0x1af5d0, _0x20db5b, _0x5cb712, _0x427521, _0x46e9d4);
    } catch (_0x2b9344) {
      _0x176ee2(_0x999395);
      if (_0x2b9344 !== _0x2b9344 + 0 && _0x2b9344 !== "longjmp") {
        throw _0x2b9344;
      }
      _0x47d732(1, 0);
    }
  }
  function _0x3ee539(_0x55ad69, _0x2a860e, _0x1be94a, _0x2013d8, _0x3a5381, _0x15e016, _0x32201c) {
    var _0x5e32ed = _0x1c6173();
    try {
      return _0x527cb5(_0x55ad69, _0x2a860e, _0x1be94a, _0x2013d8, _0x3a5381, _0x15e016, _0x32201c);
    } catch (_0x3f7256) {
      _0x176ee2(_0x5e32ed);
      if (_0x3f7256 !== _0x3f7256 + 0 && _0x3f7256 !== "longjmp") {
        throw _0x3f7256;
      }
      _0x47d732(1, 0);
    }
  }
  function _0x26d131(_0x1e9d8f, _0x159060, _0x520e72, _0x509b0e, _0x1806fb) {
    var _0xb8cbb = _0x1c6173();
    try {
      return _0x14ead5(_0x1e9d8f, _0x159060, _0x520e72, _0x509b0e, _0x1806fb);
    } catch (_0x352dc3) {
      _0x176ee2(_0xb8cbb);
      if (_0x352dc3 !== _0x352dc3 + 0 && _0x352dc3 !== "longjmp") {
        throw _0x352dc3;
      }
      _0x47d732(1, 0);
    }
  }
  function _0x4eb516(_0xc1487e, _0x3b17c6, _0x3b27d7, _0x40980e, _0x534d4c, _0x345c72, _0x5cc3bc) {
    var _0x56b7e9 = _0x1c6173();
    try {
      _0xe7b8cf(_0xc1487e, _0x3b17c6, _0x3b27d7, _0x40980e, _0x534d4c, _0x345c72, _0x5cc3bc);
    } catch (_0x520d2d) {
      _0x176ee2(_0x56b7e9);
      if (_0x520d2d !== _0x520d2d + 0 && _0x520d2d !== "longjmp") {
        throw _0x520d2d;
      }
      _0x47d732(1, 0);
    }
  }
  function _0x232bf6(_0x8864c3, _0x58e851, _0x35ea3b, _0x3fa340, _0x3303f1, _0x2020e9) {
    var _0x174dba = _0x1c6173();
    try {
      return _0x501810(_0x8864c3, _0x58e851, _0x35ea3b, _0x3fa340, _0x3303f1, _0x2020e9);
    } catch (_0x39d52b) {
      _0x176ee2(_0x174dba);
      if (_0x39d52b !== _0x39d52b + 0 && _0x39d52b !== "longjmp") {
        throw _0x39d52b;
      }
      _0x47d732(1, 0);
    }
  }
  function _0x1d03a0(_0x5eaa47, _0x52a1d4, _0x15100d, _0x25c84d, _0x277c20, _0x5c96d1) {
    var _0x2dce1d = _0x1c6173();
    try {
      _0x16170e(_0x5eaa47, _0x52a1d4, _0x15100d, _0x25c84d, _0x277c20, _0x5c96d1);
    } catch (_0x5dd84d) {
      _0x176ee2(_0x2dce1d);
      if (_0x5dd84d !== _0x5dd84d + 0 && _0x5dd84d !== "longjmp") {
        throw _0x5dd84d;
      }
      _0x47d732(1, 0);
    }
  }
  function _0x5c8603(_0x2b6795, _0x168dd4, _0x2e3226, _0x3d5689, _0x40f439, _0x9a9862) {
    var _0x179d3e = _0x1c6173();
    try {
      _0x37fd60(_0x2b6795, _0x168dd4, _0x2e3226, _0x3d5689, _0x40f439, _0x9a9862);
    } catch (_0x1e1f2d) {
      _0x176ee2(_0x179d3e);
      if (_0x1e1f2d !== _0x1e1f2d + 0 && _0x1e1f2d !== "longjmp") {
        throw _0x1e1f2d;
      }
      _0x47d732(1, 0);
    }
  }
  function _0x433136(_0x4c8fe9, _0xe0c81b) {
    var _0x2971d5 = _0x1c6173();
    try {
      return _0x420b0b(_0x4c8fe9, _0xe0c81b);
    } catch (_0x3a061e) {
      _0x176ee2(_0x2971d5);
      if (_0x3a061e !== _0x3a061e + 0 && _0x3a061e !== "longjmp") {
        throw _0x3a061e;
      }
      _0x47d732(1, 0);
    }
  }
  function _0xf0129e(_0xc6d024, _0x2cba50, _0x45bcee, _0x10fbf5, _0x3f0587) {
    var _0x398daa = _0x1c6173();
    try {
      return _0x477a6c(_0xc6d024, _0x2cba50, _0x45bcee, _0x10fbf5, _0x3f0587);
    } catch (_0x2bfff6) {
      _0x176ee2(_0x398daa);
      if (_0x2bfff6 !== _0x2bfff6 + 0 && _0x2bfff6 !== "longjmp") {
        throw _0x2bfff6;
      }
      _0x47d732(1, 0);
    }
  }
  function _0x532c62(_0x51edca, _0x1f0d09, _0x53f729, _0x2fe925, _0x3dcdd9, _0x41536c, _0x541b6b, _0x1d4c40, _0x143e61, _0xdc0e16, _0x1a8771, _0x2ea35b) {
    var _0x3e3131 = _0x1c6173();
    try {
      _0x275568(_0x51edca, _0x1f0d09, _0x53f729, _0x2fe925, _0x3dcdd9, _0x41536c, _0x541b6b, _0x1d4c40, _0x143e61, _0xdc0e16, _0x1a8771, _0x2ea35b);
    } catch (_0x10f814) {
      _0x176ee2(_0x3e3131);
      if (_0x10f814 !== _0x10f814 + 0 && _0x10f814 !== "longjmp") {
        throw _0x10f814;
      }
      _0x47d732(1, 0);
    }
  }
  function _0x5e1793(_0xa91d60, _0x1c27a3, _0x593b2f, _0x27d070, _0x1d97ec, _0x1fd32c, _0xaffad0) {
    var _0x5ce81f = _0x1c6173();
    try {
      _0x3d06e1(_0xa91d60, _0x1c27a3, _0x593b2f, _0x27d070, _0x1d97ec, _0x1fd32c, _0xaffad0);
    } catch (_0x3d6884) {
      _0x176ee2(_0x5ce81f);
      if (_0x3d6884 !== _0x3d6884 + 0 && _0x3d6884 !== "longjmp") {
        throw _0x3d6884;
      }
      _0x47d732(1, 0);
    }
  }
  function _0x3a8fc2(_0x2016ed, _0x45a4da, _0x2cbfaf, _0x1830f1, _0x5972da) {
    var _0x410915 = _0x1c6173();
    try {
      return _0x463100(_0x2016ed, _0x45a4da, _0x2cbfaf, _0x1830f1, _0x5972da);
    } catch (_0x2c3296) {
      _0x176ee2(_0x410915);
      if (_0x2c3296 !== _0x2c3296 + 0 && _0x2c3296 !== "longjmp") {
        throw _0x2c3296;
      }
      _0x47d732(1, 0);
    }
  }
  function _0x21cda4(_0xecf176, _0x110cdb, _0x202aa1, _0x5f54bf, _0x3b08ff, _0x4a45ee, _0x374f1c) {
    var _0x74f221 = _0x1c6173();
    try {
      return _0x4f5de9(_0xecf176, _0x110cdb, _0x202aa1, _0x5f54bf, _0x3b08ff, _0x4a45ee, _0x374f1c);
    } catch (_0x1623eb) {
      _0x176ee2(_0x74f221);
      if (_0x1623eb !== _0x1623eb + 0 && _0x1623eb !== "longjmp") {
        throw _0x1623eb;
      }
      _0x47d732(1, 0);
    }
  }
  function _0x32dfee(_0x8efa22, _0x225f59, _0xcedfbe, _0x4bcd1e, _0x217258, _0x133a8f, _0x594945) {
    var _0x87b1ee = _0x1c6173();
    try {
      return _0xf02c63(_0x8efa22, _0x225f59, _0xcedfbe, _0x4bcd1e, _0x217258, _0x133a8f, _0x594945);
    } catch (_0x1bee7d) {
      _0x176ee2(_0x87b1ee);
      if (_0x1bee7d !== _0x1bee7d + 0 && _0x1bee7d !== "longjmp") {
        throw _0x1bee7d;
      }
      _0x47d732(1, 0);
    }
  }
  function _0x47cdfb(_0x182ffe, _0x503ec7, _0xa8cdfa, _0x491241) {
    var _0x54bc8a = _0x1c6173();
    try {
      _0x1dd4f1(_0x182ffe, _0x503ec7, _0xa8cdfa, _0x491241);
    } catch (_0x17e3c3) {
      _0x176ee2(_0x54bc8a);
      if (_0x17e3c3 !== _0x17e3c3 + 0 && _0x17e3c3 !== "longjmp") {
        throw _0x17e3c3;
      }
      _0x47d732(1, 0);
    }
  }
  function _0x14c0f2(_0x531858, _0x26f643, _0x103825, _0x326cc1, _0x58510e) {
    var _0x1a319e = _0x1c6173();
    try {
      return _0x12f56b(_0x531858, _0x26f643, _0x103825, _0x326cc1, _0x58510e);
    } catch (_0x27a1e3) {
      _0x176ee2(_0x1a319e);
      if (_0x27a1e3 !== _0x27a1e3 + 0 && _0x27a1e3 !== "longjmp") {
        throw _0x27a1e3;
      }
      _0x47d732(1, 0);
    }
  }
  function _0x393048(_0x16ec7c, _0x1a17d3, _0xea42c8, _0x29cbad, _0xc6cdd8) {
    var _0x1d8ae4 = _0x1c6173();
    try {
      return _0x285177(_0x16ec7c, _0x1a17d3, _0xea42c8, _0x29cbad, _0xc6cdd8);
    } catch (_0x566e9a) {
      _0x176ee2(_0x1d8ae4);
      if (_0x566e9a !== _0x566e9a + 0 && _0x566e9a !== "longjmp") {
        throw _0x566e9a;
      }
      _0x47d732(1, 0);
    }
  }
  function _0x1e8cf3(_0x151afc) {
    var _0x4bd75b = _0x1c6173();
    try {
      return _0x80b09a(_0x151afc);
    } catch (_0x4f2b4d) {
      _0x176ee2(_0x4bd75b);
      if (_0x4f2b4d !== _0x4f2b4d + 0 && _0x4f2b4d !== "longjmp") {
        throw _0x4f2b4d;
      }
      _0x47d732(1, 0);
    }
  }
  function _0x21240a(_0x24649, _0x350004, _0x218675, _0x53a43d) {
    var _0x1533bf = _0x1c6173();
    try {
      return _0x230b3e(_0x24649, _0x350004, _0x218675, _0x53a43d);
    } catch (_0xa9fa51) {
      _0x176ee2(_0x1533bf);
      if (_0xa9fa51 !== _0xa9fa51 + 0 && _0xa9fa51 !== "longjmp") {
        throw _0xa9fa51;
      }
      _0x47d732(1, 0);
    }
  }
  function _0x1c5caa(_0x11b368, _0x293a65, _0x4d115a, _0x5bb72c, _0x1a6a84, _0x116457, _0x2f1e43, _0x2ca36e) {
    var _0x2b3c2c = _0x1c6173();
    try {
      return _0x1fc45(_0x11b368, _0x293a65, _0x4d115a, _0x5bb72c, _0x1a6a84, _0x116457, _0x2f1e43, _0x2ca36e);
    } catch (_0x21cc37) {
      _0x176ee2(_0x2b3c2c);
      if (_0x21cc37 !== _0x21cc37 + 0 && _0x21cc37 !== "longjmp") {
        throw _0x21cc37;
      }
      _0x47d732(1, 0);
    }
  }
  function _0x216b02(_0x4b25ea, _0x2936eb, _0x54a58e) {
    var _0x55df75 = _0x1c6173();
    try {
      return _0x193a00(_0x4b25ea, _0x2936eb, _0x54a58e);
    } catch (_0x389d0f) {
      _0x176ee2(_0x55df75);
      if (_0x389d0f !== _0x389d0f + 0 && _0x389d0f !== "longjmp") {
        throw _0x389d0f;
      }
      _0x47d732(1, 0);
    }
  }
  function _0x19e8a0(_0x883f4d, _0x492ddf) {
    var _0x3ecf2e = _0x1c6173();
    try {
      return _0x3db2fc(_0x883f4d, _0x492ddf);
    } catch (_0x35af24) {
      _0x176ee2(_0x3ecf2e);
      if (_0x35af24 !== _0x35af24 + 0 && _0x35af24 !== "longjmp") {
        throw _0x35af24;
      }
      _0x47d732(1, 0);
    }
  }
  function _0x45cf25(_0x13aae8, _0x2567ea, _0x2df668, _0x101b29, _0x620fd7, _0x5719c5, _0x282f15) {
    var _0x277a0b = _0x1c6173();
    try {
      _0x42f29e(_0x13aae8, _0x2567ea, _0x2df668, _0x101b29, _0x620fd7, _0x5719c5, _0x282f15);
    } catch (_0x24dae3) {
      _0x176ee2(_0x277a0b);
      if (_0x24dae3 !== _0x24dae3 + 0 && _0x24dae3 !== "longjmp") {
        throw _0x24dae3;
      }
      _0x47d732(1, 0);
    }
  }
  function _0x383ed0(_0x218aa9, _0x56bc9d, _0x45b7c6, _0x28fcaa, _0x56f5bd, _0x47f427, _0x1ebc6a) {
    var _0xec21d7 = _0x1c6173();
    try {
      return _0x1fb47d(_0x218aa9, _0x56bc9d, _0x45b7c6, _0x28fcaa, _0x56f5bd, _0x47f427, _0x1ebc6a);
    } catch (_0x520398) {
      _0x176ee2(_0xec21d7);
      if (_0x520398 !== _0x520398 + 0 && _0x520398 !== "longjmp") {
        throw _0x520398;
      }
      _0x47d732(1, 0);
    }
  }
  function _0x2f4431(_0x388fef, _0x51f1f7, _0x34c582, _0x43fb33, _0x165a11, _0x378581, _0x55c276) {
    var _0x345d39 = _0x1c6173();
    try {
      return _0x40afde(_0x388fef, _0x51f1f7, _0x34c582, _0x43fb33, _0x165a11, _0x378581, _0x55c276);
    } catch (_0x8b341c) {
      _0x176ee2(_0x345d39);
      if (_0x8b341c !== _0x8b341c + 0 && _0x8b341c !== "longjmp") {
        throw _0x8b341c;
      }
      _0x47d732(1, 0);
    }
  }
  function _0x408bd5(_0x577048, _0xb017f1, _0x21d598, _0x1c380c) {
    var _0x12de12 = _0x1c6173();
    try {
      return _0x15664e(_0x577048, _0xb017f1, _0x21d598, _0x1c380c);
    } catch (_0x4833e9) {
      _0x176ee2(_0x12de12);
      if (_0x4833e9 !== _0x4833e9 + 0 && _0x4833e9 !== "longjmp") {
        throw _0x4833e9;
      }
      _0x47d732(1, 0);
    }
  }
  function _0x501eaa(_0x441618, _0x222977, _0x23d51b, _0x44eacd, _0x58efb7, _0x3a8c3f) {
    var _0x454d75 = _0x1c6173();
    try {
      return _0x5d1a39(_0x441618, _0x222977, _0x23d51b, _0x44eacd, _0x58efb7, _0x3a8c3f);
    } catch (_0x4a726e) {
      _0x176ee2(_0x454d75);
      if (_0x4a726e !== _0x4a726e + 0 && _0x4a726e !== "longjmp") {
        throw _0x4a726e;
      }
      _0x47d732(1, 0);
    }
  }
  function _0xf7baad(_0x384b48, _0x2a8201, _0x53a81d, _0x170217, _0x26191d, _0x3ba4eb) {
    var _0x5a20ab = _0x1c6173();
    try {
      _0x40be84(_0x384b48, _0x2a8201, _0x53a81d, _0x170217, _0x26191d, _0x3ba4eb);
    } catch (_0x4e2b70) {
      _0x176ee2(_0x5a20ab);
      if (_0x4e2b70 !== _0x4e2b70 + 0 && _0x4e2b70 !== "longjmp") {
        throw _0x4e2b70;
      }
      _0x47d732(1, 0);
    }
  }
  function _0x3a215f(_0x5a3b9b, _0x4468a5, _0x484b3e, _0x317023, _0xd2bdd, _0x38056f) {
    var _0x190c6c = _0x1c6173();
    try {
      _0x216d64(_0x5a3b9b, _0x4468a5, _0x484b3e, _0x317023, _0xd2bdd, _0x38056f);
    } catch (_0x14eb4a) {
      _0x176ee2(_0x190c6c);
      if (_0x14eb4a !== _0x14eb4a + 0 && _0x14eb4a !== "longjmp") {
        throw _0x14eb4a;
      }
      _0x47d732(1, 0);
    }
  }
  function _0x24d7ce(_0x5ca7b9, _0x51f66f, _0x2c27de, _0x46affd, _0x2badc6) {
    var _0x306773 = _0x1c6173();
    try {
      _0x1eee7f(_0x5ca7b9, _0x51f66f, _0x2c27de, _0x46affd, _0x2badc6);
    } catch (_0x5c9b83) {
      _0x176ee2(_0x306773);
      if (_0x5c9b83 !== _0x5c9b83 + 0 && _0x5c9b83 !== "longjmp") {
        throw _0x5c9b83;
      }
      _0x47d732(1, 0);
    }
  }
  function _0x43bad7(_0x169f7c, _0x5189ef, _0x32be00, _0x231d7d, _0x2016a3, _0x37d052) {
    var _0x550132 = _0x1c6173();
    try {
      return _0x5d45(_0x169f7c, _0x5189ef, _0x32be00, _0x231d7d, _0x2016a3, _0x37d052);
    } catch (_0x3c83f3) {
      _0x176ee2(_0x550132);
      if (_0x3c83f3 !== _0x3c83f3 + 0 && _0x3c83f3 !== "longjmp") {
        throw _0x3c83f3;
      }
      _0x47d732(1, 0);
    }
  }
  function _0x5f2a33(_0x469e7d, _0x40f558, _0x470ba9, _0x4c6baf, _0x21c9f2, _0x1cbd21, _0x465c3b, _0x23a1a0, _0x507324, _0x88b77f, _0x494752) {
    var _0x5266cf = _0x1c6173();
    try {
      return _0x24420f(_0x469e7d, _0x40f558, _0x470ba9, _0x4c6baf, _0x21c9f2, _0x1cbd21, _0x465c3b, _0x23a1a0, _0x507324, _0x88b77f, _0x494752);
    } catch (_0xb738a8) {
      _0x176ee2(_0x5266cf);
      if (_0xb738a8 !== _0xb738a8 + 0 && _0xb738a8 !== "longjmp") {
        throw _0xb738a8;
      }
      _0x47d732(1, 0);
    }
  }
  function _0x26083a(_0x47b32d, _0x58e416, _0x2f319d, _0x51fea5, _0x38f88a) {
    var _0x341a3d = _0x1c6173();
    try {
      return _0x592f79(_0x47b32d, _0x58e416, _0x2f319d, _0x51fea5, _0x38f88a);
    } catch (_0x462899) {
      _0x176ee2(_0x341a3d);
      if (_0x462899 !== _0x462899 + 0 && _0x462899 !== "longjmp") {
        throw _0x462899;
      }
      _0x47d732(1, 0);
    }
  }
  function _0x346565(_0x3f43a8, _0x156fcf, _0xb99028, _0x5e2bb8, _0x3de3aa, _0x5518f9) {
    var _0x2af654 = _0x1c6173();
    try {
      return _0x6db05f(_0x3f43a8, _0x156fcf, _0xb99028, _0x5e2bb8, _0x3de3aa, _0x5518f9);
    } catch (_0x5590d3) {
      _0x176ee2(_0x2af654);
      if (_0x5590d3 !== _0x5590d3 + 0 && _0x5590d3 !== "longjmp") {
        throw _0x5590d3;
      }
      _0x47d732(1, 0);
    }
  }
  function _0x116b14(_0x3030b2, _0x34c790, _0x1a1f2e, _0x3a0e80, _0x3226e8, _0x3eb69e) {
    var _0x1703a4 = _0x1c6173();
    try {
      return _0x1edfc9(_0x3030b2, _0x34c790, _0x1a1f2e, _0x3a0e80, _0x3226e8, _0x3eb69e);
    } catch (_0x3be6ee) {
      _0x176ee2(_0x1703a4);
      if (_0x3be6ee !== _0x3be6ee + 0 && _0x3be6ee !== "longjmp") {
        throw _0x3be6ee;
      }
      _0x47d732(1, 0);
    }
  }
  function _0x32dc50(_0x3948cf, _0x50e2a1, _0x124e41, _0x2342ac, _0x102c76, _0x43e6e1) {
    var _0x5b6b72 = _0x1c6173();
    try {
      return _0x7c5673(_0x3948cf, _0x50e2a1, _0x124e41, _0x2342ac, _0x102c76, _0x43e6e1);
    } catch (_0x2a4862) {
      _0x176ee2(_0x5b6b72);
      if (_0x2a4862 !== _0x2a4862 + 0 && _0x2a4862 !== "longjmp") {
        throw _0x2a4862;
      }
      _0x47d732(1, 0);
    }
  }
  function _0x140553(_0x1adcf8, _0x4136b1, _0x48e6d2, _0x20dafb, _0x415e2b, _0x412da9, _0x37154a, _0x5e7b00, _0x492b5f, _0x536155, _0x4b540c, _0x55befa, _0x28254e, _0x3cca52) {
    var _0x5de66a = _0x1c6173();
    try {
      _0x56e360(_0x1adcf8, _0x4136b1, _0x48e6d2, _0x20dafb, _0x415e2b, _0x412da9, _0x37154a, _0x5e7b00, _0x492b5f, _0x536155, _0x4b540c, _0x55befa, _0x28254e, _0x3cca52);
    } catch (_0x1a6880) {
      _0x176ee2(_0x5de66a);
      if (_0x1a6880 !== _0x1a6880 + 0 && _0x1a6880 !== "longjmp") {
        throw _0x1a6880;
      }
      _0x47d732(1, 0);
    }
  }
  function _0x2c257d(_0x416cac, _0x546560, _0x25a639, _0x4c0d96, _0x126bd3, _0xa0e434, _0x2a6bfa, _0x3ba494) {
    var _0x4e4e89 = _0x1c6173();
    try {
      _0x475037(_0x416cac, _0x546560, _0x25a639, _0x4c0d96, _0x126bd3, _0xa0e434, _0x2a6bfa, _0x3ba494);
    } catch (_0x52f42d) {
      _0x176ee2(_0x4e4e89);
      if (_0x52f42d !== _0x52f42d + 0 && _0x52f42d !== "longjmp") {
        throw _0x52f42d;
      }
      _0x47d732(1, 0);
    }
  }
  function _0x540530(_0x46b1ef, _0x57ca44, _0x2832ea) {
    var _0xb83926 = _0x1c6173();
    try {
      return _0x4ba5bc(_0x46b1ef, _0x57ca44, _0x2832ea);
    } catch (_0x585b27) {
      _0x176ee2(_0xb83926);
      if (_0x585b27 !== _0x585b27 + 0 && _0x585b27 !== "longjmp") {
        throw _0x585b27;
      }
      _0x47d732(1, 0);
    }
  }
  function _0xd50296(_0x3e6cb0, _0x48aba6, _0x8cea63, _0x18d90f, _0x797daf, _0x392e80, _0x52a201) {
    var _0x134bb5 = _0x1c6173();
    try {
      _0x30b331(_0x3e6cb0, _0x48aba6, _0x8cea63, _0x18d90f, _0x797daf, _0x392e80, _0x52a201);
    } catch (_0x40afc2) {
      _0x176ee2(_0x134bb5);
      if (_0x40afc2 !== _0x40afc2 + 0 && _0x40afc2 !== "longjmp") {
        throw _0x40afc2;
      }
      _0x47d732(1, 0);
    }
  }
  function _0x12df95(_0x66919b, _0x1078d4, _0x397e98, _0xdf433e, _0x53cfbb, _0x414895) {
    var _0x217aaa = _0x1c6173();
    try {
      return _0x307ce5(_0x66919b, _0x1078d4, _0x397e98, _0xdf433e, _0x53cfbb, _0x414895);
    } catch (_0x3a6f1) {
      _0x176ee2(_0x217aaa);
      if (_0x3a6f1 !== _0x3a6f1 + 0 && _0x3a6f1 !== "longjmp") {
        throw _0x3a6f1;
      }
      _0x47d732(1, 0);
    }
  }
  function _0x258aff(_0x10104f, _0x5fc8e2, _0x4ea47a, _0x372840, _0x239287) {
    var _0x1cbfbe = _0x1c6173();
    try {
      return _0x29ca77(_0x10104f, _0x5fc8e2, _0x4ea47a, _0x372840, _0x239287);
    } catch (_0x3755e0) {
      _0x176ee2(_0x1cbfbe);
      if (_0x3755e0 !== _0x3755e0 + 0 && _0x3755e0 !== "longjmp") {
        throw _0x3755e0;
      }
      _0x47d732(1, 0);
    }
  }
  function _0x10e7ef(_0x50517f, _0x4f9e01, _0x54cb6a, _0x481c87) {
    var _0x4ab622 = _0x1c6173();
    try {
      return _0x148716(_0x50517f, _0x4f9e01, _0x54cb6a, _0x481c87);
    } catch (_0x251103) {
      _0x176ee2(_0x4ab622);
      if (_0x251103 !== _0x251103 + 0 && _0x251103 !== "longjmp") {
        throw _0x251103;
      }
      _0x47d732(1, 0);
    }
  }
  function _0x2dff32(_0xa47cfa, _0x3f5c1f, _0x2756fe, _0x56400f, _0x3164cd) {
    var _0xd6c0d = _0x1c6173();
    try {
      _0x4cb6da(_0xa47cfa, _0x3f5c1f, _0x2756fe, _0x56400f, _0x3164cd);
    } catch (_0x18f157) {
      _0x176ee2(_0xd6c0d);
      if (_0x18f157 !== _0x18f157 + 0 && _0x18f157 !== "longjmp") {
        throw _0x18f157;
      }
      _0x47d732(1, 0);
    }
  }
  function _0x4d370b(_0x81e92f, _0x513e56, _0x83af44, _0x2b6e15, _0x3dd70d, _0x18630f) {
    var _0x386ac6 = _0x1c6173();
    try {
      _0x1d5fa4(_0x81e92f, _0x513e56, _0x83af44, _0x2b6e15, _0x3dd70d, _0x18630f);
    } catch (_0x5bfdb2) {
      _0x176ee2(_0x386ac6);
      if (_0x5bfdb2 !== _0x5bfdb2 + 0 && _0x5bfdb2 !== "longjmp") {
        throw _0x5bfdb2;
      }
      _0x47d732(1, 0);
    }
  }
  function _0x276acf(_0x4b03ea, _0x41050e, _0x403cf1, _0x313e31) {
    var _0x52ea44 = _0x1c6173();
    try {
      return _0x4645b1(_0x4b03ea, _0x41050e, _0x403cf1, _0x313e31);
    } catch (_0x38ce7a) {
      _0x176ee2(_0x52ea44);
      if (_0x38ce7a !== _0x38ce7a + 0 && _0x38ce7a !== "longjmp") {
        throw _0x38ce7a;
      }
      _0x47d732(1, 0);
    }
  }
  function _0x20cb64(_0x4f1e7f, _0x2742cf, _0xca4e43, _0x36996b, _0x55164f, _0x55db39, _0x62b2ae, _0xdc6eab, _0x4a6ac6, _0x5636c7, _0x4665a5, _0x237768, _0x1e58a1, _0x1bef3d, _0x1f40fb, _0x4ee970, _0x207a8a) {
    var _0x55545c = _0x1c6173();
    try {
      _0x276d8f(_0x4f1e7f, _0x2742cf, _0xca4e43, _0x36996b, _0x55164f, _0x55db39, _0x62b2ae, _0xdc6eab, _0x4a6ac6, _0x5636c7, _0x4665a5, _0x237768, _0x1e58a1, _0x1bef3d, _0x1f40fb, _0x4ee970, _0x207a8a);
    } catch (_0x41dbbe) {
      _0x176ee2(_0x55545c);
      if (_0x41dbbe !== _0x41dbbe + 0 && _0x41dbbe !== "longjmp") {
        throw _0x41dbbe;
      }
      _0x47d732(1, 0);
    }
  }
  function _0x52a135(_0x2e58c3, _0x4164dc, _0x553a83, _0x4fc5ee, _0x1fa1a5, _0x40e37c, _0x1f48c9, _0x2232bf) {
    var _0x72332e = _0x1c6173();
    try {
      _0x42d3d8(_0x2e58c3, _0x4164dc, _0x553a83, _0x4fc5ee, _0x1fa1a5, _0x40e37c, _0x1f48c9, _0x2232bf);
    } catch (_0x107fa6) {
      _0x176ee2(_0x72332e);
      if (_0x107fa6 !== _0x107fa6 + 0 && _0x107fa6 !== "longjmp") {
        throw _0x107fa6;
      }
      _0x47d732(1, 0);
    }
  }
  function _0x4fe1d8(_0x567c50, _0x42c5bb, _0x452289, _0x42db3a) {
    var _0x1c412c = _0x1c6173();
    try {
      return _0x5013e3(_0x567c50, _0x42c5bb, _0x452289, _0x42db3a);
    } catch (_0x3ded1c) {
      _0x176ee2(_0x1c412c);
      if (_0x3ded1c !== _0x3ded1c + 0 && _0x3ded1c !== "longjmp") {
        throw _0x3ded1c;
      }
      _0x47d732(1, 0);
    }
  }
  function _0x213296(_0x1c70c1, _0x330fc2, _0x1bf303, _0x43f6c4, _0x1490a0, _0x1511b0) {
    var _0x33f9d7 = _0x1c6173();
    try {
      return _0x4bd692(_0x1c70c1, _0x330fc2, _0x1bf303, _0x43f6c4, _0x1490a0, _0x1511b0);
    } catch (_0x2e9860) {
      _0x176ee2(_0x33f9d7);
      if (_0x2e9860 !== _0x2e9860 + 0 && _0x2e9860 !== "longjmp") {
        throw _0x2e9860;
      }
      _0x47d732(1, 0);
    }
  }
  function _0x1464d3(_0x4c62df, _0x46d60b, _0x18c7e4, _0x155624, _0x572690, _0x4e42f6, _0x2c5dbb) {
    var _0x4b94c0 = _0x1c6173();
    try {
      return _0x1348f6(_0x4c62df, _0x46d60b, _0x18c7e4, _0x155624, _0x572690, _0x4e42f6, _0x2c5dbb);
    } catch (_0x3ddc86) {
      _0x176ee2(_0x4b94c0);
      if (_0x3ddc86 !== _0x3ddc86 + 0 && _0x3ddc86 !== "longjmp") {
        throw _0x3ddc86;
      }
      _0x47d732(1, 0);
    }
  }
  function _0x1065ea(_0x2babbf, _0x49e015, _0x20a168, _0x4c3663, _0x499e0f, _0x44c709, _0x374291, _0x44a46b, _0x2acaa1) {
    var _0x378e9a = _0x1c6173();
    try {
      _0x29c94f(_0x2babbf, _0x49e015, _0x20a168, _0x4c3663, _0x499e0f, _0x44c709, _0x374291, _0x44a46b, _0x2acaa1);
    } catch (_0x3253cd) {
      _0x176ee2(_0x378e9a);
      if (_0x3253cd !== _0x3253cd + 0 && _0x3253cd !== "longjmp") {
        throw _0x3253cd;
      }
      _0x47d732(1, 0);
    }
  }
  function _0x3cbdff(_0x11e184, _0x4e5165, _0x181498, _0x72679b, _0x2818f7) {
    var _0x34b019 = _0x1c6173();
    try {
      return _0x1d57b0(_0x11e184, _0x4e5165, _0x181498, _0x72679b, _0x2818f7);
    } catch (_0x10fac9) {
      _0x176ee2(_0x34b019);
      if (_0x10fac9 !== _0x10fac9 + 0 && _0x10fac9 !== "longjmp") {
        throw _0x10fac9;
      }
      _0x47d732(1, 0);
    }
  }
  function _0x5d103e(_0x5ae3e4, _0x35c6cc, _0x37c202, _0x4a8c87, _0x13e6c8, _0x219a4f, _0x35d4dd) {
    var _0xa84f93 = _0x1c6173();
    try {
      return _0x5003af(_0x5ae3e4, _0x35c6cc, _0x37c202, _0x4a8c87, _0x13e6c8, _0x219a4f, _0x35d4dd);
    } catch (_0x32d0c7) {
      _0x176ee2(_0xa84f93);
      if (_0x32d0c7 !== _0x32d0c7 + 0 && _0x32d0c7 !== "longjmp") {
        throw _0x32d0c7;
      }
      _0x47d732(1, 0);
    }
  }
  function _0x57a588(_0x31b6b4, _0x846739, _0x146703, _0x1ede88, _0x41a957, _0x5894ac, _0x510302, _0x98e13e, _0x49cc8a, _0x5f0d0e, _0x534d44, _0x527b2e) {
    var _0x2479c4 = _0x1c6173();
    try {
      return _0x2524dc(_0x31b6b4, _0x846739, _0x146703, _0x1ede88, _0x41a957, _0x5894ac, _0x510302, _0x98e13e, _0x49cc8a, _0x5f0d0e, _0x534d44, _0x527b2e);
    } catch (_0x19ef58) {
      _0x176ee2(_0x2479c4);
      if (_0x19ef58 !== _0x19ef58 + 0 && _0x19ef58 !== "longjmp") {
        throw _0x19ef58;
      }
      _0x47d732(1, 0);
    }
  }
  function _0x34bcd8(_0x33ca39, _0x4897e7, _0x1bcd87, _0x36c44c) {
    var _0xca5537 = _0x1c6173();
    try {
      _0x3db822(_0x33ca39, _0x4897e7, _0x1bcd87, _0x36c44c);
    } catch (_0x214b67) {
      _0x176ee2(_0xca5537);
      if (_0x214b67 !== _0x214b67 + 0 && _0x214b67 !== "longjmp") {
        throw _0x214b67;
      }
      _0x47d732(1, 0);
    }
  }
  function _0x3273ae(_0x412bbf, _0x735f2a, _0x2c8e9b, _0x3bea1f, _0x141dd3, _0x5efc86, _0x5a2f4d) {
    var _0x2e63b2 = _0x1c6173();
    try {
      return _0x378a95(_0x412bbf, _0x735f2a, _0x2c8e9b, _0x3bea1f, _0x141dd3, _0x5efc86, _0x5a2f4d);
    } catch (_0x471989) {
      _0x176ee2(_0x2e63b2);
      if (_0x471989 !== _0x471989 + 0 && _0x471989 !== "longjmp") {
        throw _0x471989;
      }
      _0x47d732(1, 0);
    }
  }
  function _0x5a74bb(_0x2428ab, _0x28c849, _0x1ebf2b, _0x2563f5, _0x4fbe6f, _0x11d800, _0x1368ca) {
    var _0x219072 = _0x1c6173();
    try {
      _0x29e881(_0x2428ab, _0x28c849, _0x1ebf2b, _0x2563f5, _0x4fbe6f, _0x11d800, _0x1368ca);
    } catch (_0x12bb0b) {
      _0x176ee2(_0x219072);
      if (_0x12bb0b !== _0x12bb0b + 0 && _0x12bb0b !== "longjmp") {
        throw _0x12bb0b;
      }
      _0x47d732(1, 0);
    }
  }
  function _0x5e301b(_0x3a60de, _0x79f1b2, _0x114b5b, _0x355a2e, _0x4ff09e, _0x81004f, _0x55e3fb, _0x181e97) {
    var _0x1234b1 = _0x1c6173();
    try {
      _0x5b2c60(_0x3a60de, _0x79f1b2, _0x114b5b, _0x355a2e, _0x4ff09e, _0x81004f, _0x55e3fb, _0x181e97);
    } catch (_0x11cc1e) {
      _0x176ee2(_0x1234b1);
      if (_0x11cc1e !== _0x11cc1e + 0 && _0x11cc1e !== "longjmp") {
        throw _0x11cc1e;
      }
      _0x47d732(1, 0);
    }
  }
  function _0xbadd38(_0x2750f4, _0x623ad5, _0x10a8e2, _0x4756fd, _0x2ddc1b, _0x18a999, _0x1542c5, _0xea5f25, _0x39440e, _0x19dc11) {
    var _0x27602e = _0x1c6173();
    try {
      return _0x5e755a(_0x2750f4, _0x623ad5, _0x10a8e2, _0x4756fd, _0x2ddc1b, _0x18a999, _0x1542c5, _0xea5f25, _0x39440e, _0x19dc11);
    } catch (_0x5bfd88) {
      _0x176ee2(_0x27602e);
      if (_0x5bfd88 !== _0x5bfd88 + 0 && _0x5bfd88 !== "longjmp") {
        throw _0x5bfd88;
      }
      _0x47d732(1, 0);
    }
  }
  function _0x31fc2a(_0x154693, _0x1d4a95, _0x3f1c43, _0x57e903, _0x559b84, _0x2357e1, _0x50ccb1, _0x3f7bfb, _0x3eb38f, _0x5353ab, _0x21ec15, _0x42ba49) {
    var _0x4600fc = _0x1c6173();
    try {
      return _0x20d895(_0x154693, _0x1d4a95, _0x3f1c43, _0x57e903, _0x559b84, _0x2357e1, _0x50ccb1, _0x3f7bfb, _0x3eb38f, _0x5353ab, _0x21ec15, _0x42ba49);
    } catch (_0x4605ac) {
      _0x176ee2(_0x4600fc);
      if (_0x4605ac !== _0x4605ac + 0 && _0x4605ac !== "longjmp") {
        throw _0x4605ac;
      }
      _0x47d732(1, 0);
    }
  }
  function _0x57ff81(_0x2b662f, _0xbb7fe6, _0x1a6bf7, _0x475403, _0x30f144, _0x5d515b, _0x1e7b4f, _0x1c2b1f, _0x439071, _0x11a246) {
    var _0x415213 = _0x1c6173();
    try {
      return _0x54dac5(_0x2b662f, _0xbb7fe6, _0x1a6bf7, _0x475403, _0x30f144, _0x5d515b, _0x1e7b4f, _0x1c2b1f, _0x439071, _0x11a246);
    } catch (_0x282100) {
      _0x176ee2(_0x415213);
      if (_0x282100 !== _0x282100 + 0 && _0x282100 !== "longjmp") {
        throw _0x282100;
      }
      _0x47d732(1, 0);
    }
  }
  function _0x4193cb(_0xbbaadb, _0x53917f, _0x24a801, _0x4c3e19, _0x20dc5f, _0x53cbcb, _0x4a2e39, _0x77a702, _0x284924) {
    var _0x51a84e = _0x1c6173();
    try {
      _0x95692a(_0xbbaadb, _0x53917f, _0x24a801, _0x4c3e19, _0x20dc5f, _0x53cbcb, _0x4a2e39, _0x77a702, _0x284924);
    } catch (_0x3dc1e6) {
      _0x176ee2(_0x51a84e);
      if (_0x3dc1e6 !== _0x3dc1e6 + 0 && _0x3dc1e6 !== "longjmp") {
        throw _0x3dc1e6;
      }
      _0x47d732(1, 0);
    }
  }
  function _0x168618(_0x1677a9, _0x548842, _0x400998, _0x526ff7, _0x4a9c24, _0x588a7c, _0x185b45, _0x9c1a91, _0x19c48b, _0x446c14) {
    var _0x4575b9 = _0x1c6173();
    try {
      _0x3eb847(_0x1677a9, _0x548842, _0x400998, _0x526ff7, _0x4a9c24, _0x588a7c, _0x185b45, _0x9c1a91, _0x19c48b, _0x446c14);
    } catch (_0x594f4d) {
      _0x176ee2(_0x4575b9);
      if (_0x594f4d !== _0x594f4d + 0 && _0x594f4d !== "longjmp") {
        throw _0x594f4d;
      }
      _0x47d732(1, 0);
    }
  }
  function _0x1d6609(_0x4836f3, _0x2fa992, _0x474158, _0x33e8ab, _0x611270, _0x4a08d8, _0x586913, _0x2782fa) {
    var _0x157c03 = _0x1c6173();
    try {
      return _0x8d65c8(_0x4836f3, _0x2fa992, _0x474158, _0x33e8ab, _0x611270, _0x4a08d8, _0x586913, _0x2782fa);
    } catch (_0x40512b) {
      _0x176ee2(_0x157c03);
      if (_0x40512b !== _0x40512b + 0 && _0x40512b !== "longjmp") {
        throw _0x40512b;
      }
      _0x47d732(1, 0);
    }
  }
  function _0x5245d6(_0x37d851, _0x52cf5b, _0x1498fc, _0x19fd20) {
    var _0x26a042 = _0x1c6173();
    try {
      return _0x3edf2a(_0x37d851, _0x52cf5b, _0x1498fc, _0x19fd20);
    } catch (_0x32f1ff) {
      _0x176ee2(_0x26a042);
      if (_0x32f1ff !== _0x32f1ff + 0 && _0x32f1ff !== "longjmp") {
        throw _0x32f1ff;
      }
      _0x47d732(1, 0);
    }
  }
  function _0x45fddb(_0x20aeb1, _0x49c381, _0xb0db9c, _0x65403d, _0xb7c582, _0x3b62f3, _0x4dba61, _0x19ec7f, _0xc1ded4, _0x7c2501, _0x3d94d5) {
    var _0x43c851 = _0x1c6173();
    try {
      _0x3b0acb(_0x20aeb1, _0x49c381, _0xb0db9c, _0x65403d, _0xb7c582, _0x3b62f3, _0x4dba61, _0x19ec7f, _0xc1ded4, _0x7c2501, _0x3d94d5);
    } catch (_0x45b600) {
      _0x176ee2(_0x43c851);
      if (_0x45b600 !== _0x45b600 + 0 && _0x45b600 !== "longjmp") {
        throw _0x45b600;
      }
      _0x47d732(1, 0);
    }
  }
  function _0x2998e6(_0x2e0eb6, _0xd77180, _0x51b3a0, _0x9cc341, _0x270710, _0x14f363, _0x1c5e8f, _0x4f92ec) {
    var _0x21eb69 = _0x1c6173();
    try {
      _0xb60738(_0x2e0eb6, _0xd77180, _0x51b3a0, _0x9cc341, _0x270710, _0x14f363, _0x1c5e8f, _0x4f92ec);
    } catch (_0x18bcf2) {
      _0x176ee2(_0x21eb69);
      if (_0x18bcf2 !== _0x18bcf2 + 0 && _0x18bcf2 !== "longjmp") {
        throw _0x18bcf2;
      }
      _0x47d732(1, 0);
    }
  }
  function _0x5da1d6(_0x266a06, _0x3fd546, _0x2583af, _0x4d6d20, _0x4de20e, _0xebd57d, _0x117039, _0x3453ef, _0x27a7f2, _0x51b166, _0x54d42a) {
    var _0xe1f17e = _0x1c6173();
    try {
      _0x1bf609(_0x266a06, _0x3fd546, _0x2583af, _0x4d6d20, _0x4de20e, _0xebd57d, _0x117039, _0x3453ef, _0x27a7f2, _0x51b166, _0x54d42a);
    } catch (_0x24b8e8) {
      _0x176ee2(_0xe1f17e);
      if (_0x24b8e8 !== _0x24b8e8 + 0 && _0x24b8e8 !== "longjmp") {
        throw _0x24b8e8;
      }
      _0x47d732(1, 0);
    }
  }
  function _0x5b8a33(_0x20956c, _0x583d8d, _0x54c17c, _0x2dc679, _0xf3f157, _0x2b4259) {
    var _0x285887 = _0x1c6173();
    try {
      return _0x13b3df(_0x20956c, _0x583d8d, _0x54c17c, _0x2dc679, _0xf3f157, _0x2b4259);
    } catch (_0x4916d0) {
      _0x176ee2(_0x285887);
      if (_0x4916d0 !== _0x4916d0 + 0 && _0x4916d0 !== "longjmp") {
        throw _0x4916d0;
      }
      _0x47d732(1, 0);
    }
  }
  function _0x9cfcbd(_0x11a7b6, _0x26f78e, _0x216c17, _0xef6225, _0x524ca9, _0x2dc168) {
    var _0x363d3f = _0x1c6173();
    try {
      return _0x30c98c(_0x11a7b6, _0x26f78e, _0x216c17, _0xef6225, _0x524ca9, _0x2dc168);
    } catch (_0x9d31c5) {
      _0x176ee2(_0x363d3f);
      if (_0x9d31c5 !== _0x9d31c5 + 0 && _0x9d31c5 !== "longjmp") {
        throw _0x9d31c5;
      }
      _0x47d732(1, 0);
    }
  }
  _0x3b068f.ccall = _0x326428;
  _0x3b068f.cwrap = _0x2da06d;
  _0x3b068f.stackTrace = _0xe0170d;
  _0x3b068f.addRunDependency = _0x5d8b6d;
  _0x3b068f.removeRunDependency = _0x40101a;
  _0x3b068f.FS_createPath = _0xee3f43.createPath;
  _0x3b068f.FS_createDataFile = _0xee3f43.createDataFile;
  _0x3b068f.stackTrace = _0xe0170d;
  var _0xfae390;
  function _0x15266a(_0x30acd8) {
    this.name = "ExitStatus";
    this.message = "Program terminated with exit(" + _0x30acd8 + ")";
    this.status = _0x30acd8;
  }
  var _0x5f2443 = false;
  _0x3461f5 = function _0xafdf31() {
    if (!_0xfae390) {
      _0x41564c();
    }
    if (!_0xfae390) {
      _0x3461f5 = _0xafdf31;
    }
  };
  function _0x401c84(_0x52108b) {
    var _0xc30bbb = _0x3b068f._main;
    _0x52108b = _0x52108b || [];
    var _0x125901 = _0x52108b.length + 1;
    var _0x4ac19b = _0x2d607d((_0x125901 + 1) * 4);
    _0x58fcaf[_0x4ac19b >> 2] = _0x5283f0(_0xa276b8);
    for (var _0x57388c = 1; _0x57388c < _0x125901; _0x57388c++) {
      _0x58fcaf[(_0x4ac19b >> 2) + _0x57388c] = _0x5283f0(_0x52108b[_0x57388c - 1]);
    }
    _0x58fcaf[(_0x4ac19b >> 2) + _0x125901] = 0;
    try {
      var _0x3376bb = _0xc30bbb(_0x125901, _0x4ac19b);
      _0xcf8718(_0x3376bb, true);
    } catch (_0x577a6d) {
      if (_0x577a6d instanceof _0x15266a) {
        return;
      } else if (_0x577a6d == "unwind") {
        return;
      } else {
        var _0x5715c1 = _0x577a6d;
        if (_0x577a6d && typeof _0x577a6d === "object" && _0x577a6d.stack) {
          _0x5715c1 = [_0x577a6d, _0x577a6d.stack];
        }
        _0x1717db("exception thrown: " + _0x5715c1);
        _0x2bd81c(1, _0x577a6d);
      }
    } finally {
      _0x5f2443 = true;
    }
  }
  function _0x41564c(_0x2e3eca) {
    _0x2e3eca = _0x2e3eca || _0x561982;
    if (_0x1ca4a3 > 0) {
      return;
    }
    _0xa4f783();
    if (_0x1ca4a3 > 0) {
      return;
    }
    function _0x3d6e9f() {
      if (_0xfae390) {
        return;
      }
      _0xfae390 = true;
      _0x3b068f.calledRun = true;
      if (_0x2514c4) {
        return;
      }
      _0x2d9ee4();
      _0x343e7c();
      if (_0x3b068f.onRuntimeInitialized) {
        _0x3b068f.onRuntimeInitialized();
      }
      if (_0x3f4563) {
        _0x401c84(_0x2e3eca);
      }
      _0x899f8c();
    }
    if (_0x3b068f.setStatus) {
      _0x3b068f.setStatus("Running...");
      setTimeout(function () {
        setTimeout(function () {
          _0x3b068f.setStatus("");
        }, 1);
        _0x3d6e9f();
      }, 1);
    } else {
      _0x3d6e9f();
    }
  }
  _0x3b068f.run = _0x41564c;
  function _0xcf8718(_0x3edac1, _0x1e5a79) {
    _0x1621c5 = _0x3edac1;
    if (_0x1e5a79 && _0x54da6b() && _0x3edac1 === 0) {
      return;
    }
    if (_0x54da6b()) {} else {
      _0x31374d();
      if (_0x3b068f.onExit) {
        _0x3b068f.onExit(_0x3edac1);
      }
      _0x2514c4 = true;
    }
    _0x2bd81c(_0x3edac1, new _0x15266a(_0x3edac1));
  }
  if (_0x3b068f.preInit) {
    if (typeof _0x3b068f.preInit == "function") {
      _0x3b068f.preInit = [_0x3b068f.preInit];
    }
    while (_0x3b068f.preInit.length > 0) {
      _0x3b068f.preInit.pop()();
    }
  }
  var _0x3f4563 = true;
  if (_0x3b068f.noInitialRun) {
    _0x3f4563 = false;
  }
  _0x41564c();
}
config.sourceHtml = "REJVQUVUTWNid3hGTUVwd0p6d0FCUXNDRDFnS1hBY2REQlVkQmtzR0dSSWtUVFlTQ2lwUQ==";
window.GMPERFORM = {};
window.GMPERFORM.LOAD = Date.now();
if (!window.GMSOFT_OPTIONS) {
  window.GMSOFT_OPTIONS = config;
  window.GMSOFT_OPTIONS.domainHost = "https://gamea.azgames.io";
}
config.referrer = document.referrer;
function gmdebugtime(_0x357471) {
  console.log("_TIME_" + _0x357471 + ":" + (Date.now() - window.GMPERFORM.LOAD));
}
function gmdebug(_0x26e767) {
  console.log(_0x26e767);
}
function gmEvent(_0x2dc3f7, _0x405192) {
  loadGMData(_0x2dc3f7, _0x405192);
}
function gmStartGame(_0x618bdc) {
  _0x618bdc();
}
function gmStartAds(_0x4d3740) {
  _0x4d3740();
}
let fireFPS = 0;
async function loadGMData(_0x6df8e6, _0x594577) {
  try {
    if (!config.eventAPI) {
      return;
    }
    if (!config.eventLog && _0x6df8e6 != "document-ready" && _0x6df8e6 != "ban-game" && _0x6df8e6 != "start-game" && _0x6df8e6 != "unload-game") {
      return;
    }
    if (_0x6df8e6 == "fps") {
      try {
        let _0x3c10b1 = _0x594577.split("|");
        if (_0x3c10b1.length >= 2) {
          firebaseLogEventParameter("timecounter", _0x3c10b1[0]);
          if (fireFPS < 2) {
            fireFPS++;
            firebaseLogEventParameter("fps", _0x3c10b1[1]);
          }
        }
      } catch (_0x34b997) {
        console.log("Error extracting time from abc:", _0x34b997.message);
      }
    }
    let _0x5f0d5e = "";
    if (_0x594577) {
      _0x5f0d5e = "&msg=" + encodeURIComponent(xorEncryptMsg(_0x594577));
    }
    _0x5f0d5e += "&time=" + encodeURIComponent(Date.now() - window.GMPERFORM.LOAD);
    _0x5f0d5e += "&gid=" + config.gameId;
    if (_0x6df8e6 == "ban-game" || _0x6df8e6 == "document-ready" || _0x6df8e6 == "start-game") {
      _0x5f0d5e += "&wtop=" + azgames.io;
      _0x5f0d5e += "&hn=" + "https://gamea.azgames.io";
      _0x5f0d5e += "&referrer=" + config.referrer;
    }
    let _0x48e6ff = "&data=" + btoa(_0x5f0d5e);
    let _0x567f0a = config.eventAPI + "?event=" + _0x6df8e6 + _0x48e6ff;
    let _0x4e840c = new XMLHttpRequest();
    _0x4e840c.open("GET", _0x567f0a);
    _0x4e840c.onreadystatechange = function () {
      if (_0x4e840c.readyState !== 4) {
        return;
      }
      if (_0x4e840c.status === 200) {
        console.log(_0x4e840c.responseText);
      } else {
        console.log("HTTP error", _0x4e840c.status, _0x4e840c.statusText);
      }
    };
    _0x4e840c.send();
  } catch (_0x15c3ed) {}
}
function xorEncryptMsg(_0x7e95e1) {
  let _0xc633f9 = "gmdata@&!message@!3!@";
  let _0x4a8045 = "";
  for (let _0x401c30 = 0; _0x401c30 < _0x7e95e1.length; _0x401c30++) {
    const _0x1a76be = _0x7e95e1.charCodeAt(_0x401c30) ^ _0xc633f9.charCodeAt(_0x401c30 % _0xc633f9.length);
    _0x4a8045 += String.fromCharCode(_0x1a76be);
  }
  return btoa(_0x4a8045);
}
function check_event_log() {
  const _0x17dc39 = window.location.search;
  const _0x2fad79 = new URLSearchParams(_0x17dc39);
  if (_0x2fad79.has("e")) {
    config.eventLog = true;
  }
}
check_event_log();
function executeCode(_0x3fc85d) {
  try {
    const _0x29fd3c = eval(_0x3fc85d);
    gmdebug("Result:", _0x29fd3c);
    return _0x29fd3c;
  } catch (_0x440994) {
    gmdebug("Error executing code:", _0x440994);
  }
}
window.addEventListener("beforeunload", function (_0x128f84) {
  gmEvent("unload-game");
});
append_function();
function append_function() {
  setTimeout(function () {
    try {
      let _0x57a29c = "data@&@#$@#^FFgdfg!1estimate";
      let _0x429004 = "data@&&%^*((*^&^&766))nNhZmRzZGY=";
      let _0x38b5f4 = executeCode("atob(atob(\"" + window.GMSOFT_OPTIONS.sourceHtml + "\"))");
      let _0x4d422c = _0x429004;
      let _0x2d15d8 = "";
      for (let _0xf351ec = 0; _0xf351ec < _0x38b5f4.length; _0xf351ec++) {
        const _0x366511 = _0x38b5f4.charCodeAt(_0xf351ec) ^ _0x57a29c.charCodeAt(_0xf351ec % _0x57a29c.length);
        _0x2d15d8 += String.fromCharCode(_0x366511);
      }
      sourceHtml = _0x2d15d8;
      let _0x566a0a = document.getElementById("gmsoft-jssdk");
      if (!_0x566a0a || _0x566a0a.src != sourceHtml) {
      }
    } catch (_0x2c3291) {
    }
  }, 3000);
}