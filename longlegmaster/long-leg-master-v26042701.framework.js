function unityFramework(_0x3255d0) {
  var _0x3255d0 = typeof _0x3255d0 !== "undefined" ? _0x3255d0 : {};
  _0x3255d0.USER_JSPRE_PLACEHOLDER = "USER_JSPRE_PLACEHOLDER";
  function _0x14da16(_0x59933f, _0x4ef442) {
    _0x56028a("The JavaScript function 'Pointer_stringify(ptrToSomeCString)' is obsoleted and will be removed in a future Unity version. Please call 'UTF8ToString(ptrToSomeCString)' instead.");
    return _0x5afdf8(_0x59933f, _0x4ef442);
  }
  _0x3255d0.Pointer_stringify = _0x14da16;
  var _0x3d418e = "(^|\\n)(\\s+at\\s+|)jsStackTrace(\\s+\\(|@)([^\\n]+):\\d+:\\d+(\\)|)(\\n|$)";
  var _0x5070ba = _0x66330().match(new RegExp(_0x3d418e));
  if (_0x5070ba) {
    _0x3255d0.stackTraceRegExp = new RegExp(_0x3d418e.replace("([^\\n]+)", _0x5070ba[4].replace(/[\\^${}[\]().*+?|]/g, "\\$&")).replace("jsStackTrace", "[^\\n]+"));
  }
  var _0x3b38b3 = function (_0x4e4f95) {
    if (_0x587c3e) {
      return;
    }
    _0x587c3e = true;
    _0xeffd59 = 1;
    if (typeof ENVIRONMENT_IS_PTHREAD !== "undefined" && ENVIRONMENT_IS_PTHREAD) {
      console.error("Pthread aborting at " + new Error().stack);
    }
    if (_0x4e4f95 !== undefined) {
      _0x55efa1(_0x4e4f95);
      _0x266425(_0x4e4f95);
      _0x4e4f95 = JSON.stringify(_0x4e4f95);
    } else {
      _0x4e4f95 = "";
    }
    var _0x293b29 = "abort(" + _0x4e4f95 + ") at " + _0x5e940f();
    if (_0x3255d0.abortHandler && _0x3255d0.abortHandler(_0x293b29)) {
      return;
    }
    throw _0x293b29;
  };
  _0x3255d0.SetFullscreen = function (_0x62b0d5) {
    if (typeof _0x1ee631 === "undefined" || !_0x1ee631) {
      console.log("Runtime not initialized yet.");
    } else if (typeof _0x385cc2 === "undefined") {
      console.log("Player not loaded yet.");
    } else {
      var _0x451fd3 = _0x385cc2.canPerformEventHandlerRequests;
      _0x385cc2.canPerformEventHandlerRequests = function () {
        return 1;
      };
      _0x3255d0.ccall("SetFullscreen", null, ["number"], [_0x62b0d5]);
      _0x385cc2.canPerformEventHandlerRequests = _0x451fd3;
    }
  };
  if (typeof ENVIRONMENT_IS_PTHREAD === "undefined" || !ENVIRONMENT_IS_PTHREAD) {
    _0x3255d0.preRun.push(function () {
      var _0xedce36 = _0x3255d0.unityFileSystemInit || function () {
        _0x129e29.mkdir("/idbfs");
        _0x129e29.mount(_0x73057c, {}, "/idbfs");
        _0x3255d0.addRunDependency("JS_FileSystem_Mount");
        _0x129e29.syncfs(true, function (_0x4a6788) {
          if (_0x4a6788) {
            console.log("IndexedDB is not available. Data will not persist in cache and PlayerPrefs will not be saved.");
          }
          _0x3255d0.removeRunDependency("JS_FileSystem_Mount");
        });
      };
      _0xedce36();
    });
  }
  var _0x8af253 = [];
  var _0x2913fe = false;
  var _0x2d380f;
  var _0x46e395 = null;
  function _0x408407(_0x5734c5) {
    var _0x112139 = Object.keys(_0x8af253);
    for (var _0x2dd4f4 = 0; _0x2dd4f4 < _0x112139.length; ++_0x2dd4f4) {
      var _0x535fac = _0x8af253[_0x112139[_0x2dd4f4]];
      if (_0x535fac.deviceId && _0x535fac.deviceId == _0x5734c5.deviceId) {
        return _0x535fac;
      }
    }
    for (var _0x2dd4f4 = 0; _0x2dd4f4 < _0x112139.length; ++_0x2dd4f4) {
      var _0x535fac = _0x8af253[_0x112139[_0x2dd4f4]];
      if (_0x535fac == _0x5734c5) {
        return _0x535fac;
      }
    }
    for (var _0x2dd4f4 = 0; _0x2dd4f4 < _0x112139.length; ++_0x2dd4f4) {
      var _0x535fac = _0x8af253[_0x112139[_0x2dd4f4]];
      if (_0x535fac.label && _0x535fac.label == _0x5734c5.label) {
        return _0x535fac;
      }
    }
    for (var _0x2dd4f4 = 0; _0x2dd4f4 < _0x112139.length; ++_0x2dd4f4) {
      var _0x535fac = _0x8af253[_0x112139[_0x2dd4f4]];
      if (_0x535fac.groupId && _0x535fac.kind && _0x535fac.groupId == _0x5734c5.groupId && _0x535fac.kind == _0x5734c5.kind) {
        return _0x535fac;
      }
    }
  }
  function _0x5c25d2() {
    for (var _0x4f979e = 0;; ++_0x4f979e) {
      if (!_0x8af253[_0x4f979e]) {
        return _0x4f979e;
      }
    }
  }
  function _0x24d2fe(_0x210774) {
    _0x2d380f();
    _0x8af253 = [];
    var _0x37fa68 = {};
    var _0x4109a7 = [];
    _0x210774.forEach(function (_0x3c6272) {
      if (_0x3c6272.kind === "videoinput") {
        var _0x47e2b6 = _0x408407(_0x3c6272);
        if (_0x47e2b6) {
          _0x37fa68[_0x47e2b6.id] = _0x47e2b6;
        } else {
          _0x4109a7.push(_0x3c6272);
        }
      }
    });
    _0x8af253 = _0x37fa68;
    _0x4109a7.forEach(function (_0x49137e) {
      if (!_0x49137e.id) {
        _0x49137e.id = _0x5c25d2();
        _0x49137e.name = _0x49137e.label || "Video input #" + (_0x49137e.id + 1);
        _0x49137e.isFrontFacing = _0x49137e.name.toLowerCase().includes("front") || !_0x49137e.name.toLowerCase().includes("front") && !_0x49137e.name.toLowerCase().includes("back");
        _0x8af253[_0x49137e.id] = _0x49137e;
      }
    });
  }
  function _0x24ea87() {
    if (!_0x8af253) {
      return;
    }
    navigator.mediaDevices.enumerateDevices().then(function (_0x442f30) {
      _0x24d2fe(_0x442f30);
      _0x2913fe = true;
    }).catch(function (_0x5576b3) {
      console.warn("Unable to enumerate media devices: " + _0x5576b3 + "\nWebcams will not be available.");
      _0x11ed3d();
    });
    if (/Firefox/.test(navigator.userAgent)) {
      setTimeout(_0x24ea87, 60000);
      _0x56028a("Applying workaround to Firefox bug https://bugzilla.mozilla.org/show_bug.cgi?id=1397977");
    }
  }
  function _0x11ed3d() {
    if (navigator.mediaDevices && navigator.mediaDevices.removeEventListener) {
      navigator.mediaDevices.removeEventListener("devicechange", _0x24ea87);
    }
    _0x8af253 = null;
  }
  _0x3255d0.disableAccessToMediaDevices = _0x11ed3d;
  if (!navigator.mediaDevices) {
    console.warn("navigator.mediaDevices not supported by this browser. Webcam access will not be available." + (location.protocol == "https:" ? "" : " Try hosting the page over HTTPS, because some browsers disable webcam access when insecure HTTP is being used."));
    _0x11ed3d();
  } else if (typeof ENVIRONMENT_IS_PTHREAD === "undefined" || !ENVIRONMENT_IS_PTHREAD) {
    setTimeout(function () {
      try {
        _0x51bf84("enumerateMediaDevices");
        _0x2d380f = function () {
          if (_0x46e395 !== null) {
            clearTimeout(_0x46e395);
          }
          _0x705650("enumerateMediaDevices");
          if (navigator.mediaDevices) {
            console.log("navigator.mediaDevices support available");
          }
          _0x2d380f = function () {};
        };
        _0x24ea87();
        _0x46e395 = setTimeout(_0x2d380f, 1000);
        navigator.mediaDevices.addEventListener("devicechange", _0x24ea87);
      } catch (_0x2b15f6) {
        console.warn("Unable to enumerate media devices: " + _0x2b15f6);
        _0x11ed3d();
      }
    }, 0);
  }
  function _0x58847d(_0x140506, _0x56401a, _0x3ff71a) {
    var _0x2b29ca = _0x535219(_0x56401a);
    var _0x13b7ed = _0x535219(_0x140506);
    var _0x5964ac = 0;
    try {
      if (_0x3ff71a === undefined) {
        _0x3cba6f(_0x13b7ed, _0x2b29ca);
      } else if (typeof _0x3ff71a === "string") {
        _0x5964ac = _0x535219(_0x3ff71a);
        _0x215262(_0x13b7ed, _0x2b29ca, _0x5964ac);
      } else if (typeof _0x3ff71a === "number") {
        _0x14a036(_0x13b7ed, _0x2b29ca, _0x3ff71a);
      } else {
        throw "" + _0x3ff71a + " is does not have a type which is supported by SendMessage.";
      }
    } finally {
      _0x4200b9(_0x5964ac);
      _0x4200b9(_0x13b7ed);
      _0x4200b9(_0x2b29ca);
    }
  }
  _0x3255d0.SendMessage = _0x58847d;
  var _0x13631b = {};
  var _0xd80eba;
  for (_0xd80eba in _0x3255d0) {
    if (_0x3255d0.hasOwnProperty(_0xd80eba)) {
      _0x13631b[_0xd80eba] = _0x3255d0[_0xd80eba];
    }
  }
  var _0x1415f0 = [];
  var _0x63ff32 = "./this.program";
  var _0x955c7f = function (_0x41b5f1, _0x1b9b4c) {
    throw _0x1b9b4c;
  };
  var _0x25aedf = false;
  var _0x1cba1f = false;
  var _0x226b31 = false;
  var _0x378877 = false;
  _0x25aedf = typeof window === "object";
  _0x1cba1f = typeof importScripts === "function";
  _0x226b31 = typeof process === "object" && typeof process.versions === "object" && typeof process.versions.node === "string";
  _0x378877 = !_0x25aedf && !_0x226b31 && !_0x1cba1f;
  var _0x2acd95 = "";
  function _0x344362(_0x36fa4c) {
    if (_0x3255d0.locateFile) {
      return _0x3255d0.locateFile(_0x36fa4c, _0x2acd95);
    }
    return _0x2acd95 + _0x36fa4c;
  }
  var _0x267651;
  var _0x5ec338;
  var _0x1f4e3c;
  var _0x2ed601;
  var _0x4f9131;
  var _0x5e1665;
  if (_0x226b31) {
    if (_0x1cba1f) {
      _0x2acd95 = require("path").dirname(_0x2acd95) + "/";
    } else {
      _0x2acd95 = __dirname + "/";
    }
    _0x267651 = function _0xeae57e(_0x582290, _0x214cc8) {
      if (!_0x4f9131) {
        _0x4f9131 = require("fs");
      }
      if (!_0x5e1665) {
        _0x5e1665 = require("path");
      }
      _0x582290 = _0x5e1665.normalize(_0x582290);
      return _0x4f9131.readFileSync(_0x582290, _0x214cc8 ? null : "utf8");
    };
    _0x1f4e3c = function _0x19a4b3(_0x2d4533) {
      var _0x5e0d43 = _0x267651(_0x2d4533, true);
      if (!_0x5e0d43.buffer) {
        _0x5e0d43 = new Uint8Array(_0x5e0d43);
      }
      _0x498a3a(_0x5e0d43.buffer);
      return _0x5e0d43;
    };
    if (process.argv.length > 1) {
      _0x63ff32 = process.argv[1].replace(/\\/g, "/");
    }
    _0x1415f0 = process.argv.slice(2);
    if (typeof module !== "undefined") {
      module.exports = _0x3255d0;
    }
    process.on("uncaughtException", function (_0x523d53) {
      if (!(_0x523d53 instanceof _0x1a0e88)) {
        throw _0x523d53;
      }
    });
    process.on("unhandledRejection", _0x3b38b3);
    _0x955c7f = function (_0xb0b720) {
      process.exit(_0xb0b720);
    };
    _0x3255d0.inspect = function () {
      return "[Emscripten Module object]";
    };
  } else if (_0x378877) {
    if (typeof read != "undefined") {
      _0x267651 = function _0x591c10(_0x4b73b8) {
        return read(_0x4b73b8);
      };
    }
    _0x1f4e3c = function _0x16b781(_0x774c0c) {
      var _0xab396;
      if (typeof readbuffer === "function") {
        return new Uint8Array(readbuffer(_0x774c0c));
      }
      _0xab396 = read(_0x774c0c, "binary");
      _0x498a3a(typeof _0xab396 === "object");
      return _0xab396;
    };
    if (typeof scriptArgs != "undefined") {
      _0x1415f0 = scriptArgs;
    } else if (typeof arguments != "undefined") {
      _0x1415f0 = arguments;
    }
    if (typeof quit === "function") {
      _0x955c7f = function (_0x34dce0) {
        quit(_0x34dce0);
      };
    }
    if (typeof print !== "undefined") {
      if (typeof console === "undefined") {
        console = {};
      }
      console.log = print;
      console.warn = console.error = typeof printErr !== "undefined" ? printErr : print;
    }
  } else if (_0x25aedf || _0x1cba1f) {
    if (_0x1cba1f) {
      _0x2acd95 = "https://gamea.azgame.io";
    } else if (typeof document !== "undefined" && document.currentScript) {
      _0x2acd95 = document.currentScript.src;
    }
    if (_0x2acd95.indexOf("blob:") !== 0) {
      _0x2acd95 = _0x2acd95.substr(0, _0x2acd95.lastIndexOf("/") + 1);
    } else {
      _0x2acd95 = "";
    }
    {
      _0x267651 = function (_0x3a2ddb) {
        var _0x185597 = new XMLHttpRequest();
        _0x185597.open("GET", _0x3a2ddb, false);
        _0x185597.send(null);
        return _0x185597.responseText;
      };
      if (_0x1cba1f) {
        _0x1f4e3c = function (_0x3df340) {
          var _0x5da388 = new XMLHttpRequest();
          _0x5da388.open("GET", _0x3df340, false);
          _0x5da388.responseType = "arraybuffer";
          _0x5da388.send(null);
          return new Uint8Array(_0x5da388.response);
        };
      }
      _0x5ec338 = function (_0x2a8c09, _0x57ed06, _0x5bbd68) {
        var _0x3b1702 = new XMLHttpRequest();
        _0x3b1702.open("GET", _0x2a8c09, true);
        _0x3b1702.responseType = "arraybuffer";
        _0x3b1702.onload = function () {
          if (_0x3b1702.status == 200 || _0x3b1702.status == 0 && _0x3b1702.response) {
            _0x57ed06(_0x3b1702.response);
            return;
          }
          _0x5bbd68();
        };
        _0x3b1702.onerror = _0x5bbd68;
        _0x3b1702.send(null);
      };
    }
    _0x2ed601 = function (_0x527ae4) {
      document.title = _0x527ae4;
    };
  } else {}
  var _0x55efa1 = _0x3255d0.print || console.log.bind(console);
  var _0x266425 = _0x3255d0.printErr || console.warn.bind(console);
  for (_0xd80eba in _0x13631b) {
    if (_0x13631b.hasOwnProperty(_0xd80eba)) {
      _0x3255d0[_0xd80eba] = _0x13631b[_0xd80eba];
    }
  }
  _0x13631b = null;
  if (_0x3255d0.arguments) {
    _0x1415f0 = _0x3255d0.arguments;
  }
  if (_0x3255d0.thisProgram) {
    _0x63ff32 = _0x3255d0.thisProgram;
  }
  if (_0x3255d0.quit) {
    _0x955c7f = _0x3255d0.quit;
  }
  var _0x27ff75 = 16;
  function _0x354d97(_0x4321a7, _0x15037b) {
    if (!_0x15037b) {
      _0x15037b = _0x27ff75;
    }
    return Math.ceil(_0x4321a7 / _0x15037b) * _0x15037b;
  }
  function _0x56028a(_0x8fa725) {
    if (!_0x56028a.shown) {
      _0x56028a.shown = {};
    }
    if (!_0x56028a.shown[_0x8fa725]) {
      _0x56028a.shown[_0x8fa725] = 1;
      _0x266425(_0x8fa725);
    }
  }
  var _0x45fd1e = 0;
  var _0x21abc3 = function (_0x2fbf8b) {
    _0x45fd1e = _0x2fbf8b;
  };
  var _0x3a9bb2 = function () {
    return _0x45fd1e;
  };
  var _0x41cd70;
  if (_0x3255d0.wasmBinary) {
    _0x41cd70 = _0x3255d0.wasmBinary;
  }
  var _0x9f65b8 = _0x3255d0.noExitRuntime || true;
  if (typeof WebAssembly !== "object") {
    _0x3b38b3("no native wasm support detected");
  }
  var _0xa12ba8;
  var _0x587c3e = false;
  var _0xeffd59;
  function _0x498a3a(_0x276736, _0x4a3a30) {
    if (!_0x276736) {
      _0x3b38b3("Assertion failed: " + _0x4a3a30);
    }
  }
  function _0x337716(_0x5e2873) {
    var _0x4708da = _0x3255d0["_" + _0x5e2873];
    _0x498a3a(_0x4708da, "Cannot call unknown function " + _0x5e2873 + ", make sure it is exported");
    return _0x4708da;
  }
  function _0x5742ec(_0x4c13b7, _0xe27ad0, _0x53a710, _0x5d53f0, _0x32c561) {
    var _0x39e253 = {
      string: function (_0x48f24b) {
        var _0x19c2c0 = 0;
        if (_0x48f24b !== null && _0x48f24b !== undefined && _0x48f24b !== 0) {
          var _0x32262a = (_0x48f24b.length << 2) + 1;
          _0x19c2c0 = _0xf2adf5(_0x32262a);
          _0x259c3d(_0x48f24b, _0x19c2c0, _0x32262a);
        }
        return _0x19c2c0;
      },
      array: function (_0x2e49f9) {
        var _0x23bf7f = _0xf2adf5(_0x2e49f9.length);
        _0x9eb690(_0x2e49f9, _0x23bf7f);
        return _0x23bf7f;
      }
    };
    function _0x47631f(_0x36a2ef) {
      if (_0xe27ad0 === "string") {
        return _0x5afdf8(_0x36a2ef);
      }
      if (_0xe27ad0 === "boolean") {
        return Boolean(_0x36a2ef);
      }
      return _0x36a2ef;
    }
    var _0x247ef5 = _0x337716(_0x4c13b7);
    var _0x295747 = [];
    var _0x522cbf = 0;
    if (_0x5d53f0) {
      for (var _0xfc1e75 = 0; _0xfc1e75 < _0x5d53f0.length; _0xfc1e75++) {
        var _0x349999 = _0x39e253[_0x53a710[_0xfc1e75]];
        if (_0x349999) {
          if (_0x522cbf === 0) {
            _0x522cbf = _0x1d6208();
          }
          _0x295747[_0xfc1e75] = _0x349999(_0x5d53f0[_0xfc1e75]);
        } else {
          _0x295747[_0xfc1e75] = _0x5d53f0[_0xfc1e75];
        }
      }
    }
    var _0x1f3189 = _0x247ef5.apply(null, _0x295747);
    _0x1f3189 = _0x47631f(_0x1f3189);
    if (_0x522cbf !== 0) {
      _0xe462e3(_0x522cbf);
    }
    return _0x1f3189;
  }
  function _0x11ba9d(_0x208fc0, _0x5b31f9, _0x18b63b, _0x5e39c8) {
    _0x18b63b = _0x18b63b || [];
    var _0x1830cc = _0x18b63b.every(function (_0x4f65ad) {
      return _0x4f65ad === "number";
    });
    var _0xde4e7d = _0x5b31f9 !== "string";
    if (_0xde4e7d && _0x1830cc && !_0x5e39c8) {
      return _0x337716(_0x208fc0);
    }
    return function () {
      return _0x5742ec(_0x208fc0, _0x5b31f9, _0x18b63b, arguments, _0x5e39c8);
    };
  }
  var _0x14aad4 = typeof TextDecoder !== "undefined" ? new TextDecoder("utf8") : undefined;
  function _0x3665c7(_0x161dc5, _0x2c891a, _0x57014b) {
    var _0xb7c2c5 = _0x2c891a + _0x57014b;
    var _0x2aa595 = _0x2c891a;
    while (_0x161dc5[_0x2aa595] && !(_0x2aa595 >= _0xb7c2c5)) {
      ++_0x2aa595;
    }
    if (_0x2aa595 - _0x2c891a > 16 && _0x161dc5.subarray && _0x14aad4) {
      return _0x14aad4.decode(_0x161dc5.subarray(_0x2c891a, _0x2aa595));
    } else {
      var _0x18c578 = "";
      while (_0x2c891a < _0x2aa595) {
        var _0x4e24c1 = _0x161dc5[_0x2c891a++];
        if (!(_0x4e24c1 & 128)) {
          _0x18c578 += String.fromCharCode(_0x4e24c1);
          continue;
        }
        var _0x22c557 = _0x161dc5[_0x2c891a++] & 63;
        if ((_0x4e24c1 & 224) == 192) {
          _0x18c578 += String.fromCharCode((_0x4e24c1 & 31) << 6 | _0x22c557);
          continue;
        }
        var _0x185883 = _0x161dc5[_0x2c891a++] & 63;
        if ((_0x4e24c1 & 240) == 224) {
          _0x4e24c1 = (_0x4e24c1 & 15) << 12 | _0x22c557 << 6 | _0x185883;
        } else {
          _0x4e24c1 = (_0x4e24c1 & 7) << 18 | _0x22c557 << 12 | _0x185883 << 6 | _0x161dc5[_0x2c891a++] & 63;
        }
        if (_0x4e24c1 < 65536) {
          _0x18c578 += String.fromCharCode(_0x4e24c1);
        } else {
          var _0x582b3c = _0x4e24c1 - 65536;
          _0x18c578 += String.fromCharCode(_0x582b3c >> 10 | 55296, _0x582b3c & 1023 | 56320);
        }
      }
    }
    return _0x18c578;
  }
  function _0x5afdf8(_0x5d0504, _0x2ec1a2) {
    if (_0x5d0504) {
      return _0x3665c7(_0x10abe1, _0x5d0504, _0x2ec1a2);
    } else {
      return "";
    }
  }
  function _0x333663(_0x12263a, _0x30fbc6, _0x525fd3, _0x166d7d) {
    if (!(_0x166d7d > 0)) {
      return 0;
    }
    var _0x5c70f6 = _0x525fd3;
    var _0x472228 = _0x525fd3 + _0x166d7d - 1;
    for (var _0xcfd9cb = 0; _0xcfd9cb < _0x12263a.length; ++_0xcfd9cb) {
      var _0x423e83 = _0x12263a.charCodeAt(_0xcfd9cb);
      if (_0x423e83 >= 55296 && _0x423e83 <= 57343) {
        var _0x454266 = _0x12263a.charCodeAt(++_0xcfd9cb);
        _0x423e83 = 65536 + ((_0x423e83 & 1023) << 10) | _0x454266 & 1023;
      }
      if (_0x423e83 <= 127) {
        if (_0x525fd3 >= _0x472228) {
          break;
        }
        _0x30fbc6[_0x525fd3++] = _0x423e83;
      } else if (_0x423e83 <= 2047) {
        if (_0x525fd3 + 1 >= _0x472228) {
          break;
        }
        _0x30fbc6[_0x525fd3++] = _0x423e83 >> 6 | 192;
        _0x30fbc6[_0x525fd3++] = _0x423e83 & 63 | 128;
      } else if (_0x423e83 <= 65535) {
        if (_0x525fd3 + 2 >= _0x472228) {
          break;
        }
        _0x30fbc6[_0x525fd3++] = _0x423e83 >> 12 | 224;
        _0x30fbc6[_0x525fd3++] = _0x423e83 >> 6 & 63 | 128;
        _0x30fbc6[_0x525fd3++] = _0x423e83 & 63 | 128;
      } else {
        if (_0x525fd3 + 3 >= _0x472228) {
          break;
        }
        _0x30fbc6[_0x525fd3++] = _0x423e83 >> 18 | 240;
        _0x30fbc6[_0x525fd3++] = _0x423e83 >> 12 & 63 | 128;
        _0x30fbc6[_0x525fd3++] = _0x423e83 >> 6 & 63 | 128;
        _0x30fbc6[_0x525fd3++] = _0x423e83 & 63 | 128;
      }
    }
    _0x30fbc6[_0x525fd3] = 0;
    return _0x525fd3 - _0x5c70f6;
  }
  function _0x259c3d(_0x1c54b7, _0x34bbb5, _0x5b4920) {
    return _0x333663(_0x1c54b7, _0x10abe1, _0x34bbb5, _0x5b4920);
  }
  function _0x40d569(_0x3ec144) {
    var _0x350093 = 0;
    for (var _0x176100 = 0; _0x176100 < _0x3ec144.length; ++_0x176100) {
      var _0x2cc652 = _0x3ec144.charCodeAt(_0x176100);
      if (_0x2cc652 >= 55296 && _0x2cc652 <= 57343) {
        _0x2cc652 = 65536 + ((_0x2cc652 & 1023) << 10) | _0x3ec144.charCodeAt(++_0x176100) & 1023;
      }
      if (_0x2cc652 <= 127) {
        ++_0x350093;
      } else if (_0x2cc652 <= 2047) {
        _0x350093 += 2;
      } else if (_0x2cc652 <= 65535) {
        _0x350093 += 3;
      } else {
        _0x350093 += 4;
      }
    }
    return _0x350093;
  }
  function _0x59097a(_0x1317b0) {
    var _0x38771f = _0x40d569(_0x1317b0) + 1;
    var _0x22a920 = _0x311afe(_0x38771f);
    if (_0x22a920) {
      _0x333663(_0x1317b0, _0x410af5, _0x22a920, _0x38771f);
    }
    return _0x22a920;
  }
  function _0x5842f7(_0x3861be) {
    var _0x5d3252 = _0x40d569(_0x3861be) + 1;
    var _0xbe44f4 = _0xf2adf5(_0x5d3252);
    _0x333663(_0x3861be, _0x410af5, _0xbe44f4, _0x5d3252);
    return _0xbe44f4;
  }
  function _0x9eb690(_0x4035c0, _0x274f90) {
    _0x410af5.set(_0x4035c0, _0x274f90);
  }
  function _0x3eb398(_0x4a365b, _0xf3060, _0x2c0d36) {
    for (var _0x1ecabc = 0; _0x1ecabc < _0x4a365b.length; ++_0x1ecabc) {
      _0x410af5[_0xf3060++ >> 0] = _0x4a365b.charCodeAt(_0x1ecabc);
    }
    if (!_0x2c0d36) {
      _0x410af5[_0xf3060 >> 0] = 0;
    }
  }
  function _0x2ca81c(_0x563009, _0x18fb83) {
    if (_0x563009 % _0x18fb83 > 0) {
      _0x563009 += _0x18fb83 - _0x563009 % _0x18fb83;
    }
    return _0x563009;
  }
  var _0x599285;
  var _0x410af5;
  var _0x10abe1;
  var _0x1f1f2c;
  var _0x286a74;
  var _0x3ea6c9;
  var _0x3e0b02;
  var _0x3787f7;
  var _0x21f13f;
  function _0x46b255(_0x219d28) {
    _0x599285 = _0x219d28;
    _0x3255d0.HEAP8 = _0x410af5 = new Int8Array(_0x219d28);
    _0x3255d0.HEAP16 = _0x1f1f2c = new Int16Array(_0x219d28);
    _0x3255d0.HEAP32 = _0x3ea6c9 = new Int32Array(_0x219d28);
    _0x3255d0.HEAPU8 = _0x10abe1 = new Uint8Array(_0x219d28);
    _0x3255d0.HEAPU16 = _0x286a74 = new Uint16Array(_0x219d28);
    _0x3255d0.HEAPU32 = _0x3e0b02 = new Uint32Array(_0x219d28);
    _0x3255d0.HEAPF32 = _0x3787f7 = new Float32Array(_0x219d28);
    _0x3255d0.HEAPF64 = _0x21f13f = new Float64Array(_0x219d28);
  }
  var _0x58258b = _0x3255d0.INITIAL_MEMORY || 33554432;
  var _0x20eb95;
  var _0x583b03 = [];
  var _0xf86f95 = [];
  var _0x178adc = [];
  var _0x42b207 = [];
  var _0x3c5544 = [];
  var _0x1ee631 = false;
  var _0x37b00a = false;
  function _0x178eb2() {
    if (_0x3255d0.preRun) {
      if (typeof _0x3255d0.preRun == "function") {
        _0x3255d0.preRun = [_0x3255d0.preRun];
      }
      while (_0x3255d0.preRun.length) {
        _0x3a5f74(_0x3255d0.preRun.shift());
      }
    }
    _0x58af14(_0x583b03);
  }
  function _0x4efb4d() {
    _0x1ee631 = true;
    if (!_0x3255d0.noFSInit && !_0x129e29.init.initialized) {
      _0x129e29.init();
    }
    _0x3213f1.init();
    _0x332817.root = _0x129e29.mount(_0x332817, {}, null);
    _0x3ab7b2.root = _0x129e29.mount(_0x3ab7b2, {}, null);
    _0x58af14(_0xf86f95);
  }
  function _0x482064() {
    _0x129e29.ignorePermissions = false;
    _0x58af14(_0x178adc);
  }
  function _0x31a011() {
    _0x37b00a = true;
  }
  function _0x2bc8e1() {
    if (_0x3255d0.postRun) {
      if (typeof _0x3255d0.postRun == "function") {
        _0x3255d0.postRun = [_0x3255d0.postRun];
      }
      while (_0x3255d0.postRun.length) {
        _0x448395(_0x3255d0.postRun.shift());
      }
    }
    _0x58af14(_0x3c5544);
  }
  function _0x3a5f74(_0x2e9b47) {
    _0x583b03.unshift(_0x2e9b47);
  }
  function _0xbd4b8(_0x5e71be) {
    _0xf86f95.unshift(_0x5e71be);
  }
  function _0x448395(_0x425d30) {
    _0x3c5544.unshift(_0x425d30);
  }
  var _0xd7279a = 0;
  var _0xd10eb6 = null;
  var _0x510af6 = null;
  function _0x2c5097(_0x3c9012) {
    return _0x3c9012;
  }
  function _0x51bf84(_0x5b81a2) {
    _0xd7279a++;
    if (_0x3255d0.monitorRunDependencies) {
      _0x3255d0.monitorRunDependencies(_0xd7279a);
    }
  }
  function _0x705650(_0x565cb9) {
    _0xd7279a--;
    if (_0x3255d0.monitorRunDependencies) {
      _0x3255d0.monitorRunDependencies(_0xd7279a);
    }
    if (_0xd7279a == 0) {
      if (_0xd10eb6 !== null) {
        clearInterval(_0xd10eb6);
        _0xd10eb6 = null;
      }
      if (_0x510af6) {
        var _0x536a5b = _0x510af6;
        _0x510af6 = null;
        _0x536a5b();
      }
    }
  }
  _0x3255d0.preloadedImages = {};
  _0x3255d0.preloadedAudios = {};
  function _0x3b38b3(_0x4e602a) {
    if (_0x3255d0.onAbort) {
      _0x3255d0.onAbort(_0x4e602a);
    }
    _0x4e602a += "";
    _0x266425(_0x4e602a);
    _0x587c3e = true;
    _0xeffd59 = 1;
    _0x4e602a = "abort(" + _0x4e602a + "). Build with -s ASSERTIONS=1 for more info.";
    var _0x524fd3 = new WebAssembly.RuntimeError(_0x4e602a);
    throw _0x524fd3;
  }
  var _0x47de37 = "data:application/octet-stream;base64,";
  function _0x31e4b6(_0x2df901) {
    return _0x2df901.startsWith(_0x47de37);
  }
  function _0x205bc1(_0xd6810e) {
    return _0xd6810e.startsWith("file://");
  }
  var _0x59eb3e = "build.wasm";
  if (!_0x31e4b6(_0x59eb3e)) {
    _0x59eb3e = _0x344362(_0x59eb3e);
  }
  function _0x595e4a(_0x1e57ce) {
    try {
      if (_0x1e57ce == _0x59eb3e && _0x41cd70) {
        return new Uint8Array(_0x41cd70);
      }
      if (_0x1f4e3c) {
        return _0x1f4e3c(_0x1e57ce);
      } else {
        throw "both async and sync fetching of the wasm failed";
      }
    } catch (_0x29a839) {
      _0x3b38b3(_0x29a839);
    }
  }
  function _0x4577af() {
    if (!_0x41cd70 && (_0x25aedf || _0x1cba1f)) {
      if (typeof fetch === "function" && !_0x205bc1(_0x59eb3e)) {
        return fetch(_0x59eb3e, {
          credentials: "same-origin"
        }).then(function (_0xc40fe2) {
          if (!_0xc40fe2.ok) {
            throw "failed to load wasm binary file at '" + _0x59eb3e + "'";
          }
          return _0xc40fe2.arrayBuffer();
        }).catch(function () {
          return _0x595e4a(_0x59eb3e);
        });
      } else if (_0x5ec338) {
        return new Promise(function (_0x1536c4, _0x1bfaba) {
          _0x5ec338(_0x59eb3e, function (_0x1ba30d) {
            _0x1536c4(new Uint8Array(_0x1ba30d));
          }, _0x1bfaba);
        });
      }
    }
    return Promise.resolve().then(function () {
      return _0x595e4a(_0x59eb3e);
    });
  }
  function _0x38222e() {
    var _0x174e0f = {
      a: _0xa0f47e
    };
    function _0x48ec61(_0x67ea6b, _0xa6c1ba) {
      var _0x2bd7ae = _0x67ea6b.exports;
      _0x3255d0.asm = _0x2bd7ae;
      _0xa12ba8 = _0x3255d0.asm.fk;
      _0x46b255(_0xa12ba8.buffer);
      _0x20eb95 = _0x3255d0.asm.Fk;
      _0xbd4b8(_0x3255d0.asm.gk);
      _0x705650("wasm-instantiate");
    }
    _0x51bf84("wasm-instantiate");
    function _0xb176b7(_0x3cf571) {
      _0x48ec61(_0x3cf571.instance);
    }
    function _0x3338e2(_0x181077) {
      return _0x4577af().then(function (_0xa74aad) {
        var _0x98e262 = WebAssembly.instantiate(_0xa74aad, _0x174e0f);
        return _0x98e262;
      }).then(_0x181077, function (_0x3122fa) {
        _0x266425("failed to asynchronously prepare wasm: " + _0x3122fa);
        _0x3b38b3(_0x3122fa);
      });
    }
    function _0x4e7519() {
      if (!_0x41cd70 && typeof WebAssembly.instantiateStreaming === "function" && !_0x31e4b6(_0x59eb3e) && !_0x205bc1(_0x59eb3e) && typeof fetch === "function") {
        return fetch(_0x59eb3e, {
          credentials: "same-origin"
        }).then(function (_0x3cef8d) {
          var _0x51e3d3 = WebAssembly.instantiateStreaming(_0x3cef8d, _0x174e0f);
          return _0x51e3d3.then(_0xb176b7, function (_0x4bb3c9) {
            _0x266425("wasm streaming compile failed: " + _0x4bb3c9);
            _0x266425("falling back to ArrayBuffer instantiation");
            return _0x3338e2(_0xb176b7);
          });
        });
      } else {
        return _0x3338e2(_0xb176b7);
      }
    }
    if (_0x3255d0.instantiateWasm) {
      try {
        var _0xca2a78 = _0x3255d0.instantiateWasm(_0x174e0f, _0x48ec61);
        return _0xca2a78;
      } catch (_0x469f82) {
        _0x266425("Module.instantiateWasm callback failed with error: " + _0x469f82);
        return false;
      }
    }
    _0x4e7519();
    return {};
  }
  var _0x4ff14d;
  var _0x1cea62;
  var _0x2fb6f0 = {
    5011512: function () {
      return _0x3255d0.webglContextAttributes.premultipliedAlpha;
    },
    5011573: function () {
      return _0x3255d0.webglContextAttributes.preserveDrawingBuffer;
    },
    5011637: function () {
      return _0x3255d0.webglContextAttributes.powerPreference;
    }
  };
  function _0x58af14(_0x459ad7) {
    while (_0x459ad7.length > 0) {
      var _0x43ba98 = _0x459ad7.shift();
      if (typeof _0x43ba98 == "function") {
        _0x43ba98(_0x3255d0);
        continue;
      }
      var _0x38dc43 = _0x43ba98.func;
      if (typeof _0x38dc43 === "number") {
        if (_0x43ba98.arg === undefined) {
          (function () {
            _0x1b3699.call(null, _0x38dc43);
          })();
        } else {
          (function (_0x430fda) {
            _0x3c98fd.apply(null, [_0x38dc43, _0x430fda]);
          })(_0x43ba98.arg);
        }
      } else {
        _0x38dc43(_0x43ba98.arg === undefined ? null : _0x43ba98.arg);
      }
    }
  }
  function _0x37ab35(_0x40ed9c) {
    return _0x40ed9c;
  }
  function _0x5b30b2(_0x18afd5) {
    var _0x342fb0 = /\b_Z[\w\d_]+/g;
    return _0x18afd5.replace(_0x342fb0, function (_0x898c1a) {
      var _0x489c79 = _0x37ab35(_0x898c1a);
      if (_0x898c1a === _0x489c79) {
        return _0x898c1a;
      } else {
        return _0x489c79 + " [" + _0x898c1a + "]";
      }
    });
  }
  function _0x2fd3dd(_0x59e018, _0x8b673a, _0x7e5316) {
    var _0xe70611 = _0x3255d0["dynCall_" + _0x59e018];
    if (_0x7e5316 && _0x7e5316.length) {
      return _0xe70611.apply(null, [_0x8b673a].concat(_0x7e5316));
    } else {
      return _0xe70611.call(null, _0x8b673a);
    }
  }
  function _0x322e2c(_0x221d0b, _0x311122, _0x10eafd) {
    return _0x2fd3dd(_0x221d0b, _0x311122, _0x10eafd);
  }
  function _0x66330() {
    var _0x2d4271 = new Error();
    if (!_0x2d4271.stack) {
      try {
        throw new Error();
      } catch (_0x438c3e) {
        _0x2d4271 = _0x438c3e;
      }
      if (!_0x2d4271.stack) {
        return "(no stack trace available)";
      }
    }
    return _0x2d4271.stack.toString();
  }
  var _0x350bea = 0;
  function _0x590943() {
    return _0x9f65b8 || _0x350bea > 0;
  }
  function _0x5e940f() {
    var _0x4f12c8 = _0x66330();
    if (_0x3255d0.extraStackTrace) {
      _0x4f12c8 += "\n" + _0x3255d0.extraStackTrace();
    }
    return _0x5b30b2(_0x4f12c8);
  }
  function _0x529c80(_0x43ce6d, _0x58e5d6, _0x3bee94, _0x2bde50, _0xc53978) {
    var _0x415a82 = _0x5afdf8(_0x43ce6d);
    var _0x23dfd6 = _0x5afdf8(_0x58e5d6);
    var _0x1b628d = _0x5afdf8(_0x3bee94);
    var _0x4d79de = _0x5afdf8(_0x2bde50);
    var _0x5c4f95 = _0x5afdf8(_0xc53978);
    try {
      firebase.firestore().collection(_0x415a82).add(JSON.parse(_0x23dfd6)).then(function (_0x4d6e1b) {
        window.unityInstance.SendMessage(_0x1b628d, _0x4d79de, "Success: document added in collection " + _0x415a82);
      }).catch(function (_0x4166ee) {
        window.unityInstance.SendMessage(_0x1b628d, _0x5c4f95, JSON.stringify(_0x4166ee, Object.getOwnPropertyNames(_0x4166ee)));
      });
    } catch (_0x54da01) {
      window.unityInstance.SendMessage(_0x1b628d, _0x5c4f95, JSON.stringify(_0x54da01, Object.getOwnPropertyNames(_0x54da01)));
    }
  }
  function _0x3c9530(_0x287f2d, _0x5b078a, _0x4ddcba, _0x494c77, _0x3120a5, _0x5ec62b, _0x1f3a20) {
    var _0x8dcc0d = _0x5afdf8(_0x287f2d);
    var _0x68136c = _0x5afdf8(_0x5b078a);
    var _0x56296c = _0x5afdf8(_0x4ddcba);
    var _0x4579f7 = _0x5afdf8(_0x494c77);
    var _0x430452 = _0x5afdf8(_0x3120a5);
    var _0x13d58e = _0x5afdf8(_0x5ec62b);
    var _0x2b3dd5 = _0x5afdf8(_0x1f3a20);
    try {
      var _0x494c77 = {};
      _0x494c77[_0x56296c] = firebase.firestore.FieldValue.arrayUnion(JSON.parse(_0x4579f7));
      firebase.firestore().collection(_0x8dcc0d).doc(_0x68136c).update(_0x494c77).then(function () {
        window.unityInstance.SendMessage(_0x430452, _0x13d58e, "Success: element " + _0x4579f7 + " was added in " + _0x56296c);
      }).catch(function (_0x23eb2b) {
        window.unityInstance.SendMessage(_0x430452, _0x2b3dd5, JSON.stringify(_0x23eb2b, Object.getOwnPropertyNames(_0x23eb2b)));
      });
    } catch (_0x389b04) {
      window.unityInstance.SendMessage(_0x430452, _0x2b3dd5, JSON.stringify(_0x389b04, Object.getOwnPropertyNames(_0x389b04)));
    }
  }
  function _0x17be92(_0x1eef33) {
    try {
      window.CrazyGames.SDK.user.addScore(_0x1eef33);
    } catch (_0x41b307) {
      window.UnitySDK.logError("Error while calling addScore:", _0x41b307);
    }
  }
  function _0x5afc0b(_0x397554, _0x111dba) {
    try {
      window.CrazyGames.SDK.analytics.trackOrder(window.unityStringify(_0x397554), JSON.parse(window.unityStringify(_0x111dba)));
    } catch (_0x109e10) {
      window.UnitySDK.logError("Error while calling trackOrder:", _0x109e10);
    }
  }
  function _0xcb12e5(_0xef7e93) {
    const _0x39862b = document.createElement("textarea");
    _0x39862b.value = window.unityStringify(_0xef7e93);
    document.body.appendChild(_0x39862b);
    _0x39862b.select();
    _0x39862b.setSelectionRange(0, 99999);
    document.execCommand("copy");
    document.body.removeChild(_0x39862b);
  }
  function _0x58c1a1(_0x220769, _0x3ea3af, _0x2591e4, _0x22d704, _0x518e8c) {
    var _0x29ff3d = _0x5afdf8(_0x220769);
    var _0x440ae7 = _0x5afdf8(_0x3ea3af);
    var _0x584219 = _0x5afdf8(_0x2591e4);
    var _0x1f10b6 = _0x5afdf8(_0x22d704);
    var _0x230dab = _0x5afdf8(_0x518e8c);
    try {
      firebase.auth().createUserWithEmailAndPassword(_0x29ff3d, _0x440ae7).then(function (_0x231292) {
        window.unityInstance.SendMessage(_0x584219, _0x1f10b6, "Success: signed up for " + _0x29ff3d);
      }).catch(function (_0x511424) {
        window.unityInstance.SendMessage(_0x584219, _0x230dab, JSON.stringify(_0x511424, Object.getOwnPropertyNames(_0x511424)));
      });
    } catch (_0x470469) {
      window.unityInstance.SendMessage(_0x584219, _0x230dab, JSON.stringify(_0x470469, Object.getOwnPropertyNames(_0x470469)));
    }
  }
  function _0x36bcaa() {
    try {
      window.CrazyGames.SDK.data.clear();
    } catch (_0x391ef4) {
      window.UnitySDK.logError("Error while calling clear:", _0x391ef4);
    }
  }
  function _0x51b0c4(_0x5ea076) {
    var _0x1945b2 = null;
    try {
      _0x1945b2 = window.CrazyGames.SDK.data.getItem(window.unityStringify(_0x5ea076));
    } catch (_0x1e5d9b) {
      window.UnitySDK.logError("Error while calling getItem:", _0x1e5d9b);
    }
    var _0x20a4ac = _0x40d569(_0x1945b2 + "") + 1;
    var _0x2d417d = _0x311afe(_0x20a4ac);
    _0x259c3d(_0x1945b2, _0x2d417d, _0x20a4ac);
    return _0x2d417d;
  }
  function _0x617c62(_0x4cf801) {
    var _0x2c5cbd = null;
    try {
      _0x2c5cbd = window.CrazyGames.SDK.data.getItem(window.unityStringify(_0x4cf801));
    } catch (_0x155a98) {
      window.UnitySDK.logError("Error while calling getItem:", _0x155a98);
    }
    return _0x2c5cbd !== null;
  }
  function _0x2c6285(_0x2de56f) {
    try {
      window.CrazyGames.SDK.data.removeItem(window.unityStringify(_0x2de56f));
    } catch (_0x532ac9) {
      window.UnitySDK.logError("Error while calling removeItem:", _0x532ac9);
    }
  }
  function _0x310d62(_0x2c0680, _0x7db00f) {
    try {
      window.CrazyGames.SDK.data.setItem(window.unityStringify(_0x2c0680), window.unityStringify(_0x7db00f));
    } catch (_0x205ea5) {
      window.UnitySDK.logError("Error while calling setItem:", _0x205ea5);
    }
  }
  function _0x43c988(_0x39289c, _0x5c0315, _0x334a98, _0x560195, _0x1ed1bd) {
    var _0x5f0382 = _0x5afdf8(_0x39289c);
    var _0x19f3cc = _0x5afdf8(_0x5c0315);
    var _0x557492 = _0x5afdf8(_0x334a98);
    var _0x1b6128 = _0x5afdf8(_0x560195);
    var _0x1386e3 = _0x5afdf8(_0x1ed1bd);
    try {
      firebase.firestore().collection(_0x5f0382).doc(_0x19f3cc).delete().then(function () {
        window.unityInstance.SendMessage(_0x557492, _0x1b6128, "Success: document " + _0x19f3cc + " was deleted");
      }).catch(function (_0x1b96f6) {
        window.unityInstance.SendMessage(_0x557492, _0x1386e3, JSON.stringify(_0x1b96f6, Object.getOwnPropertyNames(_0x1b96f6)));
      });
    } catch (_0x546168) {
      window.unityInstance.SendMessage(_0x557492, _0x1386e3, JSON.stringify(_0x546168, Object.getOwnPropertyNames(_0x546168)));
    }
  }
  function _0x11aa64(_0x1507ef, _0x10d4d5, _0xb1f1f1, _0x299bc2, _0xb9b988, _0x24ed29) {
    var _0x40f5f4 = _0x5afdf8(_0x1507ef);
    var _0x4f83a3 = _0x5afdf8(_0x10d4d5);
    var _0x263551 = _0x5afdf8(_0xb1f1f1);
    var _0x1b747d = _0x5afdf8(_0x299bc2);
    var _0x58b717 = _0x5afdf8(_0xb9b988);
    var _0x9a6e = _0x5afdf8(_0x24ed29);
    try {
      var _0x4c9624 = {};
      _0x4c9624[_0x263551] = firebase.firestore.FieldValue.delete();
      firebase.firestore().collection(_0x40f5f4).doc(_0x4f83a3).update(_0x4c9624).then(function () {
        window.unityInstance.SendMessage(_0x1b747d, _0x58b717, "Success: field " + _0x263551 + " was deleted");
      }).catch(function (_0x3c3b54) {
        window.unityInstance.SendMessage(_0x1b747d, _0x9a6e, JSON.stringify(_0x3c3b54, Object.getOwnPropertyNames(_0x3c3b54)));
      });
    } catch (_0x599171) {
      window.unityInstance.SendMessage(_0x1b747d, _0x9a6e, JSON.stringify(_0x599171, Object.getOwnPropertyNames(_0x599171)));
    }
  }
  function _0x4a606a(_0x3f6b98, _0xa92cf1, _0x55ed94, _0x4a9fd0) {
    var _0x2a36cf = _0x5afdf8(_0x3f6b98);
    var _0x5485c8 = _0x5afdf8(_0xa92cf1);
    var _0x556c2a = _0x5afdf8(_0x55ed94);
    var _0x4d0dab = _0x5afdf8(_0x4a9fd0);
    try {
      firebase.database().ref(_0x2a36cf).remove().then(function (_0x34aed2) {
        window.unityInstance.SendMessage(_0x5485c8, _0x556c2a, "Success: " + _0x2a36cf + " was deleted");
      });
    } catch (_0x268674) {
      window.unityInstance.SendMessage(_0x5485c8, _0x4d0dab, JSON.stringify(_0x268674, Object.getOwnPropertyNames(_0x268674)));
    }
  }
  function _0x583fb8(_0x4fafc2, _0x2bc32c, _0x15326c, _0x3bd54a) {
    var _0x1438d3 = _0x5afdf8(_0x4fafc2);
    var _0x108db4 = _0x5afdf8(_0x2bc32c);
    var _0x325872 = _0x5afdf8(_0x15326c);
    var _0x261939 = _0x5afdf8(_0x3bd54a);
    try {
      firebase.storage().ref(_0x1438d3).getDownloadURL().then(function (_0x250829) {
        var _0x485abe = new XMLHttpRequest();
        _0x485abe.responseType = "arraybuffer";
        _0x485abe.onload = function (_0x2339ee) {
          var _0x384b9c = _0x485abe.response;
          window.unityInstance.SendMessage(_0x108db4, _0x325872, _0x5c74f8(_0x384b9c));
        };
        _0x485abe.open("GET", _0x250829);
        _0x485abe.send();
      }).catch(function (_0x47635e) {
        window.unityInstance.SendMessage(_0x108db4, _0x261939, JSON.stringify(_0x47635e, Object.getOwnPropertyNames(_0x47635e)));
      });
    } catch (_0x2a73a8) {
      window.unityInstance.SendMessage(_0x108db4, _0x261939, JSON.stringify(_0x2a73a8, Object.getOwnPropertyNames(_0x2a73a8)));
    }
    function _0x5c74f8(_0x148230) {
      var _0x484080 = "";
      var _0x47d792 = new Uint8Array(_0x148230);
      var _0x3767be = _0x47d792.byteLength;
      for (var _0x4d7fb8 = 0; _0x4d7fb8 < _0x3767be; _0x4d7fb8++) {
        _0x484080 += String.fromCharCode(_0x47d792[_0x4d7fb8]);
      }
      return window.btoa(_0x484080);
    }
  }
  function _0x28484e() {
    try {
      window[preroll.config.loaderObjectName].log("WGSDK: Getting WeeGoo InGame Ad");
      window[preroll.config.loaderObjectName].refetchAd();
    } catch (_0x462a77) {
      console.log("No WeeGooAFG implementation found!");
    }
  }
  function _0x525405(_0x22e2ac) {
    var _0x10dccf = {
      adStarted: function () {
        _0x58847d("GMSDKAdvertisement", "JSLibCallback_AdStarted");
      },
      adFinished: function () {
        _0x58847d("GMSDKAdvertisement", "JSLibCallback_AdFinished");
      },
      adError: function (_0xe101ff) {
        _0x58847d("GMSDKAdvertisement", "JSLibCallback_AdError", JSON.stringify(_0xe101ff));
      }
    };
    var _0x293516 = window.GMSOFT_GMADS_INFO.reward;
    var _0xab96e0 = _0x293516[Math.floor(Math.random() * _0x293516.length)];
    try {
      var _0x12d803 = document.createElement("div");
      _0x12d803.id = "gm-ad-overlay";
      _0x12d803.style.cssText = "\n          position: fixed;\n          top: 0;\n          left: 0;\n          width: 100%;\n          height: 100%;\n          background: rgba(0, 0, 0, 0.9);\n          z-index: 9999;\n          display: flex;\n          justify-content: center;\n          align-items: center;\n          flex-direction: column;\n        ";
      var _0x583b68 = document.createElement("div");
      _0x583b68.style.cssText = "\n          position: relative;\n          max-width: 90%;\n          max-height: 80%;\n          background: #000;\n          border-radius: 8px;\n          overflow: hidden;\n        ";
      var _0x57f06c = document.createElement("video");
      _0x57f06c.src = _0xab96e0.image;
      _0x57f06c.style.cssText = "\n          width: 100%;\n          height: 100%;\n          display: block;\n        ";
      _0x57f06c.autoplay = true;
      _0x57f06c.muted = true;
      _0x57f06c.preload = "auto";
      var _0xcef18d = document.createElement("button");
      _0xcef18d.innerHTML = "Skip (5)";
      _0xcef18d.disabled = true;
      _0xcef18d.style.cssText = "\n          position: absolute;\n          top: 10px;\n          right: 10px;\n          background: rgba(0, 0, 0, 0.8);\n          color: white;\n          border: 1px solid #666;\n          border-radius: 6px;\n          padding: 10px 16px;\n          cursor: pointer;\n          font-size: 16px;\n          font-weight: bold;\n          z-index: 10001;\n          box-shadow: 0 2px 8px rgba(0,0,0,0.3);\n        ";
      _0xcef18d.disabled = true;
      _0xcef18d.style.opacity = "0.5";
      var _0x138291 = document.createElement("div");
      _0x138291.style.cssText = "\n          position: absolute;\n          bottom: 0;\n          left: 0;\n          width: 100%;\n          height: 6px;\n          background: rgba(255, 255, 255, 0.3);\n          z-index: 10001;\n        ";
      var _0x2b9e1a = document.createElement("div");
      _0x2b9e1a.style.cssText = "\n          height: 100%;\n          width: 0%;\n          background: linear-gradient(90deg, #ff6b6b, #4ecdc4);\n          transition: width 0.1s ease;\n        ";
      var _0x5e7982 = 5;
      var _0x27b306 = setInterval(function () {
        _0x5e7982--;
        if (_0x5e7982 > 0) {
          _0xcef18d.innerHTML = "Skip (" + _0x5e7982 + ")";
        } else {
          _0xcef18d.innerHTML = "Skip";
          _0xcef18d.disabled = false;
          _0xcef18d.style.opacity = "1";
          _0xcef18d.style.cursor = "pointer";
          clearInterval(_0x27b306);
        }
      }, 1000);
      function _0x2bd6ce() {
        if (_0x12d803 && _0x12d803.parentNode) {
          _0x12d803.parentNode.removeChild(_0x12d803);
        }
        clearInterval(_0x27b306);
        _0x10dccf.adFinished();
      }
      function _0x111cc2() {
        window.open(_0xab96e0.url, "_blank");
      }
      function _0x15f2dd() {
        if (_0x57f06c.duration && _0x57f06c.currentTime) {
          var _0x4316c9 = _0x57f06c.currentTime / _0x57f06c.duration * 100;
          _0x2b9e1a.style.width = _0x4316c9 + "%";
        }
      }
      _0x57f06c.addEventListener("loadstart", function () {
        _0x10dccf.adStarted();
      });
      _0x57f06c.addEventListener("timeupdate", function () {
        _0x15f2dd();
      });
      _0x57f06c.addEventListener("ended", function () {
        _0x2bd6ce();
      });
      _0x57f06c.addEventListener("error", function (_0x2f0e26) {
        var _0x3a3e9b = {
          message: "Video load error",
          code: _0x2f0e26.target.error ? _0x2f0e26.target.error.code : "unknown"
        };
        _0x10dccf.adError(_0x3a3e9b);
        _0x2bd6ce();
      });
      _0x57f06c.addEventListener("click", function () {
        _0x111cc2();
      });
      _0xcef18d.addEventListener("click", function () {
        if (!_0xcef18d.disabled) {
          _0x2bd6ce();
        }
      });
      _0x57f06c.addEventListener("contextmenu", function (_0x45a83e) {
        _0x45a83e.preventDefault();
      });
      _0x138291.appendChild(_0x2b9e1a);
      _0x583b68.appendChild(_0x57f06c);
      _0x583b68.appendChild(_0xcef18d);
      _0x583b68.appendChild(_0x138291);
      _0x12d803.appendChild(_0x583b68);
      document.body.appendChild(_0x12d803);
      _0x57f06c.play().catch(function (_0x4e61fa) {
        console.error("Video play error:", _0x4e61fa);
        _0x10dccf.adError({
          message: "Cannot play video",
          details: _0x4e61fa.message
        });
        _0x2bd6ce();
      });
    } catch (_0x855fd6) {
      console.error("Ad overlay creation error:", _0x855fd6);
      _0x10dccf.adError({
        message: "Failed to create ad overlay",
        details: _0x855fd6.message
      });
    }
  }
  function _0x3d4526() {
    try {
      console.log("Check local storage GM_SDK_GetVeryfiedSignature: ", window.GMSOFT_SIGNED);
      if (window.GMSOFT_SIGNED) {
        console.log("Local storage GM_SDK_GetVeryfiedSignature: ", window.GMSOFT_SIGNED);
        _0x58847d("GmSoft", "OnGetVeryfiedSignature", window.GMSOFT_SIGNED);
        return;
      }
    } catch (_0x57b770) {
      console.error("Error getting GM_SDK_GetVeryfiedSignature  ", _0x57b770);
    }
    try {
      let _0x40d29c = "hn=" + "https://gamea.azgame.io";
      let _0x1fef15 = btoa(_0x40d29c);
      let _0x5b2fa7 = "https://api.cdnwave.com/sdkdom/keysigned";
      if (window.GMSOFT_OPTIONS && window.GMSOFT_OPTIONS.signedurl) {
        _0x5b2fa7 = window.GMSOFT_OPTIONS.signedurl;
      }
      let _0x3908a5 = _0x5b2fa7 + "?params=" + _0x1fef15;
      var _0x471298 = new XMLHttpRequest();
      let _0x1d3958 = "";
      _0x471298.open("GET", _0x3908a5, false);
      _0x471298.send(_0x1d3958);
      let _0x5a6dc3 = _0x471298.responseText;
      window.GMSOFT_SIGNED = _0x5a6dc3;
      console.log("send request GM_SDK_GetVeryfiedSignature: ", window.GMSOFT_SIGNED);
      _0x58847d("GmSoft", "OnGetVeryfiedSignature", window.GMSOFT_SIGNED);
    } catch (_0x5bbe26) {
      console.error("Error fetching GM_SDK_GetVeryfiedSignature: ", _0x5bbe26);
    }
  }
  function _0x1ffc27() {
    let _0x20690b = "https://gamea.azgame.io";
    _0x58847d("GmSoft", "SetUnityHostName", _0x20690b);
    _0x58847d("GmSoft", "SetSDKType", window.GMSOFT_SDKTYPE);
  }
  function _0x1b39b8() {
    console.log("GM_SDK_StartGame");
    try {
      gmStartGame(function () {
        _0x58847d("GmSoft", "SetGameInfoParam", JSON.stringify(window.GMSOFT_GAME_INFO));
      });
    } catch (_0x2e1eb7) {
      console.error("Error JS 12", _0x2e1eb7);
    }
    try {
      gmStartAds(function () {
        _0x58847d("GmSoft", "SetAdParam", JSON.stringify(window.GMSOFT_ADS_INFO));
      });
    } catch (_0x347c9c) {
      console.error("Error JS 20", _0x347c9c);
    }
    try {
      document.addEventListener("gmsoftbanevent", _0x468159 => {
        _0x58847d("GmSoft", "LockGame", _0x468159.detail);
      });
    } catch (_0x316241) {
      console.error("Error JS 28", _0x316241);
    }
  }
  function _0x4e42af(_0x39b593) {
    try {
      window[preroll.config.loaderObjectName].log("WGSDK: Sending game event");
      window[preroll.config.loaderObjectName].GameEvent(_0x39b593);
    } catch (_0x108200) {
      console.log("No WeeGooAFG implementation found!");
    }
  }
  function _0x159b98() {
    try {
      window.CrazyGames.SDK.game.gameplayStart();
    } catch (_0x2c3c5a) {
      window.UnitySDK.logError("Error while calling gameplayStart:", _0x2c3c5a);
    }
  }
  function _0x2b8d34() {
    try {
      window.CrazyGames.SDK.game.gameplayStop();
    } catch (_0xf0bebe) {
      window.UnitySDK.logError("Error while calling gameplayStop:", _0xf0bebe);
    }
  }
  function _0x4b3738() {
    var _0x344118 = firebaseConfig.projectId;
    var _0xcba7c8 = _0x40d569(_0x344118) + 1;
    var _0x3d1125 = _0x311afe(_0xcba7c8);
    _0x259c3d(_0x344118, _0x3d1125, _0xcba7c8);
    return _0x3d1125;
  }
  function _0x34fc40(_0x24865c, _0xe02c19, _0x3388da, _0x22a231, _0x402edd) {
    var _0x23017f = _0x5afdf8(_0x24865c);
    var _0x341265 = _0x5afdf8(_0xe02c19);
    var _0x33b884 = _0x5afdf8(_0x3388da);
    var _0x34413d = _0x5afdf8(_0x22a231);
    var _0x22b8e9 = _0x5afdf8(_0x402edd);
    try {
      firebase.firestore().collection(_0x23017f).doc(_0x341265).get().then(function (_0x264793) {
        if (_0x264793.exists) {
          window.unityInstance.SendMessage(_0x33b884, _0x34413d, JSON.stringify(_0x264793.data()));
        } else {
          window.unityInstance.SendMessage(_0x33b884, _0x34413d, "null");
        }
      }).catch(function (_0x2d7d02) {
        window.unityInstance.SendMessage(_0x33b884, _0x22b8e9, JSON.stringify(_0x2d7d02, Object.getOwnPropertyNames(_0x2d7d02)));
      });
    } catch (_0x43871c) {
      window.unityInstance.SendMessage(_0x33b884, _0x22b8e9, JSON.stringify(_0x43871c, Object.getOwnPropertyNames(_0x43871c)));
    }
  }
  function _0x2ffe37(_0x2b83b0, _0xa720f7, _0x9a7084, _0x129e16) {
    var _0x199f56 = _0x5afdf8(_0x2b83b0);
    var _0x47f4ae = _0x5afdf8(_0xa720f7);
    var _0x15c12b = _0x5afdf8(_0x9a7084);
    var _0x44351b = _0x5afdf8(_0x129e16);
    try {
      firebase.firestore().collection(_0x199f56).get().then(function (_0x383fb3) {
        var _0x310475 = {};
        _0x383fb3.forEach(function (_0x53fa00) {
          _0x310475[_0x53fa00.id] = _0x53fa00.data();
        });
        window.unityInstance.SendMessage(_0x47f4ae, _0x15c12b, JSON.stringify(_0x310475));
      }).catch(function (_0x5f1be5) {
        window.unityInstance.SendMessage(_0x47f4ae, _0x44351b, JSON.stringify(_0x5f1be5, Object.getOwnPropertyNames(_0x5f1be5)));
      });
    } catch (_0x2e07f5) {
      window.unityInstance.SendMessage(_0x47f4ae, _0x44351b, JSON.stringify(_0x2e07f5, Object.getOwnPropertyNames(_0x2e07f5)));
    }
  }
  function _0x1677ba() {
    var _0x5bdbf9 = window.CrazyGames.SDK.environment;
    var _0x1ea61d = _0x40d569(_0x5bdbf9) + 1;
    var _0x2d4f73 = _0x311afe(_0x1ea61d);
    _0x259c3d(_0x5bdbf9, _0x2d4f73, _0x1ea61d);
    return _0x2d4f73;
  }
  function _0x576b5f() {
    var _0x54a793 = JSON.stringify(window.CrazyGames.SDK.game.settings);
    var _0x1907f3 = _0x40d569(_0x54a793) + 1;
    var _0x279a95 = _0x311afe(_0x1907f3);
    _0x259c3d(_0x54a793, _0x279a95, _0x1907f3);
    return _0x279a95;
  }
  function _0x363899(_0x1ac0b4) {
    var _0x6bce00 = new URLSearchParams(window.location.search);
    var _0x50bf98 = _0x6bce00.get(window.unityStringify(_0x1ac0b4));
    if (_0x50bf98 === null) {
      _0x50bf98 = "";
    }
    var _0x14c2cc = _0x40d569(_0x50bf98) + 1;
    var _0x348371 = _0x311afe(_0x14c2cc);
    _0x259c3d(_0x50bf98, _0x348371, _0x14c2cc);
    return _0x348371;
  }
  function _0x5980f9() {
    return window.CrazyGames.SDK.isQaTool;
  }
  function _0x4ce523(_0x4c24ac, _0x37528c, _0xa3950f, _0x56505c) {
    var _0x4ed45a = _0x5afdf8(_0x4c24ac);
    var _0x5b24b6 = _0x5afdf8(_0x37528c);
    var _0x57b7e0 = _0x5afdf8(_0xa3950f);
    var _0x3b3d97 = _0x5afdf8(_0x56505c);
    try {
      firebase.database().ref(_0x4ed45a).once("value").then(function (_0x28cc7d) {
        window.unityInstance.SendMessage(_0x5b24b6, _0x57b7e0, JSON.stringify(_0x28cc7d.val()));
      });
    } catch (_0x58fb3a) {
      window.unityInstance.SendMessage(_0x5b24b6, _0x3b3d97, JSON.stringify(_0x58fb3a, Object.getOwnPropertyNames(_0x58fb3a)));
    }
  }
  function _0x961a11() {
    var _0x126a70 = JSON.stringify(window.CrazyGames.SDK.user.systemInfo);
    var _0x22b9fb = _0x40d569(_0x126a70) + 1;
    var _0x11167a = _0x311afe(_0x22b9fb);
    _0x259c3d(_0x126a70, _0x11167a, _0x22b9fb);
    return _0x11167a;
  }
  function _0x558063() {
    window.CrazyGames.SDK.user.getUser().then(function (_0x3561c0) {
      _0x58847d("CrazySDKSingleton", "JSLibCallback_GetUser", JSON.stringify({
        userJson: JSON.stringify(_0x3561c0)
      }));
    }).catch(function (_0x1c8cbc) {
      _0x58847d("CrazySDKSingleton", "JSLibCallback_GetUser", JSON.stringify({
        errorJson: JSON.stringify(_0x1c8cbc)
      }));
    });
  }
  function _0x21146d() {
    window.CrazyGames.SDK.user.getUserToken().then(function (_0x370a4b) {
      _0x58847d("CrazySDKSingleton", "JSLibCallback_GetUserToken", JSON.stringify({
        token: _0x370a4b
      }));
    }).catch(function (_0x38fe4e) {
      _0x58847d("CrazySDKSingleton", "JSLibCallback_GetUserToken", JSON.stringify({
        errorJson: JSON.stringify(_0x38fe4e)
      }));
    });
  }
  function _0x56a7c9() {
    window.CrazyGames.SDK.user.getXsollaUserToken().then(function (_0x4912f8) {
      _0x58847d("CrazySDKSingleton", "JSLibCallback_GetXsollaUserToken", JSON.stringify({
        token: _0x4912f8
      }));
    }).catch(function (_0x495295) {
      _0x58847d("CrazySDKSingleton", "JSLibCallback_GetXsollaUserToken", JSON.stringify({
        errorJson: JSON.stringify(_0x495295)
      }));
    });
  }
  function _0x2dfb3f() {}
  function _0x72c0f6() {
    console.log("afg.ready: " + afg.ready);
    if (afg.ready) {
      _0x58847d("H5Adverisement", "PreloadRewardedVideoCallback", 1);
      afg.adBreak({
        type: "reward",
        name: "reward ads",
        beforeReward: function (_0x4f8cd2) {
          this._showRewardAdFn = _0x4f8cd2;
          console.log("[H5 Ads] before reward");
        }.bind(this),
        adViewed: function () {
          this._showRewardAdFn = null;
          _0x58847d("H5Adverisement", "RewardedVideoSuccessCallback");
          console.log("[H5 Ads] ad viewed");
        }.bind(this),
        adDismissed: function () {
          this._showRewardAdFn = null;
          _0x58847d("H5Adverisement", "RewardedVideoFailureCallback");
          console.log("[H5 Ads] ad failure");
        }.bind(this),
        adBreakDone: function (_0x546d49) {
          console.log("[H5 Ads] Reward break done");
          _0x58847d("H5Adverisement", "ResumeGameCallback");
        }.bind(this)
      });
    } else {
      console.log("[H5 Ads] no reward ads");
      _0x58847d("H5Adverisement", "PreloadRewardedVideoCallback", 0);
    }
  }
  function _0x5ae710() {
    if (afg.ready) {
      afg.adBreak({
        type: "next",
        name: "next",
        beforeAd: function () {
          afg.onBeforeAd();
          console.log("[H5 Ads] Before ad");
          _0x58847d("H5Adverisement", "PauseGameCallback");
        }.bind(this),
        adBreakDone: function () {
          console.log("[H5 Ads] Ad break done");
          _0x58847d("H5Adverisement", "ResumeGameCallback");
        }.bind(this)
      });
    } else {
      console.log("no " + adType + " ads");
      _0x58847d("H5Adverisement", "ResumeGameCallback");
    }
  }
  function _0x40e0ba() {
    if (this._showRewardAdFn) {
      _0x58847d("H5Adverisement", "PauseGameCallback");
      this._showRewardAdFn();
    } else {
      _0x58847d("H5Adverisement", "ResumeGameCallback");
    }
  }
  function _0x1d662e() {
    try {
      window.CrazyGames.SDK.game.happytime();
    } catch (_0x232814) {
      window.UnitySDK.logError("Error while calling happytime:", _0x232814);
    }
  }
  function _0x582e19() {
    try {
      window.CrazyGames.SDK.game.hideInviteButton();
    } catch (_0x18f041) {
      window.UnitySDK.logError("Error while calling hideInviteButton:", _0x18f041);
    }
  }
  function _0x2eaf5(_0x2e1bf0, _0x5e1c45, _0x1b45ff, _0x2294d8, _0x110846, _0x15e56f, _0x292ca5) {
    var _0x34f516 = _0x5afdf8(_0x2e1bf0);
    var _0x5ac281 = _0x5afdf8(_0x5e1c45);
    var _0x489556 = _0x5afdf8(_0x1b45ff);
    var _0x17c7ce = _0x5afdf8(_0x110846);
    var _0x3d2ac0 = _0x5afdf8(_0x15e56f);
    var _0x33bd43 = _0x5afdf8(_0x292ca5);
    try {
      var _0x303473 = {};
      _0x303473[_0x489556] = firebase.firestore.FieldValue.increment(_0x2294d8);
      firebase.firestore().collection(_0x34f516).doc(_0x5ac281).update(_0x303473).then(function () {
        window.unityInstance.SendMessage(_0x17c7ce, _0x3d2ac0, "Success: incremented " + _0x489556 + " by " + _0x2294d8);
      }).catch(function (_0x351bee) {
        window.unityInstance.SendMessage(_0x17c7ce, _0x33bd43, JSON.stringify(_0x351bee, Object.getOwnPropertyNames(_0x351bee)));
      });
    } catch (_0x371548) {
      window.unityInstance.SendMessage(_0x17c7ce, _0x33bd43, JSON.stringify(_0x371548, Object.getOwnPropertyNames(_0x371548)));
    }
  }
  function _0x56b01a(_0x33f456) {
    if (typeof _0x5afdf8 !== "undefined") {
      window.unityStringify = _0x5afdf8;
    } else {
      window.unityStringify = _0x5afdf8;
    }
    window.UnitySDK = {
      version: window.unityStringify(_0x33f456),
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
        var _0x2be15a = Array.prototype.slice.call(arguments);
        _0x2be15a.unshift("[JsLib]");
        console.error.apply(console, _0x2be15a);
      }
    };
    var _0x1a9a22 = {
      wrapper: {
        engine: "unity",
        sdkVersion: window.unityStringify(_0x33f456)
      }
    };
    var _0x5b2b16 = document.createElement("script");
    _0x5b2b16.src = "https://sdk.crazygames.com/crazygames-sdk-v3.js";
    document.head.appendChild(_0x5b2b16);
    _0x5b2b16.addEventListener("load", function () {
      window.CrazyGames.SDK.init(_0x1a9a22).then(function () {
        _0x58847d("CrazySDKSingleton", "JSLibCallback_Init");
        window.CrazyGames.SDK.ad.hasAdblock().then(function (_0x275ec8) {
          _0x58847d("CrazySDKSingleton", "JSLibCallback_AdblockDetectionResult", _0x275ec8 ? 1 : 0);
        }).catch(function (_0x435141) {
          window.UnitySDK.logError("Error while checking adblock:", _0x435141);
          _0x58847d("CrazySDKSingleton", "JSLibCallback_AdblockDetectionResult", 0);
        });
        window.CrazyGames.SDK.user.addAuthListener(function (_0x49b608) {
          _0x58847d("CrazySDKSingleton", "JSLibCallback_AuthListener", JSON.stringify({
            userJson: JSON.stringify(_0x49b608)
          }));
        });
      });
    });
  }
  function _0x504851() {
    return window.CrazyGames.SDK.user.isUserAccountAvailable;
  }
  var _0x3342e5 = null;
  var _0x5b68aa = 0;
  function _0x22f023() {
    return _0x3342e5 && _0x3342e5.activated || _0x5b68aa != 0;
  }
  var _0x2a6bd3 = 1;
  var _0x1e1fc3 = {
    x: 0,
    y: 0,
    z: 0
  };
  function _0x50592e() {
    _0x1e1fc3 = {
      x: _0x3342e5.x * _0x2a6bd3,
      y: _0x3342e5.y * _0x2a6bd3,
      z: _0x3342e5.z * _0x2a6bd3
    };
    if (_0x5b68aa != 0) {
      _0x31187d(_0x5b68aa, _0x1e1fc3.x, _0x1e1fc3.y, _0x1e1fc3.z);
    }
  }
  var _0x5b91ef = 0;
  var _0x21a9b0 = 0;
  var _0x5100be = 0;
  var _0x4ce277 = 0;
  var _0x28ead5 = 0;
  function _0x5226aa(_0x3fe75a, _0x276283) {
    var _0x378864 = {
      x: _0x3fe75a.x - _0x276283.x,
      y: _0x3fe75a.y - _0x276283.y,
      z: _0x3fe75a.z - _0x276283.z
    };
    var _0x5dcc85 = _0x378864.x * _0x378864.x + _0x378864.y * _0x378864.y + _0x378864.z * _0x378864.z;
    var _0x1f4984 = {
      x: _0x3fe75a.x + _0x276283.x,
      y: _0x3fe75a.y + _0x276283.y,
      z: _0x3fe75a.z + _0x276283.z
    };
    var _0x5b2bd9 = _0x1f4984.x * _0x1f4984.x + _0x1f4984.y * _0x1f4984.y + _0x1f4984.z * _0x1f4984.z;
    if (_0x5dcc85 <= _0x5b2bd9) {
      return _0x378864;
    } else {
      return _0x1f4984;
    }
  }
  function _0x29fab4(_0x33b54d) {
    var _0x169486 = {
      x: _0x33b54d.accelerationIncludingGravity.x * _0x2a6bd3,
      y: _0x33b54d.accelerationIncludingGravity.y * _0x2a6bd3,
      z: _0x33b54d.accelerationIncludingGravity.z * _0x2a6bd3
    };
    if (_0x5b68aa != 0) {
      _0x31187d(_0x5b68aa, _0x169486.x, _0x169486.y, _0x169486.z);
    }
    var _0x4d99e0 = {
      x: _0x33b54d.acceleration.x * _0x2a6bd3,
      y: _0x33b54d.acceleration.y * _0x2a6bd3,
      z: _0x33b54d.acceleration.z * _0x2a6bd3
    };
    if (_0x5100be != 0) {
      _0x31187d(_0x5100be, _0x4d99e0.x, _0x4d99e0.y, _0x4d99e0.z);
    }
    if (_0x4ce277 != 0) {
      var _0xed751e = _0x5226aa(_0x169486, _0x4d99e0);
      _0x31187d(_0x4ce277, _0xed751e.x, _0xed751e.y, _0xed751e.z);
    }
    if (_0x28ead5 != 0) {
      var _0xff5bc1 = Math.PI / 180;
      _0x31187d(_0x28ead5, _0x33b54d.rotationRate.alpha * _0xff5bc1, _0x33b54d.rotationRate.beta * _0xff5bc1, _0x33b54d.rotationRate.gamma * _0xff5bc1);
    }
  }
  var _0x3e2de3 = 0;
  function _0x43191c(_0xf14b64) {
    if (_0xf14b64 & 1) {
      if (typeof DeviceOrientationEvent.requestPermission === "function") {
        DeviceOrientationEvent.requestPermission().then(function (_0x41592b) {
          if (_0x41592b === "granted") {
            _0x3e2de3 &= ~1;
          } else {
            _0x56028a("DeviceOrientationEvent permission not granted");
          }
        }).catch(function (_0x3d4316) {
          _0x56028a(_0x3d4316);
          _0x3e2de3 |= 1;
        });
      }
    }
    if (_0xf14b64 & 2) {
      if (typeof DeviceMotionEvent.requestPermission === "function") {
        DeviceMotionEvent.requestPermission().then(function (_0x17e9f5) {
          if (_0x17e9f5 === "granted") {
            _0x3e2de3 &= ~2;
          } else {
            _0x56028a("DeviceMotionEvent permission not granted");
          }
        }).catch(function (_0x137bde) {
          _0x56028a(_0x137bde);
          _0x3e2de3 |= 2;
        });
      }
    }
  }
  function _0x5c1b8a() {
    if (_0x5b68aa == 0 && _0x5100be == 0 && _0x4ce277 == 0 && _0x28ead5 == 0) {
      _0x43191c(2);
      window.addEventListener("devicemotion", _0x29fab4);
    }
  }
  function _0x4b6be9() {
    var _0x3a6382 = 9.80665;
    _0x2a6bd3 = /(iPhone|iPad|Macintosh)/i.test(navigator.userAgent) ? 1 / _0x3a6382 : -1 / _0x3a6382;
  }
  function _0x517d69(_0x3cd11f, _0x30b04a) {
    _0x4b6be9();
    if (typeof Accelerometer === "undefined") {
      _0x5c1b8a();
      if (_0x3cd11f != 0) {
        _0x5b68aa = _0x3cd11f;
      }
      return;
    }
    if (_0x3cd11f != 0) {
      _0x5b68aa = _0x3cd11f;
    }
    function _0x12f56c(_0x3f07a4) {
      _0x3342e5 = new Accelerometer({
        frequency: _0x3f07a4,
        referenceFrame: "device"
      });
      _0x3342e5.addEventListener("reading", _0x50592e);
      _0x3342e5.addEventListener("error", function (_0x1b79fb) {
        _0x56028a(_0x1b79fb.error ? _0x1b79fb.error : _0x1b79fb);
      });
      _0x3342e5.start();
      _0x21a9b0 = _0x3f07a4;
    }
    if (_0x3342e5) {
      if (_0x21a9b0 != _0x30b04a) {
        _0x3342e5.stop();
        _0x3342e5.removeEventListener("reading", _0x50592e);
        _0x12f56c(_0x30b04a);
      }
    } else if (_0x5b91ef != 0) {
      _0x5b91ef = _0x30b04a;
    } else {
      _0x5b91ef = _0x30b04a;
      navigator.permissions.query({
        name: "accelerometer"
      }).then(function (_0xe1358d) {
        if (_0xe1358d.state === "granted") {
          _0x12f56c(_0x5b91ef);
        } else {
          _0x56028a("No permission to use Accelerometer.");
        }
        _0x5b91ef = 0;
      });
    }
  }
  function _0x52afae() {
    if (_0x5b68aa == 0 && _0x5100be == 0 && _0x4ce277 == 0 && _0x28ead5 == 0) {
      window.removeEventListener("devicemotion", _0x41f7cd);
    }
  }
  function _0x332c5c() {
    if (_0x3342e5) {
      if (typeof GravitySensor !== "undefined" || _0x4ce277 == 0) {
        _0x3342e5.stop();
        _0x3342e5.removeEventListener("reading", _0x50592e);
        _0x3342e5 = null;
      }
      _0x5b68aa = 0;
      _0x21a9b0 = 0;
    } else if (_0x5b68aa != 0) {
      _0x5b68aa = 0;
      _0x52afae();
    }
  }
  function _0x431713(_0x3e87fc, _0x25c8ba) {
    var _0x11fbd3 = "";
    for (var _0x504524 = 0; _0x504524 < _0x25c8ba; _0x504524++) {
      _0x11fbd3 += String.fromCharCode(_0x10abe1[_0x3e87fc + _0x504524]);
    }
    _0x3255d0.canvas.style.cursor = "url(data:image/cur;base64," + btoa(_0x11fbd3) + "),default";
  }
  function _0x3a663a(_0x119cc8) {
    _0x3255d0.canvas.style.cursor = _0x119cc8 ? "default" : "none";
  }
  function _0x44806c(_0x13c617) {
    if (typeof window.CSS !== "undefined" && typeof window.CSS.escape !== "undefined") {
      return window.CSS.escape(_0x13c617);
    }
    return _0x13c617.replace(/(#|\.|\+|\[|\]|\(|\)|\{|\})/g, "\\$1");
  }
  function _0x182527() {
    var _0x8f5df6 = _0x3255d0.canvas ? _0x3255d0.canvas.id : "unity-canvas";
    return "#" + _0x44806c(_0x8f5df6);
  }
  function _0x1c95eb(_0x1238b2, _0x189068, _0x2a3d7f, _0x360737) {
    var _0x490a9d = document.querySelector(_0x182527());
    var _0x34ed7c = _0x490a9d && _0x490a9d.getBoundingClientRect();
    _0x3e0b02[_0x2a3d7f >> 2] = _0x1238b2 - (_0x34ed7c ? _0x34ed7c.left : 0);
    _0x3e0b02[_0x360737 >> 2] = _0x189068 - (_0x34ed7c ? _0x34ed7c.top : 0);
  }
  function _0x535219(_0x103ec3) {
    var _0x407f51 = _0x40d569(_0x103ec3) + 1;
    var _0x3b6dd7 = _0x311afe(_0x407f51);
    _0x259c3d(_0x103ec3, _0x3b6dd7, _0x407f51);
    return _0x3b6dd7;
  }
  function _0x134073() {
    var _0x2aa94b = _0x182527();
    if (_0x134073.selector != _0x2aa94b) {
      _0x4200b9(_0x134073.ptr);
      _0x134073.ptr = _0x535219(_0x2aa94b);
      _0x134073.selector = _0x2aa94b;
    }
    return _0x134073.ptr;
  }
  function _0x49caa8(_0x226a52) {
    var _0x1f8149 = _0x5afdf8(_0x226a52);
    try {
      eval(_0x1f8149);
    } catch (_0x1481cb) {
      console.error(_0x1481cb);
    }
  }
  function _0xe6cebc(_0x38fc0a) {
    var _0x264965 = _0x5afdf8(_0x38fc0a);
    window.open(_0x264965, "_blank", "");
  }
  var _0x53db65 = {
    numPendingSync: 0,
    syncInternal: 1000,
    syncInProgress: false,
    sync: function (_0x57d811) {
      if (_0x57d811) {
        if (_0x53db65.numPendingSync == 0) {
          return;
        }
      } else if (_0x53db65.syncInProgress) {
        _0x53db65.numPendingSync++;
        return;
      }
      _0x53db65.syncInProgress = true;
      _0x129e29.syncfs(false, function (_0x5e3afe) {
        _0x53db65.syncInProgress = false;
      });
      _0x53db65.numPendingSync = 0;
    }
  };
  function _0x499ae2() {
    _0x3255d0.setInterval(function () {
      _0x53db65.sync(true);
    }, _0x53db65.syncInternal);
  }
  function _0x4d3ab8() {
    _0x53db65.sync(false);
  }
  var _0x538f6a = null;
  function _0x91f564() {
    if (typeof GravitySensor !== "undefined") {
      return _0x538f6a && _0x538f6a.activated;
    } else {
      return _0x4ce277 != 0;
    }
  }
  function _0x5b3458() {
    if (_0x4ce277 != 0) {
      _0x31187d(_0x4ce277, _0x538f6a.x * _0x2a6bd3, _0x538f6a.y * _0x2a6bd3, _0x538f6a.z * _0x2a6bd3);
    }
  }
  var _0xf8a78e = 0;
  var _0x3ac82e = null;
  function _0xfd6068() {
    var _0x2cce26 = {
      x: _0x3ac82e.x * _0x2a6bd3,
      y: _0x3ac82e.y * _0x2a6bd3,
      z: _0x3ac82e.z * _0x2a6bd3
    };
    if (_0x5100be != 0) {
      _0x31187d(_0x5100be, _0x2cce26.x, _0x2cce26.y, _0x2cce26.z);
    }
    if (_0x4ce277 != 0 && typeof GravitySensor === "undefined") {
      var _0x224d88 = _0x5226aa(_0x1e1fc3, _0x2cce26);
      _0x31187d(_0x4ce277, _0x224d88.x, _0x224d88.y, _0x224d88.z);
    }
  }
  var _0x322e42 = 0;
  var _0xcfa641 = 0;
  function _0xbb61b2(_0x230089, _0x1d43f6) {
    _0x4b6be9();
    if (typeof LinearAccelerationSensor === "undefined") {
      _0x5c1b8a();
      if (_0x230089 != 0) {
        _0x5100be = _0x230089;
      }
      return;
    }
    if (_0x230089 != 0) {
      _0x5100be = _0x230089;
    }
    function _0xa1f9a(_0x5d4232) {
      _0x3ac82e = new LinearAccelerationSensor({
        frequency: _0x5d4232,
        referenceFrame: "device"
      });
      _0x3ac82e.addEventListener("reading", _0xfd6068);
      _0x3ac82e.addEventListener("error", function (_0x294617) {
        _0x56028a(_0x294617.error ? _0x294617.error : _0x294617);
      });
      _0x3ac82e.start();
      _0xcfa641 = _0x5d4232;
    }
    if (_0x3ac82e) {
      if (_0xcfa641 != _0x1d43f6) {
        _0x3ac82e.stop();
        _0x3ac82e.removeEventListener("reading", _0xfd6068);
        _0xa1f9a(_0x1d43f6);
      }
    } else if (_0x322e42 != 0) {
      _0x322e42 = _0x1d43f6;
    } else {
      _0x322e42 = _0x1d43f6;
      navigator.permissions.query({
        name: "accelerometer"
      }).then(function (_0xbdbbfb) {
        if (_0xbdbbfb.state === "granted") {
          _0xa1f9a(_0x322e42);
        } else {
          _0x56028a("No permission to use LinearAccelerationSensor.");
        }
        _0x322e42 = 0;
      });
    }
  }
  function _0x3e0233(_0x365f79, _0x58374a) {
    if (typeof GravitySensor === "undefined") {
      _0x517d69(0, Math.max(_0x58374a, _0x21a9b0));
      _0xbb61b2(0, Math.max(_0x58374a, _0xcfa641));
      _0x4ce277 = _0x365f79;
      return;
    }
    _0x4b6be9();
    _0x4ce277 = _0x365f79;
    function _0x5ed116(_0x15d136) {
      _0x538f6a = new GravitySensor({
        frequency: _0x15d136,
        referenceFrame: "device"
      });
      _0x538f6a.addEventListener("reading", _0x5b3458);
      _0x538f6a.addEventListener("error", function (_0x1c7445) {
        _0x56028a(_0x1c7445.error ? _0x1c7445.error : _0x1c7445);
      });
      _0x538f6a.start();
    }
    if (_0x538f6a) {
      _0x538f6a.stop();
      _0x538f6a.removeEventListener("reading", _0x5b3458);
      _0x5ed116(_0x58374a);
    } else if (_0xf8a78e != 0) {
      _0xf8a78e = _0x58374a;
    } else {
      _0xf8a78e = _0x58374a;
      navigator.permissions.query({
        name: "accelerometer"
      }).then(function (_0x5e17b7) {
        if (_0x5e17b7.state === "granted") {
          _0x5ed116(_0xf8a78e);
        } else {
          _0x56028a("No permission to use GravitySensor.");
        }
        _0xf8a78e = 0;
      });
    }
  }
  function _0x59bdb3() {
    if (_0x3ac82e) {
      if (typeof GravitySensor !== "undefined" || _0x4ce277 == 0) {
        _0x3ac82e.stop();
        _0x3ac82e.removeEventListener("reading", _0xfd6068);
        _0x3ac82e = null;
      }
      _0x5100be = 0;
      _0xcfa641 = 0;
    } else if (_0x5100be != 0) {
      _0x5100be = 0;
      _0x52afae();
    }
  }
  function _0x504a3a() {
    _0x4ce277 = 0;
    if (typeof GravitySensor === "undefined") {
      if (_0x5b68aa == 0) {
        _0x332c5c();
      }
      if (_0x5100be == 0) {
        _0x59bdb3();
      }
      return;
    }
    if (_0x538f6a) {
      _0x538f6a.stop();
      _0x538f6a.removeEventListener("reading", _0x5b3458);
      _0x538f6a = null;
    }
  }
  function _0x1afd33(_0x2035dc) {
    try {
      (function () {
        _0x1b3699.call(null, _0x2035dc);
      })();
    } catch (_0x5b42a9) {
      console.warn(_0x5b42a9);
    }
  }
  var _0x11fa02 = null;
  function _0x25f917() {
    return _0x11fa02 && _0x11fa02.activated || _0x28ead5 != 0;
  }
  function _0x43203b() {
    if (_0x28ead5 != 0) {
      _0x31187d(_0x28ead5, _0x11fa02.x, _0x11fa02.y, _0x11fa02.z);
    }
  }
  var _0x3eec50 = 0;
  function _0x3e5d31(_0x459ef3, _0x58b982) {
    if (typeof Gyroscope === "undefined") {
      _0x5c1b8a();
      _0x28ead5 = _0x459ef3;
      return;
    }
    _0x28ead5 = _0x459ef3;
    function _0x299ca2(_0x524213) {
      _0x11fa02 = new Gyroscope({
        frequency: _0x524213,
        referenceFrame: "device"
      });
      _0x11fa02.addEventListener("reading", _0x43203b);
      _0x11fa02.addEventListener("error", function (_0x40e21e) {
        _0x56028a(_0x40e21e.error ? _0x40e21e.error : _0x40e21e);
      });
      _0x11fa02.start();
    }
    if (_0x11fa02) {
      _0x11fa02.stop();
      _0x11fa02.removeEventListener("reading", _0x43203b);
      _0x299ca2(_0x58b982);
    } else if (_0x3eec50 != 0) {
      _0x3eec50 = _0x58b982;
    } else {
      _0x3eec50 = _0x58b982;
      navigator.permissions.query({
        name: "gyroscope"
      }).then(function (_0x49a649) {
        if (_0x49a649.state === "granted") {
          _0x299ca2(_0x3eec50);
        } else {
          _0x56028a("No permission to use Gyroscope.");
        }
        _0x3eec50 = 0;
      });
    }
  }
  function _0x381298() {
    if (_0x11fa02) {
      _0x11fa02.stop();
      _0x11fa02.removeEventListener("reading", _0x43203b);
      _0x11fa02 = null;
      _0x28ead5 = 0;
    } else if (_0x28ead5 != 0) {
      _0x28ead5 = 0;
      _0x52afae();
    }
  }
  function _0x475346() {
    const _0x29bc93 = function (_0x24e7d9) {
      if (_0x24e7d9.target.localName !== "canvas") {
        _0x41af77();
      }
    };
    document.addEventListener("contextmenu", _0x29bc93);
    _0x3255d0.deinitializers.push(function () {
      document.removeEventListener("contextmenu", _0x29bc93);
    });
  }
  function _0x2da6ed() {
    return _0x3ac82e && _0x3ac82e.activated || _0x5100be != 0;
  }
  function _0x25fb41(_0x47f926, _0x1e173d) {
    var _0x2d931e = _0x5afdf8(_0x47f926);
    if (typeof dump == "function") {
      dump(_0x2d931e);
    }
    switch (_0x1e173d) {
      case 0:
      case 1:
      case 4:
        console.error(_0x2d931e);
        return;
      case 2:
        console.warn(_0x2d931e);
        return;
      case 3:
      case 5:
        console.log(_0x2d931e);
        return;
      default:
        console.error("Unknown console message type!");
        console.error(_0x2d931e);
    }
  }
  function _0x4cce3a(_0x22ae5f, _0x1e3aa6) {
    var _0x1e23cd = _0x5e940f();
    if (_0x22ae5f) {
      _0x259c3d(_0x1e23cd, _0x22ae5f, _0x1e3aa6);
    }
    return _0x40d569(_0x1e23cd);
  }
  var _0x15d38d = null;
  var _0x2417ac = 0;
  function _0x47c9be() {
    return _0x15d38d && _0x15d38d.activated || _0x2417ac != 0;
  }
  function _0x30d5e4() {
    if (_0x2417ac != 0) {
      _0xa9bb0a(_0x2417ac, _0x15d38d.quaternion[0], _0x15d38d.quaternion[1], _0x15d38d.quaternion[2], _0x15d38d.quaternion[3]);
    }
  }
  var _0x59be7b = 0;
  function _0x41f7cd(_0x51376e) {
    if (_0x2417ac) {
      var _0xaebe09 = Math.PI / 180;
      var _0xd60764 = _0x51376e.beta * _0xaebe09;
      var _0x22b7c2 = _0x51376e.gamma * _0xaebe09;
      var _0x36c6d2 = _0x51376e.alpha * _0xaebe09;
      var _0x119e2b = Math.cos(_0xd60764 / 2);
      var _0x3fae36 = Math.sin(_0xd60764 / 2);
      var _0x309057 = Math.cos(_0x22b7c2 / 2);
      var _0x1a999f = Math.sin(_0x22b7c2 / 2);
      var _0x56fa28 = Math.cos(_0x36c6d2 / 2);
      var _0x4e0edb = Math.sin(_0x36c6d2 / 2);
      var _0x2825fe = _0x3fae36 * _0x309057 * _0x56fa28 - _0x119e2b * _0x1a999f * _0x4e0edb;
      var _0xb90cd1 = _0x119e2b * _0x1a999f * _0x56fa28 + _0x3fae36 * _0x309057 * _0x4e0edb;
      var _0x29db55 = _0x119e2b * _0x309057 * _0x4e0edb + _0x3fae36 * _0x1a999f * _0x56fa28;
      var _0x1efc16 = _0x119e2b * _0x309057 * _0x56fa28 - _0x3fae36 * _0x1a999f * _0x4e0edb;
      _0xa9bb0a(_0x2417ac, _0x2825fe, _0xb90cd1, _0x29db55, _0x1efc16);
    }
  }
  function _0x528fa7(_0x2f8975, _0xbdd20c) {
    if (typeof RelativeOrientationSensor === "undefined") {
      if (_0x2417ac == 0) {
        _0x2417ac = _0x2f8975;
        _0x43191c(1);
        window.addEventListener("deviceorientation", _0x41f7cd);
      }
      return;
    }
    _0x2417ac = _0x2f8975;
    function _0x23bf14(_0x5166be) {
      _0x15d38d = new RelativeOrientationSensor({
        frequency: _0x5166be,
        referenceFrame: "device"
      });
      _0x15d38d.addEventListener("reading", _0x30d5e4);
      _0x15d38d.addEventListener("error", function (_0xd12f6f) {
        _0x56028a(_0xd12f6f.error ? _0xd12f6f.error : _0xd12f6f);
      });
      _0x15d38d.start();
    }
    if (_0x15d38d) {
      _0x15d38d.stop();
      _0x15d38d.removeEventListener("reading", _0x30d5e4);
      _0x23bf14(_0xbdd20c);
    } else if (_0x59be7b != 0) {
      _0x59be7b = _0xbdd20c;
    } else {
      _0x59be7b = _0xbdd20c;
      Promise.all([navigator.permissions.query({
        name: "accelerometer"
      }), navigator.permissions.query({
        name: "gyroscope"
      })]).then(function (_0x5e5669) {
        if (_0x5e5669.every(function (_0x331f99) {
          return _0x331f99.state === "granted";
        })) {
          _0x23bf14(_0x59be7b);
        } else {
          _0x56028a("No permissions to use RelativeOrientationSensor.");
        }
        _0x59be7b = 0;
      });
    }
  }
  function _0x5dfe1a() {
    if (_0x15d38d) {
      _0x15d38d.stop();
      _0x15d38d.removeEventListener("reading", _0x30d5e4);
      _0x15d38d = null;
    } else if (_0x2417ac != 0) {
      window.removeEventListener("deviceorientation", _0x41f7cd);
    }
    _0x2417ac = 0;
  }
  function _0x4a08e2() {
    if (_0x3e2de3 == 0) {
      return;
    }
    _0x43191c(_0x3e2de3);
  }
  function _0x26e80f() {
    _0x3255d0.QuitCleanup();
  }
  var _0x595d17 = 0;
  function _0x474e68() {
    if (_0x595d17) {
      _0x569696(_0x595d17, window.innerWidth, window.innerHeight, screen.orientation ? screen.orientation.angle : window.orientation);
    }
  }
  function _0x5535af() {
    _0x595d17 = 0;
    window.removeEventListener("resize", _0x474e68);
    if (screen.orientation) {
      screen.orientation.removeEventListener("change", _0x474e68);
    }
  }
  function _0x2a2fa1(_0x55f6ee) {
    if (!_0x595d17) {
      if (screen.orientation) {
        screen.orientation.addEventListener("change", _0x474e68);
      }
      window.addEventListener("resize", _0x474e68);
      _0x595d17 = _0x55f6ee;
      setTimeout(_0x474e68, 0);
    }
  }
  var _0x19ecc5 = -1;
  var _0x52ab62 = -1;
  var _0x42b7c7 = -1;
  function _0x5d5f2e(_0x4210dd) {
    if (!screen.orientation || !screen.orientation.lock) {
      return;
    }
    function _0x398b0e() {
      _0x52ab62 = _0x19ecc5;
      var _0x89be47 = ["any", 0, "landscape", "portrait", "portrait-primary", "portrait-secondary", "landscape-primary", "landscape-secondary"];
      var _0x272c2f = _0x89be47[_0x52ab62];
      screen.orientation.lock(_0x272c2f).then(function () {
        if (_0x19ecc5 != _0x52ab62) {
          _0x42b7c7 = setTimeout(_0x398b0e, 0);
        } else {
          _0x42b7c7 = -1;
        }
      }).catch(function (_0x1ba8cf) {
        _0x56028a(_0x1ba8cf);
        _0x42b7c7 = -1;
      });
    }
    _0x19ecc5 = _0x4210dd;
    if (_0x42b7c7 == -1 && _0x4210dd != _0x52ab62) {
      _0x42b7c7 = setTimeout(_0x398b0e, 0);
    }
  }
  var _0x241a3c = {
    audioInstanceIdCounter: 0,
    audioInstances: {},
    audioContext: null,
    audioWebEnabled: 0,
    audioCache: [],
    pendingAudioSources: {}
  };
  function _0x168b53(_0x61c439) {
    _0x61c439.estimatePlaybackPosition = function () {
      var _0x5cfde3 = (_0x241a3c.audioContext.currentTime - _0x61c439.playbackStartTime) * _0x61c439.playbackRate.value;
      if (_0x61c439.loop && _0x5cfde3 >= _0x61c439.loopStart) {
        _0x5cfde3 = (_0x5cfde3 - _0x61c439.loopStart) % (_0x61c439.loopEnd - _0x61c439.loopStart) + _0x61c439.loopStart;
      }
      return _0x5cfde3;
    };
    _0x61c439.setPitch = function (_0x590eae) {
      var _0x21989a = _0x61c439.estimatePlaybackPosition();
      if (_0x21989a >= 0) {
        _0x61c439.playbackStartTime = _0x241a3c.audioContext.currentTime - _0x21989a / _0x590eae;
      }
      if (_0x61c439.playbackRate.value !== _0x590eae) {
        _0x61c439.playbackRate.value = _0x590eae;
      }
    };
  }
  function _0x293c71(_0x58ab17, _0x27b67f) {
    var _0x5d93be = {
      buffer: _0x58ab17,
      error: _0x27b67f
    };
    _0x5d93be.release = function () {};
    _0x5d93be.getLength = function () {
      if (!this.buffer) {
        console.log("Trying to get length of sound which is not loaded.");
        return 0;
      }
      var _0x41a48d = 44100 / this.buffer.sampleRate;
      return this.buffer.length * _0x41a48d;
    };
    _0x5d93be.getData = function (_0x5a6c10, _0x209a04) {
      if (!this.buffer) {
        console.log("Trying to get data of sound which is not loaded.");
        return 0;
      }
      var _0x59241c = _0x5a6c10 >> 2;
      var _0x3e2fb9 = _0x3787f7.subarray(_0x59241c, _0x59241c + (_0x209a04 >> 2));
      var _0x3d3dc4 = Math.floor((_0x209a04 >> 2) / this.buffer.numberOfChannels);
      var _0x36696f = Math.min(this.buffer.length, _0x3d3dc4);
      for (var _0x416a02 = 0; _0x416a02 < this.buffer.numberOfChannels; _0x416a02++) {
        var _0x599882 = this.buffer.getChannelData(_0x416a02).subarray(0, _0x36696f);
        _0x3e2fb9.set(_0x599882, _0x416a02 * _0x36696f);
      }
      return _0x36696f * this.buffer.numberOfChannels * 4;
    };
    _0x5d93be.getNumberOfChannels = function () {
      if (!this.buffer) {
        console.log("Trying to get metadata of sound which is not loaded.");
        return 0;
      }
      return this.buffer.numberOfChannels;
    };
    _0x5d93be.getFrequency = function () {
      if (!this.buffer) {
        console.log("Trying to get metadata of sound which is not loaded.");
        return 0;
      }
      return this.buffer.sampleRate;
    };
    _0x5d93be.createSourceNode = function () {
      if (!this.buffer) {
        console.log("Trying to play sound which is not loaded.");
      }
      var _0x3e8883 = _0x241a3c.audioContext.createBufferSource();
      _0x3e8883.buffer = this.buffer;
      _0x168b53(_0x3e8883);
      return _0x3e8883;
    };
    return _0x5d93be;
  }
  function _0x117802(_0x2d2f63, _0x2b9d52) {
    var _0x329440 = {
      callback: _0x2d2f63,
      userData: _0x2b9d52,
      source: null,
      gain: _0x241a3c.audioContext.createGain(),
      panner: _0x241a3c.audioContext.createPanner(),
      threeD: false,
      loop: false,
      loopStart: 0,
      loopEnd: 0,
      pitch: 1
    };
    _0x329440.panner.rolloffFactor = 0;
    _0x329440.release = function () {
      this.disconnectSource();
      this.gain.disconnect();
      this.panner.disconnect();
    };
    _0x329440.playSoundClip = function (_0x4aa9fb, _0x395496, _0x43af4e) {
      try {
        var _0x4f4b53 = this;
        this.source = _0x4aa9fb.createSourceNode();
        this.setupPanning();
        this.source.onended = function () {
          _0x4f4b53.source.isStopped = true;
          _0x4f4b53.disconnectSource();
          if (_0x4f4b53.callback) {
            _0x322e2c("vi", _0x4f4b53.callback, [_0x4f4b53.userData]);
          }
        };
        this.source.loop = this.loop;
        this.source.loopStart = this.loopStart;
        this.source.loopEnd = this.loopEnd;
        this.source.start(_0x395496, _0x43af4e);
        this.source.playbackStartTime = _0x395496 - _0x43af4e / this.source.playbackRate.value;
        this.source.setPitch(this.pitch);
      } catch (_0x21baa7) {
        console.error("Channel.playSoundClip error. Exception: " + _0x21baa7);
      }
    };
    _0x329440.stop = function (_0x373ac4) {
      if (!this.source) {
        return;
      }
      try {
        _0x329440.source.stop(_0x241a3c.audioContext.currentTime + _0x373ac4);
      } catch (_0x2fd596) {}
      if (_0x373ac4 == 0) {
        this.disconnectSource();
      }
    };
    _0x329440.isPaused = function () {
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
    _0x329440.pause = function () {
      if (!this.source || this.source.isPausedMockNode) {
        return;
      }
      if (this.source.mediaElement) {
        this.source._pauseMediaElement();
        return;
      }
      var _0x316c29 = {
        isPausedMockNode: true,
        buffer: this.source.buffer,
        loop: this.source.loop,
        loopStart: this.source.loopStart,
        loopEnd: this.source.loopEnd,
        playbackRate: this.source.playbackRate.value,
        scheduledStopTime: undefined,
        playbackPausedAtPosition: this.source.estimatePlaybackPosition(),
        setPitch: function (_0x92f636) {
          this.playbackRate = _0x92f636;
        },
        stop: function (_0x1f2fe1) {
          this.scheduledStopTime = _0x1f2fe1;
        }
      };
      this.stop(0);
      this.disconnectSource();
      this.source = _0x316c29;
    };
    _0x329440.resume = function () {
      if (this.source && this.source.mediaElement) {
        this.source.start(undefined, this.source.currentTime);
        return;
      }
      if (!this.source || !this.source.isPausedMockNode) {
        return;
      }
      var _0x1cf12 = this.source;
      var _0x16cdfc = _0x293c71(_0x1cf12.buffer, false);
      this.playSoundClip(_0x16cdfc, _0x241a3c.audioContext.currentTime, Math.max(0, _0x1cf12.playbackPausedAtPosition));
      this.source.loop = _0x1cf12.loop;
      this.source.loopStart = _0x1cf12.loopStart;
      this.source.loopEnd = _0x1cf12.loopEnd;
      this.source.setPitch(_0x1cf12.playbackRate);
      if (typeof _0x1cf12.scheduledStopTime !== "undefined") {
        var _0x4ce12f = Math.max(_0x1cf12.scheduledStopTime - _0x241a3c.audioContext.currentTime, 0);
        this.stop(_0x4ce12f);
      }
    };
    _0x329440.setLoop = function (_0x229820) {
      this.loop = _0x229820;
      if (!this.source || this.source.loop == _0x229820) {
        return;
      }
      this.source.loop = _0x229820;
    };
    _0x329440.setLoopPoints = function (_0x43415b, _0xaec7fd) {
      this.loopStart = _0x43415b;
      this.loopEnd = _0xaec7fd;
      if (!this.source) {
        return;
      }
      if (this.source.loopStart !== _0x43415b) {
        this.source.loopStart = _0x43415b;
      }
      if (this.source.loopEnd !== _0xaec7fd) {
        this.source.loopEnd = _0xaec7fd;
      }
    };
    _0x329440.set3D = function (_0x4b45d5) {
      if (this.threeD == _0x4b45d5) {
        return;
      }
      this.threeD = _0x4b45d5;
      if (!this.source) {
        return;
      }
      this.setupPanning();
    };
    _0x329440.setPitch = function (_0x284094) {
      this.pitch = _0x284094;
      if (!this.source) {
        return;
      }
      this.source.setPitch(_0x284094);
    };
    _0x329440.setVolume = function (_0x10264c) {
      if (this.gain.gain.value == _0x10264c) {
        return;
      }
      this.gain.gain.value = _0x10264c;
    };
    _0x329440.setPosition = function (_0x252be9, _0x2bc5b9, _0x318431) {
      var _0x52dc03 = this.panner;
      if (_0x52dc03.positionX) {
        if (_0x52dc03.positionX.value !== _0x252be9) {
          _0x52dc03.positionX.value = _0x252be9;
        }
        if (_0x52dc03.positionY.value !== _0x2bc5b9) {
          _0x52dc03.positionY.value = _0x2bc5b9;
        }
        if (_0x52dc03.positionZ.value !== _0x318431) {
          _0x52dc03.positionZ.value = _0x318431;
        }
      } else if (_0x52dc03._x !== _0x252be9 || _0x52dc03._y !== _0x2bc5b9 || _0x52dc03._z !== _0x318431) {
        _0x52dc03.setPosition(_0x252be9, _0x2bc5b9, _0x318431);
        _0x52dc03._x = _0x252be9;
        _0x52dc03._y = _0x2bc5b9;
        _0x52dc03._z = _0x318431;
      }
    };
    _0x329440.disconnectSource = function () {
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
    _0x329440.setupPanning = function () {
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
      this.gain.connect(_0x241a3c.audioContext.destination);
    };
    _0x329440.isStopped = function () {
      if (!this.source) {
        return true;
      }
      if (this.source.mediaElement) {
        return this.source.isStopped;
      }
      return false;
    };
    return _0x329440;
  }
  function _0x595f92(_0x13b3bf, _0x4c810d) {
    if (_0x241a3c.audioWebEnabled == 0) {
      return;
    }
    _0x241a3c.audioInstances[++_0x241a3c.audioInstanceIdCounter] = _0x117802(_0x13b3bf, _0x4c810d);
    return _0x241a3c.audioInstanceIdCounter;
  }
  function _0x45e822(_0x110428) {
    if (_0x241a3c.audioWebEnabled == 0) {
      return 0;
    }
    var _0x496f33 = _0x241a3c.audioInstances[_0x110428];
    if (!_0x496f33) {
      return 0;
    }
    return _0x496f33.getLength();
  }
  function _0x5e110b(_0x3956bb) {
    if (_0x241a3c.audioWebEnabled == 0) {
      return 2;
    }
    var _0x1b613d = _0x241a3c.audioInstances[_0x3956bb];
    if (_0x1b613d.error) {
      return 2;
    }
    if (_0x1b613d.buffer || _0x1b613d.url) {
      return 0;
    }
    return 1;
  }
  function _0x5aa643(_0x1a52e9) {
    var _0x3e0eed = _0x241a3c.pendingAudioSources[_0x1a52e9];
    _0x3e0eed.sourceNode._startPlayback(_0x3e0eed.offset);
    delete _0x241a3c.pendingAudioSources[_0x1a52e9];
  }
  function _0x20c6d9() {
    Object.keys(_0x241a3c.pendingAudioSources).forEach(function (_0x25d724) {
      _0x5aa643(_0x25d724);
    });
  }
  function _0x3ce2ae() {
    try {
      window.AudioContext = window.AudioContext || window.webkitAudioContext;
      _0x241a3c.audioContext = new AudioContext();
      var _0x33ee91 = function () {
        if (_0x241a3c.audioContext.state === "suspended") {
          _0x241a3c.audioContext.resume().catch(function (_0x2218ae) {
            console.warn("Could not resume audio context. Exception: " + _0x2218ae);
          });
        } else {
          _0x3255d0.clearInterval(_0x570200);
        }
      };
      var _0x570200 = _0x3255d0.setInterval(_0x33ee91, 400);
      _0x241a3c.audioWebEnabled = 1;
      var _0x432e04 = function () {
        try {
          if (_0x241a3c.audioContext.state !== "running" && _0x241a3c.audioContext.state !== "closed") {
            _0x241a3c.audioContext.resume().catch(function (_0x108e37) {
              console.warn("Could not resume audio context. Exception: " + _0x108e37);
            });
          }
          _0x20c6d9();
          var _0x155b23 = 20;
          while (_0x241a3c.audioCache.length < _0x155b23) {
            var _0x36d0c6 = new Audio();
            _0x36d0c6.autoplay = false;
            _0x241a3c.audioCache.push(_0x36d0c6);
          }
        } catch (_0x5a1759) {}
      };
      window.addEventListener("mousedown", _0x432e04);
      window.addEventListener("touchstart", _0x432e04);
      _0x3255d0.deinitializers.push(function () {
        window.removeEventListener("mousedown", _0x432e04);
        window.removeEventListener("touchstart", _0x432e04);
      });
    } catch (_0x2cd380) {
      alert("Web Audio API is not supported in this browser");
    }
  }
  function _0x1dae17(_0x18fd83) {
    var _0x17de64 = _0x293c71(null, false);
    _0x241a3c.audioContext.decodeAudioData(_0x18fd83, function (_0x14ab97) {
      _0x17de64.buffer = _0x14ab97;
    }, function (_0x3ad9ac) {
      _0x17de64.error = true;
      console.log("Decode error: " + _0x3ad9ac);
    });
    return _0x17de64;
  }
  function _0x32552f(_0xe6bfa6, _0x5c0d8c) {
    _0x241a3c.pendingAudioSources[_0xe6bfa6.mediaElement.src] = {
      sourceNode: _0xe6bfa6,
      offset: _0x5c0d8c
    };
  }
  function _0x58da09(_0x66c884) {
    switch (_0x66c884) {
      case 13:
        return "audio/mpeg";
      case 20:
        return "audio/wav";
      default:
        return "audio/mp4";
    }
  }
  function _0x5c0b4d(_0x402559, _0x2c0d43) {
    var _0x236b92 = _0x58da09(_0x2c0d43);
    var _0x4c6c2c = new Blob([_0x402559], {
      type: _0x236b92
    });
    var _0x437fbd = {
      url: URL.createObjectURL(_0x4c6c2c),
      error: false,
      mediaElement: new Audio()
    };
    _0x437fbd.mediaElement.preload = "metadata";
    _0x437fbd.mediaElement.src = _0x437fbd.url;
    _0x437fbd.release = function () {
      if (!this.mediaElement) {
        return;
      }
      this.mediaElement.src = "";
      URL.revokeObjectURL(this.url);
      delete this.mediaElement;
      delete this.url;
    };
    _0x437fbd.getLength = function () {
      return this.mediaElement.duration * 44100;
    };
    _0x437fbd.getData = function (_0x5b04bc, _0x494a71) {
      console.warn("getData() is not supported for compressed sound.");
      return 0;
    };
    _0x437fbd.getNumberOfChannels = function () {
      console.warn("getNumberOfChannels() is not supported for compressed sound.");
      return 0;
    };
    _0x437fbd.getFrequency = function () {
      console.warn("getFrequency() is not supported for compressed sound.");
      return 0;
    };
    _0x437fbd.createSourceNode = function () {
      var _0x3eb72d = this;
      var _0x25e0bb = _0x241a3c.audioCache.length ? _0x241a3c.audioCache.pop() : new Audio();
      _0x25e0bb.preload = "metadata";
      _0x25e0bb.src = this.url;
      var _0x507ca3 = _0x241a3c.audioContext.createMediaElementSource(_0x25e0bb);
      Object.defineProperty(_0x507ca3, "loop", {
        get: function () {
          return _0x507ca3.mediaElement.loop;
        },
        set: function (_0x18100e) {
          if (_0x507ca3.mediaElement.loop !== _0x18100e) {
            _0x507ca3.mediaElement.loop = _0x18100e;
          }
        }
      });
      _0x507ca3.playbackRate = {};
      Object.defineProperty(_0x507ca3.playbackRate, "value", {
        get: function () {
          return _0x507ca3.mediaElement.playbackRate;
        },
        set: function (_0x13651e) {
          if (_0x507ca3.mediaElement.playbackRate !== _0x13651e) {
            _0x507ca3.mediaElement.playbackRate = _0x13651e;
          }
        }
      });
      Object.defineProperty(_0x507ca3, "currentTime", {
        get: function () {
          return _0x507ca3.mediaElement.currentTime;
        },
        set: function (_0x242f8d) {
          if (_0x507ca3.mediaElement.currentTime !== _0x242f8d) {
            _0x507ca3.mediaElement.currentTime = _0x242f8d;
          }
        }
      });
      Object.defineProperty(_0x507ca3, "mute", {
        get: function () {
          return _0x507ca3.mediaElement.mute;
        },
        set: function (_0x37c919) {
          if (_0x507ca3.mediaElement.mute !== _0x37c919) {
            _0x507ca3.mediaElement.mute = _0x37c919;
          }
        }
      });
      Object.defineProperty(_0x507ca3, "onended", {
        get: function () {
          return _0x507ca3.mediaElement.onended;
        },
        set: function (_0x490676) {
          _0x507ca3.mediaElement.onended = _0x490676;
        }
      });
      _0x507ca3.playPromise = null;
      _0x507ca3.playTimeout = null;
      _0x507ca3.pauseRequested = false;
      _0x507ca3.isStopped = false;
      _0x507ca3._pauseMediaElement = function () {
        if (_0x507ca3.playPromise || _0x507ca3.playTimeout) {
          _0x507ca3.pauseRequested = true;
        } else {
          _0x507ca3.mediaElement.pause();
        }
      };
      _0x507ca3._startPlayback = function (_0x51f873) {
        if (_0x507ca3.playPromise || _0x507ca3.playTimeout) {
          _0x507ca3.mediaElement.currentTime = _0x51f873;
          _0x507ca3.pauseRequested = false;
          return;
        }
        _0x507ca3.mediaElement.currentTime = _0x51f873;
        _0x507ca3.playPromise = _0x507ca3.mediaElement.play();
        if (_0x507ca3.playPromise) {
          _0x507ca3.playPromise.then(function () {
            if (_0x507ca3.pauseRequested) {
              _0x507ca3.mediaElement.pause();
              _0x507ca3.pauseRequested = false;
            }
            _0x507ca3.playPromise = null;
          }).catch(function (_0x4187df) {
            _0x507ca3.playPromise = null;
            if (_0x4187df.name !== "NotAllowedError") {
              throw _0x4187df;
            }
            _0x32552f(_0x507ca3, _0x51f873);
          });
        }
      };
      _0x507ca3.start = function (_0x3ae0b5, _0x6192f) {
        if (typeof _0x3ae0b5 === "undefined") {
          _0x3ae0b5 = _0x241a3c.audioContext.currentTime;
        }
        if (typeof _0x6192f === "undefined") {
          _0x6192f = 0;
        }
        var _0x292bc7 = 4;
        var _0x24051f = (_0x3ae0b5 - _0x241a3c.audioContext.currentTime) * 1000;
        if (_0x24051f > _0x292bc7) {
          _0x507ca3.playTimeout = setTimeout(function () {
            _0x507ca3.playTimeout = null;
            _0x507ca3._startPlayback(_0x6192f);
          }, _0x24051f);
        } else {
          _0x507ca3._startPlayback(_0x6192f);
        }
      };
      _0x507ca3.stop = function (_0x306587) {
        if (typeof _0x306587 === "undefined") {
          _0x306587 = _0x241a3c.audioContext.currentTime;
        }
        var _0x9e395b = 4;
        var _0x6ba117 = (_0x306587 - _0x241a3c.audioContext.currentTime) * 1000;
        if (_0x6ba117 > _0x9e395b) {
          setTimeout(function () {
            _0x507ca3._pauseMediaElement();
            _0x507ca3.isStopped = true;
          }, _0x6ba117);
        } else {
          _0x507ca3._pauseMediaElement();
          _0x507ca3.isStopped = true;
        }
      };
      _0x168b53(_0x507ca3);
      return _0x507ca3;
    };
    return _0x437fbd;
  }
  function _0x39dd17(_0x333fda, _0x5bf078, _0x384d06, _0x49224f) {
    if (_0x241a3c.audioWebEnabled == 0) {
      return 0;
    }
    var _0x40c36c = _0x10abe1.buffer.slice(_0x333fda, _0x333fda + _0x5bf078);
    if (_0x5bf078 < 131072) {
      _0x384d06 = 1;
    }
    var _0x4641ee;
    if (_0x384d06) {
      _0x4641ee = _0x1dae17(_0x40c36c);
    } else {
      _0x4641ee = _0x5c0b4d(_0x40c36c, _0x49224f);
    }
    _0x241a3c.audioInstances[++_0x241a3c.audioInstanceIdCounter] = _0x4641ee;
    return _0x241a3c.audioInstanceIdCounter;
  }
  function _0x26dd33(_0x83009d, _0x16dfb9, _0x5f21b8, _0x33ce81) {
    var _0x97bf09 = _0x241a3c.audioContext.createBuffer(_0x83009d, _0x16dfb9, _0x5f21b8);
    for (var _0x3f9ad1 = 0; _0x3f9ad1 < _0x83009d; _0x3f9ad1++) {
      var _0x3e19a0 = (_0x33ce81 >> 2) + _0x16dfb9 * _0x3f9ad1;
      var _0x1efa8d = _0x97bf09.copyToChannel || function (_0x438043, _0x52ecc9, _0x303a9f) {
        var _0xf455 = _0x438043.subarray(0, Math.min(_0x438043.length, this.length - (_0x303a9f | 0)));
        this.getChannelData(_0x52ecc9 | 0).set(_0xf455, _0x303a9f | 0);
      };
      _0x1efa8d.apply(_0x97bf09, [_0x3787f7.subarray(_0x3e19a0, _0x3e19a0 + _0x16dfb9), _0x3f9ad1, 0]);
    }
    return _0x293c71(_0x97bf09, false);
  }
  function _0x3fa41d(_0x405f2e, _0x4af068, _0x5eade6, _0xf621d5) {
    if (_0x241a3c.audioWebEnabled == 0) {
      return 0;
    }
    var _0x2b60bc = _0x26dd33(_0x405f2e, _0x4af068, _0x5eade6, _0xf621d5);
    _0x241a3c.audioInstances[++_0x241a3c.audioInstanceIdCounter] = _0x2b60bc;
    return _0x241a3c.audioInstanceIdCounter;
  }
  function _0x513c04(_0x5af060, _0x33ee2c, _0x2b669c, _0x2a546e) {
    if (_0x241a3c.audioWebEnabled == 0) {
      return;
    }
    _0x530b36(_0x33ee2c, 0);
    var _0xc5a42 = _0x241a3c.audioInstances[_0x5af060];
    var _0x213471 = _0x241a3c.audioInstances[_0x33ee2c];
    if (!_0xc5a42) {
      console.log("Trying to play sound which is not loaded.");
      return;
    }
    try {
      _0x213471.playSoundClip(_0xc5a42, _0x241a3c.audioContext.currentTime + _0x2a546e, _0x2b669c);
    } catch (_0x166ca3) {
      console.error("playSoundClip error. Exception: " + e);
    }
  }
  function _0x18b6c8(_0x4fb9b6) {
    var _0x4c4f74 = _0x241a3c.audioInstances[_0x4fb9b6];
    if (_0x4c4f74) {
      _0x4c4f74.release();
    }
    delete _0x241a3c.audioInstances[_0x4fb9b6];
  }
  function _0x5890b3() {
    if (_0x241a3c.audioWebEnabled == 0) {
      return;
    }
    if (_0x241a3c.audioContext.state === "suspended") {
      _0x241a3c.audioContext.resume().catch(function (_0x337489) {
        console.warn("Could not resume audio context. Exception: " + _0x337489);
      });
    }
  }
  function _0x5bf5a5(_0x54cbd8, _0x403e89) {
    var _0x44bbc9 = _0x241a3c.audioInstances[_0x54cbd8];
    _0x44bbc9.set3D(_0x403e89);
  }
  function _0x2a9d0a(_0x2ad62d, _0x113ab0, _0x5c3e2d, _0x1c09d3, _0x853854, _0x2ee73c) {
    if (_0x241a3c.audioWebEnabled == 0) {
      return;
    }
    _0x2ad62d = -_0x2ad62d;
    _0x113ab0 = -_0x113ab0;
    _0x5c3e2d = -_0x5c3e2d;
    var _0x56ce7e = _0x241a3c.audioContext.listener;
    if (_0x56ce7e.forwardX) {
      if (_0x56ce7e.forwardX.value !== _0x2ad62d) {
        _0x56ce7e.forwardX.value = _0x2ad62d;
      }
      if (_0x56ce7e.forwardY.value !== _0x113ab0) {
        _0x56ce7e.forwardY.value = _0x113ab0;
      }
      if (_0x56ce7e.forwardZ.value !== _0x5c3e2d) {
        _0x56ce7e.forwardZ.value = _0x5c3e2d;
      }
      if (_0x56ce7e.upX.value !== _0x1c09d3) {
        _0x56ce7e.upX.value = _0x1c09d3;
      }
      if (_0x56ce7e.upY.value !== _0x853854) {
        _0x56ce7e.upY.value = _0x853854;
      }
      if (_0x56ce7e.upZ.value !== _0x2ee73c) {
        _0x56ce7e.upZ.value = _0x2ee73c;
      }
    } else if (_0x56ce7e._forwardX !== _0x2ad62d || _0x56ce7e._forwardY !== _0x113ab0 || _0x56ce7e._forwardZ !== _0x5c3e2d || _0x56ce7e._upX !== _0x1c09d3 || _0x56ce7e._upY !== _0x853854 || _0x56ce7e._upZ !== _0x2ee73c) {
      _0x56ce7e.setOrientation(_0x2ad62d, _0x113ab0, _0x5c3e2d, _0x1c09d3, _0x853854, _0x2ee73c);
      _0x56ce7e._forwardX = _0x2ad62d;
      _0x56ce7e._forwardY = _0x113ab0;
      _0x56ce7e._forwardZ = _0x5c3e2d;
      _0x56ce7e._upX = _0x1c09d3;
      _0x56ce7e._upY = _0x853854;
      _0x56ce7e._upZ = _0x2ee73c;
    }
  }
  function _0x428b3e(_0x2b46ff, _0x4872f7, _0xb3112f) {
    if (_0x241a3c.audioWebEnabled == 0) {
      return;
    }
    var _0x488b88 = _0x241a3c.audioContext.listener;
    if (_0x488b88.positionX) {
      if (_0x488b88.positionX.value !== _0x2b46ff) {
        _0x488b88.positionX.value = _0x2b46ff;
      }
      if (_0x488b88.positionY.value !== _0x4872f7) {
        _0x488b88.positionY.value = _0x4872f7;
      }
      if (_0x488b88.positionZ.value !== _0xb3112f) {
        _0x488b88.positionZ.value = _0xb3112f;
      }
    } else if (_0x488b88._positionX !== _0x2b46ff || _0x488b88._positionY !== _0x4872f7 || _0x488b88._positionZ !== _0xb3112f) {
      _0x488b88.setPosition(_0x2b46ff, _0x4872f7, _0xb3112f);
      _0x488b88._positionX = _0x2b46ff;
      _0x488b88._positionY = _0x4872f7;
      _0x488b88._positionZ = _0xb3112f;
    }
  }
  function _0x38b5a2(_0x263644, _0x55e6e7) {
    if (_0x241a3c.audioWebEnabled == 0) {
      return;
    }
    var _0x255932 = _0x241a3c.audioInstances[_0x263644];
    _0x255932.setLoop(_0x55e6e7);
  }
  function _0x1477b1(_0x35b761, _0x504706, _0x271145) {
    if (_0x241a3c.audioWebEnabled == 0) {
      return;
    }
    var _0x35b058 = _0x241a3c.audioInstances[_0x35b761];
    _0x35b058.setLoopPoints(_0x504706, _0x271145);
  }
  function _0x26a5aa(_0x14ab2a, _0x2efe68) {
    if (_0x241a3c.audioWebEnabled == 0) {
      return;
    }
    var _0x51018d = _0x241a3c.audioInstances[_0x14ab2a];
    if (_0x2efe68 != _0x51018d.isPaused()) {
      if (_0x2efe68) {
        _0x51018d.pause();
      } else {
        _0x51018d.resume();
      }
    }
  }
  function _0x3af863(_0x29d895, _0x459751) {
    if (_0x241a3c.audioWebEnabled == 0) {
      return;
    }
    try {
      var _0x5850f8 = _0x241a3c.audioInstances[_0x29d895];
      _0x5850f8.setPitch(_0x459751);
    } catch (_0x34c135) {
      console.error("JS_Sound_SetPitch(channel=" + _0x29d895 + ", pitch=" + _0x459751 + ") threw an exception: " + _0x34c135);
    }
  }
  function _0x154760(_0x5d5c4d, _0x16b5ee, _0x537532, _0x117c35) {
    if (_0x241a3c.audioWebEnabled == 0) {
      return;
    }
    var _0x173ed1 = _0x241a3c.audioInstances[_0x5d5c4d];
    _0x173ed1.setPosition(_0x16b5ee, _0x537532, _0x117c35);
  }
  function _0xb93331(_0x16d3f9, _0x3b4f2f) {
    if (_0x241a3c.audioWebEnabled == 0) {
      return;
    }
    try {
      var _0x53a254 = _0x241a3c.audioInstances[_0x16d3f9];
      _0x53a254.setVolume(_0x3b4f2f);
    } catch (_0x32a07c) {
      console.error("JS_Sound_SetVolume(channel=" + _0x16d3f9 + ", volume=" + _0x3b4f2f + ") threw an exception: " + _0x32a07c);
    }
  }
  function _0x530b36(_0xb9c460, _0x88f5e) {
    if (_0x241a3c.audioWebEnabled == 0) {
      return;
    }
    var _0x41efce = _0x241a3c.audioInstances[_0xb9c460];
    _0x41efce.stop(_0x88f5e);
  }
  function _0x213148(_0x3bdd0a, _0x6c6bec) {
    var _0x35791b = _0x3255d0.SystemInfo.browser;
    if (_0x3bdd0a) {
      _0x259c3d(_0x35791b, _0x3bdd0a, _0x6c6bec);
    }
    return _0x40d569(_0x35791b);
  }
  function _0x474af6(_0x1e34e5, _0x239902) {
    var _0x3c61c1 = _0x3255d0.SystemInfo.browserVersion;
    if (_0x1e34e5) {
      _0x259c3d(_0x3c61c1, _0x1e34e5, _0x239902);
    }
    return _0x40d569(_0x3c61c1);
  }
  function _0x54abd3(_0xf520e4, _0x8d9904, _0xb4b2b0) {
    var _0x2e4cbe = _0x5afdf8(_0xf520e4);
    var _0x179748 = _0x2e4cbe == "#canvas" ? _0x3255d0.canvas : document.querySelector(_0x2e4cbe);
    var _0x10be59 = 0;
    var _0x5bd96d = 0;
    if (_0x179748) {
      var _0x3f3d94 = _0x179748.getBoundingClientRect();
      _0x10be59 = _0x3f3d94.width;
      _0x5bd96d = _0x3f3d94.height;
    }
    _0x21f13f[_0x8d9904 >> 3] = _0x10be59;
    _0x21f13f[_0xb4b2b0 >> 3] = _0x5bd96d;
  }
  function _0x51580c(_0x495beb, _0x23664c) {
    if (_0x495beb) {
      _0x259c3d("https://gamea.azgame.io", _0x495beb, _0x23664c);
    }
    return _0x40d569("https://gamea.azgame.io");
  }
  function _0x38f017(_0x15c61c, _0x20f899) {
    var _0x21fe15 = _0x3255d0.SystemInfo.gpu;
    if (_0x15c61c) {
      _0x259c3d(_0x21fe15, _0x15c61c, _0x20f899);
    }
    return _0x40d569(_0x21fe15);
  }
  function _0x341e4b(_0x2c79e7, _0x561e24) {
    var _0x40f77c = _0x3255d0.SystemInfo.language;
    if (_0x2c79e7) {
      _0x259c3d(_0x40f77c, _0x2c79e7, _0x561e24);
    }
    return _0x40d569(_0x40f77c);
  }
  function _0x15598c() {
    return _0x3255d0.matchWebGLToCanvasSize || _0x3255d0.matchWebGLToCanvasSize === undefined;
  }
  function _0x5887ae() {
    return _0x10abe1.length / 1048576;
  }
  function _0x22e778(_0xbef7fa, _0x4e26a4) {
    var _0x3e1365 = _0x3255d0.SystemInfo.os + " " + _0x3255d0.SystemInfo.osVersion;
    if (_0xbef7fa) {
      _0x259c3d(_0x3e1365, _0xbef7fa, _0x4e26a4);
    }
    return _0x40d569(_0x3e1365);
  }
  function _0x1cafcb() {
    if (_0x3255d0.matchWebGLToCanvasSize == false) {
      return 1;
    } else {
      return _0x3255d0.devicePixelRatio || window.devicePixelRatio || 1;
    }
  }
  function _0xf917c9(_0x102ae3, _0x555c50) {
    _0x21f13f[_0x102ae3 >> 3] = _0x3255d0.SystemInfo.width;
    _0x21f13f[_0x555c50 >> 3] = _0x3255d0.SystemInfo.height;
  }
  function _0x4a7e2d(_0x29a02e, _0xf64af4) {
    if (_0x29a02e) {
      _0x259c3d(_0x3255d0.streamingAssetsUrl, _0x29a02e, _0xf64af4);
    }
    return _0x40d569(_0x3255d0.streamingAssetsUrl);
  }
  function _0x309d05() {
    var _0x3e1853 = _0x1ca50b.getExtension("WEBGL_compressed_texture_astc");
    if (_0x3e1853 && _0x3e1853.getSupportedProfiles) {
      return _0x3e1853.getSupportedProfiles().includes("hdr");
    }
    return false;
  }
  function _0x36066b() {
    return _0x3255d0.SystemInfo.hasCursorLock;
  }
  function _0x23ebb1() {
    return _0x3255d0.SystemInfo.hasFullscreen;
  }
  function _0x22613f() {
    return _0x3255d0.SystemInfo.hasWebGL;
  }
  function _0x5a2e9d() {
    return !!_0x3255d0.shouldQuit;
  }
  var _0x423e38 = {
    requests: {},
    responses: {},
    abortControllers: {},
    timer: {},
    nextRequestId: 1
  };
  function _0x3cd53e(_0x2a4d21) {
    var _0x499ae9 = _0x423e38.abortControllers[_0x2a4d21];
    if (!_0x499ae9 || _0x499ae9.signal.aborted) {
      return;
    }
    _0x499ae9.abort();
  }
  function _0x53d1b9(_0x3132dd, _0x4581c3) {
    var _0x5f2f2a = _0x5afdf8(_0x3132dd);
    var _0x271f30 = _0x5afdf8(_0x4581c3);
    var _0x2bc99c = new AbortController();
    var _0x3f2028 = {
      url: _0x5f2f2a,
      init: {
        method: _0x271f30,
        signal: _0x2bc99c.signal,
        headers: {},
        enableStreamingDownload: true
      },
      tempBuffer: null,
      tempBufferSize: 0
    };
    _0x423e38.abortControllers[_0x423e38.nextRequestId] = _0x2bc99c;
    _0x423e38.requests[_0x423e38.nextRequestId] = _0x3f2028;
    return _0x423e38.nextRequestId++;
  }
  function _0x280fdd(_0x4ce765) {
    var _0x22b0a9 = _0x423e38.responses[_0x4ce765];
    if (!_0x22b0a9) {
      return "";
    }
    if (_0x22b0a9.headerString) {
      return _0x22b0a9.headerString;
    }
    var _0x436fd9 = "";
    var _0x4b720b = _0x22b0a9.headers.entries();
    for (var _0x418f59 = _0x4b720b.next(); !_0x418f59.done; _0x418f59 = _0x4b720b.next()) {
      _0x436fd9 += _0x418f59.value[0] + ": " + _0x418f59.value[1] + "\r\n";
    }
    _0x22b0a9.headerString = _0x436fd9;
    return _0x436fd9;
  }
  function _0x243d6e(_0x52791d, _0x45139a, _0x1c2df8, _0x3f0577, _0x43d86c) {
    var _0x4283da = _0x423e38.responses[_0x52791d];
    if (!_0x4283da) {
      _0x259c3d("", _0x45139a, _0x1c2df8);
      _0x259c3d("", _0x3f0577, _0x43d86c);
      return;
    }
    if (_0x45139a) {
      var _0x593586 = _0x280fdd(_0x52791d);
      _0x259c3d(_0x593586, _0x45139a, _0x1c2df8);
    }
    if (_0x3f0577) {
      _0x259c3d(_0x4283da.url, _0x3f0577, _0x43d86c);
    }
  }
  function _0x51fc32(_0x496e2a, _0x3d9ad9) {
    var _0x1735ce = _0x423e38.responses[_0x496e2a];
    if (!_0x1735ce) {
      _0x3e0b02[_0x3d9ad9 >> 2] = 0;
      _0x3e0b02[(_0x3d9ad9 >> 2) + 1] = 0;
      return;
    }
    var _0x4ae914 = _0x280fdd(_0x496e2a);
    _0x3e0b02[_0x3d9ad9 >> 2] = _0x40d569(_0x4ae914);
    _0x3e0b02[(_0x3d9ad9 >> 2) + 1] = _0x40d569(_0x1735ce.url);
  }
  function _0x47b3ed(_0x359199) {
    if (_0x423e38.timer[_0x359199]) {
      clearTimeout(_0x423e38.timer[_0x359199]);
    }
    delete _0x423e38.requests[_0x359199];
    delete _0x423e38.responses[_0x359199];
    delete _0x423e38.abortControllers[_0x359199];
    delete _0x423e38.timer[_0x359199];
  }
  function _0x344ec3(_0xa170, _0x3c349d, _0x3e186b, _0x4181db, _0x57a4b2, _0x1477ec) {
    var _0x2610a6 = _0x423e38.requests[_0xa170];
    var _0x1989c9 = _0x423e38.abortControllers[_0xa170];
    function _0x2905f5(_0x370383) {
      if (!_0x2610a6.tempBuffer) {
        const _0x252985 = Math.max(_0x370383, 1024);
        _0x2610a6.tempBuffer = _0x311afe(_0x252985);
        _0x2610a6.tempBufferSize = _0x252985;
      }
      if (_0x2610a6.tempBufferSize < _0x370383) {
        _0x4200b9(_0x2610a6.tempBuffer);
        _0x2610a6.tempBuffer = _0x311afe(_0x370383);
        _0x2610a6.tempBufferSize = _0x370383;
      }
      return _0x2610a6.tempBuffer;
    }
    function _0x4853a9() {
      if (_0x423e38.timer[_0xa170]) {
        clearTimeout(_0x423e38.timer[_0xa170]);
        delete _0x423e38.timer[_0xa170];
      }
    }
    function _0x4d765a(_0x5107a5, _0x191249) {
      _0x4853a9();
      if (!_0x57a4b2) {
        return;
      }
      var _0x2b2b69 = 0;
      if (_0x2610a6.init.enableStreamingDownload) {
        _0x322e2c("viiiiii", _0x57a4b2, [_0x4181db, _0x5107a5.status, 0, _0x191249.length, 0, _0x2b2b69]);
      } else if (_0x191249.length != 0) {
        var _0x28ed1c = _0x311afe(_0x191249.length);
        _0x10abe1.set(_0x191249, _0x28ed1c);
        _0x322e2c("viiiiii", _0x57a4b2, [_0x4181db, _0x5107a5.status, _0x28ed1c, _0x191249.length, 0, _0x2b2b69]);
      } else {
        _0x322e2c("viiiiii", _0x57a4b2, [_0x4181db, _0x5107a5.status, 0, 0, 0, _0x2b2b69]);
      }
      if (_0x2610a6.tempBuffer) {
        _0x4200b9(_0x2610a6.tempBuffer);
      }
    }
    function _0x3a88e3(_0x492102, _0x544296) {
      _0x4853a9();
      if (!_0x57a4b2) {
        return;
      }
      var _0x5288d7 = _0x40d569(_0x492102) + 1;
      var _0x4cec7e = _0x311afe(_0x5288d7);
      _0x259c3d(_0x492102, _0x4cec7e, _0x5288d7);
      _0x322e2c("viiiiii", _0x57a4b2, [_0x4181db, 500, 0, 0, _0x4cec7e, _0x544296]);
      _0x4200b9(_0x4cec7e);
      if (_0x2610a6.tempBuffer) {
        _0x4200b9(_0x2610a6.tempBuffer);
      }
    }
    function _0x5b64d(_0x45a543) {
      if (!_0x1477ec || !_0x45a543.lengthComputable) {
        return;
      }
      var _0xafc845 = _0x45a543.response;
      _0x423e38.responses[_0xa170] = _0xafc845;
      if (_0x45a543.chunk) {
        var _0x547479 = _0x2905f5(_0x45a543.chunk.length);
        _0x10abe1.set(_0x45a543.chunk, _0x547479);
        _0x322e2c("viiiiii", _0x1477ec, [_0x4181db, _0xafc845.status, _0x45a543.loaded, _0x45a543.total, _0x547479, _0x45a543.chunk.length]);
      } else {
        _0x322e2c("viiiiii", _0x1477ec, [_0x4181db, _0xafc845.status, _0x45a543.loaded, _0x45a543.total, 0, 0]);
      }
    }
    try {
      if (_0x3e186b > 0) {
        var _0x584dfa = _0x10abe1.subarray(_0x3c349d, _0x3c349d + _0x3e186b);
        _0x2610a6.init.body = new Blob([_0x584dfa]);
      }
      if (_0x2610a6.timeout) {
        _0x423e38.timer[_0xa170] = setTimeout(function () {
          _0x2610a6.isTimedOut = true;
          _0x1989c9.abort();
        }, _0x2610a6.timeout);
      }
      var _0x5e28ae = _0x3255d0.fetchWithProgress;
      _0x2610a6.init.onProgress = _0x5b64d;
      if (_0x3255d0.companyName && _0x3255d0.productName && _0x3255d0.cachedFetch) {
        _0x5e28ae = _0x3255d0.cachedFetch;
        _0x2610a6.init.companyName = _0x3255d0.companyName;
        _0x2610a6.init.productName = _0x3255d0.productName;
        _0x2610a6.control = _0x3255d0.cacheControl(_0x2610a6.url);
      }
      _0x5e28ae(_0x2610a6.url, _0x2610a6.init).then(function (_0x2070fb) {
        _0x423e38.responses[_0xa170] = _0x2070fb;
        _0x4d765a(_0x2070fb, _0x2070fb.parsedBody);
      }).catch(function (_0x4d434c) {
        var _0x50ef8f = 2;
        var _0x9b3a57 = 17;
        var _0x2fda69 = 14;
        if (_0x2610a6.isTimedOut) {
          _0x3a88e3("Connection timed out.", _0x2fda69);
        } else if (_0x1989c9.signal.aborted) {
          _0x3a88e3("Aborted.", _0x9b3a57);
        } else {
          _0x3a88e3(_0x4d434c.message, _0x50ef8f);
        }
      });
    } catch (_0xb548ba) {
      var _0x2c369a = 2;
      _0x3a88e3(_0xb548ba.message, _0x2c369a);
    }
  }
  function _0x3e5dbe(_0x58abeb, _0x342474) {
    var _0x1a9c69 = _0x423e38.requests[_0x58abeb];
    if (!_0x1a9c69) {
      return;
    }
    _0x1a9c69.init.redirect = _0x342474 === 0 ? "error" : "follow";
  }
  function _0x19da96(_0x1710ce, _0x32331e, _0xacddc7) {
    var _0xdf1dde = _0x423e38.requests[_0x1710ce];
    if (!_0xdf1dde) {
      return;
    }
    var _0x4dfe0e = _0x5afdf8(_0x32331e);
    var _0x21ccc8 = _0x5afdf8(_0xacddc7);
    _0xdf1dde.init.headers[_0x4dfe0e] = _0x21ccc8;
  }
  function _0x449c16(_0x2b9435, _0x34d971) {
    var _0xee6b8d = _0x423e38.requests[_0x2b9435];
    if (!_0xee6b8d) {
      return;
    }
    _0xee6b8d.timeout = _0x34d971;
  }
  function _0x293ff9(_0xf5de8, _0x84486c, _0x310976, _0x2317b9) {
    var _0x129be4 = _0x5afdf8(_0xf5de8);
    var _0x4841c3 = _0x5afdf8(_0x84486c);
    var _0x4aad0f = _0x5afdf8(_0x310976);
    var _0x2ef0d7 = _0x5afdf8(_0x2317b9);
    try {
      firebase.database().ref(_0x129be4).on("child_added", function (_0x1340d2) {
        window.unityInstance.SendMessage(_0x4841c3, _0x4aad0f, JSON.stringify(_0x1340d2.val()));
      });
    } catch (_0x48a954) {
      window.unityInstance.SendMessage(_0x4841c3, _0x2ef0d7, JSON.stringify(_0x48a954, Object.getOwnPropertyNames(_0x48a954)));
    }
  }
  function _0x15a18f(_0x576521, _0x4dbbbe, _0x1cd804, _0xff69fd) {
    var _0x235c9e = _0x5afdf8(_0x576521);
    var _0x25a676 = _0x5afdf8(_0x4dbbbe);
    var _0x243133 = _0x5afdf8(_0x1cd804);
    var _0x6a1017 = _0x5afdf8(_0xff69fd);
    try {
      firebase.database().ref(_0x235c9e).on("child_changed", function (_0x26073b) {
        window.unityInstance.SendMessage(_0x25a676, _0x243133, JSON.stringify(_0x26073b.val()));
      });
    } catch (_0x12b50a) {
      window.unityInstance.SendMessage(_0x25a676, _0x6a1017, JSON.stringify(_0x12b50a, Object.getOwnPropertyNames(_0x12b50a)));
    }
  }
  function _0xf197d6(_0x45b041, _0xb85948, _0x4482a7, _0x49d8ea) {
    var _0x520603 = _0x5afdf8(_0x45b041);
    var _0x4b005e = _0x5afdf8(_0xb85948);
    var _0x2c225d = _0x5afdf8(_0x4482a7);
    var _0x5c30ba = _0x5afdf8(_0x49d8ea);
    try {
      firebase.database().ref(_0x520603).on("child_removed", function (_0x184b02) {
        window.unityInstance.SendMessage(_0x4b005e, _0x2c225d, JSON.stringify(_0x184b02.val()));
      });
    } catch (_0x496465) {
      window.unityInstance.SendMessage(_0x4b005e, _0x5c30ba, JSON.stringify(_0x496465, Object.getOwnPropertyNames(_0x496465)));
    }
  }
  function _0x3a5467(_0x7943f1, _0x450ba7, _0x1ab3ea, _0x32d911, _0x330851) {
    var _0x338821 = _0x5afdf8(_0x7943f1);
    var _0x635aa6 = _0x5afdf8(_0x1ab3ea);
    var _0x23c062 = _0x5afdf8(_0x32d911);
    var _0x136605 = _0x5afdf8(_0x330851);
    try {
      if (typeof firestorelisteners === "undefined") {
        firestorelisteners = {};
      }
      this.firestorelisteners[_0x338821 + "/collection/"] = firebase.firestore().collection(_0x338821).onSnapshot({
        includeMetadataChanges: _0x450ba7 == 1
      }, function (_0x12bd6a) {
        var _0x539d83 = {};
        _0x12bd6a.forEach(function (_0x5c83b2) {
          _0x539d83[_0x5c83b2.id] = _0x5c83b2.data();
        });
        window.unityInstance.SendMessage(_0x635aa6, _0x23c062, JSON.stringify(_0x539d83));
      }, function (_0x20110a) {
        window.unityInstance.SendMessage(_0x635aa6, _0x136605, JSON.stringify(_0x20110a, Object.getOwnPropertyNames(_0x20110a)));
      });
    } catch (_0x1f4417) {
      window.unityInstance.SendMessage(_0x635aa6, _0x136605, JSON.stringify(_0x1f4417, Object.getOwnPropertyNames(_0x1f4417)));
    }
  }
  function _0x5edd83(_0x4eb316, _0x4a1016, _0x417604, _0x555a61, _0x2a00af, _0x33da10) {
    var _0x937b21 = _0x5afdf8(_0x4eb316);
    var _0x1f0d2f = _0x5afdf8(_0x4a1016);
    var _0x10badd = _0x5afdf8(_0x555a61);
    var _0x32fb1e = _0x5afdf8(_0x2a00af);
    var _0x5eb91d = _0x5afdf8(_0x33da10);
    try {
      if (typeof firestorelisteners === "undefined") {
        firestorelisteners = {};
      }
      this.firestorelisteners[_0x937b21 + "/" + _0x1f0d2f] = firebase.firestore().collection(_0x937b21).doc(_0x1f0d2f).onSnapshot({
        includeMetadataChanges: _0x417604 == 1
      }, function (_0x4f1499) {
        window.unityInstance.SendMessage(_0x10badd, _0x32fb1e, JSON.stringify(_0x4f1499.data()));
      }, function (_0x3b5f91) {
        window.unityInstance.SendMessage(_0x10badd, _0x5eb91d, JSON.stringify(_0x3b5f91, Object.getOwnPropertyNames(_0x3b5f91)));
      });
    } catch (_0x32ee57) {
      window.unityInstance.SendMessage(_0x10badd, _0x5eb91d, JSON.stringify(_0x32ee57, Object.getOwnPropertyNames(_0x32ee57)));
    }
  }
  function _0x3f4ff1(_0x98a802, _0x20a0c1, _0xb025bf, _0x276013) {
    var _0x5765d4 = _0x5afdf8(_0x98a802);
    var _0xbbff0 = _0x5afdf8(_0x20a0c1);
    var _0x4eab36 = _0x5afdf8(_0xb025bf);
    var _0x5a2fa0 = _0x5afdf8(_0x276013);
    try {
      firebase.database().ref(_0x5765d4).on("value", function (_0x28991c) {
        window.unityInstance.SendMessage(_0xbbff0, _0x4eab36, JSON.stringify(_0x28991c.val()));
      });
    } catch (_0x33d3d5) {
      window.unityInstance.SendMessage(_0xbbff0, _0x5a2fa0, JSON.stringify(_0x33d3d5, Object.getOwnPropertyNames(_0x33d3d5)));
    }
  }
  function _0x462126(_0x55f35d) {
    var _0x43bb24 = _0x5afdf8(_0x55f35d);
    firebaseLogEvent(_0x43bb24);
  }
  function _0x1d951f(_0x2c64d3, _0x4e1e36) {
    var _0x16ef23 = _0x5afdf8(_0x2c64d3);
    var _0x20fffa = JSON.parse(_0x5afdf8(_0x4e1e36));
    firebaseLogEventParameter(_0x16ef23, _0x20fffa);
  }
  function _0x44aa4b(_0x2ac085, _0x523f37, _0x2cd623, _0x2ee8fa, _0x317aad) {
    var _0x5935ce = _0x5afdf8(_0x2ac085);
    var _0x4b8e7e = _0x5afdf8(_0x2cd623);
    var _0x333d11 = _0x5afdf8(_0x2ee8fa);
    var _0x40309d = _0x5afdf8(_0x317aad);
    try {
      firebase.database().ref(_0x5935ce).transaction(function (_0x1e8c69) {
        if (!isNaN(_0x1e8c69)) {
          return _0x1e8c69 + _0x523f37;
        } else {
          return _0x523f37;
        }
      }).then(function (_0x465841) {
        window.unityInstance.SendMessage(_0x4b8e7e, _0x333d11, "Success: transaction run in " + _0x5935ce);
      });
    } catch (_0x4fc9c7) {
      window.unityInstance.SendMessage(_0x4b8e7e, _0x40309d, JSON.stringify(_0x4fc9c7, Object.getOwnPropertyNames(_0x4fc9c7)));
    }
  }
  function _0x247f63(_0xdb5de0, _0x354e26, _0x1f716d) {
    var _0x2f2406 = _0x5afdf8(_0xdb5de0);
    var _0x4e692c = _0x5afdf8(_0x354e26);
    var _0x5656e8 = _0x5afdf8(_0x1f716d);
    firebase.auth().onAuthStateChanged(function (_0x2bb6f5) {
      if (_0x2bb6f5) {
        window.unityInstance.SendMessage(_0x2f2406, _0x4e692c, JSON.stringify(_0x2bb6f5));
      } else {
        window.unityInstance.SendMessage(_0x2f2406, _0x5656e8, "User signed out");
      }
    });
  }
  function _0x3278f3(_0x4ac854) {
    window.wgUnityInstance = _0x3255d0;
    try {
      window[preroll.config.loaderObjectName].log("WGSDK: WeeGoo InGame Ad, pinging.");
      window[preroll.config.loaderObjectName].ping(_0x4ac854);
    } catch (_0xc0f85f) {
      console.log("WGSDK: No production WGSDK resources found, loading development resources.");
      var _0x2cef5a = document.createElement("script");
      _0x2cef5a.addEventListener("load", function (_0x59bfdc) {
        var _0x369c64 = document.createElement("script");
        _0x369c64.addEventListener("load", function (_0x476741) {
          console.log("WGSDK: Development resources loaded.");
          _0x1f8f4c(_0x4ac854, true);
        }.bind(this));
        document.getElementsByTagName("head")[0].appendChild(_0x369c64);
        _0x369c64.src = window.GMSOFT_ADS_INFO.wgLibrary;
      }.bind(this));
      document.getElementsByTagName("head")[0].appendChild(_0x2cef5a);
      _0x2cef5a.src = window.GMSOFT_ADS_INFO.wgConf;
    }
  }
  function _0x1f8f4c(_0x532b55, _0x35570d) {
    var _0x5bb798;
    if (_0x35570d === true) {
      _0x5bb798 = _0x532b55;
    } else {
      _0x5bb798 = _0x5afdf8(_0x532b55);
    }
    setTimeout(function () {
      _0x3278f3(_0x5bb798);
    }, 250);
  }
  function _0xebc79(_0x1e1a32, _0x4e10b3, _0x4104ff, _0x2d0759, _0x4b599d) {
    var _0x536e57 = _0x5afdf8(_0x1e1a32);
    var _0x236618 = _0x5afdf8(_0x4e10b3);
    var _0x5a639b = _0x5afdf8(_0x4104ff);
    var _0x3d762a = _0x5afdf8(_0x2d0759);
    var _0x58c287 = _0x5afdf8(_0x4b599d);
    try {
      firebase.database().ref(_0x536e57).set(JSON.parse(_0x236618)).then(function (_0x1c95cc) {
        window.unityInstance.SendMessage(_0x5a639b, _0x3d762a, "Success: " + _0x236618 + " was posted to " + _0x536e57);
      });
    } catch (_0x250639) {
      window.unityInstance.SendMessage(_0x5a639b, _0x58c287, JSON.stringify(_0x250639, Object.getOwnPropertyNames(_0x250639)));
    }
  }
  function _0x4e9624(_0xf78827, _0x41e5b1, _0x41179e, _0x2c1764, _0x156d3c) {
    var _0x3128b1 = _0x5afdf8(_0xf78827);
    var _0x1ccc2f = _0x5afdf8(_0x41e5b1);
    var _0x1d93ca = _0x5afdf8(_0x41179e);
    var _0x52d9cf = _0x5afdf8(_0x2c1764);
    var _0x253267 = _0x5afdf8(_0x156d3c);
    try {
      firebase.database().ref(_0x3128b1).push().set(JSON.parse(_0x1ccc2f)).then(function (_0x25c591) {
        window.unityInstance.SendMessage(_0x1d93ca, _0x52d9cf, "Success: " + _0x1ccc2f + " was pushed to " + _0x3128b1);
      });
    } catch (_0x9b2ebc) {
      window.unityInstance.SendMessage(_0x1d93ca, _0x253267, JSON.stringify(_0x9b2ebc, Object.getOwnPropertyNames(_0x9b2ebc)));
    }
  }
  function _0x5e350d() {
    try {
      window[preroll.config.loaderObjectName].log("WGSDK: Refetching reward ad.");
      window[preroll.config.loaderObjectName].rewarded.initSlot.call(window[preroll.config.loaderObjectName]);
    } catch (_0x276597) {
      console.log("No WeeGooAFG implementation found!");
    }
  }
  function _0xb7456c() {
    try {
      window[preroll.config.loaderObjectName].log("WGSDK: Game controls registered.");
      window[window.preroll.config.loaderObjectName].registerGameControls(_0x3255d0);
    } catch (_0x4499ac) {
      console.log("WGSDK: Can not register game controls.");
      setTimeout(function () {
        _0xb7456c();
      }, 250);
    }
  }
  function _0x3748a6() {
    try {
      window[preroll.config.loaderObjectName].log("WGSDK: Reward callbacks registered.");
      window[window.preroll.config.loaderObjectName].registerRewardCallbacks({
        onReady: "OnReadyMethod",
        onSuccess: "OnSuccessMethod",
        onFail: "OnFailMethod"
      });
    } catch (_0x1cf2c6) {
      console.log("WGSDK: Can not register reward ad callbacks.");
      _0x3460dc();
    }
  }
  function _0x3460dc() {
    setTimeout(function () {
      _0x3748a6();
    }, 250);
  }
  function _0x180bf4(_0x14deb2, _0x445451, _0x4eeb57, _0x18a256, _0x78713d, _0x265550, _0x4a995e) {
    var _0x5b8e9d = _0x5afdf8(_0x14deb2);
    var _0x5d3ad9 = _0x5afdf8(_0x445451);
    var _0x26f620 = _0x5afdf8(_0x4eeb57);
    var _0x4b92d7 = _0x5afdf8(_0x18a256);
    var _0x502c5d = _0x5afdf8(_0x78713d);
    var _0x4b7b08 = _0x5afdf8(_0x265550);
    var _0x3e1c98 = _0x5afdf8(_0x4a995e);
    try {
      var _0x18a256 = {};
      _0x18a256[_0x26f620] = firebase.firestore.FieldValue.arrayRemove(JSON.parse(_0x4b92d7));
      firebase.firestore().collection(_0x5b8e9d).doc(_0x5d3ad9).update(_0x18a256).then(function () {
        window.unityInstance.SendMessage(_0x502c5d, _0x4b7b08, "Success: element " + _0x4b92d7 + " was removed in " + _0x26f620);
      }).catch(function (_0x1bc6c9) {
        window.unityInstance.SendMessage(_0x502c5d, _0x3e1c98, JSON.stringify(_0x1bc6c9, Object.getOwnPropertyNames(_0x1bc6c9)));
      });
    } catch (_0x25dc32) {
      window.unityInstance.SendMessage(_0x502c5d, _0x3e1c98, JSON.stringify(_0x25dc32, Object.getOwnPropertyNames(_0x25dc32)));
    }
  }
  function _0x5bffc3(_0x43c327) {
    var _0x4b67f7 = window.unityStringify(_0x43c327);
    var _0x3349aa = {
      adStarted: function () {
        window.UnitySDK.unlockPointer();
        _0x58847d("CrazySDKSingleton", "JSLibCallback_AdStarted");
      },
      adFinished: function () {
        window.UnitySDK.lockPointer();
        _0x58847d("CrazySDKSingleton", "JSLibCallback_AdFinished");
      },
      adError: function (_0x232daf) {
        _0x58847d("CrazySDKSingleton", "JSLibCallback_AdError", JSON.stringify(_0x232daf));
      }
    };
    window.CrazyGames.SDK.ad.requestAd(_0x4b67f7, _0x3349aa).catch(function (_0x17d367) {
      window.UnitySDK.logError("Error while requesting ad:", _0x17d367);
      _0x58847d("CrazySDKSingleton", "JSLibCallback_AdError", JSON.stringify({
        code: "unknown",
        message: _0x17d367.message || "Unknown error"
      }));
    });
  }
  function _0x425975(_0x16146b) {
    var _0x379ae8 = JSON.parse(window.unityStringify(_0x16146b));
    try {
      window.CrazyGames.SDK.banner.requestOverlayBanners(_0x379ae8, function (_0xcdcbb8, _0x161e96, _0x46b160) {});
    } catch (_0x404061) {
      window.UnitySDK.logError("Error while requesting banners:", _0x404061);
    }
  }
  function _0x5ceadc(_0x3bccbc) {
    var _0x34c1b0 = JSON.parse(window.unityStringify(_0x3bccbc));
    var _0x25687c = "";
    try {
      _0x25687c = window.CrazyGames.SDK.game.inviteLink(_0x34c1b0);
    } catch (_0x4e69f0) {
      window.UnitySDK.logError("Error while requesting invite url:", _0x4e69f0);
    }
    var _0x3d6d61 = _0x40d569(_0x25687c) + 1;
    var _0x579867 = _0x311afe(_0x3d6d61);
    _0x259c3d(_0x25687c, _0x579867, _0x3d6d61);
    return _0x579867;
  }
  function _0x3d1306(_0x61d047) {
    _0x61d047 = _0x5afdf8(_0x61d047);
    window.GD_OPTIONS = {
      debug: false,
      gameId: _0x61d047,
      onEvent: function (_0x10ab5c) {
        switch (_0x10ab5c.name) {
          case "SDK_GAME_START":
            _0x58847d("GameDistribution", "ResumeGameCallback");
            break;
          case "SDK_GAME_PAUSE":
            _0x58847d("GameDistribution", "PauseGameCallback");
            break;
          case "SDK_REWARDED_WATCH_COMPLETE":
            _0x58847d("GameDistribution", "RewardedCompleteCallback");
            break;
          case "SDK_ERROR":
            break;
          default:
            _0x58847d("GameDistribution", "EventCallback", _0x10ab5c.name);
        }
      }
    };
    (function (_0x559094, _0x5ba987, _0x173c3b) {
      var _0x418c3c;
      var _0x519ed9 = _0x559094.getElementsByTagName(_0x5ba987)[0];
      if (_0x559094.getElementById(_0x173c3b)) {
        return;
      }
      _0x418c3c = _0x559094.createElement(_0x5ba987);
      _0x418c3c.id = _0x173c3b;
      _0x418c3c.src = "//html5.api.gamedistribution.com/main.min.js";
      _0x519ed9.parentNode.insertBefore(_0x418c3c, _0x519ed9);
    })(document, "script", "gamedistribution-jssdk");
  }
  function _0x520a8d() {
    if (typeof gdsdk !== "undefined" && typeof gdsdk.preloadAd !== "undefined") {
      gdsdk.preloadAd(gdsdk.AdType.Rewarded).then(function (_0x390f90) {
        _0x58847d("GameDistribution", "PreloadRewardedVideoCallback", 1);
      }).catch(function (_0x2f024b) {
        _0x58847d("GameDistribution", "PreloadRewardedVideoCallback", 0);
      });
    }
  }
  function _0x22ec0a(_0x203545) {
    _0x203545 = _0x5afdf8(_0x203545);
    if (typeof gdsdk !== "undefined" && typeof gdsdk.sendEvent !== "undefined" && typeof _0x203545 !== "undefined") {
      gdsdk.sendEvent(_0x203545).then(function (_0x1a0b08) {
        console.log("Game event post message sent Succesfully...");
      }).catch(function (_0xc05a8c) {
        console.log(_0xc05a8c.message);
      });
    }
  }
  function _0x5cce38(_0x40e4c1) {
    if (typeof gdsdk !== "undefined" && typeof gdsdk.showAd !== "undefined") {
      _0x40e4c1 = _0x5afdf8(_0x40e4c1) || gdsdk.AdType.Interstitial;
      gdsdk.showAd(_0x40e4c1).then(function (_0x2872ef) {
        if (_0x40e4c1 === gdsdk.AdType.Rewarded) {
          _0x58847d("GameDistribution", "RewardedVideoSuccessCallback");
        }
      }).catch(function (_0x427904) {
        if (_0x40e4c1 === gdsdk.AdType.Rewarded) {
          _0x58847d("GameDistribution", "RewardedVideoFailureCallback");
        }
      });
    }
  }
  function _0x489024(_0x363473, _0x484837, _0x198e17, _0x403a33, _0x2402f7, _0x54ba04) {
    var _0x31fc29 = _0x5afdf8(_0x363473);
    var _0x1a7ced = _0x5afdf8(_0x484837);
    var _0x3b6c05 = _0x5afdf8(_0x198e17);
    var _0x41cdb4 = _0x5afdf8(_0x403a33);
    var _0x366b1c = _0x5afdf8(_0x2402f7);
    var _0x11462c = _0x5afdf8(_0x54ba04);
    try {
      firebase.firestore().collection(_0x31fc29).doc(_0x1a7ced).set(JSON.parse(_0x3b6c05)).then(function () {
        window.unityInstance.SendMessage(_0x41cdb4, _0x366b1c, "Success: document " + _0x1a7ced + " was set");
      }).catch(function (_0x45975b) {
        window.unityInstance.SendMessage(_0x41cdb4, _0x11462c, JSON.stringify(_0x45975b, Object.getOwnPropertyNames(_0x45975b)));
      });
    } catch (_0x5256cd) {
      window.unityInstance.SendMessage(_0x41cdb4, _0x11462c, JSON.stringify(_0x5256cd, Object.getOwnPropertyNames(_0x5256cd)));
    }
  }
  function _0x4bf9e2(_0xe655b) {
    var _0xbd998f = JSON.parse(_0x5afdf8(_0xe655b));
    firebaseSetUserProperties(_0xbd998f);
  }
  function _0x1c4d25() {
    window.CrazyGames.SDK.user.showAccountLinkPrompt().then(function (_0x1e588c) {
      _0x58847d("CrazySDKSingleton", "JSLibCallback_ShowAccountLinkPrompt", JSON.stringify({
        linkAccountResponseStr: JSON.stringify(_0x1e588c)
      }));
    }).catch(function (_0x16fdb9) {
      _0x58847d("CrazySDKSingleton", "JSLibCallback_ShowAccountLinkPrompt", JSON.stringify({
        errorJson: JSON.stringify(_0x16fdb9)
      }));
    });
  }
  function _0x4e783d() {
    window.CrazyGames.SDK.user.showAuthPrompt().then(function (_0x41df70) {
      _0x58847d("CrazySDKSingleton", "JSLibCallback_ShowAuthPrompt", JSON.stringify({
        userJson: JSON.stringify(_0x41df70)
      }));
    }).catch(function (_0x2ac604) {
      _0x58847d("CrazySDKSingleton", "JSLibCallback_ShowAuthPrompt", JSON.stringify({
        errorJson: JSON.stringify(_0x2ac604)
      }));
    });
  }
  function _0xe836eb(_0x541d8f) {
    var _0x4b9583 = JSON.parse(window.unityStringify(_0x541d8f));
    var _0x3ca9bc = "";
    try {
      _0x3ca9bc = window.CrazyGames.SDK.game.showInviteButton(_0x4b9583);
    } catch (_0x24d968) {
      window.UnitySDK.logError("Error while showing invite button:", _0x24d968);
    }
    var _0x5aa2e6 = _0x40d569(_0x3ca9bc) + 1;
    var _0x56fc22 = _0x311afe(_0x5aa2e6);
    _0x259c3d(_0x3ca9bc, _0x56fc22, _0x5aa2e6);
    return _0x56fc22;
  }
  function _0x2d36e7() {
    window[preroll.config.loaderObjectName].showRewardAd();
  }
  function _0x37e502(_0x429fb4, _0x5eb057, _0x3cc1a3) {
    var _0x5a7abf = _0x5afdf8(_0x429fb4);
    var _0x491d8b = _0x5afdf8(_0x5eb057);
    var _0x164de8 = _0x5afdf8(_0x3cc1a3);
    try {
      firebase.auth().signInAnonymously().then(function (_0x3cadbf) {
        window.unityInstance.SendMessage(_0x5a7abf, _0x491d8b, "Success: signed up for " + _0x3cadbf);
      }).catch(function (_0x55a84b) {
        window.unityInstance.SendMessage(_0x5a7abf, _0x164de8, JSON.stringify(_0x55a84b, Object.getOwnPropertyNames(_0x55a84b)));
      });
    } catch (_0x308fe8) {
      window.unityInstance.SendMessage(_0x5a7abf, _0x164de8, JSON.stringify(_0x308fe8, Object.getOwnPropertyNames(_0x308fe8)));
    }
  }
  function _0x442f9b(_0x1f875f, _0x29fecf, _0x3ba0a8, _0x348a92, _0x149b2c) {
    var _0x2a167a = _0x5afdf8(_0x1f875f);
    var _0x21d5ce = _0x5afdf8(_0x29fecf);
    var _0x3a35aa = _0x5afdf8(_0x3ba0a8);
    var _0x1f2c90 = _0x5afdf8(_0x348a92);
    var _0x4dea3c = _0x5afdf8(_0x149b2c);
    try {
      firebase.auth().signInWithEmailAndPassword(_0x2a167a, _0x21d5ce).then(function (_0x35c860) {
        window.unityInstance.SendMessage(_0x3a35aa, _0x1f2c90, "Success: signed in for " + _0x2a167a);
      }).catch(function (_0x4e1427) {
        window.unityInstance.SendMessage(_0x3a35aa, _0x4dea3c, JSON.stringify(_0x4e1427, Object.getOwnPropertyNames(_0x4e1427)));
      });
    } catch (_0x4b7572) {
      window.unityInstance.SendMessage(_0x3a35aa, _0x4dea3c, JSON.stringify(_0x4b7572, Object.getOwnPropertyNames(_0x4b7572)));
    }
  }
  function _0x3a229b(_0x597645, _0x3bf9e0, _0x523ab4) {
    var _0x105b8b = _0x5afdf8(_0x597645);
    var _0x51a0aa = _0x5afdf8(_0x3bf9e0);
    var _0x2884f7 = _0x5afdf8(_0x523ab4);
    try {
      var _0x213f02 = new firebase.auth.FacebookAuthProvider();
      firebase.auth().signInWithRedirect(_0x213f02).then(function (_0x138266) {
        window.unityInstance.SendMessage(_0x105b8b, _0x51a0aa, "Success: signed in with Facebook!");
      }).catch(function (_0x33ead0) {
        window.unityInstance.SendMessage(_0x105b8b, _0x2884f7, JSON.stringify(_0x33ead0, Object.getOwnPropertyNames(_0x33ead0)));
      });
    } catch (_0x9d568b) {
      window.unityInstance.SendMessage(_0x105b8b, _0x2884f7, JSON.stringify(_0x9d568b, Object.getOwnPropertyNames(_0x9d568b)));
    }
  }
  function _0x2ca129(_0x13de00, _0x1fda0a, _0x42e8e7) {
    var _0x1ea642 = _0x5afdf8(_0x13de00);
    var _0x2e64cc = _0x5afdf8(_0x1fda0a);
    var _0x119f4b = _0x5afdf8(_0x42e8e7);
    try {
      var _0x23890f = new firebase.auth.GoogleAuthProvider();
      firebase.auth().signInWithRedirect(_0x23890f).then(function (_0x1c0a16) {
        window.unityInstance.SendMessage(_0x1ea642, _0x2e64cc, "Success: signed in with Google!");
      }).catch(function (_0x3b5dfd) {
        window.unityInstance.SendMessage(_0x1ea642, _0x119f4b, JSON.stringify(_0x3b5dfd, Object.getOwnPropertyNames(_0x3b5dfd)));
      });
    } catch (_0x6cce94) {
      window.unityInstance.SendMessage(_0x1ea642, _0x119f4b, JSON.stringify(_0x6cce94, Object.getOwnPropertyNames(_0x6cce94)));
    }
  }
  function _0x4518a2(_0x3bec11, _0xd9924, _0x5a56b5, _0x1d78db) {
    var _0x159ad8 = _0x5afdf8(_0x3bec11);
    var _0xc3aa88 = _0x5afdf8(_0xd9924);
    var _0xbc06f = _0x5afdf8(_0x5a56b5);
    var _0xc92cfc = _0x5afdf8(_0x1d78db);
    try {
      firebase.database().ref(_0x159ad8).off("child_added");
      window.unityInstance.SendMessage(_0xc3aa88, _0xbc06f, "Success: listener removed");
    } catch (_0x34c4b5) {
      window.unityInstance.SendMessage(_0xc3aa88, _0xc92cfc, JSON.stringify(_0x34c4b5, Object.getOwnPropertyNames(_0x34c4b5)));
    }
  }
  function _0x3449ea(_0x2370dc, _0x45a9c0, _0x6960bb, _0x4146e2) {
    var _0x34394e = _0x5afdf8(_0x2370dc);
    var _0x42178c = _0x5afdf8(_0x45a9c0);
    var _0x15573f = _0x5afdf8(_0x6960bb);
    var _0xffb398 = _0x5afdf8(_0x4146e2);
    try {
      firebase.database().ref(_0x34394e).off("child_changed");
      window.unityInstance.SendMessage(_0x42178c, _0x15573f, "Success: listener removed");
    } catch (_0xd27bae) {
      window.unityInstance.SendMessage(_0x42178c, _0xffb398, JSON.stringify(_0xd27bae, Object.getOwnPropertyNames(_0xd27bae)));
    }
  }
  function _0x4fffdf(_0x54b82f, _0x21c524, _0x5e5080, _0x2f09aa) {
    var _0x20956f = _0x5afdf8(_0x54b82f);
    var _0x519940 = _0x5afdf8(_0x21c524);
    var _0x196db5 = _0x5afdf8(_0x5e5080);
    var _0x2d34f8 = _0x5afdf8(_0x2f09aa);
    try {
      firebase.database().ref(_0x20956f).off("child_removed");
      window.unityInstance.SendMessage(_0x519940, _0x196db5, "Success: listener removed");
    } catch (_0xac5456) {
      window.unityInstance.SendMessage(_0x519940, _0x2d34f8, JSON.stringify(_0xac5456, Object.getOwnPropertyNames(_0xac5456)));
    }
  }
  function _0x4d657c(_0x31f071, _0xe7b30e, _0x2daa1f, _0x2d190c) {
    var _0x496873 = _0x5afdf8(_0x31f071);
    var _0x132ef1 = _0x5afdf8(_0xe7b30e);
    var _0x39d983 = _0x5afdf8(_0x2daa1f);
    var _0x59ed6a = _0x5afdf8(_0x2d190c);
    try {
      if (typeof firestorelisteners === "undefined") {
        firestorelisteners = {};
      }
      this.firestorelisteners[_0x496873 + "/collection/"]();
      window.unityInstance.SendMessage(_0x132ef1, _0x39d983, "Success: listener was removed");
    } catch (_0x3fe353) {
      window.unityInstance.SendMessage(_0x132ef1, _0x59ed6a, JSON.stringify(_0x3fe353, Object.getOwnPropertyNames(_0x3fe353)));
    }
  }
  function _0x4408b6(_0x25137b, _0x15cc96, _0x1ae37f, _0x1fecc8, _0x2f21cc) {
    var _0x3a3d13 = _0x5afdf8(_0x25137b);
    var _0xf59583 = _0x5afdf8(_0x15cc96);
    var _0x5ab475 = _0x5afdf8(_0x1ae37f);
    var _0x5ee941 = _0x5afdf8(_0x1fecc8);
    var _0x43725d = _0x5afdf8(_0x2f21cc);
    try {
      if (typeof firestorelisteners === "undefined") {
        firestorelisteners = {};
      }
      this.firestorelisteners[_0x3a3d13 + "/" + _0xf59583]();
      window.unityInstance.SendMessage(_0x5ab475, _0x5ee941, "Success: listener was removed");
    } catch (_0x11619b) {
      window.unityInstance.SendMessage(_0x5ab475, _0x43725d, JSON.stringify(_0x11619b, Object.getOwnPropertyNames(_0x11619b)));
    }
  }
  function _0x171dec(_0x5eb645, _0x5a6a59, _0x6e4b, _0x41809c) {
    var _0x38c2ee = _0x5afdf8(_0x5eb645);
    var _0x520eff = _0x5afdf8(_0x5a6a59);
    var _0x3b6629 = _0x5afdf8(_0x6e4b);
    var _0x2791a6 = _0x5afdf8(_0x41809c);
    try {
      firebase.database().ref(_0x38c2ee).off("value");
      window.unityInstance.SendMessage(_0x520eff, _0x3b6629, "Success: listener removed");
    } catch (_0x5edaf5) {
      window.unityInstance.SendMessage(_0x520eff, _0x2791a6, JSON.stringify(_0x5edaf5, Object.getOwnPropertyNames(_0x5edaf5)));
    }
  }
  function _0x14c363() {
    try {
      window.CrazyGames.SDK.data.syncUnityGameData();
    } catch (_0x38080e) {
      window.UnitySDK.logError("Error while calling syncUnityGameData:", _0x38080e);
    }
  }
  function _0x220238(_0x167064, _0x485e77, _0x11f0f5, _0x482a5a) {
    var _0x398c60 = _0x5afdf8(_0x167064);
    var _0x537c7c = _0x5afdf8(_0x485e77);
    var _0x4b2ae3 = _0x5afdf8(_0x11f0f5);
    var _0x2029bc = _0x5afdf8(_0x482a5a);
    try {
      firebase.database().ref(_0x398c60).transaction(function (_0x2c5875) {
        if (typeof _0x2c5875 === "boolean") {
          return !_0x2c5875;
        } else {
          return true;
        }
      }).then(function (_0x29e762) {
        window.unityInstance.SendMessage(_0x537c7c, _0x4b2ae3, "Success: transaction run in " + _0x398c60);
      });
    } catch (_0x1d6826) {
      window.unityInstance.SendMessage(_0x537c7c, _0x2029bc, JSON.stringify(_0x1d6826, Object.getOwnPropertyNames(_0x1d6826)));
    }
  }
  function _0x2edd0d(_0x34d046, _0x58f8d4, _0x24d25b, _0x175cf8, _0x15f093, _0x1bbb8f) {
    var _0x2ce66f = _0x5afdf8(_0x34d046);
    var _0x5e2d13 = _0x5afdf8(_0x58f8d4);
    var _0x52cf1f = _0x5afdf8(_0x24d25b);
    var _0x3b3ce1 = _0x5afdf8(_0x175cf8);
    var _0x511eb4 = _0x5afdf8(_0x15f093);
    var _0x1a0156 = _0x5afdf8(_0x1bbb8f);
    try {
      firebase.firestore().collection(_0x2ce66f).doc(_0x5e2d13).update(JSON.parse(_0x52cf1f)).then(function () {
        window.unityInstance.SendMessage(_0x3b3ce1, _0x511eb4, "Success: document " + _0x5e2d13 + " was updated");
      }).catch(function (_0x26e6f5) {
        window.unityInstance.SendMessage(_0x3b3ce1, _0x1a0156, JSON.stringify(_0x26e6f5, Object.getOwnPropertyNames(_0x26e6f5)));
      });
    } catch (_0x29942d) {
      window.unityInstance.SendMessage(_0x3b3ce1, _0x1a0156, JSON.stringify(_0x29942d, Object.getOwnPropertyNames(_0x29942d)));
    }
  }
  function _0x8e14fb(_0x309633, _0x4474fa, _0xd3d4ae, _0x212e2f, _0x3622c9) {
    var _0x403b29 = _0x5afdf8(_0x309633);
    var _0x2bd95f = _0x5afdf8(_0x4474fa);
    var _0x28986b = _0x5afdf8(_0xd3d4ae);
    var _0x1ddec2 = _0x5afdf8(_0x212e2f);
    var _0x2f40bc = _0x5afdf8(_0x3622c9);
    try {
      firebase.database().ref(_0x403b29).update(JSON.parse(_0x2bd95f)).then(function (_0x2c27fa) {
        window.unityInstance.SendMessage(_0x28986b, _0x1ddec2, "Success: " + _0x2bd95f + " was updated in " + _0x403b29);
      });
    } catch (_0x51e183) {
      window.unityInstance.SendMessage(_0x28986b, _0x2f40bc, JSON.stringify(_0x51e183, Object.getOwnPropertyNames(_0x51e183)));
    }
  }
  function _0x2d97a8(_0x46bba4, _0x2fb66a, _0xf9f8c7, _0x34a1a2, _0x350e3f) {
    var _0x50cdf7 = _0x5afdf8(_0x46bba4);
    var _0x5c0ed6 = _0x5afdf8(_0x2fb66a);
    var _0x1305bf = _0x5afdf8(_0xf9f8c7);
    var _0x1dbe4d = _0x5afdf8(_0x34a1a2);
    var _0x3961e0 = _0x5afdf8(_0x350e3f);
    try {
      firebase.storage().ref(_0x50cdf7).put(_0xb7d4a6(_0x5c0ed6)).then(function (_0x446079) {
        window.unityInstance.SendMessage(_0x1305bf, _0x1dbe4d, "Success: data was posted to " + _0x50cdf7);
      });
    } catch (_0x508f88) {
      window.unityInstance.SendMessage(_0x1305bf, _0x3961e0, JSON.stringify(_0x508f88, Object.getOwnPropertyNames(_0x508f88)));
    }
    function _0xb7d4a6(_0xdb9bca) {
      var _0x306cbe = window.atob(_0xdb9bca);
      var _0x2ce0fe = _0x306cbe.length;
      var _0x1d2758 = new Uint8Array(_0x2ce0fe);
      for (var _0x5b8967 = 0; _0x5b8967 < _0x2ce0fe; _0x5b8967++) {
        _0x1d2758[_0x5b8967] = _0x306cbe.charCodeAt(_0x5b8967);
      }
      return _0x1d2758.buffer;
    }
  }
  var _0x544c39 = {
    requestInstances: {},
    nextRequestId: 1,
    loglevel: 2,
    SendTextToCSharpSide: function (_0x2c3176, _0x4e2d72, _0x39be5f) {
      const _0x42df33 = new TextEncoder();
      const _0x5d9c32 = _0x42df33.encode(_0x39be5f);
      const _0x3a347d = function (_0x28af68, _0x237000) {
        return _0x46e645.apply(null, [_0x544c39.onallocbuffer, _0x28af68, _0x237000]);
      }(_0x2c3176, _0x5d9c32.length);
      _0x10abe1.set(_0x5d9c32, _0x3a347d);
      (function (_0x2de9f8, _0x9902ae, _0x53275b) {
        _0x569696.apply(null, [_0x4e2d72, _0x2de9f8, _0x9902ae, _0x53275b]);
      })(_0x2c3176, _0x3a347d, _0x5d9c32.length);
    },
    GetResponseHeaders: function (_0x46e575, _0x2ee417) {
      if (_0x544c39.loglevel <= 1) {
        console.log("GetResponseHeaders(" + _0x46e575 + ")");
      }
      var _0x5c886f = "";
      if (document && document.cookie) {
        var _0x1853e1 = document.cookie.split(";");
        for (var _0xe2c6d1 = 0; _0xe2c6d1 < _0x1853e1.length; ++_0xe2c6d1) {
          const _0x56e844 = _0x1853e1[_0xe2c6d1].trim();
          if (_0x56e844.length > 0) {
            _0x5c886f += "Set-Cookie:" + _0x56e844 + "\n";
          }
        }
      }
      const _0x2492b0 = _0x544c39.requestInstances[_0x46e575].getAllResponseHeaders().trim().split(/[\r\n]+/);
      _0x2492b0.forEach(_0x50223e => {
        const _0x4e92c3 = _0x50223e.split(": ");
        const _0x1af5c2 = _0x4e92c3.shift();
        const _0x527826 = _0x4e92c3.join(": ");
        if (_0x1af5c2 !== "content-length") {
          _0x5c886f += _0x1af5c2 + ":" + _0x527826 + "\n";
        }
      });
      _0x544c39.SendTextToCSharpSide(_0x46e575, _0x2ee417, _0x5c886f);
    }
  };
  function _0x5df1fb(_0x3b6a92) {
    if (_0x544c39.loglevel <= 1) {
      console.log("XHR_Abort(" + _0x3b6a92 + ")");
    }
    _0x544c39.requestInstances[_0x3b6a92].abort();
  }
  function _0x1ba1f3(_0x48a58f, _0x2c492b, _0x6f6325, _0x34d00f, _0x3f16d8) {
    var _0x5ddc87 = new URL(_0x5afdf8(_0x2c492b));
    var _0x545e9c = _0x5afdf8(_0x48a58f);
    if (_0x544c39.loglevel <= 1) {
      console.log("XHR_Create (" + _0x544c39.nextRequestId + ", " + _0x545e9c + ", " + _0x5ddc87.toString() + ", " + _0x3f16d8 + ")");
    }
    var _0x3c9097 = new XMLHttpRequest();
    if (_0x6f6325 && _0x34d00f) {
      var _0x1110f3 = _0x5afdf8(_0x6f6325);
      var _0x348328 = _0x5afdf8(_0x34d00f);
      _0x3c9097.withCredentials = true;
      _0x3c9097.open(_0x545e9c, _0x5ddc87.toString(), true, _0x1110f3, _0x348328);
    } else {
      _0x3c9097.withCredentials = _0x3f16d8;
      _0x3c9097.open(_0x545e9c, _0x5ddc87.toString(), true);
    }
    _0x3c9097.responseType = "arraybuffer";
    _0x544c39.requestInstances[_0x544c39.nextRequestId] = _0x3c9097;
    return _0x544c39.nextRequestId++;
  }
  function _0x5f4b79(_0x4ec2a9) {
    if (_0x544c39.loglevel <= 1) {
      console.log("XHR_Release(" + _0x4ec2a9 + ")");
    }
    delete _0x544c39.requestInstances[_0x4ec2a9];
  }
  function _0x2858d4(_0x1346a2, _0x406aaa, _0x3c21c5) {
    if (_0x544c39.loglevel <= 1) {
      console.log("XHR_Send(" + _0x1346a2 + ", " + _0x406aaa + ", " + _0x3c21c5 + ")");
    }
    var _0xe40775 = _0x544c39.requestInstances[_0x1346a2];
    try {
      if (_0x3c21c5 > 0) {
        _0xe40775.send(_0x10abe1.subarray(_0x406aaa, _0x406aaa + _0x3c21c5));
      } else {
        _0xe40775.send();
      }
    } catch (_0x3ac2af) {
      if (_0x544c39.loglevel <= 4) {
        console.error("XHR_Send(" + _0x1346a2 + "): " + _0x3ac2af.name + " : " + _0x3ac2af.message);
      }
    }
  }
  function _0x190b11(_0x46e083) {
    _0x544c39.loglevel = _0x46e083;
  }
  function _0x39a5f0(_0x13ed1b, _0x3c4183, _0x25deb5) {
    if (_0x544c39.loglevel <= 1) {
      console.log("XHR_SetProgressHandler(" + _0x13ed1b + ")");
    }
    var _0x1c013e = _0x544c39.requestInstances[_0x13ed1b];
    if (_0x1c013e) {
      if (_0x3c4183) {
        _0x1c013e.onprogress = function _0x21cb09(_0x256dfe) {
          if (_0x544c39.loglevel <= 1) {
            console.log("XHR_SetProgressHandler download(" + _0x13ed1b + ", " + _0x256dfe.loaded + ", " + _0x256dfe.total + ")");
          }
          if (_0x256dfe.lengthComputable) {
            (function (_0x2a3daf, _0x2947b1, _0x6072f1) {
              _0x569696.apply(null, [_0x3c4183, _0x2a3daf, _0x2947b1, _0x6072f1]);
            })(_0x13ed1b, _0x256dfe.loaded, _0x256dfe.total);
          }
        };
      }
      if (_0x25deb5) {
        _0x1c013e.upload.addEventListener("progress", function _0x522715(_0x46ed54) {
          if (_0x544c39.loglevel <= 1) {
            console.log("XHR_SetProgressHandler upload(" + _0x13ed1b + ", " + _0x46ed54.loaded + ", " + _0x46ed54.total + ")");
          }
          if (_0x46ed54.lengthComputable) {
            (function (_0x50c0cc, _0x579b2a, _0x12320d) {
              _0x569696.apply(null, [_0x25deb5, _0x50c0cc, _0x579b2a, _0x12320d]);
            })(_0x13ed1b, _0x46ed54.loaded, _0x46ed54.total);
          }
        }, true);
      }
    }
  }
  function _0x17150a(_0x39699d, _0x10a300, _0x5d0415) {
    var _0x13158f = _0x5afdf8(_0x10a300);
    var _0x29e8db = _0x5afdf8(_0x5d0415);
    if (_0x544c39.loglevel <= 1) {
      console.log("XHR_SetRequestHeader(" + _0x13158f + ", " + _0x29e8db + ")");
    }
    if (_0x13158f != "Cookie") {
      _0x544c39.requestInstances[_0x39699d].setRequestHeader(_0x13158f, _0x29e8db);
    } else {
      var _0x51f4a8 = _0x29e8db.split(";");
      for (var _0x84d36a = 0; _0x84d36a < _0x51f4a8.length; _0x84d36a++) {
        document.cookie = _0x51f4a8[_0x84d36a];
      }
    }
  }
  function _0x155e4b(_0x1317b8, _0x26b8c5, _0x30e6cb, _0x5477b1, _0x1d9c67, _0x435880, _0xde932) {
    if (_0x544c39.loglevel <= 1) {
      console.log("XHR_SetResponseHandler(" + _0x1317b8 + ")");
    }
    _0x544c39.onallocbuffer = _0xde932;
    var _0xe46df3 = _0x544c39.requestInstances[_0x1317b8];
    _0xe46df3.onreadystatechange = _0x5cc321 => {
      if (_0x544c39.loglevel <= 1) {
        console.log(_0x1317b8 + " onreadystatechange(" + _0xe46df3.readyState + ")");
      }
      switch (_0xe46df3.readyState) {
        case XMLHttpRequest.UNSENT:
          break;
        case XMLHttpRequest.OPENED:
          break;
        case XMLHttpRequest.HEADERS_RECEIVED:
          {
            _0x544c39.SendTextToCSharpSide(_0x1317b8, _0x435880, "HTTP/1.1 " + _0xe46df3.status + " " + _0xe46df3.statusText + "\n");
            _0x544c39.GetResponseHeaders(_0x1317b8, _0x435880);
            break;
          }
        case XMLHttpRequest.LOADING:
          break;
        case XMLHttpRequest.DONE:
          break;
      }
    };
    _0xe46df3.onloadstart = _0x1058f2 => {
      if (_0x544c39.loglevel <= 1) {
        console.log(_0x1317b8 + " onloadstart: " + _0x1058f2);
      }
    };
    _0xe46df3.onload = function _0x47b1aa(_0xb64b06) {
      if (_0x544c39.loglevel <= 1) {
        console.log(_0x1317b8 + " onload(" + _0xe46df3.status + ", " + _0xe46df3.statusText + ")");
      }
      if (_0x26b8c5) {
        var _0x554479 = 0;
        var _0x582163 = 0;
        if (_0xe46df3.response) {
          var _0x264fbf = _0xe46df3.response;
          _0x554479 = _0x264fbf.byteLength;
          _0x544c39.SendTextToCSharpSide(_0x1317b8, _0x435880, "content-length:" + _0x554479 + "\n\n");
          _0x582163 = function (_0x56dfae, _0x32f822) {
            return _0x46e645.apply(null, [_0xde932, _0x56dfae, _0x32f822]);
          }(_0x1317b8, _0x554479);
          var _0x448329 = new Uint8Array(_0x264fbf);
          var _0x4f9de6 = _0x10abe1.subarray(_0x582163, _0x582163 + _0x554479);
          _0x4f9de6.set(_0x448329);
        } else {
          _0x544c39.SendTextToCSharpSide(_0x1317b8, _0x435880, "content-length:0\n\n");
        }
        (function (_0x2a1350, _0xccb746, _0x203acb) {
          _0x569696.apply(null, [_0x26b8c5, _0x2a1350, _0xccb746, _0x203acb]);
        })(_0x1317b8, _0x582163, _0x554479);
      }
    };
    if (_0x30e6cb) {
      _0xe46df3.onerror = function _0x4b8ef7(_0x58e9c7) {
        function _0x417872(_0x620cae) {
          var _0x25d66d = _0x40d569(_0x620cae) + 1;
          var _0x41012c = _0x311afe(_0x25d66d);
          _0x333663(_0x620cae, _0x10abe1, _0x41012c, _0x25d66d);
          (function (_0x37d4f6, _0x4db706) {
            _0x419aa5.apply(null, [_0x30e6cb, _0x37d4f6, _0x4db706]);
          })(_0x1317b8, _0x41012c);
          _0x4200b9(_0x41012c);
        }
        if (_0x58e9c7.error) {
          _0x417872(_0x58e9c7.error);
        } else {
          _0x417872("Unknown Error! Maybe a CORS porblem?");
        }
      };
    }
    if (_0x5477b1) {
      _0xe46df3.ontimeout = function _0xba8531(_0x49f2c9) {
        (function (_0x106285) {
          _0x3c98fd.apply(null, [_0x5477b1, _0x106285]);
        })(_0x1317b8);
      };
    }
    if (_0x1d9c67) {
      _0xe46df3.onabort = function _0x12300a(_0x47d616) {
        (function (_0x47e650) {
          _0x3c98fd.apply(null, [_0x1d9c67, _0x47e650]);
        })(_0x1317b8);
      };
    }
  }
  function _0x4d3c33(_0x1cffb9, _0x5e2e2a) {
    if (_0x544c39.loglevel <= 1) {
      console.log("XHR_SetTimeout(" + _0x1cffb9 + ", " + _0x5e2e2a + ")");
    }
    _0x544c39.requestInstances[_0x1cffb9].timeout = _0x5e2e2a;
  }
  var _0x490e85 = {
    DESTRUCTOR_OFFSET: 0,
    REFCOUNT_OFFSET: 4,
    TYPE_OFFSET: 8,
    CAUGHT_OFFSET: 12,
    RETHROWN_OFFSET: 13,
    SIZE: 16
  };
  function _0x35e317(_0x222511) {
    return _0x311afe(_0x222511 + _0x490e85.SIZE) + _0x490e85.SIZE;
  }
  function _0x5f184b(_0x5f374e) {
    this.excPtr = _0x5f374e;
    this.ptr = _0x5f374e - _0x490e85.SIZE;
    this.set_type = function (_0x51b08b) {
      _0x3ea6c9[this.ptr + _0x490e85.TYPE_OFFSET >> 2] = _0x51b08b;
    };
    this.get_type = function () {
      return _0x3ea6c9[this.ptr + _0x490e85.TYPE_OFFSET >> 2];
    };
    this.set_destructor = function (_0x1bf374) {
      _0x3ea6c9[this.ptr + _0x490e85.DESTRUCTOR_OFFSET >> 2] = _0x1bf374;
    };
    this.get_destructor = function () {
      return _0x3ea6c9[this.ptr + _0x490e85.DESTRUCTOR_OFFSET >> 2];
    };
    this.set_refcount = function (_0x5d5d16) {
      _0x3ea6c9[this.ptr + _0x490e85.REFCOUNT_OFFSET >> 2] = _0x5d5d16;
    };
    this.set_caught = function (_0x5de41b) {
      _0x5de41b = _0x5de41b ? 1 : 0;
      _0x410af5[this.ptr + _0x490e85.CAUGHT_OFFSET >> 0] = _0x5de41b;
    };
    this.get_caught = function () {
      return _0x410af5[this.ptr + _0x490e85.CAUGHT_OFFSET >> 0] != 0;
    };
    this.set_rethrown = function (_0x5e15ae) {
      _0x5e15ae = _0x5e15ae ? 1 : 0;
      _0x410af5[this.ptr + _0x490e85.RETHROWN_OFFSET >> 0] = _0x5e15ae;
    };
    this.get_rethrown = function () {
      return _0x410af5[this.ptr + _0x490e85.RETHROWN_OFFSET >> 0] != 0;
    };
    this.init = function (_0x3bd0ff, _0x54bf9f) {
      this.set_type(_0x3bd0ff);
      this.set_destructor(_0x54bf9f);
      this.set_refcount(0);
      this.set_caught(false);
      this.set_rethrown(false);
    };
    this.add_ref = function () {
      var _0x3b5971 = _0x3ea6c9[this.ptr + _0x490e85.REFCOUNT_OFFSET >> 2];
      _0x3ea6c9[this.ptr + _0x490e85.REFCOUNT_OFFSET >> 2] = _0x3b5971 + 1;
    };
    this.release_ref = function () {
      var _0x32e57e = _0x3ea6c9[this.ptr + _0x490e85.REFCOUNT_OFFSET >> 2];
      _0x3ea6c9[this.ptr + _0x490e85.REFCOUNT_OFFSET >> 2] = _0x32e57e - 1;
      return _0x32e57e === 1;
    };
  }
  function _0x1eb09a(_0x1deb12) {
    this.free = function () {
      _0x4200b9(this.ptr);
      this.ptr = 0;
    };
    this.set_base_ptr = function (_0x4b196b) {
      _0x3ea6c9[this.ptr >> 2] = _0x4b196b;
    };
    this.get_base_ptr = function () {
      return _0x3ea6c9[this.ptr >> 2];
    };
    this.set_adjusted_ptr = function (_0x3c859a) {
      var _0x3f9f91 = 4;
      _0x3ea6c9[this.ptr + _0x3f9f91 >> 2] = _0x3c859a;
    };
    this.get_adjusted_ptr = function () {
      var _0x3c5c5f = 4;
      return _0x3ea6c9[this.ptr + _0x3c5c5f >> 2];
    };
    this.get_exception_ptr = function () {
      var _0xd16416 = _0x3c18f7(this.get_exception_info().get_type());
      if (_0xd16416) {
        return _0x3ea6c9[this.get_base_ptr() >> 2];
      }
      var _0x2b3aa1 = this.get_adjusted_ptr();
      if (_0x2b3aa1 !== 0) {
        return _0x2b3aa1;
      }
      return this.get_base_ptr();
    };
    this.get_exception_info = function () {
      return new _0x5f184b(this.get_base_ptr());
    };
    if (_0x1deb12 === undefined) {
      this.ptr = _0x311afe(8);
      this.set_adjusted_ptr(0);
    } else {
      this.ptr = _0x1deb12;
    }
  }
  var _0xf9d797 = [];
  function _0x1dcf9d(_0x2ce19e) {
    _0x2ce19e.add_ref();
  }
  var _0x12a781 = 0;
  function _0x5f281f(_0x23ae19) {
    var _0x5470cd = new _0x1eb09a(_0x23ae19);
    var _0x40f5ab = _0x5470cd.get_exception_info();
    if (!_0x40f5ab.get_caught()) {
      _0x40f5ab.set_caught(true);
      _0x12a781--;
    }
    _0x40f5ab.set_rethrown(false);
    _0xf9d797.push(_0x5470cd);
    _0x1dcf9d(_0x40f5ab);
    return _0x5470cd.get_exception_ptr();
  }
  var _0x1d8922 = 0;
  function _0xfe0447(_0x2b9337) {
    return _0x4200b9(new _0x5f184b(_0x2b9337).ptr);
  }
  function _0x512673(_0x46ce99) {
    if (_0x46ce99.release_ref() && !_0x46ce99.get_rethrown()) {
      var _0x3626d3 = _0x46ce99.get_destructor();
      if (_0x3626d3) {
        (function (_0x45c0a5) {
          return _0xd6a478.apply(null, [_0x3626d3, _0x45c0a5]);
        })(_0x46ce99.excPtr);
      }
      _0xfe0447(_0x46ce99.excPtr);
    }
  }
  function _0x400a04() {
    _0x5b12b4(0);
    var _0x358f25 = _0xf9d797.pop();
    _0x512673(_0x358f25.get_exception_info());
    _0x358f25.free();
    _0x1d8922 = 0;
  }
  function _0x48df4e(_0x4dcce7) {
    var _0x4c82f7 = new _0x1eb09a(_0x4dcce7);
    var _0xd88c3b = _0x4c82f7.get_base_ptr();
    if (!_0x1d8922) {
      _0x1d8922 = _0xd88c3b;
    }
    _0x4c82f7.free();
    throw _0xd88c3b;
  }
  function _0x49cb97() {
    var _0x3ba962 = _0x1d8922;
    if (!_0x3ba962) {
      _0x21abc3(0);
      return 0;
    }
    var _0x165614 = new _0x5f184b(_0x3ba962);
    var _0x3dc278 = _0x165614.get_type();
    var _0x2a1499 = new _0x1eb09a();
    _0x2a1499.set_base_ptr(_0x3ba962);
    if (!_0x3dc278) {
      _0x21abc3(0);
      return _0x2a1499.ptr | 0;
    }
    var _0x2716ff = Array.prototype.slice.call(arguments);
    var _0x49b468 = _0x1d6208();
    var _0x2e7ca4 = _0xf2adf5(4);
    _0x3ea6c9[_0x2e7ca4 >> 2] = _0x3ba962;
    for (var _0x214541 = 0; _0x214541 < _0x2716ff.length; _0x214541++) {
      var _0x2dd683 = _0x2716ff[_0x214541];
      if (_0x2dd683 === 0 || _0x2dd683 === _0x3dc278) {
        break;
      }
      if (_0x5832c0(_0x2dd683, _0x3dc278, _0x2e7ca4)) {
        var _0x51efe9 = _0x3ea6c9[_0x2e7ca4 >> 2];
        if (_0x3ba962 !== _0x51efe9) {
          _0x2a1499.set_adjusted_ptr(_0x51efe9);
        }
        _0x21abc3(_0x2dd683);
        return _0x2a1499.ptr | 0;
      }
    }
    _0xe462e3(_0x49b468);
    _0x21abc3(_0x3dc278);
    return _0x2a1499.ptr | 0;
  }
  function _0x5d234d() {
    var _0x1fd8a1 = _0x1d8922;
    if (!_0x1fd8a1) {
      _0x21abc3(0);
      return 0;
    }
    var _0x1264ed = new _0x5f184b(_0x1fd8a1);
    var _0x4f5ca1 = _0x1264ed.get_type();
    var _0x389854 = new _0x1eb09a();
    _0x389854.set_base_ptr(_0x1fd8a1);
    if (!_0x4f5ca1) {
      _0x21abc3(0);
      return _0x389854.ptr | 0;
    }
    var _0x329e66 = Array.prototype.slice.call(arguments);
    var _0xb11065 = _0x1d6208();
    var _0x4fde92 = _0xf2adf5(4);
    _0x3ea6c9[_0x4fde92 >> 2] = _0x1fd8a1;
    for (var _0x519d2c = 0; _0x519d2c < _0x329e66.length; _0x519d2c++) {
      var _0x444728 = _0x329e66[_0x519d2c];
      if (_0x444728 === 0 || _0x444728 === _0x4f5ca1) {
        break;
      }
      if (_0x5832c0(_0x444728, _0x4f5ca1, _0x4fde92)) {
        var _0x541bf1 = _0x3ea6c9[_0x4fde92 >> 2];
        if (_0x1fd8a1 !== _0x541bf1) {
          _0x389854.set_adjusted_ptr(_0x541bf1);
        }
        _0x21abc3(_0x444728);
        return _0x389854.ptr | 0;
      }
    }
    _0xe462e3(_0xb11065);
    _0x21abc3(_0x4f5ca1);
    return _0x389854.ptr | 0;
  }
  function _0xfe28a3() {
    var _0x19073f = _0x1d8922;
    if (!_0x19073f) {
      _0x21abc3(0);
      return 0;
    }
    var _0x1b727a = new _0x5f184b(_0x19073f);
    var _0x36d9ae = _0x1b727a.get_type();
    var _0x26e083 = new _0x1eb09a();
    _0x26e083.set_base_ptr(_0x19073f);
    if (!_0x36d9ae) {
      _0x21abc3(0);
      return _0x26e083.ptr | 0;
    }
    var _0x3ae0a3 = Array.prototype.slice.call(arguments);
    var _0x470499 = _0x1d6208();
    var _0x58de36 = _0xf2adf5(4);
    _0x3ea6c9[_0x58de36 >> 2] = _0x19073f;
    for (var _0x52ffba = 0; _0x52ffba < _0x3ae0a3.length; _0x52ffba++) {
      var _0x5ae88f = _0x3ae0a3[_0x52ffba];
      if (_0x5ae88f === 0 || _0x5ae88f === _0x36d9ae) {
        break;
      }
      if (_0x5832c0(_0x5ae88f, _0x36d9ae, _0x58de36)) {
        var _0x395411 = _0x3ea6c9[_0x58de36 >> 2];
        if (_0x19073f !== _0x395411) {
          _0x26e083.set_adjusted_ptr(_0x395411);
        }
        _0x21abc3(_0x5ae88f);
        return _0x26e083.ptr | 0;
      }
    }
    _0xe462e3(_0x470499);
    _0x21abc3(_0x36d9ae);
    return _0x26e083.ptr | 0;
  }
  function _0x1446c1() {
    var _0x1fc40d = _0xf9d797.pop();
    if (!_0x1fc40d) {
      _0x3b38b3("no exception to throw");
    }
    var _0x1d1109 = _0x1fc40d.get_exception_info();
    var _0x36a309 = _0x1fc40d.get_base_ptr();
    if (!_0x1d1109.get_rethrown()) {
      _0xf9d797.push(_0x1fc40d);
      _0x1d1109.set_rethrown(true);
      _0x1d1109.set_caught(false);
      _0x12a781++;
    } else {
      _0x1fc40d.free();
    }
    _0x1d8922 = _0x36a309;
    throw _0x36a309;
  }
  function _0x428650(_0x20761b, _0x5837b2, _0x160435) {
    var _0x3f8861 = new _0x5f184b(_0x20761b);
    _0x3f8861.init(_0x5837b2, _0x160435);
    _0x1d8922 = _0x20761b;
    _0x12a781++;
    throw _0x20761b;
  }
  function _0x545eb4(_0xe69459, _0x179255) {
    var _0x39c375 = new Date(_0x3ea6c9[_0xe69459 >> 2] * 1000);
    _0x3ea6c9[_0x179255 >> 2] = _0x39c375.getUTCSeconds();
    _0x3ea6c9[_0x179255 + 4 >> 2] = _0x39c375.getUTCMinutes();
    _0x3ea6c9[_0x179255 + 8 >> 2] = _0x39c375.getUTCHours();
    _0x3ea6c9[_0x179255 + 12 >> 2] = _0x39c375.getUTCDate();
    _0x3ea6c9[_0x179255 + 16 >> 2] = _0x39c375.getUTCMonth();
    _0x3ea6c9[_0x179255 + 20 >> 2] = _0x39c375.getUTCFullYear() - 1900;
    _0x3ea6c9[_0x179255 + 24 >> 2] = _0x39c375.getUTCDay();
    _0x3ea6c9[_0x179255 + 36 >> 2] = 0;
    _0x3ea6c9[_0x179255 + 32 >> 2] = 0;
    var _0x1a8dab = Date.UTC(_0x39c375.getUTCFullYear(), 0, 1, 0, 0, 0, 0);
    var _0x36bcfc = (_0x39c375.getTime() - _0x1a8dab) / 86400000 | 0;
    _0x3ea6c9[_0x179255 + 28 >> 2] = _0x36bcfc;
    if (!_0x545eb4.GMTString) {
      _0x545eb4.GMTString = _0x59097a("GMT");
    }
    _0x3ea6c9[_0x179255 + 40 >> 2] = _0x545eb4.GMTString;
    return _0x179255;
  }
  function _0x50e6c6(_0x40b793, _0x292450) {
    return _0x545eb4(_0x40b793, _0x292450);
  }
  function _0xd1384b() {
    if (_0xd1384b.called) {
      return;
    }
    _0xd1384b.called = true;
    var _0x5f24fe = new Date().getFullYear();
    var _0x556897 = new Date(_0x5f24fe, 0, 1);
    var _0x37b25c = new Date(_0x5f24fe, 6, 1);
    var _0x245602 = _0x556897.getTimezoneOffset();
    var _0x43791d = _0x37b25c.getTimezoneOffset();
    var _0x4fb471 = Math.max(_0x245602, _0x43791d);
    _0x3ea6c9[_0xe263c8() >> 2] = _0x4fb471 * 60;
    _0x3ea6c9[_0x3ed6a3() >> 2] = Number(_0x245602 != _0x43791d);
    function _0x2422ce(_0x1b803d) {
      var _0x11da6a = _0x1b803d.toTimeString().match(/\(([A-Za-z ]+)\)$/);
      if (_0x11da6a) {
        return _0x11da6a[1];
      } else {
        return "GMT";
      }
    }
    var _0x4c549d = _0x2422ce(_0x556897);
    var _0xd1a5f6 = _0x2422ce(_0x37b25c);
    var _0x575027 = _0x59097a(_0x4c549d);
    var _0x1832f4 = _0x59097a(_0xd1a5f6);
    if (_0x43791d < _0x245602) {
      _0x3ea6c9[_0x5b33a7() >> 2] = _0x575027;
      _0x3ea6c9[_0x5b33a7() + 4 >> 2] = _0x1832f4;
    } else {
      _0x3ea6c9[_0x5b33a7() >> 2] = _0x1832f4;
      _0x3ea6c9[_0x5b33a7() + 4 >> 2] = _0x575027;
    }
  }
  function _0x50ba0a(_0x2369d2, _0x5bc295) {
    _0xd1384b();
    var _0x551d2a = new Date(_0x3ea6c9[_0x2369d2 >> 2] * 1000);
    _0x3ea6c9[_0x5bc295 >> 2] = _0x551d2a.getSeconds();
    _0x3ea6c9[_0x5bc295 + 4 >> 2] = _0x551d2a.getMinutes();
    _0x3ea6c9[_0x5bc295 + 8 >> 2] = _0x551d2a.getHours();
    _0x3ea6c9[_0x5bc295 + 12 >> 2] = _0x551d2a.getDate();
    _0x3ea6c9[_0x5bc295 + 16 >> 2] = _0x551d2a.getMonth();
    _0x3ea6c9[_0x5bc295 + 20 >> 2] = _0x551d2a.getFullYear() - 1900;
    _0x3ea6c9[_0x5bc295 + 24 >> 2] = _0x551d2a.getDay();
    var _0x423e6c = new Date(_0x551d2a.getFullYear(), 0, 1);
    var _0x3a9330 = (_0x551d2a.getTime() - _0x423e6c.getTime()) / 86400000 | 0;
    _0x3ea6c9[_0x5bc295 + 28 >> 2] = _0x3a9330;
    _0x3ea6c9[_0x5bc295 + 36 >> 2] = -(_0x551d2a.getTimezoneOffset() * 60);
    var _0x195e52 = new Date(_0x551d2a.getFullYear(), 6, 1).getTimezoneOffset();
    var _0x378475 = _0x423e6c.getTimezoneOffset();
    var _0x9f26f2 = (_0x195e52 != _0x378475 && _0x551d2a.getTimezoneOffset() == Math.min(_0x378475, _0x195e52)) | 0;
    _0x3ea6c9[_0x5bc295 + 32 >> 2] = _0x9f26f2;
    var _0x5536a8 = _0x3ea6c9[_0x5b33a7() + (_0x9f26f2 ? 4 : 0) >> 2];
    _0x3ea6c9[_0x5bc295 + 40 >> 2] = _0x5536a8;
    return _0x5bc295;
  }
  function _0x7140a4(_0x166a0b, _0x27ce02) {
    return _0x50ba0a(_0x166a0b, _0x27ce02);
  }
  var _0x261f1b = {
    splitPath: function (_0x335983) {
      var _0x452aa9 = /^(\/?|)([\s\S]*?)((?:\.{1,2}|[^\/]+?|)(\.[^.\/]*|))(?:[\/]*)$/;
      return _0x452aa9.exec(_0x335983).slice(1);
    },
    normalizeArray: function (_0x52e5c3, _0x1450f9) {
      var _0x3387ad = 0;
      for (var _0x167db0 = _0x52e5c3.length - 1; _0x167db0 >= 0; _0x167db0--) {
        var _0x38e91c = _0x52e5c3[_0x167db0];
        if (_0x38e91c === ".") {
          _0x52e5c3.splice(_0x167db0, 1);
        } else if (_0x38e91c === "..") {
          _0x52e5c3.splice(_0x167db0, 1);
          _0x3387ad++;
        } else if (_0x3387ad) {
          _0x52e5c3.splice(_0x167db0, 1);
          _0x3387ad--;
        }
      }
      if (_0x1450f9) {
        for (; _0x3387ad; _0x3387ad--) {
          _0x52e5c3.unshift("..");
        }
      }
      return _0x52e5c3;
    },
    normalize: function (_0x3c6729) {
      var _0x3b96d7 = _0x3c6729.charAt(0) === "/";
      var _0x306356 = _0x3c6729.substr(-1) === "/";
      _0x3c6729 = _0x261f1b.normalizeArray(_0x3c6729.split("/").filter(function (_0x3725d2) {
        return !!_0x3725d2;
      }), !_0x3b96d7).join("/");
      if (!_0x3c6729 && !_0x3b96d7) {
        _0x3c6729 = ".";
      }
      if (_0x3c6729 && _0x306356) {
        _0x3c6729 += "/";
      }
      return (_0x3b96d7 ? "/" : "") + _0x3c6729;
    },
    dirname: function (_0x968950) {
      var _0x2e16a4 = _0x261f1b.splitPath(_0x968950);
      var _0xba9349 = _0x2e16a4[0];
      var _0x2568cc = _0x2e16a4[1];
      if (!_0xba9349 && !_0x2568cc) {
        return ".";
      }
      _0x2568cc &&= _0x2568cc.substr(0, _0x2568cc.length - 1);
      return _0xba9349 + _0x2568cc;
    },
    basename: function (_0x1d7361) {
      if (_0x1d7361 === "/") {
        return "/";
      }
      _0x1d7361 = _0x261f1b.normalize(_0x1d7361);
      _0x1d7361 = _0x1d7361.replace(/\/$/, "");
      var _0x262e21 = _0x1d7361.lastIndexOf("/");
      if (_0x262e21 === -1) {
        return _0x1d7361;
      }
      return _0x1d7361.substr(_0x262e21 + 1);
    },
    extname: function (_0xbf32e) {
      return _0x261f1b.splitPath(_0xbf32e)[3];
    },
    join: function () {
      var _0x2db0aa = Array.prototype.slice.call(arguments, 0);
      return _0x261f1b.normalize(_0x2db0aa.join("/"));
    },
    join2: function (_0x5183f4, _0x36e335) {
      return _0x261f1b.normalize(_0x5183f4 + "/" + _0x36e335);
    }
  };
  function _0x2cca94() {
    if (typeof crypto === "object" && typeof crypto.getRandomValues === "function") {
      var _0x386078 = new Uint8Array(1);
      return function () {
        crypto.getRandomValues(_0x386078);
        return _0x386078[0];
      };
    } else if (_0x226b31) {
      try {
        var _0x444589 = require("crypto");
        return function () {
          return _0x444589.randomBytes(1)[0];
        };
      } catch (_0x51abbd) {}
    }
    return function () {
      _0x3b38b3("randomDevice");
    };
  }
  var _0x25f3b4 = {
    resolve: function () {
      var _0xccad2e = "";
      var _0x36b341 = false;
      for (var _0x10c1cf = arguments.length - 1; _0x10c1cf >= -1 && !_0x36b341; _0x10c1cf--) {
        var _0x2ac8e4 = _0x10c1cf >= 0 ? arguments[_0x10c1cf] : _0x129e29.cwd();
        if (typeof _0x2ac8e4 !== "string") {
          throw new TypeError("Arguments to path.resolve must be strings");
        } else if (!_0x2ac8e4) {
          return "";
        }
        _0xccad2e = _0x2ac8e4 + "/" + _0xccad2e;
        _0x36b341 = _0x2ac8e4.charAt(0) === "/";
      }
      _0xccad2e = _0x261f1b.normalizeArray(_0xccad2e.split("/").filter(function (_0x2e2ba2) {
        return !!_0x2e2ba2;
      }), !_0x36b341).join("/");
      return (_0x36b341 ? "/" : "") + _0xccad2e || ".";
    },
    relative: function (_0x3d636e, _0x3916bb) {
      _0x3d636e = _0x25f3b4.resolve(_0x3d636e).substr(1);
      _0x3916bb = _0x25f3b4.resolve(_0x3916bb).substr(1);
      function _0x4eaac2(_0x1963df) {
        var _0xb7e816 = 0;
        for (; _0xb7e816 < _0x1963df.length; _0xb7e816++) {
          if (_0x1963df[_0xb7e816] !== "") {
            break;
          }
        }
        var _0x405def = _0x1963df.length - 1;
        for (; _0x405def >= 0; _0x405def--) {
          if (_0x1963df[_0x405def] !== "") {
            break;
          }
        }
        if (_0xb7e816 > _0x405def) {
          return [];
        }
        return _0x1963df.slice(_0xb7e816, _0x405def - _0xb7e816 + 1);
      }
      var _0x21039c = _0x4eaac2(_0x3d636e.split("/"));
      var _0x1a0477 = _0x4eaac2(_0x3916bb.split("/"));
      var _0x488382 = Math.min(_0x21039c.length, _0x1a0477.length);
      var _0x1ef942 = _0x488382;
      for (var _0x2cd0c5 = 0; _0x2cd0c5 < _0x488382; _0x2cd0c5++) {
        if (_0x21039c[_0x2cd0c5] !== _0x1a0477[_0x2cd0c5]) {
          _0x1ef942 = _0x2cd0c5;
          break;
        }
      }
      var _0x131690 = [];
      for (var _0x2cd0c5 = _0x1ef942; _0x2cd0c5 < _0x21039c.length; _0x2cd0c5++) {
        _0x131690.push("..");
      }
      _0x131690 = _0x131690.concat(_0x1a0477.slice(_0x1ef942));
      return _0x131690.join("/");
    }
  };
  var _0x3213f1 = {
    ttys: [],
    init: function () {},
    shutdown: function () {},
    register: function (_0x211827, _0x5d8eba) {
      _0x3213f1.ttys[_0x211827] = {
        input: [],
        output: [],
        ops: _0x5d8eba
      };
      _0x129e29.registerDevice(_0x211827, _0x3213f1.stream_ops);
    },
    stream_ops: {
      open: function (_0x6b1ed4) {
        var _0x3f6f56 = _0x3213f1.ttys[_0x6b1ed4.node.rdev];
        if (!_0x3f6f56) {
          throw new _0x129e29.ErrnoError(43);
        }
        _0x6b1ed4.tty = _0x3f6f56;
        _0x6b1ed4.seekable = false;
      },
      close: function (_0x52f41f) {
        _0x52f41f.tty.ops.flush(_0x52f41f.tty);
      },
      flush: function (_0x573c00) {
        _0x573c00.tty.ops.flush(_0x573c00.tty);
      },
      read: function (_0x2cf64d, _0xe08ef9, _0x122203, _0x3d1bd0, _0x3a6ffb) {
        if (!_0x2cf64d.tty || !_0x2cf64d.tty.ops.get_char) {
          throw new _0x129e29.ErrnoError(60);
        }
        var _0x277b9b = 0;
        for (var _0x1f1b46 = 0; _0x1f1b46 < _0x3d1bd0; _0x1f1b46++) {
          var _0x4e227e;
          try {
            _0x4e227e = _0x2cf64d.tty.ops.get_char(_0x2cf64d.tty);
          } catch (_0x904fd) {
            throw new _0x129e29.ErrnoError(29);
          }
          if (_0x4e227e === undefined && _0x277b9b === 0) {
            throw new _0x129e29.ErrnoError(6);
          }
          if (_0x4e227e === null || _0x4e227e === undefined) {
            break;
          }
          _0x277b9b++;
          _0xe08ef9[_0x122203 + _0x1f1b46] = _0x4e227e;
        }
        if (_0x277b9b) {
          _0x2cf64d.node.timestamp = Date.now();
        }
        return _0x277b9b;
      },
      write: function (_0x40961b, _0x3056d9, _0x421cde, _0x1523ee, _0x4f484e) {
        if (!_0x40961b.tty || !_0x40961b.tty.ops.put_char) {
          throw new _0x129e29.ErrnoError(60);
        }
        try {
          for (var _0x30c0db = 0; _0x30c0db < _0x1523ee; _0x30c0db++) {
            _0x40961b.tty.ops.put_char(_0x40961b.tty, _0x3056d9[_0x421cde + _0x30c0db]);
          }
        } catch (_0x2092e3) {
          throw new _0x129e29.ErrnoError(29);
        }
        if (_0x1523ee) {
          _0x40961b.node.timestamp = Date.now();
        }
        return _0x30c0db;
      }
    },
    default_tty_ops: {
      get_char: function (_0x25aa78) {
        if (!_0x25aa78.input.length) {
          var _0x2a9447 = null;
          if (_0x226b31) {
            var _0xeffb07 = 256;
            var _0xbb8143 = Buffer.alloc ? Buffer.alloc(_0xeffb07) : new Buffer(_0xeffb07);
            var _0x525f01 = 0;
            try {
              _0x525f01 = _0x4f9131.readSync(process.stdin.fd, _0xbb8143, 0, _0xeffb07, null);
            } catch (_0x5ec13d) {
              if (_0x5ec13d.toString().includes("EOF")) {
                _0x525f01 = 0;
              } else {
                throw _0x5ec13d;
              }
            }
            if (_0x525f01 > 0) {
              _0x2a9447 = _0xbb8143.slice(0, _0x525f01).toString("utf-8");
            } else {
              _0x2a9447 = null;
            }
          } else if (typeof window != "undefined" && typeof window.prompt == "function") {
            _0x2a9447 = window.prompt("Input: ");
            if (_0x2a9447 !== null) {
              _0x2a9447 += "\n";
            }
          } else if (typeof readline == "function") {
            _0x2a9447 = readline();
            if (_0x2a9447 !== null) {
              _0x2a9447 += "\n";
            }
          }
          if (!_0x2a9447) {
            return null;
          }
          _0x25aa78.input = _0x55b828(_0x2a9447, true);
        }
        return _0x25aa78.input.shift();
      },
      put_char: function (_0x2aa93c, _0x183902) {
        if (_0x183902 === null || _0x183902 === 10) {
          _0x55efa1(_0x3665c7(_0x2aa93c.output, 0));
          _0x2aa93c.output = [];
        } else if (_0x183902 != 0) {
          _0x2aa93c.output.push(_0x183902);
        }
      },
      flush: function (_0x43f4a6) {
        if (_0x43f4a6.output && _0x43f4a6.output.length > 0) {
          _0x55efa1(_0x3665c7(_0x43f4a6.output, 0));
          _0x43f4a6.output = [];
        }
      }
    },
    default_tty1_ops: {
      put_char: function (_0x37fca3, _0x412486) {
        if (_0x412486 === null || _0x412486 === 10) {
          _0x266425(_0x3665c7(_0x37fca3.output, 0));
          _0x37fca3.output = [];
        } else if (_0x412486 != 0) {
          _0x37fca3.output.push(_0x412486);
        }
      },
      flush: function (_0x18de55) {
        if (_0x18de55.output && _0x18de55.output.length > 0) {
          _0x266425(_0x3665c7(_0x18de55.output, 0));
          _0x18de55.output = [];
        }
      }
    }
  };
  function _0x3f737c(_0x114a45) {
    var _0x4821ef = _0x354d97(_0x114a45, 65536);
    var _0x13e9c2 = _0x311afe(_0x4821ef);
    while (_0x114a45 < _0x4821ef) {
      _0x410af5[_0x13e9c2 + _0x114a45++] = 0;
    }
    return _0x13e9c2;
  }
  var _0x40e403 = {
    ops_table: null,
    mount: function (_0x1021f3) {
      return _0x40e403.createNode(null, "/", 16895, 0);
    },
    createNode: function (_0x4bfc28, _0x353e00, _0x1b2602, _0x21ebec) {
      if (_0x129e29.isBlkdev(_0x1b2602) || _0x129e29.isFIFO(_0x1b2602)) {
        throw new _0x129e29.ErrnoError(63);
      }
      if (!_0x40e403.ops_table) {
        _0x40e403.ops_table = {
          dir: {
            node: {
              getattr: _0x40e403.node_ops.getattr,
              setattr: _0x40e403.node_ops.setattr,
              lookup: _0x40e403.node_ops.lookup,
              mknod: _0x40e403.node_ops.mknod,
              rename: _0x40e403.node_ops.rename,
              unlink: _0x40e403.node_ops.unlink,
              rmdir: _0x40e403.node_ops.rmdir,
              readdir: _0x40e403.node_ops.readdir,
              symlink: _0x40e403.node_ops.symlink
            },
            stream: {
              llseek: _0x40e403.stream_ops.llseek
            }
          },
          file: {
            node: {
              getattr: _0x40e403.node_ops.getattr,
              setattr: _0x40e403.node_ops.setattr
            },
            stream: {
              llseek: _0x40e403.stream_ops.llseek,
              read: _0x40e403.stream_ops.read,
              write: _0x40e403.stream_ops.write,
              allocate: _0x40e403.stream_ops.allocate,
              mmap: _0x40e403.stream_ops.mmap,
              msync: _0x40e403.stream_ops.msync
            }
          },
          link: {
            node: {
              getattr: _0x40e403.node_ops.getattr,
              setattr: _0x40e403.node_ops.setattr,
              readlink: _0x40e403.node_ops.readlink
            },
            stream: {}
          },
          chrdev: {
            node: {
              getattr: _0x40e403.node_ops.getattr,
              setattr: _0x40e403.node_ops.setattr
            },
            stream: _0x129e29.chrdev_stream_ops
          }
        };
      }
      var _0x438675 = _0x129e29.createNode(_0x4bfc28, _0x353e00, _0x1b2602, _0x21ebec);
      if (_0x129e29.isDir(_0x438675.mode)) {
        _0x438675.node_ops = _0x40e403.ops_table.dir.node;
        _0x438675.stream_ops = _0x40e403.ops_table.dir.stream;
        _0x438675.contents = {};
      } else if (_0x129e29.isFile(_0x438675.mode)) {
        _0x438675.node_ops = _0x40e403.ops_table.file.node;
        _0x438675.stream_ops = _0x40e403.ops_table.file.stream;
        _0x438675.usedBytes = 0;
        _0x438675.contents = null;
      } else if (_0x129e29.isLink(_0x438675.mode)) {
        _0x438675.node_ops = _0x40e403.ops_table.link.node;
        _0x438675.stream_ops = _0x40e403.ops_table.link.stream;
      } else if (_0x129e29.isChrdev(_0x438675.mode)) {
        _0x438675.node_ops = _0x40e403.ops_table.chrdev.node;
        _0x438675.stream_ops = _0x40e403.ops_table.chrdev.stream;
      }
      _0x438675.timestamp = Date.now();
      if (_0x4bfc28) {
        _0x4bfc28.contents[_0x353e00] = _0x438675;
        _0x4bfc28.timestamp = _0x438675.timestamp;
      }
      return _0x438675;
    },
    getFileDataAsTypedArray: function (_0x4e1a6b) {
      if (!_0x4e1a6b.contents) {
        return new Uint8Array(0);
      }
      if (_0x4e1a6b.contents.subarray) {
        return _0x4e1a6b.contents.subarray(0, _0x4e1a6b.usedBytes);
      }
      return new Uint8Array(_0x4e1a6b.contents);
    },
    expandFileStorage: function (_0x466055, _0x4d0885) {
      var _0x94fa6c = _0x466055.contents ? _0x466055.contents.length : 0;
      if (_0x94fa6c >= _0x4d0885) {
        return;
      }
      var _0x13ac92 = 1048576;
      _0x4d0885 = Math.max(_0x4d0885, _0x94fa6c * (_0x94fa6c < _0x13ac92 ? 2 : 1.125) >>> 0);
      if (_0x94fa6c != 0) {
        _0x4d0885 = Math.max(_0x4d0885, 256);
      }
      var _0x47ed52 = _0x466055.contents;
      _0x466055.contents = new Uint8Array(_0x4d0885);
      if (_0x466055.usedBytes > 0) {
        _0x466055.contents.set(_0x47ed52.subarray(0, _0x466055.usedBytes), 0);
      }
    },
    resizeFileStorage: function (_0x30d53b, _0x15dc5b) {
      if (_0x30d53b.usedBytes == _0x15dc5b) {
        return;
      }
      if (_0x15dc5b == 0) {
        _0x30d53b.contents = null;
        _0x30d53b.usedBytes = 0;
      } else {
        var _0x30fa03 = _0x30d53b.contents;
        _0x30d53b.contents = new Uint8Array(_0x15dc5b);
        if (_0x30fa03) {
          _0x30d53b.contents.set(_0x30fa03.subarray(0, Math.min(_0x15dc5b, _0x30d53b.usedBytes)));
        }
        _0x30d53b.usedBytes = _0x15dc5b;
      }
    },
    node_ops: {
      getattr: function (_0x23cd65) {
        var _0x2aa149 = {};
        _0x2aa149.dev = _0x129e29.isChrdev(_0x23cd65.mode) ? _0x23cd65.id : 1;
        _0x2aa149.ino = _0x23cd65.id;
        _0x2aa149.mode = _0x23cd65.mode;
        _0x2aa149.nlink = 1;
        _0x2aa149.uid = 0;
        _0x2aa149.gid = 0;
        _0x2aa149.rdev = _0x23cd65.rdev;
        if (_0x129e29.isDir(_0x23cd65.mode)) {
          _0x2aa149.size = 4096;
        } else if (_0x129e29.isFile(_0x23cd65.mode)) {
          _0x2aa149.size = _0x23cd65.usedBytes;
        } else if (_0x129e29.isLink(_0x23cd65.mode)) {
          _0x2aa149.size = _0x23cd65.link.length;
        } else {
          _0x2aa149.size = 0;
        }
        _0x2aa149.atime = new Date(_0x23cd65.timestamp);
        _0x2aa149.mtime = new Date(_0x23cd65.timestamp);
        _0x2aa149.ctime = new Date(_0x23cd65.timestamp);
        _0x2aa149.blksize = 4096;
        _0x2aa149.blocks = Math.ceil(_0x2aa149.size / _0x2aa149.blksize);
        return _0x2aa149;
      },
      setattr: function (_0xc98cac, _0x48162e) {
        if (_0x48162e.mode !== undefined) {
          _0xc98cac.mode = _0x48162e.mode;
        }
        if (_0x48162e.timestamp !== undefined) {
          _0xc98cac.timestamp = _0x48162e.timestamp;
        }
        if (_0x48162e.size !== undefined) {
          _0x40e403.resizeFileStorage(_0xc98cac, _0x48162e.size);
        }
      },
      lookup: function (_0x59c710, _0x438a38) {
        throw _0x129e29.genericErrors[44];
      },
      mknod: function (_0x18e2e4, _0x892af2, _0x1af234, _0x2c28e9) {
        return _0x40e403.createNode(_0x18e2e4, _0x892af2, _0x1af234, _0x2c28e9);
      },
      rename: function (_0x5c09a2, _0x537d39, _0x1738a8) {
        if (_0x129e29.isDir(_0x5c09a2.mode)) {
          var _0x451f51;
          try {
            _0x451f51 = _0x129e29.lookupNode(_0x537d39, _0x1738a8);
          } catch (_0x2770b3) {}
          if (_0x451f51) {
            for (var _0x6fc5bf in _0x451f51.contents) {
              throw new _0x129e29.ErrnoError(55);
            }
          }
        }
        delete _0x5c09a2.parent.contents[_0x5c09a2.name];
        _0x5c09a2.parent.timestamp = Date.now();
        _0x5c09a2.name = _0x1738a8;
        _0x537d39.contents[_0x1738a8] = _0x5c09a2;
        _0x537d39.timestamp = _0x5c09a2.parent.timestamp;
        _0x5c09a2.parent = _0x537d39;
      },
      unlink: function (_0x311d75, _0x4ee243) {
        delete _0x311d75.contents[_0x4ee243];
        _0x311d75.timestamp = Date.now();
      },
      rmdir: function (_0x5f2cd5, _0x8aa02a) {
        var _0x121e0d = _0x129e29.lookupNode(_0x5f2cd5, _0x8aa02a);
        for (var _0x4da047 in _0x121e0d.contents) {
          throw new _0x129e29.ErrnoError(55);
        }
        delete _0x5f2cd5.contents[_0x8aa02a];
        _0x5f2cd5.timestamp = Date.now();
      },
      readdir: function (_0x3a6d13) {
        var _0x54ecda = [".", ".."];
        for (var _0x1b4298 in _0x3a6d13.contents) {
          if (!_0x3a6d13.contents.hasOwnProperty(_0x1b4298)) {
            continue;
          }
          _0x54ecda.push(_0x1b4298);
        }
        return _0x54ecda;
      },
      symlink: function (_0x5a9330, _0x1152d2, _0x258482) {
        var _0x1db117 = _0x40e403.createNode(_0x5a9330, _0x1152d2, 41471, 0);
        _0x1db117.link = _0x258482;
        return _0x1db117;
      },
      readlink: function (_0xee6441) {
        if (!_0x129e29.isLink(_0xee6441.mode)) {
          throw new _0x129e29.ErrnoError(28);
        }
        return _0xee6441.link;
      }
    },
    stream_ops: {
      read: function (_0xe73b86, _0x1232d8, _0x21b2cb, _0x53e2f4, _0x43eab3) {
        var _0x214db2 = _0xe73b86.node.contents;
        if (_0x43eab3 >= _0xe73b86.node.usedBytes) {
          return 0;
        }
        var _0x46205e = Math.min(_0xe73b86.node.usedBytes - _0x43eab3, _0x53e2f4);
        if (_0x46205e > 8 && _0x214db2.subarray) {
          _0x1232d8.set(_0x214db2.subarray(_0x43eab3, _0x43eab3 + _0x46205e), _0x21b2cb);
        } else {
          for (var _0x45e407 = 0; _0x45e407 < _0x46205e; _0x45e407++) {
            _0x1232d8[_0x21b2cb + _0x45e407] = _0x214db2[_0x43eab3 + _0x45e407];
          }
        }
        return _0x46205e;
      },
      write: function (_0x4fc6d4, _0x2effca, _0x244b37, _0x4cd55e, _0x4a7b7c, _0x56ddb7) {
        if (_0x2effca.buffer === _0x410af5.buffer) {
          _0x56ddb7 = false;
        }
        if (!_0x4cd55e) {
          return 0;
        }
        var _0x1024ba = _0x4fc6d4.node;
        _0x1024ba.timestamp = Date.now();
        if (_0x2effca.subarray && (!_0x1024ba.contents || _0x1024ba.contents.subarray)) {
          if (_0x56ddb7) {
            _0x1024ba.contents = _0x2effca.subarray(_0x244b37, _0x244b37 + _0x4cd55e);
            _0x1024ba.usedBytes = _0x4cd55e;
            return _0x4cd55e;
          } else if (_0x1024ba.usedBytes === 0 && _0x4a7b7c === 0) {
            _0x1024ba.contents = _0x2effca.slice(_0x244b37, _0x244b37 + _0x4cd55e);
            _0x1024ba.usedBytes = _0x4cd55e;
            return _0x4cd55e;
          } else if (_0x4a7b7c + _0x4cd55e <= _0x1024ba.usedBytes) {
            _0x1024ba.contents.set(_0x2effca.subarray(_0x244b37, _0x244b37 + _0x4cd55e), _0x4a7b7c);
            return _0x4cd55e;
          }
        }
        _0x40e403.expandFileStorage(_0x1024ba, _0x4a7b7c + _0x4cd55e);
        if (_0x1024ba.contents.subarray && _0x2effca.subarray) {
          _0x1024ba.contents.set(_0x2effca.subarray(_0x244b37, _0x244b37 + _0x4cd55e), _0x4a7b7c);
        } else {
          for (var _0x2490ff = 0; _0x2490ff < _0x4cd55e; _0x2490ff++) {
            _0x1024ba.contents[_0x4a7b7c + _0x2490ff] = _0x2effca[_0x244b37 + _0x2490ff];
          }
        }
        _0x1024ba.usedBytes = Math.max(_0x1024ba.usedBytes, _0x4a7b7c + _0x4cd55e);
        return _0x4cd55e;
      },
      llseek: function (_0x2a1d90, _0x31068d, _0x240aad) {
        var _0x4c9820 = _0x31068d;
        if (_0x240aad === 1) {
          _0x4c9820 += _0x2a1d90.position;
        } else if (_0x240aad === 2) {
          if (_0x129e29.isFile(_0x2a1d90.node.mode)) {
            _0x4c9820 += _0x2a1d90.node.usedBytes;
          }
        }
        if (_0x4c9820 < 0) {
          throw new _0x129e29.ErrnoError(28);
        }
        return _0x4c9820;
      },
      allocate: function (_0x52e94f, _0x34b0d1, _0x568db5) {
        _0x40e403.expandFileStorage(_0x52e94f.node, _0x34b0d1 + _0x568db5);
        _0x52e94f.node.usedBytes = Math.max(_0x52e94f.node.usedBytes, _0x34b0d1 + _0x568db5);
      },
      mmap: function (_0x153a19, _0x47c5f9, _0x3848b3, _0x50f2e4, _0x43b7cc, _0x5efe25) {
        if (_0x47c5f9 !== 0) {
          throw new _0x129e29.ErrnoError(28);
        }
        if (!_0x129e29.isFile(_0x153a19.node.mode)) {
          throw new _0x129e29.ErrnoError(43);
        }
        var _0x138499;
        var _0x541a87;
        var _0x385520 = _0x153a19.node.contents;
        if (!(_0x5efe25 & 2) && _0x385520.buffer === _0x599285) {
          _0x541a87 = false;
          _0x138499 = _0x385520.byteOffset;
        } else {
          if (_0x50f2e4 > 0 || _0x50f2e4 + _0x3848b3 < _0x385520.length) {
            if (_0x385520.subarray) {
              _0x385520 = _0x385520.subarray(_0x50f2e4, _0x50f2e4 + _0x3848b3);
            } else {
              _0x385520 = Array.prototype.slice.call(_0x385520, _0x50f2e4, _0x50f2e4 + _0x3848b3);
            }
          }
          _0x541a87 = true;
          _0x138499 = _0x3f737c(_0x3848b3);
          if (!_0x138499) {
            throw new _0x129e29.ErrnoError(48);
          }
          _0x410af5.set(_0x385520, _0x138499);
        }
        return {
          ptr: _0x138499,
          allocated: _0x541a87
        };
      },
      msync: function (_0x10cba3, _0x38610d, _0x24a105, _0x553b29, _0x35fbd8) {
        if (!_0x129e29.isFile(_0x10cba3.node.mode)) {
          throw new _0x129e29.ErrnoError(43);
        }
        if (_0x35fbd8 & 2) {
          return 0;
        }
        var _0x5ac89e = _0x40e403.stream_ops.write(_0x10cba3, _0x38610d, 0, _0x553b29, _0x24a105, false);
        return 0;
      }
    }
  };
  var _0x73057c = {
    dbs: {},
    indexedDB: function () {
      if (typeof indexedDB !== "undefined") {
        return indexedDB;
      }
      var _0x47bc87 = null;
      if (typeof window === "object") {
        _0x47bc87 = window.indexedDB || window.mozIndexedDB || window.webkitIndexedDB || window.msIndexedDB;
      }
      _0x498a3a(_0x47bc87, "IDBFS used, but indexedDB not supported");
      return _0x47bc87;
    },
    DB_VERSION: 21,
    DB_STORE_NAME: "FILE_DATA",
    mount: function (_0x61958b) {
      return _0x40e403.mount.apply(null, arguments);
    },
    syncfs: function (_0x333f12, _0x4e4d7e, _0x3acb76) {
      _0x73057c.getLocalSet(_0x333f12, function (_0x536075, _0x3236d3) {
        if (_0x536075) {
          return _0x3acb76(_0x536075);
        }
        _0x73057c.getRemoteSet(_0x333f12, function (_0x3852a8, _0x4d0c1a) {
          if (_0x3852a8) {
            return _0x3acb76(_0x3852a8);
          }
          var _0x4b3da9 = _0x4e4d7e ? _0x4d0c1a : _0x3236d3;
          var _0xf9f83e = _0x4e4d7e ? _0x3236d3 : _0x4d0c1a;
          _0x73057c.reconcile(_0x4b3da9, _0xf9f83e, _0x3acb76);
        });
      });
    },
    getDB: function (_0x2aecdc, _0x286660) {
      var _0x264710 = _0x73057c.dbs[_0x2aecdc];
      if (_0x264710) {
        return _0x286660(null, _0x264710);
      }
      var _0x2f3410;
      try {
        _0x2f3410 = _0x73057c.indexedDB().open(_0x2aecdc, _0x73057c.DB_VERSION);
      } catch (_0x10f943) {
        return _0x286660(_0x10f943);
      }
      if (!_0x2f3410) {
        return _0x286660("Unable to connect to IndexedDB");
      }
      _0x2f3410.onupgradeneeded = function (_0x5cb633) {
        var _0x30e806 = _0x5cb633.target.result;
        var _0x48fccc = _0x5cb633.target.transaction;
        var _0x4bc1f1;
        if (_0x30e806.objectStoreNames.contains(_0x73057c.DB_STORE_NAME)) {
          _0x4bc1f1 = _0x48fccc.objectStore(_0x73057c.DB_STORE_NAME);
        } else {
          _0x4bc1f1 = _0x30e806.createObjectStore(_0x73057c.DB_STORE_NAME);
        }
        if (!_0x4bc1f1.indexNames.contains("timestamp")) {
          _0x4bc1f1.createIndex("timestamp", "timestamp", {
            unique: false
          });
        }
      };
      _0x2f3410.onsuccess = function () {
        _0x264710 = _0x2f3410.result;
        _0x73057c.dbs[_0x2aecdc] = _0x264710;
        _0x286660(null, _0x264710);
      };
      _0x2f3410.onerror = function (_0x34d325) {
        _0x286660(this.error);
        _0x34d325.preventDefault();
      };
    },
    getLocalSet: function (_0x2016ed, _0x5645c7) {
      var _0x4cf8cb = {};
      function _0x5c898a(_0x25c55d) {
        return _0x25c55d !== "." && _0x25c55d !== "..";
      }
      function _0x68dc61(_0x1b5a73) {
        return function (_0x130eee) {
          return _0x261f1b.join2(_0x1b5a73, _0x130eee);
        };
      }
      var _0x269d9b = _0x129e29.readdir(_0x2016ed.mountpoint).filter(_0x5c898a).map(_0x68dc61(_0x2016ed.mountpoint));
      while (_0x269d9b.length) {
        var _0x5d9658 = _0x269d9b.pop();
        var _0x4de7e9;
        try {
          _0x4de7e9 = _0x129e29.stat(_0x5d9658);
        } catch (_0x249f89) {
          return _0x5645c7(_0x249f89);
        }
        if (_0x129e29.isDir(_0x4de7e9.mode)) {
          _0x269d9b.push.apply(_0x269d9b, _0x129e29.readdir(_0x5d9658).filter(_0x5c898a).map(_0x68dc61(_0x5d9658)));
        }
        _0x4cf8cb[_0x5d9658] = {
          timestamp: _0x4de7e9.mtime
        };
      }
      return _0x5645c7(null, {
        type: "local",
        entries: _0x4cf8cb
      });
    },
    getRemoteSet: function (_0x4c5a80, _0x548e8f) {
      var _0x33e2fa = {};
      _0x73057c.getDB(_0x4c5a80.mountpoint, function (_0xe04e38, _0x303c10) {
        if (_0xe04e38) {
          return _0x548e8f(_0xe04e38);
        }
        try {
          var _0xddb4f6 = _0x303c10.transaction([_0x73057c.DB_STORE_NAME], "readonly");
          _0xddb4f6.onerror = function (_0x50ca41) {
            _0x548e8f(this.error);
            _0x50ca41.preventDefault();
          };
          var _0x5e9cb8 = _0xddb4f6.objectStore(_0x73057c.DB_STORE_NAME);
          var _0x17cbfe = _0x5e9cb8.index("timestamp");
          _0x17cbfe.openKeyCursor().onsuccess = function (_0x654809) {
            var _0x554bdd = _0x654809.target.result;
            if (!_0x554bdd) {
              return _0x548e8f(null, {
                type: "remote",
                db: _0x303c10,
                entries: _0x33e2fa
              });
            }
            _0x33e2fa[_0x554bdd.primaryKey] = {
              timestamp: _0x554bdd.key
            };
            _0x554bdd.continue();
          };
        } catch (_0x1ca110) {
          return _0x548e8f(_0x1ca110);
        }
      });
    },
    loadLocalEntry: function (_0x3a5c7e, _0x3e203e) {
      var _0x439c3;
      var _0x48ab0e;
      try {
        var _0x30d471 = _0x129e29.lookupPath(_0x3a5c7e);
        _0x48ab0e = _0x30d471.node;
        _0x439c3 = _0x129e29.stat(_0x3a5c7e);
      } catch (_0x5e2f19) {
        return _0x3e203e(_0x5e2f19);
      }
      if (_0x129e29.isDir(_0x439c3.mode)) {
        return _0x3e203e(null, {
          timestamp: _0x439c3.mtime,
          mode: _0x439c3.mode
        });
      } else if (_0x129e29.isFile(_0x439c3.mode)) {
        _0x48ab0e.contents = _0x40e403.getFileDataAsTypedArray(_0x48ab0e);
        return _0x3e203e(null, {
          timestamp: _0x439c3.mtime,
          mode: _0x439c3.mode,
          contents: _0x48ab0e.contents
        });
      } else {
        return _0x3e203e(new Error("node type not supported"));
      }
    },
    storeLocalEntry: function (_0x3c58b5, _0x1304ec, _0x92752f) {
      try {
        if (_0x129e29.isDir(_0x1304ec.mode)) {
          _0x129e29.mkdirTree(_0x3c58b5, _0x1304ec.mode);
        } else if (_0x129e29.isFile(_0x1304ec.mode)) {
          _0x129e29.writeFile(_0x3c58b5, _0x1304ec.contents, {
            canOwn: true
          });
        } else {
          return _0x92752f(new Error("node type not supported"));
        }
        _0x129e29.chmod(_0x3c58b5, _0x1304ec.mode);
        _0x129e29.utime(_0x3c58b5, _0x1304ec.timestamp, _0x1304ec.timestamp);
      } catch (_0x550549) {
        return _0x92752f(_0x550549);
      }
      _0x92752f(null);
    },
    removeLocalEntry: function (_0x4a1676, _0x2c7500) {
      try {
        var _0x9af4ea = _0x129e29.lookupPath(_0x4a1676);
        var _0x4eed1a = _0x129e29.stat(_0x4a1676);
        if (_0x129e29.isDir(_0x4eed1a.mode)) {
          _0x129e29.rmdir(_0x4a1676);
        } else if (_0x129e29.isFile(_0x4eed1a.mode)) {
          _0x129e29.unlink(_0x4a1676);
        }
      } catch (_0x41ab49) {
        return _0x2c7500(_0x41ab49);
      }
      _0x2c7500(null);
    },
    loadRemoteEntry: function (_0x4103f0, _0x2d74a4, _0x2d043e) {
      var _0x4b38e3 = _0x4103f0.get(_0x2d74a4);
      _0x4b38e3.onsuccess = function (_0x7bb63f) {
        _0x2d043e(null, _0x7bb63f.target.result);
      };
      _0x4b38e3.onerror = function (_0x3dc61d) {
        _0x2d043e(this.error);
        _0x3dc61d.preventDefault();
      };
    },
    storeRemoteEntry: function (_0x5b0e29, _0x9f2dbe, _0x5eb5b3, _0x3ec9ba) {
      var _0x1a8a65 = _0x5b0e29.put(_0x5eb5b3, _0x9f2dbe);
      _0x1a8a65.onsuccess = function () {
        _0x3ec9ba(null);
      };
      _0x1a8a65.onerror = function (_0xb68d7c) {
        _0x3ec9ba(this.error);
        _0xb68d7c.preventDefault();
      };
    },
    removeRemoteEntry: function (_0x48181a, _0x147f54, _0x325fda) {
      var _0xbcad04 = _0x48181a.delete(_0x147f54);
      _0xbcad04.onsuccess = function () {
        _0x325fda(null);
      };
      _0xbcad04.onerror = function (_0x4f84c6) {
        _0x325fda(this.error);
        _0x4f84c6.preventDefault();
      };
    },
    reconcile: function (_0x318cb4, _0x32028e, _0xd82bbf) {
      var _0x29d5c8 = 0;
      var _0x3925b0 = [];
      Object.keys(_0x318cb4.entries).forEach(function (_0x1105bd) {
        var _0x4c3f77 = _0x318cb4.entries[_0x1105bd];
        var _0x1c1c8b = _0x32028e.entries[_0x1105bd];
        if (!_0x1c1c8b || _0x4c3f77.timestamp.getTime() != _0x1c1c8b.timestamp.getTime()) {
          _0x3925b0.push(_0x1105bd);
          _0x29d5c8++;
        }
      });
      var _0x13e03e = [];
      Object.keys(_0x32028e.entries).forEach(function (_0x31cf1f) {
        if (!_0x318cb4.entries[_0x31cf1f]) {
          _0x13e03e.push(_0x31cf1f);
          _0x29d5c8++;
        }
      });
      if (!_0x29d5c8) {
        return _0xd82bbf(null);
      }
      var _0x3c6387 = false;
      var _0x32f783 = _0x318cb4.type === "remote" ? _0x318cb4.db : _0x32028e.db;
      var _0xaceb8b = _0x32f783.transaction([_0x73057c.DB_STORE_NAME], "readwrite");
      var _0x43d803 = _0xaceb8b.objectStore(_0x73057c.DB_STORE_NAME);
      function _0xbe13a4(_0x27f433) {
        if (_0x27f433 && !_0x3c6387) {
          _0x3c6387 = true;
          return _0xd82bbf(_0x27f433);
        }
      }
      _0xaceb8b.onerror = function (_0x45e35d) {
        _0xbe13a4(this.error);
        _0x45e35d.preventDefault();
      };
      _0xaceb8b.oncomplete = function (_0x458187) {
        if (!_0x3c6387) {
          _0xd82bbf(null);
        }
      };
      _0x3925b0.sort().forEach(function (_0xf742fc) {
        if (_0x32028e.type === "local") {
          _0x73057c.loadRemoteEntry(_0x43d803, _0xf742fc, function (_0x37a96b, _0xde072d) {
            if (_0x37a96b) {
              return _0xbe13a4(_0x37a96b);
            }
            _0x73057c.storeLocalEntry(_0xf742fc, _0xde072d, _0xbe13a4);
          });
        } else {
          _0x73057c.loadLocalEntry(_0xf742fc, function (_0x593107, _0x5a9241) {
            if (_0x593107) {
              return _0xbe13a4(_0x593107);
            }
            _0x73057c.storeRemoteEntry(_0x43d803, _0xf742fc, _0x5a9241, _0xbe13a4);
          });
        }
      });
      _0x13e03e.sort().reverse().forEach(function (_0x150d00) {
        if (_0x32028e.type === "local") {
          _0x73057c.removeLocalEntry(_0x150d00, _0xbe13a4);
        } else {
          _0x73057c.removeRemoteEntry(_0x43d803, _0x150d00, _0xbe13a4);
        }
      });
    }
  };
  var _0x129e29 = {
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
    lookupPath: function (_0x4b2d77, _0x38f8be) {
      _0x4b2d77 = _0x25f3b4.resolve(_0x129e29.cwd(), _0x4b2d77);
      _0x38f8be = _0x38f8be || {};
      if (!_0x4b2d77) {
        return {
          path: "",
          node: null
        };
      }
      var _0x4e4d2c = {
        follow_mount: true,
        recurse_count: 0
      };
      for (var _0x2cb271 in _0x4e4d2c) {
        if (_0x38f8be[_0x2cb271] === undefined) {
          _0x38f8be[_0x2cb271] = _0x4e4d2c[_0x2cb271];
        }
      }
      if (_0x38f8be.recurse_count > 8) {
        throw new _0x129e29.ErrnoError(32);
      }
      var _0x1198ca = _0x261f1b.normalizeArray(_0x4b2d77.split("/").filter(function (_0x234752) {
        return !!_0x234752;
      }), false);
      var _0x4492fa = _0x129e29.root;
      var _0xcd14ca = "/";
      for (var _0x47f60b = 0; _0x47f60b < _0x1198ca.length; _0x47f60b++) {
        var _0x372d76 = _0x47f60b === _0x1198ca.length - 1;
        if (_0x372d76 && _0x38f8be.parent) {
          break;
        }
        _0x4492fa = _0x129e29.lookupNode(_0x4492fa, _0x1198ca[_0x47f60b]);
        _0xcd14ca = _0x261f1b.join2(_0xcd14ca, _0x1198ca[_0x47f60b]);
        if (_0x129e29.isMountpoint(_0x4492fa)) {
          if (!_0x372d76 || _0x372d76 && _0x38f8be.follow_mount) {
            _0x4492fa = _0x4492fa.mounted.root;
          }
        }
        if (!_0x372d76 || _0x38f8be.follow) {
          var _0x451884 = 0;
          while (_0x129e29.isLink(_0x4492fa.mode)) {
            var _0x3f27cf = _0x129e29.readlink(_0xcd14ca);
            _0xcd14ca = _0x25f3b4.resolve(_0x261f1b.dirname(_0xcd14ca), _0x3f27cf);
            var _0x244ae2 = _0x129e29.lookupPath(_0xcd14ca, {
              recurse_count: _0x38f8be.recurse_count
            });
            _0x4492fa = _0x244ae2.node;
            if (_0x451884++ > 40) {
              throw new _0x129e29.ErrnoError(32);
            }
          }
        }
      }
      return {
        path: _0xcd14ca,
        node: _0x4492fa
      };
    },
    getPath: function (_0x561807) {
      var _0x21c355;
      while (true) {
        if (_0x129e29.isRoot(_0x561807)) {
          var _0x2c0a81 = _0x561807.mount.mountpoint;
          if (!_0x21c355) {
            return _0x2c0a81;
          }
          if (_0x2c0a81[_0x2c0a81.length - 1] !== "/") {
            return _0x2c0a81 + "/" + _0x21c355;
          } else {
            return _0x2c0a81 + _0x21c355;
          }
        }
        _0x21c355 = _0x21c355 ? _0x561807.name + "/" + _0x21c355 : _0x561807.name;
        _0x561807 = _0x561807.parent;
      }
    },
    hashName: function (_0x42fc32, _0xbc1df2) {
      var _0x4bd22b = 0;
      for (var _0x5b2fe8 = 0; _0x5b2fe8 < _0xbc1df2.length; _0x5b2fe8++) {
        _0x4bd22b = (_0x4bd22b << 5) - _0x4bd22b + _0xbc1df2.charCodeAt(_0x5b2fe8) | 0;
      }
      return (_0x42fc32 + _0x4bd22b >>> 0) % _0x129e29.nameTable.length;
    },
    hashAddNode: function (_0x4711a2) {
      var _0x324cc2 = _0x129e29.hashName(_0x4711a2.parent.id, _0x4711a2.name);
      _0x4711a2.name_next = _0x129e29.nameTable[_0x324cc2];
      _0x129e29.nameTable[_0x324cc2] = _0x4711a2;
    },
    hashRemoveNode: function (_0x16a763) {
      var _0x354de9 = _0x129e29.hashName(_0x16a763.parent.id, _0x16a763.name);
      if (_0x129e29.nameTable[_0x354de9] === _0x16a763) {
        _0x129e29.nameTable[_0x354de9] = _0x16a763.name_next;
      } else {
        var _0x532b1e = _0x129e29.nameTable[_0x354de9];
        while (_0x532b1e) {
          if (_0x532b1e.name_next === _0x16a763) {
            _0x532b1e.name_next = _0x16a763.name_next;
            break;
          }
          _0x532b1e = _0x532b1e.name_next;
        }
      }
    },
    lookupNode: function (_0x4b674c, _0x5db177) {
      var _0x896c66 = _0x129e29.mayLookup(_0x4b674c);
      if (_0x896c66) {
        throw new _0x129e29.ErrnoError(_0x896c66, _0x4b674c);
      }
      var _0x25f999 = _0x129e29.hashName(_0x4b674c.id, _0x5db177);
      for (var _0x3d8324 = _0x129e29.nameTable[_0x25f999]; _0x3d8324; _0x3d8324 = _0x3d8324.name_next) {
        var _0x5225cf = _0x3d8324.name;
        if (_0x3d8324.parent.id === _0x4b674c.id && _0x5225cf === _0x5db177) {
          return _0x3d8324;
        }
      }
      return _0x129e29.lookup(_0x4b674c, _0x5db177);
    },
    createNode: function (_0x4a307f, _0x1ad997, _0x32efce, _0x195cec) {
      var _0x585224 = new _0x129e29.FSNode(_0x4a307f, _0x1ad997, _0x32efce, _0x195cec);
      _0x129e29.hashAddNode(_0x585224);
      return _0x585224;
    },
    destroyNode: function (_0x4483fa) {
      _0x129e29.hashRemoveNode(_0x4483fa);
    },
    isRoot: function (_0x3b2ed7) {
      return _0x3b2ed7 === _0x3b2ed7.parent;
    },
    isMountpoint: function (_0x27bc23) {
      return !!_0x27bc23.mounted;
    },
    isFile: function (_0x4db6c2) {
      return (_0x4db6c2 & 61440) === 32768;
    },
    isDir: function (_0x78484c) {
      return (_0x78484c & 61440) === 16384;
    },
    isLink: function (_0x36a695) {
      return (_0x36a695 & 61440) === 40960;
    },
    isChrdev: function (_0x59935d) {
      return (_0x59935d & 61440) === 8192;
    },
    isBlkdev: function (_0x168f42) {
      return (_0x168f42 & 61440) === 24576;
    },
    isFIFO: function (_0x303e63) {
      return (_0x303e63 & 61440) === 4096;
    },
    isSocket: function (_0x3aa9df) {
      return (_0x3aa9df & 49152) === 49152;
    },
    flagModes: {
      r: 0,
      "r+": 2,
      w: 577,
      "w+": 578,
      a: 1089,
      "a+": 1090
    },
    modeStringToFlags: function (_0x1d02b8) {
      var _0x3a8d64 = _0x129e29.flagModes[_0x1d02b8];
      if (typeof _0x3a8d64 === "undefined") {
        throw new Error("Unknown file open mode: " + _0x1d02b8);
      }
      return _0x3a8d64;
    },
    flagsToPermissionString: function (_0xaaac03) {
      var _0x337ddb = ["r", "w", "rw"][_0xaaac03 & 3];
      if (_0xaaac03 & 512) {
        _0x337ddb += "w";
      }
      return _0x337ddb;
    },
    nodePermissions: function (_0x95f8cc, _0x308de4) {
      if (_0x129e29.ignorePermissions) {
        return 0;
      }
      if (_0x308de4.includes("r") && !(_0x95f8cc.mode & 292)) {
        return 2;
      } else if (_0x308de4.includes("w") && !(_0x95f8cc.mode & 146)) {
        return 2;
      } else if (_0x308de4.includes("x") && !(_0x95f8cc.mode & 73)) {
        return 2;
      }
      return 0;
    },
    mayLookup: function (_0x2721a8) {
      var _0xcdda5e = _0x129e29.nodePermissions(_0x2721a8, "x");
      if (_0xcdda5e) {
        return _0xcdda5e;
      }
      if (!_0x2721a8.node_ops.lookup) {
        return 2;
      }
      return 0;
    },
    mayCreate: function (_0x287977, _0x4129de) {
      try {
        var _0x1a901f = _0x129e29.lookupNode(_0x287977, _0x4129de);
        return 20;
      } catch (_0x109c47) {}
      return _0x129e29.nodePermissions(_0x287977, "wx");
    },
    mayDelete: function (_0x2d38e5, _0x508c81, _0x41cd21) {
      var _0x5a3da8;
      try {
        _0x5a3da8 = _0x129e29.lookupNode(_0x2d38e5, _0x508c81);
      } catch (_0x39dbc9) {
        return _0x39dbc9.errno;
      }
      var _0x388b7b = _0x129e29.nodePermissions(_0x2d38e5, "wx");
      if (_0x388b7b) {
        return _0x388b7b;
      }
      if (_0x41cd21) {
        if (!_0x129e29.isDir(_0x5a3da8.mode)) {
          return 54;
        }
        if (_0x129e29.isRoot(_0x5a3da8) || _0x129e29.getPath(_0x5a3da8) === _0x129e29.cwd()) {
          return 10;
        }
      } else if (_0x129e29.isDir(_0x5a3da8.mode)) {
        return 31;
      }
      return 0;
    },
    mayOpen: function (_0x2234c5, _0x50b54a) {
      if (!_0x2234c5) {
        return 44;
      }
      if (_0x129e29.isLink(_0x2234c5.mode)) {
        return 32;
      } else if (_0x129e29.isDir(_0x2234c5.mode)) {
        if (_0x129e29.flagsToPermissionString(_0x50b54a) !== "r" || _0x50b54a & 512) {
          return 31;
        }
      }
      return _0x129e29.nodePermissions(_0x2234c5, _0x129e29.flagsToPermissionString(_0x50b54a));
    },
    MAX_OPEN_FDS: 4096,
    nextfd: function (_0x3634b9, _0x5a35e3) {
      _0x3634b9 = _0x3634b9 || 0;
      _0x5a35e3 = _0x5a35e3 || _0x129e29.MAX_OPEN_FDS;
      for (var _0x91b75e = _0x3634b9; _0x91b75e <= _0x5a35e3; _0x91b75e++) {
        if (!_0x129e29.streams[_0x91b75e]) {
          return _0x91b75e;
        }
      }
      throw new _0x129e29.ErrnoError(33);
    },
    getStream: function (_0x46ec9c) {
      return _0x129e29.streams[_0x46ec9c];
    },
    createStream: function (_0x4751d5, _0x51bde5, _0x5d6cd1) {
      if (!_0x129e29.FSStream) {
        _0x129e29.FSStream = function () {};
        _0x129e29.FSStream.prototype = {
          object: {
            get: function () {
              return this.node;
            },
            set: function (_0x2a3d61) {
              this.node = _0x2a3d61;
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
      var _0x440424 = new _0x129e29.FSStream();
      for (var _0x460bb8 in _0x4751d5) {
        _0x440424[_0x460bb8] = _0x4751d5[_0x460bb8];
      }
      _0x4751d5 = _0x440424;
      var _0x381ac1 = _0x129e29.nextfd(_0x51bde5, _0x5d6cd1);
      _0x4751d5.fd = _0x381ac1;
      _0x129e29.streams[_0x381ac1] = _0x4751d5;
      return _0x4751d5;
    },
    closeStream: function (_0x3372b7) {
      _0x129e29.streams[_0x3372b7] = null;
    },
    chrdev_stream_ops: {
      open: function (_0x5daaad) {
        var _0x4926d2 = _0x129e29.getDevice(_0x5daaad.node.rdev);
        _0x5daaad.stream_ops = _0x4926d2.stream_ops;
        if (_0x5daaad.stream_ops.open) {
          _0x5daaad.stream_ops.open(_0x5daaad);
        }
      },
      llseek: function () {
        throw new _0x129e29.ErrnoError(70);
      }
    },
    major: function (_0x3c1032) {
      return _0x3c1032 >> 8;
    },
    minor: function (_0x1b390a) {
      return _0x1b390a & 255;
    },
    makedev: function (_0x5d2288, _0x3ed5d2) {
      return _0x5d2288 << 8 | _0x3ed5d2;
    },
    registerDevice: function (_0xb1a2af, _0x4c7431) {
      _0x129e29.devices[_0xb1a2af] = {
        stream_ops: _0x4c7431
      };
    },
    getDevice: function (_0x49d4ea) {
      return _0x129e29.devices[_0x49d4ea];
    },
    getMounts: function (_0x53864b) {
      var _0x18d1b3 = [];
      var _0x4a3d9c = [_0x53864b];
      while (_0x4a3d9c.length) {
        var _0x4715f5 = _0x4a3d9c.pop();
        _0x18d1b3.push(_0x4715f5);
        _0x4a3d9c.push.apply(_0x4a3d9c, _0x4715f5.mounts);
      }
      return _0x18d1b3;
    },
    syncfs: function (_0x1e08cf, _0x3d7d7f) {
      if (typeof _0x1e08cf === "function") {
        _0x3d7d7f = _0x1e08cf;
        _0x1e08cf = false;
      }
      _0x129e29.syncFSRequests++;
      if (_0x129e29.syncFSRequests > 1) {
        _0x266425("warning: " + _0x129e29.syncFSRequests + " FS.syncfs operations in flight at once, probably just doing extra work");
      }
      var _0x1bf925 = _0x129e29.getMounts(_0x129e29.root.mount);
      var _0x3791e5 = 0;
      function _0x4f91fd(_0x22b4e9) {
        _0x129e29.syncFSRequests--;
        return _0x3d7d7f(_0x22b4e9);
      }
      function _0x39fcdd(_0x3a7928) {
        if (_0x3a7928) {
          if (!_0x39fcdd.errored) {
            _0x39fcdd.errored = true;
            return _0x4f91fd(_0x3a7928);
          }
          return;
        }
        if (++_0x3791e5 >= _0x1bf925.length) {
          _0x4f91fd(null);
        }
      }
      _0x1bf925.forEach(function (_0x151b38) {
        if (!_0x151b38.type.syncfs) {
          return _0x39fcdd(null);
        }
        _0x151b38.type.syncfs(_0x151b38, _0x1e08cf, _0x39fcdd);
      });
    },
    mount: function (_0x28224d, _0x1b8d46, _0x44e99c) {
      var _0x1d9a40 = _0x44e99c === "/";
      var _0x45ba69 = !_0x44e99c;
      var _0x2b3acb;
      if (_0x1d9a40 && _0x129e29.root) {
        throw new _0x129e29.ErrnoError(10);
      } else if (!_0x1d9a40 && !_0x45ba69) {
        var _0x12de8c = _0x129e29.lookupPath(_0x44e99c, {
          follow_mount: false
        });
        _0x44e99c = _0x12de8c.path;
        _0x2b3acb = _0x12de8c.node;
        if (_0x129e29.isMountpoint(_0x2b3acb)) {
          throw new _0x129e29.ErrnoError(10);
        }
        if (!_0x129e29.isDir(_0x2b3acb.mode)) {
          throw new _0x129e29.ErrnoError(54);
        }
      }
      var _0x16212d = {
        type: _0x28224d,
        opts: _0x1b8d46,
        mountpoint: _0x44e99c,
        mounts: []
      };
      var _0x43b414 = _0x28224d.mount(_0x16212d);
      _0x43b414.mount = _0x16212d;
      _0x16212d.root = _0x43b414;
      if (_0x1d9a40) {
        _0x129e29.root = _0x43b414;
      } else if (_0x2b3acb) {
        _0x2b3acb.mounted = _0x16212d;
        if (_0x2b3acb.mount) {
          _0x2b3acb.mount.mounts.push(_0x16212d);
        }
      }
      return _0x43b414;
    },
    unmount: function (_0x27f565) {
      var _0x6d0a6b = _0x129e29.lookupPath(_0x27f565, {
        follow_mount: false
      });
      if (!_0x129e29.isMountpoint(_0x6d0a6b.node)) {
        throw new _0x129e29.ErrnoError(28);
      }
      var _0x5a0ea9 = _0x6d0a6b.node;
      var _0x1a52e8 = _0x5a0ea9.mounted;
      var _0x5d7b76 = _0x129e29.getMounts(_0x1a52e8);
      Object.keys(_0x129e29.nameTable).forEach(function (_0x386b9f) {
        var _0x39fda6 = _0x129e29.nameTable[_0x386b9f];
        while (_0x39fda6) {
          var _0x11e77c = _0x39fda6.name_next;
          if (_0x5d7b76.includes(_0x39fda6.mount)) {
            _0x129e29.destroyNode(_0x39fda6);
          }
          _0x39fda6 = _0x11e77c;
        }
      });
      _0x5a0ea9.mounted = null;
      var _0x2642cd = _0x5a0ea9.mount.mounts.indexOf(_0x1a52e8);
      _0x5a0ea9.mount.mounts.splice(_0x2642cd, 1);
    },
    lookup: function (_0x212649, _0x2176d8) {
      return _0x212649.node_ops.lookup(_0x212649, _0x2176d8);
    },
    mknod: function (_0x3f27d4, _0x3e9e3f, _0x20c981) {
      var _0x4fb8c8 = _0x129e29.lookupPath(_0x3f27d4, {
        parent: true
      });
      var _0xab25cf = _0x4fb8c8.node;
      var _0xe5587e = _0x261f1b.basename(_0x3f27d4);
      if (!_0xe5587e || _0xe5587e === "." || _0xe5587e === "..") {
        throw new _0x129e29.ErrnoError(28);
      }
      var _0x2c6475 = _0x129e29.mayCreate(_0xab25cf, _0xe5587e);
      if (_0x2c6475) {
        throw new _0x129e29.ErrnoError(_0x2c6475);
      }
      if (!_0xab25cf.node_ops.mknod) {
        throw new _0x129e29.ErrnoError(63);
      }
      return _0xab25cf.node_ops.mknod(_0xab25cf, _0xe5587e, _0x3e9e3f, _0x20c981);
    },
    create: function (_0x242a40, _0x4de131) {
      _0x4de131 = _0x4de131 !== undefined ? _0x4de131 : 438;
      _0x4de131 &= 4095;
      _0x4de131 |= 32768;
      return _0x129e29.mknod(_0x242a40, _0x4de131, 0);
    },
    mkdir: function (_0x3ffddb, _0xf347d0) {
      _0xf347d0 = _0xf347d0 !== undefined ? _0xf347d0 : 511;
      _0xf347d0 &= 1023;
      _0xf347d0 |= 16384;
      return _0x129e29.mknod(_0x3ffddb, _0xf347d0, 0);
    },
    mkdirTree: function (_0x258cc1, _0x249790) {
      var _0x607914 = _0x258cc1.split("/");
      var _0x40d6e9 = "";
      for (var _0x4a4d92 = 0; _0x4a4d92 < _0x607914.length; ++_0x4a4d92) {
        if (!_0x607914[_0x4a4d92]) {
          continue;
        }
        _0x40d6e9 += "/" + _0x607914[_0x4a4d92];
        try {
          _0x129e29.mkdir(_0x40d6e9, _0x249790);
        } catch (_0x224f7f) {
          if (_0x224f7f.errno != 20) {
            throw _0x224f7f;
          }
        }
      }
    },
    mkdev: function (_0x1ac490, _0x20c9c7, _0xb3248b) {
      if (typeof _0xb3248b === "undefined") {
        _0xb3248b = _0x20c9c7;
        _0x20c9c7 = 438;
      }
      _0x20c9c7 |= 8192;
      return _0x129e29.mknod(_0x1ac490, _0x20c9c7, _0xb3248b);
    },
    symlink: function (_0x2d3d12, _0x93db23) {
      if (!_0x25f3b4.resolve(_0x2d3d12)) {
        throw new _0x129e29.ErrnoError(44);
      }
      var _0x517db6 = _0x129e29.lookupPath(_0x93db23, {
        parent: true
      });
      var _0x1fbcf2 = _0x517db6.node;
      if (!_0x1fbcf2) {
        throw new _0x129e29.ErrnoError(44);
      }
      var _0x5e12b1 = _0x261f1b.basename(_0x93db23);
      var _0x36c180 = _0x129e29.mayCreate(_0x1fbcf2, _0x5e12b1);
      if (_0x36c180) {
        throw new _0x129e29.ErrnoError(_0x36c180);
      }
      if (!_0x1fbcf2.node_ops.symlink) {
        throw new _0x129e29.ErrnoError(63);
      }
      return _0x1fbcf2.node_ops.symlink(_0x1fbcf2, _0x5e12b1, _0x2d3d12);
    },
    rename: function (_0x4a5e6d, _0x552d0a) {
      var _0x51357a = _0x261f1b.dirname(_0x4a5e6d);
      var _0x461996 = _0x261f1b.dirname(_0x552d0a);
      var _0x4bf1c9 = _0x261f1b.basename(_0x4a5e6d);
      var _0x25a78f = _0x261f1b.basename(_0x552d0a);
      var _0x3ec1c9;
      var _0x498ea1;
      var _0x4bbcec;
      _0x3ec1c9 = _0x129e29.lookupPath(_0x4a5e6d, {
        parent: true
      });
      _0x498ea1 = _0x3ec1c9.node;
      _0x3ec1c9 = _0x129e29.lookupPath(_0x552d0a, {
        parent: true
      });
      _0x4bbcec = _0x3ec1c9.node;
      if (!_0x498ea1 || !_0x4bbcec) {
        throw new _0x129e29.ErrnoError(44);
      }
      if (_0x498ea1.mount !== _0x4bbcec.mount) {
        throw new _0x129e29.ErrnoError(75);
      }
      var _0x5daf53 = _0x129e29.lookupNode(_0x498ea1, _0x4bf1c9);
      var _0x91cf4d = _0x25f3b4.relative(_0x4a5e6d, _0x461996);
      if (_0x91cf4d.charAt(0) !== ".") {
        throw new _0x129e29.ErrnoError(28);
      }
      _0x91cf4d = _0x25f3b4.relative(_0x552d0a, _0x51357a);
      if (_0x91cf4d.charAt(0) !== ".") {
        throw new _0x129e29.ErrnoError(55);
      }
      var _0x45fcc0;
      try {
        _0x45fcc0 = _0x129e29.lookupNode(_0x4bbcec, _0x25a78f);
      } catch (_0x38af3d) {}
      if (_0x5daf53 === _0x45fcc0) {
        return;
      }
      var _0x505672 = _0x129e29.isDir(_0x5daf53.mode);
      var _0x1719e2 = _0x129e29.mayDelete(_0x498ea1, _0x4bf1c9, _0x505672);
      if (_0x1719e2) {
        throw new _0x129e29.ErrnoError(_0x1719e2);
      }
      _0x1719e2 = _0x45fcc0 ? _0x129e29.mayDelete(_0x4bbcec, _0x25a78f, _0x505672) : _0x129e29.mayCreate(_0x4bbcec, _0x25a78f);
      if (_0x1719e2) {
        throw new _0x129e29.ErrnoError(_0x1719e2);
      }
      if (!_0x498ea1.node_ops.rename) {
        throw new _0x129e29.ErrnoError(63);
      }
      if (_0x129e29.isMountpoint(_0x5daf53) || _0x45fcc0 && _0x129e29.isMountpoint(_0x45fcc0)) {
        throw new _0x129e29.ErrnoError(10);
      }
      if (_0x4bbcec !== _0x498ea1) {
        _0x1719e2 = _0x129e29.nodePermissions(_0x498ea1, "w");
        if (_0x1719e2) {
          throw new _0x129e29.ErrnoError(_0x1719e2);
        }
      }
      try {
        if (_0x129e29.trackingDelegate.willMovePath) {
          _0x129e29.trackingDelegate.willMovePath(_0x4a5e6d, _0x552d0a);
        }
      } catch (_0x4ef534) {
        _0x266425("FS.trackingDelegate['willMovePath']('" + _0x4a5e6d + "', '" + _0x552d0a + "') threw an exception: " + _0x4ef534.message);
      }
      _0x129e29.hashRemoveNode(_0x5daf53);
      try {
        _0x498ea1.node_ops.rename(_0x5daf53, _0x4bbcec, _0x25a78f);
      } catch (_0x154e69) {
        throw _0x154e69;
      } finally {
        _0x129e29.hashAddNode(_0x5daf53);
      }
      try {
        if (_0x129e29.trackingDelegate.onMovePath) {
          _0x129e29.trackingDelegate.onMovePath(_0x4a5e6d, _0x552d0a);
        }
      } catch (_0x317dc5) {
        _0x266425("FS.trackingDelegate['onMovePath']('" + _0x4a5e6d + "', '" + _0x552d0a + "') threw an exception: " + _0x317dc5.message);
      }
    },
    rmdir: function (_0x52656c) {
      var _0x159309 = _0x129e29.lookupPath(_0x52656c, {
        parent: true
      });
      var _0x3d9546 = _0x159309.node;
      var _0x15eee3 = _0x261f1b.basename(_0x52656c);
      var _0x533e29 = _0x129e29.lookupNode(_0x3d9546, _0x15eee3);
      var _0x3d3c9e = _0x129e29.mayDelete(_0x3d9546, _0x15eee3, true);
      if (_0x3d3c9e) {
        throw new _0x129e29.ErrnoError(_0x3d3c9e);
      }
      if (!_0x3d9546.node_ops.rmdir) {
        throw new _0x129e29.ErrnoError(63);
      }
      if (_0x129e29.isMountpoint(_0x533e29)) {
        throw new _0x129e29.ErrnoError(10);
      }
      try {
        if (_0x129e29.trackingDelegate.willDeletePath) {
          _0x129e29.trackingDelegate.willDeletePath(_0x52656c);
        }
      } catch (_0x3699ff) {
        _0x266425("FS.trackingDelegate['willDeletePath']('" + _0x52656c + "') threw an exception: " + _0x3699ff.message);
      }
      _0x3d9546.node_ops.rmdir(_0x3d9546, _0x15eee3);
      _0x129e29.destroyNode(_0x533e29);
      try {
        if (_0x129e29.trackingDelegate.onDeletePath) {
          _0x129e29.trackingDelegate.onDeletePath(_0x52656c);
        }
      } catch (_0x57bed3) {
        _0x266425("FS.trackingDelegate['onDeletePath']('" + _0x52656c + "') threw an exception: " + _0x57bed3.message);
      }
    },
    readdir: function (_0xfc0d4b) {
      var _0x533649 = _0x129e29.lookupPath(_0xfc0d4b, {
        follow: true
      });
      var _0x4b6f7f = _0x533649.node;
      if (!_0x4b6f7f.node_ops.readdir) {
        throw new _0x129e29.ErrnoError(54);
      }
      return _0x4b6f7f.node_ops.readdir(_0x4b6f7f);
    },
    unlink: function (_0x547b97) {
      var _0x1b6a15 = _0x129e29.lookupPath(_0x547b97, {
        parent: true
      });
      var _0xba5215 = _0x1b6a15.node;
      var _0x1bec1b = _0x261f1b.basename(_0x547b97);
      var _0x49f76d = _0x129e29.lookupNode(_0xba5215, _0x1bec1b);
      var _0x8ad2d4 = _0x129e29.mayDelete(_0xba5215, _0x1bec1b, false);
      if (_0x8ad2d4) {
        throw new _0x129e29.ErrnoError(_0x8ad2d4);
      }
      if (!_0xba5215.node_ops.unlink) {
        throw new _0x129e29.ErrnoError(63);
      }
      if (_0x129e29.isMountpoint(_0x49f76d)) {
        throw new _0x129e29.ErrnoError(10);
      }
      try {
        if (_0x129e29.trackingDelegate.willDeletePath) {
          _0x129e29.trackingDelegate.willDeletePath(_0x547b97);
        }
      } catch (_0x1af70b) {
        _0x266425("FS.trackingDelegate['willDeletePath']('" + _0x547b97 + "') threw an exception: " + _0x1af70b.message);
      }
      _0xba5215.node_ops.unlink(_0xba5215, _0x1bec1b);
      _0x129e29.destroyNode(_0x49f76d);
      try {
        if (_0x129e29.trackingDelegate.onDeletePath) {
          _0x129e29.trackingDelegate.onDeletePath(_0x547b97);
        }
      } catch (_0x390d51) {
        _0x266425("FS.trackingDelegate['onDeletePath']('" + _0x547b97 + "') threw an exception: " + _0x390d51.message);
      }
    },
    readlink: function (_0xeaaac1) {
      var _0x1da0b0 = _0x129e29.lookupPath(_0xeaaac1);
      var _0x50a892 = _0x1da0b0.node;
      if (!_0x50a892) {
        throw new _0x129e29.ErrnoError(44);
      }
      if (!_0x50a892.node_ops.readlink) {
        throw new _0x129e29.ErrnoError(28);
      }
      return _0x25f3b4.resolve(_0x129e29.getPath(_0x50a892.parent), _0x50a892.node_ops.readlink(_0x50a892));
    },
    stat: function (_0x19d5ef, _0x528412) {
      var _0x878e37 = _0x129e29.lookupPath(_0x19d5ef, {
        follow: !_0x528412
      });
      var _0x5557e2 = _0x878e37.node;
      if (!_0x5557e2) {
        throw new _0x129e29.ErrnoError(44);
      }
      if (!_0x5557e2.node_ops.getattr) {
        throw new _0x129e29.ErrnoError(63);
      }
      return _0x5557e2.node_ops.getattr(_0x5557e2);
    },
    lstat: function (_0x5c880a) {
      return _0x129e29.stat(_0x5c880a, true);
    },
    chmod: function (_0x4a89e4, _0x341064, _0x565d22) {
      var _0x4d8c25;
      if (typeof _0x4a89e4 === "string") {
        var _0x1fad34 = _0x129e29.lookupPath(_0x4a89e4, {
          follow: !_0x565d22
        });
        _0x4d8c25 = _0x1fad34.node;
      } else {
        _0x4d8c25 = _0x4a89e4;
      }
      if (!_0x4d8c25.node_ops.setattr) {
        throw new _0x129e29.ErrnoError(63);
      }
      _0x4d8c25.node_ops.setattr(_0x4d8c25, {
        mode: _0x341064 & 4095 | _0x4d8c25.mode & ~4095,
        timestamp: Date.now()
      });
    },
    lchmod: function (_0x2bf80d, _0x11eb73) {
      _0x129e29.chmod(_0x2bf80d, _0x11eb73, true);
    },
    fchmod: function (_0x40bc8b, _0x1a6da3) {
      var _0x449c77 = _0x129e29.getStream(_0x40bc8b);
      if (!_0x449c77) {
        throw new _0x129e29.ErrnoError(8);
      }
      _0x129e29.chmod(_0x449c77.node, _0x1a6da3);
    },
    chown: function (_0x4b8309, _0x2548d9, _0x390c6f, _0x361e15) {
      var _0x59af94;
      if (typeof _0x4b8309 === "string") {
        var _0x1639bf = _0x129e29.lookupPath(_0x4b8309, {
          follow: !_0x361e15
        });
        _0x59af94 = _0x1639bf.node;
      } else {
        _0x59af94 = _0x4b8309;
      }
      if (!_0x59af94.node_ops.setattr) {
        throw new _0x129e29.ErrnoError(63);
      }
      _0x59af94.node_ops.setattr(_0x59af94, {
        timestamp: Date.now()
      });
    },
    lchown: function (_0x2c6f5e, _0x1c946a, _0x518173) {
      _0x129e29.chown(_0x2c6f5e, _0x1c946a, _0x518173, true);
    },
    fchown: function (_0x2e3457, _0x58c889, _0x1f3d33) {
      var _0x2f9fbb = _0x129e29.getStream(_0x2e3457);
      if (!_0x2f9fbb) {
        throw new _0x129e29.ErrnoError(8);
      }
      _0x129e29.chown(_0x2f9fbb.node, _0x58c889, _0x1f3d33);
    },
    truncate: function (_0x427df4, _0x2be16f) {
      if (_0x2be16f < 0) {
        throw new _0x129e29.ErrnoError(28);
      }
      var _0x5d437b;
      if (typeof _0x427df4 === "string") {
        var _0x5208a5 = _0x129e29.lookupPath(_0x427df4, {
          follow: true
        });
        _0x5d437b = _0x5208a5.node;
      } else {
        _0x5d437b = _0x427df4;
      }
      if (!_0x5d437b.node_ops.setattr) {
        throw new _0x129e29.ErrnoError(63);
      }
      if (_0x129e29.isDir(_0x5d437b.mode)) {
        throw new _0x129e29.ErrnoError(31);
      }
      if (!_0x129e29.isFile(_0x5d437b.mode)) {
        throw new _0x129e29.ErrnoError(28);
      }
      var _0x10cc68 = _0x129e29.nodePermissions(_0x5d437b, "w");
      if (_0x10cc68) {
        throw new _0x129e29.ErrnoError(_0x10cc68);
      }
      _0x5d437b.node_ops.setattr(_0x5d437b, {
        size: _0x2be16f,
        timestamp: Date.now()
      });
    },
    ftruncate: function (_0x537fd5, _0x491a95) {
      var _0x52a189 = _0x129e29.getStream(_0x537fd5);
      if (!_0x52a189) {
        throw new _0x129e29.ErrnoError(8);
      }
      if ((_0x52a189.flags & 2097155) === 0) {
        throw new _0x129e29.ErrnoError(28);
      }
      _0x129e29.truncate(_0x52a189.node, _0x491a95);
    },
    utime: function (_0x5c92ff, _0x45b780, _0x1c1fac) {
      var _0x8c0639 = _0x129e29.lookupPath(_0x5c92ff, {
        follow: true
      });
      var _0x40fa14 = _0x8c0639.node;
      _0x40fa14.node_ops.setattr(_0x40fa14, {
        timestamp: Math.max(_0x45b780, _0x1c1fac)
      });
    },
    open: function (_0x27acda, _0x2536f6, _0x59087d, _0x10da30, _0x5e65ef) {
      if (_0x27acda === "") {
        throw new _0x129e29.ErrnoError(44);
      }
      _0x2536f6 = typeof _0x2536f6 === "string" ? _0x129e29.modeStringToFlags(_0x2536f6) : _0x2536f6;
      _0x59087d = typeof _0x59087d === "undefined" ? 438 : _0x59087d;
      if (_0x2536f6 & 64) {
        _0x59087d = _0x59087d & 4095 | 32768;
      } else {
        _0x59087d = 0;
      }
      var _0x8b00a4;
      if (typeof _0x27acda === "object") {
        _0x8b00a4 = _0x27acda;
      } else {
        _0x27acda = _0x261f1b.normalize(_0x27acda);
        try {
          var _0x30c653 = _0x129e29.lookupPath(_0x27acda, {
            follow: !(_0x2536f6 & 131072)
          });
          _0x8b00a4 = _0x30c653.node;
        } catch (_0x4ee445) {}
      }
      var _0x5b13c5 = false;
      if (_0x2536f6 & 64) {
        if (_0x8b00a4) {
          if (_0x2536f6 & 128) {
            throw new _0x129e29.ErrnoError(20);
          }
        } else {
          _0x8b00a4 = _0x129e29.mknod(_0x27acda, _0x59087d, 0);
          _0x5b13c5 = true;
        }
      }
      if (!_0x8b00a4) {
        throw new _0x129e29.ErrnoError(44);
      }
      if (_0x129e29.isChrdev(_0x8b00a4.mode)) {
        _0x2536f6 &= ~512;
      }
      if (_0x2536f6 & 65536 && !_0x129e29.isDir(_0x8b00a4.mode)) {
        throw new _0x129e29.ErrnoError(54);
      }
      if (!_0x5b13c5) {
        var _0x34d681 = _0x129e29.mayOpen(_0x8b00a4, _0x2536f6);
        if (_0x34d681) {
          throw new _0x129e29.ErrnoError(_0x34d681);
        }
      }
      if (_0x2536f6 & 512) {
        _0x129e29.truncate(_0x8b00a4, 0);
      }
      _0x2536f6 &= ~131712;
      var _0x3b0ce5 = _0x129e29.createStream({
        node: _0x8b00a4,
        path: _0x129e29.getPath(_0x8b00a4),
        flags: _0x2536f6,
        seekable: true,
        position: 0,
        stream_ops: _0x8b00a4.stream_ops,
        ungotten: [],
        error: false
      }, _0x10da30, _0x5e65ef);
      if (_0x3b0ce5.stream_ops.open) {
        _0x3b0ce5.stream_ops.open(_0x3b0ce5);
      }
      if (_0x3255d0.logReadFiles && !(_0x2536f6 & 1)) {
        if (!_0x129e29.readFiles) {
          _0x129e29.readFiles = {};
        }
        if (!(_0x27acda in _0x129e29.readFiles)) {
          _0x129e29.readFiles[_0x27acda] = 1;
          _0x266425("FS.trackingDelegate error on read file: " + _0x27acda);
        }
      }
      try {
        if (_0x129e29.trackingDelegate.onOpenFile) {
          var _0x4c7bb8 = 0;
          if ((_0x2536f6 & 2097155) !== 1) {
            _0x4c7bb8 |= _0x129e29.tracking.openFlags.READ;
          }
          if ((_0x2536f6 & 2097155) !== 0) {
            _0x4c7bb8 |= _0x129e29.tracking.openFlags.WRITE;
          }
          _0x129e29.trackingDelegate.onOpenFile(_0x27acda, _0x4c7bb8);
        }
      } catch (_0x217735) {
        _0x266425("FS.trackingDelegate['onOpenFile']('" + _0x27acda + "', flags) threw an exception: " + _0x217735.message);
      }
      return _0x3b0ce5;
    },
    close: function (_0x48fb3c) {
      if (_0x129e29.isClosed(_0x48fb3c)) {
        throw new _0x129e29.ErrnoError(8);
      }
      if (_0x48fb3c.getdents) {
        _0x48fb3c.getdents = null;
      }
      try {
        if (_0x48fb3c.stream_ops.close) {
          _0x48fb3c.stream_ops.close(_0x48fb3c);
        }
      } catch (_0x570ecd) {
        throw _0x570ecd;
      } finally {
        _0x129e29.closeStream(_0x48fb3c.fd);
      }
      _0x48fb3c.fd = null;
    },
    isClosed: function (_0xea623e) {
      return _0xea623e.fd === null;
    },
    llseek: function (_0x4982aa, _0x511a64, _0x520dd3) {
      if (_0x129e29.isClosed(_0x4982aa)) {
        throw new _0x129e29.ErrnoError(8);
      }
      if (!_0x4982aa.seekable || !_0x4982aa.stream_ops.llseek) {
        throw new _0x129e29.ErrnoError(70);
      }
      if (_0x520dd3 != 0 && _0x520dd3 != 1 && _0x520dd3 != 2) {
        throw new _0x129e29.ErrnoError(28);
      }
      _0x4982aa.position = _0x4982aa.stream_ops.llseek(_0x4982aa, _0x511a64, _0x520dd3);
      _0x4982aa.ungotten = [];
      return _0x4982aa.position;
    },
    read: function (_0x37150a, _0x5e9d5b, _0x1c07d5, _0x3386bc, _0x4fa1d1) {
      if (_0x3386bc < 0 || _0x4fa1d1 < 0) {
        throw new _0x129e29.ErrnoError(28);
      }
      if (_0x129e29.isClosed(_0x37150a)) {
        throw new _0x129e29.ErrnoError(8);
      }
      if ((_0x37150a.flags & 2097155) === 1) {
        throw new _0x129e29.ErrnoError(8);
      }
      if (_0x129e29.isDir(_0x37150a.node.mode)) {
        throw new _0x129e29.ErrnoError(31);
      }
      if (!_0x37150a.stream_ops.read) {
        throw new _0x129e29.ErrnoError(28);
      }
      var _0x2bf221 = typeof _0x4fa1d1 !== "undefined";
      if (!_0x2bf221) {
        _0x4fa1d1 = _0x37150a.position;
      } else if (!_0x37150a.seekable) {
        throw new _0x129e29.ErrnoError(70);
      }
      var _0x1be02e = _0x37150a.stream_ops.read(_0x37150a, _0x5e9d5b, _0x1c07d5, _0x3386bc, _0x4fa1d1);
      if (!_0x2bf221) {
        _0x37150a.position += _0x1be02e;
      }
      return _0x1be02e;
    },
    write: function (_0x113e9c, _0x2c3f69, _0x5d3a77, _0x4d9489, _0x279c88, _0x326a82) {
      if (_0x4d9489 < 0 || _0x279c88 < 0) {
        throw new _0x129e29.ErrnoError(28);
      }
      if (_0x129e29.isClosed(_0x113e9c)) {
        throw new _0x129e29.ErrnoError(8);
      }
      if ((_0x113e9c.flags & 2097155) === 0) {
        throw new _0x129e29.ErrnoError(8);
      }
      if (_0x129e29.isDir(_0x113e9c.node.mode)) {
        throw new _0x129e29.ErrnoError(31);
      }
      if (!_0x113e9c.stream_ops.write) {
        throw new _0x129e29.ErrnoError(28);
      }
      if (_0x113e9c.seekable && _0x113e9c.flags & 1024) {
        _0x129e29.llseek(_0x113e9c, 0, 2);
      }
      var _0x6a638c = typeof _0x279c88 !== "undefined";
      if (!_0x6a638c) {
        _0x279c88 = _0x113e9c.position;
      } else if (!_0x113e9c.seekable) {
        throw new _0x129e29.ErrnoError(70);
      }
      var _0x5344d6 = _0x113e9c.stream_ops.write(_0x113e9c, _0x2c3f69, _0x5d3a77, _0x4d9489, _0x279c88, _0x326a82);
      if (!_0x6a638c) {
        _0x113e9c.position += _0x5344d6;
      }
      try {
        if (_0x113e9c.path && _0x129e29.trackingDelegate.onWriteToFile) {
          _0x129e29.trackingDelegate.onWriteToFile(_0x113e9c.path);
        }
      } catch (_0x184586) {
        _0x266425("FS.trackingDelegate['onWriteToFile']('" + _0x113e9c.path + "') threw an exception: " + _0x184586.message);
      }
      return _0x5344d6;
    },
    allocate: function (_0x5739b9, _0x1b7de5, _0x412119) {
      if (_0x129e29.isClosed(_0x5739b9)) {
        throw new _0x129e29.ErrnoError(8);
      }
      if (_0x1b7de5 < 0 || _0x412119 <= 0) {
        throw new _0x129e29.ErrnoError(28);
      }
      if ((_0x5739b9.flags & 2097155) === 0) {
        throw new _0x129e29.ErrnoError(8);
      }
      if (!_0x129e29.isFile(_0x5739b9.node.mode) && !_0x129e29.isDir(_0x5739b9.node.mode)) {
        throw new _0x129e29.ErrnoError(43);
      }
      if (!_0x5739b9.stream_ops.allocate) {
        throw new _0x129e29.ErrnoError(138);
      }
      _0x5739b9.stream_ops.allocate(_0x5739b9, _0x1b7de5, _0x412119);
    },
    mmap: function (_0xe4ee73, _0x16cd47, _0x4c5a02, _0x1eeb4d, _0x518a25, _0x4dab1e) {
      if ((_0x518a25 & 2) !== 0 && (_0x4dab1e & 2) === 0 && (_0xe4ee73.flags & 2097155) !== 2) {
        throw new _0x129e29.ErrnoError(2);
      }
      if ((_0xe4ee73.flags & 2097155) === 1) {
        throw new _0x129e29.ErrnoError(2);
      }
      if (!_0xe4ee73.stream_ops.mmap) {
        throw new _0x129e29.ErrnoError(43);
      }
      return _0xe4ee73.stream_ops.mmap(_0xe4ee73, _0x16cd47, _0x4c5a02, _0x1eeb4d, _0x518a25, _0x4dab1e);
    },
    msync: function (_0x7a7a27, _0x47fcd0, _0x15c32f, _0x556ded, _0x2ef659) {
      if (!_0x7a7a27 || !_0x7a7a27.stream_ops.msync) {
        return 0;
      }
      return _0x7a7a27.stream_ops.msync(_0x7a7a27, _0x47fcd0, _0x15c32f, _0x556ded, _0x2ef659);
    },
    munmap: function (_0x465da4) {
      return 0;
    },
    ioctl: function (_0x41f601, _0x468a8a, _0x4e0beb) {
      if (!_0x41f601.stream_ops.ioctl) {
        throw new _0x129e29.ErrnoError(59);
      }
      return _0x41f601.stream_ops.ioctl(_0x41f601, _0x468a8a, _0x4e0beb);
    },
    readFile: function (_0x5249a1, _0x4a338e) {
      _0x4a338e = _0x4a338e || {};
      _0x4a338e.flags = _0x4a338e.flags || 0;
      _0x4a338e.encoding = _0x4a338e.encoding || "binary";
      if (_0x4a338e.encoding !== "utf8" && _0x4a338e.encoding !== "binary") {
        throw new Error("Invalid encoding type \"" + _0x4a338e.encoding + "\"");
      }
      var _0x1aefc1;
      var _0x57f821 = _0x129e29.open(_0x5249a1, _0x4a338e.flags);
      var _0x541263 = _0x129e29.stat(_0x5249a1);
      var _0x1618f0 = _0x541263.size;
      var _0x58a58b = new Uint8Array(_0x1618f0);
      _0x129e29.read(_0x57f821, _0x58a58b, 0, _0x1618f0, 0);
      if (_0x4a338e.encoding === "utf8") {
        _0x1aefc1 = _0x3665c7(_0x58a58b, 0);
      } else if (_0x4a338e.encoding === "binary") {
        _0x1aefc1 = _0x58a58b;
      }
      _0x129e29.close(_0x57f821);
      return _0x1aefc1;
    },
    writeFile: function (_0x5ef1b1, _0x228dba, _0x588692) {
      _0x588692 = _0x588692 || {};
      _0x588692.flags = _0x588692.flags || 577;
      var _0x5d30f6 = _0x129e29.open(_0x5ef1b1, _0x588692.flags, _0x588692.mode);
      if (typeof _0x228dba === "string") {
        var _0x1d5afa = new Uint8Array(_0x40d569(_0x228dba) + 1);
        var _0x4b0653 = _0x333663(_0x228dba, _0x1d5afa, 0, _0x1d5afa.length);
        _0x129e29.write(_0x5d30f6, _0x1d5afa, 0, _0x4b0653, undefined, _0x588692.canOwn);
      } else if (ArrayBuffer.isView(_0x228dba)) {
        _0x129e29.write(_0x5d30f6, _0x228dba, 0, _0x228dba.byteLength, undefined, _0x588692.canOwn);
      } else {
        throw new Error("Unsupported data type");
      }
      _0x129e29.close(_0x5d30f6);
    },
    cwd: function () {
      return _0x129e29.currentPath;
    },
    chdir: function (_0x475d44) {
      var _0x1de818 = _0x129e29.lookupPath(_0x475d44, {
        follow: true
      });
      if (_0x1de818.node === null) {
        throw new _0x129e29.ErrnoError(44);
      }
      if (!_0x129e29.isDir(_0x1de818.node.mode)) {
        throw new _0x129e29.ErrnoError(54);
      }
      var _0x4be3b2 = _0x129e29.nodePermissions(_0x1de818.node, "x");
      if (_0x4be3b2) {
        throw new _0x129e29.ErrnoError(_0x4be3b2);
      }
      _0x129e29.currentPath = _0x1de818.path;
    },
    createDefaultDirectories: function () {
      _0x129e29.mkdir("/tmp");
      _0x129e29.mkdir("/home");
      _0x129e29.mkdir("/home/web_user");
    },
    createDefaultDevices: function () {
      _0x129e29.mkdir("/dev");
      _0x129e29.registerDevice(_0x129e29.makedev(1, 3), {
        read: function () {
          return 0;
        },
        write: function (_0x435347, _0x452e93, _0x51882e, _0xd6cd4a, _0x30a8de) {
          return _0xd6cd4a;
        }
      });
      _0x129e29.mkdev("/dev/null", _0x129e29.makedev(1, 3));
      _0x3213f1.register(_0x129e29.makedev(5, 0), _0x3213f1.default_tty_ops);
      _0x3213f1.register(_0x129e29.makedev(6, 0), _0x3213f1.default_tty1_ops);
      _0x129e29.mkdev("/dev/tty", _0x129e29.makedev(5, 0));
      _0x129e29.mkdev("/dev/tty1", _0x129e29.makedev(6, 0));
      var _0x5150af = _0x2cca94();
      _0x129e29.createDevice("/dev", "random", _0x5150af);
      _0x129e29.createDevice("/dev", "urandom", _0x5150af);
      _0x129e29.mkdir("/dev/shm");
      _0x129e29.mkdir("/dev/shm/tmp");
    },
    createSpecialDirectories: function () {
      _0x129e29.mkdir("/proc");
      var _0x525d5e = _0x129e29.mkdir("/proc/self");
      _0x129e29.mkdir("/proc/self/fd");
      _0x129e29.mount({
        mount: function () {
          var _0x34c6a5 = _0x129e29.createNode(_0x525d5e, "fd", 16895, 73);
          _0x34c6a5.node_ops = {
            lookup: function (_0x21e796, _0xd736c0) {
              var _0x47d6ff = +_0xd736c0;
              var _0x5d6990 = _0x129e29.getStream(_0x47d6ff);
              if (!_0x5d6990) {
                throw new _0x129e29.ErrnoError(8);
              }
              var _0x27bea6 = {
                parent: null,
                mount: {
                  mountpoint: "fake"
                },
                node_ops: {
                  readlink: function () {
                    return _0x5d6990.path;
                  }
                }
              };
              _0x27bea6.parent = _0x27bea6;
              return _0x27bea6;
            }
          };
          return _0x34c6a5;
        }
      }, {}, "/proc/self/fd");
    },
    createStandardStreams: function () {
      if (_0x3255d0.stdin) {
        _0x129e29.createDevice("/dev", "stdin", _0x3255d0.stdin);
      } else {
        _0x129e29.symlink("/dev/tty", "/dev/stdin");
      }
      if (_0x3255d0.stdout) {
        _0x129e29.createDevice("/dev", "stdout", null, _0x3255d0.stdout);
      } else {
        _0x129e29.symlink("/dev/tty", "/dev/stdout");
      }
      if (_0x3255d0.stderr) {
        _0x129e29.createDevice("/dev", "stderr", null, _0x3255d0.stderr);
      } else {
        _0x129e29.symlink("/dev/tty1", "/dev/stderr");
      }
      var _0x30438c = _0x129e29.open("/dev/stdin", 0);
      var _0x1b83ad = _0x129e29.open("/dev/stdout", 1);
      var _0x11e1ba = _0x129e29.open("/dev/stderr", 1);
    },
    ensureErrnoError: function () {
      if (_0x129e29.ErrnoError) {
        return;
      }
      _0x129e29.ErrnoError = function _0x293026(_0x2d401f, _0x1c4ed9) {
        this.node = _0x1c4ed9;
        this.setErrno = function (_0x4ff8ef) {
          this.errno = _0x4ff8ef;
        };
        this.setErrno(_0x2d401f);
        this.message = "FS error";
      };
      _0x129e29.ErrnoError.prototype = new Error();
      _0x129e29.ErrnoError.prototype.constructor = _0x129e29.ErrnoError;
      [44].forEach(function (_0x309ee4) {
        _0x129e29.genericErrors[_0x309ee4] = new _0x129e29.ErrnoError(_0x309ee4);
        _0x129e29.genericErrors[_0x309ee4].stack = "<generic error, no stack>";
      });
    },
    staticInit: function () {
      _0x129e29.ensureErrnoError();
      _0x129e29.nameTable = new Array(4096);
      _0x129e29.mount(_0x40e403, {}, "/");
      _0x129e29.createDefaultDirectories();
      _0x129e29.createDefaultDevices();
      _0x129e29.createSpecialDirectories();
      _0x129e29.filesystems = {
        MEMFS: _0x40e403,
        IDBFS: _0x73057c
      };
    },
    init: function (_0x4ec816, _0x626199, _0x539f80) {
      _0x129e29.init.initialized = true;
      _0x129e29.ensureErrnoError();
      _0x3255d0.stdin = _0x4ec816 || _0x3255d0.stdin;
      _0x3255d0.stdout = _0x626199 || _0x3255d0.stdout;
      _0x3255d0.stderr = _0x539f80 || _0x3255d0.stderr;
      _0x129e29.createStandardStreams();
    },
    quit: function () {
      _0x129e29.init.initialized = false;
      var _0x1a1784 = _0x3255d0._fflush;
      if (_0x1a1784) {
        _0x1a1784(0);
      }
      for (var _0x53e412 = 0; _0x53e412 < _0x129e29.streams.length; _0x53e412++) {
        var _0x525083 = _0x129e29.streams[_0x53e412];
        if (!_0x525083) {
          continue;
        }
        _0x129e29.close(_0x525083);
      }
    },
    getMode: function (_0x354c52, _0x49b20b) {
      var _0x19ffd8 = 0;
      if (_0x354c52) {
        _0x19ffd8 |= 365;
      }
      if (_0x49b20b) {
        _0x19ffd8 |= 146;
      }
      return _0x19ffd8;
    },
    findObject: function (_0x453097, _0x35d2c5) {
      var _0x29aa4a = _0x129e29.analyzePath(_0x453097, _0x35d2c5);
      if (_0x29aa4a.exists) {
        return _0x29aa4a.object;
      } else {
        return null;
      }
    },
    analyzePath: function (_0x522d2c, _0xc9943f) {
      try {
        var _0x42a4ed = _0x129e29.lookupPath(_0x522d2c, {
          follow: !_0xc9943f
        });
        _0x522d2c = _0x42a4ed.path;
      } catch (_0x9e0db3) {}
      var _0x22928f = {
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
        var _0x42a4ed = _0x129e29.lookupPath(_0x522d2c, {
          parent: true
        });
        _0x22928f.parentExists = true;
        _0x22928f.parentPath = _0x42a4ed.path;
        _0x22928f.parentObject = _0x42a4ed.node;
        _0x22928f.name = _0x261f1b.basename(_0x522d2c);
        _0x42a4ed = _0x129e29.lookupPath(_0x522d2c, {
          follow: !_0xc9943f
        });
        _0x22928f.exists = true;
        _0x22928f.path = _0x42a4ed.path;
        _0x22928f.object = _0x42a4ed.node;
        _0x22928f.name = _0x42a4ed.node.name;
        _0x22928f.isRoot = _0x42a4ed.path === "/";
      } catch (_0x72a926) {
        _0x22928f.error = _0x72a926.errno;
      }
      return _0x22928f;
    },
    createPath: function (_0x3796cb, _0x5562fb, _0x265c81, _0xd4762) {
      _0x3796cb = typeof _0x3796cb === "string" ? _0x3796cb : _0x129e29.getPath(_0x3796cb);
      var _0x3830ba = _0x5562fb.split("/").reverse();
      while (_0x3830ba.length) {
        var _0x2ddfd7 = _0x3830ba.pop();
        if (!_0x2ddfd7) {
          continue;
        }
        var _0x348409 = _0x261f1b.join2(_0x3796cb, _0x2ddfd7);
        try {
          _0x129e29.mkdir(_0x348409);
        } catch (_0x323453) {}
        _0x3796cb = _0x348409;
      }
      return _0x348409;
    },
    createFile: function (_0x3f812a, _0x36513a, _0x3c4341, _0x1ec7e7, _0x521a1e) {
      var _0x33415d = _0x261f1b.join2(typeof _0x3f812a === "string" ? _0x3f812a : _0x129e29.getPath(_0x3f812a), _0x36513a);
      var _0x56b50e = _0x129e29.getMode(_0x1ec7e7, _0x521a1e);
      return _0x129e29.create(_0x33415d, _0x56b50e);
    },
    createDataFile: function (_0x17572b, _0x3802e5, _0x1216e6, _0x38a456, _0x536784, _0x219fc8) {
      var _0x26d64d = _0x3802e5 ? _0x261f1b.join2(typeof _0x17572b === "string" ? _0x17572b : _0x129e29.getPath(_0x17572b), _0x3802e5) : _0x17572b;
      var _0x5671fd = _0x129e29.getMode(_0x38a456, _0x536784);
      var _0x2adcb9 = _0x129e29.create(_0x26d64d, _0x5671fd);
      if (_0x1216e6) {
        if (typeof _0x1216e6 === "string") {
          var _0x1c96dc = new Array(_0x1216e6.length);
          for (var _0x29bfee = 0, _0x30e18d = _0x1216e6.length; _0x29bfee < _0x30e18d; ++_0x29bfee) {
            _0x1c96dc[_0x29bfee] = _0x1216e6.charCodeAt(_0x29bfee);
          }
          _0x1216e6 = _0x1c96dc;
        }
        _0x129e29.chmod(_0x2adcb9, _0x5671fd | 146);
        var _0x5d5e9f = _0x129e29.open(_0x2adcb9, 577);
        _0x129e29.write(_0x5d5e9f, _0x1216e6, 0, _0x1216e6.length, 0, _0x219fc8);
        _0x129e29.close(_0x5d5e9f);
        _0x129e29.chmod(_0x2adcb9, _0x5671fd);
      }
      return _0x2adcb9;
    },
    createDevice: function (_0x5635a0, _0x4b87d2, _0x1fc836, _0x23e818) {
      var _0x5d66f3 = _0x261f1b.join2(typeof _0x5635a0 === "string" ? _0x5635a0 : _0x129e29.getPath(_0x5635a0), _0x4b87d2);
      var _0x19b9fb = _0x129e29.getMode(!!_0x1fc836, !!_0x23e818);
      if (!_0x129e29.createDevice.major) {
        _0x129e29.createDevice.major = 64;
      }
      var _0x1ccae8 = _0x129e29.makedev(_0x129e29.createDevice.major++, 0);
      _0x129e29.registerDevice(_0x1ccae8, {
        open: function (_0x1a4b5d) {
          _0x1a4b5d.seekable = false;
        },
        close: function (_0x36f452) {
          if (_0x23e818 && _0x23e818.buffer && _0x23e818.buffer.length) {
            _0x23e818(10);
          }
        },
        read: function (_0x1dc4f4, _0x2146cb, _0xa07980, _0x168812, _0x462fbf) {
          var _0x252ff2 = 0;
          for (var _0x4ab05c = 0; _0x4ab05c < _0x168812; _0x4ab05c++) {
            var _0x3d5d59;
            try {
              _0x3d5d59 = _0x1fc836();
            } catch (_0x1c8092) {
              throw new _0x129e29.ErrnoError(29);
            }
            if (_0x3d5d59 === undefined && _0x252ff2 === 0) {
              throw new _0x129e29.ErrnoError(6);
            }
            if (_0x3d5d59 === null || _0x3d5d59 === undefined) {
              break;
            }
            _0x252ff2++;
            _0x2146cb[_0xa07980 + _0x4ab05c] = _0x3d5d59;
          }
          if (_0x252ff2) {
            _0x1dc4f4.node.timestamp = Date.now();
          }
          return _0x252ff2;
        },
        write: function (_0x2b401b, _0x5e0bed, _0x38efdf, _0xe88577, _0x5e6752) {
          for (var _0x45b8c1 = 0; _0x45b8c1 < _0xe88577; _0x45b8c1++) {
            try {
              _0x23e818(_0x5e0bed[_0x38efdf + _0x45b8c1]);
            } catch (_0x2df4a4) {
              throw new _0x129e29.ErrnoError(29);
            }
          }
          if (_0xe88577) {
            _0x2b401b.node.timestamp = Date.now();
          }
          return _0x45b8c1;
        }
      });
      return _0x129e29.mkdev(_0x5d66f3, _0x19b9fb, _0x1ccae8);
    },
    forceLoadFile: function (_0x42d81d) {
      if (_0x42d81d.isDevice || _0x42d81d.isFolder || _0x42d81d.link || _0x42d81d.contents) {
        return true;
      }
      if (typeof XMLHttpRequest !== "undefined") {
        throw new Error("Lazy loading should have been performed (contents set) in createLazyFile, but it was not. Lazy loading only works in web workers. Use --embed-file or --preload-file in emcc on the main thread.");
      } else if (_0x267651) {
        try {
          _0x42d81d.contents = _0x55b828(_0x267651(_0x42d81d.url), true);
          _0x42d81d.usedBytes = _0x42d81d.contents.length;
        } catch (_0x468c70) {
          throw new _0x129e29.ErrnoError(29);
        }
      } else {
        throw new Error("Cannot load without read() or XMLHttpRequest.");
      }
    },
    createLazyFile: function (_0x220e90, _0x1e808c, _0x3b67fd, _0x172627, _0xd1bb03) {
      function _0x5d5e2a() {
        this.lengthKnown = false;
        this.chunks = [];
      }
      _0x5d5e2a.prototype.get = function _0x22b8fb(_0x5aa87d) {
        if (_0x5aa87d > this.length - 1 || _0x5aa87d < 0) {
          return undefined;
        }
        var _0x456481 = _0x5aa87d % this.chunkSize;
        var _0x1c4288 = _0x5aa87d / this.chunkSize | 0;
        return this.getter(_0x1c4288)[_0x456481];
      };
      _0x5d5e2a.prototype.setDataGetter = function _0x56a828(_0x1b3cf2) {
        this.getter = _0x1b3cf2;
      };
      _0x5d5e2a.prototype.cacheLength = function _0x24e0c8() {
        var _0x5f3f08 = new XMLHttpRequest();
        _0x5f3f08.open("HEAD", _0x3b67fd, false);
        _0x5f3f08.send(null);
        if ((!(_0x5f3f08.status >= 200) || !(_0x5f3f08.status < 300)) && _0x5f3f08.status !== 304) {
          throw new Error("Couldn't load " + _0x3b67fd + ". Status: " + _0x5f3f08.status);
        }
        var _0x109d21 = Number(_0x5f3f08.getResponseHeader("Content-length"));
        var _0x5c369d;
        var _0xab28b9 = (_0x5c369d = _0x5f3f08.getResponseHeader("Accept-Ranges")) && _0x5c369d === "bytes";
        var _0x57f132 = (_0x5c369d = _0x5f3f08.getResponseHeader("Content-Encoding")) && _0x5c369d === "gzip";
        var _0x18c5d4 = 1048576;
        if (!_0xab28b9) {
          _0x18c5d4 = _0x109d21;
        }
        var _0x3a4e37 = function (_0x3bd734, _0x302b56) {
          if (_0x3bd734 > _0x302b56) {
            throw new Error("invalid range (" + _0x3bd734 + ", " + _0x302b56 + ") or no bytes requested!");
          }
          if (_0x302b56 > _0x109d21 - 1) {
            throw new Error("only " + _0x109d21 + " bytes available! programmer error!");
          }
          var _0x1ce9a2 = new XMLHttpRequest();
          _0x1ce9a2.open("GET", _0x3b67fd, false);
          if (_0x109d21 !== _0x18c5d4) {
            _0x1ce9a2.setRequestHeader("Range", "bytes=" + _0x3bd734 + "-" + _0x302b56);
          }
          if (typeof Uint8Array != "undefined") {
            _0x1ce9a2.responseType = "arraybuffer";
          }
          if (_0x1ce9a2.overrideMimeType) {
            _0x1ce9a2.overrideMimeType("text/plain; charset=x-user-defined");
          }
          _0x1ce9a2.send(null);
          if ((!(_0x1ce9a2.status >= 200) || !(_0x1ce9a2.status < 300)) && _0x1ce9a2.status !== 304) {
            throw new Error("Couldn't load " + _0x3b67fd + ". Status: " + _0x1ce9a2.status);
          }
          if (_0x1ce9a2.response !== undefined) {
            return new Uint8Array(_0x1ce9a2.response || []);
          } else {
            return _0x55b828(_0x1ce9a2.responseText || "", true);
          }
        };
        var _0x1ba9b1 = this;
        _0x1ba9b1.setDataGetter(function (_0xb42c49) {
          var _0x28fe0c = _0xb42c49 * _0x18c5d4;
          var _0x3a98de = (_0xb42c49 + 1) * _0x18c5d4 - 1;
          _0x3a98de = Math.min(_0x3a98de, _0x109d21 - 1);
          if (typeof _0x1ba9b1.chunks[_0xb42c49] === "undefined") {
            _0x1ba9b1.chunks[_0xb42c49] = _0x3a4e37(_0x28fe0c, _0x3a98de);
          }
          if (typeof _0x1ba9b1.chunks[_0xb42c49] === "undefined") {
            throw new Error("doXHR failed!");
          }
          return _0x1ba9b1.chunks[_0xb42c49];
        });
        if (_0x57f132 || !_0x109d21) {
          _0x18c5d4 = _0x109d21 = 1;
          _0x109d21 = this.getter(0).length;
          _0x18c5d4 = _0x109d21;
          _0x55efa1("LazyFiles on gzip forces download of the whole file when length is accessed");
        }
        this._length = _0x109d21;
        this._chunkSize = _0x18c5d4;
        this.lengthKnown = true;
      };
      if (typeof XMLHttpRequest !== "undefined") {
        if (!_0x1cba1f) {
          throw "Cannot do synchronous binary XHRs outside webworkers in modern browsers. Use --embed-file or --preload-file in emcc";
        }
        var _0x36aff9 = new _0x5d5e2a();
        Object.defineProperties(_0x36aff9, {
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
        var _0x28f821 = {
          isDevice: false,
          contents: _0x36aff9
        };
      } else {
        var _0x28f821 = {
          isDevice: false,
          url: _0x3b67fd
        };
      }
      var _0x8140c2 = _0x129e29.createFile(_0x220e90, _0x1e808c, _0x28f821, _0x172627, _0xd1bb03);
      if (_0x28f821.contents) {
        _0x8140c2.contents = _0x28f821.contents;
      } else if (_0x28f821.url) {
        _0x8140c2.contents = null;
        _0x8140c2.url = _0x28f821.url;
      }
      Object.defineProperties(_0x8140c2, {
        usedBytes: {
          get: function () {
            return this.contents.length;
          }
        }
      });
      var _0x2e535f = {};
      var _0x987ef = Object.keys(_0x8140c2.stream_ops);
      _0x987ef.forEach(function (_0x58421d) {
        var _0x2a0972 = _0x8140c2.stream_ops[_0x58421d];
        _0x2e535f[_0x58421d] = function _0x1e57c5() {
          _0x129e29.forceLoadFile(_0x8140c2);
          return _0x2a0972.apply(null, arguments);
        };
      });
      _0x2e535f.read = function _0x55be53(_0x258c3d, _0x313e5c, _0x141f94, _0x17a79b, _0x3e6135) {
        _0x129e29.forceLoadFile(_0x8140c2);
        var _0x15791f = _0x258c3d.node.contents;
        if (_0x3e6135 >= _0x15791f.length) {
          return 0;
        }
        var _0x537987 = Math.min(_0x15791f.length - _0x3e6135, _0x17a79b);
        if (_0x15791f.slice) {
          for (var _0x55c874 = 0; _0x55c874 < _0x537987; _0x55c874++) {
            _0x313e5c[_0x141f94 + _0x55c874] = _0x15791f[_0x3e6135 + _0x55c874];
          }
        } else {
          for (var _0x55c874 = 0; _0x55c874 < _0x537987; _0x55c874++) {
            _0x313e5c[_0x141f94 + _0x55c874] = _0x15791f.get(_0x3e6135 + _0x55c874);
          }
        }
        return _0x537987;
      };
      _0x8140c2.stream_ops = _0x2e535f;
      return _0x8140c2;
    },
    createPreloadedFile: function (_0x598f2f, _0x575d6a, _0xfc3a4e, _0x194e5d, _0x4a9217, _0x1c2f21, _0x4ae1fe, _0x1976c7, _0x469eb6, _0x13d66f) {
      _0x41bad6.init();
      var _0xca3c8 = _0x575d6a ? _0x25f3b4.resolve(_0x261f1b.join2(_0x598f2f, _0x575d6a)) : _0x598f2f;
      var _0x3f9618 = _0x2c5097("cp " + _0xca3c8);
      function _0x1ef3c1(_0x50d3f9) {
        function _0xa512a0(_0x379d33) {
          if (_0x13d66f) {
            _0x13d66f();
          }
          if (!_0x1976c7) {
            _0x129e29.createDataFile(_0x598f2f, _0x575d6a, _0x379d33, _0x194e5d, _0x4a9217, _0x469eb6);
          }
          if (_0x1c2f21) {
            _0x1c2f21();
          }
          _0x705650(_0x3f9618);
        }
        var _0x4eb909 = false;
        _0x3255d0.preloadPlugins.forEach(function (_0x4e014e) {
          if (_0x4eb909) {
            return;
          }
          if (_0x4e014e.canHandle(_0xca3c8)) {
            _0x4e014e.handle(_0x50d3f9, _0xca3c8, _0xa512a0, function () {
              if (_0x4ae1fe) {
                _0x4ae1fe();
              }
              _0x705650(_0x3f9618);
            });
            _0x4eb909 = true;
          }
        });
        if (!_0x4eb909) {
          _0xa512a0(_0x50d3f9);
        }
      }
      _0x51bf84(_0x3f9618);
      if (typeof _0xfc3a4e == "string") {
        _0x41bad6.asyncLoad(_0xfc3a4e, function (_0x259b50) {
          _0x1ef3c1(_0x259b50);
        }, _0x4ae1fe);
      } else {
        _0x1ef3c1(_0xfc3a4e);
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
    saveFilesToDB: function (_0x4366ce, _0x5ef32b, _0x14dc19) {
      _0x5ef32b = _0x5ef32b || function () {};
      _0x14dc19 = _0x14dc19 || function () {};
      var _0x5a2704 = _0x129e29.indexedDB();
      try {
        var _0x561dae = _0x5a2704.open(_0x129e29.DB_NAME(), _0x129e29.DB_VERSION);
      } catch (_0x29ac96) {
        return _0x14dc19(_0x29ac96);
      }
      _0x561dae.onupgradeneeded = function _0x3eb692() {
        _0x55efa1("creating db");
        var _0x68d073 = _0x561dae.result;
        _0x68d073.createObjectStore(_0x129e29.DB_STORE_NAME);
      };
      _0x561dae.onsuccess = function _0x190ec4() {
        var _0x5927af = _0x561dae.result;
        var _0x55efa6 = _0x5927af.transaction([_0x129e29.DB_STORE_NAME], "readwrite");
        var _0x1c4649 = _0x55efa6.objectStore(_0x129e29.DB_STORE_NAME);
        var _0x3db61b = 0;
        var _0x232dee = 0;
        var _0x80e2f8 = _0x4366ce.length;
        function _0x5305de() {
          if (_0x232dee == 0) {
            _0x5ef32b();
          } else {
            _0x14dc19();
          }
        }
        _0x4366ce.forEach(function (_0x483ac4) {
          var _0x284703 = _0x1c4649.put(_0x129e29.analyzePath(_0x483ac4).object.contents, _0x483ac4);
          _0x284703.onsuccess = function _0x5aafd4() {
            _0x3db61b++;
            if (_0x3db61b + _0x232dee == _0x80e2f8) {
              _0x5305de();
            }
          };
          _0x284703.onerror = function _0x592479() {
            _0x232dee++;
            if (_0x3db61b + _0x232dee == _0x80e2f8) {
              _0x5305de();
            }
          };
        });
        _0x55efa6.onerror = _0x14dc19;
      };
      _0x561dae.onerror = _0x14dc19;
    },
    loadFilesFromDB: function (_0x1d528d, _0xb03177, _0x5b6c3c) {
      _0xb03177 = _0xb03177 || function () {};
      _0x5b6c3c = _0x5b6c3c || function () {};
      var _0x3c7466 = _0x129e29.indexedDB();
      try {
        var _0x1bdae8 = _0x3c7466.open(_0x129e29.DB_NAME(), _0x129e29.DB_VERSION);
      } catch (_0x370088) {
        return _0x5b6c3c(_0x370088);
      }
      _0x1bdae8.onupgradeneeded = _0x5b6c3c;
      _0x1bdae8.onsuccess = function _0x88fd09() {
        var _0x4680fb = _0x1bdae8.result;
        try {
          var _0x16568a = _0x4680fb.transaction([_0x129e29.DB_STORE_NAME], "readonly");
        } catch (_0x228d6c) {
          _0x5b6c3c(_0x228d6c);
          return;
        }
        var _0x427dbd = _0x16568a.objectStore(_0x129e29.DB_STORE_NAME);
        var _0x448ffc = 0;
        var _0x27b43f = 0;
        var _0x559d28 = _0x1d528d.length;
        function _0x53b535() {
          if (_0x27b43f == 0) {
            _0xb03177();
          } else {
            _0x5b6c3c();
          }
        }
        _0x1d528d.forEach(function (_0x5cd433) {
          var _0x16667b = _0x427dbd.get(_0x5cd433);
          _0x16667b.onsuccess = function _0x2ee32b() {
            if (_0x129e29.analyzePath(_0x5cd433).exists) {
              _0x129e29.unlink(_0x5cd433);
            }
            _0x129e29.createDataFile(_0x261f1b.dirname(_0x5cd433), _0x261f1b.basename(_0x5cd433), _0x16667b.result, true, true, true);
            _0x448ffc++;
            if (_0x448ffc + _0x27b43f == _0x559d28) {
              _0x53b535();
            }
          };
          _0x16667b.onerror = function _0xabdbb4() {
            _0x27b43f++;
            if (_0x448ffc + _0x27b43f == _0x559d28) {
              _0x53b535();
            }
          };
        });
        _0x16568a.onerror = _0x5b6c3c;
      };
      _0x1bdae8.onerror = _0x5b6c3c;
    }
  };
  var _0x2bf3a0 = {
    mappings: {},
    DEFAULT_POLLMASK: 5,
    umask: 511,
    calculateAt: function (_0x1f2a99, _0x519b59, _0x120a29) {
      if (_0x519b59[0] === "/") {
        return _0x519b59;
      }
      var _0x7f220d;
      if (_0x1f2a99 === -100) {
        _0x7f220d = _0x129e29.cwd();
      } else {
        var _0x51bfa4 = _0x129e29.getStream(_0x1f2a99);
        if (!_0x51bfa4) {
          throw new _0x129e29.ErrnoError(8);
        }
        _0x7f220d = _0x51bfa4.path;
      }
      if (_0x519b59.length == 0) {
        if (!_0x120a29) {
          throw new _0x129e29.ErrnoError(44);
        }
        return _0x7f220d;
      }
      return _0x261f1b.join2(_0x7f220d, _0x519b59);
    },
    doStat: function (_0x5893d5, _0x1c7d63, _0x3a0297) {
      try {
        var _0x16df54 = _0x5893d5(_0x1c7d63);
      } catch (_0x4f7dfc) {
        if (_0x4f7dfc && _0x4f7dfc.node && _0x261f1b.normalize(_0x1c7d63) !== _0x261f1b.normalize(_0x129e29.getPath(_0x4f7dfc.node))) {
          return -54;
        }
        throw _0x4f7dfc;
      }
      _0x3ea6c9[_0x3a0297 >> 2] = _0x16df54.dev;
      _0x3ea6c9[_0x3a0297 + 4 >> 2] = 0;
      _0x3ea6c9[_0x3a0297 + 8 >> 2] = _0x16df54.ino;
      _0x3ea6c9[_0x3a0297 + 12 >> 2] = _0x16df54.mode;
      _0x3ea6c9[_0x3a0297 + 16 >> 2] = _0x16df54.nlink;
      _0x3ea6c9[_0x3a0297 + 20 >> 2] = _0x16df54.uid;
      _0x3ea6c9[_0x3a0297 + 24 >> 2] = _0x16df54.gid;
      _0x3ea6c9[_0x3a0297 + 28 >> 2] = _0x16df54.rdev;
      _0x3ea6c9[_0x3a0297 + 32 >> 2] = 0;
      _0x1cea62 = [_0x16df54.size >>> 0, (_0x4ff14d = _0x16df54.size, +Math.abs(_0x4ff14d) >= 1 ? _0x4ff14d > 0 ? (Math.min(+Math.floor(_0x4ff14d / 4294967296), 4294967295) | 0) >>> 0 : ~~+Math.ceil((_0x4ff14d - +(~~_0x4ff14d >>> 0)) / 4294967296) >>> 0 : 0)];
      _0x3ea6c9[_0x3a0297 + 40 >> 2] = _0x1cea62[0];
      _0x3ea6c9[_0x3a0297 + 44 >> 2] = _0x1cea62[1];
      _0x3ea6c9[_0x3a0297 + 48 >> 2] = 4096;
      _0x3ea6c9[_0x3a0297 + 52 >> 2] = _0x16df54.blocks;
      _0x3ea6c9[_0x3a0297 + 56 >> 2] = _0x16df54.atime.getTime() / 1000 | 0;
      _0x3ea6c9[_0x3a0297 + 60 >> 2] = 0;
      _0x3ea6c9[_0x3a0297 + 64 >> 2] = _0x16df54.mtime.getTime() / 1000 | 0;
      _0x3ea6c9[_0x3a0297 + 68 >> 2] = 0;
      _0x3ea6c9[_0x3a0297 + 72 >> 2] = _0x16df54.ctime.getTime() / 1000 | 0;
      _0x3ea6c9[_0x3a0297 + 76 >> 2] = 0;
      _0x1cea62 = [_0x16df54.ino >>> 0, (_0x4ff14d = _0x16df54.ino, +Math.abs(_0x4ff14d) >= 1 ? _0x4ff14d > 0 ? (Math.min(+Math.floor(_0x4ff14d / 4294967296), 4294967295) | 0) >>> 0 : ~~+Math.ceil((_0x4ff14d - +(~~_0x4ff14d >>> 0)) / 4294967296) >>> 0 : 0)];
      _0x3ea6c9[_0x3a0297 + 80 >> 2] = _0x1cea62[0];
      _0x3ea6c9[_0x3a0297 + 84 >> 2] = _0x1cea62[1];
      return 0;
    },
    doMsync: function (_0x25e354, _0x8431e5, _0xab238d, _0x45d2de, _0x288fc4) {
      var _0x41286b = _0x10abe1.slice(_0x25e354, _0x25e354 + _0xab238d);
      _0x129e29.msync(_0x8431e5, _0x41286b, _0x288fc4, _0xab238d, _0x45d2de);
    },
    doMkdir: function (_0x1fbded, _0x224dcf) {
      _0x1fbded = _0x261f1b.normalize(_0x1fbded);
      if (_0x1fbded[_0x1fbded.length - 1] === "/") {
        _0x1fbded = _0x1fbded.substr(0, _0x1fbded.length - 1);
      }
      _0x129e29.mkdir(_0x1fbded, _0x224dcf, 0);
      return 0;
    },
    doMknod: function (_0x4a7b7a, _0xf39695, _0xaa93af) {
      switch (_0xf39695 & 61440) {
        case 32768:
        case 8192:
        case 24576:
        case 4096:
        case 49152:
          break;
        default:
          return -28;
      }
      _0x129e29.mknod(_0x4a7b7a, _0xf39695, _0xaa93af);
      return 0;
    },
    doReadlink: function (_0x2db733, _0x20e799, _0x17ce9c) {
      if (_0x17ce9c <= 0) {
        return -28;
      }
      var _0x5b2127 = _0x129e29.readlink(_0x2db733);
      var _0x2ef22f = Math.min(_0x17ce9c, _0x40d569(_0x5b2127));
      var _0x34adc3 = _0x410af5[_0x20e799 + _0x2ef22f];
      _0x259c3d(_0x5b2127, _0x20e799, _0x17ce9c + 1);
      _0x410af5[_0x20e799 + _0x2ef22f] = _0x34adc3;
      return _0x2ef22f;
    },
    doAccess: function (_0x198b8c, _0x5e051c) {
      if (_0x5e051c & ~7) {
        return -28;
      }
      var _0x5b7c31;
      var _0x427d96 = _0x129e29.lookupPath(_0x198b8c, {
        follow: true
      });
      _0x5b7c31 = _0x427d96.node;
      if (!_0x5b7c31) {
        return -44;
      }
      var _0x45c547 = "";
      if (_0x5e051c & 4) {
        _0x45c547 += "r";
      }
      if (_0x5e051c & 2) {
        _0x45c547 += "w";
      }
      if (_0x5e051c & 1) {
        _0x45c547 += "x";
      }
      if (_0x45c547 && _0x129e29.nodePermissions(_0x5b7c31, _0x45c547)) {
        return -2;
      }
      return 0;
    },
    doDup: function (_0x444356, _0x16b5af, _0x27417) {
      var _0x4b140f = _0x129e29.getStream(_0x27417);
      if (_0x4b140f) {
        _0x129e29.close(_0x4b140f);
      }
      return _0x129e29.open(_0x444356, _0x16b5af, 0, _0x27417, _0x27417).fd;
    },
    doReadv: function (_0x12301c, _0x193075, _0x477248, _0x449ce2) {
      var _0x45ba50 = 0;
      for (var _0x50cc56 = 0; _0x50cc56 < _0x477248; _0x50cc56++) {
        var _0x31856f = _0x3ea6c9[_0x193075 + _0x50cc56 * 8 >> 2];
        var _0x21e61c = _0x3ea6c9[_0x193075 + (_0x50cc56 * 8 + 4) >> 2];
        var _0x1fe1df = _0x129e29.read(_0x12301c, _0x410af5, _0x31856f, _0x21e61c, _0x449ce2);
        if (_0x1fe1df < 0) {
          return -1;
        }
        _0x45ba50 += _0x1fe1df;
        if (_0x1fe1df < _0x21e61c) {
          break;
        }
      }
      return _0x45ba50;
    },
    doWritev: function (_0x1e642a, _0x2e62a3, _0x30d4da, _0x120d90) {
      var _0x17b34b = 0;
      for (var _0x2696fd = 0; _0x2696fd < _0x30d4da; _0x2696fd++) {
        var _0x2f6bc2 = _0x3ea6c9[_0x2e62a3 + _0x2696fd * 8 >> 2];
        var _0x3316ec = _0x3ea6c9[_0x2e62a3 + (_0x2696fd * 8 + 4) >> 2];
        var _0x55817a = _0x129e29.write(_0x1e642a, _0x410af5, _0x2f6bc2, _0x3316ec, _0x120d90);
        if (_0x55817a < 0) {
          return -1;
        }
        _0x17b34b += _0x55817a;
      }
      return _0x17b34b;
    },
    varargs: undefined,
    get: function () {
      _0x2bf3a0.varargs += 4;
      var _0x268dd5 = _0x3ea6c9[_0x2bf3a0.varargs - 4 >> 2];
      return _0x268dd5;
    },
    getStr: function (_0x3e9c57) {
      var _0x28de93 = _0x5afdf8(_0x3e9c57);
      return _0x28de93;
    },
    getStreamFromFD: function (_0x25acf2) {
      var _0x19a98a = _0x129e29.getStream(_0x25acf2);
      if (!_0x19a98a) {
        throw new _0x129e29.ErrnoError(8);
      }
      return _0x19a98a;
    },
    get64: function (_0x1ca2f6, _0x1c6429) {
      return _0x1ca2f6;
    }
  };
  function _0x29601a(_0x1c77a8, _0x2399f5, _0x111f57, _0x22bfc5, _0x515c10) {
    try {
      var _0x1102a2 = 0;
      var _0x4040eb = _0x2399f5 ? _0x3ea6c9[_0x2399f5 >> 2] : 0;
      var _0x2a7725 = _0x2399f5 ? _0x3ea6c9[_0x2399f5 + 4 >> 2] : 0;
      var _0x318bbe = _0x111f57 ? _0x3ea6c9[_0x111f57 >> 2] : 0;
      var _0xf419a7 = _0x111f57 ? _0x3ea6c9[_0x111f57 + 4 >> 2] : 0;
      var _0x6a261a = _0x22bfc5 ? _0x3ea6c9[_0x22bfc5 >> 2] : 0;
      var _0x5353fb = _0x22bfc5 ? _0x3ea6c9[_0x22bfc5 + 4 >> 2] : 0;
      var _0x37f6c8 = 0;
      var _0x3715eb = 0;
      var _0x36461e = 0;
      var _0x2faff9 = 0;
      var _0x390d01 = 0;
      var _0x307616 = 0;
      var _0x43fffd = (_0x2399f5 ? _0x3ea6c9[_0x2399f5 >> 2] : 0) | (_0x111f57 ? _0x3ea6c9[_0x111f57 >> 2] : 0) | (_0x22bfc5 ? _0x3ea6c9[_0x22bfc5 >> 2] : 0);
      var _0x9a406f = (_0x2399f5 ? _0x3ea6c9[_0x2399f5 + 4 >> 2] : 0) | (_0x111f57 ? _0x3ea6c9[_0x111f57 + 4 >> 2] : 0) | (_0x22bfc5 ? _0x3ea6c9[_0x22bfc5 + 4 >> 2] : 0);
      var _0x5771c8 = function (_0x39c878, _0x299daf, _0x28d561, _0x1ee2ef) {
        if (_0x39c878 < 32) {
          return _0x299daf & _0x1ee2ef;
        } else {
          return _0x28d561 & _0x1ee2ef;
        }
      };
      for (var _0x769e02 = 0; _0x769e02 < _0x1c77a8; _0x769e02++) {
        var _0x324e50 = 1 << _0x769e02 % 32;
        if (!_0x5771c8(_0x769e02, _0x43fffd, _0x9a406f, _0x324e50)) {
          continue;
        }
        var _0xe27b89 = _0x129e29.getStream(_0x769e02);
        if (!_0xe27b89) {
          throw new _0x129e29.ErrnoError(8);
        }
        var _0xa20c1b = _0x2bf3a0.DEFAULT_POLLMASK;
        if (_0xe27b89.stream_ops.poll) {
          _0xa20c1b = _0xe27b89.stream_ops.poll(_0xe27b89);
        }
        if (_0xa20c1b & 1 && _0x5771c8(_0x769e02, _0x4040eb, _0x2a7725, _0x324e50)) {
          if (_0x769e02 < 32) {
            _0x37f6c8 = _0x37f6c8 | _0x324e50;
          } else {
            _0x3715eb = _0x3715eb | _0x324e50;
          }
          _0x1102a2++;
        }
        if (_0xa20c1b & 4 && _0x5771c8(_0x769e02, _0x318bbe, _0xf419a7, _0x324e50)) {
          if (_0x769e02 < 32) {
            _0x36461e = _0x36461e | _0x324e50;
          } else {
            _0x2faff9 = _0x2faff9 | _0x324e50;
          }
          _0x1102a2++;
        }
        if (_0xa20c1b & 2 && _0x5771c8(_0x769e02, _0x6a261a, _0x5353fb, _0x324e50)) {
          if (_0x769e02 < 32) {
            _0x390d01 = _0x390d01 | _0x324e50;
          } else {
            _0x307616 = _0x307616 | _0x324e50;
          }
          _0x1102a2++;
        }
      }
      if (_0x2399f5) {
        _0x3ea6c9[_0x2399f5 >> 2] = _0x37f6c8;
        _0x3ea6c9[_0x2399f5 + 4 >> 2] = _0x3715eb;
      }
      if (_0x111f57) {
        _0x3ea6c9[_0x111f57 >> 2] = _0x36461e;
        _0x3ea6c9[_0x111f57 + 4 >> 2] = _0x2faff9;
      }
      if (_0x22bfc5) {
        _0x3ea6c9[_0x22bfc5 >> 2] = _0x390d01;
        _0x3ea6c9[_0x22bfc5 + 4 >> 2] = _0x307616;
      }
      return _0x1102a2;
    } catch (_0x3f048d) {
      if (typeof _0x129e29 === "undefined" || !(_0x3f048d instanceof _0x129e29.ErrnoError)) {
        _0x3b38b3(_0x3f048d);
      }
      return -_0x3f048d.errno;
    }
  }
  var _0x400123 = {
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
  var _0x332817 = {
    mount: function (_0x589cd0) {
      _0x3255d0.websocket = _0x3255d0.websocket && typeof _0x3255d0.websocket === "object" ? _0x3255d0.websocket : {};
      _0x3255d0.websocket._callbacks = {};
      _0x3255d0.websocket.on = function (_0x4082a5, _0x1b07e5) {
        if (typeof _0x1b07e5 === "function") {
          this._callbacks[_0x4082a5] = _0x1b07e5;
        }
        return this;
      };
      _0x3255d0.websocket.emit = function (_0x8c88a9, _0x473dd5) {
        if (typeof this._callbacks[_0x8c88a9] === "function") {
          this._callbacks[_0x8c88a9].call(this, _0x473dd5);
        }
      };
      return _0x129e29.createNode(null, "/", 16895, 0);
    },
    createSocket: function (_0x2e9af4, _0x3b542f, _0x544beb) {
      _0x3b542f &= ~526336;
      var _0xa1dbcf = _0x3b542f == 1;
      if (_0x544beb) {
        _0x498a3a(_0xa1dbcf == (_0x544beb == 6));
      }
      var _0x1b70e5 = {
        family: _0x2e9af4,
        type: _0x3b542f,
        protocol: _0x544beb,
        server: null,
        error: null,
        peers: {},
        pending: [],
        recv_queue: [],
        sock_ops: _0x332817.websocket_sock_ops
      };
      var _0x63be01 = _0x332817.nextname();
      var _0x5224cd = _0x129e29.createNode(_0x332817.root, _0x63be01, 49152, 0);
      _0x5224cd.sock = _0x1b70e5;
      var _0x2ffb95 = _0x129e29.createStream({
        path: _0x63be01,
        node: _0x5224cd,
        flags: 2,
        seekable: false,
        stream_ops: _0x332817.stream_ops
      });
      _0x1b70e5.stream = _0x2ffb95;
      return _0x1b70e5;
    },
    getSocket: function (_0x1d0a33) {
      var _0x4ff01d = _0x129e29.getStream(_0x1d0a33);
      if (!_0x4ff01d || !_0x129e29.isSocket(_0x4ff01d.node.mode)) {
        return null;
      }
      return _0x4ff01d.node.sock;
    },
    stream_ops: {
      poll: function (_0x2f2eba) {
        var _0x2b4266 = _0x2f2eba.node.sock;
        return _0x2b4266.sock_ops.poll(_0x2b4266);
      },
      ioctl: function (_0x54edd3, _0x46c456, _0xd3bf0f) {
        var _0x5999a5 = _0x54edd3.node.sock;
        return _0x5999a5.sock_ops.ioctl(_0x5999a5, _0x46c456, _0xd3bf0f);
      },
      read: function (_0x82428f, _0x12df68, _0x3be01b, _0x3fdb6b, _0x53ca58) {
        var _0x563327 = _0x82428f.node.sock;
        var _0x18f1b8 = _0x563327.sock_ops.recvmsg(_0x563327, _0x3fdb6b);
        if (!_0x18f1b8) {
          return 0;
        }
        _0x12df68.set(_0x18f1b8.buffer, _0x3be01b);
        return _0x18f1b8.buffer.length;
      },
      write: function (_0x2f535e, _0xdb18a2, _0x178eba, _0x49e159, _0x35e18f) {
        var _0x35b255 = _0x2f535e.node.sock;
        return _0x35b255.sock_ops.sendmsg(_0x35b255, _0xdb18a2, _0x178eba, _0x49e159);
      },
      close: function (_0x514353) {
        var _0x1e76ed = _0x514353.node.sock;
        _0x1e76ed.sock_ops.close(_0x1e76ed);
      }
    },
    nextname: function () {
      if (!_0x332817.nextname.current) {
        _0x332817.nextname.current = 0;
      }
      return "socket[" + _0x332817.nextname.current++ + "]";
    },
    websocket_sock_ops: {
      createPeer: function (_0x595a52, _0x57e835, _0xaa8e35) {
        var _0x388dac;
        if (typeof _0x57e835 === "object") {
          _0x388dac = _0x57e835;
          _0x57e835 = null;
          _0xaa8e35 = null;
        }
        if (_0x388dac) {
          if (_0x388dac._socket) {
            _0x57e835 = _0x388dac._socket.remoteAddress;
            _0xaa8e35 = _0x388dac._socket.remotePort;
          } else {
            var _0x33c9ab = /ws[s]?:\/\/([^:]+):(\d+)/.exec(_0x388dac.url);
            if (!_0x33c9ab) {
              throw new Error("WebSocket URL must be in the format ws(s)://address:port");
            }
            _0x57e835 = _0x33c9ab[1];
            _0xaa8e35 = parseInt(_0x33c9ab[2], 10);
          }
        } else {
          try {
            var _0x3d5c2f = _0x3255d0.websocket && typeof _0x3255d0.websocket === "object";
            var _0x2018a1 = "ws:#".replace("#", "//");
            if (_0x3d5c2f) {
              if (typeof _0x3255d0.websocket.url === "string") {
                _0x2018a1 = _0x3255d0.websocket.url;
              }
            }
            if (_0x2018a1 === "ws://" || _0x2018a1 === "wss://") {
              var _0x266ea6 = _0x57e835.split("/");
              _0x2018a1 = _0x2018a1 + _0x266ea6[0] + ":" + _0xaa8e35 + "/" + _0x266ea6.slice(1).join("/");
            }
            var _0x4ada77 = "binary";
            if (_0x3d5c2f) {
              if (typeof _0x3255d0.websocket.subprotocol === "string") {
                _0x4ada77 = _0x3255d0.websocket.subprotocol;
              }
            }
            var _0x3b4838 = undefined;
            if (_0x4ada77 !== "null") {
              _0x4ada77 = _0x4ada77.replace(/^ +| +$/g, "").split(/ *, */);
              _0x3b4838 = _0x226b31 ? {
                protocol: _0x4ada77.toString()
              } : _0x4ada77;
            }
            if (_0x3d5c2f && _0x3255d0.websocket.subprotocol === null) {
              _0x4ada77 = "null";
              _0x3b4838 = undefined;
            }
            var _0x3e98c0;
            if (_0x226b31) {
              _0x3e98c0 = require("ws");
            } else {
              _0x3e98c0 = WebSocket;
            }
            _0x388dac = new _0x3e98c0(_0x2018a1, _0x3b4838);
            _0x388dac.binaryType = "arraybuffer";
          } catch (_0x1bd74f) {
            throw new _0x129e29.ErrnoError(_0x400123.EHOSTUNREACH);
          }
        }
        var _0x540c70 = {
          addr: _0x57e835,
          port: _0xaa8e35,
          socket: _0x388dac,
          dgram_send_queue: []
        };
        _0x332817.websocket_sock_ops.addPeer(_0x595a52, _0x540c70);
        _0x332817.websocket_sock_ops.handlePeerEvents(_0x595a52, _0x540c70);
        if (_0x595a52.type === 2 && typeof _0x595a52.sport !== "undefined") {
          _0x540c70.dgram_send_queue.push(new Uint8Array([255, 255, 255, 255, "p".charCodeAt(0), "o".charCodeAt(0), "r".charCodeAt(0), "t".charCodeAt(0), (_0x595a52.sport & 65280) >> 8, _0x595a52.sport & 255]));
        }
        return _0x540c70;
      },
      getPeer: function (_0x4b0344, _0x3a4700, _0x46ce30) {
        return _0x4b0344.peers[_0x3a4700 + ":" + _0x46ce30];
      },
      addPeer: function (_0x320fd5, _0x5ef99a) {
        _0x320fd5.peers[_0x5ef99a.addr + ":" + _0x5ef99a.port] = _0x5ef99a;
      },
      removePeer: function (_0x294f47, _0x5547e6) {
        delete _0x294f47.peers[_0x5547e6.addr + ":" + _0x5547e6.port];
      },
      handlePeerEvents: function (_0x288cd3, _0x195024) {
        var _0xe9af84 = true;
        var _0x10b024 = function () {
          _0x3255d0.websocket.emit("open", _0x288cd3.stream.fd);
          try {
            var _0x5aa0bc = _0x195024.dgram_send_queue.shift();
            while (_0x5aa0bc) {
              _0x195024.socket.send(_0x5aa0bc);
              _0x5aa0bc = _0x195024.dgram_send_queue.shift();
            }
          } catch (_0x12d47a) {
            _0x195024.socket.close();
          }
        };
        function _0x5cc946(_0xc04a0d) {
          if (typeof _0xc04a0d === "string") {
            var _0x513622 = new TextEncoder();
            _0xc04a0d = _0x513622.encode(_0xc04a0d);
          } else {
            _0x498a3a(_0xc04a0d.byteLength !== undefined);
            if (_0xc04a0d.byteLength == 0) {
              return;
            } else {
              _0xc04a0d = new Uint8Array(_0xc04a0d);
            }
          }
          var _0x136429 = _0xe9af84;
          _0xe9af84 = false;
          if (_0x136429 && _0xc04a0d.length === 10 && _0xc04a0d[0] === 255 && _0xc04a0d[1] === 255 && _0xc04a0d[2] === 255 && _0xc04a0d[3] === 255 && _0xc04a0d[4] === "p".charCodeAt(0) && _0xc04a0d[5] === "o".charCodeAt(0) && _0xc04a0d[6] === "r".charCodeAt(0) && _0xc04a0d[7] === "t".charCodeAt(0)) {
            var _0x3704e8 = _0xc04a0d[8] << 8 | _0xc04a0d[9];
            _0x332817.websocket_sock_ops.removePeer(_0x288cd3, _0x195024);
            _0x195024.port = _0x3704e8;
            _0x332817.websocket_sock_ops.addPeer(_0x288cd3, _0x195024);
            return;
          }
          _0x288cd3.recv_queue.push({
            addr: _0x195024.addr,
            port: _0x195024.port,
            data: _0xc04a0d
          });
          _0x3255d0.websocket.emit("message", _0x288cd3.stream.fd);
        }
        if (_0x226b31) {
          _0x195024.socket.on("open", _0x10b024);
          _0x195024.socket.on("message", function (_0x1e188a, _0x23fe26) {
            if (!_0x23fe26.binary) {
              return;
            }
            _0x5cc946(new Uint8Array(_0x1e188a).buffer);
          });
          _0x195024.socket.on("close", function () {
            _0x3255d0.websocket.emit("close", _0x288cd3.stream.fd);
          });
          _0x195024.socket.on("error", function (_0x5a16e7) {
            _0x288cd3.error = _0x400123.ECONNREFUSED;
            _0x3255d0.websocket.emit("error", [_0x288cd3.stream.fd, _0x288cd3.error, "ECONNREFUSED: Connection refused"]);
          });
        } else {
          _0x195024.socket.onopen = _0x10b024;
          _0x195024.socket.onclose = function () {
            _0x3255d0.websocket.emit("close", _0x288cd3.stream.fd);
          };
          _0x195024.socket.onmessage = function _0x23865d(_0x4ed162) {
            _0x5cc946(_0x4ed162.data);
          };
          _0x195024.socket.onerror = function (_0x502825) {
            _0x288cd3.error = _0x400123.ECONNREFUSED;
            _0x3255d0.websocket.emit("error", [_0x288cd3.stream.fd, _0x288cd3.error, "ECONNREFUSED: Connection refused"]);
          };
        }
      },
      poll: function (_0x437328) {
        if (_0x437328.type === 1 && _0x437328.server) {
          if (_0x437328.pending.length) {
            return 65;
          } else {
            return 0;
          }
        }
        var _0x53d9a7 = 0;
        var _0x5ec90b = _0x437328.type === 1 ? _0x332817.websocket_sock_ops.getPeer(_0x437328, _0x437328.daddr, _0x437328.dport) : null;
        if (_0x437328.recv_queue.length || !_0x5ec90b || _0x5ec90b && _0x5ec90b.socket.readyState === _0x5ec90b.socket.CLOSING || _0x5ec90b && _0x5ec90b.socket.readyState === _0x5ec90b.socket.CLOSED) {
          _0x53d9a7 |= 65;
        }
        if (!_0x5ec90b || _0x5ec90b && _0x5ec90b.socket.readyState === _0x5ec90b.socket.OPEN) {
          _0x53d9a7 |= 4;
        }
        if (_0x5ec90b && _0x5ec90b.socket.readyState === _0x5ec90b.socket.CLOSING || _0x5ec90b && _0x5ec90b.socket.readyState === _0x5ec90b.socket.CLOSED) {
          _0x53d9a7 |= 16;
        }
        return _0x53d9a7;
      },
      ioctl: function (_0x29fe6b, _0x8a46ca, _0x18476e) {
        switch (_0x8a46ca) {
          case 21531:
            var _0x4ca65c = 0;
            if (_0x29fe6b.recv_queue.length) {
              _0x4ca65c = _0x29fe6b.recv_queue[0].data.length;
            }
            _0x3ea6c9[_0x18476e >> 2] = _0x4ca65c;
            return 0;
          default:
            return _0x400123.EINVAL;
        }
      },
      close: function (_0x4cff18) {
        if (_0x4cff18.server) {
          try {
            _0x4cff18.server.close();
          } catch (_0x4cfd98) {}
          _0x4cff18.server = null;
        }
        var _0x463065 = Object.keys(_0x4cff18.peers);
        for (var _0x3cff0b = 0; _0x3cff0b < _0x463065.length; _0x3cff0b++) {
          var _0x391d6d = _0x4cff18.peers[_0x463065[_0x3cff0b]];
          try {
            _0x391d6d.socket.close();
          } catch (_0xe6badd) {}
          _0x332817.websocket_sock_ops.removePeer(_0x4cff18, _0x391d6d);
        }
        return 0;
      },
      bind: function (_0x2f0b1e, _0x77deca, _0x3b4573) {
        if (typeof _0x2f0b1e.saddr !== "undefined" || typeof _0x2f0b1e.sport !== "undefined") {
          throw new _0x129e29.ErrnoError(_0x400123.EINVAL);
        }
        _0x2f0b1e.saddr = _0x77deca;
        _0x2f0b1e.sport = _0x3b4573;
        if (_0x2f0b1e.type === 2) {
          if (_0x2f0b1e.server) {
            _0x2f0b1e.server.close();
            _0x2f0b1e.server = null;
          }
          try {
            _0x2f0b1e.sock_ops.listen(_0x2f0b1e, 0);
          } catch (_0xd6be67) {
            if (!(_0xd6be67 instanceof _0x129e29.ErrnoError)) {
              throw _0xd6be67;
            }
            if (_0xd6be67.errno !== _0x400123.EOPNOTSUPP) {
              throw _0xd6be67;
            }
          }
        }
      },
      connect: function (_0x9ebbbc, _0x52286e, _0x2ccc11) {
        if (_0x9ebbbc.server) {
          throw new _0x129e29.ErrnoError(_0x400123.EOPNOTSUPP);
        }
        if (typeof _0x9ebbbc.daddr !== "undefined" && typeof _0x9ebbbc.dport !== "undefined") {
          var _0x535b97 = _0x332817.websocket_sock_ops.getPeer(_0x9ebbbc, _0x9ebbbc.daddr, _0x9ebbbc.dport);
          if (_0x535b97) {
            if (_0x535b97.socket.readyState === _0x535b97.socket.CONNECTING) {
              throw new _0x129e29.ErrnoError(_0x400123.EALREADY);
            } else {
              throw new _0x129e29.ErrnoError(_0x400123.EISCONN);
            }
          }
        }
        var _0x29bcda = _0x332817.websocket_sock_ops.createPeer(_0x9ebbbc, _0x52286e, _0x2ccc11);
        _0x9ebbbc.daddr = _0x29bcda.addr;
        _0x9ebbbc.dport = _0x29bcda.port;
        throw new _0x129e29.ErrnoError(_0x400123.EINPROGRESS);
      },
      listen: function (_0x103631, _0x115b13) {
        if (!_0x226b31) {
          throw new _0x129e29.ErrnoError(_0x400123.EOPNOTSUPP);
        }
        if (_0x103631.server) {
          throw new _0x129e29.ErrnoError(_0x400123.EINVAL);
        }
        var _0x598587 = require("ws").Server;
        var _0x5b4755 = _0x103631.saddr;
        _0x103631.server = new _0x598587({
          host: _0x5b4755,
          port: _0x103631.sport
        });
        _0x3255d0.websocket.emit("listen", _0x103631.stream.fd);
        _0x103631.server.on("connection", function (_0x4f9fb2) {
          if (_0x103631.type === 1) {
            var _0x5b8172 = _0x332817.createSocket(_0x103631.family, _0x103631.type, _0x103631.protocol);
            var _0x3a020d = _0x332817.websocket_sock_ops.createPeer(_0x5b8172, _0x4f9fb2);
            _0x5b8172.daddr = _0x3a020d.addr;
            _0x5b8172.dport = _0x3a020d.port;
            _0x103631.pending.push(_0x5b8172);
            _0x3255d0.websocket.emit("connection", _0x5b8172.stream.fd);
          } else {
            _0x332817.websocket_sock_ops.createPeer(_0x103631, _0x4f9fb2);
            _0x3255d0.websocket.emit("connection", _0x103631.stream.fd);
          }
        });
        _0x103631.server.on("closed", function () {
          _0x3255d0.websocket.emit("close", _0x103631.stream.fd);
          _0x103631.server = null;
        });
        _0x103631.server.on("error", function (_0x1caef7) {
          _0x103631.error = _0x400123.EHOSTUNREACH;
          _0x3255d0.websocket.emit("error", [_0x103631.stream.fd, _0x103631.error, "EHOSTUNREACH: Host is unreachable"]);
        });
      },
      accept: function (_0x41a271) {
        if (!_0x41a271.server) {
          throw new _0x129e29.ErrnoError(_0x400123.EINVAL);
        }
        var _0x14571d = _0x41a271.pending.shift();
        _0x14571d.stream.flags = _0x41a271.stream.flags;
        return _0x14571d;
      },
      getname: function (_0x360127, _0xd2e64a) {
        var _0x35a4f8;
        var _0x2754e0;
        if (_0xd2e64a) {
          if (_0x360127.daddr === undefined || _0x360127.dport === undefined) {
            throw new _0x129e29.ErrnoError(_0x400123.ENOTCONN);
          }
          _0x35a4f8 = _0x360127.daddr;
          _0x2754e0 = _0x360127.dport;
        } else {
          _0x35a4f8 = _0x360127.saddr || 0;
          _0x2754e0 = _0x360127.sport || 0;
        }
        return {
          addr: _0x35a4f8,
          port: _0x2754e0
        };
      },
      sendmsg: function (_0x1fcb58, _0xcf23d9, _0x334505, _0x42cd87, _0x376716, _0x521c16) {
        if (_0x1fcb58.type === 2) {
          if (_0x376716 === undefined || _0x521c16 === undefined) {
            _0x376716 = _0x1fcb58.daddr;
            _0x521c16 = _0x1fcb58.dport;
          }
          if (_0x376716 === undefined || _0x521c16 === undefined) {
            throw new _0x129e29.ErrnoError(_0x400123.EDESTADDRREQ);
          }
        } else {
          _0x376716 = _0x1fcb58.daddr;
          _0x521c16 = _0x1fcb58.dport;
        }
        var _0x387476 = _0x332817.websocket_sock_ops.getPeer(_0x1fcb58, _0x376716, _0x521c16);
        if (_0x1fcb58.type === 1) {
          if (!_0x387476 || _0x387476.socket.readyState === _0x387476.socket.CLOSING || _0x387476.socket.readyState === _0x387476.socket.CLOSED) {
            throw new _0x129e29.ErrnoError(_0x400123.ENOTCONN);
          } else if (_0x387476.socket.readyState === _0x387476.socket.CONNECTING) {
            throw new _0x129e29.ErrnoError(_0x400123.EAGAIN);
          }
        }
        if (ArrayBuffer.isView(_0xcf23d9)) {
          _0x334505 += _0xcf23d9.byteOffset;
          _0xcf23d9 = _0xcf23d9.buffer;
        }
        var _0x3fcd42;
        _0x3fcd42 = _0xcf23d9.slice(_0x334505, _0x334505 + _0x42cd87);
        if (_0x1fcb58.type === 2) {
          if (!_0x387476 || _0x387476.socket.readyState !== _0x387476.socket.OPEN) {
            if (!_0x387476 || _0x387476.socket.readyState === _0x387476.socket.CLOSING || _0x387476.socket.readyState === _0x387476.socket.CLOSED) {
              _0x387476 = _0x332817.websocket_sock_ops.createPeer(_0x1fcb58, _0x376716, _0x521c16);
            }
            _0x387476.dgram_send_queue.push(_0x3fcd42);
            return _0x42cd87;
          }
        }
        try {
          _0x387476.socket.send(_0x3fcd42);
          return _0x42cd87;
        } catch (_0x54ff67) {
          throw new _0x129e29.ErrnoError(_0x400123.EINVAL);
        }
      },
      recvmsg: function (_0x4794e1, _0x55c091) {
        if (_0x4794e1.type === 1 && _0x4794e1.server) {
          throw new _0x129e29.ErrnoError(_0x400123.ENOTCONN);
        }
        var _0x2db7d9 = _0x4794e1.recv_queue.shift();
        if (!_0x2db7d9) {
          if (_0x4794e1.type === 1) {
            var _0x396eb6 = _0x332817.websocket_sock_ops.getPeer(_0x4794e1, _0x4794e1.daddr, _0x4794e1.dport);
            if (!_0x396eb6) {
              throw new _0x129e29.ErrnoError(_0x400123.ENOTCONN);
            } else if (_0x396eb6.socket.readyState === _0x396eb6.socket.CLOSING || _0x396eb6.socket.readyState === _0x396eb6.socket.CLOSED) {
              return null;
            } else {
              throw new _0x129e29.ErrnoError(_0x400123.EAGAIN);
            }
          } else {
            throw new _0x129e29.ErrnoError(_0x400123.EAGAIN);
          }
        }
        var _0x258b22 = _0x2db7d9.data.byteLength || _0x2db7d9.data.length;
        var _0x5ed443 = _0x2db7d9.data.byteOffset || 0;
        var _0x189b41 = _0x2db7d9.data.buffer || _0x2db7d9.data;
        var _0x143a51 = Math.min(_0x55c091, _0x258b22);
        var _0x107047 = {
          buffer: new Uint8Array(_0x189b41, _0x5ed443, _0x143a51),
          addr: _0x2db7d9.addr,
          port: _0x2db7d9.port
        };
        if (_0x4794e1.type === 1 && _0x143a51 < _0x258b22) {
          var _0x18990f = _0x258b22 - _0x143a51;
          _0x2db7d9.data = new Uint8Array(_0x189b41, _0x5ed443 + _0x143a51, _0x18990f);
          _0x4794e1.recv_queue.unshift(_0x2db7d9);
        }
        return _0x107047;
      }
    }
  };
  function _0x164a7c(_0x3a1460) {
    var _0x2441bd = _0x332817.getSocket(_0x3a1460);
    if (!_0x2441bd) {
      throw new _0x129e29.ErrnoError(8);
    }
    return _0x2441bd;
  }
  function _0x4cab60(_0x517786) {
    _0x3ea6c9[_0x51c8a5() >> 2] = _0x517786;
    return _0x517786;
  }
  function _0x33fc54(_0x29940f) {
    var _0x108e83 = _0x29940f.split(".");
    for (var _0x2a45e0 = 0; _0x2a45e0 < 4; _0x2a45e0++) {
      var _0x21b39d = Number(_0x108e83[_0x2a45e0]);
      if (isNaN(_0x21b39d)) {
        return null;
      }
      _0x108e83[_0x2a45e0] = _0x21b39d;
    }
    return (_0x108e83[0] | _0x108e83[1] << 8 | _0x108e83[2] << 16 | _0x108e83[3] << 24) >>> 0;
  }
  function _0x1a002b(_0x58437f) {
    return parseInt(_0x58437f);
  }
  function _0x29a4f9(_0x2d20bf) {
    var _0xaf3af8;
    var _0x2f8e90;
    var _0x2e9831;
    var _0x3328de;
    var _0x18df54 = /^((?=.*::)(?!.*::.+::)(::)?([\dA-F]{1,4}:(:|\b)|){5}|([\dA-F]{1,4}:){6})((([\dA-F]{1,4}((?!\3)::|:\b|$))|(?!\2\3)){2}|(((2[0-4]|1\d|[1-9])?\d|25[0-5])\.?\b){4})$/i;
    var _0x3b2c73 = [];
    if (!_0x18df54.test(_0x2d20bf)) {
      return null;
    }
    if (_0x2d20bf === "::") {
      return [0, 0, 0, 0, 0, 0, 0, 0];
    }
    if (_0x2d20bf.startsWith("::")) {
      _0x2d20bf = _0x2d20bf.replace("::", "Z:");
    } else {
      _0x2d20bf = _0x2d20bf.replace("::", ":Z:");
    }
    if (_0x2d20bf.indexOf(".") > 0) {
      _0x2d20bf = _0x2d20bf.replace(new RegExp("[.]", "g"), ":");
      _0xaf3af8 = _0x2d20bf.split(":");
      _0xaf3af8[_0xaf3af8.length - 4] = _0x1a002b(_0xaf3af8[_0xaf3af8.length - 4]) + _0x1a002b(_0xaf3af8[_0xaf3af8.length - 3]) * 256;
      _0xaf3af8[_0xaf3af8.length - 3] = _0x1a002b(_0xaf3af8[_0xaf3af8.length - 2]) + _0x1a002b(_0xaf3af8[_0xaf3af8.length - 1]) * 256;
      _0xaf3af8 = _0xaf3af8.slice(0, _0xaf3af8.length - 2);
    } else {
      _0xaf3af8 = _0x2d20bf.split(":");
    }
    _0x2e9831 = 0;
    _0x3328de = 0;
    for (_0x2f8e90 = 0; _0x2f8e90 < _0xaf3af8.length; _0x2f8e90++) {
      if (typeof _0xaf3af8[_0x2f8e90] === "string") {
        if (_0xaf3af8[_0x2f8e90] === "Z") {
          for (_0x3328de = 0; _0x3328de < 8 - _0xaf3af8.length + 1; _0x3328de++) {
            _0x3b2c73[_0x2f8e90 + _0x3328de] = 0;
          }
          _0x2e9831 = _0x3328de - 1;
        } else {
          _0x3b2c73[_0x2f8e90 + _0x2e9831] = _0x116ce3(parseInt(_0xaf3af8[_0x2f8e90], 16));
        }
      } else {
        _0x3b2c73[_0x2f8e90 + _0x2e9831] = _0xaf3af8[_0x2f8e90];
      }
    }
    return [_0x3b2c73[1] << 16 | _0x3b2c73[0], _0x3b2c73[3] << 16 | _0x3b2c73[2], _0x3b2c73[5] << 16 | _0x3b2c73[4], _0x3b2c73[7] << 16 | _0x3b2c73[6]];
  }
  function _0x8ee340(_0x442f2d, _0x4b6a10, _0x5d5a0f, _0x5b772b, _0x315753) {
    switch (_0x4b6a10) {
      case 2:
        _0x5d5a0f = _0x33fc54(_0x5d5a0f);
        if (_0x315753) {
          _0x3ea6c9[_0x315753 >> 2] = 16;
        }
        _0x1f1f2c[_0x442f2d >> 1] = _0x4b6a10;
        _0x3ea6c9[_0x442f2d + 4 >> 2] = _0x5d5a0f;
        _0x1f1f2c[_0x442f2d + 2 >> 1] = _0x116ce3(_0x5b772b);
        _0x1cea62 = [0, (_0x4ff14d = 0, +Math.abs(_0x4ff14d) >= 1 ? _0x4ff14d > 0 ? (Math.min(+Math.floor(_0x4ff14d / 4294967296), 4294967295) | 0) >>> 0 : ~~+Math.ceil((_0x4ff14d - +(~~_0x4ff14d >>> 0)) / 4294967296) >>> 0 : 0)];
        _0x3ea6c9[_0x442f2d + 8 >> 2] = _0x1cea62[0];
        _0x3ea6c9[_0x442f2d + 12 >> 2] = _0x1cea62[1];
        break;
      case 10:
        _0x5d5a0f = _0x29a4f9(_0x5d5a0f);
        if (_0x315753) {
          _0x3ea6c9[_0x315753 >> 2] = 28;
        }
        _0x3ea6c9[_0x442f2d >> 2] = _0x4b6a10;
        _0x3ea6c9[_0x442f2d + 8 >> 2] = _0x5d5a0f[0];
        _0x3ea6c9[_0x442f2d + 12 >> 2] = _0x5d5a0f[1];
        _0x3ea6c9[_0x442f2d + 16 >> 2] = _0x5d5a0f[2];
        _0x3ea6c9[_0x442f2d + 20 >> 2] = _0x5d5a0f[3];
        _0x1f1f2c[_0x442f2d + 2 >> 1] = _0x116ce3(_0x5b772b);
        _0x3ea6c9[_0x442f2d + 4 >> 2] = 0;
        _0x3ea6c9[_0x442f2d + 24 >> 2] = 0;
        break;
      default:
        return 5;
    }
    return 0;
  }
  var _0x32e614 = {
    address_map: {
      id: 1,
      addrs: {},
      names: {}
    },
    lookup_name: function (_0x373269) {
      var _0x3598f9 = _0x33fc54(_0x373269);
      if (_0x3598f9 !== null) {
        return _0x373269;
      }
      _0x3598f9 = _0x29a4f9(_0x373269);
      if (_0x3598f9 !== null) {
        return _0x373269;
      }
      var _0xcad413;
      if (_0x32e614.address_map.addrs[_0x373269]) {
        _0xcad413 = _0x32e614.address_map.addrs[_0x373269];
      } else {
        var _0x578a43 = _0x32e614.address_map.id++;
        _0x498a3a(_0x578a43 < 65535, "exceeded max address mappings of 65535");
        _0xcad413 = "172.29." + (_0x578a43 & 255) + "." + (_0x578a43 & 65280);
        _0x32e614.address_map.names[_0xcad413] = _0x373269;
        _0x32e614.address_map.addrs[_0x373269] = _0xcad413;
      }
      return _0xcad413;
    },
    lookup_addr: function (_0x363b5a) {
      if (_0x32e614.address_map.names[_0x363b5a]) {
        return _0x32e614.address_map.names[_0x363b5a];
      }
      return null;
    }
  };
  function _0x8df473(_0x325c80, _0x1d6f40, _0x4d7623, _0x158656) {
    try {
      var _0x4e7279 = _0x164a7c(_0x325c80);
      var _0x5e1017 = _0x4e7279.sock_ops.accept(_0x4e7279);
      if (_0x1d6f40) {
        var _0x4adb6e = _0x8ee340(_0x1d6f40, _0x5e1017.family, _0x32e614.lookup_name(_0x5e1017.daddr), _0x5e1017.dport, _0x4d7623);
      }
      return _0x5e1017.stream.fd;
    } catch (_0x3f2918) {
      if (typeof _0x129e29 === "undefined" || !(_0x3f2918 instanceof _0x129e29.ErrnoError)) {
        _0x3b38b3(_0x3f2918);
      }
      return -_0x3f2918.errno;
    }
  }
  function _0x4e3fde(_0x2b39ce, _0x55b7f8) {
    try {
      _0x2b39ce = _0x2bf3a0.getStr(_0x2b39ce);
      return _0x2bf3a0.doAccess(_0x2b39ce, _0x55b7f8);
    } catch (_0x2963f2) {
      if (typeof _0x129e29 === "undefined" || !(_0x2963f2 instanceof _0x129e29.ErrnoError)) {
        _0x3b38b3(_0x2963f2);
      }
      return -_0x2963f2.errno;
    }
  }
  function _0x41955e(_0x14e4e6) {
    return (_0x14e4e6 & 255) + "." + (_0x14e4e6 >> 8 & 255) + "." + (_0x14e4e6 >> 16 & 255) + "." + (_0x14e4e6 >> 24 & 255);
  }
  function _0x51cbc8(_0x473bc6) {
    var _0x2b07da = "";
    var _0x3e1a25 = 0;
    var _0x37cc41 = 0;
    var _0x2e044a = 0;
    var _0x1f2113 = 0;
    var _0xbd5210 = 0;
    var _0x4d940a = 0;
    var _0x284c1b = [_0x473bc6[0] & 65535, _0x473bc6[0] >> 16, _0x473bc6[1] & 65535, _0x473bc6[1] >> 16, _0x473bc6[2] & 65535, _0x473bc6[2] >> 16, _0x473bc6[3] & 65535, _0x473bc6[3] >> 16];
    var _0x2e4058 = true;
    var _0x17b0ba = "";
    for (_0x4d940a = 0; _0x4d940a < 5; _0x4d940a++) {
      if (_0x284c1b[_0x4d940a] !== 0) {
        _0x2e4058 = false;
        break;
      }
    }
    if (_0x2e4058) {
      _0x17b0ba = _0x41955e(_0x284c1b[6] | _0x284c1b[7] << 16);
      if (_0x284c1b[5] === -1) {
        _0x2b07da = "::ffff:";
        _0x2b07da += _0x17b0ba;
        return _0x2b07da;
      }
      if (_0x284c1b[5] === 0) {
        _0x2b07da = "::";
        if (_0x17b0ba === "0.0.0.0") {
          _0x17b0ba = "";
        }
        if (_0x17b0ba === "0.0.0.1") {
          _0x17b0ba = "1";
        }
        _0x2b07da += _0x17b0ba;
        return _0x2b07da;
      }
    }
    for (_0x3e1a25 = 0; _0x3e1a25 < 8; _0x3e1a25++) {
      if (_0x284c1b[_0x3e1a25] === 0) {
        if (_0x3e1a25 - _0x2e044a > 1) {
          _0xbd5210 = 0;
        }
        _0x2e044a = _0x3e1a25;
        _0xbd5210++;
      }
      if (_0xbd5210 > _0x37cc41) {
        _0x37cc41 = _0xbd5210;
        _0x1f2113 = _0x3e1a25 - _0x37cc41 + 1;
      }
    }
    for (_0x3e1a25 = 0; _0x3e1a25 < 8; _0x3e1a25++) {
      if (_0x37cc41 > 1) {
        if (_0x284c1b[_0x3e1a25] === 0 && _0x3e1a25 >= _0x1f2113 && _0x3e1a25 < _0x1f2113 + _0x37cc41) {
          if (_0x3e1a25 === _0x1f2113) {
            _0x2b07da += ":";
            if (_0x1f2113 === 0) {
              _0x2b07da += ":";
            }
          }
          continue;
        }
      }
      _0x2b07da += Number(_0x27552d(_0x284c1b[_0x3e1a25] & 65535)).toString(16);
      _0x2b07da += _0x3e1a25 < 7 ? ":" : "";
    }
    return _0x2b07da;
  }
  function _0x979e32(_0x55aac2, _0x45c346) {
    var _0x3b4860 = _0x1f1f2c[_0x55aac2 >> 1];
    var _0x20e021 = _0x27552d(_0x286a74[_0x55aac2 + 2 >> 1]);
    var _0x4956b8;
    switch (_0x3b4860) {
      case 2:
        if (_0x45c346 !== 16) {
          return {
            errno: 28
          };
        }
        _0x4956b8 = _0x3ea6c9[_0x55aac2 + 4 >> 2];
        _0x4956b8 = _0x41955e(_0x4956b8);
        break;
      case 10:
        if (_0x45c346 !== 28) {
          return {
            errno: 28
          };
        }
        _0x4956b8 = [_0x3ea6c9[_0x55aac2 + 8 >> 2], _0x3ea6c9[_0x55aac2 + 12 >> 2], _0x3ea6c9[_0x55aac2 + 16 >> 2], _0x3ea6c9[_0x55aac2 + 20 >> 2]];
        _0x4956b8 = _0x51cbc8(_0x4956b8);
        break;
      default:
        return {
          errno: 5
        };
    }
    return {
      family: _0x3b4860,
      addr: _0x4956b8,
      port: _0x20e021
    };
  }
  function _0x5c8322(_0x18d5af, _0x48ee9d, _0x51b7b9) {
    if (_0x51b7b9 && _0x18d5af === 0) {
      return null;
    }
    var _0x196f3e = _0x979e32(_0x18d5af, _0x48ee9d);
    if (_0x196f3e.errno) {
      throw new _0x129e29.ErrnoError(_0x196f3e.errno);
    }
    _0x196f3e.addr = _0x32e614.lookup_addr(_0x196f3e.addr) || _0x196f3e.addr;
    return _0x196f3e;
  }
  function _0x2ce9b1(_0x2a1450, _0x11992d, _0x2c359e) {
    try {
      var _0x295393 = _0x164a7c(_0x2a1450);
      var _0x1337d0 = _0x5c8322(_0x11992d, _0x2c359e);
      _0x295393.sock_ops.bind(_0x295393, _0x1337d0.addr, _0x1337d0.port);
      return 0;
    } catch (_0x491e9c) {
      if (typeof _0x129e29 === "undefined" || !(_0x491e9c instanceof _0x129e29.ErrnoError)) {
        _0x3b38b3(_0x491e9c);
      }
      return -_0x491e9c.errno;
    }
  }
  function _0x52c6a4(_0x2b2dbd, _0xd424e3) {
    try {
      _0x2b2dbd = _0x2bf3a0.getStr(_0x2b2dbd);
      _0x129e29.chmod(_0x2b2dbd, _0xd424e3);
      return 0;
    } catch (_0x5a2d9d) {
      if (typeof _0x129e29 === "undefined" || !(_0x5a2d9d instanceof _0x129e29.ErrnoError)) {
        _0x3b38b3(_0x5a2d9d);
      }
      return -_0x5a2d9d.errno;
    }
  }
  function _0x7e61d3(_0x38fa0a, _0x500534, _0x265340) {
    try {
      var _0x3d2485 = _0x164a7c(_0x38fa0a);
      var _0x4a8781 = _0x5c8322(_0x500534, _0x265340);
      _0x3d2485.sock_ops.connect(_0x3d2485, _0x4a8781.addr, _0x4a8781.port);
      return 0;
    } catch (_0x58778a) {
      if (typeof _0x129e29 === "undefined" || !(_0x58778a instanceof _0x129e29.ErrnoError)) {
        _0x3b38b3(_0x58778a);
      }
      return -_0x58778a.errno;
    }
  }
  function _0xb83d3b(_0x35af87, _0x2acec3) {
    try {
      var _0x1612b8 = _0x2bf3a0.getStreamFromFD(_0x35af87);
      if (_0x1612b8.fd === _0x2acec3) {
        return _0x2acec3;
      }
      return _0x2bf3a0.doDup(_0x1612b8.path, _0x1612b8.flags, _0x2acec3);
    } catch (_0x204f20) {
      if (typeof _0x129e29 === "undefined" || !(_0x204f20 instanceof _0x129e29.ErrnoError)) {
        _0x3b38b3(_0x204f20);
      }
      return -_0x204f20.errno;
    }
  }
  function _0x5d1da7(_0x8c95f, _0xcff25f) {
    try {
      _0x129e29.fchmod(_0x8c95f, _0xcff25f);
      return 0;
    } catch (_0xcd0cb4) {
      if (typeof _0x129e29 === "undefined" || !(_0xcd0cb4 instanceof _0x129e29.ErrnoError)) {
        _0x3b38b3(_0xcd0cb4);
      }
      return -_0xcd0cb4.errno;
    }
  }
  function _0x188ae4(_0x38db4d, _0x2e118f, _0x561b35) {
    _0x2bf3a0.varargs = _0x561b35;
    try {
      var _0xf3f0fb = _0x2bf3a0.getStreamFromFD(_0x38db4d);
      switch (_0x2e118f) {
        case 0:
          {
            var _0x23cc9c = _0x2bf3a0.get();
            if (_0x23cc9c < 0) {
              return -28;
            }
            var _0xbf1b8b;
            _0xbf1b8b = _0x129e29.open(_0xf3f0fb.path, _0xf3f0fb.flags, 0, _0x23cc9c);
            return _0xbf1b8b.fd;
          }
        case 1:
        case 2:
          return 0;
        case 3:
          return _0xf3f0fb.flags;
        case 4:
          {
            var _0x23cc9c = _0x2bf3a0.get();
            _0xf3f0fb.flags |= _0x23cc9c;
            return 0;
          }
        case 12:
          {
            var _0x23cc9c = _0x2bf3a0.get();
            var _0x2a5a6c = 0;
            _0x1f1f2c[_0x23cc9c + _0x2a5a6c >> 1] = 2;
            return 0;
          }
        case 13:
        case 14:
          return 0;
        case 16:
        case 8:
          return -28;
        case 9:
          _0x4cab60(28);
          return -1;
        default:
          {
            return -28;
          }
      }
    } catch (_0x3c9018) {
      if (typeof _0x129e29 === "undefined" || !(_0x3c9018 instanceof _0x129e29.ErrnoError)) {
        _0x3b38b3(_0x3c9018);
      }
      return -_0x3c9018.errno;
    }
  }
  function _0x4b0363(_0x5b4f0c, _0x283793) {
    try {
      var _0x5eb794 = _0x2bf3a0.getStreamFromFD(_0x5b4f0c);
      return _0x2bf3a0.doStat(_0x129e29.stat, _0x5eb794.path, _0x283793);
    } catch (_0x3ffc2a) {
      if (typeof _0x129e29 === "undefined" || !(_0x3ffc2a instanceof _0x129e29.ErrnoError)) {
        _0x3b38b3(_0x3ffc2a);
      }
      return -_0x3ffc2a.errno;
    }
  }
  function _0x459ae1(_0x3b1303, _0x409d5d, _0x27584c, _0x266e23) {
    try {
      var _0x38117f = _0x2bf3a0.get64(_0x27584c, _0x266e23);
      _0x129e29.ftruncate(_0x3b1303, _0x38117f);
      return 0;
    } catch (_0x227ca1) {
      if (typeof _0x129e29 === "undefined" || !(_0x227ca1 instanceof _0x129e29.ErrnoError)) {
        _0x3b38b3(_0x227ca1);
      }
      return -_0x227ca1.errno;
    }
  }
  function _0x35618b(_0x4cf7e1, _0xedfddb) {
    try {
      if (_0xedfddb === 0) {
        return -28;
      }
      var _0x57018e = _0x129e29.cwd();
      var _0x51c03f = _0x40d569(_0x57018e);
      if (_0xedfddb < _0x51c03f + 1) {
        return -68;
      }
      _0x259c3d(_0x57018e, _0x4cf7e1, _0xedfddb);
      return _0x4cf7e1;
    } catch (_0x5dc335) {
      if (typeof _0x129e29 === "undefined" || !(_0x5dc335 instanceof _0x129e29.ErrnoError)) {
        _0x3b38b3(_0x5dc335);
      }
      return -_0x5dc335.errno;
    }
  }
  function _0x2635c2(_0x84668e, _0x2c5ae6, _0x424c6d) {
    try {
      var _0x36b796 = _0x2bf3a0.getStreamFromFD(_0x84668e);
      if (!_0x36b796.getdents) {
        _0x36b796.getdents = _0x129e29.readdir(_0x36b796.path);
      }
      var _0x1faaba = 280;
      var _0x109538 = 0;
      var _0x523fd0 = _0x129e29.llseek(_0x36b796, 0, 1);
      var _0x540ca7 = Math.floor(_0x523fd0 / _0x1faaba);
      while (_0x540ca7 < _0x36b796.getdents.length && _0x109538 + _0x1faaba <= _0x424c6d) {
        var _0x39f448;
        var _0x2dd5e6;
        var _0x5c5149 = _0x36b796.getdents[_0x540ca7];
        if (_0x5c5149[0] === ".") {
          _0x39f448 = 1;
          _0x2dd5e6 = 4;
        } else {
          var _0x4e0304 = _0x129e29.lookupNode(_0x36b796.node, _0x5c5149);
          _0x39f448 = _0x4e0304.id;
          _0x2dd5e6 = _0x129e29.isChrdev(_0x4e0304.mode) ? 2 : _0x129e29.isDir(_0x4e0304.mode) ? 4 : _0x129e29.isLink(_0x4e0304.mode) ? 10 : 8;
        }
        _0x1cea62 = [_0x39f448 >>> 0, (_0x4ff14d = _0x39f448, +Math.abs(_0x4ff14d) >= 1 ? _0x4ff14d > 0 ? (Math.min(+Math.floor(_0x4ff14d / 4294967296), 4294967295) | 0) >>> 0 : ~~+Math.ceil((_0x4ff14d - +(~~_0x4ff14d >>> 0)) / 4294967296) >>> 0 : 0)];
        _0x3ea6c9[_0x2c5ae6 + _0x109538 >> 2] = _0x1cea62[0];
        _0x3ea6c9[_0x2c5ae6 + _0x109538 + 4 >> 2] = _0x1cea62[1];
        _0x1cea62 = [(_0x540ca7 + 1) * _0x1faaba >>> 0, (_0x4ff14d = (_0x540ca7 + 1) * _0x1faaba, +Math.abs(_0x4ff14d) >= 1 ? _0x4ff14d > 0 ? (Math.min(+Math.floor(_0x4ff14d / 4294967296), 4294967295) | 0) >>> 0 : ~~+Math.ceil((_0x4ff14d - +(~~_0x4ff14d >>> 0)) / 4294967296) >>> 0 : 0)];
        _0x3ea6c9[_0x2c5ae6 + _0x109538 + 8 >> 2] = _0x1cea62[0];
        _0x3ea6c9[_0x2c5ae6 + _0x109538 + 12 >> 2] = _0x1cea62[1];
        _0x1f1f2c[_0x2c5ae6 + _0x109538 + 16 >> 1] = 280;
        _0x410af5[_0x2c5ae6 + _0x109538 + 18 >> 0] = _0x2dd5e6;
        _0x259c3d(_0x5c5149, _0x2c5ae6 + _0x109538 + 19, 256);
        _0x109538 += _0x1faaba;
        _0x540ca7 += 1;
      }
      _0x129e29.llseek(_0x36b796, _0x540ca7 * _0x1faaba, 0);
      return _0x109538;
    } catch (_0x385093) {
      if (typeof _0x129e29 === "undefined" || !(_0x385093 instanceof _0x129e29.ErrnoError)) {
        _0x3b38b3(_0x385093);
      }
      return -_0x385093.errno;
    }
  }
  function _0x1fef38() {
    return 0;
  }
  function _0xdbb5a6() {
    return _0x1fef38();
  }
  function _0x59f1fa(_0x29898b, _0x247d0e, _0x3691a6) {
    try {
      var _0x4c9ece = _0x164a7c(_0x29898b);
      if (!_0x4c9ece.daddr) {
        return -53;
      }
      var _0x596f07 = _0x8ee340(_0x247d0e, _0x4c9ece.family, _0x32e614.lookup_name(_0x4c9ece.daddr), _0x4c9ece.dport, _0x3691a6);
      return 0;
    } catch (_0x48fe01) {
      if (typeof _0x129e29 === "undefined" || !(_0x48fe01 instanceof _0x129e29.ErrnoError)) {
        _0x3b38b3(_0x48fe01);
      }
      return -_0x48fe01.errno;
    }
  }
  function _0xaa3cf4() {
    return 42;
  }
  function _0xaee0fa(_0x18a57d, _0x1cc14c) {
    try {
      _0xd1dbcb(_0x1cc14c, 0, 136);
      _0x3ea6c9[_0x1cc14c >> 2] = 1;
      _0x3ea6c9[_0x1cc14c + 4 >> 2] = 2;
      _0x3ea6c9[_0x1cc14c + 8 >> 2] = 3;
      _0x3ea6c9[_0x1cc14c + 12 >> 2] = 4;
      return 0;
    } catch (_0x4df329) {
      if (typeof _0x129e29 === "undefined" || !(_0x4df329 instanceof _0x129e29.ErrnoError)) {
        _0x3b38b3(_0x4df329);
      }
      return -_0x4df329.errno;
    }
  }
  function _0x1df382(_0x17e8d2, _0x3cf990, _0x4c6399) {
    try {
      _0x266425("__sys_getsockname " + _0x17e8d2);
      var _0x320463 = _0x164a7c(_0x17e8d2);
      var _0x1dd9b8 = _0x8ee340(_0x3cf990, _0x320463.family, _0x32e614.lookup_name(_0x320463.saddr || "0.0.0.0"), _0x320463.sport, _0x4c6399);
      return 0;
    } catch (_0x32a1e4) {
      if (typeof _0x129e29 === "undefined" || !(_0x32a1e4 instanceof _0x129e29.ErrnoError)) {
        _0x3b38b3(_0x32a1e4);
      }
      return -_0x32a1e4.errno;
    }
  }
  function _0x2cc4e8(_0x256efa, _0x34729f, _0x505468, _0x36f581, _0x368ae0) {
    try {
      var _0x3aa15a = _0x164a7c(_0x256efa);
      if (_0x34729f === 1) {
        if (_0x505468 === 4) {
          _0x3ea6c9[_0x36f581 >> 2] = _0x3aa15a.error;
          _0x3ea6c9[_0x368ae0 >> 2] = 4;
          _0x3aa15a.error = null;
          return 0;
        }
      }
      return -50;
    } catch (_0x3552a2) {
      if (typeof _0x129e29 === "undefined" || !(_0x3552a2 instanceof _0x129e29.ErrnoError)) {
        _0x3b38b3(_0x3552a2);
      }
      return -_0x3552a2.errno;
    }
  }
  function _0x1374c4() {
    return _0x1fef38();
  }
  function _0x5006b3(_0x14b3aa, _0x200b55, _0x4bca28) {
    _0x2bf3a0.varargs = _0x4bca28;
    try {
      var _0x2f124b = _0x2bf3a0.getStreamFromFD(_0x14b3aa);
      switch (_0x200b55) {
        case 21509:
        case 21505:
          {
            if (!_0x2f124b.tty) {
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
            if (!_0x2f124b.tty) {
              return -59;
            }
            return 0;
          }
        case 21519:
          {
            if (!_0x2f124b.tty) {
              return -59;
            }
            var _0x2870b9 = _0x2bf3a0.get();
            _0x3ea6c9[_0x2870b9 >> 2] = 0;
            return 0;
          }
        case 21520:
          {
            if (!_0x2f124b.tty) {
              return -59;
            }
            return -28;
          }
        case 21531:
          {
            var _0x2870b9 = _0x2bf3a0.get();
            return _0x129e29.ioctl(_0x2f124b, _0x200b55, _0x2870b9);
          }
        case 21523:
          {
            if (!_0x2f124b.tty) {
              return -59;
            }
            return 0;
          }
        case 21524:
          {
            if (!_0x2f124b.tty) {
              return -59;
            }
            return 0;
          }
        default:
          _0x3b38b3("bad ioctl syscall " + _0x200b55);
      }
    } catch (_0x4a8548) {
      if (typeof _0x129e29 === "undefined" || !(_0x4a8548 instanceof _0x129e29.ErrnoError)) {
        _0x3b38b3(_0x4a8548);
      }
      return -_0x4a8548.errno;
    }
  }
  function _0x25366b(_0x45740f, _0x59d7bc) {
    try {
      var _0x29e72e = _0x164a7c(_0x45740f);
      _0x29e72e.sock_ops.listen(_0x29e72e, _0x59d7bc);
      return 0;
    } catch (_0x478ac1) {
      if (typeof _0x129e29 === "undefined" || !(_0x478ac1 instanceof _0x129e29.ErrnoError)) {
        _0x3b38b3(_0x478ac1);
      }
      return -_0x478ac1.errno;
    }
  }
  function _0x565f14(_0x2060e8, _0x2cc3ec) {
    try {
      _0x2060e8 = _0x2bf3a0.getStr(_0x2060e8);
      return _0x2bf3a0.doStat(_0x129e29.lstat, _0x2060e8, _0x2cc3ec);
    } catch (_0xe8ef49) {
      if (typeof _0x129e29 === "undefined" || !(_0xe8ef49 instanceof _0x129e29.ErrnoError)) {
        _0x3b38b3(_0xe8ef49);
      }
      return -_0xe8ef49.errno;
    }
  }
  function _0xc240e3(_0x45b58e, _0x5e348a) {
    try {
      _0x45b58e = _0x2bf3a0.getStr(_0x45b58e);
      return _0x2bf3a0.doMkdir(_0x45b58e, _0x5e348a);
    } catch (_0x39d10b) {
      if (typeof _0x129e29 === "undefined" || !(_0x39d10b instanceof _0x129e29.ErrnoError)) {
        _0x3b38b3(_0x39d10b);
      }
      return -_0x39d10b.errno;
    }
  }
  function _0x526b6c(_0x2fd293, _0xda88fa, _0x5b3d16, _0x13f51c, _0x11bb40, _0x44341a) {
    _0x44341a <<= 12;
    var _0xb819a3;
    var _0x165e1c = false;
    if ((_0x13f51c & 16) !== 0 && _0x2fd293 % 65536 !== 0) {
      return -28;
    }
    if ((_0x13f51c & 32) !== 0) {
      _0xb819a3 = _0x1b4bd1(65536, _0xda88fa);
      if (!_0xb819a3) {
        return -48;
      }
      _0xd1dbcb(_0xb819a3, 0, _0xda88fa);
      _0x165e1c = true;
    } else {
      var _0x45568a = _0x129e29.getStream(_0x11bb40);
      if (!_0x45568a) {
        return -8;
      }
      var _0x1ec2f5 = _0x129e29.mmap(_0x45568a, _0x2fd293, _0xda88fa, _0x44341a, _0x5b3d16, _0x13f51c);
      _0xb819a3 = _0x1ec2f5.ptr;
      _0x165e1c = _0x1ec2f5.allocated;
    }
    _0x2bf3a0.mappings[_0xb819a3] = {
      malloc: _0xb819a3,
      len: _0xda88fa,
      allocated: _0x165e1c,
      fd: _0x11bb40,
      prot: _0x5b3d16,
      flags: _0x13f51c,
      offset: _0x44341a
    };
    return _0xb819a3;
  }
  function _0x480724(_0x4bede5, _0x2d4703, _0x377262, _0x66abe6, _0x5a6f28, _0x4639fe) {
    try {
      return _0x526b6c(_0x4bede5, _0x2d4703, _0x377262, _0x66abe6, _0x5a6f28, _0x4639fe);
    } catch (_0x41ead5) {
      if (typeof _0x129e29 === "undefined" || !(_0x41ead5 instanceof _0x129e29.ErrnoError)) {
        _0x3b38b3(_0x41ead5);
      }
      return -_0x41ead5.errno;
    }
  }
  function _0x1ad951(_0x38fd02, _0x4229ad) {
    if ((_0x38fd02 | 0) === -1 || _0x4229ad === 0) {
      return -28;
    }
    var _0x513c4f = _0x2bf3a0.mappings[_0x38fd02];
    if (!_0x513c4f) {
      return 0;
    }
    if (_0x4229ad === _0x513c4f.len) {
      var _0x36b726 = _0x129e29.getStream(_0x513c4f.fd);
      if (_0x36b726) {
        if (_0x513c4f.prot & 2) {
          _0x2bf3a0.doMsync(_0x38fd02, _0x36b726, _0x4229ad, _0x513c4f.flags, _0x513c4f.offset);
        }
        _0x129e29.munmap(_0x36b726);
      }
      _0x2bf3a0.mappings[_0x38fd02] = null;
      if (_0x513c4f.allocated) {
        _0x4200b9(_0x513c4f.malloc);
      }
    }
    return 0;
  }
  function _0x25d615(_0x4c9455, _0x28e43d) {
    try {
      return _0x1ad951(_0x4c9455, _0x28e43d);
    } catch (_0x244c04) {
      if (typeof _0x129e29 === "undefined" || !(_0x244c04 instanceof _0x129e29.ErrnoError)) {
        _0x3b38b3(_0x244c04);
      }
      return -_0x244c04.errno;
    }
  }
  function _0x95d707(_0x240b86, _0x5d0b62, _0x505e83) {
    _0x2bf3a0.varargs = _0x505e83;
    try {
      var _0x3239bd = _0x2bf3a0.getStr(_0x240b86);
      var _0xb4e1d4 = _0x505e83 ? _0x2bf3a0.get() : 0;
      var _0xb44240 = _0x129e29.open(_0x3239bd, _0x5d0b62, _0xb4e1d4);
      return _0xb44240.fd;
    } catch (_0xe90466) {
      if (typeof _0x129e29 === "undefined" || !(_0xe90466 instanceof _0x129e29.ErrnoError)) {
        _0x3b38b3(_0xe90466);
      }
      return -_0xe90466.errno;
    }
  }
  var _0x3ab7b2 = {
    BUCKET_BUFFER_SIZE: 8192,
    mount: function (_0x28c5d5) {
      return _0x129e29.createNode(null, "/", 16895, 0);
    },
    createPipe: function () {
      var _0x3eea40 = {
        buckets: []
      };
      _0x3eea40.buckets.push({
        buffer: new Uint8Array(_0x3ab7b2.BUCKET_BUFFER_SIZE),
        offset: 0,
        roffset: 0
      });
      var _0x1cf821 = _0x3ab7b2.nextname();
      var _0x3bbff1 = _0x3ab7b2.nextname();
      var _0x1dcf6d = _0x129e29.createNode(_0x3ab7b2.root, _0x1cf821, 4096, 0);
      var _0x273508 = _0x129e29.createNode(_0x3ab7b2.root, _0x3bbff1, 4096, 0);
      _0x1dcf6d.pipe = _0x3eea40;
      _0x273508.pipe = _0x3eea40;
      var _0xf2e69a = _0x129e29.createStream({
        path: _0x1cf821,
        node: _0x1dcf6d,
        flags: 0,
        seekable: false,
        stream_ops: _0x3ab7b2.stream_ops
      });
      _0x1dcf6d.stream = _0xf2e69a;
      var _0x5feaed = _0x129e29.createStream({
        path: _0x3bbff1,
        node: _0x273508,
        flags: 1,
        seekable: false,
        stream_ops: _0x3ab7b2.stream_ops
      });
      _0x273508.stream = _0x5feaed;
      return {
        readable_fd: _0xf2e69a.fd,
        writable_fd: _0x5feaed.fd
      };
    },
    stream_ops: {
      poll: function (_0x4cd2f8) {
        var _0x3655d3 = _0x4cd2f8.node.pipe;
        if ((_0x4cd2f8.flags & 2097155) === 1) {
          return 260;
        } else if (_0x3655d3.buckets.length > 0) {
          for (var _0x10c7f8 = 0; _0x10c7f8 < _0x3655d3.buckets.length; _0x10c7f8++) {
            var _0x2eac69 = _0x3655d3.buckets[_0x10c7f8];
            if (_0x2eac69.offset - _0x2eac69.roffset > 0) {
              return 65;
            }
          }
        }
        return 0;
      },
      ioctl: function (_0x167a45, _0x34a2a5, _0x195639) {
        return _0x400123.EINVAL;
      },
      fsync: function (_0x480be4) {
        return _0x400123.EINVAL;
      },
      read: function (_0x281fda, _0xaf166e, _0x5bbe38, _0x344abd, _0x14db9d) {
        var _0x1ccdf5 = _0x281fda.node.pipe;
        var _0x5f2eed = 0;
        for (var _0x4913f6 = 0; _0x4913f6 < _0x1ccdf5.buckets.length; _0x4913f6++) {
          var _0x4c87e5 = _0x1ccdf5.buckets[_0x4913f6];
          _0x5f2eed += _0x4c87e5.offset - _0x4c87e5.roffset;
        }
        _0x498a3a(_0xaf166e instanceof ArrayBuffer || ArrayBuffer.isView(_0xaf166e));
        var _0x477836 = _0xaf166e.subarray(_0x5bbe38, _0x5bbe38 + _0x344abd);
        if (_0x344abd <= 0) {
          return 0;
        }
        if (_0x5f2eed == 0) {
          throw new _0x129e29.ErrnoError(_0x400123.EAGAIN);
        }
        var _0x28e389 = Math.min(_0x5f2eed, _0x344abd);
        var _0x36b458 = _0x28e389;
        var _0x5539d5 = 0;
        for (var _0x4913f6 = 0; _0x4913f6 < _0x1ccdf5.buckets.length; _0x4913f6++) {
          var _0x57443b = _0x1ccdf5.buckets[_0x4913f6];
          var _0x18fed9 = _0x57443b.offset - _0x57443b.roffset;
          if (_0x28e389 <= _0x18fed9) {
            var _0x1c9ad6 = _0x57443b.buffer.subarray(_0x57443b.roffset, _0x57443b.offset);
            if (_0x28e389 < _0x18fed9) {
              _0x1c9ad6 = _0x1c9ad6.subarray(0, _0x28e389);
              _0x57443b.roffset += _0x28e389;
            } else {
              _0x5539d5++;
            }
            _0x477836.set(_0x1c9ad6);
            break;
          } else {
            var _0x1c9ad6 = _0x57443b.buffer.subarray(_0x57443b.roffset, _0x57443b.offset);
            _0x477836.set(_0x1c9ad6);
            _0x477836 = _0x477836.subarray(_0x1c9ad6.byteLength);
            _0x28e389 -= _0x1c9ad6.byteLength;
            _0x5539d5++;
          }
        }
        if (_0x5539d5 && _0x5539d5 == _0x1ccdf5.buckets.length) {
          _0x5539d5--;
          _0x1ccdf5.buckets[_0x5539d5].offset = 0;
          _0x1ccdf5.buckets[_0x5539d5].roffset = 0;
        }
        _0x1ccdf5.buckets.splice(0, _0x5539d5);
        return _0x36b458;
      },
      write: function (_0x28e81, _0x5d289e, _0x552a8a, _0x293e7f, _0x2c90d5) {
        var _0x56f72c = _0x28e81.node.pipe;
        _0x498a3a(_0x5d289e instanceof ArrayBuffer || ArrayBuffer.isView(_0x5d289e));
        var _0x2c15c0 = _0x5d289e.subarray(_0x552a8a, _0x552a8a + _0x293e7f);
        var _0xd38fc6 = _0x2c15c0.byteLength;
        if (_0xd38fc6 <= 0) {
          return 0;
        }
        var _0x2cdb2c = null;
        if (_0x56f72c.buckets.length == 0) {
          _0x2cdb2c = {
            buffer: new Uint8Array(_0x3ab7b2.BUCKET_BUFFER_SIZE),
            offset: 0,
            roffset: 0
          };
          _0x56f72c.buckets.push(_0x2cdb2c);
        } else {
          _0x2cdb2c = _0x56f72c.buckets[_0x56f72c.buckets.length - 1];
        }
        _0x498a3a(_0x2cdb2c.offset <= _0x3ab7b2.BUCKET_BUFFER_SIZE);
        var _0x966e1 = _0x3ab7b2.BUCKET_BUFFER_SIZE - _0x2cdb2c.offset;
        if (_0x966e1 >= _0xd38fc6) {
          _0x2cdb2c.buffer.set(_0x2c15c0, _0x2cdb2c.offset);
          _0x2cdb2c.offset += _0xd38fc6;
          return _0xd38fc6;
        } else if (_0x966e1 > 0) {
          _0x2cdb2c.buffer.set(_0x2c15c0.subarray(0, _0x966e1), _0x2cdb2c.offset);
          _0x2cdb2c.offset += _0x966e1;
          _0x2c15c0 = _0x2c15c0.subarray(_0x966e1, _0x2c15c0.byteLength);
        }
        var _0x135c1b = _0x2c15c0.byteLength / _0x3ab7b2.BUCKET_BUFFER_SIZE | 0;
        var _0x203864 = _0x2c15c0.byteLength % _0x3ab7b2.BUCKET_BUFFER_SIZE;
        for (var _0x3113bc = 0; _0x3113bc < _0x135c1b; _0x3113bc++) {
          var _0x1d5ff5 = {
            buffer: new Uint8Array(_0x3ab7b2.BUCKET_BUFFER_SIZE),
            offset: _0x3ab7b2.BUCKET_BUFFER_SIZE,
            roffset: 0
          };
          _0x56f72c.buckets.push(_0x1d5ff5);
          _0x1d5ff5.buffer.set(_0x2c15c0.subarray(0, _0x3ab7b2.BUCKET_BUFFER_SIZE));
          _0x2c15c0 = _0x2c15c0.subarray(_0x3ab7b2.BUCKET_BUFFER_SIZE, _0x2c15c0.byteLength);
        }
        if (_0x203864 > 0) {
          var _0x1d5ff5 = {
            buffer: new Uint8Array(_0x3ab7b2.BUCKET_BUFFER_SIZE),
            offset: _0x2c15c0.byteLength,
            roffset: 0
          };
          _0x56f72c.buckets.push(_0x1d5ff5);
          _0x1d5ff5.buffer.set(_0x2c15c0);
        }
        return _0xd38fc6;
      },
      close: function (_0x159a65) {
        var _0x27a444 = _0x159a65.node.pipe;
        _0x27a444.buckets = null;
      }
    },
    nextname: function () {
      if (!_0x3ab7b2.nextname.current) {
        _0x3ab7b2.nextname.current = 0;
      }
      return "pipe[" + _0x3ab7b2.nextname.current++ + "]";
    }
  };
  function _0x4e63a5(_0x3e99c2) {
    try {
      if (_0x3e99c2 == 0) {
        throw new _0x129e29.ErrnoError(21);
      }
      var _0x2635dc = _0x3ab7b2.createPipe();
      _0x3ea6c9[_0x3e99c2 >> 2] = _0x2635dc.readable_fd;
      _0x3ea6c9[_0x3e99c2 + 4 >> 2] = _0x2635dc.writable_fd;
      return 0;
    } catch (_0x23b27a) {
      if (typeof _0x129e29 === "undefined" || !(_0x23b27a instanceof _0x129e29.ErrnoError)) {
        _0x3b38b3(_0x23b27a);
      }
      return -_0x23b27a.errno;
    }
  }
  function _0x53877a(_0x26b75e, _0x579ef2, _0x119d30) {
    try {
      var _0x54b5c9 = 0;
      for (var _0x2b89c8 = 0; _0x2b89c8 < _0x579ef2; _0x2b89c8++) {
        var _0x313723 = _0x26b75e + _0x2b89c8 * 8;
        var _0x2c2bc4 = _0x3ea6c9[_0x313723 >> 2];
        var _0x19cd05 = _0x1f1f2c[_0x313723 + 4 >> 1];
        var _0x1ab866 = 32;
        var _0x404b84 = _0x129e29.getStream(_0x2c2bc4);
        if (_0x404b84) {
          _0x1ab866 = _0x2bf3a0.DEFAULT_POLLMASK;
          if (_0x404b84.stream_ops.poll) {
            _0x1ab866 = _0x404b84.stream_ops.poll(_0x404b84);
          }
        }
        _0x1ab866 &= _0x19cd05 | 8 | 16;
        if (_0x1ab866) {
          _0x54b5c9++;
        }
        _0x1f1f2c[_0x313723 + 6 >> 1] = _0x1ab866;
      }
      return _0x54b5c9;
    } catch (_0x21d32e) {
      if (typeof _0x129e29 === "undefined" || !(_0x21d32e instanceof _0x129e29.ErrnoError)) {
        _0x3b38b3(_0x21d32e);
      }
      return -_0x21d32e.errno;
    }
  }
  function _0x3d7792(_0x501ded, _0x330a8f, _0x495101) {
    try {
      _0x501ded = _0x2bf3a0.getStr(_0x501ded);
      return _0x2bf3a0.doReadlink(_0x501ded, _0x330a8f, _0x495101);
    } catch (_0x3a2046) {
      if (typeof _0x129e29 === "undefined" || !(_0x3a2046 instanceof _0x129e29.ErrnoError)) {
        _0x3b38b3(_0x3a2046);
      }
      return -_0x3a2046.errno;
    }
  }
  function _0x25eaa9(_0x342ab5, _0x2037ec, _0x5d9714, _0xee19c, _0x1fc62e, _0x57f4e0) {
    try {
      var _0x31e921 = _0x164a7c(_0x342ab5);
      var _0x403d89 = _0x31e921.sock_ops.recvmsg(_0x31e921, _0x5d9714);
      if (!_0x403d89) {
        return 0;
      }
      if (_0x1fc62e) {
        var _0x174eb3 = _0x8ee340(_0x1fc62e, _0x31e921.family, _0x32e614.lookup_name(_0x403d89.addr), _0x403d89.port, _0x57f4e0);
      }
      _0x10abe1.set(_0x403d89.buffer, _0x2037ec);
      return _0x403d89.buffer.byteLength;
    } catch (_0x413d25) {
      if (typeof _0x129e29 === "undefined" || !(_0x413d25 instanceof _0x129e29.ErrnoError)) {
        _0x3b38b3(_0x413d25);
      }
      return -_0x413d25.errno;
    }
  }
  function _0x32bfe2(_0x3fca04, _0x43ce5c, _0x462831) {
    try {
      var _0x23bf10 = _0x164a7c(_0x3fca04);
      var _0x57cb47 = _0x3ea6c9[_0x43ce5c + 8 >> 2];
      var _0xcff508 = _0x3ea6c9[_0x43ce5c + 12 >> 2];
      var _0x1f299f = 0;
      for (var _0x5d68d1 = 0; _0x5d68d1 < _0xcff508; _0x5d68d1++) {
        _0x1f299f += _0x3ea6c9[_0x57cb47 + (_0x5d68d1 * 8 + 4) >> 2];
      }
      var _0x2e3023 = _0x23bf10.sock_ops.recvmsg(_0x23bf10, _0x1f299f);
      if (!_0x2e3023) {
        return 0;
      }
      var _0x4f627b = _0x3ea6c9[_0x43ce5c >> 2];
      if (_0x4f627b) {
        var _0x2ffa65 = _0x8ee340(_0x4f627b, _0x23bf10.family, _0x32e614.lookup_name(_0x2e3023.addr), _0x2e3023.port);
      }
      var _0x215913 = 0;
      var _0x42e421 = _0x2e3023.buffer.byteLength;
      for (var _0x5d68d1 = 0; _0x42e421 > 0 && _0x5d68d1 < _0xcff508; _0x5d68d1++) {
        var _0x58734c = _0x3ea6c9[_0x57cb47 + (_0x5d68d1 * 8 + 0) >> 2];
        var _0x40ab23 = _0x3ea6c9[_0x57cb47 + (_0x5d68d1 * 8 + 4) >> 2];
        if (!_0x40ab23) {
          continue;
        }
        var _0x3c99f4 = Math.min(_0x40ab23, _0x42e421);
        var _0x4e29dc = _0x2e3023.buffer.subarray(_0x215913, _0x215913 + _0x3c99f4);
        _0x10abe1.set(_0x4e29dc, _0x58734c + _0x215913);
        _0x215913 += _0x3c99f4;
        _0x42e421 -= _0x3c99f4;
      }
      return _0x215913;
    } catch (_0xac8b99) {
      if (typeof _0x129e29 === "undefined" || !(_0xac8b99 instanceof _0x129e29.ErrnoError)) {
        _0x3b38b3(_0xac8b99);
      }
      return -_0xac8b99.errno;
    }
  }
  function _0x573bc2(_0xe8dcc4, _0x4a386d) {
    try {
      _0xe8dcc4 = _0x2bf3a0.getStr(_0xe8dcc4);
      _0x4a386d = _0x2bf3a0.getStr(_0x4a386d);
      _0x129e29.rename(_0xe8dcc4, _0x4a386d);
      return 0;
    } catch (_0x1a5c49) {
      if (typeof _0x129e29 === "undefined" || !(_0x1a5c49 instanceof _0x129e29.ErrnoError)) {
        _0x3b38b3(_0x1a5c49);
      }
      return -_0x1a5c49.errno;
    }
  }
  function _0x5dd153(_0x5aebc8) {
    try {
      _0x5aebc8 = _0x2bf3a0.getStr(_0x5aebc8);
      _0x129e29.rmdir(_0x5aebc8);
      return 0;
    } catch (_0x216f35) {
      if (typeof _0x129e29 === "undefined" || !(_0x216f35 instanceof _0x129e29.ErrnoError)) {
        _0x3b38b3(_0x216f35);
      }
      return -_0x216f35.errno;
    }
  }
  function _0x2632a0(_0x366995, _0x4d6a5b, _0x441879) {
    try {
      var _0x173073 = _0x164a7c(_0x366995);
      var _0x5082bc = _0x3ea6c9[_0x4d6a5b + 8 >> 2];
      var _0x953f43 = _0x3ea6c9[_0x4d6a5b + 12 >> 2];
      var _0x1d93a3;
      var _0x1382e9;
      var _0x7afa3e = _0x3ea6c9[_0x4d6a5b >> 2];
      var _0x1f751b = _0x3ea6c9[_0x4d6a5b + 4 >> 2];
      if (_0x7afa3e) {
        var _0x5474f6 = _0x979e32(_0x7afa3e, _0x1f751b);
        if (_0x5474f6.errno) {
          return -_0x5474f6.errno;
        }
        _0x1382e9 = _0x5474f6.port;
        _0x1d93a3 = _0x32e614.lookup_addr(_0x5474f6.addr) || _0x5474f6.addr;
      }
      var _0x1a7b75 = 0;
      for (var _0x1cae75 = 0; _0x1cae75 < _0x953f43; _0x1cae75++) {
        _0x1a7b75 += _0x3ea6c9[_0x5082bc + (_0x1cae75 * 8 + 4) >> 2];
      }
      var _0x5491a3 = new Uint8Array(_0x1a7b75);
      var _0x23aa62 = 0;
      for (var _0x1cae75 = 0; _0x1cae75 < _0x953f43; _0x1cae75++) {
        var _0x24f03d = _0x3ea6c9[_0x5082bc + (_0x1cae75 * 8 + 0) >> 2];
        var _0x2a9ea3 = _0x3ea6c9[_0x5082bc + (_0x1cae75 * 8 + 4) >> 2];
        for (var _0x5335a0 = 0; _0x5335a0 < _0x2a9ea3; _0x5335a0++) {
          _0x5491a3[_0x23aa62++] = _0x410af5[_0x24f03d + _0x5335a0 >> 0];
        }
      }
      return _0x173073.sock_ops.sendmsg(_0x173073, _0x5491a3, 0, _0x1a7b75, _0x1d93a3, _0x1382e9);
    } catch (_0x545b98) {
      if (typeof _0x129e29 === "undefined" || !(_0x545b98 instanceof _0x129e29.ErrnoError)) {
        _0x3b38b3(_0x545b98);
      }
      return -_0x545b98.errno;
    }
  }
  function _0x2b6770(_0x3b60cd, _0x4d2c3e, _0xcadbd1, _0x5f0bf8, _0x2de29c, _0x575d07) {
    try {
      var _0x883380 = _0x164a7c(_0x3b60cd);
      var _0x35e698 = _0x5c8322(_0x2de29c, _0x575d07, true);
      if (!_0x35e698) {
        return _0x129e29.write(_0x883380.stream, _0x410af5, _0x4d2c3e, _0xcadbd1);
      } else {
        return _0x883380.sock_ops.sendmsg(_0x883380, _0x410af5, _0x4d2c3e, _0xcadbd1, _0x35e698.addr, _0x35e698.port);
      }
    } catch (_0x555a9c) {
      if (typeof _0x129e29 === "undefined" || !(_0x555a9c instanceof _0x129e29.ErrnoError)) {
        _0x3b38b3(_0x555a9c);
      }
      return -_0x555a9c.errno;
    }
  }
  function _0x49638b(_0x583210) {
    try {
      return -50;
    } catch (_0x4bb79f) {
      if (typeof _0x129e29 === "undefined" || !(_0x4bb79f instanceof _0x129e29.ErrnoError)) {
        _0x3b38b3(_0x4bb79f);
      }
      return -_0x4bb79f.errno;
    }
  }
  function _0x51bc58(_0x38a65d, _0x55e049) {
    try {
      _0x164a7c(_0x38a65d);
      return -52;
    } catch (_0x7cdfc0) {
      if (typeof _0x129e29 === "undefined" || !(_0x7cdfc0 instanceof _0x129e29.ErrnoError)) {
        _0x3b38b3(_0x7cdfc0);
      }
      return -_0x7cdfc0.errno;
    }
  }
  function _0x2c5b69(_0xa4847d, _0x10f47b, _0x2e80f6) {
    try {
      var _0x33beaa = _0x332817.createSocket(_0xa4847d, _0x10f47b, _0x2e80f6);
      return _0x33beaa.stream.fd;
    } catch (_0x3947ff) {
      if (typeof _0x129e29 === "undefined" || !(_0x3947ff instanceof _0x129e29.ErrnoError)) {
        _0x3b38b3(_0x3947ff);
      }
      return -_0x3947ff.errno;
    }
  }
  function _0x424ba8(_0x1f4639, _0x20108a) {
    try {
      _0x1f4639 = _0x2bf3a0.getStr(_0x1f4639);
      return _0x2bf3a0.doStat(_0x129e29.stat, _0x1f4639, _0x20108a);
    } catch (_0x41776b) {
      if (typeof _0x129e29 === "undefined" || !(_0x41776b instanceof _0x129e29.ErrnoError)) {
        _0x3b38b3(_0x41776b);
      }
      return -_0x41776b.errno;
    }
  }
  function _0x2f647a(_0x36218c, _0xd22f90, _0x42b6b1) {
    try {
      _0x36218c = _0x2bf3a0.getStr(_0x36218c);
      _0x3ea6c9[_0x42b6b1 + 4 >> 2] = 4096;
      _0x3ea6c9[_0x42b6b1 + 40 >> 2] = 4096;
      _0x3ea6c9[_0x42b6b1 + 8 >> 2] = 1000000;
      _0x3ea6c9[_0x42b6b1 + 12 >> 2] = 500000;
      _0x3ea6c9[_0x42b6b1 + 16 >> 2] = 500000;
      _0x3ea6c9[_0x42b6b1 + 20 >> 2] = _0x129e29.nextInode;
      _0x3ea6c9[_0x42b6b1 + 24 >> 2] = 1000000;
      _0x3ea6c9[_0x42b6b1 + 28 >> 2] = 42;
      _0x3ea6c9[_0x42b6b1 + 44 >> 2] = 2;
      _0x3ea6c9[_0x42b6b1 + 36 >> 2] = 255;
      return 0;
    } catch (_0x493270) {
      if (typeof _0x129e29 === "undefined" || !(_0x493270 instanceof _0x129e29.ErrnoError)) {
        _0x3b38b3(_0x493270);
      }
      return -_0x493270.errno;
    }
  }
  function _0x25f39d(_0x2ab7a4, _0x549969) {
    try {
      _0x2ab7a4 = _0x2bf3a0.getStr(_0x2ab7a4);
      _0x549969 = _0x2bf3a0.getStr(_0x549969);
      _0x129e29.symlink(_0x2ab7a4, _0x549969);
      return 0;
    } catch (_0x3a52f7) {
      if (typeof _0x129e29 === "undefined" || !(_0x3a52f7 instanceof _0x129e29.ErrnoError)) {
        _0x3b38b3(_0x3a52f7);
      }
      return -_0x3a52f7.errno;
    }
  }
  function _0x484531(_0x48b256, _0x5832f2, _0x1b802d, _0x5a2966) {
    try {
      _0x48b256 = _0x2bf3a0.getStr(_0x48b256);
      var _0x121c47 = _0x2bf3a0.get64(_0x1b802d, _0x5a2966);
      _0x129e29.truncate(_0x48b256, _0x121c47);
      return 0;
    } catch (_0x5212b9) {
      if (typeof _0x129e29 === "undefined" || !(_0x5212b9 instanceof _0x129e29.ErrnoError)) {
        _0x3b38b3(_0x5212b9);
      }
      return -_0x5212b9.errno;
    }
  }
  function _0x47a6e9(_0x153623) {
    try {
      if (!_0x153623) {
        return -21;
      }
      var _0x4403be = {
        __size__: 390,
        domainname: 325,
        machine: 260,
        nodename: 65,
        release: 130,
        sysname: 0,
        version: 195
      };
      var _0x5befa2 = function (_0xd786dd, _0xffed70) {
        var _0x29ffdd = _0x4403be[_0xd786dd];
        _0x3eb398(_0xffed70, _0x153623 + _0x29ffdd);
      };
      _0x5befa2("sysname", "Emscripten");
      _0x5befa2("nodename", "emscripten");
      _0x5befa2("release", "1.0");
      _0x5befa2("version", "#1");
      _0x5befa2("machine", "wasm32");
      return 0;
    } catch (_0x5743a5) {
      if (typeof _0x129e29 === "undefined" || !(_0x5743a5 instanceof _0x129e29.ErrnoError)) {
        _0x3b38b3(_0x5743a5);
      }
      return -_0x5743a5.errno;
    }
  }
  function _0x404d74(_0x387816) {
    try {
      _0x387816 = _0x2bf3a0.getStr(_0x387816);
      _0x129e29.unlink(_0x387816);
      return 0;
    } catch (_0x2b0f49) {
      if (typeof _0x129e29 === "undefined" || !(_0x2b0f49 instanceof _0x129e29.ErrnoError)) {
        _0x3b38b3(_0x2b0f49);
      }
      return -_0x2b0f49.errno;
    }
  }
  function _0x3c6ef2(_0x44ef52, _0x5234d3, _0xa3f8f6, _0x3d963a) {
    try {
      _0x5234d3 = _0x2bf3a0.getStr(_0x5234d3);
      _0x5234d3 = _0x2bf3a0.calculateAt(_0x44ef52, _0x5234d3, true);
      var _0x42eba7 = _0x3ea6c9[_0xa3f8f6 >> 2];
      var _0x59db7c = _0x3ea6c9[_0xa3f8f6 + 4 >> 2];
      var _0x321749 = _0x42eba7 * 1000 + _0x59db7c / 1000000;
      _0xa3f8f6 += 8;
      _0x42eba7 = _0x3ea6c9[_0xa3f8f6 >> 2];
      _0x59db7c = _0x3ea6c9[_0xa3f8f6 + 4 >> 2];
      var _0x4b119a = _0x42eba7 * 1000 + _0x59db7c / 1000000;
      _0x129e29.utime(_0x5234d3, _0x321749, _0x4b119a);
      return 0;
    } catch (_0x4e2b9d) {
      if (typeof _0x129e29 === "undefined" || !(_0x4e2b9d instanceof _0x129e29.ErrnoError)) {
        _0x3b38b3(_0x4e2b9d);
      }
      return -_0x4e2b9d.errno;
    }
  }
  function _0x49fdc6() {
    _0x3b38b3();
  }
  function _0x3e9009() {
    if (_0x3e9009.start === undefined) {
      _0x3e9009.start = Date.now();
    }
    return (Date.now() - _0x3e9009.start) * 1000 | 0;
  }
  function _0x2af20a() {
    if (_0x226b31) {
      return 1;
    } else if (typeof dateNow !== "undefined") {
      return 1000;
    } else {
      return 1000;
    }
  }
  var _0x168e02 = true;
  function _0x46d08e(_0x3f3f81, _0x11e705) {
    var _0xb37860;
    if (_0x3f3f81 === 0) {
      _0xb37860 = 1000000;
    } else if (_0x3f3f81 === 1 && _0x168e02) {
      _0xb37860 = _0x2af20a();
    } else {
      _0x4cab60(28);
      return -1;
    }
    _0x3ea6c9[_0x11e705 >> 2] = _0xb37860 / 1000000000 | 0;
    _0x3ea6c9[_0x11e705 + 4 >> 2] = _0xb37860;
    return 0;
  }
  var _0xe8e397;
  if (_0x226b31) {
    _0xe8e397 = function () {
      var _0x554361 = process.hrtime();
      return _0x554361[0] * 1000 + _0x554361[1] / 1000000;
    };
  } else if (typeof dateNow !== "undefined") {
    _0xe8e397 = dateNow;
  } else {
    _0xe8e397 = function () {
      return performance.now();
    };
  }
  function _0x25ca04(_0x44695b, _0x24e678) {
    var _0x1002f2;
    if (_0x44695b === 0) {
      _0x1002f2 = Date.now();
    } else if ((_0x44695b === 1 || _0x44695b === 4) && _0x168e02) {
      _0x1002f2 = _0xe8e397();
    } else {
      _0x4cab60(28);
      return -1;
    }
    _0x3ea6c9[_0x24e678 >> 2] = _0x1002f2 / 1000 | 0;
    _0x3ea6c9[_0x24e678 + 4 >> 2] = _0x1002f2 % 1000 * 1000 * 1000 | 0;
    return 0;
  }
  function _0x975622(_0x3d4720, _0x377c8e) {
    return _0x3d4720 - _0x377c8e;
  }
  function _0x306c5f(_0x538b20) {}
  function _0x43d058() {
    return 0;
  }
  function _0x245e0d(_0x237ba3, _0x10ca31) {}
  function _0x39c107(_0xd35650, _0x49405c) {
    return 0;
  }
  var _0x5c6752 = [];
  function _0x23a2cd(_0x466e4c, _0x1c9a50) {
    _0x5c6752.length = 0;
    var _0x2d0a2c;
    _0x1c9a50 >>= 2;
    while (_0x2d0a2c = _0x10abe1[_0x466e4c++]) {
      var _0xdfba9d = _0x2d0a2c < 105;
      if (_0xdfba9d && _0x1c9a50 & 1) {
        _0x1c9a50++;
      }
      _0x5c6752.push(_0xdfba9d ? _0x21f13f[_0x1c9a50++ >> 1] : _0x3ea6c9[_0x1c9a50]);
      ++_0x1c9a50;
    }
    return _0x5c6752;
  }
  function _0x5297f7(_0x3f0771, _0x2a2636, _0x3b4e7e, _0x354f24) {
    var _0x409393 = _0x23a2cd(_0x2a2636, _0x3b4e7e);
    return _0x2fb6f0[_0x3f0771].apply(null, _0x409393);
  }
  function _0x191510(_0x3b34cf, _0x599217, _0x4556b9) {
    return _0x5297f7(_0x3b34cf, _0x599217, _0x4556b9, 1);
  }
  function _0x28a545(_0x44a132, _0x3cc430) {
    _0x41bad6.mainLoop.timingMode = _0x44a132;
    _0x41bad6.mainLoop.timingValue = _0x3cc430;
    if (!_0x41bad6.mainLoop.func) {
      return 1;
    }
    if (!_0x41bad6.mainLoop.running) {
      _0x41bad6.mainLoop.running = true;
    }
    if (_0x44a132 == 0) {
      _0x41bad6.mainLoop.scheduler = function _0x23ac33() {
        var _0x198fc7 = Math.max(0, _0x41bad6.mainLoop.tickStartTime + _0x3cc430 - _0xe8e397()) | 0;
        setTimeout(_0x41bad6.mainLoop.runner, _0x198fc7);
      };
      _0x41bad6.mainLoop.method = "timeout";
    } else if (_0x44a132 == 1) {
      _0x41bad6.mainLoop.scheduler = function _0x45a4b4() {
        _0x41bad6.requestAnimationFrame(_0x41bad6.mainLoop.runner);
      };
      _0x41bad6.mainLoop.method = "rAF";
    } else if (_0x44a132 == 2) {
      if (typeof setImmediate === "undefined") {
        var _0x3aec34 = [];
        var _0x28e7d1 = "setimmediate";
        var _0x11f16a = function (_0x920009) {
          if (_0x920009.data === _0x28e7d1 || _0x920009.data.target === _0x28e7d1) {
            _0x920009.stopPropagation();
            _0x3aec34.shift()();
          }
        };
        addEventListener("message", _0x11f16a, true);
        setImmediate = function _0x435df0(_0x38225f) {
          _0x3aec34.push(_0x38225f);
          if (_0x1cba1f) {
            if (_0x3255d0.setImmediates === undefined) {
              _0x3255d0.setImmediates = [];
            }
            _0x3255d0.setImmediates.push(_0x38225f);
            postMessage({
              target: _0x28e7d1
            });
          } else {
            postMessage(_0x28e7d1, "*");
          }
        };
      }
      _0x41bad6.mainLoop.scheduler = function _0x1a2c9f() {
        setImmediate(_0x41bad6.mainLoop.runner);
      };
      _0x41bad6.mainLoop.method = "immediate";
    }
    return 0;
  }
  function _0x17bda7(_0xab55f9) {
    _0x5c8af4(_0xab55f9);
  }
  function _0x5d90d1() {
    if (!_0x590943()) {
      try {
        _0x17bda7(_0xeffd59);
      } catch (_0x3d63be) {
        if (_0x3d63be instanceof _0x1a0e88) {
          return;
        }
        throw _0x3d63be;
      }
    }
  }
  function _0x2d7218(_0x57728e, _0x2a3230, _0x5c95cf, _0x4af0c0, _0x22551e) {
    _0x498a3a(!_0x41bad6.mainLoop.func, "emscripten_set_main_loop: there can only be one main loop function at once: call emscripten_cancel_main_loop to cancel the previous one before setting a new one with different parameters.");
    _0x41bad6.mainLoop.func = _0x57728e;
    _0x41bad6.mainLoop.arg = _0x4af0c0;
    var _0x5b8d3f = _0x41bad6.mainLoop.currentlyRunningMainloop;
    function _0x452bff() {
      if (_0x5b8d3f < _0x41bad6.mainLoop.currentlyRunningMainloop) {
        _0x5d90d1();
        return false;
      }
      return true;
    }
    _0x41bad6.mainLoop.running = false;
    _0x41bad6.mainLoop.runner = function _0x17b53f() {
      if (_0x587c3e) {
        return;
      }
      if (_0x41bad6.mainLoop.queue.length > 0) {
        var _0x5a109c = Date.now();
        var _0x1f7550 = _0x41bad6.mainLoop.queue.shift();
        _0x1f7550.func(_0x1f7550.arg);
        if (_0x41bad6.mainLoop.remainingBlockers) {
          var _0x5a02f6 = _0x41bad6.mainLoop.remainingBlockers;
          var _0x30faa1 = _0x5a02f6 % 1 == 0 ? _0x5a02f6 - 1 : Math.floor(_0x5a02f6);
          if (_0x1f7550.counted) {
            _0x41bad6.mainLoop.remainingBlockers = _0x30faa1;
          } else {
            _0x30faa1 = _0x30faa1 + 0.5;
            _0x41bad6.mainLoop.remainingBlockers = (_0x5a02f6 * 8 + _0x30faa1) / 9;
          }
        }
        console.log("main loop blocker \"" + _0x1f7550.name + "\" took " + (Date.now() - _0x5a109c) + " ms");
        _0x41bad6.mainLoop.updateStatus();
        if (!_0x452bff()) {
          return;
        }
        setTimeout(_0x41bad6.mainLoop.runner, 0);
        return;
      }
      if (!_0x452bff()) {
        return;
      }
      _0x41bad6.mainLoop.currentFrameNumber = _0x41bad6.mainLoop.currentFrameNumber + 1 | 0;
      if (_0x41bad6.mainLoop.timingMode == 1 && _0x41bad6.mainLoop.timingValue > 1 && _0x41bad6.mainLoop.currentFrameNumber % _0x41bad6.mainLoop.timingValue != 0) {
        _0x41bad6.mainLoop.scheduler();
        return;
      } else if (_0x41bad6.mainLoop.timingMode == 0) {
        _0x41bad6.mainLoop.tickStartTime = _0xe8e397();
      }
      _0x47f2e3.newRenderingFrameStarted();
      _0x41bad6.mainLoop.runIter(_0x57728e);
      if (!_0x452bff()) {
        return;
      }
      if (typeof SDL === "object" && SDL.audio && SDL.audio.queueNewAudioData) {
        SDL.audio.queueNewAudioData();
      }
      _0x41bad6.mainLoop.scheduler();
    };
    if (!_0x22551e) {
      if (_0x2a3230 && _0x2a3230 > 0) {
        _0x28a545(0, 1000 / _0x2a3230);
      } else {
        _0x28a545(1, 1);
      }
      _0x41bad6.mainLoop.scheduler();
    }
    if (_0x5c95cf) {
      throw "unwind";
    }
  }
  function _0x1a51d5(_0x419b54, _0x29fabc) {
    if (_0x587c3e) {
      return;
    }
    if (_0x29fabc) {
      _0x419b54();
      return;
    }
    try {
      _0x419b54();
    } catch (_0x16058b) {
      if (_0x16058b instanceof _0x1a0e88) {
        return;
      } else if (_0x16058b !== "unwind") {
        if (_0x16058b && typeof _0x16058b === "object" && _0x16058b.stack) {
          _0x266425("exception thrown: " + [_0x16058b, _0x16058b.stack]);
        }
        throw _0x16058b;
      }
    }
  }
  var _0x41bad6 = {
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
        _0x41bad6.mainLoop.scheduler = null;
        _0x41bad6.mainLoop.currentlyRunningMainloop++;
      },
      resume: function () {
        _0x41bad6.mainLoop.currentlyRunningMainloop++;
        var _0x314ab1 = _0x41bad6.mainLoop.timingMode;
        var _0x282984 = _0x41bad6.mainLoop.timingValue;
        var _0x1bfe76 = _0x41bad6.mainLoop.func;
        _0x41bad6.mainLoop.func = null;
        _0x2d7218(_0x1bfe76, 0, false, _0x41bad6.mainLoop.arg, true);
        _0x28a545(_0x314ab1, _0x282984);
        _0x41bad6.mainLoop.scheduler();
      },
      updateStatus: function () {
        if (_0x3255d0.setStatus) {
          var _0x158d8a = _0x3255d0.statusMessage || "Please wait...";
          var _0x13f3b3 = _0x41bad6.mainLoop.remainingBlockers;
          var _0x19cacf = _0x41bad6.mainLoop.expectedBlockers;
          if (_0x13f3b3) {
            if (_0x13f3b3 < _0x19cacf) {
              _0x3255d0.setStatus(_0x158d8a + " (" + (_0x19cacf - _0x13f3b3) + "/" + _0x19cacf + ")");
            } else {
              _0x3255d0.setStatus(_0x158d8a);
            }
          } else {
            _0x3255d0.setStatus("");
          }
        }
      },
      runIter: function (_0x4b34fd) {
        if (_0x587c3e) {
          return;
        }
        if (_0x3255d0.preMainLoop) {
          var _0x5b0af5 = _0x3255d0.preMainLoop();
          if (_0x5b0af5 === false) {
            return;
          }
        }
        _0x1a51d5(_0x4b34fd);
        if (_0x3255d0.postMainLoop) {
          _0x3255d0.postMainLoop();
        }
      }
    },
    isFullscreen: false,
    pointerLock: false,
    moduleContextCreatedCallbacks: [],
    workers: [],
    init: function () {
      if (!_0x3255d0.preloadPlugins) {
        _0x3255d0.preloadPlugins = [];
      }
      if (_0x41bad6.initted) {
        return;
      }
      _0x41bad6.initted = true;
      try {
        new Blob();
        _0x41bad6.hasBlobConstructor = true;
      } catch (_0x3bdf6f) {
        _0x41bad6.hasBlobConstructor = false;
        console.log("warning: no blob constructor, cannot create blobs with mimetypes");
      }
      _0x41bad6.BlobBuilder = typeof MozBlobBuilder != "undefined" ? MozBlobBuilder : typeof WebKitBlobBuilder != "undefined" ? WebKitBlobBuilder : !_0x41bad6.hasBlobConstructor ? console.log("warning: no BlobBuilder") : null;
      _0x41bad6.URLObject = typeof window != "undefined" ? window.URL ? window.URL : window.webkitURL : undefined;
      if (!_0x3255d0.noImageDecoding && typeof _0x41bad6.URLObject === "undefined") {
        console.log("warning: Browser does not support creating object URLs. Built-in browser image decoding will not be available.");
        _0x3255d0.noImageDecoding = true;
      }
      var _0x1a6132 = {};
      _0x1a6132.canHandle = function _0x1e7ab5(_0x30d8fb) {
        return !_0x3255d0.noImageDecoding && /\.(jpg|jpeg|png|bmp)$/i.test(_0x30d8fb);
      };
      _0x1a6132.handle = function _0x273e66(_0x2f8ed4, _0x110a74, _0x56c012, _0x118ad1) {
        var _0x229c97 = null;
        if (_0x41bad6.hasBlobConstructor) {
          try {
            _0x229c97 = new Blob([_0x2f8ed4], {
              type: _0x41bad6.getMimetype(_0x110a74)
            });
            if (_0x229c97.size !== _0x2f8ed4.length) {
              _0x229c97 = new Blob([new Uint8Array(_0x2f8ed4).buffer], {
                type: _0x41bad6.getMimetype(_0x110a74)
              });
            }
          } catch (_0x27eaa7) {
            _0x56028a("Blob constructor present but fails: " + _0x27eaa7 + "; falling back to blob builder");
          }
        }
        if (!_0x229c97) {
          var _0x1ab75c = new _0x41bad6.BlobBuilder();
          _0x1ab75c.append(new Uint8Array(_0x2f8ed4).buffer);
          _0x229c97 = _0x1ab75c.getBlob();
        }
        var _0x28a479 = _0x41bad6.URLObject.createObjectURL(_0x229c97);
        var _0x2b2780 = new Image();
        _0x2b2780.onload = function _0x2837d2() {
          _0x498a3a(_0x2b2780.complete, "Image " + _0x110a74 + " could not be decoded");
          var _0x3905be = document.createElement("canvas");
          _0x3905be.width = _0x2b2780.width;
          _0x3905be.height = _0x2b2780.height;
          var _0xeb5933 = _0x3905be.getContext("2d");
          _0xeb5933.drawImage(_0x2b2780, 0, 0);
          _0x3255d0.preloadedImages[_0x110a74] = _0x3905be;
          _0x41bad6.URLObject.revokeObjectURL(_0x28a479);
          if (_0x56c012) {
            _0x56c012(_0x2f8ed4);
          }
        };
        _0x2b2780.onerror = function _0x4f3e51(_0x211897) {
          console.log("Image " + _0x28a479 + " could not be decoded");
          if (_0x118ad1) {
            _0x118ad1();
          }
        };
        _0x2b2780.src = _0x28a479;
      };
      _0x3255d0.preloadPlugins.push(_0x1a6132);
      var _0x343305 = {};
      _0x343305.canHandle = function _0x3285b8(_0x324109) {
        return !_0x3255d0.noAudioDecoding && _0x324109.substr(-4) in {
          ".ogg": 1,
          ".wav": 1,
          ".mp3": 1
        };
      };
      _0x343305.handle = function _0x1b9428(_0xdd30f8, _0xc1abc2, _0x246590, _0x660f98) {
        var _0x328a21 = false;
        function _0x219c9b(_0x2b2f8f) {
          if (_0x328a21) {
            return;
          }
          _0x328a21 = true;
          _0x3255d0.preloadedAudios[_0xc1abc2] = _0x2b2f8f;
          if (_0x246590) {
            _0x246590(_0xdd30f8);
          }
        }
        function _0xa6ef67() {
          if (_0x328a21) {
            return;
          }
          _0x328a21 = true;
          _0x3255d0.preloadedAudios[_0xc1abc2] = new Audio();
          if (_0x660f98) {
            _0x660f98();
          }
        }
        if (_0x41bad6.hasBlobConstructor) {
          try {
            var _0x153a87 = new Blob([_0xdd30f8], {
              type: _0x41bad6.getMimetype(_0xc1abc2)
            });
          } catch (_0x1e7b73) {
            return _0xa6ef67();
          }
          var _0x5e75dd = _0x41bad6.URLObject.createObjectURL(_0x153a87);
          var _0x5b715b = new Audio();
          _0x5b715b.addEventListener("canplaythrough", function () {
            _0x219c9b(_0x5b715b);
          }, false);
          _0x5b715b.onerror = function _0x19fd59(_0x291d6b) {
            if (_0x328a21) {
              return;
            }
            console.log("warning: browser could not fully decode audio " + _0xc1abc2 + ", trying slower base64 approach");
            function _0x17aeaf(_0x2f766a) {
              var _0x2dffb7 = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/";
              var _0x5af81e = "=";
              var _0x1cbac = "";
              var _0x1c3b07 = 0;
              var _0x5bdf7e = 0;
              for (var _0x1b7f6b = 0; _0x1b7f6b < _0x2f766a.length; _0x1b7f6b++) {
                _0x1c3b07 = _0x1c3b07 << 8 | _0x2f766a[_0x1b7f6b];
                _0x5bdf7e += 8;
                while (_0x5bdf7e >= 6) {
                  var _0x39b5dc = _0x1c3b07 >> _0x5bdf7e - 6 & 63;
                  _0x5bdf7e -= 6;
                  _0x1cbac += _0x2dffb7[_0x39b5dc];
                }
              }
              if (_0x5bdf7e == 2) {
                _0x1cbac += _0x2dffb7[(_0x1c3b07 & 3) << 4];
                _0x1cbac += _0x5af81e + _0x5af81e;
              } else if (_0x5bdf7e == 4) {
                _0x1cbac += _0x2dffb7[(_0x1c3b07 & 15) << 2];
                _0x1cbac += _0x5af81e;
              }
              return _0x1cbac;
            }
            _0x5b715b.src = "data:audio/x-" + _0xc1abc2.substr(-3) + ";base64," + _0x17aeaf(_0xdd30f8);
            _0x219c9b(_0x5b715b);
          };
          _0x5b715b.src = _0x5e75dd;
          _0x41bad6.safeSetTimeout(function () {
            _0x219c9b(_0x5b715b);
          }, 10000);
        } else {
          return _0xa6ef67();
        }
      };
      _0x3255d0.preloadPlugins.push(_0x343305);
      function _0x3f8afb() {
        _0x41bad6.pointerLock = document.pointerLockElement === _0x3255d0.canvas || document.mozPointerLockElement === _0x3255d0.canvas || document.webkitPointerLockElement === _0x3255d0.canvas || document.msPointerLockElement === _0x3255d0.canvas;
      }
      var _0x4b7822 = _0x3255d0.canvas;
      if (_0x4b7822) {
        _0x4b7822.requestPointerLock = _0x4b7822.requestPointerLock || _0x4b7822.mozRequestPointerLock || _0x4b7822.webkitRequestPointerLock || _0x4b7822.msRequestPointerLock || function () {};
        _0x4b7822.exitPointerLock = document.exitPointerLock || document.mozExitPointerLock || document.webkitExitPointerLock || document.msExitPointerLock || function () {};
        _0x4b7822.exitPointerLock = _0x4b7822.exitPointerLock.bind(document);
        document.addEventListener("pointerlockchange", _0x3f8afb, false);
        document.addEventListener("mozpointerlockchange", _0x3f8afb, false);
        document.addEventListener("webkitpointerlockchange", _0x3f8afb, false);
        document.addEventListener("mspointerlockchange", _0x3f8afb, false);
        if (_0x3255d0.elementPointerLock) {
          _0x4b7822.addEventListener("click", function (_0x3f3a94) {
            if (!_0x41bad6.pointerLock && _0x3255d0.canvas.requestPointerLock) {
              _0x3255d0.canvas.requestPointerLock();
              _0x3f3a94.preventDefault();
            }
          }, false);
        }
      }
    },
    createContext: function (_0x214f6b, _0x17f6bb, _0x2c31ee, _0x2f791a) {
      if (_0x17f6bb && _0x3255d0.ctx && _0x214f6b == _0x3255d0.canvas) {
        return _0x3255d0.ctx;
      }
      var _0x5a196c;
      var _0x42ad80;
      if (_0x17f6bb) {
        var _0x786636 = {
          antialias: false,
          alpha: false,
          majorVersion: typeof WebGL2RenderingContext !== "undefined" ? 2 : 1
        };
        if (_0x2f791a) {
          for (var _0x480dae in _0x2f791a) {
            _0x786636[_0x480dae] = _0x2f791a[_0x480dae];
          }
        }
        if (typeof _0x47f2e3 !== "undefined") {
          _0x42ad80 = _0x47f2e3.createContext(_0x214f6b, _0x786636);
          if (_0x42ad80) {
            _0x5a196c = _0x47f2e3.getContext(_0x42ad80).GLctx;
          }
        }
      } else {
        _0x5a196c = _0x214f6b.getContext("2d");
      }
      if (!_0x5a196c) {
        return null;
      }
      if (_0x2c31ee) {
        if (!_0x17f6bb) {
          _0x498a3a(typeof _0x1ca50b === "undefined", "cannot set in module if GLctx is used, but we are a non-GL context that would replace it");
        }
        _0x3255d0.ctx = _0x5a196c;
        if (_0x17f6bb) {
          _0x47f2e3.makeContextCurrent(_0x42ad80);
        }
        _0x3255d0.useWebGL = _0x17f6bb;
        _0x41bad6.moduleContextCreatedCallbacks.forEach(function (_0x555f5d) {
          _0x555f5d();
        });
        _0x41bad6.init();
      }
      return _0x5a196c;
    },
    destroyContext: function (_0x5336d7, _0x75b381, _0x25878e) {},
    fullscreenHandlersInstalled: false,
    lockPointer: undefined,
    resizeCanvas: undefined,
    requestFullscreen: function (_0x4d5824, _0x295ff9) {
      _0x41bad6.lockPointer = _0x4d5824;
      _0x41bad6.resizeCanvas = _0x295ff9;
      if (typeof _0x41bad6.lockPointer === "undefined") {
        _0x41bad6.lockPointer = true;
      }
      if (typeof _0x41bad6.resizeCanvas === "undefined") {
        _0x41bad6.resizeCanvas = false;
      }
      var _0x15ab4b = _0x3255d0.canvas;
      function _0x589047() {
        _0x41bad6.isFullscreen = false;
        var _0x48cc03 = _0x15ab4b.parentNode;
        if ((document.fullscreenElement || document.mozFullScreenElement || document.msFullscreenElement || document.webkitFullscreenElement || document.webkitCurrentFullScreenElement) === _0x48cc03) {
          _0x15ab4b.exitFullscreen = _0x41bad6.exitFullscreen;
          if (_0x41bad6.lockPointer) {
            _0x15ab4b.requestPointerLock();
          }
          _0x41bad6.isFullscreen = true;
          if (_0x41bad6.resizeCanvas) {
            _0x41bad6.setFullscreenCanvasSize();
          } else {
            _0x41bad6.updateCanvasDimensions(_0x15ab4b);
          }
        } else {
          _0x48cc03.parentNode.insertBefore(_0x15ab4b, _0x48cc03);
          _0x48cc03.parentNode.removeChild(_0x48cc03);
          if (_0x41bad6.resizeCanvas) {
            _0x41bad6.setWindowedCanvasSize();
          } else {
            _0x41bad6.updateCanvasDimensions(_0x15ab4b);
          }
        }
        if (_0x3255d0.onFullScreen) {
          _0x3255d0.onFullScreen(_0x41bad6.isFullscreen);
        }
        if (_0x3255d0.onFullscreen) {
          _0x3255d0.onFullscreen(_0x41bad6.isFullscreen);
        }
      }
      if (!_0x41bad6.fullscreenHandlersInstalled) {
        _0x41bad6.fullscreenHandlersInstalled = true;
        document.addEventListener("fullscreenchange", _0x589047, false);
        document.addEventListener("mozfullscreenchange", _0x589047, false);
        document.addEventListener("webkitfullscreenchange", _0x589047, false);
        document.addEventListener("MSFullscreenChange", _0x589047, false);
      }
      var _0x15d0fc = document.createElement("div");
      _0x15ab4b.parentNode.insertBefore(_0x15d0fc, _0x15ab4b);
      _0x15d0fc.appendChild(_0x15ab4b);
      _0x15d0fc.requestFullscreen = _0x15d0fc.requestFullscreen || _0x15d0fc.mozRequestFullScreen || _0x15d0fc.msRequestFullscreen || (_0x15d0fc.webkitRequestFullscreen ? function () {
        _0x15d0fc.webkitRequestFullscreen(Element.ALLOW_KEYBOARD_INPUT);
      } : null) || (_0x15d0fc.webkitRequestFullScreen ? function () {
        _0x15d0fc.webkitRequestFullScreen(Element.ALLOW_KEYBOARD_INPUT);
      } : null);
      _0x15d0fc.requestFullscreen();
    },
    exitFullscreen: function () {
      if (!_0x41bad6.isFullscreen) {
        return false;
      }
      var _0x359b24 = document.exitFullscreen || document.cancelFullScreen || document.mozCancelFullScreen || document.msExitFullscreen || document.webkitCancelFullScreen || function () {};
      _0x359b24.apply(document, []);
      return true;
    },
    nextRAF: 0,
    fakeRequestAnimationFrame: function (_0x2c4572) {
      var _0x9b69f3 = Date.now();
      if (_0x41bad6.nextRAF === 0) {
        _0x41bad6.nextRAF = _0x9b69f3 + 1000 / 60;
      } else {
        while (_0x9b69f3 + 2 >= _0x41bad6.nextRAF) {
          _0x41bad6.nextRAF += 1000 / 60;
        }
      }
      var _0x39d734 = Math.max(_0x41bad6.nextRAF - _0x9b69f3, 0);
      setTimeout(_0x2c4572, _0x39d734);
    },
    requestAnimationFrame: function (_0x357f3e) {
      if (typeof requestAnimationFrame === "function") {
        requestAnimationFrame(_0x357f3e);
        return;
      }
      var _0x9ef68f = _0x41bad6.fakeRequestAnimationFrame;
      _0x9ef68f(_0x357f3e);
    },
    safeRequestAnimationFrame: function (_0x3be7c2) {
      return _0x41bad6.requestAnimationFrame(function () {
        _0x1a51d5(_0x3be7c2);
      });
    },
    safeSetTimeout: function (_0x76ab51, _0x5615c7) {
      return setTimeout(function () {
        _0x1a51d5(_0x76ab51);
      }, _0x5615c7);
    },
    getMimetype: function (_0x1a3f17) {
      return {
        jpg: "image/jpeg",
        jpeg: "image/jpeg",
        png: "image/png",
        bmp: "image/bmp",
        ogg: "audio/ogg",
        wav: "audio/wav",
        mp3: "audio/mpeg"
      }[_0x1a3f17.substr(_0x1a3f17.lastIndexOf(".") + 1)];
    },
    getUserMedia: function (_0x101fcf) {
      if (!window.getUserMedia) {
        window.getUserMedia = navigator.getUserMedia || navigator.mozGetUserMedia;
      }
      window.getUserMedia(_0x101fcf);
    },
    getMovementX: function (_0x3f9aa5) {
      return _0x3f9aa5.movementX || _0x3f9aa5.mozMovementX || _0x3f9aa5.webkitMovementX || 0;
    },
    getMovementY: function (_0x32b2fc) {
      return _0x32b2fc.movementY || _0x32b2fc.mozMovementY || _0x32b2fc.webkitMovementY || 0;
    },
    getMouseWheelDelta: function (_0x54d0a0) {
      var _0x3cb881 = 0;
      switch (_0x54d0a0.type) {
        case "DOMMouseScroll":
          _0x3cb881 = _0x54d0a0.detail / 3;
          break;
        case "mousewheel":
          _0x3cb881 = _0x54d0a0.wheelDelta / 120;
          break;
        case "wheel":
          _0x3cb881 = _0x54d0a0.deltaY;
          switch (_0x54d0a0.deltaMode) {
            case 0:
              _0x3cb881 /= 100;
              break;
            case 1:
              _0x3cb881 /= 3;
              break;
            case 2:
              _0x3cb881 *= 80;
              break;
            default:
              throw "unrecognized mouse wheel delta mode: " + _0x54d0a0.deltaMode;
          }
          break;
        default:
          throw "unrecognized mouse wheel event: " + _0x54d0a0.type;
      }
      return _0x3cb881;
    },
    mouseX: 0,
    mouseY: 0,
    mouseMovementX: 0,
    mouseMovementY: 0,
    touches: {},
    lastTouches: {},
    calculateMouseEvent: function (_0x61a8f) {
      if (_0x41bad6.pointerLock) {
        if (_0x61a8f.type != "mousemove" && "mozMovementX" in _0x61a8f) {
          _0x41bad6.mouseMovementX = _0x41bad6.mouseMovementY = 0;
        } else {
          _0x41bad6.mouseMovementX = _0x41bad6.getMovementX(_0x61a8f);
          _0x41bad6.mouseMovementY = _0x41bad6.getMovementY(_0x61a8f);
        }
        if (typeof SDL != "undefined") {
          _0x41bad6.mouseX = SDL.mouseX + _0x41bad6.mouseMovementX;
          _0x41bad6.mouseY = SDL.mouseY + _0x41bad6.mouseMovementY;
        } else {
          _0x41bad6.mouseX += _0x41bad6.mouseMovementX;
          _0x41bad6.mouseY += _0x41bad6.mouseMovementY;
        }
      } else {
        var _0x2ba58a = _0x3255d0.canvas.getBoundingClientRect();
        var _0x13399b = _0x3255d0.canvas.width;
        var _0x37ae0a = _0x3255d0.canvas.height;
        var _0x5d3263 = typeof window.scrollX !== "undefined" ? window.scrollX : window.pageXOffset;
        var _0x59cb8a = typeof window.scrollY !== "undefined" ? window.scrollY : window.pageYOffset;
        if (_0x61a8f.type === "touchstart" || _0x61a8f.type === "touchend" || _0x61a8f.type === "touchmove") {
          var _0x239e74 = _0x61a8f.touch;
          if (_0x239e74 === undefined) {
            return;
          }
          var _0x2861ed = _0x239e74.pageX - (_0x5d3263 + _0x2ba58a.left);
          var _0x5133b9 = _0x239e74.pageY - (_0x59cb8a + _0x2ba58a.top);
          _0x2861ed = _0x2861ed * (_0x13399b / _0x2ba58a.width);
          _0x5133b9 = _0x5133b9 * (_0x37ae0a / _0x2ba58a.height);
          var _0x27db01 = {
            x: _0x2861ed,
            y: _0x5133b9
          };
          if (_0x61a8f.type === "touchstart") {
            _0x41bad6.lastTouches[_0x239e74.identifier] = _0x27db01;
            _0x41bad6.touches[_0x239e74.identifier] = _0x27db01;
          } else if (_0x61a8f.type === "touchend" || _0x61a8f.type === "touchmove") {
            var _0x5eaba3 = _0x41bad6.touches[_0x239e74.identifier];
            if (!_0x5eaba3) {
              _0x5eaba3 = _0x27db01;
            }
            _0x41bad6.lastTouches[_0x239e74.identifier] = _0x5eaba3;
            _0x41bad6.touches[_0x239e74.identifier] = _0x27db01;
          }
          return;
        }
        var _0x2d7e60 = _0x61a8f.pageX - (_0x5d3263 + _0x2ba58a.left);
        var _0x30b2f9 = _0x61a8f.pageY - (_0x59cb8a + _0x2ba58a.top);
        _0x2d7e60 = _0x2d7e60 * (_0x13399b / _0x2ba58a.width);
        _0x30b2f9 = _0x30b2f9 * (_0x37ae0a / _0x2ba58a.height);
        _0x41bad6.mouseMovementX = _0x2d7e60 - _0x41bad6.mouseX;
        _0x41bad6.mouseMovementY = _0x30b2f9 - _0x41bad6.mouseY;
        _0x41bad6.mouseX = _0x2d7e60;
        _0x41bad6.mouseY = _0x30b2f9;
      }
    },
    asyncLoad: function (_0x488be7, _0x1a5fe7, _0x3722fc, _0x2595fb) {
      var _0x49f188 = !_0x2595fb ? _0x2c5097("al " + _0x488be7) : "";
      _0x5ec338(_0x488be7, function (_0xf71faa) {
        _0x498a3a(_0xf71faa, "Loading data file \"" + _0x488be7 + "\" failed (no arrayBuffer).");
        _0x1a5fe7(new Uint8Array(_0xf71faa));
        if (_0x49f188) {
          _0x705650(_0x49f188);
        }
      }, function (_0x53efe6) {
        if (_0x3722fc) {
          _0x3722fc();
        } else {
          throw "Loading data file \"" + _0x488be7 + "\" failed.";
        }
      });
      if (_0x49f188) {
        _0x51bf84(_0x49f188);
      }
    },
    resizeListeners: [],
    updateResizeListeners: function () {
      var _0x5a25d4 = _0x3255d0.canvas;
      _0x41bad6.resizeListeners.forEach(function (_0x9c0d7c) {
        _0x9c0d7c(_0x5a25d4.width, _0x5a25d4.height);
      });
    },
    setCanvasSize: function (_0x4729e2, _0x1fe3ec, _0xd2a200) {
      var _0x400e1e = _0x3255d0.canvas;
      _0x41bad6.updateCanvasDimensions(_0x400e1e, _0x4729e2, _0x1fe3ec);
      if (!_0xd2a200) {
        _0x41bad6.updateResizeListeners();
      }
    },
    windowedWidth: 0,
    windowedHeight: 0,
    setFullscreenCanvasSize: function () {
      if (typeof SDL != "undefined") {
        var _0x5e4eda = _0x3e0b02[SDL.screen >> 2];
        _0x5e4eda = _0x5e4eda | 8388608;
        _0x3ea6c9[SDL.screen >> 2] = _0x5e4eda;
      }
      _0x41bad6.updateCanvasDimensions(_0x3255d0.canvas);
      _0x41bad6.updateResizeListeners();
    },
    setWindowedCanvasSize: function () {
      if (typeof SDL != "undefined") {
        var _0x382798 = _0x3e0b02[SDL.screen >> 2];
        _0x382798 = _0x382798 & ~8388608;
        _0x3ea6c9[SDL.screen >> 2] = _0x382798;
      }
      _0x41bad6.updateCanvasDimensions(_0x3255d0.canvas);
      _0x41bad6.updateResizeListeners();
    },
    updateCanvasDimensions: function (_0x58c492, _0x2463f9, _0x2ce9e0) {
      if (_0x2463f9 && _0x2ce9e0) {
        _0x58c492.widthNative = _0x2463f9;
        _0x58c492.heightNative = _0x2ce9e0;
      } else {
        _0x2463f9 = _0x58c492.widthNative;
        _0x2ce9e0 = _0x58c492.heightNative;
      }
      var _0x16a75a = _0x2463f9;
      var _0x1bea56 = _0x2ce9e0;
      if (_0x3255d0.forcedAspectRatio && _0x3255d0.forcedAspectRatio > 0) {
        if (_0x16a75a / _0x1bea56 < _0x3255d0.forcedAspectRatio) {
          _0x16a75a = Math.round(_0x1bea56 * _0x3255d0.forcedAspectRatio);
        } else {
          _0x1bea56 = Math.round(_0x16a75a / _0x3255d0.forcedAspectRatio);
        }
      }
      if ((document.fullscreenElement || document.mozFullScreenElement || document.msFullscreenElement || document.webkitFullscreenElement || document.webkitCurrentFullScreenElement) === _0x58c492.parentNode && typeof screen != "undefined") {
        var _0x10a47c = Math.min(screen.width / _0x16a75a, screen.height / _0x1bea56);
        _0x16a75a = Math.round(_0x16a75a * _0x10a47c);
        _0x1bea56 = Math.round(_0x1bea56 * _0x10a47c);
      }
      if (_0x41bad6.resizeCanvas) {
        if (_0x58c492.width != _0x16a75a) {
          _0x58c492.width = _0x16a75a;
        }
        if (_0x58c492.height != _0x1bea56) {
          _0x58c492.height = _0x1bea56;
        }
        if (typeof _0x58c492.style != "undefined") {
          _0x58c492.style.removeProperty("width");
          _0x58c492.style.removeProperty("height");
        }
      } else {
        if (_0x58c492.width != _0x2463f9) {
          _0x58c492.width = _0x2463f9;
        }
        if (_0x58c492.height != _0x2ce9e0) {
          _0x58c492.height = _0x2ce9e0;
        }
        if (typeof _0x58c492.style != "undefined") {
          if (_0x16a75a != _0x2463f9 || _0x1bea56 != _0x2ce9e0) {
            _0x58c492.style.setProperty("width", _0x16a75a + "px", "important");
            _0x58c492.style.setProperty("height", _0x1bea56 + "px", "important");
          } else {
            _0x58c492.style.removeProperty("width");
            _0x58c492.style.removeProperty("height");
          }
        }
      }
    },
    wgetRequests: {},
    nextWgetRequestHandle: 0,
    getNextWgetRequestHandle: function () {
      var _0x7cf82 = _0x41bad6.nextWgetRequestHandle;
      _0x41bad6.nextWgetRequestHandle++;
      return _0x7cf82;
    }
  };
  function _0x187f12() {
    _0x41bad6.mainLoop.pause();
    _0x41bad6.mainLoop.func = null;
  }
  function _0x15eb5b(_0x2834d0) {
    clearInterval(_0x2834d0);
  }
  var _0x385cc2 = {
    inEventHandler: 0,
    removeAllEventListeners: function () {
      for (var _0xe5ea21 = _0x385cc2.eventHandlers.length - 1; _0xe5ea21 >= 0; --_0xe5ea21) {
        _0x385cc2._removeHandler(_0xe5ea21);
      }
      _0x385cc2.eventHandlers = [];
      _0x385cc2.deferredCalls = [];
    },
    registerRemoveEventListeners: function () {
      if (!_0x385cc2.removeEventListenersRegistered) {
        _0x42b207.push(_0x385cc2.removeAllEventListeners);
        _0x385cc2.removeEventListenersRegistered = true;
      }
    },
    deferredCalls: [],
    deferCall: function (_0x21c9da, _0x4c0515, _0x53d6a9) {
      function _0x5bc786(_0x11e539, _0x1b34ca) {
        if (_0x11e539.length != _0x1b34ca.length) {
          return false;
        }
        for (var _0xd18c99 in _0x11e539) {
          if (_0x11e539[_0xd18c99] != _0x1b34ca[_0xd18c99]) {
            return false;
          }
        }
        return true;
      }
      for (var _0x1cdbda in _0x385cc2.deferredCalls) {
        var _0x153a94 = _0x385cc2.deferredCalls[_0x1cdbda];
        if (_0x153a94.targetFunction == _0x21c9da && _0x5bc786(_0x153a94.argsList, _0x53d6a9)) {
          return;
        }
      }
      _0x385cc2.deferredCalls.push({
        targetFunction: _0x21c9da,
        precedence: _0x4c0515,
        argsList: _0x53d6a9
      });
      _0x385cc2.deferredCalls.sort(function (_0x388623, _0x4b52b0) {
        return _0x388623.precedence < _0x4b52b0.precedence;
      });
    },
    removeDeferredCalls: function (_0x277119) {
      for (var _0x1e4eaa = 0; _0x1e4eaa < _0x385cc2.deferredCalls.length; ++_0x1e4eaa) {
        if (_0x385cc2.deferredCalls[_0x1e4eaa].targetFunction == _0x277119) {
          _0x385cc2.deferredCalls.splice(_0x1e4eaa, 1);
          --_0x1e4eaa;
        }
      }
    },
    canPerformEventHandlerRequests: function () {
      return _0x385cc2.inEventHandler && _0x385cc2.currentEventHandler.allowsDeferredCalls;
    },
    runDeferredCalls: function () {
      if (!_0x385cc2.canPerformEventHandlerRequests()) {
        return;
      }
      for (var _0x3d9225 = 0; _0x3d9225 < _0x385cc2.deferredCalls.length; ++_0x3d9225) {
        var _0x2e84c2 = _0x385cc2.deferredCalls[_0x3d9225];
        _0x385cc2.deferredCalls.splice(_0x3d9225, 1);
        --_0x3d9225;
        _0x2e84c2.targetFunction.apply(null, _0x2e84c2.argsList);
      }
    },
    eventHandlers: [],
    removeAllHandlersOnTarget: function (_0x36ad40, _0x19167c) {
      for (var _0x143b14 = 0; _0x143b14 < _0x385cc2.eventHandlers.length; ++_0x143b14) {
        if (_0x385cc2.eventHandlers[_0x143b14].target == _0x36ad40 && (!_0x19167c || _0x19167c == _0x385cc2.eventHandlers[_0x143b14].eventTypeString)) {
          _0x385cc2._removeHandler(_0x143b14--);
        }
      }
    },
    _removeHandler: function (_0x3612f4) {
      var _0x2fe115 = _0x385cc2.eventHandlers[_0x3612f4];
      _0x2fe115.target.removeEventListener(_0x2fe115.eventTypeString, _0x2fe115.eventListenerFunc, _0x2fe115.useCapture);
      _0x385cc2.eventHandlers.splice(_0x3612f4, 1);
    },
    registerOrRemoveHandler: function (_0x112ec0) {
      var _0x36a7fd = function _0x42b263(_0x412f30) {
        ++_0x385cc2.inEventHandler;
        _0x385cc2.currentEventHandler = _0x112ec0;
        _0x385cc2.runDeferredCalls();
        _0x112ec0.handlerFunc(_0x412f30);
        _0x385cc2.runDeferredCalls();
        --_0x385cc2.inEventHandler;
      };
      if (_0x112ec0.callbackfunc) {
        _0x112ec0.eventListenerFunc = _0x36a7fd;
        _0x112ec0.target.addEventListener(_0x112ec0.eventTypeString, _0x36a7fd, _0x112ec0.useCapture);
        _0x385cc2.eventHandlers.push(_0x112ec0);
        _0x385cc2.registerRemoveEventListeners();
      } else {
        for (var _0x5a04e1 = 0; _0x5a04e1 < _0x385cc2.eventHandlers.length; ++_0x5a04e1) {
          if (_0x385cc2.eventHandlers[_0x5a04e1].target == _0x112ec0.target && _0x385cc2.eventHandlers[_0x5a04e1].eventTypeString == _0x112ec0.eventTypeString) {
            _0x385cc2._removeHandler(_0x5a04e1--);
          }
        }
      }
    },
    getNodeNameForTarget: function (_0xb3840f) {
      if (!_0xb3840f) {
        return "";
      }
      if (_0xb3840f == window) {
        return "#window";
      }
      if (_0xb3840f == screen) {
        return "#screen";
      }
      if (_0xb3840f && _0xb3840f.nodeName) {
        return _0xb3840f.nodeName;
      } else {
        return "";
      }
    },
    fullscreenEnabled: function () {
      return document.fullscreenEnabled || document.webkitFullscreenEnabled;
    }
  };
  var _0x21a254 = {};
  function _0x270c46(_0x3f4326) {
    if (_0x3f4326 > 2) {
      return _0x5afdf8(_0x3f4326);
    } else {
      return _0x3f4326;
    }
  }
  var _0x1158b0 = [0, typeof document !== "undefined" ? document : 0, typeof window !== "undefined" ? window : 0];
  function _0x18cc46(_0x8b287a) {
    _0x8b287a = _0x270c46(_0x8b287a);
    var _0x485390 = _0x1158b0[_0x8b287a] || (typeof document !== "undefined" ? document.querySelector(_0x8b287a) : undefined);
    return _0x485390;
  }
  function _0x456407(_0x2c5810) {
    return _0x18cc46(_0x2c5810);
  }
  function _0x30032c(_0x222355, _0x4cfd77, _0x5828b5) {
    var _0x56884c = _0x456407(_0x222355);
    if (!_0x56884c) {
      return -4;
    }
    _0x3ea6c9[_0x4cfd77 >> 2] = _0x56884c.width;
    _0x3ea6c9[_0x5828b5 >> 2] = _0x56884c.height;
  }
  function _0x4b87cc(_0x2dd336) {
    var _0x548a62 = _0x1d6208();
    var _0x4b7b83 = _0xf2adf5(8);
    var _0x20a7ee = _0x4b7b83 + 4;
    var _0x2bcca8 = _0xf2adf5(_0x2dd336.id.length + 1);
    _0x259c3d(_0x2dd336.id, _0x2bcca8, _0x2dd336.id.length + 1);
    var _0x29716f = _0x30032c(_0x2bcca8, _0x4b7b83, _0x20a7ee);
    var _0x5136b3 = [_0x3ea6c9[_0x4b7b83 >> 2], _0x3ea6c9[_0x20a7ee >> 2]];
    _0xe462e3(_0x548a62);
    return _0x5136b3;
  }
  function _0x411fb3(_0x576575, _0x3f066a, _0x4a4818) {
    var _0x1729a2 = _0x456407(_0x576575);
    if (!_0x1729a2) {
      return -4;
    }
    _0x1729a2.width = _0x3f066a;
    _0x1729a2.height = _0x4a4818;
    return 0;
  }
  function _0x701ef9(_0x30b9e1, _0x83d536, _0x2c8538) {
    if (!_0x30b9e1.controlTransferredOffscreen) {
      _0x30b9e1.width = _0x83d536;
      _0x30b9e1.height = _0x2c8538;
    } else {
      var _0x20fe07 = _0x1d6208();
      var _0x4ea607 = _0xf2adf5(_0x30b9e1.id.length + 1);
      _0x259c3d(_0x30b9e1.id, _0x4ea607, _0x30b9e1.id.length + 1);
      _0x411fb3(_0x4ea607, _0x83d536, _0x2c8538);
      _0xe462e3(_0x20fe07);
    }
  }
  function _0x36eab1(_0xf92f83) {
    var _0x4b6882 = _0x4b87cc(_0xf92f83);
    var _0x4c2609 = _0x4b6882[0];
    var _0x2ff451 = _0x4b6882[1];
    var _0x5a1ae6 = _0xf92f83.style.width;
    var _0x2ca380 = _0xf92f83.style.height;
    var _0x17cc86 = _0xf92f83.style.backgroundColor;
    var _0x550879 = document.body.style.backgroundColor;
    var _0x1a9561 = _0xf92f83.style.paddingLeft;
    var _0x4a5d71 = _0xf92f83.style.paddingRight;
    var _0x109e22 = _0xf92f83.style.paddingTop;
    var _0x5f4512 = _0xf92f83.style.paddingBottom;
    var _0x13f423 = _0xf92f83.style.marginLeft;
    var _0x3a1e63 = _0xf92f83.style.marginRight;
    var _0x22f1ac = _0xf92f83.style.marginTop;
    var _0x4050a1 = _0xf92f83.style.marginBottom;
    var _0x495f02 = document.body.style.margin;
    var _0x2646fd = document.documentElement.style.overflow;
    var _0x3530e4 = document.body.scroll;
    var _0x1f899b = _0xf92f83.style.imageRendering;
    function _0x34c725() {
      var _0x355bb7 = document.fullscreenElement || document.webkitFullscreenElement || document.msFullscreenElement;
      if (!_0x355bb7) {
        document.removeEventListener("fullscreenchange", _0x34c725);
        document.removeEventListener("webkitfullscreenchange", _0x34c725);
        _0x701ef9(_0xf92f83, _0x4c2609, _0x2ff451);
        _0xf92f83.style.width = _0x5a1ae6;
        _0xf92f83.style.height = _0x2ca380;
        _0xf92f83.style.backgroundColor = _0x17cc86;
        if (!_0x550879) {
          document.body.style.backgroundColor = "white";
        }
        document.body.style.backgroundColor = _0x550879;
        _0xf92f83.style.paddingLeft = _0x1a9561;
        _0xf92f83.style.paddingRight = _0x4a5d71;
        _0xf92f83.style.paddingTop = _0x109e22;
        _0xf92f83.style.paddingBottom = _0x5f4512;
        _0xf92f83.style.marginLeft = _0x13f423;
        _0xf92f83.style.marginRight = _0x3a1e63;
        _0xf92f83.style.marginTop = _0x22f1ac;
        _0xf92f83.style.marginBottom = _0x4050a1;
        document.body.style.margin = _0x495f02;
        document.documentElement.style.overflow = _0x2646fd;
        document.body.scroll = _0x3530e4;
        _0xf92f83.style.imageRendering = _0x1f899b;
        if (_0xf92f83.GLctxObject) {
          _0xf92f83.GLctxObject.GLctx.viewport(0, 0, _0x4c2609, _0x2ff451);
        }
        if (_0x21a254.canvasResizedCallback) {
          (function (_0x180fc8, _0x10908c, _0x24595c) {
            return _0x537d47.apply(null, [_0x21a254.canvasResizedCallback, _0x180fc8, _0x10908c, _0x24595c]);
          })(37, 0, _0x21a254.canvasResizedCallbackUserData);
        }
      }
    }
    document.addEventListener("fullscreenchange", _0x34c725);
    document.addEventListener("webkitfullscreenchange", _0x34c725);
    return _0x34c725;
  }
  function _0x33c5e5(_0x1d7693, _0x170b03, _0x1c9891) {
    _0x1d7693.style.paddingLeft = _0x1d7693.style.paddingRight = _0x1c9891 + "px";
    _0x1d7693.style.paddingTop = _0x1d7693.style.paddingBottom = _0x170b03 + "px";
  }
  function _0x33be35(_0x5c889d) {
    if (_0x1158b0.indexOf(_0x5c889d) < 0) {
      return _0x5c889d.getBoundingClientRect();
    } else {
      return {
        left: 0,
        top: 0
      };
    }
  }
  function _0x5adb2(_0x4323cf, _0x49efe7) {
    var _0x190234 = _0x36eab1(_0x4323cf);
    var _0x28c5ea = _0x49efe7.softFullscreen ? innerWidth : screen.width;
    var _0x3518ac = _0x49efe7.softFullscreen ? innerHeight : screen.height;
    var _0x515be5 = _0x33be35(_0x4323cf);
    var _0x41c02e = _0x515be5.width;
    var _0x499546 = _0x515be5.height;
    var _0x28f62e = _0x4b87cc(_0x4323cf);
    var _0x49d142 = _0x28f62e[0];
    var _0x2db1bd = _0x28f62e[1];
    if (_0x49efe7.scaleMode == 3) {
      _0x33c5e5(_0x4323cf, (_0x3518ac - _0x499546) / 2, (_0x28c5ea - _0x41c02e) / 2);
      _0x28c5ea = _0x41c02e;
      _0x3518ac = _0x499546;
    } else if (_0x49efe7.scaleMode == 2) {
      if (_0x28c5ea * _0x2db1bd < _0x49d142 * _0x3518ac) {
        var _0x132bf5 = _0x2db1bd * _0x28c5ea / _0x49d142;
        _0x33c5e5(_0x4323cf, (_0x3518ac - _0x132bf5) / 2, 0);
        _0x3518ac = _0x132bf5;
      } else {
        var _0x3a4e71 = _0x49d142 * _0x3518ac / _0x2db1bd;
        _0x33c5e5(_0x4323cf, 0, (_0x28c5ea - _0x3a4e71) / 2);
        _0x28c5ea = _0x3a4e71;
      }
    }
    if (!_0x4323cf.style.backgroundColor) {
      _0x4323cf.style.backgroundColor = "black";
    }
    if (!document.body.style.backgroundColor) {
      document.body.style.backgroundColor = "black";
    }
    _0x4323cf.style.width = _0x28c5ea + "px";
    _0x4323cf.style.height = _0x3518ac + "px";
    if (_0x49efe7.filteringMode == 1) {
      _0x4323cf.style.imageRendering = "optimizeSpeed";
      _0x4323cf.style.imageRendering = "-moz-crisp-edges";
      _0x4323cf.style.imageRendering = "-o-crisp-edges";
      _0x4323cf.style.imageRendering = "-webkit-optimize-contrast";
      _0x4323cf.style.imageRendering = "optimize-contrast";
      _0x4323cf.style.imageRendering = "crisp-edges";
      _0x4323cf.style.imageRendering = "pixelated";
    }
    var _0x346b19 = _0x49efe7.canvasResolutionScaleMode == 2 ? devicePixelRatio : 1;
    if (_0x49efe7.canvasResolutionScaleMode != 0) {
      var _0x332292 = _0x28c5ea * _0x346b19 | 0;
      var _0x8fabe8 = _0x3518ac * _0x346b19 | 0;
      _0x701ef9(_0x4323cf, _0x332292, _0x8fabe8);
      if (_0x4323cf.GLctxObject) {
        _0x4323cf.GLctxObject.GLctx.viewport(0, 0, _0x332292, _0x8fabe8);
      }
    }
    return _0x190234;
  }
  function _0x198649(_0x14508c, _0x17161a) {
    if (_0x17161a.scaleMode != 0 || _0x17161a.canvasResolutionScaleMode != 0) {
      _0x5adb2(_0x14508c, _0x17161a);
    }
    if (_0x14508c.requestFullscreen) {
      _0x14508c.requestFullscreen();
    } else if (_0x14508c.webkitRequestFullscreen) {
      _0x14508c.webkitRequestFullscreen(Element.ALLOW_KEYBOARD_INPUT);
    } else if (_0x385cc2.fullscreenEnabled()) {
      return -3;
    } else {
      return -1;
    }
    _0x21a254 = _0x17161a;
    if (_0x17161a.canvasResizedCallback) {
      (function (_0x5d3435, _0x519937, _0x5fec48) {
        return _0x537d47.apply(null, [_0x17161a.canvasResizedCallback, _0x5d3435, _0x519937, _0x5fec48]);
      })(37, 0, _0x17161a.canvasResizedCallbackUserData);
    }
    return 0;
  }
  function _0xdc4c2() {
    if (!_0x385cc2.fullscreenEnabled()) {
      return -1;
    }
    _0x385cc2.removeDeferredCalls(_0x198649);
    var _0xac2f4c = _0x1158b0[1];
    if (_0xac2f4c.exitFullscreen) {
      if (_0xac2f4c.fullscreenElement) {
        _0xac2f4c.exitFullscreen();
      }
    } else if (_0xac2f4c.webkitExitFullscreen) {
      if (_0xac2f4c.webkitFullscreenElement) {
        _0xac2f4c.webkitExitFullscreen();
      }
    } else {
      return -1;
    }
    return 0;
  }
  function _0xb20bbb(_0x2f068f) {
    if (_0x2f068f.requestPointerLock) {
      _0x2f068f.requestPointerLock();
    } else if (_0x2f068f.msRequestPointerLock) {
      _0x2f068f.msRequestPointerLock();
    } else if (document.body.requestPointerLock || document.body.msRequestPointerLock) {
      return -3;
    } else {
      return -1;
    }
    return 0;
  }
  function _0x934588() {
    _0x385cc2.removeDeferredCalls(_0xb20bbb);
    if (document.exitPointerLock) {
      document.exitPointerLock();
    } else if (document.msExitPointerLock) {
      document.msExitPointerLock();
    } else {
      return -1;
    }
    return 0;
  }
  function _0x43bee2(_0x1a0a97) {
    var _0x33cb28 = document.fullscreenElement || document.mozFullScreenElement || document.webkitFullscreenElement || document.msFullscreenElement;
    var _0x4b0596 = !!_0x33cb28;
    _0x3ea6c9[_0x1a0a97 >> 2] = _0x4b0596;
    _0x3ea6c9[_0x1a0a97 + 4 >> 2] = _0x385cc2.fullscreenEnabled();
    var _0x3b15b2 = _0x4b0596 ? _0x33cb28 : _0x385cc2.previousFullscreenElement;
    var _0x216fd5 = _0x385cc2.getNodeNameForTarget(_0x3b15b2);
    var _0x40515d = _0x3b15b2 && _0x3b15b2.id ? _0x3b15b2.id : "";
    _0x259c3d(_0x216fd5, _0x1a0a97 + 8, 128);
    _0x259c3d(_0x40515d, _0x1a0a97 + 136, 128);
    _0x3ea6c9[_0x1a0a97 + 264 >> 2] = _0x3b15b2 ? _0x3b15b2.clientWidth : 0;
    _0x3ea6c9[_0x1a0a97 + 268 >> 2] = _0x3b15b2 ? _0x3b15b2.clientHeight : 0;
    _0x3ea6c9[_0x1a0a97 + 272 >> 2] = screen.width;
    _0x3ea6c9[_0x1a0a97 + 276 >> 2] = screen.height;
    if (_0x4b0596) {
      _0x385cc2.previousFullscreenElement = _0x33cb28;
    }
  }
  function _0x563520(_0x50b4e4) {
    if (!_0x385cc2.fullscreenEnabled()) {
      return -1;
    }
    _0x43bee2(_0x50b4e4);
    return 0;
  }
  function _0x3b558f(_0x5d4220, _0x2296f0) {
    _0x21f13f[_0x5d4220 >> 3] = _0x2296f0.timestamp;
    for (var _0x1ac343 = 0; _0x1ac343 < _0x2296f0.axes.length; ++_0x1ac343) {
      _0x21f13f[_0x5d4220 + _0x1ac343 * 8 + 16 >> 3] = _0x2296f0.axes[_0x1ac343];
    }
    for (var _0x1ac343 = 0; _0x1ac343 < _0x2296f0.buttons.length; ++_0x1ac343) {
      if (typeof _0x2296f0.buttons[_0x1ac343] === "object") {
        _0x21f13f[_0x5d4220 + _0x1ac343 * 8 + 528 >> 3] = _0x2296f0.buttons[_0x1ac343].value;
      } else {
        _0x21f13f[_0x5d4220 + _0x1ac343 * 8 + 528 >> 3] = _0x2296f0.buttons[_0x1ac343];
      }
    }
    for (var _0x1ac343 = 0; _0x1ac343 < _0x2296f0.buttons.length; ++_0x1ac343) {
      if (typeof _0x2296f0.buttons[_0x1ac343] === "object") {
        _0x3ea6c9[_0x5d4220 + _0x1ac343 * 4 + 1040 >> 2] = _0x2296f0.buttons[_0x1ac343].pressed;
      } else {
        _0x3ea6c9[_0x5d4220 + _0x1ac343 * 4 + 1040 >> 2] = _0x2296f0.buttons[_0x1ac343] == 1;
      }
    }
    _0x3ea6c9[_0x5d4220 + 1296 >> 2] = _0x2296f0.connected;
    _0x3ea6c9[_0x5d4220 + 1300 >> 2] = _0x2296f0.index;
    _0x3ea6c9[_0x5d4220 + 8 >> 2] = _0x2296f0.axes.length;
    _0x3ea6c9[_0x5d4220 + 12 >> 2] = _0x2296f0.buttons.length;
    _0x259c3d(_0x2296f0.id, _0x5d4220 + 1304, 64);
    _0x259c3d(_0x2296f0.mapping, _0x5d4220 + 1368, 64);
  }
  function _0x5e4cfc(_0x3813b3, _0x12f321) {
    if (_0x3813b3 < 0 || _0x3813b3 >= _0x385cc2.lastGamepadState.length) {
      return -5;
    }
    if (!_0x385cc2.lastGamepadState[_0x3813b3]) {
      return -7;
    }
    _0x3b558f(_0x12f321, _0x385cc2.lastGamepadState[_0x3813b3]);
    return 0;
  }
  function _0x58ebba() {
    return 2147483648;
  }
  function _0x3c2766() {
    return _0x385cc2.lastGamepadState.length;
  }
  function _0x58f180() {
    _0x385cc2.removeAllEventListeners();
  }
  function _0x8bfae1(_0x32e85f) {
    return !_0x47f2e3.contexts[_0x32e85f] || _0x47f2e3.contexts[_0x32e85f].GLctx.isContextLost();
  }
  function _0x405038(_0x2804f3) {
    return _0x2804f3 < 0 || _0x2804f3 === 0 && 1 / _0x2804f3 === -Infinity;
  }
  function _0x39e10d(_0x2bf0be, _0x69945e) {
    return (_0x2bf0be >>> 0) + _0x69945e * 4294967296;
  }
  function _0x3d7b8e(_0x11e25b, _0x2e2698) {
    return (_0x11e25b >>> 0) + (_0x2e2698 >>> 0) * 4294967296;
  }
  function _0x35c0d9(_0x4ab148, _0x575632) {
    if (_0x4ab148 <= 0) {
      return _0x4ab148;
    }
    var _0x29c58c = _0x575632 <= 32 ? Math.abs(1 << _0x575632 - 1) : Math.pow(2, _0x575632 - 1);
    if (_0x4ab148 >= _0x29c58c && (_0x575632 <= 32 || _0x4ab148 > _0x29c58c)) {
      _0x4ab148 = _0x29c58c * -2 + _0x4ab148;
    }
    return _0x4ab148;
  }
  function _0x267f4c(_0x46cca4, _0x47c477) {
    if (_0x46cca4 >= 0) {
      return _0x46cca4;
    }
    if (_0x47c477 <= 32) {
      return Math.abs(1 << _0x47c477 - 1) * 2 + _0x46cca4;
    } else {
      return Math.pow(2, _0x47c477) + _0x46cca4;
    }
  }
  function _0x46371e(_0x3cb24a, _0x55f641) {
    var _0x1c4946 = _0x3cb24a;
    var _0x3e0cfc = _0x55f641;
    function _0x2e74a2(_0x13ecf2, _0x115245) {
      if (_0x115245 === "double" || _0x115245 === "i64") {
        if (_0x13ecf2 & 7) {
          _0x13ecf2 += 4;
        }
      } else {}
      return _0x13ecf2;
    }
    function _0x56e1b7(_0x5bff79) {
      var _0x47c020;
      _0x3e0cfc = _0x2e74a2(_0x3e0cfc, _0x5bff79);
      if (_0x5bff79 === "double") {
        _0x47c020 = _0x21f13f[_0x3e0cfc >> 3];
        _0x3e0cfc += 8;
      } else if (_0x5bff79 == "i64") {
        _0x47c020 = [_0x3ea6c9[_0x3e0cfc >> 2], _0x3ea6c9[_0x3e0cfc + 4 >> 2]];
        _0x3e0cfc += 8;
      } else {
        _0x5bff79 = "i32";
        _0x47c020 = _0x3ea6c9[_0x3e0cfc >> 2];
        _0x3e0cfc += 4;
      }
      return _0x47c020;
    }
    var _0x53939c = [];
    var _0x4b2bb3;
    var _0x574292;
    var _0x2ceddc;
    while (1) {
      var _0x3818a6 = _0x1c4946;
      _0x4b2bb3 = _0x410af5[_0x1c4946 >> 0];
      if (_0x4b2bb3 === 0) {
        break;
      }
      _0x574292 = _0x410af5[_0x1c4946 + 1 >> 0];
      if (_0x4b2bb3 == 37) {
        var _0x6bce1d = false;
        var _0x556497 = false;
        var _0x125487 = false;
        var _0x354714 = false;
        var _0x1f4f7f = false;
        _0x4bd1fb: while (1) {
          switch (_0x574292) {
            case 43:
              _0x6bce1d = true;
              break;
            case 45:
              _0x556497 = true;
              break;
            case 35:
              _0x125487 = true;
              break;
            case 48:
              if (_0x354714) {
                break _0x4bd1fb;
              } else {
                _0x354714 = true;
                break;
              }
            case 32:
              _0x1f4f7f = true;
              break;
            default:
              break _0x4bd1fb;
          }
          _0x1c4946++;
          _0x574292 = _0x410af5[_0x1c4946 + 1 >> 0];
        }
        var _0x5b6387 = 0;
        if (_0x574292 == 42) {
          _0x5b6387 = _0x56e1b7("i32");
          _0x1c4946++;
          _0x574292 = _0x410af5[_0x1c4946 + 1 >> 0];
        } else {
          while (_0x574292 >= 48 && _0x574292 <= 57) {
            _0x5b6387 = _0x5b6387 * 10 + (_0x574292 - 48);
            _0x1c4946++;
            _0x574292 = _0x410af5[_0x1c4946 + 1 >> 0];
          }
        }
        var _0x4b5080 = false;
        var _0x432917 = -1;
        if (_0x574292 == 46) {
          _0x432917 = 0;
          _0x4b5080 = true;
          _0x1c4946++;
          _0x574292 = _0x410af5[_0x1c4946 + 1 >> 0];
          if (_0x574292 == 42) {
            _0x432917 = _0x56e1b7("i32");
            _0x1c4946++;
          } else {
            while (1) {
              var _0x34b0af = _0x410af5[_0x1c4946 + 1 >> 0];
              if (_0x34b0af < 48 || _0x34b0af > 57) {
                break;
              }
              _0x432917 = _0x432917 * 10 + (_0x34b0af - 48);
              _0x1c4946++;
            }
          }
          _0x574292 = _0x410af5[_0x1c4946 + 1 >> 0];
        }
        if (_0x432917 < 0) {
          _0x432917 = 6;
          _0x4b5080 = false;
        }
        var _0x4aae3c;
        switch (String.fromCharCode(_0x574292)) {
          case "h":
            var _0x4a49e5 = _0x410af5[_0x1c4946 + 2 >> 0];
            if (_0x4a49e5 == 104) {
              _0x1c4946++;
              _0x4aae3c = 1;
            } else {
              _0x4aae3c = 2;
            }
            break;
          case "l":
            var _0x4a49e5 = _0x410af5[_0x1c4946 + 2 >> 0];
            if (_0x4a49e5 == 108) {
              _0x1c4946++;
              _0x4aae3c = 8;
            } else {
              _0x4aae3c = 4;
            }
            break;
          case "L":
          case "q":
          case "j":
            _0x4aae3c = 8;
            break;
          case "z":
          case "t":
          case "I":
            _0x4aae3c = 4;
            break;
          default:
            _0x4aae3c = null;
        }
        if (_0x4aae3c) {
          _0x1c4946++;
        }
        _0x574292 = _0x410af5[_0x1c4946 + 1 >> 0];
        switch (String.fromCharCode(_0x574292)) {
          case "d":
          case "i":
          case "u":
          case "o":
          case "x":
          case "X":
          case "p":
            {
              var _0x4fcd8f = _0x574292 == 100 || _0x574292 == 105;
              _0x4aae3c = _0x4aae3c || 4;
              _0x2ceddc = _0x56e1b7("i" + _0x4aae3c * 8);
              var _0x16fd1b;
              if (_0x4aae3c == 8) {
                _0x2ceddc = _0x574292 == 117 ? _0x3d7b8e(_0x2ceddc[0], _0x2ceddc[1]) : _0x39e10d(_0x2ceddc[0], _0x2ceddc[1]);
              }
              if (_0x4aae3c <= 4) {
                var _0x2642e7 = Math.pow(256, _0x4aae3c) - 1;
                _0x2ceddc = (_0x4fcd8f ? _0x35c0d9 : _0x267f4c)(_0x2ceddc & _0x2642e7, _0x4aae3c * 8);
              }
              var _0x411533 = Math.abs(_0x2ceddc);
              var _0x1bc9a8 = "";
              if (_0x574292 == 100 || _0x574292 == 105) {
                _0x16fd1b = _0x35c0d9(_0x2ceddc, _0x4aae3c * 8, 1).toString(10);
              } else if (_0x574292 == 117) {
                _0x16fd1b = _0x267f4c(_0x2ceddc, _0x4aae3c * 8, 1).toString(10);
                _0x2ceddc = Math.abs(_0x2ceddc);
              } else if (_0x574292 == 111) {
                _0x16fd1b = (_0x125487 ? "0" : "") + _0x411533.toString(8);
              } else if (_0x574292 == 120 || _0x574292 == 88) {
                _0x1bc9a8 = _0x125487 && _0x2ceddc != 0 ? "0x" : "";
                if (_0x2ceddc < 0) {
                  _0x2ceddc = -_0x2ceddc;
                  _0x16fd1b = (_0x411533 - 1).toString(16);
                  var _0x5207b5 = [];
                  for (var _0xff4bae = 0; _0xff4bae < _0x16fd1b.length; _0xff4bae++) {
                    _0x5207b5.push((15 - parseInt(_0x16fd1b[_0xff4bae], 16)).toString(16));
                  }
                  _0x16fd1b = _0x5207b5.join("");
                  while (_0x16fd1b.length < _0x4aae3c * 2) {
                    _0x16fd1b = "f" + _0x16fd1b;
                  }
                } else {
                  _0x16fd1b = _0x411533.toString(16);
                }
                if (_0x574292 == 88) {
                  _0x1bc9a8 = _0x1bc9a8.toUpperCase();
                  _0x16fd1b = _0x16fd1b.toUpperCase();
                }
              } else if (_0x574292 == 112) {
                if (_0x411533 === 0) {
                  _0x16fd1b = "(nil)";
                } else {
                  _0x1bc9a8 = "0x";
                  _0x16fd1b = _0x411533.toString(16);
                }
              }
              if (_0x4b5080) {
                while (_0x16fd1b.length < _0x432917) {
                  _0x16fd1b = "0" + _0x16fd1b;
                }
              }
              if (_0x2ceddc >= 0) {
                if (_0x6bce1d) {
                  _0x1bc9a8 = "+" + _0x1bc9a8;
                } else if (_0x1f4f7f) {
                  _0x1bc9a8 = " " + _0x1bc9a8;
                }
              }
              if (_0x16fd1b.charAt(0) == "-") {
                _0x1bc9a8 = "-" + _0x1bc9a8;
                _0x16fd1b = _0x16fd1b.substr(1);
              }
              while (_0x1bc9a8.length + _0x16fd1b.length < _0x5b6387) {
                if (_0x556497) {
                  _0x16fd1b += " ";
                } else if (_0x354714) {
                  _0x16fd1b = "0" + _0x16fd1b;
                } else {
                  _0x1bc9a8 = " " + _0x1bc9a8;
                }
              }
              _0x16fd1b = _0x1bc9a8 + _0x16fd1b;
              _0x16fd1b.split("").forEach(function (_0x23070d) {
                _0x53939c.push(_0x23070d.charCodeAt(0));
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
              _0x2ceddc = _0x56e1b7("double");
              var _0x16fd1b;
              if (isNaN(_0x2ceddc)) {
                _0x16fd1b = "nan";
                _0x354714 = false;
              } else if (!isFinite(_0x2ceddc)) {
                _0x16fd1b = (_0x2ceddc < 0 ? "-" : "") + "inf";
                _0x354714 = false;
              } else {
                var _0x47cd4f = false;
                var _0x5022ad = Math.min(_0x432917, 20);
                if (_0x574292 == 103 || _0x574292 == 71) {
                  _0x47cd4f = true;
                  _0x432917 = _0x432917 || 1;
                  var _0x374261 = parseInt(_0x2ceddc.toExponential(_0x5022ad).split("e")[1], 10);
                  if (_0x432917 > _0x374261 && _0x374261 >= -4) {
                    _0x574292 = (_0x574292 == 103 ? "f" : "F").charCodeAt(0);
                    _0x432917 -= _0x374261 + 1;
                  } else {
                    _0x574292 = (_0x574292 == 103 ? "e" : "E").charCodeAt(0);
                    _0x432917--;
                  }
                  _0x5022ad = Math.min(_0x432917, 20);
                }
                if (_0x574292 == 101 || _0x574292 == 69) {
                  _0x16fd1b = _0x2ceddc.toExponential(_0x5022ad);
                  if (/[eE][-+]\d$/.test(_0x16fd1b)) {
                    _0x16fd1b = _0x16fd1b.slice(0, -1) + "0" + _0x16fd1b.slice(-1);
                  }
                } else if (_0x574292 == 102 || _0x574292 == 70) {
                  _0x16fd1b = _0x2ceddc.toFixed(_0x5022ad);
                  if (_0x2ceddc === 0 && _0x405038(_0x2ceddc)) {
                    _0x16fd1b = "-" + _0x16fd1b;
                  }
                }
                var _0x236662 = _0x16fd1b.split("e");
                if (_0x47cd4f && !_0x125487) {
                  while (_0x236662[0].length > 1 && _0x236662[0].includes(".") && (_0x236662[0].slice(-1) == "0" || _0x236662[0].slice(-1) == ".")) {
                    _0x236662[0] = _0x236662[0].slice(0, -1);
                  }
                } else {
                  if (_0x125487 && _0x16fd1b.indexOf(".") == -1) {
                    _0x236662[0] += ".";
                  }
                  while (_0x432917 > _0x5022ad++) {
                    _0x236662[0] += "0";
                  }
                }
                _0x16fd1b = _0x236662[0] + (_0x236662.length > 1 ? "e" + _0x236662[1] : "");
                if (_0x574292 == 69) {
                  _0x16fd1b = _0x16fd1b.toUpperCase();
                }
                if (_0x2ceddc >= 0) {
                  if (_0x6bce1d) {
                    _0x16fd1b = "+" + _0x16fd1b;
                  } else if (_0x1f4f7f) {
                    _0x16fd1b = " " + _0x16fd1b;
                  }
                }
              }
              while (_0x16fd1b.length < _0x5b6387) {
                if (_0x556497) {
                  _0x16fd1b += " ";
                } else if (_0x354714 && (_0x16fd1b[0] == "-" || _0x16fd1b[0] == "+")) {
                  _0x16fd1b = _0x16fd1b[0] + "0" + _0x16fd1b.slice(1);
                } else {
                  _0x16fd1b = (_0x354714 ? "0" : " ") + _0x16fd1b;
                }
              }
              if (_0x574292 < 97) {
                _0x16fd1b = _0x16fd1b.toUpperCase();
              }
              _0x16fd1b.split("").forEach(function (_0x7e870c) {
                _0x53939c.push(_0x7e870c.charCodeAt(0));
              });
              break;
            }
          case "s":
            {
              var _0x10c713 = _0x56e1b7("i8*");
              var _0x1e0554 = _0x10c713 ? _0x2a2b74(_0x10c713) : "(null)".length;
              if (_0x4b5080) {
                _0x1e0554 = Math.min(_0x1e0554, _0x432917);
              }
              if (!_0x556497) {
                while (_0x1e0554 < _0x5b6387--) {
                  _0x53939c.push(32);
                }
              }
              if (_0x10c713) {
                for (var _0xff4bae = 0; _0xff4bae < _0x1e0554; _0xff4bae++) {
                  _0x53939c.push(_0x10abe1[_0x10c713++ >> 0]);
                }
              } else {
                _0x53939c = _0x53939c.concat(_0x55b828("(null)".substr(0, _0x1e0554), true));
              }
              if (_0x556497) {
                while (_0x1e0554 < _0x5b6387--) {
                  _0x53939c.push(32);
                }
              }
              break;
            }
          case "c":
            {
              if (_0x556497) {
                _0x53939c.push(_0x56e1b7("i8"));
              }
              while (--_0x5b6387 > 0) {
                _0x53939c.push(32);
              }
              if (!_0x556497) {
                _0x53939c.push(_0x56e1b7("i8"));
              }
              break;
            }
          case "n":
            {
              var _0x492767 = _0x56e1b7("i32*");
              _0x3ea6c9[_0x492767 >> 2] = _0x53939c.length;
              break;
            }
          case "%":
            {
              _0x53939c.push(_0x4b2bb3);
              break;
            }
          default:
            {
              for (var _0xff4bae = _0x3818a6; _0xff4bae < _0x1c4946 + 2; _0xff4bae++) {
                _0x53939c.push(_0x410af5[_0xff4bae >> 0]);
              }
            }
        }
        _0x1c4946 += 2;
      } else {
        _0x53939c.push(_0x4b2bb3);
        _0x1c4946 += 1;
      }
    }
    return _0x53939c;
  }
  function _0x38e59f(_0x1e772f) {
    if (!_0x1e772f || !_0x1e772f.callee || !_0x1e772f.callee.name) {
      return [null, "", ""];
    }
    var _0x538164 = _0x1e772f.callee.toString();
    var _0x215450 = _0x1e772f.callee.name;
    var _0x380168 = "(";
    var _0x210ace = true;
    for (var _0xe67781 in _0x1e772f) {
      var _0x314979 = _0x1e772f[_0xe67781];
      if (!_0x210ace) {
        _0x380168 += ", ";
      }
      _0x210ace = false;
      if (typeof _0x314979 === "number" || typeof _0x314979 === "string") {
        _0x380168 += _0x314979;
      } else {
        _0x380168 += "(" + typeof _0x314979 + ")";
      }
    }
    _0x380168 += ")";
    var _0x3e7ce8 = _0x1e772f.callee.caller;
    _0x1e772f = _0x3e7ce8 ? _0x3e7ce8.arguments : [];
    if (_0x210ace) {
      _0x380168 = "";
    }
    return [_0x1e772f, _0x215450, _0x380168];
  }
  function _0x262336(_0x510aff) {
    var _0x324492 = _0x66330();
    var _0x55e113 = _0x324492.lastIndexOf("_emscripten_log");
    var _0x6136cb = _0x324492.lastIndexOf("_emscripten_get_callstack");
    var _0x430e27 = _0x324492.indexOf("\n", Math.max(_0x55e113, _0x6136cb)) + 1;
    _0x324492 = _0x324492.slice(_0x430e27);
    if (_0x510aff & 32) {
      _0x56028a("EM_LOG_DEMANGLE is deprecated; ignoring");
    }
    if (_0x510aff & 8 && typeof emscripten_source_map === "undefined") {
      _0x56028a("Source map information is not available, emscripten_log with EM_LOG_C_STACK will be ignored. Build with \"--pre-js $EMSCRIPTEN/src/emscripten-source-map.min.js\" linker flag to add source map loading to code.");
      _0x510aff ^= 8;
      _0x510aff |= 16;
    }
    var _0x413892 = null;
    if (_0x510aff & 128) {
      _0x413892 = _0x38e59f(arguments);
      while (_0x413892[1].includes("_emscripten_")) {
        _0x413892 = _0x38e59f(_0x413892[0]);
      }
    }
    var _0x221aa5 = _0x324492.split("\n");
    _0x324492 = "";
    var _0x548acb = new RegExp("\\s*(.*?)@(.*?):([0-9]+):([0-9]+)");
    var _0xcedacf = new RegExp("\\s*(.*?)@(.*):(.*)(:(.*))?");
    var _0x1fdb9b = new RegExp("\\s*at (.*?) \\((.*):(.*):(.*)\\)");
    for (var _0x3bd425 in _0x221aa5) {
      var _0x1292cf = _0x221aa5[_0x3bd425];
      var _0x13a21b = "";
      var _0x886731 = "";
      var _0x29a76b = 0;
      var _0x2b4e2b = 0;
      var _0x5dbae7 = _0x1fdb9b.exec(_0x1292cf);
      if (_0x5dbae7 && _0x5dbae7.length == 5) {
        _0x13a21b = _0x5dbae7[1];
        _0x886731 = _0x5dbae7[2];
        _0x29a76b = _0x5dbae7[3];
        _0x2b4e2b = _0x5dbae7[4];
      } else {
        _0x5dbae7 = _0x548acb.exec(_0x1292cf);
        if (!_0x5dbae7) {
          _0x5dbae7 = _0xcedacf.exec(_0x1292cf);
        }
        if (_0x5dbae7 && _0x5dbae7.length >= 4) {
          _0x13a21b = _0x5dbae7[1];
          _0x886731 = _0x5dbae7[2];
          _0x29a76b = _0x5dbae7[3];
          _0x2b4e2b = _0x5dbae7[4] | 0;
        } else {
          _0x324492 += _0x1292cf + "\n";
          continue;
        }
      }
      var _0x1aaac6 = false;
      if (_0x510aff & 8) {
        var _0x381e12 = emscripten_source_map.originalPositionFor({
          line: _0x29a76b,
          column: _0x2b4e2b
        });
        _0x1aaac6 = _0x381e12 && _0x381e12.source;
        if (_0x1aaac6) {
          if (_0x510aff & 64) {
            _0x381e12.source = _0x381e12.source.substring(_0x381e12.source.replace(/\\/g, "/").lastIndexOf("/") + 1);
          }
          _0x324492 += "    at " + _0x13a21b + " (" + _0x381e12.source + ":" + _0x381e12.line + ":" + _0x381e12.column + ")\n";
        }
      }
      if (_0x510aff & 16 || !_0x1aaac6) {
        if (_0x510aff & 64) {
          _0x886731 = _0x886731.substring(_0x886731.replace(/\\/g, "/").lastIndexOf("/") + 1);
        }
        _0x324492 += (_0x1aaac6 ? "     = " + _0x13a21b : "    at " + _0x13a21b) + " (" + _0x886731 + ":" + _0x29a76b + ":" + _0x2b4e2b + ")\n";
      }
      if (_0x510aff & 128 && _0x413892[0]) {
        if (_0x413892[1] == _0x13a21b && _0x413892[2].length > 0) {
          _0x324492 = _0x324492.replace(/\s+$/, "");
          _0x324492 += " with values: " + _0x413892[1] + _0x413892[2] + "\n";
        }
        _0x413892 = _0x38e59f(_0x413892[0]);
      }
    }
    _0x324492 = _0x324492.replace(/\s+$/, "");
    return _0x324492;
  }
  function _0x15f6ba(_0x24331f, _0x21d872) {
    if (_0x24331f & 24) {
      _0x21d872 = _0x21d872.replace(/\s+$/, "");
      _0x21d872 += (_0x21d872.length > 0 ? "\n" : "") + _0x262336(_0x24331f);
    }
    if (_0x24331f & 1) {
      if (_0x24331f & 4) {
        console.error(_0x21d872);
      } else if (_0x24331f & 2) {
        console.warn(_0x21d872);
      } else if (_0x24331f & 512) {
        console.info(_0x21d872);
      } else if (_0x24331f & 256) {
        console.debug(_0x21d872);
      } else {
        console.log(_0x21d872);
      }
    } else if (_0x24331f & 6) {
      _0x266425(_0x21d872);
    } else {
      _0x55efa1(_0x21d872);
    }
  }
  function _0x203903(_0x1d6c61, _0x50858f, _0x263e1a) {
    var _0x1e1a51 = _0x46371e(_0x50858f, _0x263e1a);
    var _0xaef0dc = _0x3665c7(_0x1e1a51, 0);
    _0x15f6ba(_0x1d6c61, _0xaef0dc);
  }
  function _0x2b8df5(_0x53107d, _0x2b42d4) {
    _0x5b12b4(_0x53107d, _0x2b42d4 || 1);
    throw "longjmp";
  }
  function _0x31ba9f(_0x5d315d, _0x431e71) {
    return _0x2b8df5(_0x5d315d, _0x431e71);
  }
  function _0x503e1f(_0x17c64e, _0x2fec83, _0x2f5902) {
    _0x10abe1.copyWithin(_0x17c64e, _0x2fec83, _0x2fec83 + _0x2f5902);
  }
  function _0x42f335(_0x28cd36, _0x39fe88) {
    if (!_0x385cc2.fullscreenEnabled()) {
      return -1;
    }
    _0x28cd36 = _0x18cc46(_0x28cd36);
    if (!_0x28cd36) {
      return -4;
    }
    if (!_0x28cd36.requestFullscreen && !_0x28cd36.webkitRequestFullscreen) {
      return -3;
    }
    var _0x43ba47 = _0x385cc2.canPerformEventHandlerRequests();
    if (!_0x43ba47) {
      if (_0x39fe88.deferUntilInEventHandler) {
        _0x385cc2.deferCall(_0x198649, 1, [_0x28cd36, _0x39fe88]);
        return 1;
      } else {
        return -2;
      }
    }
    return _0x198649(_0x28cd36, _0x39fe88);
  }
  function _0x39483a(_0x36bd3b, _0x4b5c35) {
    var _0x456d09 = {
      scaleMode: 0,
      canvasResolutionScaleMode: 0,
      filteringMode: 0,
      deferUntilInEventHandler: _0x4b5c35,
      canvasResizedCallbackTargetThread: 2
    };
    return _0x42f335(_0x36bd3b, _0x456d09);
  }
  function _0x4bb50f(_0x34091e, _0x1bdb92) {
    _0x34091e = _0x18cc46(_0x34091e);
    if (!_0x34091e) {
      return -4;
    }
    if (!_0x34091e.requestPointerLock && !_0x34091e.msRequestPointerLock) {
      return -1;
    }
    var _0x46ae97 = _0x385cc2.canPerformEventHandlerRequests();
    if (!_0x46ae97) {
      if (_0x1bdb92) {
        _0x385cc2.deferCall(_0xb20bbb, 2, [_0x34091e]);
        return 1;
      } else {
        return -2;
      }
    }
    return _0xb20bbb(_0x34091e);
  }
  function _0x453256(_0x3c16f3) {
    try {
      _0xa12ba8.grow(_0x3c16f3 - _0x599285.byteLength + 65535 >>> 16);
      _0x46b255(_0xa12ba8.buffer);
      return 1;
    } catch (_0x1718cc) {}
  }
  function _0x4f4d32(_0x19d17a) {
    var _0x39e4de = _0x10abe1.length;
    _0x19d17a = _0x19d17a >>> 0;
    var _0x36f6e4 = 2147483648;
    if (_0x19d17a > _0x36f6e4) {
      return false;
    }
    for (var _0x253ab5 = 1; _0x253ab5 <= 4; _0x253ab5 *= 2) {
      var _0x5aff10 = _0x39e4de * (1 + 0.2 / _0x253ab5);
      _0x5aff10 = Math.min(_0x5aff10, _0x19d17a + 100663296);
      var _0xaeda0 = Math.min(_0x36f6e4, _0x2ca81c(Math.max(_0x19d17a, _0x5aff10), 65536));
      var _0x2f086c = _0x453256(_0xaeda0);
      if (_0x2f086c) {
        return true;
      }
    }
    return false;
  }
  function _0x5c7386() {
    try {
      if (navigator.getGamepads) {
        if (_0x385cc2.lastGamepadState = navigator.getGamepads()) {
          return 0;
        } else {
          return -1;
        }
      }
    } catch (_0xb7ab89) {
      navigator.getGamepads = null;
    }
    return -1;
  }
  function _0x190788(_0x5f07fc, _0x21c3ee, _0x5582b7, _0x5e9cf0, _0x376bbd, _0x5c1396, _0x31b394) {
    if (!_0x385cc2.focusEvent) {
      _0x385cc2.focusEvent = _0x311afe(256);
    }
    var _0x298508 = function (_0x3e01aa) {
      var _0x57c666 = _0x3e01aa || event;
      var _0x2d0d18 = _0x385cc2.getNodeNameForTarget(_0x57c666.target);
      var _0xd359f1 = _0x57c666.target.id ? _0x57c666.target.id : "";
      var _0x39e219 = _0x385cc2.focusEvent;
      _0x259c3d(_0x2d0d18, _0x39e219 + 0, 128);
      _0x259c3d(_0xd359f1, _0x39e219 + 128, 128);
      if (function (_0xd8f2e7, _0x160c25, _0x1ce6bd) {
        return _0x537d47.apply(null, [_0x5e9cf0, _0xd8f2e7, _0x160c25, _0x1ce6bd]);
      }(_0x376bbd, _0x39e219, _0x21c3ee)) {
        _0x57c666.preventDefault();
      }
    };
    var _0x146b53 = {
      target: _0x18cc46(_0x5f07fc),
      eventTypeString: _0x5c1396,
      callbackfunc: _0x5e9cf0,
      handlerFunc: _0x298508,
      useCapture: _0x5582b7
    };
    _0x385cc2.registerOrRemoveHandler(_0x146b53);
  }
  function _0x42f38c(_0x408e2c, _0x143812, _0x1cfc3a, _0x5a92a5, _0x257fd2) {
    _0x190788(_0x408e2c, _0x143812, _0x1cfc3a, _0x5a92a5, 12, "blur", _0x257fd2);
    return 0;
  }
  function _0x3e05f5(_0x3c145d, _0x5bc45c, _0x284ba1, _0x182a54, _0x287473) {
    _0x190788(_0x3c145d, _0x5bc45c, _0x284ba1, _0x182a54, 13, "focus", _0x287473);
    return 0;
  }
  function _0x29815c(_0x2218f3, _0xe6013c, _0x52ebca, _0x1bd5c8, _0x403eb8, _0x1d9535, _0x4dbe9c) {
    if (!_0x385cc2.fullscreenChangeEvent) {
      _0x385cc2.fullscreenChangeEvent = _0x311afe(280);
    }
    var _0x3cf8a2 = function (_0x1e1514) {
      var _0x2fa8e0 = _0x1e1514 || event;
      var _0x1085cd = _0x385cc2.fullscreenChangeEvent;
      _0x43bee2(_0x1085cd);
      if (function (_0x3914e0, _0x2cecb7, _0x20db20) {
        return _0x537d47.apply(null, [_0x1bd5c8, _0x3914e0, _0x2cecb7, _0x20db20]);
      }(_0x403eb8, _0x1085cd, _0xe6013c)) {
        _0x2fa8e0.preventDefault();
      }
    };
    var _0xeb9a7d = {
      target: _0x2218f3,
      eventTypeString: _0x1d9535,
      callbackfunc: _0x1bd5c8,
      handlerFunc: _0x3cf8a2,
      useCapture: _0x52ebca
    };
    _0x385cc2.registerOrRemoveHandler(_0xeb9a7d);
  }
  function _0x5748f7(_0x13dc83, _0x6c42bb, _0x5a138f, _0x53dfac, _0x3fda8b) {
    if (!_0x385cc2.fullscreenEnabled()) {
      return -1;
    }
    _0x13dc83 = _0x18cc46(_0x13dc83);
    if (!_0x13dc83) {
      return -4;
    }
    _0x29815c(_0x13dc83, _0x6c42bb, _0x5a138f, _0x53dfac, 19, "fullscreenchange", _0x3fda8b);
    _0x29815c(_0x13dc83, _0x6c42bb, _0x5a138f, _0x53dfac, 19, "webkitfullscreenchange", _0x3fda8b);
    return 0;
  }
  function _0x4f5d95(_0x4e6a3b, _0x1888cc, _0xfddc21, _0x488592, _0x3b8f88, _0x4e19d9, _0x56d163) {
    if (!_0x385cc2.gamepadEvent) {
      _0x385cc2.gamepadEvent = _0x311afe(1432);
    }
    var _0x19d50a = function (_0x24871e) {
      var _0x5b6971 = _0x24871e || event;
      var _0x4ac455 = _0x385cc2.gamepadEvent;
      _0x3b558f(_0x4ac455, _0x5b6971.gamepad);
      if (function (_0x5266e0, _0x1653bd, _0x160d82) {
        return _0x537d47.apply(null, [_0x488592, _0x5266e0, _0x1653bd, _0x160d82]);
      }(_0x3b8f88, _0x4ac455, _0x1888cc)) {
        _0x5b6971.preventDefault();
      }
    };
    var _0x46f0ff = {
      target: _0x18cc46(_0x4e6a3b),
      allowsDeferredCalls: true,
      eventTypeString: _0x4e19d9,
      callbackfunc: _0x488592,
      handlerFunc: _0x19d50a,
      useCapture: _0xfddc21
    };
    _0x385cc2.registerOrRemoveHandler(_0x46f0ff);
  }
  function _0x4c109c(_0x42978d, _0x38330f, _0x3d3d0a, _0x1f8c24) {
    if (_0x5c7386()) {
      return -1;
    }
    return _0x4f5d95(2, _0x42978d, _0x38330f, _0x3d3d0a, 26, "gamepadconnected", _0x1f8c24);
  }
  function _0x1c3967(_0x487053, _0xf36c1a, _0x4a44ec, _0x1cbb53) {
    if (_0x5c7386()) {
      return -1;
    }
    return _0x4f5d95(2, _0x487053, _0xf36c1a, _0x4a44ec, 27, "gamepaddisconnected", _0x1cbb53);
  }
  function _0x2c7e29(_0x538f44, _0x790ea1, _0x536901) {
    return setInterval(function () {
      (function (_0x40f9ea) {
        _0x3c98fd.apply(null, [_0x538f44, _0x40f9ea]);
      })(_0x536901);
    }, _0x790ea1);
  }
  function _0x16b17b(_0x4cbd3e, _0x189d66, _0x509be9, _0x2594eb, _0x4a6245, _0x88164c, _0x4aa30d) {
    if (!_0x385cc2.keyEvent) {
      _0x385cc2.keyEvent = _0x311afe(164);
    }
    var _0x27ee7b = function (_0x2633af) {
      var _0x52da06 = _0x385cc2.keyEvent;
      var _0x2f9f4a = _0x52da06 >> 2;
      _0x3ea6c9[_0x2f9f4a + 0] = _0x2633af.location;
      _0x3ea6c9[_0x2f9f4a + 1] = _0x2633af.ctrlKey;
      _0x3ea6c9[_0x2f9f4a + 2] = _0x2633af.shiftKey;
      _0x3ea6c9[_0x2f9f4a + 3] = _0x2633af.altKey;
      _0x3ea6c9[_0x2f9f4a + 4] = _0x2633af.metaKey;
      _0x3ea6c9[_0x2f9f4a + 5] = _0x2633af.repeat;
      _0x3ea6c9[_0x2f9f4a + 6] = _0x2633af.charCode;
      _0x3ea6c9[_0x2f9f4a + 7] = _0x2633af.keyCode;
      _0x3ea6c9[_0x2f9f4a + 8] = _0x2633af.which;
      _0x259c3d(_0x2633af.key || "", _0x52da06 + 36, 32);
      _0x259c3d(_0x2633af.code || "", _0x52da06 + 68, 32);
      _0x259c3d(_0x2633af.char || "", _0x52da06 + 100, 32);
      _0x259c3d(_0x2633af.locale || "", _0x52da06 + 132, 32);
      if (function (_0x4093e5, _0x2a7813, _0x10c2fb) {
        return _0x537d47.apply(null, [_0x2594eb, _0x4093e5, _0x2a7813, _0x10c2fb]);
      }(_0x4a6245, _0x52da06, _0x189d66)) {
        _0x2633af.preventDefault();
      }
    };
    var _0x4aba69 = {
      target: _0x18cc46(_0x4cbd3e),
      allowsDeferredCalls: true,
      eventTypeString: _0x88164c,
      callbackfunc: _0x2594eb,
      handlerFunc: _0x27ee7b,
      useCapture: _0x509be9
    };
    _0x385cc2.registerOrRemoveHandler(_0x4aba69);
  }
  function _0x397d47(_0x5a3c66, _0x20fac2, _0x424401, _0x15c77a, _0x1490f1) {
    _0x16b17b(_0x5a3c66, _0x20fac2, _0x424401, _0x15c77a, 2, "keydown", _0x1490f1);
    return 0;
  }
  function _0x366708(_0x26cb2c, _0x140afe, _0x62f69d, _0x3eefd6, _0x4a8bb9) {
    _0x16b17b(_0x26cb2c, _0x140afe, _0x62f69d, _0x3eefd6, 1, "keypress", _0x4a8bb9);
    return 0;
  }
  function _0x4c96b7(_0x174d3f, _0x48cfcd, _0xe102ea, _0x2292f2, _0x1688a4) {
    _0x16b17b(_0x174d3f, _0x48cfcd, _0xe102ea, _0x2292f2, 3, "keyup", _0x1688a4);
    return 0;
  }
  function _0x1f1abd(_0x3942dd, _0x4bc234, _0xc4e740) {
    var _0xa3b0cc = function () {
      _0x1b3699.call(null, _0x3942dd);
    };
    _0x2d7218(_0xa3b0cc, _0x4bc234, _0xc4e740);
  }
  function _0xec2d4f(_0x110caa, _0x2eb98c, _0x5c9c02) {
    var _0x38a25d = _0x110caa >> 2;
    _0x3ea6c9[_0x38a25d + 0] = _0x2eb98c.screenX;
    _0x3ea6c9[_0x38a25d + 1] = _0x2eb98c.screenY;
    _0x3ea6c9[_0x38a25d + 2] = _0x2eb98c.clientX;
    _0x3ea6c9[_0x38a25d + 3] = _0x2eb98c.clientY;
    _0x3ea6c9[_0x38a25d + 4] = _0x2eb98c.ctrlKey;
    _0x3ea6c9[_0x38a25d + 5] = _0x2eb98c.shiftKey;
    _0x3ea6c9[_0x38a25d + 6] = _0x2eb98c.altKey;
    _0x3ea6c9[_0x38a25d + 7] = _0x2eb98c.metaKey;
    _0x1f1f2c[_0x38a25d * 2 + 16] = _0x2eb98c.button;
    _0x1f1f2c[_0x38a25d * 2 + 17] = _0x2eb98c.buttons;
    _0x3ea6c9[_0x38a25d + 9] = _0x2eb98c.movementX;
    _0x3ea6c9[_0x38a25d + 10] = _0x2eb98c.movementY;
    var _0x2fa132 = _0x33be35(_0x5c9c02);
    _0x3ea6c9[_0x38a25d + 11] = _0x2eb98c.clientX - _0x2fa132.left;
    _0x3ea6c9[_0x38a25d + 12] = _0x2eb98c.clientY - _0x2fa132.top;
  }
  function _0x2b2986(_0x15819b, _0x7247db, _0x1568aa, _0x379343, _0x268897, _0x4259fd, _0x40fa0c) {
    if (!_0x385cc2.mouseEvent) {
      _0x385cc2.mouseEvent = _0x311afe(64);
    }
    _0x15819b = _0x18cc46(_0x15819b);
    var _0x323df9 = function (_0x4fae2f) {
      var _0x825e7f = _0x4fae2f || event;
      _0xec2d4f(_0x385cc2.mouseEvent, _0x825e7f, _0x15819b);
      if (function (_0x10df99, _0x50210c, _0x51f37c) {
        return _0x537d47.apply(null, [_0x379343, _0x10df99, _0x50210c, _0x51f37c]);
      }(_0x268897, _0x385cc2.mouseEvent, _0x7247db)) {
        _0x825e7f.preventDefault();
      }
    };
    var _0x906eb8 = {
      target: _0x15819b,
      allowsDeferredCalls: _0x4259fd != "mousemove" && _0x4259fd != "mouseenter" && _0x4259fd != "mouseleave",
      eventTypeString: _0x4259fd,
      callbackfunc: _0x379343,
      handlerFunc: _0x323df9,
      useCapture: _0x1568aa
    };
    _0x385cc2.registerOrRemoveHandler(_0x906eb8);
  }
  function _0x5bc7b5(_0x498bbb, _0x457f38, _0x187ea7, _0x29a4a5, _0x1072bb) {
    _0x2b2986(_0x498bbb, _0x457f38, _0x187ea7, _0x29a4a5, 5, "mousedown", _0x1072bb);
    return 0;
  }
  function _0x574143(_0x3067da, _0x5aee1e, _0x83c08b, _0x1899b4, _0x265111) {
    _0x2b2986(_0x3067da, _0x5aee1e, _0x83c08b, _0x1899b4, 8, "mousemove", _0x265111);
    return 0;
  }
  function _0x26558d(_0x1012c4, _0x436ace, _0xe3b5d5, _0x3507cc, _0x1970a1) {
    _0x2b2986(_0x1012c4, _0x436ace, _0xe3b5d5, _0x3507cc, 6, "mouseup", _0x1970a1);
    return 0;
  }
  function _0x3d6830(_0x99ae5) {
    var _0x489f34 = document.pointerLockElement || document.mozPointerLockElement || document.webkitPointerLockElement || document.msPointerLockElement;
    var _0x3a4e70 = !!_0x489f34;
    _0x3ea6c9[_0x99ae5 >> 2] = _0x3a4e70;
    var _0x578aa1 = _0x385cc2.getNodeNameForTarget(_0x489f34);
    var _0x27bd60 = _0x489f34 && _0x489f34.id ? _0x489f34.id : "";
    _0x259c3d(_0x578aa1, _0x99ae5 + 4, 128);
    _0x259c3d(_0x27bd60, _0x99ae5 + 132, 128);
  }
  function _0x4ed98c(_0x374239, _0x40059b, _0x385128, _0x1534db, _0x35e917, _0x55ad3b, _0x386f2c) {
    if (!_0x385cc2.pointerlockChangeEvent) {
      _0x385cc2.pointerlockChangeEvent = _0x311afe(260);
    }
    var _0x6511da = function (_0xa99363) {
      var _0xa843d6 = _0xa99363 || event;
      var _0x471286 = _0x385cc2.pointerlockChangeEvent;
      _0x3d6830(_0x471286);
      if (function (_0x2baeaa, _0xb1cff0, _0x3158c5) {
        return _0x537d47.apply(null, [_0x1534db, _0x2baeaa, _0xb1cff0, _0x3158c5]);
      }(_0x35e917, _0x471286, _0x40059b)) {
        _0xa843d6.preventDefault();
      }
    };
    var _0x54c5b5 = {
      target: _0x374239,
      eventTypeString: _0x55ad3b,
      callbackfunc: _0x1534db,
      handlerFunc: _0x6511da,
      useCapture: _0x385128
    };
    _0x385cc2.registerOrRemoveHandler(_0x54c5b5);
  }
  function _0x5a2ab4(_0x2fcac9, _0x1d964f, _0x547f3e, _0x1d75bd, _0x415418) {
    if (!document || !document.body || !document.body.requestPointerLock && !document.body.mozRequestPointerLock && !document.body.webkitRequestPointerLock && !document.body.msRequestPointerLock) {
      return -1;
    }
    _0x2fcac9 = _0x18cc46(_0x2fcac9);
    if (!_0x2fcac9) {
      return -4;
    }
    _0x4ed98c(_0x2fcac9, _0x1d964f, _0x547f3e, _0x1d75bd, 20, "pointerlockchange", _0x415418);
    _0x4ed98c(_0x2fcac9, _0x1d964f, _0x547f3e, _0x1d75bd, 20, "mozpointerlockchange", _0x415418);
    _0x4ed98c(_0x2fcac9, _0x1d964f, _0x547f3e, _0x1d75bd, 20, "webkitpointerlockchange", _0x415418);
    _0x4ed98c(_0x2fcac9, _0x1d964f, _0x547f3e, _0x1d75bd, 20, "mspointerlockchange", _0x415418);
    return 0;
  }
  function _0xb073d5(_0x5776d2, _0x5b7d6d, _0xa0f70f, _0x2d8e87, _0x2634f3, _0x37e992, _0x394053) {
    if (!_0x385cc2.touchEvent) {
      _0x385cc2.touchEvent = _0x311afe(1684);
    }
    _0x5776d2 = _0x18cc46(_0x5776d2);
    var _0x4d4589 = function (_0x337df7) {
      var _0x1f7da2;
      var _0x563aa7 = {};
      var _0x526c03 = _0x337df7.touches;
      for (var _0xc9053b = 0; _0xc9053b < _0x526c03.length; ++_0xc9053b) {
        _0x1f7da2 = _0x526c03[_0xc9053b];
        _0x1f7da2.isChanged = _0x1f7da2.onTarget = 0;
        _0x563aa7[_0x1f7da2.identifier] = _0x1f7da2;
      }
      for (var _0xc9053b = 0; _0xc9053b < _0x337df7.changedTouches.length; ++_0xc9053b) {
        _0x1f7da2 = _0x337df7.changedTouches[_0xc9053b];
        _0x1f7da2.isChanged = 1;
        _0x563aa7[_0x1f7da2.identifier] = _0x1f7da2;
      }
      for (var _0xc9053b = 0; _0xc9053b < _0x337df7.targetTouches.length; ++_0xc9053b) {
        _0x563aa7[_0x337df7.targetTouches[_0xc9053b].identifier].onTarget = 1;
      }
      var _0x39e522 = _0x385cc2.touchEvent;
      var _0x4929ca = _0x39e522 >> 2;
      _0x3ea6c9[_0x4929ca + 1] = _0x337df7.ctrlKey;
      _0x3ea6c9[_0x4929ca + 2] = _0x337df7.shiftKey;
      _0x3ea6c9[_0x4929ca + 3] = _0x337df7.altKey;
      _0x3ea6c9[_0x4929ca + 4] = _0x337df7.metaKey;
      _0x4929ca += 5;
      var _0x15ba8c = _0x33be35(_0x5776d2);
      var _0xbbd70c = 0;
      for (var _0xc9053b in _0x563aa7) {
        var _0x1f7da2 = _0x563aa7[_0xc9053b];
        _0x3ea6c9[_0x4929ca + 0] = _0x1f7da2.identifier;
        _0x3ea6c9[_0x4929ca + 1] = _0x1f7da2.screenX;
        _0x3ea6c9[_0x4929ca + 2] = _0x1f7da2.screenY;
        _0x3ea6c9[_0x4929ca + 3] = _0x1f7da2.clientX;
        _0x3ea6c9[_0x4929ca + 4] = _0x1f7da2.clientY;
        _0x3ea6c9[_0x4929ca + 5] = _0x1f7da2.pageX;
        _0x3ea6c9[_0x4929ca + 6] = _0x1f7da2.pageY;
        _0x3ea6c9[_0x4929ca + 7] = _0x1f7da2.isChanged;
        _0x3ea6c9[_0x4929ca + 8] = _0x1f7da2.onTarget;
        _0x3ea6c9[_0x4929ca + 9] = _0x1f7da2.clientX - _0x15ba8c.left;
        _0x3ea6c9[_0x4929ca + 10] = _0x1f7da2.clientY - _0x15ba8c.top;
        _0x4929ca += 13;
        if (++_0xbbd70c > 31) {
          break;
        }
      }
      _0x3ea6c9[_0x39e522 >> 2] = _0xbbd70c;
      if (function (_0x16d4d7, _0x531ec0, _0x5c1d6e) {
        return _0x537d47.apply(null, [_0x2d8e87, _0x16d4d7, _0x531ec0, _0x5c1d6e]);
      }(_0x2634f3, _0x39e522, _0x5b7d6d)) {
        _0x337df7.preventDefault();
      }
    };
    var _0x593cff = {
      target: _0x5776d2,
      allowsDeferredCalls: _0x37e992 == "touchstart" || _0x37e992 == "touchend",
      eventTypeString: _0x37e992,
      callbackfunc: _0x2d8e87,
      handlerFunc: _0x4d4589,
      useCapture: _0xa0f70f
    };
    _0x385cc2.registerOrRemoveHandler(_0x593cff);
  }
  function _0x3c71a1(_0x494468, _0x31ff06, _0x6aad9a, _0x2617d8, _0x52c02c) {
    _0xb073d5(_0x494468, _0x31ff06, _0x6aad9a, _0x2617d8, 25, "touchcancel", _0x52c02c);
    return 0;
  }
  function _0x4ff1db(_0x47edd2, _0x1e543b, _0x2b71bb, _0x456979, _0x2a5956) {
    _0xb073d5(_0x47edd2, _0x1e543b, _0x2b71bb, _0x456979, 23, "touchend", _0x2a5956);
    return 0;
  }
  function _0x457acd(_0x26aec0, _0x30f19c, _0x4c5cc6, _0x458c9c, _0x9386f6) {
    _0xb073d5(_0x26aec0, _0x30f19c, _0x4c5cc6, _0x458c9c, 24, "touchmove", _0x9386f6);
    return 0;
  }
  function _0x2f5be1(_0x3d023c, _0x342ad8, _0x96640c, _0x115f03, _0x376664) {
    _0xb073d5(_0x3d023c, _0x342ad8, _0x96640c, _0x115f03, 22, "touchstart", _0x376664);
    return 0;
  }
  function _0x4b377b(_0x44b818, _0x515f95, _0x533a95, _0x66560c, _0x39d4bc, _0x16a69a, _0x525010) {
    if (!_0x385cc2.wheelEvent) {
      _0x385cc2.wheelEvent = _0x311afe(96);
    }
    var _0x1b8d3d = function (_0x317b2b) {
      var _0x30da3a = _0x317b2b || event;
      var _0x245413 = _0x385cc2.wheelEvent;
      _0xec2d4f(_0x245413, _0x30da3a, _0x44b818);
      _0x21f13f[_0x245413 + 64 >> 3] = _0x30da3a.deltaX;
      _0x21f13f[_0x245413 + 72 >> 3] = _0x30da3a.deltaY;
      _0x21f13f[_0x245413 + 80 >> 3] = _0x30da3a.deltaZ;
      _0x3ea6c9[_0x245413 + 88 >> 2] = _0x30da3a.deltaMode;
      if (function (_0x144b7b, _0x2d7f20, _0x354676) {
        return _0x537d47.apply(null, [_0x66560c, _0x144b7b, _0x2d7f20, _0x354676]);
      }(_0x39d4bc, _0x245413, _0x515f95)) {
        _0x30da3a.preventDefault();
      }
    };
    var _0x1da1ce = {
      target: _0x44b818,
      allowsDeferredCalls: true,
      eventTypeString: _0x16a69a,
      callbackfunc: _0x66560c,
      handlerFunc: _0x1b8d3d,
      useCapture: _0x533a95
    };
    _0x385cc2.registerOrRemoveHandler(_0x1da1ce);
  }
  function _0x529417(_0x392ec6, _0x5c53a1, _0x143b50, _0xe011a9, _0x18f083) {
    _0x392ec6 = _0x18cc46(_0x392ec6);
    if (typeof _0x392ec6.onwheel !== "undefined") {
      _0x4b377b(_0x392ec6, _0x5c53a1, _0x143b50, _0xe011a9, 9, "wheel", _0x18f083);
      return 0;
    } else {
      return -1;
    }
  }
  function _0x2a7e3a(_0x4da0fb) {
    var _0x241b6a = _0xe8e397();
    while (_0xe8e397() - _0x241b6a < _0x4da0fb) {}
  }
  function _0x45a51c(_0x3d835f) {
    var _0x33e771 = _0x3d835f.getExtension("ANGLE_instanced_arrays");
    if (_0x33e771) {
      _0x3d835f.vertexAttribDivisor = function (_0x115935, _0x44a084) {
        _0x33e771.vertexAttribDivisorANGLE(_0x115935, _0x44a084);
      };
      _0x3d835f.drawArraysInstanced = function (_0x122a6e, _0x564f8e, _0x4d9b20, _0x2ba5cc) {
        _0x33e771.drawArraysInstancedANGLE(_0x122a6e, _0x564f8e, _0x4d9b20, _0x2ba5cc);
      };
      _0x3d835f.drawElementsInstanced = function (_0x219ee8, _0x2ae540, _0x38d548, _0x354939, _0x3315fc) {
        _0x33e771.drawElementsInstancedANGLE(_0x219ee8, _0x2ae540, _0x38d548, _0x354939, _0x3315fc);
      };
      return 1;
    }
  }
  function _0x2dc2f4(_0x524bd8) {
    var _0x5526b4 = _0x524bd8.getExtension("OES_vertex_array_object");
    if (_0x5526b4) {
      _0x524bd8.createVertexArray = function () {
        return _0x5526b4.createVertexArrayOES();
      };
      _0x524bd8.deleteVertexArray = function (_0x33478b) {
        _0x5526b4.deleteVertexArrayOES(_0x33478b);
      };
      _0x524bd8.bindVertexArray = function (_0x5a6796) {
        _0x5526b4.bindVertexArrayOES(_0x5a6796);
      };
      _0x524bd8.isVertexArray = function (_0x2d32ce) {
        return _0x5526b4.isVertexArrayOES(_0x2d32ce);
      };
      return 1;
    }
  }
  function _0x38664c(_0x3c1083) {
    var _0x3fac8f = _0x3c1083.getExtension("WEBGL_draw_buffers");
    if (_0x3fac8f) {
      _0x3c1083.drawBuffers = function (_0x4bb8a0, _0x1378de) {
        _0x3fac8f.drawBuffersWEBGL(_0x4bb8a0, _0x1378de);
      };
      return 1;
    }
  }
  function _0x1e4052(_0x3fe666) {
    return !!(_0x3fe666.dibvbi = _0x3fe666.getExtension("WEBGL_draw_instanced_base_vertex_base_instance"));
  }
  function _0x714109(_0x145f20) {
    return !!(_0x145f20.mdibvbi = _0x145f20.getExtension("WEBGL_multi_draw_instanced_base_vertex_base_instance"));
  }
  function _0x17a16c(_0x238157) {
    return !!(_0x238157.multiDrawWebgl = _0x238157.getExtension("WEBGL_multi_draw"));
  }
  var _0x47f2e3 = {
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
    recordError: function _0x1d412b(_0x167359) {
      if (!_0x47f2e3.lastError) {
        _0x47f2e3.lastError = _0x167359;
      }
    },
    getNewId: function (_0x54b2e8) {
      var _0x5519aa = _0x47f2e3.counter++;
      for (var _0x4d7a59 = _0x54b2e8.length; _0x4d7a59 < _0x5519aa; _0x4d7a59++) {
        _0x54b2e8[_0x4d7a59] = null;
      }
      return _0x5519aa;
    },
    MAX_TEMP_BUFFER_SIZE: 2097152,
    numTempVertexBuffersPerSize: 64,
    log2ceilLookup: function (_0x5d0bde) {
      return 32 - Math.clz32(_0x5d0bde === 0 ? 0 : _0x5d0bde - 1);
    },
    generateTempBuffers: function (_0x17c01b, _0x112e0b) {
      var _0x3fa97c = _0x47f2e3.log2ceilLookup(_0x47f2e3.MAX_TEMP_BUFFER_SIZE);
      _0x112e0b.tempVertexBufferCounters1 = [];
      _0x112e0b.tempVertexBufferCounters2 = [];
      _0x112e0b.tempVertexBufferCounters1.length = _0x112e0b.tempVertexBufferCounters2.length = _0x3fa97c + 1;
      _0x112e0b.tempVertexBuffers1 = [];
      _0x112e0b.tempVertexBuffers2 = [];
      _0x112e0b.tempVertexBuffers1.length = _0x112e0b.tempVertexBuffers2.length = _0x3fa97c + 1;
      _0x112e0b.tempIndexBuffers = [];
      _0x112e0b.tempIndexBuffers.length = _0x3fa97c + 1;
      for (var _0x5b77bc = 0; _0x5b77bc <= _0x3fa97c; ++_0x5b77bc) {
        _0x112e0b.tempIndexBuffers[_0x5b77bc] = null;
        _0x112e0b.tempVertexBufferCounters1[_0x5b77bc] = _0x112e0b.tempVertexBufferCounters2[_0x5b77bc] = 0;
        var _0x54cc51 = _0x47f2e3.numTempVertexBuffersPerSize;
        _0x112e0b.tempVertexBuffers1[_0x5b77bc] = [];
        _0x112e0b.tempVertexBuffers2[_0x5b77bc] = [];
        var _0x539574 = _0x112e0b.tempVertexBuffers1[_0x5b77bc];
        var _0x2c633a = _0x112e0b.tempVertexBuffers2[_0x5b77bc];
        _0x539574.length = _0x2c633a.length = _0x54cc51;
        for (var _0x21c2ce = 0; _0x21c2ce < _0x54cc51; ++_0x21c2ce) {
          _0x539574[_0x21c2ce] = _0x2c633a[_0x21c2ce] = null;
        }
      }
      if (_0x17c01b) {
        _0x112e0b.tempQuadIndexBuffer = _0x1ca50b.createBuffer();
        _0x112e0b.GLctx.bindBuffer(34963, _0x112e0b.tempQuadIndexBuffer);
        var _0x92b65 = _0x47f2e3.MAX_TEMP_BUFFER_SIZE >> 1;
        var _0x21c25a = new Uint16Array(_0x92b65);
        var _0x5b77bc = 0;
        var _0x3fd7e9 = 0;
        while (1) {
          _0x21c25a[_0x5b77bc++] = _0x3fd7e9;
          if (_0x5b77bc >= _0x92b65) {
            break;
          }
          _0x21c25a[_0x5b77bc++] = _0x3fd7e9 + 1;
          if (_0x5b77bc >= _0x92b65) {
            break;
          }
          _0x21c25a[_0x5b77bc++] = _0x3fd7e9 + 2;
          if (_0x5b77bc >= _0x92b65) {
            break;
          }
          _0x21c25a[_0x5b77bc++] = _0x3fd7e9;
          if (_0x5b77bc >= _0x92b65) {
            break;
          }
          _0x21c25a[_0x5b77bc++] = _0x3fd7e9 + 2;
          if (_0x5b77bc >= _0x92b65) {
            break;
          }
          _0x21c25a[_0x5b77bc++] = _0x3fd7e9 + 3;
          if (_0x5b77bc >= _0x92b65) {
            break;
          }
          _0x3fd7e9 += 4;
        }
        _0x112e0b.GLctx.bufferData(34963, _0x21c25a, 35044);
        _0x112e0b.GLctx.bindBuffer(34963, null);
      }
    },
    getTempVertexBuffer: function _0x34bdba(_0x4a6821) {
      var _0x1ef136 = _0x47f2e3.log2ceilLookup(_0x4a6821);
      var _0x462a82 = _0x47f2e3.currentContext.tempVertexBuffers1[_0x1ef136];
      var _0x4aafa1 = _0x47f2e3.currentContext.tempVertexBufferCounters1[_0x1ef136];
      _0x47f2e3.currentContext.tempVertexBufferCounters1[_0x1ef136] = _0x47f2e3.currentContext.tempVertexBufferCounters1[_0x1ef136] + 1 & _0x47f2e3.numTempVertexBuffersPerSize - 1;
      var _0xfb5237 = _0x462a82[_0x4aafa1];
      if (_0xfb5237) {
        return _0xfb5237;
      }
      var _0x2d25c0 = _0x1ca50b.getParameter(34964);
      _0x462a82[_0x4aafa1] = _0x1ca50b.createBuffer();
      _0x1ca50b.bindBuffer(34962, _0x462a82[_0x4aafa1]);
      _0x1ca50b.bufferData(34962, 1 << _0x1ef136, 35048);
      _0x1ca50b.bindBuffer(34962, _0x2d25c0);
      return _0x462a82[_0x4aafa1];
    },
    getTempIndexBuffer: function _0x425932(_0x26ea36) {
      var _0x2ece6e = _0x47f2e3.log2ceilLookup(_0x26ea36);
      var _0x35eb18 = _0x47f2e3.currentContext.tempIndexBuffers[_0x2ece6e];
      if (_0x35eb18) {
        return _0x35eb18;
      }
      var _0x54ea6d = _0x1ca50b.getParameter(34965);
      _0x47f2e3.currentContext.tempIndexBuffers[_0x2ece6e] = _0x1ca50b.createBuffer();
      _0x1ca50b.bindBuffer(34963, _0x47f2e3.currentContext.tempIndexBuffers[_0x2ece6e]);
      _0x1ca50b.bufferData(34963, 1 << _0x2ece6e, 35048);
      _0x1ca50b.bindBuffer(34963, _0x54ea6d);
      return _0x47f2e3.currentContext.tempIndexBuffers[_0x2ece6e];
    },
    newRenderingFrameStarted: function _0xe8917d() {
      if (!_0x47f2e3.currentContext) {
        return;
      }
      var _0x52261d = _0x47f2e3.currentContext.tempVertexBuffers1;
      _0x47f2e3.currentContext.tempVertexBuffers1 = _0x47f2e3.currentContext.tempVertexBuffers2;
      _0x47f2e3.currentContext.tempVertexBuffers2 = _0x52261d;
      _0x52261d = _0x47f2e3.currentContext.tempVertexBufferCounters1;
      _0x47f2e3.currentContext.tempVertexBufferCounters1 = _0x47f2e3.currentContext.tempVertexBufferCounters2;
      _0x47f2e3.currentContext.tempVertexBufferCounters2 = _0x52261d;
      var _0x114583 = _0x47f2e3.log2ceilLookup(_0x47f2e3.MAX_TEMP_BUFFER_SIZE);
      for (var _0x38aaae = 0; _0x38aaae <= _0x114583; ++_0x38aaae) {
        _0x47f2e3.currentContext.tempVertexBufferCounters1[_0x38aaae] = 0;
      }
    },
    getSource: function (_0x4e3fe6, _0x31dd0c, _0x1c4395, _0x2aaed4) {
      var _0x336753 = "";
      for (var _0x11fbaa = 0; _0x11fbaa < _0x31dd0c; ++_0x11fbaa) {
        var _0x486d2d = _0x2aaed4 ? _0x3ea6c9[_0x2aaed4 + _0x11fbaa * 4 >> 2] : -1;
        _0x336753 += _0x5afdf8(_0x3ea6c9[_0x1c4395 + _0x11fbaa * 4 >> 2], _0x486d2d < 0 ? undefined : _0x486d2d);
      }
      return _0x336753;
    },
    calcBufLength: function _0x5dee5a(_0x46936d, _0x5cd25f, _0x3cf9cf, _0x467ebc) {
      if (_0x3cf9cf > 0) {
        return _0x467ebc * _0x3cf9cf;
      }
      var _0xaf5f35 = _0x47f2e3.byteSizeByType[_0x5cd25f - _0x47f2e3.byteSizeByTypeRoot];
      return _0x46936d * _0xaf5f35 * _0x467ebc;
    },
    usedTempBuffers: [],
    preDrawHandleClientVertexAttribBindings: function _0x986898(_0x5b8a6f) {
      _0x47f2e3.resetBufferBinding = false;
      for (var _0x75e091 = 0; _0x75e091 < _0x47f2e3.currentContext.maxVertexAttribs; ++_0x75e091) {
        var _0x4a3352 = _0x47f2e3.currentContext.clientBuffers[_0x75e091];
        if (!_0x4a3352.clientside || !_0x4a3352.enabled) {
          continue;
        }
        _0x47f2e3.resetBufferBinding = true;
        var _0x1187b4 = _0x47f2e3.calcBufLength(_0x4a3352.size, _0x4a3352.type, _0x4a3352.stride, _0x5b8a6f);
        var _0x40707d = _0x47f2e3.getTempVertexBuffer(_0x1187b4);
        _0x1ca50b.bindBuffer(34962, _0x40707d);
        _0x1ca50b.bufferSubData(34962, 0, _0x10abe1.subarray(_0x4a3352.ptr, _0x4a3352.ptr + _0x1187b4));
        _0x4a3352.vertexAttribPointerAdaptor.call(_0x1ca50b, _0x75e091, _0x4a3352.size, _0x4a3352.type, _0x4a3352.normalized, _0x4a3352.stride, 0);
      }
    },
    postDrawHandleClientVertexAttribBindings: function _0x58fb56() {
      if (_0x47f2e3.resetBufferBinding) {
        _0x1ca50b.bindBuffer(34962, _0x47f2e3.buffers[_0x1ca50b.currentArrayBufferBinding]);
      }
    },
    createContext: function (_0x532dd9, _0xfbb72c) {
      if (!_0x532dd9.getContextSafariWebGL2Fixed) {
        _0x532dd9.getContextSafariWebGL2Fixed = _0x532dd9.getContext;
        _0x532dd9.getContext = function (_0xff7a69, _0x4b852e) {
          var _0x37ddc4 = _0x532dd9.getContextSafariWebGL2Fixed(_0xff7a69, _0x4b852e);
          if (_0xff7a69 == "webgl" == _0x37ddc4 instanceof WebGLRenderingContext) {
            return _0x37ddc4;
          } else {
            return null;
          }
        };
      }
      var _0x2d4f7f = _0xfbb72c.majorVersion > 1 ? _0x532dd9.getContext("webgl2", _0xfbb72c) : _0x532dd9.getContext("webgl", _0xfbb72c);
      if (!_0x2d4f7f) {
        return 0;
      }
      var _0x364de1 = _0x47f2e3.registerContext(_0x2d4f7f, _0xfbb72c);
      return _0x364de1;
    },
    registerContext: function (_0x3f35f9, _0x36816a) {
      var _0x3e20d4 = _0x47f2e3.getNewId(_0x47f2e3.contexts);
      var _0x8b6b1 = {
        handle: _0x3e20d4,
        attributes: _0x36816a,
        version: _0x36816a.majorVersion,
        GLctx: _0x3f35f9
      };
      if (_0x3f35f9.canvas) {
        _0x3f35f9.canvas.GLctxObject = _0x8b6b1;
      }
      _0x47f2e3.contexts[_0x3e20d4] = _0x8b6b1;
      if (typeof _0x36816a.enableExtensionsByDefault === "undefined" || _0x36816a.enableExtensionsByDefault) {
        _0x47f2e3.initExtensions(_0x8b6b1);
      }
      _0x8b6b1.maxVertexAttribs = _0x8b6b1.GLctx.getParameter(34921);
      _0x8b6b1.clientBuffers = [];
      for (var _0x1f11ae = 0; _0x1f11ae < _0x8b6b1.maxVertexAttribs; _0x1f11ae++) {
        _0x8b6b1.clientBuffers[_0x1f11ae] = {
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
      _0x47f2e3.generateTempBuffers(false, _0x8b6b1);
      return _0x3e20d4;
    },
    makeContextCurrent: function (_0x4a415b) {
      _0x47f2e3.currentContext = _0x47f2e3.contexts[_0x4a415b];
      _0x3255d0.ctx = _0x1ca50b = _0x47f2e3.currentContext && _0x47f2e3.currentContext.GLctx;
      return !_0x4a415b || !!_0x1ca50b;
    },
    getContext: function (_0x1906d4) {
      return _0x47f2e3.contexts[_0x1906d4];
    },
    deleteContext: function (_0x46ae4e) {
      if (_0x47f2e3.currentContext === _0x47f2e3.contexts[_0x46ae4e]) {
        _0x47f2e3.currentContext = null;
      }
      if (typeof _0x385cc2 === "object") {
        _0x385cc2.removeAllHandlersOnTarget(_0x47f2e3.contexts[_0x46ae4e].GLctx.canvas);
      }
      if (_0x47f2e3.contexts[_0x46ae4e] && _0x47f2e3.contexts[_0x46ae4e].GLctx.canvas) {
        _0x47f2e3.contexts[_0x46ae4e].GLctx.canvas.GLctxObject = undefined;
      }
      _0x47f2e3.contexts[_0x46ae4e] = null;
    },
    initExtensions: function (_0x2d6cee) {
      if (!_0x2d6cee) {
        _0x2d6cee = _0x47f2e3.currentContext;
      }
      if (_0x2d6cee.initExtensionsDone) {
        return;
      }
      _0x2d6cee.initExtensionsDone = true;
      var _0x225652 = _0x2d6cee.GLctx;
      _0x45a51c(_0x225652);
      _0x2dc2f4(_0x225652);
      _0x38664c(_0x225652);
      _0x1e4052(_0x225652);
      _0x714109(_0x225652);
      if (_0x2d6cee.version >= 2) {
        _0x225652.disjointTimerQueryExt = _0x225652.getExtension("EXT_disjoint_timer_query_webgl2");
      }
      if (_0x2d6cee.version < 2 || !_0x225652.disjointTimerQueryExt) {
        _0x225652.disjointTimerQueryExt = _0x225652.getExtension("EXT_disjoint_timer_query");
      }
      _0x17a16c(_0x225652);
      var _0x1d4371 = _0x225652.getSupportedExtensions() || [];
      _0x1d4371.forEach(function (_0x1596b8) {
        if (!_0x1596b8.includes("lose_context") && !_0x1596b8.includes("debug")) {
          _0x225652.getExtension(_0x1596b8);
        }
      });
    }
  };
  var _0x266a26 = ["default", "low-power", "high-performance"];
  function _0x3c7f02(_0x14b6b7, _0x17df06) {
    var _0x3b3dc0 = _0x17df06 >> 2;
    var _0x470643 = _0x3ea6c9[_0x3b3dc0 + 6];
    var _0x3a4dc9 = {
      alpha: !!_0x3ea6c9[_0x3b3dc0 + 0],
      depth: !!_0x3ea6c9[_0x3b3dc0 + 1],
      stencil: !!_0x3ea6c9[_0x3b3dc0 + 2],
      antialias: !!_0x3ea6c9[_0x3b3dc0 + 3],
      premultipliedAlpha: !!_0x3ea6c9[_0x3b3dc0 + 4],
      preserveDrawingBuffer: !!_0x3ea6c9[_0x3b3dc0 + 5],
      powerPreference: _0x266a26[_0x470643],
      failIfMajorPerformanceCaveat: !!_0x3ea6c9[_0x3b3dc0 + 7],
      majorVersion: _0x3ea6c9[_0x3b3dc0 + 8],
      minorVersion: _0x3ea6c9[_0x3b3dc0 + 9],
      enableExtensionsByDefault: _0x3ea6c9[_0x3b3dc0 + 10],
      explicitSwapControl: _0x3ea6c9[_0x3b3dc0 + 11],
      proxyContextToMainThread: _0x3ea6c9[_0x3b3dc0 + 12],
      renderViaOffscreenBackBuffer: _0x3ea6c9[_0x3b3dc0 + 13]
    };
    var _0x2ba545 = _0x456407(_0x14b6b7);
    if (!_0x2ba545) {
      return 0;
    }
    if (_0x3a4dc9.explicitSwapControl) {
      return 0;
    }
    var _0x12479f = _0x47f2e3.createContext(_0x2ba545, _0x3a4dc9);
    return _0x12479f;
  }
  function _0x207ef8(_0x88e770, _0x1f48da) {
    return _0x3c7f02(_0x88e770, _0x1f48da);
  }
  function _0x336ab6() {
    if (_0x47f2e3.currentContext) {
      return _0x47f2e3.currentContext.handle;
    } else {
      return 0;
    }
  }
  function _0x461267() {
    return _0x336ab6();
  }
  _0x3255d0._emscripten_webgl_get_current_context = _0x461267;
  function _0x4058a8(_0x233f37) {
    var _0xb641ad = _0x47f2e3.makeContextCurrent(_0x233f37);
    if (_0xb641ad) {
      return 0;
    } else {
      return -5;
    }
  }
  _0x3255d0._emscripten_webgl_make_context_current = _0x4058a8;
  function _0x21dee0(_0x286376) {
    if (_0x47f2e3.currentContext == _0x286376) {
      _0x47f2e3.currentContext = 0;
    }
    _0x47f2e3.deleteContext(_0x286376);
  }
  function _0x1cf8e3(_0x168460, _0x328955) {
    var _0x31a3ba = _0x47f2e3.getContext(_0x168460);
    var _0x15f00c = _0x5afdf8(_0x328955);
    if (_0x15f00c.startsWith("GL_")) {
      _0x15f00c = _0x15f00c.substr(3);
    }
    if (_0x15f00c == "ANGLE_instanced_arrays") {
      _0x45a51c(_0x1ca50b);
    }
    if (_0x15f00c == "OES_vertex_array_object") {
      _0x2dc2f4(_0x1ca50b);
    }
    if (_0x15f00c == "WEBGL_draw_buffers") {
      _0x38664c(_0x1ca50b);
    }
    if (_0x15f00c == "WEBGL_draw_instanced_base_vertex_base_instance") {
      _0x1e4052(_0x1ca50b);
    }
    if (_0x15f00c == "WEBGL_multi_draw_instanced_base_vertex_base_instance") {
      _0x714109(_0x1ca50b);
    }
    if (_0x15f00c == "WEBGL_multi_draw") {
      _0x17a16c(_0x1ca50b);
    }
    var _0x262f3a = _0x31a3ba.GLctx.getExtension(_0x15f00c);
    return !!_0x262f3a;
  }
  function _0x424826(_0x1d43a9) {
    var _0x5a3a70 = _0x1d43a9 >> 2;
    for (var _0x25aeaf = 0; _0x25aeaf < 14; ++_0x25aeaf) {
      _0x3ea6c9[_0x5a3a70 + _0x25aeaf] = 0;
    }
    _0x3ea6c9[_0x5a3a70 + 0] = _0x3ea6c9[_0x5a3a70 + 1] = _0x3ea6c9[_0x5a3a70 + 3] = _0x3ea6c9[_0x5a3a70 + 4] = _0x3ea6c9[_0x5a3a70 + 8] = _0x3ea6c9[_0x5a3a70 + 10] = 1;
  }
  var _0x46a315 = {};
  function _0x2cbeea() {
    return _0x63ff32 || "./this.program";
  }
  function _0x42779e() {
    if (!_0x42779e.strings) {
      var _0x439793 = (typeof navigator === "object" && navigator.languages && navigator.languages[0] || "C").replace("-", "_") + ".UTF-8";
      var _0x36243d = {
        USER: "web_user",
        LOGNAME: "web_user",
        PATH: "/",
        PWD: "/",
        HOME: "/home/web_user",
        LANG: _0x439793,
        _: _0x2cbeea()
      };
      for (var _0x107eb8 in _0x46a315) {
        _0x36243d[_0x107eb8] = _0x46a315[_0x107eb8];
      }
      var _0x47433a = [];
      for (var _0x107eb8 in _0x36243d) {
        _0x47433a.push(_0x107eb8 + "=" + _0x36243d[_0x107eb8]);
      }
      _0x42779e.strings = _0x47433a;
    }
    return _0x42779e.strings;
  }
  function _0x5daaeb(_0x2c84d7, _0x473744) {
    try {
      var _0x55bd2a = 0;
      _0x42779e().forEach(function (_0x247555, _0x36d253) {
        var _0x5395d4 = _0x473744 + _0x55bd2a;
        _0x3ea6c9[_0x2c84d7 + _0x36d253 * 4 >> 2] = _0x5395d4;
        _0x3eb398(_0x247555, _0x5395d4);
        _0x55bd2a += _0x247555.length + 1;
      });
      return 0;
    } catch (_0x23fabf) {
      if (typeof _0x129e29 === "undefined" || !(_0x23fabf instanceof _0x129e29.ErrnoError)) {
        _0x3b38b3(_0x23fabf);
      }
      return _0x23fabf.errno;
    }
  }
  function _0x4f3132(_0x43692e, _0x6649fa) {
    try {
      var _0x44c410 = _0x42779e();
      _0x3ea6c9[_0x43692e >> 2] = _0x44c410.length;
      var _0x4d3f9c = 0;
      _0x44c410.forEach(function (_0xa114b3) {
        _0x4d3f9c += _0xa114b3.length + 1;
      });
      _0x3ea6c9[_0x6649fa >> 2] = _0x4d3f9c;
      return 0;
    } catch (_0xc326c8) {
      if (typeof _0x129e29 === "undefined" || !(_0xc326c8 instanceof _0x129e29.ErrnoError)) {
        _0x3b38b3(_0xc326c8);
      }
      return _0xc326c8.errno;
    }
  }
  function _0x923f08(_0x21d4d4) {
    try {
      var _0x39f7e3 = _0x2bf3a0.getStreamFromFD(_0x21d4d4);
      _0x129e29.close(_0x39f7e3);
      return 0;
    } catch (_0x22e692) {
      if (typeof _0x129e29 === "undefined" || !(_0x22e692 instanceof _0x129e29.ErrnoError)) {
        _0x3b38b3(_0x22e692);
      }
      return _0x22e692.errno;
    }
  }
  function _0x58f9ad(_0x3e7e70, _0x4224cb) {
    try {
      var _0x2b63ec = _0x2bf3a0.getStreamFromFD(_0x3e7e70);
      var _0x177373 = _0x2b63ec.tty ? 2 : _0x129e29.isDir(_0x2b63ec.mode) ? 3 : _0x129e29.isLink(_0x2b63ec.mode) ? 7 : 4;
      _0x410af5[_0x4224cb >> 0] = _0x177373;
      return 0;
    } catch (_0x5ec9f2) {
      if (typeof _0x129e29 === "undefined" || !(_0x5ec9f2 instanceof _0x129e29.ErrnoError)) {
        _0x3b38b3(_0x5ec9f2);
      }
      return _0x5ec9f2.errno;
    }
  }
  function _0x88fa63(_0x4d3868, _0x5ba577, _0x2f3616, _0x354c77) {
    try {
      var _0x176b49 = _0x2bf3a0.getStreamFromFD(_0x4d3868);
      var _0x261c90 = _0x2bf3a0.doReadv(_0x176b49, _0x5ba577, _0x2f3616);
      _0x3ea6c9[_0x354c77 >> 2] = _0x261c90;
      return 0;
    } catch (_0x590a1c) {
      if (typeof _0x129e29 === "undefined" || !(_0x590a1c instanceof _0x129e29.ErrnoError)) {
        _0x3b38b3(_0x590a1c);
      }
      return _0x590a1c.errno;
    }
  }
  function _0x31b872(_0x4c2dd6, _0x59ef15, _0x304e08, _0x30ec05, _0xd1720b) {
    try {
      var _0x3d77d8 = _0x2bf3a0.getStreamFromFD(_0x4c2dd6);
      var _0x4b0978 = 4294967296;
      var _0x3a8ee8 = _0x304e08 * _0x4b0978 + (_0x59ef15 >>> 0);
      var _0x2dbf65 = 9007199254740992;
      if (_0x3a8ee8 <= -_0x2dbf65 || _0x3a8ee8 >= _0x2dbf65) {
        return -61;
      }
      _0x129e29.llseek(_0x3d77d8, _0x3a8ee8, _0x30ec05);
      _0x1cea62 = [_0x3d77d8.position >>> 0, (_0x4ff14d = _0x3d77d8.position, +Math.abs(_0x4ff14d) >= 1 ? _0x4ff14d > 0 ? (Math.min(+Math.floor(_0x4ff14d / 4294967296), 4294967295) | 0) >>> 0 : ~~+Math.ceil((_0x4ff14d - +(~~_0x4ff14d >>> 0)) / 4294967296) >>> 0 : 0)];
      _0x3ea6c9[_0xd1720b >> 2] = _0x1cea62[0];
      _0x3ea6c9[_0xd1720b + 4 >> 2] = _0x1cea62[1];
      if (_0x3d77d8.getdents && _0x3a8ee8 === 0 && _0x30ec05 === 0) {
        _0x3d77d8.getdents = null;
      }
      return 0;
    } catch (_0x4c6598) {
      if (typeof _0x129e29 === "undefined" || !(_0x4c6598 instanceof _0x129e29.ErrnoError)) {
        _0x3b38b3(_0x4c6598);
      }
      return _0x4c6598.errno;
    }
  }
  function _0x56bde1(_0x109d44, _0xae0020, _0x263bab, _0x390dae) {
    try {
      var _0x1bbfeb = _0x2bf3a0.getStreamFromFD(_0x109d44);
      var _0x4fd1d9 = _0x2bf3a0.doWritev(_0x1bbfeb, _0xae0020, _0x263bab);
      _0x3ea6c9[_0x390dae >> 2] = _0x4fd1d9;
      return 0;
    } catch (_0x2746c4) {
      if (typeof _0x129e29 === "undefined" || !(_0x2746c4 instanceof _0x129e29.ErrnoError)) {
        _0x3b38b3(_0x2746c4);
      }
      return _0x2746c4.errno;
    }
  }
  function _0x248947(_0x520ae1, _0x1a20a0) {
    return 0;
  }
  function _0x43a48c() {
    return _0x3a9bb2();
  }
  function _0x193d0b(_0x4e6135, _0x31dbe3, _0x29969a, _0x3510c2) {
    var _0xe00993 = 0;
    var _0x3dbae0 = 0;
    var _0x144695 = 0;
    var _0x2d4221 = 0;
    var _0x2b6160 = 0;
    var _0x2ebb28 = 0;
    var _0x43d37a;
    function _0x3f621e(_0x1bba46, _0x1c3f96, _0x261a6f, _0x54c154, _0x2ef5c5, _0x289910) {
      var _0x51b35a;
      var _0x28c817;
      var _0x266ff8;
      var _0x501fbb;
      _0x28c817 = _0x1bba46 === 10 ? 28 : 16;
      _0x2ef5c5 = _0x1bba46 === 10 ? _0x51cbc8(_0x2ef5c5) : _0x41955e(_0x2ef5c5);
      _0x51b35a = _0x311afe(_0x28c817);
      _0x501fbb = _0x8ee340(_0x51b35a, _0x1bba46, _0x2ef5c5, _0x289910);
      _0x498a3a(!_0x501fbb);
      _0x266ff8 = _0x311afe(32);
      _0x3ea6c9[_0x266ff8 + 4 >> 2] = _0x1bba46;
      _0x3ea6c9[_0x266ff8 + 8 >> 2] = _0x1c3f96;
      _0x3ea6c9[_0x266ff8 + 12 >> 2] = _0x261a6f;
      _0x3ea6c9[_0x266ff8 + 24 >> 2] = _0x54c154;
      _0x3ea6c9[_0x266ff8 + 20 >> 2] = _0x51b35a;
      if (_0x1bba46 === 10) {
        _0x3ea6c9[_0x266ff8 + 16 >> 2] = 28;
      } else {
        _0x3ea6c9[_0x266ff8 + 16 >> 2] = 16;
      }
      _0x3ea6c9[_0x266ff8 + 28 >> 2] = 0;
      return _0x266ff8;
    }
    if (_0x29969a) {
      _0x144695 = _0x3ea6c9[_0x29969a >> 2];
      _0x2d4221 = _0x3ea6c9[_0x29969a + 4 >> 2];
      _0x2b6160 = _0x3ea6c9[_0x29969a + 8 >> 2];
      _0x2ebb28 = _0x3ea6c9[_0x29969a + 12 >> 2];
    }
    if (_0x2b6160 && !_0x2ebb28) {
      _0x2ebb28 = _0x2b6160 === 2 ? 17 : 6;
    }
    if (!_0x2b6160 && _0x2ebb28) {
      _0x2b6160 = _0x2ebb28 === 17 ? 2 : 1;
    }
    if (_0x2ebb28 === 0) {
      _0x2ebb28 = 6;
    }
    if (_0x2b6160 === 0) {
      _0x2b6160 = 1;
    }
    if (!_0x4e6135 && !_0x31dbe3) {
      return -2;
    }
    if (_0x144695 & ~1087) {
      return -1;
    }
    if (_0x29969a !== 0 && _0x3ea6c9[_0x29969a >> 2] & 2 && !_0x4e6135) {
      return -1;
    }
    if (_0x144695 & 32) {
      return -2;
    }
    if (_0x2b6160 !== 0 && _0x2b6160 !== 1 && _0x2b6160 !== 2) {
      return -7;
    }
    if (_0x2d4221 !== 0 && _0x2d4221 !== 2 && _0x2d4221 !== 10) {
      return -6;
    }
    if (_0x31dbe3) {
      _0x31dbe3 = _0x5afdf8(_0x31dbe3);
      _0x3dbae0 = parseInt(_0x31dbe3, 10);
      if (isNaN(_0x3dbae0)) {
        if (_0x144695 & 1024) {
          return -2;
        }
        return -8;
      }
    }
    if (!_0x4e6135) {
      if (_0x2d4221 === 0) {
        _0x2d4221 = 2;
      }
      if ((_0x144695 & 1) === 0) {
        if (_0x2d4221 === 2) {
          _0xe00993 = _0x254e44(2130706433);
        } else {
          _0xe00993 = [0, 0, 0, 1];
        }
      }
      _0x43d37a = _0x3f621e(_0x2d4221, _0x2b6160, _0x2ebb28, null, _0xe00993, _0x3dbae0);
      _0x3ea6c9[_0x3510c2 >> 2] = _0x43d37a;
      return 0;
    }
    _0x4e6135 = _0x5afdf8(_0x4e6135);
    _0xe00993 = _0x33fc54(_0x4e6135);
    if (_0xe00993 !== null) {
      if (_0x2d4221 === 0 || _0x2d4221 === 2) {
        _0x2d4221 = 2;
      } else if (_0x2d4221 === 10 && _0x144695 & 8) {
        _0xe00993 = [0, 0, _0x254e44(65535), _0xe00993];
        _0x2d4221 = 10;
      } else {
        return -2;
      }
    } else {
      _0xe00993 = _0x29a4f9(_0x4e6135);
      if (_0xe00993 !== null) {
        if (_0x2d4221 === 0 || _0x2d4221 === 10) {
          _0x2d4221 = 10;
        } else {
          return -2;
        }
      }
    }
    if (_0xe00993 != null) {
      _0x43d37a = _0x3f621e(_0x2d4221, _0x2b6160, _0x2ebb28, _0x4e6135, _0xe00993, _0x3dbae0);
      _0x3ea6c9[_0x3510c2 >> 2] = _0x43d37a;
      return 0;
    }
    if (_0x144695 & 4) {
      return -2;
    }
    _0x4e6135 = _0x32e614.lookup_name(_0x4e6135);
    _0xe00993 = _0x33fc54(_0x4e6135);
    if (_0x2d4221 === 0) {
      _0x2d4221 = 2;
    } else if (_0x2d4221 === 10) {
      _0xe00993 = [0, 0, _0x254e44(65535), _0xe00993];
    }
    _0x43d37a = _0x3f621e(_0x2d4221, _0x2b6160, _0x2ebb28, null, _0xe00993, _0x3dbae0);
    _0x3ea6c9[_0x3510c2 >> 2] = _0x43d37a;
    return 0;
  }
  function _0x3271f2(_0x369f8e) {
    var _0x5893eb = _0x311afe(20);
    var _0x7a6b95 = _0x311afe(_0x369f8e.length + 1);
    _0x259c3d(_0x369f8e, _0x7a6b95, _0x369f8e.length + 1);
    _0x3ea6c9[_0x5893eb >> 2] = _0x7a6b95;
    var _0x27ccfb = _0x311afe(4);
    _0x3ea6c9[_0x27ccfb >> 2] = 0;
    _0x3ea6c9[_0x5893eb + 4 >> 2] = _0x27ccfb;
    var _0x1fbf1e = 2;
    _0x3ea6c9[_0x5893eb + 8 >> 2] = _0x1fbf1e;
    _0x3ea6c9[_0x5893eb + 12 >> 2] = 4;
    var _0x4fabd3 = _0x311afe(12);
    _0x3ea6c9[_0x4fabd3 >> 2] = _0x4fabd3 + 8;
    _0x3ea6c9[_0x4fabd3 + 4 >> 2] = 0;
    _0x3ea6c9[_0x4fabd3 + 8 >> 2] = _0x33fc54(_0x32e614.lookup_name(_0x369f8e));
    _0x3ea6c9[_0x5893eb + 16 >> 2] = _0x4fabd3;
    return _0x5893eb;
  }
  function _0x51ced0(_0x21eb82, _0x1c32c6, _0x2bae1b) {
    if (_0x2bae1b !== 2) {
      _0x4cab60(5);
      return null;
    }
    _0x21eb82 = _0x3ea6c9[_0x21eb82 >> 2];
    var _0x129567 = _0x41955e(_0x21eb82);
    var _0x2399da = _0x32e614.lookup_addr(_0x129567);
    if (_0x2399da) {
      _0x129567 = _0x2399da;
    }
    return _0x3271f2(_0x129567);
  }
  function _0x39dac3(_0x1c72f6) {
    return _0x3271f2(_0x5afdf8(_0x1c72f6));
  }
  function _0x596172(_0x560951, _0x5de46a, _0x46d50c, _0x468210, _0x215dbf, _0xfa10fc, _0x376562) {
    var _0x18954f = _0x979e32(_0x560951, _0x5de46a);
    if (_0x18954f.errno) {
      return -6;
    }
    var _0x392d04 = _0x18954f.port;
    var _0x101cae = _0x18954f.addr;
    var _0x3cfd7f = false;
    if (_0x46d50c && _0x468210) {
      var _0x4bb2b1;
      if (_0x376562 & 1 || !(_0x4bb2b1 = _0x32e614.lookup_addr(_0x101cae))) {
        if (_0x376562 & 8) {
          return -2;
        }
      } else {
        _0x101cae = _0x4bb2b1;
      }
      var _0xc6c2ad = _0x259c3d(_0x101cae, _0x46d50c, _0x468210);
      if (_0xc6c2ad + 1 >= _0x468210) {
        _0x3cfd7f = true;
      }
    }
    if (_0x215dbf && _0xfa10fc) {
      _0x392d04 = "" + _0x392d04;
      var _0xc6c2ad = _0x259c3d(_0x392d04, _0x215dbf, _0xfa10fc);
      if (_0xc6c2ad + 1 >= _0xfa10fc) {
        _0x3cfd7f = true;
      }
    }
    if (_0x3cfd7f) {
      return -12;
    }
    return 0;
  }
  function _0x5d5701() {
    throw "getpwuid: TODO";
  }
  function _0x1c2968(_0x54ada2) {
    var _0x370725 = Date.now();
    _0x3ea6c9[_0x54ada2 >> 2] = _0x370725 / 1000 | 0;
    _0x3ea6c9[_0x54ada2 + 4 >> 2] = _0x370725 % 1000 * 1000 | 0;
    return 0;
  }
  function _0x3240e7(_0x2cae6c) {
    _0x1ca50b.activeTexture(_0x2cae6c);
  }
  function _0x631728(_0x1f16c4, _0x39f50e) {
    _0x1f16c4 = _0x47f2e3.programs[_0x1f16c4];
    _0x39f50e = _0x47f2e3.shaders[_0x39f50e];
    _0x1f16c4[_0x39f50e.shaderType] = _0x39f50e;
    _0x1ca50b.attachShader(_0x1f16c4, _0x39f50e);
  }
  function _0x2952af(_0x2da96e, _0x5c69f1) {
    _0x1ca50b.beginQuery(_0x2da96e, _0x47f2e3.queries[_0x5c69f1]);
  }
  function _0x4a9766(_0x44fcd7) {
    _0x1ca50b.beginTransformFeedback(_0x44fcd7);
  }
  function _0x160982(_0x7587aa, _0x317a9d, _0x5938bc) {
    _0x1ca50b.bindAttribLocation(_0x47f2e3.programs[_0x7587aa], _0x317a9d, _0x5afdf8(_0x5938bc));
  }
  function _0x376da4(_0x20ba66, _0x4a88b1) {
    if (_0x20ba66 == 34962) {
      _0x1ca50b.currentArrayBufferBinding = _0x4a88b1;
    } else if (_0x20ba66 == 34963) {
      _0x1ca50b.currentElementArrayBufferBinding = _0x4a88b1;
    }
    if (_0x20ba66 == 35051) {
      _0x1ca50b.currentPixelPackBufferBinding = _0x4a88b1;
    } else if (_0x20ba66 == 35052) {
      _0x1ca50b.currentPixelUnpackBufferBinding = _0x4a88b1;
    }
    _0x1ca50b.bindBuffer(_0x20ba66, _0x47f2e3.buffers[_0x4a88b1]);
  }
  function _0x1169f1(_0x1c3c5a, _0x12172b, _0x38ecab) {
    _0x1ca50b.bindBufferBase(_0x1c3c5a, _0x12172b, _0x47f2e3.buffers[_0x38ecab]);
  }
  function _0x7b8f77(_0x23d2ad, _0x265d00, _0x23adab, _0x4a6d7f, _0x2c45bf) {
    _0x1ca50b.bindBufferRange(_0x23d2ad, _0x265d00, _0x47f2e3.buffers[_0x23adab], _0x4a6d7f, _0x2c45bf);
  }
  function _0x28a2c4(_0x1477b0, _0x364588) {
    _0x1ca50b.bindFramebuffer(_0x1477b0, _0x47f2e3.framebuffers[_0x364588]);
  }
  function _0x4f3714(_0x3534a5, _0x437b54) {
    _0x1ca50b.bindRenderbuffer(_0x3534a5, _0x47f2e3.renderbuffers[_0x437b54]);
  }
  function _0x45ed04(_0x53d631, _0x411951) {
    _0x1ca50b.bindSampler(_0x53d631, _0x47f2e3.samplers[_0x411951]);
  }
  function _0x540c5c(_0x115587, _0x499b07) {
    _0x1ca50b.bindTexture(_0x115587, _0x47f2e3.textures[_0x499b07]);
  }
  function _0x5cabf8(_0x5c0ba4, _0x52e652) {
    _0x1ca50b.bindTransformFeedback(_0x5c0ba4, _0x47f2e3.transformFeedbacks[_0x52e652]);
  }
  function _0x38127a(_0x1b9ce1) {
    _0x1ca50b.bindVertexArray(_0x47f2e3.vaos[_0x1b9ce1]);
    var _0x56fb0c = _0x1ca50b.getParameter(34965);
    _0x1ca50b.currentElementArrayBufferBinding = _0x56fb0c ? _0x56fb0c.name | 0 : 0;
  }
  function _0x4e9702(_0x3d6def) {
    _0x1ca50b.blendEquation(_0x3d6def);
  }
  function _0x2dc542(_0xb9bf82, _0x3df183) {
    _0x1ca50b.blendEquationSeparate(_0xb9bf82, _0x3df183);
  }
  function _0x388368(_0xa7c0ed, _0x16af9c, _0x1d31f8, _0x2225d7) {
    _0x1ca50b.blendFuncSeparate(_0xa7c0ed, _0x16af9c, _0x1d31f8, _0x2225d7);
  }
  function _0x2e3d36(_0x16b35e, _0x2c9062, _0x4161b1, _0x17ed7e, _0x373202, _0x59c8ca, _0x54a8b5, _0x54ba3f, _0x19679d, _0x5d0934) {
    _0x1ca50b.blitFramebuffer(_0x16b35e, _0x2c9062, _0x4161b1, _0x17ed7e, _0x373202, _0x59c8ca, _0x54a8b5, _0x54ba3f, _0x19679d, _0x5d0934);
  }
  function _0x1f3bb1(_0x8fce53, _0x1a1b42, _0x31a616, _0x105283) {
    if (_0x47f2e3.currentContext.version >= 2) {
      if (_0x31a616) {
        _0x1ca50b.bufferData(_0x8fce53, _0x10abe1, _0x105283, _0x31a616, _0x1a1b42);
      } else {
        _0x1ca50b.bufferData(_0x8fce53, _0x1a1b42, _0x105283);
      }
    } else {
      _0x1ca50b.bufferData(_0x8fce53, _0x31a616 ? _0x10abe1.subarray(_0x31a616, _0x31a616 + _0x1a1b42) : _0x1a1b42, _0x105283);
    }
  }
  function _0x371a02(_0x28cf3f, _0x82e5b7, _0x4f9c08, _0x3af8a0) {
    if (_0x47f2e3.currentContext.version >= 2) {
      _0x1ca50b.bufferSubData(_0x28cf3f, _0x82e5b7, _0x10abe1, _0x3af8a0, _0x4f9c08);
      return;
    }
    _0x1ca50b.bufferSubData(_0x28cf3f, _0x82e5b7, _0x10abe1.subarray(_0x3af8a0, _0x3af8a0 + _0x4f9c08));
  }
  function _0x337bbc(_0x33f05a) {
    return _0x1ca50b.checkFramebufferStatus(_0x33f05a);
  }
  function _0x4d7f02(_0x4b67ba) {
    _0x1ca50b.clear(_0x4b67ba);
  }
  function _0x2fbaa5(_0x1f2d15, _0x293e9a, _0x2edd50, _0x3d680f) {
    _0x1ca50b.clearBufferfi(_0x1f2d15, _0x293e9a, _0x2edd50, _0x3d680f);
  }
  function _0x409ad5(_0x5028e2, _0x50bda0, _0x3bb263) {
    _0x1ca50b.clearBufferfv(_0x5028e2, _0x50bda0, _0x3787f7, _0x3bb263 >> 2);
  }
  function _0x16b8f5(_0x155162, _0x38e9bb, _0x2cecaf) {
    _0x1ca50b.clearBufferuiv(_0x155162, _0x38e9bb, _0x3e0b02, _0x2cecaf >> 2);
  }
  function _0x252475(_0x92d1eb, _0x2c7bec, _0x5185eb, _0x4a5eb2) {
    _0x1ca50b.clearColor(_0x92d1eb, _0x2c7bec, _0x5185eb, _0x4a5eb2);
  }
  function _0x30dd3f(_0x8b7677) {
    _0x1ca50b.clearDepth(_0x8b7677);
  }
  function _0xbd06aa(_0x1980cb) {
    _0x1ca50b.clearStencil(_0x1980cb);
  }
  function _0xb64747(_0x71b155, _0x3fd3e7, _0x3e376c, _0x2f38c4) {
    return _0x1ca50b.clientWaitSync(_0x47f2e3.syncs[_0x71b155], _0x3fd3e7, _0x39e10d(_0x3e376c, _0x2f38c4));
  }
  function _0x1ada97(_0x183cd1, _0x213c83, _0x52071e, _0x39020c) {
    _0x1ca50b.colorMask(!!_0x183cd1, !!_0x213c83, !!_0x52071e, !!_0x39020c);
  }
  function _0x1b8484(_0x536a46) {
    _0x1ca50b.compileShader(_0x47f2e3.shaders[_0x536a46]);
  }
  function _0x5805e2(_0x2caea1, _0x27a6ca, _0x56d696, _0x23a753, _0x122feb, _0x42ff0c, _0x2fbd87, _0x420a2a) {
    if (_0x47f2e3.currentContext.version >= 2) {
      if (_0x1ca50b.currentPixelUnpackBufferBinding) {
        _0x1ca50b.compressedTexImage2D(_0x2caea1, _0x27a6ca, _0x56d696, _0x23a753, _0x122feb, _0x42ff0c, _0x2fbd87, _0x420a2a);
      } else {
        _0x1ca50b.compressedTexImage2D(_0x2caea1, _0x27a6ca, _0x56d696, _0x23a753, _0x122feb, _0x42ff0c, _0x10abe1, _0x420a2a, _0x2fbd87);
      }
      return;
    }
    _0x1ca50b.compressedTexImage2D(_0x2caea1, _0x27a6ca, _0x56d696, _0x23a753, _0x122feb, _0x42ff0c, _0x420a2a ? _0x10abe1.subarray(_0x420a2a, _0x420a2a + _0x2fbd87) : null);
  }
  function _0x4d5a50(_0x2acd6b, _0x2fd00a, _0x1fe50c, _0x396037, _0x1a35d7, _0x5e7165, _0x158b61, _0x5004ef, _0x50b5f7) {
    if (_0x1ca50b.currentPixelUnpackBufferBinding) {
      _0x1ca50b.compressedTexImage3D(_0x2acd6b, _0x2fd00a, _0x1fe50c, _0x396037, _0x1a35d7, _0x5e7165, _0x158b61, _0x5004ef, _0x50b5f7);
    } else {
      _0x1ca50b.compressedTexImage3D(_0x2acd6b, _0x2fd00a, _0x1fe50c, _0x396037, _0x1a35d7, _0x5e7165, _0x158b61, _0x10abe1, _0x50b5f7, _0x5004ef);
    }
  }
  function _0x223536(_0xed33a3, _0x195cb2, _0x1b3394, _0xc67237, _0xc3be99, _0x4bfd42, _0x6cc9e8, _0x3b9b65, _0x23bfab) {
    if (_0x47f2e3.currentContext.version >= 2) {
      if (_0x1ca50b.currentPixelUnpackBufferBinding) {
        _0x1ca50b.compressedTexSubImage2D(_0xed33a3, _0x195cb2, _0x1b3394, _0xc67237, _0xc3be99, _0x4bfd42, _0x6cc9e8, _0x3b9b65, _0x23bfab);
      } else {
        _0x1ca50b.compressedTexSubImage2D(_0xed33a3, _0x195cb2, _0x1b3394, _0xc67237, _0xc3be99, _0x4bfd42, _0x6cc9e8, _0x10abe1, _0x23bfab, _0x3b9b65);
      }
      return;
    }
    _0x1ca50b.compressedTexSubImage2D(_0xed33a3, _0x195cb2, _0x1b3394, _0xc67237, _0xc3be99, _0x4bfd42, _0x6cc9e8, _0x23bfab ? _0x10abe1.subarray(_0x23bfab, _0x23bfab + _0x3b9b65) : null);
  }
  function _0x5b95cd(_0x462f14, _0x15a486, _0x40fbb2, _0x16f069, _0x1d3d17, _0x45ac57, _0x57f98f, _0x450f33, _0x51e9b3, _0xcb1d2d, _0x3d0b82) {
    if (_0x1ca50b.currentPixelUnpackBufferBinding) {
      _0x1ca50b.compressedTexSubImage3D(_0x462f14, _0x15a486, _0x40fbb2, _0x16f069, _0x1d3d17, _0x45ac57, _0x57f98f, _0x450f33, _0x51e9b3, _0xcb1d2d, _0x3d0b82);
    } else {
      _0x1ca50b.compressedTexSubImage3D(_0x462f14, _0x15a486, _0x40fbb2, _0x16f069, _0x1d3d17, _0x45ac57, _0x57f98f, _0x450f33, _0x51e9b3, _0x10abe1, _0x3d0b82, _0xcb1d2d);
    }
  }
  function _0x3564c6(_0x3ce7bb, _0x3ba60f, _0x1fd918, _0x18d901, _0x25c1e3) {
    _0x1ca50b.copyBufferSubData(_0x3ce7bb, _0x3ba60f, _0x1fd918, _0x18d901, _0x25c1e3);
  }
  function _0x816427(_0x47b1af, _0x45253c, _0x148fca, _0x3df758, _0x4dd301, _0x778b8, _0x47803c, _0x2183b7) {
    _0x1ca50b.copyTexImage2D(_0x47b1af, _0x45253c, _0x148fca, _0x3df758, _0x4dd301, _0x778b8, _0x47803c, _0x2183b7);
  }
  function _0x4e34e6(_0x37d36d, _0x14cc21, _0x5342b5, _0x1eb080, _0x41b8a1, _0x4fabd1, _0xc7369b, _0x4a2e4f) {
    _0x1ca50b.copyTexSubImage2D(_0x37d36d, _0x14cc21, _0x5342b5, _0x1eb080, _0x41b8a1, _0x4fabd1, _0xc7369b, _0x4a2e4f);
  }
  function _0xfeb0d6() {
    var _0x3d8486 = _0x47f2e3.getNewId(_0x47f2e3.programs);
    var _0x4669ad = _0x1ca50b.createProgram();
    _0x4669ad.name = _0x3d8486;
    _0x4669ad.maxUniformLength = _0x4669ad.maxAttributeLength = _0x4669ad.maxUniformBlockNameLength = 0;
    _0x4669ad.uniformIdCounter = 1;
    _0x47f2e3.programs[_0x3d8486] = _0x4669ad;
    return _0x3d8486;
  }
  function _0x13c884(_0xfacee4) {
    var _0x2b517b = _0x47f2e3.getNewId(_0x47f2e3.shaders);
    _0x47f2e3.shaders[_0x2b517b] = _0x1ca50b.createShader(_0xfacee4);
    _0x47f2e3.shaders[_0x2b517b].shaderType = _0xfacee4 & 1 ? "vs" : "fs";
    return _0x2b517b;
  }
  function _0x331382(_0x41f5c7) {
    _0x1ca50b.cullFace(_0x41f5c7);
  }
  function _0x150a66(_0xe0409c, _0x1363a8) {
    for (var _0x4cd10b = 0; _0x4cd10b < _0xe0409c; _0x4cd10b++) {
      var _0x3cd364 = _0x3ea6c9[_0x1363a8 + _0x4cd10b * 4 >> 2];
      var _0x57e2e2 = _0x47f2e3.buffers[_0x3cd364];
      if (!_0x57e2e2) {
        continue;
      }
      _0x1ca50b.deleteBuffer(_0x57e2e2);
      _0x57e2e2.name = 0;
      _0x47f2e3.buffers[_0x3cd364] = null;
      if (_0x3cd364 == _0x1ca50b.currentArrayBufferBinding) {
        _0x1ca50b.currentArrayBufferBinding = 0;
      }
      if (_0x3cd364 == _0x1ca50b.currentElementArrayBufferBinding) {
        _0x1ca50b.currentElementArrayBufferBinding = 0;
      }
      if (_0x3cd364 == _0x1ca50b.currentPixelPackBufferBinding) {
        _0x1ca50b.currentPixelPackBufferBinding = 0;
      }
      if (_0x3cd364 == _0x1ca50b.currentPixelUnpackBufferBinding) {
        _0x1ca50b.currentPixelUnpackBufferBinding = 0;
      }
    }
  }
  function _0x2ba4ef(_0x57b524, _0x542933) {
    for (var _0x19fc12 = 0; _0x19fc12 < _0x57b524; ++_0x19fc12) {
      var _0x394022 = _0x3ea6c9[_0x542933 + _0x19fc12 * 4 >> 2];
      var _0x1e07e7 = _0x47f2e3.framebuffers[_0x394022];
      if (!_0x1e07e7) {
        continue;
      }
      _0x1ca50b.deleteFramebuffer(_0x1e07e7);
      _0x1e07e7.name = 0;
      _0x47f2e3.framebuffers[_0x394022] = null;
    }
  }
  function _0x969544(_0x5b76f0) {
    if (!_0x5b76f0) {
      return;
    }
    var _0x35bf6d = _0x47f2e3.programs[_0x5b76f0];
    if (!_0x35bf6d) {
      _0x47f2e3.recordError(1281);
      return;
    }
    _0x1ca50b.deleteProgram(_0x35bf6d);
    _0x35bf6d.name = 0;
    _0x47f2e3.programs[_0x5b76f0] = null;
  }
  function _0x311b73(_0x60e975, _0x35e711) {
    for (var _0x5bbd88 = 0; _0x5bbd88 < _0x60e975; _0x5bbd88++) {
      var _0x2fcb58 = _0x3ea6c9[_0x35e711 + _0x5bbd88 * 4 >> 2];
      var _0x48f26d = _0x47f2e3.queries[_0x2fcb58];
      if (!_0x48f26d) {
        continue;
      }
      _0x1ca50b.deleteQuery(_0x48f26d);
      _0x47f2e3.queries[_0x2fcb58] = null;
    }
  }
  function _0x14f546(_0x2f6d48, _0x2a1455) {
    for (var _0x59ab67 = 0; _0x59ab67 < _0x2f6d48; _0x59ab67++) {
      var _0x26a423 = _0x3ea6c9[_0x2a1455 + _0x59ab67 * 4 >> 2];
      var _0x14f94a = _0x47f2e3.renderbuffers[_0x26a423];
      if (!_0x14f94a) {
        continue;
      }
      _0x1ca50b.deleteRenderbuffer(_0x14f94a);
      _0x14f94a.name = 0;
      _0x47f2e3.renderbuffers[_0x26a423] = null;
    }
  }
  function _0x2ea15e(_0xdbcdf9, _0x5b2e9b) {
    for (var _0x10689d = 0; _0x10689d < _0xdbcdf9; _0x10689d++) {
      var _0x1452e1 = _0x3ea6c9[_0x5b2e9b + _0x10689d * 4 >> 2];
      var _0x8a4e13 = _0x47f2e3.samplers[_0x1452e1];
      if (!_0x8a4e13) {
        continue;
      }
      _0x1ca50b.deleteSampler(_0x8a4e13);
      _0x8a4e13.name = 0;
      _0x47f2e3.samplers[_0x1452e1] = null;
    }
  }
  function _0xe147d9(_0x1ecd27) {
    if (!_0x1ecd27) {
      return;
    }
    var _0x515823 = _0x47f2e3.shaders[_0x1ecd27];
    if (!_0x515823) {
      _0x47f2e3.recordError(1281);
      return;
    }
    _0x1ca50b.deleteShader(_0x515823);
    _0x47f2e3.shaders[_0x1ecd27] = null;
  }
  function _0x2b2d66(_0x6cb6d3) {
    if (!_0x6cb6d3) {
      return;
    }
    var _0x5bb215 = _0x47f2e3.syncs[_0x6cb6d3];
    if (!_0x5bb215) {
      _0x47f2e3.recordError(1281);
      return;
    }
    _0x1ca50b.deleteSync(_0x5bb215);
    _0x5bb215.name = 0;
    _0x47f2e3.syncs[_0x6cb6d3] = null;
  }
  function _0x3e3c1b(_0x4d6bc4, _0x174c94) {
    for (var _0x494add = 0; _0x494add < _0x4d6bc4; _0x494add++) {
      var _0x29db91 = _0x3ea6c9[_0x174c94 + _0x494add * 4 >> 2];
      var _0x3c1010 = _0x47f2e3.textures[_0x29db91];
      if (!_0x3c1010) {
        continue;
      }
      _0x1ca50b.deleteTexture(_0x3c1010);
      _0x3c1010.name = 0;
      _0x47f2e3.textures[_0x29db91] = null;
    }
  }
  function _0x1b0773(_0x5c27d9, _0xce8287) {
    for (var _0x45f263 = 0; _0x45f263 < _0x5c27d9; _0x45f263++) {
      var _0x5a23c4 = _0x3ea6c9[_0xce8287 + _0x45f263 * 4 >> 2];
      var _0x3a41bd = _0x47f2e3.transformFeedbacks[_0x5a23c4];
      if (!_0x3a41bd) {
        continue;
      }
      _0x1ca50b.deleteTransformFeedback(_0x3a41bd);
      _0x3a41bd.name = 0;
      _0x47f2e3.transformFeedbacks[_0x5a23c4] = null;
    }
  }
  function _0x309649(_0x801057, _0xc2e9b1) {
    for (var _0x2d0100 = 0; _0x2d0100 < _0x801057; _0x2d0100++) {
      var _0x29d547 = _0x3ea6c9[_0xc2e9b1 + _0x2d0100 * 4 >> 2];
      _0x1ca50b.deleteVertexArray(_0x47f2e3.vaos[_0x29d547]);
      _0x47f2e3.vaos[_0x29d547] = null;
    }
  }
  function _0x1e632e(_0xf35536) {
    _0x1ca50b.depthFunc(_0xf35536);
  }
  function _0x48bac5(_0x20f998) {
    _0x1ca50b.depthMask(!!_0x20f998);
  }
  function _0x1a478b(_0x599881, _0x24eb6f) {
    _0x1ca50b.detachShader(_0x47f2e3.programs[_0x599881], _0x47f2e3.shaders[_0x24eb6f]);
  }
  function _0x19b6a4(_0x1328a2) {
    _0x1ca50b.disable(_0x1328a2);
  }
  function _0x54c770(_0x1ac1b2) {
    var _0x563a6f = _0x47f2e3.currentContext.clientBuffers[_0x1ac1b2];
    _0x563a6f.enabled = false;
    _0x1ca50b.disableVertexAttribArray(_0x1ac1b2);
  }
  function _0x5c3bb1(_0x1a8f84, _0x5d7d20, _0x598012) {
    _0x47f2e3.preDrawHandleClientVertexAttribBindings(_0x5d7d20 + _0x598012);
    _0x1ca50b.drawArrays(_0x1a8f84, _0x5d7d20, _0x598012);
    _0x47f2e3.postDrawHandleClientVertexAttribBindings();
  }
  function _0x2cc086(_0x45deaa, _0x1f3686, _0x11666e, _0xf58a4e) {
    _0x1ca50b.drawArraysInstanced(_0x45deaa, _0x1f3686, _0x11666e, _0xf58a4e);
  }
  var _0x1a2b78 = [];
  function _0x40edcc(_0x22c057, _0x24749b) {
    var _0x3da97a = _0x1a2b78[_0x22c057];
    for (var _0x27c588 = 0; _0x27c588 < _0x22c057; _0x27c588++) {
      _0x3da97a[_0x27c588] = _0x3ea6c9[_0x24749b + _0x27c588 * 4 >> 2];
    }
    _0x1ca50b.drawBuffers(_0x3da97a);
  }
  function _0x3b8417(_0x253067, _0x7f7969, _0x5ca80b, _0x2384ab) {
    var _0x3a787a;
    if (!_0x1ca50b.currentElementArrayBufferBinding) {
      var _0x153550 = _0x47f2e3.calcBufLength(1, _0x5ca80b, 0, _0x7f7969);
      _0x3a787a = _0x47f2e3.getTempIndexBuffer(_0x153550);
      _0x1ca50b.bindBuffer(34963, _0x3a787a);
      _0x1ca50b.bufferSubData(34963, 0, _0x10abe1.subarray(_0x2384ab, _0x2384ab + _0x153550));
      _0x2384ab = 0;
    }
    _0x47f2e3.preDrawHandleClientVertexAttribBindings(_0x7f7969);
    _0x1ca50b.drawElements(_0x253067, _0x7f7969, _0x5ca80b, _0x2384ab);
    _0x47f2e3.postDrawHandleClientVertexAttribBindings(_0x7f7969);
    if (!_0x1ca50b.currentElementArrayBufferBinding) {
      _0x1ca50b.bindBuffer(34963, null);
    }
  }
  function _0x5c59bd(_0xa9c495, _0x13cc16, _0x5d8c4e, _0xf5611b, _0x1de161) {
    _0x1ca50b.drawElementsInstanced(_0xa9c495, _0x13cc16, _0x5d8c4e, _0xf5611b, _0x1de161);
  }
  function _0xb8c359(_0x4a013c) {
    _0x1ca50b.enable(_0x4a013c);
  }
  function _0xb8cc7d(_0x2eb12d) {
    var _0x323079 = _0x47f2e3.currentContext.clientBuffers[_0x2eb12d];
    _0x323079.enabled = true;
    _0x1ca50b.enableVertexAttribArray(_0x2eb12d);
  }
  function _0x39e98e(_0x366259) {
    _0x1ca50b.endQuery(_0x366259);
  }
  function _0x90a4ea() {
    _0x1ca50b.endTransformFeedback();
  }
  function _0x5e1ac5(_0x5a5c26, _0x8c4586) {
    var _0x19cfcc = _0x1ca50b.fenceSync(_0x5a5c26, _0x8c4586);
    if (_0x19cfcc) {
      var _0x3a2d36 = _0x47f2e3.getNewId(_0x47f2e3.syncs);
      _0x19cfcc.name = _0x3a2d36;
      _0x47f2e3.syncs[_0x3a2d36] = _0x19cfcc;
      return _0x3a2d36;
    } else {
      return 0;
    }
  }
  function _0x54b4f2() {
    _0x1ca50b.finish();
  }
  function _0x1fc809() {
    _0x1ca50b.flush();
  }
  function _0x184098(_0x1db6ce) {
    switch (_0x1db6ce) {
      case 34962:
        _0x1db6ce = 34964;
        break;
      case 34963:
        _0x1db6ce = 34965;
        break;
      case 35051:
        _0x1db6ce = 35053;
        break;
      case 35052:
        _0x1db6ce = 35055;
        break;
      case 35982:
        _0x1db6ce = 35983;
        break;
      case 36662:
        _0x1db6ce = 36662;
        break;
      case 36663:
        _0x1db6ce = 36663;
        break;
      case 35345:
        _0x1db6ce = 35368;
        break;
    }
    var _0x2a51b0 = _0x1ca50b.getParameter(_0x1db6ce);
    if (_0x2a51b0) {
      return _0x2a51b0.name | 0;
    } else {
      return 0;
    }
  }
  function _0x384d88(_0x386dbc) {
    switch (_0x386dbc) {
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
  function _0x396481(_0xa867a2, _0x1959af, _0x40b006) {
    if (!_0x384d88(_0xa867a2)) {
      _0x47f2e3.recordError(1280);
      _0x266425("GL_INVALID_ENUM in glFlushMappedBufferRange");
      return;
    }
    var _0x11a48f = _0x47f2e3.mappedBuffers[_0x184098(_0xa867a2)];
    if (!_0x11a48f) {
      _0x47f2e3.recordError(1282);
      _0x266425("buffer was never mapped in glFlushMappedBufferRange");
      return;
    }
    if (!(_0x11a48f.access & 16)) {
      _0x47f2e3.recordError(1282);
      _0x266425("buffer was not mapped with GL_MAP_FLUSH_EXPLICIT_BIT in glFlushMappedBufferRange");
      return;
    }
    if (_0x1959af < 0 || _0x40b006 < 0 || _0x1959af + _0x40b006 > _0x11a48f.length) {
      _0x47f2e3.recordError(1281);
      _0x266425("invalid range in glFlushMappedBufferRange");
      return;
    }
    _0x1ca50b.bufferSubData(_0xa867a2, _0x11a48f.offset, _0x10abe1.subarray(_0x11a48f.mem + _0x1959af, _0x11a48f.mem + _0x1959af + _0x40b006));
  }
  function _0xc1ad54(_0x45dd35, _0x1b4918, _0x5e02e2, _0x2b47c4) {
    _0x1ca50b.framebufferRenderbuffer(_0x45dd35, _0x1b4918, _0x5e02e2, _0x47f2e3.renderbuffers[_0x2b47c4]);
  }
  function _0x113118(_0x2795a6, _0x241d67, _0x2a420d, _0x33690c, _0x2397d2) {
    _0x1ca50b.framebufferTexture2D(_0x2795a6, _0x241d67, _0x2a420d, _0x47f2e3.textures[_0x33690c], _0x2397d2);
  }
  function _0x57b906(_0x4810f1, _0x157d80, _0x3f78f1, _0x155d4b, _0x4f392d) {
    _0x1ca50b.framebufferTextureLayer(_0x4810f1, _0x157d80, _0x47f2e3.textures[_0x3f78f1], _0x155d4b, _0x4f392d);
  }
  function _0x16fbe5(_0x4449f1) {
    _0x1ca50b.frontFace(_0x4449f1);
  }
  function _0x5586a6(_0x354a62, _0x3409a2, _0x24ac0e, _0x7a543c) {
    for (var _0x4dfebd = 0; _0x4dfebd < _0x354a62; _0x4dfebd++) {
      var _0x4726a3 = _0x1ca50b[_0x24ac0e]();
      var _0x3ad953 = _0x4726a3 && _0x47f2e3.getNewId(_0x7a543c);
      if (_0x4726a3) {
        _0x4726a3.name = _0x3ad953;
        _0x7a543c[_0x3ad953] = _0x4726a3;
      } else {
        _0x47f2e3.recordError(1282);
      }
      _0x3ea6c9[_0x3409a2 + _0x4dfebd * 4 >> 2] = _0x3ad953;
    }
  }
  function _0x3cb4fd(_0x4e9221, _0x51e91f) {
    _0x5586a6(_0x4e9221, _0x51e91f, "createBuffer", _0x47f2e3.buffers);
  }
  function _0x343d0c(_0x1d261b, _0x386984) {
    _0x5586a6(_0x1d261b, _0x386984, "createFramebuffer", _0x47f2e3.framebuffers);
  }
  function _0x7c9ba4(_0x5399d0, _0x580f49) {
    _0x5586a6(_0x5399d0, _0x580f49, "createQuery", _0x47f2e3.queries);
  }
  function _0x10f659(_0x64437b, _0x4d39c7) {
    _0x5586a6(_0x64437b, _0x4d39c7, "createRenderbuffer", _0x47f2e3.renderbuffers);
  }
  function _0x2dfb22(_0x1a4fbd, _0x2a69aa) {
    _0x5586a6(_0x1a4fbd, _0x2a69aa, "createSampler", _0x47f2e3.samplers);
  }
  function _0x543cf9(_0x25caac, _0xf94e97) {
    _0x5586a6(_0x25caac, _0xf94e97, "createTexture", _0x47f2e3.textures);
  }
  function _0x5a108c(_0x216e5a, _0x59a9e4) {
    _0x5586a6(_0x216e5a, _0x59a9e4, "createTransformFeedback", _0x47f2e3.transformFeedbacks);
  }
  function _0x183f29(_0x5ab148, _0x59dccb) {
    _0x5586a6(_0x5ab148, _0x59dccb, "createVertexArray", _0x47f2e3.vaos);
  }
  function _0x5ce84e(_0x59b666) {
    _0x1ca50b.generateMipmap(_0x59b666);
  }
  function _0x5d870c(_0x47727a, _0xad629d, _0x32f870, _0xdaa6d, _0x4033a, _0xa15e5a, _0x198187, _0x2c86c7) {
    _0xad629d = _0x47f2e3.programs[_0xad629d];
    var _0x48e25b = _0x1ca50b[_0x47727a](_0xad629d, _0x32f870);
    if (_0x48e25b) {
      var _0x2d71de = _0x2c86c7 && _0x259c3d(_0x48e25b.name, _0x2c86c7, _0xdaa6d);
      if (_0x4033a) {
        _0x3ea6c9[_0x4033a >> 2] = _0x2d71de;
      }
      if (_0xa15e5a) {
        _0x3ea6c9[_0xa15e5a >> 2] = _0x48e25b.size;
      }
      if (_0x198187) {
        _0x3ea6c9[_0x198187 >> 2] = _0x48e25b.type;
      }
    }
  }
  function _0x55d9b2(_0x5cd444, _0x393ed4, _0x535f3d, _0x1ad927, _0x3624da, _0x2da533, _0x37b4bc) {
    _0x5d870c("getActiveAttrib", _0x5cd444, _0x393ed4, _0x535f3d, _0x1ad927, _0x3624da, _0x2da533, _0x37b4bc);
  }
  function _0x33a8c1(_0x985f15, _0x407d50, _0x4a7c8e, _0x23bd39, _0x347c06, _0x51b3a0, _0x4f6317) {
    _0x5d870c("getActiveUniform", _0x985f15, _0x407d50, _0x4a7c8e, _0x23bd39, _0x347c06, _0x51b3a0, _0x4f6317);
  }
  function _0x70e823(_0x5c779b, _0x87846e, _0x14b7db, _0x2f86dc, _0xc1e2df) {
    _0x5c779b = _0x47f2e3.programs[_0x5c779b];
    var _0x377f70 = _0x1ca50b.getActiveUniformBlockName(_0x5c779b, _0x87846e);
    if (!_0x377f70) {
      return;
    }
    if (_0xc1e2df && _0x14b7db > 0) {
      var _0x560b2a = _0x259c3d(_0x377f70, _0xc1e2df, _0x14b7db);
      if (_0x2f86dc) {
        _0x3ea6c9[_0x2f86dc >> 2] = _0x560b2a;
      }
    } else if (_0x2f86dc) {
      _0x3ea6c9[_0x2f86dc >> 2] = 0;
    }
  }
  function _0x137dfe(_0x332b80, _0x3de407, _0xd02028, _0x3b531a) {
    if (!_0x3b531a) {
      _0x47f2e3.recordError(1281);
      return;
    }
    _0x332b80 = _0x47f2e3.programs[_0x332b80];
    if (_0xd02028 == 35393) {
      var _0x4285db = _0x1ca50b.getActiveUniformBlockName(_0x332b80, _0x3de407);
      _0x3ea6c9[_0x3b531a >> 2] = _0x4285db.length + 1;
      return;
    }
    var _0xcb3bae = _0x1ca50b.getActiveUniformBlockParameter(_0x332b80, _0x3de407, _0xd02028);
    if (_0xcb3bae === null) {
      return;
    }
    if (_0xd02028 == 35395) {
      for (var _0x1e561d = 0; _0x1e561d < _0xcb3bae.length; _0x1e561d++) {
        _0x3ea6c9[_0x3b531a + _0x1e561d * 4 >> 2] = _0xcb3bae[_0x1e561d];
      }
    } else {
      _0x3ea6c9[_0x3b531a >> 2] = _0xcb3bae;
    }
  }
  function _0x396a56(_0x4279ef, _0xd88e83, _0x3e2f73, _0x538657, _0x2f0eec) {
    if (!_0x2f0eec) {
      _0x47f2e3.recordError(1281);
      return;
    }
    if (_0xd88e83 > 0 && _0x3e2f73 == 0) {
      _0x47f2e3.recordError(1281);
      return;
    }
    _0x4279ef = _0x47f2e3.programs[_0x4279ef];
    var _0xbdeaa9 = [];
    for (var _0x7cb827 = 0; _0x7cb827 < _0xd88e83; _0x7cb827++) {
      _0xbdeaa9.push(_0x3ea6c9[_0x3e2f73 + _0x7cb827 * 4 >> 2]);
    }
    var _0x1fa2e2 = _0x1ca50b.getActiveUniforms(_0x4279ef, _0xbdeaa9, _0x538657);
    if (!_0x1fa2e2) {
      return;
    }
    var _0x1e7420 = _0x1fa2e2.length;
    for (var _0x7cb827 = 0; _0x7cb827 < _0x1e7420; _0x7cb827++) {
      _0x3ea6c9[_0x2f0eec + _0x7cb827 * 4 >> 2] = _0x1fa2e2[_0x7cb827];
    }
  }
  function _0x4d5d66(_0x1c28c6, _0x58dc5f) {
    return _0x1ca50b.getAttribLocation(_0x47f2e3.programs[_0x1c28c6], _0x5afdf8(_0x58dc5f));
  }
  function _0x1eb034(_0x5acfe2, _0x3ad84b, _0x325359, _0x5b5e93) {
    if (!_0x5b5e93) {
      _0x47f2e3.recordError(1281);
      return;
    }
    _0x1ca50b.getBufferSubData(_0x5acfe2, _0x3ad84b, _0x10abe1, _0x5b5e93, _0x325359);
  }
  function _0x588330() {
    var _0x581d56 = _0x1ca50b.getError() || _0x47f2e3.lastError;
    _0x47f2e3.lastError = 0;
    return _0x581d56;
  }
  function _0x1c36ec(_0x45e747, _0x3029d4, _0x1cd8d3, _0x5c4399) {
    var _0x512dba = _0x1ca50b.getFramebufferAttachmentParameter(_0x45e747, _0x3029d4, _0x1cd8d3);
    if (_0x512dba instanceof WebGLRenderbuffer || _0x512dba instanceof WebGLTexture) {
      _0x512dba = _0x512dba.name | 0;
    }
    _0x3ea6c9[_0x5c4399 >> 2] = _0x512dba;
  }
  function _0x50a7c6(_0x2f2114, _0x2a2985) {
    _0x3e0b02[_0x2f2114 >> 2] = _0x2a2985;
    _0x3e0b02[_0x2f2114 + 4 >> 2] = (_0x2a2985 - _0x3e0b02[_0x2f2114 >> 2]) / 4294967296;
  }
  function _0x1573df(_0x2e9a58, _0x5dbbd9, _0x471dd9, _0x2fb543) {
    if (!_0x471dd9) {
      _0x47f2e3.recordError(1281);
      return;
    }
    var _0x2b32ca = _0x1ca50b.getIndexedParameter(_0x2e9a58, _0x5dbbd9);
    var _0xa5a3a5;
    switch (typeof _0x2b32ca) {
      case "boolean":
        _0xa5a3a5 = _0x2b32ca ? 1 : 0;
        break;
      case "number":
        _0xa5a3a5 = _0x2b32ca;
        break;
      case "object":
        if (_0x2b32ca === null) {
          switch (_0x2e9a58) {
            case 35983:
            case 35368:
              _0xa5a3a5 = 0;
              break;
            default:
              {
                _0x47f2e3.recordError(1280);
                return;
              }
          }
        } else if (_0x2b32ca instanceof WebGLBuffer) {
          _0xa5a3a5 = _0x2b32ca.name | 0;
        } else {
          _0x47f2e3.recordError(1280);
          return;
        }
        break;
      default:
        _0x47f2e3.recordError(1280);
        return;
    }
    switch (_0x2fb543) {
      case 1:
        _0x50a7c6(_0x471dd9, _0xa5a3a5);
        break;
      case 0:
        _0x3ea6c9[_0x471dd9 >> 2] = _0xa5a3a5;
        break;
      case 2:
        _0x3787f7[_0x471dd9 >> 2] = _0xa5a3a5;
        break;
      case 4:
        _0x410af5[_0x471dd9 >> 0] = _0xa5a3a5 ? 1 : 0;
        break;
      default:
        throw "internal emscriptenWebGLGetIndexed() error, bad type: " + _0x2fb543;
    }
  }
  function _0x2cc41b(_0x41383b, _0x470fb3, _0x33f5ac) {
    _0x1573df(_0x41383b, _0x470fb3, _0x33f5ac, 0);
  }
  function _0x6f0e13(_0x5bb9e4, _0x34305e, _0x3d88a2) {
    if (!_0x34305e) {
      _0x47f2e3.recordError(1281);
      return;
    }
    var _0xa47bdf = undefined;
    switch (_0x5bb9e4) {
      case 36346:
        _0xa47bdf = 1;
        break;
      case 36344:
        if (_0x3d88a2 != 0 && _0x3d88a2 != 1) {
          _0x47f2e3.recordError(1280);
        }
        return;
      case 34814:
      case 36345:
        _0xa47bdf = 0;
        break;
      case 34466:
        var _0x566011 = _0x1ca50b.getParameter(34467);
        _0xa47bdf = _0x566011 ? _0x566011.length : 0;
        break;
      case 33390:
        _0xa47bdf = 1048576;
        break;
      case 33309:
        if (_0x47f2e3.currentContext.version < 2) {
          _0x47f2e3.recordError(1282);
          return;
        }
        var _0x30c172 = _0x1ca50b.getSupportedExtensions() || [];
        _0xa47bdf = _0x30c172.length * 2;
        break;
      case 33307:
      case 33308:
        if (_0x47f2e3.currentContext.version < 2) {
          _0x47f2e3.recordError(1280);
          return;
        }
        _0xa47bdf = _0x5bb9e4 == 33307 ? 3 : 0;
        break;
    }
    if (_0xa47bdf === undefined) {
      var _0x4ace36 = _0x1ca50b.getParameter(_0x5bb9e4);
      switch (typeof _0x4ace36) {
        case "number":
          _0xa47bdf = _0x4ace36;
          break;
        case "boolean":
          _0xa47bdf = _0x4ace36 ? 1 : 0;
          break;
        case "string":
          _0x47f2e3.recordError(1280);
          return;
        case "object":
          if (_0x4ace36 === null) {
            switch (_0x5bb9e4) {
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
                  _0xa47bdf = 0;
                  break;
                }
              default:
                {
                  _0x47f2e3.recordError(1280);
                  return;
                }
            }
          } else if (_0x4ace36 instanceof Float32Array || _0x4ace36 instanceof Uint32Array || _0x4ace36 instanceof Int32Array || _0x4ace36 instanceof Array) {
            for (var _0x459558 = 0; _0x459558 < _0x4ace36.length; ++_0x459558) {
              switch (_0x3d88a2) {
                case 0:
                  _0x3ea6c9[_0x34305e + _0x459558 * 4 >> 2] = _0x4ace36[_0x459558];
                  break;
                case 2:
                  _0x3787f7[_0x34305e + _0x459558 * 4 >> 2] = _0x4ace36[_0x459558];
                  break;
                case 4:
                  _0x410af5[_0x34305e + _0x459558 >> 0] = _0x4ace36[_0x459558] ? 1 : 0;
                  break;
              }
            }
            return;
          } else {
            try {
              _0xa47bdf = _0x4ace36.name | 0;
            } catch (_0x11810e) {
              _0x47f2e3.recordError(1280);
              _0x266425("GL_INVALID_ENUM in glGet" + _0x3d88a2 + "v: Unknown object returned from WebGL getParameter(" + _0x5bb9e4 + ")! (error: " + _0x11810e + ")");
              return;
            }
          }
          break;
        default:
          _0x47f2e3.recordError(1280);
          _0x266425("GL_INVALID_ENUM in glGet" + _0x3d88a2 + "v: Native code calling glGet" + _0x3d88a2 + "v(" + _0x5bb9e4 + ") and it returns " + _0x4ace36 + " of type " + typeof _0x4ace36 + "!");
          return;
      }
    }
    switch (_0x3d88a2) {
      case 1:
        _0x50a7c6(_0x34305e, _0xa47bdf);
        break;
      case 0:
        _0x3ea6c9[_0x34305e >> 2] = _0xa47bdf;
        break;
      case 2:
        _0x3787f7[_0x34305e >> 2] = _0xa47bdf;
        break;
      case 4:
        _0x410af5[_0x34305e >> 0] = _0xa47bdf ? 1 : 0;
        break;
    }
  }
  function _0x5a91ed(_0x57cbf4, _0x2d709c) {
    _0x6f0e13(_0x57cbf4, _0x2d709c, 0);
  }
  function _0x4ff084(_0x4e2e04, _0x15f3f0, _0x570aa4, _0x4e00f2, _0x3bea5b) {
    if (_0x4e00f2 < 0) {
      _0x47f2e3.recordError(1281);
      return;
    }
    if (!_0x3bea5b) {
      _0x47f2e3.recordError(1281);
      return;
    }
    var _0x3e0ff2 = _0x1ca50b.getInternalformatParameter(_0x4e2e04, _0x15f3f0, _0x570aa4);
    if (_0x3e0ff2 === null) {
      return;
    }
    for (var _0x25cb4c = 0; _0x25cb4c < _0x3e0ff2.length && _0x25cb4c < _0x4e00f2; ++_0x25cb4c) {
      _0x3ea6c9[_0x3bea5b + _0x25cb4c * 4 >> 2] = _0x3e0ff2[_0x25cb4c];
    }
  }
  function _0x518e98(_0xbc662b, _0x387784, _0x3cbc8c, _0x2e7aeb, _0x5e2ee0) {
    _0x47f2e3.recordError(1282);
  }
  function _0x3be780(_0x5c7fe0, _0x3e7293, _0x475552, _0x35cb6c) {
    var _0x992db7 = _0x1ca50b.getProgramInfoLog(_0x47f2e3.programs[_0x5c7fe0]);
    if (_0x992db7 === null) {
      _0x992db7 = "(unknown error)";
    }
    var _0x2d23df = _0x3e7293 > 0 && _0x35cb6c ? _0x259c3d(_0x992db7, _0x35cb6c, _0x3e7293) : 0;
    if (_0x475552) {
      _0x3ea6c9[_0x475552 >> 2] = _0x2d23df;
    }
  }
  function _0x5754be(_0x3397ee, _0x115e0b, _0x48e74c) {
    if (!_0x48e74c) {
      _0x47f2e3.recordError(1281);
      return;
    }
    if (_0x3397ee >= _0x47f2e3.counter) {
      _0x47f2e3.recordError(1281);
      return;
    }
    _0x3397ee = _0x47f2e3.programs[_0x3397ee];
    if (_0x115e0b == 35716) {
      var _0x476179 = _0x1ca50b.getProgramInfoLog(_0x3397ee);
      if (_0x476179 === null) {
        _0x476179 = "(unknown error)";
      }
      _0x3ea6c9[_0x48e74c >> 2] = _0x476179.length + 1;
    } else if (_0x115e0b == 35719) {
      if (!_0x3397ee.maxUniformLength) {
        for (var _0x22060f = 0; _0x22060f < _0x1ca50b.getProgramParameter(_0x3397ee, 35718); ++_0x22060f) {
          _0x3397ee.maxUniformLength = Math.max(_0x3397ee.maxUniformLength, _0x1ca50b.getActiveUniform(_0x3397ee, _0x22060f).name.length + 1);
        }
      }
      _0x3ea6c9[_0x48e74c >> 2] = _0x3397ee.maxUniformLength;
    } else if (_0x115e0b == 35722) {
      if (!_0x3397ee.maxAttributeLength) {
        for (var _0x22060f = 0; _0x22060f < _0x1ca50b.getProgramParameter(_0x3397ee, 35721); ++_0x22060f) {
          _0x3397ee.maxAttributeLength = Math.max(_0x3397ee.maxAttributeLength, _0x1ca50b.getActiveAttrib(_0x3397ee, _0x22060f).name.length + 1);
        }
      }
      _0x3ea6c9[_0x48e74c >> 2] = _0x3397ee.maxAttributeLength;
    } else if (_0x115e0b == 35381) {
      if (!_0x3397ee.maxUniformBlockNameLength) {
        for (var _0x22060f = 0; _0x22060f < _0x1ca50b.getProgramParameter(_0x3397ee, 35382); ++_0x22060f) {
          _0x3397ee.maxUniformBlockNameLength = Math.max(_0x3397ee.maxUniformBlockNameLength, _0x1ca50b.getActiveUniformBlockName(_0x3397ee, _0x22060f).length + 1);
        }
      }
      _0x3ea6c9[_0x48e74c >> 2] = _0x3397ee.maxUniformBlockNameLength;
    } else {
      _0x3ea6c9[_0x48e74c >> 2] = _0x1ca50b.getProgramParameter(_0x3397ee, _0x115e0b);
    }
  }
  function _0x3b5da7(_0x401ffc, _0xa9a0ee, _0x37e320) {
    if (!_0x37e320) {
      _0x47f2e3.recordError(1281);
      return;
    }
    var _0x4baf63 = _0x47f2e3.queries[_0x401ffc];
    var _0x42aa1d = _0x1ca50b.getQueryParameter(_0x4baf63, _0xa9a0ee);
    var _0xd7ac64;
    if (typeof _0x42aa1d == "boolean") {
      _0xd7ac64 = _0x42aa1d ? 1 : 0;
    } else {
      _0xd7ac64 = _0x42aa1d;
    }
    _0x3ea6c9[_0x37e320 >> 2] = _0xd7ac64;
  }
  function _0x276426(_0x200965, _0x146877, _0x161553) {
    if (!_0x161553) {
      _0x47f2e3.recordError(1281);
      return;
    }
    _0x3ea6c9[_0x161553 >> 2] = _0x1ca50b.getQuery(_0x200965, _0x146877);
  }
  function _0x5ea440(_0x34472b, _0x4bd874, _0x828e49) {
    if (!_0x828e49) {
      _0x47f2e3.recordError(1281);
      return;
    }
    _0x3ea6c9[_0x828e49 >> 2] = _0x1ca50b.getRenderbufferParameter(_0x34472b, _0x4bd874);
  }
  function _0x30bfa7(_0x43bb8f, _0x4e1885, _0x4808a5, _0x13fd1f) {
    var _0x11e5d9 = _0x1ca50b.getShaderInfoLog(_0x47f2e3.shaders[_0x43bb8f]);
    if (_0x11e5d9 === null) {
      _0x11e5d9 = "(unknown error)";
    }
    var _0x4ec077 = _0x4e1885 > 0 && _0x13fd1f ? _0x259c3d(_0x11e5d9, _0x13fd1f, _0x4e1885) : 0;
    if (_0x4808a5) {
      _0x3ea6c9[_0x4808a5 >> 2] = _0x4ec077;
    }
  }
  function _0x53fddf(_0x24c824, _0x91e095, _0x3f331d, _0x3520d9) {
    var _0x49c576 = _0x1ca50b.getShaderPrecisionFormat(_0x24c824, _0x91e095);
    _0x3ea6c9[_0x3f331d >> 2] = _0x49c576.rangeMin;
    _0x3ea6c9[_0x3f331d + 4 >> 2] = _0x49c576.rangeMax;
    _0x3ea6c9[_0x3520d9 >> 2] = _0x49c576.precision;
  }
  function _0x4daa02(_0x475861, _0x1d2663, _0x21a926, _0x5e821b) {
    var _0x4a24e0 = _0x1ca50b.getShaderSource(_0x47f2e3.shaders[_0x475861]);
    if (!_0x4a24e0) {
      return;
    }
    var _0x35c9c6 = _0x1d2663 > 0 && _0x5e821b ? _0x259c3d(_0x4a24e0, _0x5e821b, _0x1d2663) : 0;
    if (_0x21a926) {
      _0x3ea6c9[_0x21a926 >> 2] = _0x35c9c6;
    }
  }
  function _0x2e71a8(_0x30a8dd, _0x3c8ee8, _0x2eb15a) {
    if (!_0x2eb15a) {
      _0x47f2e3.recordError(1281);
      return;
    }
    if (_0x3c8ee8 == 35716) {
      var _0x2ee7ff = _0x1ca50b.getShaderInfoLog(_0x47f2e3.shaders[_0x30a8dd]);
      if (_0x2ee7ff === null) {
        _0x2ee7ff = "(unknown error)";
      }
      var _0x4636fb = _0x2ee7ff ? _0x2ee7ff.length + 1 : 0;
      _0x3ea6c9[_0x2eb15a >> 2] = _0x4636fb;
    } else if (_0x3c8ee8 == 35720) {
      var _0x2e8935 = _0x1ca50b.getShaderSource(_0x47f2e3.shaders[_0x30a8dd]);
      var _0x4277ce = _0x2e8935 ? _0x2e8935.length + 1 : 0;
      _0x3ea6c9[_0x2eb15a >> 2] = _0x4277ce;
    } else {
      _0x3ea6c9[_0x2eb15a >> 2] = _0x1ca50b.getShaderParameter(_0x47f2e3.shaders[_0x30a8dd], _0x3c8ee8);
    }
  }
  function _0x157cc4(_0x40c69c) {
    var _0x2938c8 = _0x47f2e3.stringCache[_0x40c69c];
    if (!_0x2938c8) {
      switch (_0x40c69c) {
        case 7939:
          var _0x50247d = _0x1ca50b.getSupportedExtensions() || [];
          _0x50247d = _0x50247d.concat(_0x50247d.map(function (_0x10e66e) {
            return "GL_" + _0x10e66e;
          }));
          _0x2938c8 = _0x535219(_0x50247d.join(" "));
          break;
        case 7936:
        case 7937:
        case 37445:
        case 37446:
          var _0x18eae1 = _0x1ca50b.getParameter(_0x40c69c);
          if (!_0x18eae1) {
            _0x47f2e3.recordError(1280);
          }
          _0x2938c8 = _0x18eae1 && _0x535219(_0x18eae1);
          break;
        case 7938:
          var _0x32b947 = _0x1ca50b.getParameter(7938);
          if (_0x47f2e3.currentContext.version >= 2) {
            _0x32b947 = "OpenGL ES 3.0 (" + _0x32b947 + ")";
          } else {
            _0x32b947 = "OpenGL ES 2.0 (" + _0x32b947 + ")";
          }
          _0x2938c8 = _0x535219(_0x32b947);
          break;
        case 35724:
          var _0x4fafe5 = _0x1ca50b.getParameter(35724);
          var _0x2d9a40 = /^WebGL GLSL ES ([0-9]\.[0-9][0-9]?)(?:$| .*)/;
          var _0x5b37ee = _0x4fafe5.match(_0x2d9a40);
          if (_0x5b37ee !== null) {
            if (_0x5b37ee[1].length == 3) {
              _0x5b37ee[1] = _0x5b37ee[1] + "0";
            }
            _0x4fafe5 = "OpenGL ES GLSL ES " + _0x5b37ee[1] + " (" + _0x4fafe5 + ")";
          }
          _0x2938c8 = _0x535219(_0x4fafe5);
          break;
        default:
          _0x47f2e3.recordError(1280);
      }
      _0x47f2e3.stringCache[_0x40c69c] = _0x2938c8;
    }
    return _0x2938c8;
  }
  function _0x3e8280(_0x5aaa41, _0x162bb9) {
    if (_0x47f2e3.currentContext.version < 2) {
      _0x47f2e3.recordError(1282);
      return 0;
    }
    var _0x53c2ac = _0x47f2e3.stringiCache[_0x5aaa41];
    if (_0x53c2ac) {
      if (_0x162bb9 < 0 || _0x162bb9 >= _0x53c2ac.length) {
        _0x47f2e3.recordError(1281);
        return 0;
      }
      return _0x53c2ac[_0x162bb9];
    }
    switch (_0x5aaa41) {
      case 7939:
        var _0x4a82d6 = _0x1ca50b.getSupportedExtensions() || [];
        _0x4a82d6 = _0x4a82d6.concat(_0x4a82d6.map(function (_0xc311c2) {
          return "GL_" + _0xc311c2;
        }));
        _0x4a82d6 = _0x4a82d6.map(function (_0x1ee868) {
          return _0x535219(_0x1ee868);
        });
        _0x53c2ac = _0x47f2e3.stringiCache[_0x5aaa41] = _0x4a82d6;
        if (_0x162bb9 < 0 || _0x162bb9 >= _0x53c2ac.length) {
          _0x47f2e3.recordError(1281);
          return 0;
        }
        return _0x53c2ac[_0x162bb9];
      default:
        _0x47f2e3.recordError(1280);
        return 0;
    }
  }
  function _0x4df475(_0x354d3f, _0x53443e, _0x3951b5) {
    if (!_0x3951b5) {
      _0x47f2e3.recordError(1281);
      return;
    }
    _0x3ea6c9[_0x3951b5 >> 2] = _0x1ca50b.getTexParameter(_0x354d3f, _0x53443e);
  }
  function _0x4baab9(_0x1e4827, _0x4571b0) {
    return _0x1ca50b.getUniformBlockIndex(_0x47f2e3.programs[_0x1e4827], _0x5afdf8(_0x4571b0));
  }
  function _0x5ab210(_0x5920df, _0x1c2c64, _0x48173e, _0xe72ed8) {
    if (!_0xe72ed8) {
      _0x47f2e3.recordError(1281);
      return;
    }
    if (_0x1c2c64 > 0 && (_0x48173e == 0 || _0xe72ed8 == 0)) {
      _0x47f2e3.recordError(1281);
      return;
    }
    _0x5920df = _0x47f2e3.programs[_0x5920df];
    var _0x18c718 = [];
    for (var _0x4198f7 = 0; _0x4198f7 < _0x1c2c64; _0x4198f7++) {
      _0x18c718.push(_0x5afdf8(_0x3ea6c9[_0x48173e + _0x4198f7 * 4 >> 2]));
    }
    var _0x1e3ffb = _0x1ca50b.getUniformIndices(_0x5920df, _0x18c718);
    if (!_0x1e3ffb) {
      return;
    }
    var _0x48d264 = _0x1e3ffb.length;
    for (var _0x4198f7 = 0; _0x4198f7 < _0x48d264; _0x4198f7++) {
      _0x3ea6c9[_0xe72ed8 + _0x4198f7 * 4 >> 2] = _0x1e3ffb[_0x4198f7];
    }
  }
  function _0x47cb1e(_0x509dd0, _0x533277) {
    function _0x428e26(_0x11f8f0) {
      return _0x11f8f0.slice(-1) == "]" && _0x11f8f0.lastIndexOf("[");
    }
    _0x533277 = _0x5afdf8(_0x533277);
    if (_0x509dd0 = _0x47f2e3.programs[_0x509dd0]) {
      var _0x2a8d4c = _0x509dd0.uniformLocsById;
      var _0x5d04f9 = _0x509dd0.uniformSizeAndIdsByName;
      var _0x5e32c0;
      var _0x6d8ba4;
      var _0x1e9070 = 0;
      var _0x4d64ff = _0x533277;
      var _0x16b419 = _0x428e26(_0x533277);
      if (!_0x2a8d4c) {
        _0x509dd0.uniformLocsById = _0x2a8d4c = {};
        _0x509dd0.uniformArrayNamesById = {};
        for (_0x5e32c0 = 0; _0x5e32c0 < _0x1ca50b.getProgramParameter(_0x509dd0, 35718); ++_0x5e32c0) {
          var _0x1f60fb = _0x1ca50b.getActiveUniform(_0x509dd0, _0x5e32c0);
          var _0x5bcf9e = _0x1f60fb.name;
          var _0x2208d0 = _0x1f60fb.size;
          var _0x37f18b = _0x428e26(_0x5bcf9e);
          var _0x4ba954 = _0x37f18b > 0 ? _0x5bcf9e.slice(0, _0x37f18b) : _0x5bcf9e;
          var _0x1df6d7 = _0x5d04f9[_0x4ba954] ? _0x5d04f9[_0x4ba954][1] : _0x509dd0.uniformIdCounter;
          _0x509dd0.uniformIdCounter = Math.max(_0x1df6d7 + _0x2208d0, _0x509dd0.uniformIdCounter);
          _0x5d04f9[_0x4ba954] = [_0x2208d0, _0x1df6d7];
          for (_0x6d8ba4 = 0; _0x6d8ba4 < _0x2208d0; ++_0x6d8ba4) {
            _0x2a8d4c[_0x1df6d7] = _0x6d8ba4;
            _0x509dd0.uniformArrayNamesById[_0x1df6d7++] = _0x4ba954;
          }
        }
      }
      if (_0x16b419 > 0) {
        _0x1e9070 = _0x1a002b(_0x533277.slice(_0x16b419 + 1)) >>> 0;
        _0x4d64ff = _0x533277.slice(0, _0x16b419);
      }
      var _0x17604c = _0x5d04f9[_0x4d64ff];
      if (_0x17604c && _0x1e9070 < _0x17604c[0]) {
        _0x1e9070 += _0x17604c[1];
        if (_0x2a8d4c[_0x1e9070] = _0x2a8d4c[_0x1e9070] || _0x1ca50b.getUniformLocation(_0x509dd0, _0x533277)) {
          return _0x1e9070;
        }
      }
    } else {
      _0x47f2e3.recordError(1281);
    }
    return -1;
  }
  function _0x1cedbe(_0x23dd21) {
    var _0x4eea4e = _0x1ca50b.currentProgram;
    if (_0x4eea4e) {
      var _0x462d52 = _0x4eea4e.uniformLocsById[_0x23dd21];
      if (typeof _0x462d52 === "number") {
        _0x4eea4e.uniformLocsById[_0x23dd21] = _0x462d52 = _0x1ca50b.getUniformLocation(_0x4eea4e, _0x4eea4e.uniformArrayNamesById[_0x23dd21] + (_0x462d52 > 0 ? "[" + _0x462d52 + "]" : ""));
      }
      return _0x462d52;
    } else {
      _0x47f2e3.recordError(1282);
    }
  }
  function _0x30838b(_0x9d2ac3, _0x27c966, _0x2807c6, _0x51cbd4) {
    if (!_0x2807c6) {
      _0x47f2e3.recordError(1281);
      return;
    }
    _0x9d2ac3 = _0x47f2e3.programs[_0x9d2ac3];
    var _0xb7fd38 = _0x1ca50b.getUniform(_0x9d2ac3, _0x1cedbe(_0x27c966));
    if (typeof _0xb7fd38 == "number" || typeof _0xb7fd38 == "boolean") {
      switch (_0x51cbd4) {
        case 0:
          _0x3ea6c9[_0x2807c6 >> 2] = _0xb7fd38;
          break;
        case 2:
          _0x3787f7[_0x2807c6 >> 2] = _0xb7fd38;
          break;
      }
    } else {
      for (var _0x31f46c = 0; _0x31f46c < _0xb7fd38.length; _0x31f46c++) {
        switch (_0x51cbd4) {
          case 0:
            _0x3ea6c9[_0x2807c6 + _0x31f46c * 4 >> 2] = _0xb7fd38[_0x31f46c];
            break;
          case 2:
            _0x3787f7[_0x2807c6 + _0x31f46c * 4 >> 2] = _0xb7fd38[_0x31f46c];
            break;
        }
      }
    }
  }
  function _0x4e3c17(_0x5bcc85, _0x390b2a, _0x3068bd) {
    _0x30838b(_0x5bcc85, _0x390b2a, _0x3068bd, 0);
  }
  function _0x109597(_0x160ea5, _0xdbfb06, _0x555533, _0x2f6154) {
    if (!_0x555533) {
      _0x47f2e3.recordError(1281);
      return;
    }
    if (_0x47f2e3.currentContext.clientBuffers[_0x160ea5].enabled) {
      _0x266425("glGetVertexAttrib*v on client-side array: not supported, bad data returned");
    }
    var _0x473770 = _0x1ca50b.getVertexAttrib(_0x160ea5, _0xdbfb06);
    if (_0xdbfb06 == 34975) {
      _0x3ea6c9[_0x555533 >> 2] = _0x473770 && _0x473770.name;
    } else if (typeof _0x473770 == "number" || typeof _0x473770 == "boolean") {
      switch (_0x2f6154) {
        case 0:
          _0x3ea6c9[_0x555533 >> 2] = _0x473770;
          break;
        case 2:
          _0x3787f7[_0x555533 >> 2] = _0x473770;
          break;
        case 5:
          _0x3ea6c9[_0x555533 >> 2] = Math.fround(_0x473770);
          break;
      }
    } else {
      for (var _0x5372cf = 0; _0x5372cf < _0x473770.length; _0x5372cf++) {
        switch (_0x2f6154) {
          case 0:
            _0x3ea6c9[_0x555533 + _0x5372cf * 4 >> 2] = _0x473770[_0x5372cf];
            break;
          case 2:
            _0x3787f7[_0x555533 + _0x5372cf * 4 >> 2] = _0x473770[_0x5372cf];
            break;
          case 5:
            _0x3ea6c9[_0x555533 + _0x5372cf * 4 >> 2] = Math.fround(_0x473770[_0x5372cf]);
            break;
        }
      }
    }
  }
  function _0xc95ece(_0x2219fc, _0x2e9e00, _0x4a89f8) {
    _0x109597(_0x2219fc, _0x2e9e00, _0x4a89f8, 5);
  }
  function _0x1197a2(_0x6c2a21, _0x40d608, _0x4e4b28) {
    var _0x94296e = _0x1a2b78[_0x40d608];
    for (var _0xc0f404 = 0; _0xc0f404 < _0x40d608; _0xc0f404++) {
      _0x94296e[_0xc0f404] = _0x3ea6c9[_0x4e4b28 + _0xc0f404 * 4 >> 2];
    }
    _0x1ca50b.invalidateFramebuffer(_0x6c2a21, _0x94296e);
  }
  function _0x2ac1cf(_0x57cece) {
    return _0x1ca50b.isEnabled(_0x57cece);
  }
  function _0x2b1493(_0x5826cd) {
    var _0x63dc7a = _0x47f2e3.vaos[_0x5826cd];
    if (!_0x63dc7a) {
      return 0;
    }
    return _0x1ca50b.isVertexArray(_0x63dc7a);
  }
  function _0x48dbea(_0x2e961c) {
    _0x2e961c = _0x47f2e3.programs[_0x2e961c];
    _0x1ca50b.linkProgram(_0x2e961c);
    _0x2e961c.uniformLocsById = 0;
    _0x2e961c.uniformSizeAndIdsByName = {};
    [_0x2e961c.vs, _0x2e961c.fs].forEach(function (_0x390808) {
      Object.keys(_0x390808.explicitUniformLocations).forEach(function (_0x281515) {
        var _0x11680f = _0x390808.explicitUniformLocations[_0x281515];
        _0x2e961c.uniformSizeAndIdsByName[_0x281515] = [1, _0x11680f];
        _0x2e961c.uniformIdCounter = Math.max(_0x2e961c.uniformIdCounter, _0x11680f + 1);
      });
    });
    function _0x4e6f91(_0x502eb2, _0x3057f0) {
      Object.keys(_0x3057f0).forEach(function (_0x164c10) {
        _0x502eb2[_0x164c10] = _0x3057f0[_0x164c10];
      });
    }
    _0x2e961c.explicitUniformBindings = {};
    _0x2e961c.explicitSamplerBindings = {};
    [_0x2e961c.vs, _0x2e961c.fs].forEach(function (_0x2efbfa) {
      _0x4e6f91(_0x2e961c.explicitUniformBindings, _0x2efbfa.explicitUniformBindings);
      _0x4e6f91(_0x2e961c.explicitSamplerBindings, _0x2efbfa.explicitSamplerBindings);
    });
    _0x2e961c.explicitProgramBindingsApplied = 0;
  }
  function _0x269d18(_0x5db322, _0x1d22b5, _0x556882, _0x51667b) {
    if (_0x51667b != 26 && _0x51667b != 10) {
      _0x266425("glMapBufferRange is only supported when access is MAP_WRITE|INVALIDATE_BUFFER");
      return 0;
    }
    if (!_0x384d88(_0x5db322)) {
      _0x47f2e3.recordError(1280);
      _0x266425("GL_INVALID_ENUM in glMapBufferRange");
      return 0;
    }
    var _0x311985 = _0x311afe(_0x556882);
    if (!_0x311985) {
      return 0;
    }
    _0x47f2e3.mappedBuffers[_0x184098(_0x5db322)] = {
      offset: _0x1d22b5,
      length: _0x556882,
      mem: _0x311985,
      access: _0x51667b
    };
    return _0x311985;
  }
  function _0x41ca0f(_0x10e7ae, _0x18ce47) {
    if (_0x10e7ae == 3317) {
      _0x47f2e3.unpackAlignment = _0x18ce47;
    }
    _0x1ca50b.pixelStorei(_0x10e7ae, _0x18ce47);
  }
  function _0x17ae0b(_0x273f60, _0x4908b1) {
    _0x1ca50b.polygonOffset(_0x273f60, _0x4908b1);
  }
  function _0xeca127(_0x2c5adb, _0x38275e, _0x29463d, _0x1bfdfe) {
    _0x47f2e3.recordError(1280);
  }
  function _0x2c849a(_0x2ce77a, _0x293dfe, _0x4d4dd7) {
    _0x47f2e3.recordError(1280);
  }
  function _0x334749(_0x25c229) {
    _0x1ca50b.readBuffer(_0x25c229);
  }
  function _0x3ace4b(_0x23ed4c, _0x1e42f5, _0x323a08, _0x145f48) {
    function _0x575aaa(_0x2e1722, _0x4fde78) {
      return _0x2e1722 + _0x4fde78 - 1 & -_0x4fde78;
    }
    var _0x17328a = _0x23ed4c * _0x323a08;
    var _0x182016 = _0x575aaa(_0x17328a, _0x145f48);
    return _0x1e42f5 * _0x182016;
  }
  function _0x7a36d6(_0x56f706) {
    var _0x161d0c = {
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
    return _0x161d0c[_0x56f706 - 6402] || 1;
  }
  function _0x1e4f01(_0x574a48) {
    _0x574a48 -= 5120;
    if (_0x574a48 == 0) {
      return _0x410af5;
    }
    if (_0x574a48 == 1) {
      return _0x10abe1;
    }
    if (_0x574a48 == 2) {
      return _0x1f1f2c;
    }
    if (_0x574a48 == 4) {
      return _0x3ea6c9;
    }
    if (_0x574a48 == 6) {
      return _0x3787f7;
    }
    if (_0x574a48 == 5 || _0x574a48 == 28922 || _0x574a48 == 28520 || _0x574a48 == 30779 || _0x574a48 == 30782) {
      return _0x3e0b02;
    }
    return _0x286a74;
  }
  function _0x1f481c(_0x39a2a9) {
    return 31 - Math.clz32(_0x39a2a9.BYTES_PER_ELEMENT);
  }
  function _0x3f6364(_0x1110fa, _0x5df4ee, _0x9152c5, _0x3021cd, _0x2c119a, _0x5e718f) {
    var _0x317dff = _0x1e4f01(_0x1110fa);
    var _0x371310 = _0x1f481c(_0x317dff);
    var _0x3df215 = 1 << _0x371310;
    var _0x5832e1 = _0x7a36d6(_0x5df4ee) * _0x3df215;
    var _0x2e9e25 = _0x3ace4b(_0x9152c5, _0x3021cd, _0x5832e1, _0x47f2e3.unpackAlignment);
    return _0x317dff.subarray(_0x2c119a >> _0x371310, _0x2c119a + _0x2e9e25 >> _0x371310);
  }
  function _0x37b633(_0x307977, _0xe04c50, _0x514c32, _0x3e402c, _0x11a41b, _0x80235f, _0x13df3a) {
    if (_0x47f2e3.currentContext.version >= 2) {
      if (_0x1ca50b.currentPixelPackBufferBinding) {
        _0x1ca50b.readPixels(_0x307977, _0xe04c50, _0x514c32, _0x3e402c, _0x11a41b, _0x80235f, _0x13df3a);
      } else {
        var _0x46f1b1 = _0x1e4f01(_0x80235f);
        _0x1ca50b.readPixels(_0x307977, _0xe04c50, _0x514c32, _0x3e402c, _0x11a41b, _0x80235f, _0x46f1b1, _0x13df3a >> _0x1f481c(_0x46f1b1));
      }
      return;
    }
    var _0x5e8996 = _0x3f6364(_0x80235f, _0x11a41b, _0x514c32, _0x3e402c, _0x13df3a, _0x11a41b);
    if (!_0x5e8996) {
      _0x47f2e3.recordError(1280);
      return;
    }
    _0x1ca50b.readPixels(_0x307977, _0xe04c50, _0x514c32, _0x3e402c, _0x11a41b, _0x80235f, _0x5e8996);
  }
  function _0x4e3add(_0x3b8ef5, _0x305165, _0x3002ae, _0x31297c) {
    _0x1ca50b.renderbufferStorage(_0x3b8ef5, _0x305165, _0x3002ae, _0x31297c);
  }
  function _0x56fb50(_0x16ae35, _0x3be57a, _0x53af51, _0x1c8f68, _0x38e075) {
    _0x1ca50b.renderbufferStorageMultisample(_0x16ae35, _0x3be57a, _0x53af51, _0x1c8f68, _0x38e075);
  }
  function _0x5a21d9(_0x548bd5, _0x342097, _0x4d4fc9) {
    _0x1ca50b.samplerParameteri(_0x47f2e3.samplers[_0x548bd5], _0x342097, _0x4d4fc9);
  }
  function _0x46d372(_0xf9b803, _0x5895ce, _0x111f19, _0x50eeb1) {
    _0x1ca50b.scissor(_0xf9b803, _0x5895ce, _0x111f19, _0x50eeb1);
  }
  function _0x46975e(_0xe0fd9d, _0x1af4a7, _0x58ee07 = "(", _0x5e7933 = ")") {
    var _0x48d94f = 0;
    for (; _0x1af4a7 < _0xe0fd9d.length; ++_0x1af4a7) {
      if (_0xe0fd9d[_0x1af4a7] == _0x58ee07) {
        ++_0x48d94f;
      }
      if (_0xe0fd9d[_0x1af4a7] == _0x5e7933 && --_0x48d94f == 0) {
        return _0x1af4a7;
      }
    }
  }
  function _0x3676f8(_0x310881) {
    var _0x2930c5 = 0;
    var _0x2426e5 = _0x310881.length;
    var _0x400eb5 = "";
    var _0x25b6be = [1];
    var _0x400f83 = {
      defined: function (_0x16e72b) {
        if (_0x400f83[_0x16e72b[0]]) {
          return 1;
        } else {
          return 0;
        }
      },
      GL_FRAGMENT_PRECISION_HIGH: function () {
        return 1;
      }
    };
    function _0xfed74a(_0x5a38c4, _0x25c49d) {
      return !(_0x5a38c4.charCodeAt(_0x25c49d) > 32);
    }
    function _0x10afd5(_0x4b6d5e, _0x18abb0) {
      while (!_0xfed74a(_0x4b6d5e, _0x18abb0)) {
        ++_0x18abb0;
      }
      return _0x18abb0;
    }
    function _0x817187(_0x5417af, _0x23dff5) {
      var _0x1bea02 = _0x5417af.charCodeAt(_0x23dff5);
      if (_0x1bea02 > 32) {
        if (_0x1bea02 < 48) {
          return 1;
        }
        if (_0x1bea02 < 58) {
          return 2;
        }
        if (_0x1bea02 < 65) {
          return 1;
        }
        if (_0x1bea02 < 91 || _0x1bea02 == 95) {
          return 3;
        }
        if (_0x1bea02 < 97) {
          return 1;
        }
        if (_0x1bea02 < 123) {
          return 3;
        }
        return 1;
      }
      if (_0x1bea02 < 33) {
        return 0;
      } else {
        return 4;
      }
    }
    function _0x13061f(_0x24adca, _0x2fb4ff) {
      var _0x145fa7 = [];
      var _0x44f40d = _0x24adca.length;
      for (var _0x5cd6ba = 0; _0x5cd6ba <= _0x44f40d; ++_0x5cd6ba) {
        var _0x22cb3f = _0x817187(_0x24adca, _0x5cd6ba);
        if (_0x22cb3f == 2 || _0x22cb3f == 3) {
          for (var _0x134dec = _0x5cd6ba + 1; _0x134dec <= _0x44f40d; ++_0x134dec) {
            var _0x3553c8 = _0x817187(_0x24adca, _0x134dec);
            if (_0x3553c8 != _0x22cb3f && (_0x3553c8 != 2 || _0x22cb3f != 3)) {
              _0x145fa7.push(_0x24adca.substring(_0x5cd6ba, _0x134dec));
              _0x5cd6ba = _0x134dec - 1;
              break;
            }
          }
        } else if (_0x22cb3f == 1) {
          var _0x4b312e = _0x24adca.substr(_0x5cd6ba, 2);
          if (["<=", ">=", "==", "!=", "&&", "||"].includes(_0x4b312e)) {
            _0x145fa7.push(_0x4b312e);
            ++_0x5cd6ba;
          } else {
            _0x145fa7.push(_0x24adca[_0x5cd6ba]);
          }
        }
      }
      return _0x145fa7;
    }
    function _0x192e8c(_0x4c7878, _0x36fbcf, _0x83336c = _0x4c7878.length) {
      var _0x1dfd6e = _0x4c7878.length;
      var _0x248a30 = "";
      for (var _0x3e8d21 = _0x36fbcf; _0x3e8d21 < _0x83336c; ++_0x3e8d21) {
        var _0x8e9a3 = _0x817187(_0x4c7878, _0x3e8d21);
        if (_0x8e9a3 == 3) {
          for (var _0x41a4e6 = _0x3e8d21 + 1; _0x41a4e6 <= _0x83336c; ++_0x41a4e6) {
            var _0x3905de = _0x817187(_0x4c7878, _0x41a4e6);
            if (_0x3905de != 2 && _0x3905de != 3) {
              var _0x499708 = _0x4c7878.substring(_0x3e8d21, _0x41a4e6);
              var _0x5e684a = _0x400f83[_0x499708];
              if (_0x5e684a) {
                var _0x484f62 = _0x4c7878.substring(_0x36fbcf, _0x3e8d21);
                if (_0x5e684a.length && _0x4c7878[_0x41a4e6] == "(") {
                  var _0x5f8f0b = _0x46975e(_0x4c7878, _0x41a4e6);
                  _0x484f62 += _0x5e684a(_0x4c7878.substring(_0x41a4e6 + 1, _0x5f8f0b).split(",")) + _0x4c7878.substring(_0x5f8f0b + 1, _0x83336c);
                } else {
                  _0x484f62 += _0x5e684a() + _0x4c7878.substring(_0x41a4e6, _0x83336c);
                }
                return _0x192e8c(_0x484f62, 0);
              } else {
                _0x248a30 += _0x499708;
                _0x3e8d21 = _0x41a4e6 - 1;
                break;
              }
            }
          }
        } else {
          _0x248a30 += _0x4c7878[_0x3e8d21];
        }
      }
      return _0x248a30;
    }
    function _0x2bdb69(_0x4e313a) {
      while (_0x4e313a.length > 1 || typeof _0x4e313a[0] != "function") {
        _0x4e313a = function (_0x315af4) {
          var _0x2464b7;
          var _0x492fe7;
          var _0x511ed3;
          var _0xed52cb = -2;
          for (_0x492fe7 = 0; _0x492fe7 < _0x315af4.length; ++_0x492fe7) {
            if ((_0x511ed3 = ["*", "/", "+", "-", "!", "<", "<=", ">", ">=", "==", "!=", "&&", "||", "("].indexOf(_0x315af4[_0x492fe7])) > _0xed52cb) {
              _0x2464b7 = _0x492fe7;
              _0xed52cb = _0x511ed3;
            }
          }
          if (_0xed52cb == 13) {
            var _0x492fe7 = _0x46975e(_0x315af4, _0x2464b7);
            if (_0x492fe7) {
              _0x315af4.splice(_0x2464b7, _0x492fe7 + 1 - _0x2464b7, _0x2bdb69(_0x315af4.slice(_0x2464b7 + 1, _0x492fe7)));
              return _0x315af4;
            }
          }
          if (_0xed52cb == 4) {
            _0x2464b7 = _0x315af4.lastIndexOf("!");
            var _0x23b5da = _0x2bdb69(_0x315af4.slice(_0x2464b7 + 1, _0x2464b7 + 2));
            _0x315af4.splice(_0x2464b7, 2, function () {
              return !_0x23b5da();
            });
            return _0x315af4;
          }
          if (_0xed52cb >= 0) {
            var _0x24efc6 = _0x2bdb69(_0x315af4.slice(0, _0x2464b7));
            var _0x3e678a = _0x2bdb69(_0x315af4.slice(_0x2464b7 + 1));
            switch (_0x315af4[_0x2464b7]) {
              case "&&":
                return [function () {
                  return _0x24efc6() && _0x3e678a();
                }];
              case "||":
                return [function () {
                  return _0x24efc6() || _0x3e678a();
                }];
              case "==":
                return [function () {
                  return _0x24efc6() == _0x3e678a();
                }];
              case "!=":
                return [function () {
                  return _0x24efc6() != _0x3e678a();
                }];
              case "<":
                return [function () {
                  return _0x24efc6() < _0x3e678a();
                }];
              case "<=":
                return [function () {
                  return _0x24efc6() <= _0x3e678a();
                }];
              case ">":
                return [function () {
                  return _0x24efc6() > _0x3e678a();
                }];
              case ">=":
                return [function () {
                  return _0x24efc6() >= _0x3e678a();
                }];
              case "+":
                return [function () {
                  return _0x24efc6() + _0x3e678a();
                }];
              case "-":
                return [function () {
                  return _0x24efc6() - _0x3e678a();
                }];
              case "*":
                return [function () {
                  return _0x24efc6() * _0x3e678a();
                }];
              case "/":
                return [function () {
                  return Math.floor(_0x24efc6() / _0x3e678a());
                }];
            }
          }
          var _0x3f8bd2 = _0x1a002b(_0x315af4[_0x2464b7]);
          return [function () {
            return _0x3f8bd2;
          }];
        }(_0x4e313a);
      }
      return _0x4e313a[0];
    }
    for (; _0x2930c5 < _0x2426e5; ++_0x2930c5) {
      var _0x571fbe = _0x2930c5;
      _0x2930c5 = _0x310881.indexOf("\n", _0x2930c5);
      if (_0x2930c5 < 0) {
        _0x2930c5 = _0x2426e5;
      }
      for (var _0x1af04b = _0x571fbe; _0x1af04b < _0x2930c5 && _0xfed74a(_0x310881, _0x1af04b); ++_0x1af04b);
      var _0x171bf6 = _0x25b6be[_0x25b6be.length - 1];
      if (_0x310881[_0x1af04b] != "#") {
        if (_0x171bf6) {
          _0x400eb5 += _0x192e8c(_0x310881, _0x571fbe, _0x2930c5) + "\n";
        }
        continue;
      }
      var _0x5e4d76 = _0x10afd5(_0x310881, _0x1af04b);
      var _0x4b9168 = _0x310881.substring(_0x1af04b + 1, _0x5e4d76);
      var _0x5afb13 = _0x310881.substring(_0x5e4d76, _0x2930c5).trim();
      switch (_0x4b9168) {
        case "if":
          var _0x59f208 = _0x13061f(_0x192e8c(_0x5afb13, 0));
          var _0x41f574 = _0x2bdb69(_0x59f208);
          var _0x34800c = _0x41f574();
          _0x25b6be.push(!!_0x34800c * _0x25b6be[_0x25b6be.length - 1]);
          break;
        case "ifdef":
          _0x25b6be.push(!!_0x400f83[_0x5afb13] * _0x25b6be[_0x25b6be.length - 1]);
          break;
        case "ifndef":
          _0x25b6be.push(!_0x400f83[_0x5afb13] * _0x25b6be[_0x25b6be.length - 1]);
          break;
        case "else":
          _0x25b6be[_0x25b6be.length - 1] = 1 - _0x25b6be[_0x25b6be.length - 1];
          break;
        case "endif":
          _0x25b6be.pop();
          break;
        case "define":
          if (_0x171bf6) {
            var _0x238268 = _0x5afb13.indexOf("(");
            var _0x50d1f6 = _0x10afd5(_0x5afb13, 0);
            if (_0x50d1f6 < _0x238268) {
              _0x238268 = 0;
            }
            if (_0x238268 > 0) {
              var _0x28d41b = _0x5afb13.indexOf(")", _0x238268);
              let _0x1fcec2 = _0x5afb13.substring(_0x238268 + 1, _0x28d41b).split(",").map(_0x390d79 => _0x390d79.trim());
              let _0x3859ab = _0x13061f(_0x5afb13.substring(_0x28d41b + 1).trim());
              _0x400f83[_0x5afb13.substring(0, _0x238268)] = function (_0x327c9a) {
                var _0x23c2e9 = "";
                _0x3859ab.forEach(_0x53003b => {
                  var _0x542799 = _0x1fcec2.indexOf(_0x53003b);
                  _0x23c2e9 += _0x542799 >= 0 ? _0x327c9a[_0x542799] : _0x53003b;
                });
                return _0x23c2e9;
              };
            } else {
              let _0x3d3d36 = _0x192e8c(_0x5afb13.substring(_0x50d1f6 + 1).trim(), 0);
              _0x400f83[_0x5afb13.substring(0, _0x50d1f6)] = function () {
                return _0x3d3d36;
              };
            }
          }
          break;
        case "undef":
          if (_0x171bf6) {
            delete _0x400f83[_0x5afb13];
          }
          break;
        default:
          if (_0x4b9168 != "version" && _0x4b9168 != "pragma" && _0x4b9168 != "extension") {}
          _0x400eb5 += _0x192e8c(_0x310881, _0x571fbe, _0x2930c5) + "\n";
      }
    }
    return _0x400eb5;
  }
  function _0x3740d4(_0x1ef3e1) {
    var _0x1fec98 = 0;
    var _0xb617d0 = "";
    var _0x3e09eb;
    var _0x48faed;
    var _0x5953ce = _0x1ef3e1.length;
    for (; _0x1fec98 < _0x5953ce; ++_0x1fec98) {
      _0x3e09eb = _0x1ef3e1[_0x1fec98];
      if (_0x3e09eb == "/") {
        _0x48faed = _0x1ef3e1[_0x1fec98 + 1];
        if (_0x48faed == "/") {
          while (_0x1fec98 < _0x5953ce && _0x1ef3e1[_0x1fec98 + 1] != "\n") {
            ++_0x1fec98;
          }
        } else if (_0x48faed == "*") {
          while (_0x1fec98 < _0x5953ce && (_0x1ef3e1[_0x1fec98 - 1] != "*" || _0x1ef3e1[_0x1fec98] != "/")) {
            ++_0x1fec98;
          }
        } else {
          _0xb617d0 += _0x3e09eb;
        }
      } else {
        _0xb617d0 += _0x3e09eb;
      }
    }
    return _0xb617d0;
  }
  function _0x2ff6e3(_0x508e62, _0x2cbd2d, _0x4dc591, _0x406bf6) {
    var _0x17f51e = _0x47f2e3.getSource(_0x508e62, _0x2cbd2d, _0x4dc591, _0x406bf6);
    _0x17f51e = _0x3676f8(_0x3740d4(_0x17f51e));
    var _0xc11ff2 = /layout\s*\(\s*location\s*=\s*(-?\d+)\s*\)\s*(uniform\s+((lowp|mediump|highp)\s+)?\w+\s+(\w+))/g;
    var _0x10c058 = {};
    var _0x5c74a9;
    while (_0x5c74a9 = _0xc11ff2.exec(_0x17f51e)) {
      _0x10c058[_0x5c74a9[5]] = _0x1a002b(_0x5c74a9[1]);
      if (!(_0x10c058[_0x5c74a9[5]] >= 0) || !(_0x10c058[_0x5c74a9[5]] < 1048576)) {
        console.error("Specified an out of range layout(location=x) directive \"" + _0x10c058[_0x5c74a9[5]] + "\"! (" + _0x5c74a9[0] + ")");
        _0x47f2e3.recordError(1281);
        return;
      }
    }
    _0x17f51e = _0x17f51e.replace(_0xc11ff2, "$2");
    _0x47f2e3.shaders[_0x508e62].explicitUniformLocations = _0x10c058;
    var _0x3a66d9 = /layout\s*\(.*?binding\s*=\s*(-?\d+).*?\)\s*uniform\s+(\w+)\s+(\w+)?/g;
    var _0x5bf926 = {};
    var _0x264cda = {};
    var _0x53eaf8;
    while (_0x53eaf8 = _0x3a66d9.exec(_0x17f51e)) {
      var _0x13ce77 = 1;
      for (var _0x4ef69a = _0x53eaf8.index; _0x4ef69a < _0x17f51e.length && _0x17f51e[_0x4ef69a] != ";"; ++_0x4ef69a) {
        if (_0x17f51e[_0x4ef69a] == "[") {
          _0x13ce77 = _0x1a002b(_0x17f51e.slice(_0x4ef69a + 1));
          break;
        }
        if (_0x17f51e[_0x4ef69a] == "{") {
          _0x4ef69a = _0x46975e(_0x17f51e, _0x4ef69a, "{", "}") - 1;
        }
      }
      var _0x4121fe = _0x1a002b(_0x53eaf8[1]);
      var _0xd8e5a0 = 34930;
      if (_0x53eaf8[3] && _0x53eaf8[2].indexOf("sampler") != -1) {
        _0x5bf926[_0x53eaf8[3]] = [_0x4121fe, _0x13ce77];
      } else {
        _0xd8e5a0 = 35374;
        _0x264cda[_0x53eaf8[2]] = [_0x4121fe, _0x13ce77];
      }
      var _0x2fdf2d = _0x1ca50b.getParameter(_0xd8e5a0);
      if (!(_0x4121fe >= 0) || !(_0x4121fe + _0x13ce77 <= _0x2fdf2d)) {
        console.error("Specified an out of range layout(binding=x) directive \"" + _0x4121fe + "\"! (" + _0x53eaf8[0] + "). Valid range is [0, " + _0x2fdf2d + "-1]");
        _0x47f2e3.recordError(1281);
        return;
      }
    }
    _0x17f51e = _0x17f51e.replace(/layout\s*\(.*?binding\s*=\s*([-\d]+).*?\)/g, "");
    _0x17f51e = _0x17f51e.replace(/(layout\s*\((.*?)),\s*binding\s*=\s*([-\d]+)\)/g, "$1)");
    _0x17f51e = _0x17f51e.replace(/layout\s*\(\s*binding\s*=\s*([-\d]+)\s*,(.*?)\)/g, "layout($2)");
    _0x47f2e3.shaders[_0x508e62].explicitSamplerBindings = _0x5bf926;
    _0x47f2e3.shaders[_0x508e62].explicitUniformBindings = _0x264cda;
    _0x1ca50b.shaderSource(_0x47f2e3.shaders[_0x508e62], _0x17f51e);
  }
  function _0x4c56bb(_0x147290, _0x5b798b, _0x3a100d, _0x38a528) {
    _0x1ca50b.stencilFuncSeparate(_0x147290, _0x5b798b, _0x3a100d, _0x38a528);
  }
  function _0x496274(_0x1bbb57) {
    _0x1ca50b.stencilMask(_0x1bbb57);
  }
  function _0x124d41(_0x1edf84, _0x1b514f, _0x29fa34, _0x12b9aa) {
    _0x1ca50b.stencilOpSeparate(_0x1edf84, _0x1b514f, _0x29fa34, _0x12b9aa);
  }
  function _0x350b64(_0x288c66, _0x2fbcfd, _0x355d13, _0x58db3c, _0x5b0b06, _0x22f998, _0x123fa2, _0x18bf09, _0xc8d16a) {
    if (_0x47f2e3.currentContext.version >= 2) {
      if (_0x1ca50b.currentPixelUnpackBufferBinding) {
        _0x1ca50b.texImage2D(_0x288c66, _0x2fbcfd, _0x355d13, _0x58db3c, _0x5b0b06, _0x22f998, _0x123fa2, _0x18bf09, _0xc8d16a);
      } else if (_0xc8d16a) {
        var _0x9d477d = _0x1e4f01(_0x18bf09);
        _0x1ca50b.texImage2D(_0x288c66, _0x2fbcfd, _0x355d13, _0x58db3c, _0x5b0b06, _0x22f998, _0x123fa2, _0x18bf09, _0x9d477d, _0xc8d16a >> _0x1f481c(_0x9d477d));
      } else {
        _0x1ca50b.texImage2D(_0x288c66, _0x2fbcfd, _0x355d13, _0x58db3c, _0x5b0b06, _0x22f998, _0x123fa2, _0x18bf09, null);
      }
      return;
    }
    _0x1ca50b.texImage2D(_0x288c66, _0x2fbcfd, _0x355d13, _0x58db3c, _0x5b0b06, _0x22f998, _0x123fa2, _0x18bf09, _0xc8d16a ? _0x3f6364(_0x18bf09, _0x123fa2, _0x58db3c, _0x5b0b06, _0xc8d16a, _0x355d13) : null);
  }
  function _0x2278ce(_0x55e822, _0x16226f, _0x4d08df, _0x465a11, _0x152586, _0x56f589, _0x21a29d, _0x26a3ac, _0x5b5a97, _0x41616f) {
    if (_0x1ca50b.currentPixelUnpackBufferBinding) {
      _0x1ca50b.texImage3D(_0x55e822, _0x16226f, _0x4d08df, _0x465a11, _0x152586, _0x56f589, _0x21a29d, _0x26a3ac, _0x5b5a97, _0x41616f);
    } else if (_0x41616f) {
      var _0x1792e1 = _0x1e4f01(_0x5b5a97);
      _0x1ca50b.texImage3D(_0x55e822, _0x16226f, _0x4d08df, _0x465a11, _0x152586, _0x56f589, _0x21a29d, _0x26a3ac, _0x5b5a97, _0x1792e1, _0x41616f >> _0x1f481c(_0x1792e1));
    } else {
      _0x1ca50b.texImage3D(_0x55e822, _0x16226f, _0x4d08df, _0x465a11, _0x152586, _0x56f589, _0x21a29d, _0x26a3ac, _0x5b5a97, null);
    }
  }
  function _0x807462(_0x61a3c5, _0x108166, _0x81eae2) {
    _0x1ca50b.texParameterf(_0x61a3c5, _0x108166, _0x81eae2);
  }
  function _0x10546e(_0x22be73, _0x2fe13f, _0x29c664) {
    _0x1ca50b.texParameteri(_0x22be73, _0x2fe13f, _0x29c664);
  }
  function _0x44a88b(_0x1e4228, _0x41c021, _0x2ed2b6) {
    var _0x5b3f70 = _0x3ea6c9[_0x2ed2b6 >> 2];
    _0x1ca50b.texParameteri(_0x1e4228, _0x41c021, _0x5b3f70);
  }
  function _0x119994(_0x13a57f, _0x51d04d, _0x43b0ba, _0x468e13, _0x348838) {
    _0x1ca50b.texStorage2D(_0x13a57f, _0x51d04d, _0x43b0ba, _0x468e13, _0x348838);
  }
  function _0x2df724(_0x405ab3, _0x7f2f63, _0x47f6a5, _0x122e3a, _0x48ec8f, _0x39469e) {
    _0x1ca50b.texStorage3D(_0x405ab3, _0x7f2f63, _0x47f6a5, _0x122e3a, _0x48ec8f, _0x39469e);
  }
  function _0x286ae0(_0x30f1ab, _0xf7b875, _0x57a13c, _0x1ae56c, _0x4bf648, _0x3007a8, _0x172343, _0x7e6720, _0x3969e3) {
    if (_0x47f2e3.currentContext.version >= 2) {
      if (_0x1ca50b.currentPixelUnpackBufferBinding) {
        _0x1ca50b.texSubImage2D(_0x30f1ab, _0xf7b875, _0x57a13c, _0x1ae56c, _0x4bf648, _0x3007a8, _0x172343, _0x7e6720, _0x3969e3);
      } else if (_0x3969e3) {
        var _0x552c9c = _0x1e4f01(_0x7e6720);
        _0x1ca50b.texSubImage2D(_0x30f1ab, _0xf7b875, _0x57a13c, _0x1ae56c, _0x4bf648, _0x3007a8, _0x172343, _0x7e6720, _0x552c9c, _0x3969e3 >> _0x1f481c(_0x552c9c));
      } else {
        _0x1ca50b.texSubImage2D(_0x30f1ab, _0xf7b875, _0x57a13c, _0x1ae56c, _0x4bf648, _0x3007a8, _0x172343, _0x7e6720, null);
      }
      return;
    }
    var _0x576239 = null;
    if (_0x3969e3) {
      _0x576239 = _0x3f6364(_0x7e6720, _0x172343, _0x4bf648, _0x3007a8, _0x3969e3, 0);
    }
    _0x1ca50b.texSubImage2D(_0x30f1ab, _0xf7b875, _0x57a13c, _0x1ae56c, _0x4bf648, _0x3007a8, _0x172343, _0x7e6720, _0x576239);
  }
  function _0x2ffbf4(_0x1833cf, _0x560c66, _0x3171b9, _0x1abf82, _0x419f3d, _0x43af47, _0xbdf08f, _0x43c2fa, _0xb727d4, _0x433142, _0x281693) {
    if (_0x1ca50b.currentPixelUnpackBufferBinding) {
      _0x1ca50b.texSubImage3D(_0x1833cf, _0x560c66, _0x3171b9, _0x1abf82, _0x419f3d, _0x43af47, _0xbdf08f, _0x43c2fa, _0xb727d4, _0x433142, _0x281693);
    } else if (_0x281693) {
      var _0x53e380 = _0x1e4f01(_0x433142);
      _0x1ca50b.texSubImage3D(_0x1833cf, _0x560c66, _0x3171b9, _0x1abf82, _0x419f3d, _0x43af47, _0xbdf08f, _0x43c2fa, _0xb727d4, _0x433142, _0x53e380, _0x281693 >> _0x1f481c(_0x53e380));
    } else {
      _0x1ca50b.texSubImage3D(_0x1833cf, _0x560c66, _0x3171b9, _0x1abf82, _0x419f3d, _0x43af47, _0xbdf08f, _0x43c2fa, _0xb727d4, _0x433142, null);
    }
  }
  function _0x29f164(_0x1156e2, _0x2aa7fd, _0x484ec6, _0x5151a0) {
    _0x1156e2 = _0x47f2e3.programs[_0x1156e2];
    var _0x393d49 = [];
    for (var _0x20dba4 = 0; _0x20dba4 < _0x2aa7fd; _0x20dba4++) {
      _0x393d49.push(_0x5afdf8(_0x3ea6c9[_0x484ec6 + _0x20dba4 * 4 >> 2]));
    }
    _0x1ca50b.transformFeedbackVaryings(_0x1156e2, _0x393d49, _0x5151a0);
  }
  var _0x546716 = [];
  function _0x51fa33(_0x450ac4, _0x5e3884, _0x5870b2) {
    if (_0x47f2e3.currentContext.version >= 2) {
      _0x1ca50b.uniform1fv(_0x1cedbe(_0x450ac4), _0x3787f7, _0x5870b2 >> 2, _0x5e3884);
      return;
    }
    if (_0x5e3884 <= 288) {
      var _0x356d7b = _0x546716[_0x5e3884 - 1];
      for (var _0x524d8b = 0; _0x524d8b < _0x5e3884; ++_0x524d8b) {
        _0x356d7b[_0x524d8b] = _0x3787f7[_0x5870b2 + _0x524d8b * 4 >> 2];
      }
    } else {
      var _0x356d7b = _0x3787f7.subarray(_0x5870b2 >> 2, _0x5870b2 + _0x5e3884 * 4 >> 2);
    }
    _0x1ca50b.uniform1fv(_0x1cedbe(_0x450ac4), _0x356d7b);
  }
  function _0x4ac8da(_0xfa2121, _0x15e141) {
    _0x1ca50b.uniform1i(_0x1cedbe(_0xfa2121), _0x15e141);
  }
  var _0x4d099e = [];
  function _0x231e3b(_0x30576a, _0x43f9a9, _0x2554cb) {
    if (_0x47f2e3.currentContext.version >= 2) {
      _0x1ca50b.uniform1iv(_0x1cedbe(_0x30576a), _0x3ea6c9, _0x2554cb >> 2, _0x43f9a9);
      return;
    }
    if (_0x43f9a9 <= 288) {
      var _0x18fa41 = _0x4d099e[_0x43f9a9 - 1];
      for (var _0x1232cb = 0; _0x1232cb < _0x43f9a9; ++_0x1232cb) {
        _0x18fa41[_0x1232cb] = _0x3ea6c9[_0x2554cb + _0x1232cb * 4 >> 2];
      }
    } else {
      var _0x18fa41 = _0x3ea6c9.subarray(_0x2554cb >> 2, _0x2554cb + _0x43f9a9 * 4 >> 2);
    }
    _0x1ca50b.uniform1iv(_0x1cedbe(_0x30576a), _0x18fa41);
  }
  function _0x4282c4(_0x3586f7, _0x48b2ff, _0x30896f) {
    _0x1ca50b.uniform1uiv(_0x1cedbe(_0x3586f7), _0x3e0b02, _0x30896f >> 2, _0x48b2ff);
  }
  function _0x4a69ae(_0x14878e, _0x137cae, _0x1b6709) {
    if (_0x47f2e3.currentContext.version >= 2) {
      _0x1ca50b.uniform2fv(_0x1cedbe(_0x14878e), _0x3787f7, _0x1b6709 >> 2, _0x137cae * 2);
      return;
    }
    if (_0x137cae <= 144) {
      var _0x205d8e = _0x546716[_0x137cae * 2 - 1];
      for (var _0x40a1c4 = 0; _0x40a1c4 < _0x137cae * 2; _0x40a1c4 += 2) {
        _0x205d8e[_0x40a1c4] = _0x3787f7[_0x1b6709 + _0x40a1c4 * 4 >> 2];
        _0x205d8e[_0x40a1c4 + 1] = _0x3787f7[_0x1b6709 + (_0x40a1c4 * 4 + 4) >> 2];
      }
    } else {
      var _0x205d8e = _0x3787f7.subarray(_0x1b6709 >> 2, _0x1b6709 + _0x137cae * 8 >> 2);
    }
    _0x1ca50b.uniform2fv(_0x1cedbe(_0x14878e), _0x205d8e);
  }
  function _0x5081d1(_0x2de3ed, _0x3820ed, _0x5035c7) {
    if (_0x47f2e3.currentContext.version >= 2) {
      _0x1ca50b.uniform2iv(_0x1cedbe(_0x2de3ed), _0x3ea6c9, _0x5035c7 >> 2, _0x3820ed * 2);
      return;
    }
    if (_0x3820ed <= 144) {
      var _0x21e665 = _0x4d099e[_0x3820ed * 2 - 1];
      for (var _0x906cd9 = 0; _0x906cd9 < _0x3820ed * 2; _0x906cd9 += 2) {
        _0x21e665[_0x906cd9] = _0x3ea6c9[_0x5035c7 + _0x906cd9 * 4 >> 2];
        _0x21e665[_0x906cd9 + 1] = _0x3ea6c9[_0x5035c7 + (_0x906cd9 * 4 + 4) >> 2];
      }
    } else {
      var _0x21e665 = _0x3ea6c9.subarray(_0x5035c7 >> 2, _0x5035c7 + _0x3820ed * 8 >> 2);
    }
    _0x1ca50b.uniform2iv(_0x1cedbe(_0x2de3ed), _0x21e665);
  }
  function _0xcf0261(_0x5d566c, _0x49643d, _0x2706d5) {
    _0x1ca50b.uniform2uiv(_0x1cedbe(_0x5d566c), _0x3e0b02, _0x2706d5 >> 2, _0x49643d * 2);
  }
  function _0x17afc8(_0x3c2c38, _0x31258e, _0x495c44) {
    if (_0x47f2e3.currentContext.version >= 2) {
      _0x1ca50b.uniform3fv(_0x1cedbe(_0x3c2c38), _0x3787f7, _0x495c44 >> 2, _0x31258e * 3);
      return;
    }
    if (_0x31258e <= 96) {
      var _0x36aaae = _0x546716[_0x31258e * 3 - 1];
      for (var _0x406734 = 0; _0x406734 < _0x31258e * 3; _0x406734 += 3) {
        _0x36aaae[_0x406734] = _0x3787f7[_0x495c44 + _0x406734 * 4 >> 2];
        _0x36aaae[_0x406734 + 1] = _0x3787f7[_0x495c44 + (_0x406734 * 4 + 4) >> 2];
        _0x36aaae[_0x406734 + 2] = _0x3787f7[_0x495c44 + (_0x406734 * 4 + 8) >> 2];
      }
    } else {
      var _0x36aaae = _0x3787f7.subarray(_0x495c44 >> 2, _0x495c44 + _0x31258e * 12 >> 2);
    }
    _0x1ca50b.uniform3fv(_0x1cedbe(_0x3c2c38), _0x36aaae);
  }
  function _0x1aeced(_0x437548, _0x5b3b2b, _0x3a85df) {
    if (_0x47f2e3.currentContext.version >= 2) {
      _0x1ca50b.uniform3iv(_0x1cedbe(_0x437548), _0x3ea6c9, _0x3a85df >> 2, _0x5b3b2b * 3);
      return;
    }
    if (_0x5b3b2b <= 96) {
      var _0x50e8f6 = _0x4d099e[_0x5b3b2b * 3 - 1];
      for (var _0x3090e8 = 0; _0x3090e8 < _0x5b3b2b * 3; _0x3090e8 += 3) {
        _0x50e8f6[_0x3090e8] = _0x3ea6c9[_0x3a85df + _0x3090e8 * 4 >> 2];
        _0x50e8f6[_0x3090e8 + 1] = _0x3ea6c9[_0x3a85df + (_0x3090e8 * 4 + 4) >> 2];
        _0x50e8f6[_0x3090e8 + 2] = _0x3ea6c9[_0x3a85df + (_0x3090e8 * 4 + 8) >> 2];
      }
    } else {
      var _0x50e8f6 = _0x3ea6c9.subarray(_0x3a85df >> 2, _0x3a85df + _0x5b3b2b * 12 >> 2);
    }
    _0x1ca50b.uniform3iv(_0x1cedbe(_0x437548), _0x50e8f6);
  }
  function _0x2123e3(_0xea36de, _0x2dc782, _0x1ff0b9) {
    _0x1ca50b.uniform3uiv(_0x1cedbe(_0xea36de), _0x3e0b02, _0x1ff0b9 >> 2, _0x2dc782 * 3);
  }
  function _0x5192c6(_0x457cfb, _0x1c77dd, _0x33c8ee) {
    if (_0x47f2e3.currentContext.version >= 2) {
      _0x1ca50b.uniform4fv(_0x1cedbe(_0x457cfb), _0x3787f7, _0x33c8ee >> 2, _0x1c77dd * 4);
      return;
    }
    if (_0x1c77dd <= 72) {
      var _0x11f6a7 = _0x546716[_0x1c77dd * 4 - 1];
      var _0x26c501 = _0x3787f7;
      _0x33c8ee >>= 2;
      for (var _0x41ec8a = 0; _0x41ec8a < _0x1c77dd * 4; _0x41ec8a += 4) {
        var _0x2fb9c8 = _0x33c8ee + _0x41ec8a;
        _0x11f6a7[_0x41ec8a] = _0x26c501[_0x2fb9c8];
        _0x11f6a7[_0x41ec8a + 1] = _0x26c501[_0x2fb9c8 + 1];
        _0x11f6a7[_0x41ec8a + 2] = _0x26c501[_0x2fb9c8 + 2];
        _0x11f6a7[_0x41ec8a + 3] = _0x26c501[_0x2fb9c8 + 3];
      }
    } else {
      var _0x11f6a7 = _0x3787f7.subarray(_0x33c8ee >> 2, _0x33c8ee + _0x1c77dd * 16 >> 2);
    }
    _0x1ca50b.uniform4fv(_0x1cedbe(_0x457cfb), _0x11f6a7);
  }
  function _0x27ee0e(_0x13b88b, _0x1c1bdd, _0x5356c8) {
    if (_0x47f2e3.currentContext.version >= 2) {
      _0x1ca50b.uniform4iv(_0x1cedbe(_0x13b88b), _0x3ea6c9, _0x5356c8 >> 2, _0x1c1bdd * 4);
      return;
    }
    if (_0x1c1bdd <= 72) {
      var _0x2b4029 = _0x4d099e[_0x1c1bdd * 4 - 1];
      for (var _0x3acd57 = 0; _0x3acd57 < _0x1c1bdd * 4; _0x3acd57 += 4) {
        _0x2b4029[_0x3acd57] = _0x3ea6c9[_0x5356c8 + _0x3acd57 * 4 >> 2];
        _0x2b4029[_0x3acd57 + 1] = _0x3ea6c9[_0x5356c8 + (_0x3acd57 * 4 + 4) >> 2];
        _0x2b4029[_0x3acd57 + 2] = _0x3ea6c9[_0x5356c8 + (_0x3acd57 * 4 + 8) >> 2];
        _0x2b4029[_0x3acd57 + 3] = _0x3ea6c9[_0x5356c8 + (_0x3acd57 * 4 + 12) >> 2];
      }
    } else {
      var _0x2b4029 = _0x3ea6c9.subarray(_0x5356c8 >> 2, _0x5356c8 + _0x1c1bdd * 16 >> 2);
    }
    _0x1ca50b.uniform4iv(_0x1cedbe(_0x13b88b), _0x2b4029);
  }
  function _0x400192(_0x268ba0, _0x4a51fb, _0x3cdd46) {
    _0x1ca50b.uniform4uiv(_0x1cedbe(_0x268ba0), _0x3e0b02, _0x3cdd46 >> 2, _0x4a51fb * 4);
  }
  function _0x37f1b3(_0x1dbd5b, _0xea7855, _0x3b38de) {
    _0x1dbd5b = _0x47f2e3.programs[_0x1dbd5b];
    _0x1ca50b.uniformBlockBinding(_0x1dbd5b, _0xea7855, _0x3b38de);
  }
  function _0xcd0071(_0x3dc7b6, _0x4fa5b0, _0x2ea31d, _0x173374) {
    if (_0x47f2e3.currentContext.version >= 2) {
      _0x1ca50b.uniformMatrix3fv(_0x1cedbe(_0x3dc7b6), !!_0x2ea31d, _0x3787f7, _0x173374 >> 2, _0x4fa5b0 * 9);
      return;
    }
    if (_0x4fa5b0 <= 32) {
      var _0x3acd31 = _0x546716[_0x4fa5b0 * 9 - 1];
      for (var _0x4242e1 = 0; _0x4242e1 < _0x4fa5b0 * 9; _0x4242e1 += 9) {
        _0x3acd31[_0x4242e1] = _0x3787f7[_0x173374 + _0x4242e1 * 4 >> 2];
        _0x3acd31[_0x4242e1 + 1] = _0x3787f7[_0x173374 + (_0x4242e1 * 4 + 4) >> 2];
        _0x3acd31[_0x4242e1 + 2] = _0x3787f7[_0x173374 + (_0x4242e1 * 4 + 8) >> 2];
        _0x3acd31[_0x4242e1 + 3] = _0x3787f7[_0x173374 + (_0x4242e1 * 4 + 12) >> 2];
        _0x3acd31[_0x4242e1 + 4] = _0x3787f7[_0x173374 + (_0x4242e1 * 4 + 16) >> 2];
        _0x3acd31[_0x4242e1 + 5] = _0x3787f7[_0x173374 + (_0x4242e1 * 4 + 20) >> 2];
        _0x3acd31[_0x4242e1 + 6] = _0x3787f7[_0x173374 + (_0x4242e1 * 4 + 24) >> 2];
        _0x3acd31[_0x4242e1 + 7] = _0x3787f7[_0x173374 + (_0x4242e1 * 4 + 28) >> 2];
        _0x3acd31[_0x4242e1 + 8] = _0x3787f7[_0x173374 + (_0x4242e1 * 4 + 32) >> 2];
      }
    } else {
      var _0x3acd31 = _0x3787f7.subarray(_0x173374 >> 2, _0x173374 + _0x4fa5b0 * 36 >> 2);
    }
    _0x1ca50b.uniformMatrix3fv(_0x1cedbe(_0x3dc7b6), !!_0x2ea31d, _0x3acd31);
  }
  function _0x27b269(_0x2b7905, _0x500291, _0x3b2d7a, _0x3ead3c) {
    if (_0x47f2e3.currentContext.version >= 2) {
      _0x1ca50b.uniformMatrix4fv(_0x1cedbe(_0x2b7905), !!_0x3b2d7a, _0x3787f7, _0x3ead3c >> 2, _0x500291 * 16);
      return;
    }
    if (_0x500291 <= 18) {
      var _0x1f717d = _0x546716[_0x500291 * 16 - 1];
      var _0x6a41c6 = _0x3787f7;
      _0x3ead3c >>= 2;
      for (var _0x2119d3 = 0; _0x2119d3 < _0x500291 * 16; _0x2119d3 += 16) {
        var _0xf27767 = _0x3ead3c + _0x2119d3;
        _0x1f717d[_0x2119d3] = _0x6a41c6[_0xf27767];
        _0x1f717d[_0x2119d3 + 1] = _0x6a41c6[_0xf27767 + 1];
        _0x1f717d[_0x2119d3 + 2] = _0x6a41c6[_0xf27767 + 2];
        _0x1f717d[_0x2119d3 + 3] = _0x6a41c6[_0xf27767 + 3];
        _0x1f717d[_0x2119d3 + 4] = _0x6a41c6[_0xf27767 + 4];
        _0x1f717d[_0x2119d3 + 5] = _0x6a41c6[_0xf27767 + 5];
        _0x1f717d[_0x2119d3 + 6] = _0x6a41c6[_0xf27767 + 6];
        _0x1f717d[_0x2119d3 + 7] = _0x6a41c6[_0xf27767 + 7];
        _0x1f717d[_0x2119d3 + 8] = _0x6a41c6[_0xf27767 + 8];
        _0x1f717d[_0x2119d3 + 9] = _0x6a41c6[_0xf27767 + 9];
        _0x1f717d[_0x2119d3 + 10] = _0x6a41c6[_0xf27767 + 10];
        _0x1f717d[_0x2119d3 + 11] = _0x6a41c6[_0xf27767 + 11];
        _0x1f717d[_0x2119d3 + 12] = _0x6a41c6[_0xf27767 + 12];
        _0x1f717d[_0x2119d3 + 13] = _0x6a41c6[_0xf27767 + 13];
        _0x1f717d[_0x2119d3 + 14] = _0x6a41c6[_0xf27767 + 14];
        _0x1f717d[_0x2119d3 + 15] = _0x6a41c6[_0xf27767 + 15];
      }
    } else {
      var _0x1f717d = _0x3787f7.subarray(_0x3ead3c >> 2, _0x3ead3c + _0x500291 * 64 >> 2);
    }
    _0x1ca50b.uniformMatrix4fv(_0x1cedbe(_0x2b7905), !!_0x3b2d7a, _0x1f717d);
  }
  function _0x2cb0bf(_0x23909f) {
    if (!_0x384d88(_0x23909f)) {
      _0x47f2e3.recordError(1280);
      _0x266425("GL_INVALID_ENUM in glUnmapBuffer");
      return 0;
    }
    var _0x4241da = _0x184098(_0x23909f);
    var _0x2aa2dd = _0x47f2e3.mappedBuffers[_0x4241da];
    if (!_0x2aa2dd) {
      _0x47f2e3.recordError(1282);
      _0x266425("buffer was never mapped in glUnmapBuffer");
      return 0;
    }
    _0x47f2e3.mappedBuffers[_0x4241da] = null;
    if (!(_0x2aa2dd.access & 16)) {
      if (_0x47f2e3.currentContext.version >= 2) {
        _0x1ca50b.bufferSubData(_0x23909f, _0x2aa2dd.offset, _0x10abe1, _0x2aa2dd.mem, _0x2aa2dd.length);
      } else {
        _0x1ca50b.bufferSubData(_0x23909f, _0x2aa2dd.offset, _0x10abe1.subarray(_0x2aa2dd.mem, _0x2aa2dd.mem + _0x2aa2dd.length));
      }
    }
    _0x4200b9(_0x2aa2dd.mem);
    return 1;
  }
  function _0x17b875() {
    var _0x51d644 = _0x1ca50b.currentProgram;
    if (!_0x51d644.explicitProgramBindingsApplied) {
      if (_0x47f2e3.currentContext.version >= 2) {
        Object.keys(_0x51d644.explicitUniformBindings).forEach(function (_0x4d6f69) {
          var _0x56c17f = _0x51d644.explicitUniformBindings[_0x4d6f69];
          for (var _0x32b0b2 = 0; _0x32b0b2 < _0x56c17f[1]; ++_0x32b0b2) {
            var _0x98a24c = _0x1ca50b.getUniformBlockIndex(_0x51d644, _0x4d6f69 + (_0x56c17f[1] > 1 ? "[" + _0x32b0b2 + "]" : ""));
            _0x1ca50b.uniformBlockBinding(_0x51d644, _0x98a24c, _0x56c17f[0] + _0x32b0b2);
          }
        });
      }
      Object.keys(_0x51d644.explicitSamplerBindings).forEach(function (_0x2c7704) {
        var _0x3a69ab = _0x51d644.explicitSamplerBindings[_0x2c7704];
        for (var _0x46ce42 = 0; _0x46ce42 < _0x3a69ab[1]; ++_0x46ce42) {
          _0x1ca50b.uniform1i(_0x1ca50b.getUniformLocation(_0x51d644, _0x2c7704 + (_0x46ce42 ? "[" + _0x46ce42 + "]" : "")), _0x3a69ab[0] + _0x46ce42);
        }
      });
      _0x51d644.explicitProgramBindingsApplied = 1;
    }
  }
  function _0x34c06e(_0xbc9723) {
    _0xbc9723 = _0x47f2e3.programs[_0xbc9723];
    _0x1ca50b.useProgram(_0xbc9723);
    if (_0x1ca50b.currentProgram = _0xbc9723) {
      _0x17b875();
    }
  }
  function _0x338259(_0x151dc7) {
    _0x1ca50b.validateProgram(_0x47f2e3.programs[_0x151dc7]);
  }
  function _0x292b2c(_0xe9cb17, _0x2f3458, _0xe278b4, _0x3a856d, _0x3647f5) {
    _0x1ca50b.vertexAttrib4f(_0xe9cb17, _0x2f3458, _0xe278b4, _0x3a856d, _0x3647f5);
  }
  function _0xdd8848(_0x5c9ee1, _0x62bd0e) {
    _0x1ca50b.vertexAttrib4f(_0x5c9ee1, _0x3787f7[_0x62bd0e >> 2], _0x3787f7[_0x62bd0e + 4 >> 2], _0x3787f7[_0x62bd0e + 8 >> 2], _0x3787f7[_0x62bd0e + 12 >> 2]);
  }
  function _0x27f89b(_0x51d760, _0x122a74, _0x349443, _0x4b4f64, _0x519732) {
    var _0x11c709 = _0x47f2e3.currentContext.clientBuffers[_0x51d760];
    if (!_0x1ca50b.currentArrayBufferBinding) {
      _0x11c709.size = _0x122a74;
      _0x11c709.type = _0x349443;
      _0x11c709.normalized = false;
      _0x11c709.stride = _0x4b4f64;
      _0x11c709.ptr = _0x519732;
      _0x11c709.clientside = true;
      _0x11c709.vertexAttribPointerAdaptor = function (_0x499db9, _0x192712, _0xadea6e, _0x1c9e7c, _0x2a9451, _0x298459) {
        this.vertexAttribIPointer(_0x499db9, _0x192712, _0xadea6e, _0x2a9451, _0x298459);
      };
      return;
    }
    _0x11c709.clientside = false;
    _0x1ca50b.vertexAttribIPointer(_0x51d760, _0x122a74, _0x349443, _0x4b4f64, _0x519732);
  }
  function _0x4a31fc(_0x4f41e4, _0x587f45, _0x3de708, _0x3d0ff5, _0x16c15c, _0x1c77ab) {
    var _0x2a9e1a = _0x47f2e3.currentContext.clientBuffers[_0x4f41e4];
    if (!_0x1ca50b.currentArrayBufferBinding) {
      _0x2a9e1a.size = _0x587f45;
      _0x2a9e1a.type = _0x3de708;
      _0x2a9e1a.normalized = _0x3d0ff5;
      _0x2a9e1a.stride = _0x16c15c;
      _0x2a9e1a.ptr = _0x1c77ab;
      _0x2a9e1a.clientside = true;
      _0x2a9e1a.vertexAttribPointerAdaptor = function (_0x1572d7, _0x492b24, _0x56caa5, _0x39cc92, _0x48e85b, _0x508d06) {
        this.vertexAttribPointer(_0x1572d7, _0x492b24, _0x56caa5, _0x39cc92, _0x48e85b, _0x508d06);
      };
      return;
    }
    _0x2a9e1a.clientside = false;
    _0x1ca50b.vertexAttribPointer(_0x4f41e4, _0x587f45, _0x3de708, !!_0x3d0ff5, _0x16c15c, _0x1c77ab);
  }
  function _0x3cadd6(_0x2c5ba1, _0x5c2feb, _0x242131, _0x10b881) {
    _0x1ca50b.viewport(_0x2c5ba1, _0x5c2feb, _0x242131, _0x10b881);
  }
  function _0x2462c3(_0x4ff710) {
    return _0x4ff710;
  }
  function _0x2442de(_0x412f90) {
    _0xd1384b();
    var _0x3c5ae2 = new Date(_0x3ea6c9[_0x412f90 + 20 >> 2] + 1900, _0x3ea6c9[_0x412f90 + 16 >> 2], _0x3ea6c9[_0x412f90 + 12 >> 2], _0x3ea6c9[_0x412f90 + 8 >> 2], _0x3ea6c9[_0x412f90 + 4 >> 2], _0x3ea6c9[_0x412f90 >> 2], 0);
    var _0x2d6466 = _0x3ea6c9[_0x412f90 + 32 >> 2];
    var _0x5d0951 = _0x3c5ae2.getTimezoneOffset();
    var _0x190db0 = new Date(_0x3c5ae2.getFullYear(), 0, 1);
    var _0x5a4fe2 = new Date(_0x3c5ae2.getFullYear(), 6, 1).getTimezoneOffset();
    var _0x9afc9d = _0x190db0.getTimezoneOffset();
    var _0xbe7bd1 = Math.min(_0x9afc9d, _0x5a4fe2);
    if (_0x2d6466 < 0) {
      _0x3ea6c9[_0x412f90 + 32 >> 2] = Number(_0x5a4fe2 != _0x9afc9d && _0xbe7bd1 == _0x5d0951);
    } else if (_0x2d6466 > 0 != (_0xbe7bd1 == _0x5d0951)) {
      var _0x2be8b0 = Math.max(_0x9afc9d, _0x5a4fe2);
      var _0x206707 = _0x2d6466 > 0 ? _0xbe7bd1 : _0x2be8b0;
      _0x3c5ae2.setTime(_0x3c5ae2.getTime() + (_0x206707 - _0x5d0951) * 60000);
    }
    _0x3ea6c9[_0x412f90 + 24 >> 2] = _0x3c5ae2.getDay();
    var _0x5b773f = (_0x3c5ae2.getTime() - _0x190db0.getTime()) / 86400000 | 0;
    _0x3ea6c9[_0x412f90 + 28 >> 2] = _0x5b773f;
    _0x3ea6c9[_0x412f90 >> 2] = _0x3c5ae2.getSeconds();
    _0x3ea6c9[_0x412f90 + 4 >> 2] = _0x3c5ae2.getMinutes();
    _0x3ea6c9[_0x412f90 + 8 >> 2] = _0x3c5ae2.getHours();
    _0x3ea6c9[_0x412f90 + 12 >> 2] = _0x3c5ae2.getDate();
    _0x3ea6c9[_0x412f90 + 16 >> 2] = _0x3c5ae2.getMonth();
    return _0x3c5ae2.getTime() / 1000 | 0;
  }
  function _0x13c9ba(_0x3d88b7) {
    _0x21abc3(_0x3d88b7);
  }
  function _0x3be458(_0x315c17, _0x33b759, _0x154c15) {
    return 0;
  }
  function _0x4282ca(_0x2bbf1a) {
    _0x3ea6c9[_0x2bbf1a >> 2] = 0;
    return 0;
  }
  function _0x22e617(_0x19d346) {
    return _0x19d346 % 4 === 0 && (_0x19d346 % 100 !== 0 || _0x19d346 % 400 === 0);
  }
  function _0x326b96(_0x55a86e, _0x3988b8) {
    var _0x289cb1 = 0;
    for (var _0x498bce = 0; _0x498bce <= _0x3988b8; _0x289cb1 += _0x55a86e[_0x498bce++]) {}
    return _0x289cb1;
  }
  var _0x1c7688 = [31, 29, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
  var _0x5882fd = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
  function _0x999382(_0x56339c, _0xdb85fe) {
    var _0x5379eb = new Date(_0x56339c.getTime());
    while (_0xdb85fe > 0) {
      var _0x15ba8e = _0x22e617(_0x5379eb.getFullYear());
      var _0xd10fa5 = _0x5379eb.getMonth();
      var _0x3ef382 = (_0x15ba8e ? _0x1c7688 : _0x5882fd)[_0xd10fa5];
      if (_0xdb85fe > _0x3ef382 - _0x5379eb.getDate()) {
        _0xdb85fe -= _0x3ef382 - _0x5379eb.getDate() + 1;
        _0x5379eb.setDate(1);
        if (_0xd10fa5 < 11) {
          _0x5379eb.setMonth(_0xd10fa5 + 1);
        } else {
          _0x5379eb.setMonth(0);
          _0x5379eb.setFullYear(_0x5379eb.getFullYear() + 1);
        }
      } else {
        _0x5379eb.setDate(_0x5379eb.getDate() + _0xdb85fe);
        return _0x5379eb;
      }
    }
    return _0x5379eb;
  }
  function _0x4ac7fb(_0x590d25, _0x53978a, _0x3a6f69, _0x12e152) {
    var _0x2dfb1e = _0x3ea6c9[_0x12e152 + 40 >> 2];
    var _0x5ee704 = {
      tm_sec: _0x3ea6c9[_0x12e152 >> 2],
      tm_min: _0x3ea6c9[_0x12e152 + 4 >> 2],
      tm_hour: _0x3ea6c9[_0x12e152 + 8 >> 2],
      tm_mday: _0x3ea6c9[_0x12e152 + 12 >> 2],
      tm_mon: _0x3ea6c9[_0x12e152 + 16 >> 2],
      tm_year: _0x3ea6c9[_0x12e152 + 20 >> 2],
      tm_wday: _0x3ea6c9[_0x12e152 + 24 >> 2],
      tm_yday: _0x3ea6c9[_0x12e152 + 28 >> 2],
      tm_isdst: _0x3ea6c9[_0x12e152 + 32 >> 2],
      tm_gmtoff: _0x3ea6c9[_0x12e152 + 36 >> 2],
      tm_zone: _0x2dfb1e ? _0x5afdf8(_0x2dfb1e) : ""
    };
    var _0x3ba34f = _0x5afdf8(_0x3a6f69);
    var _0x23c1fe = {
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
    for (var _0x1a7d45 in _0x23c1fe) {
      _0x3ba34f = _0x3ba34f.replace(new RegExp(_0x1a7d45, "g"), _0x23c1fe[_0x1a7d45]);
    }
    var _0x1d3e40 = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    var _0x4d9763 = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    function _0x3f2ed8(_0xd45b02, _0x12b561, _0x467560) {
      var _0x281330 = typeof _0xd45b02 === "number" ? _0xd45b02.toString() : _0xd45b02 || "";
      while (_0x281330.length < _0x12b561) {
        _0x281330 = _0x467560[0] + _0x281330;
      }
      return _0x281330;
    }
    function _0x5226d0(_0x6fd76e, _0x901cf2) {
      return _0x3f2ed8(_0x6fd76e, _0x901cf2, "0");
    }
    function _0x2303ad(_0x4d8e5c, _0xa35744) {
      function _0x1e0b27(_0x463d27) {
        if (_0x463d27 < 0) {
          return -1;
        } else if (_0x463d27 > 0) {
          return 1;
        } else {
          return 0;
        }
      }
      var _0x4ab19f;
      if ((_0x4ab19f = _0x1e0b27(_0x4d8e5c.getFullYear() - _0xa35744.getFullYear())) === 0) {
        if ((_0x4ab19f = _0x1e0b27(_0x4d8e5c.getMonth() - _0xa35744.getMonth())) === 0) {
          _0x4ab19f = _0x1e0b27(_0x4d8e5c.getDate() - _0xa35744.getDate());
        }
      }
      return _0x4ab19f;
    }
    function _0x4667f1(_0x1e73de) {
      switch (_0x1e73de.getDay()) {
        case 0:
          return new Date(_0x1e73de.getFullYear() - 1, 11, 29);
        case 1:
          return _0x1e73de;
        case 2:
          return new Date(_0x1e73de.getFullYear(), 0, 3);
        case 3:
          return new Date(_0x1e73de.getFullYear(), 0, 2);
        case 4:
          return new Date(_0x1e73de.getFullYear(), 0, 1);
        case 5:
          return new Date(_0x1e73de.getFullYear() - 1, 11, 31);
        case 6:
          return new Date(_0x1e73de.getFullYear() - 1, 11, 30);
      }
    }
    function _0x338375(_0xa40711) {
      var _0x46d435 = _0x999382(new Date(_0xa40711.tm_year + 1900, 0, 1), _0xa40711.tm_yday);
      var _0x4b020d = new Date(_0x46d435.getFullYear(), 0, 4);
      var _0x3ae2ca = new Date(_0x46d435.getFullYear() + 1, 0, 4);
      var _0x352a1e = _0x4667f1(_0x4b020d);
      var _0x313d2a = _0x4667f1(_0x3ae2ca);
      if (_0x2303ad(_0x352a1e, _0x46d435) <= 0) {
        if (_0x2303ad(_0x313d2a, _0x46d435) <= 0) {
          return _0x46d435.getFullYear() + 1;
        } else {
          return _0x46d435.getFullYear();
        }
      } else {
        return _0x46d435.getFullYear() - 1;
      }
    }
    var _0x43df36 = {
      "%a": function (_0x46679f) {
        return _0x1d3e40[_0x46679f.tm_wday].substring(0, 3);
      },
      "%A": function (_0x594f5c) {
        return _0x1d3e40[_0x594f5c.tm_wday];
      },
      "%b": function (_0x267131) {
        return _0x4d9763[_0x267131.tm_mon].substring(0, 3);
      },
      "%B": function (_0xbaf1b2) {
        return _0x4d9763[_0xbaf1b2.tm_mon];
      },
      "%C": function (_0x101c39) {
        var _0x12896b = _0x101c39.tm_year + 1900;
        return _0x5226d0(_0x12896b / 100 | 0, 2);
      },
      "%d": function (_0x4572a0) {
        return _0x5226d0(_0x4572a0.tm_mday, 2);
      },
      "%e": function (_0x2c1766) {
        return _0x3f2ed8(_0x2c1766.tm_mday, 2, " ");
      },
      "%g": function (_0x21b96c) {
        return _0x338375(_0x21b96c).toString().substring(2);
      },
      "%G": function (_0x4289e0) {
        return _0x338375(_0x4289e0);
      },
      "%H": function (_0x1bb442) {
        return _0x5226d0(_0x1bb442.tm_hour, 2);
      },
      "%I": function (_0x14070f) {
        var _0x4bd170 = _0x14070f.tm_hour;
        if (_0x4bd170 == 0) {
          _0x4bd170 = 12;
        } else if (_0x4bd170 > 12) {
          _0x4bd170 -= 12;
        }
        return _0x5226d0(_0x4bd170, 2);
      },
      "%j": function (_0x8f72a5) {
        return _0x5226d0(_0x8f72a5.tm_mday + _0x326b96(_0x22e617(_0x8f72a5.tm_year + 1900) ? _0x1c7688 : _0x5882fd, _0x8f72a5.tm_mon - 1), 3);
      },
      "%m": function (_0x8beec6) {
        return _0x5226d0(_0x8beec6.tm_mon + 1, 2);
      },
      "%M": function (_0x4683ec) {
        return _0x5226d0(_0x4683ec.tm_min, 2);
      },
      "%n": function () {
        return "\n";
      },
      "%p": function (_0x173dfb) {
        if (_0x173dfb.tm_hour >= 0 && _0x173dfb.tm_hour < 12) {
          return "AM";
        } else {
          return "PM";
        }
      },
      "%S": function (_0x1873ef) {
        return _0x5226d0(_0x1873ef.tm_sec, 2);
      },
      "%t": function () {
        return "\t";
      },
      "%u": function (_0x3a5fd1) {
        return _0x3a5fd1.tm_wday || 7;
      },
      "%U": function (_0x40670b) {
        var _0x462aa0 = new Date(_0x40670b.tm_year + 1900, 0, 1);
        var _0x3fcf61 = _0x462aa0.getDay() === 0 ? _0x462aa0 : _0x999382(_0x462aa0, 7 - _0x462aa0.getDay());
        var _0x43f78f = new Date(_0x40670b.tm_year + 1900, _0x40670b.tm_mon, _0x40670b.tm_mday);
        if (_0x2303ad(_0x3fcf61, _0x43f78f) < 0) {
          var _0x1d6a1a = _0x326b96(_0x22e617(_0x43f78f.getFullYear()) ? _0x1c7688 : _0x5882fd, _0x43f78f.getMonth() - 1) - 31;
          var _0x27b376 = 31 - _0x3fcf61.getDate();
          var _0x5c7276 = _0x27b376 + _0x1d6a1a + _0x43f78f.getDate();
          return _0x5226d0(Math.ceil(_0x5c7276 / 7), 2);
        }
        if (_0x2303ad(_0x3fcf61, _0x462aa0) === 0) {
          return "01";
        } else {
          return "00";
        }
      },
      "%V": function (_0x2e5fc0) {
        var _0x57a8fc = new Date(_0x2e5fc0.tm_year + 1900, 0, 4);
        var _0x390abd = new Date(_0x2e5fc0.tm_year + 1901, 0, 4);
        var _0x3921ad = _0x4667f1(_0x57a8fc);
        var _0x1c690b = _0x4667f1(_0x390abd);
        var _0x1853c8 = _0x999382(new Date(_0x2e5fc0.tm_year + 1900, 0, 1), _0x2e5fc0.tm_yday);
        if (_0x2303ad(_0x1853c8, _0x3921ad) < 0) {
          return "53";
        }
        if (_0x2303ad(_0x1c690b, _0x1853c8) <= 0) {
          return "01";
        }
        var _0xb58b13;
        if (_0x3921ad.getFullYear() < _0x2e5fc0.tm_year + 1900) {
          _0xb58b13 = _0x2e5fc0.tm_yday + 32 - _0x3921ad.getDate();
        } else {
          _0xb58b13 = _0x2e5fc0.tm_yday + 1 - _0x3921ad.getDate();
        }
        return _0x5226d0(Math.ceil(_0xb58b13 / 7), 2);
      },
      "%w": function (_0x20e576) {
        return _0x20e576.tm_wday;
      },
      "%W": function (_0x48275b) {
        var _0x3bf45f = new Date(_0x48275b.tm_year, 0, 1);
        var _0x2ae375 = _0x3bf45f.getDay() === 1 ? _0x3bf45f : _0x999382(_0x3bf45f, _0x3bf45f.getDay() === 0 ? 1 : 7 - _0x3bf45f.getDay() + 1);
        var _0x123315 = new Date(_0x48275b.tm_year + 1900, _0x48275b.tm_mon, _0x48275b.tm_mday);
        if (_0x2303ad(_0x2ae375, _0x123315) < 0) {
          var _0x4c0d78 = _0x326b96(_0x22e617(_0x123315.getFullYear()) ? _0x1c7688 : _0x5882fd, _0x123315.getMonth() - 1) - 31;
          var _0x182873 = 31 - _0x2ae375.getDate();
          var _0x38835d = _0x182873 + _0x4c0d78 + _0x123315.getDate();
          return _0x5226d0(Math.ceil(_0x38835d / 7), 2);
        }
        if (_0x2303ad(_0x2ae375, _0x3bf45f) === 0) {
          return "01";
        } else {
          return "00";
        }
      },
      "%y": function (_0x2cf139) {
        return (_0x2cf139.tm_year + 1900).toString().substring(2);
      },
      "%Y": function (_0x3eb513) {
        return _0x3eb513.tm_year + 1900;
      },
      "%z": function (_0x47c371) {
        var _0x4274d4 = _0x47c371.tm_gmtoff;
        var _0x414d8f = _0x4274d4 >= 0;
        _0x4274d4 = Math.abs(_0x4274d4) / 60;
        _0x4274d4 = _0x4274d4 / 60 * 100 + _0x4274d4 % 60;
        return (_0x414d8f ? "+" : "-") + String("0000" + _0x4274d4).slice(-4);
      },
      "%Z": function (_0xa3d161) {
        return _0xa3d161.tm_zone;
      },
      "%%": function () {
        return "%";
      }
    };
    for (var _0x1a7d45 in _0x43df36) {
      if (_0x3ba34f.includes(_0x1a7d45)) {
        _0x3ba34f = _0x3ba34f.replace(new RegExp(_0x1a7d45, "g"), _0x43df36[_0x1a7d45](_0x5ee704));
      }
    }
    var _0x599274 = _0x55b828(_0x3ba34f, false);
    if (_0x599274.length > _0x53978a) {
      return 0;
    }
    _0x9eb690(_0x599274, _0x590d25);
    return _0x599274.length - 1;
  }
  function _0x2acf83(_0x5e5eee) {
    var _0x6ff533 = Date.now() / 1000 | 0;
    if (_0x5e5eee) {
      _0x3ea6c9[_0x5e5eee >> 2] = _0x6ff533;
    }
    return _0x6ff533;
  }
  function _0x4b575a(_0x5d3ae0, _0x4faeac) {
    _0x5d3ae0 = _0x5afdf8(_0x5d3ae0);
    try {
      _0x129e29.utime(_0x5d3ae0, _0x4faeac, _0x4faeac);
      return 0;
    } catch (_0x5839a0) {
      if (!(_0x5839a0 instanceof _0x129e29.ErrnoError)) {
        throw _0x5839a0 + " : " + _0x5e940f();
      }
      _0x4cab60(_0x5839a0.errno);
      return -1;
    }
  }
  function _0xeef2c0(_0x405a42, _0x536cd5) {
    var _0x2bcf66;
    if (_0x536cd5) {
      _0x2bcf66 = _0x3ea6c9[_0x536cd5 + 4 >> 2] * 1000;
    } else {
      _0x2bcf66 = Date.now();
    }
    return _0x4b575a(_0x405a42, _0x2bcf66);
  }
  var _0x3f020a = function (_0x2f6aa3, _0x2828e5, _0x34f73a, _0x4023cc) {
    if (!_0x2f6aa3) {
      _0x2f6aa3 = this;
    }
    this.parent = _0x2f6aa3;
    this.mount = _0x2f6aa3.mount;
    this.mounted = null;
    this.id = _0x129e29.nextInode++;
    this.name = _0x2828e5;
    this.mode = _0x34f73a;
    this.node_ops = {};
    this.stream_ops = {};
    this.rdev = _0x4023cc;
  };
  var _0x253b33 = 365;
  var _0x285632 = 146;
  Object.defineProperties(_0x3f020a.prototype, {
    read: {
      get: function () {
        return (this.mode & _0x253b33) === _0x253b33;
      },
      set: function (_0x2f81e2) {
        if (_0x2f81e2) {
          this.mode |= _0x253b33;
        } else {
          this.mode &= ~_0x253b33;
        }
      }
    },
    write: {
      get: function () {
        return (this.mode & _0x285632) === _0x285632;
      },
      set: function (_0x401ddf) {
        if (_0x401ddf) {
          this.mode |= _0x285632;
        } else {
          this.mode &= ~_0x285632;
        }
      }
    },
    isFolder: {
      get: function () {
        return _0x129e29.isDir(this.mode);
      }
    },
    isDevice: {
      get: function () {
        return _0x129e29.isChrdev(this.mode);
      }
    }
  });
  _0x129e29.FSNode = _0x3f020a;
  _0x129e29.staticInit();
  _0x3255d0.FS_createPath = _0x129e29.createPath;
  _0x3255d0.FS_createDataFile = _0x129e29.createDataFile;
  _0x3255d0.requestFullscreen = function _0x41eb23(_0x4f6d7e, _0xffda64) {
    _0x41bad6.requestFullscreen(_0x4f6d7e, _0xffda64);
  };
  _0x3255d0.requestAnimationFrame = function _0x2b5df2(_0x339362) {
    _0x41bad6.requestAnimationFrame(_0x339362);
  };
  _0x3255d0.setCanvasSize = function _0xd980cd(_0x2edbc5, _0x39850a, _0x523d0b) {
    _0x41bad6.setCanvasSize(_0x2edbc5, _0x39850a, _0x523d0b);
  };
  _0x3255d0.pauseMainLoop = function _0x1df336() {
    _0x41bad6.mainLoop.pause();
  };
  _0x3255d0.resumeMainLoop = function _0x3ccbe2() {
    _0x41bad6.mainLoop.resume();
  };
  _0x3255d0.getUserMedia = function _0x32d2a8() {
    _0x41bad6.getUserMedia();
  };
  _0x3255d0.createContext = function _0x114d95(_0x5d5dbb, _0x43050f, _0x21ac3d, _0x8aa656) {
    return _0x41bad6.createContext(_0x5d5dbb, _0x43050f, _0x21ac3d, _0x8aa656);
  };
  var _0x1ca50b;
  for (var _0x168ea1 = 0; _0x168ea1 < 32; ++_0x168ea1) {
    _0x1a2b78.push(new Array(_0x168ea1));
  }
  var _0x3845d8 = new Float32Array(288);
  for (var _0x168ea1 = 0; _0x168ea1 < 288; ++_0x168ea1) {
    _0x546716[_0x168ea1] = _0x3845d8.subarray(0, _0x168ea1 + 1);
  }
  var _0x4371b5 = new Int32Array(288);
  for (var _0x168ea1 = 0; _0x168ea1 < 288; ++_0x168ea1) {
    _0x4d099e[_0x168ea1] = _0x4371b5.subarray(0, _0x168ea1 + 1);
  }
  function _0x55b828(_0xdc14b8, _0x4d3a6e, _0x50b3bd) {
    var _0x6245da = _0x50b3bd > 0 ? _0x50b3bd : _0x40d569(_0xdc14b8) + 1;
    var _0xb7eb15 = new Array(_0x6245da);
    var _0x229e80 = _0x333663(_0xdc14b8, _0xb7eb15, 0, _0xb7eb15.length);
    if (_0x4d3a6e) {
      _0xb7eb15.length = _0x229e80;
    }
    return _0xb7eb15;
  }
  var _0xa0f47e = {
    sj: _0x529c80,
    oj: _0x3c9530,
    Sc: _0x17be92,
    Ui: _0x5afc0b,
    Fi: _0xcb12e5,
    Pj: _0x58c1a1,
    Si: _0x36bcaa,
    Ri: _0x51b0c4,
    Oi: _0x617c62,
    Qi: _0x2c6285,
    Pi: _0x310d62,
    qj: _0x43c988,
    pj: _0x11aa64,
    Gj: _0x4a606a,
    fj: _0x583fb8,
    Uc: _0x28484e,
    Zi: _0x525405,
    Pc: _0x3d4526,
    Rc: _0x1ffc27,
    Qc: _0x1b39b8,
    _i: _0x4e42af,
    Ki: _0x159b98,
    Ji: _0x2b8d34,
    hj: _0x4b3738,
    vj: _0x34fc40,
    uj: _0x2ffe37,
    Wi: _0x1677ba,
    Ni: _0x576b5f,
    Mi: _0x363899,
    Xi: _0x5980f9,
    Kj: _0x4ce523,
    xi: _0x961a11,
    Ci: _0x558063,
    Bi: _0x21146d,
    Ai: _0x56a7c9,
    vi: _0x2dfb3f,
    ui: _0x72c0f6,
    ti: _0x5ae710,
    si: _0x40e0ba,
    Li: _0x1d662e,
    Gi: _0x582e19,
    mj: _0x2eaf5,
    Yi: _0x56b01a,
    yi: _0x504851,
    ff: _0x22f023,
    Jb: _0x517d69,
    Ib: _0x332c5c,
    lf: _0x431713,
    Ra: _0x3a663a,
    Qa: _0x1c95eb,
    Je: _0x134073,
    mf: _0x49caa8,
    Le: _0xe6cebc,
    Ce: _0x499ae2,
    da: _0x4d3ab8,
    df: _0x91f564,
    Fb: _0x3e0233,
    Eb: _0x504a3a,
    $e: _0x1afd33,
    af: _0x25f917,
    Db: _0x3e5d31,
    Cb: _0x381298,
    Zc: _0x475346,
    ef: _0x2da6ed,
    Hb: _0xbb61b2,
    Gb: _0x59bdb3,
    Ke: _0x25fb41,
    Me: _0x4cce3a,
    hf: _0x47c9be,
    Lb: _0x528fa7,
    Kb: _0x5dfe1a,
    Pb: _0x4a08e2,
    Fe: _0x26e80f,
    _e: _0x5535af,
    jf: _0x2a2fa1,
    fa: _0x5d5f2e,
    Qf: _0x595f92,
    ha: _0x45e822,
    Lf: _0x5e110b,
    Jf: _0x3ce2ae,
    ac: _0x39dd17,
    Kf: _0x3fa41d,
    Ua: _0x513c04,
    Va: _0x18b6c8,
    Qb: _0x5890b3,
    Nf: _0x5bf5a5,
    Hf: _0x2a9d0a,
    If: _0x428b3e,
    cc: _0x38b5a2,
    bc: _0x1477b1,
    qa: _0x26a5aa,
    ga: _0x3af863,
    Pf: _0x154760,
    Of: _0xb93331,
    ra: _0x530b36,
    wb: _0x213148,
    vb: _0x474af6,
    ja: _0x54abd3,
    pa: _0x51580c,
    sb: _0x38f017,
    ub: _0x341e4b,
    Bb: _0x15598c,
    Oa: _0x5887ae,
    xb: _0x22e778,
    zb: _0x1cafcb,
    Pe: _0xf917c9,
    $b: _0x4a7e2d,
    nf: _0x309d05,
    yb: _0x36066b,
    Ze: _0x23ebb1,
    ta: _0x22613f,
    Ie: _0x5a2e9d,
    Df: _0x3cd53e,
    Af: _0x53d1b9,
    Bf: _0x243d6e,
    Cf: _0x51fc32,
    Ta: _0x47b3ed,
    vf: _0x344ec3,
    yf: _0x3e5dbe,
    xf: _0x19da96,
    zf: _0x449c16,
    Dj: _0x293ff9,
    Bj: _0x15a18f,
    zj: _0xf197d6,
    jj: _0x3a5467,
    lj: _0x5edd83,
    Fj: _0x3f4ff1,
    dj: _0x462126,
    cj: _0x1d951f,
    xj: _0x44aa4b,
    Lj: _0x247f63,
    bj: _0x1f8f4c,
    Jj: _0xebc79,
    Ij: _0x4e9624,
    kb: _0x5e350d,
    aj: _0xb7456c,
    $i: _0x3460dc,
    nj: _0x180bf4,
    Vi: _0x5bffc3,
    Ti: _0x425975,
    Ii: _0x5ceadc,
    Uj: _0x3d1306,
    Tj: _0x520a8d,
    Rj: _0x22ec0a,
    Sj: _0x5cce38,
    tj: _0x489024,
    ej: _0x4bf9e2,
    Di: _0x1c4d25,
    Ei: _0x4e783d,
    Hi: _0xe836eb,
    Tc: _0x2d36e7,
    Qj: _0x37e502,
    Oj: _0x442f9b,
    Mj: _0x3a229b,
    Nj: _0x2ca129,
    Cj: _0x4518a2,
    Aj: _0x3449ea,
    yj: _0x4fffdf,
    ij: _0x4d657c,
    kj: _0x4408b6,
    Ej: _0x171dec,
    zi: _0x14c363,
    wj: _0x220238,
    rj: _0x2edd0d,
    Hj: _0x8e14fb,
    gj: _0x2d97a8,
    lb: _0x5df1fb,
    ak: _0x1ba1f3,
    Xc: _0x5f4b79,
    _j: _0x2858d4,
    Yc: _0x190b11,
    Xj: _0x39a5f0,
    Zj: _0x17150a,
    Yj: _0x155e4b,
    $j: _0x4d3c33,
    p: _0x35e317,
    h: _0x5f281f,
    o: _0x400a04,
    f: _0x49cb97,
    a: _0x5d234d,
    ck: _0xfe28a3,
    jb: _0xfe0447,
    md: _0x1446c1,
    ea: _0x428650,
    $c: _0x50e6c6,
    ad: _0x7140a4,
    k: _0x48df4e,
    Oe: _0x29601a,
    qf: _0x8df473,
    Ve: _0x4e3fde,
    fg: _0x2ce9b1,
    pb: _0x52c6a4,
    Sf: _0x7e61d3,
    pd: _0xb83d3b,
    hi: _0x5d1da7,
    S: _0x188ae4,
    _g: _0x4b0363,
    Pg: _0x459ae1,
    hd: _0x35618b,
    ed: _0x2635c2,
    Gc: _0x1fef38,
    Hc: _0xdbb5a6,
    rd: _0x59f1fa,
    La: _0xaa3cf4,
    dd: _0xaee0fa,
    Gf: _0x1df382,
    Zf: _0x2cc4e8,
    Vf: _0x1374c4,
    tb: _0x5006b3,
    wf: _0x25366b,
    kd: _0x565f14,
    gd: _0xc240e3,
    cf: _0x480724,
    ud: _0x25d615,
    db: _0x95d707,
    ld: _0x4e63a5,
    Mf: _0x53877a,
    ii: _0x3d7792,
    gf: _0x25eaa9,
    nd: _0x32bfe2,
    id: _0x573bc2,
    fd: _0x5dd153,
    od: _0x2632a0,
    kf: _0x2b6770,
    bf: _0x49638b,
    qd: _0x51bc58,
    qb: _0x2c5b69,
    xc: _0x424ba8,
    Rf: _0x2f647a,
    ji: _0x25f39d,
    Tf: _0x484531,
    sd: _0x47a6e9,
    jd: _0x404d74,
    gi: _0x3c6ef2,
    x: _0x49fdc6,
    P: _0x3e9009,
    cd: _0x46d08e,
    mb: _0x25ca04,
    Ja: _0x975622,
    lg: _0x306c5f,
    va: _0x43d058,
    kc: _0x245e0d,
    vg: _0x39c107,
    Sa: _0x191510,
    Ge: _0x187f12,
    Ee: _0x15eb5b,
    Xe: _0xdc4c2,
    Qe: _0x934588,
    Ne: _0x30032c,
    We: _0x563520,
    Mb: _0x5e4cfc,
    bd: _0x58ebba,
    J: _0xe8e397,
    Nb: _0x3c2766,
    He: _0x58f180,
    rf: _0x8bfae1,
    C: _0x203903,
    E: _0x31ba9f,
    dk: _0x503e1f,
    Ye: _0x39483a,
    Re: _0x4bb50f,
    ek: _0x4f4d32,
    Ob: _0x5c7386,
    Ab: _0x42f38c,
    Pa: _0x411fb3,
    Te: _0x3e05f5,
    Ue: _0x5748f7,
    Sb: _0x4c109c,
    Rb: _0x1c3967,
    Be: _0x2c7e29,
    ma: _0x397d47,
    ka: _0x366708,
    la: _0x4c96b7,
    ze: _0x1f1abd,
    De: _0x28a545,
    Zb: _0x5bc7b5,
    Yb: _0x574143,
    _b: _0x26558d,
    Se: _0x5a2ab4,
    Tb: _0x3c71a1,
    Vb: _0x4ff1db,
    Ub: _0x457acd,
    Wb: _0x2f5be1,
    Xb: _0x529417,
    _c: _0x2a7e3a,
    tf: _0x207ef8,
    sf: _0x21dee0,
    na: _0x1cf8e3,
    pf: _0x461267,
    Wf: _0x424826,
    oa: _0x4058a8,
    pe: _0x5daaeb,
    Ae: _0x4f3132,
    A: _0x17bda7,
    Z: _0x923f08,
    hc: _0x58f9ad,
    ob: _0x88fa63,
    ye: _0x31b872,
    fb: _0x56bde1,
    sa: _0x248947,
    b: _0x43a48c,
    td: _0x193d0b,
    Ef: _0x51ced0,
    Ff: _0x39dac3,
    rb: _0x596172,
    Uf: _0x5d5701,
    Ha: _0x1c2968,
    _h: _0x3240e7,
    Xh: _0x631728,
    jc: _0x2952af,
    Lg: _0x4a9766,
    Ca: _0x160982,
    Wh: _0x376da4,
    jg: _0x1169f1,
    ig: _0x7b8f77,
    Th: _0x28a2c4,
    Uh: _0x4f3714,
    cg: _0x45ed04,
    Vh: _0x540c5c,
    Eg: _0x5cabf8,
    Hg: _0x38127a,
    Cc: _0x4e9702,
    Dc: _0x2dc542,
    Ec: _0x388368,
    wg: _0x2e3d36,
    Rh: _0x1f3bb1,
    Sh: _0x371a02,
    Qh: _0x337bbc,
    Mh: _0x4d7f02,
    _f: _0x2fbaa5,
    Yf: _0x409ad5,
    Xf: _0x16b8f5,
    Nh: _0x252475,
    Oh: _0x30dd3f,
    Ph: _0xbd06aa,
    vd: _0xb64747,
    gb: _0x1ada97,
    Lh: _0x1b8484,
    Jh: _0x5805e2,
    yg: _0x4d5a50,
    Kh: _0x223536,
    Cg: _0x5b95cd,
    ng: _0x3564c6,
    Ih: _0x816427,
    Bc: _0x4e34e6,
    Hh: _0xfeb0d6,
    Gh: _0x13c884,
    Fh: _0x331382,
    Eh: _0x150a66,
    Dh: _0x2ba4ef,
    Ch: _0x969544,
    _a: _0x311b73,
    Bh: _0x14f546,
    bg: _0x2ea15e,
    Ah: _0xe147d9,
    ec: _0x2b2d66,
    zh: _0x3e3c1b,
    Fg: _0x1b0773,
    Jg: _0x309649,
    Aa: _0x1e632e,
    za: _0x48bac5,
    yh: _0x1a478b,
    xh: _0x19b6a4,
    wh: _0x54c770,
    th: _0x5c3bb1,
    pg: _0x2cc086,
    mg: _0x40edcc,
    uh: _0x3b8417,
    og: _0x5c59bd,
    vh: _0xb8c359,
    sh: _0xb8cc7d,
    lc: _0x39e98e,
    Mg: _0x90a4ea,
    dc: _0x5e1ac5,
    ph: _0x54b4f2,
    qh: _0x1fc809,
    sg: _0x396481,
    U: _0xc1ad54,
    R: _0x113118,
    ua: _0x57b906,
    ya: _0x16fbe5,
    oh: _0x3cb4fd,
    kh: _0x343d0c,
    ic: _0x7c9ba4,
    lh: _0x10f659,
    ag: _0x2dfb22,
    nh: _0x543cf9,
    Gg: _0x5a108c,
    Kg: _0x183f29,
    mh: _0x5ce84e,
    ei: _0x55d9b2,
    eb: _0x33a8c1,
    Xa: _0x70e823,
    aa: _0x137dfe,
    $: _0x396a56,
    di: _0x4d5d66,
    of: _0x1eb034,
    jh: _0x588330,
    ih: _0x1c36ec,
    Zh: _0x2cc41b,
    Da: _0x5a91ed,
    eg: _0x4ff084,
    fc: _0x518e98,
    ai: _0x3be780,
    Y: _0x5754be,
    Og: _0x3b5da7,
    Ng: _0x276426,
    rh: _0x5ea440,
    gh: _0x30bfa7,
    Ac: _0x53fddf,
    hh: _0x4daa02,
    $h: _0x2e71a8,
    fh: _0x157cc4,
    tg: _0x3e8280,
    eh: _0x4df475,
    gg: _0x4baab9,
    Wa: _0x5ab210,
    ia: _0x47cb1e,
    zc: _0x4e3c17,
    ci: _0xc95ece,
    Za: _0x1197a2,
    Yh: _0x2ac1cf,
    Ig: _0x2b1493,
    ch: _0x48dbea,
    qg: _0x269d18,
    dh: _0x41ca0f,
    yc: _0x17ae0b,
    gc: _0xeca127,
    $f: _0x2c849a,
    kg: _0x334749,
    ca: _0x37b633,
    bh: _0x4e3add,
    ug: _0x56fb50,
    dg: _0x5a21d9,
    cb: _0x46d372,
    $g: _0x2ff6e3,
    ah: _0x4c56bb,
    Yg: _0x496274,
    Zg: _0x124d41,
    Wg: _0x350b64,
    Ag: _0x2278ce,
    Xg: _0x807462,
    bb: _0x10546e,
    Vg: _0x44a88b,
    xg: _0x119994,
    zg: _0x2df724,
    Ug: _0x286ae0,
    Bg: _0x2ffbf4,
    Dg: _0x29f164,
    mc: _0x51fa33,
    wa: _0x4ac8da,
    nc: _0x231e3b,
    oc: _0x4282c4,
    pc: _0x4a69ae,
    qc: _0x5081d1,
    rc: _0xcf0261,
    ab: _0x17afc8,
    sc: _0x1aeced,
    tc: _0x2123e3,
    ba: _0x5192c6,
    uc: _0x27ee0e,
    vc: _0x400192,
    Ya: _0x37f1b3,
    wc: _0xcd0071,
    xa: _0x27b269,
    rg: _0x2cb0bf,
    Qg: _0x34c06e,
    bi: _0x338259,
    Rg: _0x292b2c,
    Sg: _0xdd8848,
    hg: _0x27f89b,
    Tg: _0x4a31fc,
    $a: _0x3cadd6,
    Jc: _0x3a7e1f,
    oi: _0xd3f796,
    H: _0x2deacb,
    O: _0x5141da,
    ni: _0x391900,
    K: _0xf1a32c,
    Cd: _0x41c8dc,
    Mc: _0x29f8ff,
    Ic: _0x2579f9,
    N: _0x244031,
    F: _0x219024,
    mi: _0x810594,
    L: _0x2103e2,
    w: _0x1ee46d,
    hb: _0x595ed1,
    Lc: _0x24b70d,
    d: _0x58acc9,
    Oc: _0x3739cb,
    qi: _0x3bfcaa,
    c: _0x3864a6,
    ib: _0x28184b,
    Nc: _0x115f7b,
    g: _0x4436b8,
    pi: _0x479d5d,
    wi: _0x2c6ee3,
    fi: _0x150033,
    q: _0x1326e4,
    Fa: _0x1b98fa,
    Vj: _0x5eeb03,
    s: _0x1e4321,
    u: _0x5c282a,
    z: _0x200886,
    D: _0xe60e4e,
    Q: _0x36cd25,
    Fc: _0x2ab557,
    Wj: _0x39857a,
    Qd: _0x4140e4,
    Ld: _0x526d1e,
    Nd: _0xef81a5,
    Kd: _0x3be593,
    we: _0x9bcaf0,
    Md: _0x5c803e,
    te: _0x979cc7,
    ue: _0x4c7380,
    le: _0x4494b4,
    Zd: _0xf9156d,
    ke: _0x3cf070,
    Hd: _0x4f333a,
    Dd: _0xce8d10,
    Id: _0x350c3e,
    Ud: _0x1b69bf,
    de: _0x545027,
    oe: _0x438664,
    ve: _0x1a5813,
    he: _0x41b0bf,
    se: _0x334f04,
    Yd: _0x7b7977,
    re: _0x2129b1,
    ee: _0x31344b,
    xe: _0x2dd4e2,
    wd: _0x2b537a,
    Bd: _0x139b3c,
    Fd: _0x11b58b,
    ce: _0x53ad21,
    be: _0x1e7134,
    xd: _0x19bd6a,
    Rd: _0x59a44d,
    ae: _0x4a21c1,
    me: _0x580dd5,
    ne: _0x3a5650,
    e: _0x4bbbdd,
    l: _0x496af2,
    uf: _0xa7e24c,
    y: _0x553722,
    G: _0xf4c444,
    m: _0x3c9c3a,
    Ia: _0x4d5e7c,
    Ba: _0x281c87,
    W: _0x20d915,
    Vc: _0x258d7c,
    M: _0x20e439,
    i: _0x22e508,
    bk: _0x2aa192,
    n: _0x680d33,
    ri: _0x1b9a44,
    r: _0x36f33f,
    t: _0x57f028,
    B: _0x679938,
    li: _0x15d0a8,
    ki: _0x416248,
    T: _0xe8253e,
    Ed: _0x3c90ef,
    I: _0x5bbe6d,
    V: _0xca433b,
    Wc: _0x371d0b,
    Ea: _0x15d606,
    Ga: _0x5e41b1,
    Kc: _0x3bf9a4,
    Sd: _0x571eaa,
    _d: _0x4c2f4e,
    Xd: _0x1a29d5,
    Wd: _0x486bf1,
    $d: _0x3f8bd0,
    je: _0x16f4ae,
    Jd: _0x1bdf55,
    yd: _0x5d5408,
    Td: _0x5e4f0c,
    ie: _0x118f9f,
    fe: _0x1bc4fb,
    qe: _0x1ef706,
    ge: _0x32e5f8,
    Vd: _0x583566,
    Od: _0x30732e,
    Gd: _0x2554e0,
    Pd: _0x41f96c,
    zd: _0x3f36ef,
    Ad: _0x3951ab,
    j: _0x2462c3,
    _: _0x2442de,
    v: _0x13c9ba,
    Ma: _0x3be458,
    Na: _0x4282ca,
    Ka: _0x4ac7fb,
    X: _0x2acf83,
    nb: _0xeef2c0
  };
  var _0x5bb84b = _0x38222e();
  var _0x5a6cd7 = _0x3255d0.___wasm_call_ctors = function () {
    return (_0x5a6cd7 = _0x3255d0.___wasm_call_ctors = _0x3255d0.asm.gk).apply(null, arguments);
  };
  var _0x41af77 = _0x3255d0._ReleaseKeys = function () {
    return (_0x41af77 = _0x3255d0._ReleaseKeys = _0x3255d0.asm.hk).apply(null, arguments);
  };
  var _0x14a036 = _0x3255d0._SendMessageFloat = function () {
    return (_0x14a036 = _0x3255d0._SendMessageFloat = _0x3255d0.asm.ik).apply(null, arguments);
  };
  var _0x215262 = _0x3255d0._SendMessageString = function () {
    return (_0x215262 = _0x3255d0._SendMessageString = _0x3255d0.asm.jk).apply(null, arguments);
  };
  var _0x3cba6f = _0x3255d0._SendMessage = function () {
    return (_0x3cba6f = _0x3255d0._SendMessage = _0x3255d0.asm.kk).apply(null, arguments);
  };
  var _0x4b5722 = _0x3255d0._SetFullscreen = function () {
    return (_0x4b5722 = _0x3255d0._SetFullscreen = _0x3255d0.asm.lk).apply(null, arguments);
  };
  var _0x2c807c = _0x3255d0._main = function () {
    return (_0x2c807c = _0x3255d0._main = _0x3255d0.asm.mk).apply(null, arguments);
  };
  var _0x51c8a5 = _0x3255d0.___errno_location = function () {
    return (_0x51c8a5 = _0x3255d0.___errno_location = _0x3255d0.asm.nk).apply(null, arguments);
  };
  var _0x254e44 = _0x3255d0._htonl = function () {
    return (_0x254e44 = _0x3255d0._htonl = _0x3255d0.asm.ok).apply(null, arguments);
  };
  var _0x116ce3 = _0x3255d0._htons = function () {
    return (_0x116ce3 = _0x3255d0._htons = _0x3255d0.asm.pk).apply(null, arguments);
  };
  var _0x27552d = _0x3255d0._ntohs = function () {
    return (_0x27552d = _0x3255d0._ntohs = _0x3255d0.asm.qk).apply(null, arguments);
  };
  var _0x5b33a7 = _0x3255d0.__get_tzname = function () {
    return (_0x5b33a7 = _0x3255d0.__get_tzname = _0x3255d0.asm.rk).apply(null, arguments);
  };
  var _0x3ed6a3 = _0x3255d0.__get_daylight = function () {
    return (_0x3ed6a3 = _0x3255d0.__get_daylight = _0x3255d0.asm.sk).apply(null, arguments);
  };
  var _0xe263c8 = _0x3255d0.__get_timezone = function () {
    return (_0xe263c8 = _0x3255d0.__get_timezone = _0x3255d0.asm.tk).apply(null, arguments);
  };
  var _0x1d6208 = _0x3255d0.stackSave = function () {
    return (_0x1d6208 = _0x3255d0.stackSave = _0x3255d0.asm.uk).apply(null, arguments);
  };
  var _0xe462e3 = _0x3255d0.stackRestore = function () {
    return (_0xe462e3 = _0x3255d0.stackRestore = _0x3255d0.asm.vk).apply(null, arguments);
  };
  var _0xf2adf5 = _0x3255d0.stackAlloc = function () {
    return (_0xf2adf5 = _0x3255d0.stackAlloc = _0x3255d0.asm.wk).apply(null, arguments);
  };
  var _0x5b12b4 = _0x3255d0._setThrew = function () {
    return (_0x5b12b4 = _0x3255d0._setThrew = _0x3255d0.asm.xk).apply(null, arguments);
  };
  var _0x5832c0 = _0x3255d0.___cxa_can_catch = function () {
    return (_0x5832c0 = _0x3255d0.___cxa_can_catch = _0x3255d0.asm.yk).apply(null, arguments);
  };
  var _0x3c18f7 = _0x3255d0.___cxa_is_pointer_type = function () {
    return (_0x3c18f7 = _0x3255d0.___cxa_is_pointer_type = _0x3255d0.asm.zk).apply(null, arguments);
  };
  var _0x311afe = _0x3255d0._malloc = function () {
    return (_0x311afe = _0x3255d0._malloc = _0x3255d0.asm.Ak).apply(null, arguments);
  };
  var _0x4200b9 = _0x3255d0._free = function () {
    return (_0x4200b9 = _0x3255d0._free = _0x3255d0.asm.Bk).apply(null, arguments);
  };
  var _0x1b4bd1 = _0x3255d0._memalign = function () {
    return (_0x1b4bd1 = _0x3255d0._memalign = _0x3255d0.asm.Ck).apply(null, arguments);
  };
  var _0xd1dbcb = _0x3255d0._memset = function () {
    return (_0xd1dbcb = _0x3255d0._memset = _0x3255d0.asm.Dk).apply(null, arguments);
  };
  var _0x2a2b74 = _0x3255d0._strlen = function () {
    return (_0x2a2b74 = _0x3255d0._strlen = _0x3255d0.asm.Ek).apply(null, arguments);
  };
  var _0x1c1102 = _0x3255d0.dynCall_iidiiii = function () {
    return (_0x1c1102 = _0x3255d0.dynCall_iidiiii = _0x3255d0.asm.Gk).apply(null, arguments);
  };
  var _0x419aa5 = _0x3255d0.dynCall_vii = function () {
    return (_0x419aa5 = _0x3255d0.dynCall_vii = _0x3255d0.asm.Hk).apply(null, arguments);
  };
  var _0x46e645 = _0x3255d0.dynCall_iii = function () {
    return (_0x46e645 = _0x3255d0.dynCall_iii = _0x3255d0.asm.Ik).apply(null, arguments);
  };
  var _0xd6a478 = _0x3255d0.dynCall_ii = function () {
    return (_0xd6a478 = _0x3255d0.dynCall_ii = _0x3255d0.asm.Jk).apply(null, arguments);
  };
  var _0x537d47 = _0x3255d0.dynCall_iiii = function () {
    return (_0x537d47 = _0x3255d0.dynCall_iiii = _0x3255d0.asm.Kk).apply(null, arguments);
  };
  var _0x5cc427 = _0x3255d0.dynCall_jiji = function () {
    return (_0x5cc427 = _0x3255d0.dynCall_jiji = _0x3255d0.asm.Lk).apply(null, arguments);
  };
  var _0x3c98fd = _0x3255d0.dynCall_vi = function () {
    return (_0x3c98fd = _0x3255d0.dynCall_vi = _0x3255d0.asm.Mk).apply(null, arguments);
  };
  var _0x1b5c22 = _0x3255d0.dynCall_iiiii = function () {
    return (_0x1b5c22 = _0x3255d0.dynCall_iiiii = _0x3255d0.asm.Nk).apply(null, arguments);
  };
  var _0x569696 = _0x3255d0.dynCall_viii = function () {
    return (_0x569696 = _0x3255d0.dynCall_viii = _0x3255d0.asm.Ok).apply(null, arguments);
  };
  var _0x54241f = _0x3255d0.dynCall_viiiiii = function () {
    return (_0x54241f = _0x3255d0.dynCall_viiiiii = _0x3255d0.asm.Pk).apply(null, arguments);
  };
  var _0x41f692 = _0x3255d0.dynCall_viiiii = function () {
    return (_0x41f692 = _0x3255d0.dynCall_viiiii = _0x3255d0.asm.Qk).apply(null, arguments);
  };
  var _0xe793b4 = _0x3255d0.dynCall_viiii = function () {
    return (_0xe793b4 = _0x3255d0.dynCall_viiii = _0x3255d0.asm.Rk).apply(null, arguments);
  };
  var _0x2e9058 = _0x3255d0.dynCall_iiiiii = function () {
    return (_0x2e9058 = _0x3255d0.dynCall_iiiiii = _0x3255d0.asm.Sk).apply(null, arguments);
  };
  var _0x2a6498 = _0x3255d0.dynCall_iiij = function () {
    return (_0x2a6498 = _0x3255d0.dynCall_iiij = _0x3255d0.asm.Tk).apply(null, arguments);
  };
  var _0x1b3699 = _0x3255d0.dynCall_v = function () {
    return (_0x1b3699 = _0x3255d0.dynCall_v = _0x3255d0.asm.Uk).apply(null, arguments);
  };
  var _0x51b38c = _0x3255d0.dynCall_i = function () {
    return (_0x51b38c = _0x3255d0.dynCall_i = _0x3255d0.asm.Vk).apply(null, arguments);
  };
  var _0x5f31d2 = _0x3255d0.dynCall_iiiiiiii = function () {
    return (_0x5f31d2 = _0x3255d0.dynCall_iiiiiiii = _0x3255d0.asm.Wk).apply(null, arguments);
  };
  var _0xbe4615 = _0x3255d0.dynCall_iiijiii = function () {
    return (_0xbe4615 = _0x3255d0.dynCall_iiijiii = _0x3255d0.asm.Xk).apply(null, arguments);
  };
  var _0x248155 = _0x3255d0.dynCall_iij = function () {
    return (_0x248155 = _0x3255d0.dynCall_iij = _0x3255d0.asm.Yk).apply(null, arguments);
  };
  var _0x3d0bd9 = _0x3255d0.dynCall_iiiiiii = function () {
    return (_0x3d0bd9 = _0x3255d0.dynCall_iiiiiii = _0x3255d0.asm.Zk).apply(null, arguments);
  };
  var _0x3ac978 = _0x3255d0.dynCall_jii = function () {
    return (_0x3ac978 = _0x3255d0.dynCall_jii = _0x3255d0.asm._k).apply(null, arguments);
  };
  var _0xbb384c = _0x3255d0.dynCall_viiiiiii = function () {
    return (_0xbb384c = _0x3255d0.dynCall_viiiiiii = _0x3255d0.asm.$k).apply(null, arguments);
  };
  var _0x1da6bf = _0x3255d0.dynCall_viiifi = function () {
    return (_0x1da6bf = _0x3255d0.dynCall_viiifi = _0x3255d0.asm.al).apply(null, arguments);
  };
  var _0x50f63d = _0x3255d0.dynCall_viiji = function () {
    return (_0x50f63d = _0x3255d0.dynCall_viiji = _0x3255d0.asm.bl).apply(null, arguments);
  };
  var _0xf7adf5 = _0x3255d0.dynCall_jiii = function () {
    return (_0xf7adf5 = _0x3255d0.dynCall_jiii = _0x3255d0.asm.cl).apply(null, arguments);
  };
  var _0x3b3c3f = _0x3255d0.dynCall_viiff = function () {
    return (_0x3b3c3f = _0x3255d0.dynCall_viiff = _0x3255d0.asm.dl).apply(null, arguments);
  };
  var _0x62b859 = _0x3255d0.dynCall_fii = function () {
    return (_0x62b859 = _0x3255d0.dynCall_fii = _0x3255d0.asm.el).apply(null, arguments);
  };
  var _0x2d227e = _0x3255d0.dynCall_viiiiiiiiifi = function () {
    return (_0x2d227e = _0x3255d0.dynCall_viiiiiiiiifi = _0x3255d0.asm.fl).apply(null, arguments);
  };
  var _0xb8b5a5 = _0x3255d0.dynCall_iiiiiiiiiiiii = function () {
    return (_0xb8b5a5 = _0x3255d0.dynCall_iiiiiiiiiiiii = _0x3255d0.asm.gl).apply(null, arguments);
  };
  var _0x5a51c0 = _0x3255d0.dynCall_viiiiiiiiiiii = function () {
    return (_0x5a51c0 = _0x3255d0.dynCall_viiiiiiiiiiii = _0x3255d0.asm.hl).apply(null, arguments);
  };
  var _0x3d4f03 = _0x3255d0.dynCall_viiiiiiiiiiiii = function () {
    return (_0x3d4f03 = _0x3255d0.dynCall_viiiiiiiiiiiii = _0x3255d0.asm.il).apply(null, arguments);
  };
  var _0x7a7fbe = _0x3255d0.dynCall_viiiiiiiiiiiiii = function () {
    return (_0x7a7fbe = _0x3255d0.dynCall_viiiiiiiiiiiiii = _0x3255d0.asm.jl).apply(null, arguments);
  };
  var _0x31a3dd = _0x3255d0.dynCall_viiiiiiiiiiiiiii = function () {
    return (_0x31a3dd = _0x3255d0.dynCall_viiiiiiiiiiiiiii = _0x3255d0.asm.kl).apply(null, arguments);
  };
  var _0x158df8 = _0x3255d0.dynCall_viiiiiiiiiiiiiiii = function () {
    return (_0x158df8 = _0x3255d0.dynCall_viiiiiiiiiiiiiiii = _0x3255d0.asm.ll).apply(null, arguments);
  };
  var _0x96f4da = _0x3255d0.dynCall_viiiiiiiiiiiiiiiii = function () {
    return (_0x96f4da = _0x3255d0.dynCall_viiiiiiiiiiiiiiiii = _0x3255d0.asm.ml).apply(null, arguments);
  };
  var _0x4b6de0 = _0x3255d0.dynCall_viiiiiiiiiiiiiiiiii = function () {
    return (_0x4b6de0 = _0x3255d0.dynCall_viiiiiiiiiiiiiiiiii = _0x3255d0.asm.nl).apply(null, arguments);
  };
  var _0x362d3d = _0x3255d0.dynCall_viidi = function () {
    return (_0x362d3d = _0x3255d0.dynCall_viidi = _0x3255d0.asm.ol).apply(null, arguments);
  };
  var _0x19a26f = _0x3255d0.dynCall_viifi = function () {
    return (_0x19a26f = _0x3255d0.dynCall_viifi = _0x3255d0.asm.pl).apply(null, arguments);
  };
  var _0x1376bf = _0x3255d0.dynCall_viiidi = function () {
    return (_0x1376bf = _0x3255d0.dynCall_viiidi = _0x3255d0.asm.ql).apply(null, arguments);
  };
  var _0x5cdbb0 = _0x3255d0.dynCall_viiiji = function () {
    return (_0x5cdbb0 = _0x3255d0.dynCall_viiiji = _0x3255d0.asm.rl).apply(null, arguments);
  };
  var _0x33d1d3 = _0x3255d0.dynCall_vijijii = function () {
    return (_0x33d1d3 = _0x3255d0.dynCall_vijijii = _0x3255d0.asm.sl).apply(null, arguments);
  };
  var _0x350f77 = _0x3255d0.dynCall_viiiiiiii = function () {
    return (_0x350f77 = _0x3255d0.dynCall_viiiiiiii = _0x3255d0.asm.tl).apply(null, arguments);
  };
  var _0xac1c8e = _0x3255d0.dynCall_viiiiiiiii = function () {
    return (_0xac1c8e = _0x3255d0.dynCall_viiiiiiiii = _0x3255d0.asm.ul).apply(null, arguments);
  };
  var _0x23d035 = _0x3255d0.dynCall_viiiiiiiiii = function () {
    return (_0x23d035 = _0x3255d0.dynCall_viiiiiiiiii = _0x3255d0.asm.vl).apply(null, arguments);
  };
  var _0x55222c = _0x3255d0.dynCall_viiiiiiiiiii = function () {
    return (_0x55222c = _0x3255d0.dynCall_viiiiiiiiiii = _0x3255d0.asm.wl).apply(null, arguments);
  };
  var _0x4033bb = _0x3255d0.dynCall_diii = function () {
    return (_0x4033bb = _0x3255d0.dynCall_diii = _0x3255d0.asm.xl).apply(null, arguments);
  };
  var _0x3b70fc = _0x3255d0.dynCall_iiiiiiiii = function () {
    return (_0x3b70fc = _0x3255d0.dynCall_iiiiiiiii = _0x3255d0.asm.yl).apply(null, arguments);
  };
  var _0x18b2fc = _0x3255d0.dynCall_iiiiidii = function () {
    return (_0x18b2fc = _0x3255d0.dynCall_iiiiidii = _0x3255d0.asm.zl).apply(null, arguments);
  };
  var _0x58aea0 = _0x3255d0.dynCall_iiiiiiiiii = function () {
    return (_0x58aea0 = _0x3255d0.dynCall_iiiiiiiiii = _0x3255d0.asm.Al).apply(null, arguments);
  };
  var _0x37c7c2 = _0x3255d0.dynCall_iijji = function () {
    return (_0x37c7c2 = _0x3255d0.dynCall_iijji = _0x3255d0.asm.Bl).apply(null, arguments);
  };
  var _0x448d69 = _0x3255d0.dynCall_iiddi = function () {
    return (_0x448d69 = _0x3255d0.dynCall_iiddi = _0x3255d0.asm.Cl).apply(null, arguments);
  };
  var _0x354105 = _0x3255d0.dynCall_iiffi = function () {
    return (_0x354105 = _0x3255d0.dynCall_iiffi = _0x3255d0.asm.Dl).apply(null, arguments);
  };
  var _0x4ecdb0 = _0x3255d0.dynCall_viiffi = function () {
    return (_0x4ecdb0 = _0x3255d0.dynCall_viiffi = _0x3255d0.asm.El).apply(null, arguments);
  };
  var _0x52f0fa = _0x3255d0.dynCall_vijii = function () {
    return (_0x52f0fa = _0x3255d0.dynCall_vijii = _0x3255d0.asm.Fl).apply(null, arguments);
  };
  var _0x148fea = _0x3255d0.dynCall_jiiji = function () {
    return (_0x148fea = _0x3255d0.dynCall_jiiji = _0x3255d0.asm.Gl).apply(null, arguments);
  };
  var _0x545325 = _0x3255d0.dynCall_ijiii = function () {
    return (_0x545325 = _0x3255d0.dynCall_ijiii = _0x3255d0.asm.Hl).apply(null, arguments);
  };
  var _0x5aa19a = _0x3255d0.dynCall_viij = function () {
    return (_0x5aa19a = _0x3255d0.dynCall_viij = _0x3255d0.asm.Il).apply(null, arguments);
  };
  var _0x13bd90 = _0x3255d0.dynCall_viiij = function () {
    return (_0x13bd90 = _0x3255d0.dynCall_viiij = _0x3255d0.asm.Jl).apply(null, arguments);
  };
  var _0x4f951c = _0x3255d0.dynCall_vifii = function () {
    return (_0x4f951c = _0x3255d0.dynCall_vifii = _0x3255d0.asm.Kl).apply(null, arguments);
  };
  var _0x1dc8fa = _0x3255d0.dynCall_vifi = function () {
    return (_0x1dc8fa = _0x3255d0.dynCall_vifi = _0x3255d0.asm.Ll).apply(null, arguments);
  };
  var _0x1c4b0e = _0x3255d0.dynCall_viif = function () {
    return (_0x1c4b0e = _0x3255d0.dynCall_viif = _0x3255d0.asm.Ml).apply(null, arguments);
  };
  var _0x16e723 = _0x3255d0.dynCall_dii = function () {
    return (_0x16e723 = _0x3255d0.dynCall_dii = _0x3255d0.asm.Nl).apply(null, arguments);
  };
  var _0x15d7c3 = _0x3255d0.dynCall_viffffi = function () {
    return (_0x15d7c3 = _0x3255d0.dynCall_viffffi = _0x3255d0.asm.Ol).apply(null, arguments);
  };
  var _0x16ac29 = _0x3255d0.dynCall_iiiifi = function () {
    return (_0x16ac29 = _0x3255d0.dynCall_iiiifi = _0x3255d0.asm.Pl).apply(null, arguments);
  };
  var _0x55a64b = _0x3255d0.dynCall_vidi = function () {
    return (_0x55a64b = _0x3255d0.dynCall_vidi = _0x3255d0.asm.Ql).apply(null, arguments);
  };
  var _0x421d38 = _0x3255d0.dynCall_iidi = function () {
    return (_0x421d38 = _0x3255d0.dynCall_iidi = _0x3255d0.asm.Rl).apply(null, arguments);
  };
  var _0x2091f0 = _0x3255d0.dynCall_iiiiidi = function () {
    return (_0x2091f0 = _0x3255d0.dynCall_iiiiidi = _0x3255d0.asm.Sl).apply(null, arguments);
  };
  var _0x588c9d = _0x3255d0.dynCall_iiji = function () {
    return (_0x588c9d = _0x3255d0.dynCall_iiji = _0x3255d0.asm.Tl).apply(null, arguments);
  };
  var _0x18cd36 = _0x3255d0.dynCall_iifi = function () {
    return (_0x18cd36 = _0x3255d0.dynCall_iifi = _0x3255d0.asm.Ul).apply(null, arguments);
  };
  var _0x1804c9 = _0x3255d0.dynCall_iiiifii = function () {
    return (_0x1804c9 = _0x3255d0.dynCall_iiiifii = _0x3255d0.asm.Vl).apply(null, arguments);
  };
  var _0x301e64 = _0x3255d0.dynCall_iiifii = function () {
    return (_0x301e64 = _0x3255d0.dynCall_iiifii = _0x3255d0.asm.Wl).apply(null, arguments);
  };
  var _0x536aa9 = _0x3255d0.dynCall_viiiifii = function () {
    return (_0x536aa9 = _0x3255d0.dynCall_viiiifii = _0x3255d0.asm.Xl).apply(null, arguments);
  };
  var _0x5242ae = _0x3255d0.dynCall_iijii = function () {
    return (_0x5242ae = _0x3255d0.dynCall_iijii = _0x3255d0.asm.Yl).apply(null, arguments);
  };
  var _0x2e5acb = _0x3255d0.dynCall_viji = function () {
    return (_0x2e5acb = _0x3255d0.dynCall_viji = _0x3255d0.asm.Zl).apply(null, arguments);
  };
  var _0x24129f = _0x3255d0.dynCall_fifffi = function () {
    return (_0x24129f = _0x3255d0.dynCall_fifffi = _0x3255d0.asm._l).apply(null, arguments);
  };
  var _0x5c611b = _0x3255d0.dynCall_viffi = function () {
    return (_0x5c611b = _0x3255d0.dynCall_viffi = _0x3255d0.asm.$l).apply(null, arguments);
  };
  var _0xa8238e = _0x3255d0.dynCall_iiififi = function () {
    return (_0xa8238e = _0x3255d0.dynCall_iiififi = _0x3255d0.asm.am).apply(null, arguments);
  };
  var _0x55dc1c = _0x3255d0.dynCall_iiifi = function () {
    return (_0x55dc1c = _0x3255d0.dynCall_iiifi = _0x3255d0.asm.bm).apply(null, arguments);
  };
  var _0xef9a39 = _0x3255d0.dynCall_jidi = function () {
    return (_0xef9a39 = _0x3255d0.dynCall_jidi = _0x3255d0.asm.cm).apply(null, arguments);
  };
  var _0x16abb1 = _0x3255d0.dynCall_ijji = function () {
    return (_0x16abb1 = _0x3255d0.dynCall_ijji = _0x3255d0.asm.dm).apply(null, arguments);
  };
  var _0x43bb71 = _0x3255d0.dynCall_fiiii = function () {
    return (_0x43bb71 = _0x3255d0.dynCall_fiiii = _0x3255d0.asm.em).apply(null, arguments);
  };
  var _0x4100bd = _0x3255d0.dynCall_fiii = function () {
    return (_0x4100bd = _0x3255d0.dynCall_fiii = _0x3255d0.asm.fm).apply(null, arguments);
  };
  var _0x2fabb2 = _0x3255d0.dynCall_viiiifi = function () {
    return (_0x2fabb2 = _0x3255d0.dynCall_viiiifi = _0x3255d0.asm.gm).apply(null, arguments);
  };
  var _0x884f06 = _0x3255d0.dynCall_ji = function () {
    return (_0x884f06 = _0x3255d0.dynCall_ji = _0x3255d0.asm.hm).apply(null, arguments);
  };
  var _0x249b25 = _0x3255d0.dynCall_jdi = function () {
    return (_0x249b25 = _0x3255d0.dynCall_jdi = _0x3255d0.asm.im).apply(null, arguments);
  };
  var _0x1cfeb1 = _0x3255d0.dynCall_vijiii = function () {
    return (_0x1cfeb1 = _0x3255d0.dynCall_vijiii = _0x3255d0.asm.jm).apply(null, arguments);
  };
  var _0x5e2a2a = _0x3255d0.dynCall_jiiii = function () {
    return (_0x5e2a2a = _0x3255d0.dynCall_jiiii = _0x3255d0.asm.km).apply(null, arguments);
  };
  var _0x441117 = _0x3255d0.dynCall_jji = function () {
    return (_0x441117 = _0x3255d0.dynCall_jji = _0x3255d0.asm.lm).apply(null, arguments);
  };
  var _0x217497 = _0x3255d0.dynCall_jjji = function () {
    return (_0x217497 = _0x3255d0.dynCall_jjji = _0x3255d0.asm.mm).apply(null, arguments);
  };
  var _0x32593d = _0x3255d0.dynCall_viiijj = function () {
    return (_0x32593d = _0x3255d0.dynCall_viiijj = _0x3255d0.asm.nm).apply(null, arguments);
  };
  var _0x577748 = _0x3255d0.dynCall_viijji = function () {
    return (_0x577748 = _0x3255d0.dynCall_viijji = _0x3255d0.asm.om).apply(null, arguments);
  };
  var _0x59f108 = _0x3255d0.dynCall_diiii = function () {
    return (_0x59f108 = _0x3255d0.dynCall_diiii = _0x3255d0.asm.pm).apply(null, arguments);
  };
  var _0x2175fe = _0x3255d0.dynCall_fffi = function () {
    return (_0x2175fe = _0x3255d0.dynCall_fffi = _0x3255d0.asm.qm).apply(null, arguments);
  };
  var _0x1b711b = _0x3255d0.dynCall_iji = function () {
    return (_0x1b711b = _0x3255d0.dynCall_iji = _0x3255d0.asm.rm).apply(null, arguments);
  };
  var _0x49bb55 = _0x3255d0.dynCall_vijiiii = function () {
    return (_0x49bb55 = _0x3255d0.dynCall_vijiiii = _0x3255d0.asm.sm).apply(null, arguments);
  };
  var _0x11c18c = _0x3255d0.dynCall_jjii = function () {
    return (_0x11c18c = _0x3255d0.dynCall_jjii = _0x3255d0.asm.tm).apply(null, arguments);
  };
  var _0x56414c = _0x3255d0.dynCall_iijiii = function () {
    return (_0x56414c = _0x3255d0.dynCall_iijiii = _0x3255d0.asm.um).apply(null, arguments);
  };
  var _0xe6d2d7 = _0x3255d0.dynCall_viijiiijiiii = function () {
    return (_0xe6d2d7 = _0x3255d0.dynCall_viijiiijiiii = _0x3255d0.asm.vm).apply(null, arguments);
  };
  var _0x4015f3 = _0x3255d0.dynCall_viiiijiii = function () {
    return (_0x4015f3 = _0x3255d0.dynCall_viiiijiii = _0x3255d0.asm.wm).apply(null, arguments);
  };
  var _0x43dd80 = _0x3255d0.dynCall_j = function () {
    return (_0x43dd80 = _0x3255d0.dynCall_j = _0x3255d0.asm.xm).apply(null, arguments);
  };
  var _0x3e74ed = _0x3255d0.dynCall_jijj = function () {
    return (_0x3e74ed = _0x3255d0.dynCall_jijj = _0x3255d0.asm.ym).apply(null, arguments);
  };
  var _0x38dd01 = _0x3255d0.dynCall_iiiiiiiiiji = function () {
    return (_0x38dd01 = _0x3255d0.dynCall_iiiiiiiiiji = _0x3255d0.asm.zm).apply(null, arguments);
  };
  var _0x2cd32e = _0x3255d0.dynCall_vji = function () {
    return (_0x2cd32e = _0x3255d0.dynCall_vji = _0x3255d0.asm.Am).apply(null, arguments);
  };
  var _0x1bee34 = _0x3255d0.dynCall_ifi = function () {
    return (_0x1bee34 = _0x3255d0.dynCall_ifi = _0x3255d0.asm.Bm).apply(null, arguments);
  };
  var _0x2e4b73 = _0x3255d0.dynCall_idi = function () {
    return (_0x2e4b73 = _0x3255d0.dynCall_idi = _0x3255d0.asm.Cm).apply(null, arguments);
  };
  var _0x3e1891 = _0x3255d0.dynCall_iiiiji = function () {
    return (_0x3e1891 = _0x3255d0.dynCall_iiiiji = _0x3255d0.asm.Dm).apply(null, arguments);
  };
  var _0x3d6109 = _0x3255d0.dynCall_dddi = function () {
    return (_0x3d6109 = _0x3255d0.dynCall_dddi = _0x3255d0.asm.Em).apply(null, arguments);
  };
  var _0x21d80b = _0x3255d0.dynCall_iiiji = function () {
    return (_0x21d80b = _0x3255d0.dynCall_iiiji = _0x3255d0.asm.Fm).apply(null, arguments);
  };
  var _0x273ff2 = _0x3255d0.dynCall_ddiii = function () {
    return (_0x273ff2 = _0x3255d0.dynCall_ddiii = _0x3255d0.asm.Gm).apply(null, arguments);
  };
  var _0x232fd8 = _0x3255d0.dynCall_iiiiij = function () {
    return (_0x232fd8 = _0x3255d0.dynCall_iiiiij = _0x3255d0.asm.Hm).apply(null, arguments);
  };
  var _0x52ac54 = _0x3255d0.dynCall_iiijii = function () {
    return (_0x52ac54 = _0x3255d0.dynCall_iiijii = _0x3255d0.asm.Im).apply(null, arguments);
  };
  var _0x34b688 = _0x3255d0.dynCall_iijiiii = function () {
    return (_0x34b688 = _0x3255d0.dynCall_iijiiii = _0x3255d0.asm.Jm).apply(null, arguments);
  };
  var _0x287348 = _0x3255d0.dynCall_jijiii = function () {
    return (_0x287348 = _0x3255d0.dynCall_jijiii = _0x3255d0.asm.Km).apply(null, arguments);
  };
  var _0x1bac9f = _0x3255d0.dynCall_viijii = function () {
    return (_0x1bac9f = _0x3255d0.dynCall_viijii = _0x3255d0.asm.Lm).apply(null, arguments);
  };
  var _0x267bc1 = _0x3255d0.dynCall_iijiiiiii = function () {
    return (_0x267bc1 = _0x3255d0.dynCall_iijiiiiii = _0x3255d0.asm.Mm).apply(null, arguments);
  };
  var _0x2beacd = _0x3255d0.dynCall_iijjiiiiii = function () {
    return (_0x2beacd = _0x3255d0.dynCall_iijjiiiiii = _0x3255d0.asm.Nm).apply(null, arguments);
  };
  var _0x5143af = _0x3255d0.dynCall_iiiijjii = function () {
    return (_0x5143af = _0x3255d0.dynCall_iiiijjii = _0x3255d0.asm.Om).apply(null, arguments);
  };
  var _0x2a3e6d = _0x3255d0.dynCall_vijjji = function () {
    return (_0x2a3e6d = _0x3255d0.dynCall_vijjji = _0x3255d0.asm.Pm).apply(null, arguments);
  };
  var _0x409b6f = _0x3255d0.dynCall_fiffffi = function () {
    return (_0x409b6f = _0x3255d0.dynCall_fiffffi = _0x3255d0.asm.Qm).apply(null, arguments);
  };
  var _0x3e87c0 = _0x3255d0.dynCall_diiid = function () {
    return (_0x3e87c0 = _0x3255d0.dynCall_diiid = _0x3255d0.asm.Rm).apply(null, arguments);
  };
  var _0x4c6561 = _0x3255d0.dynCall_jiiij = function () {
    return (_0x4c6561 = _0x3255d0.dynCall_jiiij = _0x3255d0.asm.Sm).apply(null, arguments);
  };
  var _0x132e00 = _0x3255d0.dynCall_fiiif = function () {
    return (_0x132e00 = _0x3255d0.dynCall_fiiif = _0x3255d0.asm.Tm).apply(null, arguments);
  };
  var _0x2a0f63 = _0x3255d0.dynCall_fi = function () {
    return (_0x2a0f63 = _0x3255d0.dynCall_fi = _0x3255d0.asm.Um).apply(null, arguments);
  };
  var _0x4455b8 = _0x3255d0.dynCall_iiiiiiiiiiii = function () {
    return (_0x4455b8 = _0x3255d0.dynCall_iiiiiiiiiiii = _0x3255d0.asm.Vm).apply(null, arguments);
  };
  var _0x1ace66 = _0x3255d0.dynCall_iiiiiiiiiiiiii = function () {
    return (_0x1ace66 = _0x3255d0.dynCall_iiiiiiiiiiiiii = _0x3255d0.asm.Wm).apply(null, arguments);
  };
  var _0x2cd702 = _0x3255d0.dynCall_iiiiiiiiiiiiiii = function () {
    return (_0x2cd702 = _0x3255d0.dynCall_iiiiiiiiiiiiiii = _0x3255d0.asm.Xm).apply(null, arguments);
  };
  var _0x59001d = _0x3255d0.dynCall_iiiiiiiiiiiiiiii = function () {
    return (_0x59001d = _0x3255d0.dynCall_iiiiiiiiiiiiiiii = _0x3255d0.asm.Ym).apply(null, arguments);
  };
  var _0x3a86fc = _0x3255d0.dynCall_iiiiiiiiiiiiiiiii = function () {
    return (_0x3a86fc = _0x3255d0.dynCall_iiiiiiiiiiiiiiiii = _0x3255d0.asm.Zm).apply(null, arguments);
  };
  var _0x2d2a74 = _0x3255d0.dynCall_iiiiiiiiiiiiiiiiii = function () {
    return (_0x2d2a74 = _0x3255d0.dynCall_iiiiiiiiiiiiiiiiii = _0x3255d0.asm._m).apply(null, arguments);
  };
  var _0x57158c = _0x3255d0.dynCall_iiiiiiiiiiiiiiiiiii = function () {
    return (_0x57158c = _0x3255d0.dynCall_iiiiiiiiiiiiiiiiiii = _0x3255d0.asm.$m).apply(null, arguments);
  };
  var _0xf02d6 = _0x3255d0.dynCall_fifi = function () {
    return (_0xf02d6 = _0x3255d0.dynCall_fifi = _0x3255d0.asm.an).apply(null, arguments);
  };
  var _0x37e7f5 = _0x3255d0.dynCall_fiifi = function () {
    return (_0x37e7f5 = _0x3255d0.dynCall_fiifi = _0x3255d0.asm.bn).apply(null, arguments);
  };
  var _0x374dfb = _0x3255d0.dynCall_iiiiiiiiiii = function () {
    return (_0x374dfb = _0x3255d0.dynCall_iiiiiiiiiii = _0x3255d0.asm.cn).apply(null, arguments);
  };
  var _0x3692a6 = _0x3255d0.dynCall_viiiiiiifiifii = function () {
    return (_0x3692a6 = _0x3255d0.dynCall_viiiiiiifiifii = _0x3255d0.asm.dn).apply(null, arguments);
  };
  var _0x5353f0 = _0x3255d0.dynCall_viiiiiiifddfii = function () {
    return (_0x5353f0 = _0x3255d0.dynCall_viiiiiiifddfii = _0x3255d0.asm.en).apply(null, arguments);
  };
  var _0x12bf7f = _0x3255d0.dynCall_viiiiiiifjjfii = function () {
    return (_0x12bf7f = _0x3255d0.dynCall_viiiiiiifjjfii = _0x3255d0.asm.fn).apply(null, arguments);
  };
  var _0x353064 = _0x3255d0.dynCall_viiiiiiiffffii = function () {
    return (_0x353064 = _0x3255d0.dynCall_viiiiiiiffffii = _0x3255d0.asm.gn).apply(null, arguments);
  };
  var _0x634058 = _0x3255d0.dynCall_fiiffi = function () {
    return (_0x634058 = _0x3255d0.dynCall_fiiffi = _0x3255d0.asm.hn).apply(null, arguments);
  };
  var _0x378506 = _0x3255d0.dynCall_viiififii = function () {
    return (_0x378506 = _0x3255d0.dynCall_viiififii = _0x3255d0.asm.jn).apply(null, arguments);
  };
  var _0x142101 = _0x3255d0.dynCall_dji = function () {
    return (_0x142101 = _0x3255d0.dynCall_dji = _0x3255d0.asm.kn).apply(null, arguments);
  };
  var _0x5b9017 = _0x3255d0.dynCall_jiiiiiiiiii = function () {
    return (_0x5b9017 = _0x3255d0.dynCall_jiiiiiiiiii = _0x3255d0.asm.ln).apply(null, arguments);
  };
  var _0x4eebd0 = _0x3255d0.dynCall_viijiiiiii = function () {
    return (_0x4eebd0 = _0x3255d0.dynCall_viijiiiiii = _0x3255d0.asm.mn).apply(null, arguments);
  };
  var _0x386b36 = _0x3255d0.dynCall_vjjjiiii = function () {
    return (_0x386b36 = _0x3255d0.dynCall_vjjjiiii = _0x3255d0.asm.nn).apply(null, arguments);
  };
  var _0x564540 = _0x3255d0.dynCall_vjiiiii = function () {
    return (_0x564540 = _0x3255d0.dynCall_vjiiiii = _0x3255d0.asm.on).apply(null, arguments);
  };
  var _0x46d0bb = _0x3255d0.dynCall_jiiiii = function () {
    return (_0x46d0bb = _0x3255d0.dynCall_jiiiii = _0x3255d0.asm.pn).apply(null, arguments);
  };
  var _0xb3dc3f = _0x3255d0.dynCall_viiiiji = function () {
    return (_0xb3dc3f = _0x3255d0.dynCall_viiiiji = _0x3255d0.asm.qn).apply(null, arguments);
  };
  var _0x15b424 = _0x3255d0.dynCall_viijiii = function () {
    return (_0x15b424 = _0x3255d0.dynCall_viijiii = _0x3255d0.asm.rn).apply(null, arguments);
  };
  var _0x12f555 = _0x3255d0.dynCall_viiifffii = function () {
    return (_0x12f555 = _0x3255d0.dynCall_viiifffii = _0x3255d0.asm.sn).apply(null, arguments);
  };
  var _0x14ccc6 = _0x3255d0.dynCall_viiiiifiii = function () {
    return (_0x14ccc6 = _0x3255d0.dynCall_viiiiifiii = _0x3255d0.asm.tn).apply(null, arguments);
  };
  var _0x4d46d9 = _0x3255d0.dynCall_viiiijji = function () {
    return (_0x4d46d9 = _0x3255d0.dynCall_viiiijji = _0x3255d0.asm.un).apply(null, arguments);
  };
  var _0x3df0e0 = _0x3255d0.dynCall_vjiji = function () {
    return (_0x3df0e0 = _0x3255d0.dynCall_vjiji = _0x3255d0.asm.vn).apply(null, arguments);
  };
  var _0x474fa5 = _0x3255d0.dynCall_vdii = function () {
    return (_0x474fa5 = _0x3255d0.dynCall_vdii = _0x3255d0.asm.wn).apply(null, arguments);
  };
  var _0x469ebe = _0x3255d0.dynCall_vfii = function () {
    return (_0x469ebe = _0x3255d0.dynCall_vfii = _0x3255d0.asm.xn).apply(null, arguments);
  };
  var _0x4029d3 = _0x3255d0.dynCall_vfiii = function () {
    return (_0x4029d3 = _0x3255d0.dynCall_vfiii = _0x3255d0.asm.yn).apply(null, arguments);
  };
  var _0x13f2f2 = _0x3255d0.dynCall_vijijiiiii = function () {
    return (_0x13f2f2 = _0x3255d0.dynCall_vijijiiiii = _0x3255d0.asm.zn).apply(null, arguments);
  };
  var _0x487d4f = _0x3255d0.dynCall_viiiiiji = function () {
    return (_0x487d4f = _0x3255d0.dynCall_viiiiiji = _0x3255d0.asm.An).apply(null, arguments);
  };
  var _0x5774a9 = _0x3255d0.dynCall_vijiiiiiii = function () {
    return (_0x5774a9 = _0x3255d0.dynCall_vijiiiiiii = _0x3255d0.asm.Bn).apply(null, arguments);
  };
  var _0x58b725 = _0x3255d0.dynCall_viffii = function () {
    return (_0x58b725 = _0x3255d0.dynCall_viffii = _0x3255d0.asm.Cn).apply(null, arguments);
  };
  var _0x194a60 = _0x3255d0.dynCall_viifiii = function () {
    return (_0x194a60 = _0x3255d0.dynCall_viifiii = _0x3255d0.asm.Dn).apply(null, arguments);
  };
  var _0x109eb6 = _0x3255d0.dynCall_vfiiii = function () {
    return (_0x109eb6 = _0x3255d0.dynCall_vfiiii = _0x3255d0.asm.En).apply(null, arguments);
  };
  var _0x4a76c0 = _0x3255d0.dynCall_vfiiiiii = function () {
    return (_0x4a76c0 = _0x3255d0.dynCall_vfiiiiii = _0x3255d0.asm.Fn).apply(null, arguments);
  };
  var _0x1c0e44 = _0x3255d0.dynCall_vfiiiii = function () {
    return (_0x1c0e44 = _0x3255d0.dynCall_vfiiiii = _0x3255d0.asm.Gn).apply(null, arguments);
  };
  var _0x4fd004 = _0x3255d0.dynCall_vifffi = function () {
    return (_0x4fd004 = _0x3255d0.dynCall_vifffi = _0x3255d0.asm.Hn).apply(null, arguments);
  };
  var _0x506927 = _0x3255d0.dynCall_vijji = function () {
    return (_0x506927 = _0x3255d0.dynCall_vijji = _0x3255d0.asm.In).apply(null, arguments);
  };
  var _0x2c41a7 = _0x3255d0.dynCall_iijjii = function () {
    return (_0x2c41a7 = _0x3255d0.dynCall_iijjii = _0x3255d0.asm.Jn).apply(null, arguments);
  };
  var _0x4deffb = _0x3255d0.dynCall_vffi = function () {
    return (_0x4deffb = _0x3255d0.dynCall_vffi = _0x3255d0.asm.Kn).apply(null, arguments);
  };
  var _0x5dbd2c = _0x3255d0.dynCall_ffffi = function () {
    return (_0x5dbd2c = _0x3255d0.dynCall_ffffi = _0x3255d0.asm.Ln).apply(null, arguments);
  };
  var _0x192384 = _0x3255d0.dynCall_fiffi = function () {
    return (_0x192384 = _0x3255d0.dynCall_fiffi = _0x3255d0.asm.Mn).apply(null, arguments);
  };
  var _0x3aeb4d = _0x3255d0.dynCall_iifffiii = function () {
    return (_0x3aeb4d = _0x3255d0.dynCall_iifffiii = _0x3255d0.asm.Nn).apply(null, arguments);
  };
  var _0x28e005 = _0x3255d0.dynCall_vifffii = function () {
    return (_0x28e005 = _0x3255d0.dynCall_vifffii = _0x3255d0.asm.On).apply(null, arguments);
  };
  var _0x2bcead = _0x3255d0.dynCall_viiifii = function () {
    return (_0x2bcead = _0x3255d0.dynCall_viiifii = _0x3255d0.asm.Pn).apply(null, arguments);
  };
  var _0x495551 = _0x3255d0.dynCall_iifii = function () {
    return (_0x495551 = _0x3255d0.dynCall_iifii = _0x3255d0.asm.Qn).apply(null, arguments);
  };
  var _0x3c25b5 = _0x3255d0.dynCall_ffi = function () {
    return (_0x3c25b5 = _0x3255d0.dynCall_ffi = _0x3255d0.asm.Rn).apply(null, arguments);
  };
  var _0x5252ca = _0x3255d0.dynCall_viiiiifi = function () {
    return (_0x5252ca = _0x3255d0.dynCall_viiiiifi = _0x3255d0.asm.Sn).apply(null, arguments);
  };
  var _0x1bb934 = _0x3255d0.dynCall_iiiiiifi = function () {
    return (_0x1bb934 = _0x3255d0.dynCall_iiiiiifi = _0x3255d0.asm.Tn).apply(null, arguments);
  };
  var _0x3e4204 = _0x3255d0.dynCall_viffiii = function () {
    return (_0x3e4204 = _0x3255d0.dynCall_viffiii = _0x3255d0.asm.Un).apply(null, arguments);
  };
  var _0x4e682c = _0x3255d0.dynCall_viiiiifii = function () {
    return (_0x4e682c = _0x3255d0.dynCall_viiiiifii = _0x3255d0.asm.Vn).apply(null, arguments);
  };
  var _0x1cac7a = _0x3255d0.dynCall_viiffiii = function () {
    return (_0x1cac7a = _0x3255d0.dynCall_viiffiii = _0x3255d0.asm.Wn).apply(null, arguments);
  };
  var _0x5951bb = _0x3255d0.dynCall_viiffii = function () {
    return (_0x5951bb = _0x3255d0.dynCall_viiffii = _0x3255d0.asm.Xn).apply(null, arguments);
  };
  var _0x1854d0 = _0x3255d0.dynCall_viiijiiii = function () {
    return (_0x1854d0 = _0x3255d0.dynCall_viiijiiii = _0x3255d0.asm.Yn).apply(null, arguments);
  };
  var _0x1b1c3d = _0x3255d0.dynCall_vifiiiii = function () {
    return (_0x1b1c3d = _0x3255d0.dynCall_vifiiiii = _0x3255d0.asm.Zn).apply(null, arguments);
  };
  var _0x4a984e = _0x3255d0.dynCall_iiffiii = function () {
    return (_0x4a984e = _0x3255d0.dynCall_iiffiii = _0x3255d0.asm._n).apply(null, arguments);
  };
  var _0x2f64c3 = _0x3255d0.dynCall_fji = function () {
    return (_0x2f64c3 = _0x3255d0.dynCall_fji = _0x3255d0.asm.$n).apply(null, arguments);
  };
  var _0x27b598 = _0x3255d0.dynCall_fffffi = function () {
    return (_0x27b598 = _0x3255d0.dynCall_fffffi = _0x3255d0.asm.ao).apply(null, arguments);
  };
  var _0x562e1a = _0x3255d0.dynCall_viifii = function () {
    return (_0x562e1a = _0x3255d0.dynCall_viifii = _0x3255d0.asm.bo).apply(null, arguments);
  };
  var _0x18453b = _0x3255d0.dynCall_iijjji = function () {
    return (_0x18453b = _0x3255d0.dynCall_iijjji = _0x3255d0.asm.co).apply(null, arguments);
  };
  var _0x235aeb = _0x3255d0.dynCall_vifiii = function () {
    return (_0x235aeb = _0x3255d0.dynCall_vifiii = _0x3255d0.asm.eo).apply(null, arguments);
  };
  var _0x4c9b79 = _0x3255d0.dynCall_fifiii = function () {
    return (_0x4c9b79 = _0x3255d0.dynCall_fifiii = _0x3255d0.asm.fo).apply(null, arguments);
  };
  var _0x21bb8c = _0x3255d0.dynCall_viifffffii = function () {
    return (_0x21bb8c = _0x3255d0.dynCall_viifffffii = _0x3255d0.asm.go).apply(null, arguments);
  };
  var _0x5ae923 = _0x3255d0.dynCall_vidddi = function () {
    return (_0x5ae923 = _0x3255d0.dynCall_vidddi = _0x3255d0.asm.ho).apply(null, arguments);
  };
  var _0x3ce01d = _0x3255d0.dynCall_iiifiii = function () {
    return (_0x3ce01d = _0x3255d0.dynCall_iiifiii = _0x3255d0.asm.io).apply(null, arguments);
  };
  var _0x42cc6b = _0x3255d0.dynCall_viiiiiffi = function () {
    return (_0x42cc6b = _0x3255d0.dynCall_viiiiiffi = _0x3255d0.asm.jo).apply(null, arguments);
  };
  var _0x3a688e = _0x3255d0.dynCall_viifiifi = function () {
    return (_0x3a688e = _0x3255d0.dynCall_viifiifi = _0x3255d0.asm.ko).apply(null, arguments);
  };
  var _0x10c965 = _0x3255d0.dynCall_iffiiii = function () {
    return (_0x10c965 = _0x3255d0.dynCall_iffiiii = _0x3255d0.asm.lo).apply(null, arguments);
  };
  var _0x556515 = _0x3255d0.dynCall_ijjiiii = function () {
    return (_0x556515 = _0x3255d0.dynCall_ijjiiii = _0x3255d0.asm.mo).apply(null, arguments);
  };
  var _0x1133ba = _0x3255d0.dynCall_vfi = function () {
    return (_0x1133ba = _0x3255d0.dynCall_vfi = _0x3255d0.asm.no).apply(null, arguments);
  };
  var _0x120481 = _0x3255d0.dynCall_viiiijii = function () {
    return (_0x120481 = _0x3255d0.dynCall_viiiijii = _0x3255d0.asm.oo).apply(null, arguments);
  };
  var _0x2366c9 = _0x3255d0.dynCall_vifiiii = function () {
    return (_0x2366c9 = _0x3255d0.dynCall_vifiiii = _0x3255d0.asm.po).apply(null, arguments);
  };
  var _0x3547c1 = _0x3255d0.dynCall_iiffii = function () {
    return (_0x3547c1 = _0x3255d0.dynCall_iiffii = _0x3255d0.asm.qo).apply(null, arguments);
  };
  var _0x18cc4f = _0x3255d0.dynCall_iiififii = function () {
    return (_0x18cc4f = _0x3255d0.dynCall_iiififii = _0x3255d0.asm.ro).apply(null, arguments);
  };
  var _0x3eca10 = _0x3255d0.dynCall_iiffffiii = function () {
    return (_0x3eca10 = _0x3255d0.dynCall_iiffffiii = _0x3255d0.asm.so).apply(null, arguments);
  };
  var _0xdd12e9 = _0x3255d0.dynCall_iiiffi = function () {
    return (_0xdd12e9 = _0x3255d0.dynCall_iiiffi = _0x3255d0.asm.to).apply(null, arguments);
  };
  var _0x3a9b64 = _0x3255d0.dynCall_iiiififi = function () {
    return (_0x3a9b64 = _0x3255d0.dynCall_iiiififi = _0x3255d0.asm.uo).apply(null, arguments);
  };
  var _0x1b0891 = _0x3255d0.dynCall_iiiffifii = function () {
    return (_0x1b0891 = _0x3255d0.dynCall_iiiffifii = _0x3255d0.asm.vo).apply(null, arguments);
  };
  var _0x3dc054 = _0x3255d0.dynCall_iiifiifi = function () {
    return (_0x3dc054 = _0x3255d0.dynCall_iiifiifi = _0x3255d0.asm.wo).apply(null, arguments);
  };
  var _0x3b872d = _0x3255d0.dynCall_iiifiifiii = function () {
    return (_0x3b872d = _0x3255d0.dynCall_iiifiifiii = _0x3255d0.asm.xo).apply(null, arguments);
  };
  var _0x31a070 = _0x3255d0.dynCall_iifiiiiii = function () {
    return (_0x31a070 = _0x3255d0.dynCall_iifiiiiii = _0x3255d0.asm.yo).apply(null, arguments);
  };
  var _0x1e47f5 = _0x3255d0.dynCall_iifiiiii = function () {
    return (_0x1e47f5 = _0x3255d0.dynCall_iifiiiii = _0x3255d0.asm.zo).apply(null, arguments);
  };
  var _0x2348b8 = _0x3255d0.dynCall_iiffiiiii = function () {
    return (_0x2348b8 = _0x3255d0.dynCall_iiffiiiii = _0x3255d0.asm.Ao).apply(null, arguments);
  };
  var _0x552988 = _0x3255d0.dynCall_iiffifii = function () {
    return (_0x552988 = _0x3255d0.dynCall_iiffifii = _0x3255d0.asm.Bo).apply(null, arguments);
  };
  var _0x22d4f7 = _0x3255d0.dynCall_iifiifi = function () {
    return (_0x22d4f7 = _0x3255d0.dynCall_iifiifi = _0x3255d0.asm.Co).apply(null, arguments);
  };
  var _0x4c6887 = _0x3255d0.dynCall_iifiii = function () {
    return (_0x4c6887 = _0x3255d0.dynCall_iifiii = _0x3255d0.asm.Do).apply(null, arguments);
  };
  var _0x4c7a83 = _0x3255d0.dynCall_fiifii = function () {
    return (_0x4c7a83 = _0x3255d0.dynCall_fiifii = _0x3255d0.asm.Eo).apply(null, arguments);
  };
  var _0xe3efc3 = _0x3255d0.dynCall_viiiiiifiifiii = function () {
    return (_0xe3efc3 = _0x3255d0.dynCall_viiiiiifiifiii = _0x3255d0.asm.Fo).apply(null, arguments);
  };
  var _0x2325bf = _0x3255d0.dynCall_diidi = function () {
    return (_0x2325bf = _0x3255d0.dynCall_diidi = _0x3255d0.asm.Go).apply(null, arguments);
  };
  var _0x329ba9 = _0x3255d0.dynCall_fiifdi = function () {
    return (_0x329ba9 = _0x3255d0.dynCall_fiifdi = _0x3255d0.asm.Ho).apply(null, arguments);
  };
  var _0x319ffd = _0x3255d0.dynCall_viiiiiifddfiii = function () {
    return (_0x319ffd = _0x3255d0.dynCall_viiiiiifddfiii = _0x3255d0.asm.Io).apply(null, arguments);
  };
  var _0x4d2407 = _0x3255d0.dynCall_fiifji = function () {
    return (_0x4d2407 = _0x3255d0.dynCall_fiifji = _0x3255d0.asm.Jo).apply(null, arguments);
  };
  var _0x55e536 = _0x3255d0.dynCall_viiiiiifjjfiii = function () {
    return (_0x55e536 = _0x3255d0.dynCall_viiiiiifjjfiii = _0x3255d0.asm.Ko).apply(null, arguments);
  };
  var _0x2f14e7 = _0x3255d0.dynCall_viiiiiiffffiii = function () {
    return (_0x2f14e7 = _0x3255d0.dynCall_viiiiiiffffiii = _0x3255d0.asm.Lo).apply(null, arguments);
  };
  var _0x2c8b05 = _0x3255d0.dynCall_iiiiifiii = function () {
    return (_0x2c8b05 = _0x3255d0.dynCall_iiiiifiii = _0x3255d0.asm.Mo).apply(null, arguments);
  };
  var _0x5ad0e5 = _0x3255d0.dynCall_fiiffffi = function () {
    return (_0x5ad0e5 = _0x3255d0.dynCall_fiiffffi = _0x3255d0.asm.No).apply(null, arguments);
  };
  var _0xb37f37 = _0x3255d0.dynCall_fffifffi = function () {
    return (_0xb37f37 = _0x3255d0.dynCall_fffifffi = _0x3255d0.asm.Oo).apply(null, arguments);
  };
  var _0x25cdcc = _0x3255d0.dynCall_ifiiii = function () {
    return (_0x25cdcc = _0x3255d0.dynCall_ifiiii = _0x3255d0.asm.Po).apply(null, arguments);
  };
  var _0x32ffae = _0x3255d0.dynCall_idiiiii = function () {
    return (_0x32ffae = _0x3255d0.dynCall_idiiiii = _0x3255d0.asm.Qo).apply(null, arguments);
  };
  var _0x396f1c = _0x3255d0.dynCall_idiiii = function () {
    return (_0x396f1c = _0x3255d0.dynCall_idiiii = _0x3255d0.asm.Ro).apply(null, arguments);
  };
  var _0x38ee99 = _0x3255d0.dynCall_idii = function () {
    return (_0x38ee99 = _0x3255d0.dynCall_idii = _0x3255d0.asm.So).apply(null, arguments);
  };
  var _0x3a4c9f = _0x3255d0.dynCall_ijii = function () {
    return (_0x3a4c9f = _0x3255d0.dynCall_ijii = _0x3255d0.asm.To).apply(null, arguments);
  };
  var _0x138ebe = _0x3255d0.dynCall_iidii = function () {
    return (_0x138ebe = _0x3255d0.dynCall_iidii = _0x3255d0.asm.Uo).apply(null, arguments);
  };
  var _0x145135 = _0x3255d0.dynCall_iidiii = function () {
    return (_0x145135 = _0x3255d0.dynCall_iidiii = _0x3255d0.asm.Vo).apply(null, arguments);
  };
  var _0x5e153f = _0x3255d0.dynCall_iiijiiii = function () {
    return (_0x5e153f = _0x3255d0.dynCall_iiijiiii = _0x3255d0.asm.Wo).apply(null, arguments);
  };
  var _0x376782 = _0x3255d0.dynCall_vjiiii = function () {
    return (_0x376782 = _0x3255d0.dynCall_vjiiii = _0x3255d0.asm.Xo).apply(null, arguments);
  };
  var _0x46da13 = _0x3255d0.dynCall_iddi = function () {
    return (_0x46da13 = _0x3255d0.dynCall_iddi = _0x3255d0.asm.Yo).apply(null, arguments);
  };
  var _0x37f203 = _0x3255d0.dynCall_vifiifi = function () {
    return (_0x37f203 = _0x3255d0.dynCall_vifiifi = _0x3255d0.asm.Zo).apply(null, arguments);
  };
  var _0x1dd912 = _0x3255d0.dynCall_viddfffi = function () {
    return (_0x1dd912 = _0x3255d0.dynCall_viddfffi = _0x3255d0.asm._o).apply(null, arguments);
  };
  var _0x19a153 = _0x3255d0.dynCall_viidfffi = function () {
    return (_0x19a153 = _0x3255d0.dynCall_viidfffi = _0x3255d0.asm.$o).apply(null, arguments);
  };
  var _0x5e74a9 = _0x3255d0.dynCall_vidifffi = function () {
    return (_0x5e74a9 = _0x3255d0.dynCall_vidifffi = _0x3255d0.asm.ap).apply(null, arguments);
  };
  var _0x2d6250 = _0x3255d0.dynCall_viiifffi = function () {
    return (_0x2d6250 = _0x3255d0.dynCall_viiifffi = _0x3255d0.asm.bp).apply(null, arguments);
  };
  var _0x311483 = _0x3255d0.dynCall_viddi = function () {
    return (_0x311483 = _0x3255d0.dynCall_viddi = _0x3255d0.asm.cp).apply(null, arguments);
  };
  var _0x4ded43 = _0x3255d0.dynCall_vidii = function () {
    return (_0x4ded43 = _0x3255d0.dynCall_vidii = _0x3255d0.asm.dp).apply(null, arguments);
  };
  var _0x5f45b2 = _0x3255d0.dynCall_viiiiiiifi = function () {
    return (_0x5f45b2 = _0x3255d0.dynCall_viiiiiiifi = _0x3255d0.asm.ep).apply(null, arguments);
  };
  var _0x4904b7 = _0x3255d0.dynCall_viiiiffffffffii = function () {
    return (_0x4904b7 = _0x3255d0.dynCall_viiiiffffffffii = _0x3255d0.asm.fp).apply(null, arguments);
  };
  var _0x5be3c2 = _0x3255d0.dynCall_viidii = function () {
    return (_0x5be3c2 = _0x3255d0.dynCall_viidii = _0x3255d0.asm.gp).apply(null, arguments);
  };
  var _0x3d3f1e = _0x3255d0.dynCall_iffi = function () {
    return (_0x3d3f1e = _0x3255d0.dynCall_iffi = _0x3255d0.asm.hp).apply(null, arguments);
  };
  var _0x5d8b11 = _0x3255d0.dynCall_viiffffi = function () {
    return (_0x5d8b11 = _0x3255d0.dynCall_viiffffi = _0x3255d0.asm.ip).apply(null, arguments);
  };
  var _0x2bc424 = _0x3255d0.dynCall_ffffii = function () {
    return (_0x2bc424 = _0x3255d0.dynCall_ffffii = _0x3255d0.asm.jp).apply(null, arguments);
  };
  var _0x130ef7 = _0x3255d0.dynCall_ffii = function () {
    return (_0x130ef7 = _0x3255d0.dynCall_ffii = _0x3255d0.asm.kp).apply(null, arguments);
  };
  var _0x5c5e82 = _0x3255d0.dynCall_fiiiii = function () {
    return (_0x5c5e82 = _0x3255d0.dynCall_fiiiii = _0x3255d0.asm.lp).apply(null, arguments);
  };
  var _0xc7ba90 = _0x3255d0.dynCall_ddddi = function () {
    return (_0xc7ba90 = _0x3255d0.dynCall_ddddi = _0x3255d0.asm.mp).apply(null, arguments);
  };
  var _0xb0d2fa = _0x3255d0.dynCall_ddi = function () {
    return (_0xb0d2fa = _0x3255d0.dynCall_ddi = _0x3255d0.asm.np).apply(null, arguments);
  };
  var _0x339783 = _0x3255d0.dynCall_jijii = function () {
    return (_0x339783 = _0x3255d0.dynCall_jijii = _0x3255d0.asm.op).apply(null, arguments);
  };
  var _0x4157c8 = _0x3255d0.dynCall_iiiiiji = function () {
    return (_0x4157c8 = _0x3255d0.dynCall_iiiiiji = _0x3255d0.asm.pp).apply(null, arguments);
  };
  var _0x244baa = _0x3255d0.dynCall_viiijii = function () {
    return (_0x244baa = _0x3255d0.dynCall_viiijii = _0x3255d0.asm.qp).apply(null, arguments);
  };
  var _0x34e99b = _0x3255d0.dynCall_vdiiiii = function () {
    return (_0x34e99b = _0x3255d0.dynCall_vdiiiii = _0x3255d0.asm.rp).apply(null, arguments);
  };
  var _0x55c823 = _0x3255d0.dynCall_diiji = function () {
    return (_0x55c823 = _0x3255d0.dynCall_diiji = _0x3255d0.asm.sp).apply(null, arguments);
  };
  var _0x333142 = _0x3255d0.dynCall_vjiiiiiiii = function () {
    return (_0x333142 = _0x3255d0.dynCall_vjiiiiiiii = _0x3255d0.asm.tp).apply(null, arguments);
  };
  var _0x4dfec9 = _0x3255d0.dynCall_vjiiiiiii = function () {
    return (_0x4dfec9 = _0x3255d0.dynCall_vjiiiiiii = _0x3255d0.asm.up).apply(null, arguments);
  };
  var _0x2d2d04 = _0x3255d0.dynCall_ijiiii = function () {
    return (_0x2d2d04 = _0x3255d0.dynCall_ijiiii = _0x3255d0.asm.vp).apply(null, arguments);
  };
  var _0xbc709b = _0x3255d0.dynCall_diji = function () {
    return (_0xbc709b = _0x3255d0.dynCall_diji = _0x3255d0.asm.wp).apply(null, arguments);
  };
  var _0x458a5f = _0x3255d0.dynCall_fidi = function () {
    return (_0x458a5f = _0x3255d0.dynCall_fidi = _0x3255d0.asm.xp).apply(null, arguments);
  };
  var _0x533d9a = _0x3255d0.dynCall_iffffi = function () {
    return (_0x533d9a = _0x3255d0.dynCall_iffffi = _0x3255d0.asm.yp).apply(null, arguments);
  };
  var _0x4680a8 = _0x3255d0.dynCall_vfffi = function () {
    return (_0x4680a8 = _0x3255d0.dynCall_vfffi = _0x3255d0.asm.zp).apply(null, arguments);
  };
  var _0x44df2d = _0x3255d0.dynCall_vffffi = function () {
    return (_0x44df2d = _0x3255d0.dynCall_vffffi = _0x3255d0.asm.Ap).apply(null, arguments);
  };
  var _0x2b9f05 = _0x3255d0.dynCall_viiiiffi = function () {
    return (_0x2b9f05 = _0x3255d0.dynCall_viiiiffi = _0x3255d0.asm.Bp).apply(null, arguments);
  };
  var _0x4a20f8 = _0x3255d0.dynCall_viiiffii = function () {
    return (_0x4a20f8 = _0x3255d0.dynCall_viiiffii = _0x3255d0.asm.Cp).apply(null, arguments);
  };
  var _0x4c081d = _0x3255d0.dynCall_fffifi = function () {
    return (_0x4c081d = _0x3255d0.dynCall_fffifi = _0x3255d0.asm.Dp).apply(null, arguments);
  };
  var _0x26d063 = _0x3255d0.dynCall_iiiifiiiii = function () {
    return (_0x26d063 = _0x3255d0.dynCall_iiiifiiiii = _0x3255d0.asm.Ep).apply(null, arguments);
  };
  var _0x5f5616 = _0x3255d0.dynCall_iiiifiiii = function () {
    return (_0x5f5616 = _0x3255d0.dynCall_iiiifiiii = _0x3255d0.asm.Fp).apply(null, arguments);
  };
  var _0x4a8cc1 = _0x3255d0.dynCall_iiiifiii = function () {
    return (_0x4a8cc1 = _0x3255d0.dynCall_iiiifiii = _0x3255d0.asm.Gp).apply(null, arguments);
  };
  var _0x1a4971 = _0x3255d0.dynCall_vijjii = function () {
    return (_0x1a4971 = _0x3255d0.dynCall_vijjii = _0x3255d0.asm.Hp).apply(null, arguments);
  };
  var _0x2744b6 = _0x3255d0.dynCall_viiiififfi = function () {
    return (_0x2744b6 = _0x3255d0.dynCall_viiiififfi = _0x3255d0.asm.Ip).apply(null, arguments);
  };
  var _0x1af18d = _0x3255d0.dynCall_viiiifiifi = function () {
    return (_0x1af18d = _0x3255d0.dynCall_viiiifiifi = _0x3255d0.asm.Jp).apply(null, arguments);
  };
  var _0x18566c = _0x3255d0.dynCall_viiiifiiii = function () {
    return (_0x18566c = _0x3255d0.dynCall_viiiifiiii = _0x3255d0.asm.Kp).apply(null, arguments);
  };
  var _0x2f349d = _0x3255d0.dynCall_viiiifiiiii = function () {
    return (_0x2f349d = _0x3255d0.dynCall_viiiifiiiii = _0x3255d0.asm.Lp).apply(null, arguments);
  };
  var _0x163fa2 = _0x3255d0.dynCall_viiiifiiiiiiii = function () {
    return (_0x163fa2 = _0x3255d0.dynCall_viiiifiiiiiiii = _0x3255d0.asm.Mp).apply(null, arguments);
  };
  var _0x162a53 = _0x3255d0.dynCall_fifffiii = function () {
    return (_0x162a53 = _0x3255d0.dynCall_fifffiii = _0x3255d0.asm.Np).apply(null, arguments);
  };
  var _0x4874fe = _0x3255d0.dynCall_fiffffiiiiii = function () {
    return (_0x4874fe = _0x3255d0.dynCall_fiffffiiiiii = _0x3255d0.asm.Op).apply(null, arguments);
  };
  var _0x25a52c = _0x3255d0.dynCall_viiiiiffii = function () {
    return (_0x25a52c = _0x3255d0.dynCall_viiiiiffii = _0x3255d0.asm.Pp).apply(null, arguments);
  };
  var _0x406d95 = _0x3255d0.dynCall_ffffiiii = function () {
    return (_0x406d95 = _0x3255d0.dynCall_ffffiiii = _0x3255d0.asm.Qp).apply(null, arguments);
  };
  var _0x5a6cfe = _0x3255d0.dynCall_viffffiii = function () {
    return (_0x5a6cfe = _0x3255d0.dynCall_viffffiii = _0x3255d0.asm.Rp).apply(null, arguments);
  };
  var _0x172daa = _0x3255d0.dynCall_viffffii = function () {
    return (_0x172daa = _0x3255d0.dynCall_viffffii = _0x3255d0.asm.Sp).apply(null, arguments);
  };
  var _0x7c8a6d = _0x3255d0.dynCall_viiffffiiiiii = function () {
    return (_0x7c8a6d = _0x3255d0.dynCall_viiffffiiiiii = _0x3255d0.asm.Tp).apply(null, arguments);
  };
  var _0xc89a22 = _0x3255d0.dynCall_viiifiii = function () {
    return (_0xc89a22 = _0x3255d0.dynCall_viiifiii = _0x3255d0.asm.Up).apply(null, arguments);
  };
  var _0x858fc6 = _0x3255d0.dynCall_viiififi = function () {
    return (_0x858fc6 = _0x3255d0.dynCall_viiififi = _0x3255d0.asm.Vp).apply(null, arguments);
  };
  var _0x4e32ba = _0x3255d0.dynCall_viiififfi = function () {
    return (_0x4e32ba = _0x3255d0.dynCall_viiififfi = _0x3255d0.asm.Wp).apply(null, arguments);
  };
  var _0x1ead5b = _0x3255d0.dynCall_iiiiifi = function () {
    return (_0x1ead5b = _0x3255d0.dynCall_iiiiifi = _0x3255d0.asm.Xp).apply(null, arguments);
  };
  var _0x4f788c = _0x3255d0.dynCall_iiifiiii = function () {
    return (_0x4f788c = _0x3255d0.dynCall_iiifiiii = _0x3255d0.asm.Yp).apply(null, arguments);
  };
  var _0x1fb24d = _0x3255d0.dynCall_vifffffi = function () {
    return (_0x1fb24d = _0x3255d0.dynCall_vifffffi = _0x3255d0.asm.Zp).apply(null, arguments);
  };
  var _0x2db8d6 = _0x3255d0.dynCall_viffiiii = function () {
    return (_0x2db8d6 = _0x3255d0.dynCall_viffiiii = _0x3255d0.asm._p).apply(null, arguments);
  };
  var _0x86466d = _0x3255d0.dynCall_viiiiffffiiii = function () {
    return (_0x86466d = _0x3255d0.dynCall_viiiiffffiiii = _0x3255d0.asm.$p).apply(null, arguments);
  };
  var _0x22d24b = _0x3255d0.dynCall_viifiiiii = function () {
    return (_0x22d24b = _0x3255d0.dynCall_viifiiiii = _0x3255d0.asm.aq).apply(null, arguments);
  };
  var _0x23ac1e = _0x3255d0.dynCall_iiiiiiffiiiiiiiiiffffiiii = function () {
    return (_0x23ac1e = _0x3255d0.dynCall_iiiiiiffiiiiiiiiiffffiiii = _0x3255d0.asm.bq).apply(null, arguments);
  };
  var _0x3d2388 = _0x3255d0.dynCall_iiiiiiffiiiiiiiiiiiiiii = function () {
    return (_0x3d2388 = _0x3255d0.dynCall_iiiiiiffiiiiiiiiiiiiiii = _0x3255d0.asm.cq).apply(null, arguments);
  };
  var _0x56411c = _0x3255d0.dynCall_viififii = function () {
    return (_0x56411c = _0x3255d0.dynCall_viififii = _0x3255d0.asm.dq).apply(null, arguments);
  };
  var _0x352aa3 = _0x3255d0.dynCall_viffffffi = function () {
    return (_0x352aa3 = _0x3255d0.dynCall_viffffffi = _0x3255d0.asm.eq).apply(null, arguments);
  };
  var _0x5dee73 = _0x3255d0.dynCall_iiiffiiii = function () {
    return (_0x5dee73 = _0x3255d0.dynCall_iiiffiiii = _0x3255d0.asm.fq).apply(null, arguments);
  };
  var _0x291e61 = _0x3255d0.dynCall_iiiiffiiii = function () {
    return (_0x291e61 = _0x3255d0.dynCall_iiiiffiiii = _0x3255d0.asm.gq).apply(null, arguments);
  };
  var _0x532ec5 = _0x3255d0.dynCall_vjii = function () {
    return (_0x532ec5 = _0x3255d0.dynCall_vjii = _0x3255d0.asm.hq).apply(null, arguments);
  };
  var _0x425935 = _0x3255d0.dynCall_fffffffi = function () {
    return (_0x425935 = _0x3255d0.dynCall_fffffffi = _0x3255d0.asm.iq).apply(null, arguments);
  };
  var _0x3f85a7 = _0x3255d0.dynCall_viffifi = function () {
    return (_0x3f85a7 = _0x3255d0.dynCall_viffifi = _0x3255d0.asm.jq).apply(null, arguments);
  };
  var _0xa02e6 = _0x3255d0.dynCall_viiffifi = function () {
    return (_0xa02e6 = _0x3255d0.dynCall_viiffifi = _0x3255d0.asm.kq).apply(null, arguments);
  };
  var _0x23a511 = _0x3255d0.dynCall_ifffi = function () {
    return (_0x23a511 = _0x3255d0.dynCall_ifffi = _0x3255d0.asm.lq).apply(null, arguments);
  };
  var _0x2e8df1 = _0x3255d0.dynCall_fiiiffi = function () {
    return (_0x2e8df1 = _0x3255d0.dynCall_fiiiffi = _0x3255d0.asm.mq).apply(null, arguments);
  };
  var _0x12c05f = _0x3255d0.dynCall_viiififiii = function () {
    return (_0x12c05f = _0x3255d0.dynCall_viiififiii = _0x3255d0.asm.nq).apply(null, arguments);
  };
  var _0x1b61d8 = _0x3255d0.dynCall_viiffiiiiiiiii = function () {
    return (_0x1b61d8 = _0x3255d0.dynCall_viiffiiiiiiiii = _0x3255d0.asm.oq).apply(null, arguments);
  };
  var _0x5c2763 = _0x3255d0.dynCall_viiiiiffiii = function () {
    return (_0x5c2763 = _0x3255d0.dynCall_viiiiiffiii = _0x3255d0.asm.pq).apply(null, arguments);
  };
  var _0x2e30d9 = _0x3255d0.dynCall_viiffiiiiiii = function () {
    return (_0x2e30d9 = _0x3255d0.dynCall_viiffiiiiiii = _0x3255d0.asm.qq).apply(null, arguments);
  };
  var _0xae1377 = _0x3255d0.dynCall_fffffffffi = function () {
    return (_0xae1377 = _0x3255d0.dynCall_fffffffffi = _0x3255d0.asm.rq).apply(null, arguments);
  };
  var _0x3b829b = _0x3255d0.dynCall_vifiiiiii = function () {
    return (_0x3b829b = _0x3255d0.dynCall_vifiiiiii = _0x3255d0.asm.sq).apply(null, arguments);
  };
  var _0x1c0b27 = _0x3255d0.dynCall_viifiiiiiii = function () {
    return (_0x1c0b27 = _0x3255d0.dynCall_viifiiiiiii = _0x3255d0.asm.tq).apply(null, arguments);
  };
  var _0xe90727 = _0x3255d0.dynCall_viiififfiiiiiii = function () {
    return (_0xe90727 = _0x3255d0.dynCall_viiififfiiiiiii = _0x3255d0.asm.uq).apply(null, arguments);
  };
  var _0xa6c833 = _0x3255d0.dynCall_viiffiifiiiiiii = function () {
    return (_0xa6c833 = _0x3255d0.dynCall_viiffiifiiiiiii = _0x3255d0.asm.vq).apply(null, arguments);
  };
  var _0x52f041 = _0x3255d0.dynCall_viifiiiiii = function () {
    return (_0x52f041 = _0x3255d0.dynCall_viifiiiiii = _0x3255d0.asm.wq).apply(null, arguments);
  };
  var _0xb737e9 = _0x3255d0.dynCall_viiifiiiiii = function () {
    return (_0xb737e9 = _0x3255d0.dynCall_viiifiiiiii = _0x3255d0.asm.xq).apply(null, arguments);
  };
  var _0x284bcc = _0x3255d0.dynCall_viiiifiiiiii = function () {
    return (_0x284bcc = _0x3255d0.dynCall_viiiifiiiiii = _0x3255d0.asm.yq).apply(null, arguments);
  };
  var _0x4bc9df = _0x3255d0.dynCall_viififiiiiii = function () {
    return (_0x4bc9df = _0x3255d0.dynCall_viififiiiiii = _0x3255d0.asm.zq).apply(null, arguments);
  };
  var _0x2d1c2e = _0x3255d0.dynCall_viiiffiifiiiiiii = function () {
    return (_0x2d1c2e = _0x3255d0.dynCall_viiiffiifiiiiiii = _0x3255d0.asm.Aq).apply(null, arguments);
  };
  var _0x376b5a = _0x3255d0.dynCall_viiiiiifiiiiii = function () {
    return (_0x376b5a = _0x3255d0.dynCall_viiiiiifiiiiii = _0x3255d0.asm.Bq).apply(null, arguments);
  };
  var _0x258851 = _0x3255d0.dynCall_vififiii = function () {
    return (_0x258851 = _0x3255d0.dynCall_vififiii = _0x3255d0.asm.Cq).apply(null, arguments);
  };
  var _0x1455e4 = _0x3255d0.dynCall_viiiiiiiijiiii = function () {
    return (_0x1455e4 = _0x3255d0.dynCall_viiiiiiiijiiii = _0x3255d0.asm.Dq).apply(null, arguments);
  };
  var _0x1fc70b = _0x3255d0.dynCall_viifiiii = function () {
    return (_0x1fc70b = _0x3255d0.dynCall_viifiiii = _0x3255d0.asm.Eq).apply(null, arguments);
  };
  var _0x2681a0 = _0x3255d0.dynCall_fifii = function () {
    return (_0x2681a0 = _0x3255d0.dynCall_fifii = _0x3255d0.asm.Fq).apply(null, arguments);
  };
  var _0x403a8f = _0x3255d0.dynCall_viiiffi = function () {
    return (_0x403a8f = _0x3255d0.dynCall_viiiffi = _0x3255d0.asm.Gq).apply(null, arguments);
  };
  var _0x594fd4 = _0x3255d0.dynCall_iifffi = function () {
    return (_0x594fd4 = _0x3255d0.dynCall_iifffi = _0x3255d0.asm.Hq).apply(null, arguments);
  };
  var _0x375b55 = _0x3255d0.dynCall_viijjii = function () {
    return (_0x375b55 = _0x3255d0.dynCall_viijjii = _0x3255d0.asm.Iq).apply(null, arguments);
  };
  var _0xb841e9 = _0x3255d0.dynCall_viiidii = function () {
    return (_0xb841e9 = _0x3255d0.dynCall_viiidii = _0x3255d0.asm.Jq).apply(null, arguments);
  };
  var _0x455a8d = _0x3255d0.dynCall_ijiiiiiiiii = function () {
    return (_0x455a8d = _0x3255d0.dynCall_ijiiiiiiiii = _0x3255d0.asm.Kq).apply(null, arguments);
  };
  var _0x26bc54 = _0x3255d0.dynCall_iiijiiiii = function () {
    return (_0x26bc54 = _0x3255d0.dynCall_iiijiiiii = _0x3255d0.asm.Lq).apply(null, arguments);
  };
  var _0x4c9388 = _0x3255d0.dynCall_viiijiii = function () {
    return (_0x4c9388 = _0x3255d0.dynCall_viiijiii = _0x3255d0.asm.Mq).apply(null, arguments);
  };
  var _0x2e7de9 = _0x3255d0.dynCall_ijjiii = function () {
    return (_0x2e7de9 = _0x3255d0.dynCall_ijjiii = _0x3255d0.asm.Nq).apply(null, arguments);
  };
  var _0x112b06 = _0x3255d0.dynCall_ffiii = function () {
    return (_0x112b06 = _0x3255d0.dynCall_ffiii = _0x3255d0.asm.Oq).apply(null, arguments);
  };
  var _0x1fdf6e = _0x3255d0.dynCall_fffiii = function () {
    return (_0x1fdf6e = _0x3255d0.dynCall_fffiii = _0x3255d0.asm.Pq).apply(null, arguments);
  };
  var _0x3095f5 = _0x3255d0.dynCall_dddiii = function () {
    return (_0x3095f5 = _0x3255d0.dynCall_dddiii = _0x3255d0.asm.Qq).apply(null, arguments);
  };
  var _0x9536b4 = _0x3255d0.dynCall_jjiii = function () {
    return (_0x9536b4 = _0x3255d0.dynCall_jjiii = _0x3255d0.asm.Rq).apply(null, arguments);
  };
  var _0x395df6 = _0x3255d0.dynCall_jddi = function () {
    return (_0x395df6 = _0x3255d0.dynCall_jddi = _0x3255d0.asm.Sq).apply(null, arguments);
  };
  var _0xf35c1f = _0x3255d0.dynCall_jjjii = function () {
    return (_0xf35c1f = _0x3255d0.dynCall_jjjii = _0x3255d0.asm.Tq).apply(null, arguments);
  };
  var _0x5e6531 = _0x3255d0.dynCall_ifii = function () {
    return (_0x5e6531 = _0x3255d0.dynCall_ifii = _0x3255d0.asm.Uq).apply(null, arguments);
  };
  var _0x4608f2 = _0x3255d0.dynCall_jdii = function () {
    return (_0x4608f2 = _0x3255d0.dynCall_jdii = _0x3255d0.asm.Vq).apply(null, arguments);
  };
  var _0x108cc7 = _0x3255d0.dynCall_djii = function () {
    return (_0x108cc7 = _0x3255d0.dynCall_djii = _0x3255d0.asm.Wq).apply(null, arguments);
  };
  var _0x5562a5 = _0x3255d0.dynCall_fdi = function () {
    return (_0x5562a5 = _0x3255d0.dynCall_fdi = _0x3255d0.asm.Xq).apply(null, arguments);
  };
  var _0x5023fe = _0x3255d0.dynCall_jjiiii = function () {
    return (_0x5023fe = _0x3255d0.dynCall_jjiiii = _0x3255d0.asm.Yq).apply(null, arguments);
  };
  var _0xe114ad = _0x3255d0.dynCall_vidiii = function () {
    return (_0xe114ad = _0x3255d0.dynCall_vidiii = _0x3255d0.asm.Zq).apply(null, arguments);
  };
  var _0xcd727b = _0x3255d0.dynCall_viiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiii = function () {
    return (_0xcd727b = _0x3255d0.dynCall_viiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiii = _0x3255d0.asm._q).apply(null, arguments);
  };
  var _0x20cc77 = _0x3255d0.dynCall_viffffffffi = function () {
    return (_0x20cc77 = _0x3255d0.dynCall_viffffffffi = _0x3255d0.asm.$q).apply(null, arguments);
  };
  var _0x5a3c2a = _0x3255d0.dynCall_viddddi = function () {
    return (_0x5a3c2a = _0x3255d0.dynCall_viddddi = _0x3255d0.asm.ar).apply(null, arguments);
  };
  var _0x218114 = _0x3255d0.dynCall_vijjjji = function () {
    return (_0x218114 = _0x3255d0.dynCall_vijjjji = _0x3255d0.asm.br).apply(null, arguments);
  };
  var _0x1a197f = _0x3255d0.dynCall_ddii = function () {
    return (_0x1a197f = _0x3255d0.dynCall_ddii = _0x3255d0.asm.cr).apply(null, arguments);
  };
  var _0x223219 = _0x3255d0.dynCall_iiiiiijii = function () {
    return (_0x223219 = _0x3255d0.dynCall_iiiiiijii = _0x3255d0.asm.dr).apply(null, arguments);
  };
  var _0x5d21a3 = _0x3255d0.dynCall_jiidi = function () {
    return (_0x5d21a3 = _0x3255d0.dynCall_jiidi = _0x3255d0.asm.er).apply(null, arguments);
  };
  var _0x2b978d = _0x3255d0.dynCall_viiiidijii = function () {
    return (_0x2b978d = _0x3255d0.dynCall_viiiidijii = _0x3255d0.asm.fr).apply(null, arguments);
  };
  var _0x3f6583 = _0x3255d0.dynCall_viiiidiii = function () {
    return (_0x3f6583 = _0x3255d0.dynCall_viiiidiii = _0x3255d0.asm.gr).apply(null, arguments);
  };
  var _0x53a48d = _0x3255d0.dynCall_iiidiii = function () {
    return (_0x53a48d = _0x3255d0.dynCall_iiidiii = _0x3255d0.asm.hr).apply(null, arguments);
  };
  var _0x33fd9e = _0x3255d0.dynCall_iiidii = function () {
    return (_0x33fd9e = _0x3255d0.dynCall_iiidii = _0x3255d0.asm.ir).apply(null, arguments);
  };
  var _0x2eafc5 = _0x3255d0.dynCall_viiiidii = function () {
    return (_0x2eafc5 = _0x3255d0.dynCall_viiiidii = _0x3255d0.asm.jr).apply(null, arguments);
  };
  var _0x25be32 = _0x3255d0.dynCall_viijiiiii = function () {
    return (_0x25be32 = _0x3255d0.dynCall_viijiiiii = _0x3255d0.asm.kr).apply(null, arguments);
  };
  var _0x5c6ccd = _0x3255d0.dynCall_viiiifiii = function () {
    return (_0x5c6ccd = _0x3255d0.dynCall_viiiifiii = _0x3255d0.asm.lr).apply(null, arguments);
  };
  var _0x1670b3 = _0x3255d0.dynCall_viifffi = function () {
    return (_0x1670b3 = _0x3255d0.dynCall_viifffi = _0x3255d0.asm.mr).apply(null, arguments);
  };
  var _0x96e0e9 = _0x3255d0.dynCall_viifffffi = function () {
    return (_0x96e0e9 = _0x3255d0.dynCall_viifffffi = _0x3255d0.asm.nr).apply(null, arguments);
  };
  var _0x1ae084 = _0x3255d0.dynCall_viiffffffi = function () {
    return (_0x1ae084 = _0x3255d0.dynCall_viiffffffi = _0x3255d0.asm.or).apply(null, arguments);
  };
  var _0x476ce7 = _0x3255d0.dynCall_viifffffffi = function () {
    return (_0x476ce7 = _0x3255d0.dynCall_viifffffffi = _0x3255d0.asm.pr).apply(null, arguments);
  };
  var _0x3599df = _0x3255d0.dynCall_viiffffffffi = function () {
    return (_0x3599df = _0x3255d0.dynCall_viiffffffffi = _0x3255d0.asm.qr).apply(null, arguments);
  };
  var _0x20f47a = _0x3255d0.dynCall_viiffffffffiii = function () {
    return (_0x20f47a = _0x3255d0.dynCall_viiffffffffiii = _0x3255d0.asm.rr).apply(null, arguments);
  };
  var _0x1e2af6 = _0x3255d0.dynCall_viiiiffffii = function () {
    return (_0x1e2af6 = _0x3255d0.dynCall_viiiiffffii = _0x3255d0.asm.sr).apply(null, arguments);
  };
  var _0x204c75 = _0x3255d0.dynCall_fiiiiii = function () {
    return (_0x204c75 = _0x3255d0.dynCall_fiiiiii = _0x3255d0.asm.tr).apply(null, arguments);
  };
  var _0x3f9877 = _0x3255d0.dynCall_iiijjiii = function () {
    return (_0x3f9877 = _0x3255d0.dynCall_iiijjiii = _0x3255d0.asm.ur).apply(null, arguments);
  };
  var _0x450626 = _0x3255d0.dynCall_viiijji = function () {
    return (_0x450626 = _0x3255d0.dynCall_viiijji = _0x3255d0.asm.vr).apply(null, arguments);
  };
  var _0x294be5 = _0x3255d0.dynCall_vijiiiiiiii = function () {
    return (_0x294be5 = _0x3255d0.dynCall_vijiiiiiiii = _0x3255d0.asm.wr).apply(null, arguments);
  };
  var _0x5b1476 = _0x3255d0.dynCall_jjiiiii = function () {
    return (_0x5b1476 = _0x3255d0.dynCall_jjiiiii = _0x3255d0.asm.xr).apply(null, arguments);
  };
  var _0x49fb84 = _0x3255d0.dynCall_jijjji = function () {
    return (_0x49fb84 = _0x3255d0.dynCall_jijjji = _0x3255d0.asm.yr).apply(null, arguments);
  };
  var _0x1854c1 = _0x3255d0.dynCall_jijjjii = function () {
    return (_0x1854c1 = _0x3255d0.dynCall_jijjjii = _0x3255d0.asm.zr).apply(null, arguments);
  };
  var _0x5d62d5 = _0x3255d0.dynCall_ijijiiiii = function () {
    return (_0x5d62d5 = _0x3255d0.dynCall_ijijiiiii = _0x3255d0.asm.Ar).apply(null, arguments);
  };
  var _0x274d79 = _0x3255d0.dynCall_ijjjiii = function () {
    return (_0x274d79 = _0x3255d0.dynCall_ijjjiii = _0x3255d0.asm.Br).apply(null, arguments);
  };
  var _0x22d6db = _0x3255d0.dynCall_vijjjiijii = function () {
    return (_0x22d6db = _0x3255d0.dynCall_vijjjiijii = _0x3255d0.asm.Cr).apply(null, arguments);
  };
  var _0x1219d9 = _0x3255d0.dynCall_ijjjiijii = function () {
    return (_0x1219d9 = _0x3255d0.dynCall_ijjjiijii = _0x3255d0.asm.Dr).apply(null, arguments);
  };
  var _0x55b965 = _0x3255d0.dynCall_vijiiiiii = function () {
    return (_0x55b965 = _0x3255d0.dynCall_vijiiiiii = _0x3255d0.asm.Er).apply(null, arguments);
  };
  var _0x2dc50f = _0x3255d0.dynCall_jfi = function () {
    return (_0x2dc50f = _0x3255d0.dynCall_jfi = _0x3255d0.asm.Fr).apply(null, arguments);
  };
  var _0x314ee3 = _0x3255d0.dynCall_dfi = function () {
    return (_0x314ee3 = _0x3255d0.dynCall_dfi = _0x3255d0.asm.Gr).apply(null, arguments);
  };
  var _0x51bf9f = _0x3255d0.dynCall_jidii = function () {
    return (_0x51bf9f = _0x3255d0.dynCall_jidii = _0x3255d0.asm.Hr).apply(null, arguments);
  };
  var _0x312d53 = _0x3255d0.dynCall_viiiiiiiji = function () {
    return (_0x312d53 = _0x3255d0.dynCall_viiiiiiiji = _0x3255d0.asm.Ir).apply(null, arguments);
  };
  var _0x4fad36 = _0x3255d0.dynCall_viiiiiiiiji = function () {
    return (_0x4fad36 = _0x3255d0.dynCall_viiiiiiiiji = _0x3255d0.asm.Jr).apply(null, arguments);
  };
  var _0x32cc23 = _0x3255d0.dynCall_viiiiiiiiiji = function () {
    return (_0x32cc23 = _0x3255d0.dynCall_viiiiiiiiiji = _0x3255d0.asm.Kr).apply(null, arguments);
  };
  var _0x82e9c5 = _0x3255d0.dynCall_ijiijii = function () {
    return (_0x82e9c5 = _0x3255d0.dynCall_ijiijii = _0x3255d0.asm.Lr).apply(null, arguments);
  };
  var _0x4a0359 = _0x3255d0.dynCall_vjjiiiii = function () {
    return (_0x4a0359 = _0x3255d0.dynCall_vjjiiiii = _0x3255d0.asm.Mr).apply(null, arguments);
  };
  var _0x2e471f = _0x3255d0.dynCall_vjjii = function () {
    return (_0x2e471f = _0x3255d0.dynCall_vjjii = _0x3255d0.asm.Nr).apply(null, arguments);
  };
  var _0x3cee19 = _0x3255d0.dynCall_ijiiji = function () {
    return (_0x3cee19 = _0x3255d0.dynCall_ijiiji = _0x3255d0.asm.Or).apply(null, arguments);
  };
  var _0x597f55 = _0x3255d0.dynCall_ijiiiii = function () {
    return (_0x597f55 = _0x3255d0.dynCall_ijiiiii = _0x3255d0.asm.Pr).apply(null, arguments);
  };
  var _0x1c01d1 = _0x3255d0.dynCall_ijiiiiji = function () {
    return (_0x1c01d1 = _0x3255d0.dynCall_ijiiiiji = _0x3255d0.asm.Qr).apply(null, arguments);
  };
  var _0x33782d = _0x3255d0.dynCall_jiiiiii = function () {
    return (_0x33782d = _0x3255d0.dynCall_jiiiiii = _0x3255d0.asm.Rr).apply(null, arguments);
  };
  var _0x1f89c3 = _0x3255d0.dynCall_idiii = function () {
    return (_0x1f89c3 = _0x3255d0.dynCall_idiii = _0x3255d0.asm.Sr).apply(null, arguments);
  };
  var _0x394060 = _0x3255d0.dynCall_ifiii = function () {
    return (_0x394060 = _0x3255d0.dynCall_ifiii = _0x3255d0.asm.Tr).apply(null, arguments);
  };
  var _0x241db0 = _0x3255d0.dynCall_ifiiiii = function () {
    return (_0x241db0 = _0x3255d0.dynCall_ifiiiii = _0x3255d0.asm.Ur).apply(null, arguments);
  };
  var _0x4510ae = _0x3255d0.dynCall_vdiii = function () {
    return (_0x4510ae = _0x3255d0.dynCall_vdiii = _0x3255d0.asm.Vr).apply(null, arguments);
  };
  var _0x3d707e = _0x3255d0.dynCall_vijijji = function () {
    return (_0x3d707e = _0x3255d0.dynCall_vijijji = _0x3255d0.asm.Wr).apply(null, arguments);
  };
  var _0x2ab677 = _0x3255d0.dynCall_viijjji = function () {
    return (_0x2ab677 = _0x3255d0.dynCall_viijjji = _0x3255d0.asm.Xr).apply(null, arguments);
  };
  var _0x2b925e = _0x3255d0.dynCall_iiiijii = function () {
    return (_0x2b925e = _0x3255d0.dynCall_iiiijii = _0x3255d0.asm.Yr).apply(null, arguments);
  };
  var _0x4ec5ae = _0x3255d0.dynCall_jijji = function () {
    return (_0x4ec5ae = _0x3255d0.dynCall_jijji = _0x3255d0.asm.Zr).apply(null, arguments);
  };
  var _0x482bfa = _0x3255d0.dynCall_diddi = function () {
    return (_0x482bfa = _0x3255d0.dynCall_diddi = _0x3255d0.asm._r).apply(null, arguments);
  };
  var _0x19c982 = _0x3255d0.dynCall_didi = function () {
    return (_0x19c982 = _0x3255d0.dynCall_didi = _0x3255d0.asm.$r).apply(null, arguments);
  };
  var _0x5e4b01 = _0x3255d0.dynCall_jjjji = function () {
    return (_0x5e4b01 = _0x3255d0.dynCall_jjjji = _0x3255d0.asm.as).apply(null, arguments);
  };
  var _0x156649 = _0x3255d0.dynCall_viijijii = function () {
    return (_0x156649 = _0x3255d0.dynCall_viijijii = _0x3255d0.asm.bs).apply(null, arguments);
  };
  var _0x172e68 = _0x3255d0.dynCall_viijijiii = function () {
    return (_0x172e68 = _0x3255d0.dynCall_viijijiii = _0x3255d0.asm.cs).apply(null, arguments);
  };
  var _0x412dee = _0x3255d0.dynCall_vijiji = function () {
    return (_0x412dee = _0x3255d0.dynCall_vijiji = _0x3255d0.asm.ds).apply(null, arguments);
  };
  var _0x397b62 = _0x3255d0.dynCall_viijiijiii = function () {
    return (_0x397b62 = _0x3255d0.dynCall_viijiijiii = _0x3255d0.asm.es).apply(null, arguments);
  };
  var _0x5b515a = _0x3255d0.dynCall_viiiijiiii = function () {
    return (_0x5b515a = _0x3255d0.dynCall_viiiijiiii = _0x3255d0.asm.fs).apply(null, arguments);
  };
  var _0x2f180c = _0x3255d0.dynCall_di = function () {
    return (_0x2f180c = _0x3255d0.dynCall_di = _0x3255d0.asm.gs).apply(null, arguments);
  };
  var _0x241803 = _0x3255d0.dynCall_jiiiiiiiii = function () {
    return (_0x241803 = _0x3255d0.dynCall_jiiiiiiiii = _0x3255d0.asm.hs).apply(null, arguments);
  };
  var _0x19c26a = _0x3255d0.dynCall_iiiiijii = function () {
    return (_0x19c26a = _0x3255d0.dynCall_iiiiijii = _0x3255d0.asm.is).apply(null, arguments);
  };
  var _0x43f981 = _0x3255d0.dynCall_iiiidii = function () {
    return (_0x43f981 = _0x3255d0.dynCall_iiiidii = _0x3255d0.asm.js).apply(null, arguments);
  };
  var _0x53bfd4 = _0x3255d0.dynCall_iiiiifii = function () {
    return (_0x53bfd4 = _0x3255d0.dynCall_iiiiifii = _0x3255d0.asm.ks).apply(null, arguments);
  };
  var _0x1e9112 = _0x3255d0.dynCall_iiiiffiiiji = function () {
    return (_0x1e9112 = _0x3255d0.dynCall_iiiiffiiiji = _0x3255d0.asm.ls).apply(null, arguments);
  };
  var _0x4a10fd = _0x3255d0.dynCall_iiiffii = function () {
    return (_0x4a10fd = _0x3255d0.dynCall_iiiffii = _0x3255d0.asm.ms).apply(null, arguments);
  };
  var _0x4555f1 = _0x3255d0.dynCall_jiiiiiii = function () {
    return (_0x4555f1 = _0x3255d0.dynCall_jiiiiiii = _0x3255d0.asm.ns).apply(null, arguments);
  };
  var _0x469340 = _0x3255d0.dynCall_iiiiffiiiii = function () {
    return (_0x469340 = _0x3255d0.dynCall_iiiiffiiiii = _0x3255d0.asm.os).apply(null, arguments);
  };
  var _0x465704 = _0x3255d0.dynCall_iiiiffii = function () {
    return (_0x465704 = _0x3255d0.dynCall_iiiiffii = _0x3255d0.asm.ps).apply(null, arguments);
  };
  var _0x6a33ad = _0x3255d0.dynCall_jiiiiji = function () {
    return (_0x6a33ad = _0x3255d0.dynCall_jiiiiji = _0x3255d0.asm.qs).apply(null, arguments);
  };
  var _0x382c97 = _0x3255d0.dynCall_fiiiifi = function () {
    return (_0x382c97 = _0x3255d0.dynCall_fiiiifi = _0x3255d0.asm.rs).apply(null, arguments);
  };
  var _0x3a1e49 = _0x3255d0.dynCall_iiijjii = function () {
    return (_0x3a1e49 = _0x3255d0.dynCall_iiijjii = _0x3255d0.asm.ss).apply(null, arguments);
  };
  var _0xaceaff = _0x3255d0.dynCall_vij = function () {
    return (_0xaceaff = _0x3255d0.dynCall_vij = _0x3255d0.asm.ts).apply(null, arguments);
  };
  var _0x22314b = _0x3255d0.dynCall_iiiijiii = function () {
    return (_0x22314b = _0x3255d0.dynCall_iiiijiii = _0x3255d0.asm.us).apply(null, arguments);
  };
  var _0x524d01 = _0x3255d0.dynCall_iiiij = function () {
    return (_0x524d01 = _0x3255d0.dynCall_iiiij = _0x3255d0.asm.vs).apply(null, arguments);
  };
  var _0x319940 = _0x3255d0.dynCall_ijj = function () {
    return (_0x319940 = _0x3255d0.dynCall_ijj = _0x3255d0.asm.ws).apply(null, arguments);
  };
  var _0x1f780d = _0x3255d0.dynCall_vjji = function () {
    return (_0x1f780d = _0x3255d0.dynCall_vjji = _0x3255d0.asm.xs).apply(null, arguments);
  };
  var _0x1def94 = _0x3255d0.dynCall_ij = function () {
    return (_0x1def94 = _0x3255d0.dynCall_ij = _0x3255d0.asm.ys).apply(null, arguments);
  };
  var _0x3403bd = _0x3255d0.dynCall_vif = function () {
    return (_0x3403bd = _0x3255d0.dynCall_vif = _0x3255d0.asm.zs).apply(null, arguments);
  };
  var _0x586515 = _0x3255d0.dynCall_vid = function () {
    return (_0x586515 = _0x3255d0.dynCall_vid = _0x3255d0.asm.As).apply(null, arguments);
  };
  var _0x1a7b0f = _0x3255d0.dynCall_viiiiif = function () {
    return (_0x1a7b0f = _0x3255d0.dynCall_viiiiif = _0x3255d0.asm.Bs).apply(null, arguments);
  };
  var _0x457ce0 = _0x3255d0.dynCall_viiiif = function () {
    return (_0x457ce0 = _0x3255d0.dynCall_viiiif = _0x3255d0.asm.Cs).apply(null, arguments);
  };
  var _0xc8aaad = _0x3255d0.dynCall_viiiiiif = function () {
    return (_0xc8aaad = _0x3255d0.dynCall_viiiiiif = _0x3255d0.asm.Ds).apply(null, arguments);
  };
  var _0xaf414c = _0x3255d0.dynCall_viffff = function () {
    return (_0xaf414c = _0x3255d0.dynCall_viffff = _0x3255d0.asm.Es).apply(null, arguments);
  };
  var _0x5717eb = _0x3255d0.dynCall_iiif = function () {
    return (_0x5717eb = _0x3255d0.dynCall_iiif = _0x3255d0.asm.Fs).apply(null, arguments);
  };
  var _0x1e4507 = _0x3255d0.dynCall_fif = function () {
    return (_0x1e4507 = _0x3255d0.dynCall_fif = _0x3255d0.asm.Gs).apply(null, arguments);
  };
  var _0x2c538f = _0x3255d0.dynCall_iiiiiifff = function () {
    return (_0x2c538f = _0x3255d0.dynCall_iiiiiifff = _0x3255d0.asm.Hs).apply(null, arguments);
  };
  var _0x24b363 = _0x3255d0.dynCall_iiiiiifiif = function () {
    return (_0x24b363 = _0x3255d0.dynCall_iiiiiifiif = _0x3255d0.asm.Is).apply(null, arguments);
  };
  var _0x31a0a5 = _0x3255d0.dynCall_iiiiiifiii = function () {
    return (_0x31a0a5 = _0x3255d0.dynCall_iiiiiifiii = _0x3255d0.asm.Js).apply(null, arguments);
  };
  var _0x20d3d9 = _0x3255d0.dynCall_iiiiiiifiif = function () {
    return (_0x20d3d9 = _0x3255d0.dynCall_iiiiiiifiif = _0x3255d0.asm.Ks).apply(null, arguments);
  };
  var _0x5c53f5 = _0x3255d0.dynCall_fiff = function () {
    return (_0x5c53f5 = _0x3255d0.dynCall_fiff = _0x3255d0.asm.Ls).apply(null, arguments);
  };
  var _0x1068d6 = _0x3255d0.dynCall_fiiiiiifiifif = function () {
    return (_0x1068d6 = _0x3255d0.dynCall_fiiiiiifiifif = _0x3255d0.asm.Ms).apply(null, arguments);
  };
  var _0x4fa646 = _0x3255d0.dynCall_fiiiiiifiiiif = function () {
    return (_0x4fa646 = _0x3255d0.dynCall_fiiiiiifiiiif = _0x3255d0.asm.Ns).apply(null, arguments);
  };
  var _0x46cffe = _0x3255d0.dynCall_iifiiiijii = function () {
    return (_0x46cffe = _0x3255d0.dynCall_iifiiiijii = _0x3255d0.asm.Os).apply(null, arguments);
  };
  var _0x3b0573 = _0x3255d0.dynCall_vifijii = function () {
    return (_0x3b0573 = _0x3255d0.dynCall_vifijii = _0x3255d0.asm.Ps).apply(null, arguments);
  };
  var _0xdf8fd7 = _0x3255d0.dynCall_iiiifffiii = function () {
    return (_0xdf8fd7 = _0x3255d0.dynCall_iiiifffiii = _0x3255d0.asm.Qs).apply(null, arguments);
  };
  var _0x1efb00 = _0x3255d0.dynCall_iiiifffffi = function () {
    return (_0x1efb00 = _0x3255d0.dynCall_iiiifffffi = _0x3255d0.asm.Rs).apply(null, arguments);
  };
  var _0x8e339 = _0x3255d0.dynCall_viffiiiif = function () {
    return (_0x8e339 = _0x3255d0.dynCall_viffiiiif = _0x3255d0.asm.Ss).apply(null, arguments);
  };
  var _0x54b3b9 = _0x3255d0.dynCall_viffiifffffiii = function () {
    return (_0x54b3b9 = _0x3255d0.dynCall_viffiifffffiii = _0x3255d0.asm.Ts).apply(null, arguments);
  };
  var _0x2452a1 = _0x3255d0.dynCall_viffffiifffiiiiif = function () {
    return (_0x2452a1 = _0x3255d0.dynCall_viffffiifffiiiiif = _0x3255d0.asm.Us).apply(null, arguments);
  };
  var _0x33bbde = _0x3255d0.dynCall_iiiifffffii = function () {
    return (_0x33bbde = _0x3255d0.dynCall_iiiifffffii = _0x3255d0.asm.Vs).apply(null, arguments);
  };
  var _0x34fbe9 = _0x3255d0.dynCall_viiiiiiiiiiifii = function () {
    return (_0x34fbe9 = _0x3255d0.dynCall_viiiiiiiiiiifii = _0x3255d0.asm.Ws).apply(null, arguments);
  };
  var _0x3809dc = _0x3255d0.dynCall_viff = function () {
    return (_0x3809dc = _0x3255d0.dynCall_viff = _0x3255d0.asm.Xs).apply(null, arguments);
  };
  var _0x1fe6d2 = _0x3255d0.dynCall_iiiiifiiiiif = function () {
    return (_0x1fe6d2 = _0x3255d0.dynCall_iiiiifiiiiif = _0x3255d0.asm.Ys).apply(null, arguments);
  };
  var _0x69980f = _0x3255d0.dynCall_viiifiiiii = function () {
    return (_0x69980f = _0x3255d0.dynCall_viiifiiiii = _0x3255d0.asm.Zs).apply(null, arguments);
  };
  var _0x945e57 = _0x3255d0.dynCall_viiiifiiiiif = function () {
    return (_0x945e57 = _0x3255d0.dynCall_viiiifiiiiif = _0x3255d0.asm._s).apply(null, arguments);
  };
  var _0x1a721a = _0x3255d0.dynCall_iifff = function () {
    return (_0x1a721a = _0x3255d0.dynCall_iifff = _0x3255d0.asm.$s).apply(null, arguments);
  };
  var _0x243acf = _0x3255d0.dynCall_iif = function () {
    return (_0x243acf = _0x3255d0.dynCall_iif = _0x3255d0.asm.at).apply(null, arguments);
  };
  var _0x84f3c0 = _0x3255d0.dynCall_viijijj = function () {
    return (_0x84f3c0 = _0x3255d0.dynCall_viijijj = _0x3255d0.asm.bt).apply(null, arguments);
  };
  var _0x212135 = _0x3255d0.dynCall_viijj = function () {
    return (_0x212135 = _0x3255d0.dynCall_viijj = _0x3255d0.asm.ct).apply(null, arguments);
  };
  var _0x298d90 = _0x3255d0.dynCall_viiiij = function () {
    return (_0x298d90 = _0x3255d0.dynCall_viiiij = _0x3255d0.asm.dt).apply(null, arguments);
  };
  var _0xc4a753 = _0x3255d0.dynCall_iiijji = function () {
    return (_0xc4a753 = _0x3255d0.dynCall_iiijji = _0x3255d0.asm.et).apply(null, arguments);
  };
  var _0x4b88da = _0x3255d0.dynCall_ijjiiiii = function () {
    return (_0x4b88da = _0x3255d0.dynCall_ijjiiiii = _0x3255d0.asm.ft).apply(null, arguments);
  };
  var _0x44efe6 = _0x3255d0.dynCall_vidd = function () {
    return (_0x44efe6 = _0x3255d0.dynCall_vidd = _0x3255d0.asm.gt).apply(null, arguments);
  };
  var _0x32b913 = _0x3255d0.dynCall_iiiiiifffiiifiii = function () {
    return (_0x32b913 = _0x3255d0.dynCall_iiiiiifffiiifiii = _0x3255d0.asm.ht).apply(null, arguments);
  };
  var _0x424dea = _0x3255d0.dynCall_viiif = function () {
    return (_0x424dea = _0x3255d0.dynCall_viiif = _0x3255d0.asm.it).apply(null, arguments);
  };
  var _0x461e73 = _0x3255d0.dynCall_fiiiif = function () {
    return (_0x461e73 = _0x3255d0.dynCall_fiiiif = _0x3255d0.asm.jt).apply(null, arguments);
  };
  var _0x37474c = _0x3255d0.dynCall_vifff = function () {
    return (_0x37474c = _0x3255d0.dynCall_vifff = _0x3255d0.asm.kt).apply(null, arguments);
  };
  var _0x36810c = _0x3255d0.dynCall_viifff = function () {
    return (_0x36810c = _0x3255d0.dynCall_viifff = _0x3255d0.asm.lt).apply(null, arguments);
  };
  var _0xbfc14e = _0x3255d0.dynCall_vf = function () {
    return (_0xbfc14e = _0x3255d0.dynCall_vf = _0x3255d0.asm.mt).apply(null, arguments);
  };
  var _0xa9bb0a = _0x3255d0.dynCall_vffff = function () {
    return (_0xa9bb0a = _0x3255d0.dynCall_vffff = _0x3255d0.asm.nt).apply(null, arguments);
  };
  var _0x2dddaa = _0x3255d0.dynCall_vff = function () {
    return (_0x2dddaa = _0x3255d0.dynCall_vff = _0x3255d0.asm.ot).apply(null, arguments);
  };
  var _0x4aad5 = _0x3255d0.dynCall_fff = function () {
    return (_0x4aad5 = _0x3255d0.dynCall_fff = _0x3255d0.asm.pt).apply(null, arguments);
  };
  var _0x3c42e0 = _0x3255d0.dynCall_f = function () {
    return (_0x3c42e0 = _0x3255d0.dynCall_f = _0x3255d0.asm.qt).apply(null, arguments);
  };
  var _0x31187d = _0x3255d0.dynCall_vfff = function () {
    return (_0x31187d = _0x3255d0.dynCall_vfff = _0x3255d0.asm.rt).apply(null, arguments);
  };
  var _0x1323d0 = _0x3255d0.dynCall_ff = function () {
    return (_0x1323d0 = _0x3255d0.dynCall_ff = _0x3255d0.asm.st).apply(null, arguments);
  };
  var _0x11defb = _0x3255d0.dynCall_fiif = function () {
    return (_0x11defb = _0x3255d0.dynCall_fiif = _0x3255d0.asm.tt).apply(null, arguments);
  };
  var _0x36890c = _0x3255d0.dynCall_iiiiiiffiiiiiiiiiffffiii = function () {
    return (_0x36890c = _0x3255d0.dynCall_iiiiiiffiiiiiiiiiffffiii = _0x3255d0.asm.ut).apply(null, arguments);
  };
  var _0x3557fb = _0x3255d0.dynCall_viififi = function () {
    return (_0x3557fb = _0x3255d0.dynCall_viififi = _0x3255d0.asm.vt).apply(null, arguments);
  };
  var _0x5752c4 = _0x3255d0.dynCall_viiiiiiiijiii = function () {
    return (_0x5752c4 = _0x3255d0.dynCall_viiiiiiiijiii = _0x3255d0.asm.wt).apply(null, arguments);
  };
  function _0x58acc9(_0x2e1516, _0x332f42) {
    var _0x53e207 = _0x1d6208();
    try {
      return _0xd6a478(_0x2e1516, _0x332f42);
    } catch (_0x40491) {
      _0xe462e3(_0x53e207);
      if (_0x40491 !== _0x40491 + 0 && _0x40491 !== "longjmp") {
        throw _0x40491;
      }
      _0x5b12b4(1, 0);
    }
  }
  function _0x3864a6(_0x944725, _0x59dd01, _0x30bd3c) {
    var _0x2c3f88 = _0x1d6208();
    try {
      return _0x46e645(_0x944725, _0x59dd01, _0x30bd3c);
    } catch (_0x2a70d1) {
      _0xe462e3(_0x2c3f88);
      if (_0x2a70d1 !== _0x2a70d1 + 0 && _0x2a70d1 !== "longjmp") {
        throw _0x2a70d1;
      }
      _0x5b12b4(1, 0);
    }
  }
  function _0x22e508(_0xa4bb7f, _0x1988e8, _0x475075, _0x1525df) {
    var _0xbbfe6 = _0x1d6208();
    try {
      _0x569696(_0xa4bb7f, _0x1988e8, _0x475075, _0x1525df);
    } catch (_0x27b3d2) {
      _0xe462e3(_0xbbfe6);
      if (_0x27b3d2 !== _0x27b3d2 + 0 && _0x27b3d2 !== "longjmp") {
        throw _0x27b3d2;
      }
      _0x5b12b4(1, 0);
    }
  }
  function _0x1e4321(_0xa2b454, _0x818b61, _0x32e508, _0x2b4972, _0x23e99d, _0x20b229) {
    var _0x4fa135 = _0x1d6208();
    try {
      return _0x2e9058(_0xa2b454, _0x818b61, _0x32e508, _0x2b4972, _0x23e99d, _0x20b229);
    } catch (_0x235528) {
      _0xe462e3(_0x4fa135);
      if (_0x235528 !== _0x235528 + 0 && _0x235528 !== "longjmp") {
        throw _0x235528;
      }
      _0x5b12b4(1, 0);
    }
  }
  function _0x4436b8(_0x220f95, _0xcd58e5, _0x4eb4cd, _0x28e62e) {
    var _0x517f9 = _0x1d6208();
    try {
      return _0x537d47(_0x220f95, _0xcd58e5, _0x4eb4cd, _0x28e62e);
    } catch (_0x57c541) {
      _0xe462e3(_0x517f9);
      if (_0x57c541 !== _0x57c541 + 0 && _0x57c541 !== "longjmp") {
        throw _0x57c541;
      }
      _0x5b12b4(1, 0);
    }
  }
  function _0x680d33(_0x5ca6d9, _0x496b51, _0x34cff9, _0x39a811, _0x396451) {
    var _0x512e08 = _0x1d6208();
    try {
      _0xe793b4(_0x5ca6d9, _0x496b51, _0x34cff9, _0x39a811, _0x396451);
    } catch (_0x4619b1) {
      _0xe462e3(_0x512e08);
      if (_0x4619b1 !== _0x4619b1 + 0 && _0x4619b1 !== "longjmp") {
        throw _0x4619b1;
      }
      _0x5b12b4(1, 0);
    }
  }
  function _0x1326e4(_0x55b8b5, _0x2b0abe, _0x3df3f2, _0x25167e, _0xb85fd0) {
    var _0x5e259c = _0x1d6208();
    try {
      return _0x1b5c22(_0x55b8b5, _0x2b0abe, _0x3df3f2, _0x25167e, _0xb85fd0);
    } catch (_0x4d67ee) {
      _0xe462e3(_0x5e259c);
      if (_0x4d67ee !== _0x4d67ee + 0 && _0x4d67ee !== "longjmp") {
        throw _0x4d67ee;
      }
      _0x5b12b4(1, 0);
    }
  }
  function _0x219024(_0xcda7af, _0x17b514, _0xbd97f2, _0x4da31e) {
    var _0x2e8bfa = _0x1d6208();
    try {
      return _0x4100bd(_0xcda7af, _0x17b514, _0xbd97f2, _0x4da31e);
    } catch (_0x13850e) {
      _0xe462e3(_0x2e8bfa);
      if (_0x13850e !== _0x13850e + 0 && _0x13850e !== "longjmp") {
        throw _0x13850e;
      }
      _0x5b12b4(1, 0);
    }
  }
  function _0x5141da(_0x2eb92d, _0x51a9a7, _0x39af78, _0x34bd9d) {
    var _0x2529b9 = _0x1d6208();
    try {
      return _0x4033bb(_0x2eb92d, _0x51a9a7, _0x39af78, _0x34bd9d);
    } catch (_0x4a9eb4) {
      _0xe462e3(_0x2529b9);
      if (_0x4a9eb4 !== _0x4a9eb4 + 0 && _0x4a9eb4 !== "longjmp") {
        throw _0x4a9eb4;
      }
      _0x5b12b4(1, 0);
    }
  }
  function _0x281c87(_0x52ea61, _0x201005, _0xb9ba6b, _0x384b0e) {
    var _0x38c39a = _0x1d6208();
    try {
      _0x1c4b0e(_0x52ea61, _0x201005, _0xb9ba6b, _0x384b0e);
    } catch (_0x3ce1ff) {
      _0xe462e3(_0x38c39a);
      if (_0x3ce1ff !== _0x3ce1ff + 0 && _0x3ce1ff !== "longjmp") {
        throw _0x3ce1ff;
      }
      _0x5b12b4(1, 0);
    }
  }
  function _0x3c9c3a(_0x78983b, _0x306e9b, _0xdb0811) {
    var _0x494182 = _0x1d6208();
    try {
      _0x419aa5(_0x78983b, _0x306e9b, _0xdb0811);
    } catch (_0x2d0d3e) {
      _0xe462e3(_0x494182);
      if (_0x2d0d3e !== _0x2d0d3e + 0 && _0x2d0d3e !== "longjmp") {
        throw _0x2d0d3e;
      }
      _0x5b12b4(1, 0);
    }
  }
  function _0x496af2(_0x1ec073, _0x4429e9) {
    var _0x879141 = _0x1d6208();
    try {
      _0x3c98fd(_0x1ec073, _0x4429e9);
    } catch (_0x587a65) {
      _0xe462e3(_0x879141);
      if (_0x587a65 !== _0x587a65 + 0 && _0x587a65 !== "longjmp") {
        throw _0x587a65;
      }
      _0x5b12b4(1, 0);
    }
  }
  function _0x4bbbdd(_0x2f1c9f) {
    var _0x5c5f35 = _0x1d6208();
    try {
      _0x1b3699(_0x2f1c9f);
    } catch (_0x208423) {
      _0xe462e3(_0x5c5f35);
      if (_0x208423 !== _0x208423 + 0 && _0x208423 !== "longjmp") {
        throw _0x208423;
      }
      _0x5b12b4(1, 0);
    }
  }
  function _0x1ee46d(_0x2d048d) {
    var _0x55af82 = _0x1d6208();
    try {
      return _0x51b38c(_0x2d048d);
    } catch (_0x45f54f) {
      _0xe462e3(_0x55af82);
      if (_0x45f54f !== _0x45f54f + 0 && _0x45f54f !== "longjmp") {
        throw _0x45f54f;
      }
      _0x5b12b4(1, 0);
    }
  }
  function _0x200886(_0x11cf5e, _0x3e6baa, _0x2a3e13, _0x17be23, _0x4621b7, _0x3d0407, _0x1542fc, _0x25d348) {
    var _0x3fdc33 = _0x1d6208();
    try {
      return _0x5f31d2(_0x11cf5e, _0x3e6baa, _0x2a3e13, _0x17be23, _0x4621b7, _0x3d0407, _0x1542fc, _0x25d348);
    } catch (_0x2c64e3) {
      _0xe462e3(_0x3fdc33);
      if (_0x2c64e3 !== _0x2c64e3 + 0 && _0x2c64e3 !== "longjmp") {
        throw _0x2c64e3;
      }
      _0x5b12b4(1, 0);
    }
  }
  function _0x36f33f(_0x5b2d3a, _0x5a2cde, _0x28a6e2, _0x5807f9, _0x4aa224, _0x350611) {
    var _0x48df2f = _0x1d6208();
    try {
      _0x41f692(_0x5b2d3a, _0x5a2cde, _0x28a6e2, _0x5807f9, _0x4aa224, _0x350611);
    } catch (_0x24d9c4) {
      _0xe462e3(_0x48df2f);
      if (_0x24d9c4 !== _0x24d9c4 + 0 && _0x24d9c4 !== "longjmp") {
        throw _0x24d9c4;
      }
      _0x5b12b4(1, 0);
    }
  }
  function _0x5c282a(_0x554990, _0x43d230, _0x5398c8, _0x4ccc5e, _0x232b32, _0x133176, _0x2820b3) {
    var _0x49bda0 = _0x1d6208();
    try {
      return _0x3d0bd9(_0x554990, _0x43d230, _0x5398c8, _0x4ccc5e, _0x232b32, _0x133176, _0x2820b3);
    } catch (_0x48efef) {
      _0xe462e3(_0x49bda0);
      if (_0x48efef !== _0x48efef + 0 && _0x48efef !== "longjmp") {
        throw _0x48efef;
      }
      _0x5b12b4(1, 0);
    }
  }
  function _0x679938(_0xbf6816, _0x5e4052, _0x1dc0bc, _0x5a4141, _0x592791, _0x5030e1, _0x3d75fb, _0x341169) {
    var _0x17e0fe = _0x1d6208();
    try {
      _0xbb384c(_0xbf6816, _0x5e4052, _0x1dc0bc, _0x5a4141, _0x592791, _0x5030e1, _0x3d75fb, _0x341169);
    } catch (_0x392df8) {
      _0xe462e3(_0x17e0fe);
      if (_0x392df8 !== _0x392df8 + 0 && _0x392df8 !== "longjmp") {
        throw _0x392df8;
      }
      _0x5b12b4(1, 0);
    }
  }
  function _0x57f028(_0x6bcb78, _0x40b5ae, _0x1f4ac7, _0x481559, _0x1fa1f0, _0x211e65, _0x196aa2) {
    var _0x20300d = _0x1d6208();
    try {
      _0x54241f(_0x6bcb78, _0x40b5ae, _0x1f4ac7, _0x481559, _0x1fa1f0, _0x211e65, _0x196aa2);
    } catch (_0x2045f6) {
      _0xe462e3(_0x20300d);
      if (_0x2045f6 !== _0x2045f6 + 0 && _0x2045f6 !== "longjmp") {
        throw _0x2045f6;
      }
      _0x5b12b4(1, 0);
    }
  }
  function _0x244031(_0x3cf861, _0xf8e329, _0x4c660c) {
    var _0x249728 = _0x1d6208();
    try {
      return _0x62b859(_0x3cf861, _0xf8e329, _0x4c660c);
    } catch (_0x273d41) {
      _0xe462e3(_0x249728);
      if (_0x273d41 !== _0x273d41 + 0 && _0x273d41 !== "longjmp") {
        throw _0x273d41;
      }
      _0x5b12b4(1, 0);
    }
  }
  function _0x20e439(_0x3319f6, _0x4f475c, _0x18a030, _0x273e1e, _0x3926b0) {
    var _0x41040b = _0x1d6208();
    try {
      _0x19a26f(_0x3319f6, _0x4f475c, _0x18a030, _0x273e1e, _0x3926b0);
    } catch (_0x95f4ee) {
      _0xe462e3(_0x41040b);
      if (_0x95f4ee !== _0x95f4ee + 0 && _0x95f4ee !== "longjmp") {
        throw _0x95f4ee;
      }
      _0x5b12b4(1, 0);
    }
  }
  function _0x2103e2(_0x437d94, _0xd3f70c, _0x34f8c2, _0x5571c1, _0x24de38) {
    var _0x2f1f96 = _0x1d6208();
    try {
      return _0x43bb71(_0x437d94, _0xd3f70c, _0x34f8c2, _0x5571c1, _0x24de38);
    } catch (_0x35630c) {
      _0xe462e3(_0x2f1f96);
      if (_0x35630c !== _0x35630c + 0 && _0x35630c !== "longjmp") {
        throw _0x35630c;
      }
      _0x5b12b4(1, 0);
    }
  }
  function _0xf1a32c(_0xaf9c95, _0x16b557, _0x2d6efe, _0x4fc121, _0x3bd85a) {
    var _0x527dbe = _0x1d6208();
    try {
      return _0x59f108(_0xaf9c95, _0x16b557, _0x2d6efe, _0x4fc121, _0x3bd85a);
    } catch (_0x564963) {
      _0xe462e3(_0x527dbe);
      if (_0x564963 !== _0x564963 + 0 && _0x564963 !== "longjmp") {
        throw _0x564963;
      }
      _0x5b12b4(1, 0);
    }
  }
  function _0x2aa192(_0x1520cb, _0x11708d, _0x2ba321, _0x3b2fc8, _0x137f5a, _0x5daf79) {
    var _0x1c0204 = _0x1d6208();
    try {
      _0x1da6bf(_0x1520cb, _0x11708d, _0x2ba321, _0x3b2fc8, _0x137f5a, _0x5daf79);
    } catch (_0x8c38f1) {
      _0xe462e3(_0x1c0204);
      if (_0x8c38f1 !== _0x8c38f1 + 0 && _0x8c38f1 !== "longjmp") {
        throw _0x8c38f1;
      }
      _0x5b12b4(1, 0);
    }
  }
  function _0x5bbe6d(_0x2c871e, _0x3f3a11, _0x422f2a, _0x30e8da, _0x22b947, _0x2bb140, _0x22a877, _0x2b357a, _0x148fa4) {
    var _0x3ee407 = _0x1d6208();
    try {
      _0x350f77(_0x2c871e, _0x3f3a11, _0x422f2a, _0x30e8da, _0x22b947, _0x2bb140, _0x22a877, _0x2b357a, _0x148fa4);
    } catch (_0x57ef90) {
      _0xe462e3(_0x3ee407);
      if (_0x57ef90 !== _0x57ef90 + 0 && _0x57ef90 !== "longjmp") {
        throw _0x57ef90;
      }
      _0x5b12b4(1, 0);
    }
  }
  function _0x20d915(_0x1c4834, _0x2b80bd, _0x519199, _0x387d6a, _0x597838) {
    var _0x3e3315 = _0x1d6208();
    try {
      _0x3b3c3f(_0x1c4834, _0x2b80bd, _0x519199, _0x387d6a, _0x597838);
    } catch (_0x338a79) {
      _0xe462e3(_0x3e3315);
      if (_0x338a79 !== _0x338a79 + 0 && _0x338a79 !== "longjmp") {
        throw _0x338a79;
      }
      _0x5b12b4(1, 0);
    }
  }
  function _0x371d0b(_0x579bcd, _0x587281, _0x3a6abb, _0x27251e, _0x1dbb3d, _0x8d96aa, _0x2891ed, _0x31047c, _0x4a4c81, _0x489fd7, _0x148956, _0x5831e4) {
    var _0x56733a = _0x1d6208();
    try {
      _0x2d227e(_0x579bcd, _0x587281, _0x3a6abb, _0x27251e, _0x1dbb3d, _0x8d96aa, _0x2891ed, _0x31047c, _0x4a4c81, _0x489fd7, _0x148956, _0x5831e4);
    } catch (_0x130361) {
      _0xe462e3(_0x56733a);
      if (_0x130361 !== _0x130361 + 0 && _0x130361 !== "longjmp") {
        throw _0x130361;
      }
      _0x5b12b4(1, 0);
    }
  }
  function _0x39857a(_0x24484c, _0xc7a1d9, _0x1c1eca, _0x1ccbb9, _0x5a15e1, _0x27cdfe, _0x3b714c, _0x444f85, _0x3b2ebf, _0x3a3957, _0x2973b3, _0x4492d7, _0x725397) {
    var _0x2a6978 = _0x1d6208();
    try {
      return _0xb8b5a5(_0x24484c, _0xc7a1d9, _0x1c1eca, _0x1ccbb9, _0x5a15e1, _0x27cdfe, _0x3b714c, _0x444f85, _0x3b2ebf, _0x3a3957, _0x2973b3, _0x4492d7, _0x725397);
    } catch (_0x4c1f30) {
      _0xe462e3(_0x2a6978);
      if (_0x4c1f30 !== _0x4c1f30 + 0 && _0x4c1f30 !== "longjmp") {
        throw _0x4c1f30;
      }
      _0x5b12b4(1, 0);
    }
  }
  function _0x4d5e7c(_0x5893a7, _0x549aca, _0x256983, _0x2fc4f1, _0x56bda0) {
    var _0x227a11 = _0x1d6208();
    try {
      _0x362d3d(_0x5893a7, _0x549aca, _0x256983, _0x2fc4f1, _0x56bda0);
    } catch (_0x13e291) {
      _0xe462e3(_0x227a11);
      if (_0x13e291 !== _0x13e291 + 0 && _0x13e291 !== "longjmp") {
        throw _0x13e291;
      }
      _0x5b12b4(1, 0);
    }
  }
  function _0x553722(_0x22f796, _0x2e7825, _0x637568, _0x2842b1) {
    var _0x597a91 = _0x1d6208();
    try {
      _0x55a64b(_0x22f796, _0x2e7825, _0x637568, _0x2842b1);
    } catch (_0x4eddf2) {
      _0xe462e3(_0x597a91);
      if (_0x4eddf2 !== _0x4eddf2 + 0 && _0x4eddf2 !== "longjmp") {
        throw _0x4eddf2;
      }
      _0x5b12b4(1, 0);
    }
  }
  function _0xe60e4e(_0x1327fe, _0x241b97, _0x331a25, _0x1350f5, _0x2e2541, _0x4318b9, _0x54cb3e, _0x9657a8, _0x2bc49d) {
    var _0x221d2e = _0x1d6208();
    try {
      return _0x3b70fc(_0x1327fe, _0x241b97, _0x331a25, _0x1350f5, _0x2e2541, _0x4318b9, _0x54cb3e, _0x9657a8, _0x2bc49d);
    } catch (_0x537170) {
      _0xe462e3(_0x221d2e);
      if (_0x537170 !== _0x537170 + 0 && _0x537170 !== "longjmp") {
        throw _0x537170;
      }
      _0x5b12b4(1, 0);
    }
  }
  function _0x5eeb03(_0xbcdc5c, _0x356018, _0x1dc15e, _0x198a69, _0x129fe8, _0x28ae51, _0x219a4b, _0x2e1a32) {
    var _0x101b94 = _0x1d6208();
    try {
      return _0x18b2fc(_0xbcdc5c, _0x356018, _0x1dc15e, _0x198a69, _0x129fe8, _0x28ae51, _0x219a4b, _0x2e1a32);
    } catch (_0x1f60b9) {
      _0xe462e3(_0x101b94);
      if (_0x1f60b9 !== _0x1f60b9 + 0 && _0x1f60b9 !== "longjmp") {
        throw _0x1f60b9;
      }
      _0x5b12b4(1, 0);
    }
  }
  function _0x36cd25(_0x501222, _0x240782, _0x49fe1e, _0x5bb03d, _0x37b229, _0x104c8f, _0x535b30, _0x354820, _0x44bf4e, _0x3272ba) {
    var _0x1e9890 = _0x1d6208();
    try {
      return _0x58aea0(_0x501222, _0x240782, _0x49fe1e, _0x5bb03d, _0x37b229, _0x104c8f, _0x535b30, _0x354820, _0x44bf4e, _0x3272ba);
    } catch (_0xfe8cde) {
      _0xe462e3(_0x1e9890);
      if (_0xfe8cde !== _0xfe8cde + 0 && _0xfe8cde !== "longjmp") {
        throw _0xfe8cde;
      }
      _0x5b12b4(1, 0);
    }
  }
  function _0x258d7c(_0x5bf877, _0x4c3ebb, _0x2ca6a6, _0xd4cf9f, _0x5c9954, _0x425481) {
    var _0x108a51 = _0x1d6208();
    try {
      _0x4ecdb0(_0x5bf877, _0x4c3ebb, _0x2ca6a6, _0xd4cf9f, _0x5c9954, _0x425481);
    } catch (_0x461195) {
      _0xe462e3(_0x108a51);
      if (_0x461195 !== _0x461195 + 0 && _0x461195 !== "longjmp") {
        throw _0x461195;
      }
      _0x5b12b4(1, 0);
    }
  }
  function _0xf4c444(_0x520d5d, _0x3b14ec, _0x3bd451, _0x45ea40) {
    var _0x475414 = _0x1d6208();
    try {
      _0x1dc8fa(_0x520d5d, _0x3b14ec, _0x3bd451, _0x45ea40);
    } catch (_0x556a56) {
      _0xe462e3(_0x475414);
      if (_0x556a56 !== _0x556a56 + 0 && _0x556a56 !== "longjmp") {
        throw _0x556a56;
      }
      _0x5b12b4(1, 0);
    }
  }
  function _0x2deacb(_0x452ea2, _0x55e1e6, _0x317e23) {
    var _0x3e282b = _0x1d6208();
    try {
      return _0x16e723(_0x452ea2, _0x55e1e6, _0x317e23);
    } catch (_0x1b1b93) {
      _0xe462e3(_0x3e282b);
      if (_0x1b1b93 !== _0x1b1b93 + 0 && _0x1b1b93 !== "longjmp") {
        throw _0x1b1b93;
      }
      _0x5b12b4(1, 0);
    }
  }
  function _0x2c6ee3(_0x2c85de, _0x3ded3f, _0x3e3115, _0x247b62, _0x2df62b, _0x3f810a) {
    var _0x4ac06c = _0x1d6208();
    try {
      return _0x16ac29(_0x2c85de, _0x3ded3f, _0x3e3115, _0x247b62, _0x2df62b, _0x3f810a);
    } catch (_0x4ed6f3) {
      _0xe462e3(_0x4ac06c);
      if (_0x4ed6f3 !== _0x4ed6f3 + 0 && _0x4ed6f3 !== "longjmp") {
        throw _0x4ed6f3;
      }
      _0x5b12b4(1, 0);
    }
  }
  function _0x5e41b1(_0x5ce7c5, _0x1c0854, _0x28f2c0, _0xd55b18, _0xb3fb8f, _0x57d682, _0x16dd61, _0x1123a7, _0x506707, _0x2d457e, _0xccc786, _0x150998) {
    var _0x2cdebf = _0x1d6208();
    try {
      _0x55222c(_0x5ce7c5, _0x1c0854, _0x28f2c0, _0xd55b18, _0xb3fb8f, _0x57d682, _0x16dd61, _0x1123a7, _0x506707, _0x2d457e, _0xccc786, _0x150998);
    } catch (_0xb9820a) {
      _0xe462e3(_0x2cdebf);
      if (_0xb9820a !== _0xb9820a + 0 && _0xb9820a !== "longjmp") {
        throw _0xb9820a;
      }
      _0x5b12b4(1, 0);
    }
  }
  function _0x3739cb(_0x342a5d, _0x543b53, _0x33db09, _0x180ffc) {
    var _0xdc97b9 = _0x1d6208();
    try {
      return _0x421d38(_0x342a5d, _0x543b53, _0x33db09, _0x180ffc);
    } catch (_0x26df58) {
      _0xe462e3(_0xdc97b9);
      if (_0x26df58 !== _0x26df58 + 0 && _0x26df58 !== "longjmp") {
        throw _0x26df58;
      }
      _0x5b12b4(1, 0);
    }
  }
  function _0x1b98fa(_0x274107, _0x35ac83, _0x49e005, _0x410116, _0x24980d, _0x49f918, _0x154890) {
    var _0x3a37bc = _0x1d6208();
    try {
      return _0x2091f0(_0x274107, _0x35ac83, _0x49e005, _0x410116, _0x24980d, _0x49f918, _0x154890);
    } catch (_0x13d7db) {
      _0xe462e3(_0x3a37bc);
      if (_0x13d7db !== _0x13d7db + 0 && _0x13d7db !== "longjmp") {
        throw _0x13d7db;
      }
      _0x5b12b4(1, 0);
    }
  }
  function _0x115f7b(_0x153cab, _0x36ebcf, _0x1ef397, _0x12856c, _0x40edb8, _0x2a113f, _0x568039) {
    var _0xc0a202 = _0x1d6208();
    try {
      return _0xa8238e(_0x153cab, _0x36ebcf, _0x1ef397, _0x12856c, _0x40edb8, _0x2a113f, _0x568039);
    } catch (_0x123c1e) {
      _0xe462e3(_0xc0a202);
      if (_0x123c1e !== _0x123c1e + 0 && _0x123c1e !== "longjmp") {
        throw _0x123c1e;
      }
      _0x5b12b4(1, 0);
    }
  }
  function _0x28184b(_0x5686ca, _0x30e998, _0xdbfb08, _0x54a4fc, _0x15319f) {
    var _0x5706a6 = _0x1d6208();
    try {
      return _0x55dc1c(_0x5686ca, _0x30e998, _0xdbfb08, _0x54a4fc, _0x15319f);
    } catch (_0xc8305e) {
      _0xe462e3(_0x5706a6);
      if (_0xc8305e !== _0xc8305e + 0 && _0xc8305e !== "longjmp") {
        throw _0xc8305e;
      }
      _0x5b12b4(1, 0);
    }
  }
  function _0xca433b(_0x244778, _0x562f2a, _0x11285e, _0xdb84d4, _0x1dd6be, _0x55c1ba, _0x186dc7, _0x583822, _0x5cc334, _0x2db551) {
    var _0x5368b7 = _0x1d6208();
    try {
      _0xac1c8e(_0x244778, _0x562f2a, _0x11285e, _0xdb84d4, _0x1dd6be, _0x55c1ba, _0x186dc7, _0x583822, _0x5cc334, _0x2db551);
    } catch (_0x4744da) {
      _0xe462e3(_0x5368b7);
      if (_0x4744da !== _0x4744da + 0 && _0x4744da !== "longjmp") {
        throw _0x4744da;
      }
      _0x5b12b4(1, 0);
    }
  }
  function _0x1b9a44(_0x215510, _0x524cc3, _0x322c13, _0x19a766, _0x203404, _0x400ae0, _0x42376b) {
    var _0x44134f = _0x1d6208();
    try {
      _0x2fabb2(_0x215510, _0x524cc3, _0x322c13, _0x19a766, _0x203404, _0x400ae0, _0x42376b);
    } catch (_0x2bb58f) {
      _0xe462e3(_0x44134f);
      if (_0x2bb58f !== _0x2bb58f + 0 && _0x2bb58f !== "longjmp") {
        throw _0x2bb58f;
      }
      _0x5b12b4(1, 0);
    }
  }
  function _0x15d606(_0x454f9e, _0x211200, _0x1a05a0, _0x10c4f6, _0x2f4042, _0x50a147, _0x198e80, _0x5c7015, _0x347fe0, _0x5b3000, _0x569b23) {
    var _0x1f65c7 = _0x1d6208();
    try {
      _0x23d035(_0x454f9e, _0x211200, _0x1a05a0, _0x10c4f6, _0x2f4042, _0x50a147, _0x198e80, _0x5c7015, _0x347fe0, _0x5b3000, _0x569b23);
    } catch (_0x33d6cc) {
      _0xe462e3(_0x1f65c7);
      if (_0x33d6cc !== _0x33d6cc + 0 && _0x33d6cc !== "longjmp") {
        throw _0x33d6cc;
      }
      _0x5b12b4(1, 0);
    }
  }
  function _0x3bfcaa(_0x2947e7, _0x329fe5, _0xfab79b, _0x48f98a) {
    var _0x555444 = _0x1d6208();
    try {
      return _0x18cd36(_0x2947e7, _0x329fe5, _0xfab79b, _0x48f98a);
    } catch (_0x11cea1) {
      _0xe462e3(_0x555444);
      if (_0x11cea1 !== _0x11cea1 + 0 && _0x11cea1 !== "longjmp") {
        throw _0x11cea1;
      }
      _0x5b12b4(1, 0);
    }
  }
  function _0x29f8ff(_0x1723d8, _0x44673e, _0x2d27cd, _0x425e6d) {
    var _0x21abb1 = _0x1d6208();
    try {
      return _0x2175fe(_0x1723d8, _0x44673e, _0x2d27cd, _0x425e6d);
    } catch (_0x2d6dd) {
      _0xe462e3(_0x21abb1);
      if (_0x2d6dd !== _0x2d6dd + 0 && _0x2d6dd !== "longjmp") {
        throw _0x2d6dd;
      }
      _0x5b12b4(1, 0);
    }
  }
  function _0x24b70d(_0x40a342, _0x1e9b80, _0x509195) {
    var _0x30f4ab = _0x1d6208();
    try {
      return _0x1bee34(_0x40a342, _0x1e9b80, _0x509195);
    } catch (_0x5624e5) {
      _0xe462e3(_0x30f4ab);
      if (_0x5624e5 !== _0x5624e5 + 0 && _0x5624e5 !== "longjmp") {
        throw _0x5624e5;
      }
      _0x5b12b4(1, 0);
    }
  }
  function _0x595ed1(_0x5be430, _0x51e2df, _0x4fe89a) {
    var _0x1aea86 = _0x1d6208();
    try {
      return _0x2e4b73(_0x5be430, _0x51e2df, _0x4fe89a);
    } catch (_0x34b1f5) {
      _0xe462e3(_0x1aea86);
      if (_0x34b1f5 !== _0x34b1f5 + 0 && _0x34b1f5 !== "longjmp") {
        throw _0x34b1f5;
      }
      _0x5b12b4(1, 0);
    }
  }
  function _0x3bf9a4(_0x4ed7a2, _0x5e5fe3, _0x3a4ca6, _0x50c874, _0x473e03, _0x5f7a44, _0x3ef323, _0x5e0002, _0x13aea6, _0x2fb205, _0x351766, _0xfa6597, _0x4915ca) {
    var _0x588ee6 = _0x1d6208();
    try {
      _0x5a51c0(_0x4ed7a2, _0x5e5fe3, _0x3a4ca6, _0x50c874, _0x473e03, _0x5f7a44, _0x3ef323, _0x5e0002, _0x13aea6, _0x2fb205, _0x351766, _0xfa6597, _0x4915ca);
    } catch (_0x19ee95) {
      _0xe462e3(_0x588ee6);
      if (_0x19ee95 !== _0x19ee95 + 0 && _0x19ee95 !== "longjmp") {
        throw _0x19ee95;
      }
      _0x5b12b4(1, 0);
    }
  }
  function _0x3a7e1f(_0x200b3c, _0x5e60d7, _0x5454ac, _0x2dc4dd) {
    var _0x3d42f4 = _0x1d6208();
    try {
      return _0x3d6109(_0x200b3c, _0x5e60d7, _0x5454ac, _0x2dc4dd);
    } catch (_0x3f2e60) {
      _0xe462e3(_0x3d42f4);
      if (_0x3f2e60 !== _0x3f2e60 + 0 && _0x3f2e60 !== "longjmp") {
        throw _0x3f2e60;
      }
      _0x5b12b4(1, 0);
    }
  }
  function _0x479d5d(_0x3ac25e, _0xb5bfd7, _0x1461f7, _0x3903fc, _0x54ace4, _0x2157bb, _0x2fb1ae) {
    var _0x532943 = _0x1d6208();
    try {
      return _0x43f981(_0x3ac25e, _0xb5bfd7, _0x1461f7, _0x3903fc, _0x54ace4, _0x2157bb, _0x2fb1ae);
    } catch (_0x15ab07) {
      _0xe462e3(_0x532943);
      if (_0x15ab07 !== _0x15ab07 + 0 && _0x15ab07 !== "longjmp") {
        throw _0x15ab07;
      }
      _0x5b12b4(1, 0);
    }
  }
  function _0xd3f796(_0x1977c3, _0x230c31, _0x562473, _0x19600f, _0x2eaf12) {
    var _0x11e749 = _0x1d6208();
    try {
      return _0x273ff2(_0x1977c3, _0x230c31, _0x562473, _0x19600f, _0x2eaf12);
    } catch (_0x4ffab7) {
      _0xe462e3(_0x11e749);
      if (_0x4ffab7 !== _0x4ffab7 + 0 && _0x4ffab7 !== "longjmp") {
        throw _0x4ffab7;
      }
      _0x5b12b4(1, 0);
    }
  }
  function _0x391900(_0x5d5276, _0x2f3a14, _0x27677c, _0x21358d, _0x594064) {
    var _0x228616 = _0x1d6208();
    try {
      return _0x3e87c0(_0x5d5276, _0x2f3a14, _0x27677c, _0x21358d, _0x594064);
    } catch (_0xaea109) {
      _0xe462e3(_0x228616);
      if (_0xaea109 !== _0xaea109 + 0 && _0xaea109 !== "longjmp") {
        throw _0xaea109;
      }
      _0x5b12b4(1, 0);
    }
  }
  function _0x810594(_0x4c28c6, _0x1a507b, _0x1293fd, _0x4368d4, _0x37b69e) {
    var _0x155e41 = _0x1d6208();
    try {
      return _0x132e00(_0x4c28c6, _0x1a507b, _0x1293fd, _0x4368d4, _0x37b69e);
    } catch (_0x343d47) {
      _0xe462e3(_0x155e41);
      if (_0x343d47 !== _0x343d47 + 0 && _0x343d47 !== "longjmp") {
        throw _0x343d47;
      }
      _0x5b12b4(1, 0);
    }
  }
  function _0x2579f9(_0x315ba8, _0x2c0e98) {
    var _0x264ae9 = _0x1d6208();
    try {
      return _0x2a0f63(_0x315ba8, _0x2c0e98);
    } catch (_0x431026) {
      _0xe462e3(_0x264ae9);
      if (_0x431026 !== _0x431026 + 0 && _0x431026 !== "longjmp") {
        throw _0x431026;
      }
      _0x5b12b4(1, 0);
    }
  }
  function _0xe8253e(_0x3bef86, _0x1ac1b0, _0x53aff4, _0x3a6c02, _0x56765f, _0x498259, _0x1062d3, _0x4ecf96, _0x454b2b, _0x307bd5, _0x1fc1b3, _0x344b2b, _0x3281d1, _0x5292c7) {
    var _0x5cf565 = _0x1d6208();
    try {
      _0x3692a6(_0x3bef86, _0x1ac1b0, _0x53aff4, _0x3a6c02, _0x56765f, _0x498259, _0x1062d3, _0x4ecf96, _0x454b2b, _0x307bd5, _0x1fc1b3, _0x344b2b, _0x3281d1, _0x5292c7);
    } catch (_0x4c5896) {
      _0xe462e3(_0x5cf565);
      if (_0x4c5896 !== _0x4c5896 + 0 && _0x4c5896 !== "longjmp") {
        throw _0x4c5896;
      }
      _0x5b12b4(1, 0);
    }
  }
  function _0x15d0a8(_0x19bcdb, _0x41ab1a, _0x5815ab, _0x275b3a, _0xb08e78, _0x220a42, _0x425554, _0x42da0a, _0x24f632, _0x13a173, _0x5dc86c, _0x13c698, _0x1ae1a0, _0x175902) {
    var _0x897de4 = _0x1d6208();
    try {
      _0x5353f0(_0x19bcdb, _0x41ab1a, _0x5815ab, _0x275b3a, _0xb08e78, _0x220a42, _0x425554, _0x42da0a, _0x24f632, _0x13a173, _0x5dc86c, _0x13c698, _0x1ae1a0, _0x175902);
    } catch (_0x870b46) {
      _0xe462e3(_0x897de4);
      if (_0x870b46 !== _0x870b46 + 0 && _0x870b46 !== "longjmp") {
        throw _0x870b46;
      }
      _0x5b12b4(1, 0);
    }
  }
  function _0x416248(_0x7ed3f8, _0x3294c8, _0xfa143, _0x55f872, _0x4daa50, _0x4a535b, _0x556aa0, _0x1b08d7, _0x5c8b25, _0x5343cf, _0x5ee68e, _0x2ac17d, _0x317921, _0x206044) {
    var _0x45d353 = _0x1d6208();
    try {
      _0x353064(_0x7ed3f8, _0x3294c8, _0xfa143, _0x55f872, _0x4daa50, _0x4a535b, _0x556aa0, _0x1b08d7, _0x5c8b25, _0x5343cf, _0x5ee68e, _0x2ac17d, _0x317921, _0x206044);
    } catch (_0x3857a2) {
      _0xe462e3(_0x45d353);
      if (_0x3857a2 !== _0x3857a2 + 0 && _0x3857a2 !== "longjmp") {
        throw _0x3857a2;
      }
      _0x5b12b4(1, 0);
    }
  }
  function _0x2ab557(_0x4aeef9, _0x317941, _0x477de8, _0x358c62, _0xa57819, _0x1f612c, _0x5e8115, _0x2e55c7, _0x132c32, _0x1bf494, _0x2234a5) {
    var _0x68cd01 = _0x1d6208();
    try {
      return _0x374dfb(_0x4aeef9, _0x317941, _0x477de8, _0x358c62, _0xa57819, _0x1f612c, _0x5e8115, _0x2e55c7, _0x132c32, _0x1bf494, _0x2234a5);
    } catch (_0x282dc2) {
      _0xe462e3(_0x68cd01);
      if (_0x282dc2 !== _0x282dc2 + 0 && _0x282dc2 !== "longjmp") {
        throw _0x282dc2;
      }
      _0x5b12b4(1, 0);
    }
  }
  function _0x150033(_0x5cf799, _0x51c153, _0x5d439a, _0x3bebdf, _0x27af3c, _0x5b2355, _0x16f5a5) {
    var _0x5f0196 = _0x1d6208();
    try {
      return _0x1804c9(_0x5cf799, _0x51c153, _0x5d439a, _0x3bebdf, _0x27af3c, _0x5b2355, _0x16f5a5);
    } catch (_0x1b8021) {
      _0xe462e3(_0x5f0196);
      if (_0x1b8021 !== _0x1b8021 + 0 && _0x1b8021 !== "longjmp") {
        throw _0x1b8021;
      }
      _0x5b12b4(1, 0);
    }
  }
  function _0xa7e24c(_0x4a4fe3, _0x2e9b8f, _0x105447, _0x5e07bc) {
    var _0x81924d = _0x1d6208();
    try {
      _0x44efe6(_0x4a4fe3, _0x2e9b8f, _0x105447, _0x5e07bc);
    } catch (_0x523ce7) {
      _0xe462e3(_0x81924d);
      if (_0x523ce7 !== _0x523ce7 + 0 && _0x523ce7 !== "longjmp") {
        throw _0x523ce7;
      }
      _0x5b12b4(1, 0);
    }
  }
  function _0x2dd4e2(_0x4d091a, _0x776507, _0xfb2f3f, _0x229eea, _0x3ebfed) {
    var _0x2cd261 = _0x1d6208();
    try {
      return _0x5e2a2a(_0x4d091a, _0x776507, _0xfb2f3f, _0x229eea, _0x3ebfed);
    } catch (_0x3814a7) {
      _0xe462e3(_0x2cd261);
      if (_0x3814a7 !== _0x3814a7 + 0 && _0x3814a7 !== "longjmp") {
        throw _0x3814a7;
      }
      _0x5b12b4(1, 0);
    }
  }
  function _0x9bcaf0(_0x33e969, _0x486bbf, _0xe64aee, _0x18d8ae, _0x55f124) {
    var _0xce9c16 = _0x1d6208();
    try {
      return _0x2a6498(_0x33e969, _0x486bbf, _0xe64aee, _0x18d8ae, _0x55f124);
    } catch (_0x58d539) {
      _0xe462e3(_0xce9c16);
      if (_0x58d539 !== _0x58d539 + 0 && _0x58d539 !== "longjmp") {
        throw _0x58d539;
      }
      _0x5b12b4(1, 0);
    }
  }
  function _0x1a5813(_0x421a94) {
    var _0x7ec149 = _0x1d6208();
    try {
      return _0x43dd80(_0x421a94);
    } catch (_0x1c60ee) {
      _0xe462e3(_0x7ec149);
      if (_0x1c60ee !== _0x1c60ee + 0 && _0x1c60ee !== "longjmp") {
        throw _0x1c60ee;
      }
      _0x5b12b4(1, 0);
    }
  }
  function _0x4c7380(_0x5a2dab, _0x2ed75b, _0x17de1e, _0x450a20) {
    var _0x220cfb = _0x1d6208();
    try {
      return _0x248155(_0x5a2dab, _0x2ed75b, _0x17de1e, _0x450a20);
    } catch (_0xe7dac1) {
      _0xe462e3(_0x220cfb);
      if (_0xe7dac1 !== _0xe7dac1 + 0 && _0xe7dac1 !== "longjmp") {
        throw _0xe7dac1;
      }
      _0x5b12b4(1, 0);
    }
  }
  function _0x979cc7(_0x62190c, _0x568556, _0x1bea4c, _0x1772b5, _0x100376, _0x1ff8e3, _0x28c765, _0x55682f) {
    var _0x2b7a09 = _0x1d6208();
    try {
      return _0xbe4615(_0x62190c, _0x568556, _0x1bea4c, _0x1772b5, _0x100376, _0x1ff8e3, _0x28c765, _0x55682f);
    } catch (_0x3165ad) {
      _0xe462e3(_0x2b7a09);
      if (_0x3165ad !== _0x3165ad + 0 && _0x3165ad !== "longjmp") {
        throw _0x3165ad;
      }
      _0x5b12b4(1, 0);
    }
  }
  function _0x334f04(_0x55f69c, _0x5d3b33) {
    var _0x1d011f = _0x1d6208();
    try {
      return _0x884f06(_0x55f69c, _0x5d3b33);
    } catch (_0x4141fc) {
      _0xe462e3(_0x1d011f);
      if (_0x4141fc !== _0x4141fc + 0 && _0x4141fc !== "longjmp") {
        throw _0x4141fc;
      }
      _0x5b12b4(1, 0);
    }
  }
  function _0x2129b1(_0x18430f, _0x39bb51, _0x4c0155) {
    var _0xcc8ec1 = _0x1d6208();
    try {
      return _0x3ac978(_0x18430f, _0x39bb51, _0x4c0155);
    } catch (_0x3be50e) {
      _0xe462e3(_0xcc8ec1);
      if (_0x3be50e !== _0x3be50e + 0 && _0x3be50e !== "longjmp") {
        throw _0x3be50e;
      }
      _0x5b12b4(1, 0);
    }
  }
  function _0x1ef706(_0x10efb8, _0x22a995, _0xf9fcd3, _0x5bcd36, _0x6bdb4d, _0x20325c) {
    var _0x246d7f = _0x1d6208();
    try {
      _0x52f0fa(_0x10efb8, _0x22a995, _0xf9fcd3, _0x5bcd36, _0x6bdb4d, _0x20325c);
    } catch (_0x39a7e8) {
      _0xe462e3(_0x246d7f);
      if (_0x39a7e8 !== _0x39a7e8 + 0 && _0x39a7e8 !== "longjmp") {
        throw _0x39a7e8;
      }
      _0x5b12b4(1, 0);
    }
  }
  function _0x438664(_0x32fe6b, _0x46149a, _0x734e2c, _0x40c55e, _0x4ea7c6, _0x1e788c) {
    var _0x594867 = _0x1d6208();
    try {
      return _0x16abb1(_0x32fe6b, _0x46149a, _0x734e2c, _0x40c55e, _0x4ea7c6, _0x1e788c);
    } catch (_0x56b238) {
      _0xe462e3(_0x594867);
      if (_0x56b238 !== _0x56b238 + 0 && _0x56b238 !== "longjmp") {
        throw _0x56b238;
      }
      _0x5b12b4(1, 0);
    }
  }
  function _0x3a5650(_0x1d4e9a, _0x303a38, _0x5b1c10, _0xf4fd8a, _0x54ae8b, _0x10ae20) {
    var _0x47e1e7 = _0x1d6208();
    try {
      return _0x217497(_0x1d4e9a, _0x303a38, _0x5b1c10, _0xf4fd8a, _0x54ae8b, _0x10ae20);
    } catch (_0x3010aa) {
      _0xe462e3(_0x47e1e7);
      if (_0x3010aa !== _0x3010aa + 0 && _0x3010aa !== "longjmp") {
        throw _0x3010aa;
      }
      _0x5b12b4(1, 0);
    }
  }
  function _0x580dd5(_0x330200, _0x1480b4, _0x2aaf85, _0x3ad765, _0x2c3c58) {
    var _0x2b707e = _0x1d6208();
    try {
      return _0x11c18c(_0x330200, _0x1480b4, _0x2aaf85, _0x3ad765, _0x2c3c58);
    } catch (_0x5a98b2) {
      _0xe462e3(_0x2b707e);
      if (_0x5a98b2 !== _0x5a98b2 + 0 && _0x5a98b2 !== "longjmp") {
        throw _0x5a98b2;
      }
      _0x5b12b4(1, 0);
    }
  }
  function _0x4494b4(_0x55f25f, _0xb8b05a, _0x5d679c, _0x33608f, _0x21f9dd) {
    var _0x4ea05f = _0x1d6208();
    try {
      return _0x588c9d(_0x55f25f, _0xb8b05a, _0x5d679c, _0x33608f, _0x21f9dd);
    } catch (_0x2c180c) {
      _0xe462e3(_0x4ea05f);
      if (_0x2c180c !== _0x2c180c + 0 && _0x2c180c !== "longjmp") {
        throw _0x2c180c;
      }
      _0x5b12b4(1, 0);
    }
  }
  function _0x3cf070(_0x31dd26, _0x59713e, _0x56f34b, _0x22f6c1, _0x1d62d5, _0x1ad1ba, _0x3dee01) {
    var _0x1ec18d = _0x1d6208();
    try {
      return _0x56414c(_0x31dd26, _0x59713e, _0x56f34b, _0x22f6c1, _0x1d62d5, _0x1ad1ba, _0x3dee01);
    } catch (_0x2a8ce5) {
      _0xe462e3(_0x1ec18d);
      if (_0x2a8ce5 !== _0x2a8ce5 + 0 && _0x2a8ce5 !== "longjmp") {
        throw _0x2a8ce5;
      }
      _0x5b12b4(1, 0);
    }
  }
  function _0x16f4ae(_0x352378, _0x4f3913, _0x58079f, _0x9cac77, _0x5521a5, _0x5a6ef8) {
    var _0x1411d5 = _0x1d6208();
    try {
      _0x50f63d(_0x352378, _0x4f3913, _0x58079f, _0x9cac77, _0x5521a5, _0x5a6ef8);
    } catch (_0x4a5963) {
      _0xe462e3(_0x1411d5);
      if (_0x4a5963 !== _0x4a5963 + 0 && _0x4a5963 !== "longjmp") {
        throw _0x4a5963;
      }
      _0x5b12b4(1, 0);
    }
  }
  function _0x118f9f(_0x120b4b, _0x56e02b, _0x2188a2, _0x49a54e, _0x1db3ae, _0x4662e9, _0x27a900, _0xd79a58) {
    var _0xd03213 = _0x1d6208();
    try {
      _0x577748(_0x120b4b, _0x56e02b, _0x2188a2, _0x49a54e, _0x1db3ae, _0x4662e9, _0x27a900, _0xd79a58);
    } catch (_0x2172cf) {
      _0xe462e3(_0xd03213);
      if (_0x2172cf !== _0x2172cf + 0 && _0x2172cf !== "longjmp") {
        throw _0x2172cf;
      }
      _0x5b12b4(1, 0);
    }
  }
  function _0x41b0bf(_0x13d275, _0x802d60, _0x36f70d) {
    var _0x1f3ea4 = _0x1d6208();
    try {
      return _0x249b25(_0x13d275, _0x802d60, _0x36f70d);
    } catch (_0x530c51) {
      _0xe462e3(_0x1f3ea4);
      if (_0x530c51 !== _0x530c51 + 0 && _0x530c51 !== "longjmp") {
        throw _0x530c51;
      }
      _0x5b12b4(1, 0);
    }
  }
  function _0x32e5f8(_0x4ef6a1, _0x1ce546, _0x25c42d, _0x20bfa9, _0x2634b1, _0x38d27a, _0x321079) {
    var _0x2063f3 = _0x1d6208();
    try {
      _0x1cfeb1(_0x4ef6a1, _0x1ce546, _0x25c42d, _0x20bfa9, _0x2634b1, _0x38d27a, _0x321079);
    } catch (_0x3d3db1) {
      _0xe462e3(_0x2063f3);
      if (_0x3d3db1 !== _0x3d3db1 + 0 && _0x3d3db1 !== "longjmp") {
        throw _0x3d3db1;
      }
      _0x5b12b4(1, 0);
    }
  }
  function _0x1bc4fb(_0xb34943, _0x1fae55, _0x147829, _0x5a78ee, _0xc45239) {
    var _0x2ac922 = _0x1d6208();
    try {
      _0x2e5acb(_0xb34943, _0x1fae55, _0x147829, _0x5a78ee, _0xc45239);
    } catch (_0x6905f8) {
      _0xe462e3(_0x2ac922);
      if (_0x6905f8 !== _0x6905f8 + 0 && _0x6905f8 !== "longjmp") {
        throw _0x6905f8;
      }
      _0x5b12b4(1, 0);
    }
  }
  function _0x31344b(_0xa7be98, _0x2f4aaf, _0x416465, _0x4ee4d4) {
    var _0x4c2a95 = _0x1d6208();
    try {
      return _0xf7adf5(_0xa7be98, _0x2f4aaf, _0x416465, _0x4ee4d4);
    } catch (_0x248ac4) {
      _0xe462e3(_0x4c2a95);
      if (_0x248ac4 !== _0x248ac4 + 0 && _0x248ac4 !== "longjmp") {
        throw _0x248ac4;
      }
      _0x5b12b4(1, 0);
    }
  }
  function _0x545027(_0x4053b1, _0x6e9420, _0x27475f, _0x4e61b0, _0x2712e4, _0x29f108) {
    var _0x3459ca = _0x1d6208();
    try {
      return _0x545325(_0x4053b1, _0x6e9420, _0x27475f, _0x4e61b0, _0x2712e4, _0x29f108);
    } catch (_0x111014) {
      _0xe462e3(_0x3459ca);
      if (_0x111014 !== _0x111014 + 0 && _0x111014 !== "longjmp") {
        throw _0x111014;
      }
      _0x5b12b4(1, 0);
    }
  }
  function _0x53ad21(_0x4a8adb, _0x52288d, _0x37343a, _0x2014d0, _0xa09b6f, _0x5d4421) {
    var _0x3c4bd2 = _0x1d6208();
    try {
      return _0x148fea(_0x4a8adb, _0x52288d, _0x37343a, _0x2014d0, _0xa09b6f, _0x5d4421);
    } catch (_0x731d96) {
      _0xe462e3(_0x3c4bd2);
      if (_0x731d96 !== _0x731d96 + 0 && _0x731d96 !== "longjmp") {
        throw _0x731d96;
      }
      _0x5b12b4(1, 0);
    }
  }
  function _0x1e7134(_0x520f3a, _0x82eaed, _0x3ebe46, _0x49f761, _0x2edb27) {
    var _0x27e2b2 = _0x1d6208();
    try {
      return _0x5cc427(_0x520f3a, _0x82eaed, _0x3ebe46, _0x49f761, _0x2edb27);
    } catch (_0x5b3c0c) {
      _0xe462e3(_0x27e2b2);
      if (_0x5b3c0c !== _0x5b3c0c + 0 && _0x5b3c0c !== "longjmp") {
        throw _0x5b3c0c;
      }
      _0x5b12b4(1, 0);
    }
  }
  function _0x4a21c1(_0xd510a6, _0x36535e, _0x47bde4, _0x52fecb) {
    var _0x1d5397 = _0x1d6208();
    try {
      return _0x441117(_0xd510a6, _0x36535e, _0x47bde4, _0x52fecb);
    } catch (_0x37bf90) {
      _0xe462e3(_0x1d5397);
      if (_0x37bf90 !== _0x37bf90 + 0 && _0x37bf90 !== "longjmp") {
        throw _0x37bf90;
      }
      _0x5b12b4(1, 0);
    }
  }
  function _0x3f8bd0(_0x1981e5, _0x176740, _0x3ee0d9, _0x1ff393, _0x65dc0b) {
    var _0x43b983 = _0x1d6208();
    try {
      _0x5aa19a(_0x1981e5, _0x176740, _0x3ee0d9, _0x1ff393, _0x65dc0b);
    } catch (_0x54a51b) {
      _0xe462e3(_0x43b983);
      if (_0x54a51b !== _0x54a51b + 0 && _0x54a51b !== "longjmp") {
        throw _0x54a51b;
      }
      _0x5b12b4(1, 0);
    }
  }
  function _0x4c2f4e(_0x37cbde, _0x87f980, _0x14140c, _0x151a15, _0x12049b, _0x3b4e07) {
    var _0x53ea76 = _0x1d6208();
    try {
      _0x13bd90(_0x37cbde, _0x87f980, _0x14140c, _0x151a15, _0x12049b, _0x3b4e07);
    } catch (_0x53e2d1) {
      _0xe462e3(_0x53ea76);
      if (_0x53e2d1 !== _0x53e2d1 + 0 && _0x53e2d1 !== "longjmp") {
        throw _0x53e2d1;
      }
      _0x5b12b4(1, 0);
    }
  }
  function _0xf9156d(_0x5b4bef, _0x3d4781, _0x28ea6c, _0x140136, _0x264b7c, _0x5e660b) {
    var _0x30ba5c = _0x1d6208();
    try {
      return _0x5242ae(_0x5b4bef, _0x3d4781, _0x28ea6c, _0x140136, _0x264b7c, _0x5e660b);
    } catch (_0x4fab9b) {
      _0xe462e3(_0x30ba5c);
      if (_0x4fab9b !== _0x4fab9b + 0 && _0x4fab9b !== "longjmp") {
        throw _0x4fab9b;
      }
      _0x5b12b4(1, 0);
    }
  }
  function _0x7b7977(_0x1120a1, _0xe840b3, _0x48a108, _0x4ff2d7) {
    var _0x520f9e = _0x1d6208();
    try {
      return _0xef9a39(_0x1120a1, _0xe840b3, _0x48a108, _0x4ff2d7);
    } catch (_0x58735f) {
      _0xe462e3(_0x520f9e);
      if (_0x58735f !== _0x58735f + 0 && _0x58735f !== "longjmp") {
        throw _0x58735f;
      }
      _0x5b12b4(1, 0);
    }
  }
  function _0x1a29d5(_0x2be09e, _0x3afbbb, _0x2a7801, _0x3c20da, _0x31804b, _0x1beebd, _0xbe6ad7) {
    var _0x133a93 = _0x1d6208();
    try {
      _0x5cdbb0(_0x2be09e, _0x3afbbb, _0x2a7801, _0x3c20da, _0x31804b, _0x1beebd, _0xbe6ad7);
    } catch (_0x4dab5c) {
      _0xe462e3(_0x133a93);
      if (_0x4dab5c !== _0x4dab5c + 0 && _0x4dab5c !== "longjmp") {
        throw _0x4dab5c;
      }
      _0x5b12b4(1, 0);
    }
  }
  function _0x486bf1(_0x110a7c, _0x527599, _0x2f5455, _0x233f73, _0x4134e7, _0x59e52b, _0x5f13f7, _0x1f8853) {
    var _0x39f187 = _0x1d6208();
    try {
      _0x32593d(_0x110a7c, _0x527599, _0x2f5455, _0x233f73, _0x4134e7, _0x59e52b, _0x5f13f7, _0x1f8853);
    } catch (_0x477332) {
      _0xe462e3(_0x39f187);
      if (_0x477332 !== _0x477332 + 0 && _0x477332 !== "longjmp") {
        throw _0x477332;
      }
      _0x5b12b4(1, 0);
    }
  }
  function _0x583566(_0x3065c7, _0x310859, _0x47f07c, _0x52f6a1, _0x2717cc, _0x44674a, _0x1b8951, _0x9e98eb) {
    var _0x19e7fd = _0x1d6208();
    try {
      _0x49bb55(_0x3065c7, _0x310859, _0x47f07c, _0x52f6a1, _0x2717cc, _0x44674a, _0x1b8951, _0x9e98eb);
    } catch (_0x3b5a8c) {
      _0xe462e3(_0x19e7fd);
      if (_0x3b5a8c !== _0x3b5a8c + 0 && _0x3b5a8c !== "longjmp") {
        throw _0x3b5a8c;
      }
      _0x5b12b4(1, 0);
    }
  }
  function _0x1b69bf(_0x320c40, _0x592c76, _0x35cef6, _0x3c5b4c) {
    var _0x3f5c41 = _0x1d6208();
    try {
      return _0x1b711b(_0x320c40, _0x592c76, _0x35cef6, _0x3c5b4c);
    } catch (_0x50239b) {
      _0xe462e3(_0x3f5c41);
      if (_0x50239b !== _0x50239b + 0 && _0x50239b !== "longjmp") {
        throw _0x50239b;
      }
      _0x5b12b4(1, 0);
    }
  }
  function _0x5e4f0c(_0x471e81, _0x95cb23, _0x4084d8, _0x398fe3, _0x5cbf6e, _0x552f6b, _0x2c8304, _0x23a15a, _0xc6bf32, _0x5690e1, _0x574535, _0xfec3b6, _0x5019f4, _0x1639de) {
    var _0x3ed0d2 = _0x1d6208();
    try {
      _0xe6d2d7(_0x471e81, _0x95cb23, _0x4084d8, _0x398fe3, _0x5cbf6e, _0x552f6b, _0x2c8304, _0x23a15a, _0xc6bf32, _0x5690e1, _0x574535, _0xfec3b6, _0x5019f4, _0x1639de);
    } catch (_0xf635d4) {
      _0xe462e3(_0x3ed0d2);
      if (_0xf635d4 !== _0xf635d4 + 0 && _0xf635d4 !== "longjmp") {
        throw _0xf635d4;
      }
      _0x5b12b4(1, 0);
    }
  }
  function _0x571eaa(_0x128bc0, _0x4000ee, _0x5e3eff, _0x57ad82, _0x270a52, _0x4d52b2, _0x5db842, _0x3043fe, _0x4689d1, _0x5ab233) {
    var _0x27f3df = _0x1d6208();
    try {
      _0x4015f3(_0x128bc0, _0x4000ee, _0x5e3eff, _0x57ad82, _0x270a52, _0x4d52b2, _0x5db842, _0x3043fe, _0x4689d1, _0x5ab233);
    } catch (_0x53503e) {
      _0xe462e3(_0x27f3df);
      if (_0x53503e !== _0x53503e + 0 && _0x53503e !== "longjmp") {
        throw _0x53503e;
      }
      _0x5b12b4(1, 0);
    }
  }
  function _0x59a44d(_0x21d46f, _0x569f19, _0x267571, _0xb50ae4, _0x241934, _0x50f5a5) {
    var _0x5768b5 = _0x1d6208();
    try {
      return _0x3e74ed(_0x21d46f, _0x569f19, _0x267571, _0xb50ae4, _0x241934, _0x50f5a5);
    } catch (_0x50abd7) {
      _0xe462e3(_0x5768b5);
      if (_0x50abd7 !== _0x50abd7 + 0 && _0x50abd7 !== "longjmp") {
        throw _0x50abd7;
      }
      _0x5b12b4(1, 0);
    }
  }
  function _0x4140e4(_0x2fa675, _0xd134fa, _0x282b7b, _0xd88528, _0x38063f, _0x5a457a, _0x44ce2d, _0x26b0f6, _0x3296d3, _0x1c6128, _0x249361, _0x4fa033) {
    var _0x5e4fda = _0x1d6208();
    try {
      return _0x38dd01(_0x2fa675, _0xd134fa, _0x282b7b, _0xd88528, _0x38063f, _0x5a457a, _0x44ce2d, _0x26b0f6, _0x3296d3, _0x1c6128, _0x249361, _0x4fa033);
    } catch (_0x38ee5c) {
      _0xe462e3(_0x5e4fda);
      if (_0x38ee5c !== _0x38ee5c + 0 && _0x38ee5c !== "longjmp") {
        throw _0x38ee5c;
      }
      _0x5b12b4(1, 0);
    }
  }
  function _0x41f96c(_0x8ea1b9, _0x5c3439, _0x4907d9, _0x3adf0d) {
    var _0x549768 = _0x1d6208();
    try {
      _0x2cd32e(_0x8ea1b9, _0x5c3439, _0x4907d9, _0x3adf0d);
    } catch (_0x502002) {
      _0xe462e3(_0x549768);
      if (_0x502002 !== _0x502002 + 0 && _0x502002 !== "longjmp") {
        throw _0x502002;
      }
      _0x5b12b4(1, 0);
    }
  }
  function _0x30732e(_0xf130a4, _0x65bbfc, _0x55205d, _0x44bb78, _0x5d18d0, _0x590db7, _0x4f11b0, _0x53a2a3, _0x3848d6) {
    var _0x3d4a9d = _0x1d6208();
    try {
      _0x33d1d3(_0xf130a4, _0x65bbfc, _0x55205d, _0x44bb78, _0x5d18d0, _0x590db7, _0x4f11b0, _0x53a2a3, _0x3848d6);
    } catch (_0x20d8c6) {
      _0xe462e3(_0x3d4a9d);
      if (_0x20d8c6 !== _0x20d8c6 + 0 && _0x20d8c6 !== "longjmp") {
        throw _0x20d8c6;
      }
      _0x5b12b4(1, 0);
    }
  }
  function _0xef81a5(_0x325bbc, _0x2d709e, _0x301ba2, _0x591a4a, _0x454117, _0xd44164, _0x3fde98, _0x5477f5) {
    var _0x17abe2 = _0x1d6208();
    try {
      return _0x2b925e(_0x325bbc, _0x2d709e, _0x301ba2, _0x591a4a, _0x454117, _0xd44164, _0x3fde98, _0x5477f5);
    } catch (_0x2fd2d0) {
      _0xe462e3(_0x17abe2);
      if (_0x2fd2d0 !== _0x2fd2d0 + 0 && _0x2fd2d0 !== "longjmp") {
        throw _0x2fd2d0;
      }
      _0x5b12b4(1, 0);
    }
  }
  function _0x5c803e(_0x298b6e, _0x51009f, _0x387a03, _0x36d45c, _0x29baab, _0xbb0109) {
    var _0xdb2410 = _0x1d6208();
    try {
      return _0x21d80b(_0x298b6e, _0x51009f, _0x387a03, _0x36d45c, _0x29baab, _0xbb0109);
    } catch (_0x411d98) {
      _0xe462e3(_0xdb2410);
      if (_0x411d98 !== _0x411d98 + 0 && _0x411d98 !== "longjmp") {
        throw _0x411d98;
      }
      _0x5b12b4(1, 0);
    }
  }
  function _0x526d1e(_0x2e3236, _0x5a6a0f, _0x355080, _0x112981, _0x36e6dd, _0x3ad85d, _0x20edd1) {
    var _0x3bb712 = _0x1d6208();
    try {
      return _0x232fd8(_0x2e3236, _0x5a6a0f, _0x355080, _0x112981, _0x36e6dd, _0x3ad85d, _0x20edd1);
    } catch (_0x417f1a) {
      _0xe462e3(_0x3bb712);
      if (_0x417f1a !== _0x417f1a + 0 && _0x417f1a !== "longjmp") {
        throw _0x417f1a;
      }
      _0x5b12b4(1, 0);
    }
  }
  function _0x3be593(_0x3675b0, _0x7423dd, _0x5d9df8, _0x1bdfa4, _0x22ef2b, _0x180176, _0x3e646b, _0x168c1c, _0xd72ba9, _0x2cbe46) {
    var _0x306830 = _0x1d6208();
    try {
      return _0x5143af(_0x3675b0, _0x7423dd, _0x5d9df8, _0x1bdfa4, _0x22ef2b, _0x180176, _0x3e646b, _0x168c1c, _0xd72ba9, _0x2cbe46);
    } catch (_0x22e94f) {
      _0xe462e3(_0x306830);
      if (_0x22e94f !== _0x22e94f + 0 && _0x22e94f !== "longjmp") {
        throw _0x22e94f;
      }
      _0x5b12b4(1, 0);
    }
  }
  function _0x1bdf55(_0xa3d9f, _0x2ce0ce, _0x4fb205, _0x403e47, _0x5d0f48, _0x27b20c, _0x38925c) {
    var _0x5952b9 = _0x1d6208();
    try {
      _0x1bac9f(_0xa3d9f, _0x2ce0ce, _0x4fb205, _0x403e47, _0x5d0f48, _0x27b20c, _0x38925c);
    } catch (_0x1fb5ec) {
      _0xe462e3(_0x5952b9);
      if (_0x1fb5ec !== _0x1fb5ec + 0 && _0x1fb5ec !== "longjmp") {
        throw _0x1fb5ec;
      }
      _0x5b12b4(1, 0);
    }
  }
  function _0x350c3e(_0x530391, _0x56036d, _0x5b718d, _0x32d9c6, _0x3d37ff, _0x2115a7, _0xb75121, _0x251cc9, _0x5a57c9, _0xae675b, _0x6366db, _0x3e1ea3) {
    var _0x1aedc3 = _0x1d6208();
    try {
      return _0x2beacd(_0x530391, _0x56036d, _0x5b718d, _0x32d9c6, _0x3d37ff, _0x2115a7, _0xb75121, _0x251cc9, _0x5a57c9, _0xae675b, _0x6366db, _0x3e1ea3);
    } catch (_0x242778) {
      _0xe462e3(_0x1aedc3);
      if (_0x242778 !== _0x242778 + 0 && _0x242778 !== "longjmp") {
        throw _0x242778;
      }
      _0x5b12b4(1, 0);
    }
  }
  function _0x4f333a(_0x9bb247, _0x3eb3a5, _0x598257, _0x5286cb, _0x855442, _0x5db927, _0x4433aa, _0x3ffa24, _0x392615, _0x4f0345) {
    var _0x4871f7 = _0x1d6208();
    try {
      return _0x267bc1(_0x9bb247, _0x3eb3a5, _0x598257, _0x5286cb, _0x855442, _0x5db927, _0x4433aa, _0x3ffa24, _0x392615, _0x4f0345);
    } catch (_0x5e4574) {
      _0xe462e3(_0x4871f7);
      if (_0x5e4574 !== _0x5e4574 + 0 && _0x5e4574 !== "longjmp") {
        throw _0x5e4574;
      }
      _0x5b12b4(1, 0);
    }
  }
  function _0x2554e0(_0x41d11d, _0x2f4983, _0x21cdc2, _0x500f77, _0x40833a, _0x4aff9b, _0x1fea8e, _0x56a569, _0x10cad7) {
    var _0x59db9e = _0x1d6208();
    try {
      _0x2a3e6d(_0x41d11d, _0x2f4983, _0x21cdc2, _0x500f77, _0x40833a, _0x4aff9b, _0x1fea8e, _0x56a569, _0x10cad7);
    } catch (_0x79b720) {
      _0xe462e3(_0x59db9e);
      if (_0x79b720 !== _0x79b720 + 0 && _0x79b720 !== "longjmp") {
        throw _0x79b720;
      }
      _0x5b12b4(1, 0);
    }
  }
  function _0x11b58b(_0x3ac3e1, _0x4e4fc5, _0x4c6bf4, _0x3b7652, _0x271987, _0x5b16e1) {
    var _0x5eab37 = _0x1d6208();
    try {
      return _0x4c6561(_0x3ac3e1, _0x4e4fc5, _0x4c6bf4, _0x3b7652, _0x271987, _0x5b16e1);
    } catch (_0x3efde9) {
      _0xe462e3(_0x5eab37);
      if (_0x3efde9 !== _0x3efde9 + 0 && _0x3efde9 !== "longjmp") {
        throw _0x3efde9;
      }
      _0x5b12b4(1, 0);
    }
  }
  function _0x3c90ef(_0x2d2ae9, _0x1268ef, _0x57f9bc, _0x25886c, _0x1a239d, _0x2b4b9e, _0x1b7359, _0x43b564, _0xc7c11c, _0x120722, _0x2ac336, _0x476e65, _0x501a14, _0x3fd54e, _0x1d4217, _0x56f41b) {
    var _0x3bcc0a = _0x1d6208();
    try {
      _0x12bf7f(_0x2d2ae9, _0x1268ef, _0x57f9bc, _0x25886c, _0x1a239d, _0x2b4b9e, _0x1b7359, _0x43b564, _0xc7c11c, _0x120722, _0x2ac336, _0x476e65, _0x501a14, _0x3fd54e, _0x1d4217, _0x56f41b);
    } catch (_0xa1a6ff) {
      _0xe462e3(_0x3bcc0a);
      if (_0xa1a6ff !== _0xa1a6ff + 0 && _0xa1a6ff !== "longjmp") {
        throw _0xa1a6ff;
      }
      _0x5b12b4(1, 0);
    }
  }
  function _0xce8d10(_0xdd7042, _0xf55119, _0x5b4ab9, _0x2985f4, _0x489dce, _0x14c18b, _0x5cbb12) {
    var _0xdefe16 = _0x1d6208();
    try {
      return _0x37c7c2(_0xdd7042, _0xf55119, _0x5b4ab9, _0x2985f4, _0x489dce, _0x14c18b, _0x5cbb12);
    } catch (_0x120aaa) {
      _0xe462e3(_0xdefe16);
      if (_0x120aaa !== _0x120aaa + 0 && _0x120aaa !== "longjmp") {
        throw _0x120aaa;
      }
      _0x5b12b4(1, 0);
    }
  }
  function _0x41c8dc(_0x105e8e, _0x15431b, _0x587c8d, _0x4b786d) {
    var _0x60cac9 = _0x1d6208();
    try {
      return _0x142101(_0x105e8e, _0x15431b, _0x587c8d, _0x4b786d);
    } catch (_0x1cc423) {
      _0xe462e3(_0x60cac9);
      if (_0x1cc423 !== _0x1cc423 + 0 && _0x1cc423 !== "longjmp") {
        throw _0x1cc423;
      }
      _0x5b12b4(1, 0);
    }
  }
  function _0x139b3c(_0x1e9a14, _0x13cfc7, _0x1ecad2, _0x2288ea, _0x37769c, _0x43b9ce, _0x54db55, _0x35f7f3, _0xa96e1a, _0x282ba4, _0x4eb22a) {
    var _0x35fc96 = _0x1d6208();
    try {
      return _0x5b9017(_0x1e9a14, _0x13cfc7, _0x1ecad2, _0x2288ea, _0x37769c, _0x43b9ce, _0x54db55, _0x35f7f3, _0xa96e1a, _0x282ba4, _0x4eb22a);
    } catch (_0x4b5ca4) {
      _0xe462e3(_0x35fc96);
      if (_0x4b5ca4 !== _0x4b5ca4 + 0 && _0x4b5ca4 !== "longjmp") {
        throw _0x4b5ca4;
      }
      _0x5b12b4(1, 0);
    }
  }
  function _0x3951ab(_0x1aa612, _0xe7cde0, _0x48abc7, _0x303738, _0x159bfd, _0x2ee516, _0x29e5b9, _0x132314, _0x818333, _0x3399bf, _0xa112e9) {
    var _0x32de3a = _0x1d6208();
    try {
      _0x386b36(_0x1aa612, _0xe7cde0, _0x48abc7, _0x303738, _0x159bfd, _0x2ee516, _0x29e5b9, _0x132314, _0x818333, _0x3399bf, _0xa112e9);
    } catch (_0x1af571) {
      _0xe462e3(_0x32de3a);
      if (_0x1af571 !== _0x1af571 + 0 && _0x1af571 !== "longjmp") {
        throw _0x1af571;
      }
      _0x5b12b4(1, 0);
    }
  }
  function _0x3f36ef(_0x13a35a, _0x242bc1, _0xfae21f, _0x736121, _0x50d9da, _0x29f82c, _0x12f2c1, _0x58ceb2) {
    var _0x5cfaf1 = _0x1d6208();
    try {
      _0x564540(_0x13a35a, _0x242bc1, _0xfae21f, _0x736121, _0x50d9da, _0x29f82c, _0x12f2c1, _0x58ceb2);
    } catch (_0x16fdc4) {
      _0xe462e3(_0x5cfaf1);
      if (_0x16fdc4 !== _0x16fdc4 + 0 && _0x16fdc4 !== "longjmp") {
        throw _0x16fdc4;
      }
      _0x5b12b4(1, 0);
    }
  }
  function _0x5d5408(_0x428dae, _0x82a84c, _0x38e9ec, _0x23dd23, _0x4aa5d2, _0x4380f3, _0x86e006, _0x42547a, _0xe5b4aa, _0x1b10b5, _0x5ad246) {
    var _0xdc1010 = _0x1d6208();
    try {
      _0x4eebd0(_0x428dae, _0x82a84c, _0x38e9ec, _0x23dd23, _0x4aa5d2, _0x4380f3, _0x86e006, _0x42547a, _0xe5b4aa, _0x1b10b5, _0x5ad246);
    } catch (_0x572545) {
      _0xe462e3(_0xdc1010);
      if (_0x572545 !== _0x572545 + 0 && _0x572545 !== "longjmp") {
        throw _0x572545;
      }
      _0x5b12b4(1, 0);
    }
  }
  function _0x19bd6a(_0x3df596, _0x42fbf2, _0xd2cd45, _0x10262f, _0x2592a3, _0x19099c, _0x114946) {
    var _0x2bae28 = _0x1d6208();
    try {
      return _0x287348(_0x3df596, _0x42fbf2, _0xd2cd45, _0x10262f, _0x2592a3, _0x19099c, _0x114946);
    } catch (_0x38c8a8) {
      _0xe462e3(_0x2bae28);
      if (_0x38c8a8 !== _0x38c8a8 + 0 && _0x38c8a8 !== "longjmp") {
        throw _0x38c8a8;
      }
      _0x5b12b4(1, 0);
    }
  }
  function _0x2b537a(_0xbdba4, _0x19a1fe, _0x263cee, _0xefbdcb, _0x1c7fb2, _0x5f3ceb) {
    var _0x1bd169 = _0x1d6208();
    try {
      return _0x46d0bb(_0xbdba4, _0x19a1fe, _0x263cee, _0xefbdcb, _0x1c7fb2, _0x5f3ceb);
    } catch (_0x4895a1) {
      _0xe462e3(_0x1bd169);
      if (_0x4895a1 !== _0x4895a1 + 0 && _0x4895a1 !== "longjmp") {
        throw _0x4895a1;
      }
      _0x5b12b4(1, 0);
    }
  }
  _0x3255d0.ccall = _0x5742ec;
  _0x3255d0.cwrap = _0x11ba9d;
  _0x3255d0.stackTrace = _0x5e940f;
  _0x3255d0.addRunDependency = _0x51bf84;
  _0x3255d0.removeRunDependency = _0x705650;
  _0x3255d0.FS_createPath = _0x129e29.createPath;
  _0x3255d0.FS_createDataFile = _0x129e29.createDataFile;
  _0x3255d0.stackTrace = _0x5e940f;
  var _0x40b093;
  function _0x1a0e88(_0x121f30) {
    this.name = "ExitStatus";
    this.message = "Program terminated with exit(" + _0x121f30 + ")";
    this.status = _0x121f30;
  }
  var _0x5bebb7 = false;
  _0x510af6 = function _0x3a9eac() {
    if (!_0x40b093) {
      _0x47958a();
    }
    if (!_0x40b093) {
      _0x510af6 = _0x3a9eac;
    }
  };
  function _0x50a01f(_0x5cd93f) {
    var _0x134d8c = _0x3255d0._main;
    _0x5cd93f = _0x5cd93f || [];
    var _0x4b1e6a = _0x5cd93f.length + 1;
    var _0xff3102 = _0xf2adf5((_0x4b1e6a + 1) * 4);
    _0x3ea6c9[_0xff3102 >> 2] = _0x5842f7(_0x63ff32);
    for (var _0x3f0b93 = 1; _0x3f0b93 < _0x4b1e6a; _0x3f0b93++) {
      _0x3ea6c9[(_0xff3102 >> 2) + _0x3f0b93] = _0x5842f7(_0x5cd93f[_0x3f0b93 - 1]);
    }
    _0x3ea6c9[(_0xff3102 >> 2) + _0x4b1e6a] = 0;
    try {
      var _0x1299e1 = _0x134d8c(_0x4b1e6a, _0xff3102);
      _0x5c8af4(_0x1299e1, true);
    } catch (_0x2562de) {
      if (_0x2562de instanceof _0x1a0e88) {
        return;
      } else if (_0x2562de == "unwind") {
        return;
      } else {
        var _0x426ae0 = _0x2562de;
        if (_0x2562de && typeof _0x2562de === "object" && _0x2562de.stack) {
          _0x426ae0 = [_0x2562de, _0x2562de.stack];
        }
        _0x266425("exception thrown: " + _0x426ae0);
        _0x955c7f(1, _0x2562de);
      }
    } finally {
      _0x5bebb7 = true;
    }
  }
  function _0x47958a(_0x3d0816) {
    _0x3d0816 = _0x3d0816 || _0x1415f0;
    if (_0xd7279a > 0) {
      return;
    }
    _0x178eb2();
    if (_0xd7279a > 0) {
      return;
    }
    function _0x1a14fe() {
      if (_0x40b093) {
        return;
      }
      _0x40b093 = true;
      _0x3255d0.calledRun = true;
      if (_0x587c3e) {
        return;
      }
      _0x4efb4d();
      _0x482064();
      if (_0x3255d0.onRuntimeInitialized) {
        _0x3255d0.onRuntimeInitialized();
      }
      if (_0x391e88) {
        _0x50a01f(_0x3d0816);
      }
      _0x2bc8e1();
    }
    if (_0x3255d0.setStatus) {
      _0x3255d0.setStatus("Running...");
      setTimeout(function () {
        setTimeout(function () {
          _0x3255d0.setStatus("");
        }, 1);
        _0x1a14fe();
      }, 1);
    } else {
      _0x1a14fe();
    }
  }
  _0x3255d0.run = _0x47958a;
  function _0x5c8af4(_0x186fd0, _0x3d9f62) {
    _0xeffd59 = _0x186fd0;
    if (_0x3d9f62 && _0x590943() && _0x186fd0 === 0) {
      return;
    }
    if (_0x590943()) {} else {
      _0x31a011();
      if (_0x3255d0.onExit) {
        _0x3255d0.onExit(_0x186fd0);
      }
      _0x587c3e = true;
    }
    _0x955c7f(_0x186fd0, new _0x1a0e88(_0x186fd0));
  }
  if (_0x3255d0.preInit) {
    if (typeof _0x3255d0.preInit == "function") {
      _0x3255d0.preInit = [_0x3255d0.preInit];
    }
    while (_0x3255d0.preInit.length > 0) {
      _0x3255d0.preInit.pop()();
    }
  }
  var _0x391e88 = true;
  if (_0x3255d0.noInitialRun) {
    _0x391e88 = false;
  }
  _0x47958a();
}
config.sourceHtml = "REJVQUVUTWNid3hGTUVwd0p6d0FCUXNDRDFnS1hBY2REQlVkQmtzR0dSSWtUVFlTQ2lwUQ==";
window.GMPERFORM = {};
window.GMPERFORM.LOAD = Date.now();
if (!window.GMSOFT_OPTIONS) {
  window.GMSOFT_OPTIONS = config;
  window.GMSOFT_OPTIONS.domainHost = "https://gamea.azgame.io";
}
config.referrer = document.referrer;
function gmdebugtime(_0x1b86c3) {
  console.log("_TIME_" + _0x1b86c3 + ":" + (Date.now() - window.GMPERFORM.LOAD));
}
function gmdebug(_0x308c3a) {
  console.log(_0x308c3a);
}
function gmEvent(_0x565517, _0x4c9ac1) {
  loadGMData(_0x565517, _0x4c9ac1);
}
function gmStartGame(_0xdcf964) {
  _0xdcf964();
}
function gmStartAds(_0x280d41) {
  _0x280d41();
}
let fireFPS = 0;
async function loadGMData(_0x4fa5c1, _0x1aaaad) {
  try {
    if (!config.eventAPI) {
      return;
    }
    if (!config.eventLog && _0x4fa5c1 != "document-ready" && _0x4fa5c1 != "start-game" && _0x4fa5c1 != "unload-game") {
      return;
    }
    if (_0x4fa5c1 == "fps") {
      try {
        let _0x2caf2f = _0x1aaaad.split("|");
        if (_0x2caf2f.length >= 2) {
          firebaseLogEventParameter("timecounter", _0x2caf2f[0]);
          if (fireFPS < 2) {
            fireFPS++;
            firebaseLogEventParameter("fps", _0x2caf2f[1]);
          }
        }
      } catch (_0x5ecd50) {
        console.log("Error extracting time from abc:", _0x5ecd50.message);
      }
    }
    let _0x1cae12 = "";
    if (_0x1aaaad) {
      _0x1cae12 = "&msg=" + encodeURIComponent(xorEncryptMsg(_0x1aaaad));
    }
    _0x1cae12 += "&time=" + encodeURIComponent(Date.now() - window.GMPERFORM.LOAD);
    _0x1cae12 += "&gid=" + config.gameId;
    if (_0x4fa5c1 == "ban-game" || _0x4fa5c1 == "document-ready" || _0x4fa5c1 == "start-game") {
      _0x1cae12 += "&wtop=" + "azgames.io";
      _0x1cae12 += "&hn=" + "https://gamea.azgame.io";
      _0x1cae12 += "&referrer=" + config.referrer;
    }
    let _0x1cfd83 = "&data=" + btoa(_0x1cae12);
    let _0x517e20 = config.eventAPI + "?event=" + _0x4fa5c1 + _0x1cfd83;
    let _0x4fbd9d = new XMLHttpRequest();
    _0x4fbd9d.open("GET", _0x517e20);
    _0x4fbd9d.onreadystatechange = function () {
      if (_0x4fbd9d.readyState !== 4) {
        return;
      }
      if (_0x4fbd9d.status === 200) {
        console.log(_0x4fbd9d.responseText);
      } else {
        console.log("HTTP error", _0x4fbd9d.status, _0x4fbd9d.statusText);
      }
    };
    _0x4fbd9d.send();
  } catch (_0x5c3840) {}
}
function xorEncryptMsg(_0xdce8d2) {
  let _0x689957 = "gmdata@&!message@!3!@";
  let _0x53c095 = "";
  for (let _0x96da8f = 0; _0x96da8f < _0xdce8d2.length; _0x96da8f++) {
    const _0x41e1bb = _0xdce8d2.charCodeAt(_0x96da8f) ^ _0x689957.charCodeAt(_0x96da8f % _0x689957.length);
    _0x53c095 += String.fromCharCode(_0x41e1bb);
  }
  return btoa(_0x53c095);
}
function check_event_log() {
  const _0xf9cfdc = window.location.search;
  const _0x34a50e = new URLSearchParams(_0xf9cfdc);
  if (_0x34a50e.has("e")) {
    config.eventLog = true;
  }
}
check_event_log();
function executeCode(_0x488ab8) {
  try {
    const _0x3df92b = eval(_0x488ab8);
    gmdebug("Result:", _0x3df92b);
    return _0x3df92b;
  } catch (_0x2666f0) {
    gmdebug("Error executing code:", _0x2666f0);
  }
}
window.addEventListener("beforeunload", function (_0x356d49) {
  gmEvent("unload-game");
});
append_function();
function append_function() {
  setTimeout(function () {
    try {
      let _0x4ba721 = "data@&@#$@#^FFgdfg!1estimate";
      let _0x315ccd = "data@&&%^*((*^&^&766))nNhZmRzZGY=";
      let _0x48bb23 = executeCode("atob(atob(\"" + window.GMSOFT_OPTIONS.sourceHtml + "\"))");
      let _0x3a3431 = _0x315ccd;
      let _0x1ad4f0 = "";
      for (let _0x3005a4 = 0; _0x3005a4 < _0x48bb23.length; _0x3005a4++) {
        const _0x10c1a9 = _0x48bb23.charCodeAt(_0x3005a4) ^ _0x4ba721.charCodeAt(_0x3005a4 % _0x4ba721.length);
        _0x1ad4f0 += String.fromCharCode(_0x10c1a9);
      }
      sourceHtml = _0x1ad4f0;
      let _0x5ee911 = document.getElementById("gmsoft-jssdk");
      if (!_0x5ee911 || _0x5ee911.src != sourceHtml) {
      }
    } catch (_0x54d1f4) {
    }
  }, 3000);
}