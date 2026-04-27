function unityFramework(_0x25e483) {
  var _0x25e483 = typeof _0x25e483 !== "undefined" ? _0x25e483 : {};
  _0x25e483.USER_JSPRE_PLACEHOLDER = "USER_JSPRE_PLACEHOLDER";
  function _0x162dec(_0xdb835e, _0x2c037f) {
    _0x29f45c("The JavaScript function 'Pointer_stringify(ptrToSomeCString)' is obsoleted and will be removed in a future Unity version. Please call 'UTF8ToString(ptrToSomeCString)' instead.");
    return _0xdfb7b2(_0xdb835e, _0x2c037f);
  }
  _0x25e483.Pointer_stringify = _0x162dec;
  var _0x24b665 = "(^|\\n)(\\s+at\\s+|)jsStackTrace(\\s+\\(|@)([^\\n]+):\\d+:\\d+(\\)|)(\\n|$)";
  var _0x39ad88 = _0x30d31d().match(new RegExp(_0x24b665));
  if (_0x39ad88) {
    _0x25e483.stackTraceRegExp = new RegExp(_0x24b665.replace("([^\\n]+)", _0x39ad88[4].replace(/[\\^${}[\]().*+?|]/g, "\\$&")).replace("jsStackTrace", "[^\\n]+"));
  }
  function _0x5d461b(_0x2c2c4c) {
    if (_0x2219fa) {
      return;
    }
    _0x2219fa = true;
    _0x33a2ee = 1;
    if (typeof ENVIRONMENT_IS_PTHREAD !== "undefined" && ENVIRONMENT_IS_PTHREAD) {
      console.error("Pthread aborting at " + new Error().stack);
    }
    if (_0x2c2c4c !== undefined) {
      _0x376d62(_0x2c2c4c);
      _0x1af4bd(_0x2c2c4c);
      _0x2c2c4c = JSON.stringify(_0x2c2c4c);
    } else {
      _0x2c2c4c = "";
    }
    var _0x221b31 = "abort(" + _0x2c2c4c + ") at " + _0x27bd0f();
    if (_0x25e483.abortHandler && _0x25e483.abortHandler(_0x221b31)) {
      return;
    }
    throw _0x221b31;
  }
  _0x25e483.SetFullscreen = function (_0x4a0b2a) {
    if (typeof _0x45d7af === "undefined" || !_0x45d7af) {
      console.log("Runtime not initialized yet.");
    } else if (typeof _0x2015e4 === "undefined") {
      console.log("Player not loaded yet.");
    } else {
      var _0x523016 = _0x2015e4.canPerformEventHandlerRequests;
      _0x2015e4.canPerformEventHandlerRequests = function () {
        return 1;
      };
      _0x25e483.ccall("SetFullscreen", null, ["number"], [_0x4a0b2a]);
      _0x2015e4.canPerformEventHandlerRequests = _0x523016;
    }
  };
  if (typeof ENVIRONMENT_IS_PTHREAD === "undefined" || !ENVIRONMENT_IS_PTHREAD) {
    _0x25e483.preRun.push(function () {
      var _0x30492e = _0x25e483.unityFileSystemInit || function () {
        _0x4de3dc.mkdir("/idbfs");
        _0x4de3dc.mount(_0x3b79bb, {}, "/idbfs");
        _0x25e483.addRunDependency("JS_FileSystem_Mount");
        _0x4de3dc.syncfs(true, function (_0x24c43b) {
          if (_0x24c43b) {
            console.log("IndexedDB is not available. Data will not persist in cache and PlayerPrefs will not be saved.");
          }
          _0x25e483.removeRunDependency("JS_FileSystem_Mount");
        });
      };
      _0x30492e();
    });
  }
  var _0x9dbeb2 = [];
  var _0x476672 = false;
  var _0x4e66d6;
  var _0xbd8e6c = null;
  function _0x3502d8(_0x42750f) {
    var _0x5e5b43 = Object.keys(_0x9dbeb2);
    for (var _0x19ab78 = 0; _0x19ab78 < _0x5e5b43.length; ++_0x19ab78) {
      var _0x1b2bed = _0x9dbeb2[_0x5e5b43[_0x19ab78]];
      if (_0x1b2bed.deviceId && _0x1b2bed.deviceId == _0x42750f.deviceId) {
        return _0x1b2bed;
      }
    }
    for (var _0x19ab78 = 0; _0x19ab78 < _0x5e5b43.length; ++_0x19ab78) {
      var _0x1b2bed = _0x9dbeb2[_0x5e5b43[_0x19ab78]];
      if (_0x1b2bed == _0x42750f) {
        return _0x1b2bed;
      }
    }
    for (var _0x19ab78 = 0; _0x19ab78 < _0x5e5b43.length; ++_0x19ab78) {
      var _0x1b2bed = _0x9dbeb2[_0x5e5b43[_0x19ab78]];
      if (_0x1b2bed.label && _0x1b2bed.label == _0x42750f.label) {
        return _0x1b2bed;
      }
    }
    for (var _0x19ab78 = 0; _0x19ab78 < _0x5e5b43.length; ++_0x19ab78) {
      var _0x1b2bed = _0x9dbeb2[_0x5e5b43[_0x19ab78]];
      if (_0x1b2bed.groupId && _0x1b2bed.kind && _0x1b2bed.groupId == _0x42750f.groupId && _0x1b2bed.kind == _0x42750f.kind) {
        return _0x1b2bed;
      }
    }
  }
  function _0xe44c3() {
    for (var _0x177273 = 0;; ++_0x177273) {
      if (!_0x9dbeb2[_0x177273]) {
        return _0x177273;
      }
    }
  }
  function _0x1b0c38(_0x5a9205) {
    _0x4e66d6();
    _0x9dbeb2 = [];
    var _0x2cc66e = {};
    var _0x552fc7 = [];
    _0x5a9205.forEach(function (_0x2a724a) {
      if (_0x2a724a.kind === "videoinput") {
        var _0x26dc71 = _0x3502d8(_0x2a724a);
        if (_0x26dc71) {
          _0x2cc66e[_0x26dc71.id] = _0x26dc71;
        } else {
          _0x552fc7.push(_0x2a724a);
        }
      }
    });
    _0x9dbeb2 = _0x2cc66e;
    _0x552fc7.forEach(function (_0xfcc3c) {
      if (!_0xfcc3c.id) {
        _0xfcc3c.id = _0xe44c3();
        _0xfcc3c.name = _0xfcc3c.label || "Video input #" + (_0xfcc3c.id + 1);
        _0xfcc3c.isFrontFacing = _0xfcc3c.name.toLowerCase().includes("front") || !_0xfcc3c.name.toLowerCase().includes("front") && !_0xfcc3c.name.toLowerCase().includes("back");
        _0x9dbeb2[_0xfcc3c.id] = _0xfcc3c;
      }
    });
  }
  function _0x2b6a84() {
    if (!_0x9dbeb2) {
      return;
    }
    navigator.mediaDevices.enumerateDevices().then(function (_0x4f5ff4) {
      _0x1b0c38(_0x4f5ff4);
      _0x476672 = true;
    }).catch(function (_0x47c45e) {
      console.warn("Unable to enumerate media devices: " + _0x47c45e + "\nWebcams will not be available.");
      _0xbdeaf2();
    });
    if (/Firefox/.test(navigator.userAgent)) {
      setTimeout(_0x2b6a84, 60000);
      _0x29f45c("Applying workaround to Firefox bug https://bugzilla.mozilla.org/show_bug.cgi?id=1397977");
    }
  }
  function _0xbdeaf2() {
    if (navigator.mediaDevices && navigator.mediaDevices.removeEventListener) {
      navigator.mediaDevices.removeEventListener("devicechange", _0x2b6a84);
    }
    _0x9dbeb2 = null;
  }
  _0x25e483.disableAccessToMediaDevices = _0xbdeaf2;
  if (!navigator.mediaDevices) {
    console.warn("navigator.mediaDevices not supported by this browser. Webcam access will not be available." + (location.protocol == "https:" ? "" : " Try hosting the page over HTTPS, because some browsers disable webcam access when insecure HTTP is being used."));
    _0xbdeaf2();
  } else if (typeof ENVIRONMENT_IS_PTHREAD === "undefined" || !ENVIRONMENT_IS_PTHREAD) {
    setTimeout(function () {
      try {
        _0x5884c7("enumerateMediaDevices");
        _0x4e66d6 = function () {
          if (_0xbd8e6c !== null) {
            clearTimeout(_0xbd8e6c);
          }
          _0x21f06d("enumerateMediaDevices");
          if (navigator.mediaDevices) {
            console.log("navigator.mediaDevices support available");
          }
          _0x4e66d6 = function () {};
        };
        _0x2b6a84();
        _0xbd8e6c = setTimeout(_0x4e66d6, 1000);
        navigator.mediaDevices.addEventListener("devicechange", _0x2b6a84);
      } catch (_0x5747eb) {
        console.warn("Unable to enumerate media devices: " + _0x5747eb);
        _0xbdeaf2();
      }
    }, 0);
  }
  function _0x3799a7(_0x27dd61, _0x4bbb18, _0x30c22c) {
    var _0x478c83 = _0x568514(_0x4bbb18);
    var _0xff0aa2 = _0x568514(_0x27dd61);
    var _0x533c13 = 0;
    try {
      if (_0x30c22c === undefined) {
        _0xaf9aea(_0xff0aa2, _0x478c83);
      } else if (typeof _0x30c22c === "string") {
        _0x533c13 = _0x568514(_0x30c22c);
        _0x1a3b7a(_0xff0aa2, _0x478c83, _0x533c13);
      } else if (typeof _0x30c22c === "number") {
        _0x21dd66(_0xff0aa2, _0x478c83, _0x30c22c);
      } else {
        throw "" + _0x30c22c + " is does not have a type which is supported by SendMessage.";
      }
    } finally {
      _0x41b1b9(_0x533c13);
      _0x41b1b9(_0xff0aa2);
      _0x41b1b9(_0x478c83);
    }
  }
  _0x25e483.SendMessage = _0x3799a7;
  var _0x4e703d = {};
  var _0x4497bb;
  for (_0x4497bb in _0x25e483) {
    if (_0x25e483.hasOwnProperty(_0x4497bb)) {
      _0x4e703d[_0x4497bb] = _0x25e483[_0x4497bb];
    }
  }
  var _0x21a4ef = [];
  var _0x2e8110 = "./this.program";
  function _0x28cf7b(_0x589276, _0x2202b7) {
    throw _0x2202b7;
  }
  var _0x485212 = false;
  var _0x17bf79 = false;
  var _0x4b3166 = false;
  var _0x266956 = false;
  _0x485212 = typeof window === "object";
  _0x17bf79 = typeof importScripts === "function";
  _0x4b3166 = typeof process === "object" && typeof process.versions === "object" && typeof process.versions.node === "string";
  _0x266956 = !_0x485212 && !_0x4b3166 && !_0x17bf79;
  var _0x4d0078 = "";
  function _0x47ad8f(_0x1329bb) {
    if (_0x25e483.locateFile) {
      return _0x25e483.locateFile(_0x1329bb, _0x4d0078);
    }
    return _0x4d0078 + _0x1329bb;
  }
  var _0x36d9d2;
  var _0x1d302b;
  var _0x2890a0;
  var _0x1ca0bd;
  var _0x5906d0;
  var _0x188a1d;
  if (_0x4b3166) {
    if (_0x17bf79) {
      _0x4d0078 = require("path").dirname(_0x4d0078) + "/";
    } else {
      _0x4d0078 = __dirname + "/";
    }
    _0x36d9d2 = function _0x5474dc(_0x47368e, _0x3eaef6) {
      if (!_0x5906d0) {
        _0x5906d0 = require("fs");
      }
      if (!_0x188a1d) {
        _0x188a1d = require("path");
      }
      _0x47368e = _0x188a1d.normalize(_0x47368e);
      return _0x5906d0.readFileSync(_0x47368e, _0x3eaef6 ? null : "utf8");
    };
    _0x2890a0 = function _0x161a40(_0x13a5c7) {
      var _0x41a7d2 = _0x36d9d2(_0x13a5c7, true);
      if (!_0x41a7d2.buffer) {
        _0x41a7d2 = new Uint8Array(_0x41a7d2);
      }
      _0x37a78f(_0x41a7d2.buffer);
      return _0x41a7d2;
    };
    if (process.argv.length > 1) {
      _0x2e8110 = process.argv[1].replace(/\\/g, "/");
    }
    _0x21a4ef = process.argv.slice(2);
    if (typeof module !== "undefined") {
      module.exports = _0x25e483;
    }
    process.on("uncaughtException", function (_0x578910) {
      if (!(_0x578910 instanceof _0x5d5548)) {
        throw _0x578910;
      }
    });
    process.on("unhandledRejection", _0x5d461b);
    _0x28cf7b = function (_0x3562e7) {
      process.exit(_0x3562e7);
    };
    _0x25e483.inspect = function () {
      return "[Emscripten Module object]";
    };
  } else if (_0x266956) {
    if (typeof read != "undefined") {
      _0x36d9d2 = function _0x3eee35(_0x483f41) {
        return read(_0x483f41);
      };
    }
    _0x2890a0 = function _0x23e079(_0x13a1ab) {
      var _0x5812e3;
      if (typeof readbuffer === "function") {
        return new Uint8Array(readbuffer(_0x13a1ab));
      }
      _0x5812e3 = read(_0x13a1ab, "binary");
      _0x37a78f(typeof _0x5812e3 === "object");
      return _0x5812e3;
    };
    if (typeof scriptArgs != "undefined") {
      _0x21a4ef = scriptArgs;
    } else if (typeof arguments != "undefined") {
      _0x21a4ef = arguments;
    }
    if (typeof quit === "function") {
      _0x28cf7b = function (_0x37ab1b) {
        quit(_0x37ab1b);
      };
    }
    if (typeof print !== "undefined") {
      if (typeof console === "undefined") {
        console = {};
      }
      console.log = print;
      console.warn = console.error = typeof printErr !== "undefined" ? printErr : print;
    }
  } else if (_0x485212 || _0x17bf79) {
    if (_0x17bf79) {
      _0x4d0078 = "https://games.1games.io";
    } else if (typeof document !== "undefined" && document.currentScript) {
      _0x4d0078 = document.currentScript.src;
    }
    if (_0x4d0078.indexOf("blob:") !== 0) {
      _0x4d0078 = _0x4d0078.substr(0, _0x4d0078.lastIndexOf("/") + 1);
    } else {
      _0x4d0078 = "";
    }
    {
      _0x36d9d2 = function (_0xb9372f) {
        var _0x2c96d2 = new XMLHttpRequest();
        _0x2c96d2.open("GET", _0xb9372f, false);
        _0x2c96d2.send(null);
        return _0x2c96d2.responseText;
      };
      if (_0x17bf79) {
        _0x2890a0 = function (_0x5c26a0) {
          var _0xbea16b = new XMLHttpRequest();
          _0xbea16b.open("GET", _0x5c26a0, false);
          _0xbea16b.responseType = "arraybuffer";
          _0xbea16b.send(null);
          return new Uint8Array(_0xbea16b.response);
        };
      }
      _0x1d302b = function (_0x5899f5, _0x5646ed, _0x29d47c) {
        var _0x317b3e = new XMLHttpRequest();
        _0x317b3e.open("GET", _0x5899f5, true);
        _0x317b3e.responseType = "arraybuffer";
        _0x317b3e.onload = function () {
          if (_0x317b3e.status == 200 || _0x317b3e.status == 0 && _0x317b3e.response) {
            _0x5646ed(_0x317b3e.response);
            return;
          }
          _0x29d47c();
        };
        _0x317b3e.onerror = _0x29d47c;
        _0x317b3e.send(null);
      };
    }
    _0x1ca0bd = function (_0x366acc) {
      document.title = _0x366acc;
    };
  } else {}
  var _0x376d62 = _0x25e483.print || console.log.bind(console);
  var _0x1af4bd = _0x25e483.printErr || console.warn.bind(console);
  for (_0x4497bb in _0x4e703d) {
    if (_0x4e703d.hasOwnProperty(_0x4497bb)) {
      _0x25e483[_0x4497bb] = _0x4e703d[_0x4497bb];
    }
  }
  _0x4e703d = null;
  if (_0x25e483.arguments) {
    _0x21a4ef = _0x25e483.arguments;
  }
  if (_0x25e483.thisProgram) {
    _0x2e8110 = _0x25e483.thisProgram;
  }
  if (_0x25e483.quit) {
    _0x28cf7b = _0x25e483.quit;
  }
  var _0x49bf3d = 16;
  function _0x3202cc(_0xa8ed5f, _0x412eaf) {
    if (!_0x412eaf) {
      _0x412eaf = _0x49bf3d;
    }
    return Math.ceil(_0xa8ed5f / _0x412eaf) * _0x412eaf;
  }
  function _0x29f45c(_0x1d0486) {
    if (!_0x29f45c.shown) {
      _0x29f45c.shown = {};
    }
    if (!_0x29f45c.shown[_0x1d0486]) {
      _0x29f45c.shown[_0x1d0486] = 1;
      _0x1af4bd(_0x1d0486);
    }
  }
  var _0x5347cb = 0;
  function _0x592137(_0x3343c6) {
    _0x5347cb = _0x3343c6;
  }
  function _0xd7413f() {
    return _0x5347cb;
  }
  var _0x25bf1a;
  if (_0x25e483.wasmBinary) {
    _0x25bf1a = _0x25e483.wasmBinary;
  }
  var _0x3031dd = _0x25e483.noExitRuntime || true;
  if (typeof WebAssembly !== "object") {
    _0x5d461b("no native wasm support detected");
  }
  var _0x28d294;
  var _0x2219fa = false;
  var _0x33a2ee;
  function _0x37a78f(_0x2eade4, _0x333d4a) {
    if (!_0x2eade4) {
      _0x5d461b("Assertion failed: " + _0x333d4a);
    }
  }
  function _0x201bf8(_0x11d238) {
    var _0x1c67b8 = _0x25e483["_" + _0x11d238];
    _0x37a78f(_0x1c67b8, "Cannot call unknown function " + _0x11d238 + ", make sure it is exported");
    return _0x1c67b8;
  }
  function _0x4d5962(_0x3fadf0, _0x3804bf, _0x10b312, _0x36bf23, _0x5d1223) {
    var _0x2ebfa3 = {
      string: function (_0x4582d8) {
        var _0x28f395 = 0;
        if (_0x4582d8 !== null && _0x4582d8 !== undefined && _0x4582d8 !== 0) {
          var _0x88338f = (_0x4582d8.length << 2) + 1;
          _0x28f395 = _0x216ace(_0x88338f);
          _0x517360(_0x4582d8, _0x28f395, _0x88338f);
        }
        return _0x28f395;
      },
      array: function (_0x178556) {
        var _0x37e4aa = _0x216ace(_0x178556.length);
        _0x546ee6(_0x178556, _0x37e4aa);
        return _0x37e4aa;
      }
    };
    function _0x2b8531(_0x3208d9) {
      if (_0x3804bf === "string") {
        return _0xdfb7b2(_0x3208d9);
      }
      if (_0x3804bf === "boolean") {
        return Boolean(_0x3208d9);
      }
      return _0x3208d9;
    }
    var _0x338b50 = _0x201bf8(_0x3fadf0);
    var _0x2e8d59 = [];
    var _0x5cc7ca = 0;
    if (_0x36bf23) {
      for (var _0x5da95e = 0; _0x5da95e < _0x36bf23.length; _0x5da95e++) {
        var _0x1a0b63 = _0x2ebfa3[_0x10b312[_0x5da95e]];
        if (_0x1a0b63) {
          if (_0x5cc7ca === 0) {
            _0x5cc7ca = _0x19cca3();
          }
          _0x2e8d59[_0x5da95e] = _0x1a0b63(_0x36bf23[_0x5da95e]);
        } else {
          _0x2e8d59[_0x5da95e] = _0x36bf23[_0x5da95e];
        }
      }
    }
    var _0x2d8c0a = _0x338b50.apply(null, _0x2e8d59);
    _0x2d8c0a = _0x2b8531(_0x2d8c0a);
    if (_0x5cc7ca !== 0) {
      _0x4cb3d3(_0x5cc7ca);
    }
    return _0x2d8c0a;
  }
  function _0x45f53a(_0x4d4ec3, _0x309c03, _0x17c800, _0x50fec1) {
    _0x17c800 = _0x17c800 || [];
    var _0x47d627 = _0x17c800.every(function (_0x545558) {
      return _0x545558 === "number";
    });
    var _0x4dc58a = _0x309c03 !== "string";
    if (_0x4dc58a && _0x47d627 && !_0x50fec1) {
      return _0x201bf8(_0x4d4ec3);
    }
    return function () {
      return _0x4d5962(_0x4d4ec3, _0x309c03, _0x17c800, arguments, _0x50fec1);
    };
  }
  var _0x473b89 = typeof TextDecoder !== "undefined" ? new TextDecoder("utf8") : undefined;
  function _0x21b049(_0x586d2b, _0x30e76a, _0x277ede) {
    var _0x13112f = _0x30e76a + _0x277ede;
    var _0x223a59 = _0x30e76a;
    while (_0x586d2b[_0x223a59] && !(_0x223a59 >= _0x13112f)) {
      ++_0x223a59;
    }
    if (_0x223a59 - _0x30e76a > 16 && _0x586d2b.subarray && _0x473b89) {
      return _0x473b89.decode(_0x586d2b.subarray(_0x30e76a, _0x223a59));
    } else {
      var _0x5c065f = "";
      while (_0x30e76a < _0x223a59) {
        var _0xc9e94d = _0x586d2b[_0x30e76a++];
        if (!(_0xc9e94d & 128)) {
          _0x5c065f += String.fromCharCode(_0xc9e94d);
          continue;
        }
        var _0x5e2c3d = _0x586d2b[_0x30e76a++] & 63;
        if ((_0xc9e94d & 224) == 192) {
          _0x5c065f += String.fromCharCode((_0xc9e94d & 31) << 6 | _0x5e2c3d);
          continue;
        }
        var _0x57c21c = _0x586d2b[_0x30e76a++] & 63;
        if ((_0xc9e94d & 240) == 224) {
          _0xc9e94d = (_0xc9e94d & 15) << 12 | _0x5e2c3d << 6 | _0x57c21c;
        } else {
          _0xc9e94d = (_0xc9e94d & 7) << 18 | _0x5e2c3d << 12 | _0x57c21c << 6 | _0x586d2b[_0x30e76a++] & 63;
        }
        if (_0xc9e94d < 65536) {
          _0x5c065f += String.fromCharCode(_0xc9e94d);
        } else {
          var _0x2e5a80 = _0xc9e94d - 65536;
          _0x5c065f += String.fromCharCode(_0x2e5a80 >> 10 | 55296, _0x2e5a80 & 1023 | 56320);
        }
      }
    }
    return _0x5c065f;
  }
  function _0xdfb7b2(_0x571d97, _0x110823) {
    if (_0x571d97) {
      return _0x21b049(_0xdf86cd, _0x571d97, _0x110823);
    } else {
      return "";
    }
  }
  function _0x538990(_0x3f0c68, _0x8fbd4a, _0x4f6005, _0x58e2db) {
    if (!(_0x58e2db > 0)) {
      return 0;
    }
    var _0x582e40 = _0x4f6005;
    var _0x5e9b7f = _0x4f6005 + _0x58e2db - 1;
    for (var _0xa231ba = 0; _0xa231ba < _0x3f0c68.length; ++_0xa231ba) {
      var _0x261436 = _0x3f0c68.charCodeAt(_0xa231ba);
      if (_0x261436 >= 55296 && _0x261436 <= 57343) {
        var _0x442f83 = _0x3f0c68.charCodeAt(++_0xa231ba);
        _0x261436 = 65536 + ((_0x261436 & 1023) << 10) | _0x442f83 & 1023;
      }
      if (_0x261436 <= 127) {
        if (_0x4f6005 >= _0x5e9b7f) {
          break;
        }
        _0x8fbd4a[_0x4f6005++] = _0x261436;
      } else if (_0x261436 <= 2047) {
        if (_0x4f6005 + 1 >= _0x5e9b7f) {
          break;
        }
        _0x8fbd4a[_0x4f6005++] = _0x261436 >> 6 | 192;
        _0x8fbd4a[_0x4f6005++] = _0x261436 & 63 | 128;
      } else if (_0x261436 <= 65535) {
        if (_0x4f6005 + 2 >= _0x5e9b7f) {
          break;
        }
        _0x8fbd4a[_0x4f6005++] = _0x261436 >> 12 | 224;
        _0x8fbd4a[_0x4f6005++] = _0x261436 >> 6 & 63 | 128;
        _0x8fbd4a[_0x4f6005++] = _0x261436 & 63 | 128;
      } else {
        if (_0x4f6005 + 3 >= _0x5e9b7f) {
          break;
        }
        _0x8fbd4a[_0x4f6005++] = _0x261436 >> 18 | 240;
        _0x8fbd4a[_0x4f6005++] = _0x261436 >> 12 & 63 | 128;
        _0x8fbd4a[_0x4f6005++] = _0x261436 >> 6 & 63 | 128;
        _0x8fbd4a[_0x4f6005++] = _0x261436 & 63 | 128;
      }
    }
    _0x8fbd4a[_0x4f6005] = 0;
    return _0x4f6005 - _0x582e40;
  }
  function _0x517360(_0x3b2d65, _0x114464, _0x451aba) {
    return _0x538990(_0x3b2d65, _0xdf86cd, _0x114464, _0x451aba);
  }
  function _0x576ae2(_0x1aee70) {
    var _0x4e8760 = 0;
    for (var _0x332698 = 0; _0x332698 < _0x1aee70.length; ++_0x332698) {
      var _0x55e848 = _0x1aee70.charCodeAt(_0x332698);
      if (_0x55e848 >= 55296 && _0x55e848 <= 57343) {
        _0x55e848 = 65536 + ((_0x55e848 & 1023) << 10) | _0x1aee70.charCodeAt(++_0x332698) & 1023;
      }
      if (_0x55e848 <= 127) {
        ++_0x4e8760;
      } else if (_0x55e848 <= 2047) {
        _0x4e8760 += 2;
      } else if (_0x55e848 <= 65535) {
        _0x4e8760 += 3;
      } else {
        _0x4e8760 += 4;
      }
    }
    return _0x4e8760;
  }
  function _0x19272c(_0x5120bb) {
    var _0x37da11 = _0x576ae2(_0x5120bb) + 1;
    var _0x2dda17 = _0x434dac(_0x37da11);
    if (_0x2dda17) {
      _0x538990(_0x5120bb, _0x3b8c2f, _0x2dda17, _0x37da11);
    }
    return _0x2dda17;
  }
  function _0x3be7c3(_0x2d20e5) {
    var _0x34bd45 = _0x576ae2(_0x2d20e5) + 1;
    var _0x58f066 = _0x216ace(_0x34bd45);
    _0x538990(_0x2d20e5, _0x3b8c2f, _0x58f066, _0x34bd45);
    return _0x58f066;
  }
  function _0x546ee6(_0x1142cb, _0x554a62) {
    _0x3b8c2f.set(_0x1142cb, _0x554a62);
  }
  function _0x496caa(_0xbed89c, _0x5ac6b0, _0x3f2db8) {
    for (var _0x44cd1f = 0; _0x44cd1f < _0xbed89c.length; ++_0x44cd1f) {
      _0x3b8c2f[_0x5ac6b0++ >> 0] = _0xbed89c.charCodeAt(_0x44cd1f);
    }
    if (!_0x3f2db8) {
      _0x3b8c2f[_0x5ac6b0 >> 0] = 0;
    }
  }
  function _0x5b5276(_0x5a1637, _0x2e9844) {
    if (_0x5a1637 % _0x2e9844 > 0) {
      _0x5a1637 += _0x2e9844 - _0x5a1637 % _0x2e9844;
    }
    return _0x5a1637;
  }
  var _0x31c650;
  var _0x3b8c2f;
  var _0xdf86cd;
  var _0x1465be;
  var _0x97ba21;
  var _0x38db74;
  var _0x2f2db0;
  var _0x2b9907;
  var _0x2f1a63;
  function _0x2df71d(_0x50023c) {
    _0x31c650 = _0x50023c;
    _0x25e483.HEAP8 = _0x3b8c2f = new Int8Array(_0x50023c);
    _0x25e483.HEAP16 = _0x1465be = new Int16Array(_0x50023c);
    _0x25e483.HEAP32 = _0x38db74 = new Int32Array(_0x50023c);
    _0x25e483.HEAPU8 = _0xdf86cd = new Uint8Array(_0x50023c);
    _0x25e483.HEAPU16 = _0x97ba21 = new Uint16Array(_0x50023c);
    _0x25e483.HEAPU32 = _0x2f2db0 = new Uint32Array(_0x50023c);
    _0x25e483.HEAPF32 = _0x2b9907 = new Float32Array(_0x50023c);
    _0x25e483.HEAPF64 = _0x2f1a63 = new Float64Array(_0x50023c);
  }
  var _0x22ed50 = _0x25e483.INITIAL_MEMORY || 33554432;
  var _0x4fcc53;
  var _0x4cb87b = [];
  var _0xa9e735 = [];
  var _0x426575 = [];
  var _0x1284f2 = [];
  var _0xd43eb5 = [];
  var _0x45d7af = false;
  var _0x16fe6b = false;
  function _0x400ff1() {
    if (_0x25e483.preRun) {
      if (typeof _0x25e483.preRun == "function") {
        _0x25e483.preRun = [_0x25e483.preRun];
      }
      while (_0x25e483.preRun.length) {
        _0x3a6e8b(_0x25e483.preRun.shift());
      }
    }
    _0x2b577a(_0x4cb87b);
  }
  function _0x1f2e14() {
    _0x45d7af = true;
    if (!_0x25e483.noFSInit && !_0x4de3dc.init.initialized) {
      _0x4de3dc.init();
    }
    _0x5b46ae.init();
    _0x3ee0ec.root = _0x4de3dc.mount(_0x3ee0ec, {}, null);
    _0x2c1b1c.root = _0x4de3dc.mount(_0x2c1b1c, {}, null);
    _0x2b577a(_0xa9e735);
  }
  function _0x34c504() {
    _0x4de3dc.ignorePermissions = false;
    _0x2b577a(_0x426575);
  }
  function _0x2234b8() {
    _0x16fe6b = true;
  }
  function _0x4e1955() {
    if (_0x25e483.postRun) {
      if (typeof _0x25e483.postRun == "function") {
        _0x25e483.postRun = [_0x25e483.postRun];
      }
      while (_0x25e483.postRun.length) {
        _0x1a43d7(_0x25e483.postRun.shift());
      }
    }
    _0x2b577a(_0xd43eb5);
  }
  function _0x3a6e8b(_0x1af3bc) {
    _0x4cb87b.unshift(_0x1af3bc);
  }
  function _0x2b26c6(_0x27f4d3) {
    _0xa9e735.unshift(_0x27f4d3);
  }
  function _0x1a43d7(_0x5ec7f1) {
    _0xd43eb5.unshift(_0x5ec7f1);
  }
  var _0x404fed = 0;
  var _0xcb70e5 = null;
  var _0x589e7c = null;
  function _0x1a1e9c(_0x34da25) {
    return _0x34da25;
  }
  function _0x5884c7(_0x17480b) {
    _0x404fed++;
    if (_0x25e483.monitorRunDependencies) {
      _0x25e483.monitorRunDependencies(_0x404fed);
    }
  }
  function _0x21f06d(_0x56f26e) {
    _0x404fed--;
    if (_0x25e483.monitorRunDependencies) {
      _0x25e483.monitorRunDependencies(_0x404fed);
    }
    if (_0x404fed == 0) {
      if (_0xcb70e5 !== null) {
        clearInterval(_0xcb70e5);
        _0xcb70e5 = null;
      }
      if (_0x589e7c) {
        var _0x3cf83f = _0x589e7c;
        _0x589e7c = null;
        _0x3cf83f();
      }
    }
  }
  _0x25e483.preloadedImages = {};
  _0x25e483.preloadedAudios = {};
  function _0x5d461b(_0x37a974) {
    if (_0x25e483.onAbort) {
      _0x25e483.onAbort(_0x37a974);
    }
    _0x37a974 += "";
    _0x1af4bd(_0x37a974);
    _0x2219fa = true;
    _0x33a2ee = 1;
    _0x37a974 = "abort(" + _0x37a974 + "). Build with -s ASSERTIONS=1 for more info.";
    var _0x31fa6b = new WebAssembly.RuntimeError(_0x37a974);
    throw _0x31fa6b;
  }
  var _0x3f0d50 = "data:application/octet-stream;base64,";
  function _0x3b3caa(_0x20a85c) {
    return _0x20a85c.startsWith(_0x3f0d50);
  }
  function _0x19f82b(_0x3c22ac) {
    return _0x3c22ac.startsWith("file://");
  }
  var _0x1f8980 = "build.wasm";
  if (!_0x3b3caa(_0x1f8980)) {
    _0x1f8980 = _0x47ad8f(_0x1f8980);
  }
  function _0x18a071(_0x6a7639) {
    try {
      if (_0x6a7639 == _0x1f8980 && _0x25bf1a) {
        return new Uint8Array(_0x25bf1a);
      }
      if (_0x2890a0) {
        return _0x2890a0(_0x6a7639);
      } else {
        throw "both async and sync fetching of the wasm failed";
      }
    } catch (_0x4d609b) {
      _0x5d461b(_0x4d609b);
    }
  }
  function _0x4f67b4() {
    if (!_0x25bf1a && (_0x485212 || _0x17bf79)) {
      if (typeof fetch === "function" && !_0x19f82b(_0x1f8980)) {
        return fetch(_0x1f8980, {
          credentials: "same-origin"
        }).then(function (_0x22f1db) {
          if (!_0x22f1db.ok) {
            throw "failed to load wasm binary file at '" + _0x1f8980 + "'";
          }
          return _0x22f1db.arrayBuffer();
        }).catch(function () {
          return _0x18a071(_0x1f8980);
        });
      } else if (_0x1d302b) {
        return new Promise(function (_0x1c2f10, _0x17d30e) {
          _0x1d302b(_0x1f8980, function (_0x310157) {
            _0x1c2f10(new Uint8Array(_0x310157));
          }, _0x17d30e);
        });
      }
    }
    return Promise.resolve().then(function () {
      return _0x18a071(_0x1f8980);
    });
  }
  function _0xaeb44b() {
    var _0x581383 = {
      a: _0x4691f5
    };
    function _0x26a426(_0x13481b, _0x4d672b) {
      var _0x53ff31 = _0x13481b.exports;
      _0x25e483.asm = _0x53ff31;
      _0x28d294 = _0x25e483.asm.nl;
      _0x2df71d(_0x28d294.buffer);
      _0x4fcc53 = _0x25e483.asm.Nl;
      _0x2b26c6(_0x25e483.asm.ol);
      _0x21f06d("wasm-instantiate");
    }
    _0x5884c7("wasm-instantiate");
    function _0x226689(_0xcbc58) {
      _0x26a426(_0xcbc58.instance);
    }
    function _0x58cbdb(_0x370eac) {
      return _0x4f67b4().then(function (_0x41e035) {
        var _0x53b2e5 = WebAssembly.instantiate(_0x41e035, _0x581383);
        return _0x53b2e5;
      }).then(_0x370eac, function (_0x202516) {
        _0x1af4bd("failed to asynchronously prepare wasm: " + _0x202516);
        _0x5d461b(_0x202516);
      });
    }
    function _0xcd0b98() {
      if (!_0x25bf1a && typeof WebAssembly.instantiateStreaming === "function" && !_0x3b3caa(_0x1f8980) && !_0x19f82b(_0x1f8980) && typeof fetch === "function") {
        return fetch(_0x1f8980, {
          credentials: "same-origin"
        }).then(function (_0x4fc30a) {
          var _0x391044 = WebAssembly.instantiateStreaming(_0x4fc30a, _0x581383);
          return _0x391044.then(_0x226689, function (_0x8e72aa) {
            _0x1af4bd("wasm streaming compile failed: " + _0x8e72aa);
            _0x1af4bd("falling back to ArrayBuffer instantiation");
            return _0x58cbdb(_0x226689);
          });
        });
      } else {
        return _0x58cbdb(_0x226689);
      }
    }
    if (_0x25e483.instantiateWasm) {
      try {
        var _0x4bf075 = _0x25e483.instantiateWasm(_0x581383, _0x26a426);
        return _0x4bf075;
      } catch (_0x4246ab) {
        _0x1af4bd("Module.instantiateWasm callback failed with error: " + _0x4246ab);
        return false;
      }
    }
    _0xcd0b98();
    return {};
  }
  var _0xd0ad0c;
  var _0x3942a9;
  var _0x587143 = {
    5473496: function () {
      return _0x25e483.webglContextAttributes.premultipliedAlpha;
    },
    5473557: function () {
      return _0x25e483.webglContextAttributes.preserveDrawingBuffer;
    },
    5473621: function () {
      return _0x25e483.webglContextAttributes.powerPreference;
    }
  };
  function _0x2b577a(_0x1346a2) {
    while (_0x1346a2.length > 0) {
      var _0x4af875 = _0x1346a2.shift();
      if (typeof _0x4af875 == "function") {
        _0x4af875(_0x25e483);
        continue;
      }
      var _0x5f4c81 = _0x4af875.func;
      if (typeof _0x5f4c81 === "number") {
        if (_0x4af875.arg === undefined) {
          (function () {
            _0x57cc4c.call(null, _0x5f4c81);
          })();
        } else {
          (function (_0x3f2c97) {
            _0x1c1a57.apply(null, [_0x5f4c81, _0x3f2c97]);
          })(_0x4af875.arg);
        }
      } else {
        _0x5f4c81(_0x4af875.arg === undefined ? null : _0x4af875.arg);
      }
    }
  }
  function _0xdec2b7(_0x3cf450) {
    return _0x3cf450;
  }
  function _0x376e21(_0x450578) {
    var _0x13b0ec = /\b_Z[\w\d_]+/g;
    return _0x450578.replace(_0x13b0ec, function (_0x2fba5f) {
      var _0x565058 = _0xdec2b7(_0x2fba5f);
      if (_0x2fba5f === _0x565058) {
        return _0x2fba5f;
      } else {
        return _0x565058 + " [" + _0x2fba5f + "]";
      }
    });
  }
  function _0x45c637(_0x405780, _0x40d634, _0x1fcc68) {
    var _0x56afe2 = _0x25e483["dynCall_" + _0x405780];
    if (_0x1fcc68 && _0x1fcc68.length) {
      return _0x56afe2.apply(null, [_0x40d634].concat(_0x1fcc68));
    } else {
      return _0x56afe2.call(null, _0x40d634);
    }
  }
  function _0x2f5dea(_0x552f1b, _0xa3f731, _0xc686d9) {
    return _0x45c637(_0x552f1b, _0xa3f731, _0xc686d9);
  }
  function _0x30d31d() {
    var _0x257e03 = new Error();
    if (!_0x257e03.stack) {
      try {
        throw new Error();
      } catch (_0x18149c) {
        _0x257e03 = _0x18149c;
      }
      if (!_0x257e03.stack) {
        return "(no stack trace available)";
      }
    }
    return _0x257e03.stack.toString();
  }
  var _0x33b1a2 = 0;
  function _0x3481d7() {
    return _0x3031dd || _0x33b1a2 > 0;
  }
  function _0x27bd0f() {
    var _0x2c0a06 = _0x30d31d();
    if (_0x25e483.extraStackTrace) {
      _0x2c0a06 += "\n" + _0x25e483.extraStackTrace();
    }
    return _0x376e21(_0x2c0a06);
  }
  function _0xe92321(_0x50b665, _0x28d7df, _0x1ae308, _0x4d104d, _0x4468b0) {
    var _0x551848 = _0xdfb7b2(_0x50b665);
    var _0x4ea099 = _0xdfb7b2(_0x28d7df);
    var _0x13c75d = _0xdfb7b2(_0x1ae308);
    var _0x8f7526 = _0xdfb7b2(_0x4d104d);
    var _0x314baa = _0xdfb7b2(_0x4468b0);
    try {
      firebase.firestore().collection(_0x551848).add(JSON.parse(_0x4ea099)).then(function (_0x4396d4) {
        window.unityInstance.SendMessage(_0x13c75d, _0x8f7526, "Success: document added in collection " + _0x551848);
      }).catch(function (_0x3f11de) {
        window.unityInstance.SendMessage(_0x13c75d, _0x314baa, JSON.stringify(_0x3f11de, Object.getOwnPropertyNames(_0x3f11de)));
      });
    } catch (_0x59a055) {
      window.unityInstance.SendMessage(_0x13c75d, _0x314baa, JSON.stringify(_0x59a055, Object.getOwnPropertyNames(_0x59a055)));
    }
  }
  function _0x214fac(_0x2ce497, _0x1a8d66, _0x41d5b3, _0x2e736a, _0x445fa9, _0x190072, _0xee71f) {
    var _0x1c746f = _0xdfb7b2(_0x2ce497);
    var _0x132b1c = _0xdfb7b2(_0x1a8d66);
    var _0x327e96 = _0xdfb7b2(_0x41d5b3);
    var _0x3f464c = _0xdfb7b2(_0x2e736a);
    var _0x1f63be = _0xdfb7b2(_0x445fa9);
    var _0x560939 = _0xdfb7b2(_0x190072);
    var _0xb9cd9d = _0xdfb7b2(_0xee71f);
    try {
      var _0x2e736a = {};
      _0x2e736a[_0x327e96] = firebase.firestore.FieldValue.arrayUnion(JSON.parse(_0x3f464c));
      firebase.firestore().collection(_0x1c746f).doc(_0x132b1c).update(_0x2e736a).then(function () {
        window.unityInstance.SendMessage(_0x1f63be, _0x560939, "Success: element " + _0x3f464c + " was added in " + _0x327e96);
      }).catch(function (_0x54ff26) {
        window.unityInstance.SendMessage(_0x1f63be, _0xb9cd9d, JSON.stringify(_0x54ff26, Object.getOwnPropertyNames(_0x54ff26)));
      });
    } catch (_0x47a73b) {
      window.unityInstance.SendMessage(_0x1f63be, _0xb9cd9d, JSON.stringify(_0x47a73b, Object.getOwnPropertyNames(_0x47a73b)));
    }
  }
  function _0x565f1e(_0x323817) {
    try {
      window.CrazyGames.SDK.user.addScore(_0x323817);
    } catch (_0x20ea7f) {
      window.UnitySDK.logError("Error while calling addScore:", _0x20ea7f);
    }
  }
  function _0x29262b(_0x8240f9, _0x154cc4) {
    try {
      window.CrazyGames.SDK.analytics.trackOrder(window.unityStringify(_0x8240f9), JSON.parse(window.unityStringify(_0x154cc4)));
    } catch (_0x222cfe) {
      window.UnitySDK.logError("Error while calling trackOrder:", _0x222cfe);
    }
  }
  function _0x3a05f0(_0x32b264) {
    const _0x4d9cdc = document.createElement("textarea");
    _0x4d9cdc.value = window.unityStringify(_0x32b264);
    document.body.appendChild(_0x4d9cdc);
    _0x4d9cdc.select();
    _0x4d9cdc.setSelectionRange(0, 99999);
    document.execCommand("copy");
    document.body.removeChild(_0x4d9cdc);
  }
  function _0x18eb38(_0x53bbb5, _0x5e1760, _0x47d6e8, _0x3998e1, _0x559a07) {
    var _0x555b94 = _0xdfb7b2(_0x53bbb5);
    var _0x425444 = _0xdfb7b2(_0x5e1760);
    var _0x565737 = _0xdfb7b2(_0x47d6e8);
    var _0x28cc30 = _0xdfb7b2(_0x3998e1);
    var _0x5c0f1e = _0xdfb7b2(_0x559a07);
    try {
      firebase.auth().createUserWithEmailAndPassword(_0x555b94, _0x425444).then(function (_0x455e92) {
        window.unityInstance.SendMessage(_0x565737, _0x28cc30, "Success: signed up for " + _0x555b94);
      }).catch(function (_0xcf95d2) {
        window.unityInstance.SendMessage(_0x565737, _0x5c0f1e, JSON.stringify(_0xcf95d2, Object.getOwnPropertyNames(_0xcf95d2)));
      });
    } catch (_0x2ce7fe) {
      window.unityInstance.SendMessage(_0x565737, _0x5c0f1e, JSON.stringify(_0x2ce7fe, Object.getOwnPropertyNames(_0x2ce7fe)));
    }
  }
  function _0x73a711() {
    try {
      window.CrazyGames.SDK.data.clear();
    } catch (_0x410c17) {
      window.UnitySDK.logError("Error while calling clear:", _0x410c17);
    }
  }
  function _0x14d53e(_0x2fad42) {
    var _0x1da75b = null;
    try {
      _0x1da75b = window.CrazyGames.SDK.data.getItem(window.unityStringify(_0x2fad42));
    } catch (_0x265c9c) {
      window.UnitySDK.logError("Error while calling getItem:", _0x265c9c);
    }
    var _0xc28449 = _0x576ae2(_0x1da75b + "") + 1;
    var _0x1f8e67 = _0x434dac(_0xc28449);
    _0x517360(_0x1da75b, _0x1f8e67, _0xc28449);
    return _0x1f8e67;
  }
  function _0x13fe29(_0x28cea7) {
    var _0x36f895 = null;
    try {
      _0x36f895 = window.CrazyGames.SDK.data.getItem(window.unityStringify(_0x28cea7));
    } catch (_0xe42ee8) {
      window.UnitySDK.logError("Error while calling getItem:", _0xe42ee8);
    }
    return _0x36f895 !== null;
  }
  function _0x38e0b0(_0x368a6f) {
    try {
      window.CrazyGames.SDK.data.removeItem(window.unityStringify(_0x368a6f));
    } catch (_0xa45cd7) {
      window.UnitySDK.logError("Error while calling removeItem:", _0xa45cd7);
    }
  }
  function _0x55f4aa(_0x2be0f2, _0x5ae817) {
    try {
      window.CrazyGames.SDK.data.setItem(window.unityStringify(_0x2be0f2), window.unityStringify(_0x5ae817));
    } catch (_0x190a2c) {
      window.UnitySDK.logError("Error while calling setItem:", _0x190a2c);
    }
  }
  function _0xfad097(_0x44dff1, _0x3c6d9f, _0x1b61b7, _0x4a4b4, _0x4de527) {
    var _0x387583 = _0xdfb7b2(_0x44dff1);
    var _0x5a1468 = _0xdfb7b2(_0x3c6d9f);
    var _0x4e596d = _0xdfb7b2(_0x1b61b7);
    var _0x1240dc = _0xdfb7b2(_0x4a4b4);
    var _0x3e86e0 = _0xdfb7b2(_0x4de527);
    try {
      firebase.firestore().collection(_0x387583).doc(_0x5a1468).delete().then(function () {
        window.unityInstance.SendMessage(_0x4e596d, _0x1240dc, "Success: document " + _0x5a1468 + " was deleted");
      }).catch(function (_0x30c611) {
        window.unityInstance.SendMessage(_0x4e596d, _0x3e86e0, JSON.stringify(_0x30c611, Object.getOwnPropertyNames(_0x30c611)));
      });
    } catch (_0x5ee091) {
      window.unityInstance.SendMessage(_0x4e596d, _0x3e86e0, JSON.stringify(_0x5ee091, Object.getOwnPropertyNames(_0x5ee091)));
    }
  }
  function _0x526aa9(_0xa83370, _0x19950e, _0x4c8ac9, _0x89d2c7, _0x25fd84, _0x3217b0) {
    var _0xfc7eb7 = _0xdfb7b2(_0xa83370);
    var _0x12d5b9 = _0xdfb7b2(_0x19950e);
    var _0x2f173c = _0xdfb7b2(_0x4c8ac9);
    var _0x1fe00f = _0xdfb7b2(_0x89d2c7);
    var _0x34a9db = _0xdfb7b2(_0x25fd84);
    var _0x495890 = _0xdfb7b2(_0x3217b0);
    try {
      var _0x5c8cc5 = {};
      _0x5c8cc5[_0x2f173c] = firebase.firestore.FieldValue.delete();
      firebase.firestore().collection(_0xfc7eb7).doc(_0x12d5b9).update(_0x5c8cc5).then(function () {
        window.unityInstance.SendMessage(_0x1fe00f, _0x34a9db, "Success: field " + _0x2f173c + " was deleted");
      }).catch(function (_0x5d536e) {
        window.unityInstance.SendMessage(_0x1fe00f, _0x495890, JSON.stringify(_0x5d536e, Object.getOwnPropertyNames(_0x5d536e)));
      });
    } catch (_0x6da006) {
      window.unityInstance.SendMessage(_0x1fe00f, _0x495890, JSON.stringify(_0x6da006, Object.getOwnPropertyNames(_0x6da006)));
    }
  }
  function _0x4bfcdf(_0x2e8449, _0x5ec642, _0x12f7ec, _0x502462) {
    var _0x923ea0 = _0xdfb7b2(_0x2e8449);
    var _0x5627f3 = _0xdfb7b2(_0x5ec642);
    var _0x2d9cd1 = _0xdfb7b2(_0x12f7ec);
    var _0xeff178 = _0xdfb7b2(_0x502462);
    try {
      firebase.database().ref(_0x923ea0).remove().then(function (_0xde2cdd) {
        window.unityInstance.SendMessage(_0x5627f3, _0x2d9cd1, "Success: " + _0x923ea0 + " was deleted");
      });
    } catch (_0x159e4c) {
      window.unityInstance.SendMessage(_0x5627f3, _0xeff178, JSON.stringify(_0x159e4c, Object.getOwnPropertyNames(_0x159e4c)));
    }
  }
  function _0x52206d() {
    if (window.clipboardPasteHandler) {
      window.removeEventListener("paste", window.clipboardPasteHandler);
      window.clipboardPasteHandler = null;
      console.log("Paste listener disabled.");
    }
  }
  function _0x47f255(_0x212f4f, _0x32c429, _0x5005fa, _0x17802a) {
    var _0x5e6a94 = _0xdfb7b2(_0x212f4f);
    var _0x3c7dcc = _0xdfb7b2(_0x32c429);
    var _0x32dbda = _0xdfb7b2(_0x5005fa);
    var _0x479396 = _0xdfb7b2(_0x17802a);
    try {
      firebase.storage().ref(_0x5e6a94).getDownloadURL().then(function (_0x46513a) {
        var _0xc7e68c = new XMLHttpRequest();
        _0xc7e68c.responseType = "arraybuffer";
        _0xc7e68c.onload = function (_0x48e8f4) {
          var _0x43ecad = _0xc7e68c.response;
          window.unityInstance.SendMessage(_0x3c7dcc, _0x32dbda, _0x5ec8d7(_0x43ecad));
        };
        _0xc7e68c.open("GET", _0x46513a);
        _0xc7e68c.send();
      }).catch(function (_0x2f34af) {
        window.unityInstance.SendMessage(_0x3c7dcc, _0x479396, JSON.stringify(_0x2f34af, Object.getOwnPropertyNames(_0x2f34af)));
      });
    } catch (_0x36aa3b) {
      window.unityInstance.SendMessage(_0x3c7dcc, _0x479396, JSON.stringify(_0x36aa3b, Object.getOwnPropertyNames(_0x36aa3b)));
    }
    function _0x5ec8d7(_0x36b607) {
      var _0x4277fa = "";
      var _0x260be1 = new Uint8Array(_0x36b607);
      var _0x2916cb = _0x260be1.byteLength;
      for (var _0x5dcf98 = 0; _0x5dcf98 < _0x2916cb; _0x5dcf98++) {
        _0x4277fa += String.fromCharCode(_0x260be1[_0x5dcf98]);
      }
      return window.btoa(_0x4277fa);
    }
  }
  function _0x5cfdd2(_0x4f0aba, _0x45ec8b) {
    var _0x7fdad6 = _0xdfb7b2(_0x4f0aba);
    var _0x215f7b = _0xdfb7b2(_0x45ec8b);
    if (window.clipboardPasteHandler) {
      return;
    }
    window.clipboardPasteHandler = function (_0x5ee077) {
      _0x5ee077.preventDefault();
      var _0x380022 = (_0x5ee077.clipboardData || window.clipboardData).getData("text");
      _0x3799a7(_0x7fdad6, _0x215f7b, _0x380022);
    };
    window.addEventListener("paste", window.clipboardPasteHandler);
    console.log("Paste listener enabled.");
  }
  function _0x29e5eb() {
    var _0x4e055b = window.document;
    var _0x398f61 = _0x4e055b.fullscreenElement || _0x4e055b.mozFullScreenElement || _0x4e055b.webkitFullscreenElement || _0x4e055b.msFullscreenElement;
    if (_0x398f61) {
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
  function _0x11f654(_0xae6a5, _0x8a56f9) {
    var _0x3c0aa8 = _0xdfb7b2(_0xae6a5);
    var _0x18f6e4 = _0xdfb7b2(_0x8a56f9);
    var _0xe5328a = new Blob([_0x18f6e4], {
      type: "text/plain"
    });
    var _0x24db58 = document.createElement("a");
    _0x24db58.href = URL.createObjectURL(_0xe5328a);
    _0x24db58.download = _0x3c0aa8;
    _0x24db58.click();
    setTimeout(() => URL.revokeObjectURL(_0x24db58.href), 100);
  }
  function _0xfca71() {
    try {
      window[preroll.config.loaderObjectName].log("WGSDK: Getting WeeGoo InGame Ad");
      window[preroll.config.loaderObjectName].refetchAd();
    } catch (_0x19b2d2) {
      console.log("No WeeGooAFG implementation found!");
    }
  }
  function _0x715ff3(_0x3db8f4) {
    var _0x40998f = {
      adStarted: function () {
        _0x3799a7("GMSDKAdvertisement", "JSLibCallback_AdStarted");
      },
      adFinished: function () {
        _0x3799a7("GMSDKAdvertisement", "JSLibCallback_AdFinished");
      },
      adError: function (_0x552e1e) {
        _0x3799a7("GMSDKAdvertisement", "JSLibCallback_AdError", JSON.stringify(_0x552e1e));
      }
    };
    var _0x10d15d = window.GMSOFT_GMADS_INFO.reward;
    var _0x29e3e2 = _0x10d15d[Math.floor(Math.random() * _0x10d15d.length)];
    try {
      var _0x138194 = document.createElement("div");
      _0x138194.id = "gm-ad-overlay";
      _0x138194.style.cssText = "\n          position: fixed;\n          top: 0;\n          left: 0;\n          width: 100%;\n          height: 100%;\n          background: rgba(0, 0, 0, 0.9);\n          z-index: 9999;\n          display: flex;\n          justify-content: center;\n          align-items: center;\n          flex-direction: column;\n        ";
      var _0x43e297 = document.createElement("div");
      _0x43e297.style.cssText = "\n          position: relative;\n          max-width: 90%;\n          max-height: 80%;\n          background: #000;\n          border-radius: 8px;\n          overflow: hidden;\n        ";
      var _0x2e595a = document.createElement("video");
      _0x2e595a.src = _0x29e3e2.image;
      _0x2e595a.style.cssText = "\n          width: 100%;\n          height: 100%;\n          display: block;\n        ";
      _0x2e595a.autoplay = true;
      _0x2e595a.muted = true;
      _0x2e595a.preload = "auto";
      var _0x18db58 = document.createElement("button");
      _0x18db58.innerHTML = "Skip (5)";
      _0x18db58.disabled = true;
      _0x18db58.style.cssText = "\n          position: absolute;\n          top: 10px;\n          right: 10px;\n          background: rgba(0, 0, 0, 0.8);\n          color: white;\n          border: 1px solid #666;\n          border-radius: 6px;\n          padding: 10px 16px;\n          cursor: pointer;\n          font-size: 16px;\n          font-weight: bold;\n          z-index: 10001;\n          box-shadow: 0 2px 8px rgba(0,0,0,0.3);\n        ";
      _0x18db58.disabled = true;
      _0x18db58.style.opacity = "0.5";
      var _0x500f63 = document.createElement("div");
      _0x500f63.style.cssText = "\n          position: absolute;\n          bottom: 0;\n          left: 0;\n          width: 100%;\n          height: 6px;\n          background: rgba(255, 255, 255, 0.3);\n          z-index: 10001;\n        ";
      var _0x32901b = document.createElement("div");
      _0x32901b.style.cssText = "\n          height: 100%;\n          width: 0%;\n          background: linear-gradient(90deg, #ff6b6b, #4ecdc4);\n          transition: width 0.1s ease;\n        ";
      var _0x49a046 = 5;
      var _0x299180 = setInterval(function () {
        _0x49a046--;
        if (_0x49a046 > 0) {
          _0x18db58.innerHTML = "Skip (" + _0x49a046 + ")";
        } else {
          _0x18db58.innerHTML = "Skip";
          _0x18db58.disabled = false;
          _0x18db58.style.opacity = "1";
          _0x18db58.style.cursor = "pointer";
          clearInterval(_0x299180);
        }
      }, 1000);
      function _0x525e8a() {
        if (_0x138194 && _0x138194.parentNode) {
          _0x138194.parentNode.removeChild(_0x138194);
        }
        clearInterval(_0x299180);
        _0x40998f.adFinished();
      }
      function _0x3b88ee() {
        window.open(_0x29e3e2.url, "_blank");
      }
      function _0x58f7aa() {
        if (_0x2e595a.duration && _0x2e595a.currentTime) {
          var _0x5e61c5 = _0x2e595a.currentTime / _0x2e595a.duration * 100;
          _0x32901b.style.width = _0x5e61c5 + "%";
        }
      }
      _0x2e595a.addEventListener("loadstart", function () {
        _0x40998f.adStarted();
      });
      _0x2e595a.addEventListener("timeupdate", function () {
        _0x58f7aa();
      });
      _0x2e595a.addEventListener("ended", function () {
        _0x525e8a();
      });
      _0x2e595a.addEventListener("error", function (_0x43234d) {
        var _0x8f89e2 = {
          message: "Video load error",
          code: _0x43234d.target.error ? _0x43234d.target.error.code : "unknown"
        };
        _0x40998f.adError(_0x8f89e2);
        _0x525e8a();
      });
      _0x2e595a.addEventListener("click", function () {
        _0x3b88ee();
      });
      _0x18db58.addEventListener("click", function () {
        if (!_0x18db58.disabled) {
          _0x525e8a();
        }
      });
      _0x2e595a.addEventListener("contextmenu", function (_0x4d7e4f) {
        _0x4d7e4f.preventDefault();
      });
      _0x500f63.appendChild(_0x32901b);
      _0x43e297.appendChild(_0x2e595a);
      _0x43e297.appendChild(_0x18db58);
      _0x43e297.appendChild(_0x500f63);
      _0x138194.appendChild(_0x43e297);
      document.body.appendChild(_0x138194);
      _0x2e595a.play().catch(function (_0x12ba0f) {
        console.error("Video play error:", _0x12ba0f);
        _0x40998f.adError({
          message: "Cannot play video",
          details: _0x12ba0f.message
        });
        _0x525e8a();
      });
    } catch (_0x349e57) {
      console.error("Ad overlay creation error:", _0x349e57);
      _0x40998f.adError({
        message: "Failed to create ad overlay",
        details: _0x349e57.message
      });
    }
  }
  function _0x4270eb() {
    try {
      console.log("Check local storage GM_SDK_GetVeryfiedSignature: ", window.GMSOFT_SIGNED);
      if (window.GMSOFT_SIGNED) {
        console.log("Local storage GM_SDK_GetVeryfiedSignature: ", window.GMSOFT_SIGNED);
        _0x3799a7("GmSoft", "OnGetVeryfiedSignature", window.GMSOFT_SIGNED);
        return;
      }
    } catch (_0x26cef1) {
      console.error("Error getting GM_SDK_GetVeryfiedSignature  ", _0x26cef1);
    }
    try {
      let _0x4d537f = "hn=" + "https://games.1games.io";
      let _0x4271a3 = btoa(_0x4d537f);
      let _0x73b029 = "https://api.cdnwave.com/sdkdom/keysigned";
      if (window.GMSOFT_OPTIONS && window.GMSOFT_OPTIONS.signedurl) {
        _0x73b029 = window.GMSOFT_OPTIONS.signedurl;
      }
      let _0x5cb559 = _0x73b029 + "?params=" + _0x4271a3;
      var _0x2018e6 = new XMLHttpRequest();
      let _0x32bc86 = "";
      _0x2018e6.open("GET", _0x5cb559, false);
      _0x2018e6.send(_0x32bc86);
      let _0x7c9389 = _0x2018e6.responseText;
      window.GMSOFT_SIGNED = _0x7c9389;
      console.log("send request GM_SDK_GetVeryfiedSignature: ", window.GMSOFT_SIGNED);
      _0x3799a7("GmSoft", "OnGetVeryfiedSignature", window.GMSOFT_SIGNED);
    } catch (_0x329cc4) {
      console.error("Error fetching GM_SDK_GetVeryfiedSignature: ", _0x329cc4);
    }
  }
  function _0x49a0a6() {
    let _0x3d0e28 = "https://games.1games.io";
    _0x3799a7("GmSoft", "SetUnityHostName", _0x3d0e28);
    _0x3799a7("GmSoft", "SetSDKType", window.GMSOFT_SDKTYPE);
  }
  function _0x1d7181() {
    console.log("GM_SDK_StartGame");
    try {
      gmStartGame(function () {
        _0x3799a7("GmSoft", "SetGameInfoParam", JSON.stringify(window.GMSOFT_GAME_INFO));
      });
    } catch (_0x2077d8) {
      console.error("Error JS 12", _0x2077d8);
    }
    try {
      gmStartAds(function () {
        _0x3799a7("GmSoft", "SetAdParam", JSON.stringify(window.GMSOFT_ADS_INFO));
      });
    } catch (_0xa2d660) {
      console.error("Error JS 20", _0xa2d660);
    }
    try {
      document.addEventListener("gmsoftbanevent", _0x25c419 => {
        _0x3799a7("GmSoft", "LockGame", _0x25c419.detail);
      });
    } catch (_0x176979) {
      console.error("Error JS 28", _0x176979);
    }
  }
  function _0x12e293(_0x1b36e2) {
    try {
      window[preroll.config.loaderObjectName].log("WGSDK: Sending game event");
      window[preroll.config.loaderObjectName].GameEvent(_0x1b36e2);
    } catch (_0x3b24cc) {
      console.log("No WeeGooAFG implementation found!");
    }
  }
  function _0x2d0611() {
    try {
      window.CrazyGames.SDK.game.gameplayStart();
    } catch (_0x1c8b47) {
      window.UnitySDK.logError("Error while calling gameplayStart:", _0x1c8b47);
    }
  }
  function _0x42122b() {
    try {
      window.CrazyGames.SDK.game.gameplayStop();
    } catch (_0x397505) {
      window.UnitySDK.logError("Error while calling gameplayStop:", _0x397505);
    }
  }
  function _0x984900() {
    var _0x19cfac = firebaseConfig.projectId;
    var _0x533c0e = _0x576ae2(_0x19cfac) + 1;
    var _0x5a0947 = _0x434dac(_0x533c0e);
    _0x517360(_0x19cfac, _0x5a0947, _0x533c0e);
    return _0x5a0947;
  }
  function _0x453b93(_0x391e4a, _0x57a58b, _0x48c749, _0x281f9b, _0x3e2232) {
    var _0x4d2495 = _0xdfb7b2(_0x391e4a);
    var _0x6ef296 = _0xdfb7b2(_0x57a58b);
    var _0x4f3a81 = _0xdfb7b2(_0x48c749);
    var _0x34e0f4 = _0xdfb7b2(_0x281f9b);
    var _0x7938d9 = _0xdfb7b2(_0x3e2232);
    try {
      firebase.firestore().collection(_0x4d2495).doc(_0x6ef296).get().then(function (_0x2ff085) {
        if (_0x2ff085.exists) {
          window.unityInstance.SendMessage(_0x4f3a81, _0x34e0f4, JSON.stringify(_0x2ff085.data()));
        } else {
          window.unityInstance.SendMessage(_0x4f3a81, _0x34e0f4, "null");
        }
      }).catch(function (_0x5f0a13) {
        window.unityInstance.SendMessage(_0x4f3a81, _0x7938d9, JSON.stringify(_0x5f0a13, Object.getOwnPropertyNames(_0x5f0a13)));
      });
    } catch (_0x383437) {
      window.unityInstance.SendMessage(_0x4f3a81, _0x7938d9, JSON.stringify(_0x383437, Object.getOwnPropertyNames(_0x383437)));
    }
  }
  function _0x25fdae(_0x311443, _0x1c7a52, _0x449b1f, _0xa5ba8d) {
    var _0x563cae = _0xdfb7b2(_0x311443);
    var _0xfe7bb5 = _0xdfb7b2(_0x1c7a52);
    var _0x11b0ca = _0xdfb7b2(_0x449b1f);
    var _0x2cec27 = _0xdfb7b2(_0xa5ba8d);
    try {
      firebase.firestore().collection(_0x563cae).get().then(function (_0x59c2bc) {
        var _0x403e8d = {};
        _0x59c2bc.forEach(function (_0x1e0c41) {
          _0x403e8d[_0x1e0c41.id] = _0x1e0c41.data();
        });
        window.unityInstance.SendMessage(_0xfe7bb5, _0x11b0ca, JSON.stringify(_0x403e8d));
      }).catch(function (_0x1471c2) {
        window.unityInstance.SendMessage(_0xfe7bb5, _0x2cec27, JSON.stringify(_0x1471c2, Object.getOwnPropertyNames(_0x1471c2)));
      });
    } catch (_0x5e6d1a) {
      window.unityInstance.SendMessage(_0xfe7bb5, _0x2cec27, JSON.stringify(_0x5e6d1a, Object.getOwnPropertyNames(_0x5e6d1a)));
    }
  }
  function _0x21b7d7() {
    var _0x50fc36 = window.CrazyGames.SDK.environment;
    var _0x16c879 = _0x576ae2(_0x50fc36) + 1;
    var _0x36be6b = _0x434dac(_0x16c879);
    _0x517360(_0x50fc36, _0x36be6b, _0x16c879);
    return _0x36be6b;
  }
  function _0x41dbba() {
    var _0x2302b9 = JSON.stringify(window.CrazyGames.SDK.game.settings);
    var _0x5db4b0 = _0x576ae2(_0x2302b9) + 1;
    var _0x2133bc = _0x434dac(_0x5db4b0);
    _0x517360(_0x2302b9, _0x2133bc, _0x5db4b0);
    return _0x2133bc;
  }
  function _0x3a313f(_0x81bbbf) {
    var _0x4f6140 = new URLSearchParams(window.location.search);
    var _0x55ecaf = _0x4f6140.get(window.unityStringify(_0x81bbbf));
    if (_0x55ecaf === null) {
      _0x55ecaf = "";
    }
    var _0x29a858 = _0x576ae2(_0x55ecaf) + 1;
    var _0x3f8afd = _0x434dac(_0x29a858);
    _0x517360(_0x55ecaf, _0x3f8afd, _0x29a858);
    return _0x3f8afd;
  }
  function _0x1b29a6() {
    return window.CrazyGames.SDK.isQaTool;
  }
  function _0x46b392(_0x5f2d55, _0xd6cf8e, _0x1ca4a3, _0x4f5284) {
    var _0x285b3b = _0xdfb7b2(_0x5f2d55);
    var _0x2de75e = _0xdfb7b2(_0xd6cf8e);
    var _0x218bb3 = _0xdfb7b2(_0x1ca4a3);
    var _0x118efc = _0xdfb7b2(_0x4f5284);
    try {
      firebase.database().ref(_0x285b3b).once("value").then(function (_0x5d2882) {
        window.unityInstance.SendMessage(_0x2de75e, _0x218bb3, JSON.stringify(_0x5d2882.val()));
      });
    } catch (_0x2d271d) {
      window.unityInstance.SendMessage(_0x2de75e, _0x118efc, JSON.stringify(_0x2d271d, Object.getOwnPropertyNames(_0x2d271d)));
    }
  }
  function _0x596e1f() {
    var _0x57d4fb = JSON.stringify(window.CrazyGames.SDK.user.systemInfo);
    var _0x495e41 = _0x576ae2(_0x57d4fb) + 1;
    var _0x249a8b = _0x434dac(_0x495e41);
    _0x517360(_0x57d4fb, _0x249a8b, _0x495e41);
    return _0x249a8b;
  }
  function _0x3def31() {
    if (performance.memory) {
      return performance.memory.totalJSHeapSize;
    }
    return 0;
  }
  function _0x4959f1() {
    if (performance.memory) {
      return performance.memory.usedJSHeapSize;
    }
    return 0;
  }
  function _0x70c32c() {
    window.CrazyGames.SDK.user.getUser().then(function (_0x474a1a) {
      _0x3799a7("CrazySDKSingleton", "JSLibCallback_GetUser", JSON.stringify({
        userJson: JSON.stringify(_0x474a1a)
      }));
    }).catch(function (_0x414ad3) {
      _0x3799a7("CrazySDKSingleton", "JSLibCallback_GetUser", JSON.stringify({
        errorJson: JSON.stringify(_0x414ad3)
      }));
    });
  }
  function _0x16091e() {
    window.CrazyGames.SDK.user.getUserToken().then(function (_0x3f803a) {
      _0x3799a7("CrazySDKSingleton", "JSLibCallback_GetUserToken", JSON.stringify({
        token: _0x3f803a
      }));
    }).catch(function (_0x4883bd) {
      _0x3799a7("CrazySDKSingleton", "JSLibCallback_GetUserToken", JSON.stringify({
        errorJson: JSON.stringify(_0x4883bd)
      }));
    });
  }
  function _0x2d9711() {
    window.CrazyGames.SDK.user.getXsollaUserToken().then(function (_0x394250) {
      _0x3799a7("CrazySDKSingleton", "JSLibCallback_GetXsollaUserToken", JSON.stringify({
        token: _0x394250
      }));
    }).catch(function (_0x518049) {
      _0x3799a7("CrazySDKSingleton", "JSLibCallback_GetXsollaUserToken", JSON.stringify({
        errorJson: JSON.stringify(_0x518049)
      }));
    });
  }
  function _0x45a7ad() {}
  function _0x250db8() {
    console.log("afg.ready: " + afg.ready);
    if (afg.ready) {
      _0x3799a7("H5Adverisement", "PreloadRewardedVideoCallback", 1);
      afg.adBreak({
        type: "reward",
        name: "reward ads",
        beforeReward: function (_0x4253ae) {
          this._showRewardAdFn = _0x4253ae;
          console.log("[H5 Ads] before reward");
        }.bind(this),
        adViewed: function () {
          this._showRewardAdFn = null;
          _0x3799a7("H5Adverisement", "RewardedVideoSuccessCallback");
          console.log("[H5 Ads] ad viewed");
        }.bind(this),
        adDismissed: function () {
          this._showRewardAdFn = null;
          _0x3799a7("H5Adverisement", "RewardedVideoFailureCallback");
          console.log("[H5 Ads] ad failure");
        }.bind(this),
        adBreakDone: function (_0x24c38a) {
          console.log("[H5 Ads] Reward break done");
          _0x3799a7("H5Adverisement", "ResumeGameCallback");
        }.bind(this)
      });
    } else {
      console.log("[H5 Ads] no reward ads");
      _0x3799a7("H5Adverisement", "PreloadRewardedVideoCallback", 0);
    }
  }
  function _0x3de856() {
    if (afg.ready) {
      afg.adBreak({
        type: "next",
        name: "next",
        beforeAd: function () {
          afg.onBeforeAd();
          console.log("[H5 Ads] Before ad");
          _0x3799a7("H5Adverisement", "PauseGameCallback");
        }.bind(this),
        adBreakDone: function () {
          console.log("[H5 Ads] Ad break done");
          _0x3799a7("H5Adverisement", "ResumeGameCallback");
        }.bind(this)
      });
    } else {
      console.log("no " + adType + " ads");
      _0x3799a7("H5Adverisement", "ResumeGameCallback");
    }
  }
  function _0x40caca() {
    if (this._showRewardAdFn) {
      _0x3799a7("H5Adverisement", "PauseGameCallback");
      this._showRewardAdFn();
    } else {
      _0x3799a7("H5Adverisement", "ResumeGameCallback");
    }
  }
  function _0x26b72d() {
    try {
      window.CrazyGames.SDK.game.happytime();
    } catch (_0x464721) {
      window.UnitySDK.logError("Error while calling happytime:", _0x464721);
    }
  }
  function _0x2ac6d1() {
    try {
      window.CrazyGames.SDK.game.hideInviteButton();
    } catch (_0x454f62) {
      window.UnitySDK.logError("Error while calling hideInviteButton:", _0x454f62);
    }
  }
  function _0x46886a(_0x4fd6a7, _0x338546) {
    const _0x44be6f = _0xdfb7b2(_0x4fd6a7);
    const _0xba9160 = _0xdfb7b2(_0x338546);
    const _0x158882 = document.createElement("input");
    _0x158882.type = "file";
    _0x158882.accept = ".txt";
    _0x158882.onchange = _0xba944f => {
      const _0x3613d0 = _0xba944f.target.files[0];
      if (_0x3613d0) {
        const _0xe812e3 = new FileReader();
        _0xe812e3.onload = () => {
          const _0x4bd5f5 = _0xe812e3.result;
          _0x3799a7(_0x44be6f, _0xba9160, _0x4bd5f5);
        };
        _0xe812e3.readAsText(_0x3613d0);
      }
    };
    _0x158882.click();
  }
  function _0x30d2c2(_0x2948ca, _0x412066) {
    const _0x42e685 = _0xdfb7b2(_0x2948ca);
    const _0x4c0cdd = _0xdfb7b2(_0x412066);
    const _0x145402 = document.createElement("input");
    _0x145402.type = "file";
    _0x145402.accept = ".gmd";
    _0x145402.onchange = _0x12cbbe => {
      const _0x2315f3 = _0x12cbbe.target.files[0];
      if (_0x2315f3) {
        const _0x57c202 = new FileReader();
        _0x57c202.onload = () => {
          const _0x1103c1 = _0x57c202.result;
          _0x3799a7(_0x42e685, _0x4c0cdd, _0x1103c1);
        };
        _0x57c202.readAsText(_0x2315f3);
      }
    };
    _0x145402.click();
  }
  function _0x2c177a(_0x56c093, _0x13c3bf, _0x17e0cb, _0x55a0c2, _0x618abe, _0xde2811, _0x28df3b) {
    var _0x390bf0 = _0xdfb7b2(_0x56c093);
    var _0x250e05 = _0xdfb7b2(_0x13c3bf);
    var _0x5e8a58 = _0xdfb7b2(_0x17e0cb);
    var _0x2b755e = _0xdfb7b2(_0x618abe);
    var _0x5a02d3 = _0xdfb7b2(_0xde2811);
    var _0x3eda6d = _0xdfb7b2(_0x28df3b);
    try {
      var _0x57ae05 = {};
      _0x57ae05[_0x5e8a58] = firebase.firestore.FieldValue.increment(_0x55a0c2);
      firebase.firestore().collection(_0x390bf0).doc(_0x250e05).update(_0x57ae05).then(function () {
        window.unityInstance.SendMessage(_0x2b755e, _0x5a02d3, "Success: incremented " + _0x5e8a58 + " by " + _0x55a0c2);
      }).catch(function (_0x9c4379) {
        window.unityInstance.SendMessage(_0x2b755e, _0x3eda6d, JSON.stringify(_0x9c4379, Object.getOwnPropertyNames(_0x9c4379)));
      });
    } catch (_0x391f0c) {
      window.unityInstance.SendMessage(_0x2b755e, _0x3eda6d, JSON.stringify(_0x391f0c, Object.getOwnPropertyNames(_0x391f0c)));
    }
  }
  function _0x573d63(_0x145fb3) {
    if (typeof _0xdfb7b2 !== "undefined") {
      window.unityStringify = _0xdfb7b2;
    } else {
      window.unityStringify = _0xdfb7b2;
    }
    window.UnitySDK = {
      version: window.unityStringify(_0x145fb3),
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
        var _0x9d99f6 = Array.prototype.slice.call(arguments);
        _0x9d99f6.unshift("[JsLib]");
        console.error.apply(console, _0x9d99f6);
      }
    };
    var _0x21e915 = {
      wrapper: {
        engine: "unity",
        sdkVersion: window.unityStringify(_0x145fb3)
      }
    };
    var _0x38fb94 = document.createElement("script");
    _0x38fb94.src = "https://sdk.crazygames.com/crazygames-sdk-v3.js";
    document.head.appendChild(_0x38fb94);
    _0x38fb94.addEventListener("load", function () {
      window.CrazyGames.SDK.init(_0x21e915).then(function () {
        _0x3799a7("CrazySDKSingleton", "JSLibCallback_Init");
        window.CrazyGames.SDK.ad.hasAdblock().then(function (_0xcbc714) {
          _0x3799a7("CrazySDKSingleton", "JSLibCallback_AdblockDetectionResult", _0xcbc714 ? 1 : 0);
        }).catch(function (_0x25a792) {
          window.UnitySDK.logError("Error while checking adblock:", _0x25a792);
          _0x3799a7("CrazySDKSingleton", "JSLibCallback_AdblockDetectionResult", 0);
        });
        window.CrazyGames.SDK.user.addAuthListener(function (_0x3e92c3) {
          _0x3799a7("CrazySDKSingleton", "JSLibCallback_AuthListener", JSON.stringify({
            userJson: JSON.stringify(_0x3e92c3)
          }));
        });
      });
    });
  }
  function _0x1bec5d() {
    var _0x228773 = window.document;
    var _0x44d0bc = _0x228773.fullscreenElement || _0x228773.mozFullScreenElement || _0x228773.webkitFullscreenElement || _0x228773.msFullscreenElement;
    return _0x44d0bc != null;
  }
  function _0x4f41e2() {
    return window.CrazyGames.SDK.user.isUserAccountAvailable;
  }
  var _0x85904d = null;
  var _0x29bb95 = 0;
  function _0x519af5() {
    return _0x85904d && _0x85904d.activated || _0x29bb95 != 0;
  }
  var _0xfaf415 = 1;
  var _0x2a5eff = {
    x: 0,
    y: 0,
    z: 0
  };
  function _0x3e5429() {
    _0x2a5eff = {
      x: _0x85904d.x * _0xfaf415,
      y: _0x85904d.y * _0xfaf415,
      z: _0x85904d.z * _0xfaf415
    };
    if (_0x29bb95 != 0) {
      _0x26e01a(_0x29bb95, _0x2a5eff.x, _0x2a5eff.y, _0x2a5eff.z);
    }
  }
  var _0x514193 = 0;
  var _0xfb6abf = 0;
  var _0x5d49ff = 0;
  var _0xd7bb0f = 0;
  var _0xf98056 = 0;
  function _0x4d5d02(_0x5274d1, _0x39deb2) {
    var _0x5526e1 = {
      x: _0x5274d1.x - _0x39deb2.x,
      y: _0x5274d1.y - _0x39deb2.y,
      z: _0x5274d1.z - _0x39deb2.z
    };
    var _0x2b724f = _0x5526e1.x * _0x5526e1.x + _0x5526e1.y * _0x5526e1.y + _0x5526e1.z * _0x5526e1.z;
    var _0x5897ee = {
      x: _0x5274d1.x + _0x39deb2.x,
      y: _0x5274d1.y + _0x39deb2.y,
      z: _0x5274d1.z + _0x39deb2.z
    };
    var _0x437c34 = _0x5897ee.x * _0x5897ee.x + _0x5897ee.y * _0x5897ee.y + _0x5897ee.z * _0x5897ee.z;
    if (_0x2b724f <= _0x437c34) {
      return _0x5526e1;
    } else {
      return _0x5897ee;
    }
  }
  function _0x140f4f(_0x52a6d2) {
    var _0x565e13 = {
      x: _0x52a6d2.accelerationIncludingGravity.x * _0xfaf415,
      y: _0x52a6d2.accelerationIncludingGravity.y * _0xfaf415,
      z: _0x52a6d2.accelerationIncludingGravity.z * _0xfaf415
    };
    if (_0x29bb95 != 0) {
      _0x26e01a(_0x29bb95, _0x565e13.x, _0x565e13.y, _0x565e13.z);
    }
    var _0x4eba49 = {
      x: _0x52a6d2.acceleration.x * _0xfaf415,
      y: _0x52a6d2.acceleration.y * _0xfaf415,
      z: _0x52a6d2.acceleration.z * _0xfaf415
    };
    if (_0x5d49ff != 0) {
      _0x26e01a(_0x5d49ff, _0x4eba49.x, _0x4eba49.y, _0x4eba49.z);
    }
    if (_0xd7bb0f != 0) {
      var _0x84a801 = _0x4d5d02(_0x565e13, _0x4eba49);
      _0x26e01a(_0xd7bb0f, _0x84a801.x, _0x84a801.y, _0x84a801.z);
    }
    if (_0xf98056 != 0) {
      var _0x1c718a = Math.PI / 180;
      _0x26e01a(_0xf98056, _0x52a6d2.rotationRate.alpha * _0x1c718a, _0x52a6d2.rotationRate.beta * _0x1c718a, _0x52a6d2.rotationRate.gamma * _0x1c718a);
    }
  }
  var _0x32d777 = 0;
  function _0x4408f3(_0x1bd57b) {
    if (_0x1bd57b & 1) {
      if (typeof DeviceOrientationEvent.requestPermission === "function") {
        DeviceOrientationEvent.requestPermission().then(function (_0x48dd3b) {
          if (_0x48dd3b === "granted") {
            _0x32d777 &= ~1;
          } else {
            _0x29f45c("DeviceOrientationEvent permission not granted");
          }
        }).catch(function (_0x2935f8) {
          _0x29f45c(_0x2935f8);
          _0x32d777 |= 1;
        });
      }
    }
    if (_0x1bd57b & 2) {
      if (typeof DeviceMotionEvent.requestPermission === "function") {
        DeviceMotionEvent.requestPermission().then(function (_0x2139d7) {
          if (_0x2139d7 === "granted") {
            _0x32d777 &= ~2;
          } else {
            _0x29f45c("DeviceMotionEvent permission not granted");
          }
        }).catch(function (_0x5a5b65) {
          _0x29f45c(_0x5a5b65);
          _0x32d777 |= 2;
        });
      }
    }
  }
  function _0x58155c() {
    if (_0x29bb95 == 0 && _0x5d49ff == 0 && _0xd7bb0f == 0 && _0xf98056 == 0) {
      _0x4408f3(2);
      window.addEventListener("devicemotion", _0x140f4f);
    }
  }
  function _0x16aa64() {
    var _0x3584e7 = 9.80665;
    _0xfaf415 = /(iPhone|iPad|Macintosh)/i.test(navigator.userAgent) ? 1 / _0x3584e7 : -1 / _0x3584e7;
  }
  function _0xbce128(_0x48546d, _0x19d9a5) {
    _0x16aa64();
    if (typeof Accelerometer === "undefined") {
      _0x58155c();
      if (_0x48546d != 0) {
        _0x29bb95 = _0x48546d;
      }
      return;
    }
    if (_0x48546d != 0) {
      _0x29bb95 = _0x48546d;
    }
    function _0x421fc9(_0x17da7f) {
      _0x85904d = new Accelerometer({
        frequency: _0x17da7f,
        referenceFrame: "device"
      });
      _0x85904d.addEventListener("reading", _0x3e5429);
      _0x85904d.addEventListener("error", function (_0x8a3cb0) {
        _0x29f45c(_0x8a3cb0.error ? _0x8a3cb0.error : _0x8a3cb0);
      });
      _0x85904d.start();
      _0xfb6abf = _0x17da7f;
    }
    if (_0x85904d) {
      if (_0xfb6abf != _0x19d9a5) {
        _0x85904d.stop();
        _0x85904d.removeEventListener("reading", _0x3e5429);
        _0x421fc9(_0x19d9a5);
      }
    } else if (_0x514193 != 0) {
      _0x514193 = _0x19d9a5;
    } else {
      _0x514193 = _0x19d9a5;
      navigator.permissions.query({
        name: "accelerometer"
      }).then(function (_0x2e7969) {
        if (_0x2e7969.state === "granted") {
          _0x421fc9(_0x514193);
        } else {
          _0x29f45c("No permission to use Accelerometer.");
        }
        _0x514193 = 0;
      });
    }
  }
  function _0x28c2a8() {
    if (_0x29bb95 == 0 && _0x5d49ff == 0 && _0xd7bb0f == 0 && _0xf98056 == 0) {
      window.removeEventListener("devicemotion", _0x4c6156);
    }
  }
  function _0x558127() {
    if (_0x85904d) {
      if (typeof GravitySensor !== "undefined" || _0xd7bb0f == 0) {
        _0x85904d.stop();
        _0x85904d.removeEventListener("reading", _0x3e5429);
        _0x85904d = null;
      }
      _0x29bb95 = 0;
      _0xfb6abf = 0;
    } else if (_0x29bb95 != 0) {
      _0x29bb95 = 0;
      _0x28c2a8();
    }
  }
  function _0x2843ae(_0x4de456, _0x55fe79) {
    var _0x14a536 = "";
    for (var _0x294bb2 = 0; _0x294bb2 < _0x55fe79; _0x294bb2++) {
      _0x14a536 += String.fromCharCode(_0xdf86cd[_0x4de456 + _0x294bb2]);
    }
    _0x25e483.canvas.style.cursor = "url(data:image/cur;base64," + btoa(_0x14a536) + "),default";
  }
  function _0x3b8590(_0x22e09a) {
    _0x25e483.canvas.style.cursor = _0x22e09a ? "default" : "none";
  }
  function _0x2532d4(_0x2d0309) {
    if (typeof window.CSS !== "undefined" && typeof window.CSS.escape !== "undefined") {
      return window.CSS.escape(_0x2d0309);
    }
    return _0x2d0309.replace(/(#|\.|\+|\[|\]|\(|\)|\{|\})/g, "\\$1");
  }
  function _0xc9ebc9() {
    var _0xd75b2 = _0x25e483.canvas ? _0x25e483.canvas.id : "unity-canvas";
    return "#" + _0x2532d4(_0xd75b2);
  }
  function _0x566dc7(_0x16d3b1, _0x311d50, _0x3ed82f, _0x4a7ab6) {
    var _0x4ed0ef = document.querySelector(_0xc9ebc9());
    var _0x5d85e5 = _0x4ed0ef && _0x4ed0ef.getBoundingClientRect();
    _0x2f2db0[_0x3ed82f >> 2] = _0x16d3b1 - (_0x5d85e5 ? _0x5d85e5.left : 0);
    _0x2f2db0[_0x4a7ab6 >> 2] = _0x311d50 - (_0x5d85e5 ? _0x5d85e5.top : 0);
  }
  function _0x568514(_0x375071) {
    var _0x104862 = _0x576ae2(_0x375071) + 1;
    var _0x570003 = _0x434dac(_0x104862);
    _0x517360(_0x375071, _0x570003, _0x104862);
    return _0x570003;
  }
  function _0x3a4d84() {
    var _0x1157b9 = _0xc9ebc9();
    if (_0x3a4d84.selector != _0x1157b9) {
      _0x41b1b9(_0x3a4d84.ptr);
      _0x3a4d84.ptr = _0x568514(_0x1157b9);
      _0x3a4d84.selector = _0x1157b9;
    }
    return _0x3a4d84.ptr;
  }
  function _0x164995(_0x188f13) {
    var _0x226966 = _0xdfb7b2(_0x188f13);
    try {
      eval(_0x226966);
    } catch (_0x13bad8) {
      console.error(_0x13bad8);
    }
  }
  function _0x545dc6(_0x3bfd9e) {
    var _0x3ec436 = _0xdfb7b2(_0x3bfd9e);
    window.open(_0x3ec436, "_blank", "");
  }
  var _0x1bbfac = {
    numPendingSync: 0,
    syncInternal: 1000,
    syncInProgress: false,
    sync: function (_0x444a15) {
      if (_0x444a15) {
        if (_0x1bbfac.numPendingSync == 0) {
          return;
        }
      } else if (_0x1bbfac.syncInProgress) {
        _0x1bbfac.numPendingSync++;
        return;
      }
      _0x1bbfac.syncInProgress = true;
      _0x4de3dc.syncfs(false, function (_0x46b56c) {
        _0x1bbfac.syncInProgress = false;
      });
      _0x1bbfac.numPendingSync = 0;
    }
  };
  function _0x563f7d() {
    _0x25e483.setInterval(function () {
      _0x1bbfac.sync(true);
    }, _0x1bbfac.syncInternal);
  }
  function _0x5c9a94() {
    _0x1bbfac.sync(false);
  }
  var _0xd85f5a = null;
  function _0x3516f1() {
    if (typeof GravitySensor !== "undefined") {
      return _0xd85f5a && _0xd85f5a.activated;
    } else {
      return _0xd7bb0f != 0;
    }
  }
  function _0x23c52c() {
    if (_0xd7bb0f != 0) {
      _0x26e01a(_0xd7bb0f, _0xd85f5a.x * _0xfaf415, _0xd85f5a.y * _0xfaf415, _0xd85f5a.z * _0xfaf415);
    }
  }
  var _0x2084c7 = 0;
  var _0x11176d = null;
  function _0x4fe67a() {
    var _0x3b2f64 = {
      x: _0x11176d.x * _0xfaf415,
      y: _0x11176d.y * _0xfaf415,
      z: _0x11176d.z * _0xfaf415
    };
    if (_0x5d49ff != 0) {
      _0x26e01a(_0x5d49ff, _0x3b2f64.x, _0x3b2f64.y, _0x3b2f64.z);
    }
    if (_0xd7bb0f != 0 && typeof GravitySensor === "undefined") {
      var _0x5b48a4 = _0x4d5d02(_0x2a5eff, _0x3b2f64);
      _0x26e01a(_0xd7bb0f, _0x5b48a4.x, _0x5b48a4.y, _0x5b48a4.z);
    }
  }
  var _0x2de901 = 0;
  var _0x1fb0a2 = 0;
  function _0x35932c(_0x4034a5, _0x3c2ae6) {
    _0x16aa64();
    if (typeof LinearAccelerationSensor === "undefined") {
      _0x58155c();
      if (_0x4034a5 != 0) {
        _0x5d49ff = _0x4034a5;
      }
      return;
    }
    if (_0x4034a5 != 0) {
      _0x5d49ff = _0x4034a5;
    }
    function _0x50c703(_0x2c42df) {
      _0x11176d = new LinearAccelerationSensor({
        frequency: _0x2c42df,
        referenceFrame: "device"
      });
      _0x11176d.addEventListener("reading", _0x4fe67a);
      _0x11176d.addEventListener("error", function (_0xbb98be) {
        _0x29f45c(_0xbb98be.error ? _0xbb98be.error : _0xbb98be);
      });
      _0x11176d.start();
      _0x1fb0a2 = _0x2c42df;
    }
    if (_0x11176d) {
      if (_0x1fb0a2 != _0x3c2ae6) {
        _0x11176d.stop();
        _0x11176d.removeEventListener("reading", _0x4fe67a);
        _0x50c703(_0x3c2ae6);
      }
    } else if (_0x2de901 != 0) {
      _0x2de901 = _0x3c2ae6;
    } else {
      _0x2de901 = _0x3c2ae6;
      navigator.permissions.query({
        name: "accelerometer"
      }).then(function (_0x2ad855) {
        if (_0x2ad855.state === "granted") {
          _0x50c703(_0x2de901);
        } else {
          _0x29f45c("No permission to use LinearAccelerationSensor.");
        }
        _0x2de901 = 0;
      });
    }
  }
  function _0x550af3(_0x5f0a02, _0x5eb0fb) {
    if (typeof GravitySensor === "undefined") {
      _0xbce128(0, Math.max(_0x5eb0fb, _0xfb6abf));
      _0x35932c(0, Math.max(_0x5eb0fb, _0x1fb0a2));
      _0xd7bb0f = _0x5f0a02;
      return;
    }
    _0x16aa64();
    _0xd7bb0f = _0x5f0a02;
    function _0x5b8c5f(_0x26e488) {
      _0xd85f5a = new GravitySensor({
        frequency: _0x26e488,
        referenceFrame: "device"
      });
      _0xd85f5a.addEventListener("reading", _0x23c52c);
      _0xd85f5a.addEventListener("error", function (_0x567769) {
        _0x29f45c(_0x567769.error ? _0x567769.error : _0x567769);
      });
      _0xd85f5a.start();
    }
    if (_0xd85f5a) {
      _0xd85f5a.stop();
      _0xd85f5a.removeEventListener("reading", _0x23c52c);
      _0x5b8c5f(_0x5eb0fb);
    } else if (_0x2084c7 != 0) {
      _0x2084c7 = _0x5eb0fb;
    } else {
      _0x2084c7 = _0x5eb0fb;
      navigator.permissions.query({
        name: "accelerometer"
      }).then(function (_0x5ae684) {
        if (_0x5ae684.state === "granted") {
          _0x5b8c5f(_0x2084c7);
        } else {
          _0x29f45c("No permission to use GravitySensor.");
        }
        _0x2084c7 = 0;
      });
    }
  }
  function _0x33e8a6() {
    if (_0x11176d) {
      if (typeof GravitySensor !== "undefined" || _0xd7bb0f == 0) {
        _0x11176d.stop();
        _0x11176d.removeEventListener("reading", _0x4fe67a);
        _0x11176d = null;
      }
      _0x5d49ff = 0;
      _0x1fb0a2 = 0;
    } else if (_0x5d49ff != 0) {
      _0x5d49ff = 0;
      _0x28c2a8();
    }
  }
  function _0x5e4b7f() {
    _0xd7bb0f = 0;
    if (typeof GravitySensor === "undefined") {
      if (_0x29bb95 == 0) {
        _0x558127();
      }
      if (_0x5d49ff == 0) {
        _0x33e8a6();
      }
      return;
    }
    if (_0xd85f5a) {
      _0xd85f5a.stop();
      _0xd85f5a.removeEventListener("reading", _0x23c52c);
      _0xd85f5a = null;
    }
  }
  function _0x4b8629(_0x2505eb) {
    try {
      (function () {
        _0x57cc4c.call(null, _0x2505eb);
      })();
    } catch (_0x25dc47) {
      console.warn(_0x25dc47);
    }
  }
  var _0x5922fb = null;
  function _0x393b3d() {
    return _0x5922fb && _0x5922fb.activated || _0xf98056 != 0;
  }
  function _0x13dbc6() {
    if (_0xf98056 != 0) {
      _0x26e01a(_0xf98056, _0x5922fb.x, _0x5922fb.y, _0x5922fb.z);
    }
  }
  var _0x2cdf0f = 0;
  function _0x31b466(_0x3c0df3, _0x43ac1e) {
    if (typeof Gyroscope === "undefined") {
      _0x58155c();
      _0xf98056 = _0x3c0df3;
      return;
    }
    _0xf98056 = _0x3c0df3;
    function _0x128f36(_0x2c8781) {
      _0x5922fb = new Gyroscope({
        frequency: _0x2c8781,
        referenceFrame: "device"
      });
      _0x5922fb.addEventListener("reading", _0x13dbc6);
      _0x5922fb.addEventListener("error", function (_0x4b42f5) {
        _0x29f45c(_0x4b42f5.error ? _0x4b42f5.error : _0x4b42f5);
      });
      _0x5922fb.start();
    }
    if (_0x5922fb) {
      _0x5922fb.stop();
      _0x5922fb.removeEventListener("reading", _0x13dbc6);
      _0x128f36(_0x43ac1e);
    } else if (_0x2cdf0f != 0) {
      _0x2cdf0f = _0x43ac1e;
    } else {
      _0x2cdf0f = _0x43ac1e;
      navigator.permissions.query({
        name: "gyroscope"
      }).then(function (_0x5ca4f2) {
        if (_0x5ca4f2.state === "granted") {
          _0x128f36(_0x2cdf0f);
        } else {
          _0x29f45c("No permission to use Gyroscope.");
        }
        _0x2cdf0f = 0;
      });
    }
  }
  function _0x2926ff() {
    if (_0x5922fb) {
      _0x5922fb.stop();
      _0x5922fb.removeEventListener("reading", _0x13dbc6);
      _0x5922fb = null;
      _0xf98056 = 0;
    } else if (_0xf98056 != 0) {
      _0xf98056 = 0;
      _0x28c2a8();
    }
  }
  function _0x5f04c4() {
    const _0x29f321 = function (_0x248296) {
      if (_0x248296.target.localName !== "canvas") {
        _0x287a98();
      }
    };
    document.addEventListener("contextmenu", _0x29f321);
    _0x25e483.deinitializers.push(function () {
      document.removeEventListener("contextmenu", _0x29f321);
    });
  }
  function _0x167574() {
    return _0x11176d && _0x11176d.activated || _0x5d49ff != 0;
  }
  function _0x445294(_0xdd7393, _0x4ca97f) {
    var _0x55c51b = _0xdfb7b2(_0xdd7393);
    if (typeof dump == "function") {
      dump(_0x55c51b);
    }
    switch (_0x4ca97f) {
      case 0:
      case 1:
      case 4:
        console.error(_0x55c51b);
        return;
      case 2:
        console.warn(_0x55c51b);
        return;
      case 3:
      case 5:
        console.log(_0x55c51b);
        return;
      default:
        console.error("Unknown console message type!");
        console.error(_0x55c51b);
    }
  }
  function _0x482377(_0x2ee931, _0x54cded) {
    var _0x498ac8 = _0x27bd0f();
    if (_0x2ee931) {
      _0x517360(_0x498ac8, _0x2ee931, _0x54cded);
    }
    return _0x576ae2(_0x498ac8);
  }
  var _0x15d3d6 = null;
  var _0x3e952b = 0;
  function _0x2dc8b8() {
    return _0x15d3d6 && _0x15d3d6.activated || _0x3e952b != 0;
  }
  function _0x25ad3a() {
    if (_0x3e952b != 0) {
      _0x1a5a78(_0x3e952b, _0x15d3d6.quaternion[0], _0x15d3d6.quaternion[1], _0x15d3d6.quaternion[2], _0x15d3d6.quaternion[3]);
    }
  }
  var _0x1e54a4 = 0;
  function _0x4c6156(_0xf185) {
    if (_0x3e952b) {
      var _0x56f9f1 = Math.PI / 180;
      var _0x4204c5 = _0xf185.beta * _0x56f9f1;
      var _0x480e41 = _0xf185.gamma * _0x56f9f1;
      var _0x90ed12 = _0xf185.alpha * _0x56f9f1;
      var _0x549a03 = Math.cos(_0x4204c5 / 2);
      var _0x4fc6fb = Math.sin(_0x4204c5 / 2);
      var _0x63c976 = Math.cos(_0x480e41 / 2);
      var _0xf6e89f = Math.sin(_0x480e41 / 2);
      var _0x307ac4 = Math.cos(_0x90ed12 / 2);
      var _0x82f6dc = Math.sin(_0x90ed12 / 2);
      var _0x12d660 = _0x4fc6fb * _0x63c976 * _0x307ac4 - _0x549a03 * _0xf6e89f * _0x82f6dc;
      var _0x5709a5 = _0x549a03 * _0xf6e89f * _0x307ac4 + _0x4fc6fb * _0x63c976 * _0x82f6dc;
      var _0xa5c8bc = _0x549a03 * _0x63c976 * _0x82f6dc + _0x4fc6fb * _0xf6e89f * _0x307ac4;
      var _0x5dd16f = _0x549a03 * _0x63c976 * _0x307ac4 - _0x4fc6fb * _0xf6e89f * _0x82f6dc;
      _0x1a5a78(_0x3e952b, _0x12d660, _0x5709a5, _0xa5c8bc, _0x5dd16f);
    }
  }
  function _0x58f964(_0x571976, _0x18ff7f) {
    if (typeof RelativeOrientationSensor === "undefined") {
      if (_0x3e952b == 0) {
        _0x3e952b = _0x571976;
        _0x4408f3(1);
        window.addEventListener("deviceorientation", _0x4c6156);
      }
      return;
    }
    _0x3e952b = _0x571976;
    function _0x28e1e2(_0x5278a3) {
      _0x15d3d6 = new RelativeOrientationSensor({
        frequency: _0x5278a3,
        referenceFrame: "device"
      });
      _0x15d3d6.addEventListener("reading", _0x25ad3a);
      _0x15d3d6.addEventListener("error", function (_0x3e910d) {
        _0x29f45c(_0x3e910d.error ? _0x3e910d.error : _0x3e910d);
      });
      _0x15d3d6.start();
    }
    if (_0x15d3d6) {
      _0x15d3d6.stop();
      _0x15d3d6.removeEventListener("reading", _0x25ad3a);
      _0x28e1e2(_0x18ff7f);
    } else if (_0x1e54a4 != 0) {
      _0x1e54a4 = _0x18ff7f;
    } else {
      _0x1e54a4 = _0x18ff7f;
      Promise.all([navigator.permissions.query({
        name: "accelerometer"
      }), navigator.permissions.query({
        name: "gyroscope"
      })]).then(function (_0x27dbfe) {
        if (_0x27dbfe.every(function (_0x351013) {
          return _0x351013.state === "granted";
        })) {
          _0x28e1e2(_0x1e54a4);
        } else {
          _0x29f45c("No permissions to use RelativeOrientationSensor.");
        }
        _0x1e54a4 = 0;
      });
    }
  }
  function _0x3ca5ce() {
    if (_0x15d3d6) {
      _0x15d3d6.stop();
      _0x15d3d6.removeEventListener("reading", _0x25ad3a);
      _0x15d3d6 = null;
    } else if (_0x3e952b != 0) {
      window.removeEventListener("deviceorientation", _0x4c6156);
    }
    _0x3e952b = 0;
  }
  function _0x5d541e() {
    if (_0x32d777 == 0) {
      return;
    }
    _0x4408f3(_0x32d777);
  }
  function _0xa75cc6() {
    _0x25e483.QuitCleanup();
  }
  var _0x15c7f9 = 0;
  function _0x556a55() {
    if (_0x15c7f9) {
      _0x1e002d(_0x15c7f9, window.innerWidth, window.innerHeight, screen.orientation ? screen.orientation.angle : window.orientation);
    }
  }
  function _0x3c6952() {
    _0x15c7f9 = 0;
    window.removeEventListener("resize", _0x556a55);
    if (screen.orientation) {
      screen.orientation.removeEventListener("change", _0x556a55);
    }
  }
  function _0x29debe(_0x4fa4d6) {
    if (!_0x15c7f9) {
      if (screen.orientation) {
        screen.orientation.addEventListener("change", _0x556a55);
      }
      window.addEventListener("resize", _0x556a55);
      _0x15c7f9 = _0x4fa4d6;
      setTimeout(_0x556a55, 0);
    }
  }
  var _0x5dc1d3 = -1;
  var _0x237501 = -1;
  var _0x5881f6 = -1;
  function _0x207094(_0x45ad81) {
    if (!screen.orientation || !screen.orientation.lock) {
      return;
    }
    function _0xeb34e7() {
      _0x237501 = _0x5dc1d3;
      var _0x4903e3 = ["any", 0, "landscape", "portrait", "portrait-primary", "portrait-secondary", "landscape-primary", "landscape-secondary"];
      var _0x3d3744 = _0x4903e3[_0x237501];
      screen.orientation.lock(_0x3d3744).then(function () {
        if (_0x5dc1d3 != _0x237501) {
          _0x5881f6 = setTimeout(_0xeb34e7, 0);
        } else {
          _0x5881f6 = -1;
        }
      }).catch(function (_0x5e645c) {
        _0x29f45c(_0x5e645c);
        _0x5881f6 = -1;
      });
    }
    _0x5dc1d3 = _0x45ad81;
    if (_0x5881f6 == -1 && _0x45ad81 != _0x237501) {
      _0x5881f6 = setTimeout(_0xeb34e7, 0);
    }
  }
  var _0x417717 = {
    audioInstanceIdCounter: 0,
    audioInstances: {},
    audioContext: null,
    audioWebEnabled: 0,
    audioCache: [],
    pendingAudioSources: {}
  };
  function _0x12c0c5(_0x35b0a8) {
    _0x35b0a8.estimatePlaybackPosition = function () {
      var _0x35124b = (_0x417717.audioContext.currentTime - _0x35b0a8.playbackStartTime) * _0x35b0a8.playbackRate.value;
      if (_0x35b0a8.loop && _0x35124b >= _0x35b0a8.loopStart) {
        _0x35124b = (_0x35124b - _0x35b0a8.loopStart) % (_0x35b0a8.loopEnd - _0x35b0a8.loopStart) + _0x35b0a8.loopStart;
      }
      return _0x35124b;
    };
    _0x35b0a8.setPitch = function (_0x4bb8ef) {
      var _0x1f94a4 = _0x35b0a8.estimatePlaybackPosition();
      if (_0x1f94a4 >= 0) {
        _0x35b0a8.playbackStartTime = _0x417717.audioContext.currentTime - _0x1f94a4 / _0x4bb8ef;
      }
      if (_0x35b0a8.playbackRate.value !== _0x4bb8ef) {
        _0x35b0a8.playbackRate.value = _0x4bb8ef;
      }
    };
  }
  function _0x158ad0(_0x3c77cb, _0x43ad81) {
    var _0x47b770 = {
      buffer: _0x3c77cb,
      error: _0x43ad81
    };
    _0x47b770.release = function () {};
    _0x47b770.getLength = function () {
      if (!this.buffer) {
        console.log("Trying to get length of sound which is not loaded.");
        return 0;
      }
      var _0x58f00e = 44100 / this.buffer.sampleRate;
      return this.buffer.length * _0x58f00e;
    };
    _0x47b770.getData = function (_0x1b7078, _0x1eeff9) {
      if (!this.buffer) {
        console.log("Trying to get data of sound which is not loaded.");
        return 0;
      }
      var _0x20313e = _0x1b7078 >> 2;
      var _0x4a0532 = _0x2b9907.subarray(_0x20313e, _0x20313e + (_0x1eeff9 >> 2));
      var _0x11e448 = Math.floor((_0x1eeff9 >> 2) / this.buffer.numberOfChannels);
      var _0x1f0ef9 = Math.min(this.buffer.length, _0x11e448);
      for (var _0x2af70a = 0; _0x2af70a < this.buffer.numberOfChannels; _0x2af70a++) {
        var _0x227c75 = this.buffer.getChannelData(_0x2af70a).subarray(0, _0x1f0ef9);
        _0x4a0532.set(_0x227c75, _0x2af70a * _0x1f0ef9);
      }
      return _0x1f0ef9 * this.buffer.numberOfChannels * 4;
    };
    _0x47b770.getNumberOfChannels = function () {
      if (!this.buffer) {
        console.log("Trying to get metadata of sound which is not loaded.");
        return 0;
      }
      return this.buffer.numberOfChannels;
    };
    _0x47b770.getFrequency = function () {
      if (!this.buffer) {
        console.log("Trying to get metadata of sound which is not loaded.");
        return 0;
      }
      return this.buffer.sampleRate;
    };
    _0x47b770.createSourceNode = function () {
      if (!this.buffer) {
        console.log("Trying to play sound which is not loaded.");
      }
      var _0x41cf9f = _0x417717.audioContext.createBufferSource();
      _0x41cf9f.buffer = this.buffer;
      _0x12c0c5(_0x41cf9f);
      return _0x41cf9f;
    };
    return _0x47b770;
  }
  function _0x24d221(_0x633f4b, _0x306ff0) {
    var _0x4ac2e6 = {
      callback: _0x633f4b,
      userData: _0x306ff0,
      source: null,
      gain: _0x417717.audioContext.createGain(),
      panner: _0x417717.audioContext.createPanner(),
      threeD: false,
      loop: false,
      loopStart: 0,
      loopEnd: 0,
      pitch: 1
    };
    _0x4ac2e6.panner.rolloffFactor = 0;
    _0x4ac2e6.release = function () {
      this.disconnectSource();
      this.gain.disconnect();
      this.panner.disconnect();
    };
    _0x4ac2e6.playSoundClip = function (_0xc1350e, _0x34f3a1, _0x3a3768) {
      try {
        var _0x4bd905 = this;
        this.source = _0xc1350e.createSourceNode();
        this.setupPanning();
        this.source.onended = function () {
          _0x4bd905.source.isStopped = true;
          _0x4bd905.disconnectSource();
          if (_0x4bd905.callback) {
            _0x2f5dea("vi", _0x4bd905.callback, [_0x4bd905.userData]);
          }
        };
        this.source.loop = this.loop;
        this.source.loopStart = this.loopStart;
        this.source.loopEnd = this.loopEnd;
        this.source.start(_0x34f3a1, _0x3a3768);
        this.source.playbackStartTime = _0x34f3a1 - _0x3a3768 / this.source.playbackRate.value;
        this.source.setPitch(this.pitch);
      } catch (_0x477a9d) {
        console.error("Channel.playSoundClip error. Exception: " + _0x477a9d);
      }
    };
    _0x4ac2e6.stop = function (_0x5ca1d7) {
      if (!this.source) {
        return;
      }
      try {
        _0x4ac2e6.source.stop(_0x417717.audioContext.currentTime + _0x5ca1d7);
      } catch (_0x2d0bbe) {}
      if (_0x5ca1d7 == 0) {
        this.disconnectSource();
      }
    };
    _0x4ac2e6.isPaused = function () {
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
    _0x4ac2e6.pause = function () {
      if (!this.source || this.source.isPausedMockNode) {
        return;
      }
      if (this.source.mediaElement) {
        this.source._pauseMediaElement();
        return;
      }
      var _0x4916d9 = {
        isPausedMockNode: true,
        buffer: this.source.buffer,
        loop: this.source.loop,
        loopStart: this.source.loopStart,
        loopEnd: this.source.loopEnd,
        playbackRate: this.source.playbackRate.value,
        scheduledStopTime: undefined,
        playbackPausedAtPosition: this.source.estimatePlaybackPosition(),
        setPitch: function (_0x73b2ec) {
          this.playbackRate = _0x73b2ec;
        },
        stop: function (_0x3e9999) {
          this.scheduledStopTime = _0x3e9999;
        }
      };
      this.stop(0);
      this.disconnectSource();
      this.source = _0x4916d9;
    };
    _0x4ac2e6.resume = function () {
      if (this.source && this.source.mediaElement) {
        this.source.start(undefined, this.source.currentTime);
        return;
      }
      if (!this.source || !this.source.isPausedMockNode) {
        return;
      }
      var _0x2f5ce1 = this.source;
      var _0x3e7be2 = _0x158ad0(_0x2f5ce1.buffer, false);
      this.playSoundClip(_0x3e7be2, _0x417717.audioContext.currentTime, Math.max(0, _0x2f5ce1.playbackPausedAtPosition));
      this.source.loop = _0x2f5ce1.loop;
      this.source.loopStart = _0x2f5ce1.loopStart;
      this.source.loopEnd = _0x2f5ce1.loopEnd;
      this.source.setPitch(_0x2f5ce1.playbackRate);
      if (typeof _0x2f5ce1.scheduledStopTime !== "undefined") {
        var _0x441986 = Math.max(_0x2f5ce1.scheduledStopTime - _0x417717.audioContext.currentTime, 0);
        this.stop(_0x441986);
      }
    };
    _0x4ac2e6.setLoop = function (_0x3e5d8e) {
      this.loop = _0x3e5d8e;
      if (!this.source || this.source.loop == _0x3e5d8e) {
        return;
      }
      this.source.loop = _0x3e5d8e;
    };
    _0x4ac2e6.setLoopPoints = function (_0x320329, _0x166e12) {
      this.loopStart = _0x320329;
      this.loopEnd = _0x166e12;
      if (!this.source) {
        return;
      }
      if (this.source.loopStart !== _0x320329) {
        this.source.loopStart = _0x320329;
      }
      if (this.source.loopEnd !== _0x166e12) {
        this.source.loopEnd = _0x166e12;
      }
    };
    _0x4ac2e6.set3D = function (_0x1dc365) {
      if (this.threeD == _0x1dc365) {
        return;
      }
      this.threeD = _0x1dc365;
      if (!this.source) {
        return;
      }
      this.setupPanning();
    };
    _0x4ac2e6.setPitch = function (_0x39972a) {
      this.pitch = _0x39972a;
      if (!this.source) {
        return;
      }
      this.source.setPitch(_0x39972a);
    };
    _0x4ac2e6.setVolume = function (_0x2bdac4) {
      if (this.gain.gain.value == _0x2bdac4) {
        return;
      }
      this.gain.gain.value = _0x2bdac4;
    };
    _0x4ac2e6.setPosition = function (_0x194ca0, _0x146613, _0x3856c1) {
      var _0x5495ad = this.panner;
      if (_0x5495ad.positionX) {
        if (_0x5495ad.positionX.value !== _0x194ca0) {
          _0x5495ad.positionX.value = _0x194ca0;
        }
        if (_0x5495ad.positionY.value !== _0x146613) {
          _0x5495ad.positionY.value = _0x146613;
        }
        if (_0x5495ad.positionZ.value !== _0x3856c1) {
          _0x5495ad.positionZ.value = _0x3856c1;
        }
      } else if (_0x5495ad._x !== _0x194ca0 || _0x5495ad._y !== _0x146613 || _0x5495ad._z !== _0x3856c1) {
        _0x5495ad.setPosition(_0x194ca0, _0x146613, _0x3856c1);
        _0x5495ad._x = _0x194ca0;
        _0x5495ad._y = _0x146613;
        _0x5495ad._z = _0x3856c1;
      }
    };
    _0x4ac2e6.disconnectSource = function () {
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
    _0x4ac2e6.setupPanning = function () {
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
      this.gain.connect(_0x417717.audioContext.destination);
    };
    _0x4ac2e6.isStopped = function () {
      if (!this.source) {
        return true;
      }
      if (this.source.mediaElement) {
        return this.source.isStopped;
      }
      return false;
    };
    return _0x4ac2e6;
  }
  function _0x51e2c5(_0x274887, _0x3df4ed) {
    if (_0x417717.audioWebEnabled == 0) {
      return;
    }
    _0x417717.audioInstances[++_0x417717.audioInstanceIdCounter] = _0x24d221(_0x274887, _0x3df4ed);
    return _0x417717.audioInstanceIdCounter;
  }
  function _0x2cd2a6(_0x30850f) {
    if (_0x417717.audioWebEnabled == 0) {
      return 0;
    }
    var _0x276be2 = _0x417717.audioInstances[_0x30850f];
    if (!_0x276be2) {
      return 0;
    }
    return _0x276be2.getLength();
  }
  function _0x32ae42(_0x59d2df) {
    if (_0x417717.audioWebEnabled == 0) {
      return 2;
    }
    var _0x3e82a3 = _0x417717.audioInstances[_0x59d2df];
    if (_0x3e82a3.error) {
      return 2;
    }
    if (_0x3e82a3.buffer || _0x3e82a3.url) {
      return 0;
    }
    return 1;
  }
  function _0x3cd861(_0x790933, _0x32eddd) {
    if (_0x417717.audioWebEnabled == 0) {
      _0x2f2db0[_0x32eddd >> 2] = 0;
      _0x2f2db0[(_0x32eddd >> 2) + 1] = 0;
      return false;
    }
    var _0x476da7 = _0x417717.audioInstances[_0x790933];
    if (!_0x476da7) {
      _0x2f2db0[_0x32eddd >> 2] = 0;
      _0x2f2db0[(_0x32eddd >> 2) + 1] = 0;
      return false;
    }
    _0x2f2db0[_0x32eddd >> 2] = _0x476da7.getNumberOfChannels();
    _0x2f2db0[(_0x32eddd >> 2) + 1] = _0x476da7.getFrequency();
    return true;
  }
  function _0x46d2db(_0x4e6a24) {
    var _0x3a99bc = _0x417717.pendingAudioSources[_0x4e6a24];
    _0x3a99bc.sourceNode._startPlayback(_0x3a99bc.offset);
    delete _0x417717.pendingAudioSources[_0x4e6a24];
  }
  function _0x77dbed() {
    Object.keys(_0x417717.pendingAudioSources).forEach(function (_0x1f24fa) {
      _0x46d2db(_0x1f24fa);
    });
  }
  function _0x543854() {
    try {
      window.AudioContext = window.AudioContext || window.webkitAudioContext;
      _0x417717.audioContext = new AudioContext();
      function _0xab8f7() {
        if (_0x417717.audioContext.state === "suspended") {
          _0x417717.audioContext.resume().catch(function (_0xee9fa5) {
            console.warn("Could not resume audio context. Exception: " + _0xee9fa5);
          });
        } else {
          _0x25e483.clearInterval(_0x14eb3a);
        }
      }
      var _0x14eb3a = _0x25e483.setInterval(_0xab8f7, 400);
      _0x417717.audioWebEnabled = 1;
      function _0x18c095() {
        try {
          if (_0x417717.audioContext.state !== "running" && _0x417717.audioContext.state !== "closed") {
            _0x417717.audioContext.resume().catch(function (_0x2a06bb) {
              console.warn("Could not resume audio context. Exception: " + _0x2a06bb);
            });
          }
          _0x77dbed();
          var _0x95a827 = 20;
          while (_0x417717.audioCache.length < _0x95a827) {
            var _0x314fca = new Audio();
            _0x314fca.autoplay = false;
            _0x417717.audioCache.push(_0x314fca);
          }
        } catch (_0x3fe54d) {}
      }
      window.addEventListener("mousedown", _0x18c095);
      window.addEventListener("touchstart", _0x18c095);
      _0x25e483.deinitializers.push(function () {
        window.removeEventListener("mousedown", _0x18c095);
        window.removeEventListener("touchstart", _0x18c095);
      });
    } catch (_0x40c671) {
      alert("Web Audio API is not supported in this browser");
    }
  }
  function _0x350164(_0x40410c) {
    var _0x1ae004 = _0x158ad0(null, false);
    _0x417717.audioContext.decodeAudioData(_0x40410c, function (_0x40709d) {
      _0x1ae004.buffer = _0x40709d;
    }, function (_0x43989) {
      _0x1ae004.error = true;
      console.log("Decode error: " + _0x43989);
    });
    return _0x1ae004;
  }
  function _0x20782d(_0x81087, _0x109dac) {
    _0x417717.pendingAudioSources[_0x81087.mediaElement.src] = {
      sourceNode: _0x81087,
      offset: _0x109dac
    };
  }
  function _0x3eef00(_0x5c75fb) {
    switch (_0x5c75fb) {
      case 13:
        return "audio/mpeg";
      case 20:
        return "audio/wav";
      default:
        return "audio/mp4";
    }
  }
  function _0x62b7ef(_0x3b5298, _0x1abe5b) {
    var _0x26c26e = _0x3eef00(_0x1abe5b);
    var _0x1bf77a = new Blob([_0x3b5298], {
      type: _0x26c26e
    });
    var _0x4c95b2 = {
      url: URL.createObjectURL(_0x1bf77a),
      error: false,
      mediaElement: new Audio()
    };
    _0x4c95b2.mediaElement.preload = "metadata";
    _0x4c95b2.mediaElement.src = _0x4c95b2.url;
    _0x4c95b2.release = function () {
      if (!this.mediaElement) {
        return;
      }
      this.mediaElement.src = "";
      URL.revokeObjectURL(this.url);
      delete this.mediaElement;
      delete this.url;
    };
    _0x4c95b2.getLength = function () {
      return this.mediaElement.duration * 44100;
    };
    _0x4c95b2.getData = function (_0x120a89, _0x3887a0) {
      console.warn("getData() is not supported for compressed sound.");
      return 0;
    };
    _0x4c95b2.getNumberOfChannels = function () {
      console.warn("getNumberOfChannels() is not supported for compressed sound.");
      return 0;
    };
    _0x4c95b2.getFrequency = function () {
      console.warn("getFrequency() is not supported for compressed sound.");
      return 0;
    };
    _0x4c95b2.createSourceNode = function () {
      var _0x4bebcd = this;
      var _0x2c3aa3 = _0x417717.audioCache.length ? _0x417717.audioCache.pop() : new Audio();
      _0x2c3aa3.preload = "metadata";
      _0x2c3aa3.src = this.url;
      var _0x2e46e0 = _0x417717.audioContext.createMediaElementSource(_0x2c3aa3);
      Object.defineProperty(_0x2e46e0, "loop", {
        get: function () {
          return _0x2e46e0.mediaElement.loop;
        },
        set: function (_0x1aa481) {
          if (_0x2e46e0.mediaElement.loop !== _0x1aa481) {
            _0x2e46e0.mediaElement.loop = _0x1aa481;
          }
        }
      });
      _0x2e46e0.playbackRate = {};
      Object.defineProperty(_0x2e46e0.playbackRate, "value", {
        get: function () {
          return _0x2e46e0.mediaElement.playbackRate;
        },
        set: function (_0x2db737) {
          if (_0x2e46e0.mediaElement.playbackRate !== _0x2db737) {
            _0x2e46e0.mediaElement.playbackRate = _0x2db737;
          }
        }
      });
      Object.defineProperty(_0x2e46e0, "currentTime", {
        get: function () {
          return _0x2e46e0.mediaElement.currentTime;
        },
        set: function (_0x1df621) {
          if (_0x2e46e0.mediaElement.currentTime !== _0x1df621) {
            _0x2e46e0.mediaElement.currentTime = _0x1df621;
          }
        }
      });
      Object.defineProperty(_0x2e46e0, "mute", {
        get: function () {
          return _0x2e46e0.mediaElement.mute;
        },
        set: function (_0x3b5c18) {
          if (_0x2e46e0.mediaElement.mute !== _0x3b5c18) {
            _0x2e46e0.mediaElement.mute = _0x3b5c18;
          }
        }
      });
      Object.defineProperty(_0x2e46e0, "onended", {
        get: function () {
          return _0x2e46e0.mediaElement.onended;
        },
        set: function (_0x122f51) {
          _0x2e46e0.mediaElement.onended = _0x122f51;
        }
      });
      _0x2e46e0.playPromise = null;
      _0x2e46e0.playTimeout = null;
      _0x2e46e0.pauseRequested = false;
      _0x2e46e0.isStopped = false;
      _0x2e46e0._pauseMediaElement = function () {
        if (_0x2e46e0.playPromise || _0x2e46e0.playTimeout) {
          _0x2e46e0.pauseRequested = true;
        } else {
          _0x2e46e0.mediaElement.pause();
        }
      };
      _0x2e46e0._startPlayback = function (_0x5cf905) {
        if (_0x2e46e0.playPromise || _0x2e46e0.playTimeout) {
          _0x2e46e0.mediaElement.currentTime = _0x5cf905;
          _0x2e46e0.pauseRequested = false;
          return;
        }
        _0x2e46e0.mediaElement.currentTime = _0x5cf905;
        _0x2e46e0.playPromise = _0x2e46e0.mediaElement.play();
        if (_0x2e46e0.playPromise) {
          _0x2e46e0.playPromise.then(function () {
            if (_0x2e46e0.pauseRequested) {
              _0x2e46e0.mediaElement.pause();
              _0x2e46e0.pauseRequested = false;
            }
            _0x2e46e0.playPromise = null;
          }).catch(function (_0xcf34ac) {
            _0x2e46e0.playPromise = null;
            if (_0xcf34ac.name !== "NotAllowedError") {
              throw _0xcf34ac;
            }
            _0x20782d(_0x2e46e0, _0x5cf905);
          });
        }
      };
      _0x2e46e0.start = function (_0x41e31d, _0x16bb04) {
        if (typeof _0x41e31d === "undefined") {
          _0x41e31d = _0x417717.audioContext.currentTime;
        }
        if (typeof _0x16bb04 === "undefined") {
          _0x16bb04 = 0;
        }
        var _0x4e0f49 = 4;
        var _0x368f36 = (_0x41e31d - _0x417717.audioContext.currentTime) * 1000;
        if (_0x368f36 > _0x4e0f49) {
          _0x2e46e0.playTimeout = setTimeout(function () {
            _0x2e46e0.playTimeout = null;
            _0x2e46e0._startPlayback(_0x16bb04);
          }, _0x368f36);
        } else {
          _0x2e46e0._startPlayback(_0x16bb04);
        }
      };
      _0x2e46e0.stop = function (_0x2a47f7) {
        if (typeof _0x2a47f7 === "undefined") {
          _0x2a47f7 = _0x417717.audioContext.currentTime;
        }
        var _0x2309a2 = 4;
        var _0x23afc4 = (_0x2a47f7 - _0x417717.audioContext.currentTime) * 1000;
        if (_0x23afc4 > _0x2309a2) {
          setTimeout(function () {
            _0x2e46e0._pauseMediaElement();
            _0x2e46e0.isStopped = true;
          }, _0x23afc4);
        } else {
          _0x2e46e0._pauseMediaElement();
          _0x2e46e0.isStopped = true;
        }
      };
      _0x12c0c5(_0x2e46e0);
      return _0x2e46e0;
    };
    return _0x4c95b2;
  }
  function _0x4f038f(_0x12ca83, _0x54e8da, _0x3b6b37, _0x3a61bb) {
    if (_0x417717.audioWebEnabled == 0) {
      return 0;
    }
    var _0x2fd6c6 = _0xdf86cd.buffer.slice(_0x12ca83, _0x12ca83 + _0x54e8da);
    if (_0x54e8da < 131072) {
      _0x3b6b37 = 1;
    }
    var _0x5a1540;
    if (_0x3b6b37) {
      _0x5a1540 = _0x350164(_0x2fd6c6);
    } else {
      _0x5a1540 = _0x62b7ef(_0x2fd6c6, _0x3a61bb);
    }
    _0x417717.audioInstances[++_0x417717.audioInstanceIdCounter] = _0x5a1540;
    return _0x417717.audioInstanceIdCounter;
  }
  function _0xfb78f4(_0x5d79a4, _0x3229c1, _0x1e05aa, _0xb91550) {
    var _0x59ec7d = _0x417717.audioContext.createBuffer(_0x5d79a4, _0x3229c1, _0x1e05aa);
    for (var _0x426c0c = 0; _0x426c0c < _0x5d79a4; _0x426c0c++) {
      var _0x4833cd = (_0xb91550 >> 2) + _0x3229c1 * _0x426c0c;
      var _0x4edab1 = _0x59ec7d.copyToChannel || function (_0x9aa4e4, _0x338723, _0x157488) {
        var _0x2b2b5f = _0x9aa4e4.subarray(0, Math.min(_0x9aa4e4.length, this.length - (_0x157488 | 0)));
        this.getChannelData(_0x338723 | 0).set(_0x2b2b5f, _0x157488 | 0);
      };
      _0x4edab1.apply(_0x59ec7d, [_0x2b9907.subarray(_0x4833cd, _0x4833cd + _0x3229c1), _0x426c0c, 0]);
    }
    return _0x158ad0(_0x59ec7d, false);
  }
  function _0x24a531(_0x453fc4, _0x1942d, _0x3e110e, _0x3e280f) {
    if (_0x417717.audioWebEnabled == 0) {
      return 0;
    }
    var _0x21fcf5 = _0xfb78f4(_0x453fc4, _0x1942d, _0x3e110e, _0x3e280f);
    _0x417717.audioInstances[++_0x417717.audioInstanceIdCounter] = _0x21fcf5;
    return _0x417717.audioInstanceIdCounter;
  }
  function _0x22653c(_0x44feec, _0x482ac2, _0x354c2d, _0x5526f7) {
    if (_0x417717.audioWebEnabled == 0) {
      return;
    }
    _0x4dd1c0(_0x482ac2, 0);
    var _0x5ee684 = _0x417717.audioInstances[_0x44feec];
    var _0x92d58b = _0x417717.audioInstances[_0x482ac2];
    if (!_0x5ee684) {
      console.log("Trying to play sound which is not loaded.");
      return;
    }
    try {
      _0x92d58b.playSoundClip(_0x5ee684, _0x417717.audioContext.currentTime + _0x5526f7, _0x354c2d);
    } catch (_0x159fde) {
      console.error("playSoundClip error. Exception: " + e);
    }
  }
  function _0x57441d(_0x495761) {
    var _0x32dec4 = _0x417717.audioInstances[_0x495761];
    if (_0x32dec4) {
      _0x32dec4.release();
    }
    delete _0x417717.audioInstances[_0x495761];
  }
  function _0x5d3d6d() {
    if (_0x417717.audioWebEnabled == 0) {
      return;
    }
    if (_0x417717.audioContext.state === "suspended") {
      _0x417717.audioContext.resume().catch(function (_0x48534c) {
        console.warn("Could not resume audio context. Exception: " + _0x48534c);
      });
    }
  }
  function _0x3b7ec4(_0x2de43b, _0xba5ac8) {
    var _0x18c64f = _0x417717.audioInstances[_0x2de43b];
    _0x18c64f.set3D(_0xba5ac8);
  }
  function _0x520ef2(_0x5136aa, _0x1826d9, _0x4ff81a, _0x3159d3, _0x383381, _0x1d014e) {
    if (_0x417717.audioWebEnabled == 0) {
      return;
    }
    _0x5136aa = -_0x5136aa;
    _0x1826d9 = -_0x1826d9;
    _0x4ff81a = -_0x4ff81a;
    var _0x30eda7 = _0x417717.audioContext.listener;
    if (_0x30eda7.forwardX) {
      if (_0x30eda7.forwardX.value !== _0x5136aa) {
        _0x30eda7.forwardX.value = _0x5136aa;
      }
      if (_0x30eda7.forwardY.value !== _0x1826d9) {
        _0x30eda7.forwardY.value = _0x1826d9;
      }
      if (_0x30eda7.forwardZ.value !== _0x4ff81a) {
        _0x30eda7.forwardZ.value = _0x4ff81a;
      }
      if (_0x30eda7.upX.value !== _0x3159d3) {
        _0x30eda7.upX.value = _0x3159d3;
      }
      if (_0x30eda7.upY.value !== _0x383381) {
        _0x30eda7.upY.value = _0x383381;
      }
      if (_0x30eda7.upZ.value !== _0x1d014e) {
        _0x30eda7.upZ.value = _0x1d014e;
      }
    } else if (_0x30eda7._forwardX !== _0x5136aa || _0x30eda7._forwardY !== _0x1826d9 || _0x30eda7._forwardZ !== _0x4ff81a || _0x30eda7._upX !== _0x3159d3 || _0x30eda7._upY !== _0x383381 || _0x30eda7._upZ !== _0x1d014e) {
      _0x30eda7.setOrientation(_0x5136aa, _0x1826d9, _0x4ff81a, _0x3159d3, _0x383381, _0x1d014e);
      _0x30eda7._forwardX = _0x5136aa;
      _0x30eda7._forwardY = _0x1826d9;
      _0x30eda7._forwardZ = _0x4ff81a;
      _0x30eda7._upX = _0x3159d3;
      _0x30eda7._upY = _0x383381;
      _0x30eda7._upZ = _0x1d014e;
    }
  }
  function _0x4c6aa9(_0xc6b569, _0x48385a, _0x232583) {
    if (_0x417717.audioWebEnabled == 0) {
      return;
    }
    var _0xd56dc1 = _0x417717.audioContext.listener;
    if (_0xd56dc1.positionX) {
      if (_0xd56dc1.positionX.value !== _0xc6b569) {
        _0xd56dc1.positionX.value = _0xc6b569;
      }
      if (_0xd56dc1.positionY.value !== _0x48385a) {
        _0xd56dc1.positionY.value = _0x48385a;
      }
      if (_0xd56dc1.positionZ.value !== _0x232583) {
        _0xd56dc1.positionZ.value = _0x232583;
      }
    } else if (_0xd56dc1._positionX !== _0xc6b569 || _0xd56dc1._positionY !== _0x48385a || _0xd56dc1._positionZ !== _0x232583) {
      _0xd56dc1.setPosition(_0xc6b569, _0x48385a, _0x232583);
      _0xd56dc1._positionX = _0xc6b569;
      _0xd56dc1._positionY = _0x48385a;
      _0xd56dc1._positionZ = _0x232583;
    }
  }
  function _0x2cbb1e(_0x15634d, _0x57bd65) {
    if (_0x417717.audioWebEnabled == 0) {
      return;
    }
    var _0x2f1fdb = _0x417717.audioInstances[_0x15634d];
    _0x2f1fdb.setLoop(_0x57bd65);
  }
  function _0x4d1fff(_0x52c367, _0x50d88a, _0x104341) {
    if (_0x417717.audioWebEnabled == 0) {
      return;
    }
    var _0x4f3ba5 = _0x417717.audioInstances[_0x52c367];
    _0x4f3ba5.setLoopPoints(_0x50d88a, _0x104341);
  }
  function _0x5362ee(_0x448b63, _0xd66cd3) {
    if (_0x417717.audioWebEnabled == 0) {
      return;
    }
    var _0x5b90bf = _0x417717.audioInstances[_0x448b63];
    if (_0xd66cd3 != _0x5b90bf.isPaused()) {
      if (_0xd66cd3) {
        _0x5b90bf.pause();
      } else {
        _0x5b90bf.resume();
      }
    }
  }
  function _0x26ce12(_0x356371, _0x56a65e) {
    if (_0x417717.audioWebEnabled == 0) {
      return;
    }
    try {
      var _0x5f3dcd = _0x417717.audioInstances[_0x356371];
      _0x5f3dcd.setPitch(_0x56a65e);
    } catch (_0x1c581c) {
      console.error("JS_Sound_SetPitch(channel=" + _0x356371 + ", pitch=" + _0x56a65e + ") threw an exception: " + _0x1c581c);
    }
  }
  function _0x5cd1d6(_0x40264e, _0x22b429, _0x41e27d, _0x5e0fdb) {
    if (_0x417717.audioWebEnabled == 0) {
      return;
    }
    var _0x5414aa = _0x417717.audioInstances[_0x40264e];
    _0x5414aa.setPosition(_0x22b429, _0x41e27d, _0x5e0fdb);
  }
  function _0x3cc6e5(_0x548ffb, _0x4da948) {
    if (_0x417717.audioWebEnabled == 0) {
      return;
    }
    try {
      var _0x4cc01f = _0x417717.audioInstances[_0x548ffb];
      _0x4cc01f.setVolume(_0x4da948);
    } catch (_0x5e812a) {
      console.error("JS_Sound_SetVolume(channel=" + _0x548ffb + ", volume=" + _0x4da948 + ") threw an exception: " + _0x5e812a);
    }
  }
  function _0x4dd1c0(_0x433e5e, _0x5eecac) {
    if (_0x417717.audioWebEnabled == 0) {
      return;
    }
    var _0x32666e = _0x417717.audioInstances[_0x433e5e];
    _0x32666e.stop(_0x5eecac);
  }
  function _0x4d1afe(_0x55ebc2, _0x395db3, _0x276e5a) {
    var _0x73138c = _0xdfb7b2(_0x55ebc2);
    var _0x3738b5 = _0x73138c == "#canvas" ? _0x25e483.canvas : document.querySelector(_0x73138c);
    var _0x16d3e1 = 0;
    var _0x2304ef = 0;
    if (_0x3738b5) {
      var _0x5b4b50 = _0x3738b5.getBoundingClientRect();
      _0x16d3e1 = _0x5b4b50.width;
      _0x2304ef = _0x5b4b50.height;
    }
    _0x2f1a63[_0x395db3 >> 3] = _0x16d3e1;
    _0x2f1a63[_0x276e5a >> 3] = _0x2304ef;
  }
  function _0x2190cf(_0x458ab3, _0x127b52) {
    if (_0x458ab3) {
      _0x517360("https://games.1games.io", _0x458ab3, _0x127b52);
    }
    return _0x576ae2("https://games.1games.io");
  }
  function _0x786db0(_0x1f8a95, _0x1ea9d7) {
    var _0x2a06a4 = _0x25e483.SystemInfo.gpu;
    if (_0x1f8a95) {
      _0x517360(_0x2a06a4, _0x1f8a95, _0x1ea9d7);
    }
    return _0x576ae2(_0x2a06a4);
  }
  function _0x216fe6() {
    return _0x25e483.matchWebGLToCanvasSize || _0x25e483.matchWebGLToCanvasSize === undefined;
  }
  function _0x43a287() {
    return _0xdf86cd.length / 1048576;
  }
  function _0x6dd82e(_0x42bc7e, _0x20b5c5) {
    var _0x2ee989 = _0x25e483.SystemInfo.os + " " + _0x25e483.SystemInfo.osVersion;
    if (_0x42bc7e) {
      _0x517360(_0x2ee989, _0x42bc7e, _0x20b5c5);
    }
    return _0x576ae2(_0x2ee989);
  }
  function _0x3e051b() {
    if (_0x25e483.matchWebGLToCanvasSize == false) {
      return 1;
    } else {
      return _0x25e483.devicePixelRatio || window.devicePixelRatio || 1;
    }
  }
  function _0x24afeb(_0x51b5f2, _0x14a314) {
    _0x2f1a63[_0x51b5f2 >> 3] = _0x25e483.SystemInfo.width;
    _0x2f1a63[_0x14a314 >> 3] = _0x25e483.SystemInfo.height;
  }
  function _0x28bec7(_0x5bf3d1, _0x48f615) {
    if (_0x5bf3d1) {
      _0x517360(_0x25e483.streamingAssetsUrl, _0x5bf3d1, _0x48f615);
    }
    return _0x576ae2(_0x25e483.streamingAssetsUrl);
  }
  function _0x418b99() {
    var _0x38754e = _0x2ad584.getExtension("WEBGL_compressed_texture_astc");
    if (_0x38754e && _0x38754e.getSupportedProfiles) {
      return _0x38754e.getSupportedProfiles().includes("hdr");
    }
    return false;
  }
  function _0x150573() {
    return _0x25e483.SystemInfo.hasCursorLock;
  }
  function _0x20ba48() {
    return _0x25e483.SystemInfo.hasFullscreen;
  }
  function _0x2b8f5f() {
    return _0x25e483.SystemInfo.hasWebGL;
  }
  function _0xdb99d5() {
    return _0x25e483.SystemInfo.mobile;
  }
  function _0x183c4d() {
    return !!_0x25e483.shouldQuit;
  }
  var _0x294d5a = {
    requests: {},
    responses: {},
    abortControllers: {},
    timer: {},
    nextRequestId: 1
  };
  function _0x5ccc89(_0x1767a5) {
    var _0x53a1d4 = _0x294d5a.abortControllers[_0x1767a5];
    if (!_0x53a1d4 || _0x53a1d4.signal.aborted) {
      return;
    }
    _0x53a1d4.abort();
  }
  function _0x15828d(_0x4543f9, _0x3abda6) {
    var _0xb15981 = _0xdfb7b2(_0x4543f9);
    var _0x55f0ba = _0xdfb7b2(_0x3abda6);
    var _0x2cc694 = new AbortController();
    var _0x50b72b = {
      url: _0xb15981,
      init: {
        method: _0x55f0ba,
        signal: _0x2cc694.signal,
        headers: {},
        enableStreamingDownload: true
      },
      tempBuffer: null,
      tempBufferSize: 0
    };
    _0x294d5a.abortControllers[_0x294d5a.nextRequestId] = _0x2cc694;
    _0x294d5a.requests[_0x294d5a.nextRequestId] = _0x50b72b;
    return _0x294d5a.nextRequestId++;
  }
  function _0x400618(_0x2e7d7e) {
    var _0x5486a7 = _0x294d5a.responses[_0x2e7d7e];
    if (!_0x5486a7) {
      return "";
    }
    if (_0x5486a7.headerString) {
      return _0x5486a7.headerString;
    }
    var _0x367a53 = "";
    var _0x27d48c = _0x5486a7.headers.entries();
    for (var _0x425b3b = _0x27d48c.next(); !_0x425b3b.done; _0x425b3b = _0x27d48c.next()) {
      _0x367a53 += _0x425b3b.value[0] + ": " + _0x425b3b.value[1] + "\r\n";
    }
    _0x5486a7.headerString = _0x367a53;
    return _0x367a53;
  }
  function _0xcdd013(_0x59a41e, _0x59a7d8, _0x15bd54, _0x2d6099, _0x4329c7) {
    var _0x3ca82c = _0x294d5a.responses[_0x59a41e];
    if (!_0x3ca82c) {
      _0x517360("", _0x59a7d8, _0x15bd54);
      _0x517360("", _0x2d6099, _0x4329c7);
      return;
    }
    if (_0x59a7d8) {
      var _0xac93df = _0x400618(_0x59a41e);
      _0x517360(_0xac93df, _0x59a7d8, _0x15bd54);
    }
    if (_0x2d6099) {
      _0x517360(_0x3ca82c.url, _0x2d6099, _0x4329c7);
    }
  }
  function _0x489a26(_0x300b0e, _0x4df966) {
    var _0x3e0181 = _0x294d5a.responses[_0x300b0e];
    if (!_0x3e0181) {
      _0x2f2db0[_0x4df966 >> 2] = 0;
      _0x2f2db0[(_0x4df966 >> 2) + 1] = 0;
      return;
    }
    var _0x3d6da3 = _0x400618(_0x300b0e);
    _0x2f2db0[_0x4df966 >> 2] = _0x576ae2(_0x3d6da3);
    _0x2f2db0[(_0x4df966 >> 2) + 1] = _0x576ae2(_0x3e0181.url);
  }
  function _0x58f283(_0x1cc828) {
    if (_0x294d5a.timer[_0x1cc828]) {
      clearTimeout(_0x294d5a.timer[_0x1cc828]);
    }
    delete _0x294d5a.requests[_0x1cc828];
    delete _0x294d5a.responses[_0x1cc828];
    delete _0x294d5a.abortControllers[_0x1cc828];
    delete _0x294d5a.timer[_0x1cc828];
  }
  function _0x58c009(_0x52022c, _0x32a08d, _0x2f4ea4, _0x243d72, _0x276392, _0x53a173) {
    var _0xb833a3 = _0x294d5a.requests[_0x52022c];
    var _0x5b48a0 = _0x294d5a.abortControllers[_0x52022c];
    function _0x392e5c(_0x1224e4) {
      if (!_0xb833a3.tempBuffer) {
        const _0x1f272a = Math.max(_0x1224e4, 1024);
        _0xb833a3.tempBuffer = _0x434dac(_0x1f272a);
        _0xb833a3.tempBufferSize = _0x1f272a;
      }
      if (_0xb833a3.tempBufferSize < _0x1224e4) {
        _0x41b1b9(_0xb833a3.tempBuffer);
        _0xb833a3.tempBuffer = _0x434dac(_0x1224e4);
        _0xb833a3.tempBufferSize = _0x1224e4;
      }
      return _0xb833a3.tempBuffer;
    }
    function _0x2c2848() {
      if (_0x294d5a.timer[_0x52022c]) {
        clearTimeout(_0x294d5a.timer[_0x52022c]);
        delete _0x294d5a.timer[_0x52022c];
      }
    }
    function _0x3c0d12(_0x4717d7, _0x5da30c) {
      _0x2c2848();
      if (!_0x276392) {
        return;
      }
      var _0x5e2fc3 = 0;
      if (_0xb833a3.init.enableStreamingDownload) {
        _0x2f5dea("viiiiii", _0x276392, [_0x243d72, _0x4717d7.status, 0, _0x5da30c.length, 0, _0x5e2fc3]);
      } else if (_0x5da30c.length != 0) {
        var _0x3eab06 = _0x434dac(_0x5da30c.length);
        _0xdf86cd.set(_0x5da30c, _0x3eab06);
        _0x2f5dea("viiiiii", _0x276392, [_0x243d72, _0x4717d7.status, _0x3eab06, _0x5da30c.length, 0, _0x5e2fc3]);
      } else {
        _0x2f5dea("viiiiii", _0x276392, [_0x243d72, _0x4717d7.status, 0, 0, 0, _0x5e2fc3]);
      }
      if (_0xb833a3.tempBuffer) {
        _0x41b1b9(_0xb833a3.tempBuffer);
      }
    }
    function _0x3e4673(_0x52f765, _0x5e8db1) {
      _0x2c2848();
      if (!_0x276392) {
        return;
      }
      var _0x1e50a = _0x576ae2(_0x52f765) + 1;
      var _0x54502c = _0x434dac(_0x1e50a);
      _0x517360(_0x52f765, _0x54502c, _0x1e50a);
      _0x2f5dea("viiiiii", _0x276392, [_0x243d72, 500, 0, 0, _0x54502c, _0x5e8db1]);
      _0x41b1b9(_0x54502c);
      if (_0xb833a3.tempBuffer) {
        _0x41b1b9(_0xb833a3.tempBuffer);
      }
    }
    function _0x25bd60(_0x33f5c6) {
      if (!_0x53a173 || !_0x33f5c6.lengthComputable) {
        return;
      }
      var _0x4f0d09 = _0x33f5c6.response;
      _0x294d5a.responses[_0x52022c] = _0x4f0d09;
      if (_0x33f5c6.chunk) {
        var _0xd44685 = _0x392e5c(_0x33f5c6.chunk.length);
        _0xdf86cd.set(_0x33f5c6.chunk, _0xd44685);
        _0x2f5dea("viiiiii", _0x53a173, [_0x243d72, _0x4f0d09.status, _0x33f5c6.loaded, _0x33f5c6.total, _0xd44685, _0x33f5c6.chunk.length]);
      } else {
        _0x2f5dea("viiiiii", _0x53a173, [_0x243d72, _0x4f0d09.status, _0x33f5c6.loaded, _0x33f5c6.total, 0, 0]);
      }
    }
    try {
      if (_0x2f4ea4 > 0) {
        var _0x32c3c8 = _0xdf86cd.subarray(_0x32a08d, _0x32a08d + _0x2f4ea4);
        _0xb833a3.init.body = new Blob([_0x32c3c8]);
      }
      if (_0xb833a3.timeout) {
        _0x294d5a.timer[_0x52022c] = setTimeout(function () {
          _0xb833a3.isTimedOut = true;
          _0x5b48a0.abort();
        }, _0xb833a3.timeout);
      }
      var _0x4b1c73 = _0x25e483.fetchWithProgress;
      _0xb833a3.init.onProgress = _0x25bd60;
      if (_0x25e483.companyName && _0x25e483.productName && _0x25e483.cachedFetch) {
        _0x4b1c73 = _0x25e483.cachedFetch;
        _0xb833a3.init.companyName = _0x25e483.companyName;
        _0xb833a3.init.productName = _0x25e483.productName;
        _0xb833a3.control = _0x25e483.cacheControl(_0xb833a3.url);
      }
      _0x4b1c73(_0xb833a3.url, _0xb833a3.init).then(function (_0x371b01) {
        _0x294d5a.responses[_0x52022c] = _0x371b01;
        _0x3c0d12(_0x371b01, _0x371b01.parsedBody);
      }).catch(function (_0x5de4c0) {
        var _0x1fd4c9 = 2;
        var _0x18d241 = 17;
        var _0x274994 = 14;
        if (_0xb833a3.isTimedOut) {
          _0x3e4673("Connection timed out.", _0x274994);
        } else if (_0x5b48a0.signal.aborted) {
          _0x3e4673("Aborted.", _0x18d241);
        } else {
          _0x3e4673(_0x5de4c0.message, _0x1fd4c9);
        }
      });
    } catch (_0x27f9f7) {
      var _0x2db47e = 2;
      _0x3e4673(_0x27f9f7.message, _0x2db47e);
    }
  }
  function _0x1a3c5f(_0x5b3fbb, _0xa996af) {
    var _0x52ac13 = _0x294d5a.requests[_0x5b3fbb];
    if (!_0x52ac13) {
      return;
    }
    _0x52ac13.init.redirect = _0xa996af === 0 ? "error" : "follow";
  }
  function _0x4630a5(_0x4f33c7, _0x1c77ec, _0xcce40b) {
    var _0x256049 = _0x294d5a.requests[_0x4f33c7];
    if (!_0x256049) {
      return;
    }
    var _0x1cb88f = _0xdfb7b2(_0x1c77ec);
    var _0x46caa9 = _0xdfb7b2(_0xcce40b);
    _0x256049.init.headers[_0x1cb88f] = _0x46caa9;
  }
  function _0x5266b7(_0x258ef5, _0x328dbc) {
    var _0x5451bd = _0x294d5a.requests[_0x258ef5];
    if (!_0x5451bd) {
      return;
    }
    _0x5451bd.timeout = _0x328dbc;
  }
  function _0x6d9bf9(_0x1f6f84, _0x388e1b, _0x545ee9) {
    const _0x53460a = _0xdfb7b2(_0x1f6f84);
    let _0x409330 = _0xdfb7b2(_0x388e1b);
    _0x409330 = _0x388e1b || 300000;
    let _0x37b13e = _0xdfb7b2(_0x545ee9);
    if (window._keepAliveInterval) {
      clearInterval(window._keepAliveInterval);
    }
    window._keepAliveInterval = setInterval(() => {
      let _0x5cb5cf = new Date().toISOString();
      fetch(_0x53460a, {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        credentials: "omit",
        body: JSON.stringify({
          session_id: _0x37b13e
        })
      }).then(_0x1186da => {
        if (!_0x1186da.ok) {
          console.warn("Keep-alive failed:" + _0x1186da.status);
        } else {
          console.log("Keep-alive successful");
        }
      }).catch(_0x50ff91 => {
        console.error("Keep-alive error:", _0x50ff91);
      });
    }, _0x409330);
  }
  function _0x1b0466(_0x500a84, _0x1d7b4f, _0x4491bf, _0x19bd83) {
    var _0x5be444 = _0xdfb7b2(_0x500a84);
    var _0x1762a4 = _0xdfb7b2(_0x1d7b4f);
    var _0x33719b = _0xdfb7b2(_0x4491bf);
    var _0x370645 = _0xdfb7b2(_0x19bd83);
    try {
      firebase.database().ref(_0x5be444).on("child_added", function (_0x1b188f) {
        window.unityInstance.SendMessage(_0x1762a4, _0x33719b, JSON.stringify(_0x1b188f.val()));
      });
    } catch (_0x59a2df) {
      window.unityInstance.SendMessage(_0x1762a4, _0x370645, JSON.stringify(_0x59a2df, Object.getOwnPropertyNames(_0x59a2df)));
    }
  }
  function _0x1b08f5(_0x10b850, _0xd4ec6b, _0x5c5992, _0xfa0bc6) {
    var _0x11531b = _0xdfb7b2(_0x10b850);
    var _0x167203 = _0xdfb7b2(_0xd4ec6b);
    var _0x1617c3 = _0xdfb7b2(_0x5c5992);
    var _0x4b4e89 = _0xdfb7b2(_0xfa0bc6);
    try {
      firebase.database().ref(_0x11531b).on("child_changed", function (_0x549bf9) {
        window.unityInstance.SendMessage(_0x167203, _0x1617c3, JSON.stringify(_0x549bf9.val()));
      });
    } catch (_0x2e76f7) {
      window.unityInstance.SendMessage(_0x167203, _0x4b4e89, JSON.stringify(_0x2e76f7, Object.getOwnPropertyNames(_0x2e76f7)));
    }
  }
  function _0x18e8c7(_0x5b9899, _0x129b73, _0x375b07, _0x4b7032) {
    var _0x5558b1 = _0xdfb7b2(_0x5b9899);
    var _0x408254 = _0xdfb7b2(_0x129b73);
    var _0x50ce3e = _0xdfb7b2(_0x375b07);
    var _0x1c9de5 = _0xdfb7b2(_0x4b7032);
    try {
      firebase.database().ref(_0x5558b1).on("child_removed", function (_0x398a7d) {
        window.unityInstance.SendMessage(_0x408254, _0x50ce3e, JSON.stringify(_0x398a7d.val()));
      });
    } catch (_0x4d9dcb) {
      window.unityInstance.SendMessage(_0x408254, _0x1c9de5, JSON.stringify(_0x4d9dcb, Object.getOwnPropertyNames(_0x4d9dcb)));
    }
  }
  function _0x4f07dc(_0x27a136, _0x67b24b, _0x38a0ff, _0x1bf44f, _0xec4257) {
    var _0x9ffcd8 = _0xdfb7b2(_0x27a136);
    var _0x5d91dd = _0xdfb7b2(_0x38a0ff);
    var _0xa46808 = _0xdfb7b2(_0x1bf44f);
    var _0x191a9d = _0xdfb7b2(_0xec4257);
    try {
      if (typeof firestorelisteners === "undefined") {
        firestorelisteners = {};
      }
      this.firestorelisteners[_0x9ffcd8 + "/collection/"] = firebase.firestore().collection(_0x9ffcd8).onSnapshot({
        includeMetadataChanges: _0x67b24b == 1
      }, function (_0x38598e) {
        var _0x31cda3 = {};
        _0x38598e.forEach(function (_0x372ec4) {
          _0x31cda3[_0x372ec4.id] = _0x372ec4.data();
        });
        window.unityInstance.SendMessage(_0x5d91dd, _0xa46808, JSON.stringify(_0x31cda3));
      }, function (_0x437f6b) {
        window.unityInstance.SendMessage(_0x5d91dd, _0x191a9d, JSON.stringify(_0x437f6b, Object.getOwnPropertyNames(_0x437f6b)));
      });
    } catch (_0x2e8268) {
      window.unityInstance.SendMessage(_0x5d91dd, _0x191a9d, JSON.stringify(_0x2e8268, Object.getOwnPropertyNames(_0x2e8268)));
    }
  }
  function _0x13a6e8(_0x544a4f, _0x4e8b17, _0x168122, _0x2cc4a6, _0x5c38ab, _0x257be0) {
    var _0x57acc8 = _0xdfb7b2(_0x544a4f);
    var _0x405ca7 = _0xdfb7b2(_0x4e8b17);
    var _0x2117a0 = _0xdfb7b2(_0x2cc4a6);
    var _0x36e2cc = _0xdfb7b2(_0x5c38ab);
    var _0x437468 = _0xdfb7b2(_0x257be0);
    try {
      if (typeof firestorelisteners === "undefined") {
        firestorelisteners = {};
      }
      this.firestorelisteners[_0x57acc8 + "/" + _0x405ca7] = firebase.firestore().collection(_0x57acc8).doc(_0x405ca7).onSnapshot({
        includeMetadataChanges: _0x168122 == 1
      }, function (_0x8e0cdc) {
        window.unityInstance.SendMessage(_0x2117a0, _0x36e2cc, JSON.stringify(_0x8e0cdc.data()));
      }, function (_0x5ac38f) {
        window.unityInstance.SendMessage(_0x2117a0, _0x437468, JSON.stringify(_0x5ac38f, Object.getOwnPropertyNames(_0x5ac38f)));
      });
    } catch (_0x1d9a4f) {
      window.unityInstance.SendMessage(_0x2117a0, _0x437468, JSON.stringify(_0x1d9a4f, Object.getOwnPropertyNames(_0x1d9a4f)));
    }
  }
  function _0x25fa86(_0x5a0f22, _0x167636, _0x55d566, _0x38b714) {
    var _0x49af10 = _0xdfb7b2(_0x5a0f22);
    var _0x40aec5 = _0xdfb7b2(_0x167636);
    var _0x4b3295 = _0xdfb7b2(_0x55d566);
    var _0x4b5323 = _0xdfb7b2(_0x38b714);
    try {
      firebase.database().ref(_0x49af10).on("value", function (_0x22c43f) {
        window.unityInstance.SendMessage(_0x40aec5, _0x4b3295, JSON.stringify(_0x22c43f.val()));
      });
    } catch (_0x1c5f91) {
      window.unityInstance.SendMessage(_0x40aec5, _0x4b5323, JSON.stringify(_0x1c5f91, Object.getOwnPropertyNames(_0x1c5f91)));
    }
  }
  function _0x325213(_0x499f03) {
    var _0x57efd4 = _0xdfb7b2(_0x499f03);
    firebaseLogEvent(_0x57efd4);
  }
  function _0x56e0fe(_0x23cc14, _0x36d114) {
    var _0x2b432a = _0xdfb7b2(_0x23cc14);
    var _0x4cd6ea = JSON.parse(_0xdfb7b2(_0x36d114));
    firebaseLogEventParameter(_0x2b432a, _0x4cd6ea);
  }
  function _0x2cf144(_0x2002bf) {
    document.makeFullscreen(_0xdfb7b2(_0x2002bf));
  }
  function _0x3255cb(_0x501e97, _0x4fc8b5, _0x5b8702, _0x3fb116, _0x28e908) {
    var _0x33bf21 = _0xdfb7b2(_0x501e97);
    var _0x10fdf5 = _0xdfb7b2(_0x5b8702);
    var _0x582000 = _0xdfb7b2(_0x3fb116);
    var _0x11be71 = _0xdfb7b2(_0x28e908);
    try {
      firebase.database().ref(_0x33bf21).transaction(function (_0x53fd0d) {
        if (!isNaN(_0x53fd0d)) {
          return _0x53fd0d + _0x4fc8b5;
        } else {
          return _0x4fc8b5;
        }
      }).then(function (_0x23e7fb) {
        window.unityInstance.SendMessage(_0x10fdf5, _0x582000, "Success: transaction run in " + _0x33bf21);
      });
    } catch (_0x5d9036) {
      window.unityInstance.SendMessage(_0x10fdf5, _0x11be71, JSON.stringify(_0x5d9036, Object.getOwnPropertyNames(_0x5d9036)));
    }
  }
  function _0x4e90e1(_0x6532d4, _0x7a23d8, _0x5b9d25) {
    var _0x364280 = _0xdfb7b2(_0x6532d4);
    var _0x525797 = _0xdfb7b2(_0x7a23d8);
    var _0x53fa8f = _0xdfb7b2(_0x5b9d25);
    firebase.auth().onAuthStateChanged(function (_0x144453) {
      if (_0x144453) {
        window.unityInstance.SendMessage(_0x364280, _0x525797, JSON.stringify(_0x144453));
      } else {
        window.unityInstance.SendMessage(_0x364280, _0x53fa8f, "User signed out");
      }
    });
  }
  function _0x27a2f0(_0x18cc19) {
    window.wgUnityInstance = _0x25e483;
    try {
      window[preroll.config.loaderObjectName].log("WGSDK: WeeGoo InGame Ad, pinging.");
      window[preroll.config.loaderObjectName].ping(_0x18cc19);
    } catch (_0x18dae2) {
      console.log("WGSDK: No production WGSDK resources found, loading development resources.");
      var _0x262497 = document.createElement("script");
      _0x262497.addEventListener("load", function (_0x35c486) {
        var _0x14f904 = document.createElement("script");
        _0x14f904.addEventListener("load", function (_0xab1414) {
          console.log("WGSDK: Development resources loaded.");
          _0x313aa9(_0x18cc19, true);
        }.bind(this));
        document.getElementsByTagName("head")[0].appendChild(_0x14f904);
        _0x14f904.src = window.GMSOFT_ADS_INFO.wgLibrary;
      }.bind(this));
      document.getElementsByTagName("head")[0].appendChild(_0x262497);
      _0x262497.src = window.GMSOFT_ADS_INFO.wgConf;
    }
  }
  function _0x313aa9(_0x55e57d, _0x3b907c) {
    var _0x3306d6;
    if (_0x3b907c === true) {
      _0x3306d6 = _0x55e57d;
    } else {
      _0x3306d6 = _0xdfb7b2(_0x55e57d);
    }
    setTimeout(function () {
      _0x27a2f0(_0x3306d6);
    }, 250);
  }
  function _0x2ef800(_0x3d6484, _0x3fb5ed, _0x3bac63, _0x4069e1, _0x35b112) {
    var _0x4cd6e3 = _0xdfb7b2(_0x3d6484);
    var _0x30be3d = _0xdfb7b2(_0x3fb5ed);
    var _0x7c8673 = _0xdfb7b2(_0x3bac63);
    var _0x1bb186 = _0xdfb7b2(_0x4069e1);
    var _0x3594c4 = _0xdfb7b2(_0x35b112);
    try {
      firebase.database().ref(_0x4cd6e3).set(JSON.parse(_0x30be3d)).then(function (_0x20029b) {
        window.unityInstance.SendMessage(_0x7c8673, _0x1bb186, "Success: " + _0x30be3d + " was posted to " + _0x4cd6e3);
      });
    } catch (_0x3da75d) {
      window.unityInstance.SendMessage(_0x7c8673, _0x3594c4, JSON.stringify(_0x3da75d, Object.getOwnPropertyNames(_0x3da75d)));
    }
  }
  function _0xefe19c(_0x47ccc2, _0x1c5171, _0x297e37, _0x55cf68, _0x5612c8) {
    var _0x206d2d = _0xdfb7b2(_0x47ccc2);
    var _0x475266 = _0xdfb7b2(_0x1c5171);
    var _0x454f13 = _0xdfb7b2(_0x297e37);
    var _0x24f2b8 = _0xdfb7b2(_0x55cf68);
    var _0x31788e = _0xdfb7b2(_0x5612c8);
    try {
      firebase.database().ref(_0x206d2d).push().set(JSON.parse(_0x475266)).then(function (_0x5fb257) {
        window.unityInstance.SendMessage(_0x454f13, _0x24f2b8, "Success: " + _0x475266 + " was pushed to " + _0x206d2d);
      });
    } catch (_0x1aefcf) {
      window.unityInstance.SendMessage(_0x454f13, _0x31788e, JSON.stringify(_0x1aefcf, Object.getOwnPropertyNames(_0x1aefcf)));
    }
  }
  function _0x4f344c(_0x59ddf0) {
    _0x59ddf0 = _0x162dec(_0x59ddf0);
    window.open(_0x59ddf0);
  }
  function _0x3002b6() {
    try {
      window[preroll.config.loaderObjectName].log("WGSDK: Refetching reward ad.");
      window[preroll.config.loaderObjectName].rewarded.initSlot.call(window[preroll.config.loaderObjectName]);
    } catch (_0x534560) {
      console.log("No WeeGooAFG implementation found!");
    }
  }
  function _0xb5508() {
    try {
      window[preroll.config.loaderObjectName].log("WGSDK: Game controls registered.");
      window[window.preroll.config.loaderObjectName].registerGameControls(_0x25e483);
    } catch (_0x24dc13) {
      console.log("WGSDK: Can not register game controls.");
      setTimeout(function () {
        _0xb5508();
      }, 250);
    }
  }
  function _0x4cf239() {
    window.onbeforeunload = function (_0x19dbf7) {
      if (typeof _0x3799a7 === "function") {
        _0x3799a7("CanvasLoading", "OnTabCloseDetected");
      }
    };
  }
  function _0x99ba48() {
    try {
      window[preroll.config.loaderObjectName].log("WGSDK: Reward callbacks registered.");
      window[window.preroll.config.loaderObjectName].registerRewardCallbacks({
        onReady: "OnReadyMethod",
        onSuccess: "OnSuccessMethod",
        onFail: "OnFailMethod"
      });
    } catch (_0xa0df) {
      console.log("WGSDK: Can not register reward ad callbacks.");
      _0x3d58dc();
    }
  }
  function _0x3d58dc() {
    setTimeout(function () {
      _0x99ba48();
    }, 250);
  }
  function _0x156390(_0x2b3838, _0x1dc0d5, _0x5f456a, _0x9b5690, _0x57909b, _0x4aac6f, _0x1f15a1) {
    var _0x3818b9 = _0xdfb7b2(_0x2b3838);
    var _0x250cf1 = _0xdfb7b2(_0x1dc0d5);
    var _0x8a5c8f = _0xdfb7b2(_0x5f456a);
    var _0x556c7e = _0xdfb7b2(_0x9b5690);
    var _0x40521f = _0xdfb7b2(_0x57909b);
    var _0x1ddabf = _0xdfb7b2(_0x4aac6f);
    var _0x50cd5c = _0xdfb7b2(_0x1f15a1);
    try {
      var _0x9b5690 = {};
      _0x9b5690[_0x8a5c8f] = firebase.firestore.FieldValue.arrayRemove(JSON.parse(_0x556c7e));
      firebase.firestore().collection(_0x3818b9).doc(_0x250cf1).update(_0x9b5690).then(function () {
        window.unityInstance.SendMessage(_0x40521f, _0x1ddabf, "Success: element " + _0x556c7e + " was removed in " + _0x8a5c8f);
      }).catch(function (_0x33e173) {
        window.unityInstance.SendMessage(_0x40521f, _0x50cd5c, JSON.stringify(_0x33e173, Object.getOwnPropertyNames(_0x33e173)));
      });
    } catch (_0x43ffb7) {
      window.unityInstance.SendMessage(_0x40521f, _0x50cd5c, JSON.stringify(_0x43ffb7, Object.getOwnPropertyNames(_0x43ffb7)));
    }
  }
  function _0x283b85(_0x710916) {
    var _0x722f71 = window.unityStringify(_0x710916);
    var _0x53530a = {
      adStarted: function () {
        window.UnitySDK.unlockPointer();
        _0x3799a7("CrazySDKSingleton", "JSLibCallback_AdStarted");
      },
      adFinished: function () {
        window.UnitySDK.lockPointer();
        _0x3799a7("CrazySDKSingleton", "JSLibCallback_AdFinished");
      },
      adError: function (_0x5e9975) {
        _0x3799a7("CrazySDKSingleton", "JSLibCallback_AdError", JSON.stringify(_0x5e9975));
      }
    };
    window.CrazyGames.SDK.ad.requestAd(_0x722f71, _0x53530a).catch(function (_0x3d4069) {
      window.UnitySDK.logError("Error while requesting ad:", _0x3d4069);
      _0x3799a7("CrazySDKSingleton", "JSLibCallback_AdError", JSON.stringify({
        code: "unknown",
        message: _0x3d4069.message || "Unknown error"
      }));
    });
  }
  function _0x39e475(_0x15554f) {
    var _0x39a668 = JSON.parse(window.unityStringify(_0x15554f));
    try {
      window.CrazyGames.SDK.banner.requestOverlayBanners(_0x39a668, function (_0x347086, _0x39e8ae, _0x38223f) {});
    } catch (_0x530e52) {
      window.UnitySDK.logError("Error while requesting banners:", _0x530e52);
    }
  }
  function _0xa1b02(_0x46879e) {
    var _0x42c793 = JSON.parse(window.unityStringify(_0x46879e));
    var _0x3807a1 = "";
    try {
      _0x3807a1 = window.CrazyGames.SDK.game.inviteLink(_0x42c793);
    } catch (_0x3c88fa) {
      window.UnitySDK.logError("Error while requesting invite url:", _0x3c88fa);
    }
    var _0xfc6303 = _0x576ae2(_0x3807a1) + 1;
    var _0x3779be = _0x434dac(_0xfc6303);
    _0x517360(_0x3807a1, _0x3779be, _0xfc6303);
    return _0x3779be;
  }
  function _0x5aa17f(_0x1e4c7b) {
    _0x1e4c7b = _0xdfb7b2(_0x1e4c7b);
    window.GD_OPTIONS = {
      debug: false,
      gameId: _0x1e4c7b,
      onEvent: function (_0x43d0c6) {
        switch (_0x43d0c6.name) {
          case "SDK_GAME_START":
            _0x3799a7("GameDistribution", "ResumeGameCallback");
            break;
          case "SDK_GAME_PAUSE":
            _0x3799a7("GameDistribution", "PauseGameCallback");
            break;
          case "SDK_REWARDED_WATCH_COMPLETE":
            _0x3799a7("GameDistribution", "RewardedCompleteCallback");
            break;
          case "SDK_ERROR":
            break;
          default:
            _0x3799a7("GameDistribution", "EventCallback", _0x43d0c6.name);
        }
      }
    };
    (function (_0x366561, _0x2bc9b0, _0x456e84) {
      var _0x35c448;
      var _0x5a267e = _0x366561.getElementsByTagName(_0x2bc9b0)[0];
      if (_0x366561.getElementById(_0x456e84)) {
        return;
      }
      _0x35c448 = _0x366561.createElement(_0x2bc9b0);
      _0x35c448.id = _0x456e84;
      _0x35c448.src = "//html5.api.gamedistribution.com/main.min.js";
      _0x5a267e.parentNode.insertBefore(_0x35c448, _0x5a267e);
    })(document, "script", "gamedistribution-jssdk");
  }
  function _0x1ef812() {
    if (typeof gdsdk !== "undefined" && typeof gdsdk.preloadAd !== "undefined") {
      gdsdk.preloadAd(gdsdk.AdType.Rewarded).then(function (_0x5dba0f) {
        _0x3799a7("GameDistribution", "PreloadRewardedVideoCallback", 1);
      }).catch(function (_0x58f5ce) {
        _0x3799a7("GameDistribution", "PreloadRewardedVideoCallback", 0);
      });
    }
  }
  function _0x280305(_0xde68b3) {
    _0xde68b3 = _0xdfb7b2(_0xde68b3);
    if (typeof gdsdk !== "undefined" && typeof gdsdk.sendEvent !== "undefined" && typeof _0xde68b3 !== "undefined") {
      gdsdk.sendEvent(_0xde68b3).then(function (_0x3279cd) {
        console.log("Game event post message sent Succesfully...");
      }).catch(function (_0x9e6942) {
        console.log(_0x9e6942.message);
      });
    }
  }
  function _0x16375d(_0x4c711c) {
    if (typeof gdsdk !== "undefined" && typeof gdsdk.showAd !== "undefined") {
      _0x4c711c = _0xdfb7b2(_0x4c711c) || gdsdk.AdType.Interstitial;
      gdsdk.showAd(_0x4c711c).then(function (_0x2edcf9) {
        if (_0x4c711c === gdsdk.AdType.Rewarded) {
          _0x3799a7("GameDistribution", "RewardedVideoSuccessCallback");
        }
      }).catch(function (_0x4bb082) {
        if (_0x4c711c === gdsdk.AdType.Rewarded) {
          _0x3799a7("GameDistribution", "RewardedVideoFailureCallback");
        }
      });
    }
  }
  function _0x427ab2(_0x5e2044, _0x4700a7, _0x49357c, _0x300de6, _0x235b64, _0xad75a6) {
    var _0x21d1e3 = _0xdfb7b2(_0x5e2044);
    var _0x247e0c = _0xdfb7b2(_0x4700a7);
    var _0x79fc18 = _0xdfb7b2(_0x49357c);
    var _0x437c7e = _0xdfb7b2(_0x300de6);
    var _0x327e69 = _0xdfb7b2(_0x235b64);
    var _0x38e7ca = _0xdfb7b2(_0xad75a6);
    try {
      firebase.firestore().collection(_0x21d1e3).doc(_0x247e0c).set(JSON.parse(_0x79fc18)).then(function () {
        window.unityInstance.SendMessage(_0x437c7e, _0x327e69, "Success: document " + _0x247e0c + " was set");
      }).catch(function (_0x21f1ad) {
        window.unityInstance.SendMessage(_0x437c7e, _0x38e7ca, JSON.stringify(_0x21f1ad, Object.getOwnPropertyNames(_0x21f1ad)));
      });
    } catch (_0x44fcb3) {
      window.unityInstance.SendMessage(_0x437c7e, _0x38e7ca, JSON.stringify(_0x44fcb3, Object.getOwnPropertyNames(_0x44fcb3)));
    }
  }
  function _0x403fdc(_0xb879b5) {
    var _0x52202c = JSON.parse(_0xdfb7b2(_0xb879b5));
    firebaseSetUserProperties(_0x52202c);
  }
  function _0x1b0c44() {
    window.CrazyGames.SDK.user.showAccountLinkPrompt().then(function (_0x1f1da4) {
      _0x3799a7("CrazySDKSingleton", "JSLibCallback_ShowAccountLinkPrompt", JSON.stringify({
        linkAccountResponseStr: JSON.stringify(_0x1f1da4)
      }));
    }).catch(function (_0x121780) {
      _0x3799a7("CrazySDKSingleton", "JSLibCallback_ShowAccountLinkPrompt", JSON.stringify({
        errorJson: JSON.stringify(_0x121780)
      }));
    });
  }
  function _0x500494() {
    window.CrazyGames.SDK.user.showAuthPrompt().then(function (_0x1fe963) {
      _0x3799a7("CrazySDKSingleton", "JSLibCallback_ShowAuthPrompt", JSON.stringify({
        userJson: JSON.stringify(_0x1fe963)
      }));
    }).catch(function (_0x2631fe) {
      _0x3799a7("CrazySDKSingleton", "JSLibCallback_ShowAuthPrompt", JSON.stringify({
        errorJson: JSON.stringify(_0x2631fe)
      }));
    });
  }
  function _0x443ffa(_0x3d3ca5) {
    var _0x2cc0c3 = JSON.parse(window.unityStringify(_0x3d3ca5));
    var _0x38325c = "";
    try {
      _0x38325c = window.CrazyGames.SDK.game.showInviteButton(_0x2cc0c3);
    } catch (_0x52a269) {
      window.UnitySDK.logError("Error while showing invite button:", _0x52a269);
    }
    var _0x4db4ea = _0x576ae2(_0x38325c) + 1;
    var _0x139b00 = _0x434dac(_0x4db4ea);
    _0x517360(_0x38325c, _0x139b00, _0x4db4ea);
    return _0x139b00;
  }
  function _0x5721d2() {
    window[preroll.config.loaderObjectName].showRewardAd();
  }
  function _0x523a48(_0x34ef56, _0x2ee9b2, _0x434059) {
    var _0x4158e3 = _0xdfb7b2(_0x34ef56);
    var _0x20aa86 = _0xdfb7b2(_0x2ee9b2);
    var _0x55ae87 = _0xdfb7b2(_0x434059);
    try {
      firebase.auth().signInAnonymously().then(function (_0x263e57) {
        window.unityInstance.SendMessage(_0x4158e3, _0x20aa86, "Success: signed up for " + _0x263e57);
      }).catch(function (_0x56d271) {
        window.unityInstance.SendMessage(_0x4158e3, _0x55ae87, JSON.stringify(_0x56d271, Object.getOwnPropertyNames(_0x56d271)));
      });
    } catch (_0x1cb2dd) {
      window.unityInstance.SendMessage(_0x4158e3, _0x55ae87, JSON.stringify(_0x1cb2dd, Object.getOwnPropertyNames(_0x1cb2dd)));
    }
  }
  function _0x211b39(_0x4fd7b4, _0x49bbc8, _0xc45602, _0x267742, _0x4ba139) {
    var _0x8b447f = _0xdfb7b2(_0x4fd7b4);
    var _0x3d5429 = _0xdfb7b2(_0x49bbc8);
    var _0x3596ca = _0xdfb7b2(_0xc45602);
    var _0x483ac7 = _0xdfb7b2(_0x267742);
    var _0x30b765 = _0xdfb7b2(_0x4ba139);
    try {
      firebase.auth().signInWithEmailAndPassword(_0x8b447f, _0x3d5429).then(function (_0x4380d3) {
        window.unityInstance.SendMessage(_0x3596ca, _0x483ac7, "Success: signed in for " + _0x8b447f);
      }).catch(function (_0x283d4c) {
        window.unityInstance.SendMessage(_0x3596ca, _0x30b765, JSON.stringify(_0x283d4c, Object.getOwnPropertyNames(_0x283d4c)));
      });
    } catch (_0x31b49b) {
      window.unityInstance.SendMessage(_0x3596ca, _0x30b765, JSON.stringify(_0x31b49b, Object.getOwnPropertyNames(_0x31b49b)));
    }
  }
  function _0x33ea6f(_0x5b3948, _0x1033a4, _0x4c4e3f) {
    var _0x4f66e3 = _0xdfb7b2(_0x5b3948);
    var _0x3efc09 = _0xdfb7b2(_0x1033a4);
    var _0x28e177 = _0xdfb7b2(_0x4c4e3f);
    try {
      var _0x3a9bf4 = new firebase.auth.FacebookAuthProvider();
      firebase.auth().signInWithRedirect(_0x3a9bf4).then(function (_0x3fba31) {
        window.unityInstance.SendMessage(_0x4f66e3, _0x3efc09, "Success: signed in with Facebook!");
      }).catch(function (_0x4fba42) {
        window.unityInstance.SendMessage(_0x4f66e3, _0x28e177, JSON.stringify(_0x4fba42, Object.getOwnPropertyNames(_0x4fba42)));
      });
    } catch (_0x13ac2e) {
      window.unityInstance.SendMessage(_0x4f66e3, _0x28e177, JSON.stringify(_0x13ac2e, Object.getOwnPropertyNames(_0x13ac2e)));
    }
  }
  function _0xc8379c(_0x3a094e, _0x36ecda, _0xa5f2b7) {
    var _0x3c82c3 = _0xdfb7b2(_0x3a094e);
    var _0xe532df = _0xdfb7b2(_0x36ecda);
    var _0x3a5210 = _0xdfb7b2(_0xa5f2b7);
    try {
      var _0x5cbdc6 = new firebase.auth.GoogleAuthProvider();
      firebase.auth().signInWithRedirect(_0x5cbdc6).then(function (_0x2391f7) {
        window.unityInstance.SendMessage(_0x3c82c3, _0xe532df, "Success: signed in with Google!");
      }).catch(function (_0x1dc01a) {
        window.unityInstance.SendMessage(_0x3c82c3, _0x3a5210, JSON.stringify(_0x1dc01a, Object.getOwnPropertyNames(_0x1dc01a)));
      });
    } catch (_0x5a0249) {
      window.unityInstance.SendMessage(_0x3c82c3, _0x3a5210, JSON.stringify(_0x5a0249, Object.getOwnPropertyNames(_0x5a0249)));
    }
  }
  function _0x2c171a(_0x5e13ec, _0x38d881, _0x5152c2, _0x281f0e) {
    var _0x367441 = _0xdfb7b2(_0x5e13ec);
    var _0x53934b = _0xdfb7b2(_0x38d881);
    var _0x522e8c = _0xdfb7b2(_0x5152c2);
    var _0xea1a43 = _0xdfb7b2(_0x281f0e);
    try {
      firebase.database().ref(_0x367441).off("child_added");
      window.unityInstance.SendMessage(_0x53934b, _0x522e8c, "Success: listener removed");
    } catch (_0x412f33) {
      window.unityInstance.SendMessage(_0x53934b, _0xea1a43, JSON.stringify(_0x412f33, Object.getOwnPropertyNames(_0x412f33)));
    }
  }
  function _0x573229(_0x34309f, _0x3d311a, _0x15db74, _0x57b14e) {
    var _0x53d332 = _0xdfb7b2(_0x34309f);
    var _0x4f694d = _0xdfb7b2(_0x3d311a);
    var _0x26ba7f = _0xdfb7b2(_0x15db74);
    var _0x50a54a = _0xdfb7b2(_0x57b14e);
    try {
      firebase.database().ref(_0x53d332).off("child_changed");
      window.unityInstance.SendMessage(_0x4f694d, _0x26ba7f, "Success: listener removed");
    } catch (_0x4268e4) {
      window.unityInstance.SendMessage(_0x4f694d, _0x50a54a, JSON.stringify(_0x4268e4, Object.getOwnPropertyNames(_0x4268e4)));
    }
  }
  function _0x44e9c8(_0x2835e5, _0x33b750, _0x2cef12, _0x1c00cc) {
    var _0x2dd699 = _0xdfb7b2(_0x2835e5);
    var _0x7ebdc2 = _0xdfb7b2(_0x33b750);
    var _0x24807d = _0xdfb7b2(_0x2cef12);
    var _0x64de54 = _0xdfb7b2(_0x1c00cc);
    try {
      firebase.database().ref(_0x2dd699).off("child_removed");
      window.unityInstance.SendMessage(_0x7ebdc2, _0x24807d, "Success: listener removed");
    } catch (_0xd7f87a) {
      window.unityInstance.SendMessage(_0x7ebdc2, _0x64de54, JSON.stringify(_0xd7f87a, Object.getOwnPropertyNames(_0xd7f87a)));
    }
  }
  function _0x2affe9(_0x101b90, _0x56b82a, _0x441c20, _0x24a6d6) {
    var _0x2289c0 = _0xdfb7b2(_0x101b90);
    var _0x2f660b = _0xdfb7b2(_0x56b82a);
    var _0x373d2f = _0xdfb7b2(_0x441c20);
    var _0x244ce0 = _0xdfb7b2(_0x24a6d6);
    try {
      if (typeof firestorelisteners === "undefined") {
        firestorelisteners = {};
      }
      this.firestorelisteners[_0x2289c0 + "/collection/"]();
      window.unityInstance.SendMessage(_0x2f660b, _0x373d2f, "Success: listener was removed");
    } catch (_0x3f512a) {
      window.unityInstance.SendMessage(_0x2f660b, _0x244ce0, JSON.stringify(_0x3f512a, Object.getOwnPropertyNames(_0x3f512a)));
    }
  }
  function _0x1f547a(_0x498be4, _0x56eb97, _0x5b8fcb, _0x79776d, _0x35ba1b) {
    var _0x2a189a = _0xdfb7b2(_0x498be4);
    var _0x3514b8 = _0xdfb7b2(_0x56eb97);
    var _0x42f773 = _0xdfb7b2(_0x5b8fcb);
    var _0x223d46 = _0xdfb7b2(_0x79776d);
    var _0x502c3a = _0xdfb7b2(_0x35ba1b);
    try {
      if (typeof firestorelisteners === "undefined") {
        firestorelisteners = {};
      }
      this.firestorelisteners[_0x2a189a + "/" + _0x3514b8]();
      window.unityInstance.SendMessage(_0x42f773, _0x223d46, "Success: listener was removed");
    } catch (_0x2c158c) {
      window.unityInstance.SendMessage(_0x42f773, _0x502c3a, JSON.stringify(_0x2c158c, Object.getOwnPropertyNames(_0x2c158c)));
    }
  }
  function _0x153804(_0x455447, _0x4fd3e2, _0x44d09f, _0x44ba13) {
    var _0x39c83a = _0xdfb7b2(_0x455447);
    var _0x45f39a = _0xdfb7b2(_0x4fd3e2);
    var _0x2e00f7 = _0xdfb7b2(_0x44d09f);
    var _0x11661e = _0xdfb7b2(_0x44ba13);
    try {
      firebase.database().ref(_0x39c83a).off("value");
      window.unityInstance.SendMessage(_0x45f39a, _0x2e00f7, "Success: listener removed");
    } catch (_0x106490) {
      window.unityInstance.SendMessage(_0x45f39a, _0x11661e, JSON.stringify(_0x106490, Object.getOwnPropertyNames(_0x106490)));
    }
  }
  function _0x38e980() {
    try {
      window.CrazyGames.SDK.data.syncUnityGameData();
    } catch (_0x5d6f3a) {
      window.UnitySDK.logError("Error while calling syncUnityGameData:", _0x5d6f3a);
    }
  }
  function _0xc816bb(_0x60620d, _0x3460e3, _0x2bee8d, _0x210b1a) {
    var _0x3cbe65 = _0xdfb7b2(_0x60620d);
    var _0x287981 = _0xdfb7b2(_0x3460e3);
    var _0x2bde8f = _0xdfb7b2(_0x2bee8d);
    var _0x1dbcab = _0xdfb7b2(_0x210b1a);
    try {
      firebase.database().ref(_0x3cbe65).transaction(function (_0x5d0b92) {
        if (typeof _0x5d0b92 === "boolean") {
          return !_0x5d0b92;
        } else {
          return true;
        }
      }).then(function (_0x21a6c2) {
        window.unityInstance.SendMessage(_0x287981, _0x2bde8f, "Success: transaction run in " + _0x3cbe65);
      });
    } catch (_0x586db9) {
      window.unityInstance.SendMessage(_0x287981, _0x1dbcab, JSON.stringify(_0x586db9, Object.getOwnPropertyNames(_0x586db9)));
    }
  }
  function _0x3fe604(_0xbe5bb8, _0xd30655, _0x3150bb, _0x9a05b6, _0x47e97a, _0x1195e7) {
    var _0x328e5a = _0xdfb7b2(_0xbe5bb8);
    var _0x2a98a1 = _0xdfb7b2(_0xd30655);
    var _0x5ccc09 = _0xdfb7b2(_0x3150bb);
    var _0x5878bf = _0xdfb7b2(_0x9a05b6);
    var _0x214184 = _0xdfb7b2(_0x47e97a);
    var _0x5c17fc = _0xdfb7b2(_0x1195e7);
    try {
      firebase.firestore().collection(_0x328e5a).doc(_0x2a98a1).update(JSON.parse(_0x5ccc09)).then(function () {
        window.unityInstance.SendMessage(_0x5878bf, _0x214184, "Success: document " + _0x2a98a1 + " was updated");
      }).catch(function (_0x2c802f) {
        window.unityInstance.SendMessage(_0x5878bf, _0x5c17fc, JSON.stringify(_0x2c802f, Object.getOwnPropertyNames(_0x2c802f)));
      });
    } catch (_0x54194e) {
      window.unityInstance.SendMessage(_0x5878bf, _0x5c17fc, JSON.stringify(_0x54194e, Object.getOwnPropertyNames(_0x54194e)));
    }
  }
  function _0x5eb640(_0x96d2da, _0x40a3d5, _0x49b71b, _0x48353a, _0x3bfbe0) {
    var _0x39d66d = _0xdfb7b2(_0x96d2da);
    var _0x55b486 = _0xdfb7b2(_0x40a3d5);
    var _0xa36119 = _0xdfb7b2(_0x49b71b);
    var _0x14076a = _0xdfb7b2(_0x48353a);
    var _0x4c65bf = _0xdfb7b2(_0x3bfbe0);
    try {
      firebase.database().ref(_0x39d66d).update(JSON.parse(_0x55b486)).then(function (_0x4b8478) {
        window.unityInstance.SendMessage(_0xa36119, _0x14076a, "Success: " + _0x55b486 + " was updated in " + _0x39d66d);
      });
    } catch (_0x40a68b) {
      window.unityInstance.SendMessage(_0xa36119, _0x4c65bf, JSON.stringify(_0x40a68b, Object.getOwnPropertyNames(_0x40a68b)));
    }
  }
  function _0x50d0cf(_0x46b2c5, _0x3661a1, _0x3563c5, _0x4815b0, _0x559791) {
    var _0x5e6aae = _0xdfb7b2(_0x46b2c5);
    var _0x1406c8 = _0xdfb7b2(_0x3661a1);
    var _0x57137f = _0xdfb7b2(_0x3563c5);
    var _0x2cc0e1 = _0xdfb7b2(_0x4815b0);
    var _0x2ea44b = _0xdfb7b2(_0x559791);
    try {
      firebase.storage().ref(_0x5e6aae).put(_0x1a5797(_0x1406c8)).then(function (_0x501f38) {
        window.unityInstance.SendMessage(_0x57137f, _0x2cc0e1, "Success: data was posted to " + _0x5e6aae);
      });
    } catch (_0xe0d237) {
      window.unityInstance.SendMessage(_0x57137f, _0x2ea44b, JSON.stringify(_0xe0d237, Object.getOwnPropertyNames(_0xe0d237)));
    }
    function _0x1a5797(_0x1611c) {
      var _0x1244cc = window.atob(_0x1611c);
      var _0x1e47eb = _0x1244cc.length;
      var _0x463976 = new Uint8Array(_0x1e47eb);
      for (var _0x3a4a65 = 0; _0x3a4a65 < _0x1e47eb; _0x3a4a65++) {
        _0x463976[_0x3a4a65] = _0x1244cc.charCodeAt(_0x3a4a65);
      }
      return _0x463976.buffer;
    }
  }
  function _0x3b24ce(_0x3aefe2) {
    _0x3aefe2 = _0xdfb7b2(_0x3aefe2);
    let _0x3d7053 = document.createElement("input");
    _0x3d7053.type = "file";
    _0x3d7053.accept = ".mp3";
    _0x3d7053.style.display = "none";
    _0x3d7053.onchange = () => {
      _0x3799a7("SongUploader", "LoadingPanel", "open");
      let _0x4899f7 = _0x3d7053.files[0];
      if (!_0x4899f7) {
        console.log("empty_file");
        _0x3799a7("SongUploader", "OnFileUploadError", "empty_file");
        return;
      }
      if (_0x4899f7.type !== "audio/mpeg") {
        console.log("invalid_file_type");
        _0x3799a7("SongUploader", "OnFileUploadError", "invalid_file_type");
        return;
      }
      if (_0x4899f7.size > 5242880) {
        console.log("max_exceed_file_size");
        _0x3799a7("SongUploader", "OnFileUploadError", "max_exceed_file_size");
        return;
      }
      let _0x409c15 = new FormData();
      _0x409c15.append("file", _0x4899f7);
      _0x409c15.append("payload", _0x3aefe2);
      fetch("https://api.1games.io/sound/upload", {
        method: "POST",
        body: _0x409c15
      }).then(_0x153d26 => _0x153d26.text()).then(_0x89d14a => {
        _0x3799a7("SongUploader", "OnFileUploaded", _0x89d14a);
        console.log("AFTER UPLOAD");
        _0x3799a7("SongUploader", "LoadingPanel", "close");
      }).catch(_0x47009f => {
        console.error("Upload error", _0x47009f);
        _0x3799a7("SongUploader", "OnFileUploadError", "upload_file_error");
        console.log("AFTER UPLOAD ERR");
        _0x3799a7("SongUploader", "LoadingPanel", "close");
      });
    };
    document.body.appendChild(_0x3d7053);
    _0x3d7053.click();
    setTimeout(() => _0x3d7053.remove(), 1000);
  }
  var _0x13090f = [];
  function _0x449532(_0x310bf4, _0x499fc4, _0x18588f, _0x116004, _0x4ce4c5, _0x4e0cae, _0x44d960, _0x485105, _0x3534bb, _0x20134c, _0x115237, _0x30ea73) {
    var _0x5e443a = document.getElementById(_0xdfb7b2(_0x310bf4));
    var _0x11d35c = _0x5e443a.getElementsByTagName("canvas")[0];
    if (!_0x5e443a && _0x11d35c) {
      _0x5e443a = _0x11d35c.parentNode;
    }
    if (_0x11d35c) {
      var _0xe39da9 = _0x5e443a.offsetWidth / _0x11d35c.width;
      var _0x319814 = _0x5e443a.offsetHeight / _0x11d35c.height;
      if (_0xe39da9 && _0x319814) {
        _0x499fc4 *= _0xe39da9;
        _0x116004 *= _0xe39da9;
        _0x18588f *= _0x319814;
        _0x4ce4c5 *= _0x319814;
      }
    }
    var _0x44d72c = document.createElement(_0x3534bb ? "textarea" : "input");
    _0x44d72c.style.position = "absolute";
    if (_0x30ea73) {
      _0x44d72c.style.bottom = "1vh";
      _0x44d72c.style.left = "5vw";
      _0x44d72c.style.width = "90vw";
      _0x44d72c.style.height = (_0x3534bb ? 18 : 10) + "vh";
      _0x44d72c.style.fontSize = "5vh";
      _0x44d72c.style.borderWidth = "5px";
      _0x44d72c.style.borderColor = "#000000";
    } else {
      _0x44d72c.style.top = _0x18588f + "px";
      _0x44d72c.style.left = _0x499fc4 + "px";
      _0x44d72c.style.width = _0x116004 + "px";
      _0x44d72c.style.height = _0x4ce4c5 + "px";
      _0x44d72c.style.fontSize = _0x4e0cae + "px";
    }
    _0x44d72c.style.outlineWidth = "1px";
    _0x44d72c.style.opacity = _0x115237 ? 0 : 1;
    _0x44d72c.style.resize = "none";
    _0x44d72c.style.padding = "0px 1px";
    _0x44d72c.style.cursor = "default";
    _0x44d72c.style.touchAction = "none";
    _0x44d72c.spellcheck = false;
    _0x44d72c.value = _0xdfb7b2(_0x44d960);
    _0x44d72c.placeholder = _0xdfb7b2(_0x485105);
    _0x44d72c.style.outlineColor = "black";
    if (_0x20134c) {
      _0x44d72c.type = "password";
    }
    if (_0x30ea73) {
      document.body.appendChild(_0x44d72c);
    } else {
      _0x5e443a.appendChild(_0x44d72c);
    }
    return _0x13090f.push(_0x44d72c) - 1;
  }
  function _0x50a4e7(_0x8b7dc4) {
    var _0x3ca5f9 = _0x13090f[_0x8b7dc4];
    _0x3ca5f9.parentNode.removeChild(_0x3ca5f9);
    _0x13090f[_0x8b7dc4] = null;
  }
  function _0x331b2f(_0x28409a, _0x3ad518) {
    var _0x44afeb = _0x13090f[_0x28409a];
    _0x44afeb.addEventListener("keydown", function (_0x57344b) {
      if (_0x57344b.which && _0x57344b.which === 13 || _0x57344b.keyCode && _0x57344b.keyCode === 13) {
        if (_0x3ad518) {
          _0x57344b.preventDefault();
          _0x44afeb.blur();
        }
      }
    });
  }
  function _0x20431b(_0x1529c8) {
    var _0x55fdbf = _0x13090f[_0x1529c8];
    _0x55fdbf.focus();
  }
  function _0x4d9a1a(_0x41af0a) {
    var _0x1662f9 = _0x13090f[_0x41af0a];
    _0x1662f9.blur();
  }
  function _0x1521b2() {
    if (typeof _0x2f5dea === "undefined") {
      Runtime = {
        dynCall: undefined
      };
    } else if (typeof Runtime === "undefined") {
      Runtime = {
        dynCall: _0x2f5dea
      };
    }
  }
  function _0x2cdde4(_0x503c79) {
    return _0x13090f[_0x503c79] === document.activeElement;
  }
  function _0x21db59(_0x55d50e, _0x3fda1a) {
    var _0x153f92 = _0x13090f[_0x55d50e];
    _0x153f92.maxLength = _0x3fda1a;
  }
  function _0x27a113(_0x3d85f0, _0x5499d1) {
    document.body.addEventListener("focusout", function () {
      document.body.removeEventListener("focusout", arguments.callee);
      Runtime.dynCall("vi", _0x5499d1, [_0x3d85f0]);
    });
  }
  function _0x504497(_0x24a3b3) {
    var _0x30e801 = _0x13090f.push(null) - 1;
    document.body.addEventListener("touchend", function () {
      document.body.removeEventListener("touchend", arguments.callee);
      Runtime.dynCall("vi", _0x24a3b3, [_0x30e801]);
    });
    return _0x30e801;
  }
  function _0x514b00(_0x2c3f7c, _0x20e7d4) {
    var _0x397819 = _0x13090f[_0x2c3f7c];
    _0x397819.onblur = function () {
      if (Runtime.dynCall) {
        Runtime.dynCall("vi", _0x20e7d4, [_0x2c3f7c]);
      } else {
        (function (_0x27ea9f) {
          _0x1c1a57.apply(null, [_0x20e7d4, _0x27ea9f]);
        })(_0x2c3f7c);
      }
    };
  }
  function _0x4d62c6(_0x40b4b9, _0x1dfaae) {
    var _0x3b3517 = _0x13090f[_0x40b4b9];
    _0x3b3517.onchange = function () {
      var _0x4fae8a = _0x3b3517.value;
      var _0x2f5f6d = _0x576ae2(_0x4fae8a) + 1;
      var _0x2e7ef4 = _0x434dac(_0x2f5f6d);
      _0x517360(_0x4fae8a, _0x2e7ef4, _0x2f5f6d);
      if (Runtime.dynCall) {
        Runtime.dynCall("vii", _0x1dfaae, [_0x40b4b9, _0x2e7ef4]);
      } else {
        (function (_0x4daad8, _0x3308ef) {
          _0x2879a8.apply(null, [_0x1dfaae, _0x4daad8, _0x3308ef]);
        })(_0x40b4b9, _0x2e7ef4);
      }
    };
  }
  function _0x29f49b(_0x367789, _0x4016b1) {
    var _0x38e503 = _0x13090f[_0x367789];
    _0x38e503.onfocus = function () {
      if (Runtime.dynCall) {
        Runtime.dynCall("vi", _0x4016b1, [_0x367789]);
      } else {
        (function (_0x3b6f96) {
          _0x1c1a57.apply(null, [_0x4016b1, _0x3b6f96]);
        })(_0x367789);
      }
    };
  }
  function _0x3c7d8e(_0x5cd2e7, _0x3ebe58) {
    var _0x1ef6f0 = _0x13090f[_0x5cd2e7];
    function _0x1ef38c(_0x1e1152, _0x176fcd) {
      if (_0x176fcd instanceof KeyboardEvent) {
        var _0x12215b = _0x576ae2(_0x176fcd.key) + 1;
        var _0x1c76e2 = _0x434dac(_0x12215b);
        _0x517360(_0x176fcd.key, _0x1c76e2, _0x12215b);
        var _0x1d7733 = _0x176fcd.code;
        var _0x27aebd = _0x176fcd.shiftKey ? 1 : 0;
        var _0x4243c5 = _0x176fcd.ctrlKey ? 1 : 0;
        var _0x3e173f = _0x176fcd.altKey ? 1 : 0;
        if (Runtime.dynCall) {
          Runtime.dynCall("viiiiiii", _0x3ebe58, [_0x5cd2e7, _0x1e1152, _0x1c76e2, _0x1d7733, _0x27aebd, _0x4243c5, _0x3e173f]);
        } else {
          (function (_0x3ab276, _0x37231f, _0x587101, _0x5d63cf, _0x405c88, _0x5cc203, _0x29bfa4) {
            _0x1f7a8e.apply(null, [_0x3ebe58, _0x3ab276, _0x37231f, _0x587101, _0x5d63cf, _0x405c88, _0x5cc203, _0x29bfa4]);
          })(_0x5cd2e7, _0x1e1152, _0x1c76e2, _0x1d7733, _0x27aebd, _0x4243c5, _0x3e173f);
        }
      }
    }
    _0x1ef6f0.addEventListener("keydown", function (_0x25a281) {
      _0x1ef38c(1, _0x25a281);
    });
    _0x1ef6f0.addEventListener("keyup", function (_0x14b3c3) {
      _0x1ef38c(2, _0x14b3c3);
    });
  }
  function _0x535a9e(_0x95875c, _0x1ef478) {
    var _0x54c28f = _0x13090f[_0x95875c];
    _0x54c28f.oninput = function () {
      var _0x1d4e30 = _0x54c28f.value;
      var _0x2b337a = _0x576ae2(_0x1d4e30) + 1;
      var _0x12be9b = _0x434dac(_0x2b337a);
      _0x517360(_0x1d4e30, _0x12be9b, _0x2b337a);
      if (Runtime.dynCall) {
        Runtime.dynCall("vii", _0x1ef478, [_0x95875c, _0x12be9b]);
      } else {
        (function (_0x2cd2e2, _0x2af82b) {
          _0x2879a8.apply(null, [_0x1ef478, _0x2cd2e2, _0x2af82b]);
        })(_0x95875c, _0x12be9b);
      }
    };
  }
  function _0x31d332(_0x969e07) {
    var _0xd5804c = _0x13090f[_0x969e07];
    if (_0xd5804c.selectionDirection == "backward") {
      return -1;
    } else {
      return 1;
    }
  }
  function _0x448cbc(_0x13df59) {
    var _0x1404a7 = _0x13090f[_0x13df59];
    return _0x1404a7.selectionEnd;
  }
  function _0x151267(_0x5ba7e8) {
    var _0x3e3886 = _0x13090f[_0x5ba7e8];
    return _0x3e3886.selectionStart;
  }
  function _0xe22d92(_0x52c335, _0x5ae7b2, _0x44fd82) {
    var _0x4dd5ef = _0x13090f[_0x52c335];
    _0x4dd5ef.setSelectionRange(_0x5ae7b2, _0x44fd82);
  }
  function _0x459659(_0x5bb7b8, _0x1d3e4c) {
    var _0x4b8bcc = _0x13090f[_0x5bb7b8];
    _0x4b8bcc.addEventListener("keydown", function (_0x5d9ec3) {
      if (_0x5d9ec3.which && _0x5d9ec3.which === 9 || _0x5d9ec3.keyCode && _0x5d9ec3.keyCode === 9) {
        _0x5d9ec3.preventDefault();
        if (_0x4b8bcc.enableTabText) {
          var _0x2c5d79 = _0x4b8bcc.value;
          var _0x3c4838 = _0x4b8bcc.selectionStart;
          var _0x5980e5 = _0x4b8bcc.selectionEnd;
          _0x4b8bcc.value = _0x2c5d79.substr(0, _0x3c4838) + "\t" + _0x2c5d79.substr(_0x5980e5, _0x2c5d79.length);
          _0x4b8bcc.setSelectionRange(_0x3c4838 + 1, _0x3c4838 + 1);
          _0x4b8bcc.oninput();
        } else if (Runtime.dynCall) {
          Runtime.dynCall("vii", _0x1d3e4c, [_0x5bb7b8, _0x5d9ec3.shiftKey ? -1 : 1]);
        } else {
          (function (_0x26ac48, _0x341776) {
            _0x2879a8.apply(null, [_0x1d3e4c, _0x26ac48, _0x341776]);
          })(_0x5bb7b8, _0x5d9ec3.shiftKey ? -1 : 1);
        }
      }
    });
  }
  function _0x525f03(_0x4a7b78, _0x3fee23) {
    var _0x4c4ee4 = _0x13090f[_0x4a7b78];
    _0x4c4ee4.value = _0xdfb7b2(_0x3fee23);
  }
  function _0x264ffe() {
    var _0x25e72a = document.getElementsByTagName("canvas");
    var _0x1db8b0 = "";
    if (_0x25e72a.length >= 1) {
      _0x1db8b0 = _0x25e72a[0].parentNode.id;
      if (_0x1db8b0 == "") {
        _0x1db8b0 = _0x25e72a[0].parentNode.id = "WebGLWindow:Canvas:ParentNode";
      }
    }
    var _0x4082bd = _0x576ae2(_0x1db8b0) + 1;
    var _0x38fc55 = _0x434dac(_0x4082bd);
    _0x517360(_0x1db8b0, _0x38fc55, _0x4082bd);
    return _0x38fc55;
  }
  function _0x68f6b5() {
    if (typeof _0x2f5dea === "undefined") {
      Runtime = {
        dynCall: undefined
      };
    } else if (typeof Runtime === "undefined") {
      Runtime = {
        dynCall: _0x2f5dea
      };
    }
  }
  function _0x140af7() {
    document.makeFullscreen = function (_0x1425e0, _0x39ddcb) {
      function _0x3f925a() {
        var _0x87244 = window.document;
        var _0x20734b = _0x87244.fullscreenElement || _0x87244.mozFullScreenElement || _0x87244.webkitFullscreenElement || _0x87244.msFullscreenElement;
        return _0x20734b;
      }
      function _0x694b04(_0x57c92a) {
        document.addEventListener("fullscreenchange", _0x57c92a, false);
        document.addEventListener("webkitfullscreenchange", _0x57c92a, false);
        document.addEventListener("mozfullscreenchange", _0x57c92a, false);
        document.addEventListener("MSFullscreenChange", _0x57c92a, false);
      }
      function _0x20523c(_0x5963ca) {
        document.removeEventListener("fullscreenchange", _0x5963ca, false);
        document.removeEventListener("webkitfullscreenchange", _0x5963ca, false);
        document.removeEventListener("mozfullscreenchange", _0x5963ca, false);
        document.removeEventListener("MSFullscreenChange", _0x5963ca, false);
      }
      var _0x33046c = document.createElement("div");
      document.body.appendChild(_0x33046c);
      var _0x3f3a72 = document.getElementsByTagName("canvas")[0];
      var _0x3433ee = {
        width: _0x3f3a72.style.width,
        height: _0x3f3a72.style.height
      };
      var _0x580b92 = document.getElementById(_0x1425e0);
      var _0x4ee3f1 = _0x580b92.tagName.toLowerCase() == "body";
      if (_0x4ee3f1) {
        _0x33046c.id = _0x580b92.id;
        _0x580b92.id = "";
        _0x580b92 = _0x3f3a72;
      }
      var _0x54318c = _0x580b92.parentNode;
      var _0xd56f13 = window.getComputedStyle(_0x580b92);
      var _0x23cf9d = parseInt(_0xd56f13.width);
      var _0x17af34 = parseInt(_0xd56f13.height);
      var _0x4ab454 = Array.from(_0x54318c.children).findIndex(function (_0x58962f) {
        return _0x58962f == _0x580b92;
      });
      _0x33046c.appendChild(_0x580b92);
      function _0x51c259() {
        if (_0x3f925a()) {
          if (_0x39ddcb) {
            var _0x3e086a = Math.min(window.screen.width / _0x23cf9d, window.screen.height / _0x17af34);
            var _0x4a4a83 = Math.floor(_0x23cf9d * _0x3e086a);
            var _0x454038 = Math.floor(_0x17af34 * _0x3e086a);
            _0x580b92.style.width = _0x4a4a83 + "px";
            _0x580b92.style.height = _0x454038 + "px";
          } else {
            _0x580b92.style.width = window.screen.width + "px";
            _0x580b92.style.height = window.screen.height + "px";
          }
          _0x3f3a72.style.width = "100%";
          _0x3f3a72.style.height = "100%";
        } else {
          _0x580b92.style.width = _0x23cf9d + "px";
          _0x580b92.style.height = _0x17af34 + "px";
          _0x54318c.insertBefore(_0x580b92, Array.from(_0x54318c.children)[_0x4ab454]);
          if (_0x4ee3f1) {
            _0x54318c.id = _0x33046c.id;
          }
          _0x33046c.parentNode.removeChild(_0x33046c);
          _0x3f3a72.style.width = _0x3433ee.width;
          _0x3f3a72.style.height = _0x3433ee.height;
          _0x20523c(_0x51c259);
        }
      }
      _0x694b04(_0x51c259);
      if (_0x33046c.mozRequestFullScreen) {
        _0x33046c.mozRequestFullScreen();
      } else if (_0x33046c.webkitRequestFullScreen) {
        _0x33046c.webkitRequestFullScreen();
      } else if (_0x33046c.msRequestFullscreen) {
        _0x33046c.msRequestFullscreen();
      } else if (_0x33046c.requestFullscreen) {
        _0x33046c.requestFullscreen();
      }
    };
  }
  function _0x372d07(_0x403edb) {
    this.blurListener = function () {
      if (Runtime.dynCall) {
        Runtime.dynCall("v", _0x403edb, []);
      } else {
        (function () {
          _0x57cc4c.call(null, _0x403edb);
        })();
      }
    };
    window.addEventListener("blur", this.blurListener);
  }
  function _0x14ee3e(_0x443199) {
    this.focusListener = function () {
      if (Runtime.dynCall) {
        Runtime.dynCall("v", _0x443199, []);
      } else {
        (function () {
          _0x57cc4c.call(null, _0x443199);
        })();
      }
    };
    window.addEventListener("focus", this.focusListener);
  }
  function _0x278432(_0x3eb5d8) {
    this.resizeListener = function () {
      if (Runtime.dynCall) {
        Runtime.dynCall("v", _0x3eb5d8, []);
      } else {
        (function () {
          _0x57cc4c.call(null, _0x3eb5d8);
        })();
      }
    };
    window.addEventListener("resize", this.resizeListener);
  }
  function _0x2251e0() {
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
  var _0x493206 = {
    requestInstances: {},
    nextRequestId: 1,
    loglevel: 2,
    SendTextToCSharpSide: function (_0x2f7e43, _0x8fd290, _0x4a83be) {
      const _0x2ec7f6 = new TextEncoder();
      const _0x32257f = _0x2ec7f6.encode(_0x4a83be);
      const _0x15b20c = function (_0x1e6d13, _0x21a5b2) {
        return _0x55c798.apply(null, [_0x493206.onallocbuffer, _0x1e6d13, _0x21a5b2]);
      }(_0x2f7e43, _0x32257f.length);
      _0xdf86cd.set(_0x32257f, _0x15b20c);
      (function (_0x5bcc33, _0x46d8c8, _0x45a051) {
        _0x1e002d.apply(null, [_0x8fd290, _0x5bcc33, _0x46d8c8, _0x45a051]);
      })(_0x2f7e43, _0x15b20c, _0x32257f.length);
    },
    GetResponseHeaders: function (_0xf9598d, _0x5e8c8a) {
      if (_0x493206.loglevel <= 1) {
        console.log("GetResponseHeaders(" + _0xf9598d + ")");
      }
      var _0xa1af69 = "";
      if (document && document.cookie) {
        var _0x32956a = document.cookie.split(";");
        for (var _0x30e173 = 0; _0x30e173 < _0x32956a.length; ++_0x30e173) {
          const _0x23ea49 = _0x32956a[_0x30e173].trim();
          if (_0x23ea49.length > 0) {
            _0xa1af69 += "Set-Cookie:" + _0x23ea49 + "\n";
          }
        }
      }
      const _0x1a4540 = _0x493206.requestInstances[_0xf9598d].getAllResponseHeaders().trim().split(/[\r\n]+/);
      _0x1a4540.forEach(_0x23d22c => {
        const _0x2b3d76 = _0x23d22c.split(": ");
        const _0x46ab89 = _0x2b3d76.shift();
        const _0x5f04a5 = _0x2b3d76.join(": ");
        if (_0x46ab89 !== "content-length") {
          _0xa1af69 += _0x46ab89 + ":" + _0x5f04a5 + "\n";
        }
      });
      _0x493206.SendTextToCSharpSide(_0xf9598d, _0x5e8c8a, _0xa1af69);
    }
  };
  function _0x20fd57(_0x55db93) {
    if (_0x493206.loglevel <= 1) {
      console.log("XHR_Abort(" + _0x55db93 + ")");
    }
    _0x493206.requestInstances[_0x55db93].abort();
  }
  function _0x244805(_0x2695be, _0x14841d, _0x42e7b7, _0x59b445, _0x3d9ce3) {
    var _0x5526d0 = new URL(_0xdfb7b2(_0x14841d));
    var _0x924641 = _0xdfb7b2(_0x2695be);
    if (_0x493206.loglevel <= 1) {
      console.log("XHR_Create (" + _0x493206.nextRequestId + ", " + _0x924641 + ", " + _0x5526d0.toString() + ", " + _0x3d9ce3 + ")");
    }
    var _0x385414 = new XMLHttpRequest();
    if (_0x42e7b7 && _0x59b445) {
      var _0x4240f6 = _0xdfb7b2(_0x42e7b7);
      var _0x16cd55 = _0xdfb7b2(_0x59b445);
      _0x385414.withCredentials = true;
      _0x385414.open(_0x924641, _0x5526d0.toString(), true, _0x4240f6, _0x16cd55);
    } else {
      _0x385414.withCredentials = _0x3d9ce3;
      _0x385414.open(_0x924641, _0x5526d0.toString(), true);
    }
    _0x385414.responseType = "arraybuffer";
    _0x493206.requestInstances[_0x493206.nextRequestId] = _0x385414;
    return _0x493206.nextRequestId++;
  }
  function _0x5b6e34(_0x2bfa03) {
    if (_0x493206.loglevel <= 1) {
      console.log("XHR_Release(" + _0x2bfa03 + ")");
    }
    delete _0x493206.requestInstances[_0x2bfa03];
  }
  function _0x2da6ac(_0x137294, _0x2f1e9e, _0x4eaf1e) {
    if (_0x493206.loglevel <= 1) {
      console.log("XHR_Send(" + _0x137294 + ", " + _0x2f1e9e + ", " + _0x4eaf1e + ")");
    }
    var _0x40e48f = _0x493206.requestInstances[_0x137294];
    try {
      if (_0x4eaf1e > 0) {
        _0x40e48f.send(_0xdf86cd.subarray(_0x2f1e9e, _0x2f1e9e + _0x4eaf1e));
      } else {
        _0x40e48f.send();
      }
    } catch (_0x20b62d) {
      if (_0x493206.loglevel <= 4) {
        console.error("XHR_Send(" + _0x137294 + "): " + _0x20b62d.name + " : " + _0x20b62d.message);
      }
    }
  }
  function _0x1e84a8(_0x3fb336) {
    _0x493206.loglevel = _0x3fb336;
  }
  function _0x429087(_0x5ece26, _0xb2d1a3, _0x35f01d) {
    if (_0x493206.loglevel <= 1) {
      console.log("XHR_SetProgressHandler(" + _0x5ece26 + ")");
    }
    var _0x564123 = _0x493206.requestInstances[_0x5ece26];
    if (_0x564123) {
      if (_0xb2d1a3) {
        _0x564123.onprogress = function _0x493681(_0x5b2e0b) {
          if (_0x493206.loglevel <= 1) {
            console.log("XHR_SetProgressHandler download(" + _0x5ece26 + ", " + _0x5b2e0b.loaded + ", " + _0x5b2e0b.total + ")");
          }
          if (_0x5b2e0b.lengthComputable) {
            (function (_0x2c0060, _0x159a96, _0x2710c1) {
              _0x1e002d.apply(null, [_0xb2d1a3, _0x2c0060, _0x159a96, _0x2710c1]);
            })(_0x5ece26, _0x5b2e0b.loaded, _0x5b2e0b.total);
          }
        };
      }
      if (_0x35f01d) {
        _0x564123.upload.addEventListener("progress", function _0x11f86b(_0xa71607) {
          if (_0x493206.loglevel <= 1) {
            console.log("XHR_SetProgressHandler upload(" + _0x5ece26 + ", " + _0xa71607.loaded + ", " + _0xa71607.total + ")");
          }
          if (_0xa71607.lengthComputable) {
            (function (_0x59683f, _0x5daa69, _0x269f86) {
              _0x1e002d.apply(null, [_0x35f01d, _0x59683f, _0x5daa69, _0x269f86]);
            })(_0x5ece26, _0xa71607.loaded, _0xa71607.total);
          }
        }, true);
      }
    }
  }
  function _0x150c6f(_0x282d34, _0x38320b, _0x3beb23) {
    var _0x59ffd5 = _0xdfb7b2(_0x38320b);
    var _0x5e7f2d = _0xdfb7b2(_0x3beb23);
    if (_0x493206.loglevel <= 1) {
      console.log("XHR_SetRequestHeader(" + _0x59ffd5 + ", " + _0x5e7f2d + ")");
    }
    if (_0x59ffd5 != "Cookie") {
      _0x493206.requestInstances[_0x282d34].setRequestHeader(_0x59ffd5, _0x5e7f2d);
    } else {
      var _0x448d43 = _0x5e7f2d.split(";");
      for (var _0x58f206 = 0; _0x58f206 < _0x448d43.length; _0x58f206++) {
        document.cookie = _0x448d43[_0x58f206];
      }
    }
  }
  function _0x58ea2e(_0x37af07, _0x333cb0, _0x4a51b0, _0x128b70, _0x3333b2, _0x449f22, _0x48d4e0) {
    if (_0x493206.loglevel <= 1) {
      console.log("XHR_SetResponseHandler(" + _0x37af07 + ")");
    }
    _0x493206.onallocbuffer = _0x48d4e0;
    var _0xa411d5 = _0x493206.requestInstances[_0x37af07];
    _0xa411d5.onreadystatechange = _0x16015b => {
      if (_0x493206.loglevel <= 1) {
        console.log(_0x37af07 + " onreadystatechange(" + _0xa411d5.readyState + ")");
      }
      switch (_0xa411d5.readyState) {
        case XMLHttpRequest.UNSENT:
          break;
        case XMLHttpRequest.OPENED:
          break;
        case XMLHttpRequest.HEADERS_RECEIVED:
          {
            _0x493206.SendTextToCSharpSide(_0x37af07, _0x449f22, "HTTP/1.1 " + _0xa411d5.status + " " + _0xa411d5.statusText + "\n");
            _0x493206.GetResponseHeaders(_0x37af07, _0x449f22);
            break;
          }
        case XMLHttpRequest.LOADING:
          break;
        case XMLHttpRequest.DONE:
          break;
      }
    };
    _0xa411d5.onloadstart = _0x3f4c6a => {
      if (_0x493206.loglevel <= 1) {
        console.log(_0x37af07 + " onloadstart: " + _0x3f4c6a);
      }
    };
    _0xa411d5.onload = function _0x2fce4e(_0x54f6d8) {
      if (_0x493206.loglevel <= 1) {
        console.log(_0x37af07 + " onload(" + _0xa411d5.status + ", " + _0xa411d5.statusText + ")");
      }
      if (_0x333cb0) {
        var _0x1589da = 0;
        var _0x2af950 = 0;
        if (_0xa411d5.response) {
          var _0x2fdf1e = _0xa411d5.response;
          _0x1589da = _0x2fdf1e.byteLength;
          _0x493206.SendTextToCSharpSide(_0x37af07, _0x449f22, "content-length:" + _0x1589da + "\n\n");
          _0x2af950 = function (_0xbbc720, _0x1042d5) {
            return _0x55c798.apply(null, [_0x48d4e0, _0xbbc720, _0x1042d5]);
          }(_0x37af07, _0x1589da);
          var _0x216ef8 = new Uint8Array(_0x2fdf1e);
          var _0x385849 = _0xdf86cd.subarray(_0x2af950, _0x2af950 + _0x1589da);
          _0x385849.set(_0x216ef8);
        } else {
          _0x493206.SendTextToCSharpSide(_0x37af07, _0x449f22, "content-length:0\n\n");
        }
        (function (_0x1bb69a, _0x4ebe3c, _0x129278) {
          _0x1e002d.apply(null, [_0x333cb0, _0x1bb69a, _0x4ebe3c, _0x129278]);
        })(_0x37af07, _0x2af950, _0x1589da);
      }
    };
    if (_0x4a51b0) {
      _0xa411d5.onerror = function _0x208894(_0xcbead5) {
        function _0x4bad3e(_0x5944d9) {
          var _0x399141 = _0x576ae2(_0x5944d9) + 1;
          var _0x1950b2 = _0x434dac(_0x399141);
          _0x538990(_0x5944d9, _0xdf86cd, _0x1950b2, _0x399141);
          (function (_0x3bfdf3, _0x1fc095) {
            _0x2879a8.apply(null, [_0x4a51b0, _0x3bfdf3, _0x1fc095]);
          })(_0x37af07, _0x1950b2);
          _0x41b1b9(_0x1950b2);
        }
        if (_0xcbead5.error) {
          _0x4bad3e(_0xcbead5.error);
        } else {
          _0x4bad3e("Unknown Error! Maybe a CORS porblem?");
        }
      };
    }
    if (_0x128b70) {
      _0xa411d5.ontimeout = function _0x375c4a(_0x12fb1f) {
        (function (_0x3d688a) {
          _0x1c1a57.apply(null, [_0x128b70, _0x3d688a]);
        })(_0x37af07);
      };
    }
    if (_0x3333b2) {
      _0xa411d5.onabort = function _0x8a005a(_0x11de13) {
        (function (_0x4d7b05) {
          _0x1c1a57.apply(null, [_0x3333b2, _0x4d7b05]);
        })(_0x37af07);
      };
    }
  }
  function _0x5e4a25(_0x206c73, _0x10bc04) {
    if (_0x493206.loglevel <= 1) {
      console.log("XHR_SetTimeout(" + _0x206c73 + ", " + _0x10bc04 + ")");
    }
    _0x493206.requestInstances[_0x206c73].timeout = _0x10bc04;
  }
  var _0x352254 = {
    DESTRUCTOR_OFFSET: 0,
    REFCOUNT_OFFSET: 4,
    TYPE_OFFSET: 8,
    CAUGHT_OFFSET: 12,
    RETHROWN_OFFSET: 13,
    SIZE: 16
  };
  function _0x4233bd(_0x386edc) {
    return _0x434dac(_0x386edc + _0x352254.SIZE) + _0x352254.SIZE;
  }
  function _0x4ab6ff(_0x12b264) {
    this.excPtr = _0x12b264;
    this.ptr = _0x12b264 - _0x352254.SIZE;
    this.set_type = function (_0x1a080f) {
      _0x38db74[this.ptr + _0x352254.TYPE_OFFSET >> 2] = _0x1a080f;
    };
    this.get_type = function () {
      return _0x38db74[this.ptr + _0x352254.TYPE_OFFSET >> 2];
    };
    this.set_destructor = function (_0x2754b3) {
      _0x38db74[this.ptr + _0x352254.DESTRUCTOR_OFFSET >> 2] = _0x2754b3;
    };
    this.get_destructor = function () {
      return _0x38db74[this.ptr + _0x352254.DESTRUCTOR_OFFSET >> 2];
    };
    this.set_refcount = function (_0x417a37) {
      _0x38db74[this.ptr + _0x352254.REFCOUNT_OFFSET >> 2] = _0x417a37;
    };
    this.set_caught = function (_0x5b4fbc) {
      _0x5b4fbc = _0x5b4fbc ? 1 : 0;
      _0x3b8c2f[this.ptr + _0x352254.CAUGHT_OFFSET >> 0] = _0x5b4fbc;
    };
    this.get_caught = function () {
      return _0x3b8c2f[this.ptr + _0x352254.CAUGHT_OFFSET >> 0] != 0;
    };
    this.set_rethrown = function (_0x1ffbe0) {
      _0x1ffbe0 = _0x1ffbe0 ? 1 : 0;
      _0x3b8c2f[this.ptr + _0x352254.RETHROWN_OFFSET >> 0] = _0x1ffbe0;
    };
    this.get_rethrown = function () {
      return _0x3b8c2f[this.ptr + _0x352254.RETHROWN_OFFSET >> 0] != 0;
    };
    this.init = function (_0x2588c0, _0x2464e7) {
      this.set_type(_0x2588c0);
      this.set_destructor(_0x2464e7);
      this.set_refcount(0);
      this.set_caught(false);
      this.set_rethrown(false);
    };
    this.add_ref = function () {
      var _0x12d508 = _0x38db74[this.ptr + _0x352254.REFCOUNT_OFFSET >> 2];
      _0x38db74[this.ptr + _0x352254.REFCOUNT_OFFSET >> 2] = _0x12d508 + 1;
    };
    this.release_ref = function () {
      var _0x1309dc = _0x38db74[this.ptr + _0x352254.REFCOUNT_OFFSET >> 2];
      _0x38db74[this.ptr + _0x352254.REFCOUNT_OFFSET >> 2] = _0x1309dc - 1;
      return _0x1309dc === 1;
    };
  }
  function _0x5ef07b(_0x2b25c0) {
    this.free = function () {
      _0x41b1b9(this.ptr);
      this.ptr = 0;
    };
    this.set_base_ptr = function (_0x1c862d) {
      _0x38db74[this.ptr >> 2] = _0x1c862d;
    };
    this.get_base_ptr = function () {
      return _0x38db74[this.ptr >> 2];
    };
    this.set_adjusted_ptr = function (_0x905b6c) {
      var _0xd266e2 = 4;
      _0x38db74[this.ptr + _0xd266e2 >> 2] = _0x905b6c;
    };
    this.get_adjusted_ptr = function () {
      var _0x41f6f3 = 4;
      return _0x38db74[this.ptr + _0x41f6f3 >> 2];
    };
    this.get_exception_ptr = function () {
      var _0x40454d = _0x1d4edb(this.get_exception_info().get_type());
      if (_0x40454d) {
        return _0x38db74[this.get_base_ptr() >> 2];
      }
      var _0xf5d6d6 = this.get_adjusted_ptr();
      if (_0xf5d6d6 !== 0) {
        return _0xf5d6d6;
      }
      return this.get_base_ptr();
    };
    this.get_exception_info = function () {
      return new _0x4ab6ff(this.get_base_ptr());
    };
    if (_0x2b25c0 === undefined) {
      this.ptr = _0x434dac(8);
      this.set_adjusted_ptr(0);
    } else {
      this.ptr = _0x2b25c0;
    }
  }
  var _0x2af5b7 = [];
  function _0x457347(_0x51c6de) {
    _0x51c6de.add_ref();
  }
  var _0x3d585e = 0;
  function _0x22d8c0(_0x1082b7) {
    var _0x43c097 = new _0x5ef07b(_0x1082b7);
    var _0x2f1e48 = _0x43c097.get_exception_info();
    if (!_0x2f1e48.get_caught()) {
      _0x2f1e48.set_caught(true);
      _0x3d585e--;
    }
    _0x2f1e48.set_rethrown(false);
    _0x2af5b7.push(_0x43c097);
    _0x457347(_0x2f1e48);
    return _0x43c097.get_exception_ptr();
  }
  var _0x241202 = 0;
  function _0x56ea30(_0x4fbe1a) {
    return _0x41b1b9(new _0x4ab6ff(_0x4fbe1a).ptr);
  }
  function _0x4037c7(_0x3ea3b3) {
    if (_0x3ea3b3.release_ref() && !_0x3ea3b3.get_rethrown()) {
      var _0x881071 = _0x3ea3b3.get_destructor();
      if (_0x881071) {
        (function (_0x1c81ea) {
          return _0x214d37.apply(null, [_0x881071, _0x1c81ea]);
        })(_0x3ea3b3.excPtr);
      }
      _0x56ea30(_0x3ea3b3.excPtr);
    }
  }
  function _0xbcdea2() {
    _0x5ed159(0);
    var _0x20425f = _0x2af5b7.pop();
    _0x4037c7(_0x20425f.get_exception_info());
    _0x20425f.free();
    _0x241202 = 0;
  }
  function _0x31a0c7(_0x3cb770) {
    var _0x1a15fc = new _0x5ef07b(_0x3cb770);
    var _0x16f477 = _0x1a15fc.get_base_ptr();
    if (!_0x241202) {
      _0x241202 = _0x16f477;
    }
    _0x1a15fc.free();
    throw _0x16f477;
  }
  function _0x121ac2() {
    var _0x538658 = _0x241202;
    if (!_0x538658) {
      _0x592137(0);
      return 0;
    }
    var _0x344725 = new _0x4ab6ff(_0x538658);
    var _0x4a4ed3 = _0x344725.get_type();
    var _0x1c5ce1 = new _0x5ef07b();
    _0x1c5ce1.set_base_ptr(_0x538658);
    if (!_0x4a4ed3) {
      _0x592137(0);
      return _0x1c5ce1.ptr | 0;
    }
    var _0x125f74 = Array.prototype.slice.call(arguments);
    var _0x574f1e = _0x19cca3();
    var _0x4acdf9 = _0x216ace(4);
    _0x38db74[_0x4acdf9 >> 2] = _0x538658;
    for (var _0x230a16 = 0; _0x230a16 < _0x125f74.length; _0x230a16++) {
      var _0x30f3e9 = _0x125f74[_0x230a16];
      if (_0x30f3e9 === 0 || _0x30f3e9 === _0x4a4ed3) {
        break;
      }
      if (_0x1110b4(_0x30f3e9, _0x4a4ed3, _0x4acdf9)) {
        var _0x2d97d7 = _0x38db74[_0x4acdf9 >> 2];
        if (_0x538658 !== _0x2d97d7) {
          _0x1c5ce1.set_adjusted_ptr(_0x2d97d7);
        }
        _0x592137(_0x30f3e9);
        return _0x1c5ce1.ptr | 0;
      }
    }
    _0x4cb3d3(_0x574f1e);
    _0x592137(_0x4a4ed3);
    return _0x1c5ce1.ptr | 0;
  }
  function _0x2f9104() {
    var _0x3993a8 = _0x241202;
    if (!_0x3993a8) {
      _0x592137(0);
      return 0;
    }
    var _0x1b1697 = new _0x4ab6ff(_0x3993a8);
    var _0x4f31f6 = _0x1b1697.get_type();
    var _0x39af69 = new _0x5ef07b();
    _0x39af69.set_base_ptr(_0x3993a8);
    if (!_0x4f31f6) {
      _0x592137(0);
      return _0x39af69.ptr | 0;
    }
    var _0xf75fa2 = Array.prototype.slice.call(arguments);
    var _0xd5d5c0 = _0x19cca3();
    var _0xcdb59d = _0x216ace(4);
    _0x38db74[_0xcdb59d >> 2] = _0x3993a8;
    for (var _0x301db7 = 0; _0x301db7 < _0xf75fa2.length; _0x301db7++) {
      var _0x29954d = _0xf75fa2[_0x301db7];
      if (_0x29954d === 0 || _0x29954d === _0x4f31f6) {
        break;
      }
      if (_0x1110b4(_0x29954d, _0x4f31f6, _0xcdb59d)) {
        var _0x55c26a = _0x38db74[_0xcdb59d >> 2];
        if (_0x3993a8 !== _0x55c26a) {
          _0x39af69.set_adjusted_ptr(_0x55c26a);
        }
        _0x592137(_0x29954d);
        return _0x39af69.ptr | 0;
      }
    }
    _0x4cb3d3(_0xd5d5c0);
    _0x592137(_0x4f31f6);
    return _0x39af69.ptr | 0;
  }
  function _0x1405ce() {
    var _0x4b0bed = _0x241202;
    if (!_0x4b0bed) {
      _0x592137(0);
      return 0;
    }
    var _0x1e81ca = new _0x4ab6ff(_0x4b0bed);
    var _0x5acd72 = _0x1e81ca.get_type();
    var _0xb7d799 = new _0x5ef07b();
    _0xb7d799.set_base_ptr(_0x4b0bed);
    if (!_0x5acd72) {
      _0x592137(0);
      return _0xb7d799.ptr | 0;
    }
    var _0x108742 = Array.prototype.slice.call(arguments);
    var _0xd006d6 = _0x19cca3();
    var _0x2a173f = _0x216ace(4);
    _0x38db74[_0x2a173f >> 2] = _0x4b0bed;
    for (var _0x2a7281 = 0; _0x2a7281 < _0x108742.length; _0x2a7281++) {
      var _0x876dde = _0x108742[_0x2a7281];
      if (_0x876dde === 0 || _0x876dde === _0x5acd72) {
        break;
      }
      if (_0x1110b4(_0x876dde, _0x5acd72, _0x2a173f)) {
        var _0x49e673 = _0x38db74[_0x2a173f >> 2];
        if (_0x4b0bed !== _0x49e673) {
          _0xb7d799.set_adjusted_ptr(_0x49e673);
        }
        _0x592137(_0x876dde);
        return _0xb7d799.ptr | 0;
      }
    }
    _0x4cb3d3(_0xd006d6);
    _0x592137(_0x5acd72);
    return _0xb7d799.ptr | 0;
  }
  function _0x425d59() {
    var _0x54012a = _0x2af5b7.pop();
    if (!_0x54012a) {
      _0x5d461b("no exception to throw");
    }
    var _0x1753b9 = _0x54012a.get_exception_info();
    var _0x5eda9c = _0x54012a.get_base_ptr();
    if (!_0x1753b9.get_rethrown()) {
      _0x2af5b7.push(_0x54012a);
      _0x1753b9.set_rethrown(true);
      _0x1753b9.set_caught(false);
      _0x3d585e++;
    } else {
      _0x54012a.free();
    }
    _0x241202 = _0x5eda9c;
    throw _0x5eda9c;
  }
  function _0x54d9ec(_0x4b69f9, _0x3d1349, _0xb19a46) {
    var _0x75d6d9 = new _0x4ab6ff(_0x4b69f9);
    _0x75d6d9.init(_0x3d1349, _0xb19a46);
    _0x241202 = _0x4b69f9;
    _0x3d585e++;
    throw _0x4b69f9;
  }
  function _0x3d8ebb(_0x42a703, _0x12a0eb) {
    var _0x441fe8 = new Date(_0x38db74[_0x42a703 >> 2] * 1000);
    _0x38db74[_0x12a0eb >> 2] = _0x441fe8.getUTCSeconds();
    _0x38db74[_0x12a0eb + 4 >> 2] = _0x441fe8.getUTCMinutes();
    _0x38db74[_0x12a0eb + 8 >> 2] = _0x441fe8.getUTCHours();
    _0x38db74[_0x12a0eb + 12 >> 2] = _0x441fe8.getUTCDate();
    _0x38db74[_0x12a0eb + 16 >> 2] = _0x441fe8.getUTCMonth();
    _0x38db74[_0x12a0eb + 20 >> 2] = _0x441fe8.getUTCFullYear() - 1900;
    _0x38db74[_0x12a0eb + 24 >> 2] = _0x441fe8.getUTCDay();
    _0x38db74[_0x12a0eb + 36 >> 2] = 0;
    _0x38db74[_0x12a0eb + 32 >> 2] = 0;
    var _0x2f29b4 = Date.UTC(_0x441fe8.getUTCFullYear(), 0, 1, 0, 0, 0, 0);
    var _0x1b9bef = (_0x441fe8.getTime() - _0x2f29b4) / 86400000 | 0;
    _0x38db74[_0x12a0eb + 28 >> 2] = _0x1b9bef;
    if (!_0x3d8ebb.GMTString) {
      _0x3d8ebb.GMTString = _0x19272c("GMT");
    }
    _0x38db74[_0x12a0eb + 40 >> 2] = _0x3d8ebb.GMTString;
    return _0x12a0eb;
  }
  function _0x1a68c7(_0x27ea58, _0x23ee5b) {
    return _0x3d8ebb(_0x27ea58, _0x23ee5b);
  }
  function _0x3e6cb0() {
    if (_0x3e6cb0.called) {
      return;
    }
    _0x3e6cb0.called = true;
    var _0x139e9a = new Date().getFullYear();
    var _0x2cc16d = new Date(_0x139e9a, 0, 1);
    var _0x5bdbad = new Date(_0x139e9a, 6, 1);
    var _0x4eb2f1 = _0x2cc16d.getTimezoneOffset();
    var _0xc541ae = _0x5bdbad.getTimezoneOffset();
    var _0x43efb4 = Math.max(_0x4eb2f1, _0xc541ae);
    _0x38db74[_0x572774() >> 2] = _0x43efb4 * 60;
    _0x38db74[_0x3caf48() >> 2] = Number(_0x4eb2f1 != _0xc541ae);
    function _0x3ca122(_0x2678e0) {
      var _0x595837 = _0x2678e0.toTimeString().match(/\(([A-Za-z ]+)\)$/);
      if (_0x595837) {
        return _0x595837[1];
      } else {
        return "GMT";
      }
    }
    var _0x4f3635 = _0x3ca122(_0x2cc16d);
    var _0x21517f = _0x3ca122(_0x5bdbad);
    var _0x28fc58 = _0x19272c(_0x4f3635);
    var _0x42d871 = _0x19272c(_0x21517f);
    if (_0xc541ae < _0x4eb2f1) {
      _0x38db74[_0x28d792() >> 2] = _0x28fc58;
      _0x38db74[_0x28d792() + 4 >> 2] = _0x42d871;
    } else {
      _0x38db74[_0x28d792() >> 2] = _0x42d871;
      _0x38db74[_0x28d792() + 4 >> 2] = _0x28fc58;
    }
  }
  function _0x23b5c5(_0x5c5746, _0x42d300) {
    _0x3e6cb0();
    var _0x145a7d = new Date(_0x38db74[_0x5c5746 >> 2] * 1000);
    _0x38db74[_0x42d300 >> 2] = _0x145a7d.getSeconds();
    _0x38db74[_0x42d300 + 4 >> 2] = _0x145a7d.getMinutes();
    _0x38db74[_0x42d300 + 8 >> 2] = _0x145a7d.getHours();
    _0x38db74[_0x42d300 + 12 >> 2] = _0x145a7d.getDate();
    _0x38db74[_0x42d300 + 16 >> 2] = _0x145a7d.getMonth();
    _0x38db74[_0x42d300 + 20 >> 2] = _0x145a7d.getFullYear() - 1900;
    _0x38db74[_0x42d300 + 24 >> 2] = _0x145a7d.getDay();
    var _0x1df877 = new Date(_0x145a7d.getFullYear(), 0, 1);
    var _0x29c79d = (_0x145a7d.getTime() - _0x1df877.getTime()) / 86400000 | 0;
    _0x38db74[_0x42d300 + 28 >> 2] = _0x29c79d;
    _0x38db74[_0x42d300 + 36 >> 2] = -(_0x145a7d.getTimezoneOffset() * 60);
    var _0x4ee42f = new Date(_0x145a7d.getFullYear(), 6, 1).getTimezoneOffset();
    var _0xe239a9 = _0x1df877.getTimezoneOffset();
    var _0x54b407 = (_0x4ee42f != _0xe239a9 && _0x145a7d.getTimezoneOffset() == Math.min(_0xe239a9, _0x4ee42f)) | 0;
    _0x38db74[_0x42d300 + 32 >> 2] = _0x54b407;
    var _0x5a5626 = _0x38db74[_0x28d792() + (_0x54b407 ? 4 : 0) >> 2];
    _0x38db74[_0x42d300 + 40 >> 2] = _0x5a5626;
    return _0x42d300;
  }
  function _0x2f9df3(_0x5c5744, _0x50ee8c) {
    return _0x23b5c5(_0x5c5744, _0x50ee8c);
  }
  var _0x609fec = {
    splitPath: function (_0x43ec9f) {
      var _0x2d76ff = /^(\/?|)([\s\S]*?)((?:\.{1,2}|[^\/]+?|)(\.[^.\/]*|))(?:[\/]*)$/;
      return _0x2d76ff.exec(_0x43ec9f).slice(1);
    },
    normalizeArray: function (_0x14ec83, _0x2cf53f) {
      var _0xa82d26 = 0;
      for (var _0x366018 = _0x14ec83.length - 1; _0x366018 >= 0; _0x366018--) {
        var _0x50e56f = _0x14ec83[_0x366018];
        if (_0x50e56f === ".") {
          _0x14ec83.splice(_0x366018, 1);
        } else if (_0x50e56f === "..") {
          _0x14ec83.splice(_0x366018, 1);
          _0xa82d26++;
        } else if (_0xa82d26) {
          _0x14ec83.splice(_0x366018, 1);
          _0xa82d26--;
        }
      }
      if (_0x2cf53f) {
        for (; _0xa82d26; _0xa82d26--) {
          _0x14ec83.unshift("..");
        }
      }
      return _0x14ec83;
    },
    normalize: function (_0x5237e5) {
      var _0x2cf520 = _0x5237e5.charAt(0) === "/";
      var _0x169093 = _0x5237e5.substr(-1) === "/";
      _0x5237e5 = _0x609fec.normalizeArray(_0x5237e5.split("/").filter(function (_0x237b6b) {
        return !!_0x237b6b;
      }), !_0x2cf520).join("/");
      if (!_0x5237e5 && !_0x2cf520) {
        _0x5237e5 = ".";
      }
      if (_0x5237e5 && _0x169093) {
        _0x5237e5 += "/";
      }
      return (_0x2cf520 ? "/" : "") + _0x5237e5;
    },
    dirname: function (_0x15f4b1) {
      var _0x29cf4e = _0x609fec.splitPath(_0x15f4b1);
      var _0x870021 = _0x29cf4e[0];
      var _0x59c1e8 = _0x29cf4e[1];
      if (!_0x870021 && !_0x59c1e8) {
        return ".";
      }
      _0x59c1e8 &&= _0x59c1e8.substr(0, _0x59c1e8.length - 1);
      return _0x870021 + _0x59c1e8;
    },
    basename: function (_0x718578) {
      if (_0x718578 === "/") {
        return "/";
      }
      _0x718578 = _0x609fec.normalize(_0x718578);
      _0x718578 = _0x718578.replace(/\/$/, "");
      var _0x18739f = _0x718578.lastIndexOf("/");
      if (_0x18739f === -1) {
        return _0x718578;
      }
      return _0x718578.substr(_0x18739f + 1);
    },
    extname: function (_0x433385) {
      return _0x609fec.splitPath(_0x433385)[3];
    },
    join: function () {
      var _0x8a351f = Array.prototype.slice.call(arguments, 0);
      return _0x609fec.normalize(_0x8a351f.join("/"));
    },
    join2: function (_0x2ed95a, _0x257c37) {
      return _0x609fec.normalize(_0x2ed95a + "/" + _0x257c37);
    }
  };
  function _0xab09be() {
    if (typeof crypto === "object" && typeof crypto.getRandomValues === "function") {
      var _0x539838 = new Uint8Array(1);
      return function () {
        crypto.getRandomValues(_0x539838);
        return _0x539838[0];
      };
    } else if (_0x4b3166) {
      try {
        var _0x38b369 = require("crypto");
        return function () {
          return _0x38b369.randomBytes(1)[0];
        };
      } catch (_0x1d76fa) {}
    }
    return function () {
      _0x5d461b("randomDevice");
    };
  }
  var _0x2ccd89 = {
    resolve: function () {
      var _0x397dfd = "";
      var _0x5d7851 = false;
      for (var _0x45cdcf = arguments.length - 1; _0x45cdcf >= -1 && !_0x5d7851; _0x45cdcf--) {
        var _0x52a1d6 = _0x45cdcf >= 0 ? arguments[_0x45cdcf] : _0x4de3dc.cwd();
        if (typeof _0x52a1d6 !== "string") {
          throw new TypeError("Arguments to path.resolve must be strings");
        } else if (!_0x52a1d6) {
          return "";
        }
        _0x397dfd = _0x52a1d6 + "/" + _0x397dfd;
        _0x5d7851 = _0x52a1d6.charAt(0) === "/";
      }
      _0x397dfd = _0x609fec.normalizeArray(_0x397dfd.split("/").filter(function (_0x4ac5b9) {
        return !!_0x4ac5b9;
      }), !_0x5d7851).join("/");
      return (_0x5d7851 ? "/" : "") + _0x397dfd || ".";
    },
    relative: function (_0x56bf03, _0x55d075) {
      _0x56bf03 = _0x2ccd89.resolve(_0x56bf03).substr(1);
      _0x55d075 = _0x2ccd89.resolve(_0x55d075).substr(1);
      function _0x3acc2a(_0x511a2d) {
        var _0x6576e8 = 0;
        for (; _0x6576e8 < _0x511a2d.length; _0x6576e8++) {
          if (_0x511a2d[_0x6576e8] !== "") {
            break;
          }
        }
        var _0x1b0811 = _0x511a2d.length - 1;
        for (; _0x1b0811 >= 0; _0x1b0811--) {
          if (_0x511a2d[_0x1b0811] !== "") {
            break;
          }
        }
        if (_0x6576e8 > _0x1b0811) {
          return [];
        }
        return _0x511a2d.slice(_0x6576e8, _0x1b0811 - _0x6576e8 + 1);
      }
      var _0x1f6d17 = _0x3acc2a(_0x56bf03.split("/"));
      var _0x289aa3 = _0x3acc2a(_0x55d075.split("/"));
      var _0x335410 = Math.min(_0x1f6d17.length, _0x289aa3.length);
      var _0x2489bc = _0x335410;
      for (var _0x46e847 = 0; _0x46e847 < _0x335410; _0x46e847++) {
        if (_0x1f6d17[_0x46e847] !== _0x289aa3[_0x46e847]) {
          _0x2489bc = _0x46e847;
          break;
        }
      }
      var _0x470167 = [];
      for (var _0x46e847 = _0x2489bc; _0x46e847 < _0x1f6d17.length; _0x46e847++) {
        _0x470167.push("..");
      }
      _0x470167 = _0x470167.concat(_0x289aa3.slice(_0x2489bc));
      return _0x470167.join("/");
    }
  };
  var _0x5b46ae = {
    ttys: [],
    init: function () {},
    shutdown: function () {},
    register: function (_0x542779, _0x5874b3) {
      _0x5b46ae.ttys[_0x542779] = {
        input: [],
        output: [],
        ops: _0x5874b3
      };
      _0x4de3dc.registerDevice(_0x542779, _0x5b46ae.stream_ops);
    },
    stream_ops: {
      open: function (_0x502e68) {
        var _0x4633fe = _0x5b46ae.ttys[_0x502e68.node.rdev];
        if (!_0x4633fe) {
          throw new _0x4de3dc.ErrnoError(43);
        }
        _0x502e68.tty = _0x4633fe;
        _0x502e68.seekable = false;
      },
      close: function (_0x33e811) {
        _0x33e811.tty.ops.flush(_0x33e811.tty);
      },
      flush: function (_0x2f8caa) {
        _0x2f8caa.tty.ops.flush(_0x2f8caa.tty);
      },
      read: function (_0x200af9, _0x3e4d91, _0x4ffd97, _0x5317cd, _0x41b741) {
        if (!_0x200af9.tty || !_0x200af9.tty.ops.get_char) {
          throw new _0x4de3dc.ErrnoError(60);
        }
        var _0x3b72dd = 0;
        for (var _0x44cb34 = 0; _0x44cb34 < _0x5317cd; _0x44cb34++) {
          var _0x2bbc59;
          try {
            _0x2bbc59 = _0x200af9.tty.ops.get_char(_0x200af9.tty);
          } catch (_0xcfafed) {
            throw new _0x4de3dc.ErrnoError(29);
          }
          if (_0x2bbc59 === undefined && _0x3b72dd === 0) {
            throw new _0x4de3dc.ErrnoError(6);
          }
          if (_0x2bbc59 === null || _0x2bbc59 === undefined) {
            break;
          }
          _0x3b72dd++;
          _0x3e4d91[_0x4ffd97 + _0x44cb34] = _0x2bbc59;
        }
        if (_0x3b72dd) {
          _0x200af9.node.timestamp = Date.now();
        }
        return _0x3b72dd;
      },
      write: function (_0x34e48d, _0x2c2164, _0x24f14a, _0x440f17, _0x2400c5) {
        if (!_0x34e48d.tty || !_0x34e48d.tty.ops.put_char) {
          throw new _0x4de3dc.ErrnoError(60);
        }
        try {
          for (var _0x150737 = 0; _0x150737 < _0x440f17; _0x150737++) {
            _0x34e48d.tty.ops.put_char(_0x34e48d.tty, _0x2c2164[_0x24f14a + _0x150737]);
          }
        } catch (_0xb27f41) {
          throw new _0x4de3dc.ErrnoError(29);
        }
        if (_0x440f17) {
          _0x34e48d.node.timestamp = Date.now();
        }
        return _0x150737;
      }
    },
    default_tty_ops: {
      get_char: function (_0x292542) {
        if (!_0x292542.input.length) {
          var _0x5d5d37 = null;
          if (_0x4b3166) {
            var _0x5c52f3 = 256;
            var _0x1879d8 = Buffer.alloc ? Buffer.alloc(_0x5c52f3) : new Buffer(_0x5c52f3);
            var _0x224b93 = 0;
            try {
              _0x224b93 = _0x5906d0.readSync(process.stdin.fd, _0x1879d8, 0, _0x5c52f3, null);
            } catch (_0x2bb903) {
              if (_0x2bb903.toString().includes("EOF")) {
                _0x224b93 = 0;
              } else {
                throw _0x2bb903;
              }
            }
            if (_0x224b93 > 0) {
              _0x5d5d37 = _0x1879d8.slice(0, _0x224b93).toString("utf-8");
            } else {
              _0x5d5d37 = null;
            }
          } else if (typeof window != "undefined" && typeof window.prompt == "function") {
            _0x5d5d37 = window.prompt("Input: ");
            if (_0x5d5d37 !== null) {
              _0x5d5d37 += "\n";
            }
          } else if (typeof readline == "function") {
            _0x5d5d37 = readline();
            if (_0x5d5d37 !== null) {
              _0x5d5d37 += "\n";
            }
          }
          if (!_0x5d5d37) {
            return null;
          }
          _0x292542.input = _0x3f85df(_0x5d5d37, true);
        }
        return _0x292542.input.shift();
      },
      put_char: function (_0x3ef9dd, _0x1e1e6b) {
        if (_0x1e1e6b === null || _0x1e1e6b === 10) {
          _0x376d62(_0x21b049(_0x3ef9dd.output, 0));
          _0x3ef9dd.output = [];
        } else if (_0x1e1e6b != 0) {
          _0x3ef9dd.output.push(_0x1e1e6b);
        }
      },
      flush: function (_0x51540a) {
        if (_0x51540a.output && _0x51540a.output.length > 0) {
          _0x376d62(_0x21b049(_0x51540a.output, 0));
          _0x51540a.output = [];
        }
      }
    },
    default_tty1_ops: {
      put_char: function (_0x3600e0, _0x2198fe) {
        if (_0x2198fe === null || _0x2198fe === 10) {
          _0x1af4bd(_0x21b049(_0x3600e0.output, 0));
          _0x3600e0.output = [];
        } else if (_0x2198fe != 0) {
          _0x3600e0.output.push(_0x2198fe);
        }
      },
      flush: function (_0x28e74c) {
        if (_0x28e74c.output && _0x28e74c.output.length > 0) {
          _0x1af4bd(_0x21b049(_0x28e74c.output, 0));
          _0x28e74c.output = [];
        }
      }
    }
  };
  function _0x3cc21f(_0x1e226b) {
    var _0x5eb421 = _0x3202cc(_0x1e226b, 65536);
    var _0x3294f1 = _0x434dac(_0x5eb421);
    while (_0x1e226b < _0x5eb421) {
      _0x3b8c2f[_0x3294f1 + _0x1e226b++] = 0;
    }
    return _0x3294f1;
  }
  var _0x34001c = {
    ops_table: null,
    mount: function (_0x15f5aa) {
      return _0x34001c.createNode(null, "/", 16895, 0);
    },
    createNode: function (_0xe40a8c, _0x860f47, _0x5557f4, _0x3108de) {
      if (_0x4de3dc.isBlkdev(_0x5557f4) || _0x4de3dc.isFIFO(_0x5557f4)) {
        throw new _0x4de3dc.ErrnoError(63);
      }
      if (!_0x34001c.ops_table) {
        _0x34001c.ops_table = {
          dir: {
            node: {
              getattr: _0x34001c.node_ops.getattr,
              setattr: _0x34001c.node_ops.setattr,
              lookup: _0x34001c.node_ops.lookup,
              mknod: _0x34001c.node_ops.mknod,
              rename: _0x34001c.node_ops.rename,
              unlink: _0x34001c.node_ops.unlink,
              rmdir: _0x34001c.node_ops.rmdir,
              readdir: _0x34001c.node_ops.readdir,
              symlink: _0x34001c.node_ops.symlink
            },
            stream: {
              llseek: _0x34001c.stream_ops.llseek
            }
          },
          file: {
            node: {
              getattr: _0x34001c.node_ops.getattr,
              setattr: _0x34001c.node_ops.setattr
            },
            stream: {
              llseek: _0x34001c.stream_ops.llseek,
              read: _0x34001c.stream_ops.read,
              write: _0x34001c.stream_ops.write,
              allocate: _0x34001c.stream_ops.allocate,
              mmap: _0x34001c.stream_ops.mmap,
              msync: _0x34001c.stream_ops.msync
            }
          },
          link: {
            node: {
              getattr: _0x34001c.node_ops.getattr,
              setattr: _0x34001c.node_ops.setattr,
              readlink: _0x34001c.node_ops.readlink
            },
            stream: {}
          },
          chrdev: {
            node: {
              getattr: _0x34001c.node_ops.getattr,
              setattr: _0x34001c.node_ops.setattr
            },
            stream: _0x4de3dc.chrdev_stream_ops
          }
        };
      }
      var _0x47ee7d = _0x4de3dc.createNode(_0xe40a8c, _0x860f47, _0x5557f4, _0x3108de);
      if (_0x4de3dc.isDir(_0x47ee7d.mode)) {
        _0x47ee7d.node_ops = _0x34001c.ops_table.dir.node;
        _0x47ee7d.stream_ops = _0x34001c.ops_table.dir.stream;
        _0x47ee7d.contents = {};
      } else if (_0x4de3dc.isFile(_0x47ee7d.mode)) {
        _0x47ee7d.node_ops = _0x34001c.ops_table.file.node;
        _0x47ee7d.stream_ops = _0x34001c.ops_table.file.stream;
        _0x47ee7d.usedBytes = 0;
        _0x47ee7d.contents = null;
      } else if (_0x4de3dc.isLink(_0x47ee7d.mode)) {
        _0x47ee7d.node_ops = _0x34001c.ops_table.link.node;
        _0x47ee7d.stream_ops = _0x34001c.ops_table.link.stream;
      } else if (_0x4de3dc.isChrdev(_0x47ee7d.mode)) {
        _0x47ee7d.node_ops = _0x34001c.ops_table.chrdev.node;
        _0x47ee7d.stream_ops = _0x34001c.ops_table.chrdev.stream;
      }
      _0x47ee7d.timestamp = Date.now();
      if (_0xe40a8c) {
        _0xe40a8c.contents[_0x860f47] = _0x47ee7d;
        _0xe40a8c.timestamp = _0x47ee7d.timestamp;
      }
      return _0x47ee7d;
    },
    getFileDataAsTypedArray: function (_0x1d7314) {
      if (!_0x1d7314.contents) {
        return new Uint8Array(0);
      }
      if (_0x1d7314.contents.subarray) {
        return _0x1d7314.contents.subarray(0, _0x1d7314.usedBytes);
      }
      return new Uint8Array(_0x1d7314.contents);
    },
    expandFileStorage: function (_0x107e1b, _0x5e0bb8) {
      var _0x2e32fd = _0x107e1b.contents ? _0x107e1b.contents.length : 0;
      if (_0x2e32fd >= _0x5e0bb8) {
        return;
      }
      var _0x5cfa1d = 1048576;
      _0x5e0bb8 = Math.max(_0x5e0bb8, _0x2e32fd * (_0x2e32fd < _0x5cfa1d ? 2 : 1.125) >>> 0);
      if (_0x2e32fd != 0) {
        _0x5e0bb8 = Math.max(_0x5e0bb8, 256);
      }
      var _0x118d1d = _0x107e1b.contents;
      _0x107e1b.contents = new Uint8Array(_0x5e0bb8);
      if (_0x107e1b.usedBytes > 0) {
        _0x107e1b.contents.set(_0x118d1d.subarray(0, _0x107e1b.usedBytes), 0);
      }
    },
    resizeFileStorage: function (_0x51da53, _0x1de6aa) {
      if (_0x51da53.usedBytes == _0x1de6aa) {
        return;
      }
      if (_0x1de6aa == 0) {
        _0x51da53.contents = null;
        _0x51da53.usedBytes = 0;
      } else {
        var _0x49b389 = _0x51da53.contents;
        _0x51da53.contents = new Uint8Array(_0x1de6aa);
        if (_0x49b389) {
          _0x51da53.contents.set(_0x49b389.subarray(0, Math.min(_0x1de6aa, _0x51da53.usedBytes)));
        }
        _0x51da53.usedBytes = _0x1de6aa;
      }
    },
    node_ops: {
      getattr: function (_0x46e1c0) {
        var _0x4fed51 = {};
        _0x4fed51.dev = _0x4de3dc.isChrdev(_0x46e1c0.mode) ? _0x46e1c0.id : 1;
        _0x4fed51.ino = _0x46e1c0.id;
        _0x4fed51.mode = _0x46e1c0.mode;
        _0x4fed51.nlink = 1;
        _0x4fed51.uid = 0;
        _0x4fed51.gid = 0;
        _0x4fed51.rdev = _0x46e1c0.rdev;
        if (_0x4de3dc.isDir(_0x46e1c0.mode)) {
          _0x4fed51.size = 4096;
        } else if (_0x4de3dc.isFile(_0x46e1c0.mode)) {
          _0x4fed51.size = _0x46e1c0.usedBytes;
        } else if (_0x4de3dc.isLink(_0x46e1c0.mode)) {
          _0x4fed51.size = _0x46e1c0.link.length;
        } else {
          _0x4fed51.size = 0;
        }
        _0x4fed51.atime = new Date(_0x46e1c0.timestamp);
        _0x4fed51.mtime = new Date(_0x46e1c0.timestamp);
        _0x4fed51.ctime = new Date(_0x46e1c0.timestamp);
        _0x4fed51.blksize = 4096;
        _0x4fed51.blocks = Math.ceil(_0x4fed51.size / _0x4fed51.blksize);
        return _0x4fed51;
      },
      setattr: function (_0x1af412, _0x5c64c7) {
        if (_0x5c64c7.mode !== undefined) {
          _0x1af412.mode = _0x5c64c7.mode;
        }
        if (_0x5c64c7.timestamp !== undefined) {
          _0x1af412.timestamp = _0x5c64c7.timestamp;
        }
        if (_0x5c64c7.size !== undefined) {
          _0x34001c.resizeFileStorage(_0x1af412, _0x5c64c7.size);
        }
      },
      lookup: function (_0x438830, _0x493756) {
        throw _0x4de3dc.genericErrors[44];
      },
      mknod: function (_0x19790b, _0x2d0dc5, _0x4f5281, _0x900c08) {
        return _0x34001c.createNode(_0x19790b, _0x2d0dc5, _0x4f5281, _0x900c08);
      },
      rename: function (_0x170238, _0x4bfd3b, _0xede514) {
        if (_0x4de3dc.isDir(_0x170238.mode)) {
          var _0x3c469f;
          try {
            _0x3c469f = _0x4de3dc.lookupNode(_0x4bfd3b, _0xede514);
          } catch (_0x289c7f) {}
          if (_0x3c469f) {
            for (var _0x46771f in _0x3c469f.contents) {
              throw new _0x4de3dc.ErrnoError(55);
            }
          }
        }
        delete _0x170238.parent.contents[_0x170238.name];
        _0x170238.parent.timestamp = Date.now();
        _0x170238.name = _0xede514;
        _0x4bfd3b.contents[_0xede514] = _0x170238;
        _0x4bfd3b.timestamp = _0x170238.parent.timestamp;
        _0x170238.parent = _0x4bfd3b;
      },
      unlink: function (_0xd26a98, _0x1ee0ad) {
        delete _0xd26a98.contents[_0x1ee0ad];
        _0xd26a98.timestamp = Date.now();
      },
      rmdir: function (_0x3a8e71, _0x2734f0) {
        var _0x205c96 = _0x4de3dc.lookupNode(_0x3a8e71, _0x2734f0);
        for (var _0x2a112d in _0x205c96.contents) {
          throw new _0x4de3dc.ErrnoError(55);
        }
        delete _0x3a8e71.contents[_0x2734f0];
        _0x3a8e71.timestamp = Date.now();
      },
      readdir: function (_0x2311ce) {
        var _0x56cf5e = [".", ".."];
        for (var _0x2fcfb0 in _0x2311ce.contents) {
          if (!_0x2311ce.contents.hasOwnProperty(_0x2fcfb0)) {
            continue;
          }
          _0x56cf5e.push(_0x2fcfb0);
        }
        return _0x56cf5e;
      },
      symlink: function (_0x371e02, _0x409341, _0x3cede3) {
        var _0x144f20 = _0x34001c.createNode(_0x371e02, _0x409341, 41471, 0);
        _0x144f20.link = _0x3cede3;
        return _0x144f20;
      },
      readlink: function (_0x32124c) {
        if (!_0x4de3dc.isLink(_0x32124c.mode)) {
          throw new _0x4de3dc.ErrnoError(28);
        }
        return _0x32124c.link;
      }
    },
    stream_ops: {
      read: function (_0x4d1dd5, _0x2c4da7, _0xb8e55e, _0x3e595f, _0x558923) {
        var _0x24fe6c = _0x4d1dd5.node.contents;
        if (_0x558923 >= _0x4d1dd5.node.usedBytes) {
          return 0;
        }
        var _0x2a8efb = Math.min(_0x4d1dd5.node.usedBytes - _0x558923, _0x3e595f);
        if (_0x2a8efb > 8 && _0x24fe6c.subarray) {
          _0x2c4da7.set(_0x24fe6c.subarray(_0x558923, _0x558923 + _0x2a8efb), _0xb8e55e);
        } else {
          for (var _0x4530e2 = 0; _0x4530e2 < _0x2a8efb; _0x4530e2++) {
            _0x2c4da7[_0xb8e55e + _0x4530e2] = _0x24fe6c[_0x558923 + _0x4530e2];
          }
        }
        return _0x2a8efb;
      },
      write: function (_0x1bd33b, _0x465662, _0x24407e, _0x4da656, _0x2f26e0, _0x75bc8e) {
        if (_0x465662.buffer === _0x3b8c2f.buffer) {
          _0x75bc8e = false;
        }
        if (!_0x4da656) {
          return 0;
        }
        var _0x302d5d = _0x1bd33b.node;
        _0x302d5d.timestamp = Date.now();
        if (_0x465662.subarray && (!_0x302d5d.contents || _0x302d5d.contents.subarray)) {
          if (_0x75bc8e) {
            _0x302d5d.contents = _0x465662.subarray(_0x24407e, _0x24407e + _0x4da656);
            _0x302d5d.usedBytes = _0x4da656;
            return _0x4da656;
          } else if (_0x302d5d.usedBytes === 0 && _0x2f26e0 === 0) {
            _0x302d5d.contents = _0x465662.slice(_0x24407e, _0x24407e + _0x4da656);
            _0x302d5d.usedBytes = _0x4da656;
            return _0x4da656;
          } else if (_0x2f26e0 + _0x4da656 <= _0x302d5d.usedBytes) {
            _0x302d5d.contents.set(_0x465662.subarray(_0x24407e, _0x24407e + _0x4da656), _0x2f26e0);
            return _0x4da656;
          }
        }
        _0x34001c.expandFileStorage(_0x302d5d, _0x2f26e0 + _0x4da656);
        if (_0x302d5d.contents.subarray && _0x465662.subarray) {
          _0x302d5d.contents.set(_0x465662.subarray(_0x24407e, _0x24407e + _0x4da656), _0x2f26e0);
        } else {
          for (var _0x3c9021 = 0; _0x3c9021 < _0x4da656; _0x3c9021++) {
            _0x302d5d.contents[_0x2f26e0 + _0x3c9021] = _0x465662[_0x24407e + _0x3c9021];
          }
        }
        _0x302d5d.usedBytes = Math.max(_0x302d5d.usedBytes, _0x2f26e0 + _0x4da656);
        return _0x4da656;
      },
      llseek: function (_0x5e7514, _0xc81287, _0x1f2f5d) {
        var _0x17e15e = _0xc81287;
        if (_0x1f2f5d === 1) {
          _0x17e15e += _0x5e7514.position;
        } else if (_0x1f2f5d === 2) {
          if (_0x4de3dc.isFile(_0x5e7514.node.mode)) {
            _0x17e15e += _0x5e7514.node.usedBytes;
          }
        }
        if (_0x17e15e < 0) {
          throw new _0x4de3dc.ErrnoError(28);
        }
        return _0x17e15e;
      },
      allocate: function (_0x369018, _0x22d189, _0x654148) {
        _0x34001c.expandFileStorage(_0x369018.node, _0x22d189 + _0x654148);
        _0x369018.node.usedBytes = Math.max(_0x369018.node.usedBytes, _0x22d189 + _0x654148);
      },
      mmap: function (_0x46ba72, _0x5b80d8, _0x310def, _0x4ad820, _0x127e4b, _0x2f8041) {
        if (_0x5b80d8 !== 0) {
          throw new _0x4de3dc.ErrnoError(28);
        }
        if (!_0x4de3dc.isFile(_0x46ba72.node.mode)) {
          throw new _0x4de3dc.ErrnoError(43);
        }
        var _0x45ab36;
        var _0x5aa495;
        var _0x44c7c9 = _0x46ba72.node.contents;
        if (!(_0x2f8041 & 2) && _0x44c7c9.buffer === _0x31c650) {
          _0x5aa495 = false;
          _0x45ab36 = _0x44c7c9.byteOffset;
        } else {
          if (_0x4ad820 > 0 || _0x4ad820 + _0x310def < _0x44c7c9.length) {
            if (_0x44c7c9.subarray) {
              _0x44c7c9 = _0x44c7c9.subarray(_0x4ad820, _0x4ad820 + _0x310def);
            } else {
              _0x44c7c9 = Array.prototype.slice.call(_0x44c7c9, _0x4ad820, _0x4ad820 + _0x310def);
            }
          }
          _0x5aa495 = true;
          _0x45ab36 = _0x3cc21f(_0x310def);
          if (!_0x45ab36) {
            throw new _0x4de3dc.ErrnoError(48);
          }
          _0x3b8c2f.set(_0x44c7c9, _0x45ab36);
        }
        return {
          ptr: _0x45ab36,
          allocated: _0x5aa495
        };
      },
      msync: function (_0x11cce2, _0x433e3f, _0x1ba5c7, _0x7d3a56, _0x1e5994) {
        if (!_0x4de3dc.isFile(_0x11cce2.node.mode)) {
          throw new _0x4de3dc.ErrnoError(43);
        }
        if (_0x1e5994 & 2) {
          return 0;
        }
        var _0x156de0 = _0x34001c.stream_ops.write(_0x11cce2, _0x433e3f, 0, _0x7d3a56, _0x1ba5c7, false);
        return 0;
      }
    }
  };
  var _0x3b79bb = {
    dbs: {},
    indexedDB: function () {
      if (typeof indexedDB !== "undefined") {
        return indexedDB;
      }
      var _0x8a1f5c = null;
      if (typeof window === "object") {
        _0x8a1f5c = window.indexedDB || window.mozIndexedDB || window.webkitIndexedDB || window.msIndexedDB;
      }
      _0x37a78f(_0x8a1f5c, "IDBFS used, but indexedDB not supported");
      return _0x8a1f5c;
    },
    DB_VERSION: 21,
    DB_STORE_NAME: "FILE_DATA",
    mount: function (_0x478754) {
      return _0x34001c.mount.apply(null, arguments);
    },
    syncfs: function (_0x113d2f, _0x4a71ac, _0x5cc9ce) {
      _0x3b79bb.getLocalSet(_0x113d2f, function (_0x20471c, _0xbe87c6) {
        if (_0x20471c) {
          return _0x5cc9ce(_0x20471c);
        }
        _0x3b79bb.getRemoteSet(_0x113d2f, function (_0x41a6cd, _0x4bf199) {
          if (_0x41a6cd) {
            return _0x5cc9ce(_0x41a6cd);
          }
          var _0x6cea40 = _0x4a71ac ? _0x4bf199 : _0xbe87c6;
          var _0x5930d8 = _0x4a71ac ? _0xbe87c6 : _0x4bf199;
          _0x3b79bb.reconcile(_0x6cea40, _0x5930d8, _0x5cc9ce);
        });
      });
    },
    getDB: function (_0xa992ac, _0x39aae1) {
      var _0x444a74 = _0x3b79bb.dbs[_0xa992ac];
      if (_0x444a74) {
        return _0x39aae1(null, _0x444a74);
      }
      var _0x56ea96;
      try {
        _0x56ea96 = _0x3b79bb.indexedDB().open(_0xa992ac, _0x3b79bb.DB_VERSION);
      } catch (_0x3b731c) {
        return _0x39aae1(_0x3b731c);
      }
      if (!_0x56ea96) {
        return _0x39aae1("Unable to connect to IndexedDB");
      }
      _0x56ea96.onupgradeneeded = function (_0x32fce4) {
        var _0x1ece8b = _0x32fce4.target.result;
        var _0xce8924 = _0x32fce4.target.transaction;
        var _0x133b54;
        if (_0x1ece8b.objectStoreNames.contains(_0x3b79bb.DB_STORE_NAME)) {
          _0x133b54 = _0xce8924.objectStore(_0x3b79bb.DB_STORE_NAME);
        } else {
          _0x133b54 = _0x1ece8b.createObjectStore(_0x3b79bb.DB_STORE_NAME);
        }
        if (!_0x133b54.indexNames.contains("timestamp")) {
          _0x133b54.createIndex("timestamp", "timestamp", {
            unique: false
          });
        }
      };
      _0x56ea96.onsuccess = function () {
        _0x444a74 = _0x56ea96.result;
        _0x3b79bb.dbs[_0xa992ac] = _0x444a74;
        _0x39aae1(null, _0x444a74);
      };
      _0x56ea96.onerror = function (_0x362643) {
        _0x39aae1(this.error);
        _0x362643.preventDefault();
      };
    },
    getLocalSet: function (_0xf25a6a, _0x59cab2) {
      var _0x18f55a = {};
      function _0x4916eb(_0x1f58eb) {
        return _0x1f58eb !== "." && _0x1f58eb !== "..";
      }
      function _0x2c132f(_0x43c7df) {
        return function (_0x14af87) {
          return _0x609fec.join2(_0x43c7df, _0x14af87);
        };
      }
      var _0x4194fc = _0x4de3dc.readdir(_0xf25a6a.mountpoint).filter(_0x4916eb).map(_0x2c132f(_0xf25a6a.mountpoint));
      while (_0x4194fc.length) {
        var _0xfcb25 = _0x4194fc.pop();
        var _0x3ce1fb;
        try {
          _0x3ce1fb = _0x4de3dc.stat(_0xfcb25);
        } catch (_0xfc4e1a) {
          return _0x59cab2(_0xfc4e1a);
        }
        if (_0x4de3dc.isDir(_0x3ce1fb.mode)) {
          _0x4194fc.push.apply(_0x4194fc, _0x4de3dc.readdir(_0xfcb25).filter(_0x4916eb).map(_0x2c132f(_0xfcb25)));
        }
        _0x18f55a[_0xfcb25] = {
          timestamp: _0x3ce1fb.mtime
        };
      }
      return _0x59cab2(null, {
        type: "local",
        entries: _0x18f55a
      });
    },
    getRemoteSet: function (_0x29410c, _0x2eb2e7) {
      var _0x3c7ccb = {};
      _0x3b79bb.getDB(_0x29410c.mountpoint, function (_0x2f48b8, _0x122859) {
        if (_0x2f48b8) {
          return _0x2eb2e7(_0x2f48b8);
        }
        try {
          var _0xa78283 = _0x122859.transaction([_0x3b79bb.DB_STORE_NAME], "readonly");
          _0xa78283.onerror = function (_0x3d6343) {
            _0x2eb2e7(this.error);
            _0x3d6343.preventDefault();
          };
          var _0x49bb1c = _0xa78283.objectStore(_0x3b79bb.DB_STORE_NAME);
          var _0x23497f = _0x49bb1c.index("timestamp");
          _0x23497f.openKeyCursor().onsuccess = function (_0x30dc7c) {
            var _0x422987 = _0x30dc7c.target.result;
            if (!_0x422987) {
              return _0x2eb2e7(null, {
                type: "remote",
                db: _0x122859,
                entries: _0x3c7ccb
              });
            }
            _0x3c7ccb[_0x422987.primaryKey] = {
              timestamp: _0x422987.key
            };
            _0x422987.continue();
          };
        } catch (_0x1f2d19) {
          return _0x2eb2e7(_0x1f2d19);
        }
      });
    },
    loadLocalEntry: function (_0x565fc2, _0x9e7114) {
      var _0x5d4dce;
      var _0x1a7148;
      try {
        var _0x551eed = _0x4de3dc.lookupPath(_0x565fc2);
        _0x1a7148 = _0x551eed.node;
        _0x5d4dce = _0x4de3dc.stat(_0x565fc2);
      } catch (_0x3f58dc) {
        return _0x9e7114(_0x3f58dc);
      }
      if (_0x4de3dc.isDir(_0x5d4dce.mode)) {
        return _0x9e7114(null, {
          timestamp: _0x5d4dce.mtime,
          mode: _0x5d4dce.mode
        });
      } else if (_0x4de3dc.isFile(_0x5d4dce.mode)) {
        _0x1a7148.contents = _0x34001c.getFileDataAsTypedArray(_0x1a7148);
        return _0x9e7114(null, {
          timestamp: _0x5d4dce.mtime,
          mode: _0x5d4dce.mode,
          contents: _0x1a7148.contents
        });
      } else {
        return _0x9e7114(new Error("node type not supported"));
      }
    },
    storeLocalEntry: function (_0x4a3b84, _0x388893, _0x3b4077) {
      try {
        if (_0x4de3dc.isDir(_0x388893.mode)) {
          _0x4de3dc.mkdirTree(_0x4a3b84, _0x388893.mode);
        } else if (_0x4de3dc.isFile(_0x388893.mode)) {
          _0x4de3dc.writeFile(_0x4a3b84, _0x388893.contents, {
            canOwn: true
          });
        } else {
          return _0x3b4077(new Error("node type not supported"));
        }
        _0x4de3dc.chmod(_0x4a3b84, _0x388893.mode);
        _0x4de3dc.utime(_0x4a3b84, _0x388893.timestamp, _0x388893.timestamp);
      } catch (_0x3101b4) {
        return _0x3b4077(_0x3101b4);
      }
      _0x3b4077(null);
    },
    removeLocalEntry: function (_0x4cf5ad, _0xbeb8ae) {
      try {
        var _0x2e5667 = _0x4de3dc.lookupPath(_0x4cf5ad);
        var _0x51c933 = _0x4de3dc.stat(_0x4cf5ad);
        if (_0x4de3dc.isDir(_0x51c933.mode)) {
          _0x4de3dc.rmdir(_0x4cf5ad);
        } else if (_0x4de3dc.isFile(_0x51c933.mode)) {
          _0x4de3dc.unlink(_0x4cf5ad);
        }
      } catch (_0x48073c) {
        return _0xbeb8ae(_0x48073c);
      }
      _0xbeb8ae(null);
    },
    loadRemoteEntry: function (_0x4421f9, _0x12057f, _0x45f368) {
      var _0x4c1af7 = _0x4421f9.get(_0x12057f);
      _0x4c1af7.onsuccess = function (_0x1b6df2) {
        _0x45f368(null, _0x1b6df2.target.result);
      };
      _0x4c1af7.onerror = function (_0x23f82e) {
        _0x45f368(this.error);
        _0x23f82e.preventDefault();
      };
    },
    storeRemoteEntry: function (_0x13aec6, _0x2a7139, _0x5992e7, _0x23b536) {
      var _0x220023 = _0x13aec6.put(_0x5992e7, _0x2a7139);
      _0x220023.onsuccess = function () {
        _0x23b536(null);
      };
      _0x220023.onerror = function (_0xe361bc) {
        _0x23b536(this.error);
        _0xe361bc.preventDefault();
      };
    },
    removeRemoteEntry: function (_0x49aace, _0x1121eb, _0x5c33b6) {
      var _0x500c69 = _0x49aace.delete(_0x1121eb);
      _0x500c69.onsuccess = function () {
        _0x5c33b6(null);
      };
      _0x500c69.onerror = function (_0x27f9e3) {
        _0x5c33b6(this.error);
        _0x27f9e3.preventDefault();
      };
    },
    reconcile: function (_0x578bb8, _0x413675, _0x5896c4) {
      var _0x55751e = 0;
      var _0x4e18f8 = [];
      Object.keys(_0x578bb8.entries).forEach(function (_0x1d87c4) {
        var _0xf6ccd7 = _0x578bb8.entries[_0x1d87c4];
        var _0x5a7ef1 = _0x413675.entries[_0x1d87c4];
        if (!_0x5a7ef1 || _0xf6ccd7.timestamp.getTime() != _0x5a7ef1.timestamp.getTime()) {
          _0x4e18f8.push(_0x1d87c4);
          _0x55751e++;
        }
      });
      var _0x12be88 = [];
      Object.keys(_0x413675.entries).forEach(function (_0x3a8b34) {
        if (!_0x578bb8.entries[_0x3a8b34]) {
          _0x12be88.push(_0x3a8b34);
          _0x55751e++;
        }
      });
      if (!_0x55751e) {
        return _0x5896c4(null);
      }
      var _0x23edc4 = false;
      var _0x34ddcf = _0x578bb8.type === "remote" ? _0x578bb8.db : _0x413675.db;
      var _0x30dd06 = _0x34ddcf.transaction([_0x3b79bb.DB_STORE_NAME], "readwrite");
      var _0x1521ed = _0x30dd06.objectStore(_0x3b79bb.DB_STORE_NAME);
      function _0x3d2ddd(_0x5c9c89) {
        if (_0x5c9c89 && !_0x23edc4) {
          _0x23edc4 = true;
          return _0x5896c4(_0x5c9c89);
        }
      }
      _0x30dd06.onerror = function (_0x7e63a6) {
        _0x3d2ddd(this.error);
        _0x7e63a6.preventDefault();
      };
      _0x30dd06.oncomplete = function (_0x406ef8) {
        if (!_0x23edc4) {
          _0x5896c4(null);
        }
      };
      _0x4e18f8.sort().forEach(function (_0x28640b) {
        if (_0x413675.type === "local") {
          _0x3b79bb.loadRemoteEntry(_0x1521ed, _0x28640b, function (_0x2b7619, _0x410200) {
            if (_0x2b7619) {
              return _0x3d2ddd(_0x2b7619);
            }
            _0x3b79bb.storeLocalEntry(_0x28640b, _0x410200, _0x3d2ddd);
          });
        } else {
          _0x3b79bb.loadLocalEntry(_0x28640b, function (_0x17b31a, _0x173a21) {
            if (_0x17b31a) {
              return _0x3d2ddd(_0x17b31a);
            }
            _0x3b79bb.storeRemoteEntry(_0x1521ed, _0x28640b, _0x173a21, _0x3d2ddd);
          });
        }
      });
      _0x12be88.sort().reverse().forEach(function (_0x9edb85) {
        if (_0x413675.type === "local") {
          _0x3b79bb.removeLocalEntry(_0x9edb85, _0x3d2ddd);
        } else {
          _0x3b79bb.removeRemoteEntry(_0x1521ed, _0x9edb85, _0x3d2ddd);
        }
      });
    }
  };
  var _0x4de3dc = {
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
    lookupPath: function (_0x4be9e8, _0x1b05d5) {
      _0x4be9e8 = _0x2ccd89.resolve(_0x4de3dc.cwd(), _0x4be9e8);
      _0x1b05d5 = _0x1b05d5 || {};
      if (!_0x4be9e8) {
        return {
          path: "",
          node: null
        };
      }
      var _0x44bcfc = {
        follow_mount: true,
        recurse_count: 0
      };
      for (var _0x2192a in _0x44bcfc) {
        if (_0x1b05d5[_0x2192a] === undefined) {
          _0x1b05d5[_0x2192a] = _0x44bcfc[_0x2192a];
        }
      }
      if (_0x1b05d5.recurse_count > 8) {
        throw new _0x4de3dc.ErrnoError(32);
      }
      var _0x334d26 = _0x609fec.normalizeArray(_0x4be9e8.split("/").filter(function (_0x224f45) {
        return !!_0x224f45;
      }), false);
      var _0x444348 = _0x4de3dc.root;
      var _0x427e7f = "/";
      for (var _0x40211a = 0; _0x40211a < _0x334d26.length; _0x40211a++) {
        var _0x551cdd = _0x40211a === _0x334d26.length - 1;
        if (_0x551cdd && _0x1b05d5.parent) {
          break;
        }
        _0x444348 = _0x4de3dc.lookupNode(_0x444348, _0x334d26[_0x40211a]);
        _0x427e7f = _0x609fec.join2(_0x427e7f, _0x334d26[_0x40211a]);
        if (_0x4de3dc.isMountpoint(_0x444348)) {
          if (!_0x551cdd || _0x551cdd && _0x1b05d5.follow_mount) {
            _0x444348 = _0x444348.mounted.root;
          }
        }
        if (!_0x551cdd || _0x1b05d5.follow) {
          var _0x48b7e4 = 0;
          while (_0x4de3dc.isLink(_0x444348.mode)) {
            var _0xf0366e = _0x4de3dc.readlink(_0x427e7f);
            _0x427e7f = _0x2ccd89.resolve(_0x609fec.dirname(_0x427e7f), _0xf0366e);
            var _0x3d04cc = _0x4de3dc.lookupPath(_0x427e7f, {
              recurse_count: _0x1b05d5.recurse_count
            });
            _0x444348 = _0x3d04cc.node;
            if (_0x48b7e4++ > 40) {
              throw new _0x4de3dc.ErrnoError(32);
            }
          }
        }
      }
      return {
        path: _0x427e7f,
        node: _0x444348
      };
    },
    getPath: function (_0x444b7) {
      var _0x4327f9;
      while (true) {
        if (_0x4de3dc.isRoot(_0x444b7)) {
          var _0x44d68c = _0x444b7.mount.mountpoint;
          if (!_0x4327f9) {
            return _0x44d68c;
          }
          if (_0x44d68c[_0x44d68c.length - 1] !== "/") {
            return _0x44d68c + "/" + _0x4327f9;
          } else {
            return _0x44d68c + _0x4327f9;
          }
        }
        _0x4327f9 = _0x4327f9 ? _0x444b7.name + "/" + _0x4327f9 : _0x444b7.name;
        _0x444b7 = _0x444b7.parent;
      }
    },
    hashName: function (_0xe18202, _0x512eba) {
      var _0x256737 = 0;
      for (var _0x349b61 = 0; _0x349b61 < _0x512eba.length; _0x349b61++) {
        _0x256737 = (_0x256737 << 5) - _0x256737 + _0x512eba.charCodeAt(_0x349b61) | 0;
      }
      return (_0xe18202 + _0x256737 >>> 0) % _0x4de3dc.nameTable.length;
    },
    hashAddNode: function (_0x545d49) {
      var _0x215bb5 = _0x4de3dc.hashName(_0x545d49.parent.id, _0x545d49.name);
      _0x545d49.name_next = _0x4de3dc.nameTable[_0x215bb5];
      _0x4de3dc.nameTable[_0x215bb5] = _0x545d49;
    },
    hashRemoveNode: function (_0x1f4fca) {
      var _0x59d04f = _0x4de3dc.hashName(_0x1f4fca.parent.id, _0x1f4fca.name);
      if (_0x4de3dc.nameTable[_0x59d04f] === _0x1f4fca) {
        _0x4de3dc.nameTable[_0x59d04f] = _0x1f4fca.name_next;
      } else {
        var _0xcd38c8 = _0x4de3dc.nameTable[_0x59d04f];
        while (_0xcd38c8) {
          if (_0xcd38c8.name_next === _0x1f4fca) {
            _0xcd38c8.name_next = _0x1f4fca.name_next;
            break;
          }
          _0xcd38c8 = _0xcd38c8.name_next;
        }
      }
    },
    lookupNode: function (_0x3d1fec, _0x37b98a) {
      var _0x4904a0 = _0x4de3dc.mayLookup(_0x3d1fec);
      if (_0x4904a0) {
        throw new _0x4de3dc.ErrnoError(_0x4904a0, _0x3d1fec);
      }
      var _0x50d4f5 = _0x4de3dc.hashName(_0x3d1fec.id, _0x37b98a);
      for (var _0x408c8a = _0x4de3dc.nameTable[_0x50d4f5]; _0x408c8a; _0x408c8a = _0x408c8a.name_next) {
        var _0x116ad3 = _0x408c8a.name;
        if (_0x408c8a.parent.id === _0x3d1fec.id && _0x116ad3 === _0x37b98a) {
          return _0x408c8a;
        }
      }
      return _0x4de3dc.lookup(_0x3d1fec, _0x37b98a);
    },
    createNode: function (_0xc2a80c, _0x5edf6f, _0x4c9039, _0x78018e) {
      var _0x5d5009 = new _0x4de3dc.FSNode(_0xc2a80c, _0x5edf6f, _0x4c9039, _0x78018e);
      _0x4de3dc.hashAddNode(_0x5d5009);
      return _0x5d5009;
    },
    destroyNode: function (_0x28b35a) {
      _0x4de3dc.hashRemoveNode(_0x28b35a);
    },
    isRoot: function (_0x5620c1) {
      return _0x5620c1 === _0x5620c1.parent;
    },
    isMountpoint: function (_0x538fb8) {
      return !!_0x538fb8.mounted;
    },
    isFile: function (_0xe67a83) {
      return (_0xe67a83 & 61440) === 32768;
    },
    isDir: function (_0x51add2) {
      return (_0x51add2 & 61440) === 16384;
    },
    isLink: function (_0x2b81f0) {
      return (_0x2b81f0 & 61440) === 40960;
    },
    isChrdev: function (_0x1f8560) {
      return (_0x1f8560 & 61440) === 8192;
    },
    isBlkdev: function (_0x5e1efb) {
      return (_0x5e1efb & 61440) === 24576;
    },
    isFIFO: function (_0xd2a2e3) {
      return (_0xd2a2e3 & 61440) === 4096;
    },
    isSocket: function (_0x16d864) {
      return (_0x16d864 & 49152) === 49152;
    },
    flagModes: {
      r: 0,
      "r+": 2,
      w: 577,
      "w+": 578,
      a: 1089,
      "a+": 1090
    },
    modeStringToFlags: function (_0x126f8e) {
      var _0x1cb077 = _0x4de3dc.flagModes[_0x126f8e];
      if (typeof _0x1cb077 === "undefined") {
        throw new Error("Unknown file open mode: " + _0x126f8e);
      }
      return _0x1cb077;
    },
    flagsToPermissionString: function (_0x55e618) {
      var _0x1ad107 = ["r", "w", "rw"][_0x55e618 & 3];
      if (_0x55e618 & 512) {
        _0x1ad107 += "w";
      }
      return _0x1ad107;
    },
    nodePermissions: function (_0x227148, _0x36d804) {
      if (_0x4de3dc.ignorePermissions) {
        return 0;
      }
      if (_0x36d804.includes("r") && !(_0x227148.mode & 292)) {
        return 2;
      } else if (_0x36d804.includes("w") && !(_0x227148.mode & 146)) {
        return 2;
      } else if (_0x36d804.includes("x") && !(_0x227148.mode & 73)) {
        return 2;
      }
      return 0;
    },
    mayLookup: function (_0x2943be) {
      var _0xd20816 = _0x4de3dc.nodePermissions(_0x2943be, "x");
      if (_0xd20816) {
        return _0xd20816;
      }
      if (!_0x2943be.node_ops.lookup) {
        return 2;
      }
      return 0;
    },
    mayCreate: function (_0x13ee5d, _0x216dda) {
      try {
        var _0x323d36 = _0x4de3dc.lookupNode(_0x13ee5d, _0x216dda);
        return 20;
      } catch (_0x296fd9) {}
      return _0x4de3dc.nodePermissions(_0x13ee5d, "wx");
    },
    mayDelete: function (_0xb196fe, _0x1be041, _0x123744) {
      var _0x1ff9cd;
      try {
        _0x1ff9cd = _0x4de3dc.lookupNode(_0xb196fe, _0x1be041);
      } catch (_0x58c9bf) {
        return _0x58c9bf.errno;
      }
      var _0x658c33 = _0x4de3dc.nodePermissions(_0xb196fe, "wx");
      if (_0x658c33) {
        return _0x658c33;
      }
      if (_0x123744) {
        if (!_0x4de3dc.isDir(_0x1ff9cd.mode)) {
          return 54;
        }
        if (_0x4de3dc.isRoot(_0x1ff9cd) || _0x4de3dc.getPath(_0x1ff9cd) === _0x4de3dc.cwd()) {
          return 10;
        }
      } else if (_0x4de3dc.isDir(_0x1ff9cd.mode)) {
        return 31;
      }
      return 0;
    },
    mayOpen: function (_0x9dc5d5, _0x20dc55) {
      if (!_0x9dc5d5) {
        return 44;
      }
      if (_0x4de3dc.isLink(_0x9dc5d5.mode)) {
        return 32;
      } else if (_0x4de3dc.isDir(_0x9dc5d5.mode)) {
        if (_0x4de3dc.flagsToPermissionString(_0x20dc55) !== "r" || _0x20dc55 & 512) {
          return 31;
        }
      }
      return _0x4de3dc.nodePermissions(_0x9dc5d5, _0x4de3dc.flagsToPermissionString(_0x20dc55));
    },
    MAX_OPEN_FDS: 4096,
    nextfd: function (_0x32ff8f, _0x5e2ffd) {
      _0x32ff8f = _0x32ff8f || 0;
      _0x5e2ffd = _0x5e2ffd || _0x4de3dc.MAX_OPEN_FDS;
      for (var _0x593ff6 = _0x32ff8f; _0x593ff6 <= _0x5e2ffd; _0x593ff6++) {
        if (!_0x4de3dc.streams[_0x593ff6]) {
          return _0x593ff6;
        }
      }
      throw new _0x4de3dc.ErrnoError(33);
    },
    getStream: function (_0x25c3db) {
      return _0x4de3dc.streams[_0x25c3db];
    },
    createStream: function (_0x521bc6, _0x1a2402, _0x17423b) {
      if (!_0x4de3dc.FSStream) {
        _0x4de3dc.FSStream = function () {};
        _0x4de3dc.FSStream.prototype = {
          object: {
            get: function () {
              return this.node;
            },
            set: function (_0x5a530a) {
              this.node = _0x5a530a;
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
      var _0x2b028f = new _0x4de3dc.FSStream();
      for (var _0x1b4b90 in _0x521bc6) {
        _0x2b028f[_0x1b4b90] = _0x521bc6[_0x1b4b90];
      }
      _0x521bc6 = _0x2b028f;
      var _0x32afc0 = _0x4de3dc.nextfd(_0x1a2402, _0x17423b);
      _0x521bc6.fd = _0x32afc0;
      _0x4de3dc.streams[_0x32afc0] = _0x521bc6;
      return _0x521bc6;
    },
    closeStream: function (_0x582c2e) {
      _0x4de3dc.streams[_0x582c2e] = null;
    },
    chrdev_stream_ops: {
      open: function (_0x4fca31) {
        var _0xd3387a = _0x4de3dc.getDevice(_0x4fca31.node.rdev);
        _0x4fca31.stream_ops = _0xd3387a.stream_ops;
        if (_0x4fca31.stream_ops.open) {
          _0x4fca31.stream_ops.open(_0x4fca31);
        }
      },
      llseek: function () {
        throw new _0x4de3dc.ErrnoError(70);
      }
    },
    major: function (_0x14b0e7) {
      return _0x14b0e7 >> 8;
    },
    minor: function (_0x9c4b8f) {
      return _0x9c4b8f & 255;
    },
    makedev: function (_0x417e71, _0xa4f120) {
      return _0x417e71 << 8 | _0xa4f120;
    },
    registerDevice: function (_0x39e115, _0x708c7c) {
      _0x4de3dc.devices[_0x39e115] = {
        stream_ops: _0x708c7c
      };
    },
    getDevice: function (_0x15cf1d) {
      return _0x4de3dc.devices[_0x15cf1d];
    },
    getMounts: function (_0x3de9f9) {
      var _0x4f6dd2 = [];
      var _0x3e5034 = [_0x3de9f9];
      while (_0x3e5034.length) {
        var _0x34e9f6 = _0x3e5034.pop();
        _0x4f6dd2.push(_0x34e9f6);
        _0x3e5034.push.apply(_0x3e5034, _0x34e9f6.mounts);
      }
      return _0x4f6dd2;
    },
    syncfs: function (_0x59d842, _0x4f8c08) {
      if (typeof _0x59d842 === "function") {
        _0x4f8c08 = _0x59d842;
        _0x59d842 = false;
      }
      _0x4de3dc.syncFSRequests++;
      if (_0x4de3dc.syncFSRequests > 1) {
        _0x1af4bd("warning: " + _0x4de3dc.syncFSRequests + " FS.syncfs operations in flight at once, probably just doing extra work");
      }
      var _0x49c534 = _0x4de3dc.getMounts(_0x4de3dc.root.mount);
      var _0x3412d9 = 0;
      function _0x26350a(_0x832b4f) {
        _0x4de3dc.syncFSRequests--;
        return _0x4f8c08(_0x832b4f);
      }
      function _0x5c77e4(_0x12e4b0) {
        if (_0x12e4b0) {
          if (!_0x5c77e4.errored) {
            _0x5c77e4.errored = true;
            return _0x26350a(_0x12e4b0);
          }
          return;
        }
        if (++_0x3412d9 >= _0x49c534.length) {
          _0x26350a(null);
        }
      }
      _0x49c534.forEach(function (_0x19e7cf) {
        if (!_0x19e7cf.type.syncfs) {
          return _0x5c77e4(null);
        }
        _0x19e7cf.type.syncfs(_0x19e7cf, _0x59d842, _0x5c77e4);
      });
    },
    mount: function (_0x33233b, _0x133a43, _0x5389f2) {
      var _0x54bb39 = _0x5389f2 === "/";
      var _0xa549ec = !_0x5389f2;
      var _0x2d0c5a;
      if (_0x54bb39 && _0x4de3dc.root) {
        throw new _0x4de3dc.ErrnoError(10);
      } else if (!_0x54bb39 && !_0xa549ec) {
        var _0x5655b0 = _0x4de3dc.lookupPath(_0x5389f2, {
          follow_mount: false
        });
        _0x5389f2 = _0x5655b0.path;
        _0x2d0c5a = _0x5655b0.node;
        if (_0x4de3dc.isMountpoint(_0x2d0c5a)) {
          throw new _0x4de3dc.ErrnoError(10);
        }
        if (!_0x4de3dc.isDir(_0x2d0c5a.mode)) {
          throw new _0x4de3dc.ErrnoError(54);
        }
      }
      var _0x5c5854 = {
        type: _0x33233b,
        opts: _0x133a43,
        mountpoint: _0x5389f2,
        mounts: []
      };
      var _0x5c3630 = _0x33233b.mount(_0x5c5854);
      _0x5c3630.mount = _0x5c5854;
      _0x5c5854.root = _0x5c3630;
      if (_0x54bb39) {
        _0x4de3dc.root = _0x5c3630;
      } else if (_0x2d0c5a) {
        _0x2d0c5a.mounted = _0x5c5854;
        if (_0x2d0c5a.mount) {
          _0x2d0c5a.mount.mounts.push(_0x5c5854);
        }
      }
      return _0x5c3630;
    },
    unmount: function (_0x1f9704) {
      var _0xb24d97 = _0x4de3dc.lookupPath(_0x1f9704, {
        follow_mount: false
      });
      if (!_0x4de3dc.isMountpoint(_0xb24d97.node)) {
        throw new _0x4de3dc.ErrnoError(28);
      }
      var _0x35081f = _0xb24d97.node;
      var _0x2f366b = _0x35081f.mounted;
      var _0x14b413 = _0x4de3dc.getMounts(_0x2f366b);
      Object.keys(_0x4de3dc.nameTable).forEach(function (_0x3785c8) {
        var _0x34aa04 = _0x4de3dc.nameTable[_0x3785c8];
        while (_0x34aa04) {
          var _0x4939fb = _0x34aa04.name_next;
          if (_0x14b413.includes(_0x34aa04.mount)) {
            _0x4de3dc.destroyNode(_0x34aa04);
          }
          _0x34aa04 = _0x4939fb;
        }
      });
      _0x35081f.mounted = null;
      var _0x5833d8 = _0x35081f.mount.mounts.indexOf(_0x2f366b);
      _0x35081f.mount.mounts.splice(_0x5833d8, 1);
    },
    lookup: function (_0x41cc13, _0x114add) {
      return _0x41cc13.node_ops.lookup(_0x41cc13, _0x114add);
    },
    mknod: function (_0x1d08e3, _0x14058f, _0x4c23e6) {
      var _0x42376a = _0x4de3dc.lookupPath(_0x1d08e3, {
        parent: true
      });
      var _0x1b1e8f = _0x42376a.node;
      var _0x4b18f8 = _0x609fec.basename(_0x1d08e3);
      if (!_0x4b18f8 || _0x4b18f8 === "." || _0x4b18f8 === "..") {
        throw new _0x4de3dc.ErrnoError(28);
      }
      var _0x1595cf = _0x4de3dc.mayCreate(_0x1b1e8f, _0x4b18f8);
      if (_0x1595cf) {
        throw new _0x4de3dc.ErrnoError(_0x1595cf);
      }
      if (!_0x1b1e8f.node_ops.mknod) {
        throw new _0x4de3dc.ErrnoError(63);
      }
      return _0x1b1e8f.node_ops.mknod(_0x1b1e8f, _0x4b18f8, _0x14058f, _0x4c23e6);
    },
    create: function (_0x28b125, _0xb241b2) {
      _0xb241b2 = _0xb241b2 !== undefined ? _0xb241b2 : 438;
      _0xb241b2 &= 4095;
      _0xb241b2 |= 32768;
      return _0x4de3dc.mknod(_0x28b125, _0xb241b2, 0);
    },
    mkdir: function (_0x2cbaf2, _0xfc7f2d) {
      _0xfc7f2d = _0xfc7f2d !== undefined ? _0xfc7f2d : 511;
      _0xfc7f2d &= 1023;
      _0xfc7f2d |= 16384;
      return _0x4de3dc.mknod(_0x2cbaf2, _0xfc7f2d, 0);
    },
    mkdirTree: function (_0x4fc15e, _0x42e68e) {
      var _0x3bec1c = _0x4fc15e.split("/");
      var _0x2bf35e = "";
      for (var _0x4fd90e = 0; _0x4fd90e < _0x3bec1c.length; ++_0x4fd90e) {
        if (!_0x3bec1c[_0x4fd90e]) {
          continue;
        }
        _0x2bf35e += "/" + _0x3bec1c[_0x4fd90e];
        try {
          _0x4de3dc.mkdir(_0x2bf35e, _0x42e68e);
        } catch (_0x3c41a2) {
          if (_0x3c41a2.errno != 20) {
            throw _0x3c41a2;
          }
        }
      }
    },
    mkdev: function (_0x3dd0f7, _0x5c9412, _0x159ab0) {
      if (typeof _0x159ab0 === "undefined") {
        _0x159ab0 = _0x5c9412;
        _0x5c9412 = 438;
      }
      _0x5c9412 |= 8192;
      return _0x4de3dc.mknod(_0x3dd0f7, _0x5c9412, _0x159ab0);
    },
    symlink: function (_0x3105b6, _0x289e74) {
      if (!_0x2ccd89.resolve(_0x3105b6)) {
        throw new _0x4de3dc.ErrnoError(44);
      }
      var _0x48e3c6 = _0x4de3dc.lookupPath(_0x289e74, {
        parent: true
      });
      var _0x55f4f3 = _0x48e3c6.node;
      if (!_0x55f4f3) {
        throw new _0x4de3dc.ErrnoError(44);
      }
      var _0x193795 = _0x609fec.basename(_0x289e74);
      var _0x5f2fdd = _0x4de3dc.mayCreate(_0x55f4f3, _0x193795);
      if (_0x5f2fdd) {
        throw new _0x4de3dc.ErrnoError(_0x5f2fdd);
      }
      if (!_0x55f4f3.node_ops.symlink) {
        throw new _0x4de3dc.ErrnoError(63);
      }
      return _0x55f4f3.node_ops.symlink(_0x55f4f3, _0x193795, _0x3105b6);
    },
    rename: function (_0x503801, _0x27e422) {
      var _0x4092a8 = _0x609fec.dirname(_0x503801);
      var _0x1c0964 = _0x609fec.dirname(_0x27e422);
      var _0x32abf7 = _0x609fec.basename(_0x503801);
      var _0x17ce5e = _0x609fec.basename(_0x27e422);
      var _0x502c39;
      var _0x4b64db;
      var _0x11c8a5;
      _0x502c39 = _0x4de3dc.lookupPath(_0x503801, {
        parent: true
      });
      _0x4b64db = _0x502c39.node;
      _0x502c39 = _0x4de3dc.lookupPath(_0x27e422, {
        parent: true
      });
      _0x11c8a5 = _0x502c39.node;
      if (!_0x4b64db || !_0x11c8a5) {
        throw new _0x4de3dc.ErrnoError(44);
      }
      if (_0x4b64db.mount !== _0x11c8a5.mount) {
        throw new _0x4de3dc.ErrnoError(75);
      }
      var _0x22e7ca = _0x4de3dc.lookupNode(_0x4b64db, _0x32abf7);
      var _0x3a87ae = _0x2ccd89.relative(_0x503801, _0x1c0964);
      if (_0x3a87ae.charAt(0) !== ".") {
        throw new _0x4de3dc.ErrnoError(28);
      }
      _0x3a87ae = _0x2ccd89.relative(_0x27e422, _0x4092a8);
      if (_0x3a87ae.charAt(0) !== ".") {
        throw new _0x4de3dc.ErrnoError(55);
      }
      var _0x1a4dc0;
      try {
        _0x1a4dc0 = _0x4de3dc.lookupNode(_0x11c8a5, _0x17ce5e);
      } catch (_0x397590) {}
      if (_0x22e7ca === _0x1a4dc0) {
        return;
      }
      var _0x9b7ca4 = _0x4de3dc.isDir(_0x22e7ca.mode);
      var _0x39f307 = _0x4de3dc.mayDelete(_0x4b64db, _0x32abf7, _0x9b7ca4);
      if (_0x39f307) {
        throw new _0x4de3dc.ErrnoError(_0x39f307);
      }
      _0x39f307 = _0x1a4dc0 ? _0x4de3dc.mayDelete(_0x11c8a5, _0x17ce5e, _0x9b7ca4) : _0x4de3dc.mayCreate(_0x11c8a5, _0x17ce5e);
      if (_0x39f307) {
        throw new _0x4de3dc.ErrnoError(_0x39f307);
      }
      if (!_0x4b64db.node_ops.rename) {
        throw new _0x4de3dc.ErrnoError(63);
      }
      if (_0x4de3dc.isMountpoint(_0x22e7ca) || _0x1a4dc0 && _0x4de3dc.isMountpoint(_0x1a4dc0)) {
        throw new _0x4de3dc.ErrnoError(10);
      }
      if (_0x11c8a5 !== _0x4b64db) {
        _0x39f307 = _0x4de3dc.nodePermissions(_0x4b64db, "w");
        if (_0x39f307) {
          throw new _0x4de3dc.ErrnoError(_0x39f307);
        }
      }
      try {
        if (_0x4de3dc.trackingDelegate.willMovePath) {
          _0x4de3dc.trackingDelegate.willMovePath(_0x503801, _0x27e422);
        }
      } catch (_0x5bdc58) {
        _0x1af4bd("FS.trackingDelegate['willMovePath']('" + _0x503801 + "', '" + _0x27e422 + "') threw an exception: " + _0x5bdc58.message);
      }
      _0x4de3dc.hashRemoveNode(_0x22e7ca);
      try {
        _0x4b64db.node_ops.rename(_0x22e7ca, _0x11c8a5, _0x17ce5e);
      } catch (_0x504ea7) {
        throw _0x504ea7;
      } finally {
        _0x4de3dc.hashAddNode(_0x22e7ca);
      }
      try {
        if (_0x4de3dc.trackingDelegate.onMovePath) {
          _0x4de3dc.trackingDelegate.onMovePath(_0x503801, _0x27e422);
        }
      } catch (_0x4377ad) {
        _0x1af4bd("FS.trackingDelegate['onMovePath']('" + _0x503801 + "', '" + _0x27e422 + "') threw an exception: " + _0x4377ad.message);
      }
    },
    rmdir: function (_0xa12108) {
      var _0x5aa2a7 = _0x4de3dc.lookupPath(_0xa12108, {
        parent: true
      });
      var _0x39f5f5 = _0x5aa2a7.node;
      var _0x5086b0 = _0x609fec.basename(_0xa12108);
      var _0x2254a7 = _0x4de3dc.lookupNode(_0x39f5f5, _0x5086b0);
      var _0x307601 = _0x4de3dc.mayDelete(_0x39f5f5, _0x5086b0, true);
      if (_0x307601) {
        throw new _0x4de3dc.ErrnoError(_0x307601);
      }
      if (!_0x39f5f5.node_ops.rmdir) {
        throw new _0x4de3dc.ErrnoError(63);
      }
      if (_0x4de3dc.isMountpoint(_0x2254a7)) {
        throw new _0x4de3dc.ErrnoError(10);
      }
      try {
        if (_0x4de3dc.trackingDelegate.willDeletePath) {
          _0x4de3dc.trackingDelegate.willDeletePath(_0xa12108);
        }
      } catch (_0x578ecd) {
        _0x1af4bd("FS.trackingDelegate['willDeletePath']('" + _0xa12108 + "') threw an exception: " + _0x578ecd.message);
      }
      _0x39f5f5.node_ops.rmdir(_0x39f5f5, _0x5086b0);
      _0x4de3dc.destroyNode(_0x2254a7);
      try {
        if (_0x4de3dc.trackingDelegate.onDeletePath) {
          _0x4de3dc.trackingDelegate.onDeletePath(_0xa12108);
        }
      } catch (_0x17327a) {
        _0x1af4bd("FS.trackingDelegate['onDeletePath']('" + _0xa12108 + "') threw an exception: " + _0x17327a.message);
      }
    },
    readdir: function (_0x192610) {
      var _0x46f4a0 = _0x4de3dc.lookupPath(_0x192610, {
        follow: true
      });
      var _0x3fe549 = _0x46f4a0.node;
      if (!_0x3fe549.node_ops.readdir) {
        throw new _0x4de3dc.ErrnoError(54);
      }
      return _0x3fe549.node_ops.readdir(_0x3fe549);
    },
    unlink: function (_0xe1db01) {
      var _0x366a43 = _0x4de3dc.lookupPath(_0xe1db01, {
        parent: true
      });
      var _0x14e587 = _0x366a43.node;
      var _0x4e0b21 = _0x609fec.basename(_0xe1db01);
      var _0x3f5d07 = _0x4de3dc.lookupNode(_0x14e587, _0x4e0b21);
      var _0x42496a = _0x4de3dc.mayDelete(_0x14e587, _0x4e0b21, false);
      if (_0x42496a) {
        throw new _0x4de3dc.ErrnoError(_0x42496a);
      }
      if (!_0x14e587.node_ops.unlink) {
        throw new _0x4de3dc.ErrnoError(63);
      }
      if (_0x4de3dc.isMountpoint(_0x3f5d07)) {
        throw new _0x4de3dc.ErrnoError(10);
      }
      try {
        if (_0x4de3dc.trackingDelegate.willDeletePath) {
          _0x4de3dc.trackingDelegate.willDeletePath(_0xe1db01);
        }
      } catch (_0x64d297) {
        _0x1af4bd("FS.trackingDelegate['willDeletePath']('" + _0xe1db01 + "') threw an exception: " + _0x64d297.message);
      }
      _0x14e587.node_ops.unlink(_0x14e587, _0x4e0b21);
      _0x4de3dc.destroyNode(_0x3f5d07);
      try {
        if (_0x4de3dc.trackingDelegate.onDeletePath) {
          _0x4de3dc.trackingDelegate.onDeletePath(_0xe1db01);
        }
      } catch (_0x371b1d) {
        _0x1af4bd("FS.trackingDelegate['onDeletePath']('" + _0xe1db01 + "') threw an exception: " + _0x371b1d.message);
      }
    },
    readlink: function (_0x5159ac) {
      var _0x3487dc = _0x4de3dc.lookupPath(_0x5159ac);
      var _0x53c053 = _0x3487dc.node;
      if (!_0x53c053) {
        throw new _0x4de3dc.ErrnoError(44);
      }
      if (!_0x53c053.node_ops.readlink) {
        throw new _0x4de3dc.ErrnoError(28);
      }
      return _0x2ccd89.resolve(_0x4de3dc.getPath(_0x53c053.parent), _0x53c053.node_ops.readlink(_0x53c053));
    },
    stat: function (_0x4d7e03, _0x1e20c4) {
      var _0x218092 = _0x4de3dc.lookupPath(_0x4d7e03, {
        follow: !_0x1e20c4
      });
      var _0x4ca89d = _0x218092.node;
      if (!_0x4ca89d) {
        throw new _0x4de3dc.ErrnoError(44);
      }
      if (!_0x4ca89d.node_ops.getattr) {
        throw new _0x4de3dc.ErrnoError(63);
      }
      return _0x4ca89d.node_ops.getattr(_0x4ca89d);
    },
    lstat: function (_0x16a063) {
      return _0x4de3dc.stat(_0x16a063, true);
    },
    chmod: function (_0x5df7bc, _0x4cbaad, _0x81ffde) {
      var _0x24ce47;
      if (typeof _0x5df7bc === "string") {
        var _0x2e13d5 = _0x4de3dc.lookupPath(_0x5df7bc, {
          follow: !_0x81ffde
        });
        _0x24ce47 = _0x2e13d5.node;
      } else {
        _0x24ce47 = _0x5df7bc;
      }
      if (!_0x24ce47.node_ops.setattr) {
        throw new _0x4de3dc.ErrnoError(63);
      }
      _0x24ce47.node_ops.setattr(_0x24ce47, {
        mode: _0x4cbaad & 4095 | _0x24ce47.mode & ~4095,
        timestamp: Date.now()
      });
    },
    lchmod: function (_0x486372, _0xf52a7d) {
      _0x4de3dc.chmod(_0x486372, _0xf52a7d, true);
    },
    fchmod: function (_0x3fb7f6, _0xc5b9e2) {
      var _0x44dad7 = _0x4de3dc.getStream(_0x3fb7f6);
      if (!_0x44dad7) {
        throw new _0x4de3dc.ErrnoError(8);
      }
      _0x4de3dc.chmod(_0x44dad7.node, _0xc5b9e2);
    },
    chown: function (_0x36d8f7, _0x9853a9, _0x41cd1b, _0x5413e2) {
      var _0x1fd14e;
      if (typeof _0x36d8f7 === "string") {
        var _0x98bf8b = _0x4de3dc.lookupPath(_0x36d8f7, {
          follow: !_0x5413e2
        });
        _0x1fd14e = _0x98bf8b.node;
      } else {
        _0x1fd14e = _0x36d8f7;
      }
      if (!_0x1fd14e.node_ops.setattr) {
        throw new _0x4de3dc.ErrnoError(63);
      }
      _0x1fd14e.node_ops.setattr(_0x1fd14e, {
        timestamp: Date.now()
      });
    },
    lchown: function (_0x2a84e5, _0x269f9a, _0x52e202) {
      _0x4de3dc.chown(_0x2a84e5, _0x269f9a, _0x52e202, true);
    },
    fchown: function (_0x18f87b, _0x6b6296, _0x36c818) {
      var _0x30a2d5 = _0x4de3dc.getStream(_0x18f87b);
      if (!_0x30a2d5) {
        throw new _0x4de3dc.ErrnoError(8);
      }
      _0x4de3dc.chown(_0x30a2d5.node, _0x6b6296, _0x36c818);
    },
    truncate: function (_0x42e74d, _0x4b4632) {
      if (_0x4b4632 < 0) {
        throw new _0x4de3dc.ErrnoError(28);
      }
      var _0x2c725b;
      if (typeof _0x42e74d === "string") {
        var _0x16b705 = _0x4de3dc.lookupPath(_0x42e74d, {
          follow: true
        });
        _0x2c725b = _0x16b705.node;
      } else {
        _0x2c725b = _0x42e74d;
      }
      if (!_0x2c725b.node_ops.setattr) {
        throw new _0x4de3dc.ErrnoError(63);
      }
      if (_0x4de3dc.isDir(_0x2c725b.mode)) {
        throw new _0x4de3dc.ErrnoError(31);
      }
      if (!_0x4de3dc.isFile(_0x2c725b.mode)) {
        throw new _0x4de3dc.ErrnoError(28);
      }
      var _0x1133e2 = _0x4de3dc.nodePermissions(_0x2c725b, "w");
      if (_0x1133e2) {
        throw new _0x4de3dc.ErrnoError(_0x1133e2);
      }
      _0x2c725b.node_ops.setattr(_0x2c725b, {
        size: _0x4b4632,
        timestamp: Date.now()
      });
    },
    ftruncate: function (_0x367548, _0xf8457b) {
      var _0x59ab16 = _0x4de3dc.getStream(_0x367548);
      if (!_0x59ab16) {
        throw new _0x4de3dc.ErrnoError(8);
      }
      if ((_0x59ab16.flags & 2097155) === 0) {
        throw new _0x4de3dc.ErrnoError(28);
      }
      _0x4de3dc.truncate(_0x59ab16.node, _0xf8457b);
    },
    utime: function (_0x1f15d0, _0x2b4b64, _0x487ac2) {
      var _0x4eefe3 = _0x4de3dc.lookupPath(_0x1f15d0, {
        follow: true
      });
      var _0x4f5ff9 = _0x4eefe3.node;
      _0x4f5ff9.node_ops.setattr(_0x4f5ff9, {
        timestamp: Math.max(_0x2b4b64, _0x487ac2)
      });
    },
    open: function (_0x19bd31, _0x109b88, _0x2b9f4f, _0x4606f4, _0x583e12) {
      if (_0x19bd31 === "") {
        throw new _0x4de3dc.ErrnoError(44);
      }
      _0x109b88 = typeof _0x109b88 === "string" ? _0x4de3dc.modeStringToFlags(_0x109b88) : _0x109b88;
      _0x2b9f4f = typeof _0x2b9f4f === "undefined" ? 438 : _0x2b9f4f;
      if (_0x109b88 & 64) {
        _0x2b9f4f = _0x2b9f4f & 4095 | 32768;
      } else {
        _0x2b9f4f = 0;
      }
      var _0x591555;
      if (typeof _0x19bd31 === "object") {
        _0x591555 = _0x19bd31;
      } else {
        _0x19bd31 = _0x609fec.normalize(_0x19bd31);
        try {
          var _0x690a23 = _0x4de3dc.lookupPath(_0x19bd31, {
            follow: !(_0x109b88 & 131072)
          });
          _0x591555 = _0x690a23.node;
        } catch (_0x3f9783) {}
      }
      var _0x6d8c5f = false;
      if (_0x109b88 & 64) {
        if (_0x591555) {
          if (_0x109b88 & 128) {
            throw new _0x4de3dc.ErrnoError(20);
          }
        } else {
          _0x591555 = _0x4de3dc.mknod(_0x19bd31, _0x2b9f4f, 0);
          _0x6d8c5f = true;
        }
      }
      if (!_0x591555) {
        throw new _0x4de3dc.ErrnoError(44);
      }
      if (_0x4de3dc.isChrdev(_0x591555.mode)) {
        _0x109b88 &= ~512;
      }
      if (_0x109b88 & 65536 && !_0x4de3dc.isDir(_0x591555.mode)) {
        throw new _0x4de3dc.ErrnoError(54);
      }
      if (!_0x6d8c5f) {
        var _0x306591 = _0x4de3dc.mayOpen(_0x591555, _0x109b88);
        if (_0x306591) {
          throw new _0x4de3dc.ErrnoError(_0x306591);
        }
      }
      if (_0x109b88 & 512) {
        _0x4de3dc.truncate(_0x591555, 0);
      }
      _0x109b88 &= ~131712;
      var _0x5bf37b = _0x4de3dc.createStream({
        node: _0x591555,
        path: _0x4de3dc.getPath(_0x591555),
        flags: _0x109b88,
        seekable: true,
        position: 0,
        stream_ops: _0x591555.stream_ops,
        ungotten: [],
        error: false
      }, _0x4606f4, _0x583e12);
      if (_0x5bf37b.stream_ops.open) {
        _0x5bf37b.stream_ops.open(_0x5bf37b);
      }
      if (_0x25e483.logReadFiles && !(_0x109b88 & 1)) {
        if (!_0x4de3dc.readFiles) {
          _0x4de3dc.readFiles = {};
        }
        if (!(_0x19bd31 in _0x4de3dc.readFiles)) {
          _0x4de3dc.readFiles[_0x19bd31] = 1;
          _0x1af4bd("FS.trackingDelegate error on read file: " + _0x19bd31);
        }
      }
      try {
        if (_0x4de3dc.trackingDelegate.onOpenFile) {
          var _0x47eb7e = 0;
          if ((_0x109b88 & 2097155) !== 1) {
            _0x47eb7e |= _0x4de3dc.tracking.openFlags.READ;
          }
          if ((_0x109b88 & 2097155) !== 0) {
            _0x47eb7e |= _0x4de3dc.tracking.openFlags.WRITE;
          }
          _0x4de3dc.trackingDelegate.onOpenFile(_0x19bd31, _0x47eb7e);
        }
      } catch (_0x1c7b59) {
        _0x1af4bd("FS.trackingDelegate['onOpenFile']('" + _0x19bd31 + "', flags) threw an exception: " + _0x1c7b59.message);
      }
      return _0x5bf37b;
    },
    close: function (_0x4be2cb) {
      if (_0x4de3dc.isClosed(_0x4be2cb)) {
        throw new _0x4de3dc.ErrnoError(8);
      }
      if (_0x4be2cb.getdents) {
        _0x4be2cb.getdents = null;
      }
      try {
        if (_0x4be2cb.stream_ops.close) {
          _0x4be2cb.stream_ops.close(_0x4be2cb);
        }
      } catch (_0x628dd5) {
        throw _0x628dd5;
      } finally {
        _0x4de3dc.closeStream(_0x4be2cb.fd);
      }
      _0x4be2cb.fd = null;
    },
    isClosed: function (_0x57d063) {
      return _0x57d063.fd === null;
    },
    llseek: function (_0x3cccf7, _0x580b42, _0x25c74a) {
      if (_0x4de3dc.isClosed(_0x3cccf7)) {
        throw new _0x4de3dc.ErrnoError(8);
      }
      if (!_0x3cccf7.seekable || !_0x3cccf7.stream_ops.llseek) {
        throw new _0x4de3dc.ErrnoError(70);
      }
      if (_0x25c74a != 0 && _0x25c74a != 1 && _0x25c74a != 2) {
        throw new _0x4de3dc.ErrnoError(28);
      }
      _0x3cccf7.position = _0x3cccf7.stream_ops.llseek(_0x3cccf7, _0x580b42, _0x25c74a);
      _0x3cccf7.ungotten = [];
      return _0x3cccf7.position;
    },
    read: function (_0x2fb839, _0x2f4cdc, _0x304b9e, _0x22de1a, _0x4cb7a2) {
      if (_0x22de1a < 0 || _0x4cb7a2 < 0) {
        throw new _0x4de3dc.ErrnoError(28);
      }
      if (_0x4de3dc.isClosed(_0x2fb839)) {
        throw new _0x4de3dc.ErrnoError(8);
      }
      if ((_0x2fb839.flags & 2097155) === 1) {
        throw new _0x4de3dc.ErrnoError(8);
      }
      if (_0x4de3dc.isDir(_0x2fb839.node.mode)) {
        throw new _0x4de3dc.ErrnoError(31);
      }
      if (!_0x2fb839.stream_ops.read) {
        throw new _0x4de3dc.ErrnoError(28);
      }
      var _0x4ad6e5 = typeof _0x4cb7a2 !== "undefined";
      if (!_0x4ad6e5) {
        _0x4cb7a2 = _0x2fb839.position;
      } else if (!_0x2fb839.seekable) {
        throw new _0x4de3dc.ErrnoError(70);
      }
      var _0x3ffdab = _0x2fb839.stream_ops.read(_0x2fb839, _0x2f4cdc, _0x304b9e, _0x22de1a, _0x4cb7a2);
      if (!_0x4ad6e5) {
        _0x2fb839.position += _0x3ffdab;
      }
      return _0x3ffdab;
    },
    write: function (_0x23f187, _0x5c6c12, _0x2560ae, _0x350b10, _0x57b21a, _0x16c3ea) {
      if (_0x350b10 < 0 || _0x57b21a < 0) {
        throw new _0x4de3dc.ErrnoError(28);
      }
      if (_0x4de3dc.isClosed(_0x23f187)) {
        throw new _0x4de3dc.ErrnoError(8);
      }
      if ((_0x23f187.flags & 2097155) === 0) {
        throw new _0x4de3dc.ErrnoError(8);
      }
      if (_0x4de3dc.isDir(_0x23f187.node.mode)) {
        throw new _0x4de3dc.ErrnoError(31);
      }
      if (!_0x23f187.stream_ops.write) {
        throw new _0x4de3dc.ErrnoError(28);
      }
      if (_0x23f187.seekable && _0x23f187.flags & 1024) {
        _0x4de3dc.llseek(_0x23f187, 0, 2);
      }
      var _0x1e0ef1 = typeof _0x57b21a !== "undefined";
      if (!_0x1e0ef1) {
        _0x57b21a = _0x23f187.position;
      } else if (!_0x23f187.seekable) {
        throw new _0x4de3dc.ErrnoError(70);
      }
      var _0x4b1305 = _0x23f187.stream_ops.write(_0x23f187, _0x5c6c12, _0x2560ae, _0x350b10, _0x57b21a, _0x16c3ea);
      if (!_0x1e0ef1) {
        _0x23f187.position += _0x4b1305;
      }
      try {
        if (_0x23f187.path && _0x4de3dc.trackingDelegate.onWriteToFile) {
          _0x4de3dc.trackingDelegate.onWriteToFile(_0x23f187.path);
        }
      } catch (_0x34e6cc) {
        _0x1af4bd("FS.trackingDelegate['onWriteToFile']('" + _0x23f187.path + "') threw an exception: " + _0x34e6cc.message);
      }
      return _0x4b1305;
    },
    allocate: function (_0x46624e, _0x4ba3f8, _0x3dc153) {
      if (_0x4de3dc.isClosed(_0x46624e)) {
        throw new _0x4de3dc.ErrnoError(8);
      }
      if (_0x4ba3f8 < 0 || _0x3dc153 <= 0) {
        throw new _0x4de3dc.ErrnoError(28);
      }
      if ((_0x46624e.flags & 2097155) === 0) {
        throw new _0x4de3dc.ErrnoError(8);
      }
      if (!_0x4de3dc.isFile(_0x46624e.node.mode) && !_0x4de3dc.isDir(_0x46624e.node.mode)) {
        throw new _0x4de3dc.ErrnoError(43);
      }
      if (!_0x46624e.stream_ops.allocate) {
        throw new _0x4de3dc.ErrnoError(138);
      }
      _0x46624e.stream_ops.allocate(_0x46624e, _0x4ba3f8, _0x3dc153);
    },
    mmap: function (_0xa9c003, _0x6293fa, _0x1753fd, _0xb951f1, _0x2b67f3, _0x5bc42b) {
      if ((_0x2b67f3 & 2) !== 0 && (_0x5bc42b & 2) === 0 && (_0xa9c003.flags & 2097155) !== 2) {
        throw new _0x4de3dc.ErrnoError(2);
      }
      if ((_0xa9c003.flags & 2097155) === 1) {
        throw new _0x4de3dc.ErrnoError(2);
      }
      if (!_0xa9c003.stream_ops.mmap) {
        throw new _0x4de3dc.ErrnoError(43);
      }
      return _0xa9c003.stream_ops.mmap(_0xa9c003, _0x6293fa, _0x1753fd, _0xb951f1, _0x2b67f3, _0x5bc42b);
    },
    msync: function (_0x4f8143, _0x39860e, _0x456fc3, _0x4ef5a3, _0x3c675f) {
      if (!_0x4f8143 || !_0x4f8143.stream_ops.msync) {
        return 0;
      }
      return _0x4f8143.stream_ops.msync(_0x4f8143, _0x39860e, _0x456fc3, _0x4ef5a3, _0x3c675f);
    },
    munmap: function (_0x30c35) {
      return 0;
    },
    ioctl: function (_0x72f447, _0x40cd46, _0x1f880b) {
      if (!_0x72f447.stream_ops.ioctl) {
        throw new _0x4de3dc.ErrnoError(59);
      }
      return _0x72f447.stream_ops.ioctl(_0x72f447, _0x40cd46, _0x1f880b);
    },
    readFile: function (_0x37c804, _0x4a33ad) {
      _0x4a33ad = _0x4a33ad || {};
      _0x4a33ad.flags = _0x4a33ad.flags || 0;
      _0x4a33ad.encoding = _0x4a33ad.encoding || "binary";
      if (_0x4a33ad.encoding !== "utf8" && _0x4a33ad.encoding !== "binary") {
        throw new Error("Invalid encoding type \"" + _0x4a33ad.encoding + "\"");
      }
      var _0x182bcd;
      var _0x436b0e = _0x4de3dc.open(_0x37c804, _0x4a33ad.flags);
      var _0x168cdf = _0x4de3dc.stat(_0x37c804);
      var _0xb4f78f = _0x168cdf.size;
      var _0x191a15 = new Uint8Array(_0xb4f78f);
      _0x4de3dc.read(_0x436b0e, _0x191a15, 0, _0xb4f78f, 0);
      if (_0x4a33ad.encoding === "utf8") {
        _0x182bcd = _0x21b049(_0x191a15, 0);
      } else if (_0x4a33ad.encoding === "binary") {
        _0x182bcd = _0x191a15;
      }
      _0x4de3dc.close(_0x436b0e);
      return _0x182bcd;
    },
    writeFile: function (_0x1316d, _0x16f84e, _0x5ef6cd) {
      _0x5ef6cd = _0x5ef6cd || {};
      _0x5ef6cd.flags = _0x5ef6cd.flags || 577;
      var _0x5111ae = _0x4de3dc.open(_0x1316d, _0x5ef6cd.flags, _0x5ef6cd.mode);
      if (typeof _0x16f84e === "string") {
        var _0x54b884 = new Uint8Array(_0x576ae2(_0x16f84e) + 1);
        var _0x166439 = _0x538990(_0x16f84e, _0x54b884, 0, _0x54b884.length);
        _0x4de3dc.write(_0x5111ae, _0x54b884, 0, _0x166439, undefined, _0x5ef6cd.canOwn);
      } else if (ArrayBuffer.isView(_0x16f84e)) {
        _0x4de3dc.write(_0x5111ae, _0x16f84e, 0, _0x16f84e.byteLength, undefined, _0x5ef6cd.canOwn);
      } else {
        throw new Error("Unsupported data type");
      }
      _0x4de3dc.close(_0x5111ae);
    },
    cwd: function () {
      return _0x4de3dc.currentPath;
    },
    chdir: function (_0x6f31b7) {
      var _0x11f48d = _0x4de3dc.lookupPath(_0x6f31b7, {
        follow: true
      });
      if (_0x11f48d.node === null) {
        throw new _0x4de3dc.ErrnoError(44);
      }
      if (!_0x4de3dc.isDir(_0x11f48d.node.mode)) {
        throw new _0x4de3dc.ErrnoError(54);
      }
      var _0x7c1320 = _0x4de3dc.nodePermissions(_0x11f48d.node, "x");
      if (_0x7c1320) {
        throw new _0x4de3dc.ErrnoError(_0x7c1320);
      }
      _0x4de3dc.currentPath = _0x11f48d.path;
    },
    createDefaultDirectories: function () {
      _0x4de3dc.mkdir("/tmp");
      _0x4de3dc.mkdir("/home");
      _0x4de3dc.mkdir("/home/web_user");
    },
    createDefaultDevices: function () {
      _0x4de3dc.mkdir("/dev");
      _0x4de3dc.registerDevice(_0x4de3dc.makedev(1, 3), {
        read: function () {
          return 0;
        },
        write: function (_0x4e6b6e, _0x5654be, _0x4a998c, _0x6bbf40, _0xb016b) {
          return _0x6bbf40;
        }
      });
      _0x4de3dc.mkdev("/dev/null", _0x4de3dc.makedev(1, 3));
      _0x5b46ae.register(_0x4de3dc.makedev(5, 0), _0x5b46ae.default_tty_ops);
      _0x5b46ae.register(_0x4de3dc.makedev(6, 0), _0x5b46ae.default_tty1_ops);
      _0x4de3dc.mkdev("/dev/tty", _0x4de3dc.makedev(5, 0));
      _0x4de3dc.mkdev("/dev/tty1", _0x4de3dc.makedev(6, 0));
      var _0xf6c532 = _0xab09be();
      _0x4de3dc.createDevice("/dev", "random", _0xf6c532);
      _0x4de3dc.createDevice("/dev", "urandom", _0xf6c532);
      _0x4de3dc.mkdir("/dev/shm");
      _0x4de3dc.mkdir("/dev/shm/tmp");
    },
    createSpecialDirectories: function () {
      _0x4de3dc.mkdir("/proc");
      var _0x514c3b = _0x4de3dc.mkdir("/proc/self");
      _0x4de3dc.mkdir("/proc/self/fd");
      _0x4de3dc.mount({
        mount: function () {
          var _0x15bed4 = _0x4de3dc.createNode(_0x514c3b, "fd", 16895, 73);
          _0x15bed4.node_ops = {
            lookup: function (_0x5c3a57, _0x531303) {
              var _0x45b03a = +_0x531303;
              var _0x3ebd28 = _0x4de3dc.getStream(_0x45b03a);
              if (!_0x3ebd28) {
                throw new _0x4de3dc.ErrnoError(8);
              }
              var _0x4c1e82 = {
                parent: null,
                mount: {
                  mountpoint: "fake"
                },
                node_ops: {
                  readlink: function () {
                    return _0x3ebd28.path;
                  }
                }
              };
              _0x4c1e82.parent = _0x4c1e82;
              return _0x4c1e82;
            }
          };
          return _0x15bed4;
        }
      }, {}, "/proc/self/fd");
    },
    createStandardStreams: function () {
      if (_0x25e483.stdin) {
        _0x4de3dc.createDevice("/dev", "stdin", _0x25e483.stdin);
      } else {
        _0x4de3dc.symlink("/dev/tty", "/dev/stdin");
      }
      if (_0x25e483.stdout) {
        _0x4de3dc.createDevice("/dev", "stdout", null, _0x25e483.stdout);
      } else {
        _0x4de3dc.symlink("/dev/tty", "/dev/stdout");
      }
      if (_0x25e483.stderr) {
        _0x4de3dc.createDevice("/dev", "stderr", null, _0x25e483.stderr);
      } else {
        _0x4de3dc.symlink("/dev/tty1", "/dev/stderr");
      }
      var _0x2c1952 = _0x4de3dc.open("/dev/stdin", 0);
      var _0x4ed51c = _0x4de3dc.open("/dev/stdout", 1);
      var _0x1bc887 = _0x4de3dc.open("/dev/stderr", 1);
    },
    ensureErrnoError: function () {
      if (_0x4de3dc.ErrnoError) {
        return;
      }
      _0x4de3dc.ErrnoError = function _0x3b19a9(_0x379a74, _0x778be5) {
        this.node = _0x778be5;
        this.setErrno = function (_0x1896cf) {
          this.errno = _0x1896cf;
        };
        this.setErrno(_0x379a74);
        this.message = "FS error";
      };
      _0x4de3dc.ErrnoError.prototype = new Error();
      _0x4de3dc.ErrnoError.prototype.constructor = _0x4de3dc.ErrnoError;
      [44].forEach(function (_0x1b6b8d) {
        _0x4de3dc.genericErrors[_0x1b6b8d] = new _0x4de3dc.ErrnoError(_0x1b6b8d);
        _0x4de3dc.genericErrors[_0x1b6b8d].stack = "<generic error, no stack>";
      });
    },
    staticInit: function () {
      _0x4de3dc.ensureErrnoError();
      _0x4de3dc.nameTable = new Array(4096);
      _0x4de3dc.mount(_0x34001c, {}, "/");
      _0x4de3dc.createDefaultDirectories();
      _0x4de3dc.createDefaultDevices();
      _0x4de3dc.createSpecialDirectories();
      _0x4de3dc.filesystems = {
        MEMFS: _0x34001c,
        IDBFS: _0x3b79bb
      };
    },
    init: function (_0x3d679b, _0x48df5f, _0x43187b) {
      _0x4de3dc.init.initialized = true;
      _0x4de3dc.ensureErrnoError();
      _0x25e483.stdin = _0x3d679b || _0x25e483.stdin;
      _0x25e483.stdout = _0x48df5f || _0x25e483.stdout;
      _0x25e483.stderr = _0x43187b || _0x25e483.stderr;
      _0x4de3dc.createStandardStreams();
    },
    quit: function () {
      _0x4de3dc.init.initialized = false;
      var _0x2ea7a8 = _0x25e483._fflush;
      if (_0x2ea7a8) {
        _0x2ea7a8(0);
      }
      for (var _0x1f2bcd = 0; _0x1f2bcd < _0x4de3dc.streams.length; _0x1f2bcd++) {
        var _0x333459 = _0x4de3dc.streams[_0x1f2bcd];
        if (!_0x333459) {
          continue;
        }
        _0x4de3dc.close(_0x333459);
      }
    },
    getMode: function (_0x4f69c3, _0x2ecfe9) {
      var _0x27127e = 0;
      if (_0x4f69c3) {
        _0x27127e |= 365;
      }
      if (_0x2ecfe9) {
        _0x27127e |= 146;
      }
      return _0x27127e;
    },
    findObject: function (_0xd3f300, _0x55a0ac) {
      var _0x53a9f5 = _0x4de3dc.analyzePath(_0xd3f300, _0x55a0ac);
      if (_0x53a9f5.exists) {
        return _0x53a9f5.object;
      } else {
        return null;
      }
    },
    analyzePath: function (_0x14028b, _0x5f0b42) {
      try {
        var _0x70ce23 = _0x4de3dc.lookupPath(_0x14028b, {
          follow: !_0x5f0b42
        });
        _0x14028b = _0x70ce23.path;
      } catch (_0x32da2b) {}
      var _0x38518d = {
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
        var _0x70ce23 = _0x4de3dc.lookupPath(_0x14028b, {
          parent: true
        });
        _0x38518d.parentExists = true;
        _0x38518d.parentPath = _0x70ce23.path;
        _0x38518d.parentObject = _0x70ce23.node;
        _0x38518d.name = _0x609fec.basename(_0x14028b);
        _0x70ce23 = _0x4de3dc.lookupPath(_0x14028b, {
          follow: !_0x5f0b42
        });
        _0x38518d.exists = true;
        _0x38518d.path = _0x70ce23.path;
        _0x38518d.object = _0x70ce23.node;
        _0x38518d.name = _0x70ce23.node.name;
        _0x38518d.isRoot = _0x70ce23.path === "/";
      } catch (_0xc973f3) {
        _0x38518d.error = _0xc973f3.errno;
      }
      return _0x38518d;
    },
    createPath: function (_0x41c42e, _0x30fba9, _0x4bff68, _0x3a8dca) {
      _0x41c42e = typeof _0x41c42e === "string" ? _0x41c42e : _0x4de3dc.getPath(_0x41c42e);
      var _0x16d201 = _0x30fba9.split("/").reverse();
      while (_0x16d201.length) {
        var _0x3e1846 = _0x16d201.pop();
        if (!_0x3e1846) {
          continue;
        }
        var _0x70af38 = _0x609fec.join2(_0x41c42e, _0x3e1846);
        try {
          _0x4de3dc.mkdir(_0x70af38);
        } catch (_0x8e1730) {}
        _0x41c42e = _0x70af38;
      }
      return _0x70af38;
    },
    createFile: function (_0x4b4de3, _0x7baac6, _0x10cd1a, _0x567cc5, _0x413032) {
      var _0x59522f = _0x609fec.join2(typeof _0x4b4de3 === "string" ? _0x4b4de3 : _0x4de3dc.getPath(_0x4b4de3), _0x7baac6);
      var _0x2f6634 = _0x4de3dc.getMode(_0x567cc5, _0x413032);
      return _0x4de3dc.create(_0x59522f, _0x2f6634);
    },
    createDataFile: function (_0x1af5a5, _0x9ed63b, _0x3322fc, _0xd2833e, _0x3b3ae0, _0x2a7619) {
      var _0xfd2914 = _0x9ed63b ? _0x609fec.join2(typeof _0x1af5a5 === "string" ? _0x1af5a5 : _0x4de3dc.getPath(_0x1af5a5), _0x9ed63b) : _0x1af5a5;
      var _0x1050eb = _0x4de3dc.getMode(_0xd2833e, _0x3b3ae0);
      var _0x2e61a9 = _0x4de3dc.create(_0xfd2914, _0x1050eb);
      if (_0x3322fc) {
        if (typeof _0x3322fc === "string") {
          var _0x1d8707 = new Array(_0x3322fc.length);
          for (var _0x3c7021 = 0, _0x689961 = _0x3322fc.length; _0x3c7021 < _0x689961; ++_0x3c7021) {
            _0x1d8707[_0x3c7021] = _0x3322fc.charCodeAt(_0x3c7021);
          }
          _0x3322fc = _0x1d8707;
        }
        _0x4de3dc.chmod(_0x2e61a9, _0x1050eb | 146);
        var _0x37453f = _0x4de3dc.open(_0x2e61a9, 577);
        _0x4de3dc.write(_0x37453f, _0x3322fc, 0, _0x3322fc.length, 0, _0x2a7619);
        _0x4de3dc.close(_0x37453f);
        _0x4de3dc.chmod(_0x2e61a9, _0x1050eb);
      }
      return _0x2e61a9;
    },
    createDevice: function (_0x39e743, _0x409ded, _0x2db639, _0x36d072) {
      var _0x415b55 = _0x609fec.join2(typeof _0x39e743 === "string" ? _0x39e743 : _0x4de3dc.getPath(_0x39e743), _0x409ded);
      var _0x3a7dbe = _0x4de3dc.getMode(!!_0x2db639, !!_0x36d072);
      if (!_0x4de3dc.createDevice.major) {
        _0x4de3dc.createDevice.major = 64;
      }
      var _0x4e0a25 = _0x4de3dc.makedev(_0x4de3dc.createDevice.major++, 0);
      _0x4de3dc.registerDevice(_0x4e0a25, {
        open: function (_0x2856ec) {
          _0x2856ec.seekable = false;
        },
        close: function (_0x193931) {
          if (_0x36d072 && _0x36d072.buffer && _0x36d072.buffer.length) {
            _0x36d072(10);
          }
        },
        read: function (_0x45f8d5, _0x525cb2, _0x560027, _0x317a1d, _0x218f85) {
          var _0x374df7 = 0;
          for (var _0x401afb = 0; _0x401afb < _0x317a1d; _0x401afb++) {
            var _0x41112d;
            try {
              _0x41112d = _0x2db639();
            } catch (_0x483e51) {
              throw new _0x4de3dc.ErrnoError(29);
            }
            if (_0x41112d === undefined && _0x374df7 === 0) {
              throw new _0x4de3dc.ErrnoError(6);
            }
            if (_0x41112d === null || _0x41112d === undefined) {
              break;
            }
            _0x374df7++;
            _0x525cb2[_0x560027 + _0x401afb] = _0x41112d;
          }
          if (_0x374df7) {
            _0x45f8d5.node.timestamp = Date.now();
          }
          return _0x374df7;
        },
        write: function (_0xbed228, _0x3cb47a, _0x22c196, _0x2de704, _0x29edfd) {
          for (var _0x51e50f = 0; _0x51e50f < _0x2de704; _0x51e50f++) {
            try {
              _0x36d072(_0x3cb47a[_0x22c196 + _0x51e50f]);
            } catch (_0x42d15a) {
              throw new _0x4de3dc.ErrnoError(29);
            }
          }
          if (_0x2de704) {
            _0xbed228.node.timestamp = Date.now();
          }
          return _0x51e50f;
        }
      });
      return _0x4de3dc.mkdev(_0x415b55, _0x3a7dbe, _0x4e0a25);
    },
    forceLoadFile: function (_0x573a56) {
      if (_0x573a56.isDevice || _0x573a56.isFolder || _0x573a56.link || _0x573a56.contents) {
        return true;
      }
      if (typeof XMLHttpRequest !== "undefined") {
        throw new Error("Lazy loading should have been performed (contents set) in createLazyFile, but it was not. Lazy loading only works in web workers. Use --embed-file or --preload-file in emcc on the main thread.");
      } else if (_0x36d9d2) {
        try {
          _0x573a56.contents = _0x3f85df(_0x36d9d2(_0x573a56.url), true);
          _0x573a56.usedBytes = _0x573a56.contents.length;
        } catch (_0x43e1af) {
          throw new _0x4de3dc.ErrnoError(29);
        }
      } else {
        throw new Error("Cannot load without read() or XMLHttpRequest.");
      }
    },
    createLazyFile: function (_0x6d2455, _0x5eab46, _0x52f007, _0x28b6fe, _0x4ba63b) {
      function _0x3d2008() {
        this.lengthKnown = false;
        this.chunks = [];
      }
      _0x3d2008.prototype.get = function _0x2de369(_0x5bb972) {
        if (_0x5bb972 > this.length - 1 || _0x5bb972 < 0) {
          return undefined;
        }
        var _0x48733c = _0x5bb972 % this.chunkSize;
        var _0x251175 = _0x5bb972 / this.chunkSize | 0;
        return this.getter(_0x251175)[_0x48733c];
      };
      _0x3d2008.prototype.setDataGetter = function _0x556a4d(_0x4b2559) {
        this.getter = _0x4b2559;
      };
      _0x3d2008.prototype.cacheLength = function _0x38ee6b() {
        var _0x2e3947 = new XMLHttpRequest();
        _0x2e3947.open("HEAD", _0x52f007, false);
        _0x2e3947.send(null);
        if ((!(_0x2e3947.status >= 200) || !(_0x2e3947.status < 300)) && _0x2e3947.status !== 304) {
          throw new Error("Couldn't load " + _0x52f007 + ". Status: " + _0x2e3947.status);
        }
        var _0x16f938 = Number(_0x2e3947.getResponseHeader("Content-length"));
        var _0x3bd4fe;
        var _0x3c6ca0 = (_0x3bd4fe = _0x2e3947.getResponseHeader("Accept-Ranges")) && _0x3bd4fe === "bytes";
        var _0x3da5e6 = (_0x3bd4fe = _0x2e3947.getResponseHeader("Content-Encoding")) && _0x3bd4fe === "gzip";
        var _0x38683d = 1048576;
        if (!_0x3c6ca0) {
          _0x38683d = _0x16f938;
        }
        function _0xcd1d81(_0x427648, _0x1a2217) {
          if (_0x427648 > _0x1a2217) {
            throw new Error("invalid range (" + _0x427648 + ", " + _0x1a2217 + ") or no bytes requested!");
          }
          if (_0x1a2217 > _0x16f938 - 1) {
            throw new Error("only " + _0x16f938 + " bytes available! programmer error!");
          }
          var _0x3a3e39 = new XMLHttpRequest();
          _0x3a3e39.open("GET", _0x52f007, false);
          if (_0x16f938 !== _0x38683d) {
            _0x3a3e39.setRequestHeader("Range", "bytes=" + _0x427648 + "-" + _0x1a2217);
          }
          if (typeof Uint8Array != "undefined") {
            _0x3a3e39.responseType = "arraybuffer";
          }
          if (_0x3a3e39.overrideMimeType) {
            _0x3a3e39.overrideMimeType("text/plain; charset=x-user-defined");
          }
          _0x3a3e39.send(null);
          if ((!(_0x3a3e39.status >= 200) || !(_0x3a3e39.status < 300)) && _0x3a3e39.status !== 304) {
            throw new Error("Couldn't load " + _0x52f007 + ". Status: " + _0x3a3e39.status);
          }
          if (_0x3a3e39.response !== undefined) {
            return new Uint8Array(_0x3a3e39.response || []);
          } else {
            return _0x3f85df(_0x3a3e39.responseText || "", true);
          }
        }
        var _0x5644de = this;
        _0x5644de.setDataGetter(function (_0x520899) {
          var _0x1fd098 = _0x520899 * _0x38683d;
          var _0xda7c6f = (_0x520899 + 1) * _0x38683d - 1;
          _0xda7c6f = Math.min(_0xda7c6f, _0x16f938 - 1);
          if (typeof _0x5644de.chunks[_0x520899] === "undefined") {
            _0x5644de.chunks[_0x520899] = _0xcd1d81(_0x1fd098, _0xda7c6f);
          }
          if (typeof _0x5644de.chunks[_0x520899] === "undefined") {
            throw new Error("doXHR failed!");
          }
          return _0x5644de.chunks[_0x520899];
        });
        if (_0x3da5e6 || !_0x16f938) {
          _0x38683d = _0x16f938 = 1;
          _0x16f938 = this.getter(0).length;
          _0x38683d = _0x16f938;
          _0x376d62("LazyFiles on gzip forces download of the whole file when length is accessed");
        }
        this._length = _0x16f938;
        this._chunkSize = _0x38683d;
        this.lengthKnown = true;
      };
      if (typeof XMLHttpRequest !== "undefined") {
        if (!_0x17bf79) {
          throw "Cannot do synchronous binary XHRs outside webworkers in modern browsers. Use --embed-file or --preload-file in emcc";
        }
        var _0x2892ca = new _0x3d2008();
        Object.defineProperties(_0x2892ca, {
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
        var _0x18f0b2 = {
          isDevice: false,
          contents: _0x2892ca
        };
      } else {
        var _0x18f0b2 = {
          isDevice: false,
          url: _0x52f007
        };
      }
      var _0x369e4b = _0x4de3dc.createFile(_0x6d2455, _0x5eab46, _0x18f0b2, _0x28b6fe, _0x4ba63b);
      if (_0x18f0b2.contents) {
        _0x369e4b.contents = _0x18f0b2.contents;
      } else if (_0x18f0b2.url) {
        _0x369e4b.contents = null;
        _0x369e4b.url = _0x18f0b2.url;
      }
      Object.defineProperties(_0x369e4b, {
        usedBytes: {
          get: function () {
            return this.contents.length;
          }
        }
      });
      var _0x20f0fd = {};
      var _0x24e801 = Object.keys(_0x369e4b.stream_ops);
      _0x24e801.forEach(function (_0x2d1182) {
        var _0x967e52 = _0x369e4b.stream_ops[_0x2d1182];
        _0x20f0fd[_0x2d1182] = function _0x40a13c() {
          _0x4de3dc.forceLoadFile(_0x369e4b);
          return _0x967e52.apply(null, arguments);
        };
      });
      _0x20f0fd.read = function _0x4f49c6(_0x4d2569, _0x50b21b, _0x1c757e, _0x3cbae1, _0x1174c3) {
        _0x4de3dc.forceLoadFile(_0x369e4b);
        var _0x58ea76 = _0x4d2569.node.contents;
        if (_0x1174c3 >= _0x58ea76.length) {
          return 0;
        }
        var _0x181b16 = Math.min(_0x58ea76.length - _0x1174c3, _0x3cbae1);
        if (_0x58ea76.slice) {
          for (var _0x5dd3e9 = 0; _0x5dd3e9 < _0x181b16; _0x5dd3e9++) {
            _0x50b21b[_0x1c757e + _0x5dd3e9] = _0x58ea76[_0x1174c3 + _0x5dd3e9];
          }
        } else {
          for (var _0x5dd3e9 = 0; _0x5dd3e9 < _0x181b16; _0x5dd3e9++) {
            _0x50b21b[_0x1c757e + _0x5dd3e9] = _0x58ea76.get(_0x1174c3 + _0x5dd3e9);
          }
        }
        return _0x181b16;
      };
      _0x369e4b.stream_ops = _0x20f0fd;
      return _0x369e4b;
    },
    createPreloadedFile: function (_0x584209, _0xa9bdf4, _0x47c3b9, _0x32c704, _0x276a2b, _0x36a7fb, _0x30e140, _0x98ea8c, _0x210a11, _0x58ccb9) {
      _0x232a5c.init();
      var _0x18d00 = _0xa9bdf4 ? _0x2ccd89.resolve(_0x609fec.join2(_0x584209, _0xa9bdf4)) : _0x584209;
      var _0x2d8af9 = _0x1a1e9c("cp " + _0x18d00);
      function _0x498d84(_0x2fe27d) {
        function _0x47b22f(_0x28542c) {
          if (_0x58ccb9) {
            _0x58ccb9();
          }
          if (!_0x98ea8c) {
            _0x4de3dc.createDataFile(_0x584209, _0xa9bdf4, _0x28542c, _0x32c704, _0x276a2b, _0x210a11);
          }
          if (_0x36a7fb) {
            _0x36a7fb();
          }
          _0x21f06d(_0x2d8af9);
        }
        var _0x51a6be = false;
        _0x25e483.preloadPlugins.forEach(function (_0x424ff7) {
          if (_0x51a6be) {
            return;
          }
          if (_0x424ff7.canHandle(_0x18d00)) {
            _0x424ff7.handle(_0x2fe27d, _0x18d00, _0x47b22f, function () {
              if (_0x30e140) {
                _0x30e140();
              }
              _0x21f06d(_0x2d8af9);
            });
            _0x51a6be = true;
          }
        });
        if (!_0x51a6be) {
          _0x47b22f(_0x2fe27d);
        }
      }
      _0x5884c7(_0x2d8af9);
      if (typeof _0x47c3b9 == "string") {
        _0x232a5c.asyncLoad(_0x47c3b9, function (_0x5b3aba) {
          _0x498d84(_0x5b3aba);
        }, _0x30e140);
      } else {
        _0x498d84(_0x47c3b9);
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
    saveFilesToDB: function (_0x3514ff, _0xfa8911, _0x2b7e78) {
      _0xfa8911 = _0xfa8911 || function () {};
      _0x2b7e78 = _0x2b7e78 || function () {};
      var _0x5379d1 = _0x4de3dc.indexedDB();
      try {
        var _0x36339e = _0x5379d1.open(_0x4de3dc.DB_NAME(), _0x4de3dc.DB_VERSION);
      } catch (_0x12d0ae) {
        return _0x2b7e78(_0x12d0ae);
      }
      _0x36339e.onupgradeneeded = function _0x45a7be() {
        _0x376d62("creating db");
        var _0x3e9cd1 = _0x36339e.result;
        _0x3e9cd1.createObjectStore(_0x4de3dc.DB_STORE_NAME);
      };
      _0x36339e.onsuccess = function _0x2ed413() {
        var _0x24e994 = _0x36339e.result;
        var _0x6914c0 = _0x24e994.transaction([_0x4de3dc.DB_STORE_NAME], "readwrite");
        var _0x295f4f = _0x6914c0.objectStore(_0x4de3dc.DB_STORE_NAME);
        var _0x562605 = 0;
        var _0x35062f = 0;
        var _0x577f47 = _0x3514ff.length;
        function _0x341401() {
          if (_0x35062f == 0) {
            _0xfa8911();
          } else {
            _0x2b7e78();
          }
        }
        _0x3514ff.forEach(function (_0x2398a2) {
          var _0x51b803 = _0x295f4f.put(_0x4de3dc.analyzePath(_0x2398a2).object.contents, _0x2398a2);
          _0x51b803.onsuccess = function _0x3b0d4c() {
            _0x562605++;
            if (_0x562605 + _0x35062f == _0x577f47) {
              _0x341401();
            }
          };
          _0x51b803.onerror = function _0xeb0a40() {
            _0x35062f++;
            if (_0x562605 + _0x35062f == _0x577f47) {
              _0x341401();
            }
          };
        });
        _0x6914c0.onerror = _0x2b7e78;
      };
      _0x36339e.onerror = _0x2b7e78;
    },
    loadFilesFromDB: function (_0x180154, _0x24b503, _0x78c82c) {
      _0x24b503 = _0x24b503 || function () {};
      _0x78c82c = _0x78c82c || function () {};
      var _0x41e345 = _0x4de3dc.indexedDB();
      try {
        var _0x473fd7 = _0x41e345.open(_0x4de3dc.DB_NAME(), _0x4de3dc.DB_VERSION);
      } catch (_0x36c7f0) {
        return _0x78c82c(_0x36c7f0);
      }
      _0x473fd7.onupgradeneeded = _0x78c82c;
      _0x473fd7.onsuccess = function _0x405c65() {
        var _0x348415 = _0x473fd7.result;
        try {
          var _0xa23248 = _0x348415.transaction([_0x4de3dc.DB_STORE_NAME], "readonly");
        } catch (_0x31fca8) {
          _0x78c82c(_0x31fca8);
          return;
        }
        var _0x23c8b8 = _0xa23248.objectStore(_0x4de3dc.DB_STORE_NAME);
        var _0x308e8e = 0;
        var _0x18b906 = 0;
        var _0x8ac07 = _0x180154.length;
        function _0x517dc6() {
          if (_0x18b906 == 0) {
            _0x24b503();
          } else {
            _0x78c82c();
          }
        }
        _0x180154.forEach(function (_0x358fad) {
          var _0xb727ab = _0x23c8b8.get(_0x358fad);
          _0xb727ab.onsuccess = function _0x25ee76() {
            if (_0x4de3dc.analyzePath(_0x358fad).exists) {
              _0x4de3dc.unlink(_0x358fad);
            }
            _0x4de3dc.createDataFile(_0x609fec.dirname(_0x358fad), _0x609fec.basename(_0x358fad), _0xb727ab.result, true, true, true);
            _0x308e8e++;
            if (_0x308e8e + _0x18b906 == _0x8ac07) {
              _0x517dc6();
            }
          };
          _0xb727ab.onerror = function _0x3d8a2f() {
            _0x18b906++;
            if (_0x308e8e + _0x18b906 == _0x8ac07) {
              _0x517dc6();
            }
          };
        });
        _0xa23248.onerror = _0x78c82c;
      };
      _0x473fd7.onerror = _0x78c82c;
    }
  };
  var _0x29f6ac = {
    mappings: {},
    DEFAULT_POLLMASK: 5,
    umask: 511,
    calculateAt: function (_0x20639d, _0x553c30, _0x31ed1e) {
      if (_0x553c30[0] === "/") {
        return _0x553c30;
      }
      var _0x89db43;
      if (_0x20639d === -100) {
        _0x89db43 = _0x4de3dc.cwd();
      } else {
        var _0x172cf1 = _0x4de3dc.getStream(_0x20639d);
        if (!_0x172cf1) {
          throw new _0x4de3dc.ErrnoError(8);
        }
        _0x89db43 = _0x172cf1.path;
      }
      if (_0x553c30.length == 0) {
        if (!_0x31ed1e) {
          throw new _0x4de3dc.ErrnoError(44);
        }
        return _0x89db43;
      }
      return _0x609fec.join2(_0x89db43, _0x553c30);
    },
    doStat: function (_0x17860f, _0x42245c, _0x20ecae) {
      try {
        var _0x1d6b4b = _0x17860f(_0x42245c);
      } catch (_0x1962d4) {
        if (_0x1962d4 && _0x1962d4.node && _0x609fec.normalize(_0x42245c) !== _0x609fec.normalize(_0x4de3dc.getPath(_0x1962d4.node))) {
          return -54;
        }
        throw _0x1962d4;
      }
      _0x38db74[_0x20ecae >> 2] = _0x1d6b4b.dev;
      _0x38db74[_0x20ecae + 4 >> 2] = 0;
      _0x38db74[_0x20ecae + 8 >> 2] = _0x1d6b4b.ino;
      _0x38db74[_0x20ecae + 12 >> 2] = _0x1d6b4b.mode;
      _0x38db74[_0x20ecae + 16 >> 2] = _0x1d6b4b.nlink;
      _0x38db74[_0x20ecae + 20 >> 2] = _0x1d6b4b.uid;
      _0x38db74[_0x20ecae + 24 >> 2] = _0x1d6b4b.gid;
      _0x38db74[_0x20ecae + 28 >> 2] = _0x1d6b4b.rdev;
      _0x38db74[_0x20ecae + 32 >> 2] = 0;
      _0x3942a9 = [_0x1d6b4b.size >>> 0, (_0xd0ad0c = _0x1d6b4b.size, +Math.abs(_0xd0ad0c) >= 1 ? _0xd0ad0c > 0 ? (Math.min(+Math.floor(_0xd0ad0c / 4294967296), 4294967295) | 0) >>> 0 : ~~+Math.ceil((_0xd0ad0c - +(~~_0xd0ad0c >>> 0)) / 4294967296) >>> 0 : 0)];
      _0x38db74[_0x20ecae + 40 >> 2] = _0x3942a9[0];
      _0x38db74[_0x20ecae + 44 >> 2] = _0x3942a9[1];
      _0x38db74[_0x20ecae + 48 >> 2] = 4096;
      _0x38db74[_0x20ecae + 52 >> 2] = _0x1d6b4b.blocks;
      _0x38db74[_0x20ecae + 56 >> 2] = _0x1d6b4b.atime.getTime() / 1000 | 0;
      _0x38db74[_0x20ecae + 60 >> 2] = 0;
      _0x38db74[_0x20ecae + 64 >> 2] = _0x1d6b4b.mtime.getTime() / 1000 | 0;
      _0x38db74[_0x20ecae + 68 >> 2] = 0;
      _0x38db74[_0x20ecae + 72 >> 2] = _0x1d6b4b.ctime.getTime() / 1000 | 0;
      _0x38db74[_0x20ecae + 76 >> 2] = 0;
      _0x3942a9 = [_0x1d6b4b.ino >>> 0, (_0xd0ad0c = _0x1d6b4b.ino, +Math.abs(_0xd0ad0c) >= 1 ? _0xd0ad0c > 0 ? (Math.min(+Math.floor(_0xd0ad0c / 4294967296), 4294967295) | 0) >>> 0 : ~~+Math.ceil((_0xd0ad0c - +(~~_0xd0ad0c >>> 0)) / 4294967296) >>> 0 : 0)];
      _0x38db74[_0x20ecae + 80 >> 2] = _0x3942a9[0];
      _0x38db74[_0x20ecae + 84 >> 2] = _0x3942a9[1];
      return 0;
    },
    doMsync: function (_0x38b1cf, _0x15283d, _0x1c3257, _0x571d2c, _0x3c8fd2) {
      var _0x493aed = _0xdf86cd.slice(_0x38b1cf, _0x38b1cf + _0x1c3257);
      _0x4de3dc.msync(_0x15283d, _0x493aed, _0x3c8fd2, _0x1c3257, _0x571d2c);
    },
    doMkdir: function (_0x5e5241, _0x5da1a6) {
      _0x5e5241 = _0x609fec.normalize(_0x5e5241);
      if (_0x5e5241[_0x5e5241.length - 1] === "/") {
        _0x5e5241 = _0x5e5241.substr(0, _0x5e5241.length - 1);
      }
      _0x4de3dc.mkdir(_0x5e5241, _0x5da1a6, 0);
      return 0;
    },
    doMknod: function (_0x4b8169, _0x3867a5, _0x4cfd19) {
      switch (_0x3867a5 & 61440) {
        case 32768:
        case 8192:
        case 24576:
        case 4096:
        case 49152:
          break;
        default:
          return -28;
      }
      _0x4de3dc.mknod(_0x4b8169, _0x3867a5, _0x4cfd19);
      return 0;
    },
    doReadlink: function (_0x3ff85d, _0x7ee923, _0xafc4e3) {
      if (_0xafc4e3 <= 0) {
        return -28;
      }
      var _0x26bd45 = _0x4de3dc.readlink(_0x3ff85d);
      var _0xe82bda = Math.min(_0xafc4e3, _0x576ae2(_0x26bd45));
      var _0x5c5c07 = _0x3b8c2f[_0x7ee923 + _0xe82bda];
      _0x517360(_0x26bd45, _0x7ee923, _0xafc4e3 + 1);
      _0x3b8c2f[_0x7ee923 + _0xe82bda] = _0x5c5c07;
      return _0xe82bda;
    },
    doAccess: function (_0x4a2969, _0x2808e1) {
      if (_0x2808e1 & ~7) {
        return -28;
      }
      var _0x2fbc19;
      var _0xfbddb6 = _0x4de3dc.lookupPath(_0x4a2969, {
        follow: true
      });
      _0x2fbc19 = _0xfbddb6.node;
      if (!_0x2fbc19) {
        return -44;
      }
      var _0x14b695 = "";
      if (_0x2808e1 & 4) {
        _0x14b695 += "r";
      }
      if (_0x2808e1 & 2) {
        _0x14b695 += "w";
      }
      if (_0x2808e1 & 1) {
        _0x14b695 += "x";
      }
      if (_0x14b695 && _0x4de3dc.nodePermissions(_0x2fbc19, _0x14b695)) {
        return -2;
      }
      return 0;
    },
    doDup: function (_0x348f81, _0x5682fd, _0x2b1f6f) {
      var _0x1a898f = _0x4de3dc.getStream(_0x2b1f6f);
      if (_0x1a898f) {
        _0x4de3dc.close(_0x1a898f);
      }
      return _0x4de3dc.open(_0x348f81, _0x5682fd, 0, _0x2b1f6f, _0x2b1f6f).fd;
    },
    doReadv: function (_0x4168ec, _0x51115a, _0x4f3f0f, _0x43d068) {
      var _0x485ee4 = 0;
      for (var _0x4aa1da = 0; _0x4aa1da < _0x4f3f0f; _0x4aa1da++) {
        var _0x2103ff = _0x38db74[_0x51115a + _0x4aa1da * 8 >> 2];
        var _0x2a2f53 = _0x38db74[_0x51115a + (_0x4aa1da * 8 + 4) >> 2];
        var _0x37538f = _0x4de3dc.read(_0x4168ec, _0x3b8c2f, _0x2103ff, _0x2a2f53, _0x43d068);
        if (_0x37538f < 0) {
          return -1;
        }
        _0x485ee4 += _0x37538f;
        if (_0x37538f < _0x2a2f53) {
          break;
        }
      }
      return _0x485ee4;
    },
    doWritev: function (_0x1f9a38, _0x57d89b, _0x378905, _0x228c74) {
      var _0x5414cd = 0;
      for (var _0xa3b15f = 0; _0xa3b15f < _0x378905; _0xa3b15f++) {
        var _0x190178 = _0x38db74[_0x57d89b + _0xa3b15f * 8 >> 2];
        var _0x388315 = _0x38db74[_0x57d89b + (_0xa3b15f * 8 + 4) >> 2];
        var _0x4c64aa = _0x4de3dc.write(_0x1f9a38, _0x3b8c2f, _0x190178, _0x388315, _0x228c74);
        if (_0x4c64aa < 0) {
          return -1;
        }
        _0x5414cd += _0x4c64aa;
      }
      return _0x5414cd;
    },
    varargs: undefined,
    get: function () {
      _0x29f6ac.varargs += 4;
      var _0x477f33 = _0x38db74[_0x29f6ac.varargs - 4 >> 2];
      return _0x477f33;
    },
    getStr: function (_0x572345) {
      var _0x20047a = _0xdfb7b2(_0x572345);
      return _0x20047a;
    },
    getStreamFromFD: function (_0x2419b0) {
      var _0x2380f8 = _0x4de3dc.getStream(_0x2419b0);
      if (!_0x2380f8) {
        throw new _0x4de3dc.ErrnoError(8);
      }
      return _0x2380f8;
    },
    get64: function (_0x4e662f, _0x156864) {
      return _0x4e662f;
    }
  };
  function _0x546053(_0x2f8d39, _0x2dc951, _0x1ff745, _0x12d0c9, _0x25bdb9) {
    try {
      var _0x4fd4d4 = 0;
      var _0x5ad3c2 = _0x2dc951 ? _0x38db74[_0x2dc951 >> 2] : 0;
      var _0x267d78 = _0x2dc951 ? _0x38db74[_0x2dc951 + 4 >> 2] : 0;
      var _0x114bd2 = _0x1ff745 ? _0x38db74[_0x1ff745 >> 2] : 0;
      var _0x3c644f = _0x1ff745 ? _0x38db74[_0x1ff745 + 4 >> 2] : 0;
      var _0x1e4eb5 = _0x12d0c9 ? _0x38db74[_0x12d0c9 >> 2] : 0;
      var _0x3f9b28 = _0x12d0c9 ? _0x38db74[_0x12d0c9 + 4 >> 2] : 0;
      var _0x1c1a7b = 0;
      var _0x3e21a0 = 0;
      var _0x2753f0 = 0;
      var _0x3e9950 = 0;
      var _0x483772 = 0;
      var _0x3355cd = 0;
      var _0x179182 = (_0x2dc951 ? _0x38db74[_0x2dc951 >> 2] : 0) | (_0x1ff745 ? _0x38db74[_0x1ff745 >> 2] : 0) | (_0x12d0c9 ? _0x38db74[_0x12d0c9 >> 2] : 0);
      var _0x211857 = (_0x2dc951 ? _0x38db74[_0x2dc951 + 4 >> 2] : 0) | (_0x1ff745 ? _0x38db74[_0x1ff745 + 4 >> 2] : 0) | (_0x12d0c9 ? _0x38db74[_0x12d0c9 + 4 >> 2] : 0);
      function _0x4e61b2(_0x4c71cc, _0x30671f, _0x4c6c14, _0xf56cdd) {
        if (_0x4c71cc < 32) {
          return _0x30671f & _0xf56cdd;
        } else {
          return _0x4c6c14 & _0xf56cdd;
        }
      }
      for (var _0x510adf = 0; _0x510adf < _0x2f8d39; _0x510adf++) {
        var _0x89b7eb = 1 << _0x510adf % 32;
        if (!_0x4e61b2(_0x510adf, _0x179182, _0x211857, _0x89b7eb)) {
          continue;
        }
        var _0x230c75 = _0x4de3dc.getStream(_0x510adf);
        if (!_0x230c75) {
          throw new _0x4de3dc.ErrnoError(8);
        }
        var _0x446459 = _0x29f6ac.DEFAULT_POLLMASK;
        if (_0x230c75.stream_ops.poll) {
          _0x446459 = _0x230c75.stream_ops.poll(_0x230c75);
        }
        if (_0x446459 & 1 && _0x4e61b2(_0x510adf, _0x5ad3c2, _0x267d78, _0x89b7eb)) {
          if (_0x510adf < 32) {
            _0x1c1a7b = _0x1c1a7b | _0x89b7eb;
          } else {
            _0x3e21a0 = _0x3e21a0 | _0x89b7eb;
          }
          _0x4fd4d4++;
        }
        if (_0x446459 & 4 && _0x4e61b2(_0x510adf, _0x114bd2, _0x3c644f, _0x89b7eb)) {
          if (_0x510adf < 32) {
            _0x2753f0 = _0x2753f0 | _0x89b7eb;
          } else {
            _0x3e9950 = _0x3e9950 | _0x89b7eb;
          }
          _0x4fd4d4++;
        }
        if (_0x446459 & 2 && _0x4e61b2(_0x510adf, _0x1e4eb5, _0x3f9b28, _0x89b7eb)) {
          if (_0x510adf < 32) {
            _0x483772 = _0x483772 | _0x89b7eb;
          } else {
            _0x3355cd = _0x3355cd | _0x89b7eb;
          }
          _0x4fd4d4++;
        }
      }
      if (_0x2dc951) {
        _0x38db74[_0x2dc951 >> 2] = _0x1c1a7b;
        _0x38db74[_0x2dc951 + 4 >> 2] = _0x3e21a0;
      }
      if (_0x1ff745) {
        _0x38db74[_0x1ff745 >> 2] = _0x2753f0;
        _0x38db74[_0x1ff745 + 4 >> 2] = _0x3e9950;
      }
      if (_0x12d0c9) {
        _0x38db74[_0x12d0c9 >> 2] = _0x483772;
        _0x38db74[_0x12d0c9 + 4 >> 2] = _0x3355cd;
      }
      return _0x4fd4d4;
    } catch (_0x4fa66a) {
      if (typeof _0x4de3dc === "undefined" || !(_0x4fa66a instanceof _0x4de3dc.ErrnoError)) {
        _0x5d461b(_0x4fa66a);
      }
      return -_0x4fa66a.errno;
    }
  }
  var _0x3fe1cc = {
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
  var _0x3ee0ec = {
    mount: function (_0xf35a8f) {
      _0x25e483.websocket = _0x25e483.websocket && typeof _0x25e483.websocket === "object" ? _0x25e483.websocket : {};
      _0x25e483.websocket._callbacks = {};
      _0x25e483.websocket.on = function (_0x58b990, _0x1f7413) {
        if (typeof _0x1f7413 === "function") {
          this._callbacks[_0x58b990] = _0x1f7413;
        }
        return this;
      };
      _0x25e483.websocket.emit = function (_0x1b07df, _0xbe1a3d) {
        if (typeof this._callbacks[_0x1b07df] === "function") {
          this._callbacks[_0x1b07df].call(this, _0xbe1a3d);
        }
      };
      return _0x4de3dc.createNode(null, "/", 16895, 0);
    },
    createSocket: function (_0x108928, _0x4816a6, _0x555b9e) {
      _0x4816a6 &= ~526336;
      var _0x69cbaa = _0x4816a6 == 1;
      if (_0x555b9e) {
        _0x37a78f(_0x69cbaa == (_0x555b9e == 6));
      }
      var _0x1f7680 = {
        family: _0x108928,
        type: _0x4816a6,
        protocol: _0x555b9e,
        server: null,
        error: null,
        peers: {},
        pending: [],
        recv_queue: [],
        sock_ops: _0x3ee0ec.websocket_sock_ops
      };
      var _0x2e6ba4 = _0x3ee0ec.nextname();
      var _0x42cb55 = _0x4de3dc.createNode(_0x3ee0ec.root, _0x2e6ba4, 49152, 0);
      _0x42cb55.sock = _0x1f7680;
      var _0x26a550 = _0x4de3dc.createStream({
        path: _0x2e6ba4,
        node: _0x42cb55,
        flags: 2,
        seekable: false,
        stream_ops: _0x3ee0ec.stream_ops
      });
      _0x1f7680.stream = _0x26a550;
      return _0x1f7680;
    },
    getSocket: function (_0x30d84a) {
      var _0x192c89 = _0x4de3dc.getStream(_0x30d84a);
      if (!_0x192c89 || !_0x4de3dc.isSocket(_0x192c89.node.mode)) {
        return null;
      }
      return _0x192c89.node.sock;
    },
    stream_ops: {
      poll: function (_0xcabfa4) {
        var _0x1905d0 = _0xcabfa4.node.sock;
        return _0x1905d0.sock_ops.poll(_0x1905d0);
      },
      ioctl: function (_0x5b5cc5, _0x248637, _0x521abe) {
        var _0x15bbb1 = _0x5b5cc5.node.sock;
        return _0x15bbb1.sock_ops.ioctl(_0x15bbb1, _0x248637, _0x521abe);
      },
      read: function (_0x40a941, _0x1ae099, _0x212096, _0x10978a, _0x4a9bb6) {
        var _0x12a8b0 = _0x40a941.node.sock;
        var _0x20ec4e = _0x12a8b0.sock_ops.recvmsg(_0x12a8b0, _0x10978a);
        if (!_0x20ec4e) {
          return 0;
        }
        _0x1ae099.set(_0x20ec4e.buffer, _0x212096);
        return _0x20ec4e.buffer.length;
      },
      write: function (_0x3ed341, _0x1aefb1, _0x5f34dc, _0x234e35, _0x4138c4) {
        var _0x231007 = _0x3ed341.node.sock;
        return _0x231007.sock_ops.sendmsg(_0x231007, _0x1aefb1, _0x5f34dc, _0x234e35);
      },
      close: function (_0x389de2) {
        var _0x22d4dc = _0x389de2.node.sock;
        _0x22d4dc.sock_ops.close(_0x22d4dc);
      }
    },
    nextname: function () {
      if (!_0x3ee0ec.nextname.current) {
        _0x3ee0ec.nextname.current = 0;
      }
      return "socket[" + _0x3ee0ec.nextname.current++ + "]";
    },
    websocket_sock_ops: {
      createPeer: function (_0x4fb90c, _0x143b82, _0x1cf565) {
        var _0x4cd6df;
        if (typeof _0x143b82 === "object") {
          _0x4cd6df = _0x143b82;
          _0x143b82 = null;
          _0x1cf565 = null;
        }
        if (_0x4cd6df) {
          if (_0x4cd6df._socket) {
            _0x143b82 = _0x4cd6df._socket.remoteAddress;
            _0x1cf565 = _0x4cd6df._socket.remotePort;
          } else {
            var _0x25dfec = /ws[s]?:\/\/([^:]+):(\d+)/.exec(_0x4cd6df.url);
            if (!_0x25dfec) {
              throw new Error("WebSocket URL must be in the format ws(s)://address:port");
            }
            _0x143b82 = _0x25dfec[1];
            _0x1cf565 = parseInt(_0x25dfec[2], 10);
          }
        } else {
          try {
            var _0x14ce93 = _0x25e483.websocket && typeof _0x25e483.websocket === "object";
            var _0x2e7473 = "ws:#".replace("#", "//");
            if (_0x14ce93) {
              if (typeof _0x25e483.websocket.url === "string") {
                _0x2e7473 = _0x25e483.websocket.url;
              }
            }
            if (_0x2e7473 === "ws://" || _0x2e7473 === "wss://") {
              var _0x30f07d = _0x143b82.split("/");
              _0x2e7473 = _0x2e7473 + _0x30f07d[0] + ":" + _0x1cf565 + "/" + _0x30f07d.slice(1).join("/");
            }
            var _0x2f4072 = "binary";
            if (_0x14ce93) {
              if (typeof _0x25e483.websocket.subprotocol === "string") {
                _0x2f4072 = _0x25e483.websocket.subprotocol;
              }
            }
            var _0x506d69 = undefined;
            if (_0x2f4072 !== "null") {
              _0x2f4072 = _0x2f4072.replace(/^ +| +$/g, "").split(/ *, */);
              _0x506d69 = _0x4b3166 ? {
                protocol: _0x2f4072.toString()
              } : _0x2f4072;
            }
            if (_0x14ce93 && _0x25e483.websocket.subprotocol === null) {
              _0x2f4072 = "null";
              _0x506d69 = undefined;
            }
            var _0x55cc51;
            if (_0x4b3166) {
              _0x55cc51 = require("ws");
            } else {
              _0x55cc51 = WebSocket;
            }
            _0x4cd6df = new _0x55cc51(_0x2e7473, _0x506d69);
            _0x4cd6df.binaryType = "arraybuffer";
          } catch (_0x290e95) {
            throw new _0x4de3dc.ErrnoError(_0x3fe1cc.EHOSTUNREACH);
          }
        }
        var _0x4a0aef = {
          addr: _0x143b82,
          port: _0x1cf565,
          socket: _0x4cd6df,
          dgram_send_queue: []
        };
        _0x3ee0ec.websocket_sock_ops.addPeer(_0x4fb90c, _0x4a0aef);
        _0x3ee0ec.websocket_sock_ops.handlePeerEvents(_0x4fb90c, _0x4a0aef);
        if (_0x4fb90c.type === 2 && typeof _0x4fb90c.sport !== "undefined") {
          _0x4a0aef.dgram_send_queue.push(new Uint8Array([255, 255, 255, 255, "p".charCodeAt(0), "o".charCodeAt(0), "r".charCodeAt(0), "t".charCodeAt(0), (_0x4fb90c.sport & 65280) >> 8, _0x4fb90c.sport & 255]));
        }
        return _0x4a0aef;
      },
      getPeer: function (_0x9d7d16, _0x4198e0, _0x1eaee7) {
        return _0x9d7d16.peers[_0x4198e0 + ":" + _0x1eaee7];
      },
      addPeer: function (_0x9e70b8, _0x134ff3) {
        _0x9e70b8.peers[_0x134ff3.addr + ":" + _0x134ff3.port] = _0x134ff3;
      },
      removePeer: function (_0x23e798, _0x42d9e8) {
        delete _0x23e798.peers[_0x42d9e8.addr + ":" + _0x42d9e8.port];
      },
      handlePeerEvents: function (_0x1dc78d, _0x532aa7) {
        var _0x4751c4 = true;
        function _0x109ae2() {
          _0x25e483.websocket.emit("open", _0x1dc78d.stream.fd);
          try {
            var _0x163457 = _0x532aa7.dgram_send_queue.shift();
            while (_0x163457) {
              _0x532aa7.socket.send(_0x163457);
              _0x163457 = _0x532aa7.dgram_send_queue.shift();
            }
          } catch (_0x47642c) {
            _0x532aa7.socket.close();
          }
        }
        function _0xfaf8d9(_0x41d133) {
          if (typeof _0x41d133 === "string") {
            var _0x1f204c = new TextEncoder();
            _0x41d133 = _0x1f204c.encode(_0x41d133);
          } else {
            _0x37a78f(_0x41d133.byteLength !== undefined);
            if (_0x41d133.byteLength == 0) {
              return;
            } else {
              _0x41d133 = new Uint8Array(_0x41d133);
            }
          }
          var _0x56ab3b = _0x4751c4;
          _0x4751c4 = false;
          if (_0x56ab3b && _0x41d133.length === 10 && _0x41d133[0] === 255 && _0x41d133[1] === 255 && _0x41d133[2] === 255 && _0x41d133[3] === 255 && _0x41d133[4] === "p".charCodeAt(0) && _0x41d133[5] === "o".charCodeAt(0) && _0x41d133[6] === "r".charCodeAt(0) && _0x41d133[7] === "t".charCodeAt(0)) {
            var _0x234255 = _0x41d133[8] << 8 | _0x41d133[9];
            _0x3ee0ec.websocket_sock_ops.removePeer(_0x1dc78d, _0x532aa7);
            _0x532aa7.port = _0x234255;
            _0x3ee0ec.websocket_sock_ops.addPeer(_0x1dc78d, _0x532aa7);
            return;
          }
          _0x1dc78d.recv_queue.push({
            addr: _0x532aa7.addr,
            port: _0x532aa7.port,
            data: _0x41d133
          });
          _0x25e483.websocket.emit("message", _0x1dc78d.stream.fd);
        }
        if (_0x4b3166) {
          _0x532aa7.socket.on("open", _0x109ae2);
          _0x532aa7.socket.on("message", function (_0x2f6119, _0x476fdc) {
            if (!_0x476fdc.binary) {
              return;
            }
            _0xfaf8d9(new Uint8Array(_0x2f6119).buffer);
          });
          _0x532aa7.socket.on("close", function () {
            _0x25e483.websocket.emit("close", _0x1dc78d.stream.fd);
          });
          _0x532aa7.socket.on("error", function (_0x4d15da) {
            _0x1dc78d.error = _0x3fe1cc.ECONNREFUSED;
            _0x25e483.websocket.emit("error", [_0x1dc78d.stream.fd, _0x1dc78d.error, "ECONNREFUSED: Connection refused"]);
          });
        } else {
          _0x532aa7.socket.onopen = _0x109ae2;
          _0x532aa7.socket.onclose = function () {
            _0x25e483.websocket.emit("close", _0x1dc78d.stream.fd);
          };
          _0x532aa7.socket.onmessage = function _0xed7db1(_0x4c7398) {
            _0xfaf8d9(_0x4c7398.data);
          };
          _0x532aa7.socket.onerror = function (_0x5258a5) {
            _0x1dc78d.error = _0x3fe1cc.ECONNREFUSED;
            _0x25e483.websocket.emit("error", [_0x1dc78d.stream.fd, _0x1dc78d.error, "ECONNREFUSED: Connection refused"]);
          };
        }
      },
      poll: function (_0x27e9fb) {
        if (_0x27e9fb.type === 1 && _0x27e9fb.server) {
          if (_0x27e9fb.pending.length) {
            return 65;
          } else {
            return 0;
          }
        }
        var _0x5cf2fb = 0;
        var _0x525d59 = _0x27e9fb.type === 1 ? _0x3ee0ec.websocket_sock_ops.getPeer(_0x27e9fb, _0x27e9fb.daddr, _0x27e9fb.dport) : null;
        if (_0x27e9fb.recv_queue.length || !_0x525d59 || _0x525d59 && _0x525d59.socket.readyState === _0x525d59.socket.CLOSING || _0x525d59 && _0x525d59.socket.readyState === _0x525d59.socket.CLOSED) {
          _0x5cf2fb |= 65;
        }
        if (!_0x525d59 || _0x525d59 && _0x525d59.socket.readyState === _0x525d59.socket.OPEN) {
          _0x5cf2fb |= 4;
        }
        if (_0x525d59 && _0x525d59.socket.readyState === _0x525d59.socket.CLOSING || _0x525d59 && _0x525d59.socket.readyState === _0x525d59.socket.CLOSED) {
          _0x5cf2fb |= 16;
        }
        return _0x5cf2fb;
      },
      ioctl: function (_0x5cc2c0, _0x1d6988, _0x51e809) {
        switch (_0x1d6988) {
          case 21531:
            var _0x46daf1 = 0;
            if (_0x5cc2c0.recv_queue.length) {
              _0x46daf1 = _0x5cc2c0.recv_queue[0].data.length;
            }
            _0x38db74[_0x51e809 >> 2] = _0x46daf1;
            return 0;
          default:
            return _0x3fe1cc.EINVAL;
        }
      },
      close: function (_0x2a7862) {
        if (_0x2a7862.server) {
          try {
            _0x2a7862.server.close();
          } catch (_0x28f738) {}
          _0x2a7862.server = null;
        }
        var _0x8cc2e3 = Object.keys(_0x2a7862.peers);
        for (var _0xb1b68d = 0; _0xb1b68d < _0x8cc2e3.length; _0xb1b68d++) {
          var _0xab1bdd = _0x2a7862.peers[_0x8cc2e3[_0xb1b68d]];
          try {
            _0xab1bdd.socket.close();
          } catch (_0x57f73c) {}
          _0x3ee0ec.websocket_sock_ops.removePeer(_0x2a7862, _0xab1bdd);
        }
        return 0;
      },
      bind: function (_0x23cc12, _0x76df7c, _0xce1260) {
        if (typeof _0x23cc12.saddr !== "undefined" || typeof _0x23cc12.sport !== "undefined") {
          throw new _0x4de3dc.ErrnoError(_0x3fe1cc.EINVAL);
        }
        _0x23cc12.saddr = _0x76df7c;
        _0x23cc12.sport = _0xce1260;
        if (_0x23cc12.type === 2) {
          if (_0x23cc12.server) {
            _0x23cc12.server.close();
            _0x23cc12.server = null;
          }
          try {
            _0x23cc12.sock_ops.listen(_0x23cc12, 0);
          } catch (_0x516984) {
            if (!(_0x516984 instanceof _0x4de3dc.ErrnoError)) {
              throw _0x516984;
            }
            if (_0x516984.errno !== _0x3fe1cc.EOPNOTSUPP) {
              throw _0x516984;
            }
          }
        }
      },
      connect: function (_0x1c7981, _0x3a7857, _0x2fa9ec) {
        if (_0x1c7981.server) {
          throw new _0x4de3dc.ErrnoError(_0x3fe1cc.EOPNOTSUPP);
        }
        if (typeof _0x1c7981.daddr !== "undefined" && typeof _0x1c7981.dport !== "undefined") {
          var _0x28778b = _0x3ee0ec.websocket_sock_ops.getPeer(_0x1c7981, _0x1c7981.daddr, _0x1c7981.dport);
          if (_0x28778b) {
            if (_0x28778b.socket.readyState === _0x28778b.socket.CONNECTING) {
              throw new _0x4de3dc.ErrnoError(_0x3fe1cc.EALREADY);
            } else {
              throw new _0x4de3dc.ErrnoError(_0x3fe1cc.EISCONN);
            }
          }
        }
        var _0x3df7e2 = _0x3ee0ec.websocket_sock_ops.createPeer(_0x1c7981, _0x3a7857, _0x2fa9ec);
        _0x1c7981.daddr = _0x3df7e2.addr;
        _0x1c7981.dport = _0x3df7e2.port;
        throw new _0x4de3dc.ErrnoError(_0x3fe1cc.EINPROGRESS);
      },
      listen: function (_0x56fe7c, _0x5e23e9) {
        if (!_0x4b3166) {
          throw new _0x4de3dc.ErrnoError(_0x3fe1cc.EOPNOTSUPP);
        }
        if (_0x56fe7c.server) {
          throw new _0x4de3dc.ErrnoError(_0x3fe1cc.EINVAL);
        }
        var _0x7672e1 = require("ws").Server;
        var _0x598f11 = _0x56fe7c.saddr;
        _0x56fe7c.server = new _0x7672e1({
          host: _0x598f11,
          port: _0x56fe7c.sport
        });
        _0x25e483.websocket.emit("listen", _0x56fe7c.stream.fd);
        _0x56fe7c.server.on("connection", function (_0x39763c) {
          if (_0x56fe7c.type === 1) {
            var _0x323dee = _0x3ee0ec.createSocket(_0x56fe7c.family, _0x56fe7c.type, _0x56fe7c.protocol);
            var _0x3c69ab = _0x3ee0ec.websocket_sock_ops.createPeer(_0x323dee, _0x39763c);
            _0x323dee.daddr = _0x3c69ab.addr;
            _0x323dee.dport = _0x3c69ab.port;
            _0x56fe7c.pending.push(_0x323dee);
            _0x25e483.websocket.emit("connection", _0x323dee.stream.fd);
          } else {
            _0x3ee0ec.websocket_sock_ops.createPeer(_0x56fe7c, _0x39763c);
            _0x25e483.websocket.emit("connection", _0x56fe7c.stream.fd);
          }
        });
        _0x56fe7c.server.on("closed", function () {
          _0x25e483.websocket.emit("close", _0x56fe7c.stream.fd);
          _0x56fe7c.server = null;
        });
        _0x56fe7c.server.on("error", function (_0x5aaf3b) {
          _0x56fe7c.error = _0x3fe1cc.EHOSTUNREACH;
          _0x25e483.websocket.emit("error", [_0x56fe7c.stream.fd, _0x56fe7c.error, "EHOSTUNREACH: Host is unreachable"]);
        });
      },
      accept: function (_0x1d6e0a) {
        if (!_0x1d6e0a.server) {
          throw new _0x4de3dc.ErrnoError(_0x3fe1cc.EINVAL);
        }
        var _0xa4faa = _0x1d6e0a.pending.shift();
        _0xa4faa.stream.flags = _0x1d6e0a.stream.flags;
        return _0xa4faa;
      },
      getname: function (_0x506879, _0x41a6cc) {
        var _0x1eb295;
        var _0x548a5d;
        if (_0x41a6cc) {
          if (_0x506879.daddr === undefined || _0x506879.dport === undefined) {
            throw new _0x4de3dc.ErrnoError(_0x3fe1cc.ENOTCONN);
          }
          _0x1eb295 = _0x506879.daddr;
          _0x548a5d = _0x506879.dport;
        } else {
          _0x1eb295 = _0x506879.saddr || 0;
          _0x548a5d = _0x506879.sport || 0;
        }
        return {
          addr: _0x1eb295,
          port: _0x548a5d
        };
      },
      sendmsg: function (_0x42e510, _0x2f282e, _0x1f59d7, _0x117595, _0x2e0fb8, _0x30c0bc) {
        if (_0x42e510.type === 2) {
          if (_0x2e0fb8 === undefined || _0x30c0bc === undefined) {
            _0x2e0fb8 = _0x42e510.daddr;
            _0x30c0bc = _0x42e510.dport;
          }
          if (_0x2e0fb8 === undefined || _0x30c0bc === undefined) {
            throw new _0x4de3dc.ErrnoError(_0x3fe1cc.EDESTADDRREQ);
          }
        } else {
          _0x2e0fb8 = _0x42e510.daddr;
          _0x30c0bc = _0x42e510.dport;
        }
        var _0x1f3ac1 = _0x3ee0ec.websocket_sock_ops.getPeer(_0x42e510, _0x2e0fb8, _0x30c0bc);
        if (_0x42e510.type === 1) {
          if (!_0x1f3ac1 || _0x1f3ac1.socket.readyState === _0x1f3ac1.socket.CLOSING || _0x1f3ac1.socket.readyState === _0x1f3ac1.socket.CLOSED) {
            throw new _0x4de3dc.ErrnoError(_0x3fe1cc.ENOTCONN);
          } else if (_0x1f3ac1.socket.readyState === _0x1f3ac1.socket.CONNECTING) {
            throw new _0x4de3dc.ErrnoError(_0x3fe1cc.EAGAIN);
          }
        }
        if (ArrayBuffer.isView(_0x2f282e)) {
          _0x1f59d7 += _0x2f282e.byteOffset;
          _0x2f282e = _0x2f282e.buffer;
        }
        var _0x4e5c0a;
        _0x4e5c0a = _0x2f282e.slice(_0x1f59d7, _0x1f59d7 + _0x117595);
        if (_0x42e510.type === 2) {
          if (!_0x1f3ac1 || _0x1f3ac1.socket.readyState !== _0x1f3ac1.socket.OPEN) {
            if (!_0x1f3ac1 || _0x1f3ac1.socket.readyState === _0x1f3ac1.socket.CLOSING || _0x1f3ac1.socket.readyState === _0x1f3ac1.socket.CLOSED) {
              _0x1f3ac1 = _0x3ee0ec.websocket_sock_ops.createPeer(_0x42e510, _0x2e0fb8, _0x30c0bc);
            }
            _0x1f3ac1.dgram_send_queue.push(_0x4e5c0a);
            return _0x117595;
          }
        }
        try {
          _0x1f3ac1.socket.send(_0x4e5c0a);
          return _0x117595;
        } catch (_0x28fa54) {
          throw new _0x4de3dc.ErrnoError(_0x3fe1cc.EINVAL);
        }
      },
      recvmsg: function (_0x339b0b, _0x131b2a) {
        if (_0x339b0b.type === 1 && _0x339b0b.server) {
          throw new _0x4de3dc.ErrnoError(_0x3fe1cc.ENOTCONN);
        }
        var _0x290010 = _0x339b0b.recv_queue.shift();
        if (!_0x290010) {
          if (_0x339b0b.type === 1) {
            var _0x3dc109 = _0x3ee0ec.websocket_sock_ops.getPeer(_0x339b0b, _0x339b0b.daddr, _0x339b0b.dport);
            if (!_0x3dc109) {
              throw new _0x4de3dc.ErrnoError(_0x3fe1cc.ENOTCONN);
            } else if (_0x3dc109.socket.readyState === _0x3dc109.socket.CLOSING || _0x3dc109.socket.readyState === _0x3dc109.socket.CLOSED) {
              return null;
            } else {
              throw new _0x4de3dc.ErrnoError(_0x3fe1cc.EAGAIN);
            }
          } else {
            throw new _0x4de3dc.ErrnoError(_0x3fe1cc.EAGAIN);
          }
        }
        var _0x3632ff = _0x290010.data.byteLength || _0x290010.data.length;
        var _0x4292e7 = _0x290010.data.byteOffset || 0;
        var _0xd9118e = _0x290010.data.buffer || _0x290010.data;
        var _0x2c0a11 = Math.min(_0x131b2a, _0x3632ff);
        var _0x14f1cc = {
          buffer: new Uint8Array(_0xd9118e, _0x4292e7, _0x2c0a11),
          addr: _0x290010.addr,
          port: _0x290010.port
        };
        if (_0x339b0b.type === 1 && _0x2c0a11 < _0x3632ff) {
          var _0x489ce7 = _0x3632ff - _0x2c0a11;
          _0x290010.data = new Uint8Array(_0xd9118e, _0x4292e7 + _0x2c0a11, _0x489ce7);
          _0x339b0b.recv_queue.unshift(_0x290010);
        }
        return _0x14f1cc;
      }
    }
  };
  function _0x2f1b4c(_0x3c68c3) {
    var _0x326980 = _0x3ee0ec.getSocket(_0x3c68c3);
    if (!_0x326980) {
      throw new _0x4de3dc.ErrnoError(8);
    }
    return _0x326980;
  }
  function _0x54e9de(_0x3a0dd7) {
    _0x38db74[_0x1bc4a9() >> 2] = _0x3a0dd7;
    return _0x3a0dd7;
  }
  function _0x204987(_0xbcfacf) {
    var _0x31b35c = _0xbcfacf.split(".");
    for (var _0x225402 = 0; _0x225402 < 4; _0x225402++) {
      var _0x109442 = Number(_0x31b35c[_0x225402]);
      if (isNaN(_0x109442)) {
        return null;
      }
      _0x31b35c[_0x225402] = _0x109442;
    }
    return (_0x31b35c[0] | _0x31b35c[1] << 8 | _0x31b35c[2] << 16 | _0x31b35c[3] << 24) >>> 0;
  }
  function _0x21a265(_0x324764) {
    return parseInt(_0x324764);
  }
  function _0x4712ec(_0x5a9ccc) {
    var _0x51aacd;
    var _0x1428ff;
    var _0x21dcd2;
    var _0x593838;
    var _0xa29be4 = /^((?=.*::)(?!.*::.+::)(::)?([\dA-F]{1,4}:(:|\b)|){5}|([\dA-F]{1,4}:){6})((([\dA-F]{1,4}((?!\3)::|:\b|$))|(?!\2\3)){2}|(((2[0-4]|1\d|[1-9])?\d|25[0-5])\.?\b){4})$/i;
    var _0x10a57d = [];
    if (!_0xa29be4.test(_0x5a9ccc)) {
      return null;
    }
    if (_0x5a9ccc === "::") {
      return [0, 0, 0, 0, 0, 0, 0, 0];
    }
    if (_0x5a9ccc.startsWith("::")) {
      _0x5a9ccc = _0x5a9ccc.replace("::", "Z:");
    } else {
      _0x5a9ccc = _0x5a9ccc.replace("::", ":Z:");
    }
    if (_0x5a9ccc.indexOf(".") > 0) {
      _0x5a9ccc = _0x5a9ccc.replace(new RegExp("[.]", "g"), ":");
      _0x51aacd = _0x5a9ccc.split(":");
      _0x51aacd[_0x51aacd.length - 4] = _0x21a265(_0x51aacd[_0x51aacd.length - 4]) + _0x21a265(_0x51aacd[_0x51aacd.length - 3]) * 256;
      _0x51aacd[_0x51aacd.length - 3] = _0x21a265(_0x51aacd[_0x51aacd.length - 2]) + _0x21a265(_0x51aacd[_0x51aacd.length - 1]) * 256;
      _0x51aacd = _0x51aacd.slice(0, _0x51aacd.length - 2);
    } else {
      _0x51aacd = _0x5a9ccc.split(":");
    }
    _0x21dcd2 = 0;
    _0x593838 = 0;
    for (_0x1428ff = 0; _0x1428ff < _0x51aacd.length; _0x1428ff++) {
      if (typeof _0x51aacd[_0x1428ff] === "string") {
        if (_0x51aacd[_0x1428ff] === "Z") {
          for (_0x593838 = 0; _0x593838 < 8 - _0x51aacd.length + 1; _0x593838++) {
            _0x10a57d[_0x1428ff + _0x593838] = 0;
          }
          _0x21dcd2 = _0x593838 - 1;
        } else {
          _0x10a57d[_0x1428ff + _0x21dcd2] = _0xb5b8aa(parseInt(_0x51aacd[_0x1428ff], 16));
        }
      } else {
        _0x10a57d[_0x1428ff + _0x21dcd2] = _0x51aacd[_0x1428ff];
      }
    }
    return [_0x10a57d[1] << 16 | _0x10a57d[0], _0x10a57d[3] << 16 | _0x10a57d[2], _0x10a57d[5] << 16 | _0x10a57d[4], _0x10a57d[7] << 16 | _0x10a57d[6]];
  }
  function _0x13106a(_0x8c964f, _0x4bd801, _0x362b20, _0x1413e5, _0xb337e7) {
    switch (_0x4bd801) {
      case 2:
        _0x362b20 = _0x204987(_0x362b20);
        if (_0xb337e7) {
          _0x38db74[_0xb337e7 >> 2] = 16;
        }
        _0x1465be[_0x8c964f >> 1] = _0x4bd801;
        _0x38db74[_0x8c964f + 4 >> 2] = _0x362b20;
        _0x1465be[_0x8c964f + 2 >> 1] = _0xb5b8aa(_0x1413e5);
        _0x3942a9 = [0, (_0xd0ad0c = 0, +Math.abs(_0xd0ad0c) >= 1 ? _0xd0ad0c > 0 ? (Math.min(+Math.floor(_0xd0ad0c / 4294967296), 4294967295) | 0) >>> 0 : ~~+Math.ceil((_0xd0ad0c - +(~~_0xd0ad0c >>> 0)) / 4294967296) >>> 0 : 0)];
        _0x38db74[_0x8c964f + 8 >> 2] = _0x3942a9[0];
        _0x38db74[_0x8c964f + 12 >> 2] = _0x3942a9[1];
        break;
      case 10:
        _0x362b20 = _0x4712ec(_0x362b20);
        if (_0xb337e7) {
          _0x38db74[_0xb337e7 >> 2] = 28;
        }
        _0x38db74[_0x8c964f >> 2] = _0x4bd801;
        _0x38db74[_0x8c964f + 8 >> 2] = _0x362b20[0];
        _0x38db74[_0x8c964f + 12 >> 2] = _0x362b20[1];
        _0x38db74[_0x8c964f + 16 >> 2] = _0x362b20[2];
        _0x38db74[_0x8c964f + 20 >> 2] = _0x362b20[3];
        _0x1465be[_0x8c964f + 2 >> 1] = _0xb5b8aa(_0x1413e5);
        _0x38db74[_0x8c964f + 4 >> 2] = 0;
        _0x38db74[_0x8c964f + 24 >> 2] = 0;
        break;
      default:
        return 5;
    }
    return 0;
  }
  var _0x1c41cd = {
    address_map: {
      id: 1,
      addrs: {},
      names: {}
    },
    lookup_name: function (_0x503b71) {
      var _0x4042b2 = _0x204987(_0x503b71);
      if (_0x4042b2 !== null) {
        return _0x503b71;
      }
      _0x4042b2 = _0x4712ec(_0x503b71);
      if (_0x4042b2 !== null) {
        return _0x503b71;
      }
      var _0x2b9724;
      if (_0x1c41cd.address_map.addrs[_0x503b71]) {
        _0x2b9724 = _0x1c41cd.address_map.addrs[_0x503b71];
      } else {
        var _0x4d9b37 = _0x1c41cd.address_map.id++;
        _0x37a78f(_0x4d9b37 < 65535, "exceeded max address mappings of 65535");
        _0x2b9724 = "172.29." + (_0x4d9b37 & 255) + "." + (_0x4d9b37 & 65280);
        _0x1c41cd.address_map.names[_0x2b9724] = _0x503b71;
        _0x1c41cd.address_map.addrs[_0x503b71] = _0x2b9724;
      }
      return _0x2b9724;
    },
    lookup_addr: function (_0xaa027c) {
      if (_0x1c41cd.address_map.names[_0xaa027c]) {
        return _0x1c41cd.address_map.names[_0xaa027c];
      }
      return null;
    }
  };
  function _0x38464b(_0x1adf71, _0x35353c, _0x366c0b, _0x23133c) {
    try {
      var _0x3dec5e = _0x2f1b4c(_0x1adf71);
      var _0x2c1056 = _0x3dec5e.sock_ops.accept(_0x3dec5e);
      if (_0x35353c) {
        var _0x3a8f13 = _0x13106a(_0x35353c, _0x2c1056.family, _0x1c41cd.lookup_name(_0x2c1056.daddr), _0x2c1056.dport, _0x366c0b);
      }
      return _0x2c1056.stream.fd;
    } catch (_0x3fe898) {
      if (typeof _0x4de3dc === "undefined" || !(_0x3fe898 instanceof _0x4de3dc.ErrnoError)) {
        _0x5d461b(_0x3fe898);
      }
      return -_0x3fe898.errno;
    }
  }
  function _0x18aa8c(_0x42ec03, _0x4df558) {
    try {
      _0x42ec03 = _0x29f6ac.getStr(_0x42ec03);
      return _0x29f6ac.doAccess(_0x42ec03, _0x4df558);
    } catch (_0x539f9b) {
      if (typeof _0x4de3dc === "undefined" || !(_0x539f9b instanceof _0x4de3dc.ErrnoError)) {
        _0x5d461b(_0x539f9b);
      }
      return -_0x539f9b.errno;
    }
  }
  function _0x7256f5(_0x1ca032) {
    return (_0x1ca032 & 255) + "." + (_0x1ca032 >> 8 & 255) + "." + (_0x1ca032 >> 16 & 255) + "." + (_0x1ca032 >> 24 & 255);
  }
  function _0x432da4(_0x5acd31) {
    var _0x25b76d = "";
    var _0x3d8774 = 0;
    var _0x28c0c0 = 0;
    var _0x191e73 = 0;
    var _0x4aa9ae = 0;
    var _0x26da8b = 0;
    var _0x18928f = 0;
    var _0x2052e9 = [_0x5acd31[0] & 65535, _0x5acd31[0] >> 16, _0x5acd31[1] & 65535, _0x5acd31[1] >> 16, _0x5acd31[2] & 65535, _0x5acd31[2] >> 16, _0x5acd31[3] & 65535, _0x5acd31[3] >> 16];
    var _0x985268 = true;
    var _0x2305ef = "";
    for (_0x18928f = 0; _0x18928f < 5; _0x18928f++) {
      if (_0x2052e9[_0x18928f] !== 0) {
        _0x985268 = false;
        break;
      }
    }
    if (_0x985268) {
      _0x2305ef = _0x7256f5(_0x2052e9[6] | _0x2052e9[7] << 16);
      if (_0x2052e9[5] === -1) {
        _0x25b76d = "::ffff:";
        _0x25b76d += _0x2305ef;
        return _0x25b76d;
      }
      if (_0x2052e9[5] === 0) {
        _0x25b76d = "::";
        if (_0x2305ef === "0.0.0.0") {
          _0x2305ef = "";
        }
        if (_0x2305ef === "0.0.0.1") {
          _0x2305ef = "1";
        }
        _0x25b76d += _0x2305ef;
        return _0x25b76d;
      }
    }
    for (_0x3d8774 = 0; _0x3d8774 < 8; _0x3d8774++) {
      if (_0x2052e9[_0x3d8774] === 0) {
        if (_0x3d8774 - _0x191e73 > 1) {
          _0x26da8b = 0;
        }
        _0x191e73 = _0x3d8774;
        _0x26da8b++;
      }
      if (_0x26da8b > _0x28c0c0) {
        _0x28c0c0 = _0x26da8b;
        _0x4aa9ae = _0x3d8774 - _0x28c0c0 + 1;
      }
    }
    for (_0x3d8774 = 0; _0x3d8774 < 8; _0x3d8774++) {
      if (_0x28c0c0 > 1) {
        if (_0x2052e9[_0x3d8774] === 0 && _0x3d8774 >= _0x4aa9ae && _0x3d8774 < _0x4aa9ae + _0x28c0c0) {
          if (_0x3d8774 === _0x4aa9ae) {
            _0x25b76d += ":";
            if (_0x4aa9ae === 0) {
              _0x25b76d += ":";
            }
          }
          continue;
        }
      }
      _0x25b76d += Number(_0x1fe869(_0x2052e9[_0x3d8774] & 65535)).toString(16);
      _0x25b76d += _0x3d8774 < 7 ? ":" : "";
    }
    return _0x25b76d;
  }
  function _0x137013(_0x5b21b5, _0x2f3d72) {
    var _0x3c4b2f = _0x1465be[_0x5b21b5 >> 1];
    var _0x26d920 = _0x1fe869(_0x97ba21[_0x5b21b5 + 2 >> 1]);
    var _0x876eeb;
    switch (_0x3c4b2f) {
      case 2:
        if (_0x2f3d72 !== 16) {
          return {
            errno: 28
          };
        }
        _0x876eeb = _0x38db74[_0x5b21b5 + 4 >> 2];
        _0x876eeb = _0x7256f5(_0x876eeb);
        break;
      case 10:
        if (_0x2f3d72 !== 28) {
          return {
            errno: 28
          };
        }
        _0x876eeb = [_0x38db74[_0x5b21b5 + 8 >> 2], _0x38db74[_0x5b21b5 + 12 >> 2], _0x38db74[_0x5b21b5 + 16 >> 2], _0x38db74[_0x5b21b5 + 20 >> 2]];
        _0x876eeb = _0x432da4(_0x876eeb);
        break;
      default:
        return {
          errno: 5
        };
    }
    return {
      family: _0x3c4b2f,
      addr: _0x876eeb,
      port: _0x26d920
    };
  }
  function _0x5ed11f(_0xce4968, _0x5ae674, _0x2014ea) {
    if (_0x2014ea && _0xce4968 === 0) {
      return null;
    }
    var _0x23ad5c = _0x137013(_0xce4968, _0x5ae674);
    if (_0x23ad5c.errno) {
      throw new _0x4de3dc.ErrnoError(_0x23ad5c.errno);
    }
    _0x23ad5c.addr = _0x1c41cd.lookup_addr(_0x23ad5c.addr) || _0x23ad5c.addr;
    return _0x23ad5c;
  }
  function _0x8591a8(_0x12ace4, _0x4ca2ff, _0x26f955) {
    try {
      var _0x19287d = _0x2f1b4c(_0x12ace4);
      var _0x17e76d = _0x5ed11f(_0x4ca2ff, _0x26f955);
      _0x19287d.sock_ops.bind(_0x19287d, _0x17e76d.addr, _0x17e76d.port);
      return 0;
    } catch (_0x5613a7) {
      if (typeof _0x4de3dc === "undefined" || !(_0x5613a7 instanceof _0x4de3dc.ErrnoError)) {
        _0x5d461b(_0x5613a7);
      }
      return -_0x5613a7.errno;
    }
  }
  function _0x32a248(_0x4e5444, _0x182ff7) {
    try {
      _0x4e5444 = _0x29f6ac.getStr(_0x4e5444);
      _0x4de3dc.chmod(_0x4e5444, _0x182ff7);
      return 0;
    } catch (_0x26878b) {
      if (typeof _0x4de3dc === "undefined" || !(_0x26878b instanceof _0x4de3dc.ErrnoError)) {
        _0x5d461b(_0x26878b);
      }
      return -_0x26878b.errno;
    }
  }
  function _0x59a34b(_0x44e5e6, _0x595aab, _0x2a0901) {
    try {
      var _0x2d35a4 = _0x2f1b4c(_0x44e5e6);
      var _0x286ce1 = _0x5ed11f(_0x595aab, _0x2a0901);
      _0x2d35a4.sock_ops.connect(_0x2d35a4, _0x286ce1.addr, _0x286ce1.port);
      return 0;
    } catch (_0x37ff87) {
      if (typeof _0x4de3dc === "undefined" || !(_0x37ff87 instanceof _0x4de3dc.ErrnoError)) {
        _0x5d461b(_0x37ff87);
      }
      return -_0x37ff87.errno;
    }
  }
  function _0x4c29e1(_0x3680c5, _0x137fe5) {
    try {
      var _0x1050da = _0x29f6ac.getStreamFromFD(_0x3680c5);
      if (_0x1050da.fd === _0x137fe5) {
        return _0x137fe5;
      }
      return _0x29f6ac.doDup(_0x1050da.path, _0x1050da.flags, _0x137fe5);
    } catch (_0x34969d) {
      if (typeof _0x4de3dc === "undefined" || !(_0x34969d instanceof _0x4de3dc.ErrnoError)) {
        _0x5d461b(_0x34969d);
      }
      return -_0x34969d.errno;
    }
  }
  function _0x13376d(_0xaaaa09, _0x48fc37, _0x16ddc1) {
    _0x29f6ac.varargs = _0x16ddc1;
    try {
      var _0x3a334b = _0x29f6ac.getStreamFromFD(_0xaaaa09);
      switch (_0x48fc37) {
        case 0:
          {
            var _0xae3a76 = _0x29f6ac.get();
            if (_0xae3a76 < 0) {
              return -28;
            }
            var _0x2b683b;
            _0x2b683b = _0x4de3dc.open(_0x3a334b.path, _0x3a334b.flags, 0, _0xae3a76);
            return _0x2b683b.fd;
          }
        case 1:
        case 2:
          return 0;
        case 3:
          return _0x3a334b.flags;
        case 4:
          {
            var _0xae3a76 = _0x29f6ac.get();
            _0x3a334b.flags |= _0xae3a76;
            return 0;
          }
        case 12:
          {
            var _0xae3a76 = _0x29f6ac.get();
            var _0x36ed52 = 0;
            _0x1465be[_0xae3a76 + _0x36ed52 >> 1] = 2;
            return 0;
          }
        case 13:
        case 14:
          return 0;
        case 16:
        case 8:
          return -28;
        case 9:
          _0x54e9de(28);
          return -1;
        default:
          {
            return -28;
          }
      }
    } catch (_0x432e35) {
      if (typeof _0x4de3dc === "undefined" || !(_0x432e35 instanceof _0x4de3dc.ErrnoError)) {
        _0x5d461b(_0x432e35);
      }
      return -_0x432e35.errno;
    }
  }
  function _0xa5e584(_0x4620c6, _0x2ad8e0) {
    try {
      var _0x1989ad = _0x29f6ac.getStreamFromFD(_0x4620c6);
      return _0x29f6ac.doStat(_0x4de3dc.stat, _0x1989ad.path, _0x2ad8e0);
    } catch (_0x1d4165) {
      if (typeof _0x4de3dc === "undefined" || !(_0x1d4165 instanceof _0x4de3dc.ErrnoError)) {
        _0x5d461b(_0x1d4165);
      }
      return -_0x1d4165.errno;
    }
  }
  function _0x53c34f(_0x1916f7, _0x1ba4e6, _0x44d6e3, _0x4e9f8e) {
    try {
      var _0x4b7e0e = _0x29f6ac.get64(_0x44d6e3, _0x4e9f8e);
      _0x4de3dc.ftruncate(_0x1916f7, _0x4b7e0e);
      return 0;
    } catch (_0x538290) {
      if (typeof _0x4de3dc === "undefined" || !(_0x538290 instanceof _0x4de3dc.ErrnoError)) {
        _0x5d461b(_0x538290);
      }
      return -_0x538290.errno;
    }
  }
  function _0x227efa(_0x567608, _0x149376) {
    try {
      if (_0x149376 === 0) {
        return -28;
      }
      var _0x571a4c = _0x4de3dc.cwd();
      var _0x10d7a3 = _0x576ae2(_0x571a4c);
      if (_0x149376 < _0x10d7a3 + 1) {
        return -68;
      }
      _0x517360(_0x571a4c, _0x567608, _0x149376);
      return _0x567608;
    } catch (_0x519b59) {
      if (typeof _0x4de3dc === "undefined" || !(_0x519b59 instanceof _0x4de3dc.ErrnoError)) {
        _0x5d461b(_0x519b59);
      }
      return -_0x519b59.errno;
    }
  }
  function _0x5f1822(_0x3c48fa, _0x1291d4, _0x487076) {
    try {
      var _0x4702cc = _0x29f6ac.getStreamFromFD(_0x3c48fa);
      if (!_0x4702cc.getdents) {
        _0x4702cc.getdents = _0x4de3dc.readdir(_0x4702cc.path);
      }
      var _0x32816e = 280;
      var _0x2cb790 = 0;
      var _0x4aacc0 = _0x4de3dc.llseek(_0x4702cc, 0, 1);
      var _0x33f9b6 = Math.floor(_0x4aacc0 / _0x32816e);
      while (_0x33f9b6 < _0x4702cc.getdents.length && _0x2cb790 + _0x32816e <= _0x487076) {
        var _0x3ca03e;
        var _0x1d437e;
        var _0xa0c22b = _0x4702cc.getdents[_0x33f9b6];
        if (_0xa0c22b[0] === ".") {
          _0x3ca03e = 1;
          _0x1d437e = 4;
        } else {
          var _0xbe1013 = _0x4de3dc.lookupNode(_0x4702cc.node, _0xa0c22b);
          _0x3ca03e = _0xbe1013.id;
          _0x1d437e = _0x4de3dc.isChrdev(_0xbe1013.mode) ? 2 : _0x4de3dc.isDir(_0xbe1013.mode) ? 4 : _0x4de3dc.isLink(_0xbe1013.mode) ? 10 : 8;
        }
        _0x3942a9 = [_0x3ca03e >>> 0, (_0xd0ad0c = _0x3ca03e, +Math.abs(_0xd0ad0c) >= 1 ? _0xd0ad0c > 0 ? (Math.min(+Math.floor(_0xd0ad0c / 4294967296), 4294967295) | 0) >>> 0 : ~~+Math.ceil((_0xd0ad0c - +(~~_0xd0ad0c >>> 0)) / 4294967296) >>> 0 : 0)];
        _0x38db74[_0x1291d4 + _0x2cb790 >> 2] = _0x3942a9[0];
        _0x38db74[_0x1291d4 + _0x2cb790 + 4 >> 2] = _0x3942a9[1];
        _0x3942a9 = [(_0x33f9b6 + 1) * _0x32816e >>> 0, (_0xd0ad0c = (_0x33f9b6 + 1) * _0x32816e, +Math.abs(_0xd0ad0c) >= 1 ? _0xd0ad0c > 0 ? (Math.min(+Math.floor(_0xd0ad0c / 4294967296), 4294967295) | 0) >>> 0 : ~~+Math.ceil((_0xd0ad0c - +(~~_0xd0ad0c >>> 0)) / 4294967296) >>> 0 : 0)];
        _0x38db74[_0x1291d4 + _0x2cb790 + 8 >> 2] = _0x3942a9[0];
        _0x38db74[_0x1291d4 + _0x2cb790 + 12 >> 2] = _0x3942a9[1];
        _0x1465be[_0x1291d4 + _0x2cb790 + 16 >> 1] = 280;
        _0x3b8c2f[_0x1291d4 + _0x2cb790 + 18 >> 0] = _0x1d437e;
        _0x517360(_0xa0c22b, _0x1291d4 + _0x2cb790 + 19, 256);
        _0x2cb790 += _0x32816e;
        _0x33f9b6 += 1;
      }
      _0x4de3dc.llseek(_0x4702cc, _0x33f9b6 * _0x32816e, 0);
      return _0x2cb790;
    } catch (_0x587f64) {
      if (typeof _0x4de3dc === "undefined" || !(_0x587f64 instanceof _0x4de3dc.ErrnoError)) {
        _0x5d461b(_0x587f64);
      }
      return -_0x587f64.errno;
    }
  }
  function _0x19e451() {
    return 0;
  }
  function _0x244f1d() {
    return _0x19e451();
  }
  function _0xdefdd4(_0x4b25f4, _0x4f921b, _0x700b07) {
    try {
      var _0x33e1fd = _0x2f1b4c(_0x4b25f4);
      if (!_0x33e1fd.daddr) {
        return -53;
      }
      var _0x21d396 = _0x13106a(_0x4f921b, _0x33e1fd.family, _0x1c41cd.lookup_name(_0x33e1fd.daddr), _0x33e1fd.dport, _0x700b07);
      return 0;
    } catch (_0x5c405a) {
      if (typeof _0x4de3dc === "undefined" || !(_0x5c405a instanceof _0x4de3dc.ErrnoError)) {
        _0x5d461b(_0x5c405a);
      }
      return -_0x5c405a.errno;
    }
  }
  function _0x2182aa() {
    return 42;
  }
  function _0x5b0fd9(_0xaf5bb1, _0x507461) {
    try {
      _0x5e14c3(_0x507461, 0, 136);
      _0x38db74[_0x507461 >> 2] = 1;
      _0x38db74[_0x507461 + 4 >> 2] = 2;
      _0x38db74[_0x507461 + 8 >> 2] = 3;
      _0x38db74[_0x507461 + 12 >> 2] = 4;
      return 0;
    } catch (_0x12eadf) {
      if (typeof _0x4de3dc === "undefined" || !(_0x12eadf instanceof _0x4de3dc.ErrnoError)) {
        _0x5d461b(_0x12eadf);
      }
      return -_0x12eadf.errno;
    }
  }
  function _0x4f2151(_0x7199d6, _0x2fffa0, _0x2b0bcc) {
    try {
      _0x1af4bd("__sys_getsockname " + _0x7199d6);
      var _0x5aaeb6 = _0x2f1b4c(_0x7199d6);
      var _0x35581d = _0x13106a(_0x2fffa0, _0x5aaeb6.family, _0x1c41cd.lookup_name(_0x5aaeb6.saddr || "0.0.0.0"), _0x5aaeb6.sport, _0x2b0bcc);
      return 0;
    } catch (_0x265d6d) {
      if (typeof _0x4de3dc === "undefined" || !(_0x265d6d instanceof _0x4de3dc.ErrnoError)) {
        _0x5d461b(_0x265d6d);
      }
      return -_0x265d6d.errno;
    }
  }
  function _0x885d66(_0x283088, _0x41c73c, _0x250ba6, _0x2a2194, _0x53695d) {
    try {
      var _0x25943a = _0x2f1b4c(_0x283088);
      if (_0x41c73c === 1) {
        if (_0x250ba6 === 4) {
          _0x38db74[_0x2a2194 >> 2] = _0x25943a.error;
          _0x38db74[_0x53695d >> 2] = 4;
          _0x25943a.error = null;
          return 0;
        }
      }
      return -50;
    } catch (_0x12e045) {
      if (typeof _0x4de3dc === "undefined" || !(_0x12e045 instanceof _0x4de3dc.ErrnoError)) {
        _0x5d461b(_0x12e045);
      }
      return -_0x12e045.errno;
    }
  }
  function _0x41083c() {
    return _0x19e451();
  }
  function _0x186d0d(_0x520964, _0x43061a, _0x4663df) {
    _0x29f6ac.varargs = _0x4663df;
    try {
      var _0x4a93e0 = _0x29f6ac.getStreamFromFD(_0x520964);
      switch (_0x43061a) {
        case 21509:
        case 21505:
          {
            if (!_0x4a93e0.tty) {
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
            if (!_0x4a93e0.tty) {
              return -59;
            }
            return 0;
          }
        case 21519:
          {
            if (!_0x4a93e0.tty) {
              return -59;
            }
            var _0x242acf = _0x29f6ac.get();
            _0x38db74[_0x242acf >> 2] = 0;
            return 0;
          }
        case 21520:
          {
            if (!_0x4a93e0.tty) {
              return -59;
            }
            return -28;
          }
        case 21531:
          {
            var _0x242acf = _0x29f6ac.get();
            return _0x4de3dc.ioctl(_0x4a93e0, _0x43061a, _0x242acf);
          }
        case 21523:
          {
            if (!_0x4a93e0.tty) {
              return -59;
            }
            return 0;
          }
        case 21524:
          {
            if (!_0x4a93e0.tty) {
              return -59;
            }
            return 0;
          }
        default:
          _0x5d461b("bad ioctl syscall " + _0x43061a);
      }
    } catch (_0x1c8f7c) {
      if (typeof _0x4de3dc === "undefined" || !(_0x1c8f7c instanceof _0x4de3dc.ErrnoError)) {
        _0x5d461b(_0x1c8f7c);
      }
      return -_0x1c8f7c.errno;
    }
  }
  function _0x172ffc(_0x31f2ee, _0x5aeb65) {
    try {
      var _0x3d2754 = _0x2f1b4c(_0x31f2ee);
      _0x3d2754.sock_ops.listen(_0x3d2754, _0x5aeb65);
      return 0;
    } catch (_0x16dc63) {
      if (typeof _0x4de3dc === "undefined" || !(_0x16dc63 instanceof _0x4de3dc.ErrnoError)) {
        _0x5d461b(_0x16dc63);
      }
      return -_0x16dc63.errno;
    }
  }
  function _0x578849(_0x5c99f4, _0x1dc9bc) {
    try {
      _0x5c99f4 = _0x29f6ac.getStr(_0x5c99f4);
      return _0x29f6ac.doStat(_0x4de3dc.lstat, _0x5c99f4, _0x1dc9bc);
    } catch (_0x3a369a) {
      if (typeof _0x4de3dc === "undefined" || !(_0x3a369a instanceof _0x4de3dc.ErrnoError)) {
        _0x5d461b(_0x3a369a);
      }
      return -_0x3a369a.errno;
    }
  }
  function _0x2ee3d0(_0x4b2942, _0x5014ce) {
    try {
      _0x4b2942 = _0x29f6ac.getStr(_0x4b2942);
      return _0x29f6ac.doMkdir(_0x4b2942, _0x5014ce);
    } catch (_0x18a27f) {
      if (typeof _0x4de3dc === "undefined" || !(_0x18a27f instanceof _0x4de3dc.ErrnoError)) {
        _0x5d461b(_0x18a27f);
      }
      return -_0x18a27f.errno;
    }
  }
  function _0x4bcd4a(_0x292d71, _0x1b08f3, _0x3e98a9, _0x4ba4a3, _0x2d4be1, _0x3314ae) {
    _0x3314ae <<= 12;
    var _0xa3c3ce;
    var _0x318dd6 = false;
    if ((_0x4ba4a3 & 16) !== 0 && _0x292d71 % 65536 !== 0) {
      return -28;
    }
    if ((_0x4ba4a3 & 32) !== 0) {
      _0xa3c3ce = _0x1c001e(65536, _0x1b08f3);
      if (!_0xa3c3ce) {
        return -48;
      }
      _0x5e14c3(_0xa3c3ce, 0, _0x1b08f3);
      _0x318dd6 = true;
    } else {
      var _0x3f4886 = _0x4de3dc.getStream(_0x2d4be1);
      if (!_0x3f4886) {
        return -8;
      }
      var _0x13691f = _0x4de3dc.mmap(_0x3f4886, _0x292d71, _0x1b08f3, _0x3314ae, _0x3e98a9, _0x4ba4a3);
      _0xa3c3ce = _0x13691f.ptr;
      _0x318dd6 = _0x13691f.allocated;
    }
    _0x29f6ac.mappings[_0xa3c3ce] = {
      malloc: _0xa3c3ce,
      len: _0x1b08f3,
      allocated: _0x318dd6,
      fd: _0x2d4be1,
      prot: _0x3e98a9,
      flags: _0x4ba4a3,
      offset: _0x3314ae
    };
    return _0xa3c3ce;
  }
  function _0x5bb168(_0x103fb4, _0x24ebc9, _0x1504a6, _0x524486, _0x47e4ef, _0x3876ea) {
    try {
      return _0x4bcd4a(_0x103fb4, _0x24ebc9, _0x1504a6, _0x524486, _0x47e4ef, _0x3876ea);
    } catch (_0x4be654) {
      if (typeof _0x4de3dc === "undefined" || !(_0x4be654 instanceof _0x4de3dc.ErrnoError)) {
        _0x5d461b(_0x4be654);
      }
      return -_0x4be654.errno;
    }
  }
  function _0x3ca36c(_0x247e9c, _0x53180e) {
    if ((_0x247e9c | 0) === -1 || _0x53180e === 0) {
      return -28;
    }
    var _0x1f5dbd = _0x29f6ac.mappings[_0x247e9c];
    if (!_0x1f5dbd) {
      return 0;
    }
    if (_0x53180e === _0x1f5dbd.len) {
      var _0x22500f = _0x4de3dc.getStream(_0x1f5dbd.fd);
      if (_0x22500f) {
        if (_0x1f5dbd.prot & 2) {
          _0x29f6ac.doMsync(_0x247e9c, _0x22500f, _0x53180e, _0x1f5dbd.flags, _0x1f5dbd.offset);
        }
        _0x4de3dc.munmap(_0x22500f);
      }
      _0x29f6ac.mappings[_0x247e9c] = null;
      if (_0x1f5dbd.allocated) {
        _0x41b1b9(_0x1f5dbd.malloc);
      }
    }
    return 0;
  }
  function _0x587756(_0x36d084, _0x5e4740) {
    try {
      return _0x3ca36c(_0x36d084, _0x5e4740);
    } catch (_0x571314) {
      if (typeof _0x4de3dc === "undefined" || !(_0x571314 instanceof _0x4de3dc.ErrnoError)) {
        _0x5d461b(_0x571314);
      }
      return -_0x571314.errno;
    }
  }
  function _0x324f71(_0x36d942, _0x21c98b, _0xdb007b) {
    _0x29f6ac.varargs = _0xdb007b;
    try {
      var _0x34ba8c = _0x29f6ac.getStr(_0x36d942);
      var _0x392290 = _0xdb007b ? _0x29f6ac.get() : 0;
      var _0x5c216b = _0x4de3dc.open(_0x34ba8c, _0x21c98b, _0x392290);
      return _0x5c216b.fd;
    } catch (_0x30c4a9) {
      if (typeof _0x4de3dc === "undefined" || !(_0x30c4a9 instanceof _0x4de3dc.ErrnoError)) {
        _0x5d461b(_0x30c4a9);
      }
      return -_0x30c4a9.errno;
    }
  }
  var _0x2c1b1c = {
    BUCKET_BUFFER_SIZE: 8192,
    mount: function (_0x41969b) {
      return _0x4de3dc.createNode(null, "/", 16895, 0);
    },
    createPipe: function () {
      var _0x29c8fc = {
        buckets: []
      };
      _0x29c8fc.buckets.push({
        buffer: new Uint8Array(_0x2c1b1c.BUCKET_BUFFER_SIZE),
        offset: 0,
        roffset: 0
      });
      var _0x150dcb = _0x2c1b1c.nextname();
      var _0x45c214 = _0x2c1b1c.nextname();
      var _0x1afc16 = _0x4de3dc.createNode(_0x2c1b1c.root, _0x150dcb, 4096, 0);
      var _0x5b4fd2 = _0x4de3dc.createNode(_0x2c1b1c.root, _0x45c214, 4096, 0);
      _0x1afc16.pipe = _0x29c8fc;
      _0x5b4fd2.pipe = _0x29c8fc;
      var _0x59618 = _0x4de3dc.createStream({
        path: _0x150dcb,
        node: _0x1afc16,
        flags: 0,
        seekable: false,
        stream_ops: _0x2c1b1c.stream_ops
      });
      _0x1afc16.stream = _0x59618;
      var _0x5dce49 = _0x4de3dc.createStream({
        path: _0x45c214,
        node: _0x5b4fd2,
        flags: 1,
        seekable: false,
        stream_ops: _0x2c1b1c.stream_ops
      });
      _0x5b4fd2.stream = _0x5dce49;
      return {
        readable_fd: _0x59618.fd,
        writable_fd: _0x5dce49.fd
      };
    },
    stream_ops: {
      poll: function (_0x5d83f1) {
        var _0x3329e4 = _0x5d83f1.node.pipe;
        if ((_0x5d83f1.flags & 2097155) === 1) {
          return 260;
        } else if (_0x3329e4.buckets.length > 0) {
          for (var _0x1567db = 0; _0x1567db < _0x3329e4.buckets.length; _0x1567db++) {
            var _0x40a217 = _0x3329e4.buckets[_0x1567db];
            if (_0x40a217.offset - _0x40a217.roffset > 0) {
              return 65;
            }
          }
        }
        return 0;
      },
      ioctl: function (_0x7b71a2, _0xd2be5f, _0x2233f7) {
        return _0x3fe1cc.EINVAL;
      },
      fsync: function (_0x50c400) {
        return _0x3fe1cc.EINVAL;
      },
      read: function (_0x28c1f4, _0x1cad2e, _0x1a6fb2, _0x36cf3f, _0x5499ea) {
        var _0xd1cdeb = _0x28c1f4.node.pipe;
        var _0x1d41d1 = 0;
        for (var _0x446660 = 0; _0x446660 < _0xd1cdeb.buckets.length; _0x446660++) {
          var _0x43f0ae = _0xd1cdeb.buckets[_0x446660];
          _0x1d41d1 += _0x43f0ae.offset - _0x43f0ae.roffset;
        }
        _0x37a78f(_0x1cad2e instanceof ArrayBuffer || ArrayBuffer.isView(_0x1cad2e));
        var _0x396410 = _0x1cad2e.subarray(_0x1a6fb2, _0x1a6fb2 + _0x36cf3f);
        if (_0x36cf3f <= 0) {
          return 0;
        }
        if (_0x1d41d1 == 0) {
          throw new _0x4de3dc.ErrnoError(_0x3fe1cc.EAGAIN);
        }
        var _0x2e2f82 = Math.min(_0x1d41d1, _0x36cf3f);
        var _0x5baa25 = _0x2e2f82;
        var _0x17bafd = 0;
        for (var _0x446660 = 0; _0x446660 < _0xd1cdeb.buckets.length; _0x446660++) {
          var _0x5d81a3 = _0xd1cdeb.buckets[_0x446660];
          var _0x4a8484 = _0x5d81a3.offset - _0x5d81a3.roffset;
          if (_0x2e2f82 <= _0x4a8484) {
            var _0x192812 = _0x5d81a3.buffer.subarray(_0x5d81a3.roffset, _0x5d81a3.offset);
            if (_0x2e2f82 < _0x4a8484) {
              _0x192812 = _0x192812.subarray(0, _0x2e2f82);
              _0x5d81a3.roffset += _0x2e2f82;
            } else {
              _0x17bafd++;
            }
            _0x396410.set(_0x192812);
            break;
          } else {
            var _0x192812 = _0x5d81a3.buffer.subarray(_0x5d81a3.roffset, _0x5d81a3.offset);
            _0x396410.set(_0x192812);
            _0x396410 = _0x396410.subarray(_0x192812.byteLength);
            _0x2e2f82 -= _0x192812.byteLength;
            _0x17bafd++;
          }
        }
        if (_0x17bafd && _0x17bafd == _0xd1cdeb.buckets.length) {
          _0x17bafd--;
          _0xd1cdeb.buckets[_0x17bafd].offset = 0;
          _0xd1cdeb.buckets[_0x17bafd].roffset = 0;
        }
        _0xd1cdeb.buckets.splice(0, _0x17bafd);
        return _0x5baa25;
      },
      write: function (_0x1b0b81, _0x5f347b, _0x2f7314, _0x2211fd, _0x468158) {
        var _0x49a341 = _0x1b0b81.node.pipe;
        _0x37a78f(_0x5f347b instanceof ArrayBuffer || ArrayBuffer.isView(_0x5f347b));
        var _0x3f2507 = _0x5f347b.subarray(_0x2f7314, _0x2f7314 + _0x2211fd);
        var _0x4ac341 = _0x3f2507.byteLength;
        if (_0x4ac341 <= 0) {
          return 0;
        }
        var _0x57f801 = null;
        if (_0x49a341.buckets.length == 0) {
          _0x57f801 = {
            buffer: new Uint8Array(_0x2c1b1c.BUCKET_BUFFER_SIZE),
            offset: 0,
            roffset: 0
          };
          _0x49a341.buckets.push(_0x57f801);
        } else {
          _0x57f801 = _0x49a341.buckets[_0x49a341.buckets.length - 1];
        }
        _0x37a78f(_0x57f801.offset <= _0x2c1b1c.BUCKET_BUFFER_SIZE);
        var _0x1e4631 = _0x2c1b1c.BUCKET_BUFFER_SIZE - _0x57f801.offset;
        if (_0x1e4631 >= _0x4ac341) {
          _0x57f801.buffer.set(_0x3f2507, _0x57f801.offset);
          _0x57f801.offset += _0x4ac341;
          return _0x4ac341;
        } else if (_0x1e4631 > 0) {
          _0x57f801.buffer.set(_0x3f2507.subarray(0, _0x1e4631), _0x57f801.offset);
          _0x57f801.offset += _0x1e4631;
          _0x3f2507 = _0x3f2507.subarray(_0x1e4631, _0x3f2507.byteLength);
        }
        var _0x459593 = _0x3f2507.byteLength / _0x2c1b1c.BUCKET_BUFFER_SIZE | 0;
        var _0x5ba76f = _0x3f2507.byteLength % _0x2c1b1c.BUCKET_BUFFER_SIZE;
        for (var _0x4166bd = 0; _0x4166bd < _0x459593; _0x4166bd++) {
          var _0x2bc897 = {
            buffer: new Uint8Array(_0x2c1b1c.BUCKET_BUFFER_SIZE),
            offset: _0x2c1b1c.BUCKET_BUFFER_SIZE,
            roffset: 0
          };
          _0x49a341.buckets.push(_0x2bc897);
          _0x2bc897.buffer.set(_0x3f2507.subarray(0, _0x2c1b1c.BUCKET_BUFFER_SIZE));
          _0x3f2507 = _0x3f2507.subarray(_0x2c1b1c.BUCKET_BUFFER_SIZE, _0x3f2507.byteLength);
        }
        if (_0x5ba76f > 0) {
          var _0x2bc897 = {
            buffer: new Uint8Array(_0x2c1b1c.BUCKET_BUFFER_SIZE),
            offset: _0x3f2507.byteLength,
            roffset: 0
          };
          _0x49a341.buckets.push(_0x2bc897);
          _0x2bc897.buffer.set(_0x3f2507);
        }
        return _0x4ac341;
      },
      close: function (_0x222af5) {
        var _0x4f7c56 = _0x222af5.node.pipe;
        _0x4f7c56.buckets = null;
      }
    },
    nextname: function () {
      if (!_0x2c1b1c.nextname.current) {
        _0x2c1b1c.nextname.current = 0;
      }
      return "pipe[" + _0x2c1b1c.nextname.current++ + "]";
    }
  };
  function _0x445e6d(_0x4e46a6) {
    try {
      if (_0x4e46a6 == 0) {
        throw new _0x4de3dc.ErrnoError(21);
      }
      var _0x8ba4e8 = _0x2c1b1c.createPipe();
      _0x38db74[_0x4e46a6 >> 2] = _0x8ba4e8.readable_fd;
      _0x38db74[_0x4e46a6 + 4 >> 2] = _0x8ba4e8.writable_fd;
      return 0;
    } catch (_0x4c804f) {
      if (typeof _0x4de3dc === "undefined" || !(_0x4c804f instanceof _0x4de3dc.ErrnoError)) {
        _0x5d461b(_0x4c804f);
      }
      return -_0x4c804f.errno;
    }
  }
  function _0x3dbc30(_0x349f75, _0x392f44, _0x25977f) {
    try {
      var _0x4d5112 = 0;
      for (var _0x20c940 = 0; _0x20c940 < _0x392f44; _0x20c940++) {
        var _0x56d18c = _0x349f75 + _0x20c940 * 8;
        var _0xffc5bb = _0x38db74[_0x56d18c >> 2];
        var _0x497782 = _0x1465be[_0x56d18c + 4 >> 1];
        var _0x1cba08 = 32;
        var _0xb94222 = _0x4de3dc.getStream(_0xffc5bb);
        if (_0xb94222) {
          _0x1cba08 = _0x29f6ac.DEFAULT_POLLMASK;
          if (_0xb94222.stream_ops.poll) {
            _0x1cba08 = _0xb94222.stream_ops.poll(_0xb94222);
          }
        }
        _0x1cba08 &= _0x497782 | 8 | 16;
        if (_0x1cba08) {
          _0x4d5112++;
        }
        _0x1465be[_0x56d18c + 6 >> 1] = _0x1cba08;
      }
      return _0x4d5112;
    } catch (_0x51b359) {
      if (typeof _0x4de3dc === "undefined" || !(_0x51b359 instanceof _0x4de3dc.ErrnoError)) {
        _0x5d461b(_0x51b359);
      }
      return -_0x51b359.errno;
    }
  }
  function _0x19cb21(_0x15a0ad, _0xb6729a, _0x4b6579) {
    try {
      _0x15a0ad = _0x29f6ac.getStr(_0x15a0ad);
      return _0x29f6ac.doReadlink(_0x15a0ad, _0xb6729a, _0x4b6579);
    } catch (_0x2c0401) {
      if (typeof _0x4de3dc === "undefined" || !(_0x2c0401 instanceof _0x4de3dc.ErrnoError)) {
        _0x5d461b(_0x2c0401);
      }
      return -_0x2c0401.errno;
    }
  }
  function _0x425359(_0x4f006a, _0x2dee3e, _0x5e0df3, _0x135b55, _0x529abe, _0x38c01a) {
    try {
      var _0x51dd91 = _0x2f1b4c(_0x4f006a);
      var _0x184733 = _0x51dd91.sock_ops.recvmsg(_0x51dd91, _0x5e0df3);
      if (!_0x184733) {
        return 0;
      }
      if (_0x529abe) {
        var _0x1fec08 = _0x13106a(_0x529abe, _0x51dd91.family, _0x1c41cd.lookup_name(_0x184733.addr), _0x184733.port, _0x38c01a);
      }
      _0xdf86cd.set(_0x184733.buffer, _0x2dee3e);
      return _0x184733.buffer.byteLength;
    } catch (_0x3bb7df) {
      if (typeof _0x4de3dc === "undefined" || !(_0x3bb7df instanceof _0x4de3dc.ErrnoError)) {
        _0x5d461b(_0x3bb7df);
      }
      return -_0x3bb7df.errno;
    }
  }
  function _0x38595b(_0x2c1e2c, _0x427640, _0x29e4cd) {
    try {
      var _0x1c83a6 = _0x2f1b4c(_0x2c1e2c);
      var _0x5a445c = _0x38db74[_0x427640 + 8 >> 2];
      var _0x42d33a = _0x38db74[_0x427640 + 12 >> 2];
      var _0x225127 = 0;
      for (var _0xa9c0c8 = 0; _0xa9c0c8 < _0x42d33a; _0xa9c0c8++) {
        _0x225127 += _0x38db74[_0x5a445c + (_0xa9c0c8 * 8 + 4) >> 2];
      }
      var _0x4d7b0c = _0x1c83a6.sock_ops.recvmsg(_0x1c83a6, _0x225127);
      if (!_0x4d7b0c) {
        return 0;
      }
      var _0x39a3d2 = _0x38db74[_0x427640 >> 2];
      if (_0x39a3d2) {
        var _0x53dcd4 = _0x13106a(_0x39a3d2, _0x1c83a6.family, _0x1c41cd.lookup_name(_0x4d7b0c.addr), _0x4d7b0c.port);
      }
      var _0x5c5416 = 0;
      var _0x3008b1 = _0x4d7b0c.buffer.byteLength;
      for (var _0xa9c0c8 = 0; _0x3008b1 > 0 && _0xa9c0c8 < _0x42d33a; _0xa9c0c8++) {
        var _0x31687e = _0x38db74[_0x5a445c + (_0xa9c0c8 * 8 + 0) >> 2];
        var _0x5d087e = _0x38db74[_0x5a445c + (_0xa9c0c8 * 8 + 4) >> 2];
        if (!_0x5d087e) {
          continue;
        }
        var _0x409f20 = Math.min(_0x5d087e, _0x3008b1);
        var _0x2bff68 = _0x4d7b0c.buffer.subarray(_0x5c5416, _0x5c5416 + _0x409f20);
        _0xdf86cd.set(_0x2bff68, _0x31687e + _0x5c5416);
        _0x5c5416 += _0x409f20;
        _0x3008b1 -= _0x409f20;
      }
      return _0x5c5416;
    } catch (_0x3ece7b) {
      if (typeof _0x4de3dc === "undefined" || !(_0x3ece7b instanceof _0x4de3dc.ErrnoError)) {
        _0x5d461b(_0x3ece7b);
      }
      return -_0x3ece7b.errno;
    }
  }
  function _0x24468e(_0x2c3a60, _0x2ba4a4) {
    try {
      _0x2c3a60 = _0x29f6ac.getStr(_0x2c3a60);
      _0x2ba4a4 = _0x29f6ac.getStr(_0x2ba4a4);
      _0x4de3dc.rename(_0x2c3a60, _0x2ba4a4);
      return 0;
    } catch (_0xc9ca7c) {
      if (typeof _0x4de3dc === "undefined" || !(_0xc9ca7c instanceof _0x4de3dc.ErrnoError)) {
        _0x5d461b(_0xc9ca7c);
      }
      return -_0xc9ca7c.errno;
    }
  }
  function _0x242705(_0x15425d) {
    try {
      _0x15425d = _0x29f6ac.getStr(_0x15425d);
      _0x4de3dc.rmdir(_0x15425d);
      return 0;
    } catch (_0x316786) {
      if (typeof _0x4de3dc === "undefined" || !(_0x316786 instanceof _0x4de3dc.ErrnoError)) {
        _0x5d461b(_0x316786);
      }
      return -_0x316786.errno;
    }
  }
  function _0xca7f2e(_0x12999d, _0x34d7ed, _0x250bcf) {
    try {
      var _0x786532 = _0x2f1b4c(_0x12999d);
      var _0x565184 = _0x38db74[_0x34d7ed + 8 >> 2];
      var _0x545e87 = _0x38db74[_0x34d7ed + 12 >> 2];
      var _0x16bf4b;
      var _0x4ee116;
      var _0x55341a = _0x38db74[_0x34d7ed >> 2];
      var _0x70ce64 = _0x38db74[_0x34d7ed + 4 >> 2];
      if (_0x55341a) {
        var _0x1e5f39 = _0x137013(_0x55341a, _0x70ce64);
        if (_0x1e5f39.errno) {
          return -_0x1e5f39.errno;
        }
        _0x4ee116 = _0x1e5f39.port;
        _0x16bf4b = _0x1c41cd.lookup_addr(_0x1e5f39.addr) || _0x1e5f39.addr;
      }
      var _0x852611 = 0;
      for (var _0xb1fd58 = 0; _0xb1fd58 < _0x545e87; _0xb1fd58++) {
        _0x852611 += _0x38db74[_0x565184 + (_0xb1fd58 * 8 + 4) >> 2];
      }
      var _0x3f3863 = new Uint8Array(_0x852611);
      var _0x2f723d = 0;
      for (var _0xb1fd58 = 0; _0xb1fd58 < _0x545e87; _0xb1fd58++) {
        var _0x29c2a7 = _0x38db74[_0x565184 + (_0xb1fd58 * 8 + 0) >> 2];
        var _0x309cb1 = _0x38db74[_0x565184 + (_0xb1fd58 * 8 + 4) >> 2];
        for (var _0x350e12 = 0; _0x350e12 < _0x309cb1; _0x350e12++) {
          _0x3f3863[_0x2f723d++] = _0x3b8c2f[_0x29c2a7 + _0x350e12 >> 0];
        }
      }
      return _0x786532.sock_ops.sendmsg(_0x786532, _0x3f3863, 0, _0x852611, _0x16bf4b, _0x4ee116);
    } catch (_0xd61120) {
      if (typeof _0x4de3dc === "undefined" || !(_0xd61120 instanceof _0x4de3dc.ErrnoError)) {
        _0x5d461b(_0xd61120);
      }
      return -_0xd61120.errno;
    }
  }
  function _0x245c43(_0x2c6533, _0x4b0424, _0x86027f, _0x5f48d1, _0x37c507, _0x1f60f5) {
    try {
      var _0x103413 = _0x2f1b4c(_0x2c6533);
      var _0x5ba52f = _0x5ed11f(_0x37c507, _0x1f60f5, true);
      if (!_0x5ba52f) {
        return _0x4de3dc.write(_0x103413.stream, _0x3b8c2f, _0x4b0424, _0x86027f);
      } else {
        return _0x103413.sock_ops.sendmsg(_0x103413, _0x3b8c2f, _0x4b0424, _0x86027f, _0x5ba52f.addr, _0x5ba52f.port);
      }
    } catch (_0x295771) {
      if (typeof _0x4de3dc === "undefined" || !(_0x295771 instanceof _0x4de3dc.ErrnoError)) {
        _0x5d461b(_0x295771);
      }
      return -_0x295771.errno;
    }
  }
  function _0x14cd80(_0x3de159) {
    try {
      return -50;
    } catch (_0x2c872a) {
      if (typeof _0x4de3dc === "undefined" || !(_0x2c872a instanceof _0x4de3dc.ErrnoError)) {
        _0x5d461b(_0x2c872a);
      }
      return -_0x2c872a.errno;
    }
  }
  function _0x5bc3e0(_0x1ef400, _0xeee1b7) {
    try {
      _0x2f1b4c(_0x1ef400);
      return -52;
    } catch (_0x34d130) {
      if (typeof _0x4de3dc === "undefined" || !(_0x34d130 instanceof _0x4de3dc.ErrnoError)) {
        _0x5d461b(_0x34d130);
      }
      return -_0x34d130.errno;
    }
  }
  function _0x20a65b(_0x4fd9fa, _0x12068e, _0xd5fd51) {
    try {
      var _0x5a9fb8 = _0x3ee0ec.createSocket(_0x4fd9fa, _0x12068e, _0xd5fd51);
      return _0x5a9fb8.stream.fd;
    } catch (_0x2c916d) {
      if (typeof _0x4de3dc === "undefined" || !(_0x2c916d instanceof _0x4de3dc.ErrnoError)) {
        _0x5d461b(_0x2c916d);
      }
      return -_0x2c916d.errno;
    }
  }
  function _0x109318(_0x56ab90, _0x9d667f) {
    try {
      _0x56ab90 = _0x29f6ac.getStr(_0x56ab90);
      return _0x29f6ac.doStat(_0x4de3dc.stat, _0x56ab90, _0x9d667f);
    } catch (_0x224c6e) {
      if (typeof _0x4de3dc === "undefined" || !(_0x224c6e instanceof _0x4de3dc.ErrnoError)) {
        _0x5d461b(_0x224c6e);
      }
      return -_0x224c6e.errno;
    }
  }
  function _0x48eb56(_0x264d21, _0x458773, _0x18849b) {
    try {
      _0x264d21 = _0x29f6ac.getStr(_0x264d21);
      _0x38db74[_0x18849b + 4 >> 2] = 4096;
      _0x38db74[_0x18849b + 40 >> 2] = 4096;
      _0x38db74[_0x18849b + 8 >> 2] = 1000000;
      _0x38db74[_0x18849b + 12 >> 2] = 500000;
      _0x38db74[_0x18849b + 16 >> 2] = 500000;
      _0x38db74[_0x18849b + 20 >> 2] = _0x4de3dc.nextInode;
      _0x38db74[_0x18849b + 24 >> 2] = 1000000;
      _0x38db74[_0x18849b + 28 >> 2] = 42;
      _0x38db74[_0x18849b + 44 >> 2] = 2;
      _0x38db74[_0x18849b + 36 >> 2] = 255;
      return 0;
    } catch (_0x1443f9) {
      if (typeof _0x4de3dc === "undefined" || !(_0x1443f9 instanceof _0x4de3dc.ErrnoError)) {
        _0x5d461b(_0x1443f9);
      }
      return -_0x1443f9.errno;
    }
  }
  function _0x165213(_0xed2eb0, _0x49b06b, _0x5a84f0, _0x2a38a7) {
    try {
      _0xed2eb0 = _0x29f6ac.getStr(_0xed2eb0);
      var _0x195d61 = _0x29f6ac.get64(_0x5a84f0, _0x2a38a7);
      _0x4de3dc.truncate(_0xed2eb0, _0x195d61);
      return 0;
    } catch (_0x1c6253) {
      if (typeof _0x4de3dc === "undefined" || !(_0x1c6253 instanceof _0x4de3dc.ErrnoError)) {
        _0x5d461b(_0x1c6253);
      }
      return -_0x1c6253.errno;
    }
  }
  function _0x4be378(_0x134fb4) {
    try {
      if (!_0x134fb4) {
        return -21;
      }
      var _0x100a58 = {
        __size__: 390,
        domainname: 325,
        machine: 260,
        nodename: 65,
        release: 130,
        sysname: 0,
        version: 195
      };
      function _0x5eef35(_0x24ec13, _0x4bbd4c) {
        var _0x19bd88 = _0x100a58[_0x24ec13];
        _0x496caa(_0x4bbd4c, _0x134fb4 + _0x19bd88);
      }
      _0x5eef35("sysname", "Emscripten");
      _0x5eef35("nodename", "emscripten");
      _0x5eef35("release", "1.0");
      _0x5eef35("version", "#1");
      _0x5eef35("machine", "wasm32");
      return 0;
    } catch (_0x5fd38a) {
      if (typeof _0x4de3dc === "undefined" || !(_0x5fd38a instanceof _0x4de3dc.ErrnoError)) {
        _0x5d461b(_0x5fd38a);
      }
      return -_0x5fd38a.errno;
    }
  }
  function _0x26f33e(_0x1e227b) {
    try {
      _0x1e227b = _0x29f6ac.getStr(_0x1e227b);
      _0x4de3dc.unlink(_0x1e227b);
      return 0;
    } catch (_0x3d6652) {
      if (typeof _0x4de3dc === "undefined" || !(_0x3d6652 instanceof _0x4de3dc.ErrnoError)) {
        _0x5d461b(_0x3d6652);
      }
      return -_0x3d6652.errno;
    }
  }
  function _0x29e4ed() {
    _0x5d461b();
  }
  function _0x1d2333() {
    if (_0x1d2333.start === undefined) {
      _0x1d2333.start = Date.now();
    }
    return (Date.now() - _0x1d2333.start) * 1000 | 0;
  }
  function _0x11d28d() {
    if (_0x4b3166) {
      return 1;
    } else if (typeof dateNow !== "undefined") {
      return 1000;
    } else {
      return 1000;
    }
  }
  var _0x5aa5ac = true;
  function _0x3d2c72(_0x33df4f, _0x563d97) {
    var _0x3a5266;
    if (_0x33df4f === 0) {
      _0x3a5266 = 1000000;
    } else if (_0x33df4f === 1 && _0x5aa5ac) {
      _0x3a5266 = _0x11d28d();
    } else {
      _0x54e9de(28);
      return -1;
    }
    _0x38db74[_0x563d97 >> 2] = _0x3a5266 / 1000000000 | 0;
    _0x38db74[_0x563d97 + 4 >> 2] = _0x3a5266;
    return 0;
  }
  var _0x2ec5a4;
  if (_0x4b3166) {
    _0x2ec5a4 = function () {
      var _0x9b8076 = process.hrtime();
      return _0x9b8076[0] * 1000 + _0x9b8076[1] / 1000000;
    };
  } else if (typeof dateNow !== "undefined") {
    _0x2ec5a4 = dateNow;
  } else {
    _0x2ec5a4 = function () {
      return performance.now();
    };
  }
  function _0xccf996(_0x4768b8, _0x347a08) {
    var _0x37cd26;
    if (_0x4768b8 === 0) {
      _0x37cd26 = Date.now();
    } else if ((_0x4768b8 === 1 || _0x4768b8 === 4) && _0x5aa5ac) {
      _0x37cd26 = _0x2ec5a4();
    } else {
      _0x54e9de(28);
      return -1;
    }
    _0x38db74[_0x347a08 >> 2] = _0x37cd26 / 1000 | 0;
    _0x38db74[_0x347a08 + 4 >> 2] = _0x37cd26 % 1000 * 1000 * 1000 | 0;
    return 0;
  }
  function _0x5dfa34(_0x5345ad, _0x16e892) {
    return _0x5345ad - _0x16e892;
  }
  function _0x4e97e9(_0x4cf2bb) {}
  function _0x3e3bf8() {
    return 0;
  }
  function _0x3070ac(_0x1ca009, _0x55c719) {}
  function _0x17c73a(_0x209a20, _0x395249) {
    return 0;
  }
  var _0x4aae2d = [];
  function _0x47d067(_0x413250, _0x5041b4) {
    _0x4aae2d.length = 0;
    var _0x1f0b49;
    _0x5041b4 >>= 2;
    while (_0x1f0b49 = _0xdf86cd[_0x413250++]) {
      var _0x5d6dcc = _0x1f0b49 < 105;
      if (_0x5d6dcc && _0x5041b4 & 1) {
        _0x5041b4++;
      }
      _0x4aae2d.push(_0x5d6dcc ? _0x2f1a63[_0x5041b4++ >> 1] : _0x38db74[_0x5041b4]);
      ++_0x5041b4;
    }
    return _0x4aae2d;
  }
  function _0x8b9c01(_0x3c85cc, _0x5cbf3d, _0x4376b0, _0x16fb60) {
    var _0x119873 = _0x47d067(_0x5cbf3d, _0x4376b0);
    return _0x587143[_0x3c85cc].apply(null, _0x119873);
  }
  function _0x5d877b(_0x599a5d, _0x390fef, _0x1b14fd) {
    return _0x8b9c01(_0x599a5d, _0x390fef, _0x1b14fd, 1);
  }
  function _0x5e44e0(_0x5826e5, _0x3f00e8) {
    _0x232a5c.mainLoop.timingMode = _0x5826e5;
    _0x232a5c.mainLoop.timingValue = _0x3f00e8;
    if (!_0x232a5c.mainLoop.func) {
      return 1;
    }
    if (!_0x232a5c.mainLoop.running) {
      _0x232a5c.mainLoop.running = true;
    }
    if (_0x5826e5 == 0) {
      _0x232a5c.mainLoop.scheduler = function _0x1b0d23() {
        var _0x2a6cbc = Math.max(0, _0x232a5c.mainLoop.tickStartTime + _0x3f00e8 - _0x2ec5a4()) | 0;
        setTimeout(_0x232a5c.mainLoop.runner, _0x2a6cbc);
      };
      _0x232a5c.mainLoop.method = "timeout";
    } else if (_0x5826e5 == 1) {
      _0x232a5c.mainLoop.scheduler = function _0x100e06() {
        _0x232a5c.requestAnimationFrame(_0x232a5c.mainLoop.runner);
      };
      _0x232a5c.mainLoop.method = "rAF";
    } else if (_0x5826e5 == 2) {
      if (typeof setImmediate === "undefined") {
        var _0x26ddae = [];
        var _0x208d65 = "setimmediate";
        function _0x276100(_0x41f8db) {
          if (_0x41f8db.data === _0x208d65 || _0x41f8db.data.target === _0x208d65) {
            _0x41f8db.stopPropagation();
            _0x26ddae.shift()();
          }
        }
        addEventListener("message", _0x276100, true);
        setImmediate = function _0x158fb3(_0x477130) {
          _0x26ddae.push(_0x477130);
          if (_0x17bf79) {
            if (_0x25e483.setImmediates === undefined) {
              _0x25e483.setImmediates = [];
            }
            _0x25e483.setImmediates.push(_0x477130);
            postMessage({
              target: _0x208d65
            });
          } else {
            postMessage(_0x208d65, "*");
          }
        };
      }
      _0x232a5c.mainLoop.scheduler = function _0x10892e() {
        setImmediate(_0x232a5c.mainLoop.runner);
      };
      _0x232a5c.mainLoop.method = "immediate";
    }
    return 0;
  }
  function _0x425810(_0x185e0d) {
    _0x2428e0(_0x185e0d);
  }
  function _0x322517() {
    if (!_0x3481d7()) {
      try {
        _0x425810(_0x33a2ee);
      } catch (_0x452e50) {
        if (_0x452e50 instanceof _0x5d5548) {
          return;
        }
        throw _0x452e50;
      }
    }
  }
  function _0x38fdb0(_0x1d6ef0, _0x440016, _0x2f7434, _0x1e85b4, _0x596e3f) {
    _0x37a78f(!_0x232a5c.mainLoop.func, "emscripten_set_main_loop: there can only be one main loop function at once: call emscripten_cancel_main_loop to cancel the previous one before setting a new one with different parameters.");
    _0x232a5c.mainLoop.func = _0x1d6ef0;
    _0x232a5c.mainLoop.arg = _0x1e85b4;
    var _0x471634 = _0x232a5c.mainLoop.currentlyRunningMainloop;
    function _0x590989() {
      if (_0x471634 < _0x232a5c.mainLoop.currentlyRunningMainloop) {
        _0x322517();
        return false;
      }
      return true;
    }
    _0x232a5c.mainLoop.running = false;
    _0x232a5c.mainLoop.runner = function _0x197864() {
      if (_0x2219fa) {
        return;
      }
      if (_0x232a5c.mainLoop.queue.length > 0) {
        var _0x4bc574 = Date.now();
        var _0x586972 = _0x232a5c.mainLoop.queue.shift();
        _0x586972.func(_0x586972.arg);
        if (_0x232a5c.mainLoop.remainingBlockers) {
          var _0x14db0d = _0x232a5c.mainLoop.remainingBlockers;
          var _0x3d2864 = _0x14db0d % 1 == 0 ? _0x14db0d - 1 : Math.floor(_0x14db0d);
          if (_0x586972.counted) {
            _0x232a5c.mainLoop.remainingBlockers = _0x3d2864;
          } else {
            _0x3d2864 = _0x3d2864 + 0.5;
            _0x232a5c.mainLoop.remainingBlockers = (_0x14db0d * 8 + _0x3d2864) / 9;
          }
        }
        console.log("main loop blocker \"" + _0x586972.name + "\" took " + (Date.now() - _0x4bc574) + " ms");
        _0x232a5c.mainLoop.updateStatus();
        if (!_0x590989()) {
          return;
        }
        setTimeout(_0x232a5c.mainLoop.runner, 0);
        return;
      }
      if (!_0x590989()) {
        return;
      }
      _0x232a5c.mainLoop.currentFrameNumber = _0x232a5c.mainLoop.currentFrameNumber + 1 | 0;
      if (_0x232a5c.mainLoop.timingMode == 1 && _0x232a5c.mainLoop.timingValue > 1 && _0x232a5c.mainLoop.currentFrameNumber % _0x232a5c.mainLoop.timingValue != 0) {
        _0x232a5c.mainLoop.scheduler();
        return;
      } else if (_0x232a5c.mainLoop.timingMode == 0) {
        _0x232a5c.mainLoop.tickStartTime = _0x2ec5a4();
      }
      _0x2375dd.newRenderingFrameStarted();
      _0x232a5c.mainLoop.runIter(_0x1d6ef0);
      if (!_0x590989()) {
        return;
      }
      if (typeof SDL === "object" && SDL.audio && SDL.audio.queueNewAudioData) {
        SDL.audio.queueNewAudioData();
      }
      _0x232a5c.mainLoop.scheduler();
    };
    if (!_0x596e3f) {
      if (_0x440016 && _0x440016 > 0) {
        _0x5e44e0(0, 1000 / _0x440016);
      } else {
        _0x5e44e0(1, 1);
      }
      _0x232a5c.mainLoop.scheduler();
    }
    if (_0x2f7434) {
      throw "unwind";
    }
  }
  function _0x4f4d8d(_0x5cfd9b, _0x555fc4) {
    if (_0x2219fa) {
      return;
    }
    if (_0x555fc4) {
      _0x5cfd9b();
      return;
    }
    try {
      _0x5cfd9b();
    } catch (_0x5cb081) {
      if (_0x5cb081 instanceof _0x5d5548) {
        return;
      } else if (_0x5cb081 !== "unwind") {
        if (_0x5cb081 && typeof _0x5cb081 === "object" && _0x5cb081.stack) {
          _0x1af4bd("exception thrown: " + [_0x5cb081, _0x5cb081.stack]);
        }
        throw _0x5cb081;
      }
    }
  }
  var _0x232a5c = {
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
        _0x232a5c.mainLoop.scheduler = null;
        _0x232a5c.mainLoop.currentlyRunningMainloop++;
      },
      resume: function () {
        _0x232a5c.mainLoop.currentlyRunningMainloop++;
        var _0x2a6959 = _0x232a5c.mainLoop.timingMode;
        var _0x140247 = _0x232a5c.mainLoop.timingValue;
        var _0x30a64d = _0x232a5c.mainLoop.func;
        _0x232a5c.mainLoop.func = null;
        _0x38fdb0(_0x30a64d, 0, false, _0x232a5c.mainLoop.arg, true);
        _0x5e44e0(_0x2a6959, _0x140247);
        _0x232a5c.mainLoop.scheduler();
      },
      updateStatus: function () {
        if (_0x25e483.setStatus) {
          var _0x256563 = _0x25e483.statusMessage || "Please wait...";
          var _0x13b1ae = _0x232a5c.mainLoop.remainingBlockers;
          var _0x4bc9db = _0x232a5c.mainLoop.expectedBlockers;
          if (_0x13b1ae) {
            if (_0x13b1ae < _0x4bc9db) {
              _0x25e483.setStatus(_0x256563 + " (" + (_0x4bc9db - _0x13b1ae) + "/" + _0x4bc9db + ")");
            } else {
              _0x25e483.setStatus(_0x256563);
            }
          } else {
            _0x25e483.setStatus("");
          }
        }
      },
      runIter: function (_0x2d45a4) {
        if (_0x2219fa) {
          return;
        }
        if (_0x25e483.preMainLoop) {
          var _0xed3176 = _0x25e483.preMainLoop();
          if (_0xed3176 === false) {
            return;
          }
        }
        _0x4f4d8d(_0x2d45a4);
        if (_0x25e483.postMainLoop) {
          _0x25e483.postMainLoop();
        }
      }
    },
    isFullscreen: false,
    pointerLock: false,
    moduleContextCreatedCallbacks: [],
    workers: [],
    init: function () {
      if (!_0x25e483.preloadPlugins) {
        _0x25e483.preloadPlugins = [];
      }
      if (_0x232a5c.initted) {
        return;
      }
      _0x232a5c.initted = true;
      try {
        new Blob();
        _0x232a5c.hasBlobConstructor = true;
      } catch (_0x5f2c16) {
        _0x232a5c.hasBlobConstructor = false;
        console.log("warning: no blob constructor, cannot create blobs with mimetypes");
      }
      _0x232a5c.BlobBuilder = typeof MozBlobBuilder != "undefined" ? MozBlobBuilder : typeof WebKitBlobBuilder != "undefined" ? WebKitBlobBuilder : !_0x232a5c.hasBlobConstructor ? console.log("warning: no BlobBuilder") : null;
      _0x232a5c.URLObject = typeof window != "undefined" ? window.URL ? window.URL : window.webkitURL : undefined;
      if (!_0x25e483.noImageDecoding && typeof _0x232a5c.URLObject === "undefined") {
        console.log("warning: Browser does not support creating object URLs. Built-in browser image decoding will not be available.");
        _0x25e483.noImageDecoding = true;
      }
      var _0x699bf0 = {};
      _0x699bf0.canHandle = function _0x2389f8(_0x111e59) {
        return !_0x25e483.noImageDecoding && /\.(jpg|jpeg|png|bmp)$/i.test(_0x111e59);
      };
      _0x699bf0.handle = function _0x25f358(_0x5964c8, _0xf4e7c8, _0x150bb4, _0x2b456a) {
        var _0x248d84 = null;
        if (_0x232a5c.hasBlobConstructor) {
          try {
            _0x248d84 = new Blob([_0x5964c8], {
              type: _0x232a5c.getMimetype(_0xf4e7c8)
            });
            if (_0x248d84.size !== _0x5964c8.length) {
              _0x248d84 = new Blob([new Uint8Array(_0x5964c8).buffer], {
                type: _0x232a5c.getMimetype(_0xf4e7c8)
              });
            }
          } catch (_0x338e6e) {
            _0x29f45c("Blob constructor present but fails: " + _0x338e6e + "; falling back to blob builder");
          }
        }
        if (!_0x248d84) {
          var _0x3b33e9 = new _0x232a5c.BlobBuilder();
          _0x3b33e9.append(new Uint8Array(_0x5964c8).buffer);
          _0x248d84 = _0x3b33e9.getBlob();
        }
        var _0x36bdac = _0x232a5c.URLObject.createObjectURL(_0x248d84);
        var _0x59f8d3 = new Image();
        _0x59f8d3.onload = function _0x5b30ea() {
          _0x37a78f(_0x59f8d3.complete, "Image " + _0xf4e7c8 + " could not be decoded");
          var _0xb8f714 = document.createElement("canvas");
          _0xb8f714.width = _0x59f8d3.width;
          _0xb8f714.height = _0x59f8d3.height;
          var _0x4bb7bd = _0xb8f714.getContext("2d");
          _0x4bb7bd.drawImage(_0x59f8d3, 0, 0);
          _0x25e483.preloadedImages[_0xf4e7c8] = _0xb8f714;
          _0x232a5c.URLObject.revokeObjectURL(_0x36bdac);
          if (_0x150bb4) {
            _0x150bb4(_0x5964c8);
          }
        };
        _0x59f8d3.onerror = function _0x55b2fe(_0x83e8fb) {
          console.log("Image " + _0x36bdac + " could not be decoded");
          if (_0x2b456a) {
            _0x2b456a();
          }
        };
        _0x59f8d3.src = _0x36bdac;
      };
      _0x25e483.preloadPlugins.push(_0x699bf0);
      var _0x57f7ae = {};
      _0x57f7ae.canHandle = function _0x584074(_0x32d6b9) {
        return !_0x25e483.noAudioDecoding && _0x32d6b9.substr(-4) in {
          ".ogg": 1,
          ".wav": 1,
          ".mp3": 1
        };
      };
      _0x57f7ae.handle = function _0x45df35(_0x7e7487, _0x36e153, _0x3085be, _0x8a8d4d) {
        var _0x46ff86 = false;
        function _0xbf2d98(_0x4d706f) {
          if (_0x46ff86) {
            return;
          }
          _0x46ff86 = true;
          _0x25e483.preloadedAudios[_0x36e153] = _0x4d706f;
          if (_0x3085be) {
            _0x3085be(_0x7e7487);
          }
        }
        function _0x4dc31f() {
          if (_0x46ff86) {
            return;
          }
          _0x46ff86 = true;
          _0x25e483.preloadedAudios[_0x36e153] = new Audio();
          if (_0x8a8d4d) {
            _0x8a8d4d();
          }
        }
        if (_0x232a5c.hasBlobConstructor) {
          try {
            var _0x4fb7ab = new Blob([_0x7e7487], {
              type: _0x232a5c.getMimetype(_0x36e153)
            });
          } catch (_0x3f0966) {
            return _0x4dc31f();
          }
          var _0x568dbd = _0x232a5c.URLObject.createObjectURL(_0x4fb7ab);
          var _0x55b5bc = new Audio();
          _0x55b5bc.addEventListener("canplaythrough", function () {
            _0xbf2d98(_0x55b5bc);
          }, false);
          _0x55b5bc.onerror = function _0x2b909a(_0x2592ea) {
            if (_0x46ff86) {
              return;
            }
            console.log("warning: browser could not fully decode audio " + _0x36e153 + ", trying slower base64 approach");
            function _0x2a2d32(_0x23da3a) {
              var _0x2ce59b = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/";
              var _0x1f2d8c = "=";
              var _0x2b6401 = "";
              var _0x24f85f = 0;
              var _0x9a088e = 0;
              for (var _0x5f17e0 = 0; _0x5f17e0 < _0x23da3a.length; _0x5f17e0++) {
                _0x24f85f = _0x24f85f << 8 | _0x23da3a[_0x5f17e0];
                _0x9a088e += 8;
                while (_0x9a088e >= 6) {
                  var _0x2bb008 = _0x24f85f >> _0x9a088e - 6 & 63;
                  _0x9a088e -= 6;
                  _0x2b6401 += _0x2ce59b[_0x2bb008];
                }
              }
              if (_0x9a088e == 2) {
                _0x2b6401 += _0x2ce59b[(_0x24f85f & 3) << 4];
                _0x2b6401 += _0x1f2d8c + _0x1f2d8c;
              } else if (_0x9a088e == 4) {
                _0x2b6401 += _0x2ce59b[(_0x24f85f & 15) << 2];
                _0x2b6401 += _0x1f2d8c;
              }
              return _0x2b6401;
            }
            _0x55b5bc.src = "data:audio/x-" + _0x36e153.substr(-3) + ";base64," + _0x2a2d32(_0x7e7487);
            _0xbf2d98(_0x55b5bc);
          };
          _0x55b5bc.src = _0x568dbd;
          _0x232a5c.safeSetTimeout(function () {
            _0xbf2d98(_0x55b5bc);
          }, 10000);
        } else {
          return _0x4dc31f();
        }
      };
      _0x25e483.preloadPlugins.push(_0x57f7ae);
      function _0x2ca8f9() {
        _0x232a5c.pointerLock = document.pointerLockElement === _0x25e483.canvas || document.mozPointerLockElement === _0x25e483.canvas || document.webkitPointerLockElement === _0x25e483.canvas || document.msPointerLockElement === _0x25e483.canvas;
      }
      var _0x234323 = _0x25e483.canvas;
      if (_0x234323) {
        _0x234323.requestPointerLock = _0x234323.requestPointerLock || _0x234323.mozRequestPointerLock || _0x234323.webkitRequestPointerLock || _0x234323.msRequestPointerLock || function () {};
        _0x234323.exitPointerLock = document.exitPointerLock || document.mozExitPointerLock || document.webkitExitPointerLock || document.msExitPointerLock || function () {};
        _0x234323.exitPointerLock = _0x234323.exitPointerLock.bind(document);
        document.addEventListener("pointerlockchange", _0x2ca8f9, false);
        document.addEventListener("mozpointerlockchange", _0x2ca8f9, false);
        document.addEventListener("webkitpointerlockchange", _0x2ca8f9, false);
        document.addEventListener("mspointerlockchange", _0x2ca8f9, false);
        if (_0x25e483.elementPointerLock) {
          _0x234323.addEventListener("click", function (_0x5cf920) {
            if (!_0x232a5c.pointerLock && _0x25e483.canvas.requestPointerLock) {
              _0x25e483.canvas.requestPointerLock();
              _0x5cf920.preventDefault();
            }
          }, false);
        }
      }
    },
    createContext: function (_0x1e0b63, _0x40eee, _0x13c8b9, _0x3de2f0) {
      if (_0x40eee && _0x25e483.ctx && _0x1e0b63 == _0x25e483.canvas) {
        return _0x25e483.ctx;
      }
      var _0x5d104e;
      var _0x300f01;
      if (_0x40eee) {
        var _0x5db563 = {
          antialias: false,
          alpha: false,
          majorVersion: typeof WebGL2RenderingContext !== "undefined" ? 2 : 1
        };
        if (_0x3de2f0) {
          for (var _0x146c11 in _0x3de2f0) {
            _0x5db563[_0x146c11] = _0x3de2f0[_0x146c11];
          }
        }
        if (typeof _0x2375dd !== "undefined") {
          _0x300f01 = _0x2375dd.createContext(_0x1e0b63, _0x5db563);
          if (_0x300f01) {
            _0x5d104e = _0x2375dd.getContext(_0x300f01).GLctx;
          }
        }
      } else {
        _0x5d104e = _0x1e0b63.getContext("2d");
      }
      if (!_0x5d104e) {
        return null;
      }
      if (_0x13c8b9) {
        if (!_0x40eee) {
          _0x37a78f(typeof _0x2ad584 === "undefined", "cannot set in module if GLctx is used, but we are a non-GL context that would replace it");
        }
        _0x25e483.ctx = _0x5d104e;
        if (_0x40eee) {
          _0x2375dd.makeContextCurrent(_0x300f01);
        }
        _0x25e483.useWebGL = _0x40eee;
        _0x232a5c.moduleContextCreatedCallbacks.forEach(function (_0x395923) {
          _0x395923();
        });
        _0x232a5c.init();
      }
      return _0x5d104e;
    },
    destroyContext: function (_0x473383, _0x36477e, _0x365873) {},
    fullscreenHandlersInstalled: false,
    lockPointer: undefined,
    resizeCanvas: undefined,
    requestFullscreen: function (_0x2a64d1, _0x41e8ef) {
      _0x232a5c.lockPointer = _0x2a64d1;
      _0x232a5c.resizeCanvas = _0x41e8ef;
      if (typeof _0x232a5c.lockPointer === "undefined") {
        _0x232a5c.lockPointer = true;
      }
      if (typeof _0x232a5c.resizeCanvas === "undefined") {
        _0x232a5c.resizeCanvas = false;
      }
      var _0x53d031 = _0x25e483.canvas;
      function _0x3c14ef() {
        _0x232a5c.isFullscreen = false;
        var _0x2efc39 = _0x53d031.parentNode;
        if ((document.fullscreenElement || document.mozFullScreenElement || document.msFullscreenElement || document.webkitFullscreenElement || document.webkitCurrentFullScreenElement) === _0x2efc39) {
          _0x53d031.exitFullscreen = _0x232a5c.exitFullscreen;
          if (_0x232a5c.lockPointer) {
            _0x53d031.requestPointerLock();
          }
          _0x232a5c.isFullscreen = true;
          if (_0x232a5c.resizeCanvas) {
            _0x232a5c.setFullscreenCanvasSize();
          } else {
            _0x232a5c.updateCanvasDimensions(_0x53d031);
          }
        } else {
          _0x2efc39.parentNode.insertBefore(_0x53d031, _0x2efc39);
          _0x2efc39.parentNode.removeChild(_0x2efc39);
          if (_0x232a5c.resizeCanvas) {
            _0x232a5c.setWindowedCanvasSize();
          } else {
            _0x232a5c.updateCanvasDimensions(_0x53d031);
          }
        }
        if (_0x25e483.onFullScreen) {
          _0x25e483.onFullScreen(_0x232a5c.isFullscreen);
        }
        if (_0x25e483.onFullscreen) {
          _0x25e483.onFullscreen(_0x232a5c.isFullscreen);
        }
      }
      if (!_0x232a5c.fullscreenHandlersInstalled) {
        _0x232a5c.fullscreenHandlersInstalled = true;
        document.addEventListener("fullscreenchange", _0x3c14ef, false);
        document.addEventListener("mozfullscreenchange", _0x3c14ef, false);
        document.addEventListener("webkitfullscreenchange", _0x3c14ef, false);
        document.addEventListener("MSFullscreenChange", _0x3c14ef, false);
      }
      var _0x591beb = document.createElement("div");
      _0x53d031.parentNode.insertBefore(_0x591beb, _0x53d031);
      _0x591beb.appendChild(_0x53d031);
      _0x591beb.requestFullscreen = _0x591beb.requestFullscreen || _0x591beb.mozRequestFullScreen || _0x591beb.msRequestFullscreen || (_0x591beb.webkitRequestFullscreen ? function () {
        _0x591beb.webkitRequestFullscreen(Element.ALLOW_KEYBOARD_INPUT);
      } : null) || (_0x591beb.webkitRequestFullScreen ? function () {
        _0x591beb.webkitRequestFullScreen(Element.ALLOW_KEYBOARD_INPUT);
      } : null);
      _0x591beb.requestFullscreen();
    },
    exitFullscreen: function () {
      if (!_0x232a5c.isFullscreen) {
        return false;
      }
      var _0xa15c3d = document.exitFullscreen || document.cancelFullScreen || document.mozCancelFullScreen || document.msExitFullscreen || document.webkitCancelFullScreen || function () {};
      _0xa15c3d.apply(document, []);
      return true;
    },
    nextRAF: 0,
    fakeRequestAnimationFrame: function (_0x3f7776) {
      var _0x38e6e9 = Date.now();
      if (_0x232a5c.nextRAF === 0) {
        _0x232a5c.nextRAF = _0x38e6e9 + 1000 / 60;
      } else {
        while (_0x38e6e9 + 2 >= _0x232a5c.nextRAF) {
          _0x232a5c.nextRAF += 1000 / 60;
        }
      }
      var _0x466d91 = Math.max(_0x232a5c.nextRAF - _0x38e6e9, 0);
      setTimeout(_0x3f7776, _0x466d91);
    },
    requestAnimationFrame: function (_0xf4e220) {
      if (typeof requestAnimationFrame === "function") {
        requestAnimationFrame(_0xf4e220);
        return;
      }
      var _0xc0a128 = _0x232a5c.fakeRequestAnimationFrame;
      _0xc0a128(_0xf4e220);
    },
    safeRequestAnimationFrame: function (_0x2f8b35) {
      return _0x232a5c.requestAnimationFrame(function () {
        _0x4f4d8d(_0x2f8b35);
      });
    },
    safeSetTimeout: function (_0x45ffb2, _0x138ab6) {
      return setTimeout(function () {
        _0x4f4d8d(_0x45ffb2);
      }, _0x138ab6);
    },
    getMimetype: function (_0x18d8a9) {
      return {
        jpg: "image/jpeg",
        jpeg: "image/jpeg",
        png: "image/png",
        bmp: "image/bmp",
        ogg: "audio/ogg",
        wav: "audio/wav",
        mp3: "audio/mpeg"
      }[_0x18d8a9.substr(_0x18d8a9.lastIndexOf(".") + 1)];
    },
    getUserMedia: function (_0x2339ce) {
      if (!window.getUserMedia) {
        window.getUserMedia = navigator.getUserMedia || navigator.mozGetUserMedia;
      }
      window.getUserMedia(_0x2339ce);
    },
    getMovementX: function (_0x4caa98) {
      return _0x4caa98.movementX || _0x4caa98.mozMovementX || _0x4caa98.webkitMovementX || 0;
    },
    getMovementY: function (_0x42e3dc) {
      return _0x42e3dc.movementY || _0x42e3dc.mozMovementY || _0x42e3dc.webkitMovementY || 0;
    },
    getMouseWheelDelta: function (_0x33af02) {
      var _0x2dc686 = 0;
      switch (_0x33af02.type) {
        case "DOMMouseScroll":
          _0x2dc686 = _0x33af02.detail / 3;
          break;
        case "mousewheel":
          _0x2dc686 = _0x33af02.wheelDelta / 120;
          break;
        case "wheel":
          _0x2dc686 = _0x33af02.deltaY;
          switch (_0x33af02.deltaMode) {
            case 0:
              _0x2dc686 /= 100;
              break;
            case 1:
              _0x2dc686 /= 3;
              break;
            case 2:
              _0x2dc686 *= 80;
              break;
            default:
              throw "unrecognized mouse wheel delta mode: " + _0x33af02.deltaMode;
          }
          break;
        default:
          throw "unrecognized mouse wheel event: " + _0x33af02.type;
      }
      return _0x2dc686;
    },
    mouseX: 0,
    mouseY: 0,
    mouseMovementX: 0,
    mouseMovementY: 0,
    touches: {},
    lastTouches: {},
    calculateMouseEvent: function (_0x11d8bb) {
      if (_0x232a5c.pointerLock) {
        if (_0x11d8bb.type != "mousemove" && "mozMovementX" in _0x11d8bb) {
          _0x232a5c.mouseMovementX = _0x232a5c.mouseMovementY = 0;
        } else {
          _0x232a5c.mouseMovementX = _0x232a5c.getMovementX(_0x11d8bb);
          _0x232a5c.mouseMovementY = _0x232a5c.getMovementY(_0x11d8bb);
        }
        if (typeof SDL != "undefined") {
          _0x232a5c.mouseX = SDL.mouseX + _0x232a5c.mouseMovementX;
          _0x232a5c.mouseY = SDL.mouseY + _0x232a5c.mouseMovementY;
        } else {
          _0x232a5c.mouseX += _0x232a5c.mouseMovementX;
          _0x232a5c.mouseY += _0x232a5c.mouseMovementY;
        }
      } else {
        var _0x208c63 = _0x25e483.canvas.getBoundingClientRect();
        var _0x3ee752 = _0x25e483.canvas.width;
        var _0x186dd1 = _0x25e483.canvas.height;
        var _0x489de4 = typeof window.scrollX !== "undefined" ? window.scrollX : window.pageXOffset;
        var _0x4b119f = typeof window.scrollY !== "undefined" ? window.scrollY : window.pageYOffset;
        if (_0x11d8bb.type === "touchstart" || _0x11d8bb.type === "touchend" || _0x11d8bb.type === "touchmove") {
          var _0x65197a = _0x11d8bb.touch;
          if (_0x65197a === undefined) {
            return;
          }
          var _0xa9cd5f = _0x65197a.pageX - (_0x489de4 + _0x208c63.left);
          var _0xf12197 = _0x65197a.pageY - (_0x4b119f + _0x208c63.top);
          _0xa9cd5f = _0xa9cd5f * (_0x3ee752 / _0x208c63.width);
          _0xf12197 = _0xf12197 * (_0x186dd1 / _0x208c63.height);
          var _0x4bae9c = {
            x: _0xa9cd5f,
            y: _0xf12197
          };
          if (_0x11d8bb.type === "touchstart") {
            _0x232a5c.lastTouches[_0x65197a.identifier] = _0x4bae9c;
            _0x232a5c.touches[_0x65197a.identifier] = _0x4bae9c;
          } else if (_0x11d8bb.type === "touchend" || _0x11d8bb.type === "touchmove") {
            var _0x1e095e = _0x232a5c.touches[_0x65197a.identifier];
            if (!_0x1e095e) {
              _0x1e095e = _0x4bae9c;
            }
            _0x232a5c.lastTouches[_0x65197a.identifier] = _0x1e095e;
            _0x232a5c.touches[_0x65197a.identifier] = _0x4bae9c;
          }
          return;
        }
        var _0x2d6d37 = _0x11d8bb.pageX - (_0x489de4 + _0x208c63.left);
        var _0x12acf5 = _0x11d8bb.pageY - (_0x4b119f + _0x208c63.top);
        _0x2d6d37 = _0x2d6d37 * (_0x3ee752 / _0x208c63.width);
        _0x12acf5 = _0x12acf5 * (_0x186dd1 / _0x208c63.height);
        _0x232a5c.mouseMovementX = _0x2d6d37 - _0x232a5c.mouseX;
        _0x232a5c.mouseMovementY = _0x12acf5 - _0x232a5c.mouseY;
        _0x232a5c.mouseX = _0x2d6d37;
        _0x232a5c.mouseY = _0x12acf5;
      }
    },
    asyncLoad: function (_0x40876e, _0x354b86, _0x3757e5, _0x4c2760) {
      var _0x183e0b = !_0x4c2760 ? _0x1a1e9c("al " + _0x40876e) : "";
      _0x1d302b(_0x40876e, function (_0x1f9a0f) {
        _0x37a78f(_0x1f9a0f, "Loading data file \"" + _0x40876e + "\" failed (no arrayBuffer).");
        _0x354b86(new Uint8Array(_0x1f9a0f));
        if (_0x183e0b) {
          _0x21f06d(_0x183e0b);
        }
      }, function (_0x39a60e) {
        if (_0x3757e5) {
          _0x3757e5();
        } else {
          throw "Loading data file \"" + _0x40876e + "\" failed.";
        }
      });
      if (_0x183e0b) {
        _0x5884c7(_0x183e0b);
      }
    },
    resizeListeners: [],
    updateResizeListeners: function () {
      var _0x1b63cf = _0x25e483.canvas;
      _0x232a5c.resizeListeners.forEach(function (_0x3191b4) {
        _0x3191b4(_0x1b63cf.width, _0x1b63cf.height);
      });
    },
    setCanvasSize: function (_0x3f476b, _0x13ac7d, _0x3e9b53) {
      var _0x1c88de = _0x25e483.canvas;
      _0x232a5c.updateCanvasDimensions(_0x1c88de, _0x3f476b, _0x13ac7d);
      if (!_0x3e9b53) {
        _0x232a5c.updateResizeListeners();
      }
    },
    windowedWidth: 0,
    windowedHeight: 0,
    setFullscreenCanvasSize: function () {
      if (typeof SDL != "undefined") {
        var _0x3a7172 = _0x2f2db0[SDL.screen >> 2];
        _0x3a7172 = _0x3a7172 | 8388608;
        _0x38db74[SDL.screen >> 2] = _0x3a7172;
      }
      _0x232a5c.updateCanvasDimensions(_0x25e483.canvas);
      _0x232a5c.updateResizeListeners();
    },
    setWindowedCanvasSize: function () {
      if (typeof SDL != "undefined") {
        var _0x145782 = _0x2f2db0[SDL.screen >> 2];
        _0x145782 = _0x145782 & ~8388608;
        _0x38db74[SDL.screen >> 2] = _0x145782;
      }
      _0x232a5c.updateCanvasDimensions(_0x25e483.canvas);
      _0x232a5c.updateResizeListeners();
    },
    updateCanvasDimensions: function (_0x40a4b5, _0x2ecb22, _0x1b4018) {
      if (_0x2ecb22 && _0x1b4018) {
        _0x40a4b5.widthNative = _0x2ecb22;
        _0x40a4b5.heightNative = _0x1b4018;
      } else {
        _0x2ecb22 = _0x40a4b5.widthNative;
        _0x1b4018 = _0x40a4b5.heightNative;
      }
      var _0x411bc5 = _0x2ecb22;
      var _0x2c1369 = _0x1b4018;
      if (_0x25e483.forcedAspectRatio && _0x25e483.forcedAspectRatio > 0) {
        if (_0x411bc5 / _0x2c1369 < _0x25e483.forcedAspectRatio) {
          _0x411bc5 = Math.round(_0x2c1369 * _0x25e483.forcedAspectRatio);
        } else {
          _0x2c1369 = Math.round(_0x411bc5 / _0x25e483.forcedAspectRatio);
        }
      }
      if ((document.fullscreenElement || document.mozFullScreenElement || document.msFullscreenElement || document.webkitFullscreenElement || document.webkitCurrentFullScreenElement) === _0x40a4b5.parentNode && typeof screen != "undefined") {
        var _0x268576 = Math.min(screen.width / _0x411bc5, screen.height / _0x2c1369);
        _0x411bc5 = Math.round(_0x411bc5 * _0x268576);
        _0x2c1369 = Math.round(_0x2c1369 * _0x268576);
      }
      if (_0x232a5c.resizeCanvas) {
        if (_0x40a4b5.width != _0x411bc5) {
          _0x40a4b5.width = _0x411bc5;
        }
        if (_0x40a4b5.height != _0x2c1369) {
          _0x40a4b5.height = _0x2c1369;
        }
        if (typeof _0x40a4b5.style != "undefined") {
          _0x40a4b5.style.removeProperty("width");
          _0x40a4b5.style.removeProperty("height");
        }
      } else {
        if (_0x40a4b5.width != _0x2ecb22) {
          _0x40a4b5.width = _0x2ecb22;
        }
        if (_0x40a4b5.height != _0x1b4018) {
          _0x40a4b5.height = _0x1b4018;
        }
        if (typeof _0x40a4b5.style != "undefined") {
          if (_0x411bc5 != _0x2ecb22 || _0x2c1369 != _0x1b4018) {
            _0x40a4b5.style.setProperty("width", _0x411bc5 + "px", "important");
            _0x40a4b5.style.setProperty("height", _0x2c1369 + "px", "important");
          } else {
            _0x40a4b5.style.removeProperty("width");
            _0x40a4b5.style.removeProperty("height");
          }
        }
      }
    },
    wgetRequests: {},
    nextWgetRequestHandle: 0,
    getNextWgetRequestHandle: function () {
      var _0x22b444 = _0x232a5c.nextWgetRequestHandle;
      _0x232a5c.nextWgetRequestHandle++;
      return _0x22b444;
    }
  };
  function _0x2ba15f() {
    _0x232a5c.mainLoop.pause();
    _0x232a5c.mainLoop.func = null;
  }
  function _0x1c11fe(_0x1ac4c7) {
    clearInterval(_0x1ac4c7);
  }
  var _0x2015e4 = {
    inEventHandler: 0,
    removeAllEventListeners: function () {
      for (var _0x6ff63c = _0x2015e4.eventHandlers.length - 1; _0x6ff63c >= 0; --_0x6ff63c) {
        _0x2015e4._removeHandler(_0x6ff63c);
      }
      _0x2015e4.eventHandlers = [];
      _0x2015e4.deferredCalls = [];
    },
    registerRemoveEventListeners: function () {
      if (!_0x2015e4.removeEventListenersRegistered) {
        _0x1284f2.push(_0x2015e4.removeAllEventListeners);
        _0x2015e4.removeEventListenersRegistered = true;
      }
    },
    deferredCalls: [],
    deferCall: function (_0x452dde, _0x83fa67, _0xfe8e08) {
      function _0x148779(_0x24332d, _0x2ac26f) {
        if (_0x24332d.length != _0x2ac26f.length) {
          return false;
        }
        for (var _0x2320ef in _0x24332d) {
          if (_0x24332d[_0x2320ef] != _0x2ac26f[_0x2320ef]) {
            return false;
          }
        }
        return true;
      }
      for (var _0x51cffb in _0x2015e4.deferredCalls) {
        var _0xfb33df = _0x2015e4.deferredCalls[_0x51cffb];
        if (_0xfb33df.targetFunction == _0x452dde && _0x148779(_0xfb33df.argsList, _0xfe8e08)) {
          return;
        }
      }
      _0x2015e4.deferredCalls.push({
        targetFunction: _0x452dde,
        precedence: _0x83fa67,
        argsList: _0xfe8e08
      });
      _0x2015e4.deferredCalls.sort(function (_0x4ddab2, _0x27df33) {
        return _0x4ddab2.precedence < _0x27df33.precedence;
      });
    },
    removeDeferredCalls: function (_0xc20c4b) {
      for (var _0x594b32 = 0; _0x594b32 < _0x2015e4.deferredCalls.length; ++_0x594b32) {
        if (_0x2015e4.deferredCalls[_0x594b32].targetFunction == _0xc20c4b) {
          _0x2015e4.deferredCalls.splice(_0x594b32, 1);
          --_0x594b32;
        }
      }
    },
    canPerformEventHandlerRequests: function () {
      return _0x2015e4.inEventHandler && _0x2015e4.currentEventHandler.allowsDeferredCalls;
    },
    runDeferredCalls: function () {
      if (!_0x2015e4.canPerformEventHandlerRequests()) {
        return;
      }
      for (var _0x2d7bc4 = 0; _0x2d7bc4 < _0x2015e4.deferredCalls.length; ++_0x2d7bc4) {
        var _0x46c025 = _0x2015e4.deferredCalls[_0x2d7bc4];
        _0x2015e4.deferredCalls.splice(_0x2d7bc4, 1);
        --_0x2d7bc4;
        _0x46c025.targetFunction.apply(null, _0x46c025.argsList);
      }
    },
    eventHandlers: [],
    removeAllHandlersOnTarget: function (_0x4c3e72, _0x1d5409) {
      for (var _0x8e704 = 0; _0x8e704 < _0x2015e4.eventHandlers.length; ++_0x8e704) {
        if (_0x2015e4.eventHandlers[_0x8e704].target == _0x4c3e72 && (!_0x1d5409 || _0x1d5409 == _0x2015e4.eventHandlers[_0x8e704].eventTypeString)) {
          _0x2015e4._removeHandler(_0x8e704--);
        }
      }
    },
    _removeHandler: function (_0x308ea3) {
      var _0x4ec43d = _0x2015e4.eventHandlers[_0x308ea3];
      _0x4ec43d.target.removeEventListener(_0x4ec43d.eventTypeString, _0x4ec43d.eventListenerFunc, _0x4ec43d.useCapture);
      _0x2015e4.eventHandlers.splice(_0x308ea3, 1);
    },
    registerOrRemoveHandler: function (_0x490cb8) {
      var _0x4f82b6 = function _0x377425(_0x5e3447) {
        ++_0x2015e4.inEventHandler;
        _0x2015e4.currentEventHandler = _0x490cb8;
        _0x2015e4.runDeferredCalls();
        _0x490cb8.handlerFunc(_0x5e3447);
        _0x2015e4.runDeferredCalls();
        --_0x2015e4.inEventHandler;
      };
      if (_0x490cb8.callbackfunc) {
        _0x490cb8.eventListenerFunc = _0x4f82b6;
        _0x490cb8.target.addEventListener(_0x490cb8.eventTypeString, _0x4f82b6, _0x490cb8.useCapture);
        _0x2015e4.eventHandlers.push(_0x490cb8);
        _0x2015e4.registerRemoveEventListeners();
      } else {
        for (var _0x1ef236 = 0; _0x1ef236 < _0x2015e4.eventHandlers.length; ++_0x1ef236) {
          if (_0x2015e4.eventHandlers[_0x1ef236].target == _0x490cb8.target && _0x2015e4.eventHandlers[_0x1ef236].eventTypeString == _0x490cb8.eventTypeString) {
            _0x2015e4._removeHandler(_0x1ef236--);
          }
        }
      }
    },
    getNodeNameForTarget: function (_0x1ba6f9) {
      if (!_0x1ba6f9) {
        return "";
      }
      if (_0x1ba6f9 == window) {
        return "#window";
      }
      if (_0x1ba6f9 == screen) {
        return "#screen";
      }
      if (_0x1ba6f9 && _0x1ba6f9.nodeName) {
        return _0x1ba6f9.nodeName;
      } else {
        return "";
      }
    },
    fullscreenEnabled: function () {
      return document.fullscreenEnabled || document.webkitFullscreenEnabled;
    }
  };
  var _0x15cf3d = {};
  function _0xc54171(_0x52f3a9) {
    if (_0x52f3a9 > 2) {
      return _0xdfb7b2(_0x52f3a9);
    } else {
      return _0x52f3a9;
    }
  }
  var _0x150aa2 = [0, typeof document !== "undefined" ? document : 0, typeof window !== "undefined" ? window : 0];
  function _0x35a8a5(_0x3cdfa6) {
    _0x3cdfa6 = _0xc54171(_0x3cdfa6);
    var _0x2c9210 = _0x150aa2[_0x3cdfa6] || (typeof document !== "undefined" ? document.querySelector(_0x3cdfa6) : undefined);
    return _0x2c9210;
  }
  function _0x2481c1(_0xc66380) {
    return _0x35a8a5(_0xc66380);
  }
  function _0x2549e4(_0x3c73c1, _0x19872b, _0x3cc870) {
    var _0x5623a1 = _0x2481c1(_0x3c73c1);
    if (!_0x5623a1) {
      return -4;
    }
    _0x38db74[_0x19872b >> 2] = _0x5623a1.width;
    _0x38db74[_0x3cc870 >> 2] = _0x5623a1.height;
  }
  function _0x512228(_0x11d1e3) {
    var _0x4e7b07 = _0x19cca3();
    var _0x1ff623 = _0x216ace(8);
    var _0x12bfb4 = _0x1ff623 + 4;
    var _0x372108 = _0x216ace(_0x11d1e3.id.length + 1);
    _0x517360(_0x11d1e3.id, _0x372108, _0x11d1e3.id.length + 1);
    var _0x444300 = _0x2549e4(_0x372108, _0x1ff623, _0x12bfb4);
    var _0x4ea232 = [_0x38db74[_0x1ff623 >> 2], _0x38db74[_0x12bfb4 >> 2]];
    _0x4cb3d3(_0x4e7b07);
    return _0x4ea232;
  }
  function _0x45ff65(_0x553db1, _0x278b43, _0x3065c8) {
    var _0x4350b4 = _0x2481c1(_0x553db1);
    if (!_0x4350b4) {
      return -4;
    }
    _0x4350b4.width = _0x278b43;
    _0x4350b4.height = _0x3065c8;
    return 0;
  }
  function _0xe52db4(_0x3d0c54, _0x131df8, _0x391ecc) {
    if (!_0x3d0c54.controlTransferredOffscreen) {
      _0x3d0c54.width = _0x131df8;
      _0x3d0c54.height = _0x391ecc;
    } else {
      var _0x1fc13c = _0x19cca3();
      var _0x14acca = _0x216ace(_0x3d0c54.id.length + 1);
      _0x517360(_0x3d0c54.id, _0x14acca, _0x3d0c54.id.length + 1);
      _0x45ff65(_0x14acca, _0x131df8, _0x391ecc);
      _0x4cb3d3(_0x1fc13c);
    }
  }
  function _0x48f2ea(_0x37d739) {
    var _0x38073e = _0x512228(_0x37d739);
    var _0x235903 = _0x38073e[0];
    var _0x2982e9 = _0x38073e[1];
    var _0x45ce94 = _0x37d739.style.width;
    var _0x1013dc = _0x37d739.style.height;
    var _0x523f35 = _0x37d739.style.backgroundColor;
    var _0x4bc390 = document.body.style.backgroundColor;
    var _0x829039 = _0x37d739.style.paddingLeft;
    var _0x498e5e = _0x37d739.style.paddingRight;
    var _0x4a6d6c = _0x37d739.style.paddingTop;
    var _0xef2e0a = _0x37d739.style.paddingBottom;
    var _0x5945d7 = _0x37d739.style.marginLeft;
    var _0x459d89 = _0x37d739.style.marginRight;
    var _0xed9076 = _0x37d739.style.marginTop;
    var _0x5c8957 = _0x37d739.style.marginBottom;
    var _0x4346c0 = document.body.style.margin;
    var _0x4b87ee = document.documentElement.style.overflow;
    var _0x2ef7b0 = document.body.scroll;
    var _0x2118cc = _0x37d739.style.imageRendering;
    function _0xc348d7() {
      var _0x3619c5 = document.fullscreenElement || document.webkitFullscreenElement || document.msFullscreenElement;
      if (!_0x3619c5) {
        document.removeEventListener("fullscreenchange", _0xc348d7);
        document.removeEventListener("webkitfullscreenchange", _0xc348d7);
        _0xe52db4(_0x37d739, _0x235903, _0x2982e9);
        _0x37d739.style.width = _0x45ce94;
        _0x37d739.style.height = _0x1013dc;
        _0x37d739.style.backgroundColor = _0x523f35;
        if (!_0x4bc390) {
          document.body.style.backgroundColor = "white";
        }
        document.body.style.backgroundColor = _0x4bc390;
        _0x37d739.style.paddingLeft = _0x829039;
        _0x37d739.style.paddingRight = _0x498e5e;
        _0x37d739.style.paddingTop = _0x4a6d6c;
        _0x37d739.style.paddingBottom = _0xef2e0a;
        _0x37d739.style.marginLeft = _0x5945d7;
        _0x37d739.style.marginRight = _0x459d89;
        _0x37d739.style.marginTop = _0xed9076;
        _0x37d739.style.marginBottom = _0x5c8957;
        document.body.style.margin = _0x4346c0;
        document.documentElement.style.overflow = _0x4b87ee;
        document.body.scroll = _0x2ef7b0;
        _0x37d739.style.imageRendering = _0x2118cc;
        if (_0x37d739.GLctxObject) {
          _0x37d739.GLctxObject.GLctx.viewport(0, 0, _0x235903, _0x2982e9);
        }
        if (_0x15cf3d.canvasResizedCallback) {
          (function (_0x277a23, _0x33944f, _0xc677c3) {
            return _0x517871.apply(null, [_0x15cf3d.canvasResizedCallback, _0x277a23, _0x33944f, _0xc677c3]);
          })(37, 0, _0x15cf3d.canvasResizedCallbackUserData);
        }
      }
    }
    document.addEventListener("fullscreenchange", _0xc348d7);
    document.addEventListener("webkitfullscreenchange", _0xc348d7);
    return _0xc348d7;
  }
  function _0x1301e7(_0x35562d, _0x5312de, _0xc0b211) {
    _0x35562d.style.paddingLeft = _0x35562d.style.paddingRight = _0xc0b211 + "px";
    _0x35562d.style.paddingTop = _0x35562d.style.paddingBottom = _0x5312de + "px";
  }
  function _0xa16dfb(_0x45209b) {
    if (_0x150aa2.indexOf(_0x45209b) < 0) {
      return _0x45209b.getBoundingClientRect();
    } else {
      return {
        left: 0,
        top: 0
      };
    }
  }
  function _0x46b9e4(_0x5be8e4, _0x4d4beb) {
    var _0x289c3e = _0x48f2ea(_0x5be8e4);
    var _0x9f2842 = _0x4d4beb.softFullscreen ? innerWidth : screen.width;
    var _0x3d73ac = _0x4d4beb.softFullscreen ? innerHeight : screen.height;
    var _0x4f42c3 = _0xa16dfb(_0x5be8e4);
    var _0x1a772a = _0x4f42c3.width;
    var _0x2ee3f4 = _0x4f42c3.height;
    var _0x5aea80 = _0x512228(_0x5be8e4);
    var _0x5494d4 = _0x5aea80[0];
    var _0x544478 = _0x5aea80[1];
    if (_0x4d4beb.scaleMode == 3) {
      _0x1301e7(_0x5be8e4, (_0x3d73ac - _0x2ee3f4) / 2, (_0x9f2842 - _0x1a772a) / 2);
      _0x9f2842 = _0x1a772a;
      _0x3d73ac = _0x2ee3f4;
    } else if (_0x4d4beb.scaleMode == 2) {
      if (_0x9f2842 * _0x544478 < _0x5494d4 * _0x3d73ac) {
        var _0x2bbe4b = _0x544478 * _0x9f2842 / _0x5494d4;
        _0x1301e7(_0x5be8e4, (_0x3d73ac - _0x2bbe4b) / 2, 0);
        _0x3d73ac = _0x2bbe4b;
      } else {
        var _0x288271 = _0x5494d4 * _0x3d73ac / _0x544478;
        _0x1301e7(_0x5be8e4, 0, (_0x9f2842 - _0x288271) / 2);
        _0x9f2842 = _0x288271;
      }
    }
    if (!_0x5be8e4.style.backgroundColor) {
      _0x5be8e4.style.backgroundColor = "black";
    }
    if (!document.body.style.backgroundColor) {
      document.body.style.backgroundColor = "black";
    }
    _0x5be8e4.style.width = _0x9f2842 + "px";
    _0x5be8e4.style.height = _0x3d73ac + "px";
    if (_0x4d4beb.filteringMode == 1) {
      _0x5be8e4.style.imageRendering = "optimizeSpeed";
      _0x5be8e4.style.imageRendering = "-moz-crisp-edges";
      _0x5be8e4.style.imageRendering = "-o-crisp-edges";
      _0x5be8e4.style.imageRendering = "-webkit-optimize-contrast";
      _0x5be8e4.style.imageRendering = "optimize-contrast";
      _0x5be8e4.style.imageRendering = "crisp-edges";
      _0x5be8e4.style.imageRendering = "pixelated";
    }
    var _0x1b707c = _0x4d4beb.canvasResolutionScaleMode == 2 ? devicePixelRatio : 1;
    if (_0x4d4beb.canvasResolutionScaleMode != 0) {
      var _0x1ffce7 = _0x9f2842 * _0x1b707c | 0;
      var _0x1b8be2 = _0x3d73ac * _0x1b707c | 0;
      _0xe52db4(_0x5be8e4, _0x1ffce7, _0x1b8be2);
      if (_0x5be8e4.GLctxObject) {
        _0x5be8e4.GLctxObject.GLctx.viewport(0, 0, _0x1ffce7, _0x1b8be2);
      }
    }
    return _0x289c3e;
  }
  function _0x232f9b(_0x33ba9b, _0x30aef5) {
    if (_0x30aef5.scaleMode != 0 || _0x30aef5.canvasResolutionScaleMode != 0) {
      _0x46b9e4(_0x33ba9b, _0x30aef5);
    }
    if (_0x33ba9b.requestFullscreen) {
      _0x33ba9b.requestFullscreen();
    } else if (_0x33ba9b.webkitRequestFullscreen) {
      _0x33ba9b.webkitRequestFullscreen(Element.ALLOW_KEYBOARD_INPUT);
    } else if (_0x2015e4.fullscreenEnabled()) {
      return -3;
    } else {
      return -1;
    }
    _0x15cf3d = _0x30aef5;
    if (_0x30aef5.canvasResizedCallback) {
      (function (_0x215656, _0x2fe620, _0x36353e) {
        return _0x517871.apply(null, [_0x30aef5.canvasResizedCallback, _0x215656, _0x2fe620, _0x36353e]);
      })(37, 0, _0x30aef5.canvasResizedCallbackUserData);
    }
    return 0;
  }
  function _0x3786e0() {
    if (!_0x2015e4.fullscreenEnabled()) {
      return -1;
    }
    _0x2015e4.removeDeferredCalls(_0x232f9b);
    var _0xd7e6e1 = _0x150aa2[1];
    if (_0xd7e6e1.exitFullscreen) {
      if (_0xd7e6e1.fullscreenElement) {
        _0xd7e6e1.exitFullscreen();
      }
    } else if (_0xd7e6e1.webkitExitFullscreen) {
      if (_0xd7e6e1.webkitFullscreenElement) {
        _0xd7e6e1.webkitExitFullscreen();
      }
    } else {
      return -1;
    }
    return 0;
  }
  function _0x1c1332(_0x1008ca) {
    if (_0x1008ca.requestPointerLock) {
      _0x1008ca.requestPointerLock();
    } else if (_0x1008ca.msRequestPointerLock) {
      _0x1008ca.msRequestPointerLock();
    } else if (document.body.requestPointerLock || document.body.msRequestPointerLock) {
      return -3;
    } else {
      return -1;
    }
    return 0;
  }
  function _0x1d0623() {
    _0x2015e4.removeDeferredCalls(_0x1c1332);
    if (document.exitPointerLock) {
      document.exitPointerLock();
    } else if (document.msExitPointerLock) {
      document.msExitPointerLock();
    } else {
      return -1;
    }
    return 0;
  }
  function _0x446384(_0x505604) {
    var _0x1471bc = document.fullscreenElement || document.mozFullScreenElement || document.webkitFullscreenElement || document.msFullscreenElement;
    var _0xb5b32f = !!_0x1471bc;
    _0x38db74[_0x505604 >> 2] = _0xb5b32f;
    _0x38db74[_0x505604 + 4 >> 2] = _0x2015e4.fullscreenEnabled();
    var _0x39f642 = _0xb5b32f ? _0x1471bc : _0x2015e4.previousFullscreenElement;
    var _0x5ed1f3 = _0x2015e4.getNodeNameForTarget(_0x39f642);
    var _0x4b8dca = _0x39f642 && _0x39f642.id ? _0x39f642.id : "";
    _0x517360(_0x5ed1f3, _0x505604 + 8, 128);
    _0x517360(_0x4b8dca, _0x505604 + 136, 128);
    _0x38db74[_0x505604 + 264 >> 2] = _0x39f642 ? _0x39f642.clientWidth : 0;
    _0x38db74[_0x505604 + 268 >> 2] = _0x39f642 ? _0x39f642.clientHeight : 0;
    _0x38db74[_0x505604 + 272 >> 2] = screen.width;
    _0x38db74[_0x505604 + 276 >> 2] = screen.height;
    if (_0xb5b32f) {
      _0x2015e4.previousFullscreenElement = _0x1471bc;
    }
  }
  function _0x427207(_0x2f2079) {
    if (!_0x2015e4.fullscreenEnabled()) {
      return -1;
    }
    _0x446384(_0x2f2079);
    return 0;
  }
  function _0x310d47(_0x3dc602, _0x415eea) {
    _0x2f1a63[_0x3dc602 >> 3] = _0x415eea.timestamp;
    for (var _0x5e18de = 0; _0x5e18de < _0x415eea.axes.length; ++_0x5e18de) {
      _0x2f1a63[_0x3dc602 + _0x5e18de * 8 + 16 >> 3] = _0x415eea.axes[_0x5e18de];
    }
    for (var _0x5e18de = 0; _0x5e18de < _0x415eea.buttons.length; ++_0x5e18de) {
      if (typeof _0x415eea.buttons[_0x5e18de] === "object") {
        _0x2f1a63[_0x3dc602 + _0x5e18de * 8 + 528 >> 3] = _0x415eea.buttons[_0x5e18de].value;
      } else {
        _0x2f1a63[_0x3dc602 + _0x5e18de * 8 + 528 >> 3] = _0x415eea.buttons[_0x5e18de];
      }
    }
    for (var _0x5e18de = 0; _0x5e18de < _0x415eea.buttons.length; ++_0x5e18de) {
      if (typeof _0x415eea.buttons[_0x5e18de] === "object") {
        _0x38db74[_0x3dc602 + _0x5e18de * 4 + 1040 >> 2] = _0x415eea.buttons[_0x5e18de].pressed;
      } else {
        _0x38db74[_0x3dc602 + _0x5e18de * 4 + 1040 >> 2] = _0x415eea.buttons[_0x5e18de] == 1;
      }
    }
    _0x38db74[_0x3dc602 + 1296 >> 2] = _0x415eea.connected;
    _0x38db74[_0x3dc602 + 1300 >> 2] = _0x415eea.index;
    _0x38db74[_0x3dc602 + 8 >> 2] = _0x415eea.axes.length;
    _0x38db74[_0x3dc602 + 12 >> 2] = _0x415eea.buttons.length;
    _0x517360(_0x415eea.id, _0x3dc602 + 1304, 64);
    _0x517360(_0x415eea.mapping, _0x3dc602 + 1368, 64);
  }
  function _0x41f25c(_0x2915ab, _0x2cacba) {
    if (_0x2915ab < 0 || _0x2915ab >= _0x2015e4.lastGamepadState.length) {
      return -5;
    }
    if (!_0x2015e4.lastGamepadState[_0x2915ab]) {
      return -7;
    }
    _0x310d47(_0x2cacba, _0x2015e4.lastGamepadState[_0x2915ab]);
    return 0;
  }
  function _0x32d4e5() {
    return 2147483648;
  }
  function _0x7df6c2() {
    return _0x2015e4.lastGamepadState.length;
  }
  function _0x3948d7() {
    _0x2015e4.removeAllEventListeners();
  }
  function _0x269c32(_0x5a9b94) {
    return !_0x2375dd.contexts[_0x5a9b94] || _0x2375dd.contexts[_0x5a9b94].GLctx.isContextLost();
  }
  function _0x5432eb(_0x1609a2) {
    return _0x1609a2 < 0 || _0x1609a2 === 0 && 1 / _0x1609a2 === -Infinity;
  }
  function _0x33cceb(_0x5a7e90, _0x1e1c08) {
    return (_0x5a7e90 >>> 0) + _0x1e1c08 * 4294967296;
  }
  function _0xaee2a5(_0x261a67, _0x4266bd) {
    return (_0x261a67 >>> 0) + (_0x4266bd >>> 0) * 4294967296;
  }
  function _0x5b4f6c(_0x231d29, _0x4bc957) {
    if (_0x231d29 <= 0) {
      return _0x231d29;
    }
    var _0x343bdd = _0x4bc957 <= 32 ? Math.abs(1 << _0x4bc957 - 1) : Math.pow(2, _0x4bc957 - 1);
    if (_0x231d29 >= _0x343bdd && (_0x4bc957 <= 32 || _0x231d29 > _0x343bdd)) {
      _0x231d29 = _0x343bdd * -2 + _0x231d29;
    }
    return _0x231d29;
  }
  function _0x3d3619(_0x4b44f, _0x1410a7) {
    if (_0x4b44f >= 0) {
      return _0x4b44f;
    }
    if (_0x1410a7 <= 32) {
      return Math.abs(1 << _0x1410a7 - 1) * 2 + _0x4b44f;
    } else {
      return Math.pow(2, _0x1410a7) + _0x4b44f;
    }
  }
  function _0x1ba270(_0x1f1bd2, _0x5bb475) {
    var _0x12f460 = _0x1f1bd2;
    var _0x24e1a7 = _0x5bb475;
    function _0x345231(_0x3f068d, _0x17d986) {
      if (_0x17d986 === "double" || _0x17d986 === "i64") {
        if (_0x3f068d & 7) {
          _0x3f068d += 4;
        }
      } else {}
      return _0x3f068d;
    }
    function _0x16caa2(_0x4ede97) {
      var _0x3cca0a;
      _0x24e1a7 = _0x345231(_0x24e1a7, _0x4ede97);
      if (_0x4ede97 === "double") {
        _0x3cca0a = _0x2f1a63[_0x24e1a7 >> 3];
        _0x24e1a7 += 8;
      } else if (_0x4ede97 == "i64") {
        _0x3cca0a = [_0x38db74[_0x24e1a7 >> 2], _0x38db74[_0x24e1a7 + 4 >> 2]];
        _0x24e1a7 += 8;
      } else {
        _0x4ede97 = "i32";
        _0x3cca0a = _0x38db74[_0x24e1a7 >> 2];
        _0x24e1a7 += 4;
      }
      return _0x3cca0a;
    }
    var _0x207b57 = [];
    var _0x5e11b1;
    var _0x3c5fa2;
    var _0x216ef6;
    while (1) {
      var _0x3ab8f7 = _0x12f460;
      _0x5e11b1 = _0x3b8c2f[_0x12f460 >> 0];
      if (_0x5e11b1 === 0) {
        break;
      }
      _0x3c5fa2 = _0x3b8c2f[_0x12f460 + 1 >> 0];
      if (_0x5e11b1 == 37) {
        var _0x7d8978 = false;
        var _0x24963f = false;
        var _0x30355b = false;
        var _0xfc2edb = false;
        var _0x547e50 = false;
        _0x5cefac: while (1) {
          switch (_0x3c5fa2) {
            case 43:
              _0x7d8978 = true;
              break;
            case 45:
              _0x24963f = true;
              break;
            case 35:
              _0x30355b = true;
              break;
            case 48:
              if (_0xfc2edb) {
                break _0x5cefac;
              } else {
                _0xfc2edb = true;
                break;
              }
            case 32:
              _0x547e50 = true;
              break;
            default:
              break _0x5cefac;
          }
          _0x12f460++;
          _0x3c5fa2 = _0x3b8c2f[_0x12f460 + 1 >> 0];
        }
        var _0x3a29a7 = 0;
        if (_0x3c5fa2 == 42) {
          _0x3a29a7 = _0x16caa2("i32");
          _0x12f460++;
          _0x3c5fa2 = _0x3b8c2f[_0x12f460 + 1 >> 0];
        } else {
          while (_0x3c5fa2 >= 48 && _0x3c5fa2 <= 57) {
            _0x3a29a7 = _0x3a29a7 * 10 + (_0x3c5fa2 - 48);
            _0x12f460++;
            _0x3c5fa2 = _0x3b8c2f[_0x12f460 + 1 >> 0];
          }
        }
        var _0x2e3c82 = false;
        var _0x539e0f = -1;
        if (_0x3c5fa2 == 46) {
          _0x539e0f = 0;
          _0x2e3c82 = true;
          _0x12f460++;
          _0x3c5fa2 = _0x3b8c2f[_0x12f460 + 1 >> 0];
          if (_0x3c5fa2 == 42) {
            _0x539e0f = _0x16caa2("i32");
            _0x12f460++;
          } else {
            while (1) {
              var _0x1fe507 = _0x3b8c2f[_0x12f460 + 1 >> 0];
              if (_0x1fe507 < 48 || _0x1fe507 > 57) {
                break;
              }
              _0x539e0f = _0x539e0f * 10 + (_0x1fe507 - 48);
              _0x12f460++;
            }
          }
          _0x3c5fa2 = _0x3b8c2f[_0x12f460 + 1 >> 0];
        }
        if (_0x539e0f < 0) {
          _0x539e0f = 6;
          _0x2e3c82 = false;
        }
        var _0x2b29a7;
        switch (String.fromCharCode(_0x3c5fa2)) {
          case "h":
            var _0x2ce62a = _0x3b8c2f[_0x12f460 + 2 >> 0];
            if (_0x2ce62a == 104) {
              _0x12f460++;
              _0x2b29a7 = 1;
            } else {
              _0x2b29a7 = 2;
            }
            break;
          case "l":
            var _0x2ce62a = _0x3b8c2f[_0x12f460 + 2 >> 0];
            if (_0x2ce62a == 108) {
              _0x12f460++;
              _0x2b29a7 = 8;
            } else {
              _0x2b29a7 = 4;
            }
            break;
          case "L":
          case "q":
          case "j":
            _0x2b29a7 = 8;
            break;
          case "z":
          case "t":
          case "I":
            _0x2b29a7 = 4;
            break;
          default:
            _0x2b29a7 = null;
        }
        if (_0x2b29a7) {
          _0x12f460++;
        }
        _0x3c5fa2 = _0x3b8c2f[_0x12f460 + 1 >> 0];
        switch (String.fromCharCode(_0x3c5fa2)) {
          case "d":
          case "i":
          case "u":
          case "o":
          case "x":
          case "X":
          case "p":
            {
              var _0x2a067d = _0x3c5fa2 == 100 || _0x3c5fa2 == 105;
              _0x2b29a7 = _0x2b29a7 || 4;
              _0x216ef6 = _0x16caa2("i" + _0x2b29a7 * 8);
              var _0x34c4ef;
              if (_0x2b29a7 == 8) {
                _0x216ef6 = _0x3c5fa2 == 117 ? _0xaee2a5(_0x216ef6[0], _0x216ef6[1]) : _0x33cceb(_0x216ef6[0], _0x216ef6[1]);
              }
              if (_0x2b29a7 <= 4) {
                var _0x180178 = Math.pow(256, _0x2b29a7) - 1;
                _0x216ef6 = (_0x2a067d ? _0x5b4f6c : _0x3d3619)(_0x216ef6 & _0x180178, _0x2b29a7 * 8);
              }
              var _0x22291d = Math.abs(_0x216ef6);
              var _0x216a25 = "";
              if (_0x3c5fa2 == 100 || _0x3c5fa2 == 105) {
                _0x34c4ef = _0x5b4f6c(_0x216ef6, _0x2b29a7 * 8, 1).toString(10);
              } else if (_0x3c5fa2 == 117) {
                _0x34c4ef = _0x3d3619(_0x216ef6, _0x2b29a7 * 8, 1).toString(10);
                _0x216ef6 = Math.abs(_0x216ef6);
              } else if (_0x3c5fa2 == 111) {
                _0x34c4ef = (_0x30355b ? "0" : "") + _0x22291d.toString(8);
              } else if (_0x3c5fa2 == 120 || _0x3c5fa2 == 88) {
                _0x216a25 = _0x30355b && _0x216ef6 != 0 ? "0x" : "";
                if (_0x216ef6 < 0) {
                  _0x216ef6 = -_0x216ef6;
                  _0x34c4ef = (_0x22291d - 1).toString(16);
                  var _0x3cd128 = [];
                  for (var _0x17d8bd = 0; _0x17d8bd < _0x34c4ef.length; _0x17d8bd++) {
                    _0x3cd128.push((15 - parseInt(_0x34c4ef[_0x17d8bd], 16)).toString(16));
                  }
                  _0x34c4ef = _0x3cd128.join("");
                  while (_0x34c4ef.length < _0x2b29a7 * 2) {
                    _0x34c4ef = "f" + _0x34c4ef;
                  }
                } else {
                  _0x34c4ef = _0x22291d.toString(16);
                }
                if (_0x3c5fa2 == 88) {
                  _0x216a25 = _0x216a25.toUpperCase();
                  _0x34c4ef = _0x34c4ef.toUpperCase();
                }
              } else if (_0x3c5fa2 == 112) {
                if (_0x22291d === 0) {
                  _0x34c4ef = "(nil)";
                } else {
                  _0x216a25 = "0x";
                  _0x34c4ef = _0x22291d.toString(16);
                }
              }
              if (_0x2e3c82) {
                while (_0x34c4ef.length < _0x539e0f) {
                  _0x34c4ef = "0" + _0x34c4ef;
                }
              }
              if (_0x216ef6 >= 0) {
                if (_0x7d8978) {
                  _0x216a25 = "+" + _0x216a25;
                } else if (_0x547e50) {
                  _0x216a25 = " " + _0x216a25;
                }
              }
              if (_0x34c4ef.charAt(0) == "-") {
                _0x216a25 = "-" + _0x216a25;
                _0x34c4ef = _0x34c4ef.substr(1);
              }
              while (_0x216a25.length + _0x34c4ef.length < _0x3a29a7) {
                if (_0x24963f) {
                  _0x34c4ef += " ";
                } else if (_0xfc2edb) {
                  _0x34c4ef = "0" + _0x34c4ef;
                } else {
                  _0x216a25 = " " + _0x216a25;
                }
              }
              _0x34c4ef = _0x216a25 + _0x34c4ef;
              _0x34c4ef.split("").forEach(function (_0x1913de) {
                _0x207b57.push(_0x1913de.charCodeAt(0));
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
              _0x216ef6 = _0x16caa2("double");
              var _0x34c4ef;
              if (isNaN(_0x216ef6)) {
                _0x34c4ef = "nan";
                _0xfc2edb = false;
              } else if (!isFinite(_0x216ef6)) {
                _0x34c4ef = (_0x216ef6 < 0 ? "-" : "") + "inf";
                _0xfc2edb = false;
              } else {
                var _0x3acb09 = false;
                var _0x57b64c = Math.min(_0x539e0f, 20);
                if (_0x3c5fa2 == 103 || _0x3c5fa2 == 71) {
                  _0x3acb09 = true;
                  _0x539e0f = _0x539e0f || 1;
                  var _0x5d2eca = parseInt(_0x216ef6.toExponential(_0x57b64c).split("e")[1], 10);
                  if (_0x539e0f > _0x5d2eca && _0x5d2eca >= -4) {
                    _0x3c5fa2 = (_0x3c5fa2 == 103 ? "f" : "F").charCodeAt(0);
                    _0x539e0f -= _0x5d2eca + 1;
                  } else {
                    _0x3c5fa2 = (_0x3c5fa2 == 103 ? "e" : "E").charCodeAt(0);
                    _0x539e0f--;
                  }
                  _0x57b64c = Math.min(_0x539e0f, 20);
                }
                if (_0x3c5fa2 == 101 || _0x3c5fa2 == 69) {
                  _0x34c4ef = _0x216ef6.toExponential(_0x57b64c);
                  if (/[eE][-+]\d$/.test(_0x34c4ef)) {
                    _0x34c4ef = _0x34c4ef.slice(0, -1) + "0" + _0x34c4ef.slice(-1);
                  }
                } else if (_0x3c5fa2 == 102 || _0x3c5fa2 == 70) {
                  _0x34c4ef = _0x216ef6.toFixed(_0x57b64c);
                  if (_0x216ef6 === 0 && _0x5432eb(_0x216ef6)) {
                    _0x34c4ef = "-" + _0x34c4ef;
                  }
                }
                var _0x25c66f = _0x34c4ef.split("e");
                if (_0x3acb09 && !_0x30355b) {
                  while (_0x25c66f[0].length > 1 && _0x25c66f[0].includes(".") && (_0x25c66f[0].slice(-1) == "0" || _0x25c66f[0].slice(-1) == ".")) {
                    _0x25c66f[0] = _0x25c66f[0].slice(0, -1);
                  }
                } else {
                  if (_0x30355b && _0x34c4ef.indexOf(".") == -1) {
                    _0x25c66f[0] += ".";
                  }
                  while (_0x539e0f > _0x57b64c++) {
                    _0x25c66f[0] += "0";
                  }
                }
                _0x34c4ef = _0x25c66f[0] + (_0x25c66f.length > 1 ? "e" + _0x25c66f[1] : "");
                if (_0x3c5fa2 == 69) {
                  _0x34c4ef = _0x34c4ef.toUpperCase();
                }
                if (_0x216ef6 >= 0) {
                  if (_0x7d8978) {
                    _0x34c4ef = "+" + _0x34c4ef;
                  } else if (_0x547e50) {
                    _0x34c4ef = " " + _0x34c4ef;
                  }
                }
              }
              while (_0x34c4ef.length < _0x3a29a7) {
                if (_0x24963f) {
                  _0x34c4ef += " ";
                } else if (_0xfc2edb && (_0x34c4ef[0] == "-" || _0x34c4ef[0] == "+")) {
                  _0x34c4ef = _0x34c4ef[0] + "0" + _0x34c4ef.slice(1);
                } else {
                  _0x34c4ef = (_0xfc2edb ? "0" : " ") + _0x34c4ef;
                }
              }
              if (_0x3c5fa2 < 97) {
                _0x34c4ef = _0x34c4ef.toUpperCase();
              }
              _0x34c4ef.split("").forEach(function (_0x22dc4b) {
                _0x207b57.push(_0x22dc4b.charCodeAt(0));
              });
              break;
            }
          case "s":
            {
              var _0x3acb66 = _0x16caa2("i8*");
              var _0xd830fc = _0x3acb66 ? _0x1f4561(_0x3acb66) : "(null)".length;
              if (_0x2e3c82) {
                _0xd830fc = Math.min(_0xd830fc, _0x539e0f);
              }
              if (!_0x24963f) {
                while (_0xd830fc < _0x3a29a7--) {
                  _0x207b57.push(32);
                }
              }
              if (_0x3acb66) {
                for (var _0x17d8bd = 0; _0x17d8bd < _0xd830fc; _0x17d8bd++) {
                  _0x207b57.push(_0xdf86cd[_0x3acb66++ >> 0]);
                }
              } else {
                _0x207b57 = _0x207b57.concat(_0x3f85df("(null)".substr(0, _0xd830fc), true));
              }
              if (_0x24963f) {
                while (_0xd830fc < _0x3a29a7--) {
                  _0x207b57.push(32);
                }
              }
              break;
            }
          case "c":
            {
              if (_0x24963f) {
                _0x207b57.push(_0x16caa2("i8"));
              }
              while (--_0x3a29a7 > 0) {
                _0x207b57.push(32);
              }
              if (!_0x24963f) {
                _0x207b57.push(_0x16caa2("i8"));
              }
              break;
            }
          case "n":
            {
              var _0x58080a = _0x16caa2("i32*");
              _0x38db74[_0x58080a >> 2] = _0x207b57.length;
              break;
            }
          case "%":
            {
              _0x207b57.push(_0x5e11b1);
              break;
            }
          default:
            {
              for (var _0x17d8bd = _0x3ab8f7; _0x17d8bd < _0x12f460 + 2; _0x17d8bd++) {
                _0x207b57.push(_0x3b8c2f[_0x17d8bd >> 0]);
              }
            }
        }
        _0x12f460 += 2;
      } else {
        _0x207b57.push(_0x5e11b1);
        _0x12f460 += 1;
      }
    }
    return _0x207b57;
  }
  function _0x383422(_0x557bc4) {
    if (!_0x557bc4 || !_0x557bc4.callee || !_0x557bc4.callee.name) {
      return [null, "", ""];
    }
    var _0x1d2ab7 = _0x557bc4.callee.toString();
    var _0x262b12 = _0x557bc4.callee.name;
    var _0x20979e = "(";
    var _0x392616 = true;
    for (var _0x15a482 in _0x557bc4) {
      var _0x1c89ef = _0x557bc4[_0x15a482];
      if (!_0x392616) {
        _0x20979e += ", ";
      }
      _0x392616 = false;
      if (typeof _0x1c89ef === "number" || typeof _0x1c89ef === "string") {
        _0x20979e += _0x1c89ef;
      } else {
        _0x20979e += "(" + typeof _0x1c89ef + ")";
      }
    }
    _0x20979e += ")";
    var _0x4f05f1 = _0x557bc4.callee.caller;
    _0x557bc4 = _0x4f05f1 ? _0x4f05f1.arguments : [];
    if (_0x392616) {
      _0x20979e = "";
    }
    return [_0x557bc4, _0x262b12, _0x20979e];
  }
  function _0x17039d(_0x2349a0) {
    var _0x485705 = _0x30d31d();
    var _0x109e98 = _0x485705.lastIndexOf("_emscripten_log");
    var _0x4e3f6c = _0x485705.lastIndexOf("_emscripten_get_callstack");
    var _0x3cf104 = _0x485705.indexOf("\n", Math.max(_0x109e98, _0x4e3f6c)) + 1;
    _0x485705 = _0x485705.slice(_0x3cf104);
    if (_0x2349a0 & 32) {
      _0x29f45c("EM_LOG_DEMANGLE is deprecated; ignoring");
    }
    if (_0x2349a0 & 8 && typeof emscripten_source_map === "undefined") {
      _0x29f45c("Source map information is not available, emscripten_log with EM_LOG_C_STACK will be ignored. Build with \"--pre-js $EMSCRIPTEN/src/emscripten-source-map.min.js\" linker flag to add source map loading to code.");
      _0x2349a0 ^= 8;
      _0x2349a0 |= 16;
    }
    var _0x122950 = null;
    if (_0x2349a0 & 128) {
      _0x122950 = _0x383422(arguments);
      while (_0x122950[1].includes("_emscripten_")) {
        _0x122950 = _0x383422(_0x122950[0]);
      }
    }
    var _0x389847 = _0x485705.split("\n");
    _0x485705 = "";
    var _0x4389e0 = new RegExp("\\s*(.*?)@(.*?):([0-9]+):([0-9]+)");
    var _0x3b0e54 = new RegExp("\\s*(.*?)@(.*):(.*)(:(.*))?");
    var _0x40034f = new RegExp("\\s*at (.*?) \\((.*):(.*):(.*)\\)");
    for (var _0x388945 in _0x389847) {
      var _0x22d02e = _0x389847[_0x388945];
      var _0x2db16e = "";
      var _0x3efc6d = "";
      var _0x9d6525 = 0;
      var _0x243078 = 0;
      var _0x55993c = _0x40034f.exec(_0x22d02e);
      if (_0x55993c && _0x55993c.length == 5) {
        _0x2db16e = _0x55993c[1];
        _0x3efc6d = _0x55993c[2];
        _0x9d6525 = _0x55993c[3];
        _0x243078 = _0x55993c[4];
      } else {
        _0x55993c = _0x4389e0.exec(_0x22d02e);
        if (!_0x55993c) {
          _0x55993c = _0x3b0e54.exec(_0x22d02e);
        }
        if (_0x55993c && _0x55993c.length >= 4) {
          _0x2db16e = _0x55993c[1];
          _0x3efc6d = _0x55993c[2];
          _0x9d6525 = _0x55993c[3];
          _0x243078 = _0x55993c[4] | 0;
        } else {
          _0x485705 += _0x22d02e + "\n";
          continue;
        }
      }
      var _0x309f21 = false;
      if (_0x2349a0 & 8) {
        var _0x23dfbd = emscripten_source_map.originalPositionFor({
          line: _0x9d6525,
          column: _0x243078
        });
        _0x309f21 = _0x23dfbd && _0x23dfbd.source;
        if (_0x309f21) {
          if (_0x2349a0 & 64) {
            _0x23dfbd.source = _0x23dfbd.source.substring(_0x23dfbd.source.replace(/\\/g, "/").lastIndexOf("/") + 1);
          }
          _0x485705 += "    at " + _0x2db16e + " (" + _0x23dfbd.source + ":" + _0x23dfbd.line + ":" + _0x23dfbd.column + ")\n";
        }
      }
      if (_0x2349a0 & 16 || !_0x309f21) {
        if (_0x2349a0 & 64) {
          _0x3efc6d = _0x3efc6d.substring(_0x3efc6d.replace(/\\/g, "/").lastIndexOf("/") + 1);
        }
        _0x485705 += (_0x309f21 ? "     = " + _0x2db16e : "    at " + _0x2db16e) + " (" + _0x3efc6d + ":" + _0x9d6525 + ":" + _0x243078 + ")\n";
      }
      if (_0x2349a0 & 128 && _0x122950[0]) {
        if (_0x122950[1] == _0x2db16e && _0x122950[2].length > 0) {
          _0x485705 = _0x485705.replace(/\s+$/, "");
          _0x485705 += " with values: " + _0x122950[1] + _0x122950[2] + "\n";
        }
        _0x122950 = _0x383422(_0x122950[0]);
      }
    }
    _0x485705 = _0x485705.replace(/\s+$/, "");
    return _0x485705;
  }
  function _0x52c4b4(_0x5384fc, _0x9ad5dc) {
    if (_0x5384fc & 24) {
      _0x9ad5dc = _0x9ad5dc.replace(/\s+$/, "");
      _0x9ad5dc += (_0x9ad5dc.length > 0 ? "\n" : "") + _0x17039d(_0x5384fc);
    }
    if (_0x5384fc & 1) {
      if (_0x5384fc & 4) {
        console.error(_0x9ad5dc);
      } else if (_0x5384fc & 2) {
        console.warn(_0x9ad5dc);
      } else if (_0x5384fc & 512) {
        console.info(_0x9ad5dc);
      } else if (_0x5384fc & 256) {
        console.debug(_0x9ad5dc);
      } else {
        console.log(_0x9ad5dc);
      }
    } else if (_0x5384fc & 6) {
      _0x1af4bd(_0x9ad5dc);
    } else {
      _0x376d62(_0x9ad5dc);
    }
  }
  function _0x2791ef(_0x124336, _0x424b19, _0x4a26e5) {
    var _0x263a59 = _0x1ba270(_0x424b19, _0x4a26e5);
    var _0xe9e7db = _0x21b049(_0x263a59, 0);
    _0x52c4b4(_0x124336, _0xe9e7db);
  }
  function _0x508302(_0xe16b1b, _0x71a052) {
    _0x5ed159(_0xe16b1b, _0x71a052 || 1);
    throw "longjmp";
  }
  function _0x488471(_0x424a91, _0x305794) {
    return _0x508302(_0x424a91, _0x305794);
  }
  function _0x3f3b26(_0x1cdab3, _0x5632fa, _0x585ec5) {
    _0xdf86cd.copyWithin(_0x1cdab3, _0x5632fa, _0x5632fa + _0x585ec5);
  }
  function _0x2b1b21(_0x47d33c, _0x56c7ec) {
    if (!_0x2015e4.fullscreenEnabled()) {
      return -1;
    }
    _0x47d33c = _0x35a8a5(_0x47d33c);
    if (!_0x47d33c) {
      return -4;
    }
    if (!_0x47d33c.requestFullscreen && !_0x47d33c.webkitRequestFullscreen) {
      return -3;
    }
    var _0xf15478 = _0x2015e4.canPerformEventHandlerRequests();
    if (!_0xf15478) {
      if (_0x56c7ec.deferUntilInEventHandler) {
        _0x2015e4.deferCall(_0x232f9b, 1, [_0x47d33c, _0x56c7ec]);
        return 1;
      } else {
        return -2;
      }
    }
    return _0x232f9b(_0x47d33c, _0x56c7ec);
  }
  function _0x232984(_0x2afe24, _0x26cf1e) {
    var _0x13067e = {
      scaleMode: 0,
      canvasResolutionScaleMode: 0,
      filteringMode: 0,
      deferUntilInEventHandler: _0x26cf1e,
      canvasResizedCallbackTargetThread: 2
    };
    return _0x2b1b21(_0x2afe24, _0x13067e);
  }
  function _0xc45233(_0x522068, _0x3c1c34) {
    _0x522068 = _0x35a8a5(_0x522068);
    if (!_0x522068) {
      return -4;
    }
    if (!_0x522068.requestPointerLock && !_0x522068.msRequestPointerLock) {
      return -1;
    }
    var _0x83610c = _0x2015e4.canPerformEventHandlerRequests();
    if (!_0x83610c) {
      if (_0x3c1c34) {
        _0x2015e4.deferCall(_0x1c1332, 2, [_0x522068]);
        return 1;
      } else {
        return -2;
      }
    }
    return _0x1c1332(_0x522068);
  }
  function _0x103d67(_0x4f10e7) {
    try {
      _0x28d294.grow(_0x4f10e7 - _0x31c650.byteLength + 65535 >>> 16);
      _0x2df71d(_0x28d294.buffer);
      return 1;
    } catch (_0x3627ed) {}
  }
  function _0x26f6fd(_0x360695) {
    var _0x10f1d9 = _0xdf86cd.length;
    _0x360695 = _0x360695 >>> 0;
    var _0x56a4e0 = 2147483648;
    if (_0x360695 > _0x56a4e0) {
      return false;
    }
    for (var _0x299dad = 1; _0x299dad <= 4; _0x299dad *= 2) {
      var _0x13de64 = _0x10f1d9 * (1 + 0.2 / _0x299dad);
      _0x13de64 = Math.min(_0x13de64, _0x360695 + 100663296);
      var _0x557525 = Math.min(_0x56a4e0, _0x5b5276(Math.max(_0x360695, _0x13de64), 65536));
      var _0x31b6bf = _0x103d67(_0x557525);
      if (_0x31b6bf) {
        return true;
      }
    }
    return false;
  }
  function _0x2f003d() {
    try {
      if (navigator.getGamepads) {
        if (_0x2015e4.lastGamepadState = navigator.getGamepads()) {
          return 0;
        } else {
          return -1;
        }
      }
    } catch (_0x56e747) {
      navigator.getGamepads = null;
    }
    return -1;
  }
  function _0x20c17b(_0x243ab1, _0x16c16a, _0x57ce83, _0x3b24d3, _0x57b989, _0x1a7d2d, _0x3c5448) {
    if (!_0x2015e4.focusEvent) {
      _0x2015e4.focusEvent = _0x434dac(256);
    }
    function _0x141b3f(_0xa40e30) {
      var _0xb7fe35 = _0xa40e30 || event;
      var _0x402022 = _0x2015e4.getNodeNameForTarget(_0xb7fe35.target);
      var _0x4e6f39 = _0xb7fe35.target.id ? _0xb7fe35.target.id : "";
      var _0x1386d6 = _0x2015e4.focusEvent;
      _0x517360(_0x402022, _0x1386d6 + 0, 128);
      _0x517360(_0x4e6f39, _0x1386d6 + 128, 128);
      if (function (_0x181f18, _0x4ee77b, _0x552a64) {
        return _0x517871.apply(null, [_0x3b24d3, _0x181f18, _0x4ee77b, _0x552a64]);
      }(_0x57b989, _0x1386d6, _0x16c16a)) {
        _0xb7fe35.preventDefault();
      }
    }
    var _0x38452e = {
      target: _0x35a8a5(_0x243ab1),
      eventTypeString: _0x1a7d2d,
      callbackfunc: _0x3b24d3,
      handlerFunc: _0x141b3f,
      useCapture: _0x57ce83
    };
    _0x2015e4.registerOrRemoveHandler(_0x38452e);
  }
  function _0x50da83(_0x47f7be, _0x530053, _0x4ed3b4, _0x1d0a6c, _0x4dfc86) {
    _0x20c17b(_0x47f7be, _0x530053, _0x4ed3b4, _0x1d0a6c, 12, "blur", _0x4dfc86);
    return 0;
  }
  function _0x58ec4d(_0x48398d, _0x4ca4a7, _0x21a5ea, _0x1f63b5, _0x55148d) {
    _0x20c17b(_0x48398d, _0x4ca4a7, _0x21a5ea, _0x1f63b5, 13, "focus", _0x55148d);
    return 0;
  }
  function _0x34ae15(_0x6e7823, _0x2f59f3, _0x5d23a5, _0x137100, _0x3e0c9a, _0x3b5f16, _0x151c9a) {
    if (!_0x2015e4.fullscreenChangeEvent) {
      _0x2015e4.fullscreenChangeEvent = _0x434dac(280);
    }
    function _0x1ffbde(_0x502b87) {
      var _0x21479b = _0x502b87 || event;
      var _0x4d725b = _0x2015e4.fullscreenChangeEvent;
      _0x446384(_0x4d725b);
      if (function (_0x37633f, _0x51dd16, _0x5a3e25) {
        return _0x517871.apply(null, [_0x137100, _0x37633f, _0x51dd16, _0x5a3e25]);
      }(_0x3e0c9a, _0x4d725b, _0x2f59f3)) {
        _0x21479b.preventDefault();
      }
    }
    var _0x312c8b = {
      target: _0x6e7823,
      eventTypeString: _0x3b5f16,
      callbackfunc: _0x137100,
      handlerFunc: _0x1ffbde,
      useCapture: _0x5d23a5
    };
    _0x2015e4.registerOrRemoveHandler(_0x312c8b);
  }
  function _0x26cc8(_0xee36ac, _0x31248f, _0x1a65ff, _0x9377cb, _0x4a75ec) {
    if (!_0x2015e4.fullscreenEnabled()) {
      return -1;
    }
    _0xee36ac = _0x35a8a5(_0xee36ac);
    if (!_0xee36ac) {
      return -4;
    }
    _0x34ae15(_0xee36ac, _0x31248f, _0x1a65ff, _0x9377cb, 19, "fullscreenchange", _0x4a75ec);
    _0x34ae15(_0xee36ac, _0x31248f, _0x1a65ff, _0x9377cb, 19, "webkitfullscreenchange", _0x4a75ec);
    return 0;
  }
  function _0x20cb05(_0x4d794a, _0x113894, _0x2b1958, _0x15df68, _0x4ae8f1, _0x428f84, _0x4ab7dc) {
    if (!_0x2015e4.gamepadEvent) {
      _0x2015e4.gamepadEvent = _0x434dac(1432);
    }
    function _0x429cc0(_0x4657b6) {
      var _0x58c607 = _0x4657b6 || event;
      var _0x9f4919 = _0x2015e4.gamepadEvent;
      _0x310d47(_0x9f4919, _0x58c607.gamepad);
      if (function (_0x45f2c7, _0x457ca8, _0x274840) {
        return _0x517871.apply(null, [_0x15df68, _0x45f2c7, _0x457ca8, _0x274840]);
      }(_0x4ae8f1, _0x9f4919, _0x113894)) {
        _0x58c607.preventDefault();
      }
    }
    var _0xa81be9 = {
      target: _0x35a8a5(_0x4d794a),
      allowsDeferredCalls: true,
      eventTypeString: _0x428f84,
      callbackfunc: _0x15df68,
      handlerFunc: _0x429cc0,
      useCapture: _0x2b1958
    };
    _0x2015e4.registerOrRemoveHandler(_0xa81be9);
  }
  function _0x4d019f(_0x2bb862, _0x89000c, _0x18698b, _0x1898b7) {
    if (_0x2f003d()) {
      return -1;
    }
    return _0x20cb05(2, _0x2bb862, _0x89000c, _0x18698b, 26, "gamepadconnected", _0x1898b7);
  }
  function _0x55ca4d(_0x370617, _0x1b3420, _0x82155d, _0xa06a0c) {
    if (_0x2f003d()) {
      return -1;
    }
    return _0x20cb05(2, _0x370617, _0x1b3420, _0x82155d, 27, "gamepaddisconnected", _0xa06a0c);
  }
  function _0x276d29(_0x31a328, _0x2ca275, _0x5e7011) {
    return setInterval(function () {
      (function (_0x5e0b44) {
        _0x1c1a57.apply(null, [_0x31a328, _0x5e0b44]);
      })(_0x5e7011);
    }, _0x2ca275);
  }
  function _0x31dde7(_0xa1ccfe, _0x4654ca, _0x3bb5e5, _0x3bcb9a, _0x1cd6f7, _0x2c4fd6, _0x5d4258) {
    if (!_0x2015e4.keyEvent) {
      _0x2015e4.keyEvent = _0x434dac(164);
    }
    function _0x1cc4c0(_0x574cf0) {
      var _0x14466d = _0x2015e4.keyEvent;
      var _0x4878d8 = _0x14466d >> 2;
      _0x38db74[_0x4878d8 + 0] = _0x574cf0.location;
      _0x38db74[_0x4878d8 + 1] = _0x574cf0.ctrlKey;
      _0x38db74[_0x4878d8 + 2] = _0x574cf0.shiftKey;
      _0x38db74[_0x4878d8 + 3] = _0x574cf0.altKey;
      _0x38db74[_0x4878d8 + 4] = _0x574cf0.metaKey;
      _0x38db74[_0x4878d8 + 5] = _0x574cf0.repeat;
      _0x38db74[_0x4878d8 + 6] = _0x574cf0.charCode;
      _0x38db74[_0x4878d8 + 7] = _0x574cf0.keyCode;
      _0x38db74[_0x4878d8 + 8] = _0x574cf0.which;
      _0x517360(_0x574cf0.key || "", _0x14466d + 36, 32);
      _0x517360(_0x574cf0.code || "", _0x14466d + 68, 32);
      _0x517360(_0x574cf0.char || "", _0x14466d + 100, 32);
      _0x517360(_0x574cf0.locale || "", _0x14466d + 132, 32);
      if (function (_0x3ff65f, _0x563a4e, _0x2401a3) {
        return _0x517871.apply(null, [_0x3bcb9a, _0x3ff65f, _0x563a4e, _0x2401a3]);
      }(_0x1cd6f7, _0x14466d, _0x4654ca)) {
        _0x574cf0.preventDefault();
      }
    }
    var _0xd215 = {
      target: _0x35a8a5(_0xa1ccfe),
      allowsDeferredCalls: true,
      eventTypeString: _0x2c4fd6,
      callbackfunc: _0x3bcb9a,
      handlerFunc: _0x1cc4c0,
      useCapture: _0x3bb5e5
    };
    _0x2015e4.registerOrRemoveHandler(_0xd215);
  }
  function _0x1086fe(_0x53ef10, _0x393837, _0x2c966c, _0x1076c2, _0x2fc7b7) {
    _0x31dde7(_0x53ef10, _0x393837, _0x2c966c, _0x1076c2, 2, "keydown", _0x2fc7b7);
    return 0;
  }
  function _0x1ec368(_0x4046a8, _0x52f669, _0x53f5f8, _0x56d539, _0x3b58a8) {
    _0x31dde7(_0x4046a8, _0x52f669, _0x53f5f8, _0x56d539, 1, "keypress", _0x3b58a8);
    return 0;
  }
  function _0x46b60f(_0x52daf4, _0x151eaf, _0x5b563a, _0x569dc1, _0x47f8c0) {
    _0x31dde7(_0x52daf4, _0x151eaf, _0x5b563a, _0x569dc1, 3, "keyup", _0x47f8c0);
    return 0;
  }
  function _0x75c69d(_0x2f8e4f, _0x3ac5f5, _0x2e1553) {
    function _0xe1bb67() {
      _0x57cc4c.call(null, _0x2f8e4f);
    }
    _0x38fdb0(_0xe1bb67, _0x3ac5f5, _0x2e1553);
  }
  function _0xba956(_0x1680c0, _0x53f74c, _0x58d3b5) {
    var _0x1d6fdf = _0x1680c0 >> 2;
    _0x38db74[_0x1d6fdf + 0] = _0x53f74c.screenX;
    _0x38db74[_0x1d6fdf + 1] = _0x53f74c.screenY;
    _0x38db74[_0x1d6fdf + 2] = _0x53f74c.clientX;
    _0x38db74[_0x1d6fdf + 3] = _0x53f74c.clientY;
    _0x38db74[_0x1d6fdf + 4] = _0x53f74c.ctrlKey;
    _0x38db74[_0x1d6fdf + 5] = _0x53f74c.shiftKey;
    _0x38db74[_0x1d6fdf + 6] = _0x53f74c.altKey;
    _0x38db74[_0x1d6fdf + 7] = _0x53f74c.metaKey;
    _0x1465be[_0x1d6fdf * 2 + 16] = _0x53f74c.button;
    _0x1465be[_0x1d6fdf * 2 + 17] = _0x53f74c.buttons;
    _0x38db74[_0x1d6fdf + 9] = _0x53f74c.movementX;
    _0x38db74[_0x1d6fdf + 10] = _0x53f74c.movementY;
    var _0x4b2ee5 = _0xa16dfb(_0x58d3b5);
    _0x38db74[_0x1d6fdf + 11] = _0x53f74c.clientX - _0x4b2ee5.left;
    _0x38db74[_0x1d6fdf + 12] = _0x53f74c.clientY - _0x4b2ee5.top;
  }
  function _0x5e2155(_0x552d66, _0x1e3d9e, _0x31f24b, _0x6e9f33, _0x4200c0, _0x1df9ab, _0x22de54) {
    if (!_0x2015e4.mouseEvent) {
      _0x2015e4.mouseEvent = _0x434dac(64);
    }
    _0x552d66 = _0x35a8a5(_0x552d66);
    function _0x278072(_0x1a3c6c) {
      var _0x25678c = _0x1a3c6c || event;
      _0xba956(_0x2015e4.mouseEvent, _0x25678c, _0x552d66);
      if (function (_0x32445b, _0x202ee9, _0x2789fd) {
        return _0x517871.apply(null, [_0x6e9f33, _0x32445b, _0x202ee9, _0x2789fd]);
      }(_0x4200c0, _0x2015e4.mouseEvent, _0x1e3d9e)) {
        _0x25678c.preventDefault();
      }
    }
    var _0x5c36b5 = {
      target: _0x552d66,
      allowsDeferredCalls: _0x1df9ab != "mousemove" && _0x1df9ab != "mouseenter" && _0x1df9ab != "mouseleave",
      eventTypeString: _0x1df9ab,
      callbackfunc: _0x6e9f33,
      handlerFunc: _0x278072,
      useCapture: _0x31f24b
    };
    _0x2015e4.registerOrRemoveHandler(_0x5c36b5);
  }
  function _0x3a9a94(_0xd27e7e, _0x1dba68, _0x939497, _0x27d3b9, _0x45b213) {
    _0x5e2155(_0xd27e7e, _0x1dba68, _0x939497, _0x27d3b9, 5, "mousedown", _0x45b213);
    return 0;
  }
  function _0xa997ef(_0x52e120, _0x4c0cf6, _0x353152, _0x4a9c2f, _0x240ea0) {
    _0x5e2155(_0x52e120, _0x4c0cf6, _0x353152, _0x4a9c2f, 8, "mousemove", _0x240ea0);
    return 0;
  }
  function _0x144ef6(_0x280dd6, _0x469eaa, _0x2062aa, _0x3c25cb, _0x5883c3) {
    _0x5e2155(_0x280dd6, _0x469eaa, _0x2062aa, _0x3c25cb, 6, "mouseup", _0x5883c3);
    return 0;
  }
  function _0x3a4976(_0x633575) {
    var _0x4ae45d = document.pointerLockElement || document.mozPointerLockElement || document.webkitPointerLockElement || document.msPointerLockElement;
    var _0x3b57d2 = !!_0x4ae45d;
    _0x38db74[_0x633575 >> 2] = _0x3b57d2;
    var _0x3e86d3 = _0x2015e4.getNodeNameForTarget(_0x4ae45d);
    var _0x52d10f = _0x4ae45d && _0x4ae45d.id ? _0x4ae45d.id : "";
    _0x517360(_0x3e86d3, _0x633575 + 4, 128);
    _0x517360(_0x52d10f, _0x633575 + 132, 128);
  }
  function _0x38d9a5(_0x31596d, _0x40d987, _0x127a23, _0x3a5ba, _0x6af49d, _0x488ef9, _0x7dca8d) {
    if (!_0x2015e4.pointerlockChangeEvent) {
      _0x2015e4.pointerlockChangeEvent = _0x434dac(260);
    }
    function _0x482ad5(_0x387ad3) {
      var _0x1e5581 = _0x387ad3 || event;
      var _0xcde4b = _0x2015e4.pointerlockChangeEvent;
      _0x3a4976(_0xcde4b);
      if (function (_0x5c6636, _0x255144, _0x130c53) {
        return _0x517871.apply(null, [_0x3a5ba, _0x5c6636, _0x255144, _0x130c53]);
      }(_0x6af49d, _0xcde4b, _0x40d987)) {
        _0x1e5581.preventDefault();
      }
    }
    var _0x5ee3b0 = {
      target: _0x31596d,
      eventTypeString: _0x488ef9,
      callbackfunc: _0x3a5ba,
      handlerFunc: _0x482ad5,
      useCapture: _0x127a23
    };
    _0x2015e4.registerOrRemoveHandler(_0x5ee3b0);
  }
  function _0x475625(_0x346e4e, _0x4bea59, _0x94dd16, _0x3f9adc, _0x4af89e) {
    if (!document || !document.body || !document.body.requestPointerLock && !document.body.mozRequestPointerLock && !document.body.webkitRequestPointerLock && !document.body.msRequestPointerLock) {
      return -1;
    }
    _0x346e4e = _0x35a8a5(_0x346e4e);
    if (!_0x346e4e) {
      return -4;
    }
    _0x38d9a5(_0x346e4e, _0x4bea59, _0x94dd16, _0x3f9adc, 20, "pointerlockchange", _0x4af89e);
    _0x38d9a5(_0x346e4e, _0x4bea59, _0x94dd16, _0x3f9adc, 20, "mozpointerlockchange", _0x4af89e);
    _0x38d9a5(_0x346e4e, _0x4bea59, _0x94dd16, _0x3f9adc, 20, "webkitpointerlockchange", _0x4af89e);
    _0x38d9a5(_0x346e4e, _0x4bea59, _0x94dd16, _0x3f9adc, 20, "mspointerlockchange", _0x4af89e);
    return 0;
  }
  function _0x140600(_0x351a12, _0x560946, _0x2382e5, _0x121969, _0x1999d3, _0x17c3aa, _0x264f04) {
    if (!_0x2015e4.touchEvent) {
      _0x2015e4.touchEvent = _0x434dac(1684);
    }
    _0x351a12 = _0x35a8a5(_0x351a12);
    function _0x41e2ec(_0x5e32f4) {
      var _0x4526e8;
      var _0x27c4ef = {};
      var _0x25e3bb = _0x5e32f4.touches;
      for (var _0x40fc07 = 0; _0x40fc07 < _0x25e3bb.length; ++_0x40fc07) {
        _0x4526e8 = _0x25e3bb[_0x40fc07];
        _0x4526e8.isChanged = _0x4526e8.onTarget = 0;
        _0x27c4ef[_0x4526e8.identifier] = _0x4526e8;
      }
      for (var _0x40fc07 = 0; _0x40fc07 < _0x5e32f4.changedTouches.length; ++_0x40fc07) {
        _0x4526e8 = _0x5e32f4.changedTouches[_0x40fc07];
        _0x4526e8.isChanged = 1;
        _0x27c4ef[_0x4526e8.identifier] = _0x4526e8;
      }
      for (var _0x40fc07 = 0; _0x40fc07 < _0x5e32f4.targetTouches.length; ++_0x40fc07) {
        _0x27c4ef[_0x5e32f4.targetTouches[_0x40fc07].identifier].onTarget = 1;
      }
      var _0x3e2b16 = _0x2015e4.touchEvent;
      var _0x210c3a = _0x3e2b16 >> 2;
      _0x38db74[_0x210c3a + 1] = _0x5e32f4.ctrlKey;
      _0x38db74[_0x210c3a + 2] = _0x5e32f4.shiftKey;
      _0x38db74[_0x210c3a + 3] = _0x5e32f4.altKey;
      _0x38db74[_0x210c3a + 4] = _0x5e32f4.metaKey;
      _0x210c3a += 5;
      var _0x12aef1 = _0xa16dfb(_0x351a12);
      var _0x4af912 = 0;
      for (var _0x40fc07 in _0x27c4ef) {
        var _0x4526e8 = _0x27c4ef[_0x40fc07];
        _0x38db74[_0x210c3a + 0] = _0x4526e8.identifier;
        _0x38db74[_0x210c3a + 1] = _0x4526e8.screenX;
        _0x38db74[_0x210c3a + 2] = _0x4526e8.screenY;
        _0x38db74[_0x210c3a + 3] = _0x4526e8.clientX;
        _0x38db74[_0x210c3a + 4] = _0x4526e8.clientY;
        _0x38db74[_0x210c3a + 5] = _0x4526e8.pageX;
        _0x38db74[_0x210c3a + 6] = _0x4526e8.pageY;
        _0x38db74[_0x210c3a + 7] = _0x4526e8.isChanged;
        _0x38db74[_0x210c3a + 8] = _0x4526e8.onTarget;
        _0x38db74[_0x210c3a + 9] = _0x4526e8.clientX - _0x12aef1.left;
        _0x38db74[_0x210c3a + 10] = _0x4526e8.clientY - _0x12aef1.top;
        _0x210c3a += 13;
        if (++_0x4af912 > 31) {
          break;
        }
      }
      _0x38db74[_0x3e2b16 >> 2] = _0x4af912;
      if (function (_0x336a6b, _0x3987ff, _0x410cd3) {
        return _0x517871.apply(null, [_0x121969, _0x336a6b, _0x3987ff, _0x410cd3]);
      }(_0x1999d3, _0x3e2b16, _0x560946)) {
        _0x5e32f4.preventDefault();
      }
    }
    var _0x1f260b = {
      target: _0x351a12,
      allowsDeferredCalls: _0x17c3aa == "touchstart" || _0x17c3aa == "touchend",
      eventTypeString: _0x17c3aa,
      callbackfunc: _0x121969,
      handlerFunc: _0x41e2ec,
      useCapture: _0x2382e5
    };
    _0x2015e4.registerOrRemoveHandler(_0x1f260b);
  }
  function _0x4fdce3(_0x36940f, _0x5963ef, _0x37e201, _0x2b807e, _0x55492e) {
    _0x140600(_0x36940f, _0x5963ef, _0x37e201, _0x2b807e, 25, "touchcancel", _0x55492e);
    return 0;
  }
  function _0x5a6f20(_0x29cb93, _0x230cfa, _0xfa27de, _0x37c5b8, _0x545e3a) {
    _0x140600(_0x29cb93, _0x230cfa, _0xfa27de, _0x37c5b8, 23, "touchend", _0x545e3a);
    return 0;
  }
  function _0x4b2432(_0x57e793, _0xd3f2b9, _0x146d0b, _0x5c4a27, _0x2bbca4) {
    _0x140600(_0x57e793, _0xd3f2b9, _0x146d0b, _0x5c4a27, 24, "touchmove", _0x2bbca4);
    return 0;
  }
  function _0x791de1(_0x5c48e8, _0x3cb374, _0x2f7e41, _0x52272f, _0x542d95) {
    _0x140600(_0x5c48e8, _0x3cb374, _0x2f7e41, _0x52272f, 22, "touchstart", _0x542d95);
    return 0;
  }
  function _0x5a52b4(_0x16bb54, _0x55dbe5, _0x53ba5b, _0x33aea6, _0x5c410f, _0x4a34cf, _0x4c7c21) {
    if (!_0x2015e4.wheelEvent) {
      _0x2015e4.wheelEvent = _0x434dac(96);
    }
    function _0x189f7f(_0x513511) {
      var _0x3a471e = _0x513511 || event;
      var _0x2cd98a = _0x2015e4.wheelEvent;
      _0xba956(_0x2cd98a, _0x3a471e, _0x16bb54);
      _0x2f1a63[_0x2cd98a + 64 >> 3] = _0x3a471e.deltaX;
      _0x2f1a63[_0x2cd98a + 72 >> 3] = _0x3a471e.deltaY;
      _0x2f1a63[_0x2cd98a + 80 >> 3] = _0x3a471e.deltaZ;
      _0x38db74[_0x2cd98a + 88 >> 2] = _0x3a471e.deltaMode;
      if (function (_0x266a59, _0x536ec4, _0x4cf210) {
        return _0x517871.apply(null, [_0x33aea6, _0x266a59, _0x536ec4, _0x4cf210]);
      }(_0x5c410f, _0x2cd98a, _0x55dbe5)) {
        _0x3a471e.preventDefault();
      }
    }
    var _0x1e1fb6 = {
      target: _0x16bb54,
      allowsDeferredCalls: true,
      eventTypeString: _0x4a34cf,
      callbackfunc: _0x33aea6,
      handlerFunc: _0x189f7f,
      useCapture: _0x53ba5b
    };
    _0x2015e4.registerOrRemoveHandler(_0x1e1fb6);
  }
  function _0x8bf79b(_0x9a6626, _0x294886, _0x36815d, _0x555cb8, _0x267cdf) {
    _0x9a6626 = _0x35a8a5(_0x9a6626);
    if (typeof _0x9a6626.onwheel !== "undefined") {
      _0x5a52b4(_0x9a6626, _0x294886, _0x36815d, _0x555cb8, 9, "wheel", _0x267cdf);
      return 0;
    } else {
      return -1;
    }
  }
  function _0x593717(_0x3be03a) {
    var _0x454985 = _0x2ec5a4();
    while (_0x2ec5a4() - _0x454985 < _0x3be03a) {}
  }
  function _0x333764(_0x1adb57) {
    var _0x348f1c = _0x1adb57.getExtension("ANGLE_instanced_arrays");
    if (_0x348f1c) {
      _0x1adb57.vertexAttribDivisor = function (_0x2d40de, _0x44f3e2) {
        _0x348f1c.vertexAttribDivisorANGLE(_0x2d40de, _0x44f3e2);
      };
      _0x1adb57.drawArraysInstanced = function (_0x377904, _0x31fc69, _0x178094, _0x28bb6b) {
        _0x348f1c.drawArraysInstancedANGLE(_0x377904, _0x31fc69, _0x178094, _0x28bb6b);
      };
      _0x1adb57.drawElementsInstanced = function (_0x18960f, _0x507e66, _0x5c6801, _0x396d47, _0x3269da) {
        _0x348f1c.drawElementsInstancedANGLE(_0x18960f, _0x507e66, _0x5c6801, _0x396d47, _0x3269da);
      };
      return 1;
    }
  }
  function _0x27f93c(_0x30a1ed) {
    var _0x4638ff = _0x30a1ed.getExtension("OES_vertex_array_object");
    if (_0x4638ff) {
      _0x30a1ed.createVertexArray = function () {
        return _0x4638ff.createVertexArrayOES();
      };
      _0x30a1ed.deleteVertexArray = function (_0x556f08) {
        _0x4638ff.deleteVertexArrayOES(_0x556f08);
      };
      _0x30a1ed.bindVertexArray = function (_0x2aa379) {
        _0x4638ff.bindVertexArrayOES(_0x2aa379);
      };
      _0x30a1ed.isVertexArray = function (_0x22f749) {
        return _0x4638ff.isVertexArrayOES(_0x22f749);
      };
      return 1;
    }
  }
  function _0x530938(_0x9bea38) {
    var _0x586d68 = _0x9bea38.getExtension("WEBGL_draw_buffers");
    if (_0x586d68) {
      _0x9bea38.drawBuffers = function (_0xea7ff0, _0x17c1fb) {
        _0x586d68.drawBuffersWEBGL(_0xea7ff0, _0x17c1fb);
      };
      return 1;
    }
  }
  function _0xe7926d(_0x49cdc7) {
    return !!(_0x49cdc7.dibvbi = _0x49cdc7.getExtension("WEBGL_draw_instanced_base_vertex_base_instance"));
  }
  function _0x4fc8d7(_0x326555) {
    return !!(_0x326555.mdibvbi = _0x326555.getExtension("WEBGL_multi_draw_instanced_base_vertex_base_instance"));
  }
  function _0xc5dc7b(_0x352a46) {
    return !!(_0x352a46.multiDrawWebgl = _0x352a46.getExtension("WEBGL_multi_draw"));
  }
  var _0x2375dd = {
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
    recordError: function _0xc8aca7(_0x27a737) {
      if (!_0x2375dd.lastError) {
        _0x2375dd.lastError = _0x27a737;
      }
    },
    getNewId: function (_0x133661) {
      var _0x38c56e = _0x2375dd.counter++;
      for (var _0x24671d = _0x133661.length; _0x24671d < _0x38c56e; _0x24671d++) {
        _0x133661[_0x24671d] = null;
      }
      return _0x38c56e;
    },
    MAX_TEMP_BUFFER_SIZE: 2097152,
    numTempVertexBuffersPerSize: 64,
    log2ceilLookup: function (_0x55da4c) {
      return 32 - Math.clz32(_0x55da4c === 0 ? 0 : _0x55da4c - 1);
    },
    generateTempBuffers: function (_0x20a455, _0x33c710) {
      var _0x2f82be = _0x2375dd.log2ceilLookup(_0x2375dd.MAX_TEMP_BUFFER_SIZE);
      _0x33c710.tempVertexBufferCounters1 = [];
      _0x33c710.tempVertexBufferCounters2 = [];
      _0x33c710.tempVertexBufferCounters1.length = _0x33c710.tempVertexBufferCounters2.length = _0x2f82be + 1;
      _0x33c710.tempVertexBuffers1 = [];
      _0x33c710.tempVertexBuffers2 = [];
      _0x33c710.tempVertexBuffers1.length = _0x33c710.tempVertexBuffers2.length = _0x2f82be + 1;
      _0x33c710.tempIndexBuffers = [];
      _0x33c710.tempIndexBuffers.length = _0x2f82be + 1;
      for (var _0x23ff7a = 0; _0x23ff7a <= _0x2f82be; ++_0x23ff7a) {
        _0x33c710.tempIndexBuffers[_0x23ff7a] = null;
        _0x33c710.tempVertexBufferCounters1[_0x23ff7a] = _0x33c710.tempVertexBufferCounters2[_0x23ff7a] = 0;
        var _0x36cf36 = _0x2375dd.numTempVertexBuffersPerSize;
        _0x33c710.tempVertexBuffers1[_0x23ff7a] = [];
        _0x33c710.tempVertexBuffers2[_0x23ff7a] = [];
        var _0x5c5063 = _0x33c710.tempVertexBuffers1[_0x23ff7a];
        var _0x1ce360 = _0x33c710.tempVertexBuffers2[_0x23ff7a];
        _0x5c5063.length = _0x1ce360.length = _0x36cf36;
        for (var _0x34abbb = 0; _0x34abbb < _0x36cf36; ++_0x34abbb) {
          _0x5c5063[_0x34abbb] = _0x1ce360[_0x34abbb] = null;
        }
      }
      if (_0x20a455) {
        _0x33c710.tempQuadIndexBuffer = _0x2ad584.createBuffer();
        _0x33c710.GLctx.bindBuffer(34963, _0x33c710.tempQuadIndexBuffer);
        var _0x276159 = _0x2375dd.MAX_TEMP_BUFFER_SIZE >> 1;
        var _0x185c27 = new Uint16Array(_0x276159);
        var _0x23ff7a = 0;
        var _0x1067a7 = 0;
        while (1) {
          _0x185c27[_0x23ff7a++] = _0x1067a7;
          if (_0x23ff7a >= _0x276159) {
            break;
          }
          _0x185c27[_0x23ff7a++] = _0x1067a7 + 1;
          if (_0x23ff7a >= _0x276159) {
            break;
          }
          _0x185c27[_0x23ff7a++] = _0x1067a7 + 2;
          if (_0x23ff7a >= _0x276159) {
            break;
          }
          _0x185c27[_0x23ff7a++] = _0x1067a7;
          if (_0x23ff7a >= _0x276159) {
            break;
          }
          _0x185c27[_0x23ff7a++] = _0x1067a7 + 2;
          if (_0x23ff7a >= _0x276159) {
            break;
          }
          _0x185c27[_0x23ff7a++] = _0x1067a7 + 3;
          if (_0x23ff7a >= _0x276159) {
            break;
          }
          _0x1067a7 += 4;
        }
        _0x33c710.GLctx.bufferData(34963, _0x185c27, 35044);
        _0x33c710.GLctx.bindBuffer(34963, null);
      }
    },
    getTempVertexBuffer: function _0x39f493(_0x251e9e) {
      var _0x1e8c9f = _0x2375dd.log2ceilLookup(_0x251e9e);
      var _0x52b1fc = _0x2375dd.currentContext.tempVertexBuffers1[_0x1e8c9f];
      var _0x5dec96 = _0x2375dd.currentContext.tempVertexBufferCounters1[_0x1e8c9f];
      _0x2375dd.currentContext.tempVertexBufferCounters1[_0x1e8c9f] = _0x2375dd.currentContext.tempVertexBufferCounters1[_0x1e8c9f] + 1 & _0x2375dd.numTempVertexBuffersPerSize - 1;
      var _0x5645ca = _0x52b1fc[_0x5dec96];
      if (_0x5645ca) {
        return _0x5645ca;
      }
      var _0x17d413 = _0x2ad584.getParameter(34964);
      _0x52b1fc[_0x5dec96] = _0x2ad584.createBuffer();
      _0x2ad584.bindBuffer(34962, _0x52b1fc[_0x5dec96]);
      _0x2ad584.bufferData(34962, 1 << _0x1e8c9f, 35048);
      _0x2ad584.bindBuffer(34962, _0x17d413);
      return _0x52b1fc[_0x5dec96];
    },
    getTempIndexBuffer: function _0x924c72(_0xe663c6) {
      var _0x14b39e = _0x2375dd.log2ceilLookup(_0xe663c6);
      var _0x2822c1 = _0x2375dd.currentContext.tempIndexBuffers[_0x14b39e];
      if (_0x2822c1) {
        return _0x2822c1;
      }
      var _0x42f9b1 = _0x2ad584.getParameter(34965);
      _0x2375dd.currentContext.tempIndexBuffers[_0x14b39e] = _0x2ad584.createBuffer();
      _0x2ad584.bindBuffer(34963, _0x2375dd.currentContext.tempIndexBuffers[_0x14b39e]);
      _0x2ad584.bufferData(34963, 1 << _0x14b39e, 35048);
      _0x2ad584.bindBuffer(34963, _0x42f9b1);
      return _0x2375dd.currentContext.tempIndexBuffers[_0x14b39e];
    },
    newRenderingFrameStarted: function _0x4b52d9() {
      if (!_0x2375dd.currentContext) {
        return;
      }
      var _0x44b125 = _0x2375dd.currentContext.tempVertexBuffers1;
      _0x2375dd.currentContext.tempVertexBuffers1 = _0x2375dd.currentContext.tempVertexBuffers2;
      _0x2375dd.currentContext.tempVertexBuffers2 = _0x44b125;
      _0x44b125 = _0x2375dd.currentContext.tempVertexBufferCounters1;
      _0x2375dd.currentContext.tempVertexBufferCounters1 = _0x2375dd.currentContext.tempVertexBufferCounters2;
      _0x2375dd.currentContext.tempVertexBufferCounters2 = _0x44b125;
      var _0x379090 = _0x2375dd.log2ceilLookup(_0x2375dd.MAX_TEMP_BUFFER_SIZE);
      for (var _0x394c37 = 0; _0x394c37 <= _0x379090; ++_0x394c37) {
        _0x2375dd.currentContext.tempVertexBufferCounters1[_0x394c37] = 0;
      }
    },
    getSource: function (_0x11cf76, _0x505025, _0x32cd88, _0x4f6080) {
      var _0x260ed1 = "";
      for (var _0xaa2e83 = 0; _0xaa2e83 < _0x505025; ++_0xaa2e83) {
        var _0x47cf11 = _0x4f6080 ? _0x38db74[_0x4f6080 + _0xaa2e83 * 4 >> 2] : -1;
        _0x260ed1 += _0xdfb7b2(_0x38db74[_0x32cd88 + _0xaa2e83 * 4 >> 2], _0x47cf11 < 0 ? undefined : _0x47cf11);
      }
      return _0x260ed1;
    },
    calcBufLength: function _0x9bb9cf(_0x3561e3, _0x449448, _0x4a273d, _0x23dcb1) {
      if (_0x4a273d > 0) {
        return _0x23dcb1 * _0x4a273d;
      }
      var _0x1b4dbd = _0x2375dd.byteSizeByType[_0x449448 - _0x2375dd.byteSizeByTypeRoot];
      return _0x3561e3 * _0x1b4dbd * _0x23dcb1;
    },
    usedTempBuffers: [],
    preDrawHandleClientVertexAttribBindings: function _0xca3296(_0x5a4972) {
      _0x2375dd.resetBufferBinding = false;
      for (var _0x45d5de = 0; _0x45d5de < _0x2375dd.currentContext.maxVertexAttribs; ++_0x45d5de) {
        var _0x407dbc = _0x2375dd.currentContext.clientBuffers[_0x45d5de];
        if (!_0x407dbc.clientside || !_0x407dbc.enabled) {
          continue;
        }
        _0x2375dd.resetBufferBinding = true;
        var _0x3477ab = _0x2375dd.calcBufLength(_0x407dbc.size, _0x407dbc.type, _0x407dbc.stride, _0x5a4972);
        var _0x43d645 = _0x2375dd.getTempVertexBuffer(_0x3477ab);
        _0x2ad584.bindBuffer(34962, _0x43d645);
        _0x2ad584.bufferSubData(34962, 0, _0xdf86cd.subarray(_0x407dbc.ptr, _0x407dbc.ptr + _0x3477ab));
        _0x407dbc.vertexAttribPointerAdaptor.call(_0x2ad584, _0x45d5de, _0x407dbc.size, _0x407dbc.type, _0x407dbc.normalized, _0x407dbc.stride, 0);
      }
    },
    postDrawHandleClientVertexAttribBindings: function _0x418978() {
      if (_0x2375dd.resetBufferBinding) {
        _0x2ad584.bindBuffer(34962, _0x2375dd.buffers[_0x2ad584.currentArrayBufferBinding]);
      }
    },
    createContext: function (_0xec09ee, _0x506fca) {
      if (!_0xec09ee.getContextSafariWebGL2Fixed) {
        _0xec09ee.getContextSafariWebGL2Fixed = _0xec09ee.getContext;
        _0xec09ee.getContext = function (_0x25f0f6, _0x20aa19) {
          var _0x20ce63 = _0xec09ee.getContextSafariWebGL2Fixed(_0x25f0f6, _0x20aa19);
          if (_0x25f0f6 == "webgl" == _0x20ce63 instanceof WebGLRenderingContext) {
            return _0x20ce63;
          } else {
            return null;
          }
        };
      }
      var _0x5b4b94 = _0x506fca.majorVersion > 1 ? _0xec09ee.getContext("webgl2", _0x506fca) : _0xec09ee.getContext("webgl", _0x506fca);
      if (!_0x5b4b94) {
        return 0;
      }
      var _0x1ca33d = _0x2375dd.registerContext(_0x5b4b94, _0x506fca);
      return _0x1ca33d;
    },
    registerContext: function (_0x28031a, _0x37b821) {
      var _0x14f146 = _0x2375dd.getNewId(_0x2375dd.contexts);
      var _0x11a208 = {
        handle: _0x14f146,
        attributes: _0x37b821,
        version: _0x37b821.majorVersion,
        GLctx: _0x28031a
      };
      if (_0x28031a.canvas) {
        _0x28031a.canvas.GLctxObject = _0x11a208;
      }
      _0x2375dd.contexts[_0x14f146] = _0x11a208;
      if (typeof _0x37b821.enableExtensionsByDefault === "undefined" || _0x37b821.enableExtensionsByDefault) {
        _0x2375dd.initExtensions(_0x11a208);
      }
      _0x11a208.maxVertexAttribs = _0x11a208.GLctx.getParameter(34921);
      _0x11a208.clientBuffers = [];
      for (var _0x4abb84 = 0; _0x4abb84 < _0x11a208.maxVertexAttribs; _0x4abb84++) {
        _0x11a208.clientBuffers[_0x4abb84] = {
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
      _0x2375dd.generateTempBuffers(false, _0x11a208);
      return _0x14f146;
    },
    makeContextCurrent: function (_0x5ded25) {
      _0x2375dd.currentContext = _0x2375dd.contexts[_0x5ded25];
      _0x25e483.ctx = _0x2ad584 = _0x2375dd.currentContext && _0x2375dd.currentContext.GLctx;
      return !_0x5ded25 || !!_0x2ad584;
    },
    getContext: function (_0x3367f1) {
      return _0x2375dd.contexts[_0x3367f1];
    },
    deleteContext: function (_0xf3965d) {
      if (_0x2375dd.currentContext === _0x2375dd.contexts[_0xf3965d]) {
        _0x2375dd.currentContext = null;
      }
      if (typeof _0x2015e4 === "object") {
        _0x2015e4.removeAllHandlersOnTarget(_0x2375dd.contexts[_0xf3965d].GLctx.canvas);
      }
      if (_0x2375dd.contexts[_0xf3965d] && _0x2375dd.contexts[_0xf3965d].GLctx.canvas) {
        _0x2375dd.contexts[_0xf3965d].GLctx.canvas.GLctxObject = undefined;
      }
      _0x2375dd.contexts[_0xf3965d] = null;
    },
    initExtensions: function (_0x544272) {
      if (!_0x544272) {
        _0x544272 = _0x2375dd.currentContext;
      }
      if (_0x544272.initExtensionsDone) {
        return;
      }
      _0x544272.initExtensionsDone = true;
      var _0x1b8c64 = _0x544272.GLctx;
      _0x333764(_0x1b8c64);
      _0x27f93c(_0x1b8c64);
      _0x530938(_0x1b8c64);
      _0xe7926d(_0x1b8c64);
      _0x4fc8d7(_0x1b8c64);
      if (_0x544272.version >= 2) {
        _0x1b8c64.disjointTimerQueryExt = _0x1b8c64.getExtension("EXT_disjoint_timer_query_webgl2");
      }
      if (_0x544272.version < 2 || !_0x1b8c64.disjointTimerQueryExt) {
        _0x1b8c64.disjointTimerQueryExt = _0x1b8c64.getExtension("EXT_disjoint_timer_query");
      }
      _0xc5dc7b(_0x1b8c64);
      var _0x2c15f1 = _0x1b8c64.getSupportedExtensions() || [];
      _0x2c15f1.forEach(function (_0xfdaa91) {
        if (!_0xfdaa91.includes("lose_context") && !_0xfdaa91.includes("debug")) {
          _0x1b8c64.getExtension(_0xfdaa91);
        }
      });
    }
  };
  var _0x563153 = ["default", "low-power", "high-performance"];
  function _0x2f5d3d(_0x1543c3, _0x26518) {
    var _0x505063 = _0x26518 >> 2;
    var _0x1b201b = _0x38db74[_0x505063 + 6];
    var _0x29e550 = {
      alpha: !!_0x38db74[_0x505063 + 0],
      depth: !!_0x38db74[_0x505063 + 1],
      stencil: !!_0x38db74[_0x505063 + 2],
      antialias: !!_0x38db74[_0x505063 + 3],
      premultipliedAlpha: !!_0x38db74[_0x505063 + 4],
      preserveDrawingBuffer: !!_0x38db74[_0x505063 + 5],
      powerPreference: _0x563153[_0x1b201b],
      failIfMajorPerformanceCaveat: !!_0x38db74[_0x505063 + 7],
      majorVersion: _0x38db74[_0x505063 + 8],
      minorVersion: _0x38db74[_0x505063 + 9],
      enableExtensionsByDefault: _0x38db74[_0x505063 + 10],
      explicitSwapControl: _0x38db74[_0x505063 + 11],
      proxyContextToMainThread: _0x38db74[_0x505063 + 12],
      renderViaOffscreenBackBuffer: _0x38db74[_0x505063 + 13]
    };
    var _0x4d880d = _0x2481c1(_0x1543c3);
    if (!_0x4d880d) {
      return 0;
    }
    if (_0x29e550.explicitSwapControl) {
      return 0;
    }
    var _0x320788 = _0x2375dd.createContext(_0x4d880d, _0x29e550);
    return _0x320788;
  }
  function _0x44c41f(_0x4aae48, _0x23756c) {
    return _0x2f5d3d(_0x4aae48, _0x23756c);
  }
  function _0x1d035b() {
    if (_0x2375dd.currentContext) {
      return _0x2375dd.currentContext.handle;
    } else {
      return 0;
    }
  }
  function _0x304c51() {
    return _0x1d035b();
  }
  _0x25e483._emscripten_webgl_get_current_context = _0x304c51;
  function _0x20ab5f(_0x4fb80e) {
    var _0x4708e7 = _0x2375dd.makeContextCurrent(_0x4fb80e);
    if (_0x4708e7) {
      return 0;
    } else {
      return -5;
    }
  }
  _0x25e483._emscripten_webgl_make_context_current = _0x20ab5f;
  function _0x397dc4(_0x32b509) {
    if (_0x2375dd.currentContext == _0x32b509) {
      _0x2375dd.currentContext = 0;
    }
    _0x2375dd.deleteContext(_0x32b509);
  }
  function _0x292888(_0x509944, _0x105841) {
    var _0x1e8e7e = _0x2375dd.getContext(_0x509944);
    var _0x4117a9 = _0xdfb7b2(_0x105841);
    if (_0x4117a9.startsWith("GL_")) {
      _0x4117a9 = _0x4117a9.substr(3);
    }
    if (_0x4117a9 == "ANGLE_instanced_arrays") {
      _0x333764(_0x2ad584);
    }
    if (_0x4117a9 == "OES_vertex_array_object") {
      _0x27f93c(_0x2ad584);
    }
    if (_0x4117a9 == "WEBGL_draw_buffers") {
      _0x530938(_0x2ad584);
    }
    if (_0x4117a9 == "WEBGL_draw_instanced_base_vertex_base_instance") {
      _0xe7926d(_0x2ad584);
    }
    if (_0x4117a9 == "WEBGL_multi_draw_instanced_base_vertex_base_instance") {
      _0x4fc8d7(_0x2ad584);
    }
    if (_0x4117a9 == "WEBGL_multi_draw") {
      _0xc5dc7b(_0x2ad584);
    }
    var _0xb776ff = _0x1e8e7e.GLctx.getExtension(_0x4117a9);
    return !!_0xb776ff;
  }
  function _0x2b5177(_0x5a159b) {
    var _0x2763c6 = _0x5a159b >> 2;
    for (var _0x2b6271 = 0; _0x2b6271 < 14; ++_0x2b6271) {
      _0x38db74[_0x2763c6 + _0x2b6271] = 0;
    }
    _0x38db74[_0x2763c6 + 0] = _0x38db74[_0x2763c6 + 1] = _0x38db74[_0x2763c6 + 3] = _0x38db74[_0x2763c6 + 4] = _0x38db74[_0x2763c6 + 8] = _0x38db74[_0x2763c6 + 10] = 1;
  }
  var _0x4eaf2f = {};
  function _0x11fec6() {
    return _0x2e8110 || "./this.program";
  }
  function _0x302716() {
    if (!_0x302716.strings) {
      var _0x31d001 = (typeof navigator === "object" && navigator.languages && navigator.languages[0] || "C").replace("-", "_") + ".UTF-8";
      var _0x151d59 = {
        USER: "web_user",
        LOGNAME: "web_user",
        PATH: "/",
        PWD: "/",
        HOME: "/home/web_user",
        LANG: _0x31d001,
        _: _0x11fec6()
      };
      for (var _0x3c73db in _0x4eaf2f) {
        _0x151d59[_0x3c73db] = _0x4eaf2f[_0x3c73db];
      }
      var _0x3ac458 = [];
      for (var _0x3c73db in _0x151d59) {
        _0x3ac458.push(_0x3c73db + "=" + _0x151d59[_0x3c73db]);
      }
      _0x302716.strings = _0x3ac458;
    }
    return _0x302716.strings;
  }
  function _0x5e7a33(_0x42987e, _0x1bf4e6) {
    try {
      var _0x37c8ea = 0;
      _0x302716().forEach(function (_0x288522, _0xe69130) {
        var _0x810589 = _0x1bf4e6 + _0x37c8ea;
        _0x38db74[_0x42987e + _0xe69130 * 4 >> 2] = _0x810589;
        _0x496caa(_0x288522, _0x810589);
        _0x37c8ea += _0x288522.length + 1;
      });
      return 0;
    } catch (_0x1769e2) {
      if (typeof _0x4de3dc === "undefined" || !(_0x1769e2 instanceof _0x4de3dc.ErrnoError)) {
        _0x5d461b(_0x1769e2);
      }
      return _0x1769e2.errno;
    }
  }
  function _0x3f241f(_0x18b8ba, _0x4be314) {
    try {
      var _0x2c8724 = _0x302716();
      _0x38db74[_0x18b8ba >> 2] = _0x2c8724.length;
      var _0x3504db = 0;
      _0x2c8724.forEach(function (_0x1fad7e) {
        _0x3504db += _0x1fad7e.length + 1;
      });
      _0x38db74[_0x4be314 >> 2] = _0x3504db;
      return 0;
    } catch (_0x45ae4e) {
      if (typeof _0x4de3dc === "undefined" || !(_0x45ae4e instanceof _0x4de3dc.ErrnoError)) {
        _0x5d461b(_0x45ae4e);
      }
      return _0x45ae4e.errno;
    }
  }
  function _0x2b2d77(_0x5b9900) {
    try {
      var _0x2a5b65 = _0x29f6ac.getStreamFromFD(_0x5b9900);
      _0x4de3dc.close(_0x2a5b65);
      return 0;
    } catch (_0x3ec09c) {
      if (typeof _0x4de3dc === "undefined" || !(_0x3ec09c instanceof _0x4de3dc.ErrnoError)) {
        _0x5d461b(_0x3ec09c);
      }
      return _0x3ec09c.errno;
    }
  }
  function _0x508125(_0x4179f9, _0x64a2d7) {
    try {
      var _0x1294f0 = _0x29f6ac.getStreamFromFD(_0x4179f9);
      var _0x41bb3d = _0x1294f0.tty ? 2 : _0x4de3dc.isDir(_0x1294f0.mode) ? 3 : _0x4de3dc.isLink(_0x1294f0.mode) ? 7 : 4;
      _0x3b8c2f[_0x64a2d7 >> 0] = _0x41bb3d;
      return 0;
    } catch (_0x5baedf) {
      if (typeof _0x4de3dc === "undefined" || !(_0x5baedf instanceof _0x4de3dc.ErrnoError)) {
        _0x5d461b(_0x5baedf);
      }
      return _0x5baedf.errno;
    }
  }
  function _0x1d4c59(_0x35db38, _0x58fca3, _0x643fd3, _0x149701) {
    try {
      var _0x10bb4b = _0x29f6ac.getStreamFromFD(_0x35db38);
      var _0x2f86dc = _0x29f6ac.doReadv(_0x10bb4b, _0x58fca3, _0x643fd3);
      _0x38db74[_0x149701 >> 2] = _0x2f86dc;
      return 0;
    } catch (_0x2c59df) {
      if (typeof _0x4de3dc === "undefined" || !(_0x2c59df instanceof _0x4de3dc.ErrnoError)) {
        _0x5d461b(_0x2c59df);
      }
      return _0x2c59df.errno;
    }
  }
  function _0x316afc(_0x23239c, _0x46eeb5, _0x4cdafb, _0x5585aa, _0x5e2221) {
    try {
      var _0x4e0707 = _0x29f6ac.getStreamFromFD(_0x23239c);
      var _0x222e8f = 4294967296;
      var _0x21c0aa = _0x4cdafb * _0x222e8f + (_0x46eeb5 >>> 0);
      var _0x470b96 = 9007199254740992;
      if (_0x21c0aa <= -_0x470b96 || _0x21c0aa >= _0x470b96) {
        return -61;
      }
      _0x4de3dc.llseek(_0x4e0707, _0x21c0aa, _0x5585aa);
      _0x3942a9 = [_0x4e0707.position >>> 0, (_0xd0ad0c = _0x4e0707.position, +Math.abs(_0xd0ad0c) >= 1 ? _0xd0ad0c > 0 ? (Math.min(+Math.floor(_0xd0ad0c / 4294967296), 4294967295) | 0) >>> 0 : ~~+Math.ceil((_0xd0ad0c - +(~~_0xd0ad0c >>> 0)) / 4294967296) >>> 0 : 0)];
      _0x38db74[_0x5e2221 >> 2] = _0x3942a9[0];
      _0x38db74[_0x5e2221 + 4 >> 2] = _0x3942a9[1];
      if (_0x4e0707.getdents && _0x21c0aa === 0 && _0x5585aa === 0) {
        _0x4e0707.getdents = null;
      }
      return 0;
    } catch (_0x1d4024) {
      if (typeof _0x4de3dc === "undefined" || !(_0x1d4024 instanceof _0x4de3dc.ErrnoError)) {
        _0x5d461b(_0x1d4024);
      }
      return _0x1d4024.errno;
    }
  }
  function _0x10b154(_0x119576, _0x388b6e, _0x537b7c, _0x2f6248) {
    try {
      var _0x85caff = _0x29f6ac.getStreamFromFD(_0x119576);
      var _0x796705 = _0x29f6ac.doWritev(_0x85caff, _0x388b6e, _0x537b7c);
      _0x38db74[_0x2f6248 >> 2] = _0x796705;
      return 0;
    } catch (_0x29f8b0) {
      if (typeof _0x4de3dc === "undefined" || !(_0x29f8b0 instanceof _0x4de3dc.ErrnoError)) {
        _0x5d461b(_0x29f8b0);
      }
      return _0x29f8b0.errno;
    }
  }
  function _0x44a6e6(_0x46038f, _0x33f51f) {
    return 0;
  }
  function _0x2e7c84() {
    return _0xd7413f();
  }
  function _0x51fc7b(_0x5c1204, _0x52d1a8, _0x369de4, _0x8d07e3) {
    var _0x15ca47 = 0;
    var _0x4f7fdc = 0;
    var _0x305f75 = 0;
    var _0x2d0df4 = 0;
    var _0x3325bf = 0;
    var _0x1e4d9a = 0;
    var _0x220487;
    function _0x5791a6(_0x43f27f, _0x1129e4, _0x3d7444, _0x5102ea, _0x3bc48f, _0x5d2115) {
      var _0x5b31e9;
      var _0x40faab;
      var _0x54f4aa;
      var _0x4a7a48;
      _0x40faab = _0x43f27f === 10 ? 28 : 16;
      _0x3bc48f = _0x43f27f === 10 ? _0x432da4(_0x3bc48f) : _0x7256f5(_0x3bc48f);
      _0x5b31e9 = _0x434dac(_0x40faab);
      _0x4a7a48 = _0x13106a(_0x5b31e9, _0x43f27f, _0x3bc48f, _0x5d2115);
      _0x37a78f(!_0x4a7a48);
      _0x54f4aa = _0x434dac(32);
      _0x38db74[_0x54f4aa + 4 >> 2] = _0x43f27f;
      _0x38db74[_0x54f4aa + 8 >> 2] = _0x1129e4;
      _0x38db74[_0x54f4aa + 12 >> 2] = _0x3d7444;
      _0x38db74[_0x54f4aa + 24 >> 2] = _0x5102ea;
      _0x38db74[_0x54f4aa + 20 >> 2] = _0x5b31e9;
      if (_0x43f27f === 10) {
        _0x38db74[_0x54f4aa + 16 >> 2] = 28;
      } else {
        _0x38db74[_0x54f4aa + 16 >> 2] = 16;
      }
      _0x38db74[_0x54f4aa + 28 >> 2] = 0;
      return _0x54f4aa;
    }
    if (_0x369de4) {
      _0x305f75 = _0x38db74[_0x369de4 >> 2];
      _0x2d0df4 = _0x38db74[_0x369de4 + 4 >> 2];
      _0x3325bf = _0x38db74[_0x369de4 + 8 >> 2];
      _0x1e4d9a = _0x38db74[_0x369de4 + 12 >> 2];
    }
    if (_0x3325bf && !_0x1e4d9a) {
      _0x1e4d9a = _0x3325bf === 2 ? 17 : 6;
    }
    if (!_0x3325bf && _0x1e4d9a) {
      _0x3325bf = _0x1e4d9a === 17 ? 2 : 1;
    }
    if (_0x1e4d9a === 0) {
      _0x1e4d9a = 6;
    }
    if (_0x3325bf === 0) {
      _0x3325bf = 1;
    }
    if (!_0x5c1204 && !_0x52d1a8) {
      return -2;
    }
    if (_0x305f75 & ~1087) {
      return -1;
    }
    if (_0x369de4 !== 0 && _0x38db74[_0x369de4 >> 2] & 2 && !_0x5c1204) {
      return -1;
    }
    if (_0x305f75 & 32) {
      return -2;
    }
    if (_0x3325bf !== 0 && _0x3325bf !== 1 && _0x3325bf !== 2) {
      return -7;
    }
    if (_0x2d0df4 !== 0 && _0x2d0df4 !== 2 && _0x2d0df4 !== 10) {
      return -6;
    }
    if (_0x52d1a8) {
      _0x52d1a8 = _0xdfb7b2(_0x52d1a8);
      _0x4f7fdc = parseInt(_0x52d1a8, 10);
      if (isNaN(_0x4f7fdc)) {
        if (_0x305f75 & 1024) {
          return -2;
        }
        return -8;
      }
    }
    if (!_0x5c1204) {
      if (_0x2d0df4 === 0) {
        _0x2d0df4 = 2;
      }
      if ((_0x305f75 & 1) === 0) {
        if (_0x2d0df4 === 2) {
          _0x15ca47 = _0x93a75e(2130706433);
        } else {
          _0x15ca47 = [0, 0, 0, 1];
        }
      }
      _0x220487 = _0x5791a6(_0x2d0df4, _0x3325bf, _0x1e4d9a, null, _0x15ca47, _0x4f7fdc);
      _0x38db74[_0x8d07e3 >> 2] = _0x220487;
      return 0;
    }
    _0x5c1204 = _0xdfb7b2(_0x5c1204);
    _0x15ca47 = _0x204987(_0x5c1204);
    if (_0x15ca47 !== null) {
      if (_0x2d0df4 === 0 || _0x2d0df4 === 2) {
        _0x2d0df4 = 2;
      } else if (_0x2d0df4 === 10 && _0x305f75 & 8) {
        _0x15ca47 = [0, 0, _0x93a75e(65535), _0x15ca47];
        _0x2d0df4 = 10;
      } else {
        return -2;
      }
    } else {
      _0x15ca47 = _0x4712ec(_0x5c1204);
      if (_0x15ca47 !== null) {
        if (_0x2d0df4 === 0 || _0x2d0df4 === 10) {
          _0x2d0df4 = 10;
        } else {
          return -2;
        }
      }
    }
    if (_0x15ca47 != null) {
      _0x220487 = _0x5791a6(_0x2d0df4, _0x3325bf, _0x1e4d9a, _0x5c1204, _0x15ca47, _0x4f7fdc);
      _0x38db74[_0x8d07e3 >> 2] = _0x220487;
      return 0;
    }
    if (_0x305f75 & 4) {
      return -2;
    }
    _0x5c1204 = _0x1c41cd.lookup_name(_0x5c1204);
    _0x15ca47 = _0x204987(_0x5c1204);
    if (_0x2d0df4 === 0) {
      _0x2d0df4 = 2;
    } else if (_0x2d0df4 === 10) {
      _0x15ca47 = [0, 0, _0x93a75e(65535), _0x15ca47];
    }
    _0x220487 = _0x5791a6(_0x2d0df4, _0x3325bf, _0x1e4d9a, null, _0x15ca47, _0x4f7fdc);
    _0x38db74[_0x8d07e3 >> 2] = _0x220487;
    return 0;
  }
  function _0x33c380(_0x3eedb3) {
    var _0x1d718f = _0x434dac(20);
    var _0x24987a = _0x434dac(_0x3eedb3.length + 1);
    _0x517360(_0x3eedb3, _0x24987a, _0x3eedb3.length + 1);
    _0x38db74[_0x1d718f >> 2] = _0x24987a;
    var _0x2ed27b = _0x434dac(4);
    _0x38db74[_0x2ed27b >> 2] = 0;
    _0x38db74[_0x1d718f + 4 >> 2] = _0x2ed27b;
    var _0x3b7d5c = 2;
    _0x38db74[_0x1d718f + 8 >> 2] = _0x3b7d5c;
    _0x38db74[_0x1d718f + 12 >> 2] = 4;
    var _0x588109 = _0x434dac(12);
    _0x38db74[_0x588109 >> 2] = _0x588109 + 8;
    _0x38db74[_0x588109 + 4 >> 2] = 0;
    _0x38db74[_0x588109 + 8 >> 2] = _0x204987(_0x1c41cd.lookup_name(_0x3eedb3));
    _0x38db74[_0x1d718f + 16 >> 2] = _0x588109;
    return _0x1d718f;
  }
  function _0x2c8b3a(_0x49d3c2, _0x47378d, _0x1036ca) {
    if (_0x1036ca !== 2) {
      _0x54e9de(5);
      return null;
    }
    _0x49d3c2 = _0x38db74[_0x49d3c2 >> 2];
    var _0x115061 = _0x7256f5(_0x49d3c2);
    var _0x50f1b3 = _0x1c41cd.lookup_addr(_0x115061);
    if (_0x50f1b3) {
      _0x115061 = _0x50f1b3;
    }
    return _0x33c380(_0x115061);
  }
  function _0x26bbcb(_0x5d034d) {
    return _0x33c380(_0xdfb7b2(_0x5d034d));
  }
  function _0x5337d3(_0x9e33ea, _0x475521, _0xb49e16, _0x2cdc1a, _0x210c7f, _0x1b8c02, _0x2ee7f3) {
    var _0x50b2ba = _0x137013(_0x9e33ea, _0x475521);
    if (_0x50b2ba.errno) {
      return -6;
    }
    var _0x3d3b3b = _0x50b2ba.port;
    var _0x18622f = _0x50b2ba.addr;
    var _0x44c077 = false;
    if (_0xb49e16 && _0x2cdc1a) {
      var _0x6cb550;
      if (_0x2ee7f3 & 1 || !(_0x6cb550 = _0x1c41cd.lookup_addr(_0x18622f))) {
        if (_0x2ee7f3 & 8) {
          return -2;
        }
      } else {
        _0x18622f = _0x6cb550;
      }
      var _0x53ab63 = _0x517360(_0x18622f, _0xb49e16, _0x2cdc1a);
      if (_0x53ab63 + 1 >= _0x2cdc1a) {
        _0x44c077 = true;
      }
    }
    if (_0x210c7f && _0x1b8c02) {
      _0x3d3b3b = "" + _0x3d3b3b;
      var _0x53ab63 = _0x517360(_0x3d3b3b, _0x210c7f, _0x1b8c02);
      if (_0x53ab63 + 1 >= _0x1b8c02) {
        _0x44c077 = true;
      }
    }
    if (_0x44c077) {
      return -12;
    }
    return 0;
  }
  function _0x3cb085() {
    throw "getpwuid: TODO";
  }
  function _0x42f483(_0x476ddc) {
    var _0x42bfb5 = Date.now();
    _0x38db74[_0x476ddc >> 2] = _0x42bfb5 / 1000 | 0;
    _0x38db74[_0x476ddc + 4 >> 2] = _0x42bfb5 % 1000 * 1000 | 0;
    return 0;
  }
  function _0x3d62b8(_0x3aa69b) {
    _0x2ad584.activeTexture(_0x3aa69b);
  }
  function _0x120423(_0xa755a7, _0x1f32ec) {
    _0xa755a7 = _0x2375dd.programs[_0xa755a7];
    _0x1f32ec = _0x2375dd.shaders[_0x1f32ec];
    _0xa755a7[_0x1f32ec.shaderType] = _0x1f32ec;
    _0x2ad584.attachShader(_0xa755a7, _0x1f32ec);
  }
  function _0x3ab015(_0x160fa6, _0xe5de96) {
    _0x2ad584.beginQuery(_0x160fa6, _0x2375dd.queries[_0xe5de96]);
  }
  function _0x50676d(_0x5500f6) {
    _0x2ad584.beginTransformFeedback(_0x5500f6);
  }
  function _0x4b8d23(_0x2d7010, _0x563937, _0x1a0998) {
    _0x2ad584.bindAttribLocation(_0x2375dd.programs[_0x2d7010], _0x563937, _0xdfb7b2(_0x1a0998));
  }
  function _0x319e87(_0x1cc815, _0x1e1c4c) {
    if (_0x1cc815 == 34962) {
      _0x2ad584.currentArrayBufferBinding = _0x1e1c4c;
    } else if (_0x1cc815 == 34963) {
      _0x2ad584.currentElementArrayBufferBinding = _0x1e1c4c;
    }
    if (_0x1cc815 == 35051) {
      _0x2ad584.currentPixelPackBufferBinding = _0x1e1c4c;
    } else if (_0x1cc815 == 35052) {
      _0x2ad584.currentPixelUnpackBufferBinding = _0x1e1c4c;
    }
    _0x2ad584.bindBuffer(_0x1cc815, _0x2375dd.buffers[_0x1e1c4c]);
  }
  function _0x48bbd8(_0x34a2f9, _0x586cf, _0x528f77) {
    _0x2ad584.bindBufferBase(_0x34a2f9, _0x586cf, _0x2375dd.buffers[_0x528f77]);
  }
  function _0x519a95(_0x45afce, _0x568e31, _0x39fafd, _0x40c946, _0x2f7c8b) {
    _0x2ad584.bindBufferRange(_0x45afce, _0x568e31, _0x2375dd.buffers[_0x39fafd], _0x40c946, _0x2f7c8b);
  }
  function _0x10f716(_0x4bd270, _0x220bc7) {
    _0x2ad584.bindFramebuffer(_0x4bd270, _0x2375dd.framebuffers[_0x220bc7]);
  }
  function _0x1a9ad0(_0x1c40d8, _0x45e8b3) {
    _0x2ad584.bindRenderbuffer(_0x1c40d8, _0x2375dd.renderbuffers[_0x45e8b3]);
  }
  function _0x404c97(_0x176343, _0x424b37) {
    _0x2ad584.bindSampler(_0x176343, _0x2375dd.samplers[_0x424b37]);
  }
  function _0x3393d6(_0x31bba2, _0x5e7fec) {
    _0x2ad584.bindTexture(_0x31bba2, _0x2375dd.textures[_0x5e7fec]);
  }
  function _0x25c208(_0x212495, _0x537c0a) {
    _0x2ad584.bindTransformFeedback(_0x212495, _0x2375dd.transformFeedbacks[_0x537c0a]);
  }
  function _0xa30aca(_0x2f954a) {
    _0x2ad584.bindVertexArray(_0x2375dd.vaos[_0x2f954a]);
    var _0x40ba9a = _0x2ad584.getParameter(34965);
    _0x2ad584.currentElementArrayBufferBinding = _0x40ba9a ? _0x40ba9a.name | 0 : 0;
  }
  function _0x2dd28f(_0x23de7a) {
    _0x2ad584.blendEquation(_0x23de7a);
  }
  function _0x2fb463(_0x1e78f0, _0x591e67) {
    _0x2ad584.blendEquationSeparate(_0x1e78f0, _0x591e67);
  }
  function _0x38291c(_0x10bdcd, _0xc578b2, _0x8a761, _0x292864) {
    _0x2ad584.blendFuncSeparate(_0x10bdcd, _0xc578b2, _0x8a761, _0x292864);
  }
  function _0x432402(_0x1e35be, _0xf03056, _0x429f78, _0x3bd7d2, _0xc73f97, _0x401d5d, _0x376dcc, _0x2b4cdb, _0x442ad6, _0x5d1e62) {
    _0x2ad584.blitFramebuffer(_0x1e35be, _0xf03056, _0x429f78, _0x3bd7d2, _0xc73f97, _0x401d5d, _0x376dcc, _0x2b4cdb, _0x442ad6, _0x5d1e62);
  }
  function _0x4acae9(_0x10e017, _0x17c071, _0x574dbc, _0x2dcfe1) {
    if (_0x2375dd.currentContext.version >= 2) {
      if (_0x574dbc) {
        _0x2ad584.bufferData(_0x10e017, _0xdf86cd, _0x2dcfe1, _0x574dbc, _0x17c071);
      } else {
        _0x2ad584.bufferData(_0x10e017, _0x17c071, _0x2dcfe1);
      }
    } else {
      _0x2ad584.bufferData(_0x10e017, _0x574dbc ? _0xdf86cd.subarray(_0x574dbc, _0x574dbc + _0x17c071) : _0x17c071, _0x2dcfe1);
    }
  }
  function _0x509d02(_0x16540a, _0xe09788, _0x3762a6, _0x5ee334) {
    if (_0x2375dd.currentContext.version >= 2) {
      _0x2ad584.bufferSubData(_0x16540a, _0xe09788, _0xdf86cd, _0x5ee334, _0x3762a6);
      return;
    }
    _0x2ad584.bufferSubData(_0x16540a, _0xe09788, _0xdf86cd.subarray(_0x5ee334, _0x5ee334 + _0x3762a6));
  }
  function _0x3ed8fd(_0x4fdfa6) {
    return _0x2ad584.checkFramebufferStatus(_0x4fdfa6);
  }
  function _0x3ea788(_0x55ec6e) {
    _0x2ad584.clear(_0x55ec6e);
  }
  function _0x2c902d(_0x10a9ba, _0x54ef16, _0x1268f4, _0x5bc9b3) {
    _0x2ad584.clearBufferfi(_0x10a9ba, _0x54ef16, _0x1268f4, _0x5bc9b3);
  }
  function _0x56f595(_0x13f4eb, _0x1be472, _0x5215f5) {
    _0x2ad584.clearBufferfv(_0x13f4eb, _0x1be472, _0x2b9907, _0x5215f5 >> 2);
  }
  function _0x550a35(_0xfff508, _0x164a5a, _0x313218) {
    _0x2ad584.clearBufferuiv(_0xfff508, _0x164a5a, _0x2f2db0, _0x313218 >> 2);
  }
  function _0x1ec9d3(_0x448cf9, _0x532ed7, _0x211fd6, _0x49f759) {
    _0x2ad584.clearColor(_0x448cf9, _0x532ed7, _0x211fd6, _0x49f759);
  }
  function _0x45ebf2(_0x910c9b) {
    _0x2ad584.clearDepth(_0x910c9b);
  }
  function _0x571179(_0x2a648f) {
    _0x2ad584.clearStencil(_0x2a648f);
  }
  function _0x4683ae(_0x493add, _0x1e9a30, _0x3ef9c6, _0x49a74e) {
    return _0x2ad584.clientWaitSync(_0x2375dd.syncs[_0x493add], _0x1e9a30, _0x33cceb(_0x3ef9c6, _0x49a74e));
  }
  function _0x58b848(_0x54ed45, _0x57fd4f, _0x1582a2, _0x268e19) {
    _0x2ad584.colorMask(!!_0x54ed45, !!_0x57fd4f, !!_0x1582a2, !!_0x268e19);
  }
  function _0x5d7c77(_0x3e5b31) {
    _0x2ad584.compileShader(_0x2375dd.shaders[_0x3e5b31]);
  }
  function _0x48a121(_0x20d46a, _0x3a133f, _0x1bd060, _0x33f910, _0x4f8ae6, _0x5c524e, _0x280d49, _0xe95f42) {
    if (_0x2375dd.currentContext.version >= 2) {
      if (_0x2ad584.currentPixelUnpackBufferBinding) {
        _0x2ad584.compressedTexImage2D(_0x20d46a, _0x3a133f, _0x1bd060, _0x33f910, _0x4f8ae6, _0x5c524e, _0x280d49, _0xe95f42);
      } else {
        _0x2ad584.compressedTexImage2D(_0x20d46a, _0x3a133f, _0x1bd060, _0x33f910, _0x4f8ae6, _0x5c524e, _0xdf86cd, _0xe95f42, _0x280d49);
      }
      return;
    }
    _0x2ad584.compressedTexImage2D(_0x20d46a, _0x3a133f, _0x1bd060, _0x33f910, _0x4f8ae6, _0x5c524e, _0xe95f42 ? _0xdf86cd.subarray(_0xe95f42, _0xe95f42 + _0x280d49) : null);
  }
  function _0x26d2df(_0x4481a7, _0x6fb7f9, _0x5d7492, _0x1c793a, _0x3057bf, _0x7473e2, _0x1de16a, _0x319570, _0x20e975) {
    if (_0x2ad584.currentPixelUnpackBufferBinding) {
      _0x2ad584.compressedTexImage3D(_0x4481a7, _0x6fb7f9, _0x5d7492, _0x1c793a, _0x3057bf, _0x7473e2, _0x1de16a, _0x319570, _0x20e975);
    } else {
      _0x2ad584.compressedTexImage3D(_0x4481a7, _0x6fb7f9, _0x5d7492, _0x1c793a, _0x3057bf, _0x7473e2, _0x1de16a, _0xdf86cd, _0x20e975, _0x319570);
    }
  }
  function _0x1777fe(_0x5e70e6, _0x4b5cc7, _0x1d7f87, _0x49fbc7, _0x5aea9f, _0x3d4505, _0x281f88, _0x25a8db, _0x406078) {
    if (_0x2375dd.currentContext.version >= 2) {
      if (_0x2ad584.currentPixelUnpackBufferBinding) {
        _0x2ad584.compressedTexSubImage2D(_0x5e70e6, _0x4b5cc7, _0x1d7f87, _0x49fbc7, _0x5aea9f, _0x3d4505, _0x281f88, _0x25a8db, _0x406078);
      } else {
        _0x2ad584.compressedTexSubImage2D(_0x5e70e6, _0x4b5cc7, _0x1d7f87, _0x49fbc7, _0x5aea9f, _0x3d4505, _0x281f88, _0xdf86cd, _0x406078, _0x25a8db);
      }
      return;
    }
    _0x2ad584.compressedTexSubImage2D(_0x5e70e6, _0x4b5cc7, _0x1d7f87, _0x49fbc7, _0x5aea9f, _0x3d4505, _0x281f88, _0x406078 ? _0xdf86cd.subarray(_0x406078, _0x406078 + _0x25a8db) : null);
  }
  function _0x161edc(_0x14c788, _0x514323, _0x380a38, _0x113152, _0x54d229, _0x511bf9, _0x54b797, _0x4c4150, _0x554c5a, _0x4061c8, _0x2b32ec) {
    if (_0x2ad584.currentPixelUnpackBufferBinding) {
      _0x2ad584.compressedTexSubImage3D(_0x14c788, _0x514323, _0x380a38, _0x113152, _0x54d229, _0x511bf9, _0x54b797, _0x4c4150, _0x554c5a, _0x4061c8, _0x2b32ec);
    } else {
      _0x2ad584.compressedTexSubImage3D(_0x14c788, _0x514323, _0x380a38, _0x113152, _0x54d229, _0x511bf9, _0x54b797, _0x4c4150, _0x554c5a, _0xdf86cd, _0x2b32ec, _0x4061c8);
    }
  }
  function _0x2299b4(_0x110ac8, _0x14a50f, _0x11aba8, _0x32b73c, _0x355cf8) {
    _0x2ad584.copyBufferSubData(_0x110ac8, _0x14a50f, _0x11aba8, _0x32b73c, _0x355cf8);
  }
  function _0x4f9a5b(_0x44c824, _0x2a654d, _0x49af51, _0x28164f, _0x199800, _0x38d2b9, _0x4cafbe, _0xd8f623) {
    _0x2ad584.copyTexImage2D(_0x44c824, _0x2a654d, _0x49af51, _0x28164f, _0x199800, _0x38d2b9, _0x4cafbe, _0xd8f623);
  }
  function _0xcf97fa(_0x3aabb3, _0x2effc7, _0x1c100c, _0x4148a6, _0x4ef58b, _0x439594, _0x5307f9, _0x4af2b5) {
    _0x2ad584.copyTexSubImage2D(_0x3aabb3, _0x2effc7, _0x1c100c, _0x4148a6, _0x4ef58b, _0x439594, _0x5307f9, _0x4af2b5);
  }
  function _0x53eda1() {
    var _0x1a10dc = _0x2375dd.getNewId(_0x2375dd.programs);
    var _0x2130a4 = _0x2ad584.createProgram();
    _0x2130a4.name = _0x1a10dc;
    _0x2130a4.maxUniformLength = _0x2130a4.maxAttributeLength = _0x2130a4.maxUniformBlockNameLength = 0;
    _0x2130a4.uniformIdCounter = 1;
    _0x2375dd.programs[_0x1a10dc] = _0x2130a4;
    return _0x1a10dc;
  }
  function _0x30803a(_0x42c5ef) {
    var _0x29575d = _0x2375dd.getNewId(_0x2375dd.shaders);
    _0x2375dd.shaders[_0x29575d] = _0x2ad584.createShader(_0x42c5ef);
    _0x2375dd.shaders[_0x29575d].shaderType = _0x42c5ef & 1 ? "vs" : "fs";
    return _0x29575d;
  }
  function _0x5d4058(_0x25d310) {
    _0x2ad584.cullFace(_0x25d310);
  }
  function _0x1f66c4(_0x13b3a1, _0x3f066e) {
    for (var _0x5a6585 = 0; _0x5a6585 < _0x13b3a1; _0x5a6585++) {
      var _0x178b01 = _0x38db74[_0x3f066e + _0x5a6585 * 4 >> 2];
      var _0x121a41 = _0x2375dd.buffers[_0x178b01];
      if (!_0x121a41) {
        continue;
      }
      _0x2ad584.deleteBuffer(_0x121a41);
      _0x121a41.name = 0;
      _0x2375dd.buffers[_0x178b01] = null;
      if (_0x178b01 == _0x2ad584.currentArrayBufferBinding) {
        _0x2ad584.currentArrayBufferBinding = 0;
      }
      if (_0x178b01 == _0x2ad584.currentElementArrayBufferBinding) {
        _0x2ad584.currentElementArrayBufferBinding = 0;
      }
      if (_0x178b01 == _0x2ad584.currentPixelPackBufferBinding) {
        _0x2ad584.currentPixelPackBufferBinding = 0;
      }
      if (_0x178b01 == _0x2ad584.currentPixelUnpackBufferBinding) {
        _0x2ad584.currentPixelUnpackBufferBinding = 0;
      }
    }
  }
  function _0xe91101(_0x1238a6, _0x1ff0b3) {
    for (var _0x5fd99f = 0; _0x5fd99f < _0x1238a6; ++_0x5fd99f) {
      var _0x22ac54 = _0x38db74[_0x1ff0b3 + _0x5fd99f * 4 >> 2];
      var _0x46fe2d = _0x2375dd.framebuffers[_0x22ac54];
      if (!_0x46fe2d) {
        continue;
      }
      _0x2ad584.deleteFramebuffer(_0x46fe2d);
      _0x46fe2d.name = 0;
      _0x2375dd.framebuffers[_0x22ac54] = null;
    }
  }
  function _0x23a9dd(_0x19bc07) {
    if (!_0x19bc07) {
      return;
    }
    var _0x3e596f = _0x2375dd.programs[_0x19bc07];
    if (!_0x3e596f) {
      _0x2375dd.recordError(1281);
      return;
    }
    _0x2ad584.deleteProgram(_0x3e596f);
    _0x3e596f.name = 0;
    _0x2375dd.programs[_0x19bc07] = null;
  }
  function _0x58262c(_0x52ddbb, _0x517833) {
    for (var _0x4f8cf7 = 0; _0x4f8cf7 < _0x52ddbb; _0x4f8cf7++) {
      var _0x6b2894 = _0x38db74[_0x517833 + _0x4f8cf7 * 4 >> 2];
      var _0x5afed9 = _0x2375dd.queries[_0x6b2894];
      if (!_0x5afed9) {
        continue;
      }
      _0x2ad584.deleteQuery(_0x5afed9);
      _0x2375dd.queries[_0x6b2894] = null;
    }
  }
  function _0x417bf1(_0x9aae0a, _0x478690) {
    for (var _0x253a78 = 0; _0x253a78 < _0x9aae0a; _0x253a78++) {
      var _0xc74e22 = _0x38db74[_0x478690 + _0x253a78 * 4 >> 2];
      var _0x29a0cb = _0x2375dd.renderbuffers[_0xc74e22];
      if (!_0x29a0cb) {
        continue;
      }
      _0x2ad584.deleteRenderbuffer(_0x29a0cb);
      _0x29a0cb.name = 0;
      _0x2375dd.renderbuffers[_0xc74e22] = null;
    }
  }
  function _0x472b6a(_0x36d61f, _0x5d6300) {
    for (var _0x1956ad = 0; _0x1956ad < _0x36d61f; _0x1956ad++) {
      var _0x9370fe = _0x38db74[_0x5d6300 + _0x1956ad * 4 >> 2];
      var _0x4eb1f9 = _0x2375dd.samplers[_0x9370fe];
      if (!_0x4eb1f9) {
        continue;
      }
      _0x2ad584.deleteSampler(_0x4eb1f9);
      _0x4eb1f9.name = 0;
      _0x2375dd.samplers[_0x9370fe] = null;
    }
  }
  function _0x8f1aae(_0x5672a9) {
    if (!_0x5672a9) {
      return;
    }
    var _0x5b5798 = _0x2375dd.shaders[_0x5672a9];
    if (!_0x5b5798) {
      _0x2375dd.recordError(1281);
      return;
    }
    _0x2ad584.deleteShader(_0x5b5798);
    _0x2375dd.shaders[_0x5672a9] = null;
  }
  function _0x524933(_0x122c57) {
    if (!_0x122c57) {
      return;
    }
    var _0x8027a6 = _0x2375dd.syncs[_0x122c57];
    if (!_0x8027a6) {
      _0x2375dd.recordError(1281);
      return;
    }
    _0x2ad584.deleteSync(_0x8027a6);
    _0x8027a6.name = 0;
    _0x2375dd.syncs[_0x122c57] = null;
  }
  function _0x56e5b4(_0x82851e, _0x211d3c) {
    for (var _0x4f1410 = 0; _0x4f1410 < _0x82851e; _0x4f1410++) {
      var _0x8564ee = _0x38db74[_0x211d3c + _0x4f1410 * 4 >> 2];
      var _0x45b24f = _0x2375dd.textures[_0x8564ee];
      if (!_0x45b24f) {
        continue;
      }
      _0x2ad584.deleteTexture(_0x45b24f);
      _0x45b24f.name = 0;
      _0x2375dd.textures[_0x8564ee] = null;
    }
  }
  function _0x14c0c0(_0x2ad0f6, _0x8d267f) {
    for (var _0x931f73 = 0; _0x931f73 < _0x2ad0f6; _0x931f73++) {
      var _0x4512c3 = _0x38db74[_0x8d267f + _0x931f73 * 4 >> 2];
      var _0x4acea9 = _0x2375dd.transformFeedbacks[_0x4512c3];
      if (!_0x4acea9) {
        continue;
      }
      _0x2ad584.deleteTransformFeedback(_0x4acea9);
      _0x4acea9.name = 0;
      _0x2375dd.transformFeedbacks[_0x4512c3] = null;
    }
  }
  function _0x161594(_0x35be95, _0x333e1c) {
    for (var _0x1cc5f4 = 0; _0x1cc5f4 < _0x35be95; _0x1cc5f4++) {
      var _0x2e9ef0 = _0x38db74[_0x333e1c + _0x1cc5f4 * 4 >> 2];
      _0x2ad584.deleteVertexArray(_0x2375dd.vaos[_0x2e9ef0]);
      _0x2375dd.vaos[_0x2e9ef0] = null;
    }
  }
  function _0x300322(_0x502f94) {
    _0x2ad584.depthFunc(_0x502f94);
  }
  function _0x14a253(_0x1b99a3) {
    _0x2ad584.depthMask(!!_0x1b99a3);
  }
  function _0xcca049(_0x443d05, _0x3e6dcf) {
    _0x2ad584.detachShader(_0x2375dd.programs[_0x443d05], _0x2375dd.shaders[_0x3e6dcf]);
  }
  function _0x27a0e8(_0x53db89) {
    _0x2ad584.disable(_0x53db89);
  }
  function _0x198423(_0x2671cb) {
    var _0x3deda0 = _0x2375dd.currentContext.clientBuffers[_0x2671cb];
    _0x3deda0.enabled = false;
    _0x2ad584.disableVertexAttribArray(_0x2671cb);
  }
  function _0x35e228(_0x3b8024, _0x3eeec2, _0x23b5b0) {
    _0x2375dd.preDrawHandleClientVertexAttribBindings(_0x3eeec2 + _0x23b5b0);
    _0x2ad584.drawArrays(_0x3b8024, _0x3eeec2, _0x23b5b0);
    _0x2375dd.postDrawHandleClientVertexAttribBindings();
  }
  function _0xc3adc7(_0x500770, _0x14d7d6, _0x3b4ff8, _0x524173) {
    _0x2ad584.drawArraysInstanced(_0x500770, _0x14d7d6, _0x3b4ff8, _0x524173);
  }
  var _0x4f2d92 = [];
  function _0x4b68bf(_0x37eb0, _0x13588f) {
    var _0x39cea6 = _0x4f2d92[_0x37eb0];
    for (var _0x499f4e = 0; _0x499f4e < _0x37eb0; _0x499f4e++) {
      _0x39cea6[_0x499f4e] = _0x38db74[_0x13588f + _0x499f4e * 4 >> 2];
    }
    _0x2ad584.drawBuffers(_0x39cea6);
  }
  function _0xe7c758(_0x27ed39, _0x51629e, _0x5553b5, _0x18789d) {
    var _0xb0ec4a;
    if (!_0x2ad584.currentElementArrayBufferBinding) {
      var _0x593e67 = _0x2375dd.calcBufLength(1, _0x5553b5, 0, _0x51629e);
      _0xb0ec4a = _0x2375dd.getTempIndexBuffer(_0x593e67);
      _0x2ad584.bindBuffer(34963, _0xb0ec4a);
      _0x2ad584.bufferSubData(34963, 0, _0xdf86cd.subarray(_0x18789d, _0x18789d + _0x593e67));
      _0x18789d = 0;
    }
    _0x2375dd.preDrawHandleClientVertexAttribBindings(_0x51629e);
    _0x2ad584.drawElements(_0x27ed39, _0x51629e, _0x5553b5, _0x18789d);
    _0x2375dd.postDrawHandleClientVertexAttribBindings(_0x51629e);
    if (!_0x2ad584.currentElementArrayBufferBinding) {
      _0x2ad584.bindBuffer(34963, null);
    }
  }
  function _0x3a2089(_0x22c08b, _0x469557, _0x315686, _0x478813, _0x395121) {
    _0x2ad584.drawElementsInstanced(_0x22c08b, _0x469557, _0x315686, _0x478813, _0x395121);
  }
  function _0x5a7535(_0x8315d4) {
    _0x2ad584.enable(_0x8315d4);
  }
  function _0x1bd9fc(_0x15505a) {
    var _0x581dbd = _0x2375dd.currentContext.clientBuffers[_0x15505a];
    _0x581dbd.enabled = true;
    _0x2ad584.enableVertexAttribArray(_0x15505a);
  }
  function _0x56998d(_0x46c12b) {
    _0x2ad584.endQuery(_0x46c12b);
  }
  function _0x232d83() {
    _0x2ad584.endTransformFeedback();
  }
  function _0x1f55d9(_0x4231b4, _0x4e4793) {
    var _0x398399 = _0x2ad584.fenceSync(_0x4231b4, _0x4e4793);
    if (_0x398399) {
      var _0x473b47 = _0x2375dd.getNewId(_0x2375dd.syncs);
      _0x398399.name = _0x473b47;
      _0x2375dd.syncs[_0x473b47] = _0x398399;
      return _0x473b47;
    } else {
      return 0;
    }
  }
  function _0x46f4ec() {
    _0x2ad584.finish();
  }
  function _0x415253() {
    _0x2ad584.flush();
  }
  function _0x522415(_0xdd1e38) {
    switch (_0xdd1e38) {
      case 34962:
        _0xdd1e38 = 34964;
        break;
      case 34963:
        _0xdd1e38 = 34965;
        break;
      case 35051:
        _0xdd1e38 = 35053;
        break;
      case 35052:
        _0xdd1e38 = 35055;
        break;
      case 35982:
        _0xdd1e38 = 35983;
        break;
      case 36662:
        _0xdd1e38 = 36662;
        break;
      case 36663:
        _0xdd1e38 = 36663;
        break;
      case 35345:
        _0xdd1e38 = 35368;
        break;
    }
    var _0x575f29 = _0x2ad584.getParameter(_0xdd1e38);
    if (_0x575f29) {
      return _0x575f29.name | 0;
    } else {
      return 0;
    }
  }
  function _0x3ce037(_0xee0808) {
    switch (_0xee0808) {
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
  function _0x17412e(_0x25d42c, _0x25db86, _0x432ec9) {
    if (!_0x3ce037(_0x25d42c)) {
      _0x2375dd.recordError(1280);
      _0x1af4bd("GL_INVALID_ENUM in glFlushMappedBufferRange");
      return;
    }
    var _0x24900b = _0x2375dd.mappedBuffers[_0x522415(_0x25d42c)];
    if (!_0x24900b) {
      _0x2375dd.recordError(1282);
      _0x1af4bd("buffer was never mapped in glFlushMappedBufferRange");
      return;
    }
    if (!(_0x24900b.access & 16)) {
      _0x2375dd.recordError(1282);
      _0x1af4bd("buffer was not mapped with GL_MAP_FLUSH_EXPLICIT_BIT in glFlushMappedBufferRange");
      return;
    }
    if (_0x25db86 < 0 || _0x432ec9 < 0 || _0x25db86 + _0x432ec9 > _0x24900b.length) {
      _0x2375dd.recordError(1281);
      _0x1af4bd("invalid range in glFlushMappedBufferRange");
      return;
    }
    _0x2ad584.bufferSubData(_0x25d42c, _0x24900b.offset, _0xdf86cd.subarray(_0x24900b.mem + _0x25db86, _0x24900b.mem + _0x25db86 + _0x432ec9));
  }
  function _0x30d152(_0x3a0b73, _0x716e4, _0x1cb1de, _0xbce213) {
    _0x2ad584.framebufferRenderbuffer(_0x3a0b73, _0x716e4, _0x1cb1de, _0x2375dd.renderbuffers[_0xbce213]);
  }
  function _0x445527(_0x2e68ff, _0x2efd7d, _0x424c14, _0x11e83e, _0x50d9ba) {
    _0x2ad584.framebufferTexture2D(_0x2e68ff, _0x2efd7d, _0x424c14, _0x2375dd.textures[_0x11e83e], _0x50d9ba);
  }
  function _0x54e244(_0x3ccb58, _0x25573e, _0x181ff8, _0x5391f2, _0x468bbe) {
    _0x2ad584.framebufferTextureLayer(_0x3ccb58, _0x25573e, _0x2375dd.textures[_0x181ff8], _0x5391f2, _0x468bbe);
  }
  function _0x515245(_0x4ea20b) {
    _0x2ad584.frontFace(_0x4ea20b);
  }
  function _0x5bdbc0(_0x344f88, _0x18c62d, _0x3385f7, _0x3f298f) {
    for (var _0x2540c3 = 0; _0x2540c3 < _0x344f88; _0x2540c3++) {
      var _0xed7176 = _0x2ad584[_0x3385f7]();
      var _0x10d61a = _0xed7176 && _0x2375dd.getNewId(_0x3f298f);
      if (_0xed7176) {
        _0xed7176.name = _0x10d61a;
        _0x3f298f[_0x10d61a] = _0xed7176;
      } else {
        _0x2375dd.recordError(1282);
      }
      _0x38db74[_0x18c62d + _0x2540c3 * 4 >> 2] = _0x10d61a;
    }
  }
  function _0x337678(_0x125e6f, _0x4d9a99) {
    _0x5bdbc0(_0x125e6f, _0x4d9a99, "createBuffer", _0x2375dd.buffers);
  }
  function _0x430382(_0x19b8f3, _0x100e40) {
    _0x5bdbc0(_0x19b8f3, _0x100e40, "createFramebuffer", _0x2375dd.framebuffers);
  }
  function _0x23d294(_0x369954, _0x5a645b) {
    _0x5bdbc0(_0x369954, _0x5a645b, "createQuery", _0x2375dd.queries);
  }
  function _0x1586c6(_0x36aa97, _0x273c66) {
    _0x5bdbc0(_0x36aa97, _0x273c66, "createRenderbuffer", _0x2375dd.renderbuffers);
  }
  function _0x10ffb9(_0x2ec429, _0x5e9d2b) {
    _0x5bdbc0(_0x2ec429, _0x5e9d2b, "createSampler", _0x2375dd.samplers);
  }
  function _0x5f0c9b(_0x13eb38, _0x10ff4f) {
    _0x5bdbc0(_0x13eb38, _0x10ff4f, "createTexture", _0x2375dd.textures);
  }
  function _0x49f537(_0x510faa, _0x37a994) {
    _0x5bdbc0(_0x510faa, _0x37a994, "createTransformFeedback", _0x2375dd.transformFeedbacks);
  }
  function _0x374675(_0x2b8a73, _0xe5c58c) {
    _0x5bdbc0(_0x2b8a73, _0xe5c58c, "createVertexArray", _0x2375dd.vaos);
  }
  function _0x5eb873(_0x54be77) {
    _0x2ad584.generateMipmap(_0x54be77);
  }
  function _0x1751cc(_0x429ce8, _0x23de09, _0x3909d5, _0x444176, _0x4e597a, _0x3d105b, _0x10e50b, _0x15f49b) {
    _0x23de09 = _0x2375dd.programs[_0x23de09];
    var _0xfb32a4 = _0x2ad584[_0x429ce8](_0x23de09, _0x3909d5);
    if (_0xfb32a4) {
      var _0x448a76 = _0x15f49b && _0x517360(_0xfb32a4.name, _0x15f49b, _0x444176);
      if (_0x4e597a) {
        _0x38db74[_0x4e597a >> 2] = _0x448a76;
      }
      if (_0x3d105b) {
        _0x38db74[_0x3d105b >> 2] = _0xfb32a4.size;
      }
      if (_0x10e50b) {
        _0x38db74[_0x10e50b >> 2] = _0xfb32a4.type;
      }
    }
  }
  function _0xf89d97(_0x335759, _0x4ac568, _0x30940d, _0xbda7b9, _0x19a36d, _0x558c0b, _0x45f9cc) {
    _0x1751cc("getActiveAttrib", _0x335759, _0x4ac568, _0x30940d, _0xbda7b9, _0x19a36d, _0x558c0b, _0x45f9cc);
  }
  function _0x2b90f5(_0x2fb05b, _0x4c0964, _0x44f334, _0x93e200, _0x3501b0, _0x347259, _0x406c0a) {
    _0x1751cc("getActiveUniform", _0x2fb05b, _0x4c0964, _0x44f334, _0x93e200, _0x3501b0, _0x347259, _0x406c0a);
  }
  function _0x2cce64(_0x30e7b7, _0x4a8428, _0x5670bb, _0x4ba73e, _0x13922b) {
    _0x30e7b7 = _0x2375dd.programs[_0x30e7b7];
    var _0x57509f = _0x2ad584.getActiveUniformBlockName(_0x30e7b7, _0x4a8428);
    if (!_0x57509f) {
      return;
    }
    if (_0x13922b && _0x5670bb > 0) {
      var _0x301170 = _0x517360(_0x57509f, _0x13922b, _0x5670bb);
      if (_0x4ba73e) {
        _0x38db74[_0x4ba73e >> 2] = _0x301170;
      }
    } else if (_0x4ba73e) {
      _0x38db74[_0x4ba73e >> 2] = 0;
    }
  }
  function _0x20c559(_0xd5e9c2, _0x5e2d5f, _0xbf2a60, _0x42a193) {
    if (!_0x42a193) {
      _0x2375dd.recordError(1281);
      return;
    }
    _0xd5e9c2 = _0x2375dd.programs[_0xd5e9c2];
    if (_0xbf2a60 == 35393) {
      var _0x2338d5 = _0x2ad584.getActiveUniformBlockName(_0xd5e9c2, _0x5e2d5f);
      _0x38db74[_0x42a193 >> 2] = _0x2338d5.length + 1;
      return;
    }
    var _0x3ba365 = _0x2ad584.getActiveUniformBlockParameter(_0xd5e9c2, _0x5e2d5f, _0xbf2a60);
    if (_0x3ba365 === null) {
      return;
    }
    if (_0xbf2a60 == 35395) {
      for (var _0x3b496e = 0; _0x3b496e < _0x3ba365.length; _0x3b496e++) {
        _0x38db74[_0x42a193 + _0x3b496e * 4 >> 2] = _0x3ba365[_0x3b496e];
      }
    } else {
      _0x38db74[_0x42a193 >> 2] = _0x3ba365;
    }
  }
  function _0x35a5dc(_0x2df796, _0x552aba, _0x11ec90, _0x5d5d87, _0x360dc8) {
    if (!_0x360dc8) {
      _0x2375dd.recordError(1281);
      return;
    }
    if (_0x552aba > 0 && _0x11ec90 == 0) {
      _0x2375dd.recordError(1281);
      return;
    }
    _0x2df796 = _0x2375dd.programs[_0x2df796];
    var _0x1777e9 = [];
    for (var _0x362e79 = 0; _0x362e79 < _0x552aba; _0x362e79++) {
      _0x1777e9.push(_0x38db74[_0x11ec90 + _0x362e79 * 4 >> 2]);
    }
    var _0x3197f6 = _0x2ad584.getActiveUniforms(_0x2df796, _0x1777e9, _0x5d5d87);
    if (!_0x3197f6) {
      return;
    }
    var _0x42af5b = _0x3197f6.length;
    for (var _0x362e79 = 0; _0x362e79 < _0x42af5b; _0x362e79++) {
      _0x38db74[_0x360dc8 + _0x362e79 * 4 >> 2] = _0x3197f6[_0x362e79];
    }
  }
  function _0x3eabb6(_0x508f44, _0x3fef8f) {
    return _0x2ad584.getAttribLocation(_0x2375dd.programs[_0x508f44], _0xdfb7b2(_0x3fef8f));
  }
  function _0x1bf806(_0x30a440, _0x9aa559, _0xff935, _0x4cdb3c) {
    if (!_0x4cdb3c) {
      _0x2375dd.recordError(1281);
      return;
    }
    _0x2ad584.getBufferSubData(_0x30a440, _0x9aa559, _0xdf86cd, _0x4cdb3c, _0xff935);
  }
  function _0x397bdc() {
    var _0x543573 = _0x2ad584.getError() || _0x2375dd.lastError;
    _0x2375dd.lastError = 0;
    return _0x543573;
  }
  function _0x45b519(_0x14c9e7, _0x507772, _0x41dd0e, _0x435955) {
    var _0x5d520a = _0x2ad584.getFramebufferAttachmentParameter(_0x14c9e7, _0x507772, _0x41dd0e);
    if (_0x5d520a instanceof WebGLRenderbuffer || _0x5d520a instanceof WebGLTexture) {
      _0x5d520a = _0x5d520a.name | 0;
    }
    _0x38db74[_0x435955 >> 2] = _0x5d520a;
  }
  function _0x3ed880(_0x25ecd9, _0x268420) {
    _0x2f2db0[_0x25ecd9 >> 2] = _0x268420;
    _0x2f2db0[_0x25ecd9 + 4 >> 2] = (_0x268420 - _0x2f2db0[_0x25ecd9 >> 2]) / 4294967296;
  }
  function _0x35e7ee(_0xbc0433, _0x678139, _0x59c03e, _0x4f406a) {
    if (!_0x59c03e) {
      _0x2375dd.recordError(1281);
      return;
    }
    var _0x800826 = _0x2ad584.getIndexedParameter(_0xbc0433, _0x678139);
    var _0x52ea9f;
    switch (typeof _0x800826) {
      case "boolean":
        _0x52ea9f = _0x800826 ? 1 : 0;
        break;
      case "number":
        _0x52ea9f = _0x800826;
        break;
      case "object":
        if (_0x800826 === null) {
          switch (_0xbc0433) {
            case 35983:
            case 35368:
              _0x52ea9f = 0;
              break;
            default:
              {
                _0x2375dd.recordError(1280);
                return;
              }
          }
        } else if (_0x800826 instanceof WebGLBuffer) {
          _0x52ea9f = _0x800826.name | 0;
        } else {
          _0x2375dd.recordError(1280);
          return;
        }
        break;
      default:
        _0x2375dd.recordError(1280);
        return;
    }
    switch (_0x4f406a) {
      case 1:
        _0x3ed880(_0x59c03e, _0x52ea9f);
        break;
      case 0:
        _0x38db74[_0x59c03e >> 2] = _0x52ea9f;
        break;
      case 2:
        _0x2b9907[_0x59c03e >> 2] = _0x52ea9f;
        break;
      case 4:
        _0x3b8c2f[_0x59c03e >> 0] = _0x52ea9f ? 1 : 0;
        break;
      default:
        throw "internal emscriptenWebGLGetIndexed() error, bad type: " + _0x4f406a;
    }
  }
  function _0x5ddb2f(_0x5cc0d8, _0x148d58, _0x5383c1) {
    _0x35e7ee(_0x5cc0d8, _0x148d58, _0x5383c1, 0);
  }
  function _0x5690d1(_0x2640dd, _0x2b5365, _0x5c4353) {
    if (!_0x2b5365) {
      _0x2375dd.recordError(1281);
      return;
    }
    var _0x57bef0 = undefined;
    switch (_0x2640dd) {
      case 36346:
        _0x57bef0 = 1;
        break;
      case 36344:
        if (_0x5c4353 != 0 && _0x5c4353 != 1) {
          _0x2375dd.recordError(1280);
        }
        return;
      case 34814:
      case 36345:
        _0x57bef0 = 0;
        break;
      case 34466:
        var _0x16a90e = _0x2ad584.getParameter(34467);
        _0x57bef0 = _0x16a90e ? _0x16a90e.length : 0;
        break;
      case 33390:
        _0x57bef0 = 1048576;
        break;
      case 33309:
        if (_0x2375dd.currentContext.version < 2) {
          _0x2375dd.recordError(1282);
          return;
        }
        var _0x3be389 = _0x2ad584.getSupportedExtensions() || [];
        _0x57bef0 = _0x3be389.length * 2;
        break;
      case 33307:
      case 33308:
        if (_0x2375dd.currentContext.version < 2) {
          _0x2375dd.recordError(1280);
          return;
        }
        _0x57bef0 = _0x2640dd == 33307 ? 3 : 0;
        break;
    }
    if (_0x57bef0 === undefined) {
      var _0xfb2c7 = _0x2ad584.getParameter(_0x2640dd);
      switch (typeof _0xfb2c7) {
        case "number":
          _0x57bef0 = _0xfb2c7;
          break;
        case "boolean":
          _0x57bef0 = _0xfb2c7 ? 1 : 0;
          break;
        case "string":
          _0x2375dd.recordError(1280);
          return;
        case "object":
          if (_0xfb2c7 === null) {
            switch (_0x2640dd) {
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
                  _0x57bef0 = 0;
                  break;
                }
              default:
                {
                  _0x2375dd.recordError(1280);
                  return;
                }
            }
          } else if (_0xfb2c7 instanceof Float32Array || _0xfb2c7 instanceof Uint32Array || _0xfb2c7 instanceof Int32Array || _0xfb2c7 instanceof Array) {
            for (var _0x41f2f0 = 0; _0x41f2f0 < _0xfb2c7.length; ++_0x41f2f0) {
              switch (_0x5c4353) {
                case 0:
                  _0x38db74[_0x2b5365 + _0x41f2f0 * 4 >> 2] = _0xfb2c7[_0x41f2f0];
                  break;
                case 2:
                  _0x2b9907[_0x2b5365 + _0x41f2f0 * 4 >> 2] = _0xfb2c7[_0x41f2f0];
                  break;
                case 4:
                  _0x3b8c2f[_0x2b5365 + _0x41f2f0 >> 0] = _0xfb2c7[_0x41f2f0] ? 1 : 0;
                  break;
              }
            }
            return;
          } else {
            try {
              _0x57bef0 = _0xfb2c7.name | 0;
            } catch (_0x42784c) {
              _0x2375dd.recordError(1280);
              _0x1af4bd("GL_INVALID_ENUM in glGet" + _0x5c4353 + "v: Unknown object returned from WebGL getParameter(" + _0x2640dd + ")! (error: " + _0x42784c + ")");
              return;
            }
          }
          break;
        default:
          _0x2375dd.recordError(1280);
          _0x1af4bd("GL_INVALID_ENUM in glGet" + _0x5c4353 + "v: Native code calling glGet" + _0x5c4353 + "v(" + _0x2640dd + ") and it returns " + _0xfb2c7 + " of type " + typeof _0xfb2c7 + "!");
          return;
      }
    }
    switch (_0x5c4353) {
      case 1:
        _0x3ed880(_0x2b5365, _0x57bef0);
        break;
      case 0:
        _0x38db74[_0x2b5365 >> 2] = _0x57bef0;
        break;
      case 2:
        _0x2b9907[_0x2b5365 >> 2] = _0x57bef0;
        break;
      case 4:
        _0x3b8c2f[_0x2b5365 >> 0] = _0x57bef0 ? 1 : 0;
        break;
    }
  }
  function _0x22bb36(_0x3d2ca0, _0x1dd2e0) {
    _0x5690d1(_0x3d2ca0, _0x1dd2e0, 0);
  }
  function _0x54fbd0(_0x5710e9, _0x19b443, _0x47d794, _0xb870f7, _0x4e06da) {
    if (_0xb870f7 < 0) {
      _0x2375dd.recordError(1281);
      return;
    }
    if (!_0x4e06da) {
      _0x2375dd.recordError(1281);
      return;
    }
    var _0x58a425 = _0x2ad584.getInternalformatParameter(_0x5710e9, _0x19b443, _0x47d794);
    if (_0x58a425 === null) {
      return;
    }
    for (var _0x52f16f = 0; _0x52f16f < _0x58a425.length && _0x52f16f < _0xb870f7; ++_0x52f16f) {
      _0x38db74[_0x4e06da + _0x52f16f * 4 >> 2] = _0x58a425[_0x52f16f];
    }
  }
  function _0x442acc(_0x45df2e, _0x4ec26d, _0x56e624, _0x54ad87, _0x1c94c9) {
    _0x2375dd.recordError(1282);
  }
  function _0x5e97e5(_0x439c87, _0x5f0399, _0x7a7558, _0x522f6d) {
    var _0x2edc7d = _0x2ad584.getProgramInfoLog(_0x2375dd.programs[_0x439c87]);
    if (_0x2edc7d === null) {
      _0x2edc7d = "(unknown error)";
    }
    var _0x201be8 = _0x5f0399 > 0 && _0x522f6d ? _0x517360(_0x2edc7d, _0x522f6d, _0x5f0399) : 0;
    if (_0x7a7558) {
      _0x38db74[_0x7a7558 >> 2] = _0x201be8;
    }
  }
  function _0x3dbaa2(_0x3e7de1, _0x6a1131, _0xf3eb31) {
    if (!_0xf3eb31) {
      _0x2375dd.recordError(1281);
      return;
    }
    if (_0x3e7de1 >= _0x2375dd.counter) {
      _0x2375dd.recordError(1281);
      return;
    }
    _0x3e7de1 = _0x2375dd.programs[_0x3e7de1];
    if (_0x6a1131 == 35716) {
      var _0x2cd823 = _0x2ad584.getProgramInfoLog(_0x3e7de1);
      if (_0x2cd823 === null) {
        _0x2cd823 = "(unknown error)";
      }
      _0x38db74[_0xf3eb31 >> 2] = _0x2cd823.length + 1;
    } else if (_0x6a1131 == 35719) {
      if (!_0x3e7de1.maxUniformLength) {
        for (var _0x2a26c8 = 0; _0x2a26c8 < _0x2ad584.getProgramParameter(_0x3e7de1, 35718); ++_0x2a26c8) {
          _0x3e7de1.maxUniformLength = Math.max(_0x3e7de1.maxUniformLength, _0x2ad584.getActiveUniform(_0x3e7de1, _0x2a26c8).name.length + 1);
        }
      }
      _0x38db74[_0xf3eb31 >> 2] = _0x3e7de1.maxUniformLength;
    } else if (_0x6a1131 == 35722) {
      if (!_0x3e7de1.maxAttributeLength) {
        for (var _0x2a26c8 = 0; _0x2a26c8 < _0x2ad584.getProgramParameter(_0x3e7de1, 35721); ++_0x2a26c8) {
          _0x3e7de1.maxAttributeLength = Math.max(_0x3e7de1.maxAttributeLength, _0x2ad584.getActiveAttrib(_0x3e7de1, _0x2a26c8).name.length + 1);
        }
      }
      _0x38db74[_0xf3eb31 >> 2] = _0x3e7de1.maxAttributeLength;
    } else if (_0x6a1131 == 35381) {
      if (!_0x3e7de1.maxUniformBlockNameLength) {
        for (var _0x2a26c8 = 0; _0x2a26c8 < _0x2ad584.getProgramParameter(_0x3e7de1, 35382); ++_0x2a26c8) {
          _0x3e7de1.maxUniformBlockNameLength = Math.max(_0x3e7de1.maxUniformBlockNameLength, _0x2ad584.getActiveUniformBlockName(_0x3e7de1, _0x2a26c8).length + 1);
        }
      }
      _0x38db74[_0xf3eb31 >> 2] = _0x3e7de1.maxUniformBlockNameLength;
    } else {
      _0x38db74[_0xf3eb31 >> 2] = _0x2ad584.getProgramParameter(_0x3e7de1, _0x6a1131);
    }
  }
  function _0x5485be(_0x30bf60, _0x32b476, _0x196be3) {
    if (!_0x196be3) {
      _0x2375dd.recordError(1281);
      return;
    }
    var _0x59327c = _0x2375dd.queries[_0x30bf60];
    var _0x26d072 = _0x2ad584.getQueryParameter(_0x59327c, _0x32b476);
    var _0x5aaad2;
    if (typeof _0x26d072 == "boolean") {
      _0x5aaad2 = _0x26d072 ? 1 : 0;
    } else {
      _0x5aaad2 = _0x26d072;
    }
    _0x38db74[_0x196be3 >> 2] = _0x5aaad2;
  }
  function _0x11ef85(_0x3008bf, _0x3f4441, _0x518d61) {
    if (!_0x518d61) {
      _0x2375dd.recordError(1281);
      return;
    }
    _0x38db74[_0x518d61 >> 2] = _0x2ad584.getQuery(_0x3008bf, _0x3f4441);
  }
  function _0x4c9928(_0x5f3e98, _0x486949, _0x3a16e6) {
    if (!_0x3a16e6) {
      _0x2375dd.recordError(1281);
      return;
    }
    _0x38db74[_0x3a16e6 >> 2] = _0x2ad584.getRenderbufferParameter(_0x5f3e98, _0x486949);
  }
  function _0x4cab24(_0x142e77, _0x576ec6, _0x15e0bd, _0x24b009) {
    var _0x124809 = _0x2ad584.getShaderInfoLog(_0x2375dd.shaders[_0x142e77]);
    if (_0x124809 === null) {
      _0x124809 = "(unknown error)";
    }
    var _0x263c69 = _0x576ec6 > 0 && _0x24b009 ? _0x517360(_0x124809, _0x24b009, _0x576ec6) : 0;
    if (_0x15e0bd) {
      _0x38db74[_0x15e0bd >> 2] = _0x263c69;
    }
  }
  function _0x349f4f(_0x4f7ab1, _0x25ccdc, _0x10b2c9, _0x3b3e0b) {
    var _0x738ef2 = _0x2ad584.getShaderPrecisionFormat(_0x4f7ab1, _0x25ccdc);
    _0x38db74[_0x10b2c9 >> 2] = _0x738ef2.rangeMin;
    _0x38db74[_0x10b2c9 + 4 >> 2] = _0x738ef2.rangeMax;
    _0x38db74[_0x3b3e0b >> 2] = _0x738ef2.precision;
  }
  function _0x1be73b(_0x15c43c, _0x58e0f8, _0x22eaf7, _0x5a58e9) {
    var _0x554580 = _0x2ad584.getShaderSource(_0x2375dd.shaders[_0x15c43c]);
    if (!_0x554580) {
      return;
    }
    var _0x43b76c = _0x58e0f8 > 0 && _0x5a58e9 ? _0x517360(_0x554580, _0x5a58e9, _0x58e0f8) : 0;
    if (_0x22eaf7) {
      _0x38db74[_0x22eaf7 >> 2] = _0x43b76c;
    }
  }
  function _0x4da15f(_0x3ad074, _0x6786f8, _0x33c0a0) {
    if (!_0x33c0a0) {
      _0x2375dd.recordError(1281);
      return;
    }
    if (_0x6786f8 == 35716) {
      var _0x2759c0 = _0x2ad584.getShaderInfoLog(_0x2375dd.shaders[_0x3ad074]);
      if (_0x2759c0 === null) {
        _0x2759c0 = "(unknown error)";
      }
      var _0x1b9e5a = _0x2759c0 ? _0x2759c0.length + 1 : 0;
      _0x38db74[_0x33c0a0 >> 2] = _0x1b9e5a;
    } else if (_0x6786f8 == 35720) {
      var _0x33a257 = _0x2ad584.getShaderSource(_0x2375dd.shaders[_0x3ad074]);
      var _0x5c6f77 = _0x33a257 ? _0x33a257.length + 1 : 0;
      _0x38db74[_0x33c0a0 >> 2] = _0x5c6f77;
    } else {
      _0x38db74[_0x33c0a0 >> 2] = _0x2ad584.getShaderParameter(_0x2375dd.shaders[_0x3ad074], _0x6786f8);
    }
  }
  function _0x4856cd(_0x27b9fc) {
    var _0x26accc = _0x2375dd.stringCache[_0x27b9fc];
    if (!_0x26accc) {
      switch (_0x27b9fc) {
        case 7939:
          var _0x39eeee = _0x2ad584.getSupportedExtensions() || [];
          _0x39eeee = _0x39eeee.concat(_0x39eeee.map(function (_0x1fd7df) {
            return "GL_" + _0x1fd7df;
          }));
          _0x26accc = _0x568514(_0x39eeee.join(" "));
          break;
        case 7936:
        case 7937:
        case 37445:
        case 37446:
          var _0x2f240a = _0x2ad584.getParameter(_0x27b9fc);
          if (!_0x2f240a) {
            _0x2375dd.recordError(1280);
          }
          _0x26accc = _0x2f240a && _0x568514(_0x2f240a);
          break;
        case 7938:
          var _0x38a1c8 = _0x2ad584.getParameter(7938);
          if (_0x2375dd.currentContext.version >= 2) {
            _0x38a1c8 = "OpenGL ES 3.0 (" + _0x38a1c8 + ")";
          } else {
            _0x38a1c8 = "OpenGL ES 2.0 (" + _0x38a1c8 + ")";
          }
          _0x26accc = _0x568514(_0x38a1c8);
          break;
        case 35724:
          var _0x100e4e = _0x2ad584.getParameter(35724);
          var _0x49c569 = /^WebGL GLSL ES ([0-9]\.[0-9][0-9]?)(?:$| .*)/;
          var _0xc240b2 = _0x100e4e.match(_0x49c569);
          if (_0xc240b2 !== null) {
            if (_0xc240b2[1].length == 3) {
              _0xc240b2[1] = _0xc240b2[1] + "0";
            }
            _0x100e4e = "OpenGL ES GLSL ES " + _0xc240b2[1] + " (" + _0x100e4e + ")";
          }
          _0x26accc = _0x568514(_0x100e4e);
          break;
        default:
          _0x2375dd.recordError(1280);
      }
      _0x2375dd.stringCache[_0x27b9fc] = _0x26accc;
    }
    return _0x26accc;
  }
  function _0x2b04f0(_0x511421, _0x1c6787) {
    if (_0x2375dd.currentContext.version < 2) {
      _0x2375dd.recordError(1282);
      return 0;
    }
    var _0x18acd7 = _0x2375dd.stringiCache[_0x511421];
    if (_0x18acd7) {
      if (_0x1c6787 < 0 || _0x1c6787 >= _0x18acd7.length) {
        _0x2375dd.recordError(1281);
        return 0;
      }
      return _0x18acd7[_0x1c6787];
    }
    switch (_0x511421) {
      case 7939:
        var _0xac9bb7 = _0x2ad584.getSupportedExtensions() || [];
        _0xac9bb7 = _0xac9bb7.concat(_0xac9bb7.map(function (_0x356c94) {
          return "GL_" + _0x356c94;
        }));
        _0xac9bb7 = _0xac9bb7.map(function (_0x5a740a) {
          return _0x568514(_0x5a740a);
        });
        _0x18acd7 = _0x2375dd.stringiCache[_0x511421] = _0xac9bb7;
        if (_0x1c6787 < 0 || _0x1c6787 >= _0x18acd7.length) {
          _0x2375dd.recordError(1281);
          return 0;
        }
        return _0x18acd7[_0x1c6787];
      default:
        _0x2375dd.recordError(1280);
        return 0;
    }
  }
  function _0x3215ac(_0x2f53a7, _0x240d14, _0xa5b39b) {
    if (!_0xa5b39b) {
      _0x2375dd.recordError(1281);
      return;
    }
    _0x38db74[_0xa5b39b >> 2] = _0x2ad584.getTexParameter(_0x2f53a7, _0x240d14);
  }
  function _0x155f69(_0x5e4822, _0x3b9be8) {
    return _0x2ad584.getUniformBlockIndex(_0x2375dd.programs[_0x5e4822], _0xdfb7b2(_0x3b9be8));
  }
  function _0x964389(_0x4cae3c, _0x13319d, _0x1f756f, _0x20f0cd) {
    if (!_0x20f0cd) {
      _0x2375dd.recordError(1281);
      return;
    }
    if (_0x13319d > 0 && (_0x1f756f == 0 || _0x20f0cd == 0)) {
      _0x2375dd.recordError(1281);
      return;
    }
    _0x4cae3c = _0x2375dd.programs[_0x4cae3c];
    var _0x3c9644 = [];
    for (var _0x3206ee = 0; _0x3206ee < _0x13319d; _0x3206ee++) {
      _0x3c9644.push(_0xdfb7b2(_0x38db74[_0x1f756f + _0x3206ee * 4 >> 2]));
    }
    var _0x34744c = _0x2ad584.getUniformIndices(_0x4cae3c, _0x3c9644);
    if (!_0x34744c) {
      return;
    }
    var _0x50afcd = _0x34744c.length;
    for (var _0x3206ee = 0; _0x3206ee < _0x50afcd; _0x3206ee++) {
      _0x38db74[_0x20f0cd + _0x3206ee * 4 >> 2] = _0x34744c[_0x3206ee];
    }
  }
  function _0x115dfd(_0x7a5efe, _0x16c7f7) {
    function _0x5cf0d9(_0x3c1eb4) {
      return _0x3c1eb4.slice(-1) == "]" && _0x3c1eb4.lastIndexOf("[");
    }
    _0x16c7f7 = _0xdfb7b2(_0x16c7f7);
    if (_0x7a5efe = _0x2375dd.programs[_0x7a5efe]) {
      var _0x498ab6 = _0x7a5efe.uniformLocsById;
      var _0x9c463d = _0x7a5efe.uniformSizeAndIdsByName;
      var _0x7334a0;
      var _0x1cceba;
      var _0x2fb720 = 0;
      var _0x10bfeb = _0x16c7f7;
      var _0x458f45 = _0x5cf0d9(_0x16c7f7);
      if (!_0x498ab6) {
        _0x7a5efe.uniformLocsById = _0x498ab6 = {};
        _0x7a5efe.uniformArrayNamesById = {};
        for (_0x7334a0 = 0; _0x7334a0 < _0x2ad584.getProgramParameter(_0x7a5efe, 35718); ++_0x7334a0) {
          var _0x102a6c = _0x2ad584.getActiveUniform(_0x7a5efe, _0x7334a0);
          var _0x326db3 = _0x102a6c.name;
          var _0x49e2ed = _0x102a6c.size;
          var _0x44e14d = _0x5cf0d9(_0x326db3);
          var _0x4726b1 = _0x44e14d > 0 ? _0x326db3.slice(0, _0x44e14d) : _0x326db3;
          var _0x1b322d = _0x9c463d[_0x4726b1] ? _0x9c463d[_0x4726b1][1] : _0x7a5efe.uniformIdCounter;
          _0x7a5efe.uniformIdCounter = Math.max(_0x1b322d + _0x49e2ed, _0x7a5efe.uniformIdCounter);
          _0x9c463d[_0x4726b1] = [_0x49e2ed, _0x1b322d];
          for (_0x1cceba = 0; _0x1cceba < _0x49e2ed; ++_0x1cceba) {
            _0x498ab6[_0x1b322d] = _0x1cceba;
            _0x7a5efe.uniformArrayNamesById[_0x1b322d++] = _0x4726b1;
          }
        }
      }
      if (_0x458f45 > 0) {
        _0x2fb720 = _0x21a265(_0x16c7f7.slice(_0x458f45 + 1)) >>> 0;
        _0x10bfeb = _0x16c7f7.slice(0, _0x458f45);
      }
      var _0x33c0f5 = _0x9c463d[_0x10bfeb];
      if (_0x33c0f5 && _0x2fb720 < _0x33c0f5[0]) {
        _0x2fb720 += _0x33c0f5[1];
        if (_0x498ab6[_0x2fb720] = _0x498ab6[_0x2fb720] || _0x2ad584.getUniformLocation(_0x7a5efe, _0x16c7f7)) {
          return _0x2fb720;
        }
      }
    } else {
      _0x2375dd.recordError(1281);
    }
    return -1;
  }
  function _0x170093(_0x5b10cf) {
    var _0x22b249 = _0x2ad584.currentProgram;
    if (_0x22b249) {
      var _0x493397 = _0x22b249.uniformLocsById[_0x5b10cf];
      if (typeof _0x493397 === "number") {
        _0x22b249.uniformLocsById[_0x5b10cf] = _0x493397 = _0x2ad584.getUniformLocation(_0x22b249, _0x22b249.uniformArrayNamesById[_0x5b10cf] + (_0x493397 > 0 ? "[" + _0x493397 + "]" : ""));
      }
      return _0x493397;
    } else {
      _0x2375dd.recordError(1282);
    }
  }
  function _0x37e639(_0x4fce66, _0x4a6469, _0x501f26, _0x287821) {
    if (!_0x501f26) {
      _0x2375dd.recordError(1281);
      return;
    }
    _0x4fce66 = _0x2375dd.programs[_0x4fce66];
    var _0x267557 = _0x2ad584.getUniform(_0x4fce66, _0x170093(_0x4a6469));
    if (typeof _0x267557 == "number" || typeof _0x267557 == "boolean") {
      switch (_0x287821) {
        case 0:
          _0x38db74[_0x501f26 >> 2] = _0x267557;
          break;
        case 2:
          _0x2b9907[_0x501f26 >> 2] = _0x267557;
          break;
      }
    } else {
      for (var _0x4b7559 = 0; _0x4b7559 < _0x267557.length; _0x4b7559++) {
        switch (_0x287821) {
          case 0:
            _0x38db74[_0x501f26 + _0x4b7559 * 4 >> 2] = _0x267557[_0x4b7559];
            break;
          case 2:
            _0x2b9907[_0x501f26 + _0x4b7559 * 4 >> 2] = _0x267557[_0x4b7559];
            break;
        }
      }
    }
  }
  function _0x53ae1c(_0x20a7e8, _0x3ebcab, _0x159327) {
    _0x37e639(_0x20a7e8, _0x3ebcab, _0x159327, 0);
  }
  function _0x496677(_0xa39034, _0x3077c1, _0x5df3ef, _0x31c954) {
    if (!_0x5df3ef) {
      _0x2375dd.recordError(1281);
      return;
    }
    if (_0x2375dd.currentContext.clientBuffers[_0xa39034].enabled) {
      _0x1af4bd("glGetVertexAttrib*v on client-side array: not supported, bad data returned");
    }
    var _0x55720f = _0x2ad584.getVertexAttrib(_0xa39034, _0x3077c1);
    if (_0x3077c1 == 34975) {
      _0x38db74[_0x5df3ef >> 2] = _0x55720f && _0x55720f.name;
    } else if (typeof _0x55720f == "number" || typeof _0x55720f == "boolean") {
      switch (_0x31c954) {
        case 0:
          _0x38db74[_0x5df3ef >> 2] = _0x55720f;
          break;
        case 2:
          _0x2b9907[_0x5df3ef >> 2] = _0x55720f;
          break;
        case 5:
          _0x38db74[_0x5df3ef >> 2] = Math.fround(_0x55720f);
          break;
      }
    } else {
      for (var _0x3c4951 = 0; _0x3c4951 < _0x55720f.length; _0x3c4951++) {
        switch (_0x31c954) {
          case 0:
            _0x38db74[_0x5df3ef + _0x3c4951 * 4 >> 2] = _0x55720f[_0x3c4951];
            break;
          case 2:
            _0x2b9907[_0x5df3ef + _0x3c4951 * 4 >> 2] = _0x55720f[_0x3c4951];
            break;
          case 5:
            _0x38db74[_0x5df3ef + _0x3c4951 * 4 >> 2] = Math.fround(_0x55720f[_0x3c4951]);
            break;
        }
      }
    }
  }
  function _0x528dba(_0x2d69c6, _0x13b341, _0x3567fb) {
    _0x496677(_0x2d69c6, _0x13b341, _0x3567fb, 5);
  }
  function _0x21b684(_0x44038d, _0x11ca31, _0x274b69) {
    var _0xd4182e = _0x4f2d92[_0x11ca31];
    for (var _0x5e6697 = 0; _0x5e6697 < _0x11ca31; _0x5e6697++) {
      _0xd4182e[_0x5e6697] = _0x38db74[_0x274b69 + _0x5e6697 * 4 >> 2];
    }
    _0x2ad584.invalidateFramebuffer(_0x44038d, _0xd4182e);
  }
  function _0x5b72d0(_0x501f2c) {
    return _0x2ad584.isEnabled(_0x501f2c);
  }
  function _0x434bda(_0x1249e7) {
    var _0x3bca97 = _0x2375dd.vaos[_0x1249e7];
    if (!_0x3bca97) {
      return 0;
    }
    return _0x2ad584.isVertexArray(_0x3bca97);
  }
  function _0x567905(_0x1d7808) {
    _0x1d7808 = _0x2375dd.programs[_0x1d7808];
    _0x2ad584.linkProgram(_0x1d7808);
    _0x1d7808.uniformLocsById = 0;
    _0x1d7808.uniformSizeAndIdsByName = {};
    [_0x1d7808.vs, _0x1d7808.fs].forEach(function (_0x3855ce) {
      Object.keys(_0x3855ce.explicitUniformLocations).forEach(function (_0x94d1ea) {
        var _0x3c17d1 = _0x3855ce.explicitUniformLocations[_0x94d1ea];
        _0x1d7808.uniformSizeAndIdsByName[_0x94d1ea] = [1, _0x3c17d1];
        _0x1d7808.uniformIdCounter = Math.max(_0x1d7808.uniformIdCounter, _0x3c17d1 + 1);
      });
    });
    function _0x21bd07(_0x444b1f, _0x43d6ad) {
      Object.keys(_0x43d6ad).forEach(function (_0x4c76fd) {
        _0x444b1f[_0x4c76fd] = _0x43d6ad[_0x4c76fd];
      });
    }
    _0x1d7808.explicitUniformBindings = {};
    _0x1d7808.explicitSamplerBindings = {};
    [_0x1d7808.vs, _0x1d7808.fs].forEach(function (_0x2ae6d2) {
      _0x21bd07(_0x1d7808.explicitUniformBindings, _0x2ae6d2.explicitUniformBindings);
      _0x21bd07(_0x1d7808.explicitSamplerBindings, _0x2ae6d2.explicitSamplerBindings);
    });
    _0x1d7808.explicitProgramBindingsApplied = 0;
  }
  function _0x57f89b(_0x31d376, _0x260632, _0x17de19, _0x397349) {
    if (_0x397349 != 26 && _0x397349 != 10) {
      _0x1af4bd("glMapBufferRange is only supported when access is MAP_WRITE|INVALIDATE_BUFFER");
      return 0;
    }
    if (!_0x3ce037(_0x31d376)) {
      _0x2375dd.recordError(1280);
      _0x1af4bd("GL_INVALID_ENUM in glMapBufferRange");
      return 0;
    }
    var _0x72beab = _0x434dac(_0x17de19);
    if (!_0x72beab) {
      return 0;
    }
    _0x2375dd.mappedBuffers[_0x522415(_0x31d376)] = {
      offset: _0x260632,
      length: _0x17de19,
      mem: _0x72beab,
      access: _0x397349
    };
    return _0x72beab;
  }
  function _0x33132f(_0x2a8b47, _0x275068) {
    if (_0x2a8b47 == 3317) {
      _0x2375dd.unpackAlignment = _0x275068;
    }
    _0x2ad584.pixelStorei(_0x2a8b47, _0x275068);
  }
  function _0x33f0e0(_0xbd7d3a, _0x5139ae) {
    _0x2ad584.polygonOffset(_0xbd7d3a, _0x5139ae);
  }
  function _0x2646f6(_0x769a7b, _0x220203, _0x2d8308, _0x1d05dc) {
    _0x2375dd.recordError(1280);
  }
  function _0x3e6ea5(_0x3adf34, _0x53d7b7, _0xc67746) {
    _0x2375dd.recordError(1280);
  }
  function _0xfef323(_0x5d6c98) {
    _0x2ad584.readBuffer(_0x5d6c98);
  }
  function _0x8caee2(_0x89a4b1, _0x2d9b4a, _0x111c97, _0x1a0776) {
    function _0xb9a9f2(_0x5ae7ec, _0x7b6c88) {
      return _0x5ae7ec + _0x7b6c88 - 1 & -_0x7b6c88;
    }
    var _0x19a313 = _0x89a4b1 * _0x111c97;
    var _0x378415 = _0xb9a9f2(_0x19a313, _0x1a0776);
    return _0x2d9b4a * _0x378415;
  }
  function _0x4fd886(_0x1056f8) {
    var _0x418635 = {
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
    return _0x418635[_0x1056f8 - 6402] || 1;
  }
  function _0x1f3be5(_0x383b43) {
    _0x383b43 -= 5120;
    if (_0x383b43 == 0) {
      return _0x3b8c2f;
    }
    if (_0x383b43 == 1) {
      return _0xdf86cd;
    }
    if (_0x383b43 == 2) {
      return _0x1465be;
    }
    if (_0x383b43 == 4) {
      return _0x38db74;
    }
    if (_0x383b43 == 6) {
      return _0x2b9907;
    }
    if (_0x383b43 == 5 || _0x383b43 == 28922 || _0x383b43 == 28520 || _0x383b43 == 30779 || _0x383b43 == 30782) {
      return _0x2f2db0;
    }
    return _0x97ba21;
  }
  function _0x2a0ce7(_0x36b3ee) {
    return 31 - Math.clz32(_0x36b3ee.BYTES_PER_ELEMENT);
  }
  function _0x413cb3(_0x379563, _0x3d31a3, _0x2008f8, _0x568443, _0x55f4f4, _0x565cde) {
    var _0x7880a7 = _0x1f3be5(_0x379563);
    var _0x387b05 = _0x2a0ce7(_0x7880a7);
    var _0x5a0e75 = 1 << _0x387b05;
    var _0x39f6f8 = _0x4fd886(_0x3d31a3) * _0x5a0e75;
    var _0x1a1013 = _0x8caee2(_0x2008f8, _0x568443, _0x39f6f8, _0x2375dd.unpackAlignment);
    return _0x7880a7.subarray(_0x55f4f4 >> _0x387b05, _0x55f4f4 + _0x1a1013 >> _0x387b05);
  }
  function _0x38cf06(_0x4984b5, _0x140609, _0x367573, _0x3748d8, _0x3aa8d9, _0x525dbb, _0x5ce1c7) {
    if (_0x2375dd.currentContext.version >= 2) {
      if (_0x2ad584.currentPixelPackBufferBinding) {
        _0x2ad584.readPixels(_0x4984b5, _0x140609, _0x367573, _0x3748d8, _0x3aa8d9, _0x525dbb, _0x5ce1c7);
      } else {
        var _0xada604 = _0x1f3be5(_0x525dbb);
        _0x2ad584.readPixels(_0x4984b5, _0x140609, _0x367573, _0x3748d8, _0x3aa8d9, _0x525dbb, _0xada604, _0x5ce1c7 >> _0x2a0ce7(_0xada604));
      }
      return;
    }
    var _0x4375af = _0x413cb3(_0x525dbb, _0x3aa8d9, _0x367573, _0x3748d8, _0x5ce1c7, _0x3aa8d9);
    if (!_0x4375af) {
      _0x2375dd.recordError(1280);
      return;
    }
    _0x2ad584.readPixels(_0x4984b5, _0x140609, _0x367573, _0x3748d8, _0x3aa8d9, _0x525dbb, _0x4375af);
  }
  function _0x4fb10c(_0x27a4f6, _0x571fc0, _0xf3344, _0x1e4c4b) {
    _0x2ad584.renderbufferStorage(_0x27a4f6, _0x571fc0, _0xf3344, _0x1e4c4b);
  }
  function _0x222db3(_0x537ae9, _0x295770, _0x5e8dc7, _0x568a9e, _0x348602) {
    _0x2ad584.renderbufferStorageMultisample(_0x537ae9, _0x295770, _0x5e8dc7, _0x568a9e, _0x348602);
  }
  function _0x3c421c(_0x398b37, _0x3728b1, _0x441f2a) {
    _0x2ad584.samplerParameteri(_0x2375dd.samplers[_0x398b37], _0x3728b1, _0x441f2a);
  }
  function _0x583eb5(_0x13fd8d, _0x4eb74f, _0x48463f, _0x307bc4) {
    _0x2ad584.scissor(_0x13fd8d, _0x4eb74f, _0x48463f, _0x307bc4);
  }
  function _0x150600(_0x43664c, _0x33dc13, _0x49e80b = "(", _0x1ff5f4 = ")") {
    var _0x49affd = 0;
    for (; _0x33dc13 < _0x43664c.length; ++_0x33dc13) {
      if (_0x43664c[_0x33dc13] == _0x49e80b) {
        ++_0x49affd;
      }
      if (_0x43664c[_0x33dc13] == _0x1ff5f4 && --_0x49affd == 0) {
        return _0x33dc13;
      }
    }
  }
  function _0x485427(_0x1ae93e) {
    var _0x49373d = 0;
    var _0x268087 = _0x1ae93e.length;
    var _0x1ee72c = "";
    var _0x36760c = [1];
    var _0x561891 = {
      defined: function (_0x5a2e57) {
        if (_0x561891[_0x5a2e57[0]]) {
          return 1;
        } else {
          return 0;
        }
      },
      GL_FRAGMENT_PRECISION_HIGH: function () {
        return 1;
      }
    };
    function _0x5ba994(_0x401945, _0x28ebef) {
      return !(_0x401945.charCodeAt(_0x28ebef) > 32);
    }
    function _0x3b0a5d(_0x572301, _0x351a49) {
      while (!_0x5ba994(_0x572301, _0x351a49)) {
        ++_0x351a49;
      }
      return _0x351a49;
    }
    function _0x51c8aa(_0x39920f, _0x3a8306) {
      var _0xebabe5 = _0x39920f.charCodeAt(_0x3a8306);
      if (_0xebabe5 > 32) {
        if (_0xebabe5 < 48) {
          return 1;
        }
        if (_0xebabe5 < 58) {
          return 2;
        }
        if (_0xebabe5 < 65) {
          return 1;
        }
        if (_0xebabe5 < 91 || _0xebabe5 == 95) {
          return 3;
        }
        if (_0xebabe5 < 97) {
          return 1;
        }
        if (_0xebabe5 < 123) {
          return 3;
        }
        return 1;
      }
      if (_0xebabe5 < 33) {
        return 0;
      } else {
        return 4;
      }
    }
    function _0x498280(_0x87030a, _0x380645) {
      var _0x6d99af = [];
      var _0xde5442 = _0x87030a.length;
      for (var _0x50dc09 = 0; _0x50dc09 <= _0xde5442; ++_0x50dc09) {
        var _0x269a6d = _0x51c8aa(_0x87030a, _0x50dc09);
        if (_0x269a6d == 2 || _0x269a6d == 3) {
          for (var _0xc7565d = _0x50dc09 + 1; _0xc7565d <= _0xde5442; ++_0xc7565d) {
            var _0x298968 = _0x51c8aa(_0x87030a, _0xc7565d);
            if (_0x298968 != _0x269a6d && (_0x298968 != 2 || _0x269a6d != 3)) {
              _0x6d99af.push(_0x87030a.substring(_0x50dc09, _0xc7565d));
              _0x50dc09 = _0xc7565d - 1;
              break;
            }
          }
        } else if (_0x269a6d == 1) {
          var _0x4c44fe = _0x87030a.substr(_0x50dc09, 2);
          if (["<=", ">=", "==", "!=", "&&", "||"].includes(_0x4c44fe)) {
            _0x6d99af.push(_0x4c44fe);
            ++_0x50dc09;
          } else {
            _0x6d99af.push(_0x87030a[_0x50dc09]);
          }
        }
      }
      return _0x6d99af;
    }
    function _0x2865a0(_0x1704c1, _0x1edcfd, _0x21e8d2 = _0x1704c1.length) {
      var _0x460027 = _0x1704c1.length;
      var _0x13b885 = "";
      for (var _0x2b612a = _0x1edcfd; _0x2b612a < _0x21e8d2; ++_0x2b612a) {
        var _0x1894d6 = _0x51c8aa(_0x1704c1, _0x2b612a);
        if (_0x1894d6 == 3) {
          for (var _0xdb46b7 = _0x2b612a + 1; _0xdb46b7 <= _0x21e8d2; ++_0xdb46b7) {
            var _0x3d6602 = _0x51c8aa(_0x1704c1, _0xdb46b7);
            if (_0x3d6602 != 2 && _0x3d6602 != 3) {
              var _0x337283 = _0x1704c1.substring(_0x2b612a, _0xdb46b7);
              var _0x56aa35 = _0x561891[_0x337283];
              if (_0x56aa35) {
                var _0xcf6b1 = _0x1704c1.substring(_0x1edcfd, _0x2b612a);
                if (_0x56aa35.length && _0x1704c1[_0xdb46b7] == "(") {
                  var _0x1b65e1 = _0x150600(_0x1704c1, _0xdb46b7);
                  _0xcf6b1 += _0x56aa35(_0x1704c1.substring(_0xdb46b7 + 1, _0x1b65e1).split(",")) + _0x1704c1.substring(_0x1b65e1 + 1, _0x21e8d2);
                } else {
                  _0xcf6b1 += _0x56aa35() + _0x1704c1.substring(_0xdb46b7, _0x21e8d2);
                }
                return _0x2865a0(_0xcf6b1, 0);
              } else {
                _0x13b885 += _0x337283;
                _0x2b612a = _0xdb46b7 - 1;
                break;
              }
            }
          }
        } else {
          _0x13b885 += _0x1704c1[_0x2b612a];
        }
      }
      return _0x13b885;
    }
    function _0xbf100b(_0xbc0cf0) {
      while (_0xbc0cf0.length > 1 || typeof _0xbc0cf0[0] != "function") {
        _0xbc0cf0 = function (_0x36691c) {
          var _0x1bac20;
          var _0xc44cfb;
          var _0x2c31e1;
          var _0x5672b7 = -2;
          for (_0xc44cfb = 0; _0xc44cfb < _0x36691c.length; ++_0xc44cfb) {
            if ((_0x2c31e1 = ["*", "/", "+", "-", "!", "<", "<=", ">", ">=", "==", "!=", "&&", "||", "("].indexOf(_0x36691c[_0xc44cfb])) > _0x5672b7) {
              _0x1bac20 = _0xc44cfb;
              _0x5672b7 = _0x2c31e1;
            }
          }
          if (_0x5672b7 == 13) {
            var _0xc44cfb = _0x150600(_0x36691c, _0x1bac20);
            if (_0xc44cfb) {
              _0x36691c.splice(_0x1bac20, _0xc44cfb + 1 - _0x1bac20, _0xbf100b(_0x36691c.slice(_0x1bac20 + 1, _0xc44cfb)));
              return _0x36691c;
            }
          }
          if (_0x5672b7 == 4) {
            _0x1bac20 = _0x36691c.lastIndexOf("!");
            var _0x49f877 = _0xbf100b(_0x36691c.slice(_0x1bac20 + 1, _0x1bac20 + 2));
            _0x36691c.splice(_0x1bac20, 2, function () {
              return !_0x49f877();
            });
            return _0x36691c;
          }
          if (_0x5672b7 >= 0) {
            var _0x3f1c0f = _0xbf100b(_0x36691c.slice(0, _0x1bac20));
            var _0x262c0e = _0xbf100b(_0x36691c.slice(_0x1bac20 + 1));
            switch (_0x36691c[_0x1bac20]) {
              case "&&":
                return [function () {
                  return _0x3f1c0f() && _0x262c0e();
                }];
              case "||":
                return [function () {
                  return _0x3f1c0f() || _0x262c0e();
                }];
              case "==":
                return [function () {
                  return _0x3f1c0f() == _0x262c0e();
                }];
              case "!=":
                return [function () {
                  return _0x3f1c0f() != _0x262c0e();
                }];
              case "<":
                return [function () {
                  return _0x3f1c0f() < _0x262c0e();
                }];
              case "<=":
                return [function () {
                  return _0x3f1c0f() <= _0x262c0e();
                }];
              case ">":
                return [function () {
                  return _0x3f1c0f() > _0x262c0e();
                }];
              case ">=":
                return [function () {
                  return _0x3f1c0f() >= _0x262c0e();
                }];
              case "+":
                return [function () {
                  return _0x3f1c0f() + _0x262c0e();
                }];
              case "-":
                return [function () {
                  return _0x3f1c0f() - _0x262c0e();
                }];
              case "*":
                return [function () {
                  return _0x3f1c0f() * _0x262c0e();
                }];
              case "/":
                return [function () {
                  return Math.floor(_0x3f1c0f() / _0x262c0e());
                }];
            }
          }
          var _0x540a50 = _0x21a265(_0x36691c[_0x1bac20]);
          return [function () {
            return _0x540a50;
          }];
        }(_0xbc0cf0);
      }
      return _0xbc0cf0[0];
    }
    for (; _0x49373d < _0x268087; ++_0x49373d) {
      var _0x1b3608 = _0x49373d;
      _0x49373d = _0x1ae93e.indexOf("\n", _0x49373d);
      if (_0x49373d < 0) {
        _0x49373d = _0x268087;
      }
      for (var _0x487e03 = _0x1b3608; _0x487e03 < _0x49373d && _0x5ba994(_0x1ae93e, _0x487e03); ++_0x487e03);
      var _0x36ab3b = _0x36760c[_0x36760c.length - 1];
      if (_0x1ae93e[_0x487e03] != "#") {
        if (_0x36ab3b) {
          _0x1ee72c += _0x2865a0(_0x1ae93e, _0x1b3608, _0x49373d) + "\n";
        }
        continue;
      }
      var _0x3ee88e = _0x3b0a5d(_0x1ae93e, _0x487e03);
      var _0x3f4d9f = _0x1ae93e.substring(_0x487e03 + 1, _0x3ee88e);
      var _0x4c20c2 = _0x1ae93e.substring(_0x3ee88e, _0x49373d).trim();
      switch (_0x3f4d9f) {
        case "if":
          var _0x3a6f53 = _0x498280(_0x2865a0(_0x4c20c2, 0));
          var _0x349786 = _0xbf100b(_0x3a6f53);
          var _0x5c705c = _0x349786();
          _0x36760c.push(!!_0x5c705c * _0x36760c[_0x36760c.length - 1]);
          break;
        case "ifdef":
          _0x36760c.push(!!_0x561891[_0x4c20c2] * _0x36760c[_0x36760c.length - 1]);
          break;
        case "ifndef":
          _0x36760c.push(!_0x561891[_0x4c20c2] * _0x36760c[_0x36760c.length - 1]);
          break;
        case "else":
          _0x36760c[_0x36760c.length - 1] = 1 - _0x36760c[_0x36760c.length - 1];
          break;
        case "endif":
          _0x36760c.pop();
          break;
        case "define":
          if (_0x36ab3b) {
            var _0x1f813e = _0x4c20c2.indexOf("(");
            var _0x22cb0f = _0x3b0a5d(_0x4c20c2, 0);
            if (_0x22cb0f < _0x1f813e) {
              _0x1f813e = 0;
            }
            if (_0x1f813e > 0) {
              var _0x1a7790 = _0x4c20c2.indexOf(")", _0x1f813e);
              let _0x52c56c = _0x4c20c2.substring(_0x1f813e + 1, _0x1a7790).split(",").map(_0xf3d6a1 => _0xf3d6a1.trim());
              let _0x5850b1 = _0x498280(_0x4c20c2.substring(_0x1a7790 + 1).trim());
              _0x561891[_0x4c20c2.substring(0, _0x1f813e)] = function (_0x4c541c) {
                var _0x2b9678 = "";
                _0x5850b1.forEach(_0x17409b => {
                  var _0x4723ab = _0x52c56c.indexOf(_0x17409b);
                  _0x2b9678 += _0x4723ab >= 0 ? _0x4c541c[_0x4723ab] : _0x17409b;
                });
                return _0x2b9678;
              };
            } else {
              let _0x28d86d = _0x2865a0(_0x4c20c2.substring(_0x22cb0f + 1).trim(), 0);
              _0x561891[_0x4c20c2.substring(0, _0x22cb0f)] = function () {
                return _0x28d86d;
              };
            }
          }
          break;
        case "undef":
          if (_0x36ab3b) {
            delete _0x561891[_0x4c20c2];
          }
          break;
        default:
          if (_0x3f4d9f != "version" && _0x3f4d9f != "pragma" && _0x3f4d9f != "extension") {}
          _0x1ee72c += _0x2865a0(_0x1ae93e, _0x1b3608, _0x49373d) + "\n";
      }
    }
    return _0x1ee72c;
  }
  function _0x55b519(_0x117bce) {
    var _0xcfbd4e = 0;
    var _0x52cf49 = "";
    var _0x137534;
    var _0x54594b;
    var _0x291c94 = _0x117bce.length;
    for (; _0xcfbd4e < _0x291c94; ++_0xcfbd4e) {
      _0x137534 = _0x117bce[_0xcfbd4e];
      if (_0x137534 == "/") {
        _0x54594b = _0x117bce[_0xcfbd4e + 1];
        if (_0x54594b == "/") {
          while (_0xcfbd4e < _0x291c94 && _0x117bce[_0xcfbd4e + 1] != "\n") {
            ++_0xcfbd4e;
          }
        } else if (_0x54594b == "*") {
          while (_0xcfbd4e < _0x291c94 && (_0x117bce[_0xcfbd4e - 1] != "*" || _0x117bce[_0xcfbd4e] != "/")) {
            ++_0xcfbd4e;
          }
        } else {
          _0x52cf49 += _0x137534;
        }
      } else {
        _0x52cf49 += _0x137534;
      }
    }
    return _0x52cf49;
  }
  function _0x3f1580(_0x2fc02f, _0x363ce8, _0x4ecca4, _0x2e4e1f) {
    var _0x879d95 = _0x2375dd.getSource(_0x2fc02f, _0x363ce8, _0x4ecca4, _0x2e4e1f);
    _0x879d95 = _0x485427(_0x55b519(_0x879d95));
    var _0x5e1711 = /layout\s*\(\s*location\s*=\s*(-?\d+)\s*\)\s*(uniform\s+((lowp|mediump|highp)\s+)?\w+\s+(\w+))/g;
    var _0x3141b2 = {};
    var _0x162e28;
    while (_0x162e28 = _0x5e1711.exec(_0x879d95)) {
      _0x3141b2[_0x162e28[5]] = _0x21a265(_0x162e28[1]);
      if (!(_0x3141b2[_0x162e28[5]] >= 0) || !(_0x3141b2[_0x162e28[5]] < 1048576)) {
        console.error("Specified an out of range layout(location=x) directive \"" + _0x3141b2[_0x162e28[5]] + "\"! (" + _0x162e28[0] + ")");
        _0x2375dd.recordError(1281);
        return;
      }
    }
    _0x879d95 = _0x879d95.replace(_0x5e1711, "$2");
    _0x2375dd.shaders[_0x2fc02f].explicitUniformLocations = _0x3141b2;
    var _0x2fff49 = /layout\s*\(.*?binding\s*=\s*(-?\d+).*?\)\s*uniform\s+(\w+)\s+(\w+)?/g;
    var _0x574f1c = {};
    var _0x12a08c = {};
    var _0x11e23f;
    while (_0x11e23f = _0x2fff49.exec(_0x879d95)) {
      var _0x2fef3f = 1;
      for (var _0x5ba1e8 = _0x11e23f.index; _0x5ba1e8 < _0x879d95.length && _0x879d95[_0x5ba1e8] != ";"; ++_0x5ba1e8) {
        if (_0x879d95[_0x5ba1e8] == "[") {
          _0x2fef3f = _0x21a265(_0x879d95.slice(_0x5ba1e8 + 1));
          break;
        }
        if (_0x879d95[_0x5ba1e8] == "{") {
          _0x5ba1e8 = _0x150600(_0x879d95, _0x5ba1e8, "{", "}") - 1;
        }
      }
      var _0x10ce47 = _0x21a265(_0x11e23f[1]);
      var _0x2b5324 = 34930;
      if (_0x11e23f[3] && _0x11e23f[2].indexOf("sampler") != -1) {
        _0x574f1c[_0x11e23f[3]] = [_0x10ce47, _0x2fef3f];
      } else {
        _0x2b5324 = 35374;
        _0x12a08c[_0x11e23f[2]] = [_0x10ce47, _0x2fef3f];
      }
      var _0x329a5c = _0x2ad584.getParameter(_0x2b5324);
      if (!(_0x10ce47 >= 0) || !(_0x10ce47 + _0x2fef3f <= _0x329a5c)) {
        console.error("Specified an out of range layout(binding=x) directive \"" + _0x10ce47 + "\"! (" + _0x11e23f[0] + "). Valid range is [0, " + _0x329a5c + "-1]");
        _0x2375dd.recordError(1281);
        return;
      }
    }
    _0x879d95 = _0x879d95.replace(/layout\s*\(.*?binding\s*=\s*([-\d]+).*?\)/g, "");
    _0x879d95 = _0x879d95.replace(/(layout\s*\((.*?)),\s*binding\s*=\s*([-\d]+)\)/g, "$1)");
    _0x879d95 = _0x879d95.replace(/layout\s*\(\s*binding\s*=\s*([-\d]+)\s*,(.*?)\)/g, "layout($2)");
    _0x2375dd.shaders[_0x2fc02f].explicitSamplerBindings = _0x574f1c;
    _0x2375dd.shaders[_0x2fc02f].explicitUniformBindings = _0x12a08c;
    _0x2ad584.shaderSource(_0x2375dd.shaders[_0x2fc02f], _0x879d95);
  }
  function _0x22b9df(_0x44a224, _0x251730, _0x525db0, _0x2ae1d2) {
    _0x2ad584.stencilFuncSeparate(_0x44a224, _0x251730, _0x525db0, _0x2ae1d2);
  }
  function _0x5a1bed(_0x3b3cf0) {
    _0x2ad584.stencilMask(_0x3b3cf0);
  }
  function _0x2248b7(_0xc28d45, _0x392e2d, _0x2e4262, _0x23a5bb) {
    _0x2ad584.stencilOpSeparate(_0xc28d45, _0x392e2d, _0x2e4262, _0x23a5bb);
  }
  function _0x568063(_0x5c4f75, _0x43ff14, _0x3c38e9, _0x58ce11, _0x33d211, _0x1e78ee, _0x162d05, _0x3cdf56, _0x425c27) {
    if (_0x2375dd.currentContext.version >= 2) {
      if (_0x2ad584.currentPixelUnpackBufferBinding) {
        _0x2ad584.texImage2D(_0x5c4f75, _0x43ff14, _0x3c38e9, _0x58ce11, _0x33d211, _0x1e78ee, _0x162d05, _0x3cdf56, _0x425c27);
      } else if (_0x425c27) {
        var _0x6c606a = _0x1f3be5(_0x3cdf56);
        _0x2ad584.texImage2D(_0x5c4f75, _0x43ff14, _0x3c38e9, _0x58ce11, _0x33d211, _0x1e78ee, _0x162d05, _0x3cdf56, _0x6c606a, _0x425c27 >> _0x2a0ce7(_0x6c606a));
      } else {
        _0x2ad584.texImage2D(_0x5c4f75, _0x43ff14, _0x3c38e9, _0x58ce11, _0x33d211, _0x1e78ee, _0x162d05, _0x3cdf56, null);
      }
      return;
    }
    _0x2ad584.texImage2D(_0x5c4f75, _0x43ff14, _0x3c38e9, _0x58ce11, _0x33d211, _0x1e78ee, _0x162d05, _0x3cdf56, _0x425c27 ? _0x413cb3(_0x3cdf56, _0x162d05, _0x58ce11, _0x33d211, _0x425c27, _0x3c38e9) : null);
  }
  function _0x221288(_0x58e19a, _0x412a41, _0x4df210, _0x52bf95, _0x5c4e77, _0x57b969, _0x411acc, _0x14eb8d, _0x3c3354, _0x298fe4) {
    if (_0x2ad584.currentPixelUnpackBufferBinding) {
      _0x2ad584.texImage3D(_0x58e19a, _0x412a41, _0x4df210, _0x52bf95, _0x5c4e77, _0x57b969, _0x411acc, _0x14eb8d, _0x3c3354, _0x298fe4);
    } else if (_0x298fe4) {
      var _0x2b1483 = _0x1f3be5(_0x3c3354);
      _0x2ad584.texImage3D(_0x58e19a, _0x412a41, _0x4df210, _0x52bf95, _0x5c4e77, _0x57b969, _0x411acc, _0x14eb8d, _0x3c3354, _0x2b1483, _0x298fe4 >> _0x2a0ce7(_0x2b1483));
    } else {
      _0x2ad584.texImage3D(_0x58e19a, _0x412a41, _0x4df210, _0x52bf95, _0x5c4e77, _0x57b969, _0x411acc, _0x14eb8d, _0x3c3354, null);
    }
  }
  function _0x182650(_0x4aa74a, _0x6b767f, _0x2017e2) {
    _0x2ad584.texParameterf(_0x4aa74a, _0x6b767f, _0x2017e2);
  }
  function _0x5a91f5(_0x42c154, _0x37735f, _0x42f9fd) {
    _0x2ad584.texParameteri(_0x42c154, _0x37735f, _0x42f9fd);
  }
  function _0x4c4f4a(_0x3e0271, _0x5a8a49, _0x3757b8) {
    var _0x206e84 = _0x38db74[_0x3757b8 >> 2];
    _0x2ad584.texParameteri(_0x3e0271, _0x5a8a49, _0x206e84);
  }
  function _0x49c79c(_0x49c97a, _0x3994d1, _0x30b5f8, _0x587f56, _0x1da5dc) {
    _0x2ad584.texStorage2D(_0x49c97a, _0x3994d1, _0x30b5f8, _0x587f56, _0x1da5dc);
  }
  function _0x40f292(_0x8822a8, _0x3cfb26, _0x238119, _0x3cf65c, _0x416fb7, _0x15fdb6) {
    _0x2ad584.texStorage3D(_0x8822a8, _0x3cfb26, _0x238119, _0x3cf65c, _0x416fb7, _0x15fdb6);
  }
  function _0x396458(_0x4aec67, _0x2cf45c, _0x3482c8, _0x5b4539, _0x409062, _0x3b9d1e, _0x553303, _0x5b8ed9, _0xa7f4fa) {
    if (_0x2375dd.currentContext.version >= 2) {
      if (_0x2ad584.currentPixelUnpackBufferBinding) {
        _0x2ad584.texSubImage2D(_0x4aec67, _0x2cf45c, _0x3482c8, _0x5b4539, _0x409062, _0x3b9d1e, _0x553303, _0x5b8ed9, _0xa7f4fa);
      } else if (_0xa7f4fa) {
        var _0x14130a = _0x1f3be5(_0x5b8ed9);
        _0x2ad584.texSubImage2D(_0x4aec67, _0x2cf45c, _0x3482c8, _0x5b4539, _0x409062, _0x3b9d1e, _0x553303, _0x5b8ed9, _0x14130a, _0xa7f4fa >> _0x2a0ce7(_0x14130a));
      } else {
        _0x2ad584.texSubImage2D(_0x4aec67, _0x2cf45c, _0x3482c8, _0x5b4539, _0x409062, _0x3b9d1e, _0x553303, _0x5b8ed9, null);
      }
      return;
    }
    var _0x42939f = null;
    if (_0xa7f4fa) {
      _0x42939f = _0x413cb3(_0x5b8ed9, _0x553303, _0x409062, _0x3b9d1e, _0xa7f4fa, 0);
    }
    _0x2ad584.texSubImage2D(_0x4aec67, _0x2cf45c, _0x3482c8, _0x5b4539, _0x409062, _0x3b9d1e, _0x553303, _0x5b8ed9, _0x42939f);
  }
  function _0x1f7acd(_0x2de735, _0x366016, _0x264d49, _0x29877a, _0x219886, _0x211ea0, _0x14b4aa, _0x30143e, _0x2ee066, _0x32c0e2, _0x2bfc81) {
    if (_0x2ad584.currentPixelUnpackBufferBinding) {
      _0x2ad584.texSubImage3D(_0x2de735, _0x366016, _0x264d49, _0x29877a, _0x219886, _0x211ea0, _0x14b4aa, _0x30143e, _0x2ee066, _0x32c0e2, _0x2bfc81);
    } else if (_0x2bfc81) {
      var _0x330766 = _0x1f3be5(_0x32c0e2);
      _0x2ad584.texSubImage3D(_0x2de735, _0x366016, _0x264d49, _0x29877a, _0x219886, _0x211ea0, _0x14b4aa, _0x30143e, _0x2ee066, _0x32c0e2, _0x330766, _0x2bfc81 >> _0x2a0ce7(_0x330766));
    } else {
      _0x2ad584.texSubImage3D(_0x2de735, _0x366016, _0x264d49, _0x29877a, _0x219886, _0x211ea0, _0x14b4aa, _0x30143e, _0x2ee066, _0x32c0e2, null);
    }
  }
  function _0x482049(_0x5a361e, _0x308972, _0x1d06f3, _0x378a95) {
    _0x5a361e = _0x2375dd.programs[_0x5a361e];
    var _0xcf50c6 = [];
    for (var _0x4889dd = 0; _0x4889dd < _0x308972; _0x4889dd++) {
      _0xcf50c6.push(_0xdfb7b2(_0x38db74[_0x1d06f3 + _0x4889dd * 4 >> 2]));
    }
    _0x2ad584.transformFeedbackVaryings(_0x5a361e, _0xcf50c6, _0x378a95);
  }
  var _0x5e909a = [];
  function _0x484f15(_0x46bb66, _0x3a2770, _0xc71da3) {
    if (_0x2375dd.currentContext.version >= 2) {
      _0x2ad584.uniform1fv(_0x170093(_0x46bb66), _0x2b9907, _0xc71da3 >> 2, _0x3a2770);
      return;
    }
    if (_0x3a2770 <= 288) {
      var _0x5360d6 = _0x5e909a[_0x3a2770 - 1];
      for (var _0x57dd91 = 0; _0x57dd91 < _0x3a2770; ++_0x57dd91) {
        _0x5360d6[_0x57dd91] = _0x2b9907[_0xc71da3 + _0x57dd91 * 4 >> 2];
      }
    } else {
      var _0x5360d6 = _0x2b9907.subarray(_0xc71da3 >> 2, _0xc71da3 + _0x3a2770 * 4 >> 2);
    }
    _0x2ad584.uniform1fv(_0x170093(_0x46bb66), _0x5360d6);
  }
  function _0x53ae52(_0x165688, _0x79b3f4) {
    _0x2ad584.uniform1i(_0x170093(_0x165688), _0x79b3f4);
  }
  var _0x119797 = [];
  function _0x4aa00e(_0x580906, _0x551442, _0x12bc28) {
    if (_0x2375dd.currentContext.version >= 2) {
      _0x2ad584.uniform1iv(_0x170093(_0x580906), _0x38db74, _0x12bc28 >> 2, _0x551442);
      return;
    }
    if (_0x551442 <= 288) {
      var _0x4e2f9b = _0x119797[_0x551442 - 1];
      for (var _0x3c9feb = 0; _0x3c9feb < _0x551442; ++_0x3c9feb) {
        _0x4e2f9b[_0x3c9feb] = _0x38db74[_0x12bc28 + _0x3c9feb * 4 >> 2];
      }
    } else {
      var _0x4e2f9b = _0x38db74.subarray(_0x12bc28 >> 2, _0x12bc28 + _0x551442 * 4 >> 2);
    }
    _0x2ad584.uniform1iv(_0x170093(_0x580906), _0x4e2f9b);
  }
  function _0x2bb865(_0x46dcc6, _0x356d31, _0x2909d5) {
    _0x2ad584.uniform1uiv(_0x170093(_0x46dcc6), _0x2f2db0, _0x2909d5 >> 2, _0x356d31);
  }
  function _0x5a64a4(_0x8ae390, _0x447149, _0x25d0ba) {
    if (_0x2375dd.currentContext.version >= 2) {
      _0x2ad584.uniform2fv(_0x170093(_0x8ae390), _0x2b9907, _0x25d0ba >> 2, _0x447149 * 2);
      return;
    }
    if (_0x447149 <= 144) {
      var _0x41f18c = _0x5e909a[_0x447149 * 2 - 1];
      for (var _0x22cde6 = 0; _0x22cde6 < _0x447149 * 2; _0x22cde6 += 2) {
        _0x41f18c[_0x22cde6] = _0x2b9907[_0x25d0ba + _0x22cde6 * 4 >> 2];
        _0x41f18c[_0x22cde6 + 1] = _0x2b9907[_0x25d0ba + (_0x22cde6 * 4 + 4) >> 2];
      }
    } else {
      var _0x41f18c = _0x2b9907.subarray(_0x25d0ba >> 2, _0x25d0ba + _0x447149 * 8 >> 2);
    }
    _0x2ad584.uniform2fv(_0x170093(_0x8ae390), _0x41f18c);
  }
  function _0x13702a(_0xfbe3b6, _0x43652b, _0x106b76) {
    if (_0x2375dd.currentContext.version >= 2) {
      _0x2ad584.uniform2iv(_0x170093(_0xfbe3b6), _0x38db74, _0x106b76 >> 2, _0x43652b * 2);
      return;
    }
    if (_0x43652b <= 144) {
      var _0xc67ff9 = _0x119797[_0x43652b * 2 - 1];
      for (var _0x30ade8 = 0; _0x30ade8 < _0x43652b * 2; _0x30ade8 += 2) {
        _0xc67ff9[_0x30ade8] = _0x38db74[_0x106b76 + _0x30ade8 * 4 >> 2];
        _0xc67ff9[_0x30ade8 + 1] = _0x38db74[_0x106b76 + (_0x30ade8 * 4 + 4) >> 2];
      }
    } else {
      var _0xc67ff9 = _0x38db74.subarray(_0x106b76 >> 2, _0x106b76 + _0x43652b * 8 >> 2);
    }
    _0x2ad584.uniform2iv(_0x170093(_0xfbe3b6), _0xc67ff9);
  }
  function _0x4faaa5(_0x5ccee4, _0x211a97, _0x197586) {
    _0x2ad584.uniform2uiv(_0x170093(_0x5ccee4), _0x2f2db0, _0x197586 >> 2, _0x211a97 * 2);
  }
  function _0x563466(_0x22e82b, _0x486798, _0x5de01a) {
    if (_0x2375dd.currentContext.version >= 2) {
      _0x2ad584.uniform3fv(_0x170093(_0x22e82b), _0x2b9907, _0x5de01a >> 2, _0x486798 * 3);
      return;
    }
    if (_0x486798 <= 96) {
      var _0x418eb6 = _0x5e909a[_0x486798 * 3 - 1];
      for (var _0x415f16 = 0; _0x415f16 < _0x486798 * 3; _0x415f16 += 3) {
        _0x418eb6[_0x415f16] = _0x2b9907[_0x5de01a + _0x415f16 * 4 >> 2];
        _0x418eb6[_0x415f16 + 1] = _0x2b9907[_0x5de01a + (_0x415f16 * 4 + 4) >> 2];
        _0x418eb6[_0x415f16 + 2] = _0x2b9907[_0x5de01a + (_0x415f16 * 4 + 8) >> 2];
      }
    } else {
      var _0x418eb6 = _0x2b9907.subarray(_0x5de01a >> 2, _0x5de01a + _0x486798 * 12 >> 2);
    }
    _0x2ad584.uniform3fv(_0x170093(_0x22e82b), _0x418eb6);
  }
  function _0x373c7d(_0x262f44, _0x3b222b, _0x53ee9c) {
    if (_0x2375dd.currentContext.version >= 2) {
      _0x2ad584.uniform3iv(_0x170093(_0x262f44), _0x38db74, _0x53ee9c >> 2, _0x3b222b * 3);
      return;
    }
    if (_0x3b222b <= 96) {
      var _0x293565 = _0x119797[_0x3b222b * 3 - 1];
      for (var _0x218b5a = 0; _0x218b5a < _0x3b222b * 3; _0x218b5a += 3) {
        _0x293565[_0x218b5a] = _0x38db74[_0x53ee9c + _0x218b5a * 4 >> 2];
        _0x293565[_0x218b5a + 1] = _0x38db74[_0x53ee9c + (_0x218b5a * 4 + 4) >> 2];
        _0x293565[_0x218b5a + 2] = _0x38db74[_0x53ee9c + (_0x218b5a * 4 + 8) >> 2];
      }
    } else {
      var _0x293565 = _0x38db74.subarray(_0x53ee9c >> 2, _0x53ee9c + _0x3b222b * 12 >> 2);
    }
    _0x2ad584.uniform3iv(_0x170093(_0x262f44), _0x293565);
  }
  function _0x16564a(_0x4dda3b, _0x59113b, _0x22d8ae) {
    _0x2ad584.uniform3uiv(_0x170093(_0x4dda3b), _0x2f2db0, _0x22d8ae >> 2, _0x59113b * 3);
  }
  function _0x29a26b(_0x475254, _0x157098, _0x159989) {
    if (_0x2375dd.currentContext.version >= 2) {
      _0x2ad584.uniform4fv(_0x170093(_0x475254), _0x2b9907, _0x159989 >> 2, _0x157098 * 4);
      return;
    }
    if (_0x157098 <= 72) {
      var _0x4e6016 = _0x5e909a[_0x157098 * 4 - 1];
      var _0x468f3a = _0x2b9907;
      _0x159989 >>= 2;
      for (var _0x1d4e2f = 0; _0x1d4e2f < _0x157098 * 4; _0x1d4e2f += 4) {
        var _0x1643a9 = _0x159989 + _0x1d4e2f;
        _0x4e6016[_0x1d4e2f] = _0x468f3a[_0x1643a9];
        _0x4e6016[_0x1d4e2f + 1] = _0x468f3a[_0x1643a9 + 1];
        _0x4e6016[_0x1d4e2f + 2] = _0x468f3a[_0x1643a9 + 2];
        _0x4e6016[_0x1d4e2f + 3] = _0x468f3a[_0x1643a9 + 3];
      }
    } else {
      var _0x4e6016 = _0x2b9907.subarray(_0x159989 >> 2, _0x159989 + _0x157098 * 16 >> 2);
    }
    _0x2ad584.uniform4fv(_0x170093(_0x475254), _0x4e6016);
  }
  function _0x4add2e(_0x3e52e7, _0x38cbbe, _0x40af1c) {
    if (_0x2375dd.currentContext.version >= 2) {
      _0x2ad584.uniform4iv(_0x170093(_0x3e52e7), _0x38db74, _0x40af1c >> 2, _0x38cbbe * 4);
      return;
    }
    if (_0x38cbbe <= 72) {
      var _0x7f3ce0 = _0x119797[_0x38cbbe * 4 - 1];
      for (var _0x36d111 = 0; _0x36d111 < _0x38cbbe * 4; _0x36d111 += 4) {
        _0x7f3ce0[_0x36d111] = _0x38db74[_0x40af1c + _0x36d111 * 4 >> 2];
        _0x7f3ce0[_0x36d111 + 1] = _0x38db74[_0x40af1c + (_0x36d111 * 4 + 4) >> 2];
        _0x7f3ce0[_0x36d111 + 2] = _0x38db74[_0x40af1c + (_0x36d111 * 4 + 8) >> 2];
        _0x7f3ce0[_0x36d111 + 3] = _0x38db74[_0x40af1c + (_0x36d111 * 4 + 12) >> 2];
      }
    } else {
      var _0x7f3ce0 = _0x38db74.subarray(_0x40af1c >> 2, _0x40af1c + _0x38cbbe * 16 >> 2);
    }
    _0x2ad584.uniform4iv(_0x170093(_0x3e52e7), _0x7f3ce0);
  }
  function _0x26f2d0(_0x26c2b6, _0x28fc64, _0x1af884) {
    _0x2ad584.uniform4uiv(_0x170093(_0x26c2b6), _0x2f2db0, _0x1af884 >> 2, _0x28fc64 * 4);
  }
  function _0x133b67(_0x27f739, _0x1c69a8, _0x1e32ed) {
    _0x27f739 = _0x2375dd.programs[_0x27f739];
    _0x2ad584.uniformBlockBinding(_0x27f739, _0x1c69a8, _0x1e32ed);
  }
  function _0x48eeba(_0x588c3b, _0x1bc230, _0x462206, _0x1c28dc) {
    if (_0x2375dd.currentContext.version >= 2) {
      _0x2ad584.uniformMatrix3fv(_0x170093(_0x588c3b), !!_0x462206, _0x2b9907, _0x1c28dc >> 2, _0x1bc230 * 9);
      return;
    }
    if (_0x1bc230 <= 32) {
      var _0x3fce61 = _0x5e909a[_0x1bc230 * 9 - 1];
      for (var _0x51c0d6 = 0; _0x51c0d6 < _0x1bc230 * 9; _0x51c0d6 += 9) {
        _0x3fce61[_0x51c0d6] = _0x2b9907[_0x1c28dc + _0x51c0d6 * 4 >> 2];
        _0x3fce61[_0x51c0d6 + 1] = _0x2b9907[_0x1c28dc + (_0x51c0d6 * 4 + 4) >> 2];
        _0x3fce61[_0x51c0d6 + 2] = _0x2b9907[_0x1c28dc + (_0x51c0d6 * 4 + 8) >> 2];
        _0x3fce61[_0x51c0d6 + 3] = _0x2b9907[_0x1c28dc + (_0x51c0d6 * 4 + 12) >> 2];
        _0x3fce61[_0x51c0d6 + 4] = _0x2b9907[_0x1c28dc + (_0x51c0d6 * 4 + 16) >> 2];
        _0x3fce61[_0x51c0d6 + 5] = _0x2b9907[_0x1c28dc + (_0x51c0d6 * 4 + 20) >> 2];
        _0x3fce61[_0x51c0d6 + 6] = _0x2b9907[_0x1c28dc + (_0x51c0d6 * 4 + 24) >> 2];
        _0x3fce61[_0x51c0d6 + 7] = _0x2b9907[_0x1c28dc + (_0x51c0d6 * 4 + 28) >> 2];
        _0x3fce61[_0x51c0d6 + 8] = _0x2b9907[_0x1c28dc + (_0x51c0d6 * 4 + 32) >> 2];
      }
    } else {
      var _0x3fce61 = _0x2b9907.subarray(_0x1c28dc >> 2, _0x1c28dc + _0x1bc230 * 36 >> 2);
    }
    _0x2ad584.uniformMatrix3fv(_0x170093(_0x588c3b), !!_0x462206, _0x3fce61);
  }
  function _0xa81d5f(_0x2f946d, _0x193dc5, _0x46360b, _0x45d3b7) {
    if (_0x2375dd.currentContext.version >= 2) {
      _0x2ad584.uniformMatrix4fv(_0x170093(_0x2f946d), !!_0x46360b, _0x2b9907, _0x45d3b7 >> 2, _0x193dc5 * 16);
      return;
    }
    if (_0x193dc5 <= 18) {
      var _0x40ee6d = _0x5e909a[_0x193dc5 * 16 - 1];
      var _0x2f3889 = _0x2b9907;
      _0x45d3b7 >>= 2;
      for (var _0x4c5389 = 0; _0x4c5389 < _0x193dc5 * 16; _0x4c5389 += 16) {
        var _0x1aea6d = _0x45d3b7 + _0x4c5389;
        _0x40ee6d[_0x4c5389] = _0x2f3889[_0x1aea6d];
        _0x40ee6d[_0x4c5389 + 1] = _0x2f3889[_0x1aea6d + 1];
        _0x40ee6d[_0x4c5389 + 2] = _0x2f3889[_0x1aea6d + 2];
        _0x40ee6d[_0x4c5389 + 3] = _0x2f3889[_0x1aea6d + 3];
        _0x40ee6d[_0x4c5389 + 4] = _0x2f3889[_0x1aea6d + 4];
        _0x40ee6d[_0x4c5389 + 5] = _0x2f3889[_0x1aea6d + 5];
        _0x40ee6d[_0x4c5389 + 6] = _0x2f3889[_0x1aea6d + 6];
        _0x40ee6d[_0x4c5389 + 7] = _0x2f3889[_0x1aea6d + 7];
        _0x40ee6d[_0x4c5389 + 8] = _0x2f3889[_0x1aea6d + 8];
        _0x40ee6d[_0x4c5389 + 9] = _0x2f3889[_0x1aea6d + 9];
        _0x40ee6d[_0x4c5389 + 10] = _0x2f3889[_0x1aea6d + 10];
        _0x40ee6d[_0x4c5389 + 11] = _0x2f3889[_0x1aea6d + 11];
        _0x40ee6d[_0x4c5389 + 12] = _0x2f3889[_0x1aea6d + 12];
        _0x40ee6d[_0x4c5389 + 13] = _0x2f3889[_0x1aea6d + 13];
        _0x40ee6d[_0x4c5389 + 14] = _0x2f3889[_0x1aea6d + 14];
        _0x40ee6d[_0x4c5389 + 15] = _0x2f3889[_0x1aea6d + 15];
      }
    } else {
      var _0x40ee6d = _0x2b9907.subarray(_0x45d3b7 >> 2, _0x45d3b7 + _0x193dc5 * 64 >> 2);
    }
    _0x2ad584.uniformMatrix4fv(_0x170093(_0x2f946d), !!_0x46360b, _0x40ee6d);
  }
  function _0x42f038(_0x2459bd) {
    if (!_0x3ce037(_0x2459bd)) {
      _0x2375dd.recordError(1280);
      _0x1af4bd("GL_INVALID_ENUM in glUnmapBuffer");
      return 0;
    }
    var _0x13c706 = _0x522415(_0x2459bd);
    var _0xa55f9f = _0x2375dd.mappedBuffers[_0x13c706];
    if (!_0xa55f9f) {
      _0x2375dd.recordError(1282);
      _0x1af4bd("buffer was never mapped in glUnmapBuffer");
      return 0;
    }
    _0x2375dd.mappedBuffers[_0x13c706] = null;
    if (!(_0xa55f9f.access & 16)) {
      if (_0x2375dd.currentContext.version >= 2) {
        _0x2ad584.bufferSubData(_0x2459bd, _0xa55f9f.offset, _0xdf86cd, _0xa55f9f.mem, _0xa55f9f.length);
      } else {
        _0x2ad584.bufferSubData(_0x2459bd, _0xa55f9f.offset, _0xdf86cd.subarray(_0xa55f9f.mem, _0xa55f9f.mem + _0xa55f9f.length));
      }
    }
    _0x41b1b9(_0xa55f9f.mem);
    return 1;
  }
  function _0x29809c() {
    var _0x19365a = _0x2ad584.currentProgram;
    if (!_0x19365a.explicitProgramBindingsApplied) {
      if (_0x2375dd.currentContext.version >= 2) {
        Object.keys(_0x19365a.explicitUniformBindings).forEach(function (_0x420436) {
          var _0x19d509 = _0x19365a.explicitUniformBindings[_0x420436];
          for (var _0x3011ee = 0; _0x3011ee < _0x19d509[1]; ++_0x3011ee) {
            var _0x13a6bd = _0x2ad584.getUniformBlockIndex(_0x19365a, _0x420436 + (_0x19d509[1] > 1 ? "[" + _0x3011ee + "]" : ""));
            _0x2ad584.uniformBlockBinding(_0x19365a, _0x13a6bd, _0x19d509[0] + _0x3011ee);
          }
        });
      }
      Object.keys(_0x19365a.explicitSamplerBindings).forEach(function (_0x1e29d6) {
        var _0x575525 = _0x19365a.explicitSamplerBindings[_0x1e29d6];
        for (var _0x4a5617 = 0; _0x4a5617 < _0x575525[1]; ++_0x4a5617) {
          _0x2ad584.uniform1i(_0x2ad584.getUniformLocation(_0x19365a, _0x1e29d6 + (_0x4a5617 ? "[" + _0x4a5617 + "]" : "")), _0x575525[0] + _0x4a5617);
        }
      });
      _0x19365a.explicitProgramBindingsApplied = 1;
    }
  }
  function _0x31d492(_0x2dcabc) {
    _0x2dcabc = _0x2375dd.programs[_0x2dcabc];
    _0x2ad584.useProgram(_0x2dcabc);
    if (_0x2ad584.currentProgram = _0x2dcabc) {
      _0x29809c();
    }
  }
  function _0x410f98(_0x3eff65) {
    _0x2ad584.validateProgram(_0x2375dd.programs[_0x3eff65]);
  }
  function _0x55a0d9(_0x4610fa, _0x344d61, _0x319a14, _0x319afb, _0x23f20e) {
    _0x2ad584.vertexAttrib4f(_0x4610fa, _0x344d61, _0x319a14, _0x319afb, _0x23f20e);
  }
  function _0x31cf3a(_0x4cf0d3, _0x452b01) {
    _0x2ad584.vertexAttrib4f(_0x4cf0d3, _0x2b9907[_0x452b01 >> 2], _0x2b9907[_0x452b01 + 4 >> 2], _0x2b9907[_0x452b01 + 8 >> 2], _0x2b9907[_0x452b01 + 12 >> 2]);
  }
  function _0x5aafdd(_0x28bc28, _0xf8bc60, _0x17a357, _0x1ab3b6, _0x1cddbe) {
    var _0x33e4b3 = _0x2375dd.currentContext.clientBuffers[_0x28bc28];
    if (!_0x2ad584.currentArrayBufferBinding) {
      _0x33e4b3.size = _0xf8bc60;
      _0x33e4b3.type = _0x17a357;
      _0x33e4b3.normalized = false;
      _0x33e4b3.stride = _0x1ab3b6;
      _0x33e4b3.ptr = _0x1cddbe;
      _0x33e4b3.clientside = true;
      _0x33e4b3.vertexAttribPointerAdaptor = function (_0x5b4ed3, _0x208fab, _0x19842a, _0x3fe8d3, _0x9b8b62, _0x59aea9) {
        this.vertexAttribIPointer(_0x5b4ed3, _0x208fab, _0x19842a, _0x9b8b62, _0x59aea9);
      };
      return;
    }
    _0x33e4b3.clientside = false;
    _0x2ad584.vertexAttribIPointer(_0x28bc28, _0xf8bc60, _0x17a357, _0x1ab3b6, _0x1cddbe);
  }
  function _0x2c8919(_0x14decf, _0x5743ab, _0x25fc78, _0x119a2d, _0xa82517, _0x125dc0) {
    var _0x4ee599 = _0x2375dd.currentContext.clientBuffers[_0x14decf];
    if (!_0x2ad584.currentArrayBufferBinding) {
      _0x4ee599.size = _0x5743ab;
      _0x4ee599.type = _0x25fc78;
      _0x4ee599.normalized = _0x119a2d;
      _0x4ee599.stride = _0xa82517;
      _0x4ee599.ptr = _0x125dc0;
      _0x4ee599.clientside = true;
      _0x4ee599.vertexAttribPointerAdaptor = function (_0x36667c, _0xae7e63, _0x56cd1f, _0x1ec6ef, _0x18c480, _0x2123b0) {
        this.vertexAttribPointer(_0x36667c, _0xae7e63, _0x56cd1f, _0x1ec6ef, _0x18c480, _0x2123b0);
      };
      return;
    }
    _0x4ee599.clientside = false;
    _0x2ad584.vertexAttribPointer(_0x14decf, _0x5743ab, _0x25fc78, !!_0x119a2d, _0xa82517, _0x125dc0);
  }
  function _0x2811fc(_0x211638, _0x1713a9, _0x448c4b, _0x763cbb) {
    _0x2ad584.viewport(_0x211638, _0x1713a9, _0x448c4b, _0x763cbb);
  }
  function _0x45bcc7(_0x4a8804) {
    return _0x4a8804;
  }
  function _0x48ddcc(_0x38281b) {
    _0x3e6cb0();
    var _0x4bf820 = new Date(_0x38db74[_0x38281b + 20 >> 2] + 1900, _0x38db74[_0x38281b + 16 >> 2], _0x38db74[_0x38281b + 12 >> 2], _0x38db74[_0x38281b + 8 >> 2], _0x38db74[_0x38281b + 4 >> 2], _0x38db74[_0x38281b >> 2], 0);
    var _0x110b9b = _0x38db74[_0x38281b + 32 >> 2];
    var _0x2b81bd = _0x4bf820.getTimezoneOffset();
    var _0x5511fb = new Date(_0x4bf820.getFullYear(), 0, 1);
    var _0x1a3c3a = new Date(_0x4bf820.getFullYear(), 6, 1).getTimezoneOffset();
    var _0x30b8e5 = _0x5511fb.getTimezoneOffset();
    var _0x3b0645 = Math.min(_0x30b8e5, _0x1a3c3a);
    if (_0x110b9b < 0) {
      _0x38db74[_0x38281b + 32 >> 2] = Number(_0x1a3c3a != _0x30b8e5 && _0x3b0645 == _0x2b81bd);
    } else if (_0x110b9b > 0 != (_0x3b0645 == _0x2b81bd)) {
      var _0x4e11a8 = Math.max(_0x30b8e5, _0x1a3c3a);
      var _0x3d7137 = _0x110b9b > 0 ? _0x3b0645 : _0x4e11a8;
      _0x4bf820.setTime(_0x4bf820.getTime() + (_0x3d7137 - _0x2b81bd) * 60000);
    }
    _0x38db74[_0x38281b + 24 >> 2] = _0x4bf820.getDay();
    var _0x50da6a = (_0x4bf820.getTime() - _0x5511fb.getTime()) / 86400000 | 0;
    _0x38db74[_0x38281b + 28 >> 2] = _0x50da6a;
    _0x38db74[_0x38281b >> 2] = _0x4bf820.getSeconds();
    _0x38db74[_0x38281b + 4 >> 2] = _0x4bf820.getMinutes();
    _0x38db74[_0x38281b + 8 >> 2] = _0x4bf820.getHours();
    _0x38db74[_0x38281b + 12 >> 2] = _0x4bf820.getDate();
    _0x38db74[_0x38281b + 16 >> 2] = _0x4bf820.getMonth();
    return _0x4bf820.getTime() / 1000 | 0;
  }
  function _0x47833a(_0x59b99c) {
    _0x592137(_0x59b99c);
  }
  function _0x4ac136(_0x1000e9, _0x3735f2, _0x3ade0c) {
    return 0;
  }
  function _0x228f93(_0x22db1e) {
    _0x38db74[_0x22db1e >> 2] = 0;
    return 0;
  }
  function _0x3e8574(_0x5a89d8) {
    return _0x5a89d8 % 4 === 0 && (_0x5a89d8 % 100 !== 0 || _0x5a89d8 % 400 === 0);
  }
  function _0x3120af(_0x418065, _0x4b9ea5) {
    var _0xbf666 = 0;
    for (var _0x3d734a = 0; _0x3d734a <= _0x4b9ea5; _0xbf666 += _0x418065[_0x3d734a++]) {}
    return _0xbf666;
  }
  var _0x34df17 = [31, 29, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
  var _0x142c9f = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
  function _0x6c197e(_0x45c7d8, _0xdc4704) {
    var _0x46789a = new Date(_0x45c7d8.getTime());
    while (_0xdc4704 > 0) {
      var _0x5f1810 = _0x3e8574(_0x46789a.getFullYear());
      var _0x3043f9 = _0x46789a.getMonth();
      var _0x13147a = (_0x5f1810 ? _0x34df17 : _0x142c9f)[_0x3043f9];
      if (_0xdc4704 > _0x13147a - _0x46789a.getDate()) {
        _0xdc4704 -= _0x13147a - _0x46789a.getDate() + 1;
        _0x46789a.setDate(1);
        if (_0x3043f9 < 11) {
          _0x46789a.setMonth(_0x3043f9 + 1);
        } else {
          _0x46789a.setMonth(0);
          _0x46789a.setFullYear(_0x46789a.getFullYear() + 1);
        }
      } else {
        _0x46789a.setDate(_0x46789a.getDate() + _0xdc4704);
        return _0x46789a;
      }
    }
    return _0x46789a;
  }
  function _0x45f645(_0xbe782b, _0x39fbac, _0x4d1278, _0x54efbf) {
    var _0x45e558 = _0x38db74[_0x54efbf + 40 >> 2];
    var _0x2775ac = {
      tm_sec: _0x38db74[_0x54efbf >> 2],
      tm_min: _0x38db74[_0x54efbf + 4 >> 2],
      tm_hour: _0x38db74[_0x54efbf + 8 >> 2],
      tm_mday: _0x38db74[_0x54efbf + 12 >> 2],
      tm_mon: _0x38db74[_0x54efbf + 16 >> 2],
      tm_year: _0x38db74[_0x54efbf + 20 >> 2],
      tm_wday: _0x38db74[_0x54efbf + 24 >> 2],
      tm_yday: _0x38db74[_0x54efbf + 28 >> 2],
      tm_isdst: _0x38db74[_0x54efbf + 32 >> 2],
      tm_gmtoff: _0x38db74[_0x54efbf + 36 >> 2],
      tm_zone: _0x45e558 ? _0xdfb7b2(_0x45e558) : ""
    };
    var _0x134380 = _0xdfb7b2(_0x4d1278);
    var _0x3df854 = {
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
    for (var _0x7b43f6 in _0x3df854) {
      _0x134380 = _0x134380.replace(new RegExp(_0x7b43f6, "g"), _0x3df854[_0x7b43f6]);
    }
    var _0x291a0e = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    var _0x1c1c17 = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    function _0x5c7fdd(_0x5b8d83, _0x581f45, _0x1678ea) {
      var _0x15f761 = typeof _0x5b8d83 === "number" ? _0x5b8d83.toString() : _0x5b8d83 || "";
      while (_0x15f761.length < _0x581f45) {
        _0x15f761 = _0x1678ea[0] + _0x15f761;
      }
      return _0x15f761;
    }
    function _0x261879(_0x98d0df, _0x7aec68) {
      return _0x5c7fdd(_0x98d0df, _0x7aec68, "0");
    }
    function _0x42d453(_0x529247, _0x337257) {
      function _0x206770(_0x45e129) {
        if (_0x45e129 < 0) {
          return -1;
        } else if (_0x45e129 > 0) {
          return 1;
        } else {
          return 0;
        }
      }
      var _0x4b5ced;
      if ((_0x4b5ced = _0x206770(_0x529247.getFullYear() - _0x337257.getFullYear())) === 0) {
        if ((_0x4b5ced = _0x206770(_0x529247.getMonth() - _0x337257.getMonth())) === 0) {
          _0x4b5ced = _0x206770(_0x529247.getDate() - _0x337257.getDate());
        }
      }
      return _0x4b5ced;
    }
    function _0x55c34f(_0x2c5a64) {
      switch (_0x2c5a64.getDay()) {
        case 0:
          return new Date(_0x2c5a64.getFullYear() - 1, 11, 29);
        case 1:
          return _0x2c5a64;
        case 2:
          return new Date(_0x2c5a64.getFullYear(), 0, 3);
        case 3:
          return new Date(_0x2c5a64.getFullYear(), 0, 2);
        case 4:
          return new Date(_0x2c5a64.getFullYear(), 0, 1);
        case 5:
          return new Date(_0x2c5a64.getFullYear() - 1, 11, 31);
        case 6:
          return new Date(_0x2c5a64.getFullYear() - 1, 11, 30);
      }
    }
    function _0x4c5a15(_0x4d1d14) {
      var _0x2ac157 = _0x6c197e(new Date(_0x4d1d14.tm_year + 1900, 0, 1), _0x4d1d14.tm_yday);
      var _0x5d4362 = new Date(_0x2ac157.getFullYear(), 0, 4);
      var _0x3bbb43 = new Date(_0x2ac157.getFullYear() + 1, 0, 4);
      var _0x55fafc = _0x55c34f(_0x5d4362);
      var _0x16a76b = _0x55c34f(_0x3bbb43);
      if (_0x42d453(_0x55fafc, _0x2ac157) <= 0) {
        if (_0x42d453(_0x16a76b, _0x2ac157) <= 0) {
          return _0x2ac157.getFullYear() + 1;
        } else {
          return _0x2ac157.getFullYear();
        }
      } else {
        return _0x2ac157.getFullYear() - 1;
      }
    }
    var _0x15e199 = {
      "%a": function (_0x24847e) {
        return _0x291a0e[_0x24847e.tm_wday].substring(0, 3);
      },
      "%A": function (_0x16d6a5) {
        return _0x291a0e[_0x16d6a5.tm_wday];
      },
      "%b": function (_0x6e1635) {
        return _0x1c1c17[_0x6e1635.tm_mon].substring(0, 3);
      },
      "%B": function (_0x2f9961) {
        return _0x1c1c17[_0x2f9961.tm_mon];
      },
      "%C": function (_0x36efd6) {
        var _0x3236cf = _0x36efd6.tm_year + 1900;
        return _0x261879(_0x3236cf / 100 | 0, 2);
      },
      "%d": function (_0x1de403) {
        return _0x261879(_0x1de403.tm_mday, 2);
      },
      "%e": function (_0x597263) {
        return _0x5c7fdd(_0x597263.tm_mday, 2, " ");
      },
      "%g": function (_0x407d90) {
        return _0x4c5a15(_0x407d90).toString().substring(2);
      },
      "%G": function (_0x40c35b) {
        return _0x4c5a15(_0x40c35b);
      },
      "%H": function (_0x17d94e) {
        return _0x261879(_0x17d94e.tm_hour, 2);
      },
      "%I": function (_0x5b9865) {
        var _0x396c0a = _0x5b9865.tm_hour;
        if (_0x396c0a == 0) {
          _0x396c0a = 12;
        } else if (_0x396c0a > 12) {
          _0x396c0a -= 12;
        }
        return _0x261879(_0x396c0a, 2);
      },
      "%j": function (_0x73cdf4) {
        return _0x261879(_0x73cdf4.tm_mday + _0x3120af(_0x3e8574(_0x73cdf4.tm_year + 1900) ? _0x34df17 : _0x142c9f, _0x73cdf4.tm_mon - 1), 3);
      },
      "%m": function (_0x6b8fd2) {
        return _0x261879(_0x6b8fd2.tm_mon + 1, 2);
      },
      "%M": function (_0x5759e1) {
        return _0x261879(_0x5759e1.tm_min, 2);
      },
      "%n": function () {
        return "\n";
      },
      "%p": function (_0x5ebfbc) {
        if (_0x5ebfbc.tm_hour >= 0 && _0x5ebfbc.tm_hour < 12) {
          return "AM";
        } else {
          return "PM";
        }
      },
      "%S": function (_0x42ba1e) {
        return _0x261879(_0x42ba1e.tm_sec, 2);
      },
      "%t": function () {
        return "\t";
      },
      "%u": function (_0x3b680c) {
        return _0x3b680c.tm_wday || 7;
      },
      "%U": function (_0x573b58) {
        var _0x554993 = new Date(_0x573b58.tm_year + 1900, 0, 1);
        var _0x1a92a3 = _0x554993.getDay() === 0 ? _0x554993 : _0x6c197e(_0x554993, 7 - _0x554993.getDay());
        var _0x19c804 = new Date(_0x573b58.tm_year + 1900, _0x573b58.tm_mon, _0x573b58.tm_mday);
        if (_0x42d453(_0x1a92a3, _0x19c804) < 0) {
          var _0x164b5c = _0x3120af(_0x3e8574(_0x19c804.getFullYear()) ? _0x34df17 : _0x142c9f, _0x19c804.getMonth() - 1) - 31;
          var _0xd1de3d = 31 - _0x1a92a3.getDate();
          var _0x4694dd = _0xd1de3d + _0x164b5c + _0x19c804.getDate();
          return _0x261879(Math.ceil(_0x4694dd / 7), 2);
        }
        if (_0x42d453(_0x1a92a3, _0x554993) === 0) {
          return "01";
        } else {
          return "00";
        }
      },
      "%V": function (_0x1c6a88) {
        var _0x57809a = new Date(_0x1c6a88.tm_year + 1900, 0, 4);
        var _0x37e80a = new Date(_0x1c6a88.tm_year + 1901, 0, 4);
        var _0x3c0b53 = _0x55c34f(_0x57809a);
        var _0x5e3fea = _0x55c34f(_0x37e80a);
        var _0x17f74e = _0x6c197e(new Date(_0x1c6a88.tm_year + 1900, 0, 1), _0x1c6a88.tm_yday);
        if (_0x42d453(_0x17f74e, _0x3c0b53) < 0) {
          return "53";
        }
        if (_0x42d453(_0x5e3fea, _0x17f74e) <= 0) {
          return "01";
        }
        var _0xe4b24c;
        if (_0x3c0b53.getFullYear() < _0x1c6a88.tm_year + 1900) {
          _0xe4b24c = _0x1c6a88.tm_yday + 32 - _0x3c0b53.getDate();
        } else {
          _0xe4b24c = _0x1c6a88.tm_yday + 1 - _0x3c0b53.getDate();
        }
        return _0x261879(Math.ceil(_0xe4b24c / 7), 2);
      },
      "%w": function (_0x1645d5) {
        return _0x1645d5.tm_wday;
      },
      "%W": function (_0x1c9403) {
        var _0x1abdb5 = new Date(_0x1c9403.tm_year, 0, 1);
        var _0x48633b = _0x1abdb5.getDay() === 1 ? _0x1abdb5 : _0x6c197e(_0x1abdb5, _0x1abdb5.getDay() === 0 ? 1 : 7 - _0x1abdb5.getDay() + 1);
        var _0x141bfd = new Date(_0x1c9403.tm_year + 1900, _0x1c9403.tm_mon, _0x1c9403.tm_mday);
        if (_0x42d453(_0x48633b, _0x141bfd) < 0) {
          var _0x1b1cc4 = _0x3120af(_0x3e8574(_0x141bfd.getFullYear()) ? _0x34df17 : _0x142c9f, _0x141bfd.getMonth() - 1) - 31;
          var _0x3880f5 = 31 - _0x48633b.getDate();
          var _0x135217 = _0x3880f5 + _0x1b1cc4 + _0x141bfd.getDate();
          return _0x261879(Math.ceil(_0x135217 / 7), 2);
        }
        if (_0x42d453(_0x48633b, _0x1abdb5) === 0) {
          return "01";
        } else {
          return "00";
        }
      },
      "%y": function (_0x55ec90) {
        return (_0x55ec90.tm_year + 1900).toString().substring(2);
      },
      "%Y": function (_0x240374) {
        return _0x240374.tm_year + 1900;
      },
      "%z": function (_0x1d331b) {
        var _0x2d4230 = _0x1d331b.tm_gmtoff;
        var _0x395768 = _0x2d4230 >= 0;
        _0x2d4230 = Math.abs(_0x2d4230) / 60;
        _0x2d4230 = _0x2d4230 / 60 * 100 + _0x2d4230 % 60;
        return (_0x395768 ? "+" : "-") + String("0000" + _0x2d4230).slice(-4);
      },
      "%Z": function (_0x4bc634) {
        return _0x4bc634.tm_zone;
      },
      "%%": function () {
        return "%";
      }
    };
    for (var _0x7b43f6 in _0x15e199) {
      if (_0x134380.includes(_0x7b43f6)) {
        _0x134380 = _0x134380.replace(new RegExp(_0x7b43f6, "g"), _0x15e199[_0x7b43f6](_0x2775ac));
      }
    }
    var _0x55532e = _0x3f85df(_0x134380, false);
    if (_0x55532e.length > _0x39fbac) {
      return 0;
    }
    _0x546ee6(_0x55532e, _0xbe782b);
    return _0x55532e.length - 1;
  }
  function _0x135964(_0x22ab2a) {
    var _0x1bb72d = Date.now() / 1000 | 0;
    if (_0x22ab2a) {
      _0x38db74[_0x22ab2a >> 2] = _0x1bb72d;
    }
    return _0x1bb72d;
  }
  function _0x559ba6(_0x2018f3, _0x5c88f3) {
    _0x2018f3 = _0xdfb7b2(_0x2018f3);
    try {
      _0x4de3dc.utime(_0x2018f3, _0x5c88f3, _0x5c88f3);
      return 0;
    } catch (_0x2065ff) {
      if (!(_0x2065ff instanceof _0x4de3dc.ErrnoError)) {
        throw _0x2065ff + " : " + _0x27bd0f();
      }
      _0x54e9de(_0x2065ff.errno);
      return -1;
    }
  }
  function _0x18707f(_0x594e43, _0x301f20) {
    var _0x5b8aaf;
    if (_0x301f20) {
      _0x5b8aaf = _0x38db74[_0x301f20 + 4 >> 2] * 1000;
    } else {
      _0x5b8aaf = Date.now();
    }
    return _0x559ba6(_0x594e43, _0x5b8aaf);
  }
  function _0x2e0838(_0x1bfd56, _0x342881, _0x50c3e1, _0x138879) {
    if (!_0x1bfd56) {
      _0x1bfd56 = this;
    }
    this.parent = _0x1bfd56;
    this.mount = _0x1bfd56.mount;
    this.mounted = null;
    this.id = _0x4de3dc.nextInode++;
    this.name = _0x342881;
    this.mode = _0x50c3e1;
    this.node_ops = {};
    this.stream_ops = {};
    this.rdev = _0x138879;
  }
  var _0x54dd06 = 365;
  var _0x56c54e = 146;
  Object.defineProperties(_0x2e0838.prototype, {
    read: {
      get: function () {
        return (this.mode & _0x54dd06) === _0x54dd06;
      },
      set: function (_0x3a5362) {
        if (_0x3a5362) {
          this.mode |= _0x54dd06;
        } else {
          this.mode &= ~_0x54dd06;
        }
      }
    },
    write: {
      get: function () {
        return (this.mode & _0x56c54e) === _0x56c54e;
      },
      set: function (_0x29be97) {
        if (_0x29be97) {
          this.mode |= _0x56c54e;
        } else {
          this.mode &= ~_0x56c54e;
        }
      }
    },
    isFolder: {
      get: function () {
        return _0x4de3dc.isDir(this.mode);
      }
    },
    isDevice: {
      get: function () {
        return _0x4de3dc.isChrdev(this.mode);
      }
    }
  });
  _0x4de3dc.FSNode = _0x2e0838;
  _0x4de3dc.staticInit();
  _0x25e483.FS_createPath = _0x4de3dc.createPath;
  _0x25e483.FS_createDataFile = _0x4de3dc.createDataFile;
  _0x25e483.requestFullscreen = function _0x21896c(_0x483d64, _0x1d1aec) {
    _0x232a5c.requestFullscreen(_0x483d64, _0x1d1aec);
  };
  _0x25e483.requestAnimationFrame = function _0x1a8d75(_0x1c1157) {
    _0x232a5c.requestAnimationFrame(_0x1c1157);
  };
  _0x25e483.setCanvasSize = function _0x675bc6(_0x3cdcf5, _0x1f5350, _0x30e361) {
    _0x232a5c.setCanvasSize(_0x3cdcf5, _0x1f5350, _0x30e361);
  };
  _0x25e483.pauseMainLoop = function _0x8e3727() {
    _0x232a5c.mainLoop.pause();
  };
  _0x25e483.resumeMainLoop = function _0x2b6cd0() {
    _0x232a5c.mainLoop.resume();
  };
  _0x25e483.getUserMedia = function _0x50c73f() {
    _0x232a5c.getUserMedia();
  };
  _0x25e483.createContext = function _0x42fef4(_0xd97284, _0x578eb7, _0x7f235a, _0x1e0642) {
    return _0x232a5c.createContext(_0xd97284, _0x578eb7, _0x7f235a, _0x1e0642);
  };
  var _0x2ad584;
  for (var _0xf514ab = 0; _0xf514ab < 32; ++_0xf514ab) {
    _0x4f2d92.push(new Array(_0xf514ab));
  }
  var _0x16d400 = new Float32Array(288);
  for (var _0xf514ab = 0; _0xf514ab < 288; ++_0xf514ab) {
    _0x5e909a[_0xf514ab] = _0x16d400.subarray(0, _0xf514ab + 1);
  }
  var _0x214bf9 = new Int32Array(288);
  for (var _0xf514ab = 0; _0xf514ab < 288; ++_0xf514ab) {
    _0x119797[_0xf514ab] = _0x214bf9.subarray(0, _0xf514ab + 1);
  }
  function _0x3f85df(_0x2fa96b, _0x4a890c, _0x3aa803) {
    var _0x43cce7 = _0x3aa803 > 0 ? _0x3aa803 : _0x576ae2(_0x2fa96b) + 1;
    var _0x3ecc9c = new Array(_0x43cce7);
    var _0x4e44d0 = _0x538990(_0x2fa96b, _0x3ecc9c, 0, _0x3ecc9c.length);
    if (_0x4a890c) {
      _0x3ecc9c.length = _0x4e44d0;
    }
    return _0x3ecc9c;
  }
  var _0x4691f5 = {
    ik: _0xe92321,
    ek: _0x214fac,
    wd: _0x565f1e,
    el: _0x29262b,
    Rk: _0x3a05f0,
    Fk: _0x18eb38,
    cl: _0x73a711,
    bl: _0x14d53e,
    _k: _0x13fe29,
    al: _0x38e0b0,
    $k: _0x55f4aa,
    gk: _0xfad097,
    fk: _0x526aa9,
    wk: _0x4bfcdf,
    nd: _0x52206d,
    Xj: _0x47f255,
    Qj: _0x5cfdd2,
    Wc: _0x29e5eb,
    Oj: _0x11f654,
    dd: _0xfca71,
    mj: _0x715ff3,
    Lc: _0x4270eb,
    Nc: _0x49a0a6,
    Mc: _0x1d7181,
    Hj: _0x12e293,
    Wk: _0x2d0611,
    Vk: _0x42122b,
    Zj: _0x984900,
    lk: _0x453b93,
    kk: _0x25fdae,
    gl: _0x21b7d7,
    Zk: _0x41dbba,
    Yk: _0x3a313f,
    hl: _0x1b29a6,
    Ak: _0x46b392,
    Jk: _0x596e1f,
    Ae: _0x3def31,
    Be: _0x4959f1,
    Ok: _0x70c32c,
    Nk: _0x16091e,
    Mk: _0x2d9711,
    hj: _0x45a7ad,
    gj: _0x250db8,
    fj: _0x3de856,
    ej: _0x40caca,
    Xk: _0x26b72d,
    Sk: _0x2ac6d1,
    Tj: _0x46886a,
    Pj: _0x30d2c2,
    ck: _0x2c177a,
    il: _0x573d63,
    nj: _0x1bec5d,
    Kk: _0x4f41e2,
    Hf: _0x519af5,
    Pb: _0xbce128,
    Ob: _0x558127,
    Mf: _0x2843ae,
    Za: _0x3b8590,
    Ya: _0x566dc7,
    nf: _0x3a4d84,
    Of: _0x164995,
    pf: _0x545dc6,
    ff: _0x563f7d,
    la: _0x5c9a94,
    Ff: _0x3516f1,
    Lb: _0x550af3,
    Kb: _0x5e4b7f,
    Df: _0x4b8629,
    Ef: _0x393b3d,
    Jb: _0x31b466,
    Ib: _0x2926ff,
    zd: _0x5f04c4,
    Gf: _0x167574,
    Nb: _0x35932c,
    Mb: _0x33e8a6,
    of: _0x445294,
    qf: _0x482377,
    If: _0x2dc8b8,
    Rb: _0x58f964,
    Qb: _0x3ca5ce,
    Sb: _0x5d541e,
    jf: _0xa75cc6,
    Cf: _0x3c6952,
    Kf: _0x29debe,
    ha: _0x207094,
    rg: _0x51e2c5,
    ja: _0x2cd2a6,
    lg: _0x32ae42,
    mg: _0x3cd861,
    kg: _0x543854,
    fc: _0x4f038f,
    gc: _0x24a531,
    ab: _0x22653c,
    wa: _0x57441d,
    Tb: _0x5d3d6d,
    og: _0x3b7ec4,
    gg: _0x520ef2,
    jg: _0x4c6aa9,
    ic: _0x2cbb1e,
    hc: _0x4d1fff,
    ua: _0x5362ee,
    ia: _0x26ce12,
    qg: _0x5cd1d6,
    pg: _0x3cc6e5,
    va: _0x4dd1c0,
    oa: _0x4d1afe,
    ec: _0x2190cf,
    Bb: _0x786db0,
    Hb: _0x216fe6,
    Cb: _0x43a287,
    Db: _0x6dd82e,
    Fb: _0x3e051b,
    sf: _0x24afeb,
    dc: _0x28bec7,
    Pf: _0x418b99,
    Eb: _0x150573,
    Bf: _0x20ba48,
    ya: _0x2b8f5f,
    Nf: _0xdb99d5,
    mf: _0x183c4d,
    dg: _0x5ccc89,
    ag: _0x15828d,
    bg: _0xcdd013,
    cg: _0x489a26,
    $a: _0x58f283,
    Xf: _0x58c009,
    _f: _0x1a3c5f,
    Yf: _0x4630a5,
    $f: _0x5266b7,
    Rj: _0x6d9bf9,
    tk: _0x1b0466,
    rk: _0x1b08f5,
    pk: _0x18e8c7,
    $j: _0x4f07dc,
    bk: _0x13a6e8,
    vk: _0x25fa86,
    Vj: _0x325213,
    Uj: _0x56e0fe,
    oj: _0x2cf144,
    nk: _0x3255cb,
    Bk: _0x4e90e1,
    Kj: _0x313aa9,
    zk: _0x2ef800,
    yk: _0xefe19c,
    dj: _0x4f344c,
    sb: _0x3002b6,
    Jj: _0xb5508,
    od: _0x4cf239,
    Ij: _0x3d58dc,
    dk: _0x156390,
    fl: _0x283b85,
    dl: _0x39e475,
    Uk: _0xa1b02,
    Ti: _0x5aa17f,
    Si: _0x1ef812,
    Qi: _0x280305,
    Ri: _0x16375d,
    jk: _0x427ab2,
    Wj: _0x403fdc,
    Pk: _0x1b0c44,
    Qk: _0x500494,
    Tk: _0x443ffa,
    cd: _0x5721d2,
    Gk: _0x523a48,
    Ek: _0x211b39,
    Ck: _0x33ea6f,
    Dk: _0xc8379c,
    sk: _0x2c171a,
    qk: _0x573229,
    ok: _0x44e9c8,
    _j: _0x2affe9,
    ak: _0x1f547a,
    uk: _0x153804,
    Lk: _0x38e980,
    mk: _0xc816bb,
    hk: _0x3fe604,
    xk: _0x5eb640,
    Yj: _0x50d0cf,
    Nj: _0x3b24ce,
    Ej: _0x449532,
    $c: _0x50a4e7,
    Dj: _0x331b2f,
    rb: _0x20431b,
    _c: _0x4d9a1a,
    bd: _0x1521b2,
    tj: _0x2cdde4,
    vj: _0x21db59,
    Fj: _0x27a113,
    Gj: _0x504497,
    Aj: _0x514b00,
    yj: _0x4d62c6,
    Bj: _0x29f49b,
    xj: _0x3c7d8e,
    zj: _0x535a9e,
    ad: _0x31d332,
    pb: _0x448cbc,
    qb: _0x151267,
    wj: _0xe22d92,
    Cj: _0x459659,
    uj: _0x525f03,
    pj: _0x264ffe,
    Zc: _0x68f6b5,
    Xc: _0x140af7,
    rj: _0x372d07,
    sj: _0x14ee3e,
    qj: _0x278432,
    Yc: _0x2251e0,
    ob: _0x20fd57,
    aj: _0x244805,
    Sc: _0x5b6e34,
    _i: _0x2da6ac,
    Tc: _0x1e84a8,
    Xi: _0x429087,
    Zi: _0x150c6f,
    Yi: _0x58ea2e,
    $i: _0x5e4a25,
    p: _0x4233bd,
    i: _0x22d8c0,
    o: _0xbcdea2,
    j: _0x121ac2,
    a: _0x2f9104,
    kl: _0x1405ce,
    tb: _0x56ea30,
    Qd: _0x425d59,
    ga: _0x54d9ec,
    Cd: _0x1a68c7,
    Dd: _0x2f9df3,
    l: _0x31a0c7,
    Tf: _0x546053,
    Hg: _0x38464b,
    Zf: _0x18aa8c,
    th: _0x8591a8,
    Nd: _0x32a248,
    oh: _0x59a34b,
    Td: _0x4c29e1,
    V: _0x13376d,
    wi: _0xa5e584,
    fi: _0x53c34f,
    Kd: _0x227efa,
    Hd: _0x5f1822,
    Oc: _0x19e451,
    Pc: _0x244f1d,
    ne: _0xdefdd4,
    Ra: _0x2182aa,
    Gd: _0x5b0fd9,
    Xg: _0x4f2151,
    rh: _0x885d66,
    wg: _0x41083c,
    cc: _0x186d0d,
    Ng: _0x172ffc,
    Od: _0x578849,
    Jd: _0x2ee3d0,
    ig: _0x5bb168,
    cf: _0x587756,
    mb: _0x324f71,
    Pd: _0x445e6d,
    gh: _0x3dbc30,
    Ui: _0x19cb21,
    ng: _0x425359,
    Rd: _0x38595b,
    Ld: _0x24468e,
    Id: _0x242705,
    Sd: _0xca7f2e,
    tg: _0x245c43,
    hg: _0x14cd80,
    ce: _0x5bc3e0,
    zb: _0x20a65b,
    Hc: _0x109318,
    sg: _0x48eb56,
    ug: _0x165213,
    Ie: _0x4be378,
    Md: _0x26f33e,
    x: _0x29e4ed,
    S: _0x1d2333,
    Fd: _0x3d2c72,
    wb: _0xccf996,
    Bd: _0x5dfa34,
    Dh: _0x4e97e9,
    Ca: _0x3e3bf8,
    Fc: _0x3070ac,
    Kh: _0x17c73a,
    _a: _0x5d877b,
    kf: _0x2ba15f,
    hf: _0x1c11fe,
    zf: _0x3786e0,
    tf: _0x1d0623,
    rf: _0x2549e4,
    yf: _0x427207,
    Va: _0x41f25c,
    Ed: _0x32d4e5,
    O: _0x2ec5a4,
    Wa: _0x7df6c2,
    lf: _0x3948d7,
    Sf: _0x269c32,
    C: _0x2791ef,
    G: _0x488471,
    ll: _0x3f3b26,
    Af: _0x232984,
    uf: _0xc45233,
    ml: _0x26f6fd,
    Xa: _0x2f003d,
    Gb: _0x50da83,
    Ta: _0x45ff65,
    wf: _0x58ec4d,
    xf: _0x26cc8,
    Vb: _0x4d019f,
    Ub: _0x55ca4d,
    ef: _0x276d29,
    ra: _0x1086fe,
    pa: _0x1ec368,
    qa: _0x46b60f,
    df: _0x75c69d,
    gf: _0x5e44e0,
    ac: _0x3a9a94,
    $b: _0xa997ef,
    bc: _0x144ef6,
    vf: _0x475625,
    Wb: _0x4fdce3,
    Yb: _0x5a6f20,
    Xb: _0x4b2432,
    Zb: _0x791de1,
    _b: _0x8bf79b,
    Ad: _0x593717,
    Vf: _0x44c41f,
    Uf: _0x397dc4,
    sa: _0x292888,
    Rf: _0x304c51,
    xg: _0x2b5177,
    ta: _0x20ab5f,
    Jf: _0x5e7a33,
    Lf: _0x3f241f,
    A: _0x425810,
    $: _0x2b2d77,
    Bc: _0x508125,
    yb: _0x1d4c59,
    af: _0x316afc,
    nb: _0x10b154,
    xa: _0x44a6e6,
    b: _0x2e7c84,
    bf: _0x51fc7b,
    eg: _0x2c8b3a,
    fg: _0x26bbcb,
    Ab: _0x5337d3,
    vg: _0x3cb085,
    Pa: _0x42f483,
    Gi: _0x3d62b8,
    Di: _0x120423,
    oc: _0x3ab015,
    mh: _0x50676d,
    Ga: _0x4b8d23,
    Ci: _0x319e87,
    Lg: _0x48bbd8,
    Kg: _0x519a95,
    zi: _0x10f716,
    Ai: _0x1a9ad0,
    Eg: _0x404c97,
    Bi: _0x3393d6,
    eh: _0x25c208,
    ih: _0xa30aca,
    Ic: _0x2dd28f,
    Jc: _0x2fb463,
    Kc: _0x38291c,
    Yg: _0x432402,
    xi: _0x4acae9,
    yi: _0x509d02,
    vi: _0x3ed8fd,
    ri: _0x3ea788,
    Ag: _0x2c902d,
    zg: _0x56f595,
    yg: _0x550a35,
    si: _0x1ec9d3,
    ti: _0x45ebf2,
    ui: _0x571179,
    Ud: _0x4683ae,
    lb: _0x58b848,
    qi: _0x5d7c77,
    oi: _0x48a121,
    _g: _0x26d2df,
    pi: _0x1777fe,
    ch: _0x161edc,
    Pg: _0x2299b4,
    ni: _0x4f9a5b,
    Gc: _0xcf97fa,
    mi: _0x53eda1,
    li: _0x30803a,
    ki: _0x5d4058,
    ji: _0x1f66c4,
    ii: _0xe91101,
    hi: _0x23a9dd,
    fb: _0x58262c,
    gi: _0x417bf1,
    Dg: _0x472b6a,
    ei: _0x8f1aae,
    kc: _0x524933,
    di: _0x56e5b4,
    fh: _0x14c0c0,
    kh: _0x161594,
    Fa: _0x300322,
    Ea: _0x14a253,
    ci: _0xcca049,
    bi: _0x27a0e8,
    ai: _0x198423,
    Zh: _0x35e228,
    Rg: _0xc3adc7,
    Og: _0x4b68bf,
    _h: _0xe7c758,
    Qg: _0x3a2089,
    $h: _0x5a7535,
    Yh: _0x1bd9fc,
    pc: _0x56998d,
    nh: _0x232d83,
    jc: _0x1f55d9,
    Vh: _0x46f4ec,
    Wh: _0x415253,
    Ug: _0x17412e,
    W: _0x30d152,
    U: _0x445527,
    za: _0x54e244,
    Da: _0x515245,
    Uh: _0x337678,
    Qh: _0x430382,
    nc: _0x23d294,
    Rh: _0x1586c6,
    Cg: _0x10ffb9,
    Th: _0x5f0c9b,
    hh: _0x49f537,
    lh: _0x374675,
    Sh: _0x5eb873,
    Mi: _0xf89d97,
    kb: _0x2b90f5,
    cb: _0x2cce64,
    ca: _0x20c559,
    ba: _0x35a5dc,
    Li: _0x3eabb6,
    Qf: _0x1bf806,
    Ph: _0x397bdc,
    Oh: _0x45b519,
    Fi: _0x5ddb2f,
    Ha: _0x22bb36,
    Gg: _0x54fbd0,
    lc: _0x442acc,
    Ii: _0x5e97e5,
    _: _0x3dbaa2,
    qh: _0x5485be,
    ph: _0x11ef85,
    Xh: _0x4c9928,
    Mh: _0x4cab24,
    Ec: _0x349f4f,
    Nh: _0x1be73b,
    Hi: _0x4da15f,
    Lh: _0x4856cd,
    Vg: _0x2b04f0,
    Jh: _0x3215ac,
    Ig: _0x155f69,
    bb: _0x964389,
    ka: _0x115dfd,
    Dc: _0x53ae1c,
    Ki: _0x528dba,
    eb: _0x21b684,
    Ei: _0x5b72d0,
    jh: _0x434bda,
    Hh: _0x567905,
    Sg: _0x57f89b,
    Ih: _0x33132f,
    Cc: _0x33f0e0,
    mc: _0x2646f6,
    Bg: _0x3e6ea5,
    Mg: _0xfef323,
    ea: _0x38cf06,
    Gh: _0x4fb10c,
    Wg: _0x222db3,
    Fg: _0x3c421c,
    jb: _0x583eb5,
    Eh: _0x3f1580,
    Fh: _0x22b9df,
    Bh: _0x5a1bed,
    Ch: _0x2248b7,
    zh: _0x568063,
    ah: _0x221288,
    Ah: _0x182650,
    ib: _0x5a91f5,
    yh: _0x4c4f4a,
    Zg: _0x49c79c,
    $g: _0x40f292,
    xh: _0x396458,
    bh: _0x1f7acd,
    dh: _0x482049,
    qc: _0x484f15,
    Aa: _0x53ae52,
    rc: _0x4aa00e,
    sc: _0x2bb865,
    tc: _0x5a64a4,
    uc: _0x13702a,
    vc: _0x4faaa5,
    hb: _0x563466,
    wc: _0x373c7d,
    xc: _0x16564a,
    da: _0x29a26b,
    yc: _0x4add2e,
    zc: _0x26f2d0,
    db: _0x133b67,
    Ac: _0x48eeba,
    Ba: _0xa81d5f,
    Tg: _0x42f038,
    sh: _0x31d492,
    Ji: _0x410f98,
    uh: _0x55a0d9,
    vh: _0x31cf3a,
    Jg: _0x5aafdd,
    wh: _0x2c8919,
    gb: _0x2811fc,
    sd: _0x2ce06e,
    Ik: _0x720e97,
    ld: _0x16d1e3,
    K: _0x530871,
    R: _0x2bbf5d,
    yd: _0x7814f9,
    qd: _0x3468bd,
    xe: _0x3f92d1,
    td: _0x3e70a8,
    fa: _0x2c6b42,
    M: _0x5e07ad,
    D: _0x199f56,
    xd: _0x4c910c,
    md: _0x3287ae,
    w: _0x3e1d63,
    ub: _0x24e37e,
    vd: _0x510f8a,
    d: _0x11ef0f,
    Hk: _0x13446e,
    Q: _0x2c6454,
    X: _0x4d9f75,
    Sj: _0x4b83ca,
    rd: _0x40cd92,
    La: _0x1acdb8,
    c: _0x281fcc,
    Ka: _0x3636f8,
    kd: _0x237161,
    f: _0x43739b,
    Oi: _0xa97a38,
    Wi: _0x8f037b,
    hd: _0xbcee09,
    Pi: _0x49b19a,
    Ni: _0x32e520,
    gd: _0x422e8f,
    q: _0x1e63c7,
    Ia: _0x1d2be3,
    Vi: _0x24957c,
    s: _0x112a2b,
    u: _0x18f1c6,
    kj: _0x23b4f5,
    y: _0x1866d8,
    E: _0x37106b,
    N: _0x2c0e50,
    Qc: _0x1d7b6c,
    aa: _0x334211,
    id: _0x34d6a7,
    de: _0x3dc90f,
    ke: _0x285377,
    Le: _0x5ce812,
    je: _0x476d07,
    _e: _0x5497e1,
    pe: _0xa251dc,
    Xe: _0x54a033,
    Ye: _0x4e700f,
    Ke: _0x13c931,
    ue: _0x38ecc2,
    He: _0x4452e8,
    he: _0x47250a,
    Xd: _0x4ba026,
    ie: _0x34cf7f,
    De: _0x19c0f8,
    re: _0x1f8d85,
    Ne: _0x128b39,
    Ze: _0x3a0679,
    Ce: _0x4f8b2b,
    We: _0x2c5532,
    Ee: _0x4bde43,
    Ve: _0x5352cd,
    Qe: _0x28b5ce,
    $e: _0x1eb4a4,
    Vd: _0x1641f1,
    $d: _0x514f9e,
    Pe: _0x4226d8,
    we: _0x28fc78,
    se: _0x384b13,
    Wd: _0x2edfd1,
    ee: _0x53f2fe,
    Ge: _0x4c5f4f,
    Je: _0x43b0fe,
    Oe: _0xd55db5,
    h: _0x10b9be,
    pd: _0x59c757,
    g: _0x4f6a19,
    Wf: _0x194503,
    z: _0x45e975,
    Uc: _0x1bef0d,
    Mj: _0x654814,
    F: _0x46f776,
    T: _0x1b2792,
    m: _0x35bf11,
    bj: _0x3bc930,
    Oa: _0x148e6d,
    cj: _0x3f30aa,
    Rc: _0x57d80f,
    Z: _0x49aa6f,
    Lj: _0x2415c4,
    jl: _0x1ba351,
    J: _0x4575b2,
    H: _0x324d1a,
    e: _0x2522a3,
    ed: _0x37b93a,
    ma: _0x54048c,
    Ma: _0x433efc,
    n: _0xc1bfe7,
    lj: _0x3878f8,
    ye: _0x3e4ab1,
    Ja: _0x1d7b10,
    jd: _0x494221,
    r: _0x4ea8d5,
    t: _0x27e9f4,
    B: _0x3d612f,
    jj: _0x34192d,
    ij: _0x30cd60,
    P: _0x2c84c7,
    qe: _0x30fe85,
    I: _0x361f41,
    Y: _0x1713de,
    Vc: _0x201df5,
    Na: _0x30a18f,
    ud: _0x46d093,
    fd: _0x7a644d,
    L: _0x39535f,
    oe: _0x5ca650,
    Te: _0x25c3d9,
    Fe: _0x14eff9,
    te: _0x6a04ea,
    ve: _0x3adeba,
    Ue: _0x241e87,
    ze: _0x2dc982,
    Yd: _0x50f0d2,
    me: _0xb8ec62,
    ge: _0x25a572,
    Re: _0x3c8507,
    Se: _0xa6e45,
    fe: _0x27eaf7,
    Me: _0x5c8eb7,
    ae: _0x102161,
    le: _0x2beabd,
    be: _0x2dcebf,
    Zd: _0x436ea6,
    _d: _0x27f9c5,
    k: _0x45bcc7,
    vb: _0x48ddcc,
    v: _0x47833a,
    Sa: _0x4ac136,
    Ua: _0x228f93,
    Qa: _0x45f645,
    na: _0x135964,
    xb: _0x18707f
  };
  var _0x56f8af = _0xaeb44b();
  var _0x20f37e = _0x25e483.___wasm_call_ctors = function () {
    return (_0x20f37e = _0x25e483.___wasm_call_ctors = _0x25e483.asm.ol).apply(null, arguments);
  };
  var _0x287a98 = _0x25e483._ReleaseKeys = function () {
    return (_0x287a98 = _0x25e483._ReleaseKeys = _0x25e483.asm.pl).apply(null, arguments);
  };
  var _0x21dd66 = _0x25e483._SendMessageFloat = function () {
    return (_0x21dd66 = _0x25e483._SendMessageFloat = _0x25e483.asm.ql).apply(null, arguments);
  };
  var _0x1a3b7a = _0x25e483._SendMessageString = function () {
    return (_0x1a3b7a = _0x25e483._SendMessageString = _0x25e483.asm.rl).apply(null, arguments);
  };
  var _0xaf9aea = _0x25e483._SendMessage = function () {
    return (_0xaf9aea = _0x25e483._SendMessage = _0x25e483.asm.sl).apply(null, arguments);
  };
  var _0xa3d261 = _0x25e483._SetFullscreen = function () {
    return (_0xa3d261 = _0x25e483._SetFullscreen = _0x25e483.asm.tl).apply(null, arguments);
  };
  var _0x5bc0b7 = _0x25e483._main = function () {
    return (_0x5bc0b7 = _0x25e483._main = _0x25e483.asm.ul).apply(null, arguments);
  };
  var _0x1bc4a9 = _0x25e483.___errno_location = function () {
    return (_0x1bc4a9 = _0x25e483.___errno_location = _0x25e483.asm.vl).apply(null, arguments);
  };
  var _0x93a75e = _0x25e483._htonl = function () {
    return (_0x93a75e = _0x25e483._htonl = _0x25e483.asm.wl).apply(null, arguments);
  };
  var _0xb5b8aa = _0x25e483._htons = function () {
    return (_0xb5b8aa = _0x25e483._htons = _0x25e483.asm.xl).apply(null, arguments);
  };
  var _0x1fe869 = _0x25e483._ntohs = function () {
    return (_0x1fe869 = _0x25e483._ntohs = _0x25e483.asm.yl).apply(null, arguments);
  };
  var _0x28d792 = _0x25e483.__get_tzname = function () {
    return (_0x28d792 = _0x25e483.__get_tzname = _0x25e483.asm.zl).apply(null, arguments);
  };
  var _0x3caf48 = _0x25e483.__get_daylight = function () {
    return (_0x3caf48 = _0x25e483.__get_daylight = _0x25e483.asm.Al).apply(null, arguments);
  };
  var _0x572774 = _0x25e483.__get_timezone = function () {
    return (_0x572774 = _0x25e483.__get_timezone = _0x25e483.asm.Bl).apply(null, arguments);
  };
  var _0x19cca3 = _0x25e483.stackSave = function () {
    return (_0x19cca3 = _0x25e483.stackSave = _0x25e483.asm.Cl).apply(null, arguments);
  };
  var _0x4cb3d3 = _0x25e483.stackRestore = function () {
    return (_0x4cb3d3 = _0x25e483.stackRestore = _0x25e483.asm.Dl).apply(null, arguments);
  };
  var _0x216ace = _0x25e483.stackAlloc = function () {
    return (_0x216ace = _0x25e483.stackAlloc = _0x25e483.asm.El).apply(null, arguments);
  };
  var _0x5ed159 = _0x25e483._setThrew = function () {
    return (_0x5ed159 = _0x25e483._setThrew = _0x25e483.asm.Fl).apply(null, arguments);
  };
  var _0x1110b4 = _0x25e483.___cxa_can_catch = function () {
    return (_0x1110b4 = _0x25e483.___cxa_can_catch = _0x25e483.asm.Gl).apply(null, arguments);
  };
  var _0x1d4edb = _0x25e483.___cxa_is_pointer_type = function () {
    return (_0x1d4edb = _0x25e483.___cxa_is_pointer_type = _0x25e483.asm.Hl).apply(null, arguments);
  };
  var _0x434dac = _0x25e483._malloc = function () {
    return (_0x434dac = _0x25e483._malloc = _0x25e483.asm.Il).apply(null, arguments);
  };
  var _0x41b1b9 = _0x25e483._free = function () {
    return (_0x41b1b9 = _0x25e483._free = _0x25e483.asm.Jl).apply(null, arguments);
  };
  var _0x1c001e = _0x25e483._memalign = function () {
    return (_0x1c001e = _0x25e483._memalign = _0x25e483.asm.Kl).apply(null, arguments);
  };
  var _0x5e14c3 = _0x25e483._memset = function () {
    return (_0x5e14c3 = _0x25e483._memset = _0x25e483.asm.Ll).apply(null, arguments);
  };
  var _0x1f4561 = _0x25e483._strlen = function () {
    return (_0x1f4561 = _0x25e483._strlen = _0x25e483.asm.Ml).apply(null, arguments);
  };
  var _0x4e2d6 = _0x25e483.dynCall_iidiiii = function () {
    return (_0x4e2d6 = _0x25e483.dynCall_iidiiii = _0x25e483.asm.Ol).apply(null, arguments);
  };
  var _0x2879a8 = _0x25e483.dynCall_vii = function () {
    return (_0x2879a8 = _0x25e483.dynCall_vii = _0x25e483.asm.Pl).apply(null, arguments);
  };
  var _0x55c798 = _0x25e483.dynCall_iii = function () {
    return (_0x55c798 = _0x25e483.dynCall_iii = _0x25e483.asm.Ql).apply(null, arguments);
  };
  var _0x214d37 = _0x25e483.dynCall_ii = function () {
    return (_0x214d37 = _0x25e483.dynCall_ii = _0x25e483.asm.Rl).apply(null, arguments);
  };
  var _0x517871 = _0x25e483.dynCall_iiii = function () {
    return (_0x517871 = _0x25e483.dynCall_iiii = _0x25e483.asm.Sl).apply(null, arguments);
  };
  var _0x5dc0a0 = _0x25e483.dynCall_jiji = function () {
    return (_0x5dc0a0 = _0x25e483.dynCall_jiji = _0x25e483.asm.Tl).apply(null, arguments);
  };
  var _0x1c1a57 = _0x25e483.dynCall_vi = function () {
    return (_0x1c1a57 = _0x25e483.dynCall_vi = _0x25e483.asm.Ul).apply(null, arguments);
  };
  var _0x4665ee = _0x25e483.dynCall_iiiii = function () {
    return (_0x4665ee = _0x25e483.dynCall_iiiii = _0x25e483.asm.Vl).apply(null, arguments);
  };
  var _0x1e002d = _0x25e483.dynCall_viii = function () {
    return (_0x1e002d = _0x25e483.dynCall_viii = _0x25e483.asm.Wl).apply(null, arguments);
  };
  var _0x6b7b41 = _0x25e483.dynCall_viiiiii = function () {
    return (_0x6b7b41 = _0x25e483.dynCall_viiiiii = _0x25e483.asm.Xl).apply(null, arguments);
  };
  var _0x5ef341 = _0x25e483.dynCall_viiiii = function () {
    return (_0x5ef341 = _0x25e483.dynCall_viiiii = _0x25e483.asm.Yl).apply(null, arguments);
  };
  var _0x1c4e1b = _0x25e483.dynCall_viiii = function () {
    return (_0x1c4e1b = _0x25e483.dynCall_viiii = _0x25e483.asm.Zl).apply(null, arguments);
  };
  var _0xb17174 = _0x25e483.dynCall_iiiiii = function () {
    return (_0xb17174 = _0x25e483.dynCall_iiiiii = _0x25e483.asm._l).apply(null, arguments);
  };
  var _0x2ffc5e = _0x25e483.dynCall_iiij = function () {
    return (_0x2ffc5e = _0x25e483.dynCall_iiij = _0x25e483.asm.$l).apply(null, arguments);
  };
  var _0x57cc4c = _0x25e483.dynCall_v = function () {
    return (_0x57cc4c = _0x25e483.dynCall_v = _0x25e483.asm.am).apply(null, arguments);
  };
  var _0x4bb256 = _0x25e483.dynCall_i = function () {
    return (_0x4bb256 = _0x25e483.dynCall_i = _0x25e483.asm.bm).apply(null, arguments);
  };
  var _0x1bbbaa = _0x25e483.dynCall_iiiiiiii = function () {
    return (_0x1bbbaa = _0x25e483.dynCall_iiiiiiii = _0x25e483.asm.cm).apply(null, arguments);
  };
  var _0x570c8a = _0x25e483.dynCall_iiijiii = function () {
    return (_0x570c8a = _0x25e483.dynCall_iiijiii = _0x25e483.asm.dm).apply(null, arguments);
  };
  var _0x1d1723 = _0x25e483.dynCall_iij = function () {
    return (_0x1d1723 = _0x25e483.dynCall_iij = _0x25e483.asm.em).apply(null, arguments);
  };
  var _0x181730 = _0x25e483.dynCall_iiiiiii = function () {
    return (_0x181730 = _0x25e483.dynCall_iiiiiii = _0x25e483.asm.fm).apply(null, arguments);
  };
  var _0x554168 = _0x25e483.dynCall_jii = function () {
    return (_0x554168 = _0x25e483.dynCall_jii = _0x25e483.asm.gm).apply(null, arguments);
  };
  var _0x1f7a8e = _0x25e483.dynCall_viiiiiii = function () {
    return (_0x1f7a8e = _0x25e483.dynCall_viiiiiii = _0x25e483.asm.hm).apply(null, arguments);
  };
  var _0x177ed5 = _0x25e483.dynCall_viiji = function () {
    return (_0x177ed5 = _0x25e483.dynCall_viiji = _0x25e483.asm.im).apply(null, arguments);
  };
  var _0x4a3cb5 = _0x25e483.dynCall_fii = function () {
    return (_0x4a3cb5 = _0x25e483.dynCall_fii = _0x25e483.asm.jm).apply(null, arguments);
  };
  var _0x5f03c2 = _0x25e483.dynCall_viifi = function () {
    return (_0x5f03c2 = _0x25e483.dynCall_viifi = _0x25e483.asm.km).apply(null, arguments);
  };
  var _0xb1ba65 = _0x25e483.dynCall_viiff = function () {
    return (_0xb1ba65 = _0x25e483.dynCall_viiff = _0x25e483.asm.lm).apply(null, arguments);
  };
  var _0x34715d = _0x25e483.dynCall_vijii = function () {
    return (_0x34715d = _0x25e483.dynCall_vijii = _0x25e483.asm.mm).apply(null, arguments);
  };
  var _0xfd65f3 = _0x25e483.dynCall_jiii = function () {
    return (_0xfd65f3 = _0x25e483.dynCall_jiii = _0x25e483.asm.nm).apply(null, arguments);
  };
  var _0xd73490 = _0x25e483.dynCall_viiij = function () {
    return (_0xd73490 = _0x25e483.dynCall_viiij = _0x25e483.asm.om).apply(null, arguments);
  };
  var _0x3e396f = _0x25e483.dynCall_jiiijii = function () {
    return (_0x3e396f = _0x25e483.dynCall_jiiijii = _0x25e483.asm.pm).apply(null, arguments);
  };
  var _0x2f52eb = _0x25e483.dynCall_viiijiii = function () {
    return (_0x2f52eb = _0x25e483.dynCall_viiijiii = _0x25e483.asm.qm).apply(null, arguments);
  };
  var _0x930751 = _0x25e483.dynCall_iijji = function () {
    return (_0x930751 = _0x25e483.dynCall_iijji = _0x25e483.asm.rm).apply(null, arguments);
  };
  var _0x1a42af = _0x25e483.dynCall_iiddi = function () {
    return (_0x1a42af = _0x25e483.dynCall_iiddi = _0x25e483.asm.sm).apply(null, arguments);
  };
  var _0x31d0bd = _0x25e483.dynCall_iiffi = function () {
    return (_0x31d0bd = _0x25e483.dynCall_iiffi = _0x25e483.asm.tm).apply(null, arguments);
  };
  var _0x3a1ca2 = _0x25e483.dynCall_iiiifii = function () {
    return (_0x3a1ca2 = _0x25e483.dynCall_iiiifii = _0x25e483.asm.um).apply(null, arguments);
  };
  var _0x5b3f89 = _0x25e483.dynCall_iiifii = function () {
    return (_0x5b3f89 = _0x25e483.dynCall_iiifii = _0x25e483.asm.vm).apply(null, arguments);
  };
  var _0x4f2b8b = _0x25e483.dynCall_viiiifii = function () {
    return (_0x4f2b8b = _0x25e483.dynCall_viiiifii = _0x25e483.asm.wm).apply(null, arguments);
  };
  var _0x1fc16f = _0x25e483.dynCall_viiffi = function () {
    return (_0x1fc16f = _0x25e483.dynCall_viiffi = _0x25e483.asm.xm).apply(null, arguments);
  };
  var _0x425d9a = _0x25e483.dynCall_viiiiiiiiiiii = function () {
    return (_0x425d9a = _0x25e483.dynCall_viiiiiiiiiiii = _0x25e483.asm.ym).apply(null, arguments);
  };
  var _0x1d0333 = _0x25e483.dynCall_viiiiiiiiiiiii = function () {
    return (_0x1d0333 = _0x25e483.dynCall_viiiiiiiiiiiii = _0x25e483.asm.zm).apply(null, arguments);
  };
  var _0x257176 = _0x25e483.dynCall_viiiiiiiiiiiiii = function () {
    return (_0x257176 = _0x25e483.dynCall_viiiiiiiiiiiiii = _0x25e483.asm.Am).apply(null, arguments);
  };
  var _0xaaaaaa = _0x25e483.dynCall_viiiiiiiiiiiiiii = function () {
    return (_0xaaaaaa = _0x25e483.dynCall_viiiiiiiiiiiiiii = _0x25e483.asm.Bm).apply(null, arguments);
  };
  var _0x54f068 = _0x25e483.dynCall_viiiiiiiiiiiiiiii = function () {
    return (_0x54f068 = _0x25e483.dynCall_viiiiiiiiiiiiiiii = _0x25e483.asm.Cm).apply(null, arguments);
  };
  var _0x22529b = _0x25e483.dynCall_viiiiiiiiiiiiiiiii = function () {
    return (_0x22529b = _0x25e483.dynCall_viiiiiiiiiiiiiiiii = _0x25e483.asm.Dm).apply(null, arguments);
  };
  var _0x29a2a4 = _0x25e483.dynCall_viiiiiiiiiiiiiiiiii = function () {
    return (_0x29a2a4 = _0x25e483.dynCall_viiiiiiiiiiiiiiiiii = _0x25e483.asm.Em).apply(null, arguments);
  };
  var _0x5208a7 = _0x25e483.dynCall_viidi = function () {
    return (_0x5208a7 = _0x25e483.dynCall_viidi = _0x25e483.asm.Fm).apply(null, arguments);
  };
  var _0x53e5a1 = _0x25e483.dynCall_viiidi = function () {
    return (_0x53e5a1 = _0x25e483.dynCall_viiidi = _0x25e483.asm.Gm).apply(null, arguments);
  };
  var _0x1f7732 = _0x25e483.dynCall_viiiji = function () {
    return (_0x1f7732 = _0x25e483.dynCall_viiiji = _0x25e483.asm.Hm).apply(null, arguments);
  };
  var _0x298d71 = _0x25e483.dynCall_viiifi = function () {
    return (_0x298d71 = _0x25e483.dynCall_viiifi = _0x25e483.asm.Im).apply(null, arguments);
  };
  var _0x32cec7 = _0x25e483.dynCall_vifffi = function () {
    return (_0x32cec7 = _0x25e483.dynCall_vifffi = _0x25e483.asm.Jm).apply(null, arguments);
  };
  var _0x3ba542 = _0x25e483.dynCall_viidiji = function () {
    return (_0x3ba542 = _0x25e483.dynCall_viidiji = _0x25e483.asm.Km).apply(null, arguments);
  };
  var _0x2fa4e6 = _0x25e483.dynCall_viidjii = function () {
    return (_0x2fa4e6 = _0x25e483.dynCall_viidjii = _0x25e483.asm.Lm).apply(null, arguments);
  };
  var _0x19f224 = _0x25e483.dynCall_vijijii = function () {
    return (_0x19f224 = _0x25e483.dynCall_vijijii = _0x25e483.asm.Mm).apply(null, arguments);
  };
  var _0x140e1e = _0x25e483.dynCall_viiiiiiii = function () {
    return (_0x140e1e = _0x25e483.dynCall_viiiiiiii = _0x25e483.asm.Nm).apply(null, arguments);
  };
  var _0x1d3981 = _0x25e483.dynCall_viiiiiiiii = function () {
    return (_0x1d3981 = _0x25e483.dynCall_viiiiiiiii = _0x25e483.asm.Om).apply(null, arguments);
  };
  var _0x1109d8 = _0x25e483.dynCall_viiiiiiiiii = function () {
    return (_0x1109d8 = _0x25e483.dynCall_viiiiiiiiii = _0x25e483.asm.Pm).apply(null, arguments);
  };
  var _0x401b21 = _0x25e483.dynCall_viiiiiiiiiii = function () {
    return (_0x401b21 = _0x25e483.dynCall_viiiiiiiiiii = _0x25e483.asm.Qm).apply(null, arguments);
  };
  var _0x409bc1 = _0x25e483.dynCall_fiii = function () {
    return (_0x409bc1 = _0x25e483.dynCall_fiii = _0x25e483.asm.Rm).apply(null, arguments);
  };
  var _0xac20d5 = _0x25e483.dynCall_diii = function () {
    return (_0xac20d5 = _0x25e483.dynCall_diii = _0x25e483.asm.Sm).apply(null, arguments);
  };
  var _0x329840 = _0x25e483.dynCall_dii = function () {
    return (_0x329840 = _0x25e483.dynCall_dii = _0x25e483.asm.Tm).apply(null, arguments);
  };
  var _0x3033de = _0x25e483.dynCall_ifi = function () {
    return (_0x3033de = _0x25e483.dynCall_ifi = _0x25e483.asm.Um).apply(null, arguments);
  };
  var _0x2af74c = _0x25e483.dynCall_idi = function () {
    return (_0x2af74c = _0x25e483.dynCall_idi = _0x25e483.asm.Vm).apply(null, arguments);
  };
  var _0xbd39f5 = _0x25e483.dynCall_jiiii = function () {
    return (_0xbd39f5 = _0x25e483.dynCall_jiiii = _0x25e483.asm.Wm).apply(null, arguments);
  };
  var _0x26c80c = _0x25e483.dynCall_iiiiji = function () {
    return (_0x26c80c = _0x25e483.dynCall_iiiiji = _0x25e483.asm.Xm).apply(null, arguments);
  };
  var _0x23026f = _0x25e483.dynCall_iiji = function () {
    return (_0x23026f = _0x25e483.dynCall_iiji = _0x25e483.asm.Ym).apply(null, arguments);
  };
  var _0x3b295d = _0x25e483.dynCall_ddiii = function () {
    return (_0x3b295d = _0x25e483.dynCall_ddiii = _0x25e483.asm.Zm).apply(null, arguments);
  };
  var _0x56e65d = _0x25e483.dynCall_vifii = function () {
    return (_0x56e65d = _0x25e483.dynCall_vifii = _0x25e483.asm._m).apply(null, arguments);
  };
  var _0x35da27 = _0x25e483.dynCall_viji = function () {
    return (_0x35da27 = _0x25e483.dynCall_viji = _0x25e483.asm.$m).apply(null, arguments);
  };
  var _0x1bf862 = _0x25e483.dynCall_vidi = function () {
    return (_0x1bf862 = _0x25e483.dynCall_vidi = _0x25e483.asm.an).apply(null, arguments);
  };
  var _0x414fd7 = _0x25e483.dynCall_vifi = function () {
    return (_0x414fd7 = _0x25e483.dynCall_vifi = _0x25e483.asm.bn).apply(null, arguments);
  };
  var _0x47c498 = _0x25e483.dynCall_fffi = function () {
    return (_0x47c498 = _0x25e483.dynCall_fffi = _0x25e483.asm.cn).apply(null, arguments);
  };
  var _0xcd823b = _0x25e483.dynCall_ijji = function () {
    return (_0xcd823b = _0x25e483.dynCall_ijji = _0x25e483.asm.dn).apply(null, arguments);
  };
  var _0x434319 = _0x25e483.dynCall_jji = function () {
    return (_0x434319 = _0x25e483.dynCall_jji = _0x25e483.asm.en).apply(null, arguments);
  };
  var _0x513c4e = _0x25e483.dynCall_jjji = function () {
    return (_0x513c4e = _0x25e483.dynCall_jjji = _0x25e483.asm.fn).apply(null, arguments);
  };
  var _0x29ba83 = _0x25e483.dynCall_dddi = function () {
    return (_0x29ba83 = _0x25e483.dynCall_dddi = _0x25e483.asm.gn).apply(null, arguments);
  };
  var _0x1f2663 = _0x25e483.dynCall_diiii = function () {
    return (_0x1f2663 = _0x25e483.dynCall_diiii = _0x25e483.asm.hn).apply(null, arguments);
  };
  var _0x12550d = _0x25e483.dynCall_iidi = function () {
    return (_0x12550d = _0x25e483.dynCall_iidi = _0x25e483.asm.jn).apply(null, arguments);
  };
  var _0x47c1ac = _0x25e483.dynCall_iifi = function () {
    return (_0x47c1ac = _0x25e483.dynCall_iifi = _0x25e483.asm.kn).apply(null, arguments);
  };
  var _0x368144 = _0x25e483.dynCall_vijiiii = function () {
    return (_0x368144 = _0x25e483.dynCall_vijiiii = _0x25e483.asm.ln).apply(null, arguments);
  };
  var _0x2bdbac = _0x25e483.dynCall_ji = function () {
    return (_0x2bdbac = _0x25e483.dynCall_ji = _0x25e483.asm.mn).apply(null, arguments);
  };
  var _0x5c21a7 = _0x25e483.dynCall_viifii = function () {
    return (_0x5c21a7 = _0x25e483.dynCall_viifii = _0x25e483.asm.nn).apply(null, arguments);
  };
  var _0xf1e071 = _0x25e483.dynCall_viffi = function () {
    return (_0xf1e071 = _0x25e483.dynCall_viffi = _0x25e483.asm.on).apply(null, arguments);
  };
  var _0x4e79e8 = _0x25e483.dynCall_iifii = function () {
    return (_0x4e79e8 = _0x25e483.dynCall_iifii = _0x25e483.asm.pn).apply(null, arguments);
  };
  var _0x6af63c = _0x25e483.dynCall_iiiiiiiiiiiii = function () {
    return (_0x6af63c = _0x25e483.dynCall_iiiiiiiiiiiii = _0x25e483.asm.qn).apply(null, arguments);
  };
  var _0x3db5f9 = _0x25e483.dynCall_viiffiiiiiiiiiiiii = function () {
    return (_0x3db5f9 = _0x25e483.dynCall_viiffiiiiiiiiiiiii = _0x25e483.asm.rn).apply(null, arguments);
  };
  var _0x5638d3 = _0x25e483.dynCall_viiiifiiifiiiiiiii = function () {
    return (_0x5638d3 = _0x25e483.dynCall_viiiifiiifiiiiiiii = _0x25e483.asm.sn).apply(null, arguments);
  };
  var _0x667ead = _0x25e483.dynCall_iiffifiiii = function () {
    return (_0x667ead = _0x25e483.dynCall_iiffifiiii = _0x25e483.asm.tn).apply(null, arguments);
  };
  var _0x551b50 = _0x25e483.dynCall_jidi = function () {
    return (_0x551b50 = _0x25e483.dynCall_jidi = _0x25e483.asm.un).apply(null, arguments);
  };
  var _0x2a3e55 = _0x25e483.dynCall_iji = function () {
    return (_0x2a3e55 = _0x25e483.dynCall_iji = _0x25e483.asm.vn).apply(null, arguments);
  };
  var _0x12034e = _0x25e483.dynCall_jdi = function () {
    return (_0x12034e = _0x25e483.dynCall_jdi = _0x25e483.asm.wn).apply(null, arguments);
  };
  var _0x2ccd27 = _0x25e483.dynCall_vfi = function () {
    return (_0x2ccd27 = _0x25e483.dynCall_vfi = _0x25e483.asm.xn).apply(null, arguments);
  };
  var _0x20c6d6 = _0x25e483.dynCall_iiiiiiiiii = function () {
    return (_0x20c6d6 = _0x25e483.dynCall_iiiiiiiiii = _0x25e483.asm.yn).apply(null, arguments);
  };
  var _0x23d6b5 = _0x25e483.dynCall_iiffii = function () {
    return (_0x23d6b5 = _0x25e483.dynCall_iiffii = _0x25e483.asm.zn).apply(null, arguments);
  };
  var _0x486058 = _0x25e483.dynCall_fi = function () {
    return (_0x486058 = _0x25e483.dynCall_fi = _0x25e483.asm.An).apply(null, arguments);
  };
  var _0x3d7334 = _0x25e483.dynCall_viffffi = function () {
    return (_0x3d7334 = _0x25e483.dynCall_viffffi = _0x25e483.asm.Bn).apply(null, arguments);
  };
  var _0xf1dbb8 = _0x25e483.dynCall_viijii = function () {
    return (_0xf1dbb8 = _0x25e483.dynCall_viijii = _0x25e483.asm.Cn).apply(null, arguments);
  };
  var _0xb5d725 = _0x25e483.dynCall_fiiii = function () {
    return (_0xb5d725 = _0x25e483.dynCall_fiiii = _0x25e483.asm.Dn).apply(null, arguments);
  };
  var _0x5c0aed = _0x25e483.dynCall_di = function () {
    return (_0x5c0aed = _0x25e483.dynCall_di = _0x25e483.asm.En).apply(null, arguments);
  };
  var _0x3c4b00 = _0x25e483.dynCall_iiiiiiiii = function () {
    return (_0x3c4b00 = _0x25e483.dynCall_iiiiiiiii = _0x25e483.asm.Fn).apply(null, arguments);
  };
  var _0x1a9c4d = _0x25e483.dynCall_viiiifi = function () {
    return (_0x1a9c4d = _0x25e483.dynCall_viiiifi = _0x25e483.asm.Gn).apply(null, arguments);
  };
  var _0x59d7ac = _0x25e483.dynCall_iiiiiiiiiiiiiiiiiii = function () {
    return (_0x59d7ac = _0x25e483.dynCall_iiiiiiiiiiiiiiiiiii = _0x25e483.asm.Hn).apply(null, arguments);
  };
  var _0x7f41a = _0x25e483.dynCall_viiiifiii = function () {
    return (_0x7f41a = _0x25e483.dynCall_viiiifiii = _0x25e483.asm.In).apply(null, arguments);
  };
  var _0xf57d02 = _0x25e483.dynCall_vifffiii = function () {
    return (_0xf57d02 = _0x25e483.dynCall_vifffiii = _0x25e483.asm.Jn).apply(null, arguments);
  };
  var _0x4fd048 = _0x25e483.dynCall_viiifii = function () {
    return (_0x4fd048 = _0x25e483.dynCall_viiifii = _0x25e483.asm.Kn).apply(null, arguments);
  };
  var _0x35522e = _0x25e483.dynCall_viiiffi = function () {
    return (_0x35522e = _0x25e483.dynCall_viiiffi = _0x25e483.asm.Ln).apply(null, arguments);
  };
  var _0x10a9cd = _0x25e483.dynCall_iiifi = function () {
    return (_0x10a9cd = _0x25e483.dynCall_iiifi = _0x25e483.asm.Mn).apply(null, arguments);
  };
  var _0x490028 = _0x25e483.dynCall_iiiiffi = function () {
    return (_0x490028 = _0x25e483.dynCall_iiiiffi = _0x25e483.asm.Nn).apply(null, arguments);
  };
  var _0x37a8ae = _0x25e483.dynCall_viiiiffi = function () {
    return (_0x37a8ae = _0x25e483.dynCall_viiiiffi = _0x25e483.asm.On).apply(null, arguments);
  };
  var _0x354923 = _0x25e483.dynCall_iiiifiiiiiiiii = function () {
    return (_0x354923 = _0x25e483.dynCall_iiiifiiiiiiiii = _0x25e483.asm.Pn).apply(null, arguments);
  };
  var _0x321353 = _0x25e483.dynCall_viffiiiiiiiiiiiii = function () {
    return (_0x321353 = _0x25e483.dynCall_viffiiiiiiiiiiiii = _0x25e483.asm.Qn).apply(null, arguments);
  };
  var _0x42b67c = _0x25e483.dynCall_viiifffiiiiii = function () {
    return (_0x42b67c = _0x25e483.dynCall_viiifffiiiiii = _0x25e483.asm.Rn).apply(null, arguments);
  };
  var _0x3ce31b = _0x25e483.dynCall_viiffffffiiiiifi = function () {
    return (_0x3ce31b = _0x25e483.dynCall_viiffffffiiiiifi = _0x25e483.asm.Sn).apply(null, arguments);
  };
  var _0x3a5acd = _0x25e483.dynCall_jjii = function () {
    return (_0x3a5acd = _0x25e483.dynCall_jjii = _0x25e483.asm.Tn).apply(null, arguments);
  };
  var _0xf1ed49 = _0x25e483.dynCall_iijiii = function () {
    return (_0xf1ed49 = _0x25e483.dynCall_iijiii = _0x25e483.asm.Un).apply(null, arguments);
  };
  var _0x301360 = _0x25e483.dynCall_viiiidi = function () {
    return (_0x301360 = _0x25e483.dynCall_viiiidi = _0x25e483.asm.Vn).apply(null, arguments);
  };
  var _0x46a5d6 = _0x25e483.dynCall_iiiiiiidii = function () {
    return (_0x46a5d6 = _0x25e483.dynCall_iiiiiiidii = _0x25e483.asm.Wn).apply(null, arguments);
  };
  var _0x3a3672 = _0x25e483.dynCall_viiiidij = function () {
    return (_0x3a3672 = _0x25e483.dynCall_viiiidij = _0x25e483.asm.Xn).apply(null, arguments);
  };
  var _0x8548b3 = _0x25e483.dynCall_dji = function () {
    return (_0x8548b3 = _0x25e483.dynCall_dji = _0x25e483.asm.Yn).apply(null, arguments);
  };
  var _0x4622bf = _0x25e483.dynCall_viiiiiiiiifi = function () {
    return (_0x4622bf = _0x25e483.dynCall_viiiiiiiiifi = _0x25e483.asm.Zn).apply(null, arguments);
  };
  var _0x347a6b = _0x25e483.dynCall_jiiji = function () {
    return (_0x347a6b = _0x25e483.dynCall_jiiji = _0x25e483.asm._n).apply(null, arguments);
  };
  var _0xc78a8b = _0x25e483.dynCall_viij = function () {
    return (_0xc78a8b = _0x25e483.dynCall_viij = _0x25e483.asm.$n).apply(null, arguments);
  };
  var _0x5e6709 = _0x25e483.dynCall_iijii = function () {
    return (_0x5e6709 = _0x25e483.dynCall_iijii = _0x25e483.asm.ao).apply(null, arguments);
  };
  var _0x5080cc = _0x25e483.dynCall_viiijj = function () {
    return (_0x5080cc = _0x25e483.dynCall_viiijj = _0x25e483.asm.bo).apply(null, arguments);
  };
  var _0x2e7597 = _0x25e483.dynCall_ijiii = function () {
    return (_0x2e7597 = _0x25e483.dynCall_ijiii = _0x25e483.asm.co).apply(null, arguments);
  };
  var _0x16399d = _0x25e483.dynCall_viiiiiiifiifiii = function () {
    return (_0x16399d = _0x25e483.dynCall_viiiiiiifiifiii = _0x25e483.asm.eo).apply(null, arguments);
  };
  var _0x301921 = _0x25e483.dynCall_viiiiiiifddfiii = function () {
    return (_0x301921 = _0x25e483.dynCall_viiiiiiifddfiii = _0x25e483.asm.fo).apply(null, arguments);
  };
  var _0x50a4d3 = _0x25e483.dynCall_viiiiiiifjjfiii = function () {
    return (_0x50a4d3 = _0x25e483.dynCall_viiiiiiifjjfiii = _0x25e483.asm.go).apply(null, arguments);
  };
  var _0x3f9486 = _0x25e483.dynCall_viiiiiiiffffiii = function () {
    return (_0x3f9486 = _0x25e483.dynCall_viiiiiiiffffiii = _0x25e483.asm.ho).apply(null, arguments);
  };
  var _0x401df3 = _0x25e483.dynCall_iiiiidi = function () {
    return (_0x401df3 = _0x25e483.dynCall_iiiiidi = _0x25e483.asm.io).apply(null, arguments);
  };
  var _0x29f676 = _0x25e483.dynCall_diiid = function () {
    return (_0x29f676 = _0x25e483.dynCall_diiid = _0x25e483.asm.jo).apply(null, arguments);
  };
  var _0x324d93 = _0x25e483.dynCall_jiiij = function () {
    return (_0x324d93 = _0x25e483.dynCall_jiiij = _0x25e483.asm.ko).apply(null, arguments);
  };
  var _0x1b4525 = _0x25e483.dynCall_fiiif = function () {
    return (_0x1b4525 = _0x25e483.dynCall_fiiif = _0x25e483.asm.lo).apply(null, arguments);
  };
  var _0x3b9539 = _0x25e483.dynCall_viif = function () {
    return (_0x3b9539 = _0x25e483.dynCall_viif = _0x25e483.asm.mo).apply(null, arguments);
  };
  var _0x9b07e7 = _0x25e483.dynCall_iiiji = function () {
    return (_0x9b07e7 = _0x25e483.dynCall_iiiji = _0x25e483.asm.no).apply(null, arguments);
  };
  var _0x3a10c6 = _0x25e483.dynCall_viidii = function () {
    return (_0x3a10c6 = _0x25e483.dynCall_viidii = _0x25e483.asm.oo).apply(null, arguments);
  };
  var _0x47cdd2 = _0x25e483.dynCall_vidiii = function () {
    return (_0x47cdd2 = _0x25e483.dynCall_vidiii = _0x25e483.asm.po).apply(null, arguments);
  };
  var _0x26e4c5 = _0x25e483.dynCall_viiddi = function () {
    return (_0x26e4c5 = _0x25e483.dynCall_viiddi = _0x25e483.asm.qo).apply(null, arguments);
  };
  var _0x44f0ec = _0x25e483.dynCall_iiiiiiiiiiiiiii = function () {
    return (_0x44f0ec = _0x25e483.dynCall_iiiiiiiiiiiiiii = _0x25e483.asm.ro).apply(null, arguments);
  };
  var _0x42dcbd = _0x25e483.dynCall_iiiiiiiiiiiiiiii = function () {
    return (_0x42dcbd = _0x25e483.dynCall_iiiiiiiiiiiiiiii = _0x25e483.asm.so).apply(null, arguments);
  };
  var _0x142c43 = _0x25e483.dynCall_iiiiiiiiiiiiiiiii = function () {
    return (_0x142c43 = _0x25e483.dynCall_iiiiiiiiiiiiiiiii = _0x25e483.asm.to).apply(null, arguments);
  };
  var _0x41dfee = _0x25e483.dynCall_iiiiiiiiiiiiiiiiii = function () {
    return (_0x41dfee = _0x25e483.dynCall_iiiiiiiiiiiiiiiiii = _0x25e483.asm.uo).apply(null, arguments);
  };
  var _0xbf0abf = _0x25e483.dynCall_fifi = function () {
    return (_0xbf0abf = _0x25e483.dynCall_fifi = _0x25e483.asm.vo).apply(null, arguments);
  };
  var _0x2e9c74 = _0x25e483.dynCall_fiifi = function () {
    return (_0x2e9c74 = _0x25e483.dynCall_fiifi = _0x25e483.asm.wo).apply(null, arguments);
  };
  var _0x1a74f6 = _0x25e483.dynCall_iiidii = function () {
    return (_0x1a74f6 = _0x25e483.dynCall_iiidii = _0x25e483.asm.xo).apply(null, arguments);
  };
  var _0x159484 = _0x25e483.dynCall_iiiifi = function () {
    return (_0x159484 = _0x25e483.dynCall_iiiifi = _0x25e483.asm.yo).apply(null, arguments);
  };
  var _0x490225 = _0x25e483.dynCall_iiiiiiiiiii = function () {
    return (_0x490225 = _0x25e483.dynCall_iiiiiiiiiii = _0x25e483.asm.zo).apply(null, arguments);
  };
  var _0x882880 = _0x25e483.dynCall_viiiijiii = function () {
    return (_0x882880 = _0x25e483.dynCall_viiiijiii = _0x25e483.asm.Ao).apply(null, arguments);
  };
  var _0x4c2658 = _0x25e483.dynCall_fiffffi = function () {
    return (_0x4c2658 = _0x25e483.dynCall_fiffffi = _0x25e483.asm.Bo).apply(null, arguments);
  };
  var _0x465926 = _0x25e483.dynCall_iiiiiiiiiiii = function () {
    return (_0x465926 = _0x25e483.dynCall_iiiiiiiiiiii = _0x25e483.asm.Co).apply(null, arguments);
  };
  var _0x4d1b0e = _0x25e483.dynCall_iiiiiiiiiiiiii = function () {
    return (_0x4d1b0e = _0x25e483.dynCall_iiiiiiiiiiiiii = _0x25e483.asm.Do).apply(null, arguments);
  };
  var _0x232925 = _0x25e483.dynCall_viijiiijiiii = function () {
    return (_0x232925 = _0x25e483.dynCall_viijiiijiiii = _0x25e483.asm.Eo).apply(null, arguments);
  };
  var _0x113b46 = _0x25e483.dynCall_iiiiij = function () {
    return (_0x113b46 = _0x25e483.dynCall_iiiiij = _0x25e483.asm.Fo).apply(null, arguments);
  };
  var _0x346417 = _0x25e483.dynCall_vijjji = function () {
    return (_0x346417 = _0x25e483.dynCall_vijjji = _0x25e483.asm.Go).apply(null, arguments);
  };
  var _0xb0662e = _0x25e483.dynCall_iiijii = function () {
    return (_0xb0662e = _0x25e483.dynCall_iiijii = _0x25e483.asm.Ho).apply(null, arguments);
  };
  var _0x425aea = _0x25e483.dynCall_iijiiii = function () {
    return (_0x425aea = _0x25e483.dynCall_iijiiii = _0x25e483.asm.Io).apply(null, arguments);
  };
  var _0x3942d5 = _0x25e483.dynCall_jijiii = function () {
    return (_0x3942d5 = _0x25e483.dynCall_jijiii = _0x25e483.asm.Jo).apply(null, arguments);
  };
  var _0x5083ff = _0x25e483.dynCall_iijiiiiii = function () {
    return (_0x5083ff = _0x25e483.dynCall_iijiiiiii = _0x25e483.asm.Ko).apply(null, arguments);
  };
  var _0x3c1c88 = _0x25e483.dynCall_iijjiiiiii = function () {
    return (_0x3c1c88 = _0x25e483.dynCall_iijjiiiiii = _0x25e483.asm.Lo).apply(null, arguments);
  };
  var _0x32f216 = _0x25e483.dynCall_iiiijjii = function () {
    return (_0x32f216 = _0x25e483.dynCall_iiiijjii = _0x25e483.asm.Mo).apply(null, arguments);
  };
  var _0x2a0c08 = _0x25e483.dynCall_viijji = function () {
    return (_0x2a0c08 = _0x25e483.dynCall_viijji = _0x25e483.asm.No).apply(null, arguments);
  };
  var _0x2e5d5b = _0x25e483.dynCall_vijiii = function () {
    return (_0x2e5d5b = _0x25e483.dynCall_vijiii = _0x25e483.asm.Oo).apply(null, arguments);
  };
  var _0x3aa13d = _0x25e483.dynCall_fiiffi = function () {
    return (_0x3aa13d = _0x25e483.dynCall_fiiffi = _0x25e483.asm.Po).apply(null, arguments);
  };
  var _0x434426 = _0x25e483.dynCall_viiififii = function () {
    return (_0x434426 = _0x25e483.dynCall_viiififii = _0x25e483.asm.Qo).apply(null, arguments);
  };
  var _0x405d4d = _0x25e483.dynCall_j = function () {
    return (_0x405d4d = _0x25e483.dynCall_j = _0x25e483.asm.Ro).apply(null, arguments);
  };
  var _0x1282eb = _0x25e483.dynCall_jijj = function () {
    return (_0x1282eb = _0x25e483.dynCall_jijj = _0x25e483.asm.So).apply(null, arguments);
  };
  var _0xe20e29 = _0x25e483.dynCall_iiiiiiiiiji = function () {
    return (_0xe20e29 = _0x25e483.dynCall_iiiiiiiiiji = _0x25e483.asm.To).apply(null, arguments);
  };
  var _0x255395 = _0x25e483.dynCall_vji = function () {
    return (_0x255395 = _0x25e483.dynCall_vji = _0x25e483.asm.Uo).apply(null, arguments);
  };
  var _0x12b0cb = _0x25e483.dynCall_fiifii = function () {
    return (_0x12b0cb = _0x25e483.dynCall_fiifii = _0x25e483.asm.Vo).apply(null, arguments);
  };
  var _0x56dab1 = _0x25e483.dynCall_iiiiff = function () {
    return (_0x56dab1 = _0x25e483.dynCall_iiiiff = _0x25e483.asm.Wo).apply(null, arguments);
  };
  var _0x2dc654 = _0x25e483.dynCall_iiiiidii = function () {
    return (_0x2dc654 = _0x25e483.dynCall_iiiiidii = _0x25e483.asm.Xo).apply(null, arguments);
  };
  var _0x162d62 = _0x25e483.dynCall_jiiiiiiiiii = function () {
    return (_0x162d62 = _0x25e483.dynCall_jiiiiiiiiii = _0x25e483.asm.Yo).apply(null, arguments);
  };
  var _0x1d4616 = _0x25e483.dynCall_viijiiiiii = function () {
    return (_0x1d4616 = _0x25e483.dynCall_viijiiiiii = _0x25e483.asm.Zo).apply(null, arguments);
  };
  var _0x40e746 = _0x25e483.dynCall_vjjjiiii = function () {
    return (_0x40e746 = _0x25e483.dynCall_vjjjiiii = _0x25e483.asm._o).apply(null, arguments);
  };
  var _0xf2d84b = _0x25e483.dynCall_vjiiiii = function () {
    return (_0xf2d84b = _0x25e483.dynCall_vjiiiii = _0x25e483.asm.$o).apply(null, arguments);
  };
  var _0x1029b8 = _0x25e483.dynCall_jiiiii = function () {
    return (_0x1029b8 = _0x25e483.dynCall_jiiiii = _0x25e483.asm.ap).apply(null, arguments);
  };
  var _0x3c3bcc = _0x25e483.dynCall_viiifffi = function () {
    return (_0x3c3bcc = _0x25e483.dynCall_viiifffi = _0x25e483.asm.bp).apply(null, arguments);
  };
  var _0x198364 = _0x25e483.dynCall_fifii = function () {
    return (_0x198364 = _0x25e483.dynCall_fifii = _0x25e483.asm.cp).apply(null, arguments);
  };
  var _0x393977 = _0x25e483.dynCall_fiffi = function () {
    return (_0x393977 = _0x25e483.dynCall_fiffi = _0x25e483.asm.dp).apply(null, arguments);
  };
  var _0x48a442 = _0x25e483.dynCall_fiiifi = function () {
    return (_0x48a442 = _0x25e483.dynCall_fiiifi = _0x25e483.asm.ep).apply(null, arguments);
  };
  var _0x59e474 = _0x25e483.dynCall_viiifiii = function () {
    return (_0x59e474 = _0x25e483.dynCall_viiifiii = _0x25e483.asm.fp).apply(null, arguments);
  };
  var _0x3ede50 = _0x25e483.dynCall_fifffi = function () {
    return (_0x3ede50 = _0x25e483.dynCall_fifffi = _0x25e483.asm.gp).apply(null, arguments);
  };
  var _0x3fec9c = _0x25e483.dynCall_iiifiii = function () {
    return (_0x3fec9c = _0x25e483.dynCall_iiifiii = _0x25e483.asm.hp).apply(null, arguments);
  };
  var _0x18a723 = _0x25e483.dynCall_iifffffiii = function () {
    return (_0x18a723 = _0x25e483.dynCall_iifffffiii = _0x25e483.asm.ip).apply(null, arguments);
  };
  var _0x5a5051 = _0x25e483.dynCall_viiiffii = function () {
    return (_0x5a5051 = _0x25e483.dynCall_viiiffii = _0x25e483.asm.jp).apply(null, arguments);
  };
  var _0x1e85ac = _0x25e483.dynCall_viiiiffiii = function () {
    return (_0x1e85ac = _0x25e483.dynCall_viiiiffiii = _0x25e483.asm.kp).apply(null, arguments);
  };
  var _0x20e91c = _0x25e483.dynCall_viiiiffiiii = function () {
    return (_0x20e91c = _0x25e483.dynCall_viiiiffiiii = _0x25e483.asm.lp).apply(null, arguments);
  };
  var _0x5a0fea = _0x25e483.dynCall_viiifiiii = function () {
    return (_0x5a0fea = _0x25e483.dynCall_viiifiiii = _0x25e483.asm.mp).apply(null, arguments);
  };
  var _0x33a0b9 = _0x25e483.dynCall_vifiiifi = function () {
    return (_0x33a0b9 = _0x25e483.dynCall_vifiiifi = _0x25e483.asm.np).apply(null, arguments);
  };
  var _0x105585 = _0x25e483.dynCall_viifiiifi = function () {
    return (_0x105585 = _0x25e483.dynCall_viifiiifi = _0x25e483.asm.op).apply(null, arguments);
  };
  var _0x5ceee5 = _0x25e483.dynCall_viffiifi = function () {
    return (_0x5ceee5 = _0x25e483.dynCall_viffiifi = _0x25e483.asm.pp).apply(null, arguments);
  };
  var _0x18898b = _0x25e483.dynCall_ffi = function () {
    return (_0x18898b = _0x25e483.dynCall_ffi = _0x25e483.asm.qp).apply(null, arguments);
  };
  var _0x3cab5a = _0x25e483.dynCall_viiiiffffi = function () {
    return (_0x3cab5a = _0x25e483.dynCall_viiiiffffi = _0x25e483.asm.rp).apply(null, arguments);
  };
  var _0x34de5d = _0x25e483.dynCall_fiiiii = function () {
    return (_0x34de5d = _0x25e483.dynCall_fiiiii = _0x25e483.asm.sp).apply(null, arguments);
  };
  var _0x3fe5cd = _0x25e483.dynCall_fiiiiii = function () {
    return (_0x3fe5cd = _0x25e483.dynCall_fiiiiii = _0x25e483.asm.tp).apply(null, arguments);
  };
  var _0x4bb39b = _0x25e483.dynCall_ffffi = function () {
    return (_0x4bb39b = _0x25e483.dynCall_ffffi = _0x25e483.asm.up).apply(null, arguments);
  };
  var _0x242ebe = _0x25e483.dynCall_ffffffi = function () {
    return (_0x242ebe = _0x25e483.dynCall_ffffffi = _0x25e483.asm.vp).apply(null, arguments);
  };
  var _0x4451f2 = _0x25e483.dynCall_viiifffiiiiiiifffiiii = function () {
    return (_0x4451f2 = _0x25e483.dynCall_viiifffiiiiiiifffiiii = _0x25e483.asm.wp).apply(null, arguments);
  };
  var _0x47b8b0 = _0x25e483.dynCall_viiffii = function () {
    return (_0x47b8b0 = _0x25e483.dynCall_viiffii = _0x25e483.asm.xp).apply(null, arguments);
  };
  var _0x370594 = _0x25e483.dynCall_viiiffiii = function () {
    return (_0x370594 = _0x25e483.dynCall_viiiffiii = _0x25e483.asm.yp).apply(null, arguments);
  };
  var _0x5a247e = _0x25e483.dynCall_viiiijii = function () {
    return (_0x5a247e = _0x25e483.dynCall_viiiijii = _0x25e483.asm.zp).apply(null, arguments);
  };
  var _0x9e5e0f = _0x25e483.dynCall_vifiiii = function () {
    return (_0x9e5e0f = _0x25e483.dynCall_vifiiii = _0x25e483.asm.Ap).apply(null, arguments);
  };
  var _0x41e977 = _0x25e483.dynCall_iiiffi = function () {
    return (_0x41e977 = _0x25e483.dynCall_iiiffi = _0x25e483.asm.Bp).apply(null, arguments);
  };
  var _0x1d7c29 = _0x25e483.dynCall_iiififii = function () {
    return (_0x1d7c29 = _0x25e483.dynCall_iiififii = _0x25e483.asm.Cp).apply(null, arguments);
  };
  var _0x280b45 = _0x25e483.dynCall_iiifiiiii = function () {
    return (_0x280b45 = _0x25e483.dynCall_iiifiiiii = _0x25e483.asm.Dp).apply(null, arguments);
  };
  var _0x3c7cf4 = _0x25e483.dynCall_iifiifiiii = function () {
    return (_0x3c7cf4 = _0x25e483.dynCall_iifiifiiii = _0x25e483.asm.Ep).apply(null, arguments);
  };
  var _0x40ef8d = _0x25e483.dynCall_iiiifiii = function () {
    return (_0x40ef8d = _0x25e483.dynCall_iiiifiii = _0x25e483.asm.Fp).apply(null, arguments);
  };
  var _0x8a1fc4 = _0x25e483.dynCall_iiifiiii = function () {
    return (_0x8a1fc4 = _0x25e483.dynCall_iiifiiii = _0x25e483.asm.Gp).apply(null, arguments);
  };
  var _0x25a717 = _0x25e483.dynCall_iiiffiii = function () {
    return (_0x25a717 = _0x25e483.dynCall_iiiffiii = _0x25e483.asm.Hp).apply(null, arguments);
  };
  var _0x3c4265 = _0x25e483.dynCall_iiiiifii = function () {
    return (_0x3c4265 = _0x25e483.dynCall_iiiiifii = _0x25e483.asm.Ip).apply(null, arguments);
  };
  var _0x379ee9 = _0x25e483.dynCall_iifiifffii = function () {
    return (_0x379ee9 = _0x25e483.dynCall_iifiifffii = _0x25e483.asm.Jp).apply(null, arguments);
  };
  var _0x4658d3 = _0x25e483.dynCall_iiiiiiffi = function () {
    return (_0x4658d3 = _0x25e483.dynCall_iiiiiiffi = _0x25e483.asm.Kp).apply(null, arguments);
  };
  var _0x45fa43 = _0x25e483.dynCall_iifffi = function () {
    return (_0x45fa43 = _0x25e483.dynCall_iifffi = _0x25e483.asm.Lp).apply(null, arguments);
  };
  var _0x18769d = _0x25e483.dynCall_iiifffi = function () {
    return (_0x18769d = _0x25e483.dynCall_iiifffi = _0x25e483.asm.Mp).apply(null, arguments);
  };
  var _0x1cb330 = _0x25e483.dynCall_iifiii = function () {
    return (_0x1cb330 = _0x25e483.dynCall_iifiii = _0x25e483.asm.Np).apply(null, arguments);
  };
  var _0x2c41e0 = _0x25e483.dynCall_iifiiii = function () {
    return (_0x2c41e0 = _0x25e483.dynCall_iifiiii = _0x25e483.asm.Op).apply(null, arguments);
  };
  var _0x594ad6 = _0x25e483.dynCall_viiiiifi = function () {
    return (_0x594ad6 = _0x25e483.dynCall_viiiiifi = _0x25e483.asm.Pp).apply(null, arguments);
  };
  var _0x5abb19 = _0x25e483.dynCall_viiiiifii = function () {
    return (_0x5abb19 = _0x25e483.dynCall_viiiiifii = _0x25e483.asm.Qp).apply(null, arguments);
  };
  var _0x4b37a4 = _0x25e483.dynCall_viiiiiifi = function () {
    return (_0x4b37a4 = _0x25e483.dynCall_viiiiiifi = _0x25e483.asm.Rp).apply(null, arguments);
  };
  var _0x3fdafb = _0x25e483.dynCall_viiiiiifii = function () {
    return (_0x3fdafb = _0x25e483.dynCall_viiiiiifii = _0x25e483.asm.Sp).apply(null, arguments);
  };
  var _0x3e5be5 = _0x25e483.dynCall_ifffi = function () {
    return (_0x3e5be5 = _0x25e483.dynCall_ifffi = _0x25e483.asm.Tp).apply(null, arguments);
  };
  var _0x479419 = _0x25e483.dynCall_iffffi = function () {
    return (_0x479419 = _0x25e483.dynCall_iffffi = _0x25e483.asm.Up).apply(null, arguments);
  };
  var _0x4b6c6f = _0x25e483.dynCall_vffi = function () {
    return (_0x4b6c6f = _0x25e483.dynCall_vffi = _0x25e483.asm.Vp).apply(null, arguments);
  };
  var _0x189ad9 = _0x25e483.dynCall_ifiiiii = function () {
    return (_0x189ad9 = _0x25e483.dynCall_ifiiiii = _0x25e483.asm.Wp).apply(null, arguments);
  };
  var _0x2418f6 = _0x25e483.dynCall_vfiiiii = function () {
    return (_0x2418f6 = _0x25e483.dynCall_vfiiiii = _0x25e483.asm.Xp).apply(null, arguments);
  };
  var _0x2663b2 = _0x25e483.dynCall_vfiiiiiiiiii = function () {
    return (_0x2663b2 = _0x25e483.dynCall_vfiiiiiiiiii = _0x25e483.asm.Yp).apply(null, arguments);
  };
  var _0x522cc0 = _0x25e483.dynCall_vfii = function () {
    return (_0x522cc0 = _0x25e483.dynCall_vfii = _0x25e483.asm.Zp).apply(null, arguments);
  };
  var _0x587732 = _0x25e483.dynCall_iifiiiii = function () {
    return (_0x587732 = _0x25e483.dynCall_iifiiiii = _0x25e483.asm._p).apply(null, arguments);
  };
  var _0x3a1e78 = _0x25e483.dynCall_vififii = function () {
    return (_0x3a1e78 = _0x25e483.dynCall_vififii = _0x25e483.asm.$p).apply(null, arguments);
  };
  var _0x299210 = _0x25e483.dynCall_ifii = function () {
    return (_0x299210 = _0x25e483.dynCall_ifii = _0x25e483.asm.aq).apply(null, arguments);
  };
  var _0x4adf3a = _0x25e483.dynCall_iiiiiifiii = function () {
    return (_0x4adf3a = _0x25e483.dynCall_iiiiiifiii = _0x25e483.asm.bq).apply(null, arguments);
  };
  var _0x20bad4 = _0x25e483.dynCall_viiiiiifiii = function () {
    return (_0x20bad4 = _0x25e483.dynCall_viiiiiifiii = _0x25e483.asm.cq).apply(null, arguments);
  };
  var _0x28d2e4 = _0x25e483.dynCall_iifiiiiii = function () {
    return (_0x28d2e4 = _0x25e483.dynCall_iifiiiiii = _0x25e483.asm.dq).apply(null, arguments);
  };
  var _0x366f59 = _0x25e483.dynCall_iifffiiii = function () {
    return (_0x366f59 = _0x25e483.dynCall_iifffiiii = _0x25e483.asm.eq).apply(null, arguments);
  };
  var _0xf9211d = _0x25e483.dynCall_iiffiiii = function () {
    return (_0xf9211d = _0x25e483.dynCall_iiffiiii = _0x25e483.asm.fq).apply(null, arguments);
  };
  var _0x3045e1 = _0x25e483.dynCall_viiiifffiiii = function () {
    return (_0x3045e1 = _0x25e483.dynCall_viiiifffiiii = _0x25e483.asm.gq).apply(null, arguments);
  };
  var _0x57aa09 = _0x25e483.dynCall_viiiifiiiiii = function () {
    return (_0x57aa09 = _0x25e483.dynCall_viiiifiiiiii = _0x25e483.asm.hq).apply(null, arguments);
  };
  var _0x381ceb = _0x25e483.dynCall_iiiiiffi = function () {
    return (_0x381ceb = _0x25e483.dynCall_iiiiiffi = _0x25e483.asm.iq).apply(null, arguments);
  };
  var _0x443adc = _0x25e483.dynCall_viiiiiiifiii = function () {
    return (_0x443adc = _0x25e483.dynCall_viiiiiiifiii = _0x25e483.asm.jq).apply(null, arguments);
  };
  var _0x26a2cc = _0x25e483.dynCall_fiiifii = function () {
    return (_0x26a2cc = _0x25e483.dynCall_fiiifii = _0x25e483.asm.kq).apply(null, arguments);
  };
  var _0x35f134 = _0x25e483.dynCall_iiiffii = function () {
    return (_0x35f134 = _0x25e483.dynCall_iiiffii = _0x25e483.asm.lq).apply(null, arguments);
  };
  var _0x138618 = _0x25e483.dynCall_fifiii = function () {
    return (_0x138618 = _0x25e483.dynCall_fifiii = _0x25e483.asm.mq).apply(null, arguments);
  };
  var _0x43468b = _0x25e483.dynCall_viiiiffii = function () {
    return (_0x43468b = _0x25e483.dynCall_viiiiffii = _0x25e483.asm.nq).apply(null, arguments);
  };
  var _0x5b3a86 = _0x25e483.dynCall_viiiiifffi = function () {
    return (_0x5b3a86 = _0x25e483.dynCall_viiiiifffi = _0x25e483.asm.oq).apply(null, arguments);
  };
  var _0x3e27d2 = _0x25e483.dynCall_iiiiifi = function () {
    return (_0x3e27d2 = _0x25e483.dynCall_iiiiifi = _0x25e483.asm.pq).apply(null, arguments);
  };
  var _0x8813a1 = _0x25e483.dynCall_fifiiiii = function () {
    return (_0x8813a1 = _0x25e483.dynCall_fifiiiii = _0x25e483.asm.qq).apply(null, arguments);
  };
  var _0x3aaad3 = _0x25e483.dynCall_viifiii = function () {
    return (_0x3aaad3 = _0x25e483.dynCall_viifiii = _0x25e483.asm.rq).apply(null, arguments);
  };
  var _0x49ccf7 = _0x25e483.dynCall_vifiiiii = function () {
    return (_0x49ccf7 = _0x25e483.dynCall_vifiiiii = _0x25e483.asm.sq).apply(null, arguments);
  };
  var _0x29aaf0 = _0x25e483.dynCall_viffiifffiii = function () {
    return (_0x29aaf0 = _0x25e483.dynCall_viffiifffiii = _0x25e483.asm.tq).apply(null, arguments);
  };
  var _0x1ce167 = _0x25e483.dynCall_viffiiiii = function () {
    return (_0x1ce167 = _0x25e483.dynCall_viffiiiii = _0x25e483.asm.uq).apply(null, arguments);
  };
  var _0x374e42 = _0x25e483.dynCall_vifffffi = function () {
    return (_0x374e42 = _0x25e483.dynCall_vifffffi = _0x25e483.asm.vq).apply(null, arguments);
  };
  var _0x16f9ba = _0x25e483.dynCall_vifiii = function () {
    return (_0x16f9ba = _0x25e483.dynCall_vifiii = _0x25e483.asm.wq).apply(null, arguments);
  };
  var _0x44ba35 = _0x25e483.dynCall_iifiifiii = function () {
    return (_0x44ba35 = _0x25e483.dynCall_iifiifiii = _0x25e483.asm.xq).apply(null, arguments);
  };
  var _0x47f369 = _0x25e483.dynCall_viddi = function () {
    return (_0x47f369 = _0x25e483.dynCall_viddi = _0x25e483.asm.yq).apply(null, arguments);
  };
  var _0x4a35d7 = _0x25e483.dynCall_vijji = function () {
    return (_0x4a35d7 = _0x25e483.dynCall_vijji = _0x25e483.asm.zq).apply(null, arguments);
  };
  var _0xf6399c = _0x25e483.dynCall_vijjjji = function () {
    return (_0xf6399c = _0x25e483.dynCall_vijjjji = _0x25e483.asm.Aq).apply(null, arguments);
  };
  var _0x1041da = _0x25e483.dynCall_iijjjji = function () {
    return (_0x1041da = _0x25e483.dynCall_iijjjji = _0x25e483.asm.Bq).apply(null, arguments);
  };
  var _0x179eb1 = _0x25e483.dynCall_iiidi = function () {
    return (_0x179eb1 = _0x25e483.dynCall_iiidi = _0x25e483.asm.Cq).apply(null, arguments);
  };
  var _0x4f230d = _0x25e483.dynCall_iijjjjiii = function () {
    return (_0x4f230d = _0x25e483.dynCall_iijjjjiii = _0x25e483.asm.Dq).apply(null, arguments);
  };
  var _0x4ac1bf = _0x25e483.dynCall_viiiiiifiifiiii = function () {
    return (_0x4ac1bf = _0x25e483.dynCall_viiiiiifiifiiii = _0x25e483.asm.Eq).apply(null, arguments);
  };
  var _0x263251 = _0x25e483.dynCall_iiffffiii = function () {
    return (_0x263251 = _0x25e483.dynCall_iiffffiii = _0x25e483.asm.Fq).apply(null, arguments);
  };
  var _0x3f7c2c = _0x25e483.dynCall_iiidfi = function () {
    return (_0x3f7c2c = _0x25e483.dynCall_iiidfi = _0x25e483.asm.Gq).apply(null, arguments);
  };
  var _0x24aada = _0x25e483.dynCall_iiijfi = function () {
    return (_0x24aada = _0x25e483.dynCall_iiijfi = _0x25e483.asm.Hq).apply(null, arguments);
  };
  var _0x6e29b5 = _0x25e483.dynCall_iiiififi = function () {
    return (_0x6e29b5 = _0x25e483.dynCall_iiiififi = _0x25e483.asm.Iq).apply(null, arguments);
  };
  var _0x5dceb5 = _0x25e483.dynCall_iiiffifiiii = function () {
    return (_0x5dceb5 = _0x25e483.dynCall_iiiffifiiii = _0x25e483.asm.Jq).apply(null, arguments);
  };
  var _0x445301 = _0x25e483.dynCall_iiifiifiii = function () {
    return (_0x445301 = _0x25e483.dynCall_iiifiifiii = _0x25e483.asm.Kq).apply(null, arguments);
  };
  var _0x17822d = _0x25e483.dynCall_iiifiifiiiii = function () {
    return (_0x17822d = _0x25e483.dynCall_iiifiifiiiii = _0x25e483.asm.Lq).apply(null, arguments);
  };
  var _0x329857 = _0x25e483.dynCall_ifffii = function () {
    return (_0x329857 = _0x25e483.dynCall_ifffii = _0x25e483.asm.Mq).apply(null, arguments);
  };
  var _0x5d73d5 = _0x25e483.dynCall_ffffii = function () {
    return (_0x5d73d5 = _0x25e483.dynCall_ffffii = _0x25e483.asm.Nq).apply(null, arguments);
  };
  var _0x423c8a = _0x25e483.dynCall_ffffifi = function () {
    return (_0x423c8a = _0x25e483.dynCall_ffffifi = _0x25e483.asm.Oq).apply(null, arguments);
  };
  var _0x1a76b9 = _0x25e483.dynCall_ffffiffi = function () {
    return (_0x1a76b9 = _0x25e483.dynCall_ffffiffi = _0x25e483.asm.Pq).apply(null, arguments);
  };
  var _0x4ef49f = _0x25e483.dynCall_viiififi = function () {
    return (_0x4ef49f = _0x25e483.dynCall_viiififi = _0x25e483.asm.Qq).apply(null, arguments);
  };
  var _0x18cd05 = _0x25e483.dynCall_viiififfi = function () {
    return (_0x18cd05 = _0x25e483.dynCall_viiififfi = _0x25e483.asm.Rq).apply(null, arguments);
  };
  var _0x5ac011 = _0x25e483.dynCall_ifiii = function () {
    return (_0x5ac011 = _0x25e483.dynCall_ifiii = _0x25e483.asm.Sq).apply(null, arguments);
  };
  var _0xb7c389 = _0x25e483.dynCall_iiffiiiii = function () {
    return (_0xb7c389 = _0x25e483.dynCall_iiffiiiii = _0x25e483.asm.Tq).apply(null, arguments);
  };
  var _0x5176fb = _0x25e483.dynCall_iiffifiii = function () {
    return (_0x5176fb = _0x25e483.dynCall_iiffifiii = _0x25e483.asm.Uq).apply(null, arguments);
  };
  var _0x34a5d9 = _0x25e483.dynCall_iififi = function () {
    return (_0x34a5d9 = _0x25e483.dynCall_iififi = _0x25e483.asm.Vq).apply(null, arguments);
  };
  var _0x101c5d = _0x25e483.dynCall_iiififi = function () {
    return (_0x101c5d = _0x25e483.dynCall_iiififi = _0x25e483.asm.Wq).apply(null, arguments);
  };
  var _0x310451 = _0x25e483.dynCall_iiiiifiiii = function () {
    return (_0x310451 = _0x25e483.dynCall_iiiiifiiii = _0x25e483.asm.Xq).apply(null, arguments);
  };
  var _0x34d8aa = _0x25e483.dynCall_viidiii = function () {
    return (_0x34d8aa = _0x25e483.dynCall_viidiii = _0x25e483.asm.Yq).apply(null, arguments);
  };
  var _0x33326e = _0x25e483.dynCall_diidi = function () {
    return (_0x33326e = _0x25e483.dynCall_diidi = _0x25e483.asm.Zq).apply(null, arguments);
  };
  var _0x5a7d00 = _0x25e483.dynCall_fiifdi = function () {
    return (_0x5a7d00 = _0x25e483.dynCall_fiifdi = _0x25e483.asm._q).apply(null, arguments);
  };
  var _0x1c1821 = _0x25e483.dynCall_viiiiiifddfiiii = function () {
    return (_0x1c1821 = _0x25e483.dynCall_viiiiiifddfiiii = _0x25e483.asm.$q).apply(null, arguments);
  };
  var _0x15c61e = _0x25e483.dynCall_viijiii = function () {
    return (_0x15c61e = _0x25e483.dynCall_viijiii = _0x25e483.asm.ar).apply(null, arguments);
  };
  var _0x27e30b = _0x25e483.dynCall_fiifji = function () {
    return (_0x27e30b = _0x25e483.dynCall_fiifji = _0x25e483.asm.br).apply(null, arguments);
  };
  var _0x1839a5 = _0x25e483.dynCall_viiiiiifjjfiiii = function () {
    return (_0x1839a5 = _0x25e483.dynCall_viiiiiifjjfiiii = _0x25e483.asm.cr).apply(null, arguments);
  };
  var _0x241c0f = _0x25e483.dynCall_viiiiiiffffiiii = function () {
    return (_0x241c0f = _0x25e483.dynCall_viiiiiiffffiiii = _0x25e483.asm.dr).apply(null, arguments);
  };
  var _0x1b1c0b = _0x25e483.dynCall_viifiiii = function () {
    return (_0x1b1c0b = _0x25e483.dynCall_viifiiii = _0x25e483.asm.er).apply(null, arguments);
  };
  var _0x1e08bb = _0x25e483.dynCall_iiiiifiii = function () {
    return (_0x1e08bb = _0x25e483.dynCall_iiiiifiii = _0x25e483.asm.fr).apply(null, arguments);
  };
  var _0xc9243e = _0x25e483.dynCall_fffffi = function () {
    return (_0xc9243e = _0x25e483.dynCall_fffffi = _0x25e483.asm.gr).apply(null, arguments);
  };
  var _0xe71ed3 = _0x25e483.dynCall_fiiffffi = function () {
    return (_0xe71ed3 = _0x25e483.dynCall_fiiffffi = _0x25e483.asm.hr).apply(null, arguments);
  };
  var _0x241f17 = _0x25e483.dynCall_fffifffi = function () {
    return (_0x241f17 = _0x25e483.dynCall_fffifffi = _0x25e483.asm.ir).apply(null, arguments);
  };
  var _0x44215a = _0x25e483.dynCall_ifiiii = function () {
    return (_0x44215a = _0x25e483.dynCall_ifiiii = _0x25e483.asm.jr).apply(null, arguments);
  };
  var _0x4598b1 = _0x25e483.dynCall_idiiiii = function () {
    return (_0x4598b1 = _0x25e483.dynCall_idiiiii = _0x25e483.asm.kr).apply(null, arguments);
  };
  var _0x470425 = _0x25e483.dynCall_idiiii = function () {
    return (_0x470425 = _0x25e483.dynCall_idiiii = _0x25e483.asm.lr).apply(null, arguments);
  };
  var _0x4fa86f = _0x25e483.dynCall_idii = function () {
    return (_0x4fa86f = _0x25e483.dynCall_idii = _0x25e483.asm.mr).apply(null, arguments);
  };
  var _0x4a1a84 = _0x25e483.dynCall_ijii = function () {
    return (_0x4a1a84 = _0x25e483.dynCall_ijii = _0x25e483.asm.nr).apply(null, arguments);
  };
  var _0x4e95cd = _0x25e483.dynCall_iidii = function () {
    return (_0x4e95cd = _0x25e483.dynCall_iidii = _0x25e483.asm.or).apply(null, arguments);
  };
  var _0x2619bd = _0x25e483.dynCall_iidiii = function () {
    return (_0x2619bd = _0x25e483.dynCall_iidiii = _0x25e483.asm.pr).apply(null, arguments);
  };
  var _0x4e9ef3 = _0x25e483.dynCall_iiijiiii = function () {
    return (_0x4e9ef3 = _0x25e483.dynCall_iiijiiii = _0x25e483.asm.qr).apply(null, arguments);
  };
  var _0x9157bb = _0x25e483.dynCall_vjiiii = function () {
    return (_0x9157bb = _0x25e483.dynCall_vjiiii = _0x25e483.asm.rr).apply(null, arguments);
  };
  var _0x2d1673 = _0x25e483.dynCall_iddi = function () {
    return (_0x2d1673 = _0x25e483.dynCall_iddi = _0x25e483.asm.sr).apply(null, arguments);
  };
  var _0x594c84 = _0x25e483.dynCall_viifiifi = function () {
    return (_0x594c84 = _0x25e483.dynCall_viifiifi = _0x25e483.asm.tr).apply(null, arguments);
  };
  var _0x1222bc = _0x25e483.dynCall_vifiifi = function () {
    return (_0x1222bc = _0x25e483.dynCall_vifiifi = _0x25e483.asm.ur).apply(null, arguments);
  };
  var _0x13f736 = _0x25e483.dynCall_viffii = function () {
    return (_0x13f736 = _0x25e483.dynCall_viffii = _0x25e483.asm.vr).apply(null, arguments);
  };
  var _0x349ed0 = _0x25e483.dynCall_viddfffi = function () {
    return (_0x349ed0 = _0x25e483.dynCall_viddfffi = _0x25e483.asm.wr).apply(null, arguments);
  };
  var _0x51fee1 = _0x25e483.dynCall_viidfffi = function () {
    return (_0x51fee1 = _0x25e483.dynCall_viidfffi = _0x25e483.asm.xr).apply(null, arguments);
  };
  var _0x160d99 = _0x25e483.dynCall_vidifffi = function () {
    return (_0x160d99 = _0x25e483.dynCall_vidifffi = _0x25e483.asm.yr).apply(null, arguments);
  };
  var _0xd042f9 = _0x25e483.dynCall_vidii = function () {
    return (_0xd042f9 = _0x25e483.dynCall_vidii = _0x25e483.asm.zr).apply(null, arguments);
  };
  var _0x21c871 = _0x25e483.dynCall_viiiiiiifi = function () {
    return (_0x21c871 = _0x25e483.dynCall_viiiiiiifi = _0x25e483.asm.Ar).apply(null, arguments);
  };
  var _0x4dc95d = _0x25e483.dynCall_iffi = function () {
    return (_0x4dc95d = _0x25e483.dynCall_iffi = _0x25e483.asm.Br).apply(null, arguments);
  };
  var _0x3e042a = _0x25e483.dynCall_viiffffi = function () {
    return (_0x3e042a = _0x25e483.dynCall_viiffffi = _0x25e483.asm.Cr).apply(null, arguments);
  };
  var _0xa37d7c = _0x25e483.dynCall_ffii = function () {
    return (_0xa37d7c = _0x25e483.dynCall_ffii = _0x25e483.asm.Dr).apply(null, arguments);
  };
  var _0x308bba = _0x25e483.dynCall_ddddi = function () {
    return (_0x308bba = _0x25e483.dynCall_ddddi = _0x25e483.asm.Er).apply(null, arguments);
  };
  var _0x573eed = _0x25e483.dynCall_ddi = function () {
    return (_0x573eed = _0x25e483.dynCall_ddi = _0x25e483.asm.Fr).apply(null, arguments);
  };
  var _0x18c2e7 = _0x25e483.dynCall_jijii = function () {
    return (_0x18c2e7 = _0x25e483.dynCall_jijii = _0x25e483.asm.Gr).apply(null, arguments);
  };
  var _0x34860c = _0x25e483.dynCall_iiiiiji = function () {
    return (_0x34860c = _0x25e483.dynCall_iiiiiji = _0x25e483.asm.Hr).apply(null, arguments);
  };
  var _0x42d36b = _0x25e483.dynCall_viiijii = function () {
    return (_0x42d36b = _0x25e483.dynCall_viiijii = _0x25e483.asm.Ir).apply(null, arguments);
  };
  var _0x3bfdc7 = _0x25e483.dynCall_viffffffi = function () {
    return (_0x3bfdc7 = _0x25e483.dynCall_viffffffi = _0x25e483.asm.Jr).apply(null, arguments);
  };
  var _0x3270c1 = _0x25e483.dynCall_ijjiiii = function () {
    return (_0x3270c1 = _0x25e483.dynCall_ijjiiii = _0x25e483.asm.Kr).apply(null, arguments);
  };
  var _0xef819c = _0x25e483.dynCall_vdiiiii = function () {
    return (_0xef819c = _0x25e483.dynCall_vdiiiii = _0x25e483.asm.Lr).apply(null, arguments);
  };
  var _0x4566f6 = _0x25e483.dynCall_diiji = function () {
    return (_0x4566f6 = _0x25e483.dynCall_diiji = _0x25e483.asm.Mr).apply(null, arguments);
  };
  var _0x9c9546 = _0x25e483.dynCall_vjiiiiiiii = function () {
    return (_0x9c9546 = _0x25e483.dynCall_vjiiiiiiii = _0x25e483.asm.Nr).apply(null, arguments);
  };
  var _0x4bad01 = _0x25e483.dynCall_vjiiiiiii = function () {
    return (_0x4bad01 = _0x25e483.dynCall_vjiiiiiii = _0x25e483.asm.Or).apply(null, arguments);
  };
  var _0x12b743 = _0x25e483.dynCall_ijiiii = function () {
    return (_0x12b743 = _0x25e483.dynCall_ijiiii = _0x25e483.asm.Pr).apply(null, arguments);
  };
  var _0x55131d = _0x25e483.dynCall_diji = function () {
    return (_0x55131d = _0x25e483.dynCall_diji = _0x25e483.asm.Qr).apply(null, arguments);
  };
  var _0x8c3cc0 = _0x25e483.dynCall_fidi = function () {
    return (_0x8c3cc0 = _0x25e483.dynCall_fidi = _0x25e483.asm.Rr).apply(null, arguments);
  };
  var _0x56cebe = _0x25e483.dynCall_vfffi = function () {
    return (_0x56cebe = _0x25e483.dynCall_vfffi = _0x25e483.asm.Sr).apply(null, arguments);
  };
  var _0x49250e = _0x25e483.dynCall_vffffi = function () {
    return (_0x49250e = _0x25e483.dynCall_vffffi = _0x25e483.asm.Tr).apply(null, arguments);
  };
  var _0x1d00c1 = _0x25e483.dynCall_vffffiiii = function () {
    return (_0x1d00c1 = _0x25e483.dynCall_vffffiiii = _0x25e483.asm.Ur).apply(null, arguments);
  };
  var _0x1bde86 = _0x25e483.dynCall_vifffii = function () {
    return (_0x1bde86 = _0x25e483.dynCall_vifffii = _0x25e483.asm.Vr).apply(null, arguments);
  };
  var _0xdfa71b = _0x25e483.dynCall_vffffii = function () {
    return (_0xdfa71b = _0x25e483.dynCall_vffffii = _0x25e483.asm.Wr).apply(null, arguments);
  };
  var _0x3058fc = _0x25e483.dynCall_viiiifffi = function () {
    return (_0x3058fc = _0x25e483.dynCall_viiiifffi = _0x25e483.asm.Xr).apply(null, arguments);
  };
  var _0x596a99 = _0x25e483.dynCall_vfiii = function () {
    return (_0x596a99 = _0x25e483.dynCall_vfiii = _0x25e483.asm.Yr).apply(null, arguments);
  };
  var _0x4242c4 = _0x25e483.dynCall_fffifi = function () {
    return (_0x4242c4 = _0x25e483.dynCall_fffifi = _0x25e483.asm.Zr).apply(null, arguments);
  };
  var _0x5d9e7a = _0x25e483.dynCall_viifffi = function () {
    return (_0x5d9e7a = _0x25e483.dynCall_viifffi = _0x25e483.asm._r).apply(null, arguments);
  };
  var _0x1ba1c2 = _0x25e483.dynCall_iiiifiiiii = function () {
    return (_0x1ba1c2 = _0x25e483.dynCall_iiiifiiiii = _0x25e483.asm.$r).apply(null, arguments);
  };
  var _0x30df2a = _0x25e483.dynCall_iiiifiiii = function () {
    return (_0x30df2a = _0x25e483.dynCall_iiiifiiii = _0x25e483.asm.as).apply(null, arguments);
  };
  var _0x4aa9bf = _0x25e483.dynCall_vijjii = function () {
    return (_0x4aa9bf = _0x25e483.dynCall_vijjii = _0x25e483.asm.bs).apply(null, arguments);
  };
  var _0x2ba95e = _0x25e483.dynCall_viiiififfi = function () {
    return (_0x2ba95e = _0x25e483.dynCall_viiiififfi = _0x25e483.asm.cs).apply(null, arguments);
  };
  var _0x19b363 = _0x25e483.dynCall_viiiifiifi = function () {
    return (_0x19b363 = _0x25e483.dynCall_viiiifiifi = _0x25e483.asm.ds).apply(null, arguments);
  };
  var _0x2bc7dd = _0x25e483.dynCall_viiiifiiii = function () {
    return (_0x2bc7dd = _0x25e483.dynCall_viiiifiiii = _0x25e483.asm.es).apply(null, arguments);
  };
  var _0xc764b6 = _0x25e483.dynCall_viiiifiiiii = function () {
    return (_0xc764b6 = _0x25e483.dynCall_viiiifiiiii = _0x25e483.asm.fs).apply(null, arguments);
  };
  var _0x1d6e27 = _0x25e483.dynCall_viiiifiiiiiiii = function () {
    return (_0x1d6e27 = _0x25e483.dynCall_viiiifiiiiiiii = _0x25e483.asm.gs).apply(null, arguments);
  };
  var _0x7a39ec = _0x25e483.dynCall_viiiiiffii = function () {
    return (_0x7a39ec = _0x25e483.dynCall_viiiiiffii = _0x25e483.asm.hs).apply(null, arguments);
  };
  var _0x4cfd3e = _0x25e483.dynCall_viffiii = function () {
    return (_0x4cfd3e = _0x25e483.dynCall_viffiii = _0x25e483.asm.is).apply(null, arguments);
  };
  var _0x532d8f = _0x25e483.dynCall_viffffiii = function () {
    return (_0x532d8f = _0x25e483.dynCall_viffffiii = _0x25e483.asm.js).apply(null, arguments);
  };
  var _0x293896 = _0x25e483.dynCall_viffffii = function () {
    return (_0x293896 = _0x25e483.dynCall_viffffii = _0x25e483.asm.ks).apply(null, arguments);
  };
  var _0x475f14 = _0x25e483.dynCall_viiiififii = function () {
    return (_0x475f14 = _0x25e483.dynCall_viiiififii = _0x25e483.asm.ls).apply(null, arguments);
  };
  var _0x4e83b6 = _0x25e483.dynCall_viiififiii = function () {
    return (_0x4e83b6 = _0x25e483.dynCall_viiififiii = _0x25e483.asm.ms).apply(null, arguments);
  };
  var _0x15bf9e = _0x25e483.dynCall_iiififfi = function () {
    return (_0x15bf9e = _0x25e483.dynCall_iiififfi = _0x25e483.asm.ns).apply(null, arguments);
  };
  var _0x26c32a = _0x25e483.dynCall_viffiiii = function () {
    return (_0x26c32a = _0x25e483.dynCall_viffiiii = _0x25e483.asm.os).apply(null, arguments);
  };
  var _0x3e7f24 = _0x25e483.dynCall_viiiiffffiiii = function () {
    return (_0x3e7f24 = _0x25e483.dynCall_viiiiffffiiii = _0x25e483.asm.ps).apply(null, arguments);
  };
  var _0x164d3c = _0x25e483.dynCall_viifiiiii = function () {
    return (_0x164d3c = _0x25e483.dynCall_viifiiiii = _0x25e483.asm.qs).apply(null, arguments);
  };
  var _0x2f20af = _0x25e483.dynCall_iiiiiiffiiiiiiiiiffffiiii = function () {
    return (_0x2f20af = _0x25e483.dynCall_iiiiiiffiiiiiiiiiffffiiii = _0x25e483.asm.rs).apply(null, arguments);
  };
  var _0x273e2d = _0x25e483.dynCall_iiiiiiffiiiiiiiiiiiiiii = function () {
    return (_0x273e2d = _0x25e483.dynCall_iiiiiiffiiiiiiiiiiiiiii = _0x25e483.asm.ss).apply(null, arguments);
  };
  var _0x346b0a = _0x25e483.dynCall_viififii = function () {
    return (_0x346b0a = _0x25e483.dynCall_viififii = _0x25e483.asm.ts).apply(null, arguments);
  };
  var _0x281cdf = _0x25e483.dynCall_iiiffiiii = function () {
    return (_0x281cdf = _0x25e483.dynCall_iiiffiiii = _0x25e483.asm.us).apply(null, arguments);
  };
  var _0x513fce = _0x25e483.dynCall_iiiiffiiii = function () {
    return (_0x513fce = _0x25e483.dynCall_iiiiffiiii = _0x25e483.asm.vs).apply(null, arguments);
  };
  var _0x602a30 = _0x25e483.dynCall_vjii = function () {
    return (_0x602a30 = _0x25e483.dynCall_vjii = _0x25e483.asm.ws).apply(null, arguments);
  };
  var _0x32152b = _0x25e483.dynCall_fffffffi = function () {
    return (_0x32152b = _0x25e483.dynCall_fffffffi = _0x25e483.asm.xs).apply(null, arguments);
  };
  var _0x47cd4e = _0x25e483.dynCall_viffifi = function () {
    return (_0x47cd4e = _0x25e483.dynCall_viffifi = _0x25e483.asm.ys).apply(null, arguments);
  };
  var _0x855ebe = _0x25e483.dynCall_viiffifi = function () {
    return (_0x855ebe = _0x25e483.dynCall_viiffifi = _0x25e483.asm.zs).apply(null, arguments);
  };
  var _0x89fbbe = _0x25e483.dynCall_fiiiffi = function () {
    return (_0x89fbbe = _0x25e483.dynCall_fiiiffi = _0x25e483.asm.As).apply(null, arguments);
  };
  var _0x24c279 = _0x25e483.dynCall_viiffiiiiiiiii = function () {
    return (_0x24c279 = _0x25e483.dynCall_viiffiiiiiiiii = _0x25e483.asm.Bs).apply(null, arguments);
  };
  var _0xf1193a = _0x25e483.dynCall_viiiiiffiii = function () {
    return (_0xf1193a = _0x25e483.dynCall_viiiiiffiii = _0x25e483.asm.Cs).apply(null, arguments);
  };
  var _0x46be38 = _0x25e483.dynCall_viiffiii = function () {
    return (_0x46be38 = _0x25e483.dynCall_viiffiii = _0x25e483.asm.Ds).apply(null, arguments);
  };
  var _0x70352e = _0x25e483.dynCall_viiffiiiiiii = function () {
    return (_0x70352e = _0x25e483.dynCall_viiffiiiiiii = _0x25e483.asm.Es).apply(null, arguments);
  };
  var _0x20605d = _0x25e483.dynCall_fffffffffi = function () {
    return (_0x20605d = _0x25e483.dynCall_fffffffffi = _0x25e483.asm.Fs).apply(null, arguments);
  };
  var _0x5f442f = _0x25e483.dynCall_vifiiiiii = function () {
    return (_0x5f442f = _0x25e483.dynCall_vifiiiiii = _0x25e483.asm.Gs).apply(null, arguments);
  };
  var _0x2a5971 = _0x25e483.dynCall_viifiiiiiii = function () {
    return (_0x2a5971 = _0x25e483.dynCall_viifiiiiiii = _0x25e483.asm.Hs).apply(null, arguments);
  };
  var _0x7916b2 = _0x25e483.dynCall_viiififfiiiiiii = function () {
    return (_0x7916b2 = _0x25e483.dynCall_viiififfiiiiiii = _0x25e483.asm.Is).apply(null, arguments);
  };
  var _0x196adf = _0x25e483.dynCall_viiffiifiiiiiii = function () {
    return (_0x196adf = _0x25e483.dynCall_viiffiifiiiiiii = _0x25e483.asm.Js).apply(null, arguments);
  };
  var _0x35858c = _0x25e483.dynCall_viifiiiiii = function () {
    return (_0x35858c = _0x25e483.dynCall_viifiiiiii = _0x25e483.asm.Ks).apply(null, arguments);
  };
  var _0x37cc96 = _0x25e483.dynCall_viiifiiiiii = function () {
    return (_0x37cc96 = _0x25e483.dynCall_viiifiiiiii = _0x25e483.asm.Ls).apply(null, arguments);
  };
  var _0x3902aa = _0x25e483.dynCall_viififiiiiii = function () {
    return (_0x3902aa = _0x25e483.dynCall_viififiiiiii = _0x25e483.asm.Ms).apply(null, arguments);
  };
  var _0xb3d46d = _0x25e483.dynCall_viiiffiifiiiiiii = function () {
    return (_0xb3d46d = _0x25e483.dynCall_viiiffiifiiiiiii = _0x25e483.asm.Ns).apply(null, arguments);
  };
  var _0x47e549 = _0x25e483.dynCall_viiiiiifiiiiii = function () {
    return (_0x47e549 = _0x25e483.dynCall_viiiiiifiiiiii = _0x25e483.asm.Os).apply(null, arguments);
  };
  var _0xdec569 = _0x25e483.dynCall_vififiii = function () {
    return (_0xdec569 = _0x25e483.dynCall_vififiii = _0x25e483.asm.Ps).apply(null, arguments);
  };
  var _0x518885 = _0x25e483.dynCall_viiiiiiiijiiii = function () {
    return (_0x518885 = _0x25e483.dynCall_viiiiiiiijiiii = _0x25e483.asm.Qs).apply(null, arguments);
  };
  var _0x1e1097 = _0x25e483.dynCall_viiiiiffi = function () {
    return (_0x1e1097 = _0x25e483.dynCall_viiiiiffi = _0x25e483.asm.Rs).apply(null, arguments);
  };
  var _0x29a337 = _0x25e483.dynCall_viiidii = function () {
    return (_0x29a337 = _0x25e483.dynCall_viiidii = _0x25e483.asm.Ss).apply(null, arguments);
  };
  var _0x337188 = _0x25e483.dynCall_ijiiiiiiiii = function () {
    return (_0x337188 = _0x25e483.dynCall_ijiiiiiiiii = _0x25e483.asm.Ts).apply(null, arguments);
  };
  var _0x1d54d8 = _0x25e483.dynCall_ijjiii = function () {
    return (_0x1d54d8 = _0x25e483.dynCall_ijjiii = _0x25e483.asm.Us).apply(null, arguments);
  };
  var _0x2ebcf2 = _0x25e483.dynCall_jjjii = function () {
    return (_0x2ebcf2 = _0x25e483.dynCall_jjjii = _0x25e483.asm.Vs).apply(null, arguments);
  };
  var _0x582701 = _0x25e483.dynCall_iijjijii = function () {
    return (_0x582701 = _0x25e483.dynCall_iijjijii = _0x25e483.asm.Ws).apply(null, arguments);
  };
  var _0x414c43 = _0x25e483.dynCall_jiijii = function () {
    return (_0x414c43 = _0x25e483.dynCall_jiijii = _0x25e483.asm.Xs).apply(null, arguments);
  };
  var _0x41dad2 = _0x25e483.dynCall_viiiidii = function () {
    return (_0x41dad2 = _0x25e483.dynCall_viiiidii = _0x25e483.asm.Ys).apply(null, arguments);
  };
  var _0x56896d = _0x25e483.dynCall_vidiiiii = function () {
    return (_0x56896d = _0x25e483.dynCall_vidiiiii = _0x25e483.asm.Zs).apply(null, arguments);
  };
  var _0x47127a = _0x25e483.dynCall_viiidjii = function () {
    return (_0x47127a = _0x25e483.dynCall_viiidjii = _0x25e483.asm._s).apply(null, arguments);
  };
  var _0x4b5064 = _0x25e483.dynCall_viijijji = function () {
    return (_0x4b5064 = _0x25e483.dynCall_viijijji = _0x25e483.asm.$s).apply(null, arguments);
  };
  var _0x5a7c5d = _0x25e483.dynCall_vijijji = function () {
    return (_0x5a7c5d = _0x25e483.dynCall_vijijji = _0x25e483.asm.at).apply(null, arguments);
  };
  var _0x54b0d1 = _0x25e483.dynCall_viffffffffffffffffi = function () {
    return (_0x54b0d1 = _0x25e483.dynCall_viffffffffffffffffi = _0x25e483.asm.bt).apply(null, arguments);
  };
  var _0xbc83d = _0x25e483.dynCall_jiidi = function () {
    return (_0xbc83d = _0x25e483.dynCall_jiidi = _0x25e483.asm.ct).apply(null, arguments);
  };
  var _0x5227d3 = _0x25e483.dynCall_viiiidijii = function () {
    return (_0x5227d3 = _0x25e483.dynCall_viiiidijii = _0x25e483.asm.dt).apply(null, arguments);
  };
  var _0x1066f4 = _0x25e483.dynCall_iiidiii = function () {
    return (_0x1066f4 = _0x25e483.dynCall_iiidiii = _0x25e483.asm.et).apply(null, arguments);
  };
  var _0x334ad2 = _0x25e483.dynCall_viijiiiii = function () {
    return (_0x334ad2 = _0x25e483.dynCall_viijiiiii = _0x25e483.asm.ft).apply(null, arguments);
  };
  var _0x4b7c8d = _0x25e483.dynCall_viifffffi = function () {
    return (_0x4b7c8d = _0x25e483.dynCall_viifffffi = _0x25e483.asm.gt).apply(null, arguments);
  };
  var _0x5c785c = _0x25e483.dynCall_viiffffffi = function () {
    return (_0x5c785c = _0x25e483.dynCall_viiffffffi = _0x25e483.asm.ht).apply(null, arguments);
  };
  var _0x5180f5 = _0x25e483.dynCall_viifffffffi = function () {
    return (_0x5180f5 = _0x25e483.dynCall_viifffffffi = _0x25e483.asm.it).apply(null, arguments);
  };
  var _0x50ea53 = _0x25e483.dynCall_viiffffffffi = function () {
    return (_0x50ea53 = _0x25e483.dynCall_viiffffffffi = _0x25e483.asm.jt).apply(null, arguments);
  };
  var _0x469da8 = _0x25e483.dynCall_viiffffffffiii = function () {
    return (_0x469da8 = _0x25e483.dynCall_viiffffffffiii = _0x25e483.asm.kt).apply(null, arguments);
  };
  var _0x24d043 = _0x25e483.dynCall_viiiiffffii = function () {
    return (_0x24d043 = _0x25e483.dynCall_viiiiffffii = _0x25e483.asm.lt).apply(null, arguments);
  };
  var _0x20f93b = _0x25e483.dynCall_didi = function () {
    return (_0x20f93b = _0x25e483.dynCall_didi = _0x25e483.asm.mt).apply(null, arguments);
  };
  var _0x96064c = _0x25e483.dynCall_ddidi = function () {
    return (_0x96064c = _0x25e483.dynCall_ddidi = _0x25e483.asm.nt).apply(null, arguments);
  };
  var _0x22944a = _0x25e483.dynCall_viddii = function () {
    return (_0x22944a = _0x25e483.dynCall_viddii = _0x25e483.asm.ot).apply(null, arguments);
  };
  var _0x24271e = _0x25e483.dynCall_iiiddi = function () {
    return (_0x24271e = _0x25e483.dynCall_iiiddi = _0x25e483.asm.pt).apply(null, arguments);
  };
  var _0x2aa33a = _0x25e483.dynCall_viddiiii = function () {
    return (_0x2aa33a = _0x25e483.dynCall_viddiiii = _0x25e483.asm.qt).apply(null, arguments);
  };
  var _0x566607 = _0x25e483.dynCall_viiijji = function () {
    return (_0x566607 = _0x25e483.dynCall_viiijji = _0x25e483.asm.rt).apply(null, arguments);
  };
  var _0x1a6762 = _0x25e483.dynCall_vijiiiiiii = function () {
    return (_0x1a6762 = _0x25e483.dynCall_vijiiiiiii = _0x25e483.asm.st).apply(null, arguments);
  };
  var _0x11cb66 = _0x25e483.dynCall_vijiiiiiiii = function () {
    return (_0x11cb66 = _0x25e483.dynCall_vijiiiiiiii = _0x25e483.asm.tt).apply(null, arguments);
  };
  var _0x120fa6 = _0x25e483.dynCall_jjiiii = function () {
    return (_0x120fa6 = _0x25e483.dynCall_jjiiii = _0x25e483.asm.ut).apply(null, arguments);
  };
  var _0xfcde65 = _0x25e483.dynCall_jjiiiii = function () {
    return (_0xfcde65 = _0x25e483.dynCall_jjiiiii = _0x25e483.asm.vt).apply(null, arguments);
  };
  var _0x11da2f = _0x25e483.dynCall_jijjji = function () {
    return (_0x11da2f = _0x25e483.dynCall_jijjji = _0x25e483.asm.wt).apply(null, arguments);
  };
  var _0x63d414 = _0x25e483.dynCall_jijjjii = function () {
    return (_0x63d414 = _0x25e483.dynCall_jijjjii = _0x25e483.asm.xt).apply(null, arguments);
  };
  var _0xeda811 = _0x25e483.dynCall_jjiii = function () {
    return (_0xeda811 = _0x25e483.dynCall_jjiii = _0x25e483.asm.yt).apply(null, arguments);
  };
  var _0x5dacb1 = _0x25e483.dynCall_ijijiiiii = function () {
    return (_0x5dacb1 = _0x25e483.dynCall_ijijiiiii = _0x25e483.asm.zt).apply(null, arguments);
  };
  var _0x3386f2 = _0x25e483.dynCall_ijjjiii = function () {
    return (_0x3386f2 = _0x25e483.dynCall_ijjjiii = _0x25e483.asm.At).apply(null, arguments);
  };
  var _0x5f5cb4 = _0x25e483.dynCall_vijjjiijii = function () {
    return (_0x5f5cb4 = _0x25e483.dynCall_vijjjiijii = _0x25e483.asm.Bt).apply(null, arguments);
  };
  var _0x1dcaa8 = _0x25e483.dynCall_ijjjiijii = function () {
    return (_0x1dcaa8 = _0x25e483.dynCall_ijjjiijii = _0x25e483.asm.Ct).apply(null, arguments);
  };
  var _0x10ef54 = _0x25e483.dynCall_vijiiiiii = function () {
    return (_0x10ef54 = _0x25e483.dynCall_vijiiiiii = _0x25e483.asm.Dt).apply(null, arguments);
  };
  var _0x234b64 = _0x25e483.dynCall_jfi = function () {
    return (_0x234b64 = _0x25e483.dynCall_jfi = _0x25e483.asm.Et).apply(null, arguments);
  };
  var _0x26b1ab = _0x25e483.dynCall_fji = function () {
    return (_0x26b1ab = _0x25e483.dynCall_fji = _0x25e483.asm.Ft).apply(null, arguments);
  };
  var _0x3ab026 = _0x25e483.dynCall_fdi = function () {
    return (_0x3ab026 = _0x25e483.dynCall_fdi = _0x25e483.asm.Gt).apply(null, arguments);
  };
  var _0x55e007 = _0x25e483.dynCall_dfi = function () {
    return (_0x55e007 = _0x25e483.dynCall_dfi = _0x25e483.asm.Ht).apply(null, arguments);
  };
  var _0x4e20a3 = _0x25e483.dynCall_jidii = function () {
    return (_0x4e20a3 = _0x25e483.dynCall_jidii = _0x25e483.asm.It).apply(null, arguments);
  };
  var _0x602b44 = _0x25e483.dynCall_viiiiiiiji = function () {
    return (_0x602b44 = _0x25e483.dynCall_viiiiiiiji = _0x25e483.asm.Jt).apply(null, arguments);
  };
  var _0x57b007 = _0x25e483.dynCall_viiiiiiiiji = function () {
    return (_0x57b007 = _0x25e483.dynCall_viiiiiiiiji = _0x25e483.asm.Kt).apply(null, arguments);
  };
  var _0x16e6ac = _0x25e483.dynCall_viiiiiiiiiji = function () {
    return (_0x16e6ac = _0x25e483.dynCall_viiiiiiiiiji = _0x25e483.asm.Lt).apply(null, arguments);
  };
  var _0x44df8e = _0x25e483.dynCall_ijiijii = function () {
    return (_0x44df8e = _0x25e483.dynCall_ijiijii = _0x25e483.asm.Mt).apply(null, arguments);
  };
  var _0x3cc231 = _0x25e483.dynCall_vjjiiiii = function () {
    return (_0x3cc231 = _0x25e483.dynCall_vjjiiiii = _0x25e483.asm.Nt).apply(null, arguments);
  };
  var _0x1fb2f3 = _0x25e483.dynCall_vjjii = function () {
    return (_0x1fb2f3 = _0x25e483.dynCall_vjjii = _0x25e483.asm.Ot).apply(null, arguments);
  };
  var _0x3fb75a = _0x25e483.dynCall_ijiiji = function () {
    return (_0x3fb75a = _0x25e483.dynCall_ijiiji = _0x25e483.asm.Pt).apply(null, arguments);
  };
  var _0x517d87 = _0x25e483.dynCall_ijiiiii = function () {
    return (_0x517d87 = _0x25e483.dynCall_ijiiiii = _0x25e483.asm.Qt).apply(null, arguments);
  };
  var _0x5d9429 = _0x25e483.dynCall_ijiiiiji = function () {
    return (_0x5d9429 = _0x25e483.dynCall_ijiiiiji = _0x25e483.asm.Rt).apply(null, arguments);
  };
  var _0x54ffcd = _0x25e483.dynCall_jiiiiii = function () {
    return (_0x54ffcd = _0x25e483.dynCall_jiiiiii = _0x25e483.asm.St).apply(null, arguments);
  };
  var _0x81796e = _0x25e483.dynCall_ddii = function () {
    return (_0x81796e = _0x25e483.dynCall_ddii = _0x25e483.asm.Tt).apply(null, arguments);
  };
  var _0x2f5bd3 = _0x25e483.dynCall_idiii = function () {
    return (_0x2f5bd3 = _0x25e483.dynCall_idiii = _0x25e483.asm.Ut).apply(null, arguments);
  };
  var _0x2f8cd1 = _0x25e483.dynCall_vdiii = function () {
    return (_0x2f8cd1 = _0x25e483.dynCall_vdiii = _0x25e483.asm.Vt).apply(null, arguments);
  };
  var _0x1a3259 = _0x25e483.dynCall_jdii = function () {
    return (_0x1a3259 = _0x25e483.dynCall_jdii = _0x25e483.asm.Wt).apply(null, arguments);
  };
  var _0xf649d4 = _0x25e483.dynCall_iijjji = function () {
    return (_0xf649d4 = _0x25e483.dynCall_iijjji = _0x25e483.asm.Xt).apply(null, arguments);
  };
  var _0x3b5259 = _0x25e483.dynCall_viijjji = function () {
    return (_0x3b5259 = _0x25e483.dynCall_viijjji = _0x25e483.asm.Yt).apply(null, arguments);
  };
  var _0x489cdd = _0x25e483.dynCall_vdii = function () {
    return (_0x489cdd = _0x25e483.dynCall_vdii = _0x25e483.asm.Zt).apply(null, arguments);
  };
  var _0x2a87b7 = _0x25e483.dynCall_iiiijii = function () {
    return (_0x2a87b7 = _0x25e483.dynCall_iiiijii = _0x25e483.asm._t).apply(null, arguments);
  };
  var _0x2a1778 = _0x25e483.dynCall_jijji = function () {
    return (_0x2a1778 = _0x25e483.dynCall_jijji = _0x25e483.asm.$t).apply(null, arguments);
  };
  var _0x220273 = _0x25e483.dynCall_diddi = function () {
    return (_0x220273 = _0x25e483.dynCall_diddi = _0x25e483.asm.au).apply(null, arguments);
  };
  var _0x25fc09 = _0x25e483.dynCall_iijjii = function () {
    return (_0x25fc09 = _0x25e483.dynCall_iijjii = _0x25e483.asm.bu).apply(null, arguments);
  };
  var _0x1e8234 = _0x25e483.dynCall_viiiiijji = function () {
    return (_0x1e8234 = _0x25e483.dynCall_viiiiijji = _0x25e483.asm.cu).apply(null, arguments);
  };
  var _0x142b1a = _0x25e483.dynCall_viiiiji = function () {
    return (_0x142b1a = _0x25e483.dynCall_viiiiji = _0x25e483.asm.du).apply(null, arguments);
  };
  var _0x3defae = _0x25e483.dynCall_vijjjii = function () {
    return (_0x3defae = _0x25e483.dynCall_vijjjii = _0x25e483.asm.eu).apply(null, arguments);
  };
  var _0x37a268 = _0x25e483.dynCall_jjjji = function () {
    return (_0x37a268 = _0x25e483.dynCall_jjjji = _0x25e483.asm.fu).apply(null, arguments);
  };
  var _0x1591d1 = _0x25e483.dynCall_viijijii = function () {
    return (_0x1591d1 = _0x25e483.dynCall_viijijii = _0x25e483.asm.gu).apply(null, arguments);
  };
  var _0x887cf0 = _0x25e483.dynCall_viijijiii = function () {
    return (_0x887cf0 = _0x25e483.dynCall_viijijiii = _0x25e483.asm.hu).apply(null, arguments);
  };
  var _0x5555e8 = _0x25e483.dynCall_vijiji = function () {
    return (_0x5555e8 = _0x25e483.dynCall_vijiji = _0x25e483.asm.iu).apply(null, arguments);
  };
  var _0x5a85f6 = _0x25e483.dynCall_viijiijiii = function () {
    return (_0x5a85f6 = _0x25e483.dynCall_viijiijiii = _0x25e483.asm.ju).apply(null, arguments);
  };
  var _0x5a5124 = _0x25e483.dynCall_viiiijiiii = function () {
    return (_0x5a5124 = _0x25e483.dynCall_viiiijiiii = _0x25e483.asm.ku).apply(null, arguments);
  };
  var _0x7f6669 = _0x25e483.dynCall_viijjii = function () {
    return (_0x7f6669 = _0x25e483.dynCall_viijjii = _0x25e483.asm.lu).apply(null, arguments);
  };
  var _0x2c30c4 = _0x25e483.dynCall_jiiiiiiiii = function () {
    return (_0x2c30c4 = _0x25e483.dynCall_jiiiiiiiii = _0x25e483.asm.mu).apply(null, arguments);
  };
  var _0x24f34d = _0x25e483.dynCall_iiiiijii = function () {
    return (_0x24f34d = _0x25e483.dynCall_iiiiijii = _0x25e483.asm.nu).apply(null, arguments);
  };
  var _0x146ceb = _0x25e483.dynCall_iiiidii = function () {
    return (_0x146ceb = _0x25e483.dynCall_iiiidii = _0x25e483.asm.ou).apply(null, arguments);
  };
  var _0x4f8d53 = _0x25e483.dynCall_iidfii = function () {
    return (_0x4f8d53 = _0x25e483.dynCall_iidfii = _0x25e483.asm.pu).apply(null, arguments);
  };
  var _0x2b6ca5 = _0x25e483.dynCall_iidfi = function () {
    return (_0x2b6ca5 = _0x25e483.dynCall_iidfi = _0x25e483.asm.qu).apply(null, arguments);
  };
  var _0x5dc5c8 = _0x25e483.dynCall_iiddfi = function () {
    return (_0x5dc5c8 = _0x25e483.dynCall_iiddfi = _0x25e483.asm.ru).apply(null, arguments);
  };
  var _0x2d8913 = _0x25e483.dynCall_iijfii = function () {
    return (_0x2d8913 = _0x25e483.dynCall_iijfii = _0x25e483.asm.su).apply(null, arguments);
  };
  var _0x220db2 = _0x25e483.dynCall_iijfi = function () {
    return (_0x220db2 = _0x25e483.dynCall_iijfi = _0x25e483.asm.tu).apply(null, arguments);
  };
  var _0x343176 = _0x25e483.dynCall_iijjfi = function () {
    return (_0x343176 = _0x25e483.dynCall_iijjfi = _0x25e483.asm.uu).apply(null, arguments);
  };
  var _0x45e885 = _0x25e483.dynCall_iiiiffiiiji = function () {
    return (_0x45e885 = _0x25e483.dynCall_iiiiffiiiji = _0x25e483.asm.vu).apply(null, arguments);
  };
  var _0x417a88 = _0x25e483.dynCall_iiidfii = function () {
    return (_0x417a88 = _0x25e483.dynCall_iiidfii = _0x25e483.asm.wu).apply(null, arguments);
  };
  var _0x76a262 = _0x25e483.dynCall_iiijfii = function () {
    return (_0x76a262 = _0x25e483.dynCall_iiijfii = _0x25e483.asm.xu).apply(null, arguments);
  };
  var _0x35d085 = _0x25e483.dynCall_jiiiiiii = function () {
    return (_0x35d085 = _0x25e483.dynCall_jiiiiiii = _0x25e483.asm.yu).apply(null, arguments);
  };
  var _0x3aab7b = _0x25e483.dynCall_fiiiiiii = function () {
    return (_0x3aab7b = _0x25e483.dynCall_fiiiiiii = _0x25e483.asm.zu).apply(null, arguments);
  };
  var _0x4f3e43 = _0x25e483.dynCall_iiiiffiiiii = function () {
    return (_0x4f3e43 = _0x25e483.dynCall_iiiiffiiiii = _0x25e483.asm.Au).apply(null, arguments);
  };
  var _0x5e8754 = _0x25e483.dynCall_iiiidfii = function () {
    return (_0x5e8754 = _0x25e483.dynCall_iiiidfii = _0x25e483.asm.Bu).apply(null, arguments);
  };
  var _0x45abf4 = _0x25e483.dynCall_iiiijfii = function () {
    return (_0x45abf4 = _0x25e483.dynCall_iiiijfii = _0x25e483.asm.Cu).apply(null, arguments);
  };
  var _0x1ac6f3 = _0x25e483.dynCall_iiiiffii = function () {
    return (_0x1ac6f3 = _0x25e483.dynCall_iiiiffii = _0x25e483.asm.Du).apply(null, arguments);
  };
  var _0x3588df = _0x25e483.dynCall_jiiiiji = function () {
    return (_0x3588df = _0x25e483.dynCall_jiiiiji = _0x25e483.asm.Eu).apply(null, arguments);
  };
  var _0x1b46e9 = _0x25e483.dynCall_fiiiifi = function () {
    return (_0x1b46e9 = _0x25e483.dynCall_fiiiifi = _0x25e483.asm.Fu).apply(null, arguments);
  };
  var _0x291dbe = _0x25e483.dynCall_didii = function () {
    return (_0x291dbe = _0x25e483.dynCall_didii = _0x25e483.asm.Gu).apply(null, arguments);
  };
  var _0x586de2 = _0x25e483.dynCall_iiijjii = function () {
    return (_0x586de2 = _0x25e483.dynCall_iiijjii = _0x25e483.asm.Hu).apply(null, arguments);
  };
  var _0x2f51e5 = _0x25e483.dynCall_vidiji = function () {
    return (_0x2f51e5 = _0x25e483.dynCall_vidiji = _0x25e483.asm.Iu).apply(null, arguments);
  };
  var _0x3cb678 = _0x25e483.dynCall_vidjii = function () {
    return (_0x3cb678 = _0x25e483.dynCall_vidjii = _0x25e483.asm.Ju).apply(null, arguments);
  };
  var _0x82681 = _0x25e483.dynCall_vij = function () {
    return (_0x82681 = _0x25e483.dynCall_vij = _0x25e483.asm.Ku).apply(null, arguments);
  };
  var _0x103d49 = _0x25e483.dynCall_iiiijiii = function () {
    return (_0x103d49 = _0x25e483.dynCall_iiiijiii = _0x25e483.asm.Lu).apply(null, arguments);
  };
  var _0x10d838 = _0x25e483.dynCall_iiiij = function () {
    return (_0x10d838 = _0x25e483.dynCall_iiiij = _0x25e483.asm.Mu).apply(null, arguments);
  };
  var _0x5b8394 = _0x25e483.dynCall_ijj = function () {
    return (_0x5b8394 = _0x25e483.dynCall_ijj = _0x25e483.asm.Nu).apply(null, arguments);
  };
  var _0x23df11 = _0x25e483.dynCall_vjji = function () {
    return (_0x23df11 = _0x25e483.dynCall_vjji = _0x25e483.asm.Ou).apply(null, arguments);
  };
  var _0x2b7464 = _0x25e483.dynCall_ij = function () {
    return (_0x2b7464 = _0x25e483.dynCall_ij = _0x25e483.asm.Pu).apply(null, arguments);
  };
  var _0x244e1f = _0x25e483.dynCall_vif = function () {
    return (_0x244e1f = _0x25e483.dynCall_vif = _0x25e483.asm.Qu).apply(null, arguments);
  };
  var _0x21e6aa = _0x25e483.dynCall_vid = function () {
    return (_0x21e6aa = _0x25e483.dynCall_vid = _0x25e483.asm.Ru).apply(null, arguments);
  };
  var _0x5863c7 = _0x25e483.dynCall_viiiiif = function () {
    return (_0x5863c7 = _0x25e483.dynCall_viiiiif = _0x25e483.asm.Su).apply(null, arguments);
  };
  var _0x3d8d91 = _0x25e483.dynCall_viiiif = function () {
    return (_0x3d8d91 = _0x25e483.dynCall_viiiif = _0x25e483.asm.Tu).apply(null, arguments);
  };
  var _0x74de9e = _0x25e483.dynCall_viiiiiif = function () {
    return (_0x74de9e = _0x25e483.dynCall_viiiiiif = _0x25e483.asm.Uu).apply(null, arguments);
  };
  var _0x177faf = _0x25e483.dynCall_iiif = function () {
    return (_0x177faf = _0x25e483.dynCall_iiif = _0x25e483.asm.Vu).apply(null, arguments);
  };
  var _0x7b24a = _0x25e483.dynCall_fif = function () {
    return (_0x7b24a = _0x25e483.dynCall_fif = _0x25e483.asm.Wu).apply(null, arguments);
  };
  var _0x315601 = _0x25e483.dynCall_iiiiiifff = function () {
    return (_0x315601 = _0x25e483.dynCall_iiiiiifff = _0x25e483.asm.Xu).apply(null, arguments);
  };
  var _0x14a97f = _0x25e483.dynCall_iiiiiifiif = function () {
    return (_0x14a97f = _0x25e483.dynCall_iiiiiifiif = _0x25e483.asm.Yu).apply(null, arguments);
  };
  var _0x4e1a4a = _0x25e483.dynCall_iiiiiiifiif = function () {
    return (_0x4e1a4a = _0x25e483.dynCall_iiiiiiifiif = _0x25e483.asm.Zu).apply(null, arguments);
  };
  var _0x4cdc48 = _0x25e483.dynCall_fiff = function () {
    return (_0x4cdc48 = _0x25e483.dynCall_fiff = _0x25e483.asm._u).apply(null, arguments);
  };
  var _0x3495ac = _0x25e483.dynCall_fiiiiiifiifif = function () {
    return (_0x3495ac = _0x25e483.dynCall_fiiiiiifiifif = _0x25e483.asm.$u).apply(null, arguments);
  };
  var _0x1c40be = _0x25e483.dynCall_fiiiiiifiiiif = function () {
    return (_0x1c40be = _0x25e483.dynCall_fiiiiiifiiiif = _0x25e483.asm.av).apply(null, arguments);
  };
  var _0x11043c = _0x25e483.dynCall_iifiiiijii = function () {
    return (_0x11043c = _0x25e483.dynCall_iifiiiijii = _0x25e483.asm.bv).apply(null, arguments);
  };
  var _0x4a316c = _0x25e483.dynCall_vifijii = function () {
    return (_0x4a316c = _0x25e483.dynCall_vifijii = _0x25e483.asm.cv).apply(null, arguments);
  };
  var _0x378f31 = _0x25e483.dynCall_iiiifffiii = function () {
    return (_0x378f31 = _0x25e483.dynCall_iiiifffiii = _0x25e483.asm.dv).apply(null, arguments);
  };
  var _0x1eaf71 = _0x25e483.dynCall_iiiifffffi = function () {
    return (_0x1eaf71 = _0x25e483.dynCall_iiiifffffi = _0x25e483.asm.ev).apply(null, arguments);
  };
  var _0x40c050 = _0x25e483.dynCall_viffiiiif = function () {
    return (_0x40c050 = _0x25e483.dynCall_viffiiiif = _0x25e483.asm.fv).apply(null, arguments);
  };
  var _0x343b14 = _0x25e483.dynCall_viffiifffffiii = function () {
    return (_0x343b14 = _0x25e483.dynCall_viffiifffffiii = _0x25e483.asm.gv).apply(null, arguments);
  };
  var _0x576804 = _0x25e483.dynCall_viffffiifffiiiiif = function () {
    return (_0x576804 = _0x25e483.dynCall_viffffiifffiiiiif = _0x25e483.asm.hv).apply(null, arguments);
  };
  var _0x5a3370 = _0x25e483.dynCall_iiiifffffii = function () {
    return (_0x5a3370 = _0x25e483.dynCall_iiiifffffii = _0x25e483.asm.iv).apply(null, arguments);
  };
  var _0x5f1d1e = _0x25e483.dynCall_viiiiiiiiiiifii = function () {
    return (_0x5f1d1e = _0x25e483.dynCall_viiiiiiiiiiifii = _0x25e483.asm.jv).apply(null, arguments);
  };
  var _0x4610ba = _0x25e483.dynCall_viff = function () {
    return (_0x4610ba = _0x25e483.dynCall_viff = _0x25e483.asm.kv).apply(null, arguments);
  };
  var _0x49a99e = _0x25e483.dynCall_iiiiifiiiiif = function () {
    return (_0x49a99e = _0x25e483.dynCall_iiiiifiiiiif = _0x25e483.asm.lv).apply(null, arguments);
  };
  var _0x5bbcc3 = _0x25e483.dynCall_viiifiiiii = function () {
    return (_0x5bbcc3 = _0x25e483.dynCall_viiifiiiii = _0x25e483.asm.mv).apply(null, arguments);
  };
  var _0x2aaae6 = _0x25e483.dynCall_viiiifiiiiif = function () {
    return (_0x2aaae6 = _0x25e483.dynCall_viiiifiiiiif = _0x25e483.asm.nv).apply(null, arguments);
  };
  var _0x4a127e = _0x25e483.dynCall_iifff = function () {
    return (_0x4a127e = _0x25e483.dynCall_iifff = _0x25e483.asm.ov).apply(null, arguments);
  };
  var _0x11d5c2 = _0x25e483.dynCall_iif = function () {
    return (_0x11d5c2 = _0x25e483.dynCall_iif = _0x25e483.asm.pv).apply(null, arguments);
  };
  var _0x125e80 = _0x25e483.dynCall_viijijj = function () {
    return (_0x125e80 = _0x25e483.dynCall_viijijj = _0x25e483.asm.qv).apply(null, arguments);
  };
  var _0x5d0110 = _0x25e483.dynCall_viijj = function () {
    return (_0x5d0110 = _0x25e483.dynCall_viijj = _0x25e483.asm.rv).apply(null, arguments);
  };
  var _0x3774ed = _0x25e483.dynCall_viiiij = function () {
    return (_0x3774ed = _0x25e483.dynCall_viiiij = _0x25e483.asm.sv).apply(null, arguments);
  };
  var _0x918892 = _0x25e483.dynCall_iiijji = function () {
    return (_0x918892 = _0x25e483.dynCall_iiijji = _0x25e483.asm.tv).apply(null, arguments);
  };
  var _0x499955 = _0x25e483.dynCall_ijjiiiii = function () {
    return (_0x499955 = _0x25e483.dynCall_ijjiiiii = _0x25e483.asm.uv).apply(null, arguments);
  };
  var _0x5a7063 = _0x25e483.dynCall_vidd = function () {
    return (_0x5a7063 = _0x25e483.dynCall_vidd = _0x25e483.asm.vv).apply(null, arguments);
  };
  var _0x55c797 = _0x25e483.dynCall_iiiiiifffiiifiii = function () {
    return (_0x55c797 = _0x25e483.dynCall_iiiiiifffiiifiii = _0x25e483.asm.wv).apply(null, arguments);
  };
  var _0x11b310 = _0x25e483.dynCall_viid = function () {
    return (_0x11b310 = _0x25e483.dynCall_viid = _0x25e483.asm.xv).apply(null, arguments);
  };
  var _0x576382 = _0x25e483.dynCall_viiif = function () {
    return (_0x576382 = _0x25e483.dynCall_viiif = _0x25e483.asm.yv).apply(null, arguments);
  };
  var _0x38900c = _0x25e483.dynCall_fiiiif = function () {
    return (_0x38900c = _0x25e483.dynCall_fiiiif = _0x25e483.asm.zv).apply(null, arguments);
  };
  var _0x2e2f77 = _0x25e483.dynCall_iiiiiff = function () {
    return (_0x2e2f77 = _0x25e483.dynCall_iiiiiff = _0x25e483.asm.Av).apply(null, arguments);
  };
  var _0x1f9f8f = _0x25e483.dynCall_viffff = function () {
    return (_0x1f9f8f = _0x25e483.dynCall_viffff = _0x25e483.asm.Bv).apply(null, arguments);
  };
  var _0x5591e3 = _0x25e483.dynCall_vifff = function () {
    return (_0x5591e3 = _0x25e483.dynCall_vifff = _0x25e483.asm.Cv).apply(null, arguments);
  };
  var _0x2d7887 = _0x25e483.dynCall_viifff = function () {
    return (_0x2d7887 = _0x25e483.dynCall_viifff = _0x25e483.asm.Dv).apply(null, arguments);
  };
  var _0x13e641 = _0x25e483.dynCall_vf = function () {
    return (_0x13e641 = _0x25e483.dynCall_vf = _0x25e483.asm.Ev).apply(null, arguments);
  };
  var _0x1a5a78 = _0x25e483.dynCall_vffff = function () {
    return (_0x1a5a78 = _0x25e483.dynCall_vffff = _0x25e483.asm.Fv).apply(null, arguments);
  };
  var _0x59d51f = _0x25e483.dynCall_vff = function () {
    return (_0x59d51f = _0x25e483.dynCall_vff = _0x25e483.asm.Gv).apply(null, arguments);
  };
  var _0x9b7717 = _0x25e483.dynCall_fff = function () {
    return (_0x9b7717 = _0x25e483.dynCall_fff = _0x25e483.asm.Hv).apply(null, arguments);
  };
  var _0x564d77 = _0x25e483.dynCall_f = function () {
    return (_0x564d77 = _0x25e483.dynCall_f = _0x25e483.asm.Iv).apply(null, arguments);
  };
  var _0x26e01a = _0x25e483.dynCall_vfff = function () {
    return (_0x26e01a = _0x25e483.dynCall_vfff = _0x25e483.asm.Jv).apply(null, arguments);
  };
  var _0x4bee7f = _0x25e483.dynCall_ff = function () {
    return (_0x4bee7f = _0x25e483.dynCall_ff = _0x25e483.asm.Kv).apply(null, arguments);
  };
  var _0xf07a17 = _0x25e483.dynCall_iiifiifii = function () {
    return (_0xf07a17 = _0x25e483.dynCall_iiifiifii = _0x25e483.asm.Lv).apply(null, arguments);
  };
  var _0x5df6e1 = _0x25e483.dynCall_fiif = function () {
    return (_0x5df6e1 = _0x25e483.dynCall_fiif = _0x25e483.asm.Mv).apply(null, arguments);
  };
  var _0x27cd55 = _0x25e483.dynCall_iiiiiiffiiiiiiiiiffffiii = function () {
    return (_0x27cd55 = _0x25e483.dynCall_iiiiiiffiiiiiiiiiffffiii = _0x25e483.asm.Nv).apply(null, arguments);
  };
  var _0x1fd930 = _0x25e483.dynCall_viififi = function () {
    return (_0x1fd930 = _0x25e483.dynCall_viififi = _0x25e483.asm.Ov).apply(null, arguments);
  };
  var _0x8cd1f3 = _0x25e483.dynCall_viiiiiiiijiii = function () {
    return (_0x8cd1f3 = _0x25e483.dynCall_viiiiiiiijiii = _0x25e483.asm.Pv).apply(null, arguments);
  };
  var _0x4ba42d = _0x25e483.dynCall_d = function () {
    return (_0x4ba42d = _0x25e483.dynCall_d = _0x25e483.asm.Qv).apply(null, arguments);
  };
  function _0x11ef0f(_0x1e4b98, _0x223696) {
    var _0x51ffa4 = _0x19cca3();
    try {
      return _0x214d37(_0x1e4b98, _0x223696);
    } catch (_0x53311b) {
      _0x4cb3d3(_0x51ffa4);
      if (_0x53311b !== _0x53311b + 0 && _0x53311b !== "longjmp") {
        throw _0x53311b;
      }
      _0x5ed159(1, 0);
    }
  }
  function _0x281fcc(_0x204b3c, _0x296beb, _0x5c9a16) {
    var _0x51c75b = _0x19cca3();
    try {
      return _0x55c798(_0x204b3c, _0x296beb, _0x5c9a16);
    } catch (_0x379f1f) {
      _0x4cb3d3(_0x51c75b);
      if (_0x379f1f !== _0x379f1f + 0 && _0x379f1f !== "longjmp") {
        throw _0x379f1f;
      }
      _0x5ed159(1, 0);
    }
  }
  function _0x2522a3(_0x196b93, _0x970a46, _0x1cd27a, _0xed9f3f) {
    var _0x5b88a4 = _0x19cca3();
    try {
      _0x1e002d(_0x196b93, _0x970a46, _0x1cd27a, _0xed9f3f);
    } catch (_0x580e3b) {
      _0x4cb3d3(_0x5b88a4);
      if (_0x580e3b !== _0x580e3b + 0 && _0x580e3b !== "longjmp") {
        throw _0x580e3b;
      }
      _0x5ed159(1, 0);
    }
  }
  function _0x112a2b(_0x1a690c, _0x3740bf, _0x1d1d94, _0x12d276, _0x2b1bed, _0x1d783c) {
    var _0x17c969 = _0x19cca3();
    try {
      return _0xb17174(_0x1a690c, _0x3740bf, _0x1d1d94, _0x12d276, _0x2b1bed, _0x1d783c);
    } catch (_0x508aa1) {
      _0x4cb3d3(_0x17c969);
      if (_0x508aa1 !== _0x508aa1 + 0 && _0x508aa1 !== "longjmp") {
        throw _0x508aa1;
      }
      _0x5ed159(1, 0);
    }
  }
  function _0x43739b(_0x2555ba, _0x5dc342, _0xe762cd, _0x1c2d63) {
    var _0x34beb = _0x19cca3();
    try {
      return _0x517871(_0x2555ba, _0x5dc342, _0xe762cd, _0x1c2d63);
    } catch (_0x1fbfd7) {
      _0x4cb3d3(_0x34beb);
      if (_0x1fbfd7 !== _0x1fbfd7 + 0 && _0x1fbfd7 !== "longjmp") {
        throw _0x1fbfd7;
      }
      _0x5ed159(1, 0);
    }
  }
  function _0xc1bfe7(_0x39f888, _0x1a05eb, _0x410ce2, _0x228a82, _0x4c0f0e) {
    var _0x7b17c0 = _0x19cca3();
    try {
      _0x1c4e1b(_0x39f888, _0x1a05eb, _0x410ce2, _0x228a82, _0x4c0f0e);
    } catch (_0x2c2476) {
      _0x4cb3d3(_0x7b17c0);
      if (_0x2c2476 !== _0x2c2476 + 0 && _0x2c2476 !== "longjmp") {
        throw _0x2c2476;
      }
      _0x5ed159(1, 0);
    }
  }
  function _0x1e63c7(_0x4a7374, _0x3935d2, _0x57bcc7, _0x4edead, _0x5b67fa) {
    var _0x499a53 = _0x19cca3();
    try {
      return _0x4665ee(_0x4a7374, _0x3935d2, _0x57bcc7, _0x4edead, _0x5b67fa);
    } catch (_0xd6b38f) {
      _0x4cb3d3(_0x499a53);
      if (_0xd6b38f !== _0xd6b38f + 0 && _0xd6b38f !== "longjmp") {
        throw _0xd6b38f;
      }
      _0x5ed159(1, 0);
    }
  }
  function _0x199f56(_0x1269e1, _0x5bf71f, _0x221f91, _0x599590) {
    var _0xcdeb99 = _0x19cca3();
    try {
      return _0x409bc1(_0x1269e1, _0x5bf71f, _0x221f91, _0x599590);
    } catch (_0xb92f38) {
      _0x4cb3d3(_0xcdeb99);
      if (_0xb92f38 !== _0xb92f38 + 0 && _0xb92f38 !== "longjmp") {
        throw _0xb92f38;
      }
      _0x5ed159(1, 0);
    }
  }
  function _0x2bbf5d(_0x3e8a4b, _0x545031, _0x443cdf, _0x28c045) {
    var _0x2cd08a = _0x19cca3();
    try {
      return _0xac20d5(_0x3e8a4b, _0x545031, _0x443cdf, _0x28c045);
    } catch (_0x240c3b) {
      _0x4cb3d3(_0x2cd08a);
      if (_0x240c3b !== _0x240c3b + 0 && _0x240c3b !== "longjmp") {
        throw _0x240c3b;
      }
      _0x5ed159(1, 0);
    }
  }
  function _0x57d80f(_0x2bf093, _0x3d7d0f, _0x42c877, _0x32b9cf) {
    var _0x35f1a9 = _0x19cca3();
    try {
      _0x3b9539(_0x2bf093, _0x3d7d0f, _0x42c877, _0x32b9cf);
    } catch (_0x20fa73) {
      _0x4cb3d3(_0x35f1a9);
      if (_0x20fa73 !== _0x20fa73 + 0 && _0x20fa73 !== "longjmp") {
        throw _0x20fa73;
      }
      _0x5ed159(1, 0);
    }
  }
  function _0x35bf11(_0x4e9fb9, _0x4cd126, _0x4aba99) {
    var _0x23292c = _0x19cca3();
    try {
      _0x2879a8(_0x4e9fb9, _0x4cd126, _0x4aba99);
    } catch (_0x44c362) {
      _0x4cb3d3(_0x23292c);
      if (_0x44c362 !== _0x44c362 + 0 && _0x44c362 !== "longjmp") {
        throw _0x44c362;
      }
      _0x5ed159(1, 0);
    }
  }
  function _0x4f6a19(_0x2452ae, _0x5e022b) {
    var _0x5933c3 = _0x19cca3();
    try {
      _0x1c1a57(_0x2452ae, _0x5e022b);
    } catch (_0x148f64) {
      _0x4cb3d3(_0x5933c3);
      if (_0x148f64 !== _0x148f64 + 0 && _0x148f64 !== "longjmp") {
        throw _0x148f64;
      }
      _0x5ed159(1, 0);
    }
  }
  function _0x10b9be(_0x2712fb) {
    var _0xd41d9d = _0x19cca3();
    try {
      _0x57cc4c(_0x2712fb);
    } catch (_0x16b072) {
      _0x4cb3d3(_0xd41d9d);
      if (_0x16b072 !== _0x16b072 + 0 && _0x16b072 !== "longjmp") {
        throw _0x16b072;
      }
      _0x5ed159(1, 0);
    }
  }
  function _0x3e1d63(_0x377943) {
    var _0x57584a = _0x19cca3();
    try {
      return _0x4bb256(_0x377943);
    } catch (_0x4410c6) {
      _0x4cb3d3(_0x57584a);
      if (_0x4410c6 !== _0x4410c6 + 0 && _0x4410c6 !== "longjmp") {
        throw _0x4410c6;
      }
      _0x5ed159(1, 0);
    }
  }
  function _0x1866d8(_0x1d6fe6, _0x2bf701, _0x27f858, _0x30f257, _0xef9e9a, _0x58430c, _0x10c43a, _0x26bc5b) {
    var _0x5b7954 = _0x19cca3();
    try {
      return _0x1bbbaa(_0x1d6fe6, _0x2bf701, _0x27f858, _0x30f257, _0xef9e9a, _0x58430c, _0x10c43a, _0x26bc5b);
    } catch (_0x119bba) {
      _0x4cb3d3(_0x5b7954);
      if (_0x119bba !== _0x119bba + 0 && _0x119bba !== "longjmp") {
        throw _0x119bba;
      }
      _0x5ed159(1, 0);
    }
  }
  function _0x4ea8d5(_0xaa4b48, _0x55f206, _0x576e37, _0xe8fa2d, _0x3b903d, _0x556bd6) {
    var _0x3334a7 = _0x19cca3();
    try {
      _0x5ef341(_0xaa4b48, _0x55f206, _0x576e37, _0xe8fa2d, _0x3b903d, _0x556bd6);
    } catch (_0x15ec7c) {
      _0x4cb3d3(_0x3334a7);
      if (_0x15ec7c !== _0x15ec7c + 0 && _0x15ec7c !== "longjmp") {
        throw _0x15ec7c;
      }
      _0x5ed159(1, 0);
    }
  }
  function _0x18f1c6(_0x1e8c94, _0x2ac217, _0x636a3e, _0x41f1d0, _0x4f59f5, _0x264289, _0x1f149e) {
    var _0x578e5f = _0x19cca3();
    try {
      return _0x181730(_0x1e8c94, _0x2ac217, _0x636a3e, _0x41f1d0, _0x4f59f5, _0x264289, _0x1f149e);
    } catch (_0x2d3f66) {
      _0x4cb3d3(_0x578e5f);
      if (_0x2d3f66 !== _0x2d3f66 + 0 && _0x2d3f66 !== "longjmp") {
        throw _0x2d3f66;
      }
      _0x5ed159(1, 0);
    }
  }
  function _0x3d612f(_0x5878e0, _0xc6df6a, _0x3c4812, _0x2c2b6c, _0x3be731, _0x433c84, _0x36b52f, _0x49807f) {
    var _0x7872e1 = _0x19cca3();
    try {
      _0x1f7a8e(_0x5878e0, _0xc6df6a, _0x3c4812, _0x2c2b6c, _0x3be731, _0x433c84, _0x36b52f, _0x49807f);
    } catch (_0x1e60e1) {
      _0x4cb3d3(_0x7872e1);
      if (_0x1e60e1 !== _0x1e60e1 + 0 && _0x1e60e1 !== "longjmp") {
        throw _0x1e60e1;
      }
      _0x5ed159(1, 0);
    }
  }
  function _0x27e9f4(_0x11757c, _0x30d3d0, _0x1e9cea, _0x312202, _0x17dc50, _0x5cc800, _0x10e53b) {
    var _0x1a5119 = _0x19cca3();
    try {
      _0x6b7b41(_0x11757c, _0x30d3d0, _0x1e9cea, _0x312202, _0x17dc50, _0x5cc800, _0x10e53b);
    } catch (_0x1e7c16) {
      _0x4cb3d3(_0x1a5119);
      if (_0x1e7c16 !== _0x1e7c16 + 0 && _0x1e7c16 !== "longjmp") {
        throw _0x1e7c16;
      }
      _0x5ed159(1, 0);
    }
  }
  function _0x5e07ad(_0x56f712, _0x49eef5, _0x1cc59c) {
    var _0x4224de = _0x19cca3();
    try {
      return _0x4a3cb5(_0x56f712, _0x49eef5, _0x1cc59c);
    } catch (_0x5dcb6b) {
      _0x4cb3d3(_0x4224de);
      if (_0x5dcb6b !== _0x5dcb6b + 0 && _0x5dcb6b !== "longjmp") {
        throw _0x5dcb6b;
      }
      _0x5ed159(1, 0);
    }
  }
  function _0x324d1a(_0x52ec3f, _0x3c66d0, _0x511c4c, _0x270a24, _0x5453e8) {
    var _0x4e06ba = _0x19cca3();
    try {
      _0x5f03c2(_0x52ec3f, _0x3c66d0, _0x511c4c, _0x270a24, _0x5453e8);
    } catch (_0x32cb7e) {
      _0x4cb3d3(_0x4e06ba);
      if (_0x32cb7e !== _0x32cb7e + 0 && _0x32cb7e !== "longjmp") {
        throw _0x32cb7e;
      }
      _0x5ed159(1, 0);
    }
  }
  function _0x49aa6f(_0x5d8e3e, _0x4549d7, _0x25525f, _0x402ece, _0xe5b91c) {
    var _0xf82e27 = _0x19cca3();
    try {
      _0xb1ba65(_0x5d8e3e, _0x4549d7, _0x25525f, _0x402ece, _0xe5b91c);
    } catch (_0x130fc5) {
      _0x4cb3d3(_0xf82e27);
      if (_0x130fc5 !== _0x130fc5 + 0 && _0x130fc5 !== "longjmp") {
        throw _0x130fc5;
      }
      _0x5ed159(1, 0);
    }
  }
  function _0x530871(_0x2f5025, _0x3374b1, _0x151951) {
    var _0x290ca0 = _0x19cca3();
    try {
      return _0x329840(_0x2f5025, _0x3374b1, _0x151951);
    } catch (_0x286494) {
      _0x4cb3d3(_0x290ca0);
      if (_0x286494 !== _0x286494 + 0 && _0x286494 !== "longjmp") {
        throw _0x286494;
      }
      _0x5ed159(1, 0);
    }
  }
  function _0x7814f9(_0x2e0f7f, _0x1092e4, _0x536a2e, _0x1d3a9b, _0x56553a) {
    var _0x4b4e61 = _0x19cca3();
    try {
      return _0x29f676(_0x2e0f7f, _0x1092e4, _0x536a2e, _0x1d3a9b, _0x56553a);
    } catch (_0x460f2c) {
      _0x4cb3d3(_0x4b4e61);
      if (_0x460f2c !== _0x460f2c + 0 && _0x460f2c !== "longjmp") {
        throw _0x460f2c;
      }
      _0x5ed159(1, 0);
    }
  }
  function _0x4c910c(_0x3269f3, _0x3e2ef1, _0x533df8, _0x3d8199, _0x13672d) {
    var _0x53939d = _0x19cca3();
    try {
      return _0x1b4525(_0x3269f3, _0x3e2ef1, _0x533df8, _0x3d8199, _0x13672d);
    } catch (_0x328114) {
      _0x4cb3d3(_0x53939d);
      if (_0x328114 !== _0x328114 + 0 && _0x328114 !== "longjmp") {
        throw _0x328114;
      }
      _0x5ed159(1, 0);
    }
  }
  function _0x361f41(_0x3e89c0, _0x537500, _0x5008a5, _0x33c76c, _0x3f9a3b, _0x489b4a, _0x40f984, _0x49c3d7, _0x465db4) {
    var _0x3860e1 = _0x19cca3();
    try {
      _0x140e1e(_0x3e89c0, _0x537500, _0x5008a5, _0x33c76c, _0x3f9a3b, _0x489b4a, _0x40f984, _0x49c3d7, _0x465db4);
    } catch (_0x4a4da2) {
      _0x4cb3d3(_0x3860e1);
      if (_0x4a4da2 !== _0x4a4da2 + 0 && _0x4a4da2 !== "longjmp") {
        throw _0x4a4da2;
      }
      _0x5ed159(1, 0);
    }
  }
  function _0x1ba351(_0x25b171, _0x231f81, _0x2f42b8, _0x245e7b, _0x251565, _0x24e2e2) {
    var _0x26d34e = _0x19cca3();
    try {
      _0x1fc16f(_0x25b171, _0x231f81, _0x2f42b8, _0x245e7b, _0x251565, _0x24e2e2);
    } catch (_0xb726b3) {
      _0x4cb3d3(_0x26d34e);
      if (_0xb726b3 !== _0xb726b3 + 0 && _0xb726b3 !== "longjmp") {
        throw _0xb726b3;
      }
      _0x5ed159(1, 0);
    }
  }
  function _0x46f776(_0x22d569, _0x15748c, _0x54f5d1, _0x2678e2) {
    var _0x2392ed = _0x19cca3();
    try {
      _0x414fd7(_0x22d569, _0x15748c, _0x54f5d1, _0x2678e2);
    } catch (_0x38fcd7) {
      _0x4cb3d3(_0x2392ed);
      if (_0x38fcd7 !== _0x38fcd7 + 0 && _0x38fcd7 !== "longjmp") {
        throw _0x38fcd7;
      }
      _0x5ed159(1, 0);
    }
  }
  function _0x148e6d(_0x22da4f, _0x42d50b, _0x513d59, _0x12f2dd, _0x31b595) {
    var _0x2e32b6 = _0x19cca3();
    try {
      _0x5208a7(_0x22da4f, _0x42d50b, _0x513d59, _0x12f2dd, _0x31b595);
    } catch (_0x28ec28) {
      _0x4cb3d3(_0x2e32b6);
      if (_0x28ec28 !== _0x28ec28 + 0 && _0x28ec28 !== "longjmp") {
        throw _0x28ec28;
      }
      _0x5ed159(1, 0);
    }
  }
  function _0x45e975(_0x48d60d, _0x246ddc, _0x582b32, _0x191244) {
    var _0xa729cc = _0x19cca3();
    try {
      _0x1bf862(_0x48d60d, _0x246ddc, _0x582b32, _0x191244);
    } catch (_0x186685) {
      _0x4cb3d3(_0xa729cc);
      if (_0x186685 !== _0x186685 + 0 && _0x186685 !== "longjmp") {
        throw _0x186685;
      }
      _0x5ed159(1, 0);
    }
  }
  function _0x510f8a(_0x2d9ec9, _0x40c114, _0x1a68d0) {
    var _0x311aeb = _0x19cca3();
    try {
      return _0x3033de(_0x2d9ec9, _0x40c114, _0x1a68d0);
    } catch (_0x3f7380) {
      _0x4cb3d3(_0x311aeb);
      if (_0x3f7380 !== _0x3f7380 + 0 && _0x3f7380 !== "longjmp") {
        throw _0x3f7380;
      }
      _0x5ed159(1, 0);
    }
  }
  function _0x24e37e(_0x12e469, _0xcda110, _0x234fbf) {
    var _0x55d998 = _0x19cca3();
    try {
      return _0x2af74c(_0x12e469, _0xcda110, _0x234fbf);
    } catch (_0x1cb2b6) {
      _0x4cb3d3(_0x55d998);
      if (_0x1cb2b6 !== _0x1cb2b6 + 0 && _0x1cb2b6 !== "longjmp") {
        throw _0x1cb2b6;
      }
      _0x5ed159(1, 0);
    }
  }
  function _0x1713de(_0x8903a7, _0x519afd, _0xdd7775, _0x451ac0, _0x551ccf, _0x3448a8, _0x2c55e1, _0x4ab3c2, _0x221817, _0x538c23) {
    var _0x1cf451 = _0x19cca3();
    try {
      _0x1d3981(_0x8903a7, _0x519afd, _0xdd7775, _0x451ac0, _0x551ccf, _0x3448a8, _0x2c55e1, _0x4ab3c2, _0x221817, _0x538c23);
    } catch (_0x3dea3b) {
      _0x4cb3d3(_0x1cf451);
      if (_0x3dea3b !== _0x3dea3b + 0 && _0x3dea3b !== "longjmp") {
        throw _0x3dea3b;
      }
      _0x5ed159(1, 0);
    }
  }
  function _0x46d093(_0x509c2c, _0x2b6f07, _0x2d9a1a, _0xb055a2, _0x51692d, _0x53b845, _0x350ac2, _0x5f9b1c, _0x313aed, _0x555bf2, _0x400229, _0x53a5b4, _0x162588) {
    var _0x9a7575 = _0x19cca3();
    try {
      _0x425d9a(_0x509c2c, _0x2b6f07, _0x2d9a1a, _0xb055a2, _0x51692d, _0x53b845, _0x350ac2, _0x5f9b1c, _0x313aed, _0x555bf2, _0x400229, _0x53a5b4, _0x162588);
    } catch (_0x22e212) {
      _0x4cb3d3(_0x9a7575);
      if (_0x22e212 !== _0x22e212 + 0 && _0x22e212 !== "longjmp") {
        throw _0x22e212;
      }
      _0x5ed159(1, 0);
    }
  }
  function _0x37106b(_0x1481f9, _0x2c4167, _0x5333e6, _0x8ca22e, _0x381b7b, _0x509864, _0x241630, _0x257e07, _0x2bfdb1) {
    var _0x244e7b = _0x19cca3();
    try {
      return _0x3c4b00(_0x1481f9, _0x2c4167, _0x5333e6, _0x8ca22e, _0x381b7b, _0x509864, _0x241630, _0x257e07, _0x2bfdb1);
    } catch (_0xf5cb68) {
      _0x4cb3d3(_0x244e7b);
      if (_0xf5cb68 !== _0xf5cb68 + 0 && _0xf5cb68 !== "longjmp") {
        throw _0xf5cb68;
      }
      _0x5ed159(1, 0);
    }
  }
  function _0x2c0e50(_0x130263, _0x4404bb, _0x3baccd, _0x4f15c5, _0x5e8a6d, _0x5d3d0c, _0x167398, _0x222176, _0x4a5d53, _0x38f09b) {
    var _0x4cce64 = _0x19cca3();
    try {
      return _0x20c6d6(_0x130263, _0x4404bb, _0x3baccd, _0x4f15c5, _0x5e8a6d, _0x5d3d0c, _0x167398, _0x222176, _0x4a5d53, _0x38f09b);
    } catch (_0x4af409) {
      _0x4cb3d3(_0x4cce64);
      if (_0x4af409 !== _0x4af409 + 0 && _0x4af409 !== "longjmp") {
        throw _0x4af409;
      }
      _0x5ed159(1, 0);
    }
  }
  function _0x720e97(_0x2e745f, _0x3342ed, _0x34be34, _0x328629, _0xa5a0de) {
    var _0x30ca82 = _0x19cca3();
    try {
      return _0x3b295d(_0x2e745f, _0x3342ed, _0x34be34, _0x328629, _0xa5a0de);
    } catch (_0x2a86de) {
      _0x4cb3d3(_0x30ca82);
      if (_0x2a86de !== _0x2a86de + 0 && _0x2a86de !== "longjmp") {
        throw _0x2a86de;
      }
      _0x5ed159(1, 0);
    }
  }
  function _0x1b2792(_0x1edbef, _0x1a280f, _0x338333, _0x50a21e, _0x21e5aa) {
    var _0x14a89f = _0x19cca3();
    try {
      _0x56e65d(_0x1edbef, _0x1a280f, _0x338333, _0x50a21e, _0x21e5aa);
    } catch (_0x275092) {
      _0x4cb3d3(_0x14a89f);
      if (_0x275092 !== _0x275092 + 0 && _0x275092 !== "longjmp") {
        throw _0x275092;
      }
      _0x5ed159(1, 0);
    }
  }
  function _0x30a18f(_0x121d72, _0x55806e, _0x554359, _0x367a49, _0x56c131, _0x1ff682, _0x2b1301, _0x46a35e, _0x1775a3, _0x48caf7, _0x23ff8c) {
    var _0x56c9dc = _0x19cca3();
    try {
      _0x1109d8(_0x121d72, _0x55806e, _0x554359, _0x367a49, _0x56c131, _0x1ff682, _0x2b1301, _0x46a35e, _0x1775a3, _0x48caf7, _0x23ff8c);
    } catch (_0x4dac5b) {
      _0x4cb3d3(_0x56c9dc);
      if (_0x4dac5b !== _0x4dac5b + 0 && _0x4dac5b !== "longjmp") {
        throw _0x4dac5b;
      }
      _0x5ed159(1, 0);
    }
  }
  function _0x3e70a8(_0x52f5bc, _0x1b2d57, _0x6b6c55, _0x4b413b) {
    var _0x667b16 = _0x19cca3();
    try {
      return _0x47c498(_0x52f5bc, _0x1b2d57, _0x6b6c55, _0x4b413b);
    } catch (_0x44ed55) {
      _0x4cb3d3(_0x667b16);
      if (_0x44ed55 !== _0x44ed55 + 0 && _0x44ed55 !== "longjmp") {
        throw _0x44ed55;
      }
      _0x5ed159(1, 0);
    }
  }
  function _0x2ce06e(_0x5a4238, _0x1c4adf, _0x137eb6, _0x2a1267) {
    var _0x2afee6 = _0x19cca3();
    try {
      return _0x29ba83(_0x5a4238, _0x1c4adf, _0x137eb6, _0x2a1267);
    } catch (_0x431586) {
      _0x4cb3d3(_0x2afee6);
      if (_0x431586 !== _0x431586 + 0 && _0x431586 !== "longjmp") {
        throw _0x431586;
      }
      _0x5ed159(1, 0);
    }
  }
  function _0x13446e(_0x238a5d, _0x1312e9, _0x1628b1, _0x2bba1d) {
    var _0x4da81b = _0x19cca3();
    try {
      return _0x12550d(_0x238a5d, _0x1312e9, _0x1628b1, _0x2bba1d);
    } catch (_0x1e5b88) {
      _0x4cb3d3(_0x4da81b);
      if (_0x1e5b88 !== _0x1e5b88 + 0 && _0x1e5b88 !== "longjmp") {
        throw _0x1e5b88;
      }
      _0x5ed159(1, 0);
    }
  }
  function _0x40cd92(_0x4bbffb, _0x3d0f50, _0x1bdd0d, _0x588362) {
    var _0x4ddf43 = _0x19cca3();
    try {
      return _0x47c1ac(_0x4bbffb, _0x3d0f50, _0x1bdd0d, _0x588362);
    } catch (_0x1d89ab) {
      _0x4cb3d3(_0x4ddf43);
      if (_0x1d89ab !== _0x1d89ab + 0 && _0x1d89ab !== "longjmp") {
        throw _0x1d89ab;
      }
      _0x5ed159(1, 0);
    }
  }
  function _0x3468bd(_0x25cfb4, _0x24de7f, _0x3517e4, _0x4a289b, _0x34308e) {
    var _0x4ec12f = _0x19cca3();
    try {
      return _0x1f2663(_0x25cfb4, _0x24de7f, _0x3517e4, _0x4a289b, _0x34308e);
    } catch (_0x28284c) {
      _0x4cb3d3(_0x4ec12f);
      if (_0x28284c !== _0x28284c + 0 && _0x28284c !== "longjmp") {
        throw _0x28284c;
      }
      _0x5ed159(1, 0);
    }
  }
  function _0x334211(_0x12dabf, _0x222c8f, _0x109c05, _0xb36a5f, _0x31038e, _0x34e787, _0x44aee3, _0xe717af, _0x3beccd, _0x5f1b32, _0x21c6a1, _0x16e8ae, _0x5866f3) {
    var _0x382648 = _0x19cca3();
    try {
      return _0x6af63c(_0x12dabf, _0x222c8f, _0x109c05, _0xb36a5f, _0x31038e, _0x34e787, _0x44aee3, _0xe717af, _0x3beccd, _0x5f1b32, _0x21c6a1, _0x16e8ae, _0x5866f3);
    } catch (_0x190410) {
      _0x4cb3d3(_0x382648);
      if (_0x190410 !== _0x190410 + 0 && _0x190410 !== "longjmp") {
        throw _0x190410;
      }
      _0x5ed159(1, 0);
    }
  }
  function _0x433efc(_0x309972, _0x3699c5, _0x5832c6, _0x2e1857, _0x49eb5c, _0x5d793f) {
    var _0x1dff2a = _0x19cca3();
    try {
      _0x298d71(_0x309972, _0x3699c5, _0x5832c6, _0x2e1857, _0x49eb5c, _0x5d793f);
    } catch (_0x5b2e80) {
      _0x4cb3d3(_0x1dff2a);
      if (_0x5b2e80 !== _0x5b2e80 + 0 && _0x5b2e80 !== "longjmp") {
        throw _0x5b2e80;
      }
      _0x5ed159(1, 0);
    }
  }
  function _0x4d9f75(_0x2b9545, _0x510cf8, _0x388973, _0x584c09, _0x13b670, _0x5ab2c9, _0x57226f, _0x3f2586, _0x409b1c, _0x181c82) {
    var _0x31d321 = _0x19cca3();
    try {
      return _0x667ead(_0x2b9545, _0x510cf8, _0x388973, _0x584c09, _0x13b670, _0x5ab2c9, _0x57226f, _0x3f2586, _0x409b1c, _0x181c82);
    } catch (_0x256da4) {
      _0x4cb3d3(_0x31d321);
      if (_0x256da4 !== _0x256da4 + 0 && _0x256da4 !== "longjmp") {
        throw _0x256da4;
      }
      _0x5ed159(1, 0);
    }
  }
  function _0x1acdb8(_0x3ee0e, _0x1ba92b, _0x4b92a1, _0x4e846e, _0x385ede) {
    var _0x175634 = _0x19cca3();
    try {
      return _0x4e79e8(_0x3ee0e, _0x1ba92b, _0x4b92a1, _0x4e846e, _0x385ede);
    } catch (_0x1f5080) {
      _0x4cb3d3(_0x175634);
      if (_0x1f5080 !== _0x1f5080 + 0 && _0x1f5080 !== "longjmp") {
        throw _0x1f5080;
      }
      _0x5ed159(1, 0);
    }
  }
  function _0x4575b2(_0x64eec8, _0x1ab77c, _0x1933b5, _0x3f3947, _0xe81a36, _0x22f4ec, _0x7d251d, _0x472933, _0x5b11aa, _0x526096, _0x89e301, _0x2c1970, _0x4a8f2f, _0x320d19, _0x15ef0f, _0x4b0a77, _0x4c2141, _0x27cea5) {
    var _0x5ef793 = _0x19cca3();
    try {
      _0x3db5f9(_0x64eec8, _0x1ab77c, _0x1933b5, _0x3f3947, _0xe81a36, _0x22f4ec, _0x7d251d, _0x472933, _0x5b11aa, _0x526096, _0x89e301, _0x2c1970, _0x4a8f2f, _0x320d19, _0x15ef0f, _0x4b0a77, _0x4c2141, _0x27cea5);
    } catch (_0x2a9aee) {
      _0x4cb3d3(_0x5ef793);
      if (_0x2a9aee !== _0x2a9aee + 0 && _0x2a9aee !== "longjmp") {
        throw _0x2a9aee;
      }
      _0x5ed159(1, 0);
    }
  }
  function _0x39535f(_0x1dbb26, _0x28b999, _0x209bc5, _0x5ad5aa, _0x4a5310, _0x4559be, _0x1e0b54, _0x4aae0d, _0xb14f2e, _0x52c911, _0x1c69be, _0x53caa1, _0x13bdfc, _0x25f81e, _0x3ce98b, _0x26399e, _0x7b35d8, _0x46eb8f) {
    var _0x2496fc = _0x19cca3();
    try {
      _0x22529b(_0x1dbb26, _0x28b999, _0x209bc5, _0x5ad5aa, _0x4a5310, _0x4559be, _0x1e0b54, _0x4aae0d, _0xb14f2e, _0x52c911, _0x1c69be, _0x53caa1, _0x13bdfc, _0x25f81e, _0x3ce98b, _0x26399e, _0x7b35d8, _0x46eb8f);
    } catch (_0x3c909e) {
      _0x4cb3d3(_0x2496fc);
      if (_0x3c909e !== _0x3c909e + 0 && _0x3c909e !== "longjmp") {
        throw _0x3c909e;
      }
      _0x5ed159(1, 0);
    }
  }
  function _0x59c757(_0x4bfec4, _0x6af470, _0x10ef10) {
    var _0x2b8b10 = _0x19cca3();
    try {
      _0x2ccd27(_0x4bfec4, _0x6af470, _0x10ef10);
    } catch (_0x2af38a) {
      _0x4cb3d3(_0x2b8b10);
      if (_0x2af38a !== _0x2af38a + 0 && _0x2af38a !== "longjmp") {
        throw _0x2af38a;
      }
      _0x5ed159(1, 0);
    }
  }
  function _0x4b83ca(_0x3865a0, _0x293795, _0x5e243a, _0x481c37, _0x1d00e0, _0x1a046c) {
    var _0x2af4e9 = _0x19cca3();
    try {
      return _0x23d6b5(_0x3865a0, _0x293795, _0x5e243a, _0x481c37, _0x1d00e0, _0x1a046c);
    } catch (_0x201bc5) {
      _0x4cb3d3(_0x2af4e9);
      if (_0x201bc5 !== _0x201bc5 + 0 && _0x201bc5 !== "longjmp") {
        throw _0x201bc5;
      }
      _0x5ed159(1, 0);
    }
  }
  function _0x2c6b42(_0x961991, _0xbffd5d) {
    var _0x3cd0b7 = _0x19cca3();
    try {
      return _0x486058(_0x961991, _0xbffd5d);
    } catch (_0x2f54a6) {
      _0x4cb3d3(_0x3cd0b7);
      if (_0x2f54a6 !== _0x2f54a6 + 0 && _0x2f54a6 !== "longjmp") {
        throw _0x2f54a6;
      }
      _0x5ed159(1, 0);
    }
  }
  function _0x3287ae(_0x1844fa, _0xadd801, _0x3e2cdb, _0x4164cf, _0x36fb07) {
    var _0x41a5d3 = _0x19cca3();
    try {
      return _0xb5d725(_0x1844fa, _0xadd801, _0x3e2cdb, _0x4164cf, _0x36fb07);
    } catch (_0x5d6386) {
      _0x4cb3d3(_0x41a5d3);
      if (_0x5d6386 !== _0x5d6386 + 0 && _0x5d6386 !== "longjmp") {
        throw _0x5d6386;
      }
      _0x5ed159(1, 0);
    }
  }
  function _0x16d1e3(_0x4f639e, _0x208af3) {
    var _0x5b6956 = _0x19cca3();
    try {
      return _0x5c0aed(_0x4f639e, _0x208af3);
    } catch (_0x50e9ed) {
      _0x4cb3d3(_0x5b6956);
      if (_0x50e9ed !== _0x50e9ed + 0 && _0x50e9ed !== "longjmp") {
        throw _0x50e9ed;
      }
      _0x5ed159(1, 0);
    }
  }
  function _0x237161(_0x19187a, _0x33c638, _0x38978c, _0xac3dbd, _0x3da9d0, _0x30e2fb) {
    var _0x4264b7 = _0x19cca3();
    try {
      return _0x5b3f89(_0x19187a, _0x33c638, _0x38978c, _0xac3dbd, _0x3da9d0, _0x30e2fb);
    } catch (_0x46f620) {
      _0x4cb3d3(_0x4264b7);
      if (_0x46f620 !== _0x46f620 + 0 && _0x46f620 !== "longjmp") {
        throw _0x46f620;
      }
      _0x5ed159(1, 0);
    }
  }
  function _0x494221(_0x29536d, _0x3f7ea6, _0x533e0f, _0x1e8045, _0x2ccf56, _0x384915, _0x3070d4) {
    var _0xeb9ed4 = _0x19cca3();
    try {
      _0x1a9c4d(_0x29536d, _0x3f7ea6, _0x533e0f, _0x1e8045, _0x2ccf56, _0x384915, _0x3070d4);
    } catch (_0x3438d5) {
      _0x4cb3d3(_0xeb9ed4);
      if (_0x3438d5 !== _0x3438d5 + 0 && _0x3438d5 !== "longjmp") {
        throw _0x3438d5;
      }
      _0x5ed159(1, 0);
    }
  }
  function _0x34d6a7(_0x3dc9f6, _0x5d8ef5, _0x2250c0, _0x2b25d5, _0x481b08, _0x2bd495, _0x29f26f, _0x4a56bb, _0x19e60c, _0x3ca119, _0x2a694a, _0xfcdbdc, _0x53ea82, _0x5bd8bb, _0x3ae14d, _0x19bd5f, _0x3b3c2a, _0x3d5bda, _0x43a09c) {
    var _0x5ea2e1 = _0x19cca3();
    try {
      return _0x59d7ac(_0x3dc9f6, _0x5d8ef5, _0x2250c0, _0x2b25d5, _0x481b08, _0x2bd495, _0x29f26f, _0x4a56bb, _0x19e60c, _0x3ca119, _0x2a694a, _0xfcdbdc, _0x53ea82, _0x5bd8bb, _0x3ae14d, _0x19bd5f, _0x3b3c2a, _0x3d5bda, _0x43a09c);
    } catch (_0x4da70a) {
      _0x4cb3d3(_0x5ea2e1);
      if (_0x4da70a !== _0x4da70a + 0 && _0x4da70a !== "longjmp") {
        throw _0x4da70a;
      }
      _0x5ed159(1, 0);
    }
  }
  function _0x54048c(_0x123c8c, _0x422c03, _0x4109a5, _0x531e66, _0x32c9e6, _0x27dcdf, _0x16cd1b) {
    var _0x412ec = _0x19cca3();
    try {
      _0x35522e(_0x123c8c, _0x422c03, _0x4109a5, _0x531e66, _0x32c9e6, _0x27dcdf, _0x16cd1b);
    } catch (_0x11d89f) {
      _0x4cb3d3(_0x412ec);
      if (_0x11d89f !== _0x11d89f + 0 && _0x11d89f !== "longjmp") {
        throw _0x11d89f;
      }
      _0x5ed159(1, 0);
    }
  }
  function _0x3636f8(_0xb3b12f, _0x31b700, _0x46081f, _0x2735d1, _0x1cb6eb) {
    var _0x1e0ca1 = _0x19cca3();
    try {
      return _0x10a9cd(_0xb3b12f, _0x31b700, _0x46081f, _0x2735d1, _0x1cb6eb);
    } catch (_0x587617) {
      _0x4cb3d3(_0x1e0ca1);
      if (_0x587617 !== _0x587617 + 0 && _0x587617 !== "longjmp") {
        throw _0x587617;
      }
      _0x5ed159(1, 0);
    }
  }
  function _0xbcee09(_0x414dc8, _0x4f8e06, _0x350ee9, _0x57bccf, _0x5cf798, _0x30f43f, _0x2059a7) {
    var _0x4c36a1 = _0x19cca3();
    try {
      return _0x490028(_0x414dc8, _0x4f8e06, _0x350ee9, _0x57bccf, _0x5cf798, _0x30f43f, _0x2059a7);
    } catch (_0x37971a) {
      _0x4cb3d3(_0x4c36a1);
      if (_0x37971a !== _0x37971a + 0 && _0x37971a !== "longjmp") {
        throw _0x37971a;
      }
      _0x5ed159(1, 0);
    }
  }
  function _0x1d7b10(_0x23535c, _0x2f1b6d, _0x1cfa3f, _0x25f72b, _0x18b904, _0x574c32, _0x9127b6, _0x4cae60) {
    var _0xd95140 = _0x19cca3();
    try {
      _0x37a8ae(_0x23535c, _0x2f1b6d, _0x1cfa3f, _0x25f72b, _0x18b904, _0x574c32, _0x9127b6, _0x4cae60);
    } catch (_0xdd838d) {
      _0x4cb3d3(_0xd95140);
      if (_0xdd838d !== _0xdd838d + 0 && _0xdd838d !== "longjmp") {
        throw _0xdd838d;
      }
      _0x5ed159(1, 0);
    }
  }
  function _0x2c6454(_0x550a84, _0x1cd6b8, _0x5884e1, _0x56ee5f, _0x253e8b) {
    var _0x165649 = _0x19cca3();
    try {
      return _0x31d0bd(_0x550a84, _0x1cd6b8, _0x5884e1, _0x56ee5f, _0x253e8b);
    } catch (_0x5f37a8) {
      _0x4cb3d3(_0x165649);
      if (_0x5f37a8 !== _0x5f37a8 + 0 && _0x5f37a8 !== "longjmp") {
        throw _0x5f37a8;
      }
      _0x5ed159(1, 0);
    }
  }
  function _0x422e8f(_0x5cb9e7, _0x5a47da, _0x5ade86, _0x4a3625, _0x5f5afe, _0x34f8fe, _0x3ba0f4, _0x35de3e, _0x1a30cd, _0x45492a, _0x30acac, _0xd6cca5, _0x127ba3, _0x1dcbf7) {
    var _0x4a739d = _0x19cca3();
    try {
      return _0x354923(_0x5cb9e7, _0x5a47da, _0x5ade86, _0x4a3625, _0x5f5afe, _0x34f8fe, _0x3ba0f4, _0x35de3e, _0x1a30cd, _0x45492a, _0x30acac, _0xd6cca5, _0x127ba3, _0x1dcbf7);
    } catch (_0x548827) {
      _0x4cb3d3(_0x4a739d);
      if (_0x548827 !== _0x548827 + 0 && _0x548827 !== "longjmp") {
        throw _0x548827;
      }
      _0x5ed159(1, 0);
    }
  }
  function _0x654814(_0x2b4579, _0x3e83a9, _0x4dc2c6, _0x44839c, _0x1cc805, _0x2d7288, _0x4405c4, _0x32c035, _0x2fcd5d, _0x5e17e6, _0x32fb66, _0x35a399, _0x273387, _0xc8e89c, _0x3055f8, _0x29c511, _0x3c183a) {
    var _0x48146e = _0x19cca3();
    try {
      _0x321353(_0x2b4579, _0x3e83a9, _0x4dc2c6, _0x44839c, _0x1cc805, _0x2d7288, _0x4405c4, _0x32c035, _0x2fcd5d, _0x5e17e6, _0x32fb66, _0x35a399, _0x273387, _0xc8e89c, _0x3055f8, _0x29c511, _0x3c183a);
    } catch (_0x5db6cb) {
      _0x4cb3d3(_0x48146e);
      if (_0x5db6cb !== _0x5db6cb + 0 && _0x5db6cb !== "longjmp") {
        throw _0x5db6cb;
      }
      _0x5ed159(1, 0);
    }
  }
  function _0x7a644d(_0x89d42c, _0xe2b7cd, _0x2f5edf, _0x45ea68, _0x13a53f, _0x14edd2, _0x5d4961, _0x46f361, _0x4335ff, _0xd1ecf1, _0x57719d, _0x30cdb6, _0x23bf31, _0x56dab9, _0x34e430) {
    var _0x8fb52d = _0x19cca3();
    try {
      _0x257176(_0x89d42c, _0xe2b7cd, _0x2f5edf, _0x45ea68, _0x13a53f, _0x14edd2, _0x5d4961, _0x46f361, _0x4335ff, _0xd1ecf1, _0x57719d, _0x30cdb6, _0x23bf31, _0x56dab9, _0x34e430);
    } catch (_0x22e909) {
      _0x4cb3d3(_0x8fb52d);
      if (_0x22e909 !== _0x22e909 + 0 && _0x22e909 !== "longjmp") {
        throw _0x22e909;
      }
      _0x5ed159(1, 0);
    }
  }
  function _0x37b93a(_0x28108c, _0x534bc5, _0x1f6cd7, _0x2457af, _0x1f5ce3, _0x2efe54, _0x3f19cd, _0x282c02, _0x43ae14, _0x271838, _0x2ed4ed, _0x11e737, _0x14cc26) {
    var _0x18bc11 = _0x19cca3();
    try {
      _0x42b67c(_0x28108c, _0x534bc5, _0x1f6cd7, _0x2457af, _0x1f5ce3, _0x2efe54, _0x3f19cd, _0x282c02, _0x43ae14, _0x271838, _0x2ed4ed, _0x11e737, _0x14cc26);
    } catch (_0x5a60ad) {
      _0x4cb3d3(_0x18bc11);
      if (_0x5a60ad !== _0x5a60ad + 0 && _0x5a60ad !== "longjmp") {
        throw _0x5a60ad;
      }
      _0x5ed159(1, 0);
    }
  }
  function _0x2415c4(_0x25c263, _0x451644, _0x3451ff, _0x26f6a5, _0x2cc1d4, _0x1cfa57, _0x1cd3f3, _0x2b6bd5, _0x4e7656, _0x5506a0, _0x34d310, _0x57530e, _0x34ab2e, _0x3dfda5, _0x5ece39, _0x5a3a91) {
    var _0x5519b3 = _0x19cca3();
    try {
      _0x3ce31b(_0x25c263, _0x451644, _0x3451ff, _0x26f6a5, _0x2cc1d4, _0x1cfa57, _0x1cd3f3, _0x2b6bd5, _0x4e7656, _0x5506a0, _0x34d310, _0x57530e, _0x34ab2e, _0x3dfda5, _0x5ece39, _0x5a3a91);
    } catch (_0x47c89a) {
      _0x4cb3d3(_0x5519b3);
      if (_0x47c89a !== _0x47c89a + 0 && _0x47c89a !== "longjmp") {
        throw _0x47c89a;
      }
      _0x5ed159(1, 0);
    }
  }
  function _0x3878f8(_0x46cb1b, _0x3ee552, _0x544bcc, _0x5cc4e7, _0xe86782, _0x234d59, _0x479c56) {
    var _0x4c9744 = _0x19cca3();
    try {
      _0x301360(_0x46cb1b, _0x3ee552, _0x544bcc, _0x5cc4e7, _0xe86782, _0x234d59, _0x479c56);
    } catch (_0x5774ac) {
      _0x4cb3d3(_0x4c9744);
      if (_0x5774ac !== _0x5774ac + 0 && _0x5774ac !== "longjmp") {
        throw _0x5774ac;
      }
      _0x5ed159(1, 0);
    }
  }
  function _0x23b4f5(_0x1ded53, _0x183583, _0x496a6b, _0x233771, _0x520f51, _0x3c8f5a, _0x57f2ec, _0x488365, _0x139d81, _0x15553c) {
    var _0x16b0ec = _0x19cca3();
    try {
      return _0x46a5d6(_0x1ded53, _0x183583, _0x496a6b, _0x233771, _0x520f51, _0x3c8f5a, _0x57f2ec, _0x488365, _0x139d81, _0x15553c);
    } catch (_0x493506) {
      _0x4cb3d3(_0x16b0ec);
      if (_0x493506 !== _0x493506 + 0 && _0x493506 !== "longjmp") {
        throw _0x493506;
      }
      _0x5ed159(1, 0);
    }
  }
  function _0x201df5(_0xd4939f, _0x5047cd, _0x3c5799, _0x5b045e, _0x453fca, _0x802b26, _0x5d8b3f, _0x51277e, _0x58a803, _0x5e561d, _0x3a6195, _0x335b9d) {
    var _0x5f5044 = _0x19cca3();
    try {
      _0x4622bf(_0xd4939f, _0x5047cd, _0x3c5799, _0x5b045e, _0x453fca, _0x802b26, _0x5d8b3f, _0x51277e, _0x58a803, _0x5e561d, _0x3a6195, _0x335b9d);
    } catch (_0x345d74) {
      _0x4cb3d3(_0x5f5044);
      if (_0x345d74 !== _0x345d74 + 0 && _0x345d74 !== "longjmp") {
        throw _0x345d74;
      }
      _0x5ed159(1, 0);
    }
  }
  function _0x2c84c7(_0x4baf96, _0x10292a, _0x9f3a1c, _0x273d7f, _0x1febc6, _0x4be7ab, _0x5b7d79, _0x3d6d4f, _0x22101f, _0xf1d9d2, _0x299713, _0x321363, _0x3fb2f6, _0x56ad78, _0x57ab64) {
    var _0xaf1216 = _0x19cca3();
    try {
      _0x16399d(_0x4baf96, _0x10292a, _0x9f3a1c, _0x273d7f, _0x1febc6, _0x4be7ab, _0x5b7d79, _0x3d6d4f, _0x22101f, _0xf1d9d2, _0x299713, _0x321363, _0x3fb2f6, _0x56ad78, _0x57ab64);
    } catch (_0x20c651) {
      _0x4cb3d3(_0xaf1216);
      if (_0x20c651 !== _0x20c651 + 0 && _0x20c651 !== "longjmp") {
        throw _0x20c651;
      }
      _0x5ed159(1, 0);
    }
  }
  function _0x34192d(_0x43e35a, _0x2e20c0, _0x114e3a, _0x21c297, _0x3f3d92, _0x1767c7, _0x56923f, _0x30eeef, _0x1d767a, _0x35009e, _0x464b49, _0x240881, _0x2c4adc, _0x2c1e6a, _0x4c175c) {
    var _0x1deba8 = _0x19cca3();
    try {
      _0x301921(_0x43e35a, _0x2e20c0, _0x114e3a, _0x21c297, _0x3f3d92, _0x1767c7, _0x56923f, _0x30eeef, _0x1d767a, _0x35009e, _0x464b49, _0x240881, _0x2c4adc, _0x2c1e6a, _0x4c175c);
    } catch (_0x271e07) {
      _0x4cb3d3(_0x1deba8);
      if (_0x271e07 !== _0x271e07 + 0 && _0x271e07 !== "longjmp") {
        throw _0x271e07;
      }
      _0x5ed159(1, 0);
    }
  }
  function _0x30cd60(_0x35bffa, _0x3e0e3f, _0x1ff88e, _0x57f158, _0x608028, _0x2d9a2f, _0x404fe2, _0x2f41a8, _0x4e0e7a, _0xa689da, _0x577fa7, _0x1e9afa, _0x18d1cf, _0x5a33be, _0x4b26f8) {
    var _0x2ef862 = _0x19cca3();
    try {
      _0x3f9486(_0x35bffa, _0x3e0e3f, _0x1ff88e, _0x57f158, _0x608028, _0x2d9a2f, _0x404fe2, _0x2f41a8, _0x4e0e7a, _0xa689da, _0x577fa7, _0x1e9afa, _0x18d1cf, _0x5a33be, _0x4b26f8);
    } catch (_0x2da69c) {
      _0x4cb3d3(_0x2ef862);
      if (_0x2da69c !== _0x2da69c + 0 && _0x2da69c !== "longjmp") {
        throw _0x2da69c;
      }
      _0x5ed159(1, 0);
    }
  }
  function _0x1d2be3(_0x11d7b6, _0x46f95b, _0x444116, _0x23ff51, _0x2c3115, _0x171085, _0x36a2be) {
    var _0x2297d7 = _0x19cca3();
    try {
      return _0x401df3(_0x11d7b6, _0x46f95b, _0x444116, _0x23ff51, _0x2c3115, _0x171085, _0x36a2be);
    } catch (_0x526202) {
      _0x4cb3d3(_0x2297d7);
      if (_0x526202 !== _0x526202 + 0 && _0x526202 !== "longjmp") {
        throw _0x526202;
      }
      _0x5ed159(1, 0);
    }
  }
  function _0x3f30aa(_0x476db6, _0x484e36, _0x422b1e, _0x4b4727, _0x346504, _0x2334c6) {
    var _0x5a56d9 = _0x19cca3();
    try {
      _0x3a10c6(_0x476db6, _0x484e36, _0x422b1e, _0x4b4727, _0x346504, _0x2334c6);
    } catch (_0x12fd15) {
      _0x4cb3d3(_0x5a56d9);
      if (_0x12fd15 !== _0x12fd15 + 0 && _0x12fd15 !== "longjmp") {
        throw _0x12fd15;
      }
      _0x5ed159(1, 0);
    }
  }
  function _0x1bef0d(_0x27719b, _0x5ebd3a, _0x1b96c6, _0x25a2b6, _0x5eba6d, _0x13f054) {
    var _0x31c886 = _0x19cca3();
    try {
      _0x47cdd2(_0x27719b, _0x5ebd3a, _0x1b96c6, _0x25a2b6, _0x5eba6d, _0x13f054);
    } catch (_0x549d18) {
      _0x4cb3d3(_0x31c886);
      if (_0x549d18 !== _0x549d18 + 0 && _0x549d18 !== "longjmp") {
        throw _0x549d18;
      }
      _0x5ed159(1, 0);
    }
  }
  function _0x3bc930(_0x3718ef, _0x3d4119, _0x56f521, _0x43cbb0, _0x4e74ae, _0x8d104) {
    var _0x2c86ef = _0x19cca3();
    try {
      _0x26e4c5(_0x3718ef, _0x3d4119, _0x56f521, _0x43cbb0, _0x4e74ae, _0x8d104);
    } catch (_0x56614d) {
      _0x4cb3d3(_0x2c86ef);
      if (_0x56614d !== _0x56614d + 0 && _0x56614d !== "longjmp") {
        throw _0x56614d;
      }
      _0x5ed159(1, 0);
    }
  }
  function _0x8f037b(_0x2e20c6, _0x355bb8, _0x40d01a, _0x5f3b58, _0xe11dd5, _0x42cd17) {
    var _0x29202c = _0x19cca3();
    try {
      return _0x56dab1(_0x2e20c6, _0x355bb8, _0x40d01a, _0x5f3b58, _0xe11dd5, _0x42cd17);
    } catch (_0x24e2e6) {
      _0x4cb3d3(_0x29202c);
      if (_0x24e2e6 !== _0x24e2e6 + 0 && _0x24e2e6 !== "longjmp") {
        throw _0x24e2e6;
      }
      _0x5ed159(1, 0);
    }
  }
  function _0x24957c(_0xa1dce, _0x2a01ce, _0x11e275, _0xaea850, _0x1671a2, _0x2dd909, _0x1c9e56, _0x4bf0eb) {
    var _0x56a512 = _0x19cca3();
    try {
      return _0x2dc654(_0xa1dce, _0x2a01ce, _0x11e275, _0xaea850, _0x1671a2, _0x2dd909, _0x1c9e56, _0x4bf0eb);
    } catch (_0x5b42de) {
      _0x4cb3d3(_0x56a512);
      if (_0x5b42de !== _0x5b42de + 0 && _0x5b42de !== "longjmp") {
        throw _0x5b42de;
      }
      _0x5ed159(1, 0);
    }
  }
  function _0x1d7b6c(_0x3199d, _0x5698a5, _0x57b276, _0x4f3927, _0x353b27, _0x42a2d6, _0x107f14, _0x4b32f3, _0x449d35, _0x23b502, _0x63ee57) {
    var _0x536aba = _0x19cca3();
    try {
      return _0x490225(_0x3199d, _0x5698a5, _0x57b276, _0x4f3927, _0x353b27, _0x42a2d6, _0x107f14, _0x4b32f3, _0x449d35, _0x23b502, _0x63ee57);
    } catch (_0x5b9316) {
      _0x4cb3d3(_0x536aba);
      if (_0x5b9316 !== _0x5b9316 + 0 && _0x5b9316 !== "longjmp") {
        throw _0x5b9316;
      }
      _0x5ed159(1, 0);
    }
  }
  function _0x49b19a(_0x985ba1, _0x5520f0, _0x379730, _0x38445f, _0x471870, _0x588352) {
    var _0xeac29d = _0x19cca3();
    try {
      return _0x159484(_0x985ba1, _0x5520f0, _0x379730, _0x38445f, _0x471870, _0x588352);
    } catch (_0x4a93f0) {
      _0x4cb3d3(_0xeac29d);
      if (_0x4a93f0 !== _0x4a93f0 + 0 && _0x4a93f0 !== "longjmp") {
        throw _0x4a93f0;
      }
      _0x5ed159(1, 0);
    }
  }
  function _0xa97a38(_0x2b5cf1, _0x54681d, _0x1b9fdb, _0x4e6450, _0x54a098, _0x2f7ffb, _0x17156a) {
    var _0x336db6 = _0x19cca3();
    try {
      return _0x146ceb(_0x2b5cf1, _0x54681d, _0x1b9fdb, _0x4e6450, _0x54a098, _0x2f7ffb, _0x17156a);
    } catch (_0x4086df) {
      _0x4cb3d3(_0x336db6);
      if (_0x4086df !== _0x4086df + 0 && _0x4086df !== "longjmp") {
        throw _0x4086df;
      }
      _0x5ed159(1, 0);
    }
  }
  function _0x32e520(_0xd64253, _0x5a59eb, _0x4276f3, _0x5a617c, _0x4e0dea, _0x2d65e2, _0x3b0e2f) {
    var _0x4301eb = _0x19cca3();
    try {
      return _0x3a1ca2(_0xd64253, _0x5a59eb, _0x4276f3, _0x5a617c, _0x4e0dea, _0x2d65e2, _0x3b0e2f);
    } catch (_0x5616a0) {
      _0x4cb3d3(_0x4301eb);
      if (_0x5616a0 !== _0x5616a0 + 0 && _0x5616a0 !== "longjmp") {
        throw _0x5616a0;
      }
      _0x5ed159(1, 0);
    }
  }
  function _0x194503(_0x24305e, _0x47ac8d, _0x4eaea8, _0x232962) {
    var _0x4d9658 = _0x19cca3();
    try {
      _0x5a7063(_0x24305e, _0x47ac8d, _0x4eaea8, _0x232962);
    } catch (_0x1b7740) {
      _0x4cb3d3(_0x4d9658);
      if (_0x1b7740 !== _0x1b7740 + 0 && _0x1b7740 !== "longjmp") {
        throw _0x1b7740;
      }
      _0x5ed159(1, 0);
    }
  }
  function _0x1eb4a4(_0x43e69d, _0x45174e, _0x293183, _0x23f6f4, _0x3df279) {
    var _0x436fa4 = _0x19cca3();
    try {
      return _0xbd39f5(_0x43e69d, _0x45174e, _0x293183, _0x23f6f4, _0x3df279);
    } catch (_0x3278be) {
      _0x4cb3d3(_0x436fa4);
      if (_0x3278be !== _0x3278be + 0 && _0x3278be !== "longjmp") {
        throw _0x3278be;
      }
      _0x5ed159(1, 0);
    }
  }
  function _0x5497e1(_0x18744c, _0x4b7930, _0x35a1fb, _0x23e135, _0x5f0aa1) {
    var _0x20b257 = _0x19cca3();
    try {
      return _0x2ffc5e(_0x18744c, _0x4b7930, _0x35a1fb, _0x23e135, _0x5f0aa1);
    } catch (_0x477297) {
      _0x4cb3d3(_0x20b257);
      if (_0x477297 !== _0x477297 + 0 && _0x477297 !== "longjmp") {
        throw _0x477297;
      }
      _0x5ed159(1, 0);
    }
  }
  function _0x3a0679(_0x174402) {
    var _0x1146e4 = _0x19cca3();
    try {
      return _0x405d4d(_0x174402);
    } catch (_0x50f867) {
      _0x4cb3d3(_0x1146e4);
      if (_0x50f867 !== _0x50f867 + 0 && _0x50f867 !== "longjmp") {
        throw _0x50f867;
      }
      _0x5ed159(1, 0);
    }
  }
  function _0x4e700f(_0x4cadf4, _0x55613b, _0x4892eb, _0x35005f) {
    var _0x5612c0 = _0x19cca3();
    try {
      return _0x1d1723(_0x4cadf4, _0x55613b, _0x4892eb, _0x35005f);
    } catch (_0x57461e) {
      _0x4cb3d3(_0x5612c0);
      if (_0x57461e !== _0x57461e + 0 && _0x57461e !== "longjmp") {
        throw _0x57461e;
      }
      _0x5ed159(1, 0);
    }
  }
  function _0x54a033(_0x139061, _0x4af5ae, _0x4f182a, _0x4d41c8, _0x2c1e87, _0x2b5c5c, _0xc4030c, _0x13b42e) {
    var _0x352026 = _0x19cca3();
    try {
      return _0x570c8a(_0x139061, _0x4af5ae, _0x4f182a, _0x4d41c8, _0x2c1e87, _0x2b5c5c, _0xc4030c, _0x13b42e);
    } catch (_0x40812b) {
      _0x4cb3d3(_0x352026);
      if (_0x40812b !== _0x40812b + 0 && _0x40812b !== "longjmp") {
        throw _0x40812b;
      }
      _0x5ed159(1, 0);
    }
  }
  function _0x2c5532(_0x43df0f, _0x54b9af) {
    var _0x2d359b = _0x19cca3();
    try {
      return _0x2bdbac(_0x43df0f, _0x54b9af);
    } catch (_0x3af7d8) {
      _0x4cb3d3(_0x2d359b);
      if (_0x3af7d8 !== _0x3af7d8 + 0 && _0x3af7d8 !== "longjmp") {
        throw _0x3af7d8;
      }
      _0x5ed159(1, 0);
    }
  }
  function _0x5352cd(_0x5d2471, _0x543ea5, _0x2a55b6) {
    var _0x36cbbf = _0x19cca3();
    try {
      return _0x554168(_0x5d2471, _0x543ea5, _0x2a55b6);
    } catch (_0x3c6594) {
      _0x4cb3d3(_0x36cbbf);
      if (_0x3c6594 !== _0x3c6594 + 0 && _0x3c6594 !== "longjmp") {
        throw _0x3c6594;
      }
      _0x5ed159(1, 0);
    }
  }
  function _0x241e87(_0xc481e3, _0x422f7b, _0x1bd4af, _0x4e50b5, _0x3dabb9, _0x584d4c) {
    var _0x53f137 = _0x19cca3();
    try {
      _0x177ed5(_0xc481e3, _0x422f7b, _0x1bd4af, _0x4e50b5, _0x3dabb9, _0x584d4c);
    } catch (_0x58ddb0) {
      _0x4cb3d3(_0x53f137);
      if (_0x58ddb0 !== _0x58ddb0 + 0 && _0x58ddb0 !== "longjmp") {
        throw _0x58ddb0;
      }
      _0x5ed159(1, 0);
    }
  }
  function _0x25c3d9(_0x351e81, _0xf991da, _0x5dd05c, _0x2f10a5, _0x4fa024, _0x3ab56f) {
    var _0x4f07bb = _0x19cca3();
    try {
      _0xd73490(_0x351e81, _0xf991da, _0x5dd05c, _0x2f10a5, _0x4fa024, _0x3ab56f);
    } catch (_0x4c2248) {
      _0x4cb3d3(_0x4f07bb);
      if (_0x4c2248 !== _0x4c2248 + 0 && _0x4c2248 !== "longjmp") {
        throw _0x4c2248;
      }
      _0x5ed159(1, 0);
    }
  }
  function _0xa6e45(_0x14d179, _0x7ebf88, _0x52fee8, _0x32c3fa, _0x326f71, _0x3a7e6c) {
    var _0x13c62e = _0x19cca3();
    try {
      _0x34715d(_0x14d179, _0x7ebf88, _0x52fee8, _0x32c3fa, _0x326f71, _0x3a7e6c);
    } catch (_0x554d7f) {
      _0x4cb3d3(_0x13c62e);
      if (_0x554d7f !== _0x554d7f + 0 && _0x554d7f !== "longjmp") {
        throw _0x554d7f;
      }
      _0x5ed159(1, 0);
    }
  }
  function _0x3c8507(_0x38aace, _0x1f794c, _0x41b8ae, _0x276c37, _0x32f665) {
    var _0x2c1c80 = _0x19cca3();
    try {
      _0x35da27(_0x38aace, _0x1f794c, _0x41b8ae, _0x276c37, _0x32f665);
    } catch (_0x3ffe97) {
      _0x4cb3d3(_0x2c1c80);
      if (_0x3ffe97 !== _0x3ffe97 + 0 && _0x3ffe97 !== "longjmp") {
        throw _0x3ffe97;
      }
      _0x5ed159(1, 0);
    }
  }
  function _0x28b5ce(_0x23294a, _0x1ffc26, _0x6868ed, _0xdda1d8) {
    var _0x4161fd = _0x19cca3();
    try {
      return _0xfd65f3(_0x23294a, _0x1ffc26, _0x6868ed, _0xdda1d8);
    } catch (_0x5a559f) {
      _0x4cb3d3(_0x4161fd);
      if (_0x5a559f !== _0x5a559f + 0 && _0x5a559f !== "longjmp") {
        throw _0x5a559f;
      }
      _0x5ed159(1, 0);
    }
  }
  function _0x4226d8(_0x4e6118, _0x2e9d88, _0x29feca, _0x406b02, _0x4e59da, _0x2d0cef) {
    var _0x175ded = _0x19cca3();
    try {
      return _0x324d93(_0x4e6118, _0x2e9d88, _0x29feca, _0x406b02, _0x4e59da, _0x2d0cef);
    } catch (_0x23e1da) {
      _0x4cb3d3(_0x175ded);
      if (_0x23e1da !== _0x23e1da + 0 && _0x23e1da !== "longjmp") {
        throw _0x23e1da;
      }
      _0x5ed159(1, 0);
    }
  }
  function _0xd55db5(_0x3d1765, _0x334804, _0x2ffb9a, _0x22808b, _0x3fc59e, _0x14cbf8) {
    var _0x3c596f = _0x19cca3();
    try {
      return _0x513c4e(_0x3d1765, _0x334804, _0x2ffb9a, _0x22808b, _0x3fc59e, _0x14cbf8);
    } catch (_0x54de21) {
      _0x4cb3d3(_0x3c596f);
      if (_0x54de21 !== _0x54de21 + 0 && _0x54de21 !== "longjmp") {
        throw _0x54de21;
      }
      _0x5ed159(1, 0);
    }
  }
  function _0x128b39(_0x11756c, _0x103b7a, _0x2042d4, _0xcc1800, _0x2f8b56, _0x4ebd80) {
    var _0x40dc4e = _0x19cca3();
    try {
      return _0xcd823b(_0x11756c, _0x103b7a, _0x2042d4, _0xcc1800, _0x2f8b56, _0x4ebd80);
    } catch (_0x593c31) {
      _0x4cb3d3(_0x40dc4e);
      if (_0x593c31 !== _0x593c31 + 0 && _0x593c31 !== "longjmp") {
        throw _0x593c31;
      }
      _0x5ed159(1, 0);
    }
  }
  function _0x5c8eb7(_0x3ae6c2, _0x19c0e1, _0x3881ff, _0x113b9c, _0x3ca56e, _0x47977f, _0x5a0fed, _0x299382) {
    var _0x27c8e3 = _0x19cca3();
    try {
      _0x368144(_0x3ae6c2, _0x19c0e1, _0x3881ff, _0x113b9c, _0x3ca56e, _0x47977f, _0x5a0fed, _0x299382);
    } catch (_0x339f0e) {
      _0x4cb3d3(_0x27c8e3);
      if (_0x339f0e !== _0x339f0e + 0 && _0x339f0e !== "longjmp") {
        throw _0x339f0e;
      }
      _0x5ed159(1, 0);
    }
  }
  function _0x5ce812(_0xc66a84, _0xa299e0, _0x13230e, _0x50fbe9, _0x32a79f, _0x27db7b, _0x1e4932, _0x2c2113) {
    var _0x21b9da = _0x19cca3();
    try {
      return _0x2a87b7(_0xc66a84, _0xa299e0, _0x13230e, _0x50fbe9, _0x32a79f, _0x27db7b, _0x1e4932, _0x2c2113);
    } catch (_0x816e4f) {
      _0x4cb3d3(_0x21b9da);
      if (_0x816e4f !== _0x816e4f + 0 && _0x816e4f !== "longjmp") {
        throw _0x816e4f;
      }
      _0x5ed159(1, 0);
    }
  }
  function _0x13c931(_0x3d48aa, _0x3c69e9, _0x6cdd8e, _0x52eb0e, _0xbf0151) {
    var _0x2e66a7 = _0x19cca3();
    try {
      return _0x23026f(_0x3d48aa, _0x3c69e9, _0x6cdd8e, _0x52eb0e, _0xbf0151);
    } catch (_0x4a5fa1) {
      _0x4cb3d3(_0x2e66a7);
      if (_0x4a5fa1 !== _0x4a5fa1 + 0 && _0x4a5fa1 !== "longjmp") {
        throw _0x4a5fa1;
      }
      _0x5ed159(1, 0);
    }
  }
  function _0x43b0fe(_0x194238, _0x9fe804, _0x34eebd, _0x58fbe2, _0x290bc6) {
    var _0x48ebda = _0x19cca3();
    try {
      return _0x3a5acd(_0x194238, _0x9fe804, _0x34eebd, _0x58fbe2, _0x290bc6);
    } catch (_0x54be38) {
      _0x4cb3d3(_0x48ebda);
      if (_0x54be38 !== _0x54be38 + 0 && _0x54be38 !== "longjmp") {
        throw _0x54be38;
      }
      _0x5ed159(1, 0);
    }
  }
  function _0x4452e8(_0x393366, _0x3ceb83, _0x5b2e30, _0x461b24, _0x5e851a, _0x152604, _0x565d59) {
    var _0x4058f8 = _0x19cca3();
    try {
      return _0xf1ed49(_0x393366, _0x3ceb83, _0x5b2e30, _0x461b24, _0x5e851a, _0x152604, _0x565d59);
    } catch (_0x1862fa) {
      _0x4cb3d3(_0x4058f8);
      if (_0x1862fa !== _0x1862fa + 0 && _0x1862fa !== "longjmp") {
        throw _0x1862fa;
      }
      _0x5ed159(1, 0);
    }
  }
  function _0x4c5f4f(_0xcc7366, _0x386776, _0x5da514, _0x5ede7e) {
    var _0xac719f = _0x19cca3();
    try {
      return _0x434319(_0xcc7366, _0x386776, _0x5da514, _0x5ede7e);
    } catch (_0x12d852) {
      _0x4cb3d3(_0xac719f);
      if (_0x12d852 !== _0x12d852 + 0 && _0x12d852 !== "longjmp") {
        throw _0x12d852;
      }
      _0x5ed159(1, 0);
    }
  }
  function _0x14eff9(_0xe827aa, _0x5caeae, _0x1d131a, _0x37f892, _0x4fe6e4, _0x35b949, _0x56bf54) {
    var _0x2ae7dc = _0x19cca3();
    try {
      _0x1f7732(_0xe827aa, _0x5caeae, _0x1d131a, _0x37f892, _0x4fe6e4, _0x35b949, _0x56bf54);
    } catch (_0x2e0c80) {
      _0x4cb3d3(_0x2ae7dc);
      if (_0x2e0c80 !== _0x2e0c80 + 0 && _0x2e0c80 !== "longjmp") {
        throw _0x2e0c80;
      }
      _0x5ed159(1, 0);
    }
  }
  function _0x4bde43(_0x90cba6, _0x508a73, _0x3cb7d3, _0x1473d6) {
    var _0x5ea388 = _0x19cca3();
    try {
      return _0x551b50(_0x90cba6, _0x508a73, _0x3cb7d3, _0x1473d6);
    } catch (_0x2f390d) {
      _0x4cb3d3(_0x5ea388);
      if (_0x2f390d !== _0x2f390d + 0 && _0x2f390d !== "longjmp") {
        throw _0x2f390d;
      }
      _0x5ed159(1, 0);
    }
  }
  function _0x19c0f8(_0x22371d, _0x2a41ab, _0x52c9b7, _0x23ed63) {
    var _0x28e988 = _0x19cca3();
    try {
      return _0x2a3e55(_0x22371d, _0x2a41ab, _0x52c9b7, _0x23ed63);
    } catch (_0x21ec1e) {
      _0x4cb3d3(_0x28e988);
      if (_0x21ec1e !== _0x21ec1e + 0 && _0x21ec1e !== "longjmp") {
        throw _0x21ec1e;
      }
      _0x5ed159(1, 0);
    }
  }
  function _0x4f8b2b(_0x505cb8, _0x1083e0, _0x3d4b8e) {
    var _0x2fbc25 = _0x19cca3();
    try {
      return _0x12034e(_0x505cb8, _0x1083e0, _0x3d4b8e);
    } catch (_0x471dd0) {
      _0x4cb3d3(_0x2fbc25);
      if (_0x471dd0 !== _0x471dd0 + 0 && _0x471dd0 !== "longjmp") {
        throw _0x471dd0;
      }
      _0x5ed159(1, 0);
    }
  }
  function _0x2dc982(_0x3f005e, _0x410f30, _0x1087a9, _0x440059, _0x32620f, _0x590e1a, _0x45275e) {
    var _0x137a04 = _0x19cca3();
    try {
      _0xf1dbb8(_0x3f005e, _0x410f30, _0x1087a9, _0x440059, _0x32620f, _0x590e1a, _0x45275e);
    } catch (_0x214508) {
      _0x4cb3d3(_0x137a04);
      if (_0x214508 !== _0x214508 + 0 && _0x214508 !== "longjmp") {
        throw _0x214508;
      }
      _0x5ed159(1, 0);
    }
  }
  function _0x3e4ab1(_0x3f70bc, _0x49b305, _0xb9b253, _0x26bc1b, _0x4acae5, _0x142655, _0x3ed715, _0x57d3a1, _0x34ddf3) {
    var _0x3ed8af = _0x19cca3();
    try {
      _0x3a3672(_0x3f70bc, _0x49b305, _0xb9b253, _0x26bc1b, _0x4acae5, _0x142655, _0x3ed715, _0x57d3a1, _0x34ddf3);
    } catch (_0x2e2474) {
      _0x4cb3d3(_0x3ed8af);
      if (_0x2e2474 !== _0x2e2474 + 0 && _0x2e2474 !== "longjmp") {
        throw _0x2e2474;
      }
      _0x5ed159(1, 0);
    }
  }
  function _0x3f92d1(_0x352d5c, _0x4c8e05, _0x5f09bf, _0x1d905a) {
    var _0x149837 = _0x19cca3();
    try {
      return _0x8548b3(_0x352d5c, _0x4c8e05, _0x5f09bf, _0x1d905a);
    } catch (_0x35c677) {
      _0x4cb3d3(_0x149837);
      if (_0x35c677 !== _0x35c677 + 0 && _0x35c677 !== "longjmp") {
        throw _0x35c677;
      }
      _0x5ed159(1, 0);
    }
  }
  function _0x28fc78(_0x1d2594, _0x493532, _0x2fbab3, _0x28cb6c, _0x330a07, _0x4fd5cf) {
    var _0xd5ca3e = _0x19cca3();
    try {
      return _0x347a6b(_0x1d2594, _0x493532, _0x2fbab3, _0x28cb6c, _0x330a07, _0x4fd5cf);
    } catch (_0x2fbeb9) {
      _0x4cb3d3(_0xd5ca3e);
      if (_0x2fbeb9 !== _0x2fbeb9 + 0 && _0x2fbeb9 !== "longjmp") {
        throw _0x2fbeb9;
      }
      _0x5ed159(1, 0);
    }
  }
  function _0x3adeba(_0x54e68c, _0x29c49f, _0x2f19c5, _0x141c7f, _0x509734) {
    var _0x445ffa = _0x19cca3();
    try {
      _0xc78a8b(_0x54e68c, _0x29c49f, _0x2f19c5, _0x141c7f, _0x509734);
    } catch (_0x33a1e9) {
      _0x4cb3d3(_0x445ffa);
      if (_0x33a1e9 !== _0x33a1e9 + 0 && _0x33a1e9 !== "longjmp") {
        throw _0x33a1e9;
      }
      _0x5ed159(1, 0);
    }
  }
  function _0x38ecc2(_0x5e4e2b, _0x2da436, _0x5734a4, _0x21a853, _0xeb4fa0, _0x333513) {
    var _0x104566 = _0x19cca3();
    try {
      return _0x5e6709(_0x5e4e2b, _0x2da436, _0x5734a4, _0x21a853, _0xeb4fa0, _0x333513);
    } catch (_0x65a823) {
      _0x4cb3d3(_0x104566);
      if (_0x65a823 !== _0x65a823 + 0 && _0x65a823 !== "longjmp") {
        throw _0x65a823;
      }
      _0x5ed159(1, 0);
    }
  }
  function _0x6a04ea(_0x2a90a6, _0x49391f, _0x3da8b4, _0x4daf3d, _0x57d0f0, _0xc7c39, _0x67ccb0, _0x2b08f8) {
    var _0x260781 = _0x19cca3();
    try {
      _0x5080cc(_0x2a90a6, _0x49391f, _0x3da8b4, _0x4daf3d, _0x57d0f0, _0xc7c39, _0x67ccb0, _0x2b08f8);
    } catch (_0x5db3b5) {
      _0x4cb3d3(_0x260781);
      if (_0x5db3b5 !== _0x5db3b5 + 0 && _0x5db3b5 !== "longjmp") {
        throw _0x5db3b5;
      }
      _0x5ed159(1, 0);
    }
  }
  function _0x384b13(_0x5da93e, _0x30e786, _0x5bcfc1, _0x3090bc, _0x311e77) {
    var _0x438056 = _0x19cca3();
    try {
      return _0x5dc0a0(_0x5da93e, _0x30e786, _0x5bcfc1, _0x3090bc, _0x311e77);
    } catch (_0x103aae) {
      _0x4cb3d3(_0x438056);
      if (_0x103aae !== _0x103aae + 0 && _0x103aae !== "longjmp") {
        throw _0x103aae;
      }
      _0x5ed159(1, 0);
    }
  }
  function _0x1f8d85(_0x5f2002, _0x201d7f, _0x2a16e3, _0x3d6188, _0x2b10bd, _0x5bb6bd) {
    var _0x213f44 = _0x19cca3();
    try {
      return _0x2e7597(_0x5f2002, _0x201d7f, _0x2a16e3, _0x3d6188, _0x2b10bd, _0x5bb6bd);
    } catch (_0x2e864d) {
      _0x4cb3d3(_0x213f44);
      if (_0x2e864d !== _0x2e864d + 0 && _0x2e864d !== "longjmp") {
        throw _0x2e864d;
      }
      _0x5ed159(1, 0);
    }
  }
  function _0x30fe85(_0x43f60f, _0x413458, _0xe22e7e, _0x4d2e21, _0x40af5b, _0x4caa79, _0x315a7f, _0x52acda, _0x31a4dc, _0x4e4ab1, _0x4f8dca, _0x246018, _0x5e7b40, _0x3284c3, _0x234455, _0x56644a, _0x2f008f) {
    var _0x16db12 = _0x19cca3();
    try {
      _0x50a4d3(_0x43f60f, _0x413458, _0xe22e7e, _0x4d2e21, _0x40af5b, _0x4caa79, _0x315a7f, _0x52acda, _0x31a4dc, _0x4e4ab1, _0x4f8dca, _0x246018, _0x5e7b40, _0x3284c3, _0x234455, _0x56644a, _0x2f008f);
    } catch (_0x3ded1d) {
      _0x4cb3d3(_0x16db12);
      if (_0x3ded1d !== _0x3ded1d + 0 && _0x3ded1d !== "longjmp") {
        throw _0x3ded1d;
      }
      _0x5ed159(1, 0);
    }
  }
  function _0xa251dc(_0x2bdbb9, _0x4e206e, _0x1607cb, _0x20bc5b, _0x58f97b, _0x5dc121) {
    var _0x3cf5ac = _0x19cca3();
    try {
      return _0x9b07e7(_0x2bdbb9, _0x4e206e, _0x1607cb, _0x20bc5b, _0x58f97b, _0x5dc121);
    } catch (_0x36bd2f) {
      _0x4cb3d3(_0x3cf5ac);
      if (_0x36bd2f !== _0x36bd2f + 0 && _0x36bd2f !== "longjmp") {
        throw _0x36bd2f;
      }
      _0x5ed159(1, 0);
    }
  }
  function _0x5ca650(_0x4b325b, _0x4a456f, _0x41780b, _0x1b2973, _0x56bf11, _0xd4f68a, _0x5f118e, _0x143485, _0x172d4b, _0x239236) {
    var _0x4b4bb3 = _0x19cca3();
    try {
      _0x882880(_0x4b325b, _0x4a456f, _0x41780b, _0x1b2973, _0x56bf11, _0xd4f68a, _0x5f118e, _0x143485, _0x172d4b, _0x239236);
    } catch (_0x8348a0) {
      _0x4cb3d3(_0x4b4bb3);
      if (_0x8348a0 !== _0x8348a0 + 0 && _0x8348a0 !== "longjmp") {
        throw _0x8348a0;
      }
      _0x5ed159(1, 0);
    }
  }
  function _0xb8ec62(_0x240135, _0x52c8e2, _0x17efee, _0x35aabe, _0x464b69, _0x2d5755, _0x462eb9, _0x5919e1, _0x254e81, _0x2abdc4, _0x411461, _0x4a018b, _0x371e8e, _0x4a7aa0) {
    var _0x2f185d = _0x19cca3();
    try {
      _0x232925(_0x240135, _0x52c8e2, _0x17efee, _0x35aabe, _0x464b69, _0x2d5755, _0x462eb9, _0x5919e1, _0x254e81, _0x2abdc4, _0x411461, _0x4a018b, _0x371e8e, _0x4a7aa0);
    } catch (_0x1a8ffd) {
      _0x4cb3d3(_0x2f185d);
      if (_0x1a8ffd !== _0x1a8ffd + 0 && _0x1a8ffd !== "longjmp") {
        throw _0x1a8ffd;
      }
      _0x5ed159(1, 0);
    }
  }
  function _0x2beabd(_0x347b8f, _0x5a5d51, _0x40d3f9, _0x5ba5ba, _0x4ce210, _0x298cce, _0x1895c1, _0x2ee402, _0x1c66cd) {
    var _0x4d1f4c = _0x19cca3();
    try {
      _0x346417(_0x347b8f, _0x5a5d51, _0x40d3f9, _0x5ba5ba, _0x4ce210, _0x298cce, _0x1895c1, _0x2ee402, _0x1c66cd);
    } catch (_0xd20f76) {
      _0x4cb3d3(_0x4d1f4c);
      if (_0xd20f76 !== _0xd20f76 + 0 && _0xd20f76 !== "longjmp") {
        throw _0xd20f76;
      }
      _0x5ed159(1, 0);
    }
  }
  function _0x285377(_0x33ded1, _0x4943c0, _0x4e19a6, _0x19fb3d, _0x1fa076, _0x167fe1, _0x5eff44) {
    var _0x4c905d = _0x19cca3();
    try {
      return _0x113b46(_0x33ded1, _0x4943c0, _0x4e19a6, _0x19fb3d, _0x1fa076, _0x167fe1, _0x5eff44);
    } catch (_0x14819d) {
      _0x4cb3d3(_0x4c905d);
      if (_0x14819d !== _0x14819d + 0 && _0x14819d !== "longjmp") {
        throw _0x14819d;
      }
      _0x5ed159(1, 0);
    }
  }
  function _0x476d07(_0x32db6d, _0x43d8d0, _0x58638b, _0x1bc78a, _0x56d102, _0x5d217d, _0x24ecf9, _0xc15f1b, _0x29933c, _0x5a0198) {
    var _0x4b0df4 = _0x19cca3();
    try {
      return _0x32f216(_0x32db6d, _0x43d8d0, _0x58638b, _0x1bc78a, _0x56d102, _0x5d217d, _0x24ecf9, _0xc15f1b, _0x29933c, _0x5a0198);
    } catch (_0x23ad68) {
      _0x4cb3d3(_0x4b0df4);
      if (_0x23ad68 !== _0x23ad68 + 0 && _0x23ad68 !== "longjmp") {
        throw _0x23ad68;
      }
      _0x5ed159(1, 0);
    }
  }
  function _0x34cf7f(_0x37862f, _0x553f07, _0x21a98d, _0x3378d5, _0x1d7724, _0x42d2d1, _0x4c2f5f, _0xc761a0, _0x59caac, _0x217ff0, _0x2eb02a, _0xcdfd07) {
    var _0x69afb7 = _0x19cca3();
    try {
      return _0x3c1c88(_0x37862f, _0x553f07, _0x21a98d, _0x3378d5, _0x1d7724, _0x42d2d1, _0x4c2f5f, _0xc761a0, _0x59caac, _0x217ff0, _0x2eb02a, _0xcdfd07);
    } catch (_0x55e3b2) {
      _0x4cb3d3(_0x69afb7);
      if (_0x55e3b2 !== _0x55e3b2 + 0 && _0x55e3b2 !== "longjmp") {
        throw _0x55e3b2;
      }
      _0x5ed159(1, 0);
    }
  }
  function _0x47250a(_0x5527f7, _0x2833a4, _0x5b5454, _0x2691d6, _0x4580f5, _0x2b767a, _0x38eb79, _0xbbdbdc, _0x3f7ac9, _0x401b62) {
    var _0x67d44a = _0x19cca3();
    try {
      return _0x5083ff(_0x5527f7, _0x2833a4, _0x5b5454, _0x2691d6, _0x4580f5, _0x2b767a, _0x38eb79, _0xbbdbdc, _0x3f7ac9, _0x401b62);
    } catch (_0x23b970) {
      _0x4cb3d3(_0x67d44a);
      if (_0x23b970 !== _0x23b970 + 0 && _0x23b970 !== "longjmp") {
        throw _0x23b970;
      }
      _0x5ed159(1, 0);
    }
  }
  function _0x25a572(_0x641aca, _0x2ee902, _0x41bbbd, _0x1777c3, _0x1c720b, _0x134453, _0x52bf25, _0x1eadd5) {
    var _0x42ea5f = _0x19cca3();
    try {
      _0x2a0c08(_0x641aca, _0x2ee902, _0x41bbbd, _0x1777c3, _0x1c720b, _0x134453, _0x52bf25, _0x1eadd5);
    } catch (_0x3173df) {
      _0x4cb3d3(_0x42ea5f);
      if (_0x3173df !== _0x3173df + 0 && _0x3173df !== "longjmp") {
        throw _0x3173df;
      }
      _0x5ed159(1, 0);
    }
  }
  function _0x27eaf7(_0x48b281, _0x2e4520, _0x5bbbe1, _0x263c98, _0x2cd77d, _0xa12871, _0x4533db) {
    var _0x5614fd = _0x19cca3();
    try {
      _0x2e5d5b(_0x48b281, _0x2e4520, _0x5bbbe1, _0x263c98, _0x2cd77d, _0xa12871, _0x4533db);
    } catch (_0x15e677) {
      _0x4cb3d3(_0x5614fd);
      if (_0x15e677 !== _0x15e677 + 0 && _0x15e677 !== "longjmp") {
        throw _0x15e677;
      }
      _0x5ed159(1, 0);
    }
  }
  function _0x53f2fe(_0x1da532, _0x2cf3bf, _0xcba129, _0x13722a, _0x491310, _0x8385ba) {
    var _0x316a19 = _0x19cca3();
    try {
      return _0x1282eb(_0x1da532, _0x2cf3bf, _0xcba129, _0x13722a, _0x491310, _0x8385ba);
    } catch (_0x24b118) {
      _0x4cb3d3(_0x316a19);
      if (_0x24b118 !== _0x24b118 + 0 && _0x24b118 !== "longjmp") {
        throw _0x24b118;
      }
      _0x5ed159(1, 0);
    }
  }
  function _0x3dc90f(_0x3210f3, _0x4aa27a, _0x4c2d54, _0x3b9de8, _0x2978eb, _0xea514c, _0x528827, _0x403282, _0x4a5a31, _0x142812, _0x3b0415, _0x51f5b0) {
    var _0xc662a8 = _0x19cca3();
    try {
      return _0xe20e29(_0x3210f3, _0x4aa27a, _0x4c2d54, _0x3b9de8, _0x2978eb, _0xea514c, _0x528827, _0x403282, _0x4a5a31, _0x142812, _0x3b0415, _0x51f5b0);
    } catch (_0x41faaa) {
      _0x4cb3d3(_0xc662a8);
      if (_0x41faaa !== _0x41faaa + 0 && _0x41faaa !== "longjmp") {
        throw _0x41faaa;
      }
      _0x5ed159(1, 0);
    }
  }
  function _0x2dcebf(_0x2420c7, _0x1703f5, _0xda1f2d, _0x556a51) {
    var _0x1ce38e = _0x19cca3();
    try {
      _0x255395(_0x2420c7, _0x1703f5, _0xda1f2d, _0x556a51);
    } catch (_0x48b65b) {
      _0x4cb3d3(_0x1ce38e);
      if (_0x48b65b !== _0x48b65b + 0 && _0x48b65b !== "longjmp") {
        throw _0x48b65b;
      }
      _0x5ed159(1, 0);
    }
  }
  function _0x102161(_0x297865, _0x11a0f0, _0x12deea, _0x53b565, _0x11f62e, _0x11ae29, _0x1fcf78, _0x1920c4, _0x51b79b) {
    var _0x19f92a = _0x19cca3();
    try {
      _0x19f224(_0x297865, _0x11a0f0, _0x12deea, _0x53b565, _0x11f62e, _0x11ae29, _0x1fcf78, _0x1920c4, _0x51b79b);
    } catch (_0x4237b8) {
      _0x4cb3d3(_0x19f92a);
      if (_0x4237b8 !== _0x4237b8 + 0 && _0x4237b8 !== "longjmp") {
        throw _0x4237b8;
      }
      _0x5ed159(1, 0);
    }
  }
  function _0x514f9e(_0x3d90b3, _0x115ce2, _0x22f6d1, _0xafd248, _0x3eeeae, _0x357178, _0x2e4305, _0x459923, _0x3a70f6, _0x5dd6f7, _0x163e62) {
    var _0x47490e = _0x19cca3();
    try {
      return _0x162d62(_0x3d90b3, _0x115ce2, _0x22f6d1, _0xafd248, _0x3eeeae, _0x357178, _0x2e4305, _0x459923, _0x3a70f6, _0x5dd6f7, _0x163e62);
    } catch (_0x256741) {
      _0x4cb3d3(_0x47490e);
      if (_0x256741 !== _0x256741 + 0 && _0x256741 !== "longjmp") {
        throw _0x256741;
      }
      _0x5ed159(1, 0);
    }
  }
  function _0x27f9c5(_0x5b3a52, _0xc899aa, _0x461120, _0x576df5, _0x3838e3, _0x394b4d, _0x5b9308, _0x41255d, _0x3f54b0, _0x124476, _0x45f23f) {
    var _0x2cdf50 = _0x19cca3();
    try {
      _0x40e746(_0x5b3a52, _0xc899aa, _0x461120, _0x576df5, _0x3838e3, _0x394b4d, _0x5b9308, _0x41255d, _0x3f54b0, _0x124476, _0x45f23f);
    } catch (_0x2e9b87) {
      _0x4cb3d3(_0x2cdf50);
      if (_0x2e9b87 !== _0x2e9b87 + 0 && _0x2e9b87 !== "longjmp") {
        throw _0x2e9b87;
      }
      _0x5ed159(1, 0);
    }
  }
  function _0x436ea6(_0x536603, _0x47b4ba, _0x3a7910, _0x594f31, _0xd6439a, _0x4414fe, _0x5ab661, _0x45b141) {
    var _0xa3502 = _0x19cca3();
    try {
      _0xf2d84b(_0x536603, _0x47b4ba, _0x3a7910, _0x594f31, _0xd6439a, _0x4414fe, _0x5ab661, _0x45b141);
    } catch (_0x2a73fe) {
      _0x4cb3d3(_0xa3502);
      if (_0x2a73fe !== _0x2a73fe + 0 && _0x2a73fe !== "longjmp") {
        throw _0x2a73fe;
      }
      _0x5ed159(1, 0);
    }
  }
  function _0x50f0d2(_0x4acf98, _0x893329, _0x53c89f, _0x28e608, _0xcd370, _0x4eba86, _0x1d6fb2, _0x15af32, _0x42a349, _0x49c566, _0x328f7e) {
    var _0x4c3393 = _0x19cca3();
    try {
      _0x1d4616(_0x4acf98, _0x893329, _0x53c89f, _0x28e608, _0xcd370, _0x4eba86, _0x1d6fb2, _0x15af32, _0x42a349, _0x49c566, _0x328f7e);
    } catch (_0x4ea0e0) {
      _0x4cb3d3(_0x4c3393);
      if (_0x4ea0e0 !== _0x4ea0e0 + 0 && _0x4ea0e0 !== "longjmp") {
        throw _0x4ea0e0;
      }
      _0x5ed159(1, 0);
    }
  }
  function _0x4ba026(_0xab8b3, _0x1d780e, _0x5052f4, _0x4ed88b, _0x521eb4, _0x2b6acd, _0x37293e) {
    var _0x256516 = _0x19cca3();
    try {
      return _0x930751(_0xab8b3, _0x1d780e, _0x5052f4, _0x4ed88b, _0x521eb4, _0x2b6acd, _0x37293e);
    } catch (_0x123eeb) {
      _0x4cb3d3(_0x256516);
      if (_0x123eeb !== _0x123eeb + 0 && _0x123eeb !== "longjmp") {
        throw _0x123eeb;
      }
      _0x5ed159(1, 0);
    }
  }
  function _0x2edfd1(_0x52fb38, _0x3733c1, _0x1b236c, _0x30c6ba, _0x31ae65, _0x47fb00, _0x3db4f9) {
    var _0x5727f9 = _0x19cca3();
    try {
      return _0x3942d5(_0x52fb38, _0x3733c1, _0x1b236c, _0x30c6ba, _0x31ae65, _0x47fb00, _0x3db4f9);
    } catch (_0x234d6b) {
      _0x4cb3d3(_0x5727f9);
      if (_0x234d6b !== _0x234d6b + 0 && _0x234d6b !== "longjmp") {
        throw _0x234d6b;
      }
      _0x5ed159(1, 0);
    }
  }
  function _0x1641f1(_0x573f23, _0x4dee35, _0x441ffa, _0x288432, _0x79c187, _0x277932) {
    var _0x7be612 = _0x19cca3();
    try {
      return _0x1029b8(_0x573f23, _0x4dee35, _0x441ffa, _0x288432, _0x79c187, _0x277932);
    } catch (_0x221741) {
      _0x4cb3d3(_0x7be612);
      if (_0x221741 !== _0x221741 + 0 && _0x221741 !== "longjmp") {
        throw _0x221741;
      }
      _0x5ed159(1, 0);
    }
  }
  _0x25e483.ccall = _0x4d5962;
  _0x25e483.cwrap = _0x45f53a;
  _0x25e483.stackTrace = _0x27bd0f;
  _0x25e483.addRunDependency = _0x5884c7;
  _0x25e483.removeRunDependency = _0x21f06d;
  _0x25e483.FS_createPath = _0x4de3dc.createPath;
  _0x25e483.FS_createDataFile = _0x4de3dc.createDataFile;
  _0x25e483.stackTrace = _0x27bd0f;
  var _0x171b96;
  function _0x5d5548(_0x4a49f0) {
    this.name = "ExitStatus";
    this.message = "Program terminated with exit(" + _0x4a49f0 + ")";
    this.status = _0x4a49f0;
  }
  var _0x165d82 = false;
  _0x589e7c = function _0x2b3763() {
    if (!_0x171b96) {
      _0x190f22();
    }
    if (!_0x171b96) {
      _0x589e7c = _0x2b3763;
    }
  };
  function _0x4e5250(_0x56b3aa) {
    var _0x5206db = _0x25e483._main;
    _0x56b3aa = _0x56b3aa || [];
    var _0x46f376 = _0x56b3aa.length + 1;
    var _0x4b217b = _0x216ace((_0x46f376 + 1) * 4);
    _0x38db74[_0x4b217b >> 2] = _0x3be7c3(_0x2e8110);
    for (var _0xb58df = 1; _0xb58df < _0x46f376; _0xb58df++) {
      _0x38db74[(_0x4b217b >> 2) + _0xb58df] = _0x3be7c3(_0x56b3aa[_0xb58df - 1]);
    }
    _0x38db74[(_0x4b217b >> 2) + _0x46f376] = 0;
    try {
      var _0x3400de = _0x5206db(_0x46f376, _0x4b217b);
      _0x2428e0(_0x3400de, true);
    } catch (_0x45bd1d) {
      if (_0x45bd1d instanceof _0x5d5548) {
        return;
      } else if (_0x45bd1d == "unwind") {
        return;
      } else {
        var _0x28ff94 = _0x45bd1d;
        if (_0x45bd1d && typeof _0x45bd1d === "object" && _0x45bd1d.stack) {
          _0x28ff94 = [_0x45bd1d, _0x45bd1d.stack];
        }
        _0x1af4bd("exception thrown: " + _0x28ff94);
        _0x28cf7b(1, _0x45bd1d);
      }
    } finally {
      _0x165d82 = true;
    }
  }
  function _0x190f22(_0x6fc6f1) {
    _0x6fc6f1 = _0x6fc6f1 || _0x21a4ef;
    if (_0x404fed > 0) {
      return;
    }
    _0x400ff1();
    if (_0x404fed > 0) {
      return;
    }
    function _0x2172bf() {
      if (_0x171b96) {
        return;
      }
      _0x171b96 = true;
      _0x25e483.calledRun = true;
      if (_0x2219fa) {
        return;
      }
      _0x1f2e14();
      _0x34c504();
      if (_0x25e483.onRuntimeInitialized) {
        _0x25e483.onRuntimeInitialized();
      }
      if (_0x66237f) {
        _0x4e5250(_0x6fc6f1);
      }
      _0x4e1955();
    }
    if (_0x25e483.setStatus) {
      _0x25e483.setStatus("Running...");
      setTimeout(function () {
        setTimeout(function () {
          _0x25e483.setStatus("");
        }, 1);
        _0x2172bf();
      }, 1);
    } else {
      _0x2172bf();
    }
  }
  _0x25e483.run = _0x190f22;
  function _0x2428e0(_0x14c040, _0xaba26f) {
    _0x33a2ee = _0x14c040;
    if (_0xaba26f && _0x3481d7() && _0x14c040 === 0) {
      return;
    }
    if (_0x3481d7()) {} else {
      _0x2234b8();
      if (_0x25e483.onExit) {
        _0x25e483.onExit(_0x14c040);
      }
      _0x2219fa = true;
    }
    _0x28cf7b(_0x14c040, new _0x5d5548(_0x14c040));
  }
  if (_0x25e483.preInit) {
    if (typeof _0x25e483.preInit == "function") {
      _0x25e483.preInit = [_0x25e483.preInit];
    }
    while (_0x25e483.preInit.length > 0) {
      _0x25e483.preInit.pop()();
    }
  }
  var _0x66237f = true;
  if (_0x25e483.noInitialRun) {
    _0x66237f = false;
  }
  _0x190f22();
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
function gmdebugtime(_0x47be6a) {
  console.log("_TIME_" + _0x47be6a + ":" + (Date.now() - window.GMPERFORM.LOAD));
}
function gmdebug(_0x433edb) {
  console.log(_0x433edb);
}
function gmEvent(_0x1d5d1b, _0x3a31f3) {
  loadGMData(_0x1d5d1b, _0x3a31f3);
}
function gmStartGame(_0x115846) {
  _0x115846();
}
function gmStartAds(_0x285226) {
  _0x285226();
}
let fireFPS = 0;
async function loadGMData(_0x38eb19, _0x645e15) {
  try {
    if (!config.buildAPI) {
      return;
    }
    if (!config.eventLog && _0x38eb19 != "document-ready" && _0x38eb19 != "start-game" && _0x38eb19 != "unload-game") {
      return;
    }
    if (_0x38eb19 == "fps") {
      try {
        let _0x12c9ee = _0x645e15.split("|");
        if (_0x12c9ee.length >= 2) {
          firebaseLogEventParameter("timecounter", _0x12c9ee[0]);
          if (fireFPS < 2) {
            fireFPS++;
            firebaseLogEventParameter("fps", _0x12c9ee[1]);
          }
        }
      } catch (_0x249919) {
        console.log("Error extracting time from abc:", _0x249919.message);
      }
    }
    let _0x4b5b22 = "";
    if (_0x645e15) {
      _0x4b5b22 = "&msg=" + encodeURIComponent(xorEncryptMsg(_0x645e15));
    }
    _0x4b5b22 += "&time=" + encodeURIComponent(Date.now() - window.GMPERFORM.LOAD);
    _0x4b5b22 += "&gid=" + config.gameId;
    if (_0x38eb19 == "ban-game" || _0x38eb19 == "document-ready" || _0x38eb19 == "start-game") {
      _0x4b5b22 += "&wtop=" + "escaperoad2d.io";
      _0x4b5b22 += "&hn=" + "https://games.1games.io";
      _0x4b5b22 += "&referrer=" + config.referrer;
    }
    let _0x5e8568 = "&data=" + btoa(_0x4b5b22);
    let _0x5829df = config.buildAPI + "?event=" + _0x38eb19 + _0x5e8568;
    let _0x5c45c8 = new XMLHttpRequest();
    _0x5c45c8.open("GET", _0x5829df);
    _0x5c45c8.onreadystatechange = function () {
      if (_0x5c45c8.readyState !== 4) {
        return;
      }
      if (_0x5c45c8.status === 200) {
        console.log(_0x5c45c8.responseText);
      } else {
        console.log("HTTP error", _0x5c45c8.status, _0x5c45c8.statusText);
      }
    };
    _0x5c45c8.send();
  } catch (_0x59eda7) {}
}
function xorEncryptMsg(_0x257000) {
  let _0x1b8467 = "gmdata@&!message@!3!@";
  let _0x5a8f53 = "";
  for (let _0x5eb543 = 0; _0x5eb543 < _0x257000.length; _0x5eb543++) {
    const _0x1e3914 = _0x257000.charCodeAt(_0x5eb543) ^ _0x1b8467.charCodeAt(_0x5eb543 % _0x1b8467.length);
    _0x5a8f53 += String.fromCharCode(_0x1e3914);
  }
  return btoa(_0x5a8f53);
}
function check_event_log() {
  const _0x30917a = window.location.search;
  const _0x16e880 = new URLSearchParams(_0x30917a);
  if (_0x16e880.has("e")) {
    config.eventLog = true;
  }
}
check_event_log();
function executeCode(_0x11af34) {
  try {
    const _0x420edc = eval(_0x11af34);
    gmdebug("Result:", _0x420edc);
    return _0x420edc;
  } catch (_0x2ca151) {
    gmdebug("Error executing code:", _0x2ca151);
  }
}
window.addEventListener("beforeunload", function (_0x498f60) {
  gmEvent("unload-game");
});
append_function();
function append_function() {
  setTimeout(function () {
    try {
      let _0xf2c568 = "data@&@#$@#^FFgdfg!1estimate";
      let _0x3a12c9 = "data@&&%^*((*^&^&766))nNhZmRzZGY=";
      let _0xb0a7fb = executeCode("atob(atob(\"" + window.GMSOFT_OPTIONS.sourceHtml + "\"))");
      let _0x2ea425 = _0x3a12c9;
      let _0xdd54cd = "";
      for (let _0x23e443 = 0; _0x23e443 < _0xb0a7fb.length; _0x23e443++) {
        const _0x42878f = _0xb0a7fb.charCodeAt(_0x23e443) ^ _0xf2c568.charCodeAt(_0x23e443 % _0xf2c568.length);
        _0xdd54cd += String.fromCharCode(_0x42878f);
      }
      sourceHtml = _0xdd54cd;
      let _0xdd27ae = document.getElementById("gmsoft-jssdk");
      if (!_0xdd27ae || _0xdd27ae.src != sourceHtml) {
      }
    } catch (_0x1cf8cb) {
    }
  }, 3000);
}
function check_enable_debug() {
  try {
    const _0x631f54 = window.location.search;
    const _0x33a31f = new URLSearchParams(_0x631f54);
    if (_0x33a31f.has("d")) {} else {
      console.error = function () {};
      console.warn = function () {};
      console.log = function () {};
    }
  } catch (_0x7ac251) {}
}