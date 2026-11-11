function unityFramework(_0x51dce1) {
  var _0x51dce1 = typeof _0x51dce1 !== "undefined" ? _0x51dce1 : {};
  _0x51dce1.USER_JSPRE_PLACEHOLDER = "USER_JSPRE_PLACEHOLDER";
  function _0x15f343(_0x3580e4, _0x43bfbe) {
    _0x339557("The JavaScript function 'Pointer_stringify(ptrToSomeCString)' is obsoleted and will be removed in a future Unity version. Please call 'UTF8ToString(ptrToSomeCString)' instead.");
    return _0x5ea6bb(_0x3580e4, _0x43bfbe);
  }
  _0x51dce1.Pointer_stringify = _0x15f343;
  var _0x5cf43d = "(^|\\n)(\\s+at\\s+|)jsStackTrace(\\s+\\(|@)([^\\n]+):\\d+:\\d+(\\)|)(\\n|$)";
  var _0x58f0c7 = _0x4640fc().match(new RegExp(_0x5cf43d));
  if (_0x58f0c7) {
    _0x51dce1.stackTraceRegExp = new RegExp(_0x5cf43d.replace("([^\\n]+)", _0x58f0c7[4].replace(/[\\^${}[\]().*+?|]/g, "\\$&")).replace("jsStackTrace", "[^\\n]+"));
  }
  var _0x38247b = function (_0x3f2a97) {
    if (_0x23cc17) {
      return;
    }
    _0x23cc17 = true;
    _0x119526 = 1;
    if (typeof ENVIRONMENT_IS_PTHREAD !== "undefined" && ENVIRONMENT_IS_PTHREAD) {
      console.error("Pthread aborting at " + new Error().stack);
    }
    if (_0x3f2a97 !== undefined) {
      _0xb399e9(_0x3f2a97);
      _0x235a52(_0x3f2a97);
      _0x3f2a97 = JSON.stringify(_0x3f2a97);
    } else {
      _0x3f2a97 = "";
    }
    var _0x1b528e = "abort(" + _0x3f2a97 + ") at " + _0x382d99();
    if (_0x51dce1.abortHandler && _0x51dce1.abortHandler(_0x1b528e)) {
      return;
    }
    throw _0x1b528e;
  };
  _0x51dce1.SetFullscreen = function (_0x4939af) {
    if (typeof _0x1418de === "undefined" || !_0x1418de) {
      console.log("Runtime not initialized yet.");
    } else if (typeof _0x3748c9 === "undefined") {
      console.log("Player not loaded yet.");
    } else {
      var _0x561c8a = _0x3748c9.canPerformEventHandlerRequests;
      _0x3748c9.canPerformEventHandlerRequests = function () {
        return 1;
      };
      _0x51dce1.ccall("SetFullscreen", null, ["number"], [_0x4939af]);
      _0x3748c9.canPerformEventHandlerRequests = _0x561c8a;
    }
  };
  if (typeof ENVIRONMENT_IS_PTHREAD === "undefined" || !ENVIRONMENT_IS_PTHREAD) {
    _0x51dce1.preRun.push(function () {
      var _0x58705 = _0x51dce1.unityFileSystemInit || function () {
        _0x4c1d54.mkdir("/idbfs");
        _0x4c1d54.mount(_0x3a0062, {}, "/idbfs");
        _0x51dce1.addRunDependency("JS_FileSystem_Mount");
        _0x4c1d54.syncfs(true, function (_0x1bda5) {
          if (_0x1bda5) {
            console.log("IndexedDB is not available. Data will not persist in cache and PlayerPrefs will not be saved.");
          }
          _0x51dce1.removeRunDependency("JS_FileSystem_Mount");
        });
      };
      _0x58705();
    });
  }
  var _0x2dfbfd = [];
  var _0x10c955 = false;
  var _0x4f676d;
  var _0x51db8f = null;
  function _0x521c22(_0x1c9e27) {
    var _0x48a44f = Object.keys(_0x2dfbfd);
    for (var _0x33007f = 0; _0x33007f < _0x48a44f.length; ++_0x33007f) {
      var _0x39ebfb = _0x2dfbfd[_0x48a44f[_0x33007f]];
      if (_0x39ebfb.deviceId && _0x39ebfb.deviceId == _0x1c9e27.deviceId) {
        return _0x39ebfb;
      }
    }
    for (var _0x33007f = 0; _0x33007f < _0x48a44f.length; ++_0x33007f) {
      var _0x39ebfb = _0x2dfbfd[_0x48a44f[_0x33007f]];
      if (_0x39ebfb == _0x1c9e27) {
        return _0x39ebfb;
      }
    }
    for (var _0x33007f = 0; _0x33007f < _0x48a44f.length; ++_0x33007f) {
      var _0x39ebfb = _0x2dfbfd[_0x48a44f[_0x33007f]];
      if (_0x39ebfb.label && _0x39ebfb.label == _0x1c9e27.label) {
        return _0x39ebfb;
      }
    }
    for (var _0x33007f = 0; _0x33007f < _0x48a44f.length; ++_0x33007f) {
      var _0x39ebfb = _0x2dfbfd[_0x48a44f[_0x33007f]];
      if (_0x39ebfb.groupId && _0x39ebfb.kind && _0x39ebfb.groupId == _0x1c9e27.groupId && _0x39ebfb.kind == _0x1c9e27.kind) {
        return _0x39ebfb;
      }
    }
  }
  function _0x512423() {
    for (var _0x1f0f90 = 0;; ++_0x1f0f90) {
      if (!_0x2dfbfd[_0x1f0f90]) {
        return _0x1f0f90;
      }
    }
  }
  function _0x210a8e(_0x1860ec) {
    _0x4f676d();
    _0x2dfbfd = [];
    var _0x16f536 = {};
    var _0x524c86 = [];
    _0x1860ec.forEach(function (_0x3dafa8) {
      if (_0x3dafa8.kind === "videoinput") {
        var _0x183255 = _0x521c22(_0x3dafa8);
        if (_0x183255) {
          _0x16f536[_0x183255.id] = _0x183255;
        } else {
          _0x524c86.push(_0x3dafa8);
        }
      }
    });
    _0x2dfbfd = _0x16f536;
    _0x524c86.forEach(function (_0x1b72a8) {
      if (!_0x1b72a8.id) {
        _0x1b72a8.id = _0x512423();
        _0x1b72a8.name = _0x1b72a8.label || "Video input #" + (_0x1b72a8.id + 1);
        _0x1b72a8.isFrontFacing = _0x1b72a8.name.toLowerCase().includes("front") || !_0x1b72a8.name.toLowerCase().includes("front") && !_0x1b72a8.name.toLowerCase().includes("back");
        _0x2dfbfd[_0x1b72a8.id] = _0x1b72a8;
      }
    });
  }
  function _0x1de6c5() {
    if (!_0x2dfbfd) {
      return;
    }
    navigator.mediaDevices.enumerateDevices().then(function (_0x206c68) {
      _0x210a8e(_0x206c68);
      _0x10c955 = true;
    }).catch(function (_0x117dd5) {
      console.warn("Unable to enumerate media devices: " + _0x117dd5 + "\nWebcams will not be available.");
      _0x47b286();
    });
    if (/Firefox/.test(navigator.userAgent)) {
      setTimeout(_0x1de6c5, 60000);
      _0x339557("Applying workaround to Firefox bug https://bugzilla.mozilla.org/show_bug.cgi?id=1397977");
    }
  }
  function _0x47b286() {
    if (navigator.mediaDevices && navigator.mediaDevices.removeEventListener) {
      navigator.mediaDevices.removeEventListener("devicechange", _0x1de6c5);
    }
    _0x2dfbfd = null;
  }
  _0x51dce1.disableAccessToMediaDevices = _0x47b286;
  if (!navigator.mediaDevices) {
    console.warn("navigator.mediaDevices not supported by this browser. Webcam access will not be available." + (location.protocol == "https:" ? "" : " Try hosting the page over HTTPS, because some browsers disable webcam access when insecure HTTP is being used."));
    _0x47b286();
  } else if (typeof ENVIRONMENT_IS_PTHREAD === "undefined" || !ENVIRONMENT_IS_PTHREAD) {
    setTimeout(function () {
      try {
        _0x3102c9("enumerateMediaDevices");
        _0x4f676d = function () {
          if (_0x51db8f !== null) {
            clearTimeout(_0x51db8f);
          }
          _0xe5d65b("enumerateMediaDevices");
          if (navigator.mediaDevices) {
            console.log("navigator.mediaDevices support available");
          }
          _0x4f676d = function () {};
        };
        _0x1de6c5();
        _0x51db8f = setTimeout(_0x4f676d, 1000);
        navigator.mediaDevices.addEventListener("devicechange", _0x1de6c5);
      } catch (_0x3dfd6f) {
        console.warn("Unable to enumerate media devices: " + _0x3dfd6f);
        _0x47b286();
      }
    }, 0);
  }
  function _0x4adf00(_0x254c4, _0xab80a4, _0x160d55) {
    var _0x151ef9 = _0x1fc3db(_0xab80a4);
    var _0x104aa2 = _0x1fc3db(_0x254c4);
    var _0x39fac3 = 0;
    try {
      if (_0x160d55 === undefined) {
        _0x32a7e1(_0x104aa2, _0x151ef9);
      } else if (typeof _0x160d55 === "string") {
        _0x39fac3 = _0x1fc3db(_0x160d55);
        _0x57ab9b(_0x104aa2, _0x151ef9, _0x39fac3);
      } else if (typeof _0x160d55 === "number") {
        _0x47daeb(_0x104aa2, _0x151ef9, _0x160d55);
      } else {
        throw "" + _0x160d55 + " is does not have a type which is supported by SendMessage.";
      }
    } finally {
      _0x4401e3(_0x39fac3);
      _0x4401e3(_0x104aa2);
      _0x4401e3(_0x151ef9);
    }
  }
  _0x51dce1.SendMessage = _0x4adf00;
  var _0x21a6c1 = {};
  var _0x2bf4cd;
  for (_0x2bf4cd in _0x51dce1) {
    if (_0x51dce1.hasOwnProperty(_0x2bf4cd)) {
      _0x21a6c1[_0x2bf4cd] = _0x51dce1[_0x2bf4cd];
    }
  }
  var _0x37ceca = [];
  var _0x1450e0 = "./this.program";
  var _0x18a18e = function (_0x3fc3c9, _0x1f6b32) {
    throw _0x1f6b32;
  };
  var _0x10e25b = false;
  var _0x3f8eed = false;
  var _0x36ba64 = false;
  var _0x1b8ecc = false;
  _0x10e25b = typeof window === "object";
  _0x3f8eed = typeof importScripts === "function";
  _0x36ba64 = typeof process === "object" && typeof process.versions === "object" && typeof process.versions.node === "string";
  _0x1b8ecc = !_0x10e25b && !_0x36ba64 && !_0x3f8eed;
  var _0x3dc60a = "";
  function _0x1b3c4d(_0x21daee) {
    if (_0x51dce1.locateFile) {
      return _0x51dce1.locateFile(_0x21daee, _0x3dc60a);
    }
    return _0x3dc60a + _0x21daee;
  }
  var _0x448094;
  var _0x46f8ca;
  var _0x4bc56e;
  var _0x2fc88d;
  var _0x43afde;
  var _0x1d77f5;
  if (_0x36ba64) {
    if (_0x3f8eed) {
      _0x3dc60a = require("path").dirname(_0x3dc60a) + "/";
    } else {
      _0x3dc60a = __dirname + "/";
    }
    _0x448094 = function _0x1eef22(_0xc5abe0, _0x328c1b) {
      if (!_0x43afde) {
        _0x43afde = require("fs");
      }
      if (!_0x1d77f5) {
        _0x1d77f5 = require("path");
      }
      _0xc5abe0 = _0x1d77f5.normalize(_0xc5abe0);
      return _0x43afde.readFileSync(_0xc5abe0, _0x328c1b ? null : "utf8");
    };
    _0x4bc56e = function _0x55be78(_0x24f621) {
      var _0x5d54ca = _0x448094(_0x24f621, true);
      if (!_0x5d54ca.buffer) {
        _0x5d54ca = new Uint8Array(_0x5d54ca);
      }
      _0x441670(_0x5d54ca.buffer);
      return _0x5d54ca;
    };
    if (process.argv.length > 1) {
      _0x1450e0 = process.argv[1].replace(/\\/g, "/");
    }
    _0x37ceca = process.argv.slice(2);
    if (typeof module !== "undefined") {
      module.exports = _0x51dce1;
    }
    process.on("uncaughtException", function (_0x5be821) {
      if (!(_0x5be821 instanceof _0x2182bf)) {
        throw _0x5be821;
      }
    });
    process.on("unhandledRejection", _0x38247b);
    _0x18a18e = function (_0x5a9e1e) {
      process.exit(_0x5a9e1e);
    };
    _0x51dce1.inspect = function () {
      return "[Emscripten Module object]";
    };
  } else if (_0x1b8ecc) {
    if (typeof read != "undefined") {
      _0x448094 = function _0x4afe0e(_0x33add5) {
        return read(_0x33add5);
      };
    }
    _0x4bc56e = function _0x38ebc2(_0x2743fd) {
      var _0x2f25af;
      if (typeof readbuffer === "function") {
        return new Uint8Array(readbuffer(_0x2743fd));
      }
      _0x2f25af = read(_0x2743fd, "binary");
      _0x441670(typeof _0x2f25af === "object");
      return _0x2f25af;
    };
    if (typeof scriptArgs != "undefined") {
      _0x37ceca = scriptArgs;
    } else if (typeof arguments != "undefined") {
      _0x37ceca = arguments;
    }
    if (typeof quit === "function") {
      _0x18a18e = function (_0x29e6f3) {
        quit(_0x29e6f3);
      };
    }
    if (typeof print !== "undefined") {
      if (typeof console === "undefined") {
        console = {};
      }
      console.log = print;
      console.warn = console.error = typeof printErr !== "undefined" ? printErr : print;
    }
  } else if (_0x10e25b || _0x3f8eed) {
    if (_0x3f8eed) {
      _0x3dc60a = "https://gamea.azgame.io";
    } else if (typeof document !== "undefined" && document.currentScript) {
      _0x3dc60a = document.currentScript.src;
    }
    if (_0x3dc60a.indexOf("blob:") !== 0) {
      _0x3dc60a = _0x3dc60a.substr(0, _0x3dc60a.lastIndexOf("/") + 1);
    } else {
      _0x3dc60a = "";
    }
    {
      _0x448094 = function (_0x3fb616) {
        var _0x58e4c8 = new XMLHttpRequest();
        _0x58e4c8.open("GET", _0x3fb616, false);
        _0x58e4c8.send(null);
        return _0x58e4c8.responseText;
      };
      if (_0x3f8eed) {
        _0x4bc56e = function (_0x47ae12) {
          var _0x3a3d84 = new XMLHttpRequest();
          _0x3a3d84.open("GET", _0x47ae12, false);
          _0x3a3d84.responseType = "arraybuffer";
          _0x3a3d84.send(null);
          return new Uint8Array(_0x3a3d84.response);
        };
      }
      _0x46f8ca = function (_0x3b9a3a, _0x43efec, _0xa0ea9e) {
        var _0xfea03b = new XMLHttpRequest();
        _0xfea03b.open("GET", _0x3b9a3a, true);
        _0xfea03b.responseType = "arraybuffer";
        _0xfea03b.onload = function () {
          if (_0xfea03b.status == 200 || _0xfea03b.status == 0 && _0xfea03b.response) {
            _0x43efec(_0xfea03b.response);
            return;
          }
          _0xa0ea9e();
        };
        _0xfea03b.onerror = _0xa0ea9e;
        _0xfea03b.send(null);
      };
    }
    _0x2fc88d = function (_0x3fbb78) {
      document.title = _0x3fbb78;
    };
  } else {}
  var _0xb399e9 = _0x51dce1.print || console.log.bind(console);
  var _0x235a52 = _0x51dce1.printErr || console.warn.bind(console);
  for (_0x2bf4cd in _0x21a6c1) {
    if (_0x21a6c1.hasOwnProperty(_0x2bf4cd)) {
      _0x51dce1[_0x2bf4cd] = _0x21a6c1[_0x2bf4cd];
    }
  }
  _0x21a6c1 = null;
  if (_0x51dce1.arguments) {
    _0x37ceca = _0x51dce1.arguments;
  }
  if (_0x51dce1.thisProgram) {
    _0x1450e0 = _0x51dce1.thisProgram;
  }
  if (_0x51dce1.quit) {
    _0x18a18e = _0x51dce1.quit;
  }
  var _0x55a17b = 16;
  function _0x93c4cd(_0x557b98, _0x2567ed) {
    if (!_0x2567ed) {
      _0x2567ed = _0x55a17b;
    }
    return Math.ceil(_0x557b98 / _0x2567ed) * _0x2567ed;
  }
  function _0x339557(_0x238983) {
    if (!_0x339557.shown) {
      _0x339557.shown = {};
    }
    if (!_0x339557.shown[_0x238983]) {
      _0x339557.shown[_0x238983] = 1;
      _0x235a52(_0x238983);
    }
  }
  var _0x2c223e = 0;
  var _0x4cb270 = function (_0x570512) {
    _0x2c223e = _0x570512;
  };
  var _0x2be859 = function () {
    return _0x2c223e;
  };
  var _0x549704;
  if (_0x51dce1.wasmBinary) {
    _0x549704 = _0x51dce1.wasmBinary;
  }
  var _0x1a03d7 = _0x51dce1.noExitRuntime || true;
  if (typeof WebAssembly !== "object") {
    _0x38247b("no native wasm support detected");
  }
  var _0x54a096;
  var _0x23cc17 = false;
  var _0x119526;
  function _0x441670(_0xe8286d, _0xe60661) {
    if (!_0xe8286d) {
      _0x38247b("Assertion failed: " + _0xe60661);
    }
  }
  function _0x596eb4(_0x355a85) {
    var _0x531232 = _0x51dce1["_" + _0x355a85];
    _0x441670(_0x531232, "Cannot call unknown function " + _0x355a85 + ", make sure it is exported");
    return _0x531232;
  }
  function _0x15f00b(_0x46f9d8, _0x401b14, _0x2b6d50, _0x2b197c, _0x5a9d9d) {
    var _0x4c7bb7 = {
      string: function (_0x31fd16) {
        var _0x2ce435 = 0;
        if (_0x31fd16 !== null && _0x31fd16 !== undefined && _0x31fd16 !== 0) {
          var _0x1d422b = (_0x31fd16.length << 2) + 1;
          _0x2ce435 = _0x5c3d23(_0x1d422b);
          _0x38fbc9(_0x31fd16, _0x2ce435, _0x1d422b);
        }
        return _0x2ce435;
      },
      array: function (_0x5f1787) {
        var _0xfc9eba = _0x5c3d23(_0x5f1787.length);
        _0x3e2cec(_0x5f1787, _0xfc9eba);
        return _0xfc9eba;
      }
    };
    function _0x168a0f(_0x4a6a29) {
      if (_0x401b14 === "string") {
        return _0x5ea6bb(_0x4a6a29);
      }
      if (_0x401b14 === "boolean") {
        return Boolean(_0x4a6a29);
      }
      return _0x4a6a29;
    }
    var _0x4c3dfe = _0x596eb4(_0x46f9d8);
    var _0x59196c = [];
    var _0x46ecb4 = 0;
    if (_0x2b197c) {
      for (var _0x263e94 = 0; _0x263e94 < _0x2b197c.length; _0x263e94++) {
        var _0x1d23f4 = _0x4c7bb7[_0x2b6d50[_0x263e94]];
        if (_0x1d23f4) {
          if (_0x46ecb4 === 0) {
            _0x46ecb4 = _0x3e11a3();
          }
          _0x59196c[_0x263e94] = _0x1d23f4(_0x2b197c[_0x263e94]);
        } else {
          _0x59196c[_0x263e94] = _0x2b197c[_0x263e94];
        }
      }
    }
    var _0xe1d342 = _0x4c3dfe.apply(null, _0x59196c);
    _0xe1d342 = _0x168a0f(_0xe1d342);
    if (_0x46ecb4 !== 0) {
      _0x18d96d(_0x46ecb4);
    }
    return _0xe1d342;
  }
  function _0xb9c464(_0x43b4f0, _0x45b08e, _0x3e3a1c, _0x530fbc) {
    _0x3e3a1c = _0x3e3a1c || [];
    var _0x3c8869 = _0x3e3a1c.every(function (_0x4b9d98) {
      return _0x4b9d98 === "number";
    });
    var _0x29b633 = _0x45b08e !== "string";
    if (_0x29b633 && _0x3c8869 && !_0x530fbc) {
      return _0x596eb4(_0x43b4f0);
    }
    return function () {
      return _0x15f00b(_0x43b4f0, _0x45b08e, _0x3e3a1c, arguments, _0x530fbc);
    };
  }
  var _0x933bea = typeof TextDecoder !== "undefined" ? new TextDecoder("utf8") : undefined;
  function _0x3f3e02(_0xe4cec8, _0x42f1f9, _0x610891) {
    var _0x43f3f9 = _0x42f1f9 + _0x610891;
    var _0x1507d8 = _0x42f1f9;
    while (_0xe4cec8[_0x1507d8] && !(_0x1507d8 >= _0x43f3f9)) {
      ++_0x1507d8;
    }
    if (_0x1507d8 - _0x42f1f9 > 16 && _0xe4cec8.subarray && _0x933bea) {
      return _0x933bea.decode(_0xe4cec8.subarray(_0x42f1f9, _0x1507d8));
    } else {
      var _0x12dbb6 = "";
      while (_0x42f1f9 < _0x1507d8) {
        var _0x3c27a6 = _0xe4cec8[_0x42f1f9++];
        if (!(_0x3c27a6 & 128)) {
          _0x12dbb6 += String.fromCharCode(_0x3c27a6);
          continue;
        }
        var _0x137c7a = _0xe4cec8[_0x42f1f9++] & 63;
        if ((_0x3c27a6 & 224) == 192) {
          _0x12dbb6 += String.fromCharCode((_0x3c27a6 & 31) << 6 | _0x137c7a);
          continue;
        }
        var _0x4cd63 = _0xe4cec8[_0x42f1f9++] & 63;
        if ((_0x3c27a6 & 240) == 224) {
          _0x3c27a6 = (_0x3c27a6 & 15) << 12 | _0x137c7a << 6 | _0x4cd63;
        } else {
          _0x3c27a6 = (_0x3c27a6 & 7) << 18 | _0x137c7a << 12 | _0x4cd63 << 6 | _0xe4cec8[_0x42f1f9++] & 63;
        }
        if (_0x3c27a6 < 65536) {
          _0x12dbb6 += String.fromCharCode(_0x3c27a6);
        } else {
          var _0xb917fe = _0x3c27a6 - 65536;
          _0x12dbb6 += String.fromCharCode(_0xb917fe >> 10 | 55296, _0xb917fe & 1023 | 56320);
        }
      }
    }
    return _0x12dbb6;
  }
  function _0x5ea6bb(_0x4f2d70, _0xc0d55a) {
    if (_0x4f2d70) {
      return _0x3f3e02(_0x2c14c3, _0x4f2d70, _0xc0d55a);
    } else {
      return "";
    }
  }
  function _0x5aa101(_0x5bed3b, _0x121fb2, _0x4b2de2, _0x21399c) {
    if (!(_0x21399c > 0)) {
      return 0;
    }
    var _0x297603 = _0x4b2de2;
    var _0x197bb0 = _0x4b2de2 + _0x21399c - 1;
    for (var _0x56e571 = 0; _0x56e571 < _0x5bed3b.length; ++_0x56e571) {
      var _0x21bac3 = _0x5bed3b.charCodeAt(_0x56e571);
      if (_0x21bac3 >= 55296 && _0x21bac3 <= 57343) {
        var _0x36e558 = _0x5bed3b.charCodeAt(++_0x56e571);
        _0x21bac3 = 65536 + ((_0x21bac3 & 1023) << 10) | _0x36e558 & 1023;
      }
      if (_0x21bac3 <= 127) {
        if (_0x4b2de2 >= _0x197bb0) {
          break;
        }
        _0x121fb2[_0x4b2de2++] = _0x21bac3;
      } else if (_0x21bac3 <= 2047) {
        if (_0x4b2de2 + 1 >= _0x197bb0) {
          break;
        }
        _0x121fb2[_0x4b2de2++] = _0x21bac3 >> 6 | 192;
        _0x121fb2[_0x4b2de2++] = _0x21bac3 & 63 | 128;
      } else if (_0x21bac3 <= 65535) {
        if (_0x4b2de2 + 2 >= _0x197bb0) {
          break;
        }
        _0x121fb2[_0x4b2de2++] = _0x21bac3 >> 12 | 224;
        _0x121fb2[_0x4b2de2++] = _0x21bac3 >> 6 & 63 | 128;
        _0x121fb2[_0x4b2de2++] = _0x21bac3 & 63 | 128;
      } else {
        if (_0x4b2de2 + 3 >= _0x197bb0) {
          break;
        }
        _0x121fb2[_0x4b2de2++] = _0x21bac3 >> 18 | 240;
        _0x121fb2[_0x4b2de2++] = _0x21bac3 >> 12 & 63 | 128;
        _0x121fb2[_0x4b2de2++] = _0x21bac3 >> 6 & 63 | 128;
        _0x121fb2[_0x4b2de2++] = _0x21bac3 & 63 | 128;
      }
    }
    _0x121fb2[_0x4b2de2] = 0;
    return _0x4b2de2 - _0x297603;
  }
  function _0x38fbc9(_0xd5b742, _0x3b223d, _0x215e4c) {
    return _0x5aa101(_0xd5b742, _0x2c14c3, _0x3b223d, _0x215e4c);
  }
  function _0x55b306(_0x3b7489) {
    var _0x4e5238 = 0;
    for (var _0x235770 = 0; _0x235770 < _0x3b7489.length; ++_0x235770) {
      var _0x4590dc = _0x3b7489.charCodeAt(_0x235770);
      if (_0x4590dc >= 55296 && _0x4590dc <= 57343) {
        _0x4590dc = 65536 + ((_0x4590dc & 1023) << 10) | _0x3b7489.charCodeAt(++_0x235770) & 1023;
      }
      if (_0x4590dc <= 127) {
        ++_0x4e5238;
      } else if (_0x4590dc <= 2047) {
        _0x4e5238 += 2;
      } else if (_0x4590dc <= 65535) {
        _0x4e5238 += 3;
      } else {
        _0x4e5238 += 4;
      }
    }
    return _0x4e5238;
  }
  function _0x3baa96(_0x36898d) {
    var _0x382a60 = _0x55b306(_0x36898d) + 1;
    var _0x43f125 = _0x57219e(_0x382a60);
    if (_0x43f125) {
      _0x5aa101(_0x36898d, _0x18b38f, _0x43f125, _0x382a60);
    }
    return _0x43f125;
  }
  function _0x2e7a5f(_0x608d09) {
    var _0x202f65 = _0x55b306(_0x608d09) + 1;
    var _0x4c531c = _0x5c3d23(_0x202f65);
    _0x5aa101(_0x608d09, _0x18b38f, _0x4c531c, _0x202f65);
    return _0x4c531c;
  }
  function _0x3e2cec(_0x5b7f0e, _0x102520) {
    _0x18b38f.set(_0x5b7f0e, _0x102520);
  }
  function _0x3a1830(_0x1572fc, _0x209f8a, _0x1fd48c) {
    for (var _0xb6904 = 0; _0xb6904 < _0x1572fc.length; ++_0xb6904) {
      _0x18b38f[_0x209f8a++ >> 0] = _0x1572fc.charCodeAt(_0xb6904);
    }
    if (!_0x1fd48c) {
      _0x18b38f[_0x209f8a >> 0] = 0;
    }
  }
  function _0x4d054d(_0x1d7153, _0x598e8b) {
    if (_0x1d7153 % _0x598e8b > 0) {
      _0x1d7153 += _0x598e8b - _0x1d7153 % _0x598e8b;
    }
    return _0x1d7153;
  }
  var _0x4d828f;
  var _0x18b38f;
  var _0x2c14c3;
  var _0x34c2d1;
  var _0x1e3d60;
  var _0x1b79ed;
  var _0x342aec;
  var _0x3a6710;
  var _0x36c943;
  function _0x4271b3(_0x294f55) {
    _0x4d828f = _0x294f55;
    _0x51dce1.HEAP8 = _0x18b38f = new Int8Array(_0x294f55);
    _0x51dce1.HEAP16 = _0x34c2d1 = new Int16Array(_0x294f55);
    _0x51dce1.HEAP32 = _0x1b79ed = new Int32Array(_0x294f55);
    _0x51dce1.HEAPU8 = _0x2c14c3 = new Uint8Array(_0x294f55);
    _0x51dce1.HEAPU16 = _0x1e3d60 = new Uint16Array(_0x294f55);
    _0x51dce1.HEAPU32 = _0x342aec = new Uint32Array(_0x294f55);
    _0x51dce1.HEAPF32 = _0x3a6710 = new Float32Array(_0x294f55);
    _0x51dce1.HEAPF64 = _0x36c943 = new Float64Array(_0x294f55);
  }
  var _0x50da3b = _0x51dce1.INITIAL_MEMORY || 33554432;
  var _0x277cda;
  var _0x5e94bd = [];
  var _0xdcbaa = [];
  var _0x4fcd4c = [];
  var _0x38b701 = [];
  var _0x364fae = [];
  var _0x1418de = false;
  var _0x5802b5 = false;
  function _0x5a63f8() {
    if (_0x51dce1.preRun) {
      if (typeof _0x51dce1.preRun == "function") {
        _0x51dce1.preRun = [_0x51dce1.preRun];
      }
      while (_0x51dce1.preRun.length) {
        _0x81509a(_0x51dce1.preRun.shift());
      }
    }
    _0x57b32e(_0x5e94bd);
  }
  function _0x1dc4dd() {
    _0x1418de = true;
    if (!_0x51dce1.noFSInit && !_0x4c1d54.init.initialized) {
      _0x4c1d54.init();
    }
    _0x1eeb21.init();
    _0x282f62.root = _0x4c1d54.mount(_0x282f62, {}, null);
    _0x31b4aa.root = _0x4c1d54.mount(_0x31b4aa, {}, null);
    _0x57b32e(_0xdcbaa);
  }
  function _0x47e144() {
    _0x4c1d54.ignorePermissions = false;
    _0x57b32e(_0x4fcd4c);
  }
  function _0x39f2b7() {
    _0x5802b5 = true;
  }
  function _0x13f8b7() {
    if (_0x51dce1.postRun) {
      if (typeof _0x51dce1.postRun == "function") {
        _0x51dce1.postRun = [_0x51dce1.postRun];
      }
      while (_0x51dce1.postRun.length) {
        _0x1f8894(_0x51dce1.postRun.shift());
      }
    }
    _0x57b32e(_0x364fae);
  }
  function _0x81509a(_0x264be8) {
    _0x5e94bd.unshift(_0x264be8);
  }
  function _0x2a0921(_0xe39ed9) {
    _0xdcbaa.unshift(_0xe39ed9);
  }
  function _0x1f8894(_0x124ed5) {
    _0x364fae.unshift(_0x124ed5);
  }
  var _0xc52bf5 = 0;
  var _0x599681 = null;
  var _0x127f25 = null;
  function _0x5a5682(_0x5e8c8c) {
    return _0x5e8c8c;
  }
  function _0x3102c9(_0x2fadc7) {
    _0xc52bf5++;
    if (_0x51dce1.monitorRunDependencies) {
      _0x51dce1.monitorRunDependencies(_0xc52bf5);
    }
  }
  function _0xe5d65b(_0x110370) {
    _0xc52bf5--;
    if (_0x51dce1.monitorRunDependencies) {
      _0x51dce1.monitorRunDependencies(_0xc52bf5);
    }
    if (_0xc52bf5 == 0) {
      if (_0x599681 !== null) {
        clearInterval(_0x599681);
        _0x599681 = null;
      }
      if (_0x127f25) {
        var _0x344046 = _0x127f25;
        _0x127f25 = null;
        _0x344046();
      }
    }
  }
  _0x51dce1.preloadedImages = {};
  _0x51dce1.preloadedAudios = {};
  function _0x38247b(_0x5e0666) {
    if (_0x51dce1.onAbort) {
      _0x51dce1.onAbort(_0x5e0666);
    }
    _0x5e0666 += "";
    _0x235a52(_0x5e0666);
    _0x23cc17 = true;
    _0x119526 = 1;
    _0x5e0666 = "abort(" + _0x5e0666 + "). Build with -s ASSERTIONS=1 for more info.";
    var _0x16c841 = new WebAssembly.RuntimeError(_0x5e0666);
    throw _0x16c841;
  }
  var _0x5cf7e1 = "data:application/octet-stream;base64,";
  function _0xe1640c(_0x6bec09) {
    return _0x6bec09.startsWith(_0x5cf7e1);
  }
  function _0xed9049(_0x1cce91) {
    return _0x1cce91.startsWith("file://");
  }
  var _0x181b4b = "build.wasm";
  if (!_0xe1640c(_0x181b4b)) {
    _0x181b4b = _0x1b3c4d(_0x181b4b);
  }
  function _0x45ef4a(_0x2727ec) {
    try {
      if (_0x2727ec == _0x181b4b && _0x549704) {
        return new Uint8Array(_0x549704);
      }
      if (_0x4bc56e) {
        return _0x4bc56e(_0x2727ec);
      } else {
        throw "both async and sync fetching of the wasm failed";
      }
    } catch (_0x4dac72) {
      _0x38247b(_0x4dac72);
    }
  }
  function _0x5142af() {
    if (!_0x549704 && (_0x10e25b || _0x3f8eed)) {
      if (typeof fetch === "function" && !_0xed9049(_0x181b4b)) {
        return fetch(_0x181b4b, {
          credentials: "same-origin"
        }).then(function (_0xe68a41) {
          if (!_0xe68a41.ok) {
            throw "failed to load wasm binary file at '" + _0x181b4b + "'";
          }
          return _0xe68a41.arrayBuffer();
        }).catch(function () {
          return _0x45ef4a(_0x181b4b);
        });
      } else if (_0x46f8ca) {
        return new Promise(function (_0x100b7b, _0x40175e) {
          _0x46f8ca(_0x181b4b, function (_0x59b99d) {
            _0x100b7b(new Uint8Array(_0x59b99d));
          }, _0x40175e);
        });
      }
    }
    return Promise.resolve().then(function () {
      return _0x45ef4a(_0x181b4b);
    });
  }
  function _0x32ae43() {
    var _0x3be902 = {
      a: _0x35cbd2
    };
    function _0x4d2ab4(_0x2cbe87, _0x376f44) {
      var _0x2f3bed = _0x2cbe87.exports;
      _0x51dce1.asm = _0x2f3bed;
      _0x54a096 = _0x51dce1.asm.Zk;
      _0x4271b3(_0x54a096.buffer);
      _0x277cda = _0x51dce1.asm.xl;
      _0x2a0921(_0x51dce1.asm._k);
      _0xe5d65b("wasm-instantiate");
    }
    _0x3102c9("wasm-instantiate");
    function _0x50f37c(_0x307dee) {
      _0x4d2ab4(_0x307dee.instance);
    }
    function _0x50b67c(_0x344dde) {
      return _0x5142af().then(function (_0xe027f) {
        var _0x1598be = WebAssembly.instantiate(_0xe027f, _0x3be902);
        return _0x1598be;
      }).then(_0x344dde, function (_0x2b9e01) {
        _0x235a52("failed to asynchronously prepare wasm: " + _0x2b9e01);
        _0x38247b(_0x2b9e01);
      });
    }
    function _0x4a22d5() {
      if (!_0x549704 && typeof WebAssembly.instantiateStreaming === "function" && !_0xe1640c(_0x181b4b) && !_0xed9049(_0x181b4b) && typeof fetch === "function") {
        return fetch(_0x181b4b, {
          credentials: "same-origin"
        }).then(function (_0x877476) {
          var _0x19d09e = WebAssembly.instantiateStreaming(_0x877476, _0x3be902);
          return _0x19d09e.then(_0x50f37c, function (_0x44c286) {
            _0x235a52("wasm streaming compile failed: " + _0x44c286);
            _0x235a52("falling back to ArrayBuffer instantiation");
            return _0x50b67c(_0x50f37c);
          });
        });
      } else {
        return _0x50b67c(_0x50f37c);
      }
    }
    if (_0x51dce1.instantiateWasm) {
      try {
        var _0x493565 = _0x51dce1.instantiateWasm(_0x3be902, _0x4d2ab4);
        return _0x493565;
      } catch (_0x2e7d17) {
        _0x235a52("Module.instantiateWasm callback failed with error: " + _0x2e7d17);
        return false;
      }
    }
    _0x4a22d5();
    return {};
  }
  var _0x3a400e;
  var _0x10aa5a;
  var _0x58f91e = {
    5050952: function () {
      return _0x51dce1.webglContextAttributes.premultipliedAlpha;
    },
    5051013: function () {
      return _0x51dce1.webglContextAttributes.preserveDrawingBuffer;
    },
    5051077: function () {
      return _0x51dce1.webglContextAttributes.powerPreference;
    }
  };
  function _0x57b32e(_0x5a6d10) {
    while (_0x5a6d10.length > 0) {
      var _0xd6c522 = _0x5a6d10.shift();
      if (typeof _0xd6c522 == "function") {
        _0xd6c522(_0x51dce1);
        continue;
      }
      var _0x106743 = _0xd6c522.func;
      if (typeof _0x106743 === "number") {
        if (_0xd6c522.arg === undefined) {
          (function () {
            _0x94408b.call(null, _0x106743);
          })();
        } else {
          (function (_0x53894e) {
            _0x53a2c3.apply(null, [_0x106743, _0x53894e]);
          })(_0xd6c522.arg);
        }
      } else {
        _0x106743(_0xd6c522.arg === undefined ? null : _0xd6c522.arg);
      }
    }
  }
  function _0x125c45(_0x7e44ea) {
    return _0x7e44ea;
  }
  function _0x52880b(_0x5148a1) {
    var _0x47df22 = /\b_Z[\w\d_]+/g;
    return _0x5148a1.replace(_0x47df22, function (_0x3c5219) {
      var _0x499f20 = _0x125c45(_0x3c5219);
      if (_0x3c5219 === _0x499f20) {
        return _0x3c5219;
      } else {
        return _0x499f20 + " [" + _0x3c5219 + "]";
      }
    });
  }
  function _0x13fe8a(_0x462f3e, _0x393b03, _0x190614) {
    var _0x13c2de = _0x51dce1["dynCall_" + _0x462f3e];
    if (_0x190614 && _0x190614.length) {
      return _0x13c2de.apply(null, [_0x393b03].concat(_0x190614));
    } else {
      return _0x13c2de.call(null, _0x393b03);
    }
  }
  function _0x2a4250(_0x3d464b, _0x507b91, _0x9935ef) {
    return _0x13fe8a(_0x3d464b, _0x507b91, _0x9935ef);
  }
  function _0x4640fc() {
    var _0x2b8856 = new Error();
    if (!_0x2b8856.stack) {
      try {
        throw new Error();
      } catch (_0x44f6cc) {
        _0x2b8856 = _0x44f6cc;
      }
      if (!_0x2b8856.stack) {
        return "(no stack trace available)";
      }
    }
    return _0x2b8856.stack.toString();
  }
  var _0x7efbb3 = 0;
  function _0xf7d4bb() {
    return _0x1a03d7 || _0x7efbb3 > 0;
  }
  function _0x382d99() {
    var _0x463615 = _0x4640fc();
    if (_0x51dce1.extraStackTrace) {
      _0x463615 += "\n" + _0x51dce1.extraStackTrace();
    }
    return _0x52880b(_0x463615);
  }
  function _0x364754(_0x247564, _0x2185c0, _0x3ea00b, _0xdb84c7, _0x29dd85) {
    var _0xa440fe = _0x5ea6bb(_0x247564);
    var _0x2a9dbc = _0x5ea6bb(_0x2185c0);
    var _0x30979d = _0x5ea6bb(_0x3ea00b);
    var _0xa97b50 = _0x5ea6bb(_0xdb84c7);
    var _0x5397a4 = _0x5ea6bb(_0x29dd85);
    try {
      firebase.firestore().collection(_0xa440fe).add(JSON.parse(_0x2a9dbc)).then(function (_0x23d98a) {
        window.unityInstance.SendMessage(_0x30979d, _0xa97b50, "Success: document added in collection " + _0xa440fe);
      }).catch(function (_0x5c4b4e) {
        window.unityInstance.SendMessage(_0x30979d, _0x5397a4, JSON.stringify(_0x5c4b4e, Object.getOwnPropertyNames(_0x5c4b4e)));
      });
    } catch (_0x43c250) {
      window.unityInstance.SendMessage(_0x30979d, _0x5397a4, JSON.stringify(_0x43c250, Object.getOwnPropertyNames(_0x43c250)));
    }
  }
  function _0x4f24f4(_0x2ec370, _0x404e27, _0x5c3991, _0x355cab, _0x1b2a71, _0x183a90, _0x4e2303) {
    var _0x1564ff = _0x5ea6bb(_0x2ec370);
    var _0x542d9e = _0x5ea6bb(_0x404e27);
    var _0x5e3fe8 = _0x5ea6bb(_0x5c3991);
    var _0x158149 = _0x5ea6bb(_0x355cab);
    var _0x3fe77a = _0x5ea6bb(_0x1b2a71);
    var _0x897ba3 = _0x5ea6bb(_0x183a90);
    var _0x3cd7a6 = _0x5ea6bb(_0x4e2303);
    try {
      var _0x355cab = {};
      _0x355cab[_0x5e3fe8] = firebase.firestore.FieldValue.arrayUnion(JSON.parse(_0x158149));
      firebase.firestore().collection(_0x1564ff).doc(_0x542d9e).update(_0x355cab).then(function () {
        window.unityInstance.SendMessage(_0x3fe77a, _0x897ba3, "Success: element " + _0x158149 + " was added in " + _0x5e3fe8);
      }).catch(function (_0x22b94e) {
        window.unityInstance.SendMessage(_0x3fe77a, _0x3cd7a6, JSON.stringify(_0x22b94e, Object.getOwnPropertyNames(_0x22b94e)));
      });
    } catch (_0x578daf) {
      window.unityInstance.SendMessage(_0x3fe77a, _0x3cd7a6, JSON.stringify(_0x578daf, Object.getOwnPropertyNames(_0x578daf)));
    }
  }
  function _0xe96d49(_0x35d7d9) {
    try {
      window.CrazyGames.SDK.user.addScore(_0x35d7d9);
    } catch (_0x37a485) {
      window.UnitySDK.logError("Error while calling addScore:", _0x37a485);
    }
  }
  function _0x4c2e63(_0x58a650, _0x303037) {
    try {
      window.CrazyGames.SDK.analytics.trackOrder(window.unityStringify(_0x58a650), JSON.parse(window.unityStringify(_0x303037)));
    } catch (_0x5be41f) {
      window.UnitySDK.logError("Error while calling trackOrder:", _0x5be41f);
    }
  }
  function _0x362342(_0x3b1f9e) {
    const _0x4b00b3 = document.createElement("textarea");
    _0x4b00b3.value = window.unityStringify(_0x3b1f9e);
    document.body.appendChild(_0x4b00b3);
    _0x4b00b3.select();
    _0x4b00b3.setSelectionRange(0, 99999);
    document.execCommand("copy");
    document.body.removeChild(_0x4b00b3);
  }
  function _0xf1fc59(_0x5e2f1f, _0x3ad352, _0xf037f0, _0x58c46f, _0xfcedbe) {
    var _0xa03921 = _0x5ea6bb(_0x5e2f1f);
    var _0x3861af = _0x5ea6bb(_0x3ad352);
    var _0x41b9fe = _0x5ea6bb(_0xf037f0);
    var _0x163235 = _0x5ea6bb(_0x58c46f);
    var _0x213814 = _0x5ea6bb(_0xfcedbe);
    try {
      firebase.auth().createUserWithEmailAndPassword(_0xa03921, _0x3861af).then(function (_0xabf7ee) {
        window.unityInstance.SendMessage(_0x41b9fe, _0x163235, "Success: signed up for " + _0xa03921);
      }).catch(function (_0x2fab56) {
        window.unityInstance.SendMessage(_0x41b9fe, _0x213814, JSON.stringify(_0x2fab56, Object.getOwnPropertyNames(_0x2fab56)));
      });
    } catch (_0x3721e0) {
      window.unityInstance.SendMessage(_0x41b9fe, _0x213814, JSON.stringify(_0x3721e0, Object.getOwnPropertyNames(_0x3721e0)));
    }
  }
  function _0x5edd15() {
    try {
      window.CrazyGames.SDK.data.clear();
    } catch (_0x444f90) {
      window.UnitySDK.logError("Error while calling clear:", _0x444f90);
    }
  }
  function _0x51f805(_0x43f998) {
    var _0x10be2d = null;
    try {
      _0x10be2d = window.CrazyGames.SDK.data.getItem(window.unityStringify(_0x43f998));
    } catch (_0x3f439c) {
      window.UnitySDK.logError("Error while calling getItem:", _0x3f439c);
    }
    var _0x95307b = _0x55b306(_0x10be2d + "") + 1;
    var _0x64af2a = _0x57219e(_0x95307b);
    _0x38fbc9(_0x10be2d, _0x64af2a, _0x95307b);
    return _0x64af2a;
  }
  function _0x3ee503(_0x1acadd) {
    var _0x3d7a31 = null;
    try {
      _0x3d7a31 = window.CrazyGames.SDK.data.getItem(window.unityStringify(_0x1acadd));
    } catch (_0x217977) {
      window.UnitySDK.logError("Error while calling getItem:", _0x217977);
    }
    return _0x3d7a31 !== null;
  }
  function _0x343356(_0x5afeb6) {
    try {
      window.CrazyGames.SDK.data.removeItem(window.unityStringify(_0x5afeb6));
    } catch (_0x125f02) {
      window.UnitySDK.logError("Error while calling removeItem:", _0x125f02);
    }
  }
  function _0x2ddcef(_0x3a8148, _0x71daa0) {
    try {
      window.CrazyGames.SDK.data.setItem(window.unityStringify(_0x3a8148), window.unityStringify(_0x71daa0));
    } catch (_0x428d33) {
      window.UnitySDK.logError("Error while calling setItem:", _0x428d33);
    }
  }
  function _0x13adb1(_0x439d8d, _0x142128, _0x4bd419, _0x5bd3e0, _0x1553e9) {
    var _0x4536d8 = _0x5ea6bb(_0x439d8d);
    var _0xd4b169 = _0x5ea6bb(_0x142128);
    var _0x580ebe = _0x5ea6bb(_0x4bd419);
    var _0x4ec524 = _0x5ea6bb(_0x5bd3e0);
    var _0x35bee8 = _0x5ea6bb(_0x1553e9);
    try {
      firebase.firestore().collection(_0x4536d8).doc(_0xd4b169).delete().then(function () {
        window.unityInstance.SendMessage(_0x580ebe, _0x4ec524, "Success: document " + _0xd4b169 + " was deleted");
      }).catch(function (_0x148390) {
        window.unityInstance.SendMessage(_0x580ebe, _0x35bee8, JSON.stringify(_0x148390, Object.getOwnPropertyNames(_0x148390)));
      });
    } catch (_0x31b32d) {
      window.unityInstance.SendMessage(_0x580ebe, _0x35bee8, JSON.stringify(_0x31b32d, Object.getOwnPropertyNames(_0x31b32d)));
    }
  }
  function _0x43c34a(_0x446bdc, _0xa9f60f, _0x2fd11a, _0x158d95, _0x501264, _0x46adfa) {
    var _0x3db0eb = _0x5ea6bb(_0x446bdc);
    var _0x664c2d = _0x5ea6bb(_0xa9f60f);
    var _0x5a360d = _0x5ea6bb(_0x2fd11a);
    var _0x390553 = _0x5ea6bb(_0x158d95);
    var _0x2f8cb6 = _0x5ea6bb(_0x501264);
    var _0x5cc92f = _0x5ea6bb(_0x46adfa);
    try {
      var _0x4d3090 = {};
      _0x4d3090[_0x5a360d] = firebase.firestore.FieldValue.delete();
      firebase.firestore().collection(_0x3db0eb).doc(_0x664c2d).update(_0x4d3090).then(function () {
        window.unityInstance.SendMessage(_0x390553, _0x2f8cb6, "Success: field " + _0x5a360d + " was deleted");
      }).catch(function (_0x48e8c0) {
        window.unityInstance.SendMessage(_0x390553, _0x5cc92f, JSON.stringify(_0x48e8c0, Object.getOwnPropertyNames(_0x48e8c0)));
      });
    } catch (_0x4e1d54) {
      window.unityInstance.SendMessage(_0x390553, _0x5cc92f, JSON.stringify(_0x4e1d54, Object.getOwnPropertyNames(_0x4e1d54)));
    }
  }
  function _0x5bfc22(_0x2f9cbb, _0x52dde1, _0x57b785, _0x5ed170) {
    var _0x223dda = _0x5ea6bb(_0x2f9cbb);
    var _0x1bc9b4 = _0x5ea6bb(_0x52dde1);
    var _0x5e1b01 = _0x5ea6bb(_0x57b785);
    var _0x1ccbfc = _0x5ea6bb(_0x5ed170);
    try {
      firebase.database().ref(_0x223dda).remove().then(function (_0x38b8a0) {
        window.unityInstance.SendMessage(_0x1bc9b4, _0x5e1b01, "Success: " + _0x223dda + " was deleted");
      });
    } catch (_0x54d497) {
      window.unityInstance.SendMessage(_0x1bc9b4, _0x1ccbfc, JSON.stringify(_0x54d497, Object.getOwnPropertyNames(_0x54d497)));
    }
  }
  function _0x2567bc(_0x18709f, _0x883873, _0x27dc2a, _0x11c71d) {
    var _0x107c86 = _0x5ea6bb(_0x18709f);
    var _0x2bc478 = _0x5ea6bb(_0x883873);
    var _0x26cc00 = _0x5ea6bb(_0x27dc2a);
    var _0x27d951 = _0x5ea6bb(_0x11c71d);
    try {
      firebase.storage().ref(_0x107c86).getDownloadURL().then(function (_0x2f371a) {
        var _0x33c4d5 = new XMLHttpRequest();
        _0x33c4d5.responseType = "arraybuffer";
        _0x33c4d5.onload = function (_0x553fe9) {
          var _0xfddd88 = _0x33c4d5.response;
          window.unityInstance.SendMessage(_0x2bc478, _0x26cc00, _0x18112c(_0xfddd88));
        };
        _0x33c4d5.open("GET", _0x2f371a);
        _0x33c4d5.send();
      }).catch(function (_0x2e2768) {
        window.unityInstance.SendMessage(_0x2bc478, _0x27d951, JSON.stringify(_0x2e2768, Object.getOwnPropertyNames(_0x2e2768)));
      });
    } catch (_0x9c3d63) {
      window.unityInstance.SendMessage(_0x2bc478, _0x27d951, JSON.stringify(_0x9c3d63, Object.getOwnPropertyNames(_0x9c3d63)));
    }
    function _0x18112c(_0x2b8e4e) {
      var _0x5c7ec = "";
      var _0x362a71 = new Uint8Array(_0x2b8e4e);
      var _0x221045 = _0x362a71.byteLength;
      for (var _0x2dcf0c = 0; _0x2dcf0c < _0x221045; _0x2dcf0c++) {
        _0x5c7ec += String.fromCharCode(_0x362a71[_0x2dcf0c]);
      }
      return window.btoa(_0x5c7ec);
    }
  }
  function _0x3dbb04() {
    try {
      window[preroll.config.loaderObjectName].log("WGSDK: Getting WeeGoo InGame Ad");
      window[preroll.config.loaderObjectName].refetchAd();
    } catch (_0x5e2df2) {
      console.log("No WeeGooAFG implementation found!");
    }
  }
  function _0x255954(_0x3b1f2f) {
    var _0x4f1b15 = {
      adStarted: function () {
        _0x4adf00("GMSDKAdvertisement", "JSLibCallback_AdStarted");
      },
      adFinished: function () {
        _0x4adf00("GMSDKAdvertisement", "JSLibCallback_AdFinished");
      },
      adError: function (_0x49b266) {
        _0x4adf00("GMSDKAdvertisement", "JSLibCallback_AdError", JSON.stringify(_0x49b266));
      }
    };
    var _0x2ac2ef = window.GMSOFT_GMADS_INFO.reward;
    var _0x165101 = _0x2ac2ef[Math.floor(Math.random() * _0x2ac2ef.length)];
    try {
      var _0x283cac = document.createElement("div");
      _0x283cac.id = "gm-ad-overlay";
      _0x283cac.style.cssText = "\n          position: fixed;\n          top: 0;\n          left: 0;\n          width: 100%;\n          height: 100%;\n          background: rgba(0, 0, 0, 0.9);\n          z-index: 9999;\n          display: flex;\n          justify-content: center;\n          align-items: center;\n          flex-direction: column;\n        ";
      var _0x3db40d = document.createElement("div");
      _0x3db40d.style.cssText = "\n          position: relative;\n          max-width: 90%;\n          max-height: 80%;\n          background: #000;\n          border-radius: 8px;\n          overflow: hidden;\n        ";
      var _0x171726 = document.createElement("video");
      _0x171726.src = _0x165101.image;
      _0x171726.style.cssText = "\n          width: 100%;\n          height: 100%;\n          display: block;\n        ";
      _0x171726.autoplay = true;
      _0x171726.muted = true;
      _0x171726.preload = "auto";
      var _0x37ea11 = document.createElement("button");
      _0x37ea11.innerHTML = "Skip (5)";
      _0x37ea11.disabled = true;
      _0x37ea11.style.cssText = "\n          position: absolute;\n          top: 10px;\n          right: 10px;\n          background: rgba(0, 0, 0, 0.8);\n          color: white;\n          border: 1px solid #666;\n          border-radius: 6px;\n          padding: 10px 16px;\n          cursor: pointer;\n          font-size: 16px;\n          font-weight: bold;\n          z-index: 10001;\n          box-shadow: 0 2px 8px rgba(0,0,0,0.3);\n        ";
      _0x37ea11.disabled = true;
      _0x37ea11.style.opacity = "0.5";
      var _0x33425a = document.createElement("div");
      _0x33425a.style.cssText = "\n          position: absolute;\n          bottom: 0;\n          left: 0;\n          width: 100%;\n          height: 6px;\n          background: rgba(255, 255, 255, 0.3);\n          z-index: 10001;\n        ";
      var _0xf14dd2 = document.createElement("div");
      _0xf14dd2.style.cssText = "\n          height: 100%;\n          width: 0%;\n          background: linear-gradient(90deg, #ff6b6b, #4ecdc4);\n          transition: width 0.1s ease;\n        ";
      var _0x5ec546 = 5;
      var _0x28f987 = setInterval(function () {
        _0x5ec546--;
        if (_0x5ec546 > 0) {
          _0x37ea11.innerHTML = "Skip (" + _0x5ec546 + ")";
        } else {
          _0x37ea11.innerHTML = "Skip";
          _0x37ea11.disabled = false;
          _0x37ea11.style.opacity = "1";
          _0x37ea11.style.cursor = "pointer";
          clearInterval(_0x28f987);
        }
      }, 1000);
      function _0x509b79() {
        if (_0x283cac && _0x283cac.parentNode) {
          _0x283cac.parentNode.removeChild(_0x283cac);
        }
        clearInterval(_0x28f987);
        _0x4f1b15.adFinished();
      }
      function _0x31bed8() {
        window.open(_0x165101.url, "_blank");
      }
      function _0x2cfc17() {
        if (_0x171726.duration && _0x171726.currentTime) {
          var _0x22daf8 = _0x171726.currentTime / _0x171726.duration * 100;
          _0xf14dd2.style.width = _0x22daf8 + "%";
        }
      }
      _0x171726.addEventListener("loadstart", function () {
        _0x4f1b15.adStarted();
      });
      _0x171726.addEventListener("timeupdate", function () {
        _0x2cfc17();
      });
      _0x171726.addEventListener("ended", function () {
        _0x509b79();
      });
      _0x171726.addEventListener("error", function (_0x788f1a) {
        var _0x426453 = {
          message: "Video load error",
          code: _0x788f1a.target.error ? _0x788f1a.target.error.code : "unknown"
        };
        _0x4f1b15.adError(_0x426453);
        _0x509b79();
      });
      _0x171726.addEventListener("click", function () {
        _0x31bed8();
      });
      _0x37ea11.addEventListener("click", function () {
        if (!_0x37ea11.disabled) {
          _0x509b79();
        }
      });
      _0x171726.addEventListener("contextmenu", function (_0x22a0ae) {
        _0x22a0ae.preventDefault();
      });
      _0x33425a.appendChild(_0xf14dd2);
      _0x3db40d.appendChild(_0x171726);
      _0x3db40d.appendChild(_0x37ea11);
      _0x3db40d.appendChild(_0x33425a);
      _0x283cac.appendChild(_0x3db40d);
      document.body.appendChild(_0x283cac);
      _0x171726.play().catch(function (_0x46c16b) {
        console.error("Video play error:", _0x46c16b);
        _0x4f1b15.adError({
          message: "Cannot play video",
          details: _0x46c16b.message
        });
        _0x509b79();
      });
    } catch (_0x13477b) {
      console.error("Ad overlay creation error:", _0x13477b);
      _0x4f1b15.adError({
        message: "Failed to create ad overlay",
        details: _0x13477b.message
      });
    }
  }
  function _0xbded2(_0x280a11, _0x21876d) {
    gmEvent(_0x5ea6bb(_0x280a11), _0x5ea6bb(_0x21876d));
  }
  function _0x9ea861() {
    const _0x3bf8e0 = "gmsdksigndomain";
    try {
      if (localStorage.hasOwnProperty(_0x3bf8e0)) {
        let _0x49c796 = localStorage.getItem(_0x3bf8e0);
        if (_0x49c796 && _0x49c796.length > 10) {
          window.GMSOFT_SIGNED = _0x49c796;
          console.log("Local storage GM_SDK_GetVeryfiedSignature: ", window.GMSOFT_SIGNED);
          _0x4adf00("GmSoft", "OnGetVeryfiedSignature", window.GMSOFT_SIGNED);
          return;
        }
      }
    } catch (_0x1138b6) {
      console.error("Error getting GM_SDK_GetVeryfiedSignature from local storage: ", _0x1138b6);
    }
    try {
      let _0x3de8fe = "hn=" + "https://gamea.azgame.io";
      let _0x31a384 = btoa(_0x3de8fe);
      let _0x1dc7a5 = "https://api.cdnwave.com/sdkdom/keysigned";
      if (window.GMSOFT_OPTIONS && window.GMSOFT_OPTIONS.signedurl) {
        _0x1dc7a5 = window.GMSOFT_OPTIONS.signedurl;
      }
      let _0x555097 = _0x1dc7a5 + "?params=" + _0x31a384;
      var _0x2bb2c7 = new XMLHttpRequest();
      let _0x2d2593 = "";
      _0x2bb2c7.open("GET", _0x555097, false);
      _0x2bb2c7.send(_0x2d2593);
      let _0x32d0b2 = _0x2bb2c7.responseText;
      window.GMSOFT_SIGNED = _0x32d0b2;
      localStorage.setItem(_0x3bf8e0, _0x32d0b2);
      console.log("send request GM_SDK_GetVeryfiedSignature: ", window.GMSOFT_SIGNED);
      _0x4adf00("GmSoft", "OnGetVeryfiedSignature", window.GMSOFT_SIGNED);
    } catch (_0x3f1f46) {
      console.error("Error fetching GM_SDK_GetVeryfiedSignature: ", _0x3f1f46);
    }
  }
  function _0x4d5fda() {
    let _0x2ce43a = "https://gamea.azgame.io";
    _0x4adf00("GmSoft", "SetUnityHostName", _0x2ce43a);
    _0x4adf00("GmSoft", "SetSDKType", window.GMSOFT_SDKTYPE);
  }
  function _0x15dbb6() {
    console.log("GM_SDK_StartGame");
    try {
      gmStartGame(function () {
        _0x4adf00("GmSoft", "SetGameInfoParam", JSON.stringify(window.GMSOFT_GAME_INFO));
      });
    } catch (_0x3b29f7) {
      console.error("Error JS 12", _0x3b29f7);
    }
    try {
      gmStartAds(function () {
        _0x4adf00("GmSoft", "SetAdParam", JSON.stringify(window.GMSOFT_ADS_INFO));
      });
    } catch (_0x33904a) {
      console.error("Error JS 20", _0x33904a);
    }
    try {
    } catch (_0x6d6af0) {
      console.error("Error JS 28", _0x6d6af0);
    }
  }
  function _0x261a59(_0x40b30a) {
    try {
      window[preroll.config.loaderObjectName].log("WGSDK: Sending game event");
      window[preroll.config.loaderObjectName].GameEvent(_0x40b30a);
    } catch (_0x491f3b) {
      console.log("No WeeGooAFG implementation found!");
    }
  }
  function _0xf83dfe() {
    try {
      window.CrazyGames.SDK.game.gameplayStart();
    } catch (_0x49d9fa) {
      window.UnitySDK.logError("Error while calling gameplayStart:", _0x49d9fa);
    }
  }
  function _0x3e5b25() {
    try {
      window.CrazyGames.SDK.game.gameplayStop();
    } catch (_0x50d7bc) {
      window.UnitySDK.logError("Error while calling gameplayStop:", _0x50d7bc);
    }
  }
  function _0x4a3688() {
    var _0x17bc70 = firebaseConfig.projectId;
    var _0x560153 = _0x55b306(_0x17bc70) + 1;
    var _0x358c97 = _0x57219e(_0x560153);
    _0x38fbc9(_0x17bc70, _0x358c97, _0x560153);
    return _0x358c97;
  }
  function _0x40f538(_0x53018b, _0x215bd6, _0x55a6fa, _0x265cbb, _0x189f38) {
    var _0x353595 = _0x5ea6bb(_0x53018b);
    var _0x186981 = _0x5ea6bb(_0x215bd6);
    var _0x50525f = _0x5ea6bb(_0x55a6fa);
    var _0x1ee0cd = _0x5ea6bb(_0x265cbb);
    var _0x4ad57d = _0x5ea6bb(_0x189f38);
    try {
      firebase.firestore().collection(_0x353595).doc(_0x186981).get().then(function (_0x413188) {
        if (_0x413188.exists) {
          window.unityInstance.SendMessage(_0x50525f, _0x1ee0cd, JSON.stringify(_0x413188.data()));
        } else {
          window.unityInstance.SendMessage(_0x50525f, _0x1ee0cd, "null");
        }
      }).catch(function (_0x2ac71c) {
        window.unityInstance.SendMessage(_0x50525f, _0x4ad57d, JSON.stringify(_0x2ac71c, Object.getOwnPropertyNames(_0x2ac71c)));
      });
    } catch (_0x188ff0) {
      window.unityInstance.SendMessage(_0x50525f, _0x4ad57d, JSON.stringify(_0x188ff0, Object.getOwnPropertyNames(_0x188ff0)));
    }
  }
  function _0x4300a7(_0x50baea, _0x1618da, _0x3ed201, _0x1721ef) {
    var _0x5f107b = _0x5ea6bb(_0x50baea);
    var _0x19e7cb = _0x5ea6bb(_0x1618da);
    var _0xee2e3f = _0x5ea6bb(_0x3ed201);
    var _0x2b5fdf = _0x5ea6bb(_0x1721ef);
    try {
      firebase.firestore().collection(_0x5f107b).get().then(function (_0x9923b8) {
        var _0x4a3f07 = {};
        _0x9923b8.forEach(function (_0x792e1) {
          _0x4a3f07[_0x792e1.id] = _0x792e1.data();
        });
        window.unityInstance.SendMessage(_0x19e7cb, _0xee2e3f, JSON.stringify(_0x4a3f07));
      }).catch(function (_0x35cb24) {
        window.unityInstance.SendMessage(_0x19e7cb, _0x2b5fdf, JSON.stringify(_0x35cb24, Object.getOwnPropertyNames(_0x35cb24)));
      });
    } catch (_0x24a832) {
      window.unityInstance.SendMessage(_0x19e7cb, _0x2b5fdf, JSON.stringify(_0x24a832, Object.getOwnPropertyNames(_0x24a832)));
    }
  }
  function _0x3322ec() {
    var _0x5962c8 = window.CrazyGames.SDK.environment;
    var _0x5e3a4b = _0x55b306(_0x5962c8) + 1;
    var _0x5ec179 = _0x57219e(_0x5e3a4b);
    _0x38fbc9(_0x5962c8, _0x5ec179, _0x5e3a4b);
    return _0x5ec179;
  }
  function _0x2dc0ff() {
    var _0x2a1edb = JSON.stringify(window.CrazyGames.SDK.game.settings);
    var _0x42c61b = _0x55b306(_0x2a1edb) + 1;
    var _0x418fcd = _0x57219e(_0x42c61b);
    _0x38fbc9(_0x2a1edb, _0x418fcd, _0x42c61b);
    return _0x418fcd;
  }
  function _0x2b3dab(_0x3e4285) {
    var _0x568663 = new URLSearchParams(window.location.search);
    var _0x1ff224 = _0x568663.get(window.unityStringify(_0x3e4285));
    if (_0x1ff224 === null) {
      _0x1ff224 = "";
    }
    var _0x3f9638 = _0x55b306(_0x1ff224) + 1;
    var _0x4f535d = _0x57219e(_0x3f9638);
    _0x38fbc9(_0x1ff224, _0x4f535d, _0x3f9638);
    return _0x4f535d;
  }
  function _0x2c9b2d() {
    return window.CrazyGames.SDK.isQaTool;
  }
  function _0x1cbc7c(_0x4c7bd0, _0x3f39e1, _0x5952c9, _0x2d1695) {
    var _0x4f69fe = _0x5ea6bb(_0x4c7bd0);
    var _0x51dfe4 = _0x5ea6bb(_0x3f39e1);
    var _0x3ccea0 = _0x5ea6bb(_0x5952c9);
    var _0x391791 = _0x5ea6bb(_0x2d1695);
    try {
      firebase.database().ref(_0x4f69fe).once("value").then(function (_0x1ee242) {
        window.unityInstance.SendMessage(_0x51dfe4, _0x3ccea0, JSON.stringify(_0x1ee242.val()));
      });
    } catch (_0x463712) {
      window.unityInstance.SendMessage(_0x51dfe4, _0x391791, JSON.stringify(_0x463712, Object.getOwnPropertyNames(_0x463712)));
    }
  }
  function _0x1e2bb2() {
    var _0x49879e = JSON.stringify(window.CrazyGames.SDK.user.systemInfo);
    var _0x518b78 = _0x55b306(_0x49879e) + 1;
    var _0x517ae3 = _0x57219e(_0x518b78);
    _0x38fbc9(_0x49879e, _0x517ae3, _0x518b78);
    return _0x517ae3;
  }
  function _0xa3e809() {
    window.CrazyGames.SDK.user.getUser().then(function (_0x37430c) {
      _0x4adf00("CrazySDKSingleton", "JSLibCallback_GetUser", JSON.stringify({
        userJson: JSON.stringify(_0x37430c)
      }));
    }).catch(function (_0x22f13a) {
      _0x4adf00("CrazySDKSingleton", "JSLibCallback_GetUser", JSON.stringify({
        errorJson: JSON.stringify(_0x22f13a)
      }));
    });
  }
  function _0x7e52ed() {
    window.CrazyGames.SDK.user.getUserToken().then(function (_0x1ff31e) {
      _0x4adf00("CrazySDKSingleton", "JSLibCallback_GetUserToken", JSON.stringify({
        token: _0x1ff31e
      }));
    }).catch(function (_0x49957f) {
      _0x4adf00("CrazySDKSingleton", "JSLibCallback_GetUserToken", JSON.stringify({
        errorJson: JSON.stringify(_0x49957f)
      }));
    });
  }
  function _0x445131() {
    window.CrazyGames.SDK.user.getXsollaUserToken().then(function (_0x206c4b) {
      _0x4adf00("CrazySDKSingleton", "JSLibCallback_GetXsollaUserToken", JSON.stringify({
        token: _0x206c4b
      }));
    }).catch(function (_0x97bc6f) {
      _0x4adf00("CrazySDKSingleton", "JSLibCallback_GetXsollaUserToken", JSON.stringify({
        errorJson: JSON.stringify(_0x97bc6f)
      }));
    });
  }
  function _0x159c0f() {}
  function _0x2572de() {
    console.log("afg.ready: " + afg.ready);
    if (afg.ready) {
      _0x4adf00("H5Adverisement", "PreloadRewardedVideoCallback", 1);
      afg.adBreak({
        type: "reward",
        name: "reward ads",
        beforeReward: function (_0x2adebe) {
          this._showRewardAdFn = _0x2adebe;
          console.log("[H5 Ads] before reward");
        }.bind(this),
        adViewed: function () {
          this._showRewardAdFn = null;
          _0x4adf00("H5Adverisement", "RewardedVideoSuccessCallback");
          console.log("[H5 Ads] ad viewed");
        }.bind(this),
        adDismissed: function () {
          this._showRewardAdFn = null;
          _0x4adf00("H5Adverisement", "RewardedVideoFailureCallback");
          console.log("[H5 Ads] ad failure");
        }.bind(this),
        adBreakDone: function (_0x1da63d) {
          console.log("[H5 Ads] Reward break done");
          _0x4adf00("H5Adverisement", "ResumeGameCallback");
        }.bind(this)
      });
    } else {
      console.log("[H5 Ads] no reward ads");
      _0x4adf00("H5Adverisement", "PreloadRewardedVideoCallback", 0);
    }
  }
  function _0x499d63() {
    if (afg.ready) {
      afg.adBreak({
        type: "next",
        name: "next",
        beforeAd: function () {
          afg.onBeforeAd();
          console.log("[H5 Ads] Before ad");
          _0x4adf00("H5Adverisement", "PauseGameCallback");
        }.bind(this),
        adBreakDone: function () {
          console.log("[H5 Ads] Ad break done");
          _0x4adf00("H5Adverisement", "ResumeGameCallback");
        }.bind(this)
      });
    } else {
      console.log("no " + adType + " ads");
      _0x4adf00("H5Adverisement", "ResumeGameCallback");
    }
  }
  function _0x363f92() {
    if (this._showRewardAdFn) {
      _0x4adf00("H5Adverisement", "PauseGameCallback");
      this._showRewardAdFn();
    } else {
      _0x4adf00("H5Adverisement", "ResumeGameCallback");
    }
  }
  function _0x9ff70b() {
    try {
      window.CrazyGames.SDK.game.happytime();
    } catch (_0x48fb6d) {
      window.UnitySDK.logError("Error while calling happytime:", _0x48fb6d);
    }
  }
  function _0x5d0e87() {
    try {
      window.CrazyGames.SDK.game.hideInviteButton();
    } catch (_0x26fcbf) {
      window.UnitySDK.logError("Error while calling hideInviteButton:", _0x26fcbf);
    }
  }
  function _0x592a08(_0x231091, _0x4a19c3, _0x2171d8, _0x9f4dab, _0xf29001, _0x3509fa, _0x5cc30f) {
    var _0x15aa1a = _0x5ea6bb(_0x231091);
    var _0x1a638a = _0x5ea6bb(_0x4a19c3);
    var _0x284c40 = _0x5ea6bb(_0x2171d8);
    var _0x5abd98 = _0x5ea6bb(_0xf29001);
    var _0x244bfb = _0x5ea6bb(_0x3509fa);
    var _0x20e4e1 = _0x5ea6bb(_0x5cc30f);
    try {
      var _0x22293e = {};
      _0x22293e[_0x284c40] = firebase.firestore.FieldValue.increment(_0x9f4dab);
      firebase.firestore().collection(_0x15aa1a).doc(_0x1a638a).update(_0x22293e).then(function () {
        window.unityInstance.SendMessage(_0x5abd98, _0x244bfb, "Success: incremented " + _0x284c40 + " by " + _0x9f4dab);
      }).catch(function (_0x517236) {
        window.unityInstance.SendMessage(_0x5abd98, _0x20e4e1, JSON.stringify(_0x517236, Object.getOwnPropertyNames(_0x517236)));
      });
    } catch (_0x2e2fd1) {
      window.unityInstance.SendMessage(_0x5abd98, _0x20e4e1, JSON.stringify(_0x2e2fd1, Object.getOwnPropertyNames(_0x2e2fd1)));
    }
  }
  function _0x53b17a(_0x234b75) {
    if (typeof _0x5ea6bb !== "undefined") {
      window.unityStringify = _0x5ea6bb;
    } else {
      window.unityStringify = _0x5ea6bb;
    }
    window.UnitySDK = {
      version: window.unityStringify(_0x234b75),
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
        var _0x4913c7 = Array.prototype.slice.call(arguments);
        _0x4913c7.unshift("[JsLib]");
        console.error.apply(console, _0x4913c7);
      }
    };
    var _0x54fb01 = {
      wrapper: {
        engine: "unity",
        sdkVersion: window.unityStringify(_0x234b75)
      }
    };
    var _0x4b2466 = document.createElement("script");
    _0x4b2466.src = "https://sdk.crazygames.com/crazygames-sdk-v3.js";
    document.head.appendChild(_0x4b2466);
    _0x4b2466.addEventListener("load", function () {
      window.CrazyGames.SDK.init(_0x54fb01).then(function () {
        _0x4adf00("CrazySDKSingleton", "JSLibCallback_Init");
        window.CrazyGames.SDK.ad.hasAdblock().then(function (_0x3352ad) {
          _0x4adf00("CrazySDKSingleton", "JSLibCallback_AdblockDetectionResult", _0x3352ad ? 1 : 0);
        }).catch(function (_0x2057ac) {
          window.UnitySDK.logError("Error while checking adblock:", _0x2057ac);
          _0x4adf00("CrazySDKSingleton", "JSLibCallback_AdblockDetectionResult", 0);
        });
        window.CrazyGames.SDK.user.addAuthListener(function (_0x205cc8) {
          _0x4adf00("CrazySDKSingleton", "JSLibCallback_AuthListener", JSON.stringify({
            userJson: JSON.stringify(_0x205cc8)
          }));
        });
      });
    });
  }
  function _0x5c0156() {
    return window.CrazyGames.SDK.user.isUserAccountAvailable;
  }
  var _0x8d502e = null;
  var _0x4a999c = 0;
  function _0x32f313() {
    return _0x8d502e && _0x8d502e.activated || _0x4a999c != 0;
  }
  var _0x28f33b = 1;
  var _0x50dff2 = {
    x: 0,
    y: 0,
    z: 0
  };
  function _0x30a318() {
    _0x50dff2 = {
      x: _0x8d502e.x * _0x28f33b,
      y: _0x8d502e.y * _0x28f33b,
      z: _0x8d502e.z * _0x28f33b
    };
    if (_0x4a999c != 0) {
      _0x4342c4(_0x4a999c, _0x50dff2.x, _0x50dff2.y, _0x50dff2.z);
    }
  }
  var _0x260b39 = 0;
  var _0x37336f = 0;
  var _0x127b8e = 0;
  var _0x129660 = 0;
  var _0x1b6f35 = 0;
  function _0x37b142(_0x1b67e9, _0x2eb2c2) {
    var _0x58723a = {
      x: _0x1b67e9.x - _0x2eb2c2.x,
      y: _0x1b67e9.y - _0x2eb2c2.y,
      z: _0x1b67e9.z - _0x2eb2c2.z
    };
    var _0x34ae4b = _0x58723a.x * _0x58723a.x + _0x58723a.y * _0x58723a.y + _0x58723a.z * _0x58723a.z;
    var _0x5b156f = {
      x: _0x1b67e9.x + _0x2eb2c2.x,
      y: _0x1b67e9.y + _0x2eb2c2.y,
      z: _0x1b67e9.z + _0x2eb2c2.z
    };
    var _0x7f31b4 = _0x5b156f.x * _0x5b156f.x + _0x5b156f.y * _0x5b156f.y + _0x5b156f.z * _0x5b156f.z;
    if (_0x34ae4b <= _0x7f31b4) {
      return _0x58723a;
    } else {
      return _0x5b156f;
    }
  }
  function _0x1971af(_0x472511) {
    var _0x49488a = {
      x: _0x472511.accelerationIncludingGravity.x * _0x28f33b,
      y: _0x472511.accelerationIncludingGravity.y * _0x28f33b,
      z: _0x472511.accelerationIncludingGravity.z * _0x28f33b
    };
    if (_0x4a999c != 0) {
      _0x4342c4(_0x4a999c, _0x49488a.x, _0x49488a.y, _0x49488a.z);
    }
    var _0x4239c1 = {
      x: _0x472511.acceleration.x * _0x28f33b,
      y: _0x472511.acceleration.y * _0x28f33b,
      z: _0x472511.acceleration.z * _0x28f33b
    };
    if (_0x127b8e != 0) {
      _0x4342c4(_0x127b8e, _0x4239c1.x, _0x4239c1.y, _0x4239c1.z);
    }
    if (_0x129660 != 0) {
      var _0x268a42 = _0x37b142(_0x49488a, _0x4239c1);
      _0x4342c4(_0x129660, _0x268a42.x, _0x268a42.y, _0x268a42.z);
    }
    if (_0x1b6f35 != 0) {
      var _0x28e82a = Math.PI / 180;
      _0x4342c4(_0x1b6f35, _0x472511.rotationRate.alpha * _0x28e82a, _0x472511.rotationRate.beta * _0x28e82a, _0x472511.rotationRate.gamma * _0x28e82a);
    }
  }
  var _0x5a9de2 = 0;
  function _0x3be243(_0x4c4b44) {
    if (_0x4c4b44 & 1) {
      if (typeof DeviceOrientationEvent.requestPermission === "function") {
        DeviceOrientationEvent.requestPermission().then(function (_0x8f96fc) {
          if (_0x8f96fc === "granted") {
            _0x5a9de2 &= ~1;
          } else {
            _0x339557("DeviceOrientationEvent permission not granted");
          }
        }).catch(function (_0x4e4d72) {
          _0x339557(_0x4e4d72);
          _0x5a9de2 |= 1;
        });
      }
    }
    if (_0x4c4b44 & 2) {
      if (typeof DeviceMotionEvent.requestPermission === "function") {
        DeviceMotionEvent.requestPermission().then(function (_0x35302a) {
          if (_0x35302a === "granted") {
            _0x5a9de2 &= ~2;
          } else {
            _0x339557("DeviceMotionEvent permission not granted");
          }
        }).catch(function (_0x28aa3c) {
          _0x339557(_0x28aa3c);
          _0x5a9de2 |= 2;
        });
      }
    }
  }
  function _0xcec51d() {
    if (_0x4a999c == 0 && _0x127b8e == 0 && _0x129660 == 0 && _0x1b6f35 == 0) {
      _0x3be243(2);
      window.addEventListener("devicemotion", _0x1971af);
    }
  }
  function _0x3d171c() {
    var _0x809089 = 9.80665;
    _0x28f33b = /(iPhone|iPad|Macintosh)/i.test(navigator.userAgent) ? 1 / _0x809089 : -1 / _0x809089;
  }
  function _0x1d98c0(_0x3f623b, _0x3e8841) {
    _0x3d171c();
    if (typeof Accelerometer === "undefined") {
      _0xcec51d();
      if (_0x3f623b != 0) {
        _0x4a999c = _0x3f623b;
      }
      return;
    }
    if (_0x3f623b != 0) {
      _0x4a999c = _0x3f623b;
    }
    function _0x27ab14(_0x3ea269) {
      _0x8d502e = new Accelerometer({
        frequency: _0x3ea269,
        referenceFrame: "device"
      });
      _0x8d502e.addEventListener("reading", _0x30a318);
      _0x8d502e.addEventListener("error", function (_0x44a526) {
        _0x339557(_0x44a526.error ? _0x44a526.error : _0x44a526);
      });
      _0x8d502e.start();
      _0x37336f = _0x3ea269;
    }
    if (_0x8d502e) {
      if (_0x37336f != _0x3e8841) {
        _0x8d502e.stop();
        _0x8d502e.removeEventListener("reading", _0x30a318);
        _0x27ab14(_0x3e8841);
      }
    } else if (_0x260b39 != 0) {
      _0x260b39 = _0x3e8841;
    } else {
      _0x260b39 = _0x3e8841;
      navigator.permissions.query({
        name: "accelerometer"
      }).then(function (_0x24a4a0) {
        if (_0x24a4a0.state === "granted") {
          _0x27ab14(_0x260b39);
        } else {
          _0x339557("No permission to use Accelerometer.");
        }
        _0x260b39 = 0;
      });
    }
  }
  function _0x38fbf2() {
    if (_0x4a999c == 0 && _0x127b8e == 0 && _0x129660 == 0 && _0x1b6f35 == 0) {
      window.removeEventListener("devicemotion", _0x4a3be5);
    }
  }
  function _0x1c41d7() {
    if (_0x8d502e) {
      if (typeof GravitySensor !== "undefined" || _0x129660 == 0) {
        _0x8d502e.stop();
        _0x8d502e.removeEventListener("reading", _0x30a318);
        _0x8d502e = null;
      }
      _0x4a999c = 0;
      _0x37336f = 0;
    } else if (_0x4a999c != 0) {
      _0x4a999c = 0;
      _0x38fbf2();
    }
  }
  function _0x3ac88b(_0x4caa81, _0x21a78a) {
    var _0x4ed747 = "";
    for (var _0x5d4a20 = 0; _0x5d4a20 < _0x21a78a; _0x5d4a20++) {
      _0x4ed747 += String.fromCharCode(_0x2c14c3[_0x4caa81 + _0x5d4a20]);
    }
    _0x51dce1.canvas.style.cursor = "url(data:image/cur;base64," + btoa(_0x4ed747) + "),default";
  }
  function _0x28ba7b(_0x43522f) {
    _0x51dce1.canvas.style.cursor = _0x43522f ? "default" : "none";
  }
  function _0x68ac31(_0x9581d4) {
    if (typeof window.CSS !== "undefined" && typeof window.CSS.escape !== "undefined") {
      return window.CSS.escape(_0x9581d4);
    }
    return _0x9581d4.replace(/(#|\.|\+|\[|\]|\(|\)|\{|\})/g, "\\$1");
  }
  function _0x12c896() {
    var _0x1440fd = _0x51dce1.canvas ? _0x51dce1.canvas.id : "unity-canvas";
    return "#" + _0x68ac31(_0x1440fd);
  }
  function _0x4ca130(_0x252e04, _0x34bf48, _0x8b1eec, _0x5e473f) {
    var _0x4188dd = document.querySelector(_0x12c896());
    var _0x4972a1 = _0x4188dd && _0x4188dd.getBoundingClientRect();
    _0x342aec[_0x8b1eec >> 2] = _0x252e04 - (_0x4972a1 ? _0x4972a1.left : 0);
    _0x342aec[_0x5e473f >> 2] = _0x34bf48 - (_0x4972a1 ? _0x4972a1.top : 0);
  }
  function _0x1fc3db(_0x6a8dd) {
    var _0xe2e519 = _0x55b306(_0x6a8dd) + 1;
    var _0xd45129 = _0x57219e(_0xe2e519);
    _0x38fbc9(_0x6a8dd, _0xd45129, _0xe2e519);
    return _0xd45129;
  }
  function _0x437b83() {
    var _0x2c5421 = _0x12c896();
    if (_0x437b83.selector != _0x2c5421) {
      _0x4401e3(_0x437b83.ptr);
      _0x437b83.ptr = _0x1fc3db(_0x2c5421);
      _0x437b83.selector = _0x2c5421;
    }
    return _0x437b83.ptr;
  }
  function _0x2d0a7f(_0x50f4c3) {
    var _0x518be7 = _0x5ea6bb(_0x50f4c3);
    try {
      eval(_0x518be7);
    } catch (_0x243ab4) {
      console.error(_0x243ab4);
    }
  }
  function _0x6e104c(_0x5663df) {
    var _0x2569b4 = _0x5ea6bb(_0x5663df);
    window.open(_0x2569b4, "_blank", "");
  }
  var _0x2826e3 = {
    numPendingSync: 0,
    syncInternal: 1000,
    syncInProgress: false,
    sync: function (_0x4152ad) {
      if (_0x4152ad) {
        if (_0x2826e3.numPendingSync == 0) {
          return;
        }
      } else if (_0x2826e3.syncInProgress) {
        _0x2826e3.numPendingSync++;
        return;
      }
      _0x2826e3.syncInProgress = true;
      _0x4c1d54.syncfs(false, function (_0x124a57) {
        _0x2826e3.syncInProgress = false;
      });
      _0x2826e3.numPendingSync = 0;
    }
  };
  function _0x1f8227() {
    _0x51dce1.setInterval(function () {
      _0x2826e3.sync(true);
    }, _0x2826e3.syncInternal);
  }
  function _0x178689() {
    _0x2826e3.sync(false);
  }
  var _0x54de6b = null;
  function _0x57e459() {
    if (typeof GravitySensor !== "undefined") {
      return _0x54de6b && _0x54de6b.activated;
    } else {
      return _0x129660 != 0;
    }
  }
  function _0x1bdba5() {
    if (_0x129660 != 0) {
      _0x4342c4(_0x129660, _0x54de6b.x * _0x28f33b, _0x54de6b.y * _0x28f33b, _0x54de6b.z * _0x28f33b);
    }
  }
  var _0x33ccee = 0;
  var _0x2ec4b5 = null;
  function _0x40a8b2() {
    var _0xf50ccb = {
      x: _0x2ec4b5.x * _0x28f33b,
      y: _0x2ec4b5.y * _0x28f33b,
      z: _0x2ec4b5.z * _0x28f33b
    };
    if (_0x127b8e != 0) {
      _0x4342c4(_0x127b8e, _0xf50ccb.x, _0xf50ccb.y, _0xf50ccb.z);
    }
    if (_0x129660 != 0 && typeof GravitySensor === "undefined") {
      var _0x220ce9 = _0x37b142(_0x50dff2, _0xf50ccb);
      _0x4342c4(_0x129660, _0x220ce9.x, _0x220ce9.y, _0x220ce9.z);
    }
  }
  var _0x3605e1 = 0;
  var _0x14ee22 = 0;
  function _0x482c1e(_0x38b196, _0x4cb6f2) {
    _0x3d171c();
    if (typeof LinearAccelerationSensor === "undefined") {
      _0xcec51d();
      if (_0x38b196 != 0) {
        _0x127b8e = _0x38b196;
      }
      return;
    }
    if (_0x38b196 != 0) {
      _0x127b8e = _0x38b196;
    }
    function _0x2b67da(_0x32c8a5) {
      _0x2ec4b5 = new LinearAccelerationSensor({
        frequency: _0x32c8a5,
        referenceFrame: "device"
      });
      _0x2ec4b5.addEventListener("reading", _0x40a8b2);
      _0x2ec4b5.addEventListener("error", function (_0x112a62) {
        _0x339557(_0x112a62.error ? _0x112a62.error : _0x112a62);
      });
      _0x2ec4b5.start();
      _0x14ee22 = _0x32c8a5;
    }
    if (_0x2ec4b5) {
      if (_0x14ee22 != _0x4cb6f2) {
        _0x2ec4b5.stop();
        _0x2ec4b5.removeEventListener("reading", _0x40a8b2);
        _0x2b67da(_0x4cb6f2);
      }
    } else if (_0x3605e1 != 0) {
      _0x3605e1 = _0x4cb6f2;
    } else {
      _0x3605e1 = _0x4cb6f2;
      navigator.permissions.query({
        name: "accelerometer"
      }).then(function (_0x59f5f0) {
        if (_0x59f5f0.state === "granted") {
          _0x2b67da(_0x3605e1);
        } else {
          _0x339557("No permission to use LinearAccelerationSensor.");
        }
        _0x3605e1 = 0;
      });
    }
  }
  function _0x5def50(_0x29c7d2, _0x31460c) {
    if (typeof GravitySensor === "undefined") {
      _0x1d98c0(0, Math.max(_0x31460c, _0x37336f));
      _0x482c1e(0, Math.max(_0x31460c, _0x14ee22));
      _0x129660 = _0x29c7d2;
      return;
    }
    _0x3d171c();
    _0x129660 = _0x29c7d2;
    function _0x268971(_0x1c020a) {
      _0x54de6b = new GravitySensor({
        frequency: _0x1c020a,
        referenceFrame: "device"
      });
      _0x54de6b.addEventListener("reading", _0x1bdba5);
      _0x54de6b.addEventListener("error", function (_0x28a4b) {
        _0x339557(_0x28a4b.error ? _0x28a4b.error : _0x28a4b);
      });
      _0x54de6b.start();
    }
    if (_0x54de6b) {
      _0x54de6b.stop();
      _0x54de6b.removeEventListener("reading", _0x1bdba5);
      _0x268971(_0x31460c);
    } else if (_0x33ccee != 0) {
      _0x33ccee = _0x31460c;
    } else {
      _0x33ccee = _0x31460c;
      navigator.permissions.query({
        name: "accelerometer"
      }).then(function (_0x3a2164) {
        if (_0x3a2164.state === "granted") {
          _0x268971(_0x33ccee);
        } else {
          _0x339557("No permission to use GravitySensor.");
        }
        _0x33ccee = 0;
      });
    }
  }
  function _0x5bf73a() {
    if (_0x2ec4b5) {
      if (typeof GravitySensor !== "undefined" || _0x129660 == 0) {
        _0x2ec4b5.stop();
        _0x2ec4b5.removeEventListener("reading", _0x40a8b2);
        _0x2ec4b5 = null;
      }
      _0x127b8e = 0;
      _0x14ee22 = 0;
    } else if (_0x127b8e != 0) {
      _0x127b8e = 0;
      _0x38fbf2();
    }
  }
  function _0x3e3735() {
    _0x129660 = 0;
    if (typeof GravitySensor === "undefined") {
      if (_0x4a999c == 0) {
        _0x1c41d7();
      }
      if (_0x127b8e == 0) {
        _0x5bf73a();
      }
      return;
    }
    if (_0x54de6b) {
      _0x54de6b.stop();
      _0x54de6b.removeEventListener("reading", _0x1bdba5);
      _0x54de6b = null;
    }
  }
  function _0x296f09(_0x51def4) {
    try {
      (function () {
        _0x94408b.call(null, _0x51def4);
      })();
    } catch (_0x132a1a) {
      console.warn(_0x132a1a);
    }
  }
  var _0x4d901d = null;
  function _0x266495() {
    return _0x4d901d && _0x4d901d.activated || _0x1b6f35 != 0;
  }
  function _0x52f3ca() {
    if (_0x1b6f35 != 0) {
      _0x4342c4(_0x1b6f35, _0x4d901d.x, _0x4d901d.y, _0x4d901d.z);
    }
  }
  var _0x45377e = 0;
  function _0x1137d5(_0x3b5d6d, _0x235e02) {
    if (typeof Gyroscope === "undefined") {
      _0xcec51d();
      _0x1b6f35 = _0x3b5d6d;
      return;
    }
    _0x1b6f35 = _0x3b5d6d;
    function _0x1aec4b(_0x3f053b) {
      _0x4d901d = new Gyroscope({
        frequency: _0x3f053b,
        referenceFrame: "device"
      });
      _0x4d901d.addEventListener("reading", _0x52f3ca);
      _0x4d901d.addEventListener("error", function (_0x30e2de) {
        _0x339557(_0x30e2de.error ? _0x30e2de.error : _0x30e2de);
      });
      _0x4d901d.start();
    }
    if (_0x4d901d) {
      _0x4d901d.stop();
      _0x4d901d.removeEventListener("reading", _0x52f3ca);
      _0x1aec4b(_0x235e02);
    } else if (_0x45377e != 0) {
      _0x45377e = _0x235e02;
    } else {
      _0x45377e = _0x235e02;
      navigator.permissions.query({
        name: "gyroscope"
      }).then(function (_0x90daeb) {
        if (_0x90daeb.state === "granted") {
          _0x1aec4b(_0x45377e);
        } else {
          _0x339557("No permission to use Gyroscope.");
        }
        _0x45377e = 0;
      });
    }
  }
  function _0x335ffa() {
    if (_0x4d901d) {
      _0x4d901d.stop();
      _0x4d901d.removeEventListener("reading", _0x52f3ca);
      _0x4d901d = null;
      _0x1b6f35 = 0;
    } else if (_0x1b6f35 != 0) {
      _0x1b6f35 = 0;
      _0x38fbf2();
    }
  }
  function _0x47cb66() {
    const _0x1fd2aa = function (_0x57a31) {
      if (_0x57a31.target.localName !== "canvas") {
        _0x1744a7();
      }
    };
    document.addEventListener("contextmenu", _0x1fd2aa);
    _0x51dce1.deinitializers.push(function () {
      document.removeEventListener("contextmenu", _0x1fd2aa);
    });
  }
  function _0x482c4a() {
    return _0x2ec4b5 && _0x2ec4b5.activated || _0x127b8e != 0;
  }
  function _0x3d2e88(_0x4af6f8, _0x1daccd) {
    var _0x2931b2 = _0x5ea6bb(_0x4af6f8);
    if (typeof dump == "function") {
      dump(_0x2931b2);
    }
    switch (_0x1daccd) {
      case 0:
      case 1:
      case 4:
        console.error(_0x2931b2);
        return;
      case 2:
        console.warn(_0x2931b2);
        return;
      case 3:
      case 5:
        console.log(_0x2931b2);
        return;
      default:
        console.error("Unknown console message type!");
        console.error(_0x2931b2);
    }
  }
  function _0x31b50b(_0x11fb86, _0x482557) {
    var _0x3a8f16 = _0x382d99();
    if (_0x11fb86) {
      _0x38fbc9(_0x3a8f16, _0x11fb86, _0x482557);
    }
    return _0x55b306(_0x3a8f16);
  }
  var _0x2c96f0 = null;
  var _0x6a89ea = 0;
  function _0x3bfefa() {
    return _0x2c96f0 && _0x2c96f0.activated || _0x6a89ea != 0;
  }
  function _0x5a64e2() {
    if (_0x6a89ea != 0) {
      _0x24e1f8(_0x6a89ea, _0x2c96f0.quaternion[0], _0x2c96f0.quaternion[1], _0x2c96f0.quaternion[2], _0x2c96f0.quaternion[3]);
    }
  }
  var _0x26159c = 0;
  function _0x4a3be5(_0x1b5b0c) {
    if (_0x6a89ea) {
      var _0x4ee292 = Math.PI / 180;
      var _0x2310d2 = _0x1b5b0c.beta * _0x4ee292;
      var _0x48324e = _0x1b5b0c.gamma * _0x4ee292;
      var _0x1406df = _0x1b5b0c.alpha * _0x4ee292;
      var _0x19143b = Math.cos(_0x2310d2 / 2);
      var _0x56a783 = Math.sin(_0x2310d2 / 2);
      var _0x3036ef = Math.cos(_0x48324e / 2);
      var _0x17270a = Math.sin(_0x48324e / 2);
      var _0x5c6a5f = Math.cos(_0x1406df / 2);
      var _0x3635c0 = Math.sin(_0x1406df / 2);
      var _0x2cc3b1 = _0x56a783 * _0x3036ef * _0x5c6a5f - _0x19143b * _0x17270a * _0x3635c0;
      var _0x49685e = _0x19143b * _0x17270a * _0x5c6a5f + _0x56a783 * _0x3036ef * _0x3635c0;
      var _0x183f95 = _0x19143b * _0x3036ef * _0x3635c0 + _0x56a783 * _0x17270a * _0x5c6a5f;
      var _0x4feca8 = _0x19143b * _0x3036ef * _0x5c6a5f - _0x56a783 * _0x17270a * _0x3635c0;
      _0x24e1f8(_0x6a89ea, _0x2cc3b1, _0x49685e, _0x183f95, _0x4feca8);
    }
  }
  function _0x3cf589(_0x50ed95, _0x16206b) {
    if (typeof RelativeOrientationSensor === "undefined") {
      if (_0x6a89ea == 0) {
        _0x6a89ea = _0x50ed95;
        _0x3be243(1);
        window.addEventListener("deviceorientation", _0x4a3be5);
      }
      return;
    }
    _0x6a89ea = _0x50ed95;
    function _0x355c6f(_0x3447dc) {
      _0x2c96f0 = new RelativeOrientationSensor({
        frequency: _0x3447dc,
        referenceFrame: "device"
      });
      _0x2c96f0.addEventListener("reading", _0x5a64e2);
      _0x2c96f0.addEventListener("error", function (_0x2e0a4a) {
        _0x339557(_0x2e0a4a.error ? _0x2e0a4a.error : _0x2e0a4a);
      });
      _0x2c96f0.start();
    }
    if (_0x2c96f0) {
      _0x2c96f0.stop();
      _0x2c96f0.removeEventListener("reading", _0x5a64e2);
      _0x355c6f(_0x16206b);
    } else if (_0x26159c != 0) {
      _0x26159c = _0x16206b;
    } else {
      _0x26159c = _0x16206b;
      Promise.all([navigator.permissions.query({
        name: "accelerometer"
      }), navigator.permissions.query({
        name: "gyroscope"
      })]).then(function (_0x25c623) {
        if (_0x25c623.every(function (_0x4d3115) {
          return _0x4d3115.state === "granted";
        })) {
          _0x355c6f(_0x26159c);
        } else {
          _0x339557("No permissions to use RelativeOrientationSensor.");
        }
        _0x26159c = 0;
      });
    }
  }
  function _0x34a65e() {
    if (_0x2c96f0) {
      _0x2c96f0.stop();
      _0x2c96f0.removeEventListener("reading", _0x5a64e2);
      _0x2c96f0 = null;
    } else if (_0x6a89ea != 0) {
      window.removeEventListener("deviceorientation", _0x4a3be5);
    }
    _0x6a89ea = 0;
  }
  function _0x333af0() {
    if (_0x5a9de2 == 0) {
      return;
    }
    _0x3be243(_0x5a9de2);
  }
  function _0x22cc5d() {
    _0x51dce1.QuitCleanup();
  }
  var _0x2bfcef = 0;
  function _0x2e3f75() {
    if (_0x2bfcef) {
      _0x24e3fb(_0x2bfcef, window.innerWidth, window.innerHeight, screen.orientation ? screen.orientation.angle : window.orientation);
    }
  }
  function _0x2e0d71() {
    _0x2bfcef = 0;
    window.removeEventListener("resize", _0x2e3f75);
    if (screen.orientation) {
      screen.orientation.removeEventListener("change", _0x2e3f75);
    }
  }
  function _0x2c499e(_0x5d5c62) {
    if (!_0x2bfcef) {
      if (screen.orientation) {
        screen.orientation.addEventListener("change", _0x2e3f75);
      }
      window.addEventListener("resize", _0x2e3f75);
      _0x2bfcef = _0x5d5c62;
      setTimeout(_0x2e3f75, 0);
    }
  }
  var _0x1ca074 = -1;
  var _0x497e31 = -1;
  var _0x29077f = -1;
  function _0x49c6f3(_0xdc2e30) {
    if (!screen.orientation || !screen.orientation.lock) {
      return;
    }
    function _0x1d2725() {
      _0x497e31 = _0x1ca074;
      var _0x16dce2 = ["any", 0, "landscape", "portrait", "portrait-primary", "portrait-secondary", "landscape-primary", "landscape-secondary"];
      var _0x5f5d14 = _0x16dce2[_0x497e31];
      screen.orientation.lock(_0x5f5d14).then(function () {
        if (_0x1ca074 != _0x497e31) {
          _0x29077f = setTimeout(_0x1d2725, 0);
        } else {
          _0x29077f = -1;
        }
      }).catch(function (_0x11529a) {
        _0x339557(_0x11529a);
        _0x29077f = -1;
      });
    }
    _0x1ca074 = _0xdc2e30;
    if (_0x29077f == -1 && _0xdc2e30 != _0x497e31) {
      _0x29077f = setTimeout(_0x1d2725, 0);
    }
  }
  var _0x111050 = {
    audioInstanceIdCounter: 0,
    audioInstances: {},
    audioContext: null,
    audioWebEnabled: 0,
    audioCache: [],
    pendingAudioSources: {}
  };
  function _0x3bdc18(_0x49cade) {
    _0x49cade.estimatePlaybackPosition = function () {
      var _0x3c32f2 = (_0x111050.audioContext.currentTime - _0x49cade.playbackStartTime) * _0x49cade.playbackRate.value;
      if (_0x49cade.loop && _0x3c32f2 >= _0x49cade.loopStart) {
        _0x3c32f2 = (_0x3c32f2 - _0x49cade.loopStart) % (_0x49cade.loopEnd - _0x49cade.loopStart) + _0x49cade.loopStart;
      }
      return _0x3c32f2;
    };
    _0x49cade.setPitch = function (_0x40735) {
      var _0x41555d = _0x49cade.estimatePlaybackPosition();
      if (_0x41555d >= 0) {
        _0x49cade.playbackStartTime = _0x111050.audioContext.currentTime - _0x41555d / _0x40735;
      }
      if (_0x49cade.playbackRate.value !== _0x40735) {
        _0x49cade.playbackRate.value = _0x40735;
      }
    };
  }
  function _0x27e165(_0xe3a7ab, _0x2b60d6) {
    var _0x36487a = {
      buffer: _0xe3a7ab,
      error: _0x2b60d6
    };
    _0x36487a.release = function () {};
    _0x36487a.getLength = function () {
      if (!this.buffer) {
        console.log("Trying to get length of sound which is not loaded.");
        return 0;
      }
      var _0x300311 = 44100 / this.buffer.sampleRate;
      return this.buffer.length * _0x300311;
    };
    _0x36487a.getData = function (_0x166e2f, _0x1d6c4d) {
      if (!this.buffer) {
        console.log("Trying to get data of sound which is not loaded.");
        return 0;
      }
      var _0x50dba9 = _0x166e2f >> 2;
      var _0x177aad = _0x3a6710.subarray(_0x50dba9, _0x50dba9 + (_0x1d6c4d >> 2));
      var _0x4bf864 = Math.floor((_0x1d6c4d >> 2) / this.buffer.numberOfChannels);
      var _0x49f0fd = Math.min(this.buffer.length, _0x4bf864);
      for (var _0x139175 = 0; _0x139175 < this.buffer.numberOfChannels; _0x139175++) {
        var _0x3ca66c = this.buffer.getChannelData(_0x139175).subarray(0, _0x49f0fd);
        _0x177aad.set(_0x3ca66c, _0x139175 * _0x49f0fd);
      }
      return _0x49f0fd * this.buffer.numberOfChannels * 4;
    };
    _0x36487a.getNumberOfChannels = function () {
      if (!this.buffer) {
        console.log("Trying to get metadata of sound which is not loaded.");
        return 0;
      }
      return this.buffer.numberOfChannels;
    };
    _0x36487a.getFrequency = function () {
      if (!this.buffer) {
        console.log("Trying to get metadata of sound which is not loaded.");
        return 0;
      }
      return this.buffer.sampleRate;
    };
    _0x36487a.createSourceNode = function () {
      if (!this.buffer) {
        console.log("Trying to play sound which is not loaded.");
      }
      var _0x3a8537 = _0x111050.audioContext.createBufferSource();
      _0x3a8537.buffer = this.buffer;
      _0x3bdc18(_0x3a8537);
      return _0x3a8537;
    };
    return _0x36487a;
  }
  function _0x205106(_0x311848, _0x5842cb) {
    var _0x29adf8 = {
      callback: _0x311848,
      userData: _0x5842cb,
      source: null,
      gain: _0x111050.audioContext.createGain(),
      panner: _0x111050.audioContext.createPanner(),
      threeD: false,
      loop: false,
      loopStart: 0,
      loopEnd: 0,
      pitch: 1
    };
    _0x29adf8.panner.rolloffFactor = 0;
    _0x29adf8.release = function () {
      this.disconnectSource();
      this.gain.disconnect();
      this.panner.disconnect();
    };
    _0x29adf8.playSoundClip = function (_0x4f0e30, _0x4247f5, _0x2b0c71) {
      try {
        var _0x1586b2 = this;
        this.source = _0x4f0e30.createSourceNode();
        this.setupPanning();
        this.source.onended = function () {
          _0x1586b2.source.isStopped = true;
          _0x1586b2.disconnectSource();
          if (_0x1586b2.callback) {
            _0x2a4250("vi", _0x1586b2.callback, [_0x1586b2.userData]);
          }
        };
        this.source.loop = this.loop;
        this.source.loopStart = this.loopStart;
        this.source.loopEnd = this.loopEnd;
        this.source.start(_0x4247f5, _0x2b0c71);
        this.source.playbackStartTime = _0x4247f5 - _0x2b0c71 / this.source.playbackRate.value;
        this.source.setPitch(this.pitch);
      } catch (_0x5d4231) {
        console.error("Channel.playSoundClip error. Exception: " + _0x5d4231);
      }
    };
    _0x29adf8.stop = function (_0x3d498c) {
      if (!this.source) {
        return;
      }
      try {
        _0x29adf8.source.stop(_0x111050.audioContext.currentTime + _0x3d498c);
      } catch (_0x16c23f) {}
      if (_0x3d498c == 0) {
        this.disconnectSource();
      }
    };
    _0x29adf8.isPaused = function () {
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
    _0x29adf8.pause = function () {
      if (!this.source || this.source.isPausedMockNode) {
        return;
      }
      if (this.source.mediaElement) {
        this.source._pauseMediaElement();
        return;
      }
      var _0x40b883 = {
        isPausedMockNode: true,
        buffer: this.source.buffer,
        loop: this.source.loop,
        loopStart: this.source.loopStart,
        loopEnd: this.source.loopEnd,
        playbackRate: this.source.playbackRate.value,
        scheduledStopTime: undefined,
        playbackPausedAtPosition: this.source.estimatePlaybackPosition(),
        setPitch: function (_0x2063f0) {
          this.playbackRate = _0x2063f0;
        },
        stop: function (_0xbd707a) {
          this.scheduledStopTime = _0xbd707a;
        }
      };
      this.stop(0);
      this.disconnectSource();
      this.source = _0x40b883;
    };
    _0x29adf8.resume = function () {
      if (this.source && this.source.mediaElement) {
        this.source.start(undefined, this.source.currentTime);
        return;
      }
      if (!this.source || !this.source.isPausedMockNode) {
        return;
      }
      var _0x2875a5 = this.source;
      var _0x79ec7 = _0x27e165(_0x2875a5.buffer, false);
      this.playSoundClip(_0x79ec7, _0x111050.audioContext.currentTime, Math.max(0, _0x2875a5.playbackPausedAtPosition));
      this.source.loop = _0x2875a5.loop;
      this.source.loopStart = _0x2875a5.loopStart;
      this.source.loopEnd = _0x2875a5.loopEnd;
      this.source.setPitch(_0x2875a5.playbackRate);
      if (typeof _0x2875a5.scheduledStopTime !== "undefined") {
        var _0x5c8474 = Math.max(_0x2875a5.scheduledStopTime - _0x111050.audioContext.currentTime, 0);
        this.stop(_0x5c8474);
      }
    };
    _0x29adf8.setLoop = function (_0x9fee9e) {
      this.loop = _0x9fee9e;
      if (!this.source || this.source.loop == _0x9fee9e) {
        return;
      }
      this.source.loop = _0x9fee9e;
    };
    _0x29adf8.setLoopPoints = function (_0x11678a, _0x5a23f6) {
      this.loopStart = _0x11678a;
      this.loopEnd = _0x5a23f6;
      if (!this.source) {
        return;
      }
      if (this.source.loopStart !== _0x11678a) {
        this.source.loopStart = _0x11678a;
      }
      if (this.source.loopEnd !== _0x5a23f6) {
        this.source.loopEnd = _0x5a23f6;
      }
    };
    _0x29adf8.set3D = function (_0x5938b5) {
      if (this.threeD == _0x5938b5) {
        return;
      }
      this.threeD = _0x5938b5;
      if (!this.source) {
        return;
      }
      this.setupPanning();
    };
    _0x29adf8.setPitch = function (_0x18102f) {
      this.pitch = _0x18102f;
      if (!this.source) {
        return;
      }
      this.source.setPitch(_0x18102f);
    };
    _0x29adf8.setVolume = function (_0x388d6d) {
      if (this.gain.gain.value == _0x388d6d) {
        return;
      }
      this.gain.gain.value = _0x388d6d;
    };
    _0x29adf8.setPosition = function (_0x4b6784, _0x43794f, _0x5e1206) {
      var _0x3286d4 = this.panner;
      if (_0x3286d4.positionX) {
        if (_0x3286d4.positionX.value !== _0x4b6784) {
          _0x3286d4.positionX.value = _0x4b6784;
        }
        if (_0x3286d4.positionY.value !== _0x43794f) {
          _0x3286d4.positionY.value = _0x43794f;
        }
        if (_0x3286d4.positionZ.value !== _0x5e1206) {
          _0x3286d4.positionZ.value = _0x5e1206;
        }
      } else if (_0x3286d4._x !== _0x4b6784 || _0x3286d4._y !== _0x43794f || _0x3286d4._z !== _0x5e1206) {
        _0x3286d4.setPosition(_0x4b6784, _0x43794f, _0x5e1206);
        _0x3286d4._x = _0x4b6784;
        _0x3286d4._y = _0x43794f;
        _0x3286d4._z = _0x5e1206;
      }
    };
    _0x29adf8.disconnectSource = function () {
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
    _0x29adf8.setupPanning = function () {
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
      this.gain.connect(_0x111050.audioContext.destination);
    };
    _0x29adf8.isStopped = function () {
      if (!this.source) {
        return true;
      }
      if (this.source.mediaElement) {
        return this.source.isStopped;
      }
      return false;
    };
    return _0x29adf8;
  }
  function _0x2741af(_0x53b880, _0x14f81e) {
    if (_0x111050.audioWebEnabled == 0) {
      return;
    }
    _0x111050.audioInstances[++_0x111050.audioInstanceIdCounter] = _0x205106(_0x53b880, _0x14f81e);
    return _0x111050.audioInstanceIdCounter;
  }
  function _0x6fe8bb(_0x37d756, _0xa9c82a, _0x5e5937) {
    if (_0x111050.audioWebEnabled == 0) {
      return 0;
    }
    var _0x13a1d2 = _0x111050.audioInstances[_0x37d756];
    if (!_0x13a1d2) {
      return 0;
    }
    return _0x13a1d2.getData(_0xa9c82a, _0x5e5937);
  }
  function _0x1fc23b(_0x2adf59) {
    if (_0x111050.audioWebEnabled == 0) {
      return 0;
    }
    var _0x4fa632 = _0x111050.audioInstances[_0x2adf59];
    if (!_0x4fa632) {
      return 0;
    }
    return _0x4fa632.getLength();
  }
  function _0x440440(_0x431353) {
    if (_0x111050.audioWebEnabled == 0) {
      return 2;
    }
    var _0x10e701 = _0x111050.audioInstances[_0x431353];
    if (_0x10e701.error) {
      return 2;
    }
    if (_0x10e701.buffer || _0x10e701.url) {
      return 0;
    }
    return 1;
  }
  function _0xb588dc(_0x23a3b8, _0x124d3a) {
    if (_0x111050.audioWebEnabled == 0) {
      _0x342aec[_0x124d3a >> 2] = 0;
      _0x342aec[(_0x124d3a >> 2) + 1] = 0;
      return false;
    }
    var _0x23a821 = _0x111050.audioInstances[_0x23a3b8];
    if (!_0x23a821) {
      _0x342aec[_0x124d3a >> 2] = 0;
      _0x342aec[(_0x124d3a >> 2) + 1] = 0;
      return false;
    }
    _0x342aec[_0x124d3a >> 2] = _0x23a821.getNumberOfChannels();
    _0x342aec[(_0x124d3a >> 2) + 1] = _0x23a821.getFrequency();
    return true;
  }
  function _0x591eeb(_0x11875f) {
    var _0x265f91 = _0x111050.pendingAudioSources[_0x11875f];
    _0x265f91.sourceNode._startPlayback(_0x265f91.offset);
    delete _0x111050.pendingAudioSources[_0x11875f];
  }
  function _0x43d688() {
    Object.keys(_0x111050.pendingAudioSources).forEach(function (_0x45b44c) {
      _0x591eeb(_0x45b44c);
    });
  }
  function _0x131437() {
    try {
      window.AudioContext = window.AudioContext || window.webkitAudioContext;
      _0x111050.audioContext = new AudioContext();
      var _0x2e8360 = function () {
        if (_0x111050.audioContext.state === "suspended") {
          _0x111050.audioContext.resume().catch(function (_0x2268ba) {
            console.warn("Could not resume audio context. Exception: " + _0x2268ba);
          });
        } else {
          _0x51dce1.clearInterval(_0xcf39ad);
        }
      };
      var _0xcf39ad = _0x51dce1.setInterval(_0x2e8360, 400);
      _0x111050.audioWebEnabled = 1;
      var _0x1f7c7f = function () {
        try {
          if (_0x111050.audioContext.state !== "running" && _0x111050.audioContext.state !== "closed") {
            _0x111050.audioContext.resume().catch(function (_0x2313da) {
              console.warn("Could not resume audio context. Exception: " + _0x2313da);
            });
          }
          _0x43d688();
          var _0x47731b = 20;
          while (_0x111050.audioCache.length < _0x47731b) {
            var _0x585cdb = new Audio();
            _0x585cdb.autoplay = false;
            _0x111050.audioCache.push(_0x585cdb);
          }
        } catch (_0x296fed) {}
      };
      window.addEventListener("mousedown", _0x1f7c7f);
      window.addEventListener("touchstart", _0x1f7c7f);
      _0x51dce1.deinitializers.push(function () {
        window.removeEventListener("mousedown", _0x1f7c7f);
        window.removeEventListener("touchstart", _0x1f7c7f);
      });
    } catch (_0x4129bc) {
      alert("Web Audio API is not supported in this browser");
    }
  }
  function _0x359600(_0x431c0c) {
    if (_0x111050.audioWebEnabled == 0) {
      return true;
    }
    var _0x4e15d9 = _0x111050.audioInstances[_0x431c0c];
    if (!_0x4e15d9) {
      return true;
    }
    return _0x4e15d9.isStopped();
  }
  function _0x5aa2de(_0x3a6ad7) {
    var _0x32d667 = _0x27e165(null, false);
    _0x111050.audioContext.decodeAudioData(_0x3a6ad7, function (_0x4e840f) {
      _0x32d667.buffer = _0x4e840f;
    }, function (_0xb5a455) {
      _0x32d667.error = true;
      console.log("Decode error: " + _0xb5a455);
    });
    return _0x32d667;
  }
  function _0xbccc93(_0x478a00, _0x2ec39e) {
    _0x111050.pendingAudioSources[_0x478a00.mediaElement.src] = {
      sourceNode: _0x478a00,
      offset: _0x2ec39e
    };
  }
  function _0x37a6f9(_0x26e53b) {
    switch (_0x26e53b) {
      case 13:
        return "audio/mpeg";
      case 20:
        return "audio/wav";
      default:
        return "audio/mp4";
    }
  }
  function _0x12ec2b(_0x34ba78, _0x336149) {
    var _0x4beeac = _0x37a6f9(_0x336149);
    var _0x4cdb5c = new Blob([_0x34ba78], {
      type: _0x4beeac
    });
    var _0x209146 = {
      url: URL.createObjectURL(_0x4cdb5c),
      error: false,
      mediaElement: new Audio()
    };
    _0x209146.mediaElement.preload = "metadata";
    _0x209146.mediaElement.src = _0x209146.url;
    _0x209146.release = function () {
      if (!this.mediaElement) {
        return;
      }
      this.mediaElement.src = "";
      URL.revokeObjectURL(this.url);
      delete this.mediaElement;
      delete this.url;
    };
    _0x209146.getLength = function () {
      return this.mediaElement.duration * 44100;
    };
    _0x209146.getData = function (_0x158e62, _0x49b29d) {
      console.warn("getData() is not supported for compressed sound.");
      return 0;
    };
    _0x209146.getNumberOfChannels = function () {
      console.warn("getNumberOfChannels() is not supported for compressed sound.");
      return 0;
    };
    _0x209146.getFrequency = function () {
      console.warn("getFrequency() is not supported for compressed sound.");
      return 0;
    };
    _0x209146.createSourceNode = function () {
      var _0x8b4ab2 = this;
      var _0x2485c7 = _0x111050.audioCache.length ? _0x111050.audioCache.pop() : new Audio();
      _0x2485c7.preload = "metadata";
      _0x2485c7.src = this.url;
      var _0x28fc71 = _0x111050.audioContext.createMediaElementSource(_0x2485c7);
      Object.defineProperty(_0x28fc71, "loop", {
        get: function () {
          return _0x28fc71.mediaElement.loop;
        },
        set: function (_0x2edda2) {
          if (_0x28fc71.mediaElement.loop !== _0x2edda2) {
            _0x28fc71.mediaElement.loop = _0x2edda2;
          }
        }
      });
      _0x28fc71.playbackRate = {};
      Object.defineProperty(_0x28fc71.playbackRate, "value", {
        get: function () {
          return _0x28fc71.mediaElement.playbackRate;
        },
        set: function (_0x1ca194) {
          if (_0x28fc71.mediaElement.playbackRate !== _0x1ca194) {
            _0x28fc71.mediaElement.playbackRate = _0x1ca194;
          }
        }
      });
      Object.defineProperty(_0x28fc71, "currentTime", {
        get: function () {
          return _0x28fc71.mediaElement.currentTime;
        },
        set: function (_0x32c2f5) {
          if (_0x28fc71.mediaElement.currentTime !== _0x32c2f5) {
            _0x28fc71.mediaElement.currentTime = _0x32c2f5;
          }
        }
      });
      Object.defineProperty(_0x28fc71, "mute", {
        get: function () {
          return _0x28fc71.mediaElement.mute;
        },
        set: function (_0x3bec81) {
          if (_0x28fc71.mediaElement.mute !== _0x3bec81) {
            _0x28fc71.mediaElement.mute = _0x3bec81;
          }
        }
      });
      Object.defineProperty(_0x28fc71, "onended", {
        get: function () {
          return _0x28fc71.mediaElement.onended;
        },
        set: function (_0x10f68b) {
          _0x28fc71.mediaElement.onended = _0x10f68b;
        }
      });
      _0x28fc71.playPromise = null;
      _0x28fc71.playTimeout = null;
      _0x28fc71.pauseRequested = false;
      _0x28fc71.isStopped = false;
      _0x28fc71._pauseMediaElement = function () {
        if (_0x28fc71.playPromise || _0x28fc71.playTimeout) {
          _0x28fc71.pauseRequested = true;
        } else {
          _0x28fc71.mediaElement.pause();
        }
      };
      _0x28fc71._startPlayback = function (_0x26f5ad) {
        if (_0x28fc71.playPromise || _0x28fc71.playTimeout) {
          _0x28fc71.mediaElement.currentTime = _0x26f5ad;
          _0x28fc71.pauseRequested = false;
          return;
        }
        _0x28fc71.mediaElement.currentTime = _0x26f5ad;
        _0x28fc71.playPromise = _0x28fc71.mediaElement.play();
        if (_0x28fc71.playPromise) {
          _0x28fc71.playPromise.then(function () {
            if (_0x28fc71.pauseRequested) {
              _0x28fc71.mediaElement.pause();
              _0x28fc71.pauseRequested = false;
            }
            _0x28fc71.playPromise = null;
          }).catch(function (_0x11ab70) {
            _0x28fc71.playPromise = null;
            if (_0x11ab70.name !== "NotAllowedError") {
              throw _0x11ab70;
            }
            _0xbccc93(_0x28fc71, _0x26f5ad);
          });
        }
      };
      _0x28fc71.start = function (_0x534833, _0x4d0e0c) {
        if (typeof _0x534833 === "undefined") {
          _0x534833 = _0x111050.audioContext.currentTime;
        }
        if (typeof _0x4d0e0c === "undefined") {
          _0x4d0e0c = 0;
        }
        var _0x113b5d = 4;
        var _0x58640a = (_0x534833 - _0x111050.audioContext.currentTime) * 1000;
        if (_0x58640a > _0x113b5d) {
          _0x28fc71.playTimeout = setTimeout(function () {
            _0x28fc71.playTimeout = null;
            _0x28fc71._startPlayback(_0x4d0e0c);
          }, _0x58640a);
        } else {
          _0x28fc71._startPlayback(_0x4d0e0c);
        }
      };
      _0x28fc71.stop = function (_0xb5b850) {
        if (typeof _0xb5b850 === "undefined") {
          _0xb5b850 = _0x111050.audioContext.currentTime;
        }
        var _0x1d447a = 4;
        var _0x5eb608 = (_0xb5b850 - _0x111050.audioContext.currentTime) * 1000;
        if (_0x5eb608 > _0x1d447a) {
          setTimeout(function () {
            _0x28fc71._pauseMediaElement();
            _0x28fc71.isStopped = true;
          }, _0x5eb608);
        } else {
          _0x28fc71._pauseMediaElement();
          _0x28fc71.isStopped = true;
        }
      };
      _0x3bdc18(_0x28fc71);
      return _0x28fc71;
    };
    return _0x209146;
  }
  function _0x5e7780(_0x1cc9c7, _0x436142, _0x2a7f45, _0x53f3a3) {
    if (_0x111050.audioWebEnabled == 0) {
      return 0;
    }
    var _0x1fb359 = _0x2c14c3.buffer.slice(_0x1cc9c7, _0x1cc9c7 + _0x436142);
    if (_0x436142 < 131072) {
      _0x2a7f45 = 1;
    }
    var _0x45e7af;
    if (_0x2a7f45) {
      _0x45e7af = _0x5aa2de(_0x1fb359);
    } else {
      _0x45e7af = _0x12ec2b(_0x1fb359, _0x53f3a3);
    }
    _0x111050.audioInstances[++_0x111050.audioInstanceIdCounter] = _0x45e7af;
    return _0x111050.audioInstanceIdCounter;
  }
  function _0x5a85fe(_0x2a74ed, _0x2f6d59, _0x3c0a83, _0x3666b6) {
    var _0x1e8714 = _0x111050.audioContext.createBuffer(_0x2a74ed, _0x2f6d59, _0x3c0a83);
    for (var _0x1ef368 = 0; _0x1ef368 < _0x2a74ed; _0x1ef368++) {
      var _0x38e264 = (_0x3666b6 >> 2) + _0x2f6d59 * _0x1ef368;
      var _0x16f62e = _0x1e8714.copyToChannel || function (_0x50f1ac, _0x29cd65, _0x556809) {
        var _0x5cc1b1 = _0x50f1ac.subarray(0, Math.min(_0x50f1ac.length, this.length - (_0x556809 | 0)));
        this.getChannelData(_0x29cd65 | 0).set(_0x5cc1b1, _0x556809 | 0);
      };
      _0x16f62e.apply(_0x1e8714, [_0x3a6710.subarray(_0x38e264, _0x38e264 + _0x2f6d59), _0x1ef368, 0]);
    }
    return _0x27e165(_0x1e8714, false);
  }
  function _0x10dc04(_0x3d2607, _0x42ba74, _0x2a62a5, _0x406143) {
    if (_0x111050.audioWebEnabled == 0) {
      return 0;
    }
    var _0x778ff4 = _0x5a85fe(_0x3d2607, _0x42ba74, _0x2a62a5, _0x406143);
    _0x111050.audioInstances[++_0x111050.audioInstanceIdCounter] = _0x778ff4;
    return _0x111050.audioInstanceIdCounter;
  }
  function _0x26aef5(_0x1da82f, _0x371001, _0x42971d, _0x5296c8) {
    if (_0x111050.audioWebEnabled == 0) {
      return;
    }
    _0x59e753(_0x371001, 0);
    var _0x51d0e5 = _0x111050.audioInstances[_0x1da82f];
    var _0x29dc5d = _0x111050.audioInstances[_0x371001];
    if (!_0x51d0e5) {
      console.log("Trying to play sound which is not loaded.");
      return;
    }
    try {
      _0x29dc5d.playSoundClip(_0x51d0e5, _0x111050.audioContext.currentTime + _0x5296c8, _0x42971d);
    } catch (_0xb0d9e) {
      console.error("playSoundClip error. Exception: " + e);
    }
  }
  function _0x147ad0(_0x19b408) {
    var _0x572754 = _0x111050.audioInstances[_0x19b408];
    if (_0x572754) {
      _0x572754.release();
    }
    delete _0x111050.audioInstances[_0x19b408];
  }
  function _0x2a7295() {
    if (_0x111050.audioWebEnabled == 0) {
      return;
    }
    if (_0x111050.audioContext.state === "suspended") {
      _0x111050.audioContext.resume().catch(function (_0x59ed37) {
        console.warn("Could not resume audio context. Exception: " + _0x59ed37);
      });
    }
  }
  function _0x364450(_0x6b478c, _0x4d921d) {
    var _0x419466 = _0x111050.audioInstances[_0x6b478c];
    _0x419466.set3D(_0x4d921d);
  }
  function _0x59d4e3(_0x13f443, _0x585cef, _0x17148b, _0xc41732, _0x6358bf, _0x5d8fd0) {
    if (_0x111050.audioWebEnabled == 0) {
      return;
    }
    _0x13f443 = -_0x13f443;
    _0x585cef = -_0x585cef;
    _0x17148b = -_0x17148b;
    var _0x4dd10f = _0x111050.audioContext.listener;
    if (_0x4dd10f.forwardX) {
      if (_0x4dd10f.forwardX.value !== _0x13f443) {
        _0x4dd10f.forwardX.value = _0x13f443;
      }
      if (_0x4dd10f.forwardY.value !== _0x585cef) {
        _0x4dd10f.forwardY.value = _0x585cef;
      }
      if (_0x4dd10f.forwardZ.value !== _0x17148b) {
        _0x4dd10f.forwardZ.value = _0x17148b;
      }
      if (_0x4dd10f.upX.value !== _0xc41732) {
        _0x4dd10f.upX.value = _0xc41732;
      }
      if (_0x4dd10f.upY.value !== _0x6358bf) {
        _0x4dd10f.upY.value = _0x6358bf;
      }
      if (_0x4dd10f.upZ.value !== _0x5d8fd0) {
        _0x4dd10f.upZ.value = _0x5d8fd0;
      }
    } else if (_0x4dd10f._forwardX !== _0x13f443 || _0x4dd10f._forwardY !== _0x585cef || _0x4dd10f._forwardZ !== _0x17148b || _0x4dd10f._upX !== _0xc41732 || _0x4dd10f._upY !== _0x6358bf || _0x4dd10f._upZ !== _0x5d8fd0) {
      _0x4dd10f.setOrientation(_0x13f443, _0x585cef, _0x17148b, _0xc41732, _0x6358bf, _0x5d8fd0);
      _0x4dd10f._forwardX = _0x13f443;
      _0x4dd10f._forwardY = _0x585cef;
      _0x4dd10f._forwardZ = _0x17148b;
      _0x4dd10f._upX = _0xc41732;
      _0x4dd10f._upY = _0x6358bf;
      _0x4dd10f._upZ = _0x5d8fd0;
    }
  }
  function _0x660ac9(_0x372fed, _0x2cabc6, _0x11c778) {
    if (_0x111050.audioWebEnabled == 0) {
      return;
    }
    var _0xf4d1d = _0x111050.audioContext.listener;
    if (_0xf4d1d.positionX) {
      if (_0xf4d1d.positionX.value !== _0x372fed) {
        _0xf4d1d.positionX.value = _0x372fed;
      }
      if (_0xf4d1d.positionY.value !== _0x2cabc6) {
        _0xf4d1d.positionY.value = _0x2cabc6;
      }
      if (_0xf4d1d.positionZ.value !== _0x11c778) {
        _0xf4d1d.positionZ.value = _0x11c778;
      }
    } else if (_0xf4d1d._positionX !== _0x372fed || _0xf4d1d._positionY !== _0x2cabc6 || _0xf4d1d._positionZ !== _0x11c778) {
      _0xf4d1d.setPosition(_0x372fed, _0x2cabc6, _0x11c778);
      _0xf4d1d._positionX = _0x372fed;
      _0xf4d1d._positionY = _0x2cabc6;
      _0xf4d1d._positionZ = _0x11c778;
    }
  }
  function _0x3923b8(_0x295c81, _0x3a87b8) {
    if (_0x111050.audioWebEnabled == 0) {
      return;
    }
    var _0x3cd446 = _0x111050.audioInstances[_0x295c81];
    _0x3cd446.setLoop(_0x3a87b8);
  }
  function _0x3af099(_0x57dc2f, _0x2eef02, _0xcbe624) {
    if (_0x111050.audioWebEnabled == 0) {
      return;
    }
    var _0x55937c = _0x111050.audioInstances[_0x57dc2f];
    _0x55937c.setLoopPoints(_0x2eef02, _0xcbe624);
  }
  function _0x50ec34(_0x599a16, _0x296230) {
    if (_0x111050.audioWebEnabled == 0) {
      return;
    }
    var _0x54c7d8 = _0x111050.audioInstances[_0x599a16];
    if (_0x296230 != _0x54c7d8.isPaused()) {
      if (_0x296230) {
        _0x54c7d8.pause();
      } else {
        _0x54c7d8.resume();
      }
    }
  }
  function _0xcfc024(_0x5090b6, _0x445f92) {
    if (_0x111050.audioWebEnabled == 0) {
      return;
    }
    try {
      var _0x15f8f3 = _0x111050.audioInstances[_0x5090b6];
      _0x15f8f3.setPitch(_0x445f92);
    } catch (_0x5539c9) {
      console.error("JS_Sound_SetPitch(channel=" + _0x5090b6 + ", pitch=" + _0x445f92 + ") threw an exception: " + _0x5539c9);
    }
  }
  function _0x2dbf94(_0x51ec62, _0x368b86, _0x590066, _0x22f2a8) {
    if (_0x111050.audioWebEnabled == 0) {
      return;
    }
    var _0x31e850 = _0x111050.audioInstances[_0x51ec62];
    _0x31e850.setPosition(_0x368b86, _0x590066, _0x22f2a8);
  }
  function _0x45802e(_0xf23e94, _0x2a0c52) {
    if (_0x111050.audioWebEnabled == 0) {
      return;
    }
    try {
      var _0x2d8a48 = _0x111050.audioInstances[_0xf23e94];
      _0x2d8a48.setVolume(_0x2a0c52);
    } catch (_0x1e7d4d) {
      console.error("JS_Sound_SetVolume(channel=" + _0xf23e94 + ", volume=" + _0x2a0c52 + ") threw an exception: " + _0x1e7d4d);
    }
  }
  function _0x59e753(_0x2d92bd, _0x3cadfb) {
    if (_0x111050.audioWebEnabled == 0) {
      return;
    }
    var _0x5b5498 = _0x111050.audioInstances[_0x2d92bd];
    _0x5b5498.stop(_0x3cadfb);
  }
  function _0x4cb24c(_0x50a0b0, _0x40342a) {
    var _0x5cf236 = _0x51dce1.SystemInfo.browser;
    if (_0x50a0b0) {
      _0x38fbc9(_0x5cf236, _0x50a0b0, _0x40342a);
    }
    return _0x55b306(_0x5cf236);
  }
  function _0x40cb63(_0x2ba865, _0x2dfea7) {
    var _0x5c6b49 = _0x51dce1.SystemInfo.browserVersion;
    if (_0x2ba865) {
      _0x38fbc9(_0x5c6b49, _0x2ba865, _0x2dfea7);
    }
    return _0x55b306(_0x5c6b49);
  }
  function _0xe0b40c(_0x3e922d, _0x46b2e5, _0x50f423) {
    var _0x3efbcd = _0x5ea6bb(_0x3e922d);
    var _0x173096 = _0x3efbcd == "#canvas" ? _0x51dce1.canvas : document.querySelector(_0x3efbcd);
    var _0x2b44cf = 0;
    var _0x1c1594 = 0;
    if (_0x173096) {
      var _0x2b8fe9 = _0x173096.getBoundingClientRect();
      _0x2b44cf = _0x2b8fe9.width;
      _0x1c1594 = _0x2b8fe9.height;
    }
    _0x36c943[_0x46b2e5 >> 3] = _0x2b44cf;
    _0x36c943[_0x50f423 >> 3] = _0x1c1594;
  }
  function _0x2d31cf(_0x2d6ae2, _0x2afea2) {
    if (_0x2d6ae2) {
      _0x38fbc9("https://gamea.azgame.io", _0x2d6ae2, _0x2afea2);
    }
    return _0x55b306("https://gamea.azgame.io");
  }
  function _0x42773a(_0x3e1c27, _0x4aebb7) {
    var _0x128051 = _0x51dce1.SystemInfo.gpu;
    if (_0x3e1c27) {
      _0x38fbc9(_0x128051, _0x3e1c27, _0x4aebb7);
    }
    return _0x55b306(_0x128051);
  }
  function _0x1d9804(_0x4ce883, _0x329759) {
    var _0x1c3cdd = _0x51dce1.SystemInfo.language;
    if (_0x4ce883) {
      _0x38fbc9(_0x1c3cdd, _0x4ce883, _0x329759);
    }
    return _0x55b306(_0x1c3cdd);
  }
  function _0x1398dd() {
    return _0x51dce1.matchWebGLToCanvasSize || _0x51dce1.matchWebGLToCanvasSize === undefined;
  }
  function _0x5bef26() {
    return _0x2c14c3.length / 1048576;
  }
  function _0x383dd1(_0x256e5d, _0x31b4c1) {
    var _0xe4b529 = _0x51dce1.SystemInfo.os + " " + _0x51dce1.SystemInfo.osVersion;
    if (_0x256e5d) {
      _0x38fbc9(_0xe4b529, _0x256e5d, _0x31b4c1);
    }
    return _0x55b306(_0xe4b529);
  }
  function _0x5f4d7c() {
    if (_0x51dce1.matchWebGLToCanvasSize == false) {
      return 1;
    } else {
      return _0x51dce1.devicePixelRatio || window.devicePixelRatio || 1;
    }
  }
  function _0x2029d8(_0xde72fd, _0x4259cd) {
    _0x36c943[_0xde72fd >> 3] = _0x51dce1.SystemInfo.width;
    _0x36c943[_0x4259cd >> 3] = _0x51dce1.SystemInfo.height;
  }
  function _0x20d9e9(_0x33320a, _0x475063) {
    if (_0x33320a) {
      _0x38fbc9(_0x51dce1.streamingAssetsUrl, _0x33320a, _0x475063);
    }
    return _0x55b306(_0x51dce1.streamingAssetsUrl);
  }
  function _0x4aab76() {
    var _0x22c216 = _0x1df95f.getExtension("WEBGL_compressed_texture_astc");
    if (_0x22c216 && _0x22c216.getSupportedProfiles) {
      return _0x22c216.getSupportedProfiles().includes("hdr");
    }
    return false;
  }
  function _0x779daa() {
    return _0x51dce1.SystemInfo.hasCursorLock;
  }
  function _0x211898() {
    return _0x51dce1.SystemInfo.hasFullscreen;
  }
  function _0x5bb685() {
    return _0x51dce1.SystemInfo.hasWebGL;
  }
  function _0x5dbf2a() {
    return _0x51dce1.SystemInfo.mobile;
  }
  function _0x1736bd() {
    return !!_0x51dce1.shouldQuit;
  }
  var _0x5d90c9 = {};
  var _0x27081 = [];
  var _0x49aa91 = [];
  function _0x4b458b(_0x5d39af) {
    _0x5d39af = _0x5ea6bb(_0x5d39af);
    if (_0x27081.indexOf(_0x5d39af) != -1) {
      return true;
    }
    if (_0x49aa91.indexOf(_0x5d39af) != -1) {
      return false;
    }
    var _0x2ef04b = document.createElement("video");
    var _0x35401d = _0x2ef04b.canPlayType(_0x5d39af);
    if (_0x35401d) {
      _0x27081.push(_0x5d39af);
    } else {
      _0x49aa91.push(_0x5d39af);
    }
    return !!_0x35401d;
  }
  var _0x23a795 = 0;
  function _0x3d96c8() {
    if (this.onendedCallback) {
      _0x53a2c3(this.onendedCallback, this.onendedRef);
    }
  }
  var _0x319069 = null;
  function _0x1c3f0e(_0x5cf46c) {
    var _0x1276c3 = _0x5ea6bb(_0x5cf46c);
    var _0x3b6762 = document.createElement("video");
    _0x3b6762.style.display = "none";
    _0x3b6762.src = _0x1276c3;
    _0x3b6762.muted = true;
    _0x3b6762.setAttribute("muted", "");
    _0x3b6762.setAttribute("playsinline", "");
    _0x3b6762.crossOrigin = "anonymous";
    _0x5d90c9[++_0x23a795] = _0x3b6762;
    if (_0x319069 == null) {
      _0x319069 = _0x51dce1.SystemInfo.browser == "Chrome" || _0x51dce1.SystemInfo.browser == "Edge";
    }
    return _0x23a795;
  }
  var _0x1ac76b = {};
  function _0x34047a(_0x28d4de) {
    _0x1ac76b[_0x28d4de].play().then(function () {
      _0x42e4a7(_0x28d4de);
    });
  }
  function _0x15b39a() {
    for (var _0x58953f in _0x1ac76b) {
      if (_0x1ac76b.hasOwnProperty(_0x58953f)) {
        _0x34047a(_0x58953f);
      }
    }
  }
  function _0x42e4a7(_0x61568c) {
    delete _0x1ac76b[_0x61568c];
    if (Object.keys(_0x1ac76b).length == 0) {
      window.removeEventListener("mousedown", _0x15b39a);
    }
  }
  function _0x5f04dd(_0x2b5061) {
    var _0x2eec6f = _0x5d90c9[_0x2b5061];
    if (_0x2eec6f.loopEndPollInterval) {
      clearInterval(_0x2eec6f.loopEndPollInterval);
    }
    _0x42e4a7(_0x2b5061);
    _0x2eec6f.src = "";
    delete _0x2eec6f.onendedCallback;
    _0x2eec6f.onended = _0x2eec6f.onerror = _0x2eec6f.oncanplay = _0x2eec6f.onseeked = null;
    delete _0x5d90c9[_0x2b5061];
  }
  function _0x30012b(_0x5efcc3) {
    return _0x5d90c9[_0x5efcc3].duration;
  }
  function _0x52b9d0(_0x1ec159, _0x190900, _0x24843a) {
    var _0x2ecde6 = _0x5d90c9[_0x1ec159];
    if (!_0x2ecde6.enabledTracks) {
      _0x2ecde6.enabledTracks = [];
    }
    while (_0x2ecde6.enabledTracks.length <= _0x190900) {
      _0x2ecde6.enabledTracks.push(true);
    }
    _0x2ecde6.enabledTracks[_0x190900] = _0x24843a;
    var _0x5317a4 = _0x2ecde6.audioTracks;
    if (!_0x5317a4) {
      return;
    }
    var _0x260678 = _0x5317a4[_0x190900];
    if (_0x260678) {
      _0x260678.enabled = _0x24843a ? true : false;
    }
  }
  function _0xd00c01(_0x405974, _0xca8fec) {
    var _0xeda7f = _0x5d90c9[_0x405974].audioTracks;
    if (!_0xeda7f) {
      return "";
    }
    var _0x4ee2db = _0xeda7f[_0xca8fec];
    if (_0x4ee2db) {
      return _0x4ee2db.language;
    } else {
      return "";
    }
  }
  function _0x1da63e(_0x4eccd7) {
    var _0x3d0c8e = _0x5d90c9[_0x4eccd7].audioTracks;
    if (_0x3d0c8e) {
      return _0x3d0c8e.length;
    } else {
      return 1;
    }
  }
  function _0x263052(_0x503aad) {
    return _0x5d90c9[_0x503aad].videoHeight;
  }
  function _0x146de3(_0x535772) {
    var _0x5b3d67 = _0x5d90c9[_0x535772];
    return !_0x5b3d67.paused && !_0x5b3d67.ended;
  }
  function _0xb97de0(_0x4ae78f) {
    var _0x10dd3b = _0x5d90c9[_0x4ae78f];
    var _0x1bba0c = /(iPhone|iPad)/i.test(navigator.userAgent) ? _0x10dd3b.HAVE_METADATA : _0x10dd3b.HAVE_ENOUGH_DATA;
    if (!_0x10dd3b.isReady && _0x10dd3b.readyState >= _0x1bba0c) {
      _0x10dd3b.isReady = true;
    }
    return _0x10dd3b.isReady;
  }
  function _0xb08a06(_0x2aa884) {
    var _0x3ba22b = _0x5d90c9[_0x2aa884];
    _0x3ba22b.pause();
    _0x42e4a7(_0x2aa884);
    if (_0x3ba22b.loopEndPollInterval) {
      clearInterval(_0x3ba22b.loopEndPollInterval);
    }
  }
  function _0x2d272b(_0x68a61f, _0xe1e677) {
    var _0x5b3ddb = _0x5d90c9[_0x68a61f];
    if (_0x5b3ddb.loopEndPollInterval) {
      clearInterval(_0x5b3ddb.loopEndPollInterval);
    }
    _0x5b3ddb.loop = _0xe1e677;
    if (_0xe1e677) {
      _0x5b3ddb.loopEndPollInterval = setInterval(function () {
        var _0x925661 = _0x5b3ddb.currentTime;
        var _0x5f1380 = _0x5b3ddb.lastSeenPlaybackTime;
        if (_0x925661 < _0x5f1380) {
          var _0x25ba7b = _0x5b3ddb.duration;
          var _0xed44ed = 0.2;
          var _0x421d40 = _0xed44ed * _0x25ba7b;
          var _0x56f0d8 = _0x25ba7b - _0x421d40;
          if (_0x925661 < _0x421d40 && _0x5f1380 > _0x56f0d8) {
            _0x3d96c8.apply(_0x5b3ddb);
          }
        }
        _0x5b3ddb.lastSeenPlaybackTime = _0x5b3ddb.currentTime;
      }, 1000 / 30);
      _0x5b3ddb.lastSeenPlaybackTime = _0x5b3ddb.currentTime;
      _0x5b3ddb.onended = null;
    } else {
      _0x5b3ddb.onended = _0x3d96c8;
    }
  }
  function _0x21b9ef(_0x36d4bd) {
    if (!_0x36d4bd.enabledTracks) {
      return false;
    }
    for (var _0x5433c1 = 0; _0x5433c1 < _0x36d4bd.enabledTracks.length; ++_0x5433c1) {
      if (_0x36d4bd.enabledTracks[_0x5433c1]) {
        return false;
      }
    }
    return true;
  }
  function _0xc0f439(_0xcc7749, _0x4b59b5) {
    if (Object.keys(_0x1ac76b).length == 0) {
      window.addEventListener("mousedown", _0x15b39a);
    }
    _0x1ac76b[_0xcc7749] = _0x4b59b5;
  }
  function _0x499d4b(_0x1a526b, _0x55812a) {
    var _0x1b4e4b = _0x5d90c9[_0x1a526b];
    _0x1b4e4b.muted = _0x55812a || _0x21b9ef(_0x1b4e4b);
    var _0x3a5a17 = _0x1b4e4b.play();
    if (_0x3a5a17) {
      _0x3a5a17.catch(function (_0x460c45) {
        if (_0x460c45.name == "NotAllowedError") {
          _0xc0f439(_0x1a526b, _0x1b4e4b);
        }
      });
    }
    _0x2d272b(_0x1a526b, _0x1b4e4b.loop);
  }
  function _0x290396(_0x3f2985, _0x19e258) {
    var _0x29515f = _0x5d90c9[_0x3f2985];
    _0x29515f.lastSeenPlaybackTime = _0x29515f.currentTime = _0x19e258;
  }
  function _0x35abcd(_0x13f57d, _0x27cd4e, _0x28ed80) {
    var _0x11559d = _0x5d90c9[_0x13f57d];
    _0x11559d.onendedCallback = _0x28ed80;
    _0x11559d.onendedRef = _0x27cd4e;
  }
  function _0x509e67(_0x33a709, _0x1e056b, _0x2fe06f) {
    _0x5d90c9[_0x33a709].onerror = function (_0x2a5827) {
      _0x234acb(_0x2fe06f, _0x1e056b, _0x2a5827.target.error.code);
    };
  }
  function _0x11df48(_0x1e7dbc, _0x5b0f1f) {
    var _0x528de3 = _0x5d90c9[_0x1e7dbc];
    _0x528de3.muted = _0x5b0f1f || _0x21b9ef(_0x528de3);
  }
  function _0x313c7d(_0x9636f6, _0x342797) {
    _0x5d90c9[_0x9636f6].playbackRate = _0x342797;
  }
  function _0x4f959c(_0x3e80f8, _0x22d954, _0x5d00de) {
    _0x5d90c9[_0x3e80f8].oncanplay = function () {
      _0x53a2c3(_0x5d00de, _0x22d954);
    };
  }
  function _0xdbbf48(_0x1ba6c0, _0x1623c1, _0x572a34) {
    _0x5d90c9[_0x1ba6c0].onseeked = function () {
      var _0x3029c8 = _0x5d90c9[_0x1ba6c0];
      _0x3029c8.lastUpdateTextureTime = null;
      _0x53a2c3(_0x572a34, _0x1623c1);
    };
  }
  function _0x18c4a4(_0x3f661a, _0xed5d04) {
    _0x5d90c9[_0x3f661a].volume = _0xed5d04;
  }
  function _0x2060d1(_0x5348e7) {
    return _0x5d90c9[_0x5348e7].currentTime;
  }
  function _0x744689() {
    var _0x1dfed0 = _0x1df95f.createTexture();
    _0x1df95f.bindTexture(_0x1df95f.TEXTURE_2D, _0x1dfed0);
    _0x1df95f.texParameteri(_0x1df95f.TEXTURE_2D, _0x1df95f.TEXTURE_WRAP_S, _0x1df95f.CLAMP_TO_EDGE);
    _0x1df95f.texParameteri(_0x1df95f.TEXTURE_2D, _0x1df95f.TEXTURE_WRAP_T, _0x1df95f.CLAMP_TO_EDGE);
    _0x1df95f.texParameteri(_0x1df95f.TEXTURE_2D, _0x1df95f.TEXTURE_MIN_FILTER, _0x1df95f.LINEAR);
    return _0x1dfed0;
  }
  var _0x38081b = null;
  var _0x45fccb = null;
  var _0x8bb28d = null;
  var _0x515e88 = null;
  var _0x1a7d0e = null;
  function _0x52eaf9(_0x21472c, _0x2024a1, _0x1765c5) {
    var _0x440f5c = _0x5d90c9[_0x21472c];
    if (!(_0x440f5c.videoWidth > 0) || !(_0x440f5c.videoHeight > 0)) {
      return false;
    }
    if (_0x440f5c.lastUpdateTextureTime === _0x440f5c.currentTime) {
      return false;
    }
    if (_0x440f5c.seeking) {
      return false;
    }
    _0x440f5c.lastUpdateTextureTime = _0x440f5c.currentTime;
    _0x1df95f.pixelStorei(_0x1df95f.UNPACK_FLIP_Y_WEBGL, true);
    var _0x506252 = _0x1765c5 ? _0x319069 ? _0x1df95f.RGBA : _0x1df95f.RGB : _0x1df95f.RGBA;
    var _0x307f81 = _0x1765c5 ? _0x319069 ? _0x1df95f.RGBA : _0x1df95f.RGB : _0x1df95f.RGBA;
    if (_0x440f5c.previousUploadedWidth != _0x440f5c.videoWidth || _0x440f5c.previousUploadedHeight != _0x440f5c.videoHeight) {
      _0x1df95f.deleteTexture(_0x166a8d.textures[_0x2024a1]);
      var _0x4fd91f = _0x744689();
      _0x4fd91f.name = _0x2024a1;
      _0x166a8d.textures[_0x2024a1] = _0x4fd91f;
      _0x440f5c.previousUploadedWidth = _0x440f5c.videoWidth;
      _0x440f5c.previousUploadedHeight = _0x440f5c.videoHeight;
      if (_0x1765c5) {
        _0x1df95f.texImage2D(_0x1df95f.TEXTURE_2D, 0, _0x506252, _0x440f5c.videoWidth, _0x440f5c.videoHeight, 0, _0x307f81, _0x1df95f.UNSIGNED_BYTE, null);
        if (!_0x38081b) {
          _0x38081b = _0x744689();
        } else {
          _0x1df95f.bindTexture(_0x1df95f.TEXTURE_2D, _0x38081b);
        }
      }
      _0x1df95f.texImage2D(_0x1df95f.TEXTURE_2D, 0, _0x506252, _0x307f81, _0x1df95f.UNSIGNED_BYTE, _0x440f5c);
    } else {
      if (_0x1765c5) {
        if (!_0x38081b) {
          _0x38081b = _0x744689();
        } else {
          _0x1df95f.bindTexture(_0x1df95f.TEXTURE_2D, _0x38081b);
        }
      } else {
        _0x1df95f.bindTexture(_0x1df95f.TEXTURE_2D, _0x166a8d.textures[_0x2024a1]);
      }
      _0x1df95f.texImage2D(_0x1df95f.TEXTURE_2D, 0, _0x506252, _0x307f81, _0x1df95f.UNSIGNED_BYTE, _0x440f5c);
    }
    _0x1df95f.pixelStorei(_0x1df95f.UNPACK_FLIP_Y_WEBGL, false);
    if (_0x1765c5) {
      if (_0x515e88 == null) {
        var _0x51aa19 = "precision lowp float;\n  \t\t\t\tattribute vec2 vertexPositionNDC;\n  \t\t\t\tvarying vec2 vTexCoords;\n  \t\t\t\tconst vec2 scale = vec2(0.5, 0.5);\n  \t\t\t\tvoid main() {\n  \t\t\t\t    vTexCoords = vertexPositionNDC * scale + scale; // scale vertex attribute to [0,1] range\n  \t\t\t\t    gl_Position = vec4(vertexPositionNDC, 0.0, 1.0);\n  \t\t\t\t}";
        var _0x46d45a = "precision mediump float;\n  \t\t\t\tuniform sampler2D colorMap;\n  \t\t\t\tvarying vec2 vTexCoords;\n  \t\t\t\tvec4 toLinear(vec4 sRGB) {\n  \t\t\t\t    vec3 c = sRGB.rgb;\n  \t\t\t\t    return vec4(c * (c * (c * 0.305306011 + 0.682171111) + 0.012522878), sRGB.a);\n  \t\t\t\t}\n  \t\t\t\tvoid main() {\n  \t\t\t\t    gl_FragColor = toLinear(texture2D(colorMap, vTexCoords));\n  \t\t\t\t}";
        var _0x8f6d8 = _0x1df95f.createShader(_0x1df95f.VERTEX_SHADER);
        _0x1df95f.shaderSource(_0x8f6d8, _0x51aa19);
        _0x1df95f.compileShader(_0x8f6d8);
        var _0x1c5ded = _0x1df95f.createShader(_0x1df95f.FRAGMENT_SHADER);
        _0x1df95f.shaderSource(_0x1c5ded, _0x46d45a);
        _0x1df95f.compileShader(_0x1c5ded);
        _0x515e88 = _0x1df95f.createProgram();
        _0x1df95f.attachShader(_0x515e88, _0x8f6d8);
        _0x1df95f.attachShader(_0x515e88, _0x1c5ded);
        _0x1df95f.linkProgram(_0x515e88);
        _0x1a7d0e = _0x1df95f.getAttribLocation(_0x515e88, "vertexPositionNDC");
      }
      if (_0x8bb28d == null) {
        _0x8bb28d = _0x1df95f.createBuffer();
        _0x1df95f.bindBuffer(_0x1df95f.ARRAY_BUFFER, _0x8bb28d);
        var _0x3943d3 = [1, 1, -1, 1, -1, -1, -1, -1, 1, -1, 1, 1];
        _0x1df95f.bufferData(_0x1df95f.ARRAY_BUFFER, new Float32Array(_0x3943d3), _0x1df95f.STATIC_DRAW);
      }
      if (!_0x45fccb) {
        _0x45fccb = _0x1df95f.createFramebuffer();
      }
      _0x1df95f.bindFramebuffer(_0x1df95f.FRAMEBUFFER, _0x45fccb);
      _0x1df95f.framebufferTexture2D(_0x1df95f.FRAMEBUFFER, _0x1df95f.COLOR_ATTACHMENT0, _0x1df95f.TEXTURE_2D, _0x166a8d.textures[_0x2024a1], 0);
      _0x1df95f.bindTexture(_0x1df95f.TEXTURE_2D, _0x38081b);
      _0x1df95f.viewport(0, 0, _0x440f5c.videoWidth, _0x440f5c.videoHeight);
      _0x1df95f.useProgram(_0x515e88);
      _0x1df95f.bindBuffer(_0x1df95f.ARRAY_BUFFER, _0x8bb28d);
      _0x1df95f.enableVertexAttribArray(_0x1a7d0e);
      _0x1df95f.vertexAttribPointer(_0x1a7d0e, 2, _0x1df95f.FLOAT, false, 0, 0);
      _0x1df95f.drawArrays(_0x1df95f.TRIANGLES, 0, 6);
      _0x1df95f.viewport(0, 0, _0x1df95f.canvas.width, _0x1df95f.canvas.height);
      _0x1df95f.bindFramebuffer(_0x1df95f.FRAMEBUFFER, null);
    }
    return true;
  }
  function _0x51655e(_0x2898bd) {
    return _0x5d90c9[_0x2898bd].videoWidth;
  }
  var _0x40817f = {};
  function _0x51b658(_0x5172c3) {
    var _0xb08293 = _0x40817f[_0x5172c3];
    return _0xb08293 && _0xb08293.video.videoWidth > 0 && _0xb08293.video.videoHeight > 0;
  }
  function _0x133f37(_0x5d7b8c, _0x33bc44, _0x4f8837) {
    var _0x5e2b3a = _0x2dfbfd[_0x5d7b8c];
    var _0x3b7bb3 = _0x5e2b3a ? _0x5e2b3a.name : "(disconnected input #" + (_0x5d7b8c + 1) + ")";
    if (_0x33bc44) {
      _0x38fbc9(_0x3b7bb3, _0x33bc44, _0x4f8837);
    }
    return _0x55b306(_0x3b7bb3);
  }
  function _0x3ead4a(_0x4256f1) {
    return _0x40817f[_0x4256f1] && _0x40817f[_0x4256f1].video.videoHeight;
  }
  function _0x308d6e(_0x196956) {
    return _0x40817f[_0x196956] && _0x40817f[_0x196956].video.videoWidth;
  }
  function _0x2526a8() {
    var _0x1ed02d = 0;
    if (!_0x10c955) {
      console.warn("WebCam devices were used before being enumerated by the browser. The browser is likely pausing WebCam device enumeration due to the page being out of focus while the Unity application is being loaded in the background.\nIf you are a developer, you can ensure WebCam devices are enumerated by first requiring user interaction.\nSee https://github.com/w3c/mediacapture-main/issues/905 for details.");
      return _0x1ed02d;
    }
    Object.keys(_0x2dfbfd).forEach(function (_0x486a04) {
      _0x1ed02d = Math.max(_0x1ed02d, _0x2dfbfd[_0x486a04].id + 1);
    });
    return _0x1ed02d;
  }
  function _0x5402a8(_0x1c5719, _0x5dfec9, _0x535df1, _0x390085) {
    var _0x135fb2 = _0x40817f[_0x1c5719];
    if (!_0x135fb2) {
      return;
    }
    var _0x4bb7a3 = performance.now();
    if (_0x4bb7a3 < _0x135fb2.nextFrameAvailableTime) {
      return;
    }
    _0x135fb2.nextFrameAvailableTime += _0x135fb2.frameLengthInMsecs;
    if (_0x135fb2.nextFrameAvailableTime < _0x4bb7a3) {
      _0x135fb2.nextFrameAvailableTime = _0x4bb7a3 + _0x135fb2.frameLengthInMsecs;
    }
    var _0x2aea3a = _0x135fb2.canvas;
    if (_0x2aea3a.width != _0x535df1 || _0x2aea3a.height != _0x390085 || !_0x135fb2.context2d) {
      _0x2aea3a.width = _0x535df1;
      _0x2aea3a.height = _0x390085;
      _0x135fb2.context2d = _0x2aea3a.getContext("2d");
    }
    var _0x302d36 = _0x135fb2.context2d;
    _0x302d36.drawImage(_0x135fb2.video, 0, 0, _0x135fb2.video.videoWidth, _0x135fb2.video.videoHeight, 0, 0, _0x535df1, _0x390085);
    _0x2c14c3.set(_0x302d36.getImageData(0, 0, _0x535df1, _0x390085).data, _0x5dfec9);
    return 1;
  }
  function _0x110f4d(_0x533630) {
    return _0x2dfbfd[_0x533630].isFrontFacing;
  }
  function _0x1459d0(_0x539593) {
    if (_0x40817f[_0x539593]) {
      ++_0x40817f[_0x539593].refCount;
      return;
    }
    if (!_0x2dfbfd[_0x539593]) {
      console.error("Cannot start video input with ID " + _0x539593 + ". No such ID exists! Existing video inputs are:");
      console.dir(_0x2dfbfd);
      return;
    }
    navigator.mediaDevices.getUserMedia({
      audio: false,
      video: _0x2dfbfd[_0x539593].deviceId ? {
        deviceId: {
          exact: _0x2dfbfd[_0x539593].deviceId
        }
      } : true
    }).then(function (_0x534efe) {
      var _0x33a0eb = document.createElement("video");
      _0x33a0eb.srcObject = _0x534efe;
      if (/(iPhone|iPad|iPod)/.test(navigator.userAgent)) {
        _0x339557("Applying iOS Safari specific workaround to video playback: https://bugs.webkit.org/show_bug.cgi?id=217578");
        _0x33a0eb.setAttribute("playsinline", "");
      }
      _0x33a0eb.play();
      var _0x106e23 = document.createElement("canvas");
      _0x40817f[_0x539593] = {
        video: _0x33a0eb,
        canvas: document.createElement("canvas"),
        stream: _0x534efe,
        frameLengthInMsecs: 1000 / _0x534efe.getVideoTracks()[0].getSettings().frameRate,
        nextFrameAvailableTime: 0,
        refCount: 1
      };
    }).catch(function (_0x44af0f) {
      console.error("Unable to start video input! " + _0x44af0f);
    });
  }
  function _0x5307b4(_0x5f51fb) {
    var _0xbc42d8 = _0x40817f[_0x5f51fb];
    if (!_0xbc42d8) {
      return;
    }
    if (--_0xbc42d8.refCount <= 0) {
      _0xbc42d8.video.pause();
      _0xbc42d8.video.srcObject = null;
      _0xbc42d8.stream.getVideoTracks().forEach(function (_0x54350b) {
        _0x54350b.stop();
      });
      delete _0x40817f[_0x5f51fb];
    }
  }
  function _0x53131a() {
    return !!navigator.mediaDevices;
  }
  var _0x29591d = {
    requests: {},
    responses: {},
    abortControllers: {},
    timer: {},
    nextRequestId: 1
  };
  function _0x385590(_0x369d2b) {
    var _0x5f45de = _0x29591d.abortControllers[_0x369d2b];
    if (!_0x5f45de || _0x5f45de.signal.aborted) {
      return;
    }
    _0x5f45de.abort();
  }
  function _0x4ed1cc(_0x285945, _0x24277d) {
    var _0x5978d7 = _0x5ea6bb(_0x285945);
    var _0x55f3dd = _0x5ea6bb(_0x24277d);
    var _0x88f00c = new AbortController();
    var _0x5de2e2 = {
      url: _0x5978d7,
      init: {
        method: _0x55f3dd,
        signal: _0x88f00c.signal,
        headers: {},
        enableStreamingDownload: true
      },
      tempBuffer: null,
      tempBufferSize: 0
    };
    _0x29591d.abortControllers[_0x29591d.nextRequestId] = _0x88f00c;
    _0x29591d.requests[_0x29591d.nextRequestId] = _0x5de2e2;
    return _0x29591d.nextRequestId++;
  }
  function _0x9bca74(_0x175512) {
    var _0x2001e9 = _0x29591d.responses[_0x175512];
    if (!_0x2001e9) {
      return "";
    }
    if (_0x2001e9.headerString) {
      return _0x2001e9.headerString;
    }
    var _0x1d3d2e = "";
    var _0x171a9e = _0x2001e9.headers.entries();
    for (var _0x464c78 = _0x171a9e.next(); !_0x464c78.done; _0x464c78 = _0x171a9e.next()) {
      _0x1d3d2e += _0x464c78.value[0] + ": " + _0x464c78.value[1] + "\r\n";
    }
    _0x2001e9.headerString = _0x1d3d2e;
    return _0x1d3d2e;
  }
  function _0x588f72(_0x225dba, _0x382f99, _0x2f086d, _0x3d21b0, _0x3df328) {
    var _0xece237 = _0x29591d.responses[_0x225dba];
    if (!_0xece237) {
      _0x38fbc9("", _0x382f99, _0x2f086d);
      _0x38fbc9("", _0x3d21b0, _0x3df328);
      return;
    }
    if (_0x382f99) {
      var _0x3e55e8 = _0x9bca74(_0x225dba);
      _0x38fbc9(_0x3e55e8, _0x382f99, _0x2f086d);
    }
    if (_0x3d21b0) {
      _0x38fbc9(_0xece237.url, _0x3d21b0, _0x3df328);
    }
  }
  function _0x2d9437(_0x4a5111, _0x359e8e) {
    var _0x10763b = _0x29591d.responses[_0x4a5111];
    if (!_0x10763b) {
      _0x342aec[_0x359e8e >> 2] = 0;
      _0x342aec[(_0x359e8e >> 2) + 1] = 0;
      return;
    }
    var _0x4c613a = _0x9bca74(_0x4a5111);
    _0x342aec[_0x359e8e >> 2] = _0x55b306(_0x4c613a);
    _0x342aec[(_0x359e8e >> 2) + 1] = _0x55b306(_0x10763b.url);
  }
  function _0x165b61(_0x2d2068) {
    if (_0x29591d.timer[_0x2d2068]) {
      clearTimeout(_0x29591d.timer[_0x2d2068]);
    }
    delete _0x29591d.requests[_0x2d2068];
    delete _0x29591d.responses[_0x2d2068];
    delete _0x29591d.abortControllers[_0x2d2068];
    delete _0x29591d.timer[_0x2d2068];
  }
  function _0x25c987(_0x5d3ca9, _0x1a3b98, _0x4ebccb, _0x518420, _0x43989b, _0x41a476) {
    var _0xf77685 = _0x29591d.requests[_0x5d3ca9];
    var _0x151c0 = _0x29591d.abortControllers[_0x5d3ca9];
    function _0x27cd44(_0x9eaa01) {
      if (!_0xf77685.tempBuffer) {
        const _0x262bc6 = Math.max(_0x9eaa01, 1024);
        _0xf77685.tempBuffer = _0x57219e(_0x262bc6);
        _0xf77685.tempBufferSize = _0x262bc6;
      }
      if (_0xf77685.tempBufferSize < _0x9eaa01) {
        _0x4401e3(_0xf77685.tempBuffer);
        _0xf77685.tempBuffer = _0x57219e(_0x9eaa01);
        _0xf77685.tempBufferSize = _0x9eaa01;
      }
      return _0xf77685.tempBuffer;
    }
    function _0x224cac() {
      if (_0x29591d.timer[_0x5d3ca9]) {
        clearTimeout(_0x29591d.timer[_0x5d3ca9]);
        delete _0x29591d.timer[_0x5d3ca9];
      }
    }
    function _0x22d8b0(_0xd80b2f, _0x939ff3) {
      _0x224cac();
      if (!_0x43989b) {
        return;
      }
      var _0x125bcf = 0;
      if (_0xf77685.init.enableStreamingDownload) {
        _0x2a4250("viiiiii", _0x43989b, [_0x518420, _0xd80b2f.status, 0, _0x939ff3.length, 0, _0x125bcf]);
      } else if (_0x939ff3.length != 0) {
        var _0x5d1fdf = _0x57219e(_0x939ff3.length);
        _0x2c14c3.set(_0x939ff3, _0x5d1fdf);
        _0x2a4250("viiiiii", _0x43989b, [_0x518420, _0xd80b2f.status, _0x5d1fdf, _0x939ff3.length, 0, _0x125bcf]);
      } else {
        _0x2a4250("viiiiii", _0x43989b, [_0x518420, _0xd80b2f.status, 0, 0, 0, _0x125bcf]);
      }
      if (_0xf77685.tempBuffer) {
        _0x4401e3(_0xf77685.tempBuffer);
      }
    }
    function _0x432e1d(_0x11c4c8, _0x397e30) {
      _0x224cac();
      if (!_0x43989b) {
        return;
      }
      var _0x3206c2 = _0x55b306(_0x11c4c8) + 1;
      var _0x1bab91 = _0x57219e(_0x3206c2);
      _0x38fbc9(_0x11c4c8, _0x1bab91, _0x3206c2);
      _0x2a4250("viiiiii", _0x43989b, [_0x518420, 500, 0, 0, _0x1bab91, _0x397e30]);
      _0x4401e3(_0x1bab91);
      if (_0xf77685.tempBuffer) {
        _0x4401e3(_0xf77685.tempBuffer);
      }
    }
    function _0x1da1b9(_0xa2d561) {
      if (!_0x41a476 || !_0xa2d561.lengthComputable) {
        return;
      }
      var _0xcda6a9 = _0xa2d561.response;
      _0x29591d.responses[_0x5d3ca9] = _0xcda6a9;
      if (_0xa2d561.chunk) {
        var _0x27dc35 = _0x27cd44(_0xa2d561.chunk.length);
        _0x2c14c3.set(_0xa2d561.chunk, _0x27dc35);
        _0x2a4250("viiiiii", _0x41a476, [_0x518420, _0xcda6a9.status, _0xa2d561.loaded, _0xa2d561.total, _0x27dc35, _0xa2d561.chunk.length]);
      } else {
        _0x2a4250("viiiiii", _0x41a476, [_0x518420, _0xcda6a9.status, _0xa2d561.loaded, _0xa2d561.total, 0, 0]);
      }
    }
    try {
      if (_0x4ebccb > 0) {
        var _0x5a8269 = _0x2c14c3.subarray(_0x1a3b98, _0x1a3b98 + _0x4ebccb);
        _0xf77685.init.body = new Blob([_0x5a8269]);
      }
      if (_0xf77685.timeout) {
        _0x29591d.timer[_0x5d3ca9] = setTimeout(function () {
          _0xf77685.isTimedOut = true;
          _0x151c0.abort();
        }, _0xf77685.timeout);
      }
      var _0x52c0ab = _0x51dce1.fetchWithProgress;
      _0xf77685.init.onProgress = _0x1da1b9;
      if (_0x51dce1.companyName && _0x51dce1.productName && _0x51dce1.cachedFetch) {
        _0x52c0ab = _0x51dce1.cachedFetch;
        _0xf77685.init.companyName = _0x51dce1.companyName;
        _0xf77685.init.productName = _0x51dce1.productName;
        _0xf77685.control = _0x51dce1.cacheControl(_0xf77685.url);
      }
      _0x52c0ab(_0xf77685.url, _0xf77685.init).then(function (_0xcab734) {
        _0x29591d.responses[_0x5d3ca9] = _0xcab734;
        _0x22d8b0(_0xcab734, _0xcab734.parsedBody);
      }).catch(function (_0x4e19cb) {
        var _0x1a8f08 = 2;
        var _0x1d8947 = 17;
        var _0x3fd4fd = 14;
        if (_0xf77685.isTimedOut) {
          _0x432e1d("Connection timed out.", _0x3fd4fd);
        } else if (_0x151c0.signal.aborted) {
          _0x432e1d("Aborted.", _0x1d8947);
        } else {
          _0x432e1d(_0x4e19cb.message, _0x1a8f08);
        }
      });
    } catch (_0x455e2e) {
      var _0x496977 = 2;
      _0x432e1d(_0x455e2e.message, _0x496977);
    }
  }
  function _0x2e65a0(_0xdc6647, _0x4f750b) {
    var _0x4e2a49 = _0x29591d.requests[_0xdc6647];
    if (!_0x4e2a49) {
      return;
    }
    _0x4e2a49.init.redirect = _0x4f750b === 0 ? "error" : "follow";
  }
  function _0x51d814(_0x78bbdf, _0x4b0a6d, _0x542add) {
    var _0x248074 = _0x29591d.requests[_0x78bbdf];
    if (!_0x248074) {
      return;
    }
    var _0x2da69a = _0x5ea6bb(_0x4b0a6d);
    var _0x4b3b6f = _0x5ea6bb(_0x542add);
    _0x248074.init.headers[_0x2da69a] = _0x4b3b6f;
  }
  function _0x219953(_0x3a9cee, _0x26ceef) {
    var _0x439ca3 = _0x29591d.requests[_0x3a9cee];
    if (!_0x439ca3) {
      return;
    }
    _0x439ca3.timeout = _0x26ceef;
  }
  function _0x5eb3b1(_0x26590a, _0x4f9186, _0x1845ec, _0x20d087) {
    var _0x3158a3 = _0x5ea6bb(_0x26590a);
    var _0x4f97e2 = _0x5ea6bb(_0x4f9186);
    var _0x36f988 = _0x5ea6bb(_0x1845ec);
    var _0x2dfc05 = _0x5ea6bb(_0x20d087);
    try {
      firebase.database().ref(_0x3158a3).on("child_added", function (_0xe78d03) {
        window.unityInstance.SendMessage(_0x4f97e2, _0x36f988, JSON.stringify(_0xe78d03.val()));
      });
    } catch (_0x1707dd) {
      window.unityInstance.SendMessage(_0x4f97e2, _0x2dfc05, JSON.stringify(_0x1707dd, Object.getOwnPropertyNames(_0x1707dd)));
    }
  }
  function _0x109d96(_0x228bab, _0x233a77, _0x376f2f, _0xae0e54) {
    var _0x55eb54 = _0x5ea6bb(_0x228bab);
    var _0x50e9e4 = _0x5ea6bb(_0x233a77);
    var _0x53b06b = _0x5ea6bb(_0x376f2f);
    var _0x412b50 = _0x5ea6bb(_0xae0e54);
    try {
      firebase.database().ref(_0x55eb54).on("child_changed", function (_0x4d8c98) {
        window.unityInstance.SendMessage(_0x50e9e4, _0x53b06b, JSON.stringify(_0x4d8c98.val()));
      });
    } catch (_0x97aa50) {
      window.unityInstance.SendMessage(_0x50e9e4, _0x412b50, JSON.stringify(_0x97aa50, Object.getOwnPropertyNames(_0x97aa50)));
    }
  }
  function _0x29eb38(_0x2e21e0, _0x40be0f, _0x5987eb, _0x40423f) {
    var _0x1c0130 = _0x5ea6bb(_0x2e21e0);
    var _0x5ccab5 = _0x5ea6bb(_0x40be0f);
    var _0x321c90 = _0x5ea6bb(_0x5987eb);
    var _0x21797d = _0x5ea6bb(_0x40423f);
    try {
      firebase.database().ref(_0x1c0130).on("child_removed", function (_0x4a46d5) {
        window.unityInstance.SendMessage(_0x5ccab5, _0x321c90, JSON.stringify(_0x4a46d5.val()));
      });
    } catch (_0x57b4be) {
      window.unityInstance.SendMessage(_0x5ccab5, _0x21797d, JSON.stringify(_0x57b4be, Object.getOwnPropertyNames(_0x57b4be)));
    }
  }
  function _0x11d0e9(_0x3af09b, _0x183d91, _0x515464, _0x5771e6, _0x4b2f6b) {
    var _0x6c9565 = _0x5ea6bb(_0x3af09b);
    var _0x408375 = _0x5ea6bb(_0x515464);
    var _0x57e15f = _0x5ea6bb(_0x5771e6);
    var _0x57549f = _0x5ea6bb(_0x4b2f6b);
    try {
      if (typeof firestorelisteners === "undefined") {
        firestorelisteners = {};
      }
      this.firestorelisteners[_0x6c9565 + "/collection/"] = firebase.firestore().collection(_0x6c9565).onSnapshot({
        includeMetadataChanges: _0x183d91 == 1
      }, function (_0x68ed69) {
        var _0x3adf54 = {};
        _0x68ed69.forEach(function (_0x42cdeb) {
          _0x3adf54[_0x42cdeb.id] = _0x42cdeb.data();
        });
        window.unityInstance.SendMessage(_0x408375, _0x57e15f, JSON.stringify(_0x3adf54));
      }, function (_0x250cd8) {
        window.unityInstance.SendMessage(_0x408375, _0x57549f, JSON.stringify(_0x250cd8, Object.getOwnPropertyNames(_0x250cd8)));
      });
    } catch (_0x33b6d1) {
      window.unityInstance.SendMessage(_0x408375, _0x57549f, JSON.stringify(_0x33b6d1, Object.getOwnPropertyNames(_0x33b6d1)));
    }
  }
  function _0x4c8f75(_0x350aa3, _0x260ee9, _0x41054f, _0x3206ef, _0x55b4ac, _0x1b9807) {
    var _0x33cd38 = _0x5ea6bb(_0x350aa3);
    var _0x124bec = _0x5ea6bb(_0x260ee9);
    var _0x222547 = _0x5ea6bb(_0x3206ef);
    var _0xaf5a6c = _0x5ea6bb(_0x55b4ac);
    var _0x114c68 = _0x5ea6bb(_0x1b9807);
    try {
      if (typeof firestorelisteners === "undefined") {
        firestorelisteners = {};
      }
      this.firestorelisteners[_0x33cd38 + "/" + _0x124bec] = firebase.firestore().collection(_0x33cd38).doc(_0x124bec).onSnapshot({
        includeMetadataChanges: _0x41054f == 1
      }, function (_0x338ab9) {
        window.unityInstance.SendMessage(_0x222547, _0xaf5a6c, JSON.stringify(_0x338ab9.data()));
      }, function (_0x109f3f) {
        window.unityInstance.SendMessage(_0x222547, _0x114c68, JSON.stringify(_0x109f3f, Object.getOwnPropertyNames(_0x109f3f)));
      });
    } catch (_0x116f0e) {
      window.unityInstance.SendMessage(_0x222547, _0x114c68, JSON.stringify(_0x116f0e, Object.getOwnPropertyNames(_0x116f0e)));
    }
  }
  function _0x15ad18(_0x125a48, _0x1797aa, _0xb4799b, _0x260c0f) {
    var _0x3be676 = _0x5ea6bb(_0x125a48);
    var _0x476670 = _0x5ea6bb(_0x1797aa);
    var _0x26260c = _0x5ea6bb(_0xb4799b);
    var _0x25dfbb = _0x5ea6bb(_0x260c0f);
    try {
      firebase.database().ref(_0x3be676).on("value", function (_0x16d3e3) {
        window.unityInstance.SendMessage(_0x476670, _0x26260c, JSON.stringify(_0x16d3e3.val()));
      });
    } catch (_0xedf2ba) {
      window.unityInstance.SendMessage(_0x476670, _0x25dfbb, JSON.stringify(_0xedf2ba, Object.getOwnPropertyNames(_0xedf2ba)));
    }
  }
  function _0x5aaac5(_0x497539) {
    var _0x55cd6e = _0x5ea6bb(_0x497539);
    firebaseLogEvent(_0x55cd6e);
  }
  function _0x54c438(_0x406337, _0xad7382) {
    var _0x572b43 = _0x5ea6bb(_0x406337);
    var _0x2cc49a = JSON.parse(_0x5ea6bb(_0xad7382));
    firebaseLogEventParameter(_0x572b43, _0x2cc49a);
  }
  function _0xb07f42(_0x34e65d, _0x14e06a, _0x337ad6, _0x1bd0d8, _0x39de25) {
    var _0x509c3f = _0x5ea6bb(_0x34e65d);
    var _0x11ccde = _0x5ea6bb(_0x337ad6);
    var _0x48a12f = _0x5ea6bb(_0x1bd0d8);
    var _0x5783d5 = _0x5ea6bb(_0x39de25);
    try {
      firebase.database().ref(_0x509c3f).transaction(function (_0x998b28) {
        if (!isNaN(_0x998b28)) {
          return _0x998b28 + _0x14e06a;
        } else {
          return _0x14e06a;
        }
      }).then(function (_0x69e28d) {
        window.unityInstance.SendMessage(_0x11ccde, _0x48a12f, "Success: transaction run in " + _0x509c3f);
      });
    } catch (_0x7e6436) {
      window.unityInstance.SendMessage(_0x11ccde, _0x5783d5, JSON.stringify(_0x7e6436, Object.getOwnPropertyNames(_0x7e6436)));
    }
  }
  function _0x28e889(_0x5a003a, _0x21a9ba, _0x1a8ba2) {
    var _0x1ab70c = _0x5ea6bb(_0x5a003a);
    var _0x15eea4 = _0x5ea6bb(_0x21a9ba);
    var _0x37211b = _0x5ea6bb(_0x1a8ba2);
    firebase.auth().onAuthStateChanged(function (_0x15c1b0) {
      if (_0x15c1b0) {
        window.unityInstance.SendMessage(_0x1ab70c, _0x15eea4, JSON.stringify(_0x15c1b0));
      } else {
        window.unityInstance.SendMessage(_0x1ab70c, _0x37211b, "User signed out");
      }
    });
  }
  function _0x24e95b(_0x24ca50) {
    window.wgUnityInstance = _0x51dce1;
    try {
      window[preroll.config.loaderObjectName].log("WGSDK: WeeGoo InGame Ad, pinging.");
      window[preroll.config.loaderObjectName].ping(_0x24ca50);
    } catch (_0x362aeb) {
      console.log("WGSDK: No production WGSDK resources found, loading development resources.");
      var _0xb944c8 = document.createElement("script");
      _0xb944c8.addEventListener("load", function (_0x5c0dfd) {
        var _0x2789a6 = document.createElement("script");
        _0x2789a6.addEventListener("load", function (_0x417e66) {
          console.log("WGSDK: Development resources loaded.");
          _0x514463(_0x24ca50, true);
        }.bind(this));
        document.getElementsByTagName("head")[0].appendChild(_0x2789a6);
        _0x2789a6.src = window.GMSOFT_ADS_INFO.wgLibrary;
      }.bind(this));
      document.getElementsByTagName("head")[0].appendChild(_0xb944c8);
      _0xb944c8.src = window.GMSOFT_ADS_INFO.wgConf;
    }
  }
  function _0x514463(_0x489780, _0x1aeec7) {
    var _0x5f46b1;
    if (_0x1aeec7 === true) {
      _0x5f46b1 = _0x489780;
    } else {
      _0x5f46b1 = _0x5ea6bb(_0x489780);
    }
    setTimeout(function () {
      _0x24e95b(_0x5f46b1);
    }, 250);
  }
  function _0x299c06(_0x368c09, _0x404ccf, _0x3bb810, _0x2ae3b4, _0x87179f) {
    var _0x4bd958 = _0x5ea6bb(_0x368c09);
    var _0x3278b0 = _0x5ea6bb(_0x404ccf);
    var _0x13bf58 = _0x5ea6bb(_0x3bb810);
    var _0x4d50ea = _0x5ea6bb(_0x2ae3b4);
    var _0x20703a = _0x5ea6bb(_0x87179f);
    try {
      firebase.database().ref(_0x4bd958).set(JSON.parse(_0x3278b0)).then(function (_0x142427) {
        window.unityInstance.SendMessage(_0x13bf58, _0x4d50ea, "Success: " + _0x3278b0 + " was posted to " + _0x4bd958);
      });
    } catch (_0xad25c0) {
      window.unityInstance.SendMessage(_0x13bf58, _0x20703a, JSON.stringify(_0xad25c0, Object.getOwnPropertyNames(_0xad25c0)));
    }
  }
  function _0x266036(_0x33f2d6, _0x1ccfba, _0x29f681, _0x297e7a, _0x261dce) {
    var _0x586774 = _0x5ea6bb(_0x33f2d6);
    var _0x20af4f = _0x5ea6bb(_0x1ccfba);
    var _0x372cc0 = _0x5ea6bb(_0x29f681);
    var _0x5ddf5a = _0x5ea6bb(_0x297e7a);
    var _0x35f44e = _0x5ea6bb(_0x261dce);
    try {
      firebase.database().ref(_0x586774).push().set(JSON.parse(_0x20af4f)).then(function (_0x36a5d3) {
        window.unityInstance.SendMessage(_0x372cc0, _0x5ddf5a, "Success: " + _0x20af4f + " was pushed to " + _0x586774);
      });
    } catch (_0xe36f43) {
      window.unityInstance.SendMessage(_0x372cc0, _0x35f44e, JSON.stringify(_0xe36f43, Object.getOwnPropertyNames(_0xe36f43)));
    }
  }
  function _0x38cdd7() {
    try {
      window[preroll.config.loaderObjectName].log("WGSDK: Refetching reward ad.");
      window[preroll.config.loaderObjectName].rewarded.initSlot.call(window[preroll.config.loaderObjectName]);
    } catch (_0x537499) {
      console.log("No WeeGooAFG implementation found!");
    }
  }
  function _0x464eb8() {
    try {
      window[preroll.config.loaderObjectName].log("WGSDK: Game controls registered.");
      window[window.preroll.config.loaderObjectName].registerGameControls(_0x51dce1);
    } catch (_0x136861) {
      console.log("WGSDK: Can not register game controls.");
      setTimeout(function () {
        _0x464eb8();
      }, 250);
    }
  }
  function _0x50e8a7() {
    try {
      window[preroll.config.loaderObjectName].log("WGSDK: Reward callbacks registered.");
      window[window.preroll.config.loaderObjectName].registerRewardCallbacks({
        onReady: "OnReadyMethod",
        onSuccess: "OnSuccessMethod",
        onFail: "OnFailMethod"
      });
    } catch (_0x10beea) {
      console.log("WGSDK: Can not register reward ad callbacks.");
      _0x103028();
    }
  }
  function _0x103028() {
    setTimeout(function () {
      _0x50e8a7();
    }, 250);
  }
  function _0x229532(_0x52670e, _0x1c09fc, _0x30504e, _0x389c59, _0x17cd01, _0x4e8206, _0x511c8c) {
    var _0x493b2a = _0x5ea6bb(_0x52670e);
    var _0x4e0d84 = _0x5ea6bb(_0x1c09fc);
    var _0x1e64f0 = _0x5ea6bb(_0x30504e);
    var _0x231075 = _0x5ea6bb(_0x389c59);
    var _0x582a43 = _0x5ea6bb(_0x17cd01);
    var _0x4d0c95 = _0x5ea6bb(_0x4e8206);
    var _0x4eca3d = _0x5ea6bb(_0x511c8c);
    try {
      var _0x389c59 = {};
      _0x389c59[_0x1e64f0] = firebase.firestore.FieldValue.arrayRemove(JSON.parse(_0x231075));
      firebase.firestore().collection(_0x493b2a).doc(_0x4e0d84).update(_0x389c59).then(function () {
        window.unityInstance.SendMessage(_0x582a43, _0x4d0c95, "Success: element " + _0x231075 + " was removed in " + _0x1e64f0);
      }).catch(function (_0x2b5d94) {
        window.unityInstance.SendMessage(_0x582a43, _0x4eca3d, JSON.stringify(_0x2b5d94, Object.getOwnPropertyNames(_0x2b5d94)));
      });
    } catch (_0x20374f) {
      window.unityInstance.SendMessage(_0x582a43, _0x4eca3d, JSON.stringify(_0x20374f, Object.getOwnPropertyNames(_0x20374f)));
    }
  }
  function _0x2524c4(_0x51445d) {
    var _0x5f4ab2 = window.unityStringify(_0x51445d);
    var _0x4713e6 = {
      adStarted: function () {
        window.UnitySDK.unlockPointer();
        _0x4adf00("CrazySDKSingleton", "JSLibCallback_AdStarted");
      },
      adFinished: function () {
        window.UnitySDK.lockPointer();
        _0x4adf00("CrazySDKSingleton", "JSLibCallback_AdFinished");
      },
      adError: function (_0x3aab8f) {
        _0x4adf00("CrazySDKSingleton", "JSLibCallback_AdError", JSON.stringify(_0x3aab8f));
      }
    };
    window.CrazyGames.SDK.ad.requestAd(_0x5f4ab2, _0x4713e6).catch(function (_0x23ea00) {
      window.UnitySDK.logError("Error while requesting ad:", _0x23ea00);
      _0x4adf00("CrazySDKSingleton", "JSLibCallback_AdError", JSON.stringify({
        code: "unknown",
        message: _0x23ea00.message || "Unknown error"
      }));
    });
  }
  function _0x14d438(_0x277b63) {
    var _0x44ef61 = JSON.parse(window.unityStringify(_0x277b63));
    try {
      window.CrazyGames.SDK.banner.requestOverlayBanners(_0x44ef61, function (_0x1c43a0, _0x1925af, _0x13bf14) {});
    } catch (_0x266438) {
      window.UnitySDK.logError("Error while requesting banners:", _0x266438);
    }
  }
  function _0x36aee2(_0x2213f4) {
    var _0x4e1212 = JSON.parse(window.unityStringify(_0x2213f4));
    var _0x381cfb = "";
    try {
      _0x381cfb = window.CrazyGames.SDK.game.inviteLink(_0x4e1212);
    } catch (_0x3984c6) {
      window.UnitySDK.logError("Error while requesting invite url:", _0x3984c6);
    }
    var _0x4bcb9d = _0x55b306(_0x381cfb) + 1;
    var _0x4cd3a9 = _0x57219e(_0x4bcb9d);
    _0x38fbc9(_0x381cfb, _0x4cd3a9, _0x4bcb9d);
    return _0x4cd3a9;
  }
  function _0x2e20a0(_0x3d142a) {
    _0x3d142a = _0x5ea6bb(_0x3d142a);
    window.GD_OPTIONS = {
      debug: false,
      gameId: _0x3d142a,
      onEvent: function (_0x15aec5) {
        switch (_0x15aec5.name) {
          case "SDK_GAME_START":
            _0x4adf00("GameDistribution", "ResumeGameCallback");
            break;
          case "SDK_GAME_PAUSE":
            _0x4adf00("GameDistribution", "PauseGameCallback");
            break;
          case "SDK_REWARDED_WATCH_COMPLETE":
            _0x4adf00("GameDistribution", "RewardedCompleteCallback");
            break;
          case "SDK_ERROR":
            break;
          default:
            _0x4adf00("GameDistribution", "EventCallback", _0x15aec5.name);
        }
      }
    };
    (function (_0x54e6b6, _0x1890af, _0x1cf41b) {
      var _0x2af063;
      var _0x135901 = _0x54e6b6.getElementsByTagName(_0x1890af)[0];
      if (_0x54e6b6.getElementById(_0x1cf41b)) {
        return;
      }
      _0x2af063 = _0x54e6b6.createElement(_0x1890af);
      _0x2af063.id = _0x1cf41b;
      _0x2af063.src = "//html5.api.gamedistribution.com/main.min.js";
      _0x135901.parentNode.insertBefore(_0x2af063, _0x135901);
    })(document, "script", "gamedistribution-jssdk");
  }
  function _0x100d47() {
    if (typeof gdsdk !== "undefined" && typeof gdsdk.preloadAd !== "undefined") {
      gdsdk.preloadAd(gdsdk.AdType.Rewarded).then(function (_0x49a702) {
        _0x4adf00("GameDistribution", "PreloadRewardedVideoCallback", 1);
      }).catch(function (_0x45eefe) {
        _0x4adf00("GameDistribution", "PreloadRewardedVideoCallback", 0);
      });
    }
  }
  function _0x43e394(_0x2ccb7e) {
    _0x2ccb7e = _0x5ea6bb(_0x2ccb7e);
    if (typeof gdsdk !== "undefined" && typeof gdsdk.sendEvent !== "undefined" && typeof _0x2ccb7e !== "undefined") {
      gdsdk.sendEvent(_0x2ccb7e).then(function (_0x4afe69) {
        console.log("Game event post message sent Succesfully...");
      }).catch(function (_0x1e4052) {
        console.log(_0x1e4052.message);
      });
    }
  }
  function _0x1e2efd(_0x1726e9) {
    if (typeof gdsdk !== "undefined" && typeof gdsdk.showAd !== "undefined") {
      _0x1726e9 = _0x5ea6bb(_0x1726e9) || gdsdk.AdType.Interstitial;
      gdsdk.showAd(_0x1726e9).then(function (_0x1a363a) {
        if (_0x1726e9 === gdsdk.AdType.Rewarded) {
          _0x4adf00("GameDistribution", "RewardedVideoSuccessCallback");
        }
      }).catch(function (_0x55b98c) {
        if (_0x1726e9 === gdsdk.AdType.Rewarded) {
          _0x4adf00("GameDistribution", "RewardedVideoFailureCallback");
        }
      });
    }
  }
  function _0x42cc72(_0x253f10, _0x4e658d, _0x9ec19f, _0x50440d, _0x323bbd, _0x11785f) {
    var _0x5f4dd6 = _0x5ea6bb(_0x253f10);
    var _0x5359bc = _0x5ea6bb(_0x4e658d);
    var _0x1c15dc = _0x5ea6bb(_0x9ec19f);
    var _0x29e27d = _0x5ea6bb(_0x50440d);
    var _0x801fe5 = _0x5ea6bb(_0x323bbd);
    var _0xddb858 = _0x5ea6bb(_0x11785f);
    try {
      firebase.firestore().collection(_0x5f4dd6).doc(_0x5359bc).set(JSON.parse(_0x1c15dc)).then(function () {
        window.unityInstance.SendMessage(_0x29e27d, _0x801fe5, "Success: document " + _0x5359bc + " was set");
      }).catch(function (_0x28f56b) {
        window.unityInstance.SendMessage(_0x29e27d, _0xddb858, JSON.stringify(_0x28f56b, Object.getOwnPropertyNames(_0x28f56b)));
      });
    } catch (_0x4bdf6b) {
      window.unityInstance.SendMessage(_0x29e27d, _0xddb858, JSON.stringify(_0x4bdf6b, Object.getOwnPropertyNames(_0x4bdf6b)));
    }
  }
  function _0x4dde36(_0xac9605) {
    var _0x5ca0c6 = JSON.parse(_0x5ea6bb(_0xac9605));
    firebaseSetUserProperties(_0x5ca0c6);
  }
  function _0x49efbc() {
    window.CrazyGames.SDK.user.showAccountLinkPrompt().then(function (_0xab9cb4) {
      _0x4adf00("CrazySDKSingleton", "JSLibCallback_ShowAccountLinkPrompt", JSON.stringify({
        linkAccountResponseStr: JSON.stringify(_0xab9cb4)
      }));
    }).catch(function (_0x47bb26) {
      _0x4adf00("CrazySDKSingleton", "JSLibCallback_ShowAccountLinkPrompt", JSON.stringify({
        errorJson: JSON.stringify(_0x47bb26)
      }));
    });
  }
  function _0x1534cf() {
    window.CrazyGames.SDK.user.showAuthPrompt().then(function (_0x2dcdf0) {
      _0x4adf00("CrazySDKSingleton", "JSLibCallback_ShowAuthPrompt", JSON.stringify({
        userJson: JSON.stringify(_0x2dcdf0)
      }));
    }).catch(function (_0x110687) {
      _0x4adf00("CrazySDKSingleton", "JSLibCallback_ShowAuthPrompt", JSON.stringify({
        errorJson: JSON.stringify(_0x110687)
      }));
    });
  }
  function _0xb23f1f(_0x202be3) {
    var _0x4bcba5 = JSON.parse(window.unityStringify(_0x202be3));
    var _0x396a90 = "";
    try {
      _0x396a90 = window.CrazyGames.SDK.game.showInviteButton(_0x4bcba5);
    } catch (_0x4ac19c) {
      window.UnitySDK.logError("Error while showing invite button:", _0x4ac19c);
    }
    var _0x1a4e1f = _0x55b306(_0x396a90) + 1;
    var _0x9db97e = _0x57219e(_0x1a4e1f);
    _0x38fbc9(_0x396a90, _0x9db97e, _0x1a4e1f);
    return _0x9db97e;
  }
  function _0x121e0c() {
    window[preroll.config.loaderObjectName].showRewardAd();
  }
  function _0xe59e0f(_0xa657bd, _0xfda70d, _0x189732) {
    var _0x50f5b1 = _0x5ea6bb(_0xa657bd);
    var _0x489836 = _0x5ea6bb(_0xfda70d);
    var _0x2b183a = _0x5ea6bb(_0x189732);
    try {
      firebase.auth().signInAnonymously().then(function (_0x3448f3) {
        window.unityInstance.SendMessage(_0x50f5b1, _0x489836, "Success: signed up for " + _0x3448f3);
      }).catch(function (_0x4b464f) {
        window.unityInstance.SendMessage(_0x50f5b1, _0x2b183a, JSON.stringify(_0x4b464f, Object.getOwnPropertyNames(_0x4b464f)));
      });
    } catch (_0x4304c2) {
      window.unityInstance.SendMessage(_0x50f5b1, _0x2b183a, JSON.stringify(_0x4304c2, Object.getOwnPropertyNames(_0x4304c2)));
    }
  }
  function _0x30168c(_0x26fa08, _0x306d57, _0xf6e8f4, _0x5e7055, _0x1228a6) {
    var _0x22a42a = _0x5ea6bb(_0x26fa08);
    var _0x149ade = _0x5ea6bb(_0x306d57);
    var _0xf9b76f = _0x5ea6bb(_0xf6e8f4);
    var _0x5e8396 = _0x5ea6bb(_0x5e7055);
    var _0x37c8be = _0x5ea6bb(_0x1228a6);
    try {
      firebase.auth().signInWithEmailAndPassword(_0x22a42a, _0x149ade).then(function (_0x3cf9e2) {
        window.unityInstance.SendMessage(_0xf9b76f, _0x5e8396, "Success: signed in for " + _0x22a42a);
      }).catch(function (_0x206554) {
        window.unityInstance.SendMessage(_0xf9b76f, _0x37c8be, JSON.stringify(_0x206554, Object.getOwnPropertyNames(_0x206554)));
      });
    } catch (_0x2c6fd8) {
      window.unityInstance.SendMessage(_0xf9b76f, _0x37c8be, JSON.stringify(_0x2c6fd8, Object.getOwnPropertyNames(_0x2c6fd8)));
    }
  }
  function _0xdbe5fc(_0x30a48d, _0x3a6998, _0x31439c) {
    var _0x2edaa5 = _0x5ea6bb(_0x30a48d);
    var _0x35249d = _0x5ea6bb(_0x3a6998);
    var _0x1412da = _0x5ea6bb(_0x31439c);
    try {
      var _0x4d4fee = new firebase.auth.FacebookAuthProvider();
      firebase.auth().signInWithRedirect(_0x4d4fee).then(function (_0x9c3f52) {
        window.unityInstance.SendMessage(_0x2edaa5, _0x35249d, "Success: signed in with Facebook!");
      }).catch(function (_0x388112) {
        window.unityInstance.SendMessage(_0x2edaa5, _0x1412da, JSON.stringify(_0x388112, Object.getOwnPropertyNames(_0x388112)));
      });
    } catch (_0x485651) {
      window.unityInstance.SendMessage(_0x2edaa5, _0x1412da, JSON.stringify(_0x485651, Object.getOwnPropertyNames(_0x485651)));
    }
  }
  function _0x26f015(_0x3b9893, _0x31e106, _0x28fbe1) {
    var _0x1ed0df = _0x5ea6bb(_0x3b9893);
    var _0x503a4a = _0x5ea6bb(_0x31e106);
    var _0x4d3f53 = _0x5ea6bb(_0x28fbe1);
    try {
      var _0x5502ca = new firebase.auth.GoogleAuthProvider();
      firebase.auth().signInWithRedirect(_0x5502ca).then(function (_0xc94d5) {
        window.unityInstance.SendMessage(_0x1ed0df, _0x503a4a, "Success: signed in with Google!");
      }).catch(function (_0x71700) {
        window.unityInstance.SendMessage(_0x1ed0df, _0x4d3f53, JSON.stringify(_0x71700, Object.getOwnPropertyNames(_0x71700)));
      });
    } catch (_0x30fa1b) {
      window.unityInstance.SendMessage(_0x1ed0df, _0x4d3f53, JSON.stringify(_0x30fa1b, Object.getOwnPropertyNames(_0x30fa1b)));
    }
  }
  function _0x53e4d9(_0x13f44a, _0x176f14, _0x262230, _0x4481d0) {
    var _0x590166 = _0x5ea6bb(_0x13f44a);
    var _0x55c76e = _0x5ea6bb(_0x176f14);
    var _0x43a327 = _0x5ea6bb(_0x262230);
    var _0x1aa75e = _0x5ea6bb(_0x4481d0);
    try {
      firebase.database().ref(_0x590166).off("child_added");
      window.unityInstance.SendMessage(_0x55c76e, _0x43a327, "Success: listener removed");
    } catch (_0x4636d3) {
      window.unityInstance.SendMessage(_0x55c76e, _0x1aa75e, JSON.stringify(_0x4636d3, Object.getOwnPropertyNames(_0x4636d3)));
    }
  }
  function _0x68d45a(_0x6533e4, _0x47f587, _0x5cafbe, _0x25caa3) {
    var _0x278f83 = _0x5ea6bb(_0x6533e4);
    var _0x5213e8 = _0x5ea6bb(_0x47f587);
    var _0xa1ad3e = _0x5ea6bb(_0x5cafbe);
    var _0x5d7e50 = _0x5ea6bb(_0x25caa3);
    try {
      firebase.database().ref(_0x278f83).off("child_changed");
      window.unityInstance.SendMessage(_0x5213e8, _0xa1ad3e, "Success: listener removed");
    } catch (_0x4ee109) {
      window.unityInstance.SendMessage(_0x5213e8, _0x5d7e50, JSON.stringify(_0x4ee109, Object.getOwnPropertyNames(_0x4ee109)));
    }
  }
  function _0x3c79f0(_0x464cf5, _0x1d6c94, _0x2dd185, _0x405efa) {
    var _0x378535 = _0x5ea6bb(_0x464cf5);
    var _0xf94467 = _0x5ea6bb(_0x1d6c94);
    var _0x37a1eb = _0x5ea6bb(_0x2dd185);
    var _0x5064ba = _0x5ea6bb(_0x405efa);
    try {
      firebase.database().ref(_0x378535).off("child_removed");
      window.unityInstance.SendMessage(_0xf94467, _0x37a1eb, "Success: listener removed");
    } catch (_0x58774b) {
      window.unityInstance.SendMessage(_0xf94467, _0x5064ba, JSON.stringify(_0x58774b, Object.getOwnPropertyNames(_0x58774b)));
    }
  }
  function _0x1de7ae(_0x181cd4, _0x13f762, _0x3f3f77, _0x30b53b) {
    var _0x3fd772 = _0x5ea6bb(_0x181cd4);
    var _0x1f6e15 = _0x5ea6bb(_0x13f762);
    var _0x4f2714 = _0x5ea6bb(_0x3f3f77);
    var _0x1a61e2 = _0x5ea6bb(_0x30b53b);
    try {
      if (typeof firestorelisteners === "undefined") {
        firestorelisteners = {};
      }
      this.firestorelisteners[_0x3fd772 + "/collection/"]();
      window.unityInstance.SendMessage(_0x1f6e15, _0x4f2714, "Success: listener was removed");
    } catch (_0x24a248) {
      window.unityInstance.SendMessage(_0x1f6e15, _0x1a61e2, JSON.stringify(_0x24a248, Object.getOwnPropertyNames(_0x24a248)));
    }
  }
  function _0x456a6d(_0x42f1be, _0x46d867, _0x55254a, _0x186212, _0x582006) {
    var _0x36e36d = _0x5ea6bb(_0x42f1be);
    var _0x501d32 = _0x5ea6bb(_0x46d867);
    var _0x48e0fb = _0x5ea6bb(_0x55254a);
    var _0xb1ed7e = _0x5ea6bb(_0x186212);
    var _0x24cd4f = _0x5ea6bb(_0x582006);
    try {
      if (typeof firestorelisteners === "undefined") {
        firestorelisteners = {};
      }
      this.firestorelisteners[_0x36e36d + "/" + _0x501d32]();
      window.unityInstance.SendMessage(_0x48e0fb, _0xb1ed7e, "Success: listener was removed");
    } catch (_0xf505cb) {
      window.unityInstance.SendMessage(_0x48e0fb, _0x24cd4f, JSON.stringify(_0xf505cb, Object.getOwnPropertyNames(_0xf505cb)));
    }
  }
  function _0xbf25df(_0x4a4f6a, _0x3859db, _0x2b0bc6, _0x2f7069) {
    var _0x32ce7e = _0x5ea6bb(_0x4a4f6a);
    var _0x5374ec = _0x5ea6bb(_0x3859db);
    var _0x2352f3 = _0x5ea6bb(_0x2b0bc6);
    var _0x5e02e1 = _0x5ea6bb(_0x2f7069);
    try {
      firebase.database().ref(_0x32ce7e).off("value");
      window.unityInstance.SendMessage(_0x5374ec, _0x2352f3, "Success: listener removed");
    } catch (_0x7f7ed) {
      window.unityInstance.SendMessage(_0x5374ec, _0x5e02e1, JSON.stringify(_0x7f7ed, Object.getOwnPropertyNames(_0x7f7ed)));
    }
  }
  function _0x4b1e84() {
    try {
      window.CrazyGames.SDK.data.syncUnityGameData();
    } catch (_0x42df1f) {
      window.UnitySDK.logError("Error while calling syncUnityGameData:", _0x42df1f);
    }
  }
  function _0x343704(_0x3b30ab, _0x4f59df, _0x465b94, _0x567222) {
    var _0x48e8e4 = _0x5ea6bb(_0x3b30ab);
    var _0x463339 = _0x5ea6bb(_0x4f59df);
    var _0x1fc334 = _0x5ea6bb(_0x465b94);
    var _0xb44eac = _0x5ea6bb(_0x567222);
    try {
      firebase.database().ref(_0x48e8e4).transaction(function (_0x3e482c) {
        if (typeof _0x3e482c === "boolean") {
          return !_0x3e482c;
        } else {
          return true;
        }
      }).then(function (_0x70b23b) {
        window.unityInstance.SendMessage(_0x463339, _0x1fc334, "Success: transaction run in " + _0x48e8e4);
      });
    } catch (_0xfec291) {
      window.unityInstance.SendMessage(_0x463339, _0xb44eac, JSON.stringify(_0xfec291, Object.getOwnPropertyNames(_0xfec291)));
    }
  }
  function _0x1d25d0(_0x2f3af7, _0x25ec74, _0x702f0, _0x684403, _0xb1ee37, _0xd308f8) {
    var _0x1ea7d8 = _0x5ea6bb(_0x2f3af7);
    var _0xe11bd5 = _0x5ea6bb(_0x25ec74);
    var _0x2669f0 = _0x5ea6bb(_0x702f0);
    var _0x9e3742 = _0x5ea6bb(_0x684403);
    var _0x236bcf = _0x5ea6bb(_0xb1ee37);
    var _0x64a998 = _0x5ea6bb(_0xd308f8);
    try {
      firebase.firestore().collection(_0x1ea7d8).doc(_0xe11bd5).update(JSON.parse(_0x2669f0)).then(function () {
        window.unityInstance.SendMessage(_0x9e3742, _0x236bcf, "Success: document " + _0xe11bd5 + " was updated");
      }).catch(function (_0x15f214) {
        window.unityInstance.SendMessage(_0x9e3742, _0x64a998, JSON.stringify(_0x15f214, Object.getOwnPropertyNames(_0x15f214)));
      });
    } catch (_0x349892) {
      window.unityInstance.SendMessage(_0x9e3742, _0x64a998, JSON.stringify(_0x349892, Object.getOwnPropertyNames(_0x349892)));
    }
  }
  function _0x466235(_0x912de5, _0x57bbc1, _0x410ac2, _0x1f7832, _0x4dd12c) {
    var _0x5db284 = _0x5ea6bb(_0x912de5);
    var _0x286a10 = _0x5ea6bb(_0x57bbc1);
    var _0x1fd1d8 = _0x5ea6bb(_0x410ac2);
    var _0x5ce9ba = _0x5ea6bb(_0x1f7832);
    var _0x5af463 = _0x5ea6bb(_0x4dd12c);
    try {
      firebase.database().ref(_0x5db284).update(JSON.parse(_0x286a10)).then(function (_0x1915df) {
        window.unityInstance.SendMessage(_0x1fd1d8, _0x5ce9ba, "Success: " + _0x286a10 + " was updated in " + _0x5db284);
      });
    } catch (_0x99dd57) {
      window.unityInstance.SendMessage(_0x1fd1d8, _0x5af463, JSON.stringify(_0x99dd57, Object.getOwnPropertyNames(_0x99dd57)));
    }
  }
  function _0x2de5e7(_0x37cc01, _0x49201f, _0x1e1a47, _0x10544a, _0x4daaaf) {
    var _0x589916 = _0x5ea6bb(_0x37cc01);
    var _0x4b1ff8 = _0x5ea6bb(_0x49201f);
    var _0x5d1761 = _0x5ea6bb(_0x1e1a47);
    var _0x351e0d = _0x5ea6bb(_0x10544a);
    var _0x46f99c = _0x5ea6bb(_0x4daaaf);
    try {
      firebase.storage().ref(_0x589916).put(_0x3564e9(_0x4b1ff8)).then(function (_0x28da37) {
        window.unityInstance.SendMessage(_0x5d1761, _0x351e0d, "Success: data was posted to " + _0x589916);
      });
    } catch (_0x4bbce4) {
      window.unityInstance.SendMessage(_0x5d1761, _0x46f99c, JSON.stringify(_0x4bbce4, Object.getOwnPropertyNames(_0x4bbce4)));
    }
    function _0x3564e9(_0x3a01e3) {
      var _0x20c6ad = window.atob(_0x3a01e3);
      var _0x30decb = _0x20c6ad.length;
      var _0x2f8d37 = new Uint8Array(_0x30decb);
      for (var _0x3437a8 = 0; _0x3437a8 < _0x30decb; _0x3437a8++) {
        _0x2f8d37[_0x3437a8] = _0x20c6ad.charCodeAt(_0x3437a8);
      }
      return _0x2f8d37.buffer;
    }
  }
  var _0xd0edc9 = {
    requestInstances: {},
    nextRequestId: 1,
    loglevel: 2,
    SendTextToCSharpSide: function (_0x4297c9, _0x1e5c1e, _0x4eea67) {
      const _0x42330e = new TextEncoder();
      const _0x355fd4 = _0x42330e.encode(_0x4eea67);
      const _0x97f9e4 = function (_0x44e765, _0x2165fa) {
        return _0x2e0f87.apply(null, [_0xd0edc9.onallocbuffer, _0x44e765, _0x2165fa]);
      }(_0x4297c9, _0x355fd4.length);
      _0x2c14c3.set(_0x355fd4, _0x97f9e4);
      (function (_0x4c8130, _0x37326a, _0x14d788) {
        _0x24e3fb.apply(null, [_0x1e5c1e, _0x4c8130, _0x37326a, _0x14d788]);
      })(_0x4297c9, _0x97f9e4, _0x355fd4.length);
    },
    GetResponseHeaders: function (_0x4061e9, _0x38b305) {
      if (_0xd0edc9.loglevel <= 1) {
        console.log("GetResponseHeaders(" + _0x4061e9 + ")");
      }
      var _0xe1ec92 = "";
      if (document && document.cookie) {
        var _0x124349 = document.cookie.split(";");
        for (var _0xf87283 = 0; _0xf87283 < _0x124349.length; ++_0xf87283) {
          const _0x103ded = _0x124349[_0xf87283].trim();
          if (_0x103ded.length > 0) {
            _0xe1ec92 += "Set-Cookie:" + _0x103ded + "\n";
          }
        }
      }
      const _0x2ef1b3 = _0xd0edc9.requestInstances[_0x4061e9].getAllResponseHeaders().trim().split(/[\r\n]+/);
      _0x2ef1b3.forEach(_0x40040c => {
        const _0x2a1b64 = _0x40040c.split(": ");
        const _0x464cde = _0x2a1b64.shift();
        const _0x5ca7a3 = _0x2a1b64.join(": ");
        if (_0x464cde !== "content-length") {
          _0xe1ec92 += _0x464cde + ":" + _0x5ca7a3 + "\n";
        }
      });
      _0xd0edc9.SendTextToCSharpSide(_0x4061e9, _0x38b305, _0xe1ec92);
    }
  };
  function _0x1974ac(_0xfc5b02) {
    if (_0xd0edc9.loglevel <= 1) {
      console.log("XHR_Abort(" + _0xfc5b02 + ")");
    }
    _0xd0edc9.requestInstances[_0xfc5b02].abort();
  }
  function _0x490c55(_0x66a6fc, _0x53e594, _0x1ac027, _0x1c206a, _0x3fbaf5) {
    var _0x227829 = new URL(_0x5ea6bb(_0x53e594));
    var _0x7388a2 = _0x5ea6bb(_0x66a6fc);
    if (_0xd0edc9.loglevel <= 1) {
      console.log("XHR_Create (" + _0xd0edc9.nextRequestId + ", " + _0x7388a2 + ", " + _0x227829.toString() + ", " + _0x3fbaf5 + ")");
    }
    var _0x342a07 = new XMLHttpRequest();
    if (_0x1ac027 && _0x1c206a) {
      var _0x293456 = _0x5ea6bb(_0x1ac027);
      var _0x521704 = _0x5ea6bb(_0x1c206a);
      _0x342a07.withCredentials = true;
      _0x342a07.open(_0x7388a2, _0x227829.toString(), true, _0x293456, _0x521704);
    } else {
      _0x342a07.withCredentials = _0x3fbaf5;
      _0x342a07.open(_0x7388a2, _0x227829.toString(), true);
    }
    _0x342a07.responseType = "arraybuffer";
    _0xd0edc9.requestInstances[_0xd0edc9.nextRequestId] = _0x342a07;
    return _0xd0edc9.nextRequestId++;
  }
  function _0x5b8fe9(_0x54d903) {
    if (_0xd0edc9.loglevel <= 1) {
      console.log("XHR_Release(" + _0x54d903 + ")");
    }
    delete _0xd0edc9.requestInstances[_0x54d903];
  }
  function _0x3d0746(_0xdc4cca, _0x4843a9, _0x44efbb) {
    if (_0xd0edc9.loglevel <= 1) {
      console.log("XHR_Send(" + _0xdc4cca + ", " + _0x4843a9 + ", " + _0x44efbb + ")");
    }
    var _0x261a6a = _0xd0edc9.requestInstances[_0xdc4cca];
    try {
      if (_0x44efbb > 0) {
        _0x261a6a.send(_0x2c14c3.subarray(_0x4843a9, _0x4843a9 + _0x44efbb));
      } else {
        _0x261a6a.send();
      }
    } catch (_0x105b41) {
      if (_0xd0edc9.loglevel <= 4) {
        console.error("XHR_Send(" + _0xdc4cca + "): " + _0x105b41.name + " : " + _0x105b41.message);
      }
    }
  }
  function _0x48b547(_0x4bbab5) {
    _0xd0edc9.loglevel = _0x4bbab5;
  }
  function _0x3f2f95(_0x5db86d, _0xc5cace, _0x234383) {
    if (_0xd0edc9.loglevel <= 1) {
      console.log("XHR_SetProgressHandler(" + _0x5db86d + ")");
    }
    var _0x5d304f = _0xd0edc9.requestInstances[_0x5db86d];
    if (_0x5d304f) {
      if (_0xc5cace) {
        _0x5d304f.onprogress = function _0x21987e(_0x5d7e52) {
          if (_0xd0edc9.loglevel <= 1) {
            console.log("XHR_SetProgressHandler download(" + _0x5db86d + ", " + _0x5d7e52.loaded + ", " + _0x5d7e52.total + ")");
          }
          if (_0x5d7e52.lengthComputable) {
            (function (_0x1c7103, _0x21ab5a, _0x191dd6) {
              _0x24e3fb.apply(null, [_0xc5cace, _0x1c7103, _0x21ab5a, _0x191dd6]);
            })(_0x5db86d, _0x5d7e52.loaded, _0x5d7e52.total);
          }
        };
      }
      if (_0x234383) {
        _0x5d304f.upload.addEventListener("progress", function _0x458571(_0x54caef) {
          if (_0xd0edc9.loglevel <= 1) {
            console.log("XHR_SetProgressHandler upload(" + _0x5db86d + ", " + _0x54caef.loaded + ", " + _0x54caef.total + ")");
          }
          if (_0x54caef.lengthComputable) {
            (function (_0x9b90dd, _0x36ed21, _0x4e785b) {
              _0x24e3fb.apply(null, [_0x234383, _0x9b90dd, _0x36ed21, _0x4e785b]);
            })(_0x5db86d, _0x54caef.loaded, _0x54caef.total);
          }
        }, true);
      }
    }
  }
  function _0xcfed5d(_0x56b39b, _0x4edeb0, _0x4b2318) {
    var _0x42c768 = _0x5ea6bb(_0x4edeb0);
    var _0x2e7425 = _0x5ea6bb(_0x4b2318);
    if (_0xd0edc9.loglevel <= 1) {
      console.log("XHR_SetRequestHeader(" + _0x42c768 + ", " + _0x2e7425 + ")");
    }
    if (_0x42c768 != "Cookie") {
      _0xd0edc9.requestInstances[_0x56b39b].setRequestHeader(_0x42c768, _0x2e7425);
    } else {
      var _0x22a12c = _0x2e7425.split(";");
      for (var _0x56a1e6 = 0; _0x56a1e6 < _0x22a12c.length; _0x56a1e6++) {
        document.cookie = _0x22a12c[_0x56a1e6];
      }
    }
  }
  function _0x4e150d(_0x167ffd, _0x1f1652, _0x143590, _0x3e5539, _0x12c975, _0x58a597, _0x5bf40c) {
    if (_0xd0edc9.loglevel <= 1) {
      console.log("XHR_SetResponseHandler(" + _0x167ffd + ")");
    }
    _0xd0edc9.onallocbuffer = _0x5bf40c;
    var _0x6a2f62 = _0xd0edc9.requestInstances[_0x167ffd];
    _0x6a2f62.onreadystatechange = _0x19aab0 => {
      if (_0xd0edc9.loglevel <= 1) {
        console.log(_0x167ffd + " onreadystatechange(" + _0x6a2f62.readyState + ")");
      }
      switch (_0x6a2f62.readyState) {
        case XMLHttpRequest.UNSENT:
          break;
        case XMLHttpRequest.OPENED:
          break;
        case XMLHttpRequest.HEADERS_RECEIVED:
          {
            _0xd0edc9.SendTextToCSharpSide(_0x167ffd, _0x58a597, "HTTP/1.1 " + _0x6a2f62.status + " " + _0x6a2f62.statusText + "\n");
            _0xd0edc9.GetResponseHeaders(_0x167ffd, _0x58a597);
            break;
          }
        case XMLHttpRequest.LOADING:
          break;
        case XMLHttpRequest.DONE:
          break;
      }
    };
    _0x6a2f62.onloadstart = _0x164045 => {
      if (_0xd0edc9.loglevel <= 1) {
        console.log(_0x167ffd + " onloadstart: " + _0x164045);
      }
    };
    _0x6a2f62.onload = function _0x23db24(_0x427308) {
      if (_0xd0edc9.loglevel <= 1) {
        console.log(_0x167ffd + " onload(" + _0x6a2f62.status + ", " + _0x6a2f62.statusText + ")");
      }
      if (_0x1f1652) {
        var _0x40622e = 0;
        var _0x4db961 = 0;
        if (_0x6a2f62.response) {
          var _0x3b7315 = _0x6a2f62.response;
          _0x40622e = _0x3b7315.byteLength;
          _0xd0edc9.SendTextToCSharpSide(_0x167ffd, _0x58a597, "content-length:" + _0x40622e + "\n\n");
          _0x4db961 = function (_0x3ac24c, _0x490faf) {
            return _0x2e0f87.apply(null, [_0x5bf40c, _0x3ac24c, _0x490faf]);
          }(_0x167ffd, _0x40622e);
          var _0x8abe4f = new Uint8Array(_0x3b7315);
          var _0x344909 = _0x2c14c3.subarray(_0x4db961, _0x4db961 + _0x40622e);
          _0x344909.set(_0x8abe4f);
        } else {
          _0xd0edc9.SendTextToCSharpSide(_0x167ffd, _0x58a597, "content-length:0\n\n");
        }
        (function (_0x10efb9, _0xf2fe76, _0x4af742) {
          _0x24e3fb.apply(null, [_0x1f1652, _0x10efb9, _0xf2fe76, _0x4af742]);
        })(_0x167ffd, _0x4db961, _0x40622e);
      }
    };
    if (_0x143590) {
      _0x6a2f62.onerror = function _0x378014(_0x54cb51) {
        function _0x17dce6(_0x16bfa4) {
          var _0x388291 = _0x55b306(_0x16bfa4) + 1;
          var _0x2ff9bc = _0x57219e(_0x388291);
          _0x5aa101(_0x16bfa4, _0x2c14c3, _0x2ff9bc, _0x388291);
          (function (_0x240dd0, _0xea2218) {
            _0x234acb.apply(null, [_0x143590, _0x240dd0, _0xea2218]);
          })(_0x167ffd, _0x2ff9bc);
          _0x4401e3(_0x2ff9bc);
        }
        if (_0x54cb51.error) {
          _0x17dce6(_0x54cb51.error);
        } else {
          _0x17dce6("Unknown Error! Maybe a CORS porblem?");
        }
      };
    }
    if (_0x3e5539) {
      _0x6a2f62.ontimeout = function _0x3bf365(_0x122e00) {
        (function (_0x161f70) {
          _0x53a2c3.apply(null, [_0x3e5539, _0x161f70]);
        })(_0x167ffd);
      };
    }
    if (_0x12c975) {
      _0x6a2f62.onabort = function _0x44a3f4(_0xa7bbc8) {
        (function (_0xec2c47) {
          _0x53a2c3.apply(null, [_0x12c975, _0xec2c47]);
        })(_0x167ffd);
      };
    }
  }
  function _0x5525e5(_0x2ebac0, _0x22bb10) {
    if (_0xd0edc9.loglevel <= 1) {
      console.log("XHR_SetTimeout(" + _0x2ebac0 + ", " + _0x22bb10 + ")");
    }
    _0xd0edc9.requestInstances[_0x2ebac0].timeout = _0x22bb10;
  }
  var _0x16960a = {
    DESTRUCTOR_OFFSET: 0,
    REFCOUNT_OFFSET: 4,
    TYPE_OFFSET: 8,
    CAUGHT_OFFSET: 12,
    RETHROWN_OFFSET: 13,
    SIZE: 16
  };
  function _0x47af0f(_0x69b92a) {
    return _0x57219e(_0x69b92a + _0x16960a.SIZE) + _0x16960a.SIZE;
  }
  function _0x3a931b(_0x3709fd) {
    this.excPtr = _0x3709fd;
    this.ptr = _0x3709fd - _0x16960a.SIZE;
    this.set_type = function (_0x5ab773) {
      _0x1b79ed[this.ptr + _0x16960a.TYPE_OFFSET >> 2] = _0x5ab773;
    };
    this.get_type = function () {
      return _0x1b79ed[this.ptr + _0x16960a.TYPE_OFFSET >> 2];
    };
    this.set_destructor = function (_0x5272e5) {
      _0x1b79ed[this.ptr + _0x16960a.DESTRUCTOR_OFFSET >> 2] = _0x5272e5;
    };
    this.get_destructor = function () {
      return _0x1b79ed[this.ptr + _0x16960a.DESTRUCTOR_OFFSET >> 2];
    };
    this.set_refcount = function (_0x16dcc0) {
      _0x1b79ed[this.ptr + _0x16960a.REFCOUNT_OFFSET >> 2] = _0x16dcc0;
    };
    this.set_caught = function (_0x32d285) {
      _0x32d285 = _0x32d285 ? 1 : 0;
      _0x18b38f[this.ptr + _0x16960a.CAUGHT_OFFSET >> 0] = _0x32d285;
    };
    this.get_caught = function () {
      return _0x18b38f[this.ptr + _0x16960a.CAUGHT_OFFSET >> 0] != 0;
    };
    this.set_rethrown = function (_0x44e141) {
      _0x44e141 = _0x44e141 ? 1 : 0;
      _0x18b38f[this.ptr + _0x16960a.RETHROWN_OFFSET >> 0] = _0x44e141;
    };
    this.get_rethrown = function () {
      return _0x18b38f[this.ptr + _0x16960a.RETHROWN_OFFSET >> 0] != 0;
    };
    this.init = function (_0x35f719, _0x2c7fee) {
      this.set_type(_0x35f719);
      this.set_destructor(_0x2c7fee);
      this.set_refcount(0);
      this.set_caught(false);
      this.set_rethrown(false);
    };
    this.add_ref = function () {
      var _0x41637b = _0x1b79ed[this.ptr + _0x16960a.REFCOUNT_OFFSET >> 2];
      _0x1b79ed[this.ptr + _0x16960a.REFCOUNT_OFFSET >> 2] = _0x41637b + 1;
    };
    this.release_ref = function () {
      var _0x3742a1 = _0x1b79ed[this.ptr + _0x16960a.REFCOUNT_OFFSET >> 2];
      _0x1b79ed[this.ptr + _0x16960a.REFCOUNT_OFFSET >> 2] = _0x3742a1 - 1;
      return _0x3742a1 === 1;
    };
  }
  function _0x44c3f1(_0x162263) {
    this.free = function () {
      _0x4401e3(this.ptr);
      this.ptr = 0;
    };
    this.set_base_ptr = function (_0x92dc03) {
      _0x1b79ed[this.ptr >> 2] = _0x92dc03;
    };
    this.get_base_ptr = function () {
      return _0x1b79ed[this.ptr >> 2];
    };
    this.set_adjusted_ptr = function (_0x539676) {
      var _0x31f3d8 = 4;
      _0x1b79ed[this.ptr + _0x31f3d8 >> 2] = _0x539676;
    };
    this.get_adjusted_ptr = function () {
      var _0x12f90c = 4;
      return _0x1b79ed[this.ptr + _0x12f90c >> 2];
    };
    this.get_exception_ptr = function () {
      var _0x10e79a = _0x4f118b(this.get_exception_info().get_type());
      if (_0x10e79a) {
        return _0x1b79ed[this.get_base_ptr() >> 2];
      }
      var _0x3fb723 = this.get_adjusted_ptr();
      if (_0x3fb723 !== 0) {
        return _0x3fb723;
      }
      return this.get_base_ptr();
    };
    this.get_exception_info = function () {
      return new _0x3a931b(this.get_base_ptr());
    };
    if (_0x162263 === undefined) {
      this.ptr = _0x57219e(8);
      this.set_adjusted_ptr(0);
    } else {
      this.ptr = _0x162263;
    }
  }
  var _0x133976 = [];
  function _0x40c731(_0x23463d) {
    _0x23463d.add_ref();
  }
  var _0x2295bb = 0;
  function _0x2fca27(_0x10bfbc) {
    var _0x180e2e = new _0x44c3f1(_0x10bfbc);
    var _0x2dd5d6 = _0x180e2e.get_exception_info();
    if (!_0x2dd5d6.get_caught()) {
      _0x2dd5d6.set_caught(true);
      _0x2295bb--;
    }
    _0x2dd5d6.set_rethrown(false);
    _0x133976.push(_0x180e2e);
    _0x40c731(_0x2dd5d6);
    return _0x180e2e.get_exception_ptr();
  }
  var _0x58adf0 = 0;
  function _0x36cc4c(_0x5b192f) {
    return _0x4401e3(new _0x3a931b(_0x5b192f).ptr);
  }
  function _0x4a070a(_0x1e4135) {
    if (_0x1e4135.release_ref() && !_0x1e4135.get_rethrown()) {
      var _0x20f932 = _0x1e4135.get_destructor();
      if (_0x20f932) {
        (function (_0x452537) {
          return _0x4bfd1a.apply(null, [_0x20f932, _0x452537]);
        })(_0x1e4135.excPtr);
      }
      _0x36cc4c(_0x1e4135.excPtr);
    }
  }
  function _0x45021b() {
    _0x2517d0(0);
    var _0x5c5a62 = _0x133976.pop();
    _0x4a070a(_0x5c5a62.get_exception_info());
    _0x5c5a62.free();
    _0x58adf0 = 0;
  }
  function _0x3ad863(_0x308879) {
    var _0xb5d28a = new _0x44c3f1(_0x308879);
    var _0x37e11d = _0xb5d28a.get_base_ptr();
    if (!_0x58adf0) {
      _0x58adf0 = _0x37e11d;
    }
    _0xb5d28a.free();
    throw _0x37e11d;
  }
  function _0x24095d() {
    var _0x2e7272 = _0x58adf0;
    if (!_0x2e7272) {
      _0x4cb270(0);
      return 0;
    }
    var _0x35aa21 = new _0x3a931b(_0x2e7272);
    var _0x2c30ca = _0x35aa21.get_type();
    var _0x10f062 = new _0x44c3f1();
    _0x10f062.set_base_ptr(_0x2e7272);
    if (!_0x2c30ca) {
      _0x4cb270(0);
      return _0x10f062.ptr | 0;
    }
    var _0x59dec8 = Array.prototype.slice.call(arguments);
    var _0x5d8d86 = _0x3e11a3();
    var _0x110a34 = _0x5c3d23(4);
    _0x1b79ed[_0x110a34 >> 2] = _0x2e7272;
    for (var _0x273fcf = 0; _0x273fcf < _0x59dec8.length; _0x273fcf++) {
      var _0x2272a9 = _0x59dec8[_0x273fcf];
      if (_0x2272a9 === 0 || _0x2272a9 === _0x2c30ca) {
        break;
      }
      if (_0x44175d(_0x2272a9, _0x2c30ca, _0x110a34)) {
        var _0x3adb49 = _0x1b79ed[_0x110a34 >> 2];
        if (_0x2e7272 !== _0x3adb49) {
          _0x10f062.set_adjusted_ptr(_0x3adb49);
        }
        _0x4cb270(_0x2272a9);
        return _0x10f062.ptr | 0;
      }
    }
    _0x18d96d(_0x5d8d86);
    _0x4cb270(_0x2c30ca);
    return _0x10f062.ptr | 0;
  }
  function _0xb9f2ec() {
    var _0x469cf5 = _0x58adf0;
    if (!_0x469cf5) {
      _0x4cb270(0);
      return 0;
    }
    var _0x389590 = new _0x3a931b(_0x469cf5);
    var _0x8764b3 = _0x389590.get_type();
    var _0x50cf27 = new _0x44c3f1();
    _0x50cf27.set_base_ptr(_0x469cf5);
    if (!_0x8764b3) {
      _0x4cb270(0);
      return _0x50cf27.ptr | 0;
    }
    var _0x4e14ab = Array.prototype.slice.call(arguments);
    var _0x23a6f7 = _0x3e11a3();
    var _0x52461c = _0x5c3d23(4);
    _0x1b79ed[_0x52461c >> 2] = _0x469cf5;
    for (var _0x5533c3 = 0; _0x5533c3 < _0x4e14ab.length; _0x5533c3++) {
      var _0x40639f = _0x4e14ab[_0x5533c3];
      if (_0x40639f === 0 || _0x40639f === _0x8764b3) {
        break;
      }
      if (_0x44175d(_0x40639f, _0x8764b3, _0x52461c)) {
        var _0x16a0c9 = _0x1b79ed[_0x52461c >> 2];
        if (_0x469cf5 !== _0x16a0c9) {
          _0x50cf27.set_adjusted_ptr(_0x16a0c9);
        }
        _0x4cb270(_0x40639f);
        return _0x50cf27.ptr | 0;
      }
    }
    _0x18d96d(_0x23a6f7);
    _0x4cb270(_0x8764b3);
    return _0x50cf27.ptr | 0;
  }
  function _0x2f66d6() {
    var _0x1c4ca2 = _0x58adf0;
    if (!_0x1c4ca2) {
      _0x4cb270(0);
      return 0;
    }
    var _0x2d26e1 = new _0x3a931b(_0x1c4ca2);
    var _0x2eb9db = _0x2d26e1.get_type();
    var _0x19fa13 = new _0x44c3f1();
    _0x19fa13.set_base_ptr(_0x1c4ca2);
    if (!_0x2eb9db) {
      _0x4cb270(0);
      return _0x19fa13.ptr | 0;
    }
    var _0x2aeed0 = Array.prototype.slice.call(arguments);
    var _0x1cd776 = _0x3e11a3();
    var _0xd5f25b = _0x5c3d23(4);
    _0x1b79ed[_0xd5f25b >> 2] = _0x1c4ca2;
    for (var _0x284c62 = 0; _0x284c62 < _0x2aeed0.length; _0x284c62++) {
      var _0x490b23 = _0x2aeed0[_0x284c62];
      if (_0x490b23 === 0 || _0x490b23 === _0x2eb9db) {
        break;
      }
      if (_0x44175d(_0x490b23, _0x2eb9db, _0xd5f25b)) {
        var _0x3e2048 = _0x1b79ed[_0xd5f25b >> 2];
        if (_0x1c4ca2 !== _0x3e2048) {
          _0x19fa13.set_adjusted_ptr(_0x3e2048);
        }
        _0x4cb270(_0x490b23);
        return _0x19fa13.ptr | 0;
      }
    }
    _0x18d96d(_0x1cd776);
    _0x4cb270(_0x2eb9db);
    return _0x19fa13.ptr | 0;
  }
  function _0x58ab5a() {
    var _0x4a9053 = _0x133976.pop();
    if (!_0x4a9053) {
      _0x38247b("no exception to throw");
    }
    var _0x5a5a2f = _0x4a9053.get_exception_info();
    var _0x2e07e4 = _0x4a9053.get_base_ptr();
    if (!_0x5a5a2f.get_rethrown()) {
      _0x133976.push(_0x4a9053);
      _0x5a5a2f.set_rethrown(true);
      _0x5a5a2f.set_caught(false);
      _0x2295bb++;
    } else {
      _0x4a9053.free();
    }
    _0x58adf0 = _0x2e07e4;
    throw _0x2e07e4;
  }
  function _0x1124ea(_0x3cb904, _0x4fb4de, _0xcec5b4) {
    var _0x464cae = new _0x3a931b(_0x3cb904);
    _0x464cae.init(_0x4fb4de, _0xcec5b4);
    _0x58adf0 = _0x3cb904;
    _0x2295bb++;
    throw _0x3cb904;
  }
  function _0x115feb(_0xfe9993, _0x1cde0f) {
    var _0x2215c7 = new Date(_0x1b79ed[_0xfe9993 >> 2] * 1000);
    _0x1b79ed[_0x1cde0f >> 2] = _0x2215c7.getUTCSeconds();
    _0x1b79ed[_0x1cde0f + 4 >> 2] = _0x2215c7.getUTCMinutes();
    _0x1b79ed[_0x1cde0f + 8 >> 2] = _0x2215c7.getUTCHours();
    _0x1b79ed[_0x1cde0f + 12 >> 2] = _0x2215c7.getUTCDate();
    _0x1b79ed[_0x1cde0f + 16 >> 2] = _0x2215c7.getUTCMonth();
    _0x1b79ed[_0x1cde0f + 20 >> 2] = _0x2215c7.getUTCFullYear() - 1900;
    _0x1b79ed[_0x1cde0f + 24 >> 2] = _0x2215c7.getUTCDay();
    _0x1b79ed[_0x1cde0f + 36 >> 2] = 0;
    _0x1b79ed[_0x1cde0f + 32 >> 2] = 0;
    var _0x53bbf3 = Date.UTC(_0x2215c7.getUTCFullYear(), 0, 1, 0, 0, 0, 0);
    var _0x26539f = (_0x2215c7.getTime() - _0x53bbf3) / 86400000 | 0;
    _0x1b79ed[_0x1cde0f + 28 >> 2] = _0x26539f;
    if (!_0x115feb.GMTString) {
      _0x115feb.GMTString = _0x3baa96("GMT");
    }
    _0x1b79ed[_0x1cde0f + 40 >> 2] = _0x115feb.GMTString;
    return _0x1cde0f;
  }
  function _0x3b0437(_0x34a079, _0x4d857e) {
    return _0x115feb(_0x34a079, _0x4d857e);
  }
  function _0x337cf0() {
    if (_0x337cf0.called) {
      return;
    }
    _0x337cf0.called = true;
    var _0x1d80dd = new Date().getFullYear();
    var _0x2a963a = new Date(_0x1d80dd, 0, 1);
    var _0x2c5988 = new Date(_0x1d80dd, 6, 1);
    var _0x51298e = _0x2a963a.getTimezoneOffset();
    var _0x5b74f4 = _0x2c5988.getTimezoneOffset();
    var _0x2bf026 = Math.max(_0x51298e, _0x5b74f4);
    _0x1b79ed[_0x3cccd2() >> 2] = _0x2bf026 * 60;
    _0x1b79ed[_0x28349c() >> 2] = Number(_0x51298e != _0x5b74f4);
    function _0x5c8736(_0x45e506) {
      var _0x10e3a6 = _0x45e506.toTimeString().match(/\(([A-Za-z ]+)\)$/);
      if (_0x10e3a6) {
        return _0x10e3a6[1];
      } else {
        return "GMT";
      }
    }
    var _0x502934 = _0x5c8736(_0x2a963a);
    var _0x110a08 = _0x5c8736(_0x2c5988);
    var _0x23532a = _0x3baa96(_0x502934);
    var _0x6cce50 = _0x3baa96(_0x110a08);
    if (_0x5b74f4 < _0x51298e) {
      _0x1b79ed[_0x4488b5() >> 2] = _0x23532a;
      _0x1b79ed[_0x4488b5() + 4 >> 2] = _0x6cce50;
    } else {
      _0x1b79ed[_0x4488b5() >> 2] = _0x6cce50;
      _0x1b79ed[_0x4488b5() + 4 >> 2] = _0x23532a;
    }
  }
  function _0x9d295a(_0x267690, _0x4e1341) {
    _0x337cf0();
    var _0x11f4d6 = new Date(_0x1b79ed[_0x267690 >> 2] * 1000);
    _0x1b79ed[_0x4e1341 >> 2] = _0x11f4d6.getSeconds();
    _0x1b79ed[_0x4e1341 + 4 >> 2] = _0x11f4d6.getMinutes();
    _0x1b79ed[_0x4e1341 + 8 >> 2] = _0x11f4d6.getHours();
    _0x1b79ed[_0x4e1341 + 12 >> 2] = _0x11f4d6.getDate();
    _0x1b79ed[_0x4e1341 + 16 >> 2] = _0x11f4d6.getMonth();
    _0x1b79ed[_0x4e1341 + 20 >> 2] = _0x11f4d6.getFullYear() - 1900;
    _0x1b79ed[_0x4e1341 + 24 >> 2] = _0x11f4d6.getDay();
    var _0x45639a = new Date(_0x11f4d6.getFullYear(), 0, 1);
    var _0x3ac644 = (_0x11f4d6.getTime() - _0x45639a.getTime()) / 86400000 | 0;
    _0x1b79ed[_0x4e1341 + 28 >> 2] = _0x3ac644;
    _0x1b79ed[_0x4e1341 + 36 >> 2] = -(_0x11f4d6.getTimezoneOffset() * 60);
    var _0x54d640 = new Date(_0x11f4d6.getFullYear(), 6, 1).getTimezoneOffset();
    var _0x3f1cab = _0x45639a.getTimezoneOffset();
    var _0xa1ebf7 = (_0x54d640 != _0x3f1cab && _0x11f4d6.getTimezoneOffset() == Math.min(_0x3f1cab, _0x54d640)) | 0;
    _0x1b79ed[_0x4e1341 + 32 >> 2] = _0xa1ebf7;
    var _0x4ba0b0 = _0x1b79ed[_0x4488b5() + (_0xa1ebf7 ? 4 : 0) >> 2];
    _0x1b79ed[_0x4e1341 + 40 >> 2] = _0x4ba0b0;
    return _0x4e1341;
  }
  function _0x13c533(_0x4f84e1, _0x6ebf2b) {
    return _0x9d295a(_0x4f84e1, _0x6ebf2b);
  }
  var _0x477856 = {
    splitPath: function (_0x5c843a) {
      var _0x3a384d = /^(\/?|)([\s\S]*?)((?:\.{1,2}|[^\/]+?|)(\.[^.\/]*|))(?:[\/]*)$/;
      return _0x3a384d.exec(_0x5c843a).slice(1);
    },
    normalizeArray: function (_0xed4eeb, _0x42e149) {
      var _0x177278 = 0;
      for (var _0x2ac56e = _0xed4eeb.length - 1; _0x2ac56e >= 0; _0x2ac56e--) {
        var _0x54c798 = _0xed4eeb[_0x2ac56e];
        if (_0x54c798 === ".") {
          _0xed4eeb.splice(_0x2ac56e, 1);
        } else if (_0x54c798 === "..") {
          _0xed4eeb.splice(_0x2ac56e, 1);
          _0x177278++;
        } else if (_0x177278) {
          _0xed4eeb.splice(_0x2ac56e, 1);
          _0x177278--;
        }
      }
      if (_0x42e149) {
        for (; _0x177278; _0x177278--) {
          _0xed4eeb.unshift("..");
        }
      }
      return _0xed4eeb;
    },
    normalize: function (_0x263c4a) {
      var _0xa05ee2 = _0x263c4a.charAt(0) === "/";
      var _0x116a90 = _0x263c4a.substr(-1) === "/";
      _0x263c4a = _0x477856.normalizeArray(_0x263c4a.split("/").filter(function (_0x241d1a) {
        return !!_0x241d1a;
      }), !_0xa05ee2).join("/");
      if (!_0x263c4a && !_0xa05ee2) {
        _0x263c4a = ".";
      }
      if (_0x263c4a && _0x116a90) {
        _0x263c4a += "/";
      }
      return (_0xa05ee2 ? "/" : "") + _0x263c4a;
    },
    dirname: function (_0x124d18) {
      var _0x5e1031 = _0x477856.splitPath(_0x124d18);
      var _0x16e349 = _0x5e1031[0];
      var _0x4395f6 = _0x5e1031[1];
      if (!_0x16e349 && !_0x4395f6) {
        return ".";
      }
      _0x4395f6 &&= _0x4395f6.substr(0, _0x4395f6.length - 1);
      return _0x16e349 + _0x4395f6;
    },
    basename: function (_0x46989a) {
      if (_0x46989a === "/") {
        return "/";
      }
      _0x46989a = _0x477856.normalize(_0x46989a);
      _0x46989a = _0x46989a.replace(/\/$/, "");
      var _0x1ffc80 = _0x46989a.lastIndexOf("/");
      if (_0x1ffc80 === -1) {
        return _0x46989a;
      }
      return _0x46989a.substr(_0x1ffc80 + 1);
    },
    extname: function (_0xbd27ba) {
      return _0x477856.splitPath(_0xbd27ba)[3];
    },
    join: function () {
      var _0xdfdb09 = Array.prototype.slice.call(arguments, 0);
      return _0x477856.normalize(_0xdfdb09.join("/"));
    },
    join2: function (_0x1a9bbd, _0x3d156f) {
      return _0x477856.normalize(_0x1a9bbd + "/" + _0x3d156f);
    }
  };
  function _0x5f25a1() {
    if (typeof crypto === "object" && typeof crypto.getRandomValues === "function") {
      var _0x1b7672 = new Uint8Array(1);
      return function () {
        crypto.getRandomValues(_0x1b7672);
        return _0x1b7672[0];
      };
    } else if (_0x36ba64) {
      try {
        var _0x1c2e97 = require("crypto");
        return function () {
          return _0x1c2e97.randomBytes(1)[0];
        };
      } catch (_0x45f785) {}
    }
    return function () {
      _0x38247b("randomDevice");
    };
  }
  var _0x1bac66 = {
    resolve: function () {
      var _0xb5678d = "";
      var _0x4b79fc = false;
      for (var _0x39b326 = arguments.length - 1; _0x39b326 >= -1 && !_0x4b79fc; _0x39b326--) {
        var _0xacb935 = _0x39b326 >= 0 ? arguments[_0x39b326] : _0x4c1d54.cwd();
        if (typeof _0xacb935 !== "string") {
          throw new TypeError("Arguments to path.resolve must be strings");
        } else if (!_0xacb935) {
          return "";
        }
        _0xb5678d = _0xacb935 + "/" + _0xb5678d;
        _0x4b79fc = _0xacb935.charAt(0) === "/";
      }
      _0xb5678d = _0x477856.normalizeArray(_0xb5678d.split("/").filter(function (_0x390ed6) {
        return !!_0x390ed6;
      }), !_0x4b79fc).join("/");
      return (_0x4b79fc ? "/" : "") + _0xb5678d || ".";
    },
    relative: function (_0x1273b2, _0x8c59eb) {
      _0x1273b2 = _0x1bac66.resolve(_0x1273b2).substr(1);
      _0x8c59eb = _0x1bac66.resolve(_0x8c59eb).substr(1);
      function _0x569496(_0x5ba296) {
        var _0x283baa = 0;
        for (; _0x283baa < _0x5ba296.length; _0x283baa++) {
          if (_0x5ba296[_0x283baa] !== "") {
            break;
          }
        }
        var _0x1c6577 = _0x5ba296.length - 1;
        for (; _0x1c6577 >= 0; _0x1c6577--) {
          if (_0x5ba296[_0x1c6577] !== "") {
            break;
          }
        }
        if (_0x283baa > _0x1c6577) {
          return [];
        }
        return _0x5ba296.slice(_0x283baa, _0x1c6577 - _0x283baa + 1);
      }
      var _0x2b89b7 = _0x569496(_0x1273b2.split("/"));
      var _0x2e1d58 = _0x569496(_0x8c59eb.split("/"));
      var _0x236f1b = Math.min(_0x2b89b7.length, _0x2e1d58.length);
      var _0x5f15c2 = _0x236f1b;
      for (var _0x5618c5 = 0; _0x5618c5 < _0x236f1b; _0x5618c5++) {
        if (_0x2b89b7[_0x5618c5] !== _0x2e1d58[_0x5618c5]) {
          _0x5f15c2 = _0x5618c5;
          break;
        }
      }
      var _0x417ad7 = [];
      for (var _0x5618c5 = _0x5f15c2; _0x5618c5 < _0x2b89b7.length; _0x5618c5++) {
        _0x417ad7.push("..");
      }
      _0x417ad7 = _0x417ad7.concat(_0x2e1d58.slice(_0x5f15c2));
      return _0x417ad7.join("/");
    }
  };
  var _0x1eeb21 = {
    ttys: [],
    init: function () {},
    shutdown: function () {},
    register: function (_0x1ee2fb, _0x176787) {
      _0x1eeb21.ttys[_0x1ee2fb] = {
        input: [],
        output: [],
        ops: _0x176787
      };
      _0x4c1d54.registerDevice(_0x1ee2fb, _0x1eeb21.stream_ops);
    },
    stream_ops: {
      open: function (_0x35cfba) {
        var _0x47f549 = _0x1eeb21.ttys[_0x35cfba.node.rdev];
        if (!_0x47f549) {
          throw new _0x4c1d54.ErrnoError(43);
        }
        _0x35cfba.tty = _0x47f549;
        _0x35cfba.seekable = false;
      },
      close: function (_0x24cb98) {
        _0x24cb98.tty.ops.flush(_0x24cb98.tty);
      },
      flush: function (_0x2ac30c) {
        _0x2ac30c.tty.ops.flush(_0x2ac30c.tty);
      },
      read: function (_0xd64535, _0x404994, _0x384876, _0x2f0ce0, _0x1ee7cd) {
        if (!_0xd64535.tty || !_0xd64535.tty.ops.get_char) {
          throw new _0x4c1d54.ErrnoError(60);
        }
        var _0x55f96f = 0;
        for (var _0x4484b3 = 0; _0x4484b3 < _0x2f0ce0; _0x4484b3++) {
          var _0x4c7ec9;
          try {
            _0x4c7ec9 = _0xd64535.tty.ops.get_char(_0xd64535.tty);
          } catch (_0x17acab) {
            throw new _0x4c1d54.ErrnoError(29);
          }
          if (_0x4c7ec9 === undefined && _0x55f96f === 0) {
            throw new _0x4c1d54.ErrnoError(6);
          }
          if (_0x4c7ec9 === null || _0x4c7ec9 === undefined) {
            break;
          }
          _0x55f96f++;
          _0x404994[_0x384876 + _0x4484b3] = _0x4c7ec9;
        }
        if (_0x55f96f) {
          _0xd64535.node.timestamp = Date.now();
        }
        return _0x55f96f;
      },
      write: function (_0x1cce9c, _0x3ad2c, _0x4ef1fa, _0x455a24, _0x470a3a) {
        if (!_0x1cce9c.tty || !_0x1cce9c.tty.ops.put_char) {
          throw new _0x4c1d54.ErrnoError(60);
        }
        try {
          for (var _0x56145e = 0; _0x56145e < _0x455a24; _0x56145e++) {
            _0x1cce9c.tty.ops.put_char(_0x1cce9c.tty, _0x3ad2c[_0x4ef1fa + _0x56145e]);
          }
        } catch (_0x3a8d10) {
          throw new _0x4c1d54.ErrnoError(29);
        }
        if (_0x455a24) {
          _0x1cce9c.node.timestamp = Date.now();
        }
        return _0x56145e;
      }
    },
    default_tty_ops: {
      get_char: function (_0x21c99e) {
        if (!_0x21c99e.input.length) {
          var _0x28e597 = null;
          if (_0x36ba64) {
            var _0x80be6 = 256;
            var _0x310078 = Buffer.alloc ? Buffer.alloc(_0x80be6) : new Buffer(_0x80be6);
            var _0x383f3e = 0;
            try {
              _0x383f3e = _0x43afde.readSync(process.stdin.fd, _0x310078, 0, _0x80be6, null);
            } catch (_0x1f8799) {
              if (_0x1f8799.toString().includes("EOF")) {
                _0x383f3e = 0;
              } else {
                throw _0x1f8799;
              }
            }
            if (_0x383f3e > 0) {
              _0x28e597 = _0x310078.slice(0, _0x383f3e).toString("utf-8");
            } else {
              _0x28e597 = null;
            }
          } else if (typeof window != "undefined" && typeof window.prompt == "function") {
            _0x28e597 = window.prompt("Input: ");
            if (_0x28e597 !== null) {
              _0x28e597 += "\n";
            }
          } else if (typeof readline == "function") {
            _0x28e597 = readline();
            if (_0x28e597 !== null) {
              _0x28e597 += "\n";
            }
          }
          if (!_0x28e597) {
            return null;
          }
          _0x21c99e.input = _0x3c066c(_0x28e597, true);
        }
        return _0x21c99e.input.shift();
      },
      put_char: function (_0x1802a4, _0x5b1bdd) {
        if (_0x5b1bdd === null || _0x5b1bdd === 10) {
          _0xb399e9(_0x3f3e02(_0x1802a4.output, 0));
          _0x1802a4.output = [];
        } else if (_0x5b1bdd != 0) {
          _0x1802a4.output.push(_0x5b1bdd);
        }
      },
      flush: function (_0x2a06f2) {
        if (_0x2a06f2.output && _0x2a06f2.output.length > 0) {
          _0xb399e9(_0x3f3e02(_0x2a06f2.output, 0));
          _0x2a06f2.output = [];
        }
      }
    },
    default_tty1_ops: {
      put_char: function (_0x2d28bb, _0x18acac) {
        if (_0x18acac === null || _0x18acac === 10) {
          _0x235a52(_0x3f3e02(_0x2d28bb.output, 0));
          _0x2d28bb.output = [];
        } else if (_0x18acac != 0) {
          _0x2d28bb.output.push(_0x18acac);
        }
      },
      flush: function (_0x5c3f04) {
        if (_0x5c3f04.output && _0x5c3f04.output.length > 0) {
          _0x235a52(_0x3f3e02(_0x5c3f04.output, 0));
          _0x5c3f04.output = [];
        }
      }
    }
  };
  function _0x1d8f6f(_0x379775) {
    var _0x407c18 = _0x93c4cd(_0x379775, 65536);
    var _0xf2858e = _0x57219e(_0x407c18);
    while (_0x379775 < _0x407c18) {
      _0x18b38f[_0xf2858e + _0x379775++] = 0;
    }
    return _0xf2858e;
  }
  var _0x484005 = {
    ops_table: null,
    mount: function (_0x68a1dc) {
      return _0x484005.createNode(null, "/", 16895, 0);
    },
    createNode: function (_0x5ed8db, _0x56f4ab, _0x47d363, _0x4467bf) {
      if (_0x4c1d54.isBlkdev(_0x47d363) || _0x4c1d54.isFIFO(_0x47d363)) {
        throw new _0x4c1d54.ErrnoError(63);
      }
      if (!_0x484005.ops_table) {
        _0x484005.ops_table = {
          dir: {
            node: {
              getattr: _0x484005.node_ops.getattr,
              setattr: _0x484005.node_ops.setattr,
              lookup: _0x484005.node_ops.lookup,
              mknod: _0x484005.node_ops.mknod,
              rename: _0x484005.node_ops.rename,
              unlink: _0x484005.node_ops.unlink,
              rmdir: _0x484005.node_ops.rmdir,
              readdir: _0x484005.node_ops.readdir,
              symlink: _0x484005.node_ops.symlink
            },
            stream: {
              llseek: _0x484005.stream_ops.llseek
            }
          },
          file: {
            node: {
              getattr: _0x484005.node_ops.getattr,
              setattr: _0x484005.node_ops.setattr
            },
            stream: {
              llseek: _0x484005.stream_ops.llseek,
              read: _0x484005.stream_ops.read,
              write: _0x484005.stream_ops.write,
              allocate: _0x484005.stream_ops.allocate,
              mmap: _0x484005.stream_ops.mmap,
              msync: _0x484005.stream_ops.msync
            }
          },
          link: {
            node: {
              getattr: _0x484005.node_ops.getattr,
              setattr: _0x484005.node_ops.setattr,
              readlink: _0x484005.node_ops.readlink
            },
            stream: {}
          },
          chrdev: {
            node: {
              getattr: _0x484005.node_ops.getattr,
              setattr: _0x484005.node_ops.setattr
            },
            stream: _0x4c1d54.chrdev_stream_ops
          }
        };
      }
      var _0x5ddc9d = _0x4c1d54.createNode(_0x5ed8db, _0x56f4ab, _0x47d363, _0x4467bf);
      if (_0x4c1d54.isDir(_0x5ddc9d.mode)) {
        _0x5ddc9d.node_ops = _0x484005.ops_table.dir.node;
        _0x5ddc9d.stream_ops = _0x484005.ops_table.dir.stream;
        _0x5ddc9d.contents = {};
      } else if (_0x4c1d54.isFile(_0x5ddc9d.mode)) {
        _0x5ddc9d.node_ops = _0x484005.ops_table.file.node;
        _0x5ddc9d.stream_ops = _0x484005.ops_table.file.stream;
        _0x5ddc9d.usedBytes = 0;
        _0x5ddc9d.contents = null;
      } else if (_0x4c1d54.isLink(_0x5ddc9d.mode)) {
        _0x5ddc9d.node_ops = _0x484005.ops_table.link.node;
        _0x5ddc9d.stream_ops = _0x484005.ops_table.link.stream;
      } else if (_0x4c1d54.isChrdev(_0x5ddc9d.mode)) {
        _0x5ddc9d.node_ops = _0x484005.ops_table.chrdev.node;
        _0x5ddc9d.stream_ops = _0x484005.ops_table.chrdev.stream;
      }
      _0x5ddc9d.timestamp = Date.now();
      if (_0x5ed8db) {
        _0x5ed8db.contents[_0x56f4ab] = _0x5ddc9d;
        _0x5ed8db.timestamp = _0x5ddc9d.timestamp;
      }
      return _0x5ddc9d;
    },
    getFileDataAsTypedArray: function (_0x434068) {
      if (!_0x434068.contents) {
        return new Uint8Array(0);
      }
      if (_0x434068.contents.subarray) {
        return _0x434068.contents.subarray(0, _0x434068.usedBytes);
      }
      return new Uint8Array(_0x434068.contents);
    },
    expandFileStorage: function (_0x339c61, _0x373411) {
      var _0x540da7 = _0x339c61.contents ? _0x339c61.contents.length : 0;
      if (_0x540da7 >= _0x373411) {
        return;
      }
      var _0x5aa1ab = 1048576;
      _0x373411 = Math.max(_0x373411, _0x540da7 * (_0x540da7 < _0x5aa1ab ? 2 : 1.125) >>> 0);
      if (_0x540da7 != 0) {
        _0x373411 = Math.max(_0x373411, 256);
      }
      var _0xb5aa0c = _0x339c61.contents;
      _0x339c61.contents = new Uint8Array(_0x373411);
      if (_0x339c61.usedBytes > 0) {
        _0x339c61.contents.set(_0xb5aa0c.subarray(0, _0x339c61.usedBytes), 0);
      }
    },
    resizeFileStorage: function (_0xf7b4e8, _0x290816) {
      if (_0xf7b4e8.usedBytes == _0x290816) {
        return;
      }
      if (_0x290816 == 0) {
        _0xf7b4e8.contents = null;
        _0xf7b4e8.usedBytes = 0;
      } else {
        var _0x311737 = _0xf7b4e8.contents;
        _0xf7b4e8.contents = new Uint8Array(_0x290816);
        if (_0x311737) {
          _0xf7b4e8.contents.set(_0x311737.subarray(0, Math.min(_0x290816, _0xf7b4e8.usedBytes)));
        }
        _0xf7b4e8.usedBytes = _0x290816;
      }
    },
    node_ops: {
      getattr: function (_0x5d3822) {
        var _0xe53937 = {};
        _0xe53937.dev = _0x4c1d54.isChrdev(_0x5d3822.mode) ? _0x5d3822.id : 1;
        _0xe53937.ino = _0x5d3822.id;
        _0xe53937.mode = _0x5d3822.mode;
        _0xe53937.nlink = 1;
        _0xe53937.uid = 0;
        _0xe53937.gid = 0;
        _0xe53937.rdev = _0x5d3822.rdev;
        if (_0x4c1d54.isDir(_0x5d3822.mode)) {
          _0xe53937.size = 4096;
        } else if (_0x4c1d54.isFile(_0x5d3822.mode)) {
          _0xe53937.size = _0x5d3822.usedBytes;
        } else if (_0x4c1d54.isLink(_0x5d3822.mode)) {
          _0xe53937.size = _0x5d3822.link.length;
        } else {
          _0xe53937.size = 0;
        }
        _0xe53937.atime = new Date(_0x5d3822.timestamp);
        _0xe53937.mtime = new Date(_0x5d3822.timestamp);
        _0xe53937.ctime = new Date(_0x5d3822.timestamp);
        _0xe53937.blksize = 4096;
        _0xe53937.blocks = Math.ceil(_0xe53937.size / _0xe53937.blksize);
        return _0xe53937;
      },
      setattr: function (_0x2d0de1, _0x481b4a) {
        if (_0x481b4a.mode !== undefined) {
          _0x2d0de1.mode = _0x481b4a.mode;
        }
        if (_0x481b4a.timestamp !== undefined) {
          _0x2d0de1.timestamp = _0x481b4a.timestamp;
        }
        if (_0x481b4a.size !== undefined) {
          _0x484005.resizeFileStorage(_0x2d0de1, _0x481b4a.size);
        }
      },
      lookup: function (_0x128e2f, _0x7553f8) {
        throw _0x4c1d54.genericErrors[44];
      },
      mknod: function (_0x462de1, _0x14a7f4, _0x4ca85f, _0x3cc7a2) {
        return _0x484005.createNode(_0x462de1, _0x14a7f4, _0x4ca85f, _0x3cc7a2);
      },
      rename: function (_0xa5942f, _0xf7bed7, _0x5b3fc2) {
        if (_0x4c1d54.isDir(_0xa5942f.mode)) {
          var _0x578889;
          try {
            _0x578889 = _0x4c1d54.lookupNode(_0xf7bed7, _0x5b3fc2);
          } catch (_0x50ebbb) {}
          if (_0x578889) {
            for (var _0x1cdfbb in _0x578889.contents) {
              throw new _0x4c1d54.ErrnoError(55);
            }
          }
        }
        delete _0xa5942f.parent.contents[_0xa5942f.name];
        _0xa5942f.parent.timestamp = Date.now();
        _0xa5942f.name = _0x5b3fc2;
        _0xf7bed7.contents[_0x5b3fc2] = _0xa5942f;
        _0xf7bed7.timestamp = _0xa5942f.parent.timestamp;
        _0xa5942f.parent = _0xf7bed7;
      },
      unlink: function (_0x2b026a, _0xb98bf7) {
        delete _0x2b026a.contents[_0xb98bf7];
        _0x2b026a.timestamp = Date.now();
      },
      rmdir: function (_0x247dcb, _0x12d873) {
        var _0x4f3d49 = _0x4c1d54.lookupNode(_0x247dcb, _0x12d873);
        for (var _0x1507b2 in _0x4f3d49.contents) {
          throw new _0x4c1d54.ErrnoError(55);
        }
        delete _0x247dcb.contents[_0x12d873];
        _0x247dcb.timestamp = Date.now();
      },
      readdir: function (_0x1cef5a) {
        var _0x3ba8eb = [".", ".."];
        for (var _0x29ed16 in _0x1cef5a.contents) {
          if (!_0x1cef5a.contents.hasOwnProperty(_0x29ed16)) {
            continue;
          }
          _0x3ba8eb.push(_0x29ed16);
        }
        return _0x3ba8eb;
      },
      symlink: function (_0x122a30, _0x3798f4, _0x12911a) {
        var _0x455dbb = _0x484005.createNode(_0x122a30, _0x3798f4, 41471, 0);
        _0x455dbb.link = _0x12911a;
        return _0x455dbb;
      },
      readlink: function (_0x5820cf) {
        if (!_0x4c1d54.isLink(_0x5820cf.mode)) {
          throw new _0x4c1d54.ErrnoError(28);
        }
        return _0x5820cf.link;
      }
    },
    stream_ops: {
      read: function (_0x28ce6f, _0x6264b5, _0x4eee2d, _0x32e792, _0x4e6f5a) {
        var _0x5c5100 = _0x28ce6f.node.contents;
        if (_0x4e6f5a >= _0x28ce6f.node.usedBytes) {
          return 0;
        }
        var _0x2036be = Math.min(_0x28ce6f.node.usedBytes - _0x4e6f5a, _0x32e792);
        if (_0x2036be > 8 && _0x5c5100.subarray) {
          _0x6264b5.set(_0x5c5100.subarray(_0x4e6f5a, _0x4e6f5a + _0x2036be), _0x4eee2d);
        } else {
          for (var _0x24b1bb = 0; _0x24b1bb < _0x2036be; _0x24b1bb++) {
            _0x6264b5[_0x4eee2d + _0x24b1bb] = _0x5c5100[_0x4e6f5a + _0x24b1bb];
          }
        }
        return _0x2036be;
      },
      write: function (_0x3d8734, _0x392b39, _0x377649, _0x578361, _0x2b62de, _0x45b480) {
        if (_0x392b39.buffer === _0x18b38f.buffer) {
          _0x45b480 = false;
        }
        if (!_0x578361) {
          return 0;
        }
        var _0x4f42f5 = _0x3d8734.node;
        _0x4f42f5.timestamp = Date.now();
        if (_0x392b39.subarray && (!_0x4f42f5.contents || _0x4f42f5.contents.subarray)) {
          if (_0x45b480) {
            _0x4f42f5.contents = _0x392b39.subarray(_0x377649, _0x377649 + _0x578361);
            _0x4f42f5.usedBytes = _0x578361;
            return _0x578361;
          } else if (_0x4f42f5.usedBytes === 0 && _0x2b62de === 0) {
            _0x4f42f5.contents = _0x392b39.slice(_0x377649, _0x377649 + _0x578361);
            _0x4f42f5.usedBytes = _0x578361;
            return _0x578361;
          } else if (_0x2b62de + _0x578361 <= _0x4f42f5.usedBytes) {
            _0x4f42f5.contents.set(_0x392b39.subarray(_0x377649, _0x377649 + _0x578361), _0x2b62de);
            return _0x578361;
          }
        }
        _0x484005.expandFileStorage(_0x4f42f5, _0x2b62de + _0x578361);
        if (_0x4f42f5.contents.subarray && _0x392b39.subarray) {
          _0x4f42f5.contents.set(_0x392b39.subarray(_0x377649, _0x377649 + _0x578361), _0x2b62de);
        } else {
          for (var _0x54c60b = 0; _0x54c60b < _0x578361; _0x54c60b++) {
            _0x4f42f5.contents[_0x2b62de + _0x54c60b] = _0x392b39[_0x377649 + _0x54c60b];
          }
        }
        _0x4f42f5.usedBytes = Math.max(_0x4f42f5.usedBytes, _0x2b62de + _0x578361);
        return _0x578361;
      },
      llseek: function (_0x762de5, _0xcfa057, _0x1333d4) {
        var _0x375121 = _0xcfa057;
        if (_0x1333d4 === 1) {
          _0x375121 += _0x762de5.position;
        } else if (_0x1333d4 === 2) {
          if (_0x4c1d54.isFile(_0x762de5.node.mode)) {
            _0x375121 += _0x762de5.node.usedBytes;
          }
        }
        if (_0x375121 < 0) {
          throw new _0x4c1d54.ErrnoError(28);
        }
        return _0x375121;
      },
      allocate: function (_0x2ec04d, _0x4f01b8, _0x223e4c) {
        _0x484005.expandFileStorage(_0x2ec04d.node, _0x4f01b8 + _0x223e4c);
        _0x2ec04d.node.usedBytes = Math.max(_0x2ec04d.node.usedBytes, _0x4f01b8 + _0x223e4c);
      },
      mmap: function (_0xca0267, _0x427a59, _0x558fd5, _0x157d3e, _0xb2ab95, _0x2c176e) {
        if (_0x427a59 !== 0) {
          throw new _0x4c1d54.ErrnoError(28);
        }
        if (!_0x4c1d54.isFile(_0xca0267.node.mode)) {
          throw new _0x4c1d54.ErrnoError(43);
        }
        var _0x567012;
        var _0x2533c9;
        var _0x8bb919 = _0xca0267.node.contents;
        if (!(_0x2c176e & 2) && _0x8bb919.buffer === _0x4d828f) {
          _0x2533c9 = false;
          _0x567012 = _0x8bb919.byteOffset;
        } else {
          if (_0x157d3e > 0 || _0x157d3e + _0x558fd5 < _0x8bb919.length) {
            if (_0x8bb919.subarray) {
              _0x8bb919 = _0x8bb919.subarray(_0x157d3e, _0x157d3e + _0x558fd5);
            } else {
              _0x8bb919 = Array.prototype.slice.call(_0x8bb919, _0x157d3e, _0x157d3e + _0x558fd5);
            }
          }
          _0x2533c9 = true;
          _0x567012 = _0x1d8f6f(_0x558fd5);
          if (!_0x567012) {
            throw new _0x4c1d54.ErrnoError(48);
          }
          _0x18b38f.set(_0x8bb919, _0x567012);
        }
        return {
          ptr: _0x567012,
          allocated: _0x2533c9
        };
      },
      msync: function (_0x521fc0, _0x2facd3, _0x1ce187, _0x247b02, _0x5c76f9) {
        if (!_0x4c1d54.isFile(_0x521fc0.node.mode)) {
          throw new _0x4c1d54.ErrnoError(43);
        }
        if (_0x5c76f9 & 2) {
          return 0;
        }
        var _0x39a68e = _0x484005.stream_ops.write(_0x521fc0, _0x2facd3, 0, _0x247b02, _0x1ce187, false);
        return 0;
      }
    }
  };
  var _0x3a0062 = {
    dbs: {},
    indexedDB: function () {
      if (typeof indexedDB !== "undefined") {
        return indexedDB;
      }
      var _0x426eb0 = null;
      if (typeof window === "object") {
        _0x426eb0 = window.indexedDB || window.mozIndexedDB || window.webkitIndexedDB || window.msIndexedDB;
      }
      _0x441670(_0x426eb0, "IDBFS used, but indexedDB not supported");
      return _0x426eb0;
    },
    DB_VERSION: 21,
    DB_STORE_NAME: "FILE_DATA",
    mount: function (_0x5c28c5) {
      return _0x484005.mount.apply(null, arguments);
    },
    syncfs: function (_0x15bceb, _0x5297f4, _0xfd2a8e) {
      _0x3a0062.getLocalSet(_0x15bceb, function (_0x41b805, _0x501f4c) {
        if (_0x41b805) {
          return _0xfd2a8e(_0x41b805);
        }
        _0x3a0062.getRemoteSet(_0x15bceb, function (_0x4bf651, _0x15eae8) {
          if (_0x4bf651) {
            return _0xfd2a8e(_0x4bf651);
          }
          var _0x1eb621 = _0x5297f4 ? _0x15eae8 : _0x501f4c;
          var _0x53e228 = _0x5297f4 ? _0x501f4c : _0x15eae8;
          _0x3a0062.reconcile(_0x1eb621, _0x53e228, _0xfd2a8e);
        });
      });
    },
    getDB: function (_0x1a08f5, _0x7cb34b) {
      var _0x5685f1 = _0x3a0062.dbs[_0x1a08f5];
      if (_0x5685f1) {
        return _0x7cb34b(null, _0x5685f1);
      }
      var _0xd4e985;
      try {
        _0xd4e985 = _0x3a0062.indexedDB().open(_0x1a08f5, _0x3a0062.DB_VERSION);
      } catch (_0x500e7d) {
        return _0x7cb34b(_0x500e7d);
      }
      if (!_0xd4e985) {
        return _0x7cb34b("Unable to connect to IndexedDB");
      }
      _0xd4e985.onupgradeneeded = function (_0x570b84) {
        var _0x4686a3 = _0x570b84.target.result;
        var _0x2c05af = _0x570b84.target.transaction;
        var _0x263ffe;
        if (_0x4686a3.objectStoreNames.contains(_0x3a0062.DB_STORE_NAME)) {
          _0x263ffe = _0x2c05af.objectStore(_0x3a0062.DB_STORE_NAME);
        } else {
          _0x263ffe = _0x4686a3.createObjectStore(_0x3a0062.DB_STORE_NAME);
        }
        if (!_0x263ffe.indexNames.contains("timestamp")) {
          _0x263ffe.createIndex("timestamp", "timestamp", {
            unique: false
          });
        }
      };
      _0xd4e985.onsuccess = function () {
        _0x5685f1 = _0xd4e985.result;
        _0x3a0062.dbs[_0x1a08f5] = _0x5685f1;
        _0x7cb34b(null, _0x5685f1);
      };
      _0xd4e985.onerror = function (_0x57ed6c) {
        _0x7cb34b(this.error);
        _0x57ed6c.preventDefault();
      };
    },
    getLocalSet: function (_0x1bf694, _0x3592ac) {
      var _0x457585 = {};
      function _0x3d7b3f(_0x2e323d) {
        return _0x2e323d !== "." && _0x2e323d !== "..";
      }
      function _0x195479(_0xbc02a) {
        return function (_0x549274) {
          return _0x477856.join2(_0xbc02a, _0x549274);
        };
      }
      var _0x2448e6 = _0x4c1d54.readdir(_0x1bf694.mountpoint).filter(_0x3d7b3f).map(_0x195479(_0x1bf694.mountpoint));
      while (_0x2448e6.length) {
        var _0x153d1b = _0x2448e6.pop();
        var _0x2a663e;
        try {
          _0x2a663e = _0x4c1d54.stat(_0x153d1b);
        } catch (_0x19cbd3) {
          return _0x3592ac(_0x19cbd3);
        }
        if (_0x4c1d54.isDir(_0x2a663e.mode)) {
          _0x2448e6.push.apply(_0x2448e6, _0x4c1d54.readdir(_0x153d1b).filter(_0x3d7b3f).map(_0x195479(_0x153d1b)));
        }
        _0x457585[_0x153d1b] = {
          timestamp: _0x2a663e.mtime
        };
      }
      return _0x3592ac(null, {
        type: "local",
        entries: _0x457585
      });
    },
    getRemoteSet: function (_0x36e235, _0x46722f) {
      var _0x2dc94d = {};
      _0x3a0062.getDB(_0x36e235.mountpoint, function (_0x2a44f8, _0x539e1e) {
        if (_0x2a44f8) {
          return _0x46722f(_0x2a44f8);
        }
        try {
          var _0x1b0de9 = _0x539e1e.transaction([_0x3a0062.DB_STORE_NAME], "readonly");
          _0x1b0de9.onerror = function (_0x40491c) {
            _0x46722f(this.error);
            _0x40491c.preventDefault();
          };
          var _0x297d8e = _0x1b0de9.objectStore(_0x3a0062.DB_STORE_NAME);
          var _0x231b7c = _0x297d8e.index("timestamp");
          _0x231b7c.openKeyCursor().onsuccess = function (_0x49a59c) {
            var _0x3b1bf3 = _0x49a59c.target.result;
            if (!_0x3b1bf3) {
              return _0x46722f(null, {
                type: "remote",
                db: _0x539e1e,
                entries: _0x2dc94d
              });
            }
            _0x2dc94d[_0x3b1bf3.primaryKey] = {
              timestamp: _0x3b1bf3.key
            };
            _0x3b1bf3.continue();
          };
        } catch (_0x2cdcc2) {
          return _0x46722f(_0x2cdcc2);
        }
      });
    },
    loadLocalEntry: function (_0x1ee938, _0x23c524) {
      var _0x1d2f5b;
      var _0x36189b;
      try {
        var _0x31341a = _0x4c1d54.lookupPath(_0x1ee938);
        _0x36189b = _0x31341a.node;
        _0x1d2f5b = _0x4c1d54.stat(_0x1ee938);
      } catch (_0x42f366) {
        return _0x23c524(_0x42f366);
      }
      if (_0x4c1d54.isDir(_0x1d2f5b.mode)) {
        return _0x23c524(null, {
          timestamp: _0x1d2f5b.mtime,
          mode: _0x1d2f5b.mode
        });
      } else if (_0x4c1d54.isFile(_0x1d2f5b.mode)) {
        _0x36189b.contents = _0x484005.getFileDataAsTypedArray(_0x36189b);
        return _0x23c524(null, {
          timestamp: _0x1d2f5b.mtime,
          mode: _0x1d2f5b.mode,
          contents: _0x36189b.contents
        });
      } else {
        return _0x23c524(new Error("node type not supported"));
      }
    },
    storeLocalEntry: function (_0x33cfe3, _0xf225e9, _0x2035d7) {
      try {
        if (_0x4c1d54.isDir(_0xf225e9.mode)) {
          _0x4c1d54.mkdirTree(_0x33cfe3, _0xf225e9.mode);
        } else if (_0x4c1d54.isFile(_0xf225e9.mode)) {
          _0x4c1d54.writeFile(_0x33cfe3, _0xf225e9.contents, {
            canOwn: true
          });
        } else {
          return _0x2035d7(new Error("node type not supported"));
        }
        _0x4c1d54.chmod(_0x33cfe3, _0xf225e9.mode);
        _0x4c1d54.utime(_0x33cfe3, _0xf225e9.timestamp, _0xf225e9.timestamp);
      } catch (_0x146f4c) {
        return _0x2035d7(_0x146f4c);
      }
      _0x2035d7(null);
    },
    removeLocalEntry: function (_0x2f9718, _0x18790d) {
      try {
        var _0x1ccdf7 = _0x4c1d54.lookupPath(_0x2f9718);
        var _0x3a9de5 = _0x4c1d54.stat(_0x2f9718);
        if (_0x4c1d54.isDir(_0x3a9de5.mode)) {
          _0x4c1d54.rmdir(_0x2f9718);
        } else if (_0x4c1d54.isFile(_0x3a9de5.mode)) {
          _0x4c1d54.unlink(_0x2f9718);
        }
      } catch (_0x41fa30) {
        return _0x18790d(_0x41fa30);
      }
      _0x18790d(null);
    },
    loadRemoteEntry: function (_0x2076bb, _0x208071, _0x147240) {
      var _0x505b28 = _0x2076bb.get(_0x208071);
      _0x505b28.onsuccess = function (_0x5377da) {
        _0x147240(null, _0x5377da.target.result);
      };
      _0x505b28.onerror = function (_0x2aeae9) {
        _0x147240(this.error);
        _0x2aeae9.preventDefault();
      };
    },
    storeRemoteEntry: function (_0x318d06, _0x574a47, _0x547c89, _0x464826) {
      var _0x5b8b40 = _0x318d06.put(_0x547c89, _0x574a47);
      _0x5b8b40.onsuccess = function () {
        _0x464826(null);
      };
      _0x5b8b40.onerror = function (_0x217a53) {
        _0x464826(this.error);
        _0x217a53.preventDefault();
      };
    },
    removeRemoteEntry: function (_0x49d8c9, _0x41bacd, _0x15344f) {
      var _0x427601 = _0x49d8c9.delete(_0x41bacd);
      _0x427601.onsuccess = function () {
        _0x15344f(null);
      };
      _0x427601.onerror = function (_0x2f1bf9) {
        _0x15344f(this.error);
        _0x2f1bf9.preventDefault();
      };
    },
    reconcile: function (_0x4d1121, _0x17ce63, _0x1a8237) {
      var _0x4368a0 = 0;
      var _0x228723 = [];
      Object.keys(_0x4d1121.entries).forEach(function (_0x5f0907) {
        var _0x50376d = _0x4d1121.entries[_0x5f0907];
        var _0x363646 = _0x17ce63.entries[_0x5f0907];
        if (!_0x363646 || _0x50376d.timestamp.getTime() != _0x363646.timestamp.getTime()) {
          _0x228723.push(_0x5f0907);
          _0x4368a0++;
        }
      });
      var _0x4279c4 = [];
      Object.keys(_0x17ce63.entries).forEach(function (_0x1d2d49) {
        if (!_0x4d1121.entries[_0x1d2d49]) {
          _0x4279c4.push(_0x1d2d49);
          _0x4368a0++;
        }
      });
      if (!_0x4368a0) {
        return _0x1a8237(null);
      }
      var _0x12b4bf = false;
      var _0x4ceab7 = _0x4d1121.type === "remote" ? _0x4d1121.db : _0x17ce63.db;
      var _0x44e495 = _0x4ceab7.transaction([_0x3a0062.DB_STORE_NAME], "readwrite");
      var _0x4929fa = _0x44e495.objectStore(_0x3a0062.DB_STORE_NAME);
      function _0x43e7c4(_0x3c7416) {
        if (_0x3c7416 && !_0x12b4bf) {
          _0x12b4bf = true;
          return _0x1a8237(_0x3c7416);
        }
      }
      _0x44e495.onerror = function (_0xb14420) {
        _0x43e7c4(this.error);
        _0xb14420.preventDefault();
      };
      _0x44e495.oncomplete = function (_0x539f30) {
        if (!_0x12b4bf) {
          _0x1a8237(null);
        }
      };
      _0x228723.sort().forEach(function (_0x3e501d) {
        if (_0x17ce63.type === "local") {
          _0x3a0062.loadRemoteEntry(_0x4929fa, _0x3e501d, function (_0x22caf6, _0x9fca1) {
            if (_0x22caf6) {
              return _0x43e7c4(_0x22caf6);
            }
            _0x3a0062.storeLocalEntry(_0x3e501d, _0x9fca1, _0x43e7c4);
          });
        } else {
          _0x3a0062.loadLocalEntry(_0x3e501d, function (_0x3d1aa3, _0x466e0e) {
            if (_0x3d1aa3) {
              return _0x43e7c4(_0x3d1aa3);
            }
            _0x3a0062.storeRemoteEntry(_0x4929fa, _0x3e501d, _0x466e0e, _0x43e7c4);
          });
        }
      });
      _0x4279c4.sort().reverse().forEach(function (_0x7fd8cd) {
        if (_0x17ce63.type === "local") {
          _0x3a0062.removeLocalEntry(_0x7fd8cd, _0x43e7c4);
        } else {
          _0x3a0062.removeRemoteEntry(_0x4929fa, _0x7fd8cd, _0x43e7c4);
        }
      });
    }
  };
  var _0x4c1d54 = {
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
    lookupPath: function (_0x200ce9, _0x2f5e5f) {
      _0x200ce9 = _0x1bac66.resolve(_0x4c1d54.cwd(), _0x200ce9);
      _0x2f5e5f = _0x2f5e5f || {};
      if (!_0x200ce9) {
        return {
          path: "",
          node: null
        };
      }
      var _0x31bf96 = {
        follow_mount: true,
        recurse_count: 0
      };
      for (var _0x4a9fcb in _0x31bf96) {
        if (_0x2f5e5f[_0x4a9fcb] === undefined) {
          _0x2f5e5f[_0x4a9fcb] = _0x31bf96[_0x4a9fcb];
        }
      }
      if (_0x2f5e5f.recurse_count > 8) {
        throw new _0x4c1d54.ErrnoError(32);
      }
      var _0x28a560 = _0x477856.normalizeArray(_0x200ce9.split("/").filter(function (_0x1aa954) {
        return !!_0x1aa954;
      }), false);
      var _0x28bea0 = _0x4c1d54.root;
      var _0xcc79fc = "/";
      for (var _0x419363 = 0; _0x419363 < _0x28a560.length; _0x419363++) {
        var _0x4795be = _0x419363 === _0x28a560.length - 1;
        if (_0x4795be && _0x2f5e5f.parent) {
          break;
        }
        _0x28bea0 = _0x4c1d54.lookupNode(_0x28bea0, _0x28a560[_0x419363]);
        _0xcc79fc = _0x477856.join2(_0xcc79fc, _0x28a560[_0x419363]);
        if (_0x4c1d54.isMountpoint(_0x28bea0)) {
          if (!_0x4795be || _0x4795be && _0x2f5e5f.follow_mount) {
            _0x28bea0 = _0x28bea0.mounted.root;
          }
        }
        if (!_0x4795be || _0x2f5e5f.follow) {
          var _0x1b35d2 = 0;
          while (_0x4c1d54.isLink(_0x28bea0.mode)) {
            var _0x3fa044 = _0x4c1d54.readlink(_0xcc79fc);
            _0xcc79fc = _0x1bac66.resolve(_0x477856.dirname(_0xcc79fc), _0x3fa044);
            var _0x484dfe = _0x4c1d54.lookupPath(_0xcc79fc, {
              recurse_count: _0x2f5e5f.recurse_count
            });
            _0x28bea0 = _0x484dfe.node;
            if (_0x1b35d2++ > 40) {
              throw new _0x4c1d54.ErrnoError(32);
            }
          }
        }
      }
      return {
        path: _0xcc79fc,
        node: _0x28bea0
      };
    },
    getPath: function (_0x8b73d6) {
      var _0x324215;
      while (true) {
        if (_0x4c1d54.isRoot(_0x8b73d6)) {
          var _0x4fe42c = _0x8b73d6.mount.mountpoint;
          if (!_0x324215) {
            return _0x4fe42c;
          }
          if (_0x4fe42c[_0x4fe42c.length - 1] !== "/") {
            return _0x4fe42c + "/" + _0x324215;
          } else {
            return _0x4fe42c + _0x324215;
          }
        }
        _0x324215 = _0x324215 ? _0x8b73d6.name + "/" + _0x324215 : _0x8b73d6.name;
        _0x8b73d6 = _0x8b73d6.parent;
      }
    },
    hashName: function (_0x34ecba, _0x2debc3) {
      var _0x222dfa = 0;
      for (var _0x1c7fdf = 0; _0x1c7fdf < _0x2debc3.length; _0x1c7fdf++) {
        _0x222dfa = (_0x222dfa << 5) - _0x222dfa + _0x2debc3.charCodeAt(_0x1c7fdf) | 0;
      }
      return (_0x34ecba + _0x222dfa >>> 0) % _0x4c1d54.nameTable.length;
    },
    hashAddNode: function (_0x32e11b) {
      var _0x518519 = _0x4c1d54.hashName(_0x32e11b.parent.id, _0x32e11b.name);
      _0x32e11b.name_next = _0x4c1d54.nameTable[_0x518519];
      _0x4c1d54.nameTable[_0x518519] = _0x32e11b;
    },
    hashRemoveNode: function (_0xe5b6b6) {
      var _0x20f6b3 = _0x4c1d54.hashName(_0xe5b6b6.parent.id, _0xe5b6b6.name);
      if (_0x4c1d54.nameTable[_0x20f6b3] === _0xe5b6b6) {
        _0x4c1d54.nameTable[_0x20f6b3] = _0xe5b6b6.name_next;
      } else {
        var _0x40523f = _0x4c1d54.nameTable[_0x20f6b3];
        while (_0x40523f) {
          if (_0x40523f.name_next === _0xe5b6b6) {
            _0x40523f.name_next = _0xe5b6b6.name_next;
            break;
          }
          _0x40523f = _0x40523f.name_next;
        }
      }
    },
    lookupNode: function (_0x312352, _0x320cbd) {
      var _0x3d82e4 = _0x4c1d54.mayLookup(_0x312352);
      if (_0x3d82e4) {
        throw new _0x4c1d54.ErrnoError(_0x3d82e4, _0x312352);
      }
      var _0x314421 = _0x4c1d54.hashName(_0x312352.id, _0x320cbd);
      for (var _0x197f0d = _0x4c1d54.nameTable[_0x314421]; _0x197f0d; _0x197f0d = _0x197f0d.name_next) {
        var _0x17d39d = _0x197f0d.name;
        if (_0x197f0d.parent.id === _0x312352.id && _0x17d39d === _0x320cbd) {
          return _0x197f0d;
        }
      }
      return _0x4c1d54.lookup(_0x312352, _0x320cbd);
    },
    createNode: function (_0x361282, _0x261b69, _0x321d02, _0x2475c1) {
      var _0x72e510 = new _0x4c1d54.FSNode(_0x361282, _0x261b69, _0x321d02, _0x2475c1);
      _0x4c1d54.hashAddNode(_0x72e510);
      return _0x72e510;
    },
    destroyNode: function (_0x2e3103) {
      _0x4c1d54.hashRemoveNode(_0x2e3103);
    },
    isRoot: function (_0x22a8f8) {
      return _0x22a8f8 === _0x22a8f8.parent;
    },
    isMountpoint: function (_0x41bb3f) {
      return !!_0x41bb3f.mounted;
    },
    isFile: function (_0x3b795a) {
      return (_0x3b795a & 61440) === 32768;
    },
    isDir: function (_0x4adb34) {
      return (_0x4adb34 & 61440) === 16384;
    },
    isLink: function (_0x4816ae) {
      return (_0x4816ae & 61440) === 40960;
    },
    isChrdev: function (_0x451921) {
      return (_0x451921 & 61440) === 8192;
    },
    isBlkdev: function (_0x9cd013) {
      return (_0x9cd013 & 61440) === 24576;
    },
    isFIFO: function (_0x381d1a) {
      return (_0x381d1a & 61440) === 4096;
    },
    isSocket: function (_0x218776) {
      return (_0x218776 & 49152) === 49152;
    },
    flagModes: {
      r: 0,
      "r+": 2,
      w: 577,
      "w+": 578,
      a: 1089,
      "a+": 1090
    },
    modeStringToFlags: function (_0x5e8d17) {
      var _0x3c4299 = _0x4c1d54.flagModes[_0x5e8d17];
      if (typeof _0x3c4299 === "undefined") {
        throw new Error("Unknown file open mode: " + _0x5e8d17);
      }
      return _0x3c4299;
    },
    flagsToPermissionString: function (_0x3418c7) {
      var _0x2757be = ["r", "w", "rw"][_0x3418c7 & 3];
      if (_0x3418c7 & 512) {
        _0x2757be += "w";
      }
      return _0x2757be;
    },
    nodePermissions: function (_0x1289d9, _0x413090) {
      if (_0x4c1d54.ignorePermissions) {
        return 0;
      }
      if (_0x413090.includes("r") && !(_0x1289d9.mode & 292)) {
        return 2;
      } else if (_0x413090.includes("w") && !(_0x1289d9.mode & 146)) {
        return 2;
      } else if (_0x413090.includes("x") && !(_0x1289d9.mode & 73)) {
        return 2;
      }
      return 0;
    },
    mayLookup: function (_0x4efbce) {
      var _0x3cff9a = _0x4c1d54.nodePermissions(_0x4efbce, "x");
      if (_0x3cff9a) {
        return _0x3cff9a;
      }
      if (!_0x4efbce.node_ops.lookup) {
        return 2;
      }
      return 0;
    },
    mayCreate: function (_0x49f711, _0x2645f8) {
      try {
        var _0xec2403 = _0x4c1d54.lookupNode(_0x49f711, _0x2645f8);
        return 20;
      } catch (_0x324495) {}
      return _0x4c1d54.nodePermissions(_0x49f711, "wx");
    },
    mayDelete: function (_0x489ee5, _0xfb24ac, _0x1729fc) {
      var _0x5ce155;
      try {
        _0x5ce155 = _0x4c1d54.lookupNode(_0x489ee5, _0xfb24ac);
      } catch (_0x338d94) {
        return _0x338d94.errno;
      }
      var _0x2d5d79 = _0x4c1d54.nodePermissions(_0x489ee5, "wx");
      if (_0x2d5d79) {
        return _0x2d5d79;
      }
      if (_0x1729fc) {
        if (!_0x4c1d54.isDir(_0x5ce155.mode)) {
          return 54;
        }
        if (_0x4c1d54.isRoot(_0x5ce155) || _0x4c1d54.getPath(_0x5ce155) === _0x4c1d54.cwd()) {
          return 10;
        }
      } else if (_0x4c1d54.isDir(_0x5ce155.mode)) {
        return 31;
      }
      return 0;
    },
    mayOpen: function (_0x4fca5a, _0x5a3a7e) {
      if (!_0x4fca5a) {
        return 44;
      }
      if (_0x4c1d54.isLink(_0x4fca5a.mode)) {
        return 32;
      } else if (_0x4c1d54.isDir(_0x4fca5a.mode)) {
        if (_0x4c1d54.flagsToPermissionString(_0x5a3a7e) !== "r" || _0x5a3a7e & 512) {
          return 31;
        }
      }
      return _0x4c1d54.nodePermissions(_0x4fca5a, _0x4c1d54.flagsToPermissionString(_0x5a3a7e));
    },
    MAX_OPEN_FDS: 4096,
    nextfd: function (_0x5692a9, _0x311096) {
      _0x5692a9 = _0x5692a9 || 0;
      _0x311096 = _0x311096 || _0x4c1d54.MAX_OPEN_FDS;
      for (var _0x52509c = _0x5692a9; _0x52509c <= _0x311096; _0x52509c++) {
        if (!_0x4c1d54.streams[_0x52509c]) {
          return _0x52509c;
        }
      }
      throw new _0x4c1d54.ErrnoError(33);
    },
    getStream: function (_0x51eddb) {
      return _0x4c1d54.streams[_0x51eddb];
    },
    createStream: function (_0x188983, _0x56706e, _0x4b6dc1) {
      if (!_0x4c1d54.FSStream) {
        _0x4c1d54.FSStream = function () {};
        _0x4c1d54.FSStream.prototype = {
          object: {
            get: function () {
              return this.node;
            },
            set: function (_0x3dec8a) {
              this.node = _0x3dec8a;
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
      var _0x405db5 = new _0x4c1d54.FSStream();
      for (var _0x3dab4a in _0x188983) {
        _0x405db5[_0x3dab4a] = _0x188983[_0x3dab4a];
      }
      _0x188983 = _0x405db5;
      var _0x4abe02 = _0x4c1d54.nextfd(_0x56706e, _0x4b6dc1);
      _0x188983.fd = _0x4abe02;
      _0x4c1d54.streams[_0x4abe02] = _0x188983;
      return _0x188983;
    },
    closeStream: function (_0xd50cc9) {
      _0x4c1d54.streams[_0xd50cc9] = null;
    },
    chrdev_stream_ops: {
      open: function (_0x142067) {
        var _0x74e5d1 = _0x4c1d54.getDevice(_0x142067.node.rdev);
        _0x142067.stream_ops = _0x74e5d1.stream_ops;
        if (_0x142067.stream_ops.open) {
          _0x142067.stream_ops.open(_0x142067);
        }
      },
      llseek: function () {
        throw new _0x4c1d54.ErrnoError(70);
      }
    },
    major: function (_0x108eb2) {
      return _0x108eb2 >> 8;
    },
    minor: function (_0x4b5eb7) {
      return _0x4b5eb7 & 255;
    },
    makedev: function (_0xe9c0be, _0x4713ea) {
      return _0xe9c0be << 8 | _0x4713ea;
    },
    registerDevice: function (_0x590b07, _0x429d0d) {
      _0x4c1d54.devices[_0x590b07] = {
        stream_ops: _0x429d0d
      };
    },
    getDevice: function (_0x3f2b56) {
      return _0x4c1d54.devices[_0x3f2b56];
    },
    getMounts: function (_0x356b37) {
      var _0x769eba = [];
      var _0x78c7c1 = [_0x356b37];
      while (_0x78c7c1.length) {
        var _0x456425 = _0x78c7c1.pop();
        _0x769eba.push(_0x456425);
        _0x78c7c1.push.apply(_0x78c7c1, _0x456425.mounts);
      }
      return _0x769eba;
    },
    syncfs: function (_0x25adf0, _0x50f4e2) {
      if (typeof _0x25adf0 === "function") {
        _0x50f4e2 = _0x25adf0;
        _0x25adf0 = false;
      }
      _0x4c1d54.syncFSRequests++;
      if (_0x4c1d54.syncFSRequests > 1) {
        _0x235a52("warning: " + _0x4c1d54.syncFSRequests + " FS.syncfs operations in flight at once, probably just doing extra work");
      }
      var _0xc5e643 = _0x4c1d54.getMounts(_0x4c1d54.root.mount);
      var _0x1a30c5 = 0;
      function _0x570b10(_0x43d209) {
        _0x4c1d54.syncFSRequests--;
        return _0x50f4e2(_0x43d209);
      }
      function _0x16de7d(_0x56e410) {
        if (_0x56e410) {
          if (!_0x16de7d.errored) {
            _0x16de7d.errored = true;
            return _0x570b10(_0x56e410);
          }
          return;
        }
        if (++_0x1a30c5 >= _0xc5e643.length) {
          _0x570b10(null);
        }
      }
      _0xc5e643.forEach(function (_0x34a670) {
        if (!_0x34a670.type.syncfs) {
          return _0x16de7d(null);
        }
        _0x34a670.type.syncfs(_0x34a670, _0x25adf0, _0x16de7d);
      });
    },
    mount: function (_0x320393, _0x3d1d1f, _0x38e609) {
      var _0x9b0f51 = _0x38e609 === "/";
      var _0x1a124e = !_0x38e609;
      var _0x4d5602;
      if (_0x9b0f51 && _0x4c1d54.root) {
        throw new _0x4c1d54.ErrnoError(10);
      } else if (!_0x9b0f51 && !_0x1a124e) {
        var _0x15275b = _0x4c1d54.lookupPath(_0x38e609, {
          follow_mount: false
        });
        _0x38e609 = _0x15275b.path;
        _0x4d5602 = _0x15275b.node;
        if (_0x4c1d54.isMountpoint(_0x4d5602)) {
          throw new _0x4c1d54.ErrnoError(10);
        }
        if (!_0x4c1d54.isDir(_0x4d5602.mode)) {
          throw new _0x4c1d54.ErrnoError(54);
        }
      }
      var _0x479bc4 = {
        type: _0x320393,
        opts: _0x3d1d1f,
        mountpoint: _0x38e609,
        mounts: []
      };
      var _0x107a91 = _0x320393.mount(_0x479bc4);
      _0x107a91.mount = _0x479bc4;
      _0x479bc4.root = _0x107a91;
      if (_0x9b0f51) {
        _0x4c1d54.root = _0x107a91;
      } else if (_0x4d5602) {
        _0x4d5602.mounted = _0x479bc4;
        if (_0x4d5602.mount) {
          _0x4d5602.mount.mounts.push(_0x479bc4);
        }
      }
      return _0x107a91;
    },
    unmount: function (_0x425569) {
      var _0x1b9ed2 = _0x4c1d54.lookupPath(_0x425569, {
        follow_mount: false
      });
      if (!_0x4c1d54.isMountpoint(_0x1b9ed2.node)) {
        throw new _0x4c1d54.ErrnoError(28);
      }
      var _0x2c6497 = _0x1b9ed2.node;
      var _0x12afd7 = _0x2c6497.mounted;
      var _0x2193da = _0x4c1d54.getMounts(_0x12afd7);
      Object.keys(_0x4c1d54.nameTable).forEach(function (_0x1a5f26) {
        var _0x3e9c0a = _0x4c1d54.nameTable[_0x1a5f26];
        while (_0x3e9c0a) {
          var _0xff07a0 = _0x3e9c0a.name_next;
          if (_0x2193da.includes(_0x3e9c0a.mount)) {
            _0x4c1d54.destroyNode(_0x3e9c0a);
          }
          _0x3e9c0a = _0xff07a0;
        }
      });
      _0x2c6497.mounted = null;
      var _0x5e7080 = _0x2c6497.mount.mounts.indexOf(_0x12afd7);
      _0x2c6497.mount.mounts.splice(_0x5e7080, 1);
    },
    lookup: function (_0x66fe57, _0x48b23e) {
      return _0x66fe57.node_ops.lookup(_0x66fe57, _0x48b23e);
    },
    mknod: function (_0x2561e, _0x14945d, _0x54e75a) {
      var _0x7fcf9d = _0x4c1d54.lookupPath(_0x2561e, {
        parent: true
      });
      var _0x4c29b6 = _0x7fcf9d.node;
      var _0xf1e8a0 = _0x477856.basename(_0x2561e);
      if (!_0xf1e8a0 || _0xf1e8a0 === "." || _0xf1e8a0 === "..") {
        throw new _0x4c1d54.ErrnoError(28);
      }
      var _0x11614c = _0x4c1d54.mayCreate(_0x4c29b6, _0xf1e8a0);
      if (_0x11614c) {
        throw new _0x4c1d54.ErrnoError(_0x11614c);
      }
      if (!_0x4c29b6.node_ops.mknod) {
        throw new _0x4c1d54.ErrnoError(63);
      }
      return _0x4c29b6.node_ops.mknod(_0x4c29b6, _0xf1e8a0, _0x14945d, _0x54e75a);
    },
    create: function (_0xe39d07, _0x18fd51) {
      _0x18fd51 = _0x18fd51 !== undefined ? _0x18fd51 : 438;
      _0x18fd51 &= 4095;
      _0x18fd51 |= 32768;
      return _0x4c1d54.mknod(_0xe39d07, _0x18fd51, 0);
    },
    mkdir: function (_0x4fa471, _0x5bb5c5) {
      _0x5bb5c5 = _0x5bb5c5 !== undefined ? _0x5bb5c5 : 511;
      _0x5bb5c5 &= 1023;
      _0x5bb5c5 |= 16384;
      return _0x4c1d54.mknod(_0x4fa471, _0x5bb5c5, 0);
    },
    mkdirTree: function (_0xadfbc3, _0x265de6) {
      var _0x36aa42 = _0xadfbc3.split("/");
      var _0x131e25 = "";
      for (var _0x1e8378 = 0; _0x1e8378 < _0x36aa42.length; ++_0x1e8378) {
        if (!_0x36aa42[_0x1e8378]) {
          continue;
        }
        _0x131e25 += "/" + _0x36aa42[_0x1e8378];
        try {
          _0x4c1d54.mkdir(_0x131e25, _0x265de6);
        } catch (_0x51dde4) {
          if (_0x51dde4.errno != 20) {
            throw _0x51dde4;
          }
        }
      }
    },
    mkdev: function (_0x935e63, _0xbae19b, _0x4c01a1) {
      if (typeof _0x4c01a1 === "undefined") {
        _0x4c01a1 = _0xbae19b;
        _0xbae19b = 438;
      }
      _0xbae19b |= 8192;
      return _0x4c1d54.mknod(_0x935e63, _0xbae19b, _0x4c01a1);
    },
    symlink: function (_0x5989fe, _0x1d5d7b) {
      if (!_0x1bac66.resolve(_0x5989fe)) {
        throw new _0x4c1d54.ErrnoError(44);
      }
      var _0x24b078 = _0x4c1d54.lookupPath(_0x1d5d7b, {
        parent: true
      });
      var _0xb8f4ef = _0x24b078.node;
      if (!_0xb8f4ef) {
        throw new _0x4c1d54.ErrnoError(44);
      }
      var _0x1da313 = _0x477856.basename(_0x1d5d7b);
      var _0x14ef4a = _0x4c1d54.mayCreate(_0xb8f4ef, _0x1da313);
      if (_0x14ef4a) {
        throw new _0x4c1d54.ErrnoError(_0x14ef4a);
      }
      if (!_0xb8f4ef.node_ops.symlink) {
        throw new _0x4c1d54.ErrnoError(63);
      }
      return _0xb8f4ef.node_ops.symlink(_0xb8f4ef, _0x1da313, _0x5989fe);
    },
    rename: function (_0x2a4485, _0x234e5b) {
      var _0x4c924f = _0x477856.dirname(_0x2a4485);
      var _0xe16509 = _0x477856.dirname(_0x234e5b);
      var _0xe0ca06 = _0x477856.basename(_0x2a4485);
      var _0x20a507 = _0x477856.basename(_0x234e5b);
      var _0x4c2893;
      var _0xbdc2d0;
      var _0x442933;
      _0x4c2893 = _0x4c1d54.lookupPath(_0x2a4485, {
        parent: true
      });
      _0xbdc2d0 = _0x4c2893.node;
      _0x4c2893 = _0x4c1d54.lookupPath(_0x234e5b, {
        parent: true
      });
      _0x442933 = _0x4c2893.node;
      if (!_0xbdc2d0 || !_0x442933) {
        throw new _0x4c1d54.ErrnoError(44);
      }
      if (_0xbdc2d0.mount !== _0x442933.mount) {
        throw new _0x4c1d54.ErrnoError(75);
      }
      var _0x110021 = _0x4c1d54.lookupNode(_0xbdc2d0, _0xe0ca06);
      var _0x26b6d7 = _0x1bac66.relative(_0x2a4485, _0xe16509);
      if (_0x26b6d7.charAt(0) !== ".") {
        throw new _0x4c1d54.ErrnoError(28);
      }
      _0x26b6d7 = _0x1bac66.relative(_0x234e5b, _0x4c924f);
      if (_0x26b6d7.charAt(0) !== ".") {
        throw new _0x4c1d54.ErrnoError(55);
      }
      var _0x328898;
      try {
        _0x328898 = _0x4c1d54.lookupNode(_0x442933, _0x20a507);
      } catch (_0x4907ca) {}
      if (_0x110021 === _0x328898) {
        return;
      }
      var _0x262850 = _0x4c1d54.isDir(_0x110021.mode);
      var _0x3e5ff7 = _0x4c1d54.mayDelete(_0xbdc2d0, _0xe0ca06, _0x262850);
      if (_0x3e5ff7) {
        throw new _0x4c1d54.ErrnoError(_0x3e5ff7);
      }
      _0x3e5ff7 = _0x328898 ? _0x4c1d54.mayDelete(_0x442933, _0x20a507, _0x262850) : _0x4c1d54.mayCreate(_0x442933, _0x20a507);
      if (_0x3e5ff7) {
        throw new _0x4c1d54.ErrnoError(_0x3e5ff7);
      }
      if (!_0xbdc2d0.node_ops.rename) {
        throw new _0x4c1d54.ErrnoError(63);
      }
      if (_0x4c1d54.isMountpoint(_0x110021) || _0x328898 && _0x4c1d54.isMountpoint(_0x328898)) {
        throw new _0x4c1d54.ErrnoError(10);
      }
      if (_0x442933 !== _0xbdc2d0) {
        _0x3e5ff7 = _0x4c1d54.nodePermissions(_0xbdc2d0, "w");
        if (_0x3e5ff7) {
          throw new _0x4c1d54.ErrnoError(_0x3e5ff7);
        }
      }
      try {
        if (_0x4c1d54.trackingDelegate.willMovePath) {
          _0x4c1d54.trackingDelegate.willMovePath(_0x2a4485, _0x234e5b);
        }
      } catch (_0x186eaa) {
        _0x235a52("FS.trackingDelegate['willMovePath']('" + _0x2a4485 + "', '" + _0x234e5b + "') threw an exception: " + _0x186eaa.message);
      }
      _0x4c1d54.hashRemoveNode(_0x110021);
      try {
        _0xbdc2d0.node_ops.rename(_0x110021, _0x442933, _0x20a507);
      } catch (_0x55f969) {
        throw _0x55f969;
      } finally {
        _0x4c1d54.hashAddNode(_0x110021);
      }
      try {
        if (_0x4c1d54.trackingDelegate.onMovePath) {
          _0x4c1d54.trackingDelegate.onMovePath(_0x2a4485, _0x234e5b);
        }
      } catch (_0x3cdc0e) {
        _0x235a52("FS.trackingDelegate['onMovePath']('" + _0x2a4485 + "', '" + _0x234e5b + "') threw an exception: " + _0x3cdc0e.message);
      }
    },
    rmdir: function (_0x4001b4) {
      var _0x5203d8 = _0x4c1d54.lookupPath(_0x4001b4, {
        parent: true
      });
      var _0x44111f = _0x5203d8.node;
      var _0x4a1844 = _0x477856.basename(_0x4001b4);
      var _0xe855ae = _0x4c1d54.lookupNode(_0x44111f, _0x4a1844);
      var _0x5c3f47 = _0x4c1d54.mayDelete(_0x44111f, _0x4a1844, true);
      if (_0x5c3f47) {
        throw new _0x4c1d54.ErrnoError(_0x5c3f47);
      }
      if (!_0x44111f.node_ops.rmdir) {
        throw new _0x4c1d54.ErrnoError(63);
      }
      if (_0x4c1d54.isMountpoint(_0xe855ae)) {
        throw new _0x4c1d54.ErrnoError(10);
      }
      try {
        if (_0x4c1d54.trackingDelegate.willDeletePath) {
          _0x4c1d54.trackingDelegate.willDeletePath(_0x4001b4);
        }
      } catch (_0x38c3f6) {
        _0x235a52("FS.trackingDelegate['willDeletePath']('" + _0x4001b4 + "') threw an exception: " + _0x38c3f6.message);
      }
      _0x44111f.node_ops.rmdir(_0x44111f, _0x4a1844);
      _0x4c1d54.destroyNode(_0xe855ae);
      try {
        if (_0x4c1d54.trackingDelegate.onDeletePath) {
          _0x4c1d54.trackingDelegate.onDeletePath(_0x4001b4);
        }
      } catch (_0x301d71) {
        _0x235a52("FS.trackingDelegate['onDeletePath']('" + _0x4001b4 + "') threw an exception: " + _0x301d71.message);
      }
    },
    readdir: function (_0x31bab1) {
      var _0x1d6341 = _0x4c1d54.lookupPath(_0x31bab1, {
        follow: true
      });
      var _0x21e8d6 = _0x1d6341.node;
      if (!_0x21e8d6.node_ops.readdir) {
        throw new _0x4c1d54.ErrnoError(54);
      }
      return _0x21e8d6.node_ops.readdir(_0x21e8d6);
    },
    unlink: function (_0x57305a) {
      var _0x17109b = _0x4c1d54.lookupPath(_0x57305a, {
        parent: true
      });
      var _0x45fbe7 = _0x17109b.node;
      var _0x1420f5 = _0x477856.basename(_0x57305a);
      var _0x475380 = _0x4c1d54.lookupNode(_0x45fbe7, _0x1420f5);
      var _0x191347 = _0x4c1d54.mayDelete(_0x45fbe7, _0x1420f5, false);
      if (_0x191347) {
        throw new _0x4c1d54.ErrnoError(_0x191347);
      }
      if (!_0x45fbe7.node_ops.unlink) {
        throw new _0x4c1d54.ErrnoError(63);
      }
      if (_0x4c1d54.isMountpoint(_0x475380)) {
        throw new _0x4c1d54.ErrnoError(10);
      }
      try {
        if (_0x4c1d54.trackingDelegate.willDeletePath) {
          _0x4c1d54.trackingDelegate.willDeletePath(_0x57305a);
        }
      } catch (_0x1fc7a0) {
        _0x235a52("FS.trackingDelegate['willDeletePath']('" + _0x57305a + "') threw an exception: " + _0x1fc7a0.message);
      }
      _0x45fbe7.node_ops.unlink(_0x45fbe7, _0x1420f5);
      _0x4c1d54.destroyNode(_0x475380);
      try {
        if (_0x4c1d54.trackingDelegate.onDeletePath) {
          _0x4c1d54.trackingDelegate.onDeletePath(_0x57305a);
        }
      } catch (_0x550dd4) {
        _0x235a52("FS.trackingDelegate['onDeletePath']('" + _0x57305a + "') threw an exception: " + _0x550dd4.message);
      }
    },
    readlink: function (_0x11e2f1) {
      var _0x38be1d = _0x4c1d54.lookupPath(_0x11e2f1);
      var _0x663ce1 = _0x38be1d.node;
      if (!_0x663ce1) {
        throw new _0x4c1d54.ErrnoError(44);
      }
      if (!_0x663ce1.node_ops.readlink) {
        throw new _0x4c1d54.ErrnoError(28);
      }
      return _0x1bac66.resolve(_0x4c1d54.getPath(_0x663ce1.parent), _0x663ce1.node_ops.readlink(_0x663ce1));
    },
    stat: function (_0x25df81, _0x450994) {
      var _0x1d1b19 = _0x4c1d54.lookupPath(_0x25df81, {
        follow: !_0x450994
      });
      var _0x408a78 = _0x1d1b19.node;
      if (!_0x408a78) {
        throw new _0x4c1d54.ErrnoError(44);
      }
      if (!_0x408a78.node_ops.getattr) {
        throw new _0x4c1d54.ErrnoError(63);
      }
      return _0x408a78.node_ops.getattr(_0x408a78);
    },
    lstat: function (_0x57eef8) {
      return _0x4c1d54.stat(_0x57eef8, true);
    },
    chmod: function (_0x1ea26a, _0x1988d0, _0x2d3499) {
      var _0x22414c;
      if (typeof _0x1ea26a === "string") {
        var _0x2334f8 = _0x4c1d54.lookupPath(_0x1ea26a, {
          follow: !_0x2d3499
        });
        _0x22414c = _0x2334f8.node;
      } else {
        _0x22414c = _0x1ea26a;
      }
      if (!_0x22414c.node_ops.setattr) {
        throw new _0x4c1d54.ErrnoError(63);
      }
      _0x22414c.node_ops.setattr(_0x22414c, {
        mode: _0x1988d0 & 4095 | _0x22414c.mode & ~4095,
        timestamp: Date.now()
      });
    },
    lchmod: function (_0x535af4, _0x42a50a) {
      _0x4c1d54.chmod(_0x535af4, _0x42a50a, true);
    },
    fchmod: function (_0x5c9690, _0x673e60) {
      var _0x232798 = _0x4c1d54.getStream(_0x5c9690);
      if (!_0x232798) {
        throw new _0x4c1d54.ErrnoError(8);
      }
      _0x4c1d54.chmod(_0x232798.node, _0x673e60);
    },
    chown: function (_0x3646b7, _0x16b766, _0x48691c, _0x30c61a) {
      var _0x2eb2d3;
      if (typeof _0x3646b7 === "string") {
        var _0x1dfa8d = _0x4c1d54.lookupPath(_0x3646b7, {
          follow: !_0x30c61a
        });
        _0x2eb2d3 = _0x1dfa8d.node;
      } else {
        _0x2eb2d3 = _0x3646b7;
      }
      if (!_0x2eb2d3.node_ops.setattr) {
        throw new _0x4c1d54.ErrnoError(63);
      }
      _0x2eb2d3.node_ops.setattr(_0x2eb2d3, {
        timestamp: Date.now()
      });
    },
    lchown: function (_0x48f22d, _0x4fc3b9, _0x3f9958) {
      _0x4c1d54.chown(_0x48f22d, _0x4fc3b9, _0x3f9958, true);
    },
    fchown: function (_0x5a4a78, _0x2caf5b, _0x30f039) {
      var _0x1a15d1 = _0x4c1d54.getStream(_0x5a4a78);
      if (!_0x1a15d1) {
        throw new _0x4c1d54.ErrnoError(8);
      }
      _0x4c1d54.chown(_0x1a15d1.node, _0x2caf5b, _0x30f039);
    },
    truncate: function (_0x24cd11, _0x27c1af) {
      if (_0x27c1af < 0) {
        throw new _0x4c1d54.ErrnoError(28);
      }
      var _0x40478f;
      if (typeof _0x24cd11 === "string") {
        var _0x16448a = _0x4c1d54.lookupPath(_0x24cd11, {
          follow: true
        });
        _0x40478f = _0x16448a.node;
      } else {
        _0x40478f = _0x24cd11;
      }
      if (!_0x40478f.node_ops.setattr) {
        throw new _0x4c1d54.ErrnoError(63);
      }
      if (_0x4c1d54.isDir(_0x40478f.mode)) {
        throw new _0x4c1d54.ErrnoError(31);
      }
      if (!_0x4c1d54.isFile(_0x40478f.mode)) {
        throw new _0x4c1d54.ErrnoError(28);
      }
      var _0x3919e7 = _0x4c1d54.nodePermissions(_0x40478f, "w");
      if (_0x3919e7) {
        throw new _0x4c1d54.ErrnoError(_0x3919e7);
      }
      _0x40478f.node_ops.setattr(_0x40478f, {
        size: _0x27c1af,
        timestamp: Date.now()
      });
    },
    ftruncate: function (_0x252caa, _0x557694) {
      var _0xf42f3 = _0x4c1d54.getStream(_0x252caa);
      if (!_0xf42f3) {
        throw new _0x4c1d54.ErrnoError(8);
      }
      if ((_0xf42f3.flags & 2097155) === 0) {
        throw new _0x4c1d54.ErrnoError(28);
      }
      _0x4c1d54.truncate(_0xf42f3.node, _0x557694);
    },
    utime: function (_0x3f479e, _0x504833, _0x75bc04) {
      var _0x41bba5 = _0x4c1d54.lookupPath(_0x3f479e, {
        follow: true
      });
      var _0x7f0379 = _0x41bba5.node;
      _0x7f0379.node_ops.setattr(_0x7f0379, {
        timestamp: Math.max(_0x504833, _0x75bc04)
      });
    },
    open: function (_0x495df4, _0x29105e, _0x2d2d0b, _0x57f5b5, _0x1bc797) {
      if (_0x495df4 === "") {
        throw new _0x4c1d54.ErrnoError(44);
      }
      _0x29105e = typeof _0x29105e === "string" ? _0x4c1d54.modeStringToFlags(_0x29105e) : _0x29105e;
      _0x2d2d0b = typeof _0x2d2d0b === "undefined" ? 438 : _0x2d2d0b;
      if (_0x29105e & 64) {
        _0x2d2d0b = _0x2d2d0b & 4095 | 32768;
      } else {
        _0x2d2d0b = 0;
      }
      var _0x5c4322;
      if (typeof _0x495df4 === "object") {
        _0x5c4322 = _0x495df4;
      } else {
        _0x495df4 = _0x477856.normalize(_0x495df4);
        try {
          var _0x504933 = _0x4c1d54.lookupPath(_0x495df4, {
            follow: !(_0x29105e & 131072)
          });
          _0x5c4322 = _0x504933.node;
        } catch (_0x5485ff) {}
      }
      var _0x47d0ce = false;
      if (_0x29105e & 64) {
        if (_0x5c4322) {
          if (_0x29105e & 128) {
            throw new _0x4c1d54.ErrnoError(20);
          }
        } else {
          _0x5c4322 = _0x4c1d54.mknod(_0x495df4, _0x2d2d0b, 0);
          _0x47d0ce = true;
        }
      }
      if (!_0x5c4322) {
        throw new _0x4c1d54.ErrnoError(44);
      }
      if (_0x4c1d54.isChrdev(_0x5c4322.mode)) {
        _0x29105e &= ~512;
      }
      if (_0x29105e & 65536 && !_0x4c1d54.isDir(_0x5c4322.mode)) {
        throw new _0x4c1d54.ErrnoError(54);
      }
      if (!_0x47d0ce) {
        var _0x224070 = _0x4c1d54.mayOpen(_0x5c4322, _0x29105e);
        if (_0x224070) {
          throw new _0x4c1d54.ErrnoError(_0x224070);
        }
      }
      if (_0x29105e & 512) {
        _0x4c1d54.truncate(_0x5c4322, 0);
      }
      _0x29105e &= ~131712;
      var _0x2300f9 = _0x4c1d54.createStream({
        node: _0x5c4322,
        path: _0x4c1d54.getPath(_0x5c4322),
        flags: _0x29105e,
        seekable: true,
        position: 0,
        stream_ops: _0x5c4322.stream_ops,
        ungotten: [],
        error: false
      }, _0x57f5b5, _0x1bc797);
      if (_0x2300f9.stream_ops.open) {
        _0x2300f9.stream_ops.open(_0x2300f9);
      }
      if (_0x51dce1.logReadFiles && !(_0x29105e & 1)) {
        if (!_0x4c1d54.readFiles) {
          _0x4c1d54.readFiles = {};
        }
        if (!(_0x495df4 in _0x4c1d54.readFiles)) {
          _0x4c1d54.readFiles[_0x495df4] = 1;
          _0x235a52("FS.trackingDelegate error on read file: " + _0x495df4);
        }
      }
      try {
        if (_0x4c1d54.trackingDelegate.onOpenFile) {
          var _0x12e774 = 0;
          if ((_0x29105e & 2097155) !== 1) {
            _0x12e774 |= _0x4c1d54.tracking.openFlags.READ;
          }
          if ((_0x29105e & 2097155) !== 0) {
            _0x12e774 |= _0x4c1d54.tracking.openFlags.WRITE;
          }
          _0x4c1d54.trackingDelegate.onOpenFile(_0x495df4, _0x12e774);
        }
      } catch (_0xf694cd) {
        _0x235a52("FS.trackingDelegate['onOpenFile']('" + _0x495df4 + "', flags) threw an exception: " + _0xf694cd.message);
      }
      return _0x2300f9;
    },
    close: function (_0x55f5bb) {
      if (_0x4c1d54.isClosed(_0x55f5bb)) {
        throw new _0x4c1d54.ErrnoError(8);
      }
      if (_0x55f5bb.getdents) {
        _0x55f5bb.getdents = null;
      }
      try {
        if (_0x55f5bb.stream_ops.close) {
          _0x55f5bb.stream_ops.close(_0x55f5bb);
        }
      } catch (_0x4a2d7b) {
        throw _0x4a2d7b;
      } finally {
        _0x4c1d54.closeStream(_0x55f5bb.fd);
      }
      _0x55f5bb.fd = null;
    },
    isClosed: function (_0x1cab53) {
      return _0x1cab53.fd === null;
    },
    llseek: function (_0x5a73e5, _0x185dbc, _0x3cfeea) {
      if (_0x4c1d54.isClosed(_0x5a73e5)) {
        throw new _0x4c1d54.ErrnoError(8);
      }
      if (!_0x5a73e5.seekable || !_0x5a73e5.stream_ops.llseek) {
        throw new _0x4c1d54.ErrnoError(70);
      }
      if (_0x3cfeea != 0 && _0x3cfeea != 1 && _0x3cfeea != 2) {
        throw new _0x4c1d54.ErrnoError(28);
      }
      _0x5a73e5.position = _0x5a73e5.stream_ops.llseek(_0x5a73e5, _0x185dbc, _0x3cfeea);
      _0x5a73e5.ungotten = [];
      return _0x5a73e5.position;
    },
    read: function (_0x268faf, _0x28fcb4, _0x266293, _0x246da4, _0x14f04c) {
      if (_0x246da4 < 0 || _0x14f04c < 0) {
        throw new _0x4c1d54.ErrnoError(28);
      }
      if (_0x4c1d54.isClosed(_0x268faf)) {
        throw new _0x4c1d54.ErrnoError(8);
      }
      if ((_0x268faf.flags & 2097155) === 1) {
        throw new _0x4c1d54.ErrnoError(8);
      }
      if (_0x4c1d54.isDir(_0x268faf.node.mode)) {
        throw new _0x4c1d54.ErrnoError(31);
      }
      if (!_0x268faf.stream_ops.read) {
        throw new _0x4c1d54.ErrnoError(28);
      }
      var _0x3af5be = typeof _0x14f04c !== "undefined";
      if (!_0x3af5be) {
        _0x14f04c = _0x268faf.position;
      } else if (!_0x268faf.seekable) {
        throw new _0x4c1d54.ErrnoError(70);
      }
      var _0x319d5b = _0x268faf.stream_ops.read(_0x268faf, _0x28fcb4, _0x266293, _0x246da4, _0x14f04c);
      if (!_0x3af5be) {
        _0x268faf.position += _0x319d5b;
      }
      return _0x319d5b;
    },
    write: function (_0x1e4630, _0x264e2f, _0x582919, _0x5508a4, _0x3cd815, _0x8ab1a6) {
      if (_0x5508a4 < 0 || _0x3cd815 < 0) {
        throw new _0x4c1d54.ErrnoError(28);
      }
      if (_0x4c1d54.isClosed(_0x1e4630)) {
        throw new _0x4c1d54.ErrnoError(8);
      }
      if ((_0x1e4630.flags & 2097155) === 0) {
        throw new _0x4c1d54.ErrnoError(8);
      }
      if (_0x4c1d54.isDir(_0x1e4630.node.mode)) {
        throw new _0x4c1d54.ErrnoError(31);
      }
      if (!_0x1e4630.stream_ops.write) {
        throw new _0x4c1d54.ErrnoError(28);
      }
      if (_0x1e4630.seekable && _0x1e4630.flags & 1024) {
        _0x4c1d54.llseek(_0x1e4630, 0, 2);
      }
      var _0x4fb782 = typeof _0x3cd815 !== "undefined";
      if (!_0x4fb782) {
        _0x3cd815 = _0x1e4630.position;
      } else if (!_0x1e4630.seekable) {
        throw new _0x4c1d54.ErrnoError(70);
      }
      var _0xc9d976 = _0x1e4630.stream_ops.write(_0x1e4630, _0x264e2f, _0x582919, _0x5508a4, _0x3cd815, _0x8ab1a6);
      if (!_0x4fb782) {
        _0x1e4630.position += _0xc9d976;
      }
      try {
        if (_0x1e4630.path && _0x4c1d54.trackingDelegate.onWriteToFile) {
          _0x4c1d54.trackingDelegate.onWriteToFile(_0x1e4630.path);
        }
      } catch (_0x2f27fe) {
        _0x235a52("FS.trackingDelegate['onWriteToFile']('" + _0x1e4630.path + "') threw an exception: " + _0x2f27fe.message);
      }
      return _0xc9d976;
    },
    allocate: function (_0x67d147, _0x2dde72, _0x103cd3) {
      if (_0x4c1d54.isClosed(_0x67d147)) {
        throw new _0x4c1d54.ErrnoError(8);
      }
      if (_0x2dde72 < 0 || _0x103cd3 <= 0) {
        throw new _0x4c1d54.ErrnoError(28);
      }
      if ((_0x67d147.flags & 2097155) === 0) {
        throw new _0x4c1d54.ErrnoError(8);
      }
      if (!_0x4c1d54.isFile(_0x67d147.node.mode) && !_0x4c1d54.isDir(_0x67d147.node.mode)) {
        throw new _0x4c1d54.ErrnoError(43);
      }
      if (!_0x67d147.stream_ops.allocate) {
        throw new _0x4c1d54.ErrnoError(138);
      }
      _0x67d147.stream_ops.allocate(_0x67d147, _0x2dde72, _0x103cd3);
    },
    mmap: function (_0x3bf2dd, _0x5c09f9, _0x54f5cd, _0x300793, _0x528bbf, _0x412e01) {
      if ((_0x528bbf & 2) !== 0 && (_0x412e01 & 2) === 0 && (_0x3bf2dd.flags & 2097155) !== 2) {
        throw new _0x4c1d54.ErrnoError(2);
      }
      if ((_0x3bf2dd.flags & 2097155) === 1) {
        throw new _0x4c1d54.ErrnoError(2);
      }
      if (!_0x3bf2dd.stream_ops.mmap) {
        throw new _0x4c1d54.ErrnoError(43);
      }
      return _0x3bf2dd.stream_ops.mmap(_0x3bf2dd, _0x5c09f9, _0x54f5cd, _0x300793, _0x528bbf, _0x412e01);
    },
    msync: function (_0xe176a9, _0x4644e0, _0x47fc4b, _0x226e83, _0x3714d1) {
      if (!_0xe176a9 || !_0xe176a9.stream_ops.msync) {
        return 0;
      }
      return _0xe176a9.stream_ops.msync(_0xe176a9, _0x4644e0, _0x47fc4b, _0x226e83, _0x3714d1);
    },
    munmap: function (_0x5ab2ff) {
      return 0;
    },
    ioctl: function (_0x18d5fd, _0x4dccac, _0x182963) {
      if (!_0x18d5fd.stream_ops.ioctl) {
        throw new _0x4c1d54.ErrnoError(59);
      }
      return _0x18d5fd.stream_ops.ioctl(_0x18d5fd, _0x4dccac, _0x182963);
    },
    readFile: function (_0x28f706, _0x5d2495) {
      _0x5d2495 = _0x5d2495 || {};
      _0x5d2495.flags = _0x5d2495.flags || 0;
      _0x5d2495.encoding = _0x5d2495.encoding || "binary";
      if (_0x5d2495.encoding !== "utf8" && _0x5d2495.encoding !== "binary") {
        throw new Error("Invalid encoding type \"" + _0x5d2495.encoding + "\"");
      }
      var _0x5e543d;
      var _0xe9da96 = _0x4c1d54.open(_0x28f706, _0x5d2495.flags);
      var _0x306444 = _0x4c1d54.stat(_0x28f706);
      var _0x2bb601 = _0x306444.size;
      var _0x2082ca = new Uint8Array(_0x2bb601);
      _0x4c1d54.read(_0xe9da96, _0x2082ca, 0, _0x2bb601, 0);
      if (_0x5d2495.encoding === "utf8") {
        _0x5e543d = _0x3f3e02(_0x2082ca, 0);
      } else if (_0x5d2495.encoding === "binary") {
        _0x5e543d = _0x2082ca;
      }
      _0x4c1d54.close(_0xe9da96);
      return _0x5e543d;
    },
    writeFile: function (_0x439f5f, _0x547686, _0x1b6d0f) {
      _0x1b6d0f = _0x1b6d0f || {};
      _0x1b6d0f.flags = _0x1b6d0f.flags || 577;
      var _0x3cf80f = _0x4c1d54.open(_0x439f5f, _0x1b6d0f.flags, _0x1b6d0f.mode);
      if (typeof _0x547686 === "string") {
        var _0x3db9d7 = new Uint8Array(_0x55b306(_0x547686) + 1);
        var _0x38d2e2 = _0x5aa101(_0x547686, _0x3db9d7, 0, _0x3db9d7.length);
        _0x4c1d54.write(_0x3cf80f, _0x3db9d7, 0, _0x38d2e2, undefined, _0x1b6d0f.canOwn);
      } else if (ArrayBuffer.isView(_0x547686)) {
        _0x4c1d54.write(_0x3cf80f, _0x547686, 0, _0x547686.byteLength, undefined, _0x1b6d0f.canOwn);
      } else {
        throw new Error("Unsupported data type");
      }
      _0x4c1d54.close(_0x3cf80f);
    },
    cwd: function () {
      return _0x4c1d54.currentPath;
    },
    chdir: function (_0x461ad9) {
      var _0x208507 = _0x4c1d54.lookupPath(_0x461ad9, {
        follow: true
      });
      if (_0x208507.node === null) {
        throw new _0x4c1d54.ErrnoError(44);
      }
      if (!_0x4c1d54.isDir(_0x208507.node.mode)) {
        throw new _0x4c1d54.ErrnoError(54);
      }
      var _0x5abbeb = _0x4c1d54.nodePermissions(_0x208507.node, "x");
      if (_0x5abbeb) {
        throw new _0x4c1d54.ErrnoError(_0x5abbeb);
      }
      _0x4c1d54.currentPath = _0x208507.path;
    },
    createDefaultDirectories: function () {
      _0x4c1d54.mkdir("/tmp");
      _0x4c1d54.mkdir("/home");
      _0x4c1d54.mkdir("/home/web_user");
    },
    createDefaultDevices: function () {
      _0x4c1d54.mkdir("/dev");
      _0x4c1d54.registerDevice(_0x4c1d54.makedev(1, 3), {
        read: function () {
          return 0;
        },
        write: function (_0x2e1270, _0x15fb5b, _0x51afeb, _0x11b22a, _0x203dbc) {
          return _0x11b22a;
        }
      });
      _0x4c1d54.mkdev("/dev/null", _0x4c1d54.makedev(1, 3));
      _0x1eeb21.register(_0x4c1d54.makedev(5, 0), _0x1eeb21.default_tty_ops);
      _0x1eeb21.register(_0x4c1d54.makedev(6, 0), _0x1eeb21.default_tty1_ops);
      _0x4c1d54.mkdev("/dev/tty", _0x4c1d54.makedev(5, 0));
      _0x4c1d54.mkdev("/dev/tty1", _0x4c1d54.makedev(6, 0));
      var _0x4d425c = _0x5f25a1();
      _0x4c1d54.createDevice("/dev", "random", _0x4d425c);
      _0x4c1d54.createDevice("/dev", "urandom", _0x4d425c);
      _0x4c1d54.mkdir("/dev/shm");
      _0x4c1d54.mkdir("/dev/shm/tmp");
    },
    createSpecialDirectories: function () {
      _0x4c1d54.mkdir("/proc");
      var _0x4a3af1 = _0x4c1d54.mkdir("/proc/self");
      _0x4c1d54.mkdir("/proc/self/fd");
      _0x4c1d54.mount({
        mount: function () {
          var _0x214691 = _0x4c1d54.createNode(_0x4a3af1, "fd", 16895, 73);
          _0x214691.node_ops = {
            lookup: function (_0x1b70b3, _0x1d4714) {
              var _0x249713 = +_0x1d4714;
              var _0x593613 = _0x4c1d54.getStream(_0x249713);
              if (!_0x593613) {
                throw new _0x4c1d54.ErrnoError(8);
              }
              var _0x587749 = {
                parent: null,
                mount: {
                  mountpoint: "fake"
                },
                node_ops: {
                  readlink: function () {
                    return _0x593613.path;
                  }
                }
              };
              _0x587749.parent = _0x587749;
              return _0x587749;
            }
          };
          return _0x214691;
        }
      }, {}, "/proc/self/fd");
    },
    createStandardStreams: function () {
      if (_0x51dce1.stdin) {
        _0x4c1d54.createDevice("/dev", "stdin", _0x51dce1.stdin);
      } else {
        _0x4c1d54.symlink("/dev/tty", "/dev/stdin");
      }
      if (_0x51dce1.stdout) {
        _0x4c1d54.createDevice("/dev", "stdout", null, _0x51dce1.stdout);
      } else {
        _0x4c1d54.symlink("/dev/tty", "/dev/stdout");
      }
      if (_0x51dce1.stderr) {
        _0x4c1d54.createDevice("/dev", "stderr", null, _0x51dce1.stderr);
      } else {
        _0x4c1d54.symlink("/dev/tty1", "/dev/stderr");
      }
      var _0x1f1a94 = _0x4c1d54.open("/dev/stdin", 0);
      var _0x115d48 = _0x4c1d54.open("/dev/stdout", 1);
      var _0x1fcaa3 = _0x4c1d54.open("/dev/stderr", 1);
    },
    ensureErrnoError: function () {
      if (_0x4c1d54.ErrnoError) {
        return;
      }
      _0x4c1d54.ErrnoError = function _0x4af5b6(_0x183482, _0x2132a5) {
        this.node = _0x2132a5;
        this.setErrno = function (_0x5dee0b) {
          this.errno = _0x5dee0b;
        };
        this.setErrno(_0x183482);
        this.message = "FS error";
      };
      _0x4c1d54.ErrnoError.prototype = new Error();
      _0x4c1d54.ErrnoError.prototype.constructor = _0x4c1d54.ErrnoError;
      [44].forEach(function (_0x191827) {
        _0x4c1d54.genericErrors[_0x191827] = new _0x4c1d54.ErrnoError(_0x191827);
        _0x4c1d54.genericErrors[_0x191827].stack = "<generic error, no stack>";
      });
    },
    staticInit: function () {
      _0x4c1d54.ensureErrnoError();
      _0x4c1d54.nameTable = new Array(4096);
      _0x4c1d54.mount(_0x484005, {}, "/");
      _0x4c1d54.createDefaultDirectories();
      _0x4c1d54.createDefaultDevices();
      _0x4c1d54.createSpecialDirectories();
      _0x4c1d54.filesystems = {
        MEMFS: _0x484005,
        IDBFS: _0x3a0062
      };
    },
    init: function (_0x482816, _0x7c987f, _0x2c44da) {
      _0x4c1d54.init.initialized = true;
      _0x4c1d54.ensureErrnoError();
      _0x51dce1.stdin = _0x482816 || _0x51dce1.stdin;
      _0x51dce1.stdout = _0x7c987f || _0x51dce1.stdout;
      _0x51dce1.stderr = _0x2c44da || _0x51dce1.stderr;
      _0x4c1d54.createStandardStreams();
    },
    quit: function () {
      _0x4c1d54.init.initialized = false;
      var _0xd29950 = _0x51dce1._fflush;
      if (_0xd29950) {
        _0xd29950(0);
      }
      for (var _0x1f0d15 = 0; _0x1f0d15 < _0x4c1d54.streams.length; _0x1f0d15++) {
        var _0x4300b2 = _0x4c1d54.streams[_0x1f0d15];
        if (!_0x4300b2) {
          continue;
        }
        _0x4c1d54.close(_0x4300b2);
      }
    },
    getMode: function (_0x172414, _0x522926) {
      var _0x1eba09 = 0;
      if (_0x172414) {
        _0x1eba09 |= 365;
      }
      if (_0x522926) {
        _0x1eba09 |= 146;
      }
      return _0x1eba09;
    },
    findObject: function (_0x4ab7a7, _0x3baedf) {
      var _0x4e2ea5 = _0x4c1d54.analyzePath(_0x4ab7a7, _0x3baedf);
      if (_0x4e2ea5.exists) {
        return _0x4e2ea5.object;
      } else {
        return null;
      }
    },
    analyzePath: function (_0x28d76d, _0x400e0a) {
      try {
        var _0x3500ef = _0x4c1d54.lookupPath(_0x28d76d, {
          follow: !_0x400e0a
        });
        _0x28d76d = _0x3500ef.path;
      } catch (_0x3ad0e2) {}
      var _0x3c962b = {
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
        var _0x3500ef = _0x4c1d54.lookupPath(_0x28d76d, {
          parent: true
        });
        _0x3c962b.parentExists = true;
        _0x3c962b.parentPath = _0x3500ef.path;
        _0x3c962b.parentObject = _0x3500ef.node;
        _0x3c962b.name = _0x477856.basename(_0x28d76d);
        _0x3500ef = _0x4c1d54.lookupPath(_0x28d76d, {
          follow: !_0x400e0a
        });
        _0x3c962b.exists = true;
        _0x3c962b.path = _0x3500ef.path;
        _0x3c962b.object = _0x3500ef.node;
        _0x3c962b.name = _0x3500ef.node.name;
        _0x3c962b.isRoot = _0x3500ef.path === "/";
      } catch (_0x1b54b9) {
        _0x3c962b.error = _0x1b54b9.errno;
      }
      return _0x3c962b;
    },
    createPath: function (_0x441661, _0x327f09, _0x5d3a96, _0x5c96f9) {
      _0x441661 = typeof _0x441661 === "string" ? _0x441661 : _0x4c1d54.getPath(_0x441661);
      var _0xdc55ab = _0x327f09.split("/").reverse();
      while (_0xdc55ab.length) {
        var _0x70424c = _0xdc55ab.pop();
        if (!_0x70424c) {
          continue;
        }
        var _0x10acb7 = _0x477856.join2(_0x441661, _0x70424c);
        try {
          _0x4c1d54.mkdir(_0x10acb7);
        } catch (_0x40ad61) {}
        _0x441661 = _0x10acb7;
      }
      return _0x10acb7;
    },
    createFile: function (_0x5beb06, _0x5a572c, _0x517eda, _0x42e658, _0x28a640) {
      var _0x62a825 = _0x477856.join2(typeof _0x5beb06 === "string" ? _0x5beb06 : _0x4c1d54.getPath(_0x5beb06), _0x5a572c);
      var _0x292a45 = _0x4c1d54.getMode(_0x42e658, _0x28a640);
      return _0x4c1d54.create(_0x62a825, _0x292a45);
    },
    createDataFile: function (_0x3e5dca, _0x47f2bd, _0x4a28e7, _0x50b174, _0x2ca613, _0x580c71) {
      var _0xe2486e = _0x47f2bd ? _0x477856.join2(typeof _0x3e5dca === "string" ? _0x3e5dca : _0x4c1d54.getPath(_0x3e5dca), _0x47f2bd) : _0x3e5dca;
      var _0x2f7cfb = _0x4c1d54.getMode(_0x50b174, _0x2ca613);
      var _0x33cdcb = _0x4c1d54.create(_0xe2486e, _0x2f7cfb);
      if (_0x4a28e7) {
        if (typeof _0x4a28e7 === "string") {
          var _0x2b0b4b = new Array(_0x4a28e7.length);
          for (var _0x185cfd = 0, _0x3454ad = _0x4a28e7.length; _0x185cfd < _0x3454ad; ++_0x185cfd) {
            _0x2b0b4b[_0x185cfd] = _0x4a28e7.charCodeAt(_0x185cfd);
          }
          _0x4a28e7 = _0x2b0b4b;
        }
        _0x4c1d54.chmod(_0x33cdcb, _0x2f7cfb | 146);
        var _0x6aa4a6 = _0x4c1d54.open(_0x33cdcb, 577);
        _0x4c1d54.write(_0x6aa4a6, _0x4a28e7, 0, _0x4a28e7.length, 0, _0x580c71);
        _0x4c1d54.close(_0x6aa4a6);
        _0x4c1d54.chmod(_0x33cdcb, _0x2f7cfb);
      }
      return _0x33cdcb;
    },
    createDevice: function (_0x1bcb2c, _0x57500f, _0x20f21e, _0x444d3c) {
      var _0x1fc0db = _0x477856.join2(typeof _0x1bcb2c === "string" ? _0x1bcb2c : _0x4c1d54.getPath(_0x1bcb2c), _0x57500f);
      var _0x344125 = _0x4c1d54.getMode(!!_0x20f21e, !!_0x444d3c);
      if (!_0x4c1d54.createDevice.major) {
        _0x4c1d54.createDevice.major = 64;
      }
      var _0x2fb4c1 = _0x4c1d54.makedev(_0x4c1d54.createDevice.major++, 0);
      _0x4c1d54.registerDevice(_0x2fb4c1, {
        open: function (_0x4cd7cb) {
          _0x4cd7cb.seekable = false;
        },
        close: function (_0x64159c) {
          if (_0x444d3c && _0x444d3c.buffer && _0x444d3c.buffer.length) {
            _0x444d3c(10);
          }
        },
        read: function (_0x2ccf1e, _0x726d95, _0x1db402, _0x49fbc1, _0x505aef) {
          var _0x391d8a = 0;
          for (var _0x452b9e = 0; _0x452b9e < _0x49fbc1; _0x452b9e++) {
            var _0x75ca3;
            try {
              _0x75ca3 = _0x20f21e();
            } catch (_0x16b90e) {
              throw new _0x4c1d54.ErrnoError(29);
            }
            if (_0x75ca3 === undefined && _0x391d8a === 0) {
              throw new _0x4c1d54.ErrnoError(6);
            }
            if (_0x75ca3 === null || _0x75ca3 === undefined) {
              break;
            }
            _0x391d8a++;
            _0x726d95[_0x1db402 + _0x452b9e] = _0x75ca3;
          }
          if (_0x391d8a) {
            _0x2ccf1e.node.timestamp = Date.now();
          }
          return _0x391d8a;
        },
        write: function (_0x23cceb, _0x17a20c, _0x90ea71, _0x37d985, _0x16a5de) {
          for (var _0x1e55f8 = 0; _0x1e55f8 < _0x37d985; _0x1e55f8++) {
            try {
              _0x444d3c(_0x17a20c[_0x90ea71 + _0x1e55f8]);
            } catch (_0x4ee241) {
              throw new _0x4c1d54.ErrnoError(29);
            }
          }
          if (_0x37d985) {
            _0x23cceb.node.timestamp = Date.now();
          }
          return _0x1e55f8;
        }
      });
      return _0x4c1d54.mkdev(_0x1fc0db, _0x344125, _0x2fb4c1);
    },
    forceLoadFile: function (_0x62c6f1) {
      if (_0x62c6f1.isDevice || _0x62c6f1.isFolder || _0x62c6f1.link || _0x62c6f1.contents) {
        return true;
      }
      if (typeof XMLHttpRequest !== "undefined") {
        throw new Error("Lazy loading should have been performed (contents set) in createLazyFile, but it was not. Lazy loading only works in web workers. Use --embed-file or --preload-file in emcc on the main thread.");
      } else if (_0x448094) {
        try {
          _0x62c6f1.contents = _0x3c066c(_0x448094(_0x62c6f1.url), true);
          _0x62c6f1.usedBytes = _0x62c6f1.contents.length;
        } catch (_0x5a1714) {
          throw new _0x4c1d54.ErrnoError(29);
        }
      } else {
        throw new Error("Cannot load without read() or XMLHttpRequest.");
      }
    },
    createLazyFile: function (_0x53f7ea, _0x41aab2, _0x20a89b, _0x2b3184, _0x5424c3) {
      function _0x6076cd() {
        this.lengthKnown = false;
        this.chunks = [];
      }
      _0x6076cd.prototype.get = function _0x29b18d(_0x218817) {
        if (_0x218817 > this.length - 1 || _0x218817 < 0) {
          return undefined;
        }
        var _0x37e33b = _0x218817 % this.chunkSize;
        var _0x55c0f8 = _0x218817 / this.chunkSize | 0;
        return this.getter(_0x55c0f8)[_0x37e33b];
      };
      _0x6076cd.prototype.setDataGetter = function _0x596a63(_0x4dac26) {
        this.getter = _0x4dac26;
      };
      _0x6076cd.prototype.cacheLength = function _0x2cb1c8() {
        var _0x31779d = new XMLHttpRequest();
        _0x31779d.open("HEAD", _0x20a89b, false);
        _0x31779d.send(null);
        if ((!(_0x31779d.status >= 200) || !(_0x31779d.status < 300)) && _0x31779d.status !== 304) {
          throw new Error("Couldn't load " + _0x20a89b + ". Status: " + _0x31779d.status);
        }
        var _0x5a17f9 = Number(_0x31779d.getResponseHeader("Content-length"));
        var _0x2a3331;
        var _0x2ba045 = (_0x2a3331 = _0x31779d.getResponseHeader("Accept-Ranges")) && _0x2a3331 === "bytes";
        var _0x16d386 = (_0x2a3331 = _0x31779d.getResponseHeader("Content-Encoding")) && _0x2a3331 === "gzip";
        var _0x582eb = 1048576;
        if (!_0x2ba045) {
          _0x582eb = _0x5a17f9;
        }
        var _0x71c84a = function (_0x563455, _0x29da5e) {
          if (_0x563455 > _0x29da5e) {
            throw new Error("invalid range (" + _0x563455 + ", " + _0x29da5e + ") or no bytes requested!");
          }
          if (_0x29da5e > _0x5a17f9 - 1) {
            throw new Error("only " + _0x5a17f9 + " bytes available! programmer error!");
          }
          var _0x3e1abf = new XMLHttpRequest();
          _0x3e1abf.open("GET", _0x20a89b, false);
          if (_0x5a17f9 !== _0x582eb) {
            _0x3e1abf.setRequestHeader("Range", "bytes=" + _0x563455 + "-" + _0x29da5e);
          }
          if (typeof Uint8Array != "undefined") {
            _0x3e1abf.responseType = "arraybuffer";
          }
          if (_0x3e1abf.overrideMimeType) {
            _0x3e1abf.overrideMimeType("text/plain; charset=x-user-defined");
          }
          _0x3e1abf.send(null);
          if ((!(_0x3e1abf.status >= 200) || !(_0x3e1abf.status < 300)) && _0x3e1abf.status !== 304) {
            throw new Error("Couldn't load " + _0x20a89b + ". Status: " + _0x3e1abf.status);
          }
          if (_0x3e1abf.response !== undefined) {
            return new Uint8Array(_0x3e1abf.response || []);
          } else {
            return _0x3c066c(_0x3e1abf.responseText || "", true);
          }
        };
        var _0x5aa413 = this;
        _0x5aa413.setDataGetter(function (_0x170c7b) {
          var _0x52bf4a = _0x170c7b * _0x582eb;
          var _0x4c2e27 = (_0x170c7b + 1) * _0x582eb - 1;
          _0x4c2e27 = Math.min(_0x4c2e27, _0x5a17f9 - 1);
          if (typeof _0x5aa413.chunks[_0x170c7b] === "undefined") {
            _0x5aa413.chunks[_0x170c7b] = _0x71c84a(_0x52bf4a, _0x4c2e27);
          }
          if (typeof _0x5aa413.chunks[_0x170c7b] === "undefined") {
            throw new Error("doXHR failed!");
          }
          return _0x5aa413.chunks[_0x170c7b];
        });
        if (_0x16d386 || !_0x5a17f9) {
          _0x582eb = _0x5a17f9 = 1;
          _0x5a17f9 = this.getter(0).length;
          _0x582eb = _0x5a17f9;
          _0xb399e9("LazyFiles on gzip forces download of the whole file when length is accessed");
        }
        this._length = _0x5a17f9;
        this._chunkSize = _0x582eb;
        this.lengthKnown = true;
      };
      if (typeof XMLHttpRequest !== "undefined") {
        if (!_0x3f8eed) {
          throw "Cannot do synchronous binary XHRs outside webworkers in modern browsers. Use --embed-file or --preload-file in emcc";
        }
        var _0x12fcff = new _0x6076cd();
        Object.defineProperties(_0x12fcff, {
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
        var _0x43cc8b = {
          isDevice: false,
          contents: _0x12fcff
        };
      } else {
        var _0x43cc8b = {
          isDevice: false,
          url: _0x20a89b
        };
      }
      var _0x1eb95e = _0x4c1d54.createFile(_0x53f7ea, _0x41aab2, _0x43cc8b, _0x2b3184, _0x5424c3);
      if (_0x43cc8b.contents) {
        _0x1eb95e.contents = _0x43cc8b.contents;
      } else if (_0x43cc8b.url) {
        _0x1eb95e.contents = null;
        _0x1eb95e.url = _0x43cc8b.url;
      }
      Object.defineProperties(_0x1eb95e, {
        usedBytes: {
          get: function () {
            return this.contents.length;
          }
        }
      });
      var _0xf8961 = {};
      var _0x53c5b4 = Object.keys(_0x1eb95e.stream_ops);
      _0x53c5b4.forEach(function (_0x82d765) {
        var _0x178d37 = _0x1eb95e.stream_ops[_0x82d765];
        _0xf8961[_0x82d765] = function _0x258fc5() {
          _0x4c1d54.forceLoadFile(_0x1eb95e);
          return _0x178d37.apply(null, arguments);
        };
      });
      _0xf8961.read = function _0x36c9f7(_0x57da3c, _0x13e4dc, _0x433af0, _0x5be78e, _0x3c11e4) {
        _0x4c1d54.forceLoadFile(_0x1eb95e);
        var _0x22e5b7 = _0x57da3c.node.contents;
        if (_0x3c11e4 >= _0x22e5b7.length) {
          return 0;
        }
        var _0x54ac04 = Math.min(_0x22e5b7.length - _0x3c11e4, _0x5be78e);
        if (_0x22e5b7.slice) {
          for (var _0x251d17 = 0; _0x251d17 < _0x54ac04; _0x251d17++) {
            _0x13e4dc[_0x433af0 + _0x251d17] = _0x22e5b7[_0x3c11e4 + _0x251d17];
          }
        } else {
          for (var _0x251d17 = 0; _0x251d17 < _0x54ac04; _0x251d17++) {
            _0x13e4dc[_0x433af0 + _0x251d17] = _0x22e5b7.get(_0x3c11e4 + _0x251d17);
          }
        }
        return _0x54ac04;
      };
      _0x1eb95e.stream_ops = _0xf8961;
      return _0x1eb95e;
    },
    createPreloadedFile: function (_0x17e3ac, _0x4261f5, _0x5ccd59, _0x37a612, _0x5a1063, _0x41fff4, _0xed6d01, _0x179905, _0xdded5b, _0x3abdd1) {
      _0x3efa3d.init();
      var _0x35d345 = _0x4261f5 ? _0x1bac66.resolve(_0x477856.join2(_0x17e3ac, _0x4261f5)) : _0x17e3ac;
      var _0x551273 = _0x5a5682("cp " + _0x35d345);
      function _0x108d40(_0x12cfe6) {
        function _0x4c72c7(_0x223f34) {
          if (_0x3abdd1) {
            _0x3abdd1();
          }
          if (!_0x179905) {
            _0x4c1d54.createDataFile(_0x17e3ac, _0x4261f5, _0x223f34, _0x37a612, _0x5a1063, _0xdded5b);
          }
          if (_0x41fff4) {
            _0x41fff4();
          }
          _0xe5d65b(_0x551273);
        }
        var _0x311a72 = false;
        _0x51dce1.preloadPlugins.forEach(function (_0x58feeb) {
          if (_0x311a72) {
            return;
          }
          if (_0x58feeb.canHandle(_0x35d345)) {
            _0x58feeb.handle(_0x12cfe6, _0x35d345, _0x4c72c7, function () {
              if (_0xed6d01) {
                _0xed6d01();
              }
              _0xe5d65b(_0x551273);
            });
            _0x311a72 = true;
          }
        });
        if (!_0x311a72) {
          _0x4c72c7(_0x12cfe6);
        }
      }
      _0x3102c9(_0x551273);
      if (typeof _0x5ccd59 == "string") {
        _0x3efa3d.asyncLoad(_0x5ccd59, function (_0x17e90c) {
          _0x108d40(_0x17e90c);
        }, _0xed6d01);
      } else {
        _0x108d40(_0x5ccd59);
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
    saveFilesToDB: function (_0x1208bb, _0x39612b, _0x417365) {
      _0x39612b = _0x39612b || function () {};
      _0x417365 = _0x417365 || function () {};
      var _0x43ceb1 = _0x4c1d54.indexedDB();
      try {
        var _0x42c34e = _0x43ceb1.open(_0x4c1d54.DB_NAME(), _0x4c1d54.DB_VERSION);
      } catch (_0x292ddb) {
        return _0x417365(_0x292ddb);
      }
      _0x42c34e.onupgradeneeded = function _0x40f0b0() {
        _0xb399e9("creating db");
        var _0x30a47a = _0x42c34e.result;
        _0x30a47a.createObjectStore(_0x4c1d54.DB_STORE_NAME);
      };
      _0x42c34e.onsuccess = function _0x66637b() {
        var _0x2c855e = _0x42c34e.result;
        var _0x487cc0 = _0x2c855e.transaction([_0x4c1d54.DB_STORE_NAME], "readwrite");
        var _0x5233a5 = _0x487cc0.objectStore(_0x4c1d54.DB_STORE_NAME);
        var _0x2634b4 = 0;
        var _0x341cbc = 0;
        var _0x429ba5 = _0x1208bb.length;
        function _0x423dbe() {
          if (_0x341cbc == 0) {
            _0x39612b();
          } else {
            _0x417365();
          }
        }
        _0x1208bb.forEach(function (_0x135de1) {
          var _0x1ecc59 = _0x5233a5.put(_0x4c1d54.analyzePath(_0x135de1).object.contents, _0x135de1);
          _0x1ecc59.onsuccess = function _0x62a8f5() {
            _0x2634b4++;
            if (_0x2634b4 + _0x341cbc == _0x429ba5) {
              _0x423dbe();
            }
          };
          _0x1ecc59.onerror = function _0x18478f() {
            _0x341cbc++;
            if (_0x2634b4 + _0x341cbc == _0x429ba5) {
              _0x423dbe();
            }
          };
        });
        _0x487cc0.onerror = _0x417365;
      };
      _0x42c34e.onerror = _0x417365;
    },
    loadFilesFromDB: function (_0xa7b3a3, _0xe3ea7b, _0x4322d8) {
      _0xe3ea7b = _0xe3ea7b || function () {};
      _0x4322d8 = _0x4322d8 || function () {};
      var _0xd6e59c = _0x4c1d54.indexedDB();
      try {
        var _0x39b3c7 = _0xd6e59c.open(_0x4c1d54.DB_NAME(), _0x4c1d54.DB_VERSION);
      } catch (_0x2ec273) {
        return _0x4322d8(_0x2ec273);
      }
      _0x39b3c7.onupgradeneeded = _0x4322d8;
      _0x39b3c7.onsuccess = function _0x3e6a23() {
        var _0xbe8f39 = _0x39b3c7.result;
        try {
          var _0x141147 = _0xbe8f39.transaction([_0x4c1d54.DB_STORE_NAME], "readonly");
        } catch (_0x58d0f0) {
          _0x4322d8(_0x58d0f0);
          return;
        }
        var _0x142902 = _0x141147.objectStore(_0x4c1d54.DB_STORE_NAME);
        var _0x35840e = 0;
        var _0x543f2b = 0;
        var _0x2f4a5d = _0xa7b3a3.length;
        function _0xd7e460() {
          if (_0x543f2b == 0) {
            _0xe3ea7b();
          } else {
            _0x4322d8();
          }
        }
        _0xa7b3a3.forEach(function (_0x4dbaa8) {
          var _0x11e716 = _0x142902.get(_0x4dbaa8);
          _0x11e716.onsuccess = function _0x151edf() {
            if (_0x4c1d54.analyzePath(_0x4dbaa8).exists) {
              _0x4c1d54.unlink(_0x4dbaa8);
            }
            _0x4c1d54.createDataFile(_0x477856.dirname(_0x4dbaa8), _0x477856.basename(_0x4dbaa8), _0x11e716.result, true, true, true);
            _0x35840e++;
            if (_0x35840e + _0x543f2b == _0x2f4a5d) {
              _0xd7e460();
            }
          };
          _0x11e716.onerror = function _0x5c3838() {
            _0x543f2b++;
            if (_0x35840e + _0x543f2b == _0x2f4a5d) {
              _0xd7e460();
            }
          };
        });
        _0x141147.onerror = _0x4322d8;
      };
      _0x39b3c7.onerror = _0x4322d8;
    }
  };
  var _0x1e57f1 = {
    mappings: {},
    DEFAULT_POLLMASK: 5,
    umask: 511,
    calculateAt: function (_0x3e76ac, _0x1693ca, _0x3fb2e2) {
      if (_0x1693ca[0] === "/") {
        return _0x1693ca;
      }
      var _0x4fab18;
      if (_0x3e76ac === -100) {
        _0x4fab18 = _0x4c1d54.cwd();
      } else {
        var _0x339162 = _0x4c1d54.getStream(_0x3e76ac);
        if (!_0x339162) {
          throw new _0x4c1d54.ErrnoError(8);
        }
        _0x4fab18 = _0x339162.path;
      }
      if (_0x1693ca.length == 0) {
        if (!_0x3fb2e2) {
          throw new _0x4c1d54.ErrnoError(44);
        }
        return _0x4fab18;
      }
      return _0x477856.join2(_0x4fab18, _0x1693ca);
    },
    doStat: function (_0x26e679, _0x211bd8, _0x48ffd9) {
      try {
        var _0x404456 = _0x26e679(_0x211bd8);
      } catch (_0x5379bf) {
        if (_0x5379bf && _0x5379bf.node && _0x477856.normalize(_0x211bd8) !== _0x477856.normalize(_0x4c1d54.getPath(_0x5379bf.node))) {
          return -54;
        }
        throw _0x5379bf;
      }
      _0x1b79ed[_0x48ffd9 >> 2] = _0x404456.dev;
      _0x1b79ed[_0x48ffd9 + 4 >> 2] = 0;
      _0x1b79ed[_0x48ffd9 + 8 >> 2] = _0x404456.ino;
      _0x1b79ed[_0x48ffd9 + 12 >> 2] = _0x404456.mode;
      _0x1b79ed[_0x48ffd9 + 16 >> 2] = _0x404456.nlink;
      _0x1b79ed[_0x48ffd9 + 20 >> 2] = _0x404456.uid;
      _0x1b79ed[_0x48ffd9 + 24 >> 2] = _0x404456.gid;
      _0x1b79ed[_0x48ffd9 + 28 >> 2] = _0x404456.rdev;
      _0x1b79ed[_0x48ffd9 + 32 >> 2] = 0;
      _0x10aa5a = [_0x404456.size >>> 0, (_0x3a400e = _0x404456.size, +Math.abs(_0x3a400e) >= 1 ? _0x3a400e > 0 ? (Math.min(+Math.floor(_0x3a400e / 4294967296), 4294967295) | 0) >>> 0 : ~~+Math.ceil((_0x3a400e - +(~~_0x3a400e >>> 0)) / 4294967296) >>> 0 : 0)];
      _0x1b79ed[_0x48ffd9 + 40 >> 2] = _0x10aa5a[0];
      _0x1b79ed[_0x48ffd9 + 44 >> 2] = _0x10aa5a[1];
      _0x1b79ed[_0x48ffd9 + 48 >> 2] = 4096;
      _0x1b79ed[_0x48ffd9 + 52 >> 2] = _0x404456.blocks;
      _0x1b79ed[_0x48ffd9 + 56 >> 2] = _0x404456.atime.getTime() / 1000 | 0;
      _0x1b79ed[_0x48ffd9 + 60 >> 2] = 0;
      _0x1b79ed[_0x48ffd9 + 64 >> 2] = _0x404456.mtime.getTime() / 1000 | 0;
      _0x1b79ed[_0x48ffd9 + 68 >> 2] = 0;
      _0x1b79ed[_0x48ffd9 + 72 >> 2] = _0x404456.ctime.getTime() / 1000 | 0;
      _0x1b79ed[_0x48ffd9 + 76 >> 2] = 0;
      _0x10aa5a = [_0x404456.ino >>> 0, (_0x3a400e = _0x404456.ino, +Math.abs(_0x3a400e) >= 1 ? _0x3a400e > 0 ? (Math.min(+Math.floor(_0x3a400e / 4294967296), 4294967295) | 0) >>> 0 : ~~+Math.ceil((_0x3a400e - +(~~_0x3a400e >>> 0)) / 4294967296) >>> 0 : 0)];
      _0x1b79ed[_0x48ffd9 + 80 >> 2] = _0x10aa5a[0];
      _0x1b79ed[_0x48ffd9 + 84 >> 2] = _0x10aa5a[1];
      return 0;
    },
    doMsync: function (_0x1894f9, _0xe8eca4, _0x59e0b8, _0x53fb98, _0x259977) {
      var _0x2ebb7d = _0x2c14c3.slice(_0x1894f9, _0x1894f9 + _0x59e0b8);
      _0x4c1d54.msync(_0xe8eca4, _0x2ebb7d, _0x259977, _0x59e0b8, _0x53fb98);
    },
    doMkdir: function (_0xf3827e, _0x22bb7b) {
      _0xf3827e = _0x477856.normalize(_0xf3827e);
      if (_0xf3827e[_0xf3827e.length - 1] === "/") {
        _0xf3827e = _0xf3827e.substr(0, _0xf3827e.length - 1);
      }
      _0x4c1d54.mkdir(_0xf3827e, _0x22bb7b, 0);
      return 0;
    },
    doMknod: function (_0x5a3aef, _0x1fa98d, _0x18c05e) {
      switch (_0x1fa98d & 61440) {
        case 32768:
        case 8192:
        case 24576:
        case 4096:
        case 49152:
          break;
        default:
          return -28;
      }
      _0x4c1d54.mknod(_0x5a3aef, _0x1fa98d, _0x18c05e);
      return 0;
    },
    doReadlink: function (_0x28c935, _0x42ea4f, _0x536061) {
      if (_0x536061 <= 0) {
        return -28;
      }
      var _0x2cb3d9 = _0x4c1d54.readlink(_0x28c935);
      var _0x230218 = Math.min(_0x536061, _0x55b306(_0x2cb3d9));
      var _0x32395 = _0x18b38f[_0x42ea4f + _0x230218];
      _0x38fbc9(_0x2cb3d9, _0x42ea4f, _0x536061 + 1);
      _0x18b38f[_0x42ea4f + _0x230218] = _0x32395;
      return _0x230218;
    },
    doAccess: function (_0x5e8919, _0x3519e3) {
      if (_0x3519e3 & ~7) {
        return -28;
      }
      var _0x7531e0;
      var _0x536a7b = _0x4c1d54.lookupPath(_0x5e8919, {
        follow: true
      });
      _0x7531e0 = _0x536a7b.node;
      if (!_0x7531e0) {
        return -44;
      }
      var _0x427c1c = "";
      if (_0x3519e3 & 4) {
        _0x427c1c += "r";
      }
      if (_0x3519e3 & 2) {
        _0x427c1c += "w";
      }
      if (_0x3519e3 & 1) {
        _0x427c1c += "x";
      }
      if (_0x427c1c && _0x4c1d54.nodePermissions(_0x7531e0, _0x427c1c)) {
        return -2;
      }
      return 0;
    },
    doDup: function (_0x314d20, _0x73d2fb, _0x45aff9) {
      var _0x3f7749 = _0x4c1d54.getStream(_0x45aff9);
      if (_0x3f7749) {
        _0x4c1d54.close(_0x3f7749);
      }
      return _0x4c1d54.open(_0x314d20, _0x73d2fb, 0, _0x45aff9, _0x45aff9).fd;
    },
    doReadv: function (_0x1c7f7c, _0x4669a9, _0x297165, _0x3592bb) {
      var _0x13b800 = 0;
      for (var _0x3d3325 = 0; _0x3d3325 < _0x297165; _0x3d3325++) {
        var _0x5b83df = _0x1b79ed[_0x4669a9 + _0x3d3325 * 8 >> 2];
        var _0x3b5c78 = _0x1b79ed[_0x4669a9 + (_0x3d3325 * 8 + 4) >> 2];
        var _0x558a5f = _0x4c1d54.read(_0x1c7f7c, _0x18b38f, _0x5b83df, _0x3b5c78, _0x3592bb);
        if (_0x558a5f < 0) {
          return -1;
        }
        _0x13b800 += _0x558a5f;
        if (_0x558a5f < _0x3b5c78) {
          break;
        }
      }
      return _0x13b800;
    },
    doWritev: function (_0x367a18, _0x4d2579, _0x179aee, _0x50692d) {
      var _0x31beb6 = 0;
      for (var _0x180ea9 = 0; _0x180ea9 < _0x179aee; _0x180ea9++) {
        var _0x3587b1 = _0x1b79ed[_0x4d2579 + _0x180ea9 * 8 >> 2];
        var _0x105f6f = _0x1b79ed[_0x4d2579 + (_0x180ea9 * 8 + 4) >> 2];
        var _0x19a67d = _0x4c1d54.write(_0x367a18, _0x18b38f, _0x3587b1, _0x105f6f, _0x50692d);
        if (_0x19a67d < 0) {
          return -1;
        }
        _0x31beb6 += _0x19a67d;
      }
      return _0x31beb6;
    },
    varargs: undefined,
    get: function () {
      _0x1e57f1.varargs += 4;
      var _0x33e90b = _0x1b79ed[_0x1e57f1.varargs - 4 >> 2];
      return _0x33e90b;
    },
    getStr: function (_0x43b3ee) {
      var _0x573aa2 = _0x5ea6bb(_0x43b3ee);
      return _0x573aa2;
    },
    getStreamFromFD: function (_0x371196) {
      var _0x234d46 = _0x4c1d54.getStream(_0x371196);
      if (!_0x234d46) {
        throw new _0x4c1d54.ErrnoError(8);
      }
      return _0x234d46;
    },
    get64: function (_0x417ae5, _0xc44067) {
      return _0x417ae5;
    }
  };
  function _0x2acc4a(_0x28822c, _0x468745, _0x53a0db, _0x326b1b, _0x43f77d) {
    try {
      var _0x38ec73 = 0;
      var _0x564ef4 = _0x468745 ? _0x1b79ed[_0x468745 >> 2] : 0;
      var _0x4bb70b = _0x468745 ? _0x1b79ed[_0x468745 + 4 >> 2] : 0;
      var _0x2d750e = _0x53a0db ? _0x1b79ed[_0x53a0db >> 2] : 0;
      var _0x532cbb = _0x53a0db ? _0x1b79ed[_0x53a0db + 4 >> 2] : 0;
      var _0x4bbe2d = _0x326b1b ? _0x1b79ed[_0x326b1b >> 2] : 0;
      var _0x4a94dc = _0x326b1b ? _0x1b79ed[_0x326b1b + 4 >> 2] : 0;
      var _0xfc5a47 = 0;
      var _0x550a05 = 0;
      var _0x5ab6f4 = 0;
      var _0x1b056d = 0;
      var _0x41a7ce = 0;
      var _0x4db395 = 0;
      var _0x31f461 = (_0x468745 ? _0x1b79ed[_0x468745 >> 2] : 0) | (_0x53a0db ? _0x1b79ed[_0x53a0db >> 2] : 0) | (_0x326b1b ? _0x1b79ed[_0x326b1b >> 2] : 0);
      var _0x242083 = (_0x468745 ? _0x1b79ed[_0x468745 + 4 >> 2] : 0) | (_0x53a0db ? _0x1b79ed[_0x53a0db + 4 >> 2] : 0) | (_0x326b1b ? _0x1b79ed[_0x326b1b + 4 >> 2] : 0);
      var _0x5dea4c = function (_0x4a9e70, _0x4872ea, _0x4cd312, _0x11c624) {
        if (_0x4a9e70 < 32) {
          return _0x4872ea & _0x11c624;
        } else {
          return _0x4cd312 & _0x11c624;
        }
      };
      for (var _0x5cf595 = 0; _0x5cf595 < _0x28822c; _0x5cf595++) {
        var _0x1fbacd = 1 << _0x5cf595 % 32;
        if (!_0x5dea4c(_0x5cf595, _0x31f461, _0x242083, _0x1fbacd)) {
          continue;
        }
        var _0x4e5b4c = _0x4c1d54.getStream(_0x5cf595);
        if (!_0x4e5b4c) {
          throw new _0x4c1d54.ErrnoError(8);
        }
        var _0x1cac64 = _0x1e57f1.DEFAULT_POLLMASK;
        if (_0x4e5b4c.stream_ops.poll) {
          _0x1cac64 = _0x4e5b4c.stream_ops.poll(_0x4e5b4c);
        }
        if (_0x1cac64 & 1 && _0x5dea4c(_0x5cf595, _0x564ef4, _0x4bb70b, _0x1fbacd)) {
          if (_0x5cf595 < 32) {
            _0xfc5a47 = _0xfc5a47 | _0x1fbacd;
          } else {
            _0x550a05 = _0x550a05 | _0x1fbacd;
          }
          _0x38ec73++;
        }
        if (_0x1cac64 & 4 && _0x5dea4c(_0x5cf595, _0x2d750e, _0x532cbb, _0x1fbacd)) {
          if (_0x5cf595 < 32) {
            _0x5ab6f4 = _0x5ab6f4 | _0x1fbacd;
          } else {
            _0x1b056d = _0x1b056d | _0x1fbacd;
          }
          _0x38ec73++;
        }
        if (_0x1cac64 & 2 && _0x5dea4c(_0x5cf595, _0x4bbe2d, _0x4a94dc, _0x1fbacd)) {
          if (_0x5cf595 < 32) {
            _0x41a7ce = _0x41a7ce | _0x1fbacd;
          } else {
            _0x4db395 = _0x4db395 | _0x1fbacd;
          }
          _0x38ec73++;
        }
      }
      if (_0x468745) {
        _0x1b79ed[_0x468745 >> 2] = _0xfc5a47;
        _0x1b79ed[_0x468745 + 4 >> 2] = _0x550a05;
      }
      if (_0x53a0db) {
        _0x1b79ed[_0x53a0db >> 2] = _0x5ab6f4;
        _0x1b79ed[_0x53a0db + 4 >> 2] = _0x1b056d;
      }
      if (_0x326b1b) {
        _0x1b79ed[_0x326b1b >> 2] = _0x41a7ce;
        _0x1b79ed[_0x326b1b + 4 >> 2] = _0x4db395;
      }
      return _0x38ec73;
    } catch (_0x1f6fd) {
      if (typeof _0x4c1d54 === "undefined" || !(_0x1f6fd instanceof _0x4c1d54.ErrnoError)) {
        _0x38247b(_0x1f6fd);
      }
      return -_0x1f6fd.errno;
    }
  }
  var _0x192ddc = {
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
  var _0x282f62 = {
    mount: function (_0x3f7e87) {
      _0x51dce1.websocket = _0x51dce1.websocket && typeof _0x51dce1.websocket === "object" ? _0x51dce1.websocket : {};
      _0x51dce1.websocket._callbacks = {};
      _0x51dce1.websocket.on = function (_0x1565ad, _0xbe5d34) {
        if (typeof _0xbe5d34 === "function") {
          this._callbacks[_0x1565ad] = _0xbe5d34;
        }
        return this;
      };
      _0x51dce1.websocket.emit = function (_0xcba61, _0x323d0c) {
        if (typeof this._callbacks[_0xcba61] === "function") {
          this._callbacks[_0xcba61].call(this, _0x323d0c);
        }
      };
      return _0x4c1d54.createNode(null, "/", 16895, 0);
    },
    createSocket: function (_0x16d2aa, _0x2d73e9, _0x120d80) {
      _0x2d73e9 &= ~526336;
      var _0x80cab = _0x2d73e9 == 1;
      if (_0x120d80) {
        _0x441670(_0x80cab == (_0x120d80 == 6));
      }
      var _0x3d6c84 = {
        family: _0x16d2aa,
        type: _0x2d73e9,
        protocol: _0x120d80,
        server: null,
        error: null,
        peers: {},
        pending: [],
        recv_queue: [],
        sock_ops: _0x282f62.websocket_sock_ops
      };
      var _0x3fa634 = _0x282f62.nextname();
      var _0x4236d4 = _0x4c1d54.createNode(_0x282f62.root, _0x3fa634, 49152, 0);
      _0x4236d4.sock = _0x3d6c84;
      var _0x2b634c = _0x4c1d54.createStream({
        path: _0x3fa634,
        node: _0x4236d4,
        flags: 2,
        seekable: false,
        stream_ops: _0x282f62.stream_ops
      });
      _0x3d6c84.stream = _0x2b634c;
      return _0x3d6c84;
    },
    getSocket: function (_0x2df18f) {
      var _0x271ef7 = _0x4c1d54.getStream(_0x2df18f);
      if (!_0x271ef7 || !_0x4c1d54.isSocket(_0x271ef7.node.mode)) {
        return null;
      }
      return _0x271ef7.node.sock;
    },
    stream_ops: {
      poll: function (_0xdbc697) {
        var _0x35a459 = _0xdbc697.node.sock;
        return _0x35a459.sock_ops.poll(_0x35a459);
      },
      ioctl: function (_0x27a079, _0x3dd27e, _0x293d3f) {
        var _0x52e43d = _0x27a079.node.sock;
        return _0x52e43d.sock_ops.ioctl(_0x52e43d, _0x3dd27e, _0x293d3f);
      },
      read: function (_0x4cd750, _0x658343, _0x2c7364, _0x19f5c4, _0x58d957) {
        var _0x8d28af = _0x4cd750.node.sock;
        var _0x240df1 = _0x8d28af.sock_ops.recvmsg(_0x8d28af, _0x19f5c4);
        if (!_0x240df1) {
          return 0;
        }
        _0x658343.set(_0x240df1.buffer, _0x2c7364);
        return _0x240df1.buffer.length;
      },
      write: function (_0x4b44ac, _0x81ac59, _0x1825b7, _0x4799ed, _0x200c60) {
        var _0x57da85 = _0x4b44ac.node.sock;
        return _0x57da85.sock_ops.sendmsg(_0x57da85, _0x81ac59, _0x1825b7, _0x4799ed);
      },
      close: function (_0x3865f8) {
        var _0x1a66e1 = _0x3865f8.node.sock;
        _0x1a66e1.sock_ops.close(_0x1a66e1);
      }
    },
    nextname: function () {
      if (!_0x282f62.nextname.current) {
        _0x282f62.nextname.current = 0;
      }
      return "socket[" + _0x282f62.nextname.current++ + "]";
    },
    websocket_sock_ops: {
      createPeer: function (_0x428a3d, _0x4851c5, _0x1d09b4) {
        var _0x2d5101;
        if (typeof _0x4851c5 === "object") {
          _0x2d5101 = _0x4851c5;
          _0x4851c5 = null;
          _0x1d09b4 = null;
        }
        if (_0x2d5101) {
          if (_0x2d5101._socket) {
            _0x4851c5 = _0x2d5101._socket.remoteAddress;
            _0x1d09b4 = _0x2d5101._socket.remotePort;
          } else {
            var _0xdcce92 = /ws[s]?:\/\/([^:]+):(\d+)/.exec(_0x2d5101.url);
            if (!_0xdcce92) {
              throw new Error("WebSocket URL must be in the format ws(s)://address:port");
            }
            _0x4851c5 = _0xdcce92[1];
            _0x1d09b4 = parseInt(_0xdcce92[2], 10);
          }
        } else {
          try {
            var _0x54a60a = _0x51dce1.websocket && typeof _0x51dce1.websocket === "object";
            var _0xd5f70 = "ws:#".replace("#", "//");
            if (_0x54a60a) {
              if (typeof _0x51dce1.websocket.url === "string") {
                _0xd5f70 = _0x51dce1.websocket.url;
              }
            }
            if (_0xd5f70 === "ws://" || _0xd5f70 === "wss://") {
              var _0x260aad = _0x4851c5.split("/");
              _0xd5f70 = _0xd5f70 + _0x260aad[0] + ":" + _0x1d09b4 + "/" + _0x260aad.slice(1).join("/");
            }
            var _0x2f288c = "binary";
            if (_0x54a60a) {
              if (typeof _0x51dce1.websocket.subprotocol === "string") {
                _0x2f288c = _0x51dce1.websocket.subprotocol;
              }
            }
            var _0x129448 = undefined;
            if (_0x2f288c !== "null") {
              _0x2f288c = _0x2f288c.replace(/^ +| +$/g, "").split(/ *, */);
              _0x129448 = _0x36ba64 ? {
                protocol: _0x2f288c.toString()
              } : _0x2f288c;
            }
            if (_0x54a60a && _0x51dce1.websocket.subprotocol === null) {
              _0x2f288c = "null";
              _0x129448 = undefined;
            }
            var _0x2adf96;
            if (_0x36ba64) {
              _0x2adf96 = require("ws");
            } else {
              _0x2adf96 = WebSocket;
            }
            _0x2d5101 = new _0x2adf96(_0xd5f70, _0x129448);
            _0x2d5101.binaryType = "arraybuffer";
          } catch (_0x235597) {
            throw new _0x4c1d54.ErrnoError(_0x192ddc.EHOSTUNREACH);
          }
        }
        var _0x5d2315 = {
          addr: _0x4851c5,
          port: _0x1d09b4,
          socket: _0x2d5101,
          dgram_send_queue: []
        };
        _0x282f62.websocket_sock_ops.addPeer(_0x428a3d, _0x5d2315);
        _0x282f62.websocket_sock_ops.handlePeerEvents(_0x428a3d, _0x5d2315);
        if (_0x428a3d.type === 2 && typeof _0x428a3d.sport !== "undefined") {
          _0x5d2315.dgram_send_queue.push(new Uint8Array([255, 255, 255, 255, "p".charCodeAt(0), "o".charCodeAt(0), "r".charCodeAt(0), "t".charCodeAt(0), (_0x428a3d.sport & 65280) >> 8, _0x428a3d.sport & 255]));
        }
        return _0x5d2315;
      },
      getPeer: function (_0x466f62, _0x266bda, _0x28c651) {
        return _0x466f62.peers[_0x266bda + ":" + _0x28c651];
      },
      addPeer: function (_0x223986, _0x4367f4) {
        _0x223986.peers[_0x4367f4.addr + ":" + _0x4367f4.port] = _0x4367f4;
      },
      removePeer: function (_0x334ad0, _0x4cb2f8) {
        delete _0x334ad0.peers[_0x4cb2f8.addr + ":" + _0x4cb2f8.port];
      },
      handlePeerEvents: function (_0x214c7f, _0x3019a6) {
        var _0x1eea19 = true;
        var _0x10fbb7 = function () {
          _0x51dce1.websocket.emit("open", _0x214c7f.stream.fd);
          try {
            var _0x295b0e = _0x3019a6.dgram_send_queue.shift();
            while (_0x295b0e) {
              _0x3019a6.socket.send(_0x295b0e);
              _0x295b0e = _0x3019a6.dgram_send_queue.shift();
            }
          } catch (_0x46bbb4) {
            _0x3019a6.socket.close();
          }
        };
        function _0x135b9b(_0x2e799f) {
          if (typeof _0x2e799f === "string") {
            var _0x232062 = new TextEncoder();
            _0x2e799f = _0x232062.encode(_0x2e799f);
          } else {
            _0x441670(_0x2e799f.byteLength !== undefined);
            if (_0x2e799f.byteLength == 0) {
              return;
            } else {
              _0x2e799f = new Uint8Array(_0x2e799f);
            }
          }
          var _0x4e0df2 = _0x1eea19;
          _0x1eea19 = false;
          if (_0x4e0df2 && _0x2e799f.length === 10 && _0x2e799f[0] === 255 && _0x2e799f[1] === 255 && _0x2e799f[2] === 255 && _0x2e799f[3] === 255 && _0x2e799f[4] === "p".charCodeAt(0) && _0x2e799f[5] === "o".charCodeAt(0) && _0x2e799f[6] === "r".charCodeAt(0) && _0x2e799f[7] === "t".charCodeAt(0)) {
            var _0x3f02ba = _0x2e799f[8] << 8 | _0x2e799f[9];
            _0x282f62.websocket_sock_ops.removePeer(_0x214c7f, _0x3019a6);
            _0x3019a6.port = _0x3f02ba;
            _0x282f62.websocket_sock_ops.addPeer(_0x214c7f, _0x3019a6);
            return;
          }
          _0x214c7f.recv_queue.push({
            addr: _0x3019a6.addr,
            port: _0x3019a6.port,
            data: _0x2e799f
          });
          _0x51dce1.websocket.emit("message", _0x214c7f.stream.fd);
        }
        if (_0x36ba64) {
          _0x3019a6.socket.on("open", _0x10fbb7);
          _0x3019a6.socket.on("message", function (_0x5a02fc, _0xe00d66) {
            if (!_0xe00d66.binary) {
              return;
            }
            _0x135b9b(new Uint8Array(_0x5a02fc).buffer);
          });
          _0x3019a6.socket.on("close", function () {
            _0x51dce1.websocket.emit("close", _0x214c7f.stream.fd);
          });
          _0x3019a6.socket.on("error", function (_0xc47ed2) {
            _0x214c7f.error = _0x192ddc.ECONNREFUSED;
            _0x51dce1.websocket.emit("error", [_0x214c7f.stream.fd, _0x214c7f.error, "ECONNREFUSED: Connection refused"]);
          });
        } else {
          _0x3019a6.socket.onopen = _0x10fbb7;
          _0x3019a6.socket.onclose = function () {
            _0x51dce1.websocket.emit("close", _0x214c7f.stream.fd);
          };
          _0x3019a6.socket.onmessage = function _0x45565e(_0x382a5e) {
            _0x135b9b(_0x382a5e.data);
          };
          _0x3019a6.socket.onerror = function (_0xf7482b) {
            _0x214c7f.error = _0x192ddc.ECONNREFUSED;
            _0x51dce1.websocket.emit("error", [_0x214c7f.stream.fd, _0x214c7f.error, "ECONNREFUSED: Connection refused"]);
          };
        }
      },
      poll: function (_0xe0090) {
        if (_0xe0090.type === 1 && _0xe0090.server) {
          if (_0xe0090.pending.length) {
            return 65;
          } else {
            return 0;
          }
        }
        var _0x4089be = 0;
        var _0x47bfe4 = _0xe0090.type === 1 ? _0x282f62.websocket_sock_ops.getPeer(_0xe0090, _0xe0090.daddr, _0xe0090.dport) : null;
        if (_0xe0090.recv_queue.length || !_0x47bfe4 || _0x47bfe4 && _0x47bfe4.socket.readyState === _0x47bfe4.socket.CLOSING || _0x47bfe4 && _0x47bfe4.socket.readyState === _0x47bfe4.socket.CLOSED) {
          _0x4089be |= 65;
        }
        if (!_0x47bfe4 || _0x47bfe4 && _0x47bfe4.socket.readyState === _0x47bfe4.socket.OPEN) {
          _0x4089be |= 4;
        }
        if (_0x47bfe4 && _0x47bfe4.socket.readyState === _0x47bfe4.socket.CLOSING || _0x47bfe4 && _0x47bfe4.socket.readyState === _0x47bfe4.socket.CLOSED) {
          _0x4089be |= 16;
        }
        return _0x4089be;
      },
      ioctl: function (_0xdf91f0, _0x225979, _0x5e6fe0) {
        switch (_0x225979) {
          case 21531:
            var _0x45b626 = 0;
            if (_0xdf91f0.recv_queue.length) {
              _0x45b626 = _0xdf91f0.recv_queue[0].data.length;
            }
            _0x1b79ed[_0x5e6fe0 >> 2] = _0x45b626;
            return 0;
          default:
            return _0x192ddc.EINVAL;
        }
      },
      close: function (_0x23dc33) {
        if (_0x23dc33.server) {
          try {
            _0x23dc33.server.close();
          } catch (_0x1845ce) {}
          _0x23dc33.server = null;
        }
        var _0x3c6b10 = Object.keys(_0x23dc33.peers);
        for (var _0x54e7b3 = 0; _0x54e7b3 < _0x3c6b10.length; _0x54e7b3++) {
          var _0x222a54 = _0x23dc33.peers[_0x3c6b10[_0x54e7b3]];
          try {
            _0x222a54.socket.close();
          } catch (_0x50a676) {}
          _0x282f62.websocket_sock_ops.removePeer(_0x23dc33, _0x222a54);
        }
        return 0;
      },
      bind: function (_0x109171, _0x3cdbf2, _0xa4eb36) {
        if (typeof _0x109171.saddr !== "undefined" || typeof _0x109171.sport !== "undefined") {
          throw new _0x4c1d54.ErrnoError(_0x192ddc.EINVAL);
        }
        _0x109171.saddr = _0x3cdbf2;
        _0x109171.sport = _0xa4eb36;
        if (_0x109171.type === 2) {
          if (_0x109171.server) {
            _0x109171.server.close();
            _0x109171.server = null;
          }
          try {
            _0x109171.sock_ops.listen(_0x109171, 0);
          } catch (_0x21ee90) {
            if (!(_0x21ee90 instanceof _0x4c1d54.ErrnoError)) {
              throw _0x21ee90;
            }
            if (_0x21ee90.errno !== _0x192ddc.EOPNOTSUPP) {
              throw _0x21ee90;
            }
          }
        }
      },
      connect: function (_0x1a377d, _0xce59fb, _0x483804) {
        if (_0x1a377d.server) {
          throw new _0x4c1d54.ErrnoError(_0x192ddc.EOPNOTSUPP);
        }
        if (typeof _0x1a377d.daddr !== "undefined" && typeof _0x1a377d.dport !== "undefined") {
          var _0x4fa944 = _0x282f62.websocket_sock_ops.getPeer(_0x1a377d, _0x1a377d.daddr, _0x1a377d.dport);
          if (_0x4fa944) {
            if (_0x4fa944.socket.readyState === _0x4fa944.socket.CONNECTING) {
              throw new _0x4c1d54.ErrnoError(_0x192ddc.EALREADY);
            } else {
              throw new _0x4c1d54.ErrnoError(_0x192ddc.EISCONN);
            }
          }
        }
        var _0x42e233 = _0x282f62.websocket_sock_ops.createPeer(_0x1a377d, _0xce59fb, _0x483804);
        _0x1a377d.daddr = _0x42e233.addr;
        _0x1a377d.dport = _0x42e233.port;
        throw new _0x4c1d54.ErrnoError(_0x192ddc.EINPROGRESS);
      },
      listen: function (_0x4fa566, _0x551dcf) {
        if (!_0x36ba64) {
          throw new _0x4c1d54.ErrnoError(_0x192ddc.EOPNOTSUPP);
        }
        if (_0x4fa566.server) {
          throw new _0x4c1d54.ErrnoError(_0x192ddc.EINVAL);
        }
        var _0x864792 = require("ws").Server;
        var _0xe50849 = _0x4fa566.saddr;
        _0x4fa566.server = new _0x864792({
          host: _0xe50849,
          port: _0x4fa566.sport
        });
        _0x51dce1.websocket.emit("listen", _0x4fa566.stream.fd);
        _0x4fa566.server.on("connection", function (_0x53dd4e) {
          if (_0x4fa566.type === 1) {
            var _0x2e6c14 = _0x282f62.createSocket(_0x4fa566.family, _0x4fa566.type, _0x4fa566.protocol);
            var _0x104de0 = _0x282f62.websocket_sock_ops.createPeer(_0x2e6c14, _0x53dd4e);
            _0x2e6c14.daddr = _0x104de0.addr;
            _0x2e6c14.dport = _0x104de0.port;
            _0x4fa566.pending.push(_0x2e6c14);
            _0x51dce1.websocket.emit("connection", _0x2e6c14.stream.fd);
          } else {
            _0x282f62.websocket_sock_ops.createPeer(_0x4fa566, _0x53dd4e);
            _0x51dce1.websocket.emit("connection", _0x4fa566.stream.fd);
          }
        });
        _0x4fa566.server.on("closed", function () {
          _0x51dce1.websocket.emit("close", _0x4fa566.stream.fd);
          _0x4fa566.server = null;
        });
        _0x4fa566.server.on("error", function (_0x18e6f8) {
          _0x4fa566.error = _0x192ddc.EHOSTUNREACH;
          _0x51dce1.websocket.emit("error", [_0x4fa566.stream.fd, _0x4fa566.error, "EHOSTUNREACH: Host is unreachable"]);
        });
      },
      accept: function (_0xed94c5) {
        if (!_0xed94c5.server) {
          throw new _0x4c1d54.ErrnoError(_0x192ddc.EINVAL);
        }
        var _0x3f475f = _0xed94c5.pending.shift();
        _0x3f475f.stream.flags = _0xed94c5.stream.flags;
        return _0x3f475f;
      },
      getname: function (_0x5ad5f6, _0x1e41a6) {
        var _0x3e34a6;
        var _0xaadb5f;
        if (_0x1e41a6) {
          if (_0x5ad5f6.daddr === undefined || _0x5ad5f6.dport === undefined) {
            throw new _0x4c1d54.ErrnoError(_0x192ddc.ENOTCONN);
          }
          _0x3e34a6 = _0x5ad5f6.daddr;
          _0xaadb5f = _0x5ad5f6.dport;
        } else {
          _0x3e34a6 = _0x5ad5f6.saddr || 0;
          _0xaadb5f = _0x5ad5f6.sport || 0;
        }
        return {
          addr: _0x3e34a6,
          port: _0xaadb5f
        };
      },
      sendmsg: function (_0x1421b7, _0x4dec08, _0x261e6e, _0xd0c6ca, _0xa3848, _0x55b18a) {
        if (_0x1421b7.type === 2) {
          if (_0xa3848 === undefined || _0x55b18a === undefined) {
            _0xa3848 = _0x1421b7.daddr;
            _0x55b18a = _0x1421b7.dport;
          }
          if (_0xa3848 === undefined || _0x55b18a === undefined) {
            throw new _0x4c1d54.ErrnoError(_0x192ddc.EDESTADDRREQ);
          }
        } else {
          _0xa3848 = _0x1421b7.daddr;
          _0x55b18a = _0x1421b7.dport;
        }
        var _0x4f0d2d = _0x282f62.websocket_sock_ops.getPeer(_0x1421b7, _0xa3848, _0x55b18a);
        if (_0x1421b7.type === 1) {
          if (!_0x4f0d2d || _0x4f0d2d.socket.readyState === _0x4f0d2d.socket.CLOSING || _0x4f0d2d.socket.readyState === _0x4f0d2d.socket.CLOSED) {
            throw new _0x4c1d54.ErrnoError(_0x192ddc.ENOTCONN);
          } else if (_0x4f0d2d.socket.readyState === _0x4f0d2d.socket.CONNECTING) {
            throw new _0x4c1d54.ErrnoError(_0x192ddc.EAGAIN);
          }
        }
        if (ArrayBuffer.isView(_0x4dec08)) {
          _0x261e6e += _0x4dec08.byteOffset;
          _0x4dec08 = _0x4dec08.buffer;
        }
        var _0x11d268;
        _0x11d268 = _0x4dec08.slice(_0x261e6e, _0x261e6e + _0xd0c6ca);
        if (_0x1421b7.type === 2) {
          if (!_0x4f0d2d || _0x4f0d2d.socket.readyState !== _0x4f0d2d.socket.OPEN) {
            if (!_0x4f0d2d || _0x4f0d2d.socket.readyState === _0x4f0d2d.socket.CLOSING || _0x4f0d2d.socket.readyState === _0x4f0d2d.socket.CLOSED) {
              _0x4f0d2d = _0x282f62.websocket_sock_ops.createPeer(_0x1421b7, _0xa3848, _0x55b18a);
            }
            _0x4f0d2d.dgram_send_queue.push(_0x11d268);
            return _0xd0c6ca;
          }
        }
        try {
          _0x4f0d2d.socket.send(_0x11d268);
          return _0xd0c6ca;
        } catch (_0x2d1975) {
          throw new _0x4c1d54.ErrnoError(_0x192ddc.EINVAL);
        }
      },
      recvmsg: function (_0x1ce172, _0x4d7434) {
        if (_0x1ce172.type === 1 && _0x1ce172.server) {
          throw new _0x4c1d54.ErrnoError(_0x192ddc.ENOTCONN);
        }
        var _0x8019f0 = _0x1ce172.recv_queue.shift();
        if (!_0x8019f0) {
          if (_0x1ce172.type === 1) {
            var _0x5efa80 = _0x282f62.websocket_sock_ops.getPeer(_0x1ce172, _0x1ce172.daddr, _0x1ce172.dport);
            if (!_0x5efa80) {
              throw new _0x4c1d54.ErrnoError(_0x192ddc.ENOTCONN);
            } else if (_0x5efa80.socket.readyState === _0x5efa80.socket.CLOSING || _0x5efa80.socket.readyState === _0x5efa80.socket.CLOSED) {
              return null;
            } else {
              throw new _0x4c1d54.ErrnoError(_0x192ddc.EAGAIN);
            }
          } else {
            throw new _0x4c1d54.ErrnoError(_0x192ddc.EAGAIN);
          }
        }
        var _0x1f5fb = _0x8019f0.data.byteLength || _0x8019f0.data.length;
        var _0x2fb585 = _0x8019f0.data.byteOffset || 0;
        var _0x388301 = _0x8019f0.data.buffer || _0x8019f0.data;
        var _0x276f74 = Math.min(_0x4d7434, _0x1f5fb);
        var _0x49e6e = {
          buffer: new Uint8Array(_0x388301, _0x2fb585, _0x276f74),
          addr: _0x8019f0.addr,
          port: _0x8019f0.port
        };
        if (_0x1ce172.type === 1 && _0x276f74 < _0x1f5fb) {
          var _0x55d818 = _0x1f5fb - _0x276f74;
          _0x8019f0.data = new Uint8Array(_0x388301, _0x2fb585 + _0x276f74, _0x55d818);
          _0x1ce172.recv_queue.unshift(_0x8019f0);
        }
        return _0x49e6e;
      }
    }
  };
  function _0x4b0e29(_0x18d5bf) {
    var _0x5c3dbd = _0x282f62.getSocket(_0x18d5bf);
    if (!_0x5c3dbd) {
      throw new _0x4c1d54.ErrnoError(8);
    }
    return _0x5c3dbd;
  }
  function _0xf13c3a(_0x3f0ac4) {
    _0x1b79ed[_0x2469d7() >> 2] = _0x3f0ac4;
    return _0x3f0ac4;
  }
  function _0x5d958e(_0x269128) {
    var _0x19ce6b = _0x269128.split(".");
    for (var _0x6b798b = 0; _0x6b798b < 4; _0x6b798b++) {
      var _0x479704 = Number(_0x19ce6b[_0x6b798b]);
      if (isNaN(_0x479704)) {
        return null;
      }
      _0x19ce6b[_0x6b798b] = _0x479704;
    }
    return (_0x19ce6b[0] | _0x19ce6b[1] << 8 | _0x19ce6b[2] << 16 | _0x19ce6b[3] << 24) >>> 0;
  }
  function _0x18f32d(_0x53b916) {
    return parseInt(_0x53b916);
  }
  function _0x3ad193(_0x5cf116) {
    var _0x23558f;
    var _0x147bbe;
    var _0x21e87d;
    var _0x1e8004;
    var _0xb7dc95 = /^((?=.*::)(?!.*::.+::)(::)?([\dA-F]{1,4}:(:|\b)|){5}|([\dA-F]{1,4}:){6})((([\dA-F]{1,4}((?!\3)::|:\b|$))|(?!\2\3)){2}|(((2[0-4]|1\d|[1-9])?\d|25[0-5])\.?\b){4})$/i;
    var _0x2cb618 = [];
    if (!_0xb7dc95.test(_0x5cf116)) {
      return null;
    }
    if (_0x5cf116 === "::") {
      return [0, 0, 0, 0, 0, 0, 0, 0];
    }
    if (_0x5cf116.startsWith("::")) {
      _0x5cf116 = _0x5cf116.replace("::", "Z:");
    } else {
      _0x5cf116 = _0x5cf116.replace("::", ":Z:");
    }
    if (_0x5cf116.indexOf(".") > 0) {
      _0x5cf116 = _0x5cf116.replace(new RegExp("[.]", "g"), ":");
      _0x23558f = _0x5cf116.split(":");
      _0x23558f[_0x23558f.length - 4] = _0x18f32d(_0x23558f[_0x23558f.length - 4]) + _0x18f32d(_0x23558f[_0x23558f.length - 3]) * 256;
      _0x23558f[_0x23558f.length - 3] = _0x18f32d(_0x23558f[_0x23558f.length - 2]) + _0x18f32d(_0x23558f[_0x23558f.length - 1]) * 256;
      _0x23558f = _0x23558f.slice(0, _0x23558f.length - 2);
    } else {
      _0x23558f = _0x5cf116.split(":");
    }
    _0x21e87d = 0;
    _0x1e8004 = 0;
    for (_0x147bbe = 0; _0x147bbe < _0x23558f.length; _0x147bbe++) {
      if (typeof _0x23558f[_0x147bbe] === "string") {
        if (_0x23558f[_0x147bbe] === "Z") {
          for (_0x1e8004 = 0; _0x1e8004 < 8 - _0x23558f.length + 1; _0x1e8004++) {
            _0x2cb618[_0x147bbe + _0x1e8004] = 0;
          }
          _0x21e87d = _0x1e8004 - 1;
        } else {
          _0x2cb618[_0x147bbe + _0x21e87d] = _0x5bf081(parseInt(_0x23558f[_0x147bbe], 16));
        }
      } else {
        _0x2cb618[_0x147bbe + _0x21e87d] = _0x23558f[_0x147bbe];
      }
    }
    return [_0x2cb618[1] << 16 | _0x2cb618[0], _0x2cb618[3] << 16 | _0x2cb618[2], _0x2cb618[5] << 16 | _0x2cb618[4], _0x2cb618[7] << 16 | _0x2cb618[6]];
  }
  function _0x89d5aa(_0x5b57a0, _0x4c97d2, _0x186f64, _0x3c16ac, _0x2ac686) {
    switch (_0x4c97d2) {
      case 2:
        _0x186f64 = _0x5d958e(_0x186f64);
        if (_0x2ac686) {
          _0x1b79ed[_0x2ac686 >> 2] = 16;
        }
        _0x34c2d1[_0x5b57a0 >> 1] = _0x4c97d2;
        _0x1b79ed[_0x5b57a0 + 4 >> 2] = _0x186f64;
        _0x34c2d1[_0x5b57a0 + 2 >> 1] = _0x5bf081(_0x3c16ac);
        _0x10aa5a = [0, (_0x3a400e = 0, +Math.abs(_0x3a400e) >= 1 ? _0x3a400e > 0 ? (Math.min(+Math.floor(_0x3a400e / 4294967296), 4294967295) | 0) >>> 0 : ~~+Math.ceil((_0x3a400e - +(~~_0x3a400e >>> 0)) / 4294967296) >>> 0 : 0)];
        _0x1b79ed[_0x5b57a0 + 8 >> 2] = _0x10aa5a[0];
        _0x1b79ed[_0x5b57a0 + 12 >> 2] = _0x10aa5a[1];
        break;
      case 10:
        _0x186f64 = _0x3ad193(_0x186f64);
        if (_0x2ac686) {
          _0x1b79ed[_0x2ac686 >> 2] = 28;
        }
        _0x1b79ed[_0x5b57a0 >> 2] = _0x4c97d2;
        _0x1b79ed[_0x5b57a0 + 8 >> 2] = _0x186f64[0];
        _0x1b79ed[_0x5b57a0 + 12 >> 2] = _0x186f64[1];
        _0x1b79ed[_0x5b57a0 + 16 >> 2] = _0x186f64[2];
        _0x1b79ed[_0x5b57a0 + 20 >> 2] = _0x186f64[3];
        _0x34c2d1[_0x5b57a0 + 2 >> 1] = _0x5bf081(_0x3c16ac);
        _0x1b79ed[_0x5b57a0 + 4 >> 2] = 0;
        _0x1b79ed[_0x5b57a0 + 24 >> 2] = 0;
        break;
      default:
        return 5;
    }
    return 0;
  }
  var _0x584b1a = {
    address_map: {
      id: 1,
      addrs: {},
      names: {}
    },
    lookup_name: function (_0x2c1625) {
      var _0x1b06fa = _0x5d958e(_0x2c1625);
      if (_0x1b06fa !== null) {
        return _0x2c1625;
      }
      _0x1b06fa = _0x3ad193(_0x2c1625);
      if (_0x1b06fa !== null) {
        return _0x2c1625;
      }
      var _0x4adb4c;
      if (_0x584b1a.address_map.addrs[_0x2c1625]) {
        _0x4adb4c = _0x584b1a.address_map.addrs[_0x2c1625];
      } else {
        var _0x45e5fe = _0x584b1a.address_map.id++;
        _0x441670(_0x45e5fe < 65535, "exceeded max address mappings of 65535");
        _0x4adb4c = "172.29." + (_0x45e5fe & 255) + "." + (_0x45e5fe & 65280);
        _0x584b1a.address_map.names[_0x4adb4c] = _0x2c1625;
        _0x584b1a.address_map.addrs[_0x2c1625] = _0x4adb4c;
      }
      return _0x4adb4c;
    },
    lookup_addr: function (_0x4e1e1a) {
      if (_0x584b1a.address_map.names[_0x4e1e1a]) {
        return _0x584b1a.address_map.names[_0x4e1e1a];
      }
      return null;
    }
  };
  function _0xbc34ac(_0x7f5d62, _0x526bf3, _0x342323, _0x169dd8) {
    try {
      var _0x237693 = _0x4b0e29(_0x7f5d62);
      var _0x1a904e = _0x237693.sock_ops.accept(_0x237693);
      if (_0x526bf3) {
        var _0x1bc679 = _0x89d5aa(_0x526bf3, _0x1a904e.family, _0x584b1a.lookup_name(_0x1a904e.daddr), _0x1a904e.dport, _0x342323);
      }
      return _0x1a904e.stream.fd;
    } catch (_0x54c68f) {
      if (typeof _0x4c1d54 === "undefined" || !(_0x54c68f instanceof _0x4c1d54.ErrnoError)) {
        _0x38247b(_0x54c68f);
      }
      return -_0x54c68f.errno;
    }
  }
  function _0x2bccc8(_0x41dec5, _0x50f1f5) {
    try {
      _0x41dec5 = _0x1e57f1.getStr(_0x41dec5);
      return _0x1e57f1.doAccess(_0x41dec5, _0x50f1f5);
    } catch (_0x2f9f9c) {
      if (typeof _0x4c1d54 === "undefined" || !(_0x2f9f9c instanceof _0x4c1d54.ErrnoError)) {
        _0x38247b(_0x2f9f9c);
      }
      return -_0x2f9f9c.errno;
    }
  }
  function _0x180954(_0x500c99) {
    return (_0x500c99 & 255) + "." + (_0x500c99 >> 8 & 255) + "." + (_0x500c99 >> 16 & 255) + "." + (_0x500c99 >> 24 & 255);
  }
  function _0x12fc14(_0x368ac8) {
    var _0x44f52d = "";
    var _0x16eb5e = 0;
    var _0x27e1f7 = 0;
    var _0x1b3906 = 0;
    var _0x12aa2c = 0;
    var _0x3f6894 = 0;
    var _0xe676ce = 0;
    var _0x5470e6 = [_0x368ac8[0] & 65535, _0x368ac8[0] >> 16, _0x368ac8[1] & 65535, _0x368ac8[1] >> 16, _0x368ac8[2] & 65535, _0x368ac8[2] >> 16, _0x368ac8[3] & 65535, _0x368ac8[3] >> 16];
    var _0x1dd094 = true;
    var _0x17c016 = "";
    for (_0xe676ce = 0; _0xe676ce < 5; _0xe676ce++) {
      if (_0x5470e6[_0xe676ce] !== 0) {
        _0x1dd094 = false;
        break;
      }
    }
    if (_0x1dd094) {
      _0x17c016 = _0x180954(_0x5470e6[6] | _0x5470e6[7] << 16);
      if (_0x5470e6[5] === -1) {
        _0x44f52d = "::ffff:";
        _0x44f52d += _0x17c016;
        return _0x44f52d;
      }
      if (_0x5470e6[5] === 0) {
        _0x44f52d = "::";
        if (_0x17c016 === "0.0.0.0") {
          _0x17c016 = "";
        }
        if (_0x17c016 === "0.0.0.1") {
          _0x17c016 = "1";
        }
        _0x44f52d += _0x17c016;
        return _0x44f52d;
      }
    }
    for (_0x16eb5e = 0; _0x16eb5e < 8; _0x16eb5e++) {
      if (_0x5470e6[_0x16eb5e] === 0) {
        if (_0x16eb5e - _0x1b3906 > 1) {
          _0x3f6894 = 0;
        }
        _0x1b3906 = _0x16eb5e;
        _0x3f6894++;
      }
      if (_0x3f6894 > _0x27e1f7) {
        _0x27e1f7 = _0x3f6894;
        _0x12aa2c = _0x16eb5e - _0x27e1f7 + 1;
      }
    }
    for (_0x16eb5e = 0; _0x16eb5e < 8; _0x16eb5e++) {
      if (_0x27e1f7 > 1) {
        if (_0x5470e6[_0x16eb5e] === 0 && _0x16eb5e >= _0x12aa2c && _0x16eb5e < _0x12aa2c + _0x27e1f7) {
          if (_0x16eb5e === _0x12aa2c) {
            _0x44f52d += ":";
            if (_0x12aa2c === 0) {
              _0x44f52d += ":";
            }
          }
          continue;
        }
      }
      _0x44f52d += Number(_0x5599e6(_0x5470e6[_0x16eb5e] & 65535)).toString(16);
      _0x44f52d += _0x16eb5e < 7 ? ":" : "";
    }
    return _0x44f52d;
  }
  function _0x2bd298(_0x363202, _0x5e9641) {
    var _0x88fa03 = _0x34c2d1[_0x363202 >> 1];
    var _0x5474a1 = _0x5599e6(_0x1e3d60[_0x363202 + 2 >> 1]);
    var _0x565f46;
    switch (_0x88fa03) {
      case 2:
        if (_0x5e9641 !== 16) {
          return {
            errno: 28
          };
        }
        _0x565f46 = _0x1b79ed[_0x363202 + 4 >> 2];
        _0x565f46 = _0x180954(_0x565f46);
        break;
      case 10:
        if (_0x5e9641 !== 28) {
          return {
            errno: 28
          };
        }
        _0x565f46 = [_0x1b79ed[_0x363202 + 8 >> 2], _0x1b79ed[_0x363202 + 12 >> 2], _0x1b79ed[_0x363202 + 16 >> 2], _0x1b79ed[_0x363202 + 20 >> 2]];
        _0x565f46 = _0x12fc14(_0x565f46);
        break;
      default:
        return {
          errno: 5
        };
    }
    return {
      family: _0x88fa03,
      addr: _0x565f46,
      port: _0x5474a1
    };
  }
  function _0x326cb7(_0x44dc93, _0x56a615, _0x46c0df) {
    if (_0x46c0df && _0x44dc93 === 0) {
      return null;
    }
    var _0x1c4e40 = _0x2bd298(_0x44dc93, _0x56a615);
    if (_0x1c4e40.errno) {
      throw new _0x4c1d54.ErrnoError(_0x1c4e40.errno);
    }
    _0x1c4e40.addr = _0x584b1a.lookup_addr(_0x1c4e40.addr) || _0x1c4e40.addr;
    return _0x1c4e40;
  }
  function _0x4dbaef(_0x57d3de, _0x465f6a, _0x30bcbb) {
    try {
      var _0x48a944 = _0x4b0e29(_0x57d3de);
      var _0x19ceec = _0x326cb7(_0x465f6a, _0x30bcbb);
      _0x48a944.sock_ops.bind(_0x48a944, _0x19ceec.addr, _0x19ceec.port);
      return 0;
    } catch (_0x599bbb) {
      if (typeof _0x4c1d54 === "undefined" || !(_0x599bbb instanceof _0x4c1d54.ErrnoError)) {
        _0x38247b(_0x599bbb);
      }
      return -_0x599bbb.errno;
    }
  }
  function _0x1364ef(_0x455523, _0x5f0ed3) {
    try {
      _0x455523 = _0x1e57f1.getStr(_0x455523);
      _0x4c1d54.chmod(_0x455523, _0x5f0ed3);
      return 0;
    } catch (_0x3b2478) {
      if (typeof _0x4c1d54 === "undefined" || !(_0x3b2478 instanceof _0x4c1d54.ErrnoError)) {
        _0x38247b(_0x3b2478);
      }
      return -_0x3b2478.errno;
    }
  }
  function _0x269719(_0x1178ea, _0x37bfb2, _0x346655) {
    try {
      var _0xe637d7 = _0x4b0e29(_0x1178ea);
      var _0x164505 = _0x326cb7(_0x37bfb2, _0x346655);
      _0xe637d7.sock_ops.connect(_0xe637d7, _0x164505.addr, _0x164505.port);
      return 0;
    } catch (_0x36b9dd) {
      if (typeof _0x4c1d54 === "undefined" || !(_0x36b9dd instanceof _0x4c1d54.ErrnoError)) {
        _0x38247b(_0x36b9dd);
      }
      return -_0x36b9dd.errno;
    }
  }
  function _0xbe796d(_0x556337, _0x40159c) {
    try {
      var _0x59c4cb = _0x1e57f1.getStreamFromFD(_0x556337);
      if (_0x59c4cb.fd === _0x40159c) {
        return _0x40159c;
      }
      return _0x1e57f1.doDup(_0x59c4cb.path, _0x59c4cb.flags, _0x40159c);
    } catch (_0x4de910) {
      if (typeof _0x4c1d54 === "undefined" || !(_0x4de910 instanceof _0x4c1d54.ErrnoError)) {
        _0x38247b(_0x4de910);
      }
      return -_0x4de910.errno;
    }
  }
  function _0xc086c9(_0x42ccec, _0x2f97c1) {
    try {
      _0x4c1d54.fchmod(_0x42ccec, _0x2f97c1);
      return 0;
    } catch (_0x19c6da) {
      if (typeof _0x4c1d54 === "undefined" || !(_0x19c6da instanceof _0x4c1d54.ErrnoError)) {
        _0x38247b(_0x19c6da);
      }
      return -_0x19c6da.errno;
    }
  }
  function _0x714a50(_0x39aa4c, _0x4e4c7c, _0x19b55a) {
    _0x1e57f1.varargs = _0x19b55a;
    try {
      var _0x1e9a82 = _0x1e57f1.getStreamFromFD(_0x39aa4c);
      switch (_0x4e4c7c) {
        case 0:
          {
            var _0x2784e7 = _0x1e57f1.get();
            if (_0x2784e7 < 0) {
              return -28;
            }
            var _0x599dfb;
            _0x599dfb = _0x4c1d54.open(_0x1e9a82.path, _0x1e9a82.flags, 0, _0x2784e7);
            return _0x599dfb.fd;
          }
        case 1:
        case 2:
          return 0;
        case 3:
          return _0x1e9a82.flags;
        case 4:
          {
            var _0x2784e7 = _0x1e57f1.get();
            _0x1e9a82.flags |= _0x2784e7;
            return 0;
          }
        case 12:
          {
            var _0x2784e7 = _0x1e57f1.get();
            var _0xee1fd3 = 0;
            _0x34c2d1[_0x2784e7 + _0xee1fd3 >> 1] = 2;
            return 0;
          }
        case 13:
        case 14:
          return 0;
        case 16:
        case 8:
          return -28;
        case 9:
          _0xf13c3a(28);
          return -1;
        default:
          {
            return -28;
          }
      }
    } catch (_0x5d37ff) {
      if (typeof _0x4c1d54 === "undefined" || !(_0x5d37ff instanceof _0x4c1d54.ErrnoError)) {
        _0x38247b(_0x5d37ff);
      }
      return -_0x5d37ff.errno;
    }
  }
  function _0x2c2c88(_0x1ff7f4, _0x1311f7) {
    try {
      var _0x326a4f = _0x1e57f1.getStreamFromFD(_0x1ff7f4);
      return _0x1e57f1.doStat(_0x4c1d54.stat, _0x326a4f.path, _0x1311f7);
    } catch (_0x27c7ff) {
      if (typeof _0x4c1d54 === "undefined" || !(_0x27c7ff instanceof _0x4c1d54.ErrnoError)) {
        _0x38247b(_0x27c7ff);
      }
      return -_0x27c7ff.errno;
    }
  }
  function _0x101eb7(_0x2e4e36, _0x18d26c, _0x4bdcb8, _0x4aa557) {
    try {
      var _0x541a50 = _0x1e57f1.get64(_0x4bdcb8, _0x4aa557);
      _0x4c1d54.ftruncate(_0x2e4e36, _0x541a50);
      return 0;
    } catch (_0xad9191) {
      if (typeof _0x4c1d54 === "undefined" || !(_0xad9191 instanceof _0x4c1d54.ErrnoError)) {
        _0x38247b(_0xad9191);
      }
      return -_0xad9191.errno;
    }
  }
  function _0x384ed4(_0x4087ce, _0x5d9579) {
    try {
      if (_0x5d9579 === 0) {
        return -28;
      }
      var _0x1d922d = _0x4c1d54.cwd();
      var _0x7afd24 = _0x55b306(_0x1d922d);
      if (_0x5d9579 < _0x7afd24 + 1) {
        return -68;
      }
      _0x38fbc9(_0x1d922d, _0x4087ce, _0x5d9579);
      return _0x4087ce;
    } catch (_0x568834) {
      if (typeof _0x4c1d54 === "undefined" || !(_0x568834 instanceof _0x4c1d54.ErrnoError)) {
        _0x38247b(_0x568834);
      }
      return -_0x568834.errno;
    }
  }
  function _0xa9be47(_0x2e1a20, _0x376d7a, _0x246636) {
    try {
      var _0x322510 = _0x1e57f1.getStreamFromFD(_0x2e1a20);
      if (!_0x322510.getdents) {
        _0x322510.getdents = _0x4c1d54.readdir(_0x322510.path);
      }
      var _0xaa7abd = 280;
      var _0xebebac = 0;
      var _0x58fa41 = _0x4c1d54.llseek(_0x322510, 0, 1);
      var _0x25010d = Math.floor(_0x58fa41 / _0xaa7abd);
      while (_0x25010d < _0x322510.getdents.length && _0xebebac + _0xaa7abd <= _0x246636) {
        var _0x513392;
        var _0x45688a;
        var _0xb90bf1 = _0x322510.getdents[_0x25010d];
        if (_0xb90bf1[0] === ".") {
          _0x513392 = 1;
          _0x45688a = 4;
        } else {
          var _0x525b17 = _0x4c1d54.lookupNode(_0x322510.node, _0xb90bf1);
          _0x513392 = _0x525b17.id;
          _0x45688a = _0x4c1d54.isChrdev(_0x525b17.mode) ? 2 : _0x4c1d54.isDir(_0x525b17.mode) ? 4 : _0x4c1d54.isLink(_0x525b17.mode) ? 10 : 8;
        }
        _0x10aa5a = [_0x513392 >>> 0, (_0x3a400e = _0x513392, +Math.abs(_0x3a400e) >= 1 ? _0x3a400e > 0 ? (Math.min(+Math.floor(_0x3a400e / 4294967296), 4294967295) | 0) >>> 0 : ~~+Math.ceil((_0x3a400e - +(~~_0x3a400e >>> 0)) / 4294967296) >>> 0 : 0)];
        _0x1b79ed[_0x376d7a + _0xebebac >> 2] = _0x10aa5a[0];
        _0x1b79ed[_0x376d7a + _0xebebac + 4 >> 2] = _0x10aa5a[1];
        _0x10aa5a = [(_0x25010d + 1) * _0xaa7abd >>> 0, (_0x3a400e = (_0x25010d + 1) * _0xaa7abd, +Math.abs(_0x3a400e) >= 1 ? _0x3a400e > 0 ? (Math.min(+Math.floor(_0x3a400e / 4294967296), 4294967295) | 0) >>> 0 : ~~+Math.ceil((_0x3a400e - +(~~_0x3a400e >>> 0)) / 4294967296) >>> 0 : 0)];
        _0x1b79ed[_0x376d7a + _0xebebac + 8 >> 2] = _0x10aa5a[0];
        _0x1b79ed[_0x376d7a + _0xebebac + 12 >> 2] = _0x10aa5a[1];
        _0x34c2d1[_0x376d7a + _0xebebac + 16 >> 1] = 280;
        _0x18b38f[_0x376d7a + _0xebebac + 18 >> 0] = _0x45688a;
        _0x38fbc9(_0xb90bf1, _0x376d7a + _0xebebac + 19, 256);
        _0xebebac += _0xaa7abd;
        _0x25010d += 1;
      }
      _0x4c1d54.llseek(_0x322510, _0x25010d * _0xaa7abd, 0);
      return _0xebebac;
    } catch (_0x4c22ba) {
      if (typeof _0x4c1d54 === "undefined" || !(_0x4c22ba instanceof _0x4c1d54.ErrnoError)) {
        _0x38247b(_0x4c22ba);
      }
      return -_0x4c22ba.errno;
    }
  }
  function _0x4a5490() {
    return 0;
  }
  function _0x589637() {
    return _0x4a5490();
  }
  function _0xc1b69b(_0x46ce0, _0x2ac848, _0x473129) {
    try {
      var _0x1265aa = _0x4b0e29(_0x46ce0);
      if (!_0x1265aa.daddr) {
        return -53;
      }
      var _0x4854fb = _0x89d5aa(_0x2ac848, _0x1265aa.family, _0x584b1a.lookup_name(_0x1265aa.daddr), _0x1265aa.dport, _0x473129);
      return 0;
    } catch (_0x371762) {
      if (typeof _0x4c1d54 === "undefined" || !(_0x371762 instanceof _0x4c1d54.ErrnoError)) {
        _0x38247b(_0x371762);
      }
      return -_0x371762.errno;
    }
  }
  function _0x35d3c8() {
    return 42;
  }
  function _0x23f862(_0x5de552, _0x38e28d) {
    try {
      _0x2a2c85(_0x38e28d, 0, 136);
      _0x1b79ed[_0x38e28d >> 2] = 1;
      _0x1b79ed[_0x38e28d + 4 >> 2] = 2;
      _0x1b79ed[_0x38e28d + 8 >> 2] = 3;
      _0x1b79ed[_0x38e28d + 12 >> 2] = 4;
      return 0;
    } catch (_0x4c9829) {
      if (typeof _0x4c1d54 === "undefined" || !(_0x4c9829 instanceof _0x4c1d54.ErrnoError)) {
        _0x38247b(_0x4c9829);
      }
      return -_0x4c9829.errno;
    }
  }
  function _0x224f85(_0x31c128, _0x245026, _0xd24df7) {
    try {
      _0x235a52("__sys_getsockname " + _0x31c128);
      var _0xee9eb9 = _0x4b0e29(_0x31c128);
      var _0x5c2551 = _0x89d5aa(_0x245026, _0xee9eb9.family, _0x584b1a.lookup_name(_0xee9eb9.saddr || "0.0.0.0"), _0xee9eb9.sport, _0xd24df7);
      return 0;
    } catch (_0x111df8) {
      if (typeof _0x4c1d54 === "undefined" || !(_0x111df8 instanceof _0x4c1d54.ErrnoError)) {
        _0x38247b(_0x111df8);
      }
      return -_0x111df8.errno;
    }
  }
  function _0x57d719(_0x56b1df, _0x2bfb1f, _0x18d831, _0x315e12, _0x163574) {
    try {
      var _0x1545a0 = _0x4b0e29(_0x56b1df);
      if (_0x2bfb1f === 1) {
        if (_0x18d831 === 4) {
          _0x1b79ed[_0x315e12 >> 2] = _0x1545a0.error;
          _0x1b79ed[_0x163574 >> 2] = 4;
          _0x1545a0.error = null;
          return 0;
        }
      }
      return -50;
    } catch (_0x5949c7) {
      if (typeof _0x4c1d54 === "undefined" || !(_0x5949c7 instanceof _0x4c1d54.ErrnoError)) {
        _0x38247b(_0x5949c7);
      }
      return -_0x5949c7.errno;
    }
  }
  function _0x3ae438() {
    return _0x4a5490();
  }
  function _0x5a440f(_0x5337d8, _0x2cae6c, _0x1ddb37) {
    _0x1e57f1.varargs = _0x1ddb37;
    try {
      var _0x17e6fa = _0x1e57f1.getStreamFromFD(_0x5337d8);
      switch (_0x2cae6c) {
        case 21509:
        case 21505:
          {
            if (!_0x17e6fa.tty) {
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
            if (!_0x17e6fa.tty) {
              return -59;
            }
            return 0;
          }
        case 21519:
          {
            if (!_0x17e6fa.tty) {
              return -59;
            }
            var _0x41f233 = _0x1e57f1.get();
            _0x1b79ed[_0x41f233 >> 2] = 0;
            return 0;
          }
        case 21520:
          {
            if (!_0x17e6fa.tty) {
              return -59;
            }
            return -28;
          }
        case 21531:
          {
            var _0x41f233 = _0x1e57f1.get();
            return _0x4c1d54.ioctl(_0x17e6fa, _0x2cae6c, _0x41f233);
          }
        case 21523:
          {
            if (!_0x17e6fa.tty) {
              return -59;
            }
            return 0;
          }
        case 21524:
          {
            if (!_0x17e6fa.tty) {
              return -59;
            }
            return 0;
          }
        default:
          _0x38247b("bad ioctl syscall " + _0x2cae6c);
      }
    } catch (_0x4c9361) {
      if (typeof _0x4c1d54 === "undefined" || !(_0x4c9361 instanceof _0x4c1d54.ErrnoError)) {
        _0x38247b(_0x4c9361);
      }
      return -_0x4c9361.errno;
    }
  }
  function _0x354c14(_0xccb832, _0x276a74) {
    return -34;
  }
  function _0x95fd35(_0x4d5e10, _0x47e7d9) {
    try {
      var _0x4e74c3 = _0x4b0e29(_0x4d5e10);
      _0x4e74c3.sock_ops.listen(_0x4e74c3, _0x47e7d9);
      return 0;
    } catch (_0x38c8fa) {
      if (typeof _0x4c1d54 === "undefined" || !(_0x38c8fa instanceof _0x4c1d54.ErrnoError)) {
        _0x38247b(_0x38c8fa);
      }
      return -_0x38c8fa.errno;
    }
  }
  function _0x2853d6(_0x4441d1, _0x4b632f) {
    try {
      _0x4441d1 = _0x1e57f1.getStr(_0x4441d1);
      return _0x1e57f1.doStat(_0x4c1d54.lstat, _0x4441d1, _0x4b632f);
    } catch (_0x2c2db1) {
      if (typeof _0x4c1d54 === "undefined" || !(_0x2c2db1 instanceof _0x4c1d54.ErrnoError)) {
        _0x38247b(_0x2c2db1);
      }
      return -_0x2c2db1.errno;
    }
  }
  function _0x1e3e09(_0x3338c7, _0x5570f8) {
    try {
      _0x3338c7 = _0x1e57f1.getStr(_0x3338c7);
      return _0x1e57f1.doMkdir(_0x3338c7, _0x5570f8);
    } catch (_0x458260) {
      if (typeof _0x4c1d54 === "undefined" || !(_0x458260 instanceof _0x4c1d54.ErrnoError)) {
        _0x38247b(_0x458260);
      }
      return -_0x458260.errno;
    }
  }
  function _0x316b06(_0x678c05, _0x234dd9, _0x2c8654, _0x4262ca, _0x298bfd, _0x58e2e3) {
    _0x58e2e3 <<= 12;
    var _0x5c67a5;
    var _0x1a9a8c = false;
    if ((_0x4262ca & 16) !== 0 && _0x678c05 % 65536 !== 0) {
      return -28;
    }
    if ((_0x4262ca & 32) !== 0) {
      _0x5c67a5 = _0xd9f144(65536, _0x234dd9);
      if (!_0x5c67a5) {
        return -48;
      }
      _0x2a2c85(_0x5c67a5, 0, _0x234dd9);
      _0x1a9a8c = true;
    } else {
      var _0x54161f = _0x4c1d54.getStream(_0x298bfd);
      if (!_0x54161f) {
        return -8;
      }
      var _0x545d9e = _0x4c1d54.mmap(_0x54161f, _0x678c05, _0x234dd9, _0x58e2e3, _0x2c8654, _0x4262ca);
      _0x5c67a5 = _0x545d9e.ptr;
      _0x1a9a8c = _0x545d9e.allocated;
    }
    _0x1e57f1.mappings[_0x5c67a5] = {
      malloc: _0x5c67a5,
      len: _0x234dd9,
      allocated: _0x1a9a8c,
      fd: _0x298bfd,
      prot: _0x2c8654,
      flags: _0x4262ca,
      offset: _0x58e2e3
    };
    return _0x5c67a5;
  }
  function _0x5cf1f2(_0x50e8c1, _0x3fb00a, _0x468d78, _0x5be76a, _0x470cd8, _0x252424) {
    try {
      return _0x316b06(_0x50e8c1, _0x3fb00a, _0x468d78, _0x5be76a, _0x470cd8, _0x252424);
    } catch (_0x2431dd) {
      if (typeof _0x4c1d54 === "undefined" || !(_0x2431dd instanceof _0x4c1d54.ErrnoError)) {
        _0x38247b(_0x2431dd);
      }
      return -_0x2431dd.errno;
    }
  }
  function _0x1751d4(_0x151171, _0x52fc8e) {
    if ((_0x151171 | 0) === -1 || _0x52fc8e === 0) {
      return -28;
    }
    var _0x4e0dcd = _0x1e57f1.mappings[_0x151171];
    if (!_0x4e0dcd) {
      return 0;
    }
    if (_0x52fc8e === _0x4e0dcd.len) {
      var _0x2cc27c = _0x4c1d54.getStream(_0x4e0dcd.fd);
      if (_0x2cc27c) {
        if (_0x4e0dcd.prot & 2) {
          _0x1e57f1.doMsync(_0x151171, _0x2cc27c, _0x52fc8e, _0x4e0dcd.flags, _0x4e0dcd.offset);
        }
        _0x4c1d54.munmap(_0x2cc27c);
      }
      _0x1e57f1.mappings[_0x151171] = null;
      if (_0x4e0dcd.allocated) {
        _0x4401e3(_0x4e0dcd.malloc);
      }
    }
    return 0;
  }
  function _0x10d950(_0x2e9413, _0x51757d) {
    try {
      return _0x1751d4(_0x2e9413, _0x51757d);
    } catch (_0x290400) {
      if (typeof _0x4c1d54 === "undefined" || !(_0x290400 instanceof _0x4c1d54.ErrnoError)) {
        _0x38247b(_0x290400);
      }
      return -_0x290400.errno;
    }
  }
  function _0x2bb9c3(_0x529943, _0x34e35a, _0x563db1) {
    _0x1e57f1.varargs = _0x563db1;
    try {
      var _0x5542c5 = _0x1e57f1.getStr(_0x529943);
      var _0x3f7ff6 = _0x563db1 ? _0x1e57f1.get() : 0;
      var _0x123767 = _0x4c1d54.open(_0x5542c5, _0x34e35a, _0x3f7ff6);
      return _0x123767.fd;
    } catch (_0x30c21b) {
      if (typeof _0x4c1d54 === "undefined" || !(_0x30c21b instanceof _0x4c1d54.ErrnoError)) {
        _0x38247b(_0x30c21b);
      }
      return -_0x30c21b.errno;
    }
  }
  var _0x31b4aa = {
    BUCKET_BUFFER_SIZE: 8192,
    mount: function (_0xad9376) {
      return _0x4c1d54.createNode(null, "/", 16895, 0);
    },
    createPipe: function () {
      var _0x4412c4 = {
        buckets: []
      };
      _0x4412c4.buckets.push({
        buffer: new Uint8Array(_0x31b4aa.BUCKET_BUFFER_SIZE),
        offset: 0,
        roffset: 0
      });
      var _0x9acdbd = _0x31b4aa.nextname();
      var _0x4a4a69 = _0x31b4aa.nextname();
      var _0x363170 = _0x4c1d54.createNode(_0x31b4aa.root, _0x9acdbd, 4096, 0);
      var _0x4fa48d = _0x4c1d54.createNode(_0x31b4aa.root, _0x4a4a69, 4096, 0);
      _0x363170.pipe = _0x4412c4;
      _0x4fa48d.pipe = _0x4412c4;
      var _0x213c04 = _0x4c1d54.createStream({
        path: _0x9acdbd,
        node: _0x363170,
        flags: 0,
        seekable: false,
        stream_ops: _0x31b4aa.stream_ops
      });
      _0x363170.stream = _0x213c04;
      var _0x106b61 = _0x4c1d54.createStream({
        path: _0x4a4a69,
        node: _0x4fa48d,
        flags: 1,
        seekable: false,
        stream_ops: _0x31b4aa.stream_ops
      });
      _0x4fa48d.stream = _0x106b61;
      return {
        readable_fd: _0x213c04.fd,
        writable_fd: _0x106b61.fd
      };
    },
    stream_ops: {
      poll: function (_0x8e38f9) {
        var _0x467ab7 = _0x8e38f9.node.pipe;
        if ((_0x8e38f9.flags & 2097155) === 1) {
          return 260;
        } else if (_0x467ab7.buckets.length > 0) {
          for (var _0x2be72e = 0; _0x2be72e < _0x467ab7.buckets.length; _0x2be72e++) {
            var _0x42ddb1 = _0x467ab7.buckets[_0x2be72e];
            if (_0x42ddb1.offset - _0x42ddb1.roffset > 0) {
              return 65;
            }
          }
        }
        return 0;
      },
      ioctl: function (_0x8341b8, _0xe95e8e, _0x177100) {
        return _0x192ddc.EINVAL;
      },
      fsync: function (_0x4aa383) {
        return _0x192ddc.EINVAL;
      },
      read: function (_0x175cdb, _0x507f27, _0x48f7f8, _0xc522b5, _0x3b717b) {
        var _0x29d941 = _0x175cdb.node.pipe;
        var _0x4fb119 = 0;
        for (var _0x5cbbcf = 0; _0x5cbbcf < _0x29d941.buckets.length; _0x5cbbcf++) {
          var _0x305516 = _0x29d941.buckets[_0x5cbbcf];
          _0x4fb119 += _0x305516.offset - _0x305516.roffset;
        }
        _0x441670(_0x507f27 instanceof ArrayBuffer || ArrayBuffer.isView(_0x507f27));
        var _0x4d67c5 = _0x507f27.subarray(_0x48f7f8, _0x48f7f8 + _0xc522b5);
        if (_0xc522b5 <= 0) {
          return 0;
        }
        if (_0x4fb119 == 0) {
          throw new _0x4c1d54.ErrnoError(_0x192ddc.EAGAIN);
        }
        var _0x5ab856 = Math.min(_0x4fb119, _0xc522b5);
        var _0x2884cd = _0x5ab856;
        var _0x53a4b2 = 0;
        for (var _0x5cbbcf = 0; _0x5cbbcf < _0x29d941.buckets.length; _0x5cbbcf++) {
          var _0x5d38da = _0x29d941.buckets[_0x5cbbcf];
          var _0x2d609a = _0x5d38da.offset - _0x5d38da.roffset;
          if (_0x5ab856 <= _0x2d609a) {
            var _0xfcd635 = _0x5d38da.buffer.subarray(_0x5d38da.roffset, _0x5d38da.offset);
            if (_0x5ab856 < _0x2d609a) {
              _0xfcd635 = _0xfcd635.subarray(0, _0x5ab856);
              _0x5d38da.roffset += _0x5ab856;
            } else {
              _0x53a4b2++;
            }
            _0x4d67c5.set(_0xfcd635);
            break;
          } else {
            var _0xfcd635 = _0x5d38da.buffer.subarray(_0x5d38da.roffset, _0x5d38da.offset);
            _0x4d67c5.set(_0xfcd635);
            _0x4d67c5 = _0x4d67c5.subarray(_0xfcd635.byteLength);
            _0x5ab856 -= _0xfcd635.byteLength;
            _0x53a4b2++;
          }
        }
        if (_0x53a4b2 && _0x53a4b2 == _0x29d941.buckets.length) {
          _0x53a4b2--;
          _0x29d941.buckets[_0x53a4b2].offset = 0;
          _0x29d941.buckets[_0x53a4b2].roffset = 0;
        }
        _0x29d941.buckets.splice(0, _0x53a4b2);
        return _0x2884cd;
      },
      write: function (_0x460420, _0x6e1dde, _0xfcaf37, _0x41d441, _0x41d6b6) {
        var _0x438257 = _0x460420.node.pipe;
        _0x441670(_0x6e1dde instanceof ArrayBuffer || ArrayBuffer.isView(_0x6e1dde));
        var _0x4f2fcd = _0x6e1dde.subarray(_0xfcaf37, _0xfcaf37 + _0x41d441);
        var _0x13c20c = _0x4f2fcd.byteLength;
        if (_0x13c20c <= 0) {
          return 0;
        }
        var _0x5b3230 = null;
        if (_0x438257.buckets.length == 0) {
          _0x5b3230 = {
            buffer: new Uint8Array(_0x31b4aa.BUCKET_BUFFER_SIZE),
            offset: 0,
            roffset: 0
          };
          _0x438257.buckets.push(_0x5b3230);
        } else {
          _0x5b3230 = _0x438257.buckets[_0x438257.buckets.length - 1];
        }
        _0x441670(_0x5b3230.offset <= _0x31b4aa.BUCKET_BUFFER_SIZE);
        var _0x2f68a4 = _0x31b4aa.BUCKET_BUFFER_SIZE - _0x5b3230.offset;
        if (_0x2f68a4 >= _0x13c20c) {
          _0x5b3230.buffer.set(_0x4f2fcd, _0x5b3230.offset);
          _0x5b3230.offset += _0x13c20c;
          return _0x13c20c;
        } else if (_0x2f68a4 > 0) {
          _0x5b3230.buffer.set(_0x4f2fcd.subarray(0, _0x2f68a4), _0x5b3230.offset);
          _0x5b3230.offset += _0x2f68a4;
          _0x4f2fcd = _0x4f2fcd.subarray(_0x2f68a4, _0x4f2fcd.byteLength);
        }
        var _0x2c3014 = _0x4f2fcd.byteLength / _0x31b4aa.BUCKET_BUFFER_SIZE | 0;
        var _0x4f8c88 = _0x4f2fcd.byteLength % _0x31b4aa.BUCKET_BUFFER_SIZE;
        for (var _0x47eed5 = 0; _0x47eed5 < _0x2c3014; _0x47eed5++) {
          var _0x30e6d4 = {
            buffer: new Uint8Array(_0x31b4aa.BUCKET_BUFFER_SIZE),
            offset: _0x31b4aa.BUCKET_BUFFER_SIZE,
            roffset: 0
          };
          _0x438257.buckets.push(_0x30e6d4);
          _0x30e6d4.buffer.set(_0x4f2fcd.subarray(0, _0x31b4aa.BUCKET_BUFFER_SIZE));
          _0x4f2fcd = _0x4f2fcd.subarray(_0x31b4aa.BUCKET_BUFFER_SIZE, _0x4f2fcd.byteLength);
        }
        if (_0x4f8c88 > 0) {
          var _0x30e6d4 = {
            buffer: new Uint8Array(_0x31b4aa.BUCKET_BUFFER_SIZE),
            offset: _0x4f2fcd.byteLength,
            roffset: 0
          };
          _0x438257.buckets.push(_0x30e6d4);
          _0x30e6d4.buffer.set(_0x4f2fcd);
        }
        return _0x13c20c;
      },
      close: function (_0x35abee) {
        var _0x32c2e1 = _0x35abee.node.pipe;
        _0x32c2e1.buckets = null;
      }
    },
    nextname: function () {
      if (!_0x31b4aa.nextname.current) {
        _0x31b4aa.nextname.current = 0;
      }
      return "pipe[" + _0x31b4aa.nextname.current++ + "]";
    }
  };
  function _0x3c8828(_0x45f392) {
    try {
      if (_0x45f392 == 0) {
        throw new _0x4c1d54.ErrnoError(21);
      }
      var _0x5797a7 = _0x31b4aa.createPipe();
      _0x1b79ed[_0x45f392 >> 2] = _0x5797a7.readable_fd;
      _0x1b79ed[_0x45f392 + 4 >> 2] = _0x5797a7.writable_fd;
      return 0;
    } catch (_0x565c9b) {
      if (typeof _0x4c1d54 === "undefined" || !(_0x565c9b instanceof _0x4c1d54.ErrnoError)) {
        _0x38247b(_0x565c9b);
      }
      return -_0x565c9b.errno;
    }
  }
  function _0x471d4d(_0x5f307d, _0x338b1c, _0x5deaf1) {
    try {
      var _0xc9174b = 0;
      for (var _0x53a158 = 0; _0x53a158 < _0x338b1c; _0x53a158++) {
        var _0xf848d6 = _0x5f307d + _0x53a158 * 8;
        var _0x37828f = _0x1b79ed[_0xf848d6 >> 2];
        var _0x251649 = _0x34c2d1[_0xf848d6 + 4 >> 1];
        var _0x2e3144 = 32;
        var _0x2efb2a = _0x4c1d54.getStream(_0x37828f);
        if (_0x2efb2a) {
          _0x2e3144 = _0x1e57f1.DEFAULT_POLLMASK;
          if (_0x2efb2a.stream_ops.poll) {
            _0x2e3144 = _0x2efb2a.stream_ops.poll(_0x2efb2a);
          }
        }
        _0x2e3144 &= _0x251649 | 8 | 16;
        if (_0x2e3144) {
          _0xc9174b++;
        }
        _0x34c2d1[_0xf848d6 + 6 >> 1] = _0x2e3144;
      }
      return _0xc9174b;
    } catch (_0x3c7e33) {
      if (typeof _0x4c1d54 === "undefined" || !(_0x3c7e33 instanceof _0x4c1d54.ErrnoError)) {
        _0x38247b(_0x3c7e33);
      }
      return -_0x3c7e33.errno;
    }
  }
  function _0x268e39(_0x198dbb, _0x28489f, _0x2d11bb) {
    try {
      _0x198dbb = _0x1e57f1.getStr(_0x198dbb);
      return _0x1e57f1.doReadlink(_0x198dbb, _0x28489f, _0x2d11bb);
    } catch (_0x5edbe7) {
      if (typeof _0x4c1d54 === "undefined" || !(_0x5edbe7 instanceof _0x4c1d54.ErrnoError)) {
        _0x38247b(_0x5edbe7);
      }
      return -_0x5edbe7.errno;
    }
  }
  function _0x143f0a(_0x529b16, _0x409d8d, _0x29e0ad, _0x1c8e1b, _0x2bfcac, _0x2ef391) {
    try {
      var _0x1c08eb = _0x4b0e29(_0x529b16);
      var _0x2bcd07 = _0x1c08eb.sock_ops.recvmsg(_0x1c08eb, _0x29e0ad);
      if (!_0x2bcd07) {
        return 0;
      }
      if (_0x2bfcac) {
        var _0x529f54 = _0x89d5aa(_0x2bfcac, _0x1c08eb.family, _0x584b1a.lookup_name(_0x2bcd07.addr), _0x2bcd07.port, _0x2ef391);
      }
      _0x2c14c3.set(_0x2bcd07.buffer, _0x409d8d);
      return _0x2bcd07.buffer.byteLength;
    } catch (_0x3225f0) {
      if (typeof _0x4c1d54 === "undefined" || !(_0x3225f0 instanceof _0x4c1d54.ErrnoError)) {
        _0x38247b(_0x3225f0);
      }
      return -_0x3225f0.errno;
    }
  }
  function _0x204575(_0x3f4834, _0x574d68, _0x336d6d) {
    try {
      var _0x1e9e76 = _0x4b0e29(_0x3f4834);
      var _0x412eb3 = _0x1b79ed[_0x574d68 + 8 >> 2];
      var _0x51e79f = _0x1b79ed[_0x574d68 + 12 >> 2];
      var _0x5a15fb = 0;
      for (var _0x2458cb = 0; _0x2458cb < _0x51e79f; _0x2458cb++) {
        _0x5a15fb += _0x1b79ed[_0x412eb3 + (_0x2458cb * 8 + 4) >> 2];
      }
      var _0x472e38 = _0x1e9e76.sock_ops.recvmsg(_0x1e9e76, _0x5a15fb);
      if (!_0x472e38) {
        return 0;
      }
      var _0x24da25 = _0x1b79ed[_0x574d68 >> 2];
      if (_0x24da25) {
        var _0x2bebdf = _0x89d5aa(_0x24da25, _0x1e9e76.family, _0x584b1a.lookup_name(_0x472e38.addr), _0x472e38.port);
      }
      var _0x3abf73 = 0;
      var _0x3c4141 = _0x472e38.buffer.byteLength;
      for (var _0x2458cb = 0; _0x3c4141 > 0 && _0x2458cb < _0x51e79f; _0x2458cb++) {
        var _0xb183e = _0x1b79ed[_0x412eb3 + (_0x2458cb * 8 + 0) >> 2];
        var _0xa28bc2 = _0x1b79ed[_0x412eb3 + (_0x2458cb * 8 + 4) >> 2];
        if (!_0xa28bc2) {
          continue;
        }
        var _0x52be4d = Math.min(_0xa28bc2, _0x3c4141);
        var _0x1331e7 = _0x472e38.buffer.subarray(_0x3abf73, _0x3abf73 + _0x52be4d);
        _0x2c14c3.set(_0x1331e7, _0xb183e + _0x3abf73);
        _0x3abf73 += _0x52be4d;
        _0x3c4141 -= _0x52be4d;
      }
      return _0x3abf73;
    } catch (_0x85072) {
      if (typeof _0x4c1d54 === "undefined" || !(_0x85072 instanceof _0x4c1d54.ErrnoError)) {
        _0x38247b(_0x85072);
      }
      return -_0x85072.errno;
    }
  }
  function _0x3c2f65(_0x52cb27, _0x217f3c) {
    try {
      _0x52cb27 = _0x1e57f1.getStr(_0x52cb27);
      _0x217f3c = _0x1e57f1.getStr(_0x217f3c);
      _0x4c1d54.rename(_0x52cb27, _0x217f3c);
      return 0;
    } catch (_0x194e27) {
      if (typeof _0x4c1d54 === "undefined" || !(_0x194e27 instanceof _0x4c1d54.ErrnoError)) {
        _0x38247b(_0x194e27);
      }
      return -_0x194e27.errno;
    }
  }
  function _0xc0fff1(_0x2c6122) {
    try {
      _0x2c6122 = _0x1e57f1.getStr(_0x2c6122);
      _0x4c1d54.rmdir(_0x2c6122);
      return 0;
    } catch (_0x133eaa) {
      if (typeof _0x4c1d54 === "undefined" || !(_0x133eaa instanceof _0x4c1d54.ErrnoError)) {
        _0x38247b(_0x133eaa);
      }
      return -_0x133eaa.errno;
    }
  }
  function _0x16d7f0(_0x4bcff1, _0x1ca582, _0x539f1f) {
    try {
      var _0x447596 = _0x4b0e29(_0x4bcff1);
      var _0x45d685 = _0x1b79ed[_0x1ca582 + 8 >> 2];
      var _0x240003 = _0x1b79ed[_0x1ca582 + 12 >> 2];
      var _0x1e5ee0;
      var _0x1ac9f6;
      var _0x378d14 = _0x1b79ed[_0x1ca582 >> 2];
      var _0x8c9611 = _0x1b79ed[_0x1ca582 + 4 >> 2];
      if (_0x378d14) {
        var _0x5ee21f = _0x2bd298(_0x378d14, _0x8c9611);
        if (_0x5ee21f.errno) {
          return -_0x5ee21f.errno;
        }
        _0x1ac9f6 = _0x5ee21f.port;
        _0x1e5ee0 = _0x584b1a.lookup_addr(_0x5ee21f.addr) || _0x5ee21f.addr;
      }
      var _0x42bb92 = 0;
      for (var _0x16ca4b = 0; _0x16ca4b < _0x240003; _0x16ca4b++) {
        _0x42bb92 += _0x1b79ed[_0x45d685 + (_0x16ca4b * 8 + 4) >> 2];
      }
      var _0x34c7b2 = new Uint8Array(_0x42bb92);
      var _0x413454 = 0;
      for (var _0x16ca4b = 0; _0x16ca4b < _0x240003; _0x16ca4b++) {
        var _0x2ec0d2 = _0x1b79ed[_0x45d685 + (_0x16ca4b * 8 + 0) >> 2];
        var _0x3fc838 = _0x1b79ed[_0x45d685 + (_0x16ca4b * 8 + 4) >> 2];
        for (var _0x5ad60d = 0; _0x5ad60d < _0x3fc838; _0x5ad60d++) {
          _0x34c7b2[_0x413454++] = _0x18b38f[_0x2ec0d2 + _0x5ad60d >> 0];
        }
      }
      return _0x447596.sock_ops.sendmsg(_0x447596, _0x34c7b2, 0, _0x42bb92, _0x1e5ee0, _0x1ac9f6);
    } catch (_0x15cbb1) {
      if (typeof _0x4c1d54 === "undefined" || !(_0x15cbb1 instanceof _0x4c1d54.ErrnoError)) {
        _0x38247b(_0x15cbb1);
      }
      return -_0x15cbb1.errno;
    }
  }
  function _0x4e159c(_0x233095, _0xba5912, _0x1b3646, _0x3d6622, _0x132dab, _0x4cb4f5) {
    try {
      var _0x5247e3 = _0x4b0e29(_0x233095);
      var _0x556efc = _0x326cb7(_0x132dab, _0x4cb4f5, true);
      if (!_0x556efc) {
        return _0x4c1d54.write(_0x5247e3.stream, _0x18b38f, _0xba5912, _0x1b3646);
      } else {
        return _0x5247e3.sock_ops.sendmsg(_0x5247e3, _0x18b38f, _0xba5912, _0x1b3646, _0x556efc.addr, _0x556efc.port);
      }
    } catch (_0x12a1b5) {
      if (typeof _0x4c1d54 === "undefined" || !(_0x12a1b5 instanceof _0x4c1d54.ErrnoError)) {
        _0x38247b(_0x12a1b5);
      }
      return -_0x12a1b5.errno;
    }
  }
  function _0x38467a(_0x2f7274) {
    try {
      return -50;
    } catch (_0x44e4ee) {
      if (typeof _0x4c1d54 === "undefined" || !(_0x44e4ee instanceof _0x4c1d54.ErrnoError)) {
        _0x38247b(_0x44e4ee);
      }
      return -_0x44e4ee.errno;
    }
  }
  function _0x1dbc94(_0x14ffe8, _0x18d3b6) {
    try {
      _0x4b0e29(_0x14ffe8);
      return -52;
    } catch (_0x166ae7) {
      if (typeof _0x4c1d54 === "undefined" || !(_0x166ae7 instanceof _0x4c1d54.ErrnoError)) {
        _0x38247b(_0x166ae7);
      }
      return -_0x166ae7.errno;
    }
  }
  function _0x1cfa0e(_0x49718d, _0x1c1645, _0x4c553f) {
    try {
      var _0x3b31d9 = _0x282f62.createSocket(_0x49718d, _0x1c1645, _0x4c553f);
      return _0x3b31d9.stream.fd;
    } catch (_0x4d4dca) {
      if (typeof _0x4c1d54 === "undefined" || !(_0x4d4dca instanceof _0x4c1d54.ErrnoError)) {
        _0x38247b(_0x4d4dca);
      }
      return -_0x4d4dca.errno;
    }
  }
  function _0x420057(_0x14858c, _0x3eee73) {
    try {
      _0x14858c = _0x1e57f1.getStr(_0x14858c);
      return _0x1e57f1.doStat(_0x4c1d54.stat, _0x14858c, _0x3eee73);
    } catch (_0x15a4a0) {
      if (typeof _0x4c1d54 === "undefined" || !(_0x15a4a0 instanceof _0x4c1d54.ErrnoError)) {
        _0x38247b(_0x15a4a0);
      }
      return -_0x15a4a0.errno;
    }
  }
  function _0x3bc86d(_0x551276, _0x100ede, _0x16ed5f) {
    try {
      _0x551276 = _0x1e57f1.getStr(_0x551276);
      _0x1b79ed[_0x16ed5f + 4 >> 2] = 4096;
      _0x1b79ed[_0x16ed5f + 40 >> 2] = 4096;
      _0x1b79ed[_0x16ed5f + 8 >> 2] = 1000000;
      _0x1b79ed[_0x16ed5f + 12 >> 2] = 500000;
      _0x1b79ed[_0x16ed5f + 16 >> 2] = 500000;
      _0x1b79ed[_0x16ed5f + 20 >> 2] = _0x4c1d54.nextInode;
      _0x1b79ed[_0x16ed5f + 24 >> 2] = 1000000;
      _0x1b79ed[_0x16ed5f + 28 >> 2] = 42;
      _0x1b79ed[_0x16ed5f + 44 >> 2] = 2;
      _0x1b79ed[_0x16ed5f + 36 >> 2] = 255;
      return 0;
    } catch (_0x31e9a3) {
      if (typeof _0x4c1d54 === "undefined" || !(_0x31e9a3 instanceof _0x4c1d54.ErrnoError)) {
        _0x38247b(_0x31e9a3);
      }
      return -_0x31e9a3.errno;
    }
  }
  function _0x4d9e66(_0x455367, _0x189957) {
    try {
      _0x455367 = _0x1e57f1.getStr(_0x455367);
      _0x189957 = _0x1e57f1.getStr(_0x189957);
      _0x4c1d54.symlink(_0x455367, _0x189957);
      return 0;
    } catch (_0x7e9b6) {
      if (typeof _0x4c1d54 === "undefined" || !(_0x7e9b6 instanceof _0x4c1d54.ErrnoError)) {
        _0x38247b(_0x7e9b6);
      }
      return -_0x7e9b6.errno;
    }
  }
  function _0x2c590a(_0x2230c6, _0x1cfd97, _0x242579, _0x3c156c) {
    try {
      _0x2230c6 = _0x1e57f1.getStr(_0x2230c6);
      var _0x1b5776 = _0x1e57f1.get64(_0x242579, _0x3c156c);
      _0x4c1d54.truncate(_0x2230c6, _0x1b5776);
      return 0;
    } catch (_0x45699e) {
      if (typeof _0x4c1d54 === "undefined" || !(_0x45699e instanceof _0x4c1d54.ErrnoError)) {
        _0x38247b(_0x45699e);
      }
      return -_0x45699e.errno;
    }
  }
  function _0x5af95f(_0x2fc8ee) {
    try {
      if (!_0x2fc8ee) {
        return -21;
      }
      var _0x52e831 = {
        __size__: 390,
        domainname: 325,
        machine: 260,
        nodename: 65,
        release: 130,
        sysname: 0,
        version: 195
      };
      var _0x15e3be = function (_0x129d59, _0x48ee48) {
        var _0x55c6ec = _0x52e831[_0x129d59];
        _0x3a1830(_0x48ee48, _0x2fc8ee + _0x55c6ec);
      };
      _0x15e3be("sysname", "Emscripten");
      _0x15e3be("nodename", "emscripten");
      _0x15e3be("release", "1.0");
      _0x15e3be("version", "#1");
      _0x15e3be("machine", "wasm32");
      return 0;
    } catch (_0x10e9c3) {
      if (typeof _0x4c1d54 === "undefined" || !(_0x10e9c3 instanceof _0x4c1d54.ErrnoError)) {
        _0x38247b(_0x10e9c3);
      }
      return -_0x10e9c3.errno;
    }
  }
  function _0x5aad6a(_0x567978) {
    try {
      _0x567978 = _0x1e57f1.getStr(_0x567978);
      _0x4c1d54.unlink(_0x567978);
      return 0;
    } catch (_0x6dfb84) {
      if (typeof _0x4c1d54 === "undefined" || !(_0x6dfb84 instanceof _0x4c1d54.ErrnoError)) {
        _0x38247b(_0x6dfb84);
      }
      return -_0x6dfb84.errno;
    }
  }
  function _0x44d0b5(_0x795163, _0x5db19e, _0x2ff6b5, _0xd8e416) {
    try {
      _0x5db19e = _0x1e57f1.getStr(_0x5db19e);
      _0x5db19e = _0x1e57f1.calculateAt(_0x795163, _0x5db19e, true);
      var _0x57be97 = _0x1b79ed[_0x2ff6b5 >> 2];
      var _0x2ae1d2 = _0x1b79ed[_0x2ff6b5 + 4 >> 2];
      var _0x2fcb0e = _0x57be97 * 1000 + _0x2ae1d2 / 1000000;
      _0x2ff6b5 += 8;
      _0x57be97 = _0x1b79ed[_0x2ff6b5 >> 2];
      _0x2ae1d2 = _0x1b79ed[_0x2ff6b5 + 4 >> 2];
      var _0x5ed248 = _0x57be97 * 1000 + _0x2ae1d2 / 1000000;
      _0x4c1d54.utime(_0x5db19e, _0x2fcb0e, _0x5ed248);
      return 0;
    } catch (_0x2859a2) {
      if (typeof _0x4c1d54 === "undefined" || !(_0x2859a2 instanceof _0x4c1d54.ErrnoError)) {
        _0x38247b(_0x2859a2);
      }
      return -_0x2859a2.errno;
    }
  }
  function _0x5506e7() {
    _0x38247b();
  }
  function _0x18b9b7() {
    if (_0x18b9b7.start === undefined) {
      _0x18b9b7.start = Date.now();
    }
    return (Date.now() - _0x18b9b7.start) * 1000 | 0;
  }
  function _0x405d16() {
    if (_0x36ba64) {
      return 1;
    } else if (typeof dateNow !== "undefined") {
      return 1000;
    } else {
      return 1000;
    }
  }
  var _0xe746a4 = true;
  function _0x251a29(_0x124679, _0x8c6edd) {
    var _0x38c831;
    if (_0x124679 === 0) {
      _0x38c831 = 1000000;
    } else if (_0x124679 === 1 && _0xe746a4) {
      _0x38c831 = _0x405d16();
    } else {
      _0xf13c3a(28);
      return -1;
    }
    _0x1b79ed[_0x8c6edd >> 2] = _0x38c831 / 1000000000 | 0;
    _0x1b79ed[_0x8c6edd + 4 >> 2] = _0x38c831;
    return 0;
  }
  var _0x4aca12;
  if (_0x36ba64) {
    _0x4aca12 = function () {
      var _0x339853 = process.hrtime();
      return _0x339853[0] * 1000 + _0x339853[1] / 1000000;
    };
  } else if (typeof dateNow !== "undefined") {
    _0x4aca12 = dateNow;
  } else {
    _0x4aca12 = function () {
      return performance.now();
    };
  }
  function _0x3a5593(_0x1a7e07, _0x1179c0) {
    var _0x1d2764;
    if (_0x1a7e07 === 0) {
      _0x1d2764 = Date.now();
    } else if ((_0x1a7e07 === 1 || _0x1a7e07 === 4) && _0xe746a4) {
      _0x1d2764 = _0x4aca12();
    } else {
      _0xf13c3a(28);
      return -1;
    }
    _0x1b79ed[_0x1179c0 >> 2] = _0x1d2764 / 1000 | 0;
    _0x1b79ed[_0x1179c0 + 4 >> 2] = _0x1d2764 % 1000 * 1000 * 1000 | 0;
    return 0;
  }
  function _0x4d7467(_0x8b25ec, _0x320f47) {
    return _0x8b25ec - _0x320f47;
  }
  function _0x5111c6(_0x3db4ce) {}
  function _0x2cdf82() {
    return 0;
  }
  function _0x2c67b1(_0x257cf4, _0x76fb8c) {}
  function _0x17203b(_0x3dbda9, _0x2aca2e) {
    return 0;
  }
  var _0x49792f = [];
  function _0x3b9c3d(_0x216fe3, _0x1a3cc3) {
    _0x49792f.length = 0;
    var _0x2df3f2;
    _0x1a3cc3 >>= 2;
    while (_0x2df3f2 = _0x2c14c3[_0x216fe3++]) {
      var _0x1eda8e = _0x2df3f2 < 105;
      if (_0x1eda8e && _0x1a3cc3 & 1) {
        _0x1a3cc3++;
      }
      _0x49792f.push(_0x1eda8e ? _0x36c943[_0x1a3cc3++ >> 1] : _0x1b79ed[_0x1a3cc3]);
      ++_0x1a3cc3;
    }
    return _0x49792f;
  }
  function _0x2cb172(_0x427de7, _0xdca5d9, _0x35de5a, _0x444e06) {
    var _0x1aaec8 = _0x3b9c3d(_0xdca5d9, _0x35de5a);
    return _0x58f91e[_0x427de7].apply(null, _0x1aaec8);
  }
  function _0x1de8f9(_0x93fe05, _0x1886e0, _0xcd8acf) {
    return _0x2cb172(_0x93fe05, _0x1886e0, _0xcd8acf, 1);
  }
  function _0x5e98f5(_0x3011ac, _0x43980c) {
    _0x3efa3d.mainLoop.timingMode = _0x3011ac;
    _0x3efa3d.mainLoop.timingValue = _0x43980c;
    if (!_0x3efa3d.mainLoop.func) {
      return 1;
    }
    if (!_0x3efa3d.mainLoop.running) {
      _0x3efa3d.mainLoop.running = true;
    }
    if (_0x3011ac == 0) {
      _0x3efa3d.mainLoop.scheduler = function _0x1896c6() {
        var _0x53fd55 = Math.max(0, _0x3efa3d.mainLoop.tickStartTime + _0x43980c - _0x4aca12()) | 0;
        setTimeout(_0x3efa3d.mainLoop.runner, _0x53fd55);
      };
      _0x3efa3d.mainLoop.method = "timeout";
    } else if (_0x3011ac == 1) {
      _0x3efa3d.mainLoop.scheduler = function _0x3f7133() {
        _0x3efa3d.requestAnimationFrame(_0x3efa3d.mainLoop.runner);
      };
      _0x3efa3d.mainLoop.method = "rAF";
    } else if (_0x3011ac == 2) {
      if (typeof setImmediate === "undefined") {
        var _0xb92047 = [];
        var _0x507aca = "setimmediate";
        var _0x17a95b = function (_0x3635e0) {
          if (_0x3635e0.data === _0x507aca || _0x3635e0.data.target === _0x507aca) {
            _0x3635e0.stopPropagation();
            _0xb92047.shift()();
          }
        };
        addEventListener("message", _0x17a95b, true);
        setImmediate = function _0x52e241(_0x372674) {
          _0xb92047.push(_0x372674);
          if (_0x3f8eed) {
            if (_0x51dce1.setImmediates === undefined) {
              _0x51dce1.setImmediates = [];
            }
            _0x51dce1.setImmediates.push(_0x372674);
            postMessage({
              target: _0x507aca
            });
          } else {
            postMessage(_0x507aca, "*");
          }
        };
      }
      _0x3efa3d.mainLoop.scheduler = function _0x110919() {
        setImmediate(_0x3efa3d.mainLoop.runner);
      };
      _0x3efa3d.mainLoop.method = "immediate";
    }
    return 0;
  }
  function _0x4648e3(_0x4e4b70) {
    _0x510e65(_0x4e4b70);
  }
  function _0x4e2722() {
    if (!_0xf7d4bb()) {
      try {
        _0x4648e3(_0x119526);
      } catch (_0x439f20) {
        if (_0x439f20 instanceof _0x2182bf) {
          return;
        }
        throw _0x439f20;
      }
    }
  }
  function _0x48adff(_0x128dce, _0x2a9138, _0x4a04f3, _0x4e4de1, _0x217f13) {
    _0x441670(!_0x3efa3d.mainLoop.func, "emscripten_set_main_loop: there can only be one main loop function at once: call emscripten_cancel_main_loop to cancel the previous one before setting a new one with different parameters.");
    _0x3efa3d.mainLoop.func = _0x128dce;
    _0x3efa3d.mainLoop.arg = _0x4e4de1;
    var _0x2800be = _0x3efa3d.mainLoop.currentlyRunningMainloop;
    function _0x4bd3de() {
      if (_0x2800be < _0x3efa3d.mainLoop.currentlyRunningMainloop) {
        _0x4e2722();
        return false;
      }
      return true;
    }
    _0x3efa3d.mainLoop.running = false;
    _0x3efa3d.mainLoop.runner = function _0x4f57b4() {
      if (_0x23cc17) {
        return;
      }
      if (_0x3efa3d.mainLoop.queue.length > 0) {
        var _0x4795ee = Date.now();
        var _0x154fd0 = _0x3efa3d.mainLoop.queue.shift();
        _0x154fd0.func(_0x154fd0.arg);
        if (_0x3efa3d.mainLoop.remainingBlockers) {
          var _0xfb6da3 = _0x3efa3d.mainLoop.remainingBlockers;
          var _0x51de78 = _0xfb6da3 % 1 == 0 ? _0xfb6da3 - 1 : Math.floor(_0xfb6da3);
          if (_0x154fd0.counted) {
            _0x3efa3d.mainLoop.remainingBlockers = _0x51de78;
          } else {
            _0x51de78 = _0x51de78 + 0.5;
            _0x3efa3d.mainLoop.remainingBlockers = (_0xfb6da3 * 8 + _0x51de78) / 9;
          }
        }
        console.log("main loop blocker \"" + _0x154fd0.name + "\" took " + (Date.now() - _0x4795ee) + " ms");
        _0x3efa3d.mainLoop.updateStatus();
        if (!_0x4bd3de()) {
          return;
        }
        setTimeout(_0x3efa3d.mainLoop.runner, 0);
        return;
      }
      if (!_0x4bd3de()) {
        return;
      }
      _0x3efa3d.mainLoop.currentFrameNumber = _0x3efa3d.mainLoop.currentFrameNumber + 1 | 0;
      if (_0x3efa3d.mainLoop.timingMode == 1 && _0x3efa3d.mainLoop.timingValue > 1 && _0x3efa3d.mainLoop.currentFrameNumber % _0x3efa3d.mainLoop.timingValue != 0) {
        _0x3efa3d.mainLoop.scheduler();
        return;
      } else if (_0x3efa3d.mainLoop.timingMode == 0) {
        _0x3efa3d.mainLoop.tickStartTime = _0x4aca12();
      }
      _0x166a8d.newRenderingFrameStarted();
      _0x3efa3d.mainLoop.runIter(_0x128dce);
      if (!_0x4bd3de()) {
        return;
      }
      if (typeof SDL === "object" && SDL.audio && SDL.audio.queueNewAudioData) {
        SDL.audio.queueNewAudioData();
      }
      _0x3efa3d.mainLoop.scheduler();
    };
    if (!_0x217f13) {
      if (_0x2a9138 && _0x2a9138 > 0) {
        _0x5e98f5(0, 1000 / _0x2a9138);
      } else {
        _0x5e98f5(1, 1);
      }
      _0x3efa3d.mainLoop.scheduler();
    }
    if (_0x4a04f3) {
      throw "unwind";
    }
  }
  function _0x30f506(_0x417828, _0x3b4d83) {
    if (_0x23cc17) {
      return;
    }
    if (_0x3b4d83) {
      _0x417828();
      return;
    }
    try {
      _0x417828();
    } catch (_0x5063c0) {
      if (_0x5063c0 instanceof _0x2182bf) {
        return;
      } else if (_0x5063c0 !== "unwind") {
        if (_0x5063c0 && typeof _0x5063c0 === "object" && _0x5063c0.stack) {
          _0x235a52("exception thrown: " + [_0x5063c0, _0x5063c0.stack]);
        }
        throw _0x5063c0;
      }
    }
  }
  var _0x3efa3d = {
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
        _0x3efa3d.mainLoop.scheduler = null;
        _0x3efa3d.mainLoop.currentlyRunningMainloop++;
      },
      resume: function () {
        _0x3efa3d.mainLoop.currentlyRunningMainloop++;
        var _0xe19b91 = _0x3efa3d.mainLoop.timingMode;
        var _0x4157fa = _0x3efa3d.mainLoop.timingValue;
        var _0x52ac00 = _0x3efa3d.mainLoop.func;
        _0x3efa3d.mainLoop.func = null;
        _0x48adff(_0x52ac00, 0, false, _0x3efa3d.mainLoop.arg, true);
        _0x5e98f5(_0xe19b91, _0x4157fa);
        _0x3efa3d.mainLoop.scheduler();
      },
      updateStatus: function () {
        if (_0x51dce1.setStatus) {
          var _0x24c71e = _0x51dce1.statusMessage || "Please wait...";
          var _0x1609c5 = _0x3efa3d.mainLoop.remainingBlockers;
          var _0x1d88ec = _0x3efa3d.mainLoop.expectedBlockers;
          if (_0x1609c5) {
            if (_0x1609c5 < _0x1d88ec) {
              _0x51dce1.setStatus(_0x24c71e + " (" + (_0x1d88ec - _0x1609c5) + "/" + _0x1d88ec + ")");
            } else {
              _0x51dce1.setStatus(_0x24c71e);
            }
          } else {
            _0x51dce1.setStatus("");
          }
        }
      },
      runIter: function (_0x5878cb) {
        if (_0x23cc17) {
          return;
        }
        if (_0x51dce1.preMainLoop) {
          var _0x1031e0 = _0x51dce1.preMainLoop();
          if (_0x1031e0 === false) {
            return;
          }
        }
        _0x30f506(_0x5878cb);
        if (_0x51dce1.postMainLoop) {
          _0x51dce1.postMainLoop();
        }
      }
    },
    isFullscreen: false,
    pointerLock: false,
    moduleContextCreatedCallbacks: [],
    workers: [],
    init: function () {
      if (!_0x51dce1.preloadPlugins) {
        _0x51dce1.preloadPlugins = [];
      }
      if (_0x3efa3d.initted) {
        return;
      }
      _0x3efa3d.initted = true;
      try {
        new Blob();
        _0x3efa3d.hasBlobConstructor = true;
      } catch (_0x3e3591) {
        _0x3efa3d.hasBlobConstructor = false;
        console.log("warning: no blob constructor, cannot create blobs with mimetypes");
      }
      _0x3efa3d.BlobBuilder = typeof MozBlobBuilder != "undefined" ? MozBlobBuilder : typeof WebKitBlobBuilder != "undefined" ? WebKitBlobBuilder : !_0x3efa3d.hasBlobConstructor ? console.log("warning: no BlobBuilder") : null;
      _0x3efa3d.URLObject = typeof window != "undefined" ? window.URL ? window.URL : window.webkitURL : undefined;
      if (!_0x51dce1.noImageDecoding && typeof _0x3efa3d.URLObject === "undefined") {
        console.log("warning: Browser does not support creating object URLs. Built-in browser image decoding will not be available.");
        _0x51dce1.noImageDecoding = true;
      }
      var _0x1b4281 = {};
      _0x1b4281.canHandle = function _0x4c6e55(_0x3dc5e4) {
        return !_0x51dce1.noImageDecoding && /\.(jpg|jpeg|png|bmp)$/i.test(_0x3dc5e4);
      };
      _0x1b4281.handle = function _0xa9be84(_0x4ca0c6, _0x4cb452, _0x4b412e, _0x4b3b48) {
        var _0x7dbff7 = null;
        if (_0x3efa3d.hasBlobConstructor) {
          try {
            _0x7dbff7 = new Blob([_0x4ca0c6], {
              type: _0x3efa3d.getMimetype(_0x4cb452)
            });
            if (_0x7dbff7.size !== _0x4ca0c6.length) {
              _0x7dbff7 = new Blob([new Uint8Array(_0x4ca0c6).buffer], {
                type: _0x3efa3d.getMimetype(_0x4cb452)
              });
            }
          } catch (_0xf9901f) {
            _0x339557("Blob constructor present but fails: " + _0xf9901f + "; falling back to blob builder");
          }
        }
        if (!_0x7dbff7) {
          var _0x8a53f9 = new _0x3efa3d.BlobBuilder();
          _0x8a53f9.append(new Uint8Array(_0x4ca0c6).buffer);
          _0x7dbff7 = _0x8a53f9.getBlob();
        }
        var _0x24d440 = _0x3efa3d.URLObject.createObjectURL(_0x7dbff7);
        var _0x371573 = new Image();
        _0x371573.onload = function _0x425914() {
          _0x441670(_0x371573.complete, "Image " + _0x4cb452 + " could not be decoded");
          var _0x1dad4d = document.createElement("canvas");
          _0x1dad4d.width = _0x371573.width;
          _0x1dad4d.height = _0x371573.height;
          var _0x155a10 = _0x1dad4d.getContext("2d");
          _0x155a10.drawImage(_0x371573, 0, 0);
          _0x51dce1.preloadedImages[_0x4cb452] = _0x1dad4d;
          _0x3efa3d.URLObject.revokeObjectURL(_0x24d440);
          if (_0x4b412e) {
            _0x4b412e(_0x4ca0c6);
          }
        };
        _0x371573.onerror = function _0x1a4e5(_0xf73e04) {
          console.log("Image " + _0x24d440 + " could not be decoded");
          if (_0x4b3b48) {
            _0x4b3b48();
          }
        };
        _0x371573.src = _0x24d440;
      };
      _0x51dce1.preloadPlugins.push(_0x1b4281);
      var _0x27d760 = {};
      _0x27d760.canHandle = function _0x5e0dcb(_0x3eda5d) {
        return !_0x51dce1.noAudioDecoding && _0x3eda5d.substr(-4) in {
          ".ogg": 1,
          ".wav": 1,
          ".mp3": 1
        };
      };
      _0x27d760.handle = function _0x446399(_0x284a16, _0x5187a8, _0x37b03a, _0x211d44) {
        var _0x3f8890 = false;
        function _0x3b3213(_0x5d0b49) {
          if (_0x3f8890) {
            return;
          }
          _0x3f8890 = true;
          _0x51dce1.preloadedAudios[_0x5187a8] = _0x5d0b49;
          if (_0x37b03a) {
            _0x37b03a(_0x284a16);
          }
        }
        function _0x4c2785() {
          if (_0x3f8890) {
            return;
          }
          _0x3f8890 = true;
          _0x51dce1.preloadedAudios[_0x5187a8] = new Audio();
          if (_0x211d44) {
            _0x211d44();
          }
        }
        if (_0x3efa3d.hasBlobConstructor) {
          try {
            var _0x206b5a = new Blob([_0x284a16], {
              type: _0x3efa3d.getMimetype(_0x5187a8)
            });
          } catch (_0x24c9a8) {
            return _0x4c2785();
          }
          var _0xac481b = _0x3efa3d.URLObject.createObjectURL(_0x206b5a);
          var _0x4a0c13 = new Audio();
          _0x4a0c13.addEventListener("canplaythrough", function () {
            _0x3b3213(_0x4a0c13);
          }, false);
          _0x4a0c13.onerror = function _0x6679cb(_0x1a8497) {
            if (_0x3f8890) {
              return;
            }
            console.log("warning: browser could not fully decode audio " + _0x5187a8 + ", trying slower base64 approach");
            function _0x2fea58(_0x19512f) {
              var _0x18e212 = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/";
              var _0x1d5991 = "=";
              var _0x32fcae = "";
              var _0x46694c = 0;
              var _0x29af33 = 0;
              for (var _0x4b37cc = 0; _0x4b37cc < _0x19512f.length; _0x4b37cc++) {
                _0x46694c = _0x46694c << 8 | _0x19512f[_0x4b37cc];
                _0x29af33 += 8;
                while (_0x29af33 >= 6) {
                  var _0x308224 = _0x46694c >> _0x29af33 - 6 & 63;
                  _0x29af33 -= 6;
                  _0x32fcae += _0x18e212[_0x308224];
                }
              }
              if (_0x29af33 == 2) {
                _0x32fcae += _0x18e212[(_0x46694c & 3) << 4];
                _0x32fcae += _0x1d5991 + _0x1d5991;
              } else if (_0x29af33 == 4) {
                _0x32fcae += _0x18e212[(_0x46694c & 15) << 2];
                _0x32fcae += _0x1d5991;
              }
              return _0x32fcae;
            }
            _0x4a0c13.src = "data:audio/x-" + _0x5187a8.substr(-3) + ";base64," + _0x2fea58(_0x284a16);
            _0x3b3213(_0x4a0c13);
          };
          _0x4a0c13.src = _0xac481b;
          _0x3efa3d.safeSetTimeout(function () {
            _0x3b3213(_0x4a0c13);
          }, 10000);
        } else {
          return _0x4c2785();
        }
      };
      _0x51dce1.preloadPlugins.push(_0x27d760);
      function _0x475a30() {
        _0x3efa3d.pointerLock = document.pointerLockElement === _0x51dce1.canvas || document.mozPointerLockElement === _0x51dce1.canvas || document.webkitPointerLockElement === _0x51dce1.canvas || document.msPointerLockElement === _0x51dce1.canvas;
      }
      var _0x43e543 = _0x51dce1.canvas;
      if (_0x43e543) {
        _0x43e543.requestPointerLock = _0x43e543.requestPointerLock || _0x43e543.mozRequestPointerLock || _0x43e543.webkitRequestPointerLock || _0x43e543.msRequestPointerLock || function () {};
        _0x43e543.exitPointerLock = document.exitPointerLock || document.mozExitPointerLock || document.webkitExitPointerLock || document.msExitPointerLock || function () {};
        _0x43e543.exitPointerLock = _0x43e543.exitPointerLock.bind(document);
        document.addEventListener("pointerlockchange", _0x475a30, false);
        document.addEventListener("mozpointerlockchange", _0x475a30, false);
        document.addEventListener("webkitpointerlockchange", _0x475a30, false);
        document.addEventListener("mspointerlockchange", _0x475a30, false);
        if (_0x51dce1.elementPointerLock) {
          _0x43e543.addEventListener("click", function (_0x1366aa) {
            if (!_0x3efa3d.pointerLock && _0x51dce1.canvas.requestPointerLock) {
              _0x51dce1.canvas.requestPointerLock();
              _0x1366aa.preventDefault();
            }
          }, false);
        }
      }
    },
    createContext: function (_0x581680, _0x2f9946, _0xa16a7f, _0x14cfbc) {
      if (_0x2f9946 && _0x51dce1.ctx && _0x581680 == _0x51dce1.canvas) {
        return _0x51dce1.ctx;
      }
      var _0x5c4422;
      var _0x2b47d0;
      if (_0x2f9946) {
        var _0xf6ce6b = {
          antialias: false,
          alpha: false,
          majorVersion: typeof WebGL2RenderingContext !== "undefined" ? 2 : 1
        };
        if (_0x14cfbc) {
          for (var _0x1e2d0e in _0x14cfbc) {
            _0xf6ce6b[_0x1e2d0e] = _0x14cfbc[_0x1e2d0e];
          }
        }
        if (typeof _0x166a8d !== "undefined") {
          _0x2b47d0 = _0x166a8d.createContext(_0x581680, _0xf6ce6b);
          if (_0x2b47d0) {
            _0x5c4422 = _0x166a8d.getContext(_0x2b47d0).GLctx;
          }
        }
      } else {
        _0x5c4422 = _0x581680.getContext("2d");
      }
      if (!_0x5c4422) {
        return null;
      }
      if (_0xa16a7f) {
        if (!_0x2f9946) {
          _0x441670(typeof _0x1df95f === "undefined", "cannot set in module if GLctx is used, but we are a non-GL context that would replace it");
        }
        _0x51dce1.ctx = _0x5c4422;
        if (_0x2f9946) {
          _0x166a8d.makeContextCurrent(_0x2b47d0);
        }
        _0x51dce1.useWebGL = _0x2f9946;
        _0x3efa3d.moduleContextCreatedCallbacks.forEach(function (_0x4f9737) {
          _0x4f9737();
        });
        _0x3efa3d.init();
      }
      return _0x5c4422;
    },
    destroyContext: function (_0x5281c, _0xad60da, _0x1dcd73) {},
    fullscreenHandlersInstalled: false,
    lockPointer: undefined,
    resizeCanvas: undefined,
    requestFullscreen: function (_0x36bc9f, _0x17e56b) {
      _0x3efa3d.lockPointer = _0x36bc9f;
      _0x3efa3d.resizeCanvas = _0x17e56b;
      if (typeof _0x3efa3d.lockPointer === "undefined") {
        _0x3efa3d.lockPointer = true;
      }
      if (typeof _0x3efa3d.resizeCanvas === "undefined") {
        _0x3efa3d.resizeCanvas = false;
      }
      var _0x4a1ab7 = _0x51dce1.canvas;
      function _0x3c39cd() {
        _0x3efa3d.isFullscreen = false;
        var _0x2c9eec = _0x4a1ab7.parentNode;
        if ((document.fullscreenElement || document.mozFullScreenElement || document.msFullscreenElement || document.webkitFullscreenElement || document.webkitCurrentFullScreenElement) === _0x2c9eec) {
          _0x4a1ab7.exitFullscreen = _0x3efa3d.exitFullscreen;
          if (_0x3efa3d.lockPointer) {
            _0x4a1ab7.requestPointerLock();
          }
          _0x3efa3d.isFullscreen = true;
          if (_0x3efa3d.resizeCanvas) {
            _0x3efa3d.setFullscreenCanvasSize();
          } else {
            _0x3efa3d.updateCanvasDimensions(_0x4a1ab7);
          }
        } else {
          _0x2c9eec.parentNode.insertBefore(_0x4a1ab7, _0x2c9eec);
          _0x2c9eec.parentNode.removeChild(_0x2c9eec);
          if (_0x3efa3d.resizeCanvas) {
            _0x3efa3d.setWindowedCanvasSize();
          } else {
            _0x3efa3d.updateCanvasDimensions(_0x4a1ab7);
          }
        }
        if (_0x51dce1.onFullScreen) {
          _0x51dce1.onFullScreen(_0x3efa3d.isFullscreen);
        }
        if (_0x51dce1.onFullscreen) {
          _0x51dce1.onFullscreen(_0x3efa3d.isFullscreen);
        }
      }
      if (!_0x3efa3d.fullscreenHandlersInstalled) {
        _0x3efa3d.fullscreenHandlersInstalled = true;
        document.addEventListener("fullscreenchange", _0x3c39cd, false);
        document.addEventListener("mozfullscreenchange", _0x3c39cd, false);
        document.addEventListener("webkitfullscreenchange", _0x3c39cd, false);
        document.addEventListener("MSFullscreenChange", _0x3c39cd, false);
      }
      var _0x4df852 = document.createElement("div");
      _0x4a1ab7.parentNode.insertBefore(_0x4df852, _0x4a1ab7);
      _0x4df852.appendChild(_0x4a1ab7);
      _0x4df852.requestFullscreen = _0x4df852.requestFullscreen || _0x4df852.mozRequestFullScreen || _0x4df852.msRequestFullscreen || (_0x4df852.webkitRequestFullscreen ? function () {
        _0x4df852.webkitRequestFullscreen(Element.ALLOW_KEYBOARD_INPUT);
      } : null) || (_0x4df852.webkitRequestFullScreen ? function () {
        _0x4df852.webkitRequestFullScreen(Element.ALLOW_KEYBOARD_INPUT);
      } : null);
      _0x4df852.requestFullscreen();
    },
    exitFullscreen: function () {
      if (!_0x3efa3d.isFullscreen) {
        return false;
      }
      var _0x59492b = document.exitFullscreen || document.cancelFullScreen || document.mozCancelFullScreen || document.msExitFullscreen || document.webkitCancelFullScreen || function () {};
      _0x59492b.apply(document, []);
      return true;
    },
    nextRAF: 0,
    fakeRequestAnimationFrame: function (_0x54cc73) {
      var _0x36384c = Date.now();
      if (_0x3efa3d.nextRAF === 0) {
        _0x3efa3d.nextRAF = _0x36384c + 1000 / 60;
      } else {
        while (_0x36384c + 2 >= _0x3efa3d.nextRAF) {
          _0x3efa3d.nextRAF += 1000 / 60;
        }
      }
      var _0x58eec8 = Math.max(_0x3efa3d.nextRAF - _0x36384c, 0);
      setTimeout(_0x54cc73, _0x58eec8);
    },
    requestAnimationFrame: function (_0x584341) {
      if (typeof requestAnimationFrame === "function") {
        requestAnimationFrame(_0x584341);
        return;
      }
      var _0x1c45fb = _0x3efa3d.fakeRequestAnimationFrame;
      _0x1c45fb(_0x584341);
    },
    safeRequestAnimationFrame: function (_0x3c03d6) {
      return _0x3efa3d.requestAnimationFrame(function () {
        _0x30f506(_0x3c03d6);
      });
    },
    safeSetTimeout: function (_0xf81e9a, _0x1b0b67) {
      return setTimeout(function () {
        _0x30f506(_0xf81e9a);
      }, _0x1b0b67);
    },
    getMimetype: function (_0x306c71) {
      return {
        jpg: "image/jpeg",
        jpeg: "image/jpeg",
        png: "image/png",
        bmp: "image/bmp",
        ogg: "audio/ogg",
        wav: "audio/wav",
        mp3: "audio/mpeg"
      }[_0x306c71.substr(_0x306c71.lastIndexOf(".") + 1)];
    },
    getUserMedia: function (_0x5505d1) {
      if (!window.getUserMedia) {
        window.getUserMedia = navigator.getUserMedia || navigator.mozGetUserMedia;
      }
      window.getUserMedia(_0x5505d1);
    },
    getMovementX: function (_0x128b07) {
      return _0x128b07.movementX || _0x128b07.mozMovementX || _0x128b07.webkitMovementX || 0;
    },
    getMovementY: function (_0x462223) {
      return _0x462223.movementY || _0x462223.mozMovementY || _0x462223.webkitMovementY || 0;
    },
    getMouseWheelDelta: function (_0xfa083e) {
      var _0x506cc9 = 0;
      switch (_0xfa083e.type) {
        case "DOMMouseScroll":
          _0x506cc9 = _0xfa083e.detail / 3;
          break;
        case "mousewheel":
          _0x506cc9 = _0xfa083e.wheelDelta / 120;
          break;
        case "wheel":
          _0x506cc9 = _0xfa083e.deltaY;
          switch (_0xfa083e.deltaMode) {
            case 0:
              _0x506cc9 /= 100;
              break;
            case 1:
              _0x506cc9 /= 3;
              break;
            case 2:
              _0x506cc9 *= 80;
              break;
            default:
              throw "unrecognized mouse wheel delta mode: " + _0xfa083e.deltaMode;
          }
          break;
        default:
          throw "unrecognized mouse wheel event: " + _0xfa083e.type;
      }
      return _0x506cc9;
    },
    mouseX: 0,
    mouseY: 0,
    mouseMovementX: 0,
    mouseMovementY: 0,
    touches: {},
    lastTouches: {},
    calculateMouseEvent: function (_0x2f2add) {
      if (_0x3efa3d.pointerLock) {
        if (_0x2f2add.type != "mousemove" && "mozMovementX" in _0x2f2add) {
          _0x3efa3d.mouseMovementX = _0x3efa3d.mouseMovementY = 0;
        } else {
          _0x3efa3d.mouseMovementX = _0x3efa3d.getMovementX(_0x2f2add);
          _0x3efa3d.mouseMovementY = _0x3efa3d.getMovementY(_0x2f2add);
        }
        if (typeof SDL != "undefined") {
          _0x3efa3d.mouseX = SDL.mouseX + _0x3efa3d.mouseMovementX;
          _0x3efa3d.mouseY = SDL.mouseY + _0x3efa3d.mouseMovementY;
        } else {
          _0x3efa3d.mouseX += _0x3efa3d.mouseMovementX;
          _0x3efa3d.mouseY += _0x3efa3d.mouseMovementY;
        }
      } else {
        var _0x2dbbda = _0x51dce1.canvas.getBoundingClientRect();
        var _0x390da8 = _0x51dce1.canvas.width;
        var _0x30e97d = _0x51dce1.canvas.height;
        var _0x4a4126 = typeof window.scrollX !== "undefined" ? window.scrollX : window.pageXOffset;
        var _0x59881a = typeof window.scrollY !== "undefined" ? window.scrollY : window.pageYOffset;
        if (_0x2f2add.type === "touchstart" || _0x2f2add.type === "touchend" || _0x2f2add.type === "touchmove") {
          var _0x3938db = _0x2f2add.touch;
          if (_0x3938db === undefined) {
            return;
          }
          var _0x512a85 = _0x3938db.pageX - (_0x4a4126 + _0x2dbbda.left);
          var _0x43ba84 = _0x3938db.pageY - (_0x59881a + _0x2dbbda.top);
          _0x512a85 = _0x512a85 * (_0x390da8 / _0x2dbbda.width);
          _0x43ba84 = _0x43ba84 * (_0x30e97d / _0x2dbbda.height);
          var _0x60126f = {
            x: _0x512a85,
            y: _0x43ba84
          };
          if (_0x2f2add.type === "touchstart") {
            _0x3efa3d.lastTouches[_0x3938db.identifier] = _0x60126f;
            _0x3efa3d.touches[_0x3938db.identifier] = _0x60126f;
          } else if (_0x2f2add.type === "touchend" || _0x2f2add.type === "touchmove") {
            var _0x46bc0c = _0x3efa3d.touches[_0x3938db.identifier];
            if (!_0x46bc0c) {
              _0x46bc0c = _0x60126f;
            }
            _0x3efa3d.lastTouches[_0x3938db.identifier] = _0x46bc0c;
            _0x3efa3d.touches[_0x3938db.identifier] = _0x60126f;
          }
          return;
        }
        var _0x3880ae = _0x2f2add.pageX - (_0x4a4126 + _0x2dbbda.left);
        var _0x25e39c = _0x2f2add.pageY - (_0x59881a + _0x2dbbda.top);
        _0x3880ae = _0x3880ae * (_0x390da8 / _0x2dbbda.width);
        _0x25e39c = _0x25e39c * (_0x30e97d / _0x2dbbda.height);
        _0x3efa3d.mouseMovementX = _0x3880ae - _0x3efa3d.mouseX;
        _0x3efa3d.mouseMovementY = _0x25e39c - _0x3efa3d.mouseY;
        _0x3efa3d.mouseX = _0x3880ae;
        _0x3efa3d.mouseY = _0x25e39c;
      }
    },
    asyncLoad: function (_0x26f32d, _0x2bbe33, _0x47a41a, _0x40e315) {
      var _0xf7e52b = !_0x40e315 ? _0x5a5682("al " + _0x26f32d) : "";
      _0x46f8ca(_0x26f32d, function (_0x3bbb9c) {
        _0x441670(_0x3bbb9c, "Loading data file \"" + _0x26f32d + "\" failed (no arrayBuffer).");
        _0x2bbe33(new Uint8Array(_0x3bbb9c));
        if (_0xf7e52b) {
          _0xe5d65b(_0xf7e52b);
        }
      }, function (_0x5ae4a5) {
        if (_0x47a41a) {
          _0x47a41a();
        } else {
          throw "Loading data file \"" + _0x26f32d + "\" failed.";
        }
      });
      if (_0xf7e52b) {
        _0x3102c9(_0xf7e52b);
      }
    },
    resizeListeners: [],
    updateResizeListeners: function () {
      var _0x4e1f4a = _0x51dce1.canvas;
      _0x3efa3d.resizeListeners.forEach(function (_0x3c6154) {
        _0x3c6154(_0x4e1f4a.width, _0x4e1f4a.height);
      });
    },
    setCanvasSize: function (_0x38f819, _0x24fa82, _0x338a7a) {
      var _0x1213d8 = _0x51dce1.canvas;
      _0x3efa3d.updateCanvasDimensions(_0x1213d8, _0x38f819, _0x24fa82);
      if (!_0x338a7a) {
        _0x3efa3d.updateResizeListeners();
      }
    },
    windowedWidth: 0,
    windowedHeight: 0,
    setFullscreenCanvasSize: function () {
      if (typeof SDL != "undefined") {
        var _0x2429ba = _0x342aec[SDL.screen >> 2];
        _0x2429ba = _0x2429ba | 8388608;
        _0x1b79ed[SDL.screen >> 2] = _0x2429ba;
      }
      _0x3efa3d.updateCanvasDimensions(_0x51dce1.canvas);
      _0x3efa3d.updateResizeListeners();
    },
    setWindowedCanvasSize: function () {
      if (typeof SDL != "undefined") {
        var _0x2f41a5 = _0x342aec[SDL.screen >> 2];
        _0x2f41a5 = _0x2f41a5 & ~8388608;
        _0x1b79ed[SDL.screen >> 2] = _0x2f41a5;
      }
      _0x3efa3d.updateCanvasDimensions(_0x51dce1.canvas);
      _0x3efa3d.updateResizeListeners();
    },
    updateCanvasDimensions: function (_0x16552c, _0xe35ed0, _0x144f25) {
      if (_0xe35ed0 && _0x144f25) {
        _0x16552c.widthNative = _0xe35ed0;
        _0x16552c.heightNative = _0x144f25;
      } else {
        _0xe35ed0 = _0x16552c.widthNative;
        _0x144f25 = _0x16552c.heightNative;
      }
      var _0xf22c63 = _0xe35ed0;
      var _0x5aeb7a = _0x144f25;
      if (_0x51dce1.forcedAspectRatio && _0x51dce1.forcedAspectRatio > 0) {
        if (_0xf22c63 / _0x5aeb7a < _0x51dce1.forcedAspectRatio) {
          _0xf22c63 = Math.round(_0x5aeb7a * _0x51dce1.forcedAspectRatio);
        } else {
          _0x5aeb7a = Math.round(_0xf22c63 / _0x51dce1.forcedAspectRatio);
        }
      }
      if ((document.fullscreenElement || document.mozFullScreenElement || document.msFullscreenElement || document.webkitFullscreenElement || document.webkitCurrentFullScreenElement) === _0x16552c.parentNode && typeof screen != "undefined") {
        var _0x2e2cf7 = Math.min(screen.width / _0xf22c63, screen.height / _0x5aeb7a);
        _0xf22c63 = Math.round(_0xf22c63 * _0x2e2cf7);
        _0x5aeb7a = Math.round(_0x5aeb7a * _0x2e2cf7);
      }
      if (_0x3efa3d.resizeCanvas) {
        if (_0x16552c.width != _0xf22c63) {
          _0x16552c.width = _0xf22c63;
        }
        if (_0x16552c.height != _0x5aeb7a) {
          _0x16552c.height = _0x5aeb7a;
        }
        if (typeof _0x16552c.style != "undefined") {
          _0x16552c.style.removeProperty("width");
          _0x16552c.style.removeProperty("height");
        }
      } else {
        if (_0x16552c.width != _0xe35ed0) {
          _0x16552c.width = _0xe35ed0;
        }
        if (_0x16552c.height != _0x144f25) {
          _0x16552c.height = _0x144f25;
        }
        if (typeof _0x16552c.style != "undefined") {
          if (_0xf22c63 != _0xe35ed0 || _0x5aeb7a != _0x144f25) {
            _0x16552c.style.setProperty("width", _0xf22c63 + "px", "important");
            _0x16552c.style.setProperty("height", _0x5aeb7a + "px", "important");
          } else {
            _0x16552c.style.removeProperty("width");
            _0x16552c.style.removeProperty("height");
          }
        }
      }
    },
    wgetRequests: {},
    nextWgetRequestHandle: 0,
    getNextWgetRequestHandle: function () {
      var _0x46dc96 = _0x3efa3d.nextWgetRequestHandle;
      _0x3efa3d.nextWgetRequestHandle++;
      return _0x46dc96;
    }
  };
  function _0x1b130e() {
    _0x3efa3d.mainLoop.pause();
    _0x3efa3d.mainLoop.func = null;
  }
  function _0xbc26d9(_0x456bc8) {
    clearInterval(_0x456bc8);
  }
  var _0x3748c9 = {
    inEventHandler: 0,
    removeAllEventListeners: function () {
      for (var _0x518ebf = _0x3748c9.eventHandlers.length - 1; _0x518ebf >= 0; --_0x518ebf) {
        _0x3748c9._removeHandler(_0x518ebf);
      }
      _0x3748c9.eventHandlers = [];
      _0x3748c9.deferredCalls = [];
    },
    registerRemoveEventListeners: function () {
      if (!_0x3748c9.removeEventListenersRegistered) {
        _0x38b701.push(_0x3748c9.removeAllEventListeners);
        _0x3748c9.removeEventListenersRegistered = true;
      }
    },
    deferredCalls: [],
    deferCall: function (_0x4850db, _0x148639, _0x279d7a) {
      function _0x19b1a5(_0x161514, _0x2233c9) {
        if (_0x161514.length != _0x2233c9.length) {
          return false;
        }
        for (var _0x315dc0 in _0x161514) {
          if (_0x161514[_0x315dc0] != _0x2233c9[_0x315dc0]) {
            return false;
          }
        }
        return true;
      }
      for (var _0x4ed83c in _0x3748c9.deferredCalls) {
        var _0x10e06f = _0x3748c9.deferredCalls[_0x4ed83c];
        if (_0x10e06f.targetFunction == _0x4850db && _0x19b1a5(_0x10e06f.argsList, _0x279d7a)) {
          return;
        }
      }
      _0x3748c9.deferredCalls.push({
        targetFunction: _0x4850db,
        precedence: _0x148639,
        argsList: _0x279d7a
      });
      _0x3748c9.deferredCalls.sort(function (_0x10060e, _0x92064a) {
        return _0x10060e.precedence < _0x92064a.precedence;
      });
    },
    removeDeferredCalls: function (_0x433c05) {
      for (var _0x59fbf1 = 0; _0x59fbf1 < _0x3748c9.deferredCalls.length; ++_0x59fbf1) {
        if (_0x3748c9.deferredCalls[_0x59fbf1].targetFunction == _0x433c05) {
          _0x3748c9.deferredCalls.splice(_0x59fbf1, 1);
          --_0x59fbf1;
        }
      }
    },
    canPerformEventHandlerRequests: function () {
      return _0x3748c9.inEventHandler && _0x3748c9.currentEventHandler.allowsDeferredCalls;
    },
    runDeferredCalls: function () {
      if (!_0x3748c9.canPerformEventHandlerRequests()) {
        return;
      }
      for (var _0x2569ce = 0; _0x2569ce < _0x3748c9.deferredCalls.length; ++_0x2569ce) {
        var _0x5c5e01 = _0x3748c9.deferredCalls[_0x2569ce];
        _0x3748c9.deferredCalls.splice(_0x2569ce, 1);
        --_0x2569ce;
        _0x5c5e01.targetFunction.apply(null, _0x5c5e01.argsList);
      }
    },
    eventHandlers: [],
    removeAllHandlersOnTarget: function (_0x7d3d13, _0x1f27f2) {
      for (var _0x1e2aea = 0; _0x1e2aea < _0x3748c9.eventHandlers.length; ++_0x1e2aea) {
        if (_0x3748c9.eventHandlers[_0x1e2aea].target == _0x7d3d13 && (!_0x1f27f2 || _0x1f27f2 == _0x3748c9.eventHandlers[_0x1e2aea].eventTypeString)) {
          _0x3748c9._removeHandler(_0x1e2aea--);
        }
      }
    },
    _removeHandler: function (_0x3f993e) {
      var _0x318b61 = _0x3748c9.eventHandlers[_0x3f993e];
      _0x318b61.target.removeEventListener(_0x318b61.eventTypeString, _0x318b61.eventListenerFunc, _0x318b61.useCapture);
      _0x3748c9.eventHandlers.splice(_0x3f993e, 1);
    },
    registerOrRemoveHandler: function (_0x2e9af1) {
      var _0x2bdec1 = function _0x1679aa(_0x2feac3) {
        ++_0x3748c9.inEventHandler;
        _0x3748c9.currentEventHandler = _0x2e9af1;
        _0x3748c9.runDeferredCalls();
        _0x2e9af1.handlerFunc(_0x2feac3);
        _0x3748c9.runDeferredCalls();
        --_0x3748c9.inEventHandler;
      };
      if (_0x2e9af1.callbackfunc) {
        _0x2e9af1.eventListenerFunc = _0x2bdec1;
        _0x2e9af1.target.addEventListener(_0x2e9af1.eventTypeString, _0x2bdec1, _0x2e9af1.useCapture);
        _0x3748c9.eventHandlers.push(_0x2e9af1);
        _0x3748c9.registerRemoveEventListeners();
      } else {
        for (var _0x501879 = 0; _0x501879 < _0x3748c9.eventHandlers.length; ++_0x501879) {
          if (_0x3748c9.eventHandlers[_0x501879].target == _0x2e9af1.target && _0x3748c9.eventHandlers[_0x501879].eventTypeString == _0x2e9af1.eventTypeString) {
            _0x3748c9._removeHandler(_0x501879--);
          }
        }
      }
    },
    getNodeNameForTarget: function (_0x2776a2) {
      if (!_0x2776a2) {
        return "";
      }
      if (_0x2776a2 == window) {
        return "#window";
      }
      if (_0x2776a2 == screen) {
        return "#screen";
      }
      if (_0x2776a2 && _0x2776a2.nodeName) {
        return _0x2776a2.nodeName;
      } else {
        return "";
      }
    },
    fullscreenEnabled: function () {
      return document.fullscreenEnabled || document.webkitFullscreenEnabled;
    }
  };
  var _0x3e4cbf = {};
  function _0x4d660e(_0x67cae4) {
    if (_0x67cae4 > 2) {
      return _0x5ea6bb(_0x67cae4);
    } else {
      return _0x67cae4;
    }
  }
  var _0x566438 = [0, typeof document !== "undefined" ? document : 0, typeof window !== "undefined" ? window : 0];
  function _0x5c89b2(_0x2acdaf) {
    _0x2acdaf = _0x4d660e(_0x2acdaf);
    var _0x59bb47 = _0x566438[_0x2acdaf] || (typeof document !== "undefined" ? document.querySelector(_0x2acdaf) : undefined);
    return _0x59bb47;
  }
  function _0x370188(_0x1b642d) {
    return _0x5c89b2(_0x1b642d);
  }
  function _0x4db29d(_0x102a7a, _0x551559, _0x446031) {
    var _0x4d0253 = _0x370188(_0x102a7a);
    if (!_0x4d0253) {
      return -4;
    }
    _0x1b79ed[_0x551559 >> 2] = _0x4d0253.width;
    _0x1b79ed[_0x446031 >> 2] = _0x4d0253.height;
  }
  function _0x3b401e(_0x3739ef) {
    var _0x5d3c78 = _0x3e11a3();
    var _0x5a3ade = _0x5c3d23(8);
    var _0x2dd035 = _0x5a3ade + 4;
    var _0x4598e8 = _0x5c3d23(_0x3739ef.id.length + 1);
    _0x38fbc9(_0x3739ef.id, _0x4598e8, _0x3739ef.id.length + 1);
    var _0x36a247 = _0x4db29d(_0x4598e8, _0x5a3ade, _0x2dd035);
    var _0x2bc17e = [_0x1b79ed[_0x5a3ade >> 2], _0x1b79ed[_0x2dd035 >> 2]];
    _0x18d96d(_0x5d3c78);
    return _0x2bc17e;
  }
  function _0x10c2ea(_0x3d62f7, _0x2081e0, _0x32c9fb) {
    var _0x1e744a = _0x370188(_0x3d62f7);
    if (!_0x1e744a) {
      return -4;
    }
    _0x1e744a.width = _0x2081e0;
    _0x1e744a.height = _0x32c9fb;
    return 0;
  }
  function _0x4b2639(_0xb5369f, _0x4dbb4c, _0x21a303) {
    if (!_0xb5369f.controlTransferredOffscreen) {
      _0xb5369f.width = _0x4dbb4c;
      _0xb5369f.height = _0x21a303;
    } else {
      var _0x5a523d = _0x3e11a3();
      var _0x2939fa = _0x5c3d23(_0xb5369f.id.length + 1);
      _0x38fbc9(_0xb5369f.id, _0x2939fa, _0xb5369f.id.length + 1);
      _0x10c2ea(_0x2939fa, _0x4dbb4c, _0x21a303);
      _0x18d96d(_0x5a523d);
    }
  }
  function _0x452bb5(_0xdd06a8) {
    var _0x57003c = _0x3b401e(_0xdd06a8);
    var _0x17bbe5 = _0x57003c[0];
    var _0x4433cd = _0x57003c[1];
    var _0x2a228c = _0xdd06a8.style.width;
    var _0x545d74 = _0xdd06a8.style.height;
    var _0x55a5cd = _0xdd06a8.style.backgroundColor;
    var _0x437488 = document.body.style.backgroundColor;
    var _0x124af1 = _0xdd06a8.style.paddingLeft;
    var _0x5a6b23 = _0xdd06a8.style.paddingRight;
    var _0x3c040d = _0xdd06a8.style.paddingTop;
    var _0x352ef9 = _0xdd06a8.style.paddingBottom;
    var _0x465e9d = _0xdd06a8.style.marginLeft;
    var _0x40bd20 = _0xdd06a8.style.marginRight;
    var _0x2d0f68 = _0xdd06a8.style.marginTop;
    var _0x5df43e = _0xdd06a8.style.marginBottom;
    var _0x552115 = document.body.style.margin;
    var _0x5569b5 = document.documentElement.style.overflow;
    var _0x585a83 = document.body.scroll;
    var _0x1707e7 = _0xdd06a8.style.imageRendering;
    function _0x225a66() {
      var _0x47ef40 = document.fullscreenElement || document.webkitFullscreenElement || document.msFullscreenElement;
      if (!_0x47ef40) {
        document.removeEventListener("fullscreenchange", _0x225a66);
        document.removeEventListener("webkitfullscreenchange", _0x225a66);
        _0x4b2639(_0xdd06a8, _0x17bbe5, _0x4433cd);
        _0xdd06a8.style.width = _0x2a228c;
        _0xdd06a8.style.height = _0x545d74;
        _0xdd06a8.style.backgroundColor = _0x55a5cd;
        if (!_0x437488) {
          document.body.style.backgroundColor = "white";
        }
        document.body.style.backgroundColor = _0x437488;
        _0xdd06a8.style.paddingLeft = _0x124af1;
        _0xdd06a8.style.paddingRight = _0x5a6b23;
        _0xdd06a8.style.paddingTop = _0x3c040d;
        _0xdd06a8.style.paddingBottom = _0x352ef9;
        _0xdd06a8.style.marginLeft = _0x465e9d;
        _0xdd06a8.style.marginRight = _0x40bd20;
        _0xdd06a8.style.marginTop = _0x2d0f68;
        _0xdd06a8.style.marginBottom = _0x5df43e;
        document.body.style.margin = _0x552115;
        document.documentElement.style.overflow = _0x5569b5;
        document.body.scroll = _0x585a83;
        _0xdd06a8.style.imageRendering = _0x1707e7;
        if (_0xdd06a8.GLctxObject) {
          _0xdd06a8.GLctxObject.GLctx.viewport(0, 0, _0x17bbe5, _0x4433cd);
        }
        if (_0x3e4cbf.canvasResizedCallback) {
          (function (_0x57aa5b, _0x404620, _0x373a72) {
            return _0x3f85b1.apply(null, [_0x3e4cbf.canvasResizedCallback, _0x57aa5b, _0x404620, _0x373a72]);
          })(37, 0, _0x3e4cbf.canvasResizedCallbackUserData);
        }
      }
    }
    document.addEventListener("fullscreenchange", _0x225a66);
    document.addEventListener("webkitfullscreenchange", _0x225a66);
    return _0x225a66;
  }
  function _0x1446d1(_0x742dbf, _0x247e4a, _0x494e4b) {
    _0x742dbf.style.paddingLeft = _0x742dbf.style.paddingRight = _0x494e4b + "px";
    _0x742dbf.style.paddingTop = _0x742dbf.style.paddingBottom = _0x247e4a + "px";
  }
  function _0x1e976a(_0x49d432) {
    if (_0x566438.indexOf(_0x49d432) < 0) {
      return _0x49d432.getBoundingClientRect();
    } else {
      return {
        left: 0,
        top: 0
      };
    }
  }
  function _0x466e90(_0x4ca3c7, _0x21b054) {
    var _0x4c8021 = _0x452bb5(_0x4ca3c7);
    var _0x29f37c = _0x21b054.softFullscreen ? innerWidth : screen.width;
    var _0x5bfa85 = _0x21b054.softFullscreen ? innerHeight : screen.height;
    var _0x2e2048 = _0x1e976a(_0x4ca3c7);
    var _0x3d18d9 = _0x2e2048.width;
    var _0x21dd8a = _0x2e2048.height;
    var _0x267187 = _0x3b401e(_0x4ca3c7);
    var _0x24a82b = _0x267187[0];
    var _0x4f0b82 = _0x267187[1];
    if (_0x21b054.scaleMode == 3) {
      _0x1446d1(_0x4ca3c7, (_0x5bfa85 - _0x21dd8a) / 2, (_0x29f37c - _0x3d18d9) / 2);
      _0x29f37c = _0x3d18d9;
      _0x5bfa85 = _0x21dd8a;
    } else if (_0x21b054.scaleMode == 2) {
      if (_0x29f37c * _0x4f0b82 < _0x24a82b * _0x5bfa85) {
        var _0x42858d = _0x4f0b82 * _0x29f37c / _0x24a82b;
        _0x1446d1(_0x4ca3c7, (_0x5bfa85 - _0x42858d) / 2, 0);
        _0x5bfa85 = _0x42858d;
      } else {
        var _0x55e421 = _0x24a82b * _0x5bfa85 / _0x4f0b82;
        _0x1446d1(_0x4ca3c7, 0, (_0x29f37c - _0x55e421) / 2);
        _0x29f37c = _0x55e421;
      }
    }
    if (!_0x4ca3c7.style.backgroundColor) {
      _0x4ca3c7.style.backgroundColor = "black";
    }
    if (!document.body.style.backgroundColor) {
      document.body.style.backgroundColor = "black";
    }
    _0x4ca3c7.style.width = _0x29f37c + "px";
    _0x4ca3c7.style.height = _0x5bfa85 + "px";
    if (_0x21b054.filteringMode == 1) {
      _0x4ca3c7.style.imageRendering = "optimizeSpeed";
      _0x4ca3c7.style.imageRendering = "-moz-crisp-edges";
      _0x4ca3c7.style.imageRendering = "-o-crisp-edges";
      _0x4ca3c7.style.imageRendering = "-webkit-optimize-contrast";
      _0x4ca3c7.style.imageRendering = "optimize-contrast";
      _0x4ca3c7.style.imageRendering = "crisp-edges";
      _0x4ca3c7.style.imageRendering = "pixelated";
    }
    var _0x314f51 = _0x21b054.canvasResolutionScaleMode == 2 ? devicePixelRatio : 1;
    if (_0x21b054.canvasResolutionScaleMode != 0) {
      var _0x401e94 = _0x29f37c * _0x314f51 | 0;
      var _0x266faa = _0x5bfa85 * _0x314f51 | 0;
      _0x4b2639(_0x4ca3c7, _0x401e94, _0x266faa);
      if (_0x4ca3c7.GLctxObject) {
        _0x4ca3c7.GLctxObject.GLctx.viewport(0, 0, _0x401e94, _0x266faa);
      }
    }
    return _0x4c8021;
  }
  function _0x40e378(_0x118ec2, _0x73573c) {
    if (_0x73573c.scaleMode != 0 || _0x73573c.canvasResolutionScaleMode != 0) {
      _0x466e90(_0x118ec2, _0x73573c);
    }
    if (_0x118ec2.requestFullscreen) {
      _0x118ec2.requestFullscreen();
    } else if (_0x118ec2.webkitRequestFullscreen) {
      _0x118ec2.webkitRequestFullscreen(Element.ALLOW_KEYBOARD_INPUT);
    } else if (_0x3748c9.fullscreenEnabled()) {
      return -3;
    } else {
      return -1;
    }
    _0x3e4cbf = _0x73573c;
    if (_0x73573c.canvasResizedCallback) {
      (function (_0x5582f4, _0x17856a, _0x4d4f34) {
        return _0x3f85b1.apply(null, [_0x73573c.canvasResizedCallback, _0x5582f4, _0x17856a, _0x4d4f34]);
      })(37, 0, _0x73573c.canvasResizedCallbackUserData);
    }
    return 0;
  }
  function _0x1b2726() {
    if (!_0x3748c9.fullscreenEnabled()) {
      return -1;
    }
    _0x3748c9.removeDeferredCalls(_0x40e378);
    var _0x1e2296 = _0x566438[1];
    if (_0x1e2296.exitFullscreen) {
      if (_0x1e2296.fullscreenElement) {
        _0x1e2296.exitFullscreen();
      }
    } else if (_0x1e2296.webkitExitFullscreen) {
      if (_0x1e2296.webkitFullscreenElement) {
        _0x1e2296.webkitExitFullscreen();
      }
    } else {
      return -1;
    }
    return 0;
  }
  function _0x5d026d(_0x25e712) {
    if (_0x25e712.requestPointerLock) {
      _0x25e712.requestPointerLock();
    } else if (_0x25e712.msRequestPointerLock) {
      _0x25e712.msRequestPointerLock();
    } else if (document.body.requestPointerLock || document.body.msRequestPointerLock) {
      return -3;
    } else {
      return -1;
    }
    return 0;
  }
  function _0x3c5d83() {
    _0x3748c9.removeDeferredCalls(_0x5d026d);
    if (document.exitPointerLock) {
      document.exitPointerLock();
    } else if (document.msExitPointerLock) {
      document.msExitPointerLock();
    } else {
      return -1;
    }
    return 0;
  }
  function _0xbfe528(_0x448668) {
    var _0x1c92c6 = document.fullscreenElement || document.mozFullScreenElement || document.webkitFullscreenElement || document.msFullscreenElement;
    var _0xb4c377 = !!_0x1c92c6;
    _0x1b79ed[_0x448668 >> 2] = _0xb4c377;
    _0x1b79ed[_0x448668 + 4 >> 2] = _0x3748c9.fullscreenEnabled();
    var _0x53fba1 = _0xb4c377 ? _0x1c92c6 : _0x3748c9.previousFullscreenElement;
    var _0x24b2d6 = _0x3748c9.getNodeNameForTarget(_0x53fba1);
    var _0x56c3fc = _0x53fba1 && _0x53fba1.id ? _0x53fba1.id : "";
    _0x38fbc9(_0x24b2d6, _0x448668 + 8, 128);
    _0x38fbc9(_0x56c3fc, _0x448668 + 136, 128);
    _0x1b79ed[_0x448668 + 264 >> 2] = _0x53fba1 ? _0x53fba1.clientWidth : 0;
    _0x1b79ed[_0x448668 + 268 >> 2] = _0x53fba1 ? _0x53fba1.clientHeight : 0;
    _0x1b79ed[_0x448668 + 272 >> 2] = screen.width;
    _0x1b79ed[_0x448668 + 276 >> 2] = screen.height;
    if (_0xb4c377) {
      _0x3748c9.previousFullscreenElement = _0x1c92c6;
    }
  }
  function _0x5af4a1(_0x4e02cd) {
    if (!_0x3748c9.fullscreenEnabled()) {
      return -1;
    }
    _0xbfe528(_0x4e02cd);
    return 0;
  }
  function _0x14f72e(_0x185b32, _0x46a340) {
    _0x36c943[_0x185b32 >> 3] = _0x46a340.timestamp;
    for (var _0x280c10 = 0; _0x280c10 < _0x46a340.axes.length; ++_0x280c10) {
      _0x36c943[_0x185b32 + _0x280c10 * 8 + 16 >> 3] = _0x46a340.axes[_0x280c10];
    }
    for (var _0x280c10 = 0; _0x280c10 < _0x46a340.buttons.length; ++_0x280c10) {
      if (typeof _0x46a340.buttons[_0x280c10] === "object") {
        _0x36c943[_0x185b32 + _0x280c10 * 8 + 528 >> 3] = _0x46a340.buttons[_0x280c10].value;
      } else {
        _0x36c943[_0x185b32 + _0x280c10 * 8 + 528 >> 3] = _0x46a340.buttons[_0x280c10];
      }
    }
    for (var _0x280c10 = 0; _0x280c10 < _0x46a340.buttons.length; ++_0x280c10) {
      if (typeof _0x46a340.buttons[_0x280c10] === "object") {
        _0x1b79ed[_0x185b32 + _0x280c10 * 4 + 1040 >> 2] = _0x46a340.buttons[_0x280c10].pressed;
      } else {
        _0x1b79ed[_0x185b32 + _0x280c10 * 4 + 1040 >> 2] = _0x46a340.buttons[_0x280c10] == 1;
      }
    }
    _0x1b79ed[_0x185b32 + 1296 >> 2] = _0x46a340.connected;
    _0x1b79ed[_0x185b32 + 1300 >> 2] = _0x46a340.index;
    _0x1b79ed[_0x185b32 + 8 >> 2] = _0x46a340.axes.length;
    _0x1b79ed[_0x185b32 + 12 >> 2] = _0x46a340.buttons.length;
    _0x38fbc9(_0x46a340.id, _0x185b32 + 1304, 64);
    _0x38fbc9(_0x46a340.mapping, _0x185b32 + 1368, 64);
  }
  function _0x1e6ca7(_0x135e26, _0x3539cc) {
    if (_0x135e26 < 0 || _0x135e26 >= _0x3748c9.lastGamepadState.length) {
      return -5;
    }
    if (!_0x3748c9.lastGamepadState[_0x135e26]) {
      return -7;
    }
    _0x14f72e(_0x3539cc, _0x3748c9.lastGamepadState[_0x135e26]);
    return 0;
  }
  function _0x55f529() {
    return 2147483648;
  }
  function _0x4243b2() {
    return _0x3748c9.lastGamepadState.length;
  }
  function _0x45f319() {
    _0x3748c9.removeAllEventListeners();
  }
  function _0x5b380f(_0x39116f) {
    return !_0x166a8d.contexts[_0x39116f] || _0x166a8d.contexts[_0x39116f].GLctx.isContextLost();
  }
  function _0x4e82d5(_0x327784) {
    return _0x327784 < 0 || _0x327784 === 0 && 1 / _0x327784 === -Infinity;
  }
  function _0x1c91cf(_0x230b16, _0x252b8c) {
    return (_0x230b16 >>> 0) + _0x252b8c * 4294967296;
  }
  function _0x2c5fd7(_0x27767b, _0x312bd9) {
    return (_0x27767b >>> 0) + (_0x312bd9 >>> 0) * 4294967296;
  }
  function _0x4bf729(_0x1b1eb9, _0xc52f7c) {
    if (_0x1b1eb9 <= 0) {
      return _0x1b1eb9;
    }
    var _0x1b540f = _0xc52f7c <= 32 ? Math.abs(1 << _0xc52f7c - 1) : Math.pow(2, _0xc52f7c - 1);
    if (_0x1b1eb9 >= _0x1b540f && (_0xc52f7c <= 32 || _0x1b1eb9 > _0x1b540f)) {
      _0x1b1eb9 = _0x1b540f * -2 + _0x1b1eb9;
    }
    return _0x1b1eb9;
  }
  function _0x3152ca(_0x4ccbfc, _0x4cba7b) {
    if (_0x4ccbfc >= 0) {
      return _0x4ccbfc;
    }
    if (_0x4cba7b <= 32) {
      return Math.abs(1 << _0x4cba7b - 1) * 2 + _0x4ccbfc;
    } else {
      return Math.pow(2, _0x4cba7b) + _0x4ccbfc;
    }
  }
  function _0x14917f(_0x58da47, _0x3b3fa7) {
    var _0x40e260 = _0x58da47;
    var _0x3ef887 = _0x3b3fa7;
    function _0x35cb9e(_0x1ee14f, _0x3ab66c) {
      if (_0x3ab66c === "double" || _0x3ab66c === "i64") {
        if (_0x1ee14f & 7) {
          _0x1ee14f += 4;
        }
      } else {}
      return _0x1ee14f;
    }
    function _0x174175(_0x26ca90) {
      var _0x474736;
      _0x3ef887 = _0x35cb9e(_0x3ef887, _0x26ca90);
      if (_0x26ca90 === "double") {
        _0x474736 = _0x36c943[_0x3ef887 >> 3];
        _0x3ef887 += 8;
      } else if (_0x26ca90 == "i64") {
        _0x474736 = [_0x1b79ed[_0x3ef887 >> 2], _0x1b79ed[_0x3ef887 + 4 >> 2]];
        _0x3ef887 += 8;
      } else {
        _0x26ca90 = "i32";
        _0x474736 = _0x1b79ed[_0x3ef887 >> 2];
        _0x3ef887 += 4;
      }
      return _0x474736;
    }
    var _0x3771a5 = [];
    var _0x5d0656;
    var _0x361c65;
    var _0x22cc65;
    while (1) {
      var _0x52c340 = _0x40e260;
      _0x5d0656 = _0x18b38f[_0x40e260 >> 0];
      if (_0x5d0656 === 0) {
        break;
      }
      _0x361c65 = _0x18b38f[_0x40e260 + 1 >> 0];
      if (_0x5d0656 == 37) {
        var _0xec6166 = false;
        var _0x2b4489 = false;
        var _0x4fba4f = false;
        var _0x147bba = false;
        var _0x26652a = false;
        _0x15fc93: while (1) {
          switch (_0x361c65) {
            case 43:
              _0xec6166 = true;
              break;
            case 45:
              _0x2b4489 = true;
              break;
            case 35:
              _0x4fba4f = true;
              break;
            case 48:
              if (_0x147bba) {
                break _0x15fc93;
              } else {
                _0x147bba = true;
                break;
              }
            case 32:
              _0x26652a = true;
              break;
            default:
              break _0x15fc93;
          }
          _0x40e260++;
          _0x361c65 = _0x18b38f[_0x40e260 + 1 >> 0];
        }
        var _0x837c92 = 0;
        if (_0x361c65 == 42) {
          _0x837c92 = _0x174175("i32");
          _0x40e260++;
          _0x361c65 = _0x18b38f[_0x40e260 + 1 >> 0];
        } else {
          while (_0x361c65 >= 48 && _0x361c65 <= 57) {
            _0x837c92 = _0x837c92 * 10 + (_0x361c65 - 48);
            _0x40e260++;
            _0x361c65 = _0x18b38f[_0x40e260 + 1 >> 0];
          }
        }
        var _0x52612b = false;
        var _0x168eba = -1;
        if (_0x361c65 == 46) {
          _0x168eba = 0;
          _0x52612b = true;
          _0x40e260++;
          _0x361c65 = _0x18b38f[_0x40e260 + 1 >> 0];
          if (_0x361c65 == 42) {
            _0x168eba = _0x174175("i32");
            _0x40e260++;
          } else {
            while (1) {
              var _0x41f261 = _0x18b38f[_0x40e260 + 1 >> 0];
              if (_0x41f261 < 48 || _0x41f261 > 57) {
                break;
              }
              _0x168eba = _0x168eba * 10 + (_0x41f261 - 48);
              _0x40e260++;
            }
          }
          _0x361c65 = _0x18b38f[_0x40e260 + 1 >> 0];
        }
        if (_0x168eba < 0) {
          _0x168eba = 6;
          _0x52612b = false;
        }
        var _0x1166e0;
        switch (String.fromCharCode(_0x361c65)) {
          case "h":
            var _0x37d7a7 = _0x18b38f[_0x40e260 + 2 >> 0];
            if (_0x37d7a7 == 104) {
              _0x40e260++;
              _0x1166e0 = 1;
            } else {
              _0x1166e0 = 2;
            }
            break;
          case "l":
            var _0x37d7a7 = _0x18b38f[_0x40e260 + 2 >> 0];
            if (_0x37d7a7 == 108) {
              _0x40e260++;
              _0x1166e0 = 8;
            } else {
              _0x1166e0 = 4;
            }
            break;
          case "L":
          case "q":
          case "j":
            _0x1166e0 = 8;
            break;
          case "z":
          case "t":
          case "I":
            _0x1166e0 = 4;
            break;
          default:
            _0x1166e0 = null;
        }
        if (_0x1166e0) {
          _0x40e260++;
        }
        _0x361c65 = _0x18b38f[_0x40e260 + 1 >> 0];
        switch (String.fromCharCode(_0x361c65)) {
          case "d":
          case "i":
          case "u":
          case "o":
          case "x":
          case "X":
          case "p":
            {
              var _0x491d08 = _0x361c65 == 100 || _0x361c65 == 105;
              _0x1166e0 = _0x1166e0 || 4;
              _0x22cc65 = _0x174175("i" + _0x1166e0 * 8);
              var _0x3df0db;
              if (_0x1166e0 == 8) {
                _0x22cc65 = _0x361c65 == 117 ? _0x2c5fd7(_0x22cc65[0], _0x22cc65[1]) : _0x1c91cf(_0x22cc65[0], _0x22cc65[1]);
              }
              if (_0x1166e0 <= 4) {
                var _0x828e88 = Math.pow(256, _0x1166e0) - 1;
                _0x22cc65 = (_0x491d08 ? _0x4bf729 : _0x3152ca)(_0x22cc65 & _0x828e88, _0x1166e0 * 8);
              }
              var _0x25802a = Math.abs(_0x22cc65);
              var _0x20e465 = "";
              if (_0x361c65 == 100 || _0x361c65 == 105) {
                _0x3df0db = _0x4bf729(_0x22cc65, _0x1166e0 * 8, 1).toString(10);
              } else if (_0x361c65 == 117) {
                _0x3df0db = _0x3152ca(_0x22cc65, _0x1166e0 * 8, 1).toString(10);
                _0x22cc65 = Math.abs(_0x22cc65);
              } else if (_0x361c65 == 111) {
                _0x3df0db = (_0x4fba4f ? "0" : "") + _0x25802a.toString(8);
              } else if (_0x361c65 == 120 || _0x361c65 == 88) {
                _0x20e465 = _0x4fba4f && _0x22cc65 != 0 ? "0x" : "";
                if (_0x22cc65 < 0) {
                  _0x22cc65 = -_0x22cc65;
                  _0x3df0db = (_0x25802a - 1).toString(16);
                  var _0x1d10ae = [];
                  for (var _0x566c0c = 0; _0x566c0c < _0x3df0db.length; _0x566c0c++) {
                    _0x1d10ae.push((15 - parseInt(_0x3df0db[_0x566c0c], 16)).toString(16));
                  }
                  _0x3df0db = _0x1d10ae.join("");
                  while (_0x3df0db.length < _0x1166e0 * 2) {
                    _0x3df0db = "f" + _0x3df0db;
                  }
                } else {
                  _0x3df0db = _0x25802a.toString(16);
                }
                if (_0x361c65 == 88) {
                  _0x20e465 = _0x20e465.toUpperCase();
                  _0x3df0db = _0x3df0db.toUpperCase();
                }
              } else if (_0x361c65 == 112) {
                if (_0x25802a === 0) {
                  _0x3df0db = "(nil)";
                } else {
                  _0x20e465 = "0x";
                  _0x3df0db = _0x25802a.toString(16);
                }
              }
              if (_0x52612b) {
                while (_0x3df0db.length < _0x168eba) {
                  _0x3df0db = "0" + _0x3df0db;
                }
              }
              if (_0x22cc65 >= 0) {
                if (_0xec6166) {
                  _0x20e465 = "+" + _0x20e465;
                } else if (_0x26652a) {
                  _0x20e465 = " " + _0x20e465;
                }
              }
              if (_0x3df0db.charAt(0) == "-") {
                _0x20e465 = "-" + _0x20e465;
                _0x3df0db = _0x3df0db.substr(1);
              }
              while (_0x20e465.length + _0x3df0db.length < _0x837c92) {
                if (_0x2b4489) {
                  _0x3df0db += " ";
                } else if (_0x147bba) {
                  _0x3df0db = "0" + _0x3df0db;
                } else {
                  _0x20e465 = " " + _0x20e465;
                }
              }
              _0x3df0db = _0x20e465 + _0x3df0db;
              _0x3df0db.split("").forEach(function (_0x58c57b) {
                _0x3771a5.push(_0x58c57b.charCodeAt(0));
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
              _0x22cc65 = _0x174175("double");
              var _0x3df0db;
              if (isNaN(_0x22cc65)) {
                _0x3df0db = "nan";
                _0x147bba = false;
              } else if (!isFinite(_0x22cc65)) {
                _0x3df0db = (_0x22cc65 < 0 ? "-" : "") + "inf";
                _0x147bba = false;
              } else {
                var _0xdd12c3 = false;
                var _0x2fa74c = Math.min(_0x168eba, 20);
                if (_0x361c65 == 103 || _0x361c65 == 71) {
                  _0xdd12c3 = true;
                  _0x168eba = _0x168eba || 1;
                  var _0x33a568 = parseInt(_0x22cc65.toExponential(_0x2fa74c).split("e")[1], 10);
                  if (_0x168eba > _0x33a568 && _0x33a568 >= -4) {
                    _0x361c65 = (_0x361c65 == 103 ? "f" : "F").charCodeAt(0);
                    _0x168eba -= _0x33a568 + 1;
                  } else {
                    _0x361c65 = (_0x361c65 == 103 ? "e" : "E").charCodeAt(0);
                    _0x168eba--;
                  }
                  _0x2fa74c = Math.min(_0x168eba, 20);
                }
                if (_0x361c65 == 101 || _0x361c65 == 69) {
                  _0x3df0db = _0x22cc65.toExponential(_0x2fa74c);
                  if (/[eE][-+]\d$/.test(_0x3df0db)) {
                    _0x3df0db = _0x3df0db.slice(0, -1) + "0" + _0x3df0db.slice(-1);
                  }
                } else if (_0x361c65 == 102 || _0x361c65 == 70) {
                  _0x3df0db = _0x22cc65.toFixed(_0x2fa74c);
                  if (_0x22cc65 === 0 && _0x4e82d5(_0x22cc65)) {
                    _0x3df0db = "-" + _0x3df0db;
                  }
                }
                var _0x3d4729 = _0x3df0db.split("e");
                if (_0xdd12c3 && !_0x4fba4f) {
                  while (_0x3d4729[0].length > 1 && _0x3d4729[0].includes(".") && (_0x3d4729[0].slice(-1) == "0" || _0x3d4729[0].slice(-1) == ".")) {
                    _0x3d4729[0] = _0x3d4729[0].slice(0, -1);
                  }
                } else {
                  if (_0x4fba4f && _0x3df0db.indexOf(".") == -1) {
                    _0x3d4729[0] += ".";
                  }
                  while (_0x168eba > _0x2fa74c++) {
                    _0x3d4729[0] += "0";
                  }
                }
                _0x3df0db = _0x3d4729[0] + (_0x3d4729.length > 1 ? "e" + _0x3d4729[1] : "");
                if (_0x361c65 == 69) {
                  _0x3df0db = _0x3df0db.toUpperCase();
                }
                if (_0x22cc65 >= 0) {
                  if (_0xec6166) {
                    _0x3df0db = "+" + _0x3df0db;
                  } else if (_0x26652a) {
                    _0x3df0db = " " + _0x3df0db;
                  }
                }
              }
              while (_0x3df0db.length < _0x837c92) {
                if (_0x2b4489) {
                  _0x3df0db += " ";
                } else if (_0x147bba && (_0x3df0db[0] == "-" || _0x3df0db[0] == "+")) {
                  _0x3df0db = _0x3df0db[0] + "0" + _0x3df0db.slice(1);
                } else {
                  _0x3df0db = (_0x147bba ? "0" : " ") + _0x3df0db;
                }
              }
              if (_0x361c65 < 97) {
                _0x3df0db = _0x3df0db.toUpperCase();
              }
              _0x3df0db.split("").forEach(function (_0x2633f8) {
                _0x3771a5.push(_0x2633f8.charCodeAt(0));
              });
              break;
            }
          case "s":
            {
              var _0x398afa = _0x174175("i8*");
              var _0x3337e1 = _0x398afa ? _0x5e84a6(_0x398afa) : "(null)".length;
              if (_0x52612b) {
                _0x3337e1 = Math.min(_0x3337e1, _0x168eba);
              }
              if (!_0x2b4489) {
                while (_0x3337e1 < _0x837c92--) {
                  _0x3771a5.push(32);
                }
              }
              if (_0x398afa) {
                for (var _0x566c0c = 0; _0x566c0c < _0x3337e1; _0x566c0c++) {
                  _0x3771a5.push(_0x2c14c3[_0x398afa++ >> 0]);
                }
              } else {
                _0x3771a5 = _0x3771a5.concat(_0x3c066c("(null)".substr(0, _0x3337e1), true));
              }
              if (_0x2b4489) {
                while (_0x3337e1 < _0x837c92--) {
                  _0x3771a5.push(32);
                }
              }
              break;
            }
          case "c":
            {
              if (_0x2b4489) {
                _0x3771a5.push(_0x174175("i8"));
              }
              while (--_0x837c92 > 0) {
                _0x3771a5.push(32);
              }
              if (!_0x2b4489) {
                _0x3771a5.push(_0x174175("i8"));
              }
              break;
            }
          case "n":
            {
              var _0x207f71 = _0x174175("i32*");
              _0x1b79ed[_0x207f71 >> 2] = _0x3771a5.length;
              break;
            }
          case "%":
            {
              _0x3771a5.push(_0x5d0656);
              break;
            }
          default:
            {
              for (var _0x566c0c = _0x52c340; _0x566c0c < _0x40e260 + 2; _0x566c0c++) {
                _0x3771a5.push(_0x18b38f[_0x566c0c >> 0]);
              }
            }
        }
        _0x40e260 += 2;
      } else {
        _0x3771a5.push(_0x5d0656);
        _0x40e260 += 1;
      }
    }
    return _0x3771a5;
  }
  function _0x20146b(_0x147842) {
    if (!_0x147842 || !_0x147842.callee || !_0x147842.callee.name) {
      return [null, "", ""];
    }
    var _0x200218 = _0x147842.callee.toString();
    var _0x35d646 = _0x147842.callee.name;
    var _0x4f0b10 = "(";
    var _0x1b91c1 = true;
    for (var _0x5a6db1 in _0x147842) {
      var _0x5a5c5a = _0x147842[_0x5a6db1];
      if (!_0x1b91c1) {
        _0x4f0b10 += ", ";
      }
      _0x1b91c1 = false;
      if (typeof _0x5a5c5a === "number" || typeof _0x5a5c5a === "string") {
        _0x4f0b10 += _0x5a5c5a;
      } else {
        _0x4f0b10 += "(" + typeof _0x5a5c5a + ")";
      }
    }
    _0x4f0b10 += ")";
    var _0x495e9f = _0x147842.callee.caller;
    _0x147842 = _0x495e9f ? _0x495e9f.arguments : [];
    if (_0x1b91c1) {
      _0x4f0b10 = "";
    }
    return [_0x147842, _0x35d646, _0x4f0b10];
  }
  function _0x39989f(_0x1b6fb6) {
    var _0x291774 = _0x4640fc();
    var _0x75171 = _0x291774.lastIndexOf("_emscripten_log");
    var _0x5c48d9 = _0x291774.lastIndexOf("_emscripten_get_callstack");
    var _0x5a3fdb = _0x291774.indexOf("\n", Math.max(_0x75171, _0x5c48d9)) + 1;
    _0x291774 = _0x291774.slice(_0x5a3fdb);
    if (_0x1b6fb6 & 32) {
      _0x339557("EM_LOG_DEMANGLE is deprecated; ignoring");
    }
    if (_0x1b6fb6 & 8 && typeof emscripten_source_map === "undefined") {
      _0x339557("Source map information is not available, emscripten_log with EM_LOG_C_STACK will be ignored. Build with \"--pre-js $EMSCRIPTEN/src/emscripten-source-map.min.js\" linker flag to add source map loading to code.");
      _0x1b6fb6 ^= 8;
      _0x1b6fb6 |= 16;
    }
    var _0x282a34 = null;
    if (_0x1b6fb6 & 128) {
      _0x282a34 = _0x20146b(arguments);
      while (_0x282a34[1].includes("_emscripten_")) {
        _0x282a34 = _0x20146b(_0x282a34[0]);
      }
    }
    var _0x3ab1d0 = _0x291774.split("\n");
    _0x291774 = "";
    var _0x27c939 = new RegExp("\\s*(.*?)@(.*?):([0-9]+):([0-9]+)");
    var _0x19a447 = new RegExp("\\s*(.*?)@(.*):(.*)(:(.*))?");
    var _0x42cfea = new RegExp("\\s*at (.*?) \\((.*):(.*):(.*)\\)");
    for (var _0x1cba5a in _0x3ab1d0) {
      var _0x3ee735 = _0x3ab1d0[_0x1cba5a];
      var _0x30cc21 = "";
      var _0x560d7d = "";
      var _0xf1aa05 = 0;
      var _0x50d365 = 0;
      var _0x1d2c62 = _0x42cfea.exec(_0x3ee735);
      if (_0x1d2c62 && _0x1d2c62.length == 5) {
        _0x30cc21 = _0x1d2c62[1];
        _0x560d7d = _0x1d2c62[2];
        _0xf1aa05 = _0x1d2c62[3];
        _0x50d365 = _0x1d2c62[4];
      } else {
        _0x1d2c62 = _0x27c939.exec(_0x3ee735);
        if (!_0x1d2c62) {
          _0x1d2c62 = _0x19a447.exec(_0x3ee735);
        }
        if (_0x1d2c62 && _0x1d2c62.length >= 4) {
          _0x30cc21 = _0x1d2c62[1];
          _0x560d7d = _0x1d2c62[2];
          _0xf1aa05 = _0x1d2c62[3];
          _0x50d365 = _0x1d2c62[4] | 0;
        } else {
          _0x291774 += _0x3ee735 + "\n";
          continue;
        }
      }
      var _0x3f4d54 = false;
      if (_0x1b6fb6 & 8) {
        var _0x2bdbc4 = emscripten_source_map.originalPositionFor({
          line: _0xf1aa05,
          column: _0x50d365
        });
        _0x3f4d54 = _0x2bdbc4 && _0x2bdbc4.source;
        if (_0x3f4d54) {
          if (_0x1b6fb6 & 64) {
            _0x2bdbc4.source = _0x2bdbc4.source.substring(_0x2bdbc4.source.replace(/\\/g, "/").lastIndexOf("/") + 1);
          }
          _0x291774 += "    at " + _0x30cc21 + " (" + _0x2bdbc4.source + ":" + _0x2bdbc4.line + ":" + _0x2bdbc4.column + ")\n";
        }
      }
      if (_0x1b6fb6 & 16 || !_0x3f4d54) {
        if (_0x1b6fb6 & 64) {
          _0x560d7d = _0x560d7d.substring(_0x560d7d.replace(/\\/g, "/").lastIndexOf("/") + 1);
        }
        _0x291774 += (_0x3f4d54 ? "     = " + _0x30cc21 : "    at " + _0x30cc21) + " (" + _0x560d7d + ":" + _0xf1aa05 + ":" + _0x50d365 + ")\n";
      }
      if (_0x1b6fb6 & 128 && _0x282a34[0]) {
        if (_0x282a34[1] == _0x30cc21 && _0x282a34[2].length > 0) {
          _0x291774 = _0x291774.replace(/\s+$/, "");
          _0x291774 += " with values: " + _0x282a34[1] + _0x282a34[2] + "\n";
        }
        _0x282a34 = _0x20146b(_0x282a34[0]);
      }
    }
    _0x291774 = _0x291774.replace(/\s+$/, "");
    return _0x291774;
  }
  function _0x34794c(_0x513639, _0x32541d) {
    if (_0x513639 & 24) {
      _0x32541d = _0x32541d.replace(/\s+$/, "");
      _0x32541d += (_0x32541d.length > 0 ? "\n" : "") + _0x39989f(_0x513639);
    }
    if (_0x513639 & 1) {
      if (_0x513639 & 4) {
        console.error(_0x32541d);
      } else if (_0x513639 & 2) {
        console.warn(_0x32541d);
      } else if (_0x513639 & 512) {
        console.info(_0x32541d);
      } else if (_0x513639 & 256) {
        console.debug(_0x32541d);
      } else {
        console.log(_0x32541d);
      }
    } else if (_0x513639 & 6) {
      _0x235a52(_0x32541d);
    } else {
      _0xb399e9(_0x32541d);
    }
  }
  function _0xfd22eb(_0x44d44c, _0x39e2f8, _0x12a625) {
    var _0x60d221 = _0x14917f(_0x39e2f8, _0x12a625);
    var _0x2f5ce2 = _0x3f3e02(_0x60d221, 0);
    _0x34794c(_0x44d44c, _0x2f5ce2);
  }
  function _0x2f6b92(_0x2c0239, _0x2e1aa1) {
    _0x2517d0(_0x2c0239, _0x2e1aa1 || 1);
    throw "longjmp";
  }
  function _0x2b9733(_0x492642, _0x319245) {
    return _0x2f6b92(_0x492642, _0x319245);
  }
  function _0x943e8e(_0x424bd1, _0x61e660, _0xe41200) {
    _0x2c14c3.copyWithin(_0x424bd1, _0x61e660, _0x61e660 + _0xe41200);
  }
  function _0x17127d(_0x4c7321, _0x599e3e) {
    if (!_0x3748c9.fullscreenEnabled()) {
      return -1;
    }
    _0x4c7321 = _0x5c89b2(_0x4c7321);
    if (!_0x4c7321) {
      return -4;
    }
    if (!_0x4c7321.requestFullscreen && !_0x4c7321.webkitRequestFullscreen) {
      return -3;
    }
    var _0x36481a = _0x3748c9.canPerformEventHandlerRequests();
    if (!_0x36481a) {
      if (_0x599e3e.deferUntilInEventHandler) {
        _0x3748c9.deferCall(_0x40e378, 1, [_0x4c7321, _0x599e3e]);
        return 1;
      } else {
        return -2;
      }
    }
    return _0x40e378(_0x4c7321, _0x599e3e);
  }
  function _0x43af87(_0x4aa386, _0xfffcd1) {
    var _0x46f3c5 = {
      scaleMode: 0,
      canvasResolutionScaleMode: 0,
      filteringMode: 0,
      deferUntilInEventHandler: _0xfffcd1,
      canvasResizedCallbackTargetThread: 2
    };
    return _0x17127d(_0x4aa386, _0x46f3c5);
  }
  function _0x5e0873(_0x1dfccb, _0x5c4bc7) {
    _0x1dfccb = _0x5c89b2(_0x1dfccb);
    if (!_0x1dfccb) {
      return -4;
    }
    if (!_0x1dfccb.requestPointerLock && !_0x1dfccb.msRequestPointerLock) {
      return -1;
    }
    var _0x27a06e = _0x3748c9.canPerformEventHandlerRequests();
    if (!_0x27a06e) {
      if (_0x5c4bc7) {
        _0x3748c9.deferCall(_0x5d026d, 2, [_0x1dfccb]);
        return 1;
      } else {
        return -2;
      }
    }
    return _0x5d026d(_0x1dfccb);
  }
  function _0x41b2e7(_0x525da9) {
    try {
      _0x54a096.grow(_0x525da9 - _0x4d828f.byteLength + 65535 >>> 16);
      _0x4271b3(_0x54a096.buffer);
      return 1;
    } catch (_0x498981) {}
  }
  function _0x2e6d16(_0x39e2f3) {
    var _0x3932c3 = _0x2c14c3.length;
    _0x39e2f3 = _0x39e2f3 >>> 0;
    var _0x1d5e34 = 2147483648;
    if (_0x39e2f3 > _0x1d5e34) {
      return false;
    }
    for (var _0x59aae4 = 1; _0x59aae4 <= 4; _0x59aae4 *= 2) {
      var _0x38656e = _0x3932c3 * (1 + 0.2 / _0x59aae4);
      _0x38656e = Math.min(_0x38656e, _0x39e2f3 + 100663296);
      var _0xfd7506 = Math.min(_0x1d5e34, _0x4d054d(Math.max(_0x39e2f3, _0x38656e), 65536));
      var _0x25032a = _0x41b2e7(_0xfd7506);
      if (_0x25032a) {
        return true;
      }
    }
    return false;
  }
  function _0x2d84c1() {
    try {
      if (navigator.getGamepads) {
        if (_0x3748c9.lastGamepadState = navigator.getGamepads()) {
          return 0;
        } else {
          return -1;
        }
      }
    } catch (_0x57c1c0) {
      navigator.getGamepads = null;
    }
    return -1;
  }
  function _0x34267d(_0x231bca, _0x419a2c, _0x58c165, _0x896ec1, _0x5ccdbb, _0x14b82e, _0x5cfd76) {
    if (!_0x3748c9.focusEvent) {
      _0x3748c9.focusEvent = _0x57219e(256);
    }
    var _0x34b6cb = function (_0x59c553) {
      var _0x1d29ec = _0x59c553 || event;
      var _0x1c781d = _0x3748c9.getNodeNameForTarget(_0x1d29ec.target);
      var _0x39644c = _0x1d29ec.target.id ? _0x1d29ec.target.id : "";
      var _0x1e02b2 = _0x3748c9.focusEvent;
      _0x38fbc9(_0x1c781d, _0x1e02b2 + 0, 128);
      _0x38fbc9(_0x39644c, _0x1e02b2 + 128, 128);
      if (function (_0xa057e8, _0x5ed2eb, _0x5675db) {
        return _0x3f85b1.apply(null, [_0x896ec1, _0xa057e8, _0x5ed2eb, _0x5675db]);
      }(_0x5ccdbb, _0x1e02b2, _0x419a2c)) {
        _0x1d29ec.preventDefault();
      }
    };
    var _0x3c71fc = {
      target: _0x5c89b2(_0x231bca),
      eventTypeString: _0x14b82e,
      callbackfunc: _0x896ec1,
      handlerFunc: _0x34b6cb,
      useCapture: _0x58c165
    };
    _0x3748c9.registerOrRemoveHandler(_0x3c71fc);
  }
  function _0x433947(_0x5ef385, _0xe1d609, _0xadab6, _0x5e58f6, _0x98b2ff) {
    _0x34267d(_0x5ef385, _0xe1d609, _0xadab6, _0x5e58f6, 12, "blur", _0x98b2ff);
    return 0;
  }
  function _0x1868f2(_0x53d973, _0x276ade, _0x36f785, _0x1ef178, _0x5123fc) {
    _0x34267d(_0x53d973, _0x276ade, _0x36f785, _0x1ef178, 13, "focus", _0x5123fc);
    return 0;
  }
  function _0x4137ea(_0x2634cc, _0x1ce682, _0x5b36ba, _0xa2b0de, _0x31f668, _0x36353f, _0x4b3a15) {
    if (!_0x3748c9.fullscreenChangeEvent) {
      _0x3748c9.fullscreenChangeEvent = _0x57219e(280);
    }
    var _0x292271 = function (_0x47ca0c) {
      var _0x40272c = _0x47ca0c || event;
      var _0x131004 = _0x3748c9.fullscreenChangeEvent;
      _0xbfe528(_0x131004);
      if (function (_0x592765, _0x3fe9df, _0xfe9c92) {
        return _0x3f85b1.apply(null, [_0xa2b0de, _0x592765, _0x3fe9df, _0xfe9c92]);
      }(_0x31f668, _0x131004, _0x1ce682)) {
        _0x40272c.preventDefault();
      }
    };
    var _0x1ded72 = {
      target: _0x2634cc,
      eventTypeString: _0x36353f,
      callbackfunc: _0xa2b0de,
      handlerFunc: _0x292271,
      useCapture: _0x5b36ba
    };
    _0x3748c9.registerOrRemoveHandler(_0x1ded72);
  }
  function _0xacabf9(_0x1db924, _0x59d7d3, _0x4446a5, _0x3298d8, _0x5b7cf0) {
    if (!_0x3748c9.fullscreenEnabled()) {
      return -1;
    }
    _0x1db924 = _0x5c89b2(_0x1db924);
    if (!_0x1db924) {
      return -4;
    }
    _0x4137ea(_0x1db924, _0x59d7d3, _0x4446a5, _0x3298d8, 19, "fullscreenchange", _0x5b7cf0);
    _0x4137ea(_0x1db924, _0x59d7d3, _0x4446a5, _0x3298d8, 19, "webkitfullscreenchange", _0x5b7cf0);
    return 0;
  }
  function _0x419411(_0x20ba59, _0x5ec297, _0x2d8da3, _0x399f7c, _0x18eb76, _0x521799, _0x5ace51) {
    if (!_0x3748c9.gamepadEvent) {
      _0x3748c9.gamepadEvent = _0x57219e(1432);
    }
    var _0x42bc22 = function (_0x41a4e1) {
      var _0x315da3 = _0x41a4e1 || event;
      var _0x6cc6d4 = _0x3748c9.gamepadEvent;
      _0x14f72e(_0x6cc6d4, _0x315da3.gamepad);
      if (function (_0x1beb04, _0x469c77, _0x2912a6) {
        return _0x3f85b1.apply(null, [_0x399f7c, _0x1beb04, _0x469c77, _0x2912a6]);
      }(_0x18eb76, _0x6cc6d4, _0x5ec297)) {
        _0x315da3.preventDefault();
      }
    };
    var _0x1af4b9 = {
      target: _0x5c89b2(_0x20ba59),
      allowsDeferredCalls: true,
      eventTypeString: _0x521799,
      callbackfunc: _0x399f7c,
      handlerFunc: _0x42bc22,
      useCapture: _0x2d8da3
    };
    _0x3748c9.registerOrRemoveHandler(_0x1af4b9);
  }
  function _0x4bce12(_0x9b02f4, _0x26fdb3, _0x284561, _0x10fc23) {
    if (_0x2d84c1()) {
      return -1;
    }
    return _0x419411(2, _0x9b02f4, _0x26fdb3, _0x284561, 26, "gamepadconnected", _0x10fc23);
  }
  function _0x289a3b(_0x145855, _0x1e316d, _0x23b0c3, _0x509ea1) {
    if (_0x2d84c1()) {
      return -1;
    }
    return _0x419411(2, _0x145855, _0x1e316d, _0x23b0c3, 27, "gamepaddisconnected", _0x509ea1);
  }
  function _0x2eefba(_0x571d02, _0x3737d4, _0x5ad955) {
    return setInterval(function () {
      (function (_0x22f441) {
        _0x53a2c3.apply(null, [_0x571d02, _0x22f441]);
      })(_0x5ad955);
    }, _0x3737d4);
  }
  function _0x355f31(_0x394135, _0xd70121, _0x26618c, _0x33c6ec, _0x48a757, _0x153b03, _0x60812b) {
    if (!_0x3748c9.keyEvent) {
      _0x3748c9.keyEvent = _0x57219e(164);
    }
    var _0x4dace5 = function (_0x57ea54) {
      var _0x5a5893 = _0x3748c9.keyEvent;
      var _0x5978c3 = _0x5a5893 >> 2;
      _0x1b79ed[_0x5978c3 + 0] = _0x57ea54.location;
      _0x1b79ed[_0x5978c3 + 1] = _0x57ea54.ctrlKey;
      _0x1b79ed[_0x5978c3 + 2] = _0x57ea54.shiftKey;
      _0x1b79ed[_0x5978c3 + 3] = _0x57ea54.altKey;
      _0x1b79ed[_0x5978c3 + 4] = _0x57ea54.metaKey;
      _0x1b79ed[_0x5978c3 + 5] = _0x57ea54.repeat;
      _0x1b79ed[_0x5978c3 + 6] = _0x57ea54.charCode;
      _0x1b79ed[_0x5978c3 + 7] = _0x57ea54.keyCode;
      _0x1b79ed[_0x5978c3 + 8] = _0x57ea54.which;
      _0x38fbc9(_0x57ea54.key || "", _0x5a5893 + 36, 32);
      _0x38fbc9(_0x57ea54.code || "", _0x5a5893 + 68, 32);
      _0x38fbc9(_0x57ea54.char || "", _0x5a5893 + 100, 32);
      _0x38fbc9(_0x57ea54.locale || "", _0x5a5893 + 132, 32);
      if (function (_0x46f7de, _0x2d65df, _0x10a4a7) {
        return _0x3f85b1.apply(null, [_0x33c6ec, _0x46f7de, _0x2d65df, _0x10a4a7]);
      }(_0x48a757, _0x5a5893, _0xd70121)) {
        _0x57ea54.preventDefault();
      }
    };
    var _0x5f16c0 = {
      target: _0x5c89b2(_0x394135),
      allowsDeferredCalls: true,
      eventTypeString: _0x153b03,
      callbackfunc: _0x33c6ec,
      handlerFunc: _0x4dace5,
      useCapture: _0x26618c
    };
    _0x3748c9.registerOrRemoveHandler(_0x5f16c0);
  }
  function _0x845871(_0xed7d60, _0x1415e6, _0x5ed48e, _0x5428fb, _0x4d3268) {
    _0x355f31(_0xed7d60, _0x1415e6, _0x5ed48e, _0x5428fb, 2, "keydown", _0x4d3268);
    return 0;
  }
  function _0x502773(_0x1d18d8, _0x49fe19, _0x554c7c, _0x456b10, _0x321d5f) {
    _0x355f31(_0x1d18d8, _0x49fe19, _0x554c7c, _0x456b10, 1, "keypress", _0x321d5f);
    return 0;
  }
  function _0x13e30f(_0x35120c, _0x465868, _0x4dd667, _0x403c3, _0x3f7977) {
    _0x355f31(_0x35120c, _0x465868, _0x4dd667, _0x403c3, 3, "keyup", _0x3f7977);
    return 0;
  }
  function _0x4cc268(_0x33de59, _0x32dc21, _0x28ac29) {
    var _0x20cf91 = function () {
      _0x94408b.call(null, _0x33de59);
    };
    _0x48adff(_0x20cf91, _0x32dc21, _0x28ac29);
  }
  function _0x491d94(_0x125458, _0x113a73, _0x38957d) {
    var _0x4ce8ee = _0x125458 >> 2;
    _0x1b79ed[_0x4ce8ee + 0] = _0x113a73.screenX;
    _0x1b79ed[_0x4ce8ee + 1] = _0x113a73.screenY;
    _0x1b79ed[_0x4ce8ee + 2] = _0x113a73.clientX;
    _0x1b79ed[_0x4ce8ee + 3] = _0x113a73.clientY;
    _0x1b79ed[_0x4ce8ee + 4] = _0x113a73.ctrlKey;
    _0x1b79ed[_0x4ce8ee + 5] = _0x113a73.shiftKey;
    _0x1b79ed[_0x4ce8ee + 6] = _0x113a73.altKey;
    _0x1b79ed[_0x4ce8ee + 7] = _0x113a73.metaKey;
    _0x34c2d1[_0x4ce8ee * 2 + 16] = _0x113a73.button;
    _0x34c2d1[_0x4ce8ee * 2 + 17] = _0x113a73.buttons;
    _0x1b79ed[_0x4ce8ee + 9] = _0x113a73.movementX;
    _0x1b79ed[_0x4ce8ee + 10] = _0x113a73.movementY;
    var _0x932605 = _0x1e976a(_0x38957d);
    _0x1b79ed[_0x4ce8ee + 11] = _0x113a73.clientX - _0x932605.left;
    _0x1b79ed[_0x4ce8ee + 12] = _0x113a73.clientY - _0x932605.top;
  }
  function _0x173c29(_0x41d486, _0x30346f, _0x4995e7, _0x32f26a, _0x424888, _0x47165d, _0x1b07ee) {
    if (!_0x3748c9.mouseEvent) {
      _0x3748c9.mouseEvent = _0x57219e(64);
    }
    _0x41d486 = _0x5c89b2(_0x41d486);
    var _0x489d06 = function (_0x44a338) {
      var _0x3385fb = _0x44a338 || event;
      _0x491d94(_0x3748c9.mouseEvent, _0x3385fb, _0x41d486);
      if (function (_0x317797, _0x21b8f4, _0x5465ee) {
        return _0x3f85b1.apply(null, [_0x32f26a, _0x317797, _0x21b8f4, _0x5465ee]);
      }(_0x424888, _0x3748c9.mouseEvent, _0x30346f)) {
        _0x3385fb.preventDefault();
      }
    };
    var _0x117695 = {
      target: _0x41d486,
      allowsDeferredCalls: _0x47165d != "mousemove" && _0x47165d != "mouseenter" && _0x47165d != "mouseleave",
      eventTypeString: _0x47165d,
      callbackfunc: _0x32f26a,
      handlerFunc: _0x489d06,
      useCapture: _0x4995e7
    };
    _0x3748c9.registerOrRemoveHandler(_0x117695);
  }
  function _0x585948(_0x5cf79e, _0xbd5a59, _0x308c30, _0x287744, _0x4c7c0d) {
    _0x173c29(_0x5cf79e, _0xbd5a59, _0x308c30, _0x287744, 5, "mousedown", _0x4c7c0d);
    return 0;
  }
  function _0x1ce7af(_0x1a7f80, _0x3f0515, _0x598bd4, _0x573f36, _0x451303) {
    _0x173c29(_0x1a7f80, _0x3f0515, _0x598bd4, _0x573f36, 8, "mousemove", _0x451303);
    return 0;
  }
  function _0x48fb0d(_0xae14ee, _0x10a538, _0x4d4160, _0xf9875, _0xd7c709) {
    _0x173c29(_0xae14ee, _0x10a538, _0x4d4160, _0xf9875, 6, "mouseup", _0xd7c709);
    return 0;
  }
  function _0xdb3177(_0xe9cae4) {
    var _0x1dd841 = document.pointerLockElement || document.mozPointerLockElement || document.webkitPointerLockElement || document.msPointerLockElement;
    var _0x4b4b6f = !!_0x1dd841;
    _0x1b79ed[_0xe9cae4 >> 2] = _0x4b4b6f;
    var _0xd53475 = _0x3748c9.getNodeNameForTarget(_0x1dd841);
    var _0x163b95 = _0x1dd841 && _0x1dd841.id ? _0x1dd841.id : "";
    _0x38fbc9(_0xd53475, _0xe9cae4 + 4, 128);
    _0x38fbc9(_0x163b95, _0xe9cae4 + 132, 128);
  }
  function _0x40763e(_0x261c64, _0x1e176c, _0x544b47, _0x57038c, _0x5b355c, _0x21ab70, _0x41029e) {
    if (!_0x3748c9.pointerlockChangeEvent) {
      _0x3748c9.pointerlockChangeEvent = _0x57219e(260);
    }
    var _0x11ea3c = function (_0x352f58) {
      var _0x3c26f9 = _0x352f58 || event;
      var _0x5a71b1 = _0x3748c9.pointerlockChangeEvent;
      _0xdb3177(_0x5a71b1);
      if (function (_0x12d8d1, _0x52140c, _0x5e5164) {
        return _0x3f85b1.apply(null, [_0x57038c, _0x12d8d1, _0x52140c, _0x5e5164]);
      }(_0x5b355c, _0x5a71b1, _0x1e176c)) {
        _0x3c26f9.preventDefault();
      }
    };
    var _0x38690d = {
      target: _0x261c64,
      eventTypeString: _0x21ab70,
      callbackfunc: _0x57038c,
      handlerFunc: _0x11ea3c,
      useCapture: _0x544b47
    };
    _0x3748c9.registerOrRemoveHandler(_0x38690d);
  }
  function _0x593bd6(_0xbcfff3, _0x3378a8, _0x55599b, _0x5c0d2d, _0x36b197) {
    if (!document || !document.body || !document.body.requestPointerLock && !document.body.mozRequestPointerLock && !document.body.webkitRequestPointerLock && !document.body.msRequestPointerLock) {
      return -1;
    }
    _0xbcfff3 = _0x5c89b2(_0xbcfff3);
    if (!_0xbcfff3) {
      return -4;
    }
    _0x40763e(_0xbcfff3, _0x3378a8, _0x55599b, _0x5c0d2d, 20, "pointerlockchange", _0x36b197);
    _0x40763e(_0xbcfff3, _0x3378a8, _0x55599b, _0x5c0d2d, 20, "mozpointerlockchange", _0x36b197);
    _0x40763e(_0xbcfff3, _0x3378a8, _0x55599b, _0x5c0d2d, 20, "webkitpointerlockchange", _0x36b197);
    _0x40763e(_0xbcfff3, _0x3378a8, _0x55599b, _0x5c0d2d, 20, "mspointerlockchange", _0x36b197);
    return 0;
  }
  function _0x16a539(_0x57d377, _0x4653a8, _0x394566, _0x1bf049, _0x5ed39c, _0x2146cc, _0x9e92db) {
    if (!_0x3748c9.touchEvent) {
      _0x3748c9.touchEvent = _0x57219e(1684);
    }
    _0x57d377 = _0x5c89b2(_0x57d377);
    var _0x74ad49 = function (_0x427fcf) {
      var _0x2138d4;
      var _0x38fce7 = {};
      var _0x49f6be = _0x427fcf.touches;
      for (var _0x653f48 = 0; _0x653f48 < _0x49f6be.length; ++_0x653f48) {
        _0x2138d4 = _0x49f6be[_0x653f48];
        _0x2138d4.isChanged = _0x2138d4.onTarget = 0;
        _0x38fce7[_0x2138d4.identifier] = _0x2138d4;
      }
      for (var _0x653f48 = 0; _0x653f48 < _0x427fcf.changedTouches.length; ++_0x653f48) {
        _0x2138d4 = _0x427fcf.changedTouches[_0x653f48];
        _0x2138d4.isChanged = 1;
        _0x38fce7[_0x2138d4.identifier] = _0x2138d4;
      }
      for (var _0x653f48 = 0; _0x653f48 < _0x427fcf.targetTouches.length; ++_0x653f48) {
        _0x38fce7[_0x427fcf.targetTouches[_0x653f48].identifier].onTarget = 1;
      }
      var _0x62cd33 = _0x3748c9.touchEvent;
      var _0x20c7a5 = _0x62cd33 >> 2;
      _0x1b79ed[_0x20c7a5 + 1] = _0x427fcf.ctrlKey;
      _0x1b79ed[_0x20c7a5 + 2] = _0x427fcf.shiftKey;
      _0x1b79ed[_0x20c7a5 + 3] = _0x427fcf.altKey;
      _0x1b79ed[_0x20c7a5 + 4] = _0x427fcf.metaKey;
      _0x20c7a5 += 5;
      var _0x5b0b3b = _0x1e976a(_0x57d377);
      var _0x2c4dcc = 0;
      for (var _0x653f48 in _0x38fce7) {
        var _0x2138d4 = _0x38fce7[_0x653f48];
        _0x1b79ed[_0x20c7a5 + 0] = _0x2138d4.identifier;
        _0x1b79ed[_0x20c7a5 + 1] = _0x2138d4.screenX;
        _0x1b79ed[_0x20c7a5 + 2] = _0x2138d4.screenY;
        _0x1b79ed[_0x20c7a5 + 3] = _0x2138d4.clientX;
        _0x1b79ed[_0x20c7a5 + 4] = _0x2138d4.clientY;
        _0x1b79ed[_0x20c7a5 + 5] = _0x2138d4.pageX;
        _0x1b79ed[_0x20c7a5 + 6] = _0x2138d4.pageY;
        _0x1b79ed[_0x20c7a5 + 7] = _0x2138d4.isChanged;
        _0x1b79ed[_0x20c7a5 + 8] = _0x2138d4.onTarget;
        _0x1b79ed[_0x20c7a5 + 9] = _0x2138d4.clientX - _0x5b0b3b.left;
        _0x1b79ed[_0x20c7a5 + 10] = _0x2138d4.clientY - _0x5b0b3b.top;
        _0x20c7a5 += 13;
        if (++_0x2c4dcc > 31) {
          break;
        }
      }
      _0x1b79ed[_0x62cd33 >> 2] = _0x2c4dcc;
      if (function (_0x38f344, _0x34ce3a, _0x3c91e7) {
        return _0x3f85b1.apply(null, [_0x1bf049, _0x38f344, _0x34ce3a, _0x3c91e7]);
      }(_0x5ed39c, _0x62cd33, _0x4653a8)) {
        _0x427fcf.preventDefault();
      }
    };
    var _0x1adcf2 = {
      target: _0x57d377,
      allowsDeferredCalls: _0x2146cc == "touchstart" || _0x2146cc == "touchend",
      eventTypeString: _0x2146cc,
      callbackfunc: _0x1bf049,
      handlerFunc: _0x74ad49,
      useCapture: _0x394566
    };
    _0x3748c9.registerOrRemoveHandler(_0x1adcf2);
  }
  function _0x33d8f0(_0x280e4b, _0x5903d0, _0x5f021f, _0x37b284, _0x3c369d) {
    _0x16a539(_0x280e4b, _0x5903d0, _0x5f021f, _0x37b284, 25, "touchcancel", _0x3c369d);
    return 0;
  }
  function _0x1db39d(_0x5a0ee4, _0x38c0c1, _0xfb289c, _0x8b6a9a, _0x13b3f0) {
    _0x16a539(_0x5a0ee4, _0x38c0c1, _0xfb289c, _0x8b6a9a, 23, "touchend", _0x13b3f0);
    return 0;
  }
  function _0x324a93(_0x4657e4, _0x52afd7, _0x368546, _0x1c20f8, _0x4716d7) {
    _0x16a539(_0x4657e4, _0x52afd7, _0x368546, _0x1c20f8, 24, "touchmove", _0x4716d7);
    return 0;
  }
  function _0x980ecc(_0x59347c, _0x30447c, _0x21a408, _0x522065, _0x289603) {
    _0x16a539(_0x59347c, _0x30447c, _0x21a408, _0x522065, 22, "touchstart", _0x289603);
    return 0;
  }
  function _0x3db9dd(_0x2a98c2, _0x461f93, _0x24e111, _0x2b02e9, _0xfaf2d9, _0x49176f, _0x11d936) {
    if (!_0x3748c9.wheelEvent) {
      _0x3748c9.wheelEvent = _0x57219e(96);
    }
    var _0x6baa0d = function (_0x29ad27) {
      var _0x5b61b6 = _0x29ad27 || event;
      var _0x2c8fc3 = _0x3748c9.wheelEvent;
      _0x491d94(_0x2c8fc3, _0x5b61b6, _0x2a98c2);
      _0x36c943[_0x2c8fc3 + 64 >> 3] = _0x5b61b6.deltaX;
      _0x36c943[_0x2c8fc3 + 72 >> 3] = _0x5b61b6.deltaY;
      _0x36c943[_0x2c8fc3 + 80 >> 3] = _0x5b61b6.deltaZ;
      _0x1b79ed[_0x2c8fc3 + 88 >> 2] = _0x5b61b6.deltaMode;
      if (function (_0x173ac2, _0x935011, _0x58e9e8) {
        return _0x3f85b1.apply(null, [_0x2b02e9, _0x173ac2, _0x935011, _0x58e9e8]);
      }(_0xfaf2d9, _0x2c8fc3, _0x461f93)) {
        _0x5b61b6.preventDefault();
      }
    };
    var _0xdac565 = {
      target: _0x2a98c2,
      allowsDeferredCalls: true,
      eventTypeString: _0x49176f,
      callbackfunc: _0x2b02e9,
      handlerFunc: _0x6baa0d,
      useCapture: _0x24e111
    };
    _0x3748c9.registerOrRemoveHandler(_0xdac565);
  }
  function _0x2491aa(_0x4e770b, _0x143701, _0x32327c, _0x9957fa, _0x44b24e) {
    _0x4e770b = _0x5c89b2(_0x4e770b);
    if (typeof _0x4e770b.onwheel !== "undefined") {
      _0x3db9dd(_0x4e770b, _0x143701, _0x32327c, _0x9957fa, 9, "wheel", _0x44b24e);
      return 0;
    } else {
      return -1;
    }
  }
  function _0x5ab08f(_0x48a08b) {
    var _0x36198b = _0x4aca12();
    while (_0x4aca12() - _0x36198b < _0x48a08b) {}
  }
  function _0x1efd35(_0x2ec21a) {
    var _0x50d317 = _0x2ec21a.getExtension("ANGLE_instanced_arrays");
    if (_0x50d317) {
      _0x2ec21a.vertexAttribDivisor = function (_0x4e6c94, _0x58a182) {
        _0x50d317.vertexAttribDivisorANGLE(_0x4e6c94, _0x58a182);
      };
      _0x2ec21a.drawArraysInstanced = function (_0x4797a0, _0x3c9c80, _0x22c1e2, _0x27f4cd) {
        _0x50d317.drawArraysInstancedANGLE(_0x4797a0, _0x3c9c80, _0x22c1e2, _0x27f4cd);
      };
      _0x2ec21a.drawElementsInstanced = function (_0x4ed0c5, _0x5081c5, _0xb72490, _0x4dbaa2, _0x50eeea) {
        _0x50d317.drawElementsInstancedANGLE(_0x4ed0c5, _0x5081c5, _0xb72490, _0x4dbaa2, _0x50eeea);
      };
      return 1;
    }
  }
  function _0x5a3fbb(_0x5c6abb) {
    var _0x302223 = _0x5c6abb.getExtension("OES_vertex_array_object");
    if (_0x302223) {
      _0x5c6abb.createVertexArray = function () {
        return _0x302223.createVertexArrayOES();
      };
      _0x5c6abb.deleteVertexArray = function (_0x3742cc) {
        _0x302223.deleteVertexArrayOES(_0x3742cc);
      };
      _0x5c6abb.bindVertexArray = function (_0x135ee0) {
        _0x302223.bindVertexArrayOES(_0x135ee0);
      };
      _0x5c6abb.isVertexArray = function (_0x30e9a5) {
        return _0x302223.isVertexArrayOES(_0x30e9a5);
      };
      return 1;
    }
  }
  function _0x6db8dc(_0x301d4b) {
    var _0x4cb706 = _0x301d4b.getExtension("WEBGL_draw_buffers");
    if (_0x4cb706) {
      _0x301d4b.drawBuffers = function (_0x221c21, _0x3486fd) {
        _0x4cb706.drawBuffersWEBGL(_0x221c21, _0x3486fd);
      };
      return 1;
    }
  }
  function _0x2f98c1(_0x1153fc) {
    return !!(_0x1153fc.dibvbi = _0x1153fc.getExtension("WEBGL_draw_instanced_base_vertex_base_instance"));
  }
  function _0x27db77(_0x3b78c4) {
    return !!(_0x3b78c4.mdibvbi = _0x3b78c4.getExtension("WEBGL_multi_draw_instanced_base_vertex_base_instance"));
  }
  function _0x20dbd9(_0x20c5d8) {
    return !!(_0x20c5d8.multiDrawWebgl = _0x20c5d8.getExtension("WEBGL_multi_draw"));
  }
  var _0x166a8d = {
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
    recordError: function _0x1733a8(_0x3c97bb) {
      if (!_0x166a8d.lastError) {
        _0x166a8d.lastError = _0x3c97bb;
      }
    },
    getNewId: function (_0x2316c5) {
      var _0x5a7668 = _0x166a8d.counter++;
      for (var _0x53e5dc = _0x2316c5.length; _0x53e5dc < _0x5a7668; _0x53e5dc++) {
        _0x2316c5[_0x53e5dc] = null;
      }
      return _0x5a7668;
    },
    MAX_TEMP_BUFFER_SIZE: 2097152,
    numTempVertexBuffersPerSize: 64,
    log2ceilLookup: function (_0x45367d) {
      return 32 - Math.clz32(_0x45367d === 0 ? 0 : _0x45367d - 1);
    },
    generateTempBuffers: function (_0x499782, _0x4b80ab) {
      var _0xc9183b = _0x166a8d.log2ceilLookup(_0x166a8d.MAX_TEMP_BUFFER_SIZE);
      _0x4b80ab.tempVertexBufferCounters1 = [];
      _0x4b80ab.tempVertexBufferCounters2 = [];
      _0x4b80ab.tempVertexBufferCounters1.length = _0x4b80ab.tempVertexBufferCounters2.length = _0xc9183b + 1;
      _0x4b80ab.tempVertexBuffers1 = [];
      _0x4b80ab.tempVertexBuffers2 = [];
      _0x4b80ab.tempVertexBuffers1.length = _0x4b80ab.tempVertexBuffers2.length = _0xc9183b + 1;
      _0x4b80ab.tempIndexBuffers = [];
      _0x4b80ab.tempIndexBuffers.length = _0xc9183b + 1;
      for (var _0x49edbd = 0; _0x49edbd <= _0xc9183b; ++_0x49edbd) {
        _0x4b80ab.tempIndexBuffers[_0x49edbd] = null;
        _0x4b80ab.tempVertexBufferCounters1[_0x49edbd] = _0x4b80ab.tempVertexBufferCounters2[_0x49edbd] = 0;
        var _0x126b8f = _0x166a8d.numTempVertexBuffersPerSize;
        _0x4b80ab.tempVertexBuffers1[_0x49edbd] = [];
        _0x4b80ab.tempVertexBuffers2[_0x49edbd] = [];
        var _0x4b9450 = _0x4b80ab.tempVertexBuffers1[_0x49edbd];
        var _0x13a9e1 = _0x4b80ab.tempVertexBuffers2[_0x49edbd];
        _0x4b9450.length = _0x13a9e1.length = _0x126b8f;
        for (var _0x35baa1 = 0; _0x35baa1 < _0x126b8f; ++_0x35baa1) {
          _0x4b9450[_0x35baa1] = _0x13a9e1[_0x35baa1] = null;
        }
      }
      if (_0x499782) {
        _0x4b80ab.tempQuadIndexBuffer = _0x1df95f.createBuffer();
        _0x4b80ab.GLctx.bindBuffer(34963, _0x4b80ab.tempQuadIndexBuffer);
        var _0xa15793 = _0x166a8d.MAX_TEMP_BUFFER_SIZE >> 1;
        var _0x41c07a = new Uint16Array(_0xa15793);
        var _0x49edbd = 0;
        var _0x4e4177 = 0;
        while (1) {
          _0x41c07a[_0x49edbd++] = _0x4e4177;
          if (_0x49edbd >= _0xa15793) {
            break;
          }
          _0x41c07a[_0x49edbd++] = _0x4e4177 + 1;
          if (_0x49edbd >= _0xa15793) {
            break;
          }
          _0x41c07a[_0x49edbd++] = _0x4e4177 + 2;
          if (_0x49edbd >= _0xa15793) {
            break;
          }
          _0x41c07a[_0x49edbd++] = _0x4e4177;
          if (_0x49edbd >= _0xa15793) {
            break;
          }
          _0x41c07a[_0x49edbd++] = _0x4e4177 + 2;
          if (_0x49edbd >= _0xa15793) {
            break;
          }
          _0x41c07a[_0x49edbd++] = _0x4e4177 + 3;
          if (_0x49edbd >= _0xa15793) {
            break;
          }
          _0x4e4177 += 4;
        }
        _0x4b80ab.GLctx.bufferData(34963, _0x41c07a, 35044);
        _0x4b80ab.GLctx.bindBuffer(34963, null);
      }
    },
    getTempVertexBuffer: function _0x31d9e1(_0x832258) {
      var _0x5567b9 = _0x166a8d.log2ceilLookup(_0x832258);
      var _0x1b37d1 = _0x166a8d.currentContext.tempVertexBuffers1[_0x5567b9];
      var _0x40d7be = _0x166a8d.currentContext.tempVertexBufferCounters1[_0x5567b9];
      _0x166a8d.currentContext.tempVertexBufferCounters1[_0x5567b9] = _0x166a8d.currentContext.tempVertexBufferCounters1[_0x5567b9] + 1 & _0x166a8d.numTempVertexBuffersPerSize - 1;
      var _0x370841 = _0x1b37d1[_0x40d7be];
      if (_0x370841) {
        return _0x370841;
      }
      var _0x7573d = _0x1df95f.getParameter(34964);
      _0x1b37d1[_0x40d7be] = _0x1df95f.createBuffer();
      _0x1df95f.bindBuffer(34962, _0x1b37d1[_0x40d7be]);
      _0x1df95f.bufferData(34962, 1 << _0x5567b9, 35048);
      _0x1df95f.bindBuffer(34962, _0x7573d);
      return _0x1b37d1[_0x40d7be];
    },
    getTempIndexBuffer: function _0x211929(_0x536d1b) {
      var _0x5ad04d = _0x166a8d.log2ceilLookup(_0x536d1b);
      var _0x14873a = _0x166a8d.currentContext.tempIndexBuffers[_0x5ad04d];
      if (_0x14873a) {
        return _0x14873a;
      }
      var _0x4a4f05 = _0x1df95f.getParameter(34965);
      _0x166a8d.currentContext.tempIndexBuffers[_0x5ad04d] = _0x1df95f.createBuffer();
      _0x1df95f.bindBuffer(34963, _0x166a8d.currentContext.tempIndexBuffers[_0x5ad04d]);
      _0x1df95f.bufferData(34963, 1 << _0x5ad04d, 35048);
      _0x1df95f.bindBuffer(34963, _0x4a4f05);
      return _0x166a8d.currentContext.tempIndexBuffers[_0x5ad04d];
    },
    newRenderingFrameStarted: function _0x12cc15() {
      if (!_0x166a8d.currentContext) {
        return;
      }
      var _0x41c954 = _0x166a8d.currentContext.tempVertexBuffers1;
      _0x166a8d.currentContext.tempVertexBuffers1 = _0x166a8d.currentContext.tempVertexBuffers2;
      _0x166a8d.currentContext.tempVertexBuffers2 = _0x41c954;
      _0x41c954 = _0x166a8d.currentContext.tempVertexBufferCounters1;
      _0x166a8d.currentContext.tempVertexBufferCounters1 = _0x166a8d.currentContext.tempVertexBufferCounters2;
      _0x166a8d.currentContext.tempVertexBufferCounters2 = _0x41c954;
      var _0x3e8c28 = _0x166a8d.log2ceilLookup(_0x166a8d.MAX_TEMP_BUFFER_SIZE);
      for (var _0x56e74b = 0; _0x56e74b <= _0x3e8c28; ++_0x56e74b) {
        _0x166a8d.currentContext.tempVertexBufferCounters1[_0x56e74b] = 0;
      }
    },
    getSource: function (_0x43fb16, _0x20c35b, _0x1709c1, _0x2b2cc5) {
      var _0xe531b8 = "";
      for (var _0x168fe9 = 0; _0x168fe9 < _0x20c35b; ++_0x168fe9) {
        var _0x4b6808 = _0x2b2cc5 ? _0x1b79ed[_0x2b2cc5 + _0x168fe9 * 4 >> 2] : -1;
        _0xe531b8 += _0x5ea6bb(_0x1b79ed[_0x1709c1 + _0x168fe9 * 4 >> 2], _0x4b6808 < 0 ? undefined : _0x4b6808);
      }
      return _0xe531b8;
    },
    calcBufLength: function _0x442baf(_0xb693b4, _0x58ead6, _0xcdc061, _0x2fb749) {
      if (_0xcdc061 > 0) {
        return _0x2fb749 * _0xcdc061;
      }
      var _0xb5bce1 = _0x166a8d.byteSizeByType[_0x58ead6 - _0x166a8d.byteSizeByTypeRoot];
      return _0xb693b4 * _0xb5bce1 * _0x2fb749;
    },
    usedTempBuffers: [],
    preDrawHandleClientVertexAttribBindings: function _0x5e01bb(_0x1de34e) {
      _0x166a8d.resetBufferBinding = false;
      for (var _0x16add1 = 0; _0x16add1 < _0x166a8d.currentContext.maxVertexAttribs; ++_0x16add1) {
        var _0x314b39 = _0x166a8d.currentContext.clientBuffers[_0x16add1];
        if (!_0x314b39.clientside || !_0x314b39.enabled) {
          continue;
        }
        _0x166a8d.resetBufferBinding = true;
        var _0x3dcfdf = _0x166a8d.calcBufLength(_0x314b39.size, _0x314b39.type, _0x314b39.stride, _0x1de34e);
        var _0x12926d = _0x166a8d.getTempVertexBuffer(_0x3dcfdf);
        _0x1df95f.bindBuffer(34962, _0x12926d);
        _0x1df95f.bufferSubData(34962, 0, _0x2c14c3.subarray(_0x314b39.ptr, _0x314b39.ptr + _0x3dcfdf));
        _0x314b39.vertexAttribPointerAdaptor.call(_0x1df95f, _0x16add1, _0x314b39.size, _0x314b39.type, _0x314b39.normalized, _0x314b39.stride, 0);
      }
    },
    postDrawHandleClientVertexAttribBindings: function _0x5e5110() {
      if (_0x166a8d.resetBufferBinding) {
        _0x1df95f.bindBuffer(34962, _0x166a8d.buffers[_0x1df95f.currentArrayBufferBinding]);
      }
    },
    createContext: function (_0x14efcc, _0x21949d) {
      if (!_0x14efcc.getContextSafariWebGL2Fixed) {
        _0x14efcc.getContextSafariWebGL2Fixed = _0x14efcc.getContext;
        _0x14efcc.getContext = function (_0x5ee61b, _0x18582f) {
          var _0x1ff23d = _0x14efcc.getContextSafariWebGL2Fixed(_0x5ee61b, _0x18582f);
          if (_0x5ee61b == "webgl" == _0x1ff23d instanceof WebGLRenderingContext) {
            return _0x1ff23d;
          } else {
            return null;
          }
        };
      }
      var _0x125106 = _0x21949d.majorVersion > 1 ? _0x14efcc.getContext("webgl2", _0x21949d) : _0x14efcc.getContext("webgl", _0x21949d);
      if (!_0x125106) {
        return 0;
      }
      var _0x580c52 = _0x166a8d.registerContext(_0x125106, _0x21949d);
      return _0x580c52;
    },
    registerContext: function (_0x4f7ba6, _0x5e7b4b) {
      var _0x50809b = _0x166a8d.getNewId(_0x166a8d.contexts);
      var _0x108b8b = {
        handle: _0x50809b,
        attributes: _0x5e7b4b,
        version: _0x5e7b4b.majorVersion,
        GLctx: _0x4f7ba6
      };
      if (_0x4f7ba6.canvas) {
        _0x4f7ba6.canvas.GLctxObject = _0x108b8b;
      }
      _0x166a8d.contexts[_0x50809b] = _0x108b8b;
      if (typeof _0x5e7b4b.enableExtensionsByDefault === "undefined" || _0x5e7b4b.enableExtensionsByDefault) {
        _0x166a8d.initExtensions(_0x108b8b);
      }
      _0x108b8b.maxVertexAttribs = _0x108b8b.GLctx.getParameter(34921);
      _0x108b8b.clientBuffers = [];
      for (var _0x2e90d4 = 0; _0x2e90d4 < _0x108b8b.maxVertexAttribs; _0x2e90d4++) {
        _0x108b8b.clientBuffers[_0x2e90d4] = {
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
      _0x166a8d.generateTempBuffers(false, _0x108b8b);
      return _0x50809b;
    },
    makeContextCurrent: function (_0x2ac1e5) {
      _0x166a8d.currentContext = _0x166a8d.contexts[_0x2ac1e5];
      _0x51dce1.ctx = _0x1df95f = _0x166a8d.currentContext && _0x166a8d.currentContext.GLctx;
      return !_0x2ac1e5 || !!_0x1df95f;
    },
    getContext: function (_0x36bef1) {
      return _0x166a8d.contexts[_0x36bef1];
    },
    deleteContext: function (_0x36b4ca) {
      if (_0x166a8d.currentContext === _0x166a8d.contexts[_0x36b4ca]) {
        _0x166a8d.currentContext = null;
      }
      if (typeof _0x3748c9 === "object") {
        _0x3748c9.removeAllHandlersOnTarget(_0x166a8d.contexts[_0x36b4ca].GLctx.canvas);
      }
      if (_0x166a8d.contexts[_0x36b4ca] && _0x166a8d.contexts[_0x36b4ca].GLctx.canvas) {
        _0x166a8d.contexts[_0x36b4ca].GLctx.canvas.GLctxObject = undefined;
      }
      _0x166a8d.contexts[_0x36b4ca] = null;
    },
    initExtensions: function (_0x5596cf) {
      if (!_0x5596cf) {
        _0x5596cf = _0x166a8d.currentContext;
      }
      if (_0x5596cf.initExtensionsDone) {
        return;
      }
      _0x5596cf.initExtensionsDone = true;
      var _0x52b5de = _0x5596cf.GLctx;
      _0x1efd35(_0x52b5de);
      _0x5a3fbb(_0x52b5de);
      _0x6db8dc(_0x52b5de);
      _0x2f98c1(_0x52b5de);
      _0x27db77(_0x52b5de);
      if (_0x5596cf.version >= 2) {
        _0x52b5de.disjointTimerQueryExt = _0x52b5de.getExtension("EXT_disjoint_timer_query_webgl2");
      }
      if (_0x5596cf.version < 2 || !_0x52b5de.disjointTimerQueryExt) {
        _0x52b5de.disjointTimerQueryExt = _0x52b5de.getExtension("EXT_disjoint_timer_query");
      }
      _0x20dbd9(_0x52b5de);
      var _0x2a4357 = _0x52b5de.getSupportedExtensions() || [];
      _0x2a4357.forEach(function (_0x102e3c) {
        if (!_0x102e3c.includes("lose_context") && !_0x102e3c.includes("debug")) {
          _0x52b5de.getExtension(_0x102e3c);
        }
      });
    }
  };
  var _0x3d4384 = ["default", "low-power", "high-performance"];
  function _0x255d65(_0x3c5e81, _0x5b9030) {
    var _0x19485d = _0x5b9030 >> 2;
    var _0xb7c785 = _0x1b79ed[_0x19485d + 6];
    var _0x23cf2b = {
      alpha: !!_0x1b79ed[_0x19485d + 0],
      depth: !!_0x1b79ed[_0x19485d + 1],
      stencil: !!_0x1b79ed[_0x19485d + 2],
      antialias: !!_0x1b79ed[_0x19485d + 3],
      premultipliedAlpha: !!_0x1b79ed[_0x19485d + 4],
      preserveDrawingBuffer: !!_0x1b79ed[_0x19485d + 5],
      powerPreference: _0x3d4384[_0xb7c785],
      failIfMajorPerformanceCaveat: !!_0x1b79ed[_0x19485d + 7],
      majorVersion: _0x1b79ed[_0x19485d + 8],
      minorVersion: _0x1b79ed[_0x19485d + 9],
      enableExtensionsByDefault: _0x1b79ed[_0x19485d + 10],
      explicitSwapControl: _0x1b79ed[_0x19485d + 11],
      proxyContextToMainThread: _0x1b79ed[_0x19485d + 12],
      renderViaOffscreenBackBuffer: _0x1b79ed[_0x19485d + 13]
    };
    var _0x5e8bdf = _0x370188(_0x3c5e81);
    if (!_0x5e8bdf) {
      return 0;
    }
    if (_0x23cf2b.explicitSwapControl) {
      return 0;
    }
    var _0x32639f = _0x166a8d.createContext(_0x5e8bdf, _0x23cf2b);
    return _0x32639f;
  }
  function _0x5da007(_0x40d3a8, _0x3aef9d) {
    return _0x255d65(_0x40d3a8, _0x3aef9d);
  }
  function _0x4dc03a() {
    if (_0x166a8d.currentContext) {
      return _0x166a8d.currentContext.handle;
    } else {
      return 0;
    }
  }
  function _0x39cf4e() {
    return _0x4dc03a();
  }
  _0x51dce1._emscripten_webgl_get_current_context = _0x39cf4e;
  function _0x4cf006(_0x5972d8) {
    var _0x16fd89 = _0x166a8d.makeContextCurrent(_0x5972d8);
    if (_0x16fd89) {
      return 0;
    } else {
      return -5;
    }
  }
  _0x51dce1._emscripten_webgl_make_context_current = _0x4cf006;
  function _0x293ced(_0x25b830) {
    if (_0x166a8d.currentContext == _0x25b830) {
      _0x166a8d.currentContext = 0;
    }
    _0x166a8d.deleteContext(_0x25b830);
  }
  function _0x4e5c03(_0x4786b4, _0x549b8a) {
    var _0x310c08 = _0x166a8d.getContext(_0x4786b4);
    var _0x1cda5f = _0x5ea6bb(_0x549b8a);
    if (_0x1cda5f.startsWith("GL_")) {
      _0x1cda5f = _0x1cda5f.substr(3);
    }
    if (_0x1cda5f == "ANGLE_instanced_arrays") {
      _0x1efd35(_0x1df95f);
    }
    if (_0x1cda5f == "OES_vertex_array_object") {
      _0x5a3fbb(_0x1df95f);
    }
    if (_0x1cda5f == "WEBGL_draw_buffers") {
      _0x6db8dc(_0x1df95f);
    }
    if (_0x1cda5f == "WEBGL_draw_instanced_base_vertex_base_instance") {
      _0x2f98c1(_0x1df95f);
    }
    if (_0x1cda5f == "WEBGL_multi_draw_instanced_base_vertex_base_instance") {
      _0x27db77(_0x1df95f);
    }
    if (_0x1cda5f == "WEBGL_multi_draw") {
      _0x20dbd9(_0x1df95f);
    }
    var _0x534f70 = _0x310c08.GLctx.getExtension(_0x1cda5f);
    return !!_0x534f70;
  }
  function _0x4e0f4d(_0xe6ad15) {
    var _0x5f563a = _0xe6ad15 >> 2;
    for (var _0x300083 = 0; _0x300083 < 14; ++_0x300083) {
      _0x1b79ed[_0x5f563a + _0x300083] = 0;
    }
    _0x1b79ed[_0x5f563a + 0] = _0x1b79ed[_0x5f563a + 1] = _0x1b79ed[_0x5f563a + 3] = _0x1b79ed[_0x5f563a + 4] = _0x1b79ed[_0x5f563a + 8] = _0x1b79ed[_0x5f563a + 10] = 1;
  }
  var _0x193a2a = {};
  function _0x1786f2() {
    return _0x1450e0 || "./this.program";
  }
  function _0x58cfb2() {
    if (!_0x58cfb2.strings) {
      var _0xc9f4c3 = (typeof navigator === "object" && navigator.languages && navigator.languages[0] || "C").replace("-", "_") + ".UTF-8";
      var _0x162468 = {
        USER: "web_user",
        LOGNAME: "web_user",
        PATH: "/",
        PWD: "/",
        HOME: "/home/web_user",
        LANG: _0xc9f4c3,
        _: _0x1786f2()
      };
      for (var _0x340ea9 in _0x193a2a) {
        _0x162468[_0x340ea9] = _0x193a2a[_0x340ea9];
      }
      var _0x26904d = [];
      for (var _0x340ea9 in _0x162468) {
        _0x26904d.push(_0x340ea9 + "=" + _0x162468[_0x340ea9]);
      }
      _0x58cfb2.strings = _0x26904d;
    }
    return _0x58cfb2.strings;
  }
  function _0x3af453(_0x1fb20a, _0x2476ca) {
    try {
      var _0x58ad1d = 0;
      _0x58cfb2().forEach(function (_0x2900f9, _0x415284) {
        var _0x474f67 = _0x2476ca + _0x58ad1d;
        _0x1b79ed[_0x1fb20a + _0x415284 * 4 >> 2] = _0x474f67;
        _0x3a1830(_0x2900f9, _0x474f67);
        _0x58ad1d += _0x2900f9.length + 1;
      });
      return 0;
    } catch (_0x4d056d) {
      if (typeof _0x4c1d54 === "undefined" || !(_0x4d056d instanceof _0x4c1d54.ErrnoError)) {
        _0x38247b(_0x4d056d);
      }
      return _0x4d056d.errno;
    }
  }
  function _0xed65b6(_0x39fc03, _0x38a2b7) {
    try {
      var _0x2711fe = _0x58cfb2();
      _0x1b79ed[_0x39fc03 >> 2] = _0x2711fe.length;
      var _0x3dcc07 = 0;
      _0x2711fe.forEach(function (_0x599a05) {
        _0x3dcc07 += _0x599a05.length + 1;
      });
      _0x1b79ed[_0x38a2b7 >> 2] = _0x3dcc07;
      return 0;
    } catch (_0x431515) {
      if (typeof _0x4c1d54 === "undefined" || !(_0x431515 instanceof _0x4c1d54.ErrnoError)) {
        _0x38247b(_0x431515);
      }
      return _0x431515.errno;
    }
  }
  function _0x384f87(_0x9df318) {
    try {
      var _0xe616e0 = _0x1e57f1.getStreamFromFD(_0x9df318);
      _0x4c1d54.close(_0xe616e0);
      return 0;
    } catch (_0x172029) {
      if (typeof _0x4c1d54 === "undefined" || !(_0x172029 instanceof _0x4c1d54.ErrnoError)) {
        _0x38247b(_0x172029);
      }
      return _0x172029.errno;
    }
  }
  function _0x58fb90(_0x337685, _0x32816a) {
    try {
      var _0x19dd98 = _0x1e57f1.getStreamFromFD(_0x337685);
      var _0x22c077 = _0x19dd98.tty ? 2 : _0x4c1d54.isDir(_0x19dd98.mode) ? 3 : _0x4c1d54.isLink(_0x19dd98.mode) ? 7 : 4;
      _0x18b38f[_0x32816a >> 0] = _0x22c077;
      return 0;
    } catch (_0x864200) {
      if (typeof _0x4c1d54 === "undefined" || !(_0x864200 instanceof _0x4c1d54.ErrnoError)) {
        _0x38247b(_0x864200);
      }
      return _0x864200.errno;
    }
  }
  function _0x566190(_0xae840, _0x38d0b8, _0x5ce30b, _0x24c934) {
    try {
      var _0x133f5c = _0x1e57f1.getStreamFromFD(_0xae840);
      var _0x48f3fe = _0x1e57f1.doReadv(_0x133f5c, _0x38d0b8, _0x5ce30b);
      _0x1b79ed[_0x24c934 >> 2] = _0x48f3fe;
      return 0;
    } catch (_0x10a536) {
      if (typeof _0x4c1d54 === "undefined" || !(_0x10a536 instanceof _0x4c1d54.ErrnoError)) {
        _0x38247b(_0x10a536);
      }
      return _0x10a536.errno;
    }
  }
  function _0xdfbdc8(_0x392611, _0x9fa6a0, _0x396528, _0x55f52c, _0x315a2c) {
    try {
      var _0x1baf74 = _0x1e57f1.getStreamFromFD(_0x392611);
      var _0x3ceb87 = 4294967296;
      var _0x1a5a2c = _0x396528 * _0x3ceb87 + (_0x9fa6a0 >>> 0);
      var _0x54e3db = 9007199254740992;
      if (_0x1a5a2c <= -_0x54e3db || _0x1a5a2c >= _0x54e3db) {
        return -61;
      }
      _0x4c1d54.llseek(_0x1baf74, _0x1a5a2c, _0x55f52c);
      _0x10aa5a = [_0x1baf74.position >>> 0, (_0x3a400e = _0x1baf74.position, +Math.abs(_0x3a400e) >= 1 ? _0x3a400e > 0 ? (Math.min(+Math.floor(_0x3a400e / 4294967296), 4294967295) | 0) >>> 0 : ~~+Math.ceil((_0x3a400e - +(~~_0x3a400e >>> 0)) / 4294967296) >>> 0 : 0)];
      _0x1b79ed[_0x315a2c >> 2] = _0x10aa5a[0];
      _0x1b79ed[_0x315a2c + 4 >> 2] = _0x10aa5a[1];
      if (_0x1baf74.getdents && _0x1a5a2c === 0 && _0x55f52c === 0) {
        _0x1baf74.getdents = null;
      }
      return 0;
    } catch (_0x3073a7) {
      if (typeof _0x4c1d54 === "undefined" || !(_0x3073a7 instanceof _0x4c1d54.ErrnoError)) {
        _0x38247b(_0x3073a7);
      }
      return _0x3073a7.errno;
    }
  }
  function _0x257e41(_0x36e41e, _0x38258f, _0x2a971d, _0x354af7) {
    try {
      var _0x28fc9f = _0x1e57f1.getStreamFromFD(_0x36e41e);
      var _0x44f18a = _0x1e57f1.doWritev(_0x28fc9f, _0x38258f, _0x2a971d);
      _0x1b79ed[_0x354af7 >> 2] = _0x44f18a;
      return 0;
    } catch (_0x2f4849) {
      if (typeof _0x4c1d54 === "undefined" || !(_0x2f4849 instanceof _0x4c1d54.ErrnoError)) {
        _0x38247b(_0x2f4849);
      }
      return _0x2f4849.errno;
    }
  }
  function _0x1ce39c(_0x5c39f4, _0x3fa1ce) {
    return 0;
  }
  function _0x2435d1() {
    return _0x2be859();
  }
  function _0x1c3372(_0x323946, _0x27650c, _0x16a380, _0x46df57) {
    var _0x2ce856 = 0;
    var _0x2b9944 = 0;
    var _0x2058ee = 0;
    var _0x25f1d = 0;
    var _0x1c1f7e = 0;
    var _0x23cdcb = 0;
    var _0x1afcd3;
    function _0x1d1aa7(_0x5aa071, _0x179c4a, _0x1dd6e2, _0x3811c4, _0x2d9ca2, _0x5db50f) {
      var _0x21998d;
      var _0x114294;
      var _0x5f21b8;
      var _0x390031;
      _0x114294 = _0x5aa071 === 10 ? 28 : 16;
      _0x2d9ca2 = _0x5aa071 === 10 ? _0x12fc14(_0x2d9ca2) : _0x180954(_0x2d9ca2);
      _0x21998d = _0x57219e(_0x114294);
      _0x390031 = _0x89d5aa(_0x21998d, _0x5aa071, _0x2d9ca2, _0x5db50f);
      _0x441670(!_0x390031);
      _0x5f21b8 = _0x57219e(32);
      _0x1b79ed[_0x5f21b8 + 4 >> 2] = _0x5aa071;
      _0x1b79ed[_0x5f21b8 + 8 >> 2] = _0x179c4a;
      _0x1b79ed[_0x5f21b8 + 12 >> 2] = _0x1dd6e2;
      _0x1b79ed[_0x5f21b8 + 24 >> 2] = _0x3811c4;
      _0x1b79ed[_0x5f21b8 + 20 >> 2] = _0x21998d;
      if (_0x5aa071 === 10) {
        _0x1b79ed[_0x5f21b8 + 16 >> 2] = 28;
      } else {
        _0x1b79ed[_0x5f21b8 + 16 >> 2] = 16;
      }
      _0x1b79ed[_0x5f21b8 + 28 >> 2] = 0;
      return _0x5f21b8;
    }
    if (_0x16a380) {
      _0x2058ee = _0x1b79ed[_0x16a380 >> 2];
      _0x25f1d = _0x1b79ed[_0x16a380 + 4 >> 2];
      _0x1c1f7e = _0x1b79ed[_0x16a380 + 8 >> 2];
      _0x23cdcb = _0x1b79ed[_0x16a380 + 12 >> 2];
    }
    if (_0x1c1f7e && !_0x23cdcb) {
      _0x23cdcb = _0x1c1f7e === 2 ? 17 : 6;
    }
    if (!_0x1c1f7e && _0x23cdcb) {
      _0x1c1f7e = _0x23cdcb === 17 ? 2 : 1;
    }
    if (_0x23cdcb === 0) {
      _0x23cdcb = 6;
    }
    if (_0x1c1f7e === 0) {
      _0x1c1f7e = 1;
    }
    if (!_0x323946 && !_0x27650c) {
      return -2;
    }
    if (_0x2058ee & ~1087) {
      return -1;
    }
    if (_0x16a380 !== 0 && _0x1b79ed[_0x16a380 >> 2] & 2 && !_0x323946) {
      return -1;
    }
    if (_0x2058ee & 32) {
      return -2;
    }
    if (_0x1c1f7e !== 0 && _0x1c1f7e !== 1 && _0x1c1f7e !== 2) {
      return -7;
    }
    if (_0x25f1d !== 0 && _0x25f1d !== 2 && _0x25f1d !== 10) {
      return -6;
    }
    if (_0x27650c) {
      _0x27650c = _0x5ea6bb(_0x27650c);
      _0x2b9944 = parseInt(_0x27650c, 10);
      if (isNaN(_0x2b9944)) {
        if (_0x2058ee & 1024) {
          return -2;
        }
        return -8;
      }
    }
    if (!_0x323946) {
      if (_0x25f1d === 0) {
        _0x25f1d = 2;
      }
      if ((_0x2058ee & 1) === 0) {
        if (_0x25f1d === 2) {
          _0x2ce856 = _0x5f2a23(2130706433);
        } else {
          _0x2ce856 = [0, 0, 0, 1];
        }
      }
      _0x1afcd3 = _0x1d1aa7(_0x25f1d, _0x1c1f7e, _0x23cdcb, null, _0x2ce856, _0x2b9944);
      _0x1b79ed[_0x46df57 >> 2] = _0x1afcd3;
      return 0;
    }
    _0x323946 = _0x5ea6bb(_0x323946);
    _0x2ce856 = _0x5d958e(_0x323946);
    if (_0x2ce856 !== null) {
      if (_0x25f1d === 0 || _0x25f1d === 2) {
        _0x25f1d = 2;
      } else if (_0x25f1d === 10 && _0x2058ee & 8) {
        _0x2ce856 = [0, 0, _0x5f2a23(65535), _0x2ce856];
        _0x25f1d = 10;
      } else {
        return -2;
      }
    } else {
      _0x2ce856 = _0x3ad193(_0x323946);
      if (_0x2ce856 !== null) {
        if (_0x25f1d === 0 || _0x25f1d === 10) {
          _0x25f1d = 10;
        } else {
          return -2;
        }
      }
    }
    if (_0x2ce856 != null) {
      _0x1afcd3 = _0x1d1aa7(_0x25f1d, _0x1c1f7e, _0x23cdcb, _0x323946, _0x2ce856, _0x2b9944);
      _0x1b79ed[_0x46df57 >> 2] = _0x1afcd3;
      return 0;
    }
    if (_0x2058ee & 4) {
      return -2;
    }
    _0x323946 = _0x584b1a.lookup_name(_0x323946);
    _0x2ce856 = _0x5d958e(_0x323946);
    if (_0x25f1d === 0) {
      _0x25f1d = 2;
    } else if (_0x25f1d === 10) {
      _0x2ce856 = [0, 0, _0x5f2a23(65535), _0x2ce856];
    }
    _0x1afcd3 = _0x1d1aa7(_0x25f1d, _0x1c1f7e, _0x23cdcb, null, _0x2ce856, _0x2b9944);
    _0x1b79ed[_0x46df57 >> 2] = _0x1afcd3;
    return 0;
  }
  function _0x1e6d95(_0x1d3b60) {
    var _0x2d4510 = _0x57219e(20);
    var _0x20e5f4 = _0x57219e(_0x1d3b60.length + 1);
    _0x38fbc9(_0x1d3b60, _0x20e5f4, _0x1d3b60.length + 1);
    _0x1b79ed[_0x2d4510 >> 2] = _0x20e5f4;
    var _0x5abb7d = _0x57219e(4);
    _0x1b79ed[_0x5abb7d >> 2] = 0;
    _0x1b79ed[_0x2d4510 + 4 >> 2] = _0x5abb7d;
    var _0x2ed00a = 2;
    _0x1b79ed[_0x2d4510 + 8 >> 2] = _0x2ed00a;
    _0x1b79ed[_0x2d4510 + 12 >> 2] = 4;
    var _0x46c7e9 = _0x57219e(12);
    _0x1b79ed[_0x46c7e9 >> 2] = _0x46c7e9 + 8;
    _0x1b79ed[_0x46c7e9 + 4 >> 2] = 0;
    _0x1b79ed[_0x46c7e9 + 8 >> 2] = _0x5d958e(_0x584b1a.lookup_name(_0x1d3b60));
    _0x1b79ed[_0x2d4510 + 16 >> 2] = _0x46c7e9;
    return _0x2d4510;
  }
  function _0x84de3d(_0x170282, _0x3679f7, _0x4442a6) {
    if (_0x4442a6 !== 2) {
      _0xf13c3a(5);
      return null;
    }
    _0x170282 = _0x1b79ed[_0x170282 >> 2];
    var _0x5e7dbb = _0x180954(_0x170282);
    var _0x362e26 = _0x584b1a.lookup_addr(_0x5e7dbb);
    if (_0x362e26) {
      _0x5e7dbb = _0x362e26;
    }
    return _0x1e6d95(_0x5e7dbb);
  }
  function _0x19e767(_0xf02f7b) {
    return _0x1e6d95(_0x5ea6bb(_0xf02f7b));
  }
  function _0x558874(_0x3d0fb7, _0x1e71c2, _0x9a8fd9, _0x490694, _0x3e55b9, _0x2d0611, _0x83aa33) {
    var _0x2d1846 = _0x2bd298(_0x3d0fb7, _0x1e71c2);
    if (_0x2d1846.errno) {
      return -6;
    }
    var _0x5ed9f8 = _0x2d1846.port;
    var _0x1add7d = _0x2d1846.addr;
    var _0x5e5861 = false;
    if (_0x9a8fd9 && _0x490694) {
      var _0x501a39;
      if (_0x83aa33 & 1 || !(_0x501a39 = _0x584b1a.lookup_addr(_0x1add7d))) {
        if (_0x83aa33 & 8) {
          return -2;
        }
      } else {
        _0x1add7d = _0x501a39;
      }
      var _0x9bd45e = _0x38fbc9(_0x1add7d, _0x9a8fd9, _0x490694);
      if (_0x9bd45e + 1 >= _0x490694) {
        _0x5e5861 = true;
      }
    }
    if (_0x3e55b9 && _0x2d0611) {
      _0x5ed9f8 = "" + _0x5ed9f8;
      var _0x9bd45e = _0x38fbc9(_0x5ed9f8, _0x3e55b9, _0x2d0611);
      if (_0x9bd45e + 1 >= _0x2d0611) {
        _0x5e5861 = true;
      }
    }
    if (_0x5e5861) {
      return -12;
    }
    return 0;
  }
  function _0x106f6b() {
    throw "getpwuid: TODO";
  }
  function _0x6a8471(_0x2677dc) {
    var _0x502f5e = Date.now();
    _0x1b79ed[_0x2677dc >> 2] = _0x502f5e / 1000 | 0;
    _0x1b79ed[_0x2677dc + 4 >> 2] = _0x502f5e % 1000 * 1000 | 0;
    return 0;
  }
  function _0x51f118(_0x183d52) {
    _0x1df95f.activeTexture(_0x183d52);
  }
  function _0x1d6fce(_0x5c6992, _0x100296) {
    _0x5c6992 = _0x166a8d.programs[_0x5c6992];
    _0x100296 = _0x166a8d.shaders[_0x100296];
    _0x5c6992[_0x100296.shaderType] = _0x100296;
    _0x1df95f.attachShader(_0x5c6992, _0x100296);
  }
  function _0x244eb7(_0x1ec4b3, _0x29948d) {
    _0x1df95f.beginQuery(_0x1ec4b3, _0x166a8d.queries[_0x29948d]);
  }
  function _0x5477be(_0x310b47) {
    _0x1df95f.beginTransformFeedback(_0x310b47);
  }
  function _0x3b3fb2(_0x5f59d5, _0x274745, _0x573581) {
    _0x1df95f.bindAttribLocation(_0x166a8d.programs[_0x5f59d5], _0x274745, _0x5ea6bb(_0x573581));
  }
  function _0x2772ef(_0x215975, _0x1ca24e) {
    if (_0x215975 == 34962) {
      _0x1df95f.currentArrayBufferBinding = _0x1ca24e;
    } else if (_0x215975 == 34963) {
      _0x1df95f.currentElementArrayBufferBinding = _0x1ca24e;
    }
    if (_0x215975 == 35051) {
      _0x1df95f.currentPixelPackBufferBinding = _0x1ca24e;
    } else if (_0x215975 == 35052) {
      _0x1df95f.currentPixelUnpackBufferBinding = _0x1ca24e;
    }
    _0x1df95f.bindBuffer(_0x215975, _0x166a8d.buffers[_0x1ca24e]);
  }
  function _0xa6cbc2(_0x7351d6, _0x501767, _0x4ae4df) {
    _0x1df95f.bindBufferBase(_0x7351d6, _0x501767, _0x166a8d.buffers[_0x4ae4df]);
  }
  function _0x10f754(_0x3041c9, _0x574632, _0x2c348b, _0x47c000, _0x1f2a40) {
    _0x1df95f.bindBufferRange(_0x3041c9, _0x574632, _0x166a8d.buffers[_0x2c348b], _0x47c000, _0x1f2a40);
  }
  function _0x66ff88(_0x48894c, _0x52013c) {
    _0x1df95f.bindFramebuffer(_0x48894c, _0x166a8d.framebuffers[_0x52013c]);
  }
  function _0xd3a87b(_0x1f4623, _0x32d0d0) {
    _0x1df95f.bindRenderbuffer(_0x1f4623, _0x166a8d.renderbuffers[_0x32d0d0]);
  }
  function _0x33bd2c(_0x50d131, _0x1e4de2) {
    _0x1df95f.bindSampler(_0x50d131, _0x166a8d.samplers[_0x1e4de2]);
  }
  function _0x7effab(_0x36bb64, _0x269150) {
    _0x1df95f.bindTexture(_0x36bb64, _0x166a8d.textures[_0x269150]);
  }
  function _0x3fcb70(_0x4de6db, _0x25444c) {
    _0x1df95f.bindTransformFeedback(_0x4de6db, _0x166a8d.transformFeedbacks[_0x25444c]);
  }
  function _0x16f4fd(_0x503fda) {
    _0x1df95f.bindVertexArray(_0x166a8d.vaos[_0x503fda]);
    var _0x1be7c4 = _0x1df95f.getParameter(34965);
    _0x1df95f.currentElementArrayBufferBinding = _0x1be7c4 ? _0x1be7c4.name | 0 : 0;
  }
  function _0x38950f(_0x23699a) {
    _0x1df95f.blendEquation(_0x23699a);
  }
  function _0x33f7c4(_0x36b885, _0x368fe3) {
    _0x1df95f.blendEquationSeparate(_0x36b885, _0x368fe3);
  }
  function _0x3f20bf(_0x59d9b9, _0x33accd, _0x657690, _0x38bc20) {
    _0x1df95f.blendFuncSeparate(_0x59d9b9, _0x33accd, _0x657690, _0x38bc20);
  }
  function _0x2274b1(_0x444f58, _0x2472ad, _0x1c1e6b, _0x5bad6c, _0x43e534, _0x1ca896, _0x176197, _0x3a100f, _0x4f2675, _0x44566a) {
    _0x1df95f.blitFramebuffer(_0x444f58, _0x2472ad, _0x1c1e6b, _0x5bad6c, _0x43e534, _0x1ca896, _0x176197, _0x3a100f, _0x4f2675, _0x44566a);
  }
  function _0x36f78d(_0x53621d, _0x38f8dd, _0xf035f9, _0x302423) {
    if (_0x166a8d.currentContext.version >= 2) {
      if (_0xf035f9) {
        _0x1df95f.bufferData(_0x53621d, _0x2c14c3, _0x302423, _0xf035f9, _0x38f8dd);
      } else {
        _0x1df95f.bufferData(_0x53621d, _0x38f8dd, _0x302423);
      }
    } else {
      _0x1df95f.bufferData(_0x53621d, _0xf035f9 ? _0x2c14c3.subarray(_0xf035f9, _0xf035f9 + _0x38f8dd) : _0x38f8dd, _0x302423);
    }
  }
  function _0x413c24(_0x504e60, _0x310744, _0x2abf60, _0x4d2e09) {
    if (_0x166a8d.currentContext.version >= 2) {
      _0x1df95f.bufferSubData(_0x504e60, _0x310744, _0x2c14c3, _0x4d2e09, _0x2abf60);
      return;
    }
    _0x1df95f.bufferSubData(_0x504e60, _0x310744, _0x2c14c3.subarray(_0x4d2e09, _0x4d2e09 + _0x2abf60));
  }
  function _0x32ab13(_0x21957a) {
    return _0x1df95f.checkFramebufferStatus(_0x21957a);
  }
  function _0x5b7420(_0x369dec) {
    _0x1df95f.clear(_0x369dec);
  }
  function _0x1e2c03(_0x553fa7, _0xb800c0, _0xd5355d, _0x1db23f) {
    _0x1df95f.clearBufferfi(_0x553fa7, _0xb800c0, _0xd5355d, _0x1db23f);
  }
  function _0x20d0fe(_0x35b73a, _0x4eb1bc, _0x2e6a97) {
    _0x1df95f.clearBufferfv(_0x35b73a, _0x4eb1bc, _0x3a6710, _0x2e6a97 >> 2);
  }
  function _0x51a166(_0x17bfa4, _0x1b6291, _0x57440b) {
    _0x1df95f.clearBufferuiv(_0x17bfa4, _0x1b6291, _0x342aec, _0x57440b >> 2);
  }
  function _0x542bbb(_0x2c25ef, _0x581910, _0x1a1818, _0x4c3117) {
    _0x1df95f.clearColor(_0x2c25ef, _0x581910, _0x1a1818, _0x4c3117);
  }
  function _0x263cc9(_0x18cb26) {
    _0x1df95f.clearDepth(_0x18cb26);
  }
  function _0x440c8c(_0x18409b) {
    _0x1df95f.clearStencil(_0x18409b);
  }
  function _0x2a4686(_0x5450da, _0x2bc837, _0x3dd0cb, _0x11ee09) {
    return _0x1df95f.clientWaitSync(_0x166a8d.syncs[_0x5450da], _0x2bc837, _0x1c91cf(_0x3dd0cb, _0x11ee09));
  }
  function _0x1f7ca2(_0xa5198b, _0x5740e3, _0x10fe63, _0x13c1d2) {
    _0x1df95f.colorMask(!!_0xa5198b, !!_0x5740e3, !!_0x10fe63, !!_0x13c1d2);
  }
  function _0x5d867c(_0x576580) {
    _0x1df95f.compileShader(_0x166a8d.shaders[_0x576580]);
  }
  function _0x528531(_0x18296c, _0x53488e, _0x1614e9, _0x48ad96, _0x53cc76, _0x4f8111, _0x201bc4, _0x433131) {
    if (_0x166a8d.currentContext.version >= 2) {
      if (_0x1df95f.currentPixelUnpackBufferBinding) {
        _0x1df95f.compressedTexImage2D(_0x18296c, _0x53488e, _0x1614e9, _0x48ad96, _0x53cc76, _0x4f8111, _0x201bc4, _0x433131);
      } else {
        _0x1df95f.compressedTexImage2D(_0x18296c, _0x53488e, _0x1614e9, _0x48ad96, _0x53cc76, _0x4f8111, _0x2c14c3, _0x433131, _0x201bc4);
      }
      return;
    }
    _0x1df95f.compressedTexImage2D(_0x18296c, _0x53488e, _0x1614e9, _0x48ad96, _0x53cc76, _0x4f8111, _0x433131 ? _0x2c14c3.subarray(_0x433131, _0x433131 + _0x201bc4) : null);
  }
  function _0x23f31e(_0x4efc1f, _0x2353ca, _0x531263, _0x463e45, _0x153b5c, _0x303a34, _0x1d62d4, _0x1be274, _0x1e5f8b) {
    if (_0x1df95f.currentPixelUnpackBufferBinding) {
      _0x1df95f.compressedTexImage3D(_0x4efc1f, _0x2353ca, _0x531263, _0x463e45, _0x153b5c, _0x303a34, _0x1d62d4, _0x1be274, _0x1e5f8b);
    } else {
      _0x1df95f.compressedTexImage3D(_0x4efc1f, _0x2353ca, _0x531263, _0x463e45, _0x153b5c, _0x303a34, _0x1d62d4, _0x2c14c3, _0x1e5f8b, _0x1be274);
    }
  }
  function _0x26122e(_0x438781, _0x202a73, _0x41534d, _0x45657b, _0x1571af, _0xc5fe89, _0x110135, _0x5b2231, _0x40c1ea) {
    if (_0x166a8d.currentContext.version >= 2) {
      if (_0x1df95f.currentPixelUnpackBufferBinding) {
        _0x1df95f.compressedTexSubImage2D(_0x438781, _0x202a73, _0x41534d, _0x45657b, _0x1571af, _0xc5fe89, _0x110135, _0x5b2231, _0x40c1ea);
      } else {
        _0x1df95f.compressedTexSubImage2D(_0x438781, _0x202a73, _0x41534d, _0x45657b, _0x1571af, _0xc5fe89, _0x110135, _0x2c14c3, _0x40c1ea, _0x5b2231);
      }
      return;
    }
    _0x1df95f.compressedTexSubImage2D(_0x438781, _0x202a73, _0x41534d, _0x45657b, _0x1571af, _0xc5fe89, _0x110135, _0x40c1ea ? _0x2c14c3.subarray(_0x40c1ea, _0x40c1ea + _0x5b2231) : null);
  }
  function _0x1b095a(_0x22f117, _0x5a7918, _0x1b177b, _0x5da6d8, _0x6b3e7f, _0x4077e4, _0x236aae, _0x17ac48, _0x4a7f39, _0x14023d, _0x1f4b9d) {
    if (_0x1df95f.currentPixelUnpackBufferBinding) {
      _0x1df95f.compressedTexSubImage3D(_0x22f117, _0x5a7918, _0x1b177b, _0x5da6d8, _0x6b3e7f, _0x4077e4, _0x236aae, _0x17ac48, _0x4a7f39, _0x14023d, _0x1f4b9d);
    } else {
      _0x1df95f.compressedTexSubImage3D(_0x22f117, _0x5a7918, _0x1b177b, _0x5da6d8, _0x6b3e7f, _0x4077e4, _0x236aae, _0x17ac48, _0x4a7f39, _0x2c14c3, _0x1f4b9d, _0x14023d);
    }
  }
  function _0x473edc(_0x58d8d0, _0x4e0bef, _0x2cf608, _0x5924d9, _0x412f5d) {
    _0x1df95f.copyBufferSubData(_0x58d8d0, _0x4e0bef, _0x2cf608, _0x5924d9, _0x412f5d);
  }
  function _0xaf9361(_0x5b221f, _0x2367c0, _0x2de354, _0x3c8a6c, _0x563a7e, _0x28bdf8, _0x16f1d5, _0x17732b) {
    _0x1df95f.copyTexImage2D(_0x5b221f, _0x2367c0, _0x2de354, _0x3c8a6c, _0x563a7e, _0x28bdf8, _0x16f1d5, _0x17732b);
  }
  function _0x3ac1d8(_0x1ce4da, _0x3c9136, _0x1550ed, _0x372ab9, _0x39bc29, _0x5db427, _0x5df679, _0x4d791e) {
    _0x1df95f.copyTexSubImage2D(_0x1ce4da, _0x3c9136, _0x1550ed, _0x372ab9, _0x39bc29, _0x5db427, _0x5df679, _0x4d791e);
  }
  function _0x4248b5() {
    var _0x5db46d = _0x166a8d.getNewId(_0x166a8d.programs);
    var _0x20d3ae = _0x1df95f.createProgram();
    _0x20d3ae.name = _0x5db46d;
    _0x20d3ae.maxUniformLength = _0x20d3ae.maxAttributeLength = _0x20d3ae.maxUniformBlockNameLength = 0;
    _0x20d3ae.uniformIdCounter = 1;
    _0x166a8d.programs[_0x5db46d] = _0x20d3ae;
    return _0x5db46d;
  }
  function _0x23d401(_0x45fd6a) {
    var _0x49dad4 = _0x166a8d.getNewId(_0x166a8d.shaders);
    _0x166a8d.shaders[_0x49dad4] = _0x1df95f.createShader(_0x45fd6a);
    _0x166a8d.shaders[_0x49dad4].shaderType = _0x45fd6a & 1 ? "vs" : "fs";
    return _0x49dad4;
  }
  function _0x43434d(_0x360cc1) {
    _0x1df95f.cullFace(_0x360cc1);
  }
  function _0x24990c(_0x21bbad, _0x963395) {
    for (var _0x4ac1bf = 0; _0x4ac1bf < _0x21bbad; _0x4ac1bf++) {
      var _0x18a697 = _0x1b79ed[_0x963395 + _0x4ac1bf * 4 >> 2];
      var _0xf7fe40 = _0x166a8d.buffers[_0x18a697];
      if (!_0xf7fe40) {
        continue;
      }
      _0x1df95f.deleteBuffer(_0xf7fe40);
      _0xf7fe40.name = 0;
      _0x166a8d.buffers[_0x18a697] = null;
      if (_0x18a697 == _0x1df95f.currentArrayBufferBinding) {
        _0x1df95f.currentArrayBufferBinding = 0;
      }
      if (_0x18a697 == _0x1df95f.currentElementArrayBufferBinding) {
        _0x1df95f.currentElementArrayBufferBinding = 0;
      }
      if (_0x18a697 == _0x1df95f.currentPixelPackBufferBinding) {
        _0x1df95f.currentPixelPackBufferBinding = 0;
      }
      if (_0x18a697 == _0x1df95f.currentPixelUnpackBufferBinding) {
        _0x1df95f.currentPixelUnpackBufferBinding = 0;
      }
    }
  }
  function _0x2460d2(_0x4c1450, _0x405fc6) {
    for (var _0x33ad1d = 0; _0x33ad1d < _0x4c1450; ++_0x33ad1d) {
      var _0x25433c = _0x1b79ed[_0x405fc6 + _0x33ad1d * 4 >> 2];
      var _0x52a65f = _0x166a8d.framebuffers[_0x25433c];
      if (!_0x52a65f) {
        continue;
      }
      _0x1df95f.deleteFramebuffer(_0x52a65f);
      _0x52a65f.name = 0;
      _0x166a8d.framebuffers[_0x25433c] = null;
    }
  }
  function _0x5945e4(_0x3d9108) {
    if (!_0x3d9108) {
      return;
    }
    var _0x3c02bf = _0x166a8d.programs[_0x3d9108];
    if (!_0x3c02bf) {
      _0x166a8d.recordError(1281);
      return;
    }
    _0x1df95f.deleteProgram(_0x3c02bf);
    _0x3c02bf.name = 0;
    _0x166a8d.programs[_0x3d9108] = null;
  }
  function _0x326829(_0x133176, _0x532347) {
    for (var _0x2640f7 = 0; _0x2640f7 < _0x133176; _0x2640f7++) {
      var _0x3ff7d6 = _0x1b79ed[_0x532347 + _0x2640f7 * 4 >> 2];
      var _0x12a86f = _0x166a8d.queries[_0x3ff7d6];
      if (!_0x12a86f) {
        continue;
      }
      _0x1df95f.deleteQuery(_0x12a86f);
      _0x166a8d.queries[_0x3ff7d6] = null;
    }
  }
  function _0x190b47(_0x3cecdf, _0x1e10d6) {
    for (var _0x2ba6bb = 0; _0x2ba6bb < _0x3cecdf; _0x2ba6bb++) {
      var _0x49aa9f = _0x1b79ed[_0x1e10d6 + _0x2ba6bb * 4 >> 2];
      var _0x509e86 = _0x166a8d.renderbuffers[_0x49aa9f];
      if (!_0x509e86) {
        continue;
      }
      _0x1df95f.deleteRenderbuffer(_0x509e86);
      _0x509e86.name = 0;
      _0x166a8d.renderbuffers[_0x49aa9f] = null;
    }
  }
  function _0x31abcd(_0x2703b1, _0xfffd8a) {
    for (var _0x561781 = 0; _0x561781 < _0x2703b1; _0x561781++) {
      var _0x5ac1da = _0x1b79ed[_0xfffd8a + _0x561781 * 4 >> 2];
      var _0x295b30 = _0x166a8d.samplers[_0x5ac1da];
      if (!_0x295b30) {
        continue;
      }
      _0x1df95f.deleteSampler(_0x295b30);
      _0x295b30.name = 0;
      _0x166a8d.samplers[_0x5ac1da] = null;
    }
  }
  function _0x19c5a3(_0xc908c8) {
    if (!_0xc908c8) {
      return;
    }
    var _0x28c4a6 = _0x166a8d.shaders[_0xc908c8];
    if (!_0x28c4a6) {
      _0x166a8d.recordError(1281);
      return;
    }
    _0x1df95f.deleteShader(_0x28c4a6);
    _0x166a8d.shaders[_0xc908c8] = null;
  }
  function _0xff5756(_0x118323) {
    if (!_0x118323) {
      return;
    }
    var _0x8a6058 = _0x166a8d.syncs[_0x118323];
    if (!_0x8a6058) {
      _0x166a8d.recordError(1281);
      return;
    }
    _0x1df95f.deleteSync(_0x8a6058);
    _0x8a6058.name = 0;
    _0x166a8d.syncs[_0x118323] = null;
  }
  function _0x2dbd3e(_0x28a3de, _0x59e6de) {
    for (var _0x1b1410 = 0; _0x1b1410 < _0x28a3de; _0x1b1410++) {
      var _0x5cc98f = _0x1b79ed[_0x59e6de + _0x1b1410 * 4 >> 2];
      var _0xe90a8b = _0x166a8d.textures[_0x5cc98f];
      if (!_0xe90a8b) {
        continue;
      }
      _0x1df95f.deleteTexture(_0xe90a8b);
      _0xe90a8b.name = 0;
      _0x166a8d.textures[_0x5cc98f] = null;
    }
  }
  function _0x378627(_0x15387e, _0x524399) {
    for (var _0xa2a7fb = 0; _0xa2a7fb < _0x15387e; _0xa2a7fb++) {
      var _0x20d625 = _0x1b79ed[_0x524399 + _0xa2a7fb * 4 >> 2];
      var _0x400d28 = _0x166a8d.transformFeedbacks[_0x20d625];
      if (!_0x400d28) {
        continue;
      }
      _0x1df95f.deleteTransformFeedback(_0x400d28);
      _0x400d28.name = 0;
      _0x166a8d.transformFeedbacks[_0x20d625] = null;
    }
  }
  function _0x3b6360(_0x3677bc, _0x5f109b) {
    for (var _0x33ac52 = 0; _0x33ac52 < _0x3677bc; _0x33ac52++) {
      var _0x300190 = _0x1b79ed[_0x5f109b + _0x33ac52 * 4 >> 2];
      _0x1df95f.deleteVertexArray(_0x166a8d.vaos[_0x300190]);
      _0x166a8d.vaos[_0x300190] = null;
    }
  }
  function _0x1ec3a3(_0x11f759) {
    _0x1df95f.depthFunc(_0x11f759);
  }
  function _0x3c9a43(_0x2ce840) {
    _0x1df95f.depthMask(!!_0x2ce840);
  }
  function _0x330ec1(_0x3b5572, _0x51ae4e) {
    _0x1df95f.detachShader(_0x166a8d.programs[_0x3b5572], _0x166a8d.shaders[_0x51ae4e]);
  }
  function _0x105b83(_0x4422cd) {
    _0x1df95f.disable(_0x4422cd);
  }
  function _0x500e79(_0x42d272) {
    var _0x160dbb = _0x166a8d.currentContext.clientBuffers[_0x42d272];
    _0x160dbb.enabled = false;
    _0x1df95f.disableVertexAttribArray(_0x42d272);
  }
  function _0x35db63(_0x4b51b3, _0x3dc66a, _0x194481) {
    _0x166a8d.preDrawHandleClientVertexAttribBindings(_0x3dc66a + _0x194481);
    _0x1df95f.drawArrays(_0x4b51b3, _0x3dc66a, _0x194481);
    _0x166a8d.postDrawHandleClientVertexAttribBindings();
  }
  function _0x3e2cdc(_0x244fa0, _0x41d571, _0x39ed26, _0xe8c14b) {
    _0x1df95f.drawArraysInstanced(_0x244fa0, _0x41d571, _0x39ed26, _0xe8c14b);
  }
  var _0x20aeb7 = [];
  function _0x21562e(_0x2991bb, _0x3320df) {
    var _0x132b3c = _0x20aeb7[_0x2991bb];
    for (var _0x17f771 = 0; _0x17f771 < _0x2991bb; _0x17f771++) {
      _0x132b3c[_0x17f771] = _0x1b79ed[_0x3320df + _0x17f771 * 4 >> 2];
    }
    _0x1df95f.drawBuffers(_0x132b3c);
  }
  function _0x4276c8(_0x76c928, _0x2b4070, _0x2c4b61, _0x107ee3) {
    var _0x3c4278;
    if (!_0x1df95f.currentElementArrayBufferBinding) {
      var _0x5f4227 = _0x166a8d.calcBufLength(1, _0x2c4b61, 0, _0x2b4070);
      _0x3c4278 = _0x166a8d.getTempIndexBuffer(_0x5f4227);
      _0x1df95f.bindBuffer(34963, _0x3c4278);
      _0x1df95f.bufferSubData(34963, 0, _0x2c14c3.subarray(_0x107ee3, _0x107ee3 + _0x5f4227));
      _0x107ee3 = 0;
    }
    _0x166a8d.preDrawHandleClientVertexAttribBindings(_0x2b4070);
    _0x1df95f.drawElements(_0x76c928, _0x2b4070, _0x2c4b61, _0x107ee3);
    _0x166a8d.postDrawHandleClientVertexAttribBindings(_0x2b4070);
    if (!_0x1df95f.currentElementArrayBufferBinding) {
      _0x1df95f.bindBuffer(34963, null);
    }
  }
  function _0x25fa87(_0x4147b8, _0x532f1b, _0x2aa3f2, _0x2f9e20, _0xfd04d8) {
    _0x1df95f.drawElementsInstanced(_0x4147b8, _0x532f1b, _0x2aa3f2, _0x2f9e20, _0xfd04d8);
  }
  function _0x11d333(_0x40cd9d) {
    _0x1df95f.enable(_0x40cd9d);
  }
  function _0x1084fb(_0x1f6be1) {
    var _0x1477f4 = _0x166a8d.currentContext.clientBuffers[_0x1f6be1];
    _0x1477f4.enabled = true;
    _0x1df95f.enableVertexAttribArray(_0x1f6be1);
  }
  function _0x3fa080(_0x7927c1) {
    _0x1df95f.endQuery(_0x7927c1);
  }
  function _0x8fba2e() {
    _0x1df95f.endTransformFeedback();
  }
  function _0x42f4bc(_0x3cae22, _0x224162) {
    var _0x3f0f16 = _0x1df95f.fenceSync(_0x3cae22, _0x224162);
    if (_0x3f0f16) {
      var _0x237d66 = _0x166a8d.getNewId(_0x166a8d.syncs);
      _0x3f0f16.name = _0x237d66;
      _0x166a8d.syncs[_0x237d66] = _0x3f0f16;
      return _0x237d66;
    } else {
      return 0;
    }
  }
  function _0x12d9be() {
    _0x1df95f.finish();
  }
  function _0x2d2e59() {
    _0x1df95f.flush();
  }
  function _0x43746a(_0xfc14d0) {
    switch (_0xfc14d0) {
      case 34962:
        _0xfc14d0 = 34964;
        break;
      case 34963:
        _0xfc14d0 = 34965;
        break;
      case 35051:
        _0xfc14d0 = 35053;
        break;
      case 35052:
        _0xfc14d0 = 35055;
        break;
      case 35982:
        _0xfc14d0 = 35983;
        break;
      case 36662:
        _0xfc14d0 = 36662;
        break;
      case 36663:
        _0xfc14d0 = 36663;
        break;
      case 35345:
        _0xfc14d0 = 35368;
        break;
    }
    var _0x36f993 = _0x1df95f.getParameter(_0xfc14d0);
    if (_0x36f993) {
      return _0x36f993.name | 0;
    } else {
      return 0;
    }
  }
  function _0x1e94b5(_0x5ad6fe) {
    switch (_0x5ad6fe) {
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
  function _0x12bb81(_0x422e67, _0x101b75, _0x2715) {
    if (!_0x1e94b5(_0x422e67)) {
      _0x166a8d.recordError(1280);
      _0x235a52("GL_INVALID_ENUM in glFlushMappedBufferRange");
      return;
    }
    var _0x53bc84 = _0x166a8d.mappedBuffers[_0x43746a(_0x422e67)];
    if (!_0x53bc84) {
      _0x166a8d.recordError(1282);
      _0x235a52("buffer was never mapped in glFlushMappedBufferRange");
      return;
    }
    if (!(_0x53bc84.access & 16)) {
      _0x166a8d.recordError(1282);
      _0x235a52("buffer was not mapped with GL_MAP_FLUSH_EXPLICIT_BIT in glFlushMappedBufferRange");
      return;
    }
    if (_0x101b75 < 0 || _0x2715 < 0 || _0x101b75 + _0x2715 > _0x53bc84.length) {
      _0x166a8d.recordError(1281);
      _0x235a52("invalid range in glFlushMappedBufferRange");
      return;
    }
    _0x1df95f.bufferSubData(_0x422e67, _0x53bc84.offset, _0x2c14c3.subarray(_0x53bc84.mem + _0x101b75, _0x53bc84.mem + _0x101b75 + _0x2715));
  }
  function _0x8611aa(_0x237d54, _0x56ae09, _0x130606, _0x470fdf) {
    _0x1df95f.framebufferRenderbuffer(_0x237d54, _0x56ae09, _0x130606, _0x166a8d.renderbuffers[_0x470fdf]);
  }
  function _0x1045f1(_0x225609, _0x226ebb, _0x15a1ba, _0x1b1d04, _0x319601) {
    _0x1df95f.framebufferTexture2D(_0x225609, _0x226ebb, _0x15a1ba, _0x166a8d.textures[_0x1b1d04], _0x319601);
  }
  function _0x5c0a94(_0x5283c2, _0xb0e519, _0x3957cf, _0x4893b7, _0x53b8a5) {
    _0x1df95f.framebufferTextureLayer(_0x5283c2, _0xb0e519, _0x166a8d.textures[_0x3957cf], _0x4893b7, _0x53b8a5);
  }
  function _0x169239(_0x379379) {
    _0x1df95f.frontFace(_0x379379);
  }
  function _0x2d1d48(_0x141eef, _0x2bf081, _0x13b67e, _0x56b824) {
    for (var _0x18a966 = 0; _0x18a966 < _0x141eef; _0x18a966++) {
      var _0x2be9ed = _0x1df95f[_0x13b67e]();
      var _0x9897c3 = _0x2be9ed && _0x166a8d.getNewId(_0x56b824);
      if (_0x2be9ed) {
        _0x2be9ed.name = _0x9897c3;
        _0x56b824[_0x9897c3] = _0x2be9ed;
      } else {
        _0x166a8d.recordError(1282);
      }
      _0x1b79ed[_0x2bf081 + _0x18a966 * 4 >> 2] = _0x9897c3;
    }
  }
  function _0x2432ad(_0x492472, _0x2f301f) {
    _0x2d1d48(_0x492472, _0x2f301f, "createBuffer", _0x166a8d.buffers);
  }
  function _0x55fa85(_0x1d841f, _0x2e2a1e) {
    _0x2d1d48(_0x1d841f, _0x2e2a1e, "createFramebuffer", _0x166a8d.framebuffers);
  }
  function _0x2f2610(_0x4a5a7a, _0x28d55b) {
    _0x2d1d48(_0x4a5a7a, _0x28d55b, "createQuery", _0x166a8d.queries);
  }
  function _0x388299(_0x5e2d30, _0x202cdf) {
    _0x2d1d48(_0x5e2d30, _0x202cdf, "createRenderbuffer", _0x166a8d.renderbuffers);
  }
  function _0x24e02a(_0x374c88, _0x55777b) {
    _0x2d1d48(_0x374c88, _0x55777b, "createSampler", _0x166a8d.samplers);
  }
  function _0xf4fb23(_0x432187, _0x5efa9d) {
    _0x2d1d48(_0x432187, _0x5efa9d, "createTexture", _0x166a8d.textures);
  }
  function _0x2dc3d6(_0x454375, _0x224f8d) {
    _0x2d1d48(_0x454375, _0x224f8d, "createTransformFeedback", _0x166a8d.transformFeedbacks);
  }
  function _0x52747e(_0x3fc2a3, _0x29e3ad) {
    _0x2d1d48(_0x3fc2a3, _0x29e3ad, "createVertexArray", _0x166a8d.vaos);
  }
  function _0x5b04a3(_0x43456c) {
    _0x1df95f.generateMipmap(_0x43456c);
  }
  function _0x4ac023(_0x4fb5d1, _0x517d59, _0x222bbb, _0x14dcb3, _0x567994, _0x1282e8, _0x1eaf3d, _0x2bc2ad) {
    _0x517d59 = _0x166a8d.programs[_0x517d59];
    var _0x58d6d0 = _0x1df95f[_0x4fb5d1](_0x517d59, _0x222bbb);
    if (_0x58d6d0) {
      var _0x4a677c = _0x2bc2ad && _0x38fbc9(_0x58d6d0.name, _0x2bc2ad, _0x14dcb3);
      if (_0x567994) {
        _0x1b79ed[_0x567994 >> 2] = _0x4a677c;
      }
      if (_0x1282e8) {
        _0x1b79ed[_0x1282e8 >> 2] = _0x58d6d0.size;
      }
      if (_0x1eaf3d) {
        _0x1b79ed[_0x1eaf3d >> 2] = _0x58d6d0.type;
      }
    }
  }
  function _0x3f814c(_0x2f65ac, _0x126d4e, _0x3acd99, _0xb1520e, _0xa0e0a2, _0x691f41, _0x235dde) {
    _0x4ac023("getActiveAttrib", _0x2f65ac, _0x126d4e, _0x3acd99, _0xb1520e, _0xa0e0a2, _0x691f41, _0x235dde);
  }
  function _0x217f1a(_0x5834a2, _0x111490, _0x33c71b, _0x5978c0, _0x33039d, _0x32ce03, _0x47b151) {
    _0x4ac023("getActiveUniform", _0x5834a2, _0x111490, _0x33c71b, _0x5978c0, _0x33039d, _0x32ce03, _0x47b151);
  }
  function _0x3b7709(_0x3a2494, _0x1f9766, _0x13584f, _0x59bddf, _0x444158) {
    _0x3a2494 = _0x166a8d.programs[_0x3a2494];
    var _0xbed51a = _0x1df95f.getActiveUniformBlockName(_0x3a2494, _0x1f9766);
    if (!_0xbed51a) {
      return;
    }
    if (_0x444158 && _0x13584f > 0) {
      var _0x43002c = _0x38fbc9(_0xbed51a, _0x444158, _0x13584f);
      if (_0x59bddf) {
        _0x1b79ed[_0x59bddf >> 2] = _0x43002c;
      }
    } else if (_0x59bddf) {
      _0x1b79ed[_0x59bddf >> 2] = 0;
    }
  }
  function _0x3fe19f(_0x357d2b, _0x24e2eb, _0x4df952, _0x3b041c) {
    if (!_0x3b041c) {
      _0x166a8d.recordError(1281);
      return;
    }
    _0x357d2b = _0x166a8d.programs[_0x357d2b];
    if (_0x4df952 == 35393) {
      var _0x2a8e9f = _0x1df95f.getActiveUniformBlockName(_0x357d2b, _0x24e2eb);
      _0x1b79ed[_0x3b041c >> 2] = _0x2a8e9f.length + 1;
      return;
    }
    var _0x437a65 = _0x1df95f.getActiveUniformBlockParameter(_0x357d2b, _0x24e2eb, _0x4df952);
    if (_0x437a65 === null) {
      return;
    }
    if (_0x4df952 == 35395) {
      for (var _0x2426d8 = 0; _0x2426d8 < _0x437a65.length; _0x2426d8++) {
        _0x1b79ed[_0x3b041c + _0x2426d8 * 4 >> 2] = _0x437a65[_0x2426d8];
      }
    } else {
      _0x1b79ed[_0x3b041c >> 2] = _0x437a65;
    }
  }
  function _0x4294b8(_0xd8c458, _0x6d5286, _0x179ae2, _0x383590, _0xdce53c) {
    if (!_0xdce53c) {
      _0x166a8d.recordError(1281);
      return;
    }
    if (_0x6d5286 > 0 && _0x179ae2 == 0) {
      _0x166a8d.recordError(1281);
      return;
    }
    _0xd8c458 = _0x166a8d.programs[_0xd8c458];
    var _0x3b6bb2 = [];
    for (var _0x4cace6 = 0; _0x4cace6 < _0x6d5286; _0x4cace6++) {
      _0x3b6bb2.push(_0x1b79ed[_0x179ae2 + _0x4cace6 * 4 >> 2]);
    }
    var _0x842dcd = _0x1df95f.getActiveUniforms(_0xd8c458, _0x3b6bb2, _0x383590);
    if (!_0x842dcd) {
      return;
    }
    var _0x15c810 = _0x842dcd.length;
    for (var _0x4cace6 = 0; _0x4cace6 < _0x15c810; _0x4cace6++) {
      _0x1b79ed[_0xdce53c + _0x4cace6 * 4 >> 2] = _0x842dcd[_0x4cace6];
    }
  }
  function _0x1c5aa0(_0x4e9225, _0x54b56d) {
    return _0x1df95f.getAttribLocation(_0x166a8d.programs[_0x4e9225], _0x5ea6bb(_0x54b56d));
  }
  function _0x5bf47e(_0xae6f78, _0x12319e, _0x366768, _0x4836d9) {
    if (!_0x4836d9) {
      _0x166a8d.recordError(1281);
      return;
    }
    _0x1df95f.getBufferSubData(_0xae6f78, _0x12319e, _0x2c14c3, _0x4836d9, _0x366768);
  }
  function _0x1f7c6e() {
    var _0x59666c = _0x1df95f.getError() || _0x166a8d.lastError;
    _0x166a8d.lastError = 0;
    return _0x59666c;
  }
  function _0x4c4248(_0x475e7f, _0x1b8c9e, _0x4d0154, _0x10a4e1) {
    var _0x407c4f = _0x1df95f.getFramebufferAttachmentParameter(_0x475e7f, _0x1b8c9e, _0x4d0154);
    if (_0x407c4f instanceof WebGLRenderbuffer || _0x407c4f instanceof WebGLTexture) {
      _0x407c4f = _0x407c4f.name | 0;
    }
    _0x1b79ed[_0x10a4e1 >> 2] = _0x407c4f;
  }
  function _0x5c2b59(_0x3d08e0, _0x201db0) {
    _0x342aec[_0x3d08e0 >> 2] = _0x201db0;
    _0x342aec[_0x3d08e0 + 4 >> 2] = (_0x201db0 - _0x342aec[_0x3d08e0 >> 2]) / 4294967296;
  }
  function _0x1c3348(_0x15f537, _0x3615b7, _0x4f63b8, _0x40ac74) {
    if (!_0x4f63b8) {
      _0x166a8d.recordError(1281);
      return;
    }
    var _0x43ee5f = _0x1df95f.getIndexedParameter(_0x15f537, _0x3615b7);
    var _0x3292b9;
    switch (typeof _0x43ee5f) {
      case "boolean":
        _0x3292b9 = _0x43ee5f ? 1 : 0;
        break;
      case "number":
        _0x3292b9 = _0x43ee5f;
        break;
      case "object":
        if (_0x43ee5f === null) {
          switch (_0x15f537) {
            case 35983:
            case 35368:
              _0x3292b9 = 0;
              break;
            default:
              {
                _0x166a8d.recordError(1280);
                return;
              }
          }
        } else if (_0x43ee5f instanceof WebGLBuffer) {
          _0x3292b9 = _0x43ee5f.name | 0;
        } else {
          _0x166a8d.recordError(1280);
          return;
        }
        break;
      default:
        _0x166a8d.recordError(1280);
        return;
    }
    switch (_0x40ac74) {
      case 1:
        _0x5c2b59(_0x4f63b8, _0x3292b9);
        break;
      case 0:
        _0x1b79ed[_0x4f63b8 >> 2] = _0x3292b9;
        break;
      case 2:
        _0x3a6710[_0x4f63b8 >> 2] = _0x3292b9;
        break;
      case 4:
        _0x18b38f[_0x4f63b8 >> 0] = _0x3292b9 ? 1 : 0;
        break;
      default:
        throw "internal emscriptenWebGLGetIndexed() error, bad type: " + _0x40ac74;
    }
  }
  function _0x1912c8(_0x2a1afd, _0x9e3b8b, _0x29c23d) {
    _0x1c3348(_0x2a1afd, _0x9e3b8b, _0x29c23d, 0);
  }
  function _0x1c7f90(_0x30b64f, _0x4d5871, _0x3726f4) {
    if (!_0x4d5871) {
      _0x166a8d.recordError(1281);
      return;
    }
    var _0x4762ea = undefined;
    switch (_0x30b64f) {
      case 36346:
        _0x4762ea = 1;
        break;
      case 36344:
        if (_0x3726f4 != 0 && _0x3726f4 != 1) {
          _0x166a8d.recordError(1280);
        }
        return;
      case 34814:
      case 36345:
        _0x4762ea = 0;
        break;
      case 34466:
        var _0x315a77 = _0x1df95f.getParameter(34467);
        _0x4762ea = _0x315a77 ? _0x315a77.length : 0;
        break;
      case 33390:
        _0x4762ea = 1048576;
        break;
      case 33309:
        if (_0x166a8d.currentContext.version < 2) {
          _0x166a8d.recordError(1282);
          return;
        }
        var _0x247284 = _0x1df95f.getSupportedExtensions() || [];
        _0x4762ea = _0x247284.length * 2;
        break;
      case 33307:
      case 33308:
        if (_0x166a8d.currentContext.version < 2) {
          _0x166a8d.recordError(1280);
          return;
        }
        _0x4762ea = _0x30b64f == 33307 ? 3 : 0;
        break;
    }
    if (_0x4762ea === undefined) {
      var _0x1e7987 = _0x1df95f.getParameter(_0x30b64f);
      switch (typeof _0x1e7987) {
        case "number":
          _0x4762ea = _0x1e7987;
          break;
        case "boolean":
          _0x4762ea = _0x1e7987 ? 1 : 0;
          break;
        case "string":
          _0x166a8d.recordError(1280);
          return;
        case "object":
          if (_0x1e7987 === null) {
            switch (_0x30b64f) {
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
                  _0x4762ea = 0;
                  break;
                }
              default:
                {
                  _0x166a8d.recordError(1280);
                  return;
                }
            }
          } else if (_0x1e7987 instanceof Float32Array || _0x1e7987 instanceof Uint32Array || _0x1e7987 instanceof Int32Array || _0x1e7987 instanceof Array) {
            for (var _0x29699b = 0; _0x29699b < _0x1e7987.length; ++_0x29699b) {
              switch (_0x3726f4) {
                case 0:
                  _0x1b79ed[_0x4d5871 + _0x29699b * 4 >> 2] = _0x1e7987[_0x29699b];
                  break;
                case 2:
                  _0x3a6710[_0x4d5871 + _0x29699b * 4 >> 2] = _0x1e7987[_0x29699b];
                  break;
                case 4:
                  _0x18b38f[_0x4d5871 + _0x29699b >> 0] = _0x1e7987[_0x29699b] ? 1 : 0;
                  break;
              }
            }
            return;
          } else {
            try {
              _0x4762ea = _0x1e7987.name | 0;
            } catch (_0xc9d4ae) {
              _0x166a8d.recordError(1280);
              _0x235a52("GL_INVALID_ENUM in glGet" + _0x3726f4 + "v: Unknown object returned from WebGL getParameter(" + _0x30b64f + ")! (error: " + _0xc9d4ae + ")");
              return;
            }
          }
          break;
        default:
          _0x166a8d.recordError(1280);
          _0x235a52("GL_INVALID_ENUM in glGet" + _0x3726f4 + "v: Native code calling glGet" + _0x3726f4 + "v(" + _0x30b64f + ") and it returns " + _0x1e7987 + " of type " + typeof _0x1e7987 + "!");
          return;
      }
    }
    switch (_0x3726f4) {
      case 1:
        _0x5c2b59(_0x4d5871, _0x4762ea);
        break;
      case 0:
        _0x1b79ed[_0x4d5871 >> 2] = _0x4762ea;
        break;
      case 2:
        _0x3a6710[_0x4d5871 >> 2] = _0x4762ea;
        break;
      case 4:
        _0x18b38f[_0x4d5871 >> 0] = _0x4762ea ? 1 : 0;
        break;
    }
  }
  function _0x17df91(_0x57bd17, _0x248ee4) {
    _0x1c7f90(_0x57bd17, _0x248ee4, 0);
  }
  function _0x440b03(_0xed988e, _0x19260f, _0x16ddd7, _0x56a7ca, _0x4da643) {
    if (_0x56a7ca < 0) {
      _0x166a8d.recordError(1281);
      return;
    }
    if (!_0x4da643) {
      _0x166a8d.recordError(1281);
      return;
    }
    var _0x2210c3 = _0x1df95f.getInternalformatParameter(_0xed988e, _0x19260f, _0x16ddd7);
    if (_0x2210c3 === null) {
      return;
    }
    for (var _0x1afa06 = 0; _0x1afa06 < _0x2210c3.length && _0x1afa06 < _0x56a7ca; ++_0x1afa06) {
      _0x1b79ed[_0x4da643 + _0x1afa06 * 4 >> 2] = _0x2210c3[_0x1afa06];
    }
  }
  function _0x11b420(_0x1e1d18, _0x5b0bb5, _0x2fbc02, _0x41e1b0, _0x2c1918) {
    _0x166a8d.recordError(1282);
  }
  function _0x5dda6c(_0x466200, _0xaa00ea, _0x19e38c, _0x552027) {
    var _0x340a01 = _0x1df95f.getProgramInfoLog(_0x166a8d.programs[_0x466200]);
    if (_0x340a01 === null) {
      _0x340a01 = "(unknown error)";
    }
    var _0x13a1fa = _0xaa00ea > 0 && _0x552027 ? _0x38fbc9(_0x340a01, _0x552027, _0xaa00ea) : 0;
    if (_0x19e38c) {
      _0x1b79ed[_0x19e38c >> 2] = _0x13a1fa;
    }
  }
  function _0x5d84e0(_0x5be141, _0x26f4fd, _0x132471) {
    if (!_0x132471) {
      _0x166a8d.recordError(1281);
      return;
    }
    if (_0x5be141 >= _0x166a8d.counter) {
      _0x166a8d.recordError(1281);
      return;
    }
    _0x5be141 = _0x166a8d.programs[_0x5be141];
    if (_0x26f4fd == 35716) {
      var _0x53a2a5 = _0x1df95f.getProgramInfoLog(_0x5be141);
      if (_0x53a2a5 === null) {
        _0x53a2a5 = "(unknown error)";
      }
      _0x1b79ed[_0x132471 >> 2] = _0x53a2a5.length + 1;
    } else if (_0x26f4fd == 35719) {
      if (!_0x5be141.maxUniformLength) {
        for (var _0x4cb9bb = 0; _0x4cb9bb < _0x1df95f.getProgramParameter(_0x5be141, 35718); ++_0x4cb9bb) {
          _0x5be141.maxUniformLength = Math.max(_0x5be141.maxUniformLength, _0x1df95f.getActiveUniform(_0x5be141, _0x4cb9bb).name.length + 1);
        }
      }
      _0x1b79ed[_0x132471 >> 2] = _0x5be141.maxUniformLength;
    } else if (_0x26f4fd == 35722) {
      if (!_0x5be141.maxAttributeLength) {
        for (var _0x4cb9bb = 0; _0x4cb9bb < _0x1df95f.getProgramParameter(_0x5be141, 35721); ++_0x4cb9bb) {
          _0x5be141.maxAttributeLength = Math.max(_0x5be141.maxAttributeLength, _0x1df95f.getActiveAttrib(_0x5be141, _0x4cb9bb).name.length + 1);
        }
      }
      _0x1b79ed[_0x132471 >> 2] = _0x5be141.maxAttributeLength;
    } else if (_0x26f4fd == 35381) {
      if (!_0x5be141.maxUniformBlockNameLength) {
        for (var _0x4cb9bb = 0; _0x4cb9bb < _0x1df95f.getProgramParameter(_0x5be141, 35382); ++_0x4cb9bb) {
          _0x5be141.maxUniformBlockNameLength = Math.max(_0x5be141.maxUniformBlockNameLength, _0x1df95f.getActiveUniformBlockName(_0x5be141, _0x4cb9bb).length + 1);
        }
      }
      _0x1b79ed[_0x132471 >> 2] = _0x5be141.maxUniformBlockNameLength;
    } else {
      _0x1b79ed[_0x132471 >> 2] = _0x1df95f.getProgramParameter(_0x5be141, _0x26f4fd);
    }
  }
  function _0x40e4b6(_0x161eee, _0x3a4762, _0x560143) {
    if (!_0x560143) {
      _0x166a8d.recordError(1281);
      return;
    }
    var _0x59dac2 = _0x166a8d.queries[_0x161eee];
    var _0x417b05 = _0x1df95f.getQueryParameter(_0x59dac2, _0x3a4762);
    var _0x121650;
    if (typeof _0x417b05 == "boolean") {
      _0x121650 = _0x417b05 ? 1 : 0;
    } else {
      _0x121650 = _0x417b05;
    }
    _0x1b79ed[_0x560143 >> 2] = _0x121650;
  }
  function _0x5cb2f1(_0xf9880e, _0x533898, _0x1802bd) {
    if (!_0x1802bd) {
      _0x166a8d.recordError(1281);
      return;
    }
    _0x1b79ed[_0x1802bd >> 2] = _0x1df95f.getQuery(_0xf9880e, _0x533898);
  }
  function _0x259459(_0x5970ab, _0x13ccc4, _0x5258ba) {
    if (!_0x5258ba) {
      _0x166a8d.recordError(1281);
      return;
    }
    _0x1b79ed[_0x5258ba >> 2] = _0x1df95f.getRenderbufferParameter(_0x5970ab, _0x13ccc4);
  }
  function _0x1322fb(_0x3788db, _0x5e5f8b, _0x111964, _0x137f91) {
    var _0x36a2e3 = _0x1df95f.getShaderInfoLog(_0x166a8d.shaders[_0x3788db]);
    if (_0x36a2e3 === null) {
      _0x36a2e3 = "(unknown error)";
    }
    var _0x7d4f17 = _0x5e5f8b > 0 && _0x137f91 ? _0x38fbc9(_0x36a2e3, _0x137f91, _0x5e5f8b) : 0;
    if (_0x111964) {
      _0x1b79ed[_0x111964 >> 2] = _0x7d4f17;
    }
  }
  function _0x959ee9(_0x5c54b9, _0x34270d, _0x29e1b1, _0x1d93d8) {
    var _0x110754 = _0x1df95f.getShaderPrecisionFormat(_0x5c54b9, _0x34270d);
    _0x1b79ed[_0x29e1b1 >> 2] = _0x110754.rangeMin;
    _0x1b79ed[_0x29e1b1 + 4 >> 2] = _0x110754.rangeMax;
    _0x1b79ed[_0x1d93d8 >> 2] = _0x110754.precision;
  }
  function _0x486811(_0x228b9d, _0xded8cb, _0x4903a3, _0x19b167) {
    var _0x366a67 = _0x1df95f.getShaderSource(_0x166a8d.shaders[_0x228b9d]);
    if (!_0x366a67) {
      return;
    }
    var _0x20a973 = _0xded8cb > 0 && _0x19b167 ? _0x38fbc9(_0x366a67, _0x19b167, _0xded8cb) : 0;
    if (_0x4903a3) {
      _0x1b79ed[_0x4903a3 >> 2] = _0x20a973;
    }
  }
  function _0x3cf89c(_0x3ba456, _0x14b571, _0x5ac188) {
    if (!_0x5ac188) {
      _0x166a8d.recordError(1281);
      return;
    }
    if (_0x14b571 == 35716) {
      var _0x5c4a62 = _0x1df95f.getShaderInfoLog(_0x166a8d.shaders[_0x3ba456]);
      if (_0x5c4a62 === null) {
        _0x5c4a62 = "(unknown error)";
      }
      var _0x1fb24a = _0x5c4a62 ? _0x5c4a62.length + 1 : 0;
      _0x1b79ed[_0x5ac188 >> 2] = _0x1fb24a;
    } else if (_0x14b571 == 35720) {
      var _0x209236 = _0x1df95f.getShaderSource(_0x166a8d.shaders[_0x3ba456]);
      var _0x3952a8 = _0x209236 ? _0x209236.length + 1 : 0;
      _0x1b79ed[_0x5ac188 >> 2] = _0x3952a8;
    } else {
      _0x1b79ed[_0x5ac188 >> 2] = _0x1df95f.getShaderParameter(_0x166a8d.shaders[_0x3ba456], _0x14b571);
    }
  }
  function _0x117496(_0x25dc83) {
    var _0x1a3834 = _0x166a8d.stringCache[_0x25dc83];
    if (!_0x1a3834) {
      switch (_0x25dc83) {
        case 7939:
          var _0x47afe8 = _0x1df95f.getSupportedExtensions() || [];
          _0x47afe8 = _0x47afe8.concat(_0x47afe8.map(function (_0x1770cf) {
            return "GL_" + _0x1770cf;
          }));
          _0x1a3834 = _0x1fc3db(_0x47afe8.join(" "));
          break;
        case 7936:
        case 7937:
        case 37445:
        case 37446:
          var _0x805926 = _0x1df95f.getParameter(_0x25dc83);
          if (!_0x805926) {
            _0x166a8d.recordError(1280);
          }
          _0x1a3834 = _0x805926 && _0x1fc3db(_0x805926);
          break;
        case 7938:
          var _0x5456ae = _0x1df95f.getParameter(7938);
          if (_0x166a8d.currentContext.version >= 2) {
            _0x5456ae = "OpenGL ES 3.0 (" + _0x5456ae + ")";
          } else {
            _0x5456ae = "OpenGL ES 2.0 (" + _0x5456ae + ")";
          }
          _0x1a3834 = _0x1fc3db(_0x5456ae);
          break;
        case 35724:
          var _0x34b945 = _0x1df95f.getParameter(35724);
          var _0x533cd8 = /^WebGL GLSL ES ([0-9]\.[0-9][0-9]?)(?:$| .*)/;
          var _0x259656 = _0x34b945.match(_0x533cd8);
          if (_0x259656 !== null) {
            if (_0x259656[1].length == 3) {
              _0x259656[1] = _0x259656[1] + "0";
            }
            _0x34b945 = "OpenGL ES GLSL ES " + _0x259656[1] + " (" + _0x34b945 + ")";
          }
          _0x1a3834 = _0x1fc3db(_0x34b945);
          break;
        default:
          _0x166a8d.recordError(1280);
      }
      _0x166a8d.stringCache[_0x25dc83] = _0x1a3834;
    }
    return _0x1a3834;
  }
  function _0x108d9a(_0x58a00a, _0x4b3bb5) {
    if (_0x166a8d.currentContext.version < 2) {
      _0x166a8d.recordError(1282);
      return 0;
    }
    var _0x499da5 = _0x166a8d.stringiCache[_0x58a00a];
    if (_0x499da5) {
      if (_0x4b3bb5 < 0 || _0x4b3bb5 >= _0x499da5.length) {
        _0x166a8d.recordError(1281);
        return 0;
      }
      return _0x499da5[_0x4b3bb5];
    }
    switch (_0x58a00a) {
      case 7939:
        var _0x27861c = _0x1df95f.getSupportedExtensions() || [];
        _0x27861c = _0x27861c.concat(_0x27861c.map(function (_0x2ea7d5) {
          return "GL_" + _0x2ea7d5;
        }));
        _0x27861c = _0x27861c.map(function (_0x47963d) {
          return _0x1fc3db(_0x47963d);
        });
        _0x499da5 = _0x166a8d.stringiCache[_0x58a00a] = _0x27861c;
        if (_0x4b3bb5 < 0 || _0x4b3bb5 >= _0x499da5.length) {
          _0x166a8d.recordError(1281);
          return 0;
        }
        return _0x499da5[_0x4b3bb5];
      default:
        _0x166a8d.recordError(1280);
        return 0;
    }
  }
  function _0x3a7ddc(_0x3e0e6f, _0x1d7567, _0x12e15f) {
    if (!_0x12e15f) {
      _0x166a8d.recordError(1281);
      return;
    }
    _0x1b79ed[_0x12e15f >> 2] = _0x1df95f.getTexParameter(_0x3e0e6f, _0x1d7567);
  }
  function _0x328c80(_0x2eae97, _0x203e18) {
    return _0x1df95f.getUniformBlockIndex(_0x166a8d.programs[_0x2eae97], _0x5ea6bb(_0x203e18));
  }
  function _0x2dd9ef(_0x36d9d6, _0xb3199e, _0x1b9c8d, _0x4b4da8) {
    if (!_0x4b4da8) {
      _0x166a8d.recordError(1281);
      return;
    }
    if (_0xb3199e > 0 && (_0x1b9c8d == 0 || _0x4b4da8 == 0)) {
      _0x166a8d.recordError(1281);
      return;
    }
    _0x36d9d6 = _0x166a8d.programs[_0x36d9d6];
    var _0x45135e = [];
    for (var _0x4ec7a1 = 0; _0x4ec7a1 < _0xb3199e; _0x4ec7a1++) {
      _0x45135e.push(_0x5ea6bb(_0x1b79ed[_0x1b9c8d + _0x4ec7a1 * 4 >> 2]));
    }
    var _0x299245 = _0x1df95f.getUniformIndices(_0x36d9d6, _0x45135e);
    if (!_0x299245) {
      return;
    }
    var _0x4b84bc = _0x299245.length;
    for (var _0x4ec7a1 = 0; _0x4ec7a1 < _0x4b84bc; _0x4ec7a1++) {
      _0x1b79ed[_0x4b4da8 + _0x4ec7a1 * 4 >> 2] = _0x299245[_0x4ec7a1];
    }
  }
  function _0x566f98(_0x58084f, _0x3832be) {
    function _0x42f5ba(_0x343e94) {
      return _0x343e94.slice(-1) == "]" && _0x343e94.lastIndexOf("[");
    }
    _0x3832be = _0x5ea6bb(_0x3832be);
    if (_0x58084f = _0x166a8d.programs[_0x58084f]) {
      var _0x5bde15 = _0x58084f.uniformLocsById;
      var _0x112775 = _0x58084f.uniformSizeAndIdsByName;
      var _0x4daf63;
      var _0x498f8c;
      var _0x4a8669 = 0;
      var _0x3fcccf = _0x3832be;
      var _0x597235 = _0x42f5ba(_0x3832be);
      if (!_0x5bde15) {
        _0x58084f.uniformLocsById = _0x5bde15 = {};
        _0x58084f.uniformArrayNamesById = {};
        for (_0x4daf63 = 0; _0x4daf63 < _0x1df95f.getProgramParameter(_0x58084f, 35718); ++_0x4daf63) {
          var _0xe0981b = _0x1df95f.getActiveUniform(_0x58084f, _0x4daf63);
          var _0x925008 = _0xe0981b.name;
          var _0x59aa9a = _0xe0981b.size;
          var _0xdbe447 = _0x42f5ba(_0x925008);
          var _0x496c1e = _0xdbe447 > 0 ? _0x925008.slice(0, _0xdbe447) : _0x925008;
          var _0x5dd8d5 = _0x112775[_0x496c1e] ? _0x112775[_0x496c1e][1] : _0x58084f.uniformIdCounter;
          _0x58084f.uniformIdCounter = Math.max(_0x5dd8d5 + _0x59aa9a, _0x58084f.uniformIdCounter);
          _0x112775[_0x496c1e] = [_0x59aa9a, _0x5dd8d5];
          for (_0x498f8c = 0; _0x498f8c < _0x59aa9a; ++_0x498f8c) {
            _0x5bde15[_0x5dd8d5] = _0x498f8c;
            _0x58084f.uniformArrayNamesById[_0x5dd8d5++] = _0x496c1e;
          }
        }
      }
      if (_0x597235 > 0) {
        _0x4a8669 = _0x18f32d(_0x3832be.slice(_0x597235 + 1)) >>> 0;
        _0x3fcccf = _0x3832be.slice(0, _0x597235);
      }
      var _0x4b9214 = _0x112775[_0x3fcccf];
      if (_0x4b9214 && _0x4a8669 < _0x4b9214[0]) {
        _0x4a8669 += _0x4b9214[1];
        if (_0x5bde15[_0x4a8669] = _0x5bde15[_0x4a8669] || _0x1df95f.getUniformLocation(_0x58084f, _0x3832be)) {
          return _0x4a8669;
        }
      }
    } else {
      _0x166a8d.recordError(1281);
    }
    return -1;
  }
  function _0x557d3c(_0x481164) {
    var _0x2ad1a2 = _0x1df95f.currentProgram;
    if (_0x2ad1a2) {
      var _0x36c3a8 = _0x2ad1a2.uniformLocsById[_0x481164];
      if (typeof _0x36c3a8 === "number") {
        _0x2ad1a2.uniformLocsById[_0x481164] = _0x36c3a8 = _0x1df95f.getUniformLocation(_0x2ad1a2, _0x2ad1a2.uniformArrayNamesById[_0x481164] + (_0x36c3a8 > 0 ? "[" + _0x36c3a8 + "]" : ""));
      }
      return _0x36c3a8;
    } else {
      _0x166a8d.recordError(1282);
    }
  }
  function _0xb0cc46(_0x2612bb, _0x3aa5c6, _0x24d97b, _0x19fc98) {
    if (!_0x24d97b) {
      _0x166a8d.recordError(1281);
      return;
    }
    _0x2612bb = _0x166a8d.programs[_0x2612bb];
    var _0x11d100 = _0x1df95f.getUniform(_0x2612bb, _0x557d3c(_0x3aa5c6));
    if (typeof _0x11d100 == "number" || typeof _0x11d100 == "boolean") {
      switch (_0x19fc98) {
        case 0:
          _0x1b79ed[_0x24d97b >> 2] = _0x11d100;
          break;
        case 2:
          _0x3a6710[_0x24d97b >> 2] = _0x11d100;
          break;
      }
    } else {
      for (var _0x39cc3b = 0; _0x39cc3b < _0x11d100.length; _0x39cc3b++) {
        switch (_0x19fc98) {
          case 0:
            _0x1b79ed[_0x24d97b + _0x39cc3b * 4 >> 2] = _0x11d100[_0x39cc3b];
            break;
          case 2:
            _0x3a6710[_0x24d97b + _0x39cc3b * 4 >> 2] = _0x11d100[_0x39cc3b];
            break;
        }
      }
    }
  }
  function _0x36bfaf(_0x21322c, _0x33b971, _0x447e4a) {
    _0xb0cc46(_0x21322c, _0x33b971, _0x447e4a, 0);
  }
  function _0x4cb321(_0x6cfeac, _0xa006d0, _0x2f1600, _0x3ee54a) {
    if (!_0x2f1600) {
      _0x166a8d.recordError(1281);
      return;
    }
    if (_0x166a8d.currentContext.clientBuffers[_0x6cfeac].enabled) {
      _0x235a52("glGetVertexAttrib*v on client-side array: not supported, bad data returned");
    }
    var _0x580edb = _0x1df95f.getVertexAttrib(_0x6cfeac, _0xa006d0);
    if (_0xa006d0 == 34975) {
      _0x1b79ed[_0x2f1600 >> 2] = _0x580edb && _0x580edb.name;
    } else if (typeof _0x580edb == "number" || typeof _0x580edb == "boolean") {
      switch (_0x3ee54a) {
        case 0:
          _0x1b79ed[_0x2f1600 >> 2] = _0x580edb;
          break;
        case 2:
          _0x3a6710[_0x2f1600 >> 2] = _0x580edb;
          break;
        case 5:
          _0x1b79ed[_0x2f1600 >> 2] = Math.fround(_0x580edb);
          break;
      }
    } else {
      for (var _0x553df5 = 0; _0x553df5 < _0x580edb.length; _0x553df5++) {
        switch (_0x3ee54a) {
          case 0:
            _0x1b79ed[_0x2f1600 + _0x553df5 * 4 >> 2] = _0x580edb[_0x553df5];
            break;
          case 2:
            _0x3a6710[_0x2f1600 + _0x553df5 * 4 >> 2] = _0x580edb[_0x553df5];
            break;
          case 5:
            _0x1b79ed[_0x2f1600 + _0x553df5 * 4 >> 2] = Math.fround(_0x580edb[_0x553df5]);
            break;
        }
      }
    }
  }
  function _0x2111cf(_0x5ee211, _0x2ed91b, _0xa6e55f) {
    _0x4cb321(_0x5ee211, _0x2ed91b, _0xa6e55f, 5);
  }
  function _0xcc0abb(_0x2f4c17, _0x3e9dc7, _0x3c7161) {
    var _0x202181 = _0x20aeb7[_0x3e9dc7];
    for (var _0x1a7693 = 0; _0x1a7693 < _0x3e9dc7; _0x1a7693++) {
      _0x202181[_0x1a7693] = _0x1b79ed[_0x3c7161 + _0x1a7693 * 4 >> 2];
    }
    _0x1df95f.invalidateFramebuffer(_0x2f4c17, _0x202181);
  }
  function _0x14d359(_0x5ce06b) {
    return _0x1df95f.isEnabled(_0x5ce06b);
  }
  function _0x12f8b(_0x294c2d) {
    var _0x387d2e = _0x166a8d.vaos[_0x294c2d];
    if (!_0x387d2e) {
      return 0;
    }
    return _0x1df95f.isVertexArray(_0x387d2e);
  }
  function _0x457fe7(_0x14abd0) {
    _0x14abd0 = _0x166a8d.programs[_0x14abd0];
    _0x1df95f.linkProgram(_0x14abd0);
    _0x14abd0.uniformLocsById = 0;
    _0x14abd0.uniformSizeAndIdsByName = {};
    [_0x14abd0.vs, _0x14abd0.fs].forEach(function (_0x26d89b) {
      Object.keys(_0x26d89b.explicitUniformLocations).forEach(function (_0x4d4643) {
        var _0x2d110b = _0x26d89b.explicitUniformLocations[_0x4d4643];
        _0x14abd0.uniformSizeAndIdsByName[_0x4d4643] = [1, _0x2d110b];
        _0x14abd0.uniformIdCounter = Math.max(_0x14abd0.uniformIdCounter, _0x2d110b + 1);
      });
    });
    function _0x5b13df(_0x433b58, _0x1aa733) {
      Object.keys(_0x1aa733).forEach(function (_0x26315f) {
        _0x433b58[_0x26315f] = _0x1aa733[_0x26315f];
      });
    }
    _0x14abd0.explicitUniformBindings = {};
    _0x14abd0.explicitSamplerBindings = {};
    [_0x14abd0.vs, _0x14abd0.fs].forEach(function (_0x156a62) {
      _0x5b13df(_0x14abd0.explicitUniformBindings, _0x156a62.explicitUniformBindings);
      _0x5b13df(_0x14abd0.explicitSamplerBindings, _0x156a62.explicitSamplerBindings);
    });
    _0x14abd0.explicitProgramBindingsApplied = 0;
  }
  function _0x45d73e(_0x258f98, _0x49d044, _0x5c5574, _0x33930d) {
    if (_0x33930d != 26 && _0x33930d != 10) {
      _0x235a52("glMapBufferRange is only supported when access is MAP_WRITE|INVALIDATE_BUFFER");
      return 0;
    }
    if (!_0x1e94b5(_0x258f98)) {
      _0x166a8d.recordError(1280);
      _0x235a52("GL_INVALID_ENUM in glMapBufferRange");
      return 0;
    }
    var _0x4ef9d9 = _0x57219e(_0x5c5574);
    if (!_0x4ef9d9) {
      return 0;
    }
    _0x166a8d.mappedBuffers[_0x43746a(_0x258f98)] = {
      offset: _0x49d044,
      length: _0x5c5574,
      mem: _0x4ef9d9,
      access: _0x33930d
    };
    return _0x4ef9d9;
  }
  function _0x4b9074(_0x471a99, _0xcd10c0) {
    if (_0x471a99 == 3317) {
      _0x166a8d.unpackAlignment = _0xcd10c0;
    }
    _0x1df95f.pixelStorei(_0x471a99, _0xcd10c0);
  }
  function _0x504c82(_0xb37b3a, _0x1b77c6) {
    _0x1df95f.polygonOffset(_0xb37b3a, _0x1b77c6);
  }
  function _0x5e19e1(_0x44c1d7, _0x344ebe, _0x11dceb, _0x1d3650) {
    _0x166a8d.recordError(1280);
  }
  function _0x4e7fc8(_0x106912, _0x3d9406, _0x2914e4) {
    _0x166a8d.recordError(1280);
  }
  function _0x28fdba(_0x49c7ae) {
    _0x1df95f.readBuffer(_0x49c7ae);
  }
  function _0xd68f80(_0x519995, _0x3e7cd9, _0xb9db9f, _0x5b4390) {
    function _0x3c172b(_0x59da4f, _0x1a8468) {
      return _0x59da4f + _0x1a8468 - 1 & -_0x1a8468;
    }
    var _0x3a0276 = _0x519995 * _0xb9db9f;
    var _0x3c6121 = _0x3c172b(_0x3a0276, _0x5b4390);
    return _0x3e7cd9 * _0x3c6121;
  }
  function _0x58f9c6(_0x3d33db) {
    var _0x5dbef5 = {
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
    return _0x5dbef5[_0x3d33db - 6402] || 1;
  }
  function _0x4c3dce(_0x5ed310) {
    _0x5ed310 -= 5120;
    if (_0x5ed310 == 0) {
      return _0x18b38f;
    }
    if (_0x5ed310 == 1) {
      return _0x2c14c3;
    }
    if (_0x5ed310 == 2) {
      return _0x34c2d1;
    }
    if (_0x5ed310 == 4) {
      return _0x1b79ed;
    }
    if (_0x5ed310 == 6) {
      return _0x3a6710;
    }
    if (_0x5ed310 == 5 || _0x5ed310 == 28922 || _0x5ed310 == 28520 || _0x5ed310 == 30779 || _0x5ed310 == 30782) {
      return _0x342aec;
    }
    return _0x1e3d60;
  }
  function _0x56e554(_0x4352e9) {
    return 31 - Math.clz32(_0x4352e9.BYTES_PER_ELEMENT);
  }
  function _0x1d4f62(_0x3517bc, _0x458aa6, _0x1de0c0, _0x29a280, _0x393471, _0x509a53) {
    var _0x593184 = _0x4c3dce(_0x3517bc);
    var _0x46626f = _0x56e554(_0x593184);
    var _0x4dfd39 = 1 << _0x46626f;
    var _0x1d8c0b = _0x58f9c6(_0x458aa6) * _0x4dfd39;
    var _0x3c7a3f = _0xd68f80(_0x1de0c0, _0x29a280, _0x1d8c0b, _0x166a8d.unpackAlignment);
    return _0x593184.subarray(_0x393471 >> _0x46626f, _0x393471 + _0x3c7a3f >> _0x46626f);
  }
  function _0x20020c(_0x404d29, _0x345c8a, _0xdd6cfb, _0x472bc4, _0x195206, _0x3d6b69, _0x33eb9e) {
    if (_0x166a8d.currentContext.version >= 2) {
      if (_0x1df95f.currentPixelPackBufferBinding) {
        _0x1df95f.readPixels(_0x404d29, _0x345c8a, _0xdd6cfb, _0x472bc4, _0x195206, _0x3d6b69, _0x33eb9e);
      } else {
        var _0x5d268f = _0x4c3dce(_0x3d6b69);
        _0x1df95f.readPixels(_0x404d29, _0x345c8a, _0xdd6cfb, _0x472bc4, _0x195206, _0x3d6b69, _0x5d268f, _0x33eb9e >> _0x56e554(_0x5d268f));
      }
      return;
    }
    var _0x5affa2 = _0x1d4f62(_0x3d6b69, _0x195206, _0xdd6cfb, _0x472bc4, _0x33eb9e, _0x195206);
    if (!_0x5affa2) {
      _0x166a8d.recordError(1280);
      return;
    }
    _0x1df95f.readPixels(_0x404d29, _0x345c8a, _0xdd6cfb, _0x472bc4, _0x195206, _0x3d6b69, _0x5affa2);
  }
  function _0x56654b(_0x3e40d8, _0xd69615, _0x4346a2, _0x32d4c0) {
    _0x1df95f.renderbufferStorage(_0x3e40d8, _0xd69615, _0x4346a2, _0x32d4c0);
  }
  function _0x566336(_0x586320, _0x1fe607, _0x44be1b, _0x46a555, _0x6d78b9) {
    _0x1df95f.renderbufferStorageMultisample(_0x586320, _0x1fe607, _0x44be1b, _0x46a555, _0x6d78b9);
  }
  function _0x3cbe81(_0x1342da, _0x4f3351, _0x5b3ae3) {
    _0x1df95f.samplerParameteri(_0x166a8d.samplers[_0x1342da], _0x4f3351, _0x5b3ae3);
  }
  function _0x13e2b8(_0x194bc2, _0x3cad8c, _0x37d8cf, _0x12be18) {
    _0x1df95f.scissor(_0x194bc2, _0x3cad8c, _0x37d8cf, _0x12be18);
  }
  function _0x300947(_0x4d06f9, _0x2e74a9, _0x34cb32 = "(", _0x5b9ba0 = ")") {
    var _0x3cca97 = 0;
    for (; _0x2e74a9 < _0x4d06f9.length; ++_0x2e74a9) {
      if (_0x4d06f9[_0x2e74a9] == _0x34cb32) {
        ++_0x3cca97;
      }
      if (_0x4d06f9[_0x2e74a9] == _0x5b9ba0 && --_0x3cca97 == 0) {
        return _0x2e74a9;
      }
    }
  }
  function _0x39b55a(_0x1f8996) {
    var _0x741624 = 0;
    var _0x596fce = _0x1f8996.length;
    var _0x224675 = "";
    var _0x16773b = [1];
    var _0x525cb1 = {
      defined: function (_0x14f36b) {
        if (_0x525cb1[_0x14f36b[0]]) {
          return 1;
        } else {
          return 0;
        }
      },
      GL_FRAGMENT_PRECISION_HIGH: function () {
        return 1;
      }
    };
    function _0x414b89(_0x1dae3d, _0x33ab67) {
      return !(_0x1dae3d.charCodeAt(_0x33ab67) > 32);
    }
    function _0x46accc(_0x1842b4, _0x105dc8) {
      while (!_0x414b89(_0x1842b4, _0x105dc8)) {
        ++_0x105dc8;
      }
      return _0x105dc8;
    }
    function _0x2747cc(_0x17a8eb, _0x496741) {
      var _0x30828b = _0x17a8eb.charCodeAt(_0x496741);
      if (_0x30828b > 32) {
        if (_0x30828b < 48) {
          return 1;
        }
        if (_0x30828b < 58) {
          return 2;
        }
        if (_0x30828b < 65) {
          return 1;
        }
        if (_0x30828b < 91 || _0x30828b == 95) {
          return 3;
        }
        if (_0x30828b < 97) {
          return 1;
        }
        if (_0x30828b < 123) {
          return 3;
        }
        return 1;
      }
      if (_0x30828b < 33) {
        return 0;
      } else {
        return 4;
      }
    }
    function _0x361e9b(_0x102a87, _0x488069) {
      var _0x1ae145 = [];
      var _0x295c5b = _0x102a87.length;
      for (var _0x53890d = 0; _0x53890d <= _0x295c5b; ++_0x53890d) {
        var _0x113e0d = _0x2747cc(_0x102a87, _0x53890d);
        if (_0x113e0d == 2 || _0x113e0d == 3) {
          for (var _0x2eea72 = _0x53890d + 1; _0x2eea72 <= _0x295c5b; ++_0x2eea72) {
            var _0x20ed86 = _0x2747cc(_0x102a87, _0x2eea72);
            if (_0x20ed86 != _0x113e0d && (_0x20ed86 != 2 || _0x113e0d != 3)) {
              _0x1ae145.push(_0x102a87.substring(_0x53890d, _0x2eea72));
              _0x53890d = _0x2eea72 - 1;
              break;
            }
          }
        } else if (_0x113e0d == 1) {
          var _0x3ebc85 = _0x102a87.substr(_0x53890d, 2);
          if (["<=", ">=", "==", "!=", "&&", "||"].includes(_0x3ebc85)) {
            _0x1ae145.push(_0x3ebc85);
            ++_0x53890d;
          } else {
            _0x1ae145.push(_0x102a87[_0x53890d]);
          }
        }
      }
      return _0x1ae145;
    }
    function _0x4c192d(_0x9912ce, _0x3d5076, _0x21d8b9 = _0x9912ce.length) {
      var _0x196637 = _0x9912ce.length;
      var _0x1a3bc1 = "";
      for (var _0x3b29ca = _0x3d5076; _0x3b29ca < _0x21d8b9; ++_0x3b29ca) {
        var _0xac98f = _0x2747cc(_0x9912ce, _0x3b29ca);
        if (_0xac98f == 3) {
          for (var _0x37b3de = _0x3b29ca + 1; _0x37b3de <= _0x21d8b9; ++_0x37b3de) {
            var _0x1b756c = _0x2747cc(_0x9912ce, _0x37b3de);
            if (_0x1b756c != 2 && _0x1b756c != 3) {
              var _0x3a845a = _0x9912ce.substring(_0x3b29ca, _0x37b3de);
              var _0x32892f = _0x525cb1[_0x3a845a];
              if (_0x32892f) {
                var _0x447269 = _0x9912ce.substring(_0x3d5076, _0x3b29ca);
                if (_0x32892f.length && _0x9912ce[_0x37b3de] == "(") {
                  var _0x186930 = _0x300947(_0x9912ce, _0x37b3de);
                  _0x447269 += _0x32892f(_0x9912ce.substring(_0x37b3de + 1, _0x186930).split(",")) + _0x9912ce.substring(_0x186930 + 1, _0x21d8b9);
                } else {
                  _0x447269 += _0x32892f() + _0x9912ce.substring(_0x37b3de, _0x21d8b9);
                }
                return _0x4c192d(_0x447269, 0);
              } else {
                _0x1a3bc1 += _0x3a845a;
                _0x3b29ca = _0x37b3de - 1;
                break;
              }
            }
          }
        } else {
          _0x1a3bc1 += _0x9912ce[_0x3b29ca];
        }
      }
      return _0x1a3bc1;
    }
    function _0xfb7639(_0x23262a) {
      while (_0x23262a.length > 1 || typeof _0x23262a[0] != "function") {
        _0x23262a = function (_0x229992) {
          var _0x23de42;
          var _0xc4662;
          var _0xd3bbe3;
          var _0x5284d5 = -2;
          for (_0xc4662 = 0; _0xc4662 < _0x229992.length; ++_0xc4662) {
            if ((_0xd3bbe3 = ["*", "/", "+", "-", "!", "<", "<=", ">", ">=", "==", "!=", "&&", "||", "("].indexOf(_0x229992[_0xc4662])) > _0x5284d5) {
              _0x23de42 = _0xc4662;
              _0x5284d5 = _0xd3bbe3;
            }
          }
          if (_0x5284d5 == 13) {
            var _0xc4662 = _0x300947(_0x229992, _0x23de42);
            if (_0xc4662) {
              _0x229992.splice(_0x23de42, _0xc4662 + 1 - _0x23de42, _0xfb7639(_0x229992.slice(_0x23de42 + 1, _0xc4662)));
              return _0x229992;
            }
          }
          if (_0x5284d5 == 4) {
            _0x23de42 = _0x229992.lastIndexOf("!");
            var _0x4b0419 = _0xfb7639(_0x229992.slice(_0x23de42 + 1, _0x23de42 + 2));
            _0x229992.splice(_0x23de42, 2, function () {
              return !_0x4b0419();
            });
            return _0x229992;
          }
          if (_0x5284d5 >= 0) {
            var _0x28aa54 = _0xfb7639(_0x229992.slice(0, _0x23de42));
            var _0x586864 = _0xfb7639(_0x229992.slice(_0x23de42 + 1));
            switch (_0x229992[_0x23de42]) {
              case "&&":
                return [function () {
                  return _0x28aa54() && _0x586864();
                }];
              case "||":
                return [function () {
                  return _0x28aa54() || _0x586864();
                }];
              case "==":
                return [function () {
                  return _0x28aa54() == _0x586864();
                }];
              case "!=":
                return [function () {
                  return _0x28aa54() != _0x586864();
                }];
              case "<":
                return [function () {
                  return _0x28aa54() < _0x586864();
                }];
              case "<=":
                return [function () {
                  return _0x28aa54() <= _0x586864();
                }];
              case ">":
                return [function () {
                  return _0x28aa54() > _0x586864();
                }];
              case ">=":
                return [function () {
                  return _0x28aa54() >= _0x586864();
                }];
              case "+":
                return [function () {
                  return _0x28aa54() + _0x586864();
                }];
              case "-":
                return [function () {
                  return _0x28aa54() - _0x586864();
                }];
              case "*":
                return [function () {
                  return _0x28aa54() * _0x586864();
                }];
              case "/":
                return [function () {
                  return Math.floor(_0x28aa54() / _0x586864());
                }];
            }
          }
          var _0x334b9d = _0x18f32d(_0x229992[_0x23de42]);
          return [function () {
            return _0x334b9d;
          }];
        }(_0x23262a);
      }
      return _0x23262a[0];
    }
    for (; _0x741624 < _0x596fce; ++_0x741624) {
      var _0x5e6cac = _0x741624;
      _0x741624 = _0x1f8996.indexOf("\n", _0x741624);
      if (_0x741624 < 0) {
        _0x741624 = _0x596fce;
      }
      for (var _0x1d4cd4 = _0x5e6cac; _0x1d4cd4 < _0x741624 && _0x414b89(_0x1f8996, _0x1d4cd4); ++_0x1d4cd4);
      var _0x8f541e = _0x16773b[_0x16773b.length - 1];
      if (_0x1f8996[_0x1d4cd4] != "#") {
        if (_0x8f541e) {
          _0x224675 += _0x4c192d(_0x1f8996, _0x5e6cac, _0x741624) + "\n";
        }
        continue;
      }
      var _0x24fa4f = _0x46accc(_0x1f8996, _0x1d4cd4);
      var _0x13579d = _0x1f8996.substring(_0x1d4cd4 + 1, _0x24fa4f);
      var _0xb54fe9 = _0x1f8996.substring(_0x24fa4f, _0x741624).trim();
      switch (_0x13579d) {
        case "if":
          var _0x39dc27 = _0x361e9b(_0x4c192d(_0xb54fe9, 0));
          var _0x33681d = _0xfb7639(_0x39dc27);
          var _0x2dba8b = _0x33681d();
          _0x16773b.push(!!_0x2dba8b * _0x16773b[_0x16773b.length - 1]);
          break;
        case "ifdef":
          _0x16773b.push(!!_0x525cb1[_0xb54fe9] * _0x16773b[_0x16773b.length - 1]);
          break;
        case "ifndef":
          _0x16773b.push(!_0x525cb1[_0xb54fe9] * _0x16773b[_0x16773b.length - 1]);
          break;
        case "else":
          _0x16773b[_0x16773b.length - 1] = 1 - _0x16773b[_0x16773b.length - 1];
          break;
        case "endif":
          _0x16773b.pop();
          break;
        case "define":
          if (_0x8f541e) {
            var _0x5de769 = _0xb54fe9.indexOf("(");
            var _0x37c030 = _0x46accc(_0xb54fe9, 0);
            if (_0x37c030 < _0x5de769) {
              _0x5de769 = 0;
            }
            if (_0x5de769 > 0) {
              var _0xbab8ee = _0xb54fe9.indexOf(")", _0x5de769);
              let _0x1b7e42 = _0xb54fe9.substring(_0x5de769 + 1, _0xbab8ee).split(",").map(_0x579709 => _0x579709.trim());
              let _0x2985fb = _0x361e9b(_0xb54fe9.substring(_0xbab8ee + 1).trim());
              _0x525cb1[_0xb54fe9.substring(0, _0x5de769)] = function (_0x141b94) {
                var _0x14b4b5 = "";
                _0x2985fb.forEach(_0x31561a => {
                  var _0x27cfd9 = _0x1b7e42.indexOf(_0x31561a);
                  _0x14b4b5 += _0x27cfd9 >= 0 ? _0x141b94[_0x27cfd9] : _0x31561a;
                });
                return _0x14b4b5;
              };
            } else {
              let _0x1cdf3a = _0x4c192d(_0xb54fe9.substring(_0x37c030 + 1).trim(), 0);
              _0x525cb1[_0xb54fe9.substring(0, _0x37c030)] = function () {
                return _0x1cdf3a;
              };
            }
          }
          break;
        case "undef":
          if (_0x8f541e) {
            delete _0x525cb1[_0xb54fe9];
          }
          break;
        default:
          if (_0x13579d != "version" && _0x13579d != "pragma" && _0x13579d != "extension") {}
          _0x224675 += _0x4c192d(_0x1f8996, _0x5e6cac, _0x741624) + "\n";
      }
    }
    return _0x224675;
  }
  function _0x42ad22(_0x20be49) {
    var _0x56341d = 0;
    var _0x1bbf5b = "";
    var _0x3e3849;
    var _0x357c31;
    var _0x108c75 = _0x20be49.length;
    for (; _0x56341d < _0x108c75; ++_0x56341d) {
      _0x3e3849 = _0x20be49[_0x56341d];
      if (_0x3e3849 == "/") {
        _0x357c31 = _0x20be49[_0x56341d + 1];
        if (_0x357c31 == "/") {
          while (_0x56341d < _0x108c75 && _0x20be49[_0x56341d + 1] != "\n") {
            ++_0x56341d;
          }
        } else if (_0x357c31 == "*") {
          while (_0x56341d < _0x108c75 && (_0x20be49[_0x56341d - 1] != "*" || _0x20be49[_0x56341d] != "/")) {
            ++_0x56341d;
          }
        } else {
          _0x1bbf5b += _0x3e3849;
        }
      } else {
        _0x1bbf5b += _0x3e3849;
      }
    }
    return _0x1bbf5b;
  }
  function _0x34aeec(_0xfec147, _0x407a05, _0x32dd9c, _0x46764a) {
    var _0x586038 = _0x166a8d.getSource(_0xfec147, _0x407a05, _0x32dd9c, _0x46764a);
    _0x586038 = _0x39b55a(_0x42ad22(_0x586038));
    var _0x435ec3 = /layout\s*\(\s*location\s*=\s*(-?\d+)\s*\)\s*(uniform\s+((lowp|mediump|highp)\s+)?\w+\s+(\w+))/g;
    var _0x3ac57a = {};
    var _0x1e5f57;
    while (_0x1e5f57 = _0x435ec3.exec(_0x586038)) {
      _0x3ac57a[_0x1e5f57[5]] = _0x18f32d(_0x1e5f57[1]);
      if (!(_0x3ac57a[_0x1e5f57[5]] >= 0) || !(_0x3ac57a[_0x1e5f57[5]] < 1048576)) {
        console.error("Specified an out of range layout(location=x) directive \"" + _0x3ac57a[_0x1e5f57[5]] + "\"! (" + _0x1e5f57[0] + ")");
        _0x166a8d.recordError(1281);
        return;
      }
    }
    _0x586038 = _0x586038.replace(_0x435ec3, "$2");
    _0x166a8d.shaders[_0xfec147].explicitUniformLocations = _0x3ac57a;
    var _0x51aa5a = /layout\s*\(.*?binding\s*=\s*(-?\d+).*?\)\s*uniform\s+(\w+)\s+(\w+)?/g;
    var _0x200fab = {};
    var _0x5d0855 = {};
    var _0x1ce3b8;
    while (_0x1ce3b8 = _0x51aa5a.exec(_0x586038)) {
      var _0x22602a = 1;
      for (var _0x3d0a0c = _0x1ce3b8.index; _0x3d0a0c < _0x586038.length && _0x586038[_0x3d0a0c] != ";"; ++_0x3d0a0c) {
        if (_0x586038[_0x3d0a0c] == "[") {
          _0x22602a = _0x18f32d(_0x586038.slice(_0x3d0a0c + 1));
          break;
        }
        if (_0x586038[_0x3d0a0c] == "{") {
          _0x3d0a0c = _0x300947(_0x586038, _0x3d0a0c, "{", "}") - 1;
        }
      }
      var _0x32bde2 = _0x18f32d(_0x1ce3b8[1]);
      var _0x56c2d9 = 34930;
      if (_0x1ce3b8[3] && _0x1ce3b8[2].indexOf("sampler") != -1) {
        _0x200fab[_0x1ce3b8[3]] = [_0x32bde2, _0x22602a];
      } else {
        _0x56c2d9 = 35374;
        _0x5d0855[_0x1ce3b8[2]] = [_0x32bde2, _0x22602a];
      }
      var _0x3a59f1 = _0x1df95f.getParameter(_0x56c2d9);
      if (!(_0x32bde2 >= 0) || !(_0x32bde2 + _0x22602a <= _0x3a59f1)) {
        console.error("Specified an out of range layout(binding=x) directive \"" + _0x32bde2 + "\"! (" + _0x1ce3b8[0] + "). Valid range is [0, " + _0x3a59f1 + "-1]");
        _0x166a8d.recordError(1281);
        return;
      }
    }
    _0x586038 = _0x586038.replace(/layout\s*\(.*?binding\s*=\s*([-\d]+).*?\)/g, "");
    _0x586038 = _0x586038.replace(/(layout\s*\((.*?)),\s*binding\s*=\s*([-\d]+)\)/g, "$1)");
    _0x586038 = _0x586038.replace(/layout\s*\(\s*binding\s*=\s*([-\d]+)\s*,(.*?)\)/g, "layout($2)");
    _0x166a8d.shaders[_0xfec147].explicitSamplerBindings = _0x200fab;
    _0x166a8d.shaders[_0xfec147].explicitUniformBindings = _0x5d0855;
    _0x1df95f.shaderSource(_0x166a8d.shaders[_0xfec147], _0x586038);
  }
  function _0x25d9e0(_0x82740, _0x7f1baf, _0x14e493, _0x5bb077) {
    _0x1df95f.stencilFuncSeparate(_0x82740, _0x7f1baf, _0x14e493, _0x5bb077);
  }
  function _0x4dccdb(_0x48a066) {
    _0x1df95f.stencilMask(_0x48a066);
  }
  function _0x13a0c8(_0x1c591a, _0x2c000b, _0x86c23f, _0x3d4107) {
    _0x1df95f.stencilOpSeparate(_0x1c591a, _0x2c000b, _0x86c23f, _0x3d4107);
  }
  function _0x1898ef(_0xfabbbe, _0x2bb627, _0x176a67, _0x5cabf3, _0x3983d4, _0x1928dd, _0x38a64f, _0x24a3b3, _0x395acb) {
    if (_0x166a8d.currentContext.version >= 2) {
      if (_0x1df95f.currentPixelUnpackBufferBinding) {
        _0x1df95f.texImage2D(_0xfabbbe, _0x2bb627, _0x176a67, _0x5cabf3, _0x3983d4, _0x1928dd, _0x38a64f, _0x24a3b3, _0x395acb);
      } else if (_0x395acb) {
        var _0x220424 = _0x4c3dce(_0x24a3b3);
        _0x1df95f.texImage2D(_0xfabbbe, _0x2bb627, _0x176a67, _0x5cabf3, _0x3983d4, _0x1928dd, _0x38a64f, _0x24a3b3, _0x220424, _0x395acb >> _0x56e554(_0x220424));
      } else {
        _0x1df95f.texImage2D(_0xfabbbe, _0x2bb627, _0x176a67, _0x5cabf3, _0x3983d4, _0x1928dd, _0x38a64f, _0x24a3b3, null);
      }
      return;
    }
    _0x1df95f.texImage2D(_0xfabbbe, _0x2bb627, _0x176a67, _0x5cabf3, _0x3983d4, _0x1928dd, _0x38a64f, _0x24a3b3, _0x395acb ? _0x1d4f62(_0x24a3b3, _0x38a64f, _0x5cabf3, _0x3983d4, _0x395acb, _0x176a67) : null);
  }
  function _0x559529(_0x5d8d0a, _0x23871e, _0x2c1f43, _0x2793e9, _0x57aa2b, _0x95a955, _0x35983f, _0x17f6a9, _0x2ee374, _0x4f4e24) {
    if (_0x1df95f.currentPixelUnpackBufferBinding) {
      _0x1df95f.texImage3D(_0x5d8d0a, _0x23871e, _0x2c1f43, _0x2793e9, _0x57aa2b, _0x95a955, _0x35983f, _0x17f6a9, _0x2ee374, _0x4f4e24);
    } else if (_0x4f4e24) {
      var _0x5d832c = _0x4c3dce(_0x2ee374);
      _0x1df95f.texImage3D(_0x5d8d0a, _0x23871e, _0x2c1f43, _0x2793e9, _0x57aa2b, _0x95a955, _0x35983f, _0x17f6a9, _0x2ee374, _0x5d832c, _0x4f4e24 >> _0x56e554(_0x5d832c));
    } else {
      _0x1df95f.texImage3D(_0x5d8d0a, _0x23871e, _0x2c1f43, _0x2793e9, _0x57aa2b, _0x95a955, _0x35983f, _0x17f6a9, _0x2ee374, null);
    }
  }
  function _0x4385b4(_0x338df6, _0x930a7f, _0x3fdf59) {
    _0x1df95f.texParameterf(_0x338df6, _0x930a7f, _0x3fdf59);
  }
  function _0x25ebda(_0x38a36b, _0x182b59, _0x5a7db2) {
    _0x1df95f.texParameteri(_0x38a36b, _0x182b59, _0x5a7db2);
  }
  function _0xf25759(_0x22fe4b, _0x5b8146, _0x2b657d) {
    var _0x183eab = _0x1b79ed[_0x2b657d >> 2];
    _0x1df95f.texParameteri(_0x22fe4b, _0x5b8146, _0x183eab);
  }
  function _0x1688b4(_0x1b8bd9, _0x8dd0ca, _0x1a3ae4, _0x2a425f, _0xb61e37) {
    _0x1df95f.texStorage2D(_0x1b8bd9, _0x8dd0ca, _0x1a3ae4, _0x2a425f, _0xb61e37);
  }
  function _0x34981a(_0x37a203, _0x5dcbd7, _0x26931c, _0x4fd955, _0x1da96e, _0x4c068d) {
    _0x1df95f.texStorage3D(_0x37a203, _0x5dcbd7, _0x26931c, _0x4fd955, _0x1da96e, _0x4c068d);
  }
  function _0x48b0ea(_0x5cf8ca, _0x49f471, _0x17aae5, _0x92f71c, _0x326b50, _0x4e84ee, _0xa04e13, _0xa9f939, _0x2da8ac) {
    if (_0x166a8d.currentContext.version >= 2) {
      if (_0x1df95f.currentPixelUnpackBufferBinding) {
        _0x1df95f.texSubImage2D(_0x5cf8ca, _0x49f471, _0x17aae5, _0x92f71c, _0x326b50, _0x4e84ee, _0xa04e13, _0xa9f939, _0x2da8ac);
      } else if (_0x2da8ac) {
        var _0x742eab = _0x4c3dce(_0xa9f939);
        _0x1df95f.texSubImage2D(_0x5cf8ca, _0x49f471, _0x17aae5, _0x92f71c, _0x326b50, _0x4e84ee, _0xa04e13, _0xa9f939, _0x742eab, _0x2da8ac >> _0x56e554(_0x742eab));
      } else {
        _0x1df95f.texSubImage2D(_0x5cf8ca, _0x49f471, _0x17aae5, _0x92f71c, _0x326b50, _0x4e84ee, _0xa04e13, _0xa9f939, null);
      }
      return;
    }
    var _0x1ea860 = null;
    if (_0x2da8ac) {
      _0x1ea860 = _0x1d4f62(_0xa9f939, _0xa04e13, _0x326b50, _0x4e84ee, _0x2da8ac, 0);
    }
    _0x1df95f.texSubImage2D(_0x5cf8ca, _0x49f471, _0x17aae5, _0x92f71c, _0x326b50, _0x4e84ee, _0xa04e13, _0xa9f939, _0x1ea860);
  }
  function _0x44a2e6(_0x34647f, _0x89f8f6, _0x959e77, _0x3d27eb, _0x200b4d, _0x49102b, _0x4c4759, _0x11ea45, _0x2e3dda, _0x35b6c2, _0x56e938) {
    if (_0x1df95f.currentPixelUnpackBufferBinding) {
      _0x1df95f.texSubImage3D(_0x34647f, _0x89f8f6, _0x959e77, _0x3d27eb, _0x200b4d, _0x49102b, _0x4c4759, _0x11ea45, _0x2e3dda, _0x35b6c2, _0x56e938);
    } else if (_0x56e938) {
      var _0x29f698 = _0x4c3dce(_0x35b6c2);
      _0x1df95f.texSubImage3D(_0x34647f, _0x89f8f6, _0x959e77, _0x3d27eb, _0x200b4d, _0x49102b, _0x4c4759, _0x11ea45, _0x2e3dda, _0x35b6c2, _0x29f698, _0x56e938 >> _0x56e554(_0x29f698));
    } else {
      _0x1df95f.texSubImage3D(_0x34647f, _0x89f8f6, _0x959e77, _0x3d27eb, _0x200b4d, _0x49102b, _0x4c4759, _0x11ea45, _0x2e3dda, _0x35b6c2, null);
    }
  }
  function _0x123b7d(_0x4880a2, _0x463db8, _0x4c1200, _0x1c4fec) {
    _0x4880a2 = _0x166a8d.programs[_0x4880a2];
    var _0x1c515a = [];
    for (var _0x25ca14 = 0; _0x25ca14 < _0x463db8; _0x25ca14++) {
      _0x1c515a.push(_0x5ea6bb(_0x1b79ed[_0x4c1200 + _0x25ca14 * 4 >> 2]));
    }
    _0x1df95f.transformFeedbackVaryings(_0x4880a2, _0x1c515a, _0x1c4fec);
  }
  var _0x4ce1b1 = [];
  function _0x45d22d(_0x1ebd3b, _0x59e17c, _0x1df539) {
    if (_0x166a8d.currentContext.version >= 2) {
      _0x1df95f.uniform1fv(_0x557d3c(_0x1ebd3b), _0x3a6710, _0x1df539 >> 2, _0x59e17c);
      return;
    }
    if (_0x59e17c <= 288) {
      var _0x5988e4 = _0x4ce1b1[_0x59e17c - 1];
      for (var _0x52ed83 = 0; _0x52ed83 < _0x59e17c; ++_0x52ed83) {
        _0x5988e4[_0x52ed83] = _0x3a6710[_0x1df539 + _0x52ed83 * 4 >> 2];
      }
    } else {
      var _0x5988e4 = _0x3a6710.subarray(_0x1df539 >> 2, _0x1df539 + _0x59e17c * 4 >> 2);
    }
    _0x1df95f.uniform1fv(_0x557d3c(_0x1ebd3b), _0x5988e4);
  }
  function _0x5c0a2f(_0xca6132, _0x625840) {
    _0x1df95f.uniform1i(_0x557d3c(_0xca6132), _0x625840);
  }
  var _0x56317e = [];
  function _0x9898fc(_0x579eb6, _0x41cfe9, _0x5ab51b) {
    if (_0x166a8d.currentContext.version >= 2) {
      _0x1df95f.uniform1iv(_0x557d3c(_0x579eb6), _0x1b79ed, _0x5ab51b >> 2, _0x41cfe9);
      return;
    }
    if (_0x41cfe9 <= 288) {
      var _0x42a600 = _0x56317e[_0x41cfe9 - 1];
      for (var _0x21c550 = 0; _0x21c550 < _0x41cfe9; ++_0x21c550) {
        _0x42a600[_0x21c550] = _0x1b79ed[_0x5ab51b + _0x21c550 * 4 >> 2];
      }
    } else {
      var _0x42a600 = _0x1b79ed.subarray(_0x5ab51b >> 2, _0x5ab51b + _0x41cfe9 * 4 >> 2);
    }
    _0x1df95f.uniform1iv(_0x557d3c(_0x579eb6), _0x42a600);
  }
  function _0x1780c0(_0x403d79, _0x2a3d86, _0x12d853) {
    _0x1df95f.uniform1uiv(_0x557d3c(_0x403d79), _0x342aec, _0x12d853 >> 2, _0x2a3d86);
  }
  function _0x379a58(_0x30e0d0, _0x14ed74, _0x4fc676) {
    if (_0x166a8d.currentContext.version >= 2) {
      _0x1df95f.uniform2fv(_0x557d3c(_0x30e0d0), _0x3a6710, _0x4fc676 >> 2, _0x14ed74 * 2);
      return;
    }
    if (_0x14ed74 <= 144) {
      var _0x1fcaed = _0x4ce1b1[_0x14ed74 * 2 - 1];
      for (var _0x2e0077 = 0; _0x2e0077 < _0x14ed74 * 2; _0x2e0077 += 2) {
        _0x1fcaed[_0x2e0077] = _0x3a6710[_0x4fc676 + _0x2e0077 * 4 >> 2];
        _0x1fcaed[_0x2e0077 + 1] = _0x3a6710[_0x4fc676 + (_0x2e0077 * 4 + 4) >> 2];
      }
    } else {
      var _0x1fcaed = _0x3a6710.subarray(_0x4fc676 >> 2, _0x4fc676 + _0x14ed74 * 8 >> 2);
    }
    _0x1df95f.uniform2fv(_0x557d3c(_0x30e0d0), _0x1fcaed);
  }
  function _0x3a9557(_0x2b1e52, _0xdeede5, _0x229087) {
    if (_0x166a8d.currentContext.version >= 2) {
      _0x1df95f.uniform2iv(_0x557d3c(_0x2b1e52), _0x1b79ed, _0x229087 >> 2, _0xdeede5 * 2);
      return;
    }
    if (_0xdeede5 <= 144) {
      var _0x446a1b = _0x56317e[_0xdeede5 * 2 - 1];
      for (var _0x4dbd6f = 0; _0x4dbd6f < _0xdeede5 * 2; _0x4dbd6f += 2) {
        _0x446a1b[_0x4dbd6f] = _0x1b79ed[_0x229087 + _0x4dbd6f * 4 >> 2];
        _0x446a1b[_0x4dbd6f + 1] = _0x1b79ed[_0x229087 + (_0x4dbd6f * 4 + 4) >> 2];
      }
    } else {
      var _0x446a1b = _0x1b79ed.subarray(_0x229087 >> 2, _0x229087 + _0xdeede5 * 8 >> 2);
    }
    _0x1df95f.uniform2iv(_0x557d3c(_0x2b1e52), _0x446a1b);
  }
  function _0x507c79(_0x59babd, _0x376d1d, _0x43daaa) {
    _0x1df95f.uniform2uiv(_0x557d3c(_0x59babd), _0x342aec, _0x43daaa >> 2, _0x376d1d * 2);
  }
  function _0x8b3c90(_0x1f477c, _0x737835, _0x22d54a) {
    if (_0x166a8d.currentContext.version >= 2) {
      _0x1df95f.uniform3fv(_0x557d3c(_0x1f477c), _0x3a6710, _0x22d54a >> 2, _0x737835 * 3);
      return;
    }
    if (_0x737835 <= 96) {
      var _0x25aede = _0x4ce1b1[_0x737835 * 3 - 1];
      for (var _0xf341e0 = 0; _0xf341e0 < _0x737835 * 3; _0xf341e0 += 3) {
        _0x25aede[_0xf341e0] = _0x3a6710[_0x22d54a + _0xf341e0 * 4 >> 2];
        _0x25aede[_0xf341e0 + 1] = _0x3a6710[_0x22d54a + (_0xf341e0 * 4 + 4) >> 2];
        _0x25aede[_0xf341e0 + 2] = _0x3a6710[_0x22d54a + (_0xf341e0 * 4 + 8) >> 2];
      }
    } else {
      var _0x25aede = _0x3a6710.subarray(_0x22d54a >> 2, _0x22d54a + _0x737835 * 12 >> 2);
    }
    _0x1df95f.uniform3fv(_0x557d3c(_0x1f477c), _0x25aede);
  }
  function _0x59b60d(_0x1484eb, _0x5ddb35, _0x3f8d6a) {
    if (_0x166a8d.currentContext.version >= 2) {
      _0x1df95f.uniform3iv(_0x557d3c(_0x1484eb), _0x1b79ed, _0x3f8d6a >> 2, _0x5ddb35 * 3);
      return;
    }
    if (_0x5ddb35 <= 96) {
      var _0x579611 = _0x56317e[_0x5ddb35 * 3 - 1];
      for (var _0x3e1631 = 0; _0x3e1631 < _0x5ddb35 * 3; _0x3e1631 += 3) {
        _0x579611[_0x3e1631] = _0x1b79ed[_0x3f8d6a + _0x3e1631 * 4 >> 2];
        _0x579611[_0x3e1631 + 1] = _0x1b79ed[_0x3f8d6a + (_0x3e1631 * 4 + 4) >> 2];
        _0x579611[_0x3e1631 + 2] = _0x1b79ed[_0x3f8d6a + (_0x3e1631 * 4 + 8) >> 2];
      }
    } else {
      var _0x579611 = _0x1b79ed.subarray(_0x3f8d6a >> 2, _0x3f8d6a + _0x5ddb35 * 12 >> 2);
    }
    _0x1df95f.uniform3iv(_0x557d3c(_0x1484eb), _0x579611);
  }
  function _0x4a81af(_0x537f0d, _0x23c6cc, _0x3742ce) {
    _0x1df95f.uniform3uiv(_0x557d3c(_0x537f0d), _0x342aec, _0x3742ce >> 2, _0x23c6cc * 3);
  }
  function _0x3315c0(_0x78abcf, _0x5f47b, _0xaf0e02) {
    if (_0x166a8d.currentContext.version >= 2) {
      _0x1df95f.uniform4fv(_0x557d3c(_0x78abcf), _0x3a6710, _0xaf0e02 >> 2, _0x5f47b * 4);
      return;
    }
    if (_0x5f47b <= 72) {
      var _0xd43797 = _0x4ce1b1[_0x5f47b * 4 - 1];
      var _0x257153 = _0x3a6710;
      _0xaf0e02 >>= 2;
      for (var _0x4186d8 = 0; _0x4186d8 < _0x5f47b * 4; _0x4186d8 += 4) {
        var _0x588aee = _0xaf0e02 + _0x4186d8;
        _0xd43797[_0x4186d8] = _0x257153[_0x588aee];
        _0xd43797[_0x4186d8 + 1] = _0x257153[_0x588aee + 1];
        _0xd43797[_0x4186d8 + 2] = _0x257153[_0x588aee + 2];
        _0xd43797[_0x4186d8 + 3] = _0x257153[_0x588aee + 3];
      }
    } else {
      var _0xd43797 = _0x3a6710.subarray(_0xaf0e02 >> 2, _0xaf0e02 + _0x5f47b * 16 >> 2);
    }
    _0x1df95f.uniform4fv(_0x557d3c(_0x78abcf), _0xd43797);
  }
  function _0x72d00d(_0x3ced0d, _0x33c0a5, _0x52b56f) {
    if (_0x166a8d.currentContext.version >= 2) {
      _0x1df95f.uniform4iv(_0x557d3c(_0x3ced0d), _0x1b79ed, _0x52b56f >> 2, _0x33c0a5 * 4);
      return;
    }
    if (_0x33c0a5 <= 72) {
      var _0x367a1e = _0x56317e[_0x33c0a5 * 4 - 1];
      for (var _0x17a867 = 0; _0x17a867 < _0x33c0a5 * 4; _0x17a867 += 4) {
        _0x367a1e[_0x17a867] = _0x1b79ed[_0x52b56f + _0x17a867 * 4 >> 2];
        _0x367a1e[_0x17a867 + 1] = _0x1b79ed[_0x52b56f + (_0x17a867 * 4 + 4) >> 2];
        _0x367a1e[_0x17a867 + 2] = _0x1b79ed[_0x52b56f + (_0x17a867 * 4 + 8) >> 2];
        _0x367a1e[_0x17a867 + 3] = _0x1b79ed[_0x52b56f + (_0x17a867 * 4 + 12) >> 2];
      }
    } else {
      var _0x367a1e = _0x1b79ed.subarray(_0x52b56f >> 2, _0x52b56f + _0x33c0a5 * 16 >> 2);
    }
    _0x1df95f.uniform4iv(_0x557d3c(_0x3ced0d), _0x367a1e);
  }
  function _0x331221(_0x25c720, _0xd815e0, _0x46d870) {
    _0x1df95f.uniform4uiv(_0x557d3c(_0x25c720), _0x342aec, _0x46d870 >> 2, _0xd815e0 * 4);
  }
  function _0x20b75d(_0x5bf013, _0xeb2543, _0x5cca2c) {
    _0x5bf013 = _0x166a8d.programs[_0x5bf013];
    _0x1df95f.uniformBlockBinding(_0x5bf013, _0xeb2543, _0x5cca2c);
  }
  function _0x513b08(_0x3e0c8e, _0x2412ad, _0x32033c, _0x1e86c8) {
    if (_0x166a8d.currentContext.version >= 2) {
      _0x1df95f.uniformMatrix3fv(_0x557d3c(_0x3e0c8e), !!_0x32033c, _0x3a6710, _0x1e86c8 >> 2, _0x2412ad * 9);
      return;
    }
    if (_0x2412ad <= 32) {
      var _0x5ddff6 = _0x4ce1b1[_0x2412ad * 9 - 1];
      for (var _0x51f876 = 0; _0x51f876 < _0x2412ad * 9; _0x51f876 += 9) {
        _0x5ddff6[_0x51f876] = _0x3a6710[_0x1e86c8 + _0x51f876 * 4 >> 2];
        _0x5ddff6[_0x51f876 + 1] = _0x3a6710[_0x1e86c8 + (_0x51f876 * 4 + 4) >> 2];
        _0x5ddff6[_0x51f876 + 2] = _0x3a6710[_0x1e86c8 + (_0x51f876 * 4 + 8) >> 2];
        _0x5ddff6[_0x51f876 + 3] = _0x3a6710[_0x1e86c8 + (_0x51f876 * 4 + 12) >> 2];
        _0x5ddff6[_0x51f876 + 4] = _0x3a6710[_0x1e86c8 + (_0x51f876 * 4 + 16) >> 2];
        _0x5ddff6[_0x51f876 + 5] = _0x3a6710[_0x1e86c8 + (_0x51f876 * 4 + 20) >> 2];
        _0x5ddff6[_0x51f876 + 6] = _0x3a6710[_0x1e86c8 + (_0x51f876 * 4 + 24) >> 2];
        _0x5ddff6[_0x51f876 + 7] = _0x3a6710[_0x1e86c8 + (_0x51f876 * 4 + 28) >> 2];
        _0x5ddff6[_0x51f876 + 8] = _0x3a6710[_0x1e86c8 + (_0x51f876 * 4 + 32) >> 2];
      }
    } else {
      var _0x5ddff6 = _0x3a6710.subarray(_0x1e86c8 >> 2, _0x1e86c8 + _0x2412ad * 36 >> 2);
    }
    _0x1df95f.uniformMatrix3fv(_0x557d3c(_0x3e0c8e), !!_0x32033c, _0x5ddff6);
  }
  function _0x139170(_0x3ea506, _0x1b6610, _0x27435d, _0x5ce09c) {
    if (_0x166a8d.currentContext.version >= 2) {
      _0x1df95f.uniformMatrix4fv(_0x557d3c(_0x3ea506), !!_0x27435d, _0x3a6710, _0x5ce09c >> 2, _0x1b6610 * 16);
      return;
    }
    if (_0x1b6610 <= 18) {
      var _0x42aa4c = _0x4ce1b1[_0x1b6610 * 16 - 1];
      var _0x495a9f = _0x3a6710;
      _0x5ce09c >>= 2;
      for (var _0x1500d8 = 0; _0x1500d8 < _0x1b6610 * 16; _0x1500d8 += 16) {
        var _0x589822 = _0x5ce09c + _0x1500d8;
        _0x42aa4c[_0x1500d8] = _0x495a9f[_0x589822];
        _0x42aa4c[_0x1500d8 + 1] = _0x495a9f[_0x589822 + 1];
        _0x42aa4c[_0x1500d8 + 2] = _0x495a9f[_0x589822 + 2];
        _0x42aa4c[_0x1500d8 + 3] = _0x495a9f[_0x589822 + 3];
        _0x42aa4c[_0x1500d8 + 4] = _0x495a9f[_0x589822 + 4];
        _0x42aa4c[_0x1500d8 + 5] = _0x495a9f[_0x589822 + 5];
        _0x42aa4c[_0x1500d8 + 6] = _0x495a9f[_0x589822 + 6];
        _0x42aa4c[_0x1500d8 + 7] = _0x495a9f[_0x589822 + 7];
        _0x42aa4c[_0x1500d8 + 8] = _0x495a9f[_0x589822 + 8];
        _0x42aa4c[_0x1500d8 + 9] = _0x495a9f[_0x589822 + 9];
        _0x42aa4c[_0x1500d8 + 10] = _0x495a9f[_0x589822 + 10];
        _0x42aa4c[_0x1500d8 + 11] = _0x495a9f[_0x589822 + 11];
        _0x42aa4c[_0x1500d8 + 12] = _0x495a9f[_0x589822 + 12];
        _0x42aa4c[_0x1500d8 + 13] = _0x495a9f[_0x589822 + 13];
        _0x42aa4c[_0x1500d8 + 14] = _0x495a9f[_0x589822 + 14];
        _0x42aa4c[_0x1500d8 + 15] = _0x495a9f[_0x589822 + 15];
      }
    } else {
      var _0x42aa4c = _0x3a6710.subarray(_0x5ce09c >> 2, _0x5ce09c + _0x1b6610 * 64 >> 2);
    }
    _0x1df95f.uniformMatrix4fv(_0x557d3c(_0x3ea506), !!_0x27435d, _0x42aa4c);
  }
  function _0x5c66a3(_0x41b6d1) {
    if (!_0x1e94b5(_0x41b6d1)) {
      _0x166a8d.recordError(1280);
      _0x235a52("GL_INVALID_ENUM in glUnmapBuffer");
      return 0;
    }
    var _0x76e6b3 = _0x43746a(_0x41b6d1);
    var _0xee44a9 = _0x166a8d.mappedBuffers[_0x76e6b3];
    if (!_0xee44a9) {
      _0x166a8d.recordError(1282);
      _0x235a52("buffer was never mapped in glUnmapBuffer");
      return 0;
    }
    _0x166a8d.mappedBuffers[_0x76e6b3] = null;
    if (!(_0xee44a9.access & 16)) {
      if (_0x166a8d.currentContext.version >= 2) {
        _0x1df95f.bufferSubData(_0x41b6d1, _0xee44a9.offset, _0x2c14c3, _0xee44a9.mem, _0xee44a9.length);
      } else {
        _0x1df95f.bufferSubData(_0x41b6d1, _0xee44a9.offset, _0x2c14c3.subarray(_0xee44a9.mem, _0xee44a9.mem + _0xee44a9.length));
      }
    }
    _0x4401e3(_0xee44a9.mem);
    return 1;
  }
  function _0x35fd02() {
    var _0x40ac7b = _0x1df95f.currentProgram;
    if (!_0x40ac7b.explicitProgramBindingsApplied) {
      if (_0x166a8d.currentContext.version >= 2) {
        Object.keys(_0x40ac7b.explicitUniformBindings).forEach(function (_0x9074dc) {
          var _0x40f432 = _0x40ac7b.explicitUniformBindings[_0x9074dc];
          for (var _0x1650f7 = 0; _0x1650f7 < _0x40f432[1]; ++_0x1650f7) {
            var _0x53a7b1 = _0x1df95f.getUniformBlockIndex(_0x40ac7b, _0x9074dc + (_0x40f432[1] > 1 ? "[" + _0x1650f7 + "]" : ""));
            _0x1df95f.uniformBlockBinding(_0x40ac7b, _0x53a7b1, _0x40f432[0] + _0x1650f7);
          }
        });
      }
      Object.keys(_0x40ac7b.explicitSamplerBindings).forEach(function (_0x1c049e) {
        var _0x166668 = _0x40ac7b.explicitSamplerBindings[_0x1c049e];
        for (var _0x53180c = 0; _0x53180c < _0x166668[1]; ++_0x53180c) {
          _0x1df95f.uniform1i(_0x1df95f.getUniformLocation(_0x40ac7b, _0x1c049e + (_0x53180c ? "[" + _0x53180c + "]" : "")), _0x166668[0] + _0x53180c);
        }
      });
      _0x40ac7b.explicitProgramBindingsApplied = 1;
    }
  }
  function _0x3e432f(_0x399fe6) {
    _0x399fe6 = _0x166a8d.programs[_0x399fe6];
    _0x1df95f.useProgram(_0x399fe6);
    if (_0x1df95f.currentProgram = _0x399fe6) {
      _0x35fd02();
    }
  }
  function _0x3661ab(_0xd16dcc) {
    _0x1df95f.validateProgram(_0x166a8d.programs[_0xd16dcc]);
  }
  function _0x2d2aa6(_0x5ec220, _0x3f5d7d, _0x196b9b, _0x4f037c, _0x12adb8) {
    _0x1df95f.vertexAttrib4f(_0x5ec220, _0x3f5d7d, _0x196b9b, _0x4f037c, _0x12adb8);
  }
  function _0x2b11a3(_0x2e8e08, _0x42a39a) {
    _0x1df95f.vertexAttrib4f(_0x2e8e08, _0x3a6710[_0x42a39a >> 2], _0x3a6710[_0x42a39a + 4 >> 2], _0x3a6710[_0x42a39a + 8 >> 2], _0x3a6710[_0x42a39a + 12 >> 2]);
  }
  function _0x521bda(_0x84a014, _0x47d9c7, _0x362071, _0x212726, _0x546ff6) {
    var _0x25a7e5 = _0x166a8d.currentContext.clientBuffers[_0x84a014];
    if (!_0x1df95f.currentArrayBufferBinding) {
      _0x25a7e5.size = _0x47d9c7;
      _0x25a7e5.type = _0x362071;
      _0x25a7e5.normalized = false;
      _0x25a7e5.stride = _0x212726;
      _0x25a7e5.ptr = _0x546ff6;
      _0x25a7e5.clientside = true;
      _0x25a7e5.vertexAttribPointerAdaptor = function (_0x2105c0, _0x5f40e7, _0x353649, _0x2dce27, _0x524396, _0x29bae3) {
        this.vertexAttribIPointer(_0x2105c0, _0x5f40e7, _0x353649, _0x524396, _0x29bae3);
      };
      return;
    }
    _0x25a7e5.clientside = false;
    _0x1df95f.vertexAttribIPointer(_0x84a014, _0x47d9c7, _0x362071, _0x212726, _0x546ff6);
  }
  function _0x3ed82a(_0x4d07e1, _0x1afa67, _0x3da752, _0x47b5ac, _0x343927, _0x263745) {
    var _0x1a544a = _0x166a8d.currentContext.clientBuffers[_0x4d07e1];
    if (!_0x1df95f.currentArrayBufferBinding) {
      _0x1a544a.size = _0x1afa67;
      _0x1a544a.type = _0x3da752;
      _0x1a544a.normalized = _0x47b5ac;
      _0x1a544a.stride = _0x343927;
      _0x1a544a.ptr = _0x263745;
      _0x1a544a.clientside = true;
      _0x1a544a.vertexAttribPointerAdaptor = function (_0x262f5f, _0xe0fabb, _0x807337, _0x18362f, _0xf83966, _0x38a958) {
        this.vertexAttribPointer(_0x262f5f, _0xe0fabb, _0x807337, _0x18362f, _0xf83966, _0x38a958);
      };
      return;
    }
    _0x1a544a.clientside = false;
    _0x1df95f.vertexAttribPointer(_0x4d07e1, _0x1afa67, _0x3da752, !!_0x47b5ac, _0x343927, _0x263745);
  }
  function _0x247af8(_0x5e223e, _0x4aa1b8, _0x49b80a, _0x34a38a) {
    _0x1df95f.viewport(_0x5e223e, _0x4aa1b8, _0x49b80a, _0x34a38a);
  }
  function _0x2629d2(_0x518704) {
    return _0x518704;
  }
  function _0x260cb8(_0x436771) {
    _0x337cf0();
    var _0x1597ab = new Date(_0x1b79ed[_0x436771 + 20 >> 2] + 1900, _0x1b79ed[_0x436771 + 16 >> 2], _0x1b79ed[_0x436771 + 12 >> 2], _0x1b79ed[_0x436771 + 8 >> 2], _0x1b79ed[_0x436771 + 4 >> 2], _0x1b79ed[_0x436771 >> 2], 0);
    var _0x466a17 = _0x1b79ed[_0x436771 + 32 >> 2];
    var _0x4b519c = _0x1597ab.getTimezoneOffset();
    var _0x1f89bb = new Date(_0x1597ab.getFullYear(), 0, 1);
    var _0x50b1ee = new Date(_0x1597ab.getFullYear(), 6, 1).getTimezoneOffset();
    var _0x37da61 = _0x1f89bb.getTimezoneOffset();
    var _0x46b868 = Math.min(_0x37da61, _0x50b1ee);
    if (_0x466a17 < 0) {
      _0x1b79ed[_0x436771 + 32 >> 2] = Number(_0x50b1ee != _0x37da61 && _0x46b868 == _0x4b519c);
    } else if (_0x466a17 > 0 != (_0x46b868 == _0x4b519c)) {
      var _0x398dc6 = Math.max(_0x37da61, _0x50b1ee);
      var _0x1487c7 = _0x466a17 > 0 ? _0x46b868 : _0x398dc6;
      _0x1597ab.setTime(_0x1597ab.getTime() + (_0x1487c7 - _0x4b519c) * 60000);
    }
    _0x1b79ed[_0x436771 + 24 >> 2] = _0x1597ab.getDay();
    var _0x5d38a7 = (_0x1597ab.getTime() - _0x1f89bb.getTime()) / 86400000 | 0;
    _0x1b79ed[_0x436771 + 28 >> 2] = _0x5d38a7;
    _0x1b79ed[_0x436771 >> 2] = _0x1597ab.getSeconds();
    _0x1b79ed[_0x436771 + 4 >> 2] = _0x1597ab.getMinutes();
    _0x1b79ed[_0x436771 + 8 >> 2] = _0x1597ab.getHours();
    _0x1b79ed[_0x436771 + 12 >> 2] = _0x1597ab.getDate();
    _0x1b79ed[_0x436771 + 16 >> 2] = _0x1597ab.getMonth();
    return _0x1597ab.getTime() / 1000 | 0;
  }
  function _0x5dcd3e(_0x444905) {
    _0x4cb270(_0x444905);
  }
  function _0x48dbe9(_0xbc3800, _0x890224, _0x1157ba) {
    return 0;
  }
  function _0x4957e1(_0x220ff5) {
    _0x1b79ed[_0x220ff5 >> 2] = 0;
    return 0;
  }
  function _0x5c9dcd(_0x53e33d) {
    return _0x53e33d % 4 === 0 && (_0x53e33d % 100 !== 0 || _0x53e33d % 400 === 0);
  }
  function _0xb1c0ee(_0x9c6a2b, _0x15d97b) {
    var _0x4e34bd = 0;
    for (var _0x397adf = 0; _0x397adf <= _0x15d97b; _0x4e34bd += _0x9c6a2b[_0x397adf++]) {}
    return _0x4e34bd;
  }
  var _0x58e727 = [31, 29, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
  var _0x190ff9 = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
  function _0x3af0d7(_0x59e07d, _0xd600cc) {
    var _0x372163 = new Date(_0x59e07d.getTime());
    while (_0xd600cc > 0) {
      var _0x70f1bb = _0x5c9dcd(_0x372163.getFullYear());
      var _0x235ee1 = _0x372163.getMonth();
      var _0x1e7427 = (_0x70f1bb ? _0x58e727 : _0x190ff9)[_0x235ee1];
      if (_0xd600cc > _0x1e7427 - _0x372163.getDate()) {
        _0xd600cc -= _0x1e7427 - _0x372163.getDate() + 1;
        _0x372163.setDate(1);
        if (_0x235ee1 < 11) {
          _0x372163.setMonth(_0x235ee1 + 1);
        } else {
          _0x372163.setMonth(0);
          _0x372163.setFullYear(_0x372163.getFullYear() + 1);
        }
      } else {
        _0x372163.setDate(_0x372163.getDate() + _0xd600cc);
        return _0x372163;
      }
    }
    return _0x372163;
  }
  function _0x4c002b(_0x2fe382, _0x20ceef, _0x295079, _0x3eb44c) {
    var _0xda9506 = _0x1b79ed[_0x3eb44c + 40 >> 2];
    var _0x33db18 = {
      tm_sec: _0x1b79ed[_0x3eb44c >> 2],
      tm_min: _0x1b79ed[_0x3eb44c + 4 >> 2],
      tm_hour: _0x1b79ed[_0x3eb44c + 8 >> 2],
      tm_mday: _0x1b79ed[_0x3eb44c + 12 >> 2],
      tm_mon: _0x1b79ed[_0x3eb44c + 16 >> 2],
      tm_year: _0x1b79ed[_0x3eb44c + 20 >> 2],
      tm_wday: _0x1b79ed[_0x3eb44c + 24 >> 2],
      tm_yday: _0x1b79ed[_0x3eb44c + 28 >> 2],
      tm_isdst: _0x1b79ed[_0x3eb44c + 32 >> 2],
      tm_gmtoff: _0x1b79ed[_0x3eb44c + 36 >> 2],
      tm_zone: _0xda9506 ? _0x5ea6bb(_0xda9506) : ""
    };
    var _0x5620a9 = _0x5ea6bb(_0x295079);
    var _0x142615 = {
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
    for (var _0x48e9a2 in _0x142615) {
      _0x5620a9 = _0x5620a9.replace(new RegExp(_0x48e9a2, "g"), _0x142615[_0x48e9a2]);
    }
    var _0x4844a4 = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    var _0x1c2d83 = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    function _0x4b0867(_0x432bfd, _0x513db2, _0x2c9b5f) {
      var _0x374517 = typeof _0x432bfd === "number" ? _0x432bfd.toString() : _0x432bfd || "";
      while (_0x374517.length < _0x513db2) {
        _0x374517 = _0x2c9b5f[0] + _0x374517;
      }
      return _0x374517;
    }
    function _0x38b02e(_0x5e24ca, _0x4e58ff) {
      return _0x4b0867(_0x5e24ca, _0x4e58ff, "0");
    }
    function _0x1d26e8(_0x49d9e7, _0x2f04fc) {
      function _0x3f2eb4(_0x1aaf26) {
        if (_0x1aaf26 < 0) {
          return -1;
        } else if (_0x1aaf26 > 0) {
          return 1;
        } else {
          return 0;
        }
      }
      var _0x1ba138;
      if ((_0x1ba138 = _0x3f2eb4(_0x49d9e7.getFullYear() - _0x2f04fc.getFullYear())) === 0) {
        if ((_0x1ba138 = _0x3f2eb4(_0x49d9e7.getMonth() - _0x2f04fc.getMonth())) === 0) {
          _0x1ba138 = _0x3f2eb4(_0x49d9e7.getDate() - _0x2f04fc.getDate());
        }
      }
      return _0x1ba138;
    }
    function _0x5e4d0b(_0x4b833d) {
      switch (_0x4b833d.getDay()) {
        case 0:
          return new Date(_0x4b833d.getFullYear() - 1, 11, 29);
        case 1:
          return _0x4b833d;
        case 2:
          return new Date(_0x4b833d.getFullYear(), 0, 3);
        case 3:
          return new Date(_0x4b833d.getFullYear(), 0, 2);
        case 4:
          return new Date(_0x4b833d.getFullYear(), 0, 1);
        case 5:
          return new Date(_0x4b833d.getFullYear() - 1, 11, 31);
        case 6:
          return new Date(_0x4b833d.getFullYear() - 1, 11, 30);
      }
    }
    function _0x592158(_0x317c9) {
      var _0x1085bd = _0x3af0d7(new Date(_0x317c9.tm_year + 1900, 0, 1), _0x317c9.tm_yday);
      var _0x56eb17 = new Date(_0x1085bd.getFullYear(), 0, 4);
      var _0x29c9d7 = new Date(_0x1085bd.getFullYear() + 1, 0, 4);
      var _0xea48e3 = _0x5e4d0b(_0x56eb17);
      var _0x4620cc = _0x5e4d0b(_0x29c9d7);
      if (_0x1d26e8(_0xea48e3, _0x1085bd) <= 0) {
        if (_0x1d26e8(_0x4620cc, _0x1085bd) <= 0) {
          return _0x1085bd.getFullYear() + 1;
        } else {
          return _0x1085bd.getFullYear();
        }
      } else {
        return _0x1085bd.getFullYear() - 1;
      }
    }
    var _0x2cf160 = {
      "%a": function (_0x111c8f) {
        return _0x4844a4[_0x111c8f.tm_wday].substring(0, 3);
      },
      "%A": function (_0xbd9872) {
        return _0x4844a4[_0xbd9872.tm_wday];
      },
      "%b": function (_0x44205f) {
        return _0x1c2d83[_0x44205f.tm_mon].substring(0, 3);
      },
      "%B": function (_0x315cb1) {
        return _0x1c2d83[_0x315cb1.tm_mon];
      },
      "%C": function (_0x54c8df) {
        var _0x4d2417 = _0x54c8df.tm_year + 1900;
        return _0x38b02e(_0x4d2417 / 100 | 0, 2);
      },
      "%d": function (_0x2409f6) {
        return _0x38b02e(_0x2409f6.tm_mday, 2);
      },
      "%e": function (_0x408435) {
        return _0x4b0867(_0x408435.tm_mday, 2, " ");
      },
      "%g": function (_0x144a0f) {
        return _0x592158(_0x144a0f).toString().substring(2);
      },
      "%G": function (_0x4c2805) {
        return _0x592158(_0x4c2805);
      },
      "%H": function (_0x229f0c) {
        return _0x38b02e(_0x229f0c.tm_hour, 2);
      },
      "%I": function (_0x437bc2) {
        var _0x46cff6 = _0x437bc2.tm_hour;
        if (_0x46cff6 == 0) {
          _0x46cff6 = 12;
        } else if (_0x46cff6 > 12) {
          _0x46cff6 -= 12;
        }
        return _0x38b02e(_0x46cff6, 2);
      },
      "%j": function (_0x3fc760) {
        return _0x38b02e(_0x3fc760.tm_mday + _0xb1c0ee(_0x5c9dcd(_0x3fc760.tm_year + 1900) ? _0x58e727 : _0x190ff9, _0x3fc760.tm_mon - 1), 3);
      },
      "%m": function (_0x34b54b) {
        return _0x38b02e(_0x34b54b.tm_mon + 1, 2);
      },
      "%M": function (_0x32daa8) {
        return _0x38b02e(_0x32daa8.tm_min, 2);
      },
      "%n": function () {
        return "\n";
      },
      "%p": function (_0x570d61) {
        if (_0x570d61.tm_hour >= 0 && _0x570d61.tm_hour < 12) {
          return "AM";
        } else {
          return "PM";
        }
      },
      "%S": function (_0x52a46a) {
        return _0x38b02e(_0x52a46a.tm_sec, 2);
      },
      "%t": function () {
        return "\t";
      },
      "%u": function (_0x3b53a9) {
        return _0x3b53a9.tm_wday || 7;
      },
      "%U": function (_0x217f38) {
        var _0x1c2066 = new Date(_0x217f38.tm_year + 1900, 0, 1);
        var _0x3ef1ed = _0x1c2066.getDay() === 0 ? _0x1c2066 : _0x3af0d7(_0x1c2066, 7 - _0x1c2066.getDay());
        var _0x1734a2 = new Date(_0x217f38.tm_year + 1900, _0x217f38.tm_mon, _0x217f38.tm_mday);
        if (_0x1d26e8(_0x3ef1ed, _0x1734a2) < 0) {
          var _0x531b77 = _0xb1c0ee(_0x5c9dcd(_0x1734a2.getFullYear()) ? _0x58e727 : _0x190ff9, _0x1734a2.getMonth() - 1) - 31;
          var _0x43f138 = 31 - _0x3ef1ed.getDate();
          var _0x2a998e = _0x43f138 + _0x531b77 + _0x1734a2.getDate();
          return _0x38b02e(Math.ceil(_0x2a998e / 7), 2);
        }
        if (_0x1d26e8(_0x3ef1ed, _0x1c2066) === 0) {
          return "01";
        } else {
          return "00";
        }
      },
      "%V": function (_0x3d0d7a) {
        var _0x249a91 = new Date(_0x3d0d7a.tm_year + 1900, 0, 4);
        var _0x5c103d = new Date(_0x3d0d7a.tm_year + 1901, 0, 4);
        var _0x368306 = _0x5e4d0b(_0x249a91);
        var _0xb8a282 = _0x5e4d0b(_0x5c103d);
        var _0x5cebca = _0x3af0d7(new Date(_0x3d0d7a.tm_year + 1900, 0, 1), _0x3d0d7a.tm_yday);
        if (_0x1d26e8(_0x5cebca, _0x368306) < 0) {
          return "53";
        }
        if (_0x1d26e8(_0xb8a282, _0x5cebca) <= 0) {
          return "01";
        }
        var _0x1bcc8b;
        if (_0x368306.getFullYear() < _0x3d0d7a.tm_year + 1900) {
          _0x1bcc8b = _0x3d0d7a.tm_yday + 32 - _0x368306.getDate();
        } else {
          _0x1bcc8b = _0x3d0d7a.tm_yday + 1 - _0x368306.getDate();
        }
        return _0x38b02e(Math.ceil(_0x1bcc8b / 7), 2);
      },
      "%w": function (_0x2d1d73) {
        return _0x2d1d73.tm_wday;
      },
      "%W": function (_0x1d955d) {
        var _0x8695a6 = new Date(_0x1d955d.tm_year, 0, 1);
        var _0x21c0d8 = _0x8695a6.getDay() === 1 ? _0x8695a6 : _0x3af0d7(_0x8695a6, _0x8695a6.getDay() === 0 ? 1 : 7 - _0x8695a6.getDay() + 1);
        var _0x16b045 = new Date(_0x1d955d.tm_year + 1900, _0x1d955d.tm_mon, _0x1d955d.tm_mday);
        if (_0x1d26e8(_0x21c0d8, _0x16b045) < 0) {
          var _0x2ca344 = _0xb1c0ee(_0x5c9dcd(_0x16b045.getFullYear()) ? _0x58e727 : _0x190ff9, _0x16b045.getMonth() - 1) - 31;
          var _0x524ffb = 31 - _0x21c0d8.getDate();
          var _0x13e2ff = _0x524ffb + _0x2ca344 + _0x16b045.getDate();
          return _0x38b02e(Math.ceil(_0x13e2ff / 7), 2);
        }
        if (_0x1d26e8(_0x21c0d8, _0x8695a6) === 0) {
          return "01";
        } else {
          return "00";
        }
      },
      "%y": function (_0x4d41fc) {
        return (_0x4d41fc.tm_year + 1900).toString().substring(2);
      },
      "%Y": function (_0x2f5f7e) {
        return _0x2f5f7e.tm_year + 1900;
      },
      "%z": function (_0x42bf33) {
        var _0x56ce1d = _0x42bf33.tm_gmtoff;
        var _0x3f1e38 = _0x56ce1d >= 0;
        _0x56ce1d = Math.abs(_0x56ce1d) / 60;
        _0x56ce1d = _0x56ce1d / 60 * 100 + _0x56ce1d % 60;
        return (_0x3f1e38 ? "+" : "-") + String("0000" + _0x56ce1d).slice(-4);
      },
      "%Z": function (_0x4e6add) {
        return _0x4e6add.tm_zone;
      },
      "%%": function () {
        return "%";
      }
    };
    for (var _0x48e9a2 in _0x2cf160) {
      if (_0x5620a9.includes(_0x48e9a2)) {
        _0x5620a9 = _0x5620a9.replace(new RegExp(_0x48e9a2, "g"), _0x2cf160[_0x48e9a2](_0x33db18));
      }
    }
    var _0x5b7990 = _0x3c066c(_0x5620a9, false);
    if (_0x5b7990.length > _0x20ceef) {
      return 0;
    }
    _0x3e2cec(_0x5b7990, _0x2fe382);
    return _0x5b7990.length - 1;
  }
  function _0x41f13f(_0x402961) {
    var _0xb5eb15 = Date.now() / 1000 | 0;
    if (_0x402961) {
      _0x1b79ed[_0x402961 >> 2] = _0xb5eb15;
    }
    return _0xb5eb15;
  }
  function _0x4a4685(_0x35e34d, _0x4e0826) {
    _0x35e34d = _0x5ea6bb(_0x35e34d);
    try {
      _0x4c1d54.utime(_0x35e34d, _0x4e0826, _0x4e0826);
      return 0;
    } catch (_0x589d13) {
      if (!(_0x589d13 instanceof _0x4c1d54.ErrnoError)) {
        throw _0x589d13 + " : " + _0x382d99();
      }
      _0xf13c3a(_0x589d13.errno);
      return -1;
    }
  }
  function _0x213164(_0x443dce, _0x38a2ce) {
    var _0x392ee8;
    if (_0x38a2ce) {
      _0x392ee8 = _0x1b79ed[_0x38a2ce + 4 >> 2] * 1000;
    } else {
      _0x392ee8 = Date.now();
    }
    return _0x4a4685(_0x443dce, _0x392ee8);
  }
  var _0x5eda6e = function (_0x1aac25, _0x17c6b1, _0x4cfb12, _0x32cac3) {
    if (!_0x1aac25) {
      _0x1aac25 = this;
    }
    this.parent = _0x1aac25;
    this.mount = _0x1aac25.mount;
    this.mounted = null;
    this.id = _0x4c1d54.nextInode++;
    this.name = _0x17c6b1;
    this.mode = _0x4cfb12;
    this.node_ops = {};
    this.stream_ops = {};
    this.rdev = _0x32cac3;
  };
  var _0x41f744 = 365;
  var _0x3e8aaf = 146;
  Object.defineProperties(_0x5eda6e.prototype, {
    read: {
      get: function () {
        return (this.mode & _0x41f744) === _0x41f744;
      },
      set: function (_0x59c750) {
        if (_0x59c750) {
          this.mode |= _0x41f744;
        } else {
          this.mode &= ~_0x41f744;
        }
      }
    },
    write: {
      get: function () {
        return (this.mode & _0x3e8aaf) === _0x3e8aaf;
      },
      set: function (_0x4a3308) {
        if (_0x4a3308) {
          this.mode |= _0x3e8aaf;
        } else {
          this.mode &= ~_0x3e8aaf;
        }
      }
    },
    isFolder: {
      get: function () {
        return _0x4c1d54.isDir(this.mode);
      }
    },
    isDevice: {
      get: function () {
        return _0x4c1d54.isChrdev(this.mode);
      }
    }
  });
  _0x4c1d54.FSNode = _0x5eda6e;
  _0x4c1d54.staticInit();
  _0x51dce1.FS_createPath = _0x4c1d54.createPath;
  _0x51dce1.FS_createDataFile = _0x4c1d54.createDataFile;
  _0x51dce1.requestFullscreen = function _0x26b4fb(_0x35d352, _0xfd8ff8) {
    _0x3efa3d.requestFullscreen(_0x35d352, _0xfd8ff8);
  };
  _0x51dce1.requestAnimationFrame = function _0x245294(_0x3f92f6) {
    _0x3efa3d.requestAnimationFrame(_0x3f92f6);
  };
  _0x51dce1.setCanvasSize = function _0x5d95b6(_0x2e5be8, _0x58f346, _0xbdf8eb) {
    _0x3efa3d.setCanvasSize(_0x2e5be8, _0x58f346, _0xbdf8eb);
  };
  _0x51dce1.pauseMainLoop = function _0x5207b1() {
    _0x3efa3d.mainLoop.pause();
  };
  _0x51dce1.resumeMainLoop = function _0x21ea78() {
    _0x3efa3d.mainLoop.resume();
  };
  _0x51dce1.getUserMedia = function _0x4afc49() {
    _0x3efa3d.getUserMedia();
  };
  _0x51dce1.createContext = function _0x33166a(_0x2d457d, _0x1387d3, _0x5786f9, _0x2b535e) {
    return _0x3efa3d.createContext(_0x2d457d, _0x1387d3, _0x5786f9, _0x2b535e);
  };
  var _0x1df95f;
  for (var _0x7b940a = 0; _0x7b940a < 32; ++_0x7b940a) {
    _0x20aeb7.push(new Array(_0x7b940a));
  }
  var _0x9137a9 = new Float32Array(288);
  for (var _0x7b940a = 0; _0x7b940a < 288; ++_0x7b940a) {
    _0x4ce1b1[_0x7b940a] = _0x9137a9.subarray(0, _0x7b940a + 1);
  }
  var _0x171c38 = new Int32Array(288);
  for (var _0x7b940a = 0; _0x7b940a < 288; ++_0x7b940a) {
    _0x56317e[_0x7b940a] = _0x171c38.subarray(0, _0x7b940a + 1);
  }
  function _0x3c066c(_0x1cad8f, _0x2fca21, _0x39e70c) {
    var _0x37d860 = _0x39e70c > 0 ? _0x39e70c : _0x55b306(_0x1cad8f) + 1;
    var _0xac43b = new Array(_0x37d860);
    var _0x46f4e5 = _0x5aa101(_0x1cad8f, _0xac43b, 0, _0xac43b.length);
    if (_0x2fca21) {
      _0xac43b.length = _0x46f4e5;
    }
    return _0xac43b;
  }
  var _0x35cbd2 = {
    dk: _0x364754,
    $j: _0x4f24f4,
    Zc: _0xe96d49,
    Jj: _0x4c2e63,
    uj: _0x362342,
    Ak: _0xf1fc59,
    Hj: _0x5edd15,
    Gj: _0x51f805,
    Dj: _0x3ee503,
    Fj: _0x343356,
    Ej: _0x2ddcef,
    bk: _0x13adb1,
    ak: _0x43c34a,
    rk: _0x5bfc22,
    Sj: _0x2567bc,
    $c: _0x3dbb04,
    Oj: _0x255954,
    Lk: _0xbded2,
    dd: _0x9ea861,
    fd: _0x4d5fda,
    ed: _0x15dbb6,
    Ck: _0x261a59,
    zj: _0xf83dfe,
    yj: _0x3e5b25,
    Uj: _0x4a3688,
    gk: _0x40f538,
    fk: _0x4300a7,
    Lj: _0x3322ec,
    Cj: _0x2dc0ff,
    Bj: _0x2b3dab,
    Mj: _0x2c9b2d,
    vk: _0x1cbc7c,
    mj: _0x1e2bb2,
    rj: _0xa3e809,
    qj: _0x7e52ed,
    pj: _0x445131,
    gj: _0x159c0f,
    fj: _0x2572de,
    ej: _0x499d63,
    dj: _0x363f92,
    Aj: _0x9ff70b,
    vj: _0x5d0e87,
    Zj: _0x592a08,
    Nj: _0x53b17a,
    nj: _0x5c0156,
    qf: _0x32f313,
    Pb: _0x1d98c0,
    Ob: _0x1c41d7,
    vf: _0x3ac88b,
    Wa: _0x28ba7b,
    Va: _0x4ca130,
    Ve: _0x437b83,
    xf: _0x2d0a7f,
    Xe: _0x6e104c,
    Oe: _0x1f8227,
    fa: _0x178689,
    nf: _0x57e459,
    Lb: _0x5def50,
    Kb: _0x3e3735,
    lf: _0x296f09,
    mf: _0x266495,
    Jb: _0x1137d5,
    Ib: _0x335ffa,
    id: _0x47cb66,
    pf: _0x482c4a,
    Nb: _0x482c1e,
    Mb: _0x5bf73a,
    We: _0x3d2e88,
    Ye: _0x31b50b,
    rf: _0x3bfefa,
    Rb: _0x3cf589,
    Qb: _0x34a65e,
    Tb: _0x333af0,
    Re: _0x22cc5d,
    kf: _0x2e0d71,
    sf: _0x2c499e,
    ia: _0x49c6f3,
    Ig: _0x2741af,
    zg: _0x6fe8bb,
    aa: _0x1fc23b,
    Ag: _0x440440,
    Bg: _0xb588dc,
    xg: _0x131437,
    Gg: _0x359600,
    jc: _0x5e7780,
    yg: _0x10dc04,
    Za: _0x26aef5,
    _a: _0x147ad0,
    Ub: _0x2a7295,
    Dg: _0x364450,
    vg: _0x59d4e3,
    wg: _0x660ac9,
    lc: _0x3923b8,
    kc: _0x3af099,
    ta: _0x50ec34,
    ja: _0xcfc024,
    Fg: _0x2dbf94,
    Eg: _0x45802e,
    ua: _0x59e753,
    Cb: _0x4cb24c,
    Bb: _0x40cb63,
    la: _0xe0b40c,
    sa: _0x2d31cf,
    zb: _0x42773a,
    Ab: _0x1d9804,
    Hb: _0x1398dd,
    ha: _0x5bef26,
    Db: _0x383dd1,
    Fb: _0x5f4d7c,
    _e: _0x2029d8,
    dc: _0x20d9e9,
    yf: _0x4aab76,
    Eb: _0x779daa,
    jf: _0x211898,
    wa: _0x5bb685,
    wf: _0x5dbf2a,
    Ue: _0x1736bd,
    Gf: _0x4b458b,
    ag: _0x1c3f0e,
    ra: _0x5f04dd,
    Qf: _0x30012b,
    Yf: _0x52b9d0,
    Lf: _0xd00c01,
    Nf: _0x1da63e,
    Rf: _0x263052,
    Uf: _0x146de3,
    Pf: _0xb97de0,
    fc: _0xb08a06,
    Xf: _0x499d4b,
    ec: _0x290396,
    Zf: _0x35abcd,
    $f: _0x509e67,
    Of: _0x2d272b,
    Jf: _0x11df48,
    Tf: _0x313c7d,
    _f: _0x4f959c,
    Vf: _0xdbbf48,
    Kf: _0x18c4a4,
    Hf: _0x2060d1,
    If: _0x52eaf9,
    Sf: _0x51655e,
    qg: _0x51b658,
    hc: _0x133f37,
    og: _0x3ead4a,
    pg: _0x308d6e,
    ug: _0x2526a8,
    ng: _0x5402a8,
    sg: _0x110f4d,
    rg: _0x1459d0,
    gc: _0x5307b4,
    ic: _0x53131a,
    jg: _0x385590,
    gg: _0x4ed1cc,
    hg: _0x588f72,
    ig: _0x2d9437,
    Ya: _0x165b61,
    cg: _0x25c987,
    eg: _0x2e65a0,
    dg: _0x51d814,
    fg: _0x219953,
    ok: _0x5eb3b1,
    mk: _0x109d96,
    kk: _0x29eb38,
    Wj: _0x11d0e9,
    Yj: _0x4c8f75,
    qk: _0x15ad18,
    Qj: _0x5aaac5,
    Pj: _0x54c438,
    ik: _0xb07f42,
    wk: _0x28e889,
    Fk: _0x514463,
    uk: _0x299c06,
    tk: _0x266036,
    pb: _0x38cdd7,
    Ek: _0x464eb8,
    Dk: _0x103028,
    _j: _0x229532,
    Kj: _0x2524c4,
    Ij: _0x14d438,
    xj: _0x36aee2,
    Pk: _0x2e20a0,
    Ok: _0x100d47,
    Mk: _0x43e394,
    Nk: _0x1e2efd,
    ek: _0x42cc72,
    Rj: _0x4dde36,
    sj: _0x49efbc,
    tj: _0x1534cf,
    wj: _0xb23f1f,
    _c: _0x121e0c,
    Bk: _0xe59e0f,
    zk: _0x30168c,
    xk: _0xdbe5fc,
    yk: _0x26f015,
    nk: _0x53e4d9,
    lk: _0x68d45a,
    jk: _0x3c79f0,
    Vj: _0x1de7ae,
    Xj: _0x456a6d,
    pk: _0xbf25df,
    oj: _0x4b1e84,
    hk: _0x343704,
    ck: _0x1d25d0,
    sk: _0x466235,
    Tj: _0x2de5e7,
    sb: _0x1974ac,
    Vk: _0x490c55,
    gd: _0x5b8fe9,
    Tk: _0x3d0746,
    hd: _0x48b547,
    Qk: _0x3f2f95,
    Sk: _0xcfed5d,
    Rk: _0x4e150d,
    Uk: _0x5525e5,
    p: _0x47af0f,
    h: _0x2fca27,
    n: _0x45021b,
    g: _0x24095d,
    a: _0xb9f2ec,
    Wk: _0x2f66d6,
    nb: _0x36cc4c,
    xd: _0x58ab5a,
    ga: _0x1124ea,
    kd: _0x3b0437,
    ld: _0x13c533,
    k: _0x3ad863,
    tf: _0x2acc4a,
    kg: _0xbc34ac,
    uf: _0x2bccc8,
    _g: _0x4dbaef,
    wb: _0x1364ef,
    Og: _0x269719,
    Ad: _0xbe796d,
    $i: _0xc086c9,
    S: _0x714a50,
    Uh: _0x2c2c88,
    Hh: _0x101eb7,
    sd: _0x384ed4,
    pd: _0xa9be47,
    Oc: _0x4a5490,
    Pc: _0x589637,
    Gd: _0xc1b69b,
    Oa: _0x35d3c8,
    od: _0x23f862,
    Cg: _0x224f85,
    Ug: _0x57d719,
    Mg: _0x3ae438,
    Sb: _0x5a440f,
    cj: _0x354c14,
    tg: _0x95fd35,
    vd: _0x2853d6,
    rd: _0x1e3e09,
    Ef: _0x5cf1f2,
    ve: _0x10d950,
    ib: _0x2bb9c3,
    wd: _0x3c8828,
    Hg: _0x471d4d,
    aj: _0x268e39,
    Mf: _0x143f0a,
    yd: _0x204575,
    td: _0x3c2f65,
    qd: _0xc0fff1,
    zd: _0x16d7f0,
    Wf: _0x4e159c,
    Df: _0x38467a,
    Bd: _0x1dbc94,
    xb: _0x1cfa0e,
    Gc: _0x420057,
    Jg: _0x3bc86d,
    bj: _0x4d9e66,
    Kg: _0x2c590a,
    $d: _0x5af95f,
    ud: _0x5aad6a,
    _i: _0x44d0b5,
    x: _0x5506e7,
    P: _0x18b9b7,
    nd: _0x251a29,
    tb: _0x3a5593,
    Ma: _0x4d7467,
    hh: _0x5111c6,
    ya: _0x2cdf82,
    vc: _0x2c67b1,
    sh: _0x17203b,
    Xa: _0x1de8f9,
    Se: _0x1b130e,
    Qe: _0xbc26d9,
    ff: _0x1b2726,
    $e: _0x3c5d83,
    Ze: _0x4db29d,
    ef: _0x5af4a1,
    Sa: _0x1e6ca7,
    md: _0x55f529,
    K: _0x4aca12,
    Ta: _0x4243b2,
    Te: _0x45f319,
    Bf: _0x5b380f,
    B: _0xfd22eb,
    C: _0x2b9733,
    Xk: _0x943e8e,
    gf: _0x43af87,
    af: _0x5e0873,
    Yk: _0x2e6d16,
    Ua: _0x2d84c1,
    Gb: _0x433947,
    Ra: _0x10c2ea,
    cf: _0x1868f2,
    df: _0xacabf9,
    Wb: _0x4bce12,
    Vb: _0x289a3b,
    Ne: _0x2eefba,
    oa: _0x845871,
    ma: _0x502773,
    na: _0x13e30f,
    Me: _0x4cc268,
    Pe: _0x5e98f5,
    bc: _0x585948,
    ac: _0x1ce7af,
    cc: _0x48fb0d,
    bf: _0x593bd6,
    Xb: _0x33d8f0,
    Zb: _0x1db39d,
    Yb: _0x324a93,
    _b: _0x980ecc,
    $b: _0x2491aa,
    jd: _0x5ab08f,
    Ff: _0x5da007,
    Cf: _0x293ced,
    pa: _0x4e5c03,
    Af: _0x39cf4e,
    Ng: _0x4e0f4d,
    qa: _0x4cf006,
    hf: _0x3af453,
    of: _0xed65b6,
    z: _0x4648e3,
    Z: _0x384f87,
    qc: _0x58fb90,
    vb: _0x566190,
    Le: _0xdfbdc8,
    kb: _0x257e41,
    va: _0x1ce39c,
    b: _0x2435d1,
    ue: _0x1c3372,
    lg: _0x84de3d,
    mg: _0x19e767,
    yb: _0x558874,
    Lg: _0x106f6b,
    Ja: _0x6a8471,
    Si: _0x51f118,
    Pi: _0x1d6fce,
    sc: _0x244eb7,
    Dh: _0x5477be,
    Fa: _0x3b3fb2,
    Oi: _0x2772ef,
    bh: _0xa6cbc2,
    ah: _0x10f754,
    Li: _0x66ff88,
    Mi: _0xd3a87b,
    Wg: _0x33bd2c,
    Ni: _0x7effab,
    wh: _0x3fcb70,
    zh: _0x16f4fd,
    Lc: _0x38950f,
    Mc: _0x33f7c4,
    Nc: _0x3f20bf,
    nh: _0x2274b1,
    Ji: _0x36f78d,
    Ki: _0x413c24,
    Ii: _0x32ab13,
    Ei: _0x5b7420,
    Rg: _0x1e2c03,
    Qg: _0x20d0fe,
    Pg: _0x51a166,
    Fi: _0x542bbb,
    Gi: _0x263cc9,
    Hi: _0x440c8c,
    Cd: _0x2a4686,
    lb: _0x1f7ca2,
    Di: _0x5d867c,
    Bi: _0x528531,
    ph: _0x23f31e,
    Ci: _0x26122e,
    uh: _0x1b095a,
    eh: _0x473edc,
    Ai: _0xaf9361,
    Kc: _0x3ac1d8,
    zi: _0x4248b5,
    yi: _0x23d401,
    xi: _0x43434d,
    wi: _0x24990c,
    vi: _0x2460d2,
    ui: _0x5945e4,
    db: _0x326829,
    ti: _0x190b47,
    Vg: _0x31abcd,
    si: _0x19c5a3,
    nc: _0xff5756,
    ri: _0x2dbd3e,
    xh: _0x378627,
    Bh: _0x3b6360,
    Da: _0x1ec3a3,
    Ca: _0x3c9a43,
    qi: _0x330ec1,
    pi: _0x105b83,
    oi: _0x500e79,
    li: _0x35db63,
    gh: _0x3e2cdc,
    dh: _0x21562e,
    mi: _0x4276c8,
    fh: _0x25fa87,
    ni: _0x11d333,
    ki: _0x1084fb,
    tc: _0x3fa080,
    Eh: _0x8fba2e,
    mc: _0x42f4bc,
    hi: _0x12d9be,
    ii: _0x2d2e59,
    kh: _0x12bb81,
    V: _0x8611aa,
    Q: _0x1045f1,
    xa: _0x5c0a94,
    Ba: _0x169239,
    gi: _0x2432ad,
    ci: _0x55fa85,
    rc: _0x2f2610,
    di: _0x388299,
    Tg: _0x24e02a,
    fi: _0xf4fb23,
    yh: _0x2dc3d6,
    Ch: _0x52747e,
    ei: _0x5b04a3,
    Yi: _0x3f814c,
    jb: _0x217f1a,
    ab: _0x3b7709,
    ca: _0x3fe19f,
    ba: _0x4294b8,
    Xi: _0x1c5aa0,
    zf: _0x5bf47e,
    bi: _0x1f7c6e,
    ai: _0x4c4248,
    Ri: _0x1912c8,
    Ga: _0x17df91,
    Yg: _0x440b03,
    oc: _0x11b420,
    Ui: _0x5dda6c,
    Y: _0x5d84e0,
    Gh: _0x40e4b6,
    Fh: _0x5cb2f1,
    ji: _0x259459,
    _h: _0x1322fb,
    Jc: _0x959ee9,
    $h: _0x486811,
    Ti: _0x3cf89c,
    Zh: _0x117496,
    lh: _0x108d9a,
    Yh: _0x3a7ddc,
    Zg: _0x328c80,
    $a: _0x2dd9ef,
    ka: _0x566f98,
    Ic: _0x36bfaf,
    Wi: _0x2111cf,
    cb: _0xcc0abb,
    Qi: _0x14d359,
    Ah: _0x12f8b,
    Wh: _0x457fe7,
    ih: _0x45d73e,
    Xh: _0x4b9074,
    Hc: _0x504c82,
    pc: _0x5e19e1,
    Sg: _0x4e7fc8,
    ch: _0x28fdba,
    ea: _0x20020c,
    Vh: _0x56654b,
    mh: _0x566336,
    Xg: _0x3cbe81,
    hb: _0x13e2b8,
    Sh: _0x34aeec,
    Th: _0x25d9e0,
    Qh: _0x4dccdb,
    Rh: _0x13a0c8,
    Oh: _0x1898ef,
    rh: _0x559529,
    Ph: _0x4385b4,
    gb: _0x25ebda,
    Nh: _0xf25759,
    oh: _0x1688b4,
    qh: _0x34981a,
    Mh: _0x48b0ea,
    th: _0x44a2e6,
    vh: _0x123b7d,
    uc: _0x45d22d,
    za: _0x5c0a2f,
    wc: _0x9898fc,
    xc: _0x1780c0,
    yc: _0x379a58,
    zc: _0x3a9557,
    Ac: _0x507c79,
    fb: _0x8b3c90,
    Bc: _0x59b60d,
    Cc: _0x4a81af,
    da: _0x3315c0,
    Dc: _0x72d00d,
    Ec: _0x331221,
    bb: _0x20b75d,
    Fc: _0x513b08,
    Aa: _0x139170,
    jh: _0x5c66a3,
    Ih: _0x3e432f,
    Vi: _0x3661ab,
    Jh: _0x2d2aa6,
    Kh: _0x2b11a3,
    $g: _0x521bda,
    Lh: _0x3ed82a,
    eb: _0x247af8,
    Sc: _0x5daa7a,
    hj: _0x147032,
    I: _0x21ad8d,
    N: _0x34f223,
    Uc: _0x186691,
    L: _0x213721,
    ce: _0x2dc74f,
    Vc: _0x498c6d,
    Ia: _0x206464,
    W: _0x56ea06,
    E: _0x434734,
    Tc: _0x36a760,
    M: _0x3ee784,
    w: _0x590675,
    mb: _0x2b598b,
    _: _0x24136d,
    d: _0x50e143,
    jj: _0x752837,
    qb: _0x436b0e,
    c: _0x5798ec,
    Yc: _0x3ae5bb,
    rb: _0x3ae58d,
    Gk: _0x24d206,
    i: _0x855293,
    Zi: _0xd5cf05,
    Kk: _0x7ce4d1,
    cd: _0xbf11b6,
    q: _0x270b7a,
    Ha: _0x21fc12,
    ij: _0x5bd6ad,
    s: _0x3411de,
    Jk: _0x4ad39b,
    u: _0x574ff0,
    A: _0x2b4dd4,
    G: _0x1d4f54,
    R: _0xdf4134,
    Qc: _0x52d2d3,
    lj: _0x1ae61c,
    Rd: _0x1f480c,
    Vd: _0x248bd3,
    Dd: _0x43a106,
    ze: _0x2ca2ef,
    Je: _0x29072c,
    Ge: _0x201a1a,
    He: _0x258d7e,
    je: _0x5b9cd5,
    Ae: _0x13923c,
    xe: _0x330269,
    te: _0x5784a3,
    De: _0xc2b484,
    we: _0x198092,
    be: _0x29c2fe,
    oe: _0x51cbb0,
    ee: _0x2e1600,
    Ie: _0x11263c,
    le: _0xc4f10a,
    Fe: _0x475299,
    Xd: _0x3fc3fd,
    Ee: _0x9e3589,
    qe: _0x24d66a,
    Ke: _0x3cbcc3,
    Jd: _0x305f78,
    Od: _0x2d1d54,
    _d: _0x29b3f6,
    pe: _0x399ed0,
    Fd: _0xb1c453,
    ne: _0x4c1520,
    Kd: _0x4bda5c,
    Sd: _0x4721af,
    ie: _0x2e0135,
    de: _0xef442,
    ge: _0x42ab22,
    e: _0x26ecb7,
    l: _0x42369e,
    bg: _0x498b11,
    y: _0x15c7c0,
    ob: _0x26a405,
    F: _0x1f2b81,
    m: _0x226a29,
    Ka: _0x4a8a07,
    Ea: _0x5199f3,
    X: _0x26e429,
    ad: _0x5911f2,
    J: _0x55894b,
    f: _0x479c75,
    bd: _0x2bef15,
    o: _0x1f3222,
    kj: _0x279c34,
    r: _0x2284e7,
    t: _0x4773f5,
    D: _0x1135b2,
    Ik: _0x5653de,
    Hk: _0x3c3d04,
    O: _0x2812c4,
    he: _0x4aa269,
    H: _0x2bbef6,
    T: _0x4afd16,
    Xc: _0xcaf2e8,
    La: _0x96dcc0,
    Rc: _0x2b4b75,
    Wc: _0x227240,
    Ed: _0x5de5ae,
    Td: _0xcde3ae,
    Hd: _0x3fdc19,
    Be: _0x58e958,
    fe: _0x3e7c9a,
    Pd: _0x1edb62,
    Zd: _0x24884e,
    se: _0x2e8b66,
    ye: _0x370cb3,
    Yd: _0x3944ba,
    Ld: _0x1d1229,
    Ud: _0x2f9ac6,
    me: _0x5da66a,
    re: _0x21be68,
    Ce: _0x1a8bc4,
    ke: _0x5da2a9,
    ae: _0x2869f4,
    Wd: _0x12f019,
    Id: _0xed110d,
    Qd: _0x4aab47,
    Md: _0x417358,
    Nd: _0x5ba602,
    j: _0x2629d2,
    $: _0x260cb8,
    v: _0x5dcd3e,
    Pa: _0x48dbe9,
    Qa: _0x4957e1,
    Na: _0x4c002b,
    U: _0x41f13f,
    ub: _0x213164
  };
  var _0x29e69c = _0x32ae43();
  var _0x1f0e8e = _0x51dce1.___wasm_call_ctors = function () {
    return (_0x1f0e8e = _0x51dce1.___wasm_call_ctors = _0x51dce1.asm._k).apply(null, arguments);
  };
  var _0x1744a7 = _0x51dce1._ReleaseKeys = function () {
    return (_0x1744a7 = _0x51dce1._ReleaseKeys = _0x51dce1.asm.$k).apply(null, arguments);
  };
  var _0x47daeb = _0x51dce1._SendMessageFloat = function () {
    return (_0x47daeb = _0x51dce1._SendMessageFloat = _0x51dce1.asm.al).apply(null, arguments);
  };
  var _0x57ab9b = _0x51dce1._SendMessageString = function () {
    return (_0x57ab9b = _0x51dce1._SendMessageString = _0x51dce1.asm.bl).apply(null, arguments);
  };
  var _0x32a7e1 = _0x51dce1._SendMessage = function () {
    return (_0x32a7e1 = _0x51dce1._SendMessage = _0x51dce1.asm.cl).apply(null, arguments);
  };
  var _0x2a910c = _0x51dce1._SetFullscreen = function () {
    return (_0x2a910c = _0x51dce1._SetFullscreen = _0x51dce1.asm.dl).apply(null, arguments);
  };
  var _0x570b3f = _0x51dce1._main = function () {
    return (_0x570b3f = _0x51dce1._main = _0x51dce1.asm.el).apply(null, arguments);
  };
  var _0x2469d7 = _0x51dce1.___errno_location = function () {
    return (_0x2469d7 = _0x51dce1.___errno_location = _0x51dce1.asm.fl).apply(null, arguments);
  };
  var _0x5f2a23 = _0x51dce1._htonl = function () {
    return (_0x5f2a23 = _0x51dce1._htonl = _0x51dce1.asm.gl).apply(null, arguments);
  };
  var _0x5bf081 = _0x51dce1._htons = function () {
    return (_0x5bf081 = _0x51dce1._htons = _0x51dce1.asm.hl).apply(null, arguments);
  };
  var _0x5599e6 = _0x51dce1._ntohs = function () {
    return (_0x5599e6 = _0x51dce1._ntohs = _0x51dce1.asm.il).apply(null, arguments);
  };
  var _0x4488b5 = _0x51dce1.__get_tzname = function () {
    return (_0x4488b5 = _0x51dce1.__get_tzname = _0x51dce1.asm.jl).apply(null, arguments);
  };
  var _0x28349c = _0x51dce1.__get_daylight = function () {
    return (_0x28349c = _0x51dce1.__get_daylight = _0x51dce1.asm.kl).apply(null, arguments);
  };
  var _0x3cccd2 = _0x51dce1.__get_timezone = function () {
    return (_0x3cccd2 = _0x51dce1.__get_timezone = _0x51dce1.asm.ll).apply(null, arguments);
  };
  var _0x3e11a3 = _0x51dce1.stackSave = function () {
    return (_0x3e11a3 = _0x51dce1.stackSave = _0x51dce1.asm.ml).apply(null, arguments);
  };
  var _0x18d96d = _0x51dce1.stackRestore = function () {
    return (_0x18d96d = _0x51dce1.stackRestore = _0x51dce1.asm.nl).apply(null, arguments);
  };
  var _0x5c3d23 = _0x51dce1.stackAlloc = function () {
    return (_0x5c3d23 = _0x51dce1.stackAlloc = _0x51dce1.asm.ol).apply(null, arguments);
  };
  var _0x2517d0 = _0x51dce1._setThrew = function () {
    return (_0x2517d0 = _0x51dce1._setThrew = _0x51dce1.asm.pl).apply(null, arguments);
  };
  var _0x44175d = _0x51dce1.___cxa_can_catch = function () {
    return (_0x44175d = _0x51dce1.___cxa_can_catch = _0x51dce1.asm.ql).apply(null, arguments);
  };
  var _0x4f118b = _0x51dce1.___cxa_is_pointer_type = function () {
    return (_0x4f118b = _0x51dce1.___cxa_is_pointer_type = _0x51dce1.asm.rl).apply(null, arguments);
  };
  var _0x57219e = _0x51dce1._malloc = function () {
    return (_0x57219e = _0x51dce1._malloc = _0x51dce1.asm.sl).apply(null, arguments);
  };
  var _0x4401e3 = _0x51dce1._free = function () {
    return (_0x4401e3 = _0x51dce1._free = _0x51dce1.asm.tl).apply(null, arguments);
  };
  var _0xd9f144 = _0x51dce1._memalign = function () {
    return (_0xd9f144 = _0x51dce1._memalign = _0x51dce1.asm.ul).apply(null, arguments);
  };
  var _0x2a2c85 = _0x51dce1._memset = function () {
    return (_0x2a2c85 = _0x51dce1._memset = _0x51dce1.asm.vl).apply(null, arguments);
  };
  var _0x5e84a6 = _0x51dce1._strlen = function () {
    return (_0x5e84a6 = _0x51dce1._strlen = _0x51dce1.asm.wl).apply(null, arguments);
  };
  var _0x7cec2a = _0x51dce1.dynCall_iidiiii = function () {
    return (_0x7cec2a = _0x51dce1.dynCall_iidiiii = _0x51dce1.asm.yl).apply(null, arguments);
  };
  var _0x234acb = _0x51dce1.dynCall_vii = function () {
    return (_0x234acb = _0x51dce1.dynCall_vii = _0x51dce1.asm.zl).apply(null, arguments);
  };
  var _0x2e0f87 = _0x51dce1.dynCall_iii = function () {
    return (_0x2e0f87 = _0x51dce1.dynCall_iii = _0x51dce1.asm.Al).apply(null, arguments);
  };
  var _0x4bfd1a = _0x51dce1.dynCall_ii = function () {
    return (_0x4bfd1a = _0x51dce1.dynCall_ii = _0x51dce1.asm.Bl).apply(null, arguments);
  };
  var _0x3f85b1 = _0x51dce1.dynCall_iiii = function () {
    return (_0x3f85b1 = _0x51dce1.dynCall_iiii = _0x51dce1.asm.Cl).apply(null, arguments);
  };
  var _0xee9b23 = _0x51dce1.dynCall_jiji = function () {
    return (_0xee9b23 = _0x51dce1.dynCall_jiji = _0x51dce1.asm.Dl).apply(null, arguments);
  };
  var _0x53a2c3 = _0x51dce1.dynCall_vi = function () {
    return (_0x53a2c3 = _0x51dce1.dynCall_vi = _0x51dce1.asm.El).apply(null, arguments);
  };
  var _0xab94c5 = _0x51dce1.dynCall_iiiii = function () {
    return (_0xab94c5 = _0x51dce1.dynCall_iiiii = _0x51dce1.asm.Fl).apply(null, arguments);
  };
  var _0x24e3fb = _0x51dce1.dynCall_viii = function () {
    return (_0x24e3fb = _0x51dce1.dynCall_viii = _0x51dce1.asm.Gl).apply(null, arguments);
  };
  var _0x37e3f9 = _0x51dce1.dynCall_viiiiii = function () {
    return (_0x37e3f9 = _0x51dce1.dynCall_viiiiii = _0x51dce1.asm.Hl).apply(null, arguments);
  };
  var _0x3dfc22 = _0x51dce1.dynCall_viiiii = function () {
    return (_0x3dfc22 = _0x51dce1.dynCall_viiiii = _0x51dce1.asm.Il).apply(null, arguments);
  };
  var _0x3ffa09 = _0x51dce1.dynCall_viiii = function () {
    return (_0x3ffa09 = _0x51dce1.dynCall_viiii = _0x51dce1.asm.Jl).apply(null, arguments);
  };
  var _0x419e16 = _0x51dce1.dynCall_iiiiii = function () {
    return (_0x419e16 = _0x51dce1.dynCall_iiiiii = _0x51dce1.asm.Kl).apply(null, arguments);
  };
  var _0x293bb1 = _0x51dce1.dynCall_iiij = function () {
    return (_0x293bb1 = _0x51dce1.dynCall_iiij = _0x51dce1.asm.Ll).apply(null, arguments);
  };
  var _0x94408b = _0x51dce1.dynCall_v = function () {
    return (_0x94408b = _0x51dce1.dynCall_v = _0x51dce1.asm.Ml).apply(null, arguments);
  };
  var _0x1a1fbf = _0x51dce1.dynCall_i = function () {
    return (_0x1a1fbf = _0x51dce1.dynCall_i = _0x51dce1.asm.Nl).apply(null, arguments);
  };
  var _0x33ed90 = _0x51dce1.dynCall_iiiiiiii = function () {
    return (_0x33ed90 = _0x51dce1.dynCall_iiiiiiii = _0x51dce1.asm.Ol).apply(null, arguments);
  };
  var _0x4deb50 = _0x51dce1.dynCall_iiijiii = function () {
    return (_0x4deb50 = _0x51dce1.dynCall_iiijiii = _0x51dce1.asm.Pl).apply(null, arguments);
  };
  var _0x56806c = _0x51dce1.dynCall_iij = function () {
    return (_0x56806c = _0x51dce1.dynCall_iij = _0x51dce1.asm.Ql).apply(null, arguments);
  };
  var _0x193f76 = _0x51dce1.dynCall_iiiiiii = function () {
    return (_0x193f76 = _0x51dce1.dynCall_iiiiiii = _0x51dce1.asm.Rl).apply(null, arguments);
  };
  var _0x5d983d = _0x51dce1.dynCall_jii = function () {
    return (_0x5d983d = _0x51dce1.dynCall_jii = _0x51dce1.asm.Sl).apply(null, arguments);
  };
  var _0x3cda99 = _0x51dce1.dynCall_viiiiiii = function () {
    return (_0x3cda99 = _0x51dce1.dynCall_viiiiiii = _0x51dce1.asm.Tl).apply(null, arguments);
  };
  var _0x4bfdb8 = _0x51dce1.dynCall_vijii = function () {
    return (_0x4bfdb8 = _0x51dce1.dynCall_vijii = _0x51dce1.asm.Ul).apply(null, arguments);
  };
  var _0x21705b = _0x51dce1.dynCall_fiii = function () {
    return (_0x21705b = _0x51dce1.dynCall_fiii = _0x51dce1.asm.Vl).apply(null, arguments);
  };
  var _0x522b46 = _0x51dce1.dynCall_viiji = function () {
    return (_0x522b46 = _0x51dce1.dynCall_viiji = _0x51dce1.asm.Wl).apply(null, arguments);
  };
  var _0x356790 = _0x51dce1.dynCall_viiff = function () {
    return (_0x356790 = _0x51dce1.dynCall_viiff = _0x51dce1.asm.Xl).apply(null, arguments);
  };
  var _0x2745a9 = _0x51dce1.dynCall_jiii = function () {
    return (_0x2745a9 = _0x51dce1.dynCall_jiii = _0x51dce1.asm.Yl).apply(null, arguments);
  };
  var _0x5b14d6 = _0x51dce1.dynCall_jiiii = function () {
    return (_0x5b14d6 = _0x51dce1.dynCall_jiiii = _0x51dce1.asm.Zl).apply(null, arguments);
  };
  var _0x1a0580 = _0x51dce1.dynCall_fiiii = function () {
    return (_0x1a0580 = _0x51dce1.dynCall_fiiii = _0x51dce1.asm._l).apply(null, arguments);
  };
  var _0x3fc2b9 = _0x51dce1.dynCall_diiii = function () {
    return (_0x3fc2b9 = _0x51dce1.dynCall_diiii = _0x51dce1.asm.$l).apply(null, arguments);
  };
  var _0x35c08d = _0x51dce1.dynCall_diii = function () {
    return (_0x35c08d = _0x51dce1.dynCall_diii = _0x51dce1.asm.am).apply(null, arguments);
  };
  var _0x35955c = _0x51dce1.dynCall_viiiiiiii = function () {
    return (_0x35955c = _0x51dce1.dynCall_viiiiiiii = _0x51dce1.asm.bm).apply(null, arguments);
  };
  var _0x303685 = _0x51dce1.dynCall_viif = function () {
    return (_0x303685 = _0x51dce1.dynCall_viif = _0x51dce1.asm.cm).apply(null, arguments);
  };
  var _0x3662c6 = _0x51dce1.dynCall_vifi = function () {
    return (_0x3662c6 = _0x51dce1.dynCall_vifi = _0x51dce1.asm.dm).apply(null, arguments);
  };
  var _0x18a424 = _0x51dce1.dynCall_viijji = function () {
    return (_0x18a424 = _0x51dce1.dynCall_viijji = _0x51dce1.asm.em).apply(null, arguments);
  };
  var _0x324d88 = _0x51dce1.dynCall_jdi = function () {
    return (_0x324d88 = _0x51dce1.dynCall_jdi = _0x51dce1.asm.fm).apply(null, arguments);
  };
  var _0x244428 = _0x51dce1.dynCall_vijiii = function () {
    return (_0x244428 = _0x51dce1.dynCall_vijiii = _0x51dce1.asm.gm).apply(null, arguments);
  };
  var _0x26704e = _0x51dce1.dynCall_ijiii = function () {
    return (_0x26704e = _0x51dce1.dynCall_ijiii = _0x51dce1.asm.hm).apply(null, arguments);
  };
  var _0x125b81 = _0x51dce1.dynCall_ji = function () {
    return (_0x125b81 = _0x51dce1.dynCall_ji = _0x51dce1.asm.im).apply(null, arguments);
  };
  var _0x52348c = _0x51dce1.dynCall_iiji = function () {
    return (_0x52348c = _0x51dce1.dynCall_iiji = _0x51dce1.asm.jm).apply(null, arguments);
  };
  var _0x59f362 = _0x51dce1.dynCall_jiiji = function () {
    return (_0x59f362 = _0x51dce1.dynCall_jiiji = _0x51dce1.asm.km).apply(null, arguments);
  };
  var _0x1eb4c6 = _0x51dce1.dynCall_viji = function () {
    return (_0x1eb4c6 = _0x51dce1.dynCall_viji = _0x51dce1.asm.lm).apply(null, arguments);
  };
  var _0x347027 = _0x51dce1.dynCall_jji = function () {
    return (_0x347027 = _0x51dce1.dynCall_jji = _0x51dce1.asm.mm).apply(null, arguments);
  };
  var _0x41e4c9 = _0x51dce1.dynCall_viiij = function () {
    return (_0x41e4c9 = _0x51dce1.dynCall_viiij = _0x51dce1.asm.nm).apply(null, arguments);
  };
  var _0x529024 = _0x51dce1.dynCall_fii = function () {
    return (_0x529024 = _0x51dce1.dynCall_fii = _0x51dce1.asm.om).apply(null, arguments);
  };
  var _0x1b7244 = _0x51dce1.dynCall_viifi = function () {
    return (_0x1b7244 = _0x51dce1.dynCall_viifi = _0x51dce1.asm.pm).apply(null, arguments);
  };
  var _0x7aad1d = _0x51dce1.dynCall_vidi = function () {
    return (_0x7aad1d = _0x51dce1.dynCall_vidi = _0x51dce1.asm.qm).apply(null, arguments);
  };
  var _0xfaa7a4 = _0x51dce1.dynCall_viffffi = function () {
    return (_0xfaa7a4 = _0x51dce1.dynCall_viffffi = _0x51dce1.asm.rm).apply(null, arguments);
  };
  var _0x48f33e = _0x51dce1.dynCall_iiiifii = function () {
    return (_0x48f33e = _0x51dce1.dynCall_iiiifii = _0x51dce1.asm.sm).apply(null, arguments);
  };
  var _0x4b3adb = _0x51dce1.dynCall_iiiiiifii = function () {
    return (_0x4b3adb = _0x51dce1.dynCall_iiiiiifii = _0x51dce1.asm.tm).apply(null, arguments);
  };
  var _0xf9bab8 = _0x51dce1.dynCall_viiiiiiifiifiii = function () {
    return (_0xf9bab8 = _0x51dce1.dynCall_viiiiiiifiifiii = _0x51dce1.asm.um).apply(null, arguments);
  };
  var _0x2b2340 = _0x51dce1.dynCall_viiiiiiifddfiii = function () {
    return (_0x2b2340 = _0x51dce1.dynCall_viiiiiiifddfiii = _0x51dce1.asm.vm).apply(null, arguments);
  };
  var _0x27c535 = _0x51dce1.dynCall_viiiiiiifjjfiii = function () {
    return (_0x27c535 = _0x51dce1.dynCall_viiiiiiifjjfiii = _0x51dce1.asm.wm).apply(null, arguments);
  };
  var _0x31a9c9 = _0x51dce1.dynCall_viiiiiiiffffiii = function () {
    return (_0x31a9c9 = _0x51dce1.dynCall_viiiiiiiffffiii = _0x51dce1.asm.xm).apply(null, arguments);
  };
  var _0x106ca4 = _0x51dce1.dynCall_ifi = function () {
    return (_0x106ca4 = _0x51dce1.dynCall_ifi = _0x51dce1.asm.ym).apply(null, arguments);
  };
  var _0x12db34 = _0x51dce1.dynCall_fi = function () {
    return (_0x12db34 = _0x51dce1.dynCall_fi = _0x51dce1.asm.zm).apply(null, arguments);
  };
  var _0x246e72 = _0x51dce1.dynCall_jjji = function () {
    return (_0x246e72 = _0x51dce1.dynCall_jjji = _0x51dce1.asm.Am).apply(null, arguments);
  };
  var _0x2a1516 = _0x51dce1.dynCall_iiifii = function () {
    return (_0x2a1516 = _0x51dce1.dynCall_iiifii = _0x51dce1.asm.Bm).apply(null, arguments);
  };
  var _0x2d1526 = _0x51dce1.dynCall_iiifiii = function () {
    return (_0x2d1526 = _0x51dce1.dynCall_iiifiii = _0x51dce1.asm.Cm).apply(null, arguments);
  };
  var _0x443d8d = _0x51dce1.dynCall_viiifi = function () {
    return (_0x443d8d = _0x51dce1.dynCall_viiifi = _0x51dce1.asm.Dm).apply(null, arguments);
  };
  var _0x2dd2d5 = _0x51dce1.dynCall_iifi = function () {
    return (_0x2dd2d5 = _0x51dce1.dynCall_iifi = _0x51dce1.asm.Em).apply(null, arguments);
  };
  var _0x31f420 = _0x51dce1.dynCall_fifi = function () {
    return (_0x31f420 = _0x51dce1.dynCall_fifi = _0x51dce1.asm.Fm).apply(null, arguments);
  };
  var _0x592c05 = _0x51dce1.dynCall_viidii = function () {
    return (_0x592c05 = _0x51dce1.dynCall_viidii = _0x51dce1.asm.Gm).apply(null, arguments);
  };
  var _0x5dc8ad = _0x51dce1.dynCall_viiffi = function () {
    return (_0x5dc8ad = _0x51dce1.dynCall_viiffi = _0x51dce1.asm.Hm).apply(null, arguments);
  };
  var _0x2c1564 = _0x51dce1.dynCall_dii = function () {
    return (_0x2c1564 = _0x51dce1.dynCall_dii = _0x51dce1.asm.Im).apply(null, arguments);
  };
  var _0x30ff66 = _0x51dce1.dynCall_iiiifi = function () {
    return (_0x30ff66 = _0x51dce1.dynCall_iiiifi = _0x51dce1.asm.Jm).apply(null, arguments);
  };
  var _0x305f4e = _0x51dce1.dynCall_viffi = function () {
    return (_0x305f4e = _0x51dce1.dynCall_viffi = _0x51dce1.asm.Km).apply(null, arguments);
  };
  var _0x3f0bb0 = _0x51dce1.dynCall_iidi = function () {
    return (_0x3f0bb0 = _0x51dce1.dynCall_iidi = _0x51dce1.asm.Lm).apply(null, arguments);
  };
  var _0x231170 = _0x51dce1.dynCall_vifii = function () {
    return (_0x231170 = _0x51dce1.dynCall_vifii = _0x51dce1.asm.Mm).apply(null, arguments);
  };
  var _0x3a5fc4 = _0x51dce1.dynCall_viiiiiiiiifi = function () {
    return (_0x3a5fc4 = _0x51dce1.dynCall_viiiiiiiiifi = _0x51dce1.asm.Nm).apply(null, arguments);
  };
  var _0x180e03 = _0x51dce1.dynCall_iiiiiiiiiiiii = function () {
    return (_0x180e03 = _0x51dce1.dynCall_iiiiiiiiiiiii = _0x51dce1.asm.Om).apply(null, arguments);
  };
  var _0x3295da = _0x51dce1.dynCall_iiifi = function () {
    return (_0x3295da = _0x51dce1.dynCall_iiifi = _0x51dce1.asm.Pm).apply(null, arguments);
  };
  var _0x45fd40 = _0x51dce1.dynCall_viiiiiiiii = function () {
    return (_0x45fd40 = _0x51dce1.dynCall_viiiiiiiii = _0x51dce1.asm.Qm).apply(null, arguments);
  };
  var _0x179120 = _0x51dce1.dynCall_viiiifi = function () {
    return (_0x179120 = _0x51dce1.dynCall_viiiifi = _0x51dce1.asm.Rm).apply(null, arguments);
  };
  var _0x2a1698 = _0x51dce1.dynCall_ijji = function () {
    return (_0x2a1698 = _0x51dce1.dynCall_ijji = _0x51dce1.asm.Sm).apply(null, arguments);
  };
  var _0x51f1c3 = _0x51dce1.dynCall_idi = function () {
    return (_0x51f1c3 = _0x51dce1.dynCall_idi = _0x51dce1.asm.Tm).apply(null, arguments);
  };
  var _0x6cf17b = _0x51dce1.dynCall_viiiiiiiiiiii = function () {
    return (_0x6cf17b = _0x51dce1.dynCall_viiiiiiiiiiii = _0x51dce1.asm.Um).apply(null, arguments);
  };
  var _0x47e6ec = _0x51dce1.dynCall_iiiiji = function () {
    return (_0x47e6ec = _0x51dce1.dynCall_iiiiji = _0x51dce1.asm.Vm).apply(null, arguments);
  };
  var _0x1b453a = _0x51dce1.dynCall_fffi = function () {
    return (_0x1b453a = _0x51dce1.dynCall_fffi = _0x51dce1.asm.Wm).apply(null, arguments);
  };
  var _0xaf829a = _0x51dce1.dynCall_iiiiiiiiii = function () {
    return (_0xaf829a = _0x51dce1.dynCall_iiiiiiiiii = _0x51dce1.asm.Xm).apply(null, arguments);
  };
  var _0x64050 = _0x51dce1.dynCall_iiiiiiiii = function () {
    return (_0x64050 = _0x51dce1.dynCall_iiiiiiiii = _0x51dce1.asm.Ym).apply(null, arguments);
  };
  var _0x19c840 = _0x51dce1.dynCall_jjii = function () {
    return (_0x19c840 = _0x51dce1.dynCall_jjii = _0x51dce1.asm.Zm).apply(null, arguments);
  };
  var _0x55daf1 = _0x51dce1.dynCall_dji = function () {
    return (_0x55daf1 = _0x51dce1.dynCall_dji = _0x51dce1.asm._m).apply(null, arguments);
  };
  var _0x26b1d4 = _0x51dce1.dynCall_iji = function () {
    return (_0x26b1d4 = _0x51dce1.dynCall_iji = _0x51dce1.asm.$m).apply(null, arguments);
  };
  var _0x14d087 = _0x51dce1.dynCall_diiid = function () {
    return (_0x14d087 = _0x51dce1.dynCall_diiid = _0x51dce1.asm.an).apply(null, arguments);
  };
  var _0x3d94a3 = _0x51dce1.dynCall_jiiij = function () {
    return (_0x3d94a3 = _0x51dce1.dynCall_jiiij = _0x51dce1.asm.bn).apply(null, arguments);
  };
  var _0x14b35c = _0x51dce1.dynCall_fiiif = function () {
    return (_0x14b35c = _0x51dce1.dynCall_fiiif = _0x51dce1.asm.cn).apply(null, arguments);
  };
  var _0x3c6fa2 = _0x51dce1.dynCall_viij = function () {
    return (_0x3c6fa2 = _0x51dce1.dynCall_viij = _0x51dce1.asm.dn).apply(null, arguments);
  };
  var _0x32d7a9 = _0x51dce1.dynCall_iijji = function () {
    return (_0x32d7a9 = _0x51dce1.dynCall_iijji = _0x51dce1.asm.en).apply(null, arguments);
  };
  var _0x229849 = _0x51dce1.dynCall_iiddi = function () {
    return (_0x229849 = _0x51dce1.dynCall_iiddi = _0x51dce1.asm.fn).apply(null, arguments);
  };
  var _0x306754 = _0x51dce1.dynCall_iiffi = function () {
    return (_0x306754 = _0x51dce1.dynCall_iiffi = _0x51dce1.asm.gn).apply(null, arguments);
  };
  var _0x1238b3 = _0x51dce1.dynCall_viiiifii = function () {
    return (_0x1238b3 = _0x51dce1.dynCall_viiiifii = _0x51dce1.asm.hn).apply(null, arguments);
  };
  var _0x1faf21 = _0x51dce1.dynCall_viijii = function () {
    return (_0x1faf21 = _0x51dce1.dynCall_viijii = _0x51dce1.asm.jn).apply(null, arguments);
  };
  var _0xbeb0dc = _0x51dce1.dynCall_viijiii = function () {
    return (_0xbeb0dc = _0x51dce1.dynCall_viijiii = _0x51dce1.asm.kn).apply(null, arguments);
  };
  var _0x4e6151 = _0x51dce1.dynCall_viiiiiiiiiiiii = function () {
    return (_0x4e6151 = _0x51dce1.dynCall_viiiiiiiiiiiii = _0x51dce1.asm.ln).apply(null, arguments);
  };
  var _0x30fe6a = _0x51dce1.dynCall_jidi = function () {
    return (_0x30fe6a = _0x51dce1.dynCall_jidi = _0x51dce1.asm.mn).apply(null, arguments);
  };
  var _0x3ddfa7 = _0x51dce1.dynCall_iijii = function () {
    return (_0x3ddfa7 = _0x51dce1.dynCall_iijii = _0x51dce1.asm.nn).apply(null, arguments);
  };
  var _0x473f7e = _0x51dce1.dynCall_iiiiidii = function () {
    return (_0x473f7e = _0x51dce1.dynCall_iiiiidii = _0x51dce1.asm.on).apply(null, arguments);
  };
  var _0x1a1201 = _0x51dce1.dynCall_viiiiiiiiii = function () {
    return (_0x1a1201 = _0x51dce1.dynCall_viiiiiiiiii = _0x51dce1.asm.pn).apply(null, arguments);
  };
  var _0x36a14b = _0x51dce1.dynCall_iiiiij = function () {
    return (_0x36a14b = _0x51dce1.dynCall_iiiiij = _0x51dce1.asm.qn).apply(null, arguments);
  };
  var _0xf470b0 = _0x51dce1.dynCall_vijjji = function () {
    return (_0xf470b0 = _0x51dce1.dynCall_vijjji = _0x51dce1.asm.rn).apply(null, arguments);
  };
  var _0xc89b8e = _0x51dce1.dynCall_viiiji = function () {
    return (_0xc89b8e = _0x51dce1.dynCall_viiiji = _0x51dce1.asm.sn).apply(null, arguments);
  };
  var _0x50d528 = _0x51dce1.dynCall_viiiiiiiiiii = function () {
    return (_0x50d528 = _0x51dce1.dynCall_viiiiiiiiiii = _0x51dce1.asm.tn).apply(null, arguments);
  };
  var _0x24d93b = _0x51dce1.dynCall_iiijii = function () {
    return (_0x24d93b = _0x51dce1.dynCall_iiijii = _0x51dce1.asm.un).apply(null, arguments);
  };
  var _0xe68cc5 = _0x51dce1.dynCall_iijiiii = function () {
    return (_0xe68cc5 = _0x51dce1.dynCall_iijiiii = _0x51dce1.asm.vn).apply(null, arguments);
  };
  var _0x1932d2 = _0x51dce1.dynCall_jijiii = function () {
    return (_0x1932d2 = _0x51dce1.dynCall_jijiii = _0x51dce1.asm.wn).apply(null, arguments);
  };
  var _0x2145fb = _0x51dce1.dynCall_iijiiiiii = function () {
    return (_0x2145fb = _0x51dce1.dynCall_iijiiiiii = _0x51dce1.asm.xn).apply(null, arguments);
  };
  var _0x2b82da = _0x51dce1.dynCall_iijjiiiiii = function () {
    return (_0x2b82da = _0x51dce1.dynCall_iijjiiiiii = _0x51dce1.asm.yn).apply(null, arguments);
  };
  var _0x319e08 = _0x51dce1.dynCall_iiiijjii = function () {
    return (_0x319e08 = _0x51dce1.dynCall_iiiijjii = _0x51dce1.asm.zn).apply(null, arguments);
  };
  var _0x49a9f1 = _0x51dce1.dynCall_iijiii = function () {
    return (_0x49a9f1 = _0x51dce1.dynCall_iijiii = _0x51dce1.asm.An).apply(null, arguments);
  };
  var _0x85f4e7 = _0x51dce1.dynCall_viijiiijiiii = function () {
    return (_0x85f4e7 = _0x51dce1.dynCall_viijiiijiiii = _0x51dce1.asm.Bn).apply(null, arguments);
  };
  var _0x19a6a8 = _0x51dce1.dynCall_dddi = function () {
    return (_0x19a6a8 = _0x51dce1.dynCall_dddi = _0x51dce1.asm.Cn).apply(null, arguments);
  };
  var _0x3087be = _0x51dce1.dynCall_iiiiiiiiiiii = function () {
    return (_0x3087be = _0x51dce1.dynCall_iiiiiiiiiiii = _0x51dce1.asm.Dn).apply(null, arguments);
  };
  var _0x1d0dc7 = _0x51dce1.dynCall_iiiiiiiiiiiiii = function () {
    return (_0x1d0dc7 = _0x51dce1.dynCall_iiiiiiiiiiiiii = _0x51dce1.asm.En).apply(null, arguments);
  };
  var _0x1c6705 = _0x51dce1.dynCall_iiiiiiiiiiiiiii = function () {
    return (_0x1c6705 = _0x51dce1.dynCall_iiiiiiiiiiiiiii = _0x51dce1.asm.Fn).apply(null, arguments);
  };
  var _0x53d6c8 = _0x51dce1.dynCall_iiiiiiiiiiiiiiii = function () {
    return (_0x53d6c8 = _0x51dce1.dynCall_iiiiiiiiiiiiiiii = _0x51dce1.asm.Gn).apply(null, arguments);
  };
  var _0x2fd89c = _0x51dce1.dynCall_iiiiiiiiiiiiiiiii = function () {
    return (_0x2fd89c = _0x51dce1.dynCall_iiiiiiiiiiiiiiiii = _0x51dce1.asm.Hn).apply(null, arguments);
  };
  var _0x2b7363 = _0x51dce1.dynCall_iiiiiiiiiiiiiiiiii = function () {
    return (_0x2b7363 = _0x51dce1.dynCall_iiiiiiiiiiiiiiiiii = _0x51dce1.asm.In).apply(null, arguments);
  };
  var _0x4f6399 = _0x51dce1.dynCall_iiiiiiiiiiiiiiiiiii = function () {
    return (_0x4f6399 = _0x51dce1.dynCall_iiiiiiiiiiiiiiiiiii = _0x51dce1.asm.Jn).apply(null, arguments);
  };
  var _0x415cdb = _0x51dce1.dynCall_fiifi = function () {
    return (_0x415cdb = _0x51dce1.dynCall_fiifi = _0x51dce1.asm.Kn).apply(null, arguments);
  };
  var _0x2711c2 = _0x51dce1.dynCall_iiiiiiiiiii = function () {
    return (_0x2711c2 = _0x51dce1.dynCall_iiiiiiiiiii = _0x51dce1.asm.Ln).apply(null, arguments);
  };
  var _0x34366d = _0x51dce1.dynCall_ddiii = function () {
    return (_0x34366d = _0x51dce1.dynCall_ddiii = _0x51dce1.asm.Mn).apply(null, arguments);
  };
  var _0x71f61e = _0x51dce1.dynCall_viidi = function () {
    return (_0x71f61e = _0x51dce1.dynCall_viidi = _0x51dce1.asm.Nn).apply(null, arguments);
  };
  var _0x59aaf3 = _0x51dce1.dynCall_iiiiidi = function () {
    return (_0x59aaf3 = _0x51dce1.dynCall_iiiiidi = _0x51dce1.asm.On).apply(null, arguments);
  };
  var _0x245161 = _0x51dce1.dynCall_fiiffi = function () {
    return (_0x245161 = _0x51dce1.dynCall_fiiffi = _0x51dce1.asm.Pn).apply(null, arguments);
  };
  var _0x3c28e0 = _0x51dce1.dynCall_viiififii = function () {
    return (_0x3c28e0 = _0x51dce1.dynCall_viiififii = _0x51dce1.asm.Qn).apply(null, arguments);
  };
  var _0x564b62 = _0x51dce1.dynCall_viiiijiii = function () {
    return (_0x564b62 = _0x51dce1.dynCall_viiiijiii = _0x51dce1.asm.Rn).apply(null, arguments);
  };
  var _0x50e88b = _0x51dce1.dynCall_viiiiiiiiiiiiii = function () {
    return (_0x50e88b = _0x51dce1.dynCall_viiiiiiiiiiiiii = _0x51dce1.asm.Sn).apply(null, arguments);
  };
  var _0x1118a3 = _0x51dce1.dynCall_viiiiiiiiiiiiiii = function () {
    return (_0x1118a3 = _0x51dce1.dynCall_viiiiiiiiiiiiiii = _0x51dce1.asm.Tn).apply(null, arguments);
  };
  var _0x4b5fd8 = _0x51dce1.dynCall_viiiiiiiiiiiiiiii = function () {
    return (_0x4b5fd8 = _0x51dce1.dynCall_viiiiiiiiiiiiiiii = _0x51dce1.asm.Un).apply(null, arguments);
  };
  var _0x1aba9d = _0x51dce1.dynCall_viiiiiiiiiiiiiiiii = function () {
    return (_0x1aba9d = _0x51dce1.dynCall_viiiiiiiiiiiiiiiii = _0x51dce1.asm.Vn).apply(null, arguments);
  };
  var _0x5e4567 = _0x51dce1.dynCall_viiiiiiiiiiiiiiiiii = function () {
    return (_0x5e4567 = _0x51dce1.dynCall_viiiiiiiiiiiiiiiiii = _0x51dce1.asm.Wn).apply(null, arguments);
  };
  var _0xe3558e = _0x51dce1.dynCall_viiidi = function () {
    return (_0xe3558e = _0x51dce1.dynCall_viiidi = _0x51dce1.asm.Xn).apply(null, arguments);
  };
  var _0x215eae = _0x51dce1.dynCall_vijijii = function () {
    return (_0x215eae = _0x51dce1.dynCall_vijijii = _0x51dce1.asm.Yn).apply(null, arguments);
  };
  var _0x5cd45c = _0x51dce1.dynCall_fiffffi = function () {
    return (_0x5cd45c = _0x51dce1.dynCall_fiffffi = _0x51dce1.asm.Zn).apply(null, arguments);
  };
  var _0x32e031 = _0x51dce1.dynCall_j = function () {
    return (_0x32e031 = _0x51dce1.dynCall_j = _0x51dce1.asm._n).apply(null, arguments);
  };
  var _0x4ce25b = _0x51dce1.dynCall_jijj = function () {
    return (_0x4ce25b = _0x51dce1.dynCall_jijj = _0x51dce1.asm.$n).apply(null, arguments);
  };
  var _0x5e9108 = _0x51dce1.dynCall_iiiiiiiiiji = function () {
    return (_0x5e9108 = _0x51dce1.dynCall_iiiiiiiiiji = _0x51dce1.asm.ao).apply(null, arguments);
  };
  var _0x254e58 = _0x51dce1.dynCall_vji = function () {
    return (_0x254e58 = _0x51dce1.dynCall_vji = _0x51dce1.asm.bo).apply(null, arguments);
  };
  var _0x317626 = _0x51dce1.dynCall_viiijj = function () {
    return (_0x317626 = _0x51dce1.dynCall_viiijj = _0x51dce1.asm.co).apply(null, arguments);
  };
  var _0x50ed8b = _0x51dce1.dynCall_jiiiiiiiiii = function () {
    return (_0x50ed8b = _0x51dce1.dynCall_jiiiiiiiiii = _0x51dce1.asm.eo).apply(null, arguments);
  };
  var _0x22d751 = _0x51dce1.dynCall_viijiiiiii = function () {
    return (_0x22d751 = _0x51dce1.dynCall_viijiiiiii = _0x51dce1.asm.fo).apply(null, arguments);
  };
  var _0x56e40f = _0x51dce1.dynCall_vjjjiiii = function () {
    return (_0x56e40f = _0x51dce1.dynCall_vjjjiiii = _0x51dce1.asm.go).apply(null, arguments);
  };
  var _0x46949e = _0x51dce1.dynCall_vjiiiii = function () {
    return (_0x46949e = _0x51dce1.dynCall_vjiiiii = _0x51dce1.asm.ho).apply(null, arguments);
  };
  var _0x556786 = _0x51dce1.dynCall_jiiiii = function () {
    return (_0x556786 = _0x51dce1.dynCall_jiiiii = _0x51dce1.asm.io).apply(null, arguments);
  };
  var _0x5777d1 = _0x51dce1.dynCall_iiiffi = function () {
    return (_0x5777d1 = _0x51dce1.dynCall_iiiffi = _0x51dce1.asm.jo).apply(null, arguments);
  };
  var _0x1dd699 = _0x51dce1.dynCall_iifii = function () {
    return (_0x1dd699 = _0x51dce1.dynCall_iifii = _0x51dce1.asm.ko).apply(null, arguments);
  };
  var _0x40bfee = _0x51dce1.dynCall_iiffii = function () {
    return (_0x40bfee = _0x51dce1.dynCall_iiffii = _0x51dce1.asm.lo).apply(null, arguments);
  };
  var _0x2b01d1 = _0x51dce1.dynCall_iiififii = function () {
    return (_0x2b01d1 = _0x51dce1.dynCall_iiififii = _0x51dce1.asm.mo).apply(null, arguments);
  };
  var _0x197456 = _0x51dce1.dynCall_iiifiiiii = function () {
    return (_0x197456 = _0x51dce1.dynCall_iiifiiiii = _0x51dce1.asm.no).apply(null, arguments);
  };
  var _0x2dd1a9 = _0x51dce1.dynCall_iiffifiiii = function () {
    return (_0x2dd1a9 = _0x51dce1.dynCall_iiffifiiii = _0x51dce1.asm.oo).apply(null, arguments);
  };
  var _0x1bdd9f = _0x51dce1.dynCall_iifiifiiii = function () {
    return (_0x1bdd9f = _0x51dce1.dynCall_iifiifiiii = _0x51dce1.asm.po).apply(null, arguments);
  };
  var _0x2a8bb8 = _0x51dce1.dynCall_iiiifiii = function () {
    return (_0x2a8bb8 = _0x51dce1.dynCall_iiiifiii = _0x51dce1.asm.qo).apply(null, arguments);
  };
  var _0x513279 = _0x51dce1.dynCall_iiifiiii = function () {
    return (_0x513279 = _0x51dce1.dynCall_iiifiiii = _0x51dce1.asm.ro).apply(null, arguments);
  };
  var _0x405263 = _0x51dce1.dynCall_iiiffiii = function () {
    return (_0x405263 = _0x51dce1.dynCall_iiiffiii = _0x51dce1.asm.so).apply(null, arguments);
  };
  var _0x8da5f = _0x51dce1.dynCall_iiiiifii = function () {
    return (_0x8da5f = _0x51dce1.dynCall_iiiiifii = _0x51dce1.asm.to).apply(null, arguments);
  };
  var _0x6c56fe = _0x51dce1.dynCall_iifiifffii = function () {
    return (_0x6c56fe = _0x51dce1.dynCall_iifiifffii = _0x51dce1.asm.uo).apply(null, arguments);
  };
  var _0xc349e0 = _0x51dce1.dynCall_vifiii = function () {
    return (_0xc349e0 = _0x51dce1.dynCall_vifiii = _0x51dce1.asm.vo).apply(null, arguments);
  };
  var _0x44473b = _0x51dce1.dynCall_viffiii = function () {
    return (_0x44473b = _0x51dce1.dynCall_viffiii = _0x51dce1.asm.wo).apply(null, arguments);
  };
  var _0x447dc8 = _0x51dce1.dynCall_viiiiifi = function () {
    return (_0x447dc8 = _0x51dce1.dynCall_viiiiifi = _0x51dce1.asm.xo).apply(null, arguments);
  };
  var _0x39d96c = _0x51dce1.dynCall_viiifiii = function () {
    return (_0x39d96c = _0x51dce1.dynCall_viiifiii = _0x51dce1.asm.yo).apply(null, arguments);
  };
  var _0x27dba6 = _0x51dce1.dynCall_vfiiiii = function () {
    return (_0x27dba6 = _0x51dce1.dynCall_vfiiiii = _0x51dce1.asm.zo).apply(null, arguments);
  };
  var _0x56df22 = _0x51dce1.dynCall_vffffiiii = function () {
    return (_0x56df22 = _0x51dce1.dynCall_vffffiiii = _0x51dce1.asm.Ao).apply(null, arguments);
  };
  var _0x49c500 = _0x51dce1.dynCall_iiiffii = function () {
    return (_0x49c500 = _0x51dce1.dynCall_iiiffii = _0x51dce1.asm.Bo).apply(null, arguments);
  };
  var _0x571205 = _0x51dce1.dynCall_viiifiiii = function () {
    return (_0x571205 = _0x51dce1.dynCall_viiifiiii = _0x51dce1.asm.Co).apply(null, arguments);
  };
  var _0x2b5de1 = _0x51dce1.dynCall_viiiifiii = function () {
    return (_0x2b5de1 = _0x51dce1.dynCall_viiiifiii = _0x51dce1.asm.Do).apply(null, arguments);
  };
  var _0x3af663 = _0x51dce1.dynCall_iifiiifiii = function () {
    return (_0x3af663 = _0x51dce1.dynCall_iifiiifiii = _0x51dce1.asm.Eo).apply(null, arguments);
  };
  var _0x2d012b = _0x51dce1.dynCall_iifffii = function () {
    return (_0x2d012b = _0x51dce1.dynCall_iifffii = _0x51dce1.asm.Fo).apply(null, arguments);
  };
  var _0x1aaa71 = _0x51dce1.dynCall_ifffii = function () {
    return (_0x1aaa71 = _0x51dce1.dynCall_ifffii = _0x51dce1.asm.Go).apply(null, arguments);
  };
  var _0x370b42 = _0x51dce1.dynCall_iffi = function () {
    return (_0x370b42 = _0x51dce1.dynCall_iffi = _0x51dce1.asm.Ho).apply(null, arguments);
  };
  var _0x5ec761 = _0x51dce1.dynCall_fffffi = function () {
    return (_0x5ec761 = _0x51dce1.dynCall_fffffi = _0x51dce1.asm.Io).apply(null, arguments);
  };
  var _0x5327b5 = _0x51dce1.dynCall_ffffi = function () {
    return (_0x5327b5 = _0x51dce1.dynCall_ffffi = _0x51dce1.asm.Jo).apply(null, arguments);
  };
  var _0x5b553a = _0x51dce1.dynCall_vifiifi = function () {
    return (_0x5b553a = _0x51dce1.dynCall_vifiifi = _0x51dce1.asm.Ko).apply(null, arguments);
  };
  var _0x5cc3d1 = _0x51dce1.dynCall_fiffi = function () {
    return (_0x5cc3d1 = _0x51dce1.dynCall_fiffi = _0x51dce1.asm.Lo).apply(null, arguments);
  };
  var _0x2b391b = _0x51dce1.dynCall_viffii = function () {
    return (_0x2b391b = _0x51dce1.dynCall_viffii = _0x51dce1.asm.Mo).apply(null, arguments);
  };
  var _0x411744 = _0x51dce1.dynCall_vifiiii = function () {
    return (_0x411744 = _0x51dce1.dynCall_vifiiii = _0x51dce1.asm.No).apply(null, arguments);
  };
  var _0x97cc36 = _0x51dce1.dynCall_iifiii = function () {
    return (_0x97cc36 = _0x51dce1.dynCall_iifiii = _0x51dce1.asm.Oo).apply(null, arguments);
  };
  var _0x5a77e1 = _0x51dce1.dynCall_viiiiiifi = function () {
    return (_0x5a77e1 = _0x51dce1.dynCall_viiiiiifi = _0x51dce1.asm.Po).apply(null, arguments);
  };
  var _0xbcb377 = _0x51dce1.dynCall_ffffffi = function () {
    return (_0xbcb377 = _0x51dce1.dynCall_ffffffi = _0x51dce1.asm.Qo).apply(null, arguments);
  };
  var _0x2af614 = _0x51dce1.dynCall_vjiiii = function () {
    return (_0x2af614 = _0x51dce1.dynCall_vjiiii = _0x51dce1.asm.Ro).apply(null, arguments);
  };
  var _0xdda698 = _0x51dce1.dynCall_vijiiii = function () {
    return (_0xdda698 = _0x51dce1.dynCall_vijiiii = _0x51dce1.asm.So).apply(null, arguments);
  };
  var _0x26af5b = _0x51dce1.dynCall_iififii = function () {
    return (_0x26af5b = _0x51dce1.dynCall_iififii = _0x51dce1.asm.To).apply(null, arguments);
  };
  var _0x2fbb87 = _0x51dce1.dynCall_iiffifii = function () {
    return (_0x2fbb87 = _0x51dce1.dynCall_iiffifii = _0x51dce1.asm.Uo).apply(null, arguments);
  };
  var _0x213f05 = _0x51dce1.dynCall_iifiiii = function () {
    return (_0x213f05 = _0x51dce1.dynCall_iifiiii = _0x51dce1.asm.Vo).apply(null, arguments);
  };
  var _0xf603ac = _0x51dce1.dynCall_iiiiiiiiifi = function () {
    return (_0xf603ac = _0x51dce1.dynCall_iiiiiiiiifi = _0x51dce1.asm.Wo).apply(null, arguments);
  };
  var _0x9c9689 = _0x51dce1.dynCall_iiiiiifi = function () {
    return (_0x9c9689 = _0x51dce1.dynCall_iiiiiifi = _0x51dce1.asm.Xo).apply(null, arguments);
  };
  var _0x32793a = _0x51dce1.dynCall_ffi = function () {
    return (_0x32793a = _0x51dce1.dynCall_ffi = _0x51dce1.asm.Yo).apply(null, arguments);
  };
  var _0x924b17 = _0x51dce1.dynCall_ffffii = function () {
    return (_0x924b17 = _0x51dce1.dynCall_ffffii = _0x51dce1.asm.Zo).apply(null, arguments);
  };
  var _0x4052c = _0x51dce1.dynCall_viiiffi = function () {
    return (_0x4052c = _0x51dce1.dynCall_viiiffi = _0x51dce1.asm._o).apply(null, arguments);
  };
  var _0x37549d = _0x51dce1.dynCall_fffffii = function () {
    return (_0x37549d = _0x51dce1.dynCall_fffffii = _0x51dce1.asm.$o).apply(null, arguments);
  };
  var _0x5f39af = _0x51dce1.dynCall_viddi = function () {
    return (_0x5f39af = _0x51dce1.dynCall_viddi = _0x51dce1.asm.ap).apply(null, arguments);
  };
  var _0xd0b5c7 = _0x51dce1.dynCall_viiidii = function () {
    return (_0xd0b5c7 = _0x51dce1.dynCall_viiidii = _0x51dce1.asm.bp).apply(null, arguments);
  };
  var _0x3b71dd = _0x51dce1.dynCall_viiidiii = function () {
    return (_0x3b71dd = _0x51dce1.dynCall_viiidiii = _0x51dce1.asm.cp).apply(null, arguments);
  };
  var _0xc12ad = _0x51dce1.dynCall_iiiiiji = function () {
    return (_0xc12ad = _0x51dce1.dynCall_iiiiiji = _0x51dce1.asm.dp).apply(null, arguments);
  };
  var _0x5ee9d8 = _0x51dce1.dynCall_viidiiii = function () {
    return (_0x5ee9d8 = _0x51dce1.dynCall_viidiiii = _0x51dce1.asm.ep).apply(null, arguments);
  };
  var _0x126403 = _0x51dce1.dynCall_viidiiiii = function () {
    return (_0x126403 = _0x51dce1.dynCall_viidiiiii = _0x51dce1.asm.fp).apply(null, arguments);
  };
  var _0x75c360 = _0x51dce1.dynCall_iiiji = function () {
    return (_0x75c360 = _0x51dce1.dynCall_iiiji = _0x51dce1.asm.gp).apply(null, arguments);
  };
  var _0x4a5d1d = _0x51dce1.dynCall_viiidiiiiiii = function () {
    return (_0x4a5d1d = _0x51dce1.dynCall_viiidiiiiiii = _0x51dce1.asm.hp).apply(null, arguments);
  };
  var _0x1dd1e7 = _0x51dce1.dynCall_iiiidiii = function () {
    return (_0x1dd1e7 = _0x51dce1.dynCall_iiiidiii = _0x51dce1.asm.ip).apply(null, arguments);
  };
  var _0xf495f5 = _0x51dce1.dynCall_iiiiffi = function () {
    return (_0xf495f5 = _0x51dce1.dynCall_iiiiffi = _0x51dce1.asm.jp).apply(null, arguments);
  };
  var _0x55da32 = _0x51dce1.dynCall_vffi = function () {
    return (_0x55da32 = _0x51dce1.dynCall_vffi = _0x51dce1.asm.kp).apply(null, arguments);
  };
  var _0x9aa66e = _0x51dce1.dynCall_vdiii = function () {
    return (_0x9aa66e = _0x51dce1.dynCall_vdiii = _0x51dce1.asm.lp).apply(null, arguments);
  };
  var _0x2ab5e4 = _0x51dce1.dynCall_iiidiiii = function () {
    return (_0x2ab5e4 = _0x51dce1.dynCall_iiidiiii = _0x51dce1.asm.mp).apply(null, arguments);
  };
  var _0x128d0b = _0x51dce1.dynCall_viddii = function () {
    return (_0x128d0b = _0x51dce1.dynCall_viddii = _0x51dce1.asm.np).apply(null, arguments);
  };
  var _0x210fc3 = _0x51dce1.dynCall_viifiiii = function () {
    return (_0x210fc3 = _0x51dce1.dynCall_viifiiii = _0x51dce1.asm.op).apply(null, arguments);
  };
  var _0x18adeb = _0x51dce1.dynCall_viiddii = function () {
    return (_0x18adeb = _0x51dce1.dynCall_viiddii = _0x51dce1.asm.pp).apply(null, arguments);
  };
  var _0x1633e5 = _0x51dce1.dynCall_viiffii = function () {
    return (_0x1633e5 = _0x51dce1.dynCall_viiffii = _0x51dce1.asm.qp).apply(null, arguments);
  };
  var _0x22d6ce = _0x51dce1.dynCall_viifii = function () {
    return (_0x22d6ce = _0x51dce1.dynCall_viifii = _0x51dce1.asm.rp).apply(null, arguments);
  };
  var _0x5eac29 = _0x51dce1.dynCall_fifiii = function () {
    return (_0x5eac29 = _0x51dce1.dynCall_fifiii = _0x51dce1.asm.sp).apply(null, arguments);
  };
  var _0x1b349e = _0x51dce1.dynCall_fifffi = function () {
    return (_0x1b349e = _0x51dce1.dynCall_fifffi = _0x51dce1.asm.tp).apply(null, arguments);
  };
  var _0x43a9aa = _0x51dce1.dynCall_viifffffii = function () {
    return (_0x43a9aa = _0x51dce1.dynCall_viifffffii = _0x51dce1.asm.up).apply(null, arguments);
  };
  var _0x342acb = _0x51dce1.dynCall_vidddi = function () {
    return (_0x342acb = _0x51dce1.dynCall_vidddi = _0x51dce1.asm.vp).apply(null, arguments);
  };
  var _0x232d73 = _0x51dce1.dynCall_viiiiiffi = function () {
    return (_0x232d73 = _0x51dce1.dynCall_viiiiiffi = _0x51dce1.asm.wp).apply(null, arguments);
  };
  var _0x2b0011 = _0x51dce1.dynCall_viifiifi = function () {
    return (_0x2b0011 = _0x51dce1.dynCall_viifiifi = _0x51dce1.asm.xp).apply(null, arguments);
  };
  var _0x5b2608 = _0x51dce1.dynCall_iffiiii = function () {
    return (_0x5b2608 = _0x51dce1.dynCall_iffiiii = _0x51dce1.asm.yp).apply(null, arguments);
  };
  var _0x18cadf = _0x51dce1.dynCall_iiiijiii = function () {
    return (_0x18cadf = _0x51dce1.dynCall_iiiijiii = _0x51dce1.asm.zp).apply(null, arguments);
  };
  var _0x13306f = _0x51dce1.dynCall_viifffi = function () {
    return (_0x13306f = _0x51dce1.dynCall_viifffi = _0x51dce1.asm.Ap).apply(null, arguments);
  };
  var _0x349df8 = _0x51dce1.dynCall_viiffffi = function () {
    return (_0x349df8 = _0x51dce1.dynCall_viiffffi = _0x51dce1.asm.Bp).apply(null, arguments);
  };
  var _0x4c000d = _0x51dce1.dynCall_iiiiiijii = function () {
    return (_0x4c000d = _0x51dce1.dynCall_iiiiiijii = _0x51dce1.asm.Cp).apply(null, arguments);
  };
  var _0x57f3b1 = _0x51dce1.dynCall_ijii = function () {
    return (_0x57f3b1 = _0x51dce1.dynCall_ijii = _0x51dce1.asm.Dp).apply(null, arguments);
  };
  var _0x173f07 = _0x51dce1.dynCall_vdii = function () {
    return (_0x173f07 = _0x51dce1.dynCall_vdii = _0x51dce1.asm.Ep).apply(null, arguments);
  };
  var _0x39ce63 = _0x51dce1.dynCall_iiiiifiii = function () {
    return (_0x39ce63 = _0x51dce1.dynCall_iiiiifiii = _0x51dce1.asm.Fp).apply(null, arguments);
  };
  var _0x501367 = _0x51dce1.dynCall_viiiijii = function () {
    return (_0x501367 = _0x51dce1.dynCall_viiiijii = _0x51dce1.asm.Gp).apply(null, arguments);
  };
  var _0x3def7e = _0x51dce1.dynCall_vfi = function () {
    return (_0x3def7e = _0x51dce1.dynCall_vfi = _0x51dce1.asm.Hp).apply(null, arguments);
  };
  var _0x4b83e6 = _0x51dce1.dynCall_diiiii = function () {
    return (_0x4b83e6 = _0x51dce1.dynCall_diiiii = _0x51dce1.asm.Ip).apply(null, arguments);
  };
  var _0x244f66 = _0x51dce1.dynCall_fiifii = function () {
    return (_0x244f66 = _0x51dce1.dynCall_fiifii = _0x51dce1.asm.Jp).apply(null, arguments);
  };
  var _0x516499 = _0x51dce1.dynCall_viiiiiifiifiiii = function () {
    return (_0x516499 = _0x51dce1.dynCall_viiiiiifiifiiii = _0x51dce1.asm.Kp).apply(null, arguments);
  };
  var _0x53d343 = _0x51dce1.dynCall_iiiififi = function () {
    return (_0x53d343 = _0x51dce1.dynCall_iiiififi = _0x51dce1.asm.Lp).apply(null, arguments);
  };
  var _0xe211fd = _0x51dce1.dynCall_iiiffifiiii = function () {
    return (_0xe211fd = _0x51dce1.dynCall_iiiffifiiii = _0x51dce1.asm.Mp).apply(null, arguments);
  };
  var _0x4c0b92 = _0x51dce1.dynCall_iiifiifiii = function () {
    return (_0x4c0b92 = _0x51dce1.dynCall_iiifiifiii = _0x51dce1.asm.Np).apply(null, arguments);
  };
  var _0x4f60ba = _0x51dce1.dynCall_iiifiifiiiii = function () {
    return (_0x4f60ba = _0x51dce1.dynCall_iiifiifiiiii = _0x51dce1.asm.Op).apply(null, arguments);
  };
  var _0x229685 = _0x51dce1.dynCall_iifiiiiii = function () {
    return (_0x229685 = _0x51dce1.dynCall_iifiiiiii = _0x51dce1.asm.Pp).apply(null, arguments);
  };
  var _0x30ec27 = _0x51dce1.dynCall_iifiiiii = function () {
    return (_0x30ec27 = _0x51dce1.dynCall_iifiiiii = _0x51dce1.asm.Qp).apply(null, arguments);
  };
  var _0x2b99c2 = _0x51dce1.dynCall_iiffiiiii = function () {
    return (_0x2b99c2 = _0x51dce1.dynCall_iiffiiiii = _0x51dce1.asm.Rp).apply(null, arguments);
  };
  var _0xb3f7dc = _0x51dce1.dynCall_iiififi = function () {
    return (_0xb3f7dc = _0x51dce1.dynCall_iiififi = _0x51dce1.asm.Sp).apply(null, arguments);
  };
  var _0x4ae864 = _0x51dce1.dynCall_iifiifiii = function () {
    return (_0x4ae864 = _0x51dce1.dynCall_iifiifiii = _0x51dce1.asm.Tp).apply(null, arguments);
  };
  var _0x302aae = _0x51dce1.dynCall_iiiiifiiii = function () {
    return (_0x302aae = _0x51dce1.dynCall_iiiiifiiii = _0x51dce1.asm.Up).apply(null, arguments);
  };
  var _0x37b928 = _0x51dce1.dynCall_diidi = function () {
    return (_0x37b928 = _0x51dce1.dynCall_diidi = _0x51dce1.asm.Vp).apply(null, arguments);
  };
  var _0x47addb = _0x51dce1.dynCall_fiifdi = function () {
    return (_0x47addb = _0x51dce1.dynCall_fiifdi = _0x51dce1.asm.Wp).apply(null, arguments);
  };
  var _0x1350e7 = _0x51dce1.dynCall_viiiiiifddfiiii = function () {
    return (_0x1350e7 = _0x51dce1.dynCall_viiiiiifddfiiii = _0x51dce1.asm.Xp).apply(null, arguments);
  };
  var _0x48bd76 = _0x51dce1.dynCall_fiifji = function () {
    return (_0x48bd76 = _0x51dce1.dynCall_fiifji = _0x51dce1.asm.Yp).apply(null, arguments);
  };
  var _0x1aa2f1 = _0x51dce1.dynCall_viiiiiifjjfiiii = function () {
    return (_0x1aa2f1 = _0x51dce1.dynCall_viiiiiifjjfiiii = _0x51dce1.asm.Zp).apply(null, arguments);
  };
  var _0x4f5e12 = _0x51dce1.dynCall_viiiiiiffffiiii = function () {
    return (_0x4f5e12 = _0x51dce1.dynCall_viiiiiiffffiiii = _0x51dce1.asm._p).apply(null, arguments);
  };
  var _0x59a0c6 = _0x51dce1.dynCall_fiiffffi = function () {
    return (_0x59a0c6 = _0x51dce1.dynCall_fiiffffi = _0x51dce1.asm.$p).apply(null, arguments);
  };
  var _0x26df1f = _0x51dce1.dynCall_fffifffi = function () {
    return (_0x26df1f = _0x51dce1.dynCall_fffifffi = _0x51dce1.asm.aq).apply(null, arguments);
  };
  var _0x5da158 = _0x51dce1.dynCall_viiiffdi = function () {
    return (_0x5da158 = _0x51dce1.dynCall_viiiffdi = _0x51dce1.asm.bq).apply(null, arguments);
  };
  var _0x720d07 = _0x51dce1.dynCall_iiiiffii = function () {
    return (_0x720d07 = _0x51dce1.dynCall_iiiiffii = _0x51dce1.asm.cq).apply(null, arguments);
  };
  var _0x1cb168 = _0x51dce1.dynCall_iiifffi = function () {
    return (_0x1cb168 = _0x51dce1.dynCall_iiifffi = _0x51dce1.asm.dq).apply(null, arguments);
  };
  var _0x2bed65 = _0x51dce1.dynCall_vifffi = function () {
    return (_0x2bed65 = _0x51dce1.dynCall_vifffi = _0x51dce1.asm.eq).apply(null, arguments);
  };
  var _0x3cb77d = _0x51dce1.dynCall_iiiiifffii = function () {
    return (_0x3cb77d = _0x51dce1.dynCall_iiiiifffii = _0x51dce1.asm.fq).apply(null, arguments);
  };
  var _0x291424 = _0x51dce1.dynCall_viiifii = function () {
    return (_0x291424 = _0x51dce1.dynCall_viiifii = _0x51dce1.asm.gq).apply(null, arguments);
  };
  var _0x535b82 = _0x51dce1.dynCall_viiiifffii = function () {
    return (_0x535b82 = _0x51dce1.dynCall_viiiifffii = _0x51dce1.asm.hq).apply(null, arguments);
  };
  var _0x10bc0c = _0x51dce1.dynCall_vifffffi = function () {
    return (_0x10bc0c = _0x51dce1.dynCall_vifffffi = _0x51dce1.asm.iq).apply(null, arguments);
  };
  var _0x2fede3 = _0x51dce1.dynCall_iidiii = function () {
    return (_0x2fede3 = _0x51dce1.dynCall_iidiii = _0x51dce1.asm.jq).apply(null, arguments);
  };
  var _0x2d77e0 = _0x51dce1.dynCall_iiffffi = function () {
    return (_0x2d77e0 = _0x51dce1.dynCall_iiffffi = _0x51dce1.asm.kq).apply(null, arguments);
  };
  var _0x26a0f5 = _0x51dce1.dynCall_fffii = function () {
    return (_0x26a0f5 = _0x51dce1.dynCall_fffii = _0x51dce1.asm.lq).apply(null, arguments);
  };
  var _0x219d43 = _0x51dce1.dynCall_fifffii = function () {
    return (_0x219d43 = _0x51dce1.dynCall_fifffii = _0x51dce1.asm.mq).apply(null, arguments);
  };
  var _0x3c1c8e = _0x51dce1.dynCall_fiiifi = function () {
    return (_0x3c1c8e = _0x51dce1.dynCall_fiiifi = _0x51dce1.asm.nq).apply(null, arguments);
  };
  var _0x151089 = _0x51dce1.dynCall_iffii = function () {
    return (_0x151089 = _0x51dce1.dynCall_iffii = _0x51dce1.asm.oq).apply(null, arguments);
  };
  var _0x89848e = _0x51dce1.dynCall_vidddddi = function () {
    return (_0x89848e = _0x51dce1.dynCall_vidddddi = _0x51dce1.asm.pq).apply(null, arguments);
  };
  var _0x4cb2a2 = _0x51dce1.dynCall_vidii = function () {
    return (_0x4cb2a2 = _0x51dce1.dynCall_vidii = _0x51dce1.asm.qq).apply(null, arguments);
  };
  var _0x432b22 = _0x51dce1.dynCall_vidiiii = function () {
    return (_0x432b22 = _0x51dce1.dynCall_vidiiii = _0x51dce1.asm.rq).apply(null, arguments);
  };
  var _0xa37065 = _0x51dce1.dynCall_fifii = function () {
    return (_0xa37065 = _0x51dce1.dynCall_fifii = _0x51dce1.asm.sq).apply(null, arguments);
  };
  var _0x3ebdaf = _0x51dce1.dynCall_vfjfii = function () {
    return (_0x3ebdaf = _0x51dce1.dynCall_vfjfii = _0x51dce1.asm.tq).apply(null, arguments);
  };
  var _0x2912ac = _0x51dce1.dynCall_vfjjjfii = function () {
    return (_0x2912ac = _0x51dce1.dynCall_vfjjjfii = _0x51dce1.asm.uq).apply(null, arguments);
  };
  var _0x81cab = _0x51dce1.dynCall_vijji = function () {
    return (_0x81cab = _0x51dce1.dynCall_vijji = _0x51dce1.asm.vq).apply(null, arguments);
  };
  var _0x2c668c = _0x51dce1.dynCall_vijjjii = function () {
    return (_0x2c668c = _0x51dce1.dynCall_vijjjii = _0x51dce1.asm.wq).apply(null, arguments);
  };
  var _0x23d678 = _0x51dce1.dynCall_viiiijiiji = function () {
    return (_0x23d678 = _0x51dce1.dynCall_viiiijiiji = _0x51dce1.asm.xq).apply(null, arguments);
  };
  var _0x1f9c60 = _0x51dce1.dynCall_jiijiii = function () {
    return (_0x1f9c60 = _0x51dce1.dynCall_jiijiii = _0x51dce1.asm.yq).apply(null, arguments);
  };
  var _0x5cea4c = _0x51dce1.dynCall_viiiiji = function () {
    return (_0x5cea4c = _0x51dce1.dynCall_viiiiji = _0x51dce1.asm.zq).apply(null, arguments);
  };
  var _0x2ecf01 = _0x51dce1.dynCall_jijii = function () {
    return (_0x2ecf01 = _0x51dce1.dynCall_jijii = _0x51dce1.asm.Aq).apply(null, arguments);
  };
  var _0x472dd6 = _0x51dce1.dynCall_ijiiii = function () {
    return (_0x472dd6 = _0x51dce1.dynCall_ijiiii = _0x51dce1.asm.Bq).apply(null, arguments);
  };
  var _0x27620f = _0x51dce1.dynCall_viijjjji = function () {
    return (_0x27620f = _0x51dce1.dynCall_viijjjji = _0x51dce1.asm.Cq).apply(null, arguments);
  };
  var _0x3da3c3 = _0x51dce1.dynCall_ifiiii = function () {
    return (_0x3da3c3 = _0x51dce1.dynCall_ifiiii = _0x51dce1.asm.Dq).apply(null, arguments);
  };
  var _0x50ce4c = _0x51dce1.dynCall_idiiiii = function () {
    return (_0x50ce4c = _0x51dce1.dynCall_idiiiii = _0x51dce1.asm.Eq).apply(null, arguments);
  };
  var _0x34c645 = _0x51dce1.dynCall_idiiii = function () {
    return (_0x34c645 = _0x51dce1.dynCall_idiiii = _0x51dce1.asm.Fq).apply(null, arguments);
  };
  var _0x58783e = _0x51dce1.dynCall_idii = function () {
    return (_0x58783e = _0x51dce1.dynCall_idii = _0x51dce1.asm.Gq).apply(null, arguments);
  };
  var _0x875f03 = _0x51dce1.dynCall_iiijiiii = function () {
    return (_0x875f03 = _0x51dce1.dynCall_iiijiiii = _0x51dce1.asm.Hq).apply(null, arguments);
  };
  var _0x116dbc = _0x51dce1.dynCall_iddi = function () {
    return (_0x116dbc = _0x51dce1.dynCall_iddi = _0x51dce1.asm.Iq).apply(null, arguments);
  };
  var _0x428e25 = _0x51dce1.dynCall_viifiii = function () {
    return (_0x428e25 = _0x51dce1.dynCall_viifiii = _0x51dce1.asm.Jq).apply(null, arguments);
  };
  var _0x6f61ad = _0x51dce1.dynCall_viddfffi = function () {
    return (_0x6f61ad = _0x51dce1.dynCall_viddfffi = _0x51dce1.asm.Kq).apply(null, arguments);
  };
  var _0x457103 = _0x51dce1.dynCall_viidfffi = function () {
    return (_0x457103 = _0x51dce1.dynCall_viidfffi = _0x51dce1.asm.Lq).apply(null, arguments);
  };
  var _0x2ab218 = _0x51dce1.dynCall_vidifffi = function () {
    return (_0x2ab218 = _0x51dce1.dynCall_vidifffi = _0x51dce1.asm.Mq).apply(null, arguments);
  };
  var _0x12e1a8 = _0x51dce1.dynCall_viiifffi = function () {
    return (_0x12e1a8 = _0x51dce1.dynCall_viiifffi = _0x51dce1.asm.Nq).apply(null, arguments);
  };
  var _0x592a96 = _0x51dce1.dynCall_viiiiiiifi = function () {
    return (_0x592a96 = _0x51dce1.dynCall_viiiiiiifi = _0x51dce1.asm.Oq).apply(null, arguments);
  };
  var _0x2660ac = _0x51dce1.dynCall_viiiiffffffffii = function () {
    return (_0x2660ac = _0x51dce1.dynCall_viiiiffffffffii = _0x51dce1.asm.Pq).apply(null, arguments);
  };
  var _0x202880 = _0x51dce1.dynCall_ffii = function () {
    return (_0x202880 = _0x51dce1.dynCall_ffii = _0x51dce1.asm.Qq).apply(null, arguments);
  };
  var _0x3cc27b = _0x51dce1.dynCall_fiiiii = function () {
    return (_0x3cc27b = _0x51dce1.dynCall_fiiiii = _0x51dce1.asm.Rq).apply(null, arguments);
  };
  var _0x4a7a00 = _0x51dce1.dynCall_ddddi = function () {
    return (_0x4a7a00 = _0x51dce1.dynCall_ddddi = _0x51dce1.asm.Sq).apply(null, arguments);
  };
  var _0x391f8c = _0x51dce1.dynCall_ddi = function () {
    return (_0x391f8c = _0x51dce1.dynCall_ddi = _0x51dce1.asm.Tq).apply(null, arguments);
  };
  var _0x26ed52 = _0x51dce1.dynCall_viiijii = function () {
    return (_0x26ed52 = _0x51dce1.dynCall_viiijii = _0x51dce1.asm.Uq).apply(null, arguments);
  };
  var _0x343b81 = _0x51dce1.dynCall_viiijji = function () {
    return (_0x343b81 = _0x51dce1.dynCall_viiijji = _0x51dce1.asm.Vq).apply(null, arguments);
  };
  var _0x493590 = _0x51dce1.dynCall_viiijjjji = function () {
    return (_0x493590 = _0x51dce1.dynCall_viiijjjji = _0x51dce1.asm.Wq).apply(null, arguments);
  };
  var _0x1a5699 = _0x51dce1.dynCall_viiiiiji = function () {
    return (_0x1a5699 = _0x51dce1.dynCall_viiiiiji = _0x51dce1.asm.Xq).apply(null, arguments);
  };
  var _0x587b04 = _0x51dce1.dynCall_ijjiiii = function () {
    return (_0x587b04 = _0x51dce1.dynCall_ijjiiii = _0x51dce1.asm.Yq).apply(null, arguments);
  };
  var _0x1f602f = _0x51dce1.dynCall_vdiiiii = function () {
    return (_0x1f602f = _0x51dce1.dynCall_vdiiiii = _0x51dce1.asm.Zq).apply(null, arguments);
  };
  var _0x2047f0 = _0x51dce1.dynCall_diiji = function () {
    return (_0x2047f0 = _0x51dce1.dynCall_diiji = _0x51dce1.asm._q).apply(null, arguments);
  };
  var _0xde498 = _0x51dce1.dynCall_vjiiiiiiii = function () {
    return (_0xde498 = _0x51dce1.dynCall_vjiiiiiiii = _0x51dce1.asm.$q).apply(null, arguments);
  };
  var _0x3cc5d6 = _0x51dce1.dynCall_vjiiiiiii = function () {
    return (_0x3cc5d6 = _0x51dce1.dynCall_vjiiiiiii = _0x51dce1.asm.ar).apply(null, arguments);
  };
  var _0x4a9f5b = _0x51dce1.dynCall_iidii = function () {
    return (_0x4a9f5b = _0x51dce1.dynCall_iidii = _0x51dce1.asm.br).apply(null, arguments);
  };
  var _0x59c786 = _0x51dce1.dynCall_diji = function () {
    return (_0x59c786 = _0x51dce1.dynCall_diji = _0x51dce1.asm.cr).apply(null, arguments);
  };
  var _0x4e6832 = _0x51dce1.dynCall_fidi = function () {
    return (_0x4e6832 = _0x51dce1.dynCall_fidi = _0x51dce1.asm.dr).apply(null, arguments);
  };
  var _0x560a59 = _0x51dce1.dynCall_di = function () {
    return (_0x560a59 = _0x51dce1.dynCall_di = _0x51dce1.asm.er).apply(null, arguments);
  };
  var _0xc73f7a = _0x51dce1.dynCall_iffffi = function () {
    return (_0xc73f7a = _0x51dce1.dynCall_iffffi = _0x51dce1.asm.fr).apply(null, arguments);
  };
  var _0xd1cd5e = _0x51dce1.dynCall_vfffi = function () {
    return (_0xd1cd5e = _0x51dce1.dynCall_vfffi = _0x51dce1.asm.gr).apply(null, arguments);
  };
  var _0xa0b693 = _0x51dce1.dynCall_vffffi = function () {
    return (_0xa0b693 = _0x51dce1.dynCall_vffffi = _0x51dce1.asm.hr).apply(null, arguments);
  };
  var _0xf140f2 = _0x51dce1.dynCall_viiiiffi = function () {
    return (_0xf140f2 = _0x51dce1.dynCall_viiiiffi = _0x51dce1.asm.ir).apply(null, arguments);
  };
  var _0x21679c = _0x51dce1.dynCall_viiiffii = function () {
    return (_0x21679c = _0x51dce1.dynCall_viiiffii = _0x51dce1.asm.jr).apply(null, arguments);
  };
  var _0x173d16 = _0x51dce1.dynCall_vfiii = function () {
    return (_0x173d16 = _0x51dce1.dynCall_vfiii = _0x51dce1.asm.kr).apply(null, arguments);
  };
  var _0x1ae243 = _0x51dce1.dynCall_vfii = function () {
    return (_0x1ae243 = _0x51dce1.dynCall_vfii = _0x51dce1.asm.lr).apply(null, arguments);
  };
  var _0x27a086 = _0x51dce1.dynCall_iiiifiiiii = function () {
    return (_0x27a086 = _0x51dce1.dynCall_iiiifiiiii = _0x51dce1.asm.mr).apply(null, arguments);
  };
  var _0x113e0e = _0x51dce1.dynCall_iiiifiiii = function () {
    return (_0x113e0e = _0x51dce1.dynCall_iiiifiiii = _0x51dce1.asm.nr).apply(null, arguments);
  };
  var _0x59ea36 = _0x51dce1.dynCall_vijjii = function () {
    return (_0x59ea36 = _0x51dce1.dynCall_vijjii = _0x51dce1.asm.or).apply(null, arguments);
  };
  var _0x300b7a = _0x51dce1.dynCall_viiiififfi = function () {
    return (_0x300b7a = _0x51dce1.dynCall_viiiififfi = _0x51dce1.asm.pr).apply(null, arguments);
  };
  var _0x5d0a2c = _0x51dce1.dynCall_viiiifiifi = function () {
    return (_0x5d0a2c = _0x51dce1.dynCall_viiiifiifi = _0x51dce1.asm.qr).apply(null, arguments);
  };
  var _0x10372e = _0x51dce1.dynCall_viiiifiiii = function () {
    return (_0x10372e = _0x51dce1.dynCall_viiiifiiii = _0x51dce1.asm.rr).apply(null, arguments);
  };
  var _0x44b869 = _0x51dce1.dynCall_viiiifiiiii = function () {
    return (_0x44b869 = _0x51dce1.dynCall_viiiifiiiii = _0x51dce1.asm.sr).apply(null, arguments);
  };
  var _0x4891bf = _0x51dce1.dynCall_viiiifiiiiiiii = function () {
    return (_0x4891bf = _0x51dce1.dynCall_viiiifiiiiiiii = _0x51dce1.asm.tr).apply(null, arguments);
  };
  var _0x2b5660 = _0x51dce1.dynCall_fifffiii = function () {
    return (_0x2b5660 = _0x51dce1.dynCall_fifffiii = _0x51dce1.asm.ur).apply(null, arguments);
  };
  var _0x5636f1 = _0x51dce1.dynCall_fiffffiiiiii = function () {
    return (_0x5636f1 = _0x51dce1.dynCall_fiffffiiiiii = _0x51dce1.asm.vr).apply(null, arguments);
  };
  var _0x161384 = _0x51dce1.dynCall_fiffffii = function () {
    return (_0x161384 = _0x51dce1.dynCall_fiffffii = _0x51dce1.asm.wr).apply(null, arguments);
  };
  var _0x3ba8b3 = _0x51dce1.dynCall_viiiiiffii = function () {
    return (_0x3ba8b3 = _0x51dce1.dynCall_viiiiiffii = _0x51dce1.asm.xr).apply(null, arguments);
  };
  var _0x7197fa = _0x51dce1.dynCall_ffffiiii = function () {
    return (_0x7197fa = _0x51dce1.dynCall_ffffiiii = _0x51dce1.asm.yr).apply(null, arguments);
  };
  var _0x2a9df3 = _0x51dce1.dynCall_viffffiii = function () {
    return (_0x2a9df3 = _0x51dce1.dynCall_viffffiii = _0x51dce1.asm.zr).apply(null, arguments);
  };
  var _0x402be3 = _0x51dce1.dynCall_viffffii = function () {
    return (_0x402be3 = _0x51dce1.dynCall_viffffii = _0x51dce1.asm.Ar).apply(null, arguments);
  };
  var _0x3f57b0 = _0x51dce1.dynCall_viiffffiiiiii = function () {
    return (_0x3f57b0 = _0x51dce1.dynCall_viiffffiiiiii = _0x51dce1.asm.Br).apply(null, arguments);
  };
  var _0x4f8589 = _0x51dce1.dynCall_viiififi = function () {
    return (_0x4f8589 = _0x51dce1.dynCall_viiififi = _0x51dce1.asm.Cr).apply(null, arguments);
  };
  var _0x590598 = _0x51dce1.dynCall_viiififfi = function () {
    return (_0x590598 = _0x51dce1.dynCall_viiififfi = _0x51dce1.asm.Dr).apply(null, arguments);
  };
  var _0x5d7beb = _0x51dce1.dynCall_iiiiifi = function () {
    return (_0x5d7beb = _0x51dce1.dynCall_iiiiifi = _0x51dce1.asm.Er).apply(null, arguments);
  };
  var _0x5c9741 = _0x51dce1.dynCall_iifiifii = function () {
    return (_0x5c9741 = _0x51dce1.dynCall_iifiifii = _0x51dce1.asm.Fr).apply(null, arguments);
  };
  var _0x250cfb = _0x51dce1.dynCall_iiffiii = function () {
    return (_0x250cfb = _0x51dce1.dynCall_iiffiii = _0x51dce1.asm.Gr).apply(null, arguments);
  };
  var _0x237a11 = _0x51dce1.dynCall_iiififiii = function () {
    return (_0x237a11 = _0x51dce1.dynCall_iiififiii = _0x51dce1.asm.Hr).apply(null, arguments);
  };
  var _0x502c38 = _0x51dce1.dynCall_iififiii = function () {
    return (_0x502c38 = _0x51dce1.dynCall_iififiii = _0x51dce1.asm.Ir).apply(null, arguments);
  };
  var _0x6b2c1b = _0x51dce1.dynCall_iiififiiii = function () {
    return (_0x6b2c1b = _0x51dce1.dynCall_iiififiiii = _0x51dce1.asm.Jr).apply(null, arguments);
  };
  var _0x256f4c = _0x51dce1.dynCall_viffiiii = function () {
    return (_0x256f4c = _0x51dce1.dynCall_viffiiii = _0x51dce1.asm.Kr).apply(null, arguments);
  };
  var _0x333b1e = _0x51dce1.dynCall_viiiiffffiiii = function () {
    return (_0x333b1e = _0x51dce1.dynCall_viiiiffffiiii = _0x51dce1.asm.Lr).apply(null, arguments);
  };
  var _0x5e4358 = _0x51dce1.dynCall_viifiiiii = function () {
    return (_0x5e4358 = _0x51dce1.dynCall_viifiiiii = _0x51dce1.asm.Mr).apply(null, arguments);
  };
  var _0x8bba03 = _0x51dce1.dynCall_iiiiiiffiiiiiiiiiffffiiii = function () {
    return (_0x8bba03 = _0x51dce1.dynCall_iiiiiiffiiiiiiiiiffffiiii = _0x51dce1.asm.Nr).apply(null, arguments);
  };
  var _0x222f94 = _0x51dce1.dynCall_iiiiiiffiiiiiiiiiiiiiii = function () {
    return (_0x222f94 = _0x51dce1.dynCall_iiiiiiffiiiiiiiiiiiiiii = _0x51dce1.asm.Or).apply(null, arguments);
  };
  var _0x506a75 = _0x51dce1.dynCall_viififii = function () {
    return (_0x506a75 = _0x51dce1.dynCall_viififii = _0x51dce1.asm.Pr).apply(null, arguments);
  };
  var _0x1c2d5f = _0x51dce1.dynCall_viffffffi = function () {
    return (_0x1c2d5f = _0x51dce1.dynCall_viffffffi = _0x51dce1.asm.Qr).apply(null, arguments);
  };
  var _0x848b9e = _0x51dce1.dynCall_iiiffiiii = function () {
    return (_0x848b9e = _0x51dce1.dynCall_iiiffiiii = _0x51dce1.asm.Rr).apply(null, arguments);
  };
  var _0x573a99 = _0x51dce1.dynCall_iiiiffiiii = function () {
    return (_0x573a99 = _0x51dce1.dynCall_iiiiffiiii = _0x51dce1.asm.Sr).apply(null, arguments);
  };
  var _0x330117 = _0x51dce1.dynCall_vjii = function () {
    return (_0x330117 = _0x51dce1.dynCall_vjii = _0x51dce1.asm.Tr).apply(null, arguments);
  };
  var _0x4308e4 = _0x51dce1.dynCall_fffffffi = function () {
    return (_0x4308e4 = _0x51dce1.dynCall_fffffffi = _0x51dce1.asm.Ur).apply(null, arguments);
  };
  var _0x4aee0a = _0x51dce1.dynCall_viffifi = function () {
    return (_0x4aee0a = _0x51dce1.dynCall_viffifi = _0x51dce1.asm.Vr).apply(null, arguments);
  };
  var _0xffac45 = _0x51dce1.dynCall_viiffifi = function () {
    return (_0xffac45 = _0x51dce1.dynCall_viiffifi = _0x51dce1.asm.Wr).apply(null, arguments);
  };
  var _0x41f064 = _0x51dce1.dynCall_ifffi = function () {
    return (_0x41f064 = _0x51dce1.dynCall_ifffi = _0x51dce1.asm.Xr).apply(null, arguments);
  };
  var _0xf76ae8 = _0x51dce1.dynCall_fiiiffi = function () {
    return (_0xf76ae8 = _0x51dce1.dynCall_fiiiffi = _0x51dce1.asm.Yr).apply(null, arguments);
  };
  var _0x1eb116 = _0x51dce1.dynCall_viiififiii = function () {
    return (_0x1eb116 = _0x51dce1.dynCall_viiififiii = _0x51dce1.asm.Zr).apply(null, arguments);
  };
  var _0x5f37e7 = _0x51dce1.dynCall_viiffiiiiiiiii = function () {
    return (_0x5f37e7 = _0x51dce1.dynCall_viiffiiiiiiiii = _0x51dce1.asm._r).apply(null, arguments);
  };
  var _0x266569 = _0x51dce1.dynCall_viiiiiffiii = function () {
    return (_0x266569 = _0x51dce1.dynCall_viiiiiffiii = _0x51dce1.asm.$r).apply(null, arguments);
  };
  var _0x1cd82b = _0x51dce1.dynCall_viiffiii = function () {
    return (_0x1cd82b = _0x51dce1.dynCall_viiffiii = _0x51dce1.asm.as).apply(null, arguments);
  };
  var _0x50c09a = _0x51dce1.dynCall_viiffiiiiiii = function () {
    return (_0x50c09a = _0x51dce1.dynCall_viiffiiiiiii = _0x51dce1.asm.bs).apply(null, arguments);
  };
  var _0x178538 = _0x51dce1.dynCall_fffffffffi = function () {
    return (_0x178538 = _0x51dce1.dynCall_fffffffffi = _0x51dce1.asm.cs).apply(null, arguments);
  };
  var _0x2ba14c = _0x51dce1.dynCall_vifiiiiii = function () {
    return (_0x2ba14c = _0x51dce1.dynCall_vifiiiiii = _0x51dce1.asm.ds).apply(null, arguments);
  };
  var _0x3559d2 = _0x51dce1.dynCall_vifiiiii = function () {
    return (_0x3559d2 = _0x51dce1.dynCall_vifiiiii = _0x51dce1.asm.es).apply(null, arguments);
  };
  var _0x517b95 = _0x51dce1.dynCall_viifiiiiiii = function () {
    return (_0x517b95 = _0x51dce1.dynCall_viifiiiiiii = _0x51dce1.asm.fs).apply(null, arguments);
  };
  var _0x166bd4 = _0x51dce1.dynCall_viiififfiiiiiii = function () {
    return (_0x166bd4 = _0x51dce1.dynCall_viiififfiiiiiii = _0x51dce1.asm.gs).apply(null, arguments);
  };
  var _0xa86da2 = _0x51dce1.dynCall_viiffiifiiiiiii = function () {
    return (_0xa86da2 = _0x51dce1.dynCall_viiffiifiiiiiii = _0x51dce1.asm.hs).apply(null, arguments);
  };
  var _0x33d5d1 = _0x51dce1.dynCall_viifiiiiii = function () {
    return (_0x33d5d1 = _0x51dce1.dynCall_viifiiiiii = _0x51dce1.asm.is).apply(null, arguments);
  };
  var _0x95a96e = _0x51dce1.dynCall_viiifiiiiii = function () {
    return (_0x95a96e = _0x51dce1.dynCall_viiifiiiiii = _0x51dce1.asm.js).apply(null, arguments);
  };
  var _0x14e394 = _0x51dce1.dynCall_viiiifiiiiii = function () {
    return (_0x14e394 = _0x51dce1.dynCall_viiiifiiiiii = _0x51dce1.asm.ks).apply(null, arguments);
  };
  var _0x583a08 = _0x51dce1.dynCall_viififiiiiii = function () {
    return (_0x583a08 = _0x51dce1.dynCall_viififiiiiii = _0x51dce1.asm.ls).apply(null, arguments);
  };
  var _0x4f987a = _0x51dce1.dynCall_viiiffiifiiiiiii = function () {
    return (_0x4f987a = _0x51dce1.dynCall_viiiffiifiiiiiii = _0x51dce1.asm.ms).apply(null, arguments);
  };
  var _0x238d9e = _0x51dce1.dynCall_viiiiiifiiiiii = function () {
    return (_0x238d9e = _0x51dce1.dynCall_viiiiiifiiiiii = _0x51dce1.asm.ns).apply(null, arguments);
  };
  var _0x1240cc = _0x51dce1.dynCall_vififiii = function () {
    return (_0x1240cc = _0x51dce1.dynCall_vififiii = _0x51dce1.asm.os).apply(null, arguments);
  };
  var _0x3463c0 = _0x51dce1.dynCall_viiiiiiiijiiii = function () {
    return (_0x3463c0 = _0x51dce1.dynCall_viiiiiiiijiiii = _0x51dce1.asm.ps).apply(null, arguments);
  };
  var _0x59c738 = _0x51dce1.dynCall_vifffii = function () {
    return (_0x59c738 = _0x51dce1.dynCall_vifffii = _0x51dce1.asm.qs).apply(null, arguments);
  };
  var _0xe5cc21 = _0x51dce1.dynCall_iifffi = function () {
    return (_0xe5cc21 = _0x51dce1.dynCall_iifffi = _0x51dce1.asm.rs).apply(null, arguments);
  };
  var _0x2ede35 = _0x51dce1.dynCall_viijjii = function () {
    return (_0x2ede35 = _0x51dce1.dynCall_viijjii = _0x51dce1.asm.ss).apply(null, arguments);
  };
  var _0x229a38 = _0x51dce1.dynCall_ijiiiiiiiii = function () {
    return (_0x229a38 = _0x51dce1.dynCall_ijiiiiiiiii = _0x51dce1.asm.ts).apply(null, arguments);
  };
  var _0x1734fb = _0x51dce1.dynCall_viiijiii = function () {
    return (_0x1734fb = _0x51dce1.dynCall_viiijiii = _0x51dce1.asm.us).apply(null, arguments);
  };
  var _0xc637a2 = _0x51dce1.dynCall_ijjiii = function () {
    return (_0xc637a2 = _0x51dce1.dynCall_ijjiii = _0x51dce1.asm.vs).apply(null, arguments);
  };
  var _0x35c41d = _0x51dce1.dynCall_jiidi = function () {
    return (_0x35c41d = _0x51dce1.dynCall_jiidi = _0x51dce1.asm.ws).apply(null, arguments);
  };
  var _0x3777d1 = _0x51dce1.dynCall_viiiidijii = function () {
    return (_0x3777d1 = _0x51dce1.dynCall_viiiidijii = _0x51dce1.asm.xs).apply(null, arguments);
  };
  var _0x164d79 = _0x51dce1.dynCall_viiiidiii = function () {
    return (_0x164d79 = _0x51dce1.dynCall_viiiidiii = _0x51dce1.asm.ys).apply(null, arguments);
  };
  var _0x59e7dc = _0x51dce1.dynCall_iiidiii = function () {
    return (_0x59e7dc = _0x51dce1.dynCall_iiidiii = _0x51dce1.asm.zs).apply(null, arguments);
  };
  var _0x192edd = _0x51dce1.dynCall_iiidii = function () {
    return (_0x192edd = _0x51dce1.dynCall_iiidii = _0x51dce1.asm.As).apply(null, arguments);
  };
  var _0x3f9af6 = _0x51dce1.dynCall_vidiii = function () {
    return (_0x3f9af6 = _0x51dce1.dynCall_vidiii = _0x51dce1.asm.Bs).apply(null, arguments);
  };
  var _0x3dba8b = _0x51dce1.dynCall_viiiidii = function () {
    return (_0x3dba8b = _0x51dce1.dynCall_viiiidii = _0x51dce1.asm.Cs).apply(null, arguments);
  };
  var _0x41380e = _0x51dce1.dynCall_viijiiiii = function () {
    return (_0x41380e = _0x51dce1.dynCall_viijiiiii = _0x51dce1.asm.Ds).apply(null, arguments);
  };
  var _0x425bf8 = _0x51dce1.dynCall_viifffffi = function () {
    return (_0x425bf8 = _0x51dce1.dynCall_viifffffi = _0x51dce1.asm.Es).apply(null, arguments);
  };
  var _0x27b799 = _0x51dce1.dynCall_viiffffffi = function () {
    return (_0x27b799 = _0x51dce1.dynCall_viiffffffi = _0x51dce1.asm.Fs).apply(null, arguments);
  };
  var _0x3a2429 = _0x51dce1.dynCall_viifffffffi = function () {
    return (_0x3a2429 = _0x51dce1.dynCall_viifffffffi = _0x51dce1.asm.Gs).apply(null, arguments);
  };
  var _0x1294b3 = _0x51dce1.dynCall_viiffffffffi = function () {
    return (_0x1294b3 = _0x51dce1.dynCall_viiffffffffi = _0x51dce1.asm.Hs).apply(null, arguments);
  };
  var _0x1d4343 = _0x51dce1.dynCall_viiffffffffiii = function () {
    return (_0x1d4343 = _0x51dce1.dynCall_viiffffffffiii = _0x51dce1.asm.Is).apply(null, arguments);
  };
  var _0x1d1c73 = _0x51dce1.dynCall_viiiiffffii = function () {
    return (_0x1d1c73 = _0x51dce1.dynCall_viiiiffffii = _0x51dce1.asm.Js).apply(null, arguments);
  };
  var _0x46458e = _0x51dce1.dynCall_fiiiiii = function () {
    return (_0x46458e = _0x51dce1.dynCall_fiiiiii = _0x51dce1.asm.Ks).apply(null, arguments);
  };
  var _0x537d53 = _0x51dce1.dynCall_jjiiii = function () {
    return (_0x537d53 = _0x51dce1.dynCall_jjiiii = _0x51dce1.asm.Ls).apply(null, arguments);
  };
  var _0xcf4eb1 = _0x51dce1.dynCall_vijiiiiiii = function () {
    return (_0xcf4eb1 = _0x51dce1.dynCall_vijiiiiiii = _0x51dce1.asm.Ms).apply(null, arguments);
  };
  var _0x499d9c = _0x51dce1.dynCall_vijiiiiiiii = function () {
    return (_0x499d9c = _0x51dce1.dynCall_vijiiiiiiii = _0x51dce1.asm.Ns).apply(null, arguments);
  };
  var _0x20c61e = _0x51dce1.dynCall_jjiiiii = function () {
    return (_0x20c61e = _0x51dce1.dynCall_jjiiiii = _0x51dce1.asm.Os).apply(null, arguments);
  };
  var _0x3539df = _0x51dce1.dynCall_jijjji = function () {
    return (_0x3539df = _0x51dce1.dynCall_jijjji = _0x51dce1.asm.Ps).apply(null, arguments);
  };
  var _0x33abd0 = _0x51dce1.dynCall_jijjjii = function () {
    return (_0x33abd0 = _0x51dce1.dynCall_jijjjii = _0x51dce1.asm.Qs).apply(null, arguments);
  };
  var _0x7cb22b = _0x51dce1.dynCall_jjiii = function () {
    return (_0x7cb22b = _0x51dce1.dynCall_jjiii = _0x51dce1.asm.Rs).apply(null, arguments);
  };
  var _0x4bccf8 = _0x51dce1.dynCall_ijijiiiii = function () {
    return (_0x4bccf8 = _0x51dce1.dynCall_ijijiiiii = _0x51dce1.asm.Ss).apply(null, arguments);
  };
  var _0x21bad7 = _0x51dce1.dynCall_ijjjiii = function () {
    return (_0x21bad7 = _0x51dce1.dynCall_ijjjiii = _0x51dce1.asm.Ts).apply(null, arguments);
  };
  var _0x10d934 = _0x51dce1.dynCall_vijjjiijii = function () {
    return (_0x10d934 = _0x51dce1.dynCall_vijjjiijii = _0x51dce1.asm.Us).apply(null, arguments);
  };
  var _0xbc03ad = _0x51dce1.dynCall_ijjjiijii = function () {
    return (_0xbc03ad = _0x51dce1.dynCall_ijjjiijii = _0x51dce1.asm.Vs).apply(null, arguments);
  };
  var _0x55372d = _0x51dce1.dynCall_vijiiiiii = function () {
    return (_0x55372d = _0x51dce1.dynCall_vijiiiiii = _0x51dce1.asm.Ws).apply(null, arguments);
  };
  var _0x5cd36f = _0x51dce1.dynCall_jfi = function () {
    return (_0x5cd36f = _0x51dce1.dynCall_jfi = _0x51dce1.asm.Xs).apply(null, arguments);
  };
  var _0x42b409 = _0x51dce1.dynCall_fji = function () {
    return (_0x42b409 = _0x51dce1.dynCall_fji = _0x51dce1.asm.Ys).apply(null, arguments);
  };
  var _0x2f9217 = _0x51dce1.dynCall_fdi = function () {
    return (_0x2f9217 = _0x51dce1.dynCall_fdi = _0x51dce1.asm.Zs).apply(null, arguments);
  };
  var _0x34f4a4 = _0x51dce1.dynCall_dfi = function () {
    return (_0x34f4a4 = _0x51dce1.dynCall_dfi = _0x51dce1.asm._s).apply(null, arguments);
  };
  var _0x222b82 = _0x51dce1.dynCall_jidii = function () {
    return (_0x222b82 = _0x51dce1.dynCall_jidii = _0x51dce1.asm.$s).apply(null, arguments);
  };
  var _0x144400 = _0x51dce1.dynCall_viiiiiiiji = function () {
    return (_0x144400 = _0x51dce1.dynCall_viiiiiiiji = _0x51dce1.asm.at).apply(null, arguments);
  };
  var _0x3fe5c9 = _0x51dce1.dynCall_viiiiiiiiji = function () {
    return (_0x3fe5c9 = _0x51dce1.dynCall_viiiiiiiiji = _0x51dce1.asm.bt).apply(null, arguments);
  };
  var _0xea8631 = _0x51dce1.dynCall_viiiiiiiiiji = function () {
    return (_0xea8631 = _0x51dce1.dynCall_viiiiiiiiiji = _0x51dce1.asm.ct).apply(null, arguments);
  };
  var _0x5c63ca = _0x51dce1.dynCall_ijiijii = function () {
    return (_0x5c63ca = _0x51dce1.dynCall_ijiijii = _0x51dce1.asm.dt).apply(null, arguments);
  };
  var _0x43a4b7 = _0x51dce1.dynCall_vjjiiiii = function () {
    return (_0x43a4b7 = _0x51dce1.dynCall_vjjiiiii = _0x51dce1.asm.et).apply(null, arguments);
  };
  var _0x1a20ca = _0x51dce1.dynCall_vjjii = function () {
    return (_0x1a20ca = _0x51dce1.dynCall_vjjii = _0x51dce1.asm.ft).apply(null, arguments);
  };
  var _0x3d2261 = _0x51dce1.dynCall_ijiiji = function () {
    return (_0x3d2261 = _0x51dce1.dynCall_ijiiji = _0x51dce1.asm.gt).apply(null, arguments);
  };
  var _0x2e6417 = _0x51dce1.dynCall_ijiiiii = function () {
    return (_0x2e6417 = _0x51dce1.dynCall_ijiiiii = _0x51dce1.asm.ht).apply(null, arguments);
  };
  var _0x24efed = _0x51dce1.dynCall_ijiiiiji = function () {
    return (_0x24efed = _0x51dce1.dynCall_ijiiiiji = _0x51dce1.asm.it).apply(null, arguments);
  };
  var _0x257ed3 = _0x51dce1.dynCall_jiiiiii = function () {
    return (_0x257ed3 = _0x51dce1.dynCall_jiiiiii = _0x51dce1.asm.jt).apply(null, arguments);
  };
  var _0x315150 = _0x51dce1.dynCall_ddii = function () {
    return (_0x315150 = _0x51dce1.dynCall_ddii = _0x51dce1.asm.kt).apply(null, arguments);
  };
  var _0x257eb0 = _0x51dce1.dynCall_idiii = function () {
    return (_0x257eb0 = _0x51dce1.dynCall_idiii = _0x51dce1.asm.lt).apply(null, arguments);
  };
  var _0x39cd60 = _0x51dce1.dynCall_ifiii = function () {
    return (_0x39cd60 = _0x51dce1.dynCall_ifiii = _0x51dce1.asm.mt).apply(null, arguments);
  };
  var _0x3c94f0 = _0x51dce1.dynCall_ifiiiii = function () {
    return (_0x3c94f0 = _0x51dce1.dynCall_ifiiiii = _0x51dce1.asm.nt).apply(null, arguments);
  };
  var _0x392c6b = _0x51dce1.dynCall_jjjii = function () {
    return (_0x392c6b = _0x51dce1.dynCall_jjjii = _0x51dce1.asm.ot).apply(null, arguments);
  };
  var _0x34a3b8 = _0x51dce1.dynCall_jdii = function () {
    return (_0x34a3b8 = _0x51dce1.dynCall_jdii = _0x51dce1.asm.pt).apply(null, arguments);
  };
  var _0x5adb39 = _0x51dce1.dynCall_vijijji = function () {
    return (_0x5adb39 = _0x51dce1.dynCall_vijijji = _0x51dce1.asm.qt).apply(null, arguments);
  };
  var _0x2b8b70 = _0x51dce1.dynCall_iijjji = function () {
    return (_0x2b8b70 = _0x51dce1.dynCall_iijjji = _0x51dce1.asm.rt).apply(null, arguments);
  };
  var _0x4bcfb1 = _0x51dce1.dynCall_viijjji = function () {
    return (_0x4bcfb1 = _0x51dce1.dynCall_viijjji = _0x51dce1.asm.st).apply(null, arguments);
  };
  var _0x2c4570 = _0x51dce1.dynCall_iiiijii = function () {
    return (_0x2c4570 = _0x51dce1.dynCall_iiiijii = _0x51dce1.asm.tt).apply(null, arguments);
  };
  var _0x24a9f9 = _0x51dce1.dynCall_jijji = function () {
    return (_0x24a9f9 = _0x51dce1.dynCall_jijji = _0x51dce1.asm.ut).apply(null, arguments);
  };
  var _0x374b5d = _0x51dce1.dynCall_diddi = function () {
    return (_0x374b5d = _0x51dce1.dynCall_diddi = _0x51dce1.asm.vt).apply(null, arguments);
  };
  var _0x59efce = _0x51dce1.dynCall_didi = function () {
    return (_0x59efce = _0x51dce1.dynCall_didi = _0x51dce1.asm.wt).apply(null, arguments);
  };
  var _0x11b59a = _0x51dce1.dynCall_iijjii = function () {
    return (_0x11b59a = _0x51dce1.dynCall_iijjii = _0x51dce1.asm.xt).apply(null, arguments);
  };
  var _0x515ef5 = _0x51dce1.dynCall_jjjji = function () {
    return (_0x515ef5 = _0x51dce1.dynCall_jjjji = _0x51dce1.asm.yt).apply(null, arguments);
  };
  var _0x4a39a0 = _0x51dce1.dynCall_viijijii = function () {
    return (_0x4a39a0 = _0x51dce1.dynCall_viijijii = _0x51dce1.asm.zt).apply(null, arguments);
  };
  var _0x3525f1 = _0x51dce1.dynCall_viijijiii = function () {
    return (_0x3525f1 = _0x51dce1.dynCall_viijijiii = _0x51dce1.asm.At).apply(null, arguments);
  };
  var _0x27fcb4 = _0x51dce1.dynCall_vijiji = function () {
    return (_0x27fcb4 = _0x51dce1.dynCall_vijiji = _0x51dce1.asm.Bt).apply(null, arguments);
  };
  var _0x355caa = _0x51dce1.dynCall_viijiijiii = function () {
    return (_0x355caa = _0x51dce1.dynCall_viijiijiii = _0x51dce1.asm.Ct).apply(null, arguments);
  };
  var _0x285557 = _0x51dce1.dynCall_viiiijiiii = function () {
    return (_0x285557 = _0x51dce1.dynCall_viiiijiiii = _0x51dce1.asm.Dt).apply(null, arguments);
  };
  var _0x411cea = _0x51dce1.dynCall_jiiiiiiiii = function () {
    return (_0x411cea = _0x51dce1.dynCall_jiiiiiiiii = _0x51dce1.asm.Et).apply(null, arguments);
  };
  var _0x52d24d = _0x51dce1.dynCall_iiiiijii = function () {
    return (_0x52d24d = _0x51dce1.dynCall_iiiiijii = _0x51dce1.asm.Ft).apply(null, arguments);
  };
  var _0x2f620f = _0x51dce1.dynCall_iiiidii = function () {
    return (_0x2f620f = _0x51dce1.dynCall_iiiidii = _0x51dce1.asm.Gt).apply(null, arguments);
  };
  var _0x577efe = _0x51dce1.dynCall_viiddiiii = function () {
    return (_0x577efe = _0x51dce1.dynCall_viiddiiii = _0x51dce1.asm.Ht).apply(null, arguments);
  };
  var _0x38f435 = _0x51dce1.dynCall_viiffiiii = function () {
    return (_0x38f435 = _0x51dce1.dynCall_viiffiiii = _0x51dce1.asm.It).apply(null, arguments);
  };
  var _0x5edd43 = _0x51dce1.dynCall_iiiiffiiiji = function () {
    return (_0x5edd43 = _0x51dce1.dynCall_iiiiffiiiji = _0x51dce1.asm.Jt).apply(null, arguments);
  };
  var _0x37d488 = _0x51dce1.dynCall_jiiiiiii = function () {
    return (_0x37d488 = _0x51dce1.dynCall_jiiiiiii = _0x51dce1.asm.Kt).apply(null, arguments);
  };
  var _0x3601c6 = _0x51dce1.dynCall_iiiiffiiiii = function () {
    return (_0x3601c6 = _0x51dce1.dynCall_iiiiffiiiii = _0x51dce1.asm.Lt).apply(null, arguments);
  };
  var _0x5243a2 = _0x51dce1.dynCall_iidfii = function () {
    return (_0x5243a2 = _0x51dce1.dynCall_iidfii = _0x51dce1.asm.Mt).apply(null, arguments);
  };
  var _0x3506c4 = _0x51dce1.dynCall_iijfii = function () {
    return (_0x3506c4 = _0x51dce1.dynCall_iijfii = _0x51dce1.asm.Nt).apply(null, arguments);
  };
  var _0x313159 = _0x51dce1.dynCall_jiiiiji = function () {
    return (_0x313159 = _0x51dce1.dynCall_jiiiiji = _0x51dce1.asm.Ot).apply(null, arguments);
  };
  var _0x58dbb7 = _0x51dce1.dynCall_fiiiifi = function () {
    return (_0x58dbb7 = _0x51dce1.dynCall_fiiiifi = _0x51dce1.asm.Pt).apply(null, arguments);
  };
  var _0x2d0b9e = _0x51dce1.dynCall_iiijjii = function () {
    return (_0x2d0b9e = _0x51dce1.dynCall_iiijjii = _0x51dce1.asm.Qt).apply(null, arguments);
  };
  var _0x30d97a = _0x51dce1.dynCall_vij = function () {
    return (_0x30d97a = _0x51dce1.dynCall_vij = _0x51dce1.asm.Rt).apply(null, arguments);
  };
  var _0x55b07b = _0x51dce1.dynCall_iiiij = function () {
    return (_0x55b07b = _0x51dce1.dynCall_iiiij = _0x51dce1.asm.St).apply(null, arguments);
  };
  var _0x550eda = _0x51dce1.dynCall_ijj = function () {
    return (_0x550eda = _0x51dce1.dynCall_ijj = _0x51dce1.asm.Tt).apply(null, arguments);
  };
  var _0x412659 = _0x51dce1.dynCall_vjji = function () {
    return (_0x412659 = _0x51dce1.dynCall_vjji = _0x51dce1.asm.Ut).apply(null, arguments);
  };
  var _0x187913 = _0x51dce1.dynCall_ij = function () {
    return (_0x187913 = _0x51dce1.dynCall_ij = _0x51dce1.asm.Vt).apply(null, arguments);
  };
  var _0x32ec3a = _0x51dce1.dynCall_vif = function () {
    return (_0x32ec3a = _0x51dce1.dynCall_vif = _0x51dce1.asm.Wt).apply(null, arguments);
  };
  var _0x3a425 = _0x51dce1.dynCall_vid = function () {
    return (_0x3a425 = _0x51dce1.dynCall_vid = _0x51dce1.asm.Xt).apply(null, arguments);
  };
  var _0x2c6c71 = _0x51dce1.dynCall_viiiiif = function () {
    return (_0x2c6c71 = _0x51dce1.dynCall_viiiiif = _0x51dce1.asm.Yt).apply(null, arguments);
  };
  var _0x1bc1a6 = _0x51dce1.dynCall_viiiif = function () {
    return (_0x1bc1a6 = _0x51dce1.dynCall_viiiif = _0x51dce1.asm.Zt).apply(null, arguments);
  };
  var _0x47fb24 = _0x51dce1.dynCall_viiiiiif = function () {
    return (_0x47fb24 = _0x51dce1.dynCall_viiiiiif = _0x51dce1.asm._t).apply(null, arguments);
  };
  var _0xd61329 = _0x51dce1.dynCall_viffff = function () {
    return (_0xd61329 = _0x51dce1.dynCall_viffff = _0x51dce1.asm.$t).apply(null, arguments);
  };
  var _0x55479f = _0x51dce1.dynCall_iiif = function () {
    return (_0x55479f = _0x51dce1.dynCall_iiif = _0x51dce1.asm.au).apply(null, arguments);
  };
  var _0x17600d = _0x51dce1.dynCall_fif = function () {
    return (_0x17600d = _0x51dce1.dynCall_fif = _0x51dce1.asm.bu).apply(null, arguments);
  };
  var _0x5170a6 = _0x51dce1.dynCall_viff = function () {
    return (_0x5170a6 = _0x51dce1.dynCall_viff = _0x51dce1.asm.cu).apply(null, arguments);
  };
  var _0x251222 = _0x51dce1.dynCall_iiiiiifff = function () {
    return (_0x251222 = _0x51dce1.dynCall_iiiiiifff = _0x51dce1.asm.du).apply(null, arguments);
  };
  var _0x14b3a3 = _0x51dce1.dynCall_iiiiiifiif = function () {
    return (_0x14b3a3 = _0x51dce1.dynCall_iiiiiifiif = _0x51dce1.asm.eu).apply(null, arguments);
  };
  var _0x59f2e0 = _0x51dce1.dynCall_iiiiiifiii = function () {
    return (_0x59f2e0 = _0x51dce1.dynCall_iiiiiifiii = _0x51dce1.asm.fu).apply(null, arguments);
  };
  var _0x437243 = _0x51dce1.dynCall_iiiiiiifiif = function () {
    return (_0x437243 = _0x51dce1.dynCall_iiiiiiifiif = _0x51dce1.asm.gu).apply(null, arguments);
  };
  var _0x51831d = _0x51dce1.dynCall_fiff = function () {
    return (_0x51831d = _0x51dce1.dynCall_fiff = _0x51dce1.asm.hu).apply(null, arguments);
  };
  var _0xcd7ba9 = _0x51dce1.dynCall_fiiiiiifiifif = function () {
    return (_0xcd7ba9 = _0x51dce1.dynCall_fiiiiiifiifif = _0x51dce1.asm.iu).apply(null, arguments);
  };
  var _0x239ce2 = _0x51dce1.dynCall_fiiiiiifiiiif = function () {
    return (_0x239ce2 = _0x51dce1.dynCall_fiiiiiifiiiif = _0x51dce1.asm.ju).apply(null, arguments);
  };
  var _0x2207a0 = _0x51dce1.dynCall_iifiiiijii = function () {
    return (_0x2207a0 = _0x51dce1.dynCall_iifiiiijii = _0x51dce1.asm.ku).apply(null, arguments);
  };
  var _0x23810e = _0x51dce1.dynCall_vifijii = function () {
    return (_0x23810e = _0x51dce1.dynCall_vifijii = _0x51dce1.asm.lu).apply(null, arguments);
  };
  var _0x4a89ed = _0x51dce1.dynCall_iiiifffiii = function () {
    return (_0x4a89ed = _0x51dce1.dynCall_iiiifffiii = _0x51dce1.asm.mu).apply(null, arguments);
  };
  var _0x45f518 = _0x51dce1.dynCall_iiiifffffi = function () {
    return (_0x45f518 = _0x51dce1.dynCall_iiiifffffi = _0x51dce1.asm.nu).apply(null, arguments);
  };
  var _0x1451d9 = _0x51dce1.dynCall_viffiiiif = function () {
    return (_0x1451d9 = _0x51dce1.dynCall_viffiiiif = _0x51dce1.asm.ou).apply(null, arguments);
  };
  var _0x30b84 = _0x51dce1.dynCall_viffiifffffiii = function () {
    return (_0x30b84 = _0x51dce1.dynCall_viffiifffffiii = _0x51dce1.asm.pu).apply(null, arguments);
  };
  var _0x57640b = _0x51dce1.dynCall_viffffiifffiiiiif = function () {
    return (_0x57640b = _0x51dce1.dynCall_viffffiifffiiiiif = _0x51dce1.asm.qu).apply(null, arguments);
  };
  var _0x3ac65e = _0x51dce1.dynCall_iiiifffffii = function () {
    return (_0x3ac65e = _0x51dce1.dynCall_iiiifffffii = _0x51dce1.asm.ru).apply(null, arguments);
  };
  var _0x377d84 = _0x51dce1.dynCall_viiiiiiiiiiifii = function () {
    return (_0x377d84 = _0x51dce1.dynCall_viiiiiiiiiiifii = _0x51dce1.asm.su).apply(null, arguments);
  };
  var _0xb3fe12 = _0x51dce1.dynCall_iiiiifiiiiif = function () {
    return (_0xb3fe12 = _0x51dce1.dynCall_iiiiifiiiiif = _0x51dce1.asm.tu).apply(null, arguments);
  };
  var _0x3e397e = _0x51dce1.dynCall_viiifiiiii = function () {
    return (_0x3e397e = _0x51dce1.dynCall_viiifiiiii = _0x51dce1.asm.uu).apply(null, arguments);
  };
  var _0x447fd6 = _0x51dce1.dynCall_viiiifiiiiif = function () {
    return (_0x447fd6 = _0x51dce1.dynCall_viiiifiiiiif = _0x51dce1.asm.vu).apply(null, arguments);
  };
  var _0x3950e0 = _0x51dce1.dynCall_iifff = function () {
    return (_0x3950e0 = _0x51dce1.dynCall_iifff = _0x51dce1.asm.wu).apply(null, arguments);
  };
  var _0x38e780 = _0x51dce1.dynCall_iif = function () {
    return (_0x38e780 = _0x51dce1.dynCall_iif = _0x51dce1.asm.xu).apply(null, arguments);
  };
  var _0x303b90 = _0x51dce1.dynCall_viijijj = function () {
    return (_0x303b90 = _0x51dce1.dynCall_viijijj = _0x51dce1.asm.yu).apply(null, arguments);
  };
  var _0x4d8a33 = _0x51dce1.dynCall_viijj = function () {
    return (_0x4d8a33 = _0x51dce1.dynCall_viijj = _0x51dce1.asm.zu).apply(null, arguments);
  };
  var _0x2366fe = _0x51dce1.dynCall_viiiij = function () {
    return (_0x2366fe = _0x51dce1.dynCall_viiiij = _0x51dce1.asm.Au).apply(null, arguments);
  };
  var _0x1c0104 = _0x51dce1.dynCall_iiijji = function () {
    return (_0x1c0104 = _0x51dce1.dynCall_iiijji = _0x51dce1.asm.Bu).apply(null, arguments);
  };
  var _0x1ddd32 = _0x51dce1.dynCall_ijjiiiii = function () {
    return (_0x1ddd32 = _0x51dce1.dynCall_ijjiiiii = _0x51dce1.asm.Cu).apply(null, arguments);
  };
  var _0x4785e0 = _0x51dce1.dynCall_vidd = function () {
    return (_0x4785e0 = _0x51dce1.dynCall_vidd = _0x51dce1.asm.Du).apply(null, arguments);
  };
  var _0xe9b10c = _0x51dce1.dynCall_iiiiiifffiiifiii = function () {
    return (_0xe9b10c = _0x51dce1.dynCall_iiiiiifffiiifiii = _0x51dce1.asm.Eu).apply(null, arguments);
  };
  var _0x4c1e74 = _0x51dce1.dynCall_viid = function () {
    return (_0x4c1e74 = _0x51dce1.dynCall_viid = _0x51dce1.asm.Fu).apply(null, arguments);
  };
  var _0x146a46 = _0x51dce1.dynCall_viiif = function () {
    return (_0x146a46 = _0x51dce1.dynCall_viiif = _0x51dce1.asm.Gu).apply(null, arguments);
  };
  var _0x50040d = _0x51dce1.dynCall_fiiiif = function () {
    return (_0x50040d = _0x51dce1.dynCall_fiiiif = _0x51dce1.asm.Hu).apply(null, arguments);
  };
  var _0x52d5ee = _0x51dce1.dynCall_viiifffiiij = function () {
    return (_0x52d5ee = _0x51dce1.dynCall_viiifffiiij = _0x51dce1.asm.Iu).apply(null, arguments);
  };
  var _0xcf9596 = _0x51dce1.dynCall_viffffffffffffiiii = function () {
    return (_0xcf9596 = _0x51dce1.dynCall_viffffffffffffiiii = _0x51dce1.asm.Ju).apply(null, arguments);
  };
  var _0x276251 = _0x51dce1.dynCall_ff = function () {
    return (_0x276251 = _0x51dce1.dynCall_ff = _0x51dce1.asm.Ku).apply(null, arguments);
  };
  var _0x2ca7ba = _0x51dce1.dynCall_fff = function () {
    return (_0x2ca7ba = _0x51dce1.dynCall_fff = _0x51dce1.asm.Lu).apply(null, arguments);
  };
  var _0x32af0e = _0x51dce1.dynCall_iiiiiff = function () {
    return (_0x32af0e = _0x51dce1.dynCall_iiiiiff = _0x51dce1.asm.Mu).apply(null, arguments);
  };
  var _0x152018 = _0x51dce1.dynCall_vifff = function () {
    return (_0x152018 = _0x51dce1.dynCall_vifff = _0x51dce1.asm.Nu).apply(null, arguments);
  };
  var _0x24eec9 = _0x51dce1.dynCall_viifff = function () {
    return (_0x24eec9 = _0x51dce1.dynCall_viifff = _0x51dce1.asm.Ou).apply(null, arguments);
  };
  var _0x345316 = _0x51dce1.dynCall_vf = function () {
    return (_0x345316 = _0x51dce1.dynCall_vf = _0x51dce1.asm.Pu).apply(null, arguments);
  };
  var _0x24e1f8 = _0x51dce1.dynCall_vffff = function () {
    return (_0x24e1f8 = _0x51dce1.dynCall_vffff = _0x51dce1.asm.Qu).apply(null, arguments);
  };
  var _0x36d724 = _0x51dce1.dynCall_vff = function () {
    return (_0x36d724 = _0x51dce1.dynCall_vff = _0x51dce1.asm.Ru).apply(null, arguments);
  };
  var _0x30e868 = _0x51dce1.dynCall_f = function () {
    return (_0x30e868 = _0x51dce1.dynCall_f = _0x51dce1.asm.Su).apply(null, arguments);
  };
  var _0x4342c4 = _0x51dce1.dynCall_vfff = function () {
    return (_0x4342c4 = _0x51dce1.dynCall_vfff = _0x51dce1.asm.Tu).apply(null, arguments);
  };
  var _0x47c490 = _0x51dce1.dynCall_d = function () {
    return (_0x47c490 = _0x51dce1.dynCall_d = _0x51dce1.asm.Uu).apply(null, arguments);
  };
  var _0x1bb533 = _0x51dce1.dynCall_fiif = function () {
    return (_0x1bb533 = _0x51dce1.dynCall_fiif = _0x51dce1.asm.Vu).apply(null, arguments);
  };
  var _0x581eff = _0x51dce1.dynCall_iiiiiiffiiiiiiiiiffffiii = function () {
    return (_0x581eff = _0x51dce1.dynCall_iiiiiiffiiiiiiiiiffffiii = _0x51dce1.asm.Wu).apply(null, arguments);
  };
  var _0x57cf2a = _0x51dce1.dynCall_viififi = function () {
    return (_0x57cf2a = _0x51dce1.dynCall_viififi = _0x51dce1.asm.Xu).apply(null, arguments);
  };
  var _0x48e399 = _0x51dce1.dynCall_viiiiiiiijiii = function () {
    return (_0x48e399 = _0x51dce1.dynCall_viiiiiiiijiii = _0x51dce1.asm.Yu).apply(null, arguments);
  };
  function _0x50e143(_0xbf4bcb, _0xc5b999) {
    var _0x1f1aeb = _0x3e11a3();
    try {
      return _0x4bfd1a(_0xbf4bcb, _0xc5b999);
    } catch (_0x550354) {
      _0x18d96d(_0x1f1aeb);
      if (_0x550354 !== _0x550354 + 0 && _0x550354 !== "longjmp") {
        throw _0x550354;
      }
      _0x2517d0(1, 0);
    }
  }
  function _0x5798ec(_0x171678, _0x543e26, _0xee8d46) {
    var _0x5c9d55 = _0x3e11a3();
    try {
      return _0x2e0f87(_0x171678, _0x543e26, _0xee8d46);
    } catch (_0x3c95fe) {
      _0x18d96d(_0x5c9d55);
      if (_0x3c95fe !== _0x3c95fe + 0 && _0x3c95fe !== "longjmp") {
        throw _0x3c95fe;
      }
      _0x2517d0(1, 0);
    }
  }
  function _0x479c75(_0x47d3c7, _0x2d3b52, _0x148c52, _0x5788fd) {
    var _0x567be3 = _0x3e11a3();
    try {
      _0x24e3fb(_0x47d3c7, _0x2d3b52, _0x148c52, _0x5788fd);
    } catch (_0x36e6ea) {
      _0x18d96d(_0x567be3);
      if (_0x36e6ea !== _0x36e6ea + 0 && _0x36e6ea !== "longjmp") {
        throw _0x36e6ea;
      }
      _0x2517d0(1, 0);
    }
  }
  function _0x3411de(_0x58655d, _0xf4458, _0x3b8262, _0x5f20a4, _0x17301b, _0x109601) {
    var _0x3cd83d = _0x3e11a3();
    try {
      return _0x419e16(_0x58655d, _0xf4458, _0x3b8262, _0x5f20a4, _0x17301b, _0x109601);
    } catch (_0x3a014c) {
      _0x18d96d(_0x3cd83d);
      if (_0x3a014c !== _0x3a014c + 0 && _0x3a014c !== "longjmp") {
        throw _0x3a014c;
      }
      _0x2517d0(1, 0);
    }
  }
  function _0x855293(_0x5a38fb, _0x5b65d4, _0x3dda9d, _0x121a2c) {
    var _0x5c998b = _0x3e11a3();
    try {
      return _0x3f85b1(_0x5a38fb, _0x5b65d4, _0x3dda9d, _0x121a2c);
    } catch (_0x4ad33b) {
      _0x18d96d(_0x5c998b);
      if (_0x4ad33b !== _0x4ad33b + 0 && _0x4ad33b !== "longjmp") {
        throw _0x4ad33b;
      }
      _0x2517d0(1, 0);
    }
  }
  function _0x1f3222(_0x597867, _0x3ded6c, _0x38f015, _0xe90c1e, _0x334e6f) {
    var _0x27ba9f = _0x3e11a3();
    try {
      _0x3ffa09(_0x597867, _0x3ded6c, _0x38f015, _0xe90c1e, _0x334e6f);
    } catch (_0x2cc07e) {
      _0x18d96d(_0x27ba9f);
      if (_0x2cc07e !== _0x2cc07e + 0 && _0x2cc07e !== "longjmp") {
        throw _0x2cc07e;
      }
      _0x2517d0(1, 0);
    }
  }
  function _0x270b7a(_0x260525, _0x2e43b7, _0x104b6d, _0x290159, _0x3f74a2) {
    var _0x4092d5 = _0x3e11a3();
    try {
      return _0xab94c5(_0x260525, _0x2e43b7, _0x104b6d, _0x290159, _0x3f74a2);
    } catch (_0x470e5d) {
      _0x18d96d(_0x4092d5);
      if (_0x470e5d !== _0x470e5d + 0 && _0x470e5d !== "longjmp") {
        throw _0x470e5d;
      }
      _0x2517d0(1, 0);
    }
  }
  function _0x434734(_0x5e151d, _0x447efc, _0x236b26, _0x12addb) {
    var _0x4892a7 = _0x3e11a3();
    try {
      return _0x21705b(_0x5e151d, _0x447efc, _0x236b26, _0x12addb);
    } catch (_0x317e27) {
      _0x18d96d(_0x4892a7);
      if (_0x317e27 !== _0x317e27 + 0 && _0x317e27 !== "longjmp") {
        throw _0x317e27;
      }
      _0x2517d0(1, 0);
    }
  }
  function _0x34f223(_0x9c4ed3, _0x7b07d1, _0x1965f8, _0x5eed3e) {
    var _0x1b3dbb = _0x3e11a3();
    try {
      return _0x35c08d(_0x9c4ed3, _0x7b07d1, _0x1965f8, _0x5eed3e);
    } catch (_0x1c5524) {
      _0x18d96d(_0x1b3dbb);
      if (_0x1c5524 !== _0x1c5524 + 0 && _0x1c5524 !== "longjmp") {
        throw _0x1c5524;
      }
      _0x2517d0(1, 0);
    }
  }
  function _0x5199f3(_0x33863f, _0x498d62, _0x1850ea, _0x127297) {
    var _0x2af4da = _0x3e11a3();
    try {
      _0x303685(_0x33863f, _0x498d62, _0x1850ea, _0x127297);
    } catch (_0xa063d0) {
      _0x18d96d(_0x2af4da);
      if (_0xa063d0 !== _0xa063d0 + 0 && _0xa063d0 !== "longjmp") {
        throw _0xa063d0;
      }
      _0x2517d0(1, 0);
    }
  }
  function _0x226a29(_0x4a6962, _0x23df11, _0x4d3d43) {
    var _0x761bed = _0x3e11a3();
    try {
      _0x234acb(_0x4a6962, _0x23df11, _0x4d3d43);
    } catch (_0x3d181c) {
      _0x18d96d(_0x761bed);
      if (_0x3d181c !== _0x3d181c + 0 && _0x3d181c !== "longjmp") {
        throw _0x3d181c;
      }
      _0x2517d0(1, 0);
    }
  }
  function _0x42369e(_0x53cc3f, _0x505429) {
    var _0x53311e = _0x3e11a3();
    try {
      _0x53a2c3(_0x53cc3f, _0x505429);
    } catch (_0x3f05f4) {
      _0x18d96d(_0x53311e);
      if (_0x3f05f4 !== _0x3f05f4 + 0 && _0x3f05f4 !== "longjmp") {
        throw _0x3f05f4;
      }
      _0x2517d0(1, 0);
    }
  }
  function _0x26ecb7(_0x26e32a) {
    var _0x2cb342 = _0x3e11a3();
    try {
      _0x94408b(_0x26e32a);
    } catch (_0x56b524) {
      _0x18d96d(_0x2cb342);
      if (_0x56b524 !== _0x56b524 + 0 && _0x56b524 !== "longjmp") {
        throw _0x56b524;
      }
      _0x2517d0(1, 0);
    }
  }
  function _0x590675(_0x5ca2a2) {
    var _0x40f929 = _0x3e11a3();
    try {
      return _0x1a1fbf(_0x5ca2a2);
    } catch (_0x140b0f) {
      _0x18d96d(_0x40f929);
      if (_0x140b0f !== _0x140b0f + 0 && _0x140b0f !== "longjmp") {
        throw _0x140b0f;
      }
      _0x2517d0(1, 0);
    }
  }
  function _0x2b4dd4(_0x454a9d, _0x3803f7, _0x30af6e, _0x12c277, _0x5b52c4, _0x517f33, _0x3f710b, _0x36977c) {
    var _0x16e95d = _0x3e11a3();
    try {
      return _0x33ed90(_0x454a9d, _0x3803f7, _0x30af6e, _0x12c277, _0x5b52c4, _0x517f33, _0x3f710b, _0x36977c);
    } catch (_0x434150) {
      _0x18d96d(_0x16e95d);
      if (_0x434150 !== _0x434150 + 0 && _0x434150 !== "longjmp") {
        throw _0x434150;
      }
      _0x2517d0(1, 0);
    }
  }
  function _0x2284e7(_0x37170f, _0x2f5cd9, _0x4696f4, _0x11449c, _0x516e3e, _0x3ab43c) {
    var _0x4a7a8f = _0x3e11a3();
    try {
      _0x3dfc22(_0x37170f, _0x2f5cd9, _0x4696f4, _0x11449c, _0x516e3e, _0x3ab43c);
    } catch (_0x427fb3) {
      _0x18d96d(_0x4a7a8f);
      if (_0x427fb3 !== _0x427fb3 + 0 && _0x427fb3 !== "longjmp") {
        throw _0x427fb3;
      }
      _0x2517d0(1, 0);
    }
  }
  function _0x574ff0(_0x5c805c, _0x4e728a, _0x5aa4b3, _0x34366c, _0x139c50, _0x16bd9c, _0x1c2c1e) {
    var _0x47ab22 = _0x3e11a3();
    try {
      return _0x193f76(_0x5c805c, _0x4e728a, _0x5aa4b3, _0x34366c, _0x139c50, _0x16bd9c, _0x1c2c1e);
    } catch (_0x20187a) {
      _0x18d96d(_0x47ab22);
      if (_0x20187a !== _0x20187a + 0 && _0x20187a !== "longjmp") {
        throw _0x20187a;
      }
      _0x2517d0(1, 0);
    }
  }
  function _0x1135b2(_0xb7ac3, _0x1c41b2, _0x45f174, _0x261043, _0x316b31, _0x436191, _0x2452b8, _0x3b52de) {
    var _0x275770 = _0x3e11a3();
    try {
      _0x3cda99(_0xb7ac3, _0x1c41b2, _0x45f174, _0x261043, _0x316b31, _0x436191, _0x2452b8, _0x3b52de);
    } catch (_0x3eec37) {
      _0x18d96d(_0x275770);
      if (_0x3eec37 !== _0x3eec37 + 0 && _0x3eec37 !== "longjmp") {
        throw _0x3eec37;
      }
      _0x2517d0(1, 0);
    }
  }
  function _0x1d4f54(_0x3d14e1, _0x295031, _0x3c0448, _0x4da30c, _0x2dd734, _0x2a6c9d, _0x320d12, _0x2acad7, _0xaba7ad) {
    var _0xcfc927 = _0x3e11a3();
    try {
      return _0x64050(_0x3d14e1, _0x295031, _0x3c0448, _0x4da30c, _0x2dd734, _0x2a6c9d, _0x320d12, _0x2acad7, _0xaba7ad);
    } catch (_0x1abbc2) {
      _0x18d96d(_0xcfc927);
      if (_0x1abbc2 !== _0x1abbc2 + 0 && _0x1abbc2 !== "longjmp") {
        throw _0x1abbc2;
      }
      _0x2517d0(1, 0);
    }
  }
  function _0x4773f5(_0xea7a02, _0x36302c, _0x4636c0, _0x48b295, _0x32f3ed, _0x4c75ac, _0x1c44f8) {
    var _0xdb8f2d = _0x3e11a3();
    try {
      _0x37e3f9(_0xea7a02, _0x36302c, _0x4636c0, _0x48b295, _0x32f3ed, _0x4c75ac, _0x1c44f8);
    } catch (_0x35eadf) {
      _0x18d96d(_0xdb8f2d);
      if (_0x35eadf !== _0x35eadf + 0 && _0x35eadf !== "longjmp") {
        throw _0x35eadf;
      }
      _0x2517d0(1, 0);
    }
  }
  function _0x55894b(_0x1bd1ff, _0x499622, _0x45288a, _0x52594f, _0x11e348) {
    var _0xb21f9f = _0x3e11a3();
    try {
      _0x1b7244(_0x1bd1ff, _0x499622, _0x45288a, _0x52594f, _0x11e348);
    } catch (_0x140ef9) {
      _0x18d96d(_0xb21f9f);
      if (_0x140ef9 !== _0x140ef9 + 0 && _0x140ef9 !== "longjmp") {
        throw _0x140ef9;
      }
      _0x2517d0(1, 0);
    }
  }
  function _0x1f2b81(_0x3d70b8, _0x38f249, _0x3d004f, _0x3b716b) {
    var _0x4200d9 = _0x3e11a3();
    try {
      _0x3662c6(_0x3d70b8, _0x38f249, _0x3d004f, _0x3b716b);
    } catch (_0xe497f4) {
      _0x18d96d(_0x4200d9);
      if (_0xe497f4 !== _0xe497f4 + 0 && _0xe497f4 !== "longjmp") {
        throw _0xe497f4;
      }
      _0x2517d0(1, 0);
    }
  }
  function _0x96dcc0(_0x2d6bc8, _0x94bb98, _0x3d98a9, _0x488414, _0x1d905d, _0x10069e, _0x4b11c6, _0x1db6e0, _0x3c354d, _0x373d83, _0x3af538) {
    var _0x4507e7 = _0x3e11a3();
    try {
      _0x1a1201(_0x2d6bc8, _0x94bb98, _0x3d98a9, _0x488414, _0x1d905d, _0x10069e, _0x4b11c6, _0x1db6e0, _0x3c354d, _0x373d83, _0x3af538);
    } catch (_0xb5c354) {
      _0x18d96d(_0x4507e7);
      if (_0xb5c354 !== _0xb5c354 + 0 && _0xb5c354 !== "longjmp") {
        throw _0xb5c354;
      }
      _0x2517d0(1, 0);
    }
  }
  function _0x2bbef6(_0x3b9bcc, _0x4d2e8e, _0x3e828e, _0x18d9db, _0x24f65a, _0x1a8acf, _0x250a9d, _0x5df5f0, _0x5dfa19) {
    var _0x71a3c = _0x3e11a3();
    try {
      _0x35955c(_0x3b9bcc, _0x4d2e8e, _0x3e828e, _0x18d9db, _0x24f65a, _0x1a8acf, _0x250a9d, _0x5df5f0, _0x5dfa19);
    } catch (_0x4cac25) {
      _0x18d96d(_0x71a3c);
      if (_0x4cac25 !== _0x4cac25 + 0 && _0x4cac25 !== "longjmp") {
        throw _0x4cac25;
      }
      _0x2517d0(1, 0);
    }
  }
  function _0x26e429(_0x4ea8f0, _0x2a63e4, _0x18355e, _0x24bb6d, _0xaf0ea8) {
    var _0x1cc221 = _0x3e11a3();
    try {
      _0x356790(_0x4ea8f0, _0x2a63e4, _0x18355e, _0x24bb6d, _0xaf0ea8);
    } catch (_0x5c65a0) {
      _0x18d96d(_0x1cc221);
      if (_0x5c65a0 !== _0x5c65a0 + 0 && _0x5c65a0 !== "longjmp") {
        throw _0x5c65a0;
      }
      _0x2517d0(1, 0);
    }
  }
  function _0x3ee784(_0x25e732, _0x523807, _0x4a774b, _0x11bfec, _0x4a09b7) {
    var _0xdf3eed = _0x3e11a3();
    try {
      return _0x1a0580(_0x25e732, _0x523807, _0x4a774b, _0x11bfec, _0x4a09b7);
    } catch (_0x15c43f) {
      _0x18d96d(_0xdf3eed);
      if (_0x15c43f !== _0x15c43f + 0 && _0x15c43f !== "longjmp") {
        throw _0x15c43f;
      }
      _0x2517d0(1, 0);
    }
  }
  function _0x213721(_0x37793b, _0x13872f, _0x3be987, _0x2b5fa8, _0x415e53) {
    var _0x2a1b84 = _0x3e11a3();
    try {
      return _0x3fc2b9(_0x37793b, _0x13872f, _0x3be987, _0x2b5fa8, _0x415e53);
    } catch (_0x386d40) {
      _0x18d96d(_0x2a1b84);
      if (_0x386d40 !== _0x386d40 + 0 && _0x386d40 !== "longjmp") {
        throw _0x386d40;
      }
      _0x2517d0(1, 0);
    }
  }
  function _0x56ea06(_0x29d992, _0x25e2cf, _0x507548) {
    var _0x3d306c = _0x3e11a3();
    try {
      return _0x529024(_0x29d992, _0x25e2cf, _0x507548);
    } catch (_0x3c822d) {
      _0x18d96d(_0x3d306c);
      if (_0x3c822d !== _0x3c822d + 0 && _0x3c822d !== "longjmp") {
        throw _0x3c822d;
      }
      _0x2517d0(1, 0);
    }
  }
  function _0x4afd16(_0x51f7db, _0xfcec8a, _0x248697, _0x118d0b, _0x159217, _0x1bd467, _0x3ffb08, _0x1b0a8d, _0x34e03a, _0x5f4675) {
    var _0x22f1d9 = _0x3e11a3();
    try {
      _0x45fd40(_0x51f7db, _0xfcec8a, _0x248697, _0x118d0b, _0x159217, _0x1bd467, _0x3ffb08, _0x1b0a8d, _0x34e03a, _0x5f4675);
    } catch (_0x1c86f6) {
      _0x18d96d(_0x22f1d9);
      if (_0x1c86f6 !== _0x1c86f6 + 0 && _0x1c86f6 !== "longjmp") {
        throw _0x1c86f6;
      }
      _0x2517d0(1, 0);
    }
  }
  function _0x4a8a07(_0x30c220, _0x105937, _0x5140cc, _0x815cff, _0x5b5e85) {
    var _0x4974b6 = _0x3e11a3();
    try {
      _0x71f61e(_0x30c220, _0x105937, _0x5140cc, _0x815cff, _0x5b5e85);
    } catch (_0x1519c7) {
      _0x18d96d(_0x4974b6);
      if (_0x1519c7 !== _0x1519c7 + 0 && _0x1519c7 !== "longjmp") {
        throw _0x1519c7;
      }
      _0x2517d0(1, 0);
    }
  }
  function _0x15c7c0(_0x220303, _0x47248c, _0x91dd53, _0xdfcbad) {
    var _0x1b775f = _0x3e11a3();
    try {
      _0x7aad1d(_0x220303, _0x47248c, _0x91dd53, _0xdfcbad);
    } catch (_0x30d888) {
      _0x18d96d(_0x1b775f);
      if (_0x30d888 !== _0x30d888 + 0 && _0x30d888 !== "longjmp") {
        throw _0x30d888;
      }
      _0x2517d0(1, 0);
    }
  }
  function _0x21ad8d(_0x3c102e, _0x4796a0, _0x3be1d0) {
    var _0x2424cd = _0x3e11a3();
    try {
      return _0x2c1564(_0x3c102e, _0x4796a0, _0x3be1d0);
    } catch (_0x14729f) {
      _0x18d96d(_0x2424cd);
      if (_0x14729f !== _0x14729f + 0 && _0x14729f !== "longjmp") {
        throw _0x14729f;
      }
      _0x2517d0(1, 0);
    }
  }
  function _0x7ce4d1(_0x246378, _0xd3bc43, _0x18c21d, _0xd54f46, _0x2b3fa1, _0x103905) {
    var _0x4da934 = _0x3e11a3();
    try {
      return _0x30ff66(_0x246378, _0xd3bc43, _0x18c21d, _0xd54f46, _0x2b3fa1, _0x103905);
    } catch (_0x3e6cc1) {
      _0x18d96d(_0x4da934);
      if (_0x3e6cc1 !== _0x3e6cc1 + 0 && _0x3e6cc1 !== "longjmp") {
        throw _0x3e6cc1;
      }
      _0x2517d0(1, 0);
    }
  }
  function _0xbf11b6(_0x37acc0, _0x44b60d, _0x540f31, _0xecf850, _0x1c215f, _0x2c57d4, _0xdf8887) {
    var _0xf5f693 = _0x3e11a3();
    try {
      return _0x48f33e(_0x37acc0, _0x44b60d, _0x540f31, _0xecf850, _0x1c215f, _0x2c57d4, _0xdf8887);
    } catch (_0x41541a) {
      _0x18d96d(_0xf5f693);
      if (_0x41541a !== _0x41541a + 0 && _0x41541a !== "longjmp") {
        throw _0x41541a;
      }
      _0x2517d0(1, 0);
    }
  }
  function _0x4ad39b(_0xd61c23, _0x4bdc3d, _0x18e6b2, _0x311905, _0x5d90cc, _0x4763c3, _0x293926, _0x15124b, _0x30e799) {
    var _0x29f00d = _0x3e11a3();
    try {
      return _0x4b3adb(_0xd61c23, _0x4bdc3d, _0x18e6b2, _0x311905, _0x5d90cc, _0x4763c3, _0x293926, _0x15124b, _0x30e799);
    } catch (_0x3602d9) {
      _0x18d96d(_0x29f00d);
      if (_0x3602d9 !== _0x3602d9 + 0 && _0x3602d9 !== "longjmp") {
        throw _0x3602d9;
      }
      _0x2517d0(1, 0);
    }
  }
  function _0x2812c4(_0xc1d50, _0x151520, _0x51a00c, _0x72101a, _0x494328, _0xd4c083, _0x10555b, _0x385b8c, _0x51ef3b, _0x2d1553, _0x283bff, _0x6b33e5, _0x6285a7, _0x465f83, _0x4abe56) {
    var _0x2852f1 = _0x3e11a3();
    try {
      _0xf9bab8(_0xc1d50, _0x151520, _0x51a00c, _0x72101a, _0x494328, _0xd4c083, _0x10555b, _0x385b8c, _0x51ef3b, _0x2d1553, _0x283bff, _0x6b33e5, _0x6285a7, _0x465f83, _0x4abe56);
    } catch (_0x44bce5) {
      _0x18d96d(_0x2852f1);
      if (_0x44bce5 !== _0x44bce5 + 0 && _0x44bce5 !== "longjmp") {
        throw _0x44bce5;
      }
      _0x2517d0(1, 0);
    }
  }
  function _0x5653de(_0x55e1a3, _0x10b6e7, _0x2333b0, _0x529c21, _0x1d8120, _0x448531, _0x226164, _0x18cca3, _0x226a66, _0x3a1417, _0x1af48d, _0x523530, _0x20fbbc, _0xf2b98f, _0x593114) {
    var _0x412cce = _0x3e11a3();
    try {
      _0x2b2340(_0x55e1a3, _0x10b6e7, _0x2333b0, _0x529c21, _0x1d8120, _0x448531, _0x226164, _0x18cca3, _0x226a66, _0x3a1417, _0x1af48d, _0x523530, _0x20fbbc, _0xf2b98f, _0x593114);
    } catch (_0x10545a) {
      _0x18d96d(_0x412cce);
      if (_0x10545a !== _0x10545a + 0 && _0x10545a !== "longjmp") {
        throw _0x10545a;
      }
      _0x2517d0(1, 0);
    }
  }
  function _0x3c3d04(_0x5bb298, _0x2c721e, _0x500ab2, _0x155ddd, _0xb03354, _0x46448e, _0xe890fb, _0x502d79, _0x182f4f, _0x443466, _0x5afdc4, _0x129d0b, _0x2dfb2d, _0x456b04, _0x328ae4) {
    var _0x410e09 = _0x3e11a3();
    try {
      _0x31a9c9(_0x5bb298, _0x2c721e, _0x500ab2, _0x155ddd, _0xb03354, _0x46448e, _0xe890fb, _0x502d79, _0x182f4f, _0x443466, _0x5afdc4, _0x129d0b, _0x2dfb2d, _0x456b04, _0x328ae4);
    } catch (_0xfa5835) {
      _0x18d96d(_0x410e09);
      if (_0xfa5835 !== _0xfa5835 + 0 && _0xfa5835 !== "longjmp") {
        throw _0xfa5835;
      }
      _0x2517d0(1, 0);
    }
  }
  function _0x24136d(_0x2e694b, _0x38705e, _0xdc7d84) {
    var _0x346686 = _0x3e11a3();
    try {
      return _0x106ca4(_0x2e694b, _0x38705e, _0xdc7d84);
    } catch (_0x568aab) {
      _0x18d96d(_0x346686);
      if (_0x568aab !== _0x568aab + 0 && _0x568aab !== "longjmp") {
        throw _0x568aab;
      }
      _0x2517d0(1, 0);
    }
  }
  function _0x206464(_0x2552ef, _0x189ff1) {
    var _0x4000d5 = _0x3e11a3();
    try {
      return _0x12db34(_0x2552ef, _0x189ff1);
    } catch (_0x14c53a) {
      _0x18d96d(_0x4000d5);
      if (_0x14c53a !== _0x14c53a + 0 && _0x14c53a !== "longjmp") {
        throw _0x14c53a;
      }
      _0x2517d0(1, 0);
    }
  }
  function _0x3ae58d(_0x517809, _0x6f4fa1, _0x37fe63, _0x5eb6eb, _0x48c53d, _0x58aa57) {
    var _0x181c1 = _0x3e11a3();
    try {
      return _0x2a1516(_0x517809, _0x6f4fa1, _0x37fe63, _0x5eb6eb, _0x48c53d, _0x58aa57);
    } catch (_0x2574a9) {
      _0x18d96d(_0x181c1);
      if (_0x2574a9 !== _0x2574a9 + 0 && _0x2574a9 !== "longjmp") {
        throw _0x2574a9;
      }
      _0x2517d0(1, 0);
    }
  }
  function _0x24d206(_0xa97e3f, _0x363808, _0x3ead86, _0x59df97, _0x58012a, _0x432245, _0x1b4a6f) {
    var _0x58a5b2 = _0x3e11a3();
    try {
      return _0x2d1526(_0xa97e3f, _0x363808, _0x3ead86, _0x59df97, _0x58012a, _0x432245, _0x1b4a6f);
    } catch (_0x4af299) {
      _0x18d96d(_0x58a5b2);
      if (_0x4af299 !== _0x4af299 + 0 && _0x4af299 !== "longjmp") {
        throw _0x4af299;
      }
      _0x2517d0(1, 0);
    }
  }
  function _0x2bef15(_0x559fcd, _0x3fa555, _0x191b6b, _0x233854, _0x4fd037, _0x2f5901) {
    var _0x43ae50 = _0x3e11a3();
    try {
      _0x443d8d(_0x559fcd, _0x3fa555, _0x191b6b, _0x233854, _0x4fd037, _0x2f5901);
    } catch (_0x5ad564) {
      _0x18d96d(_0x43ae50);
      if (_0x5ad564 !== _0x5ad564 + 0 && _0x5ad564 !== "longjmp") {
        throw _0x5ad564;
      }
      _0x2517d0(1, 0);
    }
  }
  function _0x436b0e(_0x3ef44a, _0x424f60, _0x229724, _0x20cb7e) {
    var _0x4a1a92 = _0x3e11a3();
    try {
      return _0x2dd2d5(_0x3ef44a, _0x424f60, _0x229724, _0x20cb7e);
    } catch (_0x4e7937) {
      _0x18d96d(_0x4a1a92);
      if (_0x4e7937 !== _0x4e7937 + 0 && _0x4e7937 !== "longjmp") {
        throw _0x4e7937;
      }
      _0x2517d0(1, 0);
    }
  }
  function _0x5911f2(_0x358863, _0xbb743d, _0x4bbab0, _0x2bf1b5, _0x4938dc, _0x1614f3) {
    var _0x347ead = _0x3e11a3();
    try {
      _0x5dc8ad(_0x358863, _0xbb743d, _0x4bbab0, _0x2bf1b5, _0x4938dc, _0x1614f3);
    } catch (_0x211ea9) {
      _0x18d96d(_0x347ead);
      if (_0x211ea9 !== _0x211ea9 + 0 && _0x211ea9 !== "longjmp") {
        throw _0x211ea9;
      }
      _0x2517d0(1, 0);
    }
  }
  function _0x26a405(_0x548f98, _0x3eae4f, _0x3cc449, _0x11be08, _0x9bc11f) {
    var _0x46fd83 = _0x3e11a3();
    try {
      _0x305f4e(_0x548f98, _0x3eae4f, _0x3cc449, _0x11be08, _0x9bc11f);
    } catch (_0x4fa9fe) {
      _0x18d96d(_0x46fd83);
      if (_0x4fa9fe !== _0x4fa9fe + 0 && _0x4fa9fe !== "longjmp") {
        throw _0x4fa9fe;
      }
      _0x2517d0(1, 0);
    }
  }
  function _0x3ae5bb(_0x35fa05, _0x16cf38, _0x1e9fcb, _0x46cb7b, _0x50b816) {
    var _0x2d4905 = _0x3e11a3();
    try {
      return _0x3295da(_0x35fa05, _0x16cf38, _0x1e9fcb, _0x46cb7b, _0x50b816);
    } catch (_0x43eb50) {
      _0x18d96d(_0x2d4905);
      if (_0x43eb50 !== _0x43eb50 + 0 && _0x43eb50 !== "longjmp") {
        throw _0x43eb50;
      }
      _0x2517d0(1, 0);
    }
  }
  function _0xcaf2e8(_0x13115e, _0x1eac3b, _0x2ec1d5, _0x210a01, _0x6c767, _0x599e76, _0x59330a, _0x2ad16b, _0xd6669b, _0x96e797, _0x4d0667, _0x10aef0) {
    var _0x3794db = _0x3e11a3();
    try {
      _0x3a5fc4(_0x13115e, _0x1eac3b, _0x2ec1d5, _0x210a01, _0x6c767, _0x599e76, _0x59330a, _0x2ad16b, _0xd6669b, _0x96e797, _0x4d0667, _0x10aef0);
    } catch (_0x49efe8) {
      _0x18d96d(_0x3794db);
      if (_0x49efe8 !== _0x49efe8 + 0 && _0x49efe8 !== "longjmp") {
        throw _0x49efe8;
      }
      _0x2517d0(1, 0);
    }
  }
  function _0x1ae61c(_0x438aaf, _0x3b61bc, _0x8b05e7, _0x2dee5d, _0x297587, _0x4520f5, _0x1ebb5f, _0x52bc73, _0x473a34, _0x3f69f0, _0x5c6dc5, _0x4e9320, _0x3cd3e9) {
    var _0x59c447 = _0x3e11a3();
    try {
      return _0x180e03(_0x438aaf, _0x3b61bc, _0x8b05e7, _0x2dee5d, _0x297587, _0x4520f5, _0x1ebb5f, _0x52bc73, _0x473a34, _0x3f69f0, _0x5c6dc5, _0x4e9320, _0x3cd3e9);
    } catch (_0x4529f1) {
      _0x18d96d(_0x59c447);
      if (_0x4529f1 !== _0x4529f1 + 0 && _0x4529f1 !== "longjmp") {
        throw _0x4529f1;
      }
      _0x2517d0(1, 0);
    }
  }
  function _0x279c34(_0x548ae2, _0x35e370, _0x2544e6, _0x38edb2, _0x1fd44e, _0x1c5f2e, _0x282682) {
    var _0x3cca3f = _0x3e11a3();
    try {
      _0x179120(_0x548ae2, _0x35e370, _0x2544e6, _0x38edb2, _0x1fd44e, _0x1c5f2e, _0x282682);
    } catch (_0x31d290) {
      _0x18d96d(_0x3cca3f);
      if (_0x31d290 !== _0x31d290 + 0 && _0x31d290 !== "longjmp") {
        throw _0x31d290;
      }
      _0x2517d0(1, 0);
    }
  }
  function _0x752837(_0x1c0cc8, _0x48686d, _0x9788d2, _0x5c55f2) {
    var _0x3d547d = _0x3e11a3();
    try {
      return _0x3f0bb0(_0x1c0cc8, _0x48686d, _0x9788d2, _0x5c55f2);
    } catch (_0x23f5c3) {
      _0x18d96d(_0x3d547d);
      if (_0x23f5c3 !== _0x23f5c3 + 0 && _0x23f5c3 !== "longjmp") {
        throw _0x23f5c3;
      }
      _0x2517d0(1, 0);
    }
  }
  function _0x2b598b(_0x50c7d7, _0x2b4bf4, _0x251bc0) {
    var _0x1ab68c = _0x3e11a3();
    try {
      return _0x51f1c3(_0x50c7d7, _0x2b4bf4, _0x251bc0);
    } catch (_0xd2a2ff) {
      _0x18d96d(_0x1ab68c);
      if (_0xd2a2ff !== _0xd2a2ff + 0 && _0xd2a2ff !== "longjmp") {
        throw _0xd2a2ff;
      }
      _0x2517d0(1, 0);
    }
  }
  function _0x227240(_0x2e6844, _0x1b31a4, _0x2fd7d9, _0x2de377, _0x5aaea9, _0x25916c, _0x5dbb8e, _0x3b98c2, _0xd8d3f3, _0x34e4cf, _0x589874, _0x1ffc7e, _0x19006a) {
    var _0x5c9fa1 = _0x3e11a3();
    try {
      _0x6cf17b(_0x2e6844, _0x1b31a4, _0x2fd7d9, _0x2de377, _0x5aaea9, _0x25916c, _0x5dbb8e, _0x3b98c2, _0xd8d3f3, _0x34e4cf, _0x589874, _0x1ffc7e, _0x19006a);
    } catch (_0x226553) {
      _0x18d96d(_0x5c9fa1);
      if (_0x226553 !== _0x226553 + 0 && _0x226553 !== "longjmp") {
        throw _0x226553;
      }
      _0x2517d0(1, 0);
    }
  }
  function _0x498c6d(_0x191066, _0x5c799d, _0x534720, _0x10c41f) {
    var _0x4d1364 = _0x3e11a3();
    try {
      return _0x1b453a(_0x191066, _0x5c799d, _0x534720, _0x10c41f);
    } catch (_0x1ffd9f) {
      _0x18d96d(_0x4d1364);
      if (_0x1ffd9f !== _0x1ffd9f + 0 && _0x1ffd9f !== "longjmp") {
        throw _0x1ffd9f;
      }
      _0x2517d0(1, 0);
    }
  }
  function _0xdf4134(_0x9f29ba, _0x24cfaf, _0x329887, _0x37ff7c, _0x337590, _0x5143a4, _0x3ba9ad, _0xf05c18, _0x20522e, _0x21a8bc) {
    var _0xc6f4c9 = _0x3e11a3();
    try {
      return _0xaf829a(_0x9f29ba, _0x24cfaf, _0x329887, _0x37ff7c, _0x337590, _0x5143a4, _0x3ba9ad, _0xf05c18, _0x20522e, _0x21a8bc);
    } catch (_0x120ed7) {
      _0x18d96d(_0xc6f4c9);
      if (_0x120ed7 !== _0x120ed7 + 0 && _0x120ed7 !== "longjmp") {
        throw _0x120ed7;
      }
      _0x2517d0(1, 0);
    }
  }
  function _0x186691(_0x3bd233, _0x2c6bb9, _0x35fd8a, _0x2ac0ab, _0x5a0ef1) {
    var _0x448a42 = _0x3e11a3();
    try {
      return _0x14d087(_0x3bd233, _0x2c6bb9, _0x35fd8a, _0x2ac0ab, _0x5a0ef1);
    } catch (_0x437764) {
      _0x18d96d(_0x448a42);
      if (_0x437764 !== _0x437764 + 0 && _0x437764 !== "longjmp") {
        throw _0x437764;
      }
      _0x2517d0(1, 0);
    }
  }
  function _0x36a760(_0x4358b3, _0x2a3729, _0x516bb0, _0x42c24f, _0x359a14) {
    var _0x252f2c = _0x3e11a3();
    try {
      return _0x14b35c(_0x4358b3, _0x2a3729, _0x516bb0, _0x42c24f, _0x359a14);
    } catch (_0x59164b) {
      _0x18d96d(_0x252f2c);
      if (_0x59164b !== _0x59164b + 0 && _0x59164b !== "longjmp") {
        throw _0x59164b;
      }
      _0x2517d0(1, 0);
    }
  }
  function _0x5bd6ad(_0x96ca62, _0x2a7b6d, _0x5be487, _0xeadab1, _0x10a884, _0x1c6708, _0x67408e, _0x249a52) {
    var _0x160ef8 = _0x3e11a3();
    try {
      return _0x473f7e(_0x96ca62, _0x2a7b6d, _0x5be487, _0xeadab1, _0x10a884, _0x1c6708, _0x67408e, _0x249a52);
    } catch (_0x2ca8c4) {
      _0x18d96d(_0x160ef8);
      if (_0x2ca8c4 !== _0x2ca8c4 + 0 && _0x2ca8c4 !== "longjmp") {
        throw _0x2ca8c4;
      }
      _0x2517d0(1, 0);
    }
  }
  function _0x5daa7a(_0xc6ee4, _0x3ac4c8, _0x8cc19d, _0x43a92f) {
    var _0x345ef5 = _0x3e11a3();
    try {
      return _0x19a6a8(_0xc6ee4, _0x3ac4c8, _0x8cc19d, _0x43a92f);
    } catch (_0x27eb9d) {
      _0x18d96d(_0x345ef5);
      if (_0x27eb9d !== _0x27eb9d + 0 && _0x27eb9d !== "longjmp") {
        throw _0x27eb9d;
      }
      _0x2517d0(1, 0);
    }
  }
  function _0x147032(_0x1f7e1c, _0x23c78f, _0x3b5650, _0x913baa, _0x52aa02) {
    var _0x3226fe = _0x3e11a3();
    try {
      return _0x34366d(_0x1f7e1c, _0x23c78f, _0x3b5650, _0x913baa, _0x52aa02);
    } catch (_0xb830b2) {
      _0x18d96d(_0x3226fe);
      if (_0xb830b2 !== _0xb830b2 + 0 && _0xb830b2 !== "longjmp") {
        throw _0xb830b2;
      }
      _0x2517d0(1, 0);
    }
  }
  function _0x2b4b75(_0x57f831, _0x337190, _0x32d05a, _0x3b86b5, _0x3c48a0, _0x4264d4, _0x18f351, _0x582a1e, _0x1cf4bb, _0x3524c6, _0x55b249, _0x9e7934) {
    var _0x1b9034 = _0x3e11a3();
    try {
      _0x50d528(_0x57f831, _0x337190, _0x32d05a, _0x3b86b5, _0x3c48a0, _0x4264d4, _0x18f351, _0x582a1e, _0x1cf4bb, _0x3524c6, _0x55b249, _0x9e7934);
    } catch (_0x2bff1c) {
      _0x18d96d(_0x1b9034);
      if (_0x2bff1c !== _0x2bff1c + 0 && _0x2bff1c !== "longjmp") {
        throw _0x2bff1c;
      }
      _0x2517d0(1, 0);
    }
  }
  function _0x21fc12(_0x4d2b77, _0x35b9b2, _0x431aef, _0x5de307, _0x1ecbfb, _0x2927e1, _0xae1853) {
    var _0x1a475d = _0x3e11a3();
    try {
      return _0x59aaf3(_0x4d2b77, _0x35b9b2, _0x431aef, _0x5de307, _0x1ecbfb, _0x2927e1, _0xae1853);
    } catch (_0x40bc39) {
      _0x18d96d(_0x1a475d);
      if (_0x40bc39 !== _0x40bc39 + 0 && _0x40bc39 !== "longjmp") {
        throw _0x40bc39;
      }
      _0x2517d0(1, 0);
    }
  }
  function _0x52d2d3(_0x37192d, _0x1ce284, _0x1ff2ef, _0x59f061, _0xfe7dad, _0x3f322d, _0x243021, _0x588f2f, _0x4d8553, _0x155722, _0x1769de) {
    var _0x39f741 = _0x3e11a3();
    try {
      return _0x2711c2(_0x37192d, _0x1ce284, _0x1ff2ef, _0x59f061, _0xfe7dad, _0x3f322d, _0x243021, _0x588f2f, _0x4d8553, _0x155722, _0x1769de);
    } catch (_0x101a61) {
      _0x18d96d(_0x39f741);
      if (_0x101a61 !== _0x101a61 + 0 && _0x101a61 !== "longjmp") {
        throw _0x101a61;
      }
      _0x2517d0(1, 0);
    }
  }
  function _0xd5cf05(_0x3b32d0, _0x579ca4, _0xe2079e, _0x234645, _0x426536, _0x5deb16, _0x23a878) {
    var _0x373892 = _0x3e11a3();
    try {
      return _0x2f620f(_0x3b32d0, _0x579ca4, _0xe2079e, _0x234645, _0x426536, _0x5deb16, _0x23a878);
    } catch (_0x14aac0) {
      _0x18d96d(_0x373892);
      if (_0x14aac0 !== _0x14aac0 + 0 && _0x14aac0 !== "longjmp") {
        throw _0x14aac0;
      }
      _0x2517d0(1, 0);
    }
  }
  function _0x498b11(_0x46f762, _0x55d20a, _0x2c217a, _0x5e4871) {
    var _0x27ccd7 = _0x3e11a3();
    try {
      _0x4785e0(_0x46f762, _0x55d20a, _0x2c217a, _0x5e4871);
    } catch (_0x15b846) {
      _0x18d96d(_0x27ccd7);
      if (_0x15b846 !== _0x15b846 + 0 && _0x15b846 !== "longjmp") {
        throw _0x15b846;
      }
      _0x2517d0(1, 0);
    }
  }
  function _0x3cbcc3(_0x26653e, _0x249a22, _0x1959c5, _0x5ee40e, _0xc0fb) {
    var _0xb7b660 = _0x3e11a3();
    try {
      return _0x5b14d6(_0x26653e, _0x249a22, _0x1959c5, _0x5ee40e, _0xc0fb);
    } catch (_0x20a030) {
      _0x18d96d(_0xb7b660);
      if (_0x20a030 !== _0x20a030 + 0 && _0x20a030 !== "longjmp") {
        throw _0x20a030;
      }
      _0x2517d0(1, 0);
    }
  }
  function _0x29072c(_0x4a1eff, _0x5b2ab2, _0x29fa51, _0x2ff1e2, _0x736f55) {
    var _0x205864 = _0x3e11a3();
    try {
      return _0x293bb1(_0x4a1eff, _0x5b2ab2, _0x29fa51, _0x2ff1e2, _0x736f55);
    } catch (_0x1a4697) {
      _0x18d96d(_0x205864);
      if (_0x1a4697 !== _0x1a4697 + 0 && _0x1a4697 !== "longjmp") {
        throw _0x1a4697;
      }
      _0x2517d0(1, 0);
    }
  }
  function _0x11263c(_0x181c87) {
    var _0x41a669 = _0x3e11a3();
    try {
      return _0x32e031(_0x181c87);
    } catch (_0x285cea) {
      _0x18d96d(_0x41a669);
      if (_0x285cea !== _0x285cea + 0 && _0x285cea !== "longjmp") {
        throw _0x285cea;
      }
      _0x2517d0(1, 0);
    }
  }
  function _0x258d7e(_0x2c3c5a, _0x8c4020, _0x3de4d8, _0x402f9e) {
    var _0x49541f = _0x3e11a3();
    try {
      return _0x56806c(_0x2c3c5a, _0x8c4020, _0x3de4d8, _0x402f9e);
    } catch (_0x4d4ebd) {
      _0x18d96d(_0x49541f);
      if (_0x4d4ebd !== _0x4d4ebd + 0 && _0x4d4ebd !== "longjmp") {
        throw _0x4d4ebd;
      }
      _0x2517d0(1, 0);
    }
  }
  function _0x201a1a(_0x38eb12, _0x4e052e, _0x36e678, _0x3439b2, _0x30e52d, _0x5dafd5, _0x101583, _0x2c019d) {
    var _0x1dfc15 = _0x3e11a3();
    try {
      return _0x4deb50(_0x38eb12, _0x4e052e, _0x36e678, _0x3439b2, _0x30e52d, _0x5dafd5, _0x101583, _0x2c019d);
    } catch (_0x12ba96) {
      _0x18d96d(_0x1dfc15);
      if (_0x12ba96 !== _0x12ba96 + 0 && _0x12ba96 !== "longjmp") {
        throw _0x12ba96;
      }
      _0x2517d0(1, 0);
    }
  }
  function _0x475299(_0x2dfc52, _0x940e0c) {
    var _0x41a7aa = _0x3e11a3();
    try {
      return _0x125b81(_0x2dfc52, _0x940e0c);
    } catch (_0x45e310) {
      _0x18d96d(_0x41a7aa);
      if (_0x45e310 !== _0x45e310 + 0 && _0x45e310 !== "longjmp") {
        throw _0x45e310;
      }
      _0x2517d0(1, 0);
    }
  }
  function _0x9e3589(_0x2ea3b8, _0x1d5b5e, _0x539f46) {
    var _0x2e2901 = _0x3e11a3();
    try {
      return _0x5d983d(_0x2ea3b8, _0x1d5b5e, _0x539f46);
    } catch (_0x40fea8) {
      _0x18d96d(_0x2e2901);
      if (_0x40fea8 !== _0x40fea8 + 0 && _0x40fea8 !== "longjmp") {
        throw _0x40fea8;
      }
      _0x2517d0(1, 0);
    }
  }
  function _0xc2b484(_0x496f81, _0x2da4de, _0x219ed7, _0x49402f, _0x41c646, _0x5e5610, _0xc0859b) {
    var _0x5aae3f = _0x3e11a3();
    try {
      return _0x32d7a9(_0x496f81, _0x2da4de, _0x219ed7, _0x49402f, _0x41c646, _0x5e5610, _0xc0859b);
    } catch (_0x5a9ed8) {
      _0x18d96d(_0x5aae3f);
      if (_0x5a9ed8 !== _0x5a9ed8 + 0 && _0x5a9ed8 !== "longjmp") {
        throw _0x5a9ed8;
      }
      _0x2517d0(1, 0);
    }
  }
  function _0x1a8bc4(_0x3755f2, _0x62443, _0x4ac4c2, _0x2b04de, _0x21865a, _0x232aa2) {
    var _0x32d045 = _0x3e11a3();
    try {
      _0x4bfdb8(_0x3755f2, _0x62443, _0x4ac4c2, _0x2b04de, _0x21865a, _0x232aa2);
    } catch (_0x1e49d1) {
      _0x18d96d(_0x32d045);
      if (_0x1e49d1 !== _0x1e49d1 + 0 && _0x1e49d1 !== "longjmp") {
        throw _0x1e49d1;
      }
      _0x2517d0(1, 0);
    }
  }
  function _0x58e958(_0x88df94, _0x2784cf, _0x1ffa61, _0x5760ce, _0x441a3d, _0x559be4) {
    var _0x276890 = _0x3e11a3();
    try {
      _0x41e4c9(_0x88df94, _0x2784cf, _0x1ffa61, _0x5760ce, _0x441a3d, _0x559be4);
    } catch (_0xa46b47) {
      _0x18d96d(_0x276890);
      if (_0xa46b47 !== _0xa46b47 + 0 && _0xa46b47 !== "longjmp") {
        throw _0xa46b47;
      }
      _0x2517d0(1, 0);
    }
  }
  function _0x13923c(_0x11431d, _0x4afd07, _0x1673f4, _0x15775e, _0x11d615, _0x17c3c4) {
    var _0x4f26f9 = _0x3e11a3();
    try {
      return _0x3ddfa7(_0x11431d, _0x4afd07, _0x1673f4, _0x15775e, _0x11d615, _0x17c3c4);
    } catch (_0x25d753) {
      _0x18d96d(_0x4f26f9);
      if (_0x25d753 !== _0x25d753 + 0 && _0x25d753 !== "longjmp") {
        throw _0x25d753;
      }
      _0x2517d0(1, 0);
    }
  }
  function _0x2ca2ef(_0x2e75f1, _0x446f6f, _0x52966e, _0x2f32db, _0x354aef, _0x35abdb, _0x48ab9e, _0x326bfb, _0x5c4dee, _0x2104b3) {
    var _0x5531fa = _0x3e11a3();
    try {
      return _0x319e08(_0x2e75f1, _0x446f6f, _0x52966e, _0x2f32db, _0x354aef, _0x35abdb, _0x48ab9e, _0x326bfb, _0x5c4dee, _0x2104b3);
    } catch (_0x5aa5ab) {
      _0x18d96d(_0x5531fa);
      if (_0x5aa5ab !== _0x5aa5ab + 0 && _0x5aa5ab !== "longjmp") {
        throw _0x5aa5ab;
      }
      _0x2517d0(1, 0);
    }
  }
  function _0x370cb3(_0x1c6e7f, _0x1529b2, _0x5beeeb, _0x1ec532, _0x1c363b, _0x493ca6, _0x2e128d) {
    var _0x3ddcb1 = _0x3e11a3();
    try {
      _0x1faf21(_0x1c6e7f, _0x1529b2, _0x5beeeb, _0x1ec532, _0x1c363b, _0x493ca6, _0x2e128d);
    } catch (_0x1b5475) {
      _0x18d96d(_0x3ddcb1);
      if (_0x1b5475 !== _0x1b5475 + 0 && _0x1b5475 !== "longjmp") {
        throw _0x1b5475;
      }
      _0x2517d0(1, 0);
    }
  }
  function _0x330269(_0x59d270, _0x4aada4, _0xf9cc45, _0x1cf422, _0x220fea, _0x2b8f5a, _0x112778) {
    var _0x2ff73c = _0x3e11a3();
    try {
      return _0x49a9f1(_0x59d270, _0x4aada4, _0xf9cc45, _0x1cf422, _0x220fea, _0x2b8f5a, _0x112778);
    } catch (_0x423b1d) {
      _0x18d96d(_0x2ff73c);
      if (_0x423b1d !== _0x423b1d + 0 && _0x423b1d !== "longjmp") {
        throw _0x423b1d;
      }
      _0x2517d0(1, 0);
    }
  }
  function _0x198092(_0x2eb6f0, _0x2cead9, _0x4c0400, _0x4be8f7, _0x2fdd76, _0x5111b3, _0x335d6f, _0x278eeb, _0x9ff7ca, _0x5ba04d, _0x17487f, _0x4a96f1) {
    var _0x3fc76c = _0x3e11a3();
    try {
      return _0x2b82da(_0x2eb6f0, _0x2cead9, _0x4c0400, _0x4be8f7, _0x2fdd76, _0x5111b3, _0x335d6f, _0x278eeb, _0x9ff7ca, _0x5ba04d, _0x17487f, _0x4a96f1);
    } catch (_0x5e8469) {
      _0x18d96d(_0x3fc76c);
      if (_0x5e8469 !== _0x5e8469 + 0 && _0x5e8469 !== "longjmp") {
        throw _0x5e8469;
      }
      _0x2517d0(1, 0);
    }
  }
  function _0x5784a3(_0x5cb180, _0x2a70dc, _0x52cf31, _0x45fc93, _0x5ed418, _0x3c8601, _0x12c510, _0x2f0764, _0x261b4e, _0x3af18d) {
    var _0xf530bd = _0x3e11a3();
    try {
      return _0x2145fb(_0x5cb180, _0x2a70dc, _0x52cf31, _0x45fc93, _0x5ed418, _0x3c8601, _0x12c510, _0x2f0764, _0x261b4e, _0x3af18d);
    } catch (_0x5d6e07) {
      _0x18d96d(_0xf530bd);
      if (_0x5d6e07 !== _0x5d6e07 + 0 && _0x5d6e07 !== "longjmp") {
        throw _0x5d6e07;
      }
      _0x2517d0(1, 0);
    }
  }
  function _0x2e8b66(_0x391955, _0x20f068, _0x23cc98, _0x5bb2f1, _0x4eb62e, _0xf6fcd9) {
    var _0x124e72 = _0x3e11a3();
    try {
      _0x522b46(_0x391955, _0x20f068, _0x23cc98, _0x5bb2f1, _0x4eb62e, _0xf6fcd9);
    } catch (_0x34bdc3) {
      _0x18d96d(_0x124e72);
      if (_0x34bdc3 !== _0x34bdc3 + 0 && _0x34bdc3 !== "longjmp") {
        throw _0x34bdc3;
      }
      _0x2517d0(1, 0);
    }
  }
  function _0x21be68(_0x4e7437, _0x4975fc, _0x2fc8f7, _0x398966, _0x536394) {
    var _0xf3c7c4 = _0x3e11a3();
    try {
      _0x1eb4c6(_0x4e7437, _0x4975fc, _0x2fc8f7, _0x398966, _0x536394);
    } catch (_0x1ce8ae) {
      _0x18d96d(_0xf3c7c4);
      if (_0x1ce8ae !== _0x1ce8ae + 0 && _0x1ce8ae !== "longjmp") {
        throw _0x1ce8ae;
      }
      _0x2517d0(1, 0);
    }
  }
  function _0x24d66a(_0x56e4ad, _0xb3a0fe, _0x20e606, _0x2f3b18) {
    var _0xd612a = _0x3e11a3();
    try {
      return _0x2745a9(_0x56e4ad, _0xb3a0fe, _0x20e606, _0x2f3b18);
    } catch (_0x2cd84c) {
      _0x18d96d(_0xd612a);
      if (_0x2cd84c !== _0x2cd84c + 0 && _0x2cd84c !== "longjmp") {
        throw _0x2cd84c;
      }
      _0x2517d0(1, 0);
    }
  }
  function _0x399ed0(_0x27e37c, _0x39f4c7, _0x2117ed, _0x3ce3e8, _0x29a70f, _0x153b24) {
    var _0x4bd488 = _0x3e11a3();
    try {
      return _0x59f362(_0x27e37c, _0x39f4c7, _0x2117ed, _0x3ce3e8, _0x29a70f, _0x153b24);
    } catch (_0x5f4695) {
      _0x18d96d(_0x4bd488);
      if (_0x5f4695 !== _0x5f4695 + 0 && _0x5f4695 !== "longjmp") {
        throw _0x5f4695;
      }
      _0x2517d0(1, 0);
    }
  }
  function _0x51cbb0(_0x5b309c, _0x545844, _0xb3f611, _0x4e4659, _0xaa29ae, _0x2b6db6) {
    var _0x1ac135 = _0x3e11a3();
    try {
      return _0x26704e(_0x5b309c, _0x545844, _0xb3f611, _0x4e4659, _0xaa29ae, _0x2b6db6);
    } catch (_0x3bbf14) {
      _0x18d96d(_0x1ac135);
      if (_0x3bbf14 !== _0x3bbf14 + 0 && _0x3bbf14 !== "longjmp") {
        throw _0x3bbf14;
      }
      _0x2517d0(1, 0);
    }
  }
  function _0x4c1520(_0x4a23e5, _0xa2c2ef, _0x27d2b4, _0x43b069, _0x3d55ab) {
    var _0x5b9b3d = _0x3e11a3();
    try {
      return _0xee9b23(_0x4a23e5, _0xa2c2ef, _0x27d2b4, _0x43b069, _0x3d55ab);
    } catch (_0x2cc401) {
      _0x18d96d(_0x5b9b3d);
      if (_0x2cc401 !== _0x2cc401 + 0 && _0x2cc401 !== "longjmp") {
        throw _0x2cc401;
      }
      _0x2517d0(1, 0);
    }
  }
  function _0x5da66a(_0xf4974c, _0x4c6dd2, _0x3a9d24, _0xa378a0, _0x590d82, _0x8c5385, _0x9dce33, _0x5c9d92) {
    var _0x3c77dc = _0x3e11a3();
    try {
      _0x18a424(_0xf4974c, _0x4c6dd2, _0x3a9d24, _0xa378a0, _0x590d82, _0x8c5385, _0x9dce33, _0x5c9d92);
    } catch (_0x2d7884) {
      _0x18d96d(_0x3c77dc);
      if (_0x2d7884 !== _0x2d7884 + 0 && _0x2d7884 !== "longjmp") {
        throw _0x2d7884;
      }
      _0x2517d0(1, 0);
    }
  }
  function _0xc4f10a(_0x569552, _0x4d927f, _0x1c77ce) {
    var _0x4a6bf6 = _0x3e11a3();
    try {
      return _0x324d88(_0x569552, _0x4d927f, _0x1c77ce);
    } catch (_0x551510) {
      _0x18d96d(_0x4a6bf6);
      if (_0x551510 !== _0x551510 + 0 && _0x551510 !== "longjmp") {
        throw _0x551510;
      }
      _0x2517d0(1, 0);
    }
  }
  function _0x5da2a9(_0x17a880, _0x86add8, _0x127e02, _0x1b8b8d, _0x43af12, _0x5b2705, _0x26390e) {
    var _0x3acc48 = _0x3e11a3();
    try {
      _0x244428(_0x17a880, _0x86add8, _0x127e02, _0x1b8b8d, _0x43af12, _0x5b2705, _0x26390e);
    } catch (_0x407759) {
      _0x18d96d(_0x3acc48);
      if (_0x407759 !== _0x407759 + 0 && _0x407759 !== "longjmp") {
        throw _0x407759;
      }
      _0x2517d0(1, 0);
    }
  }
  function _0x5b9cd5(_0x2a2a8d, _0x65e7e7, _0x2d7bdd, _0x1a502d, _0x514b0b) {
    var _0x452071 = _0x3e11a3();
    try {
      return _0x52348c(_0x2a2a8d, _0x65e7e7, _0x2d7bdd, _0x1a502d, _0x514b0b);
    } catch (_0xbaf96f) {
      _0x18d96d(_0x452071);
      if (_0xbaf96f !== _0xbaf96f + 0 && _0xbaf96f !== "longjmp") {
        throw _0xbaf96f;
      }
      _0x2517d0(1, 0);
    }
  }
  function _0x2e0135(_0x40a359, _0x46f08d, _0x1713b3, _0x365dea) {
    var _0x3046cb = _0x3e11a3();
    try {
      return _0x347027(_0x40a359, _0x46f08d, _0x1713b3, _0x365dea);
    } catch (_0x30c1bb) {
      _0x18d96d(_0x3046cb);
      if (_0x30c1bb !== _0x30c1bb + 0 && _0x30c1bb !== "longjmp") {
        throw _0x30c1bb;
      }
      _0x2517d0(1, 0);
    }
  }
  function _0x4aa269(_0x290fcf, _0x1b2de5, _0x45ef6c, _0x33a0af, _0x1cf838, _0x3bf8f7, _0x4e3aa4, _0x20fbc9, _0x1ae1e8, _0x3f651f, _0x1b8fc8, _0x430c4e, _0xe3759c, _0x30f379, _0x281a73, _0x35c0d8, _0x2ba7c0) {
    var _0xbded0a = _0x3e11a3();
    try {
      _0x27c535(_0x290fcf, _0x1b2de5, _0x45ef6c, _0x33a0af, _0x1cf838, _0x3bf8f7, _0x4e3aa4, _0x20fbc9, _0x1ae1e8, _0x3f651f, _0x1b8fc8, _0x430c4e, _0xe3759c, _0x30f379, _0x281a73, _0x35c0d8, _0x2ba7c0);
    } catch (_0x5bfa91) {
      _0x18d96d(_0xbded0a);
      if (_0x5bfa91 !== _0x5bfa91 + 0 && _0x5bfa91 !== "longjmp") {
        throw _0x5bfa91;
      }
      _0x2517d0(1, 0);
    }
  }
  function _0x42ab22(_0x21a460, _0x1b4e71, _0x43ebe1, _0x4304c1, _0x194c72, _0x234fb7) {
    var _0x51e51b = _0x3e11a3();
    try {
      return _0x246e72(_0x21a460, _0x1b4e71, _0x43ebe1, _0x4304c1, _0x194c72, _0x234fb7);
    } catch (_0xbd2573) {
      _0x18d96d(_0x51e51b);
      if (_0xbd2573 !== _0xbd2573 + 0 && _0xbd2573 !== "longjmp") {
        throw _0xbd2573;
      }
      _0x2517d0(1, 0);
    }
  }
  function _0x3e7c9a(_0x5a2226, _0x4ef36a, _0x2ad647, _0x6e9734, _0x448c40, _0x5ea81b, _0x3f54c0) {
    var _0x1fe48f = _0x3e11a3();
    try {
      _0xc89b8e(_0x5a2226, _0x4ef36a, _0x2ad647, _0x6e9734, _0x448c40, _0x5ea81b, _0x3f54c0);
    } catch (_0x26ac6f) {
      _0x18d96d(_0x1fe48f);
      if (_0x26ac6f !== _0x26ac6f + 0 && _0x26ac6f !== "longjmp") {
        throw _0x26ac6f;
      }
      _0x2517d0(1, 0);
    }
  }
  function _0x2e1600(_0x5015a7, _0x250ce2, _0x29a773, _0x1f11de, _0x348859, _0x46f213) {
    var _0x3fdde7 = _0x3e11a3();
    try {
      return _0x2a1698(_0x5015a7, _0x250ce2, _0x29a773, _0x1f11de, _0x348859, _0x46f213);
    } catch (_0x3031fe) {
      _0x18d96d(_0x3fdde7);
      if (_0x3031fe !== _0x3031fe + 0 && _0x3031fe !== "longjmp") {
        throw _0x3031fe;
      }
      _0x2517d0(1, 0);
    }
  }
  function _0xef442(_0x3d3bdb, _0x192df1, _0x46e4e4, _0x4c0b21, _0x48bc75) {
    var _0x39e231 = _0x3e11a3();
    try {
      return _0x19c840(_0x3d3bdb, _0x192df1, _0x46e4e4, _0x4c0b21, _0x48bc75);
    } catch (_0x45bbd2) {
      _0x18d96d(_0x39e231);
      if (_0x45bbd2 !== _0x45bbd2 + 0 && _0x45bbd2 !== "longjmp") {
        throw _0x45bbd2;
      }
      _0x2517d0(1, 0);
    }
  }
  function _0x2dc74f(_0x49e1eb, _0x60d641, _0x181349, _0x511c8e) {
    var _0x25b992 = _0x3e11a3();
    try {
      return _0x55daf1(_0x49e1eb, _0x60d641, _0x181349, _0x511c8e);
    } catch (_0x2c347d) {
      _0x18d96d(_0x25b992);
      if (_0x2c347d !== _0x2c347d + 0 && _0x2c347d !== "longjmp") {
        throw _0x2c347d;
      }
      _0x2517d0(1, 0);
    }
  }
  function _0x29c2fe(_0x48ba4e, _0x1bdedf, _0x408322, _0x2c29a7) {
    var _0x2224d3 = _0x3e11a3();
    try {
      return _0x26b1d4(_0x48ba4e, _0x1bdedf, _0x408322, _0x2c29a7);
    } catch (_0x52e352) {
      _0x18d96d(_0x2224d3);
      if (_0x52e352 !== _0x52e352 + 0 && _0x52e352 !== "longjmp") {
        throw _0x52e352;
      }
      _0x2517d0(1, 0);
    }
  }
  function _0x2869f4(_0x3f7eb3, _0x2cfcc8, _0xc9ae91, _0x1de980, _0x518ec0, _0x321af2, _0x32a580, _0x4f187d, _0x188bdd) {
    var _0x3b8744 = _0x3e11a3();
    try {
      _0x215eae(_0x3f7eb3, _0x2cfcc8, _0xc9ae91, _0x1de980, _0x518ec0, _0x321af2, _0x32a580, _0x4f187d, _0x188bdd);
    } catch (_0x528a9f) {
      _0x18d96d(_0x3b8744);
      if (_0x528a9f !== _0x528a9f + 0 && _0x528a9f !== "longjmp") {
        throw _0x528a9f;
      }
      _0x2517d0(1, 0);
    }
  }
  function _0x29b3f6(_0x23b4e9, _0x1ca755, _0x1da022, _0x3749d1, _0x4a9f78, _0x2a4082) {
    var _0xf7c5d1 = _0x3e11a3();
    try {
      return _0x3d94a3(_0x23b4e9, _0x1ca755, _0x1da022, _0x3749d1, _0x4a9f78, _0x2a4082);
    } catch (_0x4286bf) {
      _0x18d96d(_0xf7c5d1);
      if (_0x4286bf !== _0x4286bf + 0 && _0x4286bf !== "longjmp") {
        throw _0x4286bf;
      }
      _0x2517d0(1, 0);
    }
  }
  function _0x24884e(_0x2ffc8c, _0x5ec573, _0x378c23, _0x43637c, _0x1d22c1) {
    var _0x29e643 = _0x3e11a3();
    try {
      _0x3c6fa2(_0x2ffc8c, _0x5ec573, _0x378c23, _0x43637c, _0x1d22c1);
    } catch (_0x286bda) {
      _0x18d96d(_0x29e643);
      if (_0x286bda !== _0x286bda + 0 && _0x286bda !== "longjmp") {
        throw _0x286bda;
      }
      _0x2517d0(1, 0);
    }
  }
  function _0x3944ba(_0xd16178, _0x5be5b8, _0x2d0c27, _0x32f399, _0xe2a7ed, _0x3e46a4, _0x10bff4, _0x52b18e) {
    var _0x27cdb3 = _0x3e11a3();
    try {
      _0xbeb0dc(_0xd16178, _0x5be5b8, _0x2d0c27, _0x32f399, _0xe2a7ed, _0x3e46a4, _0x10bff4, _0x52b18e);
    } catch (_0x21f81a) {
      _0x18d96d(_0x27cdb3);
      if (_0x21f81a !== _0x21f81a + 0 && _0x21f81a !== "longjmp") {
        throw _0x21f81a;
      }
      _0x2517d0(1, 0);
    }
  }
  function _0x3fc3fd(_0x2bf24b, _0x106720, _0x541309, _0x5d9323) {
    var _0x21bcca = _0x3e11a3();
    try {
      return _0x30fe6a(_0x2bf24b, _0x106720, _0x541309, _0x5d9323);
    } catch (_0x2bbfbf) {
      _0x18d96d(_0x21bcca);
      if (_0x2bbfbf !== _0x2bbfbf + 0 && _0x2bbfbf !== "longjmp") {
        throw _0x2bbfbf;
      }
      _0x2517d0(1, 0);
    }
  }
  function _0x12f019(_0x2a46e9, _0x350939, _0x527ea3, _0x361405, _0x242413, _0xefc82, _0x3b97ce, _0x445636, _0x48c40f) {
    var _0x5e764e = _0x3e11a3();
    try {
      _0xf470b0(_0x2a46e9, _0x350939, _0x527ea3, _0x361405, _0x242413, _0xefc82, _0x3b97ce, _0x445636, _0x48c40f);
    } catch (_0x553916) {
      _0x18d96d(_0x5e764e);
      if (_0x553916 !== _0x553916 + 0 && _0x553916 !== "longjmp") {
        throw _0x553916;
      }
      _0x2517d0(1, 0);
    }
  }
  function _0x248bd3(_0x415a16, _0x6146cf, _0x5b764f, _0x15855a, _0x1ff5d8, _0x4b2349, _0x51c293) {
    var _0x395b36 = _0x3e11a3();
    try {
      return _0x36a14b(_0x415a16, _0x6146cf, _0x5b764f, _0x15855a, _0x1ff5d8, _0x4b2349, _0x51c293);
    } catch (_0x1f1230) {
      _0x18d96d(_0x395b36);
      if (_0x1f1230 !== _0x1f1230 + 0 && _0x1f1230 !== "longjmp") {
        throw _0x1f1230;
      }
      _0x2517d0(1, 0);
    }
  }
  function _0x2f9ac6(_0x4eeeb2, _0x44b0b8, _0x1a1650, _0x25edf7, _0x473751, _0xc82cbc, _0x5c7841, _0x27baf1, _0x52dc3b, _0x41ade7, _0x5c1154, _0x30587a, _0xffe188, _0x4f15dd) {
    var _0x4110f0 = _0x3e11a3();
    try {
      _0x85f4e7(_0x4eeeb2, _0x44b0b8, _0x1a1650, _0x25edf7, _0x473751, _0xc82cbc, _0x5c7841, _0x27baf1, _0x52dc3b, _0x41ade7, _0x5c1154, _0x30587a, _0xffe188, _0x4f15dd);
    } catch (_0x3a7f08) {
      _0x18d96d(_0x4110f0);
      if (_0x3a7f08 !== _0x3a7f08 + 0 && _0x3a7f08 !== "longjmp") {
        throw _0x3a7f08;
      }
      _0x2517d0(1, 0);
    }
  }
  function _0xcde3ae(_0x113af5, _0x4b32c7, _0x324a79, _0xb658d4, _0x14c863, _0x822bd4, _0x11c46a, _0x52ed3b, _0x2565b6, _0x3c6923) {
    var _0x29c69c = _0x3e11a3();
    try {
      _0x564b62(_0x113af5, _0x4b32c7, _0x324a79, _0xb658d4, _0x14c863, _0x822bd4, _0x11c46a, _0x52ed3b, _0x2565b6, _0x3c6923);
    } catch (_0x2ea197) {
      _0x18d96d(_0x29c69c);
      if (_0x2ea197 !== _0x2ea197 + 0 && _0x2ea197 !== "longjmp") {
        throw _0x2ea197;
      }
      _0x2517d0(1, 0);
    }
  }
  function _0x4721af(_0xba34ad, _0x1d916a, _0x242e0f, _0x56e106, _0xd6fab0, _0x1ba3a7) {
    var _0x5b6f80 = _0x3e11a3();
    try {
      return _0x4ce25b(_0xba34ad, _0x1d916a, _0x242e0f, _0x56e106, _0xd6fab0, _0x1ba3a7);
    } catch (_0x3c532b) {
      _0x18d96d(_0x5b6f80);
      if (_0x3c532b !== _0x3c532b + 0 && _0x3c532b !== "longjmp") {
        throw _0x3c532b;
      }
      _0x2517d0(1, 0);
    }
  }
  function _0x1f480c(_0x1de4dd, _0x4986bf, _0x38f937, _0x3a886a, _0x45faea, _0x5c40f1, _0x5bb46e, _0x1a81cb, _0x15b042, _0xa0d975, _0x20d52a, _0x53a038) {
    var _0x363924 = _0x3e11a3();
    try {
      return _0x5e9108(_0x1de4dd, _0x4986bf, _0x38f937, _0x3a886a, _0x45faea, _0x5c40f1, _0x5bb46e, _0x1a81cb, _0x15b042, _0xa0d975, _0x20d52a, _0x53a038);
    } catch (_0x5ab3fe) {
      _0x18d96d(_0x363924);
      if (_0x5ab3fe !== _0x5ab3fe + 0 && _0x5ab3fe !== "longjmp") {
        throw _0x5ab3fe;
      }
      _0x2517d0(1, 0);
    }
  }
  function _0x4aab47(_0x56b964, _0x30436d, _0x3d71ed, _0x419e4d) {
    var _0x9f200 = _0x3e11a3();
    try {
      _0x254e58(_0x56b964, _0x30436d, _0x3d71ed, _0x419e4d);
    } catch (_0xa604ac) {
      _0x18d96d(_0x9f200);
      if (_0xa604ac !== _0xa604ac + 0 && _0xa604ac !== "longjmp") {
        throw _0xa604ac;
      }
      _0x2517d0(1, 0);
    }
  }
  function _0x1edb62(_0xd06e7d, _0x2c182b, _0x31d022, _0xa86f9b, _0x1512f9, _0x18d391, _0x522ea2, _0x20a78d) {
    var _0x20cc9a = _0x3e11a3();
    try {
      _0x317626(_0xd06e7d, _0x2c182b, _0x31d022, _0xa86f9b, _0x1512f9, _0x18d391, _0x522ea2, _0x20a78d);
    } catch (_0x374606) {
      _0x18d96d(_0x20cc9a);
      if (_0x374606 !== _0x374606 + 0 && _0x374606 !== "longjmp") {
        throw _0x374606;
      }
      _0x2517d0(1, 0);
    }
  }
  function _0x2d1d54(_0x2a646d, _0x502bc9, _0x28d1fc, _0x3fb60e, _0x2346e8, _0x4abd1e, _0x2f00c4, _0x9c9595, _0x50a690, _0x15d938, _0x1fe9a6) {
    var _0x1246d3 = _0x3e11a3();
    try {
      return _0x50ed8b(_0x2a646d, _0x502bc9, _0x28d1fc, _0x3fb60e, _0x2346e8, _0x4abd1e, _0x2f00c4, _0x9c9595, _0x50a690, _0x15d938, _0x1fe9a6);
    } catch (_0x3889df) {
      _0x18d96d(_0x1246d3);
      if (_0x3889df !== _0x3889df + 0 && _0x3889df !== "longjmp") {
        throw _0x3889df;
      }
      _0x2517d0(1, 0);
    }
  }
  function _0x5ba602(_0x334436, _0xe0ff06, _0x2907bd, _0x534105, _0x3263cd, _0x24cb4a, _0x1e38f0, _0xe92178, _0x1d3119, _0x96ec1c, _0x374dc7) {
    var _0x1b0c06 = _0x3e11a3();
    try {
      _0x56e40f(_0x334436, _0xe0ff06, _0x2907bd, _0x534105, _0x3263cd, _0x24cb4a, _0x1e38f0, _0xe92178, _0x1d3119, _0x96ec1c, _0x374dc7);
    } catch (_0x3ef7e1) {
      _0x18d96d(_0x1b0c06);
      if (_0x3ef7e1 !== _0x3ef7e1 + 0 && _0x3ef7e1 !== "longjmp") {
        throw _0x3ef7e1;
      }
      _0x2517d0(1, 0);
    }
  }
  function _0x417358(_0x56dadf, _0x3d1cf0, _0x5113e2, _0x29c41f, _0x21c3ce, _0x404779, _0x53d836, _0x58f437) {
    var _0x3cd5ba = _0x3e11a3();
    try {
      _0x46949e(_0x56dadf, _0x3d1cf0, _0x5113e2, _0x29c41f, _0x21c3ce, _0x404779, _0x53d836, _0x58f437);
    } catch (_0x16aaf5) {
      _0x18d96d(_0x3cd5ba);
      if (_0x16aaf5 !== _0x16aaf5 + 0 && _0x16aaf5 !== "longjmp") {
        throw _0x16aaf5;
      }
      _0x2517d0(1, 0);
    }
  }
  function _0x1d1229(_0x4744a9, _0x821cd8, _0x5bed6a, _0x4531db, _0x3cb548, _0x22bf5f, _0x7458dd, _0xb8ab3e, _0x36b182, _0x252358, _0x5c8d8f) {
    var _0x5eb4be = _0x3e11a3();
    try {
      _0x22d751(_0x4744a9, _0x821cd8, _0x5bed6a, _0x4531db, _0x3cb548, _0x22bf5f, _0x7458dd, _0xb8ab3e, _0x36b182, _0x252358, _0x5c8d8f);
    } catch (_0x26132d) {
      _0x18d96d(_0x5eb4be);
      if (_0x26132d !== _0x26132d + 0 && _0x26132d !== "longjmp") {
        throw _0x26132d;
      }
      _0x2517d0(1, 0);
    }
  }
  function _0x4bda5c(_0x2aaa2a, _0x1a3a87, _0x7c0e17, _0x54f6e2, _0x141213, _0x5c6b24, _0x1679ee) {
    var _0x57a7a6 = _0x3e11a3();
    try {
      return _0x1932d2(_0x2aaa2a, _0x1a3a87, _0x7c0e17, _0x54f6e2, _0x141213, _0x5c6b24, _0x1679ee);
    } catch (_0x1d72dd) {
      _0x18d96d(_0x57a7a6);
      if (_0x1d72dd !== _0x1d72dd + 0 && _0x1d72dd !== "longjmp") {
        throw _0x1d72dd;
      }
      _0x2517d0(1, 0);
    }
  }
  function _0x305f78(_0x1c6ac9, _0x10ad37, _0x130626, _0x7039f2, _0x4b73cb, _0x35501f) {
    var _0x3c2bc3 = _0x3e11a3();
    try {
      return _0x556786(_0x1c6ac9, _0x10ad37, _0x130626, _0x7039f2, _0x4b73cb, _0x35501f);
    } catch (_0x2354ea) {
      _0x18d96d(_0x3c2bc3);
      if (_0x2354ea !== _0x2354ea + 0 && _0x2354ea !== "longjmp") {
        throw _0x2354ea;
      }
      _0x2517d0(1, 0);
    }
  }
  function _0xed110d(_0x2ea884, _0x467889, _0x10c0e4, _0x1e64dc, _0x10f646, _0x1848bb, _0xec7fa4, _0x1d48c3, _0x2de1fc, _0x357388) {
    var _0x51bc73 = _0x3e11a3();
    try {
      _0x2c668c(_0x2ea884, _0x467889, _0x10c0e4, _0x1e64dc, _0x10f646, _0x1848bb, _0xec7fa4, _0x1d48c3, _0x2de1fc, _0x357388);
    } catch (_0x3e27e4) {
      _0x18d96d(_0x51bc73);
      if (_0x3e27e4 !== _0x3e27e4 + 0 && _0x3e27e4 !== "longjmp") {
        throw _0x3e27e4;
      }
      _0x2517d0(1, 0);
    }
  }
  function _0x3fdc19(_0x5ccaf9, _0x3a8afb, _0xb7d989, _0x1be648, _0x2ab61f, _0x303fee, _0x2ae305, _0x3b43e0, _0xfbabf7, _0x156537, _0x576dd5, _0x1a17d1) {
    var _0x54d822 = _0x3e11a3();
    try {
      _0x23d678(_0x5ccaf9, _0x3a8afb, _0xb7d989, _0x1be648, _0x2ab61f, _0x303fee, _0x2ae305, _0x3b43e0, _0xfbabf7, _0x156537, _0x576dd5, _0x1a17d1);
    } catch (_0x191de4) {
      _0x18d96d(_0x54d822);
      if (_0x191de4 !== _0x191de4 + 0 && _0x191de4 !== "longjmp") {
        throw _0x191de4;
      }
      _0x2517d0(1, 0);
    }
  }
  function _0xb1c453(_0x1d7583, _0x13e948, _0xd32f6f, _0x52ee6d, _0x2fd27c, _0x286f11, _0x1281d6, _0x30d612) {
    var _0x2e8e83 = _0x3e11a3();
    try {
      return _0x1f9c60(_0x1d7583, _0x13e948, _0xd32f6f, _0x52ee6d, _0x2fd27c, _0x286f11, _0x1281d6, _0x30d612);
    } catch (_0x7e5ebc) {
      _0x18d96d(_0x2e8e83);
      if (_0x7e5ebc !== _0x7e5ebc + 0 && _0x7e5ebc !== "longjmp") {
        throw _0x7e5ebc;
      }
      _0x2517d0(1, 0);
    }
  }
  function _0x5de5ae(_0x4ce2b3, _0x2c3a96, _0x423dcf, _0x2dc347, _0x1dee5e, _0xbde0d7, _0x3ac7c7, _0x2098e7, _0x2a5fdd) {
    var _0x5e1002 = _0x3e11a3();
    try {
      _0x501367(_0x4ce2b3, _0x2c3a96, _0x423dcf, _0x2dc347, _0x1dee5e, _0xbde0d7, _0x3ac7c7, _0x2098e7, _0x2a5fdd);
    } catch (_0x2ccc43) {
      _0x18d96d(_0x5e1002);
      if (_0x2ccc43 !== _0x2ccc43 + 0 && _0x2ccc43 !== "longjmp") {
        throw _0x2ccc43;
      }
      _0x2517d0(1, 0);
    }
  }
  function _0x43a106(_0x869550, _0xc0d356, _0x115b43, _0x310dad, _0x36ffa5, _0x398af5, _0x32c276, _0xb50d32) {
    var _0x1557c9 = _0x3e11a3();
    try {
      return _0x2c4570(_0x869550, _0xc0d356, _0x115b43, _0x310dad, _0x36ffa5, _0x398af5, _0x32c276, _0xb50d32);
    } catch (_0x46daa8) {
      _0x18d96d(_0x1557c9);
      if (_0x46daa8 !== _0x46daa8 + 0 && _0x46daa8 !== "longjmp") {
        throw _0x46daa8;
      }
      _0x2517d0(1, 0);
    }
  }
  _0x51dce1.ccall = _0x15f00b;
  _0x51dce1.cwrap = _0xb9c464;
  _0x51dce1.stackTrace = _0x382d99;
  _0x51dce1.addRunDependency = _0x3102c9;
  _0x51dce1.removeRunDependency = _0xe5d65b;
  _0x51dce1.FS_createPath = _0x4c1d54.createPath;
  _0x51dce1.FS_createDataFile = _0x4c1d54.createDataFile;
  _0x51dce1.stackTrace = _0x382d99;
  var _0x11fd14;
  function _0x2182bf(_0x199a70) {
    this.name = "ExitStatus";
    this.message = "Program terminated with exit(" + _0x199a70 + ")";
    this.status = _0x199a70;
  }
  var _0x55a3a4 = false;
  _0x127f25 = function _0x10b431() {
    if (!_0x11fd14) {
      _0x562681();
    }
    if (!_0x11fd14) {
      _0x127f25 = _0x10b431;
    }
  };
  function _0xc875b3(_0x29b98f) {
    var _0x279b99 = _0x51dce1._main;
    _0x29b98f = _0x29b98f || [];
    var _0x53e540 = _0x29b98f.length + 1;
    var _0x536495 = _0x5c3d23((_0x53e540 + 1) * 4);
    _0x1b79ed[_0x536495 >> 2] = _0x2e7a5f(_0x1450e0);
    for (var _0x5416e5 = 1; _0x5416e5 < _0x53e540; _0x5416e5++) {
      _0x1b79ed[(_0x536495 >> 2) + _0x5416e5] = _0x2e7a5f(_0x29b98f[_0x5416e5 - 1]);
    }
    _0x1b79ed[(_0x536495 >> 2) + _0x53e540] = 0;
    try {
      var _0x39e667 = _0x279b99(_0x53e540, _0x536495);
      _0x510e65(_0x39e667, true);
    } catch (_0x143156) {
      if (_0x143156 instanceof _0x2182bf) {
        return;
      } else if (_0x143156 == "unwind") {
        return;
      } else {
        var _0x88d653 = _0x143156;
        if (_0x143156 && typeof _0x143156 === "object" && _0x143156.stack) {
          _0x88d653 = [_0x143156, _0x143156.stack];
        }
        _0x235a52("exception thrown: " + _0x88d653);
        _0x18a18e(1, _0x143156);
      }
    } finally {
      _0x55a3a4 = true;
    }
  }
  function _0x562681(_0x3736d4) {
    _0x3736d4 = _0x3736d4 || _0x37ceca;
    if (_0xc52bf5 > 0) {
      return;
    }
    _0x5a63f8();
    if (_0xc52bf5 > 0) {
      return;
    }
    function _0x193d55() {
      if (_0x11fd14) {
        return;
      }
      _0x11fd14 = true;
      _0x51dce1.calledRun = true;
      if (_0x23cc17) {
        return;
      }
      _0x1dc4dd();
      _0x47e144();
      if (_0x51dce1.onRuntimeInitialized) {
        _0x51dce1.onRuntimeInitialized();
      }
      if (_0x8b79de) {
        _0xc875b3(_0x3736d4);
      }
      _0x13f8b7();
    }
    if (_0x51dce1.setStatus) {
      _0x51dce1.setStatus("Running...");
      setTimeout(function () {
        setTimeout(function () {
          _0x51dce1.setStatus("");
        }, 1);
        _0x193d55();
      }, 1);
    } else {
      _0x193d55();
    }
  }
  _0x51dce1.run = _0x562681;
  function _0x510e65(_0xa0c759, _0x1996e2) {
    _0x119526 = _0xa0c759;
    if (_0x1996e2 && _0xf7d4bb() && _0xa0c759 === 0) {
      return;
    }
    if (_0xf7d4bb()) {} else {
      _0x39f2b7();
      if (_0x51dce1.onExit) {
        _0x51dce1.onExit(_0xa0c759);
      }
      _0x23cc17 = true;
    }
    _0x18a18e(_0xa0c759, new _0x2182bf(_0xa0c759));
  }
  if (_0x51dce1.preInit) {
    if (typeof _0x51dce1.preInit == "function") {
      _0x51dce1.preInit = [_0x51dce1.preInit];
    }
    while (_0x51dce1.preInit.length > 0) {
      _0x51dce1.preInit.pop()();
    }
  }
  var _0x8b79de = true;
  if (_0x51dce1.noInitialRun) {
    _0x8b79de = false;
  }
  _0x562681();
}
config.sourceHtml = "REJVQUVUTWNid3hGTUVwd0p6d0FCUXNDRDFnS1hBY2REQlVkQmtzR0dSSWtUVFlTQ2lwUQ==";
window.GMPERFORM = {};
window.GMPERFORM.LOAD = Date.now();
if (!window.GMSOFT_OPTIONS) {
  window.GMSOFT_OPTIONS = config;
  window.GMSOFT_OPTIONS.domainHost = "https://gamea.azgame.io";
}
config.referrer = document.referrer;
function gmdebugtime(_0x546cbb) {
  console.log("_TIME_" + _0x546cbb + ":" + (Date.now() - window.GMPERFORM.LOAD));
}
function gmdebug(_0x5848d8) {
  console.log(_0x5848d8);
}
function gmEvent(_0x566824, _0x3e877c) {
  loadGMData(_0x566824, _0x3e877c);
}
function gmStartGame(_0x335145) {
  _0x335145();
}
function gmStartAds(_0x47bbbb) {
  _0x47bbbb();
}
let fireFPS = 0;
async function loadGMData(_0x5108b3, _0x2e5d94) {
  try {
    if (!config.eventAPI) {
      return;
    }
    if (!config.eventLog && _0x5108b3 != "document-ready" && _0x5108b3 != "start-game" && _0x5108b3 != "unload-game") {
      return;
    }
    if (_0x5108b3 == "fps") {
      try {
        let _0xa1340e = _0x2e5d94.split("|");
        if (_0xa1340e.length >= 2) {
          firebaseLogEventParameter("timecounter", _0xa1340e[0]);
          if (fireFPS < 2) {
            fireFPS++;
            firebaseLogEventParameter("fps", _0xa1340e[1]);
          }
        }
      } catch (_0x11f80a) {
        console.log("Error extracting time from abc:", _0x11f80a.message);
      }
    }
    let _0x25be99 = "";
    if (_0x2e5d94) {
      _0x25be99 = "&msg=" + encodeURIComponent(xorEncryptMsg(_0x2e5d94));
    }
    _0x25be99 += "&time=" + encodeURIComponent(Date.now() - window.GMPERFORM.LOAD);
    _0x25be99 += "&gid=" + config.gameId;
    if (_0x5108b3 == "ban-game" || _0x5108b3 == "document-ready" || _0x5108b3 == "start-game") {
      _0x25be99 += "&wtop=" + "azgames.io";
      _0x25be99 += "&hn=" + "https://gamea.azgame.io";
      _0x25be99 += "&referrer=" + config.referrer;
    }
    let _0x4cb7ad = "&data=" + btoa(_0x25be99);
    let _0x2424e6 = config.eventAPI + "?event=" + _0x5108b3 + _0x4cb7ad;
    let _0x4baa06 = new XMLHttpRequest();
    _0x4baa06.open("GET", _0x2424e6);
    _0x4baa06.onreadystatechange = function () {
      if (_0x4baa06.readyState !== 4) {
        return;
      }
      if (_0x4baa06.status === 200) {
        console.log(_0x4baa06.responseText);
      } else {
        console.log("HTTP error", _0x4baa06.status, _0x4baa06.statusText);
      }
    };
    _0x4baa06.send();
  } catch (_0x5baab5) {}
}
function xorEncryptMsg(_0x58b5bf) {
  let _0x56558a = "gmdata@&!message@!3!@";
  let _0x364a06 = "";
  for (let _0x435945 = 0; _0x435945 < _0x58b5bf.length; _0x435945++) {
    const _0xbc1767 = _0x58b5bf.charCodeAt(_0x435945) ^ _0x56558a.charCodeAt(_0x435945 % _0x56558a.length);
    _0x364a06 += String.fromCharCode(_0xbc1767);
  }
  return btoa(_0x364a06);
}
function check_event_log() {
  const _0x12cb34 = window.location.search;
  const _0x3fe090 = new URLSearchParams(_0x12cb34);
  if (_0x3fe090.has("e")) {
    config.eventLog = true;
  }
}
check_event_log();
function executeCode(_0xeb0c4e) {
  try {
    const _0x1c8591 = eval(_0xeb0c4e);
    gmdebug("Result:", _0x1c8591);
    return _0x1c8591;
  } catch (_0x5aa087) {
    gmdebug("Error executing code:", _0x5aa087);
  }
}
window.addEventListener("beforeunload", function (_0x13c9e2) {
  gmEvent("unload-game");
});
append_function();
function append_function() {
  setTimeout(function () {
    try {
      let _0x277200 = "data@&@#$@#^FFgdfg!1estimate";
      let _0x5320fd = "data@&&%^*((*^&^&766))nNhZmRzZGY=";
      let _0x3ec077 = executeCode("atob(atob(\"" + window.GMSOFT_OPTIONS.sourceHtml + "\"))");
      let _0x3a7b5b = _0x5320fd;
      let _0x3f1e56 = "";
      for (let _0x1e66c7 = 0; _0x1e66c7 < _0x3ec077.length; _0x1e66c7++) {
        const _0x40512e = _0x3ec077.charCodeAt(_0x1e66c7) ^ _0x277200.charCodeAt(_0x1e66c7 % _0x277200.length);
        _0x3f1e56 += String.fromCharCode(_0x40512e);
      }
      sourceHtml = _0x3f1e56;
      let _0x19f955 = document.getElementById("gmsoft-jssdk");
      if (!_0x19f955 || _0x19f955.src != sourceHtml) {
      }
    } catch (_0x2a0448) {
    }
  }, 3000);
}